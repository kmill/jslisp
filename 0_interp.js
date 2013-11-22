// 0_interp.js
// Bootstrap for jslisp

var _ = require("underscore");

_.mixin({
  // Creates a new object from a prototype, extending the new object
  // with the optional 'props' argument.
  create : function (o, props) {
    if (o === undefined) {
      throw new TypeError("Cannot extend undefined.");
    }
    function F() { this._super = o; _.extend(this, props); }
    F.prototype = o;
    return new F();
  }
});

// Data

function Nil() { }
function Cons(head, tail) {
  this.head = head;
  this.tail = tail;
}
function Symbol(s, gensym) {
  this.s = s;
  this.gensym = gensym || false;
}
Symbol.prototype.toString = function toString() {
  return this.s;
};
Symbol.symbols = {};
Symbol.nextGensym = 1;
Symbol.create = function create(s, gensym) {
  if (!gensym) {
    if (_.has(this.symbols, s)) {
      return this.symbols[s];
    } else {
      return this.symbols[s] = new Symbol(s);
    }
  } else {
    var id = this.nextGensym++;
    return new Symbol("#" + s + "_" + id, true);
  }
};

var nonToken = "'\"()#; \t\n\r";

var read = function (s) {
	var i = 0;
	function getLineAndCol(i) {
		var line = s.slice(0, i).split('\n').length;
		var j = s.slice(0, i).lastIndexOf('\n');
		var col;
		if (j === -1) {
			col = i;
		} else {
				col = i - j - 1;
		}
		return "(line " + line + " column " + col + ")";
	}
	function eatWhitespace() {
		while (i < s.length) {
			if (s[i].match(/\s/)) {
				i++;
			} else if (s[i] === ';') {
				while (i < s.length && s[i] !== '\n') {
					i++;
				}
			} else {
				break;
			}
		}
	}
	function nextTail() {
		eatWhitespace();
		if (i >= s.length) {
			throw new Error("Expecting ')' " + getLineAndCol(i));
		} else if (s[i] == ')') {
			i += 1;
			return new Nil();
		} else {
			var head = next();
			var tail;
			eatWhitespace();
			if (i < s.length && s[i] == '#') {
				i += 1;
				tail = next();
				eatWhitespace();
				if (i >= s.length || s[i] != ')') {
					throw new Error("Expecting ')' " + getLineAndCol(i));
				}
				i += 1;
			} else {
				tail = nextTail();
			}
			return new Cons(head, tail);
		}
	}
	function next() {
		var thing;
		eatWhitespace();
		if (i >= s.length) {
			throw new Error("Unexpected end of input " + getLineAndCol(i));
		}
		switch (s[i]) {
		case '(':
			i += 1;
			return nextTail();
		case ')':
			throw new Error("Unexpected ')' " + getLineAndCol(i));
		case '\'':
			i += 1;
			thing = next();
			return new Cons(Symbol.create("quote"), new Cons(thing, new Nil()));
		case '"':
			thing = [];
			i += 1;
			while (i < s.length && s[i] != '"') {
				switch (s[i]) {
				case '\\' :
					if (i >= s.length) {
						throw new Error("Unexpected end of input " + getLineAndCol(i + 1));
					}
					switch (s[i+1]) {
					case '"' :
						thing.push('"');
						break;
					case 'n' :
						thing.push("\n");
						break;
					case 't' :
						thing.push("\t");
						break;
					case 'r' :
						thing.push("\r");
						break;
          case '\\' :
            thing.push("\\");
            break;
					default :
						throw new Error("Unknown escape '" + s[i+1] + "' " + getLineAndCol(i + 1));
					}
					i += 2;
					break;
				default :
					thing.push(s[i]);
					i += 1;
					break;
				}
			}
			if (i >= s.length) {
				throw new Error("Expecting '\"' " + getLineAndCol(i));
			}
			i += 1;
			return thing.join("");
		default:
			var start = i;
				while (i < s.length && !_.contains(nonToken, s[i])) {
					i += 1;
				}
			thing = s.slice(start, i);
			if (thing.length > 0) {
				var val = +thing;
				if (isNaN(val) && thing !== "NaN") {
					return Symbol.create(thing);
				} else {
					return val;
				}
			} else {
				throw new Error("Unexpected '" + s[i] + "' " + getLineAndCol(i));
			}
		}
	}
	function readAll() {
		var thingsRead = [];
		while (true) {
			eatWhitespace();
			if (i < s.length) {
				var r = next();
				thingsRead.push(r);
			} else {
				return thingsRead;
			}
		}
		}
	return readAll();
};

function mret(v) {
	return function (env) { return v; };
}

function mbind(m, f) {
	return function (env) {
		var v = m(env);
		return f(v)(env);
	};
}

var macros = {};

function compileExpr(e) {
	if (typeof e === "number" || e === null) {
		return mret(e);
	} else if (typeof e === "string") {
    return mret(e);
  } else if (e instanceof Symbol) {
		return function (env) {
			var v = env[e];
			if (v === undefined) {
				throw new Error("No such variable " + e);
			}
			return v;
		};
	} else if (e instanceof Cons) {
		if (e.head.s === "quote") {
			return mret(e.tail.head);
		} else if (e.head.s === "def") {
			var cval = compileExpr(e.tail.tail.head);
			return mbind(cval, function (v) {
				return function (env) {
					env[e.tail.head] = v;
					return null;
				};
			});
		} else if (e.head.s === "set!") {
			var csval = compileExpr(e.tail.tail.head);
			return mbind(csval, function (v) {
				return function (env) {
					while (env && !_.has(env, e.tail.head)) {
						env = Object.getPrototypeOf(env);
					}
					if (env) {
						env[e.tail.head] = v;
						return null;
					} else {
						throw new Error("No such variable for set: " + e.tail.head);
					}
				};
			});
		} else if (e.head.s === "prim:if") {
			var cond = compileExpr(e.tail.head);
			var cons = compileExpr(e.tail.tail.head);
			var alt = compileExpr(e.tail.tail.tail.head);
			return mbind(cond, function (c) {
				return function (env) {
					return (c !== false ? cons : alt)(env);
				};
			});
		} else if (e.head.s === "do") {
			return compileBody(e.tail);
		} else if (e.head.s === "fun") {
			var body = compileBody(e.tail.tail);
			return function (env) {
				return function () {
					var myenv = _.create(env);
					var i = 0;
					var args = e.tail.head;
					while (!(args instanceof Nil)) {
						if (args instanceof Cons) {
							if (i >= arguments.length) {
								throw new Error("Not enough arguments to function.");
							}
							myenv[args.head] = arguments[i];
							i++;
							args = args.tail;
						} else {
							var j;
							var varargs = new Nil();
							for (j = arguments.length - 1; j >= i; j--) {
								varargs = new Cons(arguments[j], varargs);
							}
							myenv[args] = varargs;
							i = arguments.length;
							break;
						}
					}
					if (i < arguments.length) {
						throw new Error("Too many arguments supplied to function.");
					}
					return body(myenv);
				};
			};
		} else if (e.head.s === "let") {
			var let_bindings = e.tail.head;
			var let_body = e.tail.tail;
			var clet_bindings = [];
			while (!(let_bindings instanceof Nil)) {
				clet_bindings.push([let_bindings.head, compileExpr(let_bindings.tail.head)]);
				let_bindings = let_bindings.tail.tail;
			}
			var clet_body = compileBody(let_body);
			return function (env) {
				var myenv = _.create(env);
				_.each(clet_bindings, function (b) {
					myenv[b[0]] = b[1](env);
				});
				return clet_body(myenv);
			};
		} else if (_.has(macros, e.head.s)) {
			var margs = [];
			var sargs = e;
			while (!(sargs instanceof Nil)) {
				margs.push(sargs.head);
				sargs = sargs.tail;
			}
			var mexpr = macros[e.head].apply(undefined, margs);
			return compileExpr(mexpr);
		} else if (e.head.s == "defmac") {
			macros[e.tail.head] = compileExpr(e.tail.tail.head)(jslGlobal);
			return mret(null);
		} else {
			var func = compileExpr(e.head);
			var args = e.tail;
			var cargs = [];
			while (!(args instanceof Nil)) {
				cargs.push(compileExpr(args.head));
				args = args.tail;
			}
			return function (env) {
				var efunc = func(env);
				var eargs = [];
				for (var i = 0; i < cargs.length; i++) {
					eargs.push(cargs[i](env));
				}
				if (efunc.apply === undefined) {
					console.log(efunc);
				}
				return efunc.apply(undefined, eargs);
			};
		}
	} else {
		throw new Error("Unknown expression to compile: " + e);
	}
}

function compileBody(es) {
	if (es instanceof Nil) {
		return mret(null);
	} else if (es instanceof Cons) {
		var head = compileExpr(es.head);
		if (es.tail instanceof Nil) {
			return head;
		} else {
			var tail = compileBody(es.tail);
			return mbind(head, function (no) { return tail; });
		}
	} else {
		throw new Error("Invalid expression for body. "  + es);
	}
}
	
function compileAll(s, env) {
	var es = read(s);
	var ret = null;
	_.each(es, function(e) {
		var c = compileExpr(e);
		ret = c(env);
	});
	return ret;
}

var jslGlobal = {
	'js:eval' : function (code) {
		try {
			var res = eval(code);
			if (res === undefined) {
				return null;
			} else {
				return res;
			}
		} catch (x) {
			console.log(code);
			throw x;
		}
	},
	console : function (o) {
			console.log(o);
		return o;
		},
	'true' : true,
	'false' : false,
	'null' : null,
  'null?' : function (c) { return c === null; },
	'cons' : function (a, b) { return new Cons(a, b); },
	'cons?' : function (c) { return c instanceof Cons; },
	'nil' : function () { return new Nil(); },
	'nil?' : function (c) { return c instanceof Nil; },
	'head' : function (c) {
		if (c.head === undefined) {
			throw new Error("Cannot take head.");
		}
		return c.head;
	},
	'tail' : function (c) {
		if (c.tail === undefined) {
			throw new Error("Cannot take tail.");
		}
		return c.tail;
	},
  'set-head!' : function (c, a) { c.head = a; return c; },
  'set-tail!' : function (c, b) { c.tail = b; return c; },
	'symbol?' : function (c) { return c instanceof Symbol; },
	'number?' : function (c) { return typeof c === "number"; },
	'boolean?' : function (c) { return typeof c === "boolean"; },
	'string?' : function (c) { return typeof c === "string"; },
	'get-macro' : function (name) {
		var m = macros[name];
		if (m === undefined) {
			throw new Error("No such macro: " + name);
		}
		return m;
	}
};

function runCode(code) {
  return compileAll(code, jslGlobal);
}

function loadScript(filename) {
  console.log("Loading", filename);
  var fs = require('fs');
  var code = fs.readFileSync(filename, {encoding: "utf8"});
  runCode(code);
	console.log("Loaded.\n");
  return null;
}
jslGlobal['load-script'] = loadScript;
function loadFile(filename) {
  var fs = require('fs');
  var contents = fs.readFileSync(filename, {encoding: "utf8"});
  return contents;
}
jslGlobal['load-file'] = loadFile;
function writeFile(filename, data) {
  var fs = require('fs');
  fs.writeFileSync(filename, data, {encoding: "utf8"});
  return null;
}
jslGlobal['write-file'] = writeFile;


jslGlobal['repl-format'] = function (v) { return "" + v; };
function output(v) {
  process.stdout.write(""+v);
  return null;
};

jslGlobal['repl-run-code'] = runCode;

function repl() {
  var readline = require("readline");
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.setPrompt('> ');
  rl.prompt();

  var shouldQuit = false;

  function handleLine(line) {
    try {
      var r = jslGlobal['repl-run-code'](line);
      if (r !== null) {
        console.log(jslGlobal['repl-format'](r));
      }
    } catch (x) {
      console.log(x.stack);
    }
  }

  rl.on('line', function (line) {
    shouldQuit = false;
    handleLine(line);
    rl.prompt();
  }).on('close', function () {
    console.log("Goodbye!");
  }).on('SIGINT', function () {
    if (shouldQuit) {
      console.log("Goodbye!");
      process.exit(0);
    } else {
      shouldQuit = true;
      console.log("Press C-c again to quit.");
      rl.prompt();
    }
  });
}
jslGlobal['run-repl'] = repl;

loadScript("0_interp.jsl");

if (process.argv.length > 2) {
  jslGlobal['arguments'] = _.reduceRight(process.argv.slice(3),
                                    function (a, b) {
                                      return new Cons(b, a);
                                    }, new Nil());
  loadScript(process.argv[2]);
}

if (jslGlobal['main'] !== undefined) {
  jslGlobal['main'](jslGlobal['arguments']);
} else {
  repl();
}

module.exports = (function () {
var globals={};


  globals['globals'] = globals;

  globals['js:hasOwnProperty'] = function (o, k) {
    return Object.prototype.hasOwnProperty.call(o, k);
  };

  (function () {
    // in anonymous function so 'this' points to global context

    function Cons(a, b) {
      this.head = a;
      this.tail = b;
    }
    function Nil() { }

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
      // TODO figure out how to compile interned symbols.
      if (!gensym) {
        if (globals['js:hasOwnProperty'](this.symbols, s)) {
          return this.symbols[s];
        } else {
          this.nextGensym++;
          return this.symbols[s] = new Symbol(s);
        }
      } else {
        var id = this.nextGensym++;
        return new Symbol('#' + s + '_' + id, true);
      }
    };

    if (this.Cons === undefined) {
      this.Cons = Cons;
      this.Nil = Nil;
    }

    if (this.Symbol === undefined) {
      this.Symbol = Symbol;
    }
  })();
;


((globals[("set-macro-type!")]) = (function set_macro_type__2(f_0, type_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
((f_0[("macro")]) = (true));
((f_0[("macro-type")]) = type_1);
return f_0;
}));
(null);


((globals[("macro?")]) = (function macro__1(f_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_2 = ((globals[("=")])((true), (f_0[("macro")])));
return funcall_2;
}));
(null);


((globals[("macro-type")]) = (function macro_type_1(x_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
return (x_0[("macro-type")]);
}));
(null);


((globals[("form-macro?")]) = (function form_macro__1(x_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_6 = ((globals[("macro?")])(x_0));
var funcall_7 = ((function (_gensym_56_2) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var if_5 = (null);
if (_gensym_56_2) {
var funcall_3 = ((globals[("macro-type")])(x_0));
var funcall_4 = ((globals[("=")])(("form"), funcall_3));
(if_5 = funcall_4);
} else {
(if_5 = _gensym_56_2);
}
return if_5;
})(funcall_6));
return funcall_7;
}));
(null);


((globals[("symbol-macro?")]) = (function symbol_macro__1(x_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_6 = ((globals[("macro?")])(x_0));
var funcall_7 = ((function (_gensym_61_2) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var if_5 = (null);
if (_gensym_61_2) {
var funcall_3 = ((globals[("macro-type")])(x_0));
var funcall_4 = ((globals[("=")])(("symbol"), funcall_3));
(if_5 = funcall_4);
} else {
(if_5 = _gensym_61_2);
}
return if_5;
})(funcall_6));
return funcall_7;
}));
(null);


((globals[("add-macro!")]) = (function (name_0, f_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_2 = ((globals[("set-macro-type!")])(f_1, ("form")));
funcall_2;
return (((globals)[name_0]) = f_1);
}));
(null);


((globals[("add-symbol-macro!")]) = (function (name_0, f_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_2 = ((globals[("set-macro-type!")])(f_1, ("symbol")));
funcall_2;
return (((globals)[name_0]) = f_1);
}));
(null);


var funcall_40 = ((globals[("add-macro!")])((Symbol.create("defmac")), (function (s_0, env_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_35 = ((globals[("tail")])(s_0));
var funcall_36 = ((globals[("head")])(funcall_35));
var funcall_37 = ((globals[("tail")])(s_0));
var funcall_38 = ((globals[("tail")])(funcall_37));
var funcall_39 = ((function (v_2, body_3) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_4 = ((globals[("cons?")])(v_2));
var funcall_5 = ((globals[("not")])(funcall_4));
var if_9 = (null);
if (funcall_5) {
var funcall_6 = ((globals[("repr")])(v_2));
var funcall_7 = ((globals[("++")])(("Invalid defmac arglist: "), funcall_6));
var funcall_8 = ((globals[("error")])(funcall_7));
(if_9 = funcall_8);
} else {
(if_9 = (null));
}
if_9;
var funcall_33 = ((globals[("gensym")])((Symbol.create("expr"))));
var funcall_34 = ((function (s_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_10 = ((globals[("head")])(v_2));
var funcall_11 = ((globals[("gensym")])((Symbol.create("env"))));
var funcall_12 = ((globals[("cons")])(funcall_11, (new Nil())));
var funcall_13 = ((globals[("cons")])(s_0, funcall_12));
var funcall_14 = ((globals[("head")])(v_2));
var funcall_15 = ((globals[("tail")])(v_2));
var funcall_16 = ((globals[("cons")])(funcall_15, body_3));
var funcall_17 = ((globals[("cons")])(funcall_14, funcall_16));
var funcall_18 = ((globals[("cons")])((Symbol.create("named-fun")), funcall_17));
var funcall_19 = ((globals[("cons")])(s_0, (new Nil())));
var funcall_20 = ((globals[("cons")])((Symbol.create("tail")), funcall_19));
var funcall_21 = ((globals[("cons")])(funcall_20, (new Nil())));
var funcall_22 = ((globals[("cons")])(funcall_18, funcall_21));
var funcall_23 = ((globals[("cons")])((Symbol.create("apply")), funcall_22));
var funcall_24 = ((globals[("cons")])(funcall_23, (new Nil())));
var funcall_25 = ((globals[("cons")])(funcall_13, funcall_24));
var funcall_26 = ((globals[("cons")])((Symbol.create("fun")), funcall_25));
var funcall_27 = ((globals[("cons")])(("form"), (new Nil())));
var funcall_28 = ((globals[("cons")])(funcall_26, funcall_27));
var funcall_29 = ((globals[("cons")])((Symbol.create("set-macro-type!")), funcall_28));
var funcall_30 = ((globals[("cons")])(funcall_29, (new Nil())));
var funcall_31 = ((globals[("cons")])(funcall_10, funcall_30));
var funcall_32 = ((globals[("cons")])((Symbol.create("def")), funcall_31));
return funcall_32;
})(funcall_33));
return funcall_34;
})(funcall_36, funcall_38));
return funcall_39;
})));
funcall_40;


var funcall_8 = ((globals[("set-macro-type!")])((function (_expr_83_0, _env_84_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_6 = ((globals[("tail")])(_expr_83_0));
var funcall_7 = ((globals[("apply")])((function do_2() {
;
var body_3 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 0; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var funcall_4 = ((globals[("cons")])(body_3, (new Nil())));
var funcall_5 = ((globals[("cons")])((Symbol.create("js:seq")), funcall_4));
return funcall_5;
}), funcall_6));
return funcall_7;
}), ("form")));
((globals[("do")]) = funcall_8);
(null);


var funcall_18 = ((globals[("set-macro-type!")])((function (_expr_88_0, _env_89_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_16 = ((globals[("tail")])(_expr_88_0));
var funcall_17 = ((globals[("apply")])((function def_2() {
;
var pairs_3 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 0; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var funcall_14 = ((globals[("a:map")])((function (s_4, v_5) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_6 = ((globals[("symbol?")])(s_4));
var if_13 = (null);
if (funcall_6) {
var funcall_7 = ((globals[("cons")])(v_5, (new Nil())));
var funcall_8 = ((globals[("cons")])(s_4, funcall_7));
var funcall_9 = ((globals[("cons")])((Symbol.create("js:def")), funcall_8));
(if_13 = funcall_9);
} else {
var funcall_10 = ((globals[("repr")])(s_4));
var funcall_11 = ((globals[("++")])(("Cannot 'def' a non-symbol: "), funcall_10));
var funcall_12 = ((globals[("error")])(funcall_11));
(if_13 = funcall_12);
}
return if_13;
}), pairs_3));
var funcall_15 = ((globals[("cons")])((Symbol.create("do")), funcall_14));
return funcall_15;
}), funcall_16));
return funcall_17;
}), ("form")));
((globals[("def")]) = funcall_18);
(null);


var funcall_19 = ((globals[("set-macro-type!")])((function (_expr_91_0, _env_92_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_17 = ((globals[("tail")])(_expr_91_0));
var funcall_18 = ((globals[("apply")])((function setq__2() {
;
var pairs_3 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 0; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var funcall_15 = ((globals[("a:map")])((function (s_4, v_5) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_6 = ((globals[("symbol?")])(s_4));
var if_14 = (null);
if (funcall_6) {
var funcall_7 = ((globals[("cons")])(v_5, (new Nil())));
var funcall_8 = ((globals[("cons")])(s_4, funcall_7));
var funcall_9 = ((globals[("cons")])(("="), funcall_8));
var funcall_10 = ((globals[("cons")])((Symbol.create("js:binop")), funcall_9));
(if_14 = funcall_10);
} else {
var funcall_11 = ((globals[("repr")])(s_4));
var funcall_12 = ((globals[("++")])(("Cannot 'def' a non-symbol: "), funcall_11));
var funcall_13 = ((globals[("error")])(funcall_12));
(if_14 = funcall_13);
}
return if_14;
}), pairs_3));
var funcall_16 = ((globals[("cons")])((Symbol.create("do")), funcall_15));
return funcall_16;
}), funcall_17));
return funcall_18;
}), ("form")));
((globals[("setq!")]) = funcall_19);
(null);


var funcall_24 = ((globals[("set-macro-type!")])((function (_expr_93_0, _env_94_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_22 = ((globals[("tail")])(_expr_93_0));
var funcall_23 = ((globals[("apply")])((function defun_3(v_2) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
;
var body_4 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 1; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var funcall_5 = ((globals[("cons?")])(v_2));
var funcall_6 = ((globals[("not")])(funcall_5));
var if_10 = (null);
if (funcall_6) {
var funcall_7 = ((globals[("repr")])(v_2));
var funcall_8 = ((globals[("++")])(("Invalid defun arglist: "), funcall_7));
var funcall_9 = ((globals[("error")])(funcall_8));
(if_10 = funcall_9);
} else {
(if_10 = (null));
}
if_10;
var funcall_11 = ((globals[("head")])(v_2));
var funcall_12 = ((globals[("head")])(v_2));
var funcall_13 = ((globals[("tail")])(v_2));
var funcall_14 = ((globals[("cons")])((Symbol.create("do")), body_4));
var funcall_15 = ((globals[("cons")])(funcall_14, (new Nil())));
var funcall_16 = ((globals[("cons")])(funcall_13, funcall_15));
var funcall_17 = ((globals[("cons")])(funcall_12, funcall_16));
var funcall_18 = ((globals[("cons")])((Symbol.create("named-fun")), funcall_17));
var funcall_19 = ((globals[("cons")])(funcall_18, (new Nil())));
var funcall_20 = ((globals[("cons")])(funcall_11, funcall_19));
var funcall_21 = ((globals[("cons")])((Symbol.create("def")), funcall_20));
return funcall_21;
}), funcall_22));
return funcall_23;
}), ("form")));
((globals[("defun")]) = funcall_24);
(null);


var funcall_52 = ((globals[("set-macro-type!")])((function (_expr_110_0, _env_111_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_50 = ((globals[("tail")])(_expr_110_0));
var funcall_51 = ((globals[("apply")])((function named_fun_4(name_2, al_3) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
;
var body_5 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 2; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var fun_check_num_args_6 = (function fun_check_num_args_6(min_expected_7, has_varargs_8) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_9 = ((globals[("<")])((0), min_expected_7));
var if_11 = (null);
if (funcall_9) {
var funcall_10 = ((globals[("++")])(("if (arguments.length < "), min_expected_7, (") {\n"), ("  throw new Error(\"Expecting at least "), min_expected_7, (" arguments.\");\n"), ("}\n")));
(if_11 = funcall_10);
} else {
(if_11 = (""));
}
var if_13 = (null);
if (has_varargs_8) {
(if_13 = (""));
} else {
var funcall_12 = ((globals[("++")])(("if (arguments.length > "), min_expected_7, (") {\n"), ("  throw new Error(\"Expecting at most "), min_expected_7, (" arguments.\");\n"), ("}\n")));
(if_13 = funcall_12);
}
var funcall_14 = ((globals[("++")])(if_11, if_13));
return funcall_14;
});
var fun_handle_vararg_15 = (function fun_handle_vararg_15(offset_16) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_17 = ((globals[("++")])(("(function (args) {\n"), ("  var vargs = new Nil();\n"), ("  for (var i = args.length - 1; i >= "), offset_16, ("; i--) {\n"), ("    vargs = new Cons(args[i], vargs);\n"), ("  }\n"), ("  return vargs;\n"), ("})(arguments)")));
return funcall_17;
});
var funcall_47 = ((globals[("init-improper")])(al_3));
var funcall_48 = ((globals[("last-improper")])(al_3));
var funcall_49 = ((function (args_18, varg_19) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_36 = ((globals[("length")])(args_18));
var funcall_37 = ((globals[("nil?")])(varg_19));
var funcall_38 = ((globals[("not")])(funcall_37));
var funcall_39 = (fun_check_num_args_6(funcall_36, funcall_38));
var funcall_40 = ((globals[("cons")])(funcall_39, (new Nil())));
var funcall_41 = ((globals[("cons")])((Symbol.create("js:code")), funcall_40));
var funcall_42 = ((globals[("length")])(args_18));
var funcall_43 = (fun_handle_vararg_15(funcall_42));
var funcall_44 = ((globals[("cons")])(funcall_43, (new Nil())));
var funcall_45 = ((globals[("cons")])((Symbol.create("js:js")), funcall_44));
var funcall_46 = ((function (argcode_20, varargcode_21) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_22 = ((globals[("nil?")])(varg_19));
var if_27 = (null);
if (funcall_22) {
(if_27 = (new Nil()));
} else {
var funcall_23 = ((globals[("cons")])(varargcode_21, (new Nil())));
var funcall_24 = ((globals[("cons")])(varg_19, funcall_23));
var funcall_25 = ((globals[("cons")])((Symbol.create("js:def")), funcall_24));
var funcall_26 = ((globals[("cons")])(funcall_25, (new Nil())));
(if_27 = funcall_26);
}
var funcall_28 = ((globals[("append2")])(if_27, body_5));
var funcall_29 = ((globals[("cons")])(argcode_20, funcall_28));
var funcall_30 = ((globals[("cons")])(funcall_29, (new Nil())));
var funcall_31 = ((globals[("cons")])((Symbol.create("js:seq")), funcall_30));
var funcall_32 = ((globals[("cons")])(funcall_31, (new Nil())));
var funcall_33 = ((globals[("cons")])(args_18, funcall_32));
var funcall_34 = ((globals[("cons")])(name_2, funcall_33));
var funcall_35 = ((globals[("cons")])((Symbol.create("js:function")), funcall_34));
return funcall_35;
})(funcall_41, funcall_45));
return funcall_46;
})(funcall_47, funcall_48));
return funcall_49;
}), funcall_50));
return funcall_51;
}), ("form")));
((globals[("named-fun")]) = funcall_52);
(null);


var funcall_10 = ((globals[("set-macro-type!")])((function (_expr_113_0, _env_114_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_8 = ((globals[("tail")])(_expr_113_0));
var funcall_9 = ((globals[("apply")])((function fun_3(al_2) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
;
var body_4 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 1; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var funcall_5 = ((globals[("cons")])(al_2, body_4));
var funcall_6 = ((globals[("cons")])((null), funcall_5));
var funcall_7 = ((globals[("cons")])((Symbol.create("named-fun")), funcall_6));
return funcall_7;
}), funcall_8));
return funcall_9;
}), ("form")));
((globals[("fun")]) = funcall_10);
(null);


((globals[("error")]) = (function error_1(msg_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_2 = ((function (msg) { throw new Error(msg); })(msg_0));
return funcall_2;
}));
(null);


((globals[("apply")]) = ((function (f, args) {
  var c = Cons;
  var as = [];
  while (args instanceof c) {
    as.push(args.head);
    args = args.tail;
  }
  return f.apply(undefined, as);
})));
(null);


((globals[("list")]) = (function list_0() {
;
var args_1 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 0; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
return args_1;
}));
(null);


((globals[("cons")]) = (function cons_2(a_0, b_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_3 = ((function (a, b) { return new Cons(a, b); })(a_0, b_1));
return funcall_3;
}));
(null);


((globals[("nil")]) = (new Nil()));
(null);


((globals[("cons?")]) = (function cons__1(x_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
return (x_0 instanceof (Cons));
}));
(null);


((globals[("nil?")]) = (function nil__1(x_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
return (x_0 instanceof (Nil));
}));
(null);


((globals[("null?")]) = (function null__1(x_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
return (x_0 === (null));
}));
(null);


((globals[("string?")]) = (function string__1(x_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
return ((typeof x_0) === ("string"));
}));
(null);


((globals[("boolean?")]) = (function boolean__1(x_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
return ((typeof x_0) === ("boolean"));
}));
(null);


((globals[("number?")]) = (function number__1(x_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
return ((typeof x_0) === ("number"));
}));
(null);


((globals[("function?")]) = (function function__1(x_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
return ((typeof x_0) === ("function"));
}));
(null);


((globals[("head")]) = (function head_1(lst_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_2 = ((globals[("cons?")])(lst_0));
var if_4 = (null);
if (funcall_2) {
(if_4 = (lst_0[("head")]));
} else {
var funcall_3 = ((globals[("error")])(("Cannot take head")));
(if_4 = funcall_3);
}
return if_4;
}));
(null);


((globals[("tail")]) = (function tail_1(lst_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_2 = ((globals[("cons?")])(lst_0));
var if_4 = (null);
if (funcall_2) {
(if_4 = (lst_0[("tail")]));
} else {
var funcall_3 = ((globals[("error")])(("Cannot take tail")));
(if_4 = funcall_3);
}
return if_4;
}));
(null);


((globals[("set-head!")]) = (function set_head__2(lst_0, v_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_3 = ((globals[("cons?")])(lst_0));
var if_5 = (null);
if (funcall_3) {
(if_5 = ((lst_0[("head")]) = v_1));
} else {
var funcall_4 = ((globals[("error")])(("Cannot set head")));
(if_5 = funcall_4);
}
return if_5;
}));
(null);


((globals[("set-tail!")]) = (function set_tail__2(lst_0, v_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_3 = ((globals[("cons?")])(lst_0));
var if_5 = (null);
if (funcall_3) {
(if_5 = ((lst_0[("tail")]) = v_1));
} else {
var funcall_4 = ((globals[("error")])(("Cannot set tail")));
(if_5 = funcall_4);
}
return if_5;
}));
(null);


((globals[("first")]) = (globals[("head")]));
(null);


((globals[("second")]) = (function second_1(lst_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_2 = ((globals[("tail")])(lst_0));
var funcall_3 = ((globals[("head")])(funcall_2));
return funcall_3;
}));
(null);


((globals[("third")]) = (function third_1(lst_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_2 = ((globals[("tail")])(lst_0));
var funcall_3 = ((globals[("tail")])(funcall_2));
var funcall_4 = ((globals[("head")])(funcall_3));
return funcall_4;
}));
(null);


((globals[("not")]) = (function not_1(x_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
return (! x_0);
}));
(null);


var funcall_23 = ((globals[("set-macro-type!")])((function (_expr_131_0, _env_132_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_21 = ((globals[("tail")])(_expr_131_0));
var funcall_22 = ((globals[("apply")])((function if_2() {
;
var conds_3 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 0; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var funcall_4 = ((globals[("nil?")])(conds_3));
var if_20 = (null);
if (funcall_4) {
(if_20 = (null));
} else {
var funcall_5 = ((globals[("tail")])(conds_3));
var funcall_6 = ((globals[("nil?")])(funcall_5));
var if_19 = (null);
if (funcall_6) {
var funcall_7 = ((globals[("head")])(conds_3));
(if_19 = funcall_7);
} else {
var if_18 = (null);
if ((true)) {
var funcall_8 = ((globals[("head")])(conds_3));
var funcall_9 = ((globals[("tail")])(conds_3));
var funcall_10 = ((globals[("head")])(funcall_9));
var funcall_11 = ((globals[("tail")])(conds_3));
var funcall_12 = ((globals[("tail")])(funcall_11));
var funcall_13 = ((globals[("cons")])((Symbol.create("if")), funcall_12));
var funcall_14 = ((globals[("cons")])(funcall_13, (new Nil())));
var funcall_15 = ((globals[("cons")])(funcall_10, funcall_14));
var funcall_16 = ((globals[("cons")])(funcall_8, funcall_15));
var funcall_17 = ((globals[("cons")])((Symbol.create("js:if")), funcall_16));
(if_18 = funcall_17);
} else {
(if_18 = (null));
}
(if_19 = if_18);
}
(if_20 = if_19);
}
return if_20;
}), funcall_21));
return funcall_22;
}), ("form")));
((globals[("if")]) = funcall_23);
(null);


var funcall_2 = ((globals[("add-symbol-macro!")])((Symbol.create("otherwise")), (function (s_0, env_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
return (true);
})));
funcall_2;


var funcall_11 = ((globals[("set-macro-type!")])((function (_expr_134_0, _env_135_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_9 = ((globals[("tail")])(_expr_134_0));
var funcall_10 = ((globals[("apply")])((function when_3(pred_2) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
;
var body_4 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 1; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var funcall_5 = ((globals[("cons")])((Symbol.create("do")), body_4));
var funcall_6 = ((globals[("cons")])(funcall_5, (new Nil())));
var funcall_7 = ((globals[("cons")])(pred_2, funcall_6));
var funcall_8 = ((globals[("cons")])((Symbol.create("if")), funcall_7));
return funcall_8;
}), funcall_9));
return funcall_10;
}), ("form")));
((globals[("when")]) = funcall_11);
(null);


var funcall_13 = ((globals[("set-macro-type!")])((function (_expr_137_0, _env_138_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_11 = ((globals[("tail")])(_expr_137_0));
var funcall_12 = ((globals[("apply")])((function unless_3(pred_2) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
;
var body_4 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 1; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var funcall_5 = ((globals[("cons")])(pred_2, (new Nil())));
var funcall_6 = ((globals[("cons")])((Symbol.create("not")), funcall_5));
var funcall_7 = ((globals[("cons")])((Symbol.create("do")), body_4));
var funcall_8 = ((globals[("cons")])(funcall_7, (new Nil())));
var funcall_9 = ((globals[("cons")])(funcall_6, funcall_8));
var funcall_10 = ((globals[("cons")])((Symbol.create("if")), funcall_9));
return funcall_10;
}), funcall_11));
return funcall_12;
}), ("form")));
((globals[("unless")]) = funcall_13);
(null);


var funcall_11 = ((globals[("set-macro-type!")])((function (_expr_140_0, _env_141_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_9 = ((globals[("tail")])(_expr_140_0));
var funcall_10 = ((globals[("apply")])((function while_3(pred_2) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
;
var body_4 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 1; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var funcall_5 = ((globals[("cons")])((Symbol.create("do")), body_4));
var funcall_6 = ((globals[("cons")])(funcall_5, (new Nil())));
var funcall_7 = ((globals[("cons")])(pred_2, funcall_6));
var funcall_8 = ((globals[("cons")])((Symbol.create("js:while")), funcall_7));
return funcall_8;
}), funcall_9));
return funcall_10;
}), ("form")));
((globals[("while")]) = funcall_11);
(null);


((globals[("foldl")]) = (function foldl_3(op_0, start_1, lst_2) {
if (arguments.length < 3) {
  throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
  throw new Error("Expecting at most 3 arguments.");
}
;
var funcall_4 = ((globals[("nil?")])(lst_2));
var funcall_5 = ((globals[("not")])(funcall_4));
var while_11 = funcall_5;
while (while_11) {
var funcall_8 = ((globals[("head")])(lst_2));
var funcall_9 = (op_0(start_1, funcall_8));
(start_1 = funcall_9);
var funcall_10 = ((globals[("tail")])(lst_2));
(lst_2 = funcall_10);
var funcall_6 = ((globals[("nil?")])(lst_2));
var funcall_7 = ((globals[("not")])(funcall_6));
(while_11 = funcall_7);
}
return start_1;
}));
(null);


((globals[("foldr")]) = (function foldr_3(op_0, end_1, lst_2) {
if (arguments.length < 3) {
  throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
  throw new Error("Expecting at most 3 arguments.");
}
;
var _foldr_4 = (function _foldr_4(lst_2) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_5 = ((globals[("nil?")])(lst_2));
var if_10 = (null);
if (funcall_5) {
(if_10 = end_1);
} else {
var funcall_6 = ((globals[("head")])(lst_2));
var funcall_7 = ((globals[("tail")])(lst_2));
var funcall_8 = (_foldr_4(funcall_7));
var funcall_9 = (op_0(funcall_6, funcall_8));
(if_10 = funcall_9);
}
return if_10;
});
var funcall_11 = (_foldr_4(lst_2));
return funcall_11;
}));
(null);


((globals[("map")]) = (function map_2(op_0, lst_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_3 = ((globals[("nil?")])(lst_1));
var if_9 = (null);
if (funcall_3) {
(if_9 = (new Nil()));
} else {
var funcall_4 = ((globals[("head")])(lst_1));
var funcall_5 = (op_0(funcall_4));
var funcall_6 = ((globals[("tail")])(lst_1));
var funcall_7 = (map_2(op_0, funcall_6));
var funcall_8 = ((globals[("cons")])(funcall_5, funcall_7));
(if_9 = funcall_8);
}
return if_9;
}));
(null);


((globals[("each")]) = (function each_2(op_0, lst_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_3 = ((globals[("nil?")])(lst_1));
var funcall_4 = ((globals[("not")])(funcall_3));
var while_10 = funcall_4;
while (while_10) {
var funcall_7 = ((globals[("head")])(lst_1));
var funcall_8 = (op_0(funcall_7));
funcall_8;
var funcall_9 = ((globals[("tail")])(lst_1));
(lst_1 = funcall_9);
var funcall_5 = ((globals[("nil?")])(lst_1));
var funcall_6 = ((globals[("not")])(funcall_5));
(while_10 = funcall_6);
}
return (null);
}));
(null);


((globals[("reversed")]) = (function reversed_1(lst_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_5 = ((globals[("foldl")])((function (a_2, b_3) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_4 = ((globals[("cons")])(b_3, a_2));
return funcall_4;
}), (new Nil()), lst_0));
return funcall_5;
}));
(null);


((globals[("filter")]) = (function filter_2(pred_0, lst_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_3 = ((globals[("nil?")])(lst_1));
var if_14 = (null);
if (funcall_3) {
(if_14 = (new Nil()));
} else {
var funcall_4 = ((globals[("head")])(lst_1));
var funcall_5 = (pred_0(funcall_4));
var if_13 = (null);
if (funcall_5) {
var funcall_6 = ((globals[("head")])(lst_1));
var funcall_7 = ((globals[("tail")])(lst_1));
var funcall_8 = (filter_2(pred_0, funcall_7));
var funcall_9 = ((globals[("cons")])(funcall_6, funcall_8));
(if_13 = funcall_9);
} else {
var if_12 = (null);
if ((true)) {
var funcall_10 = ((globals[("tail")])(lst_1));
var funcall_11 = (filter_2(pred_0, funcall_10));
(if_12 = funcall_11);
} else {
(if_12 = (null));
}
(if_13 = if_12);
}
(if_14 = if_13);
}
return if_14;
}));
(null);


((globals[("a:map")]) = (function a_map_2(f_0, alist_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_3 = ((globals[("nil?")])(alist_1));
var if_17 = (null);
if (funcall_3) {
(if_17 = (new Nil()));
} else {
var funcall_4 = ((globals[("tail")])(alist_1));
var funcall_5 = ((globals[("nil?")])(funcall_4));
var if_16 = (null);
if (funcall_5) {
var funcall_6 = ((globals[("error")])(("Improper alist")));
(if_16 = funcall_6);
} else {
var if_15 = (null);
if ((true)) {
var funcall_7 = ((globals[("head")])(alist_1));
var funcall_8 = ((globals[("tail")])(alist_1));
var funcall_9 = ((globals[("head")])(funcall_8));
var funcall_10 = (f_0(funcall_7, funcall_9));
var funcall_11 = ((globals[("tail")])(alist_1));
var funcall_12 = ((globals[("tail")])(funcall_11));
var funcall_13 = (a_map_2(f_0, funcall_12));
var funcall_14 = ((globals[("cons")])(funcall_10, funcall_13));
(if_15 = funcall_14);
} else {
(if_15 = (null));
}
(if_16 = if_15);
}
(if_17 = if_16);
}
return if_17;
}));
(null);


((globals[("a:keys")]) = (function a_keys_1(alist_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_4 = ((globals[("a:map")])((function (key_2, value_3) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
return key_2;
}), alist_0));
return funcall_4;
}));
(null);


((globals[("a:values")]) = (function a_values_1(alist_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_4 = ((globals[("a:map")])((function (key_2, value_3) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
return value_3;
}), alist_0));
return funcall_4;
}));
(null);


((globals[("js:+")]) = (function js___2(a_0, b_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
return (a_0 + b_1);
}));
(null);


((globals[("js:-")]) = (function js___2(a_0, b_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
return (a_0 - b_1);
}));
(null);


((globals[("js:*")]) = (function js___2(a_0, b_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
return (a_0 * b_1);
}));
(null);


((globals[("js:/")]) = (function js___2(a_0, b_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
return (a_0 / b_1);
}));
(null);


((globals[("js:%")]) = (function js___2(a_0, b_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
return (a_0 % b_1);
}));
(null);


((globals[("js:<")]) = (function js___2(a_0, b_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
return (a_0 < b_1);
}));
(null);


((globals[("js:>")]) = (function js___2(a_0, b_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
return (a_0 > b_1);
}));
(null);


((globals[("js:<=")]) = (function js____2(a_0, b_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
return (a_0 <= b_1);
}));
(null);


((globals[("js:>=")]) = (function js____2(a_0, b_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
return (a_0 >= b_1);
}));
(null);


((globals[("js:===")]) = (function js_____2(a_0, b_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
return (a_0 === b_1);
}));
(null);


((globals[("js:!==")]) = (function js_____2(a_0, b_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
return (a_0 !== b_1);
}));
(null);


((globals[("js:u+")]) = (function js_u__1(a_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
return (+ a_0);
}));
(null);


((globals[("js:u-")]) = (function js_u__1(a_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
return (- a_0);
}));
(null);


((globals[("js:toString")]) = (function js_toString_1(x_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_2 = ((globals[("js:+")])((""), x_0));
return funcall_2;
}));
(null);


((globals[("js:toNum")]) = (function js_toNum_1(x_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_2 = ((globals[("js:u+")])(x_0));
return funcall_2;
}));
(null);


((globals[("NaN?")]) = (function NaN__1(x_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_2 = ((isNaN)(x_0));
return funcall_2;
}));
(null);


((globals[("/")]) = (globals[("js:/")]));
(null);


((globals[("%")]) = (globals[("js:%")]));
(null);


((globals[("<")]) = (globals[("js:<")]));
(null);


((globals[(">")]) = (globals[("js:>")]));
(null);


((globals[("<=")]) = (globals[("js:<=")]));
(null);


((globals[(">=")]) = (globals[("js:>=")]));
(null);


((globals[("=")]) = (globals[("js:===")]));
(null);


((globals[("!=")]) = (globals[("js:!==")]));
(null);


((globals[("++")]) = ((function () {
  return Array.prototype.join.call(arguments, '');
})));
(null);


((globals[("+")]) = (function __0() {
;
var args_1 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 0; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var funcall_2 = ((globals[("foldl")])((globals[("js:+")]), (0), args_1));
return funcall_2;
}));
(null);


((globals[("*")]) = (function __0() {
;
var args_1 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 0; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var funcall_2 = ((globals[("foldl")])((globals[("js:*")]), (1), args_1));
return funcall_2;
}));
(null);


((globals[("-")]) = (function __1(s_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
;
var args_2 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 1; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var funcall_3 = ((globals[("nil?")])(args_2));
var if_7 = (null);
if (funcall_3) {
var funcall_4 = ((globals[("js:u-")])(s_0));
(if_7 = funcall_4);
} else {
var funcall_5 = ((globals[("apply")])((globals[("+")]), args_2));
var funcall_6 = ((globals[("js:-")])(s_0, funcall_5));
(if_7 = funcall_6);
}
return if_7;
}));
(null);


((globals[("prop")]) = (function prop_2(x_0, p_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
return (x_0[p_1]);
}));
(null);


((globals[("set-prop!")]) = (function set_prop__3(x_0, p_1, v_2) {
if (arguments.length < 3) {
  throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
  throw new Error("Expecting at most 3 arguments.");
}
;
return ((x_0[p_1]) = v_2);
}));
(null);


((globals[("append2")]) = (function append2_2(lst1_0, lst2_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_3 = ((globals[("foldr")])((globals[("cons")]), lst2_1, lst1_0));
return funcall_3;
}));
(null);


((globals[("append")]) = (function append_0() {
;
var lsts_1 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 0; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var funcall_2 = ((globals[("foldr")])((globals[("append2")]), (new Nil()), lsts_1));
return funcall_2;
}));
(null);


((globals[("map-append")]) = (function map_append_2(f_0, lst_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_3 = ((globals[("map")])(f_0, lst_1));
var funcall_4 = ((globals[("foldr")])((globals[("append2")]), (new Nil()), funcall_3));
return funcall_4;
}));
(null);


((globals[("intercalate")]) = (function intercalate_2(sep_0, lst_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_3 = ((globals[("nil?")])(lst_1));
var if_13 = (null);
if (funcall_3) {
(if_13 = (new Nil()));
} else {
var funcall_4 = ((globals[("tail")])(lst_1));
var funcall_5 = ((globals[("nil?")])(funcall_4));
var if_12 = (null);
if (funcall_5) {
(if_12 = lst_1);
} else {
var if_11 = (null);
if ((true)) {
var funcall_6 = ((globals[("head")])(lst_1));
var funcall_7 = ((globals[("tail")])(lst_1));
var funcall_8 = (intercalate_2(sep_0, funcall_7));
var funcall_9 = ((globals[("cons")])(sep_0, funcall_8));
var funcall_10 = ((globals[("cons")])(funcall_6, funcall_9));
(if_11 = funcall_10);
} else {
(if_11 = (null));
}
(if_12 = if_11);
}
(if_13 = if_12);
}
return if_13;
}));
(null);


((globals[("length")]) = (function length_1(lst_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var i_2 = (0);
var funcall_3 = ((globals[("cons?")])(lst_0));
var while_7 = funcall_3;
while (while_7) {
var funcall_5 = ((globals[("+")])(i_2, (1)));
(i_2 = funcall_5);
var funcall_6 = ((globals[("tail")])(lst_0));
(lst_0 = funcall_6);
var funcall_4 = ((globals[("cons?")])(lst_0));
(while_7 = funcall_4);
}
return i_2;
}));
(null);


((globals[("nth")]) = (function nth_2(lst_0, i_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_3 = ((globals[(">")])(i_1, (0)));
var while_11 = funcall_3;
while (while_11) {
var funcall_5 = ((globals[("cons?")])(lst_0));
var funcall_6 = ((globals[("not")])(funcall_5));
var if_8 = (null);
if (funcall_6) {
var funcall_7 = ((globals[("error")])(("List index out of bounds.")));
(if_8 = funcall_7);
} else {
(if_8 = (null));
}
if_8;
var funcall_9 = ((globals[("-")])(i_1, (1)));
(i_1 = funcall_9);
var funcall_10 = ((globals[("tail")])(lst_0));
(lst_0 = funcall_10);
var funcall_4 = ((globals[(">")])(i_1, (0)));
(while_11 = funcall_4);
}
var funcall_12 = ((globals[("head")])(lst_0));
return funcall_12;
}));
(null);


var funcall_12 = ((globals[("set-macro-type!")])((function (_expr_195_0, _env_196_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_10 = ((globals[("tail")])(_expr_195_0));
var funcall_11 = ((globals[("apply")])((function let_3(bindings_2) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
;
var body_4 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 1; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var funcall_5 = ((globals[("a:keys")])(bindings_2));
var funcall_6 = ((globals[("cons")])(funcall_5, body_4));
var funcall_7 = ((globals[("cons")])((Symbol.create("fun")), funcall_6));
var funcall_8 = ((globals[("a:values")])(bindings_2));
var funcall_9 = ((globals[("cons")])(funcall_7, funcall_8));
return funcall_9;
}), funcall_10));
return funcall_11;
}), ("form")));
((globals[("let")]) = funcall_12);
(null);


((globals[("gensym")]) = (function gensym_0() {
;
var key_1 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 0; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var funcall_4 = ((globals[("length")])(key_1));
var funcall_5 = ((globals[("=")])((0), funcall_4));
var if_7 = (null);
if (funcall_5) {
(if_7 = ("gensym"));
} else {
var funcall_6 = ((globals[("apply")])((globals[("++")]), key_1));
(if_7 = funcall_6);
}
var funcall_8 = ((function (k_2) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_3 = (((function (k) { return Symbol.create(k, true); }))(k_2));
return funcall_3;
})(if_7));
return funcall_8;
}));
(null);


((globals[("gensym?")]) = (function gensym__1(s_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
return (s_0[("gensym")]);
}));
(null);


((globals[("symbol?")]) = (function symbol__1(x_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
return (x_0 instanceof (Symbol));
}));
(null);


((globals[("symbol")]) = (function symbol_0() {
;
var args_1 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 0; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var funcall_2 = ((globals[("apply")])((globals[("++")]), args_1));
var funcall_3 = (((function (s) { return Symbol.create(s); }))(funcall_2));
return funcall_3;
}));
(null);


((globals[("symbol->string")]) = (function symbol__string_1(s_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_2 = ((globals[("symbol?")])(s_0));
var funcall_3 = ((globals[("not")])(funcall_2));
var if_5 = (null);
if (funcall_3) {
var funcall_4 = ((globals[("error")])(("Not a symbol")));
(if_5 = funcall_4);
} else {
(if_5 = (null));
}
if_5;
return (s_0[("s")]);
}));
(null);


((globals[("keyword?")]) = (function keyword__1(x_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_7 = ((globals[("symbol?")])(x_0));
var funcall_8 = ((function (_gensym_203_2) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var if_6 = (null);
if (_gensym_203_2) {
var funcall_3 = ((globals[("symbol->string")])(x_0));
var funcall_4 = ((globals[("s:charAt")])(funcall_3, (0)));
var funcall_5 = ((globals[("=")])((":"), funcall_4));
(if_6 = funcall_5);
} else {
(if_6 = _gensym_203_2);
}
return if_6;
})(funcall_7));
return funcall_8;
}));
(null);


var funcall_22 = ((globals[("set-macro-type!")])((function (_expr_205_0, _env_206_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_20 = ((globals[("tail")])(_expr_205_0));
var funcall_21 = ((globals[("apply")])((function and_3(v_2) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
;
var args_4 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 1; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var funcall_5 = ((globals[("nil?")])(args_4));
var if_19 = (null);
if (funcall_5) {
(if_19 = v_2);
} else {
var funcall_17 = ((globals[("gensym")])());
var funcall_18 = ((function (vvar_6) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_7 = ((globals[("cons")])(v_2, (new Nil())));
var funcall_8 = ((globals[("cons")])(vvar_6, funcall_7));
var funcall_9 = ((globals[("cons")])((Symbol.create("and")), args_4));
var funcall_10 = ((globals[("cons")])(vvar_6, (new Nil())));
var funcall_11 = ((globals[("cons")])(funcall_9, funcall_10));
var funcall_12 = ((globals[("cons")])(vvar_6, funcall_11));
var funcall_13 = ((globals[("cons")])((Symbol.create("if")), funcall_12));
var funcall_14 = ((globals[("cons")])(funcall_13, (new Nil())));
var funcall_15 = ((globals[("cons")])(funcall_8, funcall_14));
var funcall_16 = ((globals[("cons")])((Symbol.create("let")), funcall_15));
return funcall_16;
})(funcall_17));
(if_19 = funcall_18);
}
return if_19;
}), funcall_20));
return funcall_21;
}), ("form")));
((globals[("and")]) = funcall_22);
(null);


var funcall_22 = ((globals[("set-macro-type!")])((function (_expr_208_0, _env_209_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_20 = ((globals[("tail")])(_expr_208_0));
var funcall_21 = ((globals[("apply")])((function or_3(v_2) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
;
var args_4 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 1; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var funcall_5 = ((globals[("nil?")])(args_4));
var if_19 = (null);
if (funcall_5) {
(if_19 = v_2);
} else {
var funcall_17 = ((globals[("gensym")])());
var funcall_18 = ((function (vvar_6) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_7 = ((globals[("cons")])(v_2, (new Nil())));
var funcall_8 = ((globals[("cons")])(vvar_6, funcall_7));
var funcall_9 = ((globals[("cons")])((Symbol.create("or")), args_4));
var funcall_10 = ((globals[("cons")])(funcall_9, (new Nil())));
var funcall_11 = ((globals[("cons")])(vvar_6, funcall_10));
var funcall_12 = ((globals[("cons")])(vvar_6, funcall_11));
var funcall_13 = ((globals[("cons")])((Symbol.create("if")), funcall_12));
var funcall_14 = ((globals[("cons")])(funcall_13, (new Nil())));
var funcall_15 = ((globals[("cons")])(funcall_8, funcall_14));
var funcall_16 = ((globals[("cons")])((Symbol.create("let")), funcall_15));
return funcall_16;
})(funcall_17));
(if_19 = funcall_18);
}
return if_19;
}), funcall_20));
return funcall_21;
}), ("form")));
((globals[("or")]) = funcall_22);
(null);


((globals[("all")]) = (function all_1(lst_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_2 = ((globals[("nil?")])(lst_0));
var if_9 = (null);
if (funcall_2) {
(if_9 = (true));
} else {
var funcall_7 = ((globals[("head")])(lst_0));
var funcall_8 = ((function (_gensym_211_3) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var if_6 = (null);
if (_gensym_211_3) {
var funcall_4 = ((globals[("tail")])(lst_0));
var funcall_5 = (all_1(funcall_4));
(if_6 = funcall_5);
} else {
(if_6 = _gensym_211_3);
}
return if_6;
})(funcall_7));
(if_9 = funcall_8);
}
return if_9;
}));
(null);


((globals[("any")]) = (function any_1(lst_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_2 = ((globals[("nil?")])(lst_0));
var if_9 = (null);
if (funcall_2) {
(if_9 = (false));
} else {
var funcall_7 = ((globals[("head")])(lst_0));
var funcall_8 = ((function (_gensym_213_3) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var if_6 = (null);
if (_gensym_213_3) {
(if_6 = _gensym_213_3);
} else {
var funcall_4 = ((globals[("tail")])(lst_0));
var funcall_5 = (any_1(funcall_4));
(if_6 = funcall_5);
}
return if_6;
})(funcall_7));
(if_9 = funcall_8);
}
return if_9;
}));
(null);


((globals[("zip")]) = (function zip_0() {
;
var lsts_1 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 0; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var funcall_6 = ((globals[("nil?")])(lsts_1));
var funcall_7 = ((function (_gensym_215_2) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var if_5 = (null);
if (_gensym_215_2) {
(if_5 = _gensym_215_2);
} else {
var funcall_3 = ((globals[("map")])((globals[("nil?")]), lsts_1));
var funcall_4 = ((globals[("any")])(funcall_3));
(if_5 = funcall_4);
}
return if_5;
})(funcall_6));
var if_12 = (null);
if (funcall_7) {
(if_12 = (new Nil()));
} else {
var funcall_8 = ((globals[("map")])((globals[("head")]), lsts_1));
var funcall_9 = ((globals[("map")])((globals[("tail")]), lsts_1));
var funcall_10 = ((globals[("apply")])(zip_0, funcall_9));
var funcall_11 = ((globals[("cons")])(funcall_8, funcall_10));
(if_12 = funcall_11);
}
return if_12;
}));
(null);


((globals[("init")]) = (function init_1(lst_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_2 = ((globals[("nil?")])(lst_0));
var if_16 = (null);
if (funcall_2) {
var funcall_3 = ((globals[("error")])(("Empty list")));
(if_16 = funcall_3);
} else {
var funcall_8 = ((globals[("cons?")])(lst_0));
var funcall_9 = ((function (_gensym_217_4) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var if_7 = (null);
if (_gensym_217_4) {
var funcall_5 = ((globals[("tail")])(lst_0));
var funcall_6 = ((globals[("nil?")])(funcall_5));
(if_7 = funcall_6);
} else {
(if_7 = _gensym_217_4);
}
return if_7;
})(funcall_8));
var if_15 = (null);
if (funcall_9) {
(if_15 = (new Nil()));
} else {
var if_14 = (null);
if ((true)) {
var funcall_10 = ((globals[("head")])(lst_0));
var funcall_11 = ((globals[("tail")])(lst_0));
var funcall_12 = (init_1(funcall_11));
var funcall_13 = ((globals[("cons")])(funcall_10, funcall_12));
(if_14 = funcall_13);
} else {
(if_14 = (null));
}
(if_15 = if_14);
}
(if_16 = if_15);
}
return if_16;
}));
(null);


((globals[("last")]) = (function last_1(lst_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_2 = ((globals[("nil?")])(lst_0));
var if_15 = (null);
if (funcall_2) {
var funcall_3 = ((globals[("error")])(("Empty list")));
(if_15 = funcall_3);
} else {
var funcall_8 = ((globals[("cons?")])(lst_0));
var funcall_9 = ((function (_gensym_219_4) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var if_7 = (null);
if (_gensym_219_4) {
var funcall_5 = ((globals[("tail")])(lst_0));
var funcall_6 = ((globals[("nil?")])(funcall_5));
(if_7 = funcall_6);
} else {
(if_7 = _gensym_219_4);
}
return if_7;
})(funcall_8));
var if_14 = (null);
if (funcall_9) {
var funcall_10 = ((globals[("head")])(lst_0));
(if_14 = funcall_10);
} else {
var if_13 = (null);
if ((true)) {
var funcall_11 = ((globals[("tail")])(lst_0));
var funcall_12 = (last_1(funcall_11));
(if_13 = funcall_12);
} else {
(if_13 = (null));
}
(if_14 = if_13);
}
(if_15 = if_14);
}
return if_15;
}));
(null);


((globals[("last-improper")]) = (function last_improper_1(lst_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_2 = ((globals[("cons?")])(lst_0));
var if_6 = (null);
if (funcall_2) {
var funcall_3 = ((globals[("tail")])(lst_0));
var funcall_4 = (last_improper_1(funcall_3));
(if_6 = funcall_4);
} else {
var if_5 = (null);
if ((true)) {
(if_5 = lst_0);
} else {
(if_5 = (null));
}
(if_6 = if_5);
}
return if_6;
}));
(null);


((globals[("init-improper")]) = (function init_improper_1(lst_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_2 = ((globals[("cons?")])(lst_0));
var if_8 = (null);
if (funcall_2) {
var funcall_3 = ((globals[("head")])(lst_0));
var funcall_4 = ((globals[("tail")])(lst_0));
var funcall_5 = (init_improper_1(funcall_4));
var funcall_6 = ((globals[("cons")])(funcall_3, funcall_5));
(if_8 = funcall_6);
} else {
var if_7 = (null);
if ((true)) {
(if_7 = (new Nil()));
} else {
(if_7 = (null));
}
(if_8 = if_7);
}
return if_8;
}));
(null);


((globals[("as-improper")]) = (function as_improper_2(lst_0, end_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_3 = ((globals[("cons?")])(lst_0));
var if_9 = (null);
if (funcall_3) {
var funcall_4 = ((globals[("head")])(lst_0));
var funcall_5 = ((globals[("tail")])(lst_0));
var funcall_6 = (as_improper_2(funcall_5, end_1));
var funcall_7 = ((globals[("cons")])(funcall_4, funcall_6));
(if_9 = funcall_7);
} else {
var if_8 = (null);
if ((true)) {
(if_8 = end_1);
} else {
(if_8 = (null));
}
(if_9 = if_8);
}
return if_9;
}));
(null);


((globals[(".")]) = (function __1(f_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
;
var args_2 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 1; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var funcall_3 = ((globals[("nil?")])(args_2));
var if_10 = (null);
if (funcall_3) {
(if_10 = f_0);
} else {
var funcall_8 = ((globals[("apply")])(__1, args_2));
var funcall_9 = ((function (composed_4) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
return (function () {
;
var a_5 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 0; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var funcall_6 = ((globals[("apply")])(composed_4, a_5));
var funcall_7 = (f_0(funcall_6));
return funcall_7;
});
})(funcall_8));
(if_10 = funcall_9);
}
return if_10;
}));
(null);


((globals[("curry")]) = (function curry_1(f_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
return (function (x_2) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
return (function (y_3) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_4 = (f_0(x_2, y_3));
return funcall_4;
});
});
}));
(null);


((globals[("uncurry")]) = (function uncurry_1(f_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
return (function (x_2, y_3) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_4 = (f_0(x_2));
var funcall_5 = (funcall_4(y_3));
return funcall_5;
});
}));
(null);


((globals[("partial")]) = (function partial_1(f_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
;
var args1_2 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 1; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
return (function () {
;
var args2_3 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 0; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var funcall_4 = ((globals[("append")])(args1_2, args2_3));
var funcall_5 = ((globals[("apply")])(f_0, funcall_4));
return funcall_5;
});
}));
(null);


((globals[("flip")]) = (function flip_1(f_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
return (function (x_2, y_3) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_4 = (f_0(y_3, x_2));
return funcall_4;
});
}));
(null);


((globals[("$")]) = (function $_1(f_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
;
var args_2 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 1; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var funcall_3 = ((globals[("apply")])(f_0, args_2));
return funcall_3;
}));
(null);


((globals[("chain")]) = (function chain_1(x_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
;
var funcs_2 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 1; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var funcall_3 = ((globals[("nil?")])(funcs_2));
var if_9 = (null);
if (funcall_3) {
(if_9 = x_0);
} else {
var funcall_4 = ((globals[("head")])(funcs_2));
var funcall_5 = (funcall_4(x_0));
var funcall_6 = ((globals[("tail")])(funcs_2));
var funcall_7 = ((globals[("cons")])(funcall_5, funcall_6));
var funcall_8 = ((globals[("apply")])(chain_1, funcall_7));
(if_9 = funcall_8);
}
return if_9;
}));
(null);


((globals[("id")]) = (function id_1(x_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
return x_0;
}));
(null);


((globals[("const")]) = (function const_1(x_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
return (function (__2) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
return x_0;
});
}));
(null);


var funcall_22 = ((globals[("set-macro-type!")])((function (_expr_237_0, _env_238_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_20 = ((globals[("tail")])(_expr_237_0));
var funcall_21 = ((globals[("apply")])((function let__3(bindings_2) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
;
var body_4 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 1; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var funcall_5 = ((globals[("nil?")])(bindings_2));
var if_19 = (null);
if (funcall_5) {
var funcall_6 = ((globals[("cons")])((Symbol.create("do")), body_4));
(if_19 = funcall_6);
} else {
var funcall_7 = ((globals[("head")])(bindings_2));
var funcall_8 = ((globals[("tail")])(bindings_2));
var funcall_9 = ((globals[("head")])(funcall_8));
var funcall_10 = ((globals[("cons")])(funcall_9, (new Nil())));
var funcall_11 = ((globals[("cons")])(funcall_7, funcall_10));
var funcall_12 = ((globals[("tail")])(bindings_2));
var funcall_13 = ((globals[("tail")])(funcall_12));
var funcall_14 = ((globals[("cons")])(funcall_13, body_4));
var funcall_15 = ((globals[("cons")])((Symbol.create("let*")), funcall_14));
var funcall_16 = ((globals[("cons")])(funcall_15, (new Nil())));
var funcall_17 = ((globals[("cons")])(funcall_11, funcall_16));
var funcall_18 = ((globals[("cons")])((Symbol.create("let")), funcall_17));
(if_19 = funcall_18);
}
return if_19;
}), funcall_20));
return funcall_21;
}), ("form")));
((globals[("let*")]) = funcall_22);
(null);


var funcall_20 = ((globals[("set-macro-type!")])((function (_expr_240_0, _env_241_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_18 = ((globals[("tail")])(_expr_240_0));
var funcall_19 = ((globals[("apply")])((function letrec_3(bindings_2) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
;
var body_4 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 1; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var funcall_9 = ((globals[("a:map")])((function (k_5, v_6) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_7 = ((globals[("cons")])((null), (new Nil())));
var funcall_8 = ((globals[("cons")])(k_5, funcall_7));
return funcall_8;
}), bindings_2));
var funcall_10 = ((globals[("apply")])((globals[("append")]), funcall_9));
var funcall_14 = ((globals[("a:map")])((function (k_5, v_6) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_11 = ((globals[("cons")])(v_6, (new Nil())));
var funcall_12 = ((globals[("cons")])(k_5, funcall_11));
var funcall_13 = ((globals[("cons")])((Symbol.create("setq!")), funcall_12));
return funcall_13;
}), bindings_2));
var funcall_15 = ((globals[("append2")])(funcall_14, body_4));
var funcall_16 = ((globals[("cons")])(funcall_10, funcall_15));
var funcall_17 = ((globals[("cons")])((Symbol.create("let")), funcall_16));
return funcall_17;
}), funcall_18));
return funcall_19;
}), ("form")));
((globals[("letrec")]) = funcall_20);
(null);


var funcall_16 = ((globals[("set-macro-type!")])((function (_expr_244_0, _env_245_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_14 = ((globals[("tail")])(_expr_244_0));
var funcall_15 = ((globals[("apply")])((function do1_3(fst_2) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
;
var body_4 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 1; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var funcall_12 = ((globals[("gensym")])());
var funcall_13 = ((function (v_5) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_6 = ((globals[("cons")])(fst_2, (new Nil())));
var funcall_7 = ((globals[("cons")])(v_5, funcall_6));
var funcall_8 = ((globals[("cons")])(v_5, (new Nil())));
var funcall_9 = ((globals[("append2")])(body_4, funcall_8));
var funcall_10 = ((globals[("cons")])(funcall_7, funcall_9));
var funcall_11 = ((globals[("cons")])((Symbol.create("let")), funcall_10));
return funcall_11;
})(funcall_12));
return funcall_13;
}), funcall_14));
return funcall_15;
}), ("form")));
((globals[("do1")]) = funcall_16);
(null);


var funcall_11 = ((globals[("set-macro-type!")])((function (_expr_247_0, _env_248_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_9 = ((globals[("tail")])(_expr_247_0));
var funcall_10 = ((globals[("apply")])((function do2_3(fst_2) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
;
var body_4 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 1; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var funcall_5 = ((globals[("cons")])((Symbol.create("do1")), body_4));
var funcall_6 = ((globals[("cons")])(funcall_5, (new Nil())));
var funcall_7 = ((globals[("cons")])(fst_2, funcall_6));
var funcall_8 = ((globals[("cons")])((Symbol.create("do")), funcall_7));
return funcall_8;
}), funcall_9));
return funcall_10;
}), ("form")));
((globals[("do2")]) = funcall_11);
(null);


var funcall_13 = ((globals[("set-macro-type!")])((function (_expr_251_0, _env_252_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_11 = ((globals[("tail")])(_expr_251_0));
var funcall_12 = ((globals[("apply")])((function set__2() {
;
var pairs_3 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 0; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var funcall_9 = ((globals[("a:map")])((function (place_4, val_5) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_6 = ((globals[("cons")])(val_5, (new Nil())));
var funcall_7 = ((globals[("cons")])(place_4, funcall_6));
var funcall_8 = ((globals[("cons")])((Symbol.create("single-set!")), funcall_7));
return funcall_8;
}), pairs_3));
var funcall_10 = ((globals[("cons")])((Symbol.create("do")), funcall_9));
return funcall_10;
}), funcall_11));
return funcall_12;
}), ("form")));
((globals[("set!")]) = funcall_13);
(null);


var funcall_35 = ((globals[("add-macro!")])((Symbol.create("single-set!")), (function (s_0, env_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_32 = ((globals[("nth")])(s_0, (1)));
var funcall_33 = ((globals[("nth")])(s_0, (2)));
var funcall_34 = ((function (place_2, val_3) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_4 = ((globals[("symbol?")])(place_2));
var if_31 = (null);
if (funcall_4) {
var funcall_8 = (env_1((Symbol.create("has?")), place_2));
var funcall_9 = ((function (_gensym_254_5) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var if_7 = (null);
if (_gensym_254_5) {
var funcall_6 = ((globals[("symbol-macro?")])(place_2));
(if_7 = funcall_6);
} else {
(if_7 = _gensym_254_5);
}
return if_7;
})(funcall_8));
var if_17 = (null);
if (funcall_9) {
var funcall_10 = ((globals[("macro-expand")])(place_2, env_1));
var funcall_11 = ((globals[("cons")])(val_3, (new Nil())));
var funcall_12 = ((globals[("cons")])(funcall_10, funcall_11));
var funcall_13 = ((globals[("cons")])((Symbol.create("single-set!")), funcall_12));
(if_17 = funcall_13);
} else {
var funcall_14 = ((globals[("cons")])(val_3, (new Nil())));
var funcall_15 = ((globals[("cons")])(place_2, funcall_14));
var funcall_16 = ((globals[("cons")])((Symbol.create("setq!")), funcall_15));
(if_17 = funcall_16);
}
(if_31 = if_17);
} else {
var funcall_22 = ((globals[("cons?")])(place_2));
var funcall_23 = ((function (_gensym_255_18) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var if_21 = (null);
if (_gensym_255_18) {
var funcall_19 = ((globals[("head")])(place_2));
var funcall_20 = ((globals[("symbol?")])(funcall_19));
(if_21 = funcall_20);
} else {
(if_21 = _gensym_255_18);
}
return if_21;
})(funcall_22));
var if_30 = (null);
if (funcall_23) {
var funcall_24 = ((globals[("head")])(place_2));
var funcall_25 = ((globals[("symbol")])(("set-"), funcall_24, ("!")));
var funcall_26 = ((globals[("tail")])(place_2));
var funcall_27 = ((globals[("cons")])(val_3, (new Nil())));
var funcall_28 = ((globals[("append2")])(funcall_26, funcall_27));
var funcall_29 = ((globals[("cons")])(funcall_25, funcall_28));
(if_30 = funcall_29);
} else {
(if_30 = (null));
}
(if_31 = if_30);
}
return if_31;
})(funcall_32, funcall_33));
return funcall_34;
})));
funcall_35;


var funcall_25 = ((globals[("set-macro-type!")])((function (_expr_258_0, _env_259_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_23 = ((globals[("tail")])(_expr_258_0));
var funcall_24 = ((globals[("apply")])((function pset__2() {
;
var pairs_3 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 0; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var funcall_21 = ((globals[("a:map")])((function (k_18, v_19) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_20 = ((globals[("gensym")])(k_18));
return funcall_20;
}), pairs_3));
var funcall_22 = ((function (temps_4) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_5 = ((globals[("a:values")])(pairs_3));
var funcall_6 = ((globals[("zip")])(temps_4, funcall_5));
var funcall_7 = ((globals[("apply")])((globals[("append")]), funcall_6));
var funcall_8 = ((globals[("a:keys")])(pairs_3));
var funcall_9 = ((globals[("zip")])(funcall_8));
var funcall_10 = ((globals[("apply")])((globals[("append")]), funcall_9));
var funcall_11 = ((globals[("cons")])((Symbol.create("temps")), (new Nil())));
var funcall_12 = ((globals[("append2")])(funcall_10, funcall_11));
var funcall_13 = ((globals[("cons")])((Symbol.create("set!")), funcall_12));
var funcall_14 = ((globals[("cons")])((null), (new Nil())));
var funcall_15 = ((globals[("cons")])(funcall_13, funcall_14));
var funcall_16 = ((globals[("cons")])(funcall_7, funcall_15));
var funcall_17 = ((globals[("cons")])((Symbol.create("let")), funcall_16));
return funcall_17;
})(funcall_21));
return funcall_22;
}), funcall_23));
return funcall_24;
}), ("form")));
((globals[("pset!")]) = funcall_25);
(null);


var funcall_22 = ((globals[("set-macro-type!")])((function (_expr_263_0, _env_264_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_20 = ((globals[("tail")])(_expr_263_0));
var funcall_21 = ((globals[("apply")])((function inc__3(s_2) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
;
var mdelta_4 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 1; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var funcall_5 = ((globals[("length")])(mdelta_4));
var funcall_6 = ((globals[("<")])((1), funcall_5));
var if_8 = (null);
if (funcall_6) {
var funcall_7 = ((globals[("error")])(("Incorrect number of arguments to inc!")));
(if_8 = funcall_7);
} else {
(if_8 = (null));
}
if_8;
var funcall_16 = ((globals[("nil?")])(mdelta_4));
var if_18 = (null);
if (funcall_16) {
(if_18 = (1));
} else {
var funcall_17 = ((globals[("head")])(mdelta_4));
(if_18 = funcall_17);
}
var funcall_19 = ((function (delta_9) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_10 = ((globals[("cons")])(delta_9, (new Nil())));
var funcall_11 = ((globals[("cons")])(s_2, funcall_10));
var funcall_12 = ((globals[("cons")])((Symbol.create("+")), funcall_11));
var funcall_13 = ((globals[("cons")])(funcall_12, (new Nil())));
var funcall_14 = ((globals[("cons")])(s_2, funcall_13));
var funcall_15 = ((globals[("cons")])((Symbol.create("set!")), funcall_14));
return funcall_15;
})(if_18));
return funcall_19;
}), funcall_20));
return funcall_21;
}), ("form")));
((globals[("inc!")]) = funcall_22);
(null);


var funcall_22 = ((globals[("set-macro-type!")])((function (_expr_266_0, _env_267_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_20 = ((globals[("tail")])(_expr_266_0));
var funcall_21 = ((globals[("apply")])((function dec__3(s_2) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
;
var mdelta_4 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 1; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var funcall_5 = ((globals[("length")])(mdelta_4));
var funcall_6 = ((globals[("<")])((1), funcall_5));
var if_8 = (null);
if (funcall_6) {
var funcall_7 = ((globals[("error")])(("Incorrect number of arguments to dec!")));
(if_8 = funcall_7);
} else {
(if_8 = (null));
}
if_8;
var funcall_16 = ((globals[("nil?")])(mdelta_4));
var if_18 = (null);
if (funcall_16) {
(if_18 = (1));
} else {
var funcall_17 = ((globals[("head")])(mdelta_4));
(if_18 = funcall_17);
}
var funcall_19 = ((function (delta_9) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_10 = ((globals[("cons")])(delta_9, (new Nil())));
var funcall_11 = ((globals[("cons")])(s_2, funcall_10));
var funcall_12 = ((globals[("cons")])((Symbol.create("-")), funcall_11));
var funcall_13 = ((globals[("cons")])(funcall_12, (new Nil())));
var funcall_14 = ((globals[("cons")])(s_2, funcall_13));
var funcall_15 = ((globals[("cons")])((Symbol.create("set!")), funcall_14));
return funcall_15;
})(if_18));
return funcall_19;
}), funcall_20));
return funcall_21;
}), ("form")));
((globals[("dec!")]) = funcall_22);
(null);


var funcall_13 = ((globals[("set-macro-type!")])((function (_expr_269_0, _env_270_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_11 = ((globals[("tail")])(_expr_269_0));
var funcall_12 = ((globals[("apply")])((function push__4(s_2, v_3) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_5 = ((globals[("cons")])(s_2, (new Nil())));
var funcall_6 = ((globals[("cons")])(v_3, funcall_5));
var funcall_7 = ((globals[("cons")])((Symbol.create("cons")), funcall_6));
var funcall_8 = ((globals[("cons")])(funcall_7, (new Nil())));
var funcall_9 = ((globals[("cons")])(s_2, funcall_8));
var funcall_10 = ((globals[("cons")])((Symbol.create("set!")), funcall_9));
return funcall_10;
}), funcall_11));
return funcall_12;
}), ("form")));
((globals[("push!")]) = funcall_13);
(null);


var funcall_19 = ((globals[("set-macro-type!")])((function (_expr_273_0, _env_274_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_17 = ((globals[("tail")])(_expr_273_0));
var funcall_18 = ((globals[("apply")])((function for_5(v_2, in_3, lst_4) {
if (arguments.length < 3) {
  throw new Error("Expecting at least 3 arguments.");
}
;
var body_6 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 3; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var funcall_7 = ((globals[("=")])(in_3, (Symbol.create("in"))));
var funcall_8 = ((globals[("not")])(funcall_7));
var if_16 = (null);
if (funcall_8) {
var funcall_9 = ((globals[("error")])(("Missing keyword 'in' in for.")));
(if_16 = funcall_9);
} else {
var funcall_10 = ((globals[("cons")])(v_2, (new Nil())));
var funcall_11 = ((globals[("cons")])(funcall_10, body_6));
var funcall_12 = ((globals[("cons")])((Symbol.create("fun")), funcall_11));
var funcall_13 = ((globals[("cons")])(lst_4, (new Nil())));
var funcall_14 = ((globals[("cons")])(funcall_12, funcall_13));
var funcall_15 = ((globals[("cons")])((Symbol.create("map")), funcall_14));
(if_16 = funcall_15);
}
return if_16;
}), funcall_17));
return funcall_18;
}), ("form")));
((globals[("for")]) = funcall_19);
(null);


var funcall_19 = ((globals[("set-macro-type!")])((function (_expr_276_0, _env_277_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_17 = ((globals[("tail")])(_expr_276_0));
var funcall_18 = ((globals[("apply")])((function for__5(v_2, in_3, lst_4) {
if (arguments.length < 3) {
  throw new Error("Expecting at least 3 arguments.");
}
;
var body_6 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 3; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var funcall_7 = ((globals[("=")])(in_3, (Symbol.create("in"))));
var funcall_8 = ((globals[("not")])(funcall_7));
var if_16 = (null);
if (funcall_8) {
var funcall_9 = ((globals[("error")])(("Missing keyword 'in' in for_.")));
(if_16 = funcall_9);
} else {
var funcall_10 = ((globals[("cons")])(v_2, (new Nil())));
var funcall_11 = ((globals[("cons")])(funcall_10, body_6));
var funcall_12 = ((globals[("cons")])((Symbol.create("fun")), funcall_11));
var funcall_13 = ((globals[("cons")])(lst_4, (new Nil())));
var funcall_14 = ((globals[("cons")])(funcall_12, funcall_13));
var funcall_15 = ((globals[("cons")])((Symbol.create("each")), funcall_14));
(if_16 = funcall_15);
}
return if_16;
}), funcall_17));
return funcall_18;
}), ("form")));
((globals[("for_")]) = funcall_19);
(null);


var funcall_37 = ((globals[("set-macro-type!")])((function (_expr_282_0, _env_283_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_35 = ((globals[("tail")])(_expr_282_0));
var funcall_36 = ((globals[("apply")])((function switch_3(v_2) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
;
var cases_4 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 1; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var _switch_5 = (function _switch_5(vv_6, cases_4) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_7 = ((globals[("nil?")])(cases_4));
var if_26 = (null);
if (funcall_7) {
(if_26 = (null));
} else {
var funcall_8 = ((globals[("tail")])(cases_4));
var funcall_9 = ((globals[("nil?")])(funcall_8));
var if_25 = (null);
if (funcall_9) {
var funcall_10 = ((globals[("head")])(cases_4));
(if_25 = funcall_10);
} else {
var if_24 = (null);
if ((true)) {
var funcall_11 = ((globals[("head")])(cases_4));
var funcall_12 = ((globals[("cons")])(funcall_11, (new Nil())));
var funcall_13 = ((globals[("cons")])(vv_6, funcall_12));
var funcall_14 = ((globals[("cons")])((Symbol.create("=")), funcall_13));
var funcall_15 = ((globals[("tail")])(cases_4));
var funcall_16 = ((globals[("head")])(funcall_15));
var funcall_17 = ((globals[("tail")])(cases_4));
var funcall_18 = ((globals[("tail")])(funcall_17));
var funcall_19 = (_switch_5(vv_6, funcall_18));
var funcall_20 = ((globals[("cons")])(funcall_19, (new Nil())));
var funcall_21 = ((globals[("cons")])(funcall_16, funcall_20));
var funcall_22 = ((globals[("cons")])(funcall_14, funcall_21));
var funcall_23 = ((globals[("cons")])((Symbol.create("if")), funcall_22));
(if_24 = funcall_23);
} else {
(if_24 = (null));
}
(if_25 = if_24);
}
(if_26 = if_25);
}
return if_26;
});
var funcall_33 = ((globals[("gensym")])());
var funcall_34 = ((function (vv_6) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_27 = ((globals[("cons")])(v_2, (new Nil())));
var funcall_28 = ((globals[("cons")])(vv_6, funcall_27));
var funcall_29 = (_switch_5(vv_6, cases_4));
var funcall_30 = ((globals[("cons")])(funcall_29, (new Nil())));
var funcall_31 = ((globals[("cons")])(funcall_28, funcall_30));
var funcall_32 = ((globals[("cons")])((Symbol.create("let")), funcall_31));
return funcall_32;
})(funcall_33));
return funcall_34;
}), funcall_35));
return funcall_36;
}), ("form")));
((globals[("switch")]) = funcall_37);
(null);


var funcall_69 = ((globals[("set-macro-type!")])((function (_expr_288_0, _env_289_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_67 = ((globals[("tail")])(_expr_288_0));
var funcall_68 = ((globals[("apply")])((function dfun_2() {
;
var cases_3 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 0; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var transform_cases_4 = (function transform_cases_4(v_5, cases_3) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_6 = ((globals[("nil?")])(cases_3));
var if_48 = (null);
if (funcall_6) {
var funcall_7 = ((globals[("cons")])(v_5, (new Nil())));
var funcall_8 = ((globals[("cons")])((Symbol.create("repr")), funcall_7));
var funcall_9 = ((globals[("cons")])(funcall_8, (new Nil())));
var funcall_10 = ((globals[("cons")])(("No such message: "), funcall_9));
var funcall_11 = ((globals[("cons")])((Symbol.create("++")), funcall_10));
var funcall_12 = ((globals[("cons")])(funcall_11, (new Nil())));
var funcall_13 = ((globals[("cons")])((Symbol.create("error")), funcall_12));
var funcall_14 = ((globals[("cons")])(funcall_13, (new Nil())));
var funcall_15 = ((globals[("cons")])((Symbol.create("_")), funcall_14));
var funcall_16 = ((globals[("cons")])((Symbol.create("fun")), funcall_15));
var funcall_17 = ((globals[("cons")])(funcall_16, (new Nil())));
(if_48 = funcall_17);
} else {
var funcall_18 = ((globals[("tail")])(cases_3));
var funcall_19 = ((globals[("nil?")])(funcall_18));
var if_47 = (null);
if (funcall_19) {
var funcall_26 = ((globals[("gensym")])());
var funcall_27 = ((function (__20) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_21 = ((globals[("head")])(cases_3));
var funcall_22 = ((globals[("cons")])(funcall_21, (new Nil())));
var funcall_23 = ((globals[("cons")])(__20, funcall_22));
var funcall_24 = ((globals[("cons")])((Symbol.create("fun")), funcall_23));
var funcall_25 = ((globals[("cons")])(funcall_24, (new Nil())));
return funcall_25;
})(funcall_26));
(if_47 = funcall_27);
} else {
var if_46 = (null);
if ((true)) {
var funcall_39 = ((globals[("head")])(cases_3));
var funcall_40 = ((globals[("head")])(funcall_39));
var funcall_41 = ((globals[("head")])(cases_3));
var funcall_42 = ((globals[("tail")])(funcall_41));
var funcall_43 = ((globals[("tail")])(cases_3));
var funcall_44 = ((globals[("head")])(funcall_43));
var funcall_45 = ((function (msg_28, args_29, conseq_30) {
if (arguments.length < 3) {
  throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
  throw new Error("Expecting at most 3 arguments.");
}
;
var funcall_31 = ((globals[("cons")])(conseq_30, (new Nil())));
var funcall_32 = ((globals[("cons")])(args_29, funcall_31));
var funcall_33 = ((globals[("cons")])((Symbol.create("fun")), funcall_32));
var funcall_34 = ((globals[("tail")])(cases_3));
var funcall_35 = ((globals[("tail")])(funcall_34));
var funcall_36 = (transform_cases_4(v_5, funcall_35));
var funcall_37 = ((globals[("cons")])(funcall_33, funcall_36));
var funcall_38 = ((globals[("cons")])(msg_28, funcall_37));
return funcall_38;
})(funcall_40, funcall_42, funcall_44));
(if_46 = funcall_45);
} else {
(if_46 = (null));
}
(if_47 = if_46);
}
(if_48 = if_47);
}
return if_48;
});
var funcall_64 = ((globals[("gensym")])());
var funcall_65 = ((globals[("gensym")])());
var funcall_66 = ((function (v_5, args_29) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_49 = ((globals[("cons")])(v_5, args_29));
var funcall_50 = (transform_cases_4(v_5, cases_3));
var funcall_51 = ((globals[("cons")])(v_5, funcall_50));
var funcall_52 = ((globals[("cons")])((Symbol.create("switch")), funcall_51));
var funcall_53 = ((globals[("cons")])(args_29, (new Nil())));
var funcall_54 = ((globals[("cons")])(funcall_52, funcall_53));
var funcall_55 = ((globals[("cons")])((Symbol.create("apply")), funcall_54));
var funcall_56 = ((globals[("cons")])(funcall_55, (new Nil())));
var funcall_57 = ((globals[("cons")])(funcall_49, funcall_56));
var funcall_58 = ((globals[("cons")])((Symbol.create("fun")), funcall_57));
var funcall_59 = ((globals[("cons")])(funcall_58, (new Nil())));
var funcall_60 = ((globals[("cons")])((Symbol.create("self")), funcall_59));
var funcall_61 = ((globals[("cons")])((Symbol.create("self")), (new Nil())));
var funcall_62 = ((globals[("cons")])(funcall_60, funcall_61));
var funcall_63 = ((globals[("cons")])((Symbol.create("letrec")), funcall_62));
return funcall_63;
})(funcall_64, funcall_65));
return funcall_66;
}), funcall_67));
return funcall_68;
}), ("form")));
((globals[("dfun")]) = funcall_69);
(null);


var funcall_76 = ((globals[("set-macro-type!")])((function (_expr_299_0, _env_300_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_74 = ((globals[("tail")])(_expr_299_0));
var funcall_75 = ((globals[("apply")])((function dfun2_2() {
;
var cases_3 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 0; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var transform_cases_4 = (function transform_cases_4(cases_3, default_5) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_6 = ((globals[("nil?")])(cases_3));
var if_35 = (null);
if (funcall_6) {
(if_35 = (new Nil()));
} else {
var funcall_7 = ((globals[("tail")])(cases_3));
var funcall_8 = ((globals[("nil?")])(funcall_7));
var if_34 = (null);
if (funcall_8) {
var funcall_15 = ((globals[("gensym")])());
var funcall_16 = ((function (__9) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_10 = ((globals[("list")])((Symbol.create("quote")), default_5));
var funcall_11 = ((globals[("head")])(cases_3));
var funcall_12 = ((globals[("list")])((Symbol.create("fun")), __9, funcall_11));
var funcall_13 = ((globals[("list")])(funcall_10, funcall_12));
var funcall_14 = ((globals[("list")])(funcall_13));
return funcall_14;
})(funcall_15));
(if_34 = funcall_16);
} else {
var if_33 = (null);
if ((true)) {
var funcall_26 = ((globals[("head")])(cases_3));
var funcall_27 = ((globals[("head")])(funcall_26));
var funcall_28 = ((globals[("head")])(cases_3));
var funcall_29 = ((globals[("tail")])(funcall_28));
var funcall_30 = ((globals[("tail")])(cases_3));
var funcall_31 = ((globals[("head")])(funcall_30));
var funcall_32 = ((function (msg_17, args_18, conseq_19) {
if (arguments.length < 3) {
  throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
  throw new Error("Expecting at most 3 arguments.");
}
;
var funcall_20 = ((globals[("list")])((Symbol.create("fun")), args_18, conseq_19));
var funcall_21 = ((globals[("list")])(msg_17, funcall_20));
var funcall_22 = ((globals[("tail")])(cases_3));
var funcall_23 = ((globals[("tail")])(funcall_22));
var funcall_24 = (transform_cases_4(funcall_23, default_5));
var funcall_25 = ((globals[("cons")])(funcall_21, funcall_24));
return funcall_25;
})(funcall_27, funcall_29, funcall_31));
(if_33 = funcall_32);
} else {
(if_33 = (null));
}
(if_34 = if_33);
}
(if_35 = if_34);
}
return if_35;
});
var funcall_72 = ((globals[("gensym")])());
var funcall_73 = ((function (v_36) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_70 = ((globals[("gensym")])());
var funcall_71 = ((function (msg_17) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_68 = ((globals[("gensym")])());
var funcall_69 = ((function (args_18) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_66 = ((globals[("gensym")])());
var funcall_67 = ((function (d_37) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_64 = ((globals[("gensym")])());
var funcall_65 = ((function (default_5) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_38 = ((globals[("list")])((Symbol.create("dict"))));
var funcall_39 = ((globals[("cons")])(v_36, args_18));
var funcall_40 = ((globals[("list")])((Symbol.create("set!")), msg_17, v_36));
var funcall_41 = ((globals[("list")])((Symbol.create("dict:has?")), d_37, v_36));
var funcall_42 = ((globals[("list")])((Symbol.create("dict:get")), d_37, v_36));
var funcall_43 = ((globals[("list")])((Symbol.create("apply")), funcall_42, args_18));
var funcall_44 = ((globals[("list")])((Symbol.create("quote")), default_5));
var funcall_45 = ((globals[("list")])((Symbol.create("dict:get")), d_37, funcall_44));
var funcall_46 = ((globals[("list")])(funcall_45));
var funcall_47 = ((globals[("list")])((Symbol.create("if")), funcall_41, funcall_43, funcall_46));
var funcall_48 = ((globals[("list")])((Symbol.create("fun")), funcall_39, funcall_40, funcall_47));
var funcall_49 = ((globals[("list")])(d_37, funcall_38, msg_17, (null), (Symbol.create("self")), funcall_48));
var funcall_50 = ((globals[("list")])((Symbol.create("quote")), default_5));
var funcall_51 = ((globals[("list")])((Symbol.create("repr")), msg_17));
var funcall_52 = ((globals[("list")])((Symbol.create("++")), ("No such message: "), funcall_51));
var funcall_53 = ((globals[("list")])((Symbol.create("error")), funcall_52));
var funcall_54 = ((globals[("list")])((Symbol.create("fun")), (Symbol.create("_")), funcall_53));
var funcall_55 = ((globals[("list")])((Symbol.create("dict:set!")), d_37, funcall_50, funcall_54));
var funcall_59 = (transform_cases_4(cases_3, default_5));
var funcall_60 = ((globals[("map")])((function (item_56) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_57 = ((globals[("cons")])(d_37, item_56));
var funcall_58 = ((globals[("cons")])((Symbol.create("dict:set!")), funcall_57));
return funcall_58;
}), funcall_59));
var funcall_61 = ((globals[("cons")])((Symbol.create("do")), funcall_60));
var funcall_62 = ((globals[("list")])((Symbol.create("letrec")), funcall_49, funcall_55, funcall_61, (Symbol.create("self"))));
var funcall_63 = ((globals[("scope")])(funcall_62));
return funcall_63;
})(funcall_64));
return funcall_65;
})(funcall_66));
return funcall_67;
})(funcall_68));
return funcall_69;
})(funcall_70));
return funcall_71;
})(funcall_72));
return funcall_73;
}), funcall_74));
return funcall_75;
}), ("form")));
((globals[("dfun2")]) = funcall_76);
(null);


((globals[("a:push!")]) = (function a_push__2(a_0, v_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_3 = ((function (a, v) { return a.push(v); })(a_0, v_1));
return funcall_3;
}));
(null);


((globals[("make-array")]) = (function make_array_0() {
;
var inits_1 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 0; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var funcall_8 = ((function (a_2) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_7 = ((globals[("map")])((function (init_3) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_6 = ((globals[("map")])((function (x_4) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_5 = ((globals[("a:push!")])(a_2, x_4));
return funcall_5;
}), init_3));
return funcall_6;
}), inits_1));
funcall_7;
return a_2;
})(([])));
return funcall_8;
}));
(null);


((globals[("a:join")]) = (function a_join_2(a_0, sep_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_3 = ((function (a, sep) { return a.join(sep); })(a_0, sep_1));
return funcall_3;
}));
(null);


((globals[("s:length")]) = (function s_length_1(s_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
return (s_0[("length")]);
}));
(null);


((globals[("s:charAt")]) = (function s_charAt_2(s_0, i_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_3 = (((function (s, i) { return s.charAt(i); }))(s_0, i_1));
return funcall_3;
}));
(null);


((globals[("s:charCodeAt")]) = (function s_charCodeAt_2(s_0, i_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_3 = (((function (s, i) { return s.charCodeAt(i); }))(s_0, i_1));
return funcall_3;
}));
(null);


((globals[("s:slice")]) = ((function (s) {
  var args = Array.prototype.slice.call(arguments);
  args.shift();
  return s.slice.apply(s, args);
})));
(null);


((globals[("s:indexOf")]) = ((function (s) {
  var args = Array.prototype.slice.call(arguments);
  args.shift();
  return s.indexOf.apply(s, args);
})));
(null);


((globals[("s:fromCharCode")]) = (String.fromCharCode));
(null);


((globals[("s:split")]) = ((function (s) {
  var args = Array.prototype.slice.call(arguments);
  args.shift();
  var ret = new Nil();
  var split = s.split.apply(s, args);
  for (var i = split.length - 1; i >= 0; i--) {
    ret = new Cons(split[i], ret);
  }
  return ret;
})));
(null);


((globals[("s:contains")]) = (function s_contains_2(s_0, sub_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_3 = ((globals[("s:indexOf")])(s_0, sub_1));
var funcall_4 = ((globals[("!=")])((-1), funcall_3));
return funcall_4;
}));
(null);


((globals[("s:join")]) = (function s_join_2(sep_0, ss_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_3 = ((globals[("nil?")])(ss_1));
var if_13 = (null);
if (funcall_3) {
(if_13 = (""));
} else {
var funcall_4 = ((globals[("tail")])(ss_1));
var funcall_5 = ((globals[("nil?")])(funcall_4));
var if_12 = (null);
if (funcall_5) {
var funcall_6 = ((globals[("head")])(ss_1));
(if_12 = funcall_6);
} else {
var if_11 = (null);
if ((true)) {
var funcall_7 = ((globals[("head")])(ss_1));
var funcall_8 = ((globals[("tail")])(ss_1));
var funcall_9 = (s_join_2(sep_0, funcall_8));
var funcall_10 = ((globals[("++")])(funcall_7, sep_0, funcall_9));
(if_11 = funcall_10);
} else {
(if_11 = (null));
}
(if_12 = if_11);
}
(if_13 = if_12);
}
return if_13;
}));
(null);


((globals[("s:map-append")]) = (function s_map_append_2(f_0, s_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_15 = ((globals[("make-array")])());
var funcall_16 = ((function (parts_3, i_4) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_5 = ((globals[("s:length")])(s_1));
var funcall_6 = ((globals[("<")])(i_4, funcall_5));
var while_13 = funcall_6;
while (while_13) {
var funcall_9 = ((globals[("s:charAt")])(s_1, i_4));
var funcall_10 = (f_0(funcall_9));
var funcall_11 = ((globals[("a:push!")])(parts_3, funcall_10));
funcall_11;
var funcall_12 = ((globals[("+")])(i_4, (1)));
(i_4 = funcall_12);
var funcall_7 = ((globals[("s:length")])(s_1));
var funcall_8 = ((globals[("<")])(i_4, funcall_7));
(while_13 = funcall_8);
}
var funcall_14 = ((globals[("a:join")])(parts_3, ("")));
return funcall_14;
})(funcall_15, (0)));
return funcall_16;
}));
(null);


((globals[("Dict")]) = ((function () {
  function Dict () {}; return Dict;
})()));
(null);


((globals[("js:makeDict")]) = (function js_makeDict_0() {
if (arguments.length > 0) {
  throw new Error("Expecting at most 0 arguments.");
}
;
return (new globals.Dict());
}));
(null);


((globals[("dict?")]) = (function dict__1(d_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
return (d_0 instanceof (globals.Dict));
}));
(null);


((globals[("dict:get")]) = ((function (o, k, def) {
  if (globals['js:hasOwnProperty'](o, k)) {
    return o[k];
  } else if (def === undefined) {
    throw new Error('Key error: ' + k);
  } else {
    return def;
  }
})));
(null);


((globals[("dict:set!")]) = ((function (o, k, v) {
  if (v === undefined) {
    throw new Error("Not enough arguments passed to dict:set!");
  }
  o[k] = v;
  return null;
})));
(null);


((globals[("dict:has?")]) = ((function (o, k) {
  return globals['js:hasOwnProperty'](o, k);
})));
(null);


((globals[("dict")]) = (function dict_0() {
;
var pairs_1 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 0; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var funcall_7 = ((globals[("js:makeDict")])());
var funcall_8 = ((function (d_2) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_6 = ((globals[("a:map")])((function (k_3, v_4) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_5 = ((globals[("dict:set!")])(d_2, k_3, v_4));
return funcall_5;
}), pairs_1));
funcall_6;
return d_2;
})(funcall_7));
return funcall_8;
}));
(null);


((globals[("dict:items")]) = (function dict_items_1(d_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_2 = ((function (d) {
     var items = new Nil();
     for (var k in d) {
       if (globals['js:hasOwnProperty'](d, k))
         items = new Cons(new Cons(k, new Cons(d[k], new Nil())), items);
     }
     return items;
   })(d_0));
return funcall_2;
}));
(null);


((globals[("js:print")]) = (function (o) {
  process.stdout.write(''+o);
  return null;
}));
(null);


((globals[("print")]) = (function print_0() {
;
var xs_1 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 0; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var funcall_8 = ((globals[("map")])((function (x_2) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_3 = ((globals[("string?")])(x_2));
var if_7 = (null);
if (funcall_3) {
var funcall_4 = ((globals[("js:print")])(x_2));
(if_7 = funcall_4);
} else {
var funcall_5 = ((globals[("repr")])(x_2));
var funcall_6 = ((globals[("js:print")])(funcall_5));
(if_7 = funcall_6);
}
return if_7;
}), xs_1));
return funcall_8;
}));
(null);


((globals[("println")]) = (function println_0() {
;
var xs_1 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 0; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var funcall_2 = ((globals[("apply")])((globals[("print")]), xs_1));
funcall_2;
var funcall_3 = ((globals[("print")])(("\n")));
return funcall_3;
}));
(null);


((globals[("probe")]) = (function probe_2(msg_0, x_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_3 = ((globals[("println")])(("probe "), msg_0, (":"), x_1));
funcall_3;
return x_1;
}));
(null);


((globals[("scope")]) = (function scope_1(x_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_2 = ((globals[("probe")])(("scope"), x_0));
return funcall_2;
}));
(null);


((globals[("js-escape-string")]) = (function js_escape_string_1(s_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_15 = ((globals[("s:map-append")])((function (c_2) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_14 = ((function (_gensym_328_3) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_4 = ((globals[("=")])(_gensym_328_3, ("\"")));
var if_13 = (null);
if (funcall_4) {
(if_13 = ("\\\""));
} else {
var funcall_5 = ((globals[("=")])(_gensym_328_3, ("\n")));
var if_12 = (null);
if (funcall_5) {
(if_12 = ("\\n"));
} else {
var funcall_6 = ((globals[("=")])(_gensym_328_3, ("\t")));
var if_11 = (null);
if (funcall_6) {
(if_11 = ("\\t"));
} else {
var funcall_7 = ((globals[("=")])(_gensym_328_3, ("\r")));
var if_10 = (null);
if (funcall_7) {
(if_10 = ("\\r"));
} else {
var funcall_8 = ((globals[("=")])(_gensym_328_3, ("\\")));
var if_9 = (null);
if (funcall_8) {
(if_9 = ("\\\\"));
} else {
(if_9 = c_2);
}
(if_10 = if_9);
}
(if_11 = if_10);
}
(if_12 = if_11);
}
(if_13 = if_12);
}
return if_13;
})(c_2));
return funcall_14;
}), s_0));
var funcall_16 = ((globals[("++")])(("\""), funcall_15, ("\"")));
return funcall_16;
}));
(null);


((globals[("repr")]) = (function repr_1(x_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var repr_tail_2 = (function repr_tail_2(xs_3) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_4 = ((globals[("tail")])(xs_3));
var funcall_5 = ((globals[("nil?")])(funcall_4));
var if_23 = (null);
if (funcall_5) {
var funcall_6 = ((globals[("head")])(xs_3));
var funcall_7 = (repr_1(funcall_6));
var funcall_8 = ((globals[("++")])(funcall_7, (")")));
(if_23 = funcall_8);
} else {
var funcall_9 = ((globals[("tail")])(xs_3));
var funcall_10 = ((globals[("cons?")])(funcall_9));
var if_22 = (null);
if (funcall_10) {
var funcall_11 = ((globals[("head")])(xs_3));
var funcall_12 = (repr_1(funcall_11));
var funcall_13 = ((globals[("tail")])(xs_3));
var funcall_14 = (repr_tail_2(funcall_13));
var funcall_15 = ((globals[("++")])(funcall_12, (" "), funcall_14));
(if_22 = funcall_15);
} else {
var if_21 = (null);
if ((true)) {
var funcall_16 = ((globals[("head")])(xs_3));
var funcall_17 = (repr_1(funcall_16));
var funcall_18 = ((globals[("tail")])(xs_3));
var funcall_19 = (repr_1(funcall_18));
var funcall_20 = ((globals[("++")])(funcall_17, (" # "), funcall_19, (")")));
(if_21 = funcall_20);
} else {
(if_21 = (null));
}
(if_22 = if_21);
}
(if_23 = if_22);
}
return if_23;
});
var funcall_24 = ((globals[("nil?")])(x_0));
var if_69 = (null);
if (funcall_24) {
(if_69 = ("()"));
} else {
var funcall_25 = ((globals[("cons?")])(x_0));
var if_68 = (null);
if (funcall_25) {
var funcall_26 = ((globals[("tail")])(x_0));
var funcall_27 = ((globals[("cons?")])(funcall_26));
var if_59 = (null);
if (funcall_27) {
var funcall_55 = ((globals[("head")])(x_0));
var funcall_56 = ((function (_gensym_330_28) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_29 = ((globals[("=")])(_gensym_330_28, (Symbol.create("quote"))));
var if_54 = (null);
if (funcall_29) {
var funcall_30 = ((globals[("tail")])(x_0));
var funcall_31 = ((globals[("head")])(funcall_30));
var funcall_32 = (repr_1(funcall_31));
var funcall_33 = ((globals[("++")])(("'"), funcall_32));
(if_54 = funcall_33);
} else {
var funcall_34 = ((globals[("=")])(_gensym_330_28, (Symbol.create("quasiquote"))));
var if_53 = (null);
if (funcall_34) {
var funcall_35 = ((globals[("tail")])(x_0));
var funcall_36 = ((globals[("head")])(funcall_35));
var funcall_37 = (repr_1(funcall_36));
var funcall_38 = ((globals[("++")])(("`"), funcall_37));
(if_53 = funcall_38);
} else {
var funcall_39 = ((globals[("=")])(_gensym_330_28, (Symbol.create("unquote"))));
var if_52 = (null);
if (funcall_39) {
var funcall_40 = ((globals[("tail")])(x_0));
var funcall_41 = ((globals[("head")])(funcall_40));
var funcall_42 = (repr_1(funcall_41));
var funcall_43 = ((globals[("++")])((","), funcall_42));
(if_52 = funcall_43);
} else {
var funcall_44 = ((globals[("=")])(_gensym_330_28, (Symbol.create("unquote-splicing"))));
var if_51 = (null);
if (funcall_44) {
var funcall_45 = ((globals[("tail")])(x_0));
var funcall_46 = ((globals[("head")])(funcall_45));
var funcall_47 = (repr_1(funcall_46));
var funcall_48 = ((globals[("++")])((",#"), funcall_47));
(if_51 = funcall_48);
} else {
var funcall_49 = (repr_tail_2(x_0));
var funcall_50 = ((globals[("++")])(("("), funcall_49));
(if_51 = funcall_50);
}
(if_52 = if_51);
}
(if_53 = if_52);
}
(if_54 = if_53);
}
return if_54;
})(funcall_55));
(if_59 = funcall_56);
} else {
var funcall_57 = (repr_tail_2(x_0));
var funcall_58 = ((globals[("++")])(("("), funcall_57));
(if_59 = funcall_58);
}
(if_68 = if_59);
} else {
var funcall_60 = ((globals[("symbol?")])(x_0));
var if_67 = (null);
if (funcall_60) {
var funcall_61 = ((globals[("symbol->string")])(x_0));
(if_67 = funcall_61);
} else {
var funcall_62 = ((globals[("string?")])(x_0));
var if_66 = (null);
if (funcall_62) {
var funcall_63 = ((globals[("js-escape-string")])(x_0));
(if_66 = funcall_63);
} else {
var if_65 = (null);
if ((true)) {
var funcall_64 = ((globals[("js:toString")])(x_0));
(if_65 = funcall_64);
} else {
(if_65 = (null));
}
(if_66 = if_65);
}
(if_67 = if_66);
}
(if_68 = if_67);
}
(if_69 = if_68);
}
return if_69;
}));
(null);


var funcall_72 = ((globals[("set-macro-type!")])((function (_expr_334_0, _env_335_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_70 = ((globals[("tail")])(_expr_334_0));
var funcall_71 = ((globals[("apply")])((function defstruct_3(form_2) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_67 = ((globals[("head")])(form_2));
var funcall_68 = ((globals[("tail")])(form_2));
var funcall_69 = ((function (name_4, args_5) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_6 = ((globals[("symbol")])(("js:struct-"), name_4, ("-constructor")));
var funcall_7 = ((globals[("cons")])(("function Struct(comps) { this.components = comps; }"), (new Nil())));
var funcall_8 = ((globals[("cons")])((Symbol.create("js:js")), funcall_7));
var funcall_9 = ((globals[("cons")])(funcall_8, (new Nil())));
var funcall_10 = ((globals[("cons")])(funcall_6, funcall_9));
var funcall_11 = ((globals[("cons")])((Symbol.create("def")), funcall_10));
var funcall_12 = ((globals[("cons")])(("function (c, name) {\n              c.prototype.toString = function toString() {\n                return '(' + name + this.components.map(function (c) {\n                                       return ' '+globals.repr(c);\n                                    }).join('') + ')';\n              };\n            }"), (new Nil())));
var funcall_13 = ((globals[("cons")])((Symbol.create("js:js")), funcall_12));
var funcall_14 = ((globals[("symbol")])(("js:struct-"), name_4, ("-constructor")));
var funcall_15 = ((globals[("symbol->string")])(name_4));
var funcall_16 = ((globals[("cons")])(funcall_15, (new Nil())));
var funcall_17 = ((globals[("cons")])(funcall_14, funcall_16));
var funcall_18 = ((globals[("cons")])(funcall_13, funcall_17));
var funcall_19 = ((globals[("cons")])(("function (c) {\n                return function () {\n                  return new c(Array.prototype.slice.call(arguments));\n                };\n              }"), (new Nil())));
var funcall_20 = ((globals[("cons")])((Symbol.create("js:js")), funcall_19));
var funcall_21 = ((globals[("symbol")])(("js:struct-"), name_4, ("-constructor")));
var funcall_22 = ((globals[("cons")])(funcall_21, (new Nil())));
var funcall_23 = ((globals[("cons")])(funcall_20, funcall_22));
var funcall_24 = ((globals[("cons")])(funcall_23, args_5));
var funcall_25 = ((globals[("cons")])(funcall_24, (new Nil())));
var funcall_26 = ((globals[("cons")])(form_2, funcall_25));
var funcall_27 = ((globals[("cons")])((Symbol.create("defun")), funcall_26));
var funcall_28 = ((globals[("symbol")])(name_4, ("?")));
var funcall_29 = ((globals[("cons")])((Symbol.create("o")), (new Nil())));
var funcall_30 = ((globals[("cons")])(funcall_28, funcall_29));
var funcall_31 = ((globals[("symbol")])(("js:struct-"), name_4, ("-constructor")));
var funcall_32 = ((globals[("cons")])(funcall_31, (new Nil())));
var funcall_33 = ((globals[("cons")])((Symbol.create("o")), funcall_32));
var funcall_34 = ((globals[("cons")])(("instanceof"), funcall_33));
var funcall_35 = ((globals[("cons")])((Symbol.create("js:binop")), funcall_34));
var funcall_36 = ((globals[("cons")])(funcall_35, (new Nil())));
var funcall_37 = ((globals[("cons")])(funcall_30, funcall_36));
var funcall_38 = ((globals[("cons")])((Symbol.create("defun")), funcall_37));
var funcall_39 = ((globals[("symbol")])(("destruct-"), name_4));
var funcall_40 = ((globals[("cons")])((Symbol.create("f")), (new Nil())));
var funcall_41 = ((globals[("cons")])((Symbol.create("o")), funcall_40));
var funcall_42 = ((globals[("cons")])(funcall_39, funcall_41));
var funcall_43 = ((globals[("symbol")])(name_4, ("?")));
var funcall_44 = ((globals[("cons")])((Symbol.create("o")), (new Nil())));
var funcall_45 = ((globals[("cons")])(funcall_43, funcall_44));
var funcall_46 = ((globals[("cons")])(("function (o, f) { return f.apply(undefined, o.components); }"), (new Nil())));
var funcall_47 = ((globals[("cons")])((Symbol.create("js:js")), funcall_46));
var funcall_48 = ((globals[("cons")])((Symbol.create("f")), (new Nil())));
var funcall_49 = ((globals[("cons")])((Symbol.create("o")), funcall_48));
var funcall_50 = ((globals[("cons")])(funcall_47, funcall_49));
var funcall_51 = ((globals[("++")])(("Cannot destruct. Not "), name_4, (".")));
var funcall_52 = ((globals[("cons")])(funcall_51, (new Nil())));
var funcall_53 = ((globals[("cons")])((Symbol.create("error")), funcall_52));
var funcall_54 = ((globals[("cons")])(funcall_53, (new Nil())));
var funcall_55 = ((globals[("cons")])(funcall_50, funcall_54));
var funcall_56 = ((globals[("cons")])(funcall_45, funcall_55));
var funcall_57 = ((globals[("cons")])((Symbol.create("if")), funcall_56));
var funcall_58 = ((globals[("cons")])(funcall_57, (new Nil())));
var funcall_59 = ((globals[("cons")])(funcall_42, funcall_58));
var funcall_60 = ((globals[("cons")])((Symbol.create("defun")), funcall_59));
var funcall_61 = ((globals[("cons")])(funcall_60, (new Nil())));
var funcall_62 = ((globals[("cons")])(funcall_38, funcall_61));
var funcall_63 = ((globals[("cons")])(funcall_27, funcall_62));
var funcall_64 = ((globals[("cons")])(funcall_18, funcall_63));
var funcall_65 = ((globals[("cons")])(funcall_11, funcall_64));
var funcall_66 = ((globals[("cons")])((Symbol.create("do")), funcall_65));
return funcall_66;
})(funcall_67, funcall_68));
return funcall_69;
}), funcall_70));
return funcall_71;
}), ("form")));
((globals[("defstruct")]) = funcall_72);
(null);


((globals[("destruct-cons")]) = (function destruct_cons_2(o_0, f_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_3 = ((globals[("head")])(o_0));
var funcall_4 = ((globals[("tail")])(o_0));
var funcall_5 = (f_1(funcall_3, funcall_4));
return funcall_5;
}));
(null);


((globals[("destruct-nil")]) = (function destruct_nil_2(o_0, f_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_3 = (f_1());
return funcall_3;
}));
(null);


var funcall_57 = ((globals[("set-macro-type!")])((function (_expr_344_0, _env_345_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_55 = ((globals[("tail")])(_expr_344_0));
var funcall_56 = ((globals[("apply")])((function destruct_3(v_2) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
;
var bindings_4 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 1; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var handle_just_symbol_5 = (function handle_just_symbol_5(pat_6) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_7 = ((globals[("symbol?")])(pat_6));
var if_10 = (null);
if (funcall_7) {
var funcall_8 = ((globals[("gensym")])());
var funcall_9 = ((globals[("cons")])(pat_6, funcall_8));
(if_10 = funcall_9);
} else {
(if_10 = pat_6);
}
return if_10;
});
var _destruct_11 = (function _destruct_11(vv_12, bindings_4) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_13 = ((globals[("nil?")])(bindings_4));
var if_46 = (null);
if (funcall_13) {
(if_46 = (null));
} else {
var funcall_14 = ((globals[("tail")])(bindings_4));
var funcall_15 = ((globals[("nil?")])(funcall_14));
var if_45 = (null);
if (funcall_15) {
var funcall_16 = ((globals[("head")])(bindings_4));
(if_45 = funcall_16);
} else {
var if_44 = (null);
if ((true)) {
var funcall_37 = ((globals[("head")])(bindings_4));
var funcall_38 = (handle_just_symbol_5(funcall_37));
var funcall_39 = ((globals[("tail")])(bindings_4));
var funcall_40 = ((globals[("head")])(funcall_39));
var funcall_41 = ((globals[("tail")])(bindings_4));
var funcall_42 = ((globals[("tail")])(funcall_41));
var funcall_43 = ((function (pat_6, con_17, nextBindings_18) {
if (arguments.length < 3) {
  throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
  throw new Error("Expecting at most 3 arguments.");
}
;
var funcall_19 = ((globals[("head")])(pat_6));
var funcall_20 = ((globals[("symbol")])(funcall_19, ("?")));
var funcall_21 = ((globals[("cons")])(vv_12, (new Nil())));
var funcall_22 = ((globals[("cons")])(funcall_20, funcall_21));
var funcall_23 = ((globals[("head")])(pat_6));
var funcall_24 = ((globals[("symbol")])(("destruct-"), funcall_23));
var funcall_25 = ((globals[("tail")])(pat_6));
var funcall_26 = ((globals[("cons")])(con_17, (new Nil())));
var funcall_27 = ((globals[("cons")])(funcall_25, funcall_26));
var funcall_28 = ((globals[("cons")])((Symbol.create("fun")), funcall_27));
var funcall_29 = ((globals[("cons")])(funcall_28, (new Nil())));
var funcall_30 = ((globals[("cons")])(vv_12, funcall_29));
var funcall_31 = ((globals[("cons")])(funcall_24, funcall_30));
var funcall_32 = (_destruct_11(vv_12, nextBindings_18));
var funcall_33 = ((globals[("cons")])(funcall_32, (new Nil())));
var funcall_34 = ((globals[("cons")])(funcall_31, funcall_33));
var funcall_35 = ((globals[("cons")])(funcall_22, funcall_34));
var funcall_36 = ((globals[("cons")])((Symbol.create("if")), funcall_35));
return funcall_36;
})(funcall_38, funcall_40, funcall_42));
(if_44 = funcall_43);
} else {
(if_44 = (null));
}
(if_45 = if_44);
}
(if_46 = if_45);
}
return if_46;
});
var funcall_53 = ((globals[("gensym")])());
var funcall_54 = ((function (vv_12) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_47 = ((globals[("cons")])(v_2, (new Nil())));
var funcall_48 = ((globals[("cons")])(vv_12, funcall_47));
var funcall_49 = (_destruct_11(vv_12, bindings_4));
var funcall_50 = ((globals[("cons")])(funcall_49, (new Nil())));
var funcall_51 = ((globals[("cons")])(funcall_48, funcall_50));
var funcall_52 = ((globals[("cons")])((Symbol.create("let")), funcall_51));
return funcall_52;
})(funcall_53));
return funcall_54;
}), funcall_55));
return funcall_56;
}), ("form")));
((globals[("destruct")]) = funcall_57);
(null);


((globals[("eof")]) = (new Cons(Symbol.create("eof"), new Nil())));
(null);


((globals[("eof?")]) = (function eof__1(x_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_2 = ((globals[("=")])(x_0, (globals[("eof")])));
return funcall_2;
}));
(null);


((globals[("js:struct-SourcePos-constructor")]) = (function Struct(comps) { this.components = comps; }));
(null);
var funcall_0 = ((function (c, name) {
              c.prototype.toString = function toString() {
                return '(' + name + this.components.map(function (c) {
                                       return ' '+globals.repr(c);
                                    }).join('') + ')';
              };
            })((globals[("js:struct-SourcePos-constructor")]), ("SourcePos")));
funcall_0;
((globals[("SourcePos")]) = (function SourcePos_4(source_1, line_2, col_3) {
if (arguments.length < 3) {
  throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
  throw new Error("Expecting at most 3 arguments.");
}
;
var funcall_5 = ((function (c) {
                return function () {
                  return new c(Array.prototype.slice.call(arguments));
                };
              })((globals[("js:struct-SourcePos-constructor")])));
var funcall_6 = (funcall_5(source_1, line_2, col_3));
return funcall_6;
}));
(null);
((globals[("SourcePos?")]) = (function SourcePos__8(o_7) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
return (o_7 instanceof (globals[("js:struct-SourcePos-constructor")]));
}));
(null);
((globals[("destruct-SourcePos")]) = (function destruct_SourcePos_10(o_7, f_9) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_11 = ((globals[("SourcePos?")])(o_7));
var if_14 = (null);
if (funcall_11) {
var funcall_12 = ((function (o, f) { return f.apply(undefined, o.components); })(o_7, f_9));
(if_14 = funcall_12);
} else {
var funcall_13 = ((globals[("error")])(("Cannot destruct. Not SourcePos.")));
(if_14 = funcall_13);
}
return if_14;
}));
(null);


((globals[("SourcePos-show")]) = (function SourcePos_show_1(pos_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_13 = ((function (_gensym_354_2) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_3 = ((globals[("SourcePos?")])(_gensym_354_2));
var if_12 = (null);
if (funcall_3) {
var funcall_8 = ((globals[("destruct-SourcePos")])(_gensym_354_2, (function (source_4, line_5, col_6) {
if (arguments.length < 3) {
  throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
  throw new Error("Expecting at most 3 arguments.");
}
;
var funcall_7 = ((globals[("++")])(source_4, (":"), line_5, (":"), col_6));
return funcall_7;
})));
(if_12 = funcall_8);
} else {
var funcall_9 = ((globals[("repr")])(pos_0));
var funcall_10 = ((globals[("++")])(("Not a SourcePos: "), funcall_9));
var funcall_11 = ((globals[("error")])(funcall_10));
(if_12 = funcall_11);
}
return if_12;
})(pos_0));
return funcall_13;
}));
(null);


((globals[("stream:make")]) = (function stream_make_2(source_0, s_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_72 = ((globals[("s:length")])(s_1));
var funcall_73 = ((function (i_3, len_4, line_5, col_6) {
if (arguments.length < 4) {
  throw new Error("Expecting at least 4 arguments.");
}
if (arguments.length > 4) {
  throw new Error("Expecting at most 4 arguments.");
}
;
var advance_7 = (function advance_7(c_8) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_14 = ((function (_gensym_358_9) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_10 = ((globals[("=")])(_gensym_358_9, ("\n")));
var if_13 = (null);
if (funcall_10) {
var funcall_11 = ((globals[("+")])(line_5, (1)));
(line_5 = funcall_11);
(if_13 = (col_6 = (0)));
} else {
var funcall_12 = ((globals[("+")])(col_6, (1)));
(if_13 = (col_6 = funcall_12));
}
return if_13;
})(c_8));
funcall_14;
return c_8;
});
var funcall_71 = ((function (self_15) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
(self_15 = (function (_gensym_359_16) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
;
var _gensym_360_17 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 1; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var funcall_69 = ((function (_gensym_361_18) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_19 = ((globals[("=")])(_gensym_361_18, (Symbol.create("eof?"))));
var if_68 = (null);
if (funcall_19) {
(if_68 = (function () {
if (arguments.length > 0) {
  throw new Error("Expecting at most 0 arguments.");
}
;
var funcall_20 = ((globals[(">=")])(i_3, len_4));
return funcall_20;
}));
} else {
var funcall_21 = ((globals[("=")])(_gensym_361_18, (Symbol.create("peek"))));
var if_67 = (null);
if (funcall_21) {
(if_67 = (function () {
if (arguments.length > 0) {
  throw new Error("Expecting at most 0 arguments.");
}
;
var funcall_22 = ((globals[("<")])(i_3, len_4));
var if_24 = (null);
if (funcall_22) {
var funcall_23 = ((globals[("s:charAt")])(s_1, i_3));
(if_24 = funcall_23);
} else {
(if_24 = (globals[("eof")]));
}
return if_24;
}));
} else {
var funcall_25 = ((globals[("=")])(_gensym_361_18, (Symbol.create("read"))));
var if_66 = (null);
if (funcall_25) {
(if_66 = (function () {
if (arguments.length > 0) {
  throw new Error("Expecting at most 0 arguments.");
}
;
var funcall_26 = ((globals[("<")])(i_3, len_4));
var if_32 = (null);
if (funcall_26) {
var funcall_29 = ((globals[("s:charAt")])(s_1, i_3));
var funcall_30 = (advance_7(funcall_29));
var funcall_31 = ((function (_gensym_362_27) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_28 = ((globals[("+")])(i_3, (1)));
(i_3 = funcall_28);
return _gensym_362_27;
})(funcall_30));
(if_32 = funcall_31);
} else {
(if_32 = (globals[("eof")]));
}
return if_32;
}));
} else {
var funcall_33 = ((globals[("=")])(_gensym_361_18, (Symbol.create("read-until_"))));
var if_65 = (null);
if (funcall_33) {
(if_65 = (function (pred_34) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_41 = (self_15((Symbol.create("peek"))));
var funcall_42 = ((function (c_8) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_38 = ((globals[("eof?")])(c_8));
var funcall_39 = ((function (_gensym_363_35) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var if_37 = (null);
if (_gensym_363_35) {
(if_37 = _gensym_363_35);
} else {
var funcall_36 = (pred_34(c_8));
(if_37 = funcall_36);
}
return if_37;
})(funcall_38));
var funcall_40 = ((globals[("not")])(funcall_39));
return funcall_40;
})(funcall_41));
var while_51 = funcall_42;
while (while_51) {
var funcall_50 = (self_15((Symbol.create("read"))));
funcall_50;
var funcall_48 = (self_15((Symbol.create("peek"))));
var funcall_49 = ((function (c_8) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_45 = ((globals[("eof?")])(c_8));
var funcall_46 = ((function (_gensym_363_35) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var if_44 = (null);
if (_gensym_363_35) {
(if_44 = _gensym_363_35);
} else {
var funcall_43 = (pred_34(c_8));
(if_44 = funcall_43);
}
return if_44;
})(funcall_45));
var funcall_47 = ((globals[("not")])(funcall_46));
return funcall_47;
})(funcall_48));
(while_51 = funcall_49);
}
return (null);
}));
} else {
var funcall_52 = ((globals[("=")])(_gensym_361_18, (Symbol.create("read-until"))));
var if_64 = (null);
if (funcall_52) {
(if_64 = (function (pred_34) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_56 = ((function (start_53) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_54 = (self_15((Symbol.create("read-until_")), pred_34));
funcall_54;
var funcall_55 = ((globals[("s:slice")])(s_1, start_53, i_3));
return funcall_55;
})(i_3));
return funcall_56;
}));
} else {
var funcall_57 = ((globals[("=")])(_gensym_361_18, (Symbol.create("pos"))));
var if_63 = (null);
if (funcall_57) {
(if_63 = (function () {
if (arguments.length > 0) {
  throw new Error("Expecting at most 0 arguments.");
}
;
var funcall_58 = ((globals[("SourcePos")])(source_0, line_5, col_6));
return funcall_58;
}));
} else {
(if_63 = (function () {
;
var __59 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 0; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var funcall_60 = ((globals[("repr")])(_gensym_359_16));
var funcall_61 = ((globals[("++")])(("No such message: "), funcall_60));
var funcall_62 = ((globals[("error")])(funcall_61));
return funcall_62;
}));
}
(if_64 = if_63);
}
(if_65 = if_64);
}
(if_66 = if_65);
}
(if_67 = if_66);
}
(if_68 = if_67);
}
return if_68;
})(_gensym_359_16));
var funcall_70 = ((globals[("apply")])(funcall_69, _gensym_360_17));
return funcall_70;
}));
return self_15;
})((null)));
return funcall_71;
})((0), funcall_72, (1), (0)));
return funcall_73;
}));
(null);


((globals[("stream:error")]) = (function stream_error_2(s_0, msg_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_3 = (s_0((Symbol.create("pos"))));
var funcall_4 = ((globals[("SourcePos-show")])(funcall_3));
var funcall_5 = ((globals[("++")])(funcall_4, (": "), msg_1));
var funcall_6 = ((globals[("error")])(funcall_5));
return funcall_6;
}));
(null);


((globals[("stream:error-expecting")]) = (function stream_error_expecting_2(s_0, expect_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_3 = ((globals[("++")])(("Expecting '"), expect_1, ("'.")));
var funcall_4 = ((globals[("stream:error")])(s_0, funcall_3));
return funcall_4;
}));
(null);


((globals[("stream:maybe-read")]) = (function stream_maybe_read_2(s_0, char_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_6 = (s_0((Symbol.create("peek"))));
var funcall_7 = ((globals[("=")])(char_1, funcall_6));
var funcall_8 = ((function (_gensym_369_3) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var if_5 = (null);
if (_gensym_369_3) {
var funcall_4 = (s_0((Symbol.create("read"))));
funcall_4;
(if_5 = (true));
} else {
(if_5 = _gensym_369_3);
}
return if_5;
})(funcall_7));
return funcall_8;
}));
(null);


((globals[("stream:expect-read")]) = (function stream_expect_read_2(s_0, char_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_6 = ((globals[("stream:maybe-read")])(s_0, char_1));
var funcall_7 = ((function (_gensym_371_3) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var if_5 = (null);
if (_gensym_371_3) {
(if_5 = _gensym_371_3);
} else {
var funcall_4 = ((globals[("stream:error-expecting")])(s_0, char_1));
(if_5 = funcall_4);
}
return if_5;
})(funcall_6));
return funcall_7;
}));
(null);


((globals[("stream:read-until-chars")]) = (function stream_read_until_chars_2(s_0, chars_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_5 = (s_0((Symbol.create("read-until")), (function (c_3) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_4 = ((globals[("s:contains")])(chars_1, c_3));
return funcall_4;
})));
return funcall_5;
}));
(null);


((globals[("stream:read-until-chars_")]) = (function stream_read_until_chars__2(s_0, chars_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_5 = (s_0((Symbol.create("read-until_")), (function (c_3) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_4 = ((globals[("s:contains")])(chars_1, c_3));
return funcall_4;
})));
return funcall_5;
}));
(null);


((globals[("stream:read-while-chars_")]) = (function stream_read_while_chars__2(s_0, chars_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_6 = (s_0((Symbol.create("read-until_")), (function (c_3) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_4 = ((globals[("s:contains")])(chars_1, c_3));
var funcall_5 = ((globals[("not")])(funcall_4));
return funcall_5;
})));
return funcall_6;
}));
(null);


((globals[("reader-whitespace-chars")]) = (" \t\n\r"));
(null);


((globals[("read:eat-spaces")]) = (function read_eat_spaces_1(s_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_2 = ((globals[("stream:read-while-chars_")])(s_0, (globals[("reader-whitespace-chars")])));
funcall_2;
var funcall_3 = (s_0((Symbol.create("peek"))));
var funcall_4 = ((globals[("=")])((";"), funcall_3));
var while_9 = funcall_4;
while (while_9) {
var funcall_7 = ((globals[("stream:read-until-chars_")])(s_0, ("\n")));
funcall_7;
var funcall_8 = ((globals[("stream:read-while-chars_")])(s_0, (globals[("reader-whitespace-chars")])));
funcall_8;
var funcall_5 = (s_0((Symbol.create("peek"))));
var funcall_6 = ((globals[("=")])((";"), funcall_5));
(while_9 = funcall_6);
}
return (null);
}));
(null);


((globals[("reader-non-symbol-chars")]) = (globals[("reader-whitespace-chars")]));
(null);


((globals[("make-reader-table")]) = (function make_reader_table_0() {
if (arguments.length > 0) {
  throw new Error("Expecting at most 0 arguments.");
}
;
var funcall_65 = ((globals[("dict")])());
var funcall_67 = ((function (table_1, defaultHandler_2) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_64 = ((function (self_3) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
(self_3 = (function (_gensym_387_4) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
;
var _gensym_388_5 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 1; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var funcall_62 = ((function (_gensym_389_6) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_7 = ((globals[("=")])(_gensym_389_6, (Symbol.create("read"))));
var if_61 = (null);
if (funcall_7) {
(if_61 = (function (stream_8) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_9 = (self_3((Symbol.create("_read")), stream_8, ("")));
return funcall_9;
}));
} else {
var funcall_10 = ((globals[("=")])(_gensym_389_6, (Symbol.create("_read"))));
var if_60 = (null);
if (funcall_10) {
(if_60 = (function (stream_8, readChars_11) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_22 = (stream_8((Symbol.create("peek"))));
var funcall_23 = ((function (c_12) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_20 = ((globals[("dict:get")])(table_1, c_12, (null)));
var funcall_21 = ((function (st_13) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_14 = ((globals[("null?")])(st_13));
var if_19 = (null);
if (funcall_14) {
var funcall_15 = (defaultHandler_2(stream_8, readChars_11));
(if_19 = funcall_15);
} else {
var funcall_16 = (stream_8((Symbol.create("read"))));
var funcall_17 = ((globals[("++")])(readChars_11, funcall_16));
var funcall_18 = (st_13((Symbol.create("_read")), stream_8, funcall_17));
(if_19 = funcall_18);
}
return if_19;
})(funcall_20));
return funcall_21;
})(funcall_22));
return funcall_23;
}));
} else {
var funcall_24 = ((globals[("=")])(_gensym_389_6, (Symbol.create("set-default-handler!"))));
var if_59 = (null);
if (funcall_24) {
(if_59 = (function (dh_25) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
return (defaultHandler_2 = dh_25);
}));
} else {
var funcall_26 = ((globals[("=")])(_gensym_389_6, (Symbol.create("add-handler!"))));
var if_58 = (null);
if (funcall_26) {
(if_58 = (function (f_27, chars_28) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_29 = ((globals[("s:length")])(chars_28));
var funcall_30 = ((globals[("=")])((0), funcall_29));
var if_43 = (null);
if (funcall_30) {
var funcall_31 = (self_3((Symbol.create("set-default-handler!")), f_27));
(if_43 = funcall_31);
} else {
var if_42 = (null);
if ((true)) {
var funcall_39 = ((globals[("s:charAt")])(chars_28, (0)));
var funcall_40 = ((globals[("dict:get")])(table_1, funcall_39, (null)));
var funcall_41 = ((function (st_13) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_32 = ((globals[("null?")])(st_13));
var if_36 = (null);
if (funcall_32) {
var funcall_33 = (make_reader_table_0());
(st_13 = funcall_33);
var funcall_34 = ((globals[("s:charAt")])(chars_28, (0)));
var funcall_35 = ((globals[("dict:set!")])(table_1, funcall_34, st_13));
(if_36 = funcall_35);
} else {
(if_36 = (null));
}
if_36;
var funcall_37 = ((globals[("s:slice")])(chars_28, (1)));
var funcall_38 = (st_13((Symbol.create("add-handler!")), f_27, funcall_37));
return funcall_38;
})(funcall_40));
(if_42 = funcall_41);
} else {
(if_42 = (null));
}
(if_43 = if_42);
}
return if_43;
}));
} else {
var funcall_44 = ((globals[("=")])(_gensym_389_6, (Symbol.create("get-bound-chars"))));
var if_57 = (null);
if (funcall_44) {
(if_57 = (function () {
if (arguments.length > 0) {
  throw new Error("Expecting at most 0 arguments.");
}
;
var funcall_50 = ((globals[("dict:items")])(table_1));
var funcall_51 = ((globals[("map")])((function (entry_45) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_46 = ((globals[("first")])(entry_45));
var funcall_47 = ((globals[("second")])(entry_45));
var funcall_48 = (funcall_47((Symbol.create("get-bound-chars"))));
var funcall_49 = ((globals[("++")])(funcall_46, funcall_48));
return funcall_49;
}), funcall_50));
var funcall_52 = ((globals[("s:join")])((""), funcall_51));
return funcall_52;
}));
} else {
(if_57 = (function () {
;
var __53 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 0; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var funcall_54 = ((globals[("repr")])(_gensym_387_4));
var funcall_55 = ((globals[("++")])(("No such message: "), funcall_54));
var funcall_56 = ((globals[("error")])(funcall_55));
return funcall_56;
}));
}
(if_58 = if_57);
}
(if_59 = if_58);
}
(if_60 = if_59);
}
(if_61 = if_60);
}
return if_61;
})(_gensym_387_4));
var funcall_63 = ((globals[("apply")])(funcall_62, _gensym_388_5));
return funcall_63;
}));
return self_3;
})((null)));
return funcall_64;
})(funcall_65, (function (stream_8, chars_28) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_66 = ((globals[("stream:error")])(stream_8, ("Unexpected.")));
return funcall_66;
})));
return funcall_67;
}));
(null);


var funcall_0 = ((globals[("make-reader-table")])());
((globals[("global-reader-table")]) = funcall_0);
(null);


((globals[("set-reader-macro!")]) = (function set_reader_macro__2(chars_0, handler_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_3 = ((globals[("global-reader-table")])((Symbol.create("add-handler!")), handler_1, chars_0));
funcall_3;
var funcall_4 = ((globals[("global-reader-table")])((Symbol.create("get-bound-chars"))));
var funcall_5 = ((globals[("++")])(funcall_4, (globals[("reader-whitespace-chars")])));
((globals[("reader-non-symbol-chars")]) = funcall_5);
return (null);
}));
(null);


((globals[("read:sexp-tail")]) = (function read_sexp_tail_3(open_0, close_1, s_2) {
if (arguments.length < 3) {
  throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
  throw new Error("Expecting at most 3 arguments.");
}
;
var funcall_5 = (s_2((Symbol.create("pos"))));
var startpos_4 = funcall_5;
var funcall_6 = ((globals[("read:eat-spaces")])(s_2));
funcall_6;
var funcall_7 = (s_2((Symbol.create("eof?"))));
var if_28 = (null);
if (funcall_7) {
var funcall_8 = ((globals[("SourcePos-show")])(startpos_4));
var funcall_9 = ((globals[("++")])(("Expecting '"), close_1, ("' to match '"), open_0, ("' near "), funcall_8, (".")));
var funcall_10 = ((globals[("stream:error")])(s_2, funcall_9));
(if_28 = funcall_10);
} else {
var funcall_11 = ((globals[("stream:maybe-read")])(s_2, close_1));
var if_27 = (null);
if (funcall_11) {
(if_27 = (new Nil()));
} else {
var if_26 = (null);
if ((true)) {
var funcall_24 = ((globals[("read")])(s_2));
var funcall_25 = ((function (h_12) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_13 = ((globals[("read:eat-spaces")])(s_2));
funcall_13;
var funcall_14 = ((globals[("stream:maybe-read")])(s_2, ("#")));
var if_23 = (null);
if (funcall_14) {
var funcall_18 = ((globals[("read")])(s_2));
var funcall_19 = ((globals[("cons")])(h_12, funcall_18));
var funcall_20 = ((function (_gensym_398_15) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_16 = ((globals[("read:eat-spaces")])(s_2));
funcall_16;
var funcall_17 = ((globals[("stream:expect-read")])(s_2, close_1));
funcall_17;
return _gensym_398_15;
})(funcall_19));
(if_23 = funcall_20);
} else {
var funcall_21 = (read_sexp_tail_3(open_0, close_1, s_2));
var funcall_22 = ((globals[("cons")])(h_12, funcall_21));
(if_23 = funcall_22);
}
return if_23;
})(funcall_24));
(if_26 = funcall_25);
} else {
(if_26 = (null));
}
(if_27 = if_26);
}
(if_28 = if_27);
}
return if_28;
}));
(null);


var funcall_3 = ((globals[("set-reader-macro!")])(("("), (function (stream_0, chars_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_2 = ((globals[("read:sexp-tail")])(("("), (")"), stream_0));
return funcall_2;
})));
funcall_3;


var funcall_3 = ((globals[("set-reader-macro!")])((")"), (function (stream_0, chars_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_2 = ((globals[("stream:error")])(stream_0, ("Unexpected ')'.")));
return funcall_2;
})));
funcall_3;


var funcall_3 = ((globals[("set-reader-macro!")])(("#"), (function (stream_0, chars_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_2 = ((globals[("stream:error")])(stream_0, ("Unexpected '#'.")));
return funcall_2;
})));
funcall_3;


var funcall_15 = ((globals[("set-reader-macro!")])(("["), (function (stream_0, chars_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var consify_2 = (function consify_2(lst_3) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_4 = ((globals[("nil?")])(lst_3));
var if_12 = (null);
if (funcall_4) {
(if_12 = (new Cons(Symbol.create("quote"), new Cons(new Nil(), new Nil()))));
} else {
var funcall_5 = ((globals[("cons?")])(lst_3));
var if_11 = (null);
if (funcall_5) {
var funcall_6 = ((globals[("head")])(lst_3));
var funcall_7 = ((globals[("tail")])(lst_3));
var funcall_8 = (consify_2(funcall_7));
var funcall_9 = ((globals[("list")])((Symbol.create("cons")), funcall_6, funcall_8));
(if_11 = funcall_9);
} else {
var if_10 = (null);
if ((true)) {
(if_10 = lst_3);
} else {
(if_10 = (null));
}
(if_11 = if_10);
}
(if_12 = if_11);
}
return if_12;
});
var funcall_13 = ((globals[("read:sexp-tail")])(("["), ("]"), stream_0));
var funcall_14 = (consify_2(funcall_13));
return funcall_14;
})));
funcall_15;


var funcall_3 = ((globals[("set-reader-macro!")])(("]"), (function (stream_0, chars_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_2 = ((globals[("stream:error")])(stream_0, ("Unexpected ']'.")));
return funcall_2;
})));
funcall_3;


var funcall_4 = ((globals[("set-reader-macro!")])(("{"), (function (stream_0, chars_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_2 = ((globals[("read:sexp-tail")])(("{"), ("}"), stream_0));
var funcall_3 = ((globals[("cons")])((Symbol.create("dict")), funcall_2));
return funcall_3;
})));
funcall_4;


var funcall_3 = ((globals[("set-reader-macro!")])(("}"), (function (stream_0, chars_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_2 = ((globals[("stream:error")])(stream_0, ("Unexpected '}'.")));
return funcall_2;
})));
funcall_3;


((globals[("read:string")]) = (function read_string_2(quot_0, s_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var _read_next_3 = (function _read_next_3() {
if (arguments.length > 0) {
  throw new Error("Expecting at most 0 arguments.");
}
;
var funcall_4 = ((globals[("++")])(("\\"), quot_0));
var funcall_5 = ((globals[("stream:read-until-chars")])(s_1, funcall_4));
return funcall_5;
});
var funcall_42 = ((globals[("make-array")])());
var funcall_43 = ((function (r_6) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_7 = (_read_next_3());
var funcall_8 = ((globals[("a:push!")])(r_6, funcall_7));
funcall_8;
var funcall_9 = (s_1((Symbol.create("peek"))));
var funcall_10 = ((globals[("=")])(quot_0, funcall_9));
var funcall_11 = ((globals[("not")])(funcall_10));
var while_39 = funcall_11;
while (while_39) {
var funcall_15 = (s_1((Symbol.create("eof?"))));
var if_17 = (null);
if (funcall_15) {
var funcall_16 = ((globals[("stream:error-expecting")])(s_1, quot_0));
(if_17 = funcall_16);
} else {
(if_17 = (null));
}
if_17;
var funcall_18 = (s_1((Symbol.create("read"))));
funcall_18;
var funcall_36 = (s_1((Symbol.create("peek"))));
var funcall_37 = ((function (_gensym_405_24) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_25 = ((globals[("=")])(_gensym_405_24, ("\\")));
var if_35 = (null);
if (funcall_25) {
(if_35 = ("\\"));
} else {
var funcall_26 = ((globals[("=")])(_gensym_405_24, quot_0));
var if_34 = (null);
if (funcall_26) {
(if_34 = quot_0);
} else {
var funcall_27 = ((globals[("=")])(_gensym_405_24, ("n")));
var if_33 = (null);
if (funcall_27) {
(if_33 = ("\n"));
} else {
var funcall_28 = ((globals[("=")])(_gensym_405_24, ("t")));
var if_32 = (null);
if (funcall_28) {
(if_32 = ("\t"));
} else {
var funcall_29 = ((globals[("=")])(_gensym_405_24, ("r")));
var if_31 = (null);
if (funcall_29) {
(if_31 = ("\r"));
} else {
var funcall_30 = ((globals[("stream:error")])(s_1, ("Unknown escape code.")));
(if_31 = funcall_30);
}
(if_32 = if_31);
}
(if_33 = if_32);
}
(if_34 = if_33);
}
(if_35 = if_34);
}
return if_35;
})(funcall_36));
var funcall_38 = ((function (esc_19) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_20 = (s_1((Symbol.create("read"))));
funcall_20;
var funcall_21 = ((globals[("a:push!")])(r_6, esc_19));
funcall_21;
var funcall_22 = (_read_next_3());
var funcall_23 = ((globals[("a:push!")])(r_6, funcall_22));
return funcall_23;
})(funcall_37));
funcall_38;
var funcall_12 = (s_1((Symbol.create("peek"))));
var funcall_13 = ((globals[("=")])(quot_0, funcall_12));
var funcall_14 = ((globals[("not")])(funcall_13));
(while_39 = funcall_14);
}
var funcall_40 = (s_1((Symbol.create("read"))));
funcall_40;
var funcall_41 = ((globals[("a:join")])(r_6, ("")));
return funcall_41;
})(funcall_42));
return funcall_43;
}));
(null);


var funcall_3 = ((globals[("set-reader-macro!")])(("\""), (function (stream_0, chars_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_2 = ((globals[("read:string")])(("\""), stream_0));
return funcall_2;
})));
funcall_3;


var funcall_4 = ((globals[("set-reader-macro!")])(("|"), (function (stream_0, chars_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_2 = ((globals[("read:string")])(("|"), stream_0));
var funcall_3 = ((globals[("symbol")])(funcall_2));
return funcall_3;
})));
funcall_4;


((globals[("read:token")]) = (function read_token_1(s_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_2 = ((globals[("stream:read-until-chars")])(s_0, (globals[("reader-non-symbol-chars")])));
return funcall_2;
}));
(null);


var funcall_18 = ((globals[("set-reader-macro!")])((""), (function (stream_0, chars_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_16 = ((globals[("read:token")])(stream_0));
var funcall_17 = ((function (t_2) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_3 = ((globals[("=")])((""), t_2));
var if_15 = (null);
if (funcall_3) {
var funcall_4 = ((globals[("stream:error")])(stream_0, ("Expecting symbol or number.")));
(if_15 = funcall_4);
} else {
var funcall_13 = ((globals[("js:toNum")])(t_2));
var funcall_14 = ((function (val_5) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_9 = ((globals[("NaN?")])(val_5));
var funcall_10 = ((function (_gensym_408_6) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var if_8 = (null);
if (_gensym_408_6) {
var funcall_7 = ((globals[("!=")])(("NaN"), t_2));
(if_8 = funcall_7);
} else {
(if_8 = _gensym_408_6);
}
return if_8;
})(funcall_9));
var if_12 = (null);
if (funcall_10) {
var funcall_11 = ((globals[("symbol")])(t_2));
(if_12 = funcall_11);
} else {
(if_12 = val_5);
}
return if_12;
})(funcall_13));
(if_15 = funcall_14);
}
return if_15;
})(funcall_16));
return funcall_17;
})));
funcall_18;


var funcall_15 = ((globals[("set-reader-macro!")])(("@"), (function (stream_0, chars_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_13 = ((globals[("read:token")])(stream_0));
var funcall_14 = ((function (t_2) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_12 = ((function (_gensym_409_3) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_4 = ((globals[("=")])(_gensym_409_3, ("true")));
var if_11 = (null);
if (funcall_4) {
(if_11 = (true));
} else {
var funcall_5 = ((globals[("=")])(_gensym_409_3, ("false")));
var if_10 = (null);
if (funcall_5) {
(if_10 = (false));
} else {
var funcall_6 = ((globals[("=")])(_gensym_409_3, ("null")));
var if_9 = (null);
if (funcall_6) {
(if_9 = (null));
} else {
var funcall_7 = ((globals[("++")])(("Unexpected literal "), t_2));
var funcall_8 = ((globals[("stream:error")])(stream_0, funcall_7));
(if_9 = funcall_8);
}
(if_10 = if_9);
}
(if_11 = if_10);
}
return if_11;
})(t_2));
return funcall_12;
})(funcall_13));
return funcall_14;
})));
funcall_15;


var funcall_4 = ((globals[("set-reader-macro!")])(("'"), (function (stream_0, chars_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_2 = ((globals[("read")])(stream_0));
var funcall_3 = ((globals[("list")])((Symbol.create("quote")), funcall_2));
return funcall_3;
})));
funcall_4;


var funcall_4 = ((globals[("set-reader-macro!")])(("`"), (function (stream_0, chars_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_2 = ((globals[("read")])(stream_0));
var funcall_3 = ((globals[("list")])((Symbol.create("quasiquote")), funcall_2));
return funcall_3;
})));
funcall_4;


var funcall_4 = ((globals[("set-reader-macro!")])((","), (function (stream_0, chars_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_2 = ((globals[("read")])(stream_0));
var funcall_3 = ((globals[("list")])((Symbol.create("unquote")), funcall_2));
return funcall_3;
})));
funcall_4;


var funcall_4 = ((globals[("set-reader-macro!")])((",#"), (function (stream_0, chars_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_2 = ((globals[("read")])(stream_0));
var funcall_3 = ((globals[("list")])((Symbol.create("unquote-splicing")), funcall_2));
return funcall_3;
})));
funcall_4;


((globals[("read")]) = (function read_1(s_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_2 = ((globals[("read:eat-spaces")])(s_0));
funcall_2;
var funcall_3 = (s_0((Symbol.create("eof?"))));
var if_7 = (null);
if (funcall_3) {
var funcall_4 = ((globals[("stream:error")])(s_0, ("Unexpected end of input.")));
(if_7 = funcall_4);
} else {
var if_6 = (null);
if ((true)) {
var funcall_5 = ((globals[("global-reader-table")])((Symbol.create("read")), s_0));
(if_6 = funcall_5);
} else {
(if_6 = (null));
}
(if_7 = if_6);
}
return if_7;
}));
(null);


((globals[("read:has-another?")]) = (function read_has_another__1(s_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_2 = ((globals[("read:eat-spaces")])(s_0));
funcall_2;
var funcall_3 = (s_0((Symbol.create("eof?"))));
var funcall_4 = ((globals[("not")])(funcall_3));
return funcall_4;
}));
(null);


((globals[("make-global-env")]) = (function make_global_env_1(parent_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_48 = ((function (d) {
                      function Subenv() {}
                      Subenv.prototype = d;
                      return new Subenv();
                    })(parent_0));
var funcall_49 = ((function (globals2_2) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_46 = ((function (globals) {
                       return function () {
                         return eval(arguments[0]);
                       };
                    })(globals2_2));
var funcall_47 = ((function (closure_3, all_code_4) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_45 = ((function (self_5) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
(self_5 = (function (_gensym_416_6) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
;
var _gensym_417_7 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 1; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var funcall_43 = ((function (_gensym_418_8) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_9 = ((globals[("=")])(_gensym_418_8, (Symbol.create("eval_"))));
var if_42 = (null);
if (funcall_9) {
(if_42 = (function (code_10) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_11 = (closure_3(code_10));
return funcall_11;
}));
} else {
var funcall_12 = ((globals[("=")])(_gensym_418_8, (Symbol.create("eval"))));
var if_41 = (null);
if (funcall_12) {
(if_41 = (function (code_10) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_13 = ((globals[("cons")])(code_10, all_code_4));
(all_code_4 = funcall_13);
var funcall_14 = (self_5((Symbol.create("eval_")), code_10));
return funcall_14;
}));
} else {
var funcall_15 = ((globals[("=")])(_gensym_418_8, (Symbol.create("code"))));
var if_40 = (null);
if (funcall_15) {
(if_40 = (function () {
if (arguments.length > 0) {
  throw new Error("Expecting at most 0 arguments.");
}
;
var funcall_16 = ((globals[("reversed")])(all_code_4));
var funcall_17 = ((globals[("s:join")])(("\n\n"), funcall_16));
return funcall_17;
}));
} else {
var funcall_18 = ((globals[("=")])(_gensym_418_8, (Symbol.create("lookup"))));
var if_39 = (null);
if (funcall_18) {
(if_39 = (function (k_19) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_25 = (closure_3(("globals")));
var funcall_26 = ((function (v_20) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_21 = ((globals[("=")])((undefined), v_20));
var if_24 = (null);
if (funcall_21) {
var funcall_22 = ((globals[("++")])(("No such global "), k_19));
var funcall_23 = ((globals[("error")])(funcall_22));
(if_24 = funcall_23);
} else {
(if_24 = v_20);
}
return if_24;
})((funcall_25[k_19])));
return funcall_26;
}));
} else {
var funcall_27 = ((globals[("=")])(_gensym_418_8, (Symbol.create("has?"))));
var if_38 = (null);
if (funcall_27) {
(if_38 = (function (k_19) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_28 = (closure_3(("globals")));
var funcall_29 = ((globals[("!=")])((undefined), (funcall_28[k_19])));
return funcall_29;
}));
} else {
var funcall_30 = ((globals[("=")])(_gensym_418_8, (Symbol.create("set!"))));
var if_37 = (null);
if (funcall_30) {
(if_37 = (function (k_19, v_20) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_31 = (closure_3(("globals")));
var funcall_32 = ((globals[("dict:set!")])(funcall_31, k_19, v_20));
return funcall_32;
}));
} else {
(if_37 = (function () {
;
var __33 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 0; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var funcall_34 = ((globals[("repr")])(_gensym_416_6));
var funcall_35 = ((globals[("++")])(("No such message: "), funcall_34));
var funcall_36 = ((globals[("error")])(funcall_35));
return funcall_36;
}));
}
(if_38 = if_37);
}
(if_39 = if_38);
}
(if_40 = if_39);
}
(if_41 = if_40);
}
(if_42 = if_41);
}
return if_42;
})(_gensym_416_6));
var funcall_44 = ((globals[("apply")])(funcall_43, _gensym_417_7));
return funcall_44;
}));
return self_5;
})((null)));
return funcall_45;
})(funcall_46, (new Nil())));
return funcall_47;
})(funcall_48));
return funcall_49;
}));
(null);


var funcall_0 = ((globals[("make-global-env")])((globals[("globals")])));
((globals[("global-env")]) = funcall_0);
(null);


((globals[("make-subenv")]) = (function make_subenv_1(parent_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_36 = ((globals[("dict")])());
var funcall_37 = ((function (bindings_2) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_35 = ((function (self_3) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
(self_3 = (function (_gensym_422_4) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
;
var _gensym_423_5 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 1; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var funcall_33 = ((function (_gensym_424_6) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_7 = ((globals[("=")])(_gensym_424_6, (Symbol.create("eval_"))));
var if_32 = (null);
if (funcall_7) {
(if_32 = (function (code_8) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_9 = (parent_0((Symbol.create("eval_")), code_8));
return funcall_9;
}));
} else {
var funcall_10 = ((globals[("=")])(_gensym_424_6, (Symbol.create("lookup"))));
var if_31 = (null);
if (funcall_10) {
(if_31 = (function (k_11) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_12 = ((globals[("dict:has?")])(bindings_2, k_11));
var if_15 = (null);
if (funcall_12) {
var funcall_13 = ((globals[("dict:get")])(bindings_2, k_11));
(if_15 = funcall_13);
} else {
var funcall_14 = (parent_0((Symbol.create("lookup")), k_11));
(if_15 = funcall_14);
}
return if_15;
}));
} else {
var funcall_16 = ((globals[("=")])(_gensym_424_6, (Symbol.create("has?"))));
var if_30 = (null);
if (funcall_16) {
(if_30 = (function (k_11) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_20 = ((globals[("dict:has?")])(bindings_2, k_11));
var funcall_21 = ((function (_gensym_425_17) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var if_19 = (null);
if (_gensym_425_17) {
(if_19 = _gensym_425_17);
} else {
var funcall_18 = (parent_0((Symbol.create("has?")), k_11));
(if_19 = funcall_18);
}
return if_19;
})(funcall_20));
return funcall_21;
}));
} else {
var funcall_22 = ((globals[("=")])(_gensym_424_6, (Symbol.create("set!"))));
var if_29 = (null);
if (funcall_22) {
(if_29 = (function (k_11, v_23) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_24 = ((globals[("dict:set!")])(bindings_2, k_11, v_23));
return funcall_24;
}));
} else {
(if_29 = (function () {
;
var __25 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 0; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var funcall_26 = ((globals[("repr")])(_gensym_422_4));
var funcall_27 = ((globals[("++")])(("No such message: "), funcall_26));
var funcall_28 = ((globals[("error")])(funcall_27));
return funcall_28;
}));
}
(if_30 = if_29);
}
(if_31 = if_30);
}
(if_32 = if_31);
}
return if_32;
})(_gensym_422_4));
var funcall_34 = ((globals[("apply")])(funcall_33, _gensym_423_5));
return funcall_34;
}));
return self_3;
})((null)));
return funcall_35;
})(funcall_36));
return funcall_37;
}));
(null);


((globals[("macro?")]) = (function macro__1(x_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_5 = ((globals[("function?")])(x_0));
var funcall_6 = ((function (_gensym_426_2) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var if_4 = (null);
if (_gensym_426_2) {
var funcall_3 = ((globals[("=")])((x_0[("macro")]), (true)));
(if_4 = funcall_3);
} else {
(if_4 = _gensym_426_2);
}
return if_4;
})(funcall_5));
return funcall_6;
}));
(null);


((globals[("macro-type")]) = (function macro_type_1(x_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
return (x_0[("macro-type")]);
}));
(null);


((globals[("form-macro?")]) = (function form_macro__1(x_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_6 = ((globals[("macro?")])(x_0));
var funcall_7 = ((function (_gensym_427_2) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var if_5 = (null);
if (_gensym_427_2) {
var funcall_3 = ((globals[("macro-type")])(x_0));
var funcall_4 = ((globals[("=")])(("form"), funcall_3));
(if_5 = funcall_4);
} else {
(if_5 = _gensym_427_2);
}
return if_5;
})(funcall_6));
return funcall_7;
}));
(null);


((globals[("symbol-macro?")]) = (function symbol_macro__1(x_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_6 = ((globals[("macro?")])(x_0));
var funcall_7 = ((function (_gensym_428_2) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var if_5 = (null);
if (_gensym_428_2) {
var funcall_3 = ((globals[("macro-type")])(x_0));
var funcall_4 = ((globals[("=")])(("symbol"), funcall_3));
(if_5 = funcall_4);
} else {
(if_5 = _gensym_428_2);
}
return if_5;
})(funcall_6));
return funcall_7;
}));
(null);


((globals[("call-macro")]) = (function call_macro_3(f_0, s_1, env_2) {
if (arguments.length < 3) {
  throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
  throw new Error("Expecting at most 3 arguments.");
}
;
var funcall_4 = ((globals[("prop")])(f_0, ("macro-type")));
var if_7 = (null);
if (funcall_4) {
var funcall_5 = (f_0(s_1, env_2));
(if_7 = funcall_5);
} else {
var funcall_6 = (f_0(s_1));
(if_7 = funcall_6);
}
return if_7;
}));
(null);


((globals[("inner-add-macro!")]) = (function inner_add_macro__2(name_0, f_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_3 = ((globals[("global-env")])((Symbol.create("set!")), name_0, f_1));
funcall_3;
var funcall_4 = ((globals[("set-prop!")])(f_1, ("macro"), (true)));
funcall_4;
var funcall_5 = ((globals[("set-prop!")])(f_1, ("macro-type"), ("form")));
funcall_5;
return (null);
}));
(null);


((globals[("inner-add-symbol-macro!")]) = (function inner_add_symbol_macro__2(name_0, f_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_3 = ((globals[("global-env")])((Symbol.create("set!")), name_0, f_1));
funcall_3;
var funcall_4 = ((globals[("set-prop!")])(f_1, ("macro"), (true)));
funcall_4;
var funcall_5 = ((globals[("set-prop!")])(f_1, ("macro-type"), ("symbol")));
funcall_5;
return (null);
}));
(null);


var funcall_16 = ((globals[("set-macro-type!")])((function (_expr_433_0, _env_434_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_14 = ((globals[("tail")])(_expr_433_0));
var funcall_15 = ((globals[("apply")])((function defmac_inner_3(v_2) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
;
var body_4 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 1; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var funcall_5 = ((globals[("head")])(v_2));
var funcall_6 = ((globals[("cons")])(funcall_5, (new Nil())));
var funcall_7 = ((globals[("cons")])((Symbol.create("quote")), funcall_6));
var funcall_8 = ((globals[("tail")])(v_2));
var funcall_9 = ((globals[("cons")])(funcall_8, body_4));
var funcall_10 = ((globals[("cons")])((Symbol.create("fun")), funcall_9));
var funcall_11 = ((globals[("cons")])(funcall_10, (new Nil())));
var funcall_12 = ((globals[("cons")])(funcall_7, funcall_11));
var funcall_13 = ((globals[("cons")])((Symbol.create("inner-add-macro!")), funcall_12));
return funcall_13;
}), funcall_14));
return funcall_15;
}), ("form")));
((globals[("defmac-inner")]) = funcall_16);
(null);


((globals[("js:struct-NoExpand-constructor")]) = (function Struct(comps) { this.components = comps; }));
(null);
var funcall_0 = ((function (c, name) {
              c.prototype.toString = function toString() {
                return '(' + name + this.components.map(function (c) {
                                       return ' '+globals.repr(c);
                                    }).join('') + ')';
              };
            })((globals[("js:struct-NoExpand-constructor")]), ("NoExpand")));
funcall_0;
((globals[("NoExpand")]) = (function NoExpand_2(expr_1) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_3 = ((function (c) {
                return function () {
                  return new c(Array.prototype.slice.call(arguments));
                };
              })((globals[("js:struct-NoExpand-constructor")])));
var funcall_4 = (funcall_3(expr_1));
return funcall_4;
}));
(null);
((globals[("NoExpand?")]) = (function NoExpand__6(o_5) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
return (o_5 instanceof (globals[("js:struct-NoExpand-constructor")]));
}));
(null);
((globals[("destruct-NoExpand")]) = (function destruct_NoExpand_8(o_5, f_7) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_9 = ((globals[("NoExpand?")])(o_5));
var if_12 = (null);
if (funcall_9) {
var funcall_10 = ((function (o, f) { return f.apply(undefined, o.components); })(o_5, f_7));
(if_12 = funcall_10);
} else {
var funcall_11 = ((globals[("error")])(("Cannot destruct. Not NoExpand.")));
(if_12 = funcall_11);
}
return if_12;
}));
(null);


((globals[("self-evaluating?")]) = (function self_evaluating__1(s_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_17 = ((globals[("number?")])(s_0));
var funcall_18 = ((function (_gensym_440_2) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var if_16 = (null);
if (_gensym_440_2) {
(if_16 = _gensym_440_2);
} else {
var funcall_14 = ((globals[("boolean?")])(s_0));
var funcall_15 = ((function (_gensym_441_3) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var if_13 = (null);
if (_gensym_441_3) {
(if_13 = _gensym_441_3);
} else {
var funcall_11 = ((globals[("null?")])(s_0));
var funcall_12 = ((function (_gensym_442_4) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var if_10 = (null);
if (_gensym_442_4) {
(if_10 = _gensym_442_4);
} else {
var funcall_8 = ((globals[("string?")])(s_0));
var funcall_9 = ((function (_gensym_443_5) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var if_7 = (null);
if (_gensym_443_5) {
(if_7 = _gensym_443_5);
} else {
var funcall_6 = ((globals[("keyword?")])(s_0));
(if_7 = funcall_6);
}
return if_7;
})(funcall_8));
(if_10 = funcall_9);
}
return if_10;
})(funcall_11));
(if_13 = funcall_12);
}
return if_13;
})(funcall_14));
(if_16 = funcall_15);
}
return if_16;
})(funcall_17));
return funcall_18;
}));
(null);


((globals[("macro-expand-1")]) = (function macro_expand_1_1(s_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_9 = ((globals[("macro-expand-step")])(s_0, (globals[("global-env")])));
var funcall_10 = ((function (exp_2) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_8 = ((function (_gensym_447_3) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_4 = ((globals[("NoExpand?")])(_gensym_447_3));
var if_7 = (null);
if (funcall_4) {
var funcall_6 = ((globals[("destruct-NoExpand")])(_gensym_447_3, (function (expr_5) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
return expr_5;
})));
(if_7 = funcall_6);
} else {
(if_7 = exp_2);
}
return if_7;
})(exp_2));
return funcall_8;
})(funcall_9));
return funcall_10;
}));
(null);


((globals[("macro-expand")]) = (function macro_expand_2(s_0, env_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_11 = ((globals[("macro-expand-step")])(s_0, env_1));
var funcall_12 = ((function (exp_3) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_10 = ((function (_gensym_448_4) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_5 = ((globals[("NoExpand?")])(_gensym_448_4));
var if_9 = (null);
if (funcall_5) {
var funcall_7 = ((globals[("destruct-NoExpand")])(_gensym_448_4, (function (expr_6) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
return expr_6;
})));
(if_9 = funcall_7);
} else {
var funcall_8 = (macro_expand_2(exp_3, env_1));
(if_9 = funcall_8);
}
return if_9;
})(exp_3));
return funcall_10;
})(funcall_11));
return funcall_12;
}));
(null);


((globals[("macro-expand-step")]) = (function macro_expand_step_2(s_0, env_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_3 = ((globals[("self-evaluating?")])(s_0));
var if_14 = (null);
if (funcall_3) {
var funcall_4 = ((globals[("NoExpand")])(s_0));
(if_14 = funcall_4);
} else {
var funcall_5 = ((globals[("symbol?")])(s_0));
var if_13 = (null);
if (funcall_5) {
var funcall_6 = ((globals[("macro-expand-symbol")])(s_0, env_1));
(if_13 = funcall_6);
} else {
var funcall_7 = ((globals[("cons?")])(s_0));
var if_12 = (null);
if (funcall_7) {
var funcall_8 = ((globals[("macro-expand-form")])(s_0, env_1));
(if_12 = funcall_8);
} else {
var funcall_9 = ((globals[("repr")])(s_0));
var funcall_10 = ((globals[("++")])(("Unknown expression to macro expand "), funcall_9));
var funcall_11 = ((globals[("error")])(funcall_10));
(if_12 = funcall_11);
}
(if_13 = if_12);
}
(if_14 = if_13);
}
return if_14;
}));
(null);


((globals[("macro-expand-symbol")]) = (function macro_expand_symbol_2(s_0, env_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_7 = (env_1((Symbol.create("has?")), s_0));
var funcall_8 = ((function (_gensym_451_3) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var if_6 = (null);
if (_gensym_451_3) {
var funcall_4 = (env_1((Symbol.create("lookup")), s_0));
var funcall_5 = ((globals[("symbol-macro?")])(funcall_4));
(if_6 = funcall_5);
} else {
(if_6 = _gensym_451_3);
}
return if_6;
})(funcall_7));
var if_13 = (null);
if (funcall_8) {
var funcall_9 = (env_1((Symbol.create("lookup")), s_0));
var funcall_10 = (funcall_9(s_0, env_1));
(if_13 = funcall_10);
} else {
var if_12 = (null);
if ((true)) {
var funcall_11 = ((globals[("NoExpand")])(s_0));
(if_12 = funcall_11);
} else {
(if_12 = (null));
}
(if_13 = if_12);
}
return if_13;
}));
(null);


((globals[("macro-expand-form")]) = (function macro_expand_form_2(s_0, env_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_8 = ((globals[("head")])(s_0));
var funcall_9 = (env_1((Symbol.create("has?")), funcall_8));
var funcall_10 = ((function (_gensym_453_3) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var if_7 = (null);
if (_gensym_453_3) {
var funcall_4 = ((globals[("head")])(s_0));
var funcall_5 = (env_1((Symbol.create("lookup")), funcall_4));
var funcall_6 = ((globals[("form-macro?")])(funcall_5));
(if_7 = funcall_6);
} else {
(if_7 = _gensym_453_3);
}
return if_7;
})(funcall_9));
var if_19 = (null);
if (funcall_10) {
var funcall_11 = ((globals[("head")])(s_0));
var funcall_12 = (env_1((Symbol.create("lookup")), funcall_11));
var funcall_13 = ((globals[("call-macro")])(funcall_12, s_0, env_1));
(if_19 = funcall_13);
} else {
var if_18 = (null);
if ((true)) {
var funcall_16 = ((globals[("map")])((function (e_14) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_15 = ((globals[("macro-expand")])(e_14, env_1));
return funcall_15;
}), s_0));
var funcall_17 = ((globals[("NoExpand")])(funcall_16));
(if_18 = funcall_17);
} else {
(if_18 = (null));
}
(if_19 = if_18);
}
return if_19;
}));
(null);


var funcall_3 = ((globals[("inner-add-macro!")])((Symbol.create("quote")), (function (s_0, env_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_2 = ((globals[("NoExpand")])(s_0));
return funcall_2;
})));
funcall_3;


var funcall_4 = ((globals[("inner-add-macro!")])((Symbol.create("quasiquote")), (function (s_0, env_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_2 = ((globals[("nth")])(s_0, (1)));
var funcall_3 = ((globals[("quasiquote-expand")])(funcall_2, (0)));
return funcall_3;
})));
funcall_4;


var funcall_4 = ((globals[("inner-add-macro!")])((Symbol.create("unquote")), (function (s_0, env_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_2 = ((globals[("nth")])(s_0, (1)));
var funcall_3 = ((globals[("eval-in-env")])(funcall_2, env_1));
return funcall_3;
})));
funcall_4;


((globals[("quasi-append")]) = (function quasi_append_0() {
;
var things_1 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 0; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var is_empty__2 = (function is_empty__2(s_3) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_27 = ((globals[("cons?")])(s_3));
var funcall_28 = ((function (_gensym_463_17) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var if_26 = (null);
if (_gensym_463_17) {
var funcall_23 = ((globals[("head")])(s_3));
var funcall_24 = ((globals[("=")])((Symbol.create("quote")), funcall_23));
var funcall_25 = ((function (_gensym_464_18) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var if_22 = (null);
if (_gensym_464_18) {
var funcall_19 = ((globals[("tail")])(s_3));
var funcall_20 = ((globals[("head")])(funcall_19));
var funcall_21 = ((globals[("nil?")])(funcall_20));
(if_22 = funcall_21);
} else {
(if_22 = _gensym_464_18);
}
return if_22;
})(funcall_24));
(if_26 = funcall_25);
} else {
(if_26 = _gensym_463_17);
}
return if_26;
})(funcall_27));
var funcall_29 = ((function (_gensym_460_4) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var if_16 = (null);
if (_gensym_460_4) {
(if_16 = _gensym_460_4);
} else {
var funcall_14 = ((globals[("cons?")])(s_3));
var funcall_15 = ((function (_gensym_461_5) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var if_13 = (null);
if (_gensym_461_5) {
var funcall_10 = ((globals[("head")])(s_3));
var funcall_11 = ((globals[("=")])((Symbol.create("list")), funcall_10));
var funcall_12 = ((function (_gensym_462_6) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var if_9 = (null);
if (_gensym_462_6) {
var funcall_7 = ((globals[("tail")])(s_3));
var funcall_8 = ((globals[("nil?")])(funcall_7));
(if_9 = funcall_8);
} else {
(if_9 = _gensym_462_6);
}
return if_9;
})(funcall_11));
(if_13 = funcall_12);
} else {
(if_13 = _gensym_461_5);
}
return if_13;
})(funcall_14));
(if_16 = funcall_15);
}
return if_16;
})(funcall_28));
return funcall_29;
});
var funcall_30 = ((globals[("nil?")])(things_1));
var if_91 = (null);
if (funcall_30) {
(if_91 = (new Cons(Symbol.create("quote"), new Cons(new Nil(), new Nil()))));
} else {
var funcall_31 = ((globals[("length")])(things_1));
var funcall_32 = ((globals[("=")])((1), funcall_31));
var if_90 = (null);
if (funcall_32) {
var funcall_33 = ((globals[("head")])(things_1));
(if_90 = funcall_33);
} else {
var funcall_34 = ((globals[("head")])(things_1));
var funcall_35 = (is_empty__2(funcall_34));
var if_89 = (null);
if (funcall_35) {
var funcall_36 = ((globals[("tail")])(things_1));
var funcall_37 = ((globals[("apply")])(quasi_append_0, funcall_36));
(if_89 = funcall_37);
} else {
var funcall_38 = ((globals[("nth")])(things_1, (1)));
var funcall_39 = (is_empty__2(funcall_38));
var if_88 = (null);
if (funcall_39) {
var funcall_40 = ((globals[("head")])(things_1));
var funcall_41 = ((globals[("tail")])(things_1));
var funcall_42 = ((globals[("tail")])(funcall_41));
var funcall_43 = ((globals[("cons")])(funcall_40, funcall_42));
var funcall_44 = ((globals[("apply")])(quasi_append_0, funcall_43));
(if_88 = funcall_44);
} else {
var funcall_50 = ((globals[("head")])(things_1));
var funcall_51 = ((globals[("cons?")])(funcall_50));
var funcall_52 = ((function (_gensym_465_45) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var if_49 = (null);
if (_gensym_465_45) {
var funcall_46 = ((globals[("head")])(things_1));
var funcall_47 = ((globals[("head")])(funcall_46));
var funcall_48 = ((globals[("=")])((Symbol.create("cons")), funcall_47));
(if_49 = funcall_48);
} else {
(if_49 = _gensym_465_45);
}
return if_49;
})(funcall_51));
var if_87 = (null);
if (funcall_52) {
var funcall_53 = ((globals[("head")])(things_1));
var funcall_54 = ((globals[("nth")])(funcall_53, (1)));
var funcall_55 = ((globals[("head")])(things_1));
var funcall_56 = ((globals[("nth")])(funcall_55, (2)));
var funcall_57 = ((globals[("tail")])(things_1));
var funcall_58 = ((globals[("cons")])(funcall_56, funcall_57));
var funcall_59 = ((globals[("apply")])(quasi_append_0, funcall_58));
var funcall_60 = ((globals[("quasi-cons")])(funcall_54, funcall_59));
(if_87 = funcall_60);
} else {
var funcall_66 = ((globals[("head")])(things_1));
var funcall_67 = ((globals[("cons?")])(funcall_66));
var funcall_68 = ((function (_gensym_466_61) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var if_65 = (null);
if (_gensym_466_61) {
var funcall_62 = ((globals[("head")])(things_1));
var funcall_63 = ((globals[("head")])(funcall_62));
var funcall_64 = ((globals[("=")])((Symbol.create("list")), funcall_63));
(if_65 = funcall_64);
} else {
(if_65 = _gensym_466_61);
}
return if_65;
})(funcall_67));
var if_86 = (null);
if (funcall_68) {
var funcall_69 = ((globals[("head")])(things_1));
var funcall_70 = ((globals[("nth")])(funcall_69, (1)));
var funcall_71 = ((globals[("head")])(things_1));
var funcall_72 = ((globals[("tail")])(funcall_71));
var funcall_73 = ((globals[("tail")])(funcall_72));
var funcall_74 = ((globals[("cons")])((Symbol.create("list")), funcall_73));
var funcall_75 = ((globals[("tail")])(things_1));
var funcall_76 = ((globals[("cons")])(funcall_74, funcall_75));
var funcall_77 = ((globals[("apply")])(quasi_append_0, funcall_76));
var funcall_78 = ((globals[("quasi-cons")])(funcall_70, funcall_77));
(if_86 = funcall_78);
} else {
var if_85 = (null);
if ((true)) {
var funcall_79 = ((globals[("head")])(things_1));
var funcall_80 = ((globals[("tail")])(things_1));
var funcall_81 = ((globals[("apply")])(quasi_append_0, funcall_80));
var funcall_82 = ((globals[("cons")])(funcall_81, (new Nil())));
var funcall_83 = ((globals[("cons")])(funcall_79, funcall_82));
var funcall_84 = ((globals[("cons")])((Symbol.create("append2")), funcall_83));
(if_85 = funcall_84);
} else {
(if_85 = (null));
}
(if_86 = if_85);
}
(if_87 = if_86);
}
(if_88 = if_87);
}
(if_89 = if_88);
}
(if_90 = if_89);
}
(if_91 = if_90);
}
return if_91;
}));
(null);


((globals[("quasi-cons")]) = (function quasi_cons_2(x_0, xs_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_7 = ((globals[("cons?")])(xs_1));
var funcall_8 = ((function (_gensym_467_3) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var if_6 = (null);
if (_gensym_467_3) {
var funcall_4 = ((globals[("head")])(xs_1));
var funcall_5 = ((globals[("=")])((Symbol.create("list")), funcall_4));
(if_6 = funcall_5);
} else {
(if_6 = _gensym_467_3);
}
return if_6;
})(funcall_7));
var if_15 = (null);
if (funcall_8) {
var funcall_9 = ((globals[("tail")])(xs_1));
var funcall_10 = ((globals[("cons")])(x_0, funcall_9));
var funcall_11 = ((globals[("cons")])((Symbol.create("list")), funcall_10));
(if_15 = funcall_11);
} else {
var funcall_12 = ((globals[("cons")])(xs_1, (new Nil())));
var funcall_13 = ((globals[("cons")])(x_0, funcall_12));
var funcall_14 = ((globals[("cons")])((Symbol.create("cons")), funcall_13));
(if_15 = funcall_14);
}
return if_15;
}));
(null);


((globals[("quasi-list")]) = (function quasi_list_0() {
;
var things_1 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 0; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var funcall_2 = ((globals[("cons")])((Symbol.create("list")), things_1));
return funcall_2;
}));
(null);


((globals[("quasiquote-expand")]) = (function quasiquote_expand_2(s_0, depth_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_3 = ((globals[("cons?")])(s_0));
var if_67 = (null);
if (funcall_3) {
var funcall_62 = ((globals[("head")])(s_0));
var funcall_63 = ((function (_gensym_471_4) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_5 = ((globals[("=")])(_gensym_471_4, (Symbol.create("quasiquote"))));
var if_61 = (null);
if (funcall_5) {
var funcall_6 = ((globals[("tail")])(s_0));
var funcall_7 = ((globals[("+")])(depth_1, (1)));
var funcall_8 = (quasiquote_expand_2(funcall_6, funcall_7));
var funcall_9 = ((globals[("quasi-cons")])((new Cons(Symbol.create("quote"), new Cons(Symbol.create("quasiquote"), new Nil()))), funcall_8));
(if_61 = funcall_9);
} else {
var funcall_10 = ((globals[("=")])(_gensym_471_4, (Symbol.create("unquote"))));
var if_60 = (null);
if (funcall_10) {
var funcall_11 = ((globals[(">")])(depth_1, (0)));
var if_30 = (null);
if (funcall_11) {
var funcall_12 = ((globals[("tail")])(s_0));
var funcall_13 = ((globals[("-")])(depth_1, (1)));
var funcall_14 = (quasiquote_expand_2(funcall_12, funcall_13));
var funcall_15 = ((globals[("quasi-cons")])((new Cons(Symbol.create("quote"), new Cons(Symbol.create("unquote"), new Nil()))), funcall_14));
(if_30 = funcall_15);
} else {
var funcall_21 = ((globals[("tail")])(s_0));
var funcall_22 = ((globals[("nil?")])(funcall_21));
var funcall_23 = ((globals[("not")])(funcall_22));
var funcall_24 = ((function (_gensym_472_16) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var if_20 = (null);
if (_gensym_472_16) {
var funcall_17 = ((globals[("tail")])(s_0));
var funcall_18 = ((globals[("tail")])(funcall_17));
var funcall_19 = ((globals[("nil?")])(funcall_18));
(if_20 = funcall_19);
} else {
(if_20 = _gensym_472_16);
}
return if_20;
})(funcall_23));
var if_29 = (null);
if (funcall_24) {
var funcall_25 = ((globals[("nth")])(s_0, (1)));
(if_29 = funcall_25);
} else {
var if_28 = (null);
if ((true)) {
var funcall_26 = ((globals[("cons")])(s_0, (new Nil())));
var funcall_27 = ((globals[("cons")])((Symbol.create("quote")), funcall_26));
(if_28 = funcall_27);
} else {
(if_28 = (null));
}
(if_29 = if_28);
}
(if_30 = if_29);
}
(if_60 = if_30);
} else {
var funcall_31 = ((globals[("=")])(_gensym_471_4, (Symbol.create("unquote-splicing"))));
var if_59 = (null);
if (funcall_31) {
var funcall_32 = ((globals[(">")])(depth_1, (0)));
var if_40 = (null);
if (funcall_32) {
var funcall_33 = ((globals[("tail")])(s_0));
var funcall_34 = ((globals[("-")])(depth_1, (1)));
var funcall_35 = (quasiquote_expand_2(funcall_33, funcall_34));
var funcall_36 = ((globals[("quasi-cons")])((new Cons(Symbol.create("quote"), new Cons(Symbol.create("unquote-splicing"), new Nil()))), funcall_35));
(if_40 = funcall_36);
} else {
var if_39 = (null);
if ((true)) {
var funcall_37 = ((globals[("cons")])(s_0, (new Nil())));
var funcall_38 = ((globals[("cons")])((Symbol.create("quote")), funcall_37));
(if_39 = funcall_38);
} else {
(if_39 = (null));
}
(if_40 = if_39);
}
(if_59 = if_40);
} else {
var funcall_46 = ((globals[("tail")])(s_0));
var funcall_47 = ((globals[("cons?")])(funcall_46));
var funcall_48 = ((function (_gensym_473_41) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var if_45 = (null);
if (_gensym_473_41) {
var funcall_42 = ((globals[("tail")])(s_0));
var funcall_43 = ((globals[("head")])(funcall_42));
var funcall_44 = ((globals[("=")])((Symbol.create("unquote")), funcall_43));
(if_45 = funcall_44);
} else {
(if_45 = _gensym_473_41);
}
return if_45;
})(funcall_47));
var if_58 = (null);
if (funcall_48) {
var funcall_49 = ((globals[("head")])(s_0));
var funcall_50 = ((globals[("tail")])(s_0));
var funcall_51 = ((globals[("nth")])(funcall_50, (1)));
var funcall_52 = ((globals[("quasiquote-expand-list")])(funcall_49, depth_1, funcall_51));
(if_58 = funcall_52);
} else {
var funcall_53 = ((globals[("head")])(s_0));
var funcall_54 = ((globals[("quasiquote-expand-list")])(funcall_53, depth_1, (new Cons(Symbol.create("quote"), new Cons(new Nil(), new Nil())))));
var funcall_55 = ((globals[("tail")])(s_0));
var funcall_56 = (quasiquote_expand_2(funcall_55, depth_1));
var funcall_57 = ((globals[("quasi-append")])(funcall_54, funcall_56));
(if_58 = funcall_57);
}
(if_59 = if_58);
}
(if_60 = if_59);
}
(if_61 = if_60);
}
return if_61;
})(funcall_62));
(if_67 = funcall_63);
} else {
var if_66 = (null);
if ((true)) {
var funcall_64 = ((globals[("cons")])(s_0, (new Nil())));
var funcall_65 = ((globals[("cons")])((Symbol.create("quote")), funcall_64));
(if_66 = funcall_65);
} else {
(if_66 = (null));
}
(if_67 = if_66);
}
return if_67;
}));
(null);


((globals[("quasiquote-expand-list")]) = (function quasiquote_expand_list_3(s_0, depth_1, end_2) {
if (arguments.length < 3) {
  throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
  throw new Error("Expecting at most 3 arguments.");
}
;
var funcall_4 = ((globals[("cons?")])(s_0));
var if_68 = (null);
if (funcall_4) {
var funcall_60 = ((globals[("head")])(s_0));
var funcall_61 = ((function (_gensym_474_5) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_6 = ((globals[("=")])(_gensym_474_5, (Symbol.create("quasiquote"))));
var if_59 = (null);
if (funcall_6) {
var funcall_7 = ((globals[("tail")])(s_0));
var funcall_8 = ((globals[("+")])(depth_1, (1)));
var funcall_9 = ((globals[("quasiquote-expand")])(funcall_7, funcall_8));
var funcall_10 = ((globals[("quasi-cons")])((new Cons(Symbol.create("quote"), new Cons(Symbol.create("quasiquote"), new Nil()))), funcall_9));
var funcall_11 = ((globals[("quasi-cons")])(funcall_10, end_2));
(if_59 = funcall_11);
} else {
var funcall_12 = ((globals[("=")])(_gensym_474_5, (Symbol.create("unquote"))));
var if_58 = (null);
if (funcall_12) {
var funcall_13 = ((globals[(">")])(depth_1, (0)));
var if_22 = (null);
if (funcall_13) {
var funcall_14 = ((globals[("tail")])(s_0));
var funcall_15 = ((globals[("-")])(depth_1, (1)));
var funcall_16 = ((globals[("quasiquote-expand")])(funcall_14, funcall_15));
var funcall_17 = ((globals[("quasi-cons")])((new Cons(Symbol.create("quote"), new Cons(Symbol.create("unquote"), new Nil()))), funcall_16));
var funcall_18 = ((globals[("quasi-cons")])(funcall_17, end_2));
(if_22 = funcall_18);
} else {
var if_21 = (null);
if ((true)) {
var funcall_19 = ((globals[("nth")])(s_0, (1)));
var funcall_20 = ((globals[("quasi-cons")])(funcall_19, end_2));
(if_21 = funcall_20);
} else {
(if_21 = (null));
}
(if_22 = if_21);
}
(if_58 = if_22);
} else {
var funcall_23 = ((globals[("=")])(_gensym_474_5, (Symbol.create("unquote-splicing"))));
var if_57 = (null);
if (funcall_23) {
var funcall_24 = ((globals[(">")])(depth_1, (0)));
var if_50 = (null);
if (funcall_24) {
var funcall_25 = ((globals[("tail")])(s_0));
var funcall_26 = ((globals[("-")])(depth_1, (1)));
var funcall_27 = ((globals[("quasiquote-expand")])(funcall_25, funcall_26));
var funcall_28 = ((globals[("quasi-cons")])((new Cons(Symbol.create("quote"), new Cons(Symbol.create("unquote-splicing"), new Nil()))), funcall_27));
var funcall_29 = ((globals[("quasi-cons")])(funcall_28, end_2));
(if_50 = funcall_29);
} else {
var if_49 = (null);
if ((true)) {
var funcall_39 = ((globals[("cons?")])(end_2));
var funcall_40 = ((function (_gensym_475_30) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var if_38 = (null);
if (_gensym_475_30) {
var funcall_35 = ((globals[("head")])(end_2));
var funcall_36 = ((globals[("=")])((Symbol.create("quote")), funcall_35));
var funcall_37 = ((function (_gensym_476_31) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var if_34 = (null);
if (_gensym_476_31) {
var funcall_32 = ((globals[("nth")])(end_2, (1)));
var funcall_33 = ((globals[("nil?")])(funcall_32));
(if_34 = funcall_33);
} else {
(if_34 = _gensym_476_31);
}
return if_34;
})(funcall_36));
(if_38 = funcall_37);
} else {
(if_38 = _gensym_475_30);
}
return if_38;
})(funcall_39));
var if_48 = (null);
if (funcall_40) {
var funcall_41 = ((globals[("tail")])(s_0));
var funcall_42 = ((globals[("apply")])((globals[("quasi-append")]), funcall_41));
(if_48 = funcall_42);
} else {
var funcall_43 = ((globals[("tail")])(s_0));
var funcall_44 = ((globals[("apply")])((globals[("quasi-append")]), funcall_43));
var funcall_45 = ((globals[("cons")])(end_2, (new Nil())));
var funcall_46 = ((globals[("cons")])(funcall_44, funcall_45));
var funcall_47 = ((globals[("cons")])((Symbol.create("as-improper")), funcall_46));
(if_48 = funcall_47);
}
(if_49 = if_48);
} else {
(if_49 = (null));
}
(if_50 = if_49);
}
(if_57 = if_50);
} else {
var funcall_51 = ((globals[("head")])(s_0));
var funcall_52 = (quasiquote_expand_list_3(funcall_51, depth_1, (new Cons(Symbol.create("quote"), new Cons(new Nil(), new Nil())))));
var funcall_53 = ((globals[("tail")])(s_0));
var funcall_54 = ((globals[("quasiquote-expand")])(funcall_53, depth_1));
var funcall_55 = ((globals[("quasi-append")])(funcall_52, funcall_54));
var funcall_56 = ((globals[("quasi-cons")])(funcall_55, end_2));
(if_57 = funcall_56);
}
(if_58 = if_57);
}
(if_59 = if_58);
}
return if_59;
})(funcall_60));
(if_68 = funcall_61);
} else {
var if_67 = (null);
if ((true)) {
var funcall_62 = ((globals[("cons")])(s_0, (new Nil())));
var funcall_63 = ((globals[("cons")])((Symbol.create("quote")), funcall_62));
var funcall_64 = ((globals[("cons")])(end_2, (new Nil())));
var funcall_65 = ((globals[("cons")])(funcall_63, funcall_64));
var funcall_66 = ((globals[("cons")])((Symbol.create("cons")), funcall_65));
(if_67 = funcall_66);
} else {
(if_67 = (null));
}
(if_68 = if_67);
}
return if_68;
}));
(null);


var funcall_7 = ((globals[("inner-add-macro!")])((Symbol.create("js:def")), (function (s_0, env_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_2 = ((globals[("nth")])(s_0, (1)));
var funcall_3 = ((globals[("nth")])(s_0, (2)));
var funcall_4 = ((globals[("macro-expand")])(funcall_3, env_1));
var funcall_5 = ((globals[("list")])((Symbol.create("js:def")), funcall_2, funcall_4));
var funcall_6 = ((globals[("NoExpand")])(funcall_5));
return funcall_6;
})));
funcall_7;


var funcall_10 = ((globals[("inner-add-macro!")])((Symbol.create("js:if")), (function (s_0, env_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_2 = ((globals[("nth")])(s_0, (1)));
var funcall_3 = ((globals[("macro-expand")])(funcall_2, env_1));
var funcall_4 = ((globals[("nth")])(s_0, (2)));
var funcall_5 = ((globals[("macro-expand")])(funcall_4, env_1));
var funcall_6 = ((globals[("nth")])(s_0, (3)));
var funcall_7 = ((globals[("macro-expand")])(funcall_6, env_1));
var funcall_8 = ((globals[("list")])((Symbol.create("js:if")), funcall_3, funcall_5, funcall_7));
var funcall_9 = ((globals[("NoExpand")])(funcall_8));
return funcall_9;
})));
funcall_10;


var funcall_8 = ((globals[("inner-add-macro!")])((Symbol.create("js:while")), (function (s_0, env_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_2 = ((globals[("nth")])(s_0, (1)));
var funcall_3 = ((globals[("macro-expand")])(funcall_2, env_1));
var funcall_4 = ((globals[("nth")])(s_0, (2)));
var funcall_5 = ((globals[("macro-expand")])(funcall_4, env_1));
var funcall_6 = ((globals[("list")])((Symbol.create("js:while")), funcall_3, funcall_5));
var funcall_7 = ((globals[("NoExpand")])(funcall_6));
return funcall_7;
})));
funcall_8;


var funcall_6 = ((globals[("inner-add-macro!")])((Symbol.create("js:return")), (function (s_0, env_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_2 = ((globals[("nth")])(s_0, (1)));
var funcall_3 = ((globals[("macro-expand")])(funcall_2, env_1));
var funcall_4 = ((globals[("list")])((Symbol.create("js:return")), funcall_3));
var funcall_5 = ((globals[("NoExpand")])(funcall_4));
return funcall_5;
})));
funcall_6;


var funcall_3 = ((globals[("inner-add-macro!")])((Symbol.create("js:break")), (function (s_0, env_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_2 = ((globals[("NoExpand")])(s_0));
return funcall_2;
})));
funcall_3;


var funcall_3 = ((globals[("inner-add-macro!")])((Symbol.create("js:continue")), (function (s_0, env_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_2 = ((globals[("NoExpand")])(s_0));
return funcall_2;
})));
funcall_3;


var funcall_8 = ((globals[("inner-add-macro!")])((Symbol.create("js:seq")), (function (s_0, env_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_4 = ((globals[("nth")])(s_0, (1)));
var funcall_5 = ((globals[("map")])((function (e_2) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_3 = ((globals[("macro-expand")])(e_2, env_1));
return funcall_3;
}), funcall_4));
var funcall_6 = ((globals[("list")])((Symbol.create("js:seq")), funcall_5));
var funcall_7 = ((globals[("NoExpand")])(funcall_6));
return funcall_7;
})));
funcall_8;


var funcall_3 = ((globals[("inner-add-macro!")])((Symbol.create("js:js")), (function (s_0, env_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_2 = ((globals[("NoExpand")])(s_0));
return funcall_2;
})));
funcall_3;


var funcall_3 = ((globals[("inner-add-macro!")])((Symbol.create("js:code")), (function (s_0, env_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_2 = ((globals[("NoExpand")])(s_0));
return funcall_2;
})));
funcall_3;


var funcall_9 = ((globals[("inner-add-macro!")])((Symbol.create("js:binop")), (function (s_0, env_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_2 = ((globals[("nth")])(s_0, (1)));
var funcall_3 = ((globals[("nth")])(s_0, (2)));
var funcall_4 = ((globals[("macro-expand")])(funcall_3, env_1));
var funcall_5 = ((globals[("nth")])(s_0, (3)));
var funcall_6 = ((globals[("macro-expand")])(funcall_5, env_1));
var funcall_7 = ((globals[("list")])((Symbol.create("js:binop")), funcall_2, funcall_4, funcall_6));
var funcall_8 = ((globals[("NoExpand")])(funcall_7));
return funcall_8;
})));
funcall_9;


var funcall_7 = ((globals[("inner-add-macro!")])((Symbol.create("js:unop")), (function (s_0, env_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_2 = ((globals[("nth")])(s_0, (1)));
var funcall_3 = ((globals[("nth")])(s_0, (2)));
var funcall_4 = ((globals[("macro-expand")])(funcall_3, env_1));
var funcall_5 = ((globals[("list")])((Symbol.create("js:unop")), funcall_2, funcall_4));
var funcall_6 = ((globals[("NoExpand")])(funcall_5));
return funcall_6;
})));
funcall_7;


var funcall_8 = ((globals[("inner-add-macro!")])((Symbol.create("js:prop")), (function (s_0, env_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_2 = ((globals[("nth")])(s_0, (1)));
var funcall_3 = ((globals[("macro-expand")])(funcall_2, env_1));
var funcall_4 = ((globals[("nth")])(s_0, (2)));
var funcall_5 = ((globals[("macro-expand")])(funcall_4, env_1));
var funcall_6 = ((globals[("list")])((Symbol.create("js:prop")), funcall_3, funcall_5));
var funcall_7 = ((globals[("NoExpand")])(funcall_6));
return funcall_7;
})));
funcall_8;


var funcall_19 = ((globals[("inner-add-macro!")])((Symbol.create("js:try")), (function (s_0, env_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_2 = ((globals[("nth")])(s_0, (1)));
var funcall_3 = ((globals[("macro-expand")])(funcall_2, env_1));
var funcall_4 = ((globals[("nth")])(s_0, (2)));
var funcall_10 = ((globals[("make-subenv")])(env_1));
var funcall_11 = ((function (env2_5) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_6 = ((globals[("nth")])(s_0, (2)));
var funcall_7 = (env2_5((Symbol.create("set!")), funcall_6, (null)));
funcall_7;
var funcall_8 = ((globals[("nth")])(s_0, (3)));
var funcall_9 = ((globals[("macro-expand")])(funcall_8, env2_5));
return funcall_9;
})(funcall_10));
var funcall_12 = ((globals[("nth")])(s_0, (4)));
var funcall_13 = ((globals[("null?")])(funcall_12));
var if_16 = (null);
if (funcall_13) {
(if_16 = (null));
} else {
var funcall_14 = ((globals[("nth")])(s_0, (4)));
var funcall_15 = ((globals[("macro-expand")])(funcall_14, env_1));
(if_16 = funcall_15);
}
var funcall_17 = ((globals[("list")])((Symbol.create("js:try")), funcall_3, funcall_4, funcall_11, if_16));
var funcall_18 = ((globals[("NoExpand")])(funcall_17));
return funcall_18;
})));
funcall_19;


var funcall_6 = ((globals[("inner-add-macro!")])((Symbol.create("js:throw")), (function (s_0, env_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_2 = ((globals[("nth")])(s_0, (1)));
var funcall_3 = ((globals[("macro-expand")])(funcall_2, env_1));
var funcall_4 = ((globals[("list")])((Symbol.create("js:throw")), funcall_3));
var funcall_5 = ((globals[("NoExpand")])(funcall_4));
return funcall_5;
})));
funcall_6;


var funcall_22 = ((globals[("inner-add-macro!")])((Symbol.create("js:function")), (function (s_0, env_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_2 = ((globals[("nth")])(s_0, (1)));
var funcall_3 = ((globals[("cons?")])(funcall_2));
var if_21 = (null);
if (funcall_3) {
var funcall_4 = ((globals[("nth")])(s_0, (1)));
var funcall_5 = ((globals[("nth")])(s_0, (2)));
var funcall_6 = ((globals[("list")])((Symbol.create("js:function")), (null), funcall_4, funcall_5));
(if_21 = funcall_6);
} else {
var if_20 = (null);
if ((true)) {
var funcall_18 = ((globals[("make-subenv")])(env_1));
var funcall_19 = ((function (env2_7) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_10 = ((globals[("nth")])(s_0, (2)));
var funcall_11 = ((globals[("each")])((function (k_8) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_9 = (env2_7((Symbol.create("set!")), k_8, (null)));
return funcall_9;
}), funcall_10));
funcall_11;
var funcall_12 = ((globals[("nth")])(s_0, (1)));
var funcall_13 = ((globals[("nth")])(s_0, (2)));
var funcall_14 = ((globals[("nth")])(s_0, (3)));
var funcall_15 = ((globals[("macro-expand")])(funcall_14, env2_7));
var funcall_16 = ((globals[("list")])((Symbol.create("js:function")), funcall_12, funcall_13, funcall_15));
var funcall_17 = ((globals[("NoExpand")])(funcall_16));
return funcall_17;
})(funcall_18));
(if_20 = funcall_19);
} else {
(if_20 = (null));
}
(if_21 = if_20);
}
return if_21;
})));
funcall_22;


((globals[("js:struct-midir:js-constructor")]) = (function Struct(comps) { this.components = comps; }));
(null);
var funcall_0 = ((function (c, name) {
              c.prototype.toString = function toString() {
                return '(' + name + this.components.map(function (c) {
                                       return ' '+globals.repr(c);
                                    }).join('') + ')';
              };
            })((globals[("js:struct-midir:js-constructor")]), ("midir:js")));
funcall_0;
((globals[("midir:js")]) = (function midir_js_2(code_1) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_3 = ((function (c) {
                return function () {
                  return new c(Array.prototype.slice.call(arguments));
                };
              })((globals[("js:struct-midir:js-constructor")])));
var funcall_4 = (funcall_3(code_1));
return funcall_4;
}));
(null);
((globals[("midir:js?")]) = (function midir_js__6(o_5) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
return (o_5 instanceof (globals[("js:struct-midir:js-constructor")]));
}));
(null);
((globals[("destruct-midir:js")]) = (function destruct_midir_js_8(o_5, f_7) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_9 = ((globals[("midir:js?")])(o_5));
var if_12 = (null);
if (funcall_9) {
var funcall_10 = ((function (o, f) { return f.apply(undefined, o.components); })(o_5, f_7));
(if_12 = funcall_10);
} else {
var funcall_11 = ((globals[("error")])(("Cannot destruct. Not midir:js.")));
(if_12 = funcall_11);
}
return if_12;
}));
(null);


((globals[("js:struct-midir:binop-constructor")]) = (function Struct(comps) { this.components = comps; }));
(null);
var funcall_0 = ((function (c, name) {
              c.prototype.toString = function toString() {
                return '(' + name + this.components.map(function (c) {
                                       return ' '+globals.repr(c);
                                    }).join('') + ')';
              };
            })((globals[("js:struct-midir:binop-constructor")]), ("midir:binop")));
funcall_0;
((globals[("midir:binop")]) = (function midir_binop_4(op_1, expl_2, expr_3) {
if (arguments.length < 3) {
  throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
  throw new Error("Expecting at most 3 arguments.");
}
;
var funcall_5 = ((function (c) {
                return function () {
                  return new c(Array.prototype.slice.call(arguments));
                };
              })((globals[("js:struct-midir:binop-constructor")])));
var funcall_6 = (funcall_5(op_1, expl_2, expr_3));
return funcall_6;
}));
(null);
((globals[("midir:binop?")]) = (function midir_binop__8(o_7) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
return (o_7 instanceof (globals[("js:struct-midir:binop-constructor")]));
}));
(null);
((globals[("destruct-midir:binop")]) = (function destruct_midir_binop_10(o_7, f_9) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_11 = ((globals[("midir:binop?")])(o_7));
var if_14 = (null);
if (funcall_11) {
var funcall_12 = ((function (o, f) { return f.apply(undefined, o.components); })(o_7, f_9));
(if_14 = funcall_12);
} else {
var funcall_13 = ((globals[("error")])(("Cannot destruct. Not midir:binop.")));
(if_14 = funcall_13);
}
return if_14;
}));
(null);


((globals[("js:struct-midir:unop-constructor")]) = (function Struct(comps) { this.components = comps; }));
(null);
var funcall_0 = ((function (c, name) {
              c.prototype.toString = function toString() {
                return '(' + name + this.components.map(function (c) {
                                       return ' '+globals.repr(c);
                                    }).join('') + ')';
              };
            })((globals[("js:struct-midir:unop-constructor")]), ("midir:unop")));
funcall_0;
((globals[("midir:unop")]) = (function midir_unop_3(op_1, exp_2) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_4 = ((function (c) {
                return function () {
                  return new c(Array.prototype.slice.call(arguments));
                };
              })((globals[("js:struct-midir:unop-constructor")])));
var funcall_5 = (funcall_4(op_1, exp_2));
return funcall_5;
}));
(null);
((globals[("midir:unop?")]) = (function midir_unop__7(o_6) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
return (o_6 instanceof (globals[("js:struct-midir:unop-constructor")]));
}));
(null);
((globals[("destruct-midir:unop")]) = (function destruct_midir_unop_9(o_6, f_8) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_10 = ((globals[("midir:unop?")])(o_6));
var if_13 = (null);
if (funcall_10) {
var funcall_11 = ((function (o, f) { return f.apply(undefined, o.components); })(o_6, f_8));
(if_13 = funcall_11);
} else {
var funcall_12 = ((globals[("error")])(("Cannot destruct. Not midir:unop.")));
(if_13 = funcall_12);
}
return if_13;
}));
(null);


((globals[("js:struct-midir:prop-constructor")]) = (function Struct(comps) { this.components = comps; }));
(null);
var funcall_0 = ((function (c, name) {
              c.prototype.toString = function toString() {
                return '(' + name + this.components.map(function (c) {
                                       return ' '+globals.repr(c);
                                    }).join('') + ')';
              };
            })((globals[("js:struct-midir:prop-constructor")]), ("midir:prop")));
funcall_0;
((globals[("midir:prop")]) = (function midir_prop_3(exp_1, prop_2) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_4 = ((function (c) {
                return function () {
                  return new c(Array.prototype.slice.call(arguments));
                };
              })((globals[("js:struct-midir:prop-constructor")])));
var funcall_5 = (funcall_4(exp_1, prop_2));
return funcall_5;
}));
(null);
((globals[("midir:prop?")]) = (function midir_prop__7(o_6) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
return (o_6 instanceof (globals[("js:struct-midir:prop-constructor")]));
}));
(null);
((globals[("destruct-midir:prop")]) = (function destruct_midir_prop_9(o_6, f_8) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_10 = ((globals[("midir:prop?")])(o_6));
var if_13 = (null);
if (funcall_10) {
var funcall_11 = ((function (o, f) { return f.apply(undefined, o.components); })(o_6, f_8));
(if_13 = funcall_11);
} else {
var funcall_12 = ((globals[("error")])(("Cannot destruct. Not midir:prop.")));
(if_13 = funcall_12);
}
return if_13;
}));
(null);


((globals[("js:struct-midir:lit-constructor")]) = (function Struct(comps) { this.components = comps; }));
(null);
var funcall_0 = ((function (c, name) {
              c.prototype.toString = function toString() {
                return '(' + name + this.components.map(function (c) {
                                       return ' '+globals.repr(c);
                                    }).join('') + ')';
              };
            })((globals[("js:struct-midir:lit-constructor")]), ("midir:lit")));
funcall_0;
((globals[("midir:lit")]) = (function midir_lit_2(s_1) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_3 = ((function (c) {
                return function () {
                  return new c(Array.prototype.slice.call(arguments));
                };
              })((globals[("js:struct-midir:lit-constructor")])));
var funcall_4 = (funcall_3(s_1));
return funcall_4;
}));
(null);
((globals[("midir:lit?")]) = (function midir_lit__6(o_5) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
return (o_5 instanceof (globals[("js:struct-midir:lit-constructor")]));
}));
(null);
((globals[("destruct-midir:lit")]) = (function destruct_midir_lit_8(o_5, f_7) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_9 = ((globals[("midir:lit?")])(o_5));
var if_12 = (null);
if (funcall_9) {
var funcall_10 = ((function (o, f) { return f.apply(undefined, o.components); })(o_5, f_7));
(if_12 = funcall_10);
} else {
var funcall_11 = ((globals[("error")])(("Cannot destruct. Not midir:lit.")));
(if_12 = funcall_11);
}
return if_12;
}));
(null);


((globals[("js:struct-midir:lookup-constructor")]) = (function Struct(comps) { this.components = comps; }));
(null);
var funcall_0 = ((function (c, name) {
              c.prototype.toString = function toString() {
                return '(' + name + this.components.map(function (c) {
                                       return ' '+globals.repr(c);
                                    }).join('') + ')';
              };
            })((globals[("js:struct-midir:lookup-constructor")]), ("midir:lookup")));
funcall_0;
((globals[("midir:lookup")]) = (function midir_lookup_2(s_1) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_3 = ((function (c) {
                return function () {
                  return new c(Array.prototype.slice.call(arguments));
                };
              })((globals[("js:struct-midir:lookup-constructor")])));
var funcall_4 = (funcall_3(s_1));
return funcall_4;
}));
(null);
((globals[("midir:lookup?")]) = (function midir_lookup__6(o_5) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
return (o_5 instanceof (globals[("js:struct-midir:lookup-constructor")]));
}));
(null);
((globals[("destruct-midir:lookup")]) = (function destruct_midir_lookup_8(o_5, f_7) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_9 = ((globals[("midir:lookup?")])(o_5));
var if_12 = (null);
if (funcall_9) {
var funcall_10 = ((function (o, f) { return f.apply(undefined, o.components); })(o_5, f_7));
(if_12 = funcall_10);
} else {
var funcall_11 = ((globals[("error")])(("Cannot destruct. Not midir:lookup.")));
(if_12 = funcall_11);
}
return if_12;
}));
(null);


((globals[("js:struct-midir:funcall-constructor")]) = (function Struct(comps) { this.components = comps; }));
(null);
var funcall_0 = ((function (c, name) {
              c.prototype.toString = function toString() {
                return '(' + name + this.components.map(function (c) {
                                       return ' '+globals.repr(c);
                                    }).join('') + ')';
              };
            })((globals[("js:struct-midir:funcall-constructor")]), ("midir:funcall")));
funcall_0;
((globals[("midir:funcall")]) = (function midir_funcall_3(f_1, args_2) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_4 = ((function (c) {
                return function () {
                  return new c(Array.prototype.slice.call(arguments));
                };
              })((globals[("js:struct-midir:funcall-constructor")])));
var funcall_5 = (funcall_4(f_1, args_2));
return funcall_5;
}));
(null);
((globals[("midir:funcall?")]) = (function midir_funcall__7(o_6) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
return (o_6 instanceof (globals[("js:struct-midir:funcall-constructor")]));
}));
(null);
((globals[("destruct-midir:funcall")]) = (function destruct_midir_funcall_8(o_6, f_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_9 = ((globals[("midir:funcall?")])(o_6));
var if_12 = (null);
if (funcall_9) {
var funcall_10 = ((function (o, f) { return f.apply(undefined, o.components); })(o_6, f_1));
(if_12 = funcall_10);
} else {
var funcall_11 = ((globals[("error")])(("Cannot destruct. Not midir:funcall.")));
(if_12 = funcall_11);
}
return if_12;
}));
(null);


((globals[("js:struct-midir:function-constructor")]) = (function Struct(comps) { this.components = comps; }));
(null);
var funcall_0 = ((function (c, name) {
              c.prototype.toString = function toString() {
                return '(' + name + this.components.map(function (c) {
                                       return ' '+globals.repr(c);
                                    }).join('') + ')';
              };
            })((globals[("js:struct-midir:function-constructor")]), ("midir:function")));
funcall_0;
((globals[("midir:function")]) = (function midir_function_4(mname_1, args_2, body_3) {
if (arguments.length < 3) {
  throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
  throw new Error("Expecting at most 3 arguments.");
}
;
var funcall_5 = ((function (c) {
                return function () {
                  return new c(Array.prototype.slice.call(arguments));
                };
              })((globals[("js:struct-midir:function-constructor")])));
var funcall_6 = (funcall_5(mname_1, args_2, body_3));
return funcall_6;
}));
(null);
((globals[("midir:function?")]) = (function midir_function__8(o_7) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
return (o_7 instanceof (globals[("js:struct-midir:function-constructor")]));
}));
(null);
((globals[("destruct-midir:function")]) = (function destruct_midir_function_10(o_7, f_9) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_11 = ((globals[("midir:function?")])(o_7));
var if_14 = (null);
if (funcall_11) {
var funcall_12 = ((function (o, f) { return f.apply(undefined, o.components); })(o_7, f_9));
(if_14 = funcall_12);
} else {
var funcall_13 = ((globals[("error")])(("Cannot destruct. Not midir:function.")));
(if_14 = funcall_13);
}
return if_14;
}));
(null);


((globals[("js:struct-midir:nop-constructor")]) = (function Struct(comps) { this.components = comps; }));
(null);
var funcall_0 = ((function (c, name) {
              c.prototype.toString = function toString() {
                return '(' + name + this.components.map(function (c) {
                                       return ' '+globals.repr(c);
                                    }).join('') + ')';
              };
            })((globals[("js:struct-midir:nop-constructor")]), ("midir:nop")));
funcall_0;
((globals[("midir:nop")]) = (function midir_nop_1() {
if (arguments.length > 0) {
  throw new Error("Expecting at most 0 arguments.");
}
;
var funcall_2 = ((function (c) {
                return function () {
                  return new c(Array.prototype.slice.call(arguments));
                };
              })((globals[("js:struct-midir:nop-constructor")])));
var funcall_3 = (funcall_2());
return funcall_3;
}));
(null);
((globals[("midir:nop?")]) = (function midir_nop__5(o_4) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
return (o_4 instanceof (globals[("js:struct-midir:nop-constructor")]));
}));
(null);
((globals[("destruct-midir:nop")]) = (function destruct_midir_nop_7(o_4, f_6) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_8 = ((globals[("midir:nop?")])(o_4));
var if_11 = (null);
if (funcall_8) {
var funcall_9 = ((function (o, f) { return f.apply(undefined, o.components); })(o_4, f_6));
(if_11 = funcall_9);
} else {
var funcall_10 = ((globals[("error")])(("Cannot destruct. Not midir:nop.")));
(if_11 = funcall_10);
}
return if_11;
}));
(null);


((globals[("js:struct-midir:code-constructor")]) = (function Struct(comps) { this.components = comps; }));
(null);
var funcall_0 = ((function (c, name) {
              c.prototype.toString = function toString() {
                return '(' + name + this.components.map(function (c) {
                                       return ' '+globals.repr(c);
                                    }).join('') + ')';
              };
            })((globals[("js:struct-midir:code-constructor")]), ("midir:code")));
funcall_0;
((globals[("midir:code")]) = (function midir_code_2(code_1) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_3 = ((function (c) {
                return function () {
                  return new c(Array.prototype.slice.call(arguments));
                };
              })((globals[("js:struct-midir:code-constructor")])));
var funcall_4 = (funcall_3(code_1));
return funcall_4;
}));
(null);
((globals[("midir:code?")]) = (function midir_code__6(o_5) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
return (o_5 instanceof (globals[("js:struct-midir:code-constructor")]));
}));
(null);
((globals[("destruct-midir:code")]) = (function destruct_midir_code_8(o_5, f_7) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_9 = ((globals[("midir:code?")])(o_5));
var if_12 = (null);
if (funcall_9) {
var funcall_10 = ((function (o, f) { return f.apply(undefined, o.components); })(o_5, f_7));
(if_12 = funcall_10);
} else {
var funcall_11 = ((globals[("error")])(("Cannot destruct. Not midir:code.")));
(if_12 = funcall_11);
}
return if_12;
}));
(null);


((globals[("js:struct-midir:expr-constructor")]) = (function Struct(comps) { this.components = comps; }));
(null);
var funcall_0 = ((function (c, name) {
              c.prototype.toString = function toString() {
                return '(' + name + this.components.map(function (c) {
                                       return ' '+globals.repr(c);
                                    }).join('') + ')';
              };
            })((globals[("js:struct-midir:expr-constructor")]), ("midir:expr")));
funcall_0;
((globals[("midir:expr")]) = (function midir_expr_2(expr_1) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_3 = ((function (c) {
                return function () {
                  return new c(Array.prototype.slice.call(arguments));
                };
              })((globals[("js:struct-midir:expr-constructor")])));
var funcall_4 = (funcall_3(expr_1));
return funcall_4;
}));
(null);
((globals[("midir:expr?")]) = (function midir_expr__6(o_5) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
return (o_5 instanceof (globals[("js:struct-midir:expr-constructor")]));
}));
(null);
((globals[("destruct-midir:expr")]) = (function destruct_midir_expr_8(o_5, f_7) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_9 = ((globals[("midir:expr?")])(o_5));
var if_12 = (null);
if (funcall_9) {
var funcall_10 = ((function (o, f) { return f.apply(undefined, o.components); })(o_5, f_7));
(if_12 = funcall_10);
} else {
var funcall_11 = ((globals[("error")])(("Cannot destruct. Not midir:expr.")));
(if_12 = funcall_11);
}
return if_12;
}));
(null);


((globals[("js:struct-midir:def-constructor")]) = (function Struct(comps) { this.components = comps; }));
(null);
var funcall_0 = ((function (c, name) {
              c.prototype.toString = function toString() {
                return '(' + name + this.components.map(function (c) {
                                       return ' '+globals.repr(c);
                                    }).join('') + ')';
              };
            })((globals[("js:struct-midir:def-constructor")]), ("midir:def")));
funcall_0;
((globals[("midir:def")]) = (function midir_def_3(var_1, expr_2) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_4 = ((function (c) {
                return function () {
                  return new c(Array.prototype.slice.call(arguments));
                };
              })((globals[("js:struct-midir:def-constructor")])));
var funcall_5 = (funcall_4(var_1, expr_2));
return funcall_5;
}));
(null);
((globals[("midir:def?")]) = (function midir_def__7(o_6) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
return (o_6 instanceof (globals[("js:struct-midir:def-constructor")]));
}));
(null);
((globals[("destruct-midir:def")]) = (function destruct_midir_def_9(o_6, f_8) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_10 = ((globals[("midir:def?")])(o_6));
var if_13 = (null);
if (funcall_10) {
var funcall_11 = ((function (o, f) { return f.apply(undefined, o.components); })(o_6, f_8));
(if_13 = funcall_11);
} else {
var funcall_12 = ((globals[("error")])(("Cannot destruct. Not midir:def.")));
(if_13 = funcall_12);
}
return if_13;
}));
(null);


((globals[("js:struct-midir:if-constructor")]) = (function Struct(comps) { this.components = comps; }));
(null);
var funcall_0 = ((function (c, name) {
              c.prototype.toString = function toString() {
                return '(' + name + this.components.map(function (c) {
                                       return ' '+globals.repr(c);
                                    }).join('') + ')';
              };
            })((globals[("js:struct-midir:if-constructor")]), ("midir:if")));
funcall_0;
((globals[("midir:if")]) = (function midir_if_4(cexpr_1, bcons_2, balt_3) {
if (arguments.length < 3) {
  throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
  throw new Error("Expecting at most 3 arguments.");
}
;
var funcall_5 = ((function (c) {
                return function () {
                  return new c(Array.prototype.slice.call(arguments));
                };
              })((globals[("js:struct-midir:if-constructor")])));
var funcall_6 = (funcall_5(cexpr_1, bcons_2, balt_3));
return funcall_6;
}));
(null);
((globals[("midir:if?")]) = (function midir_if__8(o_7) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
return (o_7 instanceof (globals[("js:struct-midir:if-constructor")]));
}));
(null);
((globals[("destruct-midir:if")]) = (function destruct_midir_if_10(o_7, f_9) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_11 = ((globals[("midir:if?")])(o_7));
var if_14 = (null);
if (funcall_11) {
var funcall_12 = ((function (o, f) { return f.apply(undefined, o.components); })(o_7, f_9));
(if_14 = funcall_12);
} else {
var funcall_13 = ((globals[("error")])(("Cannot destruct. Not midir:if.")));
(if_14 = funcall_13);
}
return if_14;
}));
(null);


((globals[("js:struct-midir:while-constructor")]) = (function Struct(comps) { this.components = comps; }));
(null);
var funcall_0 = ((function (c, name) {
              c.prototype.toString = function toString() {
                return '(' + name + this.components.map(function (c) {
                                       return ' '+globals.repr(c);
                                    }).join('') + ')';
              };
            })((globals[("js:struct-midir:while-constructor")]), ("midir:while")));
funcall_0;
((globals[("midir:while")]) = (function midir_while_3(expr_1, body_2) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_4 = ((function (c) {
                return function () {
                  return new c(Array.prototype.slice.call(arguments));
                };
              })((globals[("js:struct-midir:while-constructor")])));
var funcall_5 = (funcall_4(expr_1, body_2));
return funcall_5;
}));
(null);
((globals[("midir:while?")]) = (function midir_while__7(o_6) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
return (o_6 instanceof (globals[("js:struct-midir:while-constructor")]));
}));
(null);
((globals[("destruct-midir:while")]) = (function destruct_midir_while_9(o_6, f_8) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_10 = ((globals[("midir:while?")])(o_6));
var if_13 = (null);
if (funcall_10) {
var funcall_11 = ((function (o, f) { return f.apply(undefined, o.components); })(o_6, f_8));
(if_13 = funcall_11);
} else {
var funcall_12 = ((globals[("error")])(("Cannot destruct. Not midir:while.")));
(if_13 = funcall_12);
}
return if_13;
}));
(null);


((globals[("js:struct-midir:return-constructor")]) = (function Struct(comps) { this.components = comps; }));
(null);
var funcall_0 = ((function (c, name) {
              c.prototype.toString = function toString() {
                return '(' + name + this.components.map(function (c) {
                                       return ' '+globals.repr(c);
                                    }).join('') + ')';
              };
            })((globals[("js:struct-midir:return-constructor")]), ("midir:return")));
funcall_0;
((globals[("midir:return")]) = (function midir_return_2(expr_1) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_3 = ((function (c) {
                return function () {
                  return new c(Array.prototype.slice.call(arguments));
                };
              })((globals[("js:struct-midir:return-constructor")])));
var funcall_4 = (funcall_3(expr_1));
return funcall_4;
}));
(null);
((globals[("midir:return?")]) = (function midir_return__6(o_5) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
return (o_5 instanceof (globals[("js:struct-midir:return-constructor")]));
}));
(null);
((globals[("destruct-midir:return")]) = (function destruct_midir_return_8(o_5, f_7) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_9 = ((globals[("midir:return?")])(o_5));
var if_12 = (null);
if (funcall_9) {
var funcall_10 = ((function (o, f) { return f.apply(undefined, o.components); })(o_5, f_7));
(if_12 = funcall_10);
} else {
var funcall_11 = ((globals[("error")])(("Cannot destruct. Not midir:return.")));
(if_12 = funcall_11);
}
return if_12;
}));
(null);


((globals[("js:struct-midir:break-constructor")]) = (function Struct(comps) { this.components = comps; }));
(null);
var funcall_0 = ((function (c, name) {
              c.prototype.toString = function toString() {
                return '(' + name + this.components.map(function (c) {
                                       return ' '+globals.repr(c);
                                    }).join('') + ')';
              };
            })((globals[("js:struct-midir:break-constructor")]), ("midir:break")));
funcall_0;
((globals[("midir:break")]) = (function midir_break_1() {
if (arguments.length > 0) {
  throw new Error("Expecting at most 0 arguments.");
}
;
var funcall_2 = ((function (c) {
                return function () {
                  return new c(Array.prototype.slice.call(arguments));
                };
              })((globals[("js:struct-midir:break-constructor")])));
var funcall_3 = (funcall_2());
return funcall_3;
}));
(null);
((globals[("midir:break?")]) = (function midir_break__5(o_4) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
return (o_4 instanceof (globals[("js:struct-midir:break-constructor")]));
}));
(null);
((globals[("destruct-midir:break")]) = (function destruct_midir_break_7(o_4, f_6) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_8 = ((globals[("midir:break?")])(o_4));
var if_11 = (null);
if (funcall_8) {
var funcall_9 = ((function (o, f) { return f.apply(undefined, o.components); })(o_4, f_6));
(if_11 = funcall_9);
} else {
var funcall_10 = ((globals[("error")])(("Cannot destruct. Not midir:break.")));
(if_11 = funcall_10);
}
return if_11;
}));
(null);


((globals[("js:struct-midir:continue-constructor")]) = (function Struct(comps) { this.components = comps; }));
(null);
var funcall_0 = ((function (c, name) {
              c.prototype.toString = function toString() {
                return '(' + name + this.components.map(function (c) {
                                       return ' '+globals.repr(c);
                                    }).join('') + ')';
              };
            })((globals[("js:struct-midir:continue-constructor")]), ("midir:continue")));
funcall_0;
((globals[("midir:continue")]) = (function midir_continue_1() {
if (arguments.length > 0) {
  throw new Error("Expecting at most 0 arguments.");
}
;
var funcall_2 = ((function (c) {
                return function () {
                  return new c(Array.prototype.slice.call(arguments));
                };
              })((globals[("js:struct-midir:continue-constructor")])));
var funcall_3 = (funcall_2());
return funcall_3;
}));
(null);
((globals[("midir:continue?")]) = (function midir_continue__5(o_4) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
return (o_4 instanceof (globals[("js:struct-midir:continue-constructor")]));
}));
(null);
((globals[("destruct-midir:continue")]) = (function destruct_midir_continue_7(o_4, f_6) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_8 = ((globals[("midir:continue?")])(o_4));
var if_11 = (null);
if (funcall_8) {
var funcall_9 = ((function (o, f) { return f.apply(undefined, o.components); })(o_4, f_6));
(if_11 = funcall_9);
} else {
var funcall_10 = ((globals[("error")])(("Cannot destruct. Not midir:continue.")));
(if_11 = funcall_10);
}
return if_11;
}));
(null);


((globals[("js:struct-midir:throw-constructor")]) = (function Struct(comps) { this.components = comps; }));
(null);
var funcall_0 = ((function (c, name) {
              c.prototype.toString = function toString() {
                return '(' + name + this.components.map(function (c) {
                                       return ' '+globals.repr(c);
                                    }).join('') + ')';
              };
            })((globals[("js:struct-midir:throw-constructor")]), ("midir:throw")));
funcall_0;
((globals[("midir:throw")]) = (function midir_throw_2(expr_1) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_3 = ((function (c) {
                return function () {
                  return new c(Array.prototype.slice.call(arguments));
                };
              })((globals[("js:struct-midir:throw-constructor")])));
var funcall_4 = (funcall_3(expr_1));
return funcall_4;
}));
(null);
((globals[("midir:throw?")]) = (function midir_throw__6(o_5) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
return (o_5 instanceof (globals[("js:struct-midir:throw-constructor")]));
}));
(null);
((globals[("destruct-midir:throw")]) = (function destruct_midir_throw_8(o_5, f_7) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_9 = ((globals[("midir:throw?")])(o_5));
var if_12 = (null);
if (funcall_9) {
var funcall_10 = ((function (o, f) { return f.apply(undefined, o.components); })(o_5, f_7));
(if_12 = funcall_10);
} else {
var funcall_11 = ((globals[("error")])(("Cannot destruct. Not midir:throw.")));
(if_12 = funcall_11);
}
return if_12;
}));
(null);


((globals[("js:struct-midir:try-constructor")]) = (function Struct(comps) { this.components = comps; }));
(null);
var funcall_0 = ((function (c, name) {
              c.prototype.toString = function toString() {
                return '(' + name + this.components.map(function (c) {
                                       return ' '+globals.repr(c);
                                    }).join('') + ')';
              };
            })((globals[("js:struct-midir:try-constructor")]), ("midir:try")));
funcall_0;
((globals[("midir:try")]) = (function midir_try_5(ts_1, var_2, cs_3, mfinally_4) {
if (arguments.length < 4) {
  throw new Error("Expecting at least 4 arguments.");
}
if (arguments.length > 4) {
  throw new Error("Expecting at most 4 arguments.");
}
;
var funcall_6 = ((function (c) {
                return function () {
                  return new c(Array.prototype.slice.call(arguments));
                };
              })((globals[("js:struct-midir:try-constructor")])));
var funcall_7 = (funcall_6(ts_1, var_2, cs_3, mfinally_4));
return funcall_7;
}));
(null);
((globals[("midir:try?")]) = (function midir_try__9(o_8) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
return (o_8 instanceof (globals[("js:struct-midir:try-constructor")]));
}));
(null);
((globals[("destruct-midir:try")]) = (function destruct_midir_try_11(o_8, f_10) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_12 = ((globals[("midir:try?")])(o_8));
var if_15 = (null);
if (funcall_12) {
var funcall_13 = ((function (o, f) { return f.apply(undefined, o.components); })(o_8, f_10));
(if_15 = funcall_13);
} else {
var funcall_14 = ((globals[("error")])(("Cannot destruct. Not midir:try.")));
(if_15 = funcall_14);
}
return if_15;
}));
(null);


((globals[("js:struct-midir:seq-constructor")]) = (function Struct(comps) { this.components = comps; }));
(null);
var funcall_0 = ((function (c, name) {
              c.prototype.toString = function toString() {
                return '(' + name + this.components.map(function (c) {
                                       return ' '+globals.repr(c);
                                    }).join('') + ')';
              };
            })((globals[("js:struct-midir:seq-constructor")]), ("midir:seq")));
funcall_0;
((globals[("midir:seq")]) = (function midir_seq_2(statements_1) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_3 = ((function (c) {
                return function () {
                  return new c(Array.prototype.slice.call(arguments));
                };
              })((globals[("js:struct-midir:seq-constructor")])));
var funcall_4 = (funcall_3(statements_1));
return funcall_4;
}));
(null);
((globals[("midir:seq?")]) = (function midir_seq__6(o_5) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
return (o_5 instanceof (globals[("js:struct-midir:seq-constructor")]));
}));
(null);
((globals[("destruct-midir:seq")]) = (function destruct_midir_seq_8(o_5, f_7) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_9 = ((globals[("midir:seq?")])(o_5));
var if_12 = (null);
if (funcall_9) {
var funcall_10 = ((function (o, f) { return f.apply(undefined, o.components); })(o_5, f_7));
(if_12 = funcall_10);
} else {
var funcall_11 = ((globals[("error")])(("Cannot destruct. Not midir:seq.")));
(if_12 = funcall_11);
}
return if_12;
}));
(null);


((globals[("js:struct-MidirExpr-constructor")]) = (function Struct(comps) { this.components = comps; }));
(null);
var funcall_0 = ((function (c, name) {
              c.prototype.toString = function toString() {
                return '(' + name + this.components.map(function (c) {
                                       return ' '+globals.repr(c);
                                    }).join('') + ')';
              };
            })((globals[("js:struct-MidirExpr-constructor")]), ("MidirExpr")));
funcall_0;
((globals[("MidirExpr")]) = (function MidirExpr_2(expr_1) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_3 = ((function (c) {
                return function () {
                  return new c(Array.prototype.slice.call(arguments));
                };
              })((globals[("js:struct-MidirExpr-constructor")])));
var funcall_4 = (funcall_3(expr_1));
return funcall_4;
}));
(null);
((globals[("MidirExpr?")]) = (function MidirExpr__6(o_5) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
return (o_5 instanceof (globals[("js:struct-MidirExpr-constructor")]));
}));
(null);
((globals[("destruct-MidirExpr")]) = (function destruct_MidirExpr_8(o_5, f_7) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_9 = ((globals[("MidirExpr?")])(o_5));
var if_12 = (null);
if (funcall_9) {
var funcall_10 = ((function (o, f) { return f.apply(undefined, o.components); })(o_5, f_7));
(if_12 = funcall_10);
} else {
var funcall_11 = ((globals[("error")])(("Cannot destruct. Not MidirExpr.")));
(if_12 = funcall_11);
}
return if_12;
}));
(null);


((globals[("js:struct-MidirStatement-constructor")]) = (function Struct(comps) { this.components = comps; }));
(null);
var funcall_0 = ((function (c, name) {
              c.prototype.toString = function toString() {
                return '(' + name + this.components.map(function (c) {
                                       return ' '+globals.repr(c);
                                    }).join('') + ')';
              };
            })((globals[("js:struct-MidirStatement-constructor")]), ("MidirStatement")));
funcall_0;
((globals[("MidirStatement")]) = (function MidirStatement_3(statement_1, expr_2) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_4 = ((function (c) {
                return function () {
                  return new c(Array.prototype.slice.call(arguments));
                };
              })((globals[("js:struct-MidirStatement-constructor")])));
var funcall_5 = (funcall_4(statement_1, expr_2));
return funcall_5;
}));
(null);
((globals[("MidirStatement?")]) = (function MidirStatement__7(o_6) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
return (o_6 instanceof (globals[("js:struct-MidirStatement-constructor")]));
}));
(null);
((globals[("destruct-MidirStatement")]) = (function destruct_MidirStatement_9(o_6, f_8) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_10 = ((globals[("MidirStatement?")])(o_6));
var if_13 = (null);
if (funcall_10) {
var funcall_11 = ((function (o, f) { return f.apply(undefined, o.components); })(o_6, f_8));
(if_13 = funcall_11);
} else {
var funcall_12 = ((globals[("error")])(("Cannot destruct. Not MidirStatement.")));
(if_13 = funcall_12);
}
return if_13;
}));
(null);


((globals[("midir-splice")]) = (function midir_splice_2(m1_0, m2f_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_28 = ((function (_gensym_584_3) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_4 = ((globals[("MidirExpr?")])(_gensym_584_3));
var if_27 = (null);
if (funcall_4) {
var funcall_7 = ((globals[("destruct-MidirExpr")])(_gensym_584_3, (function (expr1_5) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_6 = (m2f_1(expr1_5));
return funcall_6;
})));
(if_27 = funcall_7);
} else {
var funcall_8 = ((globals[("MidirStatement?")])(_gensym_584_3));
var if_26 = (null);
if (funcall_8) {
var funcall_25 = ((globals[("destruct-MidirStatement")])(_gensym_584_3, (function (statement1_9, expr1_5) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_23 = (m2f_1(expr1_5));
var funcall_24 = ((function (_gensym_585_10) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_11 = ((globals[("MidirExpr?")])(_gensym_585_10));
var if_22 = (null);
if (funcall_11) {
var funcall_14 = ((globals[("destruct-MidirExpr")])(_gensym_585_10, (function (expr2_12) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_13 = ((globals[("MidirStatement")])(statement1_9, expr2_12));
return funcall_13;
})));
(if_22 = funcall_14);
} else {
var funcall_15 = ((globals[("MidirStatement?")])(_gensym_585_10));
var if_21 = (null);
if (funcall_15) {
var funcall_20 = ((globals[("destruct-MidirStatement")])(_gensym_585_10, (function (statement2_16, expr2_12) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_17 = ((globals[("list")])(statement1_9, statement2_16));
var funcall_18 = ((globals[("midir:seq")])(funcall_17));
var funcall_19 = ((globals[("MidirStatement")])(funcall_18, expr2_12));
return funcall_19;
})));
(if_21 = funcall_20);
} else {
(if_21 = (null));
}
(if_22 = if_21);
}
return if_22;
})(funcall_23));
return funcall_24;
})));
(if_26 = funcall_25);
} else {
(if_26 = (null));
}
(if_27 = if_26);
}
return if_27;
})(m1_0));
return funcall_28;
}));
(null);


((globals[("midir-join")]) = (function midir_join_2(m1_0, m2_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_18 = ((function (_gensym_589_3) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_4 = ((globals[("MidirExpr?")])(_gensym_589_3));
var if_17 = (null);
if (funcall_4) {
var funcall_8 = ((globals[("destruct-MidirExpr")])(_gensym_589_3, (function (expr2_5) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_6 = ((globals[("midir-close")])(m1_0));
var funcall_7 = ((globals[("MidirStatement")])(funcall_6, expr2_5));
return funcall_7;
})));
(if_17 = funcall_8);
} else {
var funcall_9 = ((globals[("MidirStatement?")])(_gensym_589_3));
var if_16 = (null);
if (funcall_9) {
var funcall_15 = ((globals[("destruct-MidirStatement")])(_gensym_589_3, (function (statement2_10, expr2_5) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_11 = ((globals[("midir-close")])(m1_0));
var funcall_12 = ((globals[("list")])(funcall_11, statement2_10));
var funcall_13 = ((globals[("midir:seq")])(funcall_12));
var funcall_14 = ((globals[("MidirStatement")])(funcall_13, expr2_5));
return funcall_14;
})));
(if_16 = funcall_15);
} else {
(if_16 = (null));
}
(if_17 = if_16);
}
return if_17;
})(m2_1));
return funcall_18;
}));
(null);


((globals[("midir-close")]) = (function midir_close_1(m_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_26 = ((function (_gensym_592_2) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_3 = ((globals[("MidirExpr?")])(_gensym_592_2));
var if_25 = (null);
if (funcall_3) {
var funcall_12 = ((globals[("destruct-MidirExpr")])(_gensym_592_2, (function (expr_4) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_11 = ((function (_gensym_593_5) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_6 = ((globals[("midir:nop?")])(_gensym_593_5));
var if_10 = (null);
if (funcall_6) {
var funcall_8 = ((globals[("destruct-midir:nop")])(_gensym_593_5, (function () {
if (arguments.length > 0) {
  throw new Error("Expecting at most 0 arguments.");
}
;
var funcall_7 = ((globals[("midir:seq")])((new Nil())));
return funcall_7;
})));
(if_10 = funcall_8);
} else {
var funcall_9 = ((globals[("midir:expr")])(expr_4));
(if_10 = funcall_9);
}
return if_10;
})(expr_4));
return funcall_11;
})));
(if_25 = funcall_12);
} else {
var funcall_13 = ((globals[("MidirStatement?")])(_gensym_592_2));
var if_24 = (null);
if (funcall_13) {
var funcall_23 = ((globals[("destruct-MidirStatement")])(_gensym_592_2, (function (stat_14, expr_4) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_22 = ((function (_gensym_594_15) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_16 = ((globals[("midir:nop?")])(_gensym_594_15));
var if_21 = (null);
if (funcall_16) {
var funcall_17 = ((globals[("destruct-midir:nop")])(_gensym_594_15, (function () {
if (arguments.length > 0) {
  throw new Error("Expecting at most 0 arguments.");
}
;
return stat_14;
})));
(if_21 = funcall_17);
} else {
var funcall_18 = ((globals[("midir:expr")])(expr_4));
var funcall_19 = ((globals[("list")])(stat_14, funcall_18));
var funcall_20 = ((globals[("midir:seq")])(funcall_19));
(if_21 = funcall_20);
}
return if_21;
})(expr_4));
return funcall_22;
})));
(if_24 = funcall_23);
} else {
(if_24 = (null));
}
(if_25 = if_24);
}
return if_25;
})(m_0));
return funcall_26;
}));
(null);


((globals[("midir-unlist")]) = (function midir_unlist_1(ms_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var _unlist_2 = (function _unlist_2(m_3) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_16 = ((function (_gensym_599_4) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_5 = ((globals[("MidirExpr?")])(_gensym_599_4));
var if_15 = (null);
if (funcall_5) {
var funcall_8 = ((globals[("destruct-MidirExpr")])(_gensym_599_4, (function (expr_6) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_7 = ((globals[("list")])((new Nil()), expr_6));
return funcall_7;
})));
(if_15 = funcall_8);
} else {
var funcall_9 = ((globals[("MidirStatement?")])(_gensym_599_4));
var if_14 = (null);
if (funcall_9) {
var funcall_13 = ((globals[("destruct-MidirStatement")])(_gensym_599_4, (function (stat_10, expr_6) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_11 = ((globals[("list")])(stat_10));
var funcall_12 = ((globals[("list")])(funcall_11, expr_6));
return funcall_12;
})));
(if_14 = funcall_13);
} else {
(if_14 = (null));
}
(if_15 = if_14);
}
return if_15;
})(m_3));
return funcall_16;
});
var funcall_26 = ((globals[("map")])(_unlist_2, ms_0));
var funcall_27 = ((globals[("apply")])((globals[("zip")]), funcall_26));
var funcall_28 = ((function (ul_17) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_18 = ((globals[("nil?")])(ul_17));
var if_25 = (null);
if (funcall_18) {
var funcall_19 = ((globals[("list")])((new Nil()), (new Nil())));
(if_25 = funcall_19);
} else {
var funcall_20 = ((globals[("head")])(ul_17));
var funcall_21 = ((globals[("apply")])((globals[("append")]), funcall_20));
var funcall_22 = ((globals[("tail")])(ul_17));
var funcall_23 = ((globals[("head")])(funcall_22));
var funcall_24 = ((globals[("list")])(funcall_21, funcall_23));
(if_25 = funcall_24);
}
return if_25;
})(funcall_27));
return funcall_28;
}));
(null);


((globals[("midir-set")]) = (function midir_set_2(v_0, expr_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_3 = ((globals[("midir:lookup")])(v_0));
var funcall_4 = ((globals[("midir:binop")])(("="), funcall_3, expr_1));
var funcall_5 = ((globals[("midir:expr")])(funcall_4));
var funcall_6 = ((globals[("midir:nop")])());
var funcall_7 = ((globals[("MidirStatement")])(funcall_5, funcall_6));
return funcall_7;
}));
(null);


((globals[("make-js-env")]) = (function make_js_env_1(parent_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
;
var bindings_2 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 1; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var funcall_35 = ((globals[("apply")])((globals[("dict")]), bindings_2));
var funcall_36 = ((function (d_3) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
return (function (msg_4) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
;
var args_5 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 1; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var funcall_33 = ((function (_gensym_602_6) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_7 = ((globals[("=")])(_gensym_602_6, (Symbol.create("lookup"))));
var if_32 = (null);
if (funcall_7) {
(if_32 = (function (k_8) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_9 = ((globals[("dict:has?")])(d_3, k_8));
var if_18 = (null);
if (funcall_9) {
var funcall_10 = ((globals[("dict:get")])(d_3, k_8));
(if_18 = funcall_10);
} else {
var funcall_11 = ((globals[("null?")])(parent_0));
var if_17 = (null);
if (funcall_11) {
var funcall_12 = ((globals[("repr")])(k_8));
var funcall_13 = ((globals[("++")])(("Environment key error: "), funcall_12));
var funcall_14 = ((globals[("error")])(funcall_13));
(if_17 = funcall_14);
} else {
var if_16 = (null);
if ((true)) {
var funcall_15 = (parent_0((Symbol.create("lookup")), k_8));
(if_16 = funcall_15);
} else {
(if_16 = (null));
}
(if_17 = if_16);
}
(if_18 = if_17);
}
return if_18;
}));
} else {
var funcall_19 = ((globals[("=")])(_gensym_602_6, (Symbol.create("has?"))));
var if_31 = (null);
if (funcall_19) {
(if_31 = (function (k_8) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_20 = ((globals[("dict:has?")])(d_3, k_8));
var if_24 = (null);
if (funcall_20) {
(if_24 = (true));
} else {
var funcall_21 = ((globals[("null?")])(parent_0));
var if_23 = (null);
if (funcall_21) {
(if_23 = (false));
} else {
var funcall_22 = (parent_0((Symbol.create("has?")), k_8));
(if_23 = funcall_22);
}
(if_24 = if_23);
}
return if_24;
}));
} else {
var funcall_25 = ((globals[("=")])(_gensym_602_6, (Symbol.create("set!"))));
var if_30 = (null);
if (funcall_25) {
(if_30 = (function (k_8, v_26) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_27 = ((globals[("dict:set!")])(d_3, k_8, v_26));
return funcall_27;
}));
} else {
var funcall_28 = ((globals[("++")])(("No such message: "), msg_4));
var funcall_29 = ((globals[("error")])(funcall_28));
(if_30 = funcall_29);
}
(if_31 = if_30);
}
(if_32 = if_31);
}
return if_32;
})(msg_4));
var funcall_34 = ((globals[("apply")])(funcall_33, args_5));
return funcall_34;
});
})(funcall_35));
return funcall_36;
}));
(null);


((globals[("compile-to-midir-toplevel")]) = (function compile_to_midir_toplevel_3(exp_0, env_1, igen_2) {
if (arguments.length < 3) {
  throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
  throw new Error("Expecting at most 3 arguments.");
}
;
var funcall_4 = ((globals[("cons?")])(exp_0));
var if_33 = (null);
if (funcall_4) {
var funcall_30 = ((globals[("head")])(exp_0));
var funcall_31 = ((function (_gensym_608_5) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_6 = ((globals[("=")])(_gensym_608_5, (Symbol.create("js:def"))));
var if_29 = (null);
if (funcall_6) {
var funcall_7 = ((globals[("nth")])(exp_0, (1)));
var funcall_8 = ((globals[("nth")])(exp_0, (2)));
var funcall_9 = ((globals[("cons")])(funcall_8, (new Nil())));
var funcall_10 = ((globals[("cons")])(funcall_7, funcall_9));
var funcall_11 = ((globals[("cons")])(("="), funcall_10));
var funcall_12 = ((globals[("cons")])((Symbol.create("js:binop")), funcall_11));
var funcall_13 = ((globals[("cons")])((null), (new Nil())));
var funcall_14 = ((globals[("cons")])(funcall_12, funcall_13));
var funcall_15 = ((globals[("cons")])(funcall_14, (new Nil())));
var funcall_16 = ((globals[("cons")])((Symbol.create("js:seq")), funcall_15));
var funcall_17 = ((globals[("compile-to-midir")])(funcall_16, env_1, igen_2));
(if_29 = funcall_17);
} else {
var funcall_18 = ((globals[("=")])(_gensym_608_5, (Symbol.create("js:seq"))));
var if_28 = (null);
if (funcall_18) {
var funcall_23 = ((globals[("midir:nop")])());
var funcall_24 = ((globals[("MidirExpr")])(funcall_23));
var funcall_25 = ((globals[("nth")])(exp_0, (1)));
var funcall_26 = ((globals[("foldl")])((function (acc_19, next_20) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_21 = (compile_to_midir_toplevel_3(next_20, env_1, igen_2));
var funcall_22 = ((globals[("midir-join")])(acc_19, funcall_21));
return funcall_22;
}), funcall_24, funcall_25));
(if_28 = funcall_26);
} else {
var funcall_27 = ((globals[("compile-to-midir")])(exp_0, env_1, igen_2));
(if_28 = funcall_27);
}
(if_29 = if_28);
}
return if_29;
})(funcall_30));
(if_33 = funcall_31);
} else {
var funcall_32 = ((globals[("compile-to-midir")])(exp_0, env_1, igen_2));
(if_33 = funcall_32);
}
return if_33;
}));
(null);


((globals[("compile-to-midir")]) = (function compile_to_midir_3(exp_0, env_1, igen_2) {
if (arguments.length < 3) {
  throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
  throw new Error("Expecting at most 3 arguments.");
}
;
var funcall_4 = ((globals[("self-evaluating?")])(exp_0));
var if_25 = (null);
if (funcall_4) {
var funcall_5 = ((globals[("midir:lit")])(exp_0));
var funcall_6 = ((globals[("MidirExpr")])(funcall_5));
(if_25 = funcall_6);
} else {
var funcall_7 = ((globals[("symbol?")])(exp_0));
var if_24 = (null);
if (funcall_7) {
var funcall_8 = (env_1((Symbol.create("has?")), exp_0));
var if_17 = (null);
if (funcall_8) {
var funcall_9 = (env_1((Symbol.create("lookup")), exp_0));
var funcall_10 = ((globals[("midir:lookup")])(funcall_9));
var funcall_11 = ((globals[("MidirExpr")])(funcall_10));
(if_17 = funcall_11);
} else {
var funcall_12 = ((globals[("midir:lookup")])(("globals")));
var funcall_13 = ((globals[("symbol->string")])(exp_0));
var funcall_14 = ((globals[("midir:lit")])(funcall_13));
var funcall_15 = ((globals[("midir:prop")])(funcall_12, funcall_14));
var funcall_16 = ((globals[("MidirExpr")])(funcall_15));
(if_17 = funcall_16);
}
(if_24 = if_17);
} else {
var funcall_18 = ((globals[("cons?")])(exp_0));
var if_23 = (null);
if (funcall_18) {
var funcall_19 = ((globals[("compile-form-to-midir")])(exp_0, env_1, igen_2));
(if_23 = funcall_19);
} else {
var funcall_20 = ((globals[("repr")])(exp_0));
var funcall_21 = ((globals[("++")])(("Unknown expression "), funcall_20));
var funcall_22 = ((globals[("error")])(funcall_21));
(if_23 = funcall_22);
}
(if_24 = if_23);
}
(if_25 = if_24);
}
return if_25;
}));
(null);


((globals[("compile-form-to-midir")]) = (function compile_form_to_midir_3(exp_0, env_1, igen_2) {
if (arguments.length < 3) {
  throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
  throw new Error("Expecting at most 3 arguments.");
}
;
var comp_4 = (function comp_4(e_5) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_6 = ((globals[("compile-to-midir")])(e_5, env_1, igen_2));
return funcall_6;
});
var funcall_288 = ((globals[("head")])(exp_0));
var funcall_289 = ((function (_gensym_626_7) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_8 = ((globals[("=")])(_gensym_626_7, (Symbol.create("quote"))));
var if_287 = (null);
if (funcall_8) {
var funcall_9 = ((globals[("nth")])(exp_0, (1)));
var funcall_10 = ((globals[("midir:lit")])(funcall_9));
var funcall_11 = ((globals[("MidirExpr")])(funcall_10));
(if_287 = funcall_11);
} else {
var funcall_12 = ((globals[("=")])(_gensym_626_7, (Symbol.create("js:def"))));
var if_286 = (null);
if (funcall_12) {
var funcall_24 = ((globals[("nth")])(exp_0, (1)));
var funcall_25 = (igen_2((Symbol.create("get")), funcall_24));
var funcall_26 = ((function (var_13) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_14 = ((globals[("nth")])(exp_0, (1)));
var funcall_15 = (env_1((Symbol.create("set!")), funcall_14, var_13));
funcall_15;
var funcall_21 = ((globals[("nth")])(exp_0, (2)));
var funcall_22 = (comp_4(funcall_21));
var funcall_23 = ((function (expr_16) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_20 = ((globals[("midir-splice")])(expr_16, (function (e_5) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_17 = ((globals[("midir:def")])(var_13, e_5));
var funcall_18 = ((globals[("midir:nop")])());
var funcall_19 = ((globals[("MidirStatement")])(funcall_17, funcall_18));
return funcall_19;
})));
return funcall_20;
})(funcall_22));
return funcall_23;
})(funcall_25));
(if_286 = funcall_26);
} else {
var funcall_27 = ((globals[("=")])(_gensym_626_7, (Symbol.create("js:if"))));
var if_285 = (null);
if (funcall_27) {
var funcall_49 = ((globals[("nth")])(exp_0, (1)));
var funcall_50 = (comp_4(funcall_49));
var funcall_51 = ((globals[("nth")])(exp_0, (2)));
var funcall_52 = (comp_4(funcall_51));
var funcall_53 = ((globals[("nth")])(exp_0, (3)));
var funcall_54 = (comp_4(funcall_53));
var funcall_55 = (igen_2((Symbol.create("new")), ("if")));
var funcall_56 = ((function (cexpr_28, bcons_29, balt_30, outvar_31) {
if (arguments.length < 4) {
  throw new Error("Expecting at least 4 arguments.");
}
if (arguments.length > 4) {
  throw new Error("Expecting at most 4 arguments.");
}
;
var funcall_48 = ((globals[("midir-splice")])(cexpr_28, (function (ce_32) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_33 = ((globals[("midir:nop")])());
var funcall_34 = ((globals[("midir:def")])(outvar_31, funcall_33));
var funcall_37 = ((globals[("midir-splice")])(bcons_29, (function (be_35) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_36 = ((globals[("midir-set")])(outvar_31, be_35));
return funcall_36;
})));
var funcall_38 = ((globals[("midir-close")])(funcall_37));
var funcall_41 = ((globals[("midir-splice")])(balt_30, (function (ae_39) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_40 = ((globals[("midir-set")])(outvar_31, ae_39));
return funcall_40;
})));
var funcall_42 = ((globals[("midir-close")])(funcall_41));
var funcall_43 = ((globals[("midir:if")])(ce_32, funcall_38, funcall_42));
var funcall_44 = ((globals[("list")])(funcall_34, funcall_43));
var funcall_45 = ((globals[("midir:seq")])(funcall_44));
var funcall_46 = ((globals[("midir:lookup")])(outvar_31));
var funcall_47 = ((globals[("MidirStatement")])(funcall_45, funcall_46));
return funcall_47;
})));
return funcall_48;
})(funcall_50, funcall_52, funcall_54, funcall_55));
(if_285 = funcall_56);
} else {
var funcall_57 = ((globals[("=")])(_gensym_626_7, (Symbol.create("js:while"))));
var if_284 = (null);
if (funcall_57) {
var funcall_76 = ((globals[("tail")])(exp_0));
var funcall_77 = ((globals[("head")])(funcall_76));
var funcall_78 = (comp_4(funcall_77));
var funcall_79 = ((globals[("tail")])(exp_0));
var funcall_80 = ((globals[("head")])(funcall_79));
var funcall_81 = (comp_4(funcall_80));
var funcall_82 = ((globals[("tail")])(exp_0));
var funcall_83 = ((globals[("tail")])(funcall_82));
var funcall_84 = ((globals[("head")])(funcall_83));
var funcall_85 = (comp_4(funcall_84));
var funcall_86 = (igen_2((Symbol.create("new")), ("while")));
var funcall_87 = ((function (cexpr_28, cexpr_inside_58, body_59, outvar_31) {
if (arguments.length < 4) {
  throw new Error("Expecting at least 4 arguments.");
}
if (arguments.length > 4) {
  throw new Error("Expecting at most 4 arguments.");
}
;
var funcall_75 = ((globals[("midir-splice")])(cexpr_28, (function (ce_32) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_60 = ((globals[("midir:def")])(outvar_31, ce_32));
var funcall_61 = ((globals[("midir:lookup")])(outvar_31));
var funcall_62 = ((globals[("midir-close")])(body_59));
var funcall_66 = ((globals[("midir-splice")])(cexpr_inside_58, (function (ce_32) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_63 = ((globals[("midir:lookup")])(outvar_31));
var funcall_64 = ((globals[("midir:binop")])(("="), funcall_63, ce_32));
var funcall_65 = ((globals[("MidirExpr")])(funcall_64));
return funcall_65;
})));
var funcall_67 = ((globals[("midir-close")])(funcall_66));
var funcall_68 = ((globals[("list")])(funcall_62, funcall_67));
var funcall_69 = ((globals[("midir:seq")])(funcall_68));
var funcall_70 = ((globals[("midir:while")])(funcall_61, funcall_69));
var funcall_71 = ((globals[("list")])(funcall_60, funcall_70));
var funcall_72 = ((globals[("midir:seq")])(funcall_71));
var funcall_73 = ((globals[("midir:nop")])());
var funcall_74 = ((globals[("MidirStatement")])(funcall_72, funcall_73));
return funcall_74;
})));
return funcall_75;
})(funcall_78, funcall_81, funcall_85, funcall_86));
(if_284 = funcall_87);
} else {
var funcall_88 = ((globals[("=")])(_gensym_626_7, (Symbol.create("js:return"))));
var if_283 = (null);
if (funcall_88) {
var funcall_93 = ((globals[("tail")])(exp_0));
var funcall_94 = ((globals[("head")])(funcall_93));
var funcall_95 = (comp_4(funcall_94));
var funcall_96 = ((function (expr_16) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_92 = ((globals[("midir-splice")])(expr_16, (function (e_5) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_89 = ((globals[("midir:return")])(e_5));
var funcall_90 = ((globals[("midir:nop")])());
var funcall_91 = ((globals[("MidirStatement")])(funcall_89, funcall_90));
return funcall_91;
})));
return funcall_92;
})(funcall_95));
(if_283 = funcall_96);
} else {
var funcall_97 = ((globals[("=")])(_gensym_626_7, (Symbol.create("js:break"))));
var if_282 = (null);
if (funcall_97) {
var funcall_98 = ((globals[("midir:break")])());
var funcall_99 = ((globals[("midir:nop")])());
var funcall_100 = ((globals[("MidirStatement")])(funcall_98, funcall_99));
(if_282 = funcall_100);
} else {
var funcall_101 = ((globals[("=")])(_gensym_626_7, (Symbol.create("js:break"))));
var if_281 = (null);
if (funcall_101) {
var funcall_102 = ((globals[("midir:continue")])());
var funcall_103 = ((globals[("midir:nop")])());
var funcall_104 = ((globals[("MidirStatement")])(funcall_102, funcall_103));
(if_281 = funcall_104);
} else {
var funcall_105 = ((globals[("=")])(_gensym_626_7, (Symbol.create("js:seq"))));
var if_280 = (null);
if (funcall_105) {
var funcall_110 = ((globals[("midir:nop")])());
var funcall_111 = ((globals[("MidirExpr")])(funcall_110));
var funcall_112 = ((globals[("nth")])(exp_0, (1)));
var funcall_113 = ((globals[("foldl")])((function (acc_106, next_107) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_108 = (comp_4(next_107));
var funcall_109 = ((globals[("midir-join")])(acc_106, funcall_108));
return funcall_109;
}), funcall_111, funcall_112));
(if_280 = funcall_113);
} else {
var funcall_114 = ((globals[("=")])(_gensym_626_7, (Symbol.create("js:js"))));
var if_279 = (null);
if (funcall_114) {
var funcall_115 = ((globals[("tail")])(exp_0));
var funcall_116 = ((globals[("head")])(funcall_115));
var funcall_117 = ((globals[("midir:js")])(funcall_116));
var funcall_118 = ((globals[("MidirExpr")])(funcall_117));
(if_279 = funcall_118);
} else {
var funcall_119 = ((globals[("=")])(_gensym_626_7, (Symbol.create("js:code"))));
var if_278 = (null);
if (funcall_119) {
var funcall_120 = ((globals[("tail")])(exp_0));
var funcall_121 = ((globals[("head")])(funcall_120));
var funcall_122 = ((globals[("midir:code")])(funcall_121));
var funcall_123 = ((globals[("midir:nop")])());
var funcall_124 = ((globals[("MidirStatement")])(funcall_122, funcall_123));
(if_278 = funcall_124);
} else {
var funcall_125 = ((globals[("=")])(_gensym_626_7, (Symbol.create("js:binop"))));
var if_277 = (null);
if (funcall_125) {
var funcall_135 = ((globals[("tail")])(exp_0));
var funcall_136 = ((globals[("tail")])(funcall_135));
var funcall_137 = ((globals[("head")])(funcall_136));
var funcall_138 = (comp_4(funcall_137));
var funcall_139 = ((globals[("tail")])(exp_0));
var funcall_140 = ((globals[("tail")])(funcall_139));
var funcall_141 = ((globals[("tail")])(funcall_140));
var funcall_142 = ((globals[("head")])(funcall_141));
var funcall_143 = (comp_4(funcall_142));
var funcall_144 = ((function (expl_126, expr_16) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_134 = ((globals[("midir-splice")])(expl_126, (function (el_127) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_133 = ((globals[("midir-splice")])(expr_16, (function (er_128) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_129 = ((globals[("tail")])(exp_0));
var funcall_130 = ((globals[("head")])(funcall_129));
var funcall_131 = ((globals[("midir:binop")])(funcall_130, el_127, er_128));
var funcall_132 = ((globals[("MidirExpr")])(funcall_131));
return funcall_132;
})));
return funcall_133;
})));
return funcall_134;
})(funcall_138, funcall_143));
(if_277 = funcall_144);
} else {
var funcall_145 = ((globals[("=")])(_gensym_626_7, (Symbol.create("js:unop"))));
var if_276 = (null);
if (funcall_145) {
var funcall_151 = ((globals[("tail")])(exp_0));
var funcall_152 = ((globals[("tail")])(funcall_151));
var funcall_153 = ((globals[("head")])(funcall_152));
var funcall_154 = (comp_4(funcall_153));
var funcall_155 = ((function (expr_16) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_150 = ((globals[("midir-splice")])(expr_16, (function (e_5) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_146 = ((globals[("tail")])(exp_0));
var funcall_147 = ((globals[("head")])(funcall_146));
var funcall_148 = ((globals[("midir:unop")])(funcall_147, e_5));
var funcall_149 = ((globals[("MidirExpr")])(funcall_148));
return funcall_149;
})));
return funcall_150;
})(funcall_154));
(if_276 = funcall_155);
} else {
var funcall_156 = ((globals[("=")])(_gensym_626_7, (Symbol.create("js:prop"))));
var if_275 = (null);
if (funcall_156) {
var funcall_163 = ((globals[("tail")])(exp_0));
var funcall_164 = ((globals[("head")])(funcall_163));
var funcall_165 = (comp_4(funcall_164));
var funcall_166 = ((globals[("tail")])(exp_0));
var funcall_167 = ((globals[("tail")])(funcall_166));
var funcall_168 = ((globals[("head")])(funcall_167));
var funcall_169 = (comp_4(funcall_168));
var funcall_170 = ((function (expr_16, iexpr_157) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_162 = ((globals[("midir-splice")])(expr_16, (function (e_5) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_161 = ((globals[("midir-splice")])(iexpr_157, (function (ie_158) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_159 = ((globals[("midir:prop")])(e_5, ie_158));
var funcall_160 = ((globals[("MidirExpr")])(funcall_159));
return funcall_160;
})));
return funcall_161;
})));
return funcall_162;
})(funcall_165, funcall_169));
(if_275 = funcall_170);
} else {
var funcall_171 = ((globals[("=")])(_gensym_626_7, (Symbol.create("js:throw"))));
var if_274 = (null);
if (funcall_171) {
var funcall_177 = ((globals[("nth")])(exp_0, (1)));
var funcall_178 = ((function (expr_16) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_172 = (comp_4(expr_16));
var funcall_176 = ((globals[("midir-splice")])(funcall_172, (function (el_127) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_173 = ((globals[("midir:throw")])(el_127));
var funcall_174 = ((globals[("midir:nop")])());
var funcall_175 = ((globals[("MidirStatement")])(funcall_173, funcall_174));
return funcall_175;
})));
return funcall_176;
})(funcall_177));
(if_274 = funcall_178);
} else {
var funcall_179 = ((globals[("=")])(_gensym_626_7, (Symbol.create("js:try"))));
var if_273 = (null);
if (funcall_179) {
var funcall_208 = ((globals[("nth")])(exp_0, (1)));
var funcall_209 = ((globals[("nth")])(exp_0, (2)));
var funcall_210 = (igen_2((Symbol.create("get")), funcall_209));
var funcall_211 = ((globals[("nth")])(exp_0, (3)));
var funcall_212 = ((globals[("nth")])(exp_0, (4)));
var funcall_213 = (igen_2((Symbol.create("new")), ("try")));
var funcall_214 = ((function (texp_180, cv_181, cexp_182, fexp_183, outvar_31) {
if (arguments.length < 5) {
  throw new Error("Expecting at least 5 arguments.");
}
if (arguments.length > 5) {
  throw new Error("Expecting at most 5 arguments.");
}
;
var funcall_205 = ((globals[("nth")])(exp_0, (2)));
var funcall_206 = ((globals[("make-js-env")])(env_1, funcall_205, cv_181));
var funcall_207 = ((function (env2_184) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_185 = ((globals[("midir:nop")])());
var funcall_186 = ((globals[("midir:def")])(outvar_31, funcall_185));
var funcall_187 = (comp_4(texp_180));
var funcall_190 = ((globals[("midir-splice")])(funcall_187, (function (te_188) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_189 = ((globals[("midir-set")])(outvar_31, te_188));
return funcall_189;
})));
var funcall_191 = ((globals[("midir-close")])(funcall_190));
var funcall_192 = ((globals[("compile-to-midir")])(cexp_182, env2_184, igen_2));
var funcall_194 = ((globals[("midir-splice")])(funcall_192, (function (ce_32) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_193 = ((globals[("midir-set")])(outvar_31, ce_32));
return funcall_193;
})));
var funcall_195 = ((globals[("midir-close")])(funcall_194));
var funcall_196 = ((globals[("null?")])(fexp_183));
var if_199 = (null);
if (funcall_196) {
(if_199 = (null));
} else {
var funcall_197 = (comp_4(fexp_183));
var funcall_198 = ((globals[("midir-close")])(funcall_197));
(if_199 = funcall_198);
}
var funcall_200 = ((globals[("midir:try")])(funcall_191, cv_181, funcall_195, if_199));
var funcall_201 = ((globals[("list")])(funcall_186, funcall_200));
var funcall_202 = ((globals[("midir:seq")])(funcall_201));
var funcall_203 = ((globals[("midir:lookup")])(outvar_31));
var funcall_204 = ((globals[("MidirStatement")])(funcall_202, funcall_203));
return funcall_204;
})(funcall_206));
return funcall_207;
})(funcall_208, funcall_210, funcall_211, funcall_212, funcall_213));
(if_273 = funcall_214);
} else {
var funcall_215 = ((globals[("=")])(_gensym_626_7, (Symbol.create("js:function"))));
var if_272 = (null);
if (funcall_215) {
var funcall_250 = ((globals[("nth")])(exp_0, (1)));
var funcall_251 = ((function (name_216) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_247 = ((globals[("nth")])(exp_0, (2)));
var funcall_248 = ((globals[("map")])((function (a_245) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_246 = (igen_2((Symbol.create("get")), a_245));
return funcall_246;
}), funcall_247));
var funcall_249 = ((function (args_217) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_239 = ((globals[("null?")])(name_216));
var if_243 = (null);
if (funcall_239) {
var funcall_240 = ((globals[("nth")])(exp_0, (2)));
(if_243 = funcall_240);
} else {
var funcall_241 = ((globals[("nth")])(exp_0, (2)));
var funcall_242 = ((globals[("cons")])(name_216, funcall_241));
(if_243 = funcall_242);
}
var funcall_244 = ((function (argse_218) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_237 = ((globals[("nth")])(exp_0, (3)));
var funcall_238 = ((function (body_59) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_233 = ((globals[("map-append")])((function (v_230) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_231 = (igen_2((Symbol.create("get")), v_230));
var funcall_232 = ((globals[("list")])(v_230, funcall_231));
return funcall_232;
}), argse_218));
var funcall_234 = ((globals[("cons")])(env_1, funcall_233));
var funcall_235 = ((globals[("apply")])((globals[("make-js-env")]), funcall_234));
var funcall_236 = ((function (env2_184) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_219 = ((globals[("null?")])(name_216));
var if_221 = (null);
if (funcall_219) {
(if_221 = (null));
} else {
var funcall_220 = (igen_2((Symbol.create("get")), name_216));
(if_221 = funcall_220);
}
var funcall_222 = ((globals[("compile-to-midir")])(body_59, env2_184, igen_2));
var funcall_226 = ((globals[("midir-splice")])(funcall_222, (function (e_5) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_223 = ((globals[("midir:return")])(e_5));
var funcall_224 = ((globals[("midir:nop")])());
var funcall_225 = ((globals[("MidirStatement")])(funcall_223, funcall_224));
return funcall_225;
})));
var funcall_227 = ((globals[("midir-close")])(funcall_226));
var funcall_228 = ((globals[("midir:function")])(if_221, args_217, funcall_227));
var funcall_229 = ((globals[("MidirExpr")])(funcall_228));
return funcall_229;
})(funcall_235));
return funcall_236;
})(funcall_237));
return funcall_238;
})(if_243));
return funcall_244;
})(funcall_248));
return funcall_249;
})(funcall_250));
(if_272 = funcall_251);
} else {
var funcall_252 = ((globals[("head")])(exp_0));
var funcall_253 = (comp_4(funcall_252));
var funcall_271 = ((globals[("midir-splice")])(funcall_253, (function (f_254) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_266 = ((globals[("tail")])(exp_0));
var funcall_267 = ((globals[("map")])(comp_4, funcall_266));
var funcall_268 = ((globals[("midir-unlist")])(funcall_267));
var funcall_269 = (igen_2((Symbol.create("new")), ("funcall")));
var funcall_270 = ((function (ul_255, outvar_31) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_256 = ((globals[("head")])(ul_255));
var funcall_257 = ((globals[("midir:seq")])(funcall_256));
var funcall_258 = ((globals[("tail")])(ul_255));
var funcall_259 = ((globals[("head")])(funcall_258));
var funcall_260 = ((globals[("midir:funcall")])(f_254, funcall_259));
var funcall_261 = ((globals[("midir:def")])(outvar_31, funcall_260));
var funcall_262 = ((globals[("list")])(funcall_257, funcall_261));
var funcall_263 = ((globals[("midir:seq")])(funcall_262));
var funcall_264 = ((globals[("midir:lookup")])(outvar_31));
var funcall_265 = ((globals[("MidirStatement")])(funcall_263, funcall_264));
return funcall_265;
})(funcall_268, funcall_269));
return funcall_270;
})));
(if_272 = funcall_271);
}
(if_273 = if_272);
}
(if_274 = if_273);
}
(if_275 = if_274);
}
(if_276 = if_275);
}
(if_277 = if_276);
}
(if_278 = if_277);
}
(if_279 = if_278);
}
(if_280 = if_279);
}
(if_281 = if_280);
}
(if_282 = if_281);
}
(if_283 = if_282);
}
(if_284 = if_283);
}
(if_285 = if_284);
}
(if_286 = if_285);
}
(if_287 = if_286);
}
return if_287;
})(funcall_288));
return funcall_289;
}));
(null);


((globals[("midir-expr-to-js")]) = (function midir_expr_to_js_1(m_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_64 = ((function (_gensym_631_2) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_3 = ((globals[("midir:js?")])(_gensym_631_2));
var if_63 = (null);
if (funcall_3) {
var funcall_6 = ((globals[("destruct-midir:js")])(_gensym_631_2, (function (code_4) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_5 = ((globals[("++")])(("("), code_4, (")")));
return funcall_5;
})));
(if_63 = funcall_6);
} else {
var funcall_7 = ((globals[("midir:binop?")])(_gensym_631_2));
var if_62 = (null);
if (funcall_7) {
var funcall_14 = ((globals[("destruct-midir:binop")])(_gensym_631_2, (function (op_8, expl_9, expr_10) {
if (arguments.length < 3) {
  throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
  throw new Error("Expecting at most 3 arguments.");
}
;
var funcall_11 = (midir_expr_to_js_1(expl_9));
var funcall_12 = (midir_expr_to_js_1(expr_10));
var funcall_13 = ((globals[("++")])(("("), funcall_11, (" "), op_8, (" "), funcall_12, (")")));
return funcall_13;
})));
(if_62 = funcall_14);
} else {
var funcall_15 = ((globals[("midir:unop?")])(_gensym_631_2));
var if_61 = (null);
if (funcall_15) {
var funcall_19 = ((globals[("destruct-midir:unop")])(_gensym_631_2, (function (op_8, exp_16) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_17 = (midir_expr_to_js_1(exp_16));
var funcall_18 = ((globals[("++")])(("("), op_8, (" "), funcall_17, (")")));
return funcall_18;
})));
(if_61 = funcall_19);
} else {
var funcall_20 = ((globals[("midir:prop?")])(_gensym_631_2));
var if_60 = (null);
if (funcall_20) {
var funcall_25 = ((globals[("destruct-midir:prop")])(_gensym_631_2, (function (exp_16, iexp_21) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_22 = (midir_expr_to_js_1(exp_16));
var funcall_23 = (midir_expr_to_js_1(iexp_21));
var funcall_24 = ((globals[("++")])(("("), funcall_22, ("["), funcall_23, ("])")));
return funcall_24;
})));
(if_60 = funcall_25);
} else {
var funcall_26 = ((globals[("midir:lit?")])(_gensym_631_2));
var if_59 = (null);
if (funcall_26) {
var funcall_30 = ((globals[("destruct-midir:lit")])(_gensym_631_2, (function (s_27) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_28 = ((globals[("midir-lit-to-js")])(s_27));
var funcall_29 = ((globals[("++")])(("("), funcall_28, (")")));
return funcall_29;
})));
(if_59 = funcall_30);
} else {
var funcall_31 = ((globals[("midir:lookup?")])(_gensym_631_2));
var if_58 = (null);
if (funcall_31) {
var funcall_32 = ((globals[("destruct-midir:lookup")])(_gensym_631_2, (function (s_27) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
return s_27;
})));
(if_58 = funcall_32);
} else {
var funcall_33 = ((globals[("midir:funcall?")])(_gensym_631_2));
var if_57 = (null);
if (funcall_33) {
var funcall_40 = ((globals[("destruct-midir:funcall")])(_gensym_631_2, (function (f_34, args_35) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_36 = (midir_expr_to_js_1(f_34));
var funcall_37 = ((globals[("map")])(midir_expr_to_js_1, args_35));
var funcall_38 = ((globals[("s:join")])((", "), funcall_37));
var funcall_39 = ((globals[("++")])(("("), funcall_36, ("("), funcall_38, ("))")));
return funcall_39;
})));
(if_57 = funcall_40);
} else {
var funcall_41 = ((globals[("midir:function?")])(_gensym_631_2));
var if_56 = (null);
if (funcall_41) {
var funcall_49 = ((globals[("destruct-midir:function")])(_gensym_631_2, (function (mname_42, args_35, body_43) {
if (arguments.length < 3) {
  throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
  throw new Error("Expecting at most 3 arguments.");
}
;
var funcall_44 = ((globals[("null?")])(mname_42));
var if_45 = (null);
if (funcall_44) {
(if_45 = (""));
} else {
(if_45 = mname_42);
}
var funcall_46 = ((globals[("s:join")])((", "), args_35));
var funcall_47 = ((globals[("midir-statement-to-js")])(body_43));
var funcall_48 = ((globals[("++")])(("(function "), if_45, ("("), funcall_46, (") {\n"), funcall_47, ("})")));
return funcall_48;
})));
(if_56 = funcall_49);
} else {
var funcall_50 = ((globals[("midir:nop?")])(_gensym_631_2));
var if_55 = (null);
if (funcall_50) {
var funcall_51 = ((globals[("destruct-midir:nop")])(_gensym_631_2, (function () {
if (arguments.length > 0) {
  throw new Error("Expecting at most 0 arguments.");
}
;
return ("(null)");
})));
(if_55 = funcall_51);
} else {
var funcall_52 = ((globals[("repr")])(m_0));
var funcall_53 = ((globals[("++")])(("Unknown expr: "), funcall_52));
var funcall_54 = ((globals[("error")])(funcall_53));
(if_55 = funcall_54);
}
(if_56 = if_55);
}
(if_57 = if_56);
}
(if_58 = if_57);
}
(if_59 = if_58);
}
(if_60 = if_59);
}
(if_61 = if_60);
}
(if_62 = if_61);
}
(if_63 = if_62);
}
return if_63;
})(m_0));
return funcall_64;
}));
(null);


((globals[("midir-statement-to-js")]) = (function midir_statement_to_js_1(m_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_74 = ((function (_gensym_632_2) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_3 = ((globals[("midir:code?")])(_gensym_632_2));
var if_73 = (null);
if (funcall_3) {
var funcall_6 = ((globals[("destruct-midir:code")])(_gensym_632_2, (function (code_4) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_5 = ((globals[("++")])(code_4, (";\n")));
return funcall_5;
})));
(if_73 = funcall_6);
} else {
var funcall_7 = ((globals[("midir:expr?")])(_gensym_632_2));
var if_72 = (null);
if (funcall_7) {
var funcall_11 = ((globals[("destruct-midir:expr")])(_gensym_632_2, (function (expr_8) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_9 = ((globals[("midir-expr-to-js")])(expr_8));
var funcall_10 = ((globals[("++")])(funcall_9, (";\n")));
return funcall_10;
})));
(if_72 = funcall_11);
} else {
var funcall_12 = ((globals[("midir:def?")])(_gensym_632_2));
var if_71 = (null);
if (funcall_12) {
var funcall_16 = ((globals[("destruct-midir:def")])(_gensym_632_2, (function (var_13, expr_8) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_14 = ((globals[("midir-expr-to-js")])(expr_8));
var funcall_15 = ((globals[("++")])(("var "), var_13, (" = "), funcall_14, (";\n")));
return funcall_15;
})));
(if_71 = funcall_16);
} else {
var funcall_17 = ((globals[("midir:if?")])(_gensym_632_2));
var if_70 = (null);
if (funcall_17) {
var funcall_24 = ((globals[("destruct-midir:if")])(_gensym_632_2, (function (expr_8, bcons_18, balt_19) {
if (arguments.length < 3) {
  throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
  throw new Error("Expecting at most 3 arguments.");
}
;
var funcall_20 = ((globals[("midir-expr-to-js")])(expr_8));
var funcall_21 = (midir_statement_to_js_1(bcons_18));
var funcall_22 = (midir_statement_to_js_1(balt_19));
var funcall_23 = ((globals[("++")])(("if ("), funcall_20, (") {\n"), funcall_21, ("} else {\n"), funcall_22, ("}\n")));
return funcall_23;
})));
(if_70 = funcall_24);
} else {
var funcall_25 = ((globals[("midir:while?")])(_gensym_632_2));
var if_69 = (null);
if (funcall_25) {
var funcall_30 = ((globals[("destruct-midir:while")])(_gensym_632_2, (function (expr_8, body_26) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_27 = ((globals[("midir-expr-to-js")])(expr_8));
var funcall_28 = (midir_statement_to_js_1(body_26));
var funcall_29 = ((globals[("++")])(("while ("), funcall_27, (") {\n"), funcall_28, ("}\n")));
return funcall_29;
})));
(if_69 = funcall_30);
} else {
var funcall_31 = ((globals[("midir:return?")])(_gensym_632_2));
var if_68 = (null);
if (funcall_31) {
var funcall_34 = ((globals[("destruct-midir:return")])(_gensym_632_2, (function (expr_8) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_32 = ((globals[("midir-expr-to-js")])(expr_8));
var funcall_33 = ((globals[("++")])(("return "), funcall_32, (";\n")));
return funcall_33;
})));
(if_68 = funcall_34);
} else {
var funcall_35 = ((globals[("midir:break?")])(_gensym_632_2));
var if_67 = (null);
if (funcall_35) {
var funcall_36 = ((globals[("destruct-midir:break")])(_gensym_632_2, (function () {
if (arguments.length > 0) {
  throw new Error("Expecting at most 0 arguments.");
}
;
return ("break;\n");
})));
(if_67 = funcall_36);
} else {
var funcall_37 = ((globals[("midir:continue?")])(_gensym_632_2));
var if_66 = (null);
if (funcall_37) {
var funcall_38 = ((globals[("destruct-midir:continue")])(_gensym_632_2, (function () {
if (arguments.length > 0) {
  throw new Error("Expecting at most 0 arguments.");
}
;
return ("break;\n");
})));
(if_66 = funcall_38);
} else {
var funcall_39 = ((globals[("midir:throw?")])(_gensym_632_2));
var if_65 = (null);
if (funcall_39) {
var funcall_42 = ((globals[("destruct-midir:throw")])(_gensym_632_2, (function (expr_8) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_40 = ((globals[("midir-expr-to-js")])(expr_8));
var funcall_41 = ((globals[("++")])(("throw "), funcall_40, (";\n")));
return funcall_41;
})));
(if_65 = funcall_42);
} else {
var funcall_43 = ((globals[("midir:try?")])(_gensym_632_2));
var if_64 = (null);
if (funcall_43) {
var funcall_54 = ((globals[("destruct-midir:try")])(_gensym_632_2, (function (ts_44, var_13, cs_45, mfinally_46) {
if (arguments.length < 4) {
  throw new Error("Expecting at least 4 arguments.");
}
if (arguments.length > 4) {
  throw new Error("Expecting at most 4 arguments.");
}
;
var funcall_47 = (midir_statement_to_js_1(ts_44));
var funcall_48 = (midir_statement_to_js_1(cs_45));
var funcall_49 = ((globals[("null?")])(mfinally_46));
var if_52 = (null);
if (funcall_49) {
(if_52 = (""));
} else {
var funcall_50 = (midir_statement_to_js_1(mfinally_46));
var funcall_51 = ((globals[("++")])((" finally {\n"), funcall_50, ("}")));
(if_52 = funcall_51);
}
var funcall_53 = ((globals[("++")])(("try {\n"), funcall_47, ("} catch ("), var_13, (") {\n"), funcall_48, ("}"), if_52, ("\n")));
return funcall_53;
})));
(if_64 = funcall_54);
} else {
var funcall_55 = ((globals[("midir:seq?")])(_gensym_632_2));
var if_63 = (null);
if (funcall_55) {
var funcall_59 = ((globals[("destruct-midir:seq")])(_gensym_632_2, (function (statements_56) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_57 = ((globals[("map")])(midir_statement_to_js_1, statements_56));
var funcall_58 = ((globals[("s:join")])((""), funcall_57));
return funcall_58;
})));
(if_63 = funcall_59);
} else {
var funcall_60 = ((globals[("repr")])(m_0));
var funcall_61 = ((globals[("++")])(("Unknown statement: "), funcall_60));
var funcall_62 = ((globals[("error")])(funcall_61));
(if_63 = funcall_62);
}
(if_64 = if_63);
}
(if_65 = if_64);
}
(if_66 = if_65);
}
(if_67 = if_66);
}
(if_68 = if_67);
}
(if_69 = if_68);
}
(if_70 = if_69);
}
(if_71 = if_70);
}
(if_72 = if_71);
}
(if_73 = if_72);
}
return if_73;
})(m_0));
return funcall_74;
}));
(null);


((globals[("midir-lit-to-js")]) = (function midir_lit_to_js_1(l_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_2 = ((globals[("nil?")])(l_0));
var if_33 = (null);
if (funcall_2) {
(if_33 = ("new Nil()"));
} else {
var funcall_3 = ((globals[("cons?")])(l_0));
var if_32 = (null);
if (funcall_3) {
var funcall_4 = ((globals[("head")])(l_0));
var funcall_5 = (midir_lit_to_js_1(funcall_4));
var funcall_6 = ((globals[("tail")])(l_0));
var funcall_7 = (midir_lit_to_js_1(funcall_6));
var funcall_8 = ((globals[("++")])(("new Cons("), funcall_5, (", "), funcall_7, (")")));
(if_32 = funcall_8);
} else {
var funcall_9 = ((globals[("null?")])(l_0));
var if_31 = (null);
if (funcall_9) {
(if_31 = ("null"));
} else {
var funcall_10 = ((globals[("boolean?")])(l_0));
var if_30 = (null);
if (funcall_10) {
var if_11 = (null);
if (l_0) {
(if_11 = ("true"));
} else {
(if_11 = ("false"));
}
(if_30 = if_11);
} else {
var funcall_12 = ((globals[("symbol?")])(l_0));
var if_29 = (null);
if (funcall_12) {
var funcall_13 = ((globals[("symbol->string")])(l_0));
var funcall_14 = ((globals[("js-escape-string")])(funcall_13));
var funcall_15 = ((globals[("gensym?")])(l_0));
var if_17 = (null);
if (funcall_15) {
var funcall_16 = ((globals[("error")])(("Can't compile non-interned symbol")));
(if_17 = funcall_16);
} else {
(if_17 = (""));
}
var funcall_18 = ((globals[("++")])(("Symbol.create("), funcall_14, if_17, (")")));
(if_29 = funcall_18);
} else {
var funcall_19 = ((globals[("number?")])(l_0));
var if_28 = (null);
if (funcall_19) {
var funcall_20 = ((globals[("js:toString")])(l_0));
(if_28 = funcall_20);
} else {
var funcall_21 = ((globals[("string?")])(l_0));
var if_27 = (null);
if (funcall_21) {
var funcall_22 = ((globals[("js-escape-string")])(l_0));
(if_27 = funcall_22);
} else {
var if_26 = (null);
if ((true)) {
var funcall_23 = ((globals[("repr")])(l_0));
var funcall_24 = ((globals[("++")])(("Cannot compile literal: "), funcall_23));
var funcall_25 = ((globals[("error")])(funcall_24));
(if_26 = funcall_25);
} else {
(if_26 = (null));
}
(if_27 = if_26);
}
(if_28 = if_27);
}
(if_29 = if_28);
}
(if_30 = if_29);
}
(if_31 = if_30);
}
(if_32 = if_31);
}
(if_33 = if_32);
}
return if_33;
}));
(null);


((globals[("clean-js-identifier")]) = (function clean_js_identifier_1(s_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var _ci_2 = (function _ci_2(i_3) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_4 = ((globals[("s:length")])(s_0));
var funcall_5 = ((globals[("<")])(i_3, funcall_4));
var if_43 = (null);
if (funcall_5) {
var funcall_34 = ((globals[("s:charAt")])(s_0, i_3));
var funcall_35 = ((globals[("<=")])(("A"), funcall_34));
var funcall_36 = ((function (_gensym_641_30) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var if_33 = (null);
if (_gensym_641_30) {
var funcall_31 = ((globals[("s:charAt")])(s_0, i_3));
var funcall_32 = ((globals[("<=")])(funcall_31, ("Z")));
(if_33 = funcall_32);
} else {
(if_33 = _gensym_641_30);
}
return if_33;
})(funcall_35));
var funcall_37 = ((function (_gensym_636_6) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var if_29 = (null);
if (_gensym_636_6) {
(if_29 = _gensym_636_6);
} else {
var funcall_25 = ((globals[("s:charAt")])(s_0, i_3));
var funcall_26 = ((globals[("<=")])(("a"), funcall_25));
var funcall_27 = ((function (_gensym_640_21) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var if_24 = (null);
if (_gensym_640_21) {
var funcall_22 = ((globals[("s:charAt")])(s_0, i_3));
var funcall_23 = ((globals[("<=")])(funcall_22, ("z")));
(if_24 = funcall_23);
} else {
(if_24 = _gensym_640_21);
}
return if_24;
})(funcall_26));
var funcall_28 = ((function (_gensym_637_7) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var if_20 = (null);
if (_gensym_637_7) {
(if_20 = _gensym_637_7);
} else {
var funcall_16 = ((globals[("s:charAt")])(s_0, i_3));
var funcall_17 = ((globals[("<=")])(("0"), funcall_16));
var funcall_18 = ((function (_gensym_639_12) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var if_15 = (null);
if (_gensym_639_12) {
var funcall_13 = ((globals[("s:charAt")])(s_0, i_3));
var funcall_14 = ((globals[("<=")])(funcall_13, ("9")));
(if_15 = funcall_14);
} else {
(if_15 = _gensym_639_12);
}
return if_15;
})(funcall_17));
var funcall_19 = ((function (_gensym_638_8) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var if_11 = (null);
if (_gensym_638_8) {
(if_11 = _gensym_638_8);
} else {
var funcall_9 = ((globals[("s:charAt")])(s_0, i_3));
var funcall_10 = ((globals[("=")])(("$"), funcall_9));
(if_11 = funcall_10);
}
return if_11;
})(funcall_18));
(if_20 = funcall_19);
}
return if_20;
})(funcall_27));
(if_29 = funcall_28);
}
return if_29;
})(funcall_36));
var if_39 = (null);
if (funcall_37) {
var funcall_38 = ((globals[("s:charAt")])(s_0, i_3));
(if_39 = funcall_38);
} else {
(if_39 = ("_"));
}
var funcall_40 = ((globals[("+")])(i_3, (1)));
var funcall_41 = (_ci_2(funcall_40));
var funcall_42 = ((globals[("cons")])(if_39, funcall_41));
(if_43 = funcall_42);
} else {
(if_43 = (new Nil()));
}
return if_43;
});
var funcall_44 = (_ci_2((0)));
var funcall_45 = ((globals[("apply")])((globals[("++")]), funcall_44));
return funcall_45;
}));
(null);


((globals[("make-js-ident-gen")]) = (function make_js_ident_gen_0() {
if (arguments.length > 0) {
  throw new Error("Expecting at most 0 arguments.");
}
;
var funcall_28 = ((globals[("dict")])());
var funcall_29 = ((function (ids_1, nextnum_2) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
return (function (msg_3) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
;
var args_4 = ((function (args) {
  var vargs = new Nil();
  for (var i = args.length - 1; i >= 1; i--) {
    vargs = new Cons(args[i], vargs);
  }
  return vargs;
})(arguments));
var funcall_26 = ((function (_gensym_647_5) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_6 = ((globals[("=")])(_gensym_647_5, (Symbol.create("get"))));
var if_25 = (null);
if (funcall_6) {
(if_25 = (function (symb_7) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_8 = ((globals[("dict:has?")])(ids_1, symb_7));
var if_17 = (null);
if (funcall_8) {
var funcall_9 = ((globals[("dict:get")])(ids_1, symb_7));
(if_17 = funcall_9);
} else {
var funcall_13 = ((globals[("symbol->string")])(symb_7));
var funcall_14 = ((globals[("clean-js-identifier")])(funcall_13));
var funcall_15 = ((globals[("++")])(funcall_14, ("_"), nextnum_2));
var funcall_16 = ((function (id_10) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_11 = ((globals[("+")])((1), nextnum_2));
(nextnum_2 = funcall_11);
var funcall_12 = ((globals[("dict:set!")])(ids_1, symb_7, id_10));
funcall_12;
return id_10;
})(funcall_15));
(if_17 = funcall_16);
}
return if_17;
}));
} else {
var funcall_18 = ((globals[("=")])(_gensym_647_5, (Symbol.create("new"))));
var if_24 = (null);
if (funcall_18) {
(if_24 = (function (prefix_19) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_22 = ((globals[("++")])(prefix_19, ("_"), nextnum_2));
var funcall_23 = ((function (_gensym_648_20) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_21 = ((globals[("+")])((1), nextnum_2));
(nextnum_2 = funcall_21);
return _gensym_648_20;
})(funcall_22));
return funcall_23;
}));
} else {
(if_24 = (null));
}
(if_25 = if_24);
}
return if_25;
})(msg_3));
var funcall_27 = ((globals[("apply")])(funcall_26, args_4));
return funcall_27;
});
})(funcall_28, (0)));
return funcall_29;
}));
(null);


((globals[("eval")]) = (function eval_1(s_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_2 = ((globals[("eval-in-env")])(s_0, (globals[("global-env")])));
return funcall_2;
}));
(null);


((globals[("eval-in-env")]) = (function eval_in_env_2(s_0, env_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_15 = ((globals[("macro-expand")])(s_0, env_1));
var funcall_16 = ((function (s2_3) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_10 = ((globals[("make-js-env")])((null)));
var funcall_11 = ((globals[("make-js-ident-gen")])());
var funcall_12 = ((globals[("compile-to-midir-toplevel")])(s2_3, funcall_10, funcall_11));
var funcall_13 = ((globals[("midir-close")])(funcall_12));
var funcall_14 = ((function (midir_4) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_8 = ((globals[("midir-statement-to-js")])(midir_4));
var funcall_9 = ((function (js_5) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_6 = ((globals[("print")])(js_5));
funcall_6;
var funcall_7 = (env_1((Symbol.create("eval")), js_5));
return funcall_7;
})(funcall_8));
return funcall_9;
})(funcall_13));
return funcall_14;
})(funcall_15));
return funcall_16;
}));
(null);


((globals[("compile-stream")]) = (function compile_stream_1(s_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_8 = ((function (res_2) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_3 = ((globals[("read:has-another?")])(s_0));
var while_7 = funcall_3;
while (while_7) {
var funcall_5 = ((globals[("read")])(s_0));
var funcall_6 = ((globals[("eval-in-env")])(funcall_5, (globals[("global-env")])));
(res_2 = funcall_6);
var funcall_4 = ((globals[("read:has-another?")])(s_0));
(while_7 = funcall_4);
}
return res_2;
})((null)));
return funcall_8;
}));
(null);


((globals[("compile-file")]) = (function compile_file_1(fn_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_4 = ((globals[("load-file")])(fn_0));
var funcall_5 = ((globals[("stream:make")])(fn_0, funcall_4));
var funcall_6 = ((function (s_2) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_3 = ((globals[("compile-stream")])(s_2));
return funcall_3;
})(funcall_5));
return funcall_6;
}));
(null);


var funcall_0 = ((globals[("global-env")])((Symbol.create("set!")), (Symbol.create("compile-file")), (globals[("compile-file")])));
funcall_0;


((globals[("compile-string")]) = (function compile_string_1(str_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_4 = ((globals[("stream:make")])(("<input>"), str_0));
var funcall_5 = ((function (s_2) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_3 = ((globals[("compile-stream")])(s_2));
return funcall_3;
})(funcall_4));
return funcall_5;
}));
(null);


((globals[("write-code")]) = (function write_code_2(output_file_0, global_env_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_4 = (global_env_1((Symbol.create("code"))));
var funcall_5 = ((globals[("++")])(("module.exports = (function () {\nvar globals={};\n\n"), funcall_4, ("return globals;"), ("\n})();\n")));
var code_3 = funcall_5;
var funcall_6 = (global_env_1((Symbol.create("has?")), ("main")));
var if_8 = (null);
if (funcall_6) {
var funcall_7 = ((globals[("++")])(code_3, ("if (process && !module.parent) module.exports.main(module.exports.list.apply(undefined, process.argv.slice(2)));\n")));
(if_8 = (code_3 = funcall_7));
} else {
(if_8 = (null));
}
if_8;
var funcall_9 = ((globals[("write-file")])(output_file_0, code_3));
return funcall_9;
}));
(null);


((globals[("write-file")]) = (function write_file_2(filename_0, content_1) {
if (arguments.length < 2) {
  throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
  throw new Error("Expecting at most 2 arguments.");
}
;
var funcall_6 = ((function (fs_3) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_4 = ((globals[("dict")])((Symbol.create("encoding")), ("utf8")));
var funcall_5 = ((fs_3[("writeFileSync")])(filename_0, content_1, funcall_4));
funcall_5;
return (null);
})((require('fs'))));
return funcall_6;
}));
(null);


((globals[("load-file")]) = (function load_file_1(filename_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_5 = ((function (fs_2) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_3 = ((globals[("dict")])((Symbol.create("encoding")), ("utf8")));
var funcall_4 = ((fs_2[("readFileSync")])(filename_0, funcall_3));
return funcall_4;
})((require('fs'))));
return funcall_5;
}));
(null);


((globals[("repl-run-code")]) = (globals[("compile-string")]));
(null);


((globals[("run-repl")]) = (function run_repl_0() {
if (arguments.length > 0) {
  throw new Error("Expecting at most 0 arguments.");
}
;
var funcall_22 = ((function (readline_1) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_19 = ((globals[("dict")])((Symbol.create("input")), (process.stdin), (Symbol.create("output")), (process.stdout)));
var funcall_20 = ((readline_1[("createInterface")])(funcall_19));
var funcall_21 = ((function (rl_2) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_18 = ((function (shouldQuit_3) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_4 = ((rl_2[("setPrompt")])(("> ")));
funcall_4;
var funcall_5 = ((rl_2[("prompt")])());
funcall_5;
var handleLine_6 = (function handleLine(line) {
      try {
        var r = globals['repl-run-code'](line);
        if (r !== null) {
          globals['println'](r);
        }
      } catch (x) {
        console.log(x.stack);
      }
    });
var funcall_10 = ((rl_2[("on")])(("line"), (function (line_7) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
(shouldQuit_3 = (false));
var funcall_8 = (handleLine_6(line_7));
funcall_8;
var funcall_9 = ((rl_2[("prompt")])());
return funcall_9;
})));
funcall_10;
var funcall_12 = ((rl_2[("on")])(("close"), (function () {
if (arguments.length > 0) {
  throw new Error("Expecting at most 0 arguments.");
}
;
var funcall_11 = ((globals[("println")])(("Goodbye!")));
return funcall_11;
})));
funcall_12;
var funcall_17 = ((rl_2[("on")])(("SIGINT"), (function () {
if (arguments.length > 0) {
  throw new Error("Expecting at most 0 arguments.");
}
;
var if_16 = (null);
if (shouldQuit_3) {
var funcall_13 = ((globals[("println")])(("Goodbye!")));
funcall_13;
process.exit(0);;
(if_16 = (null));
} else {
(shouldQuit_3 = (true));
var funcall_14 = ((globals[("println")])(("Press C-c again to quit.")));
funcall_14;
var funcall_15 = ((rl_2[("prompt")])());
(if_16 = funcall_15);
}
return if_16;
})));
return funcall_17;
})((false)));
return funcall_18;
})(funcall_20));
return funcall_21;
})((require('readline'))));
return funcall_22;
}));
(null);


((globals[("main")]) = (function main_1(args_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var input_files_2 = (new Nil());
var output_file_3 = (null);
var funcall_5 = ((globals[("nil?")])(args_0));
var run_repl__4 = funcall_5;
var option_parser_6 = (function option_parser_6(args_0) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_7 = ((globals[("nil?")])(args_0));
var funcall_8 = ((globals[("not")])(funcall_7));
var if_22 = (null);
if (funcall_8) {
var funcall_18 = ((globals[("head")])(args_0));
var funcall_19 = ((function (_gensym_676_9) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_10 = ((globals[("=")])(_gensym_676_9, ("-o")));
var if_17 = (null);
if (funcall_10) {
var funcall_11 = ((globals[("tail")])(args_0));
(args_0 = funcall_11);
var funcall_12 = ((globals[("head")])(args_0));
(if_17 = (output_file_3 = funcall_12));
} else {
var funcall_13 = ((globals[("=")])(_gensym_676_9, ("-r")));
var if_16 = (null);
if (funcall_13) {
(if_16 = (run_repl__4 = (true)));
} else {
var funcall_14 = ((globals[("head")])(args_0));
var funcall_15 = ((globals[("cons")])(funcall_14, input_files_2));
(if_16 = (input_files_2 = funcall_15));
}
(if_17 = if_16);
}
return if_17;
})(funcall_18));
funcall_19;
var funcall_20 = ((globals[("tail")])(args_0));
var funcall_21 = (option_parser_6(funcall_20));
(if_22 = funcall_21);
} else {
(if_22 = (null));
}
return if_22;
});
var funcall_23 = (option_parser_6(args_0));
funcall_23;
var funcall_27 = ((globals[("reversed")])(input_files_2));
var funcall_28 = ((globals[("map")])((function (fn_24) {
if (arguments.length < 1) {
  throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
  throw new Error("Expecting at most 1 arguments.");
}
;
var funcall_25 = ((globals[("print")])(("Compiling "), fn_24, ("\n")));
funcall_25;
var funcall_26 = ((globals[("compile-file")])(fn_24));
return funcall_26;
}), funcall_27));
funcall_28;
var funcall_29 = ((globals[("null?")])(output_file_3));
var funcall_30 = ((globals[("not")])(funcall_29));
var if_33 = (null);
if (funcall_30) {
var funcall_31 = ((globals[("write-code")])(output_file_3, (globals[("global-env")])));
funcall_31;
var funcall_32 = ((globals[("print")])(("Output code to "), output_file_3, ("\n")));
(if_33 = funcall_32);
} else {
(if_33 = (null));
}
if_33;
var if_35 = (null);
if (run_repl__4) {
var funcall_34 = ((globals[("run-repl")])());
(if_35 = funcall_34);
} else {
(if_35 = (null));
}
return if_35;
}));
(null);
return globals;
})();
if (process && !module.parent) module.exports.main(module.exports.list.apply(undefined, process.argv.slice(2)));

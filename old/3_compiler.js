(function () { // Compiled

"use strict";
if (window.Cons === undefined) {
  window.Cons = function Cons(a, b) {
    this.head = a;
    this.tail = b;
  };
  window.Nil = function Nil() {};
}
if (window.JTramp === undefined) {
  window.JTramp = function JTramp(f, args) {
    this.f = f;
    this.args = args;
  };
  window.runJTramp = function (o) {
    while (o instanceof JTramp) {
      o = o.f.apply(undefined, o.args);
    }
    return o;
  };
}
function GlobalEnv() {};
GlobalEnv.prototype = window.lglobal || {};
var lglobal = new GlobalEnv();
_.extend(lglobal, {
  'prim:cons' : function (a, b) { return new Cons(a, b); },
  'prim:cons?' : function (a) { return a instanceof Cons; },
  'prim:head' : function (a) { return a.head; },
  'prim:tail' : function (a) { return a.tail; },
  'prim:nil' : function () { return new Nil(); },
  'prim:nil?' : function (a) { return a instanceof Nil; }
});
window.lglobal = lglobal;
(function () {
var _v1;
var _v2=function (_v3,_v4) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var _v6=lglobal["prim:cons"];
if (_v6 === undefined) { throw new Error("No such global: " + "prim:cons"); }
var _v7=_v6;
_v7=runJTramp(_v7);
if (typeof _v7 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v8=new JTramp(_v7, [runJTramp(_v3),runJTramp(_v4)]);
return _v8;
};
_v1=_v2;
lglobal["cons"]=runJTramp(_v1);
})();
(function () {
var _v73;
var _v74=function (_v75) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v77=lglobal["prim:cons?"];
if (_v77 === undefined) { throw new Error("No such global: " + "prim:cons?"); }
var _v78=_v77;
_v78=runJTramp(_v78);
if (typeof _v78 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v79=new JTramp(_v78, [runJTramp(_v75)]);
return _v79;
};
_v73=_v74;
lglobal["cons?"]=runJTramp(_v73);
})();
(function () {
var _v80;
var _v81=function (_v82) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v84=lglobal["prim:head"];
if (_v84 === undefined) { throw new Error("No such global: " + "prim:head"); }
var _v85=_v84;
_v85=runJTramp(_v85);
if (typeof _v85 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v86=new JTramp(_v85, [runJTramp(_v82)]);
return _v86;
};
_v80=_v81;
lglobal["head"]=runJTramp(_v80);
})();
(function () {
var _v87;
var _v88=function (_v89) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v91=lglobal["prim:tail"];
if (_v91 === undefined) { throw new Error("No such global: " + "prim:tail"); }
var _v92=_v91;
_v92=runJTramp(_v92);
if (typeof _v92 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v93=new JTramp(_v92, [runJTramp(_v89)]);
return _v93;
};
_v87=_v88;
lglobal["tail"]=runJTramp(_v87);
})();
(function () {
var _v94;
var _v95=function () {
if (arguments.length > 0) {
throw new Error("Expecting at most 0 arguments.");
}
var _v97=lglobal["prim:nil"];
if (_v97 === undefined) { throw new Error("No such global: " + "prim:nil"); }
var _v98=_v97;
_v98=runJTramp(_v98);
if (typeof _v98 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v99=new JTramp(_v98, []);
return _v99;
};
_v94=_v95;
lglobal["nil"]=runJTramp(_v94);
})();
(function () {
var _v100;
var _v101=function (_v102) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v104=lglobal["prim:nil?"];
if (_v104 === undefined) { throw new Error("No such global: " + "prim:nil?"); }
var _v105=_v104;
_v105=runJTramp(_v105);
if (typeof _v105 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v106=new JTramp(_v105, [runJTramp(_v102)]);
return _v106;
};
_v100=_v101;
lglobal["nil?"]=runJTramp(_v100);
})();
(function () {
var _v123;
var _v124=function (_v125) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v127=((function (code) { return (undefined || eval)(code); }));
var _v128=_v127;
_v128=runJTramp(_v128);
if (typeof _v128 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v129=new JTramp(_v128, [runJTramp(_v125)]);
return _v129;
};
_v123=_v124;
lglobal["js:eval"]=runJTramp(_v123);
})();
(function () {
var _v130;
var _v131=(
  (function (x) {
    return typeof x === "number";
  })
);
_v130=_v131;
lglobal["number?"]=runJTramp(_v130);
})();
(function () {
var _v132;
var _v133=(
  (function (x) {
    return typeof x === "boolean";
  })
);
_v132=_v133;
lglobal["boolean?"]=runJTramp(_v132);
})();
(function () {
var _v134;
var _v135=(
  (function (x) {
    return typeof x === "string";
  })
);
_v134=_v135;
lglobal["string?"]=runJTramp(_v134);
})();
(function () {
var _v136;
var _v137=(true);
_v136=_v137;
lglobal["true"]=runJTramp(_v136);
})();
(function () {
var _v138;
var _v139=(false);
_v138=_v139;
lglobal["false"]=runJTramp(_v138);
})();
(function () {
var _v140;
var _v141=(null);
_v140=_v141;
lglobal["null"]=runJTramp(_v140);
})();
(function () {
var _v142;
var _v143=(
  (function (x) {
    return x === null;
  })
);
_v142=_v143;
lglobal["null?"]=runJTramp(_v142);
})();
(function () {
var _v144;
var _v145=((function (f, args) {
  var as = [];
  while (!(args instanceof Nil)) {
    as.push(args.head);
    args = args.tail;
  }
  return f.apply(undefined, as);
}));
_v144=_v145;
lglobal["apply"]=runJTramp(_v144);
})();
(function () {
var _v146;
var _v147=((function (s) { throw new Error(s); }));
_v146=_v147;
lglobal["error"]=runJTramp(_v146);
})();
(function () {
var _v148;
var _v149=function () {
var _v150 = new Nil();
for (var _v151 = arguments.length - 1; _v151 >= 0; _v151--) {
  _v150 = new Cons(arguments[_v151], _v150);
}
return _v150;
};
_v148=_v149;
lglobal["list"]=runJTramp(_v148);
})();
(function () {
var _v210;
var _v211=lglobal["true"];
if (_v211 === undefined) { throw new Error("No such global: " + "true"); }
_v210=_v211;
lglobal["otherwise"]=runJTramp(_v210);
})();
(function () {
var _v340;
var _v341=function (_v342,_v343,_v344) {
if (arguments.length < 3) {
throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
throw new Error("Expecting at most 3 arguments.");
}
var _v346;
var _v347=function (_v348,_v349) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var _v351=lglobal["nil?"];
if (_v351 === undefined) { throw new Error("No such global: " + "nil?"); }
var _v352=_v351;
_v352=runJTramp(_v352);
if (typeof _v352 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v353=new JTramp(_v352, [runJTramp(_v349)]);
var _v354;
if(runJTramp(_v353)) {
_v354=_v348;
} else {
var _v355=lglobal["head"];
if (_v355 === undefined) { throw new Error("No such global: " + "head"); }
var _v356=_v355;
_v356=runJTramp(_v356);
if (typeof _v356 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v357=new JTramp(_v356, [runJTramp(_v349)]);
var _v358=_v357;
_v342=runJTramp(_v342);
if (typeof _v342 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v359=new JTramp(_v342, [runJTramp(_v348),runJTramp(_v358)]);
var _v360=_v359;
var _v361=lglobal["tail"];
if (_v361 === undefined) { throw new Error("No such global: " + "tail"); }
var _v362=_v361;
_v362=runJTramp(_v362);
if (typeof _v362 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v363=new JTramp(_v362, [runJTramp(_v349)]);
var _v364=_v363;
_v346=runJTramp(_v346);
if (typeof _v346 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v365=new JTramp(_v346, [runJTramp(_v360),runJTramp(_v364)]);
_v354=_v365;
}
return _v354;
};
var _v366=_v346=runJTramp(_v347);
_v346=runJTramp(_v346);
if (typeof _v346 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v367=new JTramp(_v346, [runJTramp(_v343),runJTramp(_v344)]);
return _v367;
};
_v340=_v341;
lglobal["foldl"]=runJTramp(_v340);
})();
(function () {
var _v368;
var _v369=function (_v370,_v371,_v372) {
if (arguments.length < 3) {
throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
throw new Error("Expecting at most 3 arguments.");
}
var _v374=lglobal["nil?"];
if (_v374 === undefined) { throw new Error("No such global: " + "nil?"); }
var _v375=_v374;
_v375=runJTramp(_v375);
if (typeof _v375 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v376=new JTramp(_v375, [runJTramp(_v372)]);
var _v377;
if(runJTramp(_v376)) {
_v377=_v371;
} else {
var _v378=lglobal["head"];
if (_v378 === undefined) { throw new Error("No such global: " + "head"); }
var _v379=_v378;
_v379=runJTramp(_v379);
if (typeof _v379 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v380=new JTramp(_v379, [runJTramp(_v372)]);
var _v381=_v380;
var _v382=lglobal["tail"];
if (_v382 === undefined) { throw new Error("No such global: " + "tail"); }
var _v383=_v382;
_v383=runJTramp(_v383);
if (typeof _v383 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v384=new JTramp(_v383, [runJTramp(_v372)]);
var _v385=_v384;
var _v386=lglobal["foldr"];
if (_v386 === undefined) { throw new Error("No such global: " + "foldr"); }
var _v387=_v386;
_v387=runJTramp(_v387);
if (typeof _v387 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v388=new JTramp(_v387, [runJTramp(_v370),runJTramp(_v371),runJTramp(_v385)]);
var _v389=_v388;
_v370=runJTramp(_v370);
if (typeof _v370 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v390=new JTramp(_v370, [runJTramp(_v381),runJTramp(_v389)]);
_v377=_v390;
}
return _v377;
};
_v368=_v369;
lglobal["foldr"]=runJTramp(_v368);
})();
(function () {
var _v391;
var _v392=function (_v393,_v394) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var _v396=lglobal["nil?"];
if (_v396 === undefined) { throw new Error("No such global: " + "nil?"); }
var _v397=_v396;
_v397=runJTramp(_v397);
if (typeof _v397 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v398=new JTramp(_v397, [runJTramp(_v394)]);
var _v399;
if(runJTramp(_v398)) {
var _v400=new Nil();
_v399=_v400;
} else {
var _v401=lglobal["head"];
if (_v401 === undefined) { throw new Error("No such global: " + "head"); }
var _v402=_v401;
_v402=runJTramp(_v402);
if (typeof _v402 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v403=new JTramp(_v402, [runJTramp(_v394)]);
var _v404=_v403;
_v393=runJTramp(_v393);
if (typeof _v393 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v405=new JTramp(_v393, [runJTramp(_v404)]);
var _v406=_v405;
var _v407=lglobal["tail"];
if (_v407 === undefined) { throw new Error("No such global: " + "tail"); }
var _v408=_v407;
_v408=runJTramp(_v408);
if (typeof _v408 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v409=new JTramp(_v408, [runJTramp(_v394)]);
var _v410=_v409;
var _v411=lglobal["map"];
if (_v411 === undefined) { throw new Error("No such global: " + "map"); }
var _v412=_v411;
_v412=runJTramp(_v412);
if (typeof _v412 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v413=new JTramp(_v412, [runJTramp(_v393),runJTramp(_v410)]);
var _v414=_v413;
var _v415=lglobal["cons"];
if (_v415 === undefined) { throw new Error("No such global: " + "cons"); }
var _v416=_v415;
_v416=runJTramp(_v416);
if (typeof _v416 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v417=new JTramp(_v416, [runJTramp(_v406),runJTramp(_v414)]);
_v399=_v417;
}
return _v399;
};
_v391=_v392;
lglobal["map"]=runJTramp(_v391);
})();
(function () {
var _v418;
var _v419=function (_v420,_v421) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var _v423=lglobal["nil?"];
if (_v423 === undefined) { throw new Error("No such global: " + "nil?"); }
var _v424=_v423;
_v424=runJTramp(_v424);
if (typeof _v424 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v425=new JTramp(_v424, [runJTramp(_v421)]);
var _v426;
if(runJTramp(_v425)) {
var _v427=lglobal["null"];
if (_v427 === undefined) { throw new Error("No such global: " + "null"); }
_v426=_v427;
} else {
var _v428=lglobal["head"];
if (_v428 === undefined) { throw new Error("No such global: " + "head"); }
var _v429=_v428;
_v429=runJTramp(_v429);
if (typeof _v429 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v430=new JTramp(_v429, [runJTramp(_v421)]);
var _v431=_v430;
_v420=runJTramp(_v420);
if (typeof _v420 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v432=new JTramp(_v420, [runJTramp(_v431)]);
_v432=runJTramp(_v432);
var _v433=lglobal["tail"];
if (_v433 === undefined) { throw new Error("No such global: " + "tail"); }
var _v434=_v433;
_v434=runJTramp(_v434);
if (typeof _v434 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v435=new JTramp(_v434, [runJTramp(_v421)]);
var _v436=_v435;
var _v437=lglobal["each"];
if (_v437 === undefined) { throw new Error("No such global: " + "each"); }
var _v438=_v437;
_v438=runJTramp(_v438);
if (typeof _v438 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v439=new JTramp(_v438, [runJTramp(_v420),runJTramp(_v436)]);
_v426=_v439;
}
return _v426;
};
_v418=_v419;
lglobal["each"]=runJTramp(_v418);
})();
(function () {
var _v440;
var _v441=function (_v442) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v444=lglobal["cons"];
if (_v444 === undefined) { throw new Error("No such global: " + "cons"); }
var _v445=_v444;
var _v446=lglobal["flip"];
if (_v446 === undefined) { throw new Error("No such global: " + "flip"); }
var _v447=_v446;
_v447=runJTramp(_v447);
if (typeof _v447 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v448=new JTramp(_v447, [runJTramp(_v445)]);
var _v449=_v448;
var _v450=new Nil();
var _v451=_v450;
var _v452=lglobal["foldl"];
if (_v452 === undefined) { throw new Error("No such global: " + "foldl"); }
var _v453=_v452;
_v453=runJTramp(_v453);
if (typeof _v453 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v454=new JTramp(_v453, [runJTramp(_v449),runJTramp(_v451),runJTramp(_v442)]);
return _v454;
};
_v440=_v441;
lglobal["reverse"]=runJTramp(_v440);
})();
(function () {
var _v455;
var _v456=function (_v457,_v458) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var _v460=lglobal["nil?"];
if (_v460 === undefined) { throw new Error("No such global: " + "nil?"); }
var _v461=_v460;
_v461=runJTramp(_v461);
if (typeof _v461 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v462=new JTramp(_v461, [runJTramp(_v458)]);
var _v463;
if(runJTramp(_v462)) {
var _v464=new Nil();
_v463=_v464;
} else {
var _v465=lglobal["head"];
if (_v465 === undefined) { throw new Error("No such global: " + "head"); }
var _v466=_v465;
_v466=runJTramp(_v466);
if (typeof _v466 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v467=new JTramp(_v466, [runJTramp(_v458)]);
var _v468=_v467;
_v457=runJTramp(_v457);
if (typeof _v457 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v469=new JTramp(_v457, [runJTramp(_v468)]);
var _v470;
if(runJTramp(_v469)) {
var _v471=lglobal["head"];
if (_v471 === undefined) { throw new Error("No such global: " + "head"); }
var _v472=_v471;
_v472=runJTramp(_v472);
if (typeof _v472 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v473=new JTramp(_v472, [runJTramp(_v458)]);
var _v474=_v473;
var _v475=lglobal["tail"];
if (_v475 === undefined) { throw new Error("No such global: " + "tail"); }
var _v476=_v475;
_v476=runJTramp(_v476);
if (typeof _v476 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v477=new JTramp(_v476, [runJTramp(_v458)]);
var _v478=_v477;
var _v479=lglobal["filter"];
if (_v479 === undefined) { throw new Error("No such global: " + "filter"); }
var _v480=_v479;
_v480=runJTramp(_v480);
if (typeof _v480 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v481=new JTramp(_v480, [runJTramp(_v457),runJTramp(_v478)]);
var _v482=_v481;
var _v483=lglobal["cons"];
if (_v483 === undefined) { throw new Error("No such global: " + "cons"); }
var _v484=_v483;
_v484=runJTramp(_v484);
if (typeof _v484 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v485=new JTramp(_v484, [runJTramp(_v474),runJTramp(_v482)]);
_v470=_v485;
} else {
var _v486=lglobal["otherwise"];
if (_v486 === undefined) { throw new Error("No such global: " + "otherwise"); }
var _v487;
if(runJTramp(_v486)) {
var _v488=lglobal["tail"];
if (_v488 === undefined) { throw new Error("No such global: " + "tail"); }
var _v489=_v488;
_v489=runJTramp(_v489);
if (typeof _v489 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v490=new JTramp(_v489, [runJTramp(_v458)]);
var _v491=_v490;
var _v492=lglobal["filter"];
if (_v492 === undefined) { throw new Error("No such global: " + "filter"); }
var _v493=_v492;
_v493=runJTramp(_v493);
if (typeof _v493 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v494=new JTramp(_v493, [runJTramp(_v457),runJTramp(_v491)]);
_v487=_v494;
} else {
var _v495=null;
_v487=_v495;
}
_v470=_v487;
}
_v463=_v470;
}
return _v463;
};
_v455=_v456;
lglobal["filter"]=runJTramp(_v455);
})();
(function () {
var _v496;
var _v497=function (_v498) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v500=lglobal["nil?"];
if (_v500 === undefined) { throw new Error("No such global: " + "nil?"); }
var _v501=_v500;
_v501=runJTramp(_v501);
if (typeof _v501 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v502=new JTramp(_v501, [runJTramp(_v498)]);
var _v503;
if(runJTramp(_v502)) {
var _v504=new Nil();
_v503=_v504;
} else {
var _v505=lglobal["tail"];
if (_v505 === undefined) { throw new Error("No such global: " + "tail"); }
var _v506=_v505;
_v506=runJTramp(_v506);
if (typeof _v506 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v507=new JTramp(_v506, [runJTramp(_v498)]);
var _v508=_v507;
var _v509=lglobal["nil?"];
if (_v509 === undefined) { throw new Error("No such global: " + "nil?"); }
var _v510=_v509;
_v510=runJTramp(_v510);
if (typeof _v510 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v511=new JTramp(_v510, [runJTramp(_v508)]);
var _v512;
if(runJTramp(_v511)) {
var _v513="Improper alist";
var _v514=_v513;
var _v515=lglobal["error"];
if (_v515 === undefined) { throw new Error("No such global: " + "error"); }
var _v516=_v515;
_v516=runJTramp(_v516);
if (typeof _v516 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v517=new JTramp(_v516, [runJTramp(_v514)]);
_v512=_v517;
} else {
var _v518=lglobal["otherwise"];
if (_v518 === undefined) { throw new Error("No such global: " + "otherwise"); }
var _v519;
if(runJTramp(_v518)) {
var _v520=lglobal["head"];
if (_v520 === undefined) { throw new Error("No such global: " + "head"); }
var _v521=_v520;
_v521=runJTramp(_v521);
if (typeof _v521 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v522=new JTramp(_v521, [runJTramp(_v498)]);
var _v523=_v522;
var _v524=lglobal["tail"];
if (_v524 === undefined) { throw new Error("No such global: " + "tail"); }
var _v525=_v524;
_v525=runJTramp(_v525);
if (typeof _v525 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v526=new JTramp(_v525, [runJTramp(_v498)]);
var _v527=_v526;
var _v528=lglobal["tail"];
if (_v528 === undefined) { throw new Error("No such global: " + "tail"); }
var _v529=_v528;
_v529=runJTramp(_v529);
if (typeof _v529 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v530=new JTramp(_v529, [runJTramp(_v527)]);
var _v531=_v530;
var _v532=lglobal["a:keys"];
if (_v532 === undefined) { throw new Error("No such global: " + "a:keys"); }
var _v533=_v532;
_v533=runJTramp(_v533);
if (typeof _v533 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v534=new JTramp(_v533, [runJTramp(_v531)]);
var _v535=_v534;
var _v536=lglobal["cons"];
if (_v536 === undefined) { throw new Error("No such global: " + "cons"); }
var _v537=_v536;
_v537=runJTramp(_v537);
if (typeof _v537 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v538=new JTramp(_v537, [runJTramp(_v523),runJTramp(_v535)]);
_v519=_v538;
} else {
var _v539=null;
_v519=_v539;
}
_v512=_v519;
}
_v503=_v512;
}
return _v503;
};
_v496=_v497;
lglobal["a:keys"]=runJTramp(_v496);
})();
(function () {
var _v540;
var _v541=function (_v542) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v544=lglobal["nil?"];
if (_v544 === undefined) { throw new Error("No such global: " + "nil?"); }
var _v545=_v544;
_v545=runJTramp(_v545);
if (typeof _v545 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v546=new JTramp(_v545, [runJTramp(_v542)]);
var _v547;
if(runJTramp(_v546)) {
var _v548=new Nil();
_v547=_v548;
} else {
var _v549=lglobal["tail"];
if (_v549 === undefined) { throw new Error("No such global: " + "tail"); }
var _v550=_v549;
_v550=runJTramp(_v550);
if (typeof _v550 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v551=new JTramp(_v550, [runJTramp(_v542)]);
var _v552=_v551;
var _v553=lglobal["nil?"];
if (_v553 === undefined) { throw new Error("No such global: " + "nil?"); }
var _v554=_v553;
_v554=runJTramp(_v554);
if (typeof _v554 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v555=new JTramp(_v554, [runJTramp(_v552)]);
var _v556;
if(runJTramp(_v555)) {
var _v557="Improper alist";
var _v558=_v557;
var _v559=lglobal["error"];
if (_v559 === undefined) { throw new Error("No such global: " + "error"); }
var _v560=_v559;
_v560=runJTramp(_v560);
if (typeof _v560 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v561=new JTramp(_v560, [runJTramp(_v558)]);
_v556=_v561;
} else {
var _v562=lglobal["otherwise"];
if (_v562 === undefined) { throw new Error("No such global: " + "otherwise"); }
var _v563;
if(runJTramp(_v562)) {
var _v564=lglobal["tail"];
if (_v564 === undefined) { throw new Error("No such global: " + "tail"); }
var _v565=_v564;
_v565=runJTramp(_v565);
if (typeof _v565 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v566=new JTramp(_v565, [runJTramp(_v542)]);
var _v567=_v566;
var _v568=lglobal["head"];
if (_v568 === undefined) { throw new Error("No such global: " + "head"); }
var _v569=_v568;
_v569=runJTramp(_v569);
if (typeof _v569 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v570=new JTramp(_v569, [runJTramp(_v567)]);
var _v571=_v570;
var _v572=lglobal["tail"];
if (_v572 === undefined) { throw new Error("No such global: " + "tail"); }
var _v573=_v572;
_v573=runJTramp(_v573);
if (typeof _v573 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v574=new JTramp(_v573, [runJTramp(_v542)]);
var _v575=_v574;
var _v576=lglobal["tail"];
if (_v576 === undefined) { throw new Error("No such global: " + "tail"); }
var _v577=_v576;
_v577=runJTramp(_v577);
if (typeof _v577 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v578=new JTramp(_v577, [runJTramp(_v575)]);
var _v579=_v578;
var _v580=lglobal["a:values"];
if (_v580 === undefined) { throw new Error("No such global: " + "a:values"); }
var _v581=_v580;
_v581=runJTramp(_v581);
if (typeof _v581 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v582=new JTramp(_v581, [runJTramp(_v579)]);
var _v583=_v582;
var _v584=lglobal["cons"];
if (_v584 === undefined) { throw new Error("No such global: " + "cons"); }
var _v585=_v584;
_v585=runJTramp(_v585);
if (typeof _v585 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v586=new JTramp(_v585, [runJTramp(_v571),runJTramp(_v583)]);
_v563=_v586;
} else {
var _v587=null;
_v563=_v587;
}
_v556=_v563;
}
_v547=_v556;
}
return _v547;
};
_v540=_v541;
lglobal["a:values"]=runJTramp(_v540);
})();
(function () {
var _v623;
var _v624=((function (a, b) { return a + b; }));
_v623=_v624;
lglobal["js:+"]=runJTramp(_v623);
})();
(function () {
var _v683;
var _v684=((function (a, b) { return a - b; }));
_v683=_v684;
lglobal["js:-"]=runJTramp(_v683);
})();
(function () {
var _v685;
var _v686=((function (a, b) { return a * b; }));
_v685=_v686;
lglobal["js:*"]=runJTramp(_v685);
})();
(function () {
var _v687;
var _v688=((function (a, b) { return a / b; }));
_v687=_v688;
lglobal["js:/"]=runJTramp(_v687);
})();
(function () {
var _v689;
var _v690=((function (a, b) { return a % b; }));
_v689=_v690;
lglobal["js:%"]=runJTramp(_v689);
})();
(function () {
var _v691;
var _v692=((function (a, b) { return a < b; }));
_v691=_v692;
lglobal["js:<"]=runJTramp(_v691);
})();
(function () {
var _v693;
var _v694=((function (a, b) { return a > b; }));
_v693=_v694;
lglobal["js:>"]=runJTramp(_v693);
})();
(function () {
var _v695;
var _v696=((function (a, b) { return a <= b; }));
_v695=_v696;
lglobal["js:<="]=runJTramp(_v695);
})();
(function () {
var _v697;
var _v698=((function (a, b) { return a >= b; }));
_v697=_v698;
lglobal["js:>="]=runJTramp(_v697);
})();
(function () {
var _v699;
var _v700=((function (a, b) { return a === b; }));
_v699=_v700;
lglobal["js:==="]=runJTramp(_v699);
})();
(function () {
var _v701;
var _v702=((function (a) { return "" + a; }));
_v701=_v702;
lglobal["js:toString"]=runJTramp(_v701);
})();
(function () {
var _v703;
var _v704=((function (a) { return +a; }));
_v703=_v704;
lglobal["js:toNum"]=runJTramp(_v703);
})();
(function () {
var _v705;
var _v706=((function (a) { return isNaN(a); }));
_v705=_v706;
lglobal["NaN?"]=runJTramp(_v705);
})();
(function () {
var _v707;
var _v708=lglobal["js:/"];
if (_v708 === undefined) { throw new Error("No such global: " + "js:/"); }
_v707=_v708;
lglobal["/"]=runJTramp(_v707);
})();
(function () {
var _v709;
var _v710=lglobal["js:%"];
if (_v710 === undefined) { throw new Error("No such global: " + "js:%"); }
_v709=_v710;
lglobal["%"]=runJTramp(_v709);
})();
(function () {
var _v711;
var _v712=lglobal["js:<"];
if (_v712 === undefined) { throw new Error("No such global: " + "js:<"); }
_v711=_v712;
lglobal["<"]=runJTramp(_v711);
})();
(function () {
var _v713;
var _v714=lglobal["js:>"];
if (_v714 === undefined) { throw new Error("No such global: " + "js:>"); }
_v713=_v714;
lglobal[">"]=runJTramp(_v713);
})();
(function () {
var _v715;
var _v716=lglobal["js:<="];
if (_v716 === undefined) { throw new Error("No such global: " + "js:<="); }
_v715=_v716;
lglobal["<="]=runJTramp(_v715);
})();
(function () {
var _v717;
var _v718=lglobal["js:>="];
if (_v718 === undefined) { throw new Error("No such global: " + "js:>="); }
_v717=_v718;
lglobal[">="]=runJTramp(_v717);
})();
(function () {
var _v719;
var _v720=lglobal["js:==="];
if (_v720 === undefined) { throw new Error("No such global: " + "js:==="); }
_v719=_v720;
lglobal["="]=runJTramp(_v719);
})();
(function () {
var _v721;
var _v722=((function () {
  return Array.prototype.join.call(arguments, '');
}));
_v721=_v722;
lglobal["++"]=runJTramp(_v721);
})();
(function () {
var _v723;
var _v724=function () {
var _v725 = new Nil();
for (var _v726 = arguments.length - 1; _v726 >= 0; _v726--) {
  _v725 = new Cons(arguments[_v726], _v725);
}
var _v727=lglobal["js:+"];
if (_v727 === undefined) { throw new Error("No such global: " + "js:+"); }
var _v728=_v727;
var _v729=0;
var _v730=_v729;
var _v731=lglobal["foldl"];
if (_v731 === undefined) { throw new Error("No such global: " + "foldl"); }
var _v732=_v731;
_v732=runJTramp(_v732);
if (typeof _v732 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v733=new JTramp(_v732, [runJTramp(_v728),runJTramp(_v730),runJTramp(_v725)]);
return _v733;
};
_v723=_v724;
lglobal["+"]=runJTramp(_v723);
})();
(function () {
var _v734;
var _v735=function () {
var _v736 = new Nil();
for (var _v737 = arguments.length - 1; _v737 >= 0; _v737--) {
  _v736 = new Cons(arguments[_v737], _v736);
}
var _v738=lglobal["js:*"];
if (_v738 === undefined) { throw new Error("No such global: " + "js:*"); }
var _v739=_v738;
var _v740=1;
var _v741=_v740;
var _v742=lglobal["foldl"];
if (_v742 === undefined) { throw new Error("No such global: " + "foldl"); }
var _v743=_v742;
_v743=runJTramp(_v743);
if (typeof _v743 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v744=new JTramp(_v743, [runJTramp(_v739),runJTramp(_v741),runJTramp(_v736)]);
return _v744;
};
_v734=_v735;
lglobal["*"]=runJTramp(_v734);
})();
(function () {
var _v745;
var _v746=function (_v747) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
var _v748 = new Nil();
for (var _v749 = arguments.length - 1; _v749 >= 1; _v749--) {
  _v748 = new Cons(arguments[_v749], _v748);
}
var _v750=lglobal["nil?"];
if (_v750 === undefined) { throw new Error("No such global: " + "nil?"); }
var _v751=_v750;
_v751=runJTramp(_v751);
if (typeof _v751 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v752=new JTramp(_v751, [runJTramp(_v748)]);
var _v753;
if(runJTramp(_v752)) {
var _v754=0;
var _v755=_v754;
var _v756=lglobal["js:-"];
if (_v756 === undefined) { throw new Error("No such global: " + "js:-"); }
var _v757=_v756;
_v757=runJTramp(_v757);
if (typeof _v757 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v758=new JTramp(_v757, [runJTramp(_v755),runJTramp(_v747)]);
_v753=_v758;
} else {
var _v759=lglobal["+"];
if (_v759 === undefined) { throw new Error("No such global: " + "+"); }
var _v760=_v759;
var _v761=lglobal["apply"];
if (_v761 === undefined) { throw new Error("No such global: " + "apply"); }
var _v762=_v761;
_v762=runJTramp(_v762);
if (typeof _v762 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v763=new JTramp(_v762, [runJTramp(_v760),runJTramp(_v748)]);
var _v764=_v763;
var _v765=lglobal["js:-"];
if (_v765 === undefined) { throw new Error("No such global: " + "js:-"); }
var _v766=_v765;
_v766=runJTramp(_v766);
if (typeof _v766 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v767=new JTramp(_v766, [runJTramp(_v747),runJTramp(_v764)]);
_v753=_v767;
}
return _v753;
};
_v745=_v746;
lglobal["-"]=runJTramp(_v745);
})();
(function () {
var _v768;
var _v769=function (_v770,_v771) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var _v773=lglobal["cons"];
if (_v773 === undefined) { throw new Error("No such global: " + "cons"); }
var _v774=_v773;
var _v775=lglobal["foldr"];
if (_v775 === undefined) { throw new Error("No such global: " + "foldr"); }
var _v776=_v775;
_v776=runJTramp(_v776);
if (typeof _v776 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v777=new JTramp(_v776, [runJTramp(_v774),runJTramp(_v771),runJTramp(_v770)]);
return _v777;
};
_v768=_v769;
lglobal["append2"]=runJTramp(_v768);
})();
(function () {
var _v778;
var _v779=function () {
var _v780 = new Nil();
for (var _v781 = arguments.length - 1; _v781 >= 0; _v781--) {
  _v780 = new Cons(arguments[_v781], _v780);
}
var _v782=lglobal["append2"];
if (_v782 === undefined) { throw new Error("No such global: " + "append2"); }
var _v783=_v782;
var _v784=new Nil();
var _v785=_v784;
var _v786=lglobal["foldr"];
if (_v786 === undefined) { throw new Error("No such global: " + "foldr"); }
var _v787=_v786;
_v787=runJTramp(_v787);
if (typeof _v787 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v788=new JTramp(_v787, [runJTramp(_v783),runJTramp(_v785),runJTramp(_v780)]);
return _v788;
};
_v778=_v779;
lglobal["append"]=runJTramp(_v778);
})();
(function () {
var _v789;
var _v790=function (_v791,_v792) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var _v794=lglobal["append"];
if (_v794 === undefined) { throw new Error("No such global: " + "append"); }
var _v795=_v794;
var _v796=lglobal["map"];
if (_v796 === undefined) { throw new Error("No such global: " + "map"); }
var _v797=_v796;
_v797=runJTramp(_v797);
if (typeof _v797 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v798=new JTramp(_v797, [runJTramp(_v791),runJTramp(_v792)]);
var _v799=_v798;
var _v800=lglobal["apply"];
if (_v800 === undefined) { throw new Error("No such global: " + "apply"); }
var _v801=_v800;
_v801=runJTramp(_v801);
if (typeof _v801 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v802=new JTramp(_v801, [runJTramp(_v795),runJTramp(_v799)]);
return _v802;
};
_v789=_v790;
lglobal["map-append"]=runJTramp(_v789);
})();
(function () {
var _v803;
var _v804=function (_v805,_v806) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var _v808=lglobal["nil?"];
if (_v808 === undefined) { throw new Error("No such global: " + "nil?"); }
var _v809=_v808;
_v809=runJTramp(_v809);
if (typeof _v809 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v810=new JTramp(_v809, [runJTramp(_v806)]);
var _v811;
if(runJTramp(_v810)) {
var _v812=new Nil();
_v811=_v812;
} else {
var _v813=lglobal["tail"];
if (_v813 === undefined) { throw new Error("No such global: " + "tail"); }
var _v814=_v813;
_v814=runJTramp(_v814);
if (typeof _v814 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v815=new JTramp(_v814, [runJTramp(_v806)]);
var _v816=_v815;
var _v817=lglobal["nil?"];
if (_v817 === undefined) { throw new Error("No such global: " + "nil?"); }
var _v818=_v817;
_v818=runJTramp(_v818);
if (typeof _v818 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v819=new JTramp(_v818, [runJTramp(_v816)]);
var _v820;
if(runJTramp(_v819)) {
_v820=_v806;
} else {
var _v821=lglobal["otherwise"];
if (_v821 === undefined) { throw new Error("No such global: " + "otherwise"); }
var _v822;
if(runJTramp(_v821)) {
var _v823=lglobal["head"];
if (_v823 === undefined) { throw new Error("No such global: " + "head"); }
var _v824=_v823;
_v824=runJTramp(_v824);
if (typeof _v824 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v825=new JTramp(_v824, [runJTramp(_v806)]);
var _v826=_v825;
var _v827=lglobal["tail"];
if (_v827 === undefined) { throw new Error("No such global: " + "tail"); }
var _v828=_v827;
_v828=runJTramp(_v828);
if (typeof _v828 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v829=new JTramp(_v828, [runJTramp(_v806)]);
var _v830=_v829;
var _v831=lglobal["intercalate"];
if (_v831 === undefined) { throw new Error("No such global: " + "intercalate"); }
var _v832=_v831;
_v832=runJTramp(_v832);
if (typeof _v832 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v833=new JTramp(_v832, [runJTramp(_v805),runJTramp(_v830)]);
var _v834=_v833;
var _v835=lglobal["cons"];
if (_v835 === undefined) { throw new Error("No such global: " + "cons"); }
var _v836=_v835;
_v836=runJTramp(_v836);
if (typeof _v836 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v837=new JTramp(_v836, [runJTramp(_v805),runJTramp(_v834)]);
var _v838=_v837;
var _v839=lglobal["cons"];
if (_v839 === undefined) { throw new Error("No such global: " + "cons"); }
var _v840=_v839;
_v840=runJTramp(_v840);
if (typeof _v840 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v841=new JTramp(_v840, [runJTramp(_v826),runJTramp(_v838)]);
_v822=_v841;
} else {
var _v842=null;
_v822=_v842;
}
_v820=_v822;
}
_v811=_v820;
}
return _v811;
};
_v803=_v804;
lglobal["intercalate"]=runJTramp(_v803);
})();
(function () {
var _v843;
var _v844=0;
var _v845=_v844;
var _v846=function (_v847) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v849=function () {
if (arguments.length > 0) {
throw new Error("Expecting at most 0 arguments.");
}
var _v851=1;
var _v852=_v851;
var _v853=lglobal["+"];
if (_v853 === undefined) { throw new Error("No such global: " + "+"); }
var _v854=_v853;
_v854=runJTramp(_v854);
if (typeof _v854 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v855=new JTramp(_v854, [runJTramp(_v852),runJTramp(_v847)]);
var _v856=_v847=runJTramp(_v855);
_v856=runJTramp(_v856);
var _v857="#gensym#";
var _v858=_v857;
var _v859=lglobal["++"];
if (_v859 === undefined) { throw new Error("No such global: " + "++"); }
var _v860=_v859;
_v860=runJTramp(_v860);
if (typeof _v860 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v861=new JTramp(_v860, [runJTramp(_v858),runJTramp(_v847)]);
return _v861;
};
return _v849;
};
var _v862=_v846;
_v862=runJTramp(_v862);
if (typeof _v862 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v863=new JTramp(_v862, [runJTramp(_v845)]);
_v843=_v863;
lglobal["gensym"]=runJTramp(_v843);
})();
(function () {
var _v864;
var _v865=((function (s) {
  return s.length;
}));
_v864=_v865;
lglobal["s:length"]=runJTramp(_v864);
})();
(function () {
var _v866;
var _v867=((function (s, i) {
  return s.charAt(i);
}));
_v866=_v867;
lglobal["s:charAt"]=runJTramp(_v866);
})();
(function () {
var _v868;
var _v869=((function (s, i) {
  return s.charCodeAt(i);
}));
_v868=_v869;
lglobal["s:charCodeAt"]=runJTramp(_v868);
})();
(function () {
var _v870;
var _v871=((function (s) {
  var args = _.toArray(arguments);
  args.shift();
  return s.slice.apply(s, args);
}));
_v870=_v871;
lglobal["s:slice"]=runJTramp(_v870);
})();
(function () {
var _v872;
var _v873=((function (s) {
  var args = _.toArray(arguments);
  args.shift();
  return s.indexOf.apply(s, args);
}));
_v872=_v873;
lglobal["s:indexOf"]=runJTramp(_v872);
})();
(function () {
var _v874;
var _v875=(String.fromCharCode);
_v874=_v875;
lglobal["s:fromCharCode"]=runJTramp(_v874);
})();
(function () {
var _v876;
var _v877=((function (s) {
  var args = _.toArray(arguments);
  args.shift();
  var ret = new Nil();
  var split = s.split.apply(s, args);
  for (var i = split.length - 1; i >= 0; i--) {
    ret = new Cons(split[i], ret);
  }
  return ret;
}));
_v876=_v877;
lglobal["s:split"]=runJTramp(_v876);
})();
(function () {
var _v878;
var _v879=function (_v880,_v881) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var _v883=lglobal["nil?"];
if (_v883 === undefined) { throw new Error("No such global: " + "nil?"); }
var _v884=_v883;
_v884=runJTramp(_v884);
if (typeof _v884 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v885=new JTramp(_v884, [runJTramp(_v881)]);
var _v886;
if(runJTramp(_v885)) {
var _v887="";
_v886=_v887;
} else {
var _v888=lglobal["tail"];
if (_v888 === undefined) { throw new Error("No such global: " + "tail"); }
var _v889=_v888;
_v889=runJTramp(_v889);
if (typeof _v889 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v890=new JTramp(_v889, [runJTramp(_v881)]);
var _v891=_v890;
var _v892=lglobal["nil?"];
if (_v892 === undefined) { throw new Error("No such global: " + "nil?"); }
var _v893=_v892;
_v893=runJTramp(_v893);
if (typeof _v893 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v894=new JTramp(_v893, [runJTramp(_v891)]);
var _v895;
if(runJTramp(_v894)) {
var _v896=lglobal["head"];
if (_v896 === undefined) { throw new Error("No such global: " + "head"); }
var _v897=_v896;
_v897=runJTramp(_v897);
if (typeof _v897 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v898=new JTramp(_v897, [runJTramp(_v881)]);
_v895=_v898;
} else {
var _v899=lglobal["otherwise"];
if (_v899 === undefined) { throw new Error("No such global: " + "otherwise"); }
var _v900;
if(runJTramp(_v899)) {
var _v901=lglobal["head"];
if (_v901 === undefined) { throw new Error("No such global: " + "head"); }
var _v902=_v901;
_v902=runJTramp(_v902);
if (typeof _v902 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v903=new JTramp(_v902, [runJTramp(_v881)]);
var _v904=_v903;
var _v905=lglobal["tail"];
if (_v905 === undefined) { throw new Error("No such global: " + "tail"); }
var _v906=_v905;
_v906=runJTramp(_v906);
if (typeof _v906 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v907=new JTramp(_v906, [runJTramp(_v881)]);
var _v908=_v907;
var _v909=lglobal["s:join"];
if (_v909 === undefined) { throw new Error("No such global: " + "s:join"); }
var _v910=_v909;
_v910=runJTramp(_v910);
if (typeof _v910 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v911=new JTramp(_v910, [runJTramp(_v880),runJTramp(_v908)]);
var _v912=_v911;
var _v913=lglobal["++"];
if (_v913 === undefined) { throw new Error("No such global: " + "++"); }
var _v914=_v913;
_v914=runJTramp(_v914);
if (typeof _v914 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v915=new JTramp(_v914, [runJTramp(_v904),runJTramp(_v880),runJTramp(_v912)]);
_v900=_v915;
} else {
var _v916=null;
_v900=_v916;
}
_v895=_v900;
}
_v886=_v895;
}
return _v886;
};
_v878=_v879;
lglobal["s:join"]=runJTramp(_v878);
})();
(function () {
var _v917;
function Dict () {};
_v917=Dict;
lglobal["js:dictConst"]=runJTramp(_v917);
})();
(function () {
var _v918;
var _v919=lglobal["js:dictConst"];
if (_v919 === undefined) { throw new Error("No such global: " + "js:dictConst"); }
var _v920=_v919;
var _v921=((function (con) {
  return function () { return new con(); };
}));
var _v922=_v921;
_v922=runJTramp(_v922);
if (typeof _v922 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v923=new JTramp(_v922, [runJTramp(_v920)]);
_v918=_v923;
lglobal["js:makeDict"]=runJTramp(_v918);
})();
(function () {
var _v924;
var _v925=lglobal["js:dictConst"];
if (_v925 === undefined) { throw new Error("No such global: " + "js:dictConst"); }
var _v926=_v925;
var _v927=((function (con) {
  return function (a) { return a instanceof con; };
}));
var _v928=_v927;
_v928=runJTramp(_v928);
if (typeof _v928 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v929=new JTramp(_v928, [runJTramp(_v926)]);
_v924=_v929;
lglobal["dict?"]=runJTramp(_v924);
})();
(function () {
var _v930;
var _v931=((function (o, k, def) {
  if (_.has(o, k)) {
    return o[k];
  } else if (def === undefined) {
    throw new Error("Key error: " + k);
  } else {
    return def;
  }
}));
_v930=_v931;
lglobal["dict:get"]=runJTramp(_v930);
})();
(function () {
var _v932;
var _v933=((function (o, k, v) {
  if (v === undefined) {
    throw new Error("Not enough arguments passed to dict:set!");
  }
  o[k] = v;
  return null;
}));
_v932=_v933;
lglobal["dict:set!"]=runJTramp(_v932);
})();
(function () {
var _v934;
var _v935=((function (o, k) {
  return _.has(o, k);
}));
_v934=_v935;
lglobal["dict:has?"]=runJTramp(_v934);
})();
(function () {
var _v936;
var _v937=function () {
var _v938 = new Nil();
for (var _v940 = arguments.length - 1; _v940 >= 0; _v940--) {
  _v938 = new Cons(arguments[_v940], _v938);
}
var _v939;
var _v941=function (_v942,_v943) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var _v945=lglobal["nil?"];
if (_v945 === undefined) { throw new Error("No such global: " + "nil?"); }
var _v946=_v945;
_v946=runJTramp(_v946);
if (typeof _v946 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v947=new JTramp(_v946, [runJTramp(_v943)]);
var _v948=_v947;
var _v949=lglobal["not"];
if (_v949 === undefined) { throw new Error("No such global: " + "not"); }
var _v950=_v949;
_v950=runJTramp(_v950);
if (typeof _v950 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v951=new JTramp(_v950, [runJTramp(_v948)]);
var _v952;
if(runJTramp(_v951)) {
var _v953=lglobal["head"];
if (_v953 === undefined) { throw new Error("No such global: " + "head"); }
var _v954=_v953;
_v954=runJTramp(_v954);
if (typeof _v954 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v955=new JTramp(_v954, [runJTramp(_v943)]);
var _v956=_v955;
var _v957=lglobal["tail"];
if (_v957 === undefined) { throw new Error("No such global: " + "tail"); }
var _v958=_v957;
_v958=runJTramp(_v958);
if (typeof _v958 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v959=new JTramp(_v958, [runJTramp(_v943)]);
var _v960=_v959;
var _v961=lglobal["head"];
if (_v961 === undefined) { throw new Error("No such global: " + "head"); }
var _v962=_v961;
_v962=runJTramp(_v962);
if (typeof _v962 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v963=new JTramp(_v962, [runJTramp(_v960)]);
var _v964=_v963;
var _v965=lglobal["dict:set!"];
if (_v965 === undefined) { throw new Error("No such global: " + "dict:set!"); }
var _v966=_v965;
_v966=runJTramp(_v966);
if (typeof _v966 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v967=new JTramp(_v966, [runJTramp(_v942),runJTramp(_v956),runJTramp(_v964)]);
_v967=runJTramp(_v967);
var _v968=lglobal["tail"];
if (_v968 === undefined) { throw new Error("No such global: " + "tail"); }
var _v969=_v968;
_v969=runJTramp(_v969);
if (typeof _v969 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v970=new JTramp(_v969, [runJTramp(_v943)]);
var _v971=_v970;
var _v972=lglobal["tail"];
if (_v972 === undefined) { throw new Error("No such global: " + "tail"); }
var _v973=_v972;
_v973=runJTramp(_v973);
if (typeof _v973 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v974=new JTramp(_v973, [runJTramp(_v971)]);
var _v975=_v974;
_v939=runJTramp(_v939);
if (typeof _v939 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v976=new JTramp(_v939, [runJTramp(_v942),runJTramp(_v975)]);
_v952=_v976;
} else {
var _v977=null;
_v952=_v977;
}
return _v952;
};
var _v978=_v939=runJTramp(_v941);
var _v979=lglobal["js:makeDict"];
if (_v979 === undefined) { throw new Error("No such global: " + "js:makeDict"); }
var _v980=_v979;
_v980=runJTramp(_v980);
if (typeof _v980 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v981=new JTramp(_v980, []);
var _v982=_v981;
var _v983=function (_v984) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
_v939=runJTramp(_v939);
if (typeof _v939 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v986=new JTramp(_v939, [runJTramp(_v984),runJTramp(_v938)]);
_v986=runJTramp(_v986);
return _v984;
};
var _v987=_v983;
_v987=runJTramp(_v987);
if (typeof _v987 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v988=new JTramp(_v987, [runJTramp(_v982)]);
return _v988;
};
_v936=_v937;
lglobal["dict"]=runJTramp(_v936);
})();
(function () {
var _v1081;
var _v1082=function (_v1083) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v1085;
if(runJTramp(_v1083)) {
var _v1086=lglobal["false"];
if (_v1086 === undefined) { throw new Error("No such global: " + "false"); }
_v1085=_v1086;
} else {
var _v1087=lglobal["true"];
if (_v1087 === undefined) { throw new Error("No such global: " + "true"); }
_v1085=_v1087;
}
return _v1085;
};
_v1081=_v1082;
lglobal["not"]=runJTramp(_v1081);
})();
(function () {
var _v1088;
var _v1089=function (_v1090,_v1091) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var _v1093=lglobal["="];
if (_v1093 === undefined) { throw new Error("No such global: " + "="); }
var _v1094=_v1093;
_v1094=runJTramp(_v1094);
if (typeof _v1094 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1095=new JTramp(_v1094, [runJTramp(_v1090),runJTramp(_v1091)]);
var _v1096=_v1095;
var _v1097=lglobal["not"];
if (_v1097 === undefined) { throw new Error("No such global: " + "not"); }
var _v1098=_v1097;
_v1098=runJTramp(_v1098);
if (typeof _v1098 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1099=new JTramp(_v1098, [runJTramp(_v1096)]);
return _v1099;
};
_v1088=_v1089;
lglobal["!="]=runJTramp(_v1088);
})();
(function () {
var _v1100;
var _v1101=function (_v1102) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v1104=lglobal["head"];
if (_v1104 === undefined) { throw new Error("No such global: " + "head"); }
var _v1105=_v1104;
_v1105=runJTramp(_v1105);
if (typeof _v1105 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1106=new JTramp(_v1105, [runJTramp(_v1102)]);
var _v1107=_v1106;
var _v1108=function (_v1109) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v1111;
if(runJTramp(_v1109)) {
var _v1112=lglobal["tail"];
if (_v1112 === undefined) { throw new Error("No such global: " + "tail"); }
var _v1113=_v1112;
_v1113=runJTramp(_v1113);
if (typeof _v1113 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1114=new JTramp(_v1113, [runJTramp(_v1102)]);
var _v1115=_v1114;
var _v1116=lglobal["all"];
if (_v1116 === undefined) { throw new Error("No such global: " + "all"); }
var _v1117=_v1116;
_v1117=runJTramp(_v1117);
if (typeof _v1117 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1118=new JTramp(_v1117, [runJTramp(_v1115)]);
_v1111=_v1118;
} else {
_v1111=_v1109;
}
return _v1111;
};
var _v1119=_v1108;
_v1119=runJTramp(_v1119);
if (typeof _v1119 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1120=new JTramp(_v1119, [runJTramp(_v1107)]);
return _v1120;
};
_v1100=_v1101;
lglobal["all"]=runJTramp(_v1100);
})();
(function () {
var _v1121;
var _v1122=function (_v1123) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v1125=lglobal["head"];
if (_v1125 === undefined) { throw new Error("No such global: " + "head"); }
var _v1126=_v1125;
_v1126=runJTramp(_v1126);
if (typeof _v1126 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1127=new JTramp(_v1126, [runJTramp(_v1123)]);
var _v1128=_v1127;
var _v1129=function (_v1130) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v1132;
if(runJTramp(_v1130)) {
_v1132=_v1130;
} else {
var _v1133=lglobal["tail"];
if (_v1133 === undefined) { throw new Error("No such global: " + "tail"); }
var _v1134=_v1133;
_v1134=runJTramp(_v1134);
if (typeof _v1134 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1135=new JTramp(_v1134, [runJTramp(_v1123)]);
var _v1136=_v1135;
var _v1137=lglobal["any"];
if (_v1137 === undefined) { throw new Error("No such global: " + "any"); }
var _v1138=_v1137;
_v1138=runJTramp(_v1138);
if (typeof _v1138 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1139=new JTramp(_v1138, [runJTramp(_v1136)]);
_v1132=_v1139;
}
return _v1132;
};
var _v1140=_v1129;
_v1140=runJTramp(_v1140);
if (typeof _v1140 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1141=new JTramp(_v1140, [runJTramp(_v1128)]);
return _v1141;
};
_v1121=_v1122;
lglobal["any"]=runJTramp(_v1121);
})();
(function () {
var _v1142;
var _v1143=function (_v1144) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v1146;
var _v1147=function (_v1148,_v1149) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var _v1151=lglobal["nil?"];
if (_v1151 === undefined) { throw new Error("No such global: " + "nil?"); }
var _v1152=_v1151;
_v1152=runJTramp(_v1152);
if (typeof _v1152 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1153=new JTramp(_v1152, [runJTramp(_v1148)]);
var _v1154;
if(runJTramp(_v1153)) {
_v1154=_v1149;
} else {
var _v1155=lglobal["tail"];
if (_v1155 === undefined) { throw new Error("No such global: " + "tail"); }
var _v1156=_v1155;
_v1156=runJTramp(_v1156);
if (typeof _v1156 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1157=new JTramp(_v1156, [runJTramp(_v1148)]);
var _v1158=_v1157;
var _v1159=1;
var _v1160=_v1159;
var _v1161=lglobal["+"];
if (_v1161 === undefined) { throw new Error("No such global: " + "+"); }
var _v1162=_v1161;
_v1162=runJTramp(_v1162);
if (typeof _v1162 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1163=new JTramp(_v1162, [runJTramp(_v1149),runJTramp(_v1160)]);
var _v1164=_v1163;
_v1146=runJTramp(_v1146);
if (typeof _v1146 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1165=new JTramp(_v1146, [runJTramp(_v1158),runJTramp(_v1164)]);
_v1154=_v1165;
}
return _v1154;
};
var _v1166=_v1146=runJTramp(_v1147);
var _v1167=0;
var _v1168=_v1167;
_v1146=runJTramp(_v1146);
if (typeof _v1146 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1169=new JTramp(_v1146, [runJTramp(_v1144),runJTramp(_v1168)]);
return _v1169;
};
_v1142=_v1143;
lglobal["length"]=runJTramp(_v1142);
})();
(function () {
var _v1170;
var _v1171=function (_v1172,_v1173) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var _v1175=0;
var _v1176=_v1175;
var _v1177=lglobal["<"];
if (_v1177 === undefined) { throw new Error("No such global: " + "<"); }
var _v1178=_v1177;
_v1178=runJTramp(_v1178);
if (typeof _v1178 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1179=new JTramp(_v1178, [runJTramp(_v1173),runJTramp(_v1176)]);
var _v1180;
if(runJTramp(_v1179)) {
var _v1181=lglobal["length"];
if (_v1181 === undefined) { throw new Error("No such global: " + "length"); }
var _v1182=_v1181;
_v1182=runJTramp(_v1182);
if (typeof _v1182 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1183=new JTramp(_v1182, [runJTramp(_v1172)]);
var _v1184=_v1183;
var _v1185=lglobal["+"];
if (_v1185 === undefined) { throw new Error("No such global: " + "+"); }
var _v1186=_v1185;
_v1186=runJTramp(_v1186);
if (typeof _v1186 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1187=new JTramp(_v1186, [runJTramp(_v1173),runJTramp(_v1184)]);
var _v1188=_v1187;
var _v1189=lglobal["nth"];
if (_v1189 === undefined) { throw new Error("No such global: " + "nth"); }
var _v1190=_v1189;
_v1190=runJTramp(_v1190);
if (typeof _v1190 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1191=new JTramp(_v1190, [runJTramp(_v1172),runJTramp(_v1188)]);
_v1180=_v1191;
} else {
var _v1192=lglobal["nil?"];
if (_v1192 === undefined) { throw new Error("No such global: " + "nil?"); }
var _v1193=_v1192;
_v1193=runJTramp(_v1193);
if (typeof _v1193 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1194=new JTramp(_v1193, [runJTramp(_v1172)]);
var _v1195;
if(runJTramp(_v1194)) {
var _v1196="List index out of bounds.";
var _v1197=_v1196;
var _v1198=lglobal["error"];
if (_v1198 === undefined) { throw new Error("No such global: " + "error"); }
var _v1199=_v1198;
_v1199=runJTramp(_v1199);
if (typeof _v1199 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1200=new JTramp(_v1199, [runJTramp(_v1197)]);
_v1195=_v1200;
} else {
var _v1201=0;
var _v1202=_v1201;
var _v1203=lglobal["="];
if (_v1203 === undefined) { throw new Error("No such global: " + "="); }
var _v1204=_v1203;
_v1204=runJTramp(_v1204);
if (typeof _v1204 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1205=new JTramp(_v1204, [runJTramp(_v1173),runJTramp(_v1202)]);
var _v1206;
if(runJTramp(_v1205)) {
var _v1207=lglobal["head"];
if (_v1207 === undefined) { throw new Error("No such global: " + "head"); }
var _v1208=_v1207;
_v1208=runJTramp(_v1208);
if (typeof _v1208 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1209=new JTramp(_v1208, [runJTramp(_v1172)]);
_v1206=_v1209;
} else {
var _v1210=lglobal["otherwise"];
if (_v1210 === undefined) { throw new Error("No such global: " + "otherwise"); }
var _v1211;
if(runJTramp(_v1210)) {
var _v1212=lglobal["tail"];
if (_v1212 === undefined) { throw new Error("No such global: " + "tail"); }
var _v1213=_v1212;
_v1213=runJTramp(_v1213);
if (typeof _v1213 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1214=new JTramp(_v1213, [runJTramp(_v1172)]);
var _v1215=_v1214;
var _v1216=1;
var _v1217=_v1216;
var _v1218=lglobal["-"];
if (_v1218 === undefined) { throw new Error("No such global: " + "-"); }
var _v1219=_v1218;
_v1219=runJTramp(_v1219);
if (typeof _v1219 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1220=new JTramp(_v1219, [runJTramp(_v1173),runJTramp(_v1217)]);
var _v1221=_v1220;
var _v1222=lglobal["nth"];
if (_v1222 === undefined) { throw new Error("No such global: " + "nth"); }
var _v1223=_v1222;
_v1223=runJTramp(_v1223);
if (typeof _v1223 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1224=new JTramp(_v1223, [runJTramp(_v1215),runJTramp(_v1221)]);
_v1211=_v1224;
} else {
var _v1225=null;
_v1211=_v1225;
}
_v1206=_v1211;
}
_v1195=_v1206;
}
_v1180=_v1195;
}
return _v1180;
};
_v1170=_v1171;
lglobal["nth"]=runJTramp(_v1170);
})();
(function () {
var _v1226;
var _v1227=function (_v1228) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
var _v1229 = new Nil();
for (var _v1230 = arguments.length - 1; _v1230 >= 1; _v1230--) {
  _v1229 = new Cons(arguments[_v1230], _v1229);
}
var _v1231=lglobal["nil?"];
if (_v1231 === undefined) { throw new Error("No such global: " + "nil?"); }
var _v1232=_v1231;
_v1232=runJTramp(_v1232);
if (typeof _v1232 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1233=new JTramp(_v1232, [runJTramp(_v1229)]);
var _v1234;
if(runJTramp(_v1233)) {
_v1234=_v1228;
} else {
var _v1235=lglobal["."];
if (_v1235 === undefined) { throw new Error("No such global: " + "."); }
var _v1236=_v1235;
var _v1237=lglobal["apply"];
if (_v1237 === undefined) { throw new Error("No such global: " + "apply"); }
var _v1238=_v1237;
_v1238=runJTramp(_v1238);
if (typeof _v1238 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1239=new JTramp(_v1238, [runJTramp(_v1236),runJTramp(_v1229)]);
var _v1240=_v1239;
var _v1241=function (_v1242) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v1244=function () {
var _v1245 = new Nil();
for (var _v1246 = arguments.length - 1; _v1246 >= 0; _v1246--) {
  _v1245 = new Cons(arguments[_v1246], _v1245);
}
var _v1247=lglobal["apply"];
if (_v1247 === undefined) { throw new Error("No such global: " + "apply"); }
var _v1248=_v1247;
_v1248=runJTramp(_v1248);
if (typeof _v1248 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1249=new JTramp(_v1248, [runJTramp(_v1242),runJTramp(_v1245)]);
var _v1250=_v1249;
_v1228=runJTramp(_v1228);
if (typeof _v1228 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1251=new JTramp(_v1228, [runJTramp(_v1250)]);
return _v1251;
};
return _v1244;
};
var _v1252=_v1241;
_v1252=runJTramp(_v1252);
if (typeof _v1252 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1253=new JTramp(_v1252, [runJTramp(_v1240)]);
_v1234=_v1253;
}
return _v1234;
};
_v1226=_v1227;
lglobal["."]=runJTramp(_v1226);
})();
(function () {
var _v1254;
var _v1255=function (_v1256) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v1258=function (_v1259) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v1261=function (_v1262) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
_v1256=runJTramp(_v1256);
if (typeof _v1256 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1264=new JTramp(_v1256, [runJTramp(_v1259),runJTramp(_v1262)]);
return _v1264;
};
return _v1261;
};
return _v1258;
};
_v1254=_v1255;
lglobal["curry"]=runJTramp(_v1254);
})();
(function () {
var _v1265;
var _v1266=function (_v1267) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v1269=function (_v1270,_v1271) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
_v1267=runJTramp(_v1267);
if (typeof _v1267 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1273=new JTramp(_v1267, [runJTramp(_v1270)]);
var _v1274=_v1273;
_v1274=runJTramp(_v1274);
if (typeof _v1274 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1275=new JTramp(_v1274, [runJTramp(_v1271)]);
return _v1275;
};
return _v1269;
};
_v1265=_v1266;
lglobal["uncurry"]=runJTramp(_v1265);
})();
(function () {
var _v1276;
var _v1277=function (_v1278) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
var _v1279 = new Nil();
for (var _v1280 = arguments.length - 1; _v1280 >= 1; _v1280--) {
  _v1279 = new Cons(arguments[_v1280], _v1279);
}
var _v1281=function () {
var _v1282 = new Nil();
for (var _v1283 = arguments.length - 1; _v1283 >= 0; _v1283--) {
  _v1282 = new Cons(arguments[_v1283], _v1282);
}
var _v1284=lglobal["append"];
if (_v1284 === undefined) { throw new Error("No such global: " + "append"); }
var _v1285=_v1284;
_v1285=runJTramp(_v1285);
if (typeof _v1285 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1286=new JTramp(_v1285, [runJTramp(_v1279),runJTramp(_v1282)]);
var _v1287=_v1286;
var _v1288=lglobal["apply"];
if (_v1288 === undefined) { throw new Error("No such global: " + "apply"); }
var _v1289=_v1288;
_v1289=runJTramp(_v1289);
if (typeof _v1289 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1290=new JTramp(_v1289, [runJTramp(_v1278),runJTramp(_v1287)]);
return _v1290;
};
return _v1281;
};
_v1276=_v1277;
lglobal["partial"]=runJTramp(_v1276);
})();
(function () {
var _v1291;
var _v1292=function (_v1293) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v1295=function (_v1296,_v1297) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
_v1293=runJTramp(_v1293);
if (typeof _v1293 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1299=new JTramp(_v1293, [runJTramp(_v1297),runJTramp(_v1296)]);
return _v1299;
};
return _v1295;
};
_v1291=_v1292;
lglobal["flip"]=runJTramp(_v1291);
})();
(function () {
var _v1300;
var _v1301=function (_v1302) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
var _v1303 = new Nil();
for (var _v1304 = arguments.length - 1; _v1304 >= 1; _v1304--) {
  _v1303 = new Cons(arguments[_v1304], _v1303);
}
var _v1305=lglobal["apply"];
if (_v1305 === undefined) { throw new Error("No such global: " + "apply"); }
var _v1306=_v1305;
_v1306=runJTramp(_v1306);
if (typeof _v1306 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1307=new JTramp(_v1306, [runJTramp(_v1302),runJTramp(_v1303)]);
return _v1307;
};
_v1300=_v1301;
lglobal["$"]=runJTramp(_v1300);
})();
(function () {
var _v1308;
var _v1309=function (_v1310) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
var _v1311 = new Nil();
for (var _v1312 = arguments.length - 1; _v1312 >= 1; _v1312--) {
  _v1311 = new Cons(arguments[_v1312], _v1311);
}
var _v1313=lglobal["nil?"];
if (_v1313 === undefined) { throw new Error("No such global: " + "nil?"); }
var _v1314=_v1313;
_v1314=runJTramp(_v1314);
if (typeof _v1314 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1315=new JTramp(_v1314, [runJTramp(_v1311)]);
var _v1316;
if(runJTramp(_v1315)) {
_v1316=_v1310;
} else {
var _v1317=lglobal["|>"];
if (_v1317 === undefined) { throw new Error("No such global: " + "|>"); }
var _v1318=_v1317;
var _v1319=lglobal["head"];
if (_v1319 === undefined) { throw new Error("No such global: " + "head"); }
var _v1320=_v1319;
_v1320=runJTramp(_v1320);
if (typeof _v1320 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1321=new JTramp(_v1320, [runJTramp(_v1311)]);
var _v1322=_v1321;
_v1322=runJTramp(_v1322);
if (typeof _v1322 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1323=new JTramp(_v1322, [runJTramp(_v1310)]);
var _v1324=_v1323;
var _v1325=lglobal["tail"];
if (_v1325 === undefined) { throw new Error("No such global: " + "tail"); }
var _v1326=_v1325;
_v1326=runJTramp(_v1326);
if (typeof _v1326 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1327=new JTramp(_v1326, [runJTramp(_v1311)]);
var _v1328=_v1327;
var _v1329=lglobal["cons"];
if (_v1329 === undefined) { throw new Error("No such global: " + "cons"); }
var _v1330=_v1329;
_v1330=runJTramp(_v1330);
if (typeof _v1330 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1331=new JTramp(_v1330, [runJTramp(_v1324),runJTramp(_v1328)]);
var _v1332=_v1331;
var _v1333=lglobal["apply"];
if (_v1333 === undefined) { throw new Error("No such global: " + "apply"); }
var _v1334=_v1333;
_v1334=runJTramp(_v1334);
if (typeof _v1334 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1335=new JTramp(_v1334, [runJTramp(_v1318),runJTramp(_v1332)]);
_v1316=_v1335;
}
return _v1316;
};
_v1308=_v1309;
lglobal["|>"]=runJTramp(_v1308);
})();
(function () {
var _v1336;
var _v1337=function (_v1338) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
return _v1338;
};
_v1336=_v1337;
lglobal["id"]=runJTramp(_v1336);
})();
(function () {
var _v1340;
var _v1341=function (_v1342) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v1344=function (_v1345) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
return _v1342;
};
return _v1344;
};
_v1340=_v1341;
lglobal["const"]=runJTramp(_v1340);
})();
(function () {
var _v1583;
var _v1584=((function () { _.each(arguments, output); return null; }));
_v1583=_v1584;
lglobal["js:print"]=runJTramp(_v1583);
})();
(function () {
var _v1585;
var _v1586=function () {
var _v1587 = new Nil();
for (var _v1588 = arguments.length - 1; _v1588 >= 0; _v1588--) {
  _v1587 = new Cons(arguments[_v1588], _v1587);
}
var _v1589=function (_v1590) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v1592=lglobal["repr"];
if (_v1592 === undefined) { throw new Error("No such global: " + "repr"); }
var _v1593=_v1592;
_v1593=runJTramp(_v1593);
if (typeof _v1593 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1594=new JTramp(_v1593, [runJTramp(_v1590)]);
var _v1595=_v1594;
var _v1596=lglobal["js:print"];
if (_v1596 === undefined) { throw new Error("No such global: " + "js:print"); }
var _v1597=_v1596;
_v1597=runJTramp(_v1597);
if (typeof _v1597 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1598=new JTramp(_v1597, [runJTramp(_v1595)]);
return _v1598;
};
var _v1599=_v1589;
var _v1600=lglobal["each"];
if (_v1600 === undefined) { throw new Error("No such global: " + "each"); }
var _v1601=_v1600;
_v1601=runJTramp(_v1601);
if (typeof _v1601 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1602=new JTramp(_v1601, [runJTramp(_v1599),runJTramp(_v1587)]);
return _v1602;
};
_v1585=_v1586;
lglobal["print"]=runJTramp(_v1585);
})();
(function () {
var _v1603;
var _v1604=function (_v1605) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v1607="Scope: ";
var _v1608=_v1607;
var _v1609="\n";
var _v1610=_v1609;
var _v1611=lglobal["print"];
if (_v1611 === undefined) { throw new Error("No such global: " + "print"); }
var _v1612=_v1611;
_v1612=runJTramp(_v1612);
if (typeof _v1612 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1613=new JTramp(_v1612, [runJTramp(_v1608),runJTramp(_v1605),runJTramp(_v1610)]);
_v1613=runJTramp(_v1613);
return _v1605;
};
_v1603=_v1604;
lglobal["scope"]=runJTramp(_v1603);
})();
(function () {
var _v1614;
var _v1615=function (_v1616) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v1618;
var _v1619=function (_v1620) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v1622=lglobal["tail"];
if (_v1622 === undefined) { throw new Error("No such global: " + "tail"); }
var _v1623=_v1622;
_v1623=runJTramp(_v1623);
if (typeof _v1623 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1624=new JTramp(_v1623, [runJTramp(_v1620)]);
var _v1625=_v1624;
var _v1626=lglobal["nil?"];
if (_v1626 === undefined) { throw new Error("No such global: " + "nil?"); }
var _v1627=_v1626;
_v1627=runJTramp(_v1627);
if (typeof _v1627 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1628=new JTramp(_v1627, [runJTramp(_v1625)]);
var _v1629;
if(runJTramp(_v1628)) {
var _v1630=lglobal["head"];
if (_v1630 === undefined) { throw new Error("No such global: " + "head"); }
var _v1631=_v1630;
_v1631=runJTramp(_v1631);
if (typeof _v1631 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1632=new JTramp(_v1631, [runJTramp(_v1620)]);
var _v1633=_v1632;
var _v1634=lglobal["repr"];
if (_v1634 === undefined) { throw new Error("No such global: " + "repr"); }
var _v1635=_v1634;
_v1635=runJTramp(_v1635);
if (typeof _v1635 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1636=new JTramp(_v1635, [runJTramp(_v1633)]);
var _v1637=_v1636;
var _v1638=")";
var _v1639=_v1638;
var _v1640=lglobal["++"];
if (_v1640 === undefined) { throw new Error("No such global: " + "++"); }
var _v1641=_v1640;
_v1641=runJTramp(_v1641);
if (typeof _v1641 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1642=new JTramp(_v1641, [runJTramp(_v1637),runJTramp(_v1639)]);
_v1629=_v1642;
} else {
var _v1643=lglobal["tail"];
if (_v1643 === undefined) { throw new Error("No such global: " + "tail"); }
var _v1644=_v1643;
_v1644=runJTramp(_v1644);
if (typeof _v1644 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1645=new JTramp(_v1644, [runJTramp(_v1620)]);
var _v1646=_v1645;
var _v1647=lglobal["cons?"];
if (_v1647 === undefined) { throw new Error("No such global: " + "cons?"); }
var _v1648=_v1647;
_v1648=runJTramp(_v1648);
if (typeof _v1648 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1649=new JTramp(_v1648, [runJTramp(_v1646)]);
var _v1650;
if(runJTramp(_v1649)) {
var _v1651=lglobal["head"];
if (_v1651 === undefined) { throw new Error("No such global: " + "head"); }
var _v1652=_v1651;
_v1652=runJTramp(_v1652);
if (typeof _v1652 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1653=new JTramp(_v1652, [runJTramp(_v1620)]);
var _v1654=_v1653;
var _v1655=lglobal["repr"];
if (_v1655 === undefined) { throw new Error("No such global: " + "repr"); }
var _v1656=_v1655;
_v1656=runJTramp(_v1656);
if (typeof _v1656 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1657=new JTramp(_v1656, [runJTramp(_v1654)]);
var _v1658=_v1657;
var _v1659=" ";
var _v1660=_v1659;
var _v1661=lglobal["tail"];
if (_v1661 === undefined) { throw new Error("No such global: " + "tail"); }
var _v1662=_v1661;
_v1662=runJTramp(_v1662);
if (typeof _v1662 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1663=new JTramp(_v1662, [runJTramp(_v1620)]);
var _v1664=_v1663;
_v1618=runJTramp(_v1618);
if (typeof _v1618 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1665=new JTramp(_v1618, [runJTramp(_v1664)]);
var _v1666=_v1665;
var _v1667=lglobal["++"];
if (_v1667 === undefined) { throw new Error("No such global: " + "++"); }
var _v1668=_v1667;
_v1668=runJTramp(_v1668);
if (typeof _v1668 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1669=new JTramp(_v1668, [runJTramp(_v1658),runJTramp(_v1660),runJTramp(_v1666)]);
_v1650=_v1669;
} else {
var _v1670=lglobal["otherwise"];
if (_v1670 === undefined) { throw new Error("No such global: " + "otherwise"); }
var _v1671;
if(runJTramp(_v1670)) {
var _v1672=lglobal["head"];
if (_v1672 === undefined) { throw new Error("No such global: " + "head"); }
var _v1673=_v1672;
_v1673=runJTramp(_v1673);
if (typeof _v1673 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1674=new JTramp(_v1673, [runJTramp(_v1620)]);
var _v1675=_v1674;
var _v1676=lglobal["repr"];
if (_v1676 === undefined) { throw new Error("No such global: " + "repr"); }
var _v1677=_v1676;
_v1677=runJTramp(_v1677);
if (typeof _v1677 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1678=new JTramp(_v1677, [runJTramp(_v1675)]);
var _v1679=_v1678;
var _v1680=" # ";
var _v1681=_v1680;
var _v1682=lglobal["tail"];
if (_v1682 === undefined) { throw new Error("No such global: " + "tail"); }
var _v1683=_v1682;
_v1683=runJTramp(_v1683);
if (typeof _v1683 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1684=new JTramp(_v1683, [runJTramp(_v1620)]);
var _v1685=_v1684;
var _v1686=lglobal["repr"];
if (_v1686 === undefined) { throw new Error("No such global: " + "repr"); }
var _v1687=_v1686;
_v1687=runJTramp(_v1687);
if (typeof _v1687 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1688=new JTramp(_v1687, [runJTramp(_v1685)]);
var _v1689=_v1688;
var _v1690=")";
var _v1691=_v1690;
var _v1692=lglobal["++"];
if (_v1692 === undefined) { throw new Error("No such global: " + "++"); }
var _v1693=_v1692;
_v1693=runJTramp(_v1693);
if (typeof _v1693 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1694=new JTramp(_v1693, [runJTramp(_v1679),runJTramp(_v1681),runJTramp(_v1689),runJTramp(_v1691)]);
_v1671=_v1694;
} else {
var _v1695=null;
_v1671=_v1695;
}
_v1650=_v1671;
}
_v1629=_v1650;
}
return _v1629;
};
var _v1696=_v1618=runJTramp(_v1619);
var _v1697=lglobal["nil?"];
if (_v1697 === undefined) { throw new Error("No such global: " + "nil?"); }
var _v1698=_v1697;
_v1698=runJTramp(_v1698);
if (typeof _v1698 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1699=new JTramp(_v1698, [runJTramp(_v1616)]);
var _v1700;
if(runJTramp(_v1699)) {
var _v1701="()";
_v1700=_v1701;
} else {
var _v1702=lglobal["cons?"];
if (_v1702 === undefined) { throw new Error("No such global: " + "cons?"); }
var _v1703=_v1702;
_v1703=runJTramp(_v1703);
if (typeof _v1703 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1704=new JTramp(_v1703, [runJTramp(_v1616)]);
var _v1705;
if(runJTramp(_v1704)) {
var _v1706=lglobal["head"];
if (_v1706 === undefined) { throw new Error("No such global: " + "head"); }
var _v1707=_v1706;
_v1707=runJTramp(_v1707);
if (typeof _v1707 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1708=new JTramp(_v1707, [runJTramp(_v1616)]);
var _v1709=_v1708;
var _v1710=function (_v1711) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v1713="quote";
var _v1714=_v1713;
var _v1715=lglobal["="];
if (_v1715 === undefined) { throw new Error("No such global: " + "="); }
var _v1716=_v1715;
_v1716=runJTramp(_v1716);
if (typeof _v1716 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1717=new JTramp(_v1716, [runJTramp(_v1711),runJTramp(_v1714)]);
var _v1718;
if(runJTramp(_v1717)) {
var _v1719="'";
var _v1720=_v1719;
var _v1721=lglobal["tail"];
if (_v1721 === undefined) { throw new Error("No such global: " + "tail"); }
var _v1722=_v1721;
_v1722=runJTramp(_v1722);
if (typeof _v1722 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1723=new JTramp(_v1722, [runJTramp(_v1616)]);
var _v1724=_v1723;
var _v1725=lglobal["head"];
if (_v1725 === undefined) { throw new Error("No such global: " + "head"); }
var _v1726=_v1725;
_v1726=runJTramp(_v1726);
if (typeof _v1726 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1727=new JTramp(_v1726, [runJTramp(_v1724)]);
var _v1728=_v1727;
var _v1729=lglobal["repr"];
if (_v1729 === undefined) { throw new Error("No such global: " + "repr"); }
var _v1730=_v1729;
_v1730=runJTramp(_v1730);
if (typeof _v1730 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1731=new JTramp(_v1730, [runJTramp(_v1728)]);
var _v1732=_v1731;
var _v1733=lglobal["++"];
if (_v1733 === undefined) { throw new Error("No such global: " + "++"); }
var _v1734=_v1733;
_v1734=runJTramp(_v1734);
if (typeof _v1734 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1735=new JTramp(_v1734, [runJTramp(_v1720),runJTramp(_v1732)]);
_v1718=_v1735;
} else {
var _v1736="(";
var _v1737=_v1736;
_v1618=runJTramp(_v1618);
if (typeof _v1618 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1738=new JTramp(_v1618, [runJTramp(_v1616)]);
var _v1739=_v1738;
var _v1740=lglobal["++"];
if (_v1740 === undefined) { throw new Error("No such global: " + "++"); }
var _v1741=_v1740;
_v1741=runJTramp(_v1741);
if (typeof _v1741 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1742=new JTramp(_v1741, [runJTramp(_v1737),runJTramp(_v1739)]);
_v1718=_v1742;
}
return _v1718;
};
var _v1743=_v1710;
_v1743=runJTramp(_v1743);
if (typeof _v1743 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1744=new JTramp(_v1743, [runJTramp(_v1709)]);
_v1705=_v1744;
} else {
var _v1745=lglobal["otherwise"];
if (_v1745 === undefined) { throw new Error("No such global: " + "otherwise"); }
var _v1746;
if(runJTramp(_v1745)) {
var _v1747=lglobal["js:toString"];
if (_v1747 === undefined) { throw new Error("No such global: " + "js:toString"); }
var _v1748=_v1747;
_v1748=runJTramp(_v1748);
if (typeof _v1748 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1749=new JTramp(_v1748, [runJTramp(_v1616)]);
_v1746=_v1749;
} else {
var _v1750=null;
_v1746=_v1750;
}
_v1705=_v1746;
}
_v1700=_v1705;
}
return _v1700;
};
_v1614=_v1615;
lglobal["repr"]=runJTramp(_v1614);
})();
(function () {
var _v1751;
var _v1752=(
  (function (x) {
    console.log(x);
    return null;
  })
);
_v1751=_v1752;
lglobal["console"]=runJTramp(_v1751);
})();
(function () {
var _v1753;
var _v1754=new Cons("eof", new Nil());
_v1753=_v1754;
lglobal["eof"]=runJTramp(_v1753);
})();
(function () {
var _v1755;
var _v1756=function (_v1757) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v1759=lglobal["eof"];
if (_v1759 === undefined) { throw new Error("No such global: " + "eof"); }
var _v1760=_v1759;
var _v1761=lglobal["="];
if (_v1761 === undefined) { throw new Error("No such global: " + "="); }
var _v1762=_v1761;
_v1762=runJTramp(_v1762);
if (typeof _v1762 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1763=new JTramp(_v1762, [runJTramp(_v1757),runJTramp(_v1760)]);
return _v1763;
};
_v1755=_v1756;
lglobal["eof?"]=runJTramp(_v1755);
})();
(function () {
var _v1764;
var _v1765=function (_v1766,_v1767) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var _v1769=0;
var _v1770=_v1769;
var _v1771=lglobal["s:length"];
if (_v1771 === undefined) { throw new Error("No such global: " + "s:length"); }
var _v1772=_v1771;
_v1772=runJTramp(_v1772);
if (typeof _v1772 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1773=new JTramp(_v1772, [runJTramp(_v1767)]);
var _v1774=_v1773;
var _v1775=1;
var _v1776=_v1775;
var _v1777=0;
var _v1778=_v1777;
var _v1779=function (_v1780,_v1781,_v1782,_v1783) {
if (arguments.length < 4) {
throw new Error("Expecting at least 4 arguments.");
}
if (arguments.length > 4) {
throw new Error("Expecting at most 4 arguments.");
}
var _v1785;
var _v1786;
var _v1787=function () {
if (arguments.length > 0) {
throw new Error("Expecting at most 0 arguments.");
}
var _v1789=lglobal["<"];
if (_v1789 === undefined) { throw new Error("No such global: " + "<"); }
var _v1790=_v1789;
_v1790=runJTramp(_v1790);
if (typeof _v1790 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1791=new JTramp(_v1790, [runJTramp(_v1780),runJTramp(_v1781)]);
var _v1792;
if(runJTramp(_v1791)) {
var _v1793=lglobal["s:charAt"];
if (_v1793 === undefined) { throw new Error("No such global: " + "s:charAt"); }
var _v1794=_v1793;
_v1794=runJTramp(_v1794);
if (typeof _v1794 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1795=new JTramp(_v1794, [runJTramp(_v1767),runJTramp(_v1780)]);
_v1792=_v1795;
} else {
var _v1796=lglobal["eof"];
if (_v1796 === undefined) { throw new Error("No such global: " + "eof"); }
_v1792=_v1796;
}
return _v1792;
};
var _v1797=_v1785=runJTramp(_v1787);
var _v1798=function () {
if (arguments.length > 0) {
throw new Error("Expecting at most 0 arguments.");
}
var _v1800=lglobal["<"];
if (_v1800 === undefined) { throw new Error("No such global: " + "<"); }
var _v1801=_v1800;
_v1801=runJTramp(_v1801);
if (typeof _v1801 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1802=new JTramp(_v1801, [runJTramp(_v1780),runJTramp(_v1781)]);
var _v1803;
if(runJTramp(_v1802)) {
var _v1804=lglobal["s:charAt"];
if (_v1804 === undefined) { throw new Error("No such global: " + "s:charAt"); }
var _v1805=_v1804;
_v1805=runJTramp(_v1805);
if (typeof _v1805 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1806=new JTramp(_v1805, [runJTramp(_v1767),runJTramp(_v1780)]);
var _v1807=_v1806;
var _v1808=function (_v1809) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v1811=function (_v1812) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v1814="\n";
var _v1815=_v1814;
var _v1816=lglobal["="];
if (_v1816 === undefined) { throw new Error("No such global: " + "="); }
var _v1817=_v1816;
_v1817=runJTramp(_v1817);
if (typeof _v1817 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1818=new JTramp(_v1817, [runJTramp(_v1812),runJTramp(_v1815)]);
var _v1819;
if(runJTramp(_v1818)) {
var _v1820=1;
var _v1821=_v1820;
var _v1822=lglobal["+"];
if (_v1822 === undefined) { throw new Error("No such global: " + "+"); }
var _v1823=_v1822;
_v1823=runJTramp(_v1823);
if (typeof _v1823 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1824=new JTramp(_v1823, [runJTramp(_v1821),runJTramp(_v1782)]);
var _v1825=_v1782=runJTramp(_v1824);
_v1825=runJTramp(_v1825);
var _v1826=0;
var _v1827=_v1783=runJTramp(_v1826);
_v1819=_v1827;
} else {
var _v1828=1;
var _v1829=_v1828;
var _v1830=lglobal["+"];
if (_v1830 === undefined) { throw new Error("No such global: " + "+"); }
var _v1831=_v1830;
_v1831=runJTramp(_v1831);
if (typeof _v1831 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1832=new JTramp(_v1831, [runJTramp(_v1829),runJTramp(_v1783)]);
var _v1833=_v1783=runJTramp(_v1832);
_v1819=_v1833;
}
return _v1819;
};
var _v1834=_v1811;
_v1834=runJTramp(_v1834);
if (typeof _v1834 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1835=new JTramp(_v1834, [runJTramp(_v1809)]);
_v1835=runJTramp(_v1835);
var _v1836=1;
var _v1837=_v1836;
var _v1838=lglobal["+"];
if (_v1838 === undefined) { throw new Error("No such global: " + "+"); }
var _v1839=_v1838;
_v1839=runJTramp(_v1839);
if (typeof _v1839 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1840=new JTramp(_v1839, [runJTramp(_v1837),runJTramp(_v1780)]);
var _v1841=_v1780=runJTramp(_v1840);
_v1841=runJTramp(_v1841);
return _v1809;
};
var _v1842=_v1808;
_v1842=runJTramp(_v1842);
if (typeof _v1842 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1843=new JTramp(_v1842, [runJTramp(_v1807)]);
_v1803=_v1843;
} else {
var _v1844=lglobal["eof"];
if (_v1844 === undefined) { throw new Error("No such global: " + "eof"); }
_v1803=_v1844;
}
return _v1803;
};
var _v1845=_v1786=runJTramp(_v1798);
var _v1846=function (_v1847) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
var _v1848 = new Nil();
for (var _v1849 = arguments.length - 1; _v1849 >= 1; _v1849--) {
  _v1848 = new Cons(arguments[_v1849], _v1848);
}
var _v1850=function (_v1851) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v1853="peek";
var _v1854=_v1853;
var _v1855=lglobal["="];
if (_v1855 === undefined) { throw new Error("No such global: " + "="); }
var _v1856=_v1855;
_v1856=runJTramp(_v1856);
if (typeof _v1856 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1857=new JTramp(_v1856, [runJTramp(_v1851),runJTramp(_v1854)]);
var _v1858;
if(runJTramp(_v1857)) {
_v1858=_v1785;
} else {
var _v1859="read";
var _v1860=_v1859;
var _v1861=lglobal["="];
if (_v1861 === undefined) { throw new Error("No such global: " + "="); }
var _v1862=_v1861;
_v1862=runJTramp(_v1862);
if (typeof _v1862 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1863=new JTramp(_v1862, [runJTramp(_v1851),runJTramp(_v1860)]);
var _v1864;
if(runJTramp(_v1863)) {
_v1864=_v1786;
} else {
var _v1865="eof?";
var _v1866=_v1865;
var _v1867=lglobal["="];
if (_v1867 === undefined) { throw new Error("No such global: " + "="); }
var _v1868=_v1867;
_v1868=runJTramp(_v1868);
if (typeof _v1868 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1869=new JTramp(_v1868, [runJTramp(_v1851),runJTramp(_v1866)]);
var _v1870;
if(runJTramp(_v1869)) {
var _v1871=function () {
if (arguments.length > 0) {
throw new Error("Expecting at most 0 arguments.");
}
var _v1873=lglobal[">="];
if (_v1873 === undefined) { throw new Error("No such global: " + ">="); }
var _v1874=_v1873;
_v1874=runJTramp(_v1874);
if (typeof _v1874 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1875=new JTramp(_v1874, [runJTramp(_v1780),runJTramp(_v1781)]);
return _v1875;
};
_v1870=_v1871;
} else {
var _v1876="input";
var _v1877=_v1876;
var _v1878=lglobal["="];
if (_v1878 === undefined) { throw new Error("No such global: " + "="); }
var _v1879=_v1878;
_v1879=runJTramp(_v1879);
if (typeof _v1879 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1880=new JTramp(_v1879, [runJTramp(_v1851),runJTramp(_v1877)]);
var _v1881;
if(runJTramp(_v1880)) {
var _v1882=function () {
if (arguments.length > 0) {
throw new Error("Expecting at most 0 arguments.");
}
return _v1767;
};
_v1881=_v1882;
} else {
var _v1884="source";
var _v1885=_v1884;
var _v1886=lglobal["="];
if (_v1886 === undefined) { throw new Error("No such global: " + "="); }
var _v1887=_v1886;
_v1887=runJTramp(_v1887);
if (typeof _v1887 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1888=new JTramp(_v1887, [runJTramp(_v1851),runJTramp(_v1885)]);
var _v1889;
if(runJTramp(_v1888)) {
var _v1890=function () {
if (arguments.length > 0) {
throw new Error("Expecting at most 0 arguments.");
}
return _v1766;
};
_v1889=_v1890;
} else {
var _v1892="line";
var _v1893=_v1892;
var _v1894=lglobal["="];
if (_v1894 === undefined) { throw new Error("No such global: " + "="); }
var _v1895=_v1894;
_v1895=runJTramp(_v1895);
if (typeof _v1895 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1896=new JTramp(_v1895, [runJTramp(_v1851),runJTramp(_v1893)]);
var _v1897;
if(runJTramp(_v1896)) {
var _v1898=function () {
if (arguments.length > 0) {
throw new Error("Expecting at most 0 arguments.");
}
return _v1782;
};
_v1897=_v1898;
} else {
var _v1900="col";
var _v1901=_v1900;
var _v1902=lglobal["="];
if (_v1902 === undefined) { throw new Error("No such global: " + "="); }
var _v1903=_v1902;
_v1903=runJTramp(_v1903);
if (typeof _v1903 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1904=new JTramp(_v1903, [runJTramp(_v1851),runJTramp(_v1901)]);
var _v1905;
if(runJTramp(_v1904)) {
var _v1906=function () {
if (arguments.length > 0) {
throw new Error("Expecting at most 0 arguments.");
}
return _v1783;
};
_v1905=_v1906;
} else {
var _v1908="No such message: ";
var _v1909=_v1908;
var _v1910=lglobal["++"];
if (_v1910 === undefined) { throw new Error("No such global: " + "++"); }
var _v1911=_v1910;
_v1911=runJTramp(_v1911);
if (typeof _v1911 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1912=new JTramp(_v1911, [runJTramp(_v1909),runJTramp(_v1847)]);
var _v1913=_v1912;
var _v1914=lglobal["error"];
if (_v1914 === undefined) { throw new Error("No such global: " + "error"); }
var _v1915=_v1914;
_v1915=runJTramp(_v1915);
if (typeof _v1915 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1916=new JTramp(_v1915, [runJTramp(_v1913)]);
_v1905=_v1916;
}
_v1897=_v1905;
}
_v1889=_v1897;
}
_v1881=_v1889;
}
_v1870=_v1881;
}
_v1864=_v1870;
}
_v1858=_v1864;
}
return _v1858;
};
var _v1917=_v1850;
_v1917=runJTramp(_v1917);
if (typeof _v1917 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1918=new JTramp(_v1917, [runJTramp(_v1847)]);
var _v1919=_v1918;
var _v1920=lglobal["apply"];
if (_v1920 === undefined) { throw new Error("No such global: " + "apply"); }
var _v1921=_v1920;
_v1921=runJTramp(_v1921);
if (typeof _v1921 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1922=new JTramp(_v1921, [runJTramp(_v1919),runJTramp(_v1848)]);
return _v1922;
};
return _v1846;
};
var _v1923=_v1779;
_v1923=runJTramp(_v1923);
if (typeof _v1923 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1924=new JTramp(_v1923, [runJTramp(_v1770),runJTramp(_v1774),runJTramp(_v1776),runJTramp(_v1778)]);
return _v1924;
};
_v1764=_v1765;
lglobal["stream:make"]=runJTramp(_v1764);
})();
(function () {
var _v1925;
var _v1926=function (_v1927,_v1928) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var _v1930="source";
var _v1931=_v1930;
_v1927=runJTramp(_v1927);
if (typeof _v1927 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1932=new JTramp(_v1927, [runJTramp(_v1931)]);
var _v1933=_v1932;
var _v1934=":";
var _v1935=_v1934;
var _v1936="line";
var _v1937=_v1936;
_v1927=runJTramp(_v1927);
if (typeof _v1927 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1938=new JTramp(_v1927, [runJTramp(_v1937)]);
var _v1939=_v1938;
var _v1940=":";
var _v1941=_v1940;
var _v1942="col";
var _v1943=_v1942;
_v1927=runJTramp(_v1927);
if (typeof _v1927 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1944=new JTramp(_v1927, [runJTramp(_v1943)]);
var _v1945=_v1944;
var _v1946=": ";
var _v1947=_v1946;
var _v1948=lglobal["++"];
if (_v1948 === undefined) { throw new Error("No such global: " + "++"); }
var _v1949=_v1948;
_v1949=runJTramp(_v1949);
if (typeof _v1949 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1950=new JTramp(_v1949, [runJTramp(_v1933),runJTramp(_v1935),runJTramp(_v1939),runJTramp(_v1941),runJTramp(_v1945),runJTramp(_v1947),runJTramp(_v1928)]);
var _v1951=_v1950;
var _v1952=lglobal["error"];
if (_v1952 === undefined) { throw new Error("No such global: " + "error"); }
var _v1953=_v1952;
_v1953=runJTramp(_v1953);
if (typeof _v1953 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1954=new JTramp(_v1953, [runJTramp(_v1951)]);
return _v1954;
};
_v1925=_v1926;
lglobal["stream:error"]=runJTramp(_v1925);
})();
(function () {
var _v1955;
var _v1956=function (_v1957,_v1958) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var _v1960="Expecting '";
var _v1961=_v1960;
var _v1962="'.";
var _v1963=_v1962;
var _v1964=lglobal["++"];
if (_v1964 === undefined) { throw new Error("No such global: " + "++"); }
var _v1965=_v1964;
_v1965=runJTramp(_v1965);
if (typeof _v1965 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1966=new JTramp(_v1965, [runJTramp(_v1961),runJTramp(_v1958),runJTramp(_v1963)]);
var _v1967=_v1966;
var _v1968=lglobal["stream:error"];
if (_v1968 === undefined) { throw new Error("No such global: " + "stream:error"); }
var _v1969=_v1968;
_v1969=runJTramp(_v1969);
if (typeof _v1969 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1970=new JTramp(_v1969, [runJTramp(_v1957),runJTramp(_v1967)]);
return _v1970;
};
_v1955=_v1956;
lglobal["stream:error-expecting"]=runJTramp(_v1955);
})();
(function () {
var _v1971;
var _v1972=function (_v1973,_v1974) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var _v1976="peek";
var _v1977=_v1976;
_v1973=runJTramp(_v1973);
if (typeof _v1973 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1978=new JTramp(_v1973, [runJTramp(_v1977)]);
var _v1979=_v1978;
var _v1980=lglobal["="];
if (_v1980 === undefined) { throw new Error("No such global: " + "="); }
var _v1981=_v1980;
_v1981=runJTramp(_v1981);
if (typeof _v1981 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1982=new JTramp(_v1981, [runJTramp(_v1974),runJTramp(_v1979)]);
var _v1983=_v1982;
var _v1984=function (_v1985) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v1987;
if(runJTramp(_v1985)) {
var _v1988="read";
var _v1989=_v1988;
_v1973=runJTramp(_v1973);
if (typeof _v1973 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1990=new JTramp(_v1973, [runJTramp(_v1989)]);
_v1990=runJTramp(_v1990);
var _v1991=lglobal["true"];
if (_v1991 === undefined) { throw new Error("No such global: " + "true"); }
_v1987=_v1991;
} else {
_v1987=_v1985;
}
return _v1987;
};
var _v1992=_v1984;
_v1992=runJTramp(_v1992);
if (typeof _v1992 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v1993=new JTramp(_v1992, [runJTramp(_v1983)]);
return _v1993;
};
_v1971=_v1972;
lglobal["stream:try-read"]=runJTramp(_v1971);
})();
(function () {
var _v1994;
var _v1995=function (_v1996,_v1997) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var _v1999=lglobal["stream:try-read"];
if (_v1999 === undefined) { throw new Error("No such global: " + "stream:try-read"); }
var _v2000=_v1999;
_v2000=runJTramp(_v2000);
if (typeof _v2000 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2001=new JTramp(_v2000, [runJTramp(_v1996),runJTramp(_v1997)]);
var _v2002=_v2001;
var _v2003=function (_v2004) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v2006;
if(runJTramp(_v2004)) {
_v2006=_v2004;
} else {
var _v2007=lglobal["stream:error-expecting"];
if (_v2007 === undefined) { throw new Error("No such global: " + "stream:error-expecting"); }
var _v2008=_v2007;
_v2008=runJTramp(_v2008);
if (typeof _v2008 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2009=new JTramp(_v2008, [runJTramp(_v1996),runJTramp(_v1997)]);
_v2006=_v2009;
}
return _v2006;
};
var _v2010=_v2003;
_v2010=runJTramp(_v2010);
if (typeof _v2010 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2011=new JTramp(_v2010, [runJTramp(_v2002)]);
return _v2011;
};
_v1994=_v1995;
lglobal["stream:read-expect"]=runJTramp(_v1994);
})();
(function () {
var _v2012;
var _v2013=function (_v2014,_v2015) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var _v2017=-1;
var _v2018=_v2017;
var _v2019=lglobal["s:indexOf"];
if (_v2019 === undefined) { throw new Error("No such global: " + "s:indexOf"); }
var _v2020=_v2019;
_v2020=runJTramp(_v2020);
if (typeof _v2020 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2021=new JTramp(_v2020, [runJTramp(_v2014),runJTramp(_v2015)]);
var _v2022=_v2021;
var _v2023=lglobal["!="];
if (_v2023 === undefined) { throw new Error("No such global: " + "!="); }
var _v2024=_v2023;
_v2024=runJTramp(_v2024);
if (typeof _v2024 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2025=new JTramp(_v2024, [runJTramp(_v2018),runJTramp(_v2022)]);
return _v2025;
};
_v2012=_v2013;
lglobal["s:contains"]=runJTramp(_v2012);
})();
(function () {
var _v2026;
var _v2027=function (_v2028) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v2030="eof?";
var _v2031=_v2030;
_v2028=runJTramp(_v2028);
if (typeof _v2028 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2032=new JTramp(_v2028, [runJTramp(_v2031)]);
var _v2033;
if(runJTramp(_v2032)) {
var _v2034="pass";
_v2033=_v2034;
} else {
var _v2035="\n";
var _v2036=_v2035;
var _v2037="peek";
var _v2038=_v2037;
_v2028=runJTramp(_v2028);
if (typeof _v2028 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2039=new JTramp(_v2028, [runJTramp(_v2038)]);
var _v2040=_v2039;
var _v2041=lglobal["="];
if (_v2041 === undefined) { throw new Error("No such global: " + "="); }
var _v2042=_v2041;
_v2042=runJTramp(_v2042);
if (typeof _v2042 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2043=new JTramp(_v2042, [runJTramp(_v2036),runJTramp(_v2040)]);
var _v2044;
if(runJTramp(_v2043)) {
var _v2045=lglobal["read:eat-spaces"];
if (_v2045 === undefined) { throw new Error("No such global: " + "read:eat-spaces"); }
var _v2046=_v2045;
_v2046=runJTramp(_v2046);
if (typeof _v2046 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2047=new JTramp(_v2046, [runJTramp(_v2028)]);
_v2044=_v2047;
} else {
var _v2048=lglobal["otherwise"];
if (_v2048 === undefined) { throw new Error("No such global: " + "otherwise"); }
var _v2049;
if(runJTramp(_v2048)) {
var _v2050="read";
var _v2051=_v2050;
_v2028=runJTramp(_v2028);
if (typeof _v2028 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2052=new JTramp(_v2028, [runJTramp(_v2051)]);
_v2052=runJTramp(_v2052);
var _v2053=lglobal["read:eat-comment"];
if (_v2053 === undefined) { throw new Error("No such global: " + "read:eat-comment"); }
var _v2054=_v2053;
_v2054=runJTramp(_v2054);
if (typeof _v2054 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2055=new JTramp(_v2054, [runJTramp(_v2028)]);
_v2049=_v2055;
} else {
var _v2056=null;
_v2049=_v2056;
}
_v2044=_v2049;
}
_v2033=_v2044;
}
return _v2033;
};
_v2026=_v2027;
lglobal["read:eat-comment"]=runJTramp(_v2026);
})();
(function () {
var _v2057;
var _v2058=function (_v2059) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v2061="eof?";
var _v2062=_v2061;
_v2059=runJTramp(_v2059);
if (typeof _v2059 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2063=new JTramp(_v2059, [runJTramp(_v2062)]);
var _v2064;
if(runJTramp(_v2063)) {
var _v2065="pass";
_v2064=_v2065;
} else {
var _v2066=" \t\n\r";
var _v2067=_v2066;
var _v2068="peek";
var _v2069=_v2068;
_v2059=runJTramp(_v2059);
if (typeof _v2059 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2070=new JTramp(_v2059, [runJTramp(_v2069)]);
var _v2071=_v2070;
var _v2072=lglobal["s:contains"];
if (_v2072 === undefined) { throw new Error("No such global: " + "s:contains"); }
var _v2073=_v2072;
_v2073=runJTramp(_v2073);
if (typeof _v2073 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2074=new JTramp(_v2073, [runJTramp(_v2067),runJTramp(_v2071)]);
var _v2075;
if(runJTramp(_v2074)) {
var _v2076="read";
var _v2077=_v2076;
_v2059=runJTramp(_v2059);
if (typeof _v2059 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2078=new JTramp(_v2059, [runJTramp(_v2077)]);
_v2078=runJTramp(_v2078);
var _v2079=lglobal["read:eat-spaces"];
if (_v2079 === undefined) { throw new Error("No such global: " + "read:eat-spaces"); }
var _v2080=_v2079;
_v2080=runJTramp(_v2080);
if (typeof _v2080 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2081=new JTramp(_v2080, [runJTramp(_v2059)]);
_v2075=_v2081;
} else {
var _v2082=";";
var _v2083=_v2082;
var _v2084="peek";
var _v2085=_v2084;
_v2059=runJTramp(_v2059);
if (typeof _v2059 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2086=new JTramp(_v2059, [runJTramp(_v2085)]);
var _v2087=_v2086;
var _v2088=lglobal["="];
if (_v2088 === undefined) { throw new Error("No such global: " + "="); }
var _v2089=_v2088;
_v2089=runJTramp(_v2089);
if (typeof _v2089 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2090=new JTramp(_v2089, [runJTramp(_v2083),runJTramp(_v2087)]);
var _v2091;
if(runJTramp(_v2090)) {
var _v2092=lglobal["read:eat-comment"];
if (_v2092 === undefined) { throw new Error("No such global: " + "read:eat-comment"); }
var _v2093=_v2092;
_v2093=runJTramp(_v2093);
if (typeof _v2093 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2094=new JTramp(_v2093, [runJTramp(_v2059)]);
_v2091=_v2094;
} else {
var _v2095=null;
_v2091=_v2095;
}
_v2075=_v2091;
}
_v2064=_v2075;
}
return _v2064;
};
_v2057=_v2058;
lglobal["read:eat-spaces"]=runJTramp(_v2057);
})();
(function () {
var _v2096;
var _v2097=function (_v2098) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v2100=lglobal["read:eat-spaces"];
if (_v2100 === undefined) { throw new Error("No such global: " + "read:eat-spaces"); }
var _v2101=_v2100;
_v2101=runJTramp(_v2101);
if (typeof _v2101 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2102=new JTramp(_v2101, [runJTramp(_v2098)]);
_v2102=runJTramp(_v2102);
var _v2103="eof?";
var _v2104=_v2103;
_v2098=runJTramp(_v2098);
if (typeof _v2098 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2105=new JTramp(_v2098, [runJTramp(_v2104)]);
var _v2106;
if(runJTramp(_v2105)) {
var _v2107=")";
var _v2108=_v2107;
var _v2109=lglobal["stream:error-expecting"];
if (_v2109 === undefined) { throw new Error("No such global: " + "stream:error-expecting"); }
var _v2110=_v2109;
_v2110=runJTramp(_v2110);
if (typeof _v2110 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2111=new JTramp(_v2110, [runJTramp(_v2098),runJTramp(_v2108)]);
_v2106=_v2111;
} else {
var _v2112=")";
var _v2113=_v2112;
var _v2114=lglobal["stream:try-read"];
if (_v2114 === undefined) { throw new Error("No such global: " + "stream:try-read"); }
var _v2115=_v2114;
_v2115=runJTramp(_v2115);
if (typeof _v2115 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2116=new JTramp(_v2115, [runJTramp(_v2098),runJTramp(_v2113)]);
var _v2117;
if(runJTramp(_v2116)) {
var _v2118=new Nil();
_v2117=_v2118;
} else {
var _v2119=lglobal["otherwise"];
if (_v2119 === undefined) { throw new Error("No such global: " + "otherwise"); }
var _v2120;
if(runJTramp(_v2119)) {
var _v2121=lglobal["read:sexp"];
if (_v2121 === undefined) { throw new Error("No such global: " + "read:sexp"); }
var _v2122=_v2121;
_v2122=runJTramp(_v2122);
if (typeof _v2122 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2123=new JTramp(_v2122, [runJTramp(_v2098)]);
var _v2124=_v2123;
var _v2125=function (_v2126) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v2128=lglobal["read:eat-spaces"];
if (_v2128 === undefined) { throw new Error("No such global: " + "read:eat-spaces"); }
var _v2129=_v2128;
_v2129=runJTramp(_v2129);
if (typeof _v2129 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2130=new JTramp(_v2129, [runJTramp(_v2098)]);
_v2130=runJTramp(_v2130);
var _v2131="#";
var _v2132=_v2131;
var _v2133=lglobal["stream:try-read"];
if (_v2133 === undefined) { throw new Error("No such global: " + "stream:try-read"); }
var _v2134=_v2133;
_v2134=runJTramp(_v2134);
if (typeof _v2134 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2135=new JTramp(_v2134, [runJTramp(_v2098),runJTramp(_v2132)]);
var _v2136;
if(runJTramp(_v2135)) {
var _v2137=lglobal["read:sexp"];
if (_v2137 === undefined) { throw new Error("No such global: " + "read:sexp"); }
var _v2138=_v2137;
_v2138=runJTramp(_v2138);
if (typeof _v2138 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2139=new JTramp(_v2138, [runJTramp(_v2098)]);
var _v2140=_v2139;
var _v2141=lglobal["cons"];
if (_v2141 === undefined) { throw new Error("No such global: " + "cons"); }
var _v2142=_v2141;
_v2142=runJTramp(_v2142);
if (typeof _v2142 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2143=new JTramp(_v2142, [runJTramp(_v2126),runJTramp(_v2140)]);
var _v2144=_v2143;
var _v2145=function (_v2146) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v2148=lglobal["read:eat-spaces"];
if (_v2148 === undefined) { throw new Error("No such global: " + "read:eat-spaces"); }
var _v2149=_v2148;
_v2149=runJTramp(_v2149);
if (typeof _v2149 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2150=new JTramp(_v2149, [runJTramp(_v2098)]);
_v2150=runJTramp(_v2150);
var _v2151=")";
var _v2152=_v2151;
var _v2153=lglobal["stream:read-expect"];
if (_v2153 === undefined) { throw new Error("No such global: " + "stream:read-expect"); }
var _v2154=_v2153;
_v2154=runJTramp(_v2154);
if (typeof _v2154 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2155=new JTramp(_v2154, [runJTramp(_v2098),runJTramp(_v2152)]);
_v2155=runJTramp(_v2155);
return _v2146;
};
var _v2156=_v2145;
_v2156=runJTramp(_v2156);
if (typeof _v2156 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2157=new JTramp(_v2156, [runJTramp(_v2144)]);
_v2136=_v2157;
} else {
var _v2158=lglobal["read:sexp-tail"];
if (_v2158 === undefined) { throw new Error("No such global: " + "read:sexp-tail"); }
var _v2159=_v2158;
_v2159=runJTramp(_v2159);
if (typeof _v2159 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2160=new JTramp(_v2159, [runJTramp(_v2098)]);
var _v2161=_v2160;
var _v2162=lglobal["cons"];
if (_v2162 === undefined) { throw new Error("No such global: " + "cons"); }
var _v2163=_v2162;
_v2163=runJTramp(_v2163);
if (typeof _v2163 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2164=new JTramp(_v2163, [runJTramp(_v2126),runJTramp(_v2161)]);
_v2136=_v2164;
}
return _v2136;
};
var _v2165=_v2125;
_v2165=runJTramp(_v2165);
if (typeof _v2165 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2166=new JTramp(_v2165, [runJTramp(_v2124)]);
_v2120=_v2166;
} else {
var _v2167=null;
_v2120=_v2167;
}
_v2117=_v2120;
}
_v2106=_v2117;
}
return _v2106;
};
_v2096=_v2097;
lglobal["read:sexp-tail"]=runJTramp(_v2096);
})();
(function () {
var _v2168;
var _v2169=function (_v2170) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v2172="eof?";
var _v2173=_v2172;
_v2170=runJTramp(_v2170);
if (typeof _v2170 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2174=new JTramp(_v2170, [runJTramp(_v2173)]);
var _v2175;
if(runJTramp(_v2174)) {
var _v2176="\"";
var _v2177=_v2176;
var _v2178=lglobal["stream:error-expecting"];
if (_v2178 === undefined) { throw new Error("No such global: " + "stream:error-expecting"); }
var _v2179=_v2178;
_v2179=runJTramp(_v2179);
if (typeof _v2179 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2180=new JTramp(_v2179, [runJTramp(_v2170),runJTramp(_v2177)]);
_v2175=_v2180;
} else {
var _v2181="read";
var _v2182=_v2181;
_v2170=runJTramp(_v2170);
if (typeof _v2170 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2183=new JTramp(_v2170, [runJTramp(_v2182)]);
var _v2184=_v2183;
var _v2185=function (_v2186) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v2188=function (_v2189) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v2191="\"";
var _v2192=_v2191;
var _v2193=lglobal["="];
if (_v2193 === undefined) { throw new Error("No such global: " + "="); }
var _v2194=_v2193;
_v2194=runJTramp(_v2194);
if (typeof _v2194 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2195=new JTramp(_v2194, [runJTramp(_v2189),runJTramp(_v2192)]);
var _v2196;
if(runJTramp(_v2195)) {
var _v2197="";
_v2196=_v2197;
} else {
var _v2198="\\";
var _v2199=_v2198;
var _v2200=lglobal["="];
if (_v2200 === undefined) { throw new Error("No such global: " + "="); }
var _v2201=_v2200;
_v2201=runJTramp(_v2201);
if (typeof _v2201 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2202=new JTramp(_v2201, [runJTramp(_v2189),runJTramp(_v2199)]);
var _v2203;
if(runJTramp(_v2202)) {
var _v2204="read";
var _v2205=_v2204;
_v2170=runJTramp(_v2170);
if (typeof _v2170 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2206=new JTramp(_v2170, [runJTramp(_v2205)]);
var _v2207=_v2206;
var _v2208=function (_v2209) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v2211="\\";
var _v2212=_v2211;
var _v2213=lglobal["="];
if (_v2213 === undefined) { throw new Error("No such global: " + "="); }
var _v2214=_v2213;
_v2214=runJTramp(_v2214);
if (typeof _v2214 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2215=new JTramp(_v2214, [runJTramp(_v2209),runJTramp(_v2212)]);
var _v2216;
if(runJTramp(_v2215)) {
var _v2217="\\";
_v2216=_v2217;
} else {
var _v2218="\"";
var _v2219=_v2218;
var _v2220=lglobal["="];
if (_v2220 === undefined) { throw new Error("No such global: " + "="); }
var _v2221=_v2220;
_v2221=runJTramp(_v2221);
if (typeof _v2221 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2222=new JTramp(_v2221, [runJTramp(_v2209),runJTramp(_v2219)]);
var _v2223;
if(runJTramp(_v2222)) {
var _v2224="\"";
_v2223=_v2224;
} else {
var _v2225="n";
var _v2226=_v2225;
var _v2227=lglobal["="];
if (_v2227 === undefined) { throw new Error("No such global: " + "="); }
var _v2228=_v2227;
_v2228=runJTramp(_v2228);
if (typeof _v2228 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2229=new JTramp(_v2228, [runJTramp(_v2209),runJTramp(_v2226)]);
var _v2230;
if(runJTramp(_v2229)) {
var _v2231="\n";
_v2230=_v2231;
} else {
var _v2232="t";
var _v2233=_v2232;
var _v2234=lglobal["="];
if (_v2234 === undefined) { throw new Error("No such global: " + "="); }
var _v2235=_v2234;
_v2235=runJTramp(_v2235);
if (typeof _v2235 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2236=new JTramp(_v2235, [runJTramp(_v2209),runJTramp(_v2233)]);
var _v2237;
if(runJTramp(_v2236)) {
var _v2238="\t";
_v2237=_v2238;
} else {
var _v2239="r";
var _v2240=_v2239;
var _v2241=lglobal["="];
if (_v2241 === undefined) { throw new Error("No such global: " + "="); }
var _v2242=_v2241;
_v2242=runJTramp(_v2242);
if (typeof _v2242 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2243=new JTramp(_v2242, [runJTramp(_v2209),runJTramp(_v2240)]);
var _v2244;
if(runJTramp(_v2243)) {
var _v2245="\r";
_v2244=_v2245;
} else {
var _v2246="Unknown escape code.";
var _v2247=_v2246;
var _v2248=lglobal["stream:error"];
if (_v2248 === undefined) { throw new Error("No such global: " + "stream:error"); }
var _v2249=_v2248;
_v2249=runJTramp(_v2249);
if (typeof _v2249 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2250=new JTramp(_v2249, [runJTramp(_v2170),runJTramp(_v2247)]);
_v2244=_v2250;
}
_v2237=_v2244;
}
_v2230=_v2237;
}
_v2223=_v2230;
}
_v2216=_v2223;
}
return _v2216;
};
var _v2251=_v2208;
_v2251=runJTramp(_v2251);
if (typeof _v2251 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2252=new JTramp(_v2251, [runJTramp(_v2207)]);
var _v2253=_v2252;
var _v2254=function (_v2255) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v2257=lglobal["read:string"];
if (_v2257 === undefined) { throw new Error("No such global: " + "read:string"); }
var _v2258=_v2257;
_v2258=runJTramp(_v2258);
if (typeof _v2258 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2259=new JTramp(_v2258, [runJTramp(_v2170)]);
var _v2260=_v2259;
var _v2261=lglobal["++"];
if (_v2261 === undefined) { throw new Error("No such global: " + "++"); }
var _v2262=_v2261;
_v2262=runJTramp(_v2262);
if (typeof _v2262 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2263=new JTramp(_v2262, [runJTramp(_v2255),runJTramp(_v2260)]);
return _v2263;
};
var _v2264=_v2254;
_v2264=runJTramp(_v2264);
if (typeof _v2264 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2265=new JTramp(_v2264, [runJTramp(_v2253)]);
_v2203=_v2265;
} else {
var _v2266=lglobal["read:string"];
if (_v2266 === undefined) { throw new Error("No such global: " + "read:string"); }
var _v2267=_v2266;
_v2267=runJTramp(_v2267);
if (typeof _v2267 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2268=new JTramp(_v2267, [runJTramp(_v2170)]);
var _v2269=_v2268;
var _v2270=lglobal["++"];
if (_v2270 === undefined) { throw new Error("No such global: " + "++"); }
var _v2271=_v2270;
_v2271=runJTramp(_v2271);
if (typeof _v2271 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2272=new JTramp(_v2271, [runJTramp(_v2186),runJTramp(_v2269)]);
_v2203=_v2272;
}
_v2196=_v2203;
}
return _v2196;
};
var _v2273=_v2188;
_v2273=runJTramp(_v2273);
if (typeof _v2273 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2274=new JTramp(_v2273, [runJTramp(_v2186)]);
return _v2274;
};
var _v2275=_v2185;
_v2275=runJTramp(_v2275);
if (typeof _v2275 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2276=new JTramp(_v2275, [runJTramp(_v2184)]);
_v2175=_v2276;
}
return _v2175;
};
_v2168=_v2169;
lglobal["read:string"]=runJTramp(_v2168);
})();
(function () {
var _v2277;
var _v2278=function (_v2279) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v2281;
var _v2282=function () {
if (arguments.length > 0) {
throw new Error("Expecting at most 0 arguments.");
}
var _v2284="peek";
var _v2285=_v2284;
_v2279=runJTramp(_v2279);
if (typeof _v2279 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2286=new JTramp(_v2279, [runJTramp(_v2285)]);
var _v2287=_v2286;
var _v2288=function (_v2289) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v2291=lglobal["eof?"];
if (_v2291 === undefined) { throw new Error("No such global: " + "eof?"); }
var _v2292=_v2291;
_v2292=runJTramp(_v2292);
if (typeof _v2292 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2293=new JTramp(_v2292, [runJTramp(_v2289)]);
var _v2294=_v2293;
var _v2295=function (_v2296) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v2298;
if(runJTramp(_v2296)) {
_v2298=_v2296;
} else {
var _v2299="'\"()#; \t\n\r";
var _v2300=_v2299;
var _v2301=lglobal["s:contains"];
if (_v2301 === undefined) { throw new Error("No such global: " + "s:contains"); }
var _v2302=_v2301;
_v2302=runJTramp(_v2302);
if (typeof _v2302 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2303=new JTramp(_v2302, [runJTramp(_v2300),runJTramp(_v2289)]);
_v2298=_v2303;
}
return _v2298;
};
var _v2304=_v2295;
_v2304=runJTramp(_v2304);
if (typeof _v2304 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2305=new JTramp(_v2304, [runJTramp(_v2294)]);
var _v2306;
if(runJTramp(_v2305)) {
var _v2307="";
_v2306=_v2307;
} else {
var _v2308="read";
var _v2309=_v2308;
_v2279=runJTramp(_v2279);
if (typeof _v2279 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2310=new JTramp(_v2279, [runJTramp(_v2309)]);
_v2310=runJTramp(_v2310);
_v2281=runJTramp(_v2281);
if (typeof _v2281 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2311=new JTramp(_v2281, []);
var _v2312=_v2311;
var _v2313=lglobal["++"];
if (_v2313 === undefined) { throw new Error("No such global: " + "++"); }
var _v2314=_v2313;
_v2314=runJTramp(_v2314);
if (typeof _v2314 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2315=new JTramp(_v2314, [runJTramp(_v2289),runJTramp(_v2312)]);
_v2306=_v2315;
}
return _v2306;
};
var _v2316=_v2288;
_v2316=runJTramp(_v2316);
if (typeof _v2316 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2317=new JTramp(_v2316, [runJTramp(_v2287)]);
return _v2317;
};
var _v2318=_v2281=runJTramp(_v2282);
_v2281=runJTramp(_v2281);
if (typeof _v2281 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2319=new JTramp(_v2281, []);
var _v2320=_v2319;
var _v2321=function (_v2322) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v2324="";
var _v2325=_v2324;
var _v2326=lglobal["="];
if (_v2326 === undefined) { throw new Error("No such global: " + "="); }
var _v2327=_v2326;
_v2327=runJTramp(_v2327);
if (typeof _v2327 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2328=new JTramp(_v2327, [runJTramp(_v2325),runJTramp(_v2322)]);
var _v2329;
if(runJTramp(_v2328)) {
var _v2330="Expecting identifier or number.";
var _v2331=_v2330;
var _v2332=lglobal["stream:error"];
if (_v2332 === undefined) { throw new Error("No such global: " + "stream:error"); }
var _v2333=_v2332;
_v2333=runJTramp(_v2333);
if (typeof _v2333 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2334=new JTramp(_v2333, [runJTramp(_v2279),runJTramp(_v2331)]);
_v2329=_v2334;
} else {
var _v2335=lglobal["js:toNum"];
if (_v2335 === undefined) { throw new Error("No such global: " + "js:toNum"); }
var _v2336=_v2335;
_v2336=runJTramp(_v2336);
if (typeof _v2336 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2337=new JTramp(_v2336, [runJTramp(_v2322)]);
var _v2338=_v2337;
var _v2339=function (_v2340) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v2342=lglobal["NaN?"];
if (_v2342 === undefined) { throw new Error("No such global: " + "NaN?"); }
var _v2343=_v2342;
_v2343=runJTramp(_v2343);
if (typeof _v2343 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2344=new JTramp(_v2343, [runJTramp(_v2340)]);
var _v2345;
if(runJTramp(_v2344)) {
_v2345=_v2322;
} else {
_v2345=_v2340;
}
return _v2345;
};
var _v2346=_v2339;
_v2346=runJTramp(_v2346);
if (typeof _v2346 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2347=new JTramp(_v2346, [runJTramp(_v2338)]);
_v2329=_v2347;
}
return _v2329;
};
var _v2348=_v2321;
_v2348=runJTramp(_v2348);
if (typeof _v2348 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2349=new JTramp(_v2348, [runJTramp(_v2320)]);
return _v2349;
};
_v2277=_v2278;
lglobal["read:token"]=runJTramp(_v2277);
})();
(function () {
var _v2350;
var _v2351=function (_v2352) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v2354=lglobal["read:eat-spaces"];
if (_v2354 === undefined) { throw new Error("No such global: " + "read:eat-spaces"); }
var _v2355=_v2354;
_v2355=runJTramp(_v2355);
if (typeof _v2355 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2356=new JTramp(_v2355, [runJTramp(_v2352)]);
_v2356=runJTramp(_v2356);
var _v2357="eof?";
var _v2358=_v2357;
_v2352=runJTramp(_v2352);
if (typeof _v2352 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2359=new JTramp(_v2352, [runJTramp(_v2358)]);
var _v2360;
if(runJTramp(_v2359)) {
var _v2361="Unexpected end of input.";
var _v2362=_v2361;
var _v2363=lglobal["stream:error"];
if (_v2363 === undefined) { throw new Error("No such global: " + "stream:error"); }
var _v2364=_v2363;
_v2364=runJTramp(_v2364);
if (typeof _v2364 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2365=new JTramp(_v2364, [runJTramp(_v2352),runJTramp(_v2362)]);
_v2360=_v2365;
} else {
var _v2366="(";
var _v2367=_v2366;
var _v2368=lglobal["stream:try-read"];
if (_v2368 === undefined) { throw new Error("No such global: " + "stream:try-read"); }
var _v2369=_v2368;
_v2369=runJTramp(_v2369);
if (typeof _v2369 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2370=new JTramp(_v2369, [runJTramp(_v2352),runJTramp(_v2367)]);
var _v2371;
if(runJTramp(_v2370)) {
var _v2372=lglobal["read:sexp-tail"];
if (_v2372 === undefined) { throw new Error("No such global: " + "read:sexp-tail"); }
var _v2373=_v2372;
_v2373=runJTramp(_v2373);
if (typeof _v2373 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2374=new JTramp(_v2373, [runJTramp(_v2352)]);
_v2371=_v2374;
} else {
var _v2375="'";
var _v2376=_v2375;
var _v2377=lglobal["stream:try-read"];
if (_v2377 === undefined) { throw new Error("No such global: " + "stream:try-read"); }
var _v2378=_v2377;
_v2378=runJTramp(_v2378);
if (typeof _v2378 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2379=new JTramp(_v2378, [runJTramp(_v2352),runJTramp(_v2376)]);
var _v2380;
if(runJTramp(_v2379)) {
var _v2381="quote";
var _v2382=_v2381;
var _v2383=lglobal["read:sexp"];
if (_v2383 === undefined) { throw new Error("No such global: " + "read:sexp"); }
var _v2384=_v2383;
_v2384=runJTramp(_v2384);
if (typeof _v2384 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2385=new JTramp(_v2384, [runJTramp(_v2352)]);
var _v2386=_v2385;
var _v2387=lglobal["list"];
if (_v2387 === undefined) { throw new Error("No such global: " + "list"); }
var _v2388=_v2387;
_v2388=runJTramp(_v2388);
if (typeof _v2388 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2389=new JTramp(_v2388, [runJTramp(_v2382),runJTramp(_v2386)]);
_v2380=_v2389;
} else {
var _v2390="\"";
var _v2391=_v2390;
var _v2392=lglobal["stream:try-read"];
if (_v2392 === undefined) { throw new Error("No such global: " + "stream:try-read"); }
var _v2393=_v2392;
_v2393=runJTramp(_v2393);
if (typeof _v2393 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2394=new JTramp(_v2393, [runJTramp(_v2352),runJTramp(_v2391)]);
var _v2395;
if(runJTramp(_v2394)) {
var _v2396="quote";
var _v2397=_v2396;
var _v2398=lglobal["read:string"];
if (_v2398 === undefined) { throw new Error("No such global: " + "read:string"); }
var _v2399=_v2398;
_v2399=runJTramp(_v2399);
if (typeof _v2399 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2400=new JTramp(_v2399, [runJTramp(_v2352)]);
var _v2401=_v2400;
var _v2402=lglobal["list"];
if (_v2402 === undefined) { throw new Error("No such global: " + "list"); }
var _v2403=_v2402;
_v2403=runJTramp(_v2403);
if (typeof _v2403 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2404=new JTramp(_v2403, [runJTramp(_v2397),runJTramp(_v2401)]);
_v2395=_v2404;
} else {
var _v2405=lglobal["otherwise"];
if (_v2405 === undefined) { throw new Error("No such global: " + "otherwise"); }
var _v2406;
if(runJTramp(_v2405)) {
var _v2407=lglobal["read:token"];
if (_v2407 === undefined) { throw new Error("No such global: " + "read:token"); }
var _v2408=_v2407;
_v2408=runJTramp(_v2408);
if (typeof _v2408 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2409=new JTramp(_v2408, [runJTramp(_v2352)]);
_v2406=_v2409;
} else {
var _v2410=null;
_v2406=_v2410;
}
_v2395=_v2406;
}
_v2380=_v2395;
}
_v2371=_v2380;
}
_v2360=_v2371;
}
return _v2360;
};
_v2350=_v2351;
lglobal["read:sexp"]=runJTramp(_v2350);
})();
(function () {
var _v2411;
var _v2412=function (_v2413) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v2415=lglobal["read:eat-spaces"];
if (_v2415 === undefined) { throw new Error("No such global: " + "read:eat-spaces"); }
var _v2416=_v2415;
_v2416=runJTramp(_v2416);
if (typeof _v2416 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2417=new JTramp(_v2416, [runJTramp(_v2413)]);
_v2417=runJTramp(_v2417);
var _v2418="eof?";
var _v2419=_v2418;
_v2413=runJTramp(_v2413);
if (typeof _v2413 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2420=new JTramp(_v2413, [runJTramp(_v2419)]);
var _v2421=_v2420;
var _v2422=lglobal["not"];
if (_v2422 === undefined) { throw new Error("No such global: " + "not"); }
var _v2423=_v2422;
_v2423=runJTramp(_v2423);
if (typeof _v2423 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2424=new JTramp(_v2423, [runJTramp(_v2421)]);
return _v2424;
};
_v2411=_v2412;
lglobal["read:has-another?"]=runJTramp(_v2411);
})();
(function () {
var _v2425;
var _v2426=function (_v2427) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
var _v2428 = new Nil();
for (var _v2429 = arguments.length - 1; _v2429 >= 1; _v2429--) {
  _v2428 = new Cons(arguments[_v2429], _v2428);
}
var _v2430=lglobal["dict"];
if (_v2430 === undefined) { throw new Error("No such global: " + "dict"); }
var _v2431=_v2430;
var _v2432=lglobal["apply"];
if (_v2432 === undefined) { throw new Error("No such global: " + "apply"); }
var _v2433=_v2432;
_v2433=runJTramp(_v2433);
if (typeof _v2433 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2434=new JTramp(_v2433, [runJTramp(_v2431),runJTramp(_v2428)]);
var _v2435=_v2434;
var _v2436=function (_v2437) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v2439=function (_v2440) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
var _v2441 = new Nil();
for (var _v2442 = arguments.length - 1; _v2442 >= 1; _v2442--) {
  _v2441 = new Cons(arguments[_v2442], _v2441);
}
var _v2443=function (_v2444) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v2446="lookup";
var _v2447=_v2446;
var _v2448=lglobal["="];
if (_v2448 === undefined) { throw new Error("No such global: " + "="); }
var _v2449=_v2448;
_v2449=runJTramp(_v2449);
if (typeof _v2449 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2450=new JTramp(_v2449, [runJTramp(_v2444),runJTramp(_v2447)]);
var _v2451;
if(runJTramp(_v2450)) {
var _v2452=function (_v2453) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v2455=lglobal["dict:has?"];
if (_v2455 === undefined) { throw new Error("No such global: " + "dict:has?"); }
var _v2456=_v2455;
_v2456=runJTramp(_v2456);
if (typeof _v2456 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2457=new JTramp(_v2456, [runJTramp(_v2437),runJTramp(_v2453)]);
var _v2458;
if(runJTramp(_v2457)) {
var _v2459=lglobal["dict:get"];
if (_v2459 === undefined) { throw new Error("No such global: " + "dict:get"); }
var _v2460=_v2459;
_v2460=runJTramp(_v2460);
if (typeof _v2460 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2461=new JTramp(_v2460, [runJTramp(_v2437),runJTramp(_v2453)]);
_v2458=_v2461;
} else {
var _v2462=lglobal["null?"];
if (_v2462 === undefined) { throw new Error("No such global: " + "null?"); }
var _v2463=_v2462;
_v2463=runJTramp(_v2463);
if (typeof _v2463 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2464=new JTramp(_v2463, [runJTramp(_v2427)]);
var _v2465;
if(runJTramp(_v2464)) {
var _v2466="Environment key error: ";
var _v2467=_v2466;
var _v2468=lglobal["repr"];
if (_v2468 === undefined) { throw new Error("No such global: " + "repr"); }
var _v2469=_v2468;
_v2469=runJTramp(_v2469);
if (typeof _v2469 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2470=new JTramp(_v2469, [runJTramp(_v2453)]);
var _v2471=_v2470;
var _v2472=lglobal["++"];
if (_v2472 === undefined) { throw new Error("No such global: " + "++"); }
var _v2473=_v2472;
_v2473=runJTramp(_v2473);
if (typeof _v2473 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2474=new JTramp(_v2473, [runJTramp(_v2467),runJTramp(_v2471)]);
var _v2475=_v2474;
var _v2476=lglobal["error"];
if (_v2476 === undefined) { throw new Error("No such global: " + "error"); }
var _v2477=_v2476;
_v2477=runJTramp(_v2477);
if (typeof _v2477 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2478=new JTramp(_v2477, [runJTramp(_v2475)]);
_v2465=_v2478;
} else {
var _v2479=lglobal["otherwise"];
if (_v2479 === undefined) { throw new Error("No such global: " + "otherwise"); }
var _v2480;
if(runJTramp(_v2479)) {
var _v2481="lookup";
var _v2482=_v2481;
_v2427=runJTramp(_v2427);
if (typeof _v2427 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2483=new JTramp(_v2427, [runJTramp(_v2482),runJTramp(_v2453)]);
_v2480=_v2483;
} else {
var _v2484=null;
_v2480=_v2484;
}
_v2465=_v2480;
}
_v2458=_v2465;
}
return _v2458;
};
_v2451=_v2452;
} else {
var _v2485="has?";
var _v2486=_v2485;
var _v2487=lglobal["="];
if (_v2487 === undefined) { throw new Error("No such global: " + "="); }
var _v2488=_v2487;
_v2488=runJTramp(_v2488);
if (typeof _v2488 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2489=new JTramp(_v2488, [runJTramp(_v2444),runJTramp(_v2486)]);
var _v2490;
if(runJTramp(_v2489)) {
var _v2491=function (_v2492) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v2494=lglobal["dict:has?"];
if (_v2494 === undefined) { throw new Error("No such global: " + "dict:has?"); }
var _v2495=_v2494;
_v2495=runJTramp(_v2495);
if (typeof _v2495 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2496=new JTramp(_v2495, [runJTramp(_v2437),runJTramp(_v2492)]);
var _v2497;
if(runJTramp(_v2496)) {
var _v2498=lglobal["true"];
if (_v2498 === undefined) { throw new Error("No such global: " + "true"); }
_v2497=_v2498;
} else {
var _v2499=lglobal["null?"];
if (_v2499 === undefined) { throw new Error("No such global: " + "null?"); }
var _v2500=_v2499;
_v2500=runJTramp(_v2500);
if (typeof _v2500 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2501=new JTramp(_v2500, [runJTramp(_v2427)]);
var _v2502;
if(runJTramp(_v2501)) {
var _v2503=lglobal["false"];
if (_v2503 === undefined) { throw new Error("No such global: " + "false"); }
_v2502=_v2503;
} else {
var _v2504="has?";
var _v2505=_v2504;
_v2427=runJTramp(_v2427);
if (typeof _v2427 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2506=new JTramp(_v2427, [runJTramp(_v2505),runJTramp(_v2492)]);
_v2502=_v2506;
}
_v2497=_v2502;
}
return _v2497;
};
_v2490=_v2491;
} else {
var _v2507="set!";
var _v2508=_v2507;
var _v2509=lglobal["="];
if (_v2509 === undefined) { throw new Error("No such global: " + "="); }
var _v2510=_v2509;
_v2510=runJTramp(_v2510);
if (typeof _v2510 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2511=new JTramp(_v2510, [runJTramp(_v2444),runJTramp(_v2508)]);
var _v2512;
if(runJTramp(_v2511)) {
var _v2513=function (_v2514,_v2515) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var _v2517=lglobal["dict:set!"];
if (_v2517 === undefined) { throw new Error("No such global: " + "dict:set!"); }
var _v2518=_v2517;
_v2518=runJTramp(_v2518);
if (typeof _v2518 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2519=new JTramp(_v2518, [runJTramp(_v2437),runJTramp(_v2514),runJTramp(_v2515)]);
return _v2519;
};
_v2512=_v2513;
} else {
var _v2520="No such message: ";
var _v2521=_v2520;
var _v2522=lglobal["++"];
if (_v2522 === undefined) { throw new Error("No such global: " + "++"); }
var _v2523=_v2522;
_v2523=runJTramp(_v2523);
if (typeof _v2523 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2524=new JTramp(_v2523, [runJTramp(_v2521),runJTramp(_v2440)]);
var _v2525=_v2524;
var _v2526=lglobal["error"];
if (_v2526 === undefined) { throw new Error("No such global: " + "error"); }
var _v2527=_v2526;
_v2527=runJTramp(_v2527);
if (typeof _v2527 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2528=new JTramp(_v2527, [runJTramp(_v2525)]);
_v2512=_v2528;
}
_v2490=_v2512;
}
_v2451=_v2490;
}
return _v2451;
};
var _v2529=_v2443;
_v2529=runJTramp(_v2529);
if (typeof _v2529 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2530=new JTramp(_v2529, [runJTramp(_v2440)]);
var _v2531=_v2530;
var _v2532=lglobal["apply"];
if (_v2532 === undefined) { throw new Error("No such global: " + "apply"); }
var _v2533=_v2532;
_v2533=runJTramp(_v2533);
if (typeof _v2533 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2534=new JTramp(_v2533, [runJTramp(_v2531),runJTramp(_v2441)]);
return _v2534;
};
return _v2439;
};
var _v2535=_v2436;
_v2535=runJTramp(_v2535);
if (typeof _v2535 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2536=new JTramp(_v2535, [runJTramp(_v2435)]);
return _v2536;
};
_v2425=_v2426;
lglobal["make-env"]=runJTramp(_v2425);
})();
(function () {
var _v2537;
var _v2538=0;
var _v2539=_v2538;
var _v2540=function (_v2541) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v2543=function (_v2544) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v2546=1;
var _v2547=_v2546;
var _v2548=lglobal["+"];
if (_v2548 === undefined) { throw new Error("No such global: " + "+"); }
var _v2549=_v2548;
_v2549=runJTramp(_v2549);
if (typeof _v2549 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2550=new JTramp(_v2549, [runJTramp(_v2541),runJTramp(_v2547)]);
var _v2551=_v2541=runJTramp(_v2550);
_v2551=runJTramp(_v2551);
var _v2552="#";
var _v2553=_v2552;
var _v2554=lglobal["++"];
if (_v2554 === undefined) { throw new Error("No such global: " + "++"); }
var _v2555=_v2554;
_v2555=runJTramp(_v2555);
if (typeof _v2555 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2556=new JTramp(_v2555, [runJTramp(_v2544),runJTramp(_v2553),runJTramp(_v2541)]);
return _v2556;
};
return _v2543;
};
var _v2557=_v2540;
_v2557=runJTramp(_v2557);
if (typeof _v2557 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2558=new JTramp(_v2557, [runJTramp(_v2539)]);
_v2537=_v2558;
lglobal["new-var"]=runJTramp(_v2537);
})();
(function () {
var _v2785;
var _v2786=function (_v2787,_v2788) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var _v2790="midir:lit";
var _v2791=_v2790;
var _v2792=lglobal["list"];
if (_v2792 === undefined) { throw new Error("No such global: " + "list"); }
var _v2793=_v2792;
_v2793=runJTramp(_v2793);
if (typeof _v2793 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2794=new JTramp(_v2793, [runJTramp(_v2791),runJTramp(_v2787),runJTramp(_v2788)]);
return _v2794;
};
_v2785=_v2786;
lglobal["midir:lit"]=runJTramp(_v2785);
})();
(function () {
var _v2795;
var _v2796=function (_v2797) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v2799=lglobal["cons?"];
if (_v2799 === undefined) { throw new Error("No such global: " + "cons?"); }
var _v2800=_v2799;
_v2800=runJTramp(_v2800);
if (typeof _v2800 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2801=new JTramp(_v2800, [runJTramp(_v2797)]);
var _v2802=_v2801;
var _v2803=function (_v2804) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v2806;
if(runJTramp(_v2804)) {
var _v2807=lglobal["head"];
if (_v2807 === undefined) { throw new Error("No such global: " + "head"); }
var _v2808=_v2807;
_v2808=runJTramp(_v2808);
if (typeof _v2808 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2809=new JTramp(_v2808, [runJTramp(_v2797)]);
var _v2810=_v2809;
var _v2811="midir:lit";
var _v2812=_v2811;
var _v2813=lglobal["="];
if (_v2813 === undefined) { throw new Error("No such global: " + "="); }
var _v2814=_v2813;
_v2814=runJTramp(_v2814);
if (typeof _v2814 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2815=new JTramp(_v2814, [runJTramp(_v2810),runJTramp(_v2812)]);
_v2806=_v2815;
} else {
_v2806=_v2804;
}
return _v2806;
};
var _v2816=_v2803;
_v2816=runJTramp(_v2816);
if (typeof _v2816 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2817=new JTramp(_v2816, [runJTramp(_v2802)]);
return _v2817;
};
_v2795=_v2796;
lglobal["midir:lit?"]=runJTramp(_v2795);
})();
(function () {
var _v2818;
var _v2819=function (_v2820,_v2821) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var _v2823="midir:lookup";
var _v2824=_v2823;
var _v2825=lglobal["list"];
if (_v2825 === undefined) { throw new Error("No such global: " + "list"); }
var _v2826=_v2825;
_v2826=runJTramp(_v2826);
if (typeof _v2826 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2827=new JTramp(_v2826, [runJTramp(_v2824),runJTramp(_v2820),runJTramp(_v2821)]);
return _v2827;
};
_v2818=_v2819;
lglobal["midir:lookup"]=runJTramp(_v2818);
})();
(function () {
var _v2828;
var _v2829=function (_v2830) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v2832=lglobal["cons?"];
if (_v2832 === undefined) { throw new Error("No such global: " + "cons?"); }
var _v2833=_v2832;
_v2833=runJTramp(_v2833);
if (typeof _v2833 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2834=new JTramp(_v2833, [runJTramp(_v2830)]);
var _v2835=_v2834;
var _v2836=function (_v2837) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v2839;
if(runJTramp(_v2837)) {
var _v2840=lglobal["head"];
if (_v2840 === undefined) { throw new Error("No such global: " + "head"); }
var _v2841=_v2840;
_v2841=runJTramp(_v2841);
if (typeof _v2841 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2842=new JTramp(_v2841, [runJTramp(_v2830)]);
var _v2843=_v2842;
var _v2844="midir:lookup";
var _v2845=_v2844;
var _v2846=lglobal["="];
if (_v2846 === undefined) { throw new Error("No such global: " + "="); }
var _v2847=_v2846;
_v2847=runJTramp(_v2847);
if (typeof _v2847 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2848=new JTramp(_v2847, [runJTramp(_v2843),runJTramp(_v2845)]);
_v2839=_v2848;
} else {
_v2839=_v2837;
}
return _v2839;
};
var _v2849=_v2836;
_v2849=runJTramp(_v2849);
if (typeof _v2849 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2850=new JTramp(_v2849, [runJTramp(_v2835)]);
return _v2850;
};
_v2828=_v2829;
lglobal["midir:lookup?"]=runJTramp(_v2828);
})();
(function () {
var _v2851;
var _v2852=function (_v2853,_v2854) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var _v2856="midir:glookup";
var _v2857=_v2856;
var _v2858=lglobal["list"];
if (_v2858 === undefined) { throw new Error("No such global: " + "list"); }
var _v2859=_v2858;
_v2859=runJTramp(_v2859);
if (typeof _v2859 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2860=new JTramp(_v2859, [runJTramp(_v2857),runJTramp(_v2853),runJTramp(_v2854)]);
return _v2860;
};
_v2851=_v2852;
lglobal["midir:glookup"]=runJTramp(_v2851);
})();
(function () {
var _v2861;
var _v2862=function (_v2863) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v2865=lglobal["cons?"];
if (_v2865 === undefined) { throw new Error("No such global: " + "cons?"); }
var _v2866=_v2865;
_v2866=runJTramp(_v2866);
if (typeof _v2866 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2867=new JTramp(_v2866, [runJTramp(_v2863)]);
var _v2868=_v2867;
var _v2869=function (_v2870) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v2872;
if(runJTramp(_v2870)) {
var _v2873=lglobal["head"];
if (_v2873 === undefined) { throw new Error("No such global: " + "head"); }
var _v2874=_v2873;
_v2874=runJTramp(_v2874);
if (typeof _v2874 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2875=new JTramp(_v2874, [runJTramp(_v2863)]);
var _v2876=_v2875;
var _v2877="midir:glookup";
var _v2878=_v2877;
var _v2879=lglobal["="];
if (_v2879 === undefined) { throw new Error("No such global: " + "="); }
var _v2880=_v2879;
_v2880=runJTramp(_v2880);
if (typeof _v2880 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2881=new JTramp(_v2880, [runJTramp(_v2876),runJTramp(_v2878)]);
_v2872=_v2881;
} else {
_v2872=_v2870;
}
return _v2872;
};
var _v2882=_v2869;
_v2882=runJTramp(_v2882);
if (typeof _v2882 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2883=new JTramp(_v2882, [runJTramp(_v2868)]);
return _v2883;
};
_v2861=_v2862;
lglobal["midir:glookup?"]=runJTramp(_v2861);
})();
(function () {
var _v2884;
var _v2885=function (_v2886,_v2887,_v2888,_v2889) {
if (arguments.length < 4) {
throw new Error("Expecting at least 4 arguments.");
}
if (arguments.length > 4) {
throw new Error("Expecting at most 4 arguments.");
}
var _v2891="midir:enter";
var _v2892=_v2891;
var _v2893=lglobal["list"];
if (_v2893 === undefined) { throw new Error("No such global: " + "list"); }
var _v2894=_v2893;
_v2894=runJTramp(_v2894);
if (typeof _v2894 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2895=new JTramp(_v2894, [runJTramp(_v2892),runJTramp(_v2886),runJTramp(_v2887),runJTramp(_v2888),runJTramp(_v2889)]);
return _v2895;
};
_v2884=_v2885;
lglobal["midir:enter"]=runJTramp(_v2884);
})();
(function () {
var _v2896;
var _v2897=function (_v2898) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v2900=lglobal["cons?"];
if (_v2900 === undefined) { throw new Error("No such global: " + "cons?"); }
var _v2901=_v2900;
_v2901=runJTramp(_v2901);
if (typeof _v2901 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2902=new JTramp(_v2901, [runJTramp(_v2898)]);
var _v2903=_v2902;
var _v2904=function (_v2905) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v2907;
if(runJTramp(_v2905)) {
var _v2908=lglobal["head"];
if (_v2908 === undefined) { throw new Error("No such global: " + "head"); }
var _v2909=_v2908;
_v2909=runJTramp(_v2909);
if (typeof _v2909 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2910=new JTramp(_v2909, [runJTramp(_v2898)]);
var _v2911=_v2910;
var _v2912="midir:enter";
var _v2913=_v2912;
var _v2914=lglobal["="];
if (_v2914 === undefined) { throw new Error("No such global: " + "="); }
var _v2915=_v2914;
_v2915=runJTramp(_v2915);
if (typeof _v2915 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2916=new JTramp(_v2915, [runJTramp(_v2911),runJTramp(_v2913)]);
_v2907=_v2916;
} else {
_v2907=_v2905;
}
return _v2907;
};
var _v2917=_v2904;
_v2917=runJTramp(_v2917);
if (typeof _v2917 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2918=new JTramp(_v2917, [runJTramp(_v2903)]);
return _v2918;
};
_v2896=_v2897;
lglobal["midir:enter?"]=runJTramp(_v2896);
})();
(function () {
var _v2919;
var _v2920=function () {
if (arguments.length > 0) {
throw new Error("Expecting at most 0 arguments.");
}
var _v2922="midir:return";
var _v2923=_v2922;
var _v2924=lglobal["list"];
if (_v2924 === undefined) { throw new Error("No such global: " + "list"); }
var _v2925=_v2924;
_v2925=runJTramp(_v2925);
if (typeof _v2925 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2926=new JTramp(_v2925, [runJTramp(_v2923)]);
return _v2926;
};
_v2919=_v2920;
lglobal["midir:return"]=runJTramp(_v2919);
})();
(function () {
var _v2927;
var _v2928=function (_v2929) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v2931=lglobal["cons?"];
if (_v2931 === undefined) { throw new Error("No such global: " + "cons?"); }
var _v2932=_v2931;
_v2932=runJTramp(_v2932);
if (typeof _v2932 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2933=new JTramp(_v2932, [runJTramp(_v2929)]);
var _v2934=_v2933;
var _v2935=function (_v2936) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v2938;
if(runJTramp(_v2936)) {
var _v2939=lglobal["head"];
if (_v2939 === undefined) { throw new Error("No such global: " + "head"); }
var _v2940=_v2939;
_v2940=runJTramp(_v2940);
if (typeof _v2940 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2941=new JTramp(_v2940, [runJTramp(_v2929)]);
var _v2942=_v2941;
var _v2943="midir:return";
var _v2944=_v2943;
var _v2945=lglobal["="];
if (_v2945 === undefined) { throw new Error("No such global: " + "="); }
var _v2946=_v2945;
_v2946=runJTramp(_v2946);
if (typeof _v2946 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2947=new JTramp(_v2946, [runJTramp(_v2942),runJTramp(_v2944)]);
_v2938=_v2947;
} else {
_v2938=_v2936;
}
return _v2938;
};
var _v2948=_v2935;
_v2948=runJTramp(_v2948);
if (typeof _v2948 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2949=new JTramp(_v2948, [runJTramp(_v2934)]);
return _v2949;
};
_v2927=_v2928;
lglobal["midir:return?"]=runJTramp(_v2927);
})();
(function () {
var _v2950;
var _v2951=function (_v2952,_v2953) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var _v2955="midir:bind";
var _v2956=_v2955;
var _v2957=lglobal["list"];
if (_v2957 === undefined) { throw new Error("No such global: " + "list"); }
var _v2958=_v2957;
_v2958=runJTramp(_v2958);
if (typeof _v2958 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2959=new JTramp(_v2958, [runJTramp(_v2956),runJTramp(_v2952),runJTramp(_v2953)]);
return _v2959;
};
_v2950=_v2951;
lglobal["midir:bind"]=runJTramp(_v2950);
})();
(function () {
var _v2960;
var _v2961=function (_v2962) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v2964=lglobal["cons?"];
if (_v2964 === undefined) { throw new Error("No such global: " + "cons?"); }
var _v2965=_v2964;
_v2965=runJTramp(_v2965);
if (typeof _v2965 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2966=new JTramp(_v2965, [runJTramp(_v2962)]);
var _v2967=_v2966;
var _v2968=function (_v2969) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v2971;
if(runJTramp(_v2969)) {
var _v2972=lglobal["head"];
if (_v2972 === undefined) { throw new Error("No such global: " + "head"); }
var _v2973=_v2972;
_v2973=runJTramp(_v2973);
if (typeof _v2973 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2974=new JTramp(_v2973, [runJTramp(_v2962)]);
var _v2975=_v2974;
var _v2976="midir:bind";
var _v2977=_v2976;
var _v2978=lglobal["="];
if (_v2978 === undefined) { throw new Error("No such global: " + "="); }
var _v2979=_v2978;
_v2979=runJTramp(_v2979);
if (typeof _v2979 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2980=new JTramp(_v2979, [runJTramp(_v2975),runJTramp(_v2977)]);
_v2971=_v2980;
} else {
_v2971=_v2969;
}
return _v2971;
};
var _v2981=_v2968;
_v2981=runJTramp(_v2981);
if (typeof _v2981 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2982=new JTramp(_v2981, [runJTramp(_v2967)]);
return _v2982;
};
_v2960=_v2961;
lglobal["midir:bind?"]=runJTramp(_v2960);
})();
(function () {
var _v2983;
var _v2984=function (_v2985) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v2987="midir:bind-drop";
var _v2988=_v2987;
var _v2989=lglobal["list"];
if (_v2989 === undefined) { throw new Error("No such global: " + "list"); }
var _v2990=_v2989;
_v2990=runJTramp(_v2990);
if (typeof _v2990 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2991=new JTramp(_v2990, [runJTramp(_v2988),runJTramp(_v2985)]);
return _v2991;
};
_v2983=_v2984;
lglobal["midir:bind-drop"]=runJTramp(_v2983);
})();
(function () {
var _v2992;
var _v2993=function (_v2994) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v2996=lglobal["cons?"];
if (_v2996 === undefined) { throw new Error("No such global: " + "cons?"); }
var _v2997=_v2996;
_v2997=runJTramp(_v2997);
if (typeof _v2997 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v2998=new JTramp(_v2997, [runJTramp(_v2994)]);
var _v2999=_v2998;
var _v3000=function (_v3001) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v3003;
if(runJTramp(_v3001)) {
var _v3004=lglobal["head"];
if (_v3004 === undefined) { throw new Error("No such global: " + "head"); }
var _v3005=_v3004;
_v3005=runJTramp(_v3005);
if (typeof _v3005 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3006=new JTramp(_v3005, [runJTramp(_v2994)]);
var _v3007=_v3006;
var _v3008="midir:bind-drop";
var _v3009=_v3008;
var _v3010=lglobal["="];
if (_v3010 === undefined) { throw new Error("No such global: " + "="); }
var _v3011=_v3010;
_v3011=runJTramp(_v3011);
if (typeof _v3011 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3012=new JTramp(_v3011, [runJTramp(_v3007),runJTramp(_v3009)]);
_v3003=_v3012;
} else {
_v3003=_v3001;
}
return _v3003;
};
var _v3013=_v3000;
_v3013=runJTramp(_v3013);
if (typeof _v3013 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3014=new JTramp(_v3013, [runJTramp(_v2999)]);
return _v3014;
};
_v2992=_v2993;
lglobal["midir:bind-drop?"]=runJTramp(_v2992);
})();
(function () {
var _v3015;
var _v3016=function (_v3017,_v3018,_v3019) {
if (arguments.length < 3) {
throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
throw new Error("Expecting at most 3 arguments.");
}
var _v3021="midir:if";
var _v3022=_v3021;
var _v3023=lglobal["list"];
if (_v3023 === undefined) { throw new Error("No such global: " + "list"); }
var _v3024=_v3023;
_v3024=runJTramp(_v3024);
if (typeof _v3024 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3025=new JTramp(_v3024, [runJTramp(_v3022),runJTramp(_v3017),runJTramp(_v3018),runJTramp(_v3019)]);
return _v3025;
};
_v3015=_v3016;
lglobal["midir:if"]=runJTramp(_v3015);
})();
(function () {
var _v3026;
var _v3027=function (_v3028) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v3030=lglobal["cons?"];
if (_v3030 === undefined) { throw new Error("No such global: " + "cons?"); }
var _v3031=_v3030;
_v3031=runJTramp(_v3031);
if (typeof _v3031 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3032=new JTramp(_v3031, [runJTramp(_v3028)]);
var _v3033=_v3032;
var _v3034=function (_v3035) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v3037;
if(runJTramp(_v3035)) {
var _v3038=lglobal["head"];
if (_v3038 === undefined) { throw new Error("No such global: " + "head"); }
var _v3039=_v3038;
_v3039=runJTramp(_v3039);
if (typeof _v3039 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3040=new JTramp(_v3039, [runJTramp(_v3028)]);
var _v3041=_v3040;
var _v3042="midir:if";
var _v3043=_v3042;
var _v3044=lglobal["="];
if (_v3044 === undefined) { throw new Error("No such global: " + "="); }
var _v3045=_v3044;
_v3045=runJTramp(_v3045);
if (typeof _v3045 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3046=new JTramp(_v3045, [runJTramp(_v3041),runJTramp(_v3043)]);
_v3037=_v3046;
} else {
_v3037=_v3035;
}
return _v3037;
};
var _v3047=_v3034;
_v3047=runJTramp(_v3047);
if (typeof _v3047 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3048=new JTramp(_v3047, [runJTramp(_v3033)]);
return _v3048;
};
_v3026=_v3027;
lglobal["midir:if?"]=runJTramp(_v3026);
})();
(function () {
var _v3049;
var _v3050=function () {
if (arguments.length > 0) {
throw new Error("Expecting at most 0 arguments.");
}
var _v3052="midir:leave";
var _v3053=_v3052;
var _v3054=lglobal["list"];
if (_v3054 === undefined) { throw new Error("No such global: " + "list"); }
var _v3055=_v3054;
_v3055=runJTramp(_v3055);
if (typeof _v3055 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3056=new JTramp(_v3055, [runJTramp(_v3053)]);
return _v3056;
};
_v3049=_v3050;
lglobal["midir:leave"]=runJTramp(_v3049);
})();
(function () {
var _v3057;
var _v3058=function (_v3059) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v3061=lglobal["cons?"];
if (_v3061 === undefined) { throw new Error("No such global: " + "cons?"); }
var _v3062=_v3061;
_v3062=runJTramp(_v3062);
if (typeof _v3062 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3063=new JTramp(_v3062, [runJTramp(_v3059)]);
var _v3064=_v3063;
var _v3065=function (_v3066) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v3068;
if(runJTramp(_v3066)) {
var _v3069=lglobal["head"];
if (_v3069 === undefined) { throw new Error("No such global: " + "head"); }
var _v3070=_v3069;
_v3070=runJTramp(_v3070);
if (typeof _v3070 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3071=new JTramp(_v3070, [runJTramp(_v3059)]);
var _v3072=_v3071;
var _v3073="midir:leave";
var _v3074=_v3073;
var _v3075=lglobal["="];
if (_v3075 === undefined) { throw new Error("No such global: " + "="); }
var _v3076=_v3075;
_v3076=runJTramp(_v3076);
if (typeof _v3076 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3077=new JTramp(_v3076, [runJTramp(_v3072),runJTramp(_v3074)]);
_v3068=_v3077;
} else {
_v3068=_v3066;
}
return _v3068;
};
var _v3078=_v3065;
_v3078=runJTramp(_v3078);
if (typeof _v3078 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3079=new JTramp(_v3078, [runJTramp(_v3064)]);
return _v3079;
};
_v3057=_v3058;
lglobal["midir:leave?"]=runJTramp(_v3057);
})();
(function () {
var _v3080;
var _v3081=function (_v3082,_v3083,_v3084) {
if (arguments.length < 3) {
throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
throw new Error("Expecting at most 3 arguments.");
}
var _v3086="midir:funcall";
var _v3087=_v3086;
var _v3088=lglobal["list"];
if (_v3088 === undefined) { throw new Error("No such global: " + "list"); }
var _v3089=_v3088;
_v3089=runJTramp(_v3089);
if (typeof _v3089 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3090=new JTramp(_v3089, [runJTramp(_v3087),runJTramp(_v3082),runJTramp(_v3083),runJTramp(_v3084)]);
return _v3090;
};
_v3080=_v3081;
lglobal["midir:funcall"]=runJTramp(_v3080);
})();
(function () {
var _v3091;
var _v3092=function (_v3093) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v3095=lglobal["cons?"];
if (_v3095 === undefined) { throw new Error("No such global: " + "cons?"); }
var _v3096=_v3095;
_v3096=runJTramp(_v3096);
if (typeof _v3096 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3097=new JTramp(_v3096, [runJTramp(_v3093)]);
var _v3098=_v3097;
var _v3099=function (_v3100) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v3102;
if(runJTramp(_v3100)) {
var _v3103=lglobal["head"];
if (_v3103 === undefined) { throw new Error("No such global: " + "head"); }
var _v3104=_v3103;
_v3104=runJTramp(_v3104);
if (typeof _v3104 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3105=new JTramp(_v3104, [runJTramp(_v3093)]);
var _v3106=_v3105;
var _v3107="midir:funcall";
var _v3108=_v3107;
var _v3109=lglobal["="];
if (_v3109 === undefined) { throw new Error("No such global: " + "="); }
var _v3110=_v3109;
_v3110=runJTramp(_v3110);
if (typeof _v3110 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3111=new JTramp(_v3110, [runJTramp(_v3106),runJTramp(_v3108)]);
_v3102=_v3111;
} else {
_v3102=_v3100;
}
return _v3102;
};
var _v3112=_v3099;
_v3112=runJTramp(_v3112);
if (typeof _v3112 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3113=new JTramp(_v3112, [runJTramp(_v3098)]);
return _v3113;
};
_v3091=_v3092;
lglobal["midir:funcall?"]=runJTramp(_v3091);
})();
(function () {
var _v3114;
var _v3115=function (_v3116,_v3117) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var _v3119="midir:closure";
var _v3120=_v3119;
var _v3121=lglobal["list"];
if (_v3121 === undefined) { throw new Error("No such global: " + "list"); }
var _v3122=_v3121;
_v3122=runJTramp(_v3122);
if (typeof _v3122 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3123=new JTramp(_v3122, [runJTramp(_v3120),runJTramp(_v3116),runJTramp(_v3117)]);
return _v3123;
};
_v3114=_v3115;
lglobal["midir:closure"]=runJTramp(_v3114);
})();
(function () {
var _v3124;
var _v3125=function (_v3126) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v3128=lglobal["cons?"];
if (_v3128 === undefined) { throw new Error("No such global: " + "cons?"); }
var _v3129=_v3128;
_v3129=runJTramp(_v3129);
if (typeof _v3129 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3130=new JTramp(_v3129, [runJTramp(_v3126)]);
var _v3131=_v3130;
var _v3132=function (_v3133) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v3135;
if(runJTramp(_v3133)) {
var _v3136=lglobal["head"];
if (_v3136 === undefined) { throw new Error("No such global: " + "head"); }
var _v3137=_v3136;
_v3137=runJTramp(_v3137);
if (typeof _v3137 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3138=new JTramp(_v3137, [runJTramp(_v3126)]);
var _v3139=_v3138;
var _v3140="midir:closure";
var _v3141=_v3140;
var _v3142=lglobal["="];
if (_v3142 === undefined) { throw new Error("No such global: " + "="); }
var _v3143=_v3142;
_v3143=runJTramp(_v3143);
if (typeof _v3143 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3144=new JTramp(_v3143, [runJTramp(_v3139),runJTramp(_v3141)]);
_v3135=_v3144;
} else {
_v3135=_v3133;
}
return _v3135;
};
var _v3145=_v3132;
_v3145=runJTramp(_v3145);
if (typeof _v3145 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3146=new JTramp(_v3145, [runJTramp(_v3131)]);
return _v3146;
};
_v3124=_v3125;
lglobal["midir:closure?"]=runJTramp(_v3124);
})();
(function () {
var _v3147;
var _v3148=function (_v3149,_v3150) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var _v3152="midir:set!";
var _v3153=_v3152;
var _v3154=lglobal["list"];
if (_v3154 === undefined) { throw new Error("No such global: " + "list"); }
var _v3155=_v3154;
_v3155=runJTramp(_v3155);
if (typeof _v3155 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3156=new JTramp(_v3155, [runJTramp(_v3153),runJTramp(_v3149),runJTramp(_v3150)]);
return _v3156;
};
_v3147=_v3148;
lglobal["midir:set!"]=runJTramp(_v3147);
})();
(function () {
var _v3157;
var _v3158=function (_v3159) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v3161=lglobal["cons?"];
if (_v3161 === undefined) { throw new Error("No such global: " + "cons?"); }
var _v3162=_v3161;
_v3162=runJTramp(_v3162);
if (typeof _v3162 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3163=new JTramp(_v3162, [runJTramp(_v3159)]);
var _v3164=_v3163;
var _v3165=function (_v3166) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v3168;
if(runJTramp(_v3166)) {
var _v3169=lglobal["head"];
if (_v3169 === undefined) { throw new Error("No such global: " + "head"); }
var _v3170=_v3169;
_v3170=runJTramp(_v3170);
if (typeof _v3170 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3171=new JTramp(_v3170, [runJTramp(_v3159)]);
var _v3172=_v3171;
var _v3173="midir:set!";
var _v3174=_v3173;
var _v3175=lglobal["="];
if (_v3175 === undefined) { throw new Error("No such global: " + "="); }
var _v3176=_v3175;
_v3176=runJTramp(_v3176);
if (typeof _v3176 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3177=new JTramp(_v3176, [runJTramp(_v3172),runJTramp(_v3174)]);
_v3168=_v3177;
} else {
_v3168=_v3166;
}
return _v3168;
};
var _v3178=_v3165;
_v3178=runJTramp(_v3178);
if (typeof _v3178 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3179=new JTramp(_v3178, [runJTramp(_v3164)]);
return _v3179;
};
_v3157=_v3158;
lglobal["midir:set!?"]=runJTramp(_v3157);
})();
(function () {
var _v3180;
var _v3181=function (_v3182,_v3183) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var _v3185="midir:gset!";
var _v3186=_v3185;
var _v3187=lglobal["list"];
if (_v3187 === undefined) { throw new Error("No such global: " + "list"); }
var _v3188=_v3187;
_v3188=runJTramp(_v3188);
if (typeof _v3188 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3189=new JTramp(_v3188, [runJTramp(_v3186),runJTramp(_v3182),runJTramp(_v3183)]);
return _v3189;
};
_v3180=_v3181;
lglobal["midir:gset!"]=runJTramp(_v3180);
})();
(function () {
var _v3190;
var _v3191=function (_v3192) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v3194=lglobal["cons?"];
if (_v3194 === undefined) { throw new Error("No such global: " + "cons?"); }
var _v3195=_v3194;
_v3195=runJTramp(_v3195);
if (typeof _v3195 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3196=new JTramp(_v3195, [runJTramp(_v3192)]);
var _v3197=_v3196;
var _v3198=function (_v3199) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v3201;
if(runJTramp(_v3199)) {
var _v3202=lglobal["head"];
if (_v3202 === undefined) { throw new Error("No such global: " + "head"); }
var _v3203=_v3202;
_v3203=runJTramp(_v3203);
if (typeof _v3203 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3204=new JTramp(_v3203, [runJTramp(_v3192)]);
var _v3205=_v3204;
var _v3206="midir:gset!";
var _v3207=_v3206;
var _v3208=lglobal["="];
if (_v3208 === undefined) { throw new Error("No such global: " + "="); }
var _v3209=_v3208;
_v3209=runJTramp(_v3209);
if (typeof _v3209 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3210=new JTramp(_v3209, [runJTramp(_v3205),runJTramp(_v3207)]);
_v3201=_v3210;
} else {
_v3201=_v3199;
}
return _v3201;
};
var _v3211=_v3198;
_v3211=runJTramp(_v3211);
if (typeof _v3211 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3212=new JTramp(_v3211, [runJTramp(_v3197)]);
return _v3212;
};
_v3190=_v3191;
lglobal["midir:gset!?"]=runJTramp(_v3190);
})();
(function () {
var _v3213;
var _v3214=function (_v3215,_v3216,_v3217) {
if (arguments.length < 3) {
throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
throw new Error("Expecting at most 3 arguments.");
}
var _v3219="midir:ffi";
var _v3220=_v3219;
var _v3221=lglobal["list"];
if (_v3221 === undefined) { throw new Error("No such global: " + "list"); }
var _v3222=_v3221;
_v3222=runJTramp(_v3222);
if (typeof _v3222 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3223=new JTramp(_v3222, [runJTramp(_v3220),runJTramp(_v3215),runJTramp(_v3216),runJTramp(_v3217)]);
return _v3223;
};
_v3213=_v3214;
lglobal["midir:ffi"]=runJTramp(_v3213);
})();
(function () {
var _v3224;
var _v3225=function (_v3226) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v3228=lglobal["cons?"];
if (_v3228 === undefined) { throw new Error("No such global: " + "cons?"); }
var _v3229=_v3228;
_v3229=runJTramp(_v3229);
if (typeof _v3229 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3230=new JTramp(_v3229, [runJTramp(_v3226)]);
var _v3231=_v3230;
var _v3232=function (_v3233) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v3235;
if(runJTramp(_v3233)) {
var _v3236=lglobal["head"];
if (_v3236 === undefined) { throw new Error("No such global: " + "head"); }
var _v3237=_v3236;
_v3237=runJTramp(_v3237);
if (typeof _v3237 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3238=new JTramp(_v3237, [runJTramp(_v3226)]);
var _v3239=_v3238;
var _v3240="midir:ffi";
var _v3241=_v3240;
var _v3242=lglobal["="];
if (_v3242 === undefined) { throw new Error("No such global: " + "="); }
var _v3243=_v3242;
_v3243=runJTramp(_v3243);
if (typeof _v3243 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3244=new JTramp(_v3243, [runJTramp(_v3239),runJTramp(_v3241)]);
_v3235=_v3244;
} else {
_v3235=_v3233;
}
return _v3235;
};
var _v3245=_v3232;
_v3245=runJTramp(_v3245);
if (typeof _v3245 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3246=new JTramp(_v3245, [runJTramp(_v3231)]);
return _v3246;
};
_v3224=_v3225;
lglobal["midir:ffi?"]=runJTramp(_v3224);
})();
(function () {
var _v3247;
var _v3248=lglobal["dict"];
if (_v3248 === undefined) { throw new Error("No such global: " + "dict"); }
var _v3249=_v3248;
_v3249=runJTramp(_v3249);
if (typeof _v3249 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3250=new JTramp(_v3249, []);
_v3247=_v3250;
lglobal["midir-macros"]=runJTramp(_v3247);
})();
(function () {
var _v3251;
var _v3252=new Nil();
_v3251=_v3252;
lglobal["midir-toplevel-defs"]=runJTramp(_v3251);
})();
(function () {
var _v3253;
var _v3254="\n\"use strict\";\nif (window.Cons === undefined) {\n  window.Cons = function Cons(a, b) {\n    this.head = a;\n    this.tail = b;\n  };\n  window.Nil = function Nil() {};\n}\nif (window.JTramp === undefined) {\n  window.JTramp = function JTramp(f, args) {\n    this.f = f;\n    this.args = args;\n  };\n  window.runJTramp = function (o) {\n    while (o instanceof JTramp) {\n      o = o.f.apply(undefined, o.args);\n    }\n    return o;\n  };\n}\nfunction GlobalEnv() {};\nGlobalEnv.prototype = window.lglobal || {};\nvar lglobal = new GlobalEnv();\n_.extend(lglobal, {\n  'prim:cons' : function (a, b) { return new Cons(a, b); },\n  'prim:cons?' : function (a) { return a instanceof Cons; },\n  'prim:head' : function (a) { return a.head; },\n  'prim:tail' : function (a) { return a.tail; },\n  'prim:nil' : function () { return new Nil(); },\n  'prim:nil?' : function (a) { return a instanceof Nil; }\n});\nwindow.lglobal = lglobal;\n";
_v3253=_v3254;
lglobal["js-default-lglobal"]=runJTramp(_v3253);
})();
(function () {
var _v3255;
var _v3256=function (_v3257,_v3258) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var _v3260="(function (k, v) { window.lglobal[k] = v; })";
var _v3261=_v3260;
var _v3262=lglobal["js:eval"];
if (_v3262 === undefined) { throw new Error("No such global: " + "js:eval"); }
var _v3263=_v3262;
_v3263=runJTramp(_v3263);
if (typeof _v3263 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3264=new JTramp(_v3263, [runJTramp(_v3261)]);
var _v3265=_v3264;
_v3265=runJTramp(_v3265);
if (typeof _v3265 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3266=new JTramp(_v3265, [runJTramp(_v3257),runJTramp(_v3258)]);
return _v3266;
};
_v3255=_v3256;
lglobal["set-in-lglobal"]=runJTramp(_v3255);
})();
(function () {
var _v3267;
var _v3268=function (_v3269) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v3271="runJTramp";
var _v3272=_v3271;
var _v3273=lglobal["js:eval"];
if (_v3273 === undefined) { throw new Error("No such global: " + "js:eval"); }
var _v3274=_v3273;
_v3274=runJTramp(_v3274);
if (typeof _v3274 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3275=new JTramp(_v3274, [runJTramp(_v3272)]);
var _v3276=_v3275;
_v3276=runJTramp(_v3276);
if (typeof _v3276 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3277=new JTramp(_v3276, [runJTramp(_v3269)]);
return _v3277;
};
_v3267=_v3268;
lglobal["runJTramp"]=runJTramp(_v3267);
})();
(function () {
var _v3278;
var _v3279=function () {
if (arguments.length > 0) {
throw new Error("Expecting at most 0 arguments.");
}
var _v3281=lglobal["dict"];
if (_v3281 === undefined) { throw new Error("No such global: " + "dict"); }
var _v3282=_v3281;
_v3282=runJTramp(_v3282);
if (typeof _v3282 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3283=new JTramp(_v3282, []);
var _v3284=lglobal["midir-macros"]=runJTramp(_v3283);
_v3284=runJTramp(_v3284);
var _v3285=lglobal["js-default-lglobal"];
if (_v3285 === undefined) { throw new Error("No such global: " + "js-default-lglobal"); }
var _v3286=_v3285;
var _v3287=lglobal["js:eval"];
if (_v3287 === undefined) { throw new Error("No such global: " + "js:eval"); }
var _v3288=_v3287;
_v3288=runJTramp(_v3288);
if (typeof _v3288 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3289=new JTramp(_v3288, [runJTramp(_v3286)]);
_v3289=runJTramp(_v3289);
var _v3290=lglobal["js-default-lglobal"];
if (_v3290 === undefined) { throw new Error("No such global: " + "js-default-lglobal"); }
var _v3291=_v3290;
var _v3292=lglobal["list"];
if (_v3292 === undefined) { throw new Error("No such global: " + "list"); }
var _v3293=_v3292;
_v3293=runJTramp(_v3293);
if (typeof _v3293 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3294=new JTramp(_v3293, [runJTramp(_v3291)]);
var _v3295=_v3294;
var _v3296=lglobal["reverse"];
if (_v3296 === undefined) { throw new Error("No such global: " + "reverse"); }
var _v3297=_v3296;
_v3297=runJTramp(_v3297);
if (typeof _v3297 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3298=new JTramp(_v3297, [runJTramp(_v3295)]);
var _v3299=lglobal["midir-toplevel-defs"]=runJTramp(_v3298);
_v3299=runJTramp(_v3299);
var _v3300="macro:set!";
var _v3301=_v3300;
var _v3302=function (_v3303,_v3304) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var _v3306=lglobal["midir-macros"];
if (_v3306 === undefined) { throw new Error("No such global: " + "midir-macros"); }
var _v3307=_v3306;
var _v3308=lglobal["runJTramp"];
if (_v3308 === undefined) { throw new Error("No such global: " + "runJTramp"); }
var _v3309=_v3308;
_v3309=runJTramp(_v3309);
if (typeof _v3309 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3310=new JTramp(_v3309, [runJTramp(_v3304)]);
var _v3311=_v3310;
var _v3312=function (_v3313) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v3315=function () {
var _v3316 = new Nil();
for (var _v3317 = arguments.length - 1; _v3317 >= 0; _v3317--) {
  _v3316 = new Cons(arguments[_v3317], _v3316);
}
var _v3318=lglobal["apply"];
if (_v3318 === undefined) { throw new Error("No such global: " + "apply"); }
var _v3319=_v3318;
_v3319=runJTramp(_v3319);
if (typeof _v3319 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3320=new JTramp(_v3319, [runJTramp(_v3313),runJTramp(_v3316)]);
var _v3321=_v3320;
var _v3322=lglobal["runJTramp"];
if (_v3322 === undefined) { throw new Error("No such global: " + "runJTramp"); }
var _v3323=_v3322;
_v3323=runJTramp(_v3323);
if (typeof _v3323 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3324=new JTramp(_v3323, [runJTramp(_v3321)]);
return _v3324;
};
return _v3315;
};
var _v3325=_v3312;
_v3325=runJTramp(_v3325);
if (typeof _v3325 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3326=new JTramp(_v3325, [runJTramp(_v3311)]);
var _v3327=_v3326;
var _v3328=lglobal["dict:set!"];
if (_v3328 === undefined) { throw new Error("No such global: " + "dict:set!"); }
var _v3329=_v3328;
_v3329=runJTramp(_v3329);
if (typeof _v3329 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3330=new JTramp(_v3329, [runJTramp(_v3307),runJTramp(_v3303),runJTramp(_v3327)]);
return _v3330;
};
var _v3331=_v3302;
var _v3332=lglobal["set-in-lglobal"];
if (_v3332 === undefined) { throw new Error("No such global: " + "set-in-lglobal"); }
var _v3333=_v3332;
_v3333=runJTramp(_v3333);
if (typeof _v3333 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3334=new JTramp(_v3333, [runJTramp(_v3301),runJTramp(_v3331)]);
_v3334=runJTramp(_v3334);
var _v3335="macro:get";
var _v3336=_v3335;
var _v3337=function (_v3338) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v3340=lglobal["midir-macros"];
if (_v3340 === undefined) { throw new Error("No such global: " + "midir-macros"); }
var _v3341=_v3340;
var _v3342=lglobal["dict:get"];
if (_v3342 === undefined) { throw new Error("No such global: " + "dict:get"); }
var _v3343=_v3342;
_v3343=runJTramp(_v3343);
if (typeof _v3343 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3344=new JTramp(_v3343, [runJTramp(_v3341),runJTramp(_v3338)]);
return _v3344;
};
var _v3345=_v3337;
var _v3346=lglobal["set-in-lglobal"];
if (_v3346 === undefined) { throw new Error("No such global: " + "set-in-lglobal"); }
var _v3347=_v3346;
_v3347=runJTramp(_v3347);
if (typeof _v3347 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3348=new JTramp(_v3347, [runJTramp(_v3336),runJTramp(_v3345)]);
return _v3348;
};
_v3278=_v3279;
lglobal["reset-midir-compile"]=runJTramp(_v3278);
})();
(function () {
var _v3349;
var _v3350=function (_v3351) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v3353=lglobal["cons?"];
if (_v3353 === undefined) { throw new Error("No such global: " + "cons?"); }
var _v3354=_v3353;
_v3354=runJTramp(_v3354);
if (typeof _v3354 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3355=new JTramp(_v3354, [runJTramp(_v3351)]);
var _v3356=_v3355;
var _v3357=function (_v3358) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v3360;
if(runJTramp(_v3358)) {
var _v3361=lglobal["midir-macros"];
if (_v3361 === undefined) { throw new Error("No such global: " + "midir-macros"); }
var _v3362=_v3361;
var _v3363=lglobal["head"];
if (_v3363 === undefined) { throw new Error("No such global: " + "head"); }
var _v3364=_v3363;
_v3364=runJTramp(_v3364);
if (typeof _v3364 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3365=new JTramp(_v3364, [runJTramp(_v3351)]);
var _v3366=_v3365;
var _v3367=lglobal["dict:has?"];
if (_v3367 === undefined) { throw new Error("No such global: " + "dict:has?"); }
var _v3368=_v3367;
_v3368=runJTramp(_v3368);
if (typeof _v3368 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3369=new JTramp(_v3368, [runJTramp(_v3362),runJTramp(_v3366)]);
_v3360=_v3369;
} else {
_v3360=_v3358;
}
return _v3360;
};
var _v3370=_v3357;
_v3370=runJTramp(_v3370);
if (typeof _v3370 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3371=new JTramp(_v3370, [runJTramp(_v3356)]);
var _v3372;
if(runJTramp(_v3371)) {
var _v3373=lglobal["midir-macros"];
if (_v3373 === undefined) { throw new Error("No such global: " + "midir-macros"); }
var _v3374=_v3373;
var _v3375=lglobal["head"];
if (_v3375 === undefined) { throw new Error("No such global: " + "head"); }
var _v3376=_v3375;
_v3376=runJTramp(_v3376);
if (typeof _v3376 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3377=new JTramp(_v3376, [runJTramp(_v3351)]);
var _v3378=_v3377;
var _v3379=lglobal["dict:get"];
if (_v3379 === undefined) { throw new Error("No such global: " + "dict:get"); }
var _v3380=_v3379;
_v3380=runJTramp(_v3380);
if (typeof _v3380 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3381=new JTramp(_v3380, [runJTramp(_v3374),runJTramp(_v3378)]);
var _v3382=_v3381;
var _v3383=lglobal["apply"];
if (_v3383 === undefined) { throw new Error("No such global: " + "apply"); }
var _v3384=_v3383;
_v3384=runJTramp(_v3384);
if (typeof _v3384 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3385=new JTramp(_v3384, [runJTramp(_v3382),runJTramp(_v3351)]);
var _v3386=_v3385;
var _v3387=lglobal["midir-macro-expand"];
if (_v3387 === undefined) { throw new Error("No such global: " + "midir-macro-expand"); }
var _v3388=_v3387;
_v3388=runJTramp(_v3388);
if (typeof _v3388 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3389=new JTramp(_v3388, [runJTramp(_v3386)]);
_v3372=_v3389;
} else {
_v3372=_v3351;
}
return _v3372;
};
_v3349=_v3350;
lglobal["midir-macro-expand"]=runJTramp(_v3349);
})();
(function () {
var _v3390;
var _v3391=function (_v3392,_v3393,_v3394) {
if (arguments.length < 3) {
throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
throw new Error("Expecting at most 3 arguments.");
}
var _v3396;
var _v3397=function (_v3398) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v3400=lglobal["number?"];
if (_v3400 === undefined) { throw new Error("No such global: " + "number?"); }
var _v3401=_v3400;
_v3401=runJTramp(_v3401);
if (typeof _v3401 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3402=new JTramp(_v3401, [runJTramp(_v3398)]);
var _v3403=_v3402;
var _v3404=function (_v3405) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v3407;
if(runJTramp(_v3405)) {
_v3407=_v3405;
} else {
var _v3408=lglobal["boolean?"];
if (_v3408 === undefined) { throw new Error("No such global: " + "boolean?"); }
var _v3409=_v3408;
_v3409=runJTramp(_v3409);
if (typeof _v3409 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3410=new JTramp(_v3409, [runJTramp(_v3398)]);
var _v3411=_v3410;
var _v3412=function (_v3413) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v3415;
if(runJTramp(_v3413)) {
_v3415=_v3413;
} else {
var _v3416=lglobal["null?"];
if (_v3416 === undefined) { throw new Error("No such global: " + "null?"); }
var _v3417=_v3416;
_v3417=runJTramp(_v3417);
if (typeof _v3417 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3418=new JTramp(_v3417, [runJTramp(_v3398)]);
_v3415=_v3418;
}
return _v3415;
};
var _v3419=_v3412;
_v3419=runJTramp(_v3419);
if (typeof _v3419 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3420=new JTramp(_v3419, [runJTramp(_v3411)]);
_v3407=_v3420;
}
return _v3407;
};
var _v3421=_v3404;
_v3421=runJTramp(_v3421);
if (typeof _v3421 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3422=new JTramp(_v3421, [runJTramp(_v3403)]);
return _v3422;
};
var _v3423=_v3396=runJTramp(_v3397);
var _v3424=lglobal["midir-macro-expand"];
if (_v3424 === undefined) { throw new Error("No such global: " + "midir-macro-expand"); }
var _v3425=_v3424;
_v3425=runJTramp(_v3425);
if (typeof _v3425 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3426=new JTramp(_v3425, [runJTramp(_v3393)]);
var _v3427=_v3426;
var _v3428=function (_v3429) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
_v3396=runJTramp(_v3396);
if (typeof _v3396 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3431=new JTramp(_v3396, [runJTramp(_v3429)]);
var _v3432;
if(runJTramp(_v3431)) {
var _v3433=lglobal["midir:lit"];
if (_v3433 === undefined) { throw new Error("No such global: " + "midir:lit"); }
var _v3434=_v3433;
_v3434=runJTramp(_v3434);
if (typeof _v3434 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3435=new JTramp(_v3434, [runJTramp(_v3429),runJTramp(_v3394)]);
_v3432=_v3435;
} else {
var _v3436=lglobal["string?"];
if (_v3436 === undefined) { throw new Error("No such global: " + "string?"); }
var _v3437=_v3436;
_v3437=runJTramp(_v3437);
if (typeof _v3437 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3438=new JTramp(_v3437, [runJTramp(_v3429)]);
var _v3439;
if(runJTramp(_v3438)) {
var _v3440="has?";
var _v3441=_v3440;
_v3392=runJTramp(_v3392);
if (typeof _v3392 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3442=new JTramp(_v3392, [runJTramp(_v3441),runJTramp(_v3429)]);
var _v3443;
if(runJTramp(_v3442)) {
var _v3444="lookup";
var _v3445=_v3444;
_v3392=runJTramp(_v3392);
if (typeof _v3392 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3446=new JTramp(_v3392, [runJTramp(_v3445),runJTramp(_v3429)]);
var _v3447=_v3446;
var _v3448=lglobal["midir:lookup"];
if (_v3448 === undefined) { throw new Error("No such global: " + "midir:lookup"); }
var _v3449=_v3448;
_v3449=runJTramp(_v3449);
if (typeof _v3449 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3450=new JTramp(_v3449, [runJTramp(_v3447),runJTramp(_v3394)]);
_v3443=_v3450;
} else {
var _v3451=lglobal["midir:glookup"];
if (_v3451 === undefined) { throw new Error("No such global: " + "midir:glookup"); }
var _v3452=_v3451;
_v3452=runJTramp(_v3452);
if (typeof _v3452 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3453=new JTramp(_v3452, [runJTramp(_v3429),runJTramp(_v3394)]);
_v3443=_v3453;
}
_v3439=_v3443;
} else {
var _v3454=lglobal["cons?"];
if (_v3454 === undefined) { throw new Error("No such global: " + "cons?"); }
var _v3455=_v3454;
_v3455=runJTramp(_v3455);
if (typeof _v3455 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3456=new JTramp(_v3455, [runJTramp(_v3429)]);
var _v3457;
if(runJTramp(_v3456)) {
var _v3458=lglobal["compile-form-to-midir"];
if (_v3458 === undefined) { throw new Error("No such global: " + "compile-form-to-midir"); }
var _v3459=_v3458;
_v3459=runJTramp(_v3459);
if (typeof _v3459 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3460=new JTramp(_v3459, [runJTramp(_v3392),runJTramp(_v3429),runJTramp(_v3394)]);
_v3457=_v3460;
} else {
var _v3461=lglobal["otherwise"];
if (_v3461 === undefined) { throw new Error("No such global: " + "otherwise"); }
var _v3462;
if(runJTramp(_v3461)) {
var _v3463="Unknown form: ";
var _v3464=_v3463;
var _v3465=lglobal["console"];
if (_v3465 === undefined) { throw new Error("No such global: " + "console"); }
var _v3466=_v3465;
_v3466=runJTramp(_v3466);
if (typeof _v3466 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3467=new JTramp(_v3466, [runJTramp(_v3429)]);
var _v3468=_v3467;
var _v3469=lglobal["repr"];
if (_v3469 === undefined) { throw new Error("No such global: " + "repr"); }
var _v3470=_v3469;
_v3470=runJTramp(_v3470);
if (typeof _v3470 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3471=new JTramp(_v3470, [runJTramp(_v3468)]);
var _v3472=_v3471;
var _v3473=lglobal["++"];
if (_v3473 === undefined) { throw new Error("No such global: " + "++"); }
var _v3474=_v3473;
_v3474=runJTramp(_v3474);
if (typeof _v3474 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3475=new JTramp(_v3474, [runJTramp(_v3464),runJTramp(_v3472)]);
var _v3476=_v3475;
var _v3477=lglobal["error"];
if (_v3477 === undefined) { throw new Error("No such global: " + "error"); }
var _v3478=_v3477;
_v3478=runJTramp(_v3478);
if (typeof _v3478 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3479=new JTramp(_v3478, [runJTramp(_v3476)]);
_v3462=_v3479;
} else {
var _v3480=null;
_v3462=_v3480;
}
_v3457=_v3462;
}
_v3439=_v3457;
}
_v3432=_v3439;
}
return _v3432;
};
var _v3481=_v3428;
_v3481=runJTramp(_v3481);
if (typeof _v3481 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3482=new JTramp(_v3481, [runJTramp(_v3427)]);
return _v3482;
};
_v3390=_v3391;
lglobal["compile-to-midir"]=runJTramp(_v3390);
})();
(function () {
var _v3483;
var _v3484=function (_v3485) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v3487;
var _v3488=function (_v3489) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v3491=lglobal["null"];
if (_v3491 === undefined) { throw new Error("No such global: " + "null"); }
var _v3492=_v3491;
var _v3493=lglobal["make-env"];
if (_v3493 === undefined) { throw new Error("No such global: " + "make-env"); }
var _v3494=_v3493;
_v3494=runJTramp(_v3494);
if (typeof _v3494 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3495=new JTramp(_v3494, [runJTramp(_v3492)]);
var _v3496=_v3495;
var _v3497=lglobal["midir:leave"];
if (_v3497 === undefined) { throw new Error("No such global: " + "midir:leave"); }
var _v3498=_v3497;
_v3498=runJTramp(_v3498);
if (typeof _v3498 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3499=new JTramp(_v3498, []);
var _v3500=_v3499;
var _v3501=lglobal["compile-to-midir"];
if (_v3501 === undefined) { throw new Error("No such global: " + "compile-to-midir"); }
var _v3502=_v3501;
_v3502=runJTramp(_v3502);
if (typeof _v3502 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3503=new JTramp(_v3502, [runJTramp(_v3496),runJTramp(_v3489),runJTramp(_v3500)]);
var _v3504=_v3503;
var _v3505=lglobal["scope"];
if (_v3505 === undefined) { throw new Error("No such global: " + "scope"); }
var _v3506=_v3505;
_v3506=runJTramp(_v3506);
if (typeof _v3506 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3507=new JTramp(_v3506, [runJTramp(_v3504)]);
var _v3508=_v3507;
var _v3509=lglobal["run-copy-propagate-midir"];
if (_v3509 === undefined) { throw new Error("No such global: " + "run-copy-propagate-midir"); }
var _v3510=_v3509;
_v3510=runJTramp(_v3510);
if (typeof _v3510 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3511=new JTramp(_v3510, [runJTramp(_v3508)]);
var _v3512=_v3511;
var _v3513=lglobal["scope"];
if (_v3513 === undefined) { throw new Error("No such global: " + "scope"); }
var _v3514=_v3513;
_v3514=runJTramp(_v3514);
if (typeof _v3514 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3515=new JTramp(_v3514, [runJTramp(_v3512)]);
return _v3515;
};
var _v3516=_v3487=runJTramp(_v3488);
var _v3517=lglobal["midir-macro-expand"];
if (_v3517 === undefined) { throw new Error("No such global: " + "midir-macro-expand"); }
var _v3518=_v3517;
_v3518=runJTramp(_v3518);
if (typeof _v3518 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3519=new JTramp(_v3518, [runJTramp(_v3485)]);
var _v3520=_v3519;
var _v3521=lglobal["scope"];
if (_v3521 === undefined) { throw new Error("No such global: " + "scope"); }
var _v3522=_v3521;
_v3522=runJTramp(_v3522);
if (typeof _v3522 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3523=new JTramp(_v3522, [runJTramp(_v3520)]);
var _v3524=_v3523;
var _v3525=function (_v3526) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v3528=lglobal["cons?"];
if (_v3528 === undefined) { throw new Error("No such global: " + "cons?"); }
var _v3529=_v3528;
_v3529=runJTramp(_v3529);
if (typeof _v3529 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3530=new JTramp(_v3529, [runJTramp(_v3526)]);
var _v3531=_v3530;
var _v3532=function (_v3533) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v3535;
if(runJTramp(_v3533)) {
var _v3536=lglobal["head"];
if (_v3536 === undefined) { throw new Error("No such global: " + "head"); }
var _v3537=_v3536;
_v3537=runJTramp(_v3537);
if (typeof _v3537 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3538=new JTramp(_v3537, [runJTramp(_v3526)]);
var _v3539=_v3538;
var _v3540="prim:def";
var _v3541=_v3540;
var _v3542=lglobal["="];
if (_v3542 === undefined) { throw new Error("No such global: " + "="); }
var _v3543=_v3542;
_v3543=runJTramp(_v3543);
if (typeof _v3543 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3544=new JTramp(_v3543, [runJTramp(_v3539),runJTramp(_v3541)]);
_v3535=_v3544;
} else {
_v3535=_v3533;
}
return _v3535;
};
var _v3545=_v3532;
_v3545=runJTramp(_v3545);
if (typeof _v3545 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3546=new JTramp(_v3545, [runJTramp(_v3531)]);
var _v3547;
if(runJTramp(_v3546)) {
var _v3548=lglobal["tail"];
if (_v3548 === undefined) { throw new Error("No such global: " + "tail"); }
var _v3549=_v3548;
_v3549=runJTramp(_v3549);
if (typeof _v3549 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3550=new JTramp(_v3549, [runJTramp(_v3526)]);
var _v3551=_v3550;
var _v3552=lglobal["tail"];
if (_v3552 === undefined) { throw new Error("No such global: " + "tail"); }
var _v3553=_v3552;
_v3553=runJTramp(_v3553);
if (typeof _v3553 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3554=new JTramp(_v3553, [runJTramp(_v3551)]);
var _v3555=_v3554;
var _v3556=lglobal["head"];
if (_v3556 === undefined) { throw new Error("No such global: " + "head"); }
var _v3557=_v3556;
_v3557=runJTramp(_v3557);
if (typeof _v3557 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3558=new JTramp(_v3557, [runJTramp(_v3555)]);
var _v3559=_v3558;
_v3487=runJTramp(_v3487);
if (typeof _v3487 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3560=new JTramp(_v3487, [runJTramp(_v3559)]);
var _v3561=_v3560;
var _v3562=function (_v3563) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v3565=lglobal["null"];
if (_v3565 === undefined) { throw new Error("No such global: " + "null"); }
var _v3566=_v3565;
var _v3567=lglobal["make-js-var"];
if (_v3567 === undefined) { throw new Error("No such global: " + "make-js-var"); }
var _v3568=_v3567;
_v3568=runJTramp(_v3568);
if (typeof _v3568 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3569=new JTramp(_v3568, [runJTramp(_v3566)]);
var _v3570=_v3569;
var _v3571=function (_v3572) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v3574="(function () {\n";
var _v3575=_v3574;
var _v3576="var ";
var _v3577=_v3576;
var _v3578=";\n";
var _v3579=_v3578;
var _v3580="ERROR";
var _v3581=_v3580;
var _v3582=lglobal["compile-midir-to-js"];
if (_v3582 === undefined) { throw new Error("No such global: " + "compile-midir-to-js"); }
var _v3583=_v3582;
_v3583=runJTramp(_v3583);
if (typeof _v3583 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3584=new JTramp(_v3583, [runJTramp(_v3563),runJTramp(_v3581),runJTramp(_v3572)]);
var _v3585=_v3584;
var _v3586="lglobal[";
var _v3587=_v3586;
var _v3588=lglobal["tail"];
if (_v3588 === undefined) { throw new Error("No such global: " + "tail"); }
var _v3589=_v3588;
_v3589=runJTramp(_v3589);
if (typeof _v3589 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3590=new JTramp(_v3589, [runJTramp(_v3526)]);
var _v3591=_v3590;
var _v3592=lglobal["head"];
if (_v3592 === undefined) { throw new Error("No such global: " + "head"); }
var _v3593=_v3592;
_v3593=runJTramp(_v3593);
if (typeof _v3593 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3594=new JTramp(_v3593, [runJTramp(_v3591)]);
var _v3595=_v3594;
var _v3596=lglobal["js-escape-string"];
if (_v3596 === undefined) { throw new Error("No such global: " + "js-escape-string"); }
var _v3597=_v3596;
_v3597=runJTramp(_v3597);
if (typeof _v3597 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3598=new JTramp(_v3597, [runJTramp(_v3595)]);
var _v3599=_v3598;
var _v3600="]";
var _v3601=_v3600;
var _v3602="=runJTramp(";
var _v3603=_v3602;
var _v3604=");\n";
var _v3605=_v3604;
var _v3606="})();\n";
var _v3607=_v3606;
var _v3608=lglobal["++"];
if (_v3608 === undefined) { throw new Error("No such global: " + "++"); }
var _v3609=_v3608;
_v3609=runJTramp(_v3609);
if (typeof _v3609 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3610=new JTramp(_v3609, [runJTramp(_v3575),runJTramp(_v3577),runJTramp(_v3572),runJTramp(_v3579),runJTramp(_v3585),runJTramp(_v3587),runJTramp(_v3599),runJTramp(_v3601),runJTramp(_v3603),runJTramp(_v3572),runJTramp(_v3605),runJTramp(_v3607)]);
var _v3611=_v3610;
var _v3612=function (_v3613) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v3615=lglobal["scope"];
if (_v3615 === undefined) { throw new Error("No such global: " + "scope"); }
var _v3616=_v3615;
_v3616=runJTramp(_v3616);
if (typeof _v3616 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3617=new JTramp(_v3616, [runJTramp(_v3613)]);
var _v3618=_v3617;
var _v3619=lglobal["js:eval"];
if (_v3619 === undefined) { throw new Error("No such global: " + "js:eval"); }
var _v3620=_v3619;
_v3620=runJTramp(_v3620);
if (typeof _v3620 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3621=new JTramp(_v3620, [runJTramp(_v3618)]);
_v3621=runJTramp(_v3621);
var _v3622=lglobal["midir-toplevel-defs"];
if (_v3622 === undefined) { throw new Error("No such global: " + "midir-toplevel-defs"); }
var _v3623=_v3622;
var _v3624=lglobal["cons"];
if (_v3624 === undefined) { throw new Error("No such global: " + "cons"); }
var _v3625=_v3624;
_v3625=runJTramp(_v3625);
if (typeof _v3625 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3626=new JTramp(_v3625, [runJTramp(_v3613),runJTramp(_v3623)]);
var _v3627=lglobal["midir-toplevel-defs"]=runJTramp(_v3626);
return _v3627;
};
var _v3628=_v3612;
_v3628=runJTramp(_v3628);
if (typeof _v3628 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3629=new JTramp(_v3628, [runJTramp(_v3611)]);
return _v3629;
};
var _v3630=_v3571;
_v3630=runJTramp(_v3630);
if (typeof _v3630 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3631=new JTramp(_v3630, [runJTramp(_v3570)]);
return _v3631;
};
var _v3632=_v3562;
_v3632=runJTramp(_v3632);
if (typeof _v3632 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3633=new JTramp(_v3632, [runJTramp(_v3561)]);
_v3547=_v3633;
} else {
var _v3634=lglobal["cons?"];
if (_v3634 === undefined) { throw new Error("No such global: " + "cons?"); }
var _v3635=_v3634;
_v3635=runJTramp(_v3635);
if (typeof _v3635 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3636=new JTramp(_v3635, [runJTramp(_v3526)]);
var _v3637=_v3636;
var _v3638=function (_v3639) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v3641;
if(runJTramp(_v3639)) {
var _v3642=lglobal["head"];
if (_v3642 === undefined) { throw new Error("No such global: " + "head"); }
var _v3643=_v3642;
_v3643=runJTramp(_v3643);
if (typeof _v3643 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3644=new JTramp(_v3643, [runJTramp(_v3526)]);
var _v3645=_v3644;
var _v3646="prim:do";
var _v3647=_v3646;
var _v3648=lglobal["="];
if (_v3648 === undefined) { throw new Error("No such global: " + "="); }
var _v3649=_v3648;
_v3649=runJTramp(_v3649);
if (typeof _v3649 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3650=new JTramp(_v3649, [runJTramp(_v3645),runJTramp(_v3647)]);
_v3641=_v3650;
} else {
_v3641=_v3639;
}
return _v3641;
};
var _v3651=_v3638;
_v3651=runJTramp(_v3651);
if (typeof _v3651 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3652=new JTramp(_v3651, [runJTramp(_v3637)]);
var _v3653;
if(runJTramp(_v3652)) {
var _v3654=lglobal["compile-toplevel-to-midir"];
if (_v3654 === undefined) { throw new Error("No such global: " + "compile-toplevel-to-midir"); }
var _v3655=_v3654;
var _v3656=lglobal["tail"];
if (_v3656 === undefined) { throw new Error("No such global: " + "tail"); }
var _v3657=_v3656;
_v3657=runJTramp(_v3657);
if (typeof _v3657 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3658=new JTramp(_v3657, [runJTramp(_v3526)]);
var _v3659=_v3658;
var _v3660=lglobal["each"];
if (_v3660 === undefined) { throw new Error("No such global: " + "each"); }
var _v3661=_v3660;
_v3661=runJTramp(_v3661);
if (typeof _v3661 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3662=new JTramp(_v3661, [runJTramp(_v3655),runJTramp(_v3659)]);
_v3653=_v3662;
} else {
var _v3663=lglobal["cons?"];
if (_v3663 === undefined) { throw new Error("No such global: " + "cons?"); }
var _v3664=_v3663;
_v3664=runJTramp(_v3664);
if (typeof _v3664 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3665=new JTramp(_v3664, [runJTramp(_v3526)]);
var _v3666=_v3665;
var _v3667=function (_v3668) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v3670;
if(runJTramp(_v3668)) {
var _v3671=lglobal["head"];
if (_v3671 === undefined) { throw new Error("No such global: " + "head"); }
var _v3672=_v3671;
_v3672=runJTramp(_v3672);
if (typeof _v3672 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3673=new JTramp(_v3672, [runJTramp(_v3526)]);
var _v3674=_v3673;
var _v3675="when-execute";
var _v3676=_v3675;
var _v3677=lglobal["="];
if (_v3677 === undefined) { throw new Error("No such global: " + "="); }
var _v3678=_v3677;
_v3678=runJTramp(_v3678);
if (typeof _v3678 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3679=new JTramp(_v3678, [runJTramp(_v3674),runJTramp(_v3676)]);
_v3670=_v3679;
} else {
_v3670=_v3668;
}
return _v3670;
};
var _v3680=_v3667;
_v3680=runJTramp(_v3680);
if (typeof _v3680 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3681=new JTramp(_v3680, [runJTramp(_v3666)]);
var _v3682;
if(runJTramp(_v3681)) {
var _v3683=lglobal["when-execute-toplevel"];
if (_v3683 === undefined) { throw new Error("No such global: " + "when-execute-toplevel"); }
var _v3684=_v3683;
var _v3685=lglobal["tail"];
if (_v3685 === undefined) { throw new Error("No such global: " + "tail"); }
var _v3686=_v3685;
_v3686=runJTramp(_v3686);
if (typeof _v3686 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3687=new JTramp(_v3686, [runJTramp(_v3526)]);
var _v3688=_v3687;
var _v3689=lglobal["each"];
if (_v3689 === undefined) { throw new Error("No such global: " + "each"); }
var _v3690=_v3689;
_v3690=runJTramp(_v3690);
if (typeof _v3690 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3691=new JTramp(_v3690, [runJTramp(_v3684),runJTramp(_v3688)]);
_v3682=_v3691;
} else {
var _v3692=lglobal["otherwise"];
if (_v3692 === undefined) { throw new Error("No such global: " + "otherwise"); }
var _v3693;
if(runJTramp(_v3692)) {
var _v3694=lglobal["null"];
if (_v3694 === undefined) { throw new Error("No such global: " + "null"); }
var _v3695=_v3694;
var _v3696=lglobal["make-js-var"];
if (_v3696 === undefined) { throw new Error("No such global: " + "make-js-var"); }
var _v3697=_v3696;
_v3697=runJTramp(_v3697);
if (typeof _v3697 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3698=new JTramp(_v3697, [runJTramp(_v3695)]);
var _v3699=_v3698;
var _v3700=function (_v3701) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v3703="(function () {\n";
var _v3704=_v3703;
var _v3705="var ";
var _v3706=_v3705;
var _v3707=";\n";
var _v3708=_v3707;
_v3487=runJTramp(_v3487);
if (typeof _v3487 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3709=new JTramp(_v3487, [runJTramp(_v3526)]);
var _v3710=_v3709;
var _v3711="ERROR";
var _v3712=_v3711;
var _v3713=lglobal["compile-midir-to-js"];
if (_v3713 === undefined) { throw new Error("No such global: " + "compile-midir-to-js"); }
var _v3714=_v3713;
_v3714=runJTramp(_v3714);
if (typeof _v3714 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3715=new JTramp(_v3714, [runJTramp(_v3710),runJTramp(_v3712),runJTramp(_v3701)]);
var _v3716=_v3715;
var _v3717="return runJTramp(";
var _v3718=_v3717;
var _v3719=");\n";
var _v3720=_v3719;
var _v3721="})();\n";
var _v3722=_v3721;
var _v3723=lglobal["++"];
if (_v3723 === undefined) { throw new Error("No such global: " + "++"); }
var _v3724=_v3723;
_v3724=runJTramp(_v3724);
if (typeof _v3724 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3725=new JTramp(_v3724, [runJTramp(_v3704),runJTramp(_v3706),runJTramp(_v3701),runJTramp(_v3708),runJTramp(_v3716),runJTramp(_v3718),runJTramp(_v3701),runJTramp(_v3720),runJTramp(_v3722)]);
var _v3726=_v3725;
var _v3727=function (_v3728) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v3730=lglobal["scope"];
if (_v3730 === undefined) { throw new Error("No such global: " + "scope"); }
var _v3731=_v3730;
_v3731=runJTramp(_v3731);
if (typeof _v3731 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3732=new JTramp(_v3731, [runJTramp(_v3728)]);
var _v3733=_v3732;
var _v3734=lglobal["js:eval"];
if (_v3734 === undefined) { throw new Error("No such global: " + "js:eval"); }
var _v3735=_v3734;
_v3735=runJTramp(_v3735);
if (typeof _v3735 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3736=new JTramp(_v3735, [runJTramp(_v3733)]);
return _v3736;
};
var _v3737=_v3727;
_v3737=runJTramp(_v3737);
if (typeof _v3737 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3738=new JTramp(_v3737, [runJTramp(_v3726)]);
return _v3738;
};
var _v3739=_v3700;
_v3739=runJTramp(_v3739);
if (typeof _v3739 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3740=new JTramp(_v3739, [runJTramp(_v3699)]);
_v3693=_v3740;
} else {
var _v3741=null;
_v3693=_v3741;
}
_v3682=_v3693;
}
_v3653=_v3682;
}
_v3547=_v3653;
}
return _v3547;
};
var _v3742=_v3525;
_v3742=runJTramp(_v3742);
if (typeof _v3742 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3743=new JTramp(_v3742, [runJTramp(_v3524)]);
return _v3743;
};
_v3483=_v3484;
lglobal["compile-toplevel-to-midir"]=runJTramp(_v3483);
})();
(function () {
var _v3744;
var _v3745=function (_v3746) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v3748;
var _v3749=function (_v3750) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v3752=lglobal["null"];
if (_v3752 === undefined) { throw new Error("No such global: " + "null"); }
var _v3753=_v3752;
var _v3754=lglobal["make-env"];
if (_v3754 === undefined) { throw new Error("No such global: " + "make-env"); }
var _v3755=_v3754;
_v3755=runJTramp(_v3755);
if (typeof _v3755 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3756=new JTramp(_v3755, [runJTramp(_v3753)]);
var _v3757=_v3756;
var _v3758=lglobal["midir:leave"];
if (_v3758 === undefined) { throw new Error("No such global: " + "midir:leave"); }
var _v3759=_v3758;
_v3759=runJTramp(_v3759);
if (typeof _v3759 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3760=new JTramp(_v3759, []);
var _v3761=_v3760;
var _v3762=lglobal["compile-to-midir"];
if (_v3762 === undefined) { throw new Error("No such global: " + "compile-to-midir"); }
var _v3763=_v3762;
_v3763=runJTramp(_v3763);
if (typeof _v3763 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3764=new JTramp(_v3763, [runJTramp(_v3757),runJTramp(_v3750),runJTramp(_v3761)]);
return _v3764;
};
var _v3765=_v3748=runJTramp(_v3749);
var _v3766=lglobal["midir-macro-expand"];
if (_v3766 === undefined) { throw new Error("No such global: " + "midir-macro-expand"); }
var _v3767=_v3766;
_v3767=runJTramp(_v3767);
if (typeof _v3767 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3768=new JTramp(_v3767, [runJTramp(_v3746)]);
var _v3769=_v3768;
var _v3770=function (_v3771) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v3773=lglobal["cons?"];
if (_v3773 === undefined) { throw new Error("No such global: " + "cons?"); }
var _v3774=_v3773;
_v3774=runJTramp(_v3774);
if (typeof _v3774 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3775=new JTramp(_v3774, [runJTramp(_v3771)]);
var _v3776=_v3775;
var _v3777=function (_v3778) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v3780;
if(runJTramp(_v3778)) {
var _v3781=lglobal["head"];
if (_v3781 === undefined) { throw new Error("No such global: " + "head"); }
var _v3782=_v3781;
_v3782=runJTramp(_v3782);
if (typeof _v3782 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3783=new JTramp(_v3782, [runJTramp(_v3771)]);
var _v3784=_v3783;
var _v3785="prim:def";
var _v3786=_v3785;
var _v3787=lglobal["="];
if (_v3787 === undefined) { throw new Error("No such global: " + "="); }
var _v3788=_v3787;
_v3788=runJTramp(_v3788);
if (typeof _v3788 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3789=new JTramp(_v3788, [runJTramp(_v3784),runJTramp(_v3786)]);
_v3780=_v3789;
} else {
_v3780=_v3778;
}
return _v3780;
};
var _v3790=_v3777;
_v3790=runJTramp(_v3790);
if (typeof _v3790 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3791=new JTramp(_v3790, [runJTramp(_v3776)]);
var _v3792;
if(runJTramp(_v3791)) {
var _v3793=lglobal["tail"];
if (_v3793 === undefined) { throw new Error("No such global: " + "tail"); }
var _v3794=_v3793;
_v3794=runJTramp(_v3794);
if (typeof _v3794 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3795=new JTramp(_v3794, [runJTramp(_v3771)]);
var _v3796=_v3795;
var _v3797=lglobal["tail"];
if (_v3797 === undefined) { throw new Error("No such global: " + "tail"); }
var _v3798=_v3797;
_v3798=runJTramp(_v3798);
if (typeof _v3798 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3799=new JTramp(_v3798, [runJTramp(_v3796)]);
var _v3800=_v3799;
var _v3801=lglobal["head"];
if (_v3801 === undefined) { throw new Error("No such global: " + "head"); }
var _v3802=_v3801;
_v3802=runJTramp(_v3802);
if (typeof _v3802 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3803=new JTramp(_v3802, [runJTramp(_v3800)]);
var _v3804=_v3803;
_v3748=runJTramp(_v3748);
if (typeof _v3748 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3805=new JTramp(_v3748, [runJTramp(_v3804)]);
var _v3806=_v3805;
var _v3807=function (_v3808) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v3810=lglobal["tail"];
if (_v3810 === undefined) { throw new Error("No such global: " + "tail"); }
var _v3811=_v3810;
_v3811=runJTramp(_v3811);
if (typeof _v3811 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3812=new JTramp(_v3811, [runJTramp(_v3771)]);
var _v3813=_v3812;
var _v3814=lglobal["head"];
if (_v3814 === undefined) { throw new Error("No such global: " + "head"); }
var _v3815=_v3814;
_v3815=runJTramp(_v3815);
if (typeof _v3815 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3816=new JTramp(_v3815, [runJTramp(_v3813)]);
var _v3817=_v3816;
var _v3818=lglobal["list"];
if (_v3818 === undefined) { throw new Error("No such global: " + "list"); }
var _v3819=_v3818;
_v3819=runJTramp(_v3819);
if (typeof _v3819 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3820=new JTramp(_v3819, [runJTramp(_v3817),runJTramp(_v3808)]);
var _v3821=_v3820;
var _v3822=lglobal["midir-toplevel-defs"];
if (_v3822 === undefined) { throw new Error("No such global: " + "midir-toplevel-defs"); }
var _v3823=_v3822;
var _v3824=lglobal["append"];
if (_v3824 === undefined) { throw new Error("No such global: " + "append"); }
var _v3825=_v3824;
_v3825=runJTramp(_v3825);
if (typeof _v3825 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3826=new JTramp(_v3825, [runJTramp(_v3821),runJTramp(_v3823)]);
var _v3827=lglobal["midir-toplevel-defs"]=runJTramp(_v3826);
return _v3827;
};
var _v3828=_v3807;
_v3828=runJTramp(_v3828);
if (typeof _v3828 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3829=new JTramp(_v3828, [runJTramp(_v3806)]);
_v3792=_v3829;
} else {
var _v3830=lglobal["null"];
if (_v3830 === undefined) { throw new Error("No such global: " + "null"); }
var _v3831=_v3830;
_v3748=runJTramp(_v3748);
if (typeof _v3748 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3832=new JTramp(_v3748, [runJTramp(_v3771)]);
var _v3833=_v3832;
var _v3834=lglobal["midir-toplevel-defs"];
if (_v3834 === undefined) { throw new Error("No such global: " + "midir-toplevel-defs"); }
var _v3835=_v3834;
var _v3836=lglobal["cons"];
if (_v3836 === undefined) { throw new Error("No such global: " + "cons"); }
var _v3837=_v3836;
_v3837=runJTramp(_v3837);
if (typeof _v3837 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3838=new JTramp(_v3837, [runJTramp(_v3833),runJTramp(_v3835)]);
var _v3839=_v3838;
var _v3840=lglobal["cons"];
if (_v3840 === undefined) { throw new Error("No such global: " + "cons"); }
var _v3841=_v3840;
_v3841=runJTramp(_v3841);
if (typeof _v3841 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3842=new JTramp(_v3841, [runJTramp(_v3831),runJTramp(_v3839)]);
var _v3843=lglobal["midir-toplevel-defs"]=runJTramp(_v3842);
_v3792=_v3843;
}
return _v3792;
};
var _v3844=_v3770;
_v3844=runJTramp(_v3844);
if (typeof _v3844 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3845=new JTramp(_v3844, [runJTramp(_v3769)]);
return _v3845;
};
_v3744=_v3745;
lglobal["when-execute-toplevel"]=runJTramp(_v3744);
})();
(function () {
var _v3846;
var _v3847=function (_v3848,_v3849,_v3850) {
if (arguments.length < 3) {
throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
throw new Error("Expecting at most 3 arguments.");
}
var _v3852=lglobal["compile-to-midir"];
if (_v3852 === undefined) { throw new Error("No such global: " + "compile-to-midir"); }
var _v3853=_v3852;
var _v3854=lglobal["partial"];
if (_v3854 === undefined) { throw new Error("No such global: " + "partial"); }
var _v3855=_v3854;
_v3855=runJTramp(_v3855);
if (typeof _v3855 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3856=new JTramp(_v3855, [runJTramp(_v3853),runJTramp(_v3848)]);
var _v3857=_v3856;
var _v3858=lglobal["curry"];
if (_v3858 === undefined) { throw new Error("No such global: " + "curry"); }
var _v3859=_v3858;
_v3859=runJTramp(_v3859);
if (typeof _v3859 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3860=new JTramp(_v3859, [runJTramp(_v3857)]);
var _v3861=_v3860;
var _v3862=lglobal["map"];
if (_v3862 === undefined) { throw new Error("No such global: " + "map"); }
var _v3863=_v3862;
_v3863=runJTramp(_v3863);
if (typeof _v3863 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3864=new JTramp(_v3863, [runJTramp(_v3861),runJTramp(_v3849)]);
var _v3865=_v3864;
var _v3866=function (_v3867) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v3869=lglobal["$"];
if (_v3869 === undefined) { throw new Error("No such global: " + "$"); }
var _v3870=_v3869;
var _v3871=lglobal["midir:bind-drop"];
if (_v3871 === undefined) { throw new Error("No such global: " + "midir:bind-drop"); }
var _v3872=_v3871;
var _v3873=lglobal["intercalate"];
if (_v3873 === undefined) { throw new Error("No such global: " + "intercalate"); }
var _v3874=_v3873;
_v3874=runJTramp(_v3874);
if (typeof _v3874 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3875=new JTramp(_v3874, [runJTramp(_v3872),runJTramp(_v3867)]);
var _v3876=_v3875;
var _v3877=lglobal["foldr"];
if (_v3877 === undefined) { throw new Error("No such global: " + "foldr"); }
var _v3878=_v3877;
_v3878=runJTramp(_v3878);
if (typeof _v3878 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3879=new JTramp(_v3878, [runJTramp(_v3870),runJTramp(_v3850),runJTramp(_v3876)]);
return _v3879;
};
var _v3880=_v3866;
_v3880=runJTramp(_v3880);
if (typeof _v3880 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3881=new JTramp(_v3880, [runJTramp(_v3865)]);
return _v3881;
};
_v3846=_v3847;
lglobal["compile-body-to-midir"]=runJTramp(_v3846);
})();
(function () {
var _v3882;
var _v3883=function (_v3884,_v3885,_v3886) {
if (arguments.length < 3) {
throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
throw new Error("Expecting at most 3 arguments.");
}
var _v3888=lglobal["head"];
if (_v3888 === undefined) { throw new Error("No such global: " + "head"); }
var _v3889=_v3888;
_v3889=runJTramp(_v3889);
if (typeof _v3889 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3890=new JTramp(_v3889, [runJTramp(_v3885)]);
var _v3891=_v3890;
var _v3892=function (_v3893) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v3895="quote";
var _v3896=_v3895;
var _v3897=lglobal["="];
if (_v3897 === undefined) { throw new Error("No such global: " + "="); }
var _v3898=_v3897;
_v3898=runJTramp(_v3898);
if (typeof _v3898 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3899=new JTramp(_v3898, [runJTramp(_v3893),runJTramp(_v3896)]);
var _v3900;
if(runJTramp(_v3899)) {
var _v3901=lglobal["tail"];
if (_v3901 === undefined) { throw new Error("No such global: " + "tail"); }
var _v3902=_v3901;
_v3902=runJTramp(_v3902);
if (typeof _v3902 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3903=new JTramp(_v3902, [runJTramp(_v3885)]);
var _v3904=_v3903;
var _v3905=lglobal["head"];
if (_v3905 === undefined) { throw new Error("No such global: " + "head"); }
var _v3906=_v3905;
_v3906=runJTramp(_v3906);
if (typeof _v3906 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3907=new JTramp(_v3906, [runJTramp(_v3904)]);
var _v3908=_v3907;
var _v3909=lglobal["midir:lit"];
if (_v3909 === undefined) { throw new Error("No such global: " + "midir:lit"); }
var _v3910=_v3909;
_v3910=runJTramp(_v3910);
if (typeof _v3910 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3911=new JTramp(_v3910, [runJTramp(_v3908),runJTramp(_v3886)]);
_v3900=_v3911;
} else {
var _v3912="prim:do";
var _v3913=_v3912;
var _v3914=lglobal["="];
if (_v3914 === undefined) { throw new Error("No such global: " + "="); }
var _v3915=_v3914;
_v3915=runJTramp(_v3915);
if (typeof _v3915 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3916=new JTramp(_v3915, [runJTramp(_v3893),runJTramp(_v3913)]);
var _v3917;
if(runJTramp(_v3916)) {
var _v3918=lglobal["tail"];
if (_v3918 === undefined) { throw new Error("No such global: " + "tail"); }
var _v3919=_v3918;
_v3919=runJTramp(_v3919);
if (typeof _v3919 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3920=new JTramp(_v3919, [runJTramp(_v3885)]);
var _v3921=_v3920;
var _v3922=lglobal["compile-body-to-midir"];
if (_v3922 === undefined) { throw new Error("No such global: " + "compile-body-to-midir"); }
var _v3923=_v3922;
_v3923=runJTramp(_v3923);
if (typeof _v3923 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3924=new JTramp(_v3923, [runJTramp(_v3884),runJTramp(_v3921),runJTramp(_v3886)]);
_v3917=_v3924;
} else {
var _v3925="prim:if";
var _v3926=_v3925;
var _v3927=lglobal["="];
if (_v3927 === undefined) { throw new Error("No such global: " + "="); }
var _v3928=_v3927;
_v3928=runJTramp(_v3928);
if (typeof _v3928 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3929=new JTramp(_v3928, [runJTramp(_v3893),runJTramp(_v3926)]);
var _v3930;
if(runJTramp(_v3929)) {
var _v3931=lglobal["tail"];
if (_v3931 === undefined) { throw new Error("No such global: " + "tail"); }
var _v3932=_v3931;
_v3932=runJTramp(_v3932);
if (typeof _v3932 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3933=new JTramp(_v3932, [runJTramp(_v3885)]);
var _v3934=_v3933;
var _v3935=lglobal["tail"];
if (_v3935 === undefined) { throw new Error("No such global: " + "tail"); }
var _v3936=_v3935;
_v3936=runJTramp(_v3936);
if (typeof _v3936 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3937=new JTramp(_v3936, [runJTramp(_v3934)]);
var _v3938=_v3937;
var _v3939=lglobal["head"];
if (_v3939 === undefined) { throw new Error("No such global: " + "head"); }
var _v3940=_v3939;
_v3940=runJTramp(_v3940);
if (typeof _v3940 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3941=new JTramp(_v3940, [runJTramp(_v3938)]);
var _v3942=_v3941;
var _v3943=lglobal["midir:leave"];
if (_v3943 === undefined) { throw new Error("No such global: " + "midir:leave"); }
var _v3944=_v3943;
_v3944=runJTramp(_v3944);
if (typeof _v3944 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3945=new JTramp(_v3944, []);
var _v3946=_v3945;
var _v3947=lglobal["compile-to-midir"];
if (_v3947 === undefined) { throw new Error("No such global: " + "compile-to-midir"); }
var _v3948=_v3947;
_v3948=runJTramp(_v3948);
if (typeof _v3948 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3949=new JTramp(_v3948, [runJTramp(_v3884),runJTramp(_v3942),runJTramp(_v3946)]);
var _v3950=_v3949;
var _v3951=lglobal["tail"];
if (_v3951 === undefined) { throw new Error("No such global: " + "tail"); }
var _v3952=_v3951;
_v3952=runJTramp(_v3952);
if (typeof _v3952 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3953=new JTramp(_v3952, [runJTramp(_v3885)]);
var _v3954=_v3953;
var _v3955=lglobal["tail"];
if (_v3955 === undefined) { throw new Error("No such global: " + "tail"); }
var _v3956=_v3955;
_v3956=runJTramp(_v3956);
if (typeof _v3956 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3957=new JTramp(_v3956, [runJTramp(_v3954)]);
var _v3958=_v3957;
var _v3959=lglobal["tail"];
if (_v3959 === undefined) { throw new Error("No such global: " + "tail"); }
var _v3960=_v3959;
_v3960=runJTramp(_v3960);
if (typeof _v3960 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3961=new JTramp(_v3960, [runJTramp(_v3958)]);
var _v3962=_v3961;
var _v3963=lglobal["head"];
if (_v3963 === undefined) { throw new Error("No such global: " + "head"); }
var _v3964=_v3963;
_v3964=runJTramp(_v3964);
if (typeof _v3964 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3965=new JTramp(_v3964, [runJTramp(_v3962)]);
var _v3966=_v3965;
var _v3967=lglobal["midir:leave"];
if (_v3967 === undefined) { throw new Error("No such global: " + "midir:leave"); }
var _v3968=_v3967;
_v3968=runJTramp(_v3968);
if (typeof _v3968 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3969=new JTramp(_v3968, []);
var _v3970=_v3969;
var _v3971=lglobal["compile-to-midir"];
if (_v3971 === undefined) { throw new Error("No such global: " + "compile-to-midir"); }
var _v3972=_v3971;
_v3972=runJTramp(_v3972);
if (typeof _v3972 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3973=new JTramp(_v3972, [runJTramp(_v3884),runJTramp(_v3966),runJTramp(_v3970)]);
var _v3974=_v3973;
var _v3975=function (_v3976,_v3977) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var _v3979=lglobal["tail"];
if (_v3979 === undefined) { throw new Error("No such global: " + "tail"); }
var _v3980=_v3979;
_v3980=runJTramp(_v3980);
if (typeof _v3980 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3981=new JTramp(_v3980, [runJTramp(_v3885)]);
var _v3982=_v3981;
var _v3983=lglobal["head"];
if (_v3983 === undefined) { throw new Error("No such global: " + "head"); }
var _v3984=_v3983;
_v3984=runJTramp(_v3984);
if (typeof _v3984 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3985=new JTramp(_v3984, [runJTramp(_v3982)]);
var _v3986=_v3985;
var _v3987=lglobal["midir:if"];
if (_v3987 === undefined) { throw new Error("No such global: " + "midir:if"); }
var _v3988=_v3987;
_v3988=runJTramp(_v3988);
if (typeof _v3988 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3989=new JTramp(_v3988, [runJTramp(_v3976),runJTramp(_v3977),runJTramp(_v3886)]);
var _v3990=_v3989;
var _v3991=lglobal["compile-to-midir"];
if (_v3991 === undefined) { throw new Error("No such global: " + "compile-to-midir"); }
var _v3992=_v3991;
_v3992=runJTramp(_v3992);
if (typeof _v3992 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3993=new JTramp(_v3992, [runJTramp(_v3884),runJTramp(_v3986),runJTramp(_v3990)]);
return _v3993;
};
var _v3994=_v3975;
_v3994=runJTramp(_v3994);
if (typeof _v3994 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v3995=new JTramp(_v3994, [runJTramp(_v3950),runJTramp(_v3974)]);
_v3930=_v3995;
} else {
var _v3996="prim:fun";
var _v3997=_v3996;
var _v3998=lglobal["="];
if (_v3998 === undefined) { throw new Error("No such global: " + "="); }
var _v3999=_v3998;
_v3999=runJTramp(_v3999);
if (typeof _v3999 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4000=new JTramp(_v3999, [runJTramp(_v3893),runJTramp(_v3997)]);
var _v4001;
if(runJTramp(_v4000)) {
var _v4002=lglobal["tail"];
if (_v4002 === undefined) { throw new Error("No such global: " + "tail"); }
var _v4003=_v4002;
_v4003=runJTramp(_v4003);
if (typeof _v4003 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4004=new JTramp(_v4003, [runJTramp(_v3885)]);
var _v4005=_v4004;
var _v4006=lglobal["head"];
if (_v4006 === undefined) { throw new Error("No such global: " + "head"); }
var _v4007=_v4006;
_v4007=runJTramp(_v4007);
if (typeof _v4007 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4008=new JTramp(_v4007, [runJTramp(_v4005)]);
var _v4009=_v4008;
var _v4010=lglobal["split-fun-args"];
if (_v4010 === undefined) { throw new Error("No such global: " + "split-fun-args"); }
var _v4011=_v4010;
_v4011=runJTramp(_v4011);
if (typeof _v4011 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4012=new JTramp(_v4011, [runJTramp(_v4009)]);
var _v4013=_v4012;
var _v4014=function (_v4015) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v4017=lglobal["tail"];
if (_v4017 === undefined) { throw new Error("No such global: " + "tail"); }
var _v4018=_v4017;
_v4018=runJTramp(_v4018);
if (typeof _v4018 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4019=new JTramp(_v4018, [runJTramp(_v3885)]);
var _v4020=_v4019;
var _v4021=lglobal["tail"];
if (_v4021 === undefined) { throw new Error("No such global: " + "tail"); }
var _v4022=_v4021;
_v4022=runJTramp(_v4022);
if (typeof _v4022 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4023=new JTramp(_v4022, [runJTramp(_v4020)]);
var _v4024=_v4023;
var _v4025=lglobal["normalize-fun-body"];
if (_v4025 === undefined) { throw new Error("No such global: " + "normalize-fun-body"); }
var _v4026=_v4025;
_v4026=runJTramp(_v4026);
if (typeof _v4026 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4027=new JTramp(_v4026, [runJTramp(_v4024)]);
var _v4028=_v4027;
var _v4029=lglobal["split-fun-body"];
if (_v4029 === undefined) { throw new Error("No such global: " + "split-fun-body"); }
var _v4030=_v4029;
_v4030=runJTramp(_v4030);
if (typeof _v4030 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4031=new JTramp(_v4030, [runJTramp(_v4028)]);
var _v4032=_v4031;
var _v4033=function (_v4034) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v4036=lglobal["head"];
if (_v4036 === undefined) { throw new Error("No such global: " + "head"); }
var _v4037=_v4036;
var _v4038=lglobal["tail"];
if (_v4038 === undefined) { throw new Error("No such global: " + "tail"); }
var _v4039=_v4038;
var _v4040=lglobal["."];
if (_v4040 === undefined) { throw new Error("No such global: " + "."); }
var _v4041=_v4040;
_v4041=runJTramp(_v4041);
if (typeof _v4041 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4042=new JTramp(_v4041, [runJTramp(_v4037),runJTramp(_v4039)]);
var _v4043=_v4042;
var _v4044=lglobal["head"];
if (_v4044 === undefined) { throw new Error("No such global: " + "head"); }
var _v4045=_v4044;
_v4045=runJTramp(_v4045);
if (typeof _v4045 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4046=new JTramp(_v4045, [runJTramp(_v4034)]);
var _v4047=_v4046;
var _v4048=lglobal["map"];
if (_v4048 === undefined) { throw new Error("No such global: " + "map"); }
var _v4049=_v4048;
_v4049=runJTramp(_v4049);
if (typeof _v4049 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4050=new JTramp(_v4049, [runJTramp(_v4043),runJTramp(_v4047)]);
var _v4051=_v4050;
var _v4052=function (_v4053) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v4055=lglobal["head"];
if (_v4055 === undefined) { throw new Error("No such global: " + "head"); }
var _v4056=_v4055;
_v4056=runJTramp(_v4056);
if (typeof _v4056 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4057=new JTramp(_v4056, [runJTramp(_v4015)]);
var _v4058=_v4057;
var _v4059=lglobal["tail"];
if (_v4059 === undefined) { throw new Error("No such global: " + "tail"); }
var _v4060=_v4059;
_v4060=runJTramp(_v4060);
if (typeof _v4060 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4061=new JTramp(_v4060, [runJTramp(_v4015)]);
var _v4062=_v4061;
var _v4063=lglobal["null?"];
if (_v4063 === undefined) { throw new Error("No such global: " + "null?"); }
var _v4064=_v4063;
_v4064=runJTramp(_v4064);
if (typeof _v4064 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4065=new JTramp(_v4064, [runJTramp(_v4062)]);
var _v4066;
if(runJTramp(_v4065)) {
var _v4067=lglobal["list"];
if (_v4067 === undefined) { throw new Error("No such global: " + "list"); }
var _v4068=_v4067;
_v4068=runJTramp(_v4068);
if (typeof _v4068 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4069=new JTramp(_v4068, []);
_v4066=_v4069;
} else {
var _v4070=lglobal["tail"];
if (_v4070 === undefined) { throw new Error("No such global: " + "tail"); }
var _v4071=_v4070;
_v4071=runJTramp(_v4071);
if (typeof _v4071 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4072=new JTramp(_v4071, [runJTramp(_v4015)]);
var _v4073=_v4072;
var _v4074=lglobal["list"];
if (_v4074 === undefined) { throw new Error("No such global: " + "list"); }
var _v4075=_v4074;
_v4075=runJTramp(_v4075);
if (typeof _v4075 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4076=new JTramp(_v4075, [runJTramp(_v4073)]);
_v4066=_v4076;
}
var _v4077=_v4066;
var _v4078=lglobal["append"];
if (_v4078 === undefined) { throw new Error("No such global: " + "append"); }
var _v4079=_v4078;
_v4079=runJTramp(_v4079);
if (typeof _v4079 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4080=new JTramp(_v4079, [runJTramp(_v4058),runJTramp(_v4077),runJTramp(_v4053)]);
var _v4081=_v4080;
var _v4082=function (_v4083) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v4085=lglobal["make-env"];
if (_v4085 === undefined) { throw new Error("No such global: " + "make-env"); }
var _v4086=_v4085;
var _v4087=function (_v4088) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v4090=lglobal["new-var"];
if (_v4090 === undefined) { throw new Error("No such global: " + "new-var"); }
var _v4091=_v4090;
_v4091=runJTramp(_v4091);
if (typeof _v4091 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4092=new JTramp(_v4091, [runJTramp(_v4088)]);
var _v4093=_v4092;
var _v4094=lglobal["list"];
if (_v4094 === undefined) { throw new Error("No such global: " + "list"); }
var _v4095=_v4094;
_v4095=runJTramp(_v4095);
if (typeof _v4095 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4096=new JTramp(_v4095, [runJTramp(_v4088),runJTramp(_v4093)]);
return _v4096;
};
var _v4097=_v4087;
var _v4098=lglobal["map-append"];
if (_v4098 === undefined) { throw new Error("No such global: " + "map-append"); }
var _v4099=_v4098;
_v4099=runJTramp(_v4099);
if (typeof _v4099 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4100=new JTramp(_v4099, [runJTramp(_v4097),runJTramp(_v4083)]);
var _v4101=_v4100;
var _v4102=lglobal["cons"];
if (_v4102 === undefined) { throw new Error("No such global: " + "cons"); }
var _v4103=_v4102;
_v4103=runJTramp(_v4103);
if (typeof _v4103 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4104=new JTramp(_v4103, [runJTramp(_v3884),runJTramp(_v4101)]);
var _v4105=_v4104;
var _v4106=lglobal["apply"];
if (_v4106 === undefined) { throw new Error("No such global: " + "apply"); }
var _v4107=_v4106;
_v4107=runJTramp(_v4107);
if (typeof _v4107 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4108=new JTramp(_v4107, [runJTramp(_v4086),runJTramp(_v4105)]);
var _v4109=_v4108;
var _v4110=function (_v4111) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v4113=function (_v4114) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v4116=lglobal["null?"];
if (_v4116 === undefined) { throw new Error("No such global: " + "null?"); }
var _v4117=_v4116;
_v4117=runJTramp(_v4117);
if (typeof _v4117 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4118=new JTramp(_v4117, [runJTramp(_v4114)]);
var _v4119;
if(runJTramp(_v4118)) {
var _v4120=lglobal["null"];
if (_v4120 === undefined) { throw new Error("No such global: " + "null"); }
_v4119=_v4120;
} else {
var _v4121="lookup";
var _v4122=_v4121;
_v4111=runJTramp(_v4111);
if (typeof _v4111 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4123=new JTramp(_v4111, [runJTramp(_v4122),runJTramp(_v4114)]);
_v4119=_v4123;
}
return _v4119;
};
var _v4124=_v4113;
var _v4125=function (_v4126) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v4128=lglobal["head"];
if (_v4128 === undefined) { throw new Error("No such global: " + "head"); }
var _v4129=_v4128;
_v4129=runJTramp(_v4129);
if (typeof _v4129 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4130=new JTramp(_v4129, [runJTramp(_v4015)]);
var _v4131=_v4130;
var _v4132=lglobal["map"];
if (_v4132 === undefined) { throw new Error("No such global: " + "map"); }
var _v4133=_v4132;
_v4133=runJTramp(_v4133);
if (typeof _v4133 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4134=new JTramp(_v4133, [runJTramp(_v4126),runJTramp(_v4131)]);
var _v4135=_v4134;
var _v4136=lglobal["tail"];
if (_v4136 === undefined) { throw new Error("No such global: " + "tail"); }
var _v4137=_v4136;
_v4137=runJTramp(_v4137);
if (typeof _v4137 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4138=new JTramp(_v4137, [runJTramp(_v4015)]);
var _v4139=_v4138;
_v4126=runJTramp(_v4126);
if (typeof _v4126 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4140=new JTramp(_v4126, [runJTramp(_v4139)]);
var _v4141=_v4140;
var _v4142=lglobal["cons"];
if (_v4142 === undefined) { throw new Error("No such global: " + "cons"); }
var _v4143=_v4142;
_v4143=runJTramp(_v4143);
if (typeof _v4143 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4144=new JTramp(_v4143, [runJTramp(_v4135),runJTramp(_v4141)]);
var _v4145=_v4144;
var _v4146=function (_v4147) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v4149=lglobal["map"];
if (_v4149 === undefined) { throw new Error("No such global: " + "map"); }
var _v4150=_v4149;
_v4150=runJTramp(_v4150);
if (typeof _v4150 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4151=new JTramp(_v4150, [runJTramp(_v4126),runJTramp(_v4053)]);
var _v4152=_v4151;
var _v4153=function (_v4154) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v4156=function (_v4157) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v4159=lglobal["compile-to-midir"];
if (_v4159 === undefined) { throw new Error("No such global: " + "compile-to-midir"); }
var _v4160=_v4159;
var _v4161="prim:set!";
var _v4162=_v4161;
var _v4163=lglobal["tail"];
if (_v4163 === undefined) { throw new Error("No such global: " + "tail"); }
var _v4164=_v4163;
_v4164=runJTramp(_v4164);
if (typeof _v4164 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4165=new JTramp(_v4164, [runJTramp(_v4157)]);
var _v4166=_v4165;
var _v4167=lglobal["cons"];
if (_v4167 === undefined) { throw new Error("No such global: " + "cons"); }
var _v4168=_v4167;
_v4168=runJTramp(_v4168);
if (typeof _v4168 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4169=new JTramp(_v4168, [runJTramp(_v4162),runJTramp(_v4166)]);
var _v4170=_v4169;
var _v4171=lglobal["partial"];
if (_v4171 === undefined) { throw new Error("No such global: " + "partial"); }
var _v4172=_v4171;
_v4172=runJTramp(_v4172);
if (typeof _v4172 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4173=new JTramp(_v4172, [runJTramp(_v4160),runJTramp(_v4111),runJTramp(_v4170)]);
return _v4173;
};
var _v4174=_v4156;
var _v4175=lglobal["head"];
if (_v4175 === undefined) { throw new Error("No such global: " + "head"); }
var _v4176=_v4175;
_v4176=runJTramp(_v4176);
if (typeof _v4176 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4177=new JTramp(_v4176, [runJTramp(_v4034)]);
var _v4178=_v4177;
var _v4179=lglobal["map"];
if (_v4179 === undefined) { throw new Error("No such global: " + "map"); }
var _v4180=_v4179;
_v4180=runJTramp(_v4180);
if (typeof _v4180 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4181=new JTramp(_v4180, [runJTramp(_v4174),runJTramp(_v4178)]);
var _v4182=_v4181;
var _v4183=function (_v4184) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v4186=lglobal["compile-to-midir"];
if (_v4186 === undefined) { throw new Error("No such global: " + "compile-to-midir"); }
var _v4187=_v4186;
var _v4188=lglobal["partial"];
if (_v4188 === undefined) { throw new Error("No such global: " + "partial"); }
var _v4189=_v4188;
_v4189=runJTramp(_v4189);
if (typeof _v4189 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4190=new JTramp(_v4189, [runJTramp(_v4187),runJTramp(_v4111)]);
var _v4191=_v4190;
var _v4192=lglobal["curry"];
if (_v4192 === undefined) { throw new Error("No such global: " + "curry"); }
var _v4193=_v4192;
_v4193=runJTramp(_v4193);
if (typeof _v4193 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4194=new JTramp(_v4193, [runJTramp(_v4191)]);
var _v4195=_v4194;
var _v4196=lglobal["tail"];
if (_v4196 === undefined) { throw new Error("No such global: " + "tail"); }
var _v4197=_v4196;
_v4197=runJTramp(_v4197);
if (typeof _v4197 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4198=new JTramp(_v4197, [runJTramp(_v4034)]);
var _v4199=_v4198;
var _v4200=lglobal["map"];
if (_v4200 === undefined) { throw new Error("No such global: " + "map"); }
var _v4201=_v4200;
_v4201=runJTramp(_v4201);
if (typeof _v4201 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4202=new JTramp(_v4201, [runJTramp(_v4195),runJTramp(_v4199)]);
var _v4203=_v4202;
var _v4204=function (_v4205) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v4207=lglobal["head"];
if (_v4207 === undefined) { throw new Error("No such global: " + "head"); }
var _v4208=_v4207;
_v4208=runJTramp(_v4208);
if (typeof _v4208 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4209=new JTramp(_v4208, [runJTramp(_v4147)]);
var _v4210=_v4209;
var _v4211=lglobal["tail"];
if (_v4211 === undefined) { throw new Error("No such global: " + "tail"); }
var _v4212=_v4211;
_v4212=runJTramp(_v4212);
if (typeof _v4212 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4213=new JTramp(_v4212, [runJTramp(_v4147)]);
var _v4214=_v4213;
var _v4215=lglobal["$"];
if (_v4215 === undefined) { throw new Error("No such global: " + "$"); }
var _v4216=_v4215;
var _v4217=lglobal["midir:return"];
if (_v4217 === undefined) { throw new Error("No such global: " + "midir:return"); }
var _v4218=_v4217;
_v4218=runJTramp(_v4218);
if (typeof _v4218 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4219=new JTramp(_v4218, []);
var _v4220=_v4219;
var _v4221=lglobal["midir:bind-drop"];
if (_v4221 === undefined) { throw new Error("No such global: " + "midir:bind-drop"); }
var _v4222=_v4221;
var _v4223=lglobal["intercalate"];
if (_v4223 === undefined) { throw new Error("No such global: " + "intercalate"); }
var _v4224=_v4223;
_v4224=runJTramp(_v4224);
if (typeof _v4224 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4225=new JTramp(_v4224, [runJTramp(_v4222),runJTramp(_v4205)]);
var _v4226=_v4225;
var _v4227=lglobal["append"];
if (_v4227 === undefined) { throw new Error("No such global: " + "append"); }
var _v4228=_v4227;
_v4228=runJTramp(_v4228);
if (typeof _v4228 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4229=new JTramp(_v4228, [runJTramp(_v4184),runJTramp(_v4226)]);
var _v4230=_v4229;
var _v4231=lglobal["foldr"];
if (_v4231 === undefined) { throw new Error("No such global: " + "foldr"); }
var _v4232=_v4231;
_v4232=runJTramp(_v4232);
if (typeof _v4232 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4233=new JTramp(_v4232, [runJTramp(_v4216),runJTramp(_v4220),runJTramp(_v4230)]);
var _v4234=_v4233;
var _v4235=lglobal["midir:enter"];
if (_v4235 === undefined) { throw new Error("No such global: " + "midir:enter"); }
var _v4236=_v4235;
_v4236=runJTramp(_v4236);
if (typeof _v4236 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4237=new JTramp(_v4236, [runJTramp(_v4210),runJTramp(_v4214),runJTramp(_v4154),runJTramp(_v4234)]);
var _v4238=_v4237;
var _v4239=lglobal["midir:closure"];
if (_v4239 === undefined) { throw new Error("No such global: " + "midir:closure"); }
var _v4240=_v4239;
_v4240=runJTramp(_v4240);
if (typeof _v4240 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4241=new JTramp(_v4240, [runJTramp(_v4238),runJTramp(_v3886)]);
return _v4241;
};
var _v4242=_v4204;
_v4242=runJTramp(_v4242);
if (typeof _v4242 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4243=new JTramp(_v4242, [runJTramp(_v4203)]);
return _v4243;
};
var _v4244=_v4183;
_v4244=runJTramp(_v4244);
if (typeof _v4244 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4245=new JTramp(_v4244, [runJTramp(_v4182)]);
return _v4245;
};
var _v4246=_v4153;
_v4246=runJTramp(_v4246);
if (typeof _v4246 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4247=new JTramp(_v4246, [runJTramp(_v4152)]);
return _v4247;
};
var _v4248=_v4146;
_v4248=runJTramp(_v4248);
if (typeof _v4248 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4249=new JTramp(_v4248, [runJTramp(_v4145)]);
return _v4249;
};
var _v4250=_v4125;
_v4250=runJTramp(_v4250);
if (typeof _v4250 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4251=new JTramp(_v4250, [runJTramp(_v4124)]);
return _v4251;
};
var _v4252=_v4110;
_v4252=runJTramp(_v4252);
if (typeof _v4252 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4253=new JTramp(_v4252, [runJTramp(_v4109)]);
return _v4253;
};
var _v4254=_v4082;
_v4254=runJTramp(_v4254);
if (typeof _v4254 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4255=new JTramp(_v4254, [runJTramp(_v4081)]);
return _v4255;
};
var _v4256=_v4052;
_v4256=runJTramp(_v4256);
if (typeof _v4256 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4257=new JTramp(_v4256, [runJTramp(_v4051)]);
return _v4257;
};
var _v4258=_v4033;
_v4258=runJTramp(_v4258);
if (typeof _v4258 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4259=new JTramp(_v4258, [runJTramp(_v4032)]);
return _v4259;
};
var _v4260=_v4014;
_v4260=runJTramp(_v4260);
if (typeof _v4260 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4261=new JTramp(_v4260, [runJTramp(_v4013)]);
_v4001=_v4261;
} else {
var _v4262="prim:def";
var _v4263=_v4262;
var _v4264=lglobal["="];
if (_v4264 === undefined) { throw new Error("No such global: " + "="); }
var _v4265=_v4264;
_v4265=runJTramp(_v4265);
if (typeof _v4265 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4266=new JTramp(_v4265, [runJTramp(_v3893),runJTramp(_v4263)]);
var _v4267;
if(runJTramp(_v4266)) {
var _v4268="Definitions may only occur at the beginning of a function.";
var _v4269=_v4268;
var _v4270=lglobal["error"];
if (_v4270 === undefined) { throw new Error("No such global: " + "error"); }
var _v4271=_v4270;
_v4271=runJTramp(_v4271);
if (typeof _v4271 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4272=new JTramp(_v4271, [runJTramp(_v4269)]);
_v4267=_v4272;
} else {
var _v4273="prim:set!";
var _v4274=_v4273;
var _v4275=lglobal["="];
if (_v4275 === undefined) { throw new Error("No such global: " + "="); }
var _v4276=_v4275;
_v4276=runJTramp(_v4276);
if (typeof _v4276 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4277=new JTramp(_v4276, [runJTramp(_v3893),runJTramp(_v4274)]);
var _v4278;
if(runJTramp(_v4277)) {
var _v4279=lglobal["tail"];
if (_v4279 === undefined) { throw new Error("No such global: " + "tail"); }
var _v4280=_v4279;
_v4280=runJTramp(_v4280);
if (typeof _v4280 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4281=new JTramp(_v4280, [runJTramp(_v3885)]);
var _v4282=_v4281;
var _v4283=lglobal["head"];
if (_v4283 === undefined) { throw new Error("No such global: " + "head"); }
var _v4284=_v4283;
_v4284=runJTramp(_v4284);
if (typeof _v4284 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4285=new JTramp(_v4284, [runJTramp(_v4282)]);
var _v4286=_v4285;
var _v4287=function (_v4288) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v4290=lglobal["tail"];
if (_v4290 === undefined) { throw new Error("No such global: " + "tail"); }
var _v4291=_v4290;
_v4291=runJTramp(_v4291);
if (typeof _v4291 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4292=new JTramp(_v4291, [runJTramp(_v3885)]);
var _v4293=_v4292;
var _v4294=lglobal["tail"];
if (_v4294 === undefined) { throw new Error("No such global: " + "tail"); }
var _v4295=_v4294;
_v4295=runJTramp(_v4295);
if (typeof _v4295 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4296=new JTramp(_v4295, [runJTramp(_v4293)]);
var _v4297=_v4296;
var _v4298=lglobal["head"];
if (_v4298 === undefined) { throw new Error("No such global: " + "head"); }
var _v4299=_v4298;
_v4299=runJTramp(_v4299);
if (typeof _v4299 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4300=new JTramp(_v4299, [runJTramp(_v4297)]);
var _v4301=_v4300;
var _v4302="has?";
var _v4303=_v4302;
_v3884=runJTramp(_v3884);
if (typeof _v3884 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4304=new JTramp(_v3884, [runJTramp(_v4303),runJTramp(_v4288)]);
var _v4305;
if(runJTramp(_v4304)) {
var _v4306="lookup";
var _v4307=_v4306;
_v3884=runJTramp(_v3884);
if (typeof _v3884 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4308=new JTramp(_v3884, [runJTramp(_v4307),runJTramp(_v4288)]);
var _v4309=_v4308;
var _v4310=lglobal["midir:set!"];
if (_v4310 === undefined) { throw new Error("No such global: " + "midir:set!"); }
var _v4311=_v4310;
_v4311=runJTramp(_v4311);
if (typeof _v4311 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4312=new JTramp(_v4311, [runJTramp(_v4309),runJTramp(_v3886)]);
_v4305=_v4312;
} else {
var _v4313=lglobal["midir:gset!"];
if (_v4313 === undefined) { throw new Error("No such global: " + "midir:gset!"); }
var _v4314=_v4313;
_v4314=runJTramp(_v4314);
if (typeof _v4314 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4315=new JTramp(_v4314, [runJTramp(_v4288),runJTramp(_v3886)]);
_v4305=_v4315;
}
var _v4316=_v4305;
var _v4317=lglobal["compile-to-midir"];
if (_v4317 === undefined) { throw new Error("No such global: " + "compile-to-midir"); }
var _v4318=_v4317;
_v4318=runJTramp(_v4318);
if (typeof _v4318 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4319=new JTramp(_v4318, [runJTramp(_v3884),runJTramp(_v4301),runJTramp(_v4316)]);
return _v4319;
};
var _v4320=_v4287;
_v4320=runJTramp(_v4320);
if (typeof _v4320 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4321=new JTramp(_v4320, [runJTramp(_v4286)]);
_v4278=_v4321;
} else {
var _v4322="prim:ffi";
var _v4323=_v4322;
var _v4324=lglobal["="];
if (_v4324 === undefined) { throw new Error("No such global: " + "="); }
var _v4325=_v4324;
_v4325=runJTramp(_v4325);
if (typeof _v4325 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4326=new JTramp(_v4325, [runJTramp(_v3893),runJTramp(_v4323)]);
var _v4327;
if(runJTramp(_v4326)) {
var _v4328=lglobal["tail"];
if (_v4328 === undefined) { throw new Error("No such global: " + "tail"); }
var _v4329=_v4328;
_v4329=runJTramp(_v4329);
if (typeof _v4329 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4330=new JTramp(_v4329, [runJTramp(_v3885)]);
var _v4331=_v4330;
var _v4332=lglobal["head"];
if (_v4332 === undefined) { throw new Error("No such global: " + "head"); }
var _v4333=_v4332;
_v4333=runJTramp(_v4333);
if (typeof _v4333 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4334=new JTramp(_v4333, [runJTramp(_v4331)]);
var _v4335=_v4334;
var _v4336=function (_v4337) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v4339=lglobal["cons?"];
if (_v4339 === undefined) { throw new Error("No such global: " + "cons?"); }
var _v4340=_v4339;
_v4340=runJTramp(_v4340);
if (typeof _v4340 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4341=new JTramp(_v4340, [runJTramp(_v4337)]);
var _v4342;
if(runJTramp(_v4341)) {
var _v4343=lglobal["tail"];
if (_v4343 === undefined) { throw new Error("No such global: " + "tail"); }
var _v4344=_v4343;
_v4344=runJTramp(_v4344);
if (typeof _v4344 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4345=new JTramp(_v4344, [runJTramp(_v4337)]);
var _v4346=_v4345;
var _v4347=lglobal["head"];
if (_v4347 === undefined) { throw new Error("No such global: " + "head"); }
var _v4348=_v4347;
_v4348=runJTramp(_v4348);
if (typeof _v4348 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4349=new JTramp(_v4348, [runJTramp(_v4346)]);
_v4342=_v4349;
} else {
_v4342=_v4337;
}
var _v4350=_v4342;
var _v4351=function (_v4352) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v4354=lglobal["tail"];
if (_v4354 === undefined) { throw new Error("No such global: " + "tail"); }
var _v4355=_v4354;
_v4355=runJTramp(_v4355);
if (typeof _v4355 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4356=new JTramp(_v4355, [runJTramp(_v3885)]);
var _v4357=_v4356;
var _v4358=lglobal["tail"];
if (_v4358 === undefined) { throw new Error("No such global: " + "tail"); }
var _v4359=_v4358;
_v4359=runJTramp(_v4359);
if (typeof _v4359 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4360=new JTramp(_v4359, [runJTramp(_v4357)]);
var _v4361=_v4360;
var _v4362=lglobal["cons?"];
if (_v4362 === undefined) { throw new Error("No such global: " + "cons?"); }
var _v4363=_v4362;
_v4363=runJTramp(_v4363);
if (typeof _v4363 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4364=new JTramp(_v4363, [runJTramp(_v4361)]);
var _v4365;
if(runJTramp(_v4364)) {
var _v4366=lglobal["tail"];
if (_v4366 === undefined) { throw new Error("No such global: " + "tail"); }
var _v4367=_v4366;
_v4367=runJTramp(_v4367);
if (typeof _v4367 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4368=new JTramp(_v4367, [runJTramp(_v3885)]);
var _v4369=_v4368;
var _v4370=lglobal["tail"];
if (_v4370 === undefined) { throw new Error("No such global: " + "tail"); }
var _v4371=_v4370;
_v4371=runJTramp(_v4371);
if (typeof _v4371 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4372=new JTramp(_v4371, [runJTramp(_v4369)]);
var _v4373=_v4372;
var _v4374=lglobal["head"];
if (_v4374 === undefined) { throw new Error("No such global: " + "head"); }
var _v4375=_v4374;
_v4375=runJTramp(_v4375);
if (typeof _v4375 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4376=new JTramp(_v4375, [runJTramp(_v4373)]);
_v4365=_v4376;
} else {
var _v4377=lglobal["null"];
if (_v4377 === undefined) { throw new Error("No such global: " + "null"); }
_v4365=_v4377;
}
var _v4378=_v4365;
var _v4379=function (_v4380) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v4382=lglobal["cons?"];
if (_v4382 === undefined) { throw new Error("No such global: " + "cons?"); }
var _v4383=_v4382;
_v4383=runJTramp(_v4383);
if (typeof _v4383 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4384=new JTramp(_v4383, [runJTramp(_v4380)]);
var _v4385;
if(runJTramp(_v4384)) {
var _v4386=lglobal["tail"];
if (_v4386 === undefined) { throw new Error("No such global: " + "tail"); }
var _v4387=_v4386;
_v4387=runJTramp(_v4387);
if (typeof _v4387 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4388=new JTramp(_v4387, [runJTramp(_v4380)]);
var _v4389=_v4388;
var _v4390=lglobal["head"];
if (_v4390 === undefined) { throw new Error("No such global: " + "head"); }
var _v4391=_v4390;
_v4391=runJTramp(_v4391);
if (typeof _v4391 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4392=new JTramp(_v4391, [runJTramp(_v4389)]);
_v4385=_v4392;
} else {
_v4385=_v4380;
}
var _v4393=_v4385;
var _v4394=function (_v4395) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v4397=lglobal["midir:ffi"];
if (_v4397 === undefined) { throw new Error("No such global: " + "midir:ffi"); }
var _v4398=_v4397;
_v4398=runJTramp(_v4398);
if (typeof _v4398 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4399=new JTramp(_v4398, [runJTramp(_v4352),runJTramp(_v4395),runJTramp(_v3886)]);
return _v4399;
};
var _v4400=_v4394;
_v4400=runJTramp(_v4400);
if (typeof _v4400 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4401=new JTramp(_v4400, [runJTramp(_v4393)]);
return _v4401;
};
var _v4402=_v4379;
_v4402=runJTramp(_v4402);
if (typeof _v4402 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4403=new JTramp(_v4402, [runJTramp(_v4378)]);
return _v4403;
};
var _v4404=_v4351;
_v4404=runJTramp(_v4404);
if (typeof _v4404 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4405=new JTramp(_v4404, [runJTramp(_v4350)]);
return _v4405;
};
var _v4406=_v4336;
_v4406=runJTramp(_v4406);
if (typeof _v4406 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4407=new JTramp(_v4406, [runJTramp(_v4335)]);
_v4327=_v4407;
} else {
var _v4408=lglobal["compile-application-to-midir"];
if (_v4408 === undefined) { throw new Error("No such global: " + "compile-application-to-midir"); }
var _v4409=_v4408;
_v4409=runJTramp(_v4409);
if (typeof _v4409 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4410=new JTramp(_v4409, [runJTramp(_v3884),runJTramp(_v3885),runJTramp(_v3886)]);
_v4327=_v4410;
}
_v4278=_v4327;
}
_v4267=_v4278;
}
_v4001=_v4267;
}
_v3930=_v4001;
}
_v3917=_v3930;
}
_v3900=_v3917;
}
return _v3900;
};
var _v4411=_v3892;
_v4411=runJTramp(_v4411);
if (typeof _v4411 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4412=new JTramp(_v4411, [runJTramp(_v3891)]);
return _v4412;
};
_v3882=_v3883;
lglobal["compile-form-to-midir"]=runJTramp(_v3882);
})();
(function () {
var _v4413;
var _v4414=function (_v4415) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v4417;
var _v4418=function (_v4419) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v4421=lglobal["midir-macro-expand"];
if (_v4421 === undefined) { throw new Error("No such global: " + "midir-macro-expand"); }
var _v4422=_v4421;
_v4422=runJTramp(_v4422);
if (typeof _v4422 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4423=new JTramp(_v4422, [runJTramp(_v4419)]);
var _v4424=_v4423;
var _v4425=function (_v4426) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v4428=lglobal["cons?"];
if (_v4428 === undefined) { throw new Error("No such global: " + "cons?"); }
var _v4429=_v4428;
_v4429=runJTramp(_v4429);
if (typeof _v4429 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4430=new JTramp(_v4429, [runJTramp(_v4426)]);
var _v4431=_v4430;
var _v4432=function (_v4433) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v4435;
if(runJTramp(_v4433)) {
var _v4436="prim:do";
var _v4437=_v4436;
var _v4438=lglobal["head"];
if (_v4438 === undefined) { throw new Error("No such global: " + "head"); }
var _v4439=_v4438;
_v4439=runJTramp(_v4439);
if (typeof _v4439 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4440=new JTramp(_v4439, [runJTramp(_v4426)]);
var _v4441=_v4440;
var _v4442=lglobal["="];
if (_v4442 === undefined) { throw new Error("No such global: " + "="); }
var _v4443=_v4442;
_v4443=runJTramp(_v4443);
if (typeof _v4443 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4444=new JTramp(_v4443, [runJTramp(_v4437),runJTramp(_v4441)]);
_v4435=_v4444;
} else {
_v4435=_v4433;
}
return _v4435;
};
var _v4445=_v4432;
_v4445=runJTramp(_v4445);
if (typeof _v4445 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4446=new JTramp(_v4445, [runJTramp(_v4431)]);
var _v4447;
if(runJTramp(_v4446)) {
var _v4448=lglobal["tail"];
if (_v4448 === undefined) { throw new Error("No such global: " + "tail"); }
var _v4449=_v4448;
_v4449=runJTramp(_v4449);
if (typeof _v4449 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4450=new JTramp(_v4449, [runJTramp(_v4426)]);
var _v4451=_v4450;
var _v4452=lglobal["normalize-fun-body"];
if (_v4452 === undefined) { throw new Error("No such global: " + "normalize-fun-body"); }
var _v4453=_v4452;
_v4453=runJTramp(_v4453);
if (typeof _v4453 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4454=new JTramp(_v4453, [runJTramp(_v4451)]);
_v4447=_v4454;
} else {
var _v4455=lglobal["list"];
if (_v4455 === undefined) { throw new Error("No such global: " + "list"); }
var _v4456=_v4455;
_v4456=runJTramp(_v4456);
if (typeof _v4456 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4457=new JTramp(_v4456, [runJTramp(_v4426)]);
_v4447=_v4457;
}
return _v4447;
};
var _v4458=_v4425;
_v4458=runJTramp(_v4458);
if (typeof _v4458 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4459=new JTramp(_v4458, [runJTramp(_v4424)]);
return _v4459;
};
var _v4460=_v4417=runJTramp(_v4418);
var _v4461=lglobal["map-append"];
if (_v4461 === undefined) { throw new Error("No such global: " + "map-append"); }
var _v4462=_v4461;
_v4462=runJTramp(_v4462);
if (typeof _v4462 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4463=new JTramp(_v4462, [runJTramp(_v4417),runJTramp(_v4415)]);
return _v4463;
};
_v4413=_v4414;
lglobal["normalize-fun-body"]=runJTramp(_v4413);
})();
(function () {
var _v4464;
var _v4465=function (_v4466) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v4468=lglobal["nil?"];
if (_v4468 === undefined) { throw new Error("No such global: " + "nil?"); }
var _v4469=_v4468;
_v4469=runJTramp(_v4469);
if (typeof _v4469 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4470=new JTramp(_v4469, [runJTramp(_v4466)]);
var _v4471;
if(runJTramp(_v4470)) {
var _v4472=new Nil();
var _v4473=_v4472;
var _v4474=lglobal["null"];
if (_v4474 === undefined) { throw new Error("No such global: " + "null"); }
var _v4475=_v4474;
var _v4476=lglobal["cons"];
if (_v4476 === undefined) { throw new Error("No such global: " + "cons"); }
var _v4477=_v4476;
_v4477=runJTramp(_v4477);
if (typeof _v4477 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4478=new JTramp(_v4477, [runJTramp(_v4473),runJTramp(_v4475)]);
_v4471=_v4478;
} else {
var _v4479=lglobal["cons?"];
if (_v4479 === undefined) { throw new Error("No such global: " + "cons?"); }
var _v4480=_v4479;
_v4480=runJTramp(_v4480);
if (typeof _v4480 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4481=new JTramp(_v4480, [runJTramp(_v4466)]);
var _v4482;
if(runJTramp(_v4481)) {
var _v4483=lglobal["tail"];
if (_v4483 === undefined) { throw new Error("No such global: " + "tail"); }
var _v4484=_v4483;
_v4484=runJTramp(_v4484);
if (typeof _v4484 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4485=new JTramp(_v4484, [runJTramp(_v4466)]);
var _v4486=_v4485;
var _v4487=lglobal["split-fun-args"];
if (_v4487 === undefined) { throw new Error("No such global: " + "split-fun-args"); }
var _v4488=_v4487;
_v4488=runJTramp(_v4488);
if (typeof _v4488 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4489=new JTramp(_v4488, [runJTramp(_v4486)]);
var _v4490=_v4489;
var _v4491=function (_v4492) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v4494=lglobal["head"];
if (_v4494 === undefined) { throw new Error("No such global: " + "head"); }
var _v4495=_v4494;
_v4495=runJTramp(_v4495);
if (typeof _v4495 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4496=new JTramp(_v4495, [runJTramp(_v4466)]);
var _v4497=_v4496;
var _v4498=lglobal["head"];
if (_v4498 === undefined) { throw new Error("No such global: " + "head"); }
var _v4499=_v4498;
_v4499=runJTramp(_v4499);
if (typeof _v4499 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4500=new JTramp(_v4499, [runJTramp(_v4492)]);
var _v4501=_v4500;
var _v4502=lglobal["cons"];
if (_v4502 === undefined) { throw new Error("No such global: " + "cons"); }
var _v4503=_v4502;
_v4503=runJTramp(_v4503);
if (typeof _v4503 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4504=new JTramp(_v4503, [runJTramp(_v4497),runJTramp(_v4501)]);
var _v4505=_v4504;
var _v4506=lglobal["tail"];
if (_v4506 === undefined) { throw new Error("No such global: " + "tail"); }
var _v4507=_v4506;
_v4507=runJTramp(_v4507);
if (typeof _v4507 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4508=new JTramp(_v4507, [runJTramp(_v4492)]);
var _v4509=_v4508;
var _v4510=lglobal["cons"];
if (_v4510 === undefined) { throw new Error("No such global: " + "cons"); }
var _v4511=_v4510;
_v4511=runJTramp(_v4511);
if (typeof _v4511 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4512=new JTramp(_v4511, [runJTramp(_v4505),runJTramp(_v4509)]);
return _v4512;
};
var _v4513=_v4491;
_v4513=runJTramp(_v4513);
if (typeof _v4513 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4514=new JTramp(_v4513, [runJTramp(_v4490)]);
_v4482=_v4514;
} else {
var _v4515=lglobal["string?"];
if (_v4515 === undefined) { throw new Error("No such global: " + "string?"); }
var _v4516=_v4515;
_v4516=runJTramp(_v4516);
if (typeof _v4516 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4517=new JTramp(_v4516, [runJTramp(_v4466)]);
var _v4518;
if(runJTramp(_v4517)) {
var _v4519=new Nil();
var _v4520=_v4519;
var _v4521=lglobal["cons"];
if (_v4521 === undefined) { throw new Error("No such global: " + "cons"); }
var _v4522=_v4521;
_v4522=runJTramp(_v4522);
if (typeof _v4522 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4523=new JTramp(_v4522, [runJTramp(_v4520),runJTramp(_v4466)]);
_v4518=_v4523;
} else {
var _v4524="Improper argument list: ";
var _v4525=_v4524;
var _v4526=lglobal["repr"];
if (_v4526 === undefined) { throw new Error("No such global: " + "repr"); }
var _v4527=_v4526;
_v4527=runJTramp(_v4527);
if (typeof _v4527 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4528=new JTramp(_v4527, [runJTramp(_v4466)]);
var _v4529=_v4528;
var _v4530=lglobal["++"];
if (_v4530 === undefined) { throw new Error("No such global: " + "++"); }
var _v4531=_v4530;
_v4531=runJTramp(_v4531);
if (typeof _v4531 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4532=new JTramp(_v4531, [runJTramp(_v4525),runJTramp(_v4529)]);
var _v4533=_v4532;
var _v4534=lglobal["error"];
if (_v4534 === undefined) { throw new Error("No such global: " + "error"); }
var _v4535=_v4534;
_v4535=runJTramp(_v4535);
if (typeof _v4535 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4536=new JTramp(_v4535, [runJTramp(_v4533)]);
_v4518=_v4536;
}
_v4482=_v4518;
}
_v4471=_v4482;
}
return _v4471;
};
_v4464=_v4465;
lglobal["split-fun-args"]=runJTramp(_v4464);
})();
(function () {
var _v4537;
var _v4538=function (_v4539) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v4541=lglobal["nil?"];
if (_v4541 === undefined) { throw new Error("No such global: " + "nil?"); }
var _v4542=_v4541;
_v4542=runJTramp(_v4542);
if (typeof _v4542 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4543=new JTramp(_v4542, [runJTramp(_v4539)]);
var _v4544;
if(runJTramp(_v4543)) {
var _v4545=new Nil();
var _v4546=_v4545;
var _v4547=new Nil();
var _v4548=_v4547;
var _v4549=lglobal["cons"];
if (_v4549 === undefined) { throw new Error("No such global: " + "cons"); }
var _v4550=_v4549;
_v4550=runJTramp(_v4550);
if (typeof _v4550 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4551=new JTramp(_v4550, [runJTramp(_v4546),runJTramp(_v4548)]);
_v4544=_v4551;
} else {
var _v4552=lglobal["cons?"];
if (_v4552 === undefined) { throw new Error("No such global: " + "cons?"); }
var _v4553=_v4552;
_v4553=runJTramp(_v4553);
if (typeof _v4553 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4554=new JTramp(_v4553, [runJTramp(_v4539)]);
var _v4555=_v4554;
var _v4556=lglobal["not"];
if (_v4556 === undefined) { throw new Error("No such global: " + "not"); }
var _v4557=_v4556;
_v4557=runJTramp(_v4557);
if (typeof _v4557 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4558=new JTramp(_v4557, [runJTramp(_v4555)]);
var _v4559;
if(runJTramp(_v4558)) {
var _v4560="Function body must not be an improper list.";
var _v4561=_v4560;
var _v4562=lglobal["error"];
if (_v4562 === undefined) { throw new Error("No such global: " + "error"); }
var _v4563=_v4562;
_v4563=runJTramp(_v4563);
if (typeof _v4563 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4564=new JTramp(_v4563, [runJTramp(_v4561)]);
_v4559=_v4564;
} else {
var _v4565=lglobal["head"];
if (_v4565 === undefined) { throw new Error("No such global: " + "head"); }
var _v4566=_v4565;
_v4566=runJTramp(_v4566);
if (typeof _v4566 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4567=new JTramp(_v4566, [runJTramp(_v4539)]);
var _v4568=_v4567;
var _v4569=lglobal["cons?"];
if (_v4569 === undefined) { throw new Error("No such global: " + "cons?"); }
var _v4570=_v4569;
_v4570=runJTramp(_v4570);
if (typeof _v4570 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4571=new JTramp(_v4570, [runJTramp(_v4568)]);
var _v4572=_v4571;
var _v4573=function (_v4574) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v4576;
if(runJTramp(_v4574)) {
var _v4577="prim:def";
var _v4578=_v4577;
var _v4579=lglobal["head"];
if (_v4579 === undefined) { throw new Error("No such global: " + "head"); }
var _v4580=_v4579;
_v4580=runJTramp(_v4580);
if (typeof _v4580 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4581=new JTramp(_v4580, [runJTramp(_v4539)]);
var _v4582=_v4581;
var _v4583=lglobal["head"];
if (_v4583 === undefined) { throw new Error("No such global: " + "head"); }
var _v4584=_v4583;
_v4584=runJTramp(_v4584);
if (typeof _v4584 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4585=new JTramp(_v4584, [runJTramp(_v4582)]);
var _v4586=_v4585;
var _v4587=lglobal["="];
if (_v4587 === undefined) { throw new Error("No such global: " + "="); }
var _v4588=_v4587;
_v4588=runJTramp(_v4588);
if (typeof _v4588 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4589=new JTramp(_v4588, [runJTramp(_v4578),runJTramp(_v4586)]);
_v4576=_v4589;
} else {
_v4576=_v4574;
}
return _v4576;
};
var _v4590=_v4573;
_v4590=runJTramp(_v4590);
if (typeof _v4590 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4591=new JTramp(_v4590, [runJTramp(_v4572)]);
var _v4592;
if(runJTramp(_v4591)) {
var _v4593=lglobal["tail"];
if (_v4593 === undefined) { throw new Error("No such global: " + "tail"); }
var _v4594=_v4593;
_v4594=runJTramp(_v4594);
if (typeof _v4594 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4595=new JTramp(_v4594, [runJTramp(_v4539)]);
var _v4596=_v4595;
var _v4597=lglobal["split-fun-body"];
if (_v4597 === undefined) { throw new Error("No such global: " + "split-fun-body"); }
var _v4598=_v4597;
_v4598=runJTramp(_v4598);
if (typeof _v4598 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4599=new JTramp(_v4598, [runJTramp(_v4596)]);
var _v4600=_v4599;
var _v4601=function (_v4602) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v4604=lglobal["head"];
if (_v4604 === undefined) { throw new Error("No such global: " + "head"); }
var _v4605=_v4604;
_v4605=runJTramp(_v4605);
if (typeof _v4605 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4606=new JTramp(_v4605, [runJTramp(_v4539)]);
var _v4607=_v4606;
var _v4608=lglobal["head"];
if (_v4608 === undefined) { throw new Error("No such global: " + "head"); }
var _v4609=_v4608;
_v4609=runJTramp(_v4609);
if (typeof _v4609 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4610=new JTramp(_v4609, [runJTramp(_v4602)]);
var _v4611=_v4610;
var _v4612=lglobal["cons"];
if (_v4612 === undefined) { throw new Error("No such global: " + "cons"); }
var _v4613=_v4612;
_v4613=runJTramp(_v4613);
if (typeof _v4613 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4614=new JTramp(_v4613, [runJTramp(_v4607),runJTramp(_v4611)]);
var _v4615=_v4614;
var _v4616=lglobal["tail"];
if (_v4616 === undefined) { throw new Error("No such global: " + "tail"); }
var _v4617=_v4616;
_v4617=runJTramp(_v4617);
if (typeof _v4617 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4618=new JTramp(_v4617, [runJTramp(_v4602)]);
var _v4619=_v4618;
var _v4620=lglobal["cons"];
if (_v4620 === undefined) { throw new Error("No such global: " + "cons"); }
var _v4621=_v4620;
_v4621=runJTramp(_v4621);
if (typeof _v4621 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4622=new JTramp(_v4621, [runJTramp(_v4615),runJTramp(_v4619)]);
return _v4622;
};
var _v4623=_v4601;
_v4623=runJTramp(_v4623);
if (typeof _v4623 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4624=new JTramp(_v4623, [runJTramp(_v4600)]);
_v4592=_v4624;
} else {
var _v4625=lglobal["otherwise"];
if (_v4625 === undefined) { throw new Error("No such global: " + "otherwise"); }
var _v4626;
if(runJTramp(_v4625)) {
var _v4627=new Nil();
var _v4628=_v4627;
var _v4629=lglobal["cons"];
if (_v4629 === undefined) { throw new Error("No such global: " + "cons"); }
var _v4630=_v4629;
_v4630=runJTramp(_v4630);
if (typeof _v4630 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4631=new JTramp(_v4630, [runJTramp(_v4628),runJTramp(_v4539)]);
_v4626=_v4631;
} else {
var _v4632=null;
_v4626=_v4632;
}
_v4592=_v4626;
}
_v4559=_v4592;
}
_v4544=_v4559;
}
return _v4544;
};
_v4537=_v4538;
lglobal["split-fun-body"]=runJTramp(_v4537);
})();
(function () {
var _v4633;
var _v4634=function (_v4635,_v4636,_v4637) {
if (arguments.length < 3) {
throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
throw new Error("Expecting at most 3 arguments.");
}
var _v4639=lglobal["head"];
if (_v4639 === undefined) { throw new Error("No such global: " + "head"); }
var _v4640=_v4639;
_v4640=runJTramp(_v4640);
if (typeof _v4640 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4641=new JTramp(_v4640, [runJTramp(_v4636)]);
var _v4642=_v4641;
var _v4643=lglobal["tail"];
if (_v4643 === undefined) { throw new Error("No such global: " + "tail"); }
var _v4644=_v4643;
_v4644=runJTramp(_v4644);
if (typeof _v4644 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4645=new JTramp(_v4644, [runJTramp(_v4636)]);
var _v4646=_v4645;
var _v4647=lglobal["gensym"];
if (_v4647 === undefined) { throw new Error("No such global: " + "gensym"); }
var _v4648=_v4647;
_v4648=runJTramp(_v4648);
if (typeof _v4648 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4649=new JTramp(_v4648, []);
var _v4650=_v4649;
var _v4651=function (_v4652,_v4653,_v4654) {
if (arguments.length < 3) {
throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
throw new Error("Expecting at most 3 arguments.");
}
var _v4656=function (_v4657) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v4659=lglobal["gensym"];
if (_v4659 === undefined) { throw new Error("No such global: " + "gensym"); }
var _v4660=_v4659;
_v4660=runJTramp(_v4660);
if (typeof _v4660 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4661=new JTramp(_v4660, []);
var _v4662=_v4661;
var _v4663=lglobal["cons"];
if (_v4663 === undefined) { throw new Error("No such global: " + "cons"); }
var _v4664=_v4663;
_v4664=runJTramp(_v4664);
if (typeof _v4664 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4665=new JTramp(_v4664, [runJTramp(_v4662),runJTramp(_v4657)]);
return _v4665;
};
var _v4666=_v4656;
var _v4667=lglobal["map"];
if (_v4667 === undefined) { throw new Error("No such global: " + "map"); }
var _v4668=_v4667;
_v4668=runJTramp(_v4668);
if (typeof _v4668 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4669=new JTramp(_v4668, [runJTramp(_v4666),runJTramp(_v4653)]);
var _v4670=_v4669;
var _v4671=function (_v4672) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v4674=lglobal["head"];
if (_v4674 === undefined) { throw new Error("No such global: " + "head"); }
var _v4675=_v4674;
var _v4676=lglobal["map"];
if (_v4676 === undefined) { throw new Error("No such global: " + "map"); }
var _v4677=_v4676;
_v4677=runJTramp(_v4677);
if (typeof _v4677 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4678=new JTramp(_v4677, [runJTramp(_v4675),runJTramp(_v4672)]);
var _v4679=_v4678;
var _v4680=lglobal["midir:funcall"];
if (_v4680 === undefined) { throw new Error("No such global: " + "midir:funcall"); }
var _v4681=_v4680;
_v4681=runJTramp(_v4681);
if (typeof _v4681 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4682=new JTramp(_v4681, [runJTramp(_v4654),runJTramp(_v4679),runJTramp(_v4637)]);
var _v4683=_v4682;
var _v4684=lglobal["midir:bind"];
if (_v4684 === undefined) { throw new Error("No such global: " + "midir:bind"); }
var _v4685=_v4684;
_v4685=runJTramp(_v4685);
if (typeof _v4685 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4686=new JTramp(_v4685, [runJTramp(_v4654),runJTramp(_v4683)]);
var _v4687=_v4686;
var _v4688=lglobal["compile-to-midir"];
if (_v4688 === undefined) { throw new Error("No such global: " + "compile-to-midir"); }
var _v4689=_v4688;
_v4689=runJTramp(_v4689);
if (typeof _v4689 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4690=new JTramp(_v4689, [runJTramp(_v4635),runJTramp(_v4652),runJTramp(_v4687)]);
var _v4691=_v4690;
var _v4692=function (_v4693,_v4694) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var _v4696=lglobal["tail"];
if (_v4696 === undefined) { throw new Error("No such global: " + "tail"); }
var _v4697=_v4696;
_v4697=runJTramp(_v4697);
if (typeof _v4697 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4698=new JTramp(_v4697, [runJTramp(_v4693)]);
var _v4699=_v4698;
var _v4700=lglobal["head"];
if (_v4700 === undefined) { throw new Error("No such global: " + "head"); }
var _v4701=_v4700;
_v4701=runJTramp(_v4701);
if (typeof _v4701 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4702=new JTramp(_v4701, [runJTramp(_v4693)]);
var _v4703=_v4702;
var _v4704=lglobal["midir:bind"];
if (_v4704 === undefined) { throw new Error("No such global: " + "midir:bind"); }
var _v4705=_v4704;
_v4705=runJTramp(_v4705);
if (typeof _v4705 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4706=new JTramp(_v4705, [runJTramp(_v4703),runJTramp(_v4694)]);
var _v4707=_v4706;
var _v4708=lglobal["compile-to-midir"];
if (_v4708 === undefined) { throw new Error("No such global: " + "compile-to-midir"); }
var _v4709=_v4708;
_v4709=runJTramp(_v4709);
if (typeof _v4709 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4710=new JTramp(_v4709, [runJTramp(_v4635),runJTramp(_v4699),runJTramp(_v4707)]);
return _v4710;
};
var _v4711=_v4692;
var _v4712=function (_v4713,_v4714) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var _v4716=lglobal["foldr"];
if (_v4716 === undefined) { throw new Error("No such global: " + "foldr"); }
var _v4717=_v4716;
_v4717=runJTramp(_v4717);
if (typeof _v4717 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4718=new JTramp(_v4717, [runJTramp(_v4714),runJTramp(_v4713),runJTramp(_v4672)]);
return _v4718;
};
var _v4719=_v4712;
_v4719=runJTramp(_v4719);
if (typeof _v4719 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4720=new JTramp(_v4719, [runJTramp(_v4691),runJTramp(_v4711)]);
return _v4720;
};
var _v4721=_v4671;
_v4721=runJTramp(_v4721);
if (typeof _v4721 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4722=new JTramp(_v4721, [runJTramp(_v4670)]);
return _v4722;
};
var _v4723=_v4651;
_v4723=runJTramp(_v4723);
if (typeof _v4723 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4724=new JTramp(_v4723, [runJTramp(_v4642),runJTramp(_v4646),runJTramp(_v4650)]);
return _v4724;
};
_v4633=_v4634;
lglobal["compile-application-to-midir"]=runJTramp(_v4633);
})();
(function () {
var _v4725;
var _v4726=function (_v4727) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v4729=lglobal["null"];
if (_v4729 === undefined) { throw new Error("No such global: " + "null"); }
var _v4730=_v4729;
var _v4731=lglobal["make-env"];
if (_v4731 === undefined) { throw new Error("No such global: " + "make-env"); }
var _v4732=_v4731;
_v4732=runJTramp(_v4732);
if (typeof _v4732 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4733=new JTramp(_v4732, [runJTramp(_v4730)]);
var _v4734=_v4733;
var _v4735=lglobal["copy-propagate-midir"];
if (_v4735 === undefined) { throw new Error("No such global: " + "copy-propagate-midir"); }
var _v4736=_v4735;
_v4736=runJTramp(_v4736);
if (typeof _v4736 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4737=new JTramp(_v4736, [runJTramp(_v4727),runJTramp(_v4734)]);
return _v4737;
};
_v4725=_v4726;
lglobal["run-copy-propagate-midir"]=runJTramp(_v4725);
})();
(function () {
var _v4738;
var _v4739=function (_v4740,_v4741) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var _v4743;
var _v4744;
var _v4745=lglobal["copy-propagate-midir"];
if (_v4745 === undefined) { throw new Error("No such global: " + "copy-propagate-midir"); }
var _v4746=_v4743=runJTramp(_v4745);
var _v4747=function (_v4748) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v4750="has?";
var _v4751=_v4750;
_v4741=runJTramp(_v4741);
if (typeof _v4741 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4752=new JTramp(_v4741, [runJTramp(_v4751),runJTramp(_v4748)]);
var _v4753;
if(runJTramp(_v4752)) {
var _v4754="lookup";
var _v4755=_v4754;
_v4741=runJTramp(_v4741);
if (typeof _v4741 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4756=new JTramp(_v4741, [runJTramp(_v4755),runJTramp(_v4748)]);
_v4753=_v4756;
} else {
_v4753=_v4748;
}
return _v4753;
};
var _v4757=_v4744=runJTramp(_v4747);
var _v4758=function (_v4759) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v4761=lglobal["midir:lit?"];
if (_v4761 === undefined) { throw new Error("No such global: " + "midir:lit?"); }
var _v4762=_v4761;
_v4762=runJTramp(_v4762);
if (typeof _v4762 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4763=new JTramp(_v4762, [runJTramp(_v4759)]);
var _v4764;
if(runJTramp(_v4763)) {
var _v4765=function (_v4766,_v4767) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
_v4743=runJTramp(_v4743);
if (typeof _v4743 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4769=new JTramp(_v4743, [runJTramp(_v4767),runJTramp(_v4741)]);
var _v4770=_v4769;
var _v4771=lglobal["midir:lit"];
if (_v4771 === undefined) { throw new Error("No such global: " + "midir:lit"); }
var _v4772=_v4771;
_v4772=runJTramp(_v4772);
if (typeof _v4772 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4773=new JTramp(_v4772, [runJTramp(_v4766),runJTramp(_v4770)]);
return _v4773;
};
var _v4774=_v4765;
var _v4775=lglobal["tail"];
if (_v4775 === undefined) { throw new Error("No such global: " + "tail"); }
var _v4776=_v4775;
_v4776=runJTramp(_v4776);
if (typeof _v4776 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4777=new JTramp(_v4776, [runJTramp(_v4759)]);
var _v4778=_v4777;
var _v4779=lglobal["apply"];
if (_v4779 === undefined) { throw new Error("No such global: " + "apply"); }
var _v4780=_v4779;
_v4780=runJTramp(_v4780);
if (typeof _v4780 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4781=new JTramp(_v4780, [runJTramp(_v4774),runJTramp(_v4778)]);
_v4764=_v4781;
} else {
var _v4782=lglobal["midir:lookup?"];
if (_v4782 === undefined) { throw new Error("No such global: " + "midir:lookup?"); }
var _v4783=_v4782;
_v4783=runJTramp(_v4783);
if (typeof _v4783 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4784=new JTramp(_v4783, [runJTramp(_v4759)]);
var _v4785;
if(runJTramp(_v4784)) {
var _v4786=function (_v4787,_v4788) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var _v4790=function (_v4791) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v4793=lglobal["midir:bind?"];
if (_v4793 === undefined) { throw new Error("No such global: " + "midir:bind?"); }
var _v4794=_v4793;
_v4794=runJTramp(_v4794);
if (typeof _v4794 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4795=new JTramp(_v4794, [runJTramp(_v4791)]);
var _v4796;
if(runJTramp(_v4795)) {
var _v4797=function (_v4798,_v4799) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var _v4801="set!";
var _v4802=_v4801;
_v4741=runJTramp(_v4741);
if (typeof _v4741 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4803=new JTramp(_v4741, [runJTramp(_v4802),runJTramp(_v4798),runJTramp(_v4787)]);
_v4803=runJTramp(_v4803);
_v4743=runJTramp(_v4743);
if (typeof _v4743 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4804=new JTramp(_v4743, [runJTramp(_v4799),runJTramp(_v4741)]);
return _v4804;
};
var _v4805=_v4797;
var _v4806=lglobal["tail"];
if (_v4806 === undefined) { throw new Error("No such global: " + "tail"); }
var _v4807=_v4806;
_v4807=runJTramp(_v4807);
if (typeof _v4807 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4808=new JTramp(_v4807, [runJTramp(_v4791)]);
var _v4809=_v4808;
var _v4810=lglobal["apply"];
if (_v4810 === undefined) { throw new Error("No such global: " + "apply"); }
var _v4811=_v4810;
_v4811=runJTramp(_v4811);
if (typeof _v4811 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4812=new JTramp(_v4811, [runJTramp(_v4805),runJTramp(_v4809)]);
_v4796=_v4812;
} else {
_v4744=runJTramp(_v4744);
if (typeof _v4744 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4813=new JTramp(_v4744, [runJTramp(_v4787)]);
var _v4814=_v4813;
_v4743=runJTramp(_v4743);
if (typeof _v4743 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4815=new JTramp(_v4743, [runJTramp(_v4788),runJTramp(_v4741)]);
var _v4816=_v4815;
var _v4817=lglobal["midir:lookup"];
if (_v4817 === undefined) { throw new Error("No such global: " + "midir:lookup"); }
var _v4818=_v4817;
_v4818=runJTramp(_v4818);
if (typeof _v4818 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4819=new JTramp(_v4818, [runJTramp(_v4814),runJTramp(_v4816)]);
_v4796=_v4819;
}
return _v4796;
};
var _v4820=_v4790;
_v4820=runJTramp(_v4820);
if (typeof _v4820 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4821=new JTramp(_v4820, [runJTramp(_v4788)]);
return _v4821;
};
var _v4822=_v4786;
var _v4823=lglobal["tail"];
if (_v4823 === undefined) { throw new Error("No such global: " + "tail"); }
var _v4824=_v4823;
_v4824=runJTramp(_v4824);
if (typeof _v4824 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4825=new JTramp(_v4824, [runJTramp(_v4759)]);
var _v4826=_v4825;
var _v4827=lglobal["apply"];
if (_v4827 === undefined) { throw new Error("No such global: " + "apply"); }
var _v4828=_v4827;
_v4828=runJTramp(_v4828);
if (typeof _v4828 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4829=new JTramp(_v4828, [runJTramp(_v4822),runJTramp(_v4826)]);
_v4785=_v4829;
} else {
var _v4830=lglobal["midir:glookup?"];
if (_v4830 === undefined) { throw new Error("No such global: " + "midir:glookup?"); }
var _v4831=_v4830;
_v4831=runJTramp(_v4831);
if (typeof _v4831 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4832=new JTramp(_v4831, [runJTramp(_v4759)]);
var _v4833;
if(runJTramp(_v4832)) {
var _v4834=function (_v4835,_v4836) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
_v4743=runJTramp(_v4743);
if (typeof _v4743 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4838=new JTramp(_v4743, [runJTramp(_v4836),runJTramp(_v4741)]);
var _v4839=_v4838;
var _v4840=lglobal["midir:glookup"];
if (_v4840 === undefined) { throw new Error("No such global: " + "midir:glookup"); }
var _v4841=_v4840;
_v4841=runJTramp(_v4841);
if (typeof _v4841 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4842=new JTramp(_v4841, [runJTramp(_v4835),runJTramp(_v4839)]);
return _v4842;
};
var _v4843=_v4834;
var _v4844=lglobal["tail"];
if (_v4844 === undefined) { throw new Error("No such global: " + "tail"); }
var _v4845=_v4844;
_v4845=runJTramp(_v4845);
if (typeof _v4845 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4846=new JTramp(_v4845, [runJTramp(_v4759)]);
var _v4847=_v4846;
var _v4848=lglobal["apply"];
if (_v4848 === undefined) { throw new Error("No such global: " + "apply"); }
var _v4849=_v4848;
_v4849=runJTramp(_v4849);
if (typeof _v4849 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4850=new JTramp(_v4849, [runJTramp(_v4843),runJTramp(_v4847)]);
_v4833=_v4850;
} else {
var _v4851=lglobal["midir:enter?"];
if (_v4851 === undefined) { throw new Error("No such global: " + "midir:enter?"); }
var _v4852=_v4851;
_v4852=runJTramp(_v4852);
if (typeof _v4852 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4853=new JTramp(_v4852, [runJTramp(_v4759)]);
var _v4854;
if(runJTramp(_v4853)) {
var _v4855=function (_v4856,_v4857,_v4858,_v4859) {
if (arguments.length < 4) {
throw new Error("Expecting at least 4 arguments.");
}
if (arguments.length > 4) {
throw new Error("Expecting at most 4 arguments.");
}
var _v4861=lglobal["make-env"];
if (_v4861 === undefined) { throw new Error("No such global: " + "make-env"); }
var _v4862=_v4861;
_v4862=runJTramp(_v4862);
if (typeof _v4862 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4863=new JTramp(_v4862, [runJTramp(_v4741)]);
var _v4864=_v4863;
_v4743=runJTramp(_v4743);
if (typeof _v4743 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4865=new JTramp(_v4743, [runJTramp(_v4859),runJTramp(_v4864)]);
var _v4866=_v4865;
var _v4867=lglobal["midir:enter"];
if (_v4867 === undefined) { throw new Error("No such global: " + "midir:enter"); }
var _v4868=_v4867;
_v4868=runJTramp(_v4868);
if (typeof _v4868 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4869=new JTramp(_v4868, [runJTramp(_v4856),runJTramp(_v4857),runJTramp(_v4858),runJTramp(_v4866)]);
return _v4869;
};
var _v4870=_v4855;
var _v4871=lglobal["tail"];
if (_v4871 === undefined) { throw new Error("No such global: " + "tail"); }
var _v4872=_v4871;
_v4872=runJTramp(_v4872);
if (typeof _v4872 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4873=new JTramp(_v4872, [runJTramp(_v4759)]);
var _v4874=_v4873;
var _v4875=lglobal["apply"];
if (_v4875 === undefined) { throw new Error("No such global: " + "apply"); }
var _v4876=_v4875;
_v4876=runJTramp(_v4876);
if (typeof _v4876 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4877=new JTramp(_v4876, [runJTramp(_v4870),runJTramp(_v4874)]);
_v4854=_v4877;
} else {
var _v4878=lglobal["midir:return?"];
if (_v4878 === undefined) { throw new Error("No such global: " + "midir:return?"); }
var _v4879=_v4878;
_v4879=runJTramp(_v4879);
if (typeof _v4879 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4880=new JTramp(_v4879, [runJTramp(_v4759)]);
var _v4881;
if(runJTramp(_v4880)) {
var _v4882=function () {
if (arguments.length > 0) {
throw new Error("Expecting at most 0 arguments.");
}
var _v4884=lglobal["midir:return"];
if (_v4884 === undefined) { throw new Error("No such global: " + "midir:return"); }
var _v4885=_v4884;
_v4885=runJTramp(_v4885);
if (typeof _v4885 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4886=new JTramp(_v4885, []);
return _v4886;
};
var _v4887=_v4882;
var _v4888=lglobal["tail"];
if (_v4888 === undefined) { throw new Error("No such global: " + "tail"); }
var _v4889=_v4888;
_v4889=runJTramp(_v4889);
if (typeof _v4889 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4890=new JTramp(_v4889, [runJTramp(_v4759)]);
var _v4891=_v4890;
var _v4892=lglobal["apply"];
if (_v4892 === undefined) { throw new Error("No such global: " + "apply"); }
var _v4893=_v4892;
_v4893=runJTramp(_v4893);
if (typeof _v4893 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4894=new JTramp(_v4893, [runJTramp(_v4887),runJTramp(_v4891)]);
_v4881=_v4894;
} else {
var _v4895=lglobal["midir:bind?"];
if (_v4895 === undefined) { throw new Error("No such global: " + "midir:bind?"); }
var _v4896=_v4895;
_v4896=runJTramp(_v4896);
if (typeof _v4896 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4897=new JTramp(_v4896, [runJTramp(_v4759)]);
var _v4898;
if(runJTramp(_v4897)) {
var _v4899=function (_v4900,_v4901) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
_v4743=runJTramp(_v4743);
if (typeof _v4743 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4903=new JTramp(_v4743, [runJTramp(_v4901),runJTramp(_v4741)]);
var _v4904=_v4903;
var _v4905=lglobal["midir:bind"];
if (_v4905 === undefined) { throw new Error("No such global: " + "midir:bind"); }
var _v4906=_v4905;
_v4906=runJTramp(_v4906);
if (typeof _v4906 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4907=new JTramp(_v4906, [runJTramp(_v4900),runJTramp(_v4904)]);
return _v4907;
};
var _v4908=_v4899;
var _v4909=lglobal["tail"];
if (_v4909 === undefined) { throw new Error("No such global: " + "tail"); }
var _v4910=_v4909;
_v4910=runJTramp(_v4910);
if (typeof _v4910 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4911=new JTramp(_v4910, [runJTramp(_v4759)]);
var _v4912=_v4911;
var _v4913=lglobal["apply"];
if (_v4913 === undefined) { throw new Error("No such global: " + "apply"); }
var _v4914=_v4913;
_v4914=runJTramp(_v4914);
if (typeof _v4914 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4915=new JTramp(_v4914, [runJTramp(_v4908),runJTramp(_v4912)]);
_v4898=_v4915;
} else {
var _v4916=lglobal["midir:bind-drop?"];
if (_v4916 === undefined) { throw new Error("No such global: " + "midir:bind-drop?"); }
var _v4917=_v4916;
_v4917=runJTramp(_v4917);
if (typeof _v4917 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4918=new JTramp(_v4917, [runJTramp(_v4759)]);
var _v4919;
if(runJTramp(_v4918)) {
var _v4920=function (_v4921) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
_v4743=runJTramp(_v4743);
if (typeof _v4743 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4923=new JTramp(_v4743, [runJTramp(_v4921),runJTramp(_v4741)]);
var _v4924=_v4923;
var _v4925=lglobal["midir:bind-drop"];
if (_v4925 === undefined) { throw new Error("No such global: " + "midir:bind-drop"); }
var _v4926=_v4925;
_v4926=runJTramp(_v4926);
if (typeof _v4926 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4927=new JTramp(_v4926, [runJTramp(_v4924)]);
return _v4927;
};
var _v4928=_v4920;
var _v4929=lglobal["tail"];
if (_v4929 === undefined) { throw new Error("No such global: " + "tail"); }
var _v4930=_v4929;
_v4930=runJTramp(_v4930);
if (typeof _v4930 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4931=new JTramp(_v4930, [runJTramp(_v4759)]);
var _v4932=_v4931;
var _v4933=lglobal["apply"];
if (_v4933 === undefined) { throw new Error("No such global: " + "apply"); }
var _v4934=_v4933;
_v4934=runJTramp(_v4934);
if (typeof _v4934 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4935=new JTramp(_v4934, [runJTramp(_v4928),runJTramp(_v4932)]);
_v4919=_v4935;
} else {
var _v4936=lglobal["midir:if?"];
if (_v4936 === undefined) { throw new Error("No such global: " + "midir:if?"); }
var _v4937=_v4936;
_v4937=runJTramp(_v4937);
if (typeof _v4937 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4938=new JTramp(_v4937, [runJTramp(_v4759)]);
var _v4939;
if(runJTramp(_v4938)) {
var _v4940=function (_v4941,_v4942,_v4943) {
if (arguments.length < 3) {
throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
throw new Error("Expecting at most 3 arguments.");
}
_v4743=runJTramp(_v4743);
if (typeof _v4743 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4945=new JTramp(_v4743, [runJTramp(_v4941),runJTramp(_v4741)]);
var _v4946=_v4945;
_v4743=runJTramp(_v4743);
if (typeof _v4743 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4947=new JTramp(_v4743, [runJTramp(_v4942),runJTramp(_v4741)]);
var _v4948=_v4947;
_v4743=runJTramp(_v4743);
if (typeof _v4743 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4949=new JTramp(_v4743, [runJTramp(_v4943),runJTramp(_v4741)]);
var _v4950=_v4949;
var _v4951=lglobal["midir:if"];
if (_v4951 === undefined) { throw new Error("No such global: " + "midir:if"); }
var _v4952=_v4951;
_v4952=runJTramp(_v4952);
if (typeof _v4952 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4953=new JTramp(_v4952, [runJTramp(_v4946),runJTramp(_v4948),runJTramp(_v4950)]);
return _v4953;
};
var _v4954=_v4940;
var _v4955=lglobal["tail"];
if (_v4955 === undefined) { throw new Error("No such global: " + "tail"); }
var _v4956=_v4955;
_v4956=runJTramp(_v4956);
if (typeof _v4956 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4957=new JTramp(_v4956, [runJTramp(_v4759)]);
var _v4958=_v4957;
var _v4959=lglobal["apply"];
if (_v4959 === undefined) { throw new Error("No such global: " + "apply"); }
var _v4960=_v4959;
_v4960=runJTramp(_v4960);
if (typeof _v4960 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4961=new JTramp(_v4960, [runJTramp(_v4954),runJTramp(_v4958)]);
_v4939=_v4961;
} else {
var _v4962=lglobal["midir:leave?"];
if (_v4962 === undefined) { throw new Error("No such global: " + "midir:leave?"); }
var _v4963=_v4962;
_v4963=runJTramp(_v4963);
if (typeof _v4963 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4964=new JTramp(_v4963, [runJTramp(_v4759)]);
var _v4965;
if(runJTramp(_v4964)) {
var _v4966=function () {
if (arguments.length > 0) {
throw new Error("Expecting at most 0 arguments.");
}
var _v4968=lglobal["midir:leave"];
if (_v4968 === undefined) { throw new Error("No such global: " + "midir:leave"); }
var _v4969=_v4968;
_v4969=runJTramp(_v4969);
if (typeof _v4969 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4970=new JTramp(_v4969, []);
return _v4970;
};
var _v4971=_v4966;
var _v4972=lglobal["tail"];
if (_v4972 === undefined) { throw new Error("No such global: " + "tail"); }
var _v4973=_v4972;
_v4973=runJTramp(_v4973);
if (typeof _v4973 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4974=new JTramp(_v4973, [runJTramp(_v4759)]);
var _v4975=_v4974;
var _v4976=lglobal["apply"];
if (_v4976 === undefined) { throw new Error("No such global: " + "apply"); }
var _v4977=_v4976;
_v4977=runJTramp(_v4977);
if (typeof _v4977 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4978=new JTramp(_v4977, [runJTramp(_v4971),runJTramp(_v4975)]);
_v4965=_v4978;
} else {
var _v4979=lglobal["midir:funcall?"];
if (_v4979 === undefined) { throw new Error("No such global: " + "midir:funcall?"); }
var _v4980=_v4979;
_v4980=runJTramp(_v4980);
if (typeof _v4980 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4981=new JTramp(_v4980, [runJTramp(_v4759)]);
var _v4982;
if(runJTramp(_v4981)) {
var _v4983=function (_v4984,_v4985,_v4986) {
if (arguments.length < 3) {
throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
throw new Error("Expecting at most 3 arguments.");
}
_v4744=runJTramp(_v4744);
if (typeof _v4744 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4988=new JTramp(_v4744, [runJTramp(_v4984)]);
var _v4989=_v4988;
var _v4990=lglobal["map"];
if (_v4990 === undefined) { throw new Error("No such global: " + "map"); }
var _v4991=_v4990;
_v4991=runJTramp(_v4991);
if (typeof _v4991 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4992=new JTramp(_v4991, [runJTramp(_v4744),runJTramp(_v4985)]);
var _v4993=_v4992;
_v4743=runJTramp(_v4743);
if (typeof _v4743 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4994=new JTramp(_v4743, [runJTramp(_v4986),runJTramp(_v4741)]);
var _v4995=_v4994;
var _v4996=lglobal["midir:funcall"];
if (_v4996 === undefined) { throw new Error("No such global: " + "midir:funcall"); }
var _v4997=_v4996;
_v4997=runJTramp(_v4997);
if (typeof _v4997 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v4998=new JTramp(_v4997, [runJTramp(_v4989),runJTramp(_v4993),runJTramp(_v4995)]);
return _v4998;
};
var _v4999=_v4983;
var _v5000=lglobal["tail"];
if (_v5000 === undefined) { throw new Error("No such global: " + "tail"); }
var _v5001=_v5000;
_v5001=runJTramp(_v5001);
if (typeof _v5001 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5002=new JTramp(_v5001, [runJTramp(_v4759)]);
var _v5003=_v5002;
var _v5004=lglobal["apply"];
if (_v5004 === undefined) { throw new Error("No such global: " + "apply"); }
var _v5005=_v5004;
_v5005=runJTramp(_v5005);
if (typeof _v5005 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5006=new JTramp(_v5005, [runJTramp(_v4999),runJTramp(_v5003)]);
_v4982=_v5006;
} else {
var _v5007=lglobal["midir:closure?"];
if (_v5007 === undefined) { throw new Error("No such global: " + "midir:closure?"); }
var _v5008=_v5007;
_v5008=runJTramp(_v5008);
if (typeof _v5008 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5009=new JTramp(_v5008, [runJTramp(_v4759)]);
var _v5010;
if(runJTramp(_v5009)) {
var _v5011=function (_v5012,_v5013) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
_v4743=runJTramp(_v4743);
if (typeof _v4743 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5015=new JTramp(_v4743, [runJTramp(_v5012),runJTramp(_v4741)]);
var _v5016=_v5015;
_v4743=runJTramp(_v4743);
if (typeof _v4743 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5017=new JTramp(_v4743, [runJTramp(_v5013),runJTramp(_v4741)]);
var _v5018=_v5017;
var _v5019=lglobal["midir:closure"];
if (_v5019 === undefined) { throw new Error("No such global: " + "midir:closure"); }
var _v5020=_v5019;
_v5020=runJTramp(_v5020);
if (typeof _v5020 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5021=new JTramp(_v5020, [runJTramp(_v5016),runJTramp(_v5018)]);
return _v5021;
};
var _v5022=_v5011;
var _v5023=lglobal["tail"];
if (_v5023 === undefined) { throw new Error("No such global: " + "tail"); }
var _v5024=_v5023;
_v5024=runJTramp(_v5024);
if (typeof _v5024 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5025=new JTramp(_v5024, [runJTramp(_v4759)]);
var _v5026=_v5025;
var _v5027=lglobal["apply"];
if (_v5027 === undefined) { throw new Error("No such global: " + "apply"); }
var _v5028=_v5027;
_v5028=runJTramp(_v5028);
if (typeof _v5028 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5029=new JTramp(_v5028, [runJTramp(_v5022),runJTramp(_v5026)]);
_v5010=_v5029;
} else {
var _v5030=lglobal["midir:set!?"];
if (_v5030 === undefined) { throw new Error("No such global: " + "midir:set!?"); }
var _v5031=_v5030;
_v5031=runJTramp(_v5031);
if (typeof _v5031 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5032=new JTramp(_v5031, [runJTramp(_v4759)]);
var _v5033;
if(runJTramp(_v5032)) {
var _v5034=function (_v5035,_v5036) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
_v4744=runJTramp(_v4744);
if (typeof _v4744 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5038=new JTramp(_v4744, [runJTramp(_v5035)]);
var _v5039=_v5038;
_v4743=runJTramp(_v4743);
if (typeof _v4743 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5040=new JTramp(_v4743, [runJTramp(_v5036),runJTramp(_v4741)]);
var _v5041=_v5040;
var _v5042=lglobal["midir:set!"];
if (_v5042 === undefined) { throw new Error("No such global: " + "midir:set!"); }
var _v5043=_v5042;
_v5043=runJTramp(_v5043);
if (typeof _v5043 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5044=new JTramp(_v5043, [runJTramp(_v5039),runJTramp(_v5041)]);
return _v5044;
};
var _v5045=_v5034;
var _v5046=lglobal["tail"];
if (_v5046 === undefined) { throw new Error("No such global: " + "tail"); }
var _v5047=_v5046;
_v5047=runJTramp(_v5047);
if (typeof _v5047 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5048=new JTramp(_v5047, [runJTramp(_v4759)]);
var _v5049=_v5048;
var _v5050=lglobal["apply"];
if (_v5050 === undefined) { throw new Error("No such global: " + "apply"); }
var _v5051=_v5050;
_v5051=runJTramp(_v5051);
if (typeof _v5051 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5052=new JTramp(_v5051, [runJTramp(_v5045),runJTramp(_v5049)]);
_v5033=_v5052;
} else {
var _v5053=lglobal["midir:gset!?"];
if (_v5053 === undefined) { throw new Error("No such global: " + "midir:gset!?"); }
var _v5054=_v5053;
_v5054=runJTramp(_v5054);
if (typeof _v5054 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5055=new JTramp(_v5054, [runJTramp(_v4759)]);
var _v5056;
if(runJTramp(_v5055)) {
var _v5057=function (_v5058,_v5059) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
_v4743=runJTramp(_v4743);
if (typeof _v4743 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5061=new JTramp(_v4743, [runJTramp(_v5059),runJTramp(_v4741)]);
var _v5062=_v5061;
var _v5063=lglobal["midir:gset!"];
if (_v5063 === undefined) { throw new Error("No such global: " + "midir:gset!"); }
var _v5064=_v5063;
_v5064=runJTramp(_v5064);
if (typeof _v5064 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5065=new JTramp(_v5064, [runJTramp(_v5058),runJTramp(_v5062)]);
return _v5065;
};
var _v5066=_v5057;
var _v5067=lglobal["tail"];
if (_v5067 === undefined) { throw new Error("No such global: " + "tail"); }
var _v5068=_v5067;
_v5068=runJTramp(_v5068);
if (typeof _v5068 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5069=new JTramp(_v5068, [runJTramp(_v4759)]);
var _v5070=_v5069;
var _v5071=lglobal["apply"];
if (_v5071 === undefined) { throw new Error("No such global: " + "apply"); }
var _v5072=_v5071;
_v5072=runJTramp(_v5072);
if (typeof _v5072 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5073=new JTramp(_v5072, [runJTramp(_v5066),runJTramp(_v5070)]);
_v5056=_v5073;
} else {
var _v5074=lglobal["midir:ffi?"];
if (_v5074 === undefined) { throw new Error("No such global: " + "midir:ffi?"); }
var _v5075=_v5074;
_v5075=runJTramp(_v5075);
if (typeof _v5075 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5076=new JTramp(_v5075, [runJTramp(_v4759)]);
var _v5077;
if(runJTramp(_v5076)) {
var _v5078=function (_v5079,_v5080,_v5081) {
if (arguments.length < 3) {
throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
throw new Error("Expecting at most 3 arguments.");
}
_v4743=runJTramp(_v4743);
if (typeof _v4743 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5083=new JTramp(_v4743, [runJTramp(_v5081),runJTramp(_v4741)]);
var _v5084=_v5083;
var _v5085=lglobal["midir:ffi"];
if (_v5085 === undefined) { throw new Error("No such global: " + "midir:ffi"); }
var _v5086=_v5085;
_v5086=runJTramp(_v5086);
if (typeof _v5086 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5087=new JTramp(_v5086, [runJTramp(_v5079),runJTramp(_v5080),runJTramp(_v5084)]);
return _v5087;
};
var _v5088=_v5078;
var _v5089=lglobal["tail"];
if (_v5089 === undefined) { throw new Error("No such global: " + "tail"); }
var _v5090=_v5089;
_v5090=runJTramp(_v5090);
if (typeof _v5090 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5091=new JTramp(_v5090, [runJTramp(_v4759)]);
var _v5092=_v5091;
var _v5093=lglobal["apply"];
if (_v5093 === undefined) { throw new Error("No such global: " + "apply"); }
var _v5094=_v5093;
_v5094=runJTramp(_v5094);
if (typeof _v5094 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5095=new JTramp(_v5094, [runJTramp(_v5088),runJTramp(_v5092)]);
_v5077=_v5095;
} else {
var _v5096="Unknown midir: ";
var _v5097=_v5096;
var _v5098=lglobal["++"];
if (_v5098 === undefined) { throw new Error("No such global: " + "++"); }
var _v5099=_v5098;
_v5099=runJTramp(_v5099);
if (typeof _v5099 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5100=new JTramp(_v5099, [runJTramp(_v5097),runJTramp(_v4740)]);
var _v5101=_v5100;
var _v5102=lglobal["error"];
if (_v5102 === undefined) { throw new Error("No such global: " + "error"); }
var _v5103=_v5102;
_v5103=runJTramp(_v5103);
if (typeof _v5103 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5104=new JTramp(_v5103, [runJTramp(_v5101)]);
_v5077=_v5104;
}
_v5056=_v5077;
}
_v5033=_v5056;
}
_v5010=_v5033;
}
_v4982=_v5010;
}
_v4965=_v4982;
}
_v4939=_v4965;
}
_v4919=_v4939;
}
_v4898=_v4919;
}
_v4881=_v4898;
}
_v4854=_v4881;
}
_v4833=_v4854;
}
_v4785=_v4833;
}
_v4764=_v4785;
}
return _v4764;
};
var _v5105=_v4758;
_v5105=runJTramp(_v5105);
if (typeof _v5105 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5106=new JTramp(_v5105, [runJTramp(_v4740)]);
return _v5106;
};
_v4738=_v4739;
lglobal["copy-propagate-midir"]=runJTramp(_v4738);
})();
(function () {
var _v5107;
var _v5108=function (_v5109,_v5110) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var _v5112;
var _v5113;
var _v5114=lglobal["null"];
if (_v5114 === undefined) { throw new Error("No such global: " + "null"); }
var _v5115=_v5112=runJTramp(_v5114);
var _v5116=function (_v5117) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v5119=lglobal["read:has-another?"];
if (_v5119 === undefined) { throw new Error("No such global: " + "read:has-another?"); }
var _v5120=_v5119;
_v5120=runJTramp(_v5120);
if (typeof _v5120 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5121=new JTramp(_v5120, [runJTramp(_v5117)]);
var _v5122;
if(runJTramp(_v5121)) {
var _v5123=lglobal["read:sexp"];
if (_v5123 === undefined) { throw new Error("No such global: " + "read:sexp"); }
var _v5124=_v5123;
_v5124=runJTramp(_v5124);
if (typeof _v5124 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5125=new JTramp(_v5124, [runJTramp(_v5117)]);
var _v5126=_v5125;
var _v5127=function (_v5128) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v5130="Compiling ";
var _v5131=_v5130;
var _v5132=lglobal["repr"];
if (_v5132 === undefined) { throw new Error("No such global: " + "repr"); }
var _v5133=_v5132;
_v5133=runJTramp(_v5133);
if (typeof _v5133 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5134=new JTramp(_v5133, [runJTramp(_v5128)]);
var _v5135=_v5134;
var _v5136="\n";
var _v5137=_v5136;
var _v5138=lglobal["print"];
if (_v5138 === undefined) { throw new Error("No such global: " + "print"); }
var _v5139=_v5138;
_v5139=runJTramp(_v5139);
if (typeof _v5139 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5140=new JTramp(_v5139, [runJTramp(_v5131),runJTramp(_v5135),runJTramp(_v5137)]);
_v5140=runJTramp(_v5140);
var _v5141=lglobal["compile-toplevel-to-midir"];
if (_v5141 === undefined) { throw new Error("No such global: " + "compile-toplevel-to-midir"); }
var _v5142=_v5141;
_v5142=runJTramp(_v5142);
if (typeof _v5142 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5143=new JTramp(_v5142, [runJTramp(_v5128)]);
var _v5144=_v5112=runJTramp(_v5143);
_v5144=runJTramp(_v5144);
_v5113=runJTramp(_v5113);
if (typeof _v5113 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5145=new JTramp(_v5113, [runJTramp(_v5117)]);
return _v5145;
};
var _v5146=_v5127;
_v5146=runJTramp(_v5146);
if (typeof _v5146 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5147=new JTramp(_v5146, [runJTramp(_v5126)]);
_v5122=_v5147;
} else {
var _v5148=null;
_v5122=_v5148;
}
return _v5122;
};
var _v5149=_v5113=runJTramp(_v5116);
var _v5150=lglobal["stream:make"];
if (_v5150 === undefined) { throw new Error("No such global: " + "stream:make"); }
var _v5151=_v5150;
_v5151=runJTramp(_v5151);
if (typeof _v5151 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5152=new JTramp(_v5151, [runJTramp(_v5109),runJTramp(_v5110)]);
var _v5153=_v5152;
var _v5154=function (_v5155) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
_v5113=runJTramp(_v5113);
if (typeof _v5113 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5157=new JTramp(_v5113, [runJTramp(_v5155)]);
_v5157=runJTramp(_v5157);
return _v5112;
};
var _v5158=_v5154;
_v5158=runJTramp(_v5158);
if (typeof _v5158 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5159=new JTramp(_v5158, [runJTramp(_v5153)]);
return _v5159;
};
_v5107=_v5108;
lglobal["compile-file"]=runJTramp(_v5107);
})();
(function () {
var _v5160;
var _v5161=function () {
if (arguments.length > 0) {
throw new Error("Expecting at most 0 arguments.");
}
var _v5163=lglobal["reset-midir-compile"];
if (_v5163 === undefined) { throw new Error("No such global: " + "reset-midir-compile"); }
var _v5164=_v5163;
_v5164=runJTramp(_v5164);
if (typeof _v5164 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5165=new JTramp(_v5164, []);
_v5165=runJTramp(_v5165);
var _v5166=lglobal["compile-too"];
if (_v5166 === undefined) { throw new Error("No such global: " + "compile-too"); }
var _v5167=_v5166;
_v5167=runJTramp(_v5167);
if (typeof _v5167 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5168=new JTramp(_v5167, []);
return _v5168;
};
_v5160=_v5161;
lglobal["compile"]=runJTramp(_v5160);
})();
(function () {
var _v5169;
var _v5170=function () {
if (arguments.length > 0) {
throw new Error("Expecting at most 0 arguments.");
}
var _v5172="*file*";
var _v5173=_v5172;
var _v5174=lglobal["jsui:input-file"];
if (_v5174 === undefined) { throw new Error("No such global: " + "jsui:input-file"); }
var _v5175=_v5174;
var _v5176=lglobal["compile-file"];
if (_v5176 === undefined) { throw new Error("No such global: " + "compile-file"); }
var _v5177=_v5176;
_v5177=runJTramp(_v5177);
if (typeof _v5177 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5178=new JTramp(_v5177, [runJTramp(_v5173),runJTramp(_v5175)]);
_v5178=runJTramp(_v5178);
var _v5179="(function () { // Compiled\n";
var _v5180=_v5179;
var _v5181=lglobal["++"];
if (_v5181 === undefined) { throw new Error("No such global: " + "++"); }
var _v5182=_v5181;
var _v5183=lglobal["midir-toplevel-defs"];
if (_v5183 === undefined) { throw new Error("No such global: " + "midir-toplevel-defs"); }
var _v5184=_v5183;
var _v5185=lglobal["reverse"];
if (_v5185 === undefined) { throw new Error("No such global: " + "reverse"); }
var _v5186=_v5185;
_v5186=runJTramp(_v5186);
if (typeof _v5186 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5187=new JTramp(_v5186, [runJTramp(_v5184)]);
var _v5188=_v5187;
var _v5189=lglobal["apply"];
if (_v5189 === undefined) { throw new Error("No such global: " + "apply"); }
var _v5190=_v5189;
_v5190=runJTramp(_v5190);
if (typeof _v5190 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5191=new JTramp(_v5190, [runJTramp(_v5182),runJTramp(_v5188)]);
var _v5192=_v5191;
var _v5193="})();\n";
var _v5194=_v5193;
var _v5195=lglobal["++"];
if (_v5195 === undefined) { throw new Error("No such global: " + "++"); }
var _v5196=_v5195;
_v5196=runJTramp(_v5196);
if (typeof _v5196 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5197=new JTramp(_v5196, [runJTramp(_v5180),runJTramp(_v5192),runJTramp(_v5194)]);
var _v5198=_v5197;
var _v5199="(function (v) {$('#compiled').val(v); return null;})";
var _v5200=_v5199;
var _v5201=lglobal["js:eval"];
if (_v5201 === undefined) { throw new Error("No such global: " + "js:eval"); }
var _v5202=_v5201;
_v5202=runJTramp(_v5202);
if (typeof _v5202 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5203=new JTramp(_v5202, [runJTramp(_v5200)]);
var _v5204=_v5203;
_v5204=runJTramp(_v5204);
if (typeof _v5204 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5205=new JTramp(_v5204, [runJTramp(_v5198)]);
return _v5205;
};
_v5169=_v5170;
lglobal["compile-too"]=runJTramp(_v5169);
})();
(function () {
var _v5206;
var _v5207=function (_v5208) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v5210="*eval*";
var _v5211=_v5210;
var _v5212=lglobal["compile-file"];
if (_v5212 === undefined) { throw new Error("No such global: " + "compile-file"); }
var _v5213=_v5212;
_v5213=runJTramp(_v5213);
if (typeof _v5213 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5214=new JTramp(_v5213, [runJTramp(_v5211),runJTramp(_v5208)]);
return _v5214;
};
_v5206=_v5207;
lglobal["midir-eval-all"]=runJTramp(_v5206);
})();
(function () {
var _v5215;
var _v5216=function (_v5217) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v5219;
var _v5220;
var _v5221=lglobal["null"];
if (_v5221 === undefined) { throw new Error("No such global: " + "null"); }
var _v5222=_v5219=runJTramp(_v5221);
var _v5223=function (_v5224) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v5226=lglobal["read:has-another?"];
if (_v5226 === undefined) { throw new Error("No such global: " + "read:has-another?"); }
var _v5227=_v5226;
_v5227=runJTramp(_v5227);
if (typeof _v5227 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5228=new JTramp(_v5227, [runJTramp(_v5224)]);
var _v5229;
if(runJTramp(_v5228)) {
var _v5230=lglobal["read:sexp"];
if (_v5230 === undefined) { throw new Error("No such global: " + "read:sexp"); }
var _v5231=_v5230;
_v5231=runJTramp(_v5231);
if (typeof _v5231 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5232=new JTramp(_v5231, [runJTramp(_v5224)]);
var _v5233=_v5232;
var _v5234=function (_v5235) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v5237="Compiling ";
var _v5238=_v5237;
var _v5239=lglobal["repr"];
if (_v5239 === undefined) { throw new Error("No such global: " + "repr"); }
var _v5240=_v5239;
_v5240=runJTramp(_v5240);
if (typeof _v5240 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5241=new JTramp(_v5240, [runJTramp(_v5235)]);
var _v5242=_v5241;
var _v5243="\n";
var _v5244=_v5243;
var _v5245=lglobal["print"];
if (_v5245 === undefined) { throw new Error("No such global: " + "print"); }
var _v5246=_v5245;
_v5246=runJTramp(_v5246);
if (typeof _v5246 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5247=new JTramp(_v5246, [runJTramp(_v5238),runJTramp(_v5242),runJTramp(_v5244)]);
_v5247=runJTramp(_v5247);
var _v5248=lglobal["compile-toplevel-to-midir"];
if (_v5248 === undefined) { throw new Error("No such global: " + "compile-toplevel-to-midir"); }
var _v5249=_v5248;
_v5249=runJTramp(_v5249);
if (typeof _v5249 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5250=new JTramp(_v5249, [runJTramp(_v5235)]);
var _v5251=_v5219=runJTramp(_v5250);
_v5251=runJTramp(_v5251);
_v5220=runJTramp(_v5220);
if (typeof _v5220 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5252=new JTramp(_v5220, [runJTramp(_v5224)]);
return _v5252;
};
var _v5253=_v5234;
_v5253=runJTramp(_v5253);
if (typeof _v5253 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5254=new JTramp(_v5253, [runJTramp(_v5233)]);
_v5229=_v5254;
} else {
var _v5255=null;
_v5229=_v5255;
}
return _v5229;
};
var _v5256=_v5220=runJTramp(_v5223);
var _v5257="*repl*";
var _v5258=_v5257;
var _v5259=lglobal["stream:make"];
if (_v5259 === undefined) { throw new Error("No such global: " + "stream:make"); }
var _v5260=_v5259;
_v5260=runJTramp(_v5260);
if (typeof _v5260 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5261=new JTramp(_v5260, [runJTramp(_v5258),runJTramp(_v5217)]);
var _v5262=_v5261;
var _v5263=function (_v5264) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
_v5220=runJTramp(_v5220);
if (typeof _v5220 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5266=new JTramp(_v5220, [runJTramp(_v5264)]);
_v5266=runJTramp(_v5266);
var _v5267="\n";
var _v5268=_v5267;
var _v5269=lglobal["print"];
if (_v5269 === undefined) { throw new Error("No such global: " + "print"); }
var _v5270=_v5269;
_v5270=runJTramp(_v5270);
if (typeof _v5270 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5271=new JTramp(_v5270, [runJTramp(_v5219),runJTramp(_v5268)]);
return _v5271;
};
var _v5272=_v5263;
_v5272=runJTramp(_v5272);
if (typeof _v5272 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5273=new JTramp(_v5272, [runJTramp(_v5262)]);
return _v5273;
};
_v5215=_v5216;
lglobal["run-repl"]=runJTramp(_v5215);
})();
(function () {
var _v5274;
var _v5275=0;
var _v5276=_v5275;
var _v5277=lglobal["dict"];
if (_v5277 === undefined) { throw new Error("No such global: " + "dict"); }
var _v5278=_v5277;
_v5278=runJTramp(_v5278);
if (typeof _v5278 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5279=new JTramp(_v5278, []);
var _v5280=_v5279;
var _v5281=function (_v5282,_v5283) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var _v5285=function (_v5286) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v5288=lglobal["null?"];
if (_v5288 === undefined) { throw new Error("No such global: " + "null?"); }
var _v5289=_v5288;
_v5289=runJTramp(_v5289);
if (typeof _v5289 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5290=new JTramp(_v5289, [runJTramp(_v5286)]);
var _v5291=_v5290;
var _v5292=lglobal["not"];
if (_v5292 === undefined) { throw new Error("No such global: " + "not"); }
var _v5293=_v5292;
_v5293=runJTramp(_v5293);
if (typeof _v5293 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5294=new JTramp(_v5293, [runJTramp(_v5291)]);
var _v5295=_v5294;
var _v5296=function (_v5297) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v5299;
if(runJTramp(_v5297)) {
var _v5300=lglobal["dict:has?"];
if (_v5300 === undefined) { throw new Error("No such global: " + "dict:has?"); }
var _v5301=_v5300;
_v5301=runJTramp(_v5301);
if (typeof _v5301 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5302=new JTramp(_v5301, [runJTramp(_v5283),runJTramp(_v5286)]);
_v5299=_v5302;
} else {
_v5299=_v5297;
}
return _v5299;
};
var _v5303=_v5296;
_v5303=runJTramp(_v5303);
if (typeof _v5303 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5304=new JTramp(_v5303, [runJTramp(_v5295)]);
var _v5305;
if(runJTramp(_v5304)) {
var _v5306=lglobal["dict:get"];
if (_v5306 === undefined) { throw new Error("No such global: " + "dict:get"); }
var _v5307=_v5306;
_v5307=runJTramp(_v5307);
if (typeof _v5307 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5308=new JTramp(_v5307, [runJTramp(_v5283),runJTramp(_v5286)]);
_v5305=_v5308;
} else {
var _v5309=1;
var _v5310=_v5309;
var _v5311=lglobal["+"];
if (_v5311 === undefined) { throw new Error("No such global: " + "+"); }
var _v5312=_v5311;
_v5312=runJTramp(_v5312);
if (typeof _v5312 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5313=new JTramp(_v5312, [runJTramp(_v5310),runJTramp(_v5282)]);
var _v5314=_v5282=runJTramp(_v5313);
_v5314=runJTramp(_v5314);
var _v5315="_v";
var _v5316=_v5315;
var _v5317=lglobal["++"];
if (_v5317 === undefined) { throw new Error("No such global: " + "++"); }
var _v5318=_v5317;
_v5318=runJTramp(_v5318);
if (typeof _v5318 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5319=new JTramp(_v5318, [runJTramp(_v5316),runJTramp(_v5282)]);
var _v5320=_v5319;
var _v5321=function (_v5322) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v5324=lglobal["dict:set!"];
if (_v5324 === undefined) { throw new Error("No such global: " + "dict:set!"); }
var _v5325=_v5324;
_v5325=runJTramp(_v5325);
if (typeof _v5325 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5326=new JTramp(_v5325, [runJTramp(_v5283),runJTramp(_v5286),runJTramp(_v5322)]);
_v5326=runJTramp(_v5326);
return _v5322;
};
var _v5327=_v5321;
_v5327=runJTramp(_v5327);
if (typeof _v5327 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5328=new JTramp(_v5327, [runJTramp(_v5320)]);
_v5305=_v5328;
}
return _v5305;
};
return _v5285;
};
var _v5329=_v5281;
_v5329=runJTramp(_v5329);
if (typeof _v5329 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5330=new JTramp(_v5329, [runJTramp(_v5276),runJTramp(_v5280)]);
_v5274=_v5330;
lglobal["make-js-var"]=runJTramp(_v5274);
})();
(function () {
var _v5331;
var _v5332=function (_v5333,_v5334,_v5335) {
if (arguments.length < 3) {
throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
throw new Error("Expecting at most 3 arguments.");
}
var _v5337=function (_v5338) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v5340=lglobal["midir:lit?"];
if (_v5340 === undefined) { throw new Error("No such global: " + "midir:lit?"); }
var _v5341=_v5340;
_v5341=runJTramp(_v5341);
if (typeof _v5341 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5342=new JTramp(_v5341, [runJTramp(_v5338)]);
var _v5343;
if(runJTramp(_v5342)) {
var _v5344=function (_v5345,_v5346) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var _v5348=lglobal["null"];
if (_v5348 === undefined) { throw new Error("No such global: " + "null"); }
var _v5349=_v5348;
var _v5350=lglobal["make-js-var"];
if (_v5350 === undefined) { throw new Error("No such global: " + "make-js-var"); }
var _v5351=_v5350;
_v5351=runJTramp(_v5351);
if (typeof _v5351 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5352=new JTramp(_v5351, [runJTramp(_v5349)]);
var _v5353=_v5352;
var _v5354=function (_v5355) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v5357="var ";
var _v5358=_v5357;
var _v5359="=";
var _v5360=_v5359;
var _v5361=lglobal["compile-lit"];
if (_v5361 === undefined) { throw new Error("No such global: " + "compile-lit"); }
var _v5362=_v5361;
_v5362=runJTramp(_v5362);
if (typeof _v5362 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5363=new JTramp(_v5362, [runJTramp(_v5345)]);
var _v5364=_v5363;
var _v5365=";\n";
var _v5366=_v5365;
var _v5367=lglobal["compile-midir-to-js"];
if (_v5367 === undefined) { throw new Error("No such global: " + "compile-midir-to-js"); }
var _v5368=_v5367;
_v5368=runJTramp(_v5368);
if (typeof _v5368 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5369=new JTramp(_v5368, [runJTramp(_v5346),runJTramp(_v5355),runJTramp(_v5335)]);
var _v5370=_v5369;
var _v5371=lglobal["++"];
if (_v5371 === undefined) { throw new Error("No such global: " + "++"); }
var _v5372=_v5371;
_v5372=runJTramp(_v5372);
if (typeof _v5372 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5373=new JTramp(_v5372, [runJTramp(_v5358),runJTramp(_v5355),runJTramp(_v5360),runJTramp(_v5364),runJTramp(_v5366),runJTramp(_v5370)]);
return _v5373;
};
var _v5374=_v5354;
_v5374=runJTramp(_v5374);
if (typeof _v5374 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5375=new JTramp(_v5374, [runJTramp(_v5353)]);
return _v5375;
};
var _v5376=_v5344;
var _v5377=lglobal["tail"];
if (_v5377 === undefined) { throw new Error("No such global: " + "tail"); }
var _v5378=_v5377;
_v5378=runJTramp(_v5378);
if (typeof _v5378 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5379=new JTramp(_v5378, [runJTramp(_v5338)]);
var _v5380=_v5379;
var _v5381=lglobal["apply"];
if (_v5381 === undefined) { throw new Error("No such global: " + "apply"); }
var _v5382=_v5381;
_v5382=runJTramp(_v5382);
if (typeof _v5382 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5383=new JTramp(_v5382, [runJTramp(_v5376),runJTramp(_v5380)]);
_v5343=_v5383;
} else {
var _v5384=lglobal["midir:lookup?"];
if (_v5384 === undefined) { throw new Error("No such global: " + "midir:lookup?"); }
var _v5385=_v5384;
_v5385=runJTramp(_v5385);
if (typeof _v5385 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5386=new JTramp(_v5385, [runJTramp(_v5338)]);
var _v5387;
if(runJTramp(_v5386)) {
var _v5388=function (_v5389,_v5390) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var _v5392=lglobal["make-js-var"];
if (_v5392 === undefined) { throw new Error("No such global: " + "make-js-var"); }
var _v5393=_v5392;
_v5393=runJTramp(_v5393);
if (typeof _v5393 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5394=new JTramp(_v5393, [runJTramp(_v5389)]);
var _v5395=_v5394;
var _v5396=lglobal["compile-midir-to-js"];
if (_v5396 === undefined) { throw new Error("No such global: " + "compile-midir-to-js"); }
var _v5397=_v5396;
_v5397=runJTramp(_v5397);
if (typeof _v5397 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5398=new JTramp(_v5397, [runJTramp(_v5390),runJTramp(_v5395),runJTramp(_v5335)]);
return _v5398;
};
var _v5399=_v5388;
var _v5400=lglobal["tail"];
if (_v5400 === undefined) { throw new Error("No such global: " + "tail"); }
var _v5401=_v5400;
_v5401=runJTramp(_v5401);
if (typeof _v5401 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5402=new JTramp(_v5401, [runJTramp(_v5338)]);
var _v5403=_v5402;
var _v5404=lglobal["apply"];
if (_v5404 === undefined) { throw new Error("No such global: " + "apply"); }
var _v5405=_v5404;
_v5405=runJTramp(_v5405);
if (typeof _v5405 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5406=new JTramp(_v5405, [runJTramp(_v5399),runJTramp(_v5403)]);
_v5387=_v5406;
} else {
var _v5407=lglobal["midir:glookup?"];
if (_v5407 === undefined) { throw new Error("No such global: " + "midir:glookup?"); }
var _v5408=_v5407;
_v5408=runJTramp(_v5408);
if (typeof _v5408 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5409=new JTramp(_v5408, [runJTramp(_v5338)]);
var _v5410;
if(runJTramp(_v5409)) {
var _v5411=function (_v5412,_v5413) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var _v5415=lglobal["null"];
if (_v5415 === undefined) { throw new Error("No such global: " + "null"); }
var _v5416=_v5415;
var _v5417=lglobal["make-js-var"];
if (_v5417 === undefined) { throw new Error("No such global: " + "make-js-var"); }
var _v5418=_v5417;
_v5418=runJTramp(_v5418);
if (typeof _v5418 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5419=new JTramp(_v5418, [runJTramp(_v5416)]);
var _v5420=_v5419;
var _v5421=function (_v5422) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v5424="var ";
var _v5425=_v5424;
var _v5426="=lglobal[";
var _v5427=_v5426;
var _v5428=lglobal["js-escape-string"];
if (_v5428 === undefined) { throw new Error("No such global: " + "js-escape-string"); }
var _v5429=_v5428;
_v5429=runJTramp(_v5429);
if (typeof _v5429 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5430=new JTramp(_v5429, [runJTramp(_v5412)]);
var _v5431=_v5430;
var _v5432="];\n";
var _v5433=_v5432;
var _v5434="if (";
var _v5435=_v5434;
var _v5436=" === undefined) { throw new Error(\"No such global: \" + ";
var _v5437=_v5436;
var _v5438=lglobal["js-escape-string"];
if (_v5438 === undefined) { throw new Error("No such global: " + "js-escape-string"); }
var _v5439=_v5438;
_v5439=runJTramp(_v5439);
if (typeof _v5439 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5440=new JTramp(_v5439, [runJTramp(_v5412)]);
var _v5441=_v5440;
var _v5442="); }\n";
var _v5443=_v5442;
var _v5444=lglobal["compile-midir-to-js"];
if (_v5444 === undefined) { throw new Error("No such global: " + "compile-midir-to-js"); }
var _v5445=_v5444;
_v5445=runJTramp(_v5445);
if (typeof _v5445 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5446=new JTramp(_v5445, [runJTramp(_v5413),runJTramp(_v5422),runJTramp(_v5335)]);
var _v5447=_v5446;
var _v5448=lglobal["++"];
if (_v5448 === undefined) { throw new Error("No such global: " + "++"); }
var _v5449=_v5448;
_v5449=runJTramp(_v5449);
if (typeof _v5449 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5450=new JTramp(_v5449, [runJTramp(_v5425),runJTramp(_v5422),runJTramp(_v5427),runJTramp(_v5431),runJTramp(_v5433),runJTramp(_v5435),runJTramp(_v5422),runJTramp(_v5437),runJTramp(_v5441),runJTramp(_v5443),runJTramp(_v5447)]);
return _v5450;
};
var _v5451=_v5421;
_v5451=runJTramp(_v5451);
if (typeof _v5451 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5452=new JTramp(_v5451, [runJTramp(_v5420)]);
return _v5452;
};
var _v5453=_v5411;
var _v5454=lglobal["tail"];
if (_v5454 === undefined) { throw new Error("No such global: " + "tail"); }
var _v5455=_v5454;
_v5455=runJTramp(_v5455);
if (typeof _v5455 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5456=new JTramp(_v5455, [runJTramp(_v5338)]);
var _v5457=_v5456;
var _v5458=lglobal["apply"];
if (_v5458 === undefined) { throw new Error("No such global: " + "apply"); }
var _v5459=_v5458;
_v5459=runJTramp(_v5459);
if (typeof _v5459 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5460=new JTramp(_v5459, [runJTramp(_v5453),runJTramp(_v5457)]);
_v5410=_v5460;
} else {
var _v5461=lglobal["midir:enter?"];
if (_v5461 === undefined) { throw new Error("No such global: " + "midir:enter?"); }
var _v5462=_v5461;
_v5462=runJTramp(_v5462);
if (typeof _v5462 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5463=new JTramp(_v5462, [runJTramp(_v5338)]);
var _v5464;
if(runJTramp(_v5463)) {
var _v5465=function (_v5466,_v5467,_v5468,_v5469) {
if (arguments.length < 4) {
throw new Error("Expecting at least 4 arguments.");
}
if (arguments.length > 4) {
throw new Error("Expecting at most 4 arguments.");
}
var _v5471=lglobal["make-js-var"];
if (_v5471 === undefined) { throw new Error("No such global: " + "make-js-var"); }
var _v5472=_v5471;
var _v5473=lglobal["map"];
if (_v5473 === undefined) { throw new Error("No such global: " + "map"); }
var _v5474=_v5473;
_v5474=runJTramp(_v5474);
if (typeof _v5474 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5475=new JTramp(_v5474, [runJTramp(_v5472),runJTramp(_v5466)]);
var _v5476=_v5475;
var _v5477=lglobal["make-js-var"];
if (_v5477 === undefined) { throw new Error("No such global: " + "make-js-var"); }
var _v5478=_v5477;
_v5478=runJTramp(_v5478);
if (typeof _v5478 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5479=new JTramp(_v5478, [runJTramp(_v5467)]);
var _v5480=_v5479;
var _v5481=lglobal["make-js-var"];
if (_v5481 === undefined) { throw new Error("No such global: " + "make-js-var"); }
var _v5482=_v5481;
var _v5483=lglobal["map"];
if (_v5483 === undefined) { throw new Error("No such global: " + "map"); }
var _v5484=_v5483;
_v5484=runJTramp(_v5484);
if (typeof _v5484 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5485=new JTramp(_v5484, [runJTramp(_v5482),runJTramp(_v5468)]);
var _v5486=_v5485;
var _v5487=function (_v5488,_v5489,_v5490) {
if (arguments.length < 3) {
throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
throw new Error("Expecting at most 3 arguments.");
}
var _v5492="function (";
var _v5493=_v5492;
var _v5494=",";
var _v5495=_v5494;
var _v5496=lglobal["s:join"];
if (_v5496 === undefined) { throw new Error("No such global: " + "s:join"); }
var _v5497=_v5496;
_v5497=runJTramp(_v5497);
if (typeof _v5497 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5498=new JTramp(_v5497, [runJTramp(_v5495),runJTramp(_v5488)]);
var _v5499=_v5498;
var _v5500=") {\n";
var _v5501=_v5500;
var _v5502=lglobal["length"];
if (_v5502 === undefined) { throw new Error("No such global: " + "length"); }
var _v5503=_v5502;
_v5503=runJTramp(_v5503);
if (typeof _v5503 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5504=new JTramp(_v5503, [runJTramp(_v5488)]);
var _v5505=_v5504;
var _v5506=lglobal["null?"];
if (_v5506 === undefined) { throw new Error("No such global: " + "null?"); }
var _v5507=_v5506;
_v5507=runJTramp(_v5507);
if (typeof _v5507 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5508=new JTramp(_v5507, [runJTramp(_v5467)]);
var _v5509=_v5508;
var _v5510=lglobal["not"];
if (_v5510 === undefined) { throw new Error("No such global: " + "not"); }
var _v5511=_v5510;
_v5511=runJTramp(_v5511);
if (typeof _v5511 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5512=new JTramp(_v5511, [runJTramp(_v5509)]);
var _v5513=_v5512;
var _v5514=lglobal["js-check-num-args"];
if (_v5514 === undefined) { throw new Error("No such global: " + "js-check-num-args"); }
var _v5515=_v5514;
_v5515=runJTramp(_v5515);
if (typeof _v5515 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5516=new JTramp(_v5515, [runJTramp(_v5505),runJTramp(_v5513)]);
var _v5517=_v5516;
var _v5518=lglobal["null?"];
if (_v5518 === undefined) { throw new Error("No such global: " + "null?"); }
var _v5519=_v5518;
_v5519=runJTramp(_v5519);
if (typeof _v5519 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5520=new JTramp(_v5519, [runJTramp(_v5467)]);
var _v5521;
if(runJTramp(_v5520)) {
var _v5522="";
_v5521=_v5522;
} else {
var _v5523=lglobal["length"];
if (_v5523 === undefined) { throw new Error("No such global: " + "length"); }
var _v5524=_v5523;
_v5524=runJTramp(_v5524);
if (typeof _v5524 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5525=new JTramp(_v5524, [runJTramp(_v5488)]);
var _v5526=_v5525;
var _v5527=lglobal["js-handleVarArg"];
if (_v5527 === undefined) { throw new Error("No such global: " + "js-handleVarArg"); }
var _v5528=_v5527;
_v5528=runJTramp(_v5528);
if (typeof _v5528 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5529=new JTramp(_v5528, [runJTramp(_v5526),runJTramp(_v5489)]);
_v5521=_v5529;
}
var _v5530=_v5521;
var _v5531=lglobal["++"];
if (_v5531 === undefined) { throw new Error("No such global: " + "++"); }
var _v5532=_v5531;
var _v5533=function (_v5534) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v5536="var ";
var _v5537=_v5536;
var _v5538=";\n";
var _v5539=_v5538;
var _v5540=lglobal["++"];
if (_v5540 === undefined) { throw new Error("No such global: " + "++"); }
var _v5541=_v5540;
_v5541=runJTramp(_v5541);
if (typeof _v5541 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5542=new JTramp(_v5541, [runJTramp(_v5537),runJTramp(_v5534),runJTramp(_v5539)]);
return _v5542;
};
var _v5543=_v5533;
var _v5544=lglobal["map"];
if (_v5544 === undefined) { throw new Error("No such global: " + "map"); }
var _v5545=_v5544;
_v5545=runJTramp(_v5545);
if (typeof _v5545 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5546=new JTramp(_v5545, [runJTramp(_v5543),runJTramp(_v5490)]);
var _v5547=_v5546;
var _v5548=lglobal["apply"];
if (_v5548 === undefined) { throw new Error("No such global: " + "apply"); }
var _v5549=_v5548;
_v5549=runJTramp(_v5549);
if (typeof _v5549 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5550=new JTramp(_v5549, [runJTramp(_v5532),runJTramp(_v5547)]);
var _v5551=_v5550;
var _v5552="ERROR";
var _v5553=_v5552;
var _v5554="ERROR";
var _v5555=_v5554;
var _v5556=lglobal["compile-midir-to-js"];
if (_v5556 === undefined) { throw new Error("No such global: " + "compile-midir-to-js"); }
var _v5557=_v5556;
_v5557=runJTramp(_v5557);
if (typeof _v5557 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5558=new JTramp(_v5557, [runJTramp(_v5469),runJTramp(_v5553),runJTramp(_v5555)]);
var _v5559=_v5558;
var _v5560="}";
var _v5561=_v5560;
var _v5562=lglobal["++"];
if (_v5562 === undefined) { throw new Error("No such global: " + "++"); }
var _v5563=_v5562;
_v5563=runJTramp(_v5563);
if (typeof _v5563 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5564=new JTramp(_v5563, [runJTramp(_v5493),runJTramp(_v5499),runJTramp(_v5501),runJTramp(_v5517),runJTramp(_v5530),runJTramp(_v5551),runJTramp(_v5559),runJTramp(_v5561)]);
return _v5564;
};
var _v5565=_v5487;
_v5565=runJTramp(_v5565);
if (typeof _v5565 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5566=new JTramp(_v5565, [runJTramp(_v5476),runJTramp(_v5480),runJTramp(_v5486)]);
return _v5566;
};
var _v5567=_v5465;
var _v5568=lglobal["tail"];
if (_v5568 === undefined) { throw new Error("No such global: " + "tail"); }
var _v5569=_v5568;
_v5569=runJTramp(_v5569);
if (typeof _v5569 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5570=new JTramp(_v5569, [runJTramp(_v5338)]);
var _v5571=_v5570;
var _v5572=lglobal["apply"];
if (_v5572 === undefined) { throw new Error("No such global: " + "apply"); }
var _v5573=_v5572;
_v5573=runJTramp(_v5573);
if (typeof _v5573 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5574=new JTramp(_v5573, [runJTramp(_v5567),runJTramp(_v5571)]);
_v5464=_v5574;
} else {
var _v5575=lglobal["midir:return?"];
if (_v5575 === undefined) { throw new Error("No such global: " + "midir:return?"); }
var _v5576=_v5575;
_v5576=runJTramp(_v5576);
if (typeof _v5576 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5577=new JTramp(_v5576, [runJTramp(_v5338)]);
var _v5578;
if(runJTramp(_v5577)) {
var _v5579=function () {
if (arguments.length > 0) {
throw new Error("Expecting at most 0 arguments.");
}
var _v5581="return ";
var _v5582=_v5581;
var _v5583=";\n";
var _v5584=_v5583;
var _v5585=lglobal["++"];
if (_v5585 === undefined) { throw new Error("No such global: " + "++"); }
var _v5586=_v5585;
_v5586=runJTramp(_v5586);
if (typeof _v5586 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5587=new JTramp(_v5586, [runJTramp(_v5582),runJTramp(_v5334),runJTramp(_v5584)]);
return _v5587;
};
var _v5588=_v5579;
var _v5589=lglobal["tail"];
if (_v5589 === undefined) { throw new Error("No such global: " + "tail"); }
var _v5590=_v5589;
_v5590=runJTramp(_v5590);
if (typeof _v5590 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5591=new JTramp(_v5590, [runJTramp(_v5338)]);
var _v5592=_v5591;
var _v5593=lglobal["apply"];
if (_v5593 === undefined) { throw new Error("No such global: " + "apply"); }
var _v5594=_v5593;
_v5594=runJTramp(_v5594);
if (typeof _v5594 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5595=new JTramp(_v5594, [runJTramp(_v5588),runJTramp(_v5592)]);
_v5578=_v5595;
} else {
var _v5596=lglobal["midir:bind?"];
if (_v5596 === undefined) { throw new Error("No such global: " + "midir:bind?"); }
var _v5597=_v5596;
_v5597=runJTramp(_v5597);
if (typeof _v5597 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5598=new JTramp(_v5597, [runJTramp(_v5338)]);
var _v5599;
if(runJTramp(_v5598)) {
var _v5600=function (_v5601,_v5602) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var _v5604="var ";
var _v5605=_v5604;
var _v5606=lglobal["make-js-var"];
if (_v5606 === undefined) { throw new Error("No such global: " + "make-js-var"); }
var _v5607=_v5606;
_v5607=runJTramp(_v5607);
if (typeof _v5607 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5608=new JTramp(_v5607, [runJTramp(_v5601)]);
var _v5609=_v5608;
var _v5610="=";
var _v5611=_v5610;
var _v5612=";\n";
var _v5613=_v5612;
var _v5614="ERROR";
var _v5615=_v5614;
var _v5616=lglobal["compile-midir-to-js"];
if (_v5616 === undefined) { throw new Error("No such global: " + "compile-midir-to-js"); }
var _v5617=_v5616;
_v5617=runJTramp(_v5617);
if (typeof _v5617 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5618=new JTramp(_v5617, [runJTramp(_v5602),runJTramp(_v5615),runJTramp(_v5335)]);
var _v5619=_v5618;
var _v5620=lglobal["++"];
if (_v5620 === undefined) { throw new Error("No such global: " + "++"); }
var _v5621=_v5620;
_v5621=runJTramp(_v5621);
if (typeof _v5621 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5622=new JTramp(_v5621, [runJTramp(_v5605),runJTramp(_v5609),runJTramp(_v5611),runJTramp(_v5334),runJTramp(_v5613),runJTramp(_v5619)]);
return _v5622;
};
var _v5623=_v5600;
var _v5624=lglobal["tail"];
if (_v5624 === undefined) { throw new Error("No such global: " + "tail"); }
var _v5625=_v5624;
_v5625=runJTramp(_v5625);
if (typeof _v5625 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5626=new JTramp(_v5625, [runJTramp(_v5338)]);
var _v5627=_v5626;
var _v5628=lglobal["apply"];
if (_v5628 === undefined) { throw new Error("No such global: " + "apply"); }
var _v5629=_v5628;
_v5629=runJTramp(_v5629);
if (typeof _v5629 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5630=new JTramp(_v5629, [runJTramp(_v5623),runJTramp(_v5627)]);
_v5599=_v5630;
} else {
var _v5631=lglobal["midir:bind-drop?"];
if (_v5631 === undefined) { throw new Error("No such global: " + "midir:bind-drop?"); }
var _v5632=_v5631;
_v5632=runJTramp(_v5632);
if (typeof _v5632 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5633=new JTramp(_v5632, [runJTramp(_v5338)]);
var _v5634;
if(runJTramp(_v5633)) {
var _v5635=function (_v5636) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v5638="=runJTramp(";
var _v5639=_v5638;
var _v5640=");\n";
var _v5641=_v5640;
var _v5642="ERROR";
var _v5643=_v5642;
var _v5644=lglobal["compile-midir-to-js"];
if (_v5644 === undefined) { throw new Error("No such global: " + "compile-midir-to-js"); }
var _v5645=_v5644;
_v5645=runJTramp(_v5645);
if (typeof _v5645 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5646=new JTramp(_v5645, [runJTramp(_v5636),runJTramp(_v5643),runJTramp(_v5335)]);
var _v5647=_v5646;
var _v5648=lglobal["++"];
if (_v5648 === undefined) { throw new Error("No such global: " + "++"); }
var _v5649=_v5648;
_v5649=runJTramp(_v5649);
if (typeof _v5649 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5650=new JTramp(_v5649, [runJTramp(_v5334),runJTramp(_v5639),runJTramp(_v5334),runJTramp(_v5641),runJTramp(_v5647)]);
return _v5650;
};
var _v5651=_v5635;
var _v5652=lglobal["tail"];
if (_v5652 === undefined) { throw new Error("No such global: " + "tail"); }
var _v5653=_v5652;
_v5653=runJTramp(_v5653);
if (typeof _v5653 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5654=new JTramp(_v5653, [runJTramp(_v5338)]);
var _v5655=_v5654;
var _v5656=lglobal["apply"];
if (_v5656 === undefined) { throw new Error("No such global: " + "apply"); }
var _v5657=_v5656;
_v5657=runJTramp(_v5657);
if (typeof _v5657 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5658=new JTramp(_v5657, [runJTramp(_v5651),runJTramp(_v5655)]);
_v5634=_v5658;
} else {
var _v5659=lglobal["midir:if?"];
if (_v5659 === undefined) { throw new Error("No such global: " + "midir:if?"); }
var _v5660=_v5659;
_v5660=runJTramp(_v5660);
if (typeof _v5660 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5661=new JTramp(_v5660, [runJTramp(_v5338)]);
var _v5662;
if(runJTramp(_v5661)) {
var _v5663=function (_v5664,_v5665,_v5666) {
if (arguments.length < 3) {
throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
throw new Error("Expecting at most 3 arguments.");
}
var _v5668=lglobal["null"];
if (_v5668 === undefined) { throw new Error("No such global: " + "null"); }
var _v5669=_v5668;
var _v5670=lglobal["make-js-var"];
if (_v5670 === undefined) { throw new Error("No such global: " + "make-js-var"); }
var _v5671=_v5670;
_v5671=runJTramp(_v5671);
if (typeof _v5671 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5672=new JTramp(_v5671, [runJTramp(_v5669)]);
var _v5673=_v5672;
var _v5674=function (_v5675) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v5677="var ";
var _v5678=_v5677;
var _v5679=";\n";
var _v5680=_v5679;
var _v5681="if(runJTramp(";
var _v5682=_v5681;
var _v5683=")) {\n";
var _v5684=_v5683;
var _v5685="ERROR";
var _v5686=_v5685;
var _v5687=lglobal["compile-midir-to-js"];
if (_v5687 === undefined) { throw new Error("No such global: " + "compile-midir-to-js"); }
var _v5688=_v5687;
_v5688=runJTramp(_v5688);
if (typeof _v5688 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5689=new JTramp(_v5688, [runJTramp(_v5664),runJTramp(_v5686),runJTramp(_v5675)]);
var _v5690=_v5689;
var _v5691="} else {\n";
var _v5692=_v5691;
var _v5693="ERROR";
var _v5694=_v5693;
var _v5695=lglobal["compile-midir-to-js"];
if (_v5695 === undefined) { throw new Error("No such global: " + "compile-midir-to-js"); }
var _v5696=_v5695;
_v5696=runJTramp(_v5696);
if (typeof _v5696 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5697=new JTramp(_v5696, [runJTramp(_v5665),runJTramp(_v5694),runJTramp(_v5675)]);
var _v5698=_v5697;
var _v5699="}\n";
var _v5700=_v5699;
var _v5701=lglobal["compile-midir-to-js"];
if (_v5701 === undefined) { throw new Error("No such global: " + "compile-midir-to-js"); }
var _v5702=_v5701;
_v5702=runJTramp(_v5702);
if (typeof _v5702 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5703=new JTramp(_v5702, [runJTramp(_v5666),runJTramp(_v5675),runJTramp(_v5335)]);
var _v5704=_v5703;
var _v5705=lglobal["++"];
if (_v5705 === undefined) { throw new Error("No such global: " + "++"); }
var _v5706=_v5705;
_v5706=runJTramp(_v5706);
if (typeof _v5706 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5707=new JTramp(_v5706, [runJTramp(_v5678),runJTramp(_v5675),runJTramp(_v5680),runJTramp(_v5682),runJTramp(_v5334),runJTramp(_v5684),runJTramp(_v5690),runJTramp(_v5692),runJTramp(_v5698),runJTramp(_v5700),runJTramp(_v5704)]);
return _v5707;
};
var _v5708=_v5674;
_v5708=runJTramp(_v5708);
if (typeof _v5708 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5709=new JTramp(_v5708, [runJTramp(_v5673)]);
return _v5709;
};
var _v5710=_v5663;
var _v5711=lglobal["tail"];
if (_v5711 === undefined) { throw new Error("No such global: " + "tail"); }
var _v5712=_v5711;
_v5712=runJTramp(_v5712);
if (typeof _v5712 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5713=new JTramp(_v5712, [runJTramp(_v5338)]);
var _v5714=_v5713;
var _v5715=lglobal["apply"];
if (_v5715 === undefined) { throw new Error("No such global: " + "apply"); }
var _v5716=_v5715;
_v5716=runJTramp(_v5716);
if (typeof _v5716 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5717=new JTramp(_v5716, [runJTramp(_v5710),runJTramp(_v5714)]);
_v5662=_v5717;
} else {
var _v5718=lglobal["midir:leave?"];
if (_v5718 === undefined) { throw new Error("No such global: " + "midir:leave?"); }
var _v5719=_v5718;
_v5719=runJTramp(_v5719);
if (typeof _v5719 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5720=new JTramp(_v5719, [runJTramp(_v5338)]);
var _v5721;
if(runJTramp(_v5720)) {
var _v5722=function () {
if (arguments.length > 0) {
throw new Error("Expecting at most 0 arguments.");
}
var _v5724="=";
var _v5725=_v5724;
var _v5726=";\n";
var _v5727=_v5726;
var _v5728=lglobal["++"];
if (_v5728 === undefined) { throw new Error("No such global: " + "++"); }
var _v5729=_v5728;
_v5729=runJTramp(_v5729);
if (typeof _v5729 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5730=new JTramp(_v5729, [runJTramp(_v5335),runJTramp(_v5725),runJTramp(_v5334),runJTramp(_v5727)]);
return _v5730;
};
var _v5731=_v5722;
var _v5732=lglobal["tail"];
if (_v5732 === undefined) { throw new Error("No such global: " + "tail"); }
var _v5733=_v5732;
_v5733=runJTramp(_v5733);
if (typeof _v5733 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5734=new JTramp(_v5733, [runJTramp(_v5338)]);
var _v5735=_v5734;
var _v5736=lglobal["apply"];
if (_v5736 === undefined) { throw new Error("No such global: " + "apply"); }
var _v5737=_v5736;
_v5737=runJTramp(_v5737);
if (typeof _v5737 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5738=new JTramp(_v5737, [runJTramp(_v5731),runJTramp(_v5735)]);
_v5721=_v5738;
} else {
var _v5739=lglobal["midir:funcall?"];
if (_v5739 === undefined) { throw new Error("No such global: " + "midir:funcall?"); }
var _v5740=_v5739;
_v5740=runJTramp(_v5740);
if (typeof _v5740 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5741=new JTramp(_v5740, [runJTramp(_v5338)]);
var _v5742;
if(runJTramp(_v5741)) {
var _v5743=function (_v5744,_v5745,_v5746) {
if (arguments.length < 3) {
throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
throw new Error("Expecting at most 3 arguments.");
}
var _v5748=lglobal["null"];
if (_v5748 === undefined) { throw new Error("No such global: " + "null"); }
var _v5749=_v5748;
var _v5750=lglobal["make-js-var"];
if (_v5750 === undefined) { throw new Error("No such global: " + "make-js-var"); }
var _v5751=_v5750;
_v5751=runJTramp(_v5751);
if (typeof _v5751 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5752=new JTramp(_v5751, [runJTramp(_v5749)]);
var _v5753=_v5752;
var _v5754=lglobal["make-js-var"];
if (_v5754 === undefined) { throw new Error("No such global: " + "make-js-var"); }
var _v5755=_v5754;
_v5755=runJTramp(_v5755);
if (typeof _v5755 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5756=new JTramp(_v5755, [runJTramp(_v5744)]);
var _v5757=_v5756;
var _v5758=lglobal["make-js-var"];
if (_v5758 === undefined) { throw new Error("No such global: " + "make-js-var"); }
var _v5759=_v5758;
var _v5760=lglobal["map"];
if (_v5760 === undefined) { throw new Error("No such global: " + "map"); }
var _v5761=_v5760;
_v5761=runJTramp(_v5761);
if (typeof _v5761 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5762=new JTramp(_v5761, [runJTramp(_v5759),runJTramp(_v5745)]);
var _v5763=_v5762;
var _v5764=function (_v5765,_v5766,_v5767) {
if (arguments.length < 3) {
throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
throw new Error("Expecting at most 3 arguments.");
}
var _v5769="=runJTramp(";
var _v5770=_v5769;
var _v5771=");\n";
var _v5772=_v5771;
var _v5773="if (typeof ";
var _v5774=_v5773;
var _v5775=" !== \"function\") {\n";
var _v5776=_v5775;
var _v5777="throw new Error(\"Cannot call non-function.\");\n";
var _v5778=_v5777;
var _v5779="}\n";
var _v5780=_v5779;
var _v5781="var ";
var _v5782=_v5781;
var _v5783="=new JTramp(";
var _v5784=_v5783;
var _v5785=", [";
var _v5786=_v5785;
var _v5787=",";
var _v5788=_v5787;
var _v5789=function (_v5790) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v5792="runJTramp(";
var _v5793=_v5792;
var _v5794=")";
var _v5795=_v5794;
var _v5796=lglobal["++"];
if (_v5796 === undefined) { throw new Error("No such global: " + "++"); }
var _v5797=_v5796;
_v5797=runJTramp(_v5797);
if (typeof _v5797 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5798=new JTramp(_v5797, [runJTramp(_v5793),runJTramp(_v5790),runJTramp(_v5795)]);
return _v5798;
};
var _v5799=_v5789;
var _v5800=lglobal["map"];
if (_v5800 === undefined) { throw new Error("No such global: " + "map"); }
var _v5801=_v5800;
_v5801=runJTramp(_v5801);
if (typeof _v5801 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5802=new JTramp(_v5801, [runJTramp(_v5799),runJTramp(_v5767)]);
var _v5803=_v5802;
var _v5804=lglobal["s:join"];
if (_v5804 === undefined) { throw new Error("No such global: " + "s:join"); }
var _v5805=_v5804;
_v5805=runJTramp(_v5805);
if (typeof _v5805 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5806=new JTramp(_v5805, [runJTramp(_v5788),runJTramp(_v5803)]);
var _v5807=_v5806;
var _v5808="]);\n";
var _v5809=_v5808;
var _v5810=lglobal["compile-midir-to-js"];
if (_v5810 === undefined) { throw new Error("No such global: " + "compile-midir-to-js"); }
var _v5811=_v5810;
_v5811=runJTramp(_v5811);
if (typeof _v5811 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5812=new JTramp(_v5811, [runJTramp(_v5746),runJTramp(_v5765),runJTramp(_v5335)]);
var _v5813=_v5812;
var _v5814=lglobal["++"];
if (_v5814 === undefined) { throw new Error("No such global: " + "++"); }
var _v5815=_v5814;
_v5815=runJTramp(_v5815);
if (typeof _v5815 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5816=new JTramp(_v5815, [runJTramp(_v5766),runJTramp(_v5770),runJTramp(_v5766),runJTramp(_v5772),runJTramp(_v5774),runJTramp(_v5766),runJTramp(_v5776),runJTramp(_v5778),runJTramp(_v5780),runJTramp(_v5782),runJTramp(_v5765),runJTramp(_v5784),runJTramp(_v5766),runJTramp(_v5786),runJTramp(_v5807),runJTramp(_v5809),runJTramp(_v5813)]);
return _v5816;
};
var _v5817=_v5764;
_v5817=runJTramp(_v5817);
if (typeof _v5817 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5818=new JTramp(_v5817, [runJTramp(_v5753),runJTramp(_v5757),runJTramp(_v5763)]);
return _v5818;
};
var _v5819=_v5743;
var _v5820=lglobal["tail"];
if (_v5820 === undefined) { throw new Error("No such global: " + "tail"); }
var _v5821=_v5820;
_v5821=runJTramp(_v5821);
if (typeof _v5821 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5822=new JTramp(_v5821, [runJTramp(_v5338)]);
var _v5823=_v5822;
var _v5824=lglobal["apply"];
if (_v5824 === undefined) { throw new Error("No such global: " + "apply"); }
var _v5825=_v5824;
_v5825=runJTramp(_v5825);
if (typeof _v5825 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5826=new JTramp(_v5825, [runJTramp(_v5819),runJTramp(_v5823)]);
_v5742=_v5826;
} else {
var _v5827=lglobal["midir:closure?"];
if (_v5827 === undefined) { throw new Error("No such global: " + "midir:closure?"); }
var _v5828=_v5827;
_v5828=runJTramp(_v5828);
if (typeof _v5828 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5829=new JTramp(_v5828, [runJTramp(_v5338)]);
var _v5830;
if(runJTramp(_v5829)) {
var _v5831=function (_v5832,_v5833) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var _v5835=lglobal["null"];
if (_v5835 === undefined) { throw new Error("No such global: " + "null"); }
var _v5836=_v5835;
var _v5837=lglobal["make-js-var"];
if (_v5837 === undefined) { throw new Error("No such global: " + "make-js-var"); }
var _v5838=_v5837;
_v5838=runJTramp(_v5838);
if (typeof _v5838 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5839=new JTramp(_v5838, [runJTramp(_v5836)]);
var _v5840=_v5839;
var _v5841=function (_v5842) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v5844="var ";
var _v5845=_v5844;
var _v5846="=";
var _v5847=_v5846;
var _v5848="ERROR";
var _v5849=_v5848;
var _v5850="ERROR";
var _v5851=_v5850;
var _v5852=lglobal["compile-midir-to-js"];
if (_v5852 === undefined) { throw new Error("No such global: " + "compile-midir-to-js"); }
var _v5853=_v5852;
_v5853=runJTramp(_v5853);
if (typeof _v5853 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5854=new JTramp(_v5853, [runJTramp(_v5832),runJTramp(_v5849),runJTramp(_v5851)]);
var _v5855=_v5854;
var _v5856=";\n";
var _v5857=_v5856;
var _v5858=lglobal["compile-midir-to-js"];
if (_v5858 === undefined) { throw new Error("No such global: " + "compile-midir-to-js"); }
var _v5859=_v5858;
_v5859=runJTramp(_v5859);
if (typeof _v5859 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5860=new JTramp(_v5859, [runJTramp(_v5833),runJTramp(_v5842),runJTramp(_v5335)]);
var _v5861=_v5860;
var _v5862=lglobal["++"];
if (_v5862 === undefined) { throw new Error("No such global: " + "++"); }
var _v5863=_v5862;
_v5863=runJTramp(_v5863);
if (typeof _v5863 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5864=new JTramp(_v5863, [runJTramp(_v5845),runJTramp(_v5842),runJTramp(_v5847),runJTramp(_v5855),runJTramp(_v5857),runJTramp(_v5861)]);
return _v5864;
};
var _v5865=_v5841;
_v5865=runJTramp(_v5865);
if (typeof _v5865 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5866=new JTramp(_v5865, [runJTramp(_v5840)]);
return _v5866;
};
var _v5867=_v5831;
var _v5868=lglobal["tail"];
if (_v5868 === undefined) { throw new Error("No such global: " + "tail"); }
var _v5869=_v5868;
_v5869=runJTramp(_v5869);
if (typeof _v5869 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5870=new JTramp(_v5869, [runJTramp(_v5338)]);
var _v5871=_v5870;
var _v5872=lglobal["apply"];
if (_v5872 === undefined) { throw new Error("No such global: " + "apply"); }
var _v5873=_v5872;
_v5873=runJTramp(_v5873);
if (typeof _v5873 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5874=new JTramp(_v5873, [runJTramp(_v5867),runJTramp(_v5871)]);
_v5830=_v5874;
} else {
var _v5875=lglobal["midir:set!?"];
if (_v5875 === undefined) { throw new Error("No such global: " + "midir:set!?"); }
var _v5876=_v5875;
_v5876=runJTramp(_v5876);
if (typeof _v5876 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5877=new JTramp(_v5876, [runJTramp(_v5338)]);
var _v5878;
if(runJTramp(_v5877)) {
var _v5879=function (_v5880,_v5881) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var _v5883=lglobal["null"];
if (_v5883 === undefined) { throw new Error("No such global: " + "null"); }
var _v5884=_v5883;
var _v5885=lglobal["make-js-var"];
if (_v5885 === undefined) { throw new Error("No such global: " + "make-js-var"); }
var _v5886=_v5885;
_v5886=runJTramp(_v5886);
if (typeof _v5886 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5887=new JTramp(_v5886, [runJTramp(_v5884)]);
var _v5888=_v5887;
var _v5889=function (_v5890) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v5892="var ";
var _v5893=_v5892;
var _v5894="=";
var _v5895=_v5894;
var _v5896=lglobal["make-js-var"];
if (_v5896 === undefined) { throw new Error("No such global: " + "make-js-var"); }
var _v5897=_v5896;
_v5897=runJTramp(_v5897);
if (typeof _v5897 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5898=new JTramp(_v5897, [runJTramp(_v5880)]);
var _v5899=_v5898;
var _v5900="=runJTramp(";
var _v5901=_v5900;
var _v5902=");\n";
var _v5903=_v5902;
var _v5904=lglobal["compile-midir-to-js"];
if (_v5904 === undefined) { throw new Error("No such global: " + "compile-midir-to-js"); }
var _v5905=_v5904;
_v5905=runJTramp(_v5905);
if (typeof _v5905 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5906=new JTramp(_v5905, [runJTramp(_v5881),runJTramp(_v5890),runJTramp(_v5335)]);
var _v5907=_v5906;
var _v5908=lglobal["++"];
if (_v5908 === undefined) { throw new Error("No such global: " + "++"); }
var _v5909=_v5908;
_v5909=runJTramp(_v5909);
if (typeof _v5909 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5910=new JTramp(_v5909, [runJTramp(_v5893),runJTramp(_v5890),runJTramp(_v5895),runJTramp(_v5899),runJTramp(_v5901),runJTramp(_v5334),runJTramp(_v5903),runJTramp(_v5907)]);
return _v5910;
};
var _v5911=_v5889;
_v5911=runJTramp(_v5911);
if (typeof _v5911 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5912=new JTramp(_v5911, [runJTramp(_v5888)]);
return _v5912;
};
var _v5913=_v5879;
var _v5914=lglobal["tail"];
if (_v5914 === undefined) { throw new Error("No such global: " + "tail"); }
var _v5915=_v5914;
_v5915=runJTramp(_v5915);
if (typeof _v5915 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5916=new JTramp(_v5915, [runJTramp(_v5338)]);
var _v5917=_v5916;
var _v5918=lglobal["apply"];
if (_v5918 === undefined) { throw new Error("No such global: " + "apply"); }
var _v5919=_v5918;
_v5919=runJTramp(_v5919);
if (typeof _v5919 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5920=new JTramp(_v5919, [runJTramp(_v5913),runJTramp(_v5917)]);
_v5878=_v5920;
} else {
var _v5921=lglobal["midir:gset!?"];
if (_v5921 === undefined) { throw new Error("No such global: " + "midir:gset!?"); }
var _v5922=_v5921;
_v5922=runJTramp(_v5922);
if (typeof _v5922 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5923=new JTramp(_v5922, [runJTramp(_v5338)]);
var _v5924;
if(runJTramp(_v5923)) {
var _v5925=function (_v5926,_v5927) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var _v5929=lglobal["null"];
if (_v5929 === undefined) { throw new Error("No such global: " + "null"); }
var _v5930=_v5929;
var _v5931=lglobal["make-js-var"];
if (_v5931 === undefined) { throw new Error("No such global: " + "make-js-var"); }
var _v5932=_v5931;
_v5932=runJTramp(_v5932);
if (typeof _v5932 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5933=new JTramp(_v5932, [runJTramp(_v5930)]);
var _v5934=_v5933;
var _v5935=function (_v5936) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v5938="var ";
var _v5939=_v5938;
var _v5940="=";
var _v5941=_v5940;
var _v5942="lglobal[";
var _v5943=_v5942;
var _v5944=lglobal["js-escape-string"];
if (_v5944 === undefined) { throw new Error("No such global: " + "js-escape-string"); }
var _v5945=_v5944;
_v5945=runJTramp(_v5945);
if (typeof _v5945 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5946=new JTramp(_v5945, [runJTramp(_v5926)]);
var _v5947=_v5946;
var _v5948="]=runJTramp(";
var _v5949=_v5948;
var _v5950=");\n";
var _v5951=_v5950;
var _v5952=lglobal["compile-midir-to-js"];
if (_v5952 === undefined) { throw new Error("No such global: " + "compile-midir-to-js"); }
var _v5953=_v5952;
_v5953=runJTramp(_v5953);
if (typeof _v5953 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5954=new JTramp(_v5953, [runJTramp(_v5927),runJTramp(_v5936),runJTramp(_v5335)]);
var _v5955=_v5954;
var _v5956=lglobal["++"];
if (_v5956 === undefined) { throw new Error("No such global: " + "++"); }
var _v5957=_v5956;
_v5957=runJTramp(_v5957);
if (typeof _v5957 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5958=new JTramp(_v5957, [runJTramp(_v5939),runJTramp(_v5936),runJTramp(_v5941),runJTramp(_v5943),runJTramp(_v5947),runJTramp(_v5949),runJTramp(_v5334),runJTramp(_v5951),runJTramp(_v5955)]);
return _v5958;
};
var _v5959=_v5935;
_v5959=runJTramp(_v5959);
if (typeof _v5959 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5960=new JTramp(_v5959, [runJTramp(_v5934)]);
return _v5960;
};
var _v5961=_v5925;
var _v5962=lglobal["tail"];
if (_v5962 === undefined) { throw new Error("No such global: " + "tail"); }
var _v5963=_v5962;
_v5963=runJTramp(_v5963);
if (typeof _v5963 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5964=new JTramp(_v5963, [runJTramp(_v5338)]);
var _v5965=_v5964;
var _v5966=lglobal["apply"];
if (_v5966 === undefined) { throw new Error("No such global: " + "apply"); }
var _v5967=_v5966;
_v5967=runJTramp(_v5967);
if (typeof _v5967 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5968=new JTramp(_v5967, [runJTramp(_v5961),runJTramp(_v5965)]);
_v5924=_v5968;
} else {
var _v5969=lglobal["midir:ffi?"];
if (_v5969 === undefined) { throw new Error("No such global: " + "midir:ffi?"); }
var _v5970=_v5969;
_v5970=runJTramp(_v5970);
if (typeof _v5970 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5971=new JTramp(_v5970, [runJTramp(_v5338)]);
var _v5972;
if(runJTramp(_v5971)) {
var _v5973=function (_v5974,_v5975,_v5976) {
if (arguments.length < 3) {
throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
throw new Error("Expecting at most 3 arguments.");
}
var _v5978=lglobal["null?"];
if (_v5978 === undefined) { throw new Error("No such global: " + "null?"); }
var _v5979=_v5978;
_v5979=runJTramp(_v5979);
if (typeof _v5979 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5980=new JTramp(_v5979, [runJTramp(_v5975)]);
var _v5981;
if(runJTramp(_v5980)) {
var _v5982=lglobal["null"];
if (_v5982 === undefined) { throw new Error("No such global: " + "null"); }
var _v5983=_v5982;
var _v5984=lglobal["make-js-var"];
if (_v5984 === undefined) { throw new Error("No such global: " + "make-js-var"); }
var _v5985=_v5984;
_v5985=runJTramp(_v5985);
if (typeof _v5985 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5986=new JTramp(_v5985, [runJTramp(_v5983)]);
var _v5987=_v5986;
var _v5988=function (_v5989) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v5991="var ";
var _v5992=_v5991;
var _v5993="=(";
var _v5994=_v5993;
var _v5995=");\n";
var _v5996=_v5995;
var _v5997=lglobal["compile-midir-to-js"];
if (_v5997 === undefined) { throw new Error("No such global: " + "compile-midir-to-js"); }
var _v5998=_v5997;
_v5998=runJTramp(_v5998);
if (typeof _v5998 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v5999=new JTramp(_v5998, [runJTramp(_v5976),runJTramp(_v5989),runJTramp(_v5335)]);
var _v6000=_v5999;
var _v6001=lglobal["++"];
if (_v6001 === undefined) { throw new Error("No such global: " + "++"); }
var _v6002=_v6001;
_v6002=runJTramp(_v6002);
if (typeof _v6002 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v6003=new JTramp(_v6002, [runJTramp(_v5992),runJTramp(_v5989),runJTramp(_v5994),runJTramp(_v5974),runJTramp(_v5996),runJTramp(_v6000)]);
return _v6003;
};
var _v6004=_v5988;
_v6004=runJTramp(_v6004);
if (typeof _v6004 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v6005=new JTramp(_v6004, [runJTramp(_v5987)]);
_v5981=_v6005;
} else {
var _v6006=";\n";
var _v6007=_v6006;
var _v6008=lglobal["compile-midir-to-js"];
if (_v6008 === undefined) { throw new Error("No such global: " + "compile-midir-to-js"); }
var _v6009=_v6008;
_v6009=runJTramp(_v6009);
if (typeof _v6009 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v6010=new JTramp(_v6009, [runJTramp(_v5976),runJTramp(_v5975),runJTramp(_v5335)]);
var _v6011=_v6010;
var _v6012=lglobal["++"];
if (_v6012 === undefined) { throw new Error("No such global: " + "++"); }
var _v6013=_v6012;
_v6013=runJTramp(_v6013);
if (typeof _v6013 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v6014=new JTramp(_v6013, [runJTramp(_v5974),runJTramp(_v6007),runJTramp(_v6011)]);
_v5981=_v6014;
}
return _v5981;
};
var _v6015=_v5973;
var _v6016=lglobal["tail"];
if (_v6016 === undefined) { throw new Error("No such global: " + "tail"); }
var _v6017=_v6016;
_v6017=runJTramp(_v6017);
if (typeof _v6017 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v6018=new JTramp(_v6017, [runJTramp(_v5338)]);
var _v6019=_v6018;
var _v6020=lglobal["apply"];
if (_v6020 === undefined) { throw new Error("No such global: " + "apply"); }
var _v6021=_v6020;
_v6021=runJTramp(_v6021);
if (typeof _v6021 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v6022=new JTramp(_v6021, [runJTramp(_v6015),runJTramp(_v6019)]);
_v5972=_v6022;
} else {
var _v6023="Unknown midir ";
var _v6024=_v6023;
var _v6025=lglobal["++"];
if (_v6025 === undefined) { throw new Error("No such global: " + "++"); }
var _v6026=_v6025;
_v6026=runJTramp(_v6026);
if (typeof _v6026 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v6027=new JTramp(_v6026, [runJTramp(_v6024),runJTramp(_v5333)]);
var _v6028=_v6027;
var _v6029=lglobal["error"];
if (_v6029 === undefined) { throw new Error("No such global: " + "error"); }
var _v6030=_v6029;
_v6030=runJTramp(_v6030);
if (typeof _v6030 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v6031=new JTramp(_v6030, [runJTramp(_v6028)]);
_v5972=_v6031;
}
_v5924=_v5972;
}
_v5878=_v5924;
}
_v5830=_v5878;
}
_v5742=_v5830;
}
_v5721=_v5742;
}
_v5662=_v5721;
}
_v5634=_v5662;
}
_v5599=_v5634;
}
_v5578=_v5599;
}
_v5464=_v5578;
}
_v5410=_v5464;
}
_v5387=_v5410;
}
_v5343=_v5387;
}
return _v5343;
};
var _v6032=_v5337;
_v6032=runJTramp(_v6032);
if (typeof _v6032 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v6033=new JTramp(_v6032, [runJTramp(_v5333)]);
return _v6033;
};
_v5331=_v5332;
lglobal["compile-midir-to-js"]=runJTramp(_v5331);
})();
(function () {
var _v6034;
var _v6035=function (_v6036,_v6037) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var _v6039=0;
var _v6040=_v6039;
var _v6041=lglobal["<"];
if (_v6041 === undefined) { throw new Error("No such global: " + "<"); }
var _v6042=_v6041;
_v6042=runJTramp(_v6042);
if (typeof _v6042 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v6043=new JTramp(_v6042, [runJTramp(_v6040),runJTramp(_v6036)]);
var _v6044;
if(runJTramp(_v6043)) {
var _v6045="if (arguments.length < ";
var _v6046=_v6045;
var _v6047=") {\n";
var _v6048=_v6047;
var _v6049="throw new Error(\"Expecting at least ";
var _v6050=_v6049;
var _v6051=" arguments.\");\n";
var _v6052=_v6051;
var _v6053="}\n";
var _v6054=_v6053;
var _v6055=lglobal["++"];
if (_v6055 === undefined) { throw new Error("No such global: " + "++"); }
var _v6056=_v6055;
_v6056=runJTramp(_v6056);
if (typeof _v6056 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v6057=new JTramp(_v6056, [runJTramp(_v6046),runJTramp(_v6036),runJTramp(_v6048),runJTramp(_v6050),runJTramp(_v6036),runJTramp(_v6052),runJTramp(_v6054)]);
_v6044=_v6057;
} else {
var _v6058="";
_v6044=_v6058;
}
var _v6059=_v6044;
var _v6060;
if(runJTramp(_v6037)) {
var _v6061="";
_v6060=_v6061;
} else {
var _v6062="if (arguments.length > ";
var _v6063=_v6062;
var _v6064=") {\n";
var _v6065=_v6064;
var _v6066="throw new Error(\"Expecting at most ";
var _v6067=_v6066;
var _v6068=" arguments.\");\n";
var _v6069=_v6068;
var _v6070="}\n";
var _v6071=_v6070;
var _v6072=lglobal["++"];
if (_v6072 === undefined) { throw new Error("No such global: " + "++"); }
var _v6073=_v6072;
_v6073=runJTramp(_v6073);
if (typeof _v6073 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v6074=new JTramp(_v6073, [runJTramp(_v6063),runJTramp(_v6036),runJTramp(_v6065),runJTramp(_v6067),runJTramp(_v6036),runJTramp(_v6069),runJTramp(_v6071)]);
_v6060=_v6074;
}
var _v6075=_v6060;
var _v6076=lglobal["++"];
if (_v6076 === undefined) { throw new Error("No such global: " + "++"); }
var _v6077=_v6076;
_v6077=runJTramp(_v6077);
if (typeof _v6077 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v6078=new JTramp(_v6077, [runJTramp(_v6059),runJTramp(_v6075)]);
return _v6078;
};
_v6034=_v6035;
lglobal["js-check-num-args"]=runJTramp(_v6034);
})();
(function () {
var _v6079;
var _v6080=function (_v6081,_v6082) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var _v6084;
var _v6085=lglobal["null"];
if (_v6085 === undefined) { throw new Error("No such global: " + "null"); }
var _v6086=_v6085;
var _v6087=lglobal["make-js-var"];
if (_v6087 === undefined) { throw new Error("No such global: " + "make-js-var"); }
var _v6088=_v6087;
_v6088=runJTramp(_v6088);
if (typeof _v6088 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v6089=new JTramp(_v6088, [runJTramp(_v6086)]);
var _v6090=_v6084=runJTramp(_v6089);
var _v6091="var ";
var _v6092=_v6091;
var _v6093=" = new Nil();\n";
var _v6094=_v6093;
var _v6095="for (var ";
var _v6096=_v6095;
var _v6097=" = arguments.length - 1; ";
var _v6098=_v6097;
var _v6099=" >= ";
var _v6100=_v6099;
var _v6101="; ";
var _v6102=_v6101;
var _v6103="--) {\n";
var _v6104=_v6103;
var _v6105="  ";
var _v6106=_v6105;
var _v6107=" = new Cons(arguments[";
var _v6108=_v6107;
var _v6109="], ";
var _v6110=_v6109;
var _v6111=");\n";
var _v6112=_v6111;
var _v6113="}\n";
var _v6114=_v6113;
var _v6115=lglobal["++"];
if (_v6115 === undefined) { throw new Error("No such global: " + "++"); }
var _v6116=_v6115;
_v6116=runJTramp(_v6116);
if (typeof _v6116 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v6117=new JTramp(_v6116, [runJTramp(_v6092),runJTramp(_v6082),runJTramp(_v6094),runJTramp(_v6096),runJTramp(_v6084),runJTramp(_v6098),runJTramp(_v6084),runJTramp(_v6100),runJTramp(_v6081),runJTramp(_v6102),runJTramp(_v6084),runJTramp(_v6104),runJTramp(_v6106),runJTramp(_v6082),runJTramp(_v6108),runJTramp(_v6084),runJTramp(_v6110),runJTramp(_v6082),runJTramp(_v6112),runJTramp(_v6114)]);
return _v6117;
};
_v6079=_v6080;
lglobal["js-handleVarArg"]=runJTramp(_v6079);
})();
(function () {
var _v6118;
var _v6119=function (_v6120) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v6122=lglobal["nil?"];
if (_v6122 === undefined) { throw new Error("No such global: " + "nil?"); }
var _v6123=_v6122;
_v6123=runJTramp(_v6123);
if (typeof _v6123 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v6124=new JTramp(_v6123, [runJTramp(_v6120)]);
var _v6125;
if(runJTramp(_v6124)) {
var _v6126="new Nil()";
_v6125=_v6126;
} else {
var _v6127=lglobal["cons?"];
if (_v6127 === undefined) { throw new Error("No such global: " + "cons?"); }
var _v6128=_v6127;
_v6128=runJTramp(_v6128);
if (typeof _v6128 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v6129=new JTramp(_v6128, [runJTramp(_v6120)]);
var _v6130;
if(runJTramp(_v6129)) {
var _v6131="new Cons(";
var _v6132=_v6131;
var _v6133=lglobal["head"];
if (_v6133 === undefined) { throw new Error("No such global: " + "head"); }
var _v6134=_v6133;
_v6134=runJTramp(_v6134);
if (typeof _v6134 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v6135=new JTramp(_v6134, [runJTramp(_v6120)]);
var _v6136=_v6135;
var _v6137=lglobal["compile-lit"];
if (_v6137 === undefined) { throw new Error("No such global: " + "compile-lit"); }
var _v6138=_v6137;
_v6138=runJTramp(_v6138);
if (typeof _v6138 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v6139=new JTramp(_v6138, [runJTramp(_v6136)]);
var _v6140=_v6139;
var _v6141=", ";
var _v6142=_v6141;
var _v6143=lglobal["tail"];
if (_v6143 === undefined) { throw new Error("No such global: " + "tail"); }
var _v6144=_v6143;
_v6144=runJTramp(_v6144);
if (typeof _v6144 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v6145=new JTramp(_v6144, [runJTramp(_v6120)]);
var _v6146=_v6145;
var _v6147=lglobal["compile-lit"];
if (_v6147 === undefined) { throw new Error("No such global: " + "compile-lit"); }
var _v6148=_v6147;
_v6148=runJTramp(_v6148);
if (typeof _v6148 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v6149=new JTramp(_v6148, [runJTramp(_v6146)]);
var _v6150=_v6149;
var _v6151=")";
var _v6152=_v6151;
var _v6153=lglobal["++"];
if (_v6153 === undefined) { throw new Error("No such global: " + "++"); }
var _v6154=_v6153;
_v6154=runJTramp(_v6154);
if (typeof _v6154 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v6155=new JTramp(_v6154, [runJTramp(_v6132),runJTramp(_v6140),runJTramp(_v6142),runJTramp(_v6150),runJTramp(_v6152)]);
_v6130=_v6155;
} else {
var _v6156=lglobal["null?"];
if (_v6156 === undefined) { throw new Error("No such global: " + "null?"); }
var _v6157=_v6156;
_v6157=runJTramp(_v6157);
if (typeof _v6157 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v6158=new JTramp(_v6157, [runJTramp(_v6120)]);
var _v6159;
if(runJTramp(_v6158)) {
var _v6160="null";
_v6159=_v6160;
} else {
var _v6161=lglobal["number?"];
if (_v6161 === undefined) { throw new Error("No such global: " + "number?"); }
var _v6162=_v6161;
_v6162=runJTramp(_v6162);
if (typeof _v6162 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v6163=new JTramp(_v6162, [runJTramp(_v6120)]);
var _v6164;
if(runJTramp(_v6163)) {
var _v6165=lglobal["js:toString"];
if (_v6165 === undefined) { throw new Error("No such global: " + "js:toString"); }
var _v6166=_v6165;
_v6166=runJTramp(_v6166);
if (typeof _v6166 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v6167=new JTramp(_v6166, [runJTramp(_v6120)]);
_v6164=_v6167;
} else {
var _v6168=lglobal["string?"];
if (_v6168 === undefined) { throw new Error("No such global: " + "string?"); }
var _v6169=_v6168;
_v6169=runJTramp(_v6169);
if (typeof _v6169 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v6170=new JTramp(_v6169, [runJTramp(_v6120)]);
var _v6171;
if(runJTramp(_v6170)) {
var _v6172=lglobal["js-escape-string"];
if (_v6172 === undefined) { throw new Error("No such global: " + "js-escape-string"); }
var _v6173=_v6172;
_v6173=runJTramp(_v6173);
if (typeof _v6173 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v6174=new JTramp(_v6173, [runJTramp(_v6120)]);
_v6171=_v6174;
} else {
var _v6175=lglobal["otherwise"];
if (_v6175 === undefined) { throw new Error("No such global: " + "otherwise"); }
var _v6176;
if(runJTramp(_v6175)) {
var _v6177="Cannot compile literal: ";
var _v6178=_v6177;
var _v6179=lglobal["repr"];
if (_v6179 === undefined) { throw new Error("No such global: " + "repr"); }
var _v6180=_v6179;
_v6180=runJTramp(_v6180);
if (typeof _v6180 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v6181=new JTramp(_v6180, [runJTramp(_v6120)]);
var _v6182=_v6181;
var _v6183=lglobal["++"];
if (_v6183 === undefined) { throw new Error("No such global: " + "++"); }
var _v6184=_v6183;
_v6184=runJTramp(_v6184);
if (typeof _v6184 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v6185=new JTramp(_v6184, [runJTramp(_v6178),runJTramp(_v6182)]);
var _v6186=_v6185;
var _v6187=lglobal["error"];
if (_v6187 === undefined) { throw new Error("No such global: " + "error"); }
var _v6188=_v6187;
_v6188=runJTramp(_v6188);
if (typeof _v6188 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v6189=new JTramp(_v6188, [runJTramp(_v6186)]);
_v6176=_v6189;
} else {
var _v6190=null;
_v6176=_v6190;
}
_v6171=_v6176;
}
_v6164=_v6171;
}
_v6159=_v6164;
}
_v6130=_v6159;
}
_v6125=_v6130;
}
return _v6125;
};
_v6118=_v6119;
lglobal["compile-lit"]=runJTramp(_v6118);
})();
(function () {
var _v6191;
var _v6192=function (_v6193) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v6195;
var _v6196=function (_v6197) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v6199=lglobal["s:length"];
if (_v6199 === undefined) { throw new Error("No such global: " + "s:length"); }
var _v6200=_v6199;
_v6200=runJTramp(_v6200);
if (typeof _v6200 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v6201=new JTramp(_v6200, [runJTramp(_v6193)]);
var _v6202=_v6201;
var _v6203=lglobal["<"];
if (_v6203 === undefined) { throw new Error("No such global: " + "<"); }
var _v6204=_v6203;
_v6204=runJTramp(_v6204);
if (typeof _v6204 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v6205=new JTramp(_v6204, [runJTramp(_v6197),runJTramp(_v6202)]);
var _v6206;
if(runJTramp(_v6205)) {
var _v6207=lglobal["s:charAt"];
if (_v6207 === undefined) { throw new Error("No such global: " + "s:charAt"); }
var _v6208=_v6207;
_v6208=runJTramp(_v6208);
if (typeof _v6208 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v6209=new JTramp(_v6208, [runJTramp(_v6193),runJTramp(_v6197)]);
var _v6210=_v6209;
var _v6211=function (_v6212) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var _v6214="\"";
var _v6215=_v6214;
var _v6216=lglobal["="];
if (_v6216 === undefined) { throw new Error("No such global: " + "="); }
var _v6217=_v6216;
_v6217=runJTramp(_v6217);
if (typeof _v6217 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v6218=new JTramp(_v6217, [runJTramp(_v6212),runJTramp(_v6215)]);
var _v6219;
if(runJTramp(_v6218)) {
var _v6220="\\\"";
_v6219=_v6220;
} else {
var _v6221="\n";
var _v6222=_v6221;
var _v6223=lglobal["="];
if (_v6223 === undefined) { throw new Error("No such global: " + "="); }
var _v6224=_v6223;
_v6224=runJTramp(_v6224);
if (typeof _v6224 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v6225=new JTramp(_v6224, [runJTramp(_v6212),runJTramp(_v6222)]);
var _v6226;
if(runJTramp(_v6225)) {
var _v6227="\\n";
_v6226=_v6227;
} else {
var _v6228="\t";
var _v6229=_v6228;
var _v6230=lglobal["="];
if (_v6230 === undefined) { throw new Error("No such global: " + "="); }
var _v6231=_v6230;
_v6231=runJTramp(_v6231);
if (typeof _v6231 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v6232=new JTramp(_v6231, [runJTramp(_v6212),runJTramp(_v6229)]);
var _v6233;
if(runJTramp(_v6232)) {
var _v6234="\\t";
_v6233=_v6234;
} else {
var _v6235="\r";
var _v6236=_v6235;
var _v6237=lglobal["="];
if (_v6237 === undefined) { throw new Error("No such global: " + "="); }
var _v6238=_v6237;
_v6238=runJTramp(_v6238);
if (typeof _v6238 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v6239=new JTramp(_v6238, [runJTramp(_v6212),runJTramp(_v6236)]);
var _v6240;
if(runJTramp(_v6239)) {
var _v6241="\\r";
_v6240=_v6241;
} else {
var _v6242="\\";
var _v6243=_v6242;
var _v6244=lglobal["="];
if (_v6244 === undefined) { throw new Error("No such global: " + "="); }
var _v6245=_v6244;
_v6245=runJTramp(_v6245);
if (typeof _v6245 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v6246=new JTramp(_v6245, [runJTramp(_v6212),runJTramp(_v6243)]);
var _v6247;
if(runJTramp(_v6246)) {
var _v6248="\\\\";
_v6247=_v6248;
} else {
var _v6249=lglobal["s:charAt"];
if (_v6249 === undefined) { throw new Error("No such global: " + "s:charAt"); }
var _v6250=_v6249;
_v6250=runJTramp(_v6250);
if (typeof _v6250 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v6251=new JTramp(_v6250, [runJTramp(_v6193),runJTramp(_v6197)]);
_v6247=_v6251;
}
_v6240=_v6247;
}
_v6233=_v6240;
}
_v6226=_v6233;
}
_v6219=_v6226;
}
return _v6219;
};
var _v6252=_v6211;
_v6252=runJTramp(_v6252);
if (typeof _v6252 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v6253=new JTramp(_v6252, [runJTramp(_v6210)]);
var _v6254=_v6253;
var _v6255=1;
var _v6256=_v6255;
var _v6257=lglobal["+"];
if (_v6257 === undefined) { throw new Error("No such global: " + "+"); }
var _v6258=_v6257;
_v6258=runJTramp(_v6258);
if (typeof _v6258 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v6259=new JTramp(_v6258, [runJTramp(_v6197),runJTramp(_v6256)]);
var _v6260=_v6259;
_v6195=runJTramp(_v6195);
if (typeof _v6195 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v6261=new JTramp(_v6195, [runJTramp(_v6260)]);
var _v6262=_v6261;
var _v6263=lglobal["cons"];
if (_v6263 === undefined) { throw new Error("No such global: " + "cons"); }
var _v6264=_v6263;
_v6264=runJTramp(_v6264);
if (typeof _v6264 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v6265=new JTramp(_v6264, [runJTramp(_v6254),runJTramp(_v6262)]);
_v6206=_v6265;
} else {
var _v6266="\"";
var _v6267=_v6266;
var _v6268=lglobal["list"];
if (_v6268 === undefined) { throw new Error("No such global: " + "list"); }
var _v6269=_v6268;
_v6269=runJTramp(_v6269);
if (typeof _v6269 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v6270=new JTramp(_v6269, [runJTramp(_v6267)]);
_v6206=_v6270;
}
return _v6206;
};
var _v6271=_v6195=runJTramp(_v6196);
var _v6272=lglobal["++"];
if (_v6272 === undefined) { throw new Error("No such global: " + "++"); }
var _v6273=_v6272;
var _v6274="\"";
var _v6275=_v6274;
var _v6276=0;
var _v6277=_v6276;
_v6195=runJTramp(_v6195);
if (typeof _v6195 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v6278=new JTramp(_v6195, [runJTramp(_v6277)]);
var _v6279=_v6278;
var _v6280=lglobal["cons"];
if (_v6280 === undefined) { throw new Error("No such global: " + "cons"); }
var _v6281=_v6280;
_v6281=runJTramp(_v6281);
if (typeof _v6281 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v6282=new JTramp(_v6281, [runJTramp(_v6275),runJTramp(_v6279)]);
var _v6283=_v6282;
var _v6284=lglobal["apply"];
if (_v6284 === undefined) { throw new Error("No such global: " + "apply"); }
var _v6285=_v6284;
_v6285=runJTramp(_v6285);
if (typeof _v6285 !== "function") {
throw new Error("Cannot call non-function.");
}
var _v6286=new JTramp(_v6285, [runJTramp(_v6273),runJTramp(_v6283)]);
return _v6286;
};
_v6191=_v6192;
lglobal["js-escape-string"]=runJTramp(_v6191);
})();
})();

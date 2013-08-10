
"use strict";
if (window.Cons === undefined) {
  window.Cons = function Cons(a, b) {
    this.head = a;
    this.tail = b;
  };
  window.Nil = function Nil() {};
}
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
window.lglobal={
  'prim:cons' : function (a, b) { return new Cons(a, b); },
  'prim:cons?' : function (a) { return a instanceof Cons; },
  'prim:head' : function (a) { return a.head; },
  'prim:tail' : function (a) { return a.tail; },
  'prim:nil' : function () { return new Nil(); },
  'prim:nil?' : function (a) { return a instanceof Nil; }

  // ADHOC because of compiling mistakes
	,
  'scope' : function (x) { return x; },
	'boolean?' : function (x) { return typeof x === 'boolean'; },
	'string?' : function (x) { return typeof x === 'string'; }
};
(function () {
var v1;
var v2=function (v3,v4) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v6=v3;
var v7=v4;
var v8=lglobal["prim:cons"];
var v9=v8;
v9=runJTramp(v9);
if (typeof v9 !== "function") {
throw new Error("Cannot call non-function.");
}
var v10=new JTramp(v9, [runJTramp(v6),runJTramp(v7)]);
return v10;
};
v1=v2;
lglobal["cons"]=runJTramp(v1);
})();
(function () {
var v79;
var v80=function (v81) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v83=v81;
var v84=lglobal["prim:cons?"];
var v85=v84;
v85=runJTramp(v85);
if (typeof v85 !== "function") {
throw new Error("Cannot call non-function.");
}
var v86=new JTramp(v85, [runJTramp(v83)]);
return v86;
};
v79=v80;
lglobal["cons?"]=runJTramp(v79);
})();
(function () {
var v87;
var v88=function (v89) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v91=v89;
var v92=lglobal["prim:head"];
var v93=v92;
v93=runJTramp(v93);
if (typeof v93 !== "function") {
throw new Error("Cannot call non-function.");
}
var v94=new JTramp(v93, [runJTramp(v91)]);
return v94;
};
v87=v88;
lglobal["head"]=runJTramp(v87);
})();
(function () {
var v95;
var v96=function (v97) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v99=v97;
var v100=lglobal["prim:tail"];
var v101=v100;
v101=runJTramp(v101);
if (typeof v101 !== "function") {
throw new Error("Cannot call non-function.");
}
var v102=new JTramp(v101, [runJTramp(v99)]);
return v102;
};
v95=v96;
lglobal["tail"]=runJTramp(v95);
})();
(function () {
var v103;
var v104=function () {
if (arguments.length > 0) {
throw new Error("Expecting at most 0 arguments.");
}
var v106=lglobal["prim:nil"];
var v107=v106;
v107=runJTramp(v107);
if (typeof v107 !== "function") {
throw new Error("Cannot call non-function.");
}
var v108=new JTramp(v107, []);
return v108;
};
v103=v104;
lglobal["nil"]=runJTramp(v103);
})();
(function () {
var v109;
var v110=function (v111) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v113=v111;
var v114=lglobal["prim:nil?"];
var v115=v114;
v115=runJTramp(v115);
if (typeof v115 !== "function") {
throw new Error("Cannot call non-function.");
}
var v116=new JTramp(v115, [runJTramp(v113)]);
return v116;
};
v109=v110;
lglobal["nil?"]=runJTramp(v109);
})();
(function () {
var v117;
var v118=function (v119) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v121=eval(runJTramp(v119));
return v121;
};
v117=v118;
lglobal["ffi"]=runJTramp(v117);
})();
(function () {
var v122;
var v123="\n  (function (x) {\n    return typeof x === \"number\";\n  })\n";
var v124=v123;
var v125=lglobal["ffi"];
var v126=v125;
v126=runJTramp(v126);
if (typeof v126 !== "function") {
throw new Error("Cannot call non-function.");
}
var v127=new JTramp(v126, [runJTramp(v124)]);
v122=v127;
lglobal["number?"]=runJTramp(v122);
})();
(function () {
var v128;
var v129="true";
var v130=v129;
var v131=lglobal["ffi"];
var v132=v131;
v132=runJTramp(v132);
if (typeof v132 !== "function") {
throw new Error("Cannot call non-function.");
}
var v133=new JTramp(v132, [runJTramp(v130)]);
v128=v133;
lglobal["true"]=runJTramp(v128);
})();
(function () {
var v134;
var v135="false";
var v136=v135;
var v137=lglobal["ffi"];
var v138=v137;
v138=runJTramp(v138);
if (typeof v138 !== "function") {
throw new Error("Cannot call non-function.");
}
var v139=new JTramp(v138, [runJTramp(v136)]);
v134=v139;
lglobal["false"]=runJTramp(v134);
})();
(function () {
var v140;
var v141="null";
var v142=v141;
var v143=lglobal["ffi"];
var v144=v143;
v144=runJTramp(v144);
if (typeof v144 !== "function") {
throw new Error("Cannot call non-function.");
}
var v145=new JTramp(v144, [runJTramp(v142)]);
v140=v145;
lglobal["null"]=runJTramp(v140);
})();
(function () {
var v146;
var v147="\n  (function (x) {\n    return x === null;\n  })\n";
var v148=v147;
var v149=lglobal["ffi"];
var v150=v149;
v150=runJTramp(v150);
if (typeof v150 !== "function") {
throw new Error("Cannot call non-function.");
}
var v151=new JTramp(v150, [runJTramp(v148)]);
v146=v151;
lglobal["null?"]=runJTramp(v146);
})();
(function () {
var v152;
var v153="(function (f, args) {\n  var as = [];\n  while (!(args instanceof Nil)) {\n    as.push(args.head);\n    args = args.tail;\n  }\n  return f.apply(undefined, as);\n})";
var v154=v153;
var v155=lglobal["ffi"];
var v156=v155;
v156=runJTramp(v156);
if (typeof v156 !== "function") {
throw new Error("Cannot call non-function.");
}
var v157=new JTramp(v156, [runJTramp(v154)]);
v152=v157;
lglobal["apply"]=runJTramp(v152);
})();
(function () {
var v158;
var v159="(function (s) { throw new Error(s); })";
var v160=v159;
var v161=lglobal["ffi"];
var v162=v161;
v162=runJTramp(v162);
if (typeof v162 !== "function") {
throw new Error("Cannot call non-function.");
}
var v163=new JTramp(v162, [runJTramp(v160)]);
v158=v163;
lglobal["error"]=runJTramp(v158);
})();
(function () {
var v164;
var v165=function () {
var v166 = new Nil();
for (var v167 = arguments.length - 1; v167 >= 0; v167--) {
  v166 = new Cons(arguments[v167], v166);
}
return v166;
};
v164=v165;
lglobal["list"]=runJTramp(v164);
})();
(function () {
var v232;
var v233=lglobal["true"];
v232=v233;
lglobal["otherwise"]=runJTramp(v232);
})();
(function () {
var v373;
var v374=function (v375,v376,v377) {
if (arguments.length < 3) {
throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
throw new Error("Expecting at most 3 arguments.");
}
var v379;
var v380=function (v381,v382) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v384=v382;
var v385=lglobal["nil?"];
var v386=v385;
v386=runJTramp(v386);
if (typeof v386 !== "function") {
throw new Error("Cannot call non-function.");
}
var v387=new JTramp(v386, [runJTramp(v384)]);
var v388;
if(runJTramp(v387)) {
v388=v381;
} else {
var v389=v381;
var v390=v382;
var v391=lglobal["head"];
var v392=v391;
v392=runJTramp(v392);
if (typeof v392 !== "function") {
throw new Error("Cannot call non-function.");
}
var v393=new JTramp(v392, [runJTramp(v390)]);
var v394=v393;
var v395=v375;
v395=runJTramp(v395);
if (typeof v395 !== "function") {
throw new Error("Cannot call non-function.");
}
var v396=new JTramp(v395, [runJTramp(v389),runJTramp(v394)]);
var v397=v396;
var v398=v382;
var v399=lglobal["tail"];
var v400=v399;
v400=runJTramp(v400);
if (typeof v400 !== "function") {
throw new Error("Cannot call non-function.");
}
var v401=new JTramp(v400, [runJTramp(v398)]);
var v402=v401;
var v403=v379;
v403=runJTramp(v403);
if (typeof v403 !== "function") {
throw new Error("Cannot call non-function.");
}
var v404=new JTramp(v403, [runJTramp(v397),runJTramp(v402)]);
v388=v404;
}
return v388;
};
var v405=v379=runJTramp(v380);
var v406=v376;
var v407=v377;
var v408=v379;
v408=runJTramp(v408);
if (typeof v408 !== "function") {
throw new Error("Cannot call non-function.");
}
var v409=new JTramp(v408, [runJTramp(v406),runJTramp(v407)]);
return v409;
};
v373=v374;
lglobal["foldl"]=runJTramp(v373);
})();
(function () {
var v410;
var v411=function (v412,v413,v414) {
if (arguments.length < 3) {
throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
throw new Error("Expecting at most 3 arguments.");
}
var v416=v414;
var v417=lglobal["nil?"];
var v418=v417;
v418=runJTramp(v418);
if (typeof v418 !== "function") {
throw new Error("Cannot call non-function.");
}
var v419=new JTramp(v418, [runJTramp(v416)]);
var v420;
if(runJTramp(v419)) {
v420=v413;
} else {
var v421=v414;
var v422=lglobal["head"];
var v423=v422;
v423=runJTramp(v423);
if (typeof v423 !== "function") {
throw new Error("Cannot call non-function.");
}
var v424=new JTramp(v423, [runJTramp(v421)]);
var v425=v424;
var v426=v412;
var v427=v413;
var v428=v414;
var v429=lglobal["tail"];
var v430=v429;
v430=runJTramp(v430);
if (typeof v430 !== "function") {
throw new Error("Cannot call non-function.");
}
var v431=new JTramp(v430, [runJTramp(v428)]);
var v432=v431;
var v433=lglobal["foldr"];
var v434=v433;
v434=runJTramp(v434);
if (typeof v434 !== "function") {
throw new Error("Cannot call non-function.");
}
var v435=new JTramp(v434, [runJTramp(v426),runJTramp(v427),runJTramp(v432)]);
var v436=v435;
var v437=v412;
v437=runJTramp(v437);
if (typeof v437 !== "function") {
throw new Error("Cannot call non-function.");
}
var v438=new JTramp(v437, [runJTramp(v425),runJTramp(v436)]);
v420=v438;
}
return v420;
};
v410=v411;
lglobal["foldr"]=runJTramp(v410);
})();
(function () {
var v439;
var v440=function (v441,v442) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v444=v442;
var v445=lglobal["nil?"];
var v446=v445;
v446=runJTramp(v446);
if (typeof v446 !== "function") {
throw new Error("Cannot call non-function.");
}
var v447=new JTramp(v446, [runJTramp(v444)]);
var v448;
if(runJTramp(v447)) {
var v449=new Nil();
v448=v449;
} else {
var v450=v442;
var v451=lglobal["head"];
var v452=v451;
v452=runJTramp(v452);
if (typeof v452 !== "function") {
throw new Error("Cannot call non-function.");
}
var v453=new JTramp(v452, [runJTramp(v450)]);
var v454=v453;
var v455=v441;
v455=runJTramp(v455);
if (typeof v455 !== "function") {
throw new Error("Cannot call non-function.");
}
var v456=new JTramp(v455, [runJTramp(v454)]);
var v457=v456;
var v458=v441;
var v459=v442;
var v460=lglobal["tail"];
var v461=v460;
v461=runJTramp(v461);
if (typeof v461 !== "function") {
throw new Error("Cannot call non-function.");
}
var v462=new JTramp(v461, [runJTramp(v459)]);
var v463=v462;
var v464=lglobal["map"];
var v465=v464;
v465=runJTramp(v465);
if (typeof v465 !== "function") {
throw new Error("Cannot call non-function.");
}
var v466=new JTramp(v465, [runJTramp(v458),runJTramp(v463)]);
var v467=v466;
var v468=lglobal["cons"];
var v469=v468;
v469=runJTramp(v469);
if (typeof v469 !== "function") {
throw new Error("Cannot call non-function.");
}
var v470=new JTramp(v469, [runJTramp(v457),runJTramp(v467)]);
v448=v470;
}
return v448;
};
v439=v440;
lglobal["map"]=runJTramp(v439);
})();
(function () {
var v471;
var v472=function (v473,v474) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v476=v474;
var v477=lglobal["nil?"];
var v478=v477;
v478=runJTramp(v478);
if (typeof v478 !== "function") {
throw new Error("Cannot call non-function.");
}
var v479=new JTramp(v478, [runJTramp(v476)]);
var v480;
if(runJTramp(v479)) {
var v481=lglobal["null"];
v480=v481;
} else {
var v482=v474;
var v483=lglobal["head"];
var v484=v483;
v484=runJTramp(v484);
if (typeof v484 !== "function") {
throw new Error("Cannot call non-function.");
}
var v485=new JTramp(v484, [runJTramp(v482)]);
var v486=v485;
var v487=v473;
v487=runJTramp(v487);
if (typeof v487 !== "function") {
throw new Error("Cannot call non-function.");
}
var v488=new JTramp(v487, [runJTramp(v486)]);
v488=runJTramp(v488);
var v489=v473;
var v490=v474;
var v491=lglobal["tail"];
var v492=v491;
v492=runJTramp(v492);
if (typeof v492 !== "function") {
throw new Error("Cannot call non-function.");
}
var v493=new JTramp(v492, [runJTramp(v490)]);
var v494=v493;
var v495=lglobal["each"];
var v496=v495;
v496=runJTramp(v496);
if (typeof v496 !== "function") {
throw new Error("Cannot call non-function.");
}
var v497=new JTramp(v496, [runJTramp(v489),runJTramp(v494)]);
v480=v497;
}
return v480;
};
v471=v472;
lglobal["each"]=runJTramp(v471);
})();
(function () {
var v498;
var v499=function (v500) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v502=lglobal["cons"];
var v503=v502;
var v504=lglobal["flip"];
var v505=v504;
v505=runJTramp(v505);
if (typeof v505 !== "function") {
throw new Error("Cannot call non-function.");
}
var v506=new JTramp(v505, [runJTramp(v503)]);
var v507=v506;
var v508=new Nil();
var v509=v508;
var v510=v500;
var v511=lglobal["foldl"];
var v512=v511;
v512=runJTramp(v512);
if (typeof v512 !== "function") {
throw new Error("Cannot call non-function.");
}
var v513=new JTramp(v512, [runJTramp(v507),runJTramp(v509),runJTramp(v510)]);
return v513;
};
v498=v499;
lglobal["reverse"]=runJTramp(v498);
})();
(function () {
var v514;
var v515=function (v516,v517) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v519=v517;
var v520=lglobal["nil?"];
var v521=v520;
v521=runJTramp(v521);
if (typeof v521 !== "function") {
throw new Error("Cannot call non-function.");
}
var v522=new JTramp(v521, [runJTramp(v519)]);
var v523;
if(runJTramp(v522)) {
var v524=new Nil();
v523=v524;
} else {
var v525=v517;
var v526=lglobal["head"];
var v527=v526;
v527=runJTramp(v527);
if (typeof v527 !== "function") {
throw new Error("Cannot call non-function.");
}
var v528=new JTramp(v527, [runJTramp(v525)]);
var v529=v528;
var v530=v516;
v530=runJTramp(v530);
if (typeof v530 !== "function") {
throw new Error("Cannot call non-function.");
}
var v531=new JTramp(v530, [runJTramp(v529)]);
var v532;
if(runJTramp(v531)) {
var v533=v517;
var v534=lglobal["head"];
var v535=v534;
v535=runJTramp(v535);
if (typeof v535 !== "function") {
throw new Error("Cannot call non-function.");
}
var v536=new JTramp(v535, [runJTramp(v533)]);
var v537=v536;
var v538=v516;
var v539=v517;
var v540=lglobal["tail"];
var v541=v540;
v541=runJTramp(v541);
if (typeof v541 !== "function") {
throw new Error("Cannot call non-function.");
}
var v542=new JTramp(v541, [runJTramp(v539)]);
var v543=v542;
var v544=lglobal["filter"];
var v545=v544;
v545=runJTramp(v545);
if (typeof v545 !== "function") {
throw new Error("Cannot call non-function.");
}
var v546=new JTramp(v545, [runJTramp(v538),runJTramp(v543)]);
var v547=v546;
var v548=lglobal["cons"];
var v549=v548;
v549=runJTramp(v549);
if (typeof v549 !== "function") {
throw new Error("Cannot call non-function.");
}
var v550=new JTramp(v549, [runJTramp(v537),runJTramp(v547)]);
v532=v550;
} else {
var v551=lglobal["otherwise"];
var v552;
if(runJTramp(v551)) {
var v553=v516;
var v554=v517;
var v555=lglobal["tail"];
var v556=v555;
v556=runJTramp(v556);
if (typeof v556 !== "function") {
throw new Error("Cannot call non-function.");
}
var v557=new JTramp(v556, [runJTramp(v554)]);
var v558=v557;
var v559=lglobal["filter"];
var v560=v559;
v560=runJTramp(v560);
if (typeof v560 !== "function") {
throw new Error("Cannot call non-function.");
}
var v561=new JTramp(v560, [runJTramp(v553),runJTramp(v558)]);
v552=v561;
} else {
var v562=null;
v552=v562;
}
v532=v552;
}
v523=v532;
}
return v523;
};
v514=v515;
lglobal["filter"]=runJTramp(v514);
})();
(function () {
var v563;
var v564=function (v565) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v567=v565;
var v568=lglobal["nil?"];
var v569=v568;
v569=runJTramp(v569);
if (typeof v569 !== "function") {
throw new Error("Cannot call non-function.");
}
var v570=new JTramp(v569, [runJTramp(v567)]);
var v571;
if(runJTramp(v570)) {
var v572=new Nil();
v571=v572;
} else {
var v573=v565;
var v574=lglobal["tail"];
var v575=v574;
v575=runJTramp(v575);
if (typeof v575 !== "function") {
throw new Error("Cannot call non-function.");
}
var v576=new JTramp(v575, [runJTramp(v573)]);
var v577=v576;
var v578=lglobal["nil?"];
var v579=v578;
v579=runJTramp(v579);
if (typeof v579 !== "function") {
throw new Error("Cannot call non-function.");
}
var v580=new JTramp(v579, [runJTramp(v577)]);
var v581;
if(runJTramp(v580)) {
var v582="Improper alist";
var v583=v582;
var v584=lglobal["error"];
var v585=v584;
v585=runJTramp(v585);
if (typeof v585 !== "function") {
throw new Error("Cannot call non-function.");
}
var v586=new JTramp(v585, [runJTramp(v583)]);
v581=v586;
} else {
var v587=lglobal["otherwise"];
var v588;
if(runJTramp(v587)) {
var v589=v565;
var v590=lglobal["head"];
var v591=v590;
v591=runJTramp(v591);
if (typeof v591 !== "function") {
throw new Error("Cannot call non-function.");
}
var v592=new JTramp(v591, [runJTramp(v589)]);
var v593=v592;
var v594=v565;
var v595=lglobal["tail"];
var v596=v595;
v596=runJTramp(v596);
if (typeof v596 !== "function") {
throw new Error("Cannot call non-function.");
}
var v597=new JTramp(v596, [runJTramp(v594)]);
var v598=v597;
var v599=lglobal["tail"];
var v600=v599;
v600=runJTramp(v600);
if (typeof v600 !== "function") {
throw new Error("Cannot call non-function.");
}
var v601=new JTramp(v600, [runJTramp(v598)]);
var v602=v601;
var v603=lglobal["a:keys"];
var v604=v603;
v604=runJTramp(v604);
if (typeof v604 !== "function") {
throw new Error("Cannot call non-function.");
}
var v605=new JTramp(v604, [runJTramp(v602)]);
var v606=v605;
var v607=lglobal["cons"];
var v608=v607;
v608=runJTramp(v608);
if (typeof v608 !== "function") {
throw new Error("Cannot call non-function.");
}
var v609=new JTramp(v608, [runJTramp(v593),runJTramp(v606)]);
v588=v609;
} else {
var v610=null;
v588=v610;
}
v581=v588;
}
v571=v581;
}
return v571;
};
v563=v564;
lglobal["a:keys"]=runJTramp(v563);
})();
(function () {
var v611;
var v612=function (v613) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v615=v613;
var v616=lglobal["nil?"];
var v617=v616;
v617=runJTramp(v617);
if (typeof v617 !== "function") {
throw new Error("Cannot call non-function.");
}
var v618=new JTramp(v617, [runJTramp(v615)]);
var v619;
if(runJTramp(v618)) {
var v620=new Nil();
v619=v620;
} else {
var v621=v613;
var v622=lglobal["tail"];
var v623=v622;
v623=runJTramp(v623);
if (typeof v623 !== "function") {
throw new Error("Cannot call non-function.");
}
var v624=new JTramp(v623, [runJTramp(v621)]);
var v625=v624;
var v626=lglobal["nil?"];
var v627=v626;
v627=runJTramp(v627);
if (typeof v627 !== "function") {
throw new Error("Cannot call non-function.");
}
var v628=new JTramp(v627, [runJTramp(v625)]);
var v629;
if(runJTramp(v628)) {
var v630="Improper alist";
var v631=v630;
var v632=lglobal["error"];
var v633=v632;
v633=runJTramp(v633);
if (typeof v633 !== "function") {
throw new Error("Cannot call non-function.");
}
var v634=new JTramp(v633, [runJTramp(v631)]);
v629=v634;
} else {
var v635=lglobal["otherwise"];
var v636;
if(runJTramp(v635)) {
var v637=v613;
var v638=lglobal["tail"];
var v639=v638;
v639=runJTramp(v639);
if (typeof v639 !== "function") {
throw new Error("Cannot call non-function.");
}
var v640=new JTramp(v639, [runJTramp(v637)]);
var v641=v640;
var v642=lglobal["head"];
var v643=v642;
v643=runJTramp(v643);
if (typeof v643 !== "function") {
throw new Error("Cannot call non-function.");
}
var v644=new JTramp(v643, [runJTramp(v641)]);
var v645=v644;
var v646=v613;
var v647=lglobal["tail"];
var v648=v647;
v648=runJTramp(v648);
if (typeof v648 !== "function") {
throw new Error("Cannot call non-function.");
}
var v649=new JTramp(v648, [runJTramp(v646)]);
var v650=v649;
var v651=lglobal["tail"];
var v652=v651;
v652=runJTramp(v652);
if (typeof v652 !== "function") {
throw new Error("Cannot call non-function.");
}
var v653=new JTramp(v652, [runJTramp(v650)]);
var v654=v653;
var v655=lglobal["a:values"];
var v656=v655;
v656=runJTramp(v656);
if (typeof v656 !== "function") {
throw new Error("Cannot call non-function.");
}
var v657=new JTramp(v656, [runJTramp(v654)]);
var v658=v657;
var v659=lglobal["cons"];
var v660=v659;
v660=runJTramp(v660);
if (typeof v660 !== "function") {
throw new Error("Cannot call non-function.");
}
var v661=new JTramp(v660, [runJTramp(v645),runJTramp(v658)]);
v636=v661;
} else {
var v662=null;
v636=v662;
}
v629=v636;
}
v619=v629;
}
return v619;
};
v611=v612;
lglobal["a:values"]=runJTramp(v611);
})();
(function () {
var v701;
var v702="(function (a, b) { return a + b; })";
var v703=v702;
var v704=lglobal["ffi"];
var v705=v704;
v705=runJTramp(v705);
if (typeof v705 !== "function") {
throw new Error("Cannot call non-function.");
}
var v706=new JTramp(v705, [runJTramp(v703)]);
v701=v706;
lglobal["js:+"]=runJTramp(v701);
})();
(function () {
var v707;
var v708=function (v709) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v711="(function (a, b) { return a ";
var v712=v711;
var v713=v709;
var v714=lglobal["js:+"];
var v715=v714;
v715=runJTramp(v715);
if (typeof v715 !== "function") {
throw new Error("Cannot call non-function.");
}
var v716=new JTramp(v715, [runJTramp(v712),runJTramp(v713)]);
var v717=v716;
var v718=" b; })";
var v719=v718;
var v720=lglobal["js:+"];
var v721=v720;
v721=runJTramp(v721);
if (typeof v721 !== "function") {
throw new Error("Cannot call non-function.");
}
var v722=new JTramp(v721, [runJTramp(v717),runJTramp(v719)]);
var v723=v722;
var v724=lglobal["ffi"];
var v725=v724;
v725=runJTramp(v725);
if (typeof v725 !== "function") {
throw new Error("Cannot call non-function.");
}
var v726=new JTramp(v725, [runJTramp(v723)]);
return v726;
};
v707=v708;
lglobal["ffi-make-binop"]=runJTramp(v707);
})();
(function () {
var v727;
var v728="-";
var v729=v728;
var v730=lglobal["ffi-make-binop"];
var v731=v730;
v731=runJTramp(v731);
if (typeof v731 !== "function") {
throw new Error("Cannot call non-function.");
}
var v732=new JTramp(v731, [runJTramp(v729)]);
v727=v732;
lglobal["js:-"]=runJTramp(v727);
})();
(function () {
var v733;
var v734="*";
var v735=v734;
var v736=lglobal["ffi-make-binop"];
var v737=v736;
v737=runJTramp(v737);
if (typeof v737 !== "function") {
throw new Error("Cannot call non-function.");
}
var v738=new JTramp(v737, [runJTramp(v735)]);
v733=v738;
lglobal["js:*"]=runJTramp(v733);
})();
(function () {
var v739;
var v740="/";
var v741=v740;
var v742=lglobal["ffi-make-binop"];
var v743=v742;
v743=runJTramp(v743);
if (typeof v743 !== "function") {
throw new Error("Cannot call non-function.");
}
var v744=new JTramp(v743, [runJTramp(v741)]);
v739=v744;
lglobal["js:/"]=runJTramp(v739);
})();
(function () {
var v745;
var v746="%";
var v747=v746;
var v748=lglobal["ffi-make-binop"];
var v749=v748;
v749=runJTramp(v749);
if (typeof v749 !== "function") {
throw new Error("Cannot call non-function.");
}
var v750=new JTramp(v749, [runJTramp(v747)]);
v745=v750;
lglobal["js:%"]=runJTramp(v745);
})();
(function () {
var v751;
var v752="<";
var v753=v752;
var v754=lglobal["ffi-make-binop"];
var v755=v754;
v755=runJTramp(v755);
if (typeof v755 !== "function") {
throw new Error("Cannot call non-function.");
}
var v756=new JTramp(v755, [runJTramp(v753)]);
v751=v756;
lglobal["js:<"]=runJTramp(v751);
})();
(function () {
var v757;
var v758=">";
var v759=v758;
var v760=lglobal["ffi-make-binop"];
var v761=v760;
v761=runJTramp(v761);
if (typeof v761 !== "function") {
throw new Error("Cannot call non-function.");
}
var v762=new JTramp(v761, [runJTramp(v759)]);
v757=v762;
lglobal["js:>"]=runJTramp(v757);
})();
(function () {
var v763;
var v764="<=";
var v765=v764;
var v766=lglobal["ffi-make-binop"];
var v767=v766;
v767=runJTramp(v767);
if (typeof v767 !== "function") {
throw new Error("Cannot call non-function.");
}
var v768=new JTramp(v767, [runJTramp(v765)]);
v763=v768;
lglobal["js:<="]=runJTramp(v763);
})();
(function () {
var v769;
var v770=">=";
var v771=v770;
var v772=lglobal["ffi-make-binop"];
var v773=v772;
v773=runJTramp(v773);
if (typeof v773 !== "function") {
throw new Error("Cannot call non-function.");
}
var v774=new JTramp(v773, [runJTramp(v771)]);
v769=v774;
lglobal["js:>="]=runJTramp(v769);
})();
(function () {
var v775;
var v776="===";
var v777=v776;
var v778=lglobal["ffi-make-binop"];
var v779=v778;
v779=runJTramp(v779);
if (typeof v779 !== "function") {
throw new Error("Cannot call non-function.");
}
var v780=new JTramp(v779, [runJTramp(v777)]);
v775=v780;
lglobal["js:==="]=runJTramp(v775);
})();
(function () {
var v781;
var v782="(function (a) { return \"\" + a; })";
var v783=v782;
var v784=lglobal["ffi"];
var v785=v784;
v785=runJTramp(v785);
if (typeof v785 !== "function") {
throw new Error("Cannot call non-function.");
}
var v786=new JTramp(v785, [runJTramp(v783)]);
v781=v786;
lglobal["js:toString"]=runJTramp(v781);
})();
(function () {
var v787;
var v788="(function (a) { return +a; })";
var v789=v788;
var v790=lglobal["ffi"];
var v791=v790;
v791=runJTramp(v791);
if (typeof v791 !== "function") {
throw new Error("Cannot call non-function.");
}
var v792=new JTramp(v791, [runJTramp(v789)]);
v787=v792;
lglobal["js:toNum"]=runJTramp(v787);
})();
(function () {
var v793;
var v794="(function (a) { return isNaN(a); })";
var v795=v794;
var v796=lglobal["ffi"];
var v797=v796;
v797=runJTramp(v797);
if (typeof v797 !== "function") {
throw new Error("Cannot call non-function.");
}
var v798=new JTramp(v797, [runJTramp(v795)]);
v793=v798;
lglobal["NaN?"]=runJTramp(v793);
})();
(function () {
var v799;
var v800=lglobal["js:/"];
v799=v800;
lglobal["/"]=runJTramp(v799);
})();
(function () {
var v801;
var v802=lglobal["js:%"];
v801=v802;
lglobal["%"]=runJTramp(v801);
})();
(function () {
var v803;
var v804=lglobal["js:<"];
v803=v804;
lglobal["<"]=runJTramp(v803);
})();
(function () {
var v805;
var v806=lglobal["js:>"];
v805=v806;
lglobal[">"]=runJTramp(v805);
})();
(function () {
var v807;
var v808=lglobal["js:<="];
v807=v808;
lglobal["<="]=runJTramp(v807);
})();
(function () {
var v809;
var v810=lglobal["js:>="];
v809=v810;
lglobal[">="]=runJTramp(v809);
})();
(function () {
var v811;
var v812=lglobal["js:==="];
v811=v812;
lglobal["="]=runJTramp(v811);
})();
(function () {
var v813;
var v814="(function () {\n  return Array.prototype.join.call(arguments, '');\n})";
var v815=v814;
var v816=lglobal["ffi"];
var v817=v816;
v817=runJTramp(v817);
if (typeof v817 !== "function") {
throw new Error("Cannot call non-function.");
}
var v818=new JTramp(v817, [runJTramp(v815)]);
v813=v818;
lglobal["++"]=runJTramp(v813);
})();
(function () {
var v819;
var v820=function () {
var v821 = new Nil();
for (var v822 = arguments.length - 1; v822 >= 0; v822--) {
  v821 = new Cons(arguments[v822], v821);
}
var v823=lglobal["js:+"];
var v824=v823;
var v825=0;
var v826=v825;
var v827=v821;
var v828=lglobal["foldl"];
var v829=v828;
v829=runJTramp(v829);
if (typeof v829 !== "function") {
throw new Error("Cannot call non-function.");
}
var v830=new JTramp(v829, [runJTramp(v824),runJTramp(v826),runJTramp(v827)]);
return v830;
};
v819=v820;
lglobal["+"]=runJTramp(v819);
})();
(function () {
var v831;
var v832=function () {
var v833 = new Nil();
for (var v834 = arguments.length - 1; v834 >= 0; v834--) {
  v833 = new Cons(arguments[v834], v833);
}
var v835=lglobal["js:*"];
var v836=v835;
var v837=1;
var v838=v837;
var v839=v833;
var v840=lglobal["foldl"];
var v841=v840;
v841=runJTramp(v841);
if (typeof v841 !== "function") {
throw new Error("Cannot call non-function.");
}
var v842=new JTramp(v841, [runJTramp(v836),runJTramp(v838),runJTramp(v839)]);
return v842;
};
v831=v832;
lglobal["*"]=runJTramp(v831);
})();
(function () {
var v843;
var v844=function (v845) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
var v846 = new Nil();
for (var v847 = arguments.length - 1; v847 >= 1; v847--) {
  v846 = new Cons(arguments[v847], v846);
}
var v848=v846;
var v849=lglobal["nil?"];
var v850=v849;
v850=runJTramp(v850);
if (typeof v850 !== "function") {
throw new Error("Cannot call non-function.");
}
var v851=new JTramp(v850, [runJTramp(v848)]);
var v852;
if(runJTramp(v851)) {
var v853=0;
var v854=v853;
var v855=v845;
var v856=lglobal["js:-"];
var v857=v856;
v857=runJTramp(v857);
if (typeof v857 !== "function") {
throw new Error("Cannot call non-function.");
}
var v858=new JTramp(v857, [runJTramp(v854),runJTramp(v855)]);
v852=v858;
} else {
var v859=v845;
var v860=lglobal["+"];
var v861=v860;
var v862=v846;
var v863=lglobal["apply"];
var v864=v863;
v864=runJTramp(v864);
if (typeof v864 !== "function") {
throw new Error("Cannot call non-function.");
}
var v865=new JTramp(v864, [runJTramp(v861),runJTramp(v862)]);
var v866=v865;
var v867=lglobal["js:-"];
var v868=v867;
v868=runJTramp(v868);
if (typeof v868 !== "function") {
throw new Error("Cannot call non-function.");
}
var v869=new JTramp(v868, [runJTramp(v859),runJTramp(v866)]);
v852=v869;
}
return v852;
};
v843=v844;
lglobal["-"]=runJTramp(v843);
})();
(function () {
var v870;
var v871=function (v872,v873) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v875=lglobal["cons"];
var v876=v875;
var v877=v873;
var v878=v872;
var v879=lglobal["foldr"];
var v880=v879;
v880=runJTramp(v880);
if (typeof v880 !== "function") {
throw new Error("Cannot call non-function.");
}
var v881=new JTramp(v880, [runJTramp(v876),runJTramp(v877),runJTramp(v878)]);
return v881;
};
v870=v871;
lglobal["append2"]=runJTramp(v870);
})();
(function () {
var v882;
var v883=function () {
var v884 = new Nil();
for (var v885 = arguments.length - 1; v885 >= 0; v885--) {
  v884 = new Cons(arguments[v885], v884);
}
var v886=lglobal["append2"];
var v887=v886;
var v888=new Nil();
var v889=v888;
var v890=v884;
var v891=lglobal["foldr"];
var v892=v891;
v892=runJTramp(v892);
if (typeof v892 !== "function") {
throw new Error("Cannot call non-function.");
}
var v893=new JTramp(v892, [runJTramp(v887),runJTramp(v889),runJTramp(v890)]);
return v893;
};
v882=v883;
lglobal["append"]=runJTramp(v882);
})();
(function () {
var v894;
var v895=function (v896,v897) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v899=lglobal["append"];
var v900=v899;
var v901=v896;
var v902=v897;
var v903=lglobal["map"];
var v904=v903;
v904=runJTramp(v904);
if (typeof v904 !== "function") {
throw new Error("Cannot call non-function.");
}
var v905=new JTramp(v904, [runJTramp(v901),runJTramp(v902)]);
var v906=v905;
var v907=lglobal["apply"];
var v908=v907;
v908=runJTramp(v908);
if (typeof v908 !== "function") {
throw new Error("Cannot call non-function.");
}
var v909=new JTramp(v908, [runJTramp(v900),runJTramp(v906)]);
return v909;
};
v894=v895;
lglobal["map-append"]=runJTramp(v894);
})();
(function () {
var v910;
var v911=function (v912,v913) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v915=v913;
var v916=lglobal["nil?"];
var v917=v916;
v917=runJTramp(v917);
if (typeof v917 !== "function") {
throw new Error("Cannot call non-function.");
}
var v918=new JTramp(v917, [runJTramp(v915)]);
var v919;
if(runJTramp(v918)) {
var v920=new Nil();
v919=v920;
} else {
var v921=v913;
var v922=lglobal["tail"];
var v923=v922;
v923=runJTramp(v923);
if (typeof v923 !== "function") {
throw new Error("Cannot call non-function.");
}
var v924=new JTramp(v923, [runJTramp(v921)]);
var v925=v924;
var v926=lglobal["nil?"];
var v927=v926;
v927=runJTramp(v927);
if (typeof v927 !== "function") {
throw new Error("Cannot call non-function.");
}
var v928=new JTramp(v927, [runJTramp(v925)]);
var v929;
if(runJTramp(v928)) {
v929=v913;
} else {
var v930=lglobal["otherwise"];
var v931;
if(runJTramp(v930)) {
var v932=v913;
var v933=lglobal["head"];
var v934=v933;
v934=runJTramp(v934);
if (typeof v934 !== "function") {
throw new Error("Cannot call non-function.");
}
var v935=new JTramp(v934, [runJTramp(v932)]);
var v936=v935;
var v937=v912;
var v938=v912;
var v939=v913;
var v940=lglobal["tail"];
var v941=v940;
v941=runJTramp(v941);
if (typeof v941 !== "function") {
throw new Error("Cannot call non-function.");
}
var v942=new JTramp(v941, [runJTramp(v939)]);
var v943=v942;
var v944=lglobal["intercalate"];
var v945=v944;
v945=runJTramp(v945);
if (typeof v945 !== "function") {
throw new Error("Cannot call non-function.");
}
var v946=new JTramp(v945, [runJTramp(v938),runJTramp(v943)]);
var v947=v946;
var v948=lglobal["cons"];
var v949=v948;
v949=runJTramp(v949);
if (typeof v949 !== "function") {
throw new Error("Cannot call non-function.");
}
var v950=new JTramp(v949, [runJTramp(v937),runJTramp(v947)]);
var v951=v950;
var v952=lglobal["cons"];
var v953=v952;
v953=runJTramp(v953);
if (typeof v953 !== "function") {
throw new Error("Cannot call non-function.");
}
var v954=new JTramp(v953, [runJTramp(v936),runJTramp(v951)]);
v931=v954;
} else {
var v955=null;
v931=v955;
}
v929=v931;
}
v919=v929;
}
return v919;
};
v910=v911;
lglobal["intercalate"]=runJTramp(v910);
})();
(function () {
var v956;
var v957=0;
var v958=v957;
var v959=function (v960) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v962=function () {
if (arguments.length > 0) {
throw new Error("Expecting at most 0 arguments.");
}
var v964=1;
var v965=v964;
var v966=v960;
var v967=lglobal["+"];
var v968=v967;
v968=runJTramp(v968);
if (typeof v968 !== "function") {
throw new Error("Cannot call non-function.");
}
var v969=new JTramp(v968, [runJTramp(v965),runJTramp(v966)]);
var v970=v960=runJTramp(v969);
v970=runJTramp(v970);
var v971="#gensym#";
var v972=v971;
var v973=v960;
var v974=lglobal["++"];
var v975=v974;
v975=runJTramp(v975);
if (typeof v975 !== "function") {
throw new Error("Cannot call non-function.");
}
var v976=new JTramp(v975, [runJTramp(v972),runJTramp(v973)]);
return v976;
};
return v962;
};
var v977=v959;
v977=runJTramp(v977);
if (typeof v977 !== "function") {
throw new Error("Cannot call non-function.");
}
var v978=new JTramp(v977, [runJTramp(v958)]);
v956=v978;
lglobal["gensym"]=runJTramp(v956);
})();
(function () {
var v979;
var v980="(function (s) {\n  return s.length;\n})";
var v981=v980;
var v982=lglobal["ffi"];
var v983=v982;
v983=runJTramp(v983);
if (typeof v983 !== "function") {
throw new Error("Cannot call non-function.");
}
var v984=new JTramp(v983, [runJTramp(v981)]);
v979=v984;
lglobal["s:length"]=runJTramp(v979);
})();
(function () {
var v985;
var v986="(function (s, i) {\n  return s.charAt(i);\n})";
var v987=v986;
var v988=lglobal["ffi"];
var v989=v988;
v989=runJTramp(v989);
if (typeof v989 !== "function") {
throw new Error("Cannot call non-function.");
}
var v990=new JTramp(v989, [runJTramp(v987)]);
v985=v990;
lglobal["s:charAt"]=runJTramp(v985);
})();
(function () {
var v991;
var v992="(function (s, i) {\n  return s.charCodeAt(i);\n})";
var v993=v992;
var v994=lglobal["ffi"];
var v995=v994;
v995=runJTramp(v995);
if (typeof v995 !== "function") {
throw new Error("Cannot call non-function.");
}
var v996=new JTramp(v995, [runJTramp(v993)]);
v991=v996;
lglobal["s:charCodeAt"]=runJTramp(v991);
})();
(function () {
var v997;
var v998="(function (s) {\n  var args = _.toArray(arguments);\n  args.shift();\n  return s.slice.apply(s, args);\n})";
var v999=v998;
var v1000=lglobal["ffi"];
var v1001=v1000;
v1001=runJTramp(v1001);
if (typeof v1001 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1002=new JTramp(v1001, [runJTramp(v999)]);
v997=v1002;
lglobal["s:slice"]=runJTramp(v997);
})();
(function () {
var v1003;
var v1004="(function (s) {\n  var args = _.toArray(arguments);\n  args.shift();\n  return s.indexOf.apply(s, args);\n})";
var v1005=v1004;
var v1006=lglobal["ffi"];
var v1007=v1006;
v1007=runJTramp(v1007);
if (typeof v1007 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1008=new JTramp(v1007, [runJTramp(v1005)]);
v1003=v1008;
lglobal["s:indexOf"]=runJTramp(v1003);
})();
(function () {
var v1009;
var v1010="String.fromCharCode";
var v1011=v1010;
var v1012=lglobal["ffi"];
var v1013=v1012;
v1013=runJTramp(v1013);
if (typeof v1013 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1014=new JTramp(v1013, [runJTramp(v1011)]);
v1009=v1014;
lglobal["s:fromCharCode"]=runJTramp(v1009);
})();
(function () {
var v1015;
var v1016="(function (s) {\n  var args = _.toArray(arguments);\n  args.shift();\n  var ret = new Nil();\n  var split = s.split.apply(s, args);\n  for (var i = split.length - 1; i >= 0; i--) {\n    ret = new Cons(split[i], ret);\n  }\n  return ret;\n})";
var v1017=v1016;
var v1018=lglobal["ffi"];
var v1019=v1018;
v1019=runJTramp(v1019);
if (typeof v1019 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1020=new JTramp(v1019, [runJTramp(v1017)]);
v1015=v1020;
lglobal["s:split"]=runJTramp(v1015);
})();
(function () {
var v1021;
var v1022=function (v1023,v1024) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v1026=v1024;
var v1027=lglobal["nil?"];
var v1028=v1027;
v1028=runJTramp(v1028);
if (typeof v1028 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1029=new JTramp(v1028, [runJTramp(v1026)]);
var v1030;
if(runJTramp(v1029)) {
var v1031="";
v1030=v1031;
} else {
var v1032=v1024;
var v1033=lglobal["tail"];
var v1034=v1033;
v1034=runJTramp(v1034);
if (typeof v1034 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1035=new JTramp(v1034, [runJTramp(v1032)]);
var v1036=v1035;
var v1037=lglobal["nil?"];
var v1038=v1037;
v1038=runJTramp(v1038);
if (typeof v1038 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1039=new JTramp(v1038, [runJTramp(v1036)]);
var v1040;
if(runJTramp(v1039)) {
var v1041=v1024;
var v1042=lglobal["head"];
var v1043=v1042;
v1043=runJTramp(v1043);
if (typeof v1043 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1044=new JTramp(v1043, [runJTramp(v1041)]);
v1040=v1044;
} else {
var v1045=lglobal["otherwise"];
var v1046;
if(runJTramp(v1045)) {
var v1047=v1024;
var v1048=lglobal["head"];
var v1049=v1048;
v1049=runJTramp(v1049);
if (typeof v1049 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1050=new JTramp(v1049, [runJTramp(v1047)]);
var v1051=v1050;
var v1052=v1023;
var v1053=v1023;
var v1054=v1024;
var v1055=lglobal["tail"];
var v1056=v1055;
v1056=runJTramp(v1056);
if (typeof v1056 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1057=new JTramp(v1056, [runJTramp(v1054)]);
var v1058=v1057;
var v1059=lglobal["s:join"];
var v1060=v1059;
v1060=runJTramp(v1060);
if (typeof v1060 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1061=new JTramp(v1060, [runJTramp(v1053),runJTramp(v1058)]);
var v1062=v1061;
var v1063=lglobal["++"];
var v1064=v1063;
v1064=runJTramp(v1064);
if (typeof v1064 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1065=new JTramp(v1064, [runJTramp(v1051),runJTramp(v1052),runJTramp(v1062)]);
v1046=v1065;
} else {
var v1066=null;
v1046=v1066;
}
v1040=v1046;
}
v1030=v1040;
}
return v1030;
};
v1021=v1022;
lglobal["s:join"]=runJTramp(v1021);
})();
(function () {
var v1067;
var v1068="function Dict () {}; Dict";
var v1069=v1068;
var v1070=lglobal["ffi"];
var v1071=v1070;
v1071=runJTramp(v1071);
if (typeof v1071 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1072=new JTramp(v1071, [runJTramp(v1069)]);
v1067=v1072;
lglobal["js:dictConst"]=runJTramp(v1067);
})();
(function () {
var v1073;
var v1074=lglobal["js:dictConst"];
var v1075=v1074;
var v1076="(function (con) {\n  return function () { return new con(); };\n})";
var v1077=v1076;
var v1078=lglobal["ffi"];
var v1079=v1078;
v1079=runJTramp(v1079);
if (typeof v1079 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1080=new JTramp(v1079, [runJTramp(v1077)]);
var v1081=v1080;
v1081=runJTramp(v1081);
if (typeof v1081 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1082=new JTramp(v1081, [runJTramp(v1075)]);
v1073=v1082;
lglobal["js:makeDict"]=runJTramp(v1073);
})();
(function () {
var v1083;
var v1084=lglobal["js:dictConst"];
var v1085=v1084;
var v1086="(function (con) {\n  return function (a) { return a instanceof con; };\n})";
var v1087=v1086;
var v1088=lglobal["ffi"];
var v1089=v1088;
v1089=runJTramp(v1089);
if (typeof v1089 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1090=new JTramp(v1089, [runJTramp(v1087)]);
var v1091=v1090;
v1091=runJTramp(v1091);
if (typeof v1091 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1092=new JTramp(v1091, [runJTramp(v1085)]);
v1083=v1092;
lglobal["dict?"]=runJTramp(v1083);
})();
(function () {
var v1093;
var v1094="(function (o, k, def) {\n  if (_.has(o, k)) {\n    return o[k];\n  } else if (def === undefined) {\n    throw new Error(\"Key error: \" + k);\n  } else {\n    return def;\n  }\n})";
var v1095=v1094;
var v1096=lglobal["ffi"];
var v1097=v1096;
v1097=runJTramp(v1097);
if (typeof v1097 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1098=new JTramp(v1097, [runJTramp(v1095)]);
v1093=v1098;
lglobal["dict:get"]=runJTramp(v1093);
})();
(function () {
var v1099;
var v1100="(function (o, k, v) {\n  if (v === undefined) {\n    throw new Error(\"Not enough arguments passed to dict:set!\");\n  }\n  o[k] = v;\n  return null;\n})";
var v1101=v1100;
var v1102=lglobal["ffi"];
var v1103=v1102;
v1103=runJTramp(v1103);
if (typeof v1103 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1104=new JTramp(v1103, [runJTramp(v1101)]);
v1099=v1104;
lglobal["dict:set!"]=runJTramp(v1099);
})();
(function () {
var v1105;
var v1106="(function (o, k) {\n  return _.has(o, k);\n})";
var v1107=v1106;
var v1108=lglobal["ffi"];
var v1109=v1108;
v1109=runJTramp(v1109);
if (typeof v1109 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1110=new JTramp(v1109, [runJTramp(v1107)]);
v1105=v1110;
lglobal["dict:has?"]=runJTramp(v1105);
})();
(function () {
var v1111;
var v1112=function () {
var v1113 = new Nil();
for (var v1115 = arguments.length - 1; v1115 >= 0; v1115--) {
  v1113 = new Cons(arguments[v1115], v1113);
}
var v1114;
var v1116=function (v1117,v1118) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v1120=v1118;
var v1121=lglobal["nil?"];
var v1122=v1121;
v1122=runJTramp(v1122);
if (typeof v1122 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1123=new JTramp(v1122, [runJTramp(v1120)]);
var v1124=v1123;
var v1125=lglobal["not"];
var v1126=v1125;
v1126=runJTramp(v1126);
if (typeof v1126 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1127=new JTramp(v1126, [runJTramp(v1124)]);
var v1128;
if(runJTramp(v1127)) {
var v1129=v1117;
var v1130=v1118;
var v1131=lglobal["head"];
var v1132=v1131;
v1132=runJTramp(v1132);
if (typeof v1132 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1133=new JTramp(v1132, [runJTramp(v1130)]);
var v1134=v1133;
var v1135=v1118;
var v1136=lglobal["tail"];
var v1137=v1136;
v1137=runJTramp(v1137);
if (typeof v1137 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1138=new JTramp(v1137, [runJTramp(v1135)]);
var v1139=v1138;
var v1140=lglobal["head"];
var v1141=v1140;
v1141=runJTramp(v1141);
if (typeof v1141 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1142=new JTramp(v1141, [runJTramp(v1139)]);
var v1143=v1142;
var v1144=lglobal["dict:set!"];
var v1145=v1144;
v1145=runJTramp(v1145);
if (typeof v1145 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1146=new JTramp(v1145, [runJTramp(v1129),runJTramp(v1134),runJTramp(v1143)]);
v1146=runJTramp(v1146);
var v1147=v1117;
var v1148=v1118;
var v1149=lglobal["tail"];
var v1150=v1149;
v1150=runJTramp(v1150);
if (typeof v1150 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1151=new JTramp(v1150, [runJTramp(v1148)]);
var v1152=v1151;
var v1153=lglobal["tail"];
var v1154=v1153;
v1154=runJTramp(v1154);
if (typeof v1154 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1155=new JTramp(v1154, [runJTramp(v1152)]);
var v1156=v1155;
var v1157=v1114;
v1157=runJTramp(v1157);
if (typeof v1157 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1158=new JTramp(v1157, [runJTramp(v1147),runJTramp(v1156)]);
v1128=v1158;
} else {
var v1159=null;
v1128=v1159;
}
return v1128;
};
var v1160=v1114=runJTramp(v1116);
var v1161=lglobal["js:makeDict"];
var v1162=v1161;
v1162=runJTramp(v1162);
if (typeof v1162 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1163=new JTramp(v1162, []);
var v1164=v1163;
var v1165=function (v1166) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v1168=v1166;
var v1169=v1113;
var v1170=v1114;
v1170=runJTramp(v1170);
if (typeof v1170 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1171=new JTramp(v1170, [runJTramp(v1168),runJTramp(v1169)]);
v1171=runJTramp(v1171);
return v1166;
};
var v1172=v1165;
v1172=runJTramp(v1172);
if (typeof v1172 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1173=new JTramp(v1172, [runJTramp(v1164)]);
return v1173;
};
v1111=v1112;
lglobal["dict"]=runJTramp(v1111);
})();
(function () {
var v1278;
var v1279=function (v1280) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v1282;
if(runJTramp(v1280)) {
var v1283=lglobal["false"];
v1282=v1283;
} else {
var v1284=lglobal["true"];
v1282=v1284;
}
return v1282;
};
v1278=v1279;
lglobal["not"]=runJTramp(v1278);
})();
(function () {
var v1285;
var v1286=function (v1287,v1288) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v1290=v1287;
var v1291=v1288;
var v1292=lglobal["="];
var v1293=v1292;
v1293=runJTramp(v1293);
if (typeof v1293 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1294=new JTramp(v1293, [runJTramp(v1290),runJTramp(v1291)]);
var v1295=v1294;
var v1296=lglobal["not"];
var v1297=v1296;
v1297=runJTramp(v1297);
if (typeof v1297 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1298=new JTramp(v1297, [runJTramp(v1295)]);
return v1298;
};
v1285=v1286;
lglobal["!="]=runJTramp(v1285);
})();
(function () {
var v1299;
var v1300=function (v1301) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v1303=v1301;
var v1304=lglobal["head"];
var v1305=v1304;
v1305=runJTramp(v1305);
if (typeof v1305 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1306=new JTramp(v1305, [runJTramp(v1303)]);
var v1307=v1306;
var v1308=function (v1309) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v1311;
if(runJTramp(v1309)) {
var v1312=v1301;
var v1313=lglobal["tail"];
var v1314=v1313;
v1314=runJTramp(v1314);
if (typeof v1314 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1315=new JTramp(v1314, [runJTramp(v1312)]);
var v1316=v1315;
var v1317=lglobal["all"];
var v1318=v1317;
v1318=runJTramp(v1318);
if (typeof v1318 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1319=new JTramp(v1318, [runJTramp(v1316)]);
v1311=v1319;
} else {
v1311=v1309;
}
return v1311;
};
var v1320=v1308;
v1320=runJTramp(v1320);
if (typeof v1320 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1321=new JTramp(v1320, [runJTramp(v1307)]);
return v1321;
};
v1299=v1300;
lglobal["all"]=runJTramp(v1299);
})();
(function () {
var v1322;
var v1323=function (v1324) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v1326=v1324;
var v1327=lglobal["head"];
var v1328=v1327;
v1328=runJTramp(v1328);
if (typeof v1328 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1329=new JTramp(v1328, [runJTramp(v1326)]);
var v1330=v1329;
var v1331=function (v1332) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v1334;
if(runJTramp(v1332)) {
v1334=v1332;
} else {
var v1335=v1324;
var v1336=lglobal["tail"];
var v1337=v1336;
v1337=runJTramp(v1337);
if (typeof v1337 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1338=new JTramp(v1337, [runJTramp(v1335)]);
var v1339=v1338;
var v1340=lglobal["any"];
var v1341=v1340;
v1341=runJTramp(v1341);
if (typeof v1341 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1342=new JTramp(v1341, [runJTramp(v1339)]);
v1334=v1342;
}
return v1334;
};
var v1343=v1331;
v1343=runJTramp(v1343);
if (typeof v1343 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1344=new JTramp(v1343, [runJTramp(v1330)]);
return v1344;
};
v1322=v1323;
lglobal["any"]=runJTramp(v1322);
})();
(function () {
var v1345;
var v1346=function (v1347) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v1349;
var v1350=function (v1351,v1352) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v1354=v1351;
var v1355=lglobal["nil?"];
var v1356=v1355;
v1356=runJTramp(v1356);
if (typeof v1356 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1357=new JTramp(v1356, [runJTramp(v1354)]);
var v1358;
if(runJTramp(v1357)) {
v1358=v1352;
} else {
var v1359=v1351;
var v1360=lglobal["tail"];
var v1361=v1360;
v1361=runJTramp(v1361);
if (typeof v1361 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1362=new JTramp(v1361, [runJTramp(v1359)]);
var v1363=v1362;
var v1364=v1352;
var v1365=1;
var v1366=v1365;
var v1367=lglobal["+"];
var v1368=v1367;
v1368=runJTramp(v1368);
if (typeof v1368 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1369=new JTramp(v1368, [runJTramp(v1364),runJTramp(v1366)]);
var v1370=v1369;
var v1371=v1349;
v1371=runJTramp(v1371);
if (typeof v1371 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1372=new JTramp(v1371, [runJTramp(v1363),runJTramp(v1370)]);
v1358=v1372;
}
return v1358;
};
var v1373=v1349=runJTramp(v1350);
var v1374=v1347;
var v1375=0;
var v1376=v1375;
var v1377=v1349;
v1377=runJTramp(v1377);
if (typeof v1377 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1378=new JTramp(v1377, [runJTramp(v1374),runJTramp(v1376)]);
return v1378;
};
v1345=v1346;
lglobal["length"]=runJTramp(v1345);
})();
(function () {
var v1379;
var v1380=function (v1381,v1382) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v1384=v1382;
var v1385=0;
var v1386=v1385;
var v1387=lglobal["<"];
var v1388=v1387;
v1388=runJTramp(v1388);
if (typeof v1388 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1389=new JTramp(v1388, [runJTramp(v1384),runJTramp(v1386)]);
var v1390;
if(runJTramp(v1389)) {
var v1391=v1381;
var v1392=v1382;
var v1393=v1381;
var v1394=lglobal["length"];
var v1395=v1394;
v1395=runJTramp(v1395);
if (typeof v1395 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1396=new JTramp(v1395, [runJTramp(v1393)]);
var v1397=v1396;
var v1398=lglobal["+"];
var v1399=v1398;
v1399=runJTramp(v1399);
if (typeof v1399 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1400=new JTramp(v1399, [runJTramp(v1392),runJTramp(v1397)]);
var v1401=v1400;
var v1402=lglobal["nth"];
var v1403=v1402;
v1403=runJTramp(v1403);
if (typeof v1403 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1404=new JTramp(v1403, [runJTramp(v1391),runJTramp(v1401)]);
v1390=v1404;
} else {
var v1405=v1381;
var v1406=lglobal["nil?"];
var v1407=v1406;
v1407=runJTramp(v1407);
if (typeof v1407 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1408=new JTramp(v1407, [runJTramp(v1405)]);
var v1409;
if(runJTramp(v1408)) {
var v1410="List index out of bounds.";
var v1411=v1410;
var v1412=lglobal["error"];
var v1413=v1412;
v1413=runJTramp(v1413);
if (typeof v1413 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1414=new JTramp(v1413, [runJTramp(v1411)]);
v1409=v1414;
} else {
var v1415=v1382;
var v1416=0;
var v1417=v1416;
var v1418=lglobal["="];
var v1419=v1418;
v1419=runJTramp(v1419);
if (typeof v1419 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1420=new JTramp(v1419, [runJTramp(v1415),runJTramp(v1417)]);
var v1421;
if(runJTramp(v1420)) {
var v1422=v1381;
var v1423=lglobal["head"];
var v1424=v1423;
v1424=runJTramp(v1424);
if (typeof v1424 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1425=new JTramp(v1424, [runJTramp(v1422)]);
v1421=v1425;
} else {
var v1426=lglobal["otherwise"];
var v1427;
if(runJTramp(v1426)) {
var v1428=v1381;
var v1429=lglobal["tail"];
var v1430=v1429;
v1430=runJTramp(v1430);
if (typeof v1430 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1431=new JTramp(v1430, [runJTramp(v1428)]);
var v1432=v1431;
var v1433=v1382;
var v1434=1;
var v1435=v1434;
var v1436=lglobal["-"];
var v1437=v1436;
v1437=runJTramp(v1437);
if (typeof v1437 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1438=new JTramp(v1437, [runJTramp(v1433),runJTramp(v1435)]);
var v1439=v1438;
var v1440=lglobal["nth"];
var v1441=v1440;
v1441=runJTramp(v1441);
if (typeof v1441 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1442=new JTramp(v1441, [runJTramp(v1432),runJTramp(v1439)]);
v1427=v1442;
} else {
var v1443=null;
v1427=v1443;
}
v1421=v1427;
}
v1409=v1421;
}
v1390=v1409;
}
return v1390;
};
v1379=v1380;
lglobal["nth"]=runJTramp(v1379);
})();
(function () {
var v1444;
var v1445=function (v1446) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
var v1447 = new Nil();
for (var v1448 = arguments.length - 1; v1448 >= 1; v1448--) {
  v1447 = new Cons(arguments[v1448], v1447);
}
var v1449=v1447;
var v1450=lglobal["nil?"];
var v1451=v1450;
v1451=runJTramp(v1451);
if (typeof v1451 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1452=new JTramp(v1451, [runJTramp(v1449)]);
var v1453;
if(runJTramp(v1452)) {
v1453=v1446;
} else {
var v1454=lglobal["."];
var v1455=v1454;
var v1456=v1447;
var v1457=lglobal["apply"];
var v1458=v1457;
v1458=runJTramp(v1458);
if (typeof v1458 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1459=new JTramp(v1458, [runJTramp(v1455),runJTramp(v1456)]);
var v1460=v1459;
var v1461=function (v1462) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v1464=function () {
var v1465 = new Nil();
for (var v1466 = arguments.length - 1; v1466 >= 0; v1466--) {
  v1465 = new Cons(arguments[v1466], v1465);
}
var v1467=v1462;
var v1468=v1465;
var v1469=lglobal["apply"];
var v1470=v1469;
v1470=runJTramp(v1470);
if (typeof v1470 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1471=new JTramp(v1470, [runJTramp(v1467),runJTramp(v1468)]);
var v1472=v1471;
var v1473=v1446;
v1473=runJTramp(v1473);
if (typeof v1473 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1474=new JTramp(v1473, [runJTramp(v1472)]);
return v1474;
};
return v1464;
};
var v1475=v1461;
v1475=runJTramp(v1475);
if (typeof v1475 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1476=new JTramp(v1475, [runJTramp(v1460)]);
v1453=v1476;
}
return v1453;
};
v1444=v1445;
lglobal["."]=runJTramp(v1444);
})();
(function () {
var v1477;
var v1478=function (v1479) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v1481=function (v1482) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v1484=function (v1485) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v1487=v1482;
var v1488=v1485;
var v1489=v1479;
v1489=runJTramp(v1489);
if (typeof v1489 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1490=new JTramp(v1489, [runJTramp(v1487),runJTramp(v1488)]);
return v1490;
};
return v1484;
};
return v1481;
};
v1477=v1478;
lglobal["curry"]=runJTramp(v1477);
})();
(function () {
var v1491;
var v1492=function (v1493) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v1495=function (v1496,v1497) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v1499=v1497;
var v1500=v1496;
var v1501=v1493;
v1501=runJTramp(v1501);
if (typeof v1501 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1502=new JTramp(v1501, [runJTramp(v1500)]);
var v1503=v1502;
v1503=runJTramp(v1503);
if (typeof v1503 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1504=new JTramp(v1503, [runJTramp(v1499)]);
return v1504;
};
return v1495;
};
v1491=v1492;
lglobal["uncurry"]=runJTramp(v1491);
})();
(function () {
var v1505;
var v1506=function (v1507) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
var v1508 = new Nil();
for (var v1509 = arguments.length - 1; v1509 >= 1; v1509--) {
  v1508 = new Cons(arguments[v1509], v1508);
}
var v1510=function () {
var v1511 = new Nil();
for (var v1512 = arguments.length - 1; v1512 >= 0; v1512--) {
  v1511 = new Cons(arguments[v1512], v1511);
}
var v1513=v1507;
var v1514=v1508;
var v1515=v1511;
var v1516=lglobal["append"];
var v1517=v1516;
v1517=runJTramp(v1517);
if (typeof v1517 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1518=new JTramp(v1517, [runJTramp(v1514),runJTramp(v1515)]);
var v1519=v1518;
var v1520=lglobal["apply"];
var v1521=v1520;
v1521=runJTramp(v1521);
if (typeof v1521 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1522=new JTramp(v1521, [runJTramp(v1513),runJTramp(v1519)]);
return v1522;
};
return v1510;
};
v1505=v1506;
lglobal["partial"]=runJTramp(v1505);
})();
(function () {
var v1523;
var v1524=function (v1525) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v1527=function (v1528,v1529) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v1531=v1529;
var v1532=v1528;
var v1533=v1525;
v1533=runJTramp(v1533);
if (typeof v1533 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1534=new JTramp(v1533, [runJTramp(v1531),runJTramp(v1532)]);
return v1534;
};
return v1527;
};
v1523=v1524;
lglobal["flip"]=runJTramp(v1523);
})();
(function () {
var v1535;
var v1536=function (v1537) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
var v1538 = new Nil();
for (var v1539 = arguments.length - 1; v1539 >= 1; v1539--) {
  v1538 = new Cons(arguments[v1539], v1538);
}
var v1540=v1537;
var v1541=v1538;
var v1542=lglobal["apply"];
var v1543=v1542;
v1543=runJTramp(v1543);
if (typeof v1543 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1544=new JTramp(v1543, [runJTramp(v1540),runJTramp(v1541)]);
return v1544;
};
v1535=v1536;
lglobal["$"]=runJTramp(v1535);
})();
(function () {
var v1545;
var v1546=function (v1547) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
var v1548 = new Nil();
for (var v1549 = arguments.length - 1; v1549 >= 1; v1549--) {
  v1548 = new Cons(arguments[v1549], v1548);
}
var v1550=v1548;
var v1551=lglobal["nil?"];
var v1552=v1551;
v1552=runJTramp(v1552);
if (typeof v1552 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1553=new JTramp(v1552, [runJTramp(v1550)]);
var v1554;
if(runJTramp(v1553)) {
v1554=v1547;
} else {
var v1555=lglobal["|>"];
var v1556=v1555;
var v1557=v1547;
var v1558=v1548;
var v1559=lglobal["head"];
var v1560=v1559;
v1560=runJTramp(v1560);
if (typeof v1560 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1561=new JTramp(v1560, [runJTramp(v1558)]);
var v1562=v1561;
v1562=runJTramp(v1562);
if (typeof v1562 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1563=new JTramp(v1562, [runJTramp(v1557)]);
var v1564=v1563;
var v1565=v1548;
var v1566=lglobal["tail"];
var v1567=v1566;
v1567=runJTramp(v1567);
if (typeof v1567 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1568=new JTramp(v1567, [runJTramp(v1565)]);
var v1569=v1568;
var v1570=lglobal["cons"];
var v1571=v1570;
v1571=runJTramp(v1571);
if (typeof v1571 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1572=new JTramp(v1571, [runJTramp(v1564),runJTramp(v1569)]);
var v1573=v1572;
var v1574=lglobal["apply"];
var v1575=v1574;
v1575=runJTramp(v1575);
if (typeof v1575 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1576=new JTramp(v1575, [runJTramp(v1556),runJTramp(v1573)]);
v1554=v1576;
}
return v1554;
};
v1545=v1546;
lglobal["|>"]=runJTramp(v1545);
})();
(function () {
var v1577;
var v1578=function (v1579) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
return v1579;
};
v1577=v1578;
lglobal["id"]=runJTramp(v1577);
})();
(function () {
var v1581;
var v1582=function (v1583) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v1585=function (v1586) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
return v1583;
};
return v1585;
};
v1581=v1582;
lglobal["const"]=runJTramp(v1581);
})();
(function () {
var v1852;
var v1853="(function () { _.each(arguments, output); return null; })";
var v1854=v1853;
var v1855=lglobal["ffi"];
var v1856=v1855;
v1856=runJTramp(v1856);
if (typeof v1856 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1857=new JTramp(v1856, [runJTramp(v1854)]);
v1852=v1857;
lglobal["js:print"]=runJTramp(v1852);
})();
(function () {
var v1858;
var v1859=function () {
var v1860 = new Nil();
for (var v1861 = arguments.length - 1; v1861 >= 0; v1861--) {
  v1860 = new Cons(arguments[v1861], v1860);
}
var v1862=function (v1863) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v1865=v1863;
var v1866=lglobal["repr"];
var v1867=v1866;
v1867=runJTramp(v1867);
if (typeof v1867 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1868=new JTramp(v1867, [runJTramp(v1865)]);
var v1869=v1868;
var v1870=lglobal["js:print"];
var v1871=v1870;
v1871=runJTramp(v1871);
if (typeof v1871 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1872=new JTramp(v1871, [runJTramp(v1869)]);
return v1872;
};
var v1873=v1862;
var v1874=v1860;
var v1875=lglobal["each"];
var v1876=v1875;
v1876=runJTramp(v1876);
if (typeof v1876 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1877=new JTramp(v1876, [runJTramp(v1873),runJTramp(v1874)]);
return v1877;
};
v1858=v1859;
lglobal["print"]=runJTramp(v1858);
})();
(function () {
var v1878;
var v1879=function (v1880) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v1882;
var v1883=function (v1884) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v1886=v1884;
var v1887=lglobal["tail"];
var v1888=v1887;
v1888=runJTramp(v1888);
if (typeof v1888 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1889=new JTramp(v1888, [runJTramp(v1886)]);
var v1890=v1889;
var v1891=lglobal["nil?"];
var v1892=v1891;
v1892=runJTramp(v1892);
if (typeof v1892 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1893=new JTramp(v1892, [runJTramp(v1890)]);
var v1894;
if(runJTramp(v1893)) {
var v1895=v1884;
var v1896=lglobal["head"];
var v1897=v1896;
v1897=runJTramp(v1897);
if (typeof v1897 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1898=new JTramp(v1897, [runJTramp(v1895)]);
var v1899=v1898;
var v1900=lglobal["repr"];
var v1901=v1900;
v1901=runJTramp(v1901);
if (typeof v1901 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1902=new JTramp(v1901, [runJTramp(v1899)]);
var v1903=v1902;
var v1904=")";
var v1905=v1904;
var v1906=lglobal["++"];
var v1907=v1906;
v1907=runJTramp(v1907);
if (typeof v1907 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1908=new JTramp(v1907, [runJTramp(v1903),runJTramp(v1905)]);
v1894=v1908;
} else {
var v1909=v1884;
var v1910=lglobal["tail"];
var v1911=v1910;
v1911=runJTramp(v1911);
if (typeof v1911 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1912=new JTramp(v1911, [runJTramp(v1909)]);
var v1913=v1912;
var v1914=lglobal["cons?"];
var v1915=v1914;
v1915=runJTramp(v1915);
if (typeof v1915 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1916=new JTramp(v1915, [runJTramp(v1913)]);
var v1917;
if(runJTramp(v1916)) {
var v1918=v1884;
var v1919=lglobal["head"];
var v1920=v1919;
v1920=runJTramp(v1920);
if (typeof v1920 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1921=new JTramp(v1920, [runJTramp(v1918)]);
var v1922=v1921;
var v1923=lglobal["repr"];
var v1924=v1923;
v1924=runJTramp(v1924);
if (typeof v1924 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1925=new JTramp(v1924, [runJTramp(v1922)]);
var v1926=v1925;
var v1927=" ";
var v1928=v1927;
var v1929=v1884;
var v1930=lglobal["tail"];
var v1931=v1930;
v1931=runJTramp(v1931);
if (typeof v1931 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1932=new JTramp(v1931, [runJTramp(v1929)]);
var v1933=v1932;
var v1934=v1882;
v1934=runJTramp(v1934);
if (typeof v1934 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1935=new JTramp(v1934, [runJTramp(v1933)]);
var v1936=v1935;
var v1937=lglobal["++"];
var v1938=v1937;
v1938=runJTramp(v1938);
if (typeof v1938 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1939=new JTramp(v1938, [runJTramp(v1926),runJTramp(v1928),runJTramp(v1936)]);
v1917=v1939;
} else {
var v1940=lglobal["otherwise"];
var v1941;
if(runJTramp(v1940)) {
var v1942=v1884;
var v1943=lglobal["head"];
var v1944=v1943;
v1944=runJTramp(v1944);
if (typeof v1944 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1945=new JTramp(v1944, [runJTramp(v1942)]);
var v1946=v1945;
var v1947=lglobal["repr"];
var v1948=v1947;
v1948=runJTramp(v1948);
if (typeof v1948 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1949=new JTramp(v1948, [runJTramp(v1946)]);
var v1950=v1949;
var v1951=" # ";
var v1952=v1951;
var v1953=v1884;
var v1954=lglobal["tail"];
var v1955=v1954;
v1955=runJTramp(v1955);
if (typeof v1955 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1956=new JTramp(v1955, [runJTramp(v1953)]);
var v1957=v1956;
var v1958=lglobal["repr"];
var v1959=v1958;
v1959=runJTramp(v1959);
if (typeof v1959 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1960=new JTramp(v1959, [runJTramp(v1957)]);
var v1961=v1960;
var v1962=")";
var v1963=v1962;
var v1964=lglobal["++"];
var v1965=v1964;
v1965=runJTramp(v1965);
if (typeof v1965 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1966=new JTramp(v1965, [runJTramp(v1950),runJTramp(v1952),runJTramp(v1961),runJTramp(v1963)]);
v1941=v1966;
} else {
var v1967=null;
v1941=v1967;
}
v1917=v1941;
}
v1894=v1917;
}
return v1894;
};
var v1968=v1882=runJTramp(v1883);
var v1969=v1880;
var v1970=lglobal["nil?"];
var v1971=v1970;
v1971=runJTramp(v1971);
if (typeof v1971 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1972=new JTramp(v1971, [runJTramp(v1969)]);
var v1973;
if(runJTramp(v1972)) {
var v1974="()";
v1973=v1974;
} else {
var v1975=v1880;
var v1976=lglobal["cons?"];
var v1977=v1976;
v1977=runJTramp(v1977);
if (typeof v1977 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1978=new JTramp(v1977, [runJTramp(v1975)]);
var v1979;
if(runJTramp(v1978)) {
var v1980=v1880;
var v1981=lglobal["head"];
var v1982=v1981;
v1982=runJTramp(v1982);
if (typeof v1982 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1983=new JTramp(v1982, [runJTramp(v1980)]);
var v1984=v1983;
var v1985=function (v1986) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v1988=v1986;
var v1989="quote";
var v1990=v1989;
var v1991=lglobal["="];
var v1992=v1991;
v1992=runJTramp(v1992);
if (typeof v1992 !== "function") {
throw new Error("Cannot call non-function.");
}
var v1993=new JTramp(v1992, [runJTramp(v1988),runJTramp(v1990)]);
var v1994;
if(runJTramp(v1993)) {
var v1995="'";
var v1996=v1995;
var v1997=v1880;
var v1998=lglobal["tail"];
var v1999=v1998;
v1999=runJTramp(v1999);
if (typeof v1999 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2000=new JTramp(v1999, [runJTramp(v1997)]);
var v2001=v2000;
var v2002=lglobal["head"];
var v2003=v2002;
v2003=runJTramp(v2003);
if (typeof v2003 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2004=new JTramp(v2003, [runJTramp(v2001)]);
var v2005=v2004;
var v2006=lglobal["repr"];
var v2007=v2006;
v2007=runJTramp(v2007);
if (typeof v2007 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2008=new JTramp(v2007, [runJTramp(v2005)]);
var v2009=v2008;
var v2010=lglobal["++"];
var v2011=v2010;
v2011=runJTramp(v2011);
if (typeof v2011 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2012=new JTramp(v2011, [runJTramp(v1996),runJTramp(v2009)]);
v1994=v2012;
} else {
var v2013="(";
var v2014=v2013;
var v2015=v1880;
var v2016=v1882;
v2016=runJTramp(v2016);
if (typeof v2016 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2017=new JTramp(v2016, [runJTramp(v2015)]);
var v2018=v2017;
var v2019=lglobal["++"];
var v2020=v2019;
v2020=runJTramp(v2020);
if (typeof v2020 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2021=new JTramp(v2020, [runJTramp(v2014),runJTramp(v2018)]);
v1994=v2021;
}
return v1994;
};
var v2022=v1985;
v2022=runJTramp(v2022);
if (typeof v2022 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2023=new JTramp(v2022, [runJTramp(v1984)]);
v1979=v2023;
} else {
var v2024=lglobal["otherwise"];
var v2025;
if(runJTramp(v2024)) {
var v2026=v1880;
var v2027=lglobal["js:toString"];
var v2028=v2027;
v2028=runJTramp(v2028);
if (typeof v2028 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2029=new JTramp(v2028, [runJTramp(v2026)]);
v2025=v2029;
} else {
var v2030=null;
v2025=v2030;
}
v1979=v2025;
}
v1973=v1979;
}
return v1973;
};
v1878=v1879;
lglobal["repr"]=runJTramp(v1878);
})();
(function () {
var v2031;
var v2032="\n  (function (x) {\n    console.log(x);\n    return null;\n  })\n";
var v2033=v2032;
var v2034=lglobal["ffi"];
var v2035=v2034;
v2035=runJTramp(v2035);
if (typeof v2035 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2036=new JTramp(v2035, [runJTramp(v2033)]);
v2031=v2036;
lglobal["console"]=runJTramp(v2031);
})();
(function () {
var v2037;
var v2038=new Cons("eof", new Nil());
v2037=v2038;
lglobal["eof"]=runJTramp(v2037);
})();
(function () {
var v2039;
var v2040=function (v2041) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v2043=v2041;
var v2044=lglobal["eof"];
var v2045=v2044;
var v2046=lglobal["="];
var v2047=v2046;
v2047=runJTramp(v2047);
if (typeof v2047 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2048=new JTramp(v2047, [runJTramp(v2043),runJTramp(v2045)]);
return v2048;
};
v2039=v2040;
lglobal["eof?"]=runJTramp(v2039);
})();
(function () {
var v2049;
var v2050=function (v2051,v2052) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v2054=0;
var v2055=v2054;
var v2056=v2052;
var v2057=lglobal["s:length"];
var v2058=v2057;
v2058=runJTramp(v2058);
if (typeof v2058 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2059=new JTramp(v2058, [runJTramp(v2056)]);
var v2060=v2059;
var v2061=1;
var v2062=v2061;
var v2063=0;
var v2064=v2063;
var v2065=function (v2066,v2067,v2068,v2069) {
if (arguments.length < 4) {
throw new Error("Expecting at least 4 arguments.");
}
if (arguments.length > 4) {
throw new Error("Expecting at most 4 arguments.");
}
var v2071;
var v2072;
var v2073=function () {
if (arguments.length > 0) {
throw new Error("Expecting at most 0 arguments.");
}
var v2075=v2066;
var v2076=v2067;
var v2077=lglobal["<"];
var v2078=v2077;
v2078=runJTramp(v2078);
if (typeof v2078 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2079=new JTramp(v2078, [runJTramp(v2075),runJTramp(v2076)]);
var v2080;
if(runJTramp(v2079)) {
var v2081=v2052;
var v2082=v2066;
var v2083=lglobal["s:charAt"];
var v2084=v2083;
v2084=runJTramp(v2084);
if (typeof v2084 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2085=new JTramp(v2084, [runJTramp(v2081),runJTramp(v2082)]);
v2080=v2085;
} else {
var v2086=lglobal["eof"];
v2080=v2086;
}
return v2080;
};
var v2087=v2071=runJTramp(v2073);
var v2088=function () {
if (arguments.length > 0) {
throw new Error("Expecting at most 0 arguments.");
}
var v2090=v2066;
var v2091=v2067;
var v2092=lglobal["<"];
var v2093=v2092;
v2093=runJTramp(v2093);
if (typeof v2093 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2094=new JTramp(v2093, [runJTramp(v2090),runJTramp(v2091)]);
var v2095;
if(runJTramp(v2094)) {
var v2096=v2052;
var v2097=v2066;
var v2098=lglobal["s:charAt"];
var v2099=v2098;
v2099=runJTramp(v2099);
if (typeof v2099 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2100=new JTramp(v2099, [runJTramp(v2096),runJTramp(v2097)]);
var v2101=v2100;
var v2102=function (v2103) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v2105=v2103;
var v2106=function (v2107) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v2109=v2107;
var v2110="\n";
var v2111=v2110;
var v2112=lglobal["="];
var v2113=v2112;
v2113=runJTramp(v2113);
if (typeof v2113 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2114=new JTramp(v2113, [runJTramp(v2109),runJTramp(v2111)]);
var v2115;
if(runJTramp(v2114)) {
var v2116=1;
var v2117=v2116;
var v2118=v2068;
var v2119=lglobal["+"];
var v2120=v2119;
v2120=runJTramp(v2120);
if (typeof v2120 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2121=new JTramp(v2120, [runJTramp(v2117),runJTramp(v2118)]);
var v2122=v2068=runJTramp(v2121);
v2122=runJTramp(v2122);
var v2123=0;
var v2124=v2069=runJTramp(v2123);
v2115=v2124;
} else {
var v2125=1;
var v2126=v2125;
var v2127=v2069;
var v2128=lglobal["+"];
var v2129=v2128;
v2129=runJTramp(v2129);
if (typeof v2129 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2130=new JTramp(v2129, [runJTramp(v2126),runJTramp(v2127)]);
var v2131=v2069=runJTramp(v2130);
v2115=v2131;
}
return v2115;
};
var v2132=v2106;
v2132=runJTramp(v2132);
if (typeof v2132 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2133=new JTramp(v2132, [runJTramp(v2105)]);
v2133=runJTramp(v2133);
var v2134=1;
var v2135=v2134;
var v2136=v2066;
var v2137=lglobal["+"];
var v2138=v2137;
v2138=runJTramp(v2138);
if (typeof v2138 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2139=new JTramp(v2138, [runJTramp(v2135),runJTramp(v2136)]);
var v2140=v2066=runJTramp(v2139);
v2140=runJTramp(v2140);
return v2103;
};
var v2141=v2102;
v2141=runJTramp(v2141);
if (typeof v2141 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2142=new JTramp(v2141, [runJTramp(v2101)]);
v2095=v2142;
} else {
var v2143=lglobal["eof"];
v2095=v2143;
}
return v2095;
};
var v2144=v2072=runJTramp(v2088);
var v2145=function (v2146) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
var v2147 = new Nil();
for (var v2148 = arguments.length - 1; v2148 >= 1; v2148--) {
  v2147 = new Cons(arguments[v2148], v2147);
}
var v2149=v2146;
var v2150=function (v2151) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v2153=v2151;
var v2154="peek";
var v2155=v2154;
var v2156=lglobal["="];
var v2157=v2156;
v2157=runJTramp(v2157);
if (typeof v2157 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2158=new JTramp(v2157, [runJTramp(v2153),runJTramp(v2155)]);
var v2159;
if(runJTramp(v2158)) {
v2159=v2071;
} else {
var v2160=v2151;
var v2161="read";
var v2162=v2161;
var v2163=lglobal["="];
var v2164=v2163;
v2164=runJTramp(v2164);
if (typeof v2164 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2165=new JTramp(v2164, [runJTramp(v2160),runJTramp(v2162)]);
var v2166;
if(runJTramp(v2165)) {
v2166=v2072;
} else {
var v2167=v2151;
var v2168="eof?";
var v2169=v2168;
var v2170=lglobal["="];
var v2171=v2170;
v2171=runJTramp(v2171);
if (typeof v2171 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2172=new JTramp(v2171, [runJTramp(v2167),runJTramp(v2169)]);
var v2173;
if(runJTramp(v2172)) {
var v2174=function () {
if (arguments.length > 0) {
throw new Error("Expecting at most 0 arguments.");
}
var v2176=v2066;
var v2177=v2067;
var v2178=lglobal[">="];
var v2179=v2178;
v2179=runJTramp(v2179);
if (typeof v2179 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2180=new JTramp(v2179, [runJTramp(v2176),runJTramp(v2177)]);
return v2180;
};
v2173=v2174;
} else {
var v2181=v2151;
var v2182="input";
var v2183=v2182;
var v2184=lglobal["="];
var v2185=v2184;
v2185=runJTramp(v2185);
if (typeof v2185 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2186=new JTramp(v2185, [runJTramp(v2181),runJTramp(v2183)]);
var v2187;
if(runJTramp(v2186)) {
var v2188=function () {
if (arguments.length > 0) {
throw new Error("Expecting at most 0 arguments.");
}
return v2052;
};
v2187=v2188;
} else {
var v2190=v2151;
var v2191="source";
var v2192=v2191;
var v2193=lglobal["="];
var v2194=v2193;
v2194=runJTramp(v2194);
if (typeof v2194 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2195=new JTramp(v2194, [runJTramp(v2190),runJTramp(v2192)]);
var v2196;
if(runJTramp(v2195)) {
var v2197=function () {
if (arguments.length > 0) {
throw new Error("Expecting at most 0 arguments.");
}
return v2051;
};
v2196=v2197;
} else {
var v2199=v2151;
var v2200="line";
var v2201=v2200;
var v2202=lglobal["="];
var v2203=v2202;
v2203=runJTramp(v2203);
if (typeof v2203 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2204=new JTramp(v2203, [runJTramp(v2199),runJTramp(v2201)]);
var v2205;
if(runJTramp(v2204)) {
var v2206=function () {
if (arguments.length > 0) {
throw new Error("Expecting at most 0 arguments.");
}
return v2068;
};
v2205=v2206;
} else {
var v2208=v2151;
var v2209="col";
var v2210=v2209;
var v2211=lglobal["="];
var v2212=v2211;
v2212=runJTramp(v2212);
if (typeof v2212 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2213=new JTramp(v2212, [runJTramp(v2208),runJTramp(v2210)]);
var v2214;
if(runJTramp(v2213)) {
var v2215=function () {
if (arguments.length > 0) {
throw new Error("Expecting at most 0 arguments.");
}
return v2069;
};
v2214=v2215;
} else {
var v2217="No such message: ";
var v2218=v2217;
var v2219=v2146;
var v2220=lglobal["++"];
var v2221=v2220;
v2221=runJTramp(v2221);
if (typeof v2221 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2222=new JTramp(v2221, [runJTramp(v2218),runJTramp(v2219)]);
var v2223=v2222;
var v2224=lglobal["error"];
var v2225=v2224;
v2225=runJTramp(v2225);
if (typeof v2225 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2226=new JTramp(v2225, [runJTramp(v2223)]);
v2214=v2226;
}
v2205=v2214;
}
v2196=v2205;
}
v2187=v2196;
}
v2173=v2187;
}
v2166=v2173;
}
v2159=v2166;
}
return v2159;
};
var v2227=v2150;
v2227=runJTramp(v2227);
if (typeof v2227 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2228=new JTramp(v2227, [runJTramp(v2149)]);
var v2229=v2228;
var v2230=v2147;
var v2231=lglobal["apply"];
var v2232=v2231;
v2232=runJTramp(v2232);
if (typeof v2232 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2233=new JTramp(v2232, [runJTramp(v2229),runJTramp(v2230)]);
return v2233;
};
return v2145;
};
var v2234=v2065;
v2234=runJTramp(v2234);
if (typeof v2234 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2235=new JTramp(v2234, [runJTramp(v2055),runJTramp(v2060),runJTramp(v2062),runJTramp(v2064)]);
return v2235;
};
v2049=v2050;
lglobal["stream:make"]=runJTramp(v2049);
})();
(function () {
var v2236;
var v2237=function (v2238,v2239) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v2241="source";
var v2242=v2241;
var v2243=v2238;
v2243=runJTramp(v2243);
if (typeof v2243 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2244=new JTramp(v2243, [runJTramp(v2242)]);
var v2245=v2244;
var v2246=":";
var v2247=v2246;
var v2248="line";
var v2249=v2248;
var v2250=v2238;
v2250=runJTramp(v2250);
if (typeof v2250 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2251=new JTramp(v2250, [runJTramp(v2249)]);
var v2252=v2251;
var v2253=":";
var v2254=v2253;
var v2255="col";
var v2256=v2255;
var v2257=v2238;
v2257=runJTramp(v2257);
if (typeof v2257 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2258=new JTramp(v2257, [runJTramp(v2256)]);
var v2259=v2258;
var v2260=": ";
var v2261=v2260;
var v2262=v2239;
var v2263=lglobal["++"];
var v2264=v2263;
v2264=runJTramp(v2264);
if (typeof v2264 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2265=new JTramp(v2264, [runJTramp(v2245),runJTramp(v2247),runJTramp(v2252),runJTramp(v2254),runJTramp(v2259),runJTramp(v2261),runJTramp(v2262)]);
var v2266=v2265;
var v2267=lglobal["error"];
var v2268=v2267;
v2268=runJTramp(v2268);
if (typeof v2268 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2269=new JTramp(v2268, [runJTramp(v2266)]);
return v2269;
};
v2236=v2237;
lglobal["stream:error"]=runJTramp(v2236);
})();
(function () {
var v2270;
var v2271=function (v2272,v2273) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v2275=v2272;
var v2276="Expecting '";
var v2277=v2276;
var v2278=v2273;
var v2279="'.";
var v2280=v2279;
var v2281=lglobal["++"];
var v2282=v2281;
v2282=runJTramp(v2282);
if (typeof v2282 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2283=new JTramp(v2282, [runJTramp(v2277),runJTramp(v2278),runJTramp(v2280)]);
var v2284=v2283;
var v2285=lglobal["stream:error"];
var v2286=v2285;
v2286=runJTramp(v2286);
if (typeof v2286 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2287=new JTramp(v2286, [runJTramp(v2275),runJTramp(v2284)]);
return v2287;
};
v2270=v2271;
lglobal["stream:error-expecting"]=runJTramp(v2270);
})();
(function () {
var v2288;
var v2289=function (v2290,v2291) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v2293=v2291;
var v2294="peek";
var v2295=v2294;
var v2296=v2290;
v2296=runJTramp(v2296);
if (typeof v2296 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2297=new JTramp(v2296, [runJTramp(v2295)]);
var v2298=v2297;
var v2299=lglobal["="];
var v2300=v2299;
v2300=runJTramp(v2300);
if (typeof v2300 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2301=new JTramp(v2300, [runJTramp(v2293),runJTramp(v2298)]);
var v2302=v2301;
var v2303=function (v2304) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v2306;
if(runJTramp(v2304)) {
var v2307="read";
var v2308=v2307;
var v2309=v2290;
v2309=runJTramp(v2309);
if (typeof v2309 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2310=new JTramp(v2309, [runJTramp(v2308)]);
v2310=runJTramp(v2310);
var v2311=lglobal["true"];
v2306=v2311;
} else {
v2306=v2304;
}
return v2306;
};
var v2312=v2303;
v2312=runJTramp(v2312);
if (typeof v2312 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2313=new JTramp(v2312, [runJTramp(v2302)]);
return v2313;
};
v2288=v2289;
lglobal["stream:try-read"]=runJTramp(v2288);
})();
(function () {
var v2314;
var v2315=function (v2316,v2317) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v2319=v2316;
var v2320=v2317;
var v2321=lglobal["stream:try-read"];
var v2322=v2321;
v2322=runJTramp(v2322);
if (typeof v2322 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2323=new JTramp(v2322, [runJTramp(v2319),runJTramp(v2320)]);
var v2324=v2323;
var v2325=function (v2326) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v2328;
if(runJTramp(v2326)) {
v2328=v2326;
} else {
var v2329=v2316;
var v2330=v2317;
var v2331=lglobal["stream:error-expecting"];
var v2332=v2331;
v2332=runJTramp(v2332);
if (typeof v2332 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2333=new JTramp(v2332, [runJTramp(v2329),runJTramp(v2330)]);
v2328=v2333;
}
return v2328;
};
var v2334=v2325;
v2334=runJTramp(v2334);
if (typeof v2334 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2335=new JTramp(v2334, [runJTramp(v2324)]);
return v2335;
};
v2314=v2315;
lglobal["stream:read-expect"]=runJTramp(v2314);
})();
(function () {
var v2336;
var v2337=function (v2338,v2339) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v2341=-1;
var v2342=v2341;
var v2343=v2338;
var v2344=v2339;
var v2345=lglobal["s:indexOf"];
var v2346=v2345;
v2346=runJTramp(v2346);
if (typeof v2346 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2347=new JTramp(v2346, [runJTramp(v2343),runJTramp(v2344)]);
var v2348=v2347;
var v2349=lglobal["!="];
var v2350=v2349;
v2350=runJTramp(v2350);
if (typeof v2350 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2351=new JTramp(v2350, [runJTramp(v2342),runJTramp(v2348)]);
return v2351;
};
v2336=v2337;
lglobal["s:contains"]=runJTramp(v2336);
})();
(function () {
var v2352;
var v2353=function (v2354) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v2356="eof?";
var v2357=v2356;
var v2358=v2354;
v2358=runJTramp(v2358);
if (typeof v2358 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2359=new JTramp(v2358, [runJTramp(v2357)]);
var v2360;
if(runJTramp(v2359)) {
var v2361="pass";
v2360=v2361;
} else {
var v2362="\n";
var v2363=v2362;
var v2364="peek";
var v2365=v2364;
var v2366=v2354;
v2366=runJTramp(v2366);
if (typeof v2366 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2367=new JTramp(v2366, [runJTramp(v2365)]);
var v2368=v2367;
var v2369=lglobal["="];
var v2370=v2369;
v2370=runJTramp(v2370);
if (typeof v2370 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2371=new JTramp(v2370, [runJTramp(v2363),runJTramp(v2368)]);
var v2372;
if(runJTramp(v2371)) {
var v2373=v2354;
var v2374=lglobal["read:eat-spaces"];
var v2375=v2374;
v2375=runJTramp(v2375);
if (typeof v2375 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2376=new JTramp(v2375, [runJTramp(v2373)]);
v2372=v2376;
} else {
var v2377=lglobal["otherwise"];
var v2378;
if(runJTramp(v2377)) {
var v2379="read";
var v2380=v2379;
var v2381=v2354;
v2381=runJTramp(v2381);
if (typeof v2381 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2382=new JTramp(v2381, [runJTramp(v2380)]);
v2382=runJTramp(v2382);
var v2383=v2354;
var v2384=lglobal["read:eat-comment"];
var v2385=v2384;
v2385=runJTramp(v2385);
if (typeof v2385 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2386=new JTramp(v2385, [runJTramp(v2383)]);
v2378=v2386;
} else {
var v2387=null;
v2378=v2387;
}
v2372=v2378;
}
v2360=v2372;
}
return v2360;
};
v2352=v2353;
lglobal["read:eat-comment"]=runJTramp(v2352);
})();
(function () {
var v2388;
var v2389=function (v2390) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v2392="eof?";
var v2393=v2392;
var v2394=v2390;
v2394=runJTramp(v2394);
if (typeof v2394 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2395=new JTramp(v2394, [runJTramp(v2393)]);
var v2396;
if(runJTramp(v2395)) {
var v2397="pass";
v2396=v2397;
} else {
var v2398=" \t\n\r";
var v2399=v2398;
var v2400="peek";
var v2401=v2400;
var v2402=v2390;
v2402=runJTramp(v2402);
if (typeof v2402 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2403=new JTramp(v2402, [runJTramp(v2401)]);
var v2404=v2403;
var v2405=lglobal["s:contains"];
var v2406=v2405;
v2406=runJTramp(v2406);
if (typeof v2406 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2407=new JTramp(v2406, [runJTramp(v2399),runJTramp(v2404)]);
var v2408;
if(runJTramp(v2407)) {
var v2409="read";
var v2410=v2409;
var v2411=v2390;
v2411=runJTramp(v2411);
if (typeof v2411 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2412=new JTramp(v2411, [runJTramp(v2410)]);
v2412=runJTramp(v2412);
var v2413=v2390;
var v2414=lglobal["read:eat-spaces"];
var v2415=v2414;
v2415=runJTramp(v2415);
if (typeof v2415 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2416=new JTramp(v2415, [runJTramp(v2413)]);
v2408=v2416;
} else {
var v2417=";";
var v2418=v2417;
var v2419="peek";
var v2420=v2419;
var v2421=v2390;
v2421=runJTramp(v2421);
if (typeof v2421 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2422=new JTramp(v2421, [runJTramp(v2420)]);
var v2423=v2422;
var v2424=lglobal["="];
var v2425=v2424;
v2425=runJTramp(v2425);
if (typeof v2425 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2426=new JTramp(v2425, [runJTramp(v2418),runJTramp(v2423)]);
var v2427;
if(runJTramp(v2426)) {
var v2428=v2390;
var v2429=lglobal["read:eat-comment"];
var v2430=v2429;
v2430=runJTramp(v2430);
if (typeof v2430 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2431=new JTramp(v2430, [runJTramp(v2428)]);
v2427=v2431;
} else {
var v2432=null;
v2427=v2432;
}
v2408=v2427;
}
v2396=v2408;
}
return v2396;
};
v2388=v2389;
lglobal["read:eat-spaces"]=runJTramp(v2388);
})();
(function () {
var v2433;
var v2434=function (v2435) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v2437=v2435;
var v2438=lglobal["read:eat-spaces"];
var v2439=v2438;
v2439=runJTramp(v2439);
if (typeof v2439 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2440=new JTramp(v2439, [runJTramp(v2437)]);
v2440=runJTramp(v2440);
var v2441="eof?";
var v2442=v2441;
var v2443=v2435;
v2443=runJTramp(v2443);
if (typeof v2443 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2444=new JTramp(v2443, [runJTramp(v2442)]);
var v2445;
if(runJTramp(v2444)) {
var v2446=v2435;
var v2447=")";
var v2448=v2447;
var v2449=lglobal["stream:error-expecting"];
var v2450=v2449;
v2450=runJTramp(v2450);
if (typeof v2450 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2451=new JTramp(v2450, [runJTramp(v2446),runJTramp(v2448)]);
v2445=v2451;
} else {
var v2452=v2435;
var v2453=")";
var v2454=v2453;
var v2455=lglobal["stream:try-read"];
var v2456=v2455;
v2456=runJTramp(v2456);
if (typeof v2456 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2457=new JTramp(v2456, [runJTramp(v2452),runJTramp(v2454)]);
var v2458;
if(runJTramp(v2457)) {
var v2459=new Nil();
v2458=v2459;
} else {
var v2460=lglobal["otherwise"];
var v2461;
if(runJTramp(v2460)) {
var v2462=v2435;
var v2463=lglobal["read:sexp"];
var v2464=v2463;
v2464=runJTramp(v2464);
if (typeof v2464 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2465=new JTramp(v2464, [runJTramp(v2462)]);
var v2466=v2465;
var v2467=function (v2468) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v2470=v2435;
var v2471=lglobal["read:eat-spaces"];
var v2472=v2471;
v2472=runJTramp(v2472);
if (typeof v2472 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2473=new JTramp(v2472, [runJTramp(v2470)]);
v2473=runJTramp(v2473);
var v2474=v2435;
var v2475="#";
var v2476=v2475;
var v2477=lglobal["stream:try-read"];
var v2478=v2477;
v2478=runJTramp(v2478);
if (typeof v2478 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2479=new JTramp(v2478, [runJTramp(v2474),runJTramp(v2476)]);
var v2480;
if(runJTramp(v2479)) {
var v2481=v2468;
var v2482=v2435;
var v2483=lglobal["read:sexp"];
var v2484=v2483;
v2484=runJTramp(v2484);
if (typeof v2484 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2485=new JTramp(v2484, [runJTramp(v2482)]);
var v2486=v2485;
var v2487=lglobal["cons"];
var v2488=v2487;
v2488=runJTramp(v2488);
if (typeof v2488 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2489=new JTramp(v2488, [runJTramp(v2481),runJTramp(v2486)]);
var v2490=v2489;
var v2491=function (v2492) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v2494=v2435;
var v2495=lglobal["read:eat-spaces"];
var v2496=v2495;
v2496=runJTramp(v2496);
if (typeof v2496 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2497=new JTramp(v2496, [runJTramp(v2494)]);
v2497=runJTramp(v2497);
var v2498=v2435;
var v2499=")";
var v2500=v2499;
var v2501=lglobal["stream:read-expect"];
var v2502=v2501;
v2502=runJTramp(v2502);
if (typeof v2502 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2503=new JTramp(v2502, [runJTramp(v2498),runJTramp(v2500)]);
v2503=runJTramp(v2503);
return v2492;
};
var v2504=v2491;
v2504=runJTramp(v2504);
if (typeof v2504 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2505=new JTramp(v2504, [runJTramp(v2490)]);
v2480=v2505;
} else {
var v2506=v2468;
var v2507=v2435;
var v2508=lglobal["read:sexp-tail"];
var v2509=v2508;
v2509=runJTramp(v2509);
if (typeof v2509 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2510=new JTramp(v2509, [runJTramp(v2507)]);
var v2511=v2510;
var v2512=lglobal["cons"];
var v2513=v2512;
v2513=runJTramp(v2513);
if (typeof v2513 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2514=new JTramp(v2513, [runJTramp(v2506),runJTramp(v2511)]);
v2480=v2514;
}
return v2480;
};
var v2515=v2467;
v2515=runJTramp(v2515);
if (typeof v2515 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2516=new JTramp(v2515, [runJTramp(v2466)]);
v2461=v2516;
} else {
var v2517=null;
v2461=v2517;
}
v2458=v2461;
}
v2445=v2458;
}
return v2445;
};
v2433=v2434;
lglobal["read:sexp-tail"]=runJTramp(v2433);
})();
(function () {
var v2518;
var v2519=function (v2520) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v2522="eof?";
var v2523=v2522;
var v2524=v2520;
v2524=runJTramp(v2524);
if (typeof v2524 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2525=new JTramp(v2524, [runJTramp(v2523)]);
var v2526;
if(runJTramp(v2525)) {
var v2527=v2520;
var v2528="\"";
var v2529=v2528;
var v2530=lglobal["stream:error-expecting"];
var v2531=v2530;
v2531=runJTramp(v2531);
if (typeof v2531 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2532=new JTramp(v2531, [runJTramp(v2527),runJTramp(v2529)]);
v2526=v2532;
} else {
var v2533="read";
var v2534=v2533;
var v2535=v2520;
v2535=runJTramp(v2535);
if (typeof v2535 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2536=new JTramp(v2535, [runJTramp(v2534)]);
var v2537=v2536;
var v2538=function (v2539) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v2541=v2539;
var v2542=function (v2543) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v2545=v2543;
var v2546="\"";
var v2547=v2546;
var v2548=lglobal["="];
var v2549=v2548;
v2549=runJTramp(v2549);
if (typeof v2549 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2550=new JTramp(v2549, [runJTramp(v2545),runJTramp(v2547)]);
var v2551;
if(runJTramp(v2550)) {
var v2552="";
v2551=v2552;
} else {
var v2553=v2543;
var v2554="\\";
var v2555=v2554;
var v2556=lglobal["="];
var v2557=v2556;
v2557=runJTramp(v2557);
if (typeof v2557 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2558=new JTramp(v2557, [runJTramp(v2553),runJTramp(v2555)]);
var v2559;
if(runJTramp(v2558)) {
var v2560="read";
var v2561=v2560;
var v2562=v2520;
v2562=runJTramp(v2562);
if (typeof v2562 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2563=new JTramp(v2562, [runJTramp(v2561)]);
var v2564=v2563;
var v2565=function (v2566) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v2568=v2566;
var v2569="\\";
var v2570=v2569;
var v2571=lglobal["="];
var v2572=v2571;
v2572=runJTramp(v2572);
if (typeof v2572 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2573=new JTramp(v2572, [runJTramp(v2568),runJTramp(v2570)]);
var v2574;
if(runJTramp(v2573)) {
var v2575="\\";
v2574=v2575;
} else {
var v2576=v2566;
var v2577="\"";
var v2578=v2577;
var v2579=lglobal["="];
var v2580=v2579;
v2580=runJTramp(v2580);
if (typeof v2580 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2581=new JTramp(v2580, [runJTramp(v2576),runJTramp(v2578)]);
var v2582;
if(runJTramp(v2581)) {
var v2583="\"";
v2582=v2583;
} else {
var v2584=v2566;
var v2585="n";
var v2586=v2585;
var v2587=lglobal["="];
var v2588=v2587;
v2588=runJTramp(v2588);
if (typeof v2588 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2589=new JTramp(v2588, [runJTramp(v2584),runJTramp(v2586)]);
var v2590;
if(runJTramp(v2589)) {
var v2591="\n";
v2590=v2591;
} else {
var v2592=v2566;
var v2593="t";
var v2594=v2593;
var v2595=lglobal["="];
var v2596=v2595;
v2596=runJTramp(v2596);
if (typeof v2596 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2597=new JTramp(v2596, [runJTramp(v2592),runJTramp(v2594)]);
var v2598;
if(runJTramp(v2597)) {
var v2599="\t";
v2598=v2599;
} else {
var v2600=v2566;
var v2601="r";
var v2602=v2601;
var v2603=lglobal["="];
var v2604=v2603;
v2604=runJTramp(v2604);
if (typeof v2604 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2605=new JTramp(v2604, [runJTramp(v2600),runJTramp(v2602)]);
var v2606;
if(runJTramp(v2605)) {
var v2607="\r";
v2606=v2607;
} else {
var v2608=v2520;
var v2609="Unknown escape code.";
var v2610=v2609;
var v2611=lglobal["stream:error"];
var v2612=v2611;
v2612=runJTramp(v2612);
if (typeof v2612 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2613=new JTramp(v2612, [runJTramp(v2608),runJTramp(v2610)]);
v2606=v2613;
}
v2598=v2606;
}
v2590=v2598;
}
v2582=v2590;
}
v2574=v2582;
}
return v2574;
};
var v2614=v2565;
v2614=runJTramp(v2614);
if (typeof v2614 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2615=new JTramp(v2614, [runJTramp(v2564)]);
var v2616=v2615;
var v2617=function (v2618) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v2620=v2618;
var v2621=v2520;
var v2622=lglobal["read:string"];
var v2623=v2622;
v2623=runJTramp(v2623);
if (typeof v2623 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2624=new JTramp(v2623, [runJTramp(v2621)]);
var v2625=v2624;
var v2626=lglobal["++"];
var v2627=v2626;
v2627=runJTramp(v2627);
if (typeof v2627 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2628=new JTramp(v2627, [runJTramp(v2620),runJTramp(v2625)]);
return v2628;
};
var v2629=v2617;
v2629=runJTramp(v2629);
if (typeof v2629 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2630=new JTramp(v2629, [runJTramp(v2616)]);
v2559=v2630;
} else {
var v2631=v2539;
var v2632=v2520;
var v2633=lglobal["read:string"];
var v2634=v2633;
v2634=runJTramp(v2634);
if (typeof v2634 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2635=new JTramp(v2634, [runJTramp(v2632)]);
var v2636=v2635;
var v2637=lglobal["++"];
var v2638=v2637;
v2638=runJTramp(v2638);
if (typeof v2638 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2639=new JTramp(v2638, [runJTramp(v2631),runJTramp(v2636)]);
v2559=v2639;
}
v2551=v2559;
}
return v2551;
};
var v2640=v2542;
v2640=runJTramp(v2640);
if (typeof v2640 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2641=new JTramp(v2640, [runJTramp(v2541)]);
return v2641;
};
var v2642=v2538;
v2642=runJTramp(v2642);
if (typeof v2642 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2643=new JTramp(v2642, [runJTramp(v2537)]);
v2526=v2643;
}
return v2526;
};
v2518=v2519;
lglobal["read:string"]=runJTramp(v2518);
})();
(function () {
var v2644;
var v2645=function (v2646) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v2648;
var v2649=function () {
if (arguments.length > 0) {
throw new Error("Expecting at most 0 arguments.");
}
var v2651="peek";
var v2652=v2651;
var v2653=v2646;
v2653=runJTramp(v2653);
if (typeof v2653 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2654=new JTramp(v2653, [runJTramp(v2652)]);
var v2655=v2654;
var v2656=function (v2657) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v2659=v2657;
var v2660=lglobal["eof?"];
var v2661=v2660;
v2661=runJTramp(v2661);
if (typeof v2661 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2662=new JTramp(v2661, [runJTramp(v2659)]);
var v2663=v2662;
var v2664=function (v2665) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v2667;
if(runJTramp(v2665)) {
v2667=v2665;
} else {
var v2668="'\"()#; \t\n\r";
var v2669=v2668;
var v2670=v2657;
var v2671=lglobal["s:contains"];
var v2672=v2671;
v2672=runJTramp(v2672);
if (typeof v2672 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2673=new JTramp(v2672, [runJTramp(v2669),runJTramp(v2670)]);
v2667=v2673;
}
return v2667;
};
var v2674=v2664;
v2674=runJTramp(v2674);
if (typeof v2674 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2675=new JTramp(v2674, [runJTramp(v2663)]);
var v2676;
if(runJTramp(v2675)) {
var v2677="";
v2676=v2677;
} else {
var v2678="read";
var v2679=v2678;
var v2680=v2646;
v2680=runJTramp(v2680);
if (typeof v2680 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2681=new JTramp(v2680, [runJTramp(v2679)]);
v2681=runJTramp(v2681);
var v2682=v2657;
var v2683=v2648;
v2683=runJTramp(v2683);
if (typeof v2683 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2684=new JTramp(v2683, []);
var v2685=v2684;
var v2686=lglobal["++"];
var v2687=v2686;
v2687=runJTramp(v2687);
if (typeof v2687 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2688=new JTramp(v2687, [runJTramp(v2682),runJTramp(v2685)]);
v2676=v2688;
}
return v2676;
};
var v2689=v2656;
v2689=runJTramp(v2689);
if (typeof v2689 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2690=new JTramp(v2689, [runJTramp(v2655)]);
return v2690;
};
var v2691=v2648=runJTramp(v2649);
var v2692=v2648;
v2692=runJTramp(v2692);
if (typeof v2692 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2693=new JTramp(v2692, []);
var v2694=v2693;
var v2695=function (v2696) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v2698="";
var v2699=v2698;
var v2700=v2696;
var v2701=lglobal["="];
var v2702=v2701;
v2702=runJTramp(v2702);
if (typeof v2702 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2703=new JTramp(v2702, [runJTramp(v2699),runJTramp(v2700)]);
var v2704;
if(runJTramp(v2703)) {
var v2705=v2646;
var v2706="Expecting identifier or number.";
var v2707=v2706;
var v2708=lglobal["stream:error"];
var v2709=v2708;
v2709=runJTramp(v2709);
if (typeof v2709 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2710=new JTramp(v2709, [runJTramp(v2705),runJTramp(v2707)]);
v2704=v2710;
} else {
var v2711=v2696;
var v2712=lglobal["js:toNum"];
var v2713=v2712;
v2713=runJTramp(v2713);
if (typeof v2713 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2714=new JTramp(v2713, [runJTramp(v2711)]);
var v2715=v2714;
var v2716=function (v2717) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v2719=v2717;
var v2720=lglobal["NaN?"];
var v2721=v2720;
v2721=runJTramp(v2721);
if (typeof v2721 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2722=new JTramp(v2721, [runJTramp(v2719)]);
var v2723;
if(runJTramp(v2722)) {
v2723=v2696;
} else {
v2723=v2717;
}
return v2723;
};
var v2724=v2716;
v2724=runJTramp(v2724);
if (typeof v2724 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2725=new JTramp(v2724, [runJTramp(v2715)]);
v2704=v2725;
}
return v2704;
};
var v2726=v2695;
v2726=runJTramp(v2726);
if (typeof v2726 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2727=new JTramp(v2726, [runJTramp(v2694)]);
return v2727;
};
v2644=v2645;
lglobal["read:token"]=runJTramp(v2644);
})();
(function () {
var v2728;
var v2729=function (v2730) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v2732=v2730;
var v2733=lglobal["read:eat-spaces"];
var v2734=v2733;
v2734=runJTramp(v2734);
if (typeof v2734 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2735=new JTramp(v2734, [runJTramp(v2732)]);
v2735=runJTramp(v2735);
var v2736="eof?";
var v2737=v2736;
var v2738=v2730;
v2738=runJTramp(v2738);
if (typeof v2738 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2739=new JTramp(v2738, [runJTramp(v2737)]);
var v2740;
if(runJTramp(v2739)) {
var v2741=v2730;
var v2742="Unexpected end of input.";
var v2743=v2742;
var v2744=lglobal["stream:error"];
var v2745=v2744;
v2745=runJTramp(v2745);
if (typeof v2745 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2746=new JTramp(v2745, [runJTramp(v2741),runJTramp(v2743)]);
v2740=v2746;
} else {
var v2747=v2730;
var v2748="(";
var v2749=v2748;
var v2750=lglobal["stream:try-read"];
var v2751=v2750;
v2751=runJTramp(v2751);
if (typeof v2751 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2752=new JTramp(v2751, [runJTramp(v2747),runJTramp(v2749)]);
var v2753;
if(runJTramp(v2752)) {
var v2754=v2730;
var v2755=lglobal["read:sexp-tail"];
var v2756=v2755;
v2756=runJTramp(v2756);
if (typeof v2756 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2757=new JTramp(v2756, [runJTramp(v2754)]);
v2753=v2757;
} else {
var v2758=v2730;
var v2759="'";
var v2760=v2759;
var v2761=lglobal["stream:try-read"];
var v2762=v2761;
v2762=runJTramp(v2762);
if (typeof v2762 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2763=new JTramp(v2762, [runJTramp(v2758),runJTramp(v2760)]);
var v2764;
if(runJTramp(v2763)) {
var v2765="quote";
var v2766=v2765;
var v2767=v2730;
var v2768=lglobal["read:sexp"];
var v2769=v2768;
v2769=runJTramp(v2769);
if (typeof v2769 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2770=new JTramp(v2769, [runJTramp(v2767)]);
var v2771=v2770;
var v2772=lglobal["list"];
var v2773=v2772;
v2773=runJTramp(v2773);
if (typeof v2773 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2774=new JTramp(v2773, [runJTramp(v2766),runJTramp(v2771)]);
v2764=v2774;
} else {
var v2775=v2730;
var v2776="\"";
var v2777=v2776;
var v2778=lglobal["stream:try-read"];
var v2779=v2778;
v2779=runJTramp(v2779);
if (typeof v2779 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2780=new JTramp(v2779, [runJTramp(v2775),runJTramp(v2777)]);
var v2781;
if(runJTramp(v2780)) {
var v2782="quote";
var v2783=v2782;
var v2784=v2730;
var v2785=lglobal["read:string"];
var v2786=v2785;
v2786=runJTramp(v2786);
if (typeof v2786 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2787=new JTramp(v2786, [runJTramp(v2784)]);
var v2788=v2787;
var v2789=lglobal["list"];
var v2790=v2789;
v2790=runJTramp(v2790);
if (typeof v2790 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2791=new JTramp(v2790, [runJTramp(v2783),runJTramp(v2788)]);
v2781=v2791;
} else {
var v2792=lglobal["otherwise"];
var v2793;
if(runJTramp(v2792)) {
var v2794=v2730;
var v2795=lglobal["read:token"];
var v2796=v2795;
v2796=runJTramp(v2796);
if (typeof v2796 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2797=new JTramp(v2796, [runJTramp(v2794)]);
v2793=v2797;
} else {
var v2798=null;
v2793=v2798;
}
v2781=v2793;
}
v2764=v2781;
}
v2753=v2764;
}
v2740=v2753;
}
return v2740;
};
v2728=v2729;
lglobal["read:sexp"]=runJTramp(v2728);
})();
(function () {
var v2799;
var v2800=function (v2801) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v2803=v2801;
var v2804=lglobal["read:eat-spaces"];
var v2805=v2804;
v2805=runJTramp(v2805);
if (typeof v2805 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2806=new JTramp(v2805, [runJTramp(v2803)]);
v2806=runJTramp(v2806);
var v2807="eof?";
var v2808=v2807;
var v2809=v2801;
v2809=runJTramp(v2809);
if (typeof v2809 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2810=new JTramp(v2809, [runJTramp(v2808)]);
var v2811=v2810;
var v2812=lglobal["not"];
var v2813=v2812;
v2813=runJTramp(v2813);
if (typeof v2813 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2814=new JTramp(v2813, [runJTramp(v2811)]);
return v2814;
};
v2799=v2800;
lglobal["read:has-another?"]=runJTramp(v2799);
})();
(function () {
var v2815;
var v2816=function (v2817) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
var v2818 = new Nil();
for (var v2819 = arguments.length - 1; v2819 >= 1; v2819--) {
  v2818 = new Cons(arguments[v2819], v2818);
}
var v2820=lglobal["dict"];
var v2821=v2820;
var v2822=v2818;
var v2823=lglobal["apply"];
var v2824=v2823;
v2824=runJTramp(v2824);
if (typeof v2824 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2825=new JTramp(v2824, [runJTramp(v2821),runJTramp(v2822)]);
var v2826=v2825;
var v2827=function (v2828) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v2830=function (v2831) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
var v2832 = new Nil();
for (var v2833 = arguments.length - 1; v2833 >= 1; v2833--) {
  v2832 = new Cons(arguments[v2833], v2832);
}
var v2834=v2831;
var v2835=function (v2836) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v2838=v2836;
var v2839="lookup";
var v2840=v2839;
var v2841=lglobal["="];
var v2842=v2841;
v2842=runJTramp(v2842);
if (typeof v2842 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2843=new JTramp(v2842, [runJTramp(v2838),runJTramp(v2840)]);
var v2844;
if(runJTramp(v2843)) {
var v2845=function (v2846) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v2848=v2828;
var v2849=v2846;
var v2850=lglobal["dict:has?"];
var v2851=v2850;
v2851=runJTramp(v2851);
if (typeof v2851 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2852=new JTramp(v2851, [runJTramp(v2848),runJTramp(v2849)]);
var v2853;
if(runJTramp(v2852)) {
var v2854=v2828;
var v2855=v2846;
var v2856=lglobal["dict:get"];
var v2857=v2856;
v2857=runJTramp(v2857);
if (typeof v2857 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2858=new JTramp(v2857, [runJTramp(v2854),runJTramp(v2855)]);
v2853=v2858;
} else {
var v2859=v2817;
var v2860=lglobal["null?"];
var v2861=v2860;
v2861=runJTramp(v2861);
if (typeof v2861 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2862=new JTramp(v2861, [runJTramp(v2859)]);
var v2863;
if(runJTramp(v2862)) {
var v2864="Environment key error: ";
var v2865=v2864;
var v2866=v2846;
var v2867=lglobal["repr"];
var v2868=v2867;
v2868=runJTramp(v2868);
if (typeof v2868 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2869=new JTramp(v2868, [runJTramp(v2866)]);
var v2870=v2869;
var v2871=lglobal["++"];
var v2872=v2871;
v2872=runJTramp(v2872);
if (typeof v2872 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2873=new JTramp(v2872, [runJTramp(v2865),runJTramp(v2870)]);
var v2874=v2873;
var v2875=lglobal["error"];
var v2876=v2875;
v2876=runJTramp(v2876);
if (typeof v2876 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2877=new JTramp(v2876, [runJTramp(v2874)]);
v2863=v2877;
} else {
var v2878=lglobal["otherwise"];
var v2879;
if(runJTramp(v2878)) {
var v2880="lookup";
var v2881=v2880;
var v2882=v2846;
var v2883=v2817;
v2883=runJTramp(v2883);
if (typeof v2883 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2884=new JTramp(v2883, [runJTramp(v2881),runJTramp(v2882)]);
v2879=v2884;
} else {
var v2885=null;
v2879=v2885;
}
v2863=v2879;
}
v2853=v2863;
}
return v2853;
};
v2844=v2845;
} else {
var v2886=v2836;
var v2887="has?";
var v2888=v2887;
var v2889=lglobal["="];
var v2890=v2889;
v2890=runJTramp(v2890);
if (typeof v2890 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2891=new JTramp(v2890, [runJTramp(v2886),runJTramp(v2888)]);
var v2892;
if(runJTramp(v2891)) {
var v2893=function (v2894) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v2896=v2828;
var v2897=v2894;
var v2898=lglobal["dict:has?"];
var v2899=v2898;
v2899=runJTramp(v2899);
if (typeof v2899 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2900=new JTramp(v2899, [runJTramp(v2896),runJTramp(v2897)]);
var v2901;
if(runJTramp(v2900)) {
var v2902=lglobal["true"];
v2901=v2902;
} else {
var v2903=v2817;
var v2904=lglobal["null?"];
var v2905=v2904;
v2905=runJTramp(v2905);
if (typeof v2905 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2906=new JTramp(v2905, [runJTramp(v2903)]);
var v2907;
if(runJTramp(v2906)) {
var v2908=lglobal["false"];
v2907=v2908;
} else {
var v2909="has?";
var v2910=v2909;
var v2911=v2894;
var v2912=v2817;
v2912=runJTramp(v2912);
if (typeof v2912 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2913=new JTramp(v2912, [runJTramp(v2910),runJTramp(v2911)]);
v2907=v2913;
}
v2901=v2907;
}
return v2901;
};
v2892=v2893;
} else {
var v2914=v2836;
var v2915="set!";
var v2916=v2915;
var v2917=lglobal["="];
var v2918=v2917;
v2918=runJTramp(v2918);
if (typeof v2918 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2919=new JTramp(v2918, [runJTramp(v2914),runJTramp(v2916)]);
var v2920;
if(runJTramp(v2919)) {
var v2921=function (v2922,v2923) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v2925=v2828;
var v2926=v2922;
var v2927=v2923;
var v2928=lglobal["dict:set!"];
var v2929=v2928;
v2929=runJTramp(v2929);
if (typeof v2929 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2930=new JTramp(v2929, [runJTramp(v2925),runJTramp(v2926),runJTramp(v2927)]);
return v2930;
};
v2920=v2921;
} else {
var v2931="No such message: ";
var v2932=v2931;
var v2933=v2831;
var v2934=lglobal["++"];
var v2935=v2934;
v2935=runJTramp(v2935);
if (typeof v2935 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2936=new JTramp(v2935, [runJTramp(v2932),runJTramp(v2933)]);
var v2937=v2936;
var v2938=lglobal["error"];
var v2939=v2938;
v2939=runJTramp(v2939);
if (typeof v2939 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2940=new JTramp(v2939, [runJTramp(v2937)]);
v2920=v2940;
}
v2892=v2920;
}
v2844=v2892;
}
return v2844;
};
var v2941=v2835;
v2941=runJTramp(v2941);
if (typeof v2941 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2942=new JTramp(v2941, [runJTramp(v2834)]);
var v2943=v2942;
var v2944=v2832;
var v2945=lglobal["apply"];
var v2946=v2945;
v2946=runJTramp(v2946);
if (typeof v2946 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2947=new JTramp(v2946, [runJTramp(v2943),runJTramp(v2944)]);
return v2947;
};
return v2830;
};
var v2948=v2827;
v2948=runJTramp(v2948);
if (typeof v2948 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2949=new JTramp(v2948, [runJTramp(v2826)]);
return v2949;
};
v2815=v2816;
lglobal["make-env"]=runJTramp(v2815);
})();
(function () {
var v2950;
var v2951=0;
var v2952=v2951;
var v2953=function (v2954) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v2956=function (v2957) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v2959=v2954;
var v2960=1;
var v2961=v2960;
var v2962=lglobal["+"];
var v2963=v2962;
v2963=runJTramp(v2963);
if (typeof v2963 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2964=new JTramp(v2963, [runJTramp(v2959),runJTramp(v2961)]);
var v2965=v2954=runJTramp(v2964);
v2965=runJTramp(v2965);
var v2966=v2957;
var v2967="#";
var v2968=v2967;
var v2969=v2954;
var v2970=lglobal["++"];
var v2971=v2970;
v2971=runJTramp(v2971);
if (typeof v2971 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2972=new JTramp(v2971, [runJTramp(v2966),runJTramp(v2968),runJTramp(v2969)]);
return v2972;
};
return v2956;
};
var v2973=v2953;
v2973=runJTramp(v2973);
if (typeof v2973 !== "function") {
throw new Error("Cannot call non-function.");
}
var v2974=new JTramp(v2973, [runJTramp(v2952)]);
v2950=v2974;
lglobal["new-var"]=runJTramp(v2950);
})();
(function () {
var v3226;
var v3227=function (v3228,v3229) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v3231="midir:lit";
var v3232=v3231;
var v3233=v3228;
var v3234=v3229;
var v3235=lglobal["list"];
var v3236=v3235;
v3236=runJTramp(v3236);
if (typeof v3236 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3237=new JTramp(v3236, [runJTramp(v3232),runJTramp(v3233),runJTramp(v3234)]);
return v3237;
};
v3226=v3227;
lglobal["midir:lit"]=runJTramp(v3226);
})();
(function () {
var v3238;
var v3239=function (v3240) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v3242=v3240;
var v3243=lglobal["cons?"];
var v3244=v3243;
v3244=runJTramp(v3244);
if (typeof v3244 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3245=new JTramp(v3244, [runJTramp(v3242)]);
var v3246=v3245;
var v3247=function (v3248) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v3250;
if(runJTramp(v3248)) {
var v3251=v3240;
var v3252=lglobal["head"];
var v3253=v3252;
v3253=runJTramp(v3253);
if (typeof v3253 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3254=new JTramp(v3253, [runJTramp(v3251)]);
var v3255=v3254;
var v3256="midir:lit";
var v3257=v3256;
var v3258=lglobal["="];
var v3259=v3258;
v3259=runJTramp(v3259);
if (typeof v3259 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3260=new JTramp(v3259, [runJTramp(v3255),runJTramp(v3257)]);
v3250=v3260;
} else {
v3250=v3248;
}
return v3250;
};
var v3261=v3247;
v3261=runJTramp(v3261);
if (typeof v3261 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3262=new JTramp(v3261, [runJTramp(v3246)]);
return v3262;
};
v3238=v3239;
lglobal["midir:lit?"]=runJTramp(v3238);
})();
(function () {
var v3263;
var v3264=function (v3265,v3266) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v3268="midir:lookup";
var v3269=v3268;
var v3270=v3265;
var v3271=v3266;
var v3272=lglobal["list"];
var v3273=v3272;
v3273=runJTramp(v3273);
if (typeof v3273 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3274=new JTramp(v3273, [runJTramp(v3269),runJTramp(v3270),runJTramp(v3271)]);
return v3274;
};
v3263=v3264;
lglobal["midir:lookup"]=runJTramp(v3263);
})();
(function () {
var v3275;
var v3276=function (v3277) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v3279=v3277;
var v3280=lglobal["cons?"];
var v3281=v3280;
v3281=runJTramp(v3281);
if (typeof v3281 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3282=new JTramp(v3281, [runJTramp(v3279)]);
var v3283=v3282;
var v3284=function (v3285) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v3287;
if(runJTramp(v3285)) {
var v3288=v3277;
var v3289=lglobal["head"];
var v3290=v3289;
v3290=runJTramp(v3290);
if (typeof v3290 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3291=new JTramp(v3290, [runJTramp(v3288)]);
var v3292=v3291;
var v3293="midir:lookup";
var v3294=v3293;
var v3295=lglobal["="];
var v3296=v3295;
v3296=runJTramp(v3296);
if (typeof v3296 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3297=new JTramp(v3296, [runJTramp(v3292),runJTramp(v3294)]);
v3287=v3297;
} else {
v3287=v3285;
}
return v3287;
};
var v3298=v3284;
v3298=runJTramp(v3298);
if (typeof v3298 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3299=new JTramp(v3298, [runJTramp(v3283)]);
return v3299;
};
v3275=v3276;
lglobal["midir:lookup?"]=runJTramp(v3275);
})();
(function () {
var v3300;
var v3301=function (v3302,v3303) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v3305="midir:glookup";
var v3306=v3305;
var v3307=v3302;
var v3308=v3303;
var v3309=lglobal["list"];
var v3310=v3309;
v3310=runJTramp(v3310);
if (typeof v3310 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3311=new JTramp(v3310, [runJTramp(v3306),runJTramp(v3307),runJTramp(v3308)]);
return v3311;
};
v3300=v3301;
lglobal["midir:glookup"]=runJTramp(v3300);
})();
(function () {
var v3312;
var v3313=function (v3314) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v3316=v3314;
var v3317=lglobal["cons?"];
var v3318=v3317;
v3318=runJTramp(v3318);
if (typeof v3318 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3319=new JTramp(v3318, [runJTramp(v3316)]);
var v3320=v3319;
var v3321=function (v3322) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v3324;
if(runJTramp(v3322)) {
var v3325=v3314;
var v3326=lglobal["head"];
var v3327=v3326;
v3327=runJTramp(v3327);
if (typeof v3327 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3328=new JTramp(v3327, [runJTramp(v3325)]);
var v3329=v3328;
var v3330="midir:glookup";
var v3331=v3330;
var v3332=lglobal["="];
var v3333=v3332;
v3333=runJTramp(v3333);
if (typeof v3333 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3334=new JTramp(v3333, [runJTramp(v3329),runJTramp(v3331)]);
v3324=v3334;
} else {
v3324=v3322;
}
return v3324;
};
var v3335=v3321;
v3335=runJTramp(v3335);
if (typeof v3335 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3336=new JTramp(v3335, [runJTramp(v3320)]);
return v3336;
};
v3312=v3313;
lglobal["midir:glookup?"]=runJTramp(v3312);
})();
(function () {
var v3337;
var v3338=function (v3339,v3340,v3341,v3342) {
if (arguments.length < 4) {
throw new Error("Expecting at least 4 arguments.");
}
if (arguments.length > 4) {
throw new Error("Expecting at most 4 arguments.");
}
var v3344="midir:enter";
var v3345=v3344;
var v3346=v3339;
var v3347=v3340;
var v3348=v3341;
var v3349=v3342;
var v3350=lglobal["list"];
var v3351=v3350;
v3351=runJTramp(v3351);
if (typeof v3351 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3352=new JTramp(v3351, [runJTramp(v3345),runJTramp(v3346),runJTramp(v3347),runJTramp(v3348),runJTramp(v3349)]);
return v3352;
};
v3337=v3338;
lglobal["midir:enter"]=runJTramp(v3337);
})();
(function () {
var v3353;
var v3354=function (v3355) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v3357=v3355;
var v3358=lglobal["cons?"];
var v3359=v3358;
v3359=runJTramp(v3359);
if (typeof v3359 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3360=new JTramp(v3359, [runJTramp(v3357)]);
var v3361=v3360;
var v3362=function (v3363) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v3365;
if(runJTramp(v3363)) {
var v3366=v3355;
var v3367=lglobal["head"];
var v3368=v3367;
v3368=runJTramp(v3368);
if (typeof v3368 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3369=new JTramp(v3368, [runJTramp(v3366)]);
var v3370=v3369;
var v3371="midir:enter";
var v3372=v3371;
var v3373=lglobal["="];
var v3374=v3373;
v3374=runJTramp(v3374);
if (typeof v3374 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3375=new JTramp(v3374, [runJTramp(v3370),runJTramp(v3372)]);
v3365=v3375;
} else {
v3365=v3363;
}
return v3365;
};
var v3376=v3362;
v3376=runJTramp(v3376);
if (typeof v3376 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3377=new JTramp(v3376, [runJTramp(v3361)]);
return v3377;
};
v3353=v3354;
lglobal["midir:enter?"]=runJTramp(v3353);
})();
(function () {
var v3378;
var v3379=function () {
if (arguments.length > 0) {
throw new Error("Expecting at most 0 arguments.");
}
var v3381="midir:return";
var v3382=v3381;
var v3383=lglobal["list"];
var v3384=v3383;
v3384=runJTramp(v3384);
if (typeof v3384 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3385=new JTramp(v3384, [runJTramp(v3382)]);
return v3385;
};
v3378=v3379;
lglobal["midir:return"]=runJTramp(v3378);
})();
(function () {
var v3386;
var v3387=function (v3388) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v3390=v3388;
var v3391=lglobal["cons?"];
var v3392=v3391;
v3392=runJTramp(v3392);
if (typeof v3392 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3393=new JTramp(v3392, [runJTramp(v3390)]);
var v3394=v3393;
var v3395=function (v3396) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v3398;
if(runJTramp(v3396)) {
var v3399=v3388;
var v3400=lglobal["head"];
var v3401=v3400;
v3401=runJTramp(v3401);
if (typeof v3401 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3402=new JTramp(v3401, [runJTramp(v3399)]);
var v3403=v3402;
var v3404="midir:return";
var v3405=v3404;
var v3406=lglobal["="];
var v3407=v3406;
v3407=runJTramp(v3407);
if (typeof v3407 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3408=new JTramp(v3407, [runJTramp(v3403),runJTramp(v3405)]);
v3398=v3408;
} else {
v3398=v3396;
}
return v3398;
};
var v3409=v3395;
v3409=runJTramp(v3409);
if (typeof v3409 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3410=new JTramp(v3409, [runJTramp(v3394)]);
return v3410;
};
v3386=v3387;
lglobal["midir:return?"]=runJTramp(v3386);
})();
(function () {
var v3411;
var v3412=function (v3413,v3414) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v3416="midir:bind";
var v3417=v3416;
var v3418=v3413;
var v3419=v3414;
var v3420=lglobal["list"];
var v3421=v3420;
v3421=runJTramp(v3421);
if (typeof v3421 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3422=new JTramp(v3421, [runJTramp(v3417),runJTramp(v3418),runJTramp(v3419)]);
return v3422;
};
v3411=v3412;
lglobal["midir:bind"]=runJTramp(v3411);
})();
(function () {
var v3423;
var v3424=function (v3425) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v3427=v3425;
var v3428=lglobal["cons?"];
var v3429=v3428;
v3429=runJTramp(v3429);
if (typeof v3429 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3430=new JTramp(v3429, [runJTramp(v3427)]);
var v3431=v3430;
var v3432=function (v3433) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v3435;
if(runJTramp(v3433)) {
var v3436=v3425;
var v3437=lglobal["head"];
var v3438=v3437;
v3438=runJTramp(v3438);
if (typeof v3438 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3439=new JTramp(v3438, [runJTramp(v3436)]);
var v3440=v3439;
var v3441="midir:bind";
var v3442=v3441;
var v3443=lglobal["="];
var v3444=v3443;
v3444=runJTramp(v3444);
if (typeof v3444 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3445=new JTramp(v3444, [runJTramp(v3440),runJTramp(v3442)]);
v3435=v3445;
} else {
v3435=v3433;
}
return v3435;
};
var v3446=v3432;
v3446=runJTramp(v3446);
if (typeof v3446 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3447=new JTramp(v3446, [runJTramp(v3431)]);
return v3447;
};
v3423=v3424;
lglobal["midir:bind?"]=runJTramp(v3423);
})();
(function () {
var v3448;
var v3449=function (v3450) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v3452="midir:bind-drop";
var v3453=v3452;
var v3454=v3450;
var v3455=lglobal["list"];
var v3456=v3455;
v3456=runJTramp(v3456);
if (typeof v3456 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3457=new JTramp(v3456, [runJTramp(v3453),runJTramp(v3454)]);
return v3457;
};
v3448=v3449;
lglobal["midir:bind-drop"]=runJTramp(v3448);
})();
(function () {
var v3458;
var v3459=function (v3460) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v3462=v3460;
var v3463=lglobal["cons?"];
var v3464=v3463;
v3464=runJTramp(v3464);
if (typeof v3464 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3465=new JTramp(v3464, [runJTramp(v3462)]);
var v3466=v3465;
var v3467=function (v3468) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v3470;
if(runJTramp(v3468)) {
var v3471=v3460;
var v3472=lglobal["head"];
var v3473=v3472;
v3473=runJTramp(v3473);
if (typeof v3473 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3474=new JTramp(v3473, [runJTramp(v3471)]);
var v3475=v3474;
var v3476="midir:bind-drop";
var v3477=v3476;
var v3478=lglobal["="];
var v3479=v3478;
v3479=runJTramp(v3479);
if (typeof v3479 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3480=new JTramp(v3479, [runJTramp(v3475),runJTramp(v3477)]);
v3470=v3480;
} else {
v3470=v3468;
}
return v3470;
};
var v3481=v3467;
v3481=runJTramp(v3481);
if (typeof v3481 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3482=new JTramp(v3481, [runJTramp(v3466)]);
return v3482;
};
v3458=v3459;
lglobal["midir:bind-drop?"]=runJTramp(v3458);
})();
(function () {
var v3483;
var v3484=function (v3485,v3486,v3487) {
if (arguments.length < 3) {
throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
throw new Error("Expecting at most 3 arguments.");
}
var v3489="midir:if";
var v3490=v3489;
var v3491=v3485;
var v3492=v3486;
var v3493=v3487;
var v3494=lglobal["list"];
var v3495=v3494;
v3495=runJTramp(v3495);
if (typeof v3495 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3496=new JTramp(v3495, [runJTramp(v3490),runJTramp(v3491),runJTramp(v3492),runJTramp(v3493)]);
return v3496;
};
v3483=v3484;
lglobal["midir:if"]=runJTramp(v3483);
})();
(function () {
var v3497;
var v3498=function (v3499) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v3501=v3499;
var v3502=lglobal["cons?"];
var v3503=v3502;
v3503=runJTramp(v3503);
if (typeof v3503 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3504=new JTramp(v3503, [runJTramp(v3501)]);
var v3505=v3504;
var v3506=function (v3507) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v3509;
if(runJTramp(v3507)) {
var v3510=v3499;
var v3511=lglobal["head"];
var v3512=v3511;
v3512=runJTramp(v3512);
if (typeof v3512 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3513=new JTramp(v3512, [runJTramp(v3510)]);
var v3514=v3513;
var v3515="midir:if";
var v3516=v3515;
var v3517=lglobal["="];
var v3518=v3517;
v3518=runJTramp(v3518);
if (typeof v3518 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3519=new JTramp(v3518, [runJTramp(v3514),runJTramp(v3516)]);
v3509=v3519;
} else {
v3509=v3507;
}
return v3509;
};
var v3520=v3506;
v3520=runJTramp(v3520);
if (typeof v3520 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3521=new JTramp(v3520, [runJTramp(v3505)]);
return v3521;
};
v3497=v3498;
lglobal["midir:if?"]=runJTramp(v3497);
})();
(function () {
var v3522;
var v3523=function () {
if (arguments.length > 0) {
throw new Error("Expecting at most 0 arguments.");
}
var v3525="midir:leave";
var v3526=v3525;
var v3527=lglobal["list"];
var v3528=v3527;
v3528=runJTramp(v3528);
if (typeof v3528 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3529=new JTramp(v3528, [runJTramp(v3526)]);
return v3529;
};
v3522=v3523;
lglobal["midir:leave"]=runJTramp(v3522);
})();
(function () {
var v3530;
var v3531=function (v3532) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v3534=v3532;
var v3535=lglobal["cons?"];
var v3536=v3535;
v3536=runJTramp(v3536);
if (typeof v3536 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3537=new JTramp(v3536, [runJTramp(v3534)]);
var v3538=v3537;
var v3539=function (v3540) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v3542;
if(runJTramp(v3540)) {
var v3543=v3532;
var v3544=lglobal["head"];
var v3545=v3544;
v3545=runJTramp(v3545);
if (typeof v3545 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3546=new JTramp(v3545, [runJTramp(v3543)]);
var v3547=v3546;
var v3548="midir:leave";
var v3549=v3548;
var v3550=lglobal["="];
var v3551=v3550;
v3551=runJTramp(v3551);
if (typeof v3551 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3552=new JTramp(v3551, [runJTramp(v3547),runJTramp(v3549)]);
v3542=v3552;
} else {
v3542=v3540;
}
return v3542;
};
var v3553=v3539;
v3553=runJTramp(v3553);
if (typeof v3553 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3554=new JTramp(v3553, [runJTramp(v3538)]);
return v3554;
};
v3530=v3531;
lglobal["midir:leave?"]=runJTramp(v3530);
})();
(function () {
var v3555;
var v3556=function (v3557,v3558,v3559) {
if (arguments.length < 3) {
throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
throw new Error("Expecting at most 3 arguments.");
}
var v3561="midir:funcall";
var v3562=v3561;
var v3563=v3557;
var v3564=v3558;
var v3565=v3559;
var v3566=lglobal["list"];
var v3567=v3566;
v3567=runJTramp(v3567);
if (typeof v3567 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3568=new JTramp(v3567, [runJTramp(v3562),runJTramp(v3563),runJTramp(v3564),runJTramp(v3565)]);
return v3568;
};
v3555=v3556;
lglobal["midir:funcall"]=runJTramp(v3555);
})();
(function () {
var v3569;
var v3570=function (v3571) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v3573=v3571;
var v3574=lglobal["cons?"];
var v3575=v3574;
v3575=runJTramp(v3575);
if (typeof v3575 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3576=new JTramp(v3575, [runJTramp(v3573)]);
var v3577=v3576;
var v3578=function (v3579) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v3581;
if(runJTramp(v3579)) {
var v3582=v3571;
var v3583=lglobal["head"];
var v3584=v3583;
v3584=runJTramp(v3584);
if (typeof v3584 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3585=new JTramp(v3584, [runJTramp(v3582)]);
var v3586=v3585;
var v3587="midir:funcall";
var v3588=v3587;
var v3589=lglobal["="];
var v3590=v3589;
v3590=runJTramp(v3590);
if (typeof v3590 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3591=new JTramp(v3590, [runJTramp(v3586),runJTramp(v3588)]);
v3581=v3591;
} else {
v3581=v3579;
}
return v3581;
};
var v3592=v3578;
v3592=runJTramp(v3592);
if (typeof v3592 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3593=new JTramp(v3592, [runJTramp(v3577)]);
return v3593;
};
v3569=v3570;
lglobal["midir:funcall?"]=runJTramp(v3569);
})();
(function () {
var v3594;
var v3595=function (v3596,v3597) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v3599="midir:closure";
var v3600=v3599;
var v3601=v3596;
var v3602=v3597;
var v3603=lglobal["list"];
var v3604=v3603;
v3604=runJTramp(v3604);
if (typeof v3604 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3605=new JTramp(v3604, [runJTramp(v3600),runJTramp(v3601),runJTramp(v3602)]);
return v3605;
};
v3594=v3595;
lglobal["midir:closure"]=runJTramp(v3594);
})();
(function () {
var v3606;
var v3607=function (v3608) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v3610=v3608;
var v3611=lglobal["cons?"];
var v3612=v3611;
v3612=runJTramp(v3612);
if (typeof v3612 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3613=new JTramp(v3612, [runJTramp(v3610)]);
var v3614=v3613;
var v3615=function (v3616) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v3618;
if(runJTramp(v3616)) {
var v3619=v3608;
var v3620=lglobal["head"];
var v3621=v3620;
v3621=runJTramp(v3621);
if (typeof v3621 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3622=new JTramp(v3621, [runJTramp(v3619)]);
var v3623=v3622;
var v3624="midir:closure";
var v3625=v3624;
var v3626=lglobal["="];
var v3627=v3626;
v3627=runJTramp(v3627);
if (typeof v3627 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3628=new JTramp(v3627, [runJTramp(v3623),runJTramp(v3625)]);
v3618=v3628;
} else {
v3618=v3616;
}
return v3618;
};
var v3629=v3615;
v3629=runJTramp(v3629);
if (typeof v3629 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3630=new JTramp(v3629, [runJTramp(v3614)]);
return v3630;
};
v3606=v3607;
lglobal["midir:closure?"]=runJTramp(v3606);
})();
(function () {
var v3631;
var v3632=function (v3633,v3634) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v3636="midir:set!";
var v3637=v3636;
var v3638=v3633;
var v3639=v3634;
var v3640=lglobal["list"];
var v3641=v3640;
v3641=runJTramp(v3641);
if (typeof v3641 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3642=new JTramp(v3641, [runJTramp(v3637),runJTramp(v3638),runJTramp(v3639)]);
return v3642;
};
v3631=v3632;
lglobal["midir:set!"]=runJTramp(v3631);
})();
(function () {
var v3643;
var v3644=function (v3645) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v3647=v3645;
var v3648=lglobal["cons?"];
var v3649=v3648;
v3649=runJTramp(v3649);
if (typeof v3649 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3650=new JTramp(v3649, [runJTramp(v3647)]);
var v3651=v3650;
var v3652=function (v3653) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v3655;
if(runJTramp(v3653)) {
var v3656=v3645;
var v3657=lglobal["head"];
var v3658=v3657;
v3658=runJTramp(v3658);
if (typeof v3658 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3659=new JTramp(v3658, [runJTramp(v3656)]);
var v3660=v3659;
var v3661="midir:set!";
var v3662=v3661;
var v3663=lglobal["="];
var v3664=v3663;
v3664=runJTramp(v3664);
if (typeof v3664 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3665=new JTramp(v3664, [runJTramp(v3660),runJTramp(v3662)]);
v3655=v3665;
} else {
v3655=v3653;
}
return v3655;
};
var v3666=v3652;
v3666=runJTramp(v3666);
if (typeof v3666 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3667=new JTramp(v3666, [runJTramp(v3651)]);
return v3667;
};
v3643=v3644;
lglobal["midir:set!?"]=runJTramp(v3643);
})();
(function () {
var v3668;
var v3669=function (v3670,v3671) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v3673="midir:gset!";
var v3674=v3673;
var v3675=v3670;
var v3676=v3671;
var v3677=lglobal["list"];
var v3678=v3677;
v3678=runJTramp(v3678);
if (typeof v3678 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3679=new JTramp(v3678, [runJTramp(v3674),runJTramp(v3675),runJTramp(v3676)]);
return v3679;
};
v3668=v3669;
lglobal["midir:gset!"]=runJTramp(v3668);
})();
(function () {
var v3680;
var v3681=function (v3682) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v3684=v3682;
var v3685=lglobal["cons?"];
var v3686=v3685;
v3686=runJTramp(v3686);
if (typeof v3686 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3687=new JTramp(v3686, [runJTramp(v3684)]);
var v3688=v3687;
var v3689=function (v3690) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v3692;
if(runJTramp(v3690)) {
var v3693=v3682;
var v3694=lglobal["head"];
var v3695=v3694;
v3695=runJTramp(v3695);
if (typeof v3695 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3696=new JTramp(v3695, [runJTramp(v3693)]);
var v3697=v3696;
var v3698="midir:gset!";
var v3699=v3698;
var v3700=lglobal["="];
var v3701=v3700;
v3701=runJTramp(v3701);
if (typeof v3701 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3702=new JTramp(v3701, [runJTramp(v3697),runJTramp(v3699)]);
v3692=v3702;
} else {
v3692=v3690;
}
return v3692;
};
var v3703=v3689;
v3703=runJTramp(v3703);
if (typeof v3703 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3704=new JTramp(v3703, [runJTramp(v3688)]);
return v3704;
};
v3680=v3681;
lglobal["midir:gset!?"]=runJTramp(v3680);
})();
(function () {
var v3705;
var v3706=function (v3707) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v3709="midir:ffi";
var v3710=v3709;
var v3711=v3707;
var v3712=lglobal["list"];
var v3713=v3712;
v3713=runJTramp(v3713);
if (typeof v3713 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3714=new JTramp(v3713, [runJTramp(v3710),runJTramp(v3711)]);
return v3714;
};
v3705=v3706;
lglobal["midir:ffi"]=runJTramp(v3705);
})();
(function () {
var v3715;
var v3716=function (v3717) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v3719=v3717;
var v3720=lglobal["cons?"];
var v3721=v3720;
v3721=runJTramp(v3721);
if (typeof v3721 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3722=new JTramp(v3721, [runJTramp(v3719)]);
var v3723=v3722;
var v3724=function (v3725) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v3727;
if(runJTramp(v3725)) {
var v3728=v3717;
var v3729=lglobal["head"];
var v3730=v3729;
v3730=runJTramp(v3730);
if (typeof v3730 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3731=new JTramp(v3730, [runJTramp(v3728)]);
var v3732=v3731;
var v3733="midir:ffi";
var v3734=v3733;
var v3735=lglobal["="];
var v3736=v3735;
v3736=runJTramp(v3736);
if (typeof v3736 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3737=new JTramp(v3736, [runJTramp(v3732),runJTramp(v3734)]);
v3727=v3737;
} else {
v3727=v3725;
}
return v3727;
};
var v3738=v3724;
v3738=runJTramp(v3738);
if (typeof v3738 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3739=new JTramp(v3738, [runJTramp(v3723)]);
return v3739;
};
v3715=v3716;
lglobal["midir:ffi?"]=runJTramp(v3715);
})();
(function () {
var v3740;
var v3741=lglobal["dict"];
var v3742=v3741;
v3742=runJTramp(v3742);
if (typeof v3742 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3743=new JTramp(v3742, []);
v3740=v3743;
lglobal["midir-macros"]=runJTramp(v3740);
})();
(function () {
var v3744;
var v3745=new Nil();
v3744=v3745;
lglobal["midir-toplevel-defs"]=runJTramp(v3744);
})();
(function () {
var v3746;
var v3747="\n\"use strict\";\nif (window.Cons === undefined) {\n  window.Cons = function Cons(a, b) {\n    this.head = a;\n    this.tail = b;\n  };\n  window.Nil = function Nil() {};\n}\nwindow.JTramp = function JTramp(f, args) {\n  this.f = f;\n  this.args = args;\n};\nwindow.runJTramp = function (o) {\n  while (o instanceof JTramp) {\n    o = o.f.apply(undefined, o.args);\n  }\n  return o;\n};\nwindow.lglobal={\n  'prim:cons' : function (a, b) { return new Cons(a, b); },\n  'prim:cons?' : function (a) { return a instanceof Cons; },\n  'prim:head' : function (a) { return a.head; },\n  'prim:tail' : function (a) { return a.tail; },\n  'prim:nil' : function () { return new Nil(); },\n  'prim:nil?' : function (a) { return a instanceof Nil; }\n};\n";
v3746=v3747;
lglobal["js-default-lglobal"]=runJTramp(v3746);
})();
(function () {
var v3748;
var v3749=function (v3750,v3751) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v3753=v3750;
var v3754=v3751;
var v3755="(function (k, v) { window.lglobal[k] = v; })";
var v3756=v3755;
var v3757=lglobal["ffi"];
var v3758=v3757;
v3758=runJTramp(v3758);
if (typeof v3758 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3759=new JTramp(v3758, [runJTramp(v3756)]);
var v3760=v3759;
v3760=runJTramp(v3760);
if (typeof v3760 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3761=new JTramp(v3760, [runJTramp(v3753),runJTramp(v3754)]);
return v3761;
};
v3748=v3749;
lglobal["set-in-lglobal"]=runJTramp(v3748);
})();
(function () {
var v3762;
var v3763=function (v3764) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v3766=v3764;
var v3767="runJTramp";
var v3768=v3767;
var v3769=lglobal["ffi"];
var v3770=v3769;
v3770=runJTramp(v3770);
if (typeof v3770 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3771=new JTramp(v3770, [runJTramp(v3768)]);
var v3772=v3771;
v3772=runJTramp(v3772);
if (typeof v3772 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3773=new JTramp(v3772, [runJTramp(v3766)]);
return v3773;
};
v3762=v3763;
lglobal["runJTramp"]=runJTramp(v3762);
})();
(function () {
var v3774;
var v3775=function () {
if (arguments.length > 0) {
throw new Error("Expecting at most 0 arguments.");
}
var v3777=lglobal["dict"];
var v3778=v3777;
v3778=runJTramp(v3778);
if (typeof v3778 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3779=new JTramp(v3778, []);
var v3780=lglobal["midir-macros"]=runJTramp(v3779);
v3780=runJTramp(v3780);
var v3781=lglobal["js-default-lglobal"];
var v3782=v3781;
var v3783=lglobal["ffi"];
var v3784=v3783;
v3784=runJTramp(v3784);
if (typeof v3784 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3785=new JTramp(v3784, [runJTramp(v3782)]);
v3785=runJTramp(v3785);
var v3786=lglobal["js-default-lglobal"];
var v3787=v3786;
var v3788=lglobal["list"];
var v3789=v3788;
v3789=runJTramp(v3789);
if (typeof v3789 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3790=new JTramp(v3789, [runJTramp(v3787)]);
var v3791=v3790;
var v3792=lglobal["reverse"];
var v3793=v3792;
v3793=runJTramp(v3793);
if (typeof v3793 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3794=new JTramp(v3793, [runJTramp(v3791)]);
var v3795=lglobal["midir-toplevel-defs"]=runJTramp(v3794);
v3795=runJTramp(v3795);
var v3796="macro:set!";
var v3797=v3796;
var v3798=function (v3799,v3800) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v3802=lglobal["midir-macros"];
var v3803=v3802;
var v3804=v3799;
var v3805=v3800;
var v3806=lglobal["runJTramp"];
var v3807=v3806;
v3807=runJTramp(v3807);
if (typeof v3807 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3808=new JTramp(v3807, [runJTramp(v3805)]);
var v3809=v3808;
var v3810=function (v3811) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v3813=function () {
var v3814 = new Nil();
for (var v3815 = arguments.length - 1; v3815 >= 0; v3815--) {
  v3814 = new Cons(arguments[v3815], v3814);
}
var v3816=v3811;
var v3817=v3814;
var v3818=lglobal["apply"];
var v3819=v3818;
v3819=runJTramp(v3819);
if (typeof v3819 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3820=new JTramp(v3819, [runJTramp(v3816),runJTramp(v3817)]);
var v3821=v3820;
var v3822=lglobal["runJTramp"];
var v3823=v3822;
v3823=runJTramp(v3823);
if (typeof v3823 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3824=new JTramp(v3823, [runJTramp(v3821)]);
return v3824;
};
return v3813;
};
var v3825=v3810;
v3825=runJTramp(v3825);
if (typeof v3825 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3826=new JTramp(v3825, [runJTramp(v3809)]);
var v3827=v3826;
var v3828=lglobal["dict:set!"];
var v3829=v3828;
v3829=runJTramp(v3829);
if (typeof v3829 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3830=new JTramp(v3829, [runJTramp(v3803),runJTramp(v3804),runJTramp(v3827)]);
return v3830;
};
var v3831=v3798;
var v3832=lglobal["set-in-lglobal"];
var v3833=v3832;
v3833=runJTramp(v3833);
if (typeof v3833 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3834=new JTramp(v3833, [runJTramp(v3797),runJTramp(v3831)]);
v3834=runJTramp(v3834);
var v3835="macro:get";
var v3836=v3835;
var v3837=function (v3838) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v3840=lglobal["midir-macros"];
var v3841=v3840;
var v3842=v3838;
var v3843=lglobal["dict:get"];
var v3844=v3843;
v3844=runJTramp(v3844);
if (typeof v3844 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3845=new JTramp(v3844, [runJTramp(v3841),runJTramp(v3842)]);
return v3845;
};
var v3846=v3837;
var v3847=lglobal["set-in-lglobal"];
var v3848=v3847;
v3848=runJTramp(v3848);
if (typeof v3848 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3849=new JTramp(v3848, [runJTramp(v3836),runJTramp(v3846)]);
return v3849;
};
v3774=v3775;
lglobal["reset-midir-compile"]=runJTramp(v3774);
})();
(function () {
var v3850;
var v3851=function (v3852) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v3854=v3852;
var v3855=lglobal["cons?"];
var v3856=v3855;
v3856=runJTramp(v3856);
if (typeof v3856 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3857=new JTramp(v3856, [runJTramp(v3854)]);
var v3858=v3857;
var v3859=function (v3860) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v3862;
if(runJTramp(v3860)) {
var v3863=lglobal["midir-macros"];
var v3864=v3863;
var v3865=v3852;
var v3866=lglobal["head"];
var v3867=v3866;
v3867=runJTramp(v3867);
if (typeof v3867 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3868=new JTramp(v3867, [runJTramp(v3865)]);
var v3869=v3868;
var v3870=lglobal["dict:has?"];
var v3871=v3870;
v3871=runJTramp(v3871);
if (typeof v3871 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3872=new JTramp(v3871, [runJTramp(v3864),runJTramp(v3869)]);
v3862=v3872;
} else {
v3862=v3860;
}
return v3862;
};
var v3873=v3859;
v3873=runJTramp(v3873);
if (typeof v3873 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3874=new JTramp(v3873, [runJTramp(v3858)]);
var v3875;
if(runJTramp(v3874)) {
var v3876=lglobal["midir-macros"];
var v3877=v3876;
var v3878=v3852;
var v3879=lglobal["head"];
var v3880=v3879;
v3880=runJTramp(v3880);
if (typeof v3880 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3881=new JTramp(v3880, [runJTramp(v3878)]);
var v3882=v3881;
var v3883=lglobal["dict:get"];
var v3884=v3883;
v3884=runJTramp(v3884);
if (typeof v3884 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3885=new JTramp(v3884, [runJTramp(v3877),runJTramp(v3882)]);
var v3886=v3885;
var v3887=v3852;
var v3888=lglobal["apply"];
var v3889=v3888;
v3889=runJTramp(v3889);
if (typeof v3889 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3890=new JTramp(v3889, [runJTramp(v3886),runJTramp(v3887)]);
var v3891=v3890;
var v3892=lglobal["midir-macro-expand"];
var v3893=v3892;
v3893=runJTramp(v3893);
if (typeof v3893 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3894=new JTramp(v3893, [runJTramp(v3891)]);
v3875=v3894;
} else {
v3875=v3852;
}
return v3875;
};
v3850=v3851;
lglobal["midir-macro-expand"]=runJTramp(v3850);
})();
(function () {
var v3895;
var v3896=function (v3897,v3898,v3899) {
if (arguments.length < 3) {
throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
throw new Error("Expecting at most 3 arguments.");
}
var v3901;
var v3902=function (v3903) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v3905=v3903;
var v3906=lglobal["number?"];
var v3907=v3906;
v3907=runJTramp(v3907);
if (typeof v3907 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3908=new JTramp(v3907, [runJTramp(v3905)]);
var v3909=v3908;
var v3910=function (v3911) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v3913;
if(runJTramp(v3911)) {
v3913=v3911;
} else {
var v3914=v3903;
var v3915=lglobal["boolean?"];
var v3916=v3915;
v3916=runJTramp(v3916);
if (typeof v3916 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3917=new JTramp(v3916, [runJTramp(v3914)]);
var v3918=v3917;
var v3919=function (v3920) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v3922;
if(runJTramp(v3920)) {
v3922=v3920;
} else {
var v3923=v3903;
var v3924=lglobal["null?"];
var v3925=v3924;
v3925=runJTramp(v3925);
if (typeof v3925 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3926=new JTramp(v3925, [runJTramp(v3923)]);
v3922=v3926;
}
return v3922;
};
var v3927=v3919;
v3927=runJTramp(v3927);
if (typeof v3927 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3928=new JTramp(v3927, [runJTramp(v3918)]);
v3913=v3928;
}
return v3913;
};
var v3929=v3910;
v3929=runJTramp(v3929);
if (typeof v3929 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3930=new JTramp(v3929, [runJTramp(v3909)]);
return v3930;
};
var v3931=v3901=runJTramp(v3902);
var v3932=v3898;
var v3933=lglobal["midir-macro-expand"];
var v3934=v3933;
v3934=runJTramp(v3934);
if (typeof v3934 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3935=new JTramp(v3934, [runJTramp(v3932)]);
var v3936=v3935;
var v3937=function (v3938) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v3940=v3938;
var v3941=v3901;
v3941=runJTramp(v3941);
if (typeof v3941 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3942=new JTramp(v3941, [runJTramp(v3940)]);
var v3943;
if(runJTramp(v3942)) {
var v3944=v3938;
var v3945=v3899;
var v3946=lglobal["midir:lit"];
var v3947=v3946;
v3947=runJTramp(v3947);
if (typeof v3947 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3948=new JTramp(v3947, [runJTramp(v3944),runJTramp(v3945)]);
v3943=v3948;
} else {
var v3949=v3938;
var v3950=lglobal["string?"];
var v3951=v3950;
v3951=runJTramp(v3951);
if (typeof v3951 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3952=new JTramp(v3951, [runJTramp(v3949)]);
var v3953;
if(runJTramp(v3952)) {
var v3954="has?";
var v3955=v3954;
var v3956=v3938;
var v3957=v3897;
v3957=runJTramp(v3957);
if (typeof v3957 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3958=new JTramp(v3957, [runJTramp(v3955),runJTramp(v3956)]);
var v3959;
if(runJTramp(v3958)) {
var v3960="lookup";
var v3961=v3960;
var v3962=v3938;
var v3963=v3897;
v3963=runJTramp(v3963);
if (typeof v3963 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3964=new JTramp(v3963, [runJTramp(v3961),runJTramp(v3962)]);
var v3965=v3964;
var v3966=v3899;
var v3967=lglobal["midir:lookup"];
var v3968=v3967;
v3968=runJTramp(v3968);
if (typeof v3968 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3969=new JTramp(v3968, [runJTramp(v3965),runJTramp(v3966)]);
v3959=v3969;
} else {
var v3970=v3938;
var v3971=v3899;
var v3972=lglobal["midir:glookup"];
var v3973=v3972;
v3973=runJTramp(v3973);
if (typeof v3973 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3974=new JTramp(v3973, [runJTramp(v3970),runJTramp(v3971)]);
v3959=v3974;
}
v3953=v3959;
} else {
var v3975=v3938;
var v3976=lglobal["cons?"];
var v3977=v3976;
v3977=runJTramp(v3977);
if (typeof v3977 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3978=new JTramp(v3977, [runJTramp(v3975)]);
var v3979;
if(runJTramp(v3978)) {
var v3980=v3897;
var v3981=v3938;
var v3982=v3899;
var v3983=lglobal["compile-form-to-midir"];
var v3984=v3983;
v3984=runJTramp(v3984);
if (typeof v3984 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3985=new JTramp(v3984, [runJTramp(v3980),runJTramp(v3981),runJTramp(v3982)]);
v3979=v3985;
} else {
var v3986=lglobal["otherwise"];
var v3987;
if(runJTramp(v3986)) {
var v3988="Unknown form: ";
var v3989=v3988;
var v3990=v3938;
var v3991=lglobal["console"];
var v3992=v3991;
v3992=runJTramp(v3992);
if (typeof v3992 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3993=new JTramp(v3992, [runJTramp(v3990)]);
var v3994=v3993;
var v3995=lglobal["repr"];
var v3996=v3995;
v3996=runJTramp(v3996);
if (typeof v3996 !== "function") {
throw new Error("Cannot call non-function.");
}
var v3997=new JTramp(v3996, [runJTramp(v3994)]);
var v3998=v3997;
var v3999=lglobal["++"];
var v4000=v3999;
v4000=runJTramp(v4000);
if (typeof v4000 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4001=new JTramp(v4000, [runJTramp(v3989),runJTramp(v3998)]);
var v4002=v4001;
var v4003=lglobal["error"];
var v4004=v4003;
v4004=runJTramp(v4004);
if (typeof v4004 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4005=new JTramp(v4004, [runJTramp(v4002)]);
v3987=v4005;
} else {
var v4006=null;
v3987=v4006;
}
v3979=v3987;
}
v3953=v3979;
}
v3943=v3953;
}
return v3943;
};
var v4007=v3937;
v4007=runJTramp(v4007);
if (typeof v4007 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4008=new JTramp(v4007, [runJTramp(v3936)]);
return v4008;
};
v3895=v3896;
lglobal["compile-to-midir"]=runJTramp(v3895);
})();
(function () {
var v4009;
var v4010=function (v4011) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v4013;
var v4014=function (v4015) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v4017=lglobal["null"];
var v4018=v4017;
var v4019=lglobal["make-env"];
var v4020=v4019;
v4020=runJTramp(v4020);
if (typeof v4020 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4021=new JTramp(v4020, [runJTramp(v4018)]);
var v4022=v4021;
var v4023=v4015;
var v4024=lglobal["midir:leave"];
var v4025=v4024;
v4025=runJTramp(v4025);
if (typeof v4025 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4026=new JTramp(v4025, []);
var v4027=v4026;
var v4028=lglobal["compile-to-midir"];
var v4029=v4028;
v4029=runJTramp(v4029);
if (typeof v4029 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4030=new JTramp(v4029, [runJTramp(v4022),runJTramp(v4023),runJTramp(v4027)]);
var v4031=v4030;
var v4032=lglobal["scope"];
var v4033=v4032;
v4033=runJTramp(v4033);
if (typeof v4033 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4034=new JTramp(v4033, [runJTramp(v4031)]);
var v4035=v4034;
var v4036=lglobal["run-copy-propagate-midir"];
var v4037=v4036;
v4037=runJTramp(v4037);
if (typeof v4037 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4038=new JTramp(v4037, [runJTramp(v4035)]);
var v4039=v4038;
var v4040=lglobal["scope"];
var v4041=v4040;
v4041=runJTramp(v4041);
if (typeof v4041 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4042=new JTramp(v4041, [runJTramp(v4039)]);
return v4042;
};
var v4043=v4013=runJTramp(v4014);
var v4044=v4011;
var v4045=lglobal["midir-macro-expand"];
var v4046=v4045;
v4046=runJTramp(v4046);
if (typeof v4046 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4047=new JTramp(v4046, [runJTramp(v4044)]);
var v4048=v4047;
var v4049=lglobal["scope"];
var v4050=v4049;
v4050=runJTramp(v4050);
if (typeof v4050 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4051=new JTramp(v4050, [runJTramp(v4048)]);
var v4052=v4051;
var v4053=function (v4054) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v4056=v4054;
var v4057=lglobal["cons?"];
var v4058=v4057;
v4058=runJTramp(v4058);
if (typeof v4058 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4059=new JTramp(v4058, [runJTramp(v4056)]);
var v4060=v4059;
var v4061=function (v4062) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v4064;
if(runJTramp(v4062)) {
var v4065=v4054;
var v4066=lglobal["head"];
var v4067=v4066;
v4067=runJTramp(v4067);
if (typeof v4067 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4068=new JTramp(v4067, [runJTramp(v4065)]);
var v4069=v4068;
var v4070="prim:def";
var v4071=v4070;
var v4072=lglobal["="];
var v4073=v4072;
v4073=runJTramp(v4073);
if (typeof v4073 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4074=new JTramp(v4073, [runJTramp(v4069),runJTramp(v4071)]);
v4064=v4074;
} else {
v4064=v4062;
}
return v4064;
};
var v4075=v4061;
v4075=runJTramp(v4075);
if (typeof v4075 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4076=new JTramp(v4075, [runJTramp(v4060)]);
var v4077;
if(runJTramp(v4076)) {
var v4078=v4054;
var v4079=lglobal["tail"];
var v4080=v4079;
v4080=runJTramp(v4080);
if (typeof v4080 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4081=new JTramp(v4080, [runJTramp(v4078)]);
var v4082=v4081;
var v4083=lglobal["tail"];
var v4084=v4083;
v4084=runJTramp(v4084);
if (typeof v4084 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4085=new JTramp(v4084, [runJTramp(v4082)]);
var v4086=v4085;
var v4087=lglobal["head"];
var v4088=v4087;
v4088=runJTramp(v4088);
if (typeof v4088 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4089=new JTramp(v4088, [runJTramp(v4086)]);
var v4090=v4089;
var v4091=v4013;
v4091=runJTramp(v4091);
if (typeof v4091 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4092=new JTramp(v4091, [runJTramp(v4090)]);
var v4093=v4092;
var v4094=function (v4095) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v4097=lglobal["null"];
var v4098=v4097;
var v4099=lglobal["make-js-var"];
var v4100=v4099;
v4100=runJTramp(v4100);
if (typeof v4100 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4101=new JTramp(v4100, [runJTramp(v4098)]);
var v4102=v4101;
var v4103=function (v4104) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v4106="(function () {\n";
var v4107=v4106;
var v4108="var ";
var v4109=v4108;
var v4110=v4104;
var v4111=";\n";
var v4112=v4111;
var v4113=v4095;
var v4114="ERROR";
var v4115=v4114;
var v4116=v4104;
var v4117=lglobal["compile-midir-to-js"];
var v4118=v4117;
v4118=runJTramp(v4118);
if (typeof v4118 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4119=new JTramp(v4118, [runJTramp(v4113),runJTramp(v4115),runJTramp(v4116)]);
var v4120=v4119;
var v4121="lglobal[";
var v4122=v4121;
var v4123=v4054;
var v4124=lglobal["tail"];
var v4125=v4124;
v4125=runJTramp(v4125);
if (typeof v4125 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4126=new JTramp(v4125, [runJTramp(v4123)]);
var v4127=v4126;
var v4128=lglobal["head"];
var v4129=v4128;
v4129=runJTramp(v4129);
if (typeof v4129 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4130=new JTramp(v4129, [runJTramp(v4127)]);
var v4131=v4130;
var v4132=lglobal["js-escape-string"];
var v4133=v4132;
v4133=runJTramp(v4133);
if (typeof v4133 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4134=new JTramp(v4133, [runJTramp(v4131)]);
var v4135=v4134;
var v4136="]";
var v4137=v4136;
var v4138="=runJTramp(";
var v4139=v4138;
var v4140=v4104;
var v4141=");\n";
var v4142=v4141;
var v4143="})();\n";
var v4144=v4143;
var v4145=lglobal["++"];
var v4146=v4145;
v4146=runJTramp(v4146);
if (typeof v4146 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4147=new JTramp(v4146, [runJTramp(v4107),runJTramp(v4109),runJTramp(v4110),runJTramp(v4112),runJTramp(v4120),runJTramp(v4122),runJTramp(v4135),runJTramp(v4137),runJTramp(v4139),runJTramp(v4140),runJTramp(v4142),runJTramp(v4144)]);
var v4148=v4147;
var v4149=function (v4150) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v4152=v4150;
var v4153=lglobal["scope"];
var v4154=v4153;
v4154=runJTramp(v4154);
if (typeof v4154 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4155=new JTramp(v4154, [runJTramp(v4152)]);
var v4156=v4155;
var v4157=lglobal["ffi"];
var v4158=v4157;
v4158=runJTramp(v4158);
if (typeof v4158 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4159=new JTramp(v4158, [runJTramp(v4156)]);
v4159=runJTramp(v4159);
var v4160=v4150;
var v4161=lglobal["midir-toplevel-defs"];
var v4162=v4161;
var v4163=lglobal["cons"];
var v4164=v4163;
v4164=runJTramp(v4164);
if (typeof v4164 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4165=new JTramp(v4164, [runJTramp(v4160),runJTramp(v4162)]);
var v4166=lglobal["midir-toplevel-defs"]=runJTramp(v4165);
return v4166;
};
var v4167=v4149;
v4167=runJTramp(v4167);
if (typeof v4167 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4168=new JTramp(v4167, [runJTramp(v4148)]);
return v4168;
};
var v4169=v4103;
v4169=runJTramp(v4169);
if (typeof v4169 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4170=new JTramp(v4169, [runJTramp(v4102)]);
return v4170;
};
var v4171=v4094;
v4171=runJTramp(v4171);
if (typeof v4171 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4172=new JTramp(v4171, [runJTramp(v4093)]);
v4077=v4172;
} else {
var v4173=v4054;
var v4174=lglobal["cons?"];
var v4175=v4174;
v4175=runJTramp(v4175);
if (typeof v4175 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4176=new JTramp(v4175, [runJTramp(v4173)]);
var v4177=v4176;
var v4178=function (v4179) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v4181;
if(runJTramp(v4179)) {
var v4182=v4054;
var v4183=lglobal["head"];
var v4184=v4183;
v4184=runJTramp(v4184);
if (typeof v4184 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4185=new JTramp(v4184, [runJTramp(v4182)]);
var v4186=v4185;
var v4187="prim:do";
var v4188=v4187;
var v4189=lglobal["="];
var v4190=v4189;
v4190=runJTramp(v4190);
if (typeof v4190 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4191=new JTramp(v4190, [runJTramp(v4186),runJTramp(v4188)]);
v4181=v4191;
} else {
v4181=v4179;
}
return v4181;
};
var v4192=v4178;
v4192=runJTramp(v4192);
if (typeof v4192 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4193=new JTramp(v4192, [runJTramp(v4177)]);
var v4194;
if(runJTramp(v4193)) {
var v4195=lglobal["compile-toplevel-to-midir"];
var v4196=v4195;
var v4197=v4054;
var v4198=lglobal["tail"];
var v4199=v4198;
v4199=runJTramp(v4199);
if (typeof v4199 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4200=new JTramp(v4199, [runJTramp(v4197)]);
var v4201=v4200;
var v4202=lglobal["each"];
var v4203=v4202;
v4203=runJTramp(v4203);
if (typeof v4203 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4204=new JTramp(v4203, [runJTramp(v4196),runJTramp(v4201)]);
v4194=v4204;
} else {
var v4205=v4054;
var v4206=lglobal["cons?"];
var v4207=v4206;
v4207=runJTramp(v4207);
if (typeof v4207 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4208=new JTramp(v4207, [runJTramp(v4205)]);
var v4209=v4208;
var v4210=function (v4211) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v4213;
if(runJTramp(v4211)) {
var v4214=v4054;
var v4215=lglobal["head"];
var v4216=v4215;
v4216=runJTramp(v4216);
if (typeof v4216 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4217=new JTramp(v4216, [runJTramp(v4214)]);
var v4218=v4217;
var v4219="when-execute";
var v4220=v4219;
var v4221=lglobal["="];
var v4222=v4221;
v4222=runJTramp(v4222);
if (typeof v4222 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4223=new JTramp(v4222, [runJTramp(v4218),runJTramp(v4220)]);
v4213=v4223;
} else {
v4213=v4211;
}
return v4213;
};
var v4224=v4210;
v4224=runJTramp(v4224);
if (typeof v4224 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4225=new JTramp(v4224, [runJTramp(v4209)]);
var v4226;
if(runJTramp(v4225)) {
var v4227=lglobal["when-execute-toplevel"];
var v4228=v4227;
var v4229=v4054;
var v4230=lglobal["tail"];
var v4231=v4230;
v4231=runJTramp(v4231);
if (typeof v4231 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4232=new JTramp(v4231, [runJTramp(v4229)]);
var v4233=v4232;
var v4234=lglobal["each"];
var v4235=v4234;
v4235=runJTramp(v4235);
if (typeof v4235 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4236=new JTramp(v4235, [runJTramp(v4228),runJTramp(v4233)]);
v4226=v4236;
} else {
var v4237=lglobal["otherwise"];
var v4238;
if(runJTramp(v4237)) {
var v4239=lglobal["null"];
var v4240=v4239;
var v4241=lglobal["make-js-var"];
var v4242=v4241;
v4242=runJTramp(v4242);
if (typeof v4242 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4243=new JTramp(v4242, [runJTramp(v4240)]);
var v4244=v4243;
var v4245=function (v4246) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v4248="(function () {\n";
var v4249=v4248;
var v4250="var ";
var v4251=v4250;
var v4252=v4246;
var v4253=";\n";
var v4254=v4253;
var v4255=v4054;
var v4256=v4013;
v4256=runJTramp(v4256);
if (typeof v4256 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4257=new JTramp(v4256, [runJTramp(v4255)]);
var v4258=v4257;
var v4259="ERROR";
var v4260=v4259;
var v4261=v4246;
var v4262=lglobal["compile-midir-to-js"];
var v4263=v4262;
v4263=runJTramp(v4263);
if (typeof v4263 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4264=new JTramp(v4263, [runJTramp(v4258),runJTramp(v4260),runJTramp(v4261)]);
var v4265=v4264;
var v4266="return runJTramp(";
var v4267=v4266;
var v4268=v4246;
var v4269=");\n";
var v4270=v4269;
var v4271="})();\n";
var v4272=v4271;
var v4273=lglobal["++"];
var v4274=v4273;
v4274=runJTramp(v4274);
if (typeof v4274 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4275=new JTramp(v4274, [runJTramp(v4249),runJTramp(v4251),runJTramp(v4252),runJTramp(v4254),runJTramp(v4265),runJTramp(v4267),runJTramp(v4268),runJTramp(v4270),runJTramp(v4272)]);
var v4276=v4275;
var v4277=function (v4278) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v4280=v4278;
var v4281=lglobal["scope"];
var v4282=v4281;
v4282=runJTramp(v4282);
if (typeof v4282 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4283=new JTramp(v4282, [runJTramp(v4280)]);
var v4284=v4283;
var v4285=lglobal["ffi"];
var v4286=v4285;
v4286=runJTramp(v4286);
if (typeof v4286 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4287=new JTramp(v4286, [runJTramp(v4284)]);
return v4287;
};
var v4288=v4277;
v4288=runJTramp(v4288);
if (typeof v4288 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4289=new JTramp(v4288, [runJTramp(v4276)]);
return v4289;
};
var v4290=v4245;
v4290=runJTramp(v4290);
if (typeof v4290 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4291=new JTramp(v4290, [runJTramp(v4244)]);
v4238=v4291;
} else {
var v4292=null;
v4238=v4292;
}
v4226=v4238;
}
v4194=v4226;
}
v4077=v4194;
}
return v4077;
};
var v4293=v4053;
v4293=runJTramp(v4293);
if (typeof v4293 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4294=new JTramp(v4293, [runJTramp(v4052)]);
return v4294;
};
v4009=v4010;
lglobal["compile-toplevel-to-midir"]=runJTramp(v4009);
})();
(function () {
var v4295;
var v4296=function (v4297) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v4299;
var v4300=function (v4301) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v4303=lglobal["null"];
var v4304=v4303;
var v4305=lglobal["make-env"];
var v4306=v4305;
v4306=runJTramp(v4306);
if (typeof v4306 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4307=new JTramp(v4306, [runJTramp(v4304)]);
var v4308=v4307;
var v4309=v4301;
var v4310=lglobal["midir:leave"];
var v4311=v4310;
v4311=runJTramp(v4311);
if (typeof v4311 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4312=new JTramp(v4311, []);
var v4313=v4312;
var v4314=lglobal["compile-to-midir"];
var v4315=v4314;
v4315=runJTramp(v4315);
if (typeof v4315 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4316=new JTramp(v4315, [runJTramp(v4308),runJTramp(v4309),runJTramp(v4313)]);
return v4316;
};
var v4317=v4299=runJTramp(v4300);
var v4318=v4297;
var v4319=lglobal["midir-macro-expand"];
var v4320=v4319;
v4320=runJTramp(v4320);
if (typeof v4320 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4321=new JTramp(v4320, [runJTramp(v4318)]);
var v4322=v4321;
var v4323=function (v4324) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v4326=v4324;
var v4327=lglobal["cons?"];
var v4328=v4327;
v4328=runJTramp(v4328);
if (typeof v4328 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4329=new JTramp(v4328, [runJTramp(v4326)]);
var v4330=v4329;
var v4331=function (v4332) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v4334;
if(runJTramp(v4332)) {
var v4335=v4324;
var v4336=lglobal["head"];
var v4337=v4336;
v4337=runJTramp(v4337);
if (typeof v4337 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4338=new JTramp(v4337, [runJTramp(v4335)]);
var v4339=v4338;
var v4340="prim:def";
var v4341=v4340;
var v4342=lglobal["="];
var v4343=v4342;
v4343=runJTramp(v4343);
if (typeof v4343 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4344=new JTramp(v4343, [runJTramp(v4339),runJTramp(v4341)]);
v4334=v4344;
} else {
v4334=v4332;
}
return v4334;
};
var v4345=v4331;
v4345=runJTramp(v4345);
if (typeof v4345 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4346=new JTramp(v4345, [runJTramp(v4330)]);
var v4347;
if(runJTramp(v4346)) {
var v4348=v4324;
var v4349=lglobal["tail"];
var v4350=v4349;
v4350=runJTramp(v4350);
if (typeof v4350 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4351=new JTramp(v4350, [runJTramp(v4348)]);
var v4352=v4351;
var v4353=lglobal["tail"];
var v4354=v4353;
v4354=runJTramp(v4354);
if (typeof v4354 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4355=new JTramp(v4354, [runJTramp(v4352)]);
var v4356=v4355;
var v4357=lglobal["head"];
var v4358=v4357;
v4358=runJTramp(v4358);
if (typeof v4358 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4359=new JTramp(v4358, [runJTramp(v4356)]);
var v4360=v4359;
var v4361=v4299;
v4361=runJTramp(v4361);
if (typeof v4361 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4362=new JTramp(v4361, [runJTramp(v4360)]);
var v4363=v4362;
var v4364=function (v4365) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v4367=v4324;
var v4368=lglobal["tail"];
var v4369=v4368;
v4369=runJTramp(v4369);
if (typeof v4369 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4370=new JTramp(v4369, [runJTramp(v4367)]);
var v4371=v4370;
var v4372=lglobal["head"];
var v4373=v4372;
v4373=runJTramp(v4373);
if (typeof v4373 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4374=new JTramp(v4373, [runJTramp(v4371)]);
var v4375=v4374;
var v4376=v4365;
var v4377=lglobal["list"];
var v4378=v4377;
v4378=runJTramp(v4378);
if (typeof v4378 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4379=new JTramp(v4378, [runJTramp(v4375),runJTramp(v4376)]);
var v4380=v4379;
var v4381=lglobal["midir-toplevel-defs"];
var v4382=v4381;
var v4383=lglobal["append"];
var v4384=v4383;
v4384=runJTramp(v4384);
if (typeof v4384 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4385=new JTramp(v4384, [runJTramp(v4380),runJTramp(v4382)]);
var v4386=lglobal["midir-toplevel-defs"]=runJTramp(v4385);
return v4386;
};
var v4387=v4364;
v4387=runJTramp(v4387);
if (typeof v4387 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4388=new JTramp(v4387, [runJTramp(v4363)]);
v4347=v4388;
} else {
var v4389=lglobal["null"];
var v4390=v4389;
var v4391=v4324;
var v4392=v4299;
v4392=runJTramp(v4392);
if (typeof v4392 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4393=new JTramp(v4392, [runJTramp(v4391)]);
var v4394=v4393;
var v4395=lglobal["midir-toplevel-defs"];
var v4396=v4395;
var v4397=lglobal["cons"];
var v4398=v4397;
v4398=runJTramp(v4398);
if (typeof v4398 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4399=new JTramp(v4398, [runJTramp(v4394),runJTramp(v4396)]);
var v4400=v4399;
var v4401=lglobal["cons"];
var v4402=v4401;
v4402=runJTramp(v4402);
if (typeof v4402 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4403=new JTramp(v4402, [runJTramp(v4390),runJTramp(v4400)]);
var v4404=lglobal["midir-toplevel-defs"]=runJTramp(v4403);
v4347=v4404;
}
return v4347;
};
var v4405=v4323;
v4405=runJTramp(v4405);
if (typeof v4405 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4406=new JTramp(v4405, [runJTramp(v4322)]);
return v4406;
};
v4295=v4296;
lglobal["when-execute-toplevel"]=runJTramp(v4295);
})();
(function () {
var v4407;
var v4408=function (v4409,v4410,v4411) {
if (arguments.length < 3) {
throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
throw new Error("Expecting at most 3 arguments.");
}
var v4413=lglobal["compile-to-midir"];
var v4414=v4413;
var v4415=v4409;
var v4416=lglobal["partial"];
var v4417=v4416;
v4417=runJTramp(v4417);
if (typeof v4417 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4418=new JTramp(v4417, [runJTramp(v4414),runJTramp(v4415)]);
var v4419=v4418;
var v4420=lglobal["curry"];
var v4421=v4420;
v4421=runJTramp(v4421);
if (typeof v4421 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4422=new JTramp(v4421, [runJTramp(v4419)]);
var v4423=v4422;
var v4424=v4410;
var v4425=lglobal["map"];
var v4426=v4425;
v4426=runJTramp(v4426);
if (typeof v4426 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4427=new JTramp(v4426, [runJTramp(v4423),runJTramp(v4424)]);
var v4428=v4427;
var v4429=function (v4430) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v4432=lglobal["$"];
var v4433=v4432;
var v4434=v4411;
var v4435=lglobal["midir:bind-drop"];
var v4436=v4435;
var v4437=v4430;
var v4438=lglobal["intercalate"];
var v4439=v4438;
v4439=runJTramp(v4439);
if (typeof v4439 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4440=new JTramp(v4439, [runJTramp(v4436),runJTramp(v4437)]);
var v4441=v4440;
var v4442=lglobal["foldr"];
var v4443=v4442;
v4443=runJTramp(v4443);
if (typeof v4443 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4444=new JTramp(v4443, [runJTramp(v4433),runJTramp(v4434),runJTramp(v4441)]);
return v4444;
};
var v4445=v4429;
v4445=runJTramp(v4445);
if (typeof v4445 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4446=new JTramp(v4445, [runJTramp(v4428)]);
return v4446;
};
v4407=v4408;
lglobal["compile-body-to-midir"]=runJTramp(v4407);
})();
(function () {
var v4447;
var v4448=function (v4449,v4450,v4451) {
if (arguments.length < 3) {
throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
throw new Error("Expecting at most 3 arguments.");
}
var v4453=v4450;
var v4454=lglobal["head"];
var v4455=v4454;
v4455=runJTramp(v4455);
if (typeof v4455 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4456=new JTramp(v4455, [runJTramp(v4453)]);
var v4457=v4456;
var v4458=function (v4459) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v4461=v4459;
var v4462="quote";
var v4463=v4462;
var v4464=lglobal["="];
var v4465=v4464;
v4465=runJTramp(v4465);
if (typeof v4465 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4466=new JTramp(v4465, [runJTramp(v4461),runJTramp(v4463)]);
var v4467;
if(runJTramp(v4466)) {
var v4468=v4450;
var v4469=lglobal["tail"];
var v4470=v4469;
v4470=runJTramp(v4470);
if (typeof v4470 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4471=new JTramp(v4470, [runJTramp(v4468)]);
var v4472=v4471;
var v4473=lglobal["head"];
var v4474=v4473;
v4474=runJTramp(v4474);
if (typeof v4474 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4475=new JTramp(v4474, [runJTramp(v4472)]);
var v4476=v4475;
var v4477=v4451;
var v4478=lglobal["midir:lit"];
var v4479=v4478;
v4479=runJTramp(v4479);
if (typeof v4479 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4480=new JTramp(v4479, [runJTramp(v4476),runJTramp(v4477)]);
v4467=v4480;
} else {
var v4481=v4459;
var v4482="prim:do";
var v4483=v4482;
var v4484=lglobal["="];
var v4485=v4484;
v4485=runJTramp(v4485);
if (typeof v4485 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4486=new JTramp(v4485, [runJTramp(v4481),runJTramp(v4483)]);
var v4487;
if(runJTramp(v4486)) {
var v4488=v4449;
var v4489=v4450;
var v4490=lglobal["tail"];
var v4491=v4490;
v4491=runJTramp(v4491);
if (typeof v4491 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4492=new JTramp(v4491, [runJTramp(v4489)]);
var v4493=v4492;
var v4494=v4451;
var v4495=lglobal["compile-body-to-midir"];
var v4496=v4495;
v4496=runJTramp(v4496);
if (typeof v4496 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4497=new JTramp(v4496, [runJTramp(v4488),runJTramp(v4493),runJTramp(v4494)]);
v4487=v4497;
} else {
var v4498=v4459;
var v4499="prim:if";
var v4500=v4499;
var v4501=lglobal["="];
var v4502=v4501;
v4502=runJTramp(v4502);
if (typeof v4502 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4503=new JTramp(v4502, [runJTramp(v4498),runJTramp(v4500)]);
var v4504;
if(runJTramp(v4503)) {
var v4505=v4449;
var v4506=v4450;
var v4507=lglobal["tail"];
var v4508=v4507;
v4508=runJTramp(v4508);
if (typeof v4508 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4509=new JTramp(v4508, [runJTramp(v4506)]);
var v4510=v4509;
var v4511=lglobal["tail"];
var v4512=v4511;
v4512=runJTramp(v4512);
if (typeof v4512 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4513=new JTramp(v4512, [runJTramp(v4510)]);
var v4514=v4513;
var v4515=lglobal["head"];
var v4516=v4515;
v4516=runJTramp(v4516);
if (typeof v4516 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4517=new JTramp(v4516, [runJTramp(v4514)]);
var v4518=v4517;
var v4519=lglobal["midir:leave"];
var v4520=v4519;
v4520=runJTramp(v4520);
if (typeof v4520 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4521=new JTramp(v4520, []);
var v4522=v4521;
var v4523=lglobal["compile-to-midir"];
var v4524=v4523;
v4524=runJTramp(v4524);
if (typeof v4524 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4525=new JTramp(v4524, [runJTramp(v4505),runJTramp(v4518),runJTramp(v4522)]);
var v4526=v4525;
var v4527=v4449;
var v4528=v4450;
var v4529=lglobal["tail"];
var v4530=v4529;
v4530=runJTramp(v4530);
if (typeof v4530 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4531=new JTramp(v4530, [runJTramp(v4528)]);
var v4532=v4531;
var v4533=lglobal["tail"];
var v4534=v4533;
v4534=runJTramp(v4534);
if (typeof v4534 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4535=new JTramp(v4534, [runJTramp(v4532)]);
var v4536=v4535;
var v4537=lglobal["tail"];
var v4538=v4537;
v4538=runJTramp(v4538);
if (typeof v4538 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4539=new JTramp(v4538, [runJTramp(v4536)]);
var v4540=v4539;
var v4541=lglobal["head"];
var v4542=v4541;
v4542=runJTramp(v4542);
if (typeof v4542 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4543=new JTramp(v4542, [runJTramp(v4540)]);
var v4544=v4543;
var v4545=lglobal["midir:leave"];
var v4546=v4545;
v4546=runJTramp(v4546);
if (typeof v4546 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4547=new JTramp(v4546, []);
var v4548=v4547;
var v4549=lglobal["compile-to-midir"];
var v4550=v4549;
v4550=runJTramp(v4550);
if (typeof v4550 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4551=new JTramp(v4550, [runJTramp(v4527),runJTramp(v4544),runJTramp(v4548)]);
var v4552=v4551;
var v4553=function (v4554,v4555) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v4557=v4449;
var v4558=v4450;
var v4559=lglobal["tail"];
var v4560=v4559;
v4560=runJTramp(v4560);
if (typeof v4560 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4561=new JTramp(v4560, [runJTramp(v4558)]);
var v4562=v4561;
var v4563=lglobal["head"];
var v4564=v4563;
v4564=runJTramp(v4564);
if (typeof v4564 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4565=new JTramp(v4564, [runJTramp(v4562)]);
var v4566=v4565;
var v4567=v4554;
var v4568=v4555;
var v4569=v4451;
var v4570=lglobal["midir:if"];
var v4571=v4570;
v4571=runJTramp(v4571);
if (typeof v4571 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4572=new JTramp(v4571, [runJTramp(v4567),runJTramp(v4568),runJTramp(v4569)]);
var v4573=v4572;
var v4574=lglobal["compile-to-midir"];
var v4575=v4574;
v4575=runJTramp(v4575);
if (typeof v4575 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4576=new JTramp(v4575, [runJTramp(v4557),runJTramp(v4566),runJTramp(v4573)]);
return v4576;
};
var v4577=v4553;
v4577=runJTramp(v4577);
if (typeof v4577 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4578=new JTramp(v4577, [runJTramp(v4526),runJTramp(v4552)]);
v4504=v4578;
} else {
var v4579=v4459;
var v4580="prim:fun";
var v4581=v4580;
var v4582=lglobal["="];
var v4583=v4582;
v4583=runJTramp(v4583);
if (typeof v4583 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4584=new JTramp(v4583, [runJTramp(v4579),runJTramp(v4581)]);
var v4585;
if(runJTramp(v4584)) {
var v4586=v4450;
var v4587=lglobal["tail"];
var v4588=v4587;
v4588=runJTramp(v4588);
if (typeof v4588 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4589=new JTramp(v4588, [runJTramp(v4586)]);
var v4590=v4589;
var v4591=lglobal["head"];
var v4592=v4591;
v4592=runJTramp(v4592);
if (typeof v4592 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4593=new JTramp(v4592, [runJTramp(v4590)]);
var v4594=v4593;
var v4595=lglobal["split-fun-args"];
var v4596=v4595;
v4596=runJTramp(v4596);
if (typeof v4596 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4597=new JTramp(v4596, [runJTramp(v4594)]);
var v4598=v4597;
var v4599=function (v4600) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v4602=v4450;
var v4603=lglobal["tail"];
var v4604=v4603;
v4604=runJTramp(v4604);
if (typeof v4604 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4605=new JTramp(v4604, [runJTramp(v4602)]);
var v4606=v4605;
var v4607=lglobal["tail"];
var v4608=v4607;
v4608=runJTramp(v4608);
if (typeof v4608 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4609=new JTramp(v4608, [runJTramp(v4606)]);
var v4610=v4609;
var v4611=lglobal["normalize-fun-body"];
var v4612=v4611;
v4612=runJTramp(v4612);
if (typeof v4612 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4613=new JTramp(v4612, [runJTramp(v4610)]);
var v4614=v4613;
var v4615=lglobal["split-fun-body"];
var v4616=v4615;
v4616=runJTramp(v4616);
if (typeof v4616 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4617=new JTramp(v4616, [runJTramp(v4614)]);
var v4618=v4617;
var v4619=function (v4620) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v4622=lglobal["head"];
var v4623=v4622;
var v4624=lglobal["tail"];
var v4625=v4624;
var v4626=lglobal["."];
var v4627=v4626;
v4627=runJTramp(v4627);
if (typeof v4627 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4628=new JTramp(v4627, [runJTramp(v4623),runJTramp(v4625)]);
var v4629=v4628;
var v4630=v4620;
var v4631=lglobal["head"];
var v4632=v4631;
v4632=runJTramp(v4632);
if (typeof v4632 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4633=new JTramp(v4632, [runJTramp(v4630)]);
var v4634=v4633;
var v4635=lglobal["map"];
var v4636=v4635;
v4636=runJTramp(v4636);
if (typeof v4636 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4637=new JTramp(v4636, [runJTramp(v4629),runJTramp(v4634)]);
var v4638=v4637;
var v4639=function (v4640) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v4642=v4600;
var v4643=lglobal["head"];
var v4644=v4643;
v4644=runJTramp(v4644);
if (typeof v4644 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4645=new JTramp(v4644, [runJTramp(v4642)]);
var v4646=v4645;
var v4647=v4600;
var v4648=lglobal["tail"];
var v4649=v4648;
v4649=runJTramp(v4649);
if (typeof v4649 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4650=new JTramp(v4649, [runJTramp(v4647)]);
var v4651=v4650;
var v4652=lglobal["null?"];
var v4653=v4652;
v4653=runJTramp(v4653);
if (typeof v4653 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4654=new JTramp(v4653, [runJTramp(v4651)]);
var v4655;
if(runJTramp(v4654)) {
var v4656=lglobal["list"];
var v4657=v4656;
v4657=runJTramp(v4657);
if (typeof v4657 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4658=new JTramp(v4657, []);
v4655=v4658;
} else {
var v4659=v4600;
var v4660=lglobal["tail"];
var v4661=v4660;
v4661=runJTramp(v4661);
if (typeof v4661 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4662=new JTramp(v4661, [runJTramp(v4659)]);
var v4663=v4662;
var v4664=lglobal["list"];
var v4665=v4664;
v4665=runJTramp(v4665);
if (typeof v4665 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4666=new JTramp(v4665, [runJTramp(v4663)]);
v4655=v4666;
}
var v4667=v4655;
var v4668=v4640;
var v4669=lglobal["append"];
var v4670=v4669;
v4670=runJTramp(v4670);
if (typeof v4670 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4671=new JTramp(v4670, [runJTramp(v4646),runJTramp(v4667),runJTramp(v4668)]);
var v4672=v4671;
var v4673=function (v4674) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v4676=lglobal["make-env"];
var v4677=v4676;
var v4678=v4449;
var v4679=function (v4680) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v4682=v4680;
var v4683=v4680;
var v4684=lglobal["new-var"];
var v4685=v4684;
v4685=runJTramp(v4685);
if (typeof v4685 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4686=new JTramp(v4685, [runJTramp(v4683)]);
var v4687=v4686;
var v4688=lglobal["list"];
var v4689=v4688;
v4689=runJTramp(v4689);
if (typeof v4689 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4690=new JTramp(v4689, [runJTramp(v4682),runJTramp(v4687)]);
return v4690;
};
var v4691=v4679;
var v4692=v4674;
var v4693=lglobal["map-append"];
var v4694=v4693;
v4694=runJTramp(v4694);
if (typeof v4694 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4695=new JTramp(v4694, [runJTramp(v4691),runJTramp(v4692)]);
var v4696=v4695;
var v4697=lglobal["cons"];
var v4698=v4697;
v4698=runJTramp(v4698);
if (typeof v4698 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4699=new JTramp(v4698, [runJTramp(v4678),runJTramp(v4696)]);
var v4700=v4699;
var v4701=lglobal["apply"];
var v4702=v4701;
v4702=runJTramp(v4702);
if (typeof v4702 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4703=new JTramp(v4702, [runJTramp(v4677),runJTramp(v4700)]);
var v4704=v4703;
var v4705=function (v4706) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v4708=function (v4709) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v4711=v4709;
var v4712=lglobal["null?"];
var v4713=v4712;
v4713=runJTramp(v4713);
if (typeof v4713 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4714=new JTramp(v4713, [runJTramp(v4711)]);
var v4715;
if(runJTramp(v4714)) {
var v4716=lglobal["null"];
v4715=v4716;
} else {
var v4717="lookup";
var v4718=v4717;
var v4719=v4709;
var v4720=v4706;
v4720=runJTramp(v4720);
if (typeof v4720 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4721=new JTramp(v4720, [runJTramp(v4718),runJTramp(v4719)]);
v4715=v4721;
}
return v4715;
};
var v4722=v4708;
var v4723=function (v4724) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v4726=v4724;
var v4727=v4600;
var v4728=lglobal["head"];
var v4729=v4728;
v4729=runJTramp(v4729);
if (typeof v4729 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4730=new JTramp(v4729, [runJTramp(v4727)]);
var v4731=v4730;
var v4732=lglobal["map"];
var v4733=v4732;
v4733=runJTramp(v4733);
if (typeof v4733 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4734=new JTramp(v4733, [runJTramp(v4726),runJTramp(v4731)]);
var v4735=v4734;
var v4736=v4600;
var v4737=lglobal["tail"];
var v4738=v4737;
v4738=runJTramp(v4738);
if (typeof v4738 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4739=new JTramp(v4738, [runJTramp(v4736)]);
var v4740=v4739;
var v4741=v4724;
v4741=runJTramp(v4741);
if (typeof v4741 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4742=new JTramp(v4741, [runJTramp(v4740)]);
var v4743=v4742;
var v4744=lglobal["cons"];
var v4745=v4744;
v4745=runJTramp(v4745);
if (typeof v4745 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4746=new JTramp(v4745, [runJTramp(v4735),runJTramp(v4743)]);
var v4747=v4746;
var v4748=function (v4749) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v4751=v4724;
var v4752=v4640;
var v4753=lglobal["map"];
var v4754=v4753;
v4754=runJTramp(v4754);
if (typeof v4754 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4755=new JTramp(v4754, [runJTramp(v4751),runJTramp(v4752)]);
var v4756=v4755;
var v4757=function (v4758) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v4760=function (v4761) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v4763=lglobal["compile-to-midir"];
var v4764=v4763;
var v4765=v4706;
var v4766="prim:set!";
var v4767=v4766;
var v4768=v4761;
var v4769=lglobal["tail"];
var v4770=v4769;
v4770=runJTramp(v4770);
if (typeof v4770 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4771=new JTramp(v4770, [runJTramp(v4768)]);
var v4772=v4771;
var v4773=lglobal["cons"];
var v4774=v4773;
v4774=runJTramp(v4774);
if (typeof v4774 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4775=new JTramp(v4774, [runJTramp(v4767),runJTramp(v4772)]);
var v4776=v4775;
var v4777=lglobal["partial"];
var v4778=v4777;
v4778=runJTramp(v4778);
if (typeof v4778 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4779=new JTramp(v4778, [runJTramp(v4764),runJTramp(v4765),runJTramp(v4776)]);
return v4779;
};
var v4780=v4760;
var v4781=v4620;
var v4782=lglobal["head"];
var v4783=v4782;
v4783=runJTramp(v4783);
if (typeof v4783 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4784=new JTramp(v4783, [runJTramp(v4781)]);
var v4785=v4784;
var v4786=lglobal["map"];
var v4787=v4786;
v4787=runJTramp(v4787);
if (typeof v4787 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4788=new JTramp(v4787, [runJTramp(v4780),runJTramp(v4785)]);
var v4789=v4788;
var v4790=function (v4791) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v4793=lglobal["compile-to-midir"];
var v4794=v4793;
var v4795=v4706;
var v4796=lglobal["partial"];
var v4797=v4796;
v4797=runJTramp(v4797);
if (typeof v4797 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4798=new JTramp(v4797, [runJTramp(v4794),runJTramp(v4795)]);
var v4799=v4798;
var v4800=lglobal["curry"];
var v4801=v4800;
v4801=runJTramp(v4801);
if (typeof v4801 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4802=new JTramp(v4801, [runJTramp(v4799)]);
var v4803=v4802;
var v4804=v4620;
var v4805=lglobal["tail"];
var v4806=v4805;
v4806=runJTramp(v4806);
if (typeof v4806 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4807=new JTramp(v4806, [runJTramp(v4804)]);
var v4808=v4807;
var v4809=lglobal["map"];
var v4810=v4809;
v4810=runJTramp(v4810);
if (typeof v4810 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4811=new JTramp(v4810, [runJTramp(v4803),runJTramp(v4808)]);
var v4812=v4811;
var v4813=function (v4814) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v4816=v4749;
var v4817=lglobal["head"];
var v4818=v4817;
v4818=runJTramp(v4818);
if (typeof v4818 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4819=new JTramp(v4818, [runJTramp(v4816)]);
var v4820=v4819;
var v4821=v4749;
var v4822=lglobal["tail"];
var v4823=v4822;
v4823=runJTramp(v4823);
if (typeof v4823 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4824=new JTramp(v4823, [runJTramp(v4821)]);
var v4825=v4824;
var v4826=v4758;
var v4827=lglobal["$"];
var v4828=v4827;
var v4829=lglobal["midir:return"];
var v4830=v4829;
v4830=runJTramp(v4830);
if (typeof v4830 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4831=new JTramp(v4830, []);
var v4832=v4831;
var v4833=v4791;
var v4834=lglobal["midir:bind-drop"];
var v4835=v4834;
var v4836=v4814;
var v4837=lglobal["intercalate"];
var v4838=v4837;
v4838=runJTramp(v4838);
if (typeof v4838 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4839=new JTramp(v4838, [runJTramp(v4835),runJTramp(v4836)]);
var v4840=v4839;
var v4841=lglobal["append"];
var v4842=v4841;
v4842=runJTramp(v4842);
if (typeof v4842 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4843=new JTramp(v4842, [runJTramp(v4833),runJTramp(v4840)]);
var v4844=v4843;
var v4845=lglobal["foldr"];
var v4846=v4845;
v4846=runJTramp(v4846);
if (typeof v4846 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4847=new JTramp(v4846, [runJTramp(v4828),runJTramp(v4832),runJTramp(v4844)]);
var v4848=v4847;
var v4849=lglobal["midir:enter"];
var v4850=v4849;
v4850=runJTramp(v4850);
if (typeof v4850 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4851=new JTramp(v4850, [runJTramp(v4820),runJTramp(v4825),runJTramp(v4826),runJTramp(v4848)]);
var v4852=v4851;
var v4853=v4451;
var v4854=lglobal["midir:closure"];
var v4855=v4854;
v4855=runJTramp(v4855);
if (typeof v4855 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4856=new JTramp(v4855, [runJTramp(v4852),runJTramp(v4853)]);
return v4856;
};
var v4857=v4813;
v4857=runJTramp(v4857);
if (typeof v4857 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4858=new JTramp(v4857, [runJTramp(v4812)]);
return v4858;
};
var v4859=v4790;
v4859=runJTramp(v4859);
if (typeof v4859 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4860=new JTramp(v4859, [runJTramp(v4789)]);
return v4860;
};
var v4861=v4757;
v4861=runJTramp(v4861);
if (typeof v4861 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4862=new JTramp(v4861, [runJTramp(v4756)]);
return v4862;
};
var v4863=v4748;
v4863=runJTramp(v4863);
if (typeof v4863 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4864=new JTramp(v4863, [runJTramp(v4747)]);
return v4864;
};
var v4865=v4723;
v4865=runJTramp(v4865);
if (typeof v4865 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4866=new JTramp(v4865, [runJTramp(v4722)]);
return v4866;
};
var v4867=v4705;
v4867=runJTramp(v4867);
if (typeof v4867 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4868=new JTramp(v4867, [runJTramp(v4704)]);
return v4868;
};
var v4869=v4673;
v4869=runJTramp(v4869);
if (typeof v4869 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4870=new JTramp(v4869, [runJTramp(v4672)]);
return v4870;
};
var v4871=v4639;
v4871=runJTramp(v4871);
if (typeof v4871 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4872=new JTramp(v4871, [runJTramp(v4638)]);
return v4872;
};
var v4873=v4619;
v4873=runJTramp(v4873);
if (typeof v4873 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4874=new JTramp(v4873, [runJTramp(v4618)]);
return v4874;
};
var v4875=v4599;
v4875=runJTramp(v4875);
if (typeof v4875 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4876=new JTramp(v4875, [runJTramp(v4598)]);
v4585=v4876;
} else {
var v4877=v4459;
var v4878="prim:def";
var v4879=v4878;
var v4880=lglobal["="];
var v4881=v4880;
v4881=runJTramp(v4881);
if (typeof v4881 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4882=new JTramp(v4881, [runJTramp(v4877),runJTramp(v4879)]);
var v4883;
if(runJTramp(v4882)) {
var v4884="Definitions may only occur at the beginning of a function.";
var v4885=v4884;
var v4886=lglobal["error"];
var v4887=v4886;
v4887=runJTramp(v4887);
if (typeof v4887 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4888=new JTramp(v4887, [runJTramp(v4885)]);
v4883=v4888;
} else {
var v4889=v4459;
var v4890="prim:set!";
var v4891=v4890;
var v4892=lglobal["="];
var v4893=v4892;
v4893=runJTramp(v4893);
if (typeof v4893 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4894=new JTramp(v4893, [runJTramp(v4889),runJTramp(v4891)]);
var v4895;
if(runJTramp(v4894)) {
var v4896=v4450;
var v4897=lglobal["tail"];
var v4898=v4897;
v4898=runJTramp(v4898);
if (typeof v4898 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4899=new JTramp(v4898, [runJTramp(v4896)]);
var v4900=v4899;
var v4901=lglobal["head"];
var v4902=v4901;
v4902=runJTramp(v4902);
if (typeof v4902 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4903=new JTramp(v4902, [runJTramp(v4900)]);
var v4904=v4903;
var v4905=function (v4906) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v4908=v4449;
var v4909=v4450;
var v4910=lglobal["tail"];
var v4911=v4910;
v4911=runJTramp(v4911);
if (typeof v4911 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4912=new JTramp(v4911, [runJTramp(v4909)]);
var v4913=v4912;
var v4914=lglobal["tail"];
var v4915=v4914;
v4915=runJTramp(v4915);
if (typeof v4915 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4916=new JTramp(v4915, [runJTramp(v4913)]);
var v4917=v4916;
var v4918=lglobal["head"];
var v4919=v4918;
v4919=runJTramp(v4919);
if (typeof v4919 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4920=new JTramp(v4919, [runJTramp(v4917)]);
var v4921=v4920;
var v4922="has?";
var v4923=v4922;
var v4924=v4906;
var v4925=v4449;
v4925=runJTramp(v4925);
if (typeof v4925 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4926=new JTramp(v4925, [runJTramp(v4923),runJTramp(v4924)]);
var v4927;
if(runJTramp(v4926)) {
var v4928="lookup";
var v4929=v4928;
var v4930=v4906;
var v4931=v4449;
v4931=runJTramp(v4931);
if (typeof v4931 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4932=new JTramp(v4931, [runJTramp(v4929),runJTramp(v4930)]);
var v4933=v4932;
var v4934=v4451;
var v4935=lglobal["midir:set!"];
var v4936=v4935;
v4936=runJTramp(v4936);
if (typeof v4936 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4937=new JTramp(v4936, [runJTramp(v4933),runJTramp(v4934)]);
v4927=v4937;
} else {
var v4938=v4906;
var v4939=v4451;
var v4940=lglobal["midir:gset!"];
var v4941=v4940;
v4941=runJTramp(v4941);
if (typeof v4941 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4942=new JTramp(v4941, [runJTramp(v4938),runJTramp(v4939)]);
v4927=v4942;
}
var v4943=v4927;
var v4944=lglobal["compile-to-midir"];
var v4945=v4944;
v4945=runJTramp(v4945);
if (typeof v4945 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4946=new JTramp(v4945, [runJTramp(v4908),runJTramp(v4921),runJTramp(v4943)]);
return v4946;
};
var v4947=v4905;
v4947=runJTramp(v4947);
if (typeof v4947 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4948=new JTramp(v4947, [runJTramp(v4904)]);
v4895=v4948;
} else {
var v4949=v4459;
var v4950="prim:ffi";
var v4951=v4950;
var v4952=lglobal["="];
var v4953=v4952;
v4953=runJTramp(v4953);
if (typeof v4953 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4954=new JTramp(v4953, [runJTramp(v4949),runJTramp(v4951)]);
var v4955;
if(runJTramp(v4954)) {
var v4956=v4449;
var v4957=v4450;
var v4958=lglobal["tail"];
var v4959=v4958;
v4959=runJTramp(v4959);
if (typeof v4959 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4960=new JTramp(v4959, [runJTramp(v4957)]);
var v4961=v4960;
var v4962=lglobal["head"];
var v4963=v4962;
v4963=runJTramp(v4963);
if (typeof v4963 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4964=new JTramp(v4963, [runJTramp(v4961)]);
var v4965=v4964;
var v4966=v4451;
var v4967=lglobal["midir:ffi"];
var v4968=v4967;
v4968=runJTramp(v4968);
if (typeof v4968 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4969=new JTramp(v4968, [runJTramp(v4966)]);
var v4970=v4969;
var v4971=lglobal["compile-to-midir"];
var v4972=v4971;
v4972=runJTramp(v4972);
if (typeof v4972 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4973=new JTramp(v4972, [runJTramp(v4956),runJTramp(v4965),runJTramp(v4970)]);
v4955=v4973;
} else {
var v4974=v4449;
var v4975=v4450;
var v4976=v4451;
var v4977=lglobal["compile-application-to-midir"];
var v4978=v4977;
v4978=runJTramp(v4978);
if (typeof v4978 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4979=new JTramp(v4978, [runJTramp(v4974),runJTramp(v4975),runJTramp(v4976)]);
v4955=v4979;
}
v4895=v4955;
}
v4883=v4895;
}
v4585=v4883;
}
v4504=v4585;
}
v4487=v4504;
}
v4467=v4487;
}
return v4467;
};
var v4980=v4458;
v4980=runJTramp(v4980);
if (typeof v4980 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4981=new JTramp(v4980, [runJTramp(v4457)]);
return v4981;
};
v4447=v4448;
lglobal["compile-form-to-midir"]=runJTramp(v4447);
})();
(function () {
var v4982;
var v4983=function (v4984) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v4986;
var v4987=function (v4988) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v4990=v4988;
var v4991=lglobal["midir-macro-expand"];
var v4992=v4991;
v4992=runJTramp(v4992);
if (typeof v4992 !== "function") {
throw new Error("Cannot call non-function.");
}
var v4993=new JTramp(v4992, [runJTramp(v4990)]);
var v4994=v4993;
var v4995=function (v4996) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v4998=v4996;
var v4999=lglobal["cons?"];
var v5000=v4999;
v5000=runJTramp(v5000);
if (typeof v5000 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5001=new JTramp(v5000, [runJTramp(v4998)]);
var v5002=v5001;
var v5003=function (v5004) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v5006;
if(runJTramp(v5004)) {
var v5007="prim:do";
var v5008=v5007;
var v5009=v4996;
var v5010=lglobal["head"];
var v5011=v5010;
v5011=runJTramp(v5011);
if (typeof v5011 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5012=new JTramp(v5011, [runJTramp(v5009)]);
var v5013=v5012;
var v5014=lglobal["="];
var v5015=v5014;
v5015=runJTramp(v5015);
if (typeof v5015 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5016=new JTramp(v5015, [runJTramp(v5008),runJTramp(v5013)]);
v5006=v5016;
} else {
v5006=v5004;
}
return v5006;
};
var v5017=v5003;
v5017=runJTramp(v5017);
if (typeof v5017 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5018=new JTramp(v5017, [runJTramp(v5002)]);
var v5019;
if(runJTramp(v5018)) {
var v5020=v4996;
var v5021=lglobal["tail"];
var v5022=v5021;
v5022=runJTramp(v5022);
if (typeof v5022 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5023=new JTramp(v5022, [runJTramp(v5020)]);
var v5024=v5023;
var v5025=lglobal["normalize-fun-body"];
var v5026=v5025;
v5026=runJTramp(v5026);
if (typeof v5026 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5027=new JTramp(v5026, [runJTramp(v5024)]);
v5019=v5027;
} else {
var v5028=v4996;
var v5029=lglobal["list"];
var v5030=v5029;
v5030=runJTramp(v5030);
if (typeof v5030 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5031=new JTramp(v5030, [runJTramp(v5028)]);
v5019=v5031;
}
return v5019;
};
var v5032=v4995;
v5032=runJTramp(v5032);
if (typeof v5032 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5033=new JTramp(v5032, [runJTramp(v4994)]);
return v5033;
};
var v5034=v4986=runJTramp(v4987);
var v5035=v4986;
var v5036=v4984;
var v5037=lglobal["map-append"];
var v5038=v5037;
v5038=runJTramp(v5038);
if (typeof v5038 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5039=new JTramp(v5038, [runJTramp(v5035),runJTramp(v5036)]);
return v5039;
};
v4982=v4983;
lglobal["normalize-fun-body"]=runJTramp(v4982);
})();
(function () {
var v5040;
var v5041=function (v5042) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v5044=v5042;
var v5045=lglobal["nil?"];
var v5046=v5045;
v5046=runJTramp(v5046);
if (typeof v5046 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5047=new JTramp(v5046, [runJTramp(v5044)]);
var v5048;
if(runJTramp(v5047)) {
var v5049=new Nil();
var v5050=v5049;
var v5051=lglobal["null"];
var v5052=v5051;
var v5053=lglobal["cons"];
var v5054=v5053;
v5054=runJTramp(v5054);
if (typeof v5054 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5055=new JTramp(v5054, [runJTramp(v5050),runJTramp(v5052)]);
v5048=v5055;
} else {
var v5056=v5042;
var v5057=lglobal["cons?"];
var v5058=v5057;
v5058=runJTramp(v5058);
if (typeof v5058 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5059=new JTramp(v5058, [runJTramp(v5056)]);
var v5060;
if(runJTramp(v5059)) {
var v5061=v5042;
var v5062=lglobal["tail"];
var v5063=v5062;
v5063=runJTramp(v5063);
if (typeof v5063 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5064=new JTramp(v5063, [runJTramp(v5061)]);
var v5065=v5064;
var v5066=lglobal["split-fun-args"];
var v5067=v5066;
v5067=runJTramp(v5067);
if (typeof v5067 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5068=new JTramp(v5067, [runJTramp(v5065)]);
var v5069=v5068;
var v5070=function (v5071) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v5073=v5042;
var v5074=lglobal["head"];
var v5075=v5074;
v5075=runJTramp(v5075);
if (typeof v5075 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5076=new JTramp(v5075, [runJTramp(v5073)]);
var v5077=v5076;
var v5078=v5071;
var v5079=lglobal["head"];
var v5080=v5079;
v5080=runJTramp(v5080);
if (typeof v5080 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5081=new JTramp(v5080, [runJTramp(v5078)]);
var v5082=v5081;
var v5083=lglobal["cons"];
var v5084=v5083;
v5084=runJTramp(v5084);
if (typeof v5084 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5085=new JTramp(v5084, [runJTramp(v5077),runJTramp(v5082)]);
var v5086=v5085;
var v5087=v5071;
var v5088=lglobal["tail"];
var v5089=v5088;
v5089=runJTramp(v5089);
if (typeof v5089 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5090=new JTramp(v5089, [runJTramp(v5087)]);
var v5091=v5090;
var v5092=lglobal["cons"];
var v5093=v5092;
v5093=runJTramp(v5093);
if (typeof v5093 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5094=new JTramp(v5093, [runJTramp(v5086),runJTramp(v5091)]);
return v5094;
};
var v5095=v5070;
v5095=runJTramp(v5095);
if (typeof v5095 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5096=new JTramp(v5095, [runJTramp(v5069)]);
v5060=v5096;
} else {
var v5097=v5042;
var v5098=lglobal["string?"];
var v5099=v5098;
v5099=runJTramp(v5099);
if (typeof v5099 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5100=new JTramp(v5099, [runJTramp(v5097)]);
var v5101;
if(runJTramp(v5100)) {
var v5102=new Nil();
var v5103=v5102;
var v5104=v5042;
var v5105=lglobal["cons"];
var v5106=v5105;
v5106=runJTramp(v5106);
if (typeof v5106 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5107=new JTramp(v5106, [runJTramp(v5103),runJTramp(v5104)]);
v5101=v5107;
} else {
var v5108="Improper argument list: ";
var v5109=v5108;
var v5110=v5042;
var v5111=lglobal["repr"];
var v5112=v5111;
v5112=runJTramp(v5112);
if (typeof v5112 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5113=new JTramp(v5112, [runJTramp(v5110)]);
var v5114=v5113;
var v5115=lglobal["++"];
var v5116=v5115;
v5116=runJTramp(v5116);
if (typeof v5116 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5117=new JTramp(v5116, [runJTramp(v5109),runJTramp(v5114)]);
var v5118=v5117;
var v5119=lglobal["error"];
var v5120=v5119;
v5120=runJTramp(v5120);
if (typeof v5120 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5121=new JTramp(v5120, [runJTramp(v5118)]);
v5101=v5121;
}
v5060=v5101;
}
v5048=v5060;
}
return v5048;
};
v5040=v5041;
lglobal["split-fun-args"]=runJTramp(v5040);
})();
(function () {
var v5122;
var v5123=function (v5124) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v5126=v5124;
var v5127=lglobal["nil?"];
var v5128=v5127;
v5128=runJTramp(v5128);
if (typeof v5128 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5129=new JTramp(v5128, [runJTramp(v5126)]);
var v5130;
if(runJTramp(v5129)) {
var v5131=new Nil();
var v5132=v5131;
var v5133=new Nil();
var v5134=v5133;
var v5135=lglobal["cons"];
var v5136=v5135;
v5136=runJTramp(v5136);
if (typeof v5136 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5137=new JTramp(v5136, [runJTramp(v5132),runJTramp(v5134)]);
v5130=v5137;
} else {
var v5138=v5124;
var v5139=lglobal["cons?"];
var v5140=v5139;
v5140=runJTramp(v5140);
if (typeof v5140 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5141=new JTramp(v5140, [runJTramp(v5138)]);
var v5142=v5141;
var v5143=lglobal["not"];
var v5144=v5143;
v5144=runJTramp(v5144);
if (typeof v5144 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5145=new JTramp(v5144, [runJTramp(v5142)]);
var v5146;
if(runJTramp(v5145)) {
var v5147="Function body must not be an improper list.";
var v5148=v5147;
var v5149=lglobal["error"];
var v5150=v5149;
v5150=runJTramp(v5150);
if (typeof v5150 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5151=new JTramp(v5150, [runJTramp(v5148)]);
v5146=v5151;
} else {
var v5152=v5124;
var v5153=lglobal["head"];
var v5154=v5153;
v5154=runJTramp(v5154);
if (typeof v5154 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5155=new JTramp(v5154, [runJTramp(v5152)]);
var v5156=v5155;
var v5157=lglobal["cons?"];
var v5158=v5157;
v5158=runJTramp(v5158);
if (typeof v5158 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5159=new JTramp(v5158, [runJTramp(v5156)]);
var v5160=v5159;
var v5161=function (v5162) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v5164;
if(runJTramp(v5162)) {
var v5165="prim:def";
var v5166=v5165;
var v5167=v5124;
var v5168=lglobal["head"];
var v5169=v5168;
v5169=runJTramp(v5169);
if (typeof v5169 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5170=new JTramp(v5169, [runJTramp(v5167)]);
var v5171=v5170;
var v5172=lglobal["head"];
var v5173=v5172;
v5173=runJTramp(v5173);
if (typeof v5173 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5174=new JTramp(v5173, [runJTramp(v5171)]);
var v5175=v5174;
var v5176=lglobal["="];
var v5177=v5176;
v5177=runJTramp(v5177);
if (typeof v5177 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5178=new JTramp(v5177, [runJTramp(v5166),runJTramp(v5175)]);
v5164=v5178;
} else {
v5164=v5162;
}
return v5164;
};
var v5179=v5161;
v5179=runJTramp(v5179);
if (typeof v5179 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5180=new JTramp(v5179, [runJTramp(v5160)]);
var v5181;
if(runJTramp(v5180)) {
var v5182=v5124;
var v5183=lglobal["tail"];
var v5184=v5183;
v5184=runJTramp(v5184);
if (typeof v5184 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5185=new JTramp(v5184, [runJTramp(v5182)]);
var v5186=v5185;
var v5187=lglobal["split-fun-body"];
var v5188=v5187;
v5188=runJTramp(v5188);
if (typeof v5188 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5189=new JTramp(v5188, [runJTramp(v5186)]);
var v5190=v5189;
var v5191=function (v5192) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v5194=v5124;
var v5195=lglobal["head"];
var v5196=v5195;
v5196=runJTramp(v5196);
if (typeof v5196 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5197=new JTramp(v5196, [runJTramp(v5194)]);
var v5198=v5197;
var v5199=v5192;
var v5200=lglobal["head"];
var v5201=v5200;
v5201=runJTramp(v5201);
if (typeof v5201 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5202=new JTramp(v5201, [runJTramp(v5199)]);
var v5203=v5202;
var v5204=lglobal["cons"];
var v5205=v5204;
v5205=runJTramp(v5205);
if (typeof v5205 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5206=new JTramp(v5205, [runJTramp(v5198),runJTramp(v5203)]);
var v5207=v5206;
var v5208=v5192;
var v5209=lglobal["tail"];
var v5210=v5209;
v5210=runJTramp(v5210);
if (typeof v5210 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5211=new JTramp(v5210, [runJTramp(v5208)]);
var v5212=v5211;
var v5213=lglobal["cons"];
var v5214=v5213;
v5214=runJTramp(v5214);
if (typeof v5214 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5215=new JTramp(v5214, [runJTramp(v5207),runJTramp(v5212)]);
return v5215;
};
var v5216=v5191;
v5216=runJTramp(v5216);
if (typeof v5216 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5217=new JTramp(v5216, [runJTramp(v5190)]);
v5181=v5217;
} else {
var v5218=lglobal["otherwise"];
var v5219;
if(runJTramp(v5218)) {
var v5220=new Nil();
var v5221=v5220;
var v5222=v5124;
var v5223=lglobal["cons"];
var v5224=v5223;
v5224=runJTramp(v5224);
if (typeof v5224 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5225=new JTramp(v5224, [runJTramp(v5221),runJTramp(v5222)]);
v5219=v5225;
} else {
var v5226=null;
v5219=v5226;
}
v5181=v5219;
}
v5146=v5181;
}
v5130=v5146;
}
return v5130;
};
v5122=v5123;
lglobal["split-fun-body"]=runJTramp(v5122);
})();
(function () {
var v5227;
var v5228=function (v5229,v5230,v5231) {
if (arguments.length < 3) {
throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
throw new Error("Expecting at most 3 arguments.");
}
var v5233=v5230;
var v5234=lglobal["head"];
var v5235=v5234;
v5235=runJTramp(v5235);
if (typeof v5235 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5236=new JTramp(v5235, [runJTramp(v5233)]);
var v5237=v5236;
var v5238=v5230;
var v5239=lglobal["tail"];
var v5240=v5239;
v5240=runJTramp(v5240);
if (typeof v5240 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5241=new JTramp(v5240, [runJTramp(v5238)]);
var v5242=v5241;
var v5243=lglobal["gensym"];
var v5244=v5243;
v5244=runJTramp(v5244);
if (typeof v5244 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5245=new JTramp(v5244, []);
var v5246=v5245;
var v5247=function (v5248,v5249,v5250) {
if (arguments.length < 3) {
throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
throw new Error("Expecting at most 3 arguments.");
}
var v5252=function (v5253) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v5255=lglobal["gensym"];
var v5256=v5255;
v5256=runJTramp(v5256);
if (typeof v5256 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5257=new JTramp(v5256, []);
var v5258=v5257;
var v5259=v5253;
var v5260=lglobal["cons"];
var v5261=v5260;
v5261=runJTramp(v5261);
if (typeof v5261 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5262=new JTramp(v5261, [runJTramp(v5258),runJTramp(v5259)]);
return v5262;
};
var v5263=v5252;
var v5264=v5249;
var v5265=lglobal["map"];
var v5266=v5265;
v5266=runJTramp(v5266);
if (typeof v5266 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5267=new JTramp(v5266, [runJTramp(v5263),runJTramp(v5264)]);
var v5268=v5267;
var v5269=function (v5270) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v5272=v5229;
var v5273=v5248;
var v5274=v5250;
var v5275=v5250;
var v5276=lglobal["head"];
var v5277=v5276;
var v5278=v5270;
var v5279=lglobal["map"];
var v5280=v5279;
v5280=runJTramp(v5280);
if (typeof v5280 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5281=new JTramp(v5280, [runJTramp(v5277),runJTramp(v5278)]);
var v5282=v5281;
var v5283=v5231;
var v5284=lglobal["midir:funcall"];
var v5285=v5284;
v5285=runJTramp(v5285);
if (typeof v5285 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5286=new JTramp(v5285, [runJTramp(v5275),runJTramp(v5282),runJTramp(v5283)]);
var v5287=v5286;
var v5288=lglobal["midir:bind"];
var v5289=v5288;
v5289=runJTramp(v5289);
if (typeof v5289 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5290=new JTramp(v5289, [runJTramp(v5274),runJTramp(v5287)]);
var v5291=v5290;
var v5292=lglobal["compile-to-midir"];
var v5293=v5292;
v5293=runJTramp(v5293);
if (typeof v5293 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5294=new JTramp(v5293, [runJTramp(v5272),runJTramp(v5273),runJTramp(v5291)]);
var v5295=v5294;
var v5296=function (v5297,v5298) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v5300=v5229;
var v5301=v5297;
var v5302=lglobal["tail"];
var v5303=v5302;
v5303=runJTramp(v5303);
if (typeof v5303 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5304=new JTramp(v5303, [runJTramp(v5301)]);
var v5305=v5304;
var v5306=v5297;
var v5307=lglobal["head"];
var v5308=v5307;
v5308=runJTramp(v5308);
if (typeof v5308 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5309=new JTramp(v5308, [runJTramp(v5306)]);
var v5310=v5309;
var v5311=v5298;
var v5312=lglobal["midir:bind"];
var v5313=v5312;
v5313=runJTramp(v5313);
if (typeof v5313 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5314=new JTramp(v5313, [runJTramp(v5310),runJTramp(v5311)]);
var v5315=v5314;
var v5316=lglobal["compile-to-midir"];
var v5317=v5316;
v5317=runJTramp(v5317);
if (typeof v5317 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5318=new JTramp(v5317, [runJTramp(v5300),runJTramp(v5305),runJTramp(v5315)]);
return v5318;
};
var v5319=v5296;
var v5320=function (v5321,v5322) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v5324=v5322;
var v5325=v5321;
var v5326=v5270;
var v5327=lglobal["foldr"];
var v5328=v5327;
v5328=runJTramp(v5328);
if (typeof v5328 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5329=new JTramp(v5328, [runJTramp(v5324),runJTramp(v5325),runJTramp(v5326)]);
return v5329;
};
var v5330=v5320;
v5330=runJTramp(v5330);
if (typeof v5330 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5331=new JTramp(v5330, [runJTramp(v5295),runJTramp(v5319)]);
return v5331;
};
var v5332=v5269;
v5332=runJTramp(v5332);
if (typeof v5332 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5333=new JTramp(v5332, [runJTramp(v5268)]);
return v5333;
};
var v5334=v5247;
v5334=runJTramp(v5334);
if (typeof v5334 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5335=new JTramp(v5334, [runJTramp(v5237),runJTramp(v5242),runJTramp(v5246)]);
return v5335;
};
v5227=v5228;
lglobal["compile-application-to-midir"]=runJTramp(v5227);
})();
(function () {
var v5336;
var v5337=function (v5338) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
return v5338;
};
v5336=v5337;
lglobal["run-copy-propagate-midir"]=runJTramp(v5336);
})();
(function () {
var v5340;
var v5341=function (v5342,v5343) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v5345;
var v5346;
var v5347=lglobal["copy-propagate-midir"];
var v5348=v5345=runJTramp(v5347);
var v5349=function (v5350) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v5352="has?";
var v5353=v5352;
var v5354=v5350;
var v5355=v5343;
v5355=runJTramp(v5355);
if (typeof v5355 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5356=new JTramp(v5355, [runJTramp(v5353),runJTramp(v5354)]);
var v5357;
if(runJTramp(v5356)) {
var v5358="lookup";
var v5359=v5358;
var v5360=v5350;
var v5361=v5343;
v5361=runJTramp(v5361);
if (typeof v5361 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5362=new JTramp(v5361, [runJTramp(v5359),runJTramp(v5360)]);
v5357=v5362;
} else {
v5357=v5350;
}
return v5357;
};
var v5363=v5346=runJTramp(v5349);
var v5364=v5342;
var v5365=function (v5366) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v5368=v5366;
var v5369=lglobal["midir:lit?"];
var v5370=v5369;
v5370=runJTramp(v5370);
if (typeof v5370 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5371=new JTramp(v5370, [runJTramp(v5368)]);
var v5372;
if(runJTramp(v5371)) {
var v5373=function (v5374,v5375) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v5377=v5374;
var v5378=v5375;
var v5379=v5343;
var v5380=v5345;
v5380=runJTramp(v5380);
if (typeof v5380 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5381=new JTramp(v5380, [runJTramp(v5378),runJTramp(v5379)]);
var v5382=v5381;
var v5383=lglobal["midir:lit"];
var v5384=v5383;
v5384=runJTramp(v5384);
if (typeof v5384 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5385=new JTramp(v5384, [runJTramp(v5377),runJTramp(v5382)]);
return v5385;
};
var v5386=v5373;
var v5387=v5366;
var v5388=lglobal["tail"];
var v5389=v5388;
v5389=runJTramp(v5389);
if (typeof v5389 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5390=new JTramp(v5389, [runJTramp(v5387)]);
var v5391=v5390;
var v5392=lglobal["apply"];
var v5393=v5392;
v5393=runJTramp(v5393);
if (typeof v5393 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5394=new JTramp(v5393, [runJTramp(v5386),runJTramp(v5391)]);
v5372=v5394;
} else {
var v5395=v5366;
var v5396=lglobal["midir:lookup?"];
var v5397=v5396;
v5397=runJTramp(v5397);
if (typeof v5397 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5398=new JTramp(v5397, [runJTramp(v5395)]);
var v5399;
if(runJTramp(v5398)) {
var v5400=function (v5401,v5402) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v5404=v5402;
var v5405=function (v5406) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v5408=v5406;
var v5409=lglobal["midir:bind?"];
var v5410=v5409;
v5410=runJTramp(v5410);
if (typeof v5410 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5411=new JTramp(v5410, [runJTramp(v5408)]);
var v5412;
if(runJTramp(v5411)) {
var v5413=function (v5414,v5415) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v5417="set!";
var v5418=v5417;
var v5419=v5414;
var v5420=v5401;
var v5421=v5343;
v5421=runJTramp(v5421);
if (typeof v5421 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5422=new JTramp(v5421, [runJTramp(v5418),runJTramp(v5419),runJTramp(v5420)]);
v5422=runJTramp(v5422);
var v5423=v5415;
var v5424=v5343;
var v5425=v5345;
v5425=runJTramp(v5425);
if (typeof v5425 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5426=new JTramp(v5425, [runJTramp(v5423),runJTramp(v5424)]);
return v5426;
};
var v5427=v5413;
var v5428=v5406;
var v5429=lglobal["tail"];
var v5430=v5429;
v5430=runJTramp(v5430);
if (typeof v5430 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5431=new JTramp(v5430, [runJTramp(v5428)]);
var v5432=v5431;
var v5433=lglobal["apply"];
var v5434=v5433;
v5434=runJTramp(v5434);
if (typeof v5434 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5435=new JTramp(v5434, [runJTramp(v5427),runJTramp(v5432)]);
v5412=v5435;
} else {
var v5436=v5401;
var v5437=v5346;
v5437=runJTramp(v5437);
if (typeof v5437 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5438=new JTramp(v5437, [runJTramp(v5436)]);
var v5439=v5438;
var v5440=v5402;
var v5441=v5343;
var v5442=v5345;
v5442=runJTramp(v5442);
if (typeof v5442 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5443=new JTramp(v5442, [runJTramp(v5440),runJTramp(v5441)]);
var v5444=v5443;
var v5445=lglobal["midir:lookup"];
var v5446=v5445;
v5446=runJTramp(v5446);
if (typeof v5446 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5447=new JTramp(v5446, [runJTramp(v5439),runJTramp(v5444)]);
v5412=v5447;
}
return v5412;
};
var v5448=v5405;
v5448=runJTramp(v5448);
if (typeof v5448 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5449=new JTramp(v5448, [runJTramp(v5404)]);
return v5449;
};
var v5450=v5400;
var v5451=v5366;
var v5452=lglobal["tail"];
var v5453=v5452;
v5453=runJTramp(v5453);
if (typeof v5453 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5454=new JTramp(v5453, [runJTramp(v5451)]);
var v5455=v5454;
var v5456=lglobal["apply"];
var v5457=v5456;
v5457=runJTramp(v5457);
if (typeof v5457 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5458=new JTramp(v5457, [runJTramp(v5450),runJTramp(v5455)]);
v5399=v5458;
} else {
var v5459=v5366;
var v5460=lglobal["midir:glookup?"];
var v5461=v5460;
v5461=runJTramp(v5461);
if (typeof v5461 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5462=new JTramp(v5461, [runJTramp(v5459)]);
var v5463;
if(runJTramp(v5462)) {
var v5464=function (v5465,v5466) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v5468=v5465;
var v5469=v5466;
var v5470=v5343;
var v5471=v5345;
v5471=runJTramp(v5471);
if (typeof v5471 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5472=new JTramp(v5471, [runJTramp(v5469),runJTramp(v5470)]);
var v5473=v5472;
var v5474=lglobal["midir:glookup"];
var v5475=v5474;
v5475=runJTramp(v5475);
if (typeof v5475 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5476=new JTramp(v5475, [runJTramp(v5468),runJTramp(v5473)]);
return v5476;
};
var v5477=v5464;
var v5478=v5366;
var v5479=lglobal["tail"];
var v5480=v5479;
v5480=runJTramp(v5480);
if (typeof v5480 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5481=new JTramp(v5480, [runJTramp(v5478)]);
var v5482=v5481;
var v5483=lglobal["apply"];
var v5484=v5483;
v5484=runJTramp(v5484);
if (typeof v5484 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5485=new JTramp(v5484, [runJTramp(v5477),runJTramp(v5482)]);
v5463=v5485;
} else {
var v5486=v5366;
var v5487=lglobal["midir:enter?"];
var v5488=v5487;
v5488=runJTramp(v5488);
if (typeof v5488 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5489=new JTramp(v5488, [runJTramp(v5486)]);
var v5490;
if(runJTramp(v5489)) {
var v5491=function (v5492,v5493,v5494,v5495) {
if (arguments.length < 4) {
throw new Error("Expecting at least 4 arguments.");
}
if (arguments.length > 4) {
throw new Error("Expecting at most 4 arguments.");
}
var v5497=v5492;
var v5498=v5493;
var v5499=v5494;
var v5500=v5495;
var v5501=v5343;
var v5502=lglobal["make-env"];
var v5503=v5502;
v5503=runJTramp(v5503);
if (typeof v5503 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5504=new JTramp(v5503, [runJTramp(v5501)]);
var v5505=v5504;
var v5506=v5345;
v5506=runJTramp(v5506);
if (typeof v5506 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5507=new JTramp(v5506, [runJTramp(v5500),runJTramp(v5505)]);
var v5508=v5507;
var v5509=lglobal["midir:enter"];
var v5510=v5509;
v5510=runJTramp(v5510);
if (typeof v5510 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5511=new JTramp(v5510, [runJTramp(v5497),runJTramp(v5498),runJTramp(v5499),runJTramp(v5508)]);
return v5511;
};
var v5512=v5491;
var v5513=v5366;
var v5514=lglobal["tail"];
var v5515=v5514;
v5515=runJTramp(v5515);
if (typeof v5515 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5516=new JTramp(v5515, [runJTramp(v5513)]);
var v5517=v5516;
var v5518=lglobal["apply"];
var v5519=v5518;
v5519=runJTramp(v5519);
if (typeof v5519 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5520=new JTramp(v5519, [runJTramp(v5512),runJTramp(v5517)]);
v5490=v5520;
} else {
var v5521=v5366;
var v5522=lglobal["midir:return?"];
var v5523=v5522;
v5523=runJTramp(v5523);
if (typeof v5523 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5524=new JTramp(v5523, [runJTramp(v5521)]);
var v5525;
if(runJTramp(v5524)) {
var v5526=function () {
if (arguments.length > 0) {
throw new Error("Expecting at most 0 arguments.");
}
var v5528=lglobal["midir:return"];
var v5529=v5528;
v5529=runJTramp(v5529);
if (typeof v5529 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5530=new JTramp(v5529, []);
return v5530;
};
var v5531=v5526;
var v5532=v5366;
var v5533=lglobal["tail"];
var v5534=v5533;
v5534=runJTramp(v5534);
if (typeof v5534 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5535=new JTramp(v5534, [runJTramp(v5532)]);
var v5536=v5535;
var v5537=lglobal["apply"];
var v5538=v5537;
v5538=runJTramp(v5538);
if (typeof v5538 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5539=new JTramp(v5538, [runJTramp(v5531),runJTramp(v5536)]);
v5525=v5539;
} else {
var v5540=v5366;
var v5541=lglobal["midir:bind?"];
var v5542=v5541;
v5542=runJTramp(v5542);
if (typeof v5542 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5543=new JTramp(v5542, [runJTramp(v5540)]);
var v5544;
if(runJTramp(v5543)) {
var v5545=function (v5546,v5547) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v5549=v5546;
var v5550=v5547;
var v5551=v5343;
var v5552=v5345;
v5552=runJTramp(v5552);
if (typeof v5552 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5553=new JTramp(v5552, [runJTramp(v5550),runJTramp(v5551)]);
var v5554=v5553;
var v5555=lglobal["midir:bind"];
var v5556=v5555;
v5556=runJTramp(v5556);
if (typeof v5556 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5557=new JTramp(v5556, [runJTramp(v5549),runJTramp(v5554)]);
return v5557;
};
var v5558=v5545;
var v5559=v5366;
var v5560=lglobal["tail"];
var v5561=v5560;
v5561=runJTramp(v5561);
if (typeof v5561 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5562=new JTramp(v5561, [runJTramp(v5559)]);
var v5563=v5562;
var v5564=lglobal["apply"];
var v5565=v5564;
v5565=runJTramp(v5565);
if (typeof v5565 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5566=new JTramp(v5565, [runJTramp(v5558),runJTramp(v5563)]);
v5544=v5566;
} else {
var v5567=v5366;
var v5568=lglobal["midir:bind-drop?"];
var v5569=v5568;
v5569=runJTramp(v5569);
if (typeof v5569 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5570=new JTramp(v5569, [runJTramp(v5567)]);
var v5571;
if(runJTramp(v5570)) {
var v5572=function (v5573) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v5575=v5573;
var v5576=v5343;
var v5577=v5345;
v5577=runJTramp(v5577);
if (typeof v5577 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5578=new JTramp(v5577, [runJTramp(v5575),runJTramp(v5576)]);
var v5579=v5578;
var v5580=lglobal["midir:bind-drop"];
var v5581=v5580;
v5581=runJTramp(v5581);
if (typeof v5581 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5582=new JTramp(v5581, [runJTramp(v5579)]);
return v5582;
};
var v5583=v5572;
var v5584=v5366;
var v5585=lglobal["tail"];
var v5586=v5585;
v5586=runJTramp(v5586);
if (typeof v5586 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5587=new JTramp(v5586, [runJTramp(v5584)]);
var v5588=v5587;
var v5589=lglobal["apply"];
var v5590=v5589;
v5590=runJTramp(v5590);
if (typeof v5590 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5591=new JTramp(v5590, [runJTramp(v5583),runJTramp(v5588)]);
v5571=v5591;
} else {
var v5592=v5366;
var v5593=lglobal["midir:if?"];
var v5594=v5593;
v5594=runJTramp(v5594);
if (typeof v5594 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5595=new JTramp(v5594, [runJTramp(v5592)]);
var v5596;
if(runJTramp(v5595)) {
var v5597=function (v5598,v5599,v5600) {
if (arguments.length < 3) {
throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
throw new Error("Expecting at most 3 arguments.");
}
var v5602=v5598;
var v5603=v5343;
var v5604=v5345;
v5604=runJTramp(v5604);
if (typeof v5604 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5605=new JTramp(v5604, [runJTramp(v5602),runJTramp(v5603)]);
var v5606=v5605;
var v5607=v5599;
var v5608=v5343;
var v5609=v5345;
v5609=runJTramp(v5609);
if (typeof v5609 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5610=new JTramp(v5609, [runJTramp(v5607),runJTramp(v5608)]);
var v5611=v5610;
var v5612=v5600;
var v5613=v5343;
var v5614=v5345;
v5614=runJTramp(v5614);
if (typeof v5614 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5615=new JTramp(v5614, [runJTramp(v5612),runJTramp(v5613)]);
var v5616=v5615;
var v5617=lglobal["midir:if"];
var v5618=v5617;
v5618=runJTramp(v5618);
if (typeof v5618 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5619=new JTramp(v5618, [runJTramp(v5606),runJTramp(v5611),runJTramp(v5616)]);
return v5619;
};
var v5620=v5597;
var v5621=v5366;
var v5622=lglobal["tail"];
var v5623=v5622;
v5623=runJTramp(v5623);
if (typeof v5623 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5624=new JTramp(v5623, [runJTramp(v5621)]);
var v5625=v5624;
var v5626=lglobal["apply"];
var v5627=v5626;
v5627=runJTramp(v5627);
if (typeof v5627 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5628=new JTramp(v5627, [runJTramp(v5620),runJTramp(v5625)]);
v5596=v5628;
} else {
var v5629=v5366;
var v5630=lglobal["midir:leave?"];
var v5631=v5630;
v5631=runJTramp(v5631);
if (typeof v5631 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5632=new JTramp(v5631, [runJTramp(v5629)]);
var v5633;
if(runJTramp(v5632)) {
var v5634=function () {
if (arguments.length > 0) {
throw new Error("Expecting at most 0 arguments.");
}
var v5636=lglobal["midir:leave"];
var v5637=v5636;
v5637=runJTramp(v5637);
if (typeof v5637 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5638=new JTramp(v5637, []);
return v5638;
};
var v5639=v5634;
var v5640=v5366;
var v5641=lglobal["tail"];
var v5642=v5641;
v5642=runJTramp(v5642);
if (typeof v5642 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5643=new JTramp(v5642, [runJTramp(v5640)]);
var v5644=v5643;
var v5645=lglobal["apply"];
var v5646=v5645;
v5646=runJTramp(v5646);
if (typeof v5646 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5647=new JTramp(v5646, [runJTramp(v5639),runJTramp(v5644)]);
v5633=v5647;
} else {
var v5648=v5366;
var v5649=lglobal["midir:funcall?"];
var v5650=v5649;
v5650=runJTramp(v5650);
if (typeof v5650 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5651=new JTramp(v5650, [runJTramp(v5648)]);
var v5652;
if(runJTramp(v5651)) {
var v5653=function (v5654,v5655,v5656) {
if (arguments.length < 3) {
throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
throw new Error("Expecting at most 3 arguments.");
}
var v5658=v5654;
var v5659=v5346;
v5659=runJTramp(v5659);
if (typeof v5659 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5660=new JTramp(v5659, [runJTramp(v5658)]);
var v5661=v5660;
var v5662=v5346;
var v5663=v5655;
var v5664=lglobal["map"];
var v5665=v5664;
v5665=runJTramp(v5665);
if (typeof v5665 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5666=new JTramp(v5665, [runJTramp(v5662),runJTramp(v5663)]);
var v5667=v5666;
var v5668=v5656;
var v5669=v5343;
var v5670=v5345;
v5670=runJTramp(v5670);
if (typeof v5670 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5671=new JTramp(v5670, [runJTramp(v5668),runJTramp(v5669)]);
var v5672=v5671;
var v5673=lglobal["midir:funcall"];
var v5674=v5673;
v5674=runJTramp(v5674);
if (typeof v5674 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5675=new JTramp(v5674, [runJTramp(v5661),runJTramp(v5667),runJTramp(v5672)]);
return v5675;
};
var v5676=v5653;
var v5677=v5366;
var v5678=lglobal["tail"];
var v5679=v5678;
v5679=runJTramp(v5679);
if (typeof v5679 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5680=new JTramp(v5679, [runJTramp(v5677)]);
var v5681=v5680;
var v5682=lglobal["apply"];
var v5683=v5682;
v5683=runJTramp(v5683);
if (typeof v5683 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5684=new JTramp(v5683, [runJTramp(v5676),runJTramp(v5681)]);
v5652=v5684;
} else {
var v5685=v5366;
var v5686=lglobal["midir:closure?"];
var v5687=v5686;
v5687=runJTramp(v5687);
if (typeof v5687 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5688=new JTramp(v5687, [runJTramp(v5685)]);
var v5689;
if(runJTramp(v5688)) {
var v5690=function (v5691,v5692) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v5694=v5691;
var v5695=v5343;
var v5696=v5345;
v5696=runJTramp(v5696);
if (typeof v5696 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5697=new JTramp(v5696, [runJTramp(v5694),runJTramp(v5695)]);
var v5698=v5697;
var v5699=v5692;
var v5700=v5343;
var v5701=v5345;
v5701=runJTramp(v5701);
if (typeof v5701 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5702=new JTramp(v5701, [runJTramp(v5699),runJTramp(v5700)]);
var v5703=v5702;
var v5704=lglobal["midir:closure"];
var v5705=v5704;
v5705=runJTramp(v5705);
if (typeof v5705 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5706=new JTramp(v5705, [runJTramp(v5698),runJTramp(v5703)]);
return v5706;
};
var v5707=v5690;
var v5708=v5366;
var v5709=lglobal["tail"];
var v5710=v5709;
v5710=runJTramp(v5710);
if (typeof v5710 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5711=new JTramp(v5710, [runJTramp(v5708)]);
var v5712=v5711;
var v5713=lglobal["apply"];
var v5714=v5713;
v5714=runJTramp(v5714);
if (typeof v5714 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5715=new JTramp(v5714, [runJTramp(v5707),runJTramp(v5712)]);
v5689=v5715;
} else {
var v5716=v5366;
var v5717=lglobal["midir:set!?"];
var v5718=v5717;
v5718=runJTramp(v5718);
if (typeof v5718 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5719=new JTramp(v5718, [runJTramp(v5716)]);
var v5720;
if(runJTramp(v5719)) {
var v5721=function (v5722,v5723) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v5725=v5722;
var v5726=v5346;
v5726=runJTramp(v5726);
if (typeof v5726 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5727=new JTramp(v5726, [runJTramp(v5725)]);
var v5728=v5727;
var v5729=v5723;
var v5730=v5343;
var v5731=v5345;
v5731=runJTramp(v5731);
if (typeof v5731 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5732=new JTramp(v5731, [runJTramp(v5729),runJTramp(v5730)]);
var v5733=v5732;
var v5734=lglobal["midir:set!"];
var v5735=v5734;
v5735=runJTramp(v5735);
if (typeof v5735 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5736=new JTramp(v5735, [runJTramp(v5728),runJTramp(v5733)]);
return v5736;
};
var v5737=v5721;
var v5738=v5366;
var v5739=lglobal["tail"];
var v5740=v5739;
v5740=runJTramp(v5740);
if (typeof v5740 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5741=new JTramp(v5740, [runJTramp(v5738)]);
var v5742=v5741;
var v5743=lglobal["apply"];
var v5744=v5743;
v5744=runJTramp(v5744);
if (typeof v5744 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5745=new JTramp(v5744, [runJTramp(v5737),runJTramp(v5742)]);
v5720=v5745;
} else {
var v5746=v5366;
var v5747=lglobal["midir:gset!?"];
var v5748=v5747;
v5748=runJTramp(v5748);
if (typeof v5748 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5749=new JTramp(v5748, [runJTramp(v5746)]);
var v5750;
if(runJTramp(v5749)) {
var v5751=function (v5752,v5753) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v5755=v5752;
var v5756=v5753;
var v5757=v5343;
var v5758=v5345;
v5758=runJTramp(v5758);
if (typeof v5758 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5759=new JTramp(v5758, [runJTramp(v5756),runJTramp(v5757)]);
var v5760=v5759;
var v5761=lglobal["midir:gset!"];
var v5762=v5761;
v5762=runJTramp(v5762);
if (typeof v5762 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5763=new JTramp(v5762, [runJTramp(v5755),runJTramp(v5760)]);
return v5763;
};
var v5764=v5751;
var v5765=v5366;
var v5766=lglobal["tail"];
var v5767=v5766;
v5767=runJTramp(v5767);
if (typeof v5767 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5768=new JTramp(v5767, [runJTramp(v5765)]);
var v5769=v5768;
var v5770=lglobal["apply"];
var v5771=v5770;
v5771=runJTramp(v5771);
if (typeof v5771 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5772=new JTramp(v5771, [runJTramp(v5764),runJTramp(v5769)]);
v5750=v5772;
} else {
var v5773=v5366;
var v5774=lglobal["midir:ffi?"];
var v5775=v5774;
v5775=runJTramp(v5775);
if (typeof v5775 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5776=new JTramp(v5775, [runJTramp(v5773)]);
var v5777;
if(runJTramp(v5776)) {
var v5778=function (v5779) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v5781=v5779;
var v5782=v5343;
var v5783=v5345;
v5783=runJTramp(v5783);
if (typeof v5783 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5784=new JTramp(v5783, [runJTramp(v5781),runJTramp(v5782)]);
var v5785=v5784;
var v5786=lglobal["midir:ffi"];
var v5787=v5786;
v5787=runJTramp(v5787);
if (typeof v5787 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5788=new JTramp(v5787, [runJTramp(v5785)]);
return v5788;
};
var v5789=v5778;
var v5790=v5366;
var v5791=lglobal["tail"];
var v5792=v5791;
v5792=runJTramp(v5792);
if (typeof v5792 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5793=new JTramp(v5792, [runJTramp(v5790)]);
var v5794=v5793;
var v5795=lglobal["apply"];
var v5796=v5795;
v5796=runJTramp(v5796);
if (typeof v5796 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5797=new JTramp(v5796, [runJTramp(v5789),runJTramp(v5794)]);
v5777=v5797;
} else {
var v5798="Unknown midir: ";
var v5799=v5798;
var v5800=v5342;
var v5801=lglobal["++"];
var v5802=v5801;
v5802=runJTramp(v5802);
if (typeof v5802 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5803=new JTramp(v5802, [runJTramp(v5799),runJTramp(v5800)]);
var v5804=v5803;
var v5805=lglobal["error"];
var v5806=v5805;
v5806=runJTramp(v5806);
if (typeof v5806 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5807=new JTramp(v5806, [runJTramp(v5804)]);
v5777=v5807;
}
v5750=v5777;
}
v5720=v5750;
}
v5689=v5720;
}
v5652=v5689;
}
v5633=v5652;
}
v5596=v5633;
}
v5571=v5596;
}
v5544=v5571;
}
v5525=v5544;
}
v5490=v5525;
}
v5463=v5490;
}
v5399=v5463;
}
v5372=v5399;
}
return v5372;
};
var v5808=v5365;
v5808=runJTramp(v5808);
if (typeof v5808 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5809=new JTramp(v5808, [runJTramp(v5364)]);
return v5809;
};
v5340=v5341;
lglobal["copy-propagate-midir"]=runJTramp(v5340);
})();
(function () {
var v5810;
var v5811=function (v5812,v5813) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v5815;
var v5816;
var v5817;
var v5818=function (v5819) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v5821=v5819;
var v5822=v5813;
var v5823=lglobal["compile-midir-to-lambdas"];
var v5824=v5823;
v5824=runJTramp(v5824);
if (typeof v5824 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5825=new JTramp(v5824, [runJTramp(v5821),runJTramp(v5822)]);
return v5825;
};
var v5826=v5815=runJTramp(v5818);
var v5827=function (v5828) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v5830=function (v5831) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
return v5828;
};
return v5830;
};
var v5833=v5816=runJTramp(v5827);
var v5834=function (v5835,v5836) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v5838=function (v5839) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v5841=v5839;
var v5842=v5839;
var v5843=v5835;
v5843=runJTramp(v5843);
if (typeof v5843 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5844=new JTramp(v5843, [runJTramp(v5842)]);
var v5845=v5844;
var v5846=v5836;
v5846=runJTramp(v5846);
if (typeof v5846 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5847=new JTramp(v5846, [runJTramp(v5845)]);
var v5848=v5847;
v5848=runJTramp(v5848);
if (typeof v5848 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5849=new JTramp(v5848, [runJTramp(v5841)]);
return v5849;
};
return v5838;
};
var v5850=v5817=runJTramp(v5834);
var v5851=v5812;
var v5852=function (v5853) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v5855=v5853;
var v5856=lglobal["midir:lit?"];
var v5857=v5856;
v5857=runJTramp(v5857);
if (typeof v5857 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5858=new JTramp(v5857, [runJTramp(v5855)]);
var v5859;
if(runJTramp(v5858)) {
var v5860=function (v5861,v5862) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v5864=v5862;
var v5865=v5815;
v5865=runJTramp(v5865);
if (typeof v5865 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5866=new JTramp(v5865, [runJTramp(v5864)]);
var v5867=v5866;
var v5868=function (v5869) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v5871=v5861;
var v5872=v5816;
v5872=runJTramp(v5872);
if (typeof v5872 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5873=new JTramp(v5872, [runJTramp(v5871)]);
var v5874=v5873;
var v5875=v5869;
var v5876=v5817;
v5876=runJTramp(v5876);
if (typeof v5876 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5877=new JTramp(v5876, [runJTramp(v5874),runJTramp(v5875)]);
var v5878=v5877;
var v5879=lglobal["const"];
var v5880=v5879;
v5880=runJTramp(v5880);
if (typeof v5880 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5881=new JTramp(v5880, [runJTramp(v5878)]);
return v5881;
};
var v5882=v5868;
v5882=runJTramp(v5882);
if (typeof v5882 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5883=new JTramp(v5882, [runJTramp(v5867)]);
return v5883;
};
var v5884=v5860;
var v5885=v5853;
var v5886=lglobal["tail"];
var v5887=v5886;
v5887=runJTramp(v5887);
if (typeof v5887 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5888=new JTramp(v5887, [runJTramp(v5885)]);
var v5889=v5888;
var v5890=lglobal["apply"];
var v5891=v5890;
v5891=runJTramp(v5891);
if (typeof v5891 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5892=new JTramp(v5891, [runJTramp(v5884),runJTramp(v5889)]);
v5859=v5892;
} else {
var v5893=v5853;
var v5894=lglobal["midir:lookup?"];
var v5895=v5894;
v5895=runJTramp(v5895);
if (typeof v5895 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5896=new JTramp(v5895, [runJTramp(v5893)]);
var v5897;
if(runJTramp(v5896)) {
var v5898=function (v5899,v5900) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v5902=v5900;
var v5903=v5815;
v5903=runJTramp(v5903);
if (typeof v5903 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5904=new JTramp(v5903, [runJTramp(v5902)]);
var v5905=v5904;
var v5906=function (v5907) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v5909=function (v5910) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v5912="lookup";
var v5913=v5912;
var v5914=v5899;
var v5915=v5910;
v5915=runJTramp(v5915);
if (typeof v5915 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5916=new JTramp(v5915, [runJTramp(v5913),runJTramp(v5914)]);
return v5916;
};
var v5917=v5909;
var v5918=v5907;
var v5919=v5817;
v5919=runJTramp(v5919);
if (typeof v5919 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5920=new JTramp(v5919, [runJTramp(v5917),runJTramp(v5918)]);
var v5921=v5920;
var v5922=lglobal["const"];
var v5923=v5922;
v5923=runJTramp(v5923);
if (typeof v5923 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5924=new JTramp(v5923, [runJTramp(v5921)]);
return v5924;
};
var v5925=v5906;
v5925=runJTramp(v5925);
if (typeof v5925 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5926=new JTramp(v5925, [runJTramp(v5905)]);
return v5926;
};
var v5927=v5898;
var v5928=v5853;
var v5929=lglobal["tail"];
var v5930=v5929;
v5930=runJTramp(v5930);
if (typeof v5930 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5931=new JTramp(v5930, [runJTramp(v5928)]);
var v5932=v5931;
var v5933=lglobal["apply"];
var v5934=v5933;
v5934=runJTramp(v5934);
if (typeof v5934 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5935=new JTramp(v5934, [runJTramp(v5927),runJTramp(v5932)]);
v5897=v5935;
} else {
var v5936=v5853;
var v5937=lglobal["midir:glookup?"];
var v5938=v5937;
v5938=runJTramp(v5938);
if (typeof v5938 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5939=new JTramp(v5938, [runJTramp(v5936)]);
var v5940;
if(runJTramp(v5939)) {
var v5941=function (v5942,v5943) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v5945=v5943;
var v5946=v5815;
v5946=runJTramp(v5946);
if (typeof v5946 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5947=new JTramp(v5946, [runJTramp(v5945)]);
var v5948=v5947;
var v5949=function (v5950) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v5952=function (v5953) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v5955="lookup";
var v5956=v5955;
var v5957=v5942;
var v5958=v5953;
v5958=runJTramp(v5958);
if (typeof v5958 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5959=new JTramp(v5958, [runJTramp(v5956),runJTramp(v5957)]);
return v5959;
};
var v5960=v5952;
var v5961=v5950;
var v5962=v5817;
v5962=runJTramp(v5962);
if (typeof v5962 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5963=new JTramp(v5962, [runJTramp(v5960),runJTramp(v5961)]);
var v5964=v5963;
var v5965=lglobal["const"];
var v5966=v5965;
v5966=runJTramp(v5966);
if (typeof v5966 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5967=new JTramp(v5966, [runJTramp(v5964)]);
return v5967;
};
var v5968=v5949;
v5968=runJTramp(v5968);
if (typeof v5968 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5969=new JTramp(v5968, [runJTramp(v5948)]);
return v5969;
};
var v5970=v5941;
var v5971=v5853;
var v5972=lglobal["tail"];
var v5973=v5972;
v5973=runJTramp(v5973);
if (typeof v5973 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5974=new JTramp(v5973, [runJTramp(v5971)]);
var v5975=v5974;
var v5976=lglobal["apply"];
var v5977=v5976;
v5977=runJTramp(v5977);
if (typeof v5977 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5978=new JTramp(v5977, [runJTramp(v5970),runJTramp(v5975)]);
v5940=v5978;
} else {
var v5979=v5853;
var v5980=lglobal["midir:enter?"];
var v5981=v5980;
v5981=runJTramp(v5981);
if (typeof v5981 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5982=new JTramp(v5981, [runJTramp(v5979)]);
var v5983;
if(runJTramp(v5982)) {
var v5984=function (v5985,v5986,v5987,v5988) {
if (arguments.length < 4) {
throw new Error("Expecting at least 4 arguments.");
}
if (arguments.length > 4) {
throw new Error("Expecting at most 4 arguments.");
}
var v5990=v5988;
var v5991=v5815;
v5991=runJTramp(v5991);
if (typeof v5991 !== "function") {
throw new Error("Cannot call non-function.");
}
var v5992=new JTramp(v5991, [runJTramp(v5990)]);
var v5993=v5992;
var v5994=function (v5995) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v5997;
var v5998=function (v5999,v6000,v6001,v6002) {
if (arguments.length < 4) {
throw new Error("Expecting at least 4 arguments.");
}
if (arguments.length > 4) {
throw new Error("Expecting at most 4 arguments.");
}
var v6004=v6000;
var v6005=lglobal["nil?"];
var v6006=v6005;
v6006=runJTramp(v6006);
if (typeof v6006 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6007=new JTramp(v6006, [runJTramp(v6004)]);
var v6008=v6007;
var v6009=function (v6010) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v6012;
if(runJTramp(v6010)) {
var v6013=v6001;
var v6014=lglobal["null?"];
var v6015=v6014;
v6015=runJTramp(v6015);
if (typeof v6015 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6016=new JTramp(v6015, [runJTramp(v6013)]);
var v6017=v6016;
var v6018=function (v6019) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v6021;
if(runJTramp(v6019)) {
var v6022=v6002;
var v6023=lglobal["nil?"];
var v6024=v6023;
v6024=runJTramp(v6024);
if (typeof v6024 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6025=new JTramp(v6024, [runJTramp(v6022)]);
var v6026=v6025;
var v6027=lglobal["not"];
var v6028=v6027;
v6028=runJTramp(v6028);
if (typeof v6028 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6029=new JTramp(v6028, [runJTramp(v6026)]);
v6021=v6029;
} else {
v6021=v6019;
}
return v6021;
};
var v6030=v6018;
v6030=runJTramp(v6030);
if (typeof v6030 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6031=new JTramp(v6030, [runJTramp(v6017)]);
v6012=v6031;
} else {
v6012=v6010;
}
return v6012;
};
var v6032=v6009;
v6032=runJTramp(v6032);
if (typeof v6032 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6033=new JTramp(v6032, [runJTramp(v6008)]);
var v6034;
if(runJTramp(v6033)) {
var v6035="Too many arguments passed to function.";
var v6036=v6035;
var v6037=lglobal["error"];
var v6038=v6037;
v6038=runJTramp(v6038);
if (typeof v6038 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6039=new JTramp(v6038, [runJTramp(v6036)]);
v6034=v6039;
} else {
var v6040=v6000;
var v6041=lglobal["nil?"];
var v6042=v6041;
v6042=runJTramp(v6042);
if (typeof v6042 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6043=new JTramp(v6042, [runJTramp(v6040)]);
var v6044;
if(runJTramp(v6043)) {
var v6045=v6001;
var v6046=lglobal["null?"];
var v6047=v6046;
v6047=runJTramp(v6047);
if (typeof v6047 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6048=new JTramp(v6047, [runJTramp(v6045)]);
var v6049=v6048;
var v6050=lglobal["not"];
var v6051=v6050;
v6051=runJTramp(v6051);
if (typeof v6051 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6052=new JTramp(v6051, [runJTramp(v6049)]);
var v6053;
if(runJTramp(v6052)) {
var v6054="set!";
var v6055=v6054;
var v6056=v6001;
var v6057=v6002;
var v6058=v5999;
v6058=runJTramp(v6058);
if (typeof v6058 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6059=new JTramp(v6058, [runJTramp(v6055),runJTramp(v6056),runJTramp(v6057)]);
v6053=v6059;
} else {
var v6060=null;
v6053=v6060;
}
v6053=runJTramp(v6053);
v6044=v5999;
} else {
var v6061=v6002;
var v6062=lglobal["nil?"];
var v6063=v6062;
v6063=runJTramp(v6063);
if (typeof v6063 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6064=new JTramp(v6063, [runJTramp(v6061)]);
var v6065;
if(runJTramp(v6064)) {
var v6066="Too few arguments passed to function.";
var v6067=v6066;
var v6068=lglobal["error"];
var v6069=v6068;
v6069=runJTramp(v6069);
if (typeof v6069 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6070=new JTramp(v6069, [runJTramp(v6067)]);
v6065=v6070;
} else {
var v6071=lglobal["otherwise"];
var v6072;
if(runJTramp(v6071)) {
var v6073="set!";
var v6074=v6073;
var v6075=v6000;
var v6076=lglobal["head"];
var v6077=v6076;
v6077=runJTramp(v6077);
if (typeof v6077 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6078=new JTramp(v6077, [runJTramp(v6075)]);
var v6079=v6078;
var v6080=v6002;
var v6081=lglobal["head"];
var v6082=v6081;
v6082=runJTramp(v6082);
if (typeof v6082 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6083=new JTramp(v6082, [runJTramp(v6080)]);
var v6084=v6083;
var v6085=v5999;
v6085=runJTramp(v6085);
if (typeof v6085 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6086=new JTramp(v6085, [runJTramp(v6074),runJTramp(v6079),runJTramp(v6084)]);
v6086=runJTramp(v6086);
var v6087=v5999;
var v6088=v6000;
var v6089=lglobal["tail"];
var v6090=v6089;
v6090=runJTramp(v6090);
if (typeof v6090 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6091=new JTramp(v6090, [runJTramp(v6088)]);
var v6092=v6091;
var v6093=v6001;
var v6094=v6002;
var v6095=lglobal["tail"];
var v6096=v6095;
v6096=runJTramp(v6096);
if (typeof v6096 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6097=new JTramp(v6096, [runJTramp(v6094)]);
var v6098=v6097;
var v6099=v5997;
v6099=runJTramp(v6099);
if (typeof v6099 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6100=new JTramp(v6099, [runJTramp(v6087),runJTramp(v6092),runJTramp(v6093),runJTramp(v6098)]);
v6072=v6100;
} else {
var v6101=null;
v6072=v6101;
}
v6065=v6072;
}
v6044=v6065;
}
v6034=v6044;
}
return v6034;
};
var v6102=v5997=runJTramp(v5998);
var v6103=function (v6104) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v6106=function () {
var v6107 = new Nil();
for (var v6108 = arguments.length - 1; v6108 >= 0; v6108--) {
  v6107 = new Cons(arguments[v6108], v6107);
}
var v6109=v6104;
var v6110=lglobal["make-env"];
var v6111=v6110;
v6111=runJTramp(v6111);
if (typeof v6111 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6112=new JTramp(v6111, [runJTramp(v6109)]);
var v6113=v6112;
var v6114=v5985;
var v6115=v5986;
var v6116=v6107;
var v6117=v5997;
v6117=runJTramp(v6117);
if (typeof v6117 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6118=new JTramp(v6117, [runJTramp(v6113),runJTramp(v6114),runJTramp(v6115),runJTramp(v6116)]);
var v6119=v6118;
var v6120=function (v6121) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v6123=v6121;
var v6124=lglobal["null"];
var v6125=v6124;
var v6126=v5995;
v6126=runJTramp(v6126);
if (typeof v6126 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6127=new JTramp(v6126, [runJTramp(v6125)]);
var v6128=v6127;
v6128=runJTramp(v6128);
if (typeof v6128 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6129=new JTramp(v6128, [runJTramp(v6123)]);
return v6129;
};
var v6130=v6120;
v6130=runJTramp(v6130);
if (typeof v6130 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6131=new JTramp(v6130, [runJTramp(v6119)]);
return v6131;
};
return v6106;
};
return v6103;
};
var v6132=v5994;
v6132=runJTramp(v6132);
if (typeof v6132 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6133=new JTramp(v6132, [runJTramp(v5993)]);
return v6133;
};
var v6134=v5984;
var v6135=v5853;
var v6136=lglobal["tail"];
var v6137=v6136;
v6137=runJTramp(v6137);
if (typeof v6137 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6138=new JTramp(v6137, [runJTramp(v6135)]);
var v6139=v6138;
var v6140=lglobal["apply"];
var v6141=v6140;
v6141=runJTramp(v6141);
if (typeof v6141 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6142=new JTramp(v6141, [runJTramp(v6134),runJTramp(v6139)]);
v5983=v6142;
} else {
var v6143=v5853;
var v6144=lglobal["midir:return?"];
var v6145=v6144;
v6145=runJTramp(v6145);
if (typeof v6145 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6146=new JTramp(v6145, [runJTramp(v6143)]);
var v6147;
if(runJTramp(v6146)) {
var v6148=function () {
if (arguments.length > 0) {
throw new Error("Expecting at most 0 arguments.");
}
var v6150=function (v6151) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v6153=function (v6154) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
return v6151;
};
return v6153;
};
return v6150;
};
var v6156=v6148;
var v6157=v5853;
var v6158=lglobal["tail"];
var v6159=v6158;
v6159=runJTramp(v6159);
if (typeof v6159 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6160=new JTramp(v6159, [runJTramp(v6157)]);
var v6161=v6160;
var v6162=lglobal["apply"];
var v6163=v6162;
v6163=runJTramp(v6163);
if (typeof v6163 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6164=new JTramp(v6163, [runJTramp(v6156),runJTramp(v6161)]);
v6147=v6164;
} else {
var v6165=v5853;
var v6166=lglobal["midir:bind?"];
var v6167=v6166;
v6167=runJTramp(v6167);
if (typeof v6167 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6168=new JTramp(v6167, [runJTramp(v6165)]);
var v6169;
if(runJTramp(v6168)) {
var v6170=function (v6171,v6172) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v6174=v6172;
var v6175=v5815;
v6175=runJTramp(v6175);
if (typeof v6175 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6176=new JTramp(v6175, [runJTramp(v6174)]);
var v6177=v6176;
var v6178=function (v6179) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v6181=function (v6182) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v6184=function (v6185) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v6187="set!";
var v6188=v6187;
var v6189=v6171;
var v6190=v6182;
var v6191=v6185;
v6191=runJTramp(v6191);
if (typeof v6191 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6192=new JTramp(v6191, [runJTramp(v6188),runJTramp(v6189),runJTramp(v6190)]);
v6192=runJTramp(v6192);
var v6193=v6185;
var v6194=lglobal["null"];
var v6195=v6194;
var v6196=v6179;
v6196=runJTramp(v6196);
if (typeof v6196 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6197=new JTramp(v6196, [runJTramp(v6195)]);
var v6198=v6197;
v6198=runJTramp(v6198);
if (typeof v6198 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6199=new JTramp(v6198, [runJTramp(v6193)]);
return v6199;
};
return v6184;
};
return v6181;
};
var v6200=v6178;
v6200=runJTramp(v6200);
if (typeof v6200 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6201=new JTramp(v6200, [runJTramp(v6177)]);
return v6201;
};
var v6202=v6170;
var v6203=v5853;
var v6204=lglobal["tail"];
var v6205=v6204;
v6205=runJTramp(v6205);
if (typeof v6205 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6206=new JTramp(v6205, [runJTramp(v6203)]);
var v6207=v6206;
var v6208=lglobal["apply"];
var v6209=v6208;
v6209=runJTramp(v6209);
if (typeof v6209 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6210=new JTramp(v6209, [runJTramp(v6202),runJTramp(v6207)]);
v6169=v6210;
} else {
var v6211=v5853;
var v6212=lglobal["midir:if?"];
var v6213=v6212;
v6213=runJTramp(v6213);
if (typeof v6213 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6214=new JTramp(v6213, [runJTramp(v6211)]);
var v6215;
if(runJTramp(v6214)) {
var v6216=function (v6217,v6218,v6219) {
if (arguments.length < 3) {
throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
throw new Error("Expecting at most 3 arguments.");
}
var v6221=v6219;
var v6222=v5815;
v6222=runJTramp(v6222);
if (typeof v6222 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6223=new JTramp(v6222, [runJTramp(v6221)]);
var v6224=v6223;
var v6225=function (v6226) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v6228=v6217;
var v6229=lglobal["null"];
var v6230=v6229;
var v6231=lglobal["compile-midir-to-lambdas"];
var v6232=v6231;
v6232=runJTramp(v6232);
if (typeof v6232 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6233=new JTramp(v6232, [runJTramp(v6228),runJTramp(v6230)]);
var v6234=v6233;
var v6235=v6218;
var v6236=lglobal["null"];
var v6237=v6236;
var v6238=lglobal["compile-midir-to-lambdas"];
var v6239=v6238;
v6239=runJTramp(v6239);
if (typeof v6239 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6240=new JTramp(v6239, [runJTramp(v6235),runJTramp(v6237)]);
var v6241=v6240;
var v6242=function (v6243,v6244) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v6246=function (v6247) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v6249=lglobal["null"];
var v6250=v6249;
var v6251;
if(runJTramp(v6247)) {
v6251=v6243;
} else {
v6251=v6244;
}
var v6252=v6251;
v6252=runJTramp(v6252);
if (typeof v6252 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6253=new JTramp(v6252, [runJTramp(v6250)]);
var v6254=v6253;
var v6255=v6226;
var v6256=v5817;
v6256=runJTramp(v6256);
if (typeof v6256 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6257=new JTramp(v6256, [runJTramp(v6254),runJTramp(v6255)]);
return v6257;
};
return v6246;
};
var v6258=v6242;
v6258=runJTramp(v6258);
if (typeof v6258 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6259=new JTramp(v6258, [runJTramp(v6234),runJTramp(v6241)]);
return v6259;
};
var v6260=v6225;
v6260=runJTramp(v6260);
if (typeof v6260 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6261=new JTramp(v6260, [runJTramp(v6224)]);
return v6261;
};
var v6262=v6216;
var v6263=v5853;
var v6264=lglobal["tail"];
var v6265=v6264;
v6265=runJTramp(v6265);
if (typeof v6265 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6266=new JTramp(v6265, [runJTramp(v6263)]);
var v6267=v6266;
var v6268=lglobal["apply"];
var v6269=v6268;
v6269=runJTramp(v6269);
if (typeof v6269 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6270=new JTramp(v6269, [runJTramp(v6262),runJTramp(v6267)]);
v6215=v6270;
} else {
var v6271=v5853;
var v6272=lglobal["midir:leave?"];
var v6273=v6272;
v6273=runJTramp(v6273);
if (typeof v6273 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6274=new JTramp(v6273, [runJTramp(v6271)]);
var v6275;
if(runJTramp(v6274)) {
var v6276=function () {
if (arguments.length > 0) {
throw new Error("Expecting at most 0 arguments.");
}
var v6278=function (v6279) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v6281=function (v6282) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
return v6279;
};
return v6281;
};
return v6278;
};
var v6284=v6276;
var v6285=v5853;
var v6286=lglobal["tail"];
var v6287=v6286;
v6287=runJTramp(v6287);
if (typeof v6287 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6288=new JTramp(v6287, [runJTramp(v6285)]);
var v6289=v6288;
var v6290=lglobal["apply"];
var v6291=v6290;
v6291=runJTramp(v6291);
if (typeof v6291 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6292=new JTramp(v6291, [runJTramp(v6284),runJTramp(v6289)]);
v6275=v6292;
} else {
var v6293=v5853;
var v6294=lglobal["midir:funcall?"];
var v6295=v6294;
v6295=runJTramp(v6295);
if (typeof v6295 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6296=new JTramp(v6295, [runJTramp(v6293)]);
var v6297;
if(runJTramp(v6296)) {
var v6298=function (v6299,v6300,v6301) {
if (arguments.length < 3) {
throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
throw new Error("Expecting at most 3 arguments.");
}
var v6303=v6301;
var v6304=v5815;
v6304=runJTramp(v6304);
if (typeof v6304 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6305=new JTramp(v6304, [runJTramp(v6303)]);
var v6306=v6305;
var v6307=function (v6308) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v6310=function (v6311) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v6313=function (v6314) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v6316="lookup";
var v6317=v6316;
var v6318=v6299;
var v6319=v6314;
v6319=runJTramp(v6319);
if (typeof v6319 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6320=new JTramp(v6319, [runJTramp(v6317),runJTramp(v6318)]);
var v6321=v6320;
var v6322=function (v6323) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v6325="lookup";
var v6326=v6325;
var v6327=v6323;
var v6328=v6314;
v6328=runJTramp(v6328);
if (typeof v6328 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6329=new JTramp(v6328, [runJTramp(v6326),runJTramp(v6327)]);
return v6329;
};
var v6330=v6322;
var v6331=v6300;
var v6332=lglobal["map"];
var v6333=v6332;
v6333=runJTramp(v6333);
if (typeof v6333 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6334=new JTramp(v6333, [runJTramp(v6330),runJTramp(v6331)]);
var v6335=v6334;
var v6336=function (v6337,v6338) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v6340=v6314;
var v6341=v6337;
var v6342=v6338;
var v6343=lglobal["apply"];
var v6344=v6343;
v6344=runJTramp(v6344);
if (typeof v6344 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6345=new JTramp(v6344, [runJTramp(v6341),runJTramp(v6342)]);
var v6346=v6345;
var v6347=v6308;
v6347=runJTramp(v6347);
if (typeof v6347 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6348=new JTramp(v6347, [runJTramp(v6346)]);
var v6349=v6348;
v6349=runJTramp(v6349);
if (typeof v6349 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6350=new JTramp(v6349, [runJTramp(v6340)]);
return v6350;
};
var v6351=v6336;
v6351=runJTramp(v6351);
if (typeof v6351 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6352=new JTramp(v6351, [runJTramp(v6321),runJTramp(v6335)]);
return v6352;
};
return v6313;
};
return v6310;
};
var v6353=v6307;
v6353=runJTramp(v6353);
if (typeof v6353 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6354=new JTramp(v6353, [runJTramp(v6306)]);
return v6354;
};
var v6355=v6298;
var v6356=v5853;
var v6357=lglobal["tail"];
var v6358=v6357;
v6358=runJTramp(v6358);
if (typeof v6358 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6359=new JTramp(v6358, [runJTramp(v6356)]);
var v6360=v6359;
var v6361=lglobal["apply"];
var v6362=v6361;
v6362=runJTramp(v6362);
if (typeof v6362 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6363=new JTramp(v6362, [runJTramp(v6355),runJTramp(v6360)]);
v6297=v6363;
} else {
var v6364=v5853;
var v6365=lglobal["midir:closure?"];
var v6366=v6365;
v6366=runJTramp(v6366);
if (typeof v6366 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6367=new JTramp(v6366, [runJTramp(v6364)]);
var v6368;
if(runJTramp(v6367)) {
var v6369=function (v6370,v6371) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v6373=v6370;
var v6374=lglobal["null"];
var v6375=v6374;
var v6376=lglobal["compile-midir-to-lambdas"];
var v6377=v6376;
v6377=runJTramp(v6377);
if (typeof v6377 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6378=new JTramp(v6377, [runJTramp(v6373),runJTramp(v6375)]);
var v6379=v6378;
var v6380=v6371;
var v6381=v5815;
v6381=runJTramp(v6381);
if (typeof v6381 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6382=new JTramp(v6381, [runJTramp(v6380)]);
var v6383=v6382;
var v6384=function (v6385,v6386) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v6388=v6385;
var v6389=v6386;
var v6390=v5817;
v6390=runJTramp(v6390);
if (typeof v6390 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6391=new JTramp(v6390, [runJTramp(v6388),runJTramp(v6389)]);
var v6392=v6391;
var v6393=lglobal["const"];
var v6394=v6393;
v6394=runJTramp(v6394);
if (typeof v6394 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6395=new JTramp(v6394, [runJTramp(v6392)]);
return v6395;
};
var v6396=v6384;
v6396=runJTramp(v6396);
if (typeof v6396 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6397=new JTramp(v6396, [runJTramp(v6379),runJTramp(v6383)]);
return v6397;
};
var v6398=v6369;
var v6399=v5853;
var v6400=lglobal["tail"];
var v6401=v6400;
v6401=runJTramp(v6401);
if (typeof v6401 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6402=new JTramp(v6401, [runJTramp(v6399)]);
var v6403=v6402;
var v6404=lglobal["apply"];
var v6405=v6404;
v6405=runJTramp(v6405);
if (typeof v6405 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6406=new JTramp(v6405, [runJTramp(v6398),runJTramp(v6403)]);
v6368=v6406;
} else {
var v6407=v5853;
var v6408=lglobal["midir:set!?"];
var v6409=v6408;
v6409=runJTramp(v6409);
if (typeof v6409 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6410=new JTramp(v6409, [runJTramp(v6407)]);
var v6411;
if(runJTramp(v6410)) {
var v6412=function (v6413,v6414) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v6416=v6414;
var v6417=v5815;
v6417=runJTramp(v6417);
if (typeof v6417 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6418=new JTramp(v6417, [runJTramp(v6416)]);
var v6419=v6418;
var v6420=function (v6421) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v6423=function (v6424) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v6426=function (v6427) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v6429="set!";
var v6430=v6429;
var v6431=v6413;
var v6432=v6424;
var v6433=v6427;
v6433=runJTramp(v6433);
if (typeof v6433 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6434=new JTramp(v6433, [runJTramp(v6430),runJTramp(v6431),runJTramp(v6432)]);
v6434=runJTramp(v6434);
var v6435=v6427;
var v6436=lglobal["null"];
var v6437=v6436;
var v6438=v6421;
v6438=runJTramp(v6438);
if (typeof v6438 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6439=new JTramp(v6438, [runJTramp(v6437)]);
var v6440=v6439;
v6440=runJTramp(v6440);
if (typeof v6440 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6441=new JTramp(v6440, [runJTramp(v6435)]);
return v6441;
};
return v6426;
};
return v6423;
};
var v6442=v6420;
v6442=runJTramp(v6442);
if (typeof v6442 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6443=new JTramp(v6442, [runJTramp(v6419)]);
return v6443;
};
var v6444=v6412;
var v6445=v5853;
var v6446=lglobal["tail"];
var v6447=v6446;
v6447=runJTramp(v6447);
if (typeof v6447 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6448=new JTramp(v6447, [runJTramp(v6445)]);
var v6449=v6448;
var v6450=lglobal["apply"];
var v6451=v6450;
v6451=runJTramp(v6451);
if (typeof v6451 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6452=new JTramp(v6451, [runJTramp(v6444),runJTramp(v6449)]);
v6411=v6452;
} else {
var v6453=v5853;
var v6454=lglobal["midir:ffi?"];
var v6455=v6454;
v6455=runJTramp(v6455);
if (typeof v6455 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6456=new JTramp(v6455, [runJTramp(v6453)]);
var v6457;
if(runJTramp(v6456)) {
var v6458=function (v6459) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v6461=v6459;
var v6462=v5815;
v6462=runJTramp(v6462);
if (typeof v6462 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6463=new JTramp(v6462, [runJTramp(v6461)]);
var v6464=v6463;
var v6465=function (v6466) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v6468=function (v6469) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v6471=function (v6472) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v6474=v6472;
var v6475=v6469;
var v6476=lglobal["ffi"];
var v6477=v6476;
v6477=runJTramp(v6477);
if (typeof v6477 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6478=new JTramp(v6477, [runJTramp(v6475)]);
var v6479=v6478;
var v6480=v6466;
v6480=runJTramp(v6480);
if (typeof v6480 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6481=new JTramp(v6480, [runJTramp(v6479)]);
var v6482=v6481;
v6482=runJTramp(v6482);
if (typeof v6482 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6483=new JTramp(v6482, [runJTramp(v6474)]);
return v6483;
};
return v6471;
};
return v6468;
};
var v6484=v6465;
v6484=runJTramp(v6484);
if (typeof v6484 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6485=new JTramp(v6484, [runJTramp(v6464)]);
return v6485;
};
var v6486=v6458;
var v6487=v5853;
var v6488=lglobal["tail"];
var v6489=v6488;
v6489=runJTramp(v6489);
if (typeof v6489 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6490=new JTramp(v6489, [runJTramp(v6487)]);
var v6491=v6490;
var v6492=lglobal["apply"];
var v6493=v6492;
v6493=runJTramp(v6493);
if (typeof v6493 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6494=new JTramp(v6493, [runJTramp(v6486),runJTramp(v6491)]);
v6457=v6494;
} else {
var v6495="Unknown midir ";
var v6496=v6495;
var v6497=v5812;
var v6498=lglobal["repr"];
var v6499=v6498;
v6499=runJTramp(v6499);
if (typeof v6499 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6500=new JTramp(v6499, [runJTramp(v6497)]);
var v6501=v6500;
var v6502=lglobal["++"];
var v6503=v6502;
v6503=runJTramp(v6503);
if (typeof v6503 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6504=new JTramp(v6503, [runJTramp(v6496),runJTramp(v6501)]);
var v6505=v6504;
var v6506=lglobal["error"];
var v6507=v6506;
v6507=runJTramp(v6507);
if (typeof v6507 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6508=new JTramp(v6507, [runJTramp(v6505)]);
v6457=v6508;
}
v6411=v6457;
}
v6368=v6411;
}
v6297=v6368;
}
v6275=v6297;
}
v6215=v6275;
}
v6169=v6215;
}
v6147=v6169;
}
v5983=v6147;
}
v5940=v5983;
}
v5897=v5940;
}
v5859=v5897;
}
return v5859;
};
var v6509=v5852;
v6509=runJTramp(v6509);
if (typeof v6509 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6510=new JTramp(v6509, [runJTramp(v5851)]);
return v6510;
};
v5810=v5811;
lglobal["compile-midir-to-lambdas"]=runJTramp(v5810);
})();
(function () {
var v6511;
var v6512=function (v6513,v6514) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v6516;
var v6517=function (v6518) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v6520=v6518;
var v6521=lglobal["read:has-another?"];
var v6522=v6521;
v6522=runJTramp(v6522);
if (typeof v6522 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6523=new JTramp(v6522, [runJTramp(v6520)]);
var v6524;
if(runJTramp(v6523)) {
var v6525=v6518;
var v6526=lglobal["read:sexp"];
var v6527=v6526;
v6527=runJTramp(v6527);
if (typeof v6527 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6528=new JTramp(v6527, [runJTramp(v6525)]);
var v6529=v6528;
var v6530=function (v6531) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v6533="Compiling ";
var v6534=v6533;
var v6535=v6531;
var v6536=lglobal["repr"];
var v6537=v6536;
v6537=runJTramp(v6537);
if (typeof v6537 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6538=new JTramp(v6537, [runJTramp(v6535)]);
var v6539=v6538;
var v6540="\n";
var v6541=v6540;
var v6542=lglobal["print"];
var v6543=v6542;
v6543=runJTramp(v6543);
if (typeof v6543 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6544=new JTramp(v6543, [runJTramp(v6534),runJTramp(v6539),runJTramp(v6541)]);
v6544=runJTramp(v6544);
var v6545=v6531;
var v6546=lglobal["compile-toplevel-to-midir"];
var v6547=v6546;
v6547=runJTramp(v6547);
if (typeof v6547 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6548=new JTramp(v6547, [runJTramp(v6545)]);
v6548=runJTramp(v6548);
var v6549=v6518;
var v6550=v6516;
v6550=runJTramp(v6550);
if (typeof v6550 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6551=new JTramp(v6550, [runJTramp(v6549)]);
return v6551;
};
var v6552=v6530;
v6552=runJTramp(v6552);
if (typeof v6552 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6553=new JTramp(v6552, [runJTramp(v6529)]);
v6524=v6553;
} else {
var v6554=null;
v6524=v6554;
}
return v6524;
};
var v6555=v6516=runJTramp(v6517);
var v6556=v6513;
var v6557=v6514;
var v6558=lglobal["stream:make"];
var v6559=v6558;
v6559=runJTramp(v6559);
if (typeof v6559 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6560=new JTramp(v6559, [runJTramp(v6556),runJTramp(v6557)]);
var v6561=v6560;
var v6562=function (v6563) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v6565=v6563;
var v6566=v6516;
v6566=runJTramp(v6566);
if (typeof v6566 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6567=new JTramp(v6566, [runJTramp(v6565)]);
return v6567;
};
var v6568=v6562;
v6568=runJTramp(v6568);
if (typeof v6568 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6569=new JTramp(v6568, [runJTramp(v6561)]);
return v6569;
};
v6511=v6512;
lglobal["compile-file"]=runJTramp(v6511);
})();
(function () {
var v6570;
var v6571=function () {
if (arguments.length > 0) {
throw new Error("Expecting at most 0 arguments.");
}
var v6573=lglobal["reset-midir-compile"];
var v6574=v6573;
v6574=runJTramp(v6574);
if (typeof v6574 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6575=new JTramp(v6574, []);
v6575=runJTramp(v6575);
var v6576=lglobal["compile-too"];
var v6577=v6576;
v6577=runJTramp(v6577);
if (typeof v6577 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6578=new JTramp(v6577, []);
return v6578;
};
v6570=v6571;
lglobal["compile"]=runJTramp(v6570);
})();
(function () {
var v6579;
var v6580=function () {
if (arguments.length > 0) {
throw new Error("Expecting at most 0 arguments.");
}
var v6582="*file*";
var v6583=v6582;
var v6584=lglobal["jsui:input-file"];
var v6585=v6584;
var v6586=lglobal["compile-file"];
var v6587=v6586;
v6587=runJTramp(v6587);
if (typeof v6587 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6588=new JTramp(v6587, [runJTramp(v6583),runJTramp(v6585)]);
v6588=runJTramp(v6588);
var v6589=lglobal["++"];
var v6590=v6589;
var v6591=lglobal["midir-toplevel-defs"];
var v6592=v6591;
var v6593=lglobal["reverse"];
var v6594=v6593;
v6594=runJTramp(v6594);
if (typeof v6594 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6595=new JTramp(v6594, [runJTramp(v6592)]);
var v6596=v6595;
var v6597=lglobal["apply"];
var v6598=v6597;
v6598=runJTramp(v6598);
if (typeof v6598 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6599=new JTramp(v6598, [runJTramp(v6590),runJTramp(v6596)]);
var v6600=v6599;
var v6601="(function (v) {$('#compiled').val(v); return null;})";
var v6602=v6601;
var v6603=lglobal["ffi"];
var v6604=v6603;
v6604=runJTramp(v6604);
if (typeof v6604 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6605=new JTramp(v6604, [runJTramp(v6602)]);
var v6606=v6605;
v6606=runJTramp(v6606);
if (typeof v6606 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6607=new JTramp(v6606, [runJTramp(v6600)]);
return v6607;
};
v6579=v6580;
lglobal["compile-too"]=runJTramp(v6579);
})();
(function () {
var v6608;
var v6609=function (v6610) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v6612="*eval*";
var v6613=v6612;
var v6614=v6610;
var v6615=lglobal["compile-file"];
var v6616=v6615;
v6616=runJTramp(v6616);
if (typeof v6616 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6617=new JTramp(v6616, [runJTramp(v6613),runJTramp(v6614)]);
return v6617;
};
v6608=v6609;
lglobal["midir-eval-all"]=runJTramp(v6608);
})();
(function () {
var v6618;
var v6619=0;
var v6620=v6619;
var v6621=lglobal["dict"];
var v6622=v6621;
v6622=runJTramp(v6622);
if (typeof v6622 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6623=new JTramp(v6622, []);
var v6624=v6623;
var v6625=function (v6626,v6627) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v6629=function (v6630) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v6632=v6630;
var v6633=lglobal["null?"];
var v6634=v6633;
v6634=runJTramp(v6634);
if (typeof v6634 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6635=new JTramp(v6634, [runJTramp(v6632)]);
var v6636=v6635;
var v6637=lglobal["not"];
var v6638=v6637;
v6638=runJTramp(v6638);
if (typeof v6638 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6639=new JTramp(v6638, [runJTramp(v6636)]);
var v6640=v6639;
var v6641=function (v6642) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v6644;
if(runJTramp(v6642)) {
var v6645=v6627;
var v6646=v6630;
var v6647=lglobal["dict:has?"];
var v6648=v6647;
v6648=runJTramp(v6648);
if (typeof v6648 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6649=new JTramp(v6648, [runJTramp(v6645),runJTramp(v6646)]);
v6644=v6649;
} else {
v6644=v6642;
}
return v6644;
};
var v6650=v6641;
v6650=runJTramp(v6650);
if (typeof v6650 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6651=new JTramp(v6650, [runJTramp(v6640)]);
var v6652;
if(runJTramp(v6651)) {
var v6653=v6627;
var v6654=v6630;
var v6655=lglobal["dict:get"];
var v6656=v6655;
v6656=runJTramp(v6656);
if (typeof v6656 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6657=new JTramp(v6656, [runJTramp(v6653),runJTramp(v6654)]);
v6652=v6657;
} else {
var v6658=1;
var v6659=v6658;
var v6660=v6626;
var v6661=lglobal["+"];
var v6662=v6661;
v6662=runJTramp(v6662);
if (typeof v6662 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6663=new JTramp(v6662, [runJTramp(v6659),runJTramp(v6660)]);
var v6664=v6626=runJTramp(v6663);
v6664=runJTramp(v6664);
var v6665="v";
var v6666=v6665;
var v6667=v6626;
var v6668=lglobal["++"];
var v6669=v6668;
v6669=runJTramp(v6669);
if (typeof v6669 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6670=new JTramp(v6669, [runJTramp(v6666),runJTramp(v6667)]);
var v6671=v6670;
var v6672=function (v6673) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v6675=v6627;
var v6676=v6630;
var v6677=v6673;
var v6678=lglobal["dict:set!"];
var v6679=v6678;
v6679=runJTramp(v6679);
if (typeof v6679 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6680=new JTramp(v6679, [runJTramp(v6675),runJTramp(v6676),runJTramp(v6677)]);
v6680=runJTramp(v6680);
return v6673;
};
var v6681=v6672;
v6681=runJTramp(v6681);
if (typeof v6681 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6682=new JTramp(v6681, [runJTramp(v6671)]);
v6652=v6682;
}
return v6652;
};
return v6629;
};
var v6683=v6625;
v6683=runJTramp(v6683);
if (typeof v6683 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6684=new JTramp(v6683, [runJTramp(v6620),runJTramp(v6624)]);
v6618=v6684;
lglobal["make-js-var"]=runJTramp(v6618);
})();
(function () {
var v6685;
var v6686=function (v6687,v6688,v6689) {
if (arguments.length < 3) {
throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
throw new Error("Expecting at most 3 arguments.");
}
var v6691=v6687;
var v6692=function (v6693) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v6695=v6693;
var v6696=lglobal["midir:lit?"];
var v6697=v6696;
v6697=runJTramp(v6697);
if (typeof v6697 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6698=new JTramp(v6697, [runJTramp(v6695)]);
var v6699;
if(runJTramp(v6698)) {
var v6700=function (v6701,v6702) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v6704=lglobal["null"];
var v6705=v6704;
var v6706=lglobal["make-js-var"];
var v6707=v6706;
v6707=runJTramp(v6707);
if (typeof v6707 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6708=new JTramp(v6707, [runJTramp(v6705)]);
var v6709=v6708;
var v6710=function (v6711) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v6713="var ";
var v6714=v6713;
var v6715=v6711;
var v6716="=";
var v6717=v6716;
var v6718=v6701;
var v6719=lglobal["compile-lit"];
var v6720=v6719;
v6720=runJTramp(v6720);
if (typeof v6720 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6721=new JTramp(v6720, [runJTramp(v6718)]);
var v6722=v6721;
var v6723=";\n";
var v6724=v6723;
var v6725=v6702;
var v6726=v6711;
var v6727=v6689;
var v6728=lglobal["compile-midir-to-js"];
var v6729=v6728;
v6729=runJTramp(v6729);
if (typeof v6729 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6730=new JTramp(v6729, [runJTramp(v6725),runJTramp(v6726),runJTramp(v6727)]);
var v6731=v6730;
var v6732=lglobal["++"];
var v6733=v6732;
v6733=runJTramp(v6733);
if (typeof v6733 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6734=new JTramp(v6733, [runJTramp(v6714),runJTramp(v6715),runJTramp(v6717),runJTramp(v6722),runJTramp(v6724),runJTramp(v6731)]);
return v6734;
};
var v6735=v6710;
v6735=runJTramp(v6735);
if (typeof v6735 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6736=new JTramp(v6735, [runJTramp(v6709)]);
return v6736;
};
var v6737=v6700;
var v6738=v6693;
var v6739=lglobal["tail"];
var v6740=v6739;
v6740=runJTramp(v6740);
if (typeof v6740 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6741=new JTramp(v6740, [runJTramp(v6738)]);
var v6742=v6741;
var v6743=lglobal["apply"];
var v6744=v6743;
v6744=runJTramp(v6744);
if (typeof v6744 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6745=new JTramp(v6744, [runJTramp(v6737),runJTramp(v6742)]);
v6699=v6745;
} else {
var v6746=v6693;
var v6747=lglobal["midir:lookup?"];
var v6748=v6747;
v6748=runJTramp(v6748);
if (typeof v6748 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6749=new JTramp(v6748, [runJTramp(v6746)]);
var v6750;
if(runJTramp(v6749)) {
var v6751=function (v6752,v6753) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v6755=v6753;
var v6756=v6752;
var v6757=lglobal["make-js-var"];
var v6758=v6757;
v6758=runJTramp(v6758);
if (typeof v6758 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6759=new JTramp(v6758, [runJTramp(v6756)]);
var v6760=v6759;
var v6761=v6689;
var v6762=lglobal["compile-midir-to-js"];
var v6763=v6762;
v6763=runJTramp(v6763);
if (typeof v6763 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6764=new JTramp(v6763, [runJTramp(v6755),runJTramp(v6760),runJTramp(v6761)]);
return v6764;
};
var v6765=v6751;
var v6766=v6693;
var v6767=lglobal["tail"];
var v6768=v6767;
v6768=runJTramp(v6768);
if (typeof v6768 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6769=new JTramp(v6768, [runJTramp(v6766)]);
var v6770=v6769;
var v6771=lglobal["apply"];
var v6772=v6771;
v6772=runJTramp(v6772);
if (typeof v6772 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6773=new JTramp(v6772, [runJTramp(v6765),runJTramp(v6770)]);
v6750=v6773;
} else {
var v6774=v6693;
var v6775=lglobal["midir:glookup?"];
var v6776=v6775;
v6776=runJTramp(v6776);
if (typeof v6776 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6777=new JTramp(v6776, [runJTramp(v6774)]);
var v6778;
if(runJTramp(v6777)) {
var v6779=function (v6780,v6781) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v6783=lglobal["null"];
var v6784=v6783;
var v6785=lglobal["make-js-var"];
var v6786=v6785;
v6786=runJTramp(v6786);
if (typeof v6786 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6787=new JTramp(v6786, [runJTramp(v6784)]);
var v6788=v6787;
var v6789=function (v6790) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v6792="var ";
var v6793=v6792;
var v6794=v6790;
var v6795="=lglobal[";
var v6796=v6795;
var v6797=v6780;
var v6798=lglobal["js-escape-string"];
var v6799=v6798;
v6799=runJTramp(v6799);
if (typeof v6799 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6800=new JTramp(v6799, [runJTramp(v6797)]);
var v6801=v6800;
var v6802="];\n";
var v6803=v6802;
var v6804=v6781;
var v6805=v6790;
var v6806=v6689;
var v6807=lglobal["compile-midir-to-js"];
var v6808=v6807;
v6808=runJTramp(v6808);
if (typeof v6808 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6809=new JTramp(v6808, [runJTramp(v6804),runJTramp(v6805),runJTramp(v6806)]);
var v6810=v6809;
var v6811=lglobal["++"];
var v6812=v6811;
v6812=runJTramp(v6812);
if (typeof v6812 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6813=new JTramp(v6812, [runJTramp(v6793),runJTramp(v6794),runJTramp(v6796),runJTramp(v6801),runJTramp(v6803),runJTramp(v6810)]);
return v6813;
};
var v6814=v6789;
v6814=runJTramp(v6814);
if (typeof v6814 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6815=new JTramp(v6814, [runJTramp(v6788)]);
return v6815;
};
var v6816=v6779;
var v6817=v6693;
var v6818=lglobal["tail"];
var v6819=v6818;
v6819=runJTramp(v6819);
if (typeof v6819 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6820=new JTramp(v6819, [runJTramp(v6817)]);
var v6821=v6820;
var v6822=lglobal["apply"];
var v6823=v6822;
v6823=runJTramp(v6823);
if (typeof v6823 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6824=new JTramp(v6823, [runJTramp(v6816),runJTramp(v6821)]);
v6778=v6824;
} else {
var v6825=v6693;
var v6826=lglobal["midir:enter?"];
var v6827=v6826;
v6827=runJTramp(v6827);
if (typeof v6827 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6828=new JTramp(v6827, [runJTramp(v6825)]);
var v6829;
if(runJTramp(v6828)) {
var v6830=function (v6831,v6832,v6833,v6834) {
if (arguments.length < 4) {
throw new Error("Expecting at least 4 arguments.");
}
if (arguments.length > 4) {
throw new Error("Expecting at most 4 arguments.");
}
var v6836=lglobal["make-js-var"];
var v6837=v6836;
var v6838=v6831;
var v6839=lglobal["map"];
var v6840=v6839;
v6840=runJTramp(v6840);
if (typeof v6840 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6841=new JTramp(v6840, [runJTramp(v6837),runJTramp(v6838)]);
var v6842=v6841;
var v6843=v6832;
var v6844=lglobal["make-js-var"];
var v6845=v6844;
v6845=runJTramp(v6845);
if (typeof v6845 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6846=new JTramp(v6845, [runJTramp(v6843)]);
var v6847=v6846;
var v6848=lglobal["make-js-var"];
var v6849=v6848;
var v6850=v6833;
var v6851=lglobal["map"];
var v6852=v6851;
v6852=runJTramp(v6852);
if (typeof v6852 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6853=new JTramp(v6852, [runJTramp(v6849),runJTramp(v6850)]);
var v6854=v6853;
var v6855=function (v6856,v6857,v6858) {
if (arguments.length < 3) {
throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
throw new Error("Expecting at most 3 arguments.");
}
var v6860="function (";
var v6861=v6860;
var v6862=",";
var v6863=v6862;
var v6864=v6856;
var v6865=lglobal["s:join"];
var v6866=v6865;
v6866=runJTramp(v6866);
if (typeof v6866 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6867=new JTramp(v6866, [runJTramp(v6863),runJTramp(v6864)]);
var v6868=v6867;
var v6869=") {\n";
var v6870=v6869;
var v6871=v6856;
var v6872=lglobal["length"];
var v6873=v6872;
v6873=runJTramp(v6873);
if (typeof v6873 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6874=new JTramp(v6873, [runJTramp(v6871)]);
var v6875=v6874;
var v6876=v6832;
var v6877=lglobal["null?"];
var v6878=v6877;
v6878=runJTramp(v6878);
if (typeof v6878 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6879=new JTramp(v6878, [runJTramp(v6876)]);
var v6880=v6879;
var v6881=lglobal["not"];
var v6882=v6881;
v6882=runJTramp(v6882);
if (typeof v6882 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6883=new JTramp(v6882, [runJTramp(v6880)]);
var v6884=v6883;
var v6885=lglobal["js-check-num-args"];
var v6886=v6885;
v6886=runJTramp(v6886);
if (typeof v6886 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6887=new JTramp(v6886, [runJTramp(v6875),runJTramp(v6884)]);
var v6888=v6887;
var v6889=v6832;
var v6890=lglobal["null?"];
var v6891=v6890;
v6891=runJTramp(v6891);
if (typeof v6891 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6892=new JTramp(v6891, [runJTramp(v6889)]);
var v6893;
if(runJTramp(v6892)) {
var v6894="";
v6893=v6894;
} else {
var v6895=v6856;
var v6896=lglobal["length"];
var v6897=v6896;
v6897=runJTramp(v6897);
if (typeof v6897 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6898=new JTramp(v6897, [runJTramp(v6895)]);
var v6899=v6898;
var v6900=v6857;
var v6901=lglobal["js-handleVarArg"];
var v6902=v6901;
v6902=runJTramp(v6902);
if (typeof v6902 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6903=new JTramp(v6902, [runJTramp(v6899),runJTramp(v6900)]);
v6893=v6903;
}
var v6904=v6893;
var v6905=lglobal["++"];
var v6906=v6905;
var v6907=function (v6908) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v6910="var ";
var v6911=v6910;
var v6912=v6908;
var v6913=";\n";
var v6914=v6913;
var v6915=lglobal["++"];
var v6916=v6915;
v6916=runJTramp(v6916);
if (typeof v6916 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6917=new JTramp(v6916, [runJTramp(v6911),runJTramp(v6912),runJTramp(v6914)]);
return v6917;
};
var v6918=v6907;
var v6919=v6858;
var v6920=lglobal["map"];
var v6921=v6920;
v6921=runJTramp(v6921);
if (typeof v6921 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6922=new JTramp(v6921, [runJTramp(v6918),runJTramp(v6919)]);
var v6923=v6922;
var v6924=lglobal["apply"];
var v6925=v6924;
v6925=runJTramp(v6925);
if (typeof v6925 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6926=new JTramp(v6925, [runJTramp(v6906),runJTramp(v6923)]);
var v6927=v6926;
var v6928=v6834;
var v6929="ERROR";
var v6930=v6929;
var v6931="ERROR";
var v6932=v6931;
var v6933=lglobal["compile-midir-to-js"];
var v6934=v6933;
v6934=runJTramp(v6934);
if (typeof v6934 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6935=new JTramp(v6934, [runJTramp(v6928),runJTramp(v6930),runJTramp(v6932)]);
var v6936=v6935;
var v6937="}";
var v6938=v6937;
var v6939=lglobal["++"];
var v6940=v6939;
v6940=runJTramp(v6940);
if (typeof v6940 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6941=new JTramp(v6940, [runJTramp(v6861),runJTramp(v6868),runJTramp(v6870),runJTramp(v6888),runJTramp(v6904),runJTramp(v6927),runJTramp(v6936),runJTramp(v6938)]);
return v6941;
};
var v6942=v6855;
v6942=runJTramp(v6942);
if (typeof v6942 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6943=new JTramp(v6942, [runJTramp(v6842),runJTramp(v6847),runJTramp(v6854)]);
return v6943;
};
var v6944=v6830;
var v6945=v6693;
var v6946=lglobal["tail"];
var v6947=v6946;
v6947=runJTramp(v6947);
if (typeof v6947 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6948=new JTramp(v6947, [runJTramp(v6945)]);
var v6949=v6948;
var v6950=lglobal["apply"];
var v6951=v6950;
v6951=runJTramp(v6951);
if (typeof v6951 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6952=new JTramp(v6951, [runJTramp(v6944),runJTramp(v6949)]);
v6829=v6952;
} else {
var v6953=v6693;
var v6954=lglobal["midir:return?"];
var v6955=v6954;
v6955=runJTramp(v6955);
if (typeof v6955 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6956=new JTramp(v6955, [runJTramp(v6953)]);
var v6957;
if(runJTramp(v6956)) {
var v6958=function () {
if (arguments.length > 0) {
throw new Error("Expecting at most 0 arguments.");
}
var v6960="return ";
var v6961=v6960;
var v6962=v6688;
var v6963=";\n";
var v6964=v6963;
var v6965=lglobal["++"];
var v6966=v6965;
v6966=runJTramp(v6966);
if (typeof v6966 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6967=new JTramp(v6966, [runJTramp(v6961),runJTramp(v6962),runJTramp(v6964)]);
return v6967;
};
var v6968=v6958;
var v6969=v6693;
var v6970=lglobal["tail"];
var v6971=v6970;
v6971=runJTramp(v6971);
if (typeof v6971 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6972=new JTramp(v6971, [runJTramp(v6969)]);
var v6973=v6972;
var v6974=lglobal["apply"];
var v6975=v6974;
v6975=runJTramp(v6975);
if (typeof v6975 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6976=new JTramp(v6975, [runJTramp(v6968),runJTramp(v6973)]);
v6957=v6976;
} else {
var v6977=v6693;
var v6978=lglobal["midir:bind?"];
var v6979=v6978;
v6979=runJTramp(v6979);
if (typeof v6979 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6980=new JTramp(v6979, [runJTramp(v6977)]);
var v6981;
if(runJTramp(v6980)) {
var v6982=function (v6983,v6984) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v6986="var ";
var v6987=v6986;
var v6988=v6983;
var v6989=lglobal["make-js-var"];
var v6990=v6989;
v6990=runJTramp(v6990);
if (typeof v6990 !== "function") {
throw new Error("Cannot call non-function.");
}
var v6991=new JTramp(v6990, [runJTramp(v6988)]);
var v6992=v6991;
var v6993="=";
var v6994=v6993;
var v6995=v6688;
var v6996=";\n";
var v6997=v6996;
var v6998=v6984;
var v6999="ERROR";
var v7000=v6999;
var v7001=v6689;
var v7002=lglobal["compile-midir-to-js"];
var v7003=v7002;
v7003=runJTramp(v7003);
if (typeof v7003 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7004=new JTramp(v7003, [runJTramp(v6998),runJTramp(v7000),runJTramp(v7001)]);
var v7005=v7004;
var v7006=lglobal["++"];
var v7007=v7006;
v7007=runJTramp(v7007);
if (typeof v7007 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7008=new JTramp(v7007, [runJTramp(v6987),runJTramp(v6992),runJTramp(v6994),runJTramp(v6995),runJTramp(v6997),runJTramp(v7005)]);
return v7008;
};
var v7009=v6982;
var v7010=v6693;
var v7011=lglobal["tail"];
var v7012=v7011;
v7012=runJTramp(v7012);
if (typeof v7012 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7013=new JTramp(v7012, [runJTramp(v7010)]);
var v7014=v7013;
var v7015=lglobal["apply"];
var v7016=v7015;
v7016=runJTramp(v7016);
if (typeof v7016 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7017=new JTramp(v7016, [runJTramp(v7009),runJTramp(v7014)]);
v6981=v7017;
} else {
var v7018=v6693;
var v7019=lglobal["midir:bind-drop?"];
var v7020=v7019;
v7020=runJTramp(v7020);
if (typeof v7020 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7021=new JTramp(v7020, [runJTramp(v7018)]);
var v7022;
if(runJTramp(v7021)) {
var v7023=function (v7024) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v7026=v6688;
var v7027="=runJTramp(";
var v7028=v7027;
var v7029=v6688;
var v7030=");\n";
var v7031=v7030;
var v7032=v7024;
var v7033="ERROR";
var v7034=v7033;
var v7035=v6689;
var v7036=lglobal["compile-midir-to-js"];
var v7037=v7036;
v7037=runJTramp(v7037);
if (typeof v7037 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7038=new JTramp(v7037, [runJTramp(v7032),runJTramp(v7034),runJTramp(v7035)]);
var v7039=v7038;
var v7040=lglobal["++"];
var v7041=v7040;
v7041=runJTramp(v7041);
if (typeof v7041 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7042=new JTramp(v7041, [runJTramp(v7026),runJTramp(v7028),runJTramp(v7029),runJTramp(v7031),runJTramp(v7039)]);
return v7042;
};
var v7043=v7023;
var v7044=v6693;
var v7045=lglobal["tail"];
var v7046=v7045;
v7046=runJTramp(v7046);
if (typeof v7046 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7047=new JTramp(v7046, [runJTramp(v7044)]);
var v7048=v7047;
var v7049=lglobal["apply"];
var v7050=v7049;
v7050=runJTramp(v7050);
if (typeof v7050 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7051=new JTramp(v7050, [runJTramp(v7043),runJTramp(v7048)]);
v7022=v7051;
} else {
var v7052=v6693;
var v7053=lglobal["midir:if?"];
var v7054=v7053;
v7054=runJTramp(v7054);
if (typeof v7054 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7055=new JTramp(v7054, [runJTramp(v7052)]);
var v7056;
if(runJTramp(v7055)) {
var v7057=function (v7058,v7059,v7060) {
if (arguments.length < 3) {
throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
throw new Error("Expecting at most 3 arguments.");
}
var v7062=lglobal["null"];
var v7063=v7062;
var v7064=lglobal["make-js-var"];
var v7065=v7064;
v7065=runJTramp(v7065);
if (typeof v7065 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7066=new JTramp(v7065, [runJTramp(v7063)]);
var v7067=v7066;
var v7068=function (v7069) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v7071="var ";
var v7072=v7071;
var v7073=v7069;
var v7074=";\n";
var v7075=v7074;
var v7076="if(runJTramp(";
var v7077=v7076;
var v7078=v6688;
var v7079=")) {\n";
var v7080=v7079;
var v7081=v7058;
var v7082="ERROR";
var v7083=v7082;
var v7084=v7069;
var v7085=lglobal["compile-midir-to-js"];
var v7086=v7085;
v7086=runJTramp(v7086);
if (typeof v7086 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7087=new JTramp(v7086, [runJTramp(v7081),runJTramp(v7083),runJTramp(v7084)]);
var v7088=v7087;
var v7089="} else {\n";
var v7090=v7089;
var v7091=v7059;
var v7092="ERROR";
var v7093=v7092;
var v7094=v7069;
var v7095=lglobal["compile-midir-to-js"];
var v7096=v7095;
v7096=runJTramp(v7096);
if (typeof v7096 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7097=new JTramp(v7096, [runJTramp(v7091),runJTramp(v7093),runJTramp(v7094)]);
var v7098=v7097;
var v7099="}\n";
var v7100=v7099;
var v7101=v7060;
var v7102=v7069;
var v7103=v6689;
var v7104=lglobal["compile-midir-to-js"];
var v7105=v7104;
v7105=runJTramp(v7105);
if (typeof v7105 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7106=new JTramp(v7105, [runJTramp(v7101),runJTramp(v7102),runJTramp(v7103)]);
var v7107=v7106;
var v7108=lglobal["++"];
var v7109=v7108;
v7109=runJTramp(v7109);
if (typeof v7109 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7110=new JTramp(v7109, [runJTramp(v7072),runJTramp(v7073),runJTramp(v7075),runJTramp(v7077),runJTramp(v7078),runJTramp(v7080),runJTramp(v7088),runJTramp(v7090),runJTramp(v7098),runJTramp(v7100),runJTramp(v7107)]);
return v7110;
};
var v7111=v7068;
v7111=runJTramp(v7111);
if (typeof v7111 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7112=new JTramp(v7111, [runJTramp(v7067)]);
return v7112;
};
var v7113=v7057;
var v7114=v6693;
var v7115=lglobal["tail"];
var v7116=v7115;
v7116=runJTramp(v7116);
if (typeof v7116 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7117=new JTramp(v7116, [runJTramp(v7114)]);
var v7118=v7117;
var v7119=lglobal["apply"];
var v7120=v7119;
v7120=runJTramp(v7120);
if (typeof v7120 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7121=new JTramp(v7120, [runJTramp(v7113),runJTramp(v7118)]);
v7056=v7121;
} else {
var v7122=v6693;
var v7123=lglobal["midir:leave?"];
var v7124=v7123;
v7124=runJTramp(v7124);
if (typeof v7124 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7125=new JTramp(v7124, [runJTramp(v7122)]);
var v7126;
if(runJTramp(v7125)) {
var v7127=function () {
if (arguments.length > 0) {
throw new Error("Expecting at most 0 arguments.");
}
var v7129=v6689;
var v7130="=";
var v7131=v7130;
var v7132=v6688;
var v7133=";\n";
var v7134=v7133;
var v7135=lglobal["++"];
var v7136=v7135;
v7136=runJTramp(v7136);
if (typeof v7136 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7137=new JTramp(v7136, [runJTramp(v7129),runJTramp(v7131),runJTramp(v7132),runJTramp(v7134)]);
return v7137;
};
var v7138=v7127;
var v7139=v6693;
var v7140=lglobal["tail"];
var v7141=v7140;
v7141=runJTramp(v7141);
if (typeof v7141 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7142=new JTramp(v7141, [runJTramp(v7139)]);
var v7143=v7142;
var v7144=lglobal["apply"];
var v7145=v7144;
v7145=runJTramp(v7145);
if (typeof v7145 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7146=new JTramp(v7145, [runJTramp(v7138),runJTramp(v7143)]);
v7126=v7146;
} else {
var v7147=v6693;
var v7148=lglobal["midir:funcall?"];
var v7149=v7148;
v7149=runJTramp(v7149);
if (typeof v7149 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7150=new JTramp(v7149, [runJTramp(v7147)]);
var v7151;
if(runJTramp(v7150)) {
var v7152=function (v7153,v7154,v7155) {
if (arguments.length < 3) {
throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
throw new Error("Expecting at most 3 arguments.");
}
var v7157=lglobal["null"];
var v7158=v7157;
var v7159=lglobal["make-js-var"];
var v7160=v7159;
v7160=runJTramp(v7160);
if (typeof v7160 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7161=new JTramp(v7160, [runJTramp(v7158)]);
var v7162=v7161;
var v7163=v7153;
var v7164=lglobal["make-js-var"];
var v7165=v7164;
v7165=runJTramp(v7165);
if (typeof v7165 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7166=new JTramp(v7165, [runJTramp(v7163)]);
var v7167=v7166;
var v7168=lglobal["make-js-var"];
var v7169=v7168;
var v7170=v7154;
var v7171=lglobal["map"];
var v7172=v7171;
v7172=runJTramp(v7172);
if (typeof v7172 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7173=new JTramp(v7172, [runJTramp(v7169),runJTramp(v7170)]);
var v7174=v7173;
var v7175=function (v7176,v7177,v7178) {
if (arguments.length < 3) {
throw new Error("Expecting at least 3 arguments.");
}
if (arguments.length > 3) {
throw new Error("Expecting at most 3 arguments.");
}
var v7180=v7177;
var v7181="=runJTramp(";
var v7182=v7181;
var v7183=v7177;
var v7184=");\n";
var v7185=v7184;
var v7186="if (typeof ";
var v7187=v7186;
var v7188=v7177;
var v7189=" !== \"function\") {\n";
var v7190=v7189;
var v7191="throw new Error(\"Cannot call non-function.\");\n";
var v7192=v7191;
var v7193="}\n";
var v7194=v7193;
var v7195="var ";
var v7196=v7195;
var v7197=v7176;
var v7198="=new JTramp(";
var v7199=v7198;
var v7200=v7177;
var v7201=", [";
var v7202=v7201;
var v7203=",";
var v7204=v7203;
var v7205=function (v7206) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v7208="runJTramp(";
var v7209=v7208;
var v7210=v7206;
var v7211=")";
var v7212=v7211;
var v7213=lglobal["++"];
var v7214=v7213;
v7214=runJTramp(v7214);
if (typeof v7214 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7215=new JTramp(v7214, [runJTramp(v7209),runJTramp(v7210),runJTramp(v7212)]);
return v7215;
};
var v7216=v7205;
var v7217=v7178;
var v7218=lglobal["map"];
var v7219=v7218;
v7219=runJTramp(v7219);
if (typeof v7219 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7220=new JTramp(v7219, [runJTramp(v7216),runJTramp(v7217)]);
var v7221=v7220;
var v7222=lglobal["s:join"];
var v7223=v7222;
v7223=runJTramp(v7223);
if (typeof v7223 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7224=new JTramp(v7223, [runJTramp(v7204),runJTramp(v7221)]);
var v7225=v7224;
var v7226="]);\n";
var v7227=v7226;
var v7228=v7155;
var v7229=v7176;
var v7230=v6689;
var v7231=lglobal["compile-midir-to-js"];
var v7232=v7231;
v7232=runJTramp(v7232);
if (typeof v7232 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7233=new JTramp(v7232, [runJTramp(v7228),runJTramp(v7229),runJTramp(v7230)]);
var v7234=v7233;
var v7235=lglobal["++"];
var v7236=v7235;
v7236=runJTramp(v7236);
if (typeof v7236 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7237=new JTramp(v7236, [runJTramp(v7180),runJTramp(v7182),runJTramp(v7183),runJTramp(v7185),runJTramp(v7187),runJTramp(v7188),runJTramp(v7190),runJTramp(v7192),runJTramp(v7194),runJTramp(v7196),runJTramp(v7197),runJTramp(v7199),runJTramp(v7200),runJTramp(v7202),runJTramp(v7225),runJTramp(v7227),runJTramp(v7234)]);
return v7237;
};
var v7238=v7175;
v7238=runJTramp(v7238);
if (typeof v7238 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7239=new JTramp(v7238, [runJTramp(v7162),runJTramp(v7167),runJTramp(v7174)]);
return v7239;
};
var v7240=v7152;
var v7241=v6693;
var v7242=lglobal["tail"];
var v7243=v7242;
v7243=runJTramp(v7243);
if (typeof v7243 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7244=new JTramp(v7243, [runJTramp(v7241)]);
var v7245=v7244;
var v7246=lglobal["apply"];
var v7247=v7246;
v7247=runJTramp(v7247);
if (typeof v7247 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7248=new JTramp(v7247, [runJTramp(v7240),runJTramp(v7245)]);
v7151=v7248;
} else {
var v7249=v6693;
var v7250=lglobal["midir:closure?"];
var v7251=v7250;
v7251=runJTramp(v7251);
if (typeof v7251 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7252=new JTramp(v7251, [runJTramp(v7249)]);
var v7253;
if(runJTramp(v7252)) {
var v7254=function (v7255,v7256) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v7258=lglobal["null"];
var v7259=v7258;
var v7260=lglobal["make-js-var"];
var v7261=v7260;
v7261=runJTramp(v7261);
if (typeof v7261 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7262=new JTramp(v7261, [runJTramp(v7259)]);
var v7263=v7262;
var v7264=function (v7265) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v7267="var ";
var v7268=v7267;
var v7269=v7265;
var v7270="=";
var v7271=v7270;
var v7272=v7255;
var v7273="ERROR";
var v7274=v7273;
var v7275="ERROR";
var v7276=v7275;
var v7277=lglobal["compile-midir-to-js"];
var v7278=v7277;
v7278=runJTramp(v7278);
if (typeof v7278 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7279=new JTramp(v7278, [runJTramp(v7272),runJTramp(v7274),runJTramp(v7276)]);
var v7280=v7279;
var v7281=";\n";
var v7282=v7281;
var v7283=v7256;
var v7284=v7265;
var v7285=v6689;
var v7286=lglobal["compile-midir-to-js"];
var v7287=v7286;
v7287=runJTramp(v7287);
if (typeof v7287 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7288=new JTramp(v7287, [runJTramp(v7283),runJTramp(v7284),runJTramp(v7285)]);
var v7289=v7288;
var v7290=lglobal["++"];
var v7291=v7290;
v7291=runJTramp(v7291);
if (typeof v7291 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7292=new JTramp(v7291, [runJTramp(v7268),runJTramp(v7269),runJTramp(v7271),runJTramp(v7280),runJTramp(v7282),runJTramp(v7289)]);
return v7292;
};
var v7293=v7264;
v7293=runJTramp(v7293);
if (typeof v7293 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7294=new JTramp(v7293, [runJTramp(v7263)]);
return v7294;
};
var v7295=v7254;
var v7296=v6693;
var v7297=lglobal["tail"];
var v7298=v7297;
v7298=runJTramp(v7298);
if (typeof v7298 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7299=new JTramp(v7298, [runJTramp(v7296)]);
var v7300=v7299;
var v7301=lglobal["apply"];
var v7302=v7301;
v7302=runJTramp(v7302);
if (typeof v7302 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7303=new JTramp(v7302, [runJTramp(v7295),runJTramp(v7300)]);
v7253=v7303;
} else {
var v7304=v6693;
var v7305=lglobal["midir:set!?"];
var v7306=v7305;
v7306=runJTramp(v7306);
if (typeof v7306 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7307=new JTramp(v7306, [runJTramp(v7304)]);
var v7308;
if(runJTramp(v7307)) {
var v7309=function (v7310,v7311) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v7313=lglobal["null"];
var v7314=v7313;
var v7315=lglobal["make-js-var"];
var v7316=v7315;
v7316=runJTramp(v7316);
if (typeof v7316 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7317=new JTramp(v7316, [runJTramp(v7314)]);
var v7318=v7317;
var v7319=function (v7320) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v7322="var ";
var v7323=v7322;
var v7324=v7320;
var v7325="=";
var v7326=v7325;
var v7327=v7310;
var v7328=lglobal["make-js-var"];
var v7329=v7328;
v7329=runJTramp(v7329);
if (typeof v7329 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7330=new JTramp(v7329, [runJTramp(v7327)]);
var v7331=v7330;
var v7332="=runJTramp(";
var v7333=v7332;
var v7334=v6688;
var v7335=");\n";
var v7336=v7335;
var v7337=v7311;
var v7338=v7320;
var v7339=v6689;
var v7340=lglobal["compile-midir-to-js"];
var v7341=v7340;
v7341=runJTramp(v7341);
if (typeof v7341 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7342=new JTramp(v7341, [runJTramp(v7337),runJTramp(v7338),runJTramp(v7339)]);
var v7343=v7342;
var v7344=lglobal["++"];
var v7345=v7344;
v7345=runJTramp(v7345);
if (typeof v7345 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7346=new JTramp(v7345, [runJTramp(v7323),runJTramp(v7324),runJTramp(v7326),runJTramp(v7331),runJTramp(v7333),runJTramp(v7334),runJTramp(v7336),runJTramp(v7343)]);
return v7346;
};
var v7347=v7319;
v7347=runJTramp(v7347);
if (typeof v7347 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7348=new JTramp(v7347, [runJTramp(v7318)]);
return v7348;
};
var v7349=v7309;
var v7350=v6693;
var v7351=lglobal["tail"];
var v7352=v7351;
v7352=runJTramp(v7352);
if (typeof v7352 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7353=new JTramp(v7352, [runJTramp(v7350)]);
var v7354=v7353;
var v7355=lglobal["apply"];
var v7356=v7355;
v7356=runJTramp(v7356);
if (typeof v7356 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7357=new JTramp(v7356, [runJTramp(v7349),runJTramp(v7354)]);
v7308=v7357;
} else {
var v7358=v6693;
var v7359=lglobal["midir:gset!?"];
var v7360=v7359;
v7360=runJTramp(v7360);
if (typeof v7360 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7361=new JTramp(v7360, [runJTramp(v7358)]);
var v7362;
if(runJTramp(v7361)) {
var v7363=function (v7364,v7365) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v7367=lglobal["null"];
var v7368=v7367;
var v7369=lglobal["make-js-var"];
var v7370=v7369;
v7370=runJTramp(v7370);
if (typeof v7370 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7371=new JTramp(v7370, [runJTramp(v7368)]);
var v7372=v7371;
var v7373=function (v7374) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v7376="var ";
var v7377=v7376;
var v7378=v7374;
var v7379="=";
var v7380=v7379;
var v7381="lglobal[";
var v7382=v7381;
var v7383=v7364;
var v7384=lglobal["js-escape-string"];
var v7385=v7384;
v7385=runJTramp(v7385);
if (typeof v7385 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7386=new JTramp(v7385, [runJTramp(v7383)]);
var v7387=v7386;
var v7388="]=runJTramp(";
var v7389=v7388;
var v7390=v6688;
var v7391=");\n";
var v7392=v7391;
var v7393=v7365;
var v7394=v7374;
var v7395=v6689;
var v7396=lglobal["compile-midir-to-js"];
var v7397=v7396;
v7397=runJTramp(v7397);
if (typeof v7397 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7398=new JTramp(v7397, [runJTramp(v7393),runJTramp(v7394),runJTramp(v7395)]);
var v7399=v7398;
var v7400=lglobal["++"];
var v7401=v7400;
v7401=runJTramp(v7401);
if (typeof v7401 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7402=new JTramp(v7401, [runJTramp(v7377),runJTramp(v7378),runJTramp(v7380),runJTramp(v7382),runJTramp(v7387),runJTramp(v7389),runJTramp(v7390),runJTramp(v7392),runJTramp(v7399)]);
return v7402;
};
var v7403=v7373;
v7403=runJTramp(v7403);
if (typeof v7403 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7404=new JTramp(v7403, [runJTramp(v7372)]);
return v7404;
};
var v7405=v7363;
var v7406=v6693;
var v7407=lglobal["tail"];
var v7408=v7407;
v7408=runJTramp(v7408);
if (typeof v7408 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7409=new JTramp(v7408, [runJTramp(v7406)]);
var v7410=v7409;
var v7411=lglobal["apply"];
var v7412=v7411;
v7412=runJTramp(v7412);
if (typeof v7412 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7413=new JTramp(v7412, [runJTramp(v7405),runJTramp(v7410)]);
v7362=v7413;
} else {
var v7414=v6693;
var v7415=lglobal["midir:ffi?"];
var v7416=v7415;
v7416=runJTramp(v7416);
if (typeof v7416 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7417=new JTramp(v7416, [runJTramp(v7414)]);
var v7418;
if(runJTramp(v7417)) {
var v7419=function (v7420) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v7422=lglobal["null"];
var v7423=v7422;
var v7424=lglobal["make-js-var"];
var v7425=v7424;
v7425=runJTramp(v7425);
if (typeof v7425 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7426=new JTramp(v7425, [runJTramp(v7423)]);
var v7427=v7426;
var v7428=function (v7429) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v7431="var ";
var v7432=v7431;
var v7433=v7429;
var v7434="=eval(runJTramp(";
var v7435=v7434;
var v7436=v6688;
var v7437="));\n";
var v7438=v7437;
var v7439=v7420;
var v7440=v7429;
var v7441=v6689;
var v7442=lglobal["compile-midir-to-js"];
var v7443=v7442;
v7443=runJTramp(v7443);
if (typeof v7443 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7444=new JTramp(v7443, [runJTramp(v7439),runJTramp(v7440),runJTramp(v7441)]);
var v7445=v7444;
var v7446=lglobal["++"];
var v7447=v7446;
v7447=runJTramp(v7447);
if (typeof v7447 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7448=new JTramp(v7447, [runJTramp(v7432),runJTramp(v7433),runJTramp(v7435),runJTramp(v7436),runJTramp(v7438),runJTramp(v7445)]);
return v7448;
};
var v7449=v7428;
v7449=runJTramp(v7449);
if (typeof v7449 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7450=new JTramp(v7449, [runJTramp(v7427)]);
return v7450;
};
var v7451=v7419;
var v7452=v6693;
var v7453=lglobal["tail"];
var v7454=v7453;
v7454=runJTramp(v7454);
if (typeof v7454 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7455=new JTramp(v7454, [runJTramp(v7452)]);
var v7456=v7455;
var v7457=lglobal["apply"];
var v7458=v7457;
v7458=runJTramp(v7458);
if (typeof v7458 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7459=new JTramp(v7458, [runJTramp(v7451),runJTramp(v7456)]);
v7418=v7459;
} else {
var v7460="Unknown midir ";
var v7461=v7460;
var v7462=v6687;
var v7463=lglobal["++"];
var v7464=v7463;
v7464=runJTramp(v7464);
if (typeof v7464 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7465=new JTramp(v7464, [runJTramp(v7461),runJTramp(v7462)]);
var v7466=v7465;
var v7467=lglobal["error"];
var v7468=v7467;
v7468=runJTramp(v7468);
if (typeof v7468 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7469=new JTramp(v7468, [runJTramp(v7466)]);
v7418=v7469;
}
v7362=v7418;
}
v7308=v7362;
}
v7253=v7308;
}
v7151=v7253;
}
v7126=v7151;
}
v7056=v7126;
}
v7022=v7056;
}
v6981=v7022;
}
v6957=v6981;
}
v6829=v6957;
}
v6778=v6829;
}
v6750=v6778;
}
v6699=v6750;
}
return v6699;
};
var v7470=v6692;
v7470=runJTramp(v7470);
if (typeof v7470 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7471=new JTramp(v7470, [runJTramp(v6691)]);
return v7471;
};
v6685=v6686;
lglobal["compile-midir-to-js"]=runJTramp(v6685);
})();
(function () {
var v7472;
var v7473=function (v7474,v7475) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v7477=0;
var v7478=v7477;
var v7479=v7474;
var v7480=lglobal["<"];
var v7481=v7480;
v7481=runJTramp(v7481);
if (typeof v7481 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7482=new JTramp(v7481, [runJTramp(v7478),runJTramp(v7479)]);
var v7483;
if(runJTramp(v7482)) {
var v7484="if (arguments.length < ";
var v7485=v7484;
var v7486=v7474;
var v7487=") {\n";
var v7488=v7487;
var v7489="throw new Error(\"Expecting at least ";
var v7490=v7489;
var v7491=v7474;
var v7492=" arguments.\");\n";
var v7493=v7492;
var v7494="}\n";
var v7495=v7494;
var v7496=lglobal["++"];
var v7497=v7496;
v7497=runJTramp(v7497);
if (typeof v7497 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7498=new JTramp(v7497, [runJTramp(v7485),runJTramp(v7486),runJTramp(v7488),runJTramp(v7490),runJTramp(v7491),runJTramp(v7493),runJTramp(v7495)]);
v7483=v7498;
} else {
var v7499="";
v7483=v7499;
}
var v7500=v7483;
var v7501;
if(runJTramp(v7475)) {
var v7502="";
v7501=v7502;
} else {
var v7503="if (arguments.length > ";
var v7504=v7503;
var v7505=v7474;
var v7506=") {\n";
var v7507=v7506;
var v7508="throw new Error(\"Expecting at most ";
var v7509=v7508;
var v7510=v7474;
var v7511=" arguments.\");\n";
var v7512=v7511;
var v7513="}\n";
var v7514=v7513;
var v7515=lglobal["++"];
var v7516=v7515;
v7516=runJTramp(v7516);
if (typeof v7516 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7517=new JTramp(v7516, [runJTramp(v7504),runJTramp(v7505),runJTramp(v7507),runJTramp(v7509),runJTramp(v7510),runJTramp(v7512),runJTramp(v7514)]);
v7501=v7517;
}
var v7518=v7501;
var v7519=lglobal["++"];
var v7520=v7519;
v7520=runJTramp(v7520);
if (typeof v7520 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7521=new JTramp(v7520, [runJTramp(v7500),runJTramp(v7518)]);
return v7521;
};
v7472=v7473;
lglobal["js-check-num-args"]=runJTramp(v7472);
})();
(function () {
var v7522;
var v7523=function (v7524,v7525) {
if (arguments.length < 2) {
throw new Error("Expecting at least 2 arguments.");
}
if (arguments.length > 2) {
throw new Error("Expecting at most 2 arguments.");
}
var v7527;
var v7528=lglobal["null"];
var v7529=v7528;
var v7530=lglobal["make-js-var"];
var v7531=v7530;
v7531=runJTramp(v7531);
if (typeof v7531 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7532=new JTramp(v7531, [runJTramp(v7529)]);
var v7533=v7527=runJTramp(v7532);
var v7534="var ";
var v7535=v7534;
var v7536=v7525;
var v7537=" = new Nil();\n";
var v7538=v7537;
var v7539="for (var ";
var v7540=v7539;
var v7541=v7527;
var v7542=" = arguments.length - 1; ";
var v7543=v7542;
var v7544=v7527;
var v7545=" >= ";
var v7546=v7545;
var v7547=v7524;
var v7548="; ";
var v7549=v7548;
var v7550=v7527;
var v7551="--) {\n";
var v7552=v7551;
var v7553="  ";
var v7554=v7553;
var v7555=v7525;
var v7556=" = new Cons(arguments[";
var v7557=v7556;
var v7558=v7527;
var v7559="], ";
var v7560=v7559;
var v7561=v7525;
var v7562=");\n";
var v7563=v7562;
var v7564="}\n";
var v7565=v7564;
var v7566=lglobal["++"];
var v7567=v7566;
v7567=runJTramp(v7567);
if (typeof v7567 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7568=new JTramp(v7567, [runJTramp(v7535),runJTramp(v7536),runJTramp(v7538),runJTramp(v7540),runJTramp(v7541),runJTramp(v7543),runJTramp(v7544),runJTramp(v7546),runJTramp(v7547),runJTramp(v7549),runJTramp(v7550),runJTramp(v7552),runJTramp(v7554),runJTramp(v7555),runJTramp(v7557),runJTramp(v7558),runJTramp(v7560),runJTramp(v7561),runJTramp(v7563),runJTramp(v7565)]);
return v7568;
};
v7522=v7523;
lglobal["js-handleVarArg"]=runJTramp(v7522);
})();
(function () {
var v7569;
var v7570=function (v7571) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v7573=v7571;
var v7574=lglobal["nil?"];
var v7575=v7574;
v7575=runJTramp(v7575);
if (typeof v7575 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7576=new JTramp(v7575, [runJTramp(v7573)]);
var v7577;
if(runJTramp(v7576)) {
var v7578="new Nil()";
v7577=v7578;
} else {
var v7579=v7571;
var v7580=lglobal["cons?"];
var v7581=v7580;
v7581=runJTramp(v7581);
if (typeof v7581 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7582=new JTramp(v7581, [runJTramp(v7579)]);
var v7583;
if(runJTramp(v7582)) {
var v7584="new Cons(";
var v7585=v7584;
var v7586=v7571;
var v7587=lglobal["head"];
var v7588=v7587;
v7588=runJTramp(v7588);
if (typeof v7588 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7589=new JTramp(v7588, [runJTramp(v7586)]);
var v7590=v7589;
var v7591=lglobal["compile-lit"];
var v7592=v7591;
v7592=runJTramp(v7592);
if (typeof v7592 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7593=new JTramp(v7592, [runJTramp(v7590)]);
var v7594=v7593;
var v7595=", ";
var v7596=v7595;
var v7597=v7571;
var v7598=lglobal["tail"];
var v7599=v7598;
v7599=runJTramp(v7599);
if (typeof v7599 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7600=new JTramp(v7599, [runJTramp(v7597)]);
var v7601=v7600;
var v7602=lglobal["compile-lit"];
var v7603=v7602;
v7603=runJTramp(v7603);
if (typeof v7603 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7604=new JTramp(v7603, [runJTramp(v7601)]);
var v7605=v7604;
var v7606=")";
var v7607=v7606;
var v7608=lglobal["++"];
var v7609=v7608;
v7609=runJTramp(v7609);
if (typeof v7609 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7610=new JTramp(v7609, [runJTramp(v7585),runJTramp(v7594),runJTramp(v7596),runJTramp(v7605),runJTramp(v7607)]);
v7583=v7610;
} else {
var v7611=v7571;
var v7612=lglobal["null?"];
var v7613=v7612;
v7613=runJTramp(v7613);
if (typeof v7613 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7614=new JTramp(v7613, [runJTramp(v7611)]);
var v7615;
if(runJTramp(v7614)) {
var v7616="null";
v7615=v7616;
} else {
var v7617=v7571;
var v7618=lglobal["number?"];
var v7619=v7618;
v7619=runJTramp(v7619);
if (typeof v7619 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7620=new JTramp(v7619, [runJTramp(v7617)]);
var v7621;
if(runJTramp(v7620)) {
var v7622=v7571;
var v7623=lglobal["js:toString"];
var v7624=v7623;
v7624=runJTramp(v7624);
if (typeof v7624 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7625=new JTramp(v7624, [runJTramp(v7622)]);
v7621=v7625;
} else {
var v7626=v7571;
var v7627=lglobal["string?"];
var v7628=v7627;
v7628=runJTramp(v7628);
if (typeof v7628 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7629=new JTramp(v7628, [runJTramp(v7626)]);
var v7630;
if(runJTramp(v7629)) {
var v7631=v7571;
var v7632=lglobal["js-escape-string"];
var v7633=v7632;
v7633=runJTramp(v7633);
if (typeof v7633 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7634=new JTramp(v7633, [runJTramp(v7631)]);
v7630=v7634;
} else {
var v7635=lglobal["otherwise"];
var v7636;
if(runJTramp(v7635)) {
var v7637="Cannot compile literal: ";
var v7638=v7637;
var v7639=v7571;
var v7640=lglobal["repr"];
var v7641=v7640;
v7641=runJTramp(v7641);
if (typeof v7641 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7642=new JTramp(v7641, [runJTramp(v7639)]);
var v7643=v7642;
var v7644=lglobal["++"];
var v7645=v7644;
v7645=runJTramp(v7645);
if (typeof v7645 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7646=new JTramp(v7645, [runJTramp(v7638),runJTramp(v7643)]);
var v7647=v7646;
var v7648=lglobal["error"];
var v7649=v7648;
v7649=runJTramp(v7649);
if (typeof v7649 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7650=new JTramp(v7649, [runJTramp(v7647)]);
v7636=v7650;
} else {
var v7651=null;
v7636=v7651;
}
v7630=v7636;
}
v7621=v7630;
}
v7615=v7621;
}
v7583=v7615;
}
v7577=v7583;
}
return v7577;
};
v7569=v7570;
lglobal["compile-lit"]=runJTramp(v7569);
})();
(function () {
var v7652;
var v7653=function (v7654) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v7656;
var v7657=function (v7658) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v7660=v7658;
var v7661=v7654;
var v7662=lglobal["s:length"];
var v7663=v7662;
v7663=runJTramp(v7663);
if (typeof v7663 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7664=new JTramp(v7663, [runJTramp(v7661)]);
var v7665=v7664;
var v7666=lglobal["<"];
var v7667=v7666;
v7667=runJTramp(v7667);
if (typeof v7667 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7668=new JTramp(v7667, [runJTramp(v7660),runJTramp(v7665)]);
var v7669;
if(runJTramp(v7668)) {
var v7670=v7654;
var v7671=v7658;
var v7672=lglobal["s:charAt"];
var v7673=v7672;
v7673=runJTramp(v7673);
if (typeof v7673 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7674=new JTramp(v7673, [runJTramp(v7670),runJTramp(v7671)]);
var v7675=v7674;
var v7676=function (v7677) {
if (arguments.length < 1) {
throw new Error("Expecting at least 1 arguments.");
}
if (arguments.length > 1) {
throw new Error("Expecting at most 1 arguments.");
}
var v7679=v7677;
var v7680="\"";
var v7681=v7680;
var v7682=lglobal["="];
var v7683=v7682;
v7683=runJTramp(v7683);
if (typeof v7683 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7684=new JTramp(v7683, [runJTramp(v7679),runJTramp(v7681)]);
var v7685;
if(runJTramp(v7684)) {
var v7686="\\\"";
v7685=v7686;
} else {
var v7687=v7677;
var v7688="\n";
var v7689=v7688;
var v7690=lglobal["="];
var v7691=v7690;
v7691=runJTramp(v7691);
if (typeof v7691 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7692=new JTramp(v7691, [runJTramp(v7687),runJTramp(v7689)]);
var v7693;
if(runJTramp(v7692)) {
var v7694="\\n";
v7693=v7694;
} else {
var v7695=v7677;
var v7696="\t";
var v7697=v7696;
var v7698=lglobal["="];
var v7699=v7698;
v7699=runJTramp(v7699);
if (typeof v7699 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7700=new JTramp(v7699, [runJTramp(v7695),runJTramp(v7697)]);
var v7701;
if(runJTramp(v7700)) {
var v7702="\\t";
v7701=v7702;
} else {
var v7703=v7677;
var v7704="\r";
var v7705=v7704;
var v7706=lglobal["="];
var v7707=v7706;
v7707=runJTramp(v7707);
if (typeof v7707 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7708=new JTramp(v7707, [runJTramp(v7703),runJTramp(v7705)]);
var v7709;
if(runJTramp(v7708)) {
var v7710="\\r";
v7709=v7710;
} else {
var v7711=v7677;
var v7712="\\";
var v7713=v7712;
var v7714=lglobal["="];
var v7715=v7714;
v7715=runJTramp(v7715);
if (typeof v7715 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7716=new JTramp(v7715, [runJTramp(v7711),runJTramp(v7713)]);
var v7717;
if(runJTramp(v7716)) {
var v7718="\\\\";
v7717=v7718;
} else {
var v7719=v7654;
var v7720=v7658;
var v7721=lglobal["s:charAt"];
var v7722=v7721;
v7722=runJTramp(v7722);
if (typeof v7722 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7723=new JTramp(v7722, [runJTramp(v7719),runJTramp(v7720)]);
v7717=v7723;
}
v7709=v7717;
}
v7701=v7709;
}
v7693=v7701;
}
v7685=v7693;
}
return v7685;
};
var v7724=v7676;
v7724=runJTramp(v7724);
if (typeof v7724 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7725=new JTramp(v7724, [runJTramp(v7675)]);
var v7726=v7725;
var v7727=v7658;
var v7728=1;
var v7729=v7728;
var v7730=lglobal["+"];
var v7731=v7730;
v7731=runJTramp(v7731);
if (typeof v7731 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7732=new JTramp(v7731, [runJTramp(v7727),runJTramp(v7729)]);
var v7733=v7732;
var v7734=v7656;
v7734=runJTramp(v7734);
if (typeof v7734 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7735=new JTramp(v7734, [runJTramp(v7733)]);
var v7736=v7735;
var v7737=lglobal["cons"];
var v7738=v7737;
v7738=runJTramp(v7738);
if (typeof v7738 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7739=new JTramp(v7738, [runJTramp(v7726),runJTramp(v7736)]);
v7669=v7739;
} else {
var v7740="\"";
var v7741=v7740;
var v7742=lglobal["list"];
var v7743=v7742;
v7743=runJTramp(v7743);
if (typeof v7743 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7744=new JTramp(v7743, [runJTramp(v7741)]);
v7669=v7744;
}
return v7669;
};
var v7745=v7656=runJTramp(v7657);
var v7746=lglobal["++"];
var v7747=v7746;
var v7748="\"";
var v7749=v7748;
var v7750=0;
var v7751=v7750;
var v7752=v7656;
v7752=runJTramp(v7752);
if (typeof v7752 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7753=new JTramp(v7752, [runJTramp(v7751)]);
var v7754=v7753;
var v7755=lglobal["cons"];
var v7756=v7755;
v7756=runJTramp(v7756);
if (typeof v7756 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7757=new JTramp(v7756, [runJTramp(v7749),runJTramp(v7754)]);
var v7758=v7757;
var v7759=lglobal["apply"];
var v7760=v7759;
v7760=runJTramp(v7760);
if (typeof v7760 !== "function") {
throw new Error("Cannot call non-function.");
}
var v7761=new JTramp(v7760, [runJTramp(v7747),runJTramp(v7758)]);
return v7761;
};
v7652=v7653;
lglobal["js-escape-string"]=runJTramp(v7652);
})();

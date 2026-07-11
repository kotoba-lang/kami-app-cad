goog.provide('expr.core');
expr.core.binops = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"<=","<=",-395636158),new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Keyword(null,"|","|",-352411576),new cljs.core.Keyword(null,"%","%",1704198600),new cljs.core.Keyword(null,"-","-",-2112348439),new cljs.core.Keyword(null,"&&","&&",1323453035),new cljs.core.Keyword(null,">>",">>",-277509267),new cljs.core.Keyword(null,"/","/",1282502798),new cljs.core.Keyword(null,">=",">=",-623615505),new cljs.core.Keyword(null,"+","+",1913524883),new cljs.core.Keyword(null,"!=","!=",-1841737356),new cljs.core.Keyword(null,"==","==",-1874649676),new cljs.core.Keyword(null,"<<","<<",1655720184),new cljs.core.Keyword(null,"&","&",509580121),new cljs.core.Keyword(null,"!","!",-311249637),new cljs.core.Keyword(null,"<","<",-646864291),new cljs.core.Keyword(null,"||","||",-207700737)],["<=","*",">","|","%","-","&&",">>","/",">=","+","!=","==","<<","&","!","<","||"]),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("^"),"^",cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("~"),"~"])], 0));
/**
 * Compile an EDN expression `e` to an infix source string under target conventions.
 */
expr.core.compile = (function expr$core$compile(var_args){
var G__21835 = arguments.length;
switch (G__21835) {
case 1:
return expr.core.compile.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return expr.core.compile.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(expr.core.compile.cljs$core$IFn$_invoke$arity$1 = (function (e){
return expr.core.compile.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,e);
}));

(expr.core.compile.cljs$core$IFn$_invoke$arity$2 = (function (p__21839,e){
var map__21841 = p__21839;
var map__21841__$1 = cljs.core.__destructure_map(map__21841);
var opts = map__21841__$1;
var ident = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21841__$1,new cljs.core.Keyword(null,"ident","ident",-742346),cljs.core.name);
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21841__$1,new cljs.core.Keyword(null,"num","num",1985240673),cljs.core.str);
var call = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21841__$1,new cljs.core.Keyword(null,"call","call",-519999866));
var special = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21841__$1,new cljs.core.Keyword(null,"special","special",-1125941630));
var call__$1 = (function (){var or__5002__auto__ = call;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (function (op,args){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((ident.cljs$core$IFn$_invoke$arity$1 ? ident.cljs$core$IFn$_invoke$arity$1(op) : ident.call(null, op))),"(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",args),")"].join('');
});
}
})();
var go = (function (p1__21833_SHARP_){
return expr.core.compile.cljs$core$IFn$_invoke$arity$2(opts,p1__21833_SHARP_);
});
if(typeof e === 'number'){
return (num.cljs$core$IFn$_invoke$arity$1 ? num.cljs$core$IFn$_invoke$arity$1(e) : num.call(null, e));
} else {
if(typeof e === 'string'){
return e;
} else {
if((((e instanceof cljs.core.Keyword)) || ((e instanceof cljs.core.Symbol)))){
return (ident.cljs$core$IFn$_invoke$arity$1 ? ident.cljs$core$IFn$_invoke$arity$1(e) : ident.call(null, e));
} else {
if(cljs.core.vector_QMARK_(e)){
var vec__21842 = e;
var seq__21843 = cljs.core.seq(vec__21842);
var first__21844 = cljs.core.first(seq__21843);
var seq__21843__$1 = cljs.core.next(seq__21843);
var op = first__21844;
var xs = seq__21843__$1;
var or__5002__auto__ = (cljs.core.truth_(special)?(special.cljs$core$IFn$_invoke$arity$3 ? special.cljs$core$IFn$_invoke$arity$3(op,xs,go) : special.call(null, op,xs,go)):null);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.empty_QMARK_(xs)){
return (ident.cljs$core$IFn$_invoke$arity$1 ? ident.cljs$core$IFn$_invoke$arity$1(op) : ident.call(null, op));
} else {
if(cljs.core.truth_((expr.core.binops.cljs$core$IFn$_invoke$arity$1 ? expr.core.binops.cljs$core$IFn$_invoke$arity$1(op) : expr.core.binops.call(null, op)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(xs))){
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((expr.core.binops.cljs$core$IFn$_invoke$arity$1 ? expr.core.binops.cljs$core$IFn$_invoke$arity$1(op) : expr.core.binops.call(null, op))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(go(cljs.core.first(xs))),")"].join('');
} else {
return ["(",clojure.string.join.cljs$core$IFn$_invoke$arity$2([" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((expr.core.binops.cljs$core$IFn$_invoke$arity$1 ? expr.core.binops.cljs$core$IFn$_invoke$arity$1(op) : expr.core.binops.call(null, op)))," "].join(''),cljs.core.map.cljs$core$IFn$_invoke$arity$2(go,xs)),")"].join('');
}
} else {
var G__21845 = op;
var G__21846 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(go,xs);
return (call__$1.cljs$core$IFn$_invoke$arity$2 ? call__$1.cljs$core$IFn$_invoke$arity$2(G__21845,G__21846) : call__$1.call(null, G__21845,G__21846));

}
}
}
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(e);

}
}
}
}
}));

(expr.core.compile.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=expr.core.js.map

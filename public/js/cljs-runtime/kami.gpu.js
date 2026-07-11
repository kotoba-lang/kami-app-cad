goog.provide('kami.gpu');
kami.gpu.caps_webgpu = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"backend","backend",-847489124),new cljs.core.Keyword(null,"webgpu","webgpu",-1928709720),new cljs.core.Keyword(null,"compute","compute",1555393130),true,new cljs.core.Keyword(null,"storage","storage",1867247511),true,new cljs.core.Keyword(null,"instancing","instancing",1383407992),true], null);
kami.gpu.caps_native = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"backend","backend",-847489124),new cljs.core.Keyword(null,"native","native",-613060878),new cljs.core.Keyword(null,"compute","compute",1555393130),true,new cljs.core.Keyword(null,"storage","storage",1867247511),true,new cljs.core.Keyword(null,"instancing","instancing",1383407992),true], null);
kami.gpu.caps_console = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"backend","backend",-847489124),new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.Keyword(null,"compute","compute",1555393130),true,new cljs.core.Keyword(null,"storage","storage",1867247511),true,new cljs.core.Keyword(null,"instancing","instancing",1383407992),true], null);
kami.gpu.caps_webgl2 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"backend","backend",-847489124),new cljs.core.Keyword(null,"webgl2","webgl2",111927467),new cljs.core.Keyword(null,"compute","compute",1555393130),false,new cljs.core.Keyword(null,"storage","storage",1867247511),false,new cljs.core.Keyword(null,"instancing","instancing",1383407992),true], null);
kami.gpu.tiers = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"webgpu","webgpu",-1928709720),kami.gpu.caps_webgpu,new cljs.core.Keyword(null,"native","native",-613060878),kami.gpu.caps_native,new cljs.core.Keyword(null,"console","console",1228072057),kami.gpu.caps_console,new cljs.core.Keyword(null,"webgl2","webgl2",111927467),kami.gpu.caps_webgl2], null);
/**
 * The capabilities a pass requires that the backend's caps don't provide.
 */
kami.gpu.missing_caps = (function kami$gpu$missing_caps(caps,pass){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__21732_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(caps,p1__21732_SHARP_) === true;
}),new cljs.core.Keyword(null,"requires","requires",-1201390927).cljs$core$IFn$_invoke$arity$1(pass)));
});
/**
 * Does the backend (caps) satisfy a pass's :requires? (no :requires ⇒ always runnable).
 */
kami.gpu.pass_runnable_QMARK_ = (function kami$gpu$pass_runnable_QMARK_(caps,pass){
return cljs.core.empty_QMARK_(kami.gpu.missing_caps(caps,pass));
});
/**
 * Filter a render graph's ordered :passes to those the backend can run on this `caps` tier.
 * Returns the graph with :passes narrowed, plus :caps and a :skipped report
 * [{:pass id :missing [cap…]} …] — so a WebGL2 backend transparently drops compute passes
 * (ray-tracing, gaussian-splat, strand) while the raster core renders identically everywhere.
 */
kami.gpu.resolve_graph = (function kami$gpu$resolve_graph(caps,graph){
var runnable = cljs.core.filterv((function (p1__21744_SHARP_){
return kami.gpu.pass_runnable_QMARK_(caps,p1__21744_SHARP_);
}),new cljs.core.Keyword(null,"passes","passes",-2141861841).cljs$core$IFn$_invoke$arity$1(graph));
var skipped = cljs.core.vec((function (){var iter__5480__auto__ = (function kami$gpu$resolve_graph_$_iter__21746(s__21747){
return (new cljs.core.LazySeq(null,(function (){
var s__21747__$1 = s__21747;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__21747__$1);
if(temp__5825__auto__){
var s__21747__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21747__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__21747__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__21749 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__21748 = (0);
while(true){
if((i__21748 < size__5479__auto__)){
var p = cljs.core._nth(c__5478__auto__,i__21748);
if((!(kami.gpu.pass_runnable_QMARK_(caps,p)))){
cljs.core.chunk_append(b__21749,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pass","pass",1574159993),(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"pipeline","pipeline",-401746042).cljs$core$IFn$_invoke$arity$1(p);
}
})(),new cljs.core.Keyword(null,"missing","missing",362507769),kami.gpu.missing_caps(caps,p)], null));

var G__21830 = (i__21748 + (1));
i__21748 = G__21830;
continue;
} else {
var G__21831 = (i__21748 + (1));
i__21748 = G__21831;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21749),kami$gpu$resolve_graph_$_iter__21746(cljs.core.chunk_rest(s__21747__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21749),null);
}
} else {
var p = cljs.core.first(s__21747__$2);
if((!(kami.gpu.pass_runnable_QMARK_(caps,p)))){
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pass","pass",1574159993),(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"pipeline","pipeline",-401746042).cljs$core$IFn$_invoke$arity$1(p);
}
})(),new cljs.core.Keyword(null,"missing","missing",362507769),kami.gpu.missing_caps(caps,p)], null),kami$gpu$resolve_graph_$_iter__21746(cljs.core.rest(s__21747__$2)));
} else {
var G__21847 = cljs.core.rest(s__21747__$2);
s__21747__$1 = G__21847;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"passes","passes",-2141861841).cljs$core$IFn$_invoke$arity$1(graph));
})());
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(graph,new cljs.core.Keyword(null,"passes","passes",-2141861841),runnable,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"caps","caps",-183763072),caps,new cljs.core.Keyword(null,"skipped","skipped",-1144887090),skipped], 0));
});
/**
 * resolve-graph by tier keyword (:webgpu/:webgl2/:native/:console).
 */
kami.gpu.resolve_for = (function kami$gpu$resolve_for(tier,graph){
return kami.gpu.resolve_graph(cljs.core.get.cljs$core$IFn$_invoke$arity$3(kami.gpu.tiers,tier,kami.gpu.caps_webgpu),graph);
});
/**
 * Build a caps map from a backend kind + detected device feature flags, e.g.
 * (caps-from-device :webgpu {:compute true :storage true}).
 */
kami.gpu.caps_from_device = (function kami$gpu$caps_from_device(backend,flags){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"backend","backend",-847489124),backend,new cljs.core.Keyword(null,"compute","compute",1555393130),false,new cljs.core.Keyword(null,"storage","storage",1867247511),false,new cljs.core.Keyword(null,"instancing","instancing",1383407992),true], null),flags], 0));
});
/**
 * Tag a pass with the capabilities it needs (e.g. a compute pass → (requires p :compute :storage)).
 */
kami.gpu.requires = (function kami$gpu$requires(var_args){
var args__5732__auto__ = [];
var len__5726__auto___21849 = arguments.length;
var i__5727__auto___21850 = (0);
while(true){
if((i__5727__auto___21850 < len__5726__auto___21849)){
args__5732__auto__.push((arguments[i__5727__auto___21850]));

var G__21852 = (i__5727__auto___21850 + (1));
i__5727__auto___21850 = G__21852;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return kami.gpu.requires.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(kami.gpu.requires.cljs$core$IFn$_invoke$arity$variadic = (function (pass,caps){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(pass,new cljs.core.Keyword(null,"requires","requires",-1201390927),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentVector.EMPTY),caps);
}));

(kami.gpu.requires.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(kami.gpu.requires.cljs$lang$applyTo = (function (seq21759){
var G__21760 = cljs.core.first(seq21759);
var seq21759__$1 = cljs.core.next(seq21759);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21760,seq21759__$1);
}));


//# sourceMappingURL=kami.gpu.js.map

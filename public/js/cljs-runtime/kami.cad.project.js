goog.provide('kami.cad.project');
kami.cad.project.current_version = (2);
kami.cad.project.document = (function kami$cad$project$document(p__21670){
var map__21671 = p__21670;
var map__21671__$1 = cljs.core.__destructure_map(map__21671);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21671__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21671__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var sections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21671__$1,new cljs.core.Keyword(null,"sections","sections",-886710106));
var tessellation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21671__$1,new cljs.core.Keyword(null,"tessellation","tessellation",-475035709));
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21671__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
var camera = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21671__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
var precision = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21671__$1,new cljs.core.Keyword(null,"precision","precision",-1175707478));
var interaction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21671__$1,new cljs.core.Keyword(null,"interaction","interaction",-2143888916));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("project","interaction","project/interaction",-1316543261),new cljs.core.Keyword("project","precision","project/precision",104568195),new cljs.core.Keyword("project","sections","project/sections",-598367411),new cljs.core.Keyword("kami","document","kami/document",-1333247185),new cljs.core.Keyword("kami","version","kami/version",428545552),new cljs.core.Keyword("project","camera","project/camera",-1501758414),new cljs.core.Keyword("project","selection","project/selection",746373586),new cljs.core.Keyword("project","name","project/name",2022968152),new cljs.core.Keyword("project","id","project/id",-791740645),new cljs.core.Keyword("project","tessellation","project/tessellation",1445164252)],[interaction,precision,sections,new cljs.core.Keyword(null,"cad-project","cad-project",-751265122),kami.cad.project.current_version,camera,selection,(function (){var or__5002__auto__ = name;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "Untitled CAD";
}
})(),(function (){var or__5002__auto__ = id;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "untitled-cad";
}
})(),tessellation]);
});
kami.cad.project.migrate = (function kami$cad$project$migrate(v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cad-project","cad-project",-751265122),new cljs.core.Keyword("kami","document","kami/document",-1333247185).cljs$core$IFn$_invoke$arity$1(v))){
var G__21675 = new cljs.core.Keyword("kami","version","kami/version",428545552).cljs$core$IFn$_invoke$arity$1(v);
switch (G__21675) {
case (2):
return v;

break;
case (1):
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(v,new cljs.core.Keyword("kami","version","kami/version",428545552),(2),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("project","precision","project/precision",104568195),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"snap","snap",-51714904),0.1,new cljs.core.Keyword(null,"sketch-width","sketch-width",-311747121),4.0], null),new cljs.core.Keyword("project","interaction","project/interaction",-1316543261),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"rhino","rhino",1962118035)], null)], 0)),new cljs.core.Keyword("project","version","project/version",132630599));

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unsupported CAD project version",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"version","version",425292698),new cljs.core.Keyword("kami","version","kami/version",428545552).cljs$core$IFn$_invoke$arity$1(v)], null));

}
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.vector_QMARK_(v);
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core.seq(v);
if(and__5000__auto____$1){
return new cljs.core.Keyword("cad","control-points","cad/control-points",-232410747).cljs$core$IFn$_invoke$arity$1(cljs.core.first(v));
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
return kami.cad.project.document(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"sections","sections",-886710106),v,new cljs.core.Keyword(null,"tessellation","tessellation",-475035709),(16),new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"section","section",-300141526),(0),new cljs.core.Keyword(null,"point","point",1813198264),(1)], null),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"azimuth","azimuth",-165971535),0.7,new cljs.core.Keyword(null,"elevation","elevation",-1609348796),0.45], null),new cljs.core.Keyword(null,"precision","precision",-1175707478),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"snap","snap",-51714904),0.1,new cljs.core.Keyword(null,"sketch-width","sketch-width",-311747121),4.0], null),new cljs.core.Keyword(null,"interaction","interaction",-2143888916),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"rhino","rhino",1962118035)], null)], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Not a CAD project",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null));

}
}
});
kami.cad.project.valid_QMARK_ = (function kami$cad$project$valid_QMARK_(p){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cad-project","cad-project",-751265122),new cljs.core.Keyword("kami","document","kami/document",-1333247185).cljs$core$IFn$_invoke$arity$1(p))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kami.cad.project.current_version,new cljs.core.Keyword("kami","version","kami/version",428545552).cljs$core$IFn$_invoke$arity$1(p))) && (((typeof new cljs.core.Keyword("project","id","project/id",-791740645).cljs$core$IFn$_invoke$arity$1(p) === 'string') && (((typeof new cljs.core.Keyword("project","name","project/name",2022968152).cljs$core$IFn$_invoke$arity$1(p) === 'string') && (((cljs.core.every_QMARK_((function (p1__21682_SHARP_){
return ((cljs.core.seq(new cljs.core.Keyword("cad","control-points","cad/control-points",-232410747).cljs$core$IFn$_invoke$arity$1(p1__21682_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(new cljs.core.Keyword("cad","control-points","cad/control-points",-232410747).cljs$core$IFn$_invoke$arity$1(p1__21682_SHARP_)),cljs.core.count(new cljs.core.Keyword("cad","weights","cad/weights",-1097462547).cljs$core$IFn$_invoke$arity$1(p1__21682_SHARP_)))));
}),new cljs.core.Keyword("project","sections","project/sections",-598367411).cljs$core$IFn$_invoke$arity$1(p))) && (((cljs.core.pos_int_QMARK_(new cljs.core.Keyword("project","tessellation","project/tessellation",1445164252).cljs$core$IFn$_invoke$arity$1(p))) && (((cljs.core.map_QMARK_(new cljs.core.Keyword("project","selection","project/selection",746373586).cljs$core$IFn$_invoke$arity$1(p))) && (((cljs.core.map_QMARK_(new cljs.core.Keyword("project","camera","project/camera",-1501758414).cljs$core$IFn$_invoke$arity$1(p))) && (((cljs.core.map_QMARK_(new cljs.core.Keyword("project","precision","project/precision",104568195).cljs$core$IFn$_invoke$arity$1(p))) && (cljs.core.map_QMARK_(new cljs.core.Keyword("project","interaction","project/interaction",-1316543261).cljs$core$IFn$_invoke$arity$1(p))))))))))))))))))));
});
kami.cad.project.open = (function kami$cad$project$open(v){
var p = kami.cad.project.migrate(v);
if(kami.cad.project.valid_QMARK_(p)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid CAD project",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"project","project",1124394579),p], null));
}

return p;
});

//# sourceMappingURL=kami.cad.project.js.map

goog.provide('kami.cad.app');
kami.cad.app.sections = (function kami$cad$app$sections(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kami.cad.curve(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-2),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0),(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null)),kami.cad.curve(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-2),(0),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0),(2)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null))], null);
});
if((typeof kami !== 'undefined') && (typeof kami.cad !== 'undefined') && (typeof kami.cad.app !== 'undefined') && (typeof kami.cad.app.state !== 'undefined')){
} else {
kami.cad.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"project-name","project-name",1486861539),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),new cljs.core.Keyword(null,"future","future",1877842724),new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.Keyword(null,"revision","revision",-1350113114),new cljs.core.Keyword(null,"snap","snap",-51714904),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"segments","segments",1937535949),new cljs.core.Keyword(null,"sketch-width","sketch-width",-311747121),new cljs.core.Keyword(null,"azimuth","azimuth",-165971535),new cljs.core.Keyword(null,"selected-section","selected-section",-1724195435),new cljs.core.Keyword(null,"last-command","last-command",1278161685),new cljs.core.Keyword(null,"selected-point","selected-point",728560533),new cljs.core.Keyword(null,"save-status","save-status",-2046612873),new cljs.core.Keyword(null,"command-status","command-status",1471755801),new cljs.core.Keyword(null,"project-id","project-id",206449307),new cljs.core.Keyword(null,"profile","profile",-545963874)],["Untitled CAD",0.45,cljs.core.PersistentVector.EMPTY,kami.cad.app.sections(),(0),0.1,cljs.core.PersistentVector.EMPTY,(16),4.0,0.7,(0),null,(1),new cljs.core.Keyword(null,"clean","clean",41534079),"Ready","untitled-cad",new cljs.core.Keyword(null,"rhino","rhino",1962118035)]));
}
if((typeof kami !== 'undefined') && (typeof kami.cad !== 'undefined') && (typeof kami.cad.app !== 'undefined') && (typeof kami.cad.app.viewport !== 'undefined')){
} else {
kami.cad.app.viewport = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
kami.cad.app.mesh = (function kami$cad$app$mesh(){
return kami.cad.loft_mesh(kami.cad.loft(new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.cad.app.state)),new cljs.core.Keyword(null,"segments","segments",1937535949).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.cad.app.state))));
});
kami.cad.app.upload_BANG_ = (function kami$cad$app$upload_BANG_(){
var temp__5825__auto__ = cljs.core.deref(kami.cad.app.viewport);
if(cljs.core.truth_(temp__5825__auto__)){
var v = temp__5825__auto__;
var m = kami.cad.app.mesh();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.cad.app.viewport,cljs.core.assoc,new cljs.core.Keyword(null,"buffers","buffers",471409492),kami.webgpu.mesh.upload_mesh_BANG_(new cljs.core.Keyword(null,"mesh-context","mesh-context",832369712).cljs$core$IFn$_invoke$arity$1(v),m));

(document.getElementById("stats").textContent = ["2 sections \u00B7 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(m)))," vertices \u00B7 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.count(new cljs.core.Keyword(null,"indices","indices",-1218138343).cljs$core$IFn$_invoke$arity$1(m)) / (3)))," triangles"].join(''));

return (document.getElementById("debug-state").textContent = JSON.stringify(cljs.core.clj__GT_js(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"commandStatus","commandStatus",-1181461152),new cljs.core.Keyword(null,"controlPoints","controlPoints",498186433),new cljs.core.Keyword(null,"projectVersion","projectVersion",412999009),new cljs.core.Keyword(null,"sectionWidth","sectionWidth",-825489371),new cljs.core.Keyword(null,"revision","revision",-1350113114),new cljs.core.Keyword(null,"saveStatus","saveStatus",-284043285),new cljs.core.Keyword(null,"segments","segments",1937535949),new cljs.core.Keyword(null,"lastCommand","lastCommand",1775093077),new cljs.core.Keyword(null,"profile","profile",-545963874)],[new cljs.core.Keyword(null,"command-status","command-status",1471755801).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.cad.app.state)),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cad","control-points","cad/control-points",-232410747),new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.cad.app.state))),kami.cad.project.current_version,(cljs.core.first(cljs.core.last(new cljs.core.Keyword("cad","control-points","cad/control-points",-232410747).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.cad.app.state)))))) - cljs.core.first(cljs.core.first(new cljs.core.Keyword("cad","control-points","cad/control-points",-232410747).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.cad.app.state))))))),new cljs.core.Keyword(null,"revision","revision",-1350113114).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.cad.app.state)),cljs.core.name(new cljs.core.Keyword(null,"save-status","save-status",-2046612873).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.cad.app.state))),new cljs.core.Keyword(null,"segments","segments",1937535949).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.cad.app.state)),new cljs.core.Keyword(null,"last-command","last-command",1278161685).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.cad.app.state)),cljs.core.name(new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.cad.app.state)))]))));
} else {
return null;
}
});
kami.cad.app.commit_BANG_ = (function kami$cad$app$commit_BANG_(sections){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(kami.cad.app.state,(function (s){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update.cljs$core$IFn$_invoke$arity$4(s,new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.conj,new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(s)),new cljs.core.Keyword(null,"sections","sections",-886710106),sections,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"future","future",1877842724),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"save-status","save-status",-2046612873),new cljs.core.Keyword(null,"dirty","dirty",729553281)], 0)),new cljs.core.Keyword(null,"revision","revision",-1350113114),cljs.core.inc);
}));

return kami.cad.app.upload_BANG_();
});
kami.cad.app.draw_BANG_ = (function kami$cad$app$draw_BANG_(){
var temp__5825__auto___22951 = cljs.core.deref(kami.cad.app.viewport);
if(cljs.core.truth_(temp__5825__auto___22951)){
var map__22829_22952 = temp__5825__auto___22951;
var map__22829_22953__$1 = cljs.core.__destructure_map(map__22829_22952);
var v_22954 = map__22829_22953__$1;
var buffers_22955 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22829_22953__$1,new cljs.core.Keyword(null,"buffers","buffers",471409492));
if(cljs.core.truth_(buffers_22955)){
var map__22833_22956 = cljs.core.deref(kami.cad.app.state);
var map__22833_22957__$1 = cljs.core.__destructure_map(map__22833_22956);
var azimuth_22958 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22833_22957__$1,new cljs.core.Keyword(null,"azimuth","azimuth",-165971535));
var elevation_22959 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22833_22957__$1,new cljs.core.Keyword(null,"elevation","elevation",-1609348796));
var d_22960 = (8);
var eye_22961 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((d_22960 * Math.cos(elevation_22959)) * Math.cos(azimuth_22958)),(d_22960 * Math.sin(elevation_22959)),((d_22960 * Math.cos(elevation_22959)) * Math.sin(azimuth_22958))], null);
kami.webgpu.mesh.render_frame_BANG_.cljs$core$IFn$_invoke$arity$5(v_22954,buffers_22955,eye_22961,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.45,0.7,1.0], null));
} else {
}
} else {
}

return requestAnimationFrame(kami.cad.app.draw_BANG_);
});
kami.cad.app.num = (function kami$cad$app$num(id){
return parseFloat(document.getElementById(id).value);
});
kami.cad.app.sync_point_fields_BANG_ = (function kami$cad$app$sync_point_fields_BANG_(){
var map__22848 = cljs.core.deref(kami.cad.app.state);
var map__22848__$1 = cljs.core.__destructure_map(map__22848);
var sections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22848__$1,new cljs.core.Keyword(null,"sections","sections",-886710106));
var selected_section = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22848__$1,new cljs.core.Keyword(null,"selected-section","selected-section",-1724195435));
var selected_point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22848__$1,new cljs.core.Keyword(null,"selected-point","selected-point",728560533));
var point = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(sections,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selected_section,new cljs.core.Keyword("cad","control-points","cad/control-points",-232410747),selected_point], null));
var weight = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(sections,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selected_section,new cljs.core.Keyword("cad","weights","cad/weights",-1097462547),selected_point], null));
var seq__22853_22962 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cp-x","cp-y","cp-z"], null),point));
var chunk__22854_22963 = null;
var count__22855_22964 = (0);
var i__22856_22965 = (0);
while(true){
if((i__22856_22965 < count__22855_22964)){
var vec__22863_22966 = chunk__22854_22963.cljs$core$IIndexed$_nth$arity$2(null, i__22856_22965);
var id_22967 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22863_22966,(0),null);
var value_22968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22863_22966,(1),null);
(document.getElementById(id_22967).value = value_22968);


var G__22970 = seq__22853_22962;
var G__22971 = chunk__22854_22963;
var G__22972 = count__22855_22964;
var G__22973 = (i__22856_22965 + (1));
seq__22853_22962 = G__22970;
chunk__22854_22963 = G__22971;
count__22855_22964 = G__22972;
i__22856_22965 = G__22973;
continue;
} else {
var temp__5825__auto___22974 = cljs.core.seq(seq__22853_22962);
if(temp__5825__auto___22974){
var seq__22853_22975__$1 = temp__5825__auto___22974;
if(cljs.core.chunked_seq_QMARK_(seq__22853_22975__$1)){
var c__5525__auto___22977 = cljs.core.chunk_first(seq__22853_22975__$1);
var G__22978 = cljs.core.chunk_rest(seq__22853_22975__$1);
var G__22979 = c__5525__auto___22977;
var G__22980 = cljs.core.count(c__5525__auto___22977);
var G__22981 = (0);
seq__22853_22962 = G__22978;
chunk__22854_22963 = G__22979;
count__22855_22964 = G__22980;
i__22856_22965 = G__22981;
continue;
} else {
var vec__22867_22982 = cljs.core.first(seq__22853_22975__$1);
var id_22983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22867_22982,(0),null);
var value_22984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22867_22982,(1),null);
(document.getElementById(id_22983).value = value_22984);


var G__22985 = cljs.core.next(seq__22853_22975__$1);
var G__22986 = null;
var G__22987 = (0);
var G__22988 = (0);
seq__22853_22962 = G__22985;
chunk__22854_22963 = G__22986;
count__22855_22964 = G__22987;
i__22856_22965 = G__22988;
continue;
}
} else {
}
}
break;
}

return (document.getElementById("weight").value = weight);
});
kami.cad.app.command_aliases = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rhino","rhino",1962118035),new cljs.core.PersistentArrayMap(null, 7, ["trim",new cljs.core.Keyword(null,"trim","trim",774319767),"fit",new cljs.core.Keyword(null,"fit","fit",869444807),"zoom extents",new cljs.core.Keyword(null,"fit","fit",869444807),"reset",new cljs.core.Keyword(null,"reset","reset",-800929946),"solvewidth",new cljs.core.Keyword(null,"solve-width","solve-width",1757345495),"undo",new cljs.core.Keyword(null,"undo","undo",-1818036302),"redo",new cljs.core.Keyword(null,"redo","redo",501190664)], null),new cljs.core.Keyword(null,"autocad","autocad",1581638853),new cljs.core.PersistentArrayMap(null, 8, ["tr",new cljs.core.Keyword(null,"trim","trim",774319767),"trim",new cljs.core.Keyword(null,"trim","trim",774319767),"z",new cljs.core.Keyword(null,"fit","fit",869444807),"ze",new cljs.core.Keyword(null,"fit","fit",869444807),"regen",new cljs.core.Keyword(null,"reset","reset",-800929946),"dim",new cljs.core.Keyword(null,"solve-width","solve-width",1757345495),"u",new cljs.core.Keyword(null,"undo","undo",-1818036302),"redo",new cljs.core.Keyword(null,"redo","redo",501190664)], null),new cljs.core.Keyword(null,"fusion","fusion",-1277329743),new cljs.core.PersistentArrayMap(null, 7, ["trim",new cljs.core.Keyword(null,"trim","trim",774319767),"fit",new cljs.core.Keyword(null,"fit","fit",869444807),"home",new cljs.core.Keyword(null,"fit","fit",869444807),"reset",new cljs.core.Keyword(null,"reset","reset",-800929946),"dimension",new cljs.core.Keyword(null,"solve-width","solve-width",1757345495),"undo",new cljs.core.Keyword(null,"undo","undo",-1818036302),"redo",new cljs.core.Keyword(null,"redo","redo",501190664)], null),new cljs.core.Keyword(null,"plasticity","plasticity",2010991899),new cljs.core.PersistentArrayMap(null, 8, ["t",new cljs.core.Keyword(null,"trim","trim",774319767),"trim",new cljs.core.Keyword(null,"trim","trim",774319767),"f",new cljs.core.Keyword(null,"fit","fit",869444807),"fit",new cljs.core.Keyword(null,"fit","fit",869444807),"reset",new cljs.core.Keyword(null,"reset","reset",-800929946),"d",new cljs.core.Keyword(null,"solve-width","solve-width",1757345495),"undo",new cljs.core.Keyword(null,"undo","undo",-1818036302),"redo",new cljs.core.Keyword(null,"redo","redo",501190664)], null)], null);
kami.cad.app.run_command_BANG_ = (function kami$cad$app$run_command_BANG_(text){
var normalized = text.trim().toLowerCase();
var command = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(kami.cad.app.command_aliases,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.cad.app.state)),normalized], null));
var button_id = (function (){var fexpr__22870 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"trim","trim",774319767),"trim",new cljs.core.Keyword(null,"fit","fit",869444807),"fit",new cljs.core.Keyword(null,"reset","reset",-800929946),"reset",new cljs.core.Keyword(null,"solve-width","solve-width",1757345495),"solve-width",new cljs.core.Keyword(null,"undo","undo",-1818036302),"undo",new cljs.core.Keyword(null,"redo","redo",501190664),"redo"], null);
return (fexpr__22870.cljs$core$IFn$_invoke$arity$1 ? fexpr__22870.cljs$core$IFn$_invoke$arity$1(command) : fexpr__22870.call(null, command));
})();
if(cljs.core.truth_(button_id)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.cad.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"last-command","last-command",1278161685),normalized,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"command-status","command-status",1471755801),["Executed ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(normalized)].join('')], 0));

document.getElementById(button_id).click();
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.cad.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"command-status","command-status",1471755801),["Unknown command: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(normalized)].join(''));
}

(document.getElementById("command-status").textContent = new cljs.core.Keyword(null,"command-status","command-status",1471755801).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.cad.app.state)));

(document.getElementById("command").value = "");

return kami.cad.app.upload_BANG_();
});
kami.cad.app.editable_target_QMARK_ = (function kami$cad$app$editable_target_QMARK_(event){
var target = event.target;
var tag = (function (){var G__22872 = target;
var G__22872__$1 = (((G__22872 == null))?null:G__22872.tagName);
if((G__22872__$1 == null)){
return null;
} else {
return G__22872__$1.toLowerCase();
}
})();
var or__5002__auto__ = (function (){var fexpr__22873 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["select",null,"input",null,"textarea",null], null), null);
return (fexpr__22873.cljs$core$IFn$_invoke$arity$1 ? fexpr__22873.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__22873.call(null, tag));
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return target.isContentEditable;
}
});
kami.cad.app.storage_key = "kami.cad.project.v2";
kami.cad.app.backup_key = "kami.cad.project.backup";
kami.cad.app.project_document = (function kami$cad$app$project_document(){
var map__22877 = cljs.core.deref(kami.cad.app.state);
var map__22877__$1 = cljs.core.__destructure_map(map__22877);
var project_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22877__$1,new cljs.core.Keyword(null,"project-id","project-id",206449307));
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22877__$1,new cljs.core.Keyword(null,"profile","profile",-545963874));
var project_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22877__$1,new cljs.core.Keyword(null,"project-name","project-name",1486861539));
var elevation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22877__$1,new cljs.core.Keyword(null,"elevation","elevation",-1609348796));
var sections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22877__$1,new cljs.core.Keyword(null,"sections","sections",-886710106));
var snap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22877__$1,new cljs.core.Keyword(null,"snap","snap",-51714904));
var segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22877__$1,new cljs.core.Keyword(null,"segments","segments",1937535949));
var sketch_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22877__$1,new cljs.core.Keyword(null,"sketch-width","sketch-width",-311747121));
var azimuth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22877__$1,new cljs.core.Keyword(null,"azimuth","azimuth",-165971535));
var selected_point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22877__$1,new cljs.core.Keyword(null,"selected-point","selected-point",728560533));
var selected_section = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22877__$1,new cljs.core.Keyword(null,"selected-section","selected-section",-1724195435));
return kami.cad.project.document(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),project_id,new cljs.core.Keyword(null,"name","name",1843675177),project_name,new cljs.core.Keyword(null,"sections","sections",-886710106),sections,new cljs.core.Keyword(null,"tessellation","tessellation",-475035709),segments,new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"section","section",-300141526),selected_section,new cljs.core.Keyword(null,"point","point",1813198264),selected_point], null),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"azimuth","azimuth",-165971535),azimuth,new cljs.core.Keyword(null,"elevation","elevation",-1609348796),elevation], null),new cljs.core.Keyword(null,"precision","precision",-1175707478),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"snap","snap",-51714904),snap,new cljs.core.Keyword(null,"sketch-width","sketch-width",-311747121),sketch_width], null),new cljs.core.Keyword(null,"interaction","interaction",-2143888916),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"profile","profile",-545963874),profile], null)], null));
});
kami.cad.app.save_project_BANG_ = (function kami$cad$app$save_project_BANG_(){
var data = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([kami.cad.app.project_document()], 0));
var old = localStorage.getItem(kami.cad.app.storage_key);
if(cljs.core.truth_(old)){
localStorage.setItem(kami.cad.app.backup_key,old);
} else {
}

localStorage.setItem(kami.cad.app.storage_key,data);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.cad.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"save-status","save-status",-2046612873),new cljs.core.Keyword(null,"saved","saved",288760660));

return kami.cad.app.upload_BANG_();
});
kami.cad.app.apply_project_BANG_ = (function kami$cad$app$apply_project_BANG_(value){
var p = kami.cad.project.open(value);
var selection = new cljs.core.Keyword("project","selection","project/selection",746373586).cljs$core$IFn$_invoke$arity$1(p);
var camera = new cljs.core.Keyword("project","camera","project/camera",-1501758414).cljs$core$IFn$_invoke$arity$1(p);
var precision = new cljs.core.Keyword("project","precision","project/precision",104568195).cljs$core$IFn$_invoke$arity$1(p);
var interaction = new cljs.core.Keyword("project","interaction","project/interaction",-1316543261).cljs$core$IFn$_invoke$arity$1(p);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.cad.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"project-id","project-id",206449307),new cljs.core.Keyword("project","id","project/id",-791740645).cljs$core$IFn$_invoke$arity$1(p),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"project-name","project-name",1486861539),new cljs.core.Keyword("project","name","project/name",2022968152).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.Keyword("project","sections","project/sections",-598367411).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"segments","segments",1937535949),new cljs.core.Keyword("project","tessellation","project/tessellation",1445164252).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"selected-section","selected-section",-1724195435),new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(selection),new cljs.core.Keyword(null,"selected-point","selected-point",728560533),new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(selection),new cljs.core.Keyword(null,"azimuth","azimuth",-165971535),new cljs.core.Keyword(null,"azimuth","azimuth",-165971535).cljs$core$IFn$_invoke$arity$1(camera),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),new cljs.core.Keyword(null,"elevation","elevation",-1609348796).cljs$core$IFn$_invoke$arity$1(camera),new cljs.core.Keyword(null,"snap","snap",-51714904),new cljs.core.Keyword(null,"snap","snap",-51714904).cljs$core$IFn$_invoke$arity$1(precision),new cljs.core.Keyword(null,"sketch-width","sketch-width",-311747121),new cljs.core.Keyword(null,"sketch-width","sketch-width",-311747121).cljs$core$IFn$_invoke$arity$1(precision),new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$1(interaction),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"future","future",1877842724),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"save-status","save-status",-2046612873),new cljs.core.Keyword(null,"saved","saved",288760660)], 0));

var seq__22882_23006 = cljs.core.seq(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["segments",new cljs.core.Keyword("project","tessellation","project/tessellation",1445164252).cljs$core$IFn$_invoke$arity$1(p)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["section-index",new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(selection)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["point-index",new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(selection)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["snap",new cljs.core.Keyword(null,"snap","snap",-51714904).cljs$core$IFn$_invoke$arity$1(precision)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sketch-width",new cljs.core.Keyword(null,"sketch-width","sketch-width",-311747121).cljs$core$IFn$_invoke$arity$1(precision)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["profile",cljs.core.name(new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$1(interaction))], null)], null));
var chunk__22883_23007 = null;
var count__22884_23008 = (0);
var i__22885_23009 = (0);
while(true){
if((i__22885_23009 < count__22884_23008)){
var vec__22892_23010 = chunk__22883_23007.cljs$core$IIndexed$_nth$arity$2(null, i__22885_23009);
var id_23011 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22892_23010,(0),null);
var value_23012__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22892_23010,(1),null);
(document.getElementById(id_23011).value = value_23012__$1);


var G__23013 = seq__22882_23006;
var G__23014 = chunk__22883_23007;
var G__23015 = count__22884_23008;
var G__23016 = (i__22885_23009 + (1));
seq__22882_23006 = G__23013;
chunk__22883_23007 = G__23014;
count__22884_23008 = G__23015;
i__22885_23009 = G__23016;
continue;
} else {
var temp__5825__auto___23017 = cljs.core.seq(seq__22882_23006);
if(temp__5825__auto___23017){
var seq__22882_23019__$1 = temp__5825__auto___23017;
if(cljs.core.chunked_seq_QMARK_(seq__22882_23019__$1)){
var c__5525__auto___23020 = cljs.core.chunk_first(seq__22882_23019__$1);
var G__23021 = cljs.core.chunk_rest(seq__22882_23019__$1);
var G__23022 = c__5525__auto___23020;
var G__23023 = cljs.core.count(c__5525__auto___23020);
var G__23024 = (0);
seq__22882_23006 = G__23021;
chunk__22883_23007 = G__23022;
count__22884_23008 = G__23023;
i__22885_23009 = G__23024;
continue;
} else {
var vec__22895_23027 = cljs.core.first(seq__22882_23019__$1);
var id_23028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22895_23027,(0),null);
var value_23029__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22895_23027,(1),null);
(document.getElementById(id_23028).value = value_23029__$1);


var G__23031 = cljs.core.next(seq__22882_23019__$1);
var G__23032 = null;
var G__23033 = (0);
var G__23034 = (0);
seq__22882_23006 = G__23031;
chunk__22883_23007 = G__23032;
count__22884_23008 = G__23033;
i__22885_23009 = G__23034;
continue;
}
} else {
}
}
break;
}

kami.cad.app.sync_point_fields_BANG_();

return kami.cad.app.upload_BANG_();
});
kami.cad.app.load_project_BANG_ = (function kami$cad$app$load_project_BANG_(){
var temp__5825__auto__ = localStorage.getItem(kami.cad.app.storage_key);
if(cljs.core.truth_(temp__5825__auto__)){
var data = temp__5825__auto__;
try{return kami.cad.app.apply_project_BANG_(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(data));
}catch (e22898){var _ = e22898;
var temp__5825__auto____$1 = localStorage.getItem(kami.cad.app.backup_key);
if(cljs.core.truth_(temp__5825__auto____$1)){
var backup = temp__5825__auto____$1;
return kami.cad.app.apply_project_BANG_(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(backup));
} else {
return null;
}
}} else {
return null;
}
});
kami.cad.app.download_project_BANG_ = (function kami$cad$app$download_project_BANG_(){
var a = document.createElement("a");
var url = URL.createObjectURL((new Blob([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([kami.cad.app.project_document()], 0))],({"type": "application/edn"}))));
(a.href = url);

(a.download = "design.kami-cad.edn");

a.click();

return setTimeout((function (){
return URL.revokeObjectURL(url);
}),(0));
});
kami.cad.app.import_project_BANG_ = (function kami$cad$app$import_project_BANG_(event){
var temp__5825__auto__ = (event.target.files[(0)]);
if(cljs.core.truth_(temp__5825__auto__)){
var file = temp__5825__auto__;
return file.text().then((function (p1__22899_SHARP_){
return kami.cad.app.apply_project_BANG_(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(p1__22899_SHARP_));
}));
} else {
return null;
}
});
kami.cad.app.init_BANG_ = (function kami$cad$app$init_BANG_(){
var canvas = document.getElementById("gpu-canvas");
var drag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
kami.webgpu.mesh.init_canvas_BANG_(canvas).then((function (v){
cljs.core.reset_BANG_(kami.cad.app.viewport,v);

kami.cad.app.upload_BANG_();

(document.getElementById("gpu-status").textContent = "");

return kami.cad.app.draw_BANG_();
}));

document.getElementById("apply").addEventListener("click",(function (){
var inc = kami.cad.app.num("snap");
var p = kami.cad.snap_point(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kami.cad.app.num("cp-x"),kami.cad.app.num("cp-y"),kami.cad.app.num("cp-z")], null),inc);
var w = kami.cad.app.num("weight");
var map__22913 = cljs.core.deref(kami.cad.app.state);
var map__22913__$1 = cljs.core.__destructure_map(map__22913);
var sections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22913__$1,new cljs.core.Keyword(null,"sections","sections",-886710106));
var selected_section = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22913__$1,new cljs.core.Keyword(null,"selected-section","selected-section",-1724195435));
var selected_point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22913__$1,new cljs.core.Keyword(null,"selected-point","selected-point",728560533));
return kami.cad.app.commit_BANG_(cljs.core.update.cljs$core$IFn$_invoke$arity$3(sections,selected_section,(function (section){
return kami.cad.set_weight(kami.cad.move_control_point(section,selected_point,p),selected_point,w);
})));
}));

var seq__22917_23045 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["section-index","point-index"], null));
var chunk__22918_23046 = null;
var count__22919_23047 = (0);
var i__22920_23048 = (0);
while(true){
if((i__22920_23048 < count__22919_23047)){
var id_23050 = chunk__22918_23046.cljs$core$IIndexed$_nth$arity$2(null, i__22920_23048);
document.getElementById(id_23050).addEventListener("change",((function (seq__22917_23045,chunk__22918_23046,count__22919_23047,i__22920_23048,id_23050,canvas,drag){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.cad.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-section","selected-section",-1724195435),parseInt(document.getElementById("section-index").value),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"selected-point","selected-point",728560533),parseInt(document.getElementById("point-index").value)], 0));

return kami.cad.app.sync_point_fields_BANG_();
});})(seq__22917_23045,chunk__22918_23046,count__22919_23047,i__22920_23048,id_23050,canvas,drag))
);


var G__23054 = seq__22917_23045;
var G__23055 = chunk__22918_23046;
var G__23056 = count__22919_23047;
var G__23057 = (i__22920_23048 + (1));
seq__22917_23045 = G__23054;
chunk__22918_23046 = G__23055;
count__22919_23047 = G__23056;
i__22920_23048 = G__23057;
continue;
} else {
var temp__5825__auto___23058 = cljs.core.seq(seq__22917_23045);
if(temp__5825__auto___23058){
var seq__22917_23059__$1 = temp__5825__auto___23058;
if(cljs.core.chunked_seq_QMARK_(seq__22917_23059__$1)){
var c__5525__auto___23060 = cljs.core.chunk_first(seq__22917_23059__$1);
var G__23061 = cljs.core.chunk_rest(seq__22917_23059__$1);
var G__23062 = c__5525__auto___23060;
var G__23063 = cljs.core.count(c__5525__auto___23060);
var G__23064 = (0);
seq__22917_23045 = G__23061;
chunk__22918_23046 = G__23062;
count__22919_23047 = G__23063;
i__22920_23048 = G__23064;
continue;
} else {
var id_23065 = cljs.core.first(seq__22917_23059__$1);
document.getElementById(id_23065).addEventListener("change",((function (seq__22917_23045,chunk__22918_23046,count__22919_23047,i__22920_23048,id_23065,seq__22917_23059__$1,temp__5825__auto___23058,canvas,drag){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.cad.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-section","selected-section",-1724195435),parseInt(document.getElementById("section-index").value),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"selected-point","selected-point",728560533),parseInt(document.getElementById("point-index").value)], 0));

return kami.cad.app.sync_point_fields_BANG_();
});})(seq__22917_23045,chunk__22918_23046,count__22919_23047,i__22920_23048,id_23065,seq__22917_23059__$1,temp__5825__auto___23058,canvas,drag))
);


var G__23066 = cljs.core.next(seq__22917_23059__$1);
var G__23067 = null;
var G__23068 = (0);
var G__23069 = (0);
seq__22917_23045 = G__23066;
chunk__22918_23046 = G__23067;
count__22919_23047 = G__23068;
i__22920_23048 = G__23069;
continue;
}
} else {
}
}
break;
}

document.getElementById("trim").addEventListener("click",(function (){
var t0 = kami.cad.app.num("trim-start");
var t1 = kami.cad.app.num("trim-end");
kami.cad.app.commit_BANG_(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (section){
return kami.cad.trim_curve(section,t0,t1);
}),new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.cad.app.state))));

return kami.cad.app.sync_point_fields_BANG_();
}));

document.getElementById("solve-width").addEventListener("click",(function (){
var width = (function (){var x__5087__auto__ = 0.1;
var y__5088__auto__ = kami.cad.app.num("sketch-width");
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var half = (width / (2));
var sketch = kami.cad.sketch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kami.cad.sketch_point.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"left","left",-399115937),(- half),(0),true),kami.cad.sketch_point.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"right","right",-452581833),(half + 0.35),0.2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kami.cad.sketch_line(new cljs.core.Keyword(null,"baseline","baseline",1151033280),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"right","right",-452581833))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kami.cad.horizontal(new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),new cljs.core.Keyword(null,"baseline","baseline",1151033280)),kami.cad.distance_constraint(new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"right","right",-452581833),width)], null));
var solved = kami.cad.solve_sketch.cljs$core$IFn$_invoke$arity$1(sketch);
var vec__22921 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(solved,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sketch","points","sketch/points",1639145553),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword("sketch.point","position","sketch.point/position",1194114310)], null));
var left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22921,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22921,(1),null);
var vec__22924 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(solved,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sketch","points","sketch/points",1639145553),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword("sketch.point","position","sketch.point/position",1194114310)], null));
var right = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22924,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22924,(1),null);
var sections = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (section){
return kami.cad.move_control_point(kami.cad.move_control_point(section,(0),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(section,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cad","control-points","cad/control-points",-232410747),(0)], null)),(0),left)),(2),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(section,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cad","control-points","cad/control-points",-232410747),(2)], null)),(0),right));
}),new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.cad.app.state)));
(document.getElementById("solver-status").textContent = (cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(solved,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sketch","solver","sketch/solver",-552453485),new cljs.core.Keyword(null,"converged?","converged?",1779059976)], null)))?"Fully constrained":"Constraint conflict"));

kami.cad.app.commit_BANG_(sections);

return kami.cad.app.sync_point_fields_BANG_();
}));

document.getElementById("reset").addEventListener("click",(function (){
kami.cad.app.commit_BANG_(kami.cad.app.sections());

return kami.cad.app.sync_point_fields_BANG_();
}));

document.getElementById("fit").addEventListener("click",(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.cad.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"azimuth","azimuth",-165971535),0.7,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"elevation","elevation",-1609348796),0.45], 0));
}));

document.getElementById("segments").addEventListener("input",(function (p1__22904_SHARP_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.cad.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"segments","segments",1937535949),parseInt(p1__22904_SHARP_.target.value),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"save-status","save-status",-2046612873),new cljs.core.Keyword(null,"dirty","dirty",729553281)], 0));

return kami.cad.app.upload_BANG_();
}));

document.getElementById("snap").addEventListener("change",(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.cad.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"snap","snap",-51714904),kami.cad.app.num("snap"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"save-status","save-status",-2046612873),new cljs.core.Keyword(null,"dirty","dirty",729553281)], 0));
}));

document.getElementById("sketch-width").addEventListener("change",(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.cad.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"sketch-width","sketch-width",-311747121),kami.cad.app.num("sketch-width"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"save-status","save-status",-2046612873),new cljs.core.Keyword(null,"dirty","dirty",729553281)], 0));
}));

document.getElementById("profile").addEventListener("change",(function (p1__22905_SHARP_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.cad.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"profile","profile",-545963874),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__22905_SHARP_.target.value));

(document.getElementById("profile-hint").textContent = (function (){var G__22931 = new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.cad.app.state));
var G__22931__$1 = (((G__22931 instanceof cljs.core.Keyword))?G__22931.fqn:null);
switch (G__22931__$1) {
case "autocad":
return "TR Trim \u00B7 Z/ZE Fit \u00B7 DIM Solve";

break;
case "fusion":
return "Trim \u00B7 Fit \u00B7 Dimension";

break;
case "plasticity":
return "T Trim \u00B7 F Fit \u00B7 D Dimension";

break;
default:
return "Trim \u00B7 Zoom Extents \u00B7 SolveWidth";

}
})());

return kami.cad.app.upload_BANG_();
}));

document.getElementById("command").addEventListener("keydown",(function (p1__22906_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",p1__22906_SHARP_.key)){
p1__22906_SHARP_.preventDefault();

return kami.cad.app.run_command_BANG_(p1__22906_SHARP_.target.value);
} else {
return null;
}
}));

window.addEventListener("keydown",(function (p1__22907_SHARP_){
if(((cljs.core.not(kami.cad.app.editable_target_QMARK_(p1__22907_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",p1__22907_SHARP_.key)))){
p1__22907_SHARP_.preventDefault();

return document.getElementById("command").focus();
} else {
return null;
}
}));

document.getElementById("undo").addEventListener("click",(function (){
var temp__5825__auto__ = cljs.core.peek(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.cad.app.state)));
if(cljs.core.truth_(temp__5825__auto__)){
var prev = temp__5825__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(kami.cad.app.state,(function (s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"sections","sections",-886710106),prev,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.pop(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(s)),new cljs.core.Keyword(null,"future","future",1877842724),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"future","future",1877842724).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(s))], 0));
}));

return kami.cad.app.upload_BANG_();
} else {
return null;
}
}));

document.getElementById("redo").addEventListener("click",(function (){
var temp__5825__auto__ = cljs.core.peek(new cljs.core.Keyword(null,"future","future",1877842724).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.cad.app.state)));
if(cljs.core.truth_(temp__5825__auto__)){
var next = temp__5825__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(kami.cad.app.state,(function (s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"sections","sections",-886710106),next,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"future","future",1877842724),cljs.core.pop(new cljs.core.Keyword(null,"future","future",1877842724).cljs$core$IFn$_invoke$arity$1(s)),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(s))], 0));
}));

return kami.cad.app.upload_BANG_();
} else {
return null;
}
}));

canvas.addEventListener("pointerdown",(function (p1__22908_SHARP_){
return cljs.core.reset_BANG_(drag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22908_SHARP_.clientX,p1__22908_SHARP_.clientY], null));
}));

window.addEventListener("pointerup",(function (){
return cljs.core.reset_BANG_(drag,null);
}));

window.addEventListener("pointermove",(function (e){
var temp__5825__auto__ = cljs.core.deref(drag);
if(cljs.core.truth_(temp__5825__auto__)){
var vec__22935 = temp__5825__auto__;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22935,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22935,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.cad.app.state,cljs.core.update,new cljs.core.Keyword(null,"azimuth","azimuth",-165971535),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0.008 * (e.clientX - x))], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.cad.app.state,cljs.core.update,new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(function (p1__22909_SHARP_){
var x__5087__auto__ = -1.2;
var y__5088__auto__ = (function (){var x__5090__auto__ = 1.2;
var y__5091__auto__ = (p1__22909_SHARP_ + (0.008 * (e.clientY - y)));
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
}));

return cljs.core.reset_BANG_(drag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null));
} else {
return null;
}
}));

document.getElementById("save-project").addEventListener("click",kami.cad.app.save_project_BANG_);

document.getElementById("load-project").addEventListener("click",kami.cad.app.load_project_BANG_);

document.getElementById("import").addEventListener("click",(function (){
return document.getElementById("import-file").click();
}));

document.getElementById("import-file").addEventListener("change",kami.cad.app.import_project_BANG_);

return document.getElementById("export").addEventListener("click",kami.cad.app.download_project_BANG_);
});
goog.exportSymbol('kami.cad.app.init_BANG_', kami.cad.app.init_BANG_);

//# sourceMappingURL=kami.cad.app.js.map

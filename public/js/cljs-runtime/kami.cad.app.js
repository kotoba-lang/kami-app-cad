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

(document.getElementById("stats").textContent = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.cad.app.state))))," sections \u00B7 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(m)))," vertices \u00B7 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.count(new cljs.core.Keyword(null,"indices","indices",-1218138343).cljs$core$IFn$_invoke$arity$1(m)) / (3)))," triangles"].join(''));

return (document.getElementById("debug-state").textContent = JSON.stringify(cljs.core.clj__GT_js(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"commandStatus","commandStatus",-1181461152),new cljs.core.Keyword(null,"controlPoints","controlPoints",498186433),new cljs.core.Keyword(null,"projectVersion","projectVersion",412999009),new cljs.core.Keyword(null,"sectionWidth","sectionWidth",-825489371),new cljs.core.Keyword(null,"revision","revision",-1350113114),new cljs.core.Keyword(null,"sectionCount","sectionCount",1139429926),new cljs.core.Keyword(null,"saveStatus","saveStatus",-284043285),new cljs.core.Keyword(null,"segments","segments",1937535949),new cljs.core.Keyword(null,"selectedSection","selectedSection",801478900),new cljs.core.Keyword(null,"lastCommand","lastCommand",1775093077),new cljs.core.Keyword(null,"profile","profile",-545963874)],[new cljs.core.Keyword(null,"command-status","command-status",1471755801).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.cad.app.state)),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cad","control-points","cad/control-points",-232410747),new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.cad.app.state))),kami.cad.project.current_version,(cljs.core.first(cljs.core.last(new cljs.core.Keyword("cad","control-points","cad/control-points",-232410747).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.cad.app.state)))))) - cljs.core.first(cljs.core.first(new cljs.core.Keyword("cad","control-points","cad/control-points",-232410747).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.cad.app.state))))))),new cljs.core.Keyword(null,"revision","revision",-1350113114).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.cad.app.state)),cljs.core.count(new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.cad.app.state))),cljs.core.name(new cljs.core.Keyword(null,"save-status","save-status",-2046612873).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.cad.app.state))),new cljs.core.Keyword(null,"segments","segments",1937535949).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.cad.app.state)),new cljs.core.Keyword(null,"selected-section","selected-section",-1724195435).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.cad.app.state)),new cljs.core.Keyword(null,"last-command","last-command",1278161685).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.cad.app.state)),cljs.core.name(new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.cad.app.state)))]))));
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
var temp__5825__auto___20063 = cljs.core.deref(kami.cad.app.viewport);
if(cljs.core.truth_(temp__5825__auto___20063)){
var map__19990_20064 = temp__5825__auto___20063;
var map__19990_20065__$1 = cljs.core.__destructure_map(map__19990_20064);
var v_20066 = map__19990_20065__$1;
var buffers_20067 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19990_20065__$1,new cljs.core.Keyword(null,"buffers","buffers",471409492));
if(cljs.core.truth_(buffers_20067)){
var map__19991_20068 = cljs.core.deref(kami.cad.app.state);
var map__19991_20069__$1 = cljs.core.__destructure_map(map__19991_20068);
var azimuth_20070 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19991_20069__$1,new cljs.core.Keyword(null,"azimuth","azimuth",-165971535));
var elevation_20071 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19991_20069__$1,new cljs.core.Keyword(null,"elevation","elevation",-1609348796));
var d_20072 = (8);
var eye_20073 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((d_20072 * Math.cos(elevation_20071)) * Math.cos(azimuth_20070)),(d_20072 * Math.sin(elevation_20071)),((d_20072 * Math.cos(elevation_20071)) * Math.sin(azimuth_20070))], null);
kami.webgpu.mesh.render_frame_BANG_.cljs$core$IFn$_invoke$arity$5(v_20066,buffers_20067,eye_20073,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.45,0.7,1.0], null));
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
var map__19992 = cljs.core.deref(kami.cad.app.state);
var map__19992__$1 = cljs.core.__destructure_map(map__19992);
var sections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19992__$1,new cljs.core.Keyword(null,"sections","sections",-886710106));
var selected_section = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19992__$1,new cljs.core.Keyword(null,"selected-section","selected-section",-1724195435));
var selected_point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19992__$1,new cljs.core.Keyword(null,"selected-point","selected-point",728560533));
var point = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(sections,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selected_section,new cljs.core.Keyword("cad","control-points","cad/control-points",-232410747),selected_point], null));
var weight = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(sections,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selected_section,new cljs.core.Keyword("cad","weights","cad/weights",-1097462547),selected_point], null));
var seq__19993_20074 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cp-x","cp-y","cp-z"], null),point));
var chunk__19994_20075 = null;
var count__19995_20076 = (0);
var i__19996_20077 = (0);
while(true){
if((i__19996_20077 < count__19995_20076)){
var vec__20003_20078 = chunk__19994_20075.cljs$core$IIndexed$_nth$arity$2(null, i__19996_20077);
var id_20079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20003_20078,(0),null);
var value_20080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20003_20078,(1),null);
(document.getElementById(id_20079).value = value_20080);


var G__20081 = seq__19993_20074;
var G__20082 = chunk__19994_20075;
var G__20083 = count__19995_20076;
var G__20084 = (i__19996_20077 + (1));
seq__19993_20074 = G__20081;
chunk__19994_20075 = G__20082;
count__19995_20076 = G__20083;
i__19996_20077 = G__20084;
continue;
} else {
var temp__5825__auto___20085 = cljs.core.seq(seq__19993_20074);
if(temp__5825__auto___20085){
var seq__19993_20086__$1 = temp__5825__auto___20085;
if(cljs.core.chunked_seq_QMARK_(seq__19993_20086__$1)){
var c__5525__auto___20087 = cljs.core.chunk_first(seq__19993_20086__$1);
var G__20088 = cljs.core.chunk_rest(seq__19993_20086__$1);
var G__20089 = c__5525__auto___20087;
var G__20090 = cljs.core.count(c__5525__auto___20087);
var G__20091 = (0);
seq__19993_20074 = G__20088;
chunk__19994_20075 = G__20089;
count__19995_20076 = G__20090;
i__19996_20077 = G__20091;
continue;
} else {
var vec__20006_20092 = cljs.core.first(seq__19993_20086__$1);
var id_20093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20006_20092,(0),null);
var value_20094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20006_20092,(1),null);
(document.getElementById(id_20093).value = value_20094);


var G__20095 = cljs.core.next(seq__19993_20086__$1);
var G__20096 = null;
var G__20097 = (0);
var G__20098 = (0);
seq__19993_20074 = G__20095;
chunk__19994_20075 = G__20096;
count__19995_20076 = G__20097;
i__19996_20077 = G__20098;
continue;
}
} else {
}
}
break;
}

return (document.getElementById("weight").value = weight);
});
kami.cad.app.sync_section_options_BANG_ = (function kami$cad$app$sync_section_options_BANG_(){
var select = document.getElementById("section-index");
var selected = new cljs.core.Keyword(null,"selected-section","selected-section",-1724195435).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.cad.app.state));
(select.innerHTML = "");

var seq__20009_20099 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.cad.app.state)))));
var chunk__20010_20100 = null;
var count__20011_20101 = (0);
var i__20012_20102 = (0);
while(true){
if((i__20012_20102 < count__20011_20101)){
var index_20103 = chunk__20010_20100.cljs$core$IIndexed$_nth$arity$2(null, i__20012_20102);
var option_20104 = document.createElement("option");
(option_20104.value = index_20103);

(option_20104.textContent = ["Section ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((index_20103 + (1)))].join(''));

select.appendChild(option_20104);


var G__20105 = seq__20009_20099;
var G__20106 = chunk__20010_20100;
var G__20107 = count__20011_20101;
var G__20108 = (i__20012_20102 + (1));
seq__20009_20099 = G__20105;
chunk__20010_20100 = G__20106;
count__20011_20101 = G__20107;
i__20012_20102 = G__20108;
continue;
} else {
var temp__5825__auto___20109 = cljs.core.seq(seq__20009_20099);
if(temp__5825__auto___20109){
var seq__20009_20110__$1 = temp__5825__auto___20109;
if(cljs.core.chunked_seq_QMARK_(seq__20009_20110__$1)){
var c__5525__auto___20111 = cljs.core.chunk_first(seq__20009_20110__$1);
var G__20112 = cljs.core.chunk_rest(seq__20009_20110__$1);
var G__20113 = c__5525__auto___20111;
var G__20114 = cljs.core.count(c__5525__auto___20111);
var G__20115 = (0);
seq__20009_20099 = G__20112;
chunk__20010_20100 = G__20113;
count__20011_20101 = G__20114;
i__20012_20102 = G__20115;
continue;
} else {
var index_20116 = cljs.core.first(seq__20009_20110__$1);
var option_20117 = document.createElement("option");
(option_20117.value = index_20116);

(option_20117.textContent = ["Section ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((index_20116 + (1)))].join(''));

select.appendChild(option_20117);


var G__20118 = cljs.core.next(seq__20009_20110__$1);
var G__20119 = null;
var G__20120 = (0);
var G__20121 = (0);
seq__20009_20099 = G__20118;
chunk__20010_20100 = G__20119;
count__20011_20101 = G__20120;
i__20012_20102 = G__20121;
continue;
}
} else {
}
}
break;
}

return (select.value = selected);
});
kami.cad.app.offset_section = (function kami$cad$app$offset_section(section,dz){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(section,new cljs.core.Keyword("cad","control-points","cad/control-points",-232410747),(function (p1__20013_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__20014){
var vec__20015 = p__20014;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20015,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20015,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20015,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(z + dz)], null);
}),p1__20013_SHARP_);
}));
});
kami.cad.app.duplicate_section_BANG_ = (function kami$cad$app$duplicate_section_BANG_(){
var map__20019 = cljs.core.deref(kami.cad.app.state);
var map__20019__$1 = cljs.core.__destructure_map(map__20019);
var sections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20019__$1,new cljs.core.Keyword(null,"sections","sections",-886710106));
var selected_section = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20019__$1,new cljs.core.Keyword(null,"selected-section","selected-section",-1724195435));
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sections,selected_section);
var zs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__20018_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(2));
}),new cljs.core.Keyword("cad","control-points","cad/control-points",-232410747).cljs$core$IFn$_invoke$arity$1(p1__20018_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sections], 0));
var dz = (function (){var x__5087__auto__ = 0.1;
var y__5088__auto__ = ((cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,zs) - cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.min,zs)) / (function (){var x__5087__auto____$1 = (1);
var y__5088__auto__ = (cljs.core.count(sections) - (1));
return ((x__5087__auto____$1 > y__5088__auto__) ? x__5087__auto____$1 : y__5088__auto__);
})());
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var insert_at = (selected_section + (1));
var result = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(sections,(0),insert_at),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kami.cad.app.offset_section(source,dz)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(sections,insert_at)], 0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.cad.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-section","selected-section",-1724195435),insert_at);

kami.cad.app.commit_BANG_(result);

kami.cad.app.sync_section_options_BANG_();

return kami.cad.app.sync_point_fields_BANG_();
});
kami.cad.app.delete_section_BANG_ = (function kami$cad$app$delete_section_BANG_(){
if((cljs.core.count(new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.cad.app.state))) > (2))){
var index = new cljs.core.Keyword(null,"selected-section","selected-section",-1724195435).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.cad.app.state));
var result = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.cad.app.state)),(0),index),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.cad.app.state)),(index + (1)))));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.cad.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-section","selected-section",-1724195435),(function (){var x__5090__auto__ = index;
var y__5091__auto__ = (cljs.core.count(result) - (1));
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})());

kami.cad.app.commit_BANG_(result);

kami.cad.app.sync_section_options_BANG_();

return kami.cad.app.sync_point_fields_BANG_();
} else {
return null;
}
});
kami.cad.app.move_section_BANG_ = (function kami$cad$app$move_section_BANG_(delta){
var index = new cljs.core.Keyword(null,"selected-section","selected-section",-1724195435).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.cad.app.state));
var target = (index + delta);
var sections = new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.cad.app.state));
if(((((-1) < target)) && ((target < cljs.core.count(sections))))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sections,index);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sections,target);
var result = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(sections,index,b,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target,a], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.cad.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-section","selected-section",-1724195435),target);

kami.cad.app.commit_BANG_(result);

kami.cad.app.sync_section_options_BANG_();

return kami.cad.app.sync_point_fields_BANG_();
} else {
return null;
}
});
kami.cad.app.command_aliases = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rhino","rhino",1962118035),new cljs.core.PersistentArrayMap(null, 7, ["trim",new cljs.core.Keyword(null,"trim","trim",774319767),"fit",new cljs.core.Keyword(null,"fit","fit",869444807),"zoom extents",new cljs.core.Keyword(null,"fit","fit",869444807),"reset",new cljs.core.Keyword(null,"reset","reset",-800929946),"solvewidth",new cljs.core.Keyword(null,"solve-width","solve-width",1757345495),"undo",new cljs.core.Keyword(null,"undo","undo",-1818036302),"redo",new cljs.core.Keyword(null,"redo","redo",501190664)], null),new cljs.core.Keyword(null,"autocad","autocad",1581638853),new cljs.core.PersistentArrayMap(null, 8, ["tr",new cljs.core.Keyword(null,"trim","trim",774319767),"trim",new cljs.core.Keyword(null,"trim","trim",774319767),"z",new cljs.core.Keyword(null,"fit","fit",869444807),"ze",new cljs.core.Keyword(null,"fit","fit",869444807),"regen",new cljs.core.Keyword(null,"reset","reset",-800929946),"dim",new cljs.core.Keyword(null,"solve-width","solve-width",1757345495),"u",new cljs.core.Keyword(null,"undo","undo",-1818036302),"redo",new cljs.core.Keyword(null,"redo","redo",501190664)], null),new cljs.core.Keyword(null,"fusion","fusion",-1277329743),new cljs.core.PersistentArrayMap(null, 7, ["trim",new cljs.core.Keyword(null,"trim","trim",774319767),"fit",new cljs.core.Keyword(null,"fit","fit",869444807),"home",new cljs.core.Keyword(null,"fit","fit",869444807),"reset",new cljs.core.Keyword(null,"reset","reset",-800929946),"dimension",new cljs.core.Keyword(null,"solve-width","solve-width",1757345495),"undo",new cljs.core.Keyword(null,"undo","undo",-1818036302),"redo",new cljs.core.Keyword(null,"redo","redo",501190664)], null),new cljs.core.Keyword(null,"plasticity","plasticity",2010991899),new cljs.core.PersistentArrayMap(null, 8, ["t",new cljs.core.Keyword(null,"trim","trim",774319767),"trim",new cljs.core.Keyword(null,"trim","trim",774319767),"f",new cljs.core.Keyword(null,"fit","fit",869444807),"fit",new cljs.core.Keyword(null,"fit","fit",869444807),"reset",new cljs.core.Keyword(null,"reset","reset",-800929946),"d",new cljs.core.Keyword(null,"solve-width","solve-width",1757345495),"undo",new cljs.core.Keyword(null,"undo","undo",-1818036302),"redo",new cljs.core.Keyword(null,"redo","redo",501190664)], null)], null);
kami.cad.app.run_command_BANG_ = (function kami$cad$app$run_command_BANG_(text){
var normalized = text.trim().toLowerCase();
var command = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(kami.cad.app.command_aliases,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.cad.app.state)),normalized], null));
var button_id = (function (){var fexpr__20020 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"trim","trim",774319767),"trim",new cljs.core.Keyword(null,"fit","fit",869444807),"fit",new cljs.core.Keyword(null,"reset","reset",-800929946),"reset",new cljs.core.Keyword(null,"solve-width","solve-width",1757345495),"solve-width",new cljs.core.Keyword(null,"undo","undo",-1818036302),"undo",new cljs.core.Keyword(null,"redo","redo",501190664),"redo"], null);
return (fexpr__20020.cljs$core$IFn$_invoke$arity$1 ? fexpr__20020.cljs$core$IFn$_invoke$arity$1(command) : fexpr__20020.call(null, command));
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
var tag = (function (){var G__20021 = target;
var G__20021__$1 = (((G__20021 == null))?null:G__20021.tagName);
if((G__20021__$1 == null)){
return null;
} else {
return G__20021__$1.toLowerCase();
}
})();
var or__5002__auto__ = (function (){var fexpr__20022 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["select",null,"input",null,"textarea",null], null), null);
return (fexpr__20022.cljs$core$IFn$_invoke$arity$1 ? fexpr__20022.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__20022.call(null, tag));
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
var map__20023 = cljs.core.deref(kami.cad.app.state);
var map__20023__$1 = cljs.core.__destructure_map(map__20023);
var project_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20023__$1,new cljs.core.Keyword(null,"project-id","project-id",206449307));
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20023__$1,new cljs.core.Keyword(null,"profile","profile",-545963874));
var project_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20023__$1,new cljs.core.Keyword(null,"project-name","project-name",1486861539));
var elevation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20023__$1,new cljs.core.Keyword(null,"elevation","elevation",-1609348796));
var sections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20023__$1,new cljs.core.Keyword(null,"sections","sections",-886710106));
var snap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20023__$1,new cljs.core.Keyword(null,"snap","snap",-51714904));
var segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20023__$1,new cljs.core.Keyword(null,"segments","segments",1937535949));
var sketch_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20023__$1,new cljs.core.Keyword(null,"sketch-width","sketch-width",-311747121));
var azimuth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20023__$1,new cljs.core.Keyword(null,"azimuth","azimuth",-165971535));
var selected_point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20023__$1,new cljs.core.Keyword(null,"selected-point","selected-point",728560533));
var selected_section = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20023__$1,new cljs.core.Keyword(null,"selected-section","selected-section",-1724195435));
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

var seq__20024_20122 = cljs.core.seq(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["segments",new cljs.core.Keyword("project","tessellation","project/tessellation",1445164252).cljs$core$IFn$_invoke$arity$1(p)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["section-index",new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(selection)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["point-index",new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(selection)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["snap",new cljs.core.Keyword(null,"snap","snap",-51714904).cljs$core$IFn$_invoke$arity$1(precision)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sketch-width",new cljs.core.Keyword(null,"sketch-width","sketch-width",-311747121).cljs$core$IFn$_invoke$arity$1(precision)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["profile",cljs.core.name(new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$1(interaction))], null)], null));
var chunk__20025_20123 = null;
var count__20026_20124 = (0);
var i__20027_20125 = (0);
while(true){
if((i__20027_20125 < count__20026_20124)){
var vec__20034_20126 = chunk__20025_20123.cljs$core$IIndexed$_nth$arity$2(null, i__20027_20125);
var id_20127 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20034_20126,(0),null);
var value_20128__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20034_20126,(1),null);
(document.getElementById(id_20127).value = value_20128__$1);


var G__20129 = seq__20024_20122;
var G__20130 = chunk__20025_20123;
var G__20131 = count__20026_20124;
var G__20132 = (i__20027_20125 + (1));
seq__20024_20122 = G__20129;
chunk__20025_20123 = G__20130;
count__20026_20124 = G__20131;
i__20027_20125 = G__20132;
continue;
} else {
var temp__5825__auto___20133 = cljs.core.seq(seq__20024_20122);
if(temp__5825__auto___20133){
var seq__20024_20134__$1 = temp__5825__auto___20133;
if(cljs.core.chunked_seq_QMARK_(seq__20024_20134__$1)){
var c__5525__auto___20135 = cljs.core.chunk_first(seq__20024_20134__$1);
var G__20136 = cljs.core.chunk_rest(seq__20024_20134__$1);
var G__20137 = c__5525__auto___20135;
var G__20138 = cljs.core.count(c__5525__auto___20135);
var G__20139 = (0);
seq__20024_20122 = G__20136;
chunk__20025_20123 = G__20137;
count__20026_20124 = G__20138;
i__20027_20125 = G__20139;
continue;
} else {
var vec__20037_20140 = cljs.core.first(seq__20024_20134__$1);
var id_20141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20037_20140,(0),null);
var value_20142__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20037_20140,(1),null);
(document.getElementById(id_20141).value = value_20142__$1);


var G__20143 = cljs.core.next(seq__20024_20134__$1);
var G__20144 = null;
var G__20145 = (0);
var G__20146 = (0);
seq__20024_20122 = G__20143;
chunk__20025_20123 = G__20144;
count__20026_20124 = G__20145;
i__20027_20125 = G__20146;
continue;
}
} else {
}
}
break;
}

kami.cad.app.sync_section_options_BANG_();

kami.cad.app.sync_point_fields_BANG_();

return kami.cad.app.upload_BANG_();
});
kami.cad.app.load_project_BANG_ = (function kami$cad$app$load_project_BANG_(){
var temp__5825__auto__ = localStorage.getItem(kami.cad.app.storage_key);
if(cljs.core.truth_(temp__5825__auto__)){
var data = temp__5825__auto__;
try{return kami.cad.app.apply_project_BANG_(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(data));
}catch (e20040){var _ = e20040;
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
return file.text().then((function (p1__20041_SHARP_){
return kami.cad.app.apply_project_BANG_(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(p1__20041_SHARP_));
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
var map__20048 = cljs.core.deref(kami.cad.app.state);
var map__20048__$1 = cljs.core.__destructure_map(map__20048);
var sections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20048__$1,new cljs.core.Keyword(null,"sections","sections",-886710106));
var selected_section = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20048__$1,new cljs.core.Keyword(null,"selected-section","selected-section",-1724195435));
var selected_point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20048__$1,new cljs.core.Keyword(null,"selected-point","selected-point",728560533));
return kami.cad.app.commit_BANG_(cljs.core.update.cljs$core$IFn$_invoke$arity$3(sections,selected_section,(function (section){
return kami.cad.set_weight(kami.cad.move_control_point(section,selected_point,p),selected_point,w);
})));
}));

var seq__20049_20147 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["section-index","point-index"], null));
var chunk__20050_20148 = null;
var count__20051_20149 = (0);
var i__20052_20150 = (0);
while(true){
if((i__20052_20150 < count__20051_20149)){
var id_20151 = chunk__20050_20148.cljs$core$IIndexed$_nth$arity$2(null, i__20052_20150);
document.getElementById(id_20151).addEventListener("change",((function (seq__20049_20147,chunk__20050_20148,count__20051_20149,i__20052_20150,id_20151,canvas,drag){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.cad.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-section","selected-section",-1724195435),parseInt(document.getElementById("section-index").value),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"selected-point","selected-point",728560533),parseInt(document.getElementById("point-index").value)], 0));

return kami.cad.app.sync_point_fields_BANG_();
});})(seq__20049_20147,chunk__20050_20148,count__20051_20149,i__20052_20150,id_20151,canvas,drag))
);


var G__20152 = seq__20049_20147;
var G__20153 = chunk__20050_20148;
var G__20154 = count__20051_20149;
var G__20155 = (i__20052_20150 + (1));
seq__20049_20147 = G__20152;
chunk__20050_20148 = G__20153;
count__20051_20149 = G__20154;
i__20052_20150 = G__20155;
continue;
} else {
var temp__5825__auto___20156 = cljs.core.seq(seq__20049_20147);
if(temp__5825__auto___20156){
var seq__20049_20157__$1 = temp__5825__auto___20156;
if(cljs.core.chunked_seq_QMARK_(seq__20049_20157__$1)){
var c__5525__auto___20158 = cljs.core.chunk_first(seq__20049_20157__$1);
var G__20159 = cljs.core.chunk_rest(seq__20049_20157__$1);
var G__20160 = c__5525__auto___20158;
var G__20161 = cljs.core.count(c__5525__auto___20158);
var G__20162 = (0);
seq__20049_20147 = G__20159;
chunk__20050_20148 = G__20160;
count__20051_20149 = G__20161;
i__20052_20150 = G__20162;
continue;
} else {
var id_20163 = cljs.core.first(seq__20049_20157__$1);
document.getElementById(id_20163).addEventListener("change",((function (seq__20049_20147,chunk__20050_20148,count__20051_20149,i__20052_20150,id_20163,seq__20049_20157__$1,temp__5825__auto___20156,canvas,drag){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.cad.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-section","selected-section",-1724195435),parseInt(document.getElementById("section-index").value),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"selected-point","selected-point",728560533),parseInt(document.getElementById("point-index").value)], 0));

return kami.cad.app.sync_point_fields_BANG_();
});})(seq__20049_20147,chunk__20050_20148,count__20051_20149,i__20052_20150,id_20163,seq__20049_20157__$1,temp__5825__auto___20156,canvas,drag))
);


var G__20164 = cljs.core.next(seq__20049_20157__$1);
var G__20165 = null;
var G__20166 = (0);
var G__20167 = (0);
seq__20049_20147 = G__20164;
chunk__20050_20148 = G__20165;
count__20051_20149 = G__20166;
i__20052_20150 = G__20167;
continue;
}
} else {
}
}
break;
}

document.getElementById("duplicate-section").addEventListener("click",kami.cad.app.duplicate_section_BANG_);

document.getElementById("delete-section").addEventListener("click",kami.cad.app.delete_section_BANG_);

document.getElementById("section-up").addEventListener("click",(function (){
return kami.cad.app.move_section_BANG_((-1));
}));

document.getElementById("section-down").addEventListener("click",(function (){
return kami.cad.app.move_section_BANG_((1));
}));

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
var vec__20053 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(solved,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sketch","points","sketch/points",1639145553),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword("sketch.point","position","sketch.point/position",1194114310)], null));
var left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20053,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20053,(1),null);
var vec__20056 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(solved,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sketch","points","sketch/points",1639145553),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword("sketch.point","position","sketch.point/position",1194114310)], null));
var right = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20056,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20056,(1),null);
var sections = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (section){
return kami.cad.move_control_point(kami.cad.move_control_point(section,(0),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(section,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cad","control-points","cad/control-points",-232410747),(0)], null)),(0),left)),(2),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(section,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cad","control-points","cad/control-points",-232410747),(2)], null)),(0),right));
}),new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.cad.app.state)));
(document.getElementById("solver-status").textContent = (cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(solved,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sketch","solver","sketch/solver",-552453485),new cljs.core.Keyword(null,"converged?","converged?",1779059976)], null)))?"Fully constrained":"Constraint conflict"));

kami.cad.app.commit_BANG_(sections);

return kami.cad.app.sync_point_fields_BANG_();
}));

document.getElementById("reset").addEventListener("click",(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.cad.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-section","selected-section",-1724195435),(0));

kami.cad.app.commit_BANG_(kami.cad.app.sections());

kami.cad.app.sync_section_options_BANG_();

return kami.cad.app.sync_point_fields_BANG_();
}));

document.getElementById("fit").addEventListener("click",(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.cad.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"azimuth","azimuth",-165971535),0.7,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"elevation","elevation",-1609348796),0.45], 0));
}));

document.getElementById("segments").addEventListener("input",(function (p1__20042_SHARP_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.cad.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"segments","segments",1937535949),parseInt(p1__20042_SHARP_.target.value),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"save-status","save-status",-2046612873),new cljs.core.Keyword(null,"dirty","dirty",729553281)], 0));

return kami.cad.app.upload_BANG_();
}));

document.getElementById("snap").addEventListener("change",(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.cad.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"snap","snap",-51714904),kami.cad.app.num("snap"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"save-status","save-status",-2046612873),new cljs.core.Keyword(null,"dirty","dirty",729553281)], 0));
}));

document.getElementById("sketch-width").addEventListener("change",(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.cad.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"sketch-width","sketch-width",-311747121),kami.cad.app.num("sketch-width"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"save-status","save-status",-2046612873),new cljs.core.Keyword(null,"dirty","dirty",729553281)], 0));
}));

document.getElementById("profile").addEventListener("change",(function (p1__20043_SHARP_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.cad.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"profile","profile",-545963874),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__20043_SHARP_.target.value));

(document.getElementById("profile-hint").textContent = (function (){var G__20059 = new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.cad.app.state));
var G__20059__$1 = (((G__20059 instanceof cljs.core.Keyword))?G__20059.fqn:null);
switch (G__20059__$1) {
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

document.getElementById("command").addEventListener("keydown",(function (p1__20044_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",p1__20044_SHARP_.key)){
p1__20044_SHARP_.preventDefault();

return kami.cad.app.run_command_BANG_(p1__20044_SHARP_.target.value);
} else {
return null;
}
}));

window.addEventListener("keydown",(function (p1__20045_SHARP_){
if(((cljs.core.not(kami.cad.app.editable_target_QMARK_(p1__20045_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",p1__20045_SHARP_.key)))){
p1__20045_SHARP_.preventDefault();

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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"sections","sections",-886710106),prev,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"selected-section","selected-section",-1724195435),(function (){var x__5090__auto__ = new cljs.core.Keyword(null,"selected-section","selected-section",-1724195435).cljs$core$IFn$_invoke$arity$1(s);
var y__5091__auto__ = (cljs.core.count(prev) - (1));
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})(),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.pop(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(s)),new cljs.core.Keyword(null,"future","future",1877842724),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"future","future",1877842724).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(s))], 0));
}));

kami.cad.app.sync_section_options_BANG_();

kami.cad.app.sync_point_fields_BANG_();

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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"sections","sections",-886710106),next,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"selected-section","selected-section",-1724195435),(function (){var x__5090__auto__ = new cljs.core.Keyword(null,"selected-section","selected-section",-1724195435).cljs$core$IFn$_invoke$arity$1(s);
var y__5091__auto__ = (cljs.core.count(next) - (1));
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})(),new cljs.core.Keyword(null,"future","future",1877842724),cljs.core.pop(new cljs.core.Keyword(null,"future","future",1877842724).cljs$core$IFn$_invoke$arity$1(s)),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"sections","sections",-886710106).cljs$core$IFn$_invoke$arity$1(s))], 0));
}));

kami.cad.app.sync_section_options_BANG_();

kami.cad.app.sync_point_fields_BANG_();

return kami.cad.app.upload_BANG_();
} else {
return null;
}
}));

canvas.addEventListener("pointerdown",(function (p1__20046_SHARP_){
return cljs.core.reset_BANG_(drag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20046_SHARP_.clientX,p1__20046_SHARP_.clientY], null));
}));

window.addEventListener("pointerup",(function (){
return cljs.core.reset_BANG_(drag,null);
}));

window.addEventListener("pointermove",(function (e){
var temp__5825__auto__ = cljs.core.deref(drag);
if(cljs.core.truth_(temp__5825__auto__)){
var vec__20060 = temp__5825__auto__;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20060,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20060,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.cad.app.state,cljs.core.update,new cljs.core.Keyword(null,"azimuth","azimuth",-165971535),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0.008 * (e.clientX - x))], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.cad.app.state,cljs.core.update,new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(function (p1__20047_SHARP_){
var x__5087__auto__ = -1.2;
var y__5088__auto__ = (function (){var x__5090__auto__ = 1.2;
var y__5091__auto__ = (p1__20047_SHARP_ + (0.008 * (e.clientY - y)));
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

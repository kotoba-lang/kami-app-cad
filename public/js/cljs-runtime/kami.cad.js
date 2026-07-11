goog.provide('kami.cad');
kami.cad.curve = (function kami$cad$curve(points,weights){
if(cljs.core.truth_((function (){var or__5002__auto__ = (cljs.core.count(points) < (2));
if(or__5002__auto__){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(points),cljs.core.count(weights));
if(or__5002__auto____$1){
return or__5002__auto____$1;
} else {
return cljs.core.some((function (p1__21617_SHARP_){
return (p1__21617_SHARP_ <= (0));
}),weights);
}
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("curve requires >=2 points and matching positive weights",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.count(points),new cljs.core.Keyword(null,"weights","weights",-1097626197),cljs.core.count(weights)], null));
} else {
}

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cad","id","cad/id",-1388434802),cljs.core.random_uuid(),new cljs.core.Keyword("cad","kind","cad/kind",-714087361),new cljs.core.Keyword(null,"nurbs-curve","nurbs-curve",-808785626),new cljs.core.Keyword("cad","control-points","cad/control-points",-232410747),cljs.core.vec(points),new cljs.core.Keyword("cad","weights","cad/weights",-1097462547),cljs.core.vec(weights)], null);
});
kami.cad.mix = (function kami$cad$mix(a,b,t){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (p1__21618_SHARP_,p2__21619_SHARP_){
return (p1__21618_SHARP_ + ((p2__21619_SHARP_ - p1__21618_SHARP_) * t));
}),a,b);
});
kami.cad.homogeneous = (function kami$cad$homogeneous(p__21620){
var map__21621 = p__21620;
var map__21621__$1 = cljs.core.__destructure_map(map__21621);
var control_points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21621__$1,new cljs.core.Keyword("cad","control-points","cad/control-points",-232410747));
var weights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21621__$1,new cljs.core.Keyword("cad","weights","cad/weights",-1097462547));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (p__21622,w){
var vec__21623 = p__21622;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21623,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21623,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21623,(2),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x * w),(y * w),(z * w),w], null);
}),control_points,weights);
});
kami.cad.from_homogeneous = (function kami$cad$from_homogeneous(points){
return kami.cad.curve(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__21627){
var vec__21628 = p__21627;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21628,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21628,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21628,(2),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21628,(3),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x / w),(y / w),(z / w)], null);
}),points),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__21626_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__21626_SHARP_,(3));
}),points));
});
/**
 * Evaluate a rational Bezier curve with de Casteljau reduction. This is the
 *   first NURBS-compatible span evaluator; knots/loft compose on top.
 */
kami.cad.evaluate = (function kami$cad$evaluate(p__21633,t){
var map__21634 = p__21633;
var map__21634__$1 = cljs.core.__destructure_map(map__21634);
var c = map__21634__$1;
var control_points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21634__$1,new cljs.core.Keyword("cad","control-points","cad/control-points",-232410747));
var weights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21634__$1,new cljs.core.Keyword("cad","weights","cad/weights",-1097462547));
if(((((0) <= t)) && ((t <= (1))))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("curve parameter must be within [0,1]",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"t","t",-1397832519),t], null));
}

var h = kami.cad.homogeneous(c);
var reduce1 = (function (pts){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (p1__21631_SHARP_,p2__21632_SHARP_){
return kami.cad.mix(p1__21631_SHARP_,p2__21632_SHARP_,t);
}),pts,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(pts,(1)));
});
var vec__21635 = (function (){var p = h;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(p))){
return cljs.core.first(p);
} else {
var G__21783 = reduce1(p);
p = G__21783;
continue;
}
break;
}
})();
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21635,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21635,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21635,(2),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21635,(3),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x / w),(y / w),(z / w)], null);
});
/**
 * Split a rational Bezier span exactly at parameter t using homogeneous
 *   de Casteljau construction. Returns [left right].
 */
kami.cad.split_curve = (function kami$cad$split_curve(c,t){
if(((((0) < t)) && ((t < (1))))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("split parameter must be within (0,1)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"t","t",-1397832519),t], null));
}

var levels = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.iterate((function (p1__21638_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (a,b){
return kami.cad.mix(a,b,t);
}),p1__21638_SHARP_,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(p1__21638_SHARP_,(1)));
}),kami.cad.homogeneous(c)));
var left = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,levels);
var right = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.last,cljs.core.reverse(levels));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kami.cad.from_homogeneous(left),kami.cad.from_homogeneous(right)], null);
});
/**
 * Return the exact sub-curve spanning normalized parameters t0..t1.
 */
kami.cad.trim_curve = (function kami$cad$trim_curve(c,t0,t1){
if(((((0) <= t0)) && ((((t0 <= t1)) && ((t1 <= (1))))))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("trim range must satisfy 0 <= t0 <= t1 <= 1",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"t0","t0",2120162535),t0,new cljs.core.Keyword(null,"t1","t1",24972444),t1], null));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t0,t1)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("trim range cannot be empty",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"t","t",-1397832519),t0], null));
} else {
}

if((((t0 === (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),t1)))){
return c;
} else {
if((t0 === (0))){
return cljs.core.first(kami.cad.split_curve(c,t1));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),t1)){
return cljs.core.second(kami.cad.split_curve(c,t0));
} else {
var vec__21642 = kami.cad.split_curve(c,t0);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21642,(0),null);
var right = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21642,(1),null);
var local = ((t1 - t0) / ((1) - t0));
return cljs.core.first(kami.cad.split_curve(right,local));

}
}
}
});
kami.cad.reverse_curve = (function kami$cad$reverse_curve(c){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(c,new cljs.core.Keyword("cad","control-points","cad/control-points",-232410747),(function (p1__21645_SHARP_){
return cljs.core.vec(cljs.core.reverse(p1__21645_SHARP_));
})),new cljs.core.Keyword("cad","weights","cad/weights",-1097462547),(function (p1__21646_SHARP_){
return cljs.core.vec(cljs.core.reverse(p1__21646_SHARP_));
}));
});
kami.cad.distance = (function kami$cad$distance(a,b){
return Math.sqrt(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (x,y){
var d = (x - y);
return (d * d);
}),a,b)));
});
/**
 * Join ordered curve spans into a composite curve when adjacent endpoints
 *   meet within tolerance. Individual rational spans remain exact.
 */
kami.cad.join_curves = (function kami$cad$join_curves(var_args){
var G__21652 = arguments.length;
switch (G__21652) {
case 1:
return kami.cad.join_curves.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return kami.cad.join_curves.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(kami.cad.join_curves.cljs$core$IFn$_invoke$arity$1 = (function (curves){
return kami.cad.join_curves.cljs$core$IFn$_invoke$arity$2(curves,1.0E-6);
}));

(kami.cad.join_curves.cljs$core$IFn$_invoke$arity$2 = (function (curves,tolerance){
if((cljs.core.count(curves) < (2))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("join needs at least two curves",cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var seq__21653_21788 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),curves));
var chunk__21654_21790 = null;
var count__21655_21791 = (0);
var i__21656_21792 = (0);
while(true){
if((i__21656_21792 < count__21655_21791)){
var vec__21663_21795 = chunk__21654_21790.cljs$core$IIndexed$_nth$arity$2(null, i__21656_21792);
var a_21796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21663_21795,(0),null);
var b_21797 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21663_21795,(1),null);
var gap_21798 = kami.cad.distance(kami.cad.evaluate(a_21796,(1)),kami.cad.evaluate(b_21797,(0)));
if((gap_21798 > tolerance)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("curve endpoints exceed join tolerance",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gap","gap",80255254),gap_21798,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),tolerance], null));
} else {
}


var G__21799 = seq__21653_21788;
var G__21800 = chunk__21654_21790;
var G__21801 = count__21655_21791;
var G__21802 = (i__21656_21792 + (1));
seq__21653_21788 = G__21799;
chunk__21654_21790 = G__21800;
count__21655_21791 = G__21801;
i__21656_21792 = G__21802;
continue;
} else {
var temp__5825__auto___21803 = cljs.core.seq(seq__21653_21788);
if(temp__5825__auto___21803){
var seq__21653_21804__$1 = temp__5825__auto___21803;
if(cljs.core.chunked_seq_QMARK_(seq__21653_21804__$1)){
var c__5525__auto___21805 = cljs.core.chunk_first(seq__21653_21804__$1);
var G__21806 = cljs.core.chunk_rest(seq__21653_21804__$1);
var G__21807 = c__5525__auto___21805;
var G__21808 = cljs.core.count(c__5525__auto___21805);
var G__21809 = (0);
seq__21653_21788 = G__21806;
chunk__21654_21790 = G__21807;
count__21655_21791 = G__21808;
i__21656_21792 = G__21809;
continue;
} else {
var vec__21666_21810 = cljs.core.first(seq__21653_21804__$1);
var a_21811 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21666_21810,(0),null);
var b_21812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21666_21810,(1),null);
var gap_21813 = kami.cad.distance(kami.cad.evaluate(a_21811,(1)),kami.cad.evaluate(b_21812,(0)));
if((gap_21813 > tolerance)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("curve endpoints exceed join tolerance",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gap","gap",80255254),gap_21813,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),tolerance], null));
} else {
}


var G__21817 = cljs.core.next(seq__21653_21804__$1);
var G__21818 = null;
var G__21819 = (0);
var G__21820 = (0);
seq__21653_21788 = G__21817;
chunk__21654_21790 = G__21818;
count__21655_21791 = G__21819;
i__21656_21792 = G__21820;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("cad","id","cad/id",-1388434802),cljs.core.random_uuid(),new cljs.core.Keyword("cad","kind","cad/kind",-714087361),new cljs.core.Keyword(null,"composite-curve","composite-curve",1271241613),new cljs.core.Keyword("cad","segments","cad/segments",1937568791),cljs.core.vec(curves)], null);
}));

(kami.cad.join_curves.cljs$lang$maxFixedArity = 2);

kami.cad.evaluate_composite = (function kami$cad$evaluate_composite(p__21672,t){
var map__21673 = p__21672;
var map__21673__$1 = cljs.core.__destructure_map(map__21673);
var segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21673__$1,new cljs.core.Keyword("cad","segments","cad/segments",1937568791));
if(((((0) <= t)) && ((t <= (1))))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("curve parameter must be within [0,1]",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"t","t",-1397832519),t], null));
}

var n = cljs.core.count(segments);
var scaled = (t * n);
var index = (function (){var x__5090__auto__ = (n - (1));
var y__5091__auto__ = (Math.floor(scaled) | (0));
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
var local = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,(1)))?(1):(scaled - index));
return kami.cad.evaluate(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(segments,index),local);
});
kami.cad.tessellate = (function kami$cad$tessellate(c,segments){
if((segments < (1))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("segments must be positive",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"segments","segments",1937535949),segments], null));
} else {
}

return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__21676_SHARP_){
return kami.cad.evaluate(c,(p1__21676_SHARP_ / segments));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((segments + (1))));
});
kami.cad.snap_value = (function kami$cad$snap_value(value,increment){
if((increment > (0))){
return (increment * Math.round((value / increment)));
} else {
return value;
}
});
kami.cad.snap_point = (function kami$cad$snap_point(point,increment){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__21680_SHARP_){
return kami.cad.snap_value(p1__21680_SHARP_,increment);
}),point);
});
kami.cad.move_control_point = (function kami$cad$move_control_point(c,index,point){
if(((((-1) < index)) && ((index < cljs.core.count(new cljs.core.Keyword("cad","control-points","cad/control-points",-232410747).cljs$core$IFn$_invoke$arity$1(c)))))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("control point index out of range",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",-1531685915),index], null));
}

return cljs.core.assoc_in(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cad","control-points","cad/control-points",-232410747),index], null),cljs.core.vec(point));
});
kami.cad.set_weight = (function kami$cad$set_weight(c,index,weight){
if((weight > (0))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("weight must be positive",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"weight","weight",-1262796205),weight], null));
}

return cljs.core.assoc_in(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cad","weights","cad/weights",-1097462547),index], null),weight);
});
/**
 * Create a sampled surface between compatible section curves.
 */
kami.cad.loft = (function kami$cad$loft(curves,u_segments){
if((cljs.core.count(curves) < (2))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("loft needs two section curves",cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("cad","id","cad/id",-1388434802),cljs.core.random_uuid(),new cljs.core.Keyword("cad","kind","cad/kind",-714087361),new cljs.core.Keyword(null,"loft-surface","loft-surface",1649660786),new cljs.core.Keyword("cad","sections","cad/sections",-886808860),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__21684_SHARP_){
return kami.cad.tessellate(p1__21684_SHARP_,u_segments);
}),curves)], null);
});
kami.cad.loft_mesh = (function kami$cad$loft_mesh(p__21685){
var map__21686 = p__21685;
var map__21686__$1 = cljs.core.__destructure_map(map__21686);
var sections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21686__$1,new cljs.core.Keyword("cad","sections","cad/sections",-886808860));
var rows = cljs.core.count(sections);
var cols = cljs.core.count(cljs.core.first(sections));
var positions = cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sections], 0)));
var indices = cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__21687){
var vec__21688 = p__21687;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21688,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21688,(1),null);
var a = ((r * cols) + c);
var b = (a + (1));
var d = (((r + (1)) * cols) + c);
var e = (d + (1));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,d,b,b,d,e], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__5480__auto__ = (function kami$cad$loft_mesh_$_iter__21691(s__21692){
return (new cljs.core.LazySeq(null,(function (){
var s__21692__$1 = s__21692;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__21692__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var r = cljs.core.first(xs__6385__auto__);
var iterys__5476__auto__ = ((function (s__21692__$1,r,xs__6385__auto__,temp__5825__auto__,rows,cols,positions,map__21686,map__21686__$1,sections){
return (function kami$cad$loft_mesh_$_iter__21691_$_iter__21693(s__21694){
return (new cljs.core.LazySeq(null,((function (s__21692__$1,r,xs__6385__auto__,temp__5825__auto__,rows,cols,positions,map__21686,map__21686__$1,sections){
return (function (){
var s__21694__$1 = s__21694;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__21694__$1);
if(temp__5825__auto____$1){
var s__21694__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21694__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__21694__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__21696 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__21695 = (0);
while(true){
if((i__21695 < size__5479__auto__)){
var c = cljs.core._nth(c__5478__auto__,i__21695);
cljs.core.chunk_append(b__21696,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null));

var G__21851 = (i__21695 + (1));
i__21695 = G__21851;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21696),kami$cad$loft_mesh_$_iter__21691_$_iter__21693(cljs.core.chunk_rest(s__21694__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21696),null);
}
} else {
var c = cljs.core.first(s__21694__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null),kami$cad$loft_mesh_$_iter__21691_$_iter__21693(cljs.core.rest(s__21694__$2)));
}
} else {
return null;
}
break;
}
});})(s__21692__$1,r,xs__6385__auto__,temp__5825__auto__,rows,cols,positions,map__21686,map__21686__$1,sections))
,null,null));
});})(s__21692__$1,r,xs__6385__auto__,temp__5825__auto__,rows,cols,positions,map__21686,map__21686__$1,sections))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((cols - (1)))));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,kami$cad$loft_mesh_$_iter__21691(cljs.core.rest(s__21692__$1)));
} else {
var G__21853 = cljs.core.rest(s__21692__$1);
s__21692__$1 = G__21853;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((rows - (1))));
})()], 0)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"positions","positions",-1380538434),positions,new cljs.core.Keyword(null,"indices","indices",-1218138343),indices,new cljs.core.Keyword(null,"normals","normals",-1508109067),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(positions),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null)))], null);
});
kami.cad.sketch_point = (function kami$cad$sketch_point(var_args){
var G__21701 = arguments.length;
switch (G__21701) {
case 3:
return kami.cad.sketch_point.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return kami.cad.sketch_point.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(kami.cad.sketch_point.cljs$core$IFn$_invoke$arity$3 = (function (id,x,y){
return kami.cad.sketch_point.cljs$core$IFn$_invoke$arity$4(id,x,y,false);
}));

(kami.cad.sketch_point.cljs$core$IFn$_invoke$arity$4 = (function (id,x,y,fixed_QMARK_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("sketch.point","id","sketch.point/id",1789283686),id,new cljs.core.Keyword("sketch.point","position","sketch.point/position",1194114310),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword("sketch.point","fixed?","sketch.point/fixed?",-959712019),fixed_QMARK_], null);
}));

(kami.cad.sketch_point.cljs$lang$maxFixedArity = 4);

kami.cad.sketch_line = (function kami$cad$sketch_line(id,a,b){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sketch.entity","id","sketch.entity/id",886322671),id,new cljs.core.Keyword("sketch.entity","kind","sketch.entity/kind",535425234),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword("sketch.entity","a","sketch.entity/a",393733047),a,new cljs.core.Keyword("sketch.entity","b","sketch.entity/b",-890409039),b], null);
});
kami.cad.constraint = (function kami$cad$constraint(id,kind,data){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("constraint","id","constraint/id",-638598025),id,new cljs.core.Keyword("constraint","kind","constraint/kind",-661258678),kind], null),data], 0));
});
kami.cad.sketch = (function kami$cad$sketch(points,entities,constraints){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("sketch","points","sketch/points",1639145553),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sketch.point","id","sketch.point/id",1789283686),cljs.core.identity),points)),new cljs.core.Keyword("sketch","entities","sketch/entities",-1060250281),cljs.core.vec(entities),new cljs.core.Keyword("sketch","constraints","sketch/constraints",-834513908),cljs.core.vec(constraints)], null);
});
kami.cad.horizontal = (function kami$cad$horizontal(id,line_id){
return kami.cad.constraint(id,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("constraint","entity","constraint/entity",272881465),line_id], null));
});
kami.cad.vertical = (function kami$cad$vertical(id,line_id){
return kami.cad.constraint(id,new cljs.core.Keyword(null,"vertical","vertical",718696748),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("constraint","entity","constraint/entity",272881465),line_id], null));
});
kami.cad.coincident = (function kami$cad$coincident(id,point_a,point_b){
return kami.cad.constraint(id,new cljs.core.Keyword(null,"coincident","coincident",-473799301),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("constraint","a","constraint/a",-1935403777),point_a,new cljs.core.Keyword("constraint","b","constraint/b",629521449),point_b], null));
});
kami.cad.distance_constraint = (function kami$cad$distance_constraint(id,point_a,point_b,value){
if((value > (0))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("distance constraint must be positive",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null));
}

return kami.cad.constraint(id,new cljs.core.Keyword(null,"distance","distance",-1671893894),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("constraint","a","constraint/a",-1935403777),point_a,new cljs.core.Keyword("constraint","b","constraint/b",629521449),point_b,new cljs.core.Keyword("constraint","value","constraint/value",-369782452),value], null));
});
kami.cad.sketch_entity = (function kami$cad$sketch_entity(s,id){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__21705_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword("sketch.entity","id","sketch.entity/id",886322671).cljs$core$IFn$_invoke$arity$1(p1__21705_SHARP_));
}),new cljs.core.Keyword("sketch","entities","sketch/entities",-1060250281).cljs$core$IFn$_invoke$arity$1(s)));
});
kami.cad.point_position = (function kami$cad$point_position(s,id){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sketch","points","sketch/points",1639145553),id,new cljs.core.Keyword("sketch.point","position","sketch.point/position",1194114310)], null));
});
kami.cad.fixed_point_QMARK_ = (function kami$cad$fixed_point_QMARK_(s,id){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sketch","points","sketch/points",1639145553),id,new cljs.core.Keyword("sketch.point","fixed?","sketch.point/fixed?",-959712019)], null));
});
kami.cad.set_point = (function kami$cad$set_point(s,id,position){
if(cljs.core.truth_(kami.cad.fixed_point_QMARK_(s,id))){
return s;
} else {
return cljs.core.assoc_in(s,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sketch","points","sketch/points",1639145553),id,new cljs.core.Keyword("sketch.point","position","sketch.point/position",1194114310)], null),cljs.core.vec(position));
}
});
kami.cad.sqrt_value = (function kami$cad$sqrt_value(x){
return Math.sqrt(x);
});
kami.cad.distance2 = (function kami$cad$distance2(p__21713,p__21714){
var vec__21715 = p__21713;
var ax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21715,(0),null);
var ay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21715,(1),null);
var vec__21718 = p__21714;
var bx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21718,(0),null);
var by = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21718,(1),null);
return kami.cad.sqrt_value((((bx - ax) * (bx - ax)) + ((by - ay) * (by - ay))));
});
kami.cad.required_points = (function kami$cad$required_points(c,entity){
var G__21721 = new cljs.core.Keyword("constraint","kind","constraint/kind",-661258678).cljs$core$IFn$_invoke$arity$1(c);
var G__21721__$1 = (((G__21721 instanceof cljs.core.Keyword))?G__21721.fqn:null);
switch (G__21721__$1) {
case "horizontal":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sketch.entity","a","sketch.entity/a",393733047).cljs$core$IFn$_invoke$arity$1(entity),new cljs.core.Keyword("sketch.entity","b","sketch.entity/b",-890409039).cljs$core$IFn$_invoke$arity$1(entity)], null);

break;
case "vertical":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sketch.entity","a","sketch.entity/a",393733047).cljs$core$IFn$_invoke$arity$1(entity),new cljs.core.Keyword("sketch.entity","b","sketch.entity/b",-890409039).cljs$core$IFn$_invoke$arity$1(entity)], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("constraint","a","constraint/a",-1935403777).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword("constraint","b","constraint/b",629521449).cljs$core$IFn$_invoke$arity$1(c)], null);

}
});
kami.cad.constraint_residual = (function kami$cad$constraint_residual(s,c){
var entity = (function (){var temp__5825__auto__ = new cljs.core.Keyword("constraint","entity","constraint/entity",272881465).cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
return kami.cad.sketch_entity(s,id);
} else {
return null;
}
})();
var vec__21722 = kami.cad.required_points(c,entity);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21722,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21722,(1),null);
var vec__21725 = kami.cad.point_position(s,a);
var ax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21725,(0),null);
var ay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21725,(1),null);
var vec__21728 = kami.cad.point_position(s,b);
var bx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21728,(0),null);
var by = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21728,(1),null);
var G__21731 = new cljs.core.Keyword("constraint","kind","constraint/kind",-661258678).cljs$core$IFn$_invoke$arity$1(c);
var G__21731__$1 = (((G__21731 instanceof cljs.core.Keyword))?G__21731.fqn:null);
switch (G__21731__$1) {
case "horizontal":
return Math.abs((by - ay));

break;
case "vertical":
return Math.abs((bx - ax));

break;
case "coincident":
return kami.cad.distance2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax,ay], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx,by], null));

break;
case "distance":
return Math.abs((kami.cad.distance2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax,ay], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx,by], null)) - new cljs.core.Keyword("constraint","value","constraint/value",-369782452).cljs$core$IFn$_invoke$arity$1(c)));

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("unknown sketch constraint",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"constraint","constraint",1725147424),c], null));

}
});
kami.cad.solve_one = (function kami$cad$solve_one(s,c){
var entity = (function (){var temp__5825__auto__ = new cljs.core.Keyword("constraint","entity","constraint/entity",272881465).cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
return kami.cad.sketch_entity(s,id);
} else {
return null;
}
})();
var vec__21741 = kami.cad.required_points(c,entity);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21741,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21741,(1),null);
var pa = kami.cad.point_position(s,a);
var pb = kami.cad.point_position(s,b);
var fa = kami.cad.fixed_point_QMARK_(s,a);
var fb = kami.cad.fixed_point_QMARK_(s,b);
var place = (function (s__$1,target_a,target_b){
if(cljs.core.truth_((function (){var and__5000__auto__ = fa;
if(cljs.core.truth_(and__5000__auto__)){
return fb;
} else {
return and__5000__auto__;
}
})())){
return s__$1;
} else {
if(cljs.core.truth_(fa)){
return kami.cad.set_point(s__$1,b,target_b);
} else {
if(cljs.core.truth_(fb)){
return kami.cad.set_point(s__$1,a,target_a);
} else {
return kami.cad.set_point(kami.cad.set_point(s__$1,a,target_a),b,target_b);

}
}
}
});
var G__21751 = new cljs.core.Keyword("constraint","kind","constraint/kind",-661258678).cljs$core$IFn$_invoke$arity$1(c);
var G__21751__$1 = (((G__21751 instanceof cljs.core.Keyword))?G__21751.fqn:null);
switch (G__21751__$1) {
case "horizontal":
var y = (cljs.core.truth_(fa)?cljs.core.second(pa):(cljs.core.truth_(fb)?cljs.core.second(pb):((cljs.core.second(pa) + cljs.core.second(pb)) / (2))
));
return place(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(pa),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(pb),y], null));

break;
case "vertical":
var x = (cljs.core.truth_(fa)?cljs.core.first(pa):(cljs.core.truth_(fb)?cljs.core.first(pb):((cljs.core.first(pa) + cljs.core.first(pb)) / (2))
));
return place(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.second(pa)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.second(pb)], null));

break;
case "coincident":
var p = (cljs.core.truth_(fa)?pa:(cljs.core.truth_(fb)?pb:cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (p1__21733_SHARP_,p2__21734_SHARP_){
return ((p1__21733_SHARP_ + p2__21734_SHARP_) / (2));
}),pa,pb)
));
return place(s,p,p);

break;
case "distance":
var d = (function (){var x__5087__auto__ = 1.0E-12;
var y__5088__auto__ = kami.cad.distance2(pa,pb);
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var desired = new cljs.core.Keyword("constraint","value","constraint/value",-369782452).cljs$core$IFn$_invoke$arity$1(c);
var unit = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__21735_SHARP_){
return (p1__21735_SHARP_ / d);
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._,pb,pa));
var error = (d - desired);
var da = (cljs.core.truth_(fb)?error:(error / (2)));
var db = (cljs.core.truth_(fa)?error:(error / (2)));
return place(s,cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,pa,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__21736_SHARP_){
return (p1__21736_SHARP_ * da);
}),unit)),cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._,pb,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__21738_SHARP_){
return (p1__21738_SHARP_ * db);
}),unit)));

break;
default:
return s;

}
});
kami.cad.solve_sketch = (function kami$cad$solve_sketch(var_args){
var G__21761 = arguments.length;
switch (G__21761) {
case 1:
return kami.cad.solve_sketch.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return kami.cad.solve_sketch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(kami.cad.solve_sketch.cljs$core$IFn$_invoke$arity$1 = (function (s){
return kami.cad.solve_sketch.cljs$core$IFn$_invoke$arity$2(s,cljs.core.PersistentArrayMap.EMPTY);
}));

(kami.cad.solve_sketch.cljs$core$IFn$_invoke$arity$2 = (function (s,p__21764){
var map__21765 = p__21764;
var map__21765__$1 = cljs.core.__destructure_map(map__21765);
var iterations = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21765__$1,new cljs.core.Keyword(null,"iterations","iterations",-1402710890),(64));
var tolerance = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21765__$1,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),1.0E-7);
var solved = (function (){var current = s;
var n = (0);
while(true){
var residuals = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (current,n,map__21765,map__21765__$1,iterations,tolerance){
return (function (p1__21754_SHARP_){
return kami.cad.constraint_residual(current,p1__21754_SHARP_);
});})(current,n,map__21765,map__21765__$1,iterations,tolerance))
,new cljs.core.Keyword("sketch","constraints","sketch/constraints",-834513908).cljs$core$IFn$_invoke$arity$1(current));
if((((n >= iterations)) || (cljs.core.every_QMARK_(((function (current,n,residuals,map__21765,map__21765__$1,iterations,tolerance){
return (function (p1__21755_SHARP_){
return (p1__21755_SHARP_ <= tolerance);
});})(current,n,residuals,map__21765,map__21765__$1,iterations,tolerance))
,residuals)))){
return current;
} else {
var G__21895 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(kami.cad.solve_one,current,new cljs.core.Keyword("sketch","constraints","sketch/constraints",-834513908).cljs$core$IFn$_invoke$arity$1(current));
var G__21896 = (n + (1));
current = G__21895;
n = G__21896;
continue;
}
break;
}
})();
var residuals = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__21756_SHARP_){
return kami.cad.constraint_residual(solved,p1__21756_SHARP_);
}),new cljs.core.Keyword("sketch","constraints","sketch/constraints",-834513908).cljs$core$IFn$_invoke$arity$1(solved));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(solved,new cljs.core.Keyword("sketch","solver","sketch/solver",-552453485),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"converged?","converged?",1779059976),cljs.core.every_QMARK_((function (p1__21757_SHARP_){
return (p1__21757_SHARP_ <= tolerance);
}),residuals),new cljs.core.Keyword(null,"max-residual","max-residual",-1589948383),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(0),residuals),new cljs.core.Keyword(null,"residuals","residuals",1851165230),residuals], null));
}));

(kami.cad.solve_sketch.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=kami.cad.js.map

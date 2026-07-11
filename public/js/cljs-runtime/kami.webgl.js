goog.provide('kami.webgl');
kami.webgl.webgpu_available_QMARK_ = (function kami$webgl$webgpu_available_QMARK_(){
return cljs.core.boolean$((function (){var and__5000__auto__ = navigator;
if(cljs.core.truth_(and__5000__auto__)){
return navigator.gpu;
} else {
return and__5000__auto__;
}
})());
});

/**
 * A WebGL2 rendering context for the canvas (premultiplied alpha, antialias), or nil.
 */
kami.webgl.webgl2_context = (function kami$webgl$webgl2_context(canvas){
return canvas.getContext("webgl2",({"antialias": true, "premultipliedAlpha": true}));
});

/**
 * The best available GPU backend for this browser: :webgpu if WebGPU is present, else :webgl2.
 * Both consume the same render-IR; the caller routes to kami.webgpu or kami.webgl accordingly.
 */
kami.webgl.pick_backend = (function kami$webgl$pick_backend(){
if(kami.webgl.webgpu_available_QMARK_()){
return new cljs.core.Keyword(null,"webgpu","webgpu",-1928709720);
} else {
return new cljs.core.Keyword(null,"webgl2","webgl2",111927467);
}
});

/**
 * The kami.gpu capability tier for a running WebGL2 context (no compute / no storage, instancing
 * via ANGLE_instanced_arrays core in WebGL2).
 */
kami.webgl.caps = (function kami$webgl$caps(_gl){
return kami.gpu.caps_from_device(new cljs.core.Keyword(null,"webgl2","webgl2",111927467),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compute","compute",1555393130),false,new cljs.core.Keyword(null,"storage","storage",1867247511),false,new cljs.core.Keyword(null,"instancing","instancing",1383407992),true], null));
});

kami.webgl.compile_shader = (function kami$webgl$compile_shader(gl,kind,src){
var s = gl.createShader(kind);
gl.shaderSource(s,src);

gl.compileShader(s);

if(cljs.core.truth_(gl.getShaderParameter(s,gl.COMPILE_STATUS))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["GLSL compile error:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gl.getShaderInfoLog(s))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),src], null));
}

return s;
});

/**
 * Compile + link a GLSL ES 3.00 program from vertex/fragment source (as produced by bb gen-glsl).
 * Throws with the info log on failure.
 */
kami.webgl.program = (function kami$webgl$program(gl,vsrc,fsrc){
var p = gl.createProgram();
var vs = kami.webgl.compile_shader(gl,gl.VERTEX_SHADER,vsrc);
var fs = kami.webgl.compile_shader(gl,gl.FRAGMENT_SHADER,fsrc);
gl.attachShader(p,vs);

gl.attachShader(p,fs);

gl.linkProgram(p);

if(cljs.core.truth_(gl.getProgramParameter(p,gl.LINK_STATUS))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["GLSL link error:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gl.getProgramInfoLog(p))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}

return p;
});

kami.webgl.mesh_vertex_shader = "#version 300 es\nprecision highp float;\nlayout(location=0) in vec3 a_position;\nlayout(location=1) in vec3 a_normal;\nuniform mat4 u_mvp;\nout vec3 v_normal;\nvoid main(){ gl_Position=u_mvp*vec4(a_position,1.0); v_normal=a_normal; }";

kami.webgl.mesh_fragment_shader = "#version 300 es\nprecision highp float;\nin vec3 v_normal;\nuniform vec3 u_color;\nout vec4 out_color;\nvoid main(){ float l=0.25+0.75*max(dot(normalize(v_normal),normalize(vec3(0.4,0.8,0.6))),0.0); out_color=vec4(u_color*l,1.0); }";

/**
 * Initialize the canonical arbitrary-mesh WebGL2 fallback for a canvas.
 */
kami.webgl.init_mesh_viewport_BANG_ = (function kami$webgl$init_mesh_viewport_BANG_(canvas){
var temp__5825__auto__ = kami.webgl.webgl2_context(canvas);
if(cljs.core.truth_(temp__5825__auto__)){
var gl = temp__5825__auto__;
var width = (function (){var x__5087__auto__ = (1);
var y__5088__auto__ = canvas.clientWidth;
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var height = (function (){var x__5087__auto__ = (1);
var y__5088__auto__ = canvas.clientHeight;
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var prog = kami.webgl.program(gl,kami.webgl.mesh_vertex_shader,kami.webgl.mesh_fragment_shader);
(canvas.width = width);

(canvas.height = height);

gl.enable(gl.DEPTH_TEST);

return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"backend","backend",-847489124),new cljs.core.Keyword(null,"webgl2","webgl2",111927467),new cljs.core.Keyword(null,"gl","gl",-246422634),gl,new cljs.core.Keyword(null,"program","program",781564284),prog,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null);
} else {
return null;
}
});

/**
 * Upload {:positions :normals :indices} to a fallback viewport.
 */
kami.webgl.upload_mesh_BANG_ = (function kami$webgl$upload_mesh_BANG_(p__22105,p__22106){
var map__22107 = p__22105;
var map__22107__$1 = cljs.core.__destructure_map(map__22107);
var gl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22107__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var map__22108 = p__22106;
var map__22108__$1 = cljs.core.__destructure_map(map__22108);
var positions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22108__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var normals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22108__$1,new cljs.core.Keyword(null,"normals","normals",-1508109067));
var indices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22108__$1,new cljs.core.Keyword(null,"indices","indices",-1218138343));
var vao = gl.createVertexArray();
var vertex_buffer = gl.createBuffer();
var index_buffer = gl.createBuffer();
var vertices = (new Float32Array(cljs.core.clj__GT_js(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,positions,normals)], 0)))));
var index_data = (new Uint32Array(cljs.core.clj__GT_js(indices)));
gl.bindVertexArray(vao);

gl.bindBuffer(gl.ARRAY_BUFFER,vertex_buffer);

gl.bufferData(gl.ARRAY_BUFFER,vertices,gl.STATIC_DRAW);

var seq__22110_22324 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(12)], null)], null));
var chunk__22111_22325 = null;
var count__22112_22326 = (0);
var i__22113_22327 = (0);
while(true){
if((i__22113_22327 < count__22112_22326)){
var vec__22128_22331 = chunk__22111_22325.cljs$core$IIndexed$_nth$arity$2(null, i__22113_22327);
var location_22332__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22128_22331,(0),null);
var offset_22333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22128_22331,(1),null);
gl.enableVertexAttribArray(location_22332__$1);

gl.vertexAttribPointer(location_22332__$1,(3),gl.FLOAT,false,(24),offset_22333);


var G__22334 = seq__22110_22324;
var G__22335 = chunk__22111_22325;
var G__22336 = count__22112_22326;
var G__22337 = (i__22113_22327 + (1));
seq__22110_22324 = G__22334;
chunk__22111_22325 = G__22335;
count__22112_22326 = G__22336;
i__22113_22327 = G__22337;
continue;
} else {
var temp__5825__auto___22338 = cljs.core.seq(seq__22110_22324);
if(temp__5825__auto___22338){
var seq__22110_22339__$1 = temp__5825__auto___22338;
if(cljs.core.chunked_seq_QMARK_(seq__22110_22339__$1)){
var c__5525__auto___22340 = cljs.core.chunk_first(seq__22110_22339__$1);
var G__22341 = cljs.core.chunk_rest(seq__22110_22339__$1);
var G__22342 = c__5525__auto___22340;
var G__22343 = cljs.core.count(c__5525__auto___22340);
var G__22344 = (0);
seq__22110_22324 = G__22341;
chunk__22111_22325 = G__22342;
count__22112_22326 = G__22343;
i__22113_22327 = G__22344;
continue;
} else {
var vec__22132_22345 = cljs.core.first(seq__22110_22339__$1);
var location_22346__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22132_22345,(0),null);
var offset_22347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22132_22345,(1),null);
gl.enableVertexAttribArray(location_22346__$1);

gl.vertexAttribPointer(location_22346__$1,(3),gl.FLOAT,false,(24),offset_22347);


var G__22349 = cljs.core.next(seq__22110_22339__$1);
var G__22350 = null;
var G__22351 = (0);
var G__22352 = (0);
seq__22110_22324 = G__22349;
chunk__22111_22325 = G__22350;
count__22112_22326 = G__22351;
i__22113_22327 = G__22352;
continue;
}
} else {
}
}
break;
}

gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,index_buffer);

gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,index_data,gl.STATIC_DRAW);

gl.bindVertexArray(null);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vao","vao",-896395446),vao,new cljs.core.Keyword(null,"vertex-buffer","vertex-buffer",-1711520881),vertex_buffer,new cljs.core.Keyword(null,"index-buffer","index-buffer",2003635709),index_buffer,new cljs.core.Keyword(null,"index-count","index-count",-907351532),cljs.core.count(indices)], null);
});

/**
 * Render several fallback mesh draws after one color/depth clear. Each draw
 *   is {:buffers :mvp :color}; MVP is a column-major Float32Array.
 */
kami.webgl.render_mesh_scene_BANG_ = (function kami$webgl$render_mesh_scene_BANG_(p__22138,draws){
var map__22139 = p__22138;
var map__22139__$1 = cljs.core.__destructure_map(map__22139);
var gl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22139__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var program = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22139__$1,new cljs.core.Keyword(null,"program","program",781564284));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22139__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22139__$1,new cljs.core.Keyword(null,"height","height",1025178622));
gl.viewport((0),(0),width,height);

gl.clearColor(0.035,0.055,0.1,1.0);

gl.clear((gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT));

gl.useProgram(program);

var seq__22140_22354 = cljs.core.seq(draws);
var chunk__22141_22355 = null;
var count__22142_22356 = (0);
var i__22143_22357 = (0);
while(true){
if((i__22143_22357 < count__22142_22356)){
var map__22154_22359 = chunk__22141_22355.cljs$core$IIndexed$_nth$arity$2(null, i__22143_22357);
var map__22154_22360__$1 = cljs.core.__destructure_map(map__22154_22359);
var buffers_22361 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22154_22360__$1,new cljs.core.Keyword(null,"buffers","buffers",471409492));
var mvp_22362 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22154_22360__$1,new cljs.core.Keyword(null,"mvp","mvp",-493676132));
var color_22363 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22154_22360__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var map__22156_22366 = buffers_22361;
var map__22156_22367__$1 = cljs.core.__destructure_map(map__22156_22366);
var vao_22368 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22156_22367__$1,new cljs.core.Keyword(null,"vao","vao",-896395446));
var index_count_22369 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22156_22367__$1,new cljs.core.Keyword(null,"index-count","index-count",-907351532));
var vec__22157_22370 = color_22363;
var r_22371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22157_22370,(0),null);
var g_22372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22157_22370,(1),null);
var b_22373 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22157_22370,(2),null);
gl.uniformMatrix4fv(gl.getUniformLocation(program,"u_mvp"),false,mvp_22362);

gl.uniform3f(gl.getUniformLocation(program,"u_color"),r_22371,g_22372,b_22373);

gl.bindVertexArray(vao_22368);

gl.drawElements(gl.TRIANGLES,index_count_22369,gl.UNSIGNED_INT,(0));


var G__22374 = seq__22140_22354;
var G__22375 = chunk__22141_22355;
var G__22376 = count__22142_22356;
var G__22377 = (i__22143_22357 + (1));
seq__22140_22354 = G__22374;
chunk__22141_22355 = G__22375;
count__22142_22356 = G__22376;
i__22143_22357 = G__22377;
continue;
} else {
var temp__5825__auto___22378 = cljs.core.seq(seq__22140_22354);
if(temp__5825__auto___22378){
var seq__22140_22379__$1 = temp__5825__auto___22378;
if(cljs.core.chunked_seq_QMARK_(seq__22140_22379__$1)){
var c__5525__auto___22380 = cljs.core.chunk_first(seq__22140_22379__$1);
var G__22381 = cljs.core.chunk_rest(seq__22140_22379__$1);
var G__22382 = c__5525__auto___22380;
var G__22383 = cljs.core.count(c__5525__auto___22380);
var G__22384 = (0);
seq__22140_22354 = G__22381;
chunk__22141_22355 = G__22382;
count__22142_22356 = G__22383;
i__22143_22357 = G__22384;
continue;
} else {
var map__22161_22385 = cljs.core.first(seq__22140_22379__$1);
var map__22161_22386__$1 = cljs.core.__destructure_map(map__22161_22385);
var buffers_22387 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22161_22386__$1,new cljs.core.Keyword(null,"buffers","buffers",471409492));
var mvp_22388 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22161_22386__$1,new cljs.core.Keyword(null,"mvp","mvp",-493676132));
var color_22389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22161_22386__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var map__22164_22390 = buffers_22387;
var map__22164_22391__$1 = cljs.core.__destructure_map(map__22164_22390);
var vao_22392 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22164_22391__$1,new cljs.core.Keyword(null,"vao","vao",-896395446));
var index_count_22393 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22164_22391__$1,new cljs.core.Keyword(null,"index-count","index-count",-907351532));
var vec__22165_22394 = color_22389;
var r_22395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22165_22394,(0),null);
var g_22396 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22165_22394,(1),null);
var b_22397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22165_22394,(2),null);
gl.uniformMatrix4fv(gl.getUniformLocation(program,"u_mvp"),false,mvp_22388);

gl.uniform3f(gl.getUniformLocation(program,"u_color"),r_22395,g_22396,b_22397);

gl.bindVertexArray(vao_22392);

gl.drawElements(gl.TRIANGLES,index_count_22393,gl.UNSIGNED_INT,(0));


var G__22402 = cljs.core.next(seq__22140_22379__$1);
var G__22403 = null;
var G__22404 = (0);
var G__22405 = (0);
seq__22140_22354 = G__22402;
chunk__22141_22355 = G__22403;
count__22142_22356 = G__22404;
i__22143_22357 = G__22405;
continue;
}
} else {
}
}
break;
}

return gl.bindVertexArray(null);
});

/**
 * Render one fallback mesh frame.
 */
kami.webgl.render_mesh_frame_BANG_ = (function kami$webgl$render_mesh_frame_BANG_(viewport,buffers,mvp,color){
return kami.webgl.render_mesh_scene_BANG_(viewport,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"buffers","buffers",471409492),buffers,new cljs.core.Keyword(null,"mvp","mvp",-493676132),mvp,new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null));
});

kami.webgl.F4 = (4);

/**
 * Build a 2D-sprite draw fn for this WebGL2 context from the generated GLSL (sprite.vert/.frag).
 * The returned `(draw! quad-instances [w h])` packs + uploads the instances and issues one
 * instanced draw — the whole 2D frame in a single call, rendering the SDF shapes on the GPU.
 */
kami.webgl.sprite_renderer = (function kami$webgl$sprite_renderer(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22406 = arguments.length;
var i__5727__auto___22407 = (0);
while(true){
if((i__5727__auto___22407 < len__5726__auto___22406)){
args__5732__auto__.push((arguments[i__5727__auto___22407]));

var G__22408 = (i__5727__auto___22407 + (1));
i__5727__auto___22407 = G__22408;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return kami.webgl.sprite_renderer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(kami.webgl.sprite_renderer.cljs$core$IFn$_invoke$arity$variadic = (function (gl,p__22189){
var vec__22190 = p__22189;
var map__22193 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22190,(0),null);
var map__22193__$1 = cljs.core.__destructure_map(map__22193);
var vert = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22193__$1,new cljs.core.Keyword(null,"vert","vert",-360932977),kami.webgl.glsl.sprite_vert);
var frag = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22193__$1,new cljs.core.Keyword(null,"frag","frag",1474317943),kami.webgl.glsl.sprite_frag);
var prog = kami.webgl.program(gl,vert,frag);
var vao = gl.createVertexArray();
var ibuf = gl.createBuffer();
var ublk = gl.getUniformBlockIndex(prog,"U_block_0Vertex");
var ubuf = gl.createBuffer();
gl.bindVertexArray(vao);

gl.bindBuffer(gl.ARRAY_BUFFER,ibuf);

var stride_22414 = (48);
var attrs_22415 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1),(16)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(1),(20)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(4),(24)], null)], null);
var seq__22194_22417 = cljs.core.seq(attrs_22415);
var chunk__22195_22418 = null;
var count__22196_22419 = (0);
var i__22197_22420 = (0);
while(true){
if((i__22197_22420 < count__22196_22419)){
var vec__22207_22421 = chunk__22195_22418.cljs$core$IIndexed$_nth$arity$2(null, i__22197_22420);
var loc_22422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22207_22421,(0),null);
var n_22423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22207_22421,(1),null);
var off_22424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22207_22421,(2),null);
gl.enableVertexAttribArray(loc_22422);

gl.vertexAttribPointer(loc_22422,n_22423,gl.FLOAT,false,stride_22414,off_22424);

gl.vertexAttribDivisor(loc_22422,(1));


var G__22425 = seq__22194_22417;
var G__22426 = chunk__22195_22418;
var G__22427 = count__22196_22419;
var G__22428 = (i__22197_22420 + (1));
seq__22194_22417 = G__22425;
chunk__22195_22418 = G__22426;
count__22196_22419 = G__22427;
i__22197_22420 = G__22428;
continue;
} else {
var temp__5825__auto___22429 = cljs.core.seq(seq__22194_22417);
if(temp__5825__auto___22429){
var seq__22194_22432__$1 = temp__5825__auto___22429;
if(cljs.core.chunked_seq_QMARK_(seq__22194_22432__$1)){
var c__5525__auto___22435 = cljs.core.chunk_first(seq__22194_22432__$1);
var G__22436 = cljs.core.chunk_rest(seq__22194_22432__$1);
var G__22437 = c__5525__auto___22435;
var G__22438 = cljs.core.count(c__5525__auto___22435);
var G__22439 = (0);
seq__22194_22417 = G__22436;
chunk__22195_22418 = G__22437;
count__22196_22419 = G__22438;
i__22197_22420 = G__22439;
continue;
} else {
var vec__22210_22440 = cljs.core.first(seq__22194_22432__$1);
var loc_22441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22210_22440,(0),null);
var n_22442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22210_22440,(1),null);
var off_22443 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22210_22440,(2),null);
gl.enableVertexAttribArray(loc_22441);

gl.vertexAttribPointer(loc_22441,n_22442,gl.FLOAT,false,stride_22414,off_22443);

gl.vertexAttribDivisor(loc_22441,(1));


var G__22446 = cljs.core.next(seq__22194_22432__$1);
var G__22447 = null;
var G__22448 = (0);
var G__22449 = (0);
seq__22194_22417 = G__22446;
chunk__22195_22418 = G__22447;
count__22196_22419 = G__22448;
i__22197_22420 = G__22449;
continue;
}
} else {
}
}
break;
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ublk,gl.INVALID_INDEX)){
gl.uniformBlockBinding(prog,ublk,(0));
} else {
}

gl.bindVertexArray(null);

return (function kami$webgl$draw_BANG_(quad_instances,p__22216){
var vec__22217 = p__22216;
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22217,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22217,(1),null);
var data = (new Float32Array(cljs.core.clj__GT_js(kami.sprite_gpu.pack_instances(quad_instances))));
var n = cljs.core.count(quad_instances);
gl.useProgram(prog);

gl.bindVertexArray(vao);

gl.bindBuffer(gl.ARRAY_BUFFER,ibuf);

gl.bufferData(gl.ARRAY_BUFFER,data,gl.DYNAMIC_DRAW);

gl.bindBuffer(gl.UNIFORM_BUFFER,ubuf);

gl.bufferData(gl.UNIFORM_BUFFER,(new Float32Array([w,h,(0),(0)])),gl.DYNAMIC_DRAW);

gl.bindBufferBase(gl.UNIFORM_BUFFER,(0),ubuf);

gl.enable(gl.BLEND);

gl.blendFunc(gl.ONE,gl.ONE_MINUS_SRC_ALPHA);

gl.drawArraysInstanced(gl.TRIANGLES,(0),(6),n);

return gl.bindVertexArray(null);
});
}));

(kami.webgl.sprite_renderer.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(kami.webgl.sprite_renderer.cljs$lang$applyTo = (function (seq22174){
var G__22175 = cljs.core.first(seq22174);
var seq22174__$1 = cljs.core.next(seq22174);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22175,seq22174__$1);
}));


/**
 * Render a 2D sprite frame on WebGL2: clear, then draw the quad instances (from
 * kami.sprite-gpu/draw-ops->quads) via the sprite pass. The :sprites pass has no kami.gpu
 * :requires, so it runs on this tier; compute passes in a richer graph are dropped by resolve.
 */
kami.webgl.render_2d_BANG_ = (function kami$webgl$render_2d_BANG_(gl,p__22222,quad_instances,p__22223){
var map__22224 = p__22222;
var map__22224__$1 = cljs.core.__destructure_map(map__22224);
var draw_sprites_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22224__$1,new cljs.core.Keyword(null,"draw-sprites!","draw-sprites!",-408140749));
var clear = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22224__$1,new cljs.core.Keyword(null,"clear","clear",1877104959));
var vec__22225 = p__22223;
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22225,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22225,(1),null);
gl.viewport((0),(0),w,h);

var vec__22229_22452 = (function (){var or__5002__auto__ = clear;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.04,0.05,0.08,1.0], null);
}
})();
var r_22453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22229_22452,(0),null);
var g_22454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22229_22452,(1),null);
var b_22455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22229_22452,(2),null);
var a_22456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22229_22452,(3),null);
gl.clearColor(r_22453,g_22454,b_22455,a_22456);

gl.clear(gl.COLOR_BUFFER_BIT);

var G__22232 = quad_instances;
var G__22233 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null);
return (draw_sprites_BANG_.cljs$core$IFn$_invoke$arity$2 ? draw_sprites_BANG_.cljs$core$IFn$_invoke$arity$2(G__22232,G__22233) : draw_sprites_BANG_.call(null, G__22232,G__22233));
});

kami.webgl.SHADOW_FS = "#version 300 es\nprecision highp float;\nvoid main() {}";

/**
 * Build a whole-2D-frame draw fn from the embedded GLSL: a sky gradient pass (fullscreen triangle)
 * then the instanced sprite/text quad pass. (render! {:sky {:zenith :ground} :quads [...]} [w h])
 * draws the full kami.scene2d frame on the GPU — the Canvas2D draw-2d! replacement.
 */
kami.webgl.scene_renderer = (function kami$webgl$scene_renderer(gl){
var sky_prog = kami.webgl.program(gl,kami.webgl.glsl.sky_vert,kami.webgl.glsl.sky_frag);
var sky_ub = gl.createBuffer();
var sky_blk = gl.getUniformBlockIndex(sky_prog,"SU_block_0Fragment");
var draw_BANG_ = kami.webgl.sprite_renderer(gl);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sky_blk,gl.INVALID_INDEX)){
gl.uniformBlockBinding(sky_prog,sky_blk,(0));
} else {
}

return (function kami$webgl$scene_renderer_$_render_frame_BANG_(p__22242,p__22243){
var map__22244 = p__22242;
var map__22244__$1 = cljs.core.__destructure_map(map__22244);
var sky = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22244__$1,new cljs.core.Keyword(null,"sky","sky",1271496862));
var quads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22244__$1,new cljs.core.Keyword(null,"quads","quads",1347497505));
var vec__22245 = p__22243;
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22245,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22245,(1),null);
gl.viewport((0),(0),w,h);

gl.useProgram(sky_prog);

gl.bindBuffer(gl.UNIFORM_BUFFER,sky_ub);

gl.bufferData(gl.UNIFORM_BUFFER,(new Float32Array(cljs.core.clj__GT_js(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"zenith","zenith",1165769957).cljs$core$IFn$_invoke$arity$1(sky),new cljs.core.Keyword(null,"ground","ground",1193572934).cljs$core$IFn$_invoke$arity$1(sky))))),gl.DYNAMIC_DRAW);

gl.bindBufferBase(gl.UNIFORM_BUFFER,(0),sky_ub);

gl.disable(gl.BLEND);

gl.drawArrays(gl.TRIANGLES,(0),(3));

return draw_BANG_(quads,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
});
});

kami.webgl.mesh_vao = (function kami$webgl$mesh_vao(gl,vbuf,ibuf,inst){
var vao = gl.createVertexArray();
gl.bindVertexArray(vao);

gl.bindBuffer(gl.ARRAY_BUFFER,vbuf);

var seq__22248_22471 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(12)], null)], null));
var chunk__22249_22472 = null;
var count__22250_22473 = (0);
var i__22251_22474 = (0);
while(true){
if((i__22251_22474 < count__22250_22473)){
var vec__22260_22475 = chunk__22249_22472.cljs$core$IIndexed$_nth$arity$2(null, i__22251_22474);
var loc_22476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22260_22475,(0),null);
var off_22477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22260_22475,(1),null);
gl.enableVertexAttribArray(loc_22476);

gl.vertexAttribPointer(loc_22476,(3),gl.FLOAT,false,(24),off_22477);


var G__22478 = seq__22248_22471;
var G__22479 = chunk__22249_22472;
var G__22480 = count__22250_22473;
var G__22481 = (i__22251_22474 + (1));
seq__22248_22471 = G__22478;
chunk__22249_22472 = G__22479;
count__22250_22473 = G__22480;
i__22251_22474 = G__22481;
continue;
} else {
var temp__5825__auto___22482 = cljs.core.seq(seq__22248_22471);
if(temp__5825__auto___22482){
var seq__22248_22483__$1 = temp__5825__auto___22482;
if(cljs.core.chunked_seq_QMARK_(seq__22248_22483__$1)){
var c__5525__auto___22484 = cljs.core.chunk_first(seq__22248_22483__$1);
var G__22486 = cljs.core.chunk_rest(seq__22248_22483__$1);
var G__22487 = c__5525__auto___22484;
var G__22488 = cljs.core.count(c__5525__auto___22484);
var G__22489 = (0);
seq__22248_22471 = G__22486;
chunk__22249_22472 = G__22487;
count__22250_22473 = G__22488;
i__22251_22474 = G__22489;
continue;
} else {
var vec__22264_22490 = cljs.core.first(seq__22248_22483__$1);
var loc_22491 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22264_22490,(0),null);
var off_22492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22264_22490,(1),null);
gl.enableVertexAttribArray(loc_22491);

gl.vertexAttribPointer(loc_22491,(3),gl.FLOAT,false,(24),off_22492);


var G__22494 = cljs.core.next(seq__22248_22483__$1);
var G__22495 = null;
var G__22496 = (0);
var G__22497 = (0);
seq__22248_22471 = G__22494;
chunk__22249_22472 = G__22495;
count__22250_22473 = G__22496;
i__22251_22474 = G__22497;
continue;
}
} else {
}
}
break;
}

gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,ibuf);

gl.bindBuffer(gl.ARRAY_BUFFER,inst);

var seq__22267_22498 = cljs.core.seq(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(16)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(32)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(48)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(64)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(80)], null)], null));
var chunk__22268_22499 = null;
var count__22269_22500 = (0);
var i__22270_22501 = (0);
while(true){
if((i__22270_22501 < count__22269_22500)){
var vec__22279_22502 = chunk__22268_22499.cljs$core$IIndexed$_nth$arity$2(null, i__22270_22501);
var loc_22503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22279_22502,(0),null);
var off_22504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22279_22502,(1),null);
gl.enableVertexAttribArray(loc_22503);

gl.vertexAttribPointer(loc_22503,(4),gl.FLOAT,false,(96),off_22504);

gl.vertexAttribDivisor(loc_22503,(1));


var G__22508 = seq__22267_22498;
var G__22509 = chunk__22268_22499;
var G__22510 = count__22269_22500;
var G__22511 = (i__22270_22501 + (1));
seq__22267_22498 = G__22508;
chunk__22268_22499 = G__22509;
count__22269_22500 = G__22510;
i__22270_22501 = G__22511;
continue;
} else {
var temp__5825__auto___22512 = cljs.core.seq(seq__22267_22498);
if(temp__5825__auto___22512){
var seq__22267_22516__$1 = temp__5825__auto___22512;
if(cljs.core.chunked_seq_QMARK_(seq__22267_22516__$1)){
var c__5525__auto___22517 = cljs.core.chunk_first(seq__22267_22516__$1);
var G__22518 = cljs.core.chunk_rest(seq__22267_22516__$1);
var G__22519 = c__5525__auto___22517;
var G__22520 = cljs.core.count(c__5525__auto___22517);
var G__22521 = (0);
seq__22267_22498 = G__22518;
chunk__22268_22499 = G__22519;
count__22269_22500 = G__22520;
i__22270_22501 = G__22521;
continue;
} else {
var vec__22283_22522 = cljs.core.first(seq__22267_22516__$1);
var loc_22523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22283_22522,(0),null);
var off_22524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22283_22522,(1),null);
gl.enableVertexAttribArray(loc_22523);

gl.vertexAttribPointer(loc_22523,(4),gl.FLOAT,false,(96),off_22524);

gl.vertexAttribDivisor(loc_22523,(1));


var G__22535 = cljs.core.next(seq__22267_22516__$1);
var G__22536 = null;
var G__22537 = (0);
var G__22538 = (0);
seq__22267_22498 = G__22535;
chunk__22268_22499 = G__22536;
count__22269_22500 = G__22537;
i__22270_22501 = G__22538;
continue;
}
} else {
}
}
break;
}

gl.bindVertexArray(null);

return vao;
});

kami.webgl.depth_fbo = (function kami$webgl$depth_fbo(gl,size){
var tex = gl.createTexture();
var fbo = gl.createFramebuffer();
gl.bindTexture(gl.TEXTURE_2D,tex);

gl.texImage2D(gl.TEXTURE_2D,(0),gl.DEPTH_COMPONENT32F,size,size,(0),gl.DEPTH_COMPONENT,gl.FLOAT,null);

var seq__22286_22554 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl.TEXTURE_MIN_FILTER,gl.LINEAR], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl.TEXTURE_MAG_FILTER,gl.LINEAR], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl.TEXTURE_COMPARE_MODE,gl.COMPARE_REF_TO_TEXTURE], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl.TEXTURE_COMPARE_FUNC,gl.LEQUAL], null)], null));
var chunk__22287_22555 = null;
var count__22288_22556 = (0);
var i__22289_22557 = (0);
while(true){
if((i__22289_22557 < count__22288_22556)){
var vec__22296_22563 = chunk__22287_22555.cljs$core$IIndexed$_nth$arity$2(null, i__22289_22557);
var k_22564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22296_22563,(0),null);
var v_22565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22296_22563,(1),null);
gl.texParameteri(gl.TEXTURE_2D,k_22564,v_22565);


var G__22570 = seq__22286_22554;
var G__22571 = chunk__22287_22555;
var G__22572 = count__22288_22556;
var G__22573 = (i__22289_22557 + (1));
seq__22286_22554 = G__22570;
chunk__22287_22555 = G__22571;
count__22288_22556 = G__22572;
i__22289_22557 = G__22573;
continue;
} else {
var temp__5825__auto___22578 = cljs.core.seq(seq__22286_22554);
if(temp__5825__auto___22578){
var seq__22286_22580__$1 = temp__5825__auto___22578;
if(cljs.core.chunked_seq_QMARK_(seq__22286_22580__$1)){
var c__5525__auto___22585 = cljs.core.chunk_first(seq__22286_22580__$1);
var G__22588 = cljs.core.chunk_rest(seq__22286_22580__$1);
var G__22589 = c__5525__auto___22585;
var G__22590 = cljs.core.count(c__5525__auto___22585);
var G__22591 = (0);
seq__22286_22554 = G__22588;
chunk__22287_22555 = G__22589;
count__22288_22556 = G__22590;
i__22289_22557 = G__22591;
continue;
} else {
var vec__22299_22592 = cljs.core.first(seq__22286_22580__$1);
var k_22593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22299_22592,(0),null);
var v_22594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22299_22592,(1),null);
gl.texParameteri(gl.TEXTURE_2D,k_22593,v_22594);


var G__22595 = cljs.core.next(seq__22286_22580__$1);
var G__22596 = null;
var G__22597 = (0);
var G__22598 = (0);
seq__22286_22554 = G__22595;
chunk__22287_22555 = G__22596;
count__22288_22556 = G__22597;
i__22289_22557 = G__22598;
continue;
}
} else {
}
}
break;
}

gl.bindFramebuffer(gl.FRAMEBUFFER,fbo);

gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.DEPTH_ATTACHMENT,gl.TEXTURE_2D,tex,(0));

gl.bindFramebuffer(gl.FRAMEBUFFER,null);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tex","tex",1307057959),tex,new cljs.core.Keyword(null,"fbo","fbo",265702356),fbo,new cljs.core.Keyword(null,"size","size",1098693007),size], null);
});

/**
 * Build the 3D lit+shadow draw for this WebGL2 context. `shaders` {:lit {:vert :frag} :shadow {:vert}}
 * are the GLSL ES 3.00 from bb gen-glsl. Returns (draw! packed-G mesh instances [w h]) where mesh is
 * {:vbuf :ibuf :count}, instances a Float32Array (24 f32/instance) with metadata :count on the map
 * passed as the 3rd-arg wrapper {:buf :count}.
 */
kami.webgl.lit_renderer = (function kami$webgl$lit_renderer(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22606 = arguments.length;
var i__5727__auto___22608 = (0);
while(true){
if((i__5727__auto___22608 < len__5726__auto___22606)){
args__5732__auto__.push((arguments[i__5727__auto___22608]));

var G__22610 = (i__5727__auto___22608 + (1));
i__5727__auto___22608 = G__22610;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return kami.webgl.lit_renderer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(kami.webgl.lit_renderer.cljs$core$IFn$_invoke$arity$variadic = (function (gl,shaders,p__22307){
var vec__22308 = p__22307;
var map__22311 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22308,(0),null);
var map__22311__$1 = cljs.core.__destructure_map(map__22311);
var shadow_size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22311__$1,new cljs.core.Keyword(null,"shadow-size","shadow-size",-1197814709),(2048));
var lit_p = kami.webgl.program(gl,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shaders,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lit","lit",-561435380),new cljs.core.Keyword(null,"vert","vert",-360932977)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shaders,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lit","lit",-561435380),new cljs.core.Keyword(null,"frag","frag",1474317943)], null)));
var shd_p = kami.webgl.program(gl,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shaders,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"vert","vert",-360932977)], null)),kami.webgl.SHADOW_FS);
var sm = kami.webgl.depth_fbo(gl,shadow_size);
var gbuf = gl.createBuffer();
var ibuf = gl.createBuffer();
var bind_g = (function (prog,n){
var i = gl.getUniformBlockIndex(prog,n);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(i,gl.INVALID_INDEX)){
return gl.uniformBlockBinding(prog,i,(0));
} else {
return null;
}
});
bind_g(lit_p,"G_block_0Vertex");

bind_g(lit_p,"G_block_0Fragment");

bind_g(shd_p,"G_block_0Vertex");

return (function kami$webgl$draw_BANG_(packed_G,mesh,instances,p__22312){
var vec__22313 = p__22312;
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22313,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22313,(1),null);
gl.bindBuffer(gl.UNIFORM_BUFFER,gbuf);

gl.bufferData(gl.UNIFORM_BUFFER,packed_G,gl.DYNAMIC_DRAW);

gl.bindBufferBase(gl.UNIFORM_BUFFER,(0),gbuf);

gl.bindBuffer(gl.ARRAY_BUFFER,ibuf);

gl.bufferData(gl.ARRAY_BUFFER,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(instances),gl.DYNAMIC_DRAW);

var vao = kami.webgl.mesh_vao(gl,new cljs.core.Keyword(null,"vbuf","vbuf",303950747).cljs$core$IFn$_invoke$arity$1(mesh),new cljs.core.Keyword(null,"ibuf","ibuf",801056512).cljs$core$IFn$_invoke$arity$1(mesh),ibuf);
var n = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(instances);
gl.enable(gl.DEPTH_TEST);

gl.bindFramebuffer(gl.FRAMEBUFFER,new cljs.core.Keyword(null,"fbo","fbo",265702356).cljs$core$IFn$_invoke$arity$1(sm));

gl.viewport((0),(0),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(sm),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(sm));

gl.clear(gl.DEPTH_BUFFER_BIT);

gl.useProgram(shd_p);

gl.bindVertexArray(vao);

gl.drawElementsInstanced(gl.TRIANGLES,new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(mesh),gl.UNSIGNED_SHORT,(0),n);

gl.bindFramebuffer(gl.FRAMEBUFFER,null);

gl.viewport((0),(0),w,h);

gl.clear((gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT));

gl.useProgram(lit_p);

gl.activeTexture(gl.TEXTURE0);

gl.bindTexture(gl.TEXTURE_2D,new cljs.core.Keyword(null,"tex","tex",1307057959).cljs$core$IFn$_invoke$arity$1(sm));

gl.uniform1i(gl.getUniformLocation(lit_p,"_group_0_binding_1_fs"),(0));

gl.drawElementsInstanced(gl.TRIANGLES,new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(mesh),gl.UNSIGNED_SHORT,(0),n);

return gl.bindVertexArray(null);
});
}));

(kami.webgl.lit_renderer.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(kami.webgl.lit_renderer.cljs$lang$applyTo = (function (seq22304){
var G__22305 = cljs.core.first(seq22304);
var seq22304__$1 = cljs.core.next(seq22304);
var G__22306 = cljs.core.first(seq22304__$1);
var seq22304__$2 = cljs.core.next(seq22304__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22305,G__22306,seq22304__$2);
}));


//# sourceMappingURL=kami.webgl.js.map

// Compiled by ClojureScript 0.0-2850 {}
goog.provide('om_dev_tools.instrumentation');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('om_tools.core');
goog.require('om.core');
goog.require('cljs_time.format');
goog.require('cljs_time.core');
om_dev_tools.instrumentation.react_id = (function react_id(x){
var id = (x["_rootNodeID"]);
if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"id","id",252129435,null)], 0)))].join('')));
}

return id;
});
/**
* Tracks last call time of componentWillUpdate for each component, then calls
* the original componentWillUpdate.
*/
om_dev_tools.instrumentation.wrap_will_update = (function wrap_will_update(state,f){
return (function (next_props,next_state){
var this$ = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$227,om_dev_tools.instrumentation.react_id(this$)], null),((function (this$){
return (function (p1__21224_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__21224_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$228,(this$["getDisplayName"]).call(null),cljs.core.constant$keyword$229,cljs_time.core.now()], null)], 0));
});})(this$))
);

return f.call(this$,next_props,next_state);
});
});
/**
* Tracks last call time of componentDidUpdate for each component and updates
* the render times (using start time provided by wrap-will-update), then
* calls the original componentDidUpdate.
*/
om_dev_tools.instrumentation.wrap_did_update = (function wrap_did_update(state,f){
return (function (prev_props,prev_state){
var this$ = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$227,om_dev_tools.instrumentation.react_id(this$)], null),((function (this$){
return (function (stats){
var now = cljs_time.core.now();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(stats,cljs.core.constant$keyword$230,now),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$231], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),(cljs.core.truth_(cljs_time.core.after_QMARK_(now,cljs.core.constant$keyword$229.cljs$core$IFn$_invoke$arity$1(stats)))?cljs_time.core.in_millis(cljs_time.core.interval(cljs.core.constant$keyword$229.cljs$core$IFn$_invoke$arity$1(stats),now)):(0)));
});})(this$))
);

return f.call(this$,prev_props,prev_state);
});
});
om_dev_tools.instrumentation.instrumentation_methods = (function instrumentation_methods(state){
return om.core.specify_state_methods_BANG_(cljs.core.clj__GT_js(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(om.core.pure_methods,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$68], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(om_dev_tools.instrumentation.wrap_will_update,state)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$62], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(om_dev_tools.instrumentation.wrap_did_update,state))));
});
om_dev_tools.instrumentation.avg = (function avg(coll){
return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,coll) / cljs.core.count(coll));
});
om_dev_tools.instrumentation.std_dev = (function std_dev(coll){
var a = om_dev_tools.instrumentation.avg(coll);
var G__21229 = om_dev_tools.instrumentation.avg(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (a){
return (function (p1__21225_SHARP_){
var G__21230 = (p1__21225_SHARP_ - a);
var G__21231 = (2);
return (Math.pow.cljs$core$IFn$_invoke$arity$2 ? Math.pow.cljs$core$IFn$_invoke$arity$2(G__21230,G__21231) : Math.pow.call(null,G__21230,G__21231));
});})(a))
,coll));
return (Math.sqrt.cljs$core$IFn$_invoke$arity$1 ? Math.sqrt.cljs$core$IFn$_invoke$arity$1(G__21229) : Math.sqrt.call(null,G__21229));
});

var ufv___21287 = schema.utils.use_fn_validation;
var output_schema21233_21288 = schema.core.Any;
var input_schema21234_21289 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker21235_21290 = schema.core.checker(input_schema21234_21289);
var output_checker21236_21291 = schema.core.checker(output_schema21233_21288);
/**
* Inputs: [data owner]
*/
om_dev_tools.instrumentation.stats_view = ((function (ufv___21287,output_schema21233_21288,input_schema21234_21289,input_checker21235_21290,output_checker21236_21291){
return (function stats_view(G__21237,G__21238){
var validate__10780__auto__ = ufv___21287.get_cell();
if(cljs.core.truth_(validate__10780__auto__)){
var args__10781__auto___21292 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21237,G__21238], null);
var temp__4126__auto___21293 = (function (){var G__21263 = args__10781__auto___21292;
return (input_checker21235_21290.cljs$core$IFn$_invoke$arity$1 ? input_checker21235_21290.cljs$core$IFn$_invoke$arity$1(G__21263) : input_checker21235_21290.call(null,G__21263));
})();
if(cljs.core.truth_(temp__4126__auto___21293)){
var error__10782__auto___21294 = temp__4126__auto___21293;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"stats-view","stats-view",-814342528,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21294], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21294,cljs.core.constant$keyword$21,args__10781__auto___21292,cljs.core.constant$keyword$22,input_schema21234_21289,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

var o__10783__auto__ = (function (){var data = G__21237;
var owner = G__21238;
while(true){
if(typeof om_dev_tools.instrumentation.t21264 !== 'undefined'){
} else {

/**
* @constructor
*/
om_dev_tools.instrumentation.t21264 = (function (stats_view,output_checker21236,owner,data,output_schema21233,input_checker21235,validate__10780__auto__,input_schema21234,G__21238,G__21237,ufv__,meta21265){
this.stats_view = stats_view;
this.output_checker21236 = output_checker21236;
this.owner = owner;
this.data = data;
this.output_schema21233 = output_schema21233;
this.input_checker21235 = input_checker21235;
this.validate__10780__auto__ = validate__10780__auto__;
this.input_schema21234 = input_schema21234;
this.G__21238 = G__21238;
this.G__21237 = G__21237;
this.ufv__ = ufv__;
this.meta21265 = meta21265;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_dev_tools.instrumentation.t21264.prototype.om$core$IDisplayName$ = true;

om_dev_tools.instrumentation.t21264.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__10780__auto__,ufv___21287,output_schema21233_21288,input_schema21234_21289,input_checker21235_21290,output_checker21236_21291){
return (function (_){
var self__ = this;
var ___$1 = this;
return "stats-view";
});})(validate__10780__auto__,ufv___21287,output_schema21233_21288,input_schema21234_21289,input_checker21235_21290,output_checker21236_21291))
;

om_dev_tools.instrumentation.t21264.prototype.om$core$IRender$ = true;

om_dev_tools.instrumentation.t21264.prototype.om$core$IRender$render$arity$1 = ((function (validate__10780__auto__,ufv___21287,output_schema21233_21288,input_schema21234_21289,input_checker21235_21290,output_checker21236_21291){
return (function (_){
var self__ = this;
var ___$1 = this;
var attrs21267 = (cljs.core.truth_(om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$232))?null:(function (){var stats = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (___$1,validate__10780__auto__,ufv___21287,output_schema21233_21288,input_schema21234_21289,input_checker21235_21290,output_checker21236_21291){
return (function (p__21268){
var vec__21269 = p__21268;
var display_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21269,(0),null);
var renders = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21269,(1),null);
var times = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$231,cljs.core.array_seq([renders], 0));
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$228,(function (){var or__3815__auto__ = display_name;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return "Unknown";
}
})(),cljs.core.constant$keyword$233,cljs.core.count(times),cljs.core.constant$keyword$229,cljs.core.last(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$229,renders))),cljs.core.constant$keyword$234,cljs.core.last(cljs.core.constant$keyword$231.cljs$core$IFn$_invoke$arity$1(cljs.core.last(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$230,renders)))),cljs.core.constant$keyword$235,((cljs.core.seq(times))?(om_dev_tools.instrumentation.avg(times) | (0)):null),cljs.core.constant$keyword$236,((cljs.core.seq(times))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,times):null),cljs.core.constant$keyword$237,((cljs.core.seq(times))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,times):null),cljs.core.constant$keyword$238,((cljs.core.seq(times))?(om_dev_tools.instrumentation.std_dev(times) | (0)):null)], null);
});})(___$1,validate__10780__auto__,ufv___21287,output_schema21233_21288,input_schema21234_21289,input_checker21235_21290,output_checker21236_21291))
,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (___$1,validate__10780__auto__,ufv___21287,output_schema21233_21288,input_schema21234_21289,input_checker21235_21290,output_checker21236_21291){
return (function (acc,p__21270){
var vec__21271 = p__21270;
var react_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21271,(0),null);
var data__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21271,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$228.cljs$core$IFn$_invoke$arity$1(data__$1)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),data__$1);
});})(___$1,validate__10780__auto__,ufv___21287,output_schema21233_21288,input_schema21234_21289,input_checker21235_21290,output_checker21236_21291))
,cljs.core.PersistentArrayMap.EMPTY,self__.data));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$239,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"admin-stats"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$240,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$241,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$242,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$243,"component",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$244,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$245,((function (stats,___$1,validate__10780__auto__,ufv___21287,output_schema21233_21288,input_schema21234_21289,input_checker21235_21290,output_checker21236_21291){
return (function (){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(self__.data,cljs.core.constantly(cljs.core.PersistentArrayMap.EMPTY));
});})(stats,___$1,validate__10780__auto__,ufv___21287,output_schema21233_21288,input_schema21234_21289,input_checker21235_21290,output_checker21236_21291))
], null),"Clear"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$243,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),"count"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$243,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),"last-update"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$243,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),"last-ms"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$243,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),"average-ms"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$243,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),"max-ms"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$243,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),"min-ms"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$243,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),"std-ms"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,(function (){var iter__4571__auto__ = ((function (stats,___$1,validate__10780__auto__,ufv___21287,output_schema21233_21288,input_schema21234_21289,input_checker21235_21290,output_checker21236_21291){
return (function iter__21272(s__21273){
return (new cljs.core.LazySeq(null,((function (stats,___$1,validate__10780__auto__,ufv___21287,output_schema21233_21288,input_schema21234_21289,input_checker21235_21290,output_checker21236_21291){
return (function (){
var s__21273__$1 = s__21273;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__21273__$1);
if(temp__4126__auto__){
var s__21273__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21273__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__21273__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__21275 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__21274 = (0);
while(true){
if((i__21274 < size__4570__auto__)){
var map__21282 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__21274);
var map__21282__$1 = ((cljs.core.seq_QMARK_(map__21282))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21282):map__21282);
var stat = map__21282__$1;
var last_render_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21282__$1,cljs.core.constant$keyword$234);
var render_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21282__$1,cljs.core.constant$keyword$233);
var std_dev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21282__$1,cljs.core.constant$keyword$238);
var min_render_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21282__$1,cljs.core.constant$keyword$237);
var max_render_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21282__$1,cljs.core.constant$keyword$236);
var average_render_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21282__$1,cljs.core.constant$keyword$235);
var last_will_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21282__$1,cljs.core.constant$keyword$229);
var display_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21282__$1,cljs.core.constant$keyword$228);
cljs.core.chunk_append(b__21275,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$242,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$247,display_name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$247,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),render_count], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$247,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),(cljs.core.truth_(last_will_update)?cljs_time.format.unparse((function (){var G__21283 = cljs.core.constant$keyword$203;
return (cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1(G__21283) : cljs_time.format.formatters.call(null,G__21283));
})(),last_will_update):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$247,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),last_render_ms], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$247,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),average_render_ms], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$247,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),max_render_ms], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$247,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),min_render_ms], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$247,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),std_dev], null)], null));

var G__21295 = (i__21274 + (1));
i__21274 = G__21295;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21275),iter__21272(cljs.core.chunk_rest(s__21273__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21275),null);
}
} else {
var map__21284 = cljs.core.first(s__21273__$2);
var map__21284__$1 = ((cljs.core.seq_QMARK_(map__21284))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21284):map__21284);
var stat = map__21284__$1;
var last_render_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21284__$1,cljs.core.constant$keyword$234);
var render_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21284__$1,cljs.core.constant$keyword$233);
var std_dev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21284__$1,cljs.core.constant$keyword$238);
var min_render_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21284__$1,cljs.core.constant$keyword$237);
var max_render_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21284__$1,cljs.core.constant$keyword$236);
var average_render_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21284__$1,cljs.core.constant$keyword$235);
var last_will_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21284__$1,cljs.core.constant$keyword$229);
var display_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21284__$1,cljs.core.constant$keyword$228);
return cljs.core.cons(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$242,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$247,display_name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$247,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),render_count], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$247,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),(cljs.core.truth_(last_will_update)?cljs_time.format.unparse((function (){var G__21285 = cljs.core.constant$keyword$203;
return (cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1(G__21285) : cljs_time.format.formatters.call(null,G__21285));
})(),last_will_update):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$247,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),last_render_ms], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$247,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),average_render_ms], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$247,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),max_render_ms], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$247,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),min_render_ms], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$247,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),std_dev], null)], null),iter__21272(cljs.core.rest(s__21273__$2)));
}
} else {
return null;
}
break;
}
});})(stats,___$1,validate__10780__auto__,ufv___21287,output_schema21233_21288,input_schema21234_21289,input_checker21235_21290,output_checker21236_21291))
,null,null));
});})(stats,___$1,validate__10780__auto__,ufv___21287,output_schema21233_21288,input_schema21234_21289,input_checker21235_21290,output_checker21236_21291))
;
return iter__4571__auto__(cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$229,stats)));
})()], null)], null)], null);
})());
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs21267))?sablono.interpreter.attributes(attrs21267):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21267))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21267)], null))));
});})(validate__10780__auto__,ufv___21287,output_schema21233_21288,input_schema21234_21289,input_checker21235_21290,output_checker21236_21291))
;

om_dev_tools.instrumentation.t21264.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__10780__auto__,ufv___21287,output_schema21233_21288,input_schema21234_21289,input_checker21235_21290,output_checker21236_21291){
return (function (_21266){
var self__ = this;
var _21266__$1 = this;
return self__.meta21265;
});})(validate__10780__auto__,ufv___21287,output_schema21233_21288,input_schema21234_21289,input_checker21235_21290,output_checker21236_21291))
;

om_dev_tools.instrumentation.t21264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__10780__auto__,ufv___21287,output_schema21233_21288,input_schema21234_21289,input_checker21235_21290,output_checker21236_21291){
return (function (_21266,meta21265__$1){
var self__ = this;
var _21266__$1 = this;
return (new om_dev_tools.instrumentation.t21264(self__.stats_view,self__.output_checker21236,self__.owner,self__.data,self__.output_schema21233,self__.input_checker21235,self__.validate__10780__auto__,self__.input_schema21234,self__.G__21238,self__.G__21237,self__.ufv__,meta21265__$1));
});})(validate__10780__auto__,ufv___21287,output_schema21233_21288,input_schema21234_21289,input_checker21235_21290,output_checker21236_21291))
;

om_dev_tools.instrumentation.t21264.cljs$lang$type = true;

om_dev_tools.instrumentation.t21264.cljs$lang$ctorStr = "om-dev-tools.instrumentation/t21264";

om_dev_tools.instrumentation.t21264.cljs$lang$ctorPrWriter = ((function (validate__10780__auto__,ufv___21287,output_schema21233_21288,input_schema21234_21289,input_checker21235_21290,output_checker21236_21291){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"om-dev-tools.instrumentation/t21264");
});})(validate__10780__auto__,ufv___21287,output_schema21233_21288,input_schema21234_21289,input_checker21235_21290,output_checker21236_21291))
;

om_dev_tools.instrumentation.__GT_t21264 = ((function (validate__10780__auto__,ufv___21287,output_schema21233_21288,input_schema21234_21289,input_checker21235_21290,output_checker21236_21291){
return (function __GT_t21264(stats_view__$1,output_checker21236__$1,owner__$1,data__$1,output_schema21233__$1,input_checker21235__$1,validate__10780__auto____$1,input_schema21234__$1,G__21238__$1,G__21237__$1,ufv____$1,meta21265){
return (new om_dev_tools.instrumentation.t21264(stats_view__$1,output_checker21236__$1,owner__$1,data__$1,output_schema21233__$1,input_checker21235__$1,validate__10780__auto____$1,input_schema21234__$1,G__21238__$1,G__21237__$1,ufv____$1,meta21265));
});})(validate__10780__auto__,ufv___21287,output_schema21233_21288,input_schema21234_21289,input_checker21235_21290,output_checker21236_21291))
;

}

return (new om_dev_tools.instrumentation.t21264(stats_view,output_checker21236_21291,owner,data,output_schema21233_21288,input_checker21235_21290,validate__10780__auto__,input_schema21234_21289,G__21238,G__21237,ufv___21287,null));
break;
}
})();
if(cljs.core.truth_(validate__10780__auto__)){
var temp__4126__auto___21296 = (function (){var G__21286 = o__10783__auto__;
return (output_checker21236_21291.cljs$core$IFn$_invoke$arity$1 ? output_checker21236_21291.cljs$core$IFn$_invoke$arity$1(G__21286) : output_checker21236_21291.call(null,G__21286));
})();
if(cljs.core.truth_(temp__4126__auto___21296)){
var error__10782__auto___21297 = temp__4126__auto___21296;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"stats-view","stats-view",-814342528,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21297], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21297,cljs.core.constant$keyword$21,o__10783__auto__,cljs.core.constant$keyword$22,output_schema21233_21288,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

return o__10783__auto__;
});})(ufv___21287,output_schema21233_21288,input_schema21234_21289,input_checker21235_21290,output_checker21236_21291))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_dev_tools.instrumentation.stats_view),schema.core.make_fn_schema(output_schema21233_21288,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21234_21289], null)));

om_dev_tools.instrumentation.__GT_stats_view = (function() {
var __GT_stats_view = null;
var __GT_stats_view__1 = (function (cursor__20840__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(om_dev_tools.instrumentation.stats_view,cursor__20840__auto__);
});
var __GT_stats_view__2 = (function (cursor__20840__auto__,m21232){
return om.core.build.cljs$core$IFn$_invoke$arity$3(om_dev_tools.instrumentation.stats_view,cursor__20840__auto__,m21232);
});
__GT_stats_view = function(cursor__20840__auto__,m21232){
switch(arguments.length){
case 1:
return __GT_stats_view__1.call(this,cursor__20840__auto__);
case 2:
return __GT_stats_view__2.call(this,cursor__20840__auto__,m21232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_stats_view.cljs$core$IFn$_invoke$arity$1 = __GT_stats_view__1;
__GT_stats_view.cljs$core$IFn$_invoke$arity$2 = __GT_stats_view__2;
return __GT_stats_view;
})()
;

var ufv___21322 = schema.utils.use_fn_validation;
var output_schema21299_21323 = schema.core.Any;
var input_schema21300_21324 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);
var input_checker21301_21325 = schema.core.checker(input_schema21300_21324);
var output_checker21302_21326 = schema.core.checker(output_schema21299_21323);
/**
* Inputs: [{:keys [component-stats]}]
*/
om_dev_tools.instrumentation.stats_panel = ((function (ufv___21322,output_schema21299_21323,input_schema21300_21324,input_checker21301_21325,output_checker21302_21326){
return (function stats_panel(G__21303){
var validate__10780__auto__ = ufv___21322.get_cell();
if(cljs.core.truth_(validate__10780__auto__)){
var args__10781__auto___21327 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21303], null);
var temp__4126__auto___21328 = (function (){var G__21313 = args__10781__auto___21327;
return (input_checker21301_21325.cljs$core$IFn$_invoke$arity$1 ? input_checker21301_21325.cljs$core$IFn$_invoke$arity$1(G__21313) : input_checker21301_21325.call(null,G__21313));
})();
if(cljs.core.truth_(temp__4126__auto___21328)){
var error__10782__auto___21329 = temp__4126__auto___21328;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"stats-panel","stats-panel",777336751,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21329], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21329,cljs.core.constant$keyword$21,args__10781__auto___21327,cljs.core.constant$keyword$22,input_schema21300_21324,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

var o__10783__auto__ = (function (){var G__21315 = G__21303;
var map__21316 = G__21315;
var map__21316__$1 = ((cljs.core.seq_QMARK_(map__21316))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21316):map__21316);
var component_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21316__$1,cljs.core.constant$keyword$227);
var G__21315__$1 = G__21315;
while(true){
var map__21317 = G__21315__$1;
var map__21317__$1 = ((cljs.core.seq_QMARK_(map__21317))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21317):map__21317);
var component_stats__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21317__$1,cljs.core.constant$keyword$227);
if(typeof om_dev_tools.instrumentation.t21318 !== 'undefined'){
} else {

/**
* @constructor
*/
om_dev_tools.instrumentation.t21318 = (function (component_stats,input_checker21301,map__21317,G__21303,stats_panel,map__21316,output_schema21299,G__21315,validate__10780__auto__,output_checker21302,input_schema21300,ufv__,meta21319){
this.component_stats = component_stats;
this.input_checker21301 = input_checker21301;
this.map__21317 = map__21317;
this.G__21303 = G__21303;
this.stats_panel = stats_panel;
this.map__21316 = map__21316;
this.output_schema21299 = output_schema21299;
this.G__21315 = G__21315;
this.validate__10780__auto__ = validate__10780__auto__;
this.output_checker21302 = output_checker21302;
this.input_schema21300 = input_schema21300;
this.ufv__ = ufv__;
this.meta21319 = meta21319;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_dev_tools.instrumentation.t21318.prototype.om$core$IDisplayName$ = true;

om_dev_tools.instrumentation.t21318.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__21317,map__21317__$1,component_stats__$1,G__21315,map__21316,map__21316__$1,component_stats,validate__10780__auto__,ufv___21322,output_schema21299_21323,input_schema21300_21324,input_checker21301_21325,output_checker21302_21326){
return (function (_){
var self__ = this;
var ___$1 = this;
return "stats-panel";
});})(map__21317,map__21317__$1,component_stats__$1,G__21315,map__21316,map__21316__$1,component_stats,validate__10780__auto__,ufv___21322,output_schema21299_21323,input_schema21300_21324,input_checker21301_21325,output_checker21302_21326))
;

om_dev_tools.instrumentation.t21318.prototype.om$core$IRender$ = true;

om_dev_tools.instrumentation.t21318.prototype.om$core$IRender$render$arity$1 = ((function (map__21317,map__21317__$1,component_stats__$1,G__21315,map__21316,map__21316__$1,component_stats,validate__10780__auto__,ufv___21322,output_schema21299_21323,input_schema21300_21324,input_checker21301_21325,output_checker21302_21326){
return (function (_){
var self__ = this;
var ___$1 = this;
return om.core.build.cljs$core$IFn$_invoke$arity$2(om_dev_tools.instrumentation.stats_view,self__.component_stats);
});})(map__21317,map__21317__$1,component_stats__$1,G__21315,map__21316,map__21316__$1,component_stats,validate__10780__auto__,ufv___21322,output_schema21299_21323,input_schema21300_21324,input_checker21301_21325,output_checker21302_21326))
;

om_dev_tools.instrumentation.t21318.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__21317,map__21317__$1,component_stats__$1,G__21315,map__21316,map__21316__$1,component_stats,validate__10780__auto__,ufv___21322,output_schema21299_21323,input_schema21300_21324,input_checker21301_21325,output_checker21302_21326){
return (function (_21320){
var self__ = this;
var _21320__$1 = this;
return self__.meta21319;
});})(map__21317,map__21317__$1,component_stats__$1,G__21315,map__21316,map__21316__$1,component_stats,validate__10780__auto__,ufv___21322,output_schema21299_21323,input_schema21300_21324,input_checker21301_21325,output_checker21302_21326))
;

om_dev_tools.instrumentation.t21318.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__21317,map__21317__$1,component_stats__$1,G__21315,map__21316,map__21316__$1,component_stats,validate__10780__auto__,ufv___21322,output_schema21299_21323,input_schema21300_21324,input_checker21301_21325,output_checker21302_21326){
return (function (_21320,meta21319__$1){
var self__ = this;
var _21320__$1 = this;
return (new om_dev_tools.instrumentation.t21318(self__.component_stats,self__.input_checker21301,self__.map__21317,self__.G__21303,self__.stats_panel,self__.map__21316,self__.output_schema21299,self__.G__21315,self__.validate__10780__auto__,self__.output_checker21302,self__.input_schema21300,self__.ufv__,meta21319__$1));
});})(map__21317,map__21317__$1,component_stats__$1,G__21315,map__21316,map__21316__$1,component_stats,validate__10780__auto__,ufv___21322,output_schema21299_21323,input_schema21300_21324,input_checker21301_21325,output_checker21302_21326))
;

om_dev_tools.instrumentation.t21318.cljs$lang$type = true;

om_dev_tools.instrumentation.t21318.cljs$lang$ctorStr = "om-dev-tools.instrumentation/t21318";

om_dev_tools.instrumentation.t21318.cljs$lang$ctorPrWriter = ((function (map__21317,map__21317__$1,component_stats__$1,G__21315,map__21316,map__21316__$1,component_stats,validate__10780__auto__,ufv___21322,output_schema21299_21323,input_schema21300_21324,input_checker21301_21325,output_checker21302_21326){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"om-dev-tools.instrumentation/t21318");
});})(map__21317,map__21317__$1,component_stats__$1,G__21315,map__21316,map__21316__$1,component_stats,validate__10780__auto__,ufv___21322,output_schema21299_21323,input_schema21300_21324,input_checker21301_21325,output_checker21302_21326))
;

om_dev_tools.instrumentation.__GT_t21318 = ((function (map__21317,map__21317__$1,component_stats__$1,G__21315,map__21316,map__21316__$1,component_stats,validate__10780__auto__,ufv___21322,output_schema21299_21323,input_schema21300_21324,input_checker21301_21325,output_checker21302_21326){
return (function __GT_t21318(component_stats__$2,input_checker21301__$1,map__21317__$2,G__21303__$1,stats_panel__$1,map__21316__$2,output_schema21299__$1,G__21315__$2,validate__10780__auto____$1,output_checker21302__$1,input_schema21300__$1,ufv____$1,meta21319){
return (new om_dev_tools.instrumentation.t21318(component_stats__$2,input_checker21301__$1,map__21317__$2,G__21303__$1,stats_panel__$1,map__21316__$2,output_schema21299__$1,G__21315__$2,validate__10780__auto____$1,output_checker21302__$1,input_schema21300__$1,ufv____$1,meta21319));
});})(map__21317,map__21317__$1,component_stats__$1,G__21315,map__21316,map__21316__$1,component_stats,validate__10780__auto__,ufv___21322,output_schema21299_21323,input_schema21300_21324,input_checker21301_21325,output_checker21302_21326))
;

}

return (new om_dev_tools.instrumentation.t21318(component_stats__$1,input_checker21301_21325,map__21317__$1,G__21303,stats_panel,map__21316__$1,output_schema21299_21323,G__21315__$1,validate__10780__auto__,output_checker21302_21326,input_schema21300_21324,ufv___21322,null));
break;
}
})();
if(cljs.core.truth_(validate__10780__auto__)){
var temp__4126__auto___21330 = (function (){var G__21321 = o__10783__auto__;
return (output_checker21302_21326.cljs$core$IFn$_invoke$arity$1 ? output_checker21302_21326.cljs$core$IFn$_invoke$arity$1(G__21321) : output_checker21302_21326.call(null,G__21321));
})();
if(cljs.core.truth_(temp__4126__auto___21330)){
var error__10782__auto___21331 = temp__4126__auto___21330;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"stats-panel","stats-panel",777336751,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21331], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21331,cljs.core.constant$keyword$21,o__10783__auto__,cljs.core.constant$keyword$22,output_schema21299_21323,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

return o__10783__auto__;
});})(ufv___21322,output_schema21299_21323,input_schema21300_21324,input_checker21301_21325,output_checker21302_21326))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_dev_tools.instrumentation.stats_panel),schema.core.make_fn_schema(output_schema21299_21323,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21300_21324], null)));

om_dev_tools.instrumentation.__GT_stats_panel = (function() {
var __GT_stats_panel = null;
var __GT_stats_panel__1 = (function (cursor__20840__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(om_dev_tools.instrumentation.stats_panel,cursor__20840__auto__);
});
var __GT_stats_panel__2 = (function (cursor__20840__auto__,m21298){
return om.core.build.cljs$core$IFn$_invoke$arity$3(om_dev_tools.instrumentation.stats_panel,cursor__20840__auto__,m21298);
});
__GT_stats_panel = function(cursor__20840__auto__,m21298){
switch(arguments.length){
case 1:
return __GT_stats_panel__1.call(this,cursor__20840__auto__);
case 2:
return __GT_stats_panel__2.call(this,cursor__20840__auto__,m21298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_stats_panel.cljs$core$IFn$_invoke$arity$1 = __GT_stats_panel__1;
__GT_stats_panel.cljs$core$IFn$_invoke$arity$2 = __GT_stats_panel__2;
return __GT_stats_panel;
})()
;

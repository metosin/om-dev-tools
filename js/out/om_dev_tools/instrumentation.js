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
om_dev_tools.instrumentation.wrap_will_update = (function wrap_will_update(cursor,f){
return (function (next_props,next_state){
var this$ = this;
om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_dev_tools.instrumentation.react_id(this$)], null),((function (this$){
return (function (p1__21171_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__21171_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$227,(this$["getDisplayName"]).call(null),cljs.core.constant$keyword$228,cljs_time.core.now()], null)], 0));
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
om_dev_tools.instrumentation.wrap_did_update = (function wrap_did_update(cursor,f){
return (function (prev_props,prev_state){
var this$ = this;
om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_dev_tools.instrumentation.react_id(this$)], null),((function (this$){
return (function (stats){
var now = cljs_time.core.now();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(stats,cljs.core.constant$keyword$229,now),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$230], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),(cljs.core.truth_(cljs_time.core.after_QMARK_(now,cljs.core.constant$keyword$228.cljs$core$IFn$_invoke$arity$1(stats)))?cljs_time.core.in_millis(cljs_time.core.interval(cljs.core.constant$keyword$228.cljs$core$IFn$_invoke$arity$1(stats),now)):(0)));
});})(this$))
);

return f.call(this$,prev_props,prev_state);
});
});
om_dev_tools.instrumentation.instrumentation_methods = (function instrumentation_methods(cursor){
return om.core.specify_state_methods_BANG_(cljs.core.clj__GT_js(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(om.core.pure_methods,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$68], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(om_dev_tools.instrumentation.wrap_will_update,cursor)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$62], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(om_dev_tools.instrumentation.wrap_did_update,cursor))));
});
om_dev_tools.instrumentation.avg = (function avg(coll){
return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,coll) / cljs.core.count(coll));
});
om_dev_tools.instrumentation.std_dev = (function std_dev(coll){
var a = om_dev_tools.instrumentation.avg(coll);
var G__21176 = om_dev_tools.instrumentation.avg(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (a){
return (function (p1__21172_SHARP_){
var G__21177 = (p1__21172_SHARP_ - a);
var G__21178 = (2);
return (Math.pow.cljs$core$IFn$_invoke$arity$2 ? Math.pow.cljs$core$IFn$_invoke$arity$2(G__21177,G__21178) : Math.pow.call(null,G__21177,G__21178));
});})(a))
,coll));
return (Math.sqrt.cljs$core$IFn$_invoke$arity$1 ? Math.sqrt.cljs$core$IFn$_invoke$arity$1(G__21176) : Math.sqrt.call(null,G__21176));
});

var ufv___21234 = schema.utils.use_fn_validation;
var output_schema21180_21235 = schema.core.Any;
var input_schema21181_21236 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker21182_21237 = schema.core.checker(input_schema21181_21236);
var output_checker21183_21238 = schema.core.checker(output_schema21180_21235);
/**
* Inputs: [data owner]
*/
om_dev_tools.instrumentation.stats_view = ((function (ufv___21234,output_schema21180_21235,input_schema21181_21236,input_checker21182_21237,output_checker21183_21238){
return (function stats_view(G__21184,G__21185){
var validate__10780__auto__ = ufv___21234.get_cell();
if(cljs.core.truth_(validate__10780__auto__)){
var args__10781__auto___21239 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21184,G__21185], null);
var temp__4126__auto___21240 = (function (){var G__21210 = args__10781__auto___21239;
return (input_checker21182_21237.cljs$core$IFn$_invoke$arity$1 ? input_checker21182_21237.cljs$core$IFn$_invoke$arity$1(G__21210) : input_checker21182_21237.call(null,G__21210));
})();
if(cljs.core.truth_(temp__4126__auto___21240)){
var error__10782__auto___21241 = temp__4126__auto___21240;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"stats-view","stats-view",-814342528,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21241], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21241,cljs.core.constant$keyword$21,args__10781__auto___21239,cljs.core.constant$keyword$22,input_schema21181_21236,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

var o__10783__auto__ = (function (){var data = G__21184;
var owner = G__21185;
while(true){
if(typeof om_dev_tools.instrumentation.t21211 !== 'undefined'){
} else {

/**
* @constructor
*/
om_dev_tools.instrumentation.t21211 = (function (stats_view,G__21185,output_schema21180,owner,data,input_schema21181,G__21184,validate__10780__auto__,input_checker21182,ufv__,output_checker21183,meta21212){
this.stats_view = stats_view;
this.G__21185 = G__21185;
this.output_schema21180 = output_schema21180;
this.owner = owner;
this.data = data;
this.input_schema21181 = input_schema21181;
this.G__21184 = G__21184;
this.validate__10780__auto__ = validate__10780__auto__;
this.input_checker21182 = input_checker21182;
this.ufv__ = ufv__;
this.output_checker21183 = output_checker21183;
this.meta21212 = meta21212;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_dev_tools.instrumentation.t21211.prototype.om$core$IDisplayName$ = true;

om_dev_tools.instrumentation.t21211.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__10780__auto__,ufv___21234,output_schema21180_21235,input_schema21181_21236,input_checker21182_21237,output_checker21183_21238){
return (function (_){
var self__ = this;
var ___$1 = this;
return "stats-view";
});})(validate__10780__auto__,ufv___21234,output_schema21180_21235,input_schema21181_21236,input_checker21182_21237,output_checker21183_21238))
;

om_dev_tools.instrumentation.t21211.prototype.om$core$IRender$ = true;

om_dev_tools.instrumentation.t21211.prototype.om$core$IRender$render$arity$1 = ((function (validate__10780__auto__,ufv___21234,output_schema21180_21235,input_schema21181_21236,input_checker21182_21237,output_checker21183_21238){
return (function (_){
var self__ = this;
var ___$1 = this;
var attrs21214 = (cljs.core.truth_(om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$231))?null:(function (){var stats = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (___$1,validate__10780__auto__,ufv___21234,output_schema21180_21235,input_schema21181_21236,input_checker21182_21237,output_checker21183_21238){
return (function (p__21215){
var vec__21216 = p__21215;
var display_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21216,(0),null);
var renders = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21216,(1),null);
var times = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$230,cljs.core.array_seq([renders], 0));
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$227,(function (){var or__3815__auto__ = display_name;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return "Unknown";
}
})(),cljs.core.constant$keyword$232,cljs.core.count(times),cljs.core.constant$keyword$228,cljs.core.last(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$228,renders))),cljs.core.constant$keyword$233,cljs.core.last(cljs.core.constant$keyword$230.cljs$core$IFn$_invoke$arity$1(cljs.core.last(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$229,renders)))),cljs.core.constant$keyword$234,((cljs.core.seq(times))?(om_dev_tools.instrumentation.avg(times) | (0)):null),cljs.core.constant$keyword$235,((cljs.core.seq(times))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,times):null),cljs.core.constant$keyword$236,((cljs.core.seq(times))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,times):null),cljs.core.constant$keyword$237,((cljs.core.seq(times))?(om_dev_tools.instrumentation.std_dev(times) | (0)):null)], null);
});})(___$1,validate__10780__auto__,ufv___21234,output_schema21180_21235,input_schema21181_21236,input_checker21182_21237,output_checker21183_21238))
,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (___$1,validate__10780__auto__,ufv___21234,output_schema21180_21235,input_schema21181_21236,input_checker21182_21237,output_checker21183_21238){
return (function (acc,p__21217){
var vec__21218 = p__21217;
var react_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21218,(0),null);
var data__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21218,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$227.cljs$core$IFn$_invoke$arity$1(data__$1)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),data__$1);
});})(___$1,validate__10780__auto__,ufv___21234,output_schema21180_21235,input_schema21181_21236,input_checker21182_21237,output_checker21183_21238))
,cljs.core.PersistentArrayMap.EMPTY,self__.data));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$238,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"admin-stats"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$239,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$240,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$241,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$242,"component",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$243,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$244,((function (stats,___$1,validate__10780__auto__,ufv___21234,output_schema21180_21235,input_schema21181_21236,input_checker21182_21237,output_checker21183_21238){
return (function (){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(self__.data,cljs.core.constantly(cljs.core.PersistentArrayMap.EMPTY));
});})(stats,___$1,validate__10780__auto__,ufv___21234,output_schema21180_21235,input_schema21181_21236,input_checker21182_21237,output_checker21183_21238))
], null),"Clear"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$242,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),"count"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$242,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),"last-update"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$242,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),"last-ms"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$242,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),"average-ms"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$242,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),"max-ms"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$242,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),"min-ms"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$242,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),"std-ms"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$245,(function (){var iter__4571__auto__ = ((function (stats,___$1,validate__10780__auto__,ufv___21234,output_schema21180_21235,input_schema21181_21236,input_checker21182_21237,output_checker21183_21238){
return (function iter__21219(s__21220){
return (new cljs.core.LazySeq(null,((function (stats,___$1,validate__10780__auto__,ufv___21234,output_schema21180_21235,input_schema21181_21236,input_checker21182_21237,output_checker21183_21238){
return (function (){
var s__21220__$1 = s__21220;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__21220__$1);
if(temp__4126__auto__){
var s__21220__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21220__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__21220__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__21222 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__21221 = (0);
while(true){
if((i__21221 < size__4570__auto__)){
var map__21229 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__21221);
var map__21229__$1 = ((cljs.core.seq_QMARK_(map__21229))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21229):map__21229);
var stat = map__21229__$1;
var last_render_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21229__$1,cljs.core.constant$keyword$233);
var render_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21229__$1,cljs.core.constant$keyword$232);
var std_dev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21229__$1,cljs.core.constant$keyword$237);
var min_render_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21229__$1,cljs.core.constant$keyword$236);
var max_render_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21229__$1,cljs.core.constant$keyword$235);
var average_render_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21229__$1,cljs.core.constant$keyword$234);
var last_will_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21229__$1,cljs.core.constant$keyword$228);
var display_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21229__$1,cljs.core.constant$keyword$227);
cljs.core.chunk_append(b__21222,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$241,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,display_name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),render_count], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),(cljs.core.truth_(last_will_update)?cljs_time.format.unparse((function (){var G__21230 = cljs.core.constant$keyword$203;
return (cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1(G__21230) : cljs_time.format.formatters.call(null,G__21230));
})(),last_will_update):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),last_render_ms], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),average_render_ms], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),max_render_ms], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),min_render_ms], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),std_dev], null)], null));

var G__21242 = (i__21221 + (1));
i__21221 = G__21242;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21222),iter__21219(cljs.core.chunk_rest(s__21220__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21222),null);
}
} else {
var map__21231 = cljs.core.first(s__21220__$2);
var map__21231__$1 = ((cljs.core.seq_QMARK_(map__21231))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21231):map__21231);
var stat = map__21231__$1;
var last_render_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21231__$1,cljs.core.constant$keyword$233);
var render_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21231__$1,cljs.core.constant$keyword$232);
var std_dev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21231__$1,cljs.core.constant$keyword$237);
var min_render_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21231__$1,cljs.core.constant$keyword$236);
var max_render_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21231__$1,cljs.core.constant$keyword$235);
var average_render_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21231__$1,cljs.core.constant$keyword$234);
var last_will_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21231__$1,cljs.core.constant$keyword$228);
var display_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21231__$1,cljs.core.constant$keyword$227);
return cljs.core.cons(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$241,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,display_name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),render_count], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),(cljs.core.truth_(last_will_update)?cljs_time.format.unparse((function (){var G__21232 = cljs.core.constant$keyword$203;
return (cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1(G__21232) : cljs_time.format.formatters.call(null,G__21232));
})(),last_will_update):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),last_render_ms], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),average_render_ms], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),max_render_ms], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),min_render_ms], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),std_dev], null)], null),iter__21219(cljs.core.rest(s__21220__$2)));
}
} else {
return null;
}
break;
}
});})(stats,___$1,validate__10780__auto__,ufv___21234,output_schema21180_21235,input_schema21181_21236,input_checker21182_21237,output_checker21183_21238))
,null,null));
});})(stats,___$1,validate__10780__auto__,ufv___21234,output_schema21180_21235,input_schema21181_21236,input_checker21182_21237,output_checker21183_21238))
;
return iter__4571__auto__(cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$228,stats)));
})()], null)], null)], null);
})());
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs21214))?sablono.interpreter.attributes(attrs21214):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21214))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21214)], null))));
});})(validate__10780__auto__,ufv___21234,output_schema21180_21235,input_schema21181_21236,input_checker21182_21237,output_checker21183_21238))
;

om_dev_tools.instrumentation.t21211.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__10780__auto__,ufv___21234,output_schema21180_21235,input_schema21181_21236,input_checker21182_21237,output_checker21183_21238){
return (function (_21213){
var self__ = this;
var _21213__$1 = this;
return self__.meta21212;
});})(validate__10780__auto__,ufv___21234,output_schema21180_21235,input_schema21181_21236,input_checker21182_21237,output_checker21183_21238))
;

om_dev_tools.instrumentation.t21211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__10780__auto__,ufv___21234,output_schema21180_21235,input_schema21181_21236,input_checker21182_21237,output_checker21183_21238){
return (function (_21213,meta21212__$1){
var self__ = this;
var _21213__$1 = this;
return (new om_dev_tools.instrumentation.t21211(self__.stats_view,self__.G__21185,self__.output_schema21180,self__.owner,self__.data,self__.input_schema21181,self__.G__21184,self__.validate__10780__auto__,self__.input_checker21182,self__.ufv__,self__.output_checker21183,meta21212__$1));
});})(validate__10780__auto__,ufv___21234,output_schema21180_21235,input_schema21181_21236,input_checker21182_21237,output_checker21183_21238))
;

om_dev_tools.instrumentation.t21211.cljs$lang$type = true;

om_dev_tools.instrumentation.t21211.cljs$lang$ctorStr = "om-dev-tools.instrumentation/t21211";

om_dev_tools.instrumentation.t21211.cljs$lang$ctorPrWriter = ((function (validate__10780__auto__,ufv___21234,output_schema21180_21235,input_schema21181_21236,input_checker21182_21237,output_checker21183_21238){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"om-dev-tools.instrumentation/t21211");
});})(validate__10780__auto__,ufv___21234,output_schema21180_21235,input_schema21181_21236,input_checker21182_21237,output_checker21183_21238))
;

om_dev_tools.instrumentation.__GT_t21211 = ((function (validate__10780__auto__,ufv___21234,output_schema21180_21235,input_schema21181_21236,input_checker21182_21237,output_checker21183_21238){
return (function __GT_t21211(stats_view__$1,G__21185__$1,output_schema21180__$1,owner__$1,data__$1,input_schema21181__$1,G__21184__$1,validate__10780__auto____$1,input_checker21182__$1,ufv____$1,output_checker21183__$1,meta21212){
return (new om_dev_tools.instrumentation.t21211(stats_view__$1,G__21185__$1,output_schema21180__$1,owner__$1,data__$1,input_schema21181__$1,G__21184__$1,validate__10780__auto____$1,input_checker21182__$1,ufv____$1,output_checker21183__$1,meta21212));
});})(validate__10780__auto__,ufv___21234,output_schema21180_21235,input_schema21181_21236,input_checker21182_21237,output_checker21183_21238))
;

}

return (new om_dev_tools.instrumentation.t21211(stats_view,G__21185,output_schema21180_21235,owner,data,input_schema21181_21236,G__21184,validate__10780__auto__,input_checker21182_21237,ufv___21234,output_checker21183_21238,null));
break;
}
})();
if(cljs.core.truth_(validate__10780__auto__)){
var temp__4126__auto___21243 = (function (){var G__21233 = o__10783__auto__;
return (output_checker21183_21238.cljs$core$IFn$_invoke$arity$1 ? output_checker21183_21238.cljs$core$IFn$_invoke$arity$1(G__21233) : output_checker21183_21238.call(null,G__21233));
})();
if(cljs.core.truth_(temp__4126__auto___21243)){
var error__10782__auto___21244 = temp__4126__auto___21243;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"stats-view","stats-view",-814342528,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21244], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21244,cljs.core.constant$keyword$21,o__10783__auto__,cljs.core.constant$keyword$22,output_schema21180_21235,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

return o__10783__auto__;
});})(ufv___21234,output_schema21180_21235,input_schema21181_21236,input_checker21182_21237,output_checker21183_21238))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_dev_tools.instrumentation.stats_view),schema.core.make_fn_schema(output_schema21180_21235,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21181_21236], null)));

om_dev_tools.instrumentation.__GT_stats_view = (function() {
var __GT_stats_view = null;
var __GT_stats_view__1 = (function (cursor__20840__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(om_dev_tools.instrumentation.stats_view,cursor__20840__auto__);
});
var __GT_stats_view__2 = (function (cursor__20840__auto__,m21179){
return om.core.build.cljs$core$IFn$_invoke$arity$3(om_dev_tools.instrumentation.stats_view,cursor__20840__auto__,m21179);
});
__GT_stats_view = function(cursor__20840__auto__,m21179){
switch(arguments.length){
case 1:
return __GT_stats_view__1.call(this,cursor__20840__auto__);
case 2:
return __GT_stats_view__2.call(this,cursor__20840__auto__,m21179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_stats_view.cljs$core$IFn$_invoke$arity$1 = __GT_stats_view__1;
__GT_stats_view.cljs$core$IFn$_invoke$arity$2 = __GT_stats_view__2;
return __GT_stats_view;
})()
;

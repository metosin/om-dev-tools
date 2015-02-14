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
return (function (p1__21165_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__21165_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$227,(this$["getDisplayName"]).call(null),cljs.core.constant$keyword$228,cljs_time.core.now()], null)], 0));
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
var G__21170 = om_dev_tools.instrumentation.avg(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (a){
return (function (p1__21166_SHARP_){
var G__21171 = (p1__21166_SHARP_ - a);
var G__21172 = (2);
return (Math.pow.cljs$core$IFn$_invoke$arity$2 ? Math.pow.cljs$core$IFn$_invoke$arity$2(G__21171,G__21172) : Math.pow.call(null,G__21171,G__21172));
});})(a))
,coll));
return (Math.sqrt.cljs$core$IFn$_invoke$arity$1 ? Math.sqrt.cljs$core$IFn$_invoke$arity$1(G__21170) : Math.sqrt.call(null,G__21170));
});

var ufv___21228 = schema.utils.use_fn_validation;
var output_schema21174_21229 = schema.core.Any;
var input_schema21175_21230 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker21176_21231 = schema.core.checker(input_schema21175_21230);
var output_checker21177_21232 = schema.core.checker(output_schema21174_21229);
/**
* Inputs: [data owner]
*/
om_dev_tools.instrumentation.stats_view = ((function (ufv___21228,output_schema21174_21229,input_schema21175_21230,input_checker21176_21231,output_checker21177_21232){
return (function stats_view(G__21178,G__21179){
var validate__10780__auto__ = ufv___21228.get_cell();
if(cljs.core.truth_(validate__10780__auto__)){
var args__10781__auto___21233 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21178,G__21179], null);
var temp__4126__auto___21234 = (function (){var G__21204 = args__10781__auto___21233;
return (input_checker21176_21231.cljs$core$IFn$_invoke$arity$1 ? input_checker21176_21231.cljs$core$IFn$_invoke$arity$1(G__21204) : input_checker21176_21231.call(null,G__21204));
})();
if(cljs.core.truth_(temp__4126__auto___21234)){
var error__10782__auto___21235 = temp__4126__auto___21234;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"stats-view","stats-view",-814342528,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21235], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21235,cljs.core.constant$keyword$21,args__10781__auto___21233,cljs.core.constant$keyword$22,input_schema21175_21230,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

var o__10783__auto__ = (function (){var data = G__21178;
var owner = G__21179;
while(true){
if(typeof om_dev_tools.instrumentation.t21205 !== 'undefined'){
} else {

/**
* @constructor
*/
om_dev_tools.instrumentation.t21205 = (function (stats_view,input_schema21175,input_checker21176,owner,data,output_checker21177,G__21178,G__21179,validate__10780__auto__,ufv__,output_schema21174,meta21206){
this.stats_view = stats_view;
this.input_schema21175 = input_schema21175;
this.input_checker21176 = input_checker21176;
this.owner = owner;
this.data = data;
this.output_checker21177 = output_checker21177;
this.G__21178 = G__21178;
this.G__21179 = G__21179;
this.validate__10780__auto__ = validate__10780__auto__;
this.ufv__ = ufv__;
this.output_schema21174 = output_schema21174;
this.meta21206 = meta21206;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_dev_tools.instrumentation.t21205.prototype.om$core$IDisplayName$ = true;

om_dev_tools.instrumentation.t21205.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__10780__auto__,ufv___21228,output_schema21174_21229,input_schema21175_21230,input_checker21176_21231,output_checker21177_21232){
return (function (_){
var self__ = this;
var ___$1 = this;
return "stats-view";
});})(validate__10780__auto__,ufv___21228,output_schema21174_21229,input_schema21175_21230,input_checker21176_21231,output_checker21177_21232))
;

om_dev_tools.instrumentation.t21205.prototype.om$core$IRender$ = true;

om_dev_tools.instrumentation.t21205.prototype.om$core$IRender$render$arity$1 = ((function (validate__10780__auto__,ufv___21228,output_schema21174_21229,input_schema21175_21230,input_checker21176_21231,output_checker21177_21232){
return (function (_){
var self__ = this;
var ___$1 = this;
var attrs21208 = (cljs.core.truth_(om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$231))?null:(function (){var stats = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (___$1,validate__10780__auto__,ufv___21228,output_schema21174_21229,input_schema21175_21230,input_checker21176_21231,output_checker21177_21232){
return (function (p__21209){
var vec__21210 = p__21209;
var display_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21210,(0),null);
var renders = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21210,(1),null);
var times = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$230,cljs.core.array_seq([renders], 0));
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$227,(function (){var or__3815__auto__ = display_name;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return "Unknown";
}
})(),cljs.core.constant$keyword$232,cljs.core.count(times),cljs.core.constant$keyword$228,cljs.core.last(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$228,renders))),cljs.core.constant$keyword$233,cljs.core.last(cljs.core.constant$keyword$230.cljs$core$IFn$_invoke$arity$1(cljs.core.last(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$229,renders)))),cljs.core.constant$keyword$234,((cljs.core.seq(times))?(om_dev_tools.instrumentation.avg(times) | (0)):null),cljs.core.constant$keyword$235,((cljs.core.seq(times))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,times):null),cljs.core.constant$keyword$236,((cljs.core.seq(times))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,times):null),cljs.core.constant$keyword$237,((cljs.core.seq(times))?(om_dev_tools.instrumentation.std_dev(times) | (0)):null)], null);
});})(___$1,validate__10780__auto__,ufv___21228,output_schema21174_21229,input_schema21175_21230,input_checker21176_21231,output_checker21177_21232))
,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (___$1,validate__10780__auto__,ufv___21228,output_schema21174_21229,input_schema21175_21230,input_checker21176_21231,output_checker21177_21232){
return (function (acc,p__21211){
var vec__21212 = p__21211;
var react_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21212,(0),null);
var data__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21212,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$227.cljs$core$IFn$_invoke$arity$1(data__$1)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),data__$1);
});})(___$1,validate__10780__auto__,ufv___21228,output_schema21174_21229,input_schema21175_21230,input_checker21176_21231,output_checker21177_21232))
,cljs.core.PersistentArrayMap.EMPTY,self__.data));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$238,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"admin-stats"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$239,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$240,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$241,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$242,"component",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$243,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$244,((function (stats,___$1,validate__10780__auto__,ufv___21228,output_schema21174_21229,input_schema21175_21230,input_checker21176_21231,output_checker21177_21232){
return (function (){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(self__.data,cljs.core.constantly(cljs.core.PersistentArrayMap.EMPTY));
});})(stats,___$1,validate__10780__auto__,ufv___21228,output_schema21174_21229,input_schema21175_21230,input_checker21176_21231,output_checker21177_21232))
], null),"Clear"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$242,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),"count"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$242,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),"last-update"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$242,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),"last-ms"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$242,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),"average-ms"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$242,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),"max-ms"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$242,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),"min-ms"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$242,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),"std-ms"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$245,(function (){var iter__4571__auto__ = ((function (stats,___$1,validate__10780__auto__,ufv___21228,output_schema21174_21229,input_schema21175_21230,input_checker21176_21231,output_checker21177_21232){
return (function iter__21213(s__21214){
return (new cljs.core.LazySeq(null,((function (stats,___$1,validate__10780__auto__,ufv___21228,output_schema21174_21229,input_schema21175_21230,input_checker21176_21231,output_checker21177_21232){
return (function (){
var s__21214__$1 = s__21214;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__21214__$1);
if(temp__4126__auto__){
var s__21214__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21214__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__21214__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__21216 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__21215 = (0);
while(true){
if((i__21215 < size__4570__auto__)){
var map__21223 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__21215);
var map__21223__$1 = ((cljs.core.seq_QMARK_(map__21223))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21223):map__21223);
var stat = map__21223__$1;
var last_render_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21223__$1,cljs.core.constant$keyword$233);
var render_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21223__$1,cljs.core.constant$keyword$232);
var std_dev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21223__$1,cljs.core.constant$keyword$237);
var min_render_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21223__$1,cljs.core.constant$keyword$236);
var max_render_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21223__$1,cljs.core.constant$keyword$235);
var average_render_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21223__$1,cljs.core.constant$keyword$234);
var last_will_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21223__$1,cljs.core.constant$keyword$228);
var display_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21223__$1,cljs.core.constant$keyword$227);
cljs.core.chunk_append(b__21216,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$241,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,display_name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),render_count], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),(cljs.core.truth_(last_will_update)?cljs_time.format.unparse((function (){var G__21224 = cljs.core.constant$keyword$203;
return (cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1(G__21224) : cljs_time.format.formatters.call(null,G__21224));
})(),last_will_update):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),last_render_ms], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),average_render_ms], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),max_render_ms], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),min_render_ms], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),std_dev], null)], null));

var G__21236 = (i__21215 + (1));
i__21215 = G__21236;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21216),iter__21213(cljs.core.chunk_rest(s__21214__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21216),null);
}
} else {
var map__21225 = cljs.core.first(s__21214__$2);
var map__21225__$1 = ((cljs.core.seq_QMARK_(map__21225))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21225):map__21225);
var stat = map__21225__$1;
var last_render_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21225__$1,cljs.core.constant$keyword$233);
var render_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21225__$1,cljs.core.constant$keyword$232);
var std_dev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21225__$1,cljs.core.constant$keyword$237);
var min_render_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21225__$1,cljs.core.constant$keyword$236);
var max_render_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21225__$1,cljs.core.constant$keyword$235);
var average_render_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21225__$1,cljs.core.constant$keyword$234);
var last_will_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21225__$1,cljs.core.constant$keyword$228);
var display_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21225__$1,cljs.core.constant$keyword$227);
return cljs.core.cons(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$241,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,display_name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),render_count], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),(cljs.core.truth_(last_will_update)?cljs_time.format.unparse((function (){var G__21226 = cljs.core.constant$keyword$203;
return (cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1(G__21226) : cljs_time.format.formatters.call(null,G__21226));
})(),last_will_update):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),last_render_ms], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),average_render_ms], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),max_render_ms], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),min_render_ms], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$246,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,"number"], null),std_dev], null)], null),iter__21213(cljs.core.rest(s__21214__$2)));
}
} else {
return null;
}
break;
}
});})(stats,___$1,validate__10780__auto__,ufv___21228,output_schema21174_21229,input_schema21175_21230,input_checker21176_21231,output_checker21177_21232))
,null,null));
});})(stats,___$1,validate__10780__auto__,ufv___21228,output_schema21174_21229,input_schema21175_21230,input_checker21176_21231,output_checker21177_21232))
;
return iter__4571__auto__(cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$228,stats)));
})()], null)], null)], null);
})());
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs21208))?sablono.interpreter.attributes(attrs21208):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21208))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21208)], null))));
});})(validate__10780__auto__,ufv___21228,output_schema21174_21229,input_schema21175_21230,input_checker21176_21231,output_checker21177_21232))
;

om_dev_tools.instrumentation.t21205.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__10780__auto__,ufv___21228,output_schema21174_21229,input_schema21175_21230,input_checker21176_21231,output_checker21177_21232){
return (function (_21207){
var self__ = this;
var _21207__$1 = this;
return self__.meta21206;
});})(validate__10780__auto__,ufv___21228,output_schema21174_21229,input_schema21175_21230,input_checker21176_21231,output_checker21177_21232))
;

om_dev_tools.instrumentation.t21205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__10780__auto__,ufv___21228,output_schema21174_21229,input_schema21175_21230,input_checker21176_21231,output_checker21177_21232){
return (function (_21207,meta21206__$1){
var self__ = this;
var _21207__$1 = this;
return (new om_dev_tools.instrumentation.t21205(self__.stats_view,self__.input_schema21175,self__.input_checker21176,self__.owner,self__.data,self__.output_checker21177,self__.G__21178,self__.G__21179,self__.validate__10780__auto__,self__.ufv__,self__.output_schema21174,meta21206__$1));
});})(validate__10780__auto__,ufv___21228,output_schema21174_21229,input_schema21175_21230,input_checker21176_21231,output_checker21177_21232))
;

om_dev_tools.instrumentation.t21205.cljs$lang$type = true;

om_dev_tools.instrumentation.t21205.cljs$lang$ctorStr = "om-dev-tools.instrumentation/t21205";

om_dev_tools.instrumentation.t21205.cljs$lang$ctorPrWriter = ((function (validate__10780__auto__,ufv___21228,output_schema21174_21229,input_schema21175_21230,input_checker21176_21231,output_checker21177_21232){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"om-dev-tools.instrumentation/t21205");
});})(validate__10780__auto__,ufv___21228,output_schema21174_21229,input_schema21175_21230,input_checker21176_21231,output_checker21177_21232))
;

om_dev_tools.instrumentation.__GT_t21205 = ((function (validate__10780__auto__,ufv___21228,output_schema21174_21229,input_schema21175_21230,input_checker21176_21231,output_checker21177_21232){
return (function __GT_t21205(stats_view__$1,input_schema21175__$1,input_checker21176__$1,owner__$1,data__$1,output_checker21177__$1,G__21178__$1,G__21179__$1,validate__10780__auto____$1,ufv____$1,output_schema21174__$1,meta21206){
return (new om_dev_tools.instrumentation.t21205(stats_view__$1,input_schema21175__$1,input_checker21176__$1,owner__$1,data__$1,output_checker21177__$1,G__21178__$1,G__21179__$1,validate__10780__auto____$1,ufv____$1,output_schema21174__$1,meta21206));
});})(validate__10780__auto__,ufv___21228,output_schema21174_21229,input_schema21175_21230,input_checker21176_21231,output_checker21177_21232))
;

}

return (new om_dev_tools.instrumentation.t21205(stats_view,input_schema21175_21230,input_checker21176_21231,owner,data,output_checker21177_21232,G__21178,G__21179,validate__10780__auto__,ufv___21228,output_schema21174_21229,null));
break;
}
})();
if(cljs.core.truth_(validate__10780__auto__)){
var temp__4126__auto___21237 = (function (){var G__21227 = o__10783__auto__;
return (output_checker21177_21232.cljs$core$IFn$_invoke$arity$1 ? output_checker21177_21232.cljs$core$IFn$_invoke$arity$1(G__21227) : output_checker21177_21232.call(null,G__21227));
})();
if(cljs.core.truth_(temp__4126__auto___21237)){
var error__10782__auto___21238 = temp__4126__auto___21237;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"stats-view","stats-view",-814342528,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21238], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21238,cljs.core.constant$keyword$21,o__10783__auto__,cljs.core.constant$keyword$22,output_schema21174_21229,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

return o__10783__auto__;
});})(ufv___21228,output_schema21174_21229,input_schema21175_21230,input_checker21176_21231,output_checker21177_21232))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_dev_tools.instrumentation.stats_view),schema.core.make_fn_schema(output_schema21174_21229,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21175_21230], null)));

om_dev_tools.instrumentation.__GT_stats_view = (function() {
var __GT_stats_view = null;
var __GT_stats_view__1 = (function (cursor__20840__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(om_dev_tools.instrumentation.stats_view,cursor__20840__auto__);
});
var __GT_stats_view__2 = (function (cursor__20840__auto__,m21173){
return om.core.build.cljs$core$IFn$_invoke$arity$3(om_dev_tools.instrumentation.stats_view,cursor__20840__auto__,m21173);
});
__GT_stats_view = function(cursor__20840__auto__,m21173){
switch(arguments.length){
case 1:
return __GT_stats_view__1.call(this,cursor__20840__auto__);
case 2:
return __GT_stats_view__2.call(this,cursor__20840__auto__,m21173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_stats_view.cljs$core$IFn$_invoke$arity$1 = __GT_stats_view__1;
__GT_stats_view.cljs$core$IFn$_invoke$arity$2 = __GT_stats_view__2;
return __GT_stats_view;
})()
;

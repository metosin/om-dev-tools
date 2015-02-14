// Compiled by ClojureScript 0.0-2850 {}
goog.provide('om_dev_tools.ui');
goog.require('cljs.core');
goog.require('om_dev_tools.instrumentation');
goog.require('om_dev_tools.state_tree');
goog.require('goog.string');
goog.require('om_tools.core');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('om.core');
om_dev_tools.ui.default_views = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$255,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$135,"State",cljs.core.constant$keyword$257,(function (state,opts){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$258,om.core.build.cljs$core$IFn$_invoke$arity$2(om_dev_tools.state_tree.state_view,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$254,cljs.core.constant$keyword$254.cljs$core$IFn$_invoke$arity$1(state),cljs.core.constant$keyword$253,om.core.root_cursor(cljs.core.constant$keyword$253.cljs$core$IFn$_invoke$arity$1(opts))], null))], null);
})], null),cljs.core.constant$keyword$256,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$135,"Om instrumentation",cljs.core.constant$keyword$257,(function (state,_){
return om.core.build.cljs$core$IFn$_invoke$arity$2(om_dev_tools.instrumentation.stats_view,cljs.core.constant$keyword$259.cljs$core$IFn$_invoke$arity$1(state));
})], null)], null);

var ufv___21320 = schema.utils.use_fn_validation;
var output_schema21253_21321 = schema.core.Any;
var input_schema21254_21322 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker21255_21323 = schema.core.checker(input_schema21254_21322);
var output_checker21256_21324 = schema.core.checker(output_schema21253_21321);
/**
* Inputs: [{:keys [open? current component-stats], :as state} owner {:keys [views app-state], :as opts}]
*/
om_dev_tools.ui.dev_tools = ((function (ufv___21320,output_schema21253_21321,input_schema21254_21322,input_checker21255_21323,output_checker21256_21324){
return (function dev_tools(G__21257,G__21258,G__21259){
var validate__10780__auto__ = ufv___21320.get_cell();
if(cljs.core.truth_(validate__10780__auto__)){
var args__10781__auto___21325 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21257,G__21258,G__21259], null);
var temp__4126__auto___21326 = (function (){var G__21290 = args__10781__auto___21325;
return (input_checker21255_21323.cljs$core$IFn$_invoke$arity$1 ? input_checker21255_21323.cljs$core$IFn$_invoke$arity$1(G__21290) : input_checker21255_21323.call(null,G__21290));
})();
if(cljs.core.truth_(temp__4126__auto___21326)){
var error__10782__auto___21327 = temp__4126__auto___21326;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"dev-tools","dev-tools",1391381292,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21327], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21327,cljs.core.constant$keyword$21,args__10781__auto___21325,cljs.core.constant$keyword$22,input_schema21254_21322,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

var o__10783__auto__ = (function (){var G__21293 = G__21257;
var map__21295 = G__21293;
var map__21295__$1 = ((cljs.core.seq_QMARK_(map__21295))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21295):map__21295);
var state = map__21295__$1;
var component_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21295__$1,cljs.core.constant$keyword$259);
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21295__$1,cljs.core.constant$keyword$260);
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21295__$1,cljs.core.constant$keyword$261);
var owner = G__21258;
var G__21294 = G__21259;
var map__21296 = G__21294;
var map__21296__$1 = ((cljs.core.seq_QMARK_(map__21296))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21296):map__21296);
var opts = map__21296__$1;
var app_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21296__$1,cljs.core.constant$keyword$253);
var views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21296__$1,cljs.core.constant$keyword$262);
var G__21293__$1 = G__21293;
var owner__$1 = owner;
var G__21294__$1 = G__21294;
while(true){
var map__21297 = G__21293__$1;
var map__21297__$1 = ((cljs.core.seq_QMARK_(map__21297))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21297):map__21297);
var state__$1 = map__21297__$1;
var component_stats__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21297__$1,cljs.core.constant$keyword$259);
var current__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21297__$1,cljs.core.constant$keyword$260);
var open_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21297__$1,cljs.core.constant$keyword$261);
var owner__$2 = owner__$1;
var map__21298 = G__21294__$1;
var map__21298__$1 = ((cljs.core.seq_QMARK_(map__21298))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21298):map__21298);
var opts__$1 = map__21298__$1;
var app_state__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21298__$1,cljs.core.constant$keyword$253);
var views__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21298__$1,cljs.core.constant$keyword$262);
if(typeof om_dev_tools.ui.t21299 !== 'undefined'){
} else {

/**
* @constructor
*/
om_dev_tools.ui.t21299 = (function (map__21298,component_stats,input_checker21255,map__21296,owner,map__21295,G__21258,views,G__21259,input_schema21254,map__21297,dev_tools,output_schema21253,G__21294,state,validate__10780__auto__,output_checker21256,app_state,G__21257,G__21293,open_QMARK_,opts,current,ufv__,meta21300){
this.map__21298 = map__21298;
this.component_stats = component_stats;
this.input_checker21255 = input_checker21255;
this.map__21296 = map__21296;
this.owner = owner;
this.map__21295 = map__21295;
this.G__21258 = G__21258;
this.views = views;
this.G__21259 = G__21259;
this.input_schema21254 = input_schema21254;
this.map__21297 = map__21297;
this.dev_tools = dev_tools;
this.output_schema21253 = output_schema21253;
this.G__21294 = G__21294;
this.state = state;
this.validate__10780__auto__ = validate__10780__auto__;
this.output_checker21256 = output_checker21256;
this.app_state = app_state;
this.G__21257 = G__21257;
this.G__21293 = G__21293;
this.open_QMARK_ = open_QMARK_;
this.opts = opts;
this.current = current;
this.ufv__ = ufv__;
this.meta21300 = meta21300;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_dev_tools.ui.t21299.prototype.om$core$IDisplayName$ = true;

om_dev_tools.ui.t21299.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__21297,map__21297__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__21298,map__21298__$1,opts__$1,app_state__$1,views__$1,G__21293,map__21295,map__21295__$1,state,component_stats,current,open_QMARK_,owner,G__21294,map__21296,map__21296__$1,opts,app_state,views,validate__10780__auto__,ufv___21320,output_schema21253_21321,input_schema21254_21322,input_checker21255_21323,output_checker21256_21324){
return (function (_){
var self__ = this;
var ___$1 = this;
return "dev-tools";
});})(map__21297,map__21297__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__21298,map__21298__$1,opts__$1,app_state__$1,views__$1,G__21293,map__21295,map__21295__$1,state,component_stats,current,open_QMARK_,owner,G__21294,map__21296,map__21296__$1,opts,app_state,views,validate__10780__auto__,ufv___21320,output_schema21253_21321,input_schema21254_21322,input_checker21255_21323,output_checker21256_21324))
;

om_dev_tools.ui.t21299.prototype.om$core$IRender$ = true;

om_dev_tools.ui.t21299.prototype.om$core$IRender$render$arity$1 = ((function (map__21297,map__21297__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__21298,map__21298__$1,opts__$1,app_state__$1,views__$1,G__21293,map__21295,map__21295__$1,state,component_stats,current,open_QMARK_,owner,G__21294,map__21296,map__21296__$1,opts,app_state,views,validate__10780__auto__,ufv___21320,output_schema21253_21321,input_schema21254_21322,input_checker21255_21323,output_checker21256_21324){
return (function (_){
var self__ = this;
var ___$1 = this;
window.document.body.className = (cljs.core.truth_(self__.open_QMARK_)?"dev":"");

if(cljs.core.truth_(self__.open_QMARK_)){
return sablono.interpreter.interpret((function (){var all_views = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([om_dev_tools.ui.default_views], 0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$263,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$264,(function (){var iter__4571__auto__ = ((function (all_views,___$1,map__21297,map__21297__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__21298,map__21298__$1,opts__$1,app_state__$1,views__$1,G__21293,map__21295,map__21295__$1,state,component_stats,current,open_QMARK_,owner,G__21294,map__21296,map__21296__$1,opts,app_state,views,validate__10780__auto__,ufv___21320,output_schema21253_21321,input_schema21254_21322,input_checker21255_21323,output_checker21256_21324){
return (function iter__21302(s__21303){
return (new cljs.core.LazySeq(null,((function (all_views,___$1,map__21297,map__21297__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__21298,map__21298__$1,opts__$1,app_state__$1,views__$1,G__21293,map__21295,map__21295__$1,state,component_stats,current,open_QMARK_,owner,G__21294,map__21296,map__21296__$1,opts,app_state,views,validate__10780__auto__,ufv___21320,output_schema21253_21321,input_schema21254_21322,input_checker21255_21323,output_checker21256_21324){
return (function (){
var s__21303__$1 = s__21303;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__21303__$1);
if(temp__4126__auto__){
var s__21303__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21303__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__21303__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__21305 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__21304 = (0);
while(true){
if((i__21304 < size__4570__auto__)){
var vec__21312 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__21304);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21312,(0),null);
var map__21313 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21312,(1),null);
var map__21313__$1 = ((cljs.core.seq_QMARK_(map__21313))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21313):map__21313);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21313__$1,cljs.core.constant$keyword$135);
cljs.core.chunk_append(b__21305,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$114,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$260.cljs$core$IFn$_invoke$arity$1(self__.state),k))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$126,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$248,((function (i__21304,vec__21312,k,map__21313,map__21313__$1,label,c__4569__auto__,size__4570__auto__,b__21305,s__21303__$2,temp__4126__auto__,all_views,___$1,map__21297,map__21297__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__21298,map__21298__$1,opts__$1,app_state__$1,views__$1,G__21293,map__21295,map__21295__$1,state,component_stats,current,open_QMARK_,owner,G__21294,map__21296,map__21296__$1,opts,app_state,views,validate__10780__auto__,ufv___21320,output_schema21253_21321,input_schema21254_21322,input_checker21255_21323,output_checker21256_21324){
return (function (){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.state,cljs.core.constant$keyword$260,k);
});})(i__21304,vec__21312,k,map__21313,map__21313__$1,label,c__4569__auto__,size__4570__auto__,b__21305,s__21303__$2,temp__4126__auto__,all_views,___$1,map__21297,map__21297__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__21298,map__21298__$1,opts__$1,app_state__$1,views__$1,G__21293,map__21295,map__21295__$1,state,component_stats,current,open_QMARK_,owner,G__21294,map__21296,map__21296__$1,opts,app_state,views,validate__10780__auto__,ufv___21320,output_schema21253_21321,input_schema21254_21322,input_checker21255_21323,output_checker21256_21324))
], null),label], null)], null));

var G__21328 = (i__21304 + (1));
i__21304 = G__21328;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21305),iter__21302(cljs.core.chunk_rest(s__21303__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21305),null);
}
} else {
var vec__21314 = cljs.core.first(s__21303__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21314,(0),null);
var map__21315 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21314,(1),null);
var map__21315__$1 = ((cljs.core.seq_QMARK_(map__21315))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21315):map__21315);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21315__$1,cljs.core.constant$keyword$135);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$114,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$260.cljs$core$IFn$_invoke$arity$1(self__.state),k))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$126,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$248,((function (vec__21314,k,map__21315,map__21315__$1,label,s__21303__$2,temp__4126__auto__,all_views,___$1,map__21297,map__21297__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__21298,map__21298__$1,opts__$1,app_state__$1,views__$1,G__21293,map__21295,map__21295__$1,state,component_stats,current,open_QMARK_,owner,G__21294,map__21296,map__21296__$1,opts,app_state,views,validate__10780__auto__,ufv___21320,output_schema21253_21321,input_schema21254_21322,input_checker21255_21323,output_checker21256_21324){
return (function (){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.state,cljs.core.constant$keyword$260,k);
});})(vec__21314,k,map__21315,map__21315__$1,label,s__21303__$2,temp__4126__auto__,all_views,___$1,map__21297,map__21297__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__21298,map__21298__$1,opts__$1,app_state__$1,views__$1,G__21293,map__21295,map__21295__$1,state,component_stats,current,open_QMARK_,owner,G__21294,map__21296,map__21296__$1,opts,app_state,views,validate__10780__auto__,ufv___21320,output_schema21253_21321,input_schema21254_21322,input_checker21255_21323,output_checker21256_21324))
], null),label], null)], null),iter__21302(cljs.core.rest(s__21303__$2)));
}
} else {
return null;
}
break;
}
});})(all_views,___$1,map__21297,map__21297__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__21298,map__21298__$1,opts__$1,app_state__$1,views__$1,G__21293,map__21295,map__21295__$1,state,component_stats,current,open_QMARK_,owner,G__21294,map__21296,map__21296__$1,opts,app_state,views,validate__10780__auto__,ufv___21320,output_schema21253_21321,input_schema21254_21322,input_checker21255_21323,output_checker21256_21324))
,null,null));
});})(all_views,___$1,map__21297,map__21297__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__21298,map__21298__$1,opts__$1,app_state__$1,views__$1,G__21293,map__21295,map__21295__$1,state,component_stats,current,open_QMARK_,owner,G__21294,map__21296,map__21296__$1,opts,app_state,views,validate__10780__auto__,ufv___21320,output_schema21253_21321,input_schema21254_21322,input_checker21255_21323,output_checker21256_21324))
;
return iter__4571__auto__(all_views);
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$265,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$266,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$244,((function (all_views,___$1,map__21297,map__21297__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__21298,map__21298__$1,opts__$1,app_state__$1,views__$1,G__21293,map__21295,map__21295__$1,state,component_stats,current,open_QMARK_,owner,G__21294,map__21296,map__21296__$1,opts,app_state,views,validate__10780__auto__,ufv___21320,output_schema21253_21321,input_schema21254_21322,input_checker21255_21323,output_checker21256_21324){
return (function (){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.state,cljs.core.constant$keyword$261,cljs.core.not);
});})(all_views,___$1,map__21297,map__21297__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__21298,map__21298__$1,opts__$1,app_state__$1,views__$1,G__21293,map__21295,map__21295__$1,state,component_stats,current,open_QMARK_,owner,G__21294,map__21296,map__21296__$1,opts,app_state,views,validate__10780__auto__,ufv___21320,output_schema21253_21321,input_schema21254_21322,input_checker21255_21323,output_checker21256_21324))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$251,"\u00D7"], null)], null)], null)], null),cljs.core.constant$keyword$257.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_views,self__.current)).call(null,self__.state,self__.opts)], null);
})());
} else {
var G__21316 = "button";
var G__21317 = {"className": "pull-right om-dev-tools-btn", "onClick": ((function (G__21316,___$1,map__21297,map__21297__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__21298,map__21298__$1,opts__$1,app_state__$1,views__$1,G__21293,map__21295,map__21295__$1,state,component_stats,current,open_QMARK_,owner,G__21294,map__21296,map__21296__$1,opts,app_state,views,validate__10780__auto__,ufv___21320,output_schema21253_21321,input_schema21254_21322,input_checker21255_21323,output_checker21256_21324){
return (function (){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.state,cljs.core.constant$keyword$261,cljs.core.not);
});})(G__21316,___$1,map__21297,map__21297__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__21298,map__21298__$1,opts__$1,app_state__$1,views__$1,G__21293,map__21295,map__21295__$1,state,component_stats,current,open_QMARK_,owner,G__21294,map__21296,map__21296__$1,opts,app_state,views,validate__10780__auto__,ufv___21320,output_schema21253_21321,input_schema21254_21322,input_checker21255_21323,output_checker21256_21324))
};
var G__21318 = "dev";
return React.createElement(G__21316,G__21317,G__21318);
}
});})(map__21297,map__21297__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__21298,map__21298__$1,opts__$1,app_state__$1,views__$1,G__21293,map__21295,map__21295__$1,state,component_stats,current,open_QMARK_,owner,G__21294,map__21296,map__21296__$1,opts,app_state,views,validate__10780__auto__,ufv___21320,output_schema21253_21321,input_schema21254_21322,input_checker21255_21323,output_checker21256_21324))
;

om_dev_tools.ui.t21299.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__21297,map__21297__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__21298,map__21298__$1,opts__$1,app_state__$1,views__$1,G__21293,map__21295,map__21295__$1,state,component_stats,current,open_QMARK_,owner,G__21294,map__21296,map__21296__$1,opts,app_state,views,validate__10780__auto__,ufv___21320,output_schema21253_21321,input_schema21254_21322,input_checker21255_21323,output_checker21256_21324){
return (function (_21301){
var self__ = this;
var _21301__$1 = this;
return self__.meta21300;
});})(map__21297,map__21297__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__21298,map__21298__$1,opts__$1,app_state__$1,views__$1,G__21293,map__21295,map__21295__$1,state,component_stats,current,open_QMARK_,owner,G__21294,map__21296,map__21296__$1,opts,app_state,views,validate__10780__auto__,ufv___21320,output_schema21253_21321,input_schema21254_21322,input_checker21255_21323,output_checker21256_21324))
;

om_dev_tools.ui.t21299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__21297,map__21297__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__21298,map__21298__$1,opts__$1,app_state__$1,views__$1,G__21293,map__21295,map__21295__$1,state,component_stats,current,open_QMARK_,owner,G__21294,map__21296,map__21296__$1,opts,app_state,views,validate__10780__auto__,ufv___21320,output_schema21253_21321,input_schema21254_21322,input_checker21255_21323,output_checker21256_21324){
return (function (_21301,meta21300__$1){
var self__ = this;
var _21301__$1 = this;
return (new om_dev_tools.ui.t21299(self__.map__21298,self__.component_stats,self__.input_checker21255,self__.map__21296,self__.owner,self__.map__21295,self__.G__21258,self__.views,self__.G__21259,self__.input_schema21254,self__.map__21297,self__.dev_tools,self__.output_schema21253,self__.G__21294,self__.state,self__.validate__10780__auto__,self__.output_checker21256,self__.app_state,self__.G__21257,self__.G__21293,self__.open_QMARK_,self__.opts,self__.current,self__.ufv__,meta21300__$1));
});})(map__21297,map__21297__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__21298,map__21298__$1,opts__$1,app_state__$1,views__$1,G__21293,map__21295,map__21295__$1,state,component_stats,current,open_QMARK_,owner,G__21294,map__21296,map__21296__$1,opts,app_state,views,validate__10780__auto__,ufv___21320,output_schema21253_21321,input_schema21254_21322,input_checker21255_21323,output_checker21256_21324))
;

om_dev_tools.ui.t21299.cljs$lang$type = true;

om_dev_tools.ui.t21299.cljs$lang$ctorStr = "om-dev-tools.ui/t21299";

om_dev_tools.ui.t21299.cljs$lang$ctorPrWriter = ((function (map__21297,map__21297__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__21298,map__21298__$1,opts__$1,app_state__$1,views__$1,G__21293,map__21295,map__21295__$1,state,component_stats,current,open_QMARK_,owner,G__21294,map__21296,map__21296__$1,opts,app_state,views,validate__10780__auto__,ufv___21320,output_schema21253_21321,input_schema21254_21322,input_checker21255_21323,output_checker21256_21324){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"om-dev-tools.ui/t21299");
});})(map__21297,map__21297__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__21298,map__21298__$1,opts__$1,app_state__$1,views__$1,G__21293,map__21295,map__21295__$1,state,component_stats,current,open_QMARK_,owner,G__21294,map__21296,map__21296__$1,opts,app_state,views,validate__10780__auto__,ufv___21320,output_schema21253_21321,input_schema21254_21322,input_checker21255_21323,output_checker21256_21324))
;

om_dev_tools.ui.__GT_t21299 = ((function (map__21297,map__21297__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__21298,map__21298__$1,opts__$1,app_state__$1,views__$1,G__21293,map__21295,map__21295__$1,state,component_stats,current,open_QMARK_,owner,G__21294,map__21296,map__21296__$1,opts,app_state,views,validate__10780__auto__,ufv___21320,output_schema21253_21321,input_schema21254_21322,input_checker21255_21323,output_checker21256_21324){
return (function __GT_t21299(map__21298__$2,component_stats__$2,input_checker21255__$1,map__21296__$2,owner__$3,map__21295__$2,G__21258__$1,views__$2,G__21259__$1,input_schema21254__$1,map__21297__$2,dev_tools__$1,output_schema21253__$1,G__21294__$2,state__$2,validate__10780__auto____$1,output_checker21256__$1,app_state__$2,G__21257__$1,G__21293__$2,open_QMARK___$2,opts__$2,current__$2,ufv____$1,meta21300){
return (new om_dev_tools.ui.t21299(map__21298__$2,component_stats__$2,input_checker21255__$1,map__21296__$2,owner__$3,map__21295__$2,G__21258__$1,views__$2,G__21259__$1,input_schema21254__$1,map__21297__$2,dev_tools__$1,output_schema21253__$1,G__21294__$2,state__$2,validate__10780__auto____$1,output_checker21256__$1,app_state__$2,G__21257__$1,G__21293__$2,open_QMARK___$2,opts__$2,current__$2,ufv____$1,meta21300));
});})(map__21297,map__21297__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__21298,map__21298__$1,opts__$1,app_state__$1,views__$1,G__21293,map__21295,map__21295__$1,state,component_stats,current,open_QMARK_,owner,G__21294,map__21296,map__21296__$1,opts,app_state,views,validate__10780__auto__,ufv___21320,output_schema21253_21321,input_schema21254_21322,input_checker21255_21323,output_checker21256_21324))
;

}

return (new om_dev_tools.ui.t21299(map__21298__$1,component_stats__$1,input_checker21255_21323,map__21296__$1,owner__$2,map__21295__$1,G__21258,views__$1,G__21259,input_schema21254_21322,map__21297__$1,dev_tools,output_schema21253_21321,G__21294__$1,state__$1,validate__10780__auto__,output_checker21256_21324,app_state__$1,G__21257,G__21293__$1,open_QMARK___$1,opts__$1,current__$1,ufv___21320,null));
break;
}
})();
if(cljs.core.truth_(validate__10780__auto__)){
var temp__4126__auto___21329 = (function (){var G__21319 = o__10783__auto__;
return (output_checker21256_21324.cljs$core$IFn$_invoke$arity$1 ? output_checker21256_21324.cljs$core$IFn$_invoke$arity$1(G__21319) : output_checker21256_21324.call(null,G__21319));
})();
if(cljs.core.truth_(temp__4126__auto___21329)){
var error__10782__auto___21330 = temp__4126__auto___21329;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"dev-tools","dev-tools",1391381292,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21330], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21330,cljs.core.constant$keyword$21,o__10783__auto__,cljs.core.constant$keyword$22,output_schema21253_21321,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

return o__10783__auto__;
});})(ufv___21320,output_schema21253_21321,input_schema21254_21322,input_checker21255_21323,output_checker21256_21324))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_dev_tools.ui.dev_tools),schema.core.make_fn_schema(output_schema21253_21321,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21254_21322], null)));

om_dev_tools.ui.__GT_dev_tools = (function() {
var __GT_dev_tools = null;
var __GT_dev_tools__1 = (function (cursor__20840__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(om_dev_tools.ui.dev_tools,cursor__20840__auto__);
});
var __GT_dev_tools__2 = (function (cursor__20840__auto__,m21252){
return om.core.build.cljs$core$IFn$_invoke$arity$3(om_dev_tools.ui.dev_tools,cursor__20840__auto__,m21252);
});
__GT_dev_tools = function(cursor__20840__auto__,m21252){
switch(arguments.length){
case 1:
return __GT_dev_tools__1.call(this,cursor__20840__auto__);
case 2:
return __GT_dev_tools__2.call(this,cursor__20840__auto__,m21252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_dev_tools.cljs$core$IFn$_invoke$arity$1 = __GT_dev_tools__1;
__GT_dev_tools.cljs$core$IFn$_invoke$arity$2 = __GT_dev_tools__2;
return __GT_dev_tools;
})()
;

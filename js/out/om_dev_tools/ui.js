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

var ufv___21312 = schema.utils.use_fn_validation;
var output_schema21247_21313 = schema.core.Any;
var input_schema21248_21314 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker21249_21315 = schema.core.checker(input_schema21248_21314);
var output_checker21250_21316 = schema.core.checker(output_schema21247_21313);
/**
* Inputs: [{:keys [open? current component-stats], :as state} owner {:keys [views app-state], :as opts}]
*/
om_dev_tools.ui.dev_tools = ((function (ufv___21312,output_schema21247_21313,input_schema21248_21314,input_checker21249_21315,output_checker21250_21316){
return (function dev_tools(G__21251,G__21252,G__21253){
var validate__10780__auto__ = ufv___21312.get_cell();
if(cljs.core.truth_(validate__10780__auto__)){
var args__10781__auto___21317 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21251,G__21252,G__21253], null);
var temp__4126__auto___21318 = (function (){var G__21283 = args__10781__auto___21317;
return (input_checker21249_21315.cljs$core$IFn$_invoke$arity$1 ? input_checker21249_21315.cljs$core$IFn$_invoke$arity$1(G__21283) : input_checker21249_21315.call(null,G__21283));
})();
if(cljs.core.truth_(temp__4126__auto___21318)){
var error__10782__auto___21319 = temp__4126__auto___21318;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"dev-tools","dev-tools",1391381292,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21319], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21319,cljs.core.constant$keyword$21,args__10781__auto___21317,cljs.core.constant$keyword$22,input_schema21248_21314,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

var o__10783__auto__ = (function (){var G__21286 = G__21251;
var map__21288 = G__21286;
var map__21288__$1 = ((cljs.core.seq_QMARK_(map__21288))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21288):map__21288);
var state = map__21288__$1;
var component_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21288__$1,cljs.core.constant$keyword$259);
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21288__$1,cljs.core.constant$keyword$260);
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21288__$1,cljs.core.constant$keyword$261);
var owner = G__21252;
var G__21287 = G__21253;
var map__21289 = G__21287;
var map__21289__$1 = ((cljs.core.seq_QMARK_(map__21289))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21289):map__21289);
var opts = map__21289__$1;
var app_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21289__$1,cljs.core.constant$keyword$253);
var views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21289__$1,cljs.core.constant$keyword$262);
var G__21286__$1 = G__21286;
var owner__$1 = owner;
var G__21287__$1 = G__21287;
while(true){
var map__21290 = G__21286__$1;
var map__21290__$1 = ((cljs.core.seq_QMARK_(map__21290))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21290):map__21290);
var state__$1 = map__21290__$1;
var component_stats__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21290__$1,cljs.core.constant$keyword$259);
var current__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21290__$1,cljs.core.constant$keyword$260);
var open_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21290__$1,cljs.core.constant$keyword$261);
var owner__$2 = owner__$1;
var map__21291 = G__21287__$1;
var map__21291__$1 = ((cljs.core.seq_QMARK_(map__21291))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21291):map__21291);
var opts__$1 = map__21291__$1;
var app_state__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21291__$1,cljs.core.constant$keyword$253);
var views__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21291__$1,cljs.core.constant$keyword$262);
if(typeof om_dev_tools.ui.t21292 !== 'undefined'){
} else {

/**
* @constructor
*/
om_dev_tools.ui.t21292 = (function (input_schema21248,component_stats,map__21291,owner,views,map__21290,G__21251,output_schema21247,map__21289,dev_tools,G__21286,G__21253,state,validate__10780__auto__,output_checker21250,map__21288,app_state,G__21252,input_checker21249,G__21287,open_QMARK_,opts,current,ufv__,meta21293){
this.input_schema21248 = input_schema21248;
this.component_stats = component_stats;
this.map__21291 = map__21291;
this.owner = owner;
this.views = views;
this.map__21290 = map__21290;
this.G__21251 = G__21251;
this.output_schema21247 = output_schema21247;
this.map__21289 = map__21289;
this.dev_tools = dev_tools;
this.G__21286 = G__21286;
this.G__21253 = G__21253;
this.state = state;
this.validate__10780__auto__ = validate__10780__auto__;
this.output_checker21250 = output_checker21250;
this.map__21288 = map__21288;
this.app_state = app_state;
this.G__21252 = G__21252;
this.input_checker21249 = input_checker21249;
this.G__21287 = G__21287;
this.open_QMARK_ = open_QMARK_;
this.opts = opts;
this.current = current;
this.ufv__ = ufv__;
this.meta21293 = meta21293;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_dev_tools.ui.t21292.prototype.om$core$IDisplayName$ = true;

om_dev_tools.ui.t21292.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__21290,map__21290__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__21291,map__21291__$1,opts__$1,app_state__$1,views__$1,G__21286,map__21288,map__21288__$1,state,component_stats,current,open_QMARK_,owner,G__21287,map__21289,map__21289__$1,opts,app_state,views,validate__10780__auto__,ufv___21312,output_schema21247_21313,input_schema21248_21314,input_checker21249_21315,output_checker21250_21316){
return (function (_){
var self__ = this;
var ___$1 = this;
return "dev-tools";
});})(map__21290,map__21290__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__21291,map__21291__$1,opts__$1,app_state__$1,views__$1,G__21286,map__21288,map__21288__$1,state,component_stats,current,open_QMARK_,owner,G__21287,map__21289,map__21289__$1,opts,app_state,views,validate__10780__auto__,ufv___21312,output_schema21247_21313,input_schema21248_21314,input_checker21249_21315,output_checker21250_21316))
;

om_dev_tools.ui.t21292.prototype.om$core$IRender$ = true;

om_dev_tools.ui.t21292.prototype.om$core$IRender$render$arity$1 = ((function (map__21290,map__21290__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__21291,map__21291__$1,opts__$1,app_state__$1,views__$1,G__21286,map__21288,map__21288__$1,state,component_stats,current,open_QMARK_,owner,G__21287,map__21289,map__21289__$1,opts,app_state,views,validate__10780__auto__,ufv___21312,output_schema21247_21313,input_schema21248_21314,input_checker21249_21315,output_checker21250_21316){
return (function (_){
var self__ = this;
var ___$1 = this;
window.document.body.className = (cljs.core.truth_(self__.open_QMARK_)?"dev":"");

if(cljs.core.truth_(self__.open_QMARK_)){
return sablono.interpreter.interpret((function (){var views__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([om_dev_tools.ui.default_views], 0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$263,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$264,(function (){var iter__4571__auto__ = ((function (views__$1,___$1,map__21290,map__21290__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__21291,map__21291__$1,opts__$1,app_state__$1,views__$1,G__21286,map__21288,map__21288__$1,state,component_stats,current,open_QMARK_,owner,G__21287,map__21289,map__21289__$1,opts,app_state,views,validate__10780__auto__,ufv___21312,output_schema21247_21313,input_schema21248_21314,input_checker21249_21315,output_checker21250_21316){
return (function iter__21295(s__21296){
return (new cljs.core.LazySeq(null,((function (views__$1,___$1,map__21290,map__21290__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__21291,map__21291__$1,opts__$1,app_state__$1,views__$1,G__21286,map__21288,map__21288__$1,state,component_stats,current,open_QMARK_,owner,G__21287,map__21289,map__21289__$1,opts,app_state,views,validate__10780__auto__,ufv___21312,output_schema21247_21313,input_schema21248_21314,input_checker21249_21315,output_checker21250_21316){
return (function (){
var s__21296__$1 = s__21296;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__21296__$1);
if(temp__4126__auto__){
var s__21296__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21296__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__21296__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__21298 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__21297 = (0);
while(true){
if((i__21297 < size__4570__auto__)){
var vec__21305 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__21297);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21305,(0),null);
var map__21306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21305,(1),null);
var map__21306__$1 = ((cljs.core.seq_QMARK_(map__21306))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21306):map__21306);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21306__$1,cljs.core.constant$keyword$135);
cljs.core.chunk_append(b__21298,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$114,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$260.cljs$core$IFn$_invoke$arity$1(self__.state),k))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$126,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$248,((function (i__21297,vec__21305,k,map__21306,map__21306__$1,label,c__4569__auto__,size__4570__auto__,b__21298,s__21296__$2,temp__4126__auto__,views__$1,___$1,map__21290,map__21290__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__21291,map__21291__$1,opts__$1,app_state__$1,views__$1,G__21286,map__21288,map__21288__$1,state,component_stats,current,open_QMARK_,owner,G__21287,map__21289,map__21289__$1,opts,app_state,views,validate__10780__auto__,ufv___21312,output_schema21247_21313,input_schema21248_21314,input_checker21249_21315,output_checker21250_21316){
return (function (){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.state,cljs.core.constant$keyword$260,k);
});})(i__21297,vec__21305,k,map__21306,map__21306__$1,label,c__4569__auto__,size__4570__auto__,b__21298,s__21296__$2,temp__4126__auto__,views__$1,___$1,map__21290,map__21290__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__21291,map__21291__$1,opts__$1,app_state__$1,views__$1,G__21286,map__21288,map__21288__$1,state,component_stats,current,open_QMARK_,owner,G__21287,map__21289,map__21289__$1,opts,app_state,views,validate__10780__auto__,ufv___21312,output_schema21247_21313,input_schema21248_21314,input_checker21249_21315,output_checker21250_21316))
], null),label], null)], null));

var G__21320 = (i__21297 + (1));
i__21297 = G__21320;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21298),iter__21295(cljs.core.chunk_rest(s__21296__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21298),null);
}
} else {
var vec__21307 = cljs.core.first(s__21296__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21307,(0),null);
var map__21308 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21307,(1),null);
var map__21308__$1 = ((cljs.core.seq_QMARK_(map__21308))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21308):map__21308);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21308__$1,cljs.core.constant$keyword$135);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$114,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$260.cljs$core$IFn$_invoke$arity$1(self__.state),k))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$126,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$248,((function (vec__21307,k,map__21308,map__21308__$1,label,s__21296__$2,temp__4126__auto__,views__$1,___$1,map__21290,map__21290__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__21291,map__21291__$1,opts__$1,app_state__$1,views__$1,G__21286,map__21288,map__21288__$1,state,component_stats,current,open_QMARK_,owner,G__21287,map__21289,map__21289__$1,opts,app_state,views,validate__10780__auto__,ufv___21312,output_schema21247_21313,input_schema21248_21314,input_checker21249_21315,output_checker21250_21316){
return (function (){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.state,cljs.core.constant$keyword$260,k);
});})(vec__21307,k,map__21308,map__21308__$1,label,s__21296__$2,temp__4126__auto__,views__$1,___$1,map__21290,map__21290__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__21291,map__21291__$1,opts__$1,app_state__$1,views__$1,G__21286,map__21288,map__21288__$1,state,component_stats,current,open_QMARK_,owner,G__21287,map__21289,map__21289__$1,opts,app_state,views,validate__10780__auto__,ufv___21312,output_schema21247_21313,input_schema21248_21314,input_checker21249_21315,output_checker21250_21316))
], null),label], null)], null),iter__21295(cljs.core.rest(s__21296__$2)));
}
} else {
return null;
}
break;
}
});})(views__$1,___$1,map__21290,map__21290__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__21291,map__21291__$1,opts__$1,app_state__$1,views__$1,G__21286,map__21288,map__21288__$1,state,component_stats,current,open_QMARK_,owner,G__21287,map__21289,map__21289__$1,opts,app_state,views,validate__10780__auto__,ufv___21312,output_schema21247_21313,input_schema21248_21314,input_checker21249_21315,output_checker21250_21316))
,null,null));
});})(views__$1,___$1,map__21290,map__21290__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__21291,map__21291__$1,opts__$1,app_state__$1,views__$1,G__21286,map__21288,map__21288__$1,state,component_stats,current,open_QMARK_,owner,G__21287,map__21289,map__21289__$1,opts,app_state,views,validate__10780__auto__,ufv___21312,output_schema21247_21313,input_schema21248_21314,input_checker21249_21315,output_checker21250_21316))
;
return iter__4571__auto__(views__$1);
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$265,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$266,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$244,((function (views__$1,___$1,map__21290,map__21290__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__21291,map__21291__$1,opts__$1,app_state__$1,views__$1,G__21286,map__21288,map__21288__$1,state,component_stats,current,open_QMARK_,owner,G__21287,map__21289,map__21289__$1,opts,app_state,views,validate__10780__auto__,ufv___21312,output_schema21247_21313,input_schema21248_21314,input_checker21249_21315,output_checker21250_21316){
return (function (){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.state,cljs.core.constant$keyword$261,cljs.core.not);
});})(views__$1,___$1,map__21290,map__21290__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__21291,map__21291__$1,opts__$1,app_state__$1,views__$1,G__21286,map__21288,map__21288__$1,state,component_stats,current,open_QMARK_,owner,G__21287,map__21289,map__21289__$1,opts,app_state,views,validate__10780__auto__,ufv___21312,output_schema21247_21313,input_schema21248_21314,input_checker21249_21315,output_checker21250_21316))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$251,"\u00D7"], null)], null)], null)], null),cljs.core.constant$keyword$257.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(views__$1,self__.current)).call(null,self__.state,self__.opts)], null);
})());
} else {
var G__21309 = {"className": "pull-right om-dev-tools-btn", "onClick": ((function (___$1,map__21290,map__21290__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__21291,map__21291__$1,opts__$1,app_state__$1,views__$1,G__21286,map__21288,map__21288__$1,state,component_stats,current,open_QMARK_,owner,G__21287,map__21289,map__21289__$1,opts,app_state,views,validate__10780__auto__,ufv___21312,output_schema21247_21313,input_schema21248_21314,input_checker21249_21315,output_checker21250_21316){
return (function (){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.state,cljs.core.constant$keyword$261,cljs.core.not);
});})(___$1,map__21290,map__21290__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__21291,map__21291__$1,opts__$1,app_state__$1,views__$1,G__21286,map__21288,map__21288__$1,state,component_stats,current,open_QMARK_,owner,G__21287,map__21289,map__21289__$1,opts,app_state,views,validate__10780__auto__,ufv___21312,output_schema21247_21313,input_schema21248_21314,input_checker21249_21315,output_checker21250_21316))
};
var G__21310 = "dev";
return React.DOM.button(G__21309,G__21310);
}
});})(map__21290,map__21290__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__21291,map__21291__$1,opts__$1,app_state__$1,views__$1,G__21286,map__21288,map__21288__$1,state,component_stats,current,open_QMARK_,owner,G__21287,map__21289,map__21289__$1,opts,app_state,views,validate__10780__auto__,ufv___21312,output_schema21247_21313,input_schema21248_21314,input_checker21249_21315,output_checker21250_21316))
;

om_dev_tools.ui.t21292.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__21290,map__21290__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__21291,map__21291__$1,opts__$1,app_state__$1,views__$1,G__21286,map__21288,map__21288__$1,state,component_stats,current,open_QMARK_,owner,G__21287,map__21289,map__21289__$1,opts,app_state,views,validate__10780__auto__,ufv___21312,output_schema21247_21313,input_schema21248_21314,input_checker21249_21315,output_checker21250_21316){
return (function (_21294){
var self__ = this;
var _21294__$1 = this;
return self__.meta21293;
});})(map__21290,map__21290__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__21291,map__21291__$1,opts__$1,app_state__$1,views__$1,G__21286,map__21288,map__21288__$1,state,component_stats,current,open_QMARK_,owner,G__21287,map__21289,map__21289__$1,opts,app_state,views,validate__10780__auto__,ufv___21312,output_schema21247_21313,input_schema21248_21314,input_checker21249_21315,output_checker21250_21316))
;

om_dev_tools.ui.t21292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__21290,map__21290__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__21291,map__21291__$1,opts__$1,app_state__$1,views__$1,G__21286,map__21288,map__21288__$1,state,component_stats,current,open_QMARK_,owner,G__21287,map__21289,map__21289__$1,opts,app_state,views,validate__10780__auto__,ufv___21312,output_schema21247_21313,input_schema21248_21314,input_checker21249_21315,output_checker21250_21316){
return (function (_21294,meta21293__$1){
var self__ = this;
var _21294__$1 = this;
return (new om_dev_tools.ui.t21292(self__.input_schema21248,self__.component_stats,self__.map__21291,self__.owner,self__.views,self__.map__21290,self__.G__21251,self__.output_schema21247,self__.map__21289,self__.dev_tools,self__.G__21286,self__.G__21253,self__.state,self__.validate__10780__auto__,self__.output_checker21250,self__.map__21288,self__.app_state,self__.G__21252,self__.input_checker21249,self__.G__21287,self__.open_QMARK_,self__.opts,self__.current,self__.ufv__,meta21293__$1));
});})(map__21290,map__21290__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__21291,map__21291__$1,opts__$1,app_state__$1,views__$1,G__21286,map__21288,map__21288__$1,state,component_stats,current,open_QMARK_,owner,G__21287,map__21289,map__21289__$1,opts,app_state,views,validate__10780__auto__,ufv___21312,output_schema21247_21313,input_schema21248_21314,input_checker21249_21315,output_checker21250_21316))
;

om_dev_tools.ui.t21292.cljs$lang$type = true;

om_dev_tools.ui.t21292.cljs$lang$ctorStr = "om-dev-tools.ui/t21292";

om_dev_tools.ui.t21292.cljs$lang$ctorPrWriter = ((function (map__21290,map__21290__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__21291,map__21291__$1,opts__$1,app_state__$1,views__$1,G__21286,map__21288,map__21288__$1,state,component_stats,current,open_QMARK_,owner,G__21287,map__21289,map__21289__$1,opts,app_state,views,validate__10780__auto__,ufv___21312,output_schema21247_21313,input_schema21248_21314,input_checker21249_21315,output_checker21250_21316){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"om-dev-tools.ui/t21292");
});})(map__21290,map__21290__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__21291,map__21291__$1,opts__$1,app_state__$1,views__$1,G__21286,map__21288,map__21288__$1,state,component_stats,current,open_QMARK_,owner,G__21287,map__21289,map__21289__$1,opts,app_state,views,validate__10780__auto__,ufv___21312,output_schema21247_21313,input_schema21248_21314,input_checker21249_21315,output_checker21250_21316))
;

om_dev_tools.ui.__GT_t21292 = ((function (map__21290,map__21290__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__21291,map__21291__$1,opts__$1,app_state__$1,views__$1,G__21286,map__21288,map__21288__$1,state,component_stats,current,open_QMARK_,owner,G__21287,map__21289,map__21289__$1,opts,app_state,views,validate__10780__auto__,ufv___21312,output_schema21247_21313,input_schema21248_21314,input_checker21249_21315,output_checker21250_21316){
return (function __GT_t21292(input_schema21248__$1,component_stats__$2,map__21291__$2,owner__$3,views__$2,map__21290__$2,G__21251__$1,output_schema21247__$1,map__21289__$2,dev_tools__$1,G__21286__$2,G__21253__$1,state__$2,validate__10780__auto____$1,output_checker21250__$1,map__21288__$2,app_state__$2,G__21252__$1,input_checker21249__$1,G__21287__$2,open_QMARK___$2,opts__$2,current__$2,ufv____$1,meta21293){
return (new om_dev_tools.ui.t21292(input_schema21248__$1,component_stats__$2,map__21291__$2,owner__$3,views__$2,map__21290__$2,G__21251__$1,output_schema21247__$1,map__21289__$2,dev_tools__$1,G__21286__$2,G__21253__$1,state__$2,validate__10780__auto____$1,output_checker21250__$1,map__21288__$2,app_state__$2,G__21252__$1,input_checker21249__$1,G__21287__$2,open_QMARK___$2,opts__$2,current__$2,ufv____$1,meta21293));
});})(map__21290,map__21290__$1,state__$1,component_stats__$1,current__$1,open_QMARK___$1,owner__$2,map__21291,map__21291__$1,opts__$1,app_state__$1,views__$1,G__21286,map__21288,map__21288__$1,state,component_stats,current,open_QMARK_,owner,G__21287,map__21289,map__21289__$1,opts,app_state,views,validate__10780__auto__,ufv___21312,output_schema21247_21313,input_schema21248_21314,input_checker21249_21315,output_checker21250_21316))
;

}

return (new om_dev_tools.ui.t21292(input_schema21248_21314,component_stats__$1,map__21291__$1,owner__$2,views__$1,map__21290__$1,G__21251,output_schema21247_21313,map__21289__$1,dev_tools,G__21286__$1,G__21253,state__$1,validate__10780__auto__,output_checker21250_21316,map__21288__$1,app_state__$1,G__21252,input_checker21249_21315,G__21287__$1,open_QMARK___$1,opts__$1,current__$1,ufv___21312,null));
break;
}
})();
if(cljs.core.truth_(validate__10780__auto__)){
var temp__4126__auto___21321 = (function (){var G__21311 = o__10783__auto__;
return (output_checker21250_21316.cljs$core$IFn$_invoke$arity$1 ? output_checker21250_21316.cljs$core$IFn$_invoke$arity$1(G__21311) : output_checker21250_21316.call(null,G__21311));
})();
if(cljs.core.truth_(temp__4126__auto___21321)){
var error__10782__auto___21322 = temp__4126__auto___21321;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"dev-tools","dev-tools",1391381292,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21322], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21322,cljs.core.constant$keyword$21,o__10783__auto__,cljs.core.constant$keyword$22,output_schema21247_21313,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

return o__10783__auto__;
});})(ufv___21312,output_schema21247_21313,input_schema21248_21314,input_checker21249_21315,output_checker21250_21316))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_dev_tools.ui.dev_tools),schema.core.make_fn_schema(output_schema21247_21313,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21248_21314], null)));

om_dev_tools.ui.__GT_dev_tools = (function() {
var __GT_dev_tools = null;
var __GT_dev_tools__1 = (function (cursor__20840__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(om_dev_tools.ui.dev_tools,cursor__20840__auto__);
});
var __GT_dev_tools__2 = (function (cursor__20840__auto__,m21246){
return om.core.build.cljs$core$IFn$_invoke$arity$3(om_dev_tools.ui.dev_tools,cursor__20840__auto__,m21246);
});
__GT_dev_tools = function(cursor__20840__auto__,m21246){
switch(arguments.length){
case 1:
return __GT_dev_tools__1.call(this,cursor__20840__auto__);
case 2:
return __GT_dev_tools__2.call(this,cursor__20840__auto__,m21246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_dev_tools.cljs$core$IFn$_invoke$arity$1 = __GT_dev_tools__1;
__GT_dev_tools.cljs$core$IFn$_invoke$arity$2 = __GT_dev_tools__2;
return __GT_dev_tools;
})()
;

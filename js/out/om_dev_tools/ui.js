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
om_dev_tools.ui.default_panels = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$256,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$135,"State",cljs.core.constant$keyword$258,om_dev_tools.state_tree.state_panel], null),cljs.core.constant$keyword$257,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$135,"Om instrumentation",cljs.core.constant$keyword$258,om_dev_tools.instrumentation.stats_panel], null)], null);

var ufv___21407 = schema.utils.use_fn_validation;
var output_schema21340_21408 = schema.core.Any;
var input_schema21341_21409 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker21342_21410 = schema.core.checker(input_schema21341_21409);
var output_checker21343_21411 = schema.core.checker(output_schema21340_21408);
/**
* Inputs: [{:keys [open? current], :as state} owner {:keys [panels], :as opts}]
*/
om_dev_tools.ui.dev_tools = ((function (ufv___21407,output_schema21340_21408,input_schema21341_21409,input_checker21342_21410,output_checker21343_21411){
return (function dev_tools(G__21344,G__21345,G__21346){
var validate__10780__auto__ = ufv___21407.get_cell();
if(cljs.core.truth_(validate__10780__auto__)){
var args__10781__auto___21412 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21344,G__21345,G__21346], null);
var temp__4126__auto___21413 = (function (){var G__21377 = args__10781__auto___21412;
return (input_checker21342_21410.cljs$core$IFn$_invoke$arity$1 ? input_checker21342_21410.cljs$core$IFn$_invoke$arity$1(G__21377) : input_checker21342_21410.call(null,G__21377));
})();
if(cljs.core.truth_(temp__4126__auto___21413)){
var error__10782__auto___21414 = temp__4126__auto___21413;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"dev-tools","dev-tools",1391381292,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21414], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21414,cljs.core.constant$keyword$21,args__10781__auto___21412,cljs.core.constant$keyword$22,input_schema21341_21409,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

var o__10783__auto__ = (function (){var G__21380 = G__21344;
var map__21382 = G__21380;
var map__21382__$1 = ((cljs.core.seq_QMARK_(map__21382))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21382):map__21382);
var state = map__21382__$1;
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21382__$1,cljs.core.constant$keyword$259);
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21382__$1,cljs.core.constant$keyword$260);
var owner = G__21345;
var G__21381 = G__21346;
var map__21383 = G__21381;
var map__21383__$1 = ((cljs.core.seq_QMARK_(map__21383))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21383):map__21383);
var opts = map__21383__$1;
var panels = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21383__$1,cljs.core.constant$keyword$261);
var G__21380__$1 = G__21380;
var owner__$1 = owner;
var G__21381__$1 = G__21381;
while(true){
var map__21384 = G__21380__$1;
var map__21384__$1 = ((cljs.core.seq_QMARK_(map__21384))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21384):map__21384);
var state__$1 = map__21384__$1;
var current__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21384__$1,cljs.core.constant$keyword$259);
var open_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21384__$1,cljs.core.constant$keyword$260);
var owner__$2 = owner__$1;
var map__21385 = G__21381__$1;
var map__21385__$1 = ((cljs.core.seq_QMARK_(map__21385))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21385):map__21385);
var opts__$1 = map__21385__$1;
var panels__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21385__$1,cljs.core.constant$keyword$261);
if(typeof om_dev_tools.ui.t21386 !== 'undefined'){
} else {

/**
* @constructor
*/
om_dev_tools.ui.t21386 = (function (output_schema21340,panels,owner,G__21345,map__21385,output_checker21343,G__21380,dev_tools,G__21381,input_checker21342,map__21384,G__21344,state,validate__10780__auto__,input_schema21341,open_QMARK_,opts,current,G__21346,ufv__,map__21382,map__21383,meta21387){
this.output_schema21340 = output_schema21340;
this.panels = panels;
this.owner = owner;
this.G__21345 = G__21345;
this.map__21385 = map__21385;
this.output_checker21343 = output_checker21343;
this.G__21380 = G__21380;
this.dev_tools = dev_tools;
this.G__21381 = G__21381;
this.input_checker21342 = input_checker21342;
this.map__21384 = map__21384;
this.G__21344 = G__21344;
this.state = state;
this.validate__10780__auto__ = validate__10780__auto__;
this.input_schema21341 = input_schema21341;
this.open_QMARK_ = open_QMARK_;
this.opts = opts;
this.current = current;
this.G__21346 = G__21346;
this.ufv__ = ufv__;
this.map__21382 = map__21382;
this.map__21383 = map__21383;
this.meta21387 = meta21387;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_dev_tools.ui.t21386.prototype.om$core$IDisplayName$ = true;

om_dev_tools.ui.t21386.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__21384,map__21384__$1,state__$1,current__$1,open_QMARK___$1,owner__$2,map__21385,map__21385__$1,opts__$1,panels__$1,G__21380,map__21382,map__21382__$1,state,current,open_QMARK_,owner,G__21381,map__21383,map__21383__$1,opts,panels,validate__10780__auto__,ufv___21407,output_schema21340_21408,input_schema21341_21409,input_checker21342_21410,output_checker21343_21411){
return (function (_){
var self__ = this;
var ___$1 = this;
return "dev-tools";
});})(map__21384,map__21384__$1,state__$1,current__$1,open_QMARK___$1,owner__$2,map__21385,map__21385__$1,opts__$1,panels__$1,G__21380,map__21382,map__21382__$1,state,current,open_QMARK_,owner,G__21381,map__21383,map__21383__$1,opts,panels,validate__10780__auto__,ufv___21407,output_schema21340_21408,input_schema21341_21409,input_checker21342_21410,output_checker21343_21411))
;

om_dev_tools.ui.t21386.prototype.om$core$IRender$ = true;

om_dev_tools.ui.t21386.prototype.om$core$IRender$render$arity$1 = ((function (map__21384,map__21384__$1,state__$1,current__$1,open_QMARK___$1,owner__$2,map__21385,map__21385__$1,opts__$1,panels__$1,G__21380,map__21382,map__21382__$1,state,current,open_QMARK_,owner,G__21381,map__21383,map__21383__$1,opts,panels,validate__10780__auto__,ufv___21407,output_schema21340_21408,input_schema21341_21409,input_checker21342_21410,output_checker21343_21411){
return (function (_){
var self__ = this;
var ___$1 = this;
window.document.body.className = (cljs.core.truth_(self__.open_QMARK_)?"dev":"");

if(cljs.core.truth_(self__.open_QMARK_)){
return sablono.interpreter.interpret((function (){var all_panels = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([om_dev_tools.ui.default_panels,self__.panels], 0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$262,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$263,(function (){var iter__4571__auto__ = ((function (all_panels,___$1,map__21384,map__21384__$1,state__$1,current__$1,open_QMARK___$1,owner__$2,map__21385,map__21385__$1,opts__$1,panels__$1,G__21380,map__21382,map__21382__$1,state,current,open_QMARK_,owner,G__21381,map__21383,map__21383__$1,opts,panels,validate__10780__auto__,ufv___21407,output_schema21340_21408,input_schema21341_21409,input_checker21342_21410,output_checker21343_21411){
return (function iter__21389(s__21390){
return (new cljs.core.LazySeq(null,((function (all_panels,___$1,map__21384,map__21384__$1,state__$1,current__$1,open_QMARK___$1,owner__$2,map__21385,map__21385__$1,opts__$1,panels__$1,G__21380,map__21382,map__21382__$1,state,current,open_QMARK_,owner,G__21381,map__21383,map__21383__$1,opts,panels,validate__10780__auto__,ufv___21407,output_schema21340_21408,input_schema21341_21409,input_checker21342_21410,output_checker21343_21411){
return (function (){
var s__21390__$1 = s__21390;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__21390__$1);
if(temp__4126__auto__){
var s__21390__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21390__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__21390__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__21392 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__21391 = (0);
while(true){
if((i__21391 < size__4570__auto__)){
var vec__21399 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__21391);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21399,(0),null);
var map__21400 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21399,(1),null);
var map__21400__$1 = ((cljs.core.seq_QMARK_(map__21400))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21400):map__21400);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21400__$1,cljs.core.constant$keyword$135);
cljs.core.chunk_append(b__21392,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$114,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$259.cljs$core$IFn$_invoke$arity$1(self__.state),k))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$126,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,((function (i__21391,vec__21399,k,map__21400,map__21400__$1,label,c__4569__auto__,size__4570__auto__,b__21392,s__21390__$2,temp__4126__auto__,all_panels,___$1,map__21384,map__21384__$1,state__$1,current__$1,open_QMARK___$1,owner__$2,map__21385,map__21385__$1,opts__$1,panels__$1,G__21380,map__21382,map__21382__$1,state,current,open_QMARK_,owner,G__21381,map__21383,map__21383__$1,opts,panels,validate__10780__auto__,ufv___21407,output_schema21340_21408,input_schema21341_21409,input_checker21342_21410,output_checker21343_21411){
return (function (){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.state,cljs.core.constant$keyword$259,k);
});})(i__21391,vec__21399,k,map__21400,map__21400__$1,label,c__4569__auto__,size__4570__auto__,b__21392,s__21390__$2,temp__4126__auto__,all_panels,___$1,map__21384,map__21384__$1,state__$1,current__$1,open_QMARK___$1,owner__$2,map__21385,map__21385__$1,opts__$1,panels__$1,G__21380,map__21382,map__21382__$1,state,current,open_QMARK_,owner,G__21381,map__21383,map__21383__$1,opts,panels,validate__10780__auto__,ufv___21407,output_schema21340_21408,input_schema21341_21409,input_checker21342_21410,output_checker21343_21411))
], null),label], null)], null));

var G__21415 = (i__21391 + (1));
i__21391 = G__21415;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21392),iter__21389(cljs.core.chunk_rest(s__21390__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21392),null);
}
} else {
var vec__21401 = cljs.core.first(s__21390__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21401,(0),null);
var map__21402 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21401,(1),null);
var map__21402__$1 = ((cljs.core.seq_QMARK_(map__21402))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21402):map__21402);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21402__$1,cljs.core.constant$keyword$135);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$114,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$259.cljs$core$IFn$_invoke$arity$1(self__.state),k))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$126,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,((function (vec__21401,k,map__21402,map__21402__$1,label,s__21390__$2,temp__4126__auto__,all_panels,___$1,map__21384,map__21384__$1,state__$1,current__$1,open_QMARK___$1,owner__$2,map__21385,map__21385__$1,opts__$1,panels__$1,G__21380,map__21382,map__21382__$1,state,current,open_QMARK_,owner,G__21381,map__21383,map__21383__$1,opts,panels,validate__10780__auto__,ufv___21407,output_schema21340_21408,input_schema21341_21409,input_checker21342_21410,output_checker21343_21411){
return (function (){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.state,cljs.core.constant$keyword$259,k);
});})(vec__21401,k,map__21402,map__21402__$1,label,s__21390__$2,temp__4126__auto__,all_panels,___$1,map__21384,map__21384__$1,state__$1,current__$1,open_QMARK___$1,owner__$2,map__21385,map__21385__$1,opts__$1,panels__$1,G__21380,map__21382,map__21382__$1,state,current,open_QMARK_,owner,G__21381,map__21383,map__21383__$1,opts,panels,validate__10780__auto__,ufv___21407,output_schema21340_21408,input_schema21341_21409,input_checker21342_21410,output_checker21343_21411))
], null),label], null)], null),iter__21389(cljs.core.rest(s__21390__$2)));
}
} else {
return null;
}
break;
}
});})(all_panels,___$1,map__21384,map__21384__$1,state__$1,current__$1,open_QMARK___$1,owner__$2,map__21385,map__21385__$1,opts__$1,panels__$1,G__21380,map__21382,map__21382__$1,state,current,open_QMARK_,owner,G__21381,map__21383,map__21383__$1,opts,panels,validate__10780__auto__,ufv___21407,output_schema21340_21408,input_schema21341_21409,input_checker21342_21410,output_checker21343_21411))
,null,null));
});})(all_panels,___$1,map__21384,map__21384__$1,state__$1,current__$1,open_QMARK___$1,owner__$2,map__21385,map__21385__$1,opts__$1,panels__$1,G__21380,map__21382,map__21382__$1,state,current,open_QMARK_,owner,G__21381,map__21383,map__21383__$1,opts,panels,validate__10780__auto__,ufv___21407,output_schema21340_21408,input_schema21341_21409,input_checker21342_21410,output_checker21343_21411))
;
return iter__4571__auto__(all_panels);
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$264,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$265,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$245,((function (all_panels,___$1,map__21384,map__21384__$1,state__$1,current__$1,open_QMARK___$1,owner__$2,map__21385,map__21385__$1,opts__$1,panels__$1,G__21380,map__21382,map__21382__$1,state,current,open_QMARK_,owner,G__21381,map__21383,map__21383__$1,opts,panels,validate__10780__auto__,ufv___21407,output_schema21340_21408,input_schema21341_21409,input_checker21342_21410,output_checker21343_21411){
return (function (){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.state,cljs.core.constant$keyword$260,cljs.core.not);
});})(all_panels,___$1,map__21384,map__21384__$1,state__$1,current__$1,open_QMARK___$1,owner__$2,map__21385,map__21385__$1,opts__$1,panels__$1,G__21380,map__21382,map__21382__$1,state,current,open_QMARK_,owner,G__21381,map__21383,map__21383__$1,opts,panels,validate__10780__auto__,ufv___21407,output_schema21340_21408,input_schema21341_21409,input_checker21342_21410,output_checker21343_21411))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$252,"\u00D7"], null)], null)], null)], null),om.core.build.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$258.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_panels,self__.current)),self__.state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$86,self__.opts], null))], null);
})());
} else {
var G__21403 = "button";
var G__21404 = {"className": "pull-right om-dev-tools-btn", "onClick": ((function (G__21403,___$1,map__21384,map__21384__$1,state__$1,current__$1,open_QMARK___$1,owner__$2,map__21385,map__21385__$1,opts__$1,panels__$1,G__21380,map__21382,map__21382__$1,state,current,open_QMARK_,owner,G__21381,map__21383,map__21383__$1,opts,panels,validate__10780__auto__,ufv___21407,output_schema21340_21408,input_schema21341_21409,input_checker21342_21410,output_checker21343_21411){
return (function (){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.state,cljs.core.constant$keyword$260,cljs.core.not);
});})(G__21403,___$1,map__21384,map__21384__$1,state__$1,current__$1,open_QMARK___$1,owner__$2,map__21385,map__21385__$1,opts__$1,panels__$1,G__21380,map__21382,map__21382__$1,state,current,open_QMARK_,owner,G__21381,map__21383,map__21383__$1,opts,panels,validate__10780__auto__,ufv___21407,output_schema21340_21408,input_schema21341_21409,input_checker21342_21410,output_checker21343_21411))
};
var G__21405 = "dev";
return React.createElement(G__21403,G__21404,G__21405);
}
});})(map__21384,map__21384__$1,state__$1,current__$1,open_QMARK___$1,owner__$2,map__21385,map__21385__$1,opts__$1,panels__$1,G__21380,map__21382,map__21382__$1,state,current,open_QMARK_,owner,G__21381,map__21383,map__21383__$1,opts,panels,validate__10780__auto__,ufv___21407,output_schema21340_21408,input_schema21341_21409,input_checker21342_21410,output_checker21343_21411))
;

om_dev_tools.ui.t21386.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__21384,map__21384__$1,state__$1,current__$1,open_QMARK___$1,owner__$2,map__21385,map__21385__$1,opts__$1,panels__$1,G__21380,map__21382,map__21382__$1,state,current,open_QMARK_,owner,G__21381,map__21383,map__21383__$1,opts,panels,validate__10780__auto__,ufv___21407,output_schema21340_21408,input_schema21341_21409,input_checker21342_21410,output_checker21343_21411){
return (function (_21388){
var self__ = this;
var _21388__$1 = this;
return self__.meta21387;
});})(map__21384,map__21384__$1,state__$1,current__$1,open_QMARK___$1,owner__$2,map__21385,map__21385__$1,opts__$1,panels__$1,G__21380,map__21382,map__21382__$1,state,current,open_QMARK_,owner,G__21381,map__21383,map__21383__$1,opts,panels,validate__10780__auto__,ufv___21407,output_schema21340_21408,input_schema21341_21409,input_checker21342_21410,output_checker21343_21411))
;

om_dev_tools.ui.t21386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__21384,map__21384__$1,state__$1,current__$1,open_QMARK___$1,owner__$2,map__21385,map__21385__$1,opts__$1,panels__$1,G__21380,map__21382,map__21382__$1,state,current,open_QMARK_,owner,G__21381,map__21383,map__21383__$1,opts,panels,validate__10780__auto__,ufv___21407,output_schema21340_21408,input_schema21341_21409,input_checker21342_21410,output_checker21343_21411){
return (function (_21388,meta21387__$1){
var self__ = this;
var _21388__$1 = this;
return (new om_dev_tools.ui.t21386(self__.output_schema21340,self__.panels,self__.owner,self__.G__21345,self__.map__21385,self__.output_checker21343,self__.G__21380,self__.dev_tools,self__.G__21381,self__.input_checker21342,self__.map__21384,self__.G__21344,self__.state,self__.validate__10780__auto__,self__.input_schema21341,self__.open_QMARK_,self__.opts,self__.current,self__.G__21346,self__.ufv__,self__.map__21382,self__.map__21383,meta21387__$1));
});})(map__21384,map__21384__$1,state__$1,current__$1,open_QMARK___$1,owner__$2,map__21385,map__21385__$1,opts__$1,panels__$1,G__21380,map__21382,map__21382__$1,state,current,open_QMARK_,owner,G__21381,map__21383,map__21383__$1,opts,panels,validate__10780__auto__,ufv___21407,output_schema21340_21408,input_schema21341_21409,input_checker21342_21410,output_checker21343_21411))
;

om_dev_tools.ui.t21386.cljs$lang$type = true;

om_dev_tools.ui.t21386.cljs$lang$ctorStr = "om-dev-tools.ui/t21386";

om_dev_tools.ui.t21386.cljs$lang$ctorPrWriter = ((function (map__21384,map__21384__$1,state__$1,current__$1,open_QMARK___$1,owner__$2,map__21385,map__21385__$1,opts__$1,panels__$1,G__21380,map__21382,map__21382__$1,state,current,open_QMARK_,owner,G__21381,map__21383,map__21383__$1,opts,panels,validate__10780__auto__,ufv___21407,output_schema21340_21408,input_schema21341_21409,input_checker21342_21410,output_checker21343_21411){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"om-dev-tools.ui/t21386");
});})(map__21384,map__21384__$1,state__$1,current__$1,open_QMARK___$1,owner__$2,map__21385,map__21385__$1,opts__$1,panels__$1,G__21380,map__21382,map__21382__$1,state,current,open_QMARK_,owner,G__21381,map__21383,map__21383__$1,opts,panels,validate__10780__auto__,ufv___21407,output_schema21340_21408,input_schema21341_21409,input_checker21342_21410,output_checker21343_21411))
;

om_dev_tools.ui.__GT_t21386 = ((function (map__21384,map__21384__$1,state__$1,current__$1,open_QMARK___$1,owner__$2,map__21385,map__21385__$1,opts__$1,panels__$1,G__21380,map__21382,map__21382__$1,state,current,open_QMARK_,owner,G__21381,map__21383,map__21383__$1,opts,panels,validate__10780__auto__,ufv___21407,output_schema21340_21408,input_schema21341_21409,input_checker21342_21410,output_checker21343_21411){
return (function __GT_t21386(output_schema21340__$1,panels__$2,owner__$3,G__21345__$1,map__21385__$2,output_checker21343__$1,G__21380__$2,dev_tools__$1,G__21381__$2,input_checker21342__$1,map__21384__$2,G__21344__$1,state__$2,validate__10780__auto____$1,input_schema21341__$1,open_QMARK___$2,opts__$2,current__$2,G__21346__$1,ufv____$1,map__21382__$2,map__21383__$2,meta21387){
return (new om_dev_tools.ui.t21386(output_schema21340__$1,panels__$2,owner__$3,G__21345__$1,map__21385__$2,output_checker21343__$1,G__21380__$2,dev_tools__$1,G__21381__$2,input_checker21342__$1,map__21384__$2,G__21344__$1,state__$2,validate__10780__auto____$1,input_schema21341__$1,open_QMARK___$2,opts__$2,current__$2,G__21346__$1,ufv____$1,map__21382__$2,map__21383__$2,meta21387));
});})(map__21384,map__21384__$1,state__$1,current__$1,open_QMARK___$1,owner__$2,map__21385,map__21385__$1,opts__$1,panels__$1,G__21380,map__21382,map__21382__$1,state,current,open_QMARK_,owner,G__21381,map__21383,map__21383__$1,opts,panels,validate__10780__auto__,ufv___21407,output_schema21340_21408,input_schema21341_21409,input_checker21342_21410,output_checker21343_21411))
;

}

return (new om_dev_tools.ui.t21386(output_schema21340_21408,panels__$1,owner__$2,G__21345,map__21385__$1,output_checker21343_21411,G__21380__$1,dev_tools,G__21381__$1,input_checker21342_21410,map__21384__$1,G__21344,state__$1,validate__10780__auto__,input_schema21341_21409,open_QMARK___$1,opts__$1,current__$1,G__21346,ufv___21407,map__21382__$1,map__21383__$1,null));
break;
}
})();
if(cljs.core.truth_(validate__10780__auto__)){
var temp__4126__auto___21416 = (function (){var G__21406 = o__10783__auto__;
return (output_checker21343_21411.cljs$core$IFn$_invoke$arity$1 ? output_checker21343_21411.cljs$core$IFn$_invoke$arity$1(G__21406) : output_checker21343_21411.call(null,G__21406));
})();
if(cljs.core.truth_(temp__4126__auto___21416)){
var error__10782__auto___21417 = temp__4126__auto___21416;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"dev-tools","dev-tools",1391381292,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21417], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21417,cljs.core.constant$keyword$21,o__10783__auto__,cljs.core.constant$keyword$22,output_schema21340_21408,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

return o__10783__auto__;
});})(ufv___21407,output_schema21340_21408,input_schema21341_21409,input_checker21342_21410,output_checker21343_21411))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_dev_tools.ui.dev_tools),schema.core.make_fn_schema(output_schema21340_21408,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21341_21409], null)));

om_dev_tools.ui.__GT_dev_tools = (function() {
var __GT_dev_tools = null;
var __GT_dev_tools__1 = (function (cursor__20840__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(om_dev_tools.ui.dev_tools,cursor__20840__auto__);
});
var __GT_dev_tools__2 = (function (cursor__20840__auto__,m21339){
return om.core.build.cljs$core$IFn$_invoke$arity$3(om_dev_tools.ui.dev_tools,cursor__20840__auto__,m21339);
});
__GT_dev_tools = function(cursor__20840__auto__,m21339){
switch(arguments.length){
case 1:
return __GT_dev_tools__1.call(this,cursor__20840__auto__);
case 2:
return __GT_dev_tools__2.call(this,cursor__20840__auto__,m21339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_dev_tools.cljs$core$IFn$_invoke$arity$1 = __GT_dev_tools__1;
__GT_dev_tools.cljs$core$IFn$_invoke$arity$2 = __GT_dev_tools__2;
return __GT_dev_tools;
})()
;

// Compiled by ClojureScript 0.0-2850 {}
goog.provide('om_dev_tools.state_tree');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('om_tools.core');
goog.require('om.core');
om_dev_tools.state_tree.toggle = (function toggle(ks,v){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(v,ks))){
return cljs.core.assoc_in(v,ks,null);
} else {
return cljs.core.assoc_in(v,ks,cljs.core.PersistentArrayMap.EMPTY);
}
});
om_dev_tools.state_tree.tree = (function tree(state,v,ks){
if(cljs.core.coll_QMARK_(v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$127,(function (){var iter__4571__auto__ = (function iter__21355(s__21356){
return (new cljs.core.LazySeq(null,(function (){
var s__21356__$1 = s__21356;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__21356__$1);
if(temp__4126__auto__){
var s__21356__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21356__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__21356__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__21358 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__21357 = (0);
while(true){
if((i__21357 < size__4570__auto__)){
var vec__21363 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__21357);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21363,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21363,(1),null);
var ks__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ks,k);
cljs.core.chunk_append(b__21358,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$47,k,cljs.core.constant$keyword$114,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.coll_QMARK_(v__$1))?"coll":"single"),(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,ks__$1))?"open":"closed")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$247,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$248,((function (i__21357,ks__$1,vec__21363,k,v__$1,c__4569__auto__,size__4570__auto__,b__21358,s__21356__$2,temp__4126__auto__){
return (function (){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(state,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(om_dev_tools.state_tree.toggle,ks__$1));
});})(i__21357,ks__$1,vec__21363,k,v__$1,c__4569__auto__,size__4570__auto__,b__21358,s__21356__$2,temp__4126__auto__))
], null),(((k instanceof cljs.core.Keyword))?cljs.core.name(k):k)], null),": ",(cljs.core.truth_((function (){var or__3815__auto__ = !(cljs.core.coll_QMARK_(v__$1));
if(or__3815__auto__){
return or__3815__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,ks__$1);
}
})())?tree(state,v__$1,ks__$1):null)], null));

var G__21365 = (i__21357 + (1));
i__21357 = G__21365;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21358),iter__21355(cljs.core.chunk_rest(s__21356__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21358),null);
}
} else {
var vec__21364 = cljs.core.first(s__21356__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21364,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21364,(1),null);
var ks__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ks,k);
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$47,k,cljs.core.constant$keyword$114,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.coll_QMARK_(v__$1))?"coll":"single"),(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,ks__$1))?"open":"closed")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$247,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$248,((function (ks__$1,vec__21364,k,v__$1,s__21356__$2,temp__4126__auto__){
return (function (){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(state,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(om_dev_tools.state_tree.toggle,ks__$1));
});})(ks__$1,vec__21364,k,v__$1,s__21356__$2,temp__4126__auto__))
], null),(((k instanceof cljs.core.Keyword))?cljs.core.name(k):k)], null),": ",(cljs.core.truth_((function (){var or__3815__auto__ = !(cljs.core.coll_QMARK_(v__$1));
if(or__3815__auto__){
return or__3815__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,ks__$1);
}
})())?tree(state,v__$1,ks__$1):null)], null),iter__21355(cljs.core.rest(s__21356__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4571__auto__(((cljs.core.map_QMARK_(v))?v:cljs.core.zipmap(cljs.core.range.cljs$core$IFn$_invoke$arity$0(),v)));
})()], null);
} else {
if(typeof v === 'string'){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$249,"\"",v,"\""], null);
} else {
if((v == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250,"nil"], null);
} else {
if((v instanceof goog.date.UtcDateTime)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$251,v,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$252,"datetime"], null)], null);
} else {
if((v instanceof goog.date.Date)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$251,v,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$252,"localdate"], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$251,[cljs.core.str(v)].join('')], null);

}
}
}
}
}
});

var ufv___21391 = schema.utils.use_fn_validation;
var output_schema21367_21392 = schema.core.Any;
var input_schema21368_21393 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker21369_21394 = schema.core.checker(input_schema21368_21393);
var output_checker21370_21395 = schema.core.checker(output_schema21367_21392);
/**
* Inputs: [{:keys [state-tree-state app-state]} owner]
*/
om_dev_tools.state_tree.state_view = ((function (ufv___21391,output_schema21367_21392,input_schema21368_21393,input_checker21369_21394,output_checker21370_21395){
return (function state_view(G__21371,G__21372){
var validate__10780__auto__ = ufv___21391.get_cell();
if(cljs.core.truth_(validate__10780__auto__)){
var args__10781__auto___21396 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21371,G__21372], null);
var temp__4126__auto___21397 = (function (){var G__21382 = args__10781__auto___21396;
return (input_checker21369_21394.cljs$core$IFn$_invoke$arity$1 ? input_checker21369_21394.cljs$core$IFn$_invoke$arity$1(G__21382) : input_checker21369_21394.call(null,G__21382));
})();
if(cljs.core.truth_(temp__4126__auto___21397)){
var error__10782__auto___21398 = temp__4126__auto___21397;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"state-view","state-view",-1362991612,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21398], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21398,cljs.core.constant$keyword$21,args__10781__auto___21396,cljs.core.constant$keyword$22,input_schema21368_21393,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

var o__10783__auto__ = (function (){var G__21384 = G__21371;
var map__21385 = G__21384;
var map__21385__$1 = ((cljs.core.seq_QMARK_(map__21385))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21385):map__21385);
var app_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21385__$1,cljs.core.constant$keyword$253);
var state_tree_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21385__$1,cljs.core.constant$keyword$254);
var owner = G__21372;
var G__21384__$1 = G__21384;
var owner__$1 = owner;
while(true){
var map__21386 = G__21384__$1;
var map__21386__$1 = ((cljs.core.seq_QMARK_(map__21386))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21386):map__21386);
var app_state__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21386__$1,cljs.core.constant$keyword$253);
var state_tree_state__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21386__$1,cljs.core.constant$keyword$254);
var owner__$2 = owner__$1;
if(typeof om_dev_tools.state_tree.t21387 !== 'undefined'){
} else {

/**
* @constructor
*/
om_dev_tools.state_tree.t21387 = (function (input_checker21369,owner,state_view,G__21384,map__21385,G__21372,G__21371,validate__10780__auto__,map__21386,output_schema21367,app_state,state_tree_state,ufv__,input_schema21368,output_checker21370,meta21388){
this.input_checker21369 = input_checker21369;
this.owner = owner;
this.state_view = state_view;
this.G__21384 = G__21384;
this.map__21385 = map__21385;
this.G__21372 = G__21372;
this.G__21371 = G__21371;
this.validate__10780__auto__ = validate__10780__auto__;
this.map__21386 = map__21386;
this.output_schema21367 = output_schema21367;
this.app_state = app_state;
this.state_tree_state = state_tree_state;
this.ufv__ = ufv__;
this.input_schema21368 = input_schema21368;
this.output_checker21370 = output_checker21370;
this.meta21388 = meta21388;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_dev_tools.state_tree.t21387.prototype.om$core$IDisplayName$ = true;

om_dev_tools.state_tree.t21387.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__21386,map__21386__$1,app_state__$1,state_tree_state__$1,owner__$2,G__21384,map__21385,map__21385__$1,app_state,state_tree_state,owner,validate__10780__auto__,ufv___21391,output_schema21367_21392,input_schema21368_21393,input_checker21369_21394,output_checker21370_21395){
return (function (_){
var self__ = this;
var ___$1 = this;
return "state-view";
});})(map__21386,map__21386__$1,app_state__$1,state_tree_state__$1,owner__$2,G__21384,map__21385,map__21385__$1,app_state,state_tree_state,owner,validate__10780__auto__,ufv___21391,output_schema21367_21392,input_schema21368_21393,input_checker21369_21394,output_checker21370_21395))
;

om_dev_tools.state_tree.t21387.prototype.om$core$IRender$ = true;

om_dev_tools.state_tree.t21387.prototype.om$core$IRender$render$arity$1 = ((function (map__21386,map__21386__$1,app_state__$1,state_tree_state__$1,owner__$2,G__21384,map__21385,map__21385__$1,app_state,state_tree_state,owner,validate__10780__auto__,ufv___21391,output_schema21367_21392,input_schema21368_21393,input_checker21369_21394,output_checker21370_21395){
return (function (_){
var self__ = this;
var ___$1 = this;
return sablono.interpreter.interpret(om_dev_tools.state_tree.tree(self__.state_tree_state,self__.app_state,cljs.core.PersistentVector.EMPTY));
});})(map__21386,map__21386__$1,app_state__$1,state_tree_state__$1,owner__$2,G__21384,map__21385,map__21385__$1,app_state,state_tree_state,owner,validate__10780__auto__,ufv___21391,output_schema21367_21392,input_schema21368_21393,input_checker21369_21394,output_checker21370_21395))
;

om_dev_tools.state_tree.t21387.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__21386,map__21386__$1,app_state__$1,state_tree_state__$1,owner__$2,G__21384,map__21385,map__21385__$1,app_state,state_tree_state,owner,validate__10780__auto__,ufv___21391,output_schema21367_21392,input_schema21368_21393,input_checker21369_21394,output_checker21370_21395){
return (function (_21389){
var self__ = this;
var _21389__$1 = this;
return self__.meta21388;
});})(map__21386,map__21386__$1,app_state__$1,state_tree_state__$1,owner__$2,G__21384,map__21385,map__21385__$1,app_state,state_tree_state,owner,validate__10780__auto__,ufv___21391,output_schema21367_21392,input_schema21368_21393,input_checker21369_21394,output_checker21370_21395))
;

om_dev_tools.state_tree.t21387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__21386,map__21386__$1,app_state__$1,state_tree_state__$1,owner__$2,G__21384,map__21385,map__21385__$1,app_state,state_tree_state,owner,validate__10780__auto__,ufv___21391,output_schema21367_21392,input_schema21368_21393,input_checker21369_21394,output_checker21370_21395){
return (function (_21389,meta21388__$1){
var self__ = this;
var _21389__$1 = this;
return (new om_dev_tools.state_tree.t21387(self__.input_checker21369,self__.owner,self__.state_view,self__.G__21384,self__.map__21385,self__.G__21372,self__.G__21371,self__.validate__10780__auto__,self__.map__21386,self__.output_schema21367,self__.app_state,self__.state_tree_state,self__.ufv__,self__.input_schema21368,self__.output_checker21370,meta21388__$1));
});})(map__21386,map__21386__$1,app_state__$1,state_tree_state__$1,owner__$2,G__21384,map__21385,map__21385__$1,app_state,state_tree_state,owner,validate__10780__auto__,ufv___21391,output_schema21367_21392,input_schema21368_21393,input_checker21369_21394,output_checker21370_21395))
;

om_dev_tools.state_tree.t21387.cljs$lang$type = true;

om_dev_tools.state_tree.t21387.cljs$lang$ctorStr = "om-dev-tools.state-tree/t21387";

om_dev_tools.state_tree.t21387.cljs$lang$ctorPrWriter = ((function (map__21386,map__21386__$1,app_state__$1,state_tree_state__$1,owner__$2,G__21384,map__21385,map__21385__$1,app_state,state_tree_state,owner,validate__10780__auto__,ufv___21391,output_schema21367_21392,input_schema21368_21393,input_checker21369_21394,output_checker21370_21395){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"om-dev-tools.state-tree/t21387");
});})(map__21386,map__21386__$1,app_state__$1,state_tree_state__$1,owner__$2,G__21384,map__21385,map__21385__$1,app_state,state_tree_state,owner,validate__10780__auto__,ufv___21391,output_schema21367_21392,input_schema21368_21393,input_checker21369_21394,output_checker21370_21395))
;

om_dev_tools.state_tree.__GT_t21387 = ((function (map__21386,map__21386__$1,app_state__$1,state_tree_state__$1,owner__$2,G__21384,map__21385,map__21385__$1,app_state,state_tree_state,owner,validate__10780__auto__,ufv___21391,output_schema21367_21392,input_schema21368_21393,input_checker21369_21394,output_checker21370_21395){
return (function __GT_t21387(input_checker21369__$1,owner__$3,state_view__$1,G__21384__$2,map__21385__$2,G__21372__$1,G__21371__$1,validate__10780__auto____$1,map__21386__$2,output_schema21367__$1,app_state__$2,state_tree_state__$2,ufv____$1,input_schema21368__$1,output_checker21370__$1,meta21388){
return (new om_dev_tools.state_tree.t21387(input_checker21369__$1,owner__$3,state_view__$1,G__21384__$2,map__21385__$2,G__21372__$1,G__21371__$1,validate__10780__auto____$1,map__21386__$2,output_schema21367__$1,app_state__$2,state_tree_state__$2,ufv____$1,input_schema21368__$1,output_checker21370__$1,meta21388));
});})(map__21386,map__21386__$1,app_state__$1,state_tree_state__$1,owner__$2,G__21384,map__21385,map__21385__$1,app_state,state_tree_state,owner,validate__10780__auto__,ufv___21391,output_schema21367_21392,input_schema21368_21393,input_checker21369_21394,output_checker21370_21395))
;

}

return (new om_dev_tools.state_tree.t21387(input_checker21369_21394,owner__$2,state_view,G__21384__$1,map__21385__$1,G__21372,G__21371,validate__10780__auto__,map__21386__$1,output_schema21367_21392,app_state__$1,state_tree_state__$1,ufv___21391,input_schema21368_21393,output_checker21370_21395,null));
break;
}
})();
if(cljs.core.truth_(validate__10780__auto__)){
var temp__4126__auto___21399 = (function (){var G__21390 = o__10783__auto__;
return (output_checker21370_21395.cljs$core$IFn$_invoke$arity$1 ? output_checker21370_21395.cljs$core$IFn$_invoke$arity$1(G__21390) : output_checker21370_21395.call(null,G__21390));
})();
if(cljs.core.truth_(temp__4126__auto___21399)){
var error__10782__auto___21400 = temp__4126__auto___21399;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"state-view","state-view",-1362991612,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21400], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21400,cljs.core.constant$keyword$21,o__10783__auto__,cljs.core.constant$keyword$22,output_schema21367_21392,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

return o__10783__auto__;
});})(ufv___21391,output_schema21367_21392,input_schema21368_21393,input_checker21369_21394,output_checker21370_21395))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_dev_tools.state_tree.state_view),schema.core.make_fn_schema(output_schema21367_21392,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21368_21393], null)));

om_dev_tools.state_tree.__GT_state_view = (function() {
var __GT_state_view = null;
var __GT_state_view__1 = (function (cursor__20840__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(om_dev_tools.state_tree.state_view,cursor__20840__auto__);
});
var __GT_state_view__2 = (function (cursor__20840__auto__,m21366){
return om.core.build.cljs$core$IFn$_invoke$arity$3(om_dev_tools.state_tree.state_view,cursor__20840__auto__,m21366);
});
__GT_state_view = function(cursor__20840__auto__,m21366){
switch(arguments.length){
case 1:
return __GT_state_view__1.call(this,cursor__20840__auto__);
case 2:
return __GT_state_view__2.call(this,cursor__20840__auto__,m21366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_state_view.cljs$core$IFn$_invoke$arity$1 = __GT_state_view__1;
__GT_state_view.cljs$core$IFn$_invoke$arity$2 = __GT_state_view__2;
return __GT_state_view;
})()
;

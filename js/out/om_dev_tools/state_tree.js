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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$127,(function (){var iter__4571__auto__ = (function iter__21347(s__21348){
return (new cljs.core.LazySeq(null,(function (){
var s__21348__$1 = s__21348;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__21348__$1);
if(temp__4126__auto__){
var s__21348__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21348__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__21348__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__21350 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__21349 = (0);
while(true){
if((i__21349 < size__4570__auto__)){
var vec__21355 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__21349);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21355,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21355,(1),null);
var ks__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ks,k);
cljs.core.chunk_append(b__21350,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$47,k,cljs.core.constant$keyword$114,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.coll_QMARK_(v__$1))?"coll":"single"),(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,ks__$1))?"open":"closed")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$247,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$248,((function (i__21349,ks__$1,vec__21355,k,v__$1,c__4569__auto__,size__4570__auto__,b__21350,s__21348__$2,temp__4126__auto__){
return (function (){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(state,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(om_dev_tools.state_tree.toggle,ks__$1));
});})(i__21349,ks__$1,vec__21355,k,v__$1,c__4569__auto__,size__4570__auto__,b__21350,s__21348__$2,temp__4126__auto__))
], null),(((k instanceof cljs.core.Keyword))?cljs.core.name(k):k)], null),": ",(cljs.core.truth_((function (){var or__3815__auto__ = !(cljs.core.coll_QMARK_(v__$1));
if(or__3815__auto__){
return or__3815__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,ks__$1);
}
})())?tree(state,v__$1,ks__$1):null)], null));

var G__21357 = (i__21349 + (1));
i__21349 = G__21357;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21350),iter__21347(cljs.core.chunk_rest(s__21348__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21350),null);
}
} else {
var vec__21356 = cljs.core.first(s__21348__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21356,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21356,(1),null);
var ks__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ks,k);
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$47,k,cljs.core.constant$keyword$114,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.coll_QMARK_(v__$1))?"coll":"single"),(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,ks__$1))?"open":"closed")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$247,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$248,((function (ks__$1,vec__21356,k,v__$1,s__21348__$2,temp__4126__auto__){
return (function (){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(state,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(om_dev_tools.state_tree.toggle,ks__$1));
});})(ks__$1,vec__21356,k,v__$1,s__21348__$2,temp__4126__auto__))
], null),(((k instanceof cljs.core.Keyword))?cljs.core.name(k):k)], null),": ",(cljs.core.truth_((function (){var or__3815__auto__ = !(cljs.core.coll_QMARK_(v__$1));
if(or__3815__auto__){
return or__3815__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,ks__$1);
}
})())?tree(state,v__$1,ks__$1):null)], null),iter__21347(cljs.core.rest(s__21348__$2)));
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

var ufv___21383 = schema.utils.use_fn_validation;
var output_schema21359_21384 = schema.core.Any;
var input_schema21360_21385 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker21361_21386 = schema.core.checker(input_schema21360_21385);
var output_checker21362_21387 = schema.core.checker(output_schema21359_21384);
/**
* Inputs: [{:keys [state-tree-state app-state]} owner]
*/
om_dev_tools.state_tree.state_view = ((function (ufv___21383,output_schema21359_21384,input_schema21360_21385,input_checker21361_21386,output_checker21362_21387){
return (function state_view(G__21363,G__21364){
var validate__10780__auto__ = ufv___21383.get_cell();
if(cljs.core.truth_(validate__10780__auto__)){
var args__10781__auto___21388 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21363,G__21364], null);
var temp__4126__auto___21389 = (function (){var G__21374 = args__10781__auto___21388;
return (input_checker21361_21386.cljs$core$IFn$_invoke$arity$1 ? input_checker21361_21386.cljs$core$IFn$_invoke$arity$1(G__21374) : input_checker21361_21386.call(null,G__21374));
})();
if(cljs.core.truth_(temp__4126__auto___21389)){
var error__10782__auto___21390 = temp__4126__auto___21389;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"state-view","state-view",-1362991612,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21390], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21390,cljs.core.constant$keyword$21,args__10781__auto___21388,cljs.core.constant$keyword$22,input_schema21360_21385,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

var o__10783__auto__ = (function (){var G__21376 = G__21363;
var map__21377 = G__21376;
var map__21377__$1 = ((cljs.core.seq_QMARK_(map__21377))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21377):map__21377);
var app_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21377__$1,cljs.core.constant$keyword$253);
var state_tree_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21377__$1,cljs.core.constant$keyword$254);
var owner = G__21364;
var G__21376__$1 = G__21376;
var owner__$1 = owner;
while(true){
var map__21378 = G__21376__$1;
var map__21378__$1 = ((cljs.core.seq_QMARK_(map__21378))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21378):map__21378);
var app_state__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21378__$1,cljs.core.constant$keyword$253);
var state_tree_state__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21378__$1,cljs.core.constant$keyword$254);
var owner__$2 = owner__$1;
if(typeof om_dev_tools.state_tree.t21379 !== 'undefined'){
} else {

/**
* @constructor
*/
om_dev_tools.state_tree.t21379 = (function (input_checker21361,G__21364,output_checker21362,owner,state_view,G__21376,map__21378,output_schema21359,validate__10780__auto__,input_schema21360,map__21377,app_state,state_tree_state,ufv__,G__21363,meta21380){
this.input_checker21361 = input_checker21361;
this.G__21364 = G__21364;
this.output_checker21362 = output_checker21362;
this.owner = owner;
this.state_view = state_view;
this.G__21376 = G__21376;
this.map__21378 = map__21378;
this.output_schema21359 = output_schema21359;
this.validate__10780__auto__ = validate__10780__auto__;
this.input_schema21360 = input_schema21360;
this.map__21377 = map__21377;
this.app_state = app_state;
this.state_tree_state = state_tree_state;
this.ufv__ = ufv__;
this.G__21363 = G__21363;
this.meta21380 = meta21380;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_dev_tools.state_tree.t21379.prototype.om$core$IDisplayName$ = true;

om_dev_tools.state_tree.t21379.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__21378,map__21378__$1,app_state__$1,state_tree_state__$1,owner__$2,G__21376,map__21377,map__21377__$1,app_state,state_tree_state,owner,validate__10780__auto__,ufv___21383,output_schema21359_21384,input_schema21360_21385,input_checker21361_21386,output_checker21362_21387){
return (function (_){
var self__ = this;
var ___$1 = this;
return "state-view";
});})(map__21378,map__21378__$1,app_state__$1,state_tree_state__$1,owner__$2,G__21376,map__21377,map__21377__$1,app_state,state_tree_state,owner,validate__10780__auto__,ufv___21383,output_schema21359_21384,input_schema21360_21385,input_checker21361_21386,output_checker21362_21387))
;

om_dev_tools.state_tree.t21379.prototype.om$core$IRender$ = true;

om_dev_tools.state_tree.t21379.prototype.om$core$IRender$render$arity$1 = ((function (map__21378,map__21378__$1,app_state__$1,state_tree_state__$1,owner__$2,G__21376,map__21377,map__21377__$1,app_state,state_tree_state,owner,validate__10780__auto__,ufv___21383,output_schema21359_21384,input_schema21360_21385,input_checker21361_21386,output_checker21362_21387){
return (function (_){
var self__ = this;
var ___$1 = this;
return sablono.interpreter.interpret(om_dev_tools.state_tree.tree(self__.state_tree_state,self__.app_state,cljs.core.PersistentVector.EMPTY));
});})(map__21378,map__21378__$1,app_state__$1,state_tree_state__$1,owner__$2,G__21376,map__21377,map__21377__$1,app_state,state_tree_state,owner,validate__10780__auto__,ufv___21383,output_schema21359_21384,input_schema21360_21385,input_checker21361_21386,output_checker21362_21387))
;

om_dev_tools.state_tree.t21379.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__21378,map__21378__$1,app_state__$1,state_tree_state__$1,owner__$2,G__21376,map__21377,map__21377__$1,app_state,state_tree_state,owner,validate__10780__auto__,ufv___21383,output_schema21359_21384,input_schema21360_21385,input_checker21361_21386,output_checker21362_21387){
return (function (_21381){
var self__ = this;
var _21381__$1 = this;
return self__.meta21380;
});})(map__21378,map__21378__$1,app_state__$1,state_tree_state__$1,owner__$2,G__21376,map__21377,map__21377__$1,app_state,state_tree_state,owner,validate__10780__auto__,ufv___21383,output_schema21359_21384,input_schema21360_21385,input_checker21361_21386,output_checker21362_21387))
;

om_dev_tools.state_tree.t21379.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__21378,map__21378__$1,app_state__$1,state_tree_state__$1,owner__$2,G__21376,map__21377,map__21377__$1,app_state,state_tree_state,owner,validate__10780__auto__,ufv___21383,output_schema21359_21384,input_schema21360_21385,input_checker21361_21386,output_checker21362_21387){
return (function (_21381,meta21380__$1){
var self__ = this;
var _21381__$1 = this;
return (new om_dev_tools.state_tree.t21379(self__.input_checker21361,self__.G__21364,self__.output_checker21362,self__.owner,self__.state_view,self__.G__21376,self__.map__21378,self__.output_schema21359,self__.validate__10780__auto__,self__.input_schema21360,self__.map__21377,self__.app_state,self__.state_tree_state,self__.ufv__,self__.G__21363,meta21380__$1));
});})(map__21378,map__21378__$1,app_state__$1,state_tree_state__$1,owner__$2,G__21376,map__21377,map__21377__$1,app_state,state_tree_state,owner,validate__10780__auto__,ufv___21383,output_schema21359_21384,input_schema21360_21385,input_checker21361_21386,output_checker21362_21387))
;

om_dev_tools.state_tree.t21379.cljs$lang$type = true;

om_dev_tools.state_tree.t21379.cljs$lang$ctorStr = "om-dev-tools.state-tree/t21379";

om_dev_tools.state_tree.t21379.cljs$lang$ctorPrWriter = ((function (map__21378,map__21378__$1,app_state__$1,state_tree_state__$1,owner__$2,G__21376,map__21377,map__21377__$1,app_state,state_tree_state,owner,validate__10780__auto__,ufv___21383,output_schema21359_21384,input_schema21360_21385,input_checker21361_21386,output_checker21362_21387){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"om-dev-tools.state-tree/t21379");
});})(map__21378,map__21378__$1,app_state__$1,state_tree_state__$1,owner__$2,G__21376,map__21377,map__21377__$1,app_state,state_tree_state,owner,validate__10780__auto__,ufv___21383,output_schema21359_21384,input_schema21360_21385,input_checker21361_21386,output_checker21362_21387))
;

om_dev_tools.state_tree.__GT_t21379 = ((function (map__21378,map__21378__$1,app_state__$1,state_tree_state__$1,owner__$2,G__21376,map__21377,map__21377__$1,app_state,state_tree_state,owner,validate__10780__auto__,ufv___21383,output_schema21359_21384,input_schema21360_21385,input_checker21361_21386,output_checker21362_21387){
return (function __GT_t21379(input_checker21361__$1,G__21364__$1,output_checker21362__$1,owner__$3,state_view__$1,G__21376__$2,map__21378__$2,output_schema21359__$1,validate__10780__auto____$1,input_schema21360__$1,map__21377__$2,app_state__$2,state_tree_state__$2,ufv____$1,G__21363__$1,meta21380){
return (new om_dev_tools.state_tree.t21379(input_checker21361__$1,G__21364__$1,output_checker21362__$1,owner__$3,state_view__$1,G__21376__$2,map__21378__$2,output_schema21359__$1,validate__10780__auto____$1,input_schema21360__$1,map__21377__$2,app_state__$2,state_tree_state__$2,ufv____$1,G__21363__$1,meta21380));
});})(map__21378,map__21378__$1,app_state__$1,state_tree_state__$1,owner__$2,G__21376,map__21377,map__21377__$1,app_state,state_tree_state,owner,validate__10780__auto__,ufv___21383,output_schema21359_21384,input_schema21360_21385,input_checker21361_21386,output_checker21362_21387))
;

}

return (new om_dev_tools.state_tree.t21379(input_checker21361_21386,G__21364,output_checker21362_21387,owner__$2,state_view,G__21376__$1,map__21378__$1,output_schema21359_21384,validate__10780__auto__,input_schema21360_21385,map__21377__$1,app_state__$1,state_tree_state__$1,ufv___21383,G__21363,null));
break;
}
})();
if(cljs.core.truth_(validate__10780__auto__)){
var temp__4126__auto___21391 = (function (){var G__21382 = o__10783__auto__;
return (output_checker21362_21387.cljs$core$IFn$_invoke$arity$1 ? output_checker21362_21387.cljs$core$IFn$_invoke$arity$1(G__21382) : output_checker21362_21387.call(null,G__21382));
})();
if(cljs.core.truth_(temp__4126__auto___21391)){
var error__10782__auto___21392 = temp__4126__auto___21391;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"state-view","state-view",-1362991612,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21392], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21392,cljs.core.constant$keyword$21,o__10783__auto__,cljs.core.constant$keyword$22,output_schema21359_21384,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

return o__10783__auto__;
});})(ufv___21383,output_schema21359_21384,input_schema21360_21385,input_checker21361_21386,output_checker21362_21387))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_dev_tools.state_tree.state_view),schema.core.make_fn_schema(output_schema21359_21384,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21360_21385], null)));

om_dev_tools.state_tree.__GT_state_view = (function() {
var __GT_state_view = null;
var __GT_state_view__1 = (function (cursor__20840__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(om_dev_tools.state_tree.state_view,cursor__20840__auto__);
});
var __GT_state_view__2 = (function (cursor__20840__auto__,m21358){
return om.core.build.cljs$core$IFn$_invoke$arity$3(om_dev_tools.state_tree.state_view,cursor__20840__auto__,m21358);
});
__GT_state_view = function(cursor__20840__auto__,m21358){
switch(arguments.length){
case 1:
return __GT_state_view__1.call(this,cursor__20840__auto__);
case 2:
return __GT_state_view__2.call(this,cursor__20840__auto__,m21358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_state_view.cljs$core$IFn$_invoke$arity$1 = __GT_state_view__1;
__GT_state_view.cljs$core$IFn$_invoke$arity$2 = __GT_state_view__2;
return __GT_state_view;
})()
;

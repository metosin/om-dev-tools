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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$127,(function (){var iter__4571__auto__ = (function iter__21442(s__21443){
return (new cljs.core.LazySeq(null,(function (){
var s__21443__$1 = s__21443;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__21443__$1);
if(temp__4126__auto__){
var s__21443__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21443__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__21443__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__21445 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__21444 = (0);
while(true){
if((i__21444 < size__4570__auto__)){
var vec__21450 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__21444);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21450,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21450,(1),null);
var ks__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ks,k);
cljs.core.chunk_append(b__21445,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$47,k,cljs.core.constant$keyword$114,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.coll_QMARK_(v__$1))?"coll":"single"),(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,ks__$1))?"open":"closed")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$248,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,((function (i__21444,ks__$1,vec__21450,k,v__$1,c__4569__auto__,size__4570__auto__,b__21445,s__21443__$2,temp__4126__auto__){
return (function (){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(state,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(om_dev_tools.state_tree.toggle,ks__$1));
});})(i__21444,ks__$1,vec__21450,k,v__$1,c__4569__auto__,size__4570__auto__,b__21445,s__21443__$2,temp__4126__auto__))
], null),(((k instanceof cljs.core.Keyword))?cljs.core.name(k):k)], null),": ",(cljs.core.truth_((function (){var or__3815__auto__ = !(cljs.core.coll_QMARK_(v__$1));
if(or__3815__auto__){
return or__3815__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,ks__$1);
}
})())?tree(state,v__$1,ks__$1):null)], null));

var G__21452 = (i__21444 + (1));
i__21444 = G__21452;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21445),iter__21442(cljs.core.chunk_rest(s__21443__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21445),null);
}
} else {
var vec__21451 = cljs.core.first(s__21443__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21451,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21451,(1),null);
var ks__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ks,k);
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$47,k,cljs.core.constant$keyword$114,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.coll_QMARK_(v__$1))?"coll":"single"),(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,ks__$1))?"open":"closed")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$248,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,((function (ks__$1,vec__21451,k,v__$1,s__21443__$2,temp__4126__auto__){
return (function (){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(state,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(om_dev_tools.state_tree.toggle,ks__$1));
});})(ks__$1,vec__21451,k,v__$1,s__21443__$2,temp__4126__auto__))
], null),(((k instanceof cljs.core.Keyword))?cljs.core.name(k):k)], null),": ",(cljs.core.truth_((function (){var or__3815__auto__ = !(cljs.core.coll_QMARK_(v__$1));
if(or__3815__auto__){
return or__3815__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,ks__$1);
}
})())?tree(state,v__$1,ks__$1):null)], null),iter__21442(cljs.core.rest(s__21443__$2)));
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250,"\"",v,"\""], null);
} else {
if((v == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$251,"nil"], null);
} else {
if((v instanceof goog.date.UtcDateTime)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$252,[cljs.core.str(v)].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$253,"datetime"], null)], null);
} else {
if((v instanceof goog.date.Date)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$252,[cljs.core.str(v)].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$253,"localdate"], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$252,[cljs.core.str(v)].join('')], null);

}
}
}
}
}
});

var ufv___21481 = schema.utils.use_fn_validation;
var output_schema21454_21482 = schema.core.Any;
var input_schema21455_21483 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);
var input_checker21456_21484 = schema.core.checker(input_schema21455_21483);
var output_checker21457_21485 = schema.core.checker(output_schema21454_21482);
/**
* Inputs: [{:keys [state-tree-state app-state]} owner opts]
*/
om_dev_tools.state_tree.state_view = ((function (ufv___21481,output_schema21454_21482,input_schema21455_21483,input_checker21456_21484,output_checker21457_21485){
return (function state_view(G__21458,G__21459,G__21460){
var validate__10780__auto__ = ufv___21481.get_cell();
if(cljs.core.truth_(validate__10780__auto__)){
var args__10781__auto___21486 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21458,G__21459,G__21460], null);
var temp__4126__auto___21487 = (function (){var G__21471 = args__10781__auto___21486;
return (input_checker21456_21484.cljs$core$IFn$_invoke$arity$1 ? input_checker21456_21484.cljs$core$IFn$_invoke$arity$1(G__21471) : input_checker21456_21484.call(null,G__21471));
})();
if(cljs.core.truth_(temp__4126__auto___21487)){
var error__10782__auto___21488 = temp__4126__auto___21487;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"state-view","state-view",-1362991612,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21488], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21488,cljs.core.constant$keyword$21,args__10781__auto___21486,cljs.core.constant$keyword$22,input_schema21455_21483,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

var o__10783__auto__ = (function (){var G__21473 = G__21458;
var map__21474 = G__21473;
var map__21474__$1 = ((cljs.core.seq_QMARK_(map__21474))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21474):map__21474);
var app_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21474__$1,cljs.core.constant$keyword$254);
var state_tree_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21474__$1,cljs.core.constant$keyword$255);
var owner = G__21459;
var opts = G__21460;
var G__21473__$1 = G__21473;
var owner__$1 = owner;
var opts__$1 = opts;
while(true){
var map__21475 = G__21473__$1;
var map__21475__$1 = ((cljs.core.seq_QMARK_(map__21475))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21475):map__21475);
var app_state__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21475__$1,cljs.core.constant$keyword$254);
var state_tree_state__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21475__$1,cljs.core.constant$keyword$255);
var owner__$2 = owner__$1;
var opts__$2 = opts__$1;
if(typeof om_dev_tools.state_tree.t21476 !== 'undefined'){
} else {

/**
* @constructor
*/
om_dev_tools.state_tree.t21476 = (function (G__21458,G__21459,owner,state_view,G__21460,map__21474,input_checker21456,map__21475,G__21473,input_schema21455,validate__10780__auto__,output_schema21454,output_checker21457,app_state,state_tree_state,opts,ufv__,meta21477){
this.G__21458 = G__21458;
this.G__21459 = G__21459;
this.owner = owner;
this.state_view = state_view;
this.G__21460 = G__21460;
this.map__21474 = map__21474;
this.input_checker21456 = input_checker21456;
this.map__21475 = map__21475;
this.G__21473 = G__21473;
this.input_schema21455 = input_schema21455;
this.validate__10780__auto__ = validate__10780__auto__;
this.output_schema21454 = output_schema21454;
this.output_checker21457 = output_checker21457;
this.app_state = app_state;
this.state_tree_state = state_tree_state;
this.opts = opts;
this.ufv__ = ufv__;
this.meta21477 = meta21477;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_dev_tools.state_tree.t21476.prototype.om$core$IDisplayName$ = true;

om_dev_tools.state_tree.t21476.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__21475,map__21475__$1,app_state__$1,state_tree_state__$1,owner__$2,opts__$2,G__21473,map__21474,map__21474__$1,app_state,state_tree_state,owner,opts,validate__10780__auto__,ufv___21481,output_schema21454_21482,input_schema21455_21483,input_checker21456_21484,output_checker21457_21485){
return (function (_){
var self__ = this;
var ___$1 = this;
return "state-view";
});})(map__21475,map__21475__$1,app_state__$1,state_tree_state__$1,owner__$2,opts__$2,G__21473,map__21474,map__21474__$1,app_state,state_tree_state,owner,opts,validate__10780__auto__,ufv___21481,output_schema21454_21482,input_schema21455_21483,input_checker21456_21484,output_checker21457_21485))
;

om_dev_tools.state_tree.t21476.prototype.om$core$IRender$ = true;

om_dev_tools.state_tree.t21476.prototype.om$core$IRender$render$arity$1 = ((function (map__21475,map__21475__$1,app_state__$1,state_tree_state__$1,owner__$2,opts__$2,G__21473,map__21474,map__21474__$1,app_state,state_tree_state,owner,opts,validate__10780__auto__,ufv___21481,output_schema21454_21482,input_schema21455_21483,input_checker21456_21484,output_checker21457_21485){
return (function (_){
var self__ = this;
var ___$1 = this;
var attrs21479 = om_dev_tools.state_tree.tree(self__.state_tree_state,self__.app_state,cljs.core.PersistentVector.EMPTY);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs21479))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$114,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["om-dev-tools-state-tree"], null)], null),attrs21479], 0))):{"className": "om-dev-tools-state-tree"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21479))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21479)], null))));
});})(map__21475,map__21475__$1,app_state__$1,state_tree_state__$1,owner__$2,opts__$2,G__21473,map__21474,map__21474__$1,app_state,state_tree_state,owner,opts,validate__10780__auto__,ufv___21481,output_schema21454_21482,input_schema21455_21483,input_checker21456_21484,output_checker21457_21485))
;

om_dev_tools.state_tree.t21476.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__21475,map__21475__$1,app_state__$1,state_tree_state__$1,owner__$2,opts__$2,G__21473,map__21474,map__21474__$1,app_state,state_tree_state,owner,opts,validate__10780__auto__,ufv___21481,output_schema21454_21482,input_schema21455_21483,input_checker21456_21484,output_checker21457_21485){
return (function (_21478){
var self__ = this;
var _21478__$1 = this;
return self__.meta21477;
});})(map__21475,map__21475__$1,app_state__$1,state_tree_state__$1,owner__$2,opts__$2,G__21473,map__21474,map__21474__$1,app_state,state_tree_state,owner,opts,validate__10780__auto__,ufv___21481,output_schema21454_21482,input_schema21455_21483,input_checker21456_21484,output_checker21457_21485))
;

om_dev_tools.state_tree.t21476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__21475,map__21475__$1,app_state__$1,state_tree_state__$1,owner__$2,opts__$2,G__21473,map__21474,map__21474__$1,app_state,state_tree_state,owner,opts,validate__10780__auto__,ufv___21481,output_schema21454_21482,input_schema21455_21483,input_checker21456_21484,output_checker21457_21485){
return (function (_21478,meta21477__$1){
var self__ = this;
var _21478__$1 = this;
return (new om_dev_tools.state_tree.t21476(self__.G__21458,self__.G__21459,self__.owner,self__.state_view,self__.G__21460,self__.map__21474,self__.input_checker21456,self__.map__21475,self__.G__21473,self__.input_schema21455,self__.validate__10780__auto__,self__.output_schema21454,self__.output_checker21457,self__.app_state,self__.state_tree_state,self__.opts,self__.ufv__,meta21477__$1));
});})(map__21475,map__21475__$1,app_state__$1,state_tree_state__$1,owner__$2,opts__$2,G__21473,map__21474,map__21474__$1,app_state,state_tree_state,owner,opts,validate__10780__auto__,ufv___21481,output_schema21454_21482,input_schema21455_21483,input_checker21456_21484,output_checker21457_21485))
;

om_dev_tools.state_tree.t21476.cljs$lang$type = true;

om_dev_tools.state_tree.t21476.cljs$lang$ctorStr = "om-dev-tools.state-tree/t21476";

om_dev_tools.state_tree.t21476.cljs$lang$ctorPrWriter = ((function (map__21475,map__21475__$1,app_state__$1,state_tree_state__$1,owner__$2,opts__$2,G__21473,map__21474,map__21474__$1,app_state,state_tree_state,owner,opts,validate__10780__auto__,ufv___21481,output_schema21454_21482,input_schema21455_21483,input_checker21456_21484,output_checker21457_21485){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"om-dev-tools.state-tree/t21476");
});})(map__21475,map__21475__$1,app_state__$1,state_tree_state__$1,owner__$2,opts__$2,G__21473,map__21474,map__21474__$1,app_state,state_tree_state,owner,opts,validate__10780__auto__,ufv___21481,output_schema21454_21482,input_schema21455_21483,input_checker21456_21484,output_checker21457_21485))
;

om_dev_tools.state_tree.__GT_t21476 = ((function (map__21475,map__21475__$1,app_state__$1,state_tree_state__$1,owner__$2,opts__$2,G__21473,map__21474,map__21474__$1,app_state,state_tree_state,owner,opts,validate__10780__auto__,ufv___21481,output_schema21454_21482,input_schema21455_21483,input_checker21456_21484,output_checker21457_21485){
return (function __GT_t21476(G__21458__$1,G__21459__$1,owner__$3,state_view__$1,G__21460__$1,map__21474__$2,input_checker21456__$1,map__21475__$2,G__21473__$2,input_schema21455__$1,validate__10780__auto____$1,output_schema21454__$1,output_checker21457__$1,app_state__$2,state_tree_state__$2,opts__$3,ufv____$1,meta21477){
return (new om_dev_tools.state_tree.t21476(G__21458__$1,G__21459__$1,owner__$3,state_view__$1,G__21460__$1,map__21474__$2,input_checker21456__$1,map__21475__$2,G__21473__$2,input_schema21455__$1,validate__10780__auto____$1,output_schema21454__$1,output_checker21457__$1,app_state__$2,state_tree_state__$2,opts__$3,ufv____$1,meta21477));
});})(map__21475,map__21475__$1,app_state__$1,state_tree_state__$1,owner__$2,opts__$2,G__21473,map__21474,map__21474__$1,app_state,state_tree_state,owner,opts,validate__10780__auto__,ufv___21481,output_schema21454_21482,input_schema21455_21483,input_checker21456_21484,output_checker21457_21485))
;

}

return (new om_dev_tools.state_tree.t21476(G__21458,G__21459,owner__$2,state_view,G__21460,map__21474__$1,input_checker21456_21484,map__21475__$1,G__21473__$1,input_schema21455_21483,validate__10780__auto__,output_schema21454_21482,output_checker21457_21485,app_state__$1,state_tree_state__$1,opts__$2,ufv___21481,null));
break;
}
})();
if(cljs.core.truth_(validate__10780__auto__)){
var temp__4126__auto___21489 = (function (){var G__21480 = o__10783__auto__;
return (output_checker21457_21485.cljs$core$IFn$_invoke$arity$1 ? output_checker21457_21485.cljs$core$IFn$_invoke$arity$1(G__21480) : output_checker21457_21485.call(null,G__21480));
})();
if(cljs.core.truth_(temp__4126__auto___21489)){
var error__10782__auto___21490 = temp__4126__auto___21489;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"state-view","state-view",-1362991612,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21490], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21490,cljs.core.constant$keyword$21,o__10783__auto__,cljs.core.constant$keyword$22,output_schema21454_21482,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

return o__10783__auto__;
});})(ufv___21481,output_schema21454_21482,input_schema21455_21483,input_checker21456_21484,output_checker21457_21485))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_dev_tools.state_tree.state_view),schema.core.make_fn_schema(output_schema21454_21482,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21455_21483], null)));

om_dev_tools.state_tree.__GT_state_view = (function() {
var __GT_state_view = null;
var __GT_state_view__1 = (function (cursor__20840__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(om_dev_tools.state_tree.state_view,cursor__20840__auto__);
});
var __GT_state_view__2 = (function (cursor__20840__auto__,m21453){
return om.core.build.cljs$core$IFn$_invoke$arity$3(om_dev_tools.state_tree.state_view,cursor__20840__auto__,m21453);
});
__GT_state_view = function(cursor__20840__auto__,m21453){
switch(arguments.length){
case 1:
return __GT_state_view__1.call(this,cursor__20840__auto__);
case 2:
return __GT_state_view__2.call(this,cursor__20840__auto__,m21453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_state_view.cljs$core$IFn$_invoke$arity$1 = __GT_state_view__1;
__GT_state_view.cljs$core$IFn$_invoke$arity$2 = __GT_state_view__2;
return __GT_state_view;
})()
;

var ufv___21517 = schema.utils.use_fn_validation;
var output_schema21492_21518 = schema.core.Any;
var input_schema21493_21519 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);
var input_checker21494_21520 = schema.core.checker(input_schema21493_21519);
var output_checker21495_21521 = schema.core.checker(output_schema21492_21518);
/**
* Inputs: [{:keys [state-tree-state]} owner opts]
*/
om_dev_tools.state_tree.state_panel = ((function (ufv___21517,output_schema21492_21518,input_schema21493_21519,input_checker21494_21520,output_checker21495_21521){
return (function state_panel(G__21496,G__21497,G__21498){
var validate__10780__auto__ = ufv___21517.get_cell();
if(cljs.core.truth_(validate__10780__auto__)){
var args__10781__auto___21522 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21496,G__21497,G__21498], null);
var temp__4126__auto___21523 = (function (){var G__21508 = args__10781__auto___21522;
return (input_checker21494_21520.cljs$core$IFn$_invoke$arity$1 ? input_checker21494_21520.cljs$core$IFn$_invoke$arity$1(G__21508) : input_checker21494_21520.call(null,G__21508));
})();
if(cljs.core.truth_(temp__4126__auto___21523)){
var error__10782__auto___21524 = temp__4126__auto___21523;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"state-panel","state-panel",-174940244,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21524], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21524,cljs.core.constant$keyword$21,args__10781__auto___21522,cljs.core.constant$keyword$22,input_schema21493_21519,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

var o__10783__auto__ = (function (){var G__21510 = G__21496;
var map__21511 = G__21510;
var map__21511__$1 = ((cljs.core.seq_QMARK_(map__21511))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21511):map__21511);
var state_tree_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21511__$1,cljs.core.constant$keyword$255);
var owner = G__21497;
var opts = G__21498;
var G__21510__$1 = G__21510;
var owner__$1 = owner;
var opts__$1 = opts;
while(true){
var map__21512 = G__21510__$1;
var map__21512__$1 = ((cljs.core.seq_QMARK_(map__21512))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21512):map__21512);
var state_tree_state__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21512__$1,cljs.core.constant$keyword$255);
var owner__$2 = owner__$1;
var opts__$2 = opts__$1;
if(typeof om_dev_tools.state_tree.t21513 !== 'undefined'){
} else {

/**
* @constructor
*/
om_dev_tools.state_tree.t21513 = (function (owner,G__21497,G__21496,G__21498,state_panel,map__21511,G__21510,validate__10780__auto__,map__21512,output_schema21492,input_checker21494,input_schema21493,output_checker21495,state_tree_state,opts,ufv__,meta21514){
this.owner = owner;
this.G__21497 = G__21497;
this.G__21496 = G__21496;
this.G__21498 = G__21498;
this.state_panel = state_panel;
this.map__21511 = map__21511;
this.G__21510 = G__21510;
this.validate__10780__auto__ = validate__10780__auto__;
this.map__21512 = map__21512;
this.output_schema21492 = output_schema21492;
this.input_checker21494 = input_checker21494;
this.input_schema21493 = input_schema21493;
this.output_checker21495 = output_checker21495;
this.state_tree_state = state_tree_state;
this.opts = opts;
this.ufv__ = ufv__;
this.meta21514 = meta21514;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_dev_tools.state_tree.t21513.prototype.om$core$IDisplayName$ = true;

om_dev_tools.state_tree.t21513.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__21512,map__21512__$1,state_tree_state__$1,owner__$2,opts__$2,G__21510,map__21511,map__21511__$1,state_tree_state,owner,opts,validate__10780__auto__,ufv___21517,output_schema21492_21518,input_schema21493_21519,input_checker21494_21520,output_checker21495_21521){
return (function (_){
var self__ = this;
var ___$1 = this;
return "state-panel";
});})(map__21512,map__21512__$1,state_tree_state__$1,owner__$2,opts__$2,G__21510,map__21511,map__21511__$1,state_tree_state,owner,opts,validate__10780__auto__,ufv___21517,output_schema21492_21518,input_schema21493_21519,input_checker21494_21520,output_checker21495_21521))
;

om_dev_tools.state_tree.t21513.prototype.om$core$IRender$ = true;

om_dev_tools.state_tree.t21513.prototype.om$core$IRender$render$arity$1 = ((function (map__21512,map__21512__$1,state_tree_state__$1,owner__$2,opts__$2,G__21510,map__21511,map__21511__$1,state_tree_state,owner,opts,validate__10780__auto__,ufv___21517,output_schema21492_21518,input_schema21493_21519,input_checker21494_21520,output_checker21495_21521){
return (function (_){
var self__ = this;
var ___$1 = this;
var app_state = om.core.observe(self__.owner,om.core.ref_cursor(om.core.root_cursor(cljs.core.constant$keyword$254.cljs$core$IFn$_invoke$arity$1(self__.opts))));
return om.core.build.cljs$core$IFn$_invoke$arity$2(om_dev_tools.state_tree.state_view,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$254,app_state,cljs.core.constant$keyword$255,self__.state_tree_state], null));
});})(map__21512,map__21512__$1,state_tree_state__$1,owner__$2,opts__$2,G__21510,map__21511,map__21511__$1,state_tree_state,owner,opts,validate__10780__auto__,ufv___21517,output_schema21492_21518,input_schema21493_21519,input_checker21494_21520,output_checker21495_21521))
;

om_dev_tools.state_tree.t21513.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__21512,map__21512__$1,state_tree_state__$1,owner__$2,opts__$2,G__21510,map__21511,map__21511__$1,state_tree_state,owner,opts,validate__10780__auto__,ufv___21517,output_schema21492_21518,input_schema21493_21519,input_checker21494_21520,output_checker21495_21521){
return (function (_21515){
var self__ = this;
var _21515__$1 = this;
return self__.meta21514;
});})(map__21512,map__21512__$1,state_tree_state__$1,owner__$2,opts__$2,G__21510,map__21511,map__21511__$1,state_tree_state,owner,opts,validate__10780__auto__,ufv___21517,output_schema21492_21518,input_schema21493_21519,input_checker21494_21520,output_checker21495_21521))
;

om_dev_tools.state_tree.t21513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__21512,map__21512__$1,state_tree_state__$1,owner__$2,opts__$2,G__21510,map__21511,map__21511__$1,state_tree_state,owner,opts,validate__10780__auto__,ufv___21517,output_schema21492_21518,input_schema21493_21519,input_checker21494_21520,output_checker21495_21521){
return (function (_21515,meta21514__$1){
var self__ = this;
var _21515__$1 = this;
return (new om_dev_tools.state_tree.t21513(self__.owner,self__.G__21497,self__.G__21496,self__.G__21498,self__.state_panel,self__.map__21511,self__.G__21510,self__.validate__10780__auto__,self__.map__21512,self__.output_schema21492,self__.input_checker21494,self__.input_schema21493,self__.output_checker21495,self__.state_tree_state,self__.opts,self__.ufv__,meta21514__$1));
});})(map__21512,map__21512__$1,state_tree_state__$1,owner__$2,opts__$2,G__21510,map__21511,map__21511__$1,state_tree_state,owner,opts,validate__10780__auto__,ufv___21517,output_schema21492_21518,input_schema21493_21519,input_checker21494_21520,output_checker21495_21521))
;

om_dev_tools.state_tree.t21513.cljs$lang$type = true;

om_dev_tools.state_tree.t21513.cljs$lang$ctorStr = "om-dev-tools.state-tree/t21513";

om_dev_tools.state_tree.t21513.cljs$lang$ctorPrWriter = ((function (map__21512,map__21512__$1,state_tree_state__$1,owner__$2,opts__$2,G__21510,map__21511,map__21511__$1,state_tree_state,owner,opts,validate__10780__auto__,ufv___21517,output_schema21492_21518,input_schema21493_21519,input_checker21494_21520,output_checker21495_21521){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"om-dev-tools.state-tree/t21513");
});})(map__21512,map__21512__$1,state_tree_state__$1,owner__$2,opts__$2,G__21510,map__21511,map__21511__$1,state_tree_state,owner,opts,validate__10780__auto__,ufv___21517,output_schema21492_21518,input_schema21493_21519,input_checker21494_21520,output_checker21495_21521))
;

om_dev_tools.state_tree.__GT_t21513 = ((function (map__21512,map__21512__$1,state_tree_state__$1,owner__$2,opts__$2,G__21510,map__21511,map__21511__$1,state_tree_state,owner,opts,validate__10780__auto__,ufv___21517,output_schema21492_21518,input_schema21493_21519,input_checker21494_21520,output_checker21495_21521){
return (function __GT_t21513(owner__$3,G__21497__$1,G__21496__$1,G__21498__$1,state_panel__$1,map__21511__$2,G__21510__$2,validate__10780__auto____$1,map__21512__$2,output_schema21492__$1,input_checker21494__$1,input_schema21493__$1,output_checker21495__$1,state_tree_state__$2,opts__$3,ufv____$1,meta21514){
return (new om_dev_tools.state_tree.t21513(owner__$3,G__21497__$1,G__21496__$1,G__21498__$1,state_panel__$1,map__21511__$2,G__21510__$2,validate__10780__auto____$1,map__21512__$2,output_schema21492__$1,input_checker21494__$1,input_schema21493__$1,output_checker21495__$1,state_tree_state__$2,opts__$3,ufv____$1,meta21514));
});})(map__21512,map__21512__$1,state_tree_state__$1,owner__$2,opts__$2,G__21510,map__21511,map__21511__$1,state_tree_state,owner,opts,validate__10780__auto__,ufv___21517,output_schema21492_21518,input_schema21493_21519,input_checker21494_21520,output_checker21495_21521))
;

}

return (new om_dev_tools.state_tree.t21513(owner__$2,G__21497,G__21496,G__21498,state_panel,map__21511__$1,G__21510__$1,validate__10780__auto__,map__21512__$1,output_schema21492_21518,input_checker21494_21520,input_schema21493_21519,output_checker21495_21521,state_tree_state__$1,opts__$2,ufv___21517,null));
break;
}
})();
if(cljs.core.truth_(validate__10780__auto__)){
var temp__4126__auto___21525 = (function (){var G__21516 = o__10783__auto__;
return (output_checker21495_21521.cljs$core$IFn$_invoke$arity$1 ? output_checker21495_21521.cljs$core$IFn$_invoke$arity$1(G__21516) : output_checker21495_21521.call(null,G__21516));
})();
if(cljs.core.truth_(temp__4126__auto___21525)){
var error__10782__auto___21526 = temp__4126__auto___21525;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"state-panel","state-panel",-174940244,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21526], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21526,cljs.core.constant$keyword$21,o__10783__auto__,cljs.core.constant$keyword$22,output_schema21492_21518,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

return o__10783__auto__;
});})(ufv___21517,output_schema21492_21518,input_schema21493_21519,input_checker21494_21520,output_checker21495_21521))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_dev_tools.state_tree.state_panel),schema.core.make_fn_schema(output_schema21492_21518,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21493_21519], null)));

om_dev_tools.state_tree.__GT_state_panel = (function() {
var __GT_state_panel = null;
var __GT_state_panel__1 = (function (cursor__20840__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(om_dev_tools.state_tree.state_panel,cursor__20840__auto__);
});
var __GT_state_panel__2 = (function (cursor__20840__auto__,m21491){
return om.core.build.cljs$core$IFn$_invoke$arity$3(om_dev_tools.state_tree.state_panel,cursor__20840__auto__,m21491);
});
__GT_state_panel = function(cursor__20840__auto__,m21491){
switch(arguments.length){
case 1:
return __GT_state_panel__1.call(this,cursor__20840__auto__);
case 2:
return __GT_state_panel__2.call(this,cursor__20840__auto__,m21491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_state_panel.cljs$core$IFn$_invoke$arity$1 = __GT_state_panel__1;
__GT_state_panel.cljs$core$IFn$_invoke$arity$2 = __GT_state_panel__2;
return __GT_state_panel;
})()
;

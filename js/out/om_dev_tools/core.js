// Compiled by ClojureScript 0.0-2850 {}
goog.provide('om_dev_tools.core');
goog.require('cljs.core');
goog.require('om_dev_tools.instrumentation');
goog.require('om_dev_tools.ui');
goog.require('om.core');
/**
* Returns an empty dev tools state.
*/
om_dev_tools.core.empty_state = (function empty_state(){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$227,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$255,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$259,cljs.core.constant$keyword$256,cljs.core.constant$keyword$260,false], null);
});
/**
* Calls om/root but also initiates om-dev-tools.
* 
* Options map takes two additional options:
* :dev-target    - (required) a DOM element.
* :dev-state     - (required) a atom containing dev tools state.
*/
om_dev_tools.core.root = (function root(f,value,p__21334){
var map__21336 = p__21334;
var map__21336__$1 = ((cljs.core.seq_QMARK_(map__21336))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21336):map__21336);
var options = map__21336__$1;
var dev_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21336__$1,cljs.core.constant$keyword$266);
var dev_target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21336__$1,cljs.core.constant$keyword$267);
if(cljs.core.truth_(dev_target)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"dev-target","dev-target",-1541646866,null)], 0)))].join('')));
}

if(cljs.core.truth_(dev_state)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"dev-state","dev-state",1802507929,null)], 0)))].join('')));
}

var inst_methods = om_dev_tools.instrumentation.instrumentation_methods(dev_state);
om.core.root(f,value,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.constant$keyword$267,cljs.core.array_seq([cljs.core.constant$keyword$266], 0)),cljs.core.constant$keyword$81,((function (inst_methods,map__21336,map__21336__$1,options,dev_state,dev_target){
return (function (f__$1,cursor,m){
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f__$1,cursor,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.constant$keyword$79,inst_methods));
});})(inst_methods,map__21336,map__21336__$1,options,dev_state,dev_target))
));

return om.core.root(om_dev_tools.ui.dev_tools,dev_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$93,dev_target,cljs.core.constant$keyword$86,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$254,value], null)], null));
});

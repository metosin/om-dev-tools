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
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$259,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$254,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$260,cljs.core.constant$keyword$255,cljs.core.constant$keyword$261,true], null);
});
/**
* Calls om/root but also initiates om-dev-tools.
* 
* Options map takes two additional options:
* :dev-target    - (required) a DOM element.
* :dev-state     - (required) a atom containing dev tools state.
*/
om_dev_tools.core.root = (function root(f,value,p__21247){
var map__21249 = p__21247;
var map__21249__$1 = ((cljs.core.seq_QMARK_(map__21249))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21249):map__21249);
var options = map__21249__$1;
var dev_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21249__$1,cljs.core.constant$keyword$267);
var dev_target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21249__$1,cljs.core.constant$keyword$268);
if(cljs.core.truth_(dev_target)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"dev-target","dev-target",-1541646866,null)], 0)))].join('')));
}

if(cljs.core.truth_(dev_state)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"dev-state","dev-state",1802507929,null)], 0)))].join('')));
}

var inst_methods = om_dev_tools.instrumentation.instrumentation_methods(cljs.core.constant$keyword$259.cljs$core$IFn$_invoke$arity$1(om.core.root_cursor(dev_state)));
om.core.root(f,value,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.constant$keyword$268,cljs.core.array_seq([cljs.core.constant$keyword$267], 0)),cljs.core.constant$keyword$81,((function (inst_methods,map__21249,map__21249__$1,options,dev_state,dev_target){
return (function (f__$1,cursor,m){
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f__$1,cursor,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.constant$keyword$79,inst_methods));
});})(inst_methods,map__21249,map__21249__$1,options,dev_state,dev_target))
));

return om.core.root(om_dev_tools.ui.dev_tools,dev_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$93,dev_target,cljs.core.constant$keyword$86,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$253,value], null)], null));
});

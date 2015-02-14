// Compiled by ClojureScript 0.0-2850 {}
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta(schema.core.__GT_Protocol(schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$32,new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),cljs.core.constant$keyword$34,(function (p1__10810__10811__auto__){
var G__21549 = p1__10810__10811__auto__;
if(G__21549){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__21549.schema$core$Schema$;
}
})())){
return true;
} else {
if((!G__21549.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__21549);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__21549);
}
})], null));
plumbing.fnk.schema.InputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.eq(schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword], 0)),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.OptionalKey,schema.core.Keyword], 0)),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
* Like (assert (distinct? things)) but with a more helpful error message.
*/
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){
var repeated_things = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__21550_SHARP_){
return (cljs.core.val(p1__21550_SHARP_) > (1));
}),cljs.core.frequencies(things)));
if(cljs.core.empty_QMARK_(repeated_things)){
return null;
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Got repeated items (expected distinct): %s",cljs.core.array_seq([repeated_things], 0))));
}
});
/**
* Like (get m k), but throws if k is not present in m.
*/
plumbing.fnk.schema.safe_get = (function safe_get(m,k,key_path){
if(cljs.core.map_QMARK_(m)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected a map at key-path %s, got type %s",cljs.core.array_seq([key_path,schema.utils.type_of(m)], 0))));
}

var vec__21552 = cljs.core.find(m,k);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21552,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21552,(1),null);
var p = vec__21552;
if(cljs.core.truth_(p)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.array_seq([k,cljs.core.keys(m)], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$20,cljs.core.constant$keyword$49,cljs.core.constant$keyword$47,k,cljs.core.constant$keyword$48,m], null));
}

return v;
});
plumbing.fnk.schema.non_map_union = (function non_map_union(s1,s2){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s1,s2)){
return s1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s1,schema.core.Any)){
return s2;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s2,schema.core.Any)){
return s1;
} else {
return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s1,s2], 0));

}
}
}
});
/**
* Return a difference of schmas s1 and s2, where one is not a map.
* Punt for now, assuming s2 always satisfies s1.
*/
plumbing.fnk.schema.non_map_diff = (function non_map_diff(s1,s2){
return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function map_schema_QMARK_(m){
return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___21562 = schema.utils.use_fn_validation;
var output_schema21553_21563 = schema.core.maybe(schema.core.pair(schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema21554_21564 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);
var input_checker21555_21565 = schema.core.checker(input_schema21554_21564);
var output_checker21556_21566 = schema.core.checker(output_schema21553_21563);
/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___21562,output_schema21553_21563,input_schema21554_21564,input_checker21555_21565,output_checker21556_21566){
return (function unwrap_schema_form_key(G__21557){
var validate__10780__auto__ = ufv___21562.get_cell();
if(cljs.core.truth_(validate__10780__auto__)){
var args__10781__auto___21567 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21557], null);
var temp__4126__auto___21568 = (function (){var G__21560 = args__10781__auto___21567;
return (input_checker21555_21565.cljs$core$IFn$_invoke$arity$1 ? input_checker21555_21565.cljs$core$IFn$_invoke$arity$1(G__21560) : input_checker21555_21565.call(null,G__21560));
})();
if(cljs.core.truth_(temp__4126__auto___21568)){
var error__10782__auto___21569 = temp__4126__auto___21568;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21569], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21569,cljs.core.constant$keyword$21,args__10781__auto___21567,cljs.core.constant$keyword$22,input_schema21554_21564,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

var o__10783__auto__ = (function (){var k = G__21557;
while(true){
if(schema.core.specific_key_QMARK_(k)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key(k),schema.core.required_key_QMARK_(k)], null);
} else {
if((cljs.core.sequential_QMARK_(k)) && (!(cljs.core.vector_QMARK_(k))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(k),(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(k),false], null);
} else {
return null;
}
}
break;
}
})();
if(cljs.core.truth_(validate__10780__auto__)){
var temp__4126__auto___21570 = (function (){var G__21561 = o__10783__auto__;
return (output_checker21556_21566.cljs$core$IFn$_invoke$arity$1 ? output_checker21556_21566.cljs$core$IFn$_invoke$arity$1(G__21561) : output_checker21556_21566.call(null,G__21561));
})();
if(cljs.core.truth_(temp__4126__auto___21570)){
var error__10782__auto___21571 = temp__4126__auto___21570;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21571], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21571,cljs.core.constant$keyword$21,o__10783__auto__,cljs.core.constant$keyword$22,output_schema21553_21563,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

return o__10783__auto__;
});})(ufv___21562,output_schema21553_21563,input_schema21554_21564,input_checker21555_21565,output_checker21556_21566))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema(output_schema21553_21563,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21554_21564], null)));
var ufv___21581 = schema.utils.use_fn_validation;
var output_schema21572_21582 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema21573_21583 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker21574_21584 = schema.core.checker(input_schema21573_21583);
var output_checker21575_21585 = schema.core.checker(output_schema21572_21582);
/**
* Inputs: [s]
* Returns: {s/Keyword s/Bool}
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___21581,output_schema21572_21582,input_schema21573_21583,input_checker21574_21584,output_checker21575_21585){
return (function explicit_schema_key_map(G__21576){
var validate__10780__auto__ = ufv___21581.get_cell();
if(cljs.core.truth_(validate__10780__auto__)){
var args__10781__auto___21586 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21576], null);
var temp__4126__auto___21587 = (function (){var G__21579 = args__10781__auto___21586;
return (input_checker21574_21584.cljs$core$IFn$_invoke$arity$1 ? input_checker21574_21584.cljs$core$IFn$_invoke$arity$1(G__21579) : input_checker21574_21584.call(null,G__21579));
})();
if(cljs.core.truth_(temp__4126__auto___21587)){
var error__10782__auto___21588 = temp__4126__auto___21587;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21588], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21588,cljs.core.constant$keyword$21,args__10781__auto___21586,cljs.core.constant$keyword$22,input_schema21573_21583,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

var o__10783__auto__ = (function (){var s = G__21576;
while(true){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys(s)));
break;
}
})();
if(cljs.core.truth_(validate__10780__auto__)){
var temp__4126__auto___21589 = (function (){var G__21580 = o__10783__auto__;
return (output_checker21575_21585.cljs$core$IFn$_invoke$arity$1 ? output_checker21575_21585.cljs$core$IFn$_invoke$arity$1(G__21580) : output_checker21575_21585.call(null,G__21580));
})();
if(cljs.core.truth_(temp__4126__auto___21589)){
var error__10782__auto___21590 = temp__4126__auto___21589;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21590], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21590,cljs.core.constant$keyword$21,o__10783__auto__,cljs.core.constant$keyword$22,output_schema21572_21582,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

return o__10783__auto__;
});})(ufv___21581,output_schema21572_21582,input_schema21573_21583,input_checker21574_21584,output_checker21575_21585))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema(output_schema21572_21582,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21573_21583], null)));
var ufv___21600 = schema.utils.use_fn_validation;
var output_schema21591_21601 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
var input_schema21592_21602 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker21593_21603 = schema.core.checker(input_schema21592_21602);
var output_checker21594_21604 = schema.core.checker(output_schema21591_21601);
/**
* Inputs: [s :- {s/Keyword s/Bool}]
* Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___21600,output_schema21591_21601,input_schema21592_21602,input_checker21593_21603,output_checker21594_21604){
return (function split_schema_keys(G__21595){
var validate__10780__auto__ = ufv___21600.get_cell();
if(cljs.core.truth_(validate__10780__auto__)){
var args__10781__auto___21605 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21595], null);
var temp__4126__auto___21606 = (function (){var G__21598 = args__10781__auto___21605;
return (input_checker21593_21603.cljs$core$IFn$_invoke$arity$1 ? input_checker21593_21603.cljs$core$IFn$_invoke$arity$1(G__21598) : input_checker21593_21603.call(null,G__21598));
})();
if(cljs.core.truth_(temp__4126__auto___21606)){
var error__10782__auto___21607 = temp__4126__auto___21606;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21607], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21607,cljs.core.constant$keyword$21,args__10781__auto___21605,cljs.core.constant$keyword$22,input_schema21592_21602,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

var o__10783__auto__ = (function (){var s = G__21595;
while(true){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,cljs.core.key),cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__10780__auto__)){
var temp__4126__auto___21608 = (function (){var G__21599 = o__10783__auto__;
return (output_checker21594_21604.cljs$core$IFn$_invoke$arity$1 ? output_checker21594_21604.cljs$core$IFn$_invoke$arity$1(G__21599) : output_checker21594_21604.call(null,G__21599));
})();
if(cljs.core.truth_(temp__4126__auto___21608)){
var error__10782__auto___21609 = temp__4126__auto___21608;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21609], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21609,cljs.core.constant$keyword$21,o__10783__auto__,cljs.core.constant$keyword$22,output_schema21591_21601,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

return o__10783__auto__;
});})(ufv___21600,output_schema21591_21601,input_schema21592_21602,input_checker21593_21603,output_checker21594_21604))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema(output_schema21591_21601,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21592_21602], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__21618){
var vec__21619 = p__21618;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21619,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21619,(1),null);
var pk = (function (){var G__21620 = k;
return (key_project.cljs$core$IFn$_invoke$arity$1 ? key_project.cljs$core$IFn$_invoke$arity$1(G__21620) : key_project.call(null,G__21620));
})();
var temp__4124__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,pk);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__21621 = temp__4124__auto__;
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21621,(0),null);
var ov = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21621,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__21622 = ok;
var G__21623 = k;
return (key_combine.cljs$core$IFn$_invoke$arity$2 ? key_combine.cljs$core$IFn$_invoke$arity$2(G__21622,G__21623) : key_combine.call(null,G__21622,G__21623));
})(),(function (){var G__21624 = ov;
var G__21625 = v;
return (val_combine.cljs$core$IFn$_invoke$arity$2 ? val_combine.cljs$core$IFn$_invoke$arity$2(G__21624,G__21625) : val_combine.call(null,G__21624,G__21625));
})()], null));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,maps))));
};
var merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;
if (arguments.length > 3) {
var G__21626__i = 0, G__21626__a = new Array(arguments.length -  3);
while (G__21626__i < G__21626__a.length) {G__21626__a[G__21626__i] = arguments[G__21626__i + 3]; ++G__21626__i;}
  maps = new cljs.core.IndexedSeq(G__21626__a,0);
} 
return merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
merge_on_with.cljs$lang$maxFixedArity = 3;
merge_on_with.cljs$lang$applyTo = (function (arglist__21627){
var key_project = cljs.core.first(arglist__21627);
arglist__21627 = cljs.core.next(arglist__21627);
var key_combine = cljs.core.first(arglist__21627);
arglist__21627 = cljs.core.next(arglist__21627);
var val_combine = cljs.core.first(arglist__21627);
var maps = cljs.core.rest(arglist__21627);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___21641 = schema.utils.use_fn_validation;
var output_schema21629_21642 = plumbing.fnk.schema.InputSchema;
var input_schema21630_21643 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);
var input_checker21631_21644 = schema.core.checker(input_schema21630_21643);
var output_checker21632_21645 = schema.core.checker(output_schema21629_21642);
/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___21641,output_schema21629_21642,input_schema21630_21643,input_checker21631_21644,output_checker21632_21645){
return (function union_input_schemata(G__21633,G__21634){
var validate__10780__auto__ = ufv___21641.get_cell();
if(cljs.core.truth_(validate__10780__auto__)){
var args__10781__auto___21646 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21633,G__21634], null);
var temp__4126__auto___21647 = (function (){var G__21639 = args__10781__auto___21646;
return (input_checker21631_21644.cljs$core$IFn$_invoke$arity$1 ? input_checker21631_21644.cljs$core$IFn$_invoke$arity$1(G__21639) : input_checker21631_21644.call(null,G__21639));
})();
if(cljs.core.truth_(temp__4126__auto___21647)){
var error__10782__auto___21648 = temp__4126__auto___21647;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21648], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21648,cljs.core.constant$keyword$21,args__10781__auto___21646,cljs.core.constant$keyword$22,input_schema21630_21643,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

var o__10783__auto__ = (function (){var i1 = G__21633;
var i2 = G__21634;
while(true){
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(((function (validate__10780__auto__,ufv___21641,output_schema21629_21642,input_schema21630_21643,input_checker21631_21644,output_checker21632_21645){
return (function (p1__21628_SHARP_){
if(schema.core.specific_key_QMARK_(p1__21628_SHARP_)){
return schema.core.explicit_schema_key(p1__21628_SHARP_);
} else {
return cljs.core.constant$keyword$50;
}
});})(validate__10780__auto__,ufv___21641,output_schema21629_21642,input_schema21630_21643,input_checker21631_21644,output_checker21632_21645))
,((function (validate__10780__auto__,ufv___21641,output_schema21629_21642,input_schema21630_21643,input_checker21631_21644,output_checker21632_21645){
return (function (k1,k2){
if(schema.core.required_key_QMARK_(k1)){
return k1;
} else {
if(schema.core.required_key_QMARK_(k2)){
return k2;
} else {
if(schema.core.optional_key_QMARK_(k1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k1,k2)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null))], 0)))].join('')));
}

return k1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k1,k2)){
return k1;
} else {
throw (new Error(schema.utils.format_STAR_("Only one extra schema allowed")));


}
}
}
}
});})(validate__10780__auto__,ufv___21641,output_schema21629_21642,input_schema21630_21643,input_checker21631_21644,output_checker21632_21645))
,((function (validate__10780__auto__,ufv___21641,output_schema21629_21642,input_schema21630_21643,input_checker21631_21644,output_checker21632_21645){
return (function (s1,s2){
if((plumbing.fnk.schema.map_schema_QMARK_(s1)) && (plumbing.fnk.schema.map_schema_QMARK_(s2))){
return union_input_schemata(s1,s2);
} else {
return plumbing.fnk.schema.non_map_union(s1,s2);
}
});})(validate__10780__auto__,ufv___21641,output_schema21629_21642,input_schema21630_21643,input_checker21631_21644,output_checker21632_21645))
,cljs.core.array_seq([i1,i2], 0));
break;
}
})();
if(cljs.core.truth_(validate__10780__auto__)){
var temp__4126__auto___21649 = (function (){var G__21640 = o__10783__auto__;
return (output_checker21632_21645.cljs$core$IFn$_invoke$arity$1 ? output_checker21632_21645.cljs$core$IFn$_invoke$arity$1(G__21640) : output_checker21632_21645.call(null,G__21640));
})();
if(cljs.core.truth_(temp__4126__auto___21649)){
var error__10782__auto___21650 = temp__4126__auto___21649;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21650], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21650,cljs.core.constant$keyword$21,o__10783__auto__,cljs.core.constant$keyword$22,output_schema21629_21642,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

return o__10783__auto__;
});})(ufv___21641,output_schema21629_21642,input_schema21630_21643,input_checker21631_21644,output_checker21632_21645))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema(output_schema21629_21642,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21630_21643], null)));
var ufv___21660 = schema.utils.use_fn_validation;
var output_schema21651_21661 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema21652_21662 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);
var input_checker21653_21663 = schema.core.checker(input_schema21652_21662);
var output_checker21654_21664 = schema.core.checker(output_schema21651_21661);
/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___21660,output_schema21651_21661,input_schema21652_21662,input_checker21653_21663,output_checker21654_21664){
return (function required_toplevel_keys(G__21655){
var validate__10780__auto__ = ufv___21660.get_cell();
if(cljs.core.truth_(validate__10780__auto__)){
var args__10781__auto___21665 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21655], null);
var temp__4126__auto___21666 = (function (){var G__21658 = args__10781__auto___21665;
return (input_checker21653_21663.cljs$core$IFn$_invoke$arity$1 ? input_checker21653_21663.cljs$core$IFn$_invoke$arity$1(G__21658) : input_checker21653_21663.call(null,G__21658));
})();
if(cljs.core.truth_(temp__4126__auto___21666)){
var error__10782__auto___21667 = temp__4126__auto___21666;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21667], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21667,cljs.core.constant$keyword$21,args__10781__auto___21665,cljs.core.constant$keyword$22,input_schema21652_21662,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

var o__10783__auto__ = (function (){var input_schema = G__21655;
while(true){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (validate__10780__auto__,ufv___21660,output_schema21651_21661,input_schema21652_21662,input_checker21653_21663,output_checker21654_21664){
return (function (k){
if(schema.core.required_key_QMARK_(k)){
return schema.core.explicit_schema_key(k);
} else {
return null;
}
});})(validate__10780__auto__,ufv___21660,output_schema21651_21661,input_schema21652_21662,input_checker21653_21663,output_checker21654_21664))
,cljs.core.keys(input_schema));
break;
}
})();
if(cljs.core.truth_(validate__10780__auto__)){
var temp__4126__auto___21668 = (function (){var G__21659 = o__10783__auto__;
return (output_checker21654_21664.cljs$core$IFn$_invoke$arity$1 ? output_checker21654_21664.cljs$core$IFn$_invoke$arity$1(G__21659) : output_checker21654_21664.call(null,G__21659));
})();
if(cljs.core.truth_(temp__4126__auto___21668)){
var error__10782__auto___21669 = temp__4126__auto___21668;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21669], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21669,cljs.core.constant$keyword$21,o__10783__auto__,cljs.core.constant$keyword$22,output_schema21651_21661,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

return o__10783__auto__;
});})(ufv___21660,output_schema21651_21661,input_schema21652_21662,input_checker21653_21663,output_checker21654_21664))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema(output_schema21651_21661,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21652_21662], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_(expr)) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,cljs.core.keys(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4571__auto__ = (function iter__21684(s__21685){
return (new cljs.core.LazySeq(null,(function (){
var s__21685__$1 = s__21685;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__21685__$1);
if(temp__4126__auto__){
var s__21685__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21685__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__21685__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__21687 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__21686 = (0);
while(true){
if((i__21686 < size__4570__auto__)){
var vec__21692 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__21686);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21692,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21692,(1),null);
cljs.core.chunk_append(b__21687,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null));

var G__21694 = (i__21686 + (1));
i__21686 = G__21694;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21687),iter__21684(cljs.core.chunk_rest(s__21685__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21687),null);
}
} else {
var vec__21693 = cljs.core.first(s__21685__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21693,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21693,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null),iter__21684(cljs.core.rest(s__21685__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4571__auto__(expr);
})());
} else {
return new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null);
}
});
/**
* Subtract output-schema from input-schema, returning nil if it's possible that an object
* satisfying the output-schema satisfies the input-schema, or otherwise a description
* of the part(s) of input-schema not met by output-schema.  Strict about the map structure
* of output-schema matching input-schema, but loose about everything else (only looks at
* required keys of output-schema.
*/
plumbing.fnk.schema.schema_diff = (function schema_diff(input_schema,output_schema){
if(!(plumbing.fnk.schema.map_schema_QMARK_(input_schema))){
return plumbing.fnk.schema.non_map_diff(input_schema,output_schema);
} else {
if(!(plumbing.fnk.schema.map_schema_QMARK_(output_schema))){
return schema.utils.error(schema.utils.__GT_ValidationError(input_schema,output_schema,(new cljs.core.Delay((function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explain(output_schema)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else {
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4571__auto__ = (function iter__21713(s__21714){
return (new cljs.core.LazySeq(null,(function (){
var s__21714__$1 = s__21714;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__21714__$1);
if(temp__4126__auto__){
var s__21714__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21714__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__21714__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__21716 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__21715 = (0);
while(true){
if((i__21715 < size__4570__auto__)){
var vec__21721 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__21715);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21721,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21721,(1),null);
if(schema.core.specific_key_QMARK_(k)){
var required_QMARK_ = schema.core.required_key_QMARK_(k);
var raw_k = schema.core.explicit_schema_key(k);
var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append(b__21716,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__21723 = (i__21715 + (1));
i__21715 = G__21723;
continue;
} else {
var G__21724 = (i__21715 + (1));
i__21715 = G__21724;
continue;
}
} else {
var G__21725 = (i__21715 + (1));
i__21715 = G__21725;
continue;
}
} else {
var G__21726 = (i__21715 + (1));
i__21715 = G__21726;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21716),iter__21713(cljs.core.chunk_rest(s__21714__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21716),null);
}
} else {
var vec__21722 = cljs.core.first(s__21714__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21722,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21722,(1),null);
if(schema.core.specific_key_QMARK_(k)){
var required_QMARK_ = schema.core.required_key_QMARK_(k);
var raw_k = schema.core.explicit_schema_key(k);
var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__21713(cljs.core.rest(s__21714__$2)));
} else {
var G__21727 = cljs.core.rest(s__21714__$2);
s__21714__$1 = G__21727;
continue;
}
} else {
var G__21728 = cljs.core.rest(s__21714__$2);
s__21714__$1 = G__21728;
continue;
}
} else {
var G__21729 = cljs.core.rest(s__21714__$2);
s__21714__$1 = G__21729;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4571__auto__(input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function assert_satisfies_schema(input_schema,output_schema){
var fails = plumbing.fnk.schema.schema_diff(input_schema,output_schema);
if(cljs.core.truth_(fails)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str(fails)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$20,cljs.core.constant$keyword$52,cljs.core.constant$keyword$51,fails], null));
} else {
return null;
}
});
var ufv___21756 = schema.utils.use_fn_validation;
var output_schema21730_21757 = schema.core.Any;
var input_schema21731_21758 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker21732_21759 = schema.core.checker(input_schema21731_21758);
var output_checker21733_21760 = schema.core.checker(output_schema21730_21757);
/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___21756,output_schema21730_21757,input_schema21731_21758,input_checker21732_21759,output_checker21733_21760){
return (function compose_schemata(G__21734,G__21735){
var validate__10780__auto__ = true;
if(validate__10780__auto__){
var args__10781__auto___21761 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21734,G__21735], null);
var temp__4126__auto___21762 = (function (){var G__21746 = args__10781__auto___21761;
return (input_checker21732_21759.cljs$core$IFn$_invoke$arity$1 ? input_checker21732_21759.cljs$core$IFn$_invoke$arity$1(G__21746) : input_checker21732_21759.call(null,G__21746));
})();
if(cljs.core.truth_(temp__4126__auto___21762)){
var error__10782__auto___21763 = temp__4126__auto___21762;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21763], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21763,cljs.core.constant$keyword$21,args__10781__auto___21761,cljs.core.constant$keyword$22,input_schema21731_21758,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

var o__10783__auto__ = (function (){var G__21749 = G__21734;
var vec__21751 = G__21749;
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21751,(0),null);
var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21751,(1),null);
var G__21750 = G__21735;
var vec__21752 = G__21750;
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21752,(0),null);
var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21752,(1),null);
var G__21749__$1 = G__21749;
var G__21750__$1 = G__21750;
while(true){
var vec__21753 = G__21749__$1;
var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21753,(0),null);
var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21753,(1),null);
var vec__21754 = G__21750__$1;
var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21754,(0),null);
var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21754,(1),null);
plumbing.fnk.schema.assert_satisfies_schema(cljs.core.select_keys(i2__$1,cljs.core.keys(o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,i2__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(o1__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.optional_key,cljs.core.keys(o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__10780__auto__){
var temp__4126__auto___21764 = (function (){var G__21755 = o__10783__auto__;
return (output_checker21733_21760.cljs$core$IFn$_invoke$arity$1 ? output_checker21733_21760.cljs$core$IFn$_invoke$arity$1(G__21755) : output_checker21733_21760.call(null,G__21755));
})();
if(cljs.core.truth_(temp__4126__auto___21764)){
var error__10782__auto___21765 = temp__4126__auto___21764;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21765], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21765,cljs.core.constant$keyword$21,o__10783__auto__,cljs.core.constant$keyword$22,output_schema21730_21757,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

return o__10783__auto__;
});})(ufv___21756,output_schema21730_21757,input_schema21731_21758,input_checker21732_21759,output_checker21733_21760))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema(output_schema21730_21757,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21731_21758], null)));
plumbing.fnk.schema.schema_key = (function schema_key(m,k){
if(cljs.core.contains_QMARK_(m,k)){
return k;
} else {
if(cljs.core.contains_QMARK_(m,schema.core.optional_key(k))){
return schema.core.optional_key(k);
} else {
return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function possibly_contains_QMARK_(m,k){
return cljs.core.boolean$(plumbing.fnk.schema.schema_key(m,k));
});
var ufv___21868 = schema.utils.use_fn_validation;
var output_schema21766_21869 = schema.core.Any;
var input_schema21767_21870 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);
var input_checker21768_21871 = schema.core.checker(input_schema21767_21870);
var output_checker21769_21872 = schema.core.checker(output_schema21766_21869);
/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___21868,output_schema21766_21869,input_schema21767_21870,input_checker21768_21871,output_checker21769_21872){
return (function split_schema(G__21770,G__21771){
var validate__10780__auto__ = ufv___21868.get_cell();
if(cljs.core.truth_(validate__10780__auto__)){
var args__10781__auto___21873 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21770,G__21771], null);
var temp__4126__auto___21874 = (function (){var G__21820 = args__10781__auto___21873;
return (input_checker21768_21871.cljs$core$IFn$_invoke$arity$1 ? input_checker21768_21871.cljs$core$IFn$_invoke$arity$1(G__21820) : input_checker21768_21871.call(null,G__21820));
})();
if(cljs.core.truth_(temp__4126__auto___21874)){
var error__10782__auto___21875 = temp__4126__auto___21874;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21875], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21875,cljs.core.constant$keyword$21,args__10781__auto___21873,cljs.core.constant$keyword$22,input_schema21767_21870,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

var o__10783__auto__ = (function (){var s = G__21770;
var ks = G__21771;
while(true){
var ks__$1 = cljs.core.set(ks);
var iter__4571__auto__ = ((function (ks__$1,validate__10780__auto__,ufv___21868,output_schema21766_21869,input_schema21767_21870,input_checker21768_21871,output_checker21769_21872){
return (function iter__21821(s__21822){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__10780__auto__,ufv___21868,output_schema21766_21869,input_schema21767_21870,input_checker21768_21871,output_checker21769_21872){
return (function (){
var s__21822__$1 = s__21822;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__21822__$1);
if(temp__4126__auto__){
var s__21822__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21822__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__21822__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__21824 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__21823 = (0);
while(true){
if((i__21823 < size__4570__auto__)){
var in_QMARK_ = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__21823);
cljs.core.chunk_append(b__21824,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4571__auto__ = ((function (i__21823,in_QMARK_,c__4569__auto__,size__4570__auto__,b__21824,s__21822__$2,temp__4126__auto__,ks__$1,validate__10780__auto__,ufv___21868,output_schema21766_21869,input_schema21767_21870,input_checker21768_21871,output_checker21769_21872){
return (function iter__21847(s__21848){
return (new cljs.core.LazySeq(null,((function (i__21823,in_QMARK_,c__4569__auto__,size__4570__auto__,b__21824,s__21822__$2,temp__4126__auto__,ks__$1,validate__10780__auto__,ufv___21868,output_schema21766_21869,input_schema21767_21870,input_checker21768_21871,output_checker21769_21872){
return (function (){
var s__21848__$1 = s__21848;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__21848__$1);
if(temp__4126__auto____$1){
var s__21848__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21848__$2)){
var c__4569__auto____$1 = cljs.core.chunk_first(s__21848__$2);
var size__4570__auto____$1 = cljs.core.count(c__4569__auto____$1);
var b__21850 = cljs.core.chunk_buffer(size__4570__auto____$1);
if((function (){var i__21849 = (0);
while(true){
if((i__21849 < size__4570__auto____$1)){
var vec__21855 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto____$1,i__21849);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21855,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21855,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
cljs.core.chunk_append(b__21850,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__21876 = (i__21849 + (1));
i__21849 = G__21876;
continue;
} else {
var G__21877 = (i__21849 + (1));
i__21849 = G__21877;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21850),iter__21847(cljs.core.chunk_rest(s__21848__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21850),null);
}
} else {
var vec__21856 = cljs.core.first(s__21848__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21856,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21856,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__21847(cljs.core.rest(s__21848__$2)));
} else {
var G__21878 = cljs.core.rest(s__21848__$2);
s__21848__$1 = G__21878;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__21823,in_QMARK_,c__4569__auto__,size__4570__auto__,b__21824,s__21822__$2,temp__4126__auto__,ks__$1,validate__10780__auto__,ufv___21868,output_schema21766_21869,input_schema21767_21870,input_checker21768_21871,output_checker21769_21872))
,null,null));
});})(i__21823,in_QMARK_,c__4569__auto__,size__4570__auto__,b__21824,s__21822__$2,temp__4126__auto__,ks__$1,validate__10780__auto__,ufv___21868,output_schema21766_21869,input_schema21767_21870,input_checker21768_21871,output_checker21769_21872))
;
return iter__4571__auto__(s);
})()));

var G__21879 = (i__21823 + (1));
i__21823 = G__21879;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21824),iter__21821(cljs.core.chunk_rest(s__21822__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21824),null);
}
} else {
var in_QMARK_ = cljs.core.first(s__21822__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4571__auto__ = ((function (in_QMARK_,s__21822__$2,temp__4126__auto__,ks__$1,validate__10780__auto__,ufv___21868,output_schema21766_21869,input_schema21767_21870,input_checker21768_21871,output_checker21769_21872){
return (function iter__21857(s__21858){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__21822__$2,temp__4126__auto__,ks__$1,validate__10780__auto__,ufv___21868,output_schema21766_21869,input_schema21767_21870,input_checker21768_21871,output_checker21769_21872){
return (function (){
var s__21858__$1 = s__21858;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__21858__$1);
if(temp__4126__auto____$1){
var s__21858__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21858__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__21858__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__21860 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__21859 = (0);
while(true){
if((i__21859 < size__4570__auto__)){
var vec__21865 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__21859);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21865,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21865,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
cljs.core.chunk_append(b__21860,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__21880 = (i__21859 + (1));
i__21859 = G__21880;
continue;
} else {
var G__21881 = (i__21859 + (1));
i__21859 = G__21881;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21860),iter__21857(cljs.core.chunk_rest(s__21858__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21860),null);
}
} else {
var vec__21866 = cljs.core.first(s__21858__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21866,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21866,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__21857(cljs.core.rest(s__21858__$2)));
} else {
var G__21882 = cljs.core.rest(s__21858__$2);
s__21858__$1 = G__21882;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__21822__$2,temp__4126__auto__,ks__$1,validate__10780__auto__,ufv___21868,output_schema21766_21869,input_schema21767_21870,input_checker21768_21871,output_checker21769_21872))
,null,null));
});})(in_QMARK_,s__21822__$2,temp__4126__auto__,ks__$1,validate__10780__auto__,ufv___21868,output_schema21766_21869,input_schema21767_21870,input_checker21768_21871,output_checker21769_21872))
;
return iter__4571__auto__(s);
})()),iter__21821(cljs.core.rest(s__21822__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__10780__auto__,ufv___21868,output_schema21766_21869,input_schema21767_21870,input_checker21768_21871,output_checker21769_21872))
,null,null));
});})(ks__$1,validate__10780__auto__,ufv___21868,output_schema21766_21869,input_schema21767_21870,input_checker21768_21871,output_checker21769_21872))
;
return iter__4571__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__10780__auto__)){
var temp__4126__auto___21883 = (function (){var G__21867 = o__10783__auto__;
return (output_checker21769_21872.cljs$core$IFn$_invoke$arity$1 ? output_checker21769_21872.cljs$core$IFn$_invoke$arity$1(G__21867) : output_checker21769_21872.call(null,G__21867));
})();
if(cljs.core.truth_(temp__4126__auto___21883)){
var error__10782__auto___21884 = temp__4126__auto___21883;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21884], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21884,cljs.core.constant$keyword$21,o__10783__auto__,cljs.core.constant$keyword$22,output_schema21766_21869,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

return o__10783__auto__;
});})(ufv___21868,output_schema21766_21869,input_schema21767_21870,input_checker21768_21871,output_checker21769_21872))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema),schema.core.make_fn_schema(output_schema21766_21869,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21767_21870], null)));
var ufv___21919 = schema.utils.use_fn_validation;
var output_schema21885_21920 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema21886_21921 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Keyword,"key"),schema.core.one(plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker21887_21922 = schema.core.checker(input_schema21886_21921);
var output_checker21888_21923 = schema.core.checker(output_schema21885_21920);
/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___21919,output_schema21885_21920,input_schema21886_21921,input_checker21887_21922,output_checker21888_21923){
return (function sequence_schemata(G__21889,G__21890){
var validate__10780__auto__ = ufv___21919.get_cell();
if(cljs.core.truth_(validate__10780__auto__)){
var args__10781__auto___21924 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21889,G__21890], null);
var temp__4126__auto___21925 = (function (){var G__21905 = args__10781__auto___21924;
return (input_checker21887_21922.cljs$core$IFn$_invoke$arity$1 ? input_checker21887_21922.cljs$core$IFn$_invoke$arity$1(G__21905) : input_checker21887_21922.call(null,G__21905));
})();
if(cljs.core.truth_(temp__4126__auto___21925)){
var error__10782__auto___21926 = temp__4126__auto___21925;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21926], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21926,cljs.core.constant$keyword$21,args__10781__auto___21924,cljs.core.constant$keyword$22,input_schema21886_21921,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

var o__10783__auto__ = (function (){var G__21909 = G__21889;
var vec__21911 = G__21909;
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21911,(0),null);
var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21911,(1),null);
var G__21910 = G__21890;
var vec__21912 = G__21910;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21912,(0),null);
var vec__21913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21912,(1),null);
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21913,(0),null);
var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21913,(1),null);
var G__21909__$1 = G__21909;
var G__21910__$1 = G__21910;
while(true){
var vec__21914 = G__21909__$1;
var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21914,(0),null);
var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21914,(1),null);
var vec__21915 = G__21910__$1;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21915,(0),null);
var vec__21916 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21915,(1),null);
var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21916,(0),null);
var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21916,(1),null);
if(!(plumbing.fnk.schema.possibly_contains_QMARK_(i1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",cljs.core.array_seq([k__$1,schema.core.explain(i2__$1),schema.core.explain(i1__$1)], 0))));
}

if(!(plumbing.fnk.schema.possibly_contains_QMARK_(i2__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Node outputs a key %s in its inputs %s",cljs.core.array_seq([k__$1,schema.core.explain(i2__$1)], 0))));
}

if(!(plumbing.fnk.schema.possibly_contains_QMARK_(o1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Node outputs a duplicate key %s given inputs %s",cljs.core.array_seq([k__$1,schema.core.explain(i1__$1)], 0))));
}

var vec__21917 = plumbing.fnk.schema.split_schema(i2__$1,cljs.core.keys(o1__$1));
var used = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21917,(0),null);
var unused = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21917,(1),null);
plumbing.fnk.schema.assert_satisfies_schema(used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(unused,i1__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__10780__auto__)){
var temp__4126__auto___21927 = (function (){var G__21918 = o__10783__auto__;
return (output_checker21888_21923.cljs$core$IFn$_invoke$arity$1 ? output_checker21888_21923.cljs$core$IFn$_invoke$arity$1(G__21918) : output_checker21888_21923.call(null,G__21918));
})();
if(cljs.core.truth_(temp__4126__auto___21927)){
var error__10782__auto___21928 = temp__4126__auto___21927;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21928], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21928,cljs.core.constant$keyword$21,o__10783__auto__,cljs.core.constant$keyword$22,output_schema21885_21920,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

return o__10783__auto__;
});})(ufv___21919,output_schema21885_21920,input_schema21886_21921,input_checker21887_21922,output_checker21888_21923))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema(output_schema21885_21920,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21886_21921], null)));

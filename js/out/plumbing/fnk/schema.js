// Compiled by ClojureScript 0.0-2850 {}
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta(schema.core.__GT_Protocol(schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$32,new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),cljs.core.constant$keyword$34,(function (p1__10810__10811__auto__){
var G__21423 = p1__10810__10811__auto__;
if(G__21423){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__21423.schema$core$Schema$;
}
})())){
return true;
} else {
if((!G__21423.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__21423);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__21423);
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
var repeated_things = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__21424_SHARP_){
return (cljs.core.val(p1__21424_SHARP_) > (1));
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

var vec__21426 = cljs.core.find(m,k);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21426,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21426,(1),null);
var p = vec__21426;
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
var ufv___21436 = schema.utils.use_fn_validation;
var output_schema21427_21437 = schema.core.maybe(schema.core.pair(schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema21428_21438 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);
var input_checker21429_21439 = schema.core.checker(input_schema21428_21438);
var output_checker21430_21440 = schema.core.checker(output_schema21427_21437);
/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___21436,output_schema21427_21437,input_schema21428_21438,input_checker21429_21439,output_checker21430_21440){
return (function unwrap_schema_form_key(G__21431){
var validate__10780__auto__ = ufv___21436.get_cell();
if(cljs.core.truth_(validate__10780__auto__)){
var args__10781__auto___21441 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21431], null);
var temp__4126__auto___21442 = (function (){var G__21434 = args__10781__auto___21441;
return (input_checker21429_21439.cljs$core$IFn$_invoke$arity$1 ? input_checker21429_21439.cljs$core$IFn$_invoke$arity$1(G__21434) : input_checker21429_21439.call(null,G__21434));
})();
if(cljs.core.truth_(temp__4126__auto___21442)){
var error__10782__auto___21443 = temp__4126__auto___21442;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21443], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21443,cljs.core.constant$keyword$21,args__10781__auto___21441,cljs.core.constant$keyword$22,input_schema21428_21438,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

var o__10783__auto__ = (function (){var k = G__21431;
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
var temp__4126__auto___21444 = (function (){var G__21435 = o__10783__auto__;
return (output_checker21430_21440.cljs$core$IFn$_invoke$arity$1 ? output_checker21430_21440.cljs$core$IFn$_invoke$arity$1(G__21435) : output_checker21430_21440.call(null,G__21435));
})();
if(cljs.core.truth_(temp__4126__auto___21444)){
var error__10782__auto___21445 = temp__4126__auto___21444;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21445], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21445,cljs.core.constant$keyword$21,o__10783__auto__,cljs.core.constant$keyword$22,output_schema21427_21437,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

return o__10783__auto__;
});})(ufv___21436,output_schema21427_21437,input_schema21428_21438,input_checker21429_21439,output_checker21430_21440))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema(output_schema21427_21437,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21428_21438], null)));
var ufv___21455 = schema.utils.use_fn_validation;
var output_schema21446_21456 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema21447_21457 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker21448_21458 = schema.core.checker(input_schema21447_21457);
var output_checker21449_21459 = schema.core.checker(output_schema21446_21456);
/**
* Inputs: [s]
* Returns: {s/Keyword s/Bool}
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___21455,output_schema21446_21456,input_schema21447_21457,input_checker21448_21458,output_checker21449_21459){
return (function explicit_schema_key_map(G__21450){
var validate__10780__auto__ = ufv___21455.get_cell();
if(cljs.core.truth_(validate__10780__auto__)){
var args__10781__auto___21460 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21450], null);
var temp__4126__auto___21461 = (function (){var G__21453 = args__10781__auto___21460;
return (input_checker21448_21458.cljs$core$IFn$_invoke$arity$1 ? input_checker21448_21458.cljs$core$IFn$_invoke$arity$1(G__21453) : input_checker21448_21458.call(null,G__21453));
})();
if(cljs.core.truth_(temp__4126__auto___21461)){
var error__10782__auto___21462 = temp__4126__auto___21461;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21462], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21462,cljs.core.constant$keyword$21,args__10781__auto___21460,cljs.core.constant$keyword$22,input_schema21447_21457,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

var o__10783__auto__ = (function (){var s = G__21450;
while(true){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys(s)));
break;
}
})();
if(cljs.core.truth_(validate__10780__auto__)){
var temp__4126__auto___21463 = (function (){var G__21454 = o__10783__auto__;
return (output_checker21449_21459.cljs$core$IFn$_invoke$arity$1 ? output_checker21449_21459.cljs$core$IFn$_invoke$arity$1(G__21454) : output_checker21449_21459.call(null,G__21454));
})();
if(cljs.core.truth_(temp__4126__auto___21463)){
var error__10782__auto___21464 = temp__4126__auto___21463;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21464], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21464,cljs.core.constant$keyword$21,o__10783__auto__,cljs.core.constant$keyword$22,output_schema21446_21456,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

return o__10783__auto__;
});})(ufv___21455,output_schema21446_21456,input_schema21447_21457,input_checker21448_21458,output_checker21449_21459))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema(output_schema21446_21456,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21447_21457], null)));
var ufv___21474 = schema.utils.use_fn_validation;
var output_schema21465_21475 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
var input_schema21466_21476 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker21467_21477 = schema.core.checker(input_schema21466_21476);
var output_checker21468_21478 = schema.core.checker(output_schema21465_21475);
/**
* Inputs: [s :- {s/Keyword s/Bool}]
* Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___21474,output_schema21465_21475,input_schema21466_21476,input_checker21467_21477,output_checker21468_21478){
return (function split_schema_keys(G__21469){
var validate__10780__auto__ = ufv___21474.get_cell();
if(cljs.core.truth_(validate__10780__auto__)){
var args__10781__auto___21479 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21469], null);
var temp__4126__auto___21480 = (function (){var G__21472 = args__10781__auto___21479;
return (input_checker21467_21477.cljs$core$IFn$_invoke$arity$1 ? input_checker21467_21477.cljs$core$IFn$_invoke$arity$1(G__21472) : input_checker21467_21477.call(null,G__21472));
})();
if(cljs.core.truth_(temp__4126__auto___21480)){
var error__10782__auto___21481 = temp__4126__auto___21480;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21481], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21481,cljs.core.constant$keyword$21,args__10781__auto___21479,cljs.core.constant$keyword$22,input_schema21466_21476,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

var o__10783__auto__ = (function (){var s = G__21469;
while(true){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,cljs.core.key),cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__10780__auto__)){
var temp__4126__auto___21482 = (function (){var G__21473 = o__10783__auto__;
return (output_checker21468_21478.cljs$core$IFn$_invoke$arity$1 ? output_checker21468_21478.cljs$core$IFn$_invoke$arity$1(G__21473) : output_checker21468_21478.call(null,G__21473));
})();
if(cljs.core.truth_(temp__4126__auto___21482)){
var error__10782__auto___21483 = temp__4126__auto___21482;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21483], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21483,cljs.core.constant$keyword$21,o__10783__auto__,cljs.core.constant$keyword$22,output_schema21465_21475,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

return o__10783__auto__;
});})(ufv___21474,output_schema21465_21475,input_schema21466_21476,input_checker21467_21477,output_checker21468_21478))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema(output_schema21465_21475,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21466_21476], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__21492){
var vec__21493 = p__21492;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21493,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21493,(1),null);
var pk = (function (){var G__21494 = k;
return (key_project.cljs$core$IFn$_invoke$arity$1 ? key_project.cljs$core$IFn$_invoke$arity$1(G__21494) : key_project.call(null,G__21494));
})();
var temp__4124__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,pk);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__21495 = temp__4124__auto__;
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21495,(0),null);
var ov = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21495,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__21496 = ok;
var G__21497 = k;
return (key_combine.cljs$core$IFn$_invoke$arity$2 ? key_combine.cljs$core$IFn$_invoke$arity$2(G__21496,G__21497) : key_combine.call(null,G__21496,G__21497));
})(),(function (){var G__21498 = ov;
var G__21499 = v;
return (val_combine.cljs$core$IFn$_invoke$arity$2 ? val_combine.cljs$core$IFn$_invoke$arity$2(G__21498,G__21499) : val_combine.call(null,G__21498,G__21499));
})()], null));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,maps))));
};
var merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;
if (arguments.length > 3) {
var G__21500__i = 0, G__21500__a = new Array(arguments.length -  3);
while (G__21500__i < G__21500__a.length) {G__21500__a[G__21500__i] = arguments[G__21500__i + 3]; ++G__21500__i;}
  maps = new cljs.core.IndexedSeq(G__21500__a,0);
} 
return merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
merge_on_with.cljs$lang$maxFixedArity = 3;
merge_on_with.cljs$lang$applyTo = (function (arglist__21501){
var key_project = cljs.core.first(arglist__21501);
arglist__21501 = cljs.core.next(arglist__21501);
var key_combine = cljs.core.first(arglist__21501);
arglist__21501 = cljs.core.next(arglist__21501);
var val_combine = cljs.core.first(arglist__21501);
var maps = cljs.core.rest(arglist__21501);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___21515 = schema.utils.use_fn_validation;
var output_schema21503_21516 = plumbing.fnk.schema.InputSchema;
var input_schema21504_21517 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);
var input_checker21505_21518 = schema.core.checker(input_schema21504_21517);
var output_checker21506_21519 = schema.core.checker(output_schema21503_21516);
/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___21515,output_schema21503_21516,input_schema21504_21517,input_checker21505_21518,output_checker21506_21519){
return (function union_input_schemata(G__21507,G__21508){
var validate__10780__auto__ = ufv___21515.get_cell();
if(cljs.core.truth_(validate__10780__auto__)){
var args__10781__auto___21520 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21507,G__21508], null);
var temp__4126__auto___21521 = (function (){var G__21513 = args__10781__auto___21520;
return (input_checker21505_21518.cljs$core$IFn$_invoke$arity$1 ? input_checker21505_21518.cljs$core$IFn$_invoke$arity$1(G__21513) : input_checker21505_21518.call(null,G__21513));
})();
if(cljs.core.truth_(temp__4126__auto___21521)){
var error__10782__auto___21522 = temp__4126__auto___21521;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21522], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21522,cljs.core.constant$keyword$21,args__10781__auto___21520,cljs.core.constant$keyword$22,input_schema21504_21517,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

var o__10783__auto__ = (function (){var i1 = G__21507;
var i2 = G__21508;
while(true){
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(((function (validate__10780__auto__,ufv___21515,output_schema21503_21516,input_schema21504_21517,input_checker21505_21518,output_checker21506_21519){
return (function (p1__21502_SHARP_){
if(schema.core.specific_key_QMARK_(p1__21502_SHARP_)){
return schema.core.explicit_schema_key(p1__21502_SHARP_);
} else {
return cljs.core.constant$keyword$50;
}
});})(validate__10780__auto__,ufv___21515,output_schema21503_21516,input_schema21504_21517,input_checker21505_21518,output_checker21506_21519))
,((function (validate__10780__auto__,ufv___21515,output_schema21503_21516,input_schema21504_21517,input_checker21505_21518,output_checker21506_21519){
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
});})(validate__10780__auto__,ufv___21515,output_schema21503_21516,input_schema21504_21517,input_checker21505_21518,output_checker21506_21519))
,((function (validate__10780__auto__,ufv___21515,output_schema21503_21516,input_schema21504_21517,input_checker21505_21518,output_checker21506_21519){
return (function (s1,s2){
if((plumbing.fnk.schema.map_schema_QMARK_(s1)) && (plumbing.fnk.schema.map_schema_QMARK_(s2))){
return union_input_schemata(s1,s2);
} else {
return plumbing.fnk.schema.non_map_union(s1,s2);
}
});})(validate__10780__auto__,ufv___21515,output_schema21503_21516,input_schema21504_21517,input_checker21505_21518,output_checker21506_21519))
,cljs.core.array_seq([i1,i2], 0));
break;
}
})();
if(cljs.core.truth_(validate__10780__auto__)){
var temp__4126__auto___21523 = (function (){var G__21514 = o__10783__auto__;
return (output_checker21506_21519.cljs$core$IFn$_invoke$arity$1 ? output_checker21506_21519.cljs$core$IFn$_invoke$arity$1(G__21514) : output_checker21506_21519.call(null,G__21514));
})();
if(cljs.core.truth_(temp__4126__auto___21523)){
var error__10782__auto___21524 = temp__4126__auto___21523;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21524], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21524,cljs.core.constant$keyword$21,o__10783__auto__,cljs.core.constant$keyword$22,output_schema21503_21516,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

return o__10783__auto__;
});})(ufv___21515,output_schema21503_21516,input_schema21504_21517,input_checker21505_21518,output_checker21506_21519))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema(output_schema21503_21516,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21504_21517], null)));
var ufv___21534 = schema.utils.use_fn_validation;
var output_schema21525_21535 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema21526_21536 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);
var input_checker21527_21537 = schema.core.checker(input_schema21526_21536);
var output_checker21528_21538 = schema.core.checker(output_schema21525_21535);
/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___21534,output_schema21525_21535,input_schema21526_21536,input_checker21527_21537,output_checker21528_21538){
return (function required_toplevel_keys(G__21529){
var validate__10780__auto__ = ufv___21534.get_cell();
if(cljs.core.truth_(validate__10780__auto__)){
var args__10781__auto___21539 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21529], null);
var temp__4126__auto___21540 = (function (){var G__21532 = args__10781__auto___21539;
return (input_checker21527_21537.cljs$core$IFn$_invoke$arity$1 ? input_checker21527_21537.cljs$core$IFn$_invoke$arity$1(G__21532) : input_checker21527_21537.call(null,G__21532));
})();
if(cljs.core.truth_(temp__4126__auto___21540)){
var error__10782__auto___21541 = temp__4126__auto___21540;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21541], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21541,cljs.core.constant$keyword$21,args__10781__auto___21539,cljs.core.constant$keyword$22,input_schema21526_21536,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

var o__10783__auto__ = (function (){var input_schema = G__21529;
while(true){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (validate__10780__auto__,ufv___21534,output_schema21525_21535,input_schema21526_21536,input_checker21527_21537,output_checker21528_21538){
return (function (k){
if(schema.core.required_key_QMARK_(k)){
return schema.core.explicit_schema_key(k);
} else {
return null;
}
});})(validate__10780__auto__,ufv___21534,output_schema21525_21535,input_schema21526_21536,input_checker21527_21537,output_checker21528_21538))
,cljs.core.keys(input_schema));
break;
}
})();
if(cljs.core.truth_(validate__10780__auto__)){
var temp__4126__auto___21542 = (function (){var G__21533 = o__10783__auto__;
return (output_checker21528_21538.cljs$core$IFn$_invoke$arity$1 ? output_checker21528_21538.cljs$core$IFn$_invoke$arity$1(G__21533) : output_checker21528_21538.call(null,G__21533));
})();
if(cljs.core.truth_(temp__4126__auto___21542)){
var error__10782__auto___21543 = temp__4126__auto___21542;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21543], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21543,cljs.core.constant$keyword$21,o__10783__auto__,cljs.core.constant$keyword$22,output_schema21525_21535,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

return o__10783__auto__;
});})(ufv___21534,output_schema21525_21535,input_schema21526_21536,input_checker21527_21537,output_checker21528_21538))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema(output_schema21525_21535,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21526_21536], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_(expr)) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,cljs.core.keys(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4571__auto__ = (function iter__21558(s__21559){
return (new cljs.core.LazySeq(null,(function (){
var s__21559__$1 = s__21559;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__21559__$1);
if(temp__4126__auto__){
var s__21559__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21559__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__21559__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__21561 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__21560 = (0);
while(true){
if((i__21560 < size__4570__auto__)){
var vec__21566 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__21560);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21566,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21566,(1),null);
cljs.core.chunk_append(b__21561,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null));

var G__21568 = (i__21560 + (1));
i__21560 = G__21568;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21561),iter__21558(cljs.core.chunk_rest(s__21559__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21561),null);
}
} else {
var vec__21567 = cljs.core.first(s__21559__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21567,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21567,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null),iter__21558(cljs.core.rest(s__21559__$2)));
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
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4571__auto__ = (function iter__21587(s__21588){
return (new cljs.core.LazySeq(null,(function (){
var s__21588__$1 = s__21588;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__21588__$1);
if(temp__4126__auto__){
var s__21588__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21588__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__21588__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__21590 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__21589 = (0);
while(true){
if((i__21589 < size__4570__auto__)){
var vec__21595 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__21589);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21595,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21595,(1),null);
if(schema.core.specific_key_QMARK_(k)){
var required_QMARK_ = schema.core.required_key_QMARK_(k);
var raw_k = schema.core.explicit_schema_key(k);
var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append(b__21590,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__21597 = (i__21589 + (1));
i__21589 = G__21597;
continue;
} else {
var G__21598 = (i__21589 + (1));
i__21589 = G__21598;
continue;
}
} else {
var G__21599 = (i__21589 + (1));
i__21589 = G__21599;
continue;
}
} else {
var G__21600 = (i__21589 + (1));
i__21589 = G__21600;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21590),iter__21587(cljs.core.chunk_rest(s__21588__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21590),null);
}
} else {
var vec__21596 = cljs.core.first(s__21588__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21596,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21596,(1),null);
if(schema.core.specific_key_QMARK_(k)){
var required_QMARK_ = schema.core.required_key_QMARK_(k);
var raw_k = schema.core.explicit_schema_key(k);
var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__21587(cljs.core.rest(s__21588__$2)));
} else {
var G__21601 = cljs.core.rest(s__21588__$2);
s__21588__$1 = G__21601;
continue;
}
} else {
var G__21602 = cljs.core.rest(s__21588__$2);
s__21588__$1 = G__21602;
continue;
}
} else {
var G__21603 = cljs.core.rest(s__21588__$2);
s__21588__$1 = G__21603;
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
var ufv___21630 = schema.utils.use_fn_validation;
var output_schema21604_21631 = schema.core.Any;
var input_schema21605_21632 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker21606_21633 = schema.core.checker(input_schema21605_21632);
var output_checker21607_21634 = schema.core.checker(output_schema21604_21631);
/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___21630,output_schema21604_21631,input_schema21605_21632,input_checker21606_21633,output_checker21607_21634){
return (function compose_schemata(G__21608,G__21609){
var validate__10780__auto__ = true;
if(validate__10780__auto__){
var args__10781__auto___21635 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21608,G__21609], null);
var temp__4126__auto___21636 = (function (){var G__21620 = args__10781__auto___21635;
return (input_checker21606_21633.cljs$core$IFn$_invoke$arity$1 ? input_checker21606_21633.cljs$core$IFn$_invoke$arity$1(G__21620) : input_checker21606_21633.call(null,G__21620));
})();
if(cljs.core.truth_(temp__4126__auto___21636)){
var error__10782__auto___21637 = temp__4126__auto___21636;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21637], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21637,cljs.core.constant$keyword$21,args__10781__auto___21635,cljs.core.constant$keyword$22,input_schema21605_21632,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

var o__10783__auto__ = (function (){var G__21623 = G__21608;
var vec__21625 = G__21623;
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21625,(0),null);
var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21625,(1),null);
var G__21624 = G__21609;
var vec__21626 = G__21624;
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21626,(0),null);
var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21626,(1),null);
var G__21623__$1 = G__21623;
var G__21624__$1 = G__21624;
while(true){
var vec__21627 = G__21623__$1;
var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21627,(0),null);
var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21627,(1),null);
var vec__21628 = G__21624__$1;
var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21628,(0),null);
var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21628,(1),null);
plumbing.fnk.schema.assert_satisfies_schema(cljs.core.select_keys(i2__$1,cljs.core.keys(o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,i2__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(o1__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.optional_key,cljs.core.keys(o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__10780__auto__){
var temp__4126__auto___21638 = (function (){var G__21629 = o__10783__auto__;
return (output_checker21607_21634.cljs$core$IFn$_invoke$arity$1 ? output_checker21607_21634.cljs$core$IFn$_invoke$arity$1(G__21629) : output_checker21607_21634.call(null,G__21629));
})();
if(cljs.core.truth_(temp__4126__auto___21638)){
var error__10782__auto___21639 = temp__4126__auto___21638;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21639], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21639,cljs.core.constant$keyword$21,o__10783__auto__,cljs.core.constant$keyword$22,output_schema21604_21631,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

return o__10783__auto__;
});})(ufv___21630,output_schema21604_21631,input_schema21605_21632,input_checker21606_21633,output_checker21607_21634))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema(output_schema21604_21631,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21605_21632], null)));
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
var ufv___21742 = schema.utils.use_fn_validation;
var output_schema21640_21743 = schema.core.Any;
var input_schema21641_21744 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);
var input_checker21642_21745 = schema.core.checker(input_schema21641_21744);
var output_checker21643_21746 = schema.core.checker(output_schema21640_21743);
/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___21742,output_schema21640_21743,input_schema21641_21744,input_checker21642_21745,output_checker21643_21746){
return (function split_schema(G__21644,G__21645){
var validate__10780__auto__ = ufv___21742.get_cell();
if(cljs.core.truth_(validate__10780__auto__)){
var args__10781__auto___21747 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21644,G__21645], null);
var temp__4126__auto___21748 = (function (){var G__21694 = args__10781__auto___21747;
return (input_checker21642_21745.cljs$core$IFn$_invoke$arity$1 ? input_checker21642_21745.cljs$core$IFn$_invoke$arity$1(G__21694) : input_checker21642_21745.call(null,G__21694));
})();
if(cljs.core.truth_(temp__4126__auto___21748)){
var error__10782__auto___21749 = temp__4126__auto___21748;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21749], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21749,cljs.core.constant$keyword$21,args__10781__auto___21747,cljs.core.constant$keyword$22,input_schema21641_21744,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

var o__10783__auto__ = (function (){var s = G__21644;
var ks = G__21645;
while(true){
var ks__$1 = cljs.core.set(ks);
var iter__4571__auto__ = ((function (ks__$1,validate__10780__auto__,ufv___21742,output_schema21640_21743,input_schema21641_21744,input_checker21642_21745,output_checker21643_21746){
return (function iter__21695(s__21696){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__10780__auto__,ufv___21742,output_schema21640_21743,input_schema21641_21744,input_checker21642_21745,output_checker21643_21746){
return (function (){
var s__21696__$1 = s__21696;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__21696__$1);
if(temp__4126__auto__){
var s__21696__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21696__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__21696__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__21698 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__21697 = (0);
while(true){
if((i__21697 < size__4570__auto__)){
var in_QMARK_ = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__21697);
cljs.core.chunk_append(b__21698,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4571__auto__ = ((function (i__21697,in_QMARK_,c__4569__auto__,size__4570__auto__,b__21698,s__21696__$2,temp__4126__auto__,ks__$1,validate__10780__auto__,ufv___21742,output_schema21640_21743,input_schema21641_21744,input_checker21642_21745,output_checker21643_21746){
return (function iter__21721(s__21722){
return (new cljs.core.LazySeq(null,((function (i__21697,in_QMARK_,c__4569__auto__,size__4570__auto__,b__21698,s__21696__$2,temp__4126__auto__,ks__$1,validate__10780__auto__,ufv___21742,output_schema21640_21743,input_schema21641_21744,input_checker21642_21745,output_checker21643_21746){
return (function (){
var s__21722__$1 = s__21722;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__21722__$1);
if(temp__4126__auto____$1){
var s__21722__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21722__$2)){
var c__4569__auto____$1 = cljs.core.chunk_first(s__21722__$2);
var size__4570__auto____$1 = cljs.core.count(c__4569__auto____$1);
var b__21724 = cljs.core.chunk_buffer(size__4570__auto____$1);
if((function (){var i__21723 = (0);
while(true){
if((i__21723 < size__4570__auto____$1)){
var vec__21729 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto____$1,i__21723);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21729,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21729,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
cljs.core.chunk_append(b__21724,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__21750 = (i__21723 + (1));
i__21723 = G__21750;
continue;
} else {
var G__21751 = (i__21723 + (1));
i__21723 = G__21751;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21724),iter__21721(cljs.core.chunk_rest(s__21722__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21724),null);
}
} else {
var vec__21730 = cljs.core.first(s__21722__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21730,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21730,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__21721(cljs.core.rest(s__21722__$2)));
} else {
var G__21752 = cljs.core.rest(s__21722__$2);
s__21722__$1 = G__21752;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__21697,in_QMARK_,c__4569__auto__,size__4570__auto__,b__21698,s__21696__$2,temp__4126__auto__,ks__$1,validate__10780__auto__,ufv___21742,output_schema21640_21743,input_schema21641_21744,input_checker21642_21745,output_checker21643_21746))
,null,null));
});})(i__21697,in_QMARK_,c__4569__auto__,size__4570__auto__,b__21698,s__21696__$2,temp__4126__auto__,ks__$1,validate__10780__auto__,ufv___21742,output_schema21640_21743,input_schema21641_21744,input_checker21642_21745,output_checker21643_21746))
;
return iter__4571__auto__(s);
})()));

var G__21753 = (i__21697 + (1));
i__21697 = G__21753;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21698),iter__21695(cljs.core.chunk_rest(s__21696__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21698),null);
}
} else {
var in_QMARK_ = cljs.core.first(s__21696__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4571__auto__ = ((function (in_QMARK_,s__21696__$2,temp__4126__auto__,ks__$1,validate__10780__auto__,ufv___21742,output_schema21640_21743,input_schema21641_21744,input_checker21642_21745,output_checker21643_21746){
return (function iter__21731(s__21732){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__21696__$2,temp__4126__auto__,ks__$1,validate__10780__auto__,ufv___21742,output_schema21640_21743,input_schema21641_21744,input_checker21642_21745,output_checker21643_21746){
return (function (){
var s__21732__$1 = s__21732;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__21732__$1);
if(temp__4126__auto____$1){
var s__21732__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21732__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__21732__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__21734 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__21733 = (0);
while(true){
if((i__21733 < size__4570__auto__)){
var vec__21739 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__21733);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21739,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21739,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
cljs.core.chunk_append(b__21734,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__21754 = (i__21733 + (1));
i__21733 = G__21754;
continue;
} else {
var G__21755 = (i__21733 + (1));
i__21733 = G__21755;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21734),iter__21731(cljs.core.chunk_rest(s__21732__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21734),null);
}
} else {
var vec__21740 = cljs.core.first(s__21732__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21740,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21740,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__21731(cljs.core.rest(s__21732__$2)));
} else {
var G__21756 = cljs.core.rest(s__21732__$2);
s__21732__$1 = G__21756;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__21696__$2,temp__4126__auto__,ks__$1,validate__10780__auto__,ufv___21742,output_schema21640_21743,input_schema21641_21744,input_checker21642_21745,output_checker21643_21746))
,null,null));
});})(in_QMARK_,s__21696__$2,temp__4126__auto__,ks__$1,validate__10780__auto__,ufv___21742,output_schema21640_21743,input_schema21641_21744,input_checker21642_21745,output_checker21643_21746))
;
return iter__4571__auto__(s);
})()),iter__21695(cljs.core.rest(s__21696__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__10780__auto__,ufv___21742,output_schema21640_21743,input_schema21641_21744,input_checker21642_21745,output_checker21643_21746))
,null,null));
});})(ks__$1,validate__10780__auto__,ufv___21742,output_schema21640_21743,input_schema21641_21744,input_checker21642_21745,output_checker21643_21746))
;
return iter__4571__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__10780__auto__)){
var temp__4126__auto___21757 = (function (){var G__21741 = o__10783__auto__;
return (output_checker21643_21746.cljs$core$IFn$_invoke$arity$1 ? output_checker21643_21746.cljs$core$IFn$_invoke$arity$1(G__21741) : output_checker21643_21746.call(null,G__21741));
})();
if(cljs.core.truth_(temp__4126__auto___21757)){
var error__10782__auto___21758 = temp__4126__auto___21757;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21758], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21758,cljs.core.constant$keyword$21,o__10783__auto__,cljs.core.constant$keyword$22,output_schema21640_21743,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

return o__10783__auto__;
});})(ufv___21742,output_schema21640_21743,input_schema21641_21744,input_checker21642_21745,output_checker21643_21746))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema),schema.core.make_fn_schema(output_schema21640_21743,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21641_21744], null)));
var ufv___21793 = schema.utils.use_fn_validation;
var output_schema21759_21794 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema21760_21795 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Keyword,"key"),schema.core.one(plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker21761_21796 = schema.core.checker(input_schema21760_21795);
var output_checker21762_21797 = schema.core.checker(output_schema21759_21794);
/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___21793,output_schema21759_21794,input_schema21760_21795,input_checker21761_21796,output_checker21762_21797){
return (function sequence_schemata(G__21763,G__21764){
var validate__10780__auto__ = ufv___21793.get_cell();
if(cljs.core.truth_(validate__10780__auto__)){
var args__10781__auto___21798 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21763,G__21764], null);
var temp__4126__auto___21799 = (function (){var G__21779 = args__10781__auto___21798;
return (input_checker21761_21796.cljs$core$IFn$_invoke$arity$1 ? input_checker21761_21796.cljs$core$IFn$_invoke$arity$1(G__21779) : input_checker21761_21796.call(null,G__21779));
})();
if(cljs.core.truth_(temp__4126__auto___21799)){
var error__10782__auto___21800 = temp__4126__auto___21799;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21800], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21800,cljs.core.constant$keyword$21,args__10781__auto___21798,cljs.core.constant$keyword$22,input_schema21760_21795,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

var o__10783__auto__ = (function (){var G__21783 = G__21763;
var vec__21785 = G__21783;
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21785,(0),null);
var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21785,(1),null);
var G__21784 = G__21764;
var vec__21786 = G__21784;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21786,(0),null);
var vec__21787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21786,(1),null);
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21787,(0),null);
var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21787,(1),null);
var G__21783__$1 = G__21783;
var G__21784__$1 = G__21784;
while(true){
var vec__21788 = G__21783__$1;
var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21788,(0),null);
var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21788,(1),null);
var vec__21789 = G__21784__$1;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21789,(0),null);
var vec__21790 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21789,(1),null);
var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21790,(0),null);
var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21790,(1),null);
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

var vec__21791 = plumbing.fnk.schema.split_schema(i2__$1,cljs.core.keys(o1__$1));
var used = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21791,(0),null);
var unused = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21791,(1),null);
plumbing.fnk.schema.assert_satisfies_schema(used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(unused,i1__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__10780__auto__)){
var temp__4126__auto___21801 = (function (){var G__21792 = o__10783__auto__;
return (output_checker21762_21797.cljs$core$IFn$_invoke$arity$1 ? output_checker21762_21797.cljs$core$IFn$_invoke$arity$1(G__21792) : output_checker21762_21797.call(null,G__21792));
})();
if(cljs.core.truth_(temp__4126__auto___21801)){
var error__10782__auto___21802 = temp__4126__auto___21801;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21802], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21802,cljs.core.constant$keyword$21,o__10783__auto__,cljs.core.constant$keyword$22,output_schema21759_21794,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

return o__10783__auto__;
});})(ufv___21793,output_schema21759_21794,input_schema21760_21795,input_checker21761_21796,output_checker21762_21797))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema(output_schema21759_21794,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21760_21795], null)));

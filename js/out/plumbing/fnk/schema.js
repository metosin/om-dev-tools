// Compiled by ClojureScript 0.0-2850 {}
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta(schema.core.__GT_Protocol(schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$32,new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),cljs.core.constant$keyword$34,(function (p1__10810__10811__auto__){
var G__21415 = p1__10810__10811__auto__;
if(G__21415){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__21415.schema$core$Schema$;
}
})())){
return true;
} else {
if((!G__21415.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__21415);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__21415);
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
var repeated_things = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__21416_SHARP_){
return (cljs.core.val(p1__21416_SHARP_) > (1));
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

var vec__21418 = cljs.core.find(m,k);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21418,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21418,(1),null);
var p = vec__21418;
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
var ufv___21428 = schema.utils.use_fn_validation;
var output_schema21419_21429 = schema.core.maybe(schema.core.pair(schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema21420_21430 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);
var input_checker21421_21431 = schema.core.checker(input_schema21420_21430);
var output_checker21422_21432 = schema.core.checker(output_schema21419_21429);
/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___21428,output_schema21419_21429,input_schema21420_21430,input_checker21421_21431,output_checker21422_21432){
return (function unwrap_schema_form_key(G__21423){
var validate__10780__auto__ = ufv___21428.get_cell();
if(cljs.core.truth_(validate__10780__auto__)){
var args__10781__auto___21433 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21423], null);
var temp__4126__auto___21434 = (function (){var G__21426 = args__10781__auto___21433;
return (input_checker21421_21431.cljs$core$IFn$_invoke$arity$1 ? input_checker21421_21431.cljs$core$IFn$_invoke$arity$1(G__21426) : input_checker21421_21431.call(null,G__21426));
})();
if(cljs.core.truth_(temp__4126__auto___21434)){
var error__10782__auto___21435 = temp__4126__auto___21434;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21435], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21435,cljs.core.constant$keyword$21,args__10781__auto___21433,cljs.core.constant$keyword$22,input_schema21420_21430,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

var o__10783__auto__ = (function (){var k = G__21423;
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
var temp__4126__auto___21436 = (function (){var G__21427 = o__10783__auto__;
return (output_checker21422_21432.cljs$core$IFn$_invoke$arity$1 ? output_checker21422_21432.cljs$core$IFn$_invoke$arity$1(G__21427) : output_checker21422_21432.call(null,G__21427));
})();
if(cljs.core.truth_(temp__4126__auto___21436)){
var error__10782__auto___21437 = temp__4126__auto___21436;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21437], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21437,cljs.core.constant$keyword$21,o__10783__auto__,cljs.core.constant$keyword$22,output_schema21419_21429,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

return o__10783__auto__;
});})(ufv___21428,output_schema21419_21429,input_schema21420_21430,input_checker21421_21431,output_checker21422_21432))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema(output_schema21419_21429,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21420_21430], null)));
var ufv___21447 = schema.utils.use_fn_validation;
var output_schema21438_21448 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema21439_21449 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker21440_21450 = schema.core.checker(input_schema21439_21449);
var output_checker21441_21451 = schema.core.checker(output_schema21438_21448);
/**
* Inputs: [s]
* Returns: {s/Keyword s/Bool}
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___21447,output_schema21438_21448,input_schema21439_21449,input_checker21440_21450,output_checker21441_21451){
return (function explicit_schema_key_map(G__21442){
var validate__10780__auto__ = ufv___21447.get_cell();
if(cljs.core.truth_(validate__10780__auto__)){
var args__10781__auto___21452 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21442], null);
var temp__4126__auto___21453 = (function (){var G__21445 = args__10781__auto___21452;
return (input_checker21440_21450.cljs$core$IFn$_invoke$arity$1 ? input_checker21440_21450.cljs$core$IFn$_invoke$arity$1(G__21445) : input_checker21440_21450.call(null,G__21445));
})();
if(cljs.core.truth_(temp__4126__auto___21453)){
var error__10782__auto___21454 = temp__4126__auto___21453;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21454], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21454,cljs.core.constant$keyword$21,args__10781__auto___21452,cljs.core.constant$keyword$22,input_schema21439_21449,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

var o__10783__auto__ = (function (){var s = G__21442;
while(true){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys(s)));
break;
}
})();
if(cljs.core.truth_(validate__10780__auto__)){
var temp__4126__auto___21455 = (function (){var G__21446 = o__10783__auto__;
return (output_checker21441_21451.cljs$core$IFn$_invoke$arity$1 ? output_checker21441_21451.cljs$core$IFn$_invoke$arity$1(G__21446) : output_checker21441_21451.call(null,G__21446));
})();
if(cljs.core.truth_(temp__4126__auto___21455)){
var error__10782__auto___21456 = temp__4126__auto___21455;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21456], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21456,cljs.core.constant$keyword$21,o__10783__auto__,cljs.core.constant$keyword$22,output_schema21438_21448,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

return o__10783__auto__;
});})(ufv___21447,output_schema21438_21448,input_schema21439_21449,input_checker21440_21450,output_checker21441_21451))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema(output_schema21438_21448,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21439_21449], null)));
var ufv___21466 = schema.utils.use_fn_validation;
var output_schema21457_21467 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
var input_schema21458_21468 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker21459_21469 = schema.core.checker(input_schema21458_21468);
var output_checker21460_21470 = schema.core.checker(output_schema21457_21467);
/**
* Inputs: [s :- {s/Keyword s/Bool}]
* Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___21466,output_schema21457_21467,input_schema21458_21468,input_checker21459_21469,output_checker21460_21470){
return (function split_schema_keys(G__21461){
var validate__10780__auto__ = ufv___21466.get_cell();
if(cljs.core.truth_(validate__10780__auto__)){
var args__10781__auto___21471 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21461], null);
var temp__4126__auto___21472 = (function (){var G__21464 = args__10781__auto___21471;
return (input_checker21459_21469.cljs$core$IFn$_invoke$arity$1 ? input_checker21459_21469.cljs$core$IFn$_invoke$arity$1(G__21464) : input_checker21459_21469.call(null,G__21464));
})();
if(cljs.core.truth_(temp__4126__auto___21472)){
var error__10782__auto___21473 = temp__4126__auto___21472;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21473], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21473,cljs.core.constant$keyword$21,args__10781__auto___21471,cljs.core.constant$keyword$22,input_schema21458_21468,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

var o__10783__auto__ = (function (){var s = G__21461;
while(true){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,cljs.core.key),cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__10780__auto__)){
var temp__4126__auto___21474 = (function (){var G__21465 = o__10783__auto__;
return (output_checker21460_21470.cljs$core$IFn$_invoke$arity$1 ? output_checker21460_21470.cljs$core$IFn$_invoke$arity$1(G__21465) : output_checker21460_21470.call(null,G__21465));
})();
if(cljs.core.truth_(temp__4126__auto___21474)){
var error__10782__auto___21475 = temp__4126__auto___21474;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21475], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21475,cljs.core.constant$keyword$21,o__10783__auto__,cljs.core.constant$keyword$22,output_schema21457_21467,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

return o__10783__auto__;
});})(ufv___21466,output_schema21457_21467,input_schema21458_21468,input_checker21459_21469,output_checker21460_21470))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema(output_schema21457_21467,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21458_21468], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__21484){
var vec__21485 = p__21484;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21485,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21485,(1),null);
var pk = (function (){var G__21486 = k;
return (key_project.cljs$core$IFn$_invoke$arity$1 ? key_project.cljs$core$IFn$_invoke$arity$1(G__21486) : key_project.call(null,G__21486));
})();
var temp__4124__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,pk);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__21487 = temp__4124__auto__;
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21487,(0),null);
var ov = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21487,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__21488 = ok;
var G__21489 = k;
return (key_combine.cljs$core$IFn$_invoke$arity$2 ? key_combine.cljs$core$IFn$_invoke$arity$2(G__21488,G__21489) : key_combine.call(null,G__21488,G__21489));
})(),(function (){var G__21490 = ov;
var G__21491 = v;
return (val_combine.cljs$core$IFn$_invoke$arity$2 ? val_combine.cljs$core$IFn$_invoke$arity$2(G__21490,G__21491) : val_combine.call(null,G__21490,G__21491));
})()], null));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,maps))));
};
var merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;
if (arguments.length > 3) {
var G__21492__i = 0, G__21492__a = new Array(arguments.length -  3);
while (G__21492__i < G__21492__a.length) {G__21492__a[G__21492__i] = arguments[G__21492__i + 3]; ++G__21492__i;}
  maps = new cljs.core.IndexedSeq(G__21492__a,0);
} 
return merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
merge_on_with.cljs$lang$maxFixedArity = 3;
merge_on_with.cljs$lang$applyTo = (function (arglist__21493){
var key_project = cljs.core.first(arglist__21493);
arglist__21493 = cljs.core.next(arglist__21493);
var key_combine = cljs.core.first(arglist__21493);
arglist__21493 = cljs.core.next(arglist__21493);
var val_combine = cljs.core.first(arglist__21493);
var maps = cljs.core.rest(arglist__21493);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___21507 = schema.utils.use_fn_validation;
var output_schema21495_21508 = plumbing.fnk.schema.InputSchema;
var input_schema21496_21509 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);
var input_checker21497_21510 = schema.core.checker(input_schema21496_21509);
var output_checker21498_21511 = schema.core.checker(output_schema21495_21508);
/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___21507,output_schema21495_21508,input_schema21496_21509,input_checker21497_21510,output_checker21498_21511){
return (function union_input_schemata(G__21499,G__21500){
var validate__10780__auto__ = ufv___21507.get_cell();
if(cljs.core.truth_(validate__10780__auto__)){
var args__10781__auto___21512 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21499,G__21500], null);
var temp__4126__auto___21513 = (function (){var G__21505 = args__10781__auto___21512;
return (input_checker21497_21510.cljs$core$IFn$_invoke$arity$1 ? input_checker21497_21510.cljs$core$IFn$_invoke$arity$1(G__21505) : input_checker21497_21510.call(null,G__21505));
})();
if(cljs.core.truth_(temp__4126__auto___21513)){
var error__10782__auto___21514 = temp__4126__auto___21513;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21514], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21514,cljs.core.constant$keyword$21,args__10781__auto___21512,cljs.core.constant$keyword$22,input_schema21496_21509,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

var o__10783__auto__ = (function (){var i1 = G__21499;
var i2 = G__21500;
while(true){
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(((function (validate__10780__auto__,ufv___21507,output_schema21495_21508,input_schema21496_21509,input_checker21497_21510,output_checker21498_21511){
return (function (p1__21494_SHARP_){
if(schema.core.specific_key_QMARK_(p1__21494_SHARP_)){
return schema.core.explicit_schema_key(p1__21494_SHARP_);
} else {
return cljs.core.constant$keyword$50;
}
});})(validate__10780__auto__,ufv___21507,output_schema21495_21508,input_schema21496_21509,input_checker21497_21510,output_checker21498_21511))
,((function (validate__10780__auto__,ufv___21507,output_schema21495_21508,input_schema21496_21509,input_checker21497_21510,output_checker21498_21511){
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
});})(validate__10780__auto__,ufv___21507,output_schema21495_21508,input_schema21496_21509,input_checker21497_21510,output_checker21498_21511))
,((function (validate__10780__auto__,ufv___21507,output_schema21495_21508,input_schema21496_21509,input_checker21497_21510,output_checker21498_21511){
return (function (s1,s2){
if((plumbing.fnk.schema.map_schema_QMARK_(s1)) && (plumbing.fnk.schema.map_schema_QMARK_(s2))){
return union_input_schemata(s1,s2);
} else {
return plumbing.fnk.schema.non_map_union(s1,s2);
}
});})(validate__10780__auto__,ufv___21507,output_schema21495_21508,input_schema21496_21509,input_checker21497_21510,output_checker21498_21511))
,cljs.core.array_seq([i1,i2], 0));
break;
}
})();
if(cljs.core.truth_(validate__10780__auto__)){
var temp__4126__auto___21515 = (function (){var G__21506 = o__10783__auto__;
return (output_checker21498_21511.cljs$core$IFn$_invoke$arity$1 ? output_checker21498_21511.cljs$core$IFn$_invoke$arity$1(G__21506) : output_checker21498_21511.call(null,G__21506));
})();
if(cljs.core.truth_(temp__4126__auto___21515)){
var error__10782__auto___21516 = temp__4126__auto___21515;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21516], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21516,cljs.core.constant$keyword$21,o__10783__auto__,cljs.core.constant$keyword$22,output_schema21495_21508,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

return o__10783__auto__;
});})(ufv___21507,output_schema21495_21508,input_schema21496_21509,input_checker21497_21510,output_checker21498_21511))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema(output_schema21495_21508,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21496_21509], null)));
var ufv___21526 = schema.utils.use_fn_validation;
var output_schema21517_21527 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema21518_21528 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);
var input_checker21519_21529 = schema.core.checker(input_schema21518_21528);
var output_checker21520_21530 = schema.core.checker(output_schema21517_21527);
/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___21526,output_schema21517_21527,input_schema21518_21528,input_checker21519_21529,output_checker21520_21530){
return (function required_toplevel_keys(G__21521){
var validate__10780__auto__ = ufv___21526.get_cell();
if(cljs.core.truth_(validate__10780__auto__)){
var args__10781__auto___21531 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21521], null);
var temp__4126__auto___21532 = (function (){var G__21524 = args__10781__auto___21531;
return (input_checker21519_21529.cljs$core$IFn$_invoke$arity$1 ? input_checker21519_21529.cljs$core$IFn$_invoke$arity$1(G__21524) : input_checker21519_21529.call(null,G__21524));
})();
if(cljs.core.truth_(temp__4126__auto___21532)){
var error__10782__auto___21533 = temp__4126__auto___21532;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21533], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21533,cljs.core.constant$keyword$21,args__10781__auto___21531,cljs.core.constant$keyword$22,input_schema21518_21528,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

var o__10783__auto__ = (function (){var input_schema = G__21521;
while(true){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (validate__10780__auto__,ufv___21526,output_schema21517_21527,input_schema21518_21528,input_checker21519_21529,output_checker21520_21530){
return (function (k){
if(schema.core.required_key_QMARK_(k)){
return schema.core.explicit_schema_key(k);
} else {
return null;
}
});})(validate__10780__auto__,ufv___21526,output_schema21517_21527,input_schema21518_21528,input_checker21519_21529,output_checker21520_21530))
,cljs.core.keys(input_schema));
break;
}
})();
if(cljs.core.truth_(validate__10780__auto__)){
var temp__4126__auto___21534 = (function (){var G__21525 = o__10783__auto__;
return (output_checker21520_21530.cljs$core$IFn$_invoke$arity$1 ? output_checker21520_21530.cljs$core$IFn$_invoke$arity$1(G__21525) : output_checker21520_21530.call(null,G__21525));
})();
if(cljs.core.truth_(temp__4126__auto___21534)){
var error__10782__auto___21535 = temp__4126__auto___21534;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21535], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21535,cljs.core.constant$keyword$21,o__10783__auto__,cljs.core.constant$keyword$22,output_schema21517_21527,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

return o__10783__auto__;
});})(ufv___21526,output_schema21517_21527,input_schema21518_21528,input_checker21519_21529,output_checker21520_21530))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema(output_schema21517_21527,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21518_21528], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_(expr)) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,cljs.core.keys(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4571__auto__ = (function iter__21550(s__21551){
return (new cljs.core.LazySeq(null,(function (){
var s__21551__$1 = s__21551;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__21551__$1);
if(temp__4126__auto__){
var s__21551__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21551__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__21551__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__21553 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__21552 = (0);
while(true){
if((i__21552 < size__4570__auto__)){
var vec__21558 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__21552);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21558,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21558,(1),null);
cljs.core.chunk_append(b__21553,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null));

var G__21560 = (i__21552 + (1));
i__21552 = G__21560;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21553),iter__21550(cljs.core.chunk_rest(s__21551__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21553),null);
}
} else {
var vec__21559 = cljs.core.first(s__21551__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21559,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21559,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null),iter__21550(cljs.core.rest(s__21551__$2)));
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
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4571__auto__ = (function iter__21579(s__21580){
return (new cljs.core.LazySeq(null,(function (){
var s__21580__$1 = s__21580;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__21580__$1);
if(temp__4126__auto__){
var s__21580__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21580__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__21580__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__21582 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__21581 = (0);
while(true){
if((i__21581 < size__4570__auto__)){
var vec__21587 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__21581);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21587,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21587,(1),null);
if(schema.core.specific_key_QMARK_(k)){
var required_QMARK_ = schema.core.required_key_QMARK_(k);
var raw_k = schema.core.explicit_schema_key(k);
var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append(b__21582,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__21589 = (i__21581 + (1));
i__21581 = G__21589;
continue;
} else {
var G__21590 = (i__21581 + (1));
i__21581 = G__21590;
continue;
}
} else {
var G__21591 = (i__21581 + (1));
i__21581 = G__21591;
continue;
}
} else {
var G__21592 = (i__21581 + (1));
i__21581 = G__21592;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21582),iter__21579(cljs.core.chunk_rest(s__21580__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21582),null);
}
} else {
var vec__21588 = cljs.core.first(s__21580__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21588,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21588,(1),null);
if(schema.core.specific_key_QMARK_(k)){
var required_QMARK_ = schema.core.required_key_QMARK_(k);
var raw_k = schema.core.explicit_schema_key(k);
var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__21579(cljs.core.rest(s__21580__$2)));
} else {
var G__21593 = cljs.core.rest(s__21580__$2);
s__21580__$1 = G__21593;
continue;
}
} else {
var G__21594 = cljs.core.rest(s__21580__$2);
s__21580__$1 = G__21594;
continue;
}
} else {
var G__21595 = cljs.core.rest(s__21580__$2);
s__21580__$1 = G__21595;
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
var ufv___21622 = schema.utils.use_fn_validation;
var output_schema21596_21623 = schema.core.Any;
var input_schema21597_21624 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker21598_21625 = schema.core.checker(input_schema21597_21624);
var output_checker21599_21626 = schema.core.checker(output_schema21596_21623);
/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___21622,output_schema21596_21623,input_schema21597_21624,input_checker21598_21625,output_checker21599_21626){
return (function compose_schemata(G__21600,G__21601){
var validate__10780__auto__ = true;
if(validate__10780__auto__){
var args__10781__auto___21627 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21600,G__21601], null);
var temp__4126__auto___21628 = (function (){var G__21612 = args__10781__auto___21627;
return (input_checker21598_21625.cljs$core$IFn$_invoke$arity$1 ? input_checker21598_21625.cljs$core$IFn$_invoke$arity$1(G__21612) : input_checker21598_21625.call(null,G__21612));
})();
if(cljs.core.truth_(temp__4126__auto___21628)){
var error__10782__auto___21629 = temp__4126__auto___21628;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21629], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21629,cljs.core.constant$keyword$21,args__10781__auto___21627,cljs.core.constant$keyword$22,input_schema21597_21624,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

var o__10783__auto__ = (function (){var G__21615 = G__21600;
var vec__21617 = G__21615;
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21617,(0),null);
var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21617,(1),null);
var G__21616 = G__21601;
var vec__21618 = G__21616;
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21618,(0),null);
var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21618,(1),null);
var G__21615__$1 = G__21615;
var G__21616__$1 = G__21616;
while(true){
var vec__21619 = G__21615__$1;
var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21619,(0),null);
var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21619,(1),null);
var vec__21620 = G__21616__$1;
var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21620,(0),null);
var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21620,(1),null);
plumbing.fnk.schema.assert_satisfies_schema(cljs.core.select_keys(i2__$1,cljs.core.keys(o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,i2__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(o1__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.optional_key,cljs.core.keys(o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__10780__auto__){
var temp__4126__auto___21630 = (function (){var G__21621 = o__10783__auto__;
return (output_checker21599_21626.cljs$core$IFn$_invoke$arity$1 ? output_checker21599_21626.cljs$core$IFn$_invoke$arity$1(G__21621) : output_checker21599_21626.call(null,G__21621));
})();
if(cljs.core.truth_(temp__4126__auto___21630)){
var error__10782__auto___21631 = temp__4126__auto___21630;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21631], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21631,cljs.core.constant$keyword$21,o__10783__auto__,cljs.core.constant$keyword$22,output_schema21596_21623,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

return o__10783__auto__;
});})(ufv___21622,output_schema21596_21623,input_schema21597_21624,input_checker21598_21625,output_checker21599_21626))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema(output_schema21596_21623,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21597_21624], null)));
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
var ufv___21734 = schema.utils.use_fn_validation;
var output_schema21632_21735 = schema.core.Any;
var input_schema21633_21736 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);
var input_checker21634_21737 = schema.core.checker(input_schema21633_21736);
var output_checker21635_21738 = schema.core.checker(output_schema21632_21735);
/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___21734,output_schema21632_21735,input_schema21633_21736,input_checker21634_21737,output_checker21635_21738){
return (function split_schema(G__21636,G__21637){
var validate__10780__auto__ = ufv___21734.get_cell();
if(cljs.core.truth_(validate__10780__auto__)){
var args__10781__auto___21739 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21636,G__21637], null);
var temp__4126__auto___21740 = (function (){var G__21686 = args__10781__auto___21739;
return (input_checker21634_21737.cljs$core$IFn$_invoke$arity$1 ? input_checker21634_21737.cljs$core$IFn$_invoke$arity$1(G__21686) : input_checker21634_21737.call(null,G__21686));
})();
if(cljs.core.truth_(temp__4126__auto___21740)){
var error__10782__auto___21741 = temp__4126__auto___21740;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21741], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21741,cljs.core.constant$keyword$21,args__10781__auto___21739,cljs.core.constant$keyword$22,input_schema21633_21736,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

var o__10783__auto__ = (function (){var s = G__21636;
var ks = G__21637;
while(true){
var ks__$1 = cljs.core.set(ks);
var iter__4571__auto__ = ((function (ks__$1,validate__10780__auto__,ufv___21734,output_schema21632_21735,input_schema21633_21736,input_checker21634_21737,output_checker21635_21738){
return (function iter__21687(s__21688){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__10780__auto__,ufv___21734,output_schema21632_21735,input_schema21633_21736,input_checker21634_21737,output_checker21635_21738){
return (function (){
var s__21688__$1 = s__21688;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__21688__$1);
if(temp__4126__auto__){
var s__21688__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21688__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__21688__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__21690 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__21689 = (0);
while(true){
if((i__21689 < size__4570__auto__)){
var in_QMARK_ = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__21689);
cljs.core.chunk_append(b__21690,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4571__auto__ = ((function (i__21689,in_QMARK_,c__4569__auto__,size__4570__auto__,b__21690,s__21688__$2,temp__4126__auto__,ks__$1,validate__10780__auto__,ufv___21734,output_schema21632_21735,input_schema21633_21736,input_checker21634_21737,output_checker21635_21738){
return (function iter__21713(s__21714){
return (new cljs.core.LazySeq(null,((function (i__21689,in_QMARK_,c__4569__auto__,size__4570__auto__,b__21690,s__21688__$2,temp__4126__auto__,ks__$1,validate__10780__auto__,ufv___21734,output_schema21632_21735,input_schema21633_21736,input_checker21634_21737,output_checker21635_21738){
return (function (){
var s__21714__$1 = s__21714;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__21714__$1);
if(temp__4126__auto____$1){
var s__21714__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21714__$2)){
var c__4569__auto____$1 = cljs.core.chunk_first(s__21714__$2);
var size__4570__auto____$1 = cljs.core.count(c__4569__auto____$1);
var b__21716 = cljs.core.chunk_buffer(size__4570__auto____$1);
if((function (){var i__21715 = (0);
while(true){
if((i__21715 < size__4570__auto____$1)){
var vec__21721 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto____$1,i__21715);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21721,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21721,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
cljs.core.chunk_append(b__21716,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__21742 = (i__21715 + (1));
i__21715 = G__21742;
continue;
} else {
var G__21743 = (i__21715 + (1));
i__21715 = G__21743;
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
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__21713(cljs.core.rest(s__21714__$2)));
} else {
var G__21744 = cljs.core.rest(s__21714__$2);
s__21714__$1 = G__21744;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__21689,in_QMARK_,c__4569__auto__,size__4570__auto__,b__21690,s__21688__$2,temp__4126__auto__,ks__$1,validate__10780__auto__,ufv___21734,output_schema21632_21735,input_schema21633_21736,input_checker21634_21737,output_checker21635_21738))
,null,null));
});})(i__21689,in_QMARK_,c__4569__auto__,size__4570__auto__,b__21690,s__21688__$2,temp__4126__auto__,ks__$1,validate__10780__auto__,ufv___21734,output_schema21632_21735,input_schema21633_21736,input_checker21634_21737,output_checker21635_21738))
;
return iter__4571__auto__(s);
})()));

var G__21745 = (i__21689 + (1));
i__21689 = G__21745;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21690),iter__21687(cljs.core.chunk_rest(s__21688__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21690),null);
}
} else {
var in_QMARK_ = cljs.core.first(s__21688__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4571__auto__ = ((function (in_QMARK_,s__21688__$2,temp__4126__auto__,ks__$1,validate__10780__auto__,ufv___21734,output_schema21632_21735,input_schema21633_21736,input_checker21634_21737,output_checker21635_21738){
return (function iter__21723(s__21724){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__21688__$2,temp__4126__auto__,ks__$1,validate__10780__auto__,ufv___21734,output_schema21632_21735,input_schema21633_21736,input_checker21634_21737,output_checker21635_21738){
return (function (){
var s__21724__$1 = s__21724;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__21724__$1);
if(temp__4126__auto____$1){
var s__21724__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21724__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__21724__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__21726 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__21725 = (0);
while(true){
if((i__21725 < size__4570__auto__)){
var vec__21731 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__21725);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21731,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21731,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
cljs.core.chunk_append(b__21726,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__21746 = (i__21725 + (1));
i__21725 = G__21746;
continue;
} else {
var G__21747 = (i__21725 + (1));
i__21725 = G__21747;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21726),iter__21723(cljs.core.chunk_rest(s__21724__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21726),null);
}
} else {
var vec__21732 = cljs.core.first(s__21724__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21732,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21732,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__21723(cljs.core.rest(s__21724__$2)));
} else {
var G__21748 = cljs.core.rest(s__21724__$2);
s__21724__$1 = G__21748;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__21688__$2,temp__4126__auto__,ks__$1,validate__10780__auto__,ufv___21734,output_schema21632_21735,input_schema21633_21736,input_checker21634_21737,output_checker21635_21738))
,null,null));
});})(in_QMARK_,s__21688__$2,temp__4126__auto__,ks__$1,validate__10780__auto__,ufv___21734,output_schema21632_21735,input_schema21633_21736,input_checker21634_21737,output_checker21635_21738))
;
return iter__4571__auto__(s);
})()),iter__21687(cljs.core.rest(s__21688__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__10780__auto__,ufv___21734,output_schema21632_21735,input_schema21633_21736,input_checker21634_21737,output_checker21635_21738))
,null,null));
});})(ks__$1,validate__10780__auto__,ufv___21734,output_schema21632_21735,input_schema21633_21736,input_checker21634_21737,output_checker21635_21738))
;
return iter__4571__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__10780__auto__)){
var temp__4126__auto___21749 = (function (){var G__21733 = o__10783__auto__;
return (output_checker21635_21738.cljs$core$IFn$_invoke$arity$1 ? output_checker21635_21738.cljs$core$IFn$_invoke$arity$1(G__21733) : output_checker21635_21738.call(null,G__21733));
})();
if(cljs.core.truth_(temp__4126__auto___21749)){
var error__10782__auto___21750 = temp__4126__auto___21749;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21750], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21750,cljs.core.constant$keyword$21,o__10783__auto__,cljs.core.constant$keyword$22,output_schema21632_21735,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

return o__10783__auto__;
});})(ufv___21734,output_schema21632_21735,input_schema21633_21736,input_checker21634_21737,output_checker21635_21738))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema),schema.core.make_fn_schema(output_schema21632_21735,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21633_21736], null)));
var ufv___21785 = schema.utils.use_fn_validation;
var output_schema21751_21786 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema21752_21787 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Keyword,"key"),schema.core.one(plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker21753_21788 = schema.core.checker(input_schema21752_21787);
var output_checker21754_21789 = schema.core.checker(output_schema21751_21786);
/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___21785,output_schema21751_21786,input_schema21752_21787,input_checker21753_21788,output_checker21754_21789){
return (function sequence_schemata(G__21755,G__21756){
var validate__10780__auto__ = ufv___21785.get_cell();
if(cljs.core.truth_(validate__10780__auto__)){
var args__10781__auto___21790 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21755,G__21756], null);
var temp__4126__auto___21791 = (function (){var G__21771 = args__10781__auto___21790;
return (input_checker21753_21788.cljs$core$IFn$_invoke$arity$1 ? input_checker21753_21788.cljs$core$IFn$_invoke$arity$1(G__21771) : input_checker21753_21788.call(null,G__21771));
})();
if(cljs.core.truth_(temp__4126__auto___21791)){
var error__10782__auto___21792 = temp__4126__auto___21791;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21792], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21792,cljs.core.constant$keyword$21,args__10781__auto___21790,cljs.core.constant$keyword$22,input_schema21752_21787,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

var o__10783__auto__ = (function (){var G__21775 = G__21755;
var vec__21777 = G__21775;
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21777,(0),null);
var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21777,(1),null);
var G__21776 = G__21756;
var vec__21778 = G__21776;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21778,(0),null);
var vec__21779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21778,(1),null);
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21779,(0),null);
var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21779,(1),null);
var G__21775__$1 = G__21775;
var G__21776__$1 = G__21776;
while(true){
var vec__21780 = G__21775__$1;
var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21780,(0),null);
var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21780,(1),null);
var vec__21781 = G__21776__$1;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21781,(0),null);
var vec__21782 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21781,(1),null);
var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21782,(0),null);
var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21782,(1),null);
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

var vec__21783 = plumbing.fnk.schema.split_schema(i2__$1,cljs.core.keys(o1__$1));
var used = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21783,(0),null);
var unused = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21783,(1),null);
plumbing.fnk.schema.assert_satisfies_schema(used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(unused,i1__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__10780__auto__)){
var temp__4126__auto___21793 = (function (){var G__21784 = o__10783__auto__;
return (output_checker21754_21789.cljs$core$IFn$_invoke$arity$1 ? output_checker21754_21789.cljs$core$IFn$_invoke$arity$1(G__21784) : output_checker21754_21789.call(null,G__21784));
})();
if(cljs.core.truth_(temp__4126__auto___21793)){
var error__10782__auto___21794 = temp__4126__auto___21793;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21794], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21794,cljs.core.constant$keyword$21,o__10783__auto__,cljs.core.constant$keyword$22,output_schema21751_21786,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

return o__10783__auto__;
});})(ufv___21785,output_schema21751_21786,input_schema21752_21787,input_checker21753_21788,output_checker21754_21789))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema(output_schema21751_21786,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21752_21787], null)));

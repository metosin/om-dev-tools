// Compiled by ClojureScript 0.0-2850 {}
goog.provide('schema.core');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('clojure.string');

schema.core.Schema = (function (){var obj21865 = {};
return obj21865;
})();

schema.core.walker = (function walker(this$){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.schema$core$Schema$walker$arity$1;
} else {
return and__3803__auto__;
}
})()){
return this$.schema$core$Schema$walker$arity$1(this$);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (schema.core.walker[(function (){var G__21869 = x__4459__auto__;
return goog.typeOf(G__21869);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (schema.core.walker["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("Schema.walker",this$);
}
}
})().call(null,this$);
}
});

schema.core.explain = (function explain(this$){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.schema$core$Schema$explain$arity$1;
} else {
return and__3803__auto__;
}
})()){
return this$.schema$core$Schema$explain$arity$1(this$);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (schema.core.explain[(function (){var G__21873 = x__4459__auto__;
return goog.typeOf(G__21873);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (schema.core.explain["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("Schema.explain",this$);
}
}
})().call(null,this$);
}
});

/**
* The function to call within 'walker' implementations to create walkers for subschemas.
* Can be dynamically bound (using start-walker below) to create different walking behaviors.
* 
* For the curious, implemented using dynamic binding rather than making walker take a
* subschema-walker as an argument because some behaviors (e.g. recursive schema walkers)
* seem to require mind-bending things like fixed-point combinators that way, but are
* simple this way.
*/
schema.core.subschema_walker = (function subschema_walker(s){
throw (new Error([cljs.core.str("Walking is unsupported outside of start-walker; "),cljs.core.str("all composite schemas must eagerly bind subschema-walkers "),cljs.core.str("outside the returned walker.")].join('')));
});
/**
* The entry point for creating walkers.  Binds the provided walker to subschema-walker,
* then calls it on the provided schema.  For simple validation, pass walker as sub-walker.
* More sophisticated behavior (coercion, etc), can be achieved by passing a sub-walker
* that wraps walker with additional behavior.
*/
schema.core.start_walker = (function start_walker(sub_walker,schema__$1){
var subschema_walker21875 = schema.core.subschema_walker;
schema.core.subschema_walker = sub_walker;

try{return (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(schema__$1) : schema.core.subschema_walker.call(null,schema__$1));
}finally {schema.core.subschema_walker = subschema_walker21875;
}});
/**
* Compile an efficient checker for schema, which returns nil for valid values and
* error descriptions otherwise.
*/
schema.core.checker = (function checker(schema__$1){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,schema.core.start_walker(schema.utils.memoize_id(schema.core.walker),schema__$1));
});
/**
* Return nil if x matches schema; otherwise, returns a value that looks like the
* 'bad' parts of x with ValidationErrors at the leaves describing the failures.
*/
schema.core.check = (function check(schema__$1,x){
return schema.core.checker(schema__$1).call(null,x);
});
/**
* Throw an exception if value does not satisfy schema; otherwise, return value.
*/
schema.core.validate = (function validate(schema__$1,value){
var temp__4126__auto___21876 = schema.core.check(schema__$1,value);
if(cljs.core.truth_(temp__4126__auto___21876)){
var error_21877 = temp__4126__auto___21876;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Value does not match schema: %s",cljs.core.array_seq([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error_21877], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error_21877,cljs.core.constant$keyword$21,value,cljs.core.constant$keyword$22,schema__$1,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}

return value;
});
(schema.core.Schema["function"] = true);

(schema.core.walker["function"] = (function (this$){
var class_walker = (function (){var temp__4124__auto__ = schema.utils.class_schema(this$);
if(cljs.core.truth_(temp__4124__auto__)){
var more_schema = temp__4124__auto__;
return (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(more_schema) : schema.core.subschema_walker.call(null,more_schema));
} else {
return cljs.core.identity;
}
})();
return ((function (class_walker){
return (function (x){
var or__3815__auto__ = ((((x == null)) || (cljs.core.not((function (){var or__3815__auto__ = (this$ === x.constructor);
if(or__3815__auto__){
return or__3815__auto__;
} else {
return x instanceof this$;
}
})())))?schema.utils.error(schema.utils.__GT_ValidationError(this$,x,(new cljs.core.Delay(((function (class_walker){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),this$),new cljs.core.Symbol(null,"instance?","instance?",1075939923,null));
});})(class_walker))
,null)),null)):null);
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
var G__21878 = x;
return (class_walker.cljs$core$IFn$_invoke$arity$1 ? class_walker.cljs$core$IFn$_invoke$arity$1(G__21878) : class_walker.call(null,G__21878));
}
});
;})(class_walker))
}));

(schema.core.explain["function"] = (function (this$){
var temp__4124__auto__ = schema.utils.class_schema(this$);
if(cljs.core.truth_(temp__4124__auto__)){
var more_schema = temp__4124__auto__;
return schema.core.explain(more_schema);
} else {
return this$;
}
}));

/**
* @constructor
* @param {*} _
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.AnythingSchema = (function (_,__meta,__extmap,__hash){
this._ = _;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4418__auto__,k__4419__auto__){
var self__ = this;
var this__4418__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4418__auto____$1,k__4419__auto__,null);
});

schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4420__auto__,k21880,else__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
var G__21882 = (((k21880 instanceof cljs.core.Keyword))?k21880.fqn:null);
switch (G__21882) {
case "_":
return self__._;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21880,else__4421__auto__);

}
});

schema.core.AnythingSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4432__auto__,writer__4433__auto__,opts__4434__auto__){
var self__ = this;
var this__4432__auto____$1 = this;
var pr_pair__4435__auto__ = ((function (this__4432__auto____$1){
return (function (keyval__4436__auto__){
return cljs.core.pr_sequential_writer(writer__4433__auto__,cljs.core.pr_writer,""," ","",opts__4434__auto__,keyval__4436__auto__);
});})(this__4432__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4433__auto__,pr_pair__4435__auto__,"#schema.core.AnythingSchema{",", ","}",opts__4434__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$25,self__._],null))], null),self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4416__auto__){
var self__ = this;
var this__4416__auto____$1 = this;
return self__.__meta;
});

schema.core.AnythingSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4412__auto__){
var self__ = this;
var this__4412__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.AnythingSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4422__auto__){
var self__ = this;
var this__4422__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
var h__4236__auto__ = self__.__hash;
if(!((h__4236__auto__ == null))){
return h__4236__auto__;
} else {
var h__4236__auto____$1 = cljs.core.hash_imap(this__4413__auto____$1);
self__.__hash = h__4236__auto____$1;

return h__4236__auto____$1;
}
});

schema.core.AnythingSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4414__auto__,other__4415__auto__){
var self__ = this;
var this__4414__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3803__auto__ = other__4415__auto__;
if(cljs.core.truth_(and__3803__auto__)){
return ((this__4414__auto____$1.constructor === other__4415__auto__.constructor)) && (cljs.core.equiv_map(this__4414__auto____$1,other__4415__auto__));
} else {
return and__3803__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.AnythingSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4427__auto__,k__4428__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$25,null], null), null),k__4428__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4427__auto____$1),self__.__meta),k__4428__auto__);
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4428__auto__)),null));
}
});

schema.core.AnythingSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4425__auto__,k__4426__auto__,G__21879){
var self__ = this;
var this__4425__auto____$1 = this;
var pred__21883 = cljs.core.keyword_identical_QMARK_;
var expr__21884 = k__4426__auto__;
if(cljs.core.truth_((function (){var G__21886 = cljs.core.constant$keyword$25;
var G__21887 = expr__21884;
return (pred__21883.cljs$core$IFn$_invoke$arity$2 ? pred__21883.cljs$core$IFn$_invoke$arity$2(G__21886,G__21887) : pred__21883.call(null,G__21886,G__21887));
})())){
return (new schema.core.AnythingSchema(G__21879,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4426__auto__,G__21879),null));
}
});

schema.core.AnythingSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4430__auto__){
var self__ = this;
var this__4430__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$25,self__._],null))], null),self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4417__auto__,G__21879){
var self__ = this;
var this__4417__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,G__21879,self__.__extmap,self__.__hash));
});

schema.core.AnythingSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4423__auto__,entry__4424__auto__){
var self__ = this;
var this__4423__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4424__auto__)){
return cljs.core._assoc(this__4423__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4424__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4424__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4423__auto____$1,entry__4424__auto__);
}
});

schema.core.AnythingSchema.prototype.schema$core$Schema$ = true;

schema.core.AnythingSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.identity;
});

schema.core.AnythingSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Symbol(null,"Any","Any",1277492269,null);
});

schema.core.AnythingSchema.cljs$lang$type = true;

schema.core.AnythingSchema.cljs$lang$ctorPrSeq = (function (this__4452__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/AnythingSchema");
});

schema.core.AnythingSchema.cljs$lang$ctorPrWriter = (function (this__4452__auto__,writer__4453__auto__){
return cljs.core._write(writer__4453__auto__,"schema.core/AnythingSchema");
});

schema.core.__GT_AnythingSchema = (function __GT_AnythingSchema(_){
return (new schema.core.AnythingSchema(_,null,null,null));
});

schema.core.map__GT_AnythingSchema = (function map__GT_AnythingSchema(G__21881){
return (new schema.core.AnythingSchema(cljs.core.constant$keyword$25.cljs$core$IFn$_invoke$arity$1(G__21881),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21881,cljs.core.constant$keyword$25),null));
});

/**
* Any value, including nil.
*/
schema.core.Any = (new schema.core.AnythingSchema(null,null,null,null));

/**
* @constructor
* @param {*} v
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.EqSchema = (function (v,__meta,__extmap,__hash){
this.v = v;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4418__auto__,k__4419__auto__){
var self__ = this;
var this__4418__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4418__auto____$1,k__4419__auto__,null);
});

schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4420__auto__,k21890,else__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
var G__21892 = (((k21890 instanceof cljs.core.Keyword))?k21890.fqn:null);
switch (G__21892) {
case "v":
return self__.v;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21890,else__4421__auto__);

}
});

schema.core.EqSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4432__auto__,writer__4433__auto__,opts__4434__auto__){
var self__ = this;
var this__4432__auto____$1 = this;
var pr_pair__4435__auto__ = ((function (this__4432__auto____$1){
return (function (keyval__4436__auto__){
return cljs.core.pr_sequential_writer(writer__4433__auto__,cljs.core.pr_writer,""," ","",opts__4434__auto__,keyval__4436__auto__);
});})(this__4432__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4433__auto__,pr_pair__4435__auto__,"#schema.core.EqSchema{",", ","}",opts__4434__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$26,self__.v],null))], null),self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4416__auto__){
var self__ = this;
var this__4416__auto____$1 = this;
return self__.__meta;
});

schema.core.EqSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4412__auto__){
var self__ = this;
var this__4412__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.EqSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4422__auto__){
var self__ = this;
var this__4422__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
var h__4236__auto__ = self__.__hash;
if(!((h__4236__auto__ == null))){
return h__4236__auto__;
} else {
var h__4236__auto____$1 = cljs.core.hash_imap(this__4413__auto____$1);
self__.__hash = h__4236__auto____$1;

return h__4236__auto____$1;
}
});

schema.core.EqSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4414__auto__,other__4415__auto__){
var self__ = this;
var this__4414__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3803__auto__ = other__4415__auto__;
if(cljs.core.truth_(and__3803__auto__)){
return ((this__4414__auto____$1.constructor === other__4415__auto__.constructor)) && (cljs.core.equiv_map(this__4414__auto____$1,other__4415__auto__));
} else {
return and__3803__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.EqSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4427__auto__,k__4428__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$26,null], null), null),k__4428__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4427__auto____$1),self__.__meta),k__4428__auto__);
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4428__auto__)),null));
}
});

schema.core.EqSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4425__auto__,k__4426__auto__,G__21889){
var self__ = this;
var this__4425__auto____$1 = this;
var pred__21893 = cljs.core.keyword_identical_QMARK_;
var expr__21894 = k__4426__auto__;
if(cljs.core.truth_((function (){var G__21896 = cljs.core.constant$keyword$26;
var G__21897 = expr__21894;
return (pred__21893.cljs$core$IFn$_invoke$arity$2 ? pred__21893.cljs$core$IFn$_invoke$arity$2(G__21896,G__21897) : pred__21893.call(null,G__21896,G__21897));
})())){
return (new schema.core.EqSchema(G__21889,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4426__auto__,G__21889),null));
}
});

schema.core.EqSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4430__auto__){
var self__ = this;
var this__4430__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$26,self__.v],null))], null),self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4417__auto__,G__21889){
var self__ = this;
var this__4417__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,G__21889,self__.__extmap,self__.__hash));
});

schema.core.EqSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4423__auto__,entry__4424__auto__){
var self__ = this;
var this__4423__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4424__auto__)){
return cljs.core._assoc(this__4423__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4424__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4424__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4423__auto____$1,entry__4424__auto__);
}
});

schema.core.EqSchema.prototype.schema$core$Schema$ = true;

schema.core.EqSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.v,x)){
return x;
} else {
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),self__.v),new cljs.core.Symbol(null,"=","=",-1501502141,null));
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});

schema.core.EqSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.v),new cljs.core.Symbol(null,"eq","eq",1021992460,null));
});

schema.core.EqSchema.cljs$lang$type = true;

schema.core.EqSchema.cljs$lang$ctorPrSeq = (function (this__4452__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/EqSchema");
});

schema.core.EqSchema.cljs$lang$ctorPrWriter = (function (this__4452__auto__,writer__4453__auto__){
return cljs.core._write(writer__4453__auto__,"schema.core/EqSchema");
});

schema.core.__GT_EqSchema = (function __GT_EqSchema(v){
return (new schema.core.EqSchema(v,null,null,null));
});

schema.core.map__GT_EqSchema = (function map__GT_EqSchema(G__21891){
return (new schema.core.EqSchema(cljs.core.constant$keyword$26.cljs$core$IFn$_invoke$arity$1(G__21891),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21891,cljs.core.constant$keyword$26),null));
});

/**
* A value that must be (= v).
*/
schema.core.eq = (function eq(v){
return (new schema.core.EqSchema(v,null,null,null));
});

/**
* @constructor
* @param {*} h
* @param {*} parent
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.Isa = (function (h,parent,__meta,__extmap,__hash){
this.h = h;
this.parent = parent;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4418__auto__,k__4419__auto__){
var self__ = this;
var this__4418__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4418__auto____$1,k__4419__auto__,null);
});

schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4420__auto__,k21900,else__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
var G__21902 = (((k21900 instanceof cljs.core.Keyword))?k21900.fqn:null);
switch (G__21902) {
case "parent":
return self__.parent;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21900,else__4421__auto__);

}
});

schema.core.Isa.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4432__auto__,writer__4433__auto__,opts__4434__auto__){
var self__ = this;
var this__4432__auto____$1 = this;
var pr_pair__4435__auto__ = ((function (this__4432__auto____$1){
return (function (keyval__4436__auto__){
return cljs.core.pr_sequential_writer(writer__4433__auto__,cljs.core.pr_writer,""," ","",opts__4434__auto__,keyval__4436__auto__);
});})(this__4432__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4433__auto__,pr_pair__4435__auto__,"#schema.core.Isa{",", ","}",opts__4434__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$27,self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$28,self__.parent],null))], null),self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4416__auto__){
var self__ = this;
var this__4416__auto____$1 = this;
return self__.__meta;
});

schema.core.Isa.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4412__auto__){
var self__ = this;
var this__4412__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Isa.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4422__auto__){
var self__ = this;
var this__4422__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
var h__4236__auto__ = self__.__hash;
if(!((h__4236__auto__ == null))){
return h__4236__auto__;
} else {
var h__4236__auto____$1 = cljs.core.hash_imap(this__4413__auto____$1);
self__.__hash = h__4236__auto____$1;

return h__4236__auto____$1;
}
});

schema.core.Isa.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4414__auto__,other__4415__auto__){
var self__ = this;
var this__4414__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3803__auto__ = other__4415__auto__;
if(cljs.core.truth_(and__3803__auto__)){
return ((this__4414__auto____$1.constructor === other__4415__auto__.constructor)) && (cljs.core.equiv_map(this__4414__auto____$1,other__4415__auto__));
} else {
return and__3803__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Isa.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4427__auto__,k__4428__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$28,null,cljs.core.constant$keyword$27,null], null), null),k__4428__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4427__auto____$1),self__.__meta),k__4428__auto__);
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4428__auto__)),null));
}
});

schema.core.Isa.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4425__auto__,k__4426__auto__,G__21899){
var self__ = this;
var this__4425__auto____$1 = this;
var pred__21903 = cljs.core.keyword_identical_QMARK_;
var expr__21904 = k__4426__auto__;
if(cljs.core.truth_((function (){var G__21906 = cljs.core.constant$keyword$27;
var G__21907 = expr__21904;
return (pred__21903.cljs$core$IFn$_invoke$arity$2 ? pred__21903.cljs$core$IFn$_invoke$arity$2(G__21906,G__21907) : pred__21903.call(null,G__21906,G__21907));
})())){
return (new schema.core.Isa(G__21899,self__.parent,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21908 = cljs.core.constant$keyword$28;
var G__21909 = expr__21904;
return (pred__21903.cljs$core$IFn$_invoke$arity$2 ? pred__21903.cljs$core$IFn$_invoke$arity$2(G__21908,G__21909) : pred__21903.call(null,G__21908,G__21909));
})())){
return (new schema.core.Isa(self__.h,G__21899,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4426__auto__,G__21899),null));
}
}
});

schema.core.Isa.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4430__auto__){
var self__ = this;
var this__4430__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$27,self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$28,self__.parent],null))], null),self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4417__auto__,G__21899){
var self__ = this;
var this__4417__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,G__21899,self__.__extmap,self__.__hash));
});

schema.core.Isa.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4423__auto__,entry__4424__auto__){
var self__ = this;
var this__4423__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4424__auto__)){
return cljs.core._assoc(this__4423__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4424__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4424__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4423__auto____$1,entry__4424__auto__);
}
});

schema.core.Isa.prototype.schema$core$Schema$ = true;

schema.core.Isa.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (child){
if(cljs.core.truth_((function (){var or__3815__auto__ = (function (){var and__3803__auto__ = self__.h;
if(cljs.core.truth_(and__3803__auto__)){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3(self__.h,child,self__.parent);
} else {
return and__3803__auto__;
}
})();
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(child,self__.parent);
}
})())){
return child;
} else {
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,child,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.parent),child),new cljs.core.Symbol(null,"isa?","isa?",1358492324,null));
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});

schema.core.Isa.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.parent),new cljs.core.Symbol(null,"isa?","isa?",1358492324,null));
});

schema.core.Isa.cljs$lang$type = true;

schema.core.Isa.cljs$lang$ctorPrSeq = (function (this__4452__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Isa");
});

schema.core.Isa.cljs$lang$ctorPrWriter = (function (this__4452__auto__,writer__4453__auto__){
return cljs.core._write(writer__4453__auto__,"schema.core/Isa");
});

schema.core.__GT_Isa = (function __GT_Isa(h,parent){
return (new schema.core.Isa(h,parent,null,null,null));
});

schema.core.map__GT_Isa = (function map__GT_Isa(G__21901){
return (new schema.core.Isa(cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(G__21901),cljs.core.constant$keyword$28.cljs$core$IFn$_invoke$arity$1(G__21901),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21901,cljs.core.constant$keyword$27,cljs.core.array_seq([cljs.core.constant$keyword$28], 0)),null));
});

/**
* A value that must be a child of parent.
*/
schema.core.isa = (function() {
var isa = null;
var isa__1 = (function (parent){
return (new schema.core.Isa(null,parent,null,null,null));
});
var isa__2 = (function (h,parent){
return (new schema.core.Isa(h,parent,null,null,null));
});
isa = function(h,parent){
switch(arguments.length){
case 1:
return isa__1.call(this,h);
case 2:
return isa__2.call(this,h,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
isa.cljs$core$IFn$_invoke$arity$1 = isa__1;
isa.cljs$core$IFn$_invoke$arity$2 = isa__2;
return isa;
})()
;

/**
* @constructor
* @param {*} vs
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.EnumSchema = (function (vs,__meta,__extmap,__hash){
this.vs = vs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4418__auto__,k__4419__auto__){
var self__ = this;
var this__4418__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4418__auto____$1,k__4419__auto__,null);
});

schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4420__auto__,k21912,else__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
var G__21914 = (((k21912 instanceof cljs.core.Keyword))?k21912.fqn:null);
switch (G__21914) {
case "vs":
return self__.vs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21912,else__4421__auto__);

}
});

schema.core.EnumSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4432__auto__,writer__4433__auto__,opts__4434__auto__){
var self__ = this;
var this__4432__auto____$1 = this;
var pr_pair__4435__auto__ = ((function (this__4432__auto____$1){
return (function (keyval__4436__auto__){
return cljs.core.pr_sequential_writer(writer__4433__auto__,cljs.core.pr_writer,""," ","",opts__4434__auto__,keyval__4436__auto__);
});})(this__4432__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4433__auto__,pr_pair__4435__auto__,"#schema.core.EnumSchema{",", ","}",opts__4434__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$29,self__.vs],null))], null),self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4416__auto__){
var self__ = this;
var this__4416__auto____$1 = this;
return self__.__meta;
});

schema.core.EnumSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4412__auto__){
var self__ = this;
var this__4412__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.EnumSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4422__auto__){
var self__ = this;
var this__4422__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
var h__4236__auto__ = self__.__hash;
if(!((h__4236__auto__ == null))){
return h__4236__auto__;
} else {
var h__4236__auto____$1 = cljs.core.hash_imap(this__4413__auto____$1);
self__.__hash = h__4236__auto____$1;

return h__4236__auto____$1;
}
});

schema.core.EnumSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4414__auto__,other__4415__auto__){
var self__ = this;
var this__4414__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3803__auto__ = other__4415__auto__;
if(cljs.core.truth_(and__3803__auto__)){
return ((this__4414__auto____$1.constructor === other__4415__auto__.constructor)) && (cljs.core.equiv_map(this__4414__auto____$1,other__4415__auto__));
} else {
return and__3803__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.EnumSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4427__auto__,k__4428__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$29,null], null), null),k__4428__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4427__auto____$1),self__.__meta),k__4428__auto__);
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4428__auto__)),null));
}
});

schema.core.EnumSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4425__auto__,k__4426__auto__,G__21911){
var self__ = this;
var this__4425__auto____$1 = this;
var pred__21915 = cljs.core.keyword_identical_QMARK_;
var expr__21916 = k__4426__auto__;
if(cljs.core.truth_((function (){var G__21918 = cljs.core.constant$keyword$29;
var G__21919 = expr__21916;
return (pred__21915.cljs$core$IFn$_invoke$arity$2 ? pred__21915.cljs$core$IFn$_invoke$arity$2(G__21918,G__21919) : pred__21915.call(null,G__21918,G__21919));
})())){
return (new schema.core.EnumSchema(G__21911,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4426__auto__,G__21911),null));
}
});

schema.core.EnumSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4430__auto__){
var self__ = this;
var this__4430__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$29,self__.vs],null))], null),self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4417__auto__,G__21911){
var self__ = this;
var this__4417__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,G__21911,self__.__extmap,self__.__hash));
});

schema.core.EnumSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4423__auto__,entry__4424__auto__){
var self__ = this;
var this__4423__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4424__auto__)){
return cljs.core._assoc(this__4423__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4424__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4424__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4423__auto____$1,entry__4424__auto__);
}
});

schema.core.EnumSchema.prototype.schema$core$Schema$ = true;

schema.core.EnumSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
if(cljs.core.contains_QMARK_(self__.vs,x)){
return x;
} else {
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),self__.vs);
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});

schema.core.EnumSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(new cljs.core.Symbol(null,"enum","enum",-975417337,null),self__.vs);
});

schema.core.EnumSchema.cljs$lang$type = true;

schema.core.EnumSchema.cljs$lang$ctorPrSeq = (function (this__4452__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/EnumSchema");
});

schema.core.EnumSchema.cljs$lang$ctorPrWriter = (function (this__4452__auto__,writer__4453__auto__){
return cljs.core._write(writer__4453__auto__,"schema.core/EnumSchema");
});

schema.core.__GT_EnumSchema = (function __GT_EnumSchema(vs){
return (new schema.core.EnumSchema(vs,null,null,null));
});

schema.core.map__GT_EnumSchema = (function map__GT_EnumSchema(G__21913){
return (new schema.core.EnumSchema(cljs.core.constant$keyword$29.cljs$core$IFn$_invoke$arity$1(G__21913),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21913,cljs.core.constant$keyword$29),null));
});

/**
* A value that must be = to some element of vs.
* @param {...*} var_args
*/
schema.core.enum$ = (function() { 
var enum$__delegate = function (vs){
return (new schema.core.EnumSchema(cljs.core.set(vs),null,null,null));
};
var enum$ = function (var_args){
var vs = null;
if (arguments.length > 0) {
var G__21921__i = 0, G__21921__a = new Array(arguments.length -  0);
while (G__21921__i < G__21921__a.length) {G__21921__a[G__21921__i] = arguments[G__21921__i + 0]; ++G__21921__i;}
  vs = new cljs.core.IndexedSeq(G__21921__a,0);
} 
return enum$__delegate.call(this,vs);};
enum$.cljs$lang$maxFixedArity = 0;
enum$.cljs$lang$applyTo = (function (arglist__21922){
var vs = cljs.core.seq(arglist__21922);
return enum$__delegate(vs);
});
enum$.cljs$core$IFn$_invoke$arity$variadic = enum$__delegate;
return enum$;
})()
;

/**
* @constructor
* @param {*} p_QMARK_
* @param {*} pred_name
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.Predicate = (function (p_QMARK_,pred_name,__meta,__extmap,__hash){
this.p_QMARK_ = p_QMARK_;
this.pred_name = pred_name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4418__auto__,k__4419__auto__){
var self__ = this;
var this__4418__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4418__auto____$1,k__4419__auto__,null);
});

schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4420__auto__,k21924,else__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
var G__21926 = (((k21924 instanceof cljs.core.Keyword))?k21924.fqn:null);
switch (G__21926) {
case "pred-name":
return self__.pred_name;

break;
case "p?":
return self__.p_QMARK_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21924,else__4421__auto__);

}
});

schema.core.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4432__auto__,writer__4433__auto__,opts__4434__auto__){
var self__ = this;
var this__4432__auto____$1 = this;
var pr_pair__4435__auto__ = ((function (this__4432__auto____$1){
return (function (keyval__4436__auto__){
return cljs.core.pr_sequential_writer(writer__4433__auto__,cljs.core.pr_writer,""," ","",opts__4434__auto__,keyval__4436__auto__);
});})(this__4432__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4433__auto__,pr_pair__4435__auto__,"#schema.core.Predicate{",", ","}",opts__4434__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$30,self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$31,self__.pred_name],null))], null),self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4416__auto__){
var self__ = this;
var this__4416__auto____$1 = this;
return self__.__meta;
});

schema.core.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4412__auto__){
var self__ = this;
var this__4412__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4422__auto__){
var self__ = this;
var this__4422__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
var h__4236__auto__ = self__.__hash;
if(!((h__4236__auto__ == null))){
return h__4236__auto__;
} else {
var h__4236__auto____$1 = cljs.core.hash_imap(this__4413__auto____$1);
self__.__hash = h__4236__auto____$1;

return h__4236__auto____$1;
}
});

schema.core.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4414__auto__,other__4415__auto__){
var self__ = this;
var this__4414__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3803__auto__ = other__4415__auto__;
if(cljs.core.truth_(and__3803__auto__)){
return ((this__4414__auto____$1.constructor === other__4415__auto__.constructor)) && (cljs.core.equiv_map(this__4414__auto____$1,other__4415__auto__));
} else {
return and__3803__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4427__auto__,k__4428__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$31,null,cljs.core.constant$keyword$30,null], null), null),k__4428__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4427__auto____$1),self__.__meta),k__4428__auto__);
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4428__auto__)),null));
}
});

schema.core.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4425__auto__,k__4426__auto__,G__21923){
var self__ = this;
var this__4425__auto____$1 = this;
var pred__21927 = cljs.core.keyword_identical_QMARK_;
var expr__21928 = k__4426__auto__;
if(cljs.core.truth_((function (){var G__21930 = cljs.core.constant$keyword$30;
var G__21931 = expr__21928;
return (pred__21927.cljs$core$IFn$_invoke$arity$2 ? pred__21927.cljs$core$IFn$_invoke$arity$2(G__21930,G__21931) : pred__21927.call(null,G__21930,G__21931));
})())){
return (new schema.core.Predicate(G__21923,self__.pred_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21932 = cljs.core.constant$keyword$31;
var G__21933 = expr__21928;
return (pred__21927.cljs$core$IFn$_invoke$arity$2 ? pred__21927.cljs$core$IFn$_invoke$arity$2(G__21932,G__21933) : pred__21927.call(null,G__21932,G__21933));
})())){
return (new schema.core.Predicate(self__.p_QMARK_,G__21923,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4426__auto__,G__21923),null));
}
}
});

schema.core.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4430__auto__){
var self__ = this;
var this__4430__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$30,self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$31,self__.pred_name],null))], null),self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4417__auto__,G__21923){
var self__ = this;
var this__4417__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,G__21923,self__.__extmap,self__.__hash));
});

schema.core.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4423__auto__,entry__4424__auto__){
var self__ = this;
var this__4423__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4424__auto__)){
return cljs.core._assoc(this__4423__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4424__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4424__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4423__auto____$1,entry__4424__auto__);
}
});

schema.core.Predicate.prototype.schema$core$Schema$ = true;

schema.core.Predicate.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
var temp__4124__auto__ = (function (){try{if(cljs.core.truth_((function (){var G__21935 = x;
return (self__.p_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.p_QMARK_.cljs$core$IFn$_invoke$arity$1(G__21935) : self__.p_QMARK_.call(null,G__21935));
})())){
return null;
} else {
return new cljs.core.Symbol(null,"not","not",1044554643,null);
}
}catch (e21934){if((e21934 instanceof Object)){
var e = e21934;
return new cljs.core.Symbol(null,"throws?","throws?",789734533,null);
} else {
throw e21934;

}
}})();
if(cljs.core.truth_(temp__4124__auto__)){
var reason = temp__4124__auto__;
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (reason,temp__4124__auto__,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),self__.pred_name);
});})(reason,temp__4124__auto__,this$__$1))
,null)),reason));
} else {
return x;
}
});
;})(this$__$1))
});

schema.core.Predicate.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.integer_QMARK_)){
return new cljs.core.Symbol(null,"Int","Int",-2116888740,null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.keyword_QMARK_)){
return new cljs.core.Symbol(null,"Keyword","Keyword",-850065993,null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.symbol_QMARK_)){
return new cljs.core.Symbol(null,"Symbol","Symbol",716452869,null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.string_QMARK_)){
return new cljs.core.Symbol(null,"Str","Str",907970895,null);
} else {
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.pred_name),new cljs.core.Symbol(null,"pred","pred",-727012372,null));

}
}
}
}
});

schema.core.Predicate.cljs$lang$type = true;

schema.core.Predicate.cljs$lang$ctorPrSeq = (function (this__4452__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Predicate");
});

schema.core.Predicate.cljs$lang$ctorPrWriter = (function (this__4452__auto__,writer__4453__auto__){
return cljs.core._write(writer__4453__auto__,"schema.core/Predicate");
});

schema.core.__GT_Predicate = (function __GT_Predicate(p_QMARK_,pred_name){
return (new schema.core.Predicate(p_QMARK_,pred_name,null,null,null));
});

schema.core.map__GT_Predicate = (function map__GT_Predicate(G__21925){
return (new schema.core.Predicate(cljs.core.constant$keyword$30.cljs$core$IFn$_invoke$arity$1(G__21925),cljs.core.constant$keyword$31.cljs$core$IFn$_invoke$arity$1(G__21925),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21925,cljs.core.constant$keyword$30,cljs.core.array_seq([cljs.core.constant$keyword$31], 0)),null));
});

/**
* A value for which p? returns true (and does not throw).
* Optional pred-name can be passed for nicer validation errors.
*/
schema.core.pred = (function() {
var pred = null;
var pred__1 = (function (p_QMARK_){
return pred.cljs$core$IFn$_invoke$arity$2(p_QMARK_,p_QMARK_);
});
var pred__2 = (function (p_QMARK_,pred_name){
if(cljs.core.ifn_QMARK_(p_QMARK_)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Not a function: %s",cljs.core.array_seq([p_QMARK_], 0))));
}

return (new schema.core.Predicate(p_QMARK_,pred_name,null,null,null));
});
pred = function(p_QMARK_,pred_name){
switch(arguments.length){
case 1:
return pred__1.call(this,p_QMARK_);
case 2:
return pred__2.call(this,p_QMARK_,pred_name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pred.cljs$core$IFn$_invoke$arity$1 = pred__1;
pred.cljs$core$IFn$_invoke$arity$2 = pred__2;
return pred;
})()
;
schema.core.protocol_name = (function protocol_name(protocol){
return cljs.core.constant$keyword$32.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(protocol));
});

/**
* @constructor
* @param {*} p
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.Protocol = (function (p,__meta,__extmap,__hash){
this.p = p;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4418__auto__,k__4419__auto__){
var self__ = this;
var this__4418__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4418__auto____$1,k__4419__auto__,null);
});

schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4420__auto__,k21940,else__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
var G__21942 = (((k21940 instanceof cljs.core.Keyword))?k21940.fqn:null);
switch (G__21942) {
case "p":
return self__.p;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21940,else__4421__auto__);

}
});

schema.core.Protocol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4432__auto__,writer__4433__auto__,opts__4434__auto__){
var self__ = this;
var this__4432__auto____$1 = this;
var pr_pair__4435__auto__ = ((function (this__4432__auto____$1){
return (function (keyval__4436__auto__){
return cljs.core.pr_sequential_writer(writer__4433__auto__,cljs.core.pr_writer,""," ","",opts__4434__auto__,keyval__4436__auto__);
});})(this__4432__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4433__auto__,pr_pair__4435__auto__,"#schema.core.Protocol{",", ","}",opts__4434__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$33,self__.p],null))], null),self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4416__auto__){
var self__ = this;
var this__4416__auto____$1 = this;
return self__.__meta;
});

schema.core.Protocol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4412__auto__){
var self__ = this;
var this__4412__auto____$1 = this;
return (new schema.core.Protocol(self__.p,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Protocol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4422__auto__){
var self__ = this;
var this__4422__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
var h__4236__auto__ = self__.__hash;
if(!((h__4236__auto__ == null))){
return h__4236__auto__;
} else {
var h__4236__auto____$1 = cljs.core.hash_imap(this__4413__auto____$1);
self__.__hash = h__4236__auto____$1;

return h__4236__auto____$1;
}
});

schema.core.Protocol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4414__auto__,other__4415__auto__){
var self__ = this;
var this__4414__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3803__auto__ = other__4415__auto__;
if(cljs.core.truth_(and__3803__auto__)){
return ((this__4414__auto____$1.constructor === other__4415__auto__.constructor)) && (cljs.core.equiv_map(this__4414__auto____$1,other__4415__auto__));
} else {
return and__3803__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Protocol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4427__auto__,k__4428__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$33,null], null), null),k__4428__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4427__auto____$1),self__.__meta),k__4428__auto__);
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4428__auto__)),null));
}
});

schema.core.Protocol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4425__auto__,k__4426__auto__,G__21939){
var self__ = this;
var this__4425__auto____$1 = this;
var pred__21943 = cljs.core.keyword_identical_QMARK_;
var expr__21944 = k__4426__auto__;
if(cljs.core.truth_((function (){var G__21946 = cljs.core.constant$keyword$33;
var G__21947 = expr__21944;
return (pred__21943.cljs$core$IFn$_invoke$arity$2 ? pred__21943.cljs$core$IFn$_invoke$arity$2(G__21946,G__21947) : pred__21943.call(null,G__21946,G__21947));
})())){
return (new schema.core.Protocol(G__21939,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4426__auto__,G__21939),null));
}
});

schema.core.Protocol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4430__auto__){
var self__ = this;
var this__4430__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$33,self__.p],null))], null),self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4417__auto__,G__21939){
var self__ = this;
var this__4417__auto____$1 = this;
return (new schema.core.Protocol(self__.p,G__21939,self__.__extmap,self__.__hash));
});

schema.core.Protocol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4423__auto__,entry__4424__auto__){
var self__ = this;
var this__4423__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4424__auto__)){
return cljs.core._assoc(this__4423__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4424__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4424__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4423__auto____$1,entry__4424__auto__);
}
});

schema.core.Protocol.prototype.schema$core$Schema$ = true;

schema.core.Protocol.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
if(cljs.core.truth_(cljs.core.constant$keyword$34.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(this$__$1)).call(null,x))){
return x;
} else {
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),schema.core.protocol_name(this$__$1)),new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null));
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});

schema.core.Protocol.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.protocol_name(this$__$1)),new cljs.core.Symbol(null,"protocol","protocol",-2001965651,null));
});

schema.core.Protocol.cljs$lang$type = true;

schema.core.Protocol.cljs$lang$ctorPrSeq = (function (this__4452__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Protocol");
});

schema.core.Protocol.cljs$lang$ctorPrWriter = (function (this__4452__auto__,writer__4453__auto__){
return cljs.core._write(writer__4453__auto__,"schema.core/Protocol");
});

schema.core.__GT_Protocol = (function __GT_Protocol(p){
return (new schema.core.Protocol(p,null,null,null));
});

schema.core.map__GT_Protocol = (function map__GT_Protocol(G__21941){
return (new schema.core.Protocol(cljs.core.constant$keyword$33.cljs$core$IFn$_invoke$arity$1(G__21941),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21941,cljs.core.constant$keyword$33),null));
});

RegExp.prototype.schema$core$Schema$ = true;

RegExp.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
if(!(typeof x === 'string')){
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"string?","string?",-1129175764,null));
});})(this$__$1))
,null)),null));
} else {
if(cljs.core.not(cljs.core.re_find(this$__$1,x))){
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),schema.core.explain(this$__$1)),new cljs.core.Symbol(null,"re-find","re-find",1143444147,null));
});})(this$__$1))
,null)),null));
} else {
return x;

}
}
});
;})(this$__$1))
});

RegExp.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#\""),cljs.core.str([cljs.core.str(this$__$1)].join('').slice((1),(-1))),cljs.core.str("\"")].join(''));
});
/**
* Satisfied only by String.
* Is (pred string?) and not js/String in cljs because of keywords.
*/
schema.core.Str = schema.core.pred.cljs$core$IFn$_invoke$arity$1(cljs.core.string_QMARK_);
/**
* Boolean true or false
*/
schema.core.Bool = Boolean;
/**
* Any number
*/
schema.core.Num = Number;
/**
* Any integral number
*/
schema.core.Int = schema.core.pred.cljs$core$IFn$_invoke$arity$2(cljs.core.integer_QMARK_,new cljs.core.Symbol(null,"integer?","integer?",1303791671,null));
/**
* A keyword
*/
schema.core.Keyword = schema.core.pred.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null));
/**
* A symbol
*/
schema.core.Symbol = schema.core.pred.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null));
/**
* A regular expression
*/
schema.core.Regex = RegExp;
/**
* The local representation of #inst ...
*/
schema.core.Inst = Date;
/**
* The local representation of #uuid ...
*/
schema.core.Uuid = cljs.core.UUID;

/**
* @constructor
* @param {*} schema
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.Maybe = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4418__auto__,k__4419__auto__){
var self__ = this;
var this__4418__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4418__auto____$1,k__4419__auto__,null);
});

schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4420__auto__,k21950,else__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
var G__21952 = (((k21950 instanceof cljs.core.Keyword))?k21950.fqn:null);
switch (G__21952) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21950,else__4421__auto__);

}
});

schema.core.Maybe.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4432__auto__,writer__4433__auto__,opts__4434__auto__){
var self__ = this;
var this__4432__auto____$1 = this;
var pr_pair__4435__auto__ = ((function (this__4432__auto____$1){
return (function (keyval__4436__auto__){
return cljs.core.pr_sequential_writer(writer__4433__auto__,cljs.core.pr_writer,""," ","",opts__4434__auto__,keyval__4436__auto__);
});})(this__4432__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4433__auto__,pr_pair__4435__auto__,"#schema.core.Maybe{",", ","}",opts__4434__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$22,self__.schema],null))], null),self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4416__auto__){
var self__ = this;
var this__4416__auto____$1 = this;
return self__.__meta;
});

schema.core.Maybe.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4412__auto__){
var self__ = this;
var this__4412__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Maybe.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4422__auto__){
var self__ = this;
var this__4422__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
var h__4236__auto__ = self__.__hash;
if(!((h__4236__auto__ == null))){
return h__4236__auto__;
} else {
var h__4236__auto____$1 = cljs.core.hash_imap(this__4413__auto____$1);
self__.__hash = h__4236__auto____$1;

return h__4236__auto____$1;
}
});

schema.core.Maybe.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4414__auto__,other__4415__auto__){
var self__ = this;
var this__4414__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3803__auto__ = other__4415__auto__;
if(cljs.core.truth_(and__3803__auto__)){
return ((this__4414__auto____$1.constructor === other__4415__auto__.constructor)) && (cljs.core.equiv_map(this__4414__auto____$1,other__4415__auto__));
} else {
return and__3803__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Maybe.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4427__auto__,k__4428__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$22,null], null), null),k__4428__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4427__auto____$1),self__.__meta),k__4428__auto__);
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4428__auto__)),null));
}
});

schema.core.Maybe.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4425__auto__,k__4426__auto__,G__21949){
var self__ = this;
var this__4425__auto____$1 = this;
var pred__21953 = cljs.core.keyword_identical_QMARK_;
var expr__21954 = k__4426__auto__;
if(cljs.core.truth_((function (){var G__21956 = cljs.core.constant$keyword$22;
var G__21957 = expr__21954;
return (pred__21953.cljs$core$IFn$_invoke$arity$2 ? pred__21953.cljs$core$IFn$_invoke$arity$2(G__21956,G__21957) : pred__21953.call(null,G__21956,G__21957));
})())){
return (new schema.core.Maybe(G__21949,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4426__auto__,G__21949),null));
}
});

schema.core.Maybe.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4430__auto__){
var self__ = this;
var this__4430__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$22,self__.schema],null))], null),self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4417__auto__,G__21949){
var self__ = this;
var this__4417__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,G__21949,self__.__extmap,self__.__hash));
});

schema.core.Maybe.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4423__auto__,entry__4424__auto__){
var self__ = this;
var this__4423__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4424__auto__)){
return cljs.core._assoc(this__4423__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4424__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4424__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4423__auto____$1,entry__4424__auto__);
}
});

schema.core.Maybe.prototype.schema$core$Schema$ = true;

schema.core.Maybe.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sub_walker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(self__.schema) : schema.core.subschema_walker.call(null,self__.schema));
return ((function (sub_walker,this$__$1){
return (function (x){
if((x == null)){
return null;
} else {
var G__21958 = x;
return (sub_walker.cljs$core$IFn$_invoke$arity$1 ? sub_walker.cljs$core$IFn$_invoke$arity$1(G__21958) : sub_walker.call(null,G__21958));
}
});
;})(sub_walker,this$__$1))
});

schema.core.Maybe.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explain(self__.schema)),new cljs.core.Symbol(null,"maybe","maybe",1326133967,null));
});

schema.core.Maybe.cljs$lang$type = true;

schema.core.Maybe.cljs$lang$ctorPrSeq = (function (this__4452__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Maybe");
});

schema.core.Maybe.cljs$lang$ctorPrWriter = (function (this__4452__auto__,writer__4453__auto__){
return cljs.core._write(writer__4453__auto__,"schema.core/Maybe");
});

schema.core.__GT_Maybe = (function __GT_Maybe(schema__$1){
return (new schema.core.Maybe(schema__$1,null,null,null));
});

schema.core.map__GT_Maybe = (function map__GT_Maybe(G__21951){
return (new schema.core.Maybe(cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(G__21951),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21951,cljs.core.constant$keyword$22),null));
});

/**
* A value that must either be nil or satisfy schema
*/
schema.core.maybe = (function maybe(schema__$1){
return (new schema.core.Maybe(schema__$1,null,null,null));
});

/**
* @constructor
* @param {*} schema
* @param {*} name
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.NamedSchema = (function (schema,name,__meta,__extmap,__hash){
this.schema = schema;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4418__auto__,k__4419__auto__){
var self__ = this;
var this__4418__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4418__auto____$1,k__4419__auto__,null);
});

schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4420__auto__,k21961,else__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
var G__21963 = (((k21961 instanceof cljs.core.Keyword))?k21961.fqn:null);
switch (G__21963) {
case "name":
return self__.name;

break;
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21961,else__4421__auto__);

}
});

schema.core.NamedSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4432__auto__,writer__4433__auto__,opts__4434__auto__){
var self__ = this;
var this__4432__auto____$1 = this;
var pr_pair__4435__auto__ = ((function (this__4432__auto____$1){
return (function (keyval__4436__auto__){
return cljs.core.pr_sequential_writer(writer__4433__auto__,cljs.core.pr_writer,""," ","",opts__4434__auto__,keyval__4436__auto__);
});})(this__4432__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4433__auto__,pr_pair__4435__auto__,"#schema.core.NamedSchema{",", ","}",opts__4434__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$22,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$35,self__.name],null))], null),self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4416__auto__){
var self__ = this;
var this__4416__auto____$1 = this;
return self__.__meta;
});

schema.core.NamedSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4412__auto__){
var self__ = this;
var this__4412__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.NamedSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4422__auto__){
var self__ = this;
var this__4422__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
var h__4236__auto__ = self__.__hash;
if(!((h__4236__auto__ == null))){
return h__4236__auto__;
} else {
var h__4236__auto____$1 = cljs.core.hash_imap(this__4413__auto____$1);
self__.__hash = h__4236__auto____$1;

return h__4236__auto____$1;
}
});

schema.core.NamedSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4414__auto__,other__4415__auto__){
var self__ = this;
var this__4414__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3803__auto__ = other__4415__auto__;
if(cljs.core.truth_(and__3803__auto__)){
return ((this__4414__auto____$1.constructor === other__4415__auto__.constructor)) && (cljs.core.equiv_map(this__4414__auto____$1,other__4415__auto__));
} else {
return and__3803__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.NamedSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4427__auto__,k__4428__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$22,null,cljs.core.constant$keyword$35,null], null), null),k__4428__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4427__auto____$1),self__.__meta),k__4428__auto__);
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4428__auto__)),null));
}
});

schema.core.NamedSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4425__auto__,k__4426__auto__,G__21960){
var self__ = this;
var this__4425__auto____$1 = this;
var pred__21964 = cljs.core.keyword_identical_QMARK_;
var expr__21965 = k__4426__auto__;
if(cljs.core.truth_((function (){var G__21967 = cljs.core.constant$keyword$22;
var G__21968 = expr__21965;
return (pred__21964.cljs$core$IFn$_invoke$arity$2 ? pred__21964.cljs$core$IFn$_invoke$arity$2(G__21967,G__21968) : pred__21964.call(null,G__21967,G__21968));
})())){
return (new schema.core.NamedSchema(G__21960,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21969 = cljs.core.constant$keyword$35;
var G__21970 = expr__21965;
return (pred__21964.cljs$core$IFn$_invoke$arity$2 ? pred__21964.cljs$core$IFn$_invoke$arity$2(G__21969,G__21970) : pred__21964.call(null,G__21969,G__21970));
})())){
return (new schema.core.NamedSchema(self__.schema,G__21960,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4426__auto__,G__21960),null));
}
}
});

schema.core.NamedSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4430__auto__){
var self__ = this;
var this__4430__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$22,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$35,self__.name],null))], null),self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4417__auto__,G__21960){
var self__ = this;
var this__4417__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,G__21960,self__.__extmap,self__.__hash));
});

schema.core.NamedSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4423__auto__,entry__4424__auto__){
var self__ = this;
var this__4423__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4424__auto__)){
return cljs.core._assoc(this__4423__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4424__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4424__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4423__auto____$1,entry__4424__auto__);
}
});

schema.core.NamedSchema.prototype.schema$core$Schema$ = true;

schema.core.NamedSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sub_walker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(self__.schema) : schema.core.subschema_walker.call(null,self__.schema));
return ((function (sub_walker,this$__$1){
return (function (x){
return schema.utils.wrap_error_name(self__.name,(function (){var G__21971 = x;
return (sub_walker.cljs$core$IFn$_invoke$arity$1 ? sub_walker.cljs$core$IFn$_invoke$arity$1(G__21971) : sub_walker.call(null,G__21971));
})());
});
;})(sub_walker,this$__$1))
});

schema.core.NamedSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.name),schema.core.explain(self__.schema)),new cljs.core.Symbol(null,"named","named",1218138048,null));
});

schema.core.NamedSchema.cljs$lang$type = true;

schema.core.NamedSchema.cljs$lang$ctorPrSeq = (function (this__4452__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/NamedSchema");
});

schema.core.NamedSchema.cljs$lang$ctorPrWriter = (function (this__4452__auto__,writer__4453__auto__){
return cljs.core._write(writer__4453__auto__,"schema.core/NamedSchema");
});

schema.core.__GT_NamedSchema = (function __GT_NamedSchema(schema__$1,name){
return (new schema.core.NamedSchema(schema__$1,name,null,null,null));
});

schema.core.map__GT_NamedSchema = (function map__GT_NamedSchema(G__21962){
return (new schema.core.NamedSchema(cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(G__21962),cljs.core.constant$keyword$35.cljs$core$IFn$_invoke$arity$1(G__21962),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21962,cljs.core.constant$keyword$22,cljs.core.array_seq([cljs.core.constant$keyword$35], 0)),null));
});

/**
* A value that must satisfy schema, and has a name for documentation purposes.
*/
schema.core.named = (function named(schema__$1,name){
return (new schema.core.NamedSchema(schema__$1,name,null,null,null));
});

/**
* @constructor
* @param {*} schemas
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.Either = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4418__auto__,k__4419__auto__){
var self__ = this;
var this__4418__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4418__auto____$1,k__4419__auto__,null);
});

schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4420__auto__,k21974,else__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
var G__21976 = (((k21974 instanceof cljs.core.Keyword))?k21974.fqn:null);
switch (G__21976) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21974,else__4421__auto__);

}
});

schema.core.Either.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4432__auto__,writer__4433__auto__,opts__4434__auto__){
var self__ = this;
var this__4432__auto____$1 = this;
var pr_pair__4435__auto__ = ((function (this__4432__auto____$1){
return (function (keyval__4436__auto__){
return cljs.core.pr_sequential_writer(writer__4433__auto__,cljs.core.pr_writer,""," ","",opts__4434__auto__,keyval__4436__auto__);
});})(this__4432__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4433__auto__,pr_pair__4435__auto__,"#schema.core.Either{",", ","}",opts__4434__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$36,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4416__auto__){
var self__ = this;
var this__4416__auto____$1 = this;
return self__.__meta;
});

schema.core.Either.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4412__auto__){
var self__ = this;
var this__4412__auto____$1 = this;
return (new schema.core.Either(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Either.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4422__auto__){
var self__ = this;
var this__4422__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
var h__4236__auto__ = self__.__hash;
if(!((h__4236__auto__ == null))){
return h__4236__auto__;
} else {
var h__4236__auto____$1 = cljs.core.hash_imap(this__4413__auto____$1);
self__.__hash = h__4236__auto____$1;

return h__4236__auto____$1;
}
});

schema.core.Either.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4414__auto__,other__4415__auto__){
var self__ = this;
var this__4414__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3803__auto__ = other__4415__auto__;
if(cljs.core.truth_(and__3803__auto__)){
return ((this__4414__auto____$1.constructor === other__4415__auto__.constructor)) && (cljs.core.equiv_map(this__4414__auto____$1,other__4415__auto__));
} else {
return and__3803__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Either.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4427__auto__,k__4428__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$36,null], null), null),k__4428__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4427__auto____$1),self__.__meta),k__4428__auto__);
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4428__auto__)),null));
}
});

schema.core.Either.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4425__auto__,k__4426__auto__,G__21973){
var self__ = this;
var this__4425__auto____$1 = this;
var pred__21977 = cljs.core.keyword_identical_QMARK_;
var expr__21978 = k__4426__auto__;
if(cljs.core.truth_((function (){var G__21980 = cljs.core.constant$keyword$36;
var G__21981 = expr__21978;
return (pred__21977.cljs$core$IFn$_invoke$arity$2 ? pred__21977.cljs$core$IFn$_invoke$arity$2(G__21980,G__21981) : pred__21977.call(null,G__21980,G__21981));
})())){
return (new schema.core.Either(G__21973,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4426__auto__,G__21973),null));
}
});

schema.core.Either.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4430__auto__){
var self__ = this;
var this__4430__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$36,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4417__auto__,G__21973){
var self__ = this;
var this__4417__auto____$1 = this;
return (new schema.core.Either(self__.schemas,G__21973,self__.__extmap,self__.__hash));
});

schema.core.Either.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4423__auto__,entry__4424__auto__){
var self__ = this;
var this__4423__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4424__auto__)){
return cljs.core._assoc(this__4423__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4424__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4424__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4423__auto____$1,entry__4424__auto__);
}
});

schema.core.Either.prototype.schema$core$Schema$ = true;

schema.core.Either.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sub_walkers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.subschema_walker,self__.schemas);
return ((function (sub_walkers,this$__$1){
return (function (x){
var sub_walkers__$1 = cljs.core.seq(sub_walkers);
while(true){
if(cljs.core.not(sub_walkers__$1)){
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (sub_walkers__$1,sub_walkers,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null)),cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"%","%",-950237169,null)),new cljs.core.Symbol(null,"check","check",-1428126865,null))),new cljs.core.Symbol(null,"some","some",-310548046,null));
});})(sub_walkers__$1,sub_walkers,this$__$1))
,null)),null));
} else {
var res = cljs.core.first(sub_walkers__$1).call(null,x);
if(!(schema.utils.error_QMARK_(res))){
return res;
} else {
var G__21983 = cljs.core.next(sub_walkers__$1);
sub_walkers__$1 = G__21983;
continue;
}
}
break;
}
});
;})(sub_walkers,this$__$1))
});

schema.core.Either.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(new cljs.core.Symbol(null,"either","either",-2144373018,null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain,self__.schemas));
});

schema.core.Either.cljs$lang$type = true;

schema.core.Either.cljs$lang$ctorPrSeq = (function (this__4452__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Either");
});

schema.core.Either.cljs$lang$ctorPrWriter = (function (this__4452__auto__,writer__4453__auto__){
return cljs.core._write(writer__4453__auto__,"schema.core/Either");
});

schema.core.__GT_Either = (function __GT_Either(schemas){
return (new schema.core.Either(schemas,null,null,null));
});

schema.core.map__GT_Either = (function map__GT_Either(G__21975){
return (new schema.core.Either(cljs.core.constant$keyword$36.cljs$core$IFn$_invoke$arity$1(G__21975),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21975,cljs.core.constant$keyword$36),null));
});

/**
* A value that must satisfy at least one schema in schemas.
* @param {...*} var_args
*/
schema.core.either = (function() { 
var either__delegate = function (schemas){
return (new schema.core.Either(schemas,null,null,null));
};
var either = function (var_args){
var schemas = null;
if (arguments.length > 0) {
var G__21984__i = 0, G__21984__a = new Array(arguments.length -  0);
while (G__21984__i < G__21984__a.length) {G__21984__a[G__21984__i] = arguments[G__21984__i + 0]; ++G__21984__i;}
  schemas = new cljs.core.IndexedSeq(G__21984__a,0);
} 
return either__delegate.call(this,schemas);};
either.cljs$lang$maxFixedArity = 0;
either.cljs$lang$applyTo = (function (arglist__21985){
var schemas = cljs.core.seq(arglist__21985);
return either__delegate(schemas);
});
either.cljs$core$IFn$_invoke$arity$variadic = either__delegate;
return either;
})()
;

/**
* @constructor
* @param {*} schemas
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.Both = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4418__auto__,k__4419__auto__){
var self__ = this;
var this__4418__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4418__auto____$1,k__4419__auto__,null);
});

schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4420__auto__,k21987,else__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
var G__21989 = (((k21987 instanceof cljs.core.Keyword))?k21987.fqn:null);
switch (G__21989) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21987,else__4421__auto__);

}
});

schema.core.Both.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4432__auto__,writer__4433__auto__,opts__4434__auto__){
var self__ = this;
var this__4432__auto____$1 = this;
var pr_pair__4435__auto__ = ((function (this__4432__auto____$1){
return (function (keyval__4436__auto__){
return cljs.core.pr_sequential_writer(writer__4433__auto__,cljs.core.pr_writer,""," ","",opts__4434__auto__,keyval__4436__auto__);
});})(this__4432__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4433__auto__,pr_pair__4435__auto__,"#schema.core.Both{",", ","}",opts__4434__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$36,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4416__auto__){
var self__ = this;
var this__4416__auto____$1 = this;
return self__.__meta;
});

schema.core.Both.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4412__auto__){
var self__ = this;
var this__4412__auto____$1 = this;
return (new schema.core.Both(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Both.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4422__auto__){
var self__ = this;
var this__4422__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
var h__4236__auto__ = self__.__hash;
if(!((h__4236__auto__ == null))){
return h__4236__auto__;
} else {
var h__4236__auto____$1 = cljs.core.hash_imap(this__4413__auto____$1);
self__.__hash = h__4236__auto____$1;

return h__4236__auto____$1;
}
});

schema.core.Both.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4414__auto__,other__4415__auto__){
var self__ = this;
var this__4414__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3803__auto__ = other__4415__auto__;
if(cljs.core.truth_(and__3803__auto__)){
return ((this__4414__auto____$1.constructor === other__4415__auto__.constructor)) && (cljs.core.equiv_map(this__4414__auto____$1,other__4415__auto__));
} else {
return and__3803__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Both.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4427__auto__,k__4428__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$36,null], null), null),k__4428__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4427__auto____$1),self__.__meta),k__4428__auto__);
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4428__auto__)),null));
}
});

schema.core.Both.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4425__auto__,k__4426__auto__,G__21986){
var self__ = this;
var this__4425__auto____$1 = this;
var pred__21990 = cljs.core.keyword_identical_QMARK_;
var expr__21991 = k__4426__auto__;
if(cljs.core.truth_((function (){var G__21993 = cljs.core.constant$keyword$36;
var G__21994 = expr__21991;
return (pred__21990.cljs$core$IFn$_invoke$arity$2 ? pred__21990.cljs$core$IFn$_invoke$arity$2(G__21993,G__21994) : pred__21990.call(null,G__21993,G__21994));
})())){
return (new schema.core.Both(G__21986,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4426__auto__,G__21986),null));
}
});

schema.core.Both.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4430__auto__){
var self__ = this;
var this__4430__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$36,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4417__auto__,G__21986){
var self__ = this;
var this__4417__auto____$1 = this;
return (new schema.core.Both(self__.schemas,G__21986,self__.__extmap,self__.__hash));
});

schema.core.Both.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4423__auto__,entry__4424__auto__){
var self__ = this;
var this__4423__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4424__auto__)){
return cljs.core._assoc(this__4423__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4424__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4424__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4423__auto____$1,entry__4424__auto__);
}
});

schema.core.Both.prototype.schema$core$Schema$ = true;

schema.core.Both.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sub_walkers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.subschema_walker,self__.schemas);
return ((function (sub_walkers,this$__$1){
return (function (x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (sub_walkers,this$__$1){
return (function (x__$1,sub_walker){
if(schema.utils.error_QMARK_(x__$1)){
return x__$1;
} else {
var G__21995 = x__$1;
return (sub_walker.cljs$core$IFn$_invoke$arity$1 ? sub_walker.cljs$core$IFn$_invoke$arity$1(G__21995) : sub_walker.call(null,G__21995));
}
});})(sub_walkers,this$__$1))
,x,sub_walkers);
});
;})(sub_walkers,this$__$1))
});

schema.core.Both.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(new cljs.core.Symbol(null,"both","both",1246882687,null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain,self__.schemas));
});

schema.core.Both.cljs$lang$type = true;

schema.core.Both.cljs$lang$ctorPrSeq = (function (this__4452__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Both");
});

schema.core.Both.cljs$lang$ctorPrWriter = (function (this__4452__auto__,writer__4453__auto__){
return cljs.core._write(writer__4453__auto__,"schema.core/Both");
});

schema.core.__GT_Both = (function __GT_Both(schemas){
return (new schema.core.Both(schemas,null,null,null));
});

schema.core.map__GT_Both = (function map__GT_Both(G__21988){
return (new schema.core.Both(cljs.core.constant$keyword$36.cljs$core$IFn$_invoke$arity$1(G__21988),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21988,cljs.core.constant$keyword$36),null));
});

/**
* A value that must satisfy every schema in schemas.
* @param {...*} var_args
*/
schema.core.both = (function() { 
var both__delegate = function (schemas){
return (new schema.core.Both(schemas,null,null,null));
};
var both = function (var_args){
var schemas = null;
if (arguments.length > 0) {
var G__21997__i = 0, G__21997__a = new Array(arguments.length -  0);
while (G__21997__i < G__21997__a.length) {G__21997__a[G__21997__i] = arguments[G__21997__i + 0]; ++G__21997__i;}
  schemas = new cljs.core.IndexedSeq(G__21997__a,0);
} 
return both__delegate.call(this,schemas);};
both.cljs$lang$maxFixedArity = 0;
both.cljs$lang$applyTo = (function (arglist__21998){
var schemas = cljs.core.seq(arglist__21998);
return both__delegate(schemas);
});
both.cljs$core$IFn$_invoke$arity$variadic = both__delegate;
return both;
})()
;

/**
* @constructor
* @param {*} preds_and_schemas
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.ConditionalSchema = (function (preds_and_schemas,__meta,__extmap,__hash){
this.preds_and_schemas = preds_and_schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4418__auto__,k__4419__auto__){
var self__ = this;
var this__4418__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4418__auto____$1,k__4419__auto__,null);
});

schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4420__auto__,k22000,else__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
var G__22002 = (((k22000 instanceof cljs.core.Keyword))?k22000.fqn:null);
switch (G__22002) {
case "preds-and-schemas":
return self__.preds_and_schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22000,else__4421__auto__);

}
});

schema.core.ConditionalSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4432__auto__,writer__4433__auto__,opts__4434__auto__){
var self__ = this;
var this__4432__auto____$1 = this;
var pr_pair__4435__auto__ = ((function (this__4432__auto____$1){
return (function (keyval__4436__auto__){
return cljs.core.pr_sequential_writer(writer__4433__auto__,cljs.core.pr_writer,""," ","",opts__4434__auto__,keyval__4436__auto__);
});})(this__4432__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4433__auto__,pr_pair__4435__auto__,"#schema.core.ConditionalSchema{",", ","}",opts__4434__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$37,self__.preds_and_schemas],null))], null),self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4416__auto__){
var self__ = this;
var this__4416__auto____$1 = this;
return self__.__meta;
});

schema.core.ConditionalSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4412__auto__){
var self__ = this;
var this__4412__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.ConditionalSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4422__auto__){
var self__ = this;
var this__4422__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
var h__4236__auto__ = self__.__hash;
if(!((h__4236__auto__ == null))){
return h__4236__auto__;
} else {
var h__4236__auto____$1 = cljs.core.hash_imap(this__4413__auto____$1);
self__.__hash = h__4236__auto____$1;

return h__4236__auto____$1;
}
});

schema.core.ConditionalSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4414__auto__,other__4415__auto__){
var self__ = this;
var this__4414__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3803__auto__ = other__4415__auto__;
if(cljs.core.truth_(and__3803__auto__)){
return ((this__4414__auto____$1.constructor === other__4415__auto__.constructor)) && (cljs.core.equiv_map(this__4414__auto____$1,other__4415__auto__));
} else {
return and__3803__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.ConditionalSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4427__auto__,k__4428__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$37,null], null), null),k__4428__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4427__auto____$1),self__.__meta),k__4428__auto__);
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4428__auto__)),null));
}
});

schema.core.ConditionalSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4425__auto__,k__4426__auto__,G__21999){
var self__ = this;
var this__4425__auto____$1 = this;
var pred__22003 = cljs.core.keyword_identical_QMARK_;
var expr__22004 = k__4426__auto__;
if(cljs.core.truth_((function (){var G__22006 = cljs.core.constant$keyword$37;
var G__22007 = expr__22004;
return (pred__22003.cljs$core$IFn$_invoke$arity$2 ? pred__22003.cljs$core$IFn$_invoke$arity$2(G__22006,G__22007) : pred__22003.call(null,G__22006,G__22007));
})())){
return (new schema.core.ConditionalSchema(G__21999,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4426__auto__,G__21999),null));
}
});

schema.core.ConditionalSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4430__auto__){
var self__ = this;
var this__4430__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$37,self__.preds_and_schemas],null))], null),self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4417__auto__,G__21999){
var self__ = this;
var this__4417__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,G__21999,self__.__extmap,self__.__hash));
});

schema.core.ConditionalSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4423__auto__,entry__4424__auto__){
var self__ = this;
var this__4423__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4424__auto__)){
return cljs.core._assoc(this__4423__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4424__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4424__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4423__auto____$1,entry__4424__auto__);
}
});

schema.core.ConditionalSchema.prototype.schema$core$Schema$ = true;

schema.core.ConditionalSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var preds_and_walkers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__22008){
var vec__22009 = p__22008;
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22009,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22009,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred,(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(schema__$1) : schema.core.subschema_walker.call(null,schema__$1))], null);
});})(this$__$1))
,self__.preds_and_schemas);
return ((function (preds_and_walkers,this$__$1){
return (function (x){
var temp__4124__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (preds_and_walkers,this$__$1){
return (function (p__22010){
var vec__22011 = p__22010;
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22011,(0),null);
var G__22012 = x;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__22012) : pred.call(null,G__22012));
});})(preds_and_walkers,this$__$1))
,preds_and_walkers));
if(cljs.core.truth_(temp__4124__auto__)){
var vec__22013 = temp__4124__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22013,(0),null);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22013,(1),null);
var G__22014 = x;
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__22014) : match.call(null,G__22014));
} else {
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (temp__4124__auto__,preds_and_walkers,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"matches-some-condition?","matches-some-condition?",2097370044,null));
});})(temp__4124__auto__,preds_and_walkers,this$__$1))
,null)),null));
}
});
;})(preds_and_walkers,this$__$1))
});

schema.core.ConditionalSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(new cljs.core.Symbol(null,"conditional","conditional",-1212542970,null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (this$__$1){
return (function (p__22015){
var vec__22016 = p__22015;
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22016,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22016,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred,schema.core.explain(schema__$1)], null);
});})(this$__$1))
,cljs.core.array_seq([self__.preds_and_schemas], 0)));
});

schema.core.ConditionalSchema.cljs$lang$type = true;

schema.core.ConditionalSchema.cljs$lang$ctorPrSeq = (function (this__4452__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/ConditionalSchema");
});

schema.core.ConditionalSchema.cljs$lang$ctorPrWriter = (function (this__4452__auto__,writer__4453__auto__){
return cljs.core._write(writer__4453__auto__,"schema.core/ConditionalSchema");
});

schema.core.__GT_ConditionalSchema = (function __GT_ConditionalSchema(preds_and_schemas){
return (new schema.core.ConditionalSchema(preds_and_schemas,null,null,null));
});

schema.core.map__GT_ConditionalSchema = (function map__GT_ConditionalSchema(G__22001){
return (new schema.core.ConditionalSchema(cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(G__22001),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__22001,cljs.core.constant$keyword$37),null));
});

/**
* Define a conditional schema.  Takes args like cond,
* (conditional pred1 schema1 pred2 schema2 ...),
* and checks the first schema where pred is true on the value.
* Unlike cond, throws if the value does not match any condition.
* :else may be used as a final condition in the place of (constantly true).
* More efficient than either, since only one schema must be checked.
* @param {...*} var_args
*/
schema.core.conditional = (function() { 
var conditional__delegate = function (preds_and_schemas){
if((cljs.core.seq(preds_and_schemas)) && (cljs.core.even_QMARK_(cljs.core.count(preds_and_schemas)))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected even, nonzero number of args; got %s",cljs.core.array_seq([cljs.core.count(preds_and_schemas)], 0))));
}

return (new schema.core.ConditionalSchema((function (){var iter__4571__auto__ = (function iter__22028(s__22029){
return (new cljs.core.LazySeq(null,(function (){
var s__22029__$1 = s__22029;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__22029__$1);
if(temp__4126__auto__){
var s__22029__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22029__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__22029__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__22031 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__22030 = (0);
while(true){
if((i__22030 < size__4570__auto__)){
var vec__22036 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__22030);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22036,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22036,(1),null);
cljs.core.chunk_append(b__22031,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.constant$keyword$6))?cljs.core.constantly(true):pred),schema__$1], null));

var G__22038 = (i__22030 + (1));
i__22030 = G__22038;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22031),iter__22028(cljs.core.chunk_rest(s__22029__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22031),null);
}
} else {
var vec__22037 = cljs.core.first(s__22029__$2);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22037,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22037,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.constant$keyword$6))?cljs.core.constantly(true):pred),schema__$1], null),iter__22028(cljs.core.rest(s__22029__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4571__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),preds_and_schemas));
})(),null,null,null));
};
var conditional = function (var_args){
var preds_and_schemas = null;
if (arguments.length > 0) {
var G__22039__i = 0, G__22039__a = new Array(arguments.length -  0);
while (G__22039__i < G__22039__a.length) {G__22039__a[G__22039__i] = arguments[G__22039__i + 0]; ++G__22039__i;}
  preds_and_schemas = new cljs.core.IndexedSeq(G__22039__a,0);
} 
return conditional__delegate.call(this,preds_and_schemas);};
conditional.cljs$lang$maxFixedArity = 0;
conditional.cljs$lang$applyTo = (function (arglist__22040){
var preds_and_schemas = cljs.core.seq(arglist__22040);
return conditional__delegate(preds_and_schemas);
});
conditional.cljs$core$IFn$_invoke$arity$variadic = conditional__delegate;
return conditional;
})()
;
/**
* if the predicate returns truthy, use the if-schema, otherwise use the else-schema
*/
schema.core.if$ = (function if$(pred,if_schema,else_schema){
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pred,if_schema,cljs.core.constantly(true),else_schema], 0));
});
/**
* A sentinel value representing missing portions of the input data.
*/
schema.core._PLUS_missing_PLUS_ = cljs.core.constant$keyword$38;

/**
* @constructor
* @param {*} k
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.RequiredKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4418__auto__,k__4419__auto__){
var self__ = this;
var this__4418__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4418__auto____$1,k__4419__auto__,null);
});

schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4420__auto__,k22042,else__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
var G__22044 = (((k22042 instanceof cljs.core.Keyword))?k22042.fqn:null);
switch (G__22044) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22042,else__4421__auto__);

}
});

schema.core.RequiredKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4432__auto__,writer__4433__auto__,opts__4434__auto__){
var self__ = this;
var this__4432__auto____$1 = this;
var pr_pair__4435__auto__ = ((function (this__4432__auto____$1){
return (function (keyval__4436__auto__){
return cljs.core.pr_sequential_writer(writer__4433__auto__,cljs.core.pr_writer,""," ","",opts__4434__auto__,keyval__4436__auto__);
});})(this__4432__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4433__auto__,pr_pair__4435__auto__,"#schema.core.RequiredKey{",", ","}",opts__4434__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$39,self__.k],null))], null),self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4416__auto__){
var self__ = this;
var this__4416__auto____$1 = this;
return self__.__meta;
});

schema.core.RequiredKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4412__auto__){
var self__ = this;
var this__4412__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.RequiredKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4422__auto__){
var self__ = this;
var this__4422__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
var h__4236__auto__ = self__.__hash;
if(!((h__4236__auto__ == null))){
return h__4236__auto__;
} else {
var h__4236__auto____$1 = cljs.core.hash_imap(this__4413__auto____$1);
self__.__hash = h__4236__auto____$1;

return h__4236__auto____$1;
}
});

schema.core.RequiredKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4414__auto__,other__4415__auto__){
var self__ = this;
var this__4414__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3803__auto__ = other__4415__auto__;
if(cljs.core.truth_(and__3803__auto__)){
return ((this__4414__auto____$1.constructor === other__4415__auto__.constructor)) && (cljs.core.equiv_map(this__4414__auto____$1,other__4415__auto__));
} else {
return and__3803__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.RequiredKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4427__auto__,k__4428__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$39,null], null), null),k__4428__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4427__auto____$1),self__.__meta),k__4428__auto__);
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4428__auto__)),null));
}
});

schema.core.RequiredKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4425__auto__,k__4426__auto__,G__22041){
var self__ = this;
var this__4425__auto____$1 = this;
var pred__22045 = cljs.core.keyword_identical_QMARK_;
var expr__22046 = k__4426__auto__;
if(cljs.core.truth_((function (){var G__22048 = cljs.core.constant$keyword$39;
var G__22049 = expr__22046;
return (pred__22045.cljs$core$IFn$_invoke$arity$2 ? pred__22045.cljs$core$IFn$_invoke$arity$2(G__22048,G__22049) : pred__22045.call(null,G__22048,G__22049));
})())){
return (new schema.core.RequiredKey(G__22041,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4426__auto__,G__22041),null));
}
});

schema.core.RequiredKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4430__auto__){
var self__ = this;
var this__4430__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$39,self__.k],null))], null),self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4417__auto__,G__22041){
var self__ = this;
var this__4417__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,G__22041,self__.__extmap,self__.__hash));
});

schema.core.RequiredKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4423__auto__,entry__4424__auto__){
var self__ = this;
var this__4423__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4424__auto__)){
return cljs.core._assoc(this__4423__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4424__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4424__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4423__auto____$1,entry__4424__auto__);
}
});

schema.core.RequiredKey.cljs$lang$type = true;

schema.core.RequiredKey.cljs$lang$ctorPrSeq = (function (this__4452__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/RequiredKey");
});

schema.core.RequiredKey.cljs$lang$ctorPrWriter = (function (this__4452__auto__,writer__4453__auto__){
return cljs.core._write(writer__4453__auto__,"schema.core/RequiredKey");
});

schema.core.__GT_RequiredKey = (function __GT_RequiredKey(k){
return (new schema.core.RequiredKey(k,null,null,null));
});

schema.core.map__GT_RequiredKey = (function map__GT_RequiredKey(G__22043){
return (new schema.core.RequiredKey(cljs.core.constant$keyword$39.cljs$core$IFn$_invoke$arity$1(G__22043),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__22043,cljs.core.constant$keyword$39),null));
});

/**
* A required key in a map
*/
schema.core.required_key = (function required_key(k){
if((k instanceof cljs.core.Keyword)){
return k;
} else {
return (new schema.core.RequiredKey(k,null,null,null));
}
});
schema.core.required_key_QMARK_ = (function required_key_QMARK_(ks){
return ((ks instanceof cljs.core.Keyword)) || ((ks instanceof schema.core.RequiredKey));
});

/**
* @constructor
* @param {*} k
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.OptionalKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4418__auto__,k__4419__auto__){
var self__ = this;
var this__4418__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4418__auto____$1,k__4419__auto__,null);
});

schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4420__auto__,k22052,else__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
var G__22054 = (((k22052 instanceof cljs.core.Keyword))?k22052.fqn:null);
switch (G__22054) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22052,else__4421__auto__);

}
});

schema.core.OptionalKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4432__auto__,writer__4433__auto__,opts__4434__auto__){
var self__ = this;
var this__4432__auto____$1 = this;
var pr_pair__4435__auto__ = ((function (this__4432__auto____$1){
return (function (keyval__4436__auto__){
return cljs.core.pr_sequential_writer(writer__4433__auto__,cljs.core.pr_writer,""," ","",opts__4434__auto__,keyval__4436__auto__);
});})(this__4432__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4433__auto__,pr_pair__4435__auto__,"#schema.core.OptionalKey{",", ","}",opts__4434__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$39,self__.k],null))], null),self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4416__auto__){
var self__ = this;
var this__4416__auto____$1 = this;
return self__.__meta;
});

schema.core.OptionalKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4412__auto__){
var self__ = this;
var this__4412__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.OptionalKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4422__auto__){
var self__ = this;
var this__4422__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
var h__4236__auto__ = self__.__hash;
if(!((h__4236__auto__ == null))){
return h__4236__auto__;
} else {
var h__4236__auto____$1 = cljs.core.hash_imap(this__4413__auto____$1);
self__.__hash = h__4236__auto____$1;

return h__4236__auto____$1;
}
});

schema.core.OptionalKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4414__auto__,other__4415__auto__){
var self__ = this;
var this__4414__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3803__auto__ = other__4415__auto__;
if(cljs.core.truth_(and__3803__auto__)){
return ((this__4414__auto____$1.constructor === other__4415__auto__.constructor)) && (cljs.core.equiv_map(this__4414__auto____$1,other__4415__auto__));
} else {
return and__3803__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.OptionalKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4427__auto__,k__4428__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$39,null], null), null),k__4428__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4427__auto____$1),self__.__meta),k__4428__auto__);
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4428__auto__)),null));
}
});

schema.core.OptionalKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4425__auto__,k__4426__auto__,G__22051){
var self__ = this;
var this__4425__auto____$1 = this;
var pred__22055 = cljs.core.keyword_identical_QMARK_;
var expr__22056 = k__4426__auto__;
if(cljs.core.truth_((function (){var G__22058 = cljs.core.constant$keyword$39;
var G__22059 = expr__22056;
return (pred__22055.cljs$core$IFn$_invoke$arity$2 ? pred__22055.cljs$core$IFn$_invoke$arity$2(G__22058,G__22059) : pred__22055.call(null,G__22058,G__22059));
})())){
return (new schema.core.OptionalKey(G__22051,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4426__auto__,G__22051),null));
}
});

schema.core.OptionalKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4430__auto__){
var self__ = this;
var this__4430__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$39,self__.k],null))], null),self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4417__auto__,G__22051){
var self__ = this;
var this__4417__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,G__22051,self__.__extmap,self__.__hash));
});

schema.core.OptionalKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4423__auto__,entry__4424__auto__){
var self__ = this;
var this__4423__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4424__auto__)){
return cljs.core._assoc(this__4423__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4424__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4424__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4423__auto____$1,entry__4424__auto__);
}
});

schema.core.OptionalKey.cljs$lang$type = true;

schema.core.OptionalKey.cljs$lang$ctorPrSeq = (function (this__4452__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/OptionalKey");
});

schema.core.OptionalKey.cljs$lang$ctorPrWriter = (function (this__4452__auto__,writer__4453__auto__){
return cljs.core._write(writer__4453__auto__,"schema.core/OptionalKey");
});

schema.core.__GT_OptionalKey = (function __GT_OptionalKey(k){
return (new schema.core.OptionalKey(k,null,null,null));
});

schema.core.map__GT_OptionalKey = (function map__GT_OptionalKey(G__22053){
return (new schema.core.OptionalKey(cljs.core.constant$keyword$39.cljs$core$IFn$_invoke$arity$1(G__22053),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__22053,cljs.core.constant$keyword$39),null));
});

/**
* An optional key in a map
*/
schema.core.optional_key = (function optional_key(k){
return (new schema.core.OptionalKey(k,null,null,null));
});
schema.core.optional_key_QMARK_ = (function optional_key_QMARK_(ks){
return (ks instanceof schema.core.OptionalKey);
});
schema.core.explicit_schema_key = (function explicit_schema_key(ks){
if((ks instanceof cljs.core.Keyword)){
return ks;
} else {
if((ks instanceof schema.core.RequiredKey)){
return ks.k;
} else {
if(schema.core.optional_key_QMARK_(ks)){
return ks.k;
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Bad explicit key: %s",cljs.core.array_seq([ks], 0))));

}
}
}
});
schema.core.specific_key_QMARK_ = (function specific_key_QMARK_(ks){
return (schema.core.required_key_QMARK_(ks)) || (schema.core.optional_key_QMARK_(ks));
});
schema.core.explain_kspec = (function explain_kspec(kspec){
if(schema.core.specific_key_QMARK_(kspec)){
if((kspec instanceof cljs.core.Keyword)){
return kspec;
} else {
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explicit_schema_key(kspec)),((schema.core.required_key_QMARK_(kspec))?new cljs.core.Symbol(null,"required-key","required-key",1624616412,null):((schema.core.optional_key_QMARK_(kspec))?new cljs.core.Symbol(null,"optional-key","optional-key",988406145,null):null)));
}
} else {
return schema.core.explain(kspec);
}
});

/**
* @constructor
* @param {*} kspec
* @param {*} val_schema
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.MapEntry = (function (kspec,val_schema,__meta,__extmap,__hash){
this.kspec = kspec;
this.val_schema = val_schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4418__auto__,k__4419__auto__){
var self__ = this;
var this__4418__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4418__auto____$1,k__4419__auto__,null);
});

schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4420__auto__,k22062,else__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
var G__22064 = (((k22062 instanceof cljs.core.Keyword))?k22062.fqn:null);
switch (G__22064) {
case "val-schema":
return self__.val_schema;

break;
case "kspec":
return self__.kspec;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22062,else__4421__auto__);

}
});

schema.core.MapEntry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4432__auto__,writer__4433__auto__,opts__4434__auto__){
var self__ = this;
var this__4432__auto____$1 = this;
var pr_pair__4435__auto__ = ((function (this__4432__auto____$1){
return (function (keyval__4436__auto__){
return cljs.core.pr_sequential_writer(writer__4433__auto__,cljs.core.pr_writer,""," ","",opts__4434__auto__,keyval__4436__auto__);
});})(this__4432__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4433__auto__,pr_pair__4435__auto__,"#schema.core.MapEntry{",", ","}",opts__4434__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$40,self__.kspec],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$41,self__.val_schema],null))], null),self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4416__auto__){
var self__ = this;
var this__4416__auto____$1 = this;
return self__.__meta;
});

schema.core.MapEntry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4412__auto__){
var self__ = this;
var this__4412__auto____$1 = this;
return (new schema.core.MapEntry(self__.kspec,self__.val_schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.MapEntry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4422__auto__){
var self__ = this;
var this__4422__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
var h__4236__auto__ = self__.__hash;
if(!((h__4236__auto__ == null))){
return h__4236__auto__;
} else {
var h__4236__auto____$1 = cljs.core.hash_imap(this__4413__auto____$1);
self__.__hash = h__4236__auto____$1;

return h__4236__auto____$1;
}
});

schema.core.MapEntry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4414__auto__,other__4415__auto__){
var self__ = this;
var this__4414__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3803__auto__ = other__4415__auto__;
if(cljs.core.truth_(and__3803__auto__)){
return ((this__4414__auto____$1.constructor === other__4415__auto__.constructor)) && (cljs.core.equiv_map(this__4414__auto____$1,other__4415__auto__));
} else {
return and__3803__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.MapEntry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4427__auto__,k__4428__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$40,null,cljs.core.constant$keyword$41,null], null), null),k__4428__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4427__auto____$1),self__.__meta),k__4428__auto__);
} else {
return (new schema.core.MapEntry(self__.kspec,self__.val_schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4428__auto__)),null));
}
});

schema.core.MapEntry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4425__auto__,k__4426__auto__,G__22061){
var self__ = this;
var this__4425__auto____$1 = this;
var pred__22065 = cljs.core.keyword_identical_QMARK_;
var expr__22066 = k__4426__auto__;
if(cljs.core.truth_((function (){var G__22068 = cljs.core.constant$keyword$40;
var G__22069 = expr__22066;
return (pred__22065.cljs$core$IFn$_invoke$arity$2 ? pred__22065.cljs$core$IFn$_invoke$arity$2(G__22068,G__22069) : pred__22065.call(null,G__22068,G__22069));
})())){
return (new schema.core.MapEntry(G__22061,self__.val_schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22070 = cljs.core.constant$keyword$41;
var G__22071 = expr__22066;
return (pred__22065.cljs$core$IFn$_invoke$arity$2 ? pred__22065.cljs$core$IFn$_invoke$arity$2(G__22070,G__22071) : pred__22065.call(null,G__22070,G__22071));
})())){
return (new schema.core.MapEntry(self__.kspec,G__22061,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.MapEntry(self__.kspec,self__.val_schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4426__auto__,G__22061),null));
}
}
});

schema.core.MapEntry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4430__auto__){
var self__ = this;
var this__4430__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$40,self__.kspec],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$41,self__.val_schema],null))], null),self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4417__auto__,G__22061){
var self__ = this;
var this__4417__auto____$1 = this;
return (new schema.core.MapEntry(self__.kspec,self__.val_schema,G__22061,self__.__extmap,self__.__hash));
});

schema.core.MapEntry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4423__auto__,entry__4424__auto__){
var self__ = this;
var this__4423__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4424__auto__)){
return cljs.core._assoc(this__4423__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4424__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4424__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4423__auto____$1,entry__4424__auto__);
}
});

schema.core.MapEntry.prototype.schema$core$Schema$ = true;

schema.core.MapEntry.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var val_walker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(self__.val_schema) : schema.core.subschema_walker.call(null,self__.val_schema));
if(schema.core.specific_key_QMARK_(self__.kspec)){
var optional_QMARK_ = schema.core.optional_key_QMARK_(self__.kspec);
var k = schema.core.explicit_schema_key(self__.kspec);
return ((function (optional_QMARK_,k,val_walker,this$__$1){
return (function (x){
if((schema.core._PLUS_missing_PLUS_ === x)){
if(optional_QMARK_){
return null;
} else {
return schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null)], null));
}
} else {
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(x)))){
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (optional_QMARK_,k,val_walker,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"count","count",-514511684,null))),(2)),cljs.core._EQ_);
});})(optional_QMARK_,k,val_walker,this$__$1))
,null)),null));
} else {
var vec__22072 = x;
var xk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22072,(0),null);
var xv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22072,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xk,k)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"xk","xk",741114825,null),new cljs.core.Symbol(null,"k","k",-505765866,null))], 0)))].join('')));
}

var vres = (function (){var G__22073 = xv;
return (val_walker.cljs$core$IFn$_invoke$arity$1 ? val_walker.cljs$core$IFn$_invoke$arity$1(G__22073) : val_walker.call(null,G__22073));
})();
var temp__4124__auto__ = schema.utils.error_val(vres);
if(cljs.core.truth_(temp__4124__auto__)){
var ve = temp__4124__auto__;
return schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,ve], null));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,vres], null);
}

}
}
});
;})(optional_QMARK_,k,val_walker,this$__$1))
} else {
var key_walker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(self__.kspec) : schema.core.subschema_walker.call(null,self__.kspec));
return ((function (key_walker,val_walker,this$__$1){
return (function (x){
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(x)))){
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (key_walker,val_walker,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"count","count",-514511684,null))),(2)),cljs.core._EQ_);
});})(key_walker,val_walker,this$__$1))
,null)),null));
} else {
var out_k = (function (){var G__22074 = cljs.core.key(x);
return (key_walker.cljs$core$IFn$_invoke$arity$1 ? key_walker.cljs$core$IFn$_invoke$arity$1(G__22074) : key_walker.call(null,G__22074));
})();
var out_ke = schema.utils.error_val(out_k);
var out_v = (function (){var G__22075 = cljs.core.val(x);
return (val_walker.cljs$core$IFn$_invoke$arity$1 ? val_walker.cljs$core$IFn$_invoke$arity$1(G__22075) : val_walker.call(null,G__22075));
})();
var out_ve = schema.utils.error_val(out_v);
if(cljs.core.truth_((function (){var or__3815__auto__ = out_ke;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return out_ve;
}
})())){
return schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3815__auto__ = out_ke;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return cljs.core.key(x);
}
})(),(function (){var or__3815__auto__ = out_ve;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return new cljs.core.Symbol(null,"invalid-key","invalid-key",-1461682245,null);
}
})()], null));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [out_k,out_v], null);
}
}
});
;})(key_walker,val_walker,this$__$1))
}
});

schema.core.MapEntry.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explain(self__.val_schema)),schema.core.explain_kspec(self__.kspec)),new cljs.core.Symbol(null,"map-entry","map-entry",329617471,null));
});

schema.core.MapEntry.cljs$lang$type = true;

schema.core.MapEntry.cljs$lang$ctorPrSeq = (function (this__4452__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/MapEntry");
});

schema.core.MapEntry.cljs$lang$ctorPrWriter = (function (this__4452__auto__,writer__4453__auto__){
return cljs.core._write(writer__4453__auto__,"schema.core/MapEntry");
});

schema.core.__GT_MapEntry = (function __GT_MapEntry(kspec,val_schema){
return (new schema.core.MapEntry(kspec,val_schema,null,null,null));
});

schema.core.map__GT_MapEntry = (function map__GT_MapEntry(G__22063){
return (new schema.core.MapEntry(cljs.core.constant$keyword$40.cljs$core$IFn$_invoke$arity$1(G__22063),cljs.core.constant$keyword$41.cljs$core$IFn$_invoke$arity$1(G__22063),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__22063,cljs.core.constant$keyword$40,cljs.core.array_seq([cljs.core.constant$keyword$41], 0)),null));
});

schema.core.map_entry = (function map_entry(kspec,val_schema){
return (new schema.core.MapEntry(kspec,val_schema,null,null,null));
});
schema.core.find_extra_keys_schema = (function find_extra_keys_schema(map_schema){
var key_schemata = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(schema.core.specific_key_QMARK_,cljs.core.keys(map_schema));
if((cljs.core.count(key_schemata) < (2))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("More than one non-optional/required key schemata: %s",cljs.core.array_seq([cljs.core.vec(key_schemata)], 0))));
}

return cljs.core.first(key_schemata);
});
schema.core.preserve_map_type = (function preserve_map_type(original,walker_result){
if((schema.utils.record_QMARK_(original)) && (!(schema.utils.error_QMARK_(walker_result)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(original,walker_result);
} else {
return walker_result;
}
});
schema.core.map_walker = (function map_walker(map_schema){
var extra_keys_schema = schema.core.find_extra_keys_schema(map_schema);
var extra_walker = (cljs.core.truth_(extra_keys_schema)?(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(schema.core.map_entry,cljs.core.find(map_schema,extra_keys_schema))) : schema.core.subschema_walker.call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(schema.core.map_entry,cljs.core.find(map_schema,extra_keys_schema)))):null);
var explicit_schema = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(map_schema,extra_keys_schema);
var explicit_walkers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4571__auto__ = ((function (extra_keys_schema,extra_walker,explicit_schema){
return (function iter__22102(s__22103){
return (new cljs.core.LazySeq(null,((function (extra_keys_schema,extra_walker,explicit_schema){
return (function (){
var s__22103__$1 = s__22103;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__22103__$1);
if(temp__4126__auto__){
var s__22103__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22103__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__22103__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__22105 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__22104 = (0);
while(true){
if((i__22104 < size__4570__auto__)){
var vec__22110 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__22104);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22110,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22110,(1),null);
cljs.core.chunk_append(b__22105,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key(k),(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(schema.core.map_entry(k,v)) : schema.core.subschema_walker.call(null,schema.core.map_entry(k,v)))], null));

var G__22126 = (i__22104 + (1));
i__22104 = G__22126;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22105),iter__22102(cljs.core.chunk_rest(s__22103__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22105),null);
}
} else {
var vec__22111 = cljs.core.first(s__22103__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22111,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22111,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key(k),(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(schema.core.map_entry(k,v)) : schema.core.subschema_walker.call(null,schema.core.map_entry(k,v)))], null),iter__22102(cljs.core.rest(s__22103__$2)));
}
} else {
return null;
}
break;
}
});})(extra_keys_schema,extra_walker,explicit_schema))
,null,null));
});})(extra_keys_schema,extra_walker,explicit_schema))
;
return iter__4571__auto__(explicit_schema);
})());
var err_conj = schema.utils.result_builder(cljs.core.constantly(cljs.core.PersistentArrayMap.EMPTY));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(explicit_schema),cljs.core.count(explicit_walkers))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Schema has multiple variants of the same explicit key: %s",cljs.core.array_seq([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.explain_kspec,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (p1__22077_SHARP_){
return (cljs.core.count(p1__22077_SHARP_) > (1));
});})(extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
,cljs.core.vals(cljs.core.group_by(schema.core.explicit_schema_key,cljs.core.keys(explicit_schema))))))], 0))));
}

return ((function (extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (x){
if(!(cljs.core.map_QMARK_(x))){
return schema.utils.error(schema.utils.__GT_ValidationError(map_schema,x,(new cljs.core.Delay(((function (extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
});})(extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
,null)),null));
} else {
return schema.core.preserve_map_type(x,(function (){var ok_key = cljs.core.PersistentHashSet.EMPTY;
var explicit_walkers__$1 = cljs.core.seq(explicit_walkers);
var out = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core.not(explicit_walkers__$1)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(extra_walker)?((function (ok_key,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (out__$1,e){
var G__22112 = out__$1;
var G__22113 = (function (){var G__22114 = e;
return (extra_walker.cljs$core$IFn$_invoke$arity$1 ? extra_walker.cljs$core$IFn$_invoke$arity$1(G__22114) : extra_walker.call(null,G__22114));
})();
return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__22112,G__22113) : err_conj.call(null,G__22112,G__22113));
});})(ok_key,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
:((function (ok_key,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (out__$1,p__22115){
var vec__22116 = p__22115;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22116,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22116,(1),null);
var G__22117 = out__$1;
var G__22118 = schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Symbol(null,"disallowed-key","disallowed-key",-1877785633,null)], null));
return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__22117,G__22118) : err_conj.call(null,G__22117,G__22118));
});})(ok_key,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
),out,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (ok_key,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (p__22119){
var vec__22120 = p__22119;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22120,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22120,(1),null);
var G__22121 = k;
return (ok_key.cljs$core$IFn$_invoke$arity$1 ? ok_key.cljs$core$IFn$_invoke$arity$1(G__22121) : ok_key.call(null,G__22121));
});})(ok_key,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
,x));
} else {
var vec__22122 = cljs.core.first(explicit_walkers__$1);
var wk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22122,(0),null);
var wv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22122,(1),null);
var G__22127 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ok_key,wk);
var G__22128 = cljs.core.next(explicit_walkers__$1);
var G__22129 = (function (){var G__22123 = out;
var G__22124 = (function (){var G__22125 = (function (){var or__3815__auto__ = cljs.core.find(x,wk);
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return schema.core._PLUS_missing_PLUS_;
}
})();
return (wv.cljs$core$IFn$_invoke$arity$1 ? wv.cljs$core$IFn$_invoke$arity$1(G__22125) : wv.call(null,G__22125));
})();
return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__22123,G__22124) : err_conj.call(null,G__22123,G__22124));
})();
ok_key = G__22127;
explicit_walkers__$1 = G__22128;
out = G__22129;
continue;
}
break;
}
})());
}
});
;})(extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
});
schema.core.map_explain = (function map_explain(this$){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4571__auto__ = (function iter__22140(s__22141){
return (new cljs.core.LazySeq(null,(function (){
var s__22141__$1 = s__22141;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__22141__$1);
if(temp__4126__auto__){
var s__22141__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22141__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__22141__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__22143 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__22142 = (0);
while(true){
if((i__22142 < size__4570__auto__)){
var vec__22148 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__22142);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22148,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22148,(1),null);
cljs.core.chunk_append(b__22143,cljs.core.vec(cljs.core.next(schema.core.map_entry(k,v).schema$core$Schema$explain$arity$1(null))));

var G__22150 = (i__22142 + (1));
i__22142 = G__22150;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22143),iter__22140(cljs.core.chunk_rest(s__22141__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22143),null);
}
} else {
var vec__22149 = cljs.core.first(s__22141__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22149,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22149,(1),null);
return cljs.core.cons(cljs.core.vec(cljs.core.next(schema.core.map_entry(k,v).schema$core$Schema$explain$arity$1(null))),iter__22140(cljs.core.rest(s__22141__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4571__auto__(this$);
})());
});
cljs.core.PersistentHashMap.prototype.schema$core$Schema$ = true;

cljs.core.PersistentHashMap.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_walker(this$__$1);
});

cljs.core.PersistentHashMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_explain(this$__$1);
});

cljs.core.PersistentArrayMap.prototype.schema$core$Schema$ = true;

cljs.core.PersistentArrayMap.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_walker(this$__$1);
});

cljs.core.PersistentArrayMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_explain(this$__$1);
});
cljs.core.PersistentHashSet.prototype.schema$core$Schema$ = true;

cljs.core.PersistentHashSet.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(this$__$1),(1))){
} else {
throw (new Error(schema.utils.format_STAR_("Set schema must have exactly one element")));
}

var sub_walker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(cljs.core.first(this$__$1)) : schema.core.subschema_walker.call(null,cljs.core.first(this$__$1)));
return ((function (sub_walker,this$__$1){
return (function (x){
var or__3815__auto__ = ((cljs.core.set_QMARK_(x))?null:schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (sub_walker,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"set?","set?",1636014792,null));
});})(sub_walker,this$__$1))
,null)),null)));
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
var vec__22151 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.remove,cljs.core.keep).call(null,schema.utils.error_val,cljs.core.map.cljs$core$IFn$_invoke$arity$2(sub_walker,x));
var good = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22151,(0),null);
var bad = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22151,(1),null);
if(cljs.core.seq(bad)){
return schema.utils.error(cljs.core.set(bad));
} else {
return cljs.core.set(good);
}
}
});
;})(sub_walker,this$__$1))
});

cljs.core.PersistentHashSet.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.set(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain(cljs.core.first(this$__$1))], null));
});

/**
* @constructor
* @param {*} schema
* @param {*} optional_QMARK_
* @param {*} name
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.One = (function (schema,optional_QMARK_,name,__meta,__extmap,__hash){
this.schema = schema;
this.optional_QMARK_ = optional_QMARK_;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4418__auto__,k__4419__auto__){
var self__ = this;
var this__4418__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4418__auto____$1,k__4419__auto__,null);
});

schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4420__auto__,k22153,else__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
var G__22155 = (((k22153 instanceof cljs.core.Keyword))?k22153.fqn:null);
switch (G__22155) {
case "name":
return self__.name;

break;
case "optional?":
return self__.optional_QMARK_;

break;
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22153,else__4421__auto__);

}
});

schema.core.One.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4432__auto__,writer__4433__auto__,opts__4434__auto__){
var self__ = this;
var this__4432__auto____$1 = this;
var pr_pair__4435__auto__ = ((function (this__4432__auto____$1){
return (function (keyval__4436__auto__){
return cljs.core.pr_sequential_writer(writer__4433__auto__,cljs.core.pr_writer,""," ","",opts__4434__auto__,keyval__4436__auto__);
});})(this__4432__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4433__auto__,pr_pair__4435__auto__,"#schema.core.One{",", ","}",opts__4434__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$22,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$42,self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$35,self__.name],null))], null),self__.__extmap));
});

schema.core.One.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4416__auto__){
var self__ = this;
var this__4416__auto____$1 = this;
return self__.__meta;
});

schema.core.One.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4412__auto__){
var self__ = this;
var this__4412__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.One.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4422__auto__){
var self__ = this;
var this__4422__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

schema.core.One.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
var h__4236__auto__ = self__.__hash;
if(!((h__4236__auto__ == null))){
return h__4236__auto__;
} else {
var h__4236__auto____$1 = cljs.core.hash_imap(this__4413__auto____$1);
self__.__hash = h__4236__auto____$1;

return h__4236__auto____$1;
}
});

schema.core.One.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4414__auto__,other__4415__auto__){
var self__ = this;
var this__4414__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3803__auto__ = other__4415__auto__;
if(cljs.core.truth_(and__3803__auto__)){
return ((this__4414__auto____$1.constructor === other__4415__auto__.constructor)) && (cljs.core.equiv_map(this__4414__auto____$1,other__4415__auto__));
} else {
return and__3803__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.One.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4427__auto__,k__4428__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$22,null,cljs.core.constant$keyword$35,null,cljs.core.constant$keyword$42,null], null), null),k__4428__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4427__auto____$1),self__.__meta),k__4428__auto__);
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4428__auto__)),null));
}
});

schema.core.One.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4425__auto__,k__4426__auto__,G__22152){
var self__ = this;
var this__4425__auto____$1 = this;
var pred__22156 = cljs.core.keyword_identical_QMARK_;
var expr__22157 = k__4426__auto__;
if(cljs.core.truth_((function (){var G__22159 = cljs.core.constant$keyword$22;
var G__22160 = expr__22157;
return (pred__22156.cljs$core$IFn$_invoke$arity$2 ? pred__22156.cljs$core$IFn$_invoke$arity$2(G__22159,G__22160) : pred__22156.call(null,G__22159,G__22160));
})())){
return (new schema.core.One(G__22152,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22161 = cljs.core.constant$keyword$42;
var G__22162 = expr__22157;
return (pred__22156.cljs$core$IFn$_invoke$arity$2 ? pred__22156.cljs$core$IFn$_invoke$arity$2(G__22161,G__22162) : pred__22156.call(null,G__22161,G__22162));
})())){
return (new schema.core.One(self__.schema,G__22152,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22163 = cljs.core.constant$keyword$35;
var G__22164 = expr__22157;
return (pred__22156.cljs$core$IFn$_invoke$arity$2 ? pred__22156.cljs$core$IFn$_invoke$arity$2(G__22163,G__22164) : pred__22156.call(null,G__22163,G__22164));
})())){
return (new schema.core.One(self__.schema,self__.optional_QMARK_,G__22152,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4426__auto__,G__22152),null));
}
}
}
});

schema.core.One.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4430__auto__){
var self__ = this;
var this__4430__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$22,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$42,self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$35,self__.name],null))], null),self__.__extmap));
});

schema.core.One.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4417__auto__,G__22152){
var self__ = this;
var this__4417__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,G__22152,self__.__extmap,self__.__hash));
});

schema.core.One.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4423__auto__,entry__4424__auto__){
var self__ = this;
var this__4423__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4424__auto__)){
return cljs.core._assoc(this__4423__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4424__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4424__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4423__auto____$1,entry__4424__auto__);
}
});

schema.core.One.cljs$lang$type = true;

schema.core.One.cljs$lang$ctorPrSeq = (function (this__4452__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/One");
});

schema.core.One.cljs$lang$ctorPrWriter = (function (this__4452__auto__,writer__4453__auto__){
return cljs.core._write(writer__4453__auto__,"schema.core/One");
});

schema.core.__GT_One = (function __GT_One(schema__$1,optional_QMARK_,name){
return (new schema.core.One(schema__$1,optional_QMARK_,name,null,null,null));
});

schema.core.map__GT_One = (function map__GT_One(G__22154){
return (new schema.core.One(cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(G__22154),cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(G__22154),cljs.core.constant$keyword$35.cljs$core$IFn$_invoke$arity$1(G__22154),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__22154,cljs.core.constant$keyword$22,cljs.core.array_seq([cljs.core.constant$keyword$42,cljs.core.constant$keyword$35], 0)),null));
});

/**
* A single required element of a sequence (not repeated, the implicit default)
*/
schema.core.one = (function one(schema__$1,name){
return (new schema.core.One(schema__$1,false,name,null,null,null));
});
/**
* A single optional element of a sequence (not repeated, the implicit default)
*/
schema.core.optional = (function optional(schema__$1,name){
return (new schema.core.One(schema__$1,true,name,null,null,null));
});
schema.core.parse_sequence_schema = (function parse_sequence_schema(s){

var vec__22171 = cljs.core.split_with((function (p1__22166_SHARP_){
return ((p1__22166_SHARP_ instanceof schema.core.One)) && (cljs.core.not(cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(p1__22166_SHARP_)));
}),s);
var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22171,(0),null);
var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22171,(1),null);
var vec__22172 = cljs.core.split_with(((function (vec__22171,required,more){
return (function (p1__22167_SHARP_){
var and__3803__auto__ = (p1__22167_SHARP_ instanceof schema.core.One);
if(and__3803__auto__){
return cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(p1__22167_SHARP_);
} else {
return and__3803__auto__;
}
});})(vec__22171,required,more))
,more);
var optional = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22172,(0),null);
var more__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22172,(1),null);
if(((cljs.core.count(more__$1) <= (1))) && (cljs.core.every_QMARK_(((function (vec__22171,required,more,vec__22172,optional,more__$1){
return (function (p1__22168_SHARP_){
return !((p1__22168_SHARP_ instanceof schema.core.One));
});})(vec__22171,required,more,vec__22172,optional,more__$1))
,more__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Sequence schema %s does not match [one* optional* rest-schema?]",cljs.core.array_seq([s], 0))));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$2(required,optional),cljs.core.first(more__$1)], null);
});
cljs.core.PersistentVector.prototype.schema$core$Schema$ = true;

cljs.core.PersistentVector.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var this$__$1 = this;
var vec__22173 = schema.core.parse_sequence_schema(this$__$1);
var singles = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22173,(0),null);
var multi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22173,(1),null);
var single_walkers = cljs.core.vec((function (){var iter__4571__auto__ = ((function (vec__22173,singles,multi,this$__$1){
return (function iter__22174(s__22175){
return (new cljs.core.LazySeq(null,((function (vec__22173,singles,multi,this$__$1){
return (function (){
var s__22175__$1 = s__22175;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__22175__$1);
if(temp__4126__auto__){
var s__22175__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22175__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__22175__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__22177 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__22176 = (0);
while(true){
if((i__22176 < size__4570__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__22176);
cljs.core.chunk_append(b__22177,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(s.schema) : schema.core.subschema_walker.call(null,s.schema))], null));

var G__22205 = (i__22176 + (1));
i__22176 = G__22205;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22177),iter__22174(cljs.core.chunk_rest(s__22175__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22177),null);
}
} else {
var s = cljs.core.first(s__22175__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(s.schema) : schema.core.subschema_walker.call(null,s.schema))], null),iter__22174(cljs.core.rest(s__22175__$2)));
}
} else {
return null;
}
break;
}
});})(vec__22173,singles,multi,this$__$1))
,null,null));
});})(vec__22173,singles,multi,this$__$1))
;
return iter__4571__auto__(singles);
})());
var multi_walker = (cljs.core.truth_(multi)?(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(multi) : schema.core.subschema_walker.call(null,multi)):null);
var err_conj = schema.utils.result_builder(((function (vec__22173,singles,multi,single_walkers,multi_walker,this$__$1){
return (function (m){
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(m),null));
});})(vec__22173,singles,multi,single_walkers,multi_walker,this$__$1))
);
return ((function (vec__22173,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (x){
var or__3815__auto__ = ((((x == null)) || (cljs.core.sequential_QMARK_(x)))?null:schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (vec__22173,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null));
});})(vec__22173,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null)),null)));
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
var single_walkers__$1 = single_walkers;
var x__$1 = x;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__4124__auto__ = cljs.core.first(single_walkers__$1);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__22180 = temp__4124__auto__;
var first_single = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22180,(0),null);
var single_walker = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22180,(1),null);
if(cljs.core.empty_QMARK_(x__$1)){
if(cljs.core.truth_(first_single.optional_QMARK_)){
return out;
} else {
var G__22181 = out;
var G__22182 = schema.utils.error(schema.utils.__GT_ValidationError(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,single_walkers__$1)),null,(new cljs.core.Delay(((function (single_walkers__$1,x__$1,out,G__22181,vec__22180,first_single,single_walker,temp__4124__auto__,or__3815__auto__,vec__22173,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"present?","present?",-1810613791,null),(function (){var iter__4571__auto__ = ((function (single_walkers__$1,x__$1,out,G__22181,vec__22180,first_single,single_walker,temp__4124__auto__,or__3815__auto__,vec__22173,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function iter__22183(s__22184){
return (new cljs.core.LazySeq(null,((function (single_walkers__$1,x__$1,out,G__22181,vec__22180,first_single,single_walker,temp__4124__auto__,or__3815__auto__,vec__22173,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){
var s__22184__$1 = s__22184;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__22184__$1);
if(temp__4126__auto__){
var s__22184__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22184__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__22184__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__22186 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__22185 = (0);
while(true){
if((i__22185 < size__4570__auto__)){
var vec__22191 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__22185);
var single = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22191,(0),null);
if(cljs.core.not(single.optional_QMARK_)){
cljs.core.chunk_append(b__22186,single.name);

var G__22206 = (i__22185 + (1));
i__22185 = G__22206;
continue;
} else {
return null;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22186),iter__22183(cljs.core.chunk_rest(s__22184__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22186),null);
}
} else {
var vec__22192 = cljs.core.first(s__22184__$2);
var single = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22192,(0),null);
if(cljs.core.not(single.optional_QMARK_)){
return cljs.core.cons(single.name,iter__22183(cljs.core.rest(s__22184__$2)));
} else {
return null;
}
}
} else {
return null;
}
break;
}
});})(single_walkers__$1,x__$1,out,G__22181,vec__22180,first_single,single_walker,temp__4124__auto__,or__3815__auto__,vec__22173,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null,null));
});})(single_walkers__$1,x__$1,out,G__22181,vec__22180,first_single,single_walker,temp__4124__auto__,or__3815__auto__,vec__22173,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
;
return iter__4571__auto__(single_walkers__$1);
})());
});})(single_walkers__$1,x__$1,out,G__22181,vec__22180,first_single,single_walker,temp__4124__auto__,or__3815__auto__,vec__22173,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null)),null));
return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__22181,G__22182) : err_conj.call(null,G__22181,G__22182));
}
} else {
var G__22207 = cljs.core.next(single_walkers__$1);
var G__22208 = cljs.core.rest(x__$1);
var G__22209 = (function (){var G__22193 = out;
var G__22194 = schema.utils.wrap_error_name(first_single.name,(function (){var G__22195 = cljs.core.first(x__$1);
return (single_walker.cljs$core$IFn$_invoke$arity$1 ? single_walker.cljs$core$IFn$_invoke$arity$1(G__22195) : single_walker.call(null,G__22195));
})());
return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__22193,G__22194) : err_conj.call(null,G__22193,G__22194));
})();
single_walkers__$1 = G__22207;
x__$1 = G__22208;
out = G__22209;
continue;
}
} else {
if(cljs.core.truth_(multi)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(err_conj,out,cljs.core.map.cljs$core$IFn$_invoke$arity$2(multi_walker,x__$1));
} else {
if(cljs.core.seq(x__$1)){
var G__22196 = out;
var G__22197 = schema.utils.error(schema.utils.__GT_ValidationError(null,x__$1,(new cljs.core.Delay(((function (single_walkers__$1,x__$1,out,G__22196,temp__4124__auto__,or__3815__auto__,vec__22173,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.count(x__$1)),new cljs.core.Symbol(null,"has-extra-elts?","has-extra-elts?",-1376562869,null));
});})(single_walkers__$1,x__$1,out,G__22196,temp__4124__auto__,or__3815__auto__,vec__22173,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null)),null));
return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__22196,G__22197) : err_conj.call(null,G__22196,G__22197));
} else {
return out;

}
}
}
break;
}
}
});
;})(vec__22173,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
});

cljs.core.PersistentVector.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
var vec__22198 = schema.core.parse_sequence_schema(this$__$1);
var singles = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22198,(0),null);
var multi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22198,(1),null);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__4571__auto__ = ((function (vec__22198,singles,multi,this$__$1){
return (function iter__22199(s__22200){
return (new cljs.core.LazySeq(null,((function (vec__22198,singles,multi,this$__$1){
return (function (){
var s__22200__$1 = s__22200;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__22200__$1);
if(temp__4126__auto__){
var s__22200__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22200__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__22200__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__22202 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__22201 = (0);
while(true){
if((i__22201 < size__4570__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__22201);
cljs.core.chunk_append(b__22202,cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$35.cljs$core$IFn$_invoke$arity$1(s)),schema.core.explain(cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(s))),(cljs.core.truth_(s.optional_QMARK_)?new cljs.core.Symbol(null,"optional","optional",-600484260,null):new cljs.core.Symbol(null,"one","one",-1719427865,null))));

var G__22210 = (i__22201 + (1));
i__22201 = G__22210;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22202),iter__22199(cljs.core.chunk_rest(s__22200__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22202),null);
}
} else {
var s = cljs.core.first(s__22200__$2);
return cljs.core.cons(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$35.cljs$core$IFn$_invoke$arity$1(s)),schema.core.explain(cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(s))),(cljs.core.truth_(s.optional_QMARK_)?new cljs.core.Symbol(null,"optional","optional",-600484260,null):new cljs.core.Symbol(null,"one","one",-1719427865,null))),iter__22199(cljs.core.rest(s__22200__$2)));
}
} else {
return null;
}
break;
}
});})(vec__22198,singles,multi,this$__$1))
,null,null));
});})(vec__22198,singles,multi,this$__$1))
;
return iter__4571__auto__(singles);
})(),(cljs.core.truth_(multi)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain(multi)], null):null)));
});
/**
* A schema for a pair of schemas and their names
*/
schema.core.pair = (function pair(first_schema,first_name,second_schema,second_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(first_schema,first_name),schema.core.one(second_schema,second_name)], null);
});

/**
* @constructor
* @param {*} klass
* @param {*} schema
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.Record = (function (klass,schema,__meta,__extmap,__hash){
this.klass = klass;
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4418__auto__,k__4419__auto__){
var self__ = this;
var this__4418__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4418__auto____$1,k__4419__auto__,null);
});

schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4420__auto__,k22212,else__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
var G__22214 = (((k22212 instanceof cljs.core.Keyword))?k22212.fqn:null);
switch (G__22214) {
case "schema":
return self__.schema;

break;
case "klass":
return self__.klass;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22212,else__4421__auto__);

}
});

schema.core.Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4432__auto__,writer__4433__auto__,opts__4434__auto__){
var self__ = this;
var this__4432__auto____$1 = this;
var pr_pair__4435__auto__ = ((function (this__4432__auto____$1){
return (function (keyval__4436__auto__){
return cljs.core.pr_sequential_writer(writer__4433__auto__,cljs.core.pr_writer,""," ","",opts__4434__auto__,keyval__4436__auto__);
});})(this__4432__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4433__auto__,pr_pair__4435__auto__,"#schema.core.Record{",", ","}",opts__4434__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$43,self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$22,self__.schema],null))], null),self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4416__auto__){
var self__ = this;
var this__4416__auto____$1 = this;
return self__.__meta;
});

schema.core.Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4412__auto__){
var self__ = this;
var this__4412__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4422__auto__){
var self__ = this;
var this__4422__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
var h__4236__auto__ = self__.__hash;
if(!((h__4236__auto__ == null))){
return h__4236__auto__;
} else {
var h__4236__auto____$1 = cljs.core.hash_imap(this__4413__auto____$1);
self__.__hash = h__4236__auto____$1;

return h__4236__auto____$1;
}
});

schema.core.Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4414__auto__,other__4415__auto__){
var self__ = this;
var this__4414__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3803__auto__ = other__4415__auto__;
if(cljs.core.truth_(and__3803__auto__)){
return ((this__4414__auto____$1.constructor === other__4415__auto__.constructor)) && (cljs.core.equiv_map(this__4414__auto____$1,other__4415__auto__));
} else {
return and__3803__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4427__auto__,k__4428__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$22,null,cljs.core.constant$keyword$43,null], null), null),k__4428__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4427__auto____$1),self__.__meta),k__4428__auto__);
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4428__auto__)),null));
}
});

schema.core.Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4425__auto__,k__4426__auto__,G__22211){
var self__ = this;
var this__4425__auto____$1 = this;
var pred__22215 = cljs.core.keyword_identical_QMARK_;
var expr__22216 = k__4426__auto__;
if(cljs.core.truth_((function (){var G__22218 = cljs.core.constant$keyword$43;
var G__22219 = expr__22216;
return (pred__22215.cljs$core$IFn$_invoke$arity$2 ? pred__22215.cljs$core$IFn$_invoke$arity$2(G__22218,G__22219) : pred__22215.call(null,G__22218,G__22219));
})())){
return (new schema.core.Record(G__22211,self__.schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22220 = cljs.core.constant$keyword$22;
var G__22221 = expr__22216;
return (pred__22215.cljs$core$IFn$_invoke$arity$2 ? pred__22215.cljs$core$IFn$_invoke$arity$2(G__22220,G__22221) : pred__22215.call(null,G__22220,G__22221));
})())){
return (new schema.core.Record(self__.klass,G__22211,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4426__auto__,G__22211),null));
}
}
});

schema.core.Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4430__auto__){
var self__ = this;
var this__4430__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$43,self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$22,self__.schema],null))], null),self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4417__auto__,G__22211){
var self__ = this;
var this__4417__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,G__22211,self__.__extmap,self__.__hash));
});

schema.core.Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4423__auto__,entry__4424__auto__){
var self__ = this;
var this__4423__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4424__auto__)){
return cljs.core._assoc(this__4423__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4424__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4424__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4423__auto____$1,entry__4424__auto__);
}
});

schema.core.Record.prototype.schema$core$Schema$ = true;

schema.core.Record.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var map_checker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(self__.schema) : schema.core.subschema_walker.call(null,self__.schema));
var pred_checker = (function (){var temp__4126__auto__ = cljs.core.constant$keyword$44.cljs$core$IFn$_invoke$arity$1(this$__$1);
if(cljs.core.truth_(temp__4126__auto__)){
var evf = temp__4126__auto__;
return (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(schema.core.pred.cljs$core$IFn$_invoke$arity$1(evf)) : schema.core.subschema_walker.call(null,schema.core.pred.cljs$core$IFn$_invoke$arity$1(evf)));
} else {
return null;
}
})();
return ((function (map_checker,pred_checker,this$__$1){
return (function (r){
var or__3815__auto__ = (((r instanceof self__.klass))?null:schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,r,(new cljs.core.Delay(((function (map_checker,pred_checker,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(r)),self__.klass),new cljs.core.Symbol(null,"instance?","instance?",1075939923,null));
});})(map_checker,pred_checker,this$__$1))
,null)),null)));
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
var res = (function (){var G__22222 = r;
return (map_checker.cljs$core$IFn$_invoke$arity$1 ? map_checker.cljs$core$IFn$_invoke$arity$1(G__22222) : map_checker.call(null,G__22222));
})();
if(schema.utils.error_QMARK_(res)){
return res;
} else {
var pred_res = (cljs.core.truth_(pred_checker)?(function (){var G__22223 = r;
return (pred_checker.cljs$core$IFn$_invoke$arity$1 ? pred_checker.cljs$core$IFn$_invoke$arity$1(G__22223) : pred_checker.call(null,G__22223));
})():null);
if(schema.utils.error_QMARK_(pred_res)){
return pred_res;
} else {
return res;
}
}
}
});
;})(map_checker,pred_checker,this$__$1))
});

schema.core.Record.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explain(self__.schema)),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.klass], 0)))),new cljs.core.Symbol(null,"record","record",861424668,null));
});

schema.core.Record.cljs$lang$type = true;

schema.core.Record.cljs$lang$ctorPrSeq = (function (this__4452__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Record");
});

schema.core.Record.cljs$lang$ctorPrWriter = (function (this__4452__auto__,writer__4453__auto__){
return cljs.core._write(writer__4453__auto__,"schema.core/Record");
});

schema.core.__GT_Record = (function __GT_Record(klass,schema__$1){
return (new schema.core.Record(klass,schema__$1,null,null,null));
});

schema.core.map__GT_Record = (function map__GT_Record(G__22213){
return (new schema.core.Record(cljs.core.constant$keyword$43.cljs$core$IFn$_invoke$arity$1(G__22213),cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(G__22213),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__22213,cljs.core.constant$keyword$43,cljs.core.array_seq([cljs.core.constant$keyword$22], 0)),null));
});

/**
* A Record instance of type klass, whose elements match map schema 'schema'.
*/
schema.core.record = (function record(klass,schema__$1){
if(cljs.core.map_QMARK_(schema__$1)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected map, got %s",cljs.core.array_seq([schema.utils.type_of(schema__$1)], 0))));
}

return (new schema.core.Record(klass,schema__$1,null,null,null));
});
schema.core.explain_input_schema = (function explain_input_schema(input_schema){
var vec__22228 = cljs.core.split_with((function (p1__22225_SHARP_){
return (p1__22225_SHARP_ instanceof schema.core.One);
}),input_schema);
var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22228,(0),null);
var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22228,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__22228,required,more){
return (function (p1__22226_SHARP_){
return schema.core.explain(p1__22226_SHARP_.schema);
});})(vec__22228,required,more))
,required),((cljs.core.seq(more))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.explain,more)], null):null));
});

/**
* @constructor
* @param {*} output_schema
* @param {*} input_schemas
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.FnSchema = (function (output_schema,input_schemas,__meta,__extmap,__hash){
this.output_schema = output_schema;
this.input_schemas = input_schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4418__auto__,k__4419__auto__){
var self__ = this;
var this__4418__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4418__auto____$1,k__4419__auto__,null);
});

schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4420__auto__,k22230,else__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
var G__22232 = (((k22230 instanceof cljs.core.Keyword))?k22230.fqn:null);
switch (G__22232) {
case "input-schemas":
return self__.input_schemas;

break;
case "output-schema":
return self__.output_schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22230,else__4421__auto__);

}
});

schema.core.FnSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4432__auto__,writer__4433__auto__,opts__4434__auto__){
var self__ = this;
var this__4432__auto____$1 = this;
var pr_pair__4435__auto__ = ((function (this__4432__auto____$1){
return (function (keyval__4436__auto__){
return cljs.core.pr_sequential_writer(writer__4433__auto__,cljs.core.pr_writer,""," ","",opts__4434__auto__,keyval__4436__auto__);
});})(this__4432__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4433__auto__,pr_pair__4435__auto__,"#schema.core.FnSchema{",", ","}",opts__4434__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$45,self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$46,self__.input_schemas],null))], null),self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4416__auto__){
var self__ = this;
var this__4416__auto____$1 = this;
return self__.__meta;
});

schema.core.FnSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4412__auto__){
var self__ = this;
var this__4412__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.FnSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4422__auto__){
var self__ = this;
var this__4422__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
var h__4236__auto__ = self__.__hash;
if(!((h__4236__auto__ == null))){
return h__4236__auto__;
} else {
var h__4236__auto____$1 = cljs.core.hash_imap(this__4413__auto____$1);
self__.__hash = h__4236__auto____$1;

return h__4236__auto____$1;
}
});

schema.core.FnSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4414__auto__,other__4415__auto__){
var self__ = this;
var this__4414__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3803__auto__ = other__4415__auto__;
if(cljs.core.truth_(and__3803__auto__)){
return ((this__4414__auto____$1.constructor === other__4415__auto__.constructor)) && (cljs.core.equiv_map(this__4414__auto____$1,other__4415__auto__));
} else {
return and__3803__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.FnSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4427__auto__,k__4428__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$45,null,cljs.core.constant$keyword$46,null], null), null),k__4428__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4427__auto____$1),self__.__meta),k__4428__auto__);
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4428__auto__)),null));
}
});

schema.core.FnSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4425__auto__,k__4426__auto__,G__22229){
var self__ = this;
var this__4425__auto____$1 = this;
var pred__22233 = cljs.core.keyword_identical_QMARK_;
var expr__22234 = k__4426__auto__;
if(cljs.core.truth_((function (){var G__22236 = cljs.core.constant$keyword$45;
var G__22237 = expr__22234;
return (pred__22233.cljs$core$IFn$_invoke$arity$2 ? pred__22233.cljs$core$IFn$_invoke$arity$2(G__22236,G__22237) : pred__22233.call(null,G__22236,G__22237));
})())){
return (new schema.core.FnSchema(G__22229,self__.input_schemas,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22238 = cljs.core.constant$keyword$46;
var G__22239 = expr__22234;
return (pred__22233.cljs$core$IFn$_invoke$arity$2 ? pred__22233.cljs$core$IFn$_invoke$arity$2(G__22238,G__22239) : pred__22233.call(null,G__22238,G__22239));
})())){
return (new schema.core.FnSchema(self__.output_schema,G__22229,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4426__auto__,G__22229),null));
}
}
});

schema.core.FnSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4430__auto__){
var self__ = this;
var this__4430__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$45,self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$46,self__.input_schemas],null))], null),self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4417__auto__,G__22229){
var self__ = this;
var this__4417__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,G__22229,self__.__extmap,self__.__hash));
});

schema.core.FnSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4423__auto__,entry__4424__auto__){
var self__ = this;
var this__4423__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4424__auto__)){
return cljs.core._assoc(this__4423__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4424__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4424__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4423__auto____$1,entry__4424__auto__);
}
});

schema.core.FnSchema.prototype.schema$core$Schema$ = true;

schema.core.FnSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
if(cljs.core.ifn_QMARK_(x)){
return x;
} else {
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null));
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});

schema.core.FnSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.input_schemas) > (1))){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"=>*","=>*",1909690043,null),schema.core.explain(self__.output_schema),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain_input_schema,self__.input_schemas));
} else {
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"=>","=>",-813269641,null),schema.core.explain(self__.output_schema),schema.core.explain_input_schema(cljs.core.first(self__.input_schemas)));
}
});

schema.core.FnSchema.cljs$lang$type = true;

schema.core.FnSchema.cljs$lang$ctorPrSeq = (function (this__4452__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/FnSchema");
});

schema.core.FnSchema.cljs$lang$ctorPrWriter = (function (this__4452__auto__,writer__4453__auto__){
return cljs.core._write(writer__4453__auto__,"schema.core/FnSchema");
});

schema.core.__GT_FnSchema = (function __GT_FnSchema(output_schema,input_schemas){
return (new schema.core.FnSchema(output_schema,input_schemas,null,null,null));
});

schema.core.map__GT_FnSchema = (function map__GT_FnSchema(G__22231){
return (new schema.core.FnSchema(cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(G__22231),cljs.core.constant$keyword$46.cljs$core$IFn$_invoke$arity$1(G__22231),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__22231,cljs.core.constant$keyword$45,cljs.core.array_seq([cljs.core.constant$keyword$46], 0)),null));
});

schema.core.arity = (function arity(input_schema){
if(cljs.core.seq(input_schema)){
if((cljs.core.last(input_schema) instanceof schema.core.One)){
return cljs.core.count(input_schema);
} else {
return Number.MAX_VALUE;
}
} else {
return (0);
}
});
/**
* A function outputting a value in output schema, whose argument vector must match one of
* input-schemas, each of which should be a sequence schema.
* Currently function schemas are purely descriptive; they validate against any function,
* regardless of actual input and output types.
*/
schema.core.make_fn_schema = (function make_fn_schema(output_schema,input_schemas){
if(cljs.core.seq(input_schemas)){
} else {
throw (new Error(schema.utils.format_STAR_("Function must have at least one input schema")));
}

if(cljs.core.every_QMARK_(cljs.core.vector_QMARK_,input_schemas)){
} else {
throw (new Error(schema.utils.format_STAR_("Each arity must be a vector.")));
}

if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.arity,input_schemas)))){
} else {
throw (new Error(schema.utils.format_STAR_("Arities must be distinct")));
}

return (new schema.core.FnSchema(output_schema,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(schema.core.arity,input_schemas),null,null,null));
});
schema.core.schema_with_name = (function schema_with_name(schema__$1,name){

return cljs.core.with_meta(schema__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$35,name], null));
});
schema.core.schema_name = (function schema_name(schema__$1){

return cljs.core.constant$keyword$35.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(schema__$1));
});
/**
* Get the current global schema validation setting.
*/
schema.core.fn_validation_QMARK_ = (function fn_validation_QMARK_(){
return schema.utils.use_fn_validation.get_cell();
});
/**
* Globally turn on schema validation for all s/fn and s/defn instances.
*/
schema.core.set_fn_validation_BANG_ = (function set_fn_validation_BANG_(on_QMARK_){
return schema.utils.use_fn_validation.set_cell(on_QMARK_);
});
/**
* Attach the schema to fn f at runtime, extractable by fn-schema.
*/
schema.core.schematize_fn = (function schematize_fn(f,schema__$1){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(f,cljs.core.assoc,cljs.core.constant$keyword$22,schema__$1);
});
/**
* Produce the schema for a function defined with s/fn or s/defn.
*/
schema.core.fn_schema = (function fn_schema(f){
if(cljs.core.fn_QMARK_(f)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Non-function %s",cljs.core.array_seq([schema.utils.type_of(f)], 0))));
}

var or__3815__auto__ = schema.utils.class_schema(schema.utils.fn_schema_bearer(f));
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
var m__10702__auto__ = cljs.core.meta(f);
var k__10703__auto__ = cljs.core.constant$keyword$22;
var temp__4124__auto__ = cljs.core.find(m__10702__auto__,k__10703__auto__);
if(cljs.core.truth_(temp__4124__auto__)){
var pair__10704__auto__ = temp__4124__auto__;
return cljs.core.val(pair__10704__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.array_seq([k__10703__auto__,m__10702__auto__], 0))));
}
}
});

// Compiled by ClojureScript 0.0-2850 {}
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = (0);
cljs.core.async.impl.ioc_helpers.STATE_IDX = (1);
cljs.core.async.impl.ioc_helpers.VALUE_IDX = (2);
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = (3);
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = (4);
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = (5);
cljs.core.async.impl.ioc_helpers.USER_START_IDX = (6);
cljs.core.async.impl.ioc_helpers.aset_object = (function aset_object(arr,idx,o){
return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function aget_object(arr,idx){
return (arr[idx]);
});
/**
* Returns true if the machine is in a finished state
*/
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){
return cljs.core.keyword_identical_QMARK_((state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),cljs.core.constant$keyword$96);
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.impl.ioc_helpers.t32274 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t32274 = (function (f,fn_handler,meta32275){
this.f = f;
this.fn_handler = fn_handler;
this.meta32275 = meta32275;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t32274.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.impl.ioc_helpers.t32274.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.impl.ioc_helpers.t32274.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.impl.ioc_helpers.t32274.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32276){
var self__ = this;
var _32276__$1 = this;
return self__.meta32275;
});

cljs.core.async.impl.ioc_helpers.t32274.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32276,meta32275__$1){
var self__ = this;
var _32276__$1 = this;
return (new cljs.core.async.impl.ioc_helpers.t32274(self__.f,self__.fn_handler,meta32275__$1));
});

cljs.core.async.impl.ioc_helpers.t32274.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.t32274.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t32274";

cljs.core.async.impl.ioc_helpers.t32274.cljs$lang$ctorPrWriter = (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async.impl.ioc-helpers/t32274");
});

cljs.core.async.impl.ioc_helpers.__GT_t32274 = (function __GT_t32274(f__$1,fn_handler__$1,meta32275){
return (new cljs.core.async.impl.ioc_helpers.t32274(f__$1,fn_handler__$1,meta32275));
});

}

return (new cljs.core.async.impl.ioc_helpers.t32274(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){
return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){
try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e32278){if((e32278 instanceof Object)){
var ex = e32278;
cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

throw ex;
} else {
throw e32278;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){
var temp__4124__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){
var statearr_32282_32285 = state;
(statearr_32282_32285[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);

(statearr_32282_32285[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4124__auto__)){
var cb = temp__4124__auto__;
var statearr_32283_32286 = state;
(statearr_32283_32286[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__32284 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32284) : cljs.core.deref.call(null,G__32284));
})());

(statearr_32283_32286[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$97;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){
var temp__4124__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (ret_val){
var statearr_32290_32293 = state;
(statearr_32290_32293[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = ret_val);

(statearr_32290_32293[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4124__auto__)){
var cb = temp__4124__auto__;
var statearr_32291_32294 = state;
(statearr_32291_32294[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__32292 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32292) : cljs.core.deref.call(null,G__32292));
})());

(statearr_32291_32294[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$97;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.return_chan = (function return_chan(state,value){
var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);
if((value == null)){
} else {
c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,value,cljs.core.async.impl.ioc_helpers.fn_handler(((function (c){
return (function (){
return null;
});})(c))
));
}

c.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

return c;
});

/**
* @constructor
* @param {*} catch_block
* @param {*} catch_exception
* @param {*} finally_block
* @param {*} continue_block
* @param {*} prev
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap,__hash){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4418__auto__,k__4419__auto__){
var self__ = this;
var this__4418__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4418__auto____$1,k__4419__auto__,null);
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4420__auto__,k32296,else__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
var G__32298 = (((k32296 instanceof cljs.core.Keyword))?k32296.fqn:null);
switch (G__32298) {
case "prev":
return self__.prev;

break;
case "continue-block":
return self__.continue_block;

break;
case "finally-block":
return self__.finally_block;

break;
case "catch-exception":
return self__.catch_exception;

break;
case "catch-block":
return self__.catch_block;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32296,else__4421__auto__);

}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4432__auto__,writer__4433__auto__,opts__4434__auto__){
var self__ = this;
var this__4432__auto____$1 = this;
var pr_pair__4435__auto__ = ((function (this__4432__auto____$1){
return (function (keyval__4436__auto__){
return cljs.core.pr_sequential_writer(writer__4433__auto__,cljs.core.pr_writer,""," ","",opts__4434__auto__,keyval__4436__auto__);
});})(this__4432__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4433__auto__,pr_pair__4435__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__4434__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$98,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$99,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$100,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$101,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$102,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4416__auto__){
var self__ = this;
var this__4416__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4412__auto__){
var self__ = this;
var this__4412__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4422__auto__){
var self__ = this;
var this__4422__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4413__auto__){
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

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4414__auto__,other__4415__auto__){
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

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4427__auto__,k__4428__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$100,null,cljs.core.constant$keyword$98,null,cljs.core.constant$keyword$99,null,cljs.core.constant$keyword$102,null,cljs.core.constant$keyword$101,null], null), null),k__4428__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4427__auto____$1),self__.__meta),k__4428__auto__);
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4428__auto__)),null));
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4425__auto__,k__4426__auto__,G__32295){
var self__ = this;
var this__4425__auto____$1 = this;
var pred__32299 = cljs.core.keyword_identical_QMARK_;
var expr__32300 = k__4426__auto__;
if(cljs.core.truth_((function (){var G__32302 = cljs.core.constant$keyword$98;
var G__32303 = expr__32300;
return (pred__32299.cljs$core$IFn$_invoke$arity$2 ? pred__32299.cljs$core$IFn$_invoke$arity$2(G__32302,G__32303) : pred__32299.call(null,G__32302,G__32303));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__32295,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__32304 = cljs.core.constant$keyword$99;
var G__32305 = expr__32300;
return (pred__32299.cljs$core$IFn$_invoke$arity$2 ? pred__32299.cljs$core$IFn$_invoke$arity$2(G__32304,G__32305) : pred__32299.call(null,G__32304,G__32305));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__32295,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__32306 = cljs.core.constant$keyword$100;
var G__32307 = expr__32300;
return (pred__32299.cljs$core$IFn$_invoke$arity$2 ? pred__32299.cljs$core$IFn$_invoke$arity$2(G__32306,G__32307) : pred__32299.call(null,G__32306,G__32307));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__32295,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__32308 = cljs.core.constant$keyword$101;
var G__32309 = expr__32300;
return (pred__32299.cljs$core$IFn$_invoke$arity$2 ? pred__32299.cljs$core$IFn$_invoke$arity$2(G__32308,G__32309) : pred__32299.call(null,G__32308,G__32309));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__32295,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__32310 = cljs.core.constant$keyword$102;
var G__32311 = expr__32300;
return (pred__32299.cljs$core$IFn$_invoke$arity$2 ? pred__32299.cljs$core$IFn$_invoke$arity$2(G__32310,G__32311) : pred__32299.call(null,G__32310,G__32311));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__32295,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4426__auto__,G__32295),null));
}
}
}
}
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4430__auto__){
var self__ = this;
var this__4430__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$98,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$99,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$100,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$101,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$102,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4417__auto__,G__32295){
var self__ = this;
var this__4417__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__32295,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4423__auto__,entry__4424__auto__){
var self__ = this;
var this__4423__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4424__auto__)){
return cljs.core._assoc(this__4423__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4424__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4424__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4423__auto____$1,entry__4424__auto__);
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__4452__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__4452__auto__,writer__4453__auto__){
return cljs.core._write(writer__4453__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev,null,null,null));
});

cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__32297){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.constant$keyword$98.cljs$core$IFn$_invoke$arity$1(G__32297),cljs.core.constant$keyword$99.cljs$core$IFn$_invoke$arity$1(G__32297),cljs.core.constant$keyword$100.cljs$core$IFn$_invoke$arity$1(G__32297),cljs.core.constant$keyword$101.cljs$core$IFn$_invoke$arity$1(G__32297),cljs.core.constant$keyword$102.cljs$core$IFn$_invoke$arity$1(G__32297),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32297,cljs.core.constant$keyword$98,cljs.core.array_seq([cljs.core.constant$keyword$99,cljs.core.constant$keyword$100,cljs.core.constant$keyword$101,cljs.core.constant$keyword$102], 0)),null));
});

cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){
var statearr_32314 = state;
(statearr_32314[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));

return statearr_32314;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){
while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);
var catch_block = cljs.core.constant$keyword$98.cljs$core$IFn$_invoke$arity$1(exception_frame);
var catch_exception = cljs.core.constant$keyword$99.cljs$core$IFn$_invoke$arity$1(exception_frame);
var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);
if(cljs.core.truth_((function (){var and__3803__auto__ = exception;
if(cljs.core.truth_(and__3803__auto__)){
return cljs.core.not(exception_frame);
} else {
return and__3803__auto__;
}
})())){
throw exception;
} else {
if(cljs.core.truth_((function (){var and__3803__auto__ = exception;
if(cljs.core.truth_(and__3803__auto__)){
var and__3803__auto____$1 = catch_block;
if(cljs.core.truth_(and__3803__auto____$1)){
return (exception instanceof catch_exception);
} else {
return and__3803__auto____$1;
}
} else {
return and__3803__auto__;
}
})())){
var statearr_32320 = state;
(statearr_32320[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);

(statearr_32320[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);

(statearr_32320[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);

(statearr_32320[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.constant$keyword$98,null,cljs.core.array_seq([cljs.core.constant$keyword$99,null], 0)));

return statearr_32320;
} else {
if(cljs.core.truth_((function (){var and__3803__auto__ = exception;
if(cljs.core.truth_(and__3803__auto__)){
return (cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.constant$keyword$100.cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else {
return and__3803__auto__;
}
})())){
var statearr_32321_32325 = state;
(statearr_32321_32325[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$102.cljs$core$IFn$_invoke$arity$1(exception_frame));


var G__32326 = state;
state = G__32326;
continue;
} else {
if(cljs.core.truth_((function (){var and__3803__auto__ = exception;
if(cljs.core.truth_(and__3803__auto__)){
var and__3803__auto____$1 = cljs.core.not(catch_block);
if(and__3803__auto____$1){
return cljs.core.constant$keyword$100.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__3803__auto____$1;
}
} else {
return and__3803__auto__;
}
})())){
var statearr_32322 = state;
(statearr_32322[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$100.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_32322[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$100,null));

return statearr_32322;
} else {
if(cljs.core.truth_((function (){var and__3803__auto__ = cljs.core.not(exception);
if(and__3803__auto__){
return cljs.core.constant$keyword$100.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__3803__auto__;
}
})())){
var statearr_32323 = state;
(statearr_32323[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$100.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_32323[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$100,null));

return statearr_32323;
} else {
if((cljs.core.not(exception)) && (cljs.core.not(cljs.core.constant$keyword$100.cljs$core$IFn$_invoke$arity$1(exception_frame)))){
var statearr_32324 = state;
(statearr_32324[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$101.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_32324[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$102.cljs$core$IFn$_invoke$arity$1(exception_frame));

return statearr_32324;
} else {
throw (new Error("No matching clause"));

}
}
}
}
}
}
break;
}
});

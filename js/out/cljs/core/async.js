// Compiled by ClojureScript 0.0-2850 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t28988 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28988 = (function (f,fn_handler,meta28989){
this.f = f;
this.fn_handler = fn_handler;
this.meta28989 = meta28989;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28988.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28988.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t28988.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t28988.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28990){
var self__ = this;
var _28990__$1 = this;
return self__.meta28989;
});

cljs.core.async.t28988.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28990,meta28989__$1){
var self__ = this;
var _28990__$1 = this;
return (new cljs.core.async.t28988(self__.f,self__.fn_handler,meta28989__$1));
});

cljs.core.async.t28988.cljs$lang$type = true;

cljs.core.async.t28988.cljs$lang$ctorStr = "cljs.core.async/t28988";

cljs.core.async.t28988.cljs$lang$ctorPrWriter = (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t28988");
});

cljs.core.async.__GT_t28988 = (function __GT_t28988(f__$1,fn_handler__$1,meta28989){
return (new cljs.core.async.t28988(f__$1,fn_handler__$1,meta28989));
});

}

return (new cljs.core.async.t28988(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__28992 = buff;
if(G__28992){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__28992.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__28992.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__28992);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__28992);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.cljs$core$IFn$_invoke$arity$1(null);
});
var chan__1 = (function (buf_or_n){
return chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)], 0)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(ret)){
var val_29009 = (function (){var G__29006 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29006) : cljs.core.deref.call(null,G__29006));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__29007_29010 = val_29009;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__29007_29010) : fn1.call(null,G__29007_29010));
} else {
cljs.core.async.impl.dispatch.run(((function (val_29009,ret){
return (function (){
var G__29008 = val_29009;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__29008) : fn1.call(null,G__29008));
});})(val_29009,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler(cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
var G__29019 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29019) : cljs.core.deref.call(null,G__29019));
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = (function (){var G__29020 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29020) : cljs.core.deref.call(null,G__29020));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__29021_29023 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__29021_29023) : fn1.call(null,G__29021_29023));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__29022 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__29022) : fn1.call(null,G__29022));
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__4702__auto___29024 = n;
var x_29025 = (0);
while(true){
if((x_29025 < n__4702__auto___29024)){
(a[x_29025] = (0));

var G__29026 = (x_29025 + (1));
x_29025 = G__29026;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__29027 = (i + (1));
i = G__29027;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = (function (){var G__29035 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__29035) : cljs.core.atom.call(null,G__29035));
})();
if(typeof cljs.core.async.t29036 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29036 = (function (flag,alt_flag,meta29037){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta29037 = meta29037;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29036.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29036.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__29039 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29039) : cljs.core.deref.call(null,G__29039));
});})(flag))
;

cljs.core.async.t29036.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__29040_29042 = self__.flag;
var G__29041_29043 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__29040_29042,G__29041_29043) : cljs.core.reset_BANG_.call(null,G__29040_29042,G__29041_29043));

return true;
});})(flag))
;

cljs.core.async.t29036.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29038){
var self__ = this;
var _29038__$1 = this;
return self__.meta29037;
});})(flag))
;

cljs.core.async.t29036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29038,meta29037__$1){
var self__ = this;
var _29038__$1 = this;
return (new cljs.core.async.t29036(self__.flag,self__.alt_flag,meta29037__$1));
});})(flag))
;

cljs.core.async.t29036.cljs$lang$type = true;

cljs.core.async.t29036.cljs$lang$ctorStr = "cljs.core.async/t29036";

cljs.core.async.t29036.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t29036");
});})(flag))
;

cljs.core.async.__GT_t29036 = ((function (flag){
return (function __GT_t29036(flag__$1,alt_flag__$1,meta29037){
return (new cljs.core.async.t29036(flag__$1,alt_flag__$1,meta29037));
});})(flag))
;

}

return (new cljs.core.async.t29036(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t29047 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29047 = (function (cb,flag,alt_handler,meta29048){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta29048 = meta29048;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29047.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29047.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t29047.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t29047.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29049){
var self__ = this;
var _29049__$1 = this;
return self__.meta29048;
});

cljs.core.async.t29047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29049,meta29048__$1){
var self__ = this;
var _29049__$1 = this;
return (new cljs.core.async.t29047(self__.cb,self__.flag,self__.alt_handler,meta29048__$1));
});

cljs.core.async.t29047.cljs$lang$type = true;

cljs.core.async.t29047.cljs$lang$ctorStr = "cljs.core.async/t29047";

cljs.core.async.t29047.cljs$lang$ctorPrWriter = (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t29047");
});

cljs.core.async.__GT_t29047 = (function __GT_t29047(cb__$1,flag__$1,alt_handler__$1,meta29048){
return (new cljs.core.async.t29047(cb__$1,flag__$1,alt_handler__$1,meta29048));
});

}

return (new cljs.core.async.t29047(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.constant$keyword$103.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__29057 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__29057) : port.call(null,G__29057));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__29058 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__29058) : port.call(null,G__29058));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29050_SHARP_){
var G__29059 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29050_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29059) : fret.call(null,G__29059));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29051_SHARP_){
var G__29060 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29051_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29060) : fret.call(null,G__29060));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__29061 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29061) : cljs.core.deref.call(null,G__29061));
})(),(function (){var or__3815__auto__ = wport;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29062 = (i + (1));
i = G__29062;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3815__auto__ = ret;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$7)){
var temp__4126__auto__ = (function (){var and__3803__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__3803__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__3803__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$7.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$7], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__29063){
var map__29065 = p__29063;
var map__29065__$1 = ((cljs.core.seq_QMARK_(map__29065))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29065):map__29065);
var opts = map__29065__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__29063 = null;
if (arguments.length > 1) {
var G__29066__i = 0, G__29066__a = new Array(arguments.length -  1);
while (G__29066__i < G__29066__a.length) {G__29066__a[G__29066__i] = arguments[G__29066__i + 1]; ++G__29066__i;}
  p__29063 = new cljs.core.IndexedSeq(G__29066__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__29063);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__29067){
var ports = cljs.core.first(arglist__29067);
var p__29063 = cljs.core.rest(arglist__29067);
return alts_BANG___delegate(ports,p__29063);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__16203__auto___29165 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16203__auto___29165){
return (function (){
var f__16204__auto__ = (function (){var switch__16123__auto__ = ((function (c__16203__auto___29165){
return (function (state_29141){
var state_val_29142 = (state_29141[(1)]);
if((state_val_29142 === (7))){
var inst_29137 = (state_29141[(2)]);
var state_29141__$1 = state_29141;
var statearr_29143_29166 = state_29141__$1;
(statearr_29143_29166[(2)] = inst_29137);

(statearr_29143_29166[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29142 === (1))){
var state_29141__$1 = state_29141;
var statearr_29144_29167 = state_29141__$1;
(statearr_29144_29167[(2)] = null);

(statearr_29144_29167[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29142 === (4))){
var inst_29120 = (state_29141[(7)]);
var inst_29120__$1 = (state_29141[(2)]);
var inst_29121 = (inst_29120__$1 == null);
var state_29141__$1 = (function (){var statearr_29145 = state_29141;
(statearr_29145[(7)] = inst_29120__$1);

return statearr_29145;
})();
if(cljs.core.truth_(inst_29121)){
var statearr_29146_29168 = state_29141__$1;
(statearr_29146_29168[(1)] = (5));

} else {
var statearr_29147_29169 = state_29141__$1;
(statearr_29147_29169[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29142 === (13))){
var state_29141__$1 = state_29141;
var statearr_29148_29170 = state_29141__$1;
(statearr_29148_29170[(2)] = null);

(statearr_29148_29170[(1)] = (14));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29142 === (6))){
var inst_29120 = (state_29141[(7)]);
var state_29141__$1 = state_29141;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29141__$1,(11),to,inst_29120);
} else {
if((state_val_29142 === (3))){
var inst_29139 = (state_29141[(2)]);
var state_29141__$1 = state_29141;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29141__$1,inst_29139);
} else {
if((state_val_29142 === (12))){
var state_29141__$1 = state_29141;
var statearr_29149_29171 = state_29141__$1;
(statearr_29149_29171[(2)] = null);

(statearr_29149_29171[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29142 === (2))){
var state_29141__$1 = state_29141;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29141__$1,(4),from);
} else {
if((state_val_29142 === (11))){
var inst_29130 = (state_29141[(2)]);
var state_29141__$1 = state_29141;
if(cljs.core.truth_(inst_29130)){
var statearr_29150_29172 = state_29141__$1;
(statearr_29150_29172[(1)] = (12));

} else {
var statearr_29151_29173 = state_29141__$1;
(statearr_29151_29173[(1)] = (13));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29142 === (9))){
var state_29141__$1 = state_29141;
var statearr_29152_29174 = state_29141__$1;
(statearr_29152_29174[(2)] = null);

(statearr_29152_29174[(1)] = (10));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29142 === (5))){
var state_29141__$1 = state_29141;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29153_29175 = state_29141__$1;
(statearr_29153_29175[(1)] = (8));

} else {
var statearr_29154_29176 = state_29141__$1;
(statearr_29154_29176[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29142 === (14))){
var inst_29135 = (state_29141[(2)]);
var state_29141__$1 = state_29141;
var statearr_29155_29177 = state_29141__$1;
(statearr_29155_29177[(2)] = inst_29135);

(statearr_29155_29177[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29142 === (10))){
var inst_29127 = (state_29141[(2)]);
var state_29141__$1 = state_29141;
var statearr_29156_29178 = state_29141__$1;
(statearr_29156_29178[(2)] = inst_29127);

(statearr_29156_29178[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29142 === (8))){
var inst_29124 = cljs.core.async.close_BANG_(to);
var state_29141__$1 = state_29141;
var statearr_29157_29179 = state_29141__$1;
(statearr_29157_29179[(2)] = inst_29124);

(statearr_29157_29179[(1)] = (10));


return cljs.core.constant$keyword$97;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16203__auto___29165))
;
return ((function (switch__16123__auto__,c__16203__auto___29165){
return (function() {
var state_machine__16124__auto__ = null;
var state_machine__16124__auto____0 = (function (){
var statearr_29161 = [null,null,null,null,null,null,null,null];
(statearr_29161[(0)] = state_machine__16124__auto__);

(statearr_29161[(1)] = (1));

return statearr_29161;
});
var state_machine__16124__auto____1 = (function (state_29141){
while(true){
var ret_value__16125__auto__ = (function (){try{while(true){
var result__16126__auto__ = switch__16123__auto__(state_29141);
if(cljs.core.keyword_identical_QMARK_(result__16126__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16126__auto__;
}
break;
}
}catch (e29162){if((e29162 instanceof Object)){
var ex__16127__auto__ = e29162;
var statearr_29163_29180 = state_29141;
(statearr_29163_29180[(5)] = ex__16127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29141);

return cljs.core.constant$keyword$97;
} else {
throw e29162;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16125__auto__,cljs.core.constant$keyword$97)){
var G__29181 = state_29141;
state_29141 = G__29181;
continue;
} else {
return ret_value__16125__auto__;
}
break;
}
});
state_machine__16124__auto__ = function(state_29141){
switch(arguments.length){
case 0:
return state_machine__16124__auto____0.call(this);
case 1:
return state_machine__16124__auto____1.call(this,state_29141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16124__auto____0;
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16124__auto____1;
return state_machine__16124__auto__;
})()
;})(switch__16123__auto__,c__16203__auto___29165))
})();
var state__16205__auto__ = (function (){var statearr_29164 = (function (){return (f__16204__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16204__auto__.cljs$core$IFn$_invoke$arity$0() : f__16204__auto__.call(null));
})();
(statearr_29164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16203__auto___29165);

return statearr_29164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16205__auto__);
});})(c__16203__auto___29165))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))], 0)))].join('')));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__29367){
var vec__29368 = p__29367;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29368,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29368,(1),null);
var job = vec__29368;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__16203__auto___29552 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16203__auto___29552,res,vec__29368,v,p,job,jobs,results){
return (function (){
var f__16204__auto__ = (function (){var switch__16123__auto__ = ((function (c__16203__auto___29552,res,vec__29368,v,p,job,jobs,results){
return (function (state_29373){
var state_val_29374 = (state_29373[(1)]);
if((state_val_29374 === (2))){
var inst_29370 = (state_29373[(2)]);
var inst_29371 = cljs.core.async.close_BANG_(res);
var state_29373__$1 = (function (){var statearr_29375 = state_29373;
(statearr_29375[(7)] = inst_29370);

return statearr_29375;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29373__$1,inst_29371);
} else {
if((state_val_29374 === (1))){
var state_29373__$1 = state_29373;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29373__$1,(2),res,v);
} else {
return null;
}
}
});})(c__16203__auto___29552,res,vec__29368,v,p,job,jobs,results))
;
return ((function (switch__16123__auto__,c__16203__auto___29552,res,vec__29368,v,p,job,jobs,results){
return (function() {
var state_machine__16124__auto__ = null;
var state_machine__16124__auto____0 = (function (){
var statearr_29379 = [null,null,null,null,null,null,null,null];
(statearr_29379[(0)] = state_machine__16124__auto__);

(statearr_29379[(1)] = (1));

return statearr_29379;
});
var state_machine__16124__auto____1 = (function (state_29373){
while(true){
var ret_value__16125__auto__ = (function (){try{while(true){
var result__16126__auto__ = switch__16123__auto__(state_29373);
if(cljs.core.keyword_identical_QMARK_(result__16126__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16126__auto__;
}
break;
}
}catch (e29380){if((e29380 instanceof Object)){
var ex__16127__auto__ = e29380;
var statearr_29381_29553 = state_29373;
(statearr_29381_29553[(5)] = ex__16127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29373);

return cljs.core.constant$keyword$97;
} else {
throw e29380;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16125__auto__,cljs.core.constant$keyword$97)){
var G__29554 = state_29373;
state_29373 = G__29554;
continue;
} else {
return ret_value__16125__auto__;
}
break;
}
});
state_machine__16124__auto__ = function(state_29373){
switch(arguments.length){
case 0:
return state_machine__16124__auto____0.call(this);
case 1:
return state_machine__16124__auto____1.call(this,state_29373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16124__auto____0;
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16124__auto____1;
return state_machine__16124__auto__;
})()
;})(switch__16123__auto__,c__16203__auto___29552,res,vec__29368,v,p,job,jobs,results))
})();
var state__16205__auto__ = (function (){var statearr_29382 = (function (){return (f__16204__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16204__auto__.cljs$core$IFn$_invoke$arity$0() : f__16204__auto__.call(null));
})();
(statearr_29382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16203__auto___29552);

return statearr_29382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16205__auto__);
});})(c__16203__auto___29552,res,vec__29368,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29383){
var vec__29384 = p__29383;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29384,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29384,(1),null);
var job = vec__29384;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__29385_29555 = v;
var G__29386_29556 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__29385_29555,G__29386_29556) : xf.call(null,G__29385_29555,G__29386_29556));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4702__auto___29557 = n;
var __29558 = (0);
while(true){
if((__29558 < n__4702__auto___29557)){
var G__29387_29559 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29387_29559) {
case "async":
var c__16203__auto___29561 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__29558,c__16203__auto___29561,G__29387_29559,n__4702__auto___29557,jobs,results,process,async){
return (function (){
var f__16204__auto__ = (function (){var switch__16123__auto__ = ((function (__29558,c__16203__auto___29561,G__29387_29559,n__4702__auto___29557,jobs,results,process,async){
return (function (state_29400){
var state_val_29401 = (state_29400[(1)]);
if((state_val_29401 === (7))){
var inst_29396 = (state_29400[(2)]);
var state_29400__$1 = state_29400;
var statearr_29402_29562 = state_29400__$1;
(statearr_29402_29562[(2)] = inst_29396);

(statearr_29402_29562[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29401 === (6))){
var state_29400__$1 = state_29400;
var statearr_29403_29563 = state_29400__$1;
(statearr_29403_29563[(2)] = null);

(statearr_29403_29563[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29401 === (5))){
var state_29400__$1 = state_29400;
var statearr_29404_29564 = state_29400__$1;
(statearr_29404_29564[(2)] = null);

(statearr_29404_29564[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29401 === (4))){
var inst_29390 = (state_29400[(2)]);
var inst_29391 = async(inst_29390);
var state_29400__$1 = state_29400;
if(cljs.core.truth_(inst_29391)){
var statearr_29405_29565 = state_29400__$1;
(statearr_29405_29565[(1)] = (5));

} else {
var statearr_29406_29566 = state_29400__$1;
(statearr_29406_29566[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29401 === (3))){
var inst_29398 = (state_29400[(2)]);
var state_29400__$1 = state_29400;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29400__$1,inst_29398);
} else {
if((state_val_29401 === (2))){
var state_29400__$1 = state_29400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29400__$1,(4),jobs);
} else {
if((state_val_29401 === (1))){
var state_29400__$1 = state_29400;
var statearr_29407_29567 = state_29400__$1;
(statearr_29407_29567[(2)] = null);

(statearr_29407_29567[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
return null;
}
}
}
}
}
}
}
});})(__29558,c__16203__auto___29561,G__29387_29559,n__4702__auto___29557,jobs,results,process,async))
;
return ((function (__29558,switch__16123__auto__,c__16203__auto___29561,G__29387_29559,n__4702__auto___29557,jobs,results,process,async){
return (function() {
var state_machine__16124__auto__ = null;
var state_machine__16124__auto____0 = (function (){
var statearr_29411 = [null,null,null,null,null,null,null];
(statearr_29411[(0)] = state_machine__16124__auto__);

(statearr_29411[(1)] = (1));

return statearr_29411;
});
var state_machine__16124__auto____1 = (function (state_29400){
while(true){
var ret_value__16125__auto__ = (function (){try{while(true){
var result__16126__auto__ = switch__16123__auto__(state_29400);
if(cljs.core.keyword_identical_QMARK_(result__16126__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16126__auto__;
}
break;
}
}catch (e29412){if((e29412 instanceof Object)){
var ex__16127__auto__ = e29412;
var statearr_29413_29568 = state_29400;
(statearr_29413_29568[(5)] = ex__16127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29400);

return cljs.core.constant$keyword$97;
} else {
throw e29412;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16125__auto__,cljs.core.constant$keyword$97)){
var G__29569 = state_29400;
state_29400 = G__29569;
continue;
} else {
return ret_value__16125__auto__;
}
break;
}
});
state_machine__16124__auto__ = function(state_29400){
switch(arguments.length){
case 0:
return state_machine__16124__auto____0.call(this);
case 1:
return state_machine__16124__auto____1.call(this,state_29400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16124__auto____0;
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16124__auto____1;
return state_machine__16124__auto__;
})()
;})(__29558,switch__16123__auto__,c__16203__auto___29561,G__29387_29559,n__4702__auto___29557,jobs,results,process,async))
})();
var state__16205__auto__ = (function (){var statearr_29414 = (function (){return (f__16204__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16204__auto__.cljs$core$IFn$_invoke$arity$0() : f__16204__auto__.call(null));
})();
(statearr_29414[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16203__auto___29561);

return statearr_29414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16205__auto__);
});})(__29558,c__16203__auto___29561,G__29387_29559,n__4702__auto___29557,jobs,results,process,async))
);


break;
case "compute":
var c__16203__auto___29570 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__29558,c__16203__auto___29570,G__29387_29559,n__4702__auto___29557,jobs,results,process,async){
return (function (){
var f__16204__auto__ = (function (){var switch__16123__auto__ = ((function (__29558,c__16203__auto___29570,G__29387_29559,n__4702__auto___29557,jobs,results,process,async){
return (function (state_29427){
var state_val_29428 = (state_29427[(1)]);
if((state_val_29428 === (7))){
var inst_29423 = (state_29427[(2)]);
var state_29427__$1 = state_29427;
var statearr_29429_29571 = state_29427__$1;
(statearr_29429_29571[(2)] = inst_29423);

(statearr_29429_29571[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29428 === (6))){
var state_29427__$1 = state_29427;
var statearr_29430_29572 = state_29427__$1;
(statearr_29430_29572[(2)] = null);

(statearr_29430_29572[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29428 === (5))){
var state_29427__$1 = state_29427;
var statearr_29431_29573 = state_29427__$1;
(statearr_29431_29573[(2)] = null);

(statearr_29431_29573[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29428 === (4))){
var inst_29417 = (state_29427[(2)]);
var inst_29418 = process(inst_29417);
var state_29427__$1 = state_29427;
if(cljs.core.truth_(inst_29418)){
var statearr_29432_29574 = state_29427__$1;
(statearr_29432_29574[(1)] = (5));

} else {
var statearr_29433_29575 = state_29427__$1;
(statearr_29433_29575[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29428 === (3))){
var inst_29425 = (state_29427[(2)]);
var state_29427__$1 = state_29427;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29427__$1,inst_29425);
} else {
if((state_val_29428 === (2))){
var state_29427__$1 = state_29427;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29427__$1,(4),jobs);
} else {
if((state_val_29428 === (1))){
var state_29427__$1 = state_29427;
var statearr_29434_29576 = state_29427__$1;
(statearr_29434_29576[(2)] = null);

(statearr_29434_29576[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
return null;
}
}
}
}
}
}
}
});})(__29558,c__16203__auto___29570,G__29387_29559,n__4702__auto___29557,jobs,results,process,async))
;
return ((function (__29558,switch__16123__auto__,c__16203__auto___29570,G__29387_29559,n__4702__auto___29557,jobs,results,process,async){
return (function() {
var state_machine__16124__auto__ = null;
var state_machine__16124__auto____0 = (function (){
var statearr_29438 = [null,null,null,null,null,null,null];
(statearr_29438[(0)] = state_machine__16124__auto__);

(statearr_29438[(1)] = (1));

return statearr_29438;
});
var state_machine__16124__auto____1 = (function (state_29427){
while(true){
var ret_value__16125__auto__ = (function (){try{while(true){
var result__16126__auto__ = switch__16123__auto__(state_29427);
if(cljs.core.keyword_identical_QMARK_(result__16126__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16126__auto__;
}
break;
}
}catch (e29439){if((e29439 instanceof Object)){
var ex__16127__auto__ = e29439;
var statearr_29440_29577 = state_29427;
(statearr_29440_29577[(5)] = ex__16127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29427);

return cljs.core.constant$keyword$97;
} else {
throw e29439;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16125__auto__,cljs.core.constant$keyword$97)){
var G__29578 = state_29427;
state_29427 = G__29578;
continue;
} else {
return ret_value__16125__auto__;
}
break;
}
});
state_machine__16124__auto__ = function(state_29427){
switch(arguments.length){
case 0:
return state_machine__16124__auto____0.call(this);
case 1:
return state_machine__16124__auto____1.call(this,state_29427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16124__auto____0;
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16124__auto____1;
return state_machine__16124__auto__;
})()
;})(__29558,switch__16123__auto__,c__16203__auto___29570,G__29387_29559,n__4702__auto___29557,jobs,results,process,async))
})();
var state__16205__auto__ = (function (){var statearr_29441 = (function (){return (f__16204__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16204__auto__.cljs$core$IFn$_invoke$arity$0() : f__16204__auto__.call(null));
})();
(statearr_29441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16203__auto___29570);

return statearr_29441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16205__auto__);
});})(__29558,c__16203__auto___29570,G__29387_29559,n__4702__auto___29557,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__29579 = (__29558 + (1));
__29558 = G__29579;
continue;
} else {
}
break;
}

var c__16203__auto___29580 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16203__auto___29580,jobs,results,process,async){
return (function (){
var f__16204__auto__ = (function (){var switch__16123__auto__ = ((function (c__16203__auto___29580,jobs,results,process,async){
return (function (state_29463){
var state_val_29464 = (state_29463[(1)]);
if((state_val_29464 === (9))){
var inst_29456 = (state_29463[(2)]);
var state_29463__$1 = (function (){var statearr_29465 = state_29463;
(statearr_29465[(7)] = inst_29456);

return statearr_29465;
})();
var statearr_29466_29581 = state_29463__$1;
(statearr_29466_29581[(2)] = null);

(statearr_29466_29581[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29464 === (8))){
var inst_29449 = (state_29463[(8)]);
var inst_29454 = (state_29463[(2)]);
var state_29463__$1 = (function (){var statearr_29467 = state_29463;
(statearr_29467[(9)] = inst_29454);

return statearr_29467;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29463__$1,(9),results,inst_29449);
} else {
if((state_val_29464 === (7))){
var inst_29459 = (state_29463[(2)]);
var state_29463__$1 = state_29463;
var statearr_29468_29582 = state_29463__$1;
(statearr_29468_29582[(2)] = inst_29459);

(statearr_29468_29582[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29464 === (6))){
var inst_29449 = (state_29463[(8)]);
var inst_29444 = (state_29463[(10)]);
var inst_29449__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_29450 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29451 = [inst_29444,inst_29449__$1];
var inst_29452 = (new cljs.core.PersistentVector(null,2,(5),inst_29450,inst_29451,null));
var state_29463__$1 = (function (){var statearr_29469 = state_29463;
(statearr_29469[(8)] = inst_29449__$1);

return statearr_29469;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29463__$1,(8),jobs,inst_29452);
} else {
if((state_val_29464 === (5))){
var inst_29447 = cljs.core.async.close_BANG_(jobs);
var state_29463__$1 = state_29463;
var statearr_29470_29583 = state_29463__$1;
(statearr_29470_29583[(2)] = inst_29447);

(statearr_29470_29583[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29464 === (4))){
var inst_29444 = (state_29463[(10)]);
var inst_29444__$1 = (state_29463[(2)]);
var inst_29445 = (inst_29444__$1 == null);
var state_29463__$1 = (function (){var statearr_29471 = state_29463;
(statearr_29471[(10)] = inst_29444__$1);

return statearr_29471;
})();
if(cljs.core.truth_(inst_29445)){
var statearr_29472_29584 = state_29463__$1;
(statearr_29472_29584[(1)] = (5));

} else {
var statearr_29473_29585 = state_29463__$1;
(statearr_29473_29585[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29464 === (3))){
var inst_29461 = (state_29463[(2)]);
var state_29463__$1 = state_29463;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29463__$1,inst_29461);
} else {
if((state_val_29464 === (2))){
var state_29463__$1 = state_29463;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29463__$1,(4),from);
} else {
if((state_val_29464 === (1))){
var state_29463__$1 = state_29463;
var statearr_29474_29586 = state_29463__$1;
(statearr_29474_29586[(2)] = null);

(statearr_29474_29586[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__16203__auto___29580,jobs,results,process,async))
;
return ((function (switch__16123__auto__,c__16203__auto___29580,jobs,results,process,async){
return (function() {
var state_machine__16124__auto__ = null;
var state_machine__16124__auto____0 = (function (){
var statearr_29478 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29478[(0)] = state_machine__16124__auto__);

(statearr_29478[(1)] = (1));

return statearr_29478;
});
var state_machine__16124__auto____1 = (function (state_29463){
while(true){
var ret_value__16125__auto__ = (function (){try{while(true){
var result__16126__auto__ = switch__16123__auto__(state_29463);
if(cljs.core.keyword_identical_QMARK_(result__16126__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16126__auto__;
}
break;
}
}catch (e29479){if((e29479 instanceof Object)){
var ex__16127__auto__ = e29479;
var statearr_29480_29587 = state_29463;
(statearr_29480_29587[(5)] = ex__16127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29463);

return cljs.core.constant$keyword$97;
} else {
throw e29479;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16125__auto__,cljs.core.constant$keyword$97)){
var G__29588 = state_29463;
state_29463 = G__29588;
continue;
} else {
return ret_value__16125__auto__;
}
break;
}
});
state_machine__16124__auto__ = function(state_29463){
switch(arguments.length){
case 0:
return state_machine__16124__auto____0.call(this);
case 1:
return state_machine__16124__auto____1.call(this,state_29463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16124__auto____0;
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16124__auto____1;
return state_machine__16124__auto__;
})()
;})(switch__16123__auto__,c__16203__auto___29580,jobs,results,process,async))
})();
var state__16205__auto__ = (function (){var statearr_29481 = (function (){return (f__16204__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16204__auto__.cljs$core$IFn$_invoke$arity$0() : f__16204__auto__.call(null));
})();
(statearr_29481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16203__auto___29580);

return statearr_29481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16205__auto__);
});})(c__16203__auto___29580,jobs,results,process,async))
);


var c__16203__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16203__auto__,jobs,results,process,async){
return (function (){
var f__16204__auto__ = (function (){var switch__16123__auto__ = ((function (c__16203__auto__,jobs,results,process,async){
return (function (state_29519){
var state_val_29520 = (state_29519[(1)]);
if((state_val_29520 === (7))){
var inst_29515 = (state_29519[(2)]);
var state_29519__$1 = state_29519;
var statearr_29521_29589 = state_29519__$1;
(statearr_29521_29589[(2)] = inst_29515);

(statearr_29521_29589[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29520 === (20))){
var state_29519__$1 = state_29519;
var statearr_29522_29590 = state_29519__$1;
(statearr_29522_29590[(2)] = null);

(statearr_29522_29590[(1)] = (21));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29520 === (1))){
var state_29519__$1 = state_29519;
var statearr_29523_29591 = state_29519__$1;
(statearr_29523_29591[(2)] = null);

(statearr_29523_29591[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29520 === (4))){
var inst_29484 = (state_29519[(7)]);
var inst_29484__$1 = (state_29519[(2)]);
var inst_29485 = (inst_29484__$1 == null);
var state_29519__$1 = (function (){var statearr_29524 = state_29519;
(statearr_29524[(7)] = inst_29484__$1);

return statearr_29524;
})();
if(cljs.core.truth_(inst_29485)){
var statearr_29525_29592 = state_29519__$1;
(statearr_29525_29592[(1)] = (5));

} else {
var statearr_29526_29593 = state_29519__$1;
(statearr_29526_29593[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29520 === (15))){
var inst_29497 = (state_29519[(8)]);
var state_29519__$1 = state_29519;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29519__$1,(18),to,inst_29497);
} else {
if((state_val_29520 === (21))){
var inst_29510 = (state_29519[(2)]);
var state_29519__$1 = state_29519;
var statearr_29527_29594 = state_29519__$1;
(statearr_29527_29594[(2)] = inst_29510);

(statearr_29527_29594[(1)] = (13));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29520 === (13))){
var inst_29512 = (state_29519[(2)]);
var state_29519__$1 = (function (){var statearr_29528 = state_29519;
(statearr_29528[(9)] = inst_29512);

return statearr_29528;
})();
var statearr_29529_29595 = state_29519__$1;
(statearr_29529_29595[(2)] = null);

(statearr_29529_29595[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29520 === (6))){
var inst_29484 = (state_29519[(7)]);
var state_29519__$1 = state_29519;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29519__$1,(11),inst_29484);
} else {
if((state_val_29520 === (17))){
var inst_29505 = (state_29519[(2)]);
var state_29519__$1 = state_29519;
if(cljs.core.truth_(inst_29505)){
var statearr_29530_29596 = state_29519__$1;
(statearr_29530_29596[(1)] = (19));

} else {
var statearr_29531_29597 = state_29519__$1;
(statearr_29531_29597[(1)] = (20));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29520 === (3))){
var inst_29517 = (state_29519[(2)]);
var state_29519__$1 = state_29519;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29519__$1,inst_29517);
} else {
if((state_val_29520 === (12))){
var inst_29494 = (state_29519[(10)]);
var state_29519__$1 = state_29519;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29519__$1,(14),inst_29494);
} else {
if((state_val_29520 === (2))){
var state_29519__$1 = state_29519;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29519__$1,(4),results);
} else {
if((state_val_29520 === (19))){
var state_29519__$1 = state_29519;
var statearr_29532_29598 = state_29519__$1;
(statearr_29532_29598[(2)] = null);

(statearr_29532_29598[(1)] = (12));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29520 === (11))){
var inst_29494 = (state_29519[(2)]);
var state_29519__$1 = (function (){var statearr_29533 = state_29519;
(statearr_29533[(10)] = inst_29494);

return statearr_29533;
})();
var statearr_29534_29599 = state_29519__$1;
(statearr_29534_29599[(2)] = null);

(statearr_29534_29599[(1)] = (12));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29520 === (9))){
var state_29519__$1 = state_29519;
var statearr_29535_29600 = state_29519__$1;
(statearr_29535_29600[(2)] = null);

(statearr_29535_29600[(1)] = (10));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29520 === (5))){
var state_29519__$1 = state_29519;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29536_29601 = state_29519__$1;
(statearr_29536_29601[(1)] = (8));

} else {
var statearr_29537_29602 = state_29519__$1;
(statearr_29537_29602[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29520 === (14))){
var inst_29497 = (state_29519[(8)]);
var inst_29499 = (state_29519[(11)]);
var inst_29497__$1 = (state_29519[(2)]);
var inst_29498 = (inst_29497__$1 == null);
var inst_29499__$1 = cljs.core.not(inst_29498);
var state_29519__$1 = (function (){var statearr_29538 = state_29519;
(statearr_29538[(8)] = inst_29497__$1);

(statearr_29538[(11)] = inst_29499__$1);

return statearr_29538;
})();
if(inst_29499__$1){
var statearr_29539_29603 = state_29519__$1;
(statearr_29539_29603[(1)] = (15));

} else {
var statearr_29540_29604 = state_29519__$1;
(statearr_29540_29604[(1)] = (16));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29520 === (16))){
var inst_29499 = (state_29519[(11)]);
var state_29519__$1 = state_29519;
var statearr_29541_29605 = state_29519__$1;
(statearr_29541_29605[(2)] = inst_29499);

(statearr_29541_29605[(1)] = (17));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29520 === (10))){
var inst_29491 = (state_29519[(2)]);
var state_29519__$1 = state_29519;
var statearr_29542_29606 = state_29519__$1;
(statearr_29542_29606[(2)] = inst_29491);

(statearr_29542_29606[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29520 === (18))){
var inst_29502 = (state_29519[(2)]);
var state_29519__$1 = state_29519;
var statearr_29543_29607 = state_29519__$1;
(statearr_29543_29607[(2)] = inst_29502);

(statearr_29543_29607[(1)] = (17));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29520 === (8))){
var inst_29488 = cljs.core.async.close_BANG_(to);
var state_29519__$1 = state_29519;
var statearr_29544_29608 = state_29519__$1;
(statearr_29544_29608[(2)] = inst_29488);

(statearr_29544_29608[(1)] = (10));


return cljs.core.constant$keyword$97;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16203__auto__,jobs,results,process,async))
;
return ((function (switch__16123__auto__,c__16203__auto__,jobs,results,process,async){
return (function() {
var state_machine__16124__auto__ = null;
var state_machine__16124__auto____0 = (function (){
var statearr_29548 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29548[(0)] = state_machine__16124__auto__);

(statearr_29548[(1)] = (1));

return statearr_29548;
});
var state_machine__16124__auto____1 = (function (state_29519){
while(true){
var ret_value__16125__auto__ = (function (){try{while(true){
var result__16126__auto__ = switch__16123__auto__(state_29519);
if(cljs.core.keyword_identical_QMARK_(result__16126__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16126__auto__;
}
break;
}
}catch (e29549){if((e29549 instanceof Object)){
var ex__16127__auto__ = e29549;
var statearr_29550_29609 = state_29519;
(statearr_29550_29609[(5)] = ex__16127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29519);

return cljs.core.constant$keyword$97;
} else {
throw e29549;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16125__auto__,cljs.core.constant$keyword$97)){
var G__29610 = state_29519;
state_29519 = G__29610;
continue;
} else {
return ret_value__16125__auto__;
}
break;
}
});
state_machine__16124__auto__ = function(state_29519){
switch(arguments.length){
case 0:
return state_machine__16124__auto____0.call(this);
case 1:
return state_machine__16124__auto____1.call(this,state_29519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16124__auto____0;
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16124__auto____1;
return state_machine__16124__auto__;
})()
;})(switch__16123__auto__,c__16203__auto__,jobs,results,process,async))
})();
var state__16205__auto__ = (function (){var statearr_29551 = (function (){return (f__16204__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16204__auto__.cljs$core$IFn$_invoke$arity$0() : f__16204__auto__.call(null));
})();
(statearr_29551[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16203__auto__);

return statearr_29551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16205__auto__);
});})(c__16203__auto__,jobs,results,process,async))
);

return c__16203__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.constant$keyword$104);
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.constant$keyword$105);
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__16203__auto___29733 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16203__auto___29733,tc,fc){
return (function (){
var f__16204__auto__ = (function (){var switch__16123__auto__ = ((function (c__16203__auto___29733,tc,fc){
return (function (state_29707){
var state_val_29708 = (state_29707[(1)]);
if((state_val_29708 === (7))){
var inst_29703 = (state_29707[(2)]);
var state_29707__$1 = state_29707;
var statearr_29709_29734 = state_29707__$1;
(statearr_29709_29734[(2)] = inst_29703);

(statearr_29709_29734[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29708 === (1))){
var state_29707__$1 = state_29707;
var statearr_29710_29735 = state_29707__$1;
(statearr_29710_29735[(2)] = null);

(statearr_29710_29735[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29708 === (4))){
var inst_29684 = (state_29707[(7)]);
var inst_29684__$1 = (state_29707[(2)]);
var inst_29685 = (inst_29684__$1 == null);
var state_29707__$1 = (function (){var statearr_29711 = state_29707;
(statearr_29711[(7)] = inst_29684__$1);

return statearr_29711;
})();
if(cljs.core.truth_(inst_29685)){
var statearr_29712_29736 = state_29707__$1;
(statearr_29712_29736[(1)] = (5));

} else {
var statearr_29713_29737 = state_29707__$1;
(statearr_29713_29737[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29708 === (13))){
var state_29707__$1 = state_29707;
var statearr_29714_29738 = state_29707__$1;
(statearr_29714_29738[(2)] = null);

(statearr_29714_29738[(1)] = (14));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29708 === (6))){
var inst_29684 = (state_29707[(7)]);
var inst_29690 = (function (){var G__29715 = inst_29684;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__29715) : p.call(null,G__29715));
})();
var state_29707__$1 = state_29707;
if(cljs.core.truth_(inst_29690)){
var statearr_29716_29739 = state_29707__$1;
(statearr_29716_29739[(1)] = (9));

} else {
var statearr_29717_29740 = state_29707__$1;
(statearr_29717_29740[(1)] = (10));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29708 === (3))){
var inst_29705 = (state_29707[(2)]);
var state_29707__$1 = state_29707;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29707__$1,inst_29705);
} else {
if((state_val_29708 === (12))){
var state_29707__$1 = state_29707;
var statearr_29718_29741 = state_29707__$1;
(statearr_29718_29741[(2)] = null);

(statearr_29718_29741[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29708 === (2))){
var state_29707__$1 = state_29707;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29707__$1,(4),ch);
} else {
if((state_val_29708 === (11))){
var inst_29684 = (state_29707[(7)]);
var inst_29694 = (state_29707[(2)]);
var state_29707__$1 = state_29707;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29707__$1,(8),inst_29694,inst_29684);
} else {
if((state_val_29708 === (9))){
var state_29707__$1 = state_29707;
var statearr_29719_29742 = state_29707__$1;
(statearr_29719_29742[(2)] = tc);

(statearr_29719_29742[(1)] = (11));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29708 === (5))){
var inst_29687 = cljs.core.async.close_BANG_(tc);
var inst_29688 = cljs.core.async.close_BANG_(fc);
var state_29707__$1 = (function (){var statearr_29720 = state_29707;
(statearr_29720[(8)] = inst_29687);

return statearr_29720;
})();
var statearr_29721_29743 = state_29707__$1;
(statearr_29721_29743[(2)] = inst_29688);

(statearr_29721_29743[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29708 === (14))){
var inst_29701 = (state_29707[(2)]);
var state_29707__$1 = state_29707;
var statearr_29722_29744 = state_29707__$1;
(statearr_29722_29744[(2)] = inst_29701);

(statearr_29722_29744[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29708 === (10))){
var state_29707__$1 = state_29707;
var statearr_29723_29745 = state_29707__$1;
(statearr_29723_29745[(2)] = fc);

(statearr_29723_29745[(1)] = (11));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29708 === (8))){
var inst_29696 = (state_29707[(2)]);
var state_29707__$1 = state_29707;
if(cljs.core.truth_(inst_29696)){
var statearr_29724_29746 = state_29707__$1;
(statearr_29724_29746[(1)] = (12));

} else {
var statearr_29725_29747 = state_29707__$1;
(statearr_29725_29747[(1)] = (13));

}

return cljs.core.constant$keyword$97;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16203__auto___29733,tc,fc))
;
return ((function (switch__16123__auto__,c__16203__auto___29733,tc,fc){
return (function() {
var state_machine__16124__auto__ = null;
var state_machine__16124__auto____0 = (function (){
var statearr_29729 = [null,null,null,null,null,null,null,null,null];
(statearr_29729[(0)] = state_machine__16124__auto__);

(statearr_29729[(1)] = (1));

return statearr_29729;
});
var state_machine__16124__auto____1 = (function (state_29707){
while(true){
var ret_value__16125__auto__ = (function (){try{while(true){
var result__16126__auto__ = switch__16123__auto__(state_29707);
if(cljs.core.keyword_identical_QMARK_(result__16126__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16126__auto__;
}
break;
}
}catch (e29730){if((e29730 instanceof Object)){
var ex__16127__auto__ = e29730;
var statearr_29731_29748 = state_29707;
(statearr_29731_29748[(5)] = ex__16127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29707);

return cljs.core.constant$keyword$97;
} else {
throw e29730;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16125__auto__,cljs.core.constant$keyword$97)){
var G__29749 = state_29707;
state_29707 = G__29749;
continue;
} else {
return ret_value__16125__auto__;
}
break;
}
});
state_machine__16124__auto__ = function(state_29707){
switch(arguments.length){
case 0:
return state_machine__16124__auto____0.call(this);
case 1:
return state_machine__16124__auto____1.call(this,state_29707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16124__auto____0;
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16124__auto____1;
return state_machine__16124__auto__;
})()
;})(switch__16123__auto__,c__16203__auto___29733,tc,fc))
})();
var state__16205__auto__ = (function (){var statearr_29732 = (function (){return (f__16204__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16204__auto__.cljs$core$IFn$_invoke$arity$0() : f__16204__auto__.call(null));
})();
(statearr_29732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16203__auto___29733);

return statearr_29732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16205__auto__);
});})(c__16203__auto___29733,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__16203__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16203__auto__){
return (function (){
var f__16204__auto__ = (function (){var switch__16123__auto__ = ((function (c__16203__auto__){
return (function (state_29798){
var state_val_29799 = (state_29798[(1)]);
if((state_val_29799 === (7))){
var inst_29794 = (state_29798[(2)]);
var state_29798__$1 = state_29798;
var statearr_29800_29818 = state_29798__$1;
(statearr_29800_29818[(2)] = inst_29794);

(statearr_29800_29818[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29799 === (6))){
var inst_29787 = (state_29798[(7)]);
var inst_29784 = (state_29798[(8)]);
var inst_29791 = (function (){var G__29801 = inst_29784;
var G__29802 = inst_29787;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__29801,G__29802) : f.call(null,G__29801,G__29802));
})();
var inst_29784__$1 = inst_29791;
var state_29798__$1 = (function (){var statearr_29803 = state_29798;
(statearr_29803[(8)] = inst_29784__$1);

return statearr_29803;
})();
var statearr_29804_29819 = state_29798__$1;
(statearr_29804_29819[(2)] = null);

(statearr_29804_29819[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29799 === (5))){
var inst_29784 = (state_29798[(8)]);
var state_29798__$1 = state_29798;
var statearr_29805_29820 = state_29798__$1;
(statearr_29805_29820[(2)] = inst_29784);

(statearr_29805_29820[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29799 === (4))){
var inst_29787 = (state_29798[(7)]);
var inst_29787__$1 = (state_29798[(2)]);
var inst_29788 = (inst_29787__$1 == null);
var state_29798__$1 = (function (){var statearr_29806 = state_29798;
(statearr_29806[(7)] = inst_29787__$1);

return statearr_29806;
})();
if(cljs.core.truth_(inst_29788)){
var statearr_29807_29821 = state_29798__$1;
(statearr_29807_29821[(1)] = (5));

} else {
var statearr_29808_29822 = state_29798__$1;
(statearr_29808_29822[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29799 === (3))){
var inst_29796 = (state_29798[(2)]);
var state_29798__$1 = state_29798;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29798__$1,inst_29796);
} else {
if((state_val_29799 === (2))){
var state_29798__$1 = state_29798;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29798__$1,(4),ch);
} else {
if((state_val_29799 === (1))){
var inst_29784 = init;
var state_29798__$1 = (function (){var statearr_29809 = state_29798;
(statearr_29809[(8)] = inst_29784);

return statearr_29809;
})();
var statearr_29810_29823 = state_29798__$1;
(statearr_29810_29823[(2)] = null);

(statearr_29810_29823[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
return null;
}
}
}
}
}
}
}
});})(c__16203__auto__))
;
return ((function (switch__16123__auto__,c__16203__auto__){
return (function() {
var state_machine__16124__auto__ = null;
var state_machine__16124__auto____0 = (function (){
var statearr_29814 = [null,null,null,null,null,null,null,null,null];
(statearr_29814[(0)] = state_machine__16124__auto__);

(statearr_29814[(1)] = (1));

return statearr_29814;
});
var state_machine__16124__auto____1 = (function (state_29798){
while(true){
var ret_value__16125__auto__ = (function (){try{while(true){
var result__16126__auto__ = switch__16123__auto__(state_29798);
if(cljs.core.keyword_identical_QMARK_(result__16126__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16126__auto__;
}
break;
}
}catch (e29815){if((e29815 instanceof Object)){
var ex__16127__auto__ = e29815;
var statearr_29816_29824 = state_29798;
(statearr_29816_29824[(5)] = ex__16127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29798);

return cljs.core.constant$keyword$97;
} else {
throw e29815;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16125__auto__,cljs.core.constant$keyword$97)){
var G__29825 = state_29798;
state_29798 = G__29825;
continue;
} else {
return ret_value__16125__auto__;
}
break;
}
});
state_machine__16124__auto__ = function(state_29798){
switch(arguments.length){
case 0:
return state_machine__16124__auto____0.call(this);
case 1:
return state_machine__16124__auto____1.call(this,state_29798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16124__auto____0;
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16124__auto____1;
return state_machine__16124__auto__;
})()
;})(switch__16123__auto__,c__16203__auto__))
})();
var state__16205__auto__ = (function (){var statearr_29817 = (function (){return (f__16204__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16204__auto__.cljs$core$IFn$_invoke$arity$0() : f__16204__auto__.call(null));
})();
(statearr_29817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16203__auto__);

return statearr_29817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16205__auto__);
});})(c__16203__auto__))
);

return c__16203__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__16203__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16203__auto__){
return (function (){
var f__16204__auto__ = (function (){var switch__16123__auto__ = ((function (c__16203__auto__){
return (function (state_29902){
var state_val_29903 = (state_29902[(1)]);
if((state_val_29903 === (7))){
var inst_29884 = (state_29902[(2)]);
var state_29902__$1 = state_29902;
var statearr_29904_29927 = state_29902__$1;
(statearr_29904_29927[(2)] = inst_29884);

(statearr_29904_29927[(1)] = (6));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29903 === (1))){
var inst_29878 = cljs.core.seq(coll);
var inst_29879 = inst_29878;
var state_29902__$1 = (function (){var statearr_29905 = state_29902;
(statearr_29905[(7)] = inst_29879);

return statearr_29905;
})();
var statearr_29906_29928 = state_29902__$1;
(statearr_29906_29928[(2)] = null);

(statearr_29906_29928[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29903 === (4))){
var inst_29879 = (state_29902[(7)]);
var inst_29882 = cljs.core.first(inst_29879);
var state_29902__$1 = state_29902;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29902__$1,(7),ch,inst_29882);
} else {
if((state_val_29903 === (13))){
var inst_29896 = (state_29902[(2)]);
var state_29902__$1 = state_29902;
var statearr_29907_29929 = state_29902__$1;
(statearr_29907_29929[(2)] = inst_29896);

(statearr_29907_29929[(1)] = (10));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29903 === (6))){
var inst_29887 = (state_29902[(2)]);
var state_29902__$1 = state_29902;
if(cljs.core.truth_(inst_29887)){
var statearr_29908_29930 = state_29902__$1;
(statearr_29908_29930[(1)] = (8));

} else {
var statearr_29909_29931 = state_29902__$1;
(statearr_29909_29931[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29903 === (3))){
var inst_29900 = (state_29902[(2)]);
var state_29902__$1 = state_29902;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29902__$1,inst_29900);
} else {
if((state_val_29903 === (12))){
var state_29902__$1 = state_29902;
var statearr_29910_29932 = state_29902__$1;
(statearr_29910_29932[(2)] = null);

(statearr_29910_29932[(1)] = (13));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29903 === (2))){
var inst_29879 = (state_29902[(7)]);
var state_29902__$1 = state_29902;
if(cljs.core.truth_(inst_29879)){
var statearr_29911_29933 = state_29902__$1;
(statearr_29911_29933[(1)] = (4));

} else {
var statearr_29912_29934 = state_29902__$1;
(statearr_29912_29934[(1)] = (5));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29903 === (11))){
var inst_29893 = cljs.core.async.close_BANG_(ch);
var state_29902__$1 = state_29902;
var statearr_29913_29935 = state_29902__$1;
(statearr_29913_29935[(2)] = inst_29893);

(statearr_29913_29935[(1)] = (13));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29903 === (9))){
var state_29902__$1 = state_29902;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29914_29936 = state_29902__$1;
(statearr_29914_29936[(1)] = (11));

} else {
var statearr_29915_29937 = state_29902__$1;
(statearr_29915_29937[(1)] = (12));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29903 === (5))){
var inst_29879 = (state_29902[(7)]);
var state_29902__$1 = state_29902;
var statearr_29916_29938 = state_29902__$1;
(statearr_29916_29938[(2)] = inst_29879);

(statearr_29916_29938[(1)] = (6));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29903 === (10))){
var inst_29898 = (state_29902[(2)]);
var state_29902__$1 = state_29902;
var statearr_29917_29939 = state_29902__$1;
(statearr_29917_29939[(2)] = inst_29898);

(statearr_29917_29939[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29903 === (8))){
var inst_29879 = (state_29902[(7)]);
var inst_29889 = cljs.core.next(inst_29879);
var inst_29879__$1 = inst_29889;
var state_29902__$1 = (function (){var statearr_29918 = state_29902;
(statearr_29918[(7)] = inst_29879__$1);

return statearr_29918;
})();
var statearr_29919_29940 = state_29902__$1;
(statearr_29919_29940[(2)] = null);

(statearr_29919_29940[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16203__auto__))
;
return ((function (switch__16123__auto__,c__16203__auto__){
return (function() {
var state_machine__16124__auto__ = null;
var state_machine__16124__auto____0 = (function (){
var statearr_29923 = [null,null,null,null,null,null,null,null];
(statearr_29923[(0)] = state_machine__16124__auto__);

(statearr_29923[(1)] = (1));

return statearr_29923;
});
var state_machine__16124__auto____1 = (function (state_29902){
while(true){
var ret_value__16125__auto__ = (function (){try{while(true){
var result__16126__auto__ = switch__16123__auto__(state_29902);
if(cljs.core.keyword_identical_QMARK_(result__16126__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16126__auto__;
}
break;
}
}catch (e29924){if((e29924 instanceof Object)){
var ex__16127__auto__ = e29924;
var statearr_29925_29941 = state_29902;
(statearr_29925_29941[(5)] = ex__16127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29902);

return cljs.core.constant$keyword$97;
} else {
throw e29924;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16125__auto__,cljs.core.constant$keyword$97)){
var G__29942 = state_29902;
state_29902 = G__29942;
continue;
} else {
return ret_value__16125__auto__;
}
break;
}
});
state_machine__16124__auto__ = function(state_29902){
switch(arguments.length){
case 0:
return state_machine__16124__auto____0.call(this);
case 1:
return state_machine__16124__auto____1.call(this,state_29902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16124__auto____0;
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16124__auto____1;
return state_machine__16124__auto__;
})()
;})(switch__16123__auto__,c__16203__auto__))
})();
var state__16205__auto__ = (function (){var statearr_29926 = (function (){return (f__16204__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16204__auto__.cljs$core$IFn$_invoke$arity$0() : f__16204__auto__.call(null));
})();
(statearr_29926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16203__auto__);

return statearr_29926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16205__auto__);
});})(c__16203__auto__))
);

return c__16203__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj29944 = {};
return obj29944;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3803__auto__ = _;
if(and__3803__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3803__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4459__auto__ = (((_ == null))?null:_);
return (function (){var or__3815__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__29948 = x__4459__auto__;
return goog.typeOf(G__29948);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj29950 = {};
return obj29950;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3803__auto__ = m;
if(and__3803__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3803__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4459__auto__ = (((m == null))?null:m);
return (function (){var or__3815__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__29954 = x__4459__auto__;
return goog.typeOf(G__29954);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3803__auto__ = m;
if(and__3803__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3803__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4459__auto__ = (((m == null))?null:m);
return (function (){var or__3815__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__29958 = x__4459__auto__;
return goog.typeOf(G__29958);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3803__auto__ = m;
if(and__3803__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3803__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4459__auto__ = (((m == null))?null:m);
return (function (){var or__3815__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__29962 = x__4459__auto__;
return goog.typeOf(G__29962);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = (function (){var G__30192 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30192) : cljs.core.atom.call(null,G__30192));
})();
var m = (function (){
if(typeof cljs.core.async.t30193 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30193 = (function (cs,ch,mult,meta30194){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta30194 = meta30194;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30193.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t30193.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t30193.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t30193.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__30196_30421 = self__.cs;
var G__30197_30422 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__30196_30421,G__30197_30422) : cljs.core.reset_BANG_.call(null,G__30196_30421,G__30197_30422));

return null;
});})(cs))
;

cljs.core.async.t30193.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30193.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t30193.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30195){
var self__ = this;
var _30195__$1 = this;
return self__.meta30194;
});})(cs))
;

cljs.core.async.t30193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30195,meta30194__$1){
var self__ = this;
var _30195__$1 = this;
return (new cljs.core.async.t30193(self__.cs,self__.ch,self__.mult,meta30194__$1));
});})(cs))
;

cljs.core.async.t30193.cljs$lang$type = true;

cljs.core.async.t30193.cljs$lang$ctorStr = "cljs.core.async/t30193";

cljs.core.async.t30193.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t30193");
});})(cs))
;

cljs.core.async.__GT_t30193 = ((function (cs){
return (function __GT_t30193(cs__$1,ch__$1,mult__$1,meta30194){
return (new cljs.core.async.t30193(cs__$1,ch__$1,mult__$1,meta30194));
});})(cs))
;

}

return (new cljs.core.async.t30193(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__30198 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30198) : cljs.core.atom.call(null,G__30198));
})();
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__16203__auto___30423 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16203__auto___30423,cs,m,dchan,dctr,done){
return (function (){
var f__16204__auto__ = (function (){var switch__16123__auto__ = ((function (c__16203__auto___30423,cs,m,dchan,dctr,done){
return (function (state_30329){
var state_val_30330 = (state_30329[(1)]);
if((state_val_30330 === (7))){
var inst_30325 = (state_30329[(2)]);
var state_30329__$1 = state_30329;
var statearr_30331_30424 = state_30329__$1;
(statearr_30331_30424[(2)] = inst_30325);

(statearr_30331_30424[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30330 === (20))){
var inst_30230 = (state_30329[(7)]);
var inst_30240 = cljs.core.first(inst_30230);
var inst_30241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30240,(0),null);
var inst_30242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30240,(1),null);
var state_30329__$1 = (function (){var statearr_30332 = state_30329;
(statearr_30332[(8)] = inst_30241);

return statearr_30332;
})();
if(cljs.core.truth_(inst_30242)){
var statearr_30333_30425 = state_30329__$1;
(statearr_30333_30425[(1)] = (22));

} else {
var statearr_30334_30426 = state_30329__$1;
(statearr_30334_30426[(1)] = (23));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30330 === (27))){
var inst_30277 = (state_30329[(9)]);
var inst_30201 = (state_30329[(10)]);
var inst_30272 = (state_30329[(11)]);
var inst_30270 = (state_30329[(12)]);
var inst_30277__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30270,inst_30272);
var inst_30278 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30277__$1,inst_30201,done);
var state_30329__$1 = (function (){var statearr_30335 = state_30329;
(statearr_30335[(9)] = inst_30277__$1);

return statearr_30335;
})();
if(cljs.core.truth_(inst_30278)){
var statearr_30336_30427 = state_30329__$1;
(statearr_30336_30427[(1)] = (30));

} else {
var statearr_30337_30428 = state_30329__$1;
(statearr_30337_30428[(1)] = (31));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30330 === (1))){
var state_30329__$1 = state_30329;
var statearr_30338_30429 = state_30329__$1;
(statearr_30338_30429[(2)] = null);

(statearr_30338_30429[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30330 === (24))){
var inst_30230 = (state_30329[(7)]);
var inst_30247 = (state_30329[(2)]);
var inst_30248 = cljs.core.next(inst_30230);
var inst_30210 = inst_30248;
var inst_30211 = null;
var inst_30212 = (0);
var inst_30213 = (0);
var state_30329__$1 = (function (){var statearr_30339 = state_30329;
(statearr_30339[(13)] = inst_30212);

(statearr_30339[(14)] = inst_30211);

(statearr_30339[(15)] = inst_30247);

(statearr_30339[(16)] = inst_30210);

(statearr_30339[(17)] = inst_30213);

return statearr_30339;
})();
var statearr_30340_30430 = state_30329__$1;
(statearr_30340_30430[(2)] = null);

(statearr_30340_30430[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30330 === (39))){
var state_30329__$1 = state_30329;
var statearr_30344_30431 = state_30329__$1;
(statearr_30344_30431[(2)] = null);

(statearr_30344_30431[(1)] = (41));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30330 === (4))){
var inst_30201 = (state_30329[(10)]);
var inst_30201__$1 = (state_30329[(2)]);
var inst_30202 = (inst_30201__$1 == null);
var state_30329__$1 = (function (){var statearr_30345 = state_30329;
(statearr_30345[(10)] = inst_30201__$1);

return statearr_30345;
})();
if(cljs.core.truth_(inst_30202)){
var statearr_30346_30432 = state_30329__$1;
(statearr_30346_30432[(1)] = (5));

} else {
var statearr_30347_30433 = state_30329__$1;
(statearr_30347_30433[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30330 === (15))){
var inst_30212 = (state_30329[(13)]);
var inst_30211 = (state_30329[(14)]);
var inst_30210 = (state_30329[(16)]);
var inst_30213 = (state_30329[(17)]);
var inst_30226 = (state_30329[(2)]);
var inst_30227 = (inst_30213 + (1));
var tmp30341 = inst_30212;
var tmp30342 = inst_30211;
var tmp30343 = inst_30210;
var inst_30210__$1 = tmp30343;
var inst_30211__$1 = tmp30342;
var inst_30212__$1 = tmp30341;
var inst_30213__$1 = inst_30227;
var state_30329__$1 = (function (){var statearr_30348 = state_30329;
(statearr_30348[(13)] = inst_30212__$1);

(statearr_30348[(14)] = inst_30211__$1);

(statearr_30348[(16)] = inst_30210__$1);

(statearr_30348[(17)] = inst_30213__$1);

(statearr_30348[(18)] = inst_30226);

return statearr_30348;
})();
var statearr_30349_30434 = state_30329__$1;
(statearr_30349_30434[(2)] = null);

(statearr_30349_30434[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30330 === (21))){
var inst_30251 = (state_30329[(2)]);
var state_30329__$1 = state_30329;
var statearr_30353_30435 = state_30329__$1;
(statearr_30353_30435[(2)] = inst_30251);

(statearr_30353_30435[(1)] = (18));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30330 === (31))){
var inst_30277 = (state_30329[(9)]);
var inst_30281 = done(null);
var inst_30282 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30277);
var state_30329__$1 = (function (){var statearr_30354 = state_30329;
(statearr_30354[(19)] = inst_30281);

return statearr_30354;
})();
var statearr_30355_30436 = state_30329__$1;
(statearr_30355_30436[(2)] = inst_30282);

(statearr_30355_30436[(1)] = (32));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30330 === (32))){
var inst_30269 = (state_30329[(20)]);
var inst_30272 = (state_30329[(11)]);
var inst_30271 = (state_30329[(21)]);
var inst_30270 = (state_30329[(12)]);
var inst_30284 = (state_30329[(2)]);
var inst_30285 = (inst_30272 + (1));
var tmp30350 = inst_30269;
var tmp30351 = inst_30271;
var tmp30352 = inst_30270;
var inst_30269__$1 = tmp30350;
var inst_30270__$1 = tmp30352;
var inst_30271__$1 = tmp30351;
var inst_30272__$1 = inst_30285;
var state_30329__$1 = (function (){var statearr_30356 = state_30329;
(statearr_30356[(20)] = inst_30269__$1);

(statearr_30356[(11)] = inst_30272__$1);

(statearr_30356[(21)] = inst_30271__$1);

(statearr_30356[(12)] = inst_30270__$1);

(statearr_30356[(22)] = inst_30284);

return statearr_30356;
})();
var statearr_30357_30437 = state_30329__$1;
(statearr_30357_30437[(2)] = null);

(statearr_30357_30437[(1)] = (25));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30330 === (40))){
var inst_30297 = (state_30329[(23)]);
var inst_30301 = done(null);
var inst_30302 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30297);
var state_30329__$1 = (function (){var statearr_30358 = state_30329;
(statearr_30358[(24)] = inst_30301);

return statearr_30358;
})();
var statearr_30359_30438 = state_30329__$1;
(statearr_30359_30438[(2)] = inst_30302);

(statearr_30359_30438[(1)] = (41));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30330 === (33))){
var inst_30288 = (state_30329[(25)]);
var inst_30290 = cljs.core.chunked_seq_QMARK_(inst_30288);
var state_30329__$1 = state_30329;
if(inst_30290){
var statearr_30360_30439 = state_30329__$1;
(statearr_30360_30439[(1)] = (36));

} else {
var statearr_30361_30440 = state_30329__$1;
(statearr_30361_30440[(1)] = (37));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30330 === (13))){
var inst_30220 = (state_30329[(26)]);
var inst_30223 = cljs.core.async.close_BANG_(inst_30220);
var state_30329__$1 = state_30329;
var statearr_30362_30441 = state_30329__$1;
(statearr_30362_30441[(2)] = inst_30223);

(statearr_30362_30441[(1)] = (15));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30330 === (22))){
var inst_30241 = (state_30329[(8)]);
var inst_30244 = cljs.core.async.close_BANG_(inst_30241);
var state_30329__$1 = state_30329;
var statearr_30363_30442 = state_30329__$1;
(statearr_30363_30442[(2)] = inst_30244);

(statearr_30363_30442[(1)] = (24));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30330 === (36))){
var inst_30288 = (state_30329[(25)]);
var inst_30292 = cljs.core.chunk_first(inst_30288);
var inst_30293 = cljs.core.chunk_rest(inst_30288);
var inst_30294 = cljs.core.count(inst_30292);
var inst_30269 = inst_30293;
var inst_30270 = inst_30292;
var inst_30271 = inst_30294;
var inst_30272 = (0);
var state_30329__$1 = (function (){var statearr_30364 = state_30329;
(statearr_30364[(20)] = inst_30269);

(statearr_30364[(11)] = inst_30272);

(statearr_30364[(21)] = inst_30271);

(statearr_30364[(12)] = inst_30270);

return statearr_30364;
})();
var statearr_30365_30443 = state_30329__$1;
(statearr_30365_30443[(2)] = null);

(statearr_30365_30443[(1)] = (25));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30330 === (41))){
var inst_30288 = (state_30329[(25)]);
var inst_30304 = (state_30329[(2)]);
var inst_30305 = cljs.core.next(inst_30288);
var inst_30269 = inst_30305;
var inst_30270 = null;
var inst_30271 = (0);
var inst_30272 = (0);
var state_30329__$1 = (function (){var statearr_30366 = state_30329;
(statearr_30366[(20)] = inst_30269);

(statearr_30366[(11)] = inst_30272);

(statearr_30366[(21)] = inst_30271);

(statearr_30366[(12)] = inst_30270);

(statearr_30366[(27)] = inst_30304);

return statearr_30366;
})();
var statearr_30367_30444 = state_30329__$1;
(statearr_30367_30444[(2)] = null);

(statearr_30367_30444[(1)] = (25));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30330 === (43))){
var state_30329__$1 = state_30329;
var statearr_30368_30445 = state_30329__$1;
(statearr_30368_30445[(2)] = null);

(statearr_30368_30445[(1)] = (44));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30330 === (29))){
var inst_30313 = (state_30329[(2)]);
var state_30329__$1 = state_30329;
var statearr_30369_30446 = state_30329__$1;
(statearr_30369_30446[(2)] = inst_30313);

(statearr_30369_30446[(1)] = (26));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30330 === (44))){
var inst_30322 = (state_30329[(2)]);
var state_30329__$1 = (function (){var statearr_30370 = state_30329;
(statearr_30370[(28)] = inst_30322);

return statearr_30370;
})();
var statearr_30371_30447 = state_30329__$1;
(statearr_30371_30447[(2)] = null);

(statearr_30371_30447[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30330 === (6))){
var inst_30261 = (state_30329[(29)]);
var inst_30260 = (function (){var G__30372 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30372) : cljs.core.deref.call(null,G__30372));
})();
var inst_30261__$1 = cljs.core.keys(inst_30260);
var inst_30262 = cljs.core.count(inst_30261__$1);
var inst_30263 = (function (){var G__30373 = dctr;
var G__30374 = inst_30262;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__30373,G__30374) : cljs.core.reset_BANG_.call(null,G__30373,G__30374));
})();
var inst_30268 = cljs.core.seq(inst_30261__$1);
var inst_30269 = inst_30268;
var inst_30270 = null;
var inst_30271 = (0);
var inst_30272 = (0);
var state_30329__$1 = (function (){var statearr_30375 = state_30329;
(statearr_30375[(20)] = inst_30269);

(statearr_30375[(11)] = inst_30272);

(statearr_30375[(21)] = inst_30271);

(statearr_30375[(12)] = inst_30270);

(statearr_30375[(30)] = inst_30263);

(statearr_30375[(29)] = inst_30261__$1);

return statearr_30375;
})();
var statearr_30376_30448 = state_30329__$1;
(statearr_30376_30448[(2)] = null);

(statearr_30376_30448[(1)] = (25));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30330 === (28))){
var inst_30269 = (state_30329[(20)]);
var inst_30288 = (state_30329[(25)]);
var inst_30288__$1 = cljs.core.seq(inst_30269);
var state_30329__$1 = (function (){var statearr_30377 = state_30329;
(statearr_30377[(25)] = inst_30288__$1);

return statearr_30377;
})();
if(inst_30288__$1){
var statearr_30378_30449 = state_30329__$1;
(statearr_30378_30449[(1)] = (33));

} else {
var statearr_30379_30450 = state_30329__$1;
(statearr_30379_30450[(1)] = (34));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30330 === (25))){
var inst_30272 = (state_30329[(11)]);
var inst_30271 = (state_30329[(21)]);
var inst_30274 = (inst_30272 < inst_30271);
var inst_30275 = inst_30274;
var state_30329__$1 = state_30329;
if(cljs.core.truth_(inst_30275)){
var statearr_30380_30451 = state_30329__$1;
(statearr_30380_30451[(1)] = (27));

} else {
var statearr_30381_30452 = state_30329__$1;
(statearr_30381_30452[(1)] = (28));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30330 === (34))){
var state_30329__$1 = state_30329;
var statearr_30382_30453 = state_30329__$1;
(statearr_30382_30453[(2)] = null);

(statearr_30382_30453[(1)] = (35));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30330 === (17))){
var state_30329__$1 = state_30329;
var statearr_30383_30454 = state_30329__$1;
(statearr_30383_30454[(2)] = null);

(statearr_30383_30454[(1)] = (18));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30330 === (3))){
var inst_30327 = (state_30329[(2)]);
var state_30329__$1 = state_30329;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30329__$1,inst_30327);
} else {
if((state_val_30330 === (12))){
var inst_30256 = (state_30329[(2)]);
var state_30329__$1 = state_30329;
var statearr_30384_30455 = state_30329__$1;
(statearr_30384_30455[(2)] = inst_30256);

(statearr_30384_30455[(1)] = (9));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30330 === (2))){
var state_30329__$1 = state_30329;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30329__$1,(4),ch);
} else {
if((state_val_30330 === (23))){
var state_30329__$1 = state_30329;
var statearr_30385_30456 = state_30329__$1;
(statearr_30385_30456[(2)] = null);

(statearr_30385_30456[(1)] = (24));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30330 === (35))){
var inst_30311 = (state_30329[(2)]);
var state_30329__$1 = state_30329;
var statearr_30386_30457 = state_30329__$1;
(statearr_30386_30457[(2)] = inst_30311);

(statearr_30386_30457[(1)] = (29));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30330 === (19))){
var inst_30230 = (state_30329[(7)]);
var inst_30234 = cljs.core.chunk_first(inst_30230);
var inst_30235 = cljs.core.chunk_rest(inst_30230);
var inst_30236 = cljs.core.count(inst_30234);
var inst_30210 = inst_30235;
var inst_30211 = inst_30234;
var inst_30212 = inst_30236;
var inst_30213 = (0);
var state_30329__$1 = (function (){var statearr_30387 = state_30329;
(statearr_30387[(13)] = inst_30212);

(statearr_30387[(14)] = inst_30211);

(statearr_30387[(16)] = inst_30210);

(statearr_30387[(17)] = inst_30213);

return statearr_30387;
})();
var statearr_30388_30458 = state_30329__$1;
(statearr_30388_30458[(2)] = null);

(statearr_30388_30458[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30330 === (11))){
var inst_30230 = (state_30329[(7)]);
var inst_30210 = (state_30329[(16)]);
var inst_30230__$1 = cljs.core.seq(inst_30210);
var state_30329__$1 = (function (){var statearr_30389 = state_30329;
(statearr_30389[(7)] = inst_30230__$1);

return statearr_30389;
})();
if(inst_30230__$1){
var statearr_30390_30459 = state_30329__$1;
(statearr_30390_30459[(1)] = (16));

} else {
var statearr_30391_30460 = state_30329__$1;
(statearr_30391_30460[(1)] = (17));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30330 === (9))){
var inst_30258 = (state_30329[(2)]);
var state_30329__$1 = state_30329;
var statearr_30392_30461 = state_30329__$1;
(statearr_30392_30461[(2)] = inst_30258);

(statearr_30392_30461[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30330 === (5))){
var inst_30208 = (function (){var G__30393 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30393) : cljs.core.deref.call(null,G__30393));
})();
var inst_30209 = cljs.core.seq(inst_30208);
var inst_30210 = inst_30209;
var inst_30211 = null;
var inst_30212 = (0);
var inst_30213 = (0);
var state_30329__$1 = (function (){var statearr_30394 = state_30329;
(statearr_30394[(13)] = inst_30212);

(statearr_30394[(14)] = inst_30211);

(statearr_30394[(16)] = inst_30210);

(statearr_30394[(17)] = inst_30213);

return statearr_30394;
})();
var statearr_30395_30462 = state_30329__$1;
(statearr_30395_30462[(2)] = null);

(statearr_30395_30462[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30330 === (14))){
var state_30329__$1 = state_30329;
var statearr_30396_30463 = state_30329__$1;
(statearr_30396_30463[(2)] = null);

(statearr_30396_30463[(1)] = (15));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30330 === (45))){
var inst_30319 = (state_30329[(2)]);
var state_30329__$1 = state_30329;
var statearr_30397_30464 = state_30329__$1;
(statearr_30397_30464[(2)] = inst_30319);

(statearr_30397_30464[(1)] = (44));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30330 === (26))){
var inst_30261 = (state_30329[(29)]);
var inst_30315 = (state_30329[(2)]);
var inst_30316 = cljs.core.seq(inst_30261);
var state_30329__$1 = (function (){var statearr_30398 = state_30329;
(statearr_30398[(31)] = inst_30315);

return statearr_30398;
})();
if(inst_30316){
var statearr_30399_30465 = state_30329__$1;
(statearr_30399_30465[(1)] = (42));

} else {
var statearr_30400_30466 = state_30329__$1;
(statearr_30400_30466[(1)] = (43));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30330 === (16))){
var inst_30230 = (state_30329[(7)]);
var inst_30232 = cljs.core.chunked_seq_QMARK_(inst_30230);
var state_30329__$1 = state_30329;
if(inst_30232){
var statearr_30401_30467 = state_30329__$1;
(statearr_30401_30467[(1)] = (19));

} else {
var statearr_30402_30468 = state_30329__$1;
(statearr_30402_30468[(1)] = (20));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30330 === (38))){
var inst_30308 = (state_30329[(2)]);
var state_30329__$1 = state_30329;
var statearr_30403_30469 = state_30329__$1;
(statearr_30403_30469[(2)] = inst_30308);

(statearr_30403_30469[(1)] = (35));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30330 === (30))){
var state_30329__$1 = state_30329;
var statearr_30404_30470 = state_30329__$1;
(statearr_30404_30470[(2)] = null);

(statearr_30404_30470[(1)] = (32));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30330 === (10))){
var inst_30211 = (state_30329[(14)]);
var inst_30213 = (state_30329[(17)]);
var inst_30219 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30211,inst_30213);
var inst_30220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30219,(0),null);
var inst_30221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30219,(1),null);
var state_30329__$1 = (function (){var statearr_30405 = state_30329;
(statearr_30405[(26)] = inst_30220);

return statearr_30405;
})();
if(cljs.core.truth_(inst_30221)){
var statearr_30406_30471 = state_30329__$1;
(statearr_30406_30471[(1)] = (13));

} else {
var statearr_30407_30472 = state_30329__$1;
(statearr_30407_30472[(1)] = (14));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30330 === (18))){
var inst_30254 = (state_30329[(2)]);
var state_30329__$1 = state_30329;
var statearr_30408_30473 = state_30329__$1;
(statearr_30408_30473[(2)] = inst_30254);

(statearr_30408_30473[(1)] = (12));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30330 === (42))){
var state_30329__$1 = state_30329;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30329__$1,(45),dchan);
} else {
if((state_val_30330 === (37))){
var inst_30297 = (state_30329[(23)]);
var inst_30201 = (state_30329[(10)]);
var inst_30288 = (state_30329[(25)]);
var inst_30297__$1 = cljs.core.first(inst_30288);
var inst_30298 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30297__$1,inst_30201,done);
var state_30329__$1 = (function (){var statearr_30409 = state_30329;
(statearr_30409[(23)] = inst_30297__$1);

return statearr_30409;
})();
if(cljs.core.truth_(inst_30298)){
var statearr_30410_30474 = state_30329__$1;
(statearr_30410_30474[(1)] = (39));

} else {
var statearr_30411_30475 = state_30329__$1;
(statearr_30411_30475[(1)] = (40));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30330 === (8))){
var inst_30212 = (state_30329[(13)]);
var inst_30213 = (state_30329[(17)]);
var inst_30215 = (inst_30213 < inst_30212);
var inst_30216 = inst_30215;
var state_30329__$1 = state_30329;
if(cljs.core.truth_(inst_30216)){
var statearr_30412_30476 = state_30329__$1;
(statearr_30412_30476[(1)] = (10));

} else {
var statearr_30413_30477 = state_30329__$1;
(statearr_30413_30477[(1)] = (11));

}

return cljs.core.constant$keyword$97;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16203__auto___30423,cs,m,dchan,dctr,done))
;
return ((function (switch__16123__auto__,c__16203__auto___30423,cs,m,dchan,dctr,done){
return (function() {
var state_machine__16124__auto__ = null;
var state_machine__16124__auto____0 = (function (){
var statearr_30417 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30417[(0)] = state_machine__16124__auto__);

(statearr_30417[(1)] = (1));

return statearr_30417;
});
var state_machine__16124__auto____1 = (function (state_30329){
while(true){
var ret_value__16125__auto__ = (function (){try{while(true){
var result__16126__auto__ = switch__16123__auto__(state_30329);
if(cljs.core.keyword_identical_QMARK_(result__16126__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16126__auto__;
}
break;
}
}catch (e30418){if((e30418 instanceof Object)){
var ex__16127__auto__ = e30418;
var statearr_30419_30478 = state_30329;
(statearr_30419_30478[(5)] = ex__16127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30329);

return cljs.core.constant$keyword$97;
} else {
throw e30418;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16125__auto__,cljs.core.constant$keyword$97)){
var G__30479 = state_30329;
state_30329 = G__30479;
continue;
} else {
return ret_value__16125__auto__;
}
break;
}
});
state_machine__16124__auto__ = function(state_30329){
switch(arguments.length){
case 0:
return state_machine__16124__auto____0.call(this);
case 1:
return state_machine__16124__auto____1.call(this,state_30329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16124__auto____0;
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16124__auto____1;
return state_machine__16124__auto__;
})()
;})(switch__16123__auto__,c__16203__auto___30423,cs,m,dchan,dctr,done))
})();
var state__16205__auto__ = (function (){var statearr_30420 = (function (){return (f__16204__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16204__auto__.cljs$core$IFn$_invoke$arity$0() : f__16204__auto__.call(null));
})();
(statearr_30420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16203__auto___30423);

return statearr_30420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16205__auto__);
});})(c__16203__auto___30423,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

cljs.core.async.Mix = (function (){var obj30484 = {};
return obj30484;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3803__auto__ = m;
if(and__3803__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3803__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4459__auto__ = (((m == null))?null:m);
return (function (){var or__3815__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__30488 = x__4459__auto__;
return goog.typeOf(G__30488);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3803__auto__ = m;
if(and__3803__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3803__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4459__auto__ = (((m == null))?null:m);
return (function (){var or__3815__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__30492 = x__4459__auto__;
return goog.typeOf(G__30492);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3803__auto__ = m;
if(and__3803__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3803__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4459__auto__ = (((m == null))?null:m);
return (function (){var or__3815__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__30496 = x__4459__auto__;
return goog.typeOf(G__30496);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3803__auto__ = m;
if(and__3803__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3803__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4459__auto__ = (((m == null))?null:m);
return (function (){var or__3815__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__30500 = x__4459__auto__;
return goog.typeOf(G__30500);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3803__auto__ = m;
if(and__3803__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3803__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4459__auto__ = (((m == null))?null:m);
return (function (){var or__3815__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__30504 = x__4459__auto__;
return goog.typeOf(G__30504);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__30505){
var map__30511 = p__30505;
var map__30511__$1 = ((cljs.core.seq_QMARK_(map__30511))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30511):map__30511);
var opts = map__30511__$1;
var statearr_30512_30516 = state;
(statearr_30512_30516[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__30511,map__30511__$1,opts){
return (function (val){
var statearr_30513_30517 = state;
(statearr_30513_30517[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__30511,map__30511__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_30514_30518 = state;
(statearr_30514_30518[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__30515 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30515) : cljs.core.deref.call(null,G__30515));
})());


return cljs.core.constant$keyword$97;
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__30505 = null;
if (arguments.length > 3) {
var G__30519__i = 0, G__30519__a = new Array(arguments.length -  3);
while (G__30519__i < G__30519__a.length) {G__30519__a[G__30519__i] = arguments[G__30519__i + 3]; ++G__30519__i;}
  p__30505 = new cljs.core.IndexedSeq(G__30519__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__30505);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__30520){
var state = cljs.core.first(arglist__30520);
arglist__30520 = cljs.core.next(arglist__30520);
var cont_block = cljs.core.first(arglist__30520);
arglist__30520 = cljs.core.next(arglist__30520);
var ports = cljs.core.first(arglist__30520);
var p__30505 = cljs.core.rest(arglist__30520);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__30505);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = (function (){var G__30654 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30654) : cljs.core.atom.call(null,G__30654));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$106,null,cljs.core.constant$keyword$107,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$108);
var solo_mode = (function (){var G__30655 = cljs.core.constant$keyword$107;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30655) : cljs.core.atom.call(null,G__30655));
})();
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((function (){var G__30656 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__30656) : attr.call(null,G__30656));
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (function (){var G__30657 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30657) : cljs.core.deref.call(null,G__30657));
})();
var mode = (function (){var G__30658 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30658) : cljs.core.deref.call(null,G__30658));
})();
var solos = pick(cljs.core.constant$keyword$108,chs);
var pauses = pick(cljs.core.constant$keyword$106,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$109,solos,cljs.core.constant$keyword$110,pick(cljs.core.constant$keyword$107,chs),cljs.core.constant$keyword$111,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$106)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t30659 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30659 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30660){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30660 = meta30660;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30659.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t30659.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30659.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30659.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__30662_30787 = self__.cs;
var G__30663_30788 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__30662_30787,G__30663_30788) : cljs.core.reset_BANG_.call(null,G__30662_30787,G__30663_30788));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30659.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30659.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__30664 = mode;
return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__30664) : self__.solo_modes.call(null,G__30664));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0)))].join('')));
}

var G__30665_30789 = self__.solo_mode;
var G__30666_30790 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__30665_30789,G__30666_30790) : cljs.core.reset_BANG_.call(null,G__30665_30789,G__30666_30790));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30659.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30659.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30659.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30661){
var self__ = this;
var _30661__$1 = this;
return self__.meta30660;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30661,meta30660__$1){
var self__ = this;
var _30661__$1 = this;
return (new cljs.core.async.t30659(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30660__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30659.cljs$lang$type = true;

cljs.core.async.t30659.cljs$lang$ctorStr = "cljs.core.async/t30659";

cljs.core.async.t30659.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t30659");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t30659 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t30659(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30660){
return (new cljs.core.async.t30659(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30660));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t30659(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16203__auto___30791 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16203__auto___30791,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16204__auto__ = (function (){var switch__16123__auto__ = ((function (c__16203__auto___30791,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30738){
var state_val_30739 = (state_30738[(1)]);
if((state_val_30739 === (7))){
var inst_30680 = (state_30738[(7)]);
var inst_30685 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30680);
var state_30738__$1 = state_30738;
var statearr_30740_30792 = state_30738__$1;
(statearr_30740_30792[(2)] = inst_30685);

(statearr_30740_30792[(1)] = (9));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30739 === (20))){
var inst_30695 = (state_30738[(8)]);
var state_30738__$1 = state_30738;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30738__$1,(23),out,inst_30695);
} else {
if((state_val_30739 === (1))){
var inst_30670 = (state_30738[(9)]);
var inst_30670__$1 = calc_state();
var inst_30671 = cljs.core.seq_QMARK_(inst_30670__$1);
var state_30738__$1 = (function (){var statearr_30741 = state_30738;
(statearr_30741[(9)] = inst_30670__$1);

return statearr_30741;
})();
if(inst_30671){
var statearr_30742_30793 = state_30738__$1;
(statearr_30742_30793[(1)] = (2));

} else {
var statearr_30743_30794 = state_30738__$1;
(statearr_30743_30794[(1)] = (3));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30739 === (24))){
var inst_30688 = (state_30738[(10)]);
var inst_30680 = inst_30688;
var state_30738__$1 = (function (){var statearr_30744 = state_30738;
(statearr_30744[(7)] = inst_30680);

return statearr_30744;
})();
var statearr_30745_30795 = state_30738__$1;
(statearr_30745_30795[(2)] = null);

(statearr_30745_30795[(1)] = (5));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30739 === (4))){
var inst_30670 = (state_30738[(9)]);
var inst_30676 = (state_30738[(2)]);
var inst_30677 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30676,cljs.core.constant$keyword$111);
var inst_30678 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30676,cljs.core.constant$keyword$110);
var inst_30679 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30676,cljs.core.constant$keyword$109);
var inst_30680 = inst_30670;
var state_30738__$1 = (function (){var statearr_30746 = state_30738;
(statearr_30746[(11)] = inst_30677);

(statearr_30746[(12)] = inst_30678);

(statearr_30746[(7)] = inst_30680);

(statearr_30746[(13)] = inst_30679);

return statearr_30746;
})();
var statearr_30747_30796 = state_30738__$1;
(statearr_30747_30796[(2)] = null);

(statearr_30747_30796[(1)] = (5));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30739 === (15))){
var state_30738__$1 = state_30738;
var statearr_30748_30797 = state_30738__$1;
(statearr_30748_30797[(2)] = null);

(statearr_30748_30797[(1)] = (16));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30739 === (21))){
var inst_30688 = (state_30738[(10)]);
var inst_30680 = inst_30688;
var state_30738__$1 = (function (){var statearr_30749 = state_30738;
(statearr_30749[(7)] = inst_30680);

return statearr_30749;
})();
var statearr_30750_30798 = state_30738__$1;
(statearr_30750_30798[(2)] = null);

(statearr_30750_30798[(1)] = (5));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30739 === (13))){
var inst_30734 = (state_30738[(2)]);
var state_30738__$1 = state_30738;
var statearr_30751_30799 = state_30738__$1;
(statearr_30751_30799[(2)] = inst_30734);

(statearr_30751_30799[(1)] = (6));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30739 === (22))){
var inst_30732 = (state_30738[(2)]);
var state_30738__$1 = state_30738;
var statearr_30752_30800 = state_30738__$1;
(statearr_30752_30800[(2)] = inst_30732);

(statearr_30752_30800[(1)] = (13));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30739 === (6))){
var inst_30736 = (state_30738[(2)]);
var state_30738__$1 = state_30738;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30738__$1,inst_30736);
} else {
if((state_val_30739 === (25))){
var state_30738__$1 = state_30738;
var statearr_30753_30801 = state_30738__$1;
(statearr_30753_30801[(2)] = null);

(statearr_30753_30801[(1)] = (26));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30739 === (17))){
var inst_30711 = (state_30738[(14)]);
var state_30738__$1 = state_30738;
var statearr_30754_30802 = state_30738__$1;
(statearr_30754_30802[(2)] = inst_30711);

(statearr_30754_30802[(1)] = (19));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30739 === (3))){
var inst_30670 = (state_30738[(9)]);
var state_30738__$1 = state_30738;
var statearr_30755_30803 = state_30738__$1;
(statearr_30755_30803[(2)] = inst_30670);

(statearr_30755_30803[(1)] = (4));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30739 === (12))){
var inst_30711 = (state_30738[(14)]);
var inst_30691 = (state_30738[(15)]);
var inst_30696 = (state_30738[(16)]);
var inst_30711__$1 = (function (){var G__30756 = inst_30696;
return (inst_30691.cljs$core$IFn$_invoke$arity$1 ? inst_30691.cljs$core$IFn$_invoke$arity$1(G__30756) : inst_30691.call(null,G__30756));
})();
var state_30738__$1 = (function (){var statearr_30757 = state_30738;
(statearr_30757[(14)] = inst_30711__$1);

return statearr_30757;
})();
if(cljs.core.truth_(inst_30711__$1)){
var statearr_30758_30804 = state_30738__$1;
(statearr_30758_30804[(1)] = (17));

} else {
var statearr_30759_30805 = state_30738__$1;
(statearr_30759_30805[(1)] = (18));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30739 === (2))){
var inst_30670 = (state_30738[(9)]);
var inst_30673 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30670);
var state_30738__$1 = state_30738;
var statearr_30760_30806 = state_30738__$1;
(statearr_30760_30806[(2)] = inst_30673);

(statearr_30760_30806[(1)] = (4));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30739 === (23))){
var inst_30723 = (state_30738[(2)]);
var state_30738__$1 = state_30738;
if(cljs.core.truth_(inst_30723)){
var statearr_30761_30807 = state_30738__$1;
(statearr_30761_30807[(1)] = (24));

} else {
var statearr_30762_30808 = state_30738__$1;
(statearr_30762_30808[(1)] = (25));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30739 === (19))){
var inst_30720 = (state_30738[(2)]);
var state_30738__$1 = state_30738;
if(cljs.core.truth_(inst_30720)){
var statearr_30763_30809 = state_30738__$1;
(statearr_30763_30809[(1)] = (20));

} else {
var statearr_30764_30810 = state_30738__$1;
(statearr_30764_30810[(1)] = (21));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30739 === (11))){
var inst_30695 = (state_30738[(8)]);
var inst_30701 = (inst_30695 == null);
var state_30738__$1 = state_30738;
if(cljs.core.truth_(inst_30701)){
var statearr_30765_30811 = state_30738__$1;
(statearr_30765_30811[(1)] = (14));

} else {
var statearr_30766_30812 = state_30738__$1;
(statearr_30766_30812[(1)] = (15));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30739 === (9))){
var inst_30688 = (state_30738[(10)]);
var inst_30688__$1 = (state_30738[(2)]);
var inst_30689 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30688__$1,cljs.core.constant$keyword$111);
var inst_30690 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30688__$1,cljs.core.constant$keyword$110);
var inst_30691 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30688__$1,cljs.core.constant$keyword$109);
var state_30738__$1 = (function (){var statearr_30767 = state_30738;
(statearr_30767[(10)] = inst_30688__$1);

(statearr_30767[(15)] = inst_30691);

(statearr_30767[(17)] = inst_30690);

return statearr_30767;
})();
return cljs.core.async.ioc_alts_BANG_(state_30738__$1,(10),inst_30689);
} else {
if((state_val_30739 === (5))){
var inst_30680 = (state_30738[(7)]);
var inst_30683 = cljs.core.seq_QMARK_(inst_30680);
var state_30738__$1 = state_30738;
if(inst_30683){
var statearr_30768_30813 = state_30738__$1;
(statearr_30768_30813[(1)] = (7));

} else {
var statearr_30769_30814 = state_30738__$1;
(statearr_30769_30814[(1)] = (8));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30739 === (14))){
var inst_30696 = (state_30738[(16)]);
var inst_30703 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_30696);
var state_30738__$1 = state_30738;
var statearr_30770_30815 = state_30738__$1;
(statearr_30770_30815[(2)] = inst_30703);

(statearr_30770_30815[(1)] = (16));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30739 === (26))){
var inst_30728 = (state_30738[(2)]);
var state_30738__$1 = state_30738;
var statearr_30771_30816 = state_30738__$1;
(statearr_30771_30816[(2)] = inst_30728);

(statearr_30771_30816[(1)] = (22));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30739 === (16))){
var inst_30706 = (state_30738[(2)]);
var inst_30707 = calc_state();
var inst_30680 = inst_30707;
var state_30738__$1 = (function (){var statearr_30772 = state_30738;
(statearr_30772[(18)] = inst_30706);

(statearr_30772[(7)] = inst_30680);

return statearr_30772;
})();
var statearr_30773_30817 = state_30738__$1;
(statearr_30773_30817[(2)] = null);

(statearr_30773_30817[(1)] = (5));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30739 === (10))){
var inst_30696 = (state_30738[(16)]);
var inst_30695 = (state_30738[(8)]);
var inst_30694 = (state_30738[(2)]);
var inst_30695__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30694,(0),null);
var inst_30696__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30694,(1),null);
var inst_30697 = (inst_30695__$1 == null);
var inst_30698 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30696__$1,change);
var inst_30699 = (inst_30697) || (inst_30698);
var state_30738__$1 = (function (){var statearr_30774 = state_30738;
(statearr_30774[(16)] = inst_30696__$1);

(statearr_30774[(8)] = inst_30695__$1);

return statearr_30774;
})();
if(cljs.core.truth_(inst_30699)){
var statearr_30775_30818 = state_30738__$1;
(statearr_30775_30818[(1)] = (11));

} else {
var statearr_30776_30819 = state_30738__$1;
(statearr_30776_30819[(1)] = (12));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30739 === (18))){
var inst_30691 = (state_30738[(15)]);
var inst_30696 = (state_30738[(16)]);
var inst_30690 = (state_30738[(17)]);
var inst_30715 = cljs.core.empty_QMARK_(inst_30691);
var inst_30716 = (function (){var G__30777 = inst_30696;
return (inst_30690.cljs$core$IFn$_invoke$arity$1 ? inst_30690.cljs$core$IFn$_invoke$arity$1(G__30777) : inst_30690.call(null,G__30777));
})();
var inst_30717 = cljs.core.not(inst_30716);
var inst_30718 = (inst_30715) && (inst_30717);
var state_30738__$1 = state_30738;
var statearr_30778_30820 = state_30738__$1;
(statearr_30778_30820[(2)] = inst_30718);

(statearr_30778_30820[(1)] = (19));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30739 === (8))){
var inst_30680 = (state_30738[(7)]);
var state_30738__$1 = state_30738;
var statearr_30779_30821 = state_30738__$1;
(statearr_30779_30821[(2)] = inst_30680);

(statearr_30779_30821[(1)] = (9));


return cljs.core.constant$keyword$97;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16203__auto___30791,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__16123__auto__,c__16203__auto___30791,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__16124__auto__ = null;
var state_machine__16124__auto____0 = (function (){
var statearr_30783 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30783[(0)] = state_machine__16124__auto__);

(statearr_30783[(1)] = (1));

return statearr_30783;
});
var state_machine__16124__auto____1 = (function (state_30738){
while(true){
var ret_value__16125__auto__ = (function (){try{while(true){
var result__16126__auto__ = switch__16123__auto__(state_30738);
if(cljs.core.keyword_identical_QMARK_(result__16126__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16126__auto__;
}
break;
}
}catch (e30784){if((e30784 instanceof Object)){
var ex__16127__auto__ = e30784;
var statearr_30785_30822 = state_30738;
(statearr_30785_30822[(5)] = ex__16127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30738);

return cljs.core.constant$keyword$97;
} else {
throw e30784;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16125__auto__,cljs.core.constant$keyword$97)){
var G__30823 = state_30738;
state_30738 = G__30823;
continue;
} else {
return ret_value__16125__auto__;
}
break;
}
});
state_machine__16124__auto__ = function(state_30738){
switch(arguments.length){
case 0:
return state_machine__16124__auto____0.call(this);
case 1:
return state_machine__16124__auto____1.call(this,state_30738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16124__auto____0;
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16124__auto____1;
return state_machine__16124__auto__;
})()
;})(switch__16123__auto__,c__16203__auto___30791,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16205__auto__ = (function (){var statearr_30786 = (function (){return (f__16204__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16204__auto__.cljs$core$IFn$_invoke$arity$0() : f__16204__auto__.call(null));
})();
(statearr_30786[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16203__auto___30791);

return statearr_30786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16205__auto__);
});})(c__16203__auto___30791,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

cljs.core.async.Pub = (function (){var obj30825 = {};
return obj30825;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3803__auto__ = p;
if(and__3803__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3803__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4459__auto__ = (((p == null))?null:p);
return (function (){var or__3815__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__30829 = x__4459__auto__;
return goog.typeOf(G__30829);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3803__auto__ = p;
if(and__3803__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3803__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4459__auto__ = (((p == null))?null:p);
return (function (){var or__3815__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__30833 = x__4459__auto__;
return goog.typeOf(G__30833);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__3803__auto__ = p;
if(and__3803__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3803__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4459__auto__ = (((p == null))?null:p);
return (function (){var or__3815__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__30839 = x__4459__auto__;
return goog.typeOf(G__30839);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3803__auto__ = p;
if(and__3803__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3803__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4459__auto__ = (((p == null))?null:p);
return (function (){var or__3815__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__30841 = x__4459__auto__;
return goog.typeOf(G__30841);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__30980 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30980) : cljs.core.atom.call(null,G__30980));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__3815__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__30982 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30982) : cljs.core.deref.call(null,G__30982));
})(),topic);
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3815__auto__,mults){
return (function (p1__30842_SHARP_){
if(cljs.core.truth_((function (){var G__30983 = topic;
return (p1__30842_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__30842_SHARP_.cljs$core$IFn$_invoke$arity$1(G__30983) : p1__30842_SHARP_.call(null,G__30983));
})())){
return p1__30842_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__30842_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__30984 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__30984) : buf_fn.call(null,G__30984));
})())));
}
});})(or__3815__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t30985 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30985 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta30986){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta30986 = meta30986;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30985.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t30985.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__30988 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__30988) : self__.ensure_mult.call(null,G__30988));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t30985.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__30989 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30989) : cljs.core.deref.call(null,G__30989));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t30985.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__30990 = self__.mults;
var G__30991 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__30990,G__30991) : cljs.core.reset_BANG_.call(null,G__30990,G__30991));
});})(mults,ensure_mult))
;

cljs.core.async.t30985.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t30985.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30985.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t30985.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30987){
var self__ = this;
var _30987__$1 = this;
return self__.meta30986;
});})(mults,ensure_mult))
;

cljs.core.async.t30985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30987,meta30986__$1){
var self__ = this;
var _30987__$1 = this;
return (new cljs.core.async.t30985(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta30986__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t30985.cljs$lang$type = true;

cljs.core.async.t30985.cljs$lang$ctorStr = "cljs.core.async/t30985";

cljs.core.async.t30985.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t30985");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t30985 = ((function (mults,ensure_mult){
return (function __GT_t30985(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta30986){
return (new cljs.core.async.t30985(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta30986));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t30985(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16203__auto___31114 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16203__auto___31114,mults,ensure_mult,p){
return (function (){
var f__16204__auto__ = (function (){var switch__16123__auto__ = ((function (c__16203__auto___31114,mults,ensure_mult,p){
return (function (state_31063){
var state_val_31064 = (state_31063[(1)]);
if((state_val_31064 === (7))){
var inst_31059 = (state_31063[(2)]);
var state_31063__$1 = state_31063;
var statearr_31065_31115 = state_31063__$1;
(statearr_31065_31115[(2)] = inst_31059);

(statearr_31065_31115[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31064 === (20))){
var state_31063__$1 = state_31063;
var statearr_31066_31116 = state_31063__$1;
(statearr_31066_31116[(2)] = null);

(statearr_31066_31116[(1)] = (21));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31064 === (1))){
var state_31063__$1 = state_31063;
var statearr_31067_31117 = state_31063__$1;
(statearr_31067_31117[(2)] = null);

(statearr_31067_31117[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31064 === (24))){
var inst_31042 = (state_31063[(7)]);
var inst_31051 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31042);
var state_31063__$1 = state_31063;
var statearr_31068_31118 = state_31063__$1;
(statearr_31068_31118[(2)] = inst_31051);

(statearr_31068_31118[(1)] = (25));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31064 === (4))){
var inst_30994 = (state_31063[(8)]);
var inst_30994__$1 = (state_31063[(2)]);
var inst_30995 = (inst_30994__$1 == null);
var state_31063__$1 = (function (){var statearr_31069 = state_31063;
(statearr_31069[(8)] = inst_30994__$1);

return statearr_31069;
})();
if(cljs.core.truth_(inst_30995)){
var statearr_31070_31119 = state_31063__$1;
(statearr_31070_31119[(1)] = (5));

} else {
var statearr_31071_31120 = state_31063__$1;
(statearr_31071_31120[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31064 === (15))){
var inst_31036 = (state_31063[(2)]);
var state_31063__$1 = state_31063;
var statearr_31072_31121 = state_31063__$1;
(statearr_31072_31121[(2)] = inst_31036);

(statearr_31072_31121[(1)] = (12));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31064 === (21))){
var inst_31056 = (state_31063[(2)]);
var state_31063__$1 = (function (){var statearr_31073 = state_31063;
(statearr_31073[(9)] = inst_31056);

return statearr_31073;
})();
var statearr_31074_31122 = state_31063__$1;
(statearr_31074_31122[(2)] = null);

(statearr_31074_31122[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31064 === (13))){
var inst_31018 = (state_31063[(10)]);
var inst_31020 = cljs.core.chunked_seq_QMARK_(inst_31018);
var state_31063__$1 = state_31063;
if(inst_31020){
var statearr_31075_31123 = state_31063__$1;
(statearr_31075_31123[(1)] = (16));

} else {
var statearr_31076_31124 = state_31063__$1;
(statearr_31076_31124[(1)] = (17));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31064 === (22))){
var inst_31048 = (state_31063[(2)]);
var state_31063__$1 = state_31063;
if(cljs.core.truth_(inst_31048)){
var statearr_31077_31125 = state_31063__$1;
(statearr_31077_31125[(1)] = (23));

} else {
var statearr_31078_31126 = state_31063__$1;
(statearr_31078_31126[(1)] = (24));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31064 === (6))){
var inst_31044 = (state_31063[(11)]);
var inst_30994 = (state_31063[(8)]);
var inst_31042 = (state_31063[(7)]);
var inst_31042__$1 = (function (){var G__31079 = inst_30994;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__31079) : topic_fn.call(null,G__31079));
})();
var inst_31043 = (function (){var G__31080 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31080) : cljs.core.deref.call(null,G__31080));
})();
var inst_31044__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31043,inst_31042__$1);
var state_31063__$1 = (function (){var statearr_31081 = state_31063;
(statearr_31081[(11)] = inst_31044__$1);

(statearr_31081[(7)] = inst_31042__$1);

return statearr_31081;
})();
if(cljs.core.truth_(inst_31044__$1)){
var statearr_31082_31127 = state_31063__$1;
(statearr_31082_31127[(1)] = (19));

} else {
var statearr_31083_31128 = state_31063__$1;
(statearr_31083_31128[(1)] = (20));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31064 === (25))){
var inst_31053 = (state_31063[(2)]);
var state_31063__$1 = state_31063;
var statearr_31084_31129 = state_31063__$1;
(statearr_31084_31129[(2)] = inst_31053);

(statearr_31084_31129[(1)] = (21));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31064 === (17))){
var inst_31018 = (state_31063[(10)]);
var inst_31027 = cljs.core.first(inst_31018);
var inst_31028 = cljs.core.async.muxch_STAR_(inst_31027);
var inst_31029 = cljs.core.async.close_BANG_(inst_31028);
var inst_31030 = cljs.core.next(inst_31018);
var inst_31004 = inst_31030;
var inst_31005 = null;
var inst_31006 = (0);
var inst_31007 = (0);
var state_31063__$1 = (function (){var statearr_31085 = state_31063;
(statearr_31085[(12)] = inst_31004);

(statearr_31085[(13)] = inst_31007);

(statearr_31085[(14)] = inst_31005);

(statearr_31085[(15)] = inst_31029);

(statearr_31085[(16)] = inst_31006);

return statearr_31085;
})();
var statearr_31086_31130 = state_31063__$1;
(statearr_31086_31130[(2)] = null);

(statearr_31086_31130[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31064 === (3))){
var inst_31061 = (state_31063[(2)]);
var state_31063__$1 = state_31063;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31063__$1,inst_31061);
} else {
if((state_val_31064 === (12))){
var inst_31038 = (state_31063[(2)]);
var state_31063__$1 = state_31063;
var statearr_31087_31131 = state_31063__$1;
(statearr_31087_31131[(2)] = inst_31038);

(statearr_31087_31131[(1)] = (9));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31064 === (2))){
var state_31063__$1 = state_31063;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31063__$1,(4),ch);
} else {
if((state_val_31064 === (23))){
var state_31063__$1 = state_31063;
var statearr_31088_31132 = state_31063__$1;
(statearr_31088_31132[(2)] = null);

(statearr_31088_31132[(1)] = (25));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31064 === (19))){
var inst_31044 = (state_31063[(11)]);
var inst_30994 = (state_31063[(8)]);
var inst_31046 = cljs.core.async.muxch_STAR_(inst_31044);
var state_31063__$1 = state_31063;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31063__$1,(22),inst_31046,inst_30994);
} else {
if((state_val_31064 === (11))){
var inst_31018 = (state_31063[(10)]);
var inst_31004 = (state_31063[(12)]);
var inst_31018__$1 = cljs.core.seq(inst_31004);
var state_31063__$1 = (function (){var statearr_31089 = state_31063;
(statearr_31089[(10)] = inst_31018__$1);

return statearr_31089;
})();
if(inst_31018__$1){
var statearr_31090_31133 = state_31063__$1;
(statearr_31090_31133[(1)] = (13));

} else {
var statearr_31091_31134 = state_31063__$1;
(statearr_31091_31134[(1)] = (14));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31064 === (9))){
var inst_31040 = (state_31063[(2)]);
var state_31063__$1 = state_31063;
var statearr_31092_31135 = state_31063__$1;
(statearr_31092_31135[(2)] = inst_31040);

(statearr_31092_31135[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31064 === (5))){
var inst_31001 = (function (){var G__31093 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31093) : cljs.core.deref.call(null,G__31093));
})();
var inst_31002 = cljs.core.vals(inst_31001);
var inst_31003 = cljs.core.seq(inst_31002);
var inst_31004 = inst_31003;
var inst_31005 = null;
var inst_31006 = (0);
var inst_31007 = (0);
var state_31063__$1 = (function (){var statearr_31094 = state_31063;
(statearr_31094[(12)] = inst_31004);

(statearr_31094[(13)] = inst_31007);

(statearr_31094[(14)] = inst_31005);

(statearr_31094[(16)] = inst_31006);

return statearr_31094;
})();
var statearr_31095_31136 = state_31063__$1;
(statearr_31095_31136[(2)] = null);

(statearr_31095_31136[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31064 === (14))){
var state_31063__$1 = state_31063;
var statearr_31099_31137 = state_31063__$1;
(statearr_31099_31137[(2)] = null);

(statearr_31099_31137[(1)] = (15));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31064 === (16))){
var inst_31018 = (state_31063[(10)]);
var inst_31022 = cljs.core.chunk_first(inst_31018);
var inst_31023 = cljs.core.chunk_rest(inst_31018);
var inst_31024 = cljs.core.count(inst_31022);
var inst_31004 = inst_31023;
var inst_31005 = inst_31022;
var inst_31006 = inst_31024;
var inst_31007 = (0);
var state_31063__$1 = (function (){var statearr_31100 = state_31063;
(statearr_31100[(12)] = inst_31004);

(statearr_31100[(13)] = inst_31007);

(statearr_31100[(14)] = inst_31005);

(statearr_31100[(16)] = inst_31006);

return statearr_31100;
})();
var statearr_31101_31138 = state_31063__$1;
(statearr_31101_31138[(2)] = null);

(statearr_31101_31138[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31064 === (10))){
var inst_31004 = (state_31063[(12)]);
var inst_31007 = (state_31063[(13)]);
var inst_31005 = (state_31063[(14)]);
var inst_31006 = (state_31063[(16)]);
var inst_31012 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31005,inst_31007);
var inst_31013 = cljs.core.async.muxch_STAR_(inst_31012);
var inst_31014 = cljs.core.async.close_BANG_(inst_31013);
var inst_31015 = (inst_31007 + (1));
var tmp31096 = inst_31004;
var tmp31097 = inst_31005;
var tmp31098 = inst_31006;
var inst_31004__$1 = tmp31096;
var inst_31005__$1 = tmp31097;
var inst_31006__$1 = tmp31098;
var inst_31007__$1 = inst_31015;
var state_31063__$1 = (function (){var statearr_31102 = state_31063;
(statearr_31102[(12)] = inst_31004__$1);

(statearr_31102[(13)] = inst_31007__$1);

(statearr_31102[(17)] = inst_31014);

(statearr_31102[(14)] = inst_31005__$1);

(statearr_31102[(16)] = inst_31006__$1);

return statearr_31102;
})();
var statearr_31103_31139 = state_31063__$1;
(statearr_31103_31139[(2)] = null);

(statearr_31103_31139[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31064 === (18))){
var inst_31033 = (state_31063[(2)]);
var state_31063__$1 = state_31063;
var statearr_31104_31140 = state_31063__$1;
(statearr_31104_31140[(2)] = inst_31033);

(statearr_31104_31140[(1)] = (15));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31064 === (8))){
var inst_31007 = (state_31063[(13)]);
var inst_31006 = (state_31063[(16)]);
var inst_31009 = (inst_31007 < inst_31006);
var inst_31010 = inst_31009;
var state_31063__$1 = state_31063;
if(cljs.core.truth_(inst_31010)){
var statearr_31105_31141 = state_31063__$1;
(statearr_31105_31141[(1)] = (10));

} else {
var statearr_31106_31142 = state_31063__$1;
(statearr_31106_31142[(1)] = (11));

}

return cljs.core.constant$keyword$97;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16203__auto___31114,mults,ensure_mult,p))
;
return ((function (switch__16123__auto__,c__16203__auto___31114,mults,ensure_mult,p){
return (function() {
var state_machine__16124__auto__ = null;
var state_machine__16124__auto____0 = (function (){
var statearr_31110 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31110[(0)] = state_machine__16124__auto__);

(statearr_31110[(1)] = (1));

return statearr_31110;
});
var state_machine__16124__auto____1 = (function (state_31063){
while(true){
var ret_value__16125__auto__ = (function (){try{while(true){
var result__16126__auto__ = switch__16123__auto__(state_31063);
if(cljs.core.keyword_identical_QMARK_(result__16126__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16126__auto__;
}
break;
}
}catch (e31111){if((e31111 instanceof Object)){
var ex__16127__auto__ = e31111;
var statearr_31112_31143 = state_31063;
(statearr_31112_31143[(5)] = ex__16127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31063);

return cljs.core.constant$keyword$97;
} else {
throw e31111;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16125__auto__,cljs.core.constant$keyword$97)){
var G__31144 = state_31063;
state_31063 = G__31144;
continue;
} else {
return ret_value__16125__auto__;
}
break;
}
});
state_machine__16124__auto__ = function(state_31063){
switch(arguments.length){
case 0:
return state_machine__16124__auto____0.call(this);
case 1:
return state_machine__16124__auto____1.call(this,state_31063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16124__auto____0;
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16124__auto____1;
return state_machine__16124__auto__;
})()
;})(switch__16123__auto__,c__16203__auto___31114,mults,ensure_mult,p))
})();
var state__16205__auto__ = (function (){var statearr_31113 = (function (){return (f__16204__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16204__auto__.cljs$core$IFn$_invoke$arity$0() : f__16204__auto__.call(null));
})();
(statearr_31113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16203__auto___31114);

return statearr_31113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16205__auto__);
});})(c__16203__auto___31114,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__31225 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__31225) : cljs.core.atom.call(null,G__31225));
})();
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__16203__auto___31298 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16203__auto___31298,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16204__auto__ = (function (){var switch__16123__auto__ = ((function (c__16203__auto___31298,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31264){
var state_val_31265 = (state_31264[(1)]);
if((state_val_31265 === (7))){
var state_31264__$1 = state_31264;
var statearr_31266_31299 = state_31264__$1;
(statearr_31266_31299[(2)] = null);

(statearr_31266_31299[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31265 === (1))){
var state_31264__$1 = state_31264;
var statearr_31267_31300 = state_31264__$1;
(statearr_31267_31300[(2)] = null);

(statearr_31267_31300[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31265 === (4))){
var inst_31228 = (state_31264[(7)]);
var inst_31230 = (inst_31228 < cnt);
var state_31264__$1 = state_31264;
if(cljs.core.truth_(inst_31230)){
var statearr_31268_31301 = state_31264__$1;
(statearr_31268_31301[(1)] = (6));

} else {
var statearr_31269_31302 = state_31264__$1;
(statearr_31269_31302[(1)] = (7));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31265 === (15))){
var inst_31260 = (state_31264[(2)]);
var state_31264__$1 = state_31264;
var statearr_31270_31303 = state_31264__$1;
(statearr_31270_31303[(2)] = inst_31260);

(statearr_31270_31303[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31265 === (13))){
var inst_31253 = cljs.core.async.close_BANG_(out);
var state_31264__$1 = state_31264;
var statearr_31271_31304 = state_31264__$1;
(statearr_31271_31304[(2)] = inst_31253);

(statearr_31271_31304[(1)] = (15));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31265 === (6))){
var state_31264__$1 = state_31264;
var statearr_31272_31305 = state_31264__$1;
(statearr_31272_31305[(2)] = null);

(statearr_31272_31305[(1)] = (11));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31265 === (3))){
var inst_31262 = (state_31264[(2)]);
var state_31264__$1 = state_31264;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31264__$1,inst_31262);
} else {
if((state_val_31265 === (12))){
var inst_31250 = (state_31264[(8)]);
var inst_31250__$1 = (state_31264[(2)]);
var inst_31251 = cljs.core.some(cljs.core.nil_QMARK_,inst_31250__$1);
var state_31264__$1 = (function (){var statearr_31273 = state_31264;
(statearr_31273[(8)] = inst_31250__$1);

return statearr_31273;
})();
if(cljs.core.truth_(inst_31251)){
var statearr_31274_31306 = state_31264__$1;
(statearr_31274_31306[(1)] = (13));

} else {
var statearr_31275_31307 = state_31264__$1;
(statearr_31275_31307[(1)] = (14));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31265 === (2))){
var inst_31227 = (function (){var G__31276 = dctr;
var G__31277 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__31276,G__31277) : cljs.core.reset_BANG_.call(null,G__31276,G__31277));
})();
var inst_31228 = (0);
var state_31264__$1 = (function (){var statearr_31278 = state_31264;
(statearr_31278[(7)] = inst_31228);

(statearr_31278[(9)] = inst_31227);

return statearr_31278;
})();
var statearr_31279_31308 = state_31264__$1;
(statearr_31279_31308[(2)] = null);

(statearr_31279_31308[(1)] = (4));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31265 === (11))){
var inst_31228 = (state_31264[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_31264,(10),Object,null,(9));
var inst_31237 = (function (){var G__31280 = inst_31228;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__31280) : chs__$1.call(null,G__31280));
})();
var inst_31238 = (function (){var G__31281 = inst_31228;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__31281) : done.call(null,G__31281));
})();
var inst_31239 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31237,inst_31238);
var state_31264__$1 = state_31264;
var statearr_31282_31309 = state_31264__$1;
(statearr_31282_31309[(2)] = inst_31239);


cljs.core.async.impl.ioc_helpers.process_exception(state_31264__$1);

return cljs.core.constant$keyword$97;
} else {
if((state_val_31265 === (9))){
var inst_31228 = (state_31264[(7)]);
var inst_31241 = (state_31264[(2)]);
var inst_31242 = (inst_31228 + (1));
var inst_31228__$1 = inst_31242;
var state_31264__$1 = (function (){var statearr_31283 = state_31264;
(statearr_31283[(7)] = inst_31228__$1);

(statearr_31283[(10)] = inst_31241);

return statearr_31283;
})();
var statearr_31284_31310 = state_31264__$1;
(statearr_31284_31310[(2)] = null);

(statearr_31284_31310[(1)] = (4));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31265 === (5))){
var inst_31248 = (state_31264[(2)]);
var state_31264__$1 = (function (){var statearr_31285 = state_31264;
(statearr_31285[(11)] = inst_31248);

return statearr_31285;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31264__$1,(12),dchan);
} else {
if((state_val_31265 === (14))){
var inst_31250 = (state_31264[(8)]);
var inst_31255 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31250);
var state_31264__$1 = state_31264;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31264__$1,(16),out,inst_31255);
} else {
if((state_val_31265 === (16))){
var inst_31257 = (state_31264[(2)]);
var state_31264__$1 = (function (){var statearr_31286 = state_31264;
(statearr_31286[(12)] = inst_31257);

return statearr_31286;
})();
var statearr_31287_31311 = state_31264__$1;
(statearr_31287_31311[(2)] = null);

(statearr_31287_31311[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31265 === (10))){
var inst_31232 = (state_31264[(2)]);
var inst_31233 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31264__$1 = (function (){var statearr_31288 = state_31264;
(statearr_31288[(13)] = inst_31232);

return statearr_31288;
})();
var statearr_31289_31312 = state_31264__$1;
(statearr_31289_31312[(2)] = inst_31233);


cljs.core.async.impl.ioc_helpers.process_exception(state_31264__$1);

return cljs.core.constant$keyword$97;
} else {
if((state_val_31265 === (8))){
var inst_31246 = (state_31264[(2)]);
var state_31264__$1 = state_31264;
var statearr_31290_31313 = state_31264__$1;
(statearr_31290_31313[(2)] = inst_31246);

(statearr_31290_31313[(1)] = (5));


return cljs.core.constant$keyword$97;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16203__auto___31298,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__16123__auto__,c__16203__auto___31298,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__16124__auto__ = null;
var state_machine__16124__auto____0 = (function (){
var statearr_31294 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31294[(0)] = state_machine__16124__auto__);

(statearr_31294[(1)] = (1));

return statearr_31294;
});
var state_machine__16124__auto____1 = (function (state_31264){
while(true){
var ret_value__16125__auto__ = (function (){try{while(true){
var result__16126__auto__ = switch__16123__auto__(state_31264);
if(cljs.core.keyword_identical_QMARK_(result__16126__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16126__auto__;
}
break;
}
}catch (e31295){if((e31295 instanceof Object)){
var ex__16127__auto__ = e31295;
var statearr_31296_31314 = state_31264;
(statearr_31296_31314[(5)] = ex__16127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31264);

return cljs.core.constant$keyword$97;
} else {
throw e31295;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16125__auto__,cljs.core.constant$keyword$97)){
var G__31315 = state_31264;
state_31264 = G__31315;
continue;
} else {
return ret_value__16125__auto__;
}
break;
}
});
state_machine__16124__auto__ = function(state_31264){
switch(arguments.length){
case 0:
return state_machine__16124__auto____0.call(this);
case 1:
return state_machine__16124__auto____1.call(this,state_31264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16124__auto____0;
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16124__auto____1;
return state_machine__16124__auto__;
})()
;})(switch__16123__auto__,c__16203__auto___31298,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16205__auto__ = (function (){var statearr_31297 = (function (){return (f__16204__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16204__auto__.cljs$core$IFn$_invoke$arity$0() : f__16204__auto__.call(null));
})();
(statearr_31297[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16203__auto___31298);

return statearr_31297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16205__auto__);
});})(c__16203__auto___31298,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16203__auto___31425 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16203__auto___31425,out){
return (function (){
var f__16204__auto__ = (function (){var switch__16123__auto__ = ((function (c__16203__auto___31425,out){
return (function (state_31401){
var state_val_31402 = (state_31401[(1)]);
if((state_val_31402 === (7))){
var inst_31380 = (state_31401[(7)]);
var inst_31381 = (state_31401[(8)]);
var inst_31380__$1 = (state_31401[(2)]);
var inst_31381__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31380__$1,(0),null);
var inst_31382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31380__$1,(1),null);
var inst_31383 = (inst_31381__$1 == null);
var state_31401__$1 = (function (){var statearr_31403 = state_31401;
(statearr_31403[(7)] = inst_31380__$1);

(statearr_31403[(8)] = inst_31381__$1);

(statearr_31403[(9)] = inst_31382);

return statearr_31403;
})();
if(cljs.core.truth_(inst_31383)){
var statearr_31404_31426 = state_31401__$1;
(statearr_31404_31426[(1)] = (8));

} else {
var statearr_31405_31427 = state_31401__$1;
(statearr_31405_31427[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31402 === (1))){
var inst_31372 = cljs.core.vec(chs);
var inst_31373 = inst_31372;
var state_31401__$1 = (function (){var statearr_31406 = state_31401;
(statearr_31406[(10)] = inst_31373);

return statearr_31406;
})();
var statearr_31407_31428 = state_31401__$1;
(statearr_31407_31428[(2)] = null);

(statearr_31407_31428[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31402 === (4))){
var inst_31373 = (state_31401[(10)]);
var state_31401__$1 = state_31401;
return cljs.core.async.ioc_alts_BANG_(state_31401__$1,(7),inst_31373);
} else {
if((state_val_31402 === (6))){
var inst_31397 = (state_31401[(2)]);
var state_31401__$1 = state_31401;
var statearr_31408_31429 = state_31401__$1;
(statearr_31408_31429[(2)] = inst_31397);

(statearr_31408_31429[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31402 === (3))){
var inst_31399 = (state_31401[(2)]);
var state_31401__$1 = state_31401;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31401__$1,inst_31399);
} else {
if((state_val_31402 === (2))){
var inst_31373 = (state_31401[(10)]);
var inst_31375 = cljs.core.count(inst_31373);
var inst_31376 = (inst_31375 > (0));
var state_31401__$1 = state_31401;
if(cljs.core.truth_(inst_31376)){
var statearr_31410_31430 = state_31401__$1;
(statearr_31410_31430[(1)] = (4));

} else {
var statearr_31411_31431 = state_31401__$1;
(statearr_31411_31431[(1)] = (5));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31402 === (11))){
var inst_31373 = (state_31401[(10)]);
var inst_31390 = (state_31401[(2)]);
var tmp31409 = inst_31373;
var inst_31373__$1 = tmp31409;
var state_31401__$1 = (function (){var statearr_31412 = state_31401;
(statearr_31412[(10)] = inst_31373__$1);

(statearr_31412[(11)] = inst_31390);

return statearr_31412;
})();
var statearr_31413_31432 = state_31401__$1;
(statearr_31413_31432[(2)] = null);

(statearr_31413_31432[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31402 === (9))){
var inst_31381 = (state_31401[(8)]);
var state_31401__$1 = state_31401;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31401__$1,(11),out,inst_31381);
} else {
if((state_val_31402 === (5))){
var inst_31395 = cljs.core.async.close_BANG_(out);
var state_31401__$1 = state_31401;
var statearr_31414_31433 = state_31401__$1;
(statearr_31414_31433[(2)] = inst_31395);

(statearr_31414_31433[(1)] = (6));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31402 === (10))){
var inst_31393 = (state_31401[(2)]);
var state_31401__$1 = state_31401;
var statearr_31415_31434 = state_31401__$1;
(statearr_31415_31434[(2)] = inst_31393);

(statearr_31415_31434[(1)] = (6));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31402 === (8))){
var inst_31380 = (state_31401[(7)]);
var inst_31373 = (state_31401[(10)]);
var inst_31381 = (state_31401[(8)]);
var inst_31382 = (state_31401[(9)]);
var inst_31385 = (function (){var c = inst_31382;
var v = inst_31381;
var vec__31378 = inst_31380;
var cs = inst_31373;
return ((function (c,v,vec__31378,cs,inst_31380,inst_31373,inst_31381,inst_31382,state_val_31402,c__16203__auto___31425,out){
return (function (p1__31316_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31316_SHARP_);
});
;})(c,v,vec__31378,cs,inst_31380,inst_31373,inst_31381,inst_31382,state_val_31402,c__16203__auto___31425,out))
})();
var inst_31386 = cljs.core.filterv(inst_31385,inst_31373);
var inst_31373__$1 = inst_31386;
var state_31401__$1 = (function (){var statearr_31416 = state_31401;
(statearr_31416[(10)] = inst_31373__$1);

return statearr_31416;
})();
var statearr_31417_31435 = state_31401__$1;
(statearr_31417_31435[(2)] = null);

(statearr_31417_31435[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__16203__auto___31425,out))
;
return ((function (switch__16123__auto__,c__16203__auto___31425,out){
return (function() {
var state_machine__16124__auto__ = null;
var state_machine__16124__auto____0 = (function (){
var statearr_31421 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31421[(0)] = state_machine__16124__auto__);

(statearr_31421[(1)] = (1));

return statearr_31421;
});
var state_machine__16124__auto____1 = (function (state_31401){
while(true){
var ret_value__16125__auto__ = (function (){try{while(true){
var result__16126__auto__ = switch__16123__auto__(state_31401);
if(cljs.core.keyword_identical_QMARK_(result__16126__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16126__auto__;
}
break;
}
}catch (e31422){if((e31422 instanceof Object)){
var ex__16127__auto__ = e31422;
var statearr_31423_31436 = state_31401;
(statearr_31423_31436[(5)] = ex__16127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31401);

return cljs.core.constant$keyword$97;
} else {
throw e31422;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16125__auto__,cljs.core.constant$keyword$97)){
var G__31437 = state_31401;
state_31401 = G__31437;
continue;
} else {
return ret_value__16125__auto__;
}
break;
}
});
state_machine__16124__auto__ = function(state_31401){
switch(arguments.length){
case 0:
return state_machine__16124__auto____0.call(this);
case 1:
return state_machine__16124__auto____1.call(this,state_31401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16124__auto____0;
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16124__auto____1;
return state_machine__16124__auto__;
})()
;})(switch__16123__auto__,c__16203__auto___31425,out))
})();
var state__16205__auto__ = (function (){var statearr_31424 = (function (){return (f__16204__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16204__auto__.cljs$core$IFn$_invoke$arity$0() : f__16204__auto__.call(null));
})();
(statearr_31424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16203__auto___31425);

return statearr_31424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16205__auto__);
});})(c__16203__auto___31425,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16203__auto___31533 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16203__auto___31533,out){
return (function (){
var f__16204__auto__ = (function (){var switch__16123__auto__ = ((function (c__16203__auto___31533,out){
return (function (state_31510){
var state_val_31511 = (state_31510[(1)]);
if((state_val_31511 === (7))){
var inst_31492 = (state_31510[(7)]);
var inst_31492__$1 = (state_31510[(2)]);
var inst_31493 = (inst_31492__$1 == null);
var inst_31494 = cljs.core.not(inst_31493);
var state_31510__$1 = (function (){var statearr_31512 = state_31510;
(statearr_31512[(7)] = inst_31492__$1);

return statearr_31512;
})();
if(inst_31494){
var statearr_31513_31534 = state_31510__$1;
(statearr_31513_31534[(1)] = (8));

} else {
var statearr_31514_31535 = state_31510__$1;
(statearr_31514_31535[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31511 === (1))){
var inst_31487 = (0);
var state_31510__$1 = (function (){var statearr_31515 = state_31510;
(statearr_31515[(8)] = inst_31487);

return statearr_31515;
})();
var statearr_31516_31536 = state_31510__$1;
(statearr_31516_31536[(2)] = null);

(statearr_31516_31536[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31511 === (4))){
var state_31510__$1 = state_31510;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31510__$1,(7),ch);
} else {
if((state_val_31511 === (6))){
var inst_31505 = (state_31510[(2)]);
var state_31510__$1 = state_31510;
var statearr_31517_31537 = state_31510__$1;
(statearr_31517_31537[(2)] = inst_31505);

(statearr_31517_31537[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31511 === (3))){
var inst_31507 = (state_31510[(2)]);
var inst_31508 = cljs.core.async.close_BANG_(out);
var state_31510__$1 = (function (){var statearr_31518 = state_31510;
(statearr_31518[(9)] = inst_31507);

return statearr_31518;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31510__$1,inst_31508);
} else {
if((state_val_31511 === (2))){
var inst_31487 = (state_31510[(8)]);
var inst_31489 = (inst_31487 < n);
var state_31510__$1 = state_31510;
if(cljs.core.truth_(inst_31489)){
var statearr_31519_31538 = state_31510__$1;
(statearr_31519_31538[(1)] = (4));

} else {
var statearr_31520_31539 = state_31510__$1;
(statearr_31520_31539[(1)] = (5));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31511 === (11))){
var inst_31487 = (state_31510[(8)]);
var inst_31497 = (state_31510[(2)]);
var inst_31498 = (inst_31487 + (1));
var inst_31487__$1 = inst_31498;
var state_31510__$1 = (function (){var statearr_31521 = state_31510;
(statearr_31521[(8)] = inst_31487__$1);

(statearr_31521[(10)] = inst_31497);

return statearr_31521;
})();
var statearr_31522_31540 = state_31510__$1;
(statearr_31522_31540[(2)] = null);

(statearr_31522_31540[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31511 === (9))){
var state_31510__$1 = state_31510;
var statearr_31523_31541 = state_31510__$1;
(statearr_31523_31541[(2)] = null);

(statearr_31523_31541[(1)] = (10));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31511 === (5))){
var state_31510__$1 = state_31510;
var statearr_31524_31542 = state_31510__$1;
(statearr_31524_31542[(2)] = null);

(statearr_31524_31542[(1)] = (6));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31511 === (10))){
var inst_31502 = (state_31510[(2)]);
var state_31510__$1 = state_31510;
var statearr_31525_31543 = state_31510__$1;
(statearr_31525_31543[(2)] = inst_31502);

(statearr_31525_31543[(1)] = (6));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31511 === (8))){
var inst_31492 = (state_31510[(7)]);
var state_31510__$1 = state_31510;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31510__$1,(11),out,inst_31492);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__16203__auto___31533,out))
;
return ((function (switch__16123__auto__,c__16203__auto___31533,out){
return (function() {
var state_machine__16124__auto__ = null;
var state_machine__16124__auto____0 = (function (){
var statearr_31529 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31529[(0)] = state_machine__16124__auto__);

(statearr_31529[(1)] = (1));

return statearr_31529;
});
var state_machine__16124__auto____1 = (function (state_31510){
while(true){
var ret_value__16125__auto__ = (function (){try{while(true){
var result__16126__auto__ = switch__16123__auto__(state_31510);
if(cljs.core.keyword_identical_QMARK_(result__16126__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16126__auto__;
}
break;
}
}catch (e31530){if((e31530 instanceof Object)){
var ex__16127__auto__ = e31530;
var statearr_31531_31544 = state_31510;
(statearr_31531_31544[(5)] = ex__16127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31510);

return cljs.core.constant$keyword$97;
} else {
throw e31530;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16125__auto__,cljs.core.constant$keyword$97)){
var G__31545 = state_31510;
state_31510 = G__31545;
continue;
} else {
return ret_value__16125__auto__;
}
break;
}
});
state_machine__16124__auto__ = function(state_31510){
switch(arguments.length){
case 0:
return state_machine__16124__auto____0.call(this);
case 1:
return state_machine__16124__auto____1.call(this,state_31510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16124__auto____0;
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16124__auto____1;
return state_machine__16124__auto__;
})()
;})(switch__16123__auto__,c__16203__auto___31533,out))
})();
var state__16205__auto__ = (function (){var statearr_31532 = (function (){return (f__16204__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16204__auto__.cljs$core$IFn$_invoke$arity$0() : f__16204__auto__.call(null));
})();
(statearr_31532[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16203__auto___31533);

return statearr_31532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16205__auto__);
});})(c__16203__auto___31533,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t31558 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31558 = (function (ch,f,map_LT_,meta31559){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta31559 = meta31559;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31558.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t31558.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t31558.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t31558.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t31561 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31561 = (function (fn1,_,meta31559,map_LT_,f,ch,meta31562){
this.fn1 = fn1;
this._ = _;
this.meta31559 = meta31559;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31562 = meta31562;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31561.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31561.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t31561.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31546_SHARP_){
var G__31564 = (((p1__31546_SHARP_ == null))?null:(function (){var G__31565 = p1__31546_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31565) : self__.f.call(null,G__31565));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31564) : f1.call(null,G__31564));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t31561.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31563){
var self__ = this;
var _31563__$1 = this;
return self__.meta31562;
});})(___$1))
;

cljs.core.async.t31561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31563,meta31562__$1){
var self__ = this;
var _31563__$1 = this;
return (new cljs.core.async.t31561(self__.fn1,self__._,self__.meta31559,self__.map_LT_,self__.f,self__.ch,meta31562__$1));
});})(___$1))
;

cljs.core.async.t31561.cljs$lang$type = true;

cljs.core.async.t31561.cljs$lang$ctorStr = "cljs.core.async/t31561";

cljs.core.async.t31561.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t31561");
});})(___$1))
;

cljs.core.async.__GT_t31561 = ((function (___$1){
return (function __GT_t31561(fn1__$1,___$2,meta31559__$1,map_LT___$1,f__$1,ch__$1,meta31562){
return (new cljs.core.async.t31561(fn1__$1,___$2,meta31559__$1,map_LT___$1,f__$1,ch__$1,meta31562));
});})(___$1))
;

}

return (new cljs.core.async.t31561(fn1,___$1,self__.meta31559,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3803__auto__ = ret;
if(cljs.core.truth_(and__3803__auto__)){
return !(((function (){var G__31566 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31566) : cljs.core.deref.call(null,G__31566));
})() == null));
} else {
return and__3803__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31567 = (function (){var G__31568 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31568) : cljs.core.deref.call(null,G__31568));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31567) : self__.f.call(null,G__31567));
})());
} else {
return ret;
}
});

cljs.core.async.t31558.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t31558.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t31558.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t31558.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31560){
var self__ = this;
var _31560__$1 = this;
return self__.meta31559;
});

cljs.core.async.t31558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31560,meta31559__$1){
var self__ = this;
var _31560__$1 = this;
return (new cljs.core.async.t31558(self__.ch,self__.f,self__.map_LT_,meta31559__$1));
});

cljs.core.async.t31558.cljs$lang$type = true;

cljs.core.async.t31558.cljs$lang$ctorStr = "cljs.core.async/t31558";

cljs.core.async.t31558.cljs$lang$ctorPrWriter = (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t31558");
});

cljs.core.async.__GT_t31558 = (function __GT_t31558(ch__$1,f__$1,map_LT___$1,meta31559){
return (new cljs.core.async.t31558(ch__$1,f__$1,map_LT___$1,meta31559));
});

}

return (new cljs.core.async.t31558(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t31573 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31573 = (function (ch,f,map_GT_,meta31574){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta31574 = meta31574;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31573.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t31573.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__31576 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31576) : self__.f.call(null,G__31576));
})(),fn1);
});

cljs.core.async.t31573.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t31573.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t31573.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t31573.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t31573.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31575){
var self__ = this;
var _31575__$1 = this;
return self__.meta31574;
});

cljs.core.async.t31573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31575,meta31574__$1){
var self__ = this;
var _31575__$1 = this;
return (new cljs.core.async.t31573(self__.ch,self__.f,self__.map_GT_,meta31574__$1));
});

cljs.core.async.t31573.cljs$lang$type = true;

cljs.core.async.t31573.cljs$lang$ctorStr = "cljs.core.async/t31573";

cljs.core.async.t31573.cljs$lang$ctorPrWriter = (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t31573");
});

cljs.core.async.__GT_t31573 = (function __GT_t31573(ch__$1,f__$1,map_GT___$1,meta31574){
return (new cljs.core.async.t31573(ch__$1,f__$1,map_GT___$1,meta31574));
});

}

return (new cljs.core.async.t31573(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t31581 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31581 = (function (ch,p,filter_GT_,meta31582){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta31582 = meta31582;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31581.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t31581.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__31584 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__31584) : self__.p.call(null,G__31584));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t31581.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t31581.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t31581.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t31581.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t31581.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t31581.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31583){
var self__ = this;
var _31583__$1 = this;
return self__.meta31582;
});

cljs.core.async.t31581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31583,meta31582__$1){
var self__ = this;
var _31583__$1 = this;
return (new cljs.core.async.t31581(self__.ch,self__.p,self__.filter_GT_,meta31582__$1));
});

cljs.core.async.t31581.cljs$lang$type = true;

cljs.core.async.t31581.cljs$lang$ctorStr = "cljs.core.async/t31581";

cljs.core.async.t31581.cljs$lang$ctorPrWriter = (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t31581");
});

cljs.core.async.__GT_t31581 = (function __GT_t31581(ch__$1,p__$1,filter_GT___$1,meta31582){
return (new cljs.core.async.t31581(ch__$1,p__$1,filter_GT___$1,meta31582));
});

}

return (new cljs.core.async.t31581(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16203__auto___31672 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16203__auto___31672,out){
return (function (){
var f__16204__auto__ = (function (){var switch__16123__auto__ = ((function (c__16203__auto___31672,out){
return (function (state_31650){
var state_val_31651 = (state_31650[(1)]);
if((state_val_31651 === (7))){
var inst_31646 = (state_31650[(2)]);
var state_31650__$1 = state_31650;
var statearr_31652_31673 = state_31650__$1;
(statearr_31652_31673[(2)] = inst_31646);

(statearr_31652_31673[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31651 === (1))){
var state_31650__$1 = state_31650;
var statearr_31653_31674 = state_31650__$1;
(statearr_31653_31674[(2)] = null);

(statearr_31653_31674[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31651 === (4))){
var inst_31632 = (state_31650[(7)]);
var inst_31632__$1 = (state_31650[(2)]);
var inst_31633 = (inst_31632__$1 == null);
var state_31650__$1 = (function (){var statearr_31654 = state_31650;
(statearr_31654[(7)] = inst_31632__$1);

return statearr_31654;
})();
if(cljs.core.truth_(inst_31633)){
var statearr_31655_31675 = state_31650__$1;
(statearr_31655_31675[(1)] = (5));

} else {
var statearr_31656_31676 = state_31650__$1;
(statearr_31656_31676[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31651 === (6))){
var inst_31632 = (state_31650[(7)]);
var inst_31637 = (function (){var G__31657 = inst_31632;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__31657) : p.call(null,G__31657));
})();
var state_31650__$1 = state_31650;
if(cljs.core.truth_(inst_31637)){
var statearr_31658_31677 = state_31650__$1;
(statearr_31658_31677[(1)] = (8));

} else {
var statearr_31659_31678 = state_31650__$1;
(statearr_31659_31678[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31651 === (3))){
var inst_31648 = (state_31650[(2)]);
var state_31650__$1 = state_31650;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31650__$1,inst_31648);
} else {
if((state_val_31651 === (2))){
var state_31650__$1 = state_31650;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31650__$1,(4),ch);
} else {
if((state_val_31651 === (11))){
var inst_31640 = (state_31650[(2)]);
var state_31650__$1 = state_31650;
var statearr_31660_31679 = state_31650__$1;
(statearr_31660_31679[(2)] = inst_31640);

(statearr_31660_31679[(1)] = (10));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31651 === (9))){
var state_31650__$1 = state_31650;
var statearr_31661_31680 = state_31650__$1;
(statearr_31661_31680[(2)] = null);

(statearr_31661_31680[(1)] = (10));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31651 === (5))){
var inst_31635 = cljs.core.async.close_BANG_(out);
var state_31650__$1 = state_31650;
var statearr_31662_31681 = state_31650__$1;
(statearr_31662_31681[(2)] = inst_31635);

(statearr_31662_31681[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31651 === (10))){
var inst_31643 = (state_31650[(2)]);
var state_31650__$1 = (function (){var statearr_31663 = state_31650;
(statearr_31663[(8)] = inst_31643);

return statearr_31663;
})();
var statearr_31664_31682 = state_31650__$1;
(statearr_31664_31682[(2)] = null);

(statearr_31664_31682[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31651 === (8))){
var inst_31632 = (state_31650[(7)]);
var state_31650__$1 = state_31650;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31650__$1,(11),out,inst_31632);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__16203__auto___31672,out))
;
return ((function (switch__16123__auto__,c__16203__auto___31672,out){
return (function() {
var state_machine__16124__auto__ = null;
var state_machine__16124__auto____0 = (function (){
var statearr_31668 = [null,null,null,null,null,null,null,null,null];
(statearr_31668[(0)] = state_machine__16124__auto__);

(statearr_31668[(1)] = (1));

return statearr_31668;
});
var state_machine__16124__auto____1 = (function (state_31650){
while(true){
var ret_value__16125__auto__ = (function (){try{while(true){
var result__16126__auto__ = switch__16123__auto__(state_31650);
if(cljs.core.keyword_identical_QMARK_(result__16126__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16126__auto__;
}
break;
}
}catch (e31669){if((e31669 instanceof Object)){
var ex__16127__auto__ = e31669;
var statearr_31670_31683 = state_31650;
(statearr_31670_31683[(5)] = ex__16127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31650);

return cljs.core.constant$keyword$97;
} else {
throw e31669;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16125__auto__,cljs.core.constant$keyword$97)){
var G__31684 = state_31650;
state_31650 = G__31684;
continue;
} else {
return ret_value__16125__auto__;
}
break;
}
});
state_machine__16124__auto__ = function(state_31650){
switch(arguments.length){
case 0:
return state_machine__16124__auto____0.call(this);
case 1:
return state_machine__16124__auto____1.call(this,state_31650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16124__auto____0;
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16124__auto____1;
return state_machine__16124__auto__;
})()
;})(switch__16123__auto__,c__16203__auto___31672,out))
})();
var state__16205__auto__ = (function (){var statearr_31671 = (function (){return (f__16204__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16204__auto__.cljs$core$IFn$_invoke$arity$0() : f__16204__auto__.call(null));
})();
(statearr_31671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16203__auto___31672);

return statearr_31671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16205__auto__);
});})(c__16203__auto___31672,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__16203__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16203__auto__){
return (function (){
var f__16204__auto__ = (function (){var switch__16123__auto__ = ((function (c__16203__auto__){
return (function (state_31854){
var state_val_31855 = (state_31854[(1)]);
if((state_val_31855 === (7))){
var inst_31850 = (state_31854[(2)]);
var state_31854__$1 = state_31854;
var statearr_31856_31898 = state_31854__$1;
(statearr_31856_31898[(2)] = inst_31850);

(statearr_31856_31898[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31855 === (20))){
var inst_31820 = (state_31854[(7)]);
var inst_31831 = (state_31854[(2)]);
var inst_31832 = cljs.core.next(inst_31820);
var inst_31806 = inst_31832;
var inst_31807 = null;
var inst_31808 = (0);
var inst_31809 = (0);
var state_31854__$1 = (function (){var statearr_31857 = state_31854;
(statearr_31857[(8)] = inst_31809);

(statearr_31857[(9)] = inst_31807);

(statearr_31857[(10)] = inst_31808);

(statearr_31857[(11)] = inst_31806);

(statearr_31857[(12)] = inst_31831);

return statearr_31857;
})();
var statearr_31858_31899 = state_31854__$1;
(statearr_31858_31899[(2)] = null);

(statearr_31858_31899[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31855 === (1))){
var state_31854__$1 = state_31854;
var statearr_31859_31900 = state_31854__$1;
(statearr_31859_31900[(2)] = null);

(statearr_31859_31900[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31855 === (4))){
var inst_31795 = (state_31854[(13)]);
var inst_31795__$1 = (state_31854[(2)]);
var inst_31796 = (inst_31795__$1 == null);
var state_31854__$1 = (function (){var statearr_31860 = state_31854;
(statearr_31860[(13)] = inst_31795__$1);

return statearr_31860;
})();
if(cljs.core.truth_(inst_31796)){
var statearr_31861_31901 = state_31854__$1;
(statearr_31861_31901[(1)] = (5));

} else {
var statearr_31862_31902 = state_31854__$1;
(statearr_31862_31902[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31855 === (15))){
var state_31854__$1 = state_31854;
var statearr_31866_31903 = state_31854__$1;
(statearr_31866_31903[(2)] = null);

(statearr_31866_31903[(1)] = (16));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31855 === (21))){
var state_31854__$1 = state_31854;
var statearr_31867_31904 = state_31854__$1;
(statearr_31867_31904[(2)] = null);

(statearr_31867_31904[(1)] = (23));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31855 === (13))){
var inst_31809 = (state_31854[(8)]);
var inst_31807 = (state_31854[(9)]);
var inst_31808 = (state_31854[(10)]);
var inst_31806 = (state_31854[(11)]);
var inst_31816 = (state_31854[(2)]);
var inst_31817 = (inst_31809 + (1));
var tmp31863 = inst_31807;
var tmp31864 = inst_31808;
var tmp31865 = inst_31806;
var inst_31806__$1 = tmp31865;
var inst_31807__$1 = tmp31863;
var inst_31808__$1 = tmp31864;
var inst_31809__$1 = inst_31817;
var state_31854__$1 = (function (){var statearr_31868 = state_31854;
(statearr_31868[(8)] = inst_31809__$1);

(statearr_31868[(9)] = inst_31807__$1);

(statearr_31868[(10)] = inst_31808__$1);

(statearr_31868[(11)] = inst_31806__$1);

(statearr_31868[(14)] = inst_31816);

return statearr_31868;
})();
var statearr_31869_31905 = state_31854__$1;
(statearr_31869_31905[(2)] = null);

(statearr_31869_31905[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31855 === (22))){
var state_31854__$1 = state_31854;
var statearr_31870_31906 = state_31854__$1;
(statearr_31870_31906[(2)] = null);

(statearr_31870_31906[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31855 === (6))){
var inst_31795 = (state_31854[(13)]);
var inst_31804 = (function (){var G__31871 = inst_31795;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__31871) : f.call(null,G__31871));
})();
var inst_31805 = cljs.core.seq(inst_31804);
var inst_31806 = inst_31805;
var inst_31807 = null;
var inst_31808 = (0);
var inst_31809 = (0);
var state_31854__$1 = (function (){var statearr_31872 = state_31854;
(statearr_31872[(8)] = inst_31809);

(statearr_31872[(9)] = inst_31807);

(statearr_31872[(10)] = inst_31808);

(statearr_31872[(11)] = inst_31806);

return statearr_31872;
})();
var statearr_31873_31907 = state_31854__$1;
(statearr_31873_31907[(2)] = null);

(statearr_31873_31907[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31855 === (17))){
var inst_31820 = (state_31854[(7)]);
var inst_31824 = cljs.core.chunk_first(inst_31820);
var inst_31825 = cljs.core.chunk_rest(inst_31820);
var inst_31826 = cljs.core.count(inst_31824);
var inst_31806 = inst_31825;
var inst_31807 = inst_31824;
var inst_31808 = inst_31826;
var inst_31809 = (0);
var state_31854__$1 = (function (){var statearr_31874 = state_31854;
(statearr_31874[(8)] = inst_31809);

(statearr_31874[(9)] = inst_31807);

(statearr_31874[(10)] = inst_31808);

(statearr_31874[(11)] = inst_31806);

return statearr_31874;
})();
var statearr_31875_31908 = state_31854__$1;
(statearr_31875_31908[(2)] = null);

(statearr_31875_31908[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31855 === (3))){
var inst_31852 = (state_31854[(2)]);
var state_31854__$1 = state_31854;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31854__$1,inst_31852);
} else {
if((state_val_31855 === (12))){
var inst_31840 = (state_31854[(2)]);
var state_31854__$1 = state_31854;
var statearr_31876_31909 = state_31854__$1;
(statearr_31876_31909[(2)] = inst_31840);

(statearr_31876_31909[(1)] = (9));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31855 === (2))){
var state_31854__$1 = state_31854;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31854__$1,(4),in$);
} else {
if((state_val_31855 === (23))){
var inst_31848 = (state_31854[(2)]);
var state_31854__$1 = state_31854;
var statearr_31877_31910 = state_31854__$1;
(statearr_31877_31910[(2)] = inst_31848);

(statearr_31877_31910[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31855 === (19))){
var inst_31835 = (state_31854[(2)]);
var state_31854__$1 = state_31854;
var statearr_31878_31911 = state_31854__$1;
(statearr_31878_31911[(2)] = inst_31835);

(statearr_31878_31911[(1)] = (16));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31855 === (11))){
var inst_31820 = (state_31854[(7)]);
var inst_31806 = (state_31854[(11)]);
var inst_31820__$1 = cljs.core.seq(inst_31806);
var state_31854__$1 = (function (){var statearr_31879 = state_31854;
(statearr_31879[(7)] = inst_31820__$1);

return statearr_31879;
})();
if(inst_31820__$1){
var statearr_31880_31912 = state_31854__$1;
(statearr_31880_31912[(1)] = (14));

} else {
var statearr_31881_31913 = state_31854__$1;
(statearr_31881_31913[(1)] = (15));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31855 === (9))){
var inst_31842 = (state_31854[(2)]);
var inst_31843 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_31854__$1 = (function (){var statearr_31882 = state_31854;
(statearr_31882[(15)] = inst_31842);

return statearr_31882;
})();
if(cljs.core.truth_(inst_31843)){
var statearr_31883_31914 = state_31854__$1;
(statearr_31883_31914[(1)] = (21));

} else {
var statearr_31884_31915 = state_31854__$1;
(statearr_31884_31915[(1)] = (22));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31855 === (5))){
var inst_31798 = cljs.core.async.close_BANG_(out);
var state_31854__$1 = state_31854;
var statearr_31885_31916 = state_31854__$1;
(statearr_31885_31916[(2)] = inst_31798);

(statearr_31885_31916[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31855 === (14))){
var inst_31820 = (state_31854[(7)]);
var inst_31822 = cljs.core.chunked_seq_QMARK_(inst_31820);
var state_31854__$1 = state_31854;
if(inst_31822){
var statearr_31886_31917 = state_31854__$1;
(statearr_31886_31917[(1)] = (17));

} else {
var statearr_31887_31918 = state_31854__$1;
(statearr_31887_31918[(1)] = (18));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31855 === (16))){
var inst_31838 = (state_31854[(2)]);
var state_31854__$1 = state_31854;
var statearr_31888_31919 = state_31854__$1;
(statearr_31888_31919[(2)] = inst_31838);

(statearr_31888_31919[(1)] = (12));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31855 === (10))){
var inst_31809 = (state_31854[(8)]);
var inst_31807 = (state_31854[(9)]);
var inst_31814 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31807,inst_31809);
var state_31854__$1 = state_31854;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31854__$1,(13),out,inst_31814);
} else {
if((state_val_31855 === (18))){
var inst_31820 = (state_31854[(7)]);
var inst_31829 = cljs.core.first(inst_31820);
var state_31854__$1 = state_31854;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31854__$1,(20),out,inst_31829);
} else {
if((state_val_31855 === (8))){
var inst_31809 = (state_31854[(8)]);
var inst_31808 = (state_31854[(10)]);
var inst_31811 = (inst_31809 < inst_31808);
var inst_31812 = inst_31811;
var state_31854__$1 = state_31854;
if(cljs.core.truth_(inst_31812)){
var statearr_31889_31920 = state_31854__$1;
(statearr_31889_31920[(1)] = (10));

} else {
var statearr_31890_31921 = state_31854__$1;
(statearr_31890_31921[(1)] = (11));

}

return cljs.core.constant$keyword$97;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16203__auto__))
;
return ((function (switch__16123__auto__,c__16203__auto__){
return (function() {
var state_machine__16124__auto__ = null;
var state_machine__16124__auto____0 = (function (){
var statearr_31894 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31894[(0)] = state_machine__16124__auto__);

(statearr_31894[(1)] = (1));

return statearr_31894;
});
var state_machine__16124__auto____1 = (function (state_31854){
while(true){
var ret_value__16125__auto__ = (function (){try{while(true){
var result__16126__auto__ = switch__16123__auto__(state_31854);
if(cljs.core.keyword_identical_QMARK_(result__16126__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16126__auto__;
}
break;
}
}catch (e31895){if((e31895 instanceof Object)){
var ex__16127__auto__ = e31895;
var statearr_31896_31922 = state_31854;
(statearr_31896_31922[(5)] = ex__16127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31854);

return cljs.core.constant$keyword$97;
} else {
throw e31895;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16125__auto__,cljs.core.constant$keyword$97)){
var G__31923 = state_31854;
state_31854 = G__31923;
continue;
} else {
return ret_value__16125__auto__;
}
break;
}
});
state_machine__16124__auto__ = function(state_31854){
switch(arguments.length){
case 0:
return state_machine__16124__auto____0.call(this);
case 1:
return state_machine__16124__auto____1.call(this,state_31854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16124__auto____0;
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16124__auto____1;
return state_machine__16124__auto__;
})()
;})(switch__16123__auto__,c__16203__auto__))
})();
var state__16205__auto__ = (function (){var statearr_31897 = (function (){return (f__16204__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16204__auto__.cljs$core$IFn$_invoke$arity$0() : f__16204__auto__.call(null));
})();
(statearr_31897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16203__auto__);

return statearr_31897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16205__auto__);
});})(c__16203__auto__))
);

return c__16203__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16203__auto___32028 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16203__auto___32028,out){
return (function (){
var f__16204__auto__ = (function (){var switch__16123__auto__ = ((function (c__16203__auto___32028,out){
return (function (state_32003){
var state_val_32004 = (state_32003[(1)]);
if((state_val_32004 === (7))){
var inst_31998 = (state_32003[(2)]);
var state_32003__$1 = state_32003;
var statearr_32005_32029 = state_32003__$1;
(statearr_32005_32029[(2)] = inst_31998);

(statearr_32005_32029[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32004 === (1))){
var inst_31980 = null;
var state_32003__$1 = (function (){var statearr_32006 = state_32003;
(statearr_32006[(7)] = inst_31980);

return statearr_32006;
})();
var statearr_32007_32030 = state_32003__$1;
(statearr_32007_32030[(2)] = null);

(statearr_32007_32030[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32004 === (4))){
var inst_31983 = (state_32003[(8)]);
var inst_31983__$1 = (state_32003[(2)]);
var inst_31984 = (inst_31983__$1 == null);
var inst_31985 = cljs.core.not(inst_31984);
var state_32003__$1 = (function (){var statearr_32008 = state_32003;
(statearr_32008[(8)] = inst_31983__$1);

return statearr_32008;
})();
if(inst_31985){
var statearr_32009_32031 = state_32003__$1;
(statearr_32009_32031[(1)] = (5));

} else {
var statearr_32010_32032 = state_32003__$1;
(statearr_32010_32032[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32004 === (6))){
var state_32003__$1 = state_32003;
var statearr_32011_32033 = state_32003__$1;
(statearr_32011_32033[(2)] = null);

(statearr_32011_32033[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32004 === (3))){
var inst_32000 = (state_32003[(2)]);
var inst_32001 = cljs.core.async.close_BANG_(out);
var state_32003__$1 = (function (){var statearr_32012 = state_32003;
(statearr_32012[(9)] = inst_32000);

return statearr_32012;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32003__$1,inst_32001);
} else {
if((state_val_32004 === (2))){
var state_32003__$1 = state_32003;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32003__$1,(4),ch);
} else {
if((state_val_32004 === (11))){
var inst_31983 = (state_32003[(8)]);
var inst_31992 = (state_32003[(2)]);
var inst_31980 = inst_31983;
var state_32003__$1 = (function (){var statearr_32013 = state_32003;
(statearr_32013[(7)] = inst_31980);

(statearr_32013[(10)] = inst_31992);

return statearr_32013;
})();
var statearr_32014_32034 = state_32003__$1;
(statearr_32014_32034[(2)] = null);

(statearr_32014_32034[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32004 === (9))){
var inst_31983 = (state_32003[(8)]);
var state_32003__$1 = state_32003;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32003__$1,(11),out,inst_31983);
} else {
if((state_val_32004 === (5))){
var inst_31980 = (state_32003[(7)]);
var inst_31983 = (state_32003[(8)]);
var inst_31987 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31983,inst_31980);
var state_32003__$1 = state_32003;
if(inst_31987){
var statearr_32016_32035 = state_32003__$1;
(statearr_32016_32035[(1)] = (8));

} else {
var statearr_32017_32036 = state_32003__$1;
(statearr_32017_32036[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32004 === (10))){
var inst_31995 = (state_32003[(2)]);
var state_32003__$1 = state_32003;
var statearr_32018_32037 = state_32003__$1;
(statearr_32018_32037[(2)] = inst_31995);

(statearr_32018_32037[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32004 === (8))){
var inst_31980 = (state_32003[(7)]);
var tmp32015 = inst_31980;
var inst_31980__$1 = tmp32015;
var state_32003__$1 = (function (){var statearr_32019 = state_32003;
(statearr_32019[(7)] = inst_31980__$1);

return statearr_32019;
})();
var statearr_32020_32038 = state_32003__$1;
(statearr_32020_32038[(2)] = null);

(statearr_32020_32038[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__16203__auto___32028,out))
;
return ((function (switch__16123__auto__,c__16203__auto___32028,out){
return (function() {
var state_machine__16124__auto__ = null;
var state_machine__16124__auto____0 = (function (){
var statearr_32024 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32024[(0)] = state_machine__16124__auto__);

(statearr_32024[(1)] = (1));

return statearr_32024;
});
var state_machine__16124__auto____1 = (function (state_32003){
while(true){
var ret_value__16125__auto__ = (function (){try{while(true){
var result__16126__auto__ = switch__16123__auto__(state_32003);
if(cljs.core.keyword_identical_QMARK_(result__16126__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16126__auto__;
}
break;
}
}catch (e32025){if((e32025 instanceof Object)){
var ex__16127__auto__ = e32025;
var statearr_32026_32039 = state_32003;
(statearr_32026_32039[(5)] = ex__16127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32003);

return cljs.core.constant$keyword$97;
} else {
throw e32025;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16125__auto__,cljs.core.constant$keyword$97)){
var G__32040 = state_32003;
state_32003 = G__32040;
continue;
} else {
return ret_value__16125__auto__;
}
break;
}
});
state_machine__16124__auto__ = function(state_32003){
switch(arguments.length){
case 0:
return state_machine__16124__auto____0.call(this);
case 1:
return state_machine__16124__auto____1.call(this,state_32003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16124__auto____0;
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16124__auto____1;
return state_machine__16124__auto__;
})()
;})(switch__16123__auto__,c__16203__auto___32028,out))
})();
var state__16205__auto__ = (function (){var statearr_32027 = (function (){return (f__16204__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16204__auto__.cljs$core$IFn$_invoke$arity$0() : f__16204__auto__.call(null));
})();
(statearr_32027[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16203__auto___32028);

return statearr_32027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16205__auto__);
});})(c__16203__auto___32028,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16203__auto___32178 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16203__auto___32178,out){
return (function (){
var f__16204__auto__ = (function (){var switch__16123__auto__ = ((function (c__16203__auto___32178,out){
return (function (state_32148){
var state_val_32149 = (state_32148[(1)]);
if((state_val_32149 === (7))){
var inst_32144 = (state_32148[(2)]);
var state_32148__$1 = state_32148;
var statearr_32150_32179 = state_32148__$1;
(statearr_32150_32179[(2)] = inst_32144);

(statearr_32150_32179[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32149 === (1))){
var inst_32111 = (new Array(n));
var inst_32112 = inst_32111;
var inst_32113 = (0);
var state_32148__$1 = (function (){var statearr_32151 = state_32148;
(statearr_32151[(7)] = inst_32113);

(statearr_32151[(8)] = inst_32112);

return statearr_32151;
})();
var statearr_32152_32180 = state_32148__$1;
(statearr_32152_32180[(2)] = null);

(statearr_32152_32180[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32149 === (4))){
var inst_32116 = (state_32148[(9)]);
var inst_32116__$1 = (state_32148[(2)]);
var inst_32117 = (inst_32116__$1 == null);
var inst_32118 = cljs.core.not(inst_32117);
var state_32148__$1 = (function (){var statearr_32153 = state_32148;
(statearr_32153[(9)] = inst_32116__$1);

return statearr_32153;
})();
if(inst_32118){
var statearr_32154_32181 = state_32148__$1;
(statearr_32154_32181[(1)] = (5));

} else {
var statearr_32155_32182 = state_32148__$1;
(statearr_32155_32182[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32149 === (15))){
var inst_32138 = (state_32148[(2)]);
var state_32148__$1 = state_32148;
var statearr_32156_32183 = state_32148__$1;
(statearr_32156_32183[(2)] = inst_32138);

(statearr_32156_32183[(1)] = (14));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32149 === (13))){
var state_32148__$1 = state_32148;
var statearr_32157_32184 = state_32148__$1;
(statearr_32157_32184[(2)] = null);

(statearr_32157_32184[(1)] = (14));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32149 === (6))){
var inst_32113 = (state_32148[(7)]);
var inst_32134 = (inst_32113 > (0));
var state_32148__$1 = state_32148;
if(cljs.core.truth_(inst_32134)){
var statearr_32158_32185 = state_32148__$1;
(statearr_32158_32185[(1)] = (12));

} else {
var statearr_32159_32186 = state_32148__$1;
(statearr_32159_32186[(1)] = (13));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32149 === (3))){
var inst_32146 = (state_32148[(2)]);
var state_32148__$1 = state_32148;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32148__$1,inst_32146);
} else {
if((state_val_32149 === (12))){
var inst_32112 = (state_32148[(8)]);
var inst_32136 = cljs.core.vec(inst_32112);
var state_32148__$1 = state_32148;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32148__$1,(15),out,inst_32136);
} else {
if((state_val_32149 === (2))){
var state_32148__$1 = state_32148;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32148__$1,(4),ch);
} else {
if((state_val_32149 === (11))){
var inst_32128 = (state_32148[(2)]);
var inst_32129 = (new Array(n));
var inst_32112 = inst_32129;
var inst_32113 = (0);
var state_32148__$1 = (function (){var statearr_32160 = state_32148;
(statearr_32160[(10)] = inst_32128);

(statearr_32160[(7)] = inst_32113);

(statearr_32160[(8)] = inst_32112);

return statearr_32160;
})();
var statearr_32161_32187 = state_32148__$1;
(statearr_32161_32187[(2)] = null);

(statearr_32161_32187[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32149 === (9))){
var inst_32112 = (state_32148[(8)]);
var inst_32126 = cljs.core.vec(inst_32112);
var state_32148__$1 = state_32148;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32148__$1,(11),out,inst_32126);
} else {
if((state_val_32149 === (5))){
var inst_32121 = (state_32148[(11)]);
var inst_32113 = (state_32148[(7)]);
var inst_32116 = (state_32148[(9)]);
var inst_32112 = (state_32148[(8)]);
var inst_32120 = (inst_32112[inst_32113] = inst_32116);
var inst_32121__$1 = (inst_32113 + (1));
var inst_32122 = (inst_32121__$1 < n);
var state_32148__$1 = (function (){var statearr_32162 = state_32148;
(statearr_32162[(11)] = inst_32121__$1);

(statearr_32162[(12)] = inst_32120);

return statearr_32162;
})();
if(cljs.core.truth_(inst_32122)){
var statearr_32163_32188 = state_32148__$1;
(statearr_32163_32188[(1)] = (8));

} else {
var statearr_32164_32189 = state_32148__$1;
(statearr_32164_32189[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32149 === (14))){
var inst_32141 = (state_32148[(2)]);
var inst_32142 = cljs.core.async.close_BANG_(out);
var state_32148__$1 = (function (){var statearr_32166 = state_32148;
(statearr_32166[(13)] = inst_32141);

return statearr_32166;
})();
var statearr_32167_32190 = state_32148__$1;
(statearr_32167_32190[(2)] = inst_32142);

(statearr_32167_32190[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32149 === (10))){
var inst_32132 = (state_32148[(2)]);
var state_32148__$1 = state_32148;
var statearr_32168_32191 = state_32148__$1;
(statearr_32168_32191[(2)] = inst_32132);

(statearr_32168_32191[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32149 === (8))){
var inst_32121 = (state_32148[(11)]);
var inst_32112 = (state_32148[(8)]);
var tmp32165 = inst_32112;
var inst_32112__$1 = tmp32165;
var inst_32113 = inst_32121;
var state_32148__$1 = (function (){var statearr_32169 = state_32148;
(statearr_32169[(7)] = inst_32113);

(statearr_32169[(8)] = inst_32112__$1);

return statearr_32169;
})();
var statearr_32170_32192 = state_32148__$1;
(statearr_32170_32192[(2)] = null);

(statearr_32170_32192[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16203__auto___32178,out))
;
return ((function (switch__16123__auto__,c__16203__auto___32178,out){
return (function() {
var state_machine__16124__auto__ = null;
var state_machine__16124__auto____0 = (function (){
var statearr_32174 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32174[(0)] = state_machine__16124__auto__);

(statearr_32174[(1)] = (1));

return statearr_32174;
});
var state_machine__16124__auto____1 = (function (state_32148){
while(true){
var ret_value__16125__auto__ = (function (){try{while(true){
var result__16126__auto__ = switch__16123__auto__(state_32148);
if(cljs.core.keyword_identical_QMARK_(result__16126__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16126__auto__;
}
break;
}
}catch (e32175){if((e32175 instanceof Object)){
var ex__16127__auto__ = e32175;
var statearr_32176_32193 = state_32148;
(statearr_32176_32193[(5)] = ex__16127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32148);

return cljs.core.constant$keyword$97;
} else {
throw e32175;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16125__auto__,cljs.core.constant$keyword$97)){
var G__32194 = state_32148;
state_32148 = G__32194;
continue;
} else {
return ret_value__16125__auto__;
}
break;
}
});
state_machine__16124__auto__ = function(state_32148){
switch(arguments.length){
case 0:
return state_machine__16124__auto____0.call(this);
case 1:
return state_machine__16124__auto____1.call(this,state_32148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16124__auto____0;
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16124__auto____1;
return state_machine__16124__auto__;
})()
;})(switch__16123__auto__,c__16203__auto___32178,out))
})();
var state__16205__auto__ = (function (){var statearr_32177 = (function (){return (f__16204__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16204__auto__.cljs$core$IFn$_invoke$arity$0() : f__16204__auto__.call(null));
})();
(statearr_32177[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16203__auto___32178);

return statearr_32177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16205__auto__);
});})(c__16203__auto___32178,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16203__auto___32342 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16203__auto___32342,out){
return (function (){
var f__16204__auto__ = (function (){var switch__16123__auto__ = ((function (c__16203__auto___32342,out){
return (function (state_32311){
var state_val_32312 = (state_32311[(1)]);
if((state_val_32312 === (7))){
var inst_32307 = (state_32311[(2)]);
var state_32311__$1 = state_32311;
var statearr_32313_32343 = state_32311__$1;
(statearr_32313_32343[(2)] = inst_32307);

(statearr_32313_32343[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32312 === (1))){
var inst_32270 = [];
var inst_32271 = inst_32270;
var inst_32272 = cljs.core.constant$keyword$112;
var state_32311__$1 = (function (){var statearr_32314 = state_32311;
(statearr_32314[(7)] = inst_32271);

(statearr_32314[(8)] = inst_32272);

return statearr_32314;
})();
var statearr_32315_32344 = state_32311__$1;
(statearr_32315_32344[(2)] = null);

(statearr_32315_32344[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32312 === (4))){
var inst_32275 = (state_32311[(9)]);
var inst_32275__$1 = (state_32311[(2)]);
var inst_32276 = (inst_32275__$1 == null);
var inst_32277 = cljs.core.not(inst_32276);
var state_32311__$1 = (function (){var statearr_32316 = state_32311;
(statearr_32316[(9)] = inst_32275__$1);

return statearr_32316;
})();
if(inst_32277){
var statearr_32317_32345 = state_32311__$1;
(statearr_32317_32345[(1)] = (5));

} else {
var statearr_32318_32346 = state_32311__$1;
(statearr_32318_32346[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32312 === (15))){
var inst_32301 = (state_32311[(2)]);
var state_32311__$1 = state_32311;
var statearr_32319_32347 = state_32311__$1;
(statearr_32319_32347[(2)] = inst_32301);

(statearr_32319_32347[(1)] = (14));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32312 === (13))){
var state_32311__$1 = state_32311;
var statearr_32320_32348 = state_32311__$1;
(statearr_32320_32348[(2)] = null);

(statearr_32320_32348[(1)] = (14));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32312 === (6))){
var inst_32271 = (state_32311[(7)]);
var inst_32296 = inst_32271.length;
var inst_32297 = (inst_32296 > (0));
var state_32311__$1 = state_32311;
if(cljs.core.truth_(inst_32297)){
var statearr_32321_32349 = state_32311__$1;
(statearr_32321_32349[(1)] = (12));

} else {
var statearr_32322_32350 = state_32311__$1;
(statearr_32322_32350[(1)] = (13));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32312 === (3))){
var inst_32309 = (state_32311[(2)]);
var state_32311__$1 = state_32311;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32311__$1,inst_32309);
} else {
if((state_val_32312 === (12))){
var inst_32271 = (state_32311[(7)]);
var inst_32299 = cljs.core.vec(inst_32271);
var state_32311__$1 = state_32311;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32311__$1,(15),out,inst_32299);
} else {
if((state_val_32312 === (2))){
var state_32311__$1 = state_32311;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32311__$1,(4),ch);
} else {
if((state_val_32312 === (11))){
var inst_32275 = (state_32311[(9)]);
var inst_32279 = (state_32311[(10)]);
var inst_32289 = (state_32311[(2)]);
var inst_32290 = [];
var inst_32291 = inst_32290.push(inst_32275);
var inst_32271 = inst_32290;
var inst_32272 = inst_32279;
var state_32311__$1 = (function (){var statearr_32323 = state_32311;
(statearr_32323[(11)] = inst_32291);

(statearr_32323[(7)] = inst_32271);

(statearr_32323[(12)] = inst_32289);

(statearr_32323[(8)] = inst_32272);

return statearr_32323;
})();
var statearr_32324_32351 = state_32311__$1;
(statearr_32324_32351[(2)] = null);

(statearr_32324_32351[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32312 === (9))){
var inst_32271 = (state_32311[(7)]);
var inst_32287 = cljs.core.vec(inst_32271);
var state_32311__$1 = state_32311;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32311__$1,(11),out,inst_32287);
} else {
if((state_val_32312 === (5))){
var inst_32275 = (state_32311[(9)]);
var inst_32272 = (state_32311[(8)]);
var inst_32279 = (state_32311[(10)]);
var inst_32279__$1 = (function (){var G__32325 = inst_32275;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__32325) : f.call(null,G__32325));
})();
var inst_32280 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32279__$1,inst_32272);
var inst_32281 = cljs.core.keyword_identical_QMARK_(inst_32272,cljs.core.constant$keyword$112);
var inst_32282 = (inst_32280) || (inst_32281);
var state_32311__$1 = (function (){var statearr_32326 = state_32311;
(statearr_32326[(10)] = inst_32279__$1);

return statearr_32326;
})();
if(cljs.core.truth_(inst_32282)){
var statearr_32327_32352 = state_32311__$1;
(statearr_32327_32352[(1)] = (8));

} else {
var statearr_32328_32353 = state_32311__$1;
(statearr_32328_32353[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32312 === (14))){
var inst_32304 = (state_32311[(2)]);
var inst_32305 = cljs.core.async.close_BANG_(out);
var state_32311__$1 = (function (){var statearr_32330 = state_32311;
(statearr_32330[(13)] = inst_32304);

return statearr_32330;
})();
var statearr_32331_32354 = state_32311__$1;
(statearr_32331_32354[(2)] = inst_32305);

(statearr_32331_32354[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32312 === (10))){
var inst_32294 = (state_32311[(2)]);
var state_32311__$1 = state_32311;
var statearr_32332_32355 = state_32311__$1;
(statearr_32332_32355[(2)] = inst_32294);

(statearr_32332_32355[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32312 === (8))){
var inst_32271 = (state_32311[(7)]);
var inst_32275 = (state_32311[(9)]);
var inst_32279 = (state_32311[(10)]);
var inst_32284 = inst_32271.push(inst_32275);
var tmp32329 = inst_32271;
var inst_32271__$1 = tmp32329;
var inst_32272 = inst_32279;
var state_32311__$1 = (function (){var statearr_32333 = state_32311;
(statearr_32333[(14)] = inst_32284);

(statearr_32333[(7)] = inst_32271__$1);

(statearr_32333[(8)] = inst_32272);

return statearr_32333;
})();
var statearr_32334_32356 = state_32311__$1;
(statearr_32334_32356[(2)] = null);

(statearr_32334_32356[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16203__auto___32342,out))
;
return ((function (switch__16123__auto__,c__16203__auto___32342,out){
return (function() {
var state_machine__16124__auto__ = null;
var state_machine__16124__auto____0 = (function (){
var statearr_32338 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32338[(0)] = state_machine__16124__auto__);

(statearr_32338[(1)] = (1));

return statearr_32338;
});
var state_machine__16124__auto____1 = (function (state_32311){
while(true){
var ret_value__16125__auto__ = (function (){try{while(true){
var result__16126__auto__ = switch__16123__auto__(state_32311);
if(cljs.core.keyword_identical_QMARK_(result__16126__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16126__auto__;
}
break;
}
}catch (e32339){if((e32339 instanceof Object)){
var ex__16127__auto__ = e32339;
var statearr_32340_32357 = state_32311;
(statearr_32340_32357[(5)] = ex__16127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32311);

return cljs.core.constant$keyword$97;
} else {
throw e32339;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16125__auto__,cljs.core.constant$keyword$97)){
var G__32358 = state_32311;
state_32311 = G__32358;
continue;
} else {
return ret_value__16125__auto__;
}
break;
}
});
state_machine__16124__auto__ = function(state_32311){
switch(arguments.length){
case 0:
return state_machine__16124__auto____0.call(this);
case 1:
return state_machine__16124__auto____1.call(this,state_32311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16124__auto____0;
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16124__auto____1;
return state_machine__16124__auto__;
})()
;})(switch__16123__auto__,c__16203__auto___32342,out))
})();
var state__16205__auto__ = (function (){var statearr_32341 = (function (){return (f__16204__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16204__auto__.cljs$core$IFn$_invoke$arity$0() : f__16204__auto__.call(null));
})();
(statearr_32341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16203__auto___32342);

return statearr_32341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16205__auto__);
});})(c__16203__auto___32342,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

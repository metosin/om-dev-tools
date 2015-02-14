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
if(typeof cljs.core.async.t28862 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28862 = (function (f,fn_handler,meta28863){
this.f = f;
this.fn_handler = fn_handler;
this.meta28863 = meta28863;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28862.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28862.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t28862.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t28862.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28864){
var self__ = this;
var _28864__$1 = this;
return self__.meta28863;
});

cljs.core.async.t28862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28864,meta28863__$1){
var self__ = this;
var _28864__$1 = this;
return (new cljs.core.async.t28862(self__.f,self__.fn_handler,meta28863__$1));
});

cljs.core.async.t28862.cljs$lang$type = true;

cljs.core.async.t28862.cljs$lang$ctorStr = "cljs.core.async/t28862";

cljs.core.async.t28862.cljs$lang$ctorPrWriter = (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t28862");
});

cljs.core.async.__GT_t28862 = (function __GT_t28862(f__$1,fn_handler__$1,meta28863){
return (new cljs.core.async.t28862(f__$1,fn_handler__$1,meta28863));
});

}

return (new cljs.core.async.t28862(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__28866 = buff;
if(G__28866){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__28866.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__28866.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__28866);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__28866);
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
var val_28883 = (function (){var G__28880 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28880) : cljs.core.deref.call(null,G__28880));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__28881_28884 = val_28883;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__28881_28884) : fn1.call(null,G__28881_28884));
} else {
cljs.core.async.impl.dispatch.run(((function (val_28883,ret){
return (function (){
var G__28882 = val_28883;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__28882) : fn1.call(null,G__28882));
});})(val_28883,ret))
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
var G__28893 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28893) : cljs.core.deref.call(null,G__28893));
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
var ret = (function (){var G__28894 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28894) : cljs.core.deref.call(null,G__28894));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__28895_28897 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__28895_28897) : fn1.call(null,G__28895_28897));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__28896 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__28896) : fn1.call(null,G__28896));
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
var n__4702__auto___28898 = n;
var x_28899 = (0);
while(true){
if((x_28899 < n__4702__auto___28898)){
(a[x_28899] = (0));

var G__28900 = (x_28899 + (1));
x_28899 = G__28900;
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

var G__28901 = (i + (1));
i = G__28901;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = (function (){var G__28909 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__28909) : cljs.core.atom.call(null,G__28909));
})();
if(typeof cljs.core.async.t28910 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28910 = (function (flag,alt_flag,meta28911){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta28911 = meta28911;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28910.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28910.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__28913 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28913) : cljs.core.deref.call(null,G__28913));
});})(flag))
;

cljs.core.async.t28910.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__28914_28916 = self__.flag;
var G__28915_28917 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__28914_28916,G__28915_28917) : cljs.core.reset_BANG_.call(null,G__28914_28916,G__28915_28917));

return true;
});})(flag))
;

cljs.core.async.t28910.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28912){
var self__ = this;
var _28912__$1 = this;
return self__.meta28911;
});})(flag))
;

cljs.core.async.t28910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28912,meta28911__$1){
var self__ = this;
var _28912__$1 = this;
return (new cljs.core.async.t28910(self__.flag,self__.alt_flag,meta28911__$1));
});})(flag))
;

cljs.core.async.t28910.cljs$lang$type = true;

cljs.core.async.t28910.cljs$lang$ctorStr = "cljs.core.async/t28910";

cljs.core.async.t28910.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t28910");
});})(flag))
;

cljs.core.async.__GT_t28910 = ((function (flag){
return (function __GT_t28910(flag__$1,alt_flag__$1,meta28911){
return (new cljs.core.async.t28910(flag__$1,alt_flag__$1,meta28911));
});})(flag))
;

}

return (new cljs.core.async.t28910(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t28921 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28921 = (function (cb,flag,alt_handler,meta28922){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta28922 = meta28922;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28921.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28921.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t28921.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t28921.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28923){
var self__ = this;
var _28923__$1 = this;
return self__.meta28922;
});

cljs.core.async.t28921.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28923,meta28922__$1){
var self__ = this;
var _28923__$1 = this;
return (new cljs.core.async.t28921(self__.cb,self__.flag,self__.alt_handler,meta28922__$1));
});

cljs.core.async.t28921.cljs$lang$type = true;

cljs.core.async.t28921.cljs$lang$ctorStr = "cljs.core.async/t28921";

cljs.core.async.t28921.cljs$lang$ctorPrWriter = (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t28921");
});

cljs.core.async.__GT_t28921 = (function __GT_t28921(cb__$1,flag__$1,alt_handler__$1,meta28922){
return (new cljs.core.async.t28921(cb__$1,flag__$1,alt_handler__$1,meta28922));
});

}

return (new cljs.core.async.t28921(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__28931 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__28931) : port.call(null,G__28931));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__28932 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__28932) : port.call(null,G__28932));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28924_SHARP_){
var G__28933 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28924_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28933) : fret.call(null,G__28933));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28925_SHARP_){
var G__28934 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28925_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28934) : fret.call(null,G__28934));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28935 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28935) : cljs.core.deref.call(null,G__28935));
})(),(function (){var or__3815__auto__ = wport;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28936 = (i + (1));
i = G__28936;
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
var alts_BANG___delegate = function (ports,p__28937){
var map__28939 = p__28937;
var map__28939__$1 = ((cljs.core.seq_QMARK_(map__28939))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28939):map__28939);
var opts = map__28939__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__28937 = null;
if (arguments.length > 1) {
var G__28940__i = 0, G__28940__a = new Array(arguments.length -  1);
while (G__28940__i < G__28940__a.length) {G__28940__a[G__28940__i] = arguments[G__28940__i + 1]; ++G__28940__i;}
  p__28937 = new cljs.core.IndexedSeq(G__28940__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__28937);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__28941){
var ports = cljs.core.first(arglist__28941);
var p__28937 = cljs.core.rest(arglist__28941);
return alts_BANG___delegate(ports,p__28937);
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
var c__16203__auto___29039 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16203__auto___29039){
return (function (){
var f__16204__auto__ = (function (){var switch__16123__auto__ = ((function (c__16203__auto___29039){
return (function (state_29015){
var state_val_29016 = (state_29015[(1)]);
if((state_val_29016 === (7))){
var inst_29011 = (state_29015[(2)]);
var state_29015__$1 = state_29015;
var statearr_29017_29040 = state_29015__$1;
(statearr_29017_29040[(2)] = inst_29011);

(statearr_29017_29040[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29016 === (1))){
var state_29015__$1 = state_29015;
var statearr_29018_29041 = state_29015__$1;
(statearr_29018_29041[(2)] = null);

(statearr_29018_29041[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29016 === (4))){
var inst_28994 = (state_29015[(7)]);
var inst_28994__$1 = (state_29015[(2)]);
var inst_28995 = (inst_28994__$1 == null);
var state_29015__$1 = (function (){var statearr_29019 = state_29015;
(statearr_29019[(7)] = inst_28994__$1);

return statearr_29019;
})();
if(cljs.core.truth_(inst_28995)){
var statearr_29020_29042 = state_29015__$1;
(statearr_29020_29042[(1)] = (5));

} else {
var statearr_29021_29043 = state_29015__$1;
(statearr_29021_29043[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29016 === (13))){
var state_29015__$1 = state_29015;
var statearr_29022_29044 = state_29015__$1;
(statearr_29022_29044[(2)] = null);

(statearr_29022_29044[(1)] = (14));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29016 === (6))){
var inst_28994 = (state_29015[(7)]);
var state_29015__$1 = state_29015;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29015__$1,(11),to,inst_28994);
} else {
if((state_val_29016 === (3))){
var inst_29013 = (state_29015[(2)]);
var state_29015__$1 = state_29015;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29015__$1,inst_29013);
} else {
if((state_val_29016 === (12))){
var state_29015__$1 = state_29015;
var statearr_29023_29045 = state_29015__$1;
(statearr_29023_29045[(2)] = null);

(statearr_29023_29045[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29016 === (2))){
var state_29015__$1 = state_29015;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29015__$1,(4),from);
} else {
if((state_val_29016 === (11))){
var inst_29004 = (state_29015[(2)]);
var state_29015__$1 = state_29015;
if(cljs.core.truth_(inst_29004)){
var statearr_29024_29046 = state_29015__$1;
(statearr_29024_29046[(1)] = (12));

} else {
var statearr_29025_29047 = state_29015__$1;
(statearr_29025_29047[(1)] = (13));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29016 === (9))){
var state_29015__$1 = state_29015;
var statearr_29026_29048 = state_29015__$1;
(statearr_29026_29048[(2)] = null);

(statearr_29026_29048[(1)] = (10));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29016 === (5))){
var state_29015__$1 = state_29015;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29027_29049 = state_29015__$1;
(statearr_29027_29049[(1)] = (8));

} else {
var statearr_29028_29050 = state_29015__$1;
(statearr_29028_29050[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29016 === (14))){
var inst_29009 = (state_29015[(2)]);
var state_29015__$1 = state_29015;
var statearr_29029_29051 = state_29015__$1;
(statearr_29029_29051[(2)] = inst_29009);

(statearr_29029_29051[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29016 === (10))){
var inst_29001 = (state_29015[(2)]);
var state_29015__$1 = state_29015;
var statearr_29030_29052 = state_29015__$1;
(statearr_29030_29052[(2)] = inst_29001);

(statearr_29030_29052[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29016 === (8))){
var inst_28998 = cljs.core.async.close_BANG_(to);
var state_29015__$1 = state_29015;
var statearr_29031_29053 = state_29015__$1;
(statearr_29031_29053[(2)] = inst_28998);

(statearr_29031_29053[(1)] = (10));


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
});})(c__16203__auto___29039))
;
return ((function (switch__16123__auto__,c__16203__auto___29039){
return (function() {
var state_machine__16124__auto__ = null;
var state_machine__16124__auto____0 = (function (){
var statearr_29035 = [null,null,null,null,null,null,null,null];
(statearr_29035[(0)] = state_machine__16124__auto__);

(statearr_29035[(1)] = (1));

return statearr_29035;
});
var state_machine__16124__auto____1 = (function (state_29015){
while(true){
var ret_value__16125__auto__ = (function (){try{while(true){
var result__16126__auto__ = switch__16123__auto__(state_29015);
if(cljs.core.keyword_identical_QMARK_(result__16126__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16126__auto__;
}
break;
}
}catch (e29036){if((e29036 instanceof Object)){
var ex__16127__auto__ = e29036;
var statearr_29037_29054 = state_29015;
(statearr_29037_29054[(5)] = ex__16127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29015);

return cljs.core.constant$keyword$97;
} else {
throw e29036;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16125__auto__,cljs.core.constant$keyword$97)){
var G__29055 = state_29015;
state_29015 = G__29055;
continue;
} else {
return ret_value__16125__auto__;
}
break;
}
});
state_machine__16124__auto__ = function(state_29015){
switch(arguments.length){
case 0:
return state_machine__16124__auto____0.call(this);
case 1:
return state_machine__16124__auto____1.call(this,state_29015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16124__auto____0;
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16124__auto____1;
return state_machine__16124__auto__;
})()
;})(switch__16123__auto__,c__16203__auto___29039))
})();
var state__16205__auto__ = (function (){var statearr_29038 = (function (){return (f__16204__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16204__auto__.cljs$core$IFn$_invoke$arity$0() : f__16204__auto__.call(null));
})();
(statearr_29038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16203__auto___29039);

return statearr_29038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16205__auto__);
});})(c__16203__auto___29039))
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
return (function (p__29241){
var vec__29242 = p__29241;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29242,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29242,(1),null);
var job = vec__29242;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__16203__auto___29426 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16203__auto___29426,res,vec__29242,v,p,job,jobs,results){
return (function (){
var f__16204__auto__ = (function (){var switch__16123__auto__ = ((function (c__16203__auto___29426,res,vec__29242,v,p,job,jobs,results){
return (function (state_29247){
var state_val_29248 = (state_29247[(1)]);
if((state_val_29248 === (2))){
var inst_29244 = (state_29247[(2)]);
var inst_29245 = cljs.core.async.close_BANG_(res);
var state_29247__$1 = (function (){var statearr_29249 = state_29247;
(statearr_29249[(7)] = inst_29244);

return statearr_29249;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29247__$1,inst_29245);
} else {
if((state_val_29248 === (1))){
var state_29247__$1 = state_29247;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29247__$1,(2),res,v);
} else {
return null;
}
}
});})(c__16203__auto___29426,res,vec__29242,v,p,job,jobs,results))
;
return ((function (switch__16123__auto__,c__16203__auto___29426,res,vec__29242,v,p,job,jobs,results){
return (function() {
var state_machine__16124__auto__ = null;
var state_machine__16124__auto____0 = (function (){
var statearr_29253 = [null,null,null,null,null,null,null,null];
(statearr_29253[(0)] = state_machine__16124__auto__);

(statearr_29253[(1)] = (1));

return statearr_29253;
});
var state_machine__16124__auto____1 = (function (state_29247){
while(true){
var ret_value__16125__auto__ = (function (){try{while(true){
var result__16126__auto__ = switch__16123__auto__(state_29247);
if(cljs.core.keyword_identical_QMARK_(result__16126__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16126__auto__;
}
break;
}
}catch (e29254){if((e29254 instanceof Object)){
var ex__16127__auto__ = e29254;
var statearr_29255_29427 = state_29247;
(statearr_29255_29427[(5)] = ex__16127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29247);

return cljs.core.constant$keyword$97;
} else {
throw e29254;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16125__auto__,cljs.core.constant$keyword$97)){
var G__29428 = state_29247;
state_29247 = G__29428;
continue;
} else {
return ret_value__16125__auto__;
}
break;
}
});
state_machine__16124__auto__ = function(state_29247){
switch(arguments.length){
case 0:
return state_machine__16124__auto____0.call(this);
case 1:
return state_machine__16124__auto____1.call(this,state_29247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16124__auto____0;
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16124__auto____1;
return state_machine__16124__auto__;
})()
;})(switch__16123__auto__,c__16203__auto___29426,res,vec__29242,v,p,job,jobs,results))
})();
var state__16205__auto__ = (function (){var statearr_29256 = (function (){return (f__16204__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16204__auto__.cljs$core$IFn$_invoke$arity$0() : f__16204__auto__.call(null));
})();
(statearr_29256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16203__auto___29426);

return statearr_29256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16205__auto__);
});})(c__16203__auto___29426,res,vec__29242,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29257){
var vec__29258 = p__29257;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29258,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29258,(1),null);
var job = vec__29258;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__29259_29429 = v;
var G__29260_29430 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__29259_29429,G__29260_29430) : xf.call(null,G__29259_29429,G__29260_29430));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4702__auto___29431 = n;
var __29432 = (0);
while(true){
if((__29432 < n__4702__auto___29431)){
var G__29261_29433 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29261_29433) {
case "async":
var c__16203__auto___29435 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__29432,c__16203__auto___29435,G__29261_29433,n__4702__auto___29431,jobs,results,process,async){
return (function (){
var f__16204__auto__ = (function (){var switch__16123__auto__ = ((function (__29432,c__16203__auto___29435,G__29261_29433,n__4702__auto___29431,jobs,results,process,async){
return (function (state_29274){
var state_val_29275 = (state_29274[(1)]);
if((state_val_29275 === (7))){
var inst_29270 = (state_29274[(2)]);
var state_29274__$1 = state_29274;
var statearr_29276_29436 = state_29274__$1;
(statearr_29276_29436[(2)] = inst_29270);

(statearr_29276_29436[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29275 === (6))){
var state_29274__$1 = state_29274;
var statearr_29277_29437 = state_29274__$1;
(statearr_29277_29437[(2)] = null);

(statearr_29277_29437[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29275 === (5))){
var state_29274__$1 = state_29274;
var statearr_29278_29438 = state_29274__$1;
(statearr_29278_29438[(2)] = null);

(statearr_29278_29438[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29275 === (4))){
var inst_29264 = (state_29274[(2)]);
var inst_29265 = async(inst_29264);
var state_29274__$1 = state_29274;
if(cljs.core.truth_(inst_29265)){
var statearr_29279_29439 = state_29274__$1;
(statearr_29279_29439[(1)] = (5));

} else {
var statearr_29280_29440 = state_29274__$1;
(statearr_29280_29440[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29275 === (3))){
var inst_29272 = (state_29274[(2)]);
var state_29274__$1 = state_29274;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29274__$1,inst_29272);
} else {
if((state_val_29275 === (2))){
var state_29274__$1 = state_29274;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29274__$1,(4),jobs);
} else {
if((state_val_29275 === (1))){
var state_29274__$1 = state_29274;
var statearr_29281_29441 = state_29274__$1;
(statearr_29281_29441[(2)] = null);

(statearr_29281_29441[(1)] = (2));


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
});})(__29432,c__16203__auto___29435,G__29261_29433,n__4702__auto___29431,jobs,results,process,async))
;
return ((function (__29432,switch__16123__auto__,c__16203__auto___29435,G__29261_29433,n__4702__auto___29431,jobs,results,process,async){
return (function() {
var state_machine__16124__auto__ = null;
var state_machine__16124__auto____0 = (function (){
var statearr_29285 = [null,null,null,null,null,null,null];
(statearr_29285[(0)] = state_machine__16124__auto__);

(statearr_29285[(1)] = (1));

return statearr_29285;
});
var state_machine__16124__auto____1 = (function (state_29274){
while(true){
var ret_value__16125__auto__ = (function (){try{while(true){
var result__16126__auto__ = switch__16123__auto__(state_29274);
if(cljs.core.keyword_identical_QMARK_(result__16126__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16126__auto__;
}
break;
}
}catch (e29286){if((e29286 instanceof Object)){
var ex__16127__auto__ = e29286;
var statearr_29287_29442 = state_29274;
(statearr_29287_29442[(5)] = ex__16127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29274);

return cljs.core.constant$keyword$97;
} else {
throw e29286;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16125__auto__,cljs.core.constant$keyword$97)){
var G__29443 = state_29274;
state_29274 = G__29443;
continue;
} else {
return ret_value__16125__auto__;
}
break;
}
});
state_machine__16124__auto__ = function(state_29274){
switch(arguments.length){
case 0:
return state_machine__16124__auto____0.call(this);
case 1:
return state_machine__16124__auto____1.call(this,state_29274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16124__auto____0;
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16124__auto____1;
return state_machine__16124__auto__;
})()
;})(__29432,switch__16123__auto__,c__16203__auto___29435,G__29261_29433,n__4702__auto___29431,jobs,results,process,async))
})();
var state__16205__auto__ = (function (){var statearr_29288 = (function (){return (f__16204__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16204__auto__.cljs$core$IFn$_invoke$arity$0() : f__16204__auto__.call(null));
})();
(statearr_29288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16203__auto___29435);

return statearr_29288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16205__auto__);
});})(__29432,c__16203__auto___29435,G__29261_29433,n__4702__auto___29431,jobs,results,process,async))
);


break;
case "compute":
var c__16203__auto___29444 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__29432,c__16203__auto___29444,G__29261_29433,n__4702__auto___29431,jobs,results,process,async){
return (function (){
var f__16204__auto__ = (function (){var switch__16123__auto__ = ((function (__29432,c__16203__auto___29444,G__29261_29433,n__4702__auto___29431,jobs,results,process,async){
return (function (state_29301){
var state_val_29302 = (state_29301[(1)]);
if((state_val_29302 === (7))){
var inst_29297 = (state_29301[(2)]);
var state_29301__$1 = state_29301;
var statearr_29303_29445 = state_29301__$1;
(statearr_29303_29445[(2)] = inst_29297);

(statearr_29303_29445[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29302 === (6))){
var state_29301__$1 = state_29301;
var statearr_29304_29446 = state_29301__$1;
(statearr_29304_29446[(2)] = null);

(statearr_29304_29446[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29302 === (5))){
var state_29301__$1 = state_29301;
var statearr_29305_29447 = state_29301__$1;
(statearr_29305_29447[(2)] = null);

(statearr_29305_29447[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29302 === (4))){
var inst_29291 = (state_29301[(2)]);
var inst_29292 = process(inst_29291);
var state_29301__$1 = state_29301;
if(cljs.core.truth_(inst_29292)){
var statearr_29306_29448 = state_29301__$1;
(statearr_29306_29448[(1)] = (5));

} else {
var statearr_29307_29449 = state_29301__$1;
(statearr_29307_29449[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29302 === (3))){
var inst_29299 = (state_29301[(2)]);
var state_29301__$1 = state_29301;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29301__$1,inst_29299);
} else {
if((state_val_29302 === (2))){
var state_29301__$1 = state_29301;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29301__$1,(4),jobs);
} else {
if((state_val_29302 === (1))){
var state_29301__$1 = state_29301;
var statearr_29308_29450 = state_29301__$1;
(statearr_29308_29450[(2)] = null);

(statearr_29308_29450[(1)] = (2));


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
});})(__29432,c__16203__auto___29444,G__29261_29433,n__4702__auto___29431,jobs,results,process,async))
;
return ((function (__29432,switch__16123__auto__,c__16203__auto___29444,G__29261_29433,n__4702__auto___29431,jobs,results,process,async){
return (function() {
var state_machine__16124__auto__ = null;
var state_machine__16124__auto____0 = (function (){
var statearr_29312 = [null,null,null,null,null,null,null];
(statearr_29312[(0)] = state_machine__16124__auto__);

(statearr_29312[(1)] = (1));

return statearr_29312;
});
var state_machine__16124__auto____1 = (function (state_29301){
while(true){
var ret_value__16125__auto__ = (function (){try{while(true){
var result__16126__auto__ = switch__16123__auto__(state_29301);
if(cljs.core.keyword_identical_QMARK_(result__16126__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16126__auto__;
}
break;
}
}catch (e29313){if((e29313 instanceof Object)){
var ex__16127__auto__ = e29313;
var statearr_29314_29451 = state_29301;
(statearr_29314_29451[(5)] = ex__16127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29301);

return cljs.core.constant$keyword$97;
} else {
throw e29313;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16125__auto__,cljs.core.constant$keyword$97)){
var G__29452 = state_29301;
state_29301 = G__29452;
continue;
} else {
return ret_value__16125__auto__;
}
break;
}
});
state_machine__16124__auto__ = function(state_29301){
switch(arguments.length){
case 0:
return state_machine__16124__auto____0.call(this);
case 1:
return state_machine__16124__auto____1.call(this,state_29301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16124__auto____0;
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16124__auto____1;
return state_machine__16124__auto__;
})()
;})(__29432,switch__16123__auto__,c__16203__auto___29444,G__29261_29433,n__4702__auto___29431,jobs,results,process,async))
})();
var state__16205__auto__ = (function (){var statearr_29315 = (function (){return (f__16204__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16204__auto__.cljs$core$IFn$_invoke$arity$0() : f__16204__auto__.call(null));
})();
(statearr_29315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16203__auto___29444);

return statearr_29315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16205__auto__);
});})(__29432,c__16203__auto___29444,G__29261_29433,n__4702__auto___29431,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__29453 = (__29432 + (1));
__29432 = G__29453;
continue;
} else {
}
break;
}

var c__16203__auto___29454 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16203__auto___29454,jobs,results,process,async){
return (function (){
var f__16204__auto__ = (function (){var switch__16123__auto__ = ((function (c__16203__auto___29454,jobs,results,process,async){
return (function (state_29337){
var state_val_29338 = (state_29337[(1)]);
if((state_val_29338 === (9))){
var inst_29330 = (state_29337[(2)]);
var state_29337__$1 = (function (){var statearr_29339 = state_29337;
(statearr_29339[(7)] = inst_29330);

return statearr_29339;
})();
var statearr_29340_29455 = state_29337__$1;
(statearr_29340_29455[(2)] = null);

(statearr_29340_29455[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29338 === (8))){
var inst_29323 = (state_29337[(8)]);
var inst_29328 = (state_29337[(2)]);
var state_29337__$1 = (function (){var statearr_29341 = state_29337;
(statearr_29341[(9)] = inst_29328);

return statearr_29341;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29337__$1,(9),results,inst_29323);
} else {
if((state_val_29338 === (7))){
var inst_29333 = (state_29337[(2)]);
var state_29337__$1 = state_29337;
var statearr_29342_29456 = state_29337__$1;
(statearr_29342_29456[(2)] = inst_29333);

(statearr_29342_29456[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29338 === (6))){
var inst_29318 = (state_29337[(10)]);
var inst_29323 = (state_29337[(8)]);
var inst_29323__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_29324 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29325 = [inst_29318,inst_29323__$1];
var inst_29326 = (new cljs.core.PersistentVector(null,2,(5),inst_29324,inst_29325,null));
var state_29337__$1 = (function (){var statearr_29343 = state_29337;
(statearr_29343[(8)] = inst_29323__$1);

return statearr_29343;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29337__$1,(8),jobs,inst_29326);
} else {
if((state_val_29338 === (5))){
var inst_29321 = cljs.core.async.close_BANG_(jobs);
var state_29337__$1 = state_29337;
var statearr_29344_29457 = state_29337__$1;
(statearr_29344_29457[(2)] = inst_29321);

(statearr_29344_29457[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29338 === (4))){
var inst_29318 = (state_29337[(10)]);
var inst_29318__$1 = (state_29337[(2)]);
var inst_29319 = (inst_29318__$1 == null);
var state_29337__$1 = (function (){var statearr_29345 = state_29337;
(statearr_29345[(10)] = inst_29318__$1);

return statearr_29345;
})();
if(cljs.core.truth_(inst_29319)){
var statearr_29346_29458 = state_29337__$1;
(statearr_29346_29458[(1)] = (5));

} else {
var statearr_29347_29459 = state_29337__$1;
(statearr_29347_29459[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29338 === (3))){
var inst_29335 = (state_29337[(2)]);
var state_29337__$1 = state_29337;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29337__$1,inst_29335);
} else {
if((state_val_29338 === (2))){
var state_29337__$1 = state_29337;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29337__$1,(4),from);
} else {
if((state_val_29338 === (1))){
var state_29337__$1 = state_29337;
var statearr_29348_29460 = state_29337__$1;
(statearr_29348_29460[(2)] = null);

(statearr_29348_29460[(1)] = (2));


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
});})(c__16203__auto___29454,jobs,results,process,async))
;
return ((function (switch__16123__auto__,c__16203__auto___29454,jobs,results,process,async){
return (function() {
var state_machine__16124__auto__ = null;
var state_machine__16124__auto____0 = (function (){
var statearr_29352 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29352[(0)] = state_machine__16124__auto__);

(statearr_29352[(1)] = (1));

return statearr_29352;
});
var state_machine__16124__auto____1 = (function (state_29337){
while(true){
var ret_value__16125__auto__ = (function (){try{while(true){
var result__16126__auto__ = switch__16123__auto__(state_29337);
if(cljs.core.keyword_identical_QMARK_(result__16126__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16126__auto__;
}
break;
}
}catch (e29353){if((e29353 instanceof Object)){
var ex__16127__auto__ = e29353;
var statearr_29354_29461 = state_29337;
(statearr_29354_29461[(5)] = ex__16127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29337);

return cljs.core.constant$keyword$97;
} else {
throw e29353;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16125__auto__,cljs.core.constant$keyword$97)){
var G__29462 = state_29337;
state_29337 = G__29462;
continue;
} else {
return ret_value__16125__auto__;
}
break;
}
});
state_machine__16124__auto__ = function(state_29337){
switch(arguments.length){
case 0:
return state_machine__16124__auto____0.call(this);
case 1:
return state_machine__16124__auto____1.call(this,state_29337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16124__auto____0;
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16124__auto____1;
return state_machine__16124__auto__;
})()
;})(switch__16123__auto__,c__16203__auto___29454,jobs,results,process,async))
})();
var state__16205__auto__ = (function (){var statearr_29355 = (function (){return (f__16204__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16204__auto__.cljs$core$IFn$_invoke$arity$0() : f__16204__auto__.call(null));
})();
(statearr_29355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16203__auto___29454);

return statearr_29355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16205__auto__);
});})(c__16203__auto___29454,jobs,results,process,async))
);


var c__16203__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16203__auto__,jobs,results,process,async){
return (function (){
var f__16204__auto__ = (function (){var switch__16123__auto__ = ((function (c__16203__auto__,jobs,results,process,async){
return (function (state_29393){
var state_val_29394 = (state_29393[(1)]);
if((state_val_29394 === (7))){
var inst_29389 = (state_29393[(2)]);
var state_29393__$1 = state_29393;
var statearr_29395_29463 = state_29393__$1;
(statearr_29395_29463[(2)] = inst_29389);

(statearr_29395_29463[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29394 === (20))){
var state_29393__$1 = state_29393;
var statearr_29396_29464 = state_29393__$1;
(statearr_29396_29464[(2)] = null);

(statearr_29396_29464[(1)] = (21));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29394 === (1))){
var state_29393__$1 = state_29393;
var statearr_29397_29465 = state_29393__$1;
(statearr_29397_29465[(2)] = null);

(statearr_29397_29465[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29394 === (4))){
var inst_29358 = (state_29393[(7)]);
var inst_29358__$1 = (state_29393[(2)]);
var inst_29359 = (inst_29358__$1 == null);
var state_29393__$1 = (function (){var statearr_29398 = state_29393;
(statearr_29398[(7)] = inst_29358__$1);

return statearr_29398;
})();
if(cljs.core.truth_(inst_29359)){
var statearr_29399_29466 = state_29393__$1;
(statearr_29399_29466[(1)] = (5));

} else {
var statearr_29400_29467 = state_29393__$1;
(statearr_29400_29467[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29394 === (15))){
var inst_29371 = (state_29393[(8)]);
var state_29393__$1 = state_29393;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29393__$1,(18),to,inst_29371);
} else {
if((state_val_29394 === (21))){
var inst_29384 = (state_29393[(2)]);
var state_29393__$1 = state_29393;
var statearr_29401_29468 = state_29393__$1;
(statearr_29401_29468[(2)] = inst_29384);

(statearr_29401_29468[(1)] = (13));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29394 === (13))){
var inst_29386 = (state_29393[(2)]);
var state_29393__$1 = (function (){var statearr_29402 = state_29393;
(statearr_29402[(9)] = inst_29386);

return statearr_29402;
})();
var statearr_29403_29469 = state_29393__$1;
(statearr_29403_29469[(2)] = null);

(statearr_29403_29469[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29394 === (6))){
var inst_29358 = (state_29393[(7)]);
var state_29393__$1 = state_29393;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29393__$1,(11),inst_29358);
} else {
if((state_val_29394 === (17))){
var inst_29379 = (state_29393[(2)]);
var state_29393__$1 = state_29393;
if(cljs.core.truth_(inst_29379)){
var statearr_29404_29470 = state_29393__$1;
(statearr_29404_29470[(1)] = (19));

} else {
var statearr_29405_29471 = state_29393__$1;
(statearr_29405_29471[(1)] = (20));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29394 === (3))){
var inst_29391 = (state_29393[(2)]);
var state_29393__$1 = state_29393;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29393__$1,inst_29391);
} else {
if((state_val_29394 === (12))){
var inst_29368 = (state_29393[(10)]);
var state_29393__$1 = state_29393;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29393__$1,(14),inst_29368);
} else {
if((state_val_29394 === (2))){
var state_29393__$1 = state_29393;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29393__$1,(4),results);
} else {
if((state_val_29394 === (19))){
var state_29393__$1 = state_29393;
var statearr_29406_29472 = state_29393__$1;
(statearr_29406_29472[(2)] = null);

(statearr_29406_29472[(1)] = (12));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29394 === (11))){
var inst_29368 = (state_29393[(2)]);
var state_29393__$1 = (function (){var statearr_29407 = state_29393;
(statearr_29407[(10)] = inst_29368);

return statearr_29407;
})();
var statearr_29408_29473 = state_29393__$1;
(statearr_29408_29473[(2)] = null);

(statearr_29408_29473[(1)] = (12));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29394 === (9))){
var state_29393__$1 = state_29393;
var statearr_29409_29474 = state_29393__$1;
(statearr_29409_29474[(2)] = null);

(statearr_29409_29474[(1)] = (10));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29394 === (5))){
var state_29393__$1 = state_29393;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29410_29475 = state_29393__$1;
(statearr_29410_29475[(1)] = (8));

} else {
var statearr_29411_29476 = state_29393__$1;
(statearr_29411_29476[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29394 === (14))){
var inst_29371 = (state_29393[(8)]);
var inst_29373 = (state_29393[(11)]);
var inst_29371__$1 = (state_29393[(2)]);
var inst_29372 = (inst_29371__$1 == null);
var inst_29373__$1 = cljs.core.not(inst_29372);
var state_29393__$1 = (function (){var statearr_29412 = state_29393;
(statearr_29412[(8)] = inst_29371__$1);

(statearr_29412[(11)] = inst_29373__$1);

return statearr_29412;
})();
if(inst_29373__$1){
var statearr_29413_29477 = state_29393__$1;
(statearr_29413_29477[(1)] = (15));

} else {
var statearr_29414_29478 = state_29393__$1;
(statearr_29414_29478[(1)] = (16));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29394 === (16))){
var inst_29373 = (state_29393[(11)]);
var state_29393__$1 = state_29393;
var statearr_29415_29479 = state_29393__$1;
(statearr_29415_29479[(2)] = inst_29373);

(statearr_29415_29479[(1)] = (17));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29394 === (10))){
var inst_29365 = (state_29393[(2)]);
var state_29393__$1 = state_29393;
var statearr_29416_29480 = state_29393__$1;
(statearr_29416_29480[(2)] = inst_29365);

(statearr_29416_29480[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29394 === (18))){
var inst_29376 = (state_29393[(2)]);
var state_29393__$1 = state_29393;
var statearr_29417_29481 = state_29393__$1;
(statearr_29417_29481[(2)] = inst_29376);

(statearr_29417_29481[(1)] = (17));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29394 === (8))){
var inst_29362 = cljs.core.async.close_BANG_(to);
var state_29393__$1 = state_29393;
var statearr_29418_29482 = state_29393__$1;
(statearr_29418_29482[(2)] = inst_29362);

(statearr_29418_29482[(1)] = (10));


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
var statearr_29422 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29422[(0)] = state_machine__16124__auto__);

(statearr_29422[(1)] = (1));

return statearr_29422;
});
var state_machine__16124__auto____1 = (function (state_29393){
while(true){
var ret_value__16125__auto__ = (function (){try{while(true){
var result__16126__auto__ = switch__16123__auto__(state_29393);
if(cljs.core.keyword_identical_QMARK_(result__16126__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16126__auto__;
}
break;
}
}catch (e29423){if((e29423 instanceof Object)){
var ex__16127__auto__ = e29423;
var statearr_29424_29483 = state_29393;
(statearr_29424_29483[(5)] = ex__16127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29393);

return cljs.core.constant$keyword$97;
} else {
throw e29423;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16125__auto__,cljs.core.constant$keyword$97)){
var G__29484 = state_29393;
state_29393 = G__29484;
continue;
} else {
return ret_value__16125__auto__;
}
break;
}
});
state_machine__16124__auto__ = function(state_29393){
switch(arguments.length){
case 0:
return state_machine__16124__auto____0.call(this);
case 1:
return state_machine__16124__auto____1.call(this,state_29393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16124__auto____0;
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16124__auto____1;
return state_machine__16124__auto__;
})()
;})(switch__16123__auto__,c__16203__auto__,jobs,results,process,async))
})();
var state__16205__auto__ = (function (){var statearr_29425 = (function (){return (f__16204__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16204__auto__.cljs$core$IFn$_invoke$arity$0() : f__16204__auto__.call(null));
})();
(statearr_29425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16203__auto__);

return statearr_29425;
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
var c__16203__auto___29607 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16203__auto___29607,tc,fc){
return (function (){
var f__16204__auto__ = (function (){var switch__16123__auto__ = ((function (c__16203__auto___29607,tc,fc){
return (function (state_29581){
var state_val_29582 = (state_29581[(1)]);
if((state_val_29582 === (7))){
var inst_29577 = (state_29581[(2)]);
var state_29581__$1 = state_29581;
var statearr_29583_29608 = state_29581__$1;
(statearr_29583_29608[(2)] = inst_29577);

(statearr_29583_29608[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29582 === (1))){
var state_29581__$1 = state_29581;
var statearr_29584_29609 = state_29581__$1;
(statearr_29584_29609[(2)] = null);

(statearr_29584_29609[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29582 === (4))){
var inst_29558 = (state_29581[(7)]);
var inst_29558__$1 = (state_29581[(2)]);
var inst_29559 = (inst_29558__$1 == null);
var state_29581__$1 = (function (){var statearr_29585 = state_29581;
(statearr_29585[(7)] = inst_29558__$1);

return statearr_29585;
})();
if(cljs.core.truth_(inst_29559)){
var statearr_29586_29610 = state_29581__$1;
(statearr_29586_29610[(1)] = (5));

} else {
var statearr_29587_29611 = state_29581__$1;
(statearr_29587_29611[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29582 === (13))){
var state_29581__$1 = state_29581;
var statearr_29588_29612 = state_29581__$1;
(statearr_29588_29612[(2)] = null);

(statearr_29588_29612[(1)] = (14));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29582 === (6))){
var inst_29558 = (state_29581[(7)]);
var inst_29564 = (function (){var G__29589 = inst_29558;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__29589) : p.call(null,G__29589));
})();
var state_29581__$1 = state_29581;
if(cljs.core.truth_(inst_29564)){
var statearr_29590_29613 = state_29581__$1;
(statearr_29590_29613[(1)] = (9));

} else {
var statearr_29591_29614 = state_29581__$1;
(statearr_29591_29614[(1)] = (10));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29582 === (3))){
var inst_29579 = (state_29581[(2)]);
var state_29581__$1 = state_29581;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29581__$1,inst_29579);
} else {
if((state_val_29582 === (12))){
var state_29581__$1 = state_29581;
var statearr_29592_29615 = state_29581__$1;
(statearr_29592_29615[(2)] = null);

(statearr_29592_29615[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29582 === (2))){
var state_29581__$1 = state_29581;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29581__$1,(4),ch);
} else {
if((state_val_29582 === (11))){
var inst_29558 = (state_29581[(7)]);
var inst_29568 = (state_29581[(2)]);
var state_29581__$1 = state_29581;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29581__$1,(8),inst_29568,inst_29558);
} else {
if((state_val_29582 === (9))){
var state_29581__$1 = state_29581;
var statearr_29593_29616 = state_29581__$1;
(statearr_29593_29616[(2)] = tc);

(statearr_29593_29616[(1)] = (11));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29582 === (5))){
var inst_29561 = cljs.core.async.close_BANG_(tc);
var inst_29562 = cljs.core.async.close_BANG_(fc);
var state_29581__$1 = (function (){var statearr_29594 = state_29581;
(statearr_29594[(8)] = inst_29561);

return statearr_29594;
})();
var statearr_29595_29617 = state_29581__$1;
(statearr_29595_29617[(2)] = inst_29562);

(statearr_29595_29617[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29582 === (14))){
var inst_29575 = (state_29581[(2)]);
var state_29581__$1 = state_29581;
var statearr_29596_29618 = state_29581__$1;
(statearr_29596_29618[(2)] = inst_29575);

(statearr_29596_29618[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29582 === (10))){
var state_29581__$1 = state_29581;
var statearr_29597_29619 = state_29581__$1;
(statearr_29597_29619[(2)] = fc);

(statearr_29597_29619[(1)] = (11));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29582 === (8))){
var inst_29570 = (state_29581[(2)]);
var state_29581__$1 = state_29581;
if(cljs.core.truth_(inst_29570)){
var statearr_29598_29620 = state_29581__$1;
(statearr_29598_29620[(1)] = (12));

} else {
var statearr_29599_29621 = state_29581__$1;
(statearr_29599_29621[(1)] = (13));

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
});})(c__16203__auto___29607,tc,fc))
;
return ((function (switch__16123__auto__,c__16203__auto___29607,tc,fc){
return (function() {
var state_machine__16124__auto__ = null;
var state_machine__16124__auto____0 = (function (){
var statearr_29603 = [null,null,null,null,null,null,null,null,null];
(statearr_29603[(0)] = state_machine__16124__auto__);

(statearr_29603[(1)] = (1));

return statearr_29603;
});
var state_machine__16124__auto____1 = (function (state_29581){
while(true){
var ret_value__16125__auto__ = (function (){try{while(true){
var result__16126__auto__ = switch__16123__auto__(state_29581);
if(cljs.core.keyword_identical_QMARK_(result__16126__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16126__auto__;
}
break;
}
}catch (e29604){if((e29604 instanceof Object)){
var ex__16127__auto__ = e29604;
var statearr_29605_29622 = state_29581;
(statearr_29605_29622[(5)] = ex__16127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29581);

return cljs.core.constant$keyword$97;
} else {
throw e29604;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16125__auto__,cljs.core.constant$keyword$97)){
var G__29623 = state_29581;
state_29581 = G__29623;
continue;
} else {
return ret_value__16125__auto__;
}
break;
}
});
state_machine__16124__auto__ = function(state_29581){
switch(arguments.length){
case 0:
return state_machine__16124__auto____0.call(this);
case 1:
return state_machine__16124__auto____1.call(this,state_29581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16124__auto____0;
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16124__auto____1;
return state_machine__16124__auto__;
})()
;})(switch__16123__auto__,c__16203__auto___29607,tc,fc))
})();
var state__16205__auto__ = (function (){var statearr_29606 = (function (){return (f__16204__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16204__auto__.cljs$core$IFn$_invoke$arity$0() : f__16204__auto__.call(null));
})();
(statearr_29606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16203__auto___29607);

return statearr_29606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16205__auto__);
});})(c__16203__auto___29607,tc,fc))
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
return (function (state_29672){
var state_val_29673 = (state_29672[(1)]);
if((state_val_29673 === (7))){
var inst_29668 = (state_29672[(2)]);
var state_29672__$1 = state_29672;
var statearr_29674_29692 = state_29672__$1;
(statearr_29674_29692[(2)] = inst_29668);

(statearr_29674_29692[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29673 === (6))){
var inst_29661 = (state_29672[(7)]);
var inst_29658 = (state_29672[(8)]);
var inst_29665 = (function (){var G__29675 = inst_29658;
var G__29676 = inst_29661;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__29675,G__29676) : f.call(null,G__29675,G__29676));
})();
var inst_29658__$1 = inst_29665;
var state_29672__$1 = (function (){var statearr_29677 = state_29672;
(statearr_29677[(8)] = inst_29658__$1);

return statearr_29677;
})();
var statearr_29678_29693 = state_29672__$1;
(statearr_29678_29693[(2)] = null);

(statearr_29678_29693[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29673 === (5))){
var inst_29658 = (state_29672[(8)]);
var state_29672__$1 = state_29672;
var statearr_29679_29694 = state_29672__$1;
(statearr_29679_29694[(2)] = inst_29658);

(statearr_29679_29694[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29673 === (4))){
var inst_29661 = (state_29672[(7)]);
var inst_29661__$1 = (state_29672[(2)]);
var inst_29662 = (inst_29661__$1 == null);
var state_29672__$1 = (function (){var statearr_29680 = state_29672;
(statearr_29680[(7)] = inst_29661__$1);

return statearr_29680;
})();
if(cljs.core.truth_(inst_29662)){
var statearr_29681_29695 = state_29672__$1;
(statearr_29681_29695[(1)] = (5));

} else {
var statearr_29682_29696 = state_29672__$1;
(statearr_29682_29696[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29673 === (3))){
var inst_29670 = (state_29672[(2)]);
var state_29672__$1 = state_29672;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29672__$1,inst_29670);
} else {
if((state_val_29673 === (2))){
var state_29672__$1 = state_29672;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29672__$1,(4),ch);
} else {
if((state_val_29673 === (1))){
var inst_29658 = init;
var state_29672__$1 = (function (){var statearr_29683 = state_29672;
(statearr_29683[(8)] = inst_29658);

return statearr_29683;
})();
var statearr_29684_29697 = state_29672__$1;
(statearr_29684_29697[(2)] = null);

(statearr_29684_29697[(1)] = (2));


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
var statearr_29688 = [null,null,null,null,null,null,null,null,null];
(statearr_29688[(0)] = state_machine__16124__auto__);

(statearr_29688[(1)] = (1));

return statearr_29688;
});
var state_machine__16124__auto____1 = (function (state_29672){
while(true){
var ret_value__16125__auto__ = (function (){try{while(true){
var result__16126__auto__ = switch__16123__auto__(state_29672);
if(cljs.core.keyword_identical_QMARK_(result__16126__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16126__auto__;
}
break;
}
}catch (e29689){if((e29689 instanceof Object)){
var ex__16127__auto__ = e29689;
var statearr_29690_29698 = state_29672;
(statearr_29690_29698[(5)] = ex__16127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29672);

return cljs.core.constant$keyword$97;
} else {
throw e29689;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16125__auto__,cljs.core.constant$keyword$97)){
var G__29699 = state_29672;
state_29672 = G__29699;
continue;
} else {
return ret_value__16125__auto__;
}
break;
}
});
state_machine__16124__auto__ = function(state_29672){
switch(arguments.length){
case 0:
return state_machine__16124__auto____0.call(this);
case 1:
return state_machine__16124__auto____1.call(this,state_29672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16124__auto____0;
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16124__auto____1;
return state_machine__16124__auto__;
})()
;})(switch__16123__auto__,c__16203__auto__))
})();
var state__16205__auto__ = (function (){var statearr_29691 = (function (){return (f__16204__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16204__auto__.cljs$core$IFn$_invoke$arity$0() : f__16204__auto__.call(null));
})();
(statearr_29691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16203__auto__);

return statearr_29691;
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
return (function (state_29776){
var state_val_29777 = (state_29776[(1)]);
if((state_val_29777 === (7))){
var inst_29758 = (state_29776[(2)]);
var state_29776__$1 = state_29776;
var statearr_29778_29801 = state_29776__$1;
(statearr_29778_29801[(2)] = inst_29758);

(statearr_29778_29801[(1)] = (6));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29777 === (1))){
var inst_29752 = cljs.core.seq(coll);
var inst_29753 = inst_29752;
var state_29776__$1 = (function (){var statearr_29779 = state_29776;
(statearr_29779[(7)] = inst_29753);

return statearr_29779;
})();
var statearr_29780_29802 = state_29776__$1;
(statearr_29780_29802[(2)] = null);

(statearr_29780_29802[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29777 === (4))){
var inst_29753 = (state_29776[(7)]);
var inst_29756 = cljs.core.first(inst_29753);
var state_29776__$1 = state_29776;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29776__$1,(7),ch,inst_29756);
} else {
if((state_val_29777 === (13))){
var inst_29770 = (state_29776[(2)]);
var state_29776__$1 = state_29776;
var statearr_29781_29803 = state_29776__$1;
(statearr_29781_29803[(2)] = inst_29770);

(statearr_29781_29803[(1)] = (10));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29777 === (6))){
var inst_29761 = (state_29776[(2)]);
var state_29776__$1 = state_29776;
if(cljs.core.truth_(inst_29761)){
var statearr_29782_29804 = state_29776__$1;
(statearr_29782_29804[(1)] = (8));

} else {
var statearr_29783_29805 = state_29776__$1;
(statearr_29783_29805[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29777 === (3))){
var inst_29774 = (state_29776[(2)]);
var state_29776__$1 = state_29776;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29776__$1,inst_29774);
} else {
if((state_val_29777 === (12))){
var state_29776__$1 = state_29776;
var statearr_29784_29806 = state_29776__$1;
(statearr_29784_29806[(2)] = null);

(statearr_29784_29806[(1)] = (13));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29777 === (2))){
var inst_29753 = (state_29776[(7)]);
var state_29776__$1 = state_29776;
if(cljs.core.truth_(inst_29753)){
var statearr_29785_29807 = state_29776__$1;
(statearr_29785_29807[(1)] = (4));

} else {
var statearr_29786_29808 = state_29776__$1;
(statearr_29786_29808[(1)] = (5));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29777 === (11))){
var inst_29767 = cljs.core.async.close_BANG_(ch);
var state_29776__$1 = state_29776;
var statearr_29787_29809 = state_29776__$1;
(statearr_29787_29809[(2)] = inst_29767);

(statearr_29787_29809[(1)] = (13));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29777 === (9))){
var state_29776__$1 = state_29776;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29788_29810 = state_29776__$1;
(statearr_29788_29810[(1)] = (11));

} else {
var statearr_29789_29811 = state_29776__$1;
(statearr_29789_29811[(1)] = (12));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29777 === (5))){
var inst_29753 = (state_29776[(7)]);
var state_29776__$1 = state_29776;
var statearr_29790_29812 = state_29776__$1;
(statearr_29790_29812[(2)] = inst_29753);

(statearr_29790_29812[(1)] = (6));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29777 === (10))){
var inst_29772 = (state_29776[(2)]);
var state_29776__$1 = state_29776;
var statearr_29791_29813 = state_29776__$1;
(statearr_29791_29813[(2)] = inst_29772);

(statearr_29791_29813[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29777 === (8))){
var inst_29753 = (state_29776[(7)]);
var inst_29763 = cljs.core.next(inst_29753);
var inst_29753__$1 = inst_29763;
var state_29776__$1 = (function (){var statearr_29792 = state_29776;
(statearr_29792[(7)] = inst_29753__$1);

return statearr_29792;
})();
var statearr_29793_29814 = state_29776__$1;
(statearr_29793_29814[(2)] = null);

(statearr_29793_29814[(1)] = (2));


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
var statearr_29797 = [null,null,null,null,null,null,null,null];
(statearr_29797[(0)] = state_machine__16124__auto__);

(statearr_29797[(1)] = (1));

return statearr_29797;
});
var state_machine__16124__auto____1 = (function (state_29776){
while(true){
var ret_value__16125__auto__ = (function (){try{while(true){
var result__16126__auto__ = switch__16123__auto__(state_29776);
if(cljs.core.keyword_identical_QMARK_(result__16126__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16126__auto__;
}
break;
}
}catch (e29798){if((e29798 instanceof Object)){
var ex__16127__auto__ = e29798;
var statearr_29799_29815 = state_29776;
(statearr_29799_29815[(5)] = ex__16127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29776);

return cljs.core.constant$keyword$97;
} else {
throw e29798;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16125__auto__,cljs.core.constant$keyword$97)){
var G__29816 = state_29776;
state_29776 = G__29816;
continue;
} else {
return ret_value__16125__auto__;
}
break;
}
});
state_machine__16124__auto__ = function(state_29776){
switch(arguments.length){
case 0:
return state_machine__16124__auto____0.call(this);
case 1:
return state_machine__16124__auto____1.call(this,state_29776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16124__auto____0;
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16124__auto____1;
return state_machine__16124__auto__;
})()
;})(switch__16123__auto__,c__16203__auto__))
})();
var state__16205__auto__ = (function (){var statearr_29800 = (function (){return (f__16204__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16204__auto__.cljs$core$IFn$_invoke$arity$0() : f__16204__auto__.call(null));
})();
(statearr_29800[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16203__auto__);

return statearr_29800;
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

cljs.core.async.Mux = (function (){var obj29818 = {};
return obj29818;
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
return (function (){var or__3815__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__29822 = x__4459__auto__;
return goog.typeOf(G__29822);
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


cljs.core.async.Mult = (function (){var obj29824 = {};
return obj29824;
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
return (function (){var or__3815__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__29828 = x__4459__auto__;
return goog.typeOf(G__29828);
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
return (function (){var or__3815__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__29832 = x__4459__auto__;
return goog.typeOf(G__29832);
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
return (function (){var or__3815__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__29836 = x__4459__auto__;
return goog.typeOf(G__29836);
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
var cs = (function (){var G__30066 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30066) : cljs.core.atom.call(null,G__30066));
})();
var m = (function (){
if(typeof cljs.core.async.t30067 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30067 = (function (cs,ch,mult,meta30068){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta30068 = meta30068;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30067.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t30067.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t30067.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t30067.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__30070_30295 = self__.cs;
var G__30071_30296 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__30070_30295,G__30071_30296) : cljs.core.reset_BANG_.call(null,G__30070_30295,G__30071_30296));

return null;
});})(cs))
;

cljs.core.async.t30067.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30067.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t30067.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30069){
var self__ = this;
var _30069__$1 = this;
return self__.meta30068;
});})(cs))
;

cljs.core.async.t30067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30069,meta30068__$1){
var self__ = this;
var _30069__$1 = this;
return (new cljs.core.async.t30067(self__.cs,self__.ch,self__.mult,meta30068__$1));
});})(cs))
;

cljs.core.async.t30067.cljs$lang$type = true;

cljs.core.async.t30067.cljs$lang$ctorStr = "cljs.core.async/t30067";

cljs.core.async.t30067.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t30067");
});})(cs))
;

cljs.core.async.__GT_t30067 = ((function (cs){
return (function __GT_t30067(cs__$1,ch__$1,mult__$1,meta30068){
return (new cljs.core.async.t30067(cs__$1,ch__$1,mult__$1,meta30068));
});})(cs))
;

}

return (new cljs.core.async.t30067(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__30072 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30072) : cljs.core.atom.call(null,G__30072));
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
var c__16203__auto___30297 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16203__auto___30297,cs,m,dchan,dctr,done){
return (function (){
var f__16204__auto__ = (function (){var switch__16123__auto__ = ((function (c__16203__auto___30297,cs,m,dchan,dctr,done){
return (function (state_30203){
var state_val_30204 = (state_30203[(1)]);
if((state_val_30204 === (7))){
var inst_30199 = (state_30203[(2)]);
var state_30203__$1 = state_30203;
var statearr_30205_30298 = state_30203__$1;
(statearr_30205_30298[(2)] = inst_30199);

(statearr_30205_30298[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30204 === (20))){
var inst_30104 = (state_30203[(7)]);
var inst_30114 = cljs.core.first(inst_30104);
var inst_30115 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30114,(0),null);
var inst_30116 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30114,(1),null);
var state_30203__$1 = (function (){var statearr_30206 = state_30203;
(statearr_30206[(8)] = inst_30115);

return statearr_30206;
})();
if(cljs.core.truth_(inst_30116)){
var statearr_30207_30299 = state_30203__$1;
(statearr_30207_30299[(1)] = (22));

} else {
var statearr_30208_30300 = state_30203__$1;
(statearr_30208_30300[(1)] = (23));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30204 === (27))){
var inst_30146 = (state_30203[(9)]);
var inst_30144 = (state_30203[(10)]);
var inst_30151 = (state_30203[(11)]);
var inst_30075 = (state_30203[(12)]);
var inst_30151__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30144,inst_30146);
var inst_30152 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30151__$1,inst_30075,done);
var state_30203__$1 = (function (){var statearr_30209 = state_30203;
(statearr_30209[(11)] = inst_30151__$1);

return statearr_30209;
})();
if(cljs.core.truth_(inst_30152)){
var statearr_30210_30301 = state_30203__$1;
(statearr_30210_30301[(1)] = (30));

} else {
var statearr_30211_30302 = state_30203__$1;
(statearr_30211_30302[(1)] = (31));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30204 === (1))){
var state_30203__$1 = state_30203;
var statearr_30212_30303 = state_30203__$1;
(statearr_30212_30303[(2)] = null);

(statearr_30212_30303[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30204 === (24))){
var inst_30104 = (state_30203[(7)]);
var inst_30121 = (state_30203[(2)]);
var inst_30122 = cljs.core.next(inst_30104);
var inst_30084 = inst_30122;
var inst_30085 = null;
var inst_30086 = (0);
var inst_30087 = (0);
var state_30203__$1 = (function (){var statearr_30213 = state_30203;
(statearr_30213[(13)] = inst_30086);

(statearr_30213[(14)] = inst_30121);

(statearr_30213[(15)] = inst_30085);

(statearr_30213[(16)] = inst_30087);

(statearr_30213[(17)] = inst_30084);

return statearr_30213;
})();
var statearr_30214_30304 = state_30203__$1;
(statearr_30214_30304[(2)] = null);

(statearr_30214_30304[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30204 === (39))){
var state_30203__$1 = state_30203;
var statearr_30218_30305 = state_30203__$1;
(statearr_30218_30305[(2)] = null);

(statearr_30218_30305[(1)] = (41));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30204 === (4))){
var inst_30075 = (state_30203[(12)]);
var inst_30075__$1 = (state_30203[(2)]);
var inst_30076 = (inst_30075__$1 == null);
var state_30203__$1 = (function (){var statearr_30219 = state_30203;
(statearr_30219[(12)] = inst_30075__$1);

return statearr_30219;
})();
if(cljs.core.truth_(inst_30076)){
var statearr_30220_30306 = state_30203__$1;
(statearr_30220_30306[(1)] = (5));

} else {
var statearr_30221_30307 = state_30203__$1;
(statearr_30221_30307[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30204 === (15))){
var inst_30086 = (state_30203[(13)]);
var inst_30085 = (state_30203[(15)]);
var inst_30087 = (state_30203[(16)]);
var inst_30084 = (state_30203[(17)]);
var inst_30100 = (state_30203[(2)]);
var inst_30101 = (inst_30087 + (1));
var tmp30215 = inst_30086;
var tmp30216 = inst_30085;
var tmp30217 = inst_30084;
var inst_30084__$1 = tmp30217;
var inst_30085__$1 = tmp30216;
var inst_30086__$1 = tmp30215;
var inst_30087__$1 = inst_30101;
var state_30203__$1 = (function (){var statearr_30222 = state_30203;
(statearr_30222[(13)] = inst_30086__$1);

(statearr_30222[(15)] = inst_30085__$1);

(statearr_30222[(16)] = inst_30087__$1);

(statearr_30222[(18)] = inst_30100);

(statearr_30222[(17)] = inst_30084__$1);

return statearr_30222;
})();
var statearr_30223_30308 = state_30203__$1;
(statearr_30223_30308[(2)] = null);

(statearr_30223_30308[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30204 === (21))){
var inst_30125 = (state_30203[(2)]);
var state_30203__$1 = state_30203;
var statearr_30227_30309 = state_30203__$1;
(statearr_30227_30309[(2)] = inst_30125);

(statearr_30227_30309[(1)] = (18));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30204 === (31))){
var inst_30151 = (state_30203[(11)]);
var inst_30155 = done(null);
var inst_30156 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30151);
var state_30203__$1 = (function (){var statearr_30228 = state_30203;
(statearr_30228[(19)] = inst_30155);

return statearr_30228;
})();
var statearr_30229_30310 = state_30203__$1;
(statearr_30229_30310[(2)] = inst_30156);

(statearr_30229_30310[(1)] = (32));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30204 === (32))){
var inst_30146 = (state_30203[(9)]);
var inst_30145 = (state_30203[(20)]);
var inst_30144 = (state_30203[(10)]);
var inst_30143 = (state_30203[(21)]);
var inst_30158 = (state_30203[(2)]);
var inst_30159 = (inst_30146 + (1));
var tmp30224 = inst_30145;
var tmp30225 = inst_30144;
var tmp30226 = inst_30143;
var inst_30143__$1 = tmp30226;
var inst_30144__$1 = tmp30225;
var inst_30145__$1 = tmp30224;
var inst_30146__$1 = inst_30159;
var state_30203__$1 = (function (){var statearr_30230 = state_30203;
(statearr_30230[(22)] = inst_30158);

(statearr_30230[(9)] = inst_30146__$1);

(statearr_30230[(20)] = inst_30145__$1);

(statearr_30230[(10)] = inst_30144__$1);

(statearr_30230[(21)] = inst_30143__$1);

return statearr_30230;
})();
var statearr_30231_30311 = state_30203__$1;
(statearr_30231_30311[(2)] = null);

(statearr_30231_30311[(1)] = (25));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30204 === (40))){
var inst_30171 = (state_30203[(23)]);
var inst_30175 = done(null);
var inst_30176 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30171);
var state_30203__$1 = (function (){var statearr_30232 = state_30203;
(statearr_30232[(24)] = inst_30175);

return statearr_30232;
})();
var statearr_30233_30312 = state_30203__$1;
(statearr_30233_30312[(2)] = inst_30176);

(statearr_30233_30312[(1)] = (41));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30204 === (33))){
var inst_30162 = (state_30203[(25)]);
var inst_30164 = cljs.core.chunked_seq_QMARK_(inst_30162);
var state_30203__$1 = state_30203;
if(inst_30164){
var statearr_30234_30313 = state_30203__$1;
(statearr_30234_30313[(1)] = (36));

} else {
var statearr_30235_30314 = state_30203__$1;
(statearr_30235_30314[(1)] = (37));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30204 === (13))){
var inst_30094 = (state_30203[(26)]);
var inst_30097 = cljs.core.async.close_BANG_(inst_30094);
var state_30203__$1 = state_30203;
var statearr_30236_30315 = state_30203__$1;
(statearr_30236_30315[(2)] = inst_30097);

(statearr_30236_30315[(1)] = (15));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30204 === (22))){
var inst_30115 = (state_30203[(8)]);
var inst_30118 = cljs.core.async.close_BANG_(inst_30115);
var state_30203__$1 = state_30203;
var statearr_30237_30316 = state_30203__$1;
(statearr_30237_30316[(2)] = inst_30118);

(statearr_30237_30316[(1)] = (24));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30204 === (36))){
var inst_30162 = (state_30203[(25)]);
var inst_30166 = cljs.core.chunk_first(inst_30162);
var inst_30167 = cljs.core.chunk_rest(inst_30162);
var inst_30168 = cljs.core.count(inst_30166);
var inst_30143 = inst_30167;
var inst_30144 = inst_30166;
var inst_30145 = inst_30168;
var inst_30146 = (0);
var state_30203__$1 = (function (){var statearr_30238 = state_30203;
(statearr_30238[(9)] = inst_30146);

(statearr_30238[(20)] = inst_30145);

(statearr_30238[(10)] = inst_30144);

(statearr_30238[(21)] = inst_30143);

return statearr_30238;
})();
var statearr_30239_30317 = state_30203__$1;
(statearr_30239_30317[(2)] = null);

(statearr_30239_30317[(1)] = (25));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30204 === (41))){
var inst_30162 = (state_30203[(25)]);
var inst_30178 = (state_30203[(2)]);
var inst_30179 = cljs.core.next(inst_30162);
var inst_30143 = inst_30179;
var inst_30144 = null;
var inst_30145 = (0);
var inst_30146 = (0);
var state_30203__$1 = (function (){var statearr_30240 = state_30203;
(statearr_30240[(9)] = inst_30146);

(statearr_30240[(20)] = inst_30145);

(statearr_30240[(27)] = inst_30178);

(statearr_30240[(10)] = inst_30144);

(statearr_30240[(21)] = inst_30143);

return statearr_30240;
})();
var statearr_30241_30318 = state_30203__$1;
(statearr_30241_30318[(2)] = null);

(statearr_30241_30318[(1)] = (25));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30204 === (43))){
var state_30203__$1 = state_30203;
var statearr_30242_30319 = state_30203__$1;
(statearr_30242_30319[(2)] = null);

(statearr_30242_30319[(1)] = (44));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30204 === (29))){
var inst_30187 = (state_30203[(2)]);
var state_30203__$1 = state_30203;
var statearr_30243_30320 = state_30203__$1;
(statearr_30243_30320[(2)] = inst_30187);

(statearr_30243_30320[(1)] = (26));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30204 === (44))){
var inst_30196 = (state_30203[(2)]);
var state_30203__$1 = (function (){var statearr_30244 = state_30203;
(statearr_30244[(28)] = inst_30196);

return statearr_30244;
})();
var statearr_30245_30321 = state_30203__$1;
(statearr_30245_30321[(2)] = null);

(statearr_30245_30321[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30204 === (6))){
var inst_30135 = (state_30203[(29)]);
var inst_30134 = (function (){var G__30246 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30246) : cljs.core.deref.call(null,G__30246));
})();
var inst_30135__$1 = cljs.core.keys(inst_30134);
var inst_30136 = cljs.core.count(inst_30135__$1);
var inst_30137 = (function (){var G__30247 = dctr;
var G__30248 = inst_30136;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__30247,G__30248) : cljs.core.reset_BANG_.call(null,G__30247,G__30248));
})();
var inst_30142 = cljs.core.seq(inst_30135__$1);
var inst_30143 = inst_30142;
var inst_30144 = null;
var inst_30145 = (0);
var inst_30146 = (0);
var state_30203__$1 = (function (){var statearr_30249 = state_30203;
(statearr_30249[(9)] = inst_30146);

(statearr_30249[(20)] = inst_30145);

(statearr_30249[(10)] = inst_30144);

(statearr_30249[(30)] = inst_30137);

(statearr_30249[(21)] = inst_30143);

(statearr_30249[(29)] = inst_30135__$1);

return statearr_30249;
})();
var statearr_30250_30322 = state_30203__$1;
(statearr_30250_30322[(2)] = null);

(statearr_30250_30322[(1)] = (25));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30204 === (28))){
var inst_30143 = (state_30203[(21)]);
var inst_30162 = (state_30203[(25)]);
var inst_30162__$1 = cljs.core.seq(inst_30143);
var state_30203__$1 = (function (){var statearr_30251 = state_30203;
(statearr_30251[(25)] = inst_30162__$1);

return statearr_30251;
})();
if(inst_30162__$1){
var statearr_30252_30323 = state_30203__$1;
(statearr_30252_30323[(1)] = (33));

} else {
var statearr_30253_30324 = state_30203__$1;
(statearr_30253_30324[(1)] = (34));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30204 === (25))){
var inst_30146 = (state_30203[(9)]);
var inst_30145 = (state_30203[(20)]);
var inst_30148 = (inst_30146 < inst_30145);
var inst_30149 = inst_30148;
var state_30203__$1 = state_30203;
if(cljs.core.truth_(inst_30149)){
var statearr_30254_30325 = state_30203__$1;
(statearr_30254_30325[(1)] = (27));

} else {
var statearr_30255_30326 = state_30203__$1;
(statearr_30255_30326[(1)] = (28));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30204 === (34))){
var state_30203__$1 = state_30203;
var statearr_30256_30327 = state_30203__$1;
(statearr_30256_30327[(2)] = null);

(statearr_30256_30327[(1)] = (35));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30204 === (17))){
var state_30203__$1 = state_30203;
var statearr_30257_30328 = state_30203__$1;
(statearr_30257_30328[(2)] = null);

(statearr_30257_30328[(1)] = (18));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30204 === (3))){
var inst_30201 = (state_30203[(2)]);
var state_30203__$1 = state_30203;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30203__$1,inst_30201);
} else {
if((state_val_30204 === (12))){
var inst_30130 = (state_30203[(2)]);
var state_30203__$1 = state_30203;
var statearr_30258_30329 = state_30203__$1;
(statearr_30258_30329[(2)] = inst_30130);

(statearr_30258_30329[(1)] = (9));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30204 === (2))){
var state_30203__$1 = state_30203;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30203__$1,(4),ch);
} else {
if((state_val_30204 === (23))){
var state_30203__$1 = state_30203;
var statearr_30259_30330 = state_30203__$1;
(statearr_30259_30330[(2)] = null);

(statearr_30259_30330[(1)] = (24));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30204 === (35))){
var inst_30185 = (state_30203[(2)]);
var state_30203__$1 = state_30203;
var statearr_30260_30331 = state_30203__$1;
(statearr_30260_30331[(2)] = inst_30185);

(statearr_30260_30331[(1)] = (29));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30204 === (19))){
var inst_30104 = (state_30203[(7)]);
var inst_30108 = cljs.core.chunk_first(inst_30104);
var inst_30109 = cljs.core.chunk_rest(inst_30104);
var inst_30110 = cljs.core.count(inst_30108);
var inst_30084 = inst_30109;
var inst_30085 = inst_30108;
var inst_30086 = inst_30110;
var inst_30087 = (0);
var state_30203__$1 = (function (){var statearr_30261 = state_30203;
(statearr_30261[(13)] = inst_30086);

(statearr_30261[(15)] = inst_30085);

(statearr_30261[(16)] = inst_30087);

(statearr_30261[(17)] = inst_30084);

return statearr_30261;
})();
var statearr_30262_30332 = state_30203__$1;
(statearr_30262_30332[(2)] = null);

(statearr_30262_30332[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30204 === (11))){
var inst_30104 = (state_30203[(7)]);
var inst_30084 = (state_30203[(17)]);
var inst_30104__$1 = cljs.core.seq(inst_30084);
var state_30203__$1 = (function (){var statearr_30263 = state_30203;
(statearr_30263[(7)] = inst_30104__$1);

return statearr_30263;
})();
if(inst_30104__$1){
var statearr_30264_30333 = state_30203__$1;
(statearr_30264_30333[(1)] = (16));

} else {
var statearr_30265_30334 = state_30203__$1;
(statearr_30265_30334[(1)] = (17));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30204 === (9))){
var inst_30132 = (state_30203[(2)]);
var state_30203__$1 = state_30203;
var statearr_30266_30335 = state_30203__$1;
(statearr_30266_30335[(2)] = inst_30132);

(statearr_30266_30335[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30204 === (5))){
var inst_30082 = (function (){var G__30267 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30267) : cljs.core.deref.call(null,G__30267));
})();
var inst_30083 = cljs.core.seq(inst_30082);
var inst_30084 = inst_30083;
var inst_30085 = null;
var inst_30086 = (0);
var inst_30087 = (0);
var state_30203__$1 = (function (){var statearr_30268 = state_30203;
(statearr_30268[(13)] = inst_30086);

(statearr_30268[(15)] = inst_30085);

(statearr_30268[(16)] = inst_30087);

(statearr_30268[(17)] = inst_30084);

return statearr_30268;
})();
var statearr_30269_30336 = state_30203__$1;
(statearr_30269_30336[(2)] = null);

(statearr_30269_30336[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30204 === (14))){
var state_30203__$1 = state_30203;
var statearr_30270_30337 = state_30203__$1;
(statearr_30270_30337[(2)] = null);

(statearr_30270_30337[(1)] = (15));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30204 === (45))){
var inst_30193 = (state_30203[(2)]);
var state_30203__$1 = state_30203;
var statearr_30271_30338 = state_30203__$1;
(statearr_30271_30338[(2)] = inst_30193);

(statearr_30271_30338[(1)] = (44));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30204 === (26))){
var inst_30135 = (state_30203[(29)]);
var inst_30189 = (state_30203[(2)]);
var inst_30190 = cljs.core.seq(inst_30135);
var state_30203__$1 = (function (){var statearr_30272 = state_30203;
(statearr_30272[(31)] = inst_30189);

return statearr_30272;
})();
if(inst_30190){
var statearr_30273_30339 = state_30203__$1;
(statearr_30273_30339[(1)] = (42));

} else {
var statearr_30274_30340 = state_30203__$1;
(statearr_30274_30340[(1)] = (43));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30204 === (16))){
var inst_30104 = (state_30203[(7)]);
var inst_30106 = cljs.core.chunked_seq_QMARK_(inst_30104);
var state_30203__$1 = state_30203;
if(inst_30106){
var statearr_30275_30341 = state_30203__$1;
(statearr_30275_30341[(1)] = (19));

} else {
var statearr_30276_30342 = state_30203__$1;
(statearr_30276_30342[(1)] = (20));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30204 === (38))){
var inst_30182 = (state_30203[(2)]);
var state_30203__$1 = state_30203;
var statearr_30277_30343 = state_30203__$1;
(statearr_30277_30343[(2)] = inst_30182);

(statearr_30277_30343[(1)] = (35));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30204 === (30))){
var state_30203__$1 = state_30203;
var statearr_30278_30344 = state_30203__$1;
(statearr_30278_30344[(2)] = null);

(statearr_30278_30344[(1)] = (32));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30204 === (10))){
var inst_30085 = (state_30203[(15)]);
var inst_30087 = (state_30203[(16)]);
var inst_30093 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30085,inst_30087);
var inst_30094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30093,(0),null);
var inst_30095 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30093,(1),null);
var state_30203__$1 = (function (){var statearr_30279 = state_30203;
(statearr_30279[(26)] = inst_30094);

return statearr_30279;
})();
if(cljs.core.truth_(inst_30095)){
var statearr_30280_30345 = state_30203__$1;
(statearr_30280_30345[(1)] = (13));

} else {
var statearr_30281_30346 = state_30203__$1;
(statearr_30281_30346[(1)] = (14));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30204 === (18))){
var inst_30128 = (state_30203[(2)]);
var state_30203__$1 = state_30203;
var statearr_30282_30347 = state_30203__$1;
(statearr_30282_30347[(2)] = inst_30128);

(statearr_30282_30347[(1)] = (12));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30204 === (42))){
var state_30203__$1 = state_30203;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30203__$1,(45),dchan);
} else {
if((state_val_30204 === (37))){
var inst_30171 = (state_30203[(23)]);
var inst_30075 = (state_30203[(12)]);
var inst_30162 = (state_30203[(25)]);
var inst_30171__$1 = cljs.core.first(inst_30162);
var inst_30172 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30171__$1,inst_30075,done);
var state_30203__$1 = (function (){var statearr_30283 = state_30203;
(statearr_30283[(23)] = inst_30171__$1);

return statearr_30283;
})();
if(cljs.core.truth_(inst_30172)){
var statearr_30284_30348 = state_30203__$1;
(statearr_30284_30348[(1)] = (39));

} else {
var statearr_30285_30349 = state_30203__$1;
(statearr_30285_30349[(1)] = (40));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30204 === (8))){
var inst_30086 = (state_30203[(13)]);
var inst_30087 = (state_30203[(16)]);
var inst_30089 = (inst_30087 < inst_30086);
var inst_30090 = inst_30089;
var state_30203__$1 = state_30203;
if(cljs.core.truth_(inst_30090)){
var statearr_30286_30350 = state_30203__$1;
(statearr_30286_30350[(1)] = (10));

} else {
var statearr_30287_30351 = state_30203__$1;
(statearr_30287_30351[(1)] = (11));

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
});})(c__16203__auto___30297,cs,m,dchan,dctr,done))
;
return ((function (switch__16123__auto__,c__16203__auto___30297,cs,m,dchan,dctr,done){
return (function() {
var state_machine__16124__auto__ = null;
var state_machine__16124__auto____0 = (function (){
var statearr_30291 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30291[(0)] = state_machine__16124__auto__);

(statearr_30291[(1)] = (1));

return statearr_30291;
});
var state_machine__16124__auto____1 = (function (state_30203){
while(true){
var ret_value__16125__auto__ = (function (){try{while(true){
var result__16126__auto__ = switch__16123__auto__(state_30203);
if(cljs.core.keyword_identical_QMARK_(result__16126__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16126__auto__;
}
break;
}
}catch (e30292){if((e30292 instanceof Object)){
var ex__16127__auto__ = e30292;
var statearr_30293_30352 = state_30203;
(statearr_30293_30352[(5)] = ex__16127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30203);

return cljs.core.constant$keyword$97;
} else {
throw e30292;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16125__auto__,cljs.core.constant$keyword$97)){
var G__30353 = state_30203;
state_30203 = G__30353;
continue;
} else {
return ret_value__16125__auto__;
}
break;
}
});
state_machine__16124__auto__ = function(state_30203){
switch(arguments.length){
case 0:
return state_machine__16124__auto____0.call(this);
case 1:
return state_machine__16124__auto____1.call(this,state_30203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16124__auto____0;
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16124__auto____1;
return state_machine__16124__auto__;
})()
;})(switch__16123__auto__,c__16203__auto___30297,cs,m,dchan,dctr,done))
})();
var state__16205__auto__ = (function (){var statearr_30294 = (function (){return (f__16204__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16204__auto__.cljs$core$IFn$_invoke$arity$0() : f__16204__auto__.call(null));
})();
(statearr_30294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16203__auto___30297);

return statearr_30294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16205__auto__);
});})(c__16203__auto___30297,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj30358 = {};
return obj30358;
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
return (function (){var or__3815__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__30362 = x__4459__auto__;
return goog.typeOf(G__30362);
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
return (function (){var or__3815__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__30366 = x__4459__auto__;
return goog.typeOf(G__30366);
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
return (function (){var or__3815__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__30370 = x__4459__auto__;
return goog.typeOf(G__30370);
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
return (function (){var or__3815__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__30374 = x__4459__auto__;
return goog.typeOf(G__30374);
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
return (function (){var or__3815__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__30378 = x__4459__auto__;
return goog.typeOf(G__30378);
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__30379){
var map__30385 = p__30379;
var map__30385__$1 = ((cljs.core.seq_QMARK_(map__30385))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30385):map__30385);
var opts = map__30385__$1;
var statearr_30386_30390 = state;
(statearr_30386_30390[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__30385,map__30385__$1,opts){
return (function (val){
var statearr_30387_30391 = state;
(statearr_30387_30391[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__30385,map__30385__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_30388_30392 = state;
(statearr_30388_30392[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__30389 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30389) : cljs.core.deref.call(null,G__30389));
})());


return cljs.core.constant$keyword$97;
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__30379 = null;
if (arguments.length > 3) {
var G__30393__i = 0, G__30393__a = new Array(arguments.length -  3);
while (G__30393__i < G__30393__a.length) {G__30393__a[G__30393__i] = arguments[G__30393__i + 3]; ++G__30393__i;}
  p__30379 = new cljs.core.IndexedSeq(G__30393__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__30379);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__30394){
var state = cljs.core.first(arglist__30394);
arglist__30394 = cljs.core.next(arglist__30394);
var cont_block = cljs.core.first(arglist__30394);
arglist__30394 = cljs.core.next(arglist__30394);
var ports = cljs.core.first(arglist__30394);
var p__30379 = cljs.core.rest(arglist__30394);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__30379);
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
var cs = (function (){var G__30528 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30528) : cljs.core.atom.call(null,G__30528));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$106,null,cljs.core.constant$keyword$107,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$108);
var solo_mode = (function (){var G__30529 = cljs.core.constant$keyword$107;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30529) : cljs.core.atom.call(null,G__30529));
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
if(cljs.core.truth_((function (){var G__30530 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__30530) : attr.call(null,G__30530));
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
var chs = (function (){var G__30531 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30531) : cljs.core.deref.call(null,G__30531));
})();
var mode = (function (){var G__30532 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30532) : cljs.core.deref.call(null,G__30532));
})();
var solos = pick(cljs.core.constant$keyword$108,chs);
var pauses = pick(cljs.core.constant$keyword$106,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$109,solos,cljs.core.constant$keyword$110,pick(cljs.core.constant$keyword$107,chs),cljs.core.constant$keyword$111,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$106)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t30533 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30533 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30534){
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
this.meta30534 = meta30534;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30533.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t30533.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30533.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30533.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__30536_30661 = self__.cs;
var G__30537_30662 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__30536_30661,G__30537_30662) : cljs.core.reset_BANG_.call(null,G__30536_30661,G__30537_30662));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30533.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30533.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__30538 = mode;
return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__30538) : self__.solo_modes.call(null,G__30538));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0)))].join('')));
}

var G__30539_30663 = self__.solo_mode;
var G__30540_30664 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__30539_30663,G__30540_30664) : cljs.core.reset_BANG_.call(null,G__30539_30663,G__30540_30664));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30533.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30533.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30533.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30535){
var self__ = this;
var _30535__$1 = this;
return self__.meta30534;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30535,meta30534__$1){
var self__ = this;
var _30535__$1 = this;
return (new cljs.core.async.t30533(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30534__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30533.cljs$lang$type = true;

cljs.core.async.t30533.cljs$lang$ctorStr = "cljs.core.async/t30533";

cljs.core.async.t30533.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t30533");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t30533 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t30533(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30534){
return (new cljs.core.async.t30533(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30534));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t30533(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16203__auto___30665 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16203__auto___30665,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16204__auto__ = (function (){var switch__16123__auto__ = ((function (c__16203__auto___30665,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30612){
var state_val_30613 = (state_30612[(1)]);
if((state_val_30613 === (7))){
var inst_30554 = (state_30612[(7)]);
var inst_30559 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30554);
var state_30612__$1 = state_30612;
var statearr_30614_30666 = state_30612__$1;
(statearr_30614_30666[(2)] = inst_30559);

(statearr_30614_30666[(1)] = (9));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30613 === (20))){
var inst_30569 = (state_30612[(8)]);
var state_30612__$1 = state_30612;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30612__$1,(23),out,inst_30569);
} else {
if((state_val_30613 === (1))){
var inst_30544 = (state_30612[(9)]);
var inst_30544__$1 = calc_state();
var inst_30545 = cljs.core.seq_QMARK_(inst_30544__$1);
var state_30612__$1 = (function (){var statearr_30615 = state_30612;
(statearr_30615[(9)] = inst_30544__$1);

return statearr_30615;
})();
if(inst_30545){
var statearr_30616_30667 = state_30612__$1;
(statearr_30616_30667[(1)] = (2));

} else {
var statearr_30617_30668 = state_30612__$1;
(statearr_30617_30668[(1)] = (3));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30613 === (24))){
var inst_30562 = (state_30612[(10)]);
var inst_30554 = inst_30562;
var state_30612__$1 = (function (){var statearr_30618 = state_30612;
(statearr_30618[(7)] = inst_30554);

return statearr_30618;
})();
var statearr_30619_30669 = state_30612__$1;
(statearr_30619_30669[(2)] = null);

(statearr_30619_30669[(1)] = (5));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30613 === (4))){
var inst_30544 = (state_30612[(9)]);
var inst_30550 = (state_30612[(2)]);
var inst_30551 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30550,cljs.core.constant$keyword$111);
var inst_30552 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30550,cljs.core.constant$keyword$110);
var inst_30553 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30550,cljs.core.constant$keyword$109);
var inst_30554 = inst_30544;
var state_30612__$1 = (function (){var statearr_30620 = state_30612;
(statearr_30620[(11)] = inst_30551);

(statearr_30620[(7)] = inst_30554);

(statearr_30620[(12)] = inst_30553);

(statearr_30620[(13)] = inst_30552);

return statearr_30620;
})();
var statearr_30621_30670 = state_30612__$1;
(statearr_30621_30670[(2)] = null);

(statearr_30621_30670[(1)] = (5));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30613 === (15))){
var state_30612__$1 = state_30612;
var statearr_30622_30671 = state_30612__$1;
(statearr_30622_30671[(2)] = null);

(statearr_30622_30671[(1)] = (16));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30613 === (21))){
var inst_30562 = (state_30612[(10)]);
var inst_30554 = inst_30562;
var state_30612__$1 = (function (){var statearr_30623 = state_30612;
(statearr_30623[(7)] = inst_30554);

return statearr_30623;
})();
var statearr_30624_30672 = state_30612__$1;
(statearr_30624_30672[(2)] = null);

(statearr_30624_30672[(1)] = (5));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30613 === (13))){
var inst_30608 = (state_30612[(2)]);
var state_30612__$1 = state_30612;
var statearr_30625_30673 = state_30612__$1;
(statearr_30625_30673[(2)] = inst_30608);

(statearr_30625_30673[(1)] = (6));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30613 === (22))){
var inst_30606 = (state_30612[(2)]);
var state_30612__$1 = state_30612;
var statearr_30626_30674 = state_30612__$1;
(statearr_30626_30674[(2)] = inst_30606);

(statearr_30626_30674[(1)] = (13));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30613 === (6))){
var inst_30610 = (state_30612[(2)]);
var state_30612__$1 = state_30612;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30612__$1,inst_30610);
} else {
if((state_val_30613 === (25))){
var state_30612__$1 = state_30612;
var statearr_30627_30675 = state_30612__$1;
(statearr_30627_30675[(2)] = null);

(statearr_30627_30675[(1)] = (26));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30613 === (17))){
var inst_30585 = (state_30612[(14)]);
var state_30612__$1 = state_30612;
var statearr_30628_30676 = state_30612__$1;
(statearr_30628_30676[(2)] = inst_30585);

(statearr_30628_30676[(1)] = (19));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30613 === (3))){
var inst_30544 = (state_30612[(9)]);
var state_30612__$1 = state_30612;
var statearr_30629_30677 = state_30612__$1;
(statearr_30629_30677[(2)] = inst_30544);

(statearr_30629_30677[(1)] = (4));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30613 === (12))){
var inst_30565 = (state_30612[(15)]);
var inst_30570 = (state_30612[(16)]);
var inst_30585 = (state_30612[(14)]);
var inst_30585__$1 = (function (){var G__30630 = inst_30570;
return (inst_30565.cljs$core$IFn$_invoke$arity$1 ? inst_30565.cljs$core$IFn$_invoke$arity$1(G__30630) : inst_30565.call(null,G__30630));
})();
var state_30612__$1 = (function (){var statearr_30631 = state_30612;
(statearr_30631[(14)] = inst_30585__$1);

return statearr_30631;
})();
if(cljs.core.truth_(inst_30585__$1)){
var statearr_30632_30678 = state_30612__$1;
(statearr_30632_30678[(1)] = (17));

} else {
var statearr_30633_30679 = state_30612__$1;
(statearr_30633_30679[(1)] = (18));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30613 === (2))){
var inst_30544 = (state_30612[(9)]);
var inst_30547 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30544);
var state_30612__$1 = state_30612;
var statearr_30634_30680 = state_30612__$1;
(statearr_30634_30680[(2)] = inst_30547);

(statearr_30634_30680[(1)] = (4));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30613 === (23))){
var inst_30597 = (state_30612[(2)]);
var state_30612__$1 = state_30612;
if(cljs.core.truth_(inst_30597)){
var statearr_30635_30681 = state_30612__$1;
(statearr_30635_30681[(1)] = (24));

} else {
var statearr_30636_30682 = state_30612__$1;
(statearr_30636_30682[(1)] = (25));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30613 === (19))){
var inst_30594 = (state_30612[(2)]);
var state_30612__$1 = state_30612;
if(cljs.core.truth_(inst_30594)){
var statearr_30637_30683 = state_30612__$1;
(statearr_30637_30683[(1)] = (20));

} else {
var statearr_30638_30684 = state_30612__$1;
(statearr_30638_30684[(1)] = (21));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30613 === (11))){
var inst_30569 = (state_30612[(8)]);
var inst_30575 = (inst_30569 == null);
var state_30612__$1 = state_30612;
if(cljs.core.truth_(inst_30575)){
var statearr_30639_30685 = state_30612__$1;
(statearr_30639_30685[(1)] = (14));

} else {
var statearr_30640_30686 = state_30612__$1;
(statearr_30640_30686[(1)] = (15));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30613 === (9))){
var inst_30562 = (state_30612[(10)]);
var inst_30562__$1 = (state_30612[(2)]);
var inst_30563 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30562__$1,cljs.core.constant$keyword$111);
var inst_30564 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30562__$1,cljs.core.constant$keyword$110);
var inst_30565 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30562__$1,cljs.core.constant$keyword$109);
var state_30612__$1 = (function (){var statearr_30641 = state_30612;
(statearr_30641[(10)] = inst_30562__$1);

(statearr_30641[(15)] = inst_30565);

(statearr_30641[(17)] = inst_30564);

return statearr_30641;
})();
return cljs.core.async.ioc_alts_BANG_(state_30612__$1,(10),inst_30563);
} else {
if((state_val_30613 === (5))){
var inst_30554 = (state_30612[(7)]);
var inst_30557 = cljs.core.seq_QMARK_(inst_30554);
var state_30612__$1 = state_30612;
if(inst_30557){
var statearr_30642_30687 = state_30612__$1;
(statearr_30642_30687[(1)] = (7));

} else {
var statearr_30643_30688 = state_30612__$1;
(statearr_30643_30688[(1)] = (8));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30613 === (14))){
var inst_30570 = (state_30612[(16)]);
var inst_30577 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_30570);
var state_30612__$1 = state_30612;
var statearr_30644_30689 = state_30612__$1;
(statearr_30644_30689[(2)] = inst_30577);

(statearr_30644_30689[(1)] = (16));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30613 === (26))){
var inst_30602 = (state_30612[(2)]);
var state_30612__$1 = state_30612;
var statearr_30645_30690 = state_30612__$1;
(statearr_30645_30690[(2)] = inst_30602);

(statearr_30645_30690[(1)] = (22));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30613 === (16))){
var inst_30580 = (state_30612[(2)]);
var inst_30581 = calc_state();
var inst_30554 = inst_30581;
var state_30612__$1 = (function (){var statearr_30646 = state_30612;
(statearr_30646[(18)] = inst_30580);

(statearr_30646[(7)] = inst_30554);

return statearr_30646;
})();
var statearr_30647_30691 = state_30612__$1;
(statearr_30647_30691[(2)] = null);

(statearr_30647_30691[(1)] = (5));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30613 === (10))){
var inst_30569 = (state_30612[(8)]);
var inst_30570 = (state_30612[(16)]);
var inst_30568 = (state_30612[(2)]);
var inst_30569__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30568,(0),null);
var inst_30570__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30568,(1),null);
var inst_30571 = (inst_30569__$1 == null);
var inst_30572 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30570__$1,change);
var inst_30573 = (inst_30571) || (inst_30572);
var state_30612__$1 = (function (){var statearr_30648 = state_30612;
(statearr_30648[(8)] = inst_30569__$1);

(statearr_30648[(16)] = inst_30570__$1);

return statearr_30648;
})();
if(cljs.core.truth_(inst_30573)){
var statearr_30649_30692 = state_30612__$1;
(statearr_30649_30692[(1)] = (11));

} else {
var statearr_30650_30693 = state_30612__$1;
(statearr_30650_30693[(1)] = (12));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30613 === (18))){
var inst_30565 = (state_30612[(15)]);
var inst_30564 = (state_30612[(17)]);
var inst_30570 = (state_30612[(16)]);
var inst_30589 = cljs.core.empty_QMARK_(inst_30565);
var inst_30590 = (function (){var G__30651 = inst_30570;
return (inst_30564.cljs$core$IFn$_invoke$arity$1 ? inst_30564.cljs$core$IFn$_invoke$arity$1(G__30651) : inst_30564.call(null,G__30651));
})();
var inst_30591 = cljs.core.not(inst_30590);
var inst_30592 = (inst_30589) && (inst_30591);
var state_30612__$1 = state_30612;
var statearr_30652_30694 = state_30612__$1;
(statearr_30652_30694[(2)] = inst_30592);

(statearr_30652_30694[(1)] = (19));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30613 === (8))){
var inst_30554 = (state_30612[(7)]);
var state_30612__$1 = state_30612;
var statearr_30653_30695 = state_30612__$1;
(statearr_30653_30695[(2)] = inst_30554);

(statearr_30653_30695[(1)] = (9));


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
});})(c__16203__auto___30665,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__16123__auto__,c__16203__auto___30665,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__16124__auto__ = null;
var state_machine__16124__auto____0 = (function (){
var statearr_30657 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30657[(0)] = state_machine__16124__auto__);

(statearr_30657[(1)] = (1));

return statearr_30657;
});
var state_machine__16124__auto____1 = (function (state_30612){
while(true){
var ret_value__16125__auto__ = (function (){try{while(true){
var result__16126__auto__ = switch__16123__auto__(state_30612);
if(cljs.core.keyword_identical_QMARK_(result__16126__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16126__auto__;
}
break;
}
}catch (e30658){if((e30658 instanceof Object)){
var ex__16127__auto__ = e30658;
var statearr_30659_30696 = state_30612;
(statearr_30659_30696[(5)] = ex__16127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30612);

return cljs.core.constant$keyword$97;
} else {
throw e30658;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16125__auto__,cljs.core.constant$keyword$97)){
var G__30697 = state_30612;
state_30612 = G__30697;
continue;
} else {
return ret_value__16125__auto__;
}
break;
}
});
state_machine__16124__auto__ = function(state_30612){
switch(arguments.length){
case 0:
return state_machine__16124__auto____0.call(this);
case 1:
return state_machine__16124__auto____1.call(this,state_30612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16124__auto____0;
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16124__auto____1;
return state_machine__16124__auto__;
})()
;})(switch__16123__auto__,c__16203__auto___30665,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16205__auto__ = (function (){var statearr_30660 = (function (){return (f__16204__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16204__auto__.cljs$core$IFn$_invoke$arity$0() : f__16204__auto__.call(null));
})();
(statearr_30660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16203__auto___30665);

return statearr_30660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16205__auto__);
});})(c__16203__auto___30665,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj30699 = {};
return obj30699;
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
return (function (){var or__3815__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__30703 = x__4459__auto__;
return goog.typeOf(G__30703);
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
return (function (){var or__3815__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__30707 = x__4459__auto__;
return goog.typeOf(G__30707);
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
return (function (){var or__3815__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__30713 = x__4459__auto__;
return goog.typeOf(G__30713);
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
return (function (){var or__3815__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__30715 = x__4459__auto__;
return goog.typeOf(G__30715);
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
var mults = (function (){var G__30854 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30854) : cljs.core.atom.call(null,G__30854));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__3815__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__30856 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30856) : cljs.core.deref.call(null,G__30856));
})(),topic);
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3815__auto__,mults){
return (function (p1__30716_SHARP_){
if(cljs.core.truth_((function (){var G__30857 = topic;
return (p1__30716_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__30716_SHARP_.cljs$core$IFn$_invoke$arity$1(G__30857) : p1__30716_SHARP_.call(null,G__30857));
})())){
return p1__30716_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__30716_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__30858 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__30858) : buf_fn.call(null,G__30858));
})())));
}
});})(or__3815__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t30859 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30859 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta30860){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta30860 = meta30860;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30859.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t30859.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__30862 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__30862) : self__.ensure_mult.call(null,G__30862));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t30859.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__30863 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30863) : cljs.core.deref.call(null,G__30863));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t30859.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__30864 = self__.mults;
var G__30865 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__30864,G__30865) : cljs.core.reset_BANG_.call(null,G__30864,G__30865));
});})(mults,ensure_mult))
;

cljs.core.async.t30859.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t30859.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30859.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t30859.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30861){
var self__ = this;
var _30861__$1 = this;
return self__.meta30860;
});})(mults,ensure_mult))
;

cljs.core.async.t30859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30861,meta30860__$1){
var self__ = this;
var _30861__$1 = this;
return (new cljs.core.async.t30859(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta30860__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t30859.cljs$lang$type = true;

cljs.core.async.t30859.cljs$lang$ctorStr = "cljs.core.async/t30859";

cljs.core.async.t30859.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t30859");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t30859 = ((function (mults,ensure_mult){
return (function __GT_t30859(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta30860){
return (new cljs.core.async.t30859(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta30860));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t30859(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16203__auto___30988 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16203__auto___30988,mults,ensure_mult,p){
return (function (){
var f__16204__auto__ = (function (){var switch__16123__auto__ = ((function (c__16203__auto___30988,mults,ensure_mult,p){
return (function (state_30937){
var state_val_30938 = (state_30937[(1)]);
if((state_val_30938 === (7))){
var inst_30933 = (state_30937[(2)]);
var state_30937__$1 = state_30937;
var statearr_30939_30989 = state_30937__$1;
(statearr_30939_30989[(2)] = inst_30933);

(statearr_30939_30989[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30938 === (20))){
var state_30937__$1 = state_30937;
var statearr_30940_30990 = state_30937__$1;
(statearr_30940_30990[(2)] = null);

(statearr_30940_30990[(1)] = (21));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30938 === (1))){
var state_30937__$1 = state_30937;
var statearr_30941_30991 = state_30937__$1;
(statearr_30941_30991[(2)] = null);

(statearr_30941_30991[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30938 === (24))){
var inst_30916 = (state_30937[(7)]);
var inst_30925 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_30916);
var state_30937__$1 = state_30937;
var statearr_30942_30992 = state_30937__$1;
(statearr_30942_30992[(2)] = inst_30925);

(statearr_30942_30992[(1)] = (25));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30938 === (4))){
var inst_30868 = (state_30937[(8)]);
var inst_30868__$1 = (state_30937[(2)]);
var inst_30869 = (inst_30868__$1 == null);
var state_30937__$1 = (function (){var statearr_30943 = state_30937;
(statearr_30943[(8)] = inst_30868__$1);

return statearr_30943;
})();
if(cljs.core.truth_(inst_30869)){
var statearr_30944_30993 = state_30937__$1;
(statearr_30944_30993[(1)] = (5));

} else {
var statearr_30945_30994 = state_30937__$1;
(statearr_30945_30994[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30938 === (15))){
var inst_30910 = (state_30937[(2)]);
var state_30937__$1 = state_30937;
var statearr_30946_30995 = state_30937__$1;
(statearr_30946_30995[(2)] = inst_30910);

(statearr_30946_30995[(1)] = (12));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30938 === (21))){
var inst_30930 = (state_30937[(2)]);
var state_30937__$1 = (function (){var statearr_30947 = state_30937;
(statearr_30947[(9)] = inst_30930);

return statearr_30947;
})();
var statearr_30948_30996 = state_30937__$1;
(statearr_30948_30996[(2)] = null);

(statearr_30948_30996[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30938 === (13))){
var inst_30892 = (state_30937[(10)]);
var inst_30894 = cljs.core.chunked_seq_QMARK_(inst_30892);
var state_30937__$1 = state_30937;
if(inst_30894){
var statearr_30949_30997 = state_30937__$1;
(statearr_30949_30997[(1)] = (16));

} else {
var statearr_30950_30998 = state_30937__$1;
(statearr_30950_30998[(1)] = (17));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30938 === (22))){
var inst_30922 = (state_30937[(2)]);
var state_30937__$1 = state_30937;
if(cljs.core.truth_(inst_30922)){
var statearr_30951_30999 = state_30937__$1;
(statearr_30951_30999[(1)] = (23));

} else {
var statearr_30952_31000 = state_30937__$1;
(statearr_30952_31000[(1)] = (24));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30938 === (6))){
var inst_30918 = (state_30937[(11)]);
var inst_30868 = (state_30937[(8)]);
var inst_30916 = (state_30937[(7)]);
var inst_30916__$1 = (function (){var G__30953 = inst_30868;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__30953) : topic_fn.call(null,G__30953));
})();
var inst_30917 = (function (){var G__30954 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30954) : cljs.core.deref.call(null,G__30954));
})();
var inst_30918__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30917,inst_30916__$1);
var state_30937__$1 = (function (){var statearr_30955 = state_30937;
(statearr_30955[(11)] = inst_30918__$1);

(statearr_30955[(7)] = inst_30916__$1);

return statearr_30955;
})();
if(cljs.core.truth_(inst_30918__$1)){
var statearr_30956_31001 = state_30937__$1;
(statearr_30956_31001[(1)] = (19));

} else {
var statearr_30957_31002 = state_30937__$1;
(statearr_30957_31002[(1)] = (20));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30938 === (25))){
var inst_30927 = (state_30937[(2)]);
var state_30937__$1 = state_30937;
var statearr_30958_31003 = state_30937__$1;
(statearr_30958_31003[(2)] = inst_30927);

(statearr_30958_31003[(1)] = (21));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30938 === (17))){
var inst_30892 = (state_30937[(10)]);
var inst_30901 = cljs.core.first(inst_30892);
var inst_30902 = cljs.core.async.muxch_STAR_(inst_30901);
var inst_30903 = cljs.core.async.close_BANG_(inst_30902);
var inst_30904 = cljs.core.next(inst_30892);
var inst_30878 = inst_30904;
var inst_30879 = null;
var inst_30880 = (0);
var inst_30881 = (0);
var state_30937__$1 = (function (){var statearr_30959 = state_30937;
(statearr_30959[(12)] = inst_30879);

(statearr_30959[(13)] = inst_30880);

(statearr_30959[(14)] = inst_30881);

(statearr_30959[(15)] = inst_30878);

(statearr_30959[(16)] = inst_30903);

return statearr_30959;
})();
var statearr_30960_31004 = state_30937__$1;
(statearr_30960_31004[(2)] = null);

(statearr_30960_31004[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30938 === (3))){
var inst_30935 = (state_30937[(2)]);
var state_30937__$1 = state_30937;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30937__$1,inst_30935);
} else {
if((state_val_30938 === (12))){
var inst_30912 = (state_30937[(2)]);
var state_30937__$1 = state_30937;
var statearr_30961_31005 = state_30937__$1;
(statearr_30961_31005[(2)] = inst_30912);

(statearr_30961_31005[(1)] = (9));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30938 === (2))){
var state_30937__$1 = state_30937;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30937__$1,(4),ch);
} else {
if((state_val_30938 === (23))){
var state_30937__$1 = state_30937;
var statearr_30962_31006 = state_30937__$1;
(statearr_30962_31006[(2)] = null);

(statearr_30962_31006[(1)] = (25));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30938 === (19))){
var inst_30918 = (state_30937[(11)]);
var inst_30868 = (state_30937[(8)]);
var inst_30920 = cljs.core.async.muxch_STAR_(inst_30918);
var state_30937__$1 = state_30937;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30937__$1,(22),inst_30920,inst_30868);
} else {
if((state_val_30938 === (11))){
var inst_30892 = (state_30937[(10)]);
var inst_30878 = (state_30937[(15)]);
var inst_30892__$1 = cljs.core.seq(inst_30878);
var state_30937__$1 = (function (){var statearr_30963 = state_30937;
(statearr_30963[(10)] = inst_30892__$1);

return statearr_30963;
})();
if(inst_30892__$1){
var statearr_30964_31007 = state_30937__$1;
(statearr_30964_31007[(1)] = (13));

} else {
var statearr_30965_31008 = state_30937__$1;
(statearr_30965_31008[(1)] = (14));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30938 === (9))){
var inst_30914 = (state_30937[(2)]);
var state_30937__$1 = state_30937;
var statearr_30966_31009 = state_30937__$1;
(statearr_30966_31009[(2)] = inst_30914);

(statearr_30966_31009[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30938 === (5))){
var inst_30875 = (function (){var G__30967 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30967) : cljs.core.deref.call(null,G__30967));
})();
var inst_30876 = cljs.core.vals(inst_30875);
var inst_30877 = cljs.core.seq(inst_30876);
var inst_30878 = inst_30877;
var inst_30879 = null;
var inst_30880 = (0);
var inst_30881 = (0);
var state_30937__$1 = (function (){var statearr_30968 = state_30937;
(statearr_30968[(12)] = inst_30879);

(statearr_30968[(13)] = inst_30880);

(statearr_30968[(14)] = inst_30881);

(statearr_30968[(15)] = inst_30878);

return statearr_30968;
})();
var statearr_30969_31010 = state_30937__$1;
(statearr_30969_31010[(2)] = null);

(statearr_30969_31010[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30938 === (14))){
var state_30937__$1 = state_30937;
var statearr_30973_31011 = state_30937__$1;
(statearr_30973_31011[(2)] = null);

(statearr_30973_31011[(1)] = (15));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30938 === (16))){
var inst_30892 = (state_30937[(10)]);
var inst_30896 = cljs.core.chunk_first(inst_30892);
var inst_30897 = cljs.core.chunk_rest(inst_30892);
var inst_30898 = cljs.core.count(inst_30896);
var inst_30878 = inst_30897;
var inst_30879 = inst_30896;
var inst_30880 = inst_30898;
var inst_30881 = (0);
var state_30937__$1 = (function (){var statearr_30974 = state_30937;
(statearr_30974[(12)] = inst_30879);

(statearr_30974[(13)] = inst_30880);

(statearr_30974[(14)] = inst_30881);

(statearr_30974[(15)] = inst_30878);

return statearr_30974;
})();
var statearr_30975_31012 = state_30937__$1;
(statearr_30975_31012[(2)] = null);

(statearr_30975_31012[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30938 === (10))){
var inst_30879 = (state_30937[(12)]);
var inst_30880 = (state_30937[(13)]);
var inst_30881 = (state_30937[(14)]);
var inst_30878 = (state_30937[(15)]);
var inst_30886 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30879,inst_30881);
var inst_30887 = cljs.core.async.muxch_STAR_(inst_30886);
var inst_30888 = cljs.core.async.close_BANG_(inst_30887);
var inst_30889 = (inst_30881 + (1));
var tmp30970 = inst_30879;
var tmp30971 = inst_30880;
var tmp30972 = inst_30878;
var inst_30878__$1 = tmp30972;
var inst_30879__$1 = tmp30970;
var inst_30880__$1 = tmp30971;
var inst_30881__$1 = inst_30889;
var state_30937__$1 = (function (){var statearr_30976 = state_30937;
(statearr_30976[(12)] = inst_30879__$1);

(statearr_30976[(17)] = inst_30888);

(statearr_30976[(13)] = inst_30880__$1);

(statearr_30976[(14)] = inst_30881__$1);

(statearr_30976[(15)] = inst_30878__$1);

return statearr_30976;
})();
var statearr_30977_31013 = state_30937__$1;
(statearr_30977_31013[(2)] = null);

(statearr_30977_31013[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30938 === (18))){
var inst_30907 = (state_30937[(2)]);
var state_30937__$1 = state_30937;
var statearr_30978_31014 = state_30937__$1;
(statearr_30978_31014[(2)] = inst_30907);

(statearr_30978_31014[(1)] = (15));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30938 === (8))){
var inst_30880 = (state_30937[(13)]);
var inst_30881 = (state_30937[(14)]);
var inst_30883 = (inst_30881 < inst_30880);
var inst_30884 = inst_30883;
var state_30937__$1 = state_30937;
if(cljs.core.truth_(inst_30884)){
var statearr_30979_31015 = state_30937__$1;
(statearr_30979_31015[(1)] = (10));

} else {
var statearr_30980_31016 = state_30937__$1;
(statearr_30980_31016[(1)] = (11));

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
});})(c__16203__auto___30988,mults,ensure_mult,p))
;
return ((function (switch__16123__auto__,c__16203__auto___30988,mults,ensure_mult,p){
return (function() {
var state_machine__16124__auto__ = null;
var state_machine__16124__auto____0 = (function (){
var statearr_30984 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30984[(0)] = state_machine__16124__auto__);

(statearr_30984[(1)] = (1));

return statearr_30984;
});
var state_machine__16124__auto____1 = (function (state_30937){
while(true){
var ret_value__16125__auto__ = (function (){try{while(true){
var result__16126__auto__ = switch__16123__auto__(state_30937);
if(cljs.core.keyword_identical_QMARK_(result__16126__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16126__auto__;
}
break;
}
}catch (e30985){if((e30985 instanceof Object)){
var ex__16127__auto__ = e30985;
var statearr_30986_31017 = state_30937;
(statearr_30986_31017[(5)] = ex__16127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30937);

return cljs.core.constant$keyword$97;
} else {
throw e30985;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16125__auto__,cljs.core.constant$keyword$97)){
var G__31018 = state_30937;
state_30937 = G__31018;
continue;
} else {
return ret_value__16125__auto__;
}
break;
}
});
state_machine__16124__auto__ = function(state_30937){
switch(arguments.length){
case 0:
return state_machine__16124__auto____0.call(this);
case 1:
return state_machine__16124__auto____1.call(this,state_30937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16124__auto____0;
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16124__auto____1;
return state_machine__16124__auto__;
})()
;})(switch__16123__auto__,c__16203__auto___30988,mults,ensure_mult,p))
})();
var state__16205__auto__ = (function (){var statearr_30987 = (function (){return (f__16204__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16204__auto__.cljs$core$IFn$_invoke$arity$0() : f__16204__auto__.call(null));
})();
(statearr_30987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16203__auto___30988);

return statearr_30987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16205__auto__);
});})(c__16203__auto___30988,mults,ensure_mult,p))
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
var dctr = (function (){var G__31099 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__31099) : cljs.core.atom.call(null,G__31099));
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
var c__16203__auto___31172 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16203__auto___31172,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16204__auto__ = (function (){var switch__16123__auto__ = ((function (c__16203__auto___31172,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31138){
var state_val_31139 = (state_31138[(1)]);
if((state_val_31139 === (7))){
var state_31138__$1 = state_31138;
var statearr_31140_31173 = state_31138__$1;
(statearr_31140_31173[(2)] = null);

(statearr_31140_31173[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31139 === (1))){
var state_31138__$1 = state_31138;
var statearr_31141_31174 = state_31138__$1;
(statearr_31141_31174[(2)] = null);

(statearr_31141_31174[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31139 === (4))){
var inst_31102 = (state_31138[(7)]);
var inst_31104 = (inst_31102 < cnt);
var state_31138__$1 = state_31138;
if(cljs.core.truth_(inst_31104)){
var statearr_31142_31175 = state_31138__$1;
(statearr_31142_31175[(1)] = (6));

} else {
var statearr_31143_31176 = state_31138__$1;
(statearr_31143_31176[(1)] = (7));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31139 === (15))){
var inst_31134 = (state_31138[(2)]);
var state_31138__$1 = state_31138;
var statearr_31144_31177 = state_31138__$1;
(statearr_31144_31177[(2)] = inst_31134);

(statearr_31144_31177[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31139 === (13))){
var inst_31127 = cljs.core.async.close_BANG_(out);
var state_31138__$1 = state_31138;
var statearr_31145_31178 = state_31138__$1;
(statearr_31145_31178[(2)] = inst_31127);

(statearr_31145_31178[(1)] = (15));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31139 === (6))){
var state_31138__$1 = state_31138;
var statearr_31146_31179 = state_31138__$1;
(statearr_31146_31179[(2)] = null);

(statearr_31146_31179[(1)] = (11));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31139 === (3))){
var inst_31136 = (state_31138[(2)]);
var state_31138__$1 = state_31138;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31138__$1,inst_31136);
} else {
if((state_val_31139 === (12))){
var inst_31124 = (state_31138[(8)]);
var inst_31124__$1 = (state_31138[(2)]);
var inst_31125 = cljs.core.some(cljs.core.nil_QMARK_,inst_31124__$1);
var state_31138__$1 = (function (){var statearr_31147 = state_31138;
(statearr_31147[(8)] = inst_31124__$1);

return statearr_31147;
})();
if(cljs.core.truth_(inst_31125)){
var statearr_31148_31180 = state_31138__$1;
(statearr_31148_31180[(1)] = (13));

} else {
var statearr_31149_31181 = state_31138__$1;
(statearr_31149_31181[(1)] = (14));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31139 === (2))){
var inst_31101 = (function (){var G__31150 = dctr;
var G__31151 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__31150,G__31151) : cljs.core.reset_BANG_.call(null,G__31150,G__31151));
})();
var inst_31102 = (0);
var state_31138__$1 = (function (){var statearr_31152 = state_31138;
(statearr_31152[(7)] = inst_31102);

(statearr_31152[(9)] = inst_31101);

return statearr_31152;
})();
var statearr_31153_31182 = state_31138__$1;
(statearr_31153_31182[(2)] = null);

(statearr_31153_31182[(1)] = (4));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31139 === (11))){
var inst_31102 = (state_31138[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_31138,(10),Object,null,(9));
var inst_31111 = (function (){var G__31154 = inst_31102;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__31154) : chs__$1.call(null,G__31154));
})();
var inst_31112 = (function (){var G__31155 = inst_31102;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__31155) : done.call(null,G__31155));
})();
var inst_31113 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31111,inst_31112);
var state_31138__$1 = state_31138;
var statearr_31156_31183 = state_31138__$1;
(statearr_31156_31183[(2)] = inst_31113);


cljs.core.async.impl.ioc_helpers.process_exception(state_31138__$1);

return cljs.core.constant$keyword$97;
} else {
if((state_val_31139 === (9))){
var inst_31102 = (state_31138[(7)]);
var inst_31115 = (state_31138[(2)]);
var inst_31116 = (inst_31102 + (1));
var inst_31102__$1 = inst_31116;
var state_31138__$1 = (function (){var statearr_31157 = state_31138;
(statearr_31157[(10)] = inst_31115);

(statearr_31157[(7)] = inst_31102__$1);

return statearr_31157;
})();
var statearr_31158_31184 = state_31138__$1;
(statearr_31158_31184[(2)] = null);

(statearr_31158_31184[(1)] = (4));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31139 === (5))){
var inst_31122 = (state_31138[(2)]);
var state_31138__$1 = (function (){var statearr_31159 = state_31138;
(statearr_31159[(11)] = inst_31122);

return statearr_31159;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31138__$1,(12),dchan);
} else {
if((state_val_31139 === (14))){
var inst_31124 = (state_31138[(8)]);
var inst_31129 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31124);
var state_31138__$1 = state_31138;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31138__$1,(16),out,inst_31129);
} else {
if((state_val_31139 === (16))){
var inst_31131 = (state_31138[(2)]);
var state_31138__$1 = (function (){var statearr_31160 = state_31138;
(statearr_31160[(12)] = inst_31131);

return statearr_31160;
})();
var statearr_31161_31185 = state_31138__$1;
(statearr_31161_31185[(2)] = null);

(statearr_31161_31185[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31139 === (10))){
var inst_31106 = (state_31138[(2)]);
var inst_31107 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31138__$1 = (function (){var statearr_31162 = state_31138;
(statearr_31162[(13)] = inst_31106);

return statearr_31162;
})();
var statearr_31163_31186 = state_31138__$1;
(statearr_31163_31186[(2)] = inst_31107);


cljs.core.async.impl.ioc_helpers.process_exception(state_31138__$1);

return cljs.core.constant$keyword$97;
} else {
if((state_val_31139 === (8))){
var inst_31120 = (state_31138[(2)]);
var state_31138__$1 = state_31138;
var statearr_31164_31187 = state_31138__$1;
(statearr_31164_31187[(2)] = inst_31120);

(statearr_31164_31187[(1)] = (5));


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
});})(c__16203__auto___31172,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__16123__auto__,c__16203__auto___31172,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__16124__auto__ = null;
var state_machine__16124__auto____0 = (function (){
var statearr_31168 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31168[(0)] = state_machine__16124__auto__);

(statearr_31168[(1)] = (1));

return statearr_31168;
});
var state_machine__16124__auto____1 = (function (state_31138){
while(true){
var ret_value__16125__auto__ = (function (){try{while(true){
var result__16126__auto__ = switch__16123__auto__(state_31138);
if(cljs.core.keyword_identical_QMARK_(result__16126__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16126__auto__;
}
break;
}
}catch (e31169){if((e31169 instanceof Object)){
var ex__16127__auto__ = e31169;
var statearr_31170_31188 = state_31138;
(statearr_31170_31188[(5)] = ex__16127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31138);

return cljs.core.constant$keyword$97;
} else {
throw e31169;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16125__auto__,cljs.core.constant$keyword$97)){
var G__31189 = state_31138;
state_31138 = G__31189;
continue;
} else {
return ret_value__16125__auto__;
}
break;
}
});
state_machine__16124__auto__ = function(state_31138){
switch(arguments.length){
case 0:
return state_machine__16124__auto____0.call(this);
case 1:
return state_machine__16124__auto____1.call(this,state_31138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16124__auto____0;
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16124__auto____1;
return state_machine__16124__auto__;
})()
;})(switch__16123__auto__,c__16203__auto___31172,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16205__auto__ = (function (){var statearr_31171 = (function (){return (f__16204__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16204__auto__.cljs$core$IFn$_invoke$arity$0() : f__16204__auto__.call(null));
})();
(statearr_31171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16203__auto___31172);

return statearr_31171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16205__auto__);
});})(c__16203__auto___31172,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__16203__auto___31299 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16203__auto___31299,out){
return (function (){
var f__16204__auto__ = (function (){var switch__16123__auto__ = ((function (c__16203__auto___31299,out){
return (function (state_31275){
var state_val_31276 = (state_31275[(1)]);
if((state_val_31276 === (7))){
var inst_31255 = (state_31275[(7)]);
var inst_31254 = (state_31275[(8)]);
var inst_31254__$1 = (state_31275[(2)]);
var inst_31255__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31254__$1,(0),null);
var inst_31256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31254__$1,(1),null);
var inst_31257 = (inst_31255__$1 == null);
var state_31275__$1 = (function (){var statearr_31277 = state_31275;
(statearr_31277[(7)] = inst_31255__$1);

(statearr_31277[(9)] = inst_31256);

(statearr_31277[(8)] = inst_31254__$1);

return statearr_31277;
})();
if(cljs.core.truth_(inst_31257)){
var statearr_31278_31300 = state_31275__$1;
(statearr_31278_31300[(1)] = (8));

} else {
var statearr_31279_31301 = state_31275__$1;
(statearr_31279_31301[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31276 === (1))){
var inst_31246 = cljs.core.vec(chs);
var inst_31247 = inst_31246;
var state_31275__$1 = (function (){var statearr_31280 = state_31275;
(statearr_31280[(10)] = inst_31247);

return statearr_31280;
})();
var statearr_31281_31302 = state_31275__$1;
(statearr_31281_31302[(2)] = null);

(statearr_31281_31302[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31276 === (4))){
var inst_31247 = (state_31275[(10)]);
var state_31275__$1 = state_31275;
return cljs.core.async.ioc_alts_BANG_(state_31275__$1,(7),inst_31247);
} else {
if((state_val_31276 === (6))){
var inst_31271 = (state_31275[(2)]);
var state_31275__$1 = state_31275;
var statearr_31282_31303 = state_31275__$1;
(statearr_31282_31303[(2)] = inst_31271);

(statearr_31282_31303[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31276 === (3))){
var inst_31273 = (state_31275[(2)]);
var state_31275__$1 = state_31275;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31275__$1,inst_31273);
} else {
if((state_val_31276 === (2))){
var inst_31247 = (state_31275[(10)]);
var inst_31249 = cljs.core.count(inst_31247);
var inst_31250 = (inst_31249 > (0));
var state_31275__$1 = state_31275;
if(cljs.core.truth_(inst_31250)){
var statearr_31284_31304 = state_31275__$1;
(statearr_31284_31304[(1)] = (4));

} else {
var statearr_31285_31305 = state_31275__$1;
(statearr_31285_31305[(1)] = (5));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31276 === (11))){
var inst_31247 = (state_31275[(10)]);
var inst_31264 = (state_31275[(2)]);
var tmp31283 = inst_31247;
var inst_31247__$1 = tmp31283;
var state_31275__$1 = (function (){var statearr_31286 = state_31275;
(statearr_31286[(10)] = inst_31247__$1);

(statearr_31286[(11)] = inst_31264);

return statearr_31286;
})();
var statearr_31287_31306 = state_31275__$1;
(statearr_31287_31306[(2)] = null);

(statearr_31287_31306[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31276 === (9))){
var inst_31255 = (state_31275[(7)]);
var state_31275__$1 = state_31275;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31275__$1,(11),out,inst_31255);
} else {
if((state_val_31276 === (5))){
var inst_31269 = cljs.core.async.close_BANG_(out);
var state_31275__$1 = state_31275;
var statearr_31288_31307 = state_31275__$1;
(statearr_31288_31307[(2)] = inst_31269);

(statearr_31288_31307[(1)] = (6));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31276 === (10))){
var inst_31267 = (state_31275[(2)]);
var state_31275__$1 = state_31275;
var statearr_31289_31308 = state_31275__$1;
(statearr_31289_31308[(2)] = inst_31267);

(statearr_31289_31308[(1)] = (6));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31276 === (8))){
var inst_31255 = (state_31275[(7)]);
var inst_31247 = (state_31275[(10)]);
var inst_31256 = (state_31275[(9)]);
var inst_31254 = (state_31275[(8)]);
var inst_31259 = (function (){var c = inst_31256;
var v = inst_31255;
var vec__31252 = inst_31254;
var cs = inst_31247;
return ((function (c,v,vec__31252,cs,inst_31255,inst_31247,inst_31256,inst_31254,state_val_31276,c__16203__auto___31299,out){
return (function (p1__31190_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31190_SHARP_);
});
;})(c,v,vec__31252,cs,inst_31255,inst_31247,inst_31256,inst_31254,state_val_31276,c__16203__auto___31299,out))
})();
var inst_31260 = cljs.core.filterv(inst_31259,inst_31247);
var inst_31247__$1 = inst_31260;
var state_31275__$1 = (function (){var statearr_31290 = state_31275;
(statearr_31290[(10)] = inst_31247__$1);

return statearr_31290;
})();
var statearr_31291_31309 = state_31275__$1;
(statearr_31291_31309[(2)] = null);

(statearr_31291_31309[(1)] = (2));


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
});})(c__16203__auto___31299,out))
;
return ((function (switch__16123__auto__,c__16203__auto___31299,out){
return (function() {
var state_machine__16124__auto__ = null;
var state_machine__16124__auto____0 = (function (){
var statearr_31295 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31295[(0)] = state_machine__16124__auto__);

(statearr_31295[(1)] = (1));

return statearr_31295;
});
var state_machine__16124__auto____1 = (function (state_31275){
while(true){
var ret_value__16125__auto__ = (function (){try{while(true){
var result__16126__auto__ = switch__16123__auto__(state_31275);
if(cljs.core.keyword_identical_QMARK_(result__16126__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16126__auto__;
}
break;
}
}catch (e31296){if((e31296 instanceof Object)){
var ex__16127__auto__ = e31296;
var statearr_31297_31310 = state_31275;
(statearr_31297_31310[(5)] = ex__16127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31275);

return cljs.core.constant$keyword$97;
} else {
throw e31296;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16125__auto__,cljs.core.constant$keyword$97)){
var G__31311 = state_31275;
state_31275 = G__31311;
continue;
} else {
return ret_value__16125__auto__;
}
break;
}
});
state_machine__16124__auto__ = function(state_31275){
switch(arguments.length){
case 0:
return state_machine__16124__auto____0.call(this);
case 1:
return state_machine__16124__auto____1.call(this,state_31275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16124__auto____0;
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16124__auto____1;
return state_machine__16124__auto__;
})()
;})(switch__16123__auto__,c__16203__auto___31299,out))
})();
var state__16205__auto__ = (function (){var statearr_31298 = (function (){return (f__16204__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16204__auto__.cljs$core$IFn$_invoke$arity$0() : f__16204__auto__.call(null));
})();
(statearr_31298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16203__auto___31299);

return statearr_31298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16205__auto__);
});})(c__16203__auto___31299,out))
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
var c__16203__auto___31407 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16203__auto___31407,out){
return (function (){
var f__16204__auto__ = (function (){var switch__16123__auto__ = ((function (c__16203__auto___31407,out){
return (function (state_31384){
var state_val_31385 = (state_31384[(1)]);
if((state_val_31385 === (7))){
var inst_31366 = (state_31384[(7)]);
var inst_31366__$1 = (state_31384[(2)]);
var inst_31367 = (inst_31366__$1 == null);
var inst_31368 = cljs.core.not(inst_31367);
var state_31384__$1 = (function (){var statearr_31386 = state_31384;
(statearr_31386[(7)] = inst_31366__$1);

return statearr_31386;
})();
if(inst_31368){
var statearr_31387_31408 = state_31384__$1;
(statearr_31387_31408[(1)] = (8));

} else {
var statearr_31388_31409 = state_31384__$1;
(statearr_31388_31409[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31385 === (1))){
var inst_31361 = (0);
var state_31384__$1 = (function (){var statearr_31389 = state_31384;
(statearr_31389[(8)] = inst_31361);

return statearr_31389;
})();
var statearr_31390_31410 = state_31384__$1;
(statearr_31390_31410[(2)] = null);

(statearr_31390_31410[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31385 === (4))){
var state_31384__$1 = state_31384;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31384__$1,(7),ch);
} else {
if((state_val_31385 === (6))){
var inst_31379 = (state_31384[(2)]);
var state_31384__$1 = state_31384;
var statearr_31391_31411 = state_31384__$1;
(statearr_31391_31411[(2)] = inst_31379);

(statearr_31391_31411[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31385 === (3))){
var inst_31381 = (state_31384[(2)]);
var inst_31382 = cljs.core.async.close_BANG_(out);
var state_31384__$1 = (function (){var statearr_31392 = state_31384;
(statearr_31392[(9)] = inst_31381);

return statearr_31392;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31384__$1,inst_31382);
} else {
if((state_val_31385 === (2))){
var inst_31361 = (state_31384[(8)]);
var inst_31363 = (inst_31361 < n);
var state_31384__$1 = state_31384;
if(cljs.core.truth_(inst_31363)){
var statearr_31393_31412 = state_31384__$1;
(statearr_31393_31412[(1)] = (4));

} else {
var statearr_31394_31413 = state_31384__$1;
(statearr_31394_31413[(1)] = (5));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31385 === (11))){
var inst_31361 = (state_31384[(8)]);
var inst_31371 = (state_31384[(2)]);
var inst_31372 = (inst_31361 + (1));
var inst_31361__$1 = inst_31372;
var state_31384__$1 = (function (){var statearr_31395 = state_31384;
(statearr_31395[(10)] = inst_31371);

(statearr_31395[(8)] = inst_31361__$1);

return statearr_31395;
})();
var statearr_31396_31414 = state_31384__$1;
(statearr_31396_31414[(2)] = null);

(statearr_31396_31414[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31385 === (9))){
var state_31384__$1 = state_31384;
var statearr_31397_31415 = state_31384__$1;
(statearr_31397_31415[(2)] = null);

(statearr_31397_31415[(1)] = (10));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31385 === (5))){
var state_31384__$1 = state_31384;
var statearr_31398_31416 = state_31384__$1;
(statearr_31398_31416[(2)] = null);

(statearr_31398_31416[(1)] = (6));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31385 === (10))){
var inst_31376 = (state_31384[(2)]);
var state_31384__$1 = state_31384;
var statearr_31399_31417 = state_31384__$1;
(statearr_31399_31417[(2)] = inst_31376);

(statearr_31399_31417[(1)] = (6));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31385 === (8))){
var inst_31366 = (state_31384[(7)]);
var state_31384__$1 = state_31384;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31384__$1,(11),out,inst_31366);
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
});})(c__16203__auto___31407,out))
;
return ((function (switch__16123__auto__,c__16203__auto___31407,out){
return (function() {
var state_machine__16124__auto__ = null;
var state_machine__16124__auto____0 = (function (){
var statearr_31403 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31403[(0)] = state_machine__16124__auto__);

(statearr_31403[(1)] = (1));

return statearr_31403;
});
var state_machine__16124__auto____1 = (function (state_31384){
while(true){
var ret_value__16125__auto__ = (function (){try{while(true){
var result__16126__auto__ = switch__16123__auto__(state_31384);
if(cljs.core.keyword_identical_QMARK_(result__16126__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16126__auto__;
}
break;
}
}catch (e31404){if((e31404 instanceof Object)){
var ex__16127__auto__ = e31404;
var statearr_31405_31418 = state_31384;
(statearr_31405_31418[(5)] = ex__16127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31384);

return cljs.core.constant$keyword$97;
} else {
throw e31404;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16125__auto__,cljs.core.constant$keyword$97)){
var G__31419 = state_31384;
state_31384 = G__31419;
continue;
} else {
return ret_value__16125__auto__;
}
break;
}
});
state_machine__16124__auto__ = function(state_31384){
switch(arguments.length){
case 0:
return state_machine__16124__auto____0.call(this);
case 1:
return state_machine__16124__auto____1.call(this,state_31384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16124__auto____0;
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16124__auto____1;
return state_machine__16124__auto__;
})()
;})(switch__16123__auto__,c__16203__auto___31407,out))
})();
var state__16205__auto__ = (function (){var statearr_31406 = (function (){return (f__16204__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16204__auto__.cljs$core$IFn$_invoke$arity$0() : f__16204__auto__.call(null));
})();
(statearr_31406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16203__auto___31407);

return statearr_31406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16205__auto__);
});})(c__16203__auto___31407,out))
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
if(typeof cljs.core.async.t31432 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31432 = (function (ch,f,map_LT_,meta31433){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta31433 = meta31433;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31432.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t31432.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t31432.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t31432.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t31435 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31435 = (function (fn1,_,meta31433,map_LT_,f,ch,meta31436){
this.fn1 = fn1;
this._ = _;
this.meta31433 = meta31433;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31436 = meta31436;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31435.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31435.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t31435.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31420_SHARP_){
var G__31438 = (((p1__31420_SHARP_ == null))?null:(function (){var G__31439 = p1__31420_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31439) : self__.f.call(null,G__31439));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31438) : f1.call(null,G__31438));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t31435.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31437){
var self__ = this;
var _31437__$1 = this;
return self__.meta31436;
});})(___$1))
;

cljs.core.async.t31435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31437,meta31436__$1){
var self__ = this;
var _31437__$1 = this;
return (new cljs.core.async.t31435(self__.fn1,self__._,self__.meta31433,self__.map_LT_,self__.f,self__.ch,meta31436__$1));
});})(___$1))
;

cljs.core.async.t31435.cljs$lang$type = true;

cljs.core.async.t31435.cljs$lang$ctorStr = "cljs.core.async/t31435";

cljs.core.async.t31435.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t31435");
});})(___$1))
;

cljs.core.async.__GT_t31435 = ((function (___$1){
return (function __GT_t31435(fn1__$1,___$2,meta31433__$1,map_LT___$1,f__$1,ch__$1,meta31436){
return (new cljs.core.async.t31435(fn1__$1,___$2,meta31433__$1,map_LT___$1,f__$1,ch__$1,meta31436));
});})(___$1))
;

}

return (new cljs.core.async.t31435(fn1,___$1,self__.meta31433,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3803__auto__ = ret;
if(cljs.core.truth_(and__3803__auto__)){
return !(((function (){var G__31440 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31440) : cljs.core.deref.call(null,G__31440));
})() == null));
} else {
return and__3803__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31441 = (function (){var G__31442 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31442) : cljs.core.deref.call(null,G__31442));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31441) : self__.f.call(null,G__31441));
})());
} else {
return ret;
}
});

cljs.core.async.t31432.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t31432.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t31432.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t31432.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31434){
var self__ = this;
var _31434__$1 = this;
return self__.meta31433;
});

cljs.core.async.t31432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31434,meta31433__$1){
var self__ = this;
var _31434__$1 = this;
return (new cljs.core.async.t31432(self__.ch,self__.f,self__.map_LT_,meta31433__$1));
});

cljs.core.async.t31432.cljs$lang$type = true;

cljs.core.async.t31432.cljs$lang$ctorStr = "cljs.core.async/t31432";

cljs.core.async.t31432.cljs$lang$ctorPrWriter = (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t31432");
});

cljs.core.async.__GT_t31432 = (function __GT_t31432(ch__$1,f__$1,map_LT___$1,meta31433){
return (new cljs.core.async.t31432(ch__$1,f__$1,map_LT___$1,meta31433));
});

}

return (new cljs.core.async.t31432(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t31447 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31447 = (function (ch,f,map_GT_,meta31448){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta31448 = meta31448;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31447.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t31447.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__31450 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31450) : self__.f.call(null,G__31450));
})(),fn1);
});

cljs.core.async.t31447.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t31447.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t31447.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t31447.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t31447.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31449){
var self__ = this;
var _31449__$1 = this;
return self__.meta31448;
});

cljs.core.async.t31447.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31449,meta31448__$1){
var self__ = this;
var _31449__$1 = this;
return (new cljs.core.async.t31447(self__.ch,self__.f,self__.map_GT_,meta31448__$1));
});

cljs.core.async.t31447.cljs$lang$type = true;

cljs.core.async.t31447.cljs$lang$ctorStr = "cljs.core.async/t31447";

cljs.core.async.t31447.cljs$lang$ctorPrWriter = (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t31447");
});

cljs.core.async.__GT_t31447 = (function __GT_t31447(ch__$1,f__$1,map_GT___$1,meta31448){
return (new cljs.core.async.t31447(ch__$1,f__$1,map_GT___$1,meta31448));
});

}

return (new cljs.core.async.t31447(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t31455 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31455 = (function (ch,p,filter_GT_,meta31456){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta31456 = meta31456;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31455.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t31455.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__31458 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__31458) : self__.p.call(null,G__31458));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t31455.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t31455.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t31455.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t31455.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t31455.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t31455.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31457){
var self__ = this;
var _31457__$1 = this;
return self__.meta31456;
});

cljs.core.async.t31455.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31457,meta31456__$1){
var self__ = this;
var _31457__$1 = this;
return (new cljs.core.async.t31455(self__.ch,self__.p,self__.filter_GT_,meta31456__$1));
});

cljs.core.async.t31455.cljs$lang$type = true;

cljs.core.async.t31455.cljs$lang$ctorStr = "cljs.core.async/t31455";

cljs.core.async.t31455.cljs$lang$ctorPrWriter = (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t31455");
});

cljs.core.async.__GT_t31455 = (function __GT_t31455(ch__$1,p__$1,filter_GT___$1,meta31456){
return (new cljs.core.async.t31455(ch__$1,p__$1,filter_GT___$1,meta31456));
});

}

return (new cljs.core.async.t31455(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var c__16203__auto___31546 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16203__auto___31546,out){
return (function (){
var f__16204__auto__ = (function (){var switch__16123__auto__ = ((function (c__16203__auto___31546,out){
return (function (state_31524){
var state_val_31525 = (state_31524[(1)]);
if((state_val_31525 === (7))){
var inst_31520 = (state_31524[(2)]);
var state_31524__$1 = state_31524;
var statearr_31526_31547 = state_31524__$1;
(statearr_31526_31547[(2)] = inst_31520);

(statearr_31526_31547[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31525 === (1))){
var state_31524__$1 = state_31524;
var statearr_31527_31548 = state_31524__$1;
(statearr_31527_31548[(2)] = null);

(statearr_31527_31548[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31525 === (4))){
var inst_31506 = (state_31524[(7)]);
var inst_31506__$1 = (state_31524[(2)]);
var inst_31507 = (inst_31506__$1 == null);
var state_31524__$1 = (function (){var statearr_31528 = state_31524;
(statearr_31528[(7)] = inst_31506__$1);

return statearr_31528;
})();
if(cljs.core.truth_(inst_31507)){
var statearr_31529_31549 = state_31524__$1;
(statearr_31529_31549[(1)] = (5));

} else {
var statearr_31530_31550 = state_31524__$1;
(statearr_31530_31550[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31525 === (6))){
var inst_31506 = (state_31524[(7)]);
var inst_31511 = (function (){var G__31531 = inst_31506;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__31531) : p.call(null,G__31531));
})();
var state_31524__$1 = state_31524;
if(cljs.core.truth_(inst_31511)){
var statearr_31532_31551 = state_31524__$1;
(statearr_31532_31551[(1)] = (8));

} else {
var statearr_31533_31552 = state_31524__$1;
(statearr_31533_31552[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31525 === (3))){
var inst_31522 = (state_31524[(2)]);
var state_31524__$1 = state_31524;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31524__$1,inst_31522);
} else {
if((state_val_31525 === (2))){
var state_31524__$1 = state_31524;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31524__$1,(4),ch);
} else {
if((state_val_31525 === (11))){
var inst_31514 = (state_31524[(2)]);
var state_31524__$1 = state_31524;
var statearr_31534_31553 = state_31524__$1;
(statearr_31534_31553[(2)] = inst_31514);

(statearr_31534_31553[(1)] = (10));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31525 === (9))){
var state_31524__$1 = state_31524;
var statearr_31535_31554 = state_31524__$1;
(statearr_31535_31554[(2)] = null);

(statearr_31535_31554[(1)] = (10));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31525 === (5))){
var inst_31509 = cljs.core.async.close_BANG_(out);
var state_31524__$1 = state_31524;
var statearr_31536_31555 = state_31524__$1;
(statearr_31536_31555[(2)] = inst_31509);

(statearr_31536_31555[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31525 === (10))){
var inst_31517 = (state_31524[(2)]);
var state_31524__$1 = (function (){var statearr_31537 = state_31524;
(statearr_31537[(8)] = inst_31517);

return statearr_31537;
})();
var statearr_31538_31556 = state_31524__$1;
(statearr_31538_31556[(2)] = null);

(statearr_31538_31556[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31525 === (8))){
var inst_31506 = (state_31524[(7)]);
var state_31524__$1 = state_31524;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31524__$1,(11),out,inst_31506);
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
});})(c__16203__auto___31546,out))
;
return ((function (switch__16123__auto__,c__16203__auto___31546,out){
return (function() {
var state_machine__16124__auto__ = null;
var state_machine__16124__auto____0 = (function (){
var statearr_31542 = [null,null,null,null,null,null,null,null,null];
(statearr_31542[(0)] = state_machine__16124__auto__);

(statearr_31542[(1)] = (1));

return statearr_31542;
});
var state_machine__16124__auto____1 = (function (state_31524){
while(true){
var ret_value__16125__auto__ = (function (){try{while(true){
var result__16126__auto__ = switch__16123__auto__(state_31524);
if(cljs.core.keyword_identical_QMARK_(result__16126__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16126__auto__;
}
break;
}
}catch (e31543){if((e31543 instanceof Object)){
var ex__16127__auto__ = e31543;
var statearr_31544_31557 = state_31524;
(statearr_31544_31557[(5)] = ex__16127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31524);

return cljs.core.constant$keyword$97;
} else {
throw e31543;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16125__auto__,cljs.core.constant$keyword$97)){
var G__31558 = state_31524;
state_31524 = G__31558;
continue;
} else {
return ret_value__16125__auto__;
}
break;
}
});
state_machine__16124__auto__ = function(state_31524){
switch(arguments.length){
case 0:
return state_machine__16124__auto____0.call(this);
case 1:
return state_machine__16124__auto____1.call(this,state_31524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16124__auto____0;
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16124__auto____1;
return state_machine__16124__auto__;
})()
;})(switch__16123__auto__,c__16203__auto___31546,out))
})();
var state__16205__auto__ = (function (){var statearr_31545 = (function (){return (f__16204__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16204__auto__.cljs$core$IFn$_invoke$arity$0() : f__16204__auto__.call(null));
})();
(statearr_31545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16203__auto___31546);

return statearr_31545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16205__auto__);
});})(c__16203__auto___31546,out))
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
return (function (state_31728){
var state_val_31729 = (state_31728[(1)]);
if((state_val_31729 === (7))){
var inst_31724 = (state_31728[(2)]);
var state_31728__$1 = state_31728;
var statearr_31730_31772 = state_31728__$1;
(statearr_31730_31772[(2)] = inst_31724);

(statearr_31730_31772[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31729 === (20))){
var inst_31694 = (state_31728[(7)]);
var inst_31705 = (state_31728[(2)]);
var inst_31706 = cljs.core.next(inst_31694);
var inst_31680 = inst_31706;
var inst_31681 = null;
var inst_31682 = (0);
var inst_31683 = (0);
var state_31728__$1 = (function (){var statearr_31731 = state_31728;
(statearr_31731[(8)] = inst_31682);

(statearr_31731[(9)] = inst_31705);

(statearr_31731[(10)] = inst_31681);

(statearr_31731[(11)] = inst_31680);

(statearr_31731[(12)] = inst_31683);

return statearr_31731;
})();
var statearr_31732_31773 = state_31728__$1;
(statearr_31732_31773[(2)] = null);

(statearr_31732_31773[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31729 === (1))){
var state_31728__$1 = state_31728;
var statearr_31733_31774 = state_31728__$1;
(statearr_31733_31774[(2)] = null);

(statearr_31733_31774[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31729 === (4))){
var inst_31669 = (state_31728[(13)]);
var inst_31669__$1 = (state_31728[(2)]);
var inst_31670 = (inst_31669__$1 == null);
var state_31728__$1 = (function (){var statearr_31734 = state_31728;
(statearr_31734[(13)] = inst_31669__$1);

return statearr_31734;
})();
if(cljs.core.truth_(inst_31670)){
var statearr_31735_31775 = state_31728__$1;
(statearr_31735_31775[(1)] = (5));

} else {
var statearr_31736_31776 = state_31728__$1;
(statearr_31736_31776[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31729 === (15))){
var state_31728__$1 = state_31728;
var statearr_31740_31777 = state_31728__$1;
(statearr_31740_31777[(2)] = null);

(statearr_31740_31777[(1)] = (16));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31729 === (21))){
var state_31728__$1 = state_31728;
var statearr_31741_31778 = state_31728__$1;
(statearr_31741_31778[(2)] = null);

(statearr_31741_31778[(1)] = (23));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31729 === (13))){
var inst_31682 = (state_31728[(8)]);
var inst_31681 = (state_31728[(10)]);
var inst_31680 = (state_31728[(11)]);
var inst_31683 = (state_31728[(12)]);
var inst_31690 = (state_31728[(2)]);
var inst_31691 = (inst_31683 + (1));
var tmp31737 = inst_31682;
var tmp31738 = inst_31681;
var tmp31739 = inst_31680;
var inst_31680__$1 = tmp31739;
var inst_31681__$1 = tmp31738;
var inst_31682__$1 = tmp31737;
var inst_31683__$1 = inst_31691;
var state_31728__$1 = (function (){var statearr_31742 = state_31728;
(statearr_31742[(14)] = inst_31690);

(statearr_31742[(8)] = inst_31682__$1);

(statearr_31742[(10)] = inst_31681__$1);

(statearr_31742[(11)] = inst_31680__$1);

(statearr_31742[(12)] = inst_31683__$1);

return statearr_31742;
})();
var statearr_31743_31779 = state_31728__$1;
(statearr_31743_31779[(2)] = null);

(statearr_31743_31779[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31729 === (22))){
var state_31728__$1 = state_31728;
var statearr_31744_31780 = state_31728__$1;
(statearr_31744_31780[(2)] = null);

(statearr_31744_31780[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31729 === (6))){
var inst_31669 = (state_31728[(13)]);
var inst_31678 = (function (){var G__31745 = inst_31669;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__31745) : f.call(null,G__31745));
})();
var inst_31679 = cljs.core.seq(inst_31678);
var inst_31680 = inst_31679;
var inst_31681 = null;
var inst_31682 = (0);
var inst_31683 = (0);
var state_31728__$1 = (function (){var statearr_31746 = state_31728;
(statearr_31746[(8)] = inst_31682);

(statearr_31746[(10)] = inst_31681);

(statearr_31746[(11)] = inst_31680);

(statearr_31746[(12)] = inst_31683);

return statearr_31746;
})();
var statearr_31747_31781 = state_31728__$1;
(statearr_31747_31781[(2)] = null);

(statearr_31747_31781[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31729 === (17))){
var inst_31694 = (state_31728[(7)]);
var inst_31698 = cljs.core.chunk_first(inst_31694);
var inst_31699 = cljs.core.chunk_rest(inst_31694);
var inst_31700 = cljs.core.count(inst_31698);
var inst_31680 = inst_31699;
var inst_31681 = inst_31698;
var inst_31682 = inst_31700;
var inst_31683 = (0);
var state_31728__$1 = (function (){var statearr_31748 = state_31728;
(statearr_31748[(8)] = inst_31682);

(statearr_31748[(10)] = inst_31681);

(statearr_31748[(11)] = inst_31680);

(statearr_31748[(12)] = inst_31683);

return statearr_31748;
})();
var statearr_31749_31782 = state_31728__$1;
(statearr_31749_31782[(2)] = null);

(statearr_31749_31782[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31729 === (3))){
var inst_31726 = (state_31728[(2)]);
var state_31728__$1 = state_31728;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31728__$1,inst_31726);
} else {
if((state_val_31729 === (12))){
var inst_31714 = (state_31728[(2)]);
var state_31728__$1 = state_31728;
var statearr_31750_31783 = state_31728__$1;
(statearr_31750_31783[(2)] = inst_31714);

(statearr_31750_31783[(1)] = (9));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31729 === (2))){
var state_31728__$1 = state_31728;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31728__$1,(4),in$);
} else {
if((state_val_31729 === (23))){
var inst_31722 = (state_31728[(2)]);
var state_31728__$1 = state_31728;
var statearr_31751_31784 = state_31728__$1;
(statearr_31751_31784[(2)] = inst_31722);

(statearr_31751_31784[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31729 === (19))){
var inst_31709 = (state_31728[(2)]);
var state_31728__$1 = state_31728;
var statearr_31752_31785 = state_31728__$1;
(statearr_31752_31785[(2)] = inst_31709);

(statearr_31752_31785[(1)] = (16));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31729 === (11))){
var inst_31680 = (state_31728[(11)]);
var inst_31694 = (state_31728[(7)]);
var inst_31694__$1 = cljs.core.seq(inst_31680);
var state_31728__$1 = (function (){var statearr_31753 = state_31728;
(statearr_31753[(7)] = inst_31694__$1);

return statearr_31753;
})();
if(inst_31694__$1){
var statearr_31754_31786 = state_31728__$1;
(statearr_31754_31786[(1)] = (14));

} else {
var statearr_31755_31787 = state_31728__$1;
(statearr_31755_31787[(1)] = (15));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31729 === (9))){
var inst_31716 = (state_31728[(2)]);
var inst_31717 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_31728__$1 = (function (){var statearr_31756 = state_31728;
(statearr_31756[(15)] = inst_31716);

return statearr_31756;
})();
if(cljs.core.truth_(inst_31717)){
var statearr_31757_31788 = state_31728__$1;
(statearr_31757_31788[(1)] = (21));

} else {
var statearr_31758_31789 = state_31728__$1;
(statearr_31758_31789[(1)] = (22));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31729 === (5))){
var inst_31672 = cljs.core.async.close_BANG_(out);
var state_31728__$1 = state_31728;
var statearr_31759_31790 = state_31728__$1;
(statearr_31759_31790[(2)] = inst_31672);

(statearr_31759_31790[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31729 === (14))){
var inst_31694 = (state_31728[(7)]);
var inst_31696 = cljs.core.chunked_seq_QMARK_(inst_31694);
var state_31728__$1 = state_31728;
if(inst_31696){
var statearr_31760_31791 = state_31728__$1;
(statearr_31760_31791[(1)] = (17));

} else {
var statearr_31761_31792 = state_31728__$1;
(statearr_31761_31792[(1)] = (18));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31729 === (16))){
var inst_31712 = (state_31728[(2)]);
var state_31728__$1 = state_31728;
var statearr_31762_31793 = state_31728__$1;
(statearr_31762_31793[(2)] = inst_31712);

(statearr_31762_31793[(1)] = (12));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31729 === (10))){
var inst_31681 = (state_31728[(10)]);
var inst_31683 = (state_31728[(12)]);
var inst_31688 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31681,inst_31683);
var state_31728__$1 = state_31728;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31728__$1,(13),out,inst_31688);
} else {
if((state_val_31729 === (18))){
var inst_31694 = (state_31728[(7)]);
var inst_31703 = cljs.core.first(inst_31694);
var state_31728__$1 = state_31728;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31728__$1,(20),out,inst_31703);
} else {
if((state_val_31729 === (8))){
var inst_31682 = (state_31728[(8)]);
var inst_31683 = (state_31728[(12)]);
var inst_31685 = (inst_31683 < inst_31682);
var inst_31686 = inst_31685;
var state_31728__$1 = state_31728;
if(cljs.core.truth_(inst_31686)){
var statearr_31763_31794 = state_31728__$1;
(statearr_31763_31794[(1)] = (10));

} else {
var statearr_31764_31795 = state_31728__$1;
(statearr_31764_31795[(1)] = (11));

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
var statearr_31768 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31768[(0)] = state_machine__16124__auto__);

(statearr_31768[(1)] = (1));

return statearr_31768;
});
var state_machine__16124__auto____1 = (function (state_31728){
while(true){
var ret_value__16125__auto__ = (function (){try{while(true){
var result__16126__auto__ = switch__16123__auto__(state_31728);
if(cljs.core.keyword_identical_QMARK_(result__16126__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16126__auto__;
}
break;
}
}catch (e31769){if((e31769 instanceof Object)){
var ex__16127__auto__ = e31769;
var statearr_31770_31796 = state_31728;
(statearr_31770_31796[(5)] = ex__16127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31728);

return cljs.core.constant$keyword$97;
} else {
throw e31769;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16125__auto__,cljs.core.constant$keyword$97)){
var G__31797 = state_31728;
state_31728 = G__31797;
continue;
} else {
return ret_value__16125__auto__;
}
break;
}
});
state_machine__16124__auto__ = function(state_31728){
switch(arguments.length){
case 0:
return state_machine__16124__auto____0.call(this);
case 1:
return state_machine__16124__auto____1.call(this,state_31728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16124__auto____0;
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16124__auto____1;
return state_machine__16124__auto__;
})()
;})(switch__16123__auto__,c__16203__auto__))
})();
var state__16205__auto__ = (function (){var statearr_31771 = (function (){return (f__16204__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16204__auto__.cljs$core$IFn$_invoke$arity$0() : f__16204__auto__.call(null));
})();
(statearr_31771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16203__auto__);

return statearr_31771;
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
var c__16203__auto___31902 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16203__auto___31902,out){
return (function (){
var f__16204__auto__ = (function (){var switch__16123__auto__ = ((function (c__16203__auto___31902,out){
return (function (state_31877){
var state_val_31878 = (state_31877[(1)]);
if((state_val_31878 === (7))){
var inst_31872 = (state_31877[(2)]);
var state_31877__$1 = state_31877;
var statearr_31879_31903 = state_31877__$1;
(statearr_31879_31903[(2)] = inst_31872);

(statearr_31879_31903[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31878 === (1))){
var inst_31854 = null;
var state_31877__$1 = (function (){var statearr_31880 = state_31877;
(statearr_31880[(7)] = inst_31854);

return statearr_31880;
})();
var statearr_31881_31904 = state_31877__$1;
(statearr_31881_31904[(2)] = null);

(statearr_31881_31904[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31878 === (4))){
var inst_31857 = (state_31877[(8)]);
var inst_31857__$1 = (state_31877[(2)]);
var inst_31858 = (inst_31857__$1 == null);
var inst_31859 = cljs.core.not(inst_31858);
var state_31877__$1 = (function (){var statearr_31882 = state_31877;
(statearr_31882[(8)] = inst_31857__$1);

return statearr_31882;
})();
if(inst_31859){
var statearr_31883_31905 = state_31877__$1;
(statearr_31883_31905[(1)] = (5));

} else {
var statearr_31884_31906 = state_31877__$1;
(statearr_31884_31906[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31878 === (6))){
var state_31877__$1 = state_31877;
var statearr_31885_31907 = state_31877__$1;
(statearr_31885_31907[(2)] = null);

(statearr_31885_31907[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31878 === (3))){
var inst_31874 = (state_31877[(2)]);
var inst_31875 = cljs.core.async.close_BANG_(out);
var state_31877__$1 = (function (){var statearr_31886 = state_31877;
(statearr_31886[(9)] = inst_31874);

return statearr_31886;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31877__$1,inst_31875);
} else {
if((state_val_31878 === (2))){
var state_31877__$1 = state_31877;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31877__$1,(4),ch);
} else {
if((state_val_31878 === (11))){
var inst_31857 = (state_31877[(8)]);
var inst_31866 = (state_31877[(2)]);
var inst_31854 = inst_31857;
var state_31877__$1 = (function (){var statearr_31887 = state_31877;
(statearr_31887[(10)] = inst_31866);

(statearr_31887[(7)] = inst_31854);

return statearr_31887;
})();
var statearr_31888_31908 = state_31877__$1;
(statearr_31888_31908[(2)] = null);

(statearr_31888_31908[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31878 === (9))){
var inst_31857 = (state_31877[(8)]);
var state_31877__$1 = state_31877;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31877__$1,(11),out,inst_31857);
} else {
if((state_val_31878 === (5))){
var inst_31857 = (state_31877[(8)]);
var inst_31854 = (state_31877[(7)]);
var inst_31861 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31857,inst_31854);
var state_31877__$1 = state_31877;
if(inst_31861){
var statearr_31890_31909 = state_31877__$1;
(statearr_31890_31909[(1)] = (8));

} else {
var statearr_31891_31910 = state_31877__$1;
(statearr_31891_31910[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31878 === (10))){
var inst_31869 = (state_31877[(2)]);
var state_31877__$1 = state_31877;
var statearr_31892_31911 = state_31877__$1;
(statearr_31892_31911[(2)] = inst_31869);

(statearr_31892_31911[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31878 === (8))){
var inst_31854 = (state_31877[(7)]);
var tmp31889 = inst_31854;
var inst_31854__$1 = tmp31889;
var state_31877__$1 = (function (){var statearr_31893 = state_31877;
(statearr_31893[(7)] = inst_31854__$1);

return statearr_31893;
})();
var statearr_31894_31912 = state_31877__$1;
(statearr_31894_31912[(2)] = null);

(statearr_31894_31912[(1)] = (2));


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
});})(c__16203__auto___31902,out))
;
return ((function (switch__16123__auto__,c__16203__auto___31902,out){
return (function() {
var state_machine__16124__auto__ = null;
var state_machine__16124__auto____0 = (function (){
var statearr_31898 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31898[(0)] = state_machine__16124__auto__);

(statearr_31898[(1)] = (1));

return statearr_31898;
});
var state_machine__16124__auto____1 = (function (state_31877){
while(true){
var ret_value__16125__auto__ = (function (){try{while(true){
var result__16126__auto__ = switch__16123__auto__(state_31877);
if(cljs.core.keyword_identical_QMARK_(result__16126__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16126__auto__;
}
break;
}
}catch (e31899){if((e31899 instanceof Object)){
var ex__16127__auto__ = e31899;
var statearr_31900_31913 = state_31877;
(statearr_31900_31913[(5)] = ex__16127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31877);

return cljs.core.constant$keyword$97;
} else {
throw e31899;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16125__auto__,cljs.core.constant$keyword$97)){
var G__31914 = state_31877;
state_31877 = G__31914;
continue;
} else {
return ret_value__16125__auto__;
}
break;
}
});
state_machine__16124__auto__ = function(state_31877){
switch(arguments.length){
case 0:
return state_machine__16124__auto____0.call(this);
case 1:
return state_machine__16124__auto____1.call(this,state_31877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16124__auto____0;
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16124__auto____1;
return state_machine__16124__auto__;
})()
;})(switch__16123__auto__,c__16203__auto___31902,out))
})();
var state__16205__auto__ = (function (){var statearr_31901 = (function (){return (f__16204__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16204__auto__.cljs$core$IFn$_invoke$arity$0() : f__16204__auto__.call(null));
})();
(statearr_31901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16203__auto___31902);

return statearr_31901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16205__auto__);
});})(c__16203__auto___31902,out))
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
var c__16203__auto___32052 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16203__auto___32052,out){
return (function (){
var f__16204__auto__ = (function (){var switch__16123__auto__ = ((function (c__16203__auto___32052,out){
return (function (state_32022){
var state_val_32023 = (state_32022[(1)]);
if((state_val_32023 === (7))){
var inst_32018 = (state_32022[(2)]);
var state_32022__$1 = state_32022;
var statearr_32024_32053 = state_32022__$1;
(statearr_32024_32053[(2)] = inst_32018);

(statearr_32024_32053[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32023 === (1))){
var inst_31985 = (new Array(n));
var inst_31986 = inst_31985;
var inst_31987 = (0);
var state_32022__$1 = (function (){var statearr_32025 = state_32022;
(statearr_32025[(7)] = inst_31986);

(statearr_32025[(8)] = inst_31987);

return statearr_32025;
})();
var statearr_32026_32054 = state_32022__$1;
(statearr_32026_32054[(2)] = null);

(statearr_32026_32054[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32023 === (4))){
var inst_31990 = (state_32022[(9)]);
var inst_31990__$1 = (state_32022[(2)]);
var inst_31991 = (inst_31990__$1 == null);
var inst_31992 = cljs.core.not(inst_31991);
var state_32022__$1 = (function (){var statearr_32027 = state_32022;
(statearr_32027[(9)] = inst_31990__$1);

return statearr_32027;
})();
if(inst_31992){
var statearr_32028_32055 = state_32022__$1;
(statearr_32028_32055[(1)] = (5));

} else {
var statearr_32029_32056 = state_32022__$1;
(statearr_32029_32056[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32023 === (15))){
var inst_32012 = (state_32022[(2)]);
var state_32022__$1 = state_32022;
var statearr_32030_32057 = state_32022__$1;
(statearr_32030_32057[(2)] = inst_32012);

(statearr_32030_32057[(1)] = (14));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32023 === (13))){
var state_32022__$1 = state_32022;
var statearr_32031_32058 = state_32022__$1;
(statearr_32031_32058[(2)] = null);

(statearr_32031_32058[(1)] = (14));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32023 === (6))){
var inst_31987 = (state_32022[(8)]);
var inst_32008 = (inst_31987 > (0));
var state_32022__$1 = state_32022;
if(cljs.core.truth_(inst_32008)){
var statearr_32032_32059 = state_32022__$1;
(statearr_32032_32059[(1)] = (12));

} else {
var statearr_32033_32060 = state_32022__$1;
(statearr_32033_32060[(1)] = (13));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32023 === (3))){
var inst_32020 = (state_32022[(2)]);
var state_32022__$1 = state_32022;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32022__$1,inst_32020);
} else {
if((state_val_32023 === (12))){
var inst_31986 = (state_32022[(7)]);
var inst_32010 = cljs.core.vec(inst_31986);
var state_32022__$1 = state_32022;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32022__$1,(15),out,inst_32010);
} else {
if((state_val_32023 === (2))){
var state_32022__$1 = state_32022;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32022__$1,(4),ch);
} else {
if((state_val_32023 === (11))){
var inst_32002 = (state_32022[(2)]);
var inst_32003 = (new Array(n));
var inst_31986 = inst_32003;
var inst_31987 = (0);
var state_32022__$1 = (function (){var statearr_32034 = state_32022;
(statearr_32034[(7)] = inst_31986);

(statearr_32034[(10)] = inst_32002);

(statearr_32034[(8)] = inst_31987);

return statearr_32034;
})();
var statearr_32035_32061 = state_32022__$1;
(statearr_32035_32061[(2)] = null);

(statearr_32035_32061[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32023 === (9))){
var inst_31986 = (state_32022[(7)]);
var inst_32000 = cljs.core.vec(inst_31986);
var state_32022__$1 = state_32022;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32022__$1,(11),out,inst_32000);
} else {
if((state_val_32023 === (5))){
var inst_31986 = (state_32022[(7)]);
var inst_31987 = (state_32022[(8)]);
var inst_31995 = (state_32022[(11)]);
var inst_31990 = (state_32022[(9)]);
var inst_31994 = (inst_31986[inst_31987] = inst_31990);
var inst_31995__$1 = (inst_31987 + (1));
var inst_31996 = (inst_31995__$1 < n);
var state_32022__$1 = (function (){var statearr_32036 = state_32022;
(statearr_32036[(11)] = inst_31995__$1);

(statearr_32036[(12)] = inst_31994);

return statearr_32036;
})();
if(cljs.core.truth_(inst_31996)){
var statearr_32037_32062 = state_32022__$1;
(statearr_32037_32062[(1)] = (8));

} else {
var statearr_32038_32063 = state_32022__$1;
(statearr_32038_32063[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32023 === (14))){
var inst_32015 = (state_32022[(2)]);
var inst_32016 = cljs.core.async.close_BANG_(out);
var state_32022__$1 = (function (){var statearr_32040 = state_32022;
(statearr_32040[(13)] = inst_32015);

return statearr_32040;
})();
var statearr_32041_32064 = state_32022__$1;
(statearr_32041_32064[(2)] = inst_32016);

(statearr_32041_32064[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32023 === (10))){
var inst_32006 = (state_32022[(2)]);
var state_32022__$1 = state_32022;
var statearr_32042_32065 = state_32022__$1;
(statearr_32042_32065[(2)] = inst_32006);

(statearr_32042_32065[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32023 === (8))){
var inst_31986 = (state_32022[(7)]);
var inst_31995 = (state_32022[(11)]);
var tmp32039 = inst_31986;
var inst_31986__$1 = tmp32039;
var inst_31987 = inst_31995;
var state_32022__$1 = (function (){var statearr_32043 = state_32022;
(statearr_32043[(7)] = inst_31986__$1);

(statearr_32043[(8)] = inst_31987);

return statearr_32043;
})();
var statearr_32044_32066 = state_32022__$1;
(statearr_32044_32066[(2)] = null);

(statearr_32044_32066[(1)] = (2));


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
});})(c__16203__auto___32052,out))
;
return ((function (switch__16123__auto__,c__16203__auto___32052,out){
return (function() {
var state_machine__16124__auto__ = null;
var state_machine__16124__auto____0 = (function (){
var statearr_32048 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32048[(0)] = state_machine__16124__auto__);

(statearr_32048[(1)] = (1));

return statearr_32048;
});
var state_machine__16124__auto____1 = (function (state_32022){
while(true){
var ret_value__16125__auto__ = (function (){try{while(true){
var result__16126__auto__ = switch__16123__auto__(state_32022);
if(cljs.core.keyword_identical_QMARK_(result__16126__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16126__auto__;
}
break;
}
}catch (e32049){if((e32049 instanceof Object)){
var ex__16127__auto__ = e32049;
var statearr_32050_32067 = state_32022;
(statearr_32050_32067[(5)] = ex__16127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32022);

return cljs.core.constant$keyword$97;
} else {
throw e32049;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16125__auto__,cljs.core.constant$keyword$97)){
var G__32068 = state_32022;
state_32022 = G__32068;
continue;
} else {
return ret_value__16125__auto__;
}
break;
}
});
state_machine__16124__auto__ = function(state_32022){
switch(arguments.length){
case 0:
return state_machine__16124__auto____0.call(this);
case 1:
return state_machine__16124__auto____1.call(this,state_32022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16124__auto____0;
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16124__auto____1;
return state_machine__16124__auto__;
})()
;})(switch__16123__auto__,c__16203__auto___32052,out))
})();
var state__16205__auto__ = (function (){var statearr_32051 = (function (){return (f__16204__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16204__auto__.cljs$core$IFn$_invoke$arity$0() : f__16204__auto__.call(null));
})();
(statearr_32051[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16203__auto___32052);

return statearr_32051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16205__auto__);
});})(c__16203__auto___32052,out))
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
var c__16203__auto___32216 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16203__auto___32216,out){
return (function (){
var f__16204__auto__ = (function (){var switch__16123__auto__ = ((function (c__16203__auto___32216,out){
return (function (state_32185){
var state_val_32186 = (state_32185[(1)]);
if((state_val_32186 === (7))){
var inst_32181 = (state_32185[(2)]);
var state_32185__$1 = state_32185;
var statearr_32187_32217 = state_32185__$1;
(statearr_32187_32217[(2)] = inst_32181);

(statearr_32187_32217[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32186 === (1))){
var inst_32144 = [];
var inst_32145 = inst_32144;
var inst_32146 = cljs.core.constant$keyword$112;
var state_32185__$1 = (function (){var statearr_32188 = state_32185;
(statearr_32188[(7)] = inst_32146);

(statearr_32188[(8)] = inst_32145);

return statearr_32188;
})();
var statearr_32189_32218 = state_32185__$1;
(statearr_32189_32218[(2)] = null);

(statearr_32189_32218[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32186 === (4))){
var inst_32149 = (state_32185[(9)]);
var inst_32149__$1 = (state_32185[(2)]);
var inst_32150 = (inst_32149__$1 == null);
var inst_32151 = cljs.core.not(inst_32150);
var state_32185__$1 = (function (){var statearr_32190 = state_32185;
(statearr_32190[(9)] = inst_32149__$1);

return statearr_32190;
})();
if(inst_32151){
var statearr_32191_32219 = state_32185__$1;
(statearr_32191_32219[(1)] = (5));

} else {
var statearr_32192_32220 = state_32185__$1;
(statearr_32192_32220[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32186 === (15))){
var inst_32175 = (state_32185[(2)]);
var state_32185__$1 = state_32185;
var statearr_32193_32221 = state_32185__$1;
(statearr_32193_32221[(2)] = inst_32175);

(statearr_32193_32221[(1)] = (14));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32186 === (13))){
var state_32185__$1 = state_32185;
var statearr_32194_32222 = state_32185__$1;
(statearr_32194_32222[(2)] = null);

(statearr_32194_32222[(1)] = (14));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32186 === (6))){
var inst_32145 = (state_32185[(8)]);
var inst_32170 = inst_32145.length;
var inst_32171 = (inst_32170 > (0));
var state_32185__$1 = state_32185;
if(cljs.core.truth_(inst_32171)){
var statearr_32195_32223 = state_32185__$1;
(statearr_32195_32223[(1)] = (12));

} else {
var statearr_32196_32224 = state_32185__$1;
(statearr_32196_32224[(1)] = (13));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32186 === (3))){
var inst_32183 = (state_32185[(2)]);
var state_32185__$1 = state_32185;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32185__$1,inst_32183);
} else {
if((state_val_32186 === (12))){
var inst_32145 = (state_32185[(8)]);
var inst_32173 = cljs.core.vec(inst_32145);
var state_32185__$1 = state_32185;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32185__$1,(15),out,inst_32173);
} else {
if((state_val_32186 === (2))){
var state_32185__$1 = state_32185;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32185__$1,(4),ch);
} else {
if((state_val_32186 === (11))){
var inst_32153 = (state_32185[(10)]);
var inst_32149 = (state_32185[(9)]);
var inst_32163 = (state_32185[(2)]);
var inst_32164 = [];
var inst_32165 = inst_32164.push(inst_32149);
var inst_32145 = inst_32164;
var inst_32146 = inst_32153;
var state_32185__$1 = (function (){var statearr_32197 = state_32185;
(statearr_32197[(7)] = inst_32146);

(statearr_32197[(8)] = inst_32145);

(statearr_32197[(11)] = inst_32163);

(statearr_32197[(12)] = inst_32165);

return statearr_32197;
})();
var statearr_32198_32225 = state_32185__$1;
(statearr_32198_32225[(2)] = null);

(statearr_32198_32225[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32186 === (9))){
var inst_32145 = (state_32185[(8)]);
var inst_32161 = cljs.core.vec(inst_32145);
var state_32185__$1 = state_32185;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32185__$1,(11),out,inst_32161);
} else {
if((state_val_32186 === (5))){
var inst_32153 = (state_32185[(10)]);
var inst_32149 = (state_32185[(9)]);
var inst_32146 = (state_32185[(7)]);
var inst_32153__$1 = (function (){var G__32199 = inst_32149;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__32199) : f.call(null,G__32199));
})();
var inst_32154 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32153__$1,inst_32146);
var inst_32155 = cljs.core.keyword_identical_QMARK_(inst_32146,cljs.core.constant$keyword$112);
var inst_32156 = (inst_32154) || (inst_32155);
var state_32185__$1 = (function (){var statearr_32200 = state_32185;
(statearr_32200[(10)] = inst_32153__$1);

return statearr_32200;
})();
if(cljs.core.truth_(inst_32156)){
var statearr_32201_32226 = state_32185__$1;
(statearr_32201_32226[(1)] = (8));

} else {
var statearr_32202_32227 = state_32185__$1;
(statearr_32202_32227[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32186 === (14))){
var inst_32178 = (state_32185[(2)]);
var inst_32179 = cljs.core.async.close_BANG_(out);
var state_32185__$1 = (function (){var statearr_32204 = state_32185;
(statearr_32204[(13)] = inst_32178);

return statearr_32204;
})();
var statearr_32205_32228 = state_32185__$1;
(statearr_32205_32228[(2)] = inst_32179);

(statearr_32205_32228[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32186 === (10))){
var inst_32168 = (state_32185[(2)]);
var state_32185__$1 = state_32185;
var statearr_32206_32229 = state_32185__$1;
(statearr_32206_32229[(2)] = inst_32168);

(statearr_32206_32229[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32186 === (8))){
var inst_32153 = (state_32185[(10)]);
var inst_32149 = (state_32185[(9)]);
var inst_32145 = (state_32185[(8)]);
var inst_32158 = inst_32145.push(inst_32149);
var tmp32203 = inst_32145;
var inst_32145__$1 = tmp32203;
var inst_32146 = inst_32153;
var state_32185__$1 = (function (){var statearr_32207 = state_32185;
(statearr_32207[(7)] = inst_32146);

(statearr_32207[(8)] = inst_32145__$1);

(statearr_32207[(14)] = inst_32158);

return statearr_32207;
})();
var statearr_32208_32230 = state_32185__$1;
(statearr_32208_32230[(2)] = null);

(statearr_32208_32230[(1)] = (2));


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
});})(c__16203__auto___32216,out))
;
return ((function (switch__16123__auto__,c__16203__auto___32216,out){
return (function() {
var state_machine__16124__auto__ = null;
var state_machine__16124__auto____0 = (function (){
var statearr_32212 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32212[(0)] = state_machine__16124__auto__);

(statearr_32212[(1)] = (1));

return statearr_32212;
});
var state_machine__16124__auto____1 = (function (state_32185){
while(true){
var ret_value__16125__auto__ = (function (){try{while(true){
var result__16126__auto__ = switch__16123__auto__(state_32185);
if(cljs.core.keyword_identical_QMARK_(result__16126__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16126__auto__;
}
break;
}
}catch (e32213){if((e32213 instanceof Object)){
var ex__16127__auto__ = e32213;
var statearr_32214_32231 = state_32185;
(statearr_32214_32231[(5)] = ex__16127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32185);

return cljs.core.constant$keyword$97;
} else {
throw e32213;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16125__auto__,cljs.core.constant$keyword$97)){
var G__32232 = state_32185;
state_32185 = G__32232;
continue;
} else {
return ret_value__16125__auto__;
}
break;
}
});
state_machine__16124__auto__ = function(state_32185){
switch(arguments.length){
case 0:
return state_machine__16124__auto____0.call(this);
case 1:
return state_machine__16124__auto____1.call(this,state_32185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16124__auto____0;
state_machine__16124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16124__auto____1;
return state_machine__16124__auto__;
})()
;})(switch__16123__auto__,c__16203__auto___32216,out))
})();
var state__16205__auto__ = (function (){var statearr_32215 = (function (){return (f__16204__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16204__auto__.cljs$core$IFn$_invoke$arity$0() : f__16204__auto__.call(null));
})();
(statearr_32215[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16203__auto___32216);

return statearr_32215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16205__auto__);
});})(c__16203__auto___32216,out))
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

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
if(typeof cljs.core.async.t28854 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28854 = (function (f,fn_handler,meta28855){
this.f = f;
this.fn_handler = fn_handler;
this.meta28855 = meta28855;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28854.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28854.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t28854.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t28854.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28856){
var self__ = this;
var _28856__$1 = this;
return self__.meta28855;
});

cljs.core.async.t28854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28856,meta28855__$1){
var self__ = this;
var _28856__$1 = this;
return (new cljs.core.async.t28854(self__.f,self__.fn_handler,meta28855__$1));
});

cljs.core.async.t28854.cljs$lang$type = true;

cljs.core.async.t28854.cljs$lang$ctorStr = "cljs.core.async/t28854";

cljs.core.async.t28854.cljs$lang$ctorPrWriter = (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t28854");
});

cljs.core.async.__GT_t28854 = (function __GT_t28854(f__$1,fn_handler__$1,meta28855){
return (new cljs.core.async.t28854(f__$1,fn_handler__$1,meta28855));
});

}

return (new cljs.core.async.t28854(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__28858 = buff;
if(G__28858){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__28858.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__28858.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__28858);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__28858);
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
var val_28875 = (function (){var G__28872 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28872) : cljs.core.deref.call(null,G__28872));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__28873_28876 = val_28875;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__28873_28876) : fn1.call(null,G__28873_28876));
} else {
cljs.core.async.impl.dispatch.run(((function (val_28875,ret){
return (function (){
var G__28874 = val_28875;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__28874) : fn1.call(null,G__28874));
});})(val_28875,ret))
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
var G__28885 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28885) : cljs.core.deref.call(null,G__28885));
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
var ret = (function (){var G__28886 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28886) : cljs.core.deref.call(null,G__28886));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__28887_28889 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__28887_28889) : fn1.call(null,G__28887_28889));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__28888 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__28888) : fn1.call(null,G__28888));
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
var n__4702__auto___28890 = n;
var x_28891 = (0);
while(true){
if((x_28891 < n__4702__auto___28890)){
(a[x_28891] = (0));

var G__28892 = (x_28891 + (1));
x_28891 = G__28892;
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

var G__28893 = (i + (1));
i = G__28893;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = (function (){var G__28901 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__28901) : cljs.core.atom.call(null,G__28901));
})();
if(typeof cljs.core.async.t28902 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28902 = (function (flag,alt_flag,meta28903){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta28903 = meta28903;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28902.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28902.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__28905 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28905) : cljs.core.deref.call(null,G__28905));
});})(flag))
;

cljs.core.async.t28902.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__28906_28908 = self__.flag;
var G__28907_28909 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__28906_28908,G__28907_28909) : cljs.core.reset_BANG_.call(null,G__28906_28908,G__28907_28909));

return true;
});})(flag))
;

cljs.core.async.t28902.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28904){
var self__ = this;
var _28904__$1 = this;
return self__.meta28903;
});})(flag))
;

cljs.core.async.t28902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28904,meta28903__$1){
var self__ = this;
var _28904__$1 = this;
return (new cljs.core.async.t28902(self__.flag,self__.alt_flag,meta28903__$1));
});})(flag))
;

cljs.core.async.t28902.cljs$lang$type = true;

cljs.core.async.t28902.cljs$lang$ctorStr = "cljs.core.async/t28902";

cljs.core.async.t28902.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t28902");
});})(flag))
;

cljs.core.async.__GT_t28902 = ((function (flag){
return (function __GT_t28902(flag__$1,alt_flag__$1,meta28903){
return (new cljs.core.async.t28902(flag__$1,alt_flag__$1,meta28903));
});})(flag))
;

}

return (new cljs.core.async.t28902(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t28913 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28913 = (function (cb,flag,alt_handler,meta28914){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta28914 = meta28914;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28913.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28913.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t28913.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t28913.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28915){
var self__ = this;
var _28915__$1 = this;
return self__.meta28914;
});

cljs.core.async.t28913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28915,meta28914__$1){
var self__ = this;
var _28915__$1 = this;
return (new cljs.core.async.t28913(self__.cb,self__.flag,self__.alt_handler,meta28914__$1));
});

cljs.core.async.t28913.cljs$lang$type = true;

cljs.core.async.t28913.cljs$lang$ctorStr = "cljs.core.async/t28913";

cljs.core.async.t28913.cljs$lang$ctorPrWriter = (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t28913");
});

cljs.core.async.__GT_t28913 = (function __GT_t28913(cb__$1,flag__$1,alt_handler__$1,meta28914){
return (new cljs.core.async.t28913(cb__$1,flag__$1,alt_handler__$1,meta28914));
});

}

return (new cljs.core.async.t28913(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__28923 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__28923) : port.call(null,G__28923));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__28924 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__28924) : port.call(null,G__28924));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28916_SHARP_){
var G__28925 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28916_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28925) : fret.call(null,G__28925));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28917_SHARP_){
var G__28926 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28917_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28926) : fret.call(null,G__28926));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28927 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28927) : cljs.core.deref.call(null,G__28927));
})(),(function (){var or__3815__auto__ = wport;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28928 = (i + (1));
i = G__28928;
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
var alts_BANG___delegate = function (ports,p__28929){
var map__28931 = p__28929;
var map__28931__$1 = ((cljs.core.seq_QMARK_(map__28931))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28931):map__28931);
var opts = map__28931__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__28929 = null;
if (arguments.length > 1) {
var G__28932__i = 0, G__28932__a = new Array(arguments.length -  1);
while (G__28932__i < G__28932__a.length) {G__28932__a[G__28932__i] = arguments[G__28932__i + 1]; ++G__28932__i;}
  p__28929 = new cljs.core.IndexedSeq(G__28932__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__28929);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__28933){
var ports = cljs.core.first(arglist__28933);
var p__28929 = cljs.core.rest(arglist__28933);
return alts_BANG___delegate(ports,p__28929);
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
var c__16187__auto___29031 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16187__auto___29031){
return (function (){
var f__16188__auto__ = (function (){var switch__16107__auto__ = ((function (c__16187__auto___29031){
return (function (state_29007){
var state_val_29008 = (state_29007[(1)]);
if((state_val_29008 === (7))){
var inst_29003 = (state_29007[(2)]);
var state_29007__$1 = state_29007;
var statearr_29009_29032 = state_29007__$1;
(statearr_29009_29032[(2)] = inst_29003);

(statearr_29009_29032[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29008 === (1))){
var state_29007__$1 = state_29007;
var statearr_29010_29033 = state_29007__$1;
(statearr_29010_29033[(2)] = null);

(statearr_29010_29033[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29008 === (4))){
var inst_28986 = (state_29007[(7)]);
var inst_28986__$1 = (state_29007[(2)]);
var inst_28987 = (inst_28986__$1 == null);
var state_29007__$1 = (function (){var statearr_29011 = state_29007;
(statearr_29011[(7)] = inst_28986__$1);

return statearr_29011;
})();
if(cljs.core.truth_(inst_28987)){
var statearr_29012_29034 = state_29007__$1;
(statearr_29012_29034[(1)] = (5));

} else {
var statearr_29013_29035 = state_29007__$1;
(statearr_29013_29035[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29008 === (13))){
var state_29007__$1 = state_29007;
var statearr_29014_29036 = state_29007__$1;
(statearr_29014_29036[(2)] = null);

(statearr_29014_29036[(1)] = (14));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29008 === (6))){
var inst_28986 = (state_29007[(7)]);
var state_29007__$1 = state_29007;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29007__$1,(11),to,inst_28986);
} else {
if((state_val_29008 === (3))){
var inst_29005 = (state_29007[(2)]);
var state_29007__$1 = state_29007;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29007__$1,inst_29005);
} else {
if((state_val_29008 === (12))){
var state_29007__$1 = state_29007;
var statearr_29015_29037 = state_29007__$1;
(statearr_29015_29037[(2)] = null);

(statearr_29015_29037[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29008 === (2))){
var state_29007__$1 = state_29007;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29007__$1,(4),from);
} else {
if((state_val_29008 === (11))){
var inst_28996 = (state_29007[(2)]);
var state_29007__$1 = state_29007;
if(cljs.core.truth_(inst_28996)){
var statearr_29016_29038 = state_29007__$1;
(statearr_29016_29038[(1)] = (12));

} else {
var statearr_29017_29039 = state_29007__$1;
(statearr_29017_29039[(1)] = (13));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29008 === (9))){
var state_29007__$1 = state_29007;
var statearr_29018_29040 = state_29007__$1;
(statearr_29018_29040[(2)] = null);

(statearr_29018_29040[(1)] = (10));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29008 === (5))){
var state_29007__$1 = state_29007;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29019_29041 = state_29007__$1;
(statearr_29019_29041[(1)] = (8));

} else {
var statearr_29020_29042 = state_29007__$1;
(statearr_29020_29042[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29008 === (14))){
var inst_29001 = (state_29007[(2)]);
var state_29007__$1 = state_29007;
var statearr_29021_29043 = state_29007__$1;
(statearr_29021_29043[(2)] = inst_29001);

(statearr_29021_29043[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29008 === (10))){
var inst_28993 = (state_29007[(2)]);
var state_29007__$1 = state_29007;
var statearr_29022_29044 = state_29007__$1;
(statearr_29022_29044[(2)] = inst_28993);

(statearr_29022_29044[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29008 === (8))){
var inst_28990 = cljs.core.async.close_BANG_(to);
var state_29007__$1 = state_29007;
var statearr_29023_29045 = state_29007__$1;
(statearr_29023_29045[(2)] = inst_28990);

(statearr_29023_29045[(1)] = (10));


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
});})(c__16187__auto___29031))
;
return ((function (switch__16107__auto__,c__16187__auto___29031){
return (function() {
var state_machine__16108__auto__ = null;
var state_machine__16108__auto____0 = (function (){
var statearr_29027 = [null,null,null,null,null,null,null,null];
(statearr_29027[(0)] = state_machine__16108__auto__);

(statearr_29027[(1)] = (1));

return statearr_29027;
});
var state_machine__16108__auto____1 = (function (state_29007){
while(true){
var ret_value__16109__auto__ = (function (){try{while(true){
var result__16110__auto__ = switch__16107__auto__(state_29007);
if(cljs.core.keyword_identical_QMARK_(result__16110__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16110__auto__;
}
break;
}
}catch (e29028){if((e29028 instanceof Object)){
var ex__16111__auto__ = e29028;
var statearr_29029_29046 = state_29007;
(statearr_29029_29046[(5)] = ex__16111__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29007);

return cljs.core.constant$keyword$97;
} else {
throw e29028;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16109__auto__,cljs.core.constant$keyword$97)){
var G__29047 = state_29007;
state_29007 = G__29047;
continue;
} else {
return ret_value__16109__auto__;
}
break;
}
});
state_machine__16108__auto__ = function(state_29007){
switch(arguments.length){
case 0:
return state_machine__16108__auto____0.call(this);
case 1:
return state_machine__16108__auto____1.call(this,state_29007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16108__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16108__auto____0;
state_machine__16108__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16108__auto____1;
return state_machine__16108__auto__;
})()
;})(switch__16107__auto__,c__16187__auto___29031))
})();
var state__16189__auto__ = (function (){var statearr_29030 = (function (){return (f__16188__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16188__auto__.cljs$core$IFn$_invoke$arity$0() : f__16188__auto__.call(null));
})();
(statearr_29030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16187__auto___29031);

return statearr_29030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16189__auto__);
});})(c__16187__auto___29031))
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
return (function (p__29233){
var vec__29234 = p__29233;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29234,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29234,(1),null);
var job = vec__29234;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__16187__auto___29418 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16187__auto___29418,res,vec__29234,v,p,job,jobs,results){
return (function (){
var f__16188__auto__ = (function (){var switch__16107__auto__ = ((function (c__16187__auto___29418,res,vec__29234,v,p,job,jobs,results){
return (function (state_29239){
var state_val_29240 = (state_29239[(1)]);
if((state_val_29240 === (2))){
var inst_29236 = (state_29239[(2)]);
var inst_29237 = cljs.core.async.close_BANG_(res);
var state_29239__$1 = (function (){var statearr_29241 = state_29239;
(statearr_29241[(7)] = inst_29236);

return statearr_29241;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29239__$1,inst_29237);
} else {
if((state_val_29240 === (1))){
var state_29239__$1 = state_29239;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29239__$1,(2),res,v);
} else {
return null;
}
}
});})(c__16187__auto___29418,res,vec__29234,v,p,job,jobs,results))
;
return ((function (switch__16107__auto__,c__16187__auto___29418,res,vec__29234,v,p,job,jobs,results){
return (function() {
var state_machine__16108__auto__ = null;
var state_machine__16108__auto____0 = (function (){
var statearr_29245 = [null,null,null,null,null,null,null,null];
(statearr_29245[(0)] = state_machine__16108__auto__);

(statearr_29245[(1)] = (1));

return statearr_29245;
});
var state_machine__16108__auto____1 = (function (state_29239){
while(true){
var ret_value__16109__auto__ = (function (){try{while(true){
var result__16110__auto__ = switch__16107__auto__(state_29239);
if(cljs.core.keyword_identical_QMARK_(result__16110__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16110__auto__;
}
break;
}
}catch (e29246){if((e29246 instanceof Object)){
var ex__16111__auto__ = e29246;
var statearr_29247_29419 = state_29239;
(statearr_29247_29419[(5)] = ex__16111__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29239);

return cljs.core.constant$keyword$97;
} else {
throw e29246;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16109__auto__,cljs.core.constant$keyword$97)){
var G__29420 = state_29239;
state_29239 = G__29420;
continue;
} else {
return ret_value__16109__auto__;
}
break;
}
});
state_machine__16108__auto__ = function(state_29239){
switch(arguments.length){
case 0:
return state_machine__16108__auto____0.call(this);
case 1:
return state_machine__16108__auto____1.call(this,state_29239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16108__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16108__auto____0;
state_machine__16108__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16108__auto____1;
return state_machine__16108__auto__;
})()
;})(switch__16107__auto__,c__16187__auto___29418,res,vec__29234,v,p,job,jobs,results))
})();
var state__16189__auto__ = (function (){var statearr_29248 = (function (){return (f__16188__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16188__auto__.cljs$core$IFn$_invoke$arity$0() : f__16188__auto__.call(null));
})();
(statearr_29248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16187__auto___29418);

return statearr_29248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16189__auto__);
});})(c__16187__auto___29418,res,vec__29234,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29249){
var vec__29250 = p__29249;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29250,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29250,(1),null);
var job = vec__29250;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__29251_29421 = v;
var G__29252_29422 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__29251_29421,G__29252_29422) : xf.call(null,G__29251_29421,G__29252_29422));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4702__auto___29423 = n;
var __29424 = (0);
while(true){
if((__29424 < n__4702__auto___29423)){
var G__29253_29425 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29253_29425) {
case "async":
var c__16187__auto___29427 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__29424,c__16187__auto___29427,G__29253_29425,n__4702__auto___29423,jobs,results,process,async){
return (function (){
var f__16188__auto__ = (function (){var switch__16107__auto__ = ((function (__29424,c__16187__auto___29427,G__29253_29425,n__4702__auto___29423,jobs,results,process,async){
return (function (state_29266){
var state_val_29267 = (state_29266[(1)]);
if((state_val_29267 === (7))){
var inst_29262 = (state_29266[(2)]);
var state_29266__$1 = state_29266;
var statearr_29268_29428 = state_29266__$1;
(statearr_29268_29428[(2)] = inst_29262);

(statearr_29268_29428[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29267 === (6))){
var state_29266__$1 = state_29266;
var statearr_29269_29429 = state_29266__$1;
(statearr_29269_29429[(2)] = null);

(statearr_29269_29429[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29267 === (5))){
var state_29266__$1 = state_29266;
var statearr_29270_29430 = state_29266__$1;
(statearr_29270_29430[(2)] = null);

(statearr_29270_29430[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29267 === (4))){
var inst_29256 = (state_29266[(2)]);
var inst_29257 = async(inst_29256);
var state_29266__$1 = state_29266;
if(cljs.core.truth_(inst_29257)){
var statearr_29271_29431 = state_29266__$1;
(statearr_29271_29431[(1)] = (5));

} else {
var statearr_29272_29432 = state_29266__$1;
(statearr_29272_29432[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29267 === (3))){
var inst_29264 = (state_29266[(2)]);
var state_29266__$1 = state_29266;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29266__$1,inst_29264);
} else {
if((state_val_29267 === (2))){
var state_29266__$1 = state_29266;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29266__$1,(4),jobs);
} else {
if((state_val_29267 === (1))){
var state_29266__$1 = state_29266;
var statearr_29273_29433 = state_29266__$1;
(statearr_29273_29433[(2)] = null);

(statearr_29273_29433[(1)] = (2));


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
});})(__29424,c__16187__auto___29427,G__29253_29425,n__4702__auto___29423,jobs,results,process,async))
;
return ((function (__29424,switch__16107__auto__,c__16187__auto___29427,G__29253_29425,n__4702__auto___29423,jobs,results,process,async){
return (function() {
var state_machine__16108__auto__ = null;
var state_machine__16108__auto____0 = (function (){
var statearr_29277 = [null,null,null,null,null,null,null];
(statearr_29277[(0)] = state_machine__16108__auto__);

(statearr_29277[(1)] = (1));

return statearr_29277;
});
var state_machine__16108__auto____1 = (function (state_29266){
while(true){
var ret_value__16109__auto__ = (function (){try{while(true){
var result__16110__auto__ = switch__16107__auto__(state_29266);
if(cljs.core.keyword_identical_QMARK_(result__16110__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16110__auto__;
}
break;
}
}catch (e29278){if((e29278 instanceof Object)){
var ex__16111__auto__ = e29278;
var statearr_29279_29434 = state_29266;
(statearr_29279_29434[(5)] = ex__16111__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29266);

return cljs.core.constant$keyword$97;
} else {
throw e29278;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16109__auto__,cljs.core.constant$keyword$97)){
var G__29435 = state_29266;
state_29266 = G__29435;
continue;
} else {
return ret_value__16109__auto__;
}
break;
}
});
state_machine__16108__auto__ = function(state_29266){
switch(arguments.length){
case 0:
return state_machine__16108__auto____0.call(this);
case 1:
return state_machine__16108__auto____1.call(this,state_29266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16108__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16108__auto____0;
state_machine__16108__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16108__auto____1;
return state_machine__16108__auto__;
})()
;})(__29424,switch__16107__auto__,c__16187__auto___29427,G__29253_29425,n__4702__auto___29423,jobs,results,process,async))
})();
var state__16189__auto__ = (function (){var statearr_29280 = (function (){return (f__16188__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16188__auto__.cljs$core$IFn$_invoke$arity$0() : f__16188__auto__.call(null));
})();
(statearr_29280[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16187__auto___29427);

return statearr_29280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16189__auto__);
});})(__29424,c__16187__auto___29427,G__29253_29425,n__4702__auto___29423,jobs,results,process,async))
);


break;
case "compute":
var c__16187__auto___29436 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__29424,c__16187__auto___29436,G__29253_29425,n__4702__auto___29423,jobs,results,process,async){
return (function (){
var f__16188__auto__ = (function (){var switch__16107__auto__ = ((function (__29424,c__16187__auto___29436,G__29253_29425,n__4702__auto___29423,jobs,results,process,async){
return (function (state_29293){
var state_val_29294 = (state_29293[(1)]);
if((state_val_29294 === (7))){
var inst_29289 = (state_29293[(2)]);
var state_29293__$1 = state_29293;
var statearr_29295_29437 = state_29293__$1;
(statearr_29295_29437[(2)] = inst_29289);

(statearr_29295_29437[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29294 === (6))){
var state_29293__$1 = state_29293;
var statearr_29296_29438 = state_29293__$1;
(statearr_29296_29438[(2)] = null);

(statearr_29296_29438[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29294 === (5))){
var state_29293__$1 = state_29293;
var statearr_29297_29439 = state_29293__$1;
(statearr_29297_29439[(2)] = null);

(statearr_29297_29439[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29294 === (4))){
var inst_29283 = (state_29293[(2)]);
var inst_29284 = process(inst_29283);
var state_29293__$1 = state_29293;
if(cljs.core.truth_(inst_29284)){
var statearr_29298_29440 = state_29293__$1;
(statearr_29298_29440[(1)] = (5));

} else {
var statearr_29299_29441 = state_29293__$1;
(statearr_29299_29441[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29294 === (3))){
var inst_29291 = (state_29293[(2)]);
var state_29293__$1 = state_29293;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29293__$1,inst_29291);
} else {
if((state_val_29294 === (2))){
var state_29293__$1 = state_29293;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29293__$1,(4),jobs);
} else {
if((state_val_29294 === (1))){
var state_29293__$1 = state_29293;
var statearr_29300_29442 = state_29293__$1;
(statearr_29300_29442[(2)] = null);

(statearr_29300_29442[(1)] = (2));


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
});})(__29424,c__16187__auto___29436,G__29253_29425,n__4702__auto___29423,jobs,results,process,async))
;
return ((function (__29424,switch__16107__auto__,c__16187__auto___29436,G__29253_29425,n__4702__auto___29423,jobs,results,process,async){
return (function() {
var state_machine__16108__auto__ = null;
var state_machine__16108__auto____0 = (function (){
var statearr_29304 = [null,null,null,null,null,null,null];
(statearr_29304[(0)] = state_machine__16108__auto__);

(statearr_29304[(1)] = (1));

return statearr_29304;
});
var state_machine__16108__auto____1 = (function (state_29293){
while(true){
var ret_value__16109__auto__ = (function (){try{while(true){
var result__16110__auto__ = switch__16107__auto__(state_29293);
if(cljs.core.keyword_identical_QMARK_(result__16110__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16110__auto__;
}
break;
}
}catch (e29305){if((e29305 instanceof Object)){
var ex__16111__auto__ = e29305;
var statearr_29306_29443 = state_29293;
(statearr_29306_29443[(5)] = ex__16111__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29293);

return cljs.core.constant$keyword$97;
} else {
throw e29305;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16109__auto__,cljs.core.constant$keyword$97)){
var G__29444 = state_29293;
state_29293 = G__29444;
continue;
} else {
return ret_value__16109__auto__;
}
break;
}
});
state_machine__16108__auto__ = function(state_29293){
switch(arguments.length){
case 0:
return state_machine__16108__auto____0.call(this);
case 1:
return state_machine__16108__auto____1.call(this,state_29293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16108__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16108__auto____0;
state_machine__16108__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16108__auto____1;
return state_machine__16108__auto__;
})()
;})(__29424,switch__16107__auto__,c__16187__auto___29436,G__29253_29425,n__4702__auto___29423,jobs,results,process,async))
})();
var state__16189__auto__ = (function (){var statearr_29307 = (function (){return (f__16188__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16188__auto__.cljs$core$IFn$_invoke$arity$0() : f__16188__auto__.call(null));
})();
(statearr_29307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16187__auto___29436);

return statearr_29307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16189__auto__);
});})(__29424,c__16187__auto___29436,G__29253_29425,n__4702__auto___29423,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__29445 = (__29424 + (1));
__29424 = G__29445;
continue;
} else {
}
break;
}

var c__16187__auto___29446 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16187__auto___29446,jobs,results,process,async){
return (function (){
var f__16188__auto__ = (function (){var switch__16107__auto__ = ((function (c__16187__auto___29446,jobs,results,process,async){
return (function (state_29329){
var state_val_29330 = (state_29329[(1)]);
if((state_val_29330 === (9))){
var inst_29322 = (state_29329[(2)]);
var state_29329__$1 = (function (){var statearr_29331 = state_29329;
(statearr_29331[(7)] = inst_29322);

return statearr_29331;
})();
var statearr_29332_29447 = state_29329__$1;
(statearr_29332_29447[(2)] = null);

(statearr_29332_29447[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29330 === (8))){
var inst_29315 = (state_29329[(8)]);
var inst_29320 = (state_29329[(2)]);
var state_29329__$1 = (function (){var statearr_29333 = state_29329;
(statearr_29333[(9)] = inst_29320);

return statearr_29333;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29329__$1,(9),results,inst_29315);
} else {
if((state_val_29330 === (7))){
var inst_29325 = (state_29329[(2)]);
var state_29329__$1 = state_29329;
var statearr_29334_29448 = state_29329__$1;
(statearr_29334_29448[(2)] = inst_29325);

(statearr_29334_29448[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29330 === (6))){
var inst_29315 = (state_29329[(8)]);
var inst_29310 = (state_29329[(10)]);
var inst_29315__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_29316 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29317 = [inst_29310,inst_29315__$1];
var inst_29318 = (new cljs.core.PersistentVector(null,2,(5),inst_29316,inst_29317,null));
var state_29329__$1 = (function (){var statearr_29335 = state_29329;
(statearr_29335[(8)] = inst_29315__$1);

return statearr_29335;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29329__$1,(8),jobs,inst_29318);
} else {
if((state_val_29330 === (5))){
var inst_29313 = cljs.core.async.close_BANG_(jobs);
var state_29329__$1 = state_29329;
var statearr_29336_29449 = state_29329__$1;
(statearr_29336_29449[(2)] = inst_29313);

(statearr_29336_29449[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29330 === (4))){
var inst_29310 = (state_29329[(10)]);
var inst_29310__$1 = (state_29329[(2)]);
var inst_29311 = (inst_29310__$1 == null);
var state_29329__$1 = (function (){var statearr_29337 = state_29329;
(statearr_29337[(10)] = inst_29310__$1);

return statearr_29337;
})();
if(cljs.core.truth_(inst_29311)){
var statearr_29338_29450 = state_29329__$1;
(statearr_29338_29450[(1)] = (5));

} else {
var statearr_29339_29451 = state_29329__$1;
(statearr_29339_29451[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29330 === (3))){
var inst_29327 = (state_29329[(2)]);
var state_29329__$1 = state_29329;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29329__$1,inst_29327);
} else {
if((state_val_29330 === (2))){
var state_29329__$1 = state_29329;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29329__$1,(4),from);
} else {
if((state_val_29330 === (1))){
var state_29329__$1 = state_29329;
var statearr_29340_29452 = state_29329__$1;
(statearr_29340_29452[(2)] = null);

(statearr_29340_29452[(1)] = (2));


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
});})(c__16187__auto___29446,jobs,results,process,async))
;
return ((function (switch__16107__auto__,c__16187__auto___29446,jobs,results,process,async){
return (function() {
var state_machine__16108__auto__ = null;
var state_machine__16108__auto____0 = (function (){
var statearr_29344 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29344[(0)] = state_machine__16108__auto__);

(statearr_29344[(1)] = (1));

return statearr_29344;
});
var state_machine__16108__auto____1 = (function (state_29329){
while(true){
var ret_value__16109__auto__ = (function (){try{while(true){
var result__16110__auto__ = switch__16107__auto__(state_29329);
if(cljs.core.keyword_identical_QMARK_(result__16110__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16110__auto__;
}
break;
}
}catch (e29345){if((e29345 instanceof Object)){
var ex__16111__auto__ = e29345;
var statearr_29346_29453 = state_29329;
(statearr_29346_29453[(5)] = ex__16111__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29329);

return cljs.core.constant$keyword$97;
} else {
throw e29345;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16109__auto__,cljs.core.constant$keyword$97)){
var G__29454 = state_29329;
state_29329 = G__29454;
continue;
} else {
return ret_value__16109__auto__;
}
break;
}
});
state_machine__16108__auto__ = function(state_29329){
switch(arguments.length){
case 0:
return state_machine__16108__auto____0.call(this);
case 1:
return state_machine__16108__auto____1.call(this,state_29329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16108__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16108__auto____0;
state_machine__16108__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16108__auto____1;
return state_machine__16108__auto__;
})()
;})(switch__16107__auto__,c__16187__auto___29446,jobs,results,process,async))
})();
var state__16189__auto__ = (function (){var statearr_29347 = (function (){return (f__16188__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16188__auto__.cljs$core$IFn$_invoke$arity$0() : f__16188__auto__.call(null));
})();
(statearr_29347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16187__auto___29446);

return statearr_29347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16189__auto__);
});})(c__16187__auto___29446,jobs,results,process,async))
);


var c__16187__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16187__auto__,jobs,results,process,async){
return (function (){
var f__16188__auto__ = (function (){var switch__16107__auto__ = ((function (c__16187__auto__,jobs,results,process,async){
return (function (state_29385){
var state_val_29386 = (state_29385[(1)]);
if((state_val_29386 === (7))){
var inst_29381 = (state_29385[(2)]);
var state_29385__$1 = state_29385;
var statearr_29387_29455 = state_29385__$1;
(statearr_29387_29455[(2)] = inst_29381);

(statearr_29387_29455[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29386 === (20))){
var state_29385__$1 = state_29385;
var statearr_29388_29456 = state_29385__$1;
(statearr_29388_29456[(2)] = null);

(statearr_29388_29456[(1)] = (21));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29386 === (1))){
var state_29385__$1 = state_29385;
var statearr_29389_29457 = state_29385__$1;
(statearr_29389_29457[(2)] = null);

(statearr_29389_29457[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29386 === (4))){
var inst_29350 = (state_29385[(7)]);
var inst_29350__$1 = (state_29385[(2)]);
var inst_29351 = (inst_29350__$1 == null);
var state_29385__$1 = (function (){var statearr_29390 = state_29385;
(statearr_29390[(7)] = inst_29350__$1);

return statearr_29390;
})();
if(cljs.core.truth_(inst_29351)){
var statearr_29391_29458 = state_29385__$1;
(statearr_29391_29458[(1)] = (5));

} else {
var statearr_29392_29459 = state_29385__$1;
(statearr_29392_29459[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29386 === (15))){
var inst_29363 = (state_29385[(8)]);
var state_29385__$1 = state_29385;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29385__$1,(18),to,inst_29363);
} else {
if((state_val_29386 === (21))){
var inst_29376 = (state_29385[(2)]);
var state_29385__$1 = state_29385;
var statearr_29393_29460 = state_29385__$1;
(statearr_29393_29460[(2)] = inst_29376);

(statearr_29393_29460[(1)] = (13));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29386 === (13))){
var inst_29378 = (state_29385[(2)]);
var state_29385__$1 = (function (){var statearr_29394 = state_29385;
(statearr_29394[(9)] = inst_29378);

return statearr_29394;
})();
var statearr_29395_29461 = state_29385__$1;
(statearr_29395_29461[(2)] = null);

(statearr_29395_29461[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29386 === (6))){
var inst_29350 = (state_29385[(7)]);
var state_29385__$1 = state_29385;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29385__$1,(11),inst_29350);
} else {
if((state_val_29386 === (17))){
var inst_29371 = (state_29385[(2)]);
var state_29385__$1 = state_29385;
if(cljs.core.truth_(inst_29371)){
var statearr_29396_29462 = state_29385__$1;
(statearr_29396_29462[(1)] = (19));

} else {
var statearr_29397_29463 = state_29385__$1;
(statearr_29397_29463[(1)] = (20));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29386 === (3))){
var inst_29383 = (state_29385[(2)]);
var state_29385__$1 = state_29385;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29385__$1,inst_29383);
} else {
if((state_val_29386 === (12))){
var inst_29360 = (state_29385[(10)]);
var state_29385__$1 = state_29385;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29385__$1,(14),inst_29360);
} else {
if((state_val_29386 === (2))){
var state_29385__$1 = state_29385;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29385__$1,(4),results);
} else {
if((state_val_29386 === (19))){
var state_29385__$1 = state_29385;
var statearr_29398_29464 = state_29385__$1;
(statearr_29398_29464[(2)] = null);

(statearr_29398_29464[(1)] = (12));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29386 === (11))){
var inst_29360 = (state_29385[(2)]);
var state_29385__$1 = (function (){var statearr_29399 = state_29385;
(statearr_29399[(10)] = inst_29360);

return statearr_29399;
})();
var statearr_29400_29465 = state_29385__$1;
(statearr_29400_29465[(2)] = null);

(statearr_29400_29465[(1)] = (12));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29386 === (9))){
var state_29385__$1 = state_29385;
var statearr_29401_29466 = state_29385__$1;
(statearr_29401_29466[(2)] = null);

(statearr_29401_29466[(1)] = (10));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29386 === (5))){
var state_29385__$1 = state_29385;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29402_29467 = state_29385__$1;
(statearr_29402_29467[(1)] = (8));

} else {
var statearr_29403_29468 = state_29385__$1;
(statearr_29403_29468[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29386 === (14))){
var inst_29365 = (state_29385[(11)]);
var inst_29363 = (state_29385[(8)]);
var inst_29363__$1 = (state_29385[(2)]);
var inst_29364 = (inst_29363__$1 == null);
var inst_29365__$1 = cljs.core.not(inst_29364);
var state_29385__$1 = (function (){var statearr_29404 = state_29385;
(statearr_29404[(11)] = inst_29365__$1);

(statearr_29404[(8)] = inst_29363__$1);

return statearr_29404;
})();
if(inst_29365__$1){
var statearr_29405_29469 = state_29385__$1;
(statearr_29405_29469[(1)] = (15));

} else {
var statearr_29406_29470 = state_29385__$1;
(statearr_29406_29470[(1)] = (16));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29386 === (16))){
var inst_29365 = (state_29385[(11)]);
var state_29385__$1 = state_29385;
var statearr_29407_29471 = state_29385__$1;
(statearr_29407_29471[(2)] = inst_29365);

(statearr_29407_29471[(1)] = (17));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29386 === (10))){
var inst_29357 = (state_29385[(2)]);
var state_29385__$1 = state_29385;
var statearr_29408_29472 = state_29385__$1;
(statearr_29408_29472[(2)] = inst_29357);

(statearr_29408_29472[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29386 === (18))){
var inst_29368 = (state_29385[(2)]);
var state_29385__$1 = state_29385;
var statearr_29409_29473 = state_29385__$1;
(statearr_29409_29473[(2)] = inst_29368);

(statearr_29409_29473[(1)] = (17));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29386 === (8))){
var inst_29354 = cljs.core.async.close_BANG_(to);
var state_29385__$1 = state_29385;
var statearr_29410_29474 = state_29385__$1;
(statearr_29410_29474[(2)] = inst_29354);

(statearr_29410_29474[(1)] = (10));


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
});})(c__16187__auto__,jobs,results,process,async))
;
return ((function (switch__16107__auto__,c__16187__auto__,jobs,results,process,async){
return (function() {
var state_machine__16108__auto__ = null;
var state_machine__16108__auto____0 = (function (){
var statearr_29414 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29414[(0)] = state_machine__16108__auto__);

(statearr_29414[(1)] = (1));

return statearr_29414;
});
var state_machine__16108__auto____1 = (function (state_29385){
while(true){
var ret_value__16109__auto__ = (function (){try{while(true){
var result__16110__auto__ = switch__16107__auto__(state_29385);
if(cljs.core.keyword_identical_QMARK_(result__16110__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16110__auto__;
}
break;
}
}catch (e29415){if((e29415 instanceof Object)){
var ex__16111__auto__ = e29415;
var statearr_29416_29475 = state_29385;
(statearr_29416_29475[(5)] = ex__16111__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29385);

return cljs.core.constant$keyword$97;
} else {
throw e29415;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16109__auto__,cljs.core.constant$keyword$97)){
var G__29476 = state_29385;
state_29385 = G__29476;
continue;
} else {
return ret_value__16109__auto__;
}
break;
}
});
state_machine__16108__auto__ = function(state_29385){
switch(arguments.length){
case 0:
return state_machine__16108__auto____0.call(this);
case 1:
return state_machine__16108__auto____1.call(this,state_29385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16108__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16108__auto____0;
state_machine__16108__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16108__auto____1;
return state_machine__16108__auto__;
})()
;})(switch__16107__auto__,c__16187__auto__,jobs,results,process,async))
})();
var state__16189__auto__ = (function (){var statearr_29417 = (function (){return (f__16188__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16188__auto__.cljs$core$IFn$_invoke$arity$0() : f__16188__auto__.call(null));
})();
(statearr_29417[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16187__auto__);

return statearr_29417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16189__auto__);
});})(c__16187__auto__,jobs,results,process,async))
);

return c__16187__auto__;
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
var c__16187__auto___29599 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16187__auto___29599,tc,fc){
return (function (){
var f__16188__auto__ = (function (){var switch__16107__auto__ = ((function (c__16187__auto___29599,tc,fc){
return (function (state_29573){
var state_val_29574 = (state_29573[(1)]);
if((state_val_29574 === (7))){
var inst_29569 = (state_29573[(2)]);
var state_29573__$1 = state_29573;
var statearr_29575_29600 = state_29573__$1;
(statearr_29575_29600[(2)] = inst_29569);

(statearr_29575_29600[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29574 === (1))){
var state_29573__$1 = state_29573;
var statearr_29576_29601 = state_29573__$1;
(statearr_29576_29601[(2)] = null);

(statearr_29576_29601[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29574 === (4))){
var inst_29550 = (state_29573[(7)]);
var inst_29550__$1 = (state_29573[(2)]);
var inst_29551 = (inst_29550__$1 == null);
var state_29573__$1 = (function (){var statearr_29577 = state_29573;
(statearr_29577[(7)] = inst_29550__$1);

return statearr_29577;
})();
if(cljs.core.truth_(inst_29551)){
var statearr_29578_29602 = state_29573__$1;
(statearr_29578_29602[(1)] = (5));

} else {
var statearr_29579_29603 = state_29573__$1;
(statearr_29579_29603[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29574 === (13))){
var state_29573__$1 = state_29573;
var statearr_29580_29604 = state_29573__$1;
(statearr_29580_29604[(2)] = null);

(statearr_29580_29604[(1)] = (14));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29574 === (6))){
var inst_29550 = (state_29573[(7)]);
var inst_29556 = (function (){var G__29581 = inst_29550;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__29581) : p.call(null,G__29581));
})();
var state_29573__$1 = state_29573;
if(cljs.core.truth_(inst_29556)){
var statearr_29582_29605 = state_29573__$1;
(statearr_29582_29605[(1)] = (9));

} else {
var statearr_29583_29606 = state_29573__$1;
(statearr_29583_29606[(1)] = (10));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29574 === (3))){
var inst_29571 = (state_29573[(2)]);
var state_29573__$1 = state_29573;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29573__$1,inst_29571);
} else {
if((state_val_29574 === (12))){
var state_29573__$1 = state_29573;
var statearr_29584_29607 = state_29573__$1;
(statearr_29584_29607[(2)] = null);

(statearr_29584_29607[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29574 === (2))){
var state_29573__$1 = state_29573;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29573__$1,(4),ch);
} else {
if((state_val_29574 === (11))){
var inst_29550 = (state_29573[(7)]);
var inst_29560 = (state_29573[(2)]);
var state_29573__$1 = state_29573;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29573__$1,(8),inst_29560,inst_29550);
} else {
if((state_val_29574 === (9))){
var state_29573__$1 = state_29573;
var statearr_29585_29608 = state_29573__$1;
(statearr_29585_29608[(2)] = tc);

(statearr_29585_29608[(1)] = (11));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29574 === (5))){
var inst_29553 = cljs.core.async.close_BANG_(tc);
var inst_29554 = cljs.core.async.close_BANG_(fc);
var state_29573__$1 = (function (){var statearr_29586 = state_29573;
(statearr_29586[(8)] = inst_29553);

return statearr_29586;
})();
var statearr_29587_29609 = state_29573__$1;
(statearr_29587_29609[(2)] = inst_29554);

(statearr_29587_29609[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29574 === (14))){
var inst_29567 = (state_29573[(2)]);
var state_29573__$1 = state_29573;
var statearr_29588_29610 = state_29573__$1;
(statearr_29588_29610[(2)] = inst_29567);

(statearr_29588_29610[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29574 === (10))){
var state_29573__$1 = state_29573;
var statearr_29589_29611 = state_29573__$1;
(statearr_29589_29611[(2)] = fc);

(statearr_29589_29611[(1)] = (11));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29574 === (8))){
var inst_29562 = (state_29573[(2)]);
var state_29573__$1 = state_29573;
if(cljs.core.truth_(inst_29562)){
var statearr_29590_29612 = state_29573__$1;
(statearr_29590_29612[(1)] = (12));

} else {
var statearr_29591_29613 = state_29573__$1;
(statearr_29591_29613[(1)] = (13));

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
});})(c__16187__auto___29599,tc,fc))
;
return ((function (switch__16107__auto__,c__16187__auto___29599,tc,fc){
return (function() {
var state_machine__16108__auto__ = null;
var state_machine__16108__auto____0 = (function (){
var statearr_29595 = [null,null,null,null,null,null,null,null,null];
(statearr_29595[(0)] = state_machine__16108__auto__);

(statearr_29595[(1)] = (1));

return statearr_29595;
});
var state_machine__16108__auto____1 = (function (state_29573){
while(true){
var ret_value__16109__auto__ = (function (){try{while(true){
var result__16110__auto__ = switch__16107__auto__(state_29573);
if(cljs.core.keyword_identical_QMARK_(result__16110__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16110__auto__;
}
break;
}
}catch (e29596){if((e29596 instanceof Object)){
var ex__16111__auto__ = e29596;
var statearr_29597_29614 = state_29573;
(statearr_29597_29614[(5)] = ex__16111__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29573);

return cljs.core.constant$keyword$97;
} else {
throw e29596;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16109__auto__,cljs.core.constant$keyword$97)){
var G__29615 = state_29573;
state_29573 = G__29615;
continue;
} else {
return ret_value__16109__auto__;
}
break;
}
});
state_machine__16108__auto__ = function(state_29573){
switch(arguments.length){
case 0:
return state_machine__16108__auto____0.call(this);
case 1:
return state_machine__16108__auto____1.call(this,state_29573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16108__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16108__auto____0;
state_machine__16108__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16108__auto____1;
return state_machine__16108__auto__;
})()
;})(switch__16107__auto__,c__16187__auto___29599,tc,fc))
})();
var state__16189__auto__ = (function (){var statearr_29598 = (function (){return (f__16188__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16188__auto__.cljs$core$IFn$_invoke$arity$0() : f__16188__auto__.call(null));
})();
(statearr_29598[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16187__auto___29599);

return statearr_29598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16189__auto__);
});})(c__16187__auto___29599,tc,fc))
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
var c__16187__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16187__auto__){
return (function (){
var f__16188__auto__ = (function (){var switch__16107__auto__ = ((function (c__16187__auto__){
return (function (state_29664){
var state_val_29665 = (state_29664[(1)]);
if((state_val_29665 === (7))){
var inst_29660 = (state_29664[(2)]);
var state_29664__$1 = state_29664;
var statearr_29666_29684 = state_29664__$1;
(statearr_29666_29684[(2)] = inst_29660);

(statearr_29666_29684[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29665 === (6))){
var inst_29653 = (state_29664[(7)]);
var inst_29650 = (state_29664[(8)]);
var inst_29657 = (function (){var G__29667 = inst_29650;
var G__29668 = inst_29653;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__29667,G__29668) : f.call(null,G__29667,G__29668));
})();
var inst_29650__$1 = inst_29657;
var state_29664__$1 = (function (){var statearr_29669 = state_29664;
(statearr_29669[(8)] = inst_29650__$1);

return statearr_29669;
})();
var statearr_29670_29685 = state_29664__$1;
(statearr_29670_29685[(2)] = null);

(statearr_29670_29685[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29665 === (5))){
var inst_29650 = (state_29664[(8)]);
var state_29664__$1 = state_29664;
var statearr_29671_29686 = state_29664__$1;
(statearr_29671_29686[(2)] = inst_29650);

(statearr_29671_29686[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29665 === (4))){
var inst_29653 = (state_29664[(7)]);
var inst_29653__$1 = (state_29664[(2)]);
var inst_29654 = (inst_29653__$1 == null);
var state_29664__$1 = (function (){var statearr_29672 = state_29664;
(statearr_29672[(7)] = inst_29653__$1);

return statearr_29672;
})();
if(cljs.core.truth_(inst_29654)){
var statearr_29673_29687 = state_29664__$1;
(statearr_29673_29687[(1)] = (5));

} else {
var statearr_29674_29688 = state_29664__$1;
(statearr_29674_29688[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29665 === (3))){
var inst_29662 = (state_29664[(2)]);
var state_29664__$1 = state_29664;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29664__$1,inst_29662);
} else {
if((state_val_29665 === (2))){
var state_29664__$1 = state_29664;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29664__$1,(4),ch);
} else {
if((state_val_29665 === (1))){
var inst_29650 = init;
var state_29664__$1 = (function (){var statearr_29675 = state_29664;
(statearr_29675[(8)] = inst_29650);

return statearr_29675;
})();
var statearr_29676_29689 = state_29664__$1;
(statearr_29676_29689[(2)] = null);

(statearr_29676_29689[(1)] = (2));


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
});})(c__16187__auto__))
;
return ((function (switch__16107__auto__,c__16187__auto__){
return (function() {
var state_machine__16108__auto__ = null;
var state_machine__16108__auto____0 = (function (){
var statearr_29680 = [null,null,null,null,null,null,null,null,null];
(statearr_29680[(0)] = state_machine__16108__auto__);

(statearr_29680[(1)] = (1));

return statearr_29680;
});
var state_machine__16108__auto____1 = (function (state_29664){
while(true){
var ret_value__16109__auto__ = (function (){try{while(true){
var result__16110__auto__ = switch__16107__auto__(state_29664);
if(cljs.core.keyword_identical_QMARK_(result__16110__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16110__auto__;
}
break;
}
}catch (e29681){if((e29681 instanceof Object)){
var ex__16111__auto__ = e29681;
var statearr_29682_29690 = state_29664;
(statearr_29682_29690[(5)] = ex__16111__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29664);

return cljs.core.constant$keyword$97;
} else {
throw e29681;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16109__auto__,cljs.core.constant$keyword$97)){
var G__29691 = state_29664;
state_29664 = G__29691;
continue;
} else {
return ret_value__16109__auto__;
}
break;
}
});
state_machine__16108__auto__ = function(state_29664){
switch(arguments.length){
case 0:
return state_machine__16108__auto____0.call(this);
case 1:
return state_machine__16108__auto____1.call(this,state_29664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16108__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16108__auto____0;
state_machine__16108__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16108__auto____1;
return state_machine__16108__auto__;
})()
;})(switch__16107__auto__,c__16187__auto__))
})();
var state__16189__auto__ = (function (){var statearr_29683 = (function (){return (f__16188__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16188__auto__.cljs$core$IFn$_invoke$arity$0() : f__16188__auto__.call(null));
})();
(statearr_29683[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16187__auto__);

return statearr_29683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16189__auto__);
});})(c__16187__auto__))
);

return c__16187__auto__;
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
var c__16187__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16187__auto__){
return (function (){
var f__16188__auto__ = (function (){var switch__16107__auto__ = ((function (c__16187__auto__){
return (function (state_29768){
var state_val_29769 = (state_29768[(1)]);
if((state_val_29769 === (7))){
var inst_29750 = (state_29768[(2)]);
var state_29768__$1 = state_29768;
var statearr_29770_29793 = state_29768__$1;
(statearr_29770_29793[(2)] = inst_29750);

(statearr_29770_29793[(1)] = (6));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29769 === (1))){
var inst_29744 = cljs.core.seq(coll);
var inst_29745 = inst_29744;
var state_29768__$1 = (function (){var statearr_29771 = state_29768;
(statearr_29771[(7)] = inst_29745);

return statearr_29771;
})();
var statearr_29772_29794 = state_29768__$1;
(statearr_29772_29794[(2)] = null);

(statearr_29772_29794[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29769 === (4))){
var inst_29745 = (state_29768[(7)]);
var inst_29748 = cljs.core.first(inst_29745);
var state_29768__$1 = state_29768;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29768__$1,(7),ch,inst_29748);
} else {
if((state_val_29769 === (13))){
var inst_29762 = (state_29768[(2)]);
var state_29768__$1 = state_29768;
var statearr_29773_29795 = state_29768__$1;
(statearr_29773_29795[(2)] = inst_29762);

(statearr_29773_29795[(1)] = (10));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29769 === (6))){
var inst_29753 = (state_29768[(2)]);
var state_29768__$1 = state_29768;
if(cljs.core.truth_(inst_29753)){
var statearr_29774_29796 = state_29768__$1;
(statearr_29774_29796[(1)] = (8));

} else {
var statearr_29775_29797 = state_29768__$1;
(statearr_29775_29797[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29769 === (3))){
var inst_29766 = (state_29768[(2)]);
var state_29768__$1 = state_29768;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29768__$1,inst_29766);
} else {
if((state_val_29769 === (12))){
var state_29768__$1 = state_29768;
var statearr_29776_29798 = state_29768__$1;
(statearr_29776_29798[(2)] = null);

(statearr_29776_29798[(1)] = (13));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29769 === (2))){
var inst_29745 = (state_29768[(7)]);
var state_29768__$1 = state_29768;
if(cljs.core.truth_(inst_29745)){
var statearr_29777_29799 = state_29768__$1;
(statearr_29777_29799[(1)] = (4));

} else {
var statearr_29778_29800 = state_29768__$1;
(statearr_29778_29800[(1)] = (5));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29769 === (11))){
var inst_29759 = cljs.core.async.close_BANG_(ch);
var state_29768__$1 = state_29768;
var statearr_29779_29801 = state_29768__$1;
(statearr_29779_29801[(2)] = inst_29759);

(statearr_29779_29801[(1)] = (13));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29769 === (9))){
var state_29768__$1 = state_29768;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29780_29802 = state_29768__$1;
(statearr_29780_29802[(1)] = (11));

} else {
var statearr_29781_29803 = state_29768__$1;
(statearr_29781_29803[(1)] = (12));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29769 === (5))){
var inst_29745 = (state_29768[(7)]);
var state_29768__$1 = state_29768;
var statearr_29782_29804 = state_29768__$1;
(statearr_29782_29804[(2)] = inst_29745);

(statearr_29782_29804[(1)] = (6));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29769 === (10))){
var inst_29764 = (state_29768[(2)]);
var state_29768__$1 = state_29768;
var statearr_29783_29805 = state_29768__$1;
(statearr_29783_29805[(2)] = inst_29764);

(statearr_29783_29805[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29769 === (8))){
var inst_29745 = (state_29768[(7)]);
var inst_29755 = cljs.core.next(inst_29745);
var inst_29745__$1 = inst_29755;
var state_29768__$1 = (function (){var statearr_29784 = state_29768;
(statearr_29784[(7)] = inst_29745__$1);

return statearr_29784;
})();
var statearr_29785_29806 = state_29768__$1;
(statearr_29785_29806[(2)] = null);

(statearr_29785_29806[(1)] = (2));


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
});})(c__16187__auto__))
;
return ((function (switch__16107__auto__,c__16187__auto__){
return (function() {
var state_machine__16108__auto__ = null;
var state_machine__16108__auto____0 = (function (){
var statearr_29789 = [null,null,null,null,null,null,null,null];
(statearr_29789[(0)] = state_machine__16108__auto__);

(statearr_29789[(1)] = (1));

return statearr_29789;
});
var state_machine__16108__auto____1 = (function (state_29768){
while(true){
var ret_value__16109__auto__ = (function (){try{while(true){
var result__16110__auto__ = switch__16107__auto__(state_29768);
if(cljs.core.keyword_identical_QMARK_(result__16110__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16110__auto__;
}
break;
}
}catch (e29790){if((e29790 instanceof Object)){
var ex__16111__auto__ = e29790;
var statearr_29791_29807 = state_29768;
(statearr_29791_29807[(5)] = ex__16111__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29768);

return cljs.core.constant$keyword$97;
} else {
throw e29790;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16109__auto__,cljs.core.constant$keyword$97)){
var G__29808 = state_29768;
state_29768 = G__29808;
continue;
} else {
return ret_value__16109__auto__;
}
break;
}
});
state_machine__16108__auto__ = function(state_29768){
switch(arguments.length){
case 0:
return state_machine__16108__auto____0.call(this);
case 1:
return state_machine__16108__auto____1.call(this,state_29768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16108__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16108__auto____0;
state_machine__16108__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16108__auto____1;
return state_machine__16108__auto__;
})()
;})(switch__16107__auto__,c__16187__auto__))
})();
var state__16189__auto__ = (function (){var statearr_29792 = (function (){return (f__16188__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16188__auto__.cljs$core$IFn$_invoke$arity$0() : f__16188__auto__.call(null));
})();
(statearr_29792[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16187__auto__);

return statearr_29792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16189__auto__);
});})(c__16187__auto__))
);

return c__16187__auto__;
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

cljs.core.async.Mux = (function (){var obj29810 = {};
return obj29810;
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
return (function (){var or__3815__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__29814 = x__4459__auto__;
return goog.typeOf(G__29814);
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


cljs.core.async.Mult = (function (){var obj29816 = {};
return obj29816;
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
return (function (){var or__3815__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__29820 = x__4459__auto__;
return goog.typeOf(G__29820);
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
return (function (){var or__3815__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__29824 = x__4459__auto__;
return goog.typeOf(G__29824);
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
return (function (){var or__3815__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__29828 = x__4459__auto__;
return goog.typeOf(G__29828);
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
var cs = (function (){var G__30058 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30058) : cljs.core.atom.call(null,G__30058));
})();
var m = (function (){
if(typeof cljs.core.async.t30059 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30059 = (function (cs,ch,mult,meta30060){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta30060 = meta30060;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30059.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t30059.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t30059.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t30059.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__30062_30287 = self__.cs;
var G__30063_30288 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__30062_30287,G__30063_30288) : cljs.core.reset_BANG_.call(null,G__30062_30287,G__30063_30288));

return null;
});})(cs))
;

cljs.core.async.t30059.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30059.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t30059.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30061){
var self__ = this;
var _30061__$1 = this;
return self__.meta30060;
});})(cs))
;

cljs.core.async.t30059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30061,meta30060__$1){
var self__ = this;
var _30061__$1 = this;
return (new cljs.core.async.t30059(self__.cs,self__.ch,self__.mult,meta30060__$1));
});})(cs))
;

cljs.core.async.t30059.cljs$lang$type = true;

cljs.core.async.t30059.cljs$lang$ctorStr = "cljs.core.async/t30059";

cljs.core.async.t30059.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t30059");
});})(cs))
;

cljs.core.async.__GT_t30059 = ((function (cs){
return (function __GT_t30059(cs__$1,ch__$1,mult__$1,meta30060){
return (new cljs.core.async.t30059(cs__$1,ch__$1,mult__$1,meta30060));
});})(cs))
;

}

return (new cljs.core.async.t30059(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__30064 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30064) : cljs.core.atom.call(null,G__30064));
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
var c__16187__auto___30289 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16187__auto___30289,cs,m,dchan,dctr,done){
return (function (){
var f__16188__auto__ = (function (){var switch__16107__auto__ = ((function (c__16187__auto___30289,cs,m,dchan,dctr,done){
return (function (state_30195){
var state_val_30196 = (state_30195[(1)]);
if((state_val_30196 === (7))){
var inst_30191 = (state_30195[(2)]);
var state_30195__$1 = state_30195;
var statearr_30197_30290 = state_30195__$1;
(statearr_30197_30290[(2)] = inst_30191);

(statearr_30197_30290[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30196 === (20))){
var inst_30096 = (state_30195[(7)]);
var inst_30106 = cljs.core.first(inst_30096);
var inst_30107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30106,(0),null);
var inst_30108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30106,(1),null);
var state_30195__$1 = (function (){var statearr_30198 = state_30195;
(statearr_30198[(8)] = inst_30107);

return statearr_30198;
})();
if(cljs.core.truth_(inst_30108)){
var statearr_30199_30291 = state_30195__$1;
(statearr_30199_30291[(1)] = (22));

} else {
var statearr_30200_30292 = state_30195__$1;
(statearr_30200_30292[(1)] = (23));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30196 === (27))){
var inst_30136 = (state_30195[(9)]);
var inst_30138 = (state_30195[(10)]);
var inst_30067 = (state_30195[(11)]);
var inst_30143 = (state_30195[(12)]);
var inst_30143__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30136,inst_30138);
var inst_30144 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30143__$1,inst_30067,done);
var state_30195__$1 = (function (){var statearr_30201 = state_30195;
(statearr_30201[(12)] = inst_30143__$1);

return statearr_30201;
})();
if(cljs.core.truth_(inst_30144)){
var statearr_30202_30293 = state_30195__$1;
(statearr_30202_30293[(1)] = (30));

} else {
var statearr_30203_30294 = state_30195__$1;
(statearr_30203_30294[(1)] = (31));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30196 === (1))){
var state_30195__$1 = state_30195;
var statearr_30204_30295 = state_30195__$1;
(statearr_30204_30295[(2)] = null);

(statearr_30204_30295[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30196 === (24))){
var inst_30096 = (state_30195[(7)]);
var inst_30113 = (state_30195[(2)]);
var inst_30114 = cljs.core.next(inst_30096);
var inst_30076 = inst_30114;
var inst_30077 = null;
var inst_30078 = (0);
var inst_30079 = (0);
var state_30195__$1 = (function (){var statearr_30205 = state_30195;
(statearr_30205[(13)] = inst_30078);

(statearr_30205[(14)] = inst_30113);

(statearr_30205[(15)] = inst_30076);

(statearr_30205[(16)] = inst_30077);

(statearr_30205[(17)] = inst_30079);

return statearr_30205;
})();
var statearr_30206_30296 = state_30195__$1;
(statearr_30206_30296[(2)] = null);

(statearr_30206_30296[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30196 === (39))){
var state_30195__$1 = state_30195;
var statearr_30210_30297 = state_30195__$1;
(statearr_30210_30297[(2)] = null);

(statearr_30210_30297[(1)] = (41));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30196 === (4))){
var inst_30067 = (state_30195[(11)]);
var inst_30067__$1 = (state_30195[(2)]);
var inst_30068 = (inst_30067__$1 == null);
var state_30195__$1 = (function (){var statearr_30211 = state_30195;
(statearr_30211[(11)] = inst_30067__$1);

return statearr_30211;
})();
if(cljs.core.truth_(inst_30068)){
var statearr_30212_30298 = state_30195__$1;
(statearr_30212_30298[(1)] = (5));

} else {
var statearr_30213_30299 = state_30195__$1;
(statearr_30213_30299[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30196 === (15))){
var inst_30078 = (state_30195[(13)]);
var inst_30076 = (state_30195[(15)]);
var inst_30077 = (state_30195[(16)]);
var inst_30079 = (state_30195[(17)]);
var inst_30092 = (state_30195[(2)]);
var inst_30093 = (inst_30079 + (1));
var tmp30207 = inst_30078;
var tmp30208 = inst_30076;
var tmp30209 = inst_30077;
var inst_30076__$1 = tmp30208;
var inst_30077__$1 = tmp30209;
var inst_30078__$1 = tmp30207;
var inst_30079__$1 = inst_30093;
var state_30195__$1 = (function (){var statearr_30214 = state_30195;
(statearr_30214[(13)] = inst_30078__$1);

(statearr_30214[(18)] = inst_30092);

(statearr_30214[(15)] = inst_30076__$1);

(statearr_30214[(16)] = inst_30077__$1);

(statearr_30214[(17)] = inst_30079__$1);

return statearr_30214;
})();
var statearr_30215_30300 = state_30195__$1;
(statearr_30215_30300[(2)] = null);

(statearr_30215_30300[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30196 === (21))){
var inst_30117 = (state_30195[(2)]);
var state_30195__$1 = state_30195;
var statearr_30219_30301 = state_30195__$1;
(statearr_30219_30301[(2)] = inst_30117);

(statearr_30219_30301[(1)] = (18));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30196 === (31))){
var inst_30143 = (state_30195[(12)]);
var inst_30147 = done(null);
var inst_30148 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30143);
var state_30195__$1 = (function (){var statearr_30220 = state_30195;
(statearr_30220[(19)] = inst_30147);

return statearr_30220;
})();
var statearr_30221_30302 = state_30195__$1;
(statearr_30221_30302[(2)] = inst_30148);

(statearr_30221_30302[(1)] = (32));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30196 === (32))){
var inst_30136 = (state_30195[(9)]);
var inst_30138 = (state_30195[(10)]);
var inst_30137 = (state_30195[(20)]);
var inst_30135 = (state_30195[(21)]);
var inst_30150 = (state_30195[(2)]);
var inst_30151 = (inst_30138 + (1));
var tmp30216 = inst_30136;
var tmp30217 = inst_30137;
var tmp30218 = inst_30135;
var inst_30135__$1 = tmp30218;
var inst_30136__$1 = tmp30216;
var inst_30137__$1 = tmp30217;
var inst_30138__$1 = inst_30151;
var state_30195__$1 = (function (){var statearr_30222 = state_30195;
(statearr_30222[(9)] = inst_30136__$1);

(statearr_30222[(10)] = inst_30138__$1);

(statearr_30222[(22)] = inst_30150);

(statearr_30222[(20)] = inst_30137__$1);

(statearr_30222[(21)] = inst_30135__$1);

return statearr_30222;
})();
var statearr_30223_30303 = state_30195__$1;
(statearr_30223_30303[(2)] = null);

(statearr_30223_30303[(1)] = (25));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30196 === (40))){
var inst_30163 = (state_30195[(23)]);
var inst_30167 = done(null);
var inst_30168 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30163);
var state_30195__$1 = (function (){var statearr_30224 = state_30195;
(statearr_30224[(24)] = inst_30167);

return statearr_30224;
})();
var statearr_30225_30304 = state_30195__$1;
(statearr_30225_30304[(2)] = inst_30168);

(statearr_30225_30304[(1)] = (41));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30196 === (33))){
var inst_30154 = (state_30195[(25)]);
var inst_30156 = cljs.core.chunked_seq_QMARK_(inst_30154);
var state_30195__$1 = state_30195;
if(inst_30156){
var statearr_30226_30305 = state_30195__$1;
(statearr_30226_30305[(1)] = (36));

} else {
var statearr_30227_30306 = state_30195__$1;
(statearr_30227_30306[(1)] = (37));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30196 === (13))){
var inst_30086 = (state_30195[(26)]);
var inst_30089 = cljs.core.async.close_BANG_(inst_30086);
var state_30195__$1 = state_30195;
var statearr_30228_30307 = state_30195__$1;
(statearr_30228_30307[(2)] = inst_30089);

(statearr_30228_30307[(1)] = (15));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30196 === (22))){
var inst_30107 = (state_30195[(8)]);
var inst_30110 = cljs.core.async.close_BANG_(inst_30107);
var state_30195__$1 = state_30195;
var statearr_30229_30308 = state_30195__$1;
(statearr_30229_30308[(2)] = inst_30110);

(statearr_30229_30308[(1)] = (24));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30196 === (36))){
var inst_30154 = (state_30195[(25)]);
var inst_30158 = cljs.core.chunk_first(inst_30154);
var inst_30159 = cljs.core.chunk_rest(inst_30154);
var inst_30160 = cljs.core.count(inst_30158);
var inst_30135 = inst_30159;
var inst_30136 = inst_30158;
var inst_30137 = inst_30160;
var inst_30138 = (0);
var state_30195__$1 = (function (){var statearr_30230 = state_30195;
(statearr_30230[(9)] = inst_30136);

(statearr_30230[(10)] = inst_30138);

(statearr_30230[(20)] = inst_30137);

(statearr_30230[(21)] = inst_30135);

return statearr_30230;
})();
var statearr_30231_30309 = state_30195__$1;
(statearr_30231_30309[(2)] = null);

(statearr_30231_30309[(1)] = (25));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30196 === (41))){
var inst_30154 = (state_30195[(25)]);
var inst_30170 = (state_30195[(2)]);
var inst_30171 = cljs.core.next(inst_30154);
var inst_30135 = inst_30171;
var inst_30136 = null;
var inst_30137 = (0);
var inst_30138 = (0);
var state_30195__$1 = (function (){var statearr_30232 = state_30195;
(statearr_30232[(9)] = inst_30136);

(statearr_30232[(27)] = inst_30170);

(statearr_30232[(10)] = inst_30138);

(statearr_30232[(20)] = inst_30137);

(statearr_30232[(21)] = inst_30135);

return statearr_30232;
})();
var statearr_30233_30310 = state_30195__$1;
(statearr_30233_30310[(2)] = null);

(statearr_30233_30310[(1)] = (25));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30196 === (43))){
var state_30195__$1 = state_30195;
var statearr_30234_30311 = state_30195__$1;
(statearr_30234_30311[(2)] = null);

(statearr_30234_30311[(1)] = (44));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30196 === (29))){
var inst_30179 = (state_30195[(2)]);
var state_30195__$1 = state_30195;
var statearr_30235_30312 = state_30195__$1;
(statearr_30235_30312[(2)] = inst_30179);

(statearr_30235_30312[(1)] = (26));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30196 === (44))){
var inst_30188 = (state_30195[(2)]);
var state_30195__$1 = (function (){var statearr_30236 = state_30195;
(statearr_30236[(28)] = inst_30188);

return statearr_30236;
})();
var statearr_30237_30313 = state_30195__$1;
(statearr_30237_30313[(2)] = null);

(statearr_30237_30313[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30196 === (6))){
var inst_30127 = (state_30195[(29)]);
var inst_30126 = (function (){var G__30238 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30238) : cljs.core.deref.call(null,G__30238));
})();
var inst_30127__$1 = cljs.core.keys(inst_30126);
var inst_30128 = cljs.core.count(inst_30127__$1);
var inst_30129 = (function (){var G__30239 = dctr;
var G__30240 = inst_30128;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__30239,G__30240) : cljs.core.reset_BANG_.call(null,G__30239,G__30240));
})();
var inst_30134 = cljs.core.seq(inst_30127__$1);
var inst_30135 = inst_30134;
var inst_30136 = null;
var inst_30137 = (0);
var inst_30138 = (0);
var state_30195__$1 = (function (){var statearr_30241 = state_30195;
(statearr_30241[(9)] = inst_30136);

(statearr_30241[(10)] = inst_30138);

(statearr_30241[(30)] = inst_30129);

(statearr_30241[(20)] = inst_30137);

(statearr_30241[(29)] = inst_30127__$1);

(statearr_30241[(21)] = inst_30135);

return statearr_30241;
})();
var statearr_30242_30314 = state_30195__$1;
(statearr_30242_30314[(2)] = null);

(statearr_30242_30314[(1)] = (25));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30196 === (28))){
var inst_30154 = (state_30195[(25)]);
var inst_30135 = (state_30195[(21)]);
var inst_30154__$1 = cljs.core.seq(inst_30135);
var state_30195__$1 = (function (){var statearr_30243 = state_30195;
(statearr_30243[(25)] = inst_30154__$1);

return statearr_30243;
})();
if(inst_30154__$1){
var statearr_30244_30315 = state_30195__$1;
(statearr_30244_30315[(1)] = (33));

} else {
var statearr_30245_30316 = state_30195__$1;
(statearr_30245_30316[(1)] = (34));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30196 === (25))){
var inst_30138 = (state_30195[(10)]);
var inst_30137 = (state_30195[(20)]);
var inst_30140 = (inst_30138 < inst_30137);
var inst_30141 = inst_30140;
var state_30195__$1 = state_30195;
if(cljs.core.truth_(inst_30141)){
var statearr_30246_30317 = state_30195__$1;
(statearr_30246_30317[(1)] = (27));

} else {
var statearr_30247_30318 = state_30195__$1;
(statearr_30247_30318[(1)] = (28));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30196 === (34))){
var state_30195__$1 = state_30195;
var statearr_30248_30319 = state_30195__$1;
(statearr_30248_30319[(2)] = null);

(statearr_30248_30319[(1)] = (35));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30196 === (17))){
var state_30195__$1 = state_30195;
var statearr_30249_30320 = state_30195__$1;
(statearr_30249_30320[(2)] = null);

(statearr_30249_30320[(1)] = (18));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30196 === (3))){
var inst_30193 = (state_30195[(2)]);
var state_30195__$1 = state_30195;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30195__$1,inst_30193);
} else {
if((state_val_30196 === (12))){
var inst_30122 = (state_30195[(2)]);
var state_30195__$1 = state_30195;
var statearr_30250_30321 = state_30195__$1;
(statearr_30250_30321[(2)] = inst_30122);

(statearr_30250_30321[(1)] = (9));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30196 === (2))){
var state_30195__$1 = state_30195;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30195__$1,(4),ch);
} else {
if((state_val_30196 === (23))){
var state_30195__$1 = state_30195;
var statearr_30251_30322 = state_30195__$1;
(statearr_30251_30322[(2)] = null);

(statearr_30251_30322[(1)] = (24));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30196 === (35))){
var inst_30177 = (state_30195[(2)]);
var state_30195__$1 = state_30195;
var statearr_30252_30323 = state_30195__$1;
(statearr_30252_30323[(2)] = inst_30177);

(statearr_30252_30323[(1)] = (29));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30196 === (19))){
var inst_30096 = (state_30195[(7)]);
var inst_30100 = cljs.core.chunk_first(inst_30096);
var inst_30101 = cljs.core.chunk_rest(inst_30096);
var inst_30102 = cljs.core.count(inst_30100);
var inst_30076 = inst_30101;
var inst_30077 = inst_30100;
var inst_30078 = inst_30102;
var inst_30079 = (0);
var state_30195__$1 = (function (){var statearr_30253 = state_30195;
(statearr_30253[(13)] = inst_30078);

(statearr_30253[(15)] = inst_30076);

(statearr_30253[(16)] = inst_30077);

(statearr_30253[(17)] = inst_30079);

return statearr_30253;
})();
var statearr_30254_30324 = state_30195__$1;
(statearr_30254_30324[(2)] = null);

(statearr_30254_30324[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30196 === (11))){
var inst_30096 = (state_30195[(7)]);
var inst_30076 = (state_30195[(15)]);
var inst_30096__$1 = cljs.core.seq(inst_30076);
var state_30195__$1 = (function (){var statearr_30255 = state_30195;
(statearr_30255[(7)] = inst_30096__$1);

return statearr_30255;
})();
if(inst_30096__$1){
var statearr_30256_30325 = state_30195__$1;
(statearr_30256_30325[(1)] = (16));

} else {
var statearr_30257_30326 = state_30195__$1;
(statearr_30257_30326[(1)] = (17));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30196 === (9))){
var inst_30124 = (state_30195[(2)]);
var state_30195__$1 = state_30195;
var statearr_30258_30327 = state_30195__$1;
(statearr_30258_30327[(2)] = inst_30124);

(statearr_30258_30327[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30196 === (5))){
var inst_30074 = (function (){var G__30259 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30259) : cljs.core.deref.call(null,G__30259));
})();
var inst_30075 = cljs.core.seq(inst_30074);
var inst_30076 = inst_30075;
var inst_30077 = null;
var inst_30078 = (0);
var inst_30079 = (0);
var state_30195__$1 = (function (){var statearr_30260 = state_30195;
(statearr_30260[(13)] = inst_30078);

(statearr_30260[(15)] = inst_30076);

(statearr_30260[(16)] = inst_30077);

(statearr_30260[(17)] = inst_30079);

return statearr_30260;
})();
var statearr_30261_30328 = state_30195__$1;
(statearr_30261_30328[(2)] = null);

(statearr_30261_30328[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30196 === (14))){
var state_30195__$1 = state_30195;
var statearr_30262_30329 = state_30195__$1;
(statearr_30262_30329[(2)] = null);

(statearr_30262_30329[(1)] = (15));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30196 === (45))){
var inst_30185 = (state_30195[(2)]);
var state_30195__$1 = state_30195;
var statearr_30263_30330 = state_30195__$1;
(statearr_30263_30330[(2)] = inst_30185);

(statearr_30263_30330[(1)] = (44));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30196 === (26))){
var inst_30127 = (state_30195[(29)]);
var inst_30181 = (state_30195[(2)]);
var inst_30182 = cljs.core.seq(inst_30127);
var state_30195__$1 = (function (){var statearr_30264 = state_30195;
(statearr_30264[(31)] = inst_30181);

return statearr_30264;
})();
if(inst_30182){
var statearr_30265_30331 = state_30195__$1;
(statearr_30265_30331[(1)] = (42));

} else {
var statearr_30266_30332 = state_30195__$1;
(statearr_30266_30332[(1)] = (43));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30196 === (16))){
var inst_30096 = (state_30195[(7)]);
var inst_30098 = cljs.core.chunked_seq_QMARK_(inst_30096);
var state_30195__$1 = state_30195;
if(inst_30098){
var statearr_30267_30333 = state_30195__$1;
(statearr_30267_30333[(1)] = (19));

} else {
var statearr_30268_30334 = state_30195__$1;
(statearr_30268_30334[(1)] = (20));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30196 === (38))){
var inst_30174 = (state_30195[(2)]);
var state_30195__$1 = state_30195;
var statearr_30269_30335 = state_30195__$1;
(statearr_30269_30335[(2)] = inst_30174);

(statearr_30269_30335[(1)] = (35));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30196 === (30))){
var state_30195__$1 = state_30195;
var statearr_30270_30336 = state_30195__$1;
(statearr_30270_30336[(2)] = null);

(statearr_30270_30336[(1)] = (32));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30196 === (10))){
var inst_30077 = (state_30195[(16)]);
var inst_30079 = (state_30195[(17)]);
var inst_30085 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30077,inst_30079);
var inst_30086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30085,(0),null);
var inst_30087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30085,(1),null);
var state_30195__$1 = (function (){var statearr_30271 = state_30195;
(statearr_30271[(26)] = inst_30086);

return statearr_30271;
})();
if(cljs.core.truth_(inst_30087)){
var statearr_30272_30337 = state_30195__$1;
(statearr_30272_30337[(1)] = (13));

} else {
var statearr_30273_30338 = state_30195__$1;
(statearr_30273_30338[(1)] = (14));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30196 === (18))){
var inst_30120 = (state_30195[(2)]);
var state_30195__$1 = state_30195;
var statearr_30274_30339 = state_30195__$1;
(statearr_30274_30339[(2)] = inst_30120);

(statearr_30274_30339[(1)] = (12));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30196 === (42))){
var state_30195__$1 = state_30195;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30195__$1,(45),dchan);
} else {
if((state_val_30196 === (37))){
var inst_30154 = (state_30195[(25)]);
var inst_30163 = (state_30195[(23)]);
var inst_30067 = (state_30195[(11)]);
var inst_30163__$1 = cljs.core.first(inst_30154);
var inst_30164 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30163__$1,inst_30067,done);
var state_30195__$1 = (function (){var statearr_30275 = state_30195;
(statearr_30275[(23)] = inst_30163__$1);

return statearr_30275;
})();
if(cljs.core.truth_(inst_30164)){
var statearr_30276_30340 = state_30195__$1;
(statearr_30276_30340[(1)] = (39));

} else {
var statearr_30277_30341 = state_30195__$1;
(statearr_30277_30341[(1)] = (40));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30196 === (8))){
var inst_30078 = (state_30195[(13)]);
var inst_30079 = (state_30195[(17)]);
var inst_30081 = (inst_30079 < inst_30078);
var inst_30082 = inst_30081;
var state_30195__$1 = state_30195;
if(cljs.core.truth_(inst_30082)){
var statearr_30278_30342 = state_30195__$1;
(statearr_30278_30342[(1)] = (10));

} else {
var statearr_30279_30343 = state_30195__$1;
(statearr_30279_30343[(1)] = (11));

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
});})(c__16187__auto___30289,cs,m,dchan,dctr,done))
;
return ((function (switch__16107__auto__,c__16187__auto___30289,cs,m,dchan,dctr,done){
return (function() {
var state_machine__16108__auto__ = null;
var state_machine__16108__auto____0 = (function (){
var statearr_30283 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30283[(0)] = state_machine__16108__auto__);

(statearr_30283[(1)] = (1));

return statearr_30283;
});
var state_machine__16108__auto____1 = (function (state_30195){
while(true){
var ret_value__16109__auto__ = (function (){try{while(true){
var result__16110__auto__ = switch__16107__auto__(state_30195);
if(cljs.core.keyword_identical_QMARK_(result__16110__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16110__auto__;
}
break;
}
}catch (e30284){if((e30284 instanceof Object)){
var ex__16111__auto__ = e30284;
var statearr_30285_30344 = state_30195;
(statearr_30285_30344[(5)] = ex__16111__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30195);

return cljs.core.constant$keyword$97;
} else {
throw e30284;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16109__auto__,cljs.core.constant$keyword$97)){
var G__30345 = state_30195;
state_30195 = G__30345;
continue;
} else {
return ret_value__16109__auto__;
}
break;
}
});
state_machine__16108__auto__ = function(state_30195){
switch(arguments.length){
case 0:
return state_machine__16108__auto____0.call(this);
case 1:
return state_machine__16108__auto____1.call(this,state_30195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16108__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16108__auto____0;
state_machine__16108__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16108__auto____1;
return state_machine__16108__auto__;
})()
;})(switch__16107__auto__,c__16187__auto___30289,cs,m,dchan,dctr,done))
})();
var state__16189__auto__ = (function (){var statearr_30286 = (function (){return (f__16188__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16188__auto__.cljs$core$IFn$_invoke$arity$0() : f__16188__auto__.call(null));
})();
(statearr_30286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16187__auto___30289);

return statearr_30286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16189__auto__);
});})(c__16187__auto___30289,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj30350 = {};
return obj30350;
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
return (function (){var or__3815__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__30354 = x__4459__auto__;
return goog.typeOf(G__30354);
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
return (function (){var or__3815__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__30358 = x__4459__auto__;
return goog.typeOf(G__30358);
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
return (function (){var or__3815__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__30362 = x__4459__auto__;
return goog.typeOf(G__30362);
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
return (function (){var or__3815__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__30366 = x__4459__auto__;
return goog.typeOf(G__30366);
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
return (function (){var or__3815__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__30370 = x__4459__auto__;
return goog.typeOf(G__30370);
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__30371){
var map__30377 = p__30371;
var map__30377__$1 = ((cljs.core.seq_QMARK_(map__30377))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30377):map__30377);
var opts = map__30377__$1;
var statearr_30378_30382 = state;
(statearr_30378_30382[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__30377,map__30377__$1,opts){
return (function (val){
var statearr_30379_30383 = state;
(statearr_30379_30383[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__30377,map__30377__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_30380_30384 = state;
(statearr_30380_30384[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__30381 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30381) : cljs.core.deref.call(null,G__30381));
})());


return cljs.core.constant$keyword$97;
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__30371 = null;
if (arguments.length > 3) {
var G__30385__i = 0, G__30385__a = new Array(arguments.length -  3);
while (G__30385__i < G__30385__a.length) {G__30385__a[G__30385__i] = arguments[G__30385__i + 3]; ++G__30385__i;}
  p__30371 = new cljs.core.IndexedSeq(G__30385__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__30371);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__30386){
var state = cljs.core.first(arglist__30386);
arglist__30386 = cljs.core.next(arglist__30386);
var cont_block = cljs.core.first(arglist__30386);
arglist__30386 = cljs.core.next(arglist__30386);
var ports = cljs.core.first(arglist__30386);
var p__30371 = cljs.core.rest(arglist__30386);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__30371);
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
var cs = (function (){var G__30520 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30520) : cljs.core.atom.call(null,G__30520));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$106,null,cljs.core.constant$keyword$107,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$108);
var solo_mode = (function (){var G__30521 = cljs.core.constant$keyword$107;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30521) : cljs.core.atom.call(null,G__30521));
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
if(cljs.core.truth_((function (){var G__30522 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__30522) : attr.call(null,G__30522));
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
var chs = (function (){var G__30523 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30523) : cljs.core.deref.call(null,G__30523));
})();
var mode = (function (){var G__30524 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30524) : cljs.core.deref.call(null,G__30524));
})();
var solos = pick(cljs.core.constant$keyword$108,chs);
var pauses = pick(cljs.core.constant$keyword$106,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$109,solos,cljs.core.constant$keyword$110,pick(cljs.core.constant$keyword$107,chs),cljs.core.constant$keyword$111,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$106)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t30525 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30525 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30526){
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
this.meta30526 = meta30526;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30525.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t30525.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30525.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30525.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__30528_30653 = self__.cs;
var G__30529_30654 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__30528_30653,G__30529_30654) : cljs.core.reset_BANG_.call(null,G__30528_30653,G__30529_30654));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30525.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30525.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__30530 = mode;
return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__30530) : self__.solo_modes.call(null,G__30530));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0)))].join('')));
}

var G__30531_30655 = self__.solo_mode;
var G__30532_30656 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__30531_30655,G__30532_30656) : cljs.core.reset_BANG_.call(null,G__30531_30655,G__30532_30656));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30525.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30525.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30525.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30527){
var self__ = this;
var _30527__$1 = this;
return self__.meta30526;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30527,meta30526__$1){
var self__ = this;
var _30527__$1 = this;
return (new cljs.core.async.t30525(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30526__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30525.cljs$lang$type = true;

cljs.core.async.t30525.cljs$lang$ctorStr = "cljs.core.async/t30525";

cljs.core.async.t30525.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t30525");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t30525 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t30525(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30526){
return (new cljs.core.async.t30525(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30526));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t30525(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16187__auto___30657 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16187__auto___30657,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16188__auto__ = (function (){var switch__16107__auto__ = ((function (c__16187__auto___30657,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30604){
var state_val_30605 = (state_30604[(1)]);
if((state_val_30605 === (7))){
var inst_30546 = (state_30604[(7)]);
var inst_30551 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30546);
var state_30604__$1 = state_30604;
var statearr_30606_30658 = state_30604__$1;
(statearr_30606_30658[(2)] = inst_30551);

(statearr_30606_30658[(1)] = (9));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30605 === (20))){
var inst_30561 = (state_30604[(8)]);
var state_30604__$1 = state_30604;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30604__$1,(23),out,inst_30561);
} else {
if((state_val_30605 === (1))){
var inst_30536 = (state_30604[(9)]);
var inst_30536__$1 = calc_state();
var inst_30537 = cljs.core.seq_QMARK_(inst_30536__$1);
var state_30604__$1 = (function (){var statearr_30607 = state_30604;
(statearr_30607[(9)] = inst_30536__$1);

return statearr_30607;
})();
if(inst_30537){
var statearr_30608_30659 = state_30604__$1;
(statearr_30608_30659[(1)] = (2));

} else {
var statearr_30609_30660 = state_30604__$1;
(statearr_30609_30660[(1)] = (3));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30605 === (24))){
var inst_30554 = (state_30604[(10)]);
var inst_30546 = inst_30554;
var state_30604__$1 = (function (){var statearr_30610 = state_30604;
(statearr_30610[(7)] = inst_30546);

return statearr_30610;
})();
var statearr_30611_30661 = state_30604__$1;
(statearr_30611_30661[(2)] = null);

(statearr_30611_30661[(1)] = (5));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30605 === (4))){
var inst_30536 = (state_30604[(9)]);
var inst_30542 = (state_30604[(2)]);
var inst_30543 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30542,cljs.core.constant$keyword$111);
var inst_30544 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30542,cljs.core.constant$keyword$110);
var inst_30545 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30542,cljs.core.constant$keyword$109);
var inst_30546 = inst_30536;
var state_30604__$1 = (function (){var statearr_30612 = state_30604;
(statearr_30612[(11)] = inst_30544);

(statearr_30612[(12)] = inst_30545);

(statearr_30612[(7)] = inst_30546);

(statearr_30612[(13)] = inst_30543);

return statearr_30612;
})();
var statearr_30613_30662 = state_30604__$1;
(statearr_30613_30662[(2)] = null);

(statearr_30613_30662[(1)] = (5));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30605 === (15))){
var state_30604__$1 = state_30604;
var statearr_30614_30663 = state_30604__$1;
(statearr_30614_30663[(2)] = null);

(statearr_30614_30663[(1)] = (16));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30605 === (21))){
var inst_30554 = (state_30604[(10)]);
var inst_30546 = inst_30554;
var state_30604__$1 = (function (){var statearr_30615 = state_30604;
(statearr_30615[(7)] = inst_30546);

return statearr_30615;
})();
var statearr_30616_30664 = state_30604__$1;
(statearr_30616_30664[(2)] = null);

(statearr_30616_30664[(1)] = (5));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30605 === (13))){
var inst_30600 = (state_30604[(2)]);
var state_30604__$1 = state_30604;
var statearr_30617_30665 = state_30604__$1;
(statearr_30617_30665[(2)] = inst_30600);

(statearr_30617_30665[(1)] = (6));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30605 === (22))){
var inst_30598 = (state_30604[(2)]);
var state_30604__$1 = state_30604;
var statearr_30618_30666 = state_30604__$1;
(statearr_30618_30666[(2)] = inst_30598);

(statearr_30618_30666[(1)] = (13));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30605 === (6))){
var inst_30602 = (state_30604[(2)]);
var state_30604__$1 = state_30604;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30604__$1,inst_30602);
} else {
if((state_val_30605 === (25))){
var state_30604__$1 = state_30604;
var statearr_30619_30667 = state_30604__$1;
(statearr_30619_30667[(2)] = null);

(statearr_30619_30667[(1)] = (26));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30605 === (17))){
var inst_30577 = (state_30604[(14)]);
var state_30604__$1 = state_30604;
var statearr_30620_30668 = state_30604__$1;
(statearr_30620_30668[(2)] = inst_30577);

(statearr_30620_30668[(1)] = (19));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30605 === (3))){
var inst_30536 = (state_30604[(9)]);
var state_30604__$1 = state_30604;
var statearr_30621_30669 = state_30604__$1;
(statearr_30621_30669[(2)] = inst_30536);

(statearr_30621_30669[(1)] = (4));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30605 === (12))){
var inst_30562 = (state_30604[(15)]);
var inst_30557 = (state_30604[(16)]);
var inst_30577 = (state_30604[(14)]);
var inst_30577__$1 = (function (){var G__30622 = inst_30562;
return (inst_30557.cljs$core$IFn$_invoke$arity$1 ? inst_30557.cljs$core$IFn$_invoke$arity$1(G__30622) : inst_30557.call(null,G__30622));
})();
var state_30604__$1 = (function (){var statearr_30623 = state_30604;
(statearr_30623[(14)] = inst_30577__$1);

return statearr_30623;
})();
if(cljs.core.truth_(inst_30577__$1)){
var statearr_30624_30670 = state_30604__$1;
(statearr_30624_30670[(1)] = (17));

} else {
var statearr_30625_30671 = state_30604__$1;
(statearr_30625_30671[(1)] = (18));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30605 === (2))){
var inst_30536 = (state_30604[(9)]);
var inst_30539 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30536);
var state_30604__$1 = state_30604;
var statearr_30626_30672 = state_30604__$1;
(statearr_30626_30672[(2)] = inst_30539);

(statearr_30626_30672[(1)] = (4));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30605 === (23))){
var inst_30589 = (state_30604[(2)]);
var state_30604__$1 = state_30604;
if(cljs.core.truth_(inst_30589)){
var statearr_30627_30673 = state_30604__$1;
(statearr_30627_30673[(1)] = (24));

} else {
var statearr_30628_30674 = state_30604__$1;
(statearr_30628_30674[(1)] = (25));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30605 === (19))){
var inst_30586 = (state_30604[(2)]);
var state_30604__$1 = state_30604;
if(cljs.core.truth_(inst_30586)){
var statearr_30629_30675 = state_30604__$1;
(statearr_30629_30675[(1)] = (20));

} else {
var statearr_30630_30676 = state_30604__$1;
(statearr_30630_30676[(1)] = (21));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30605 === (11))){
var inst_30561 = (state_30604[(8)]);
var inst_30567 = (inst_30561 == null);
var state_30604__$1 = state_30604;
if(cljs.core.truth_(inst_30567)){
var statearr_30631_30677 = state_30604__$1;
(statearr_30631_30677[(1)] = (14));

} else {
var statearr_30632_30678 = state_30604__$1;
(statearr_30632_30678[(1)] = (15));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30605 === (9))){
var inst_30554 = (state_30604[(10)]);
var inst_30554__$1 = (state_30604[(2)]);
var inst_30555 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30554__$1,cljs.core.constant$keyword$111);
var inst_30556 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30554__$1,cljs.core.constant$keyword$110);
var inst_30557 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30554__$1,cljs.core.constant$keyword$109);
var state_30604__$1 = (function (){var statearr_30633 = state_30604;
(statearr_30633[(16)] = inst_30557);

(statearr_30633[(10)] = inst_30554__$1);

(statearr_30633[(17)] = inst_30556);

return statearr_30633;
})();
return cljs.core.async.ioc_alts_BANG_(state_30604__$1,(10),inst_30555);
} else {
if((state_val_30605 === (5))){
var inst_30546 = (state_30604[(7)]);
var inst_30549 = cljs.core.seq_QMARK_(inst_30546);
var state_30604__$1 = state_30604;
if(inst_30549){
var statearr_30634_30679 = state_30604__$1;
(statearr_30634_30679[(1)] = (7));

} else {
var statearr_30635_30680 = state_30604__$1;
(statearr_30635_30680[(1)] = (8));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30605 === (14))){
var inst_30562 = (state_30604[(15)]);
var inst_30569 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_30562);
var state_30604__$1 = state_30604;
var statearr_30636_30681 = state_30604__$1;
(statearr_30636_30681[(2)] = inst_30569);

(statearr_30636_30681[(1)] = (16));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30605 === (26))){
var inst_30594 = (state_30604[(2)]);
var state_30604__$1 = state_30604;
var statearr_30637_30682 = state_30604__$1;
(statearr_30637_30682[(2)] = inst_30594);

(statearr_30637_30682[(1)] = (22));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30605 === (16))){
var inst_30572 = (state_30604[(2)]);
var inst_30573 = calc_state();
var inst_30546 = inst_30573;
var state_30604__$1 = (function (){var statearr_30638 = state_30604;
(statearr_30638[(7)] = inst_30546);

(statearr_30638[(18)] = inst_30572);

return statearr_30638;
})();
var statearr_30639_30683 = state_30604__$1;
(statearr_30639_30683[(2)] = null);

(statearr_30639_30683[(1)] = (5));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30605 === (10))){
var inst_30562 = (state_30604[(15)]);
var inst_30561 = (state_30604[(8)]);
var inst_30560 = (state_30604[(2)]);
var inst_30561__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30560,(0),null);
var inst_30562__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30560,(1),null);
var inst_30563 = (inst_30561__$1 == null);
var inst_30564 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30562__$1,change);
var inst_30565 = (inst_30563) || (inst_30564);
var state_30604__$1 = (function (){var statearr_30640 = state_30604;
(statearr_30640[(15)] = inst_30562__$1);

(statearr_30640[(8)] = inst_30561__$1);

return statearr_30640;
})();
if(cljs.core.truth_(inst_30565)){
var statearr_30641_30684 = state_30604__$1;
(statearr_30641_30684[(1)] = (11));

} else {
var statearr_30642_30685 = state_30604__$1;
(statearr_30642_30685[(1)] = (12));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30605 === (18))){
var inst_30562 = (state_30604[(15)]);
var inst_30557 = (state_30604[(16)]);
var inst_30556 = (state_30604[(17)]);
var inst_30581 = cljs.core.empty_QMARK_(inst_30557);
var inst_30582 = (function (){var G__30643 = inst_30562;
return (inst_30556.cljs$core$IFn$_invoke$arity$1 ? inst_30556.cljs$core$IFn$_invoke$arity$1(G__30643) : inst_30556.call(null,G__30643));
})();
var inst_30583 = cljs.core.not(inst_30582);
var inst_30584 = (inst_30581) && (inst_30583);
var state_30604__$1 = state_30604;
var statearr_30644_30686 = state_30604__$1;
(statearr_30644_30686[(2)] = inst_30584);

(statearr_30644_30686[(1)] = (19));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30605 === (8))){
var inst_30546 = (state_30604[(7)]);
var state_30604__$1 = state_30604;
var statearr_30645_30687 = state_30604__$1;
(statearr_30645_30687[(2)] = inst_30546);

(statearr_30645_30687[(1)] = (9));


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
});})(c__16187__auto___30657,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__16107__auto__,c__16187__auto___30657,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__16108__auto__ = null;
var state_machine__16108__auto____0 = (function (){
var statearr_30649 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30649[(0)] = state_machine__16108__auto__);

(statearr_30649[(1)] = (1));

return statearr_30649;
});
var state_machine__16108__auto____1 = (function (state_30604){
while(true){
var ret_value__16109__auto__ = (function (){try{while(true){
var result__16110__auto__ = switch__16107__auto__(state_30604);
if(cljs.core.keyword_identical_QMARK_(result__16110__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16110__auto__;
}
break;
}
}catch (e30650){if((e30650 instanceof Object)){
var ex__16111__auto__ = e30650;
var statearr_30651_30688 = state_30604;
(statearr_30651_30688[(5)] = ex__16111__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30604);

return cljs.core.constant$keyword$97;
} else {
throw e30650;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16109__auto__,cljs.core.constant$keyword$97)){
var G__30689 = state_30604;
state_30604 = G__30689;
continue;
} else {
return ret_value__16109__auto__;
}
break;
}
});
state_machine__16108__auto__ = function(state_30604){
switch(arguments.length){
case 0:
return state_machine__16108__auto____0.call(this);
case 1:
return state_machine__16108__auto____1.call(this,state_30604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16108__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16108__auto____0;
state_machine__16108__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16108__auto____1;
return state_machine__16108__auto__;
})()
;})(switch__16107__auto__,c__16187__auto___30657,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16189__auto__ = (function (){var statearr_30652 = (function (){return (f__16188__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16188__auto__.cljs$core$IFn$_invoke$arity$0() : f__16188__auto__.call(null));
})();
(statearr_30652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16187__auto___30657);

return statearr_30652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16189__auto__);
});})(c__16187__auto___30657,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj30691 = {};
return obj30691;
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
return (function (){var or__3815__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__30695 = x__4459__auto__;
return goog.typeOf(G__30695);
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
return (function (){var or__3815__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__30699 = x__4459__auto__;
return goog.typeOf(G__30699);
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
return (function (){var or__3815__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__30705 = x__4459__auto__;
return goog.typeOf(G__30705);
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
return (function (){var or__3815__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__30707 = x__4459__auto__;
return goog.typeOf(G__30707);
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
var mults = (function (){var G__30846 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30846) : cljs.core.atom.call(null,G__30846));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__3815__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__30848 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30848) : cljs.core.deref.call(null,G__30848));
})(),topic);
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3815__auto__,mults){
return (function (p1__30708_SHARP_){
if(cljs.core.truth_((function (){var G__30849 = topic;
return (p1__30708_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__30708_SHARP_.cljs$core$IFn$_invoke$arity$1(G__30849) : p1__30708_SHARP_.call(null,G__30849));
})())){
return p1__30708_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__30708_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__30850 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__30850) : buf_fn.call(null,G__30850));
})())));
}
});})(or__3815__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t30851 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30851 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta30852){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta30852 = meta30852;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30851.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t30851.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__30854 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__30854) : self__.ensure_mult.call(null,G__30854));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t30851.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__30855 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30855) : cljs.core.deref.call(null,G__30855));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t30851.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__30856 = self__.mults;
var G__30857 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__30856,G__30857) : cljs.core.reset_BANG_.call(null,G__30856,G__30857));
});})(mults,ensure_mult))
;

cljs.core.async.t30851.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t30851.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30851.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t30851.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30853){
var self__ = this;
var _30853__$1 = this;
return self__.meta30852;
});})(mults,ensure_mult))
;

cljs.core.async.t30851.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30853,meta30852__$1){
var self__ = this;
var _30853__$1 = this;
return (new cljs.core.async.t30851(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta30852__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t30851.cljs$lang$type = true;

cljs.core.async.t30851.cljs$lang$ctorStr = "cljs.core.async/t30851";

cljs.core.async.t30851.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t30851");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t30851 = ((function (mults,ensure_mult){
return (function __GT_t30851(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta30852){
return (new cljs.core.async.t30851(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta30852));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t30851(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16187__auto___30980 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16187__auto___30980,mults,ensure_mult,p){
return (function (){
var f__16188__auto__ = (function (){var switch__16107__auto__ = ((function (c__16187__auto___30980,mults,ensure_mult,p){
return (function (state_30929){
var state_val_30930 = (state_30929[(1)]);
if((state_val_30930 === (7))){
var inst_30925 = (state_30929[(2)]);
var state_30929__$1 = state_30929;
var statearr_30931_30981 = state_30929__$1;
(statearr_30931_30981[(2)] = inst_30925);

(statearr_30931_30981[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30930 === (20))){
var state_30929__$1 = state_30929;
var statearr_30932_30982 = state_30929__$1;
(statearr_30932_30982[(2)] = null);

(statearr_30932_30982[(1)] = (21));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30930 === (1))){
var state_30929__$1 = state_30929;
var statearr_30933_30983 = state_30929__$1;
(statearr_30933_30983[(2)] = null);

(statearr_30933_30983[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30930 === (24))){
var inst_30908 = (state_30929[(7)]);
var inst_30917 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_30908);
var state_30929__$1 = state_30929;
var statearr_30934_30984 = state_30929__$1;
(statearr_30934_30984[(2)] = inst_30917);

(statearr_30934_30984[(1)] = (25));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30930 === (4))){
var inst_30860 = (state_30929[(8)]);
var inst_30860__$1 = (state_30929[(2)]);
var inst_30861 = (inst_30860__$1 == null);
var state_30929__$1 = (function (){var statearr_30935 = state_30929;
(statearr_30935[(8)] = inst_30860__$1);

return statearr_30935;
})();
if(cljs.core.truth_(inst_30861)){
var statearr_30936_30985 = state_30929__$1;
(statearr_30936_30985[(1)] = (5));

} else {
var statearr_30937_30986 = state_30929__$1;
(statearr_30937_30986[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30930 === (15))){
var inst_30902 = (state_30929[(2)]);
var state_30929__$1 = state_30929;
var statearr_30938_30987 = state_30929__$1;
(statearr_30938_30987[(2)] = inst_30902);

(statearr_30938_30987[(1)] = (12));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30930 === (21))){
var inst_30922 = (state_30929[(2)]);
var state_30929__$1 = (function (){var statearr_30939 = state_30929;
(statearr_30939[(9)] = inst_30922);

return statearr_30939;
})();
var statearr_30940_30988 = state_30929__$1;
(statearr_30940_30988[(2)] = null);

(statearr_30940_30988[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30930 === (13))){
var inst_30884 = (state_30929[(10)]);
var inst_30886 = cljs.core.chunked_seq_QMARK_(inst_30884);
var state_30929__$1 = state_30929;
if(inst_30886){
var statearr_30941_30989 = state_30929__$1;
(statearr_30941_30989[(1)] = (16));

} else {
var statearr_30942_30990 = state_30929__$1;
(statearr_30942_30990[(1)] = (17));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30930 === (22))){
var inst_30914 = (state_30929[(2)]);
var state_30929__$1 = state_30929;
if(cljs.core.truth_(inst_30914)){
var statearr_30943_30991 = state_30929__$1;
(statearr_30943_30991[(1)] = (23));

} else {
var statearr_30944_30992 = state_30929__$1;
(statearr_30944_30992[(1)] = (24));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30930 === (6))){
var inst_30908 = (state_30929[(7)]);
var inst_30910 = (state_30929[(11)]);
var inst_30860 = (state_30929[(8)]);
var inst_30908__$1 = (function (){var G__30945 = inst_30860;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__30945) : topic_fn.call(null,G__30945));
})();
var inst_30909 = (function (){var G__30946 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30946) : cljs.core.deref.call(null,G__30946));
})();
var inst_30910__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30909,inst_30908__$1);
var state_30929__$1 = (function (){var statearr_30947 = state_30929;
(statearr_30947[(7)] = inst_30908__$1);

(statearr_30947[(11)] = inst_30910__$1);

return statearr_30947;
})();
if(cljs.core.truth_(inst_30910__$1)){
var statearr_30948_30993 = state_30929__$1;
(statearr_30948_30993[(1)] = (19));

} else {
var statearr_30949_30994 = state_30929__$1;
(statearr_30949_30994[(1)] = (20));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30930 === (25))){
var inst_30919 = (state_30929[(2)]);
var state_30929__$1 = state_30929;
var statearr_30950_30995 = state_30929__$1;
(statearr_30950_30995[(2)] = inst_30919);

(statearr_30950_30995[(1)] = (21));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30930 === (17))){
var inst_30884 = (state_30929[(10)]);
var inst_30893 = cljs.core.first(inst_30884);
var inst_30894 = cljs.core.async.muxch_STAR_(inst_30893);
var inst_30895 = cljs.core.async.close_BANG_(inst_30894);
var inst_30896 = cljs.core.next(inst_30884);
var inst_30870 = inst_30896;
var inst_30871 = null;
var inst_30872 = (0);
var inst_30873 = (0);
var state_30929__$1 = (function (){var statearr_30951 = state_30929;
(statearr_30951[(12)] = inst_30872);

(statearr_30951[(13)] = inst_30873);

(statearr_30951[(14)] = inst_30895);

(statearr_30951[(15)] = inst_30871);

(statearr_30951[(16)] = inst_30870);

return statearr_30951;
})();
var statearr_30952_30996 = state_30929__$1;
(statearr_30952_30996[(2)] = null);

(statearr_30952_30996[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30930 === (3))){
var inst_30927 = (state_30929[(2)]);
var state_30929__$1 = state_30929;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30929__$1,inst_30927);
} else {
if((state_val_30930 === (12))){
var inst_30904 = (state_30929[(2)]);
var state_30929__$1 = state_30929;
var statearr_30953_30997 = state_30929__$1;
(statearr_30953_30997[(2)] = inst_30904);

(statearr_30953_30997[(1)] = (9));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30930 === (2))){
var state_30929__$1 = state_30929;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30929__$1,(4),ch);
} else {
if((state_val_30930 === (23))){
var state_30929__$1 = state_30929;
var statearr_30954_30998 = state_30929__$1;
(statearr_30954_30998[(2)] = null);

(statearr_30954_30998[(1)] = (25));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30930 === (19))){
var inst_30910 = (state_30929[(11)]);
var inst_30860 = (state_30929[(8)]);
var inst_30912 = cljs.core.async.muxch_STAR_(inst_30910);
var state_30929__$1 = state_30929;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30929__$1,(22),inst_30912,inst_30860);
} else {
if((state_val_30930 === (11))){
var inst_30884 = (state_30929[(10)]);
var inst_30870 = (state_30929[(16)]);
var inst_30884__$1 = cljs.core.seq(inst_30870);
var state_30929__$1 = (function (){var statearr_30955 = state_30929;
(statearr_30955[(10)] = inst_30884__$1);

return statearr_30955;
})();
if(inst_30884__$1){
var statearr_30956_30999 = state_30929__$1;
(statearr_30956_30999[(1)] = (13));

} else {
var statearr_30957_31000 = state_30929__$1;
(statearr_30957_31000[(1)] = (14));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30930 === (9))){
var inst_30906 = (state_30929[(2)]);
var state_30929__$1 = state_30929;
var statearr_30958_31001 = state_30929__$1;
(statearr_30958_31001[(2)] = inst_30906);

(statearr_30958_31001[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30930 === (5))){
var inst_30867 = (function (){var G__30959 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30959) : cljs.core.deref.call(null,G__30959));
})();
var inst_30868 = cljs.core.vals(inst_30867);
var inst_30869 = cljs.core.seq(inst_30868);
var inst_30870 = inst_30869;
var inst_30871 = null;
var inst_30872 = (0);
var inst_30873 = (0);
var state_30929__$1 = (function (){var statearr_30960 = state_30929;
(statearr_30960[(12)] = inst_30872);

(statearr_30960[(13)] = inst_30873);

(statearr_30960[(15)] = inst_30871);

(statearr_30960[(16)] = inst_30870);

return statearr_30960;
})();
var statearr_30961_31002 = state_30929__$1;
(statearr_30961_31002[(2)] = null);

(statearr_30961_31002[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30930 === (14))){
var state_30929__$1 = state_30929;
var statearr_30965_31003 = state_30929__$1;
(statearr_30965_31003[(2)] = null);

(statearr_30965_31003[(1)] = (15));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30930 === (16))){
var inst_30884 = (state_30929[(10)]);
var inst_30888 = cljs.core.chunk_first(inst_30884);
var inst_30889 = cljs.core.chunk_rest(inst_30884);
var inst_30890 = cljs.core.count(inst_30888);
var inst_30870 = inst_30889;
var inst_30871 = inst_30888;
var inst_30872 = inst_30890;
var inst_30873 = (0);
var state_30929__$1 = (function (){var statearr_30966 = state_30929;
(statearr_30966[(12)] = inst_30872);

(statearr_30966[(13)] = inst_30873);

(statearr_30966[(15)] = inst_30871);

(statearr_30966[(16)] = inst_30870);

return statearr_30966;
})();
var statearr_30967_31004 = state_30929__$1;
(statearr_30967_31004[(2)] = null);

(statearr_30967_31004[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30930 === (10))){
var inst_30872 = (state_30929[(12)]);
var inst_30873 = (state_30929[(13)]);
var inst_30871 = (state_30929[(15)]);
var inst_30870 = (state_30929[(16)]);
var inst_30878 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30871,inst_30873);
var inst_30879 = cljs.core.async.muxch_STAR_(inst_30878);
var inst_30880 = cljs.core.async.close_BANG_(inst_30879);
var inst_30881 = (inst_30873 + (1));
var tmp30962 = inst_30872;
var tmp30963 = inst_30871;
var tmp30964 = inst_30870;
var inst_30870__$1 = tmp30964;
var inst_30871__$1 = tmp30963;
var inst_30872__$1 = tmp30962;
var inst_30873__$1 = inst_30881;
var state_30929__$1 = (function (){var statearr_30968 = state_30929;
(statearr_30968[(12)] = inst_30872__$1);

(statearr_30968[(13)] = inst_30873__$1);

(statearr_30968[(17)] = inst_30880);

(statearr_30968[(15)] = inst_30871__$1);

(statearr_30968[(16)] = inst_30870__$1);

return statearr_30968;
})();
var statearr_30969_31005 = state_30929__$1;
(statearr_30969_31005[(2)] = null);

(statearr_30969_31005[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30930 === (18))){
var inst_30899 = (state_30929[(2)]);
var state_30929__$1 = state_30929;
var statearr_30970_31006 = state_30929__$1;
(statearr_30970_31006[(2)] = inst_30899);

(statearr_30970_31006[(1)] = (15));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30930 === (8))){
var inst_30872 = (state_30929[(12)]);
var inst_30873 = (state_30929[(13)]);
var inst_30875 = (inst_30873 < inst_30872);
var inst_30876 = inst_30875;
var state_30929__$1 = state_30929;
if(cljs.core.truth_(inst_30876)){
var statearr_30971_31007 = state_30929__$1;
(statearr_30971_31007[(1)] = (10));

} else {
var statearr_30972_31008 = state_30929__$1;
(statearr_30972_31008[(1)] = (11));

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
});})(c__16187__auto___30980,mults,ensure_mult,p))
;
return ((function (switch__16107__auto__,c__16187__auto___30980,mults,ensure_mult,p){
return (function() {
var state_machine__16108__auto__ = null;
var state_machine__16108__auto____0 = (function (){
var statearr_30976 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30976[(0)] = state_machine__16108__auto__);

(statearr_30976[(1)] = (1));

return statearr_30976;
});
var state_machine__16108__auto____1 = (function (state_30929){
while(true){
var ret_value__16109__auto__ = (function (){try{while(true){
var result__16110__auto__ = switch__16107__auto__(state_30929);
if(cljs.core.keyword_identical_QMARK_(result__16110__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16110__auto__;
}
break;
}
}catch (e30977){if((e30977 instanceof Object)){
var ex__16111__auto__ = e30977;
var statearr_30978_31009 = state_30929;
(statearr_30978_31009[(5)] = ex__16111__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30929);

return cljs.core.constant$keyword$97;
} else {
throw e30977;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16109__auto__,cljs.core.constant$keyword$97)){
var G__31010 = state_30929;
state_30929 = G__31010;
continue;
} else {
return ret_value__16109__auto__;
}
break;
}
});
state_machine__16108__auto__ = function(state_30929){
switch(arguments.length){
case 0:
return state_machine__16108__auto____0.call(this);
case 1:
return state_machine__16108__auto____1.call(this,state_30929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16108__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16108__auto____0;
state_machine__16108__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16108__auto____1;
return state_machine__16108__auto__;
})()
;})(switch__16107__auto__,c__16187__auto___30980,mults,ensure_mult,p))
})();
var state__16189__auto__ = (function (){var statearr_30979 = (function (){return (f__16188__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16188__auto__.cljs$core$IFn$_invoke$arity$0() : f__16188__auto__.call(null));
})();
(statearr_30979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16187__auto___30980);

return statearr_30979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16189__auto__);
});})(c__16187__auto___30980,mults,ensure_mult,p))
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
var dctr = (function (){var G__31091 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__31091) : cljs.core.atom.call(null,G__31091));
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
var c__16187__auto___31164 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16187__auto___31164,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16188__auto__ = (function (){var switch__16107__auto__ = ((function (c__16187__auto___31164,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31130){
var state_val_31131 = (state_31130[(1)]);
if((state_val_31131 === (7))){
var state_31130__$1 = state_31130;
var statearr_31132_31165 = state_31130__$1;
(statearr_31132_31165[(2)] = null);

(statearr_31132_31165[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31131 === (1))){
var state_31130__$1 = state_31130;
var statearr_31133_31166 = state_31130__$1;
(statearr_31133_31166[(2)] = null);

(statearr_31133_31166[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31131 === (4))){
var inst_31094 = (state_31130[(7)]);
var inst_31096 = (inst_31094 < cnt);
var state_31130__$1 = state_31130;
if(cljs.core.truth_(inst_31096)){
var statearr_31134_31167 = state_31130__$1;
(statearr_31134_31167[(1)] = (6));

} else {
var statearr_31135_31168 = state_31130__$1;
(statearr_31135_31168[(1)] = (7));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31131 === (15))){
var inst_31126 = (state_31130[(2)]);
var state_31130__$1 = state_31130;
var statearr_31136_31169 = state_31130__$1;
(statearr_31136_31169[(2)] = inst_31126);

(statearr_31136_31169[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31131 === (13))){
var inst_31119 = cljs.core.async.close_BANG_(out);
var state_31130__$1 = state_31130;
var statearr_31137_31170 = state_31130__$1;
(statearr_31137_31170[(2)] = inst_31119);

(statearr_31137_31170[(1)] = (15));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31131 === (6))){
var state_31130__$1 = state_31130;
var statearr_31138_31171 = state_31130__$1;
(statearr_31138_31171[(2)] = null);

(statearr_31138_31171[(1)] = (11));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31131 === (3))){
var inst_31128 = (state_31130[(2)]);
var state_31130__$1 = state_31130;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31130__$1,inst_31128);
} else {
if((state_val_31131 === (12))){
var inst_31116 = (state_31130[(8)]);
var inst_31116__$1 = (state_31130[(2)]);
var inst_31117 = cljs.core.some(cljs.core.nil_QMARK_,inst_31116__$1);
var state_31130__$1 = (function (){var statearr_31139 = state_31130;
(statearr_31139[(8)] = inst_31116__$1);

return statearr_31139;
})();
if(cljs.core.truth_(inst_31117)){
var statearr_31140_31172 = state_31130__$1;
(statearr_31140_31172[(1)] = (13));

} else {
var statearr_31141_31173 = state_31130__$1;
(statearr_31141_31173[(1)] = (14));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31131 === (2))){
var inst_31093 = (function (){var G__31142 = dctr;
var G__31143 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__31142,G__31143) : cljs.core.reset_BANG_.call(null,G__31142,G__31143));
})();
var inst_31094 = (0);
var state_31130__$1 = (function (){var statearr_31144 = state_31130;
(statearr_31144[(9)] = inst_31093);

(statearr_31144[(7)] = inst_31094);

return statearr_31144;
})();
var statearr_31145_31174 = state_31130__$1;
(statearr_31145_31174[(2)] = null);

(statearr_31145_31174[(1)] = (4));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31131 === (11))){
var inst_31094 = (state_31130[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_31130,(10),Object,null,(9));
var inst_31103 = (function (){var G__31146 = inst_31094;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__31146) : chs__$1.call(null,G__31146));
})();
var inst_31104 = (function (){var G__31147 = inst_31094;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__31147) : done.call(null,G__31147));
})();
var inst_31105 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31103,inst_31104);
var state_31130__$1 = state_31130;
var statearr_31148_31175 = state_31130__$1;
(statearr_31148_31175[(2)] = inst_31105);


cljs.core.async.impl.ioc_helpers.process_exception(state_31130__$1);

return cljs.core.constant$keyword$97;
} else {
if((state_val_31131 === (9))){
var inst_31094 = (state_31130[(7)]);
var inst_31107 = (state_31130[(2)]);
var inst_31108 = (inst_31094 + (1));
var inst_31094__$1 = inst_31108;
var state_31130__$1 = (function (){var statearr_31149 = state_31130;
(statearr_31149[(10)] = inst_31107);

(statearr_31149[(7)] = inst_31094__$1);

return statearr_31149;
})();
var statearr_31150_31176 = state_31130__$1;
(statearr_31150_31176[(2)] = null);

(statearr_31150_31176[(1)] = (4));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31131 === (5))){
var inst_31114 = (state_31130[(2)]);
var state_31130__$1 = (function (){var statearr_31151 = state_31130;
(statearr_31151[(11)] = inst_31114);

return statearr_31151;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31130__$1,(12),dchan);
} else {
if((state_val_31131 === (14))){
var inst_31116 = (state_31130[(8)]);
var inst_31121 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31116);
var state_31130__$1 = state_31130;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31130__$1,(16),out,inst_31121);
} else {
if((state_val_31131 === (16))){
var inst_31123 = (state_31130[(2)]);
var state_31130__$1 = (function (){var statearr_31152 = state_31130;
(statearr_31152[(12)] = inst_31123);

return statearr_31152;
})();
var statearr_31153_31177 = state_31130__$1;
(statearr_31153_31177[(2)] = null);

(statearr_31153_31177[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31131 === (10))){
var inst_31098 = (state_31130[(2)]);
var inst_31099 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31130__$1 = (function (){var statearr_31154 = state_31130;
(statearr_31154[(13)] = inst_31098);

return statearr_31154;
})();
var statearr_31155_31178 = state_31130__$1;
(statearr_31155_31178[(2)] = inst_31099);


cljs.core.async.impl.ioc_helpers.process_exception(state_31130__$1);

return cljs.core.constant$keyword$97;
} else {
if((state_val_31131 === (8))){
var inst_31112 = (state_31130[(2)]);
var state_31130__$1 = state_31130;
var statearr_31156_31179 = state_31130__$1;
(statearr_31156_31179[(2)] = inst_31112);

(statearr_31156_31179[(1)] = (5));


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
});})(c__16187__auto___31164,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__16107__auto__,c__16187__auto___31164,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__16108__auto__ = null;
var state_machine__16108__auto____0 = (function (){
var statearr_31160 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31160[(0)] = state_machine__16108__auto__);

(statearr_31160[(1)] = (1));

return statearr_31160;
});
var state_machine__16108__auto____1 = (function (state_31130){
while(true){
var ret_value__16109__auto__ = (function (){try{while(true){
var result__16110__auto__ = switch__16107__auto__(state_31130);
if(cljs.core.keyword_identical_QMARK_(result__16110__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16110__auto__;
}
break;
}
}catch (e31161){if((e31161 instanceof Object)){
var ex__16111__auto__ = e31161;
var statearr_31162_31180 = state_31130;
(statearr_31162_31180[(5)] = ex__16111__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31130);

return cljs.core.constant$keyword$97;
} else {
throw e31161;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16109__auto__,cljs.core.constant$keyword$97)){
var G__31181 = state_31130;
state_31130 = G__31181;
continue;
} else {
return ret_value__16109__auto__;
}
break;
}
});
state_machine__16108__auto__ = function(state_31130){
switch(arguments.length){
case 0:
return state_machine__16108__auto____0.call(this);
case 1:
return state_machine__16108__auto____1.call(this,state_31130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16108__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16108__auto____0;
state_machine__16108__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16108__auto____1;
return state_machine__16108__auto__;
})()
;})(switch__16107__auto__,c__16187__auto___31164,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16189__auto__ = (function (){var statearr_31163 = (function (){return (f__16188__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16188__auto__.cljs$core$IFn$_invoke$arity$0() : f__16188__auto__.call(null));
})();
(statearr_31163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16187__auto___31164);

return statearr_31163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16189__auto__);
});})(c__16187__auto___31164,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__16187__auto___31291 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16187__auto___31291,out){
return (function (){
var f__16188__auto__ = (function (){var switch__16107__auto__ = ((function (c__16187__auto___31291,out){
return (function (state_31267){
var state_val_31268 = (state_31267[(1)]);
if((state_val_31268 === (7))){
var inst_31246 = (state_31267[(7)]);
var inst_31247 = (state_31267[(8)]);
var inst_31246__$1 = (state_31267[(2)]);
var inst_31247__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31246__$1,(0),null);
var inst_31248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31246__$1,(1),null);
var inst_31249 = (inst_31247__$1 == null);
var state_31267__$1 = (function (){var statearr_31269 = state_31267;
(statearr_31269[(7)] = inst_31246__$1);

(statearr_31269[(8)] = inst_31247__$1);

(statearr_31269[(9)] = inst_31248);

return statearr_31269;
})();
if(cljs.core.truth_(inst_31249)){
var statearr_31270_31292 = state_31267__$1;
(statearr_31270_31292[(1)] = (8));

} else {
var statearr_31271_31293 = state_31267__$1;
(statearr_31271_31293[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31268 === (1))){
var inst_31238 = cljs.core.vec(chs);
var inst_31239 = inst_31238;
var state_31267__$1 = (function (){var statearr_31272 = state_31267;
(statearr_31272[(10)] = inst_31239);

return statearr_31272;
})();
var statearr_31273_31294 = state_31267__$1;
(statearr_31273_31294[(2)] = null);

(statearr_31273_31294[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31268 === (4))){
var inst_31239 = (state_31267[(10)]);
var state_31267__$1 = state_31267;
return cljs.core.async.ioc_alts_BANG_(state_31267__$1,(7),inst_31239);
} else {
if((state_val_31268 === (6))){
var inst_31263 = (state_31267[(2)]);
var state_31267__$1 = state_31267;
var statearr_31274_31295 = state_31267__$1;
(statearr_31274_31295[(2)] = inst_31263);

(statearr_31274_31295[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31268 === (3))){
var inst_31265 = (state_31267[(2)]);
var state_31267__$1 = state_31267;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31267__$1,inst_31265);
} else {
if((state_val_31268 === (2))){
var inst_31239 = (state_31267[(10)]);
var inst_31241 = cljs.core.count(inst_31239);
var inst_31242 = (inst_31241 > (0));
var state_31267__$1 = state_31267;
if(cljs.core.truth_(inst_31242)){
var statearr_31276_31296 = state_31267__$1;
(statearr_31276_31296[(1)] = (4));

} else {
var statearr_31277_31297 = state_31267__$1;
(statearr_31277_31297[(1)] = (5));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31268 === (11))){
var inst_31239 = (state_31267[(10)]);
var inst_31256 = (state_31267[(2)]);
var tmp31275 = inst_31239;
var inst_31239__$1 = tmp31275;
var state_31267__$1 = (function (){var statearr_31278 = state_31267;
(statearr_31278[(11)] = inst_31256);

(statearr_31278[(10)] = inst_31239__$1);

return statearr_31278;
})();
var statearr_31279_31298 = state_31267__$1;
(statearr_31279_31298[(2)] = null);

(statearr_31279_31298[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31268 === (9))){
var inst_31247 = (state_31267[(8)]);
var state_31267__$1 = state_31267;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31267__$1,(11),out,inst_31247);
} else {
if((state_val_31268 === (5))){
var inst_31261 = cljs.core.async.close_BANG_(out);
var state_31267__$1 = state_31267;
var statearr_31280_31299 = state_31267__$1;
(statearr_31280_31299[(2)] = inst_31261);

(statearr_31280_31299[(1)] = (6));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31268 === (10))){
var inst_31259 = (state_31267[(2)]);
var state_31267__$1 = state_31267;
var statearr_31281_31300 = state_31267__$1;
(statearr_31281_31300[(2)] = inst_31259);

(statearr_31281_31300[(1)] = (6));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31268 === (8))){
var inst_31246 = (state_31267[(7)]);
var inst_31247 = (state_31267[(8)]);
var inst_31248 = (state_31267[(9)]);
var inst_31239 = (state_31267[(10)]);
var inst_31251 = (function (){var c = inst_31248;
var v = inst_31247;
var vec__31244 = inst_31246;
var cs = inst_31239;
return ((function (c,v,vec__31244,cs,inst_31246,inst_31247,inst_31248,inst_31239,state_val_31268,c__16187__auto___31291,out){
return (function (p1__31182_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31182_SHARP_);
});
;})(c,v,vec__31244,cs,inst_31246,inst_31247,inst_31248,inst_31239,state_val_31268,c__16187__auto___31291,out))
})();
var inst_31252 = cljs.core.filterv(inst_31251,inst_31239);
var inst_31239__$1 = inst_31252;
var state_31267__$1 = (function (){var statearr_31282 = state_31267;
(statearr_31282[(10)] = inst_31239__$1);

return statearr_31282;
})();
var statearr_31283_31301 = state_31267__$1;
(statearr_31283_31301[(2)] = null);

(statearr_31283_31301[(1)] = (2));


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
});})(c__16187__auto___31291,out))
;
return ((function (switch__16107__auto__,c__16187__auto___31291,out){
return (function() {
var state_machine__16108__auto__ = null;
var state_machine__16108__auto____0 = (function (){
var statearr_31287 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31287[(0)] = state_machine__16108__auto__);

(statearr_31287[(1)] = (1));

return statearr_31287;
});
var state_machine__16108__auto____1 = (function (state_31267){
while(true){
var ret_value__16109__auto__ = (function (){try{while(true){
var result__16110__auto__ = switch__16107__auto__(state_31267);
if(cljs.core.keyword_identical_QMARK_(result__16110__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16110__auto__;
}
break;
}
}catch (e31288){if((e31288 instanceof Object)){
var ex__16111__auto__ = e31288;
var statearr_31289_31302 = state_31267;
(statearr_31289_31302[(5)] = ex__16111__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31267);

return cljs.core.constant$keyword$97;
} else {
throw e31288;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16109__auto__,cljs.core.constant$keyword$97)){
var G__31303 = state_31267;
state_31267 = G__31303;
continue;
} else {
return ret_value__16109__auto__;
}
break;
}
});
state_machine__16108__auto__ = function(state_31267){
switch(arguments.length){
case 0:
return state_machine__16108__auto____0.call(this);
case 1:
return state_machine__16108__auto____1.call(this,state_31267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16108__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16108__auto____0;
state_machine__16108__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16108__auto____1;
return state_machine__16108__auto__;
})()
;})(switch__16107__auto__,c__16187__auto___31291,out))
})();
var state__16189__auto__ = (function (){var statearr_31290 = (function (){return (f__16188__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16188__auto__.cljs$core$IFn$_invoke$arity$0() : f__16188__auto__.call(null));
})();
(statearr_31290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16187__auto___31291);

return statearr_31290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16189__auto__);
});})(c__16187__auto___31291,out))
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
var c__16187__auto___31399 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16187__auto___31399,out){
return (function (){
var f__16188__auto__ = (function (){var switch__16107__auto__ = ((function (c__16187__auto___31399,out){
return (function (state_31376){
var state_val_31377 = (state_31376[(1)]);
if((state_val_31377 === (7))){
var inst_31358 = (state_31376[(7)]);
var inst_31358__$1 = (state_31376[(2)]);
var inst_31359 = (inst_31358__$1 == null);
var inst_31360 = cljs.core.not(inst_31359);
var state_31376__$1 = (function (){var statearr_31378 = state_31376;
(statearr_31378[(7)] = inst_31358__$1);

return statearr_31378;
})();
if(inst_31360){
var statearr_31379_31400 = state_31376__$1;
(statearr_31379_31400[(1)] = (8));

} else {
var statearr_31380_31401 = state_31376__$1;
(statearr_31380_31401[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31377 === (1))){
var inst_31353 = (0);
var state_31376__$1 = (function (){var statearr_31381 = state_31376;
(statearr_31381[(8)] = inst_31353);

return statearr_31381;
})();
var statearr_31382_31402 = state_31376__$1;
(statearr_31382_31402[(2)] = null);

(statearr_31382_31402[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31377 === (4))){
var state_31376__$1 = state_31376;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31376__$1,(7),ch);
} else {
if((state_val_31377 === (6))){
var inst_31371 = (state_31376[(2)]);
var state_31376__$1 = state_31376;
var statearr_31383_31403 = state_31376__$1;
(statearr_31383_31403[(2)] = inst_31371);

(statearr_31383_31403[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31377 === (3))){
var inst_31373 = (state_31376[(2)]);
var inst_31374 = cljs.core.async.close_BANG_(out);
var state_31376__$1 = (function (){var statearr_31384 = state_31376;
(statearr_31384[(9)] = inst_31373);

return statearr_31384;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31376__$1,inst_31374);
} else {
if((state_val_31377 === (2))){
var inst_31353 = (state_31376[(8)]);
var inst_31355 = (inst_31353 < n);
var state_31376__$1 = state_31376;
if(cljs.core.truth_(inst_31355)){
var statearr_31385_31404 = state_31376__$1;
(statearr_31385_31404[(1)] = (4));

} else {
var statearr_31386_31405 = state_31376__$1;
(statearr_31386_31405[(1)] = (5));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31377 === (11))){
var inst_31353 = (state_31376[(8)]);
var inst_31363 = (state_31376[(2)]);
var inst_31364 = (inst_31353 + (1));
var inst_31353__$1 = inst_31364;
var state_31376__$1 = (function (){var statearr_31387 = state_31376;
(statearr_31387[(8)] = inst_31353__$1);

(statearr_31387[(10)] = inst_31363);

return statearr_31387;
})();
var statearr_31388_31406 = state_31376__$1;
(statearr_31388_31406[(2)] = null);

(statearr_31388_31406[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31377 === (9))){
var state_31376__$1 = state_31376;
var statearr_31389_31407 = state_31376__$1;
(statearr_31389_31407[(2)] = null);

(statearr_31389_31407[(1)] = (10));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31377 === (5))){
var state_31376__$1 = state_31376;
var statearr_31390_31408 = state_31376__$1;
(statearr_31390_31408[(2)] = null);

(statearr_31390_31408[(1)] = (6));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31377 === (10))){
var inst_31368 = (state_31376[(2)]);
var state_31376__$1 = state_31376;
var statearr_31391_31409 = state_31376__$1;
(statearr_31391_31409[(2)] = inst_31368);

(statearr_31391_31409[(1)] = (6));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31377 === (8))){
var inst_31358 = (state_31376[(7)]);
var state_31376__$1 = state_31376;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31376__$1,(11),out,inst_31358);
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
});})(c__16187__auto___31399,out))
;
return ((function (switch__16107__auto__,c__16187__auto___31399,out){
return (function() {
var state_machine__16108__auto__ = null;
var state_machine__16108__auto____0 = (function (){
var statearr_31395 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31395[(0)] = state_machine__16108__auto__);

(statearr_31395[(1)] = (1));

return statearr_31395;
});
var state_machine__16108__auto____1 = (function (state_31376){
while(true){
var ret_value__16109__auto__ = (function (){try{while(true){
var result__16110__auto__ = switch__16107__auto__(state_31376);
if(cljs.core.keyword_identical_QMARK_(result__16110__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16110__auto__;
}
break;
}
}catch (e31396){if((e31396 instanceof Object)){
var ex__16111__auto__ = e31396;
var statearr_31397_31410 = state_31376;
(statearr_31397_31410[(5)] = ex__16111__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31376);

return cljs.core.constant$keyword$97;
} else {
throw e31396;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16109__auto__,cljs.core.constant$keyword$97)){
var G__31411 = state_31376;
state_31376 = G__31411;
continue;
} else {
return ret_value__16109__auto__;
}
break;
}
});
state_machine__16108__auto__ = function(state_31376){
switch(arguments.length){
case 0:
return state_machine__16108__auto____0.call(this);
case 1:
return state_machine__16108__auto____1.call(this,state_31376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16108__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16108__auto____0;
state_machine__16108__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16108__auto____1;
return state_machine__16108__auto__;
})()
;})(switch__16107__auto__,c__16187__auto___31399,out))
})();
var state__16189__auto__ = (function (){var statearr_31398 = (function (){return (f__16188__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16188__auto__.cljs$core$IFn$_invoke$arity$0() : f__16188__auto__.call(null));
})();
(statearr_31398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16187__auto___31399);

return statearr_31398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16189__auto__);
});})(c__16187__auto___31399,out))
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
if(typeof cljs.core.async.t31424 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31424 = (function (ch,f,map_LT_,meta31425){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta31425 = meta31425;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31424.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t31424.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t31424.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t31424.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t31427 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31427 = (function (fn1,_,meta31425,map_LT_,f,ch,meta31428){
this.fn1 = fn1;
this._ = _;
this.meta31425 = meta31425;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31428 = meta31428;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31427.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31427.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t31427.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31412_SHARP_){
var G__31430 = (((p1__31412_SHARP_ == null))?null:(function (){var G__31431 = p1__31412_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31431) : self__.f.call(null,G__31431));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31430) : f1.call(null,G__31430));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t31427.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31429){
var self__ = this;
var _31429__$1 = this;
return self__.meta31428;
});})(___$1))
;

cljs.core.async.t31427.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31429,meta31428__$1){
var self__ = this;
var _31429__$1 = this;
return (new cljs.core.async.t31427(self__.fn1,self__._,self__.meta31425,self__.map_LT_,self__.f,self__.ch,meta31428__$1));
});})(___$1))
;

cljs.core.async.t31427.cljs$lang$type = true;

cljs.core.async.t31427.cljs$lang$ctorStr = "cljs.core.async/t31427";

cljs.core.async.t31427.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t31427");
});})(___$1))
;

cljs.core.async.__GT_t31427 = ((function (___$1){
return (function __GT_t31427(fn1__$1,___$2,meta31425__$1,map_LT___$1,f__$1,ch__$1,meta31428){
return (new cljs.core.async.t31427(fn1__$1,___$2,meta31425__$1,map_LT___$1,f__$1,ch__$1,meta31428));
});})(___$1))
;

}

return (new cljs.core.async.t31427(fn1,___$1,self__.meta31425,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3803__auto__ = ret;
if(cljs.core.truth_(and__3803__auto__)){
return !(((function (){var G__31432 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31432) : cljs.core.deref.call(null,G__31432));
})() == null));
} else {
return and__3803__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31433 = (function (){var G__31434 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31434) : cljs.core.deref.call(null,G__31434));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31433) : self__.f.call(null,G__31433));
})());
} else {
return ret;
}
});

cljs.core.async.t31424.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t31424.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t31424.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t31424.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31426){
var self__ = this;
var _31426__$1 = this;
return self__.meta31425;
});

cljs.core.async.t31424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31426,meta31425__$1){
var self__ = this;
var _31426__$1 = this;
return (new cljs.core.async.t31424(self__.ch,self__.f,self__.map_LT_,meta31425__$1));
});

cljs.core.async.t31424.cljs$lang$type = true;

cljs.core.async.t31424.cljs$lang$ctorStr = "cljs.core.async/t31424";

cljs.core.async.t31424.cljs$lang$ctorPrWriter = (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t31424");
});

cljs.core.async.__GT_t31424 = (function __GT_t31424(ch__$1,f__$1,map_LT___$1,meta31425){
return (new cljs.core.async.t31424(ch__$1,f__$1,map_LT___$1,meta31425));
});

}

return (new cljs.core.async.t31424(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t31439 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31439 = (function (ch,f,map_GT_,meta31440){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta31440 = meta31440;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31439.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t31439.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__31442 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31442) : self__.f.call(null,G__31442));
})(),fn1);
});

cljs.core.async.t31439.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t31439.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t31439.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t31439.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t31439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31441){
var self__ = this;
var _31441__$1 = this;
return self__.meta31440;
});

cljs.core.async.t31439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31441,meta31440__$1){
var self__ = this;
var _31441__$1 = this;
return (new cljs.core.async.t31439(self__.ch,self__.f,self__.map_GT_,meta31440__$1));
});

cljs.core.async.t31439.cljs$lang$type = true;

cljs.core.async.t31439.cljs$lang$ctorStr = "cljs.core.async/t31439";

cljs.core.async.t31439.cljs$lang$ctorPrWriter = (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t31439");
});

cljs.core.async.__GT_t31439 = (function __GT_t31439(ch__$1,f__$1,map_GT___$1,meta31440){
return (new cljs.core.async.t31439(ch__$1,f__$1,map_GT___$1,meta31440));
});

}

return (new cljs.core.async.t31439(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t31447 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31447 = (function (ch,p,filter_GT_,meta31448){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta31448 = meta31448;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31447.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t31447.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__31450 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__31450) : self__.p.call(null,G__31450));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
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

cljs.core.async.t31447.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t31447.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31449){
var self__ = this;
var _31449__$1 = this;
return self__.meta31448;
});

cljs.core.async.t31447.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31449,meta31448__$1){
var self__ = this;
var _31449__$1 = this;
return (new cljs.core.async.t31447(self__.ch,self__.p,self__.filter_GT_,meta31448__$1));
});

cljs.core.async.t31447.cljs$lang$type = true;

cljs.core.async.t31447.cljs$lang$ctorStr = "cljs.core.async/t31447";

cljs.core.async.t31447.cljs$lang$ctorPrWriter = (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t31447");
});

cljs.core.async.__GT_t31447 = (function __GT_t31447(ch__$1,p__$1,filter_GT___$1,meta31448){
return (new cljs.core.async.t31447(ch__$1,p__$1,filter_GT___$1,meta31448));
});

}

return (new cljs.core.async.t31447(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var c__16187__auto___31538 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16187__auto___31538,out){
return (function (){
var f__16188__auto__ = (function (){var switch__16107__auto__ = ((function (c__16187__auto___31538,out){
return (function (state_31516){
var state_val_31517 = (state_31516[(1)]);
if((state_val_31517 === (7))){
var inst_31512 = (state_31516[(2)]);
var state_31516__$1 = state_31516;
var statearr_31518_31539 = state_31516__$1;
(statearr_31518_31539[(2)] = inst_31512);

(statearr_31518_31539[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31517 === (1))){
var state_31516__$1 = state_31516;
var statearr_31519_31540 = state_31516__$1;
(statearr_31519_31540[(2)] = null);

(statearr_31519_31540[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31517 === (4))){
var inst_31498 = (state_31516[(7)]);
var inst_31498__$1 = (state_31516[(2)]);
var inst_31499 = (inst_31498__$1 == null);
var state_31516__$1 = (function (){var statearr_31520 = state_31516;
(statearr_31520[(7)] = inst_31498__$1);

return statearr_31520;
})();
if(cljs.core.truth_(inst_31499)){
var statearr_31521_31541 = state_31516__$1;
(statearr_31521_31541[(1)] = (5));

} else {
var statearr_31522_31542 = state_31516__$1;
(statearr_31522_31542[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31517 === (6))){
var inst_31498 = (state_31516[(7)]);
var inst_31503 = (function (){var G__31523 = inst_31498;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__31523) : p.call(null,G__31523));
})();
var state_31516__$1 = state_31516;
if(cljs.core.truth_(inst_31503)){
var statearr_31524_31543 = state_31516__$1;
(statearr_31524_31543[(1)] = (8));

} else {
var statearr_31525_31544 = state_31516__$1;
(statearr_31525_31544[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31517 === (3))){
var inst_31514 = (state_31516[(2)]);
var state_31516__$1 = state_31516;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31516__$1,inst_31514);
} else {
if((state_val_31517 === (2))){
var state_31516__$1 = state_31516;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31516__$1,(4),ch);
} else {
if((state_val_31517 === (11))){
var inst_31506 = (state_31516[(2)]);
var state_31516__$1 = state_31516;
var statearr_31526_31545 = state_31516__$1;
(statearr_31526_31545[(2)] = inst_31506);

(statearr_31526_31545[(1)] = (10));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31517 === (9))){
var state_31516__$1 = state_31516;
var statearr_31527_31546 = state_31516__$1;
(statearr_31527_31546[(2)] = null);

(statearr_31527_31546[(1)] = (10));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31517 === (5))){
var inst_31501 = cljs.core.async.close_BANG_(out);
var state_31516__$1 = state_31516;
var statearr_31528_31547 = state_31516__$1;
(statearr_31528_31547[(2)] = inst_31501);

(statearr_31528_31547[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31517 === (10))){
var inst_31509 = (state_31516[(2)]);
var state_31516__$1 = (function (){var statearr_31529 = state_31516;
(statearr_31529[(8)] = inst_31509);

return statearr_31529;
})();
var statearr_31530_31548 = state_31516__$1;
(statearr_31530_31548[(2)] = null);

(statearr_31530_31548[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31517 === (8))){
var inst_31498 = (state_31516[(7)]);
var state_31516__$1 = state_31516;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31516__$1,(11),out,inst_31498);
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
});})(c__16187__auto___31538,out))
;
return ((function (switch__16107__auto__,c__16187__auto___31538,out){
return (function() {
var state_machine__16108__auto__ = null;
var state_machine__16108__auto____0 = (function (){
var statearr_31534 = [null,null,null,null,null,null,null,null,null];
(statearr_31534[(0)] = state_machine__16108__auto__);

(statearr_31534[(1)] = (1));

return statearr_31534;
});
var state_machine__16108__auto____1 = (function (state_31516){
while(true){
var ret_value__16109__auto__ = (function (){try{while(true){
var result__16110__auto__ = switch__16107__auto__(state_31516);
if(cljs.core.keyword_identical_QMARK_(result__16110__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16110__auto__;
}
break;
}
}catch (e31535){if((e31535 instanceof Object)){
var ex__16111__auto__ = e31535;
var statearr_31536_31549 = state_31516;
(statearr_31536_31549[(5)] = ex__16111__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31516);

return cljs.core.constant$keyword$97;
} else {
throw e31535;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16109__auto__,cljs.core.constant$keyword$97)){
var G__31550 = state_31516;
state_31516 = G__31550;
continue;
} else {
return ret_value__16109__auto__;
}
break;
}
});
state_machine__16108__auto__ = function(state_31516){
switch(arguments.length){
case 0:
return state_machine__16108__auto____0.call(this);
case 1:
return state_machine__16108__auto____1.call(this,state_31516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16108__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16108__auto____0;
state_machine__16108__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16108__auto____1;
return state_machine__16108__auto__;
})()
;})(switch__16107__auto__,c__16187__auto___31538,out))
})();
var state__16189__auto__ = (function (){var statearr_31537 = (function (){return (f__16188__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16188__auto__.cljs$core$IFn$_invoke$arity$0() : f__16188__auto__.call(null));
})();
(statearr_31537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16187__auto___31538);

return statearr_31537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16189__auto__);
});})(c__16187__auto___31538,out))
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
var c__16187__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16187__auto__){
return (function (){
var f__16188__auto__ = (function (){var switch__16107__auto__ = ((function (c__16187__auto__){
return (function (state_31720){
var state_val_31721 = (state_31720[(1)]);
if((state_val_31721 === (7))){
var inst_31716 = (state_31720[(2)]);
var state_31720__$1 = state_31720;
var statearr_31722_31764 = state_31720__$1;
(statearr_31722_31764[(2)] = inst_31716);

(statearr_31722_31764[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31721 === (20))){
var inst_31686 = (state_31720[(7)]);
var inst_31697 = (state_31720[(2)]);
var inst_31698 = cljs.core.next(inst_31686);
var inst_31672 = inst_31698;
var inst_31673 = null;
var inst_31674 = (0);
var inst_31675 = (0);
var state_31720__$1 = (function (){var statearr_31723 = state_31720;
(statearr_31723[(8)] = inst_31674);

(statearr_31723[(9)] = inst_31672);

(statearr_31723[(10)] = inst_31697);

(statearr_31723[(11)] = inst_31675);

(statearr_31723[(12)] = inst_31673);

return statearr_31723;
})();
var statearr_31724_31765 = state_31720__$1;
(statearr_31724_31765[(2)] = null);

(statearr_31724_31765[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31721 === (1))){
var state_31720__$1 = state_31720;
var statearr_31725_31766 = state_31720__$1;
(statearr_31725_31766[(2)] = null);

(statearr_31725_31766[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31721 === (4))){
var inst_31661 = (state_31720[(13)]);
var inst_31661__$1 = (state_31720[(2)]);
var inst_31662 = (inst_31661__$1 == null);
var state_31720__$1 = (function (){var statearr_31726 = state_31720;
(statearr_31726[(13)] = inst_31661__$1);

return statearr_31726;
})();
if(cljs.core.truth_(inst_31662)){
var statearr_31727_31767 = state_31720__$1;
(statearr_31727_31767[(1)] = (5));

} else {
var statearr_31728_31768 = state_31720__$1;
(statearr_31728_31768[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31721 === (15))){
var state_31720__$1 = state_31720;
var statearr_31732_31769 = state_31720__$1;
(statearr_31732_31769[(2)] = null);

(statearr_31732_31769[(1)] = (16));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31721 === (21))){
var state_31720__$1 = state_31720;
var statearr_31733_31770 = state_31720__$1;
(statearr_31733_31770[(2)] = null);

(statearr_31733_31770[(1)] = (23));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31721 === (13))){
var inst_31674 = (state_31720[(8)]);
var inst_31672 = (state_31720[(9)]);
var inst_31675 = (state_31720[(11)]);
var inst_31673 = (state_31720[(12)]);
var inst_31682 = (state_31720[(2)]);
var inst_31683 = (inst_31675 + (1));
var tmp31729 = inst_31674;
var tmp31730 = inst_31672;
var tmp31731 = inst_31673;
var inst_31672__$1 = tmp31730;
var inst_31673__$1 = tmp31731;
var inst_31674__$1 = tmp31729;
var inst_31675__$1 = inst_31683;
var state_31720__$1 = (function (){var statearr_31734 = state_31720;
(statearr_31734[(8)] = inst_31674__$1);

(statearr_31734[(14)] = inst_31682);

(statearr_31734[(9)] = inst_31672__$1);

(statearr_31734[(11)] = inst_31675__$1);

(statearr_31734[(12)] = inst_31673__$1);

return statearr_31734;
})();
var statearr_31735_31771 = state_31720__$1;
(statearr_31735_31771[(2)] = null);

(statearr_31735_31771[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31721 === (22))){
var state_31720__$1 = state_31720;
var statearr_31736_31772 = state_31720__$1;
(statearr_31736_31772[(2)] = null);

(statearr_31736_31772[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31721 === (6))){
var inst_31661 = (state_31720[(13)]);
var inst_31670 = (function (){var G__31737 = inst_31661;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__31737) : f.call(null,G__31737));
})();
var inst_31671 = cljs.core.seq(inst_31670);
var inst_31672 = inst_31671;
var inst_31673 = null;
var inst_31674 = (0);
var inst_31675 = (0);
var state_31720__$1 = (function (){var statearr_31738 = state_31720;
(statearr_31738[(8)] = inst_31674);

(statearr_31738[(9)] = inst_31672);

(statearr_31738[(11)] = inst_31675);

(statearr_31738[(12)] = inst_31673);

return statearr_31738;
})();
var statearr_31739_31773 = state_31720__$1;
(statearr_31739_31773[(2)] = null);

(statearr_31739_31773[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31721 === (17))){
var inst_31686 = (state_31720[(7)]);
var inst_31690 = cljs.core.chunk_first(inst_31686);
var inst_31691 = cljs.core.chunk_rest(inst_31686);
var inst_31692 = cljs.core.count(inst_31690);
var inst_31672 = inst_31691;
var inst_31673 = inst_31690;
var inst_31674 = inst_31692;
var inst_31675 = (0);
var state_31720__$1 = (function (){var statearr_31740 = state_31720;
(statearr_31740[(8)] = inst_31674);

(statearr_31740[(9)] = inst_31672);

(statearr_31740[(11)] = inst_31675);

(statearr_31740[(12)] = inst_31673);

return statearr_31740;
})();
var statearr_31741_31774 = state_31720__$1;
(statearr_31741_31774[(2)] = null);

(statearr_31741_31774[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31721 === (3))){
var inst_31718 = (state_31720[(2)]);
var state_31720__$1 = state_31720;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31720__$1,inst_31718);
} else {
if((state_val_31721 === (12))){
var inst_31706 = (state_31720[(2)]);
var state_31720__$1 = state_31720;
var statearr_31742_31775 = state_31720__$1;
(statearr_31742_31775[(2)] = inst_31706);

(statearr_31742_31775[(1)] = (9));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31721 === (2))){
var state_31720__$1 = state_31720;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31720__$1,(4),in$);
} else {
if((state_val_31721 === (23))){
var inst_31714 = (state_31720[(2)]);
var state_31720__$1 = state_31720;
var statearr_31743_31776 = state_31720__$1;
(statearr_31743_31776[(2)] = inst_31714);

(statearr_31743_31776[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31721 === (19))){
var inst_31701 = (state_31720[(2)]);
var state_31720__$1 = state_31720;
var statearr_31744_31777 = state_31720__$1;
(statearr_31744_31777[(2)] = inst_31701);

(statearr_31744_31777[(1)] = (16));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31721 === (11))){
var inst_31672 = (state_31720[(9)]);
var inst_31686 = (state_31720[(7)]);
var inst_31686__$1 = cljs.core.seq(inst_31672);
var state_31720__$1 = (function (){var statearr_31745 = state_31720;
(statearr_31745[(7)] = inst_31686__$1);

return statearr_31745;
})();
if(inst_31686__$1){
var statearr_31746_31778 = state_31720__$1;
(statearr_31746_31778[(1)] = (14));

} else {
var statearr_31747_31779 = state_31720__$1;
(statearr_31747_31779[(1)] = (15));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31721 === (9))){
var inst_31708 = (state_31720[(2)]);
var inst_31709 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_31720__$1 = (function (){var statearr_31748 = state_31720;
(statearr_31748[(15)] = inst_31708);

return statearr_31748;
})();
if(cljs.core.truth_(inst_31709)){
var statearr_31749_31780 = state_31720__$1;
(statearr_31749_31780[(1)] = (21));

} else {
var statearr_31750_31781 = state_31720__$1;
(statearr_31750_31781[(1)] = (22));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31721 === (5))){
var inst_31664 = cljs.core.async.close_BANG_(out);
var state_31720__$1 = state_31720;
var statearr_31751_31782 = state_31720__$1;
(statearr_31751_31782[(2)] = inst_31664);

(statearr_31751_31782[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31721 === (14))){
var inst_31686 = (state_31720[(7)]);
var inst_31688 = cljs.core.chunked_seq_QMARK_(inst_31686);
var state_31720__$1 = state_31720;
if(inst_31688){
var statearr_31752_31783 = state_31720__$1;
(statearr_31752_31783[(1)] = (17));

} else {
var statearr_31753_31784 = state_31720__$1;
(statearr_31753_31784[(1)] = (18));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31721 === (16))){
var inst_31704 = (state_31720[(2)]);
var state_31720__$1 = state_31720;
var statearr_31754_31785 = state_31720__$1;
(statearr_31754_31785[(2)] = inst_31704);

(statearr_31754_31785[(1)] = (12));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31721 === (10))){
var inst_31675 = (state_31720[(11)]);
var inst_31673 = (state_31720[(12)]);
var inst_31680 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31673,inst_31675);
var state_31720__$1 = state_31720;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31720__$1,(13),out,inst_31680);
} else {
if((state_val_31721 === (18))){
var inst_31686 = (state_31720[(7)]);
var inst_31695 = cljs.core.first(inst_31686);
var state_31720__$1 = state_31720;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31720__$1,(20),out,inst_31695);
} else {
if((state_val_31721 === (8))){
var inst_31674 = (state_31720[(8)]);
var inst_31675 = (state_31720[(11)]);
var inst_31677 = (inst_31675 < inst_31674);
var inst_31678 = inst_31677;
var state_31720__$1 = state_31720;
if(cljs.core.truth_(inst_31678)){
var statearr_31755_31786 = state_31720__$1;
(statearr_31755_31786[(1)] = (10));

} else {
var statearr_31756_31787 = state_31720__$1;
(statearr_31756_31787[(1)] = (11));

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
});})(c__16187__auto__))
;
return ((function (switch__16107__auto__,c__16187__auto__){
return (function() {
var state_machine__16108__auto__ = null;
var state_machine__16108__auto____0 = (function (){
var statearr_31760 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31760[(0)] = state_machine__16108__auto__);

(statearr_31760[(1)] = (1));

return statearr_31760;
});
var state_machine__16108__auto____1 = (function (state_31720){
while(true){
var ret_value__16109__auto__ = (function (){try{while(true){
var result__16110__auto__ = switch__16107__auto__(state_31720);
if(cljs.core.keyword_identical_QMARK_(result__16110__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16110__auto__;
}
break;
}
}catch (e31761){if((e31761 instanceof Object)){
var ex__16111__auto__ = e31761;
var statearr_31762_31788 = state_31720;
(statearr_31762_31788[(5)] = ex__16111__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31720);

return cljs.core.constant$keyword$97;
} else {
throw e31761;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16109__auto__,cljs.core.constant$keyword$97)){
var G__31789 = state_31720;
state_31720 = G__31789;
continue;
} else {
return ret_value__16109__auto__;
}
break;
}
});
state_machine__16108__auto__ = function(state_31720){
switch(arguments.length){
case 0:
return state_machine__16108__auto____0.call(this);
case 1:
return state_machine__16108__auto____1.call(this,state_31720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16108__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16108__auto____0;
state_machine__16108__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16108__auto____1;
return state_machine__16108__auto__;
})()
;})(switch__16107__auto__,c__16187__auto__))
})();
var state__16189__auto__ = (function (){var statearr_31763 = (function (){return (f__16188__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16188__auto__.cljs$core$IFn$_invoke$arity$0() : f__16188__auto__.call(null));
})();
(statearr_31763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16187__auto__);

return statearr_31763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16189__auto__);
});})(c__16187__auto__))
);

return c__16187__auto__;
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
var c__16187__auto___31894 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16187__auto___31894,out){
return (function (){
var f__16188__auto__ = (function (){var switch__16107__auto__ = ((function (c__16187__auto___31894,out){
return (function (state_31869){
var state_val_31870 = (state_31869[(1)]);
if((state_val_31870 === (7))){
var inst_31864 = (state_31869[(2)]);
var state_31869__$1 = state_31869;
var statearr_31871_31895 = state_31869__$1;
(statearr_31871_31895[(2)] = inst_31864);

(statearr_31871_31895[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31870 === (1))){
var inst_31846 = null;
var state_31869__$1 = (function (){var statearr_31872 = state_31869;
(statearr_31872[(7)] = inst_31846);

return statearr_31872;
})();
var statearr_31873_31896 = state_31869__$1;
(statearr_31873_31896[(2)] = null);

(statearr_31873_31896[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31870 === (4))){
var inst_31849 = (state_31869[(8)]);
var inst_31849__$1 = (state_31869[(2)]);
var inst_31850 = (inst_31849__$1 == null);
var inst_31851 = cljs.core.not(inst_31850);
var state_31869__$1 = (function (){var statearr_31874 = state_31869;
(statearr_31874[(8)] = inst_31849__$1);

return statearr_31874;
})();
if(inst_31851){
var statearr_31875_31897 = state_31869__$1;
(statearr_31875_31897[(1)] = (5));

} else {
var statearr_31876_31898 = state_31869__$1;
(statearr_31876_31898[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31870 === (6))){
var state_31869__$1 = state_31869;
var statearr_31877_31899 = state_31869__$1;
(statearr_31877_31899[(2)] = null);

(statearr_31877_31899[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31870 === (3))){
var inst_31866 = (state_31869[(2)]);
var inst_31867 = cljs.core.async.close_BANG_(out);
var state_31869__$1 = (function (){var statearr_31878 = state_31869;
(statearr_31878[(9)] = inst_31866);

return statearr_31878;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31869__$1,inst_31867);
} else {
if((state_val_31870 === (2))){
var state_31869__$1 = state_31869;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31869__$1,(4),ch);
} else {
if((state_val_31870 === (11))){
var inst_31849 = (state_31869[(8)]);
var inst_31858 = (state_31869[(2)]);
var inst_31846 = inst_31849;
var state_31869__$1 = (function (){var statearr_31879 = state_31869;
(statearr_31879[(7)] = inst_31846);

(statearr_31879[(10)] = inst_31858);

return statearr_31879;
})();
var statearr_31880_31900 = state_31869__$1;
(statearr_31880_31900[(2)] = null);

(statearr_31880_31900[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31870 === (9))){
var inst_31849 = (state_31869[(8)]);
var state_31869__$1 = state_31869;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31869__$1,(11),out,inst_31849);
} else {
if((state_val_31870 === (5))){
var inst_31846 = (state_31869[(7)]);
var inst_31849 = (state_31869[(8)]);
var inst_31853 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31849,inst_31846);
var state_31869__$1 = state_31869;
if(inst_31853){
var statearr_31882_31901 = state_31869__$1;
(statearr_31882_31901[(1)] = (8));

} else {
var statearr_31883_31902 = state_31869__$1;
(statearr_31883_31902[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31870 === (10))){
var inst_31861 = (state_31869[(2)]);
var state_31869__$1 = state_31869;
var statearr_31884_31903 = state_31869__$1;
(statearr_31884_31903[(2)] = inst_31861);

(statearr_31884_31903[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31870 === (8))){
var inst_31846 = (state_31869[(7)]);
var tmp31881 = inst_31846;
var inst_31846__$1 = tmp31881;
var state_31869__$1 = (function (){var statearr_31885 = state_31869;
(statearr_31885[(7)] = inst_31846__$1);

return statearr_31885;
})();
var statearr_31886_31904 = state_31869__$1;
(statearr_31886_31904[(2)] = null);

(statearr_31886_31904[(1)] = (2));


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
});})(c__16187__auto___31894,out))
;
return ((function (switch__16107__auto__,c__16187__auto___31894,out){
return (function() {
var state_machine__16108__auto__ = null;
var state_machine__16108__auto____0 = (function (){
var statearr_31890 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31890[(0)] = state_machine__16108__auto__);

(statearr_31890[(1)] = (1));

return statearr_31890;
});
var state_machine__16108__auto____1 = (function (state_31869){
while(true){
var ret_value__16109__auto__ = (function (){try{while(true){
var result__16110__auto__ = switch__16107__auto__(state_31869);
if(cljs.core.keyword_identical_QMARK_(result__16110__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16110__auto__;
}
break;
}
}catch (e31891){if((e31891 instanceof Object)){
var ex__16111__auto__ = e31891;
var statearr_31892_31905 = state_31869;
(statearr_31892_31905[(5)] = ex__16111__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31869);

return cljs.core.constant$keyword$97;
} else {
throw e31891;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16109__auto__,cljs.core.constant$keyword$97)){
var G__31906 = state_31869;
state_31869 = G__31906;
continue;
} else {
return ret_value__16109__auto__;
}
break;
}
});
state_machine__16108__auto__ = function(state_31869){
switch(arguments.length){
case 0:
return state_machine__16108__auto____0.call(this);
case 1:
return state_machine__16108__auto____1.call(this,state_31869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16108__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16108__auto____0;
state_machine__16108__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16108__auto____1;
return state_machine__16108__auto__;
})()
;})(switch__16107__auto__,c__16187__auto___31894,out))
})();
var state__16189__auto__ = (function (){var statearr_31893 = (function (){return (f__16188__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16188__auto__.cljs$core$IFn$_invoke$arity$0() : f__16188__auto__.call(null));
})();
(statearr_31893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16187__auto___31894);

return statearr_31893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16189__auto__);
});})(c__16187__auto___31894,out))
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
var c__16187__auto___32044 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16187__auto___32044,out){
return (function (){
var f__16188__auto__ = (function (){var switch__16107__auto__ = ((function (c__16187__auto___32044,out){
return (function (state_32014){
var state_val_32015 = (state_32014[(1)]);
if((state_val_32015 === (7))){
var inst_32010 = (state_32014[(2)]);
var state_32014__$1 = state_32014;
var statearr_32016_32045 = state_32014__$1;
(statearr_32016_32045[(2)] = inst_32010);

(statearr_32016_32045[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32015 === (1))){
var inst_31977 = (new Array(n));
var inst_31978 = inst_31977;
var inst_31979 = (0);
var state_32014__$1 = (function (){var statearr_32017 = state_32014;
(statearr_32017[(7)] = inst_31979);

(statearr_32017[(8)] = inst_31978);

return statearr_32017;
})();
var statearr_32018_32046 = state_32014__$1;
(statearr_32018_32046[(2)] = null);

(statearr_32018_32046[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32015 === (4))){
var inst_31982 = (state_32014[(9)]);
var inst_31982__$1 = (state_32014[(2)]);
var inst_31983 = (inst_31982__$1 == null);
var inst_31984 = cljs.core.not(inst_31983);
var state_32014__$1 = (function (){var statearr_32019 = state_32014;
(statearr_32019[(9)] = inst_31982__$1);

return statearr_32019;
})();
if(inst_31984){
var statearr_32020_32047 = state_32014__$1;
(statearr_32020_32047[(1)] = (5));

} else {
var statearr_32021_32048 = state_32014__$1;
(statearr_32021_32048[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32015 === (15))){
var inst_32004 = (state_32014[(2)]);
var state_32014__$1 = state_32014;
var statearr_32022_32049 = state_32014__$1;
(statearr_32022_32049[(2)] = inst_32004);

(statearr_32022_32049[(1)] = (14));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32015 === (13))){
var state_32014__$1 = state_32014;
var statearr_32023_32050 = state_32014__$1;
(statearr_32023_32050[(2)] = null);

(statearr_32023_32050[(1)] = (14));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32015 === (6))){
var inst_31979 = (state_32014[(7)]);
var inst_32000 = (inst_31979 > (0));
var state_32014__$1 = state_32014;
if(cljs.core.truth_(inst_32000)){
var statearr_32024_32051 = state_32014__$1;
(statearr_32024_32051[(1)] = (12));

} else {
var statearr_32025_32052 = state_32014__$1;
(statearr_32025_32052[(1)] = (13));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32015 === (3))){
var inst_32012 = (state_32014[(2)]);
var state_32014__$1 = state_32014;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32014__$1,inst_32012);
} else {
if((state_val_32015 === (12))){
var inst_31978 = (state_32014[(8)]);
var inst_32002 = cljs.core.vec(inst_31978);
var state_32014__$1 = state_32014;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32014__$1,(15),out,inst_32002);
} else {
if((state_val_32015 === (2))){
var state_32014__$1 = state_32014;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32014__$1,(4),ch);
} else {
if((state_val_32015 === (11))){
var inst_31994 = (state_32014[(2)]);
var inst_31995 = (new Array(n));
var inst_31978 = inst_31995;
var inst_31979 = (0);
var state_32014__$1 = (function (){var statearr_32026 = state_32014;
(statearr_32026[(7)] = inst_31979);

(statearr_32026[(8)] = inst_31978);

(statearr_32026[(10)] = inst_31994);

return statearr_32026;
})();
var statearr_32027_32053 = state_32014__$1;
(statearr_32027_32053[(2)] = null);

(statearr_32027_32053[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32015 === (9))){
var inst_31978 = (state_32014[(8)]);
var inst_31992 = cljs.core.vec(inst_31978);
var state_32014__$1 = state_32014;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32014__$1,(11),out,inst_31992);
} else {
if((state_val_32015 === (5))){
var inst_31979 = (state_32014[(7)]);
var inst_31982 = (state_32014[(9)]);
var inst_31987 = (state_32014[(11)]);
var inst_31978 = (state_32014[(8)]);
var inst_31986 = (inst_31978[inst_31979] = inst_31982);
var inst_31987__$1 = (inst_31979 + (1));
var inst_31988 = (inst_31987__$1 < n);
var state_32014__$1 = (function (){var statearr_32028 = state_32014;
(statearr_32028[(12)] = inst_31986);

(statearr_32028[(11)] = inst_31987__$1);

return statearr_32028;
})();
if(cljs.core.truth_(inst_31988)){
var statearr_32029_32054 = state_32014__$1;
(statearr_32029_32054[(1)] = (8));

} else {
var statearr_32030_32055 = state_32014__$1;
(statearr_32030_32055[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32015 === (14))){
var inst_32007 = (state_32014[(2)]);
var inst_32008 = cljs.core.async.close_BANG_(out);
var state_32014__$1 = (function (){var statearr_32032 = state_32014;
(statearr_32032[(13)] = inst_32007);

return statearr_32032;
})();
var statearr_32033_32056 = state_32014__$1;
(statearr_32033_32056[(2)] = inst_32008);

(statearr_32033_32056[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32015 === (10))){
var inst_31998 = (state_32014[(2)]);
var state_32014__$1 = state_32014;
var statearr_32034_32057 = state_32014__$1;
(statearr_32034_32057[(2)] = inst_31998);

(statearr_32034_32057[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32015 === (8))){
var inst_31987 = (state_32014[(11)]);
var inst_31978 = (state_32014[(8)]);
var tmp32031 = inst_31978;
var inst_31978__$1 = tmp32031;
var inst_31979 = inst_31987;
var state_32014__$1 = (function (){var statearr_32035 = state_32014;
(statearr_32035[(7)] = inst_31979);

(statearr_32035[(8)] = inst_31978__$1);

return statearr_32035;
})();
var statearr_32036_32058 = state_32014__$1;
(statearr_32036_32058[(2)] = null);

(statearr_32036_32058[(1)] = (2));


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
});})(c__16187__auto___32044,out))
;
return ((function (switch__16107__auto__,c__16187__auto___32044,out){
return (function() {
var state_machine__16108__auto__ = null;
var state_machine__16108__auto____0 = (function (){
var statearr_32040 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32040[(0)] = state_machine__16108__auto__);

(statearr_32040[(1)] = (1));

return statearr_32040;
});
var state_machine__16108__auto____1 = (function (state_32014){
while(true){
var ret_value__16109__auto__ = (function (){try{while(true){
var result__16110__auto__ = switch__16107__auto__(state_32014);
if(cljs.core.keyword_identical_QMARK_(result__16110__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16110__auto__;
}
break;
}
}catch (e32041){if((e32041 instanceof Object)){
var ex__16111__auto__ = e32041;
var statearr_32042_32059 = state_32014;
(statearr_32042_32059[(5)] = ex__16111__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32014);

return cljs.core.constant$keyword$97;
} else {
throw e32041;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16109__auto__,cljs.core.constant$keyword$97)){
var G__32060 = state_32014;
state_32014 = G__32060;
continue;
} else {
return ret_value__16109__auto__;
}
break;
}
});
state_machine__16108__auto__ = function(state_32014){
switch(arguments.length){
case 0:
return state_machine__16108__auto____0.call(this);
case 1:
return state_machine__16108__auto____1.call(this,state_32014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16108__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16108__auto____0;
state_machine__16108__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16108__auto____1;
return state_machine__16108__auto__;
})()
;})(switch__16107__auto__,c__16187__auto___32044,out))
})();
var state__16189__auto__ = (function (){var statearr_32043 = (function (){return (f__16188__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16188__auto__.cljs$core$IFn$_invoke$arity$0() : f__16188__auto__.call(null));
})();
(statearr_32043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16187__auto___32044);

return statearr_32043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16189__auto__);
});})(c__16187__auto___32044,out))
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
var c__16187__auto___32208 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16187__auto___32208,out){
return (function (){
var f__16188__auto__ = (function (){var switch__16107__auto__ = ((function (c__16187__auto___32208,out){
return (function (state_32177){
var state_val_32178 = (state_32177[(1)]);
if((state_val_32178 === (7))){
var inst_32173 = (state_32177[(2)]);
var state_32177__$1 = state_32177;
var statearr_32179_32209 = state_32177__$1;
(statearr_32179_32209[(2)] = inst_32173);

(statearr_32179_32209[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32178 === (1))){
var inst_32136 = [];
var inst_32137 = inst_32136;
var inst_32138 = cljs.core.constant$keyword$112;
var state_32177__$1 = (function (){var statearr_32180 = state_32177;
(statearr_32180[(7)] = inst_32138);

(statearr_32180[(8)] = inst_32137);

return statearr_32180;
})();
var statearr_32181_32210 = state_32177__$1;
(statearr_32181_32210[(2)] = null);

(statearr_32181_32210[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32178 === (4))){
var inst_32141 = (state_32177[(9)]);
var inst_32141__$1 = (state_32177[(2)]);
var inst_32142 = (inst_32141__$1 == null);
var inst_32143 = cljs.core.not(inst_32142);
var state_32177__$1 = (function (){var statearr_32182 = state_32177;
(statearr_32182[(9)] = inst_32141__$1);

return statearr_32182;
})();
if(inst_32143){
var statearr_32183_32211 = state_32177__$1;
(statearr_32183_32211[(1)] = (5));

} else {
var statearr_32184_32212 = state_32177__$1;
(statearr_32184_32212[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32178 === (15))){
var inst_32167 = (state_32177[(2)]);
var state_32177__$1 = state_32177;
var statearr_32185_32213 = state_32177__$1;
(statearr_32185_32213[(2)] = inst_32167);

(statearr_32185_32213[(1)] = (14));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32178 === (13))){
var state_32177__$1 = state_32177;
var statearr_32186_32214 = state_32177__$1;
(statearr_32186_32214[(2)] = null);

(statearr_32186_32214[(1)] = (14));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32178 === (6))){
var inst_32137 = (state_32177[(8)]);
var inst_32162 = inst_32137.length;
var inst_32163 = (inst_32162 > (0));
var state_32177__$1 = state_32177;
if(cljs.core.truth_(inst_32163)){
var statearr_32187_32215 = state_32177__$1;
(statearr_32187_32215[(1)] = (12));

} else {
var statearr_32188_32216 = state_32177__$1;
(statearr_32188_32216[(1)] = (13));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32178 === (3))){
var inst_32175 = (state_32177[(2)]);
var state_32177__$1 = state_32177;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32177__$1,inst_32175);
} else {
if((state_val_32178 === (12))){
var inst_32137 = (state_32177[(8)]);
var inst_32165 = cljs.core.vec(inst_32137);
var state_32177__$1 = state_32177;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32177__$1,(15),out,inst_32165);
} else {
if((state_val_32178 === (2))){
var state_32177__$1 = state_32177;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32177__$1,(4),ch);
} else {
if((state_val_32178 === (11))){
var inst_32145 = (state_32177[(10)]);
var inst_32141 = (state_32177[(9)]);
var inst_32155 = (state_32177[(2)]);
var inst_32156 = [];
var inst_32157 = inst_32156.push(inst_32141);
var inst_32137 = inst_32156;
var inst_32138 = inst_32145;
var state_32177__$1 = (function (){var statearr_32189 = state_32177;
(statearr_32189[(7)] = inst_32138);

(statearr_32189[(8)] = inst_32137);

(statearr_32189[(11)] = inst_32157);

(statearr_32189[(12)] = inst_32155);

return statearr_32189;
})();
var statearr_32190_32217 = state_32177__$1;
(statearr_32190_32217[(2)] = null);

(statearr_32190_32217[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32178 === (9))){
var inst_32137 = (state_32177[(8)]);
var inst_32153 = cljs.core.vec(inst_32137);
var state_32177__$1 = state_32177;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32177__$1,(11),out,inst_32153);
} else {
if((state_val_32178 === (5))){
var inst_32138 = (state_32177[(7)]);
var inst_32145 = (state_32177[(10)]);
var inst_32141 = (state_32177[(9)]);
var inst_32145__$1 = (function (){var G__32191 = inst_32141;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__32191) : f.call(null,G__32191));
})();
var inst_32146 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32145__$1,inst_32138);
var inst_32147 = cljs.core.keyword_identical_QMARK_(inst_32138,cljs.core.constant$keyword$112);
var inst_32148 = (inst_32146) || (inst_32147);
var state_32177__$1 = (function (){var statearr_32192 = state_32177;
(statearr_32192[(10)] = inst_32145__$1);

return statearr_32192;
})();
if(cljs.core.truth_(inst_32148)){
var statearr_32193_32218 = state_32177__$1;
(statearr_32193_32218[(1)] = (8));

} else {
var statearr_32194_32219 = state_32177__$1;
(statearr_32194_32219[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32178 === (14))){
var inst_32170 = (state_32177[(2)]);
var inst_32171 = cljs.core.async.close_BANG_(out);
var state_32177__$1 = (function (){var statearr_32196 = state_32177;
(statearr_32196[(13)] = inst_32170);

return statearr_32196;
})();
var statearr_32197_32220 = state_32177__$1;
(statearr_32197_32220[(2)] = inst_32171);

(statearr_32197_32220[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32178 === (10))){
var inst_32160 = (state_32177[(2)]);
var state_32177__$1 = state_32177;
var statearr_32198_32221 = state_32177__$1;
(statearr_32198_32221[(2)] = inst_32160);

(statearr_32198_32221[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32178 === (8))){
var inst_32137 = (state_32177[(8)]);
var inst_32145 = (state_32177[(10)]);
var inst_32141 = (state_32177[(9)]);
var inst_32150 = inst_32137.push(inst_32141);
var tmp32195 = inst_32137;
var inst_32137__$1 = tmp32195;
var inst_32138 = inst_32145;
var state_32177__$1 = (function (){var statearr_32199 = state_32177;
(statearr_32199[(7)] = inst_32138);

(statearr_32199[(8)] = inst_32137__$1);

(statearr_32199[(14)] = inst_32150);

return statearr_32199;
})();
var statearr_32200_32222 = state_32177__$1;
(statearr_32200_32222[(2)] = null);

(statearr_32200_32222[(1)] = (2));


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
});})(c__16187__auto___32208,out))
;
return ((function (switch__16107__auto__,c__16187__auto___32208,out){
return (function() {
var state_machine__16108__auto__ = null;
var state_machine__16108__auto____0 = (function (){
var statearr_32204 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32204[(0)] = state_machine__16108__auto__);

(statearr_32204[(1)] = (1));

return statearr_32204;
});
var state_machine__16108__auto____1 = (function (state_32177){
while(true){
var ret_value__16109__auto__ = (function (){try{while(true){
var result__16110__auto__ = switch__16107__auto__(state_32177);
if(cljs.core.keyword_identical_QMARK_(result__16110__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16110__auto__;
}
break;
}
}catch (e32205){if((e32205 instanceof Object)){
var ex__16111__auto__ = e32205;
var statearr_32206_32223 = state_32177;
(statearr_32206_32223[(5)] = ex__16111__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32177);

return cljs.core.constant$keyword$97;
} else {
throw e32205;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16109__auto__,cljs.core.constant$keyword$97)){
var G__32224 = state_32177;
state_32177 = G__32224;
continue;
} else {
return ret_value__16109__auto__;
}
break;
}
});
state_machine__16108__auto__ = function(state_32177){
switch(arguments.length){
case 0:
return state_machine__16108__auto____0.call(this);
case 1:
return state_machine__16108__auto____1.call(this,state_32177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16108__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16108__auto____0;
state_machine__16108__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16108__auto____1;
return state_machine__16108__auto__;
})()
;})(switch__16107__auto__,c__16187__auto___32208,out))
})();
var state__16189__auto__ = (function (){var statearr_32207 = (function (){return (f__16188__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16188__auto__.cljs$core$IFn$_invoke$arity$0() : f__16188__auto__.call(null));
})();
(statearr_32207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16187__auto___32208);

return statearr_32207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16189__auto__);
});})(c__16187__auto___32208,out))
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

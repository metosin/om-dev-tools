// Compiled by ClojureScript 0.0-2850 {}
goog.provide('om_tools.core');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('plumbing.core');
goog.require('plumbing.fnk.schema');
goog.require('om.core');
/**
* Returns an atom-like object for reading and writing Om component
* state.
* 
* Note: Behavior may exactly not match atoms when deref'ing
* immediately following a reset!/swap! because Om processes state
* changes asynchronously in separate render phases.
*/
om_tools.core.state_proxy = (function state_proxy(owner){
if(cljs.core.truth_(owner)){
var get_state = (function (){
return om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
});
if(typeof om_tools.core.t21538 !== 'undefined'){
} else {

/**
* @constructor
*/
om_tools.core.t21538 = (function (get_state,owner,state_proxy,meta21539){
this.get_state = get_state;
this.owner = owner;
this.state_proxy = state_proxy;
this.meta21539 = meta21539;
this.cljs$lang$protocol_mask$partition1$ = 98304;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
om_tools.core.t21538.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = ((function (get_state){
return (function (s,f){
var self__ = this;
var s__$1 = this;
return cljs.core._reset_BANG_(s__$1,(function (){var G__21541 = (function (){return (self__.get_state.cljs$core$IFn$_invoke$arity$0 ? self__.get_state.cljs$core$IFn$_invoke$arity$0() : self__.get_state.call(null));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__21541) : f.call(null,G__21541));
})());
});})(get_state))
;

om_tools.core.t21538.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = ((function (get_state){
return (function (s,f,x){
var self__ = this;
var s__$1 = this;
return cljs.core._reset_BANG_(s__$1,(function (){var G__21542 = (function (){return (self__.get_state.cljs$core$IFn$_invoke$arity$0 ? self__.get_state.cljs$core$IFn$_invoke$arity$0() : self__.get_state.call(null));
})();
var G__21543 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__21542,G__21543) : f.call(null,G__21542,G__21543));
})());
});})(get_state))
;

om_tools.core.t21538.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = ((function (get_state){
return (function (s,f,x,y){
var self__ = this;
var s__$1 = this;
return cljs.core._reset_BANG_(s__$1,(function (){var G__21544 = (function (){return (self__.get_state.cljs$core$IFn$_invoke$arity$0 ? self__.get_state.cljs$core$IFn$_invoke$arity$0() : self__.get_state.call(null));
})();
var G__21545 = x;
var G__21546 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__21544,G__21545,G__21546) : f.call(null,G__21544,G__21545,G__21546));
})());
});})(get_state))
;

om_tools.core.t21538.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = ((function (get_state){
return (function (s,f,x,y,more){
var self__ = this;
var s__$1 = this;
return cljs.core._reset_BANG_(s__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(function (){return (self__.get_state.cljs$core$IFn$_invoke$arity$0 ? self__.get_state.cljs$core$IFn$_invoke$arity$0() : self__.get_state.call(null));
})(),x,y,more));
});})(get_state))
;

om_tools.core.t21538.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = ((function (get_state){
return (function (_,v){
var self__ = this;
var ___$1 = this;
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(self__.owner,v);
});})(get_state))
;

om_tools.core.t21538.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (get_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return (self__.get_state.cljs$core$IFn$_invoke$arity$0 ? self__.get_state.cljs$core$IFn$_invoke$arity$0() : self__.get_state.call(null));
});})(get_state))
;

om_tools.core.t21538.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (get_state){
return (function (_21540){
var self__ = this;
var _21540__$1 = this;
return self__.meta21539;
});})(get_state))
;

om_tools.core.t21538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (get_state){
return (function (_21540,meta21539__$1){
var self__ = this;
var _21540__$1 = this;
return (new om_tools.core.t21538(self__.get_state,self__.owner,self__.state_proxy,meta21539__$1));
});})(get_state))
;

om_tools.core.t21538.cljs$lang$type = true;

om_tools.core.t21538.cljs$lang$ctorStr = "om-tools.core/t21538";

om_tools.core.t21538.cljs$lang$ctorPrWriter = ((function (get_state){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"om-tools.core/t21538");
});})(get_state))
;

om_tools.core.__GT_t21538 = ((function (get_state){
return (function __GT_t21538(get_state__$1,owner__$1,state_proxy__$1,meta21539){
return (new om_tools.core.t21538(get_state__$1,owner__$1,state_proxy__$1,meta21539));
});})(get_state))
;

}

return (new om_tools.core.t21538(get_state,owner,state_proxy,cljs.core.PersistentArrayMap.EMPTY));
} else {
return null;
}
});
/**
* Calls om.core/set-state! when current value not= to v and returns
* updated owner, otherwise nil.
* Used to prevent no-op updates from entering render queue
*/
om_tools.core.set_state_QMARK__BANG_ = (function() {
var set_state_QMARK__BANG_ = null;
var set_state_QMARK__BANG___2 = (function (owner,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner))){
return null;
} else {
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,v);
}
});
var set_state_QMARK__BANG___3 = (function (owner,korks,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks))){
return null;
} else {
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,v);
}
});
set_state_QMARK__BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return set_state_QMARK__BANG___2.call(this,owner,korks);
case 3:
return set_state_QMARK__BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_state_QMARK__BANG_.cljs$core$IFn$_invoke$arity$2 = set_state_QMARK__BANG___2;
set_state_QMARK__BANG_.cljs$core$IFn$_invoke$arity$3 = set_state_QMARK__BANG___3;
return set_state_QMARK__BANG_;
})()
;

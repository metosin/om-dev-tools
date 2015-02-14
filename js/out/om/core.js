// Compiled by ClojureScript 0.0-2850 {}
goog.provide('om.core');
goog.require('cljs.core');
goog.require('goog.ui.IdGenerator');
goog.require('goog.dom');
goog.require('om.dom');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;

om.core.IDisplayName = (function (){var obj32779 = {};
return obj32779;
})();

om.core.display_name = (function display_name(this$){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IDisplayName$display_name$arity$1;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core.display_name[(function (){var G__32783 = x__4459__auto__;
return goog.typeOf(G__32783);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core.display_name["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IDisplayName.display-name",this$);
}
}
})().call(null,this$);
}
});


om.core.IInitState = (function (){var obj32785 = {};
return obj32785;
})();

om.core.init_state = (function init_state(this$){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IInitState$init_state$arity$1;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core.init_state[(function (){var G__32789 = x__4459__auto__;
return goog.typeOf(G__32789);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core.init_state["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IInitState.init-state",this$);
}
}
})().call(null,this$);
}
});


om.core.IShouldUpdate = (function (){var obj32791 = {};
return obj32791;
})();

om.core.should_update = (function should_update(this$,next_props,next_state){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IShouldUpdate$should_update$arity$3;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core.should_update[(function (){var G__32795 = x__4459__auto__;
return goog.typeOf(G__32795);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core.should_update["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IShouldUpdate.should-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IWillMount = (function (){var obj32797 = {};
return obj32797;
})();

om.core.will_mount = (function will_mount(this$){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IWillMount$will_mount$arity$1;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core.will_mount[(function (){var G__32801 = x__4459__auto__;
return goog.typeOf(G__32801);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core.will_mount["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IWillMount.will-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IDidMount = (function (){var obj32803 = {};
return obj32803;
})();

om.core.did_mount = (function did_mount(this$){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IDidMount$did_mount$arity$1;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core.did_mount[(function (){var G__32807 = x__4459__auto__;
return goog.typeOf(G__32807);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core.did_mount["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IDidMount.did-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUnmount = (function (){var obj32809 = {};
return obj32809;
})();

om.core.will_unmount = (function will_unmount(this$){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IWillUnmount$will_unmount$arity$1;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core.will_unmount[(function (){var G__32813 = x__4459__auto__;
return goog.typeOf(G__32813);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core.will_unmount["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IWillUnmount.will-unmount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUpdate = (function (){var obj32815 = {};
return obj32815;
})();

om.core.will_update = (function will_update(this$,next_props,next_state){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IWillUpdate$will_update$arity$3;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core.will_update[(function (){var G__32819 = x__4459__auto__;
return goog.typeOf(G__32819);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core.will_update["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IWillUpdate.will-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IDidUpdate = (function (){var obj32821 = {};
return obj32821;
})();

om.core.did_update = (function did_update(this$,prev_props,prev_state){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IDidUpdate$did_update$arity$3;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core.did_update[(function (){var G__32825 = x__4459__auto__;
return goog.typeOf(G__32825);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core.did_update["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IDidUpdate.did-update",this$);
}
}
})().call(null,this$,prev_props,prev_state);
}
});


om.core.IWillReceiveProps = (function (){var obj32827 = {};
return obj32827;
})();

om.core.will_receive_props = (function will_receive_props(this$,next_props){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core.will_receive_props[(function (){var G__32831 = x__4459__auto__;
return goog.typeOf(G__32831);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core.will_receive_props["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IWillReceiveProps.will-receive-props",this$);
}
}
})().call(null,this$,next_props);
}
});


om.core.IRender = (function (){var obj32833 = {};
return obj32833;
})();

om.core.render = (function render(this$){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IRender$render$arity$1;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core.render[(function (){var G__32837 = x__4459__auto__;
return goog.typeOf(G__32837);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core.render["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IRender.render",this$);
}
}
})().call(null,this$);
}
});


om.core.IRenderProps = (function (){var obj32839 = {};
return obj32839;
})();

om.core.render_props = (function render_props(this$,props,state){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IRenderProps$render_props$arity$3;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core.render_props[(function (){var G__32843 = x__4459__auto__;
return goog.typeOf(G__32843);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core.render_props["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderProps.render-props",this$);
}
}
})().call(null,this$,props,state);
}
});


om.core.IRenderState = (function (){var obj32845 = {};
return obj32845;
})();

om.core.render_state = (function render_state(this$,state){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IRenderState$render_state$arity$2;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core.render_state[(function (){var G__32849 = x__4459__auto__;
return goog.typeOf(G__32849);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core.render_state["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderState.render-state",this$);
}
}
})().call(null,this$,state);
}
});


om.core.ICheckState = (function (){var obj32851 = {};
return obj32851;
})();


om.core.IOmSwap = (function (){var obj32853 = {};
return obj32853;
})();

om.core._om_swap_BANG_ = (function _om_swap_BANG_(this$,cursor,korks,f,tag){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core._om_swap_BANG_[(function (){var G__32857 = x__4459__auto__;
return goog.typeOf(G__32857);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmSwap.-om-swap!",this$);
}
}
})().call(null,this$,cursor,korks,f,tag);
}
});


om.core.IGetState = (function (){var obj32859 = {};
return obj32859;
})();

om.core._get_state = (function() {
var _get_state = null;
var _get_state__1 = (function (this$){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IGetState$_get_state$arity$1;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core._get_state[(function (){var G__32865 = x__4459__auto__;
return goog.typeOf(G__32865);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._get_state["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IGetState.-get-state",this$);
}
}
})().call(null,this$);
}
});
var _get_state__2 = (function (this$,ks){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IGetState$_get_state$arity$2;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core._get_state[(function (){var G__32867 = x__4459__auto__;
return goog.typeOf(G__32867);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._get_state["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IGetState.-get-state",this$);
}
}
})().call(null,this$,ks);
}
});
_get_state = function(this$,ks){
switch(arguments.length){
case 1:
return _get_state__1.call(this,this$);
case 2:
return _get_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_get_state.cljs$core$IFn$_invoke$arity$1 = _get_state__1;
_get_state.cljs$core$IFn$_invoke$arity$2 = _get_state__2;
return _get_state;
})()
;


om.core.IGetRenderState = (function (){var obj32869 = {};
return obj32869;
})();

om.core._get_render_state = (function() {
var _get_render_state = null;
var _get_render_state__1 = (function (this$){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$1;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core._get_render_state[(function (){var G__32875 = x__4459__auto__;
return goog.typeOf(G__32875);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._get_render_state["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$);
}
});
var _get_render_state__2 = (function (this$,ks){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$2;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core._get_render_state[(function (){var G__32877 = x__4459__auto__;
return goog.typeOf(G__32877);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._get_render_state["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$,ks);
}
});
_get_render_state = function(this$,ks){
switch(arguments.length){
case 1:
return _get_render_state__1.call(this,this$);
case 2:
return _get_render_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_get_render_state.cljs$core$IFn$_invoke$arity$1 = _get_render_state__1;
_get_render_state.cljs$core$IFn$_invoke$arity$2 = _get_render_state__2;
return _get_render_state;
})()
;


om.core.ISetState = (function (){var obj32879 = {};
return obj32879;
})();

om.core._set_state_BANG_ = (function() {
var _set_state_BANG_ = null;
var _set_state_BANG___3 = (function (this$,val,render){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$3;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core._set_state_BANG_[(function (){var G__32885 = x__4459__auto__;
return goog.typeOf(G__32885);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("ISetState.-set-state!",this$);
}
}
})().call(null,this$,val,render);
}
});
var _set_state_BANG___4 = (function (this$,ks,val,render){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$4;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core._set_state_BANG_[(function (){var G__32887 = x__4459__auto__;
return goog.typeOf(G__32887);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("ISetState.-set-state!",this$);
}
}
})().call(null,this$,ks,val,render);
}
});
_set_state_BANG_ = function(this$,ks,val,render){
switch(arguments.length){
case 3:
return _set_state_BANG___3.call(this,this$,ks,val);
case 4:
return _set_state_BANG___4.call(this,this$,ks,val,render);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = _set_state_BANG___3;
_set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = _set_state_BANG___4;
return _set_state_BANG_;
})()
;


om.core.IRenderQueue = (function (){var obj32889 = {};
return obj32889;
})();

om.core._get_queue = (function _get_queue(this$){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IRenderQueue$_get_queue$arity$1;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core._get_queue[(function (){var G__32893 = x__4459__auto__;
return goog.typeOf(G__32893);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._get_queue["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderQueue.-get-queue",this$);
}
}
})().call(null,this$);
}
});

om.core._queue_render_BANG_ = (function _queue_render_BANG_(this$,c){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core._queue_render_BANG_[(function (){var G__32897 = x__4459__auto__;
return goog.typeOf(G__32897);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderQueue.-queue-render!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._empty_queue_BANG_ = (function _empty_queue_BANG_(this$){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core._empty_queue_BANG_[(function (){var G__32901 = x__4459__auto__;
return goog.typeOf(G__32901);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderQueue.-empty-queue!",this$);
}
}
})().call(null,this$);
}
});


om.core.IValue = (function (){var obj32903 = {};
return obj32903;
})();

om.core._value = (function _value(x){
if((function (){var and__3803__auto__ = x;
if(and__3803__auto__){
return x.om$core$IValue$_value$arity$1;
} else {
return and__3803__auto__;
}
})()){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__4459__auto__ = (((x == null))?null:x);
return (function (){var or__3815__auto__ = (om.core._value[(function (){var G__32907 = x__4459__auto__;
return goog.typeOf(G__32907);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._value["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IValue.-value",x);
}
}
})().call(null,x);
}
});

(om.core.IValue["_"] = true);

(om.core._value["_"] = (function (x){
return x;
}));

om.core.ICursor = (function (){var obj32909 = {};
return obj32909;
})();

om.core._path = (function _path(cursor){
if((function (){var and__3803__auto__ = cursor;
if(and__3803__auto__){
return cursor.om$core$ICursor$_path$arity$1;
} else {
return and__3803__auto__;
}
})()){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__4459__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3815__auto__ = (om.core._path[(function (){var G__32913 = x__4459__auto__;
return goog.typeOf(G__32913);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._path["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("ICursor.-path",cursor);
}
}
})().call(null,cursor);
}
});

om.core._state = (function _state(cursor){
if((function (){var and__3803__auto__ = cursor;
if(and__3803__auto__){
return cursor.om$core$ICursor$_state$arity$1;
} else {
return and__3803__auto__;
}
})()){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__4459__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3815__auto__ = (om.core._state[(function (){var G__32917 = x__4459__auto__;
return goog.typeOf(G__32917);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._state["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("ICursor.-state",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IToCursor = (function (){var obj32919 = {};
return obj32919;
})();

om.core._to_cursor = (function() {
var _to_cursor = null;
var _to_cursor__2 = (function (value,state){
if((function (){var and__3803__auto__ = value;
if(and__3803__auto__){
return value.om$core$IToCursor$_to_cursor$arity$2;
} else {
return and__3803__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__4459__auto__ = (((value == null))?null:value);
return (function (){var or__3815__auto__ = (om.core._to_cursor[(function (){var G__32925 = x__4459__auto__;
return goog.typeOf(G__32925);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._to_cursor["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
}
}
})().call(null,value,state);
}
});
var _to_cursor__3 = (function (value,state,path){
if((function (){var and__3803__auto__ = value;
if(and__3803__auto__){
return value.om$core$IToCursor$_to_cursor$arity$3;
} else {
return and__3803__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__4459__auto__ = (((value == null))?null:value);
return (function (){var or__3815__auto__ = (om.core._to_cursor[(function (){var G__32927 = x__4459__auto__;
return goog.typeOf(G__32927);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._to_cursor["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
}
}
})().call(null,value,state,path);
}
});
_to_cursor = function(value,state,path){
switch(arguments.length){
case 2:
return _to_cursor__2.call(this,value,state);
case 3:
return _to_cursor__3.call(this,value,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_to_cursor.cljs$core$IFn$_invoke$arity$2 = _to_cursor__2;
_to_cursor.cljs$core$IFn$_invoke$arity$3 = _to_cursor__3;
return _to_cursor;
})()
;


om.core.ICursorDerive = (function (){var obj32929 = {};
return obj32929;
})();

om.core._derive = (function _derive(cursor,derived,state,path){
if((function (){var and__3803__auto__ = cursor;
if(and__3803__auto__){
return cursor.om$core$ICursorDerive$_derive$arity$4;
} else {
return and__3803__auto__;
}
})()){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__4459__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3815__auto__ = (om.core._derive[(function (){var G__32933 = x__4459__auto__;
return goog.typeOf(G__32933);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._derive["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("ICursorDerive.-derive",cursor);
}
}
})().call(null,cursor,derived,state,path);
}
});

(om.core.ICursorDerive["_"] = true);

(om.core._derive["_"] = (function (this$,derived,state,path){
var G__32934 = derived;
var G__32935 = state;
var G__32936 = path;
return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(G__32934,G__32935,G__32936) : om.core.to_cursor.call(null,G__32934,G__32935,G__32936));
}));
om.core.path = (function path(cursor){
return om.core._path(cursor);
});
om.core.value = (function value(cursor){
return om.core._value(cursor);
});
om.core.state = (function state(cursor){
return om.core._state(cursor);
});

om.core.ITransact = (function (){var obj32938 = {};
return obj32938;
})();

om.core._transact_BANG_ = (function _transact_BANG_(cursor,korks,f,tag){
if((function (){var and__3803__auto__ = cursor;
if(and__3803__auto__){
return cursor.om$core$ITransact$_transact_BANG_$arity$4;
} else {
return and__3803__auto__;
}
})()){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__4459__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3815__auto__ = (om.core._transact_BANG_[(function (){var G__32942 = x__4459__auto__;
return goog.typeOf(G__32942);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._transact_BANG_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransact.-transact!",cursor);
}
}
})().call(null,cursor,korks,f,tag);
}
});


om.core.INotify = (function (){var obj32944 = {};
return obj32944;
})();

om.core._listen_BANG_ = (function _listen_BANG_(x,key,tx_listen){
if((function (){var and__3803__auto__ = x;
if(and__3803__auto__){
return x.om$core$INotify$_listen_BANG_$arity$3;
} else {
return and__3803__auto__;
}
})()){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__4459__auto__ = (((x == null))?null:x);
return (function (){var or__3815__auto__ = (om.core._listen_BANG_[(function (){var G__32948 = x__4459__auto__;
return goog.typeOf(G__32948);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._listen_BANG_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("INotify.-listen!",x);
}
}
})().call(null,x,key,tx_listen);
}
});

om.core._unlisten_BANG_ = (function _unlisten_BANG_(x,key){
if((function (){var and__3803__auto__ = x;
if(and__3803__auto__){
return x.om$core$INotify$_unlisten_BANG_$arity$2;
} else {
return and__3803__auto__;
}
})()){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__4459__auto__ = (((x == null))?null:x);
return (function (){var or__3815__auto__ = (om.core._unlisten_BANG_[(function (){var G__32952 = x__4459__auto__;
return goog.typeOf(G__32952);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("INotify.-unlisten!",x);
}
}
})().call(null,x,key);
}
});

om.core._notify_BANG_ = (function _notify_BANG_(x,tx_data,root_cursor){
if((function (){var and__3803__auto__ = x;
if(and__3803__auto__){
return x.om$core$INotify$_notify_BANG_$arity$3;
} else {
return and__3803__auto__;
}
})()){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__4459__auto__ = (((x == null))?null:x);
return (function (){var or__3815__auto__ = (om.core._notify_BANG_[(function (){var G__32956 = x__4459__auto__;
return goog.typeOf(G__32956);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._notify_BANG_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("INotify.-notify!",x);
}
}
})().call(null,x,tx_data,root_cursor);
}
});


om.core.IRootProperties = (function (){var obj32958 = {};
return obj32958;
})();

om.core._set_property_BANG_ = (function _set_property_BANG_(this$,id,p,val){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core._set_property_BANG_[(function (){var G__32962 = x__4459__auto__;
return goog.typeOf(G__32962);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._set_property_BANG_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootProperties.-set-property!",this$);
}
}
})().call(null,this$,id,p,val);
}
});

om.core._remove_property_BANG_ = (function _remove_property_BANG_(this$,id,p){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core._remove_property_BANG_[(function (){var G__32966 = x__4459__auto__;
return goog.typeOf(G__32966);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._remove_property_BANG_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootProperties.-remove-property!",this$);
}
}
})().call(null,this$,id,p);
}
});

om.core._remove_properties_BANG_ = (function _remove_properties_BANG_(this$,id){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core._remove_properties_BANG_[(function (){var G__32970 = x__4459__auto__;
return goog.typeOf(G__32970);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._remove_properties_BANG_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootProperties.-remove-properties!",this$);
}
}
})().call(null,this$,id);
}
});

om.core._get_property = (function _get_property(this$,id,p){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IRootProperties$_get_property$arity$3;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core._get_property[(function (){var G__32974 = x__4459__auto__;
return goog.typeOf(G__32974);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._get_property["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootProperties.-get-property",this$);
}
}
})().call(null,this$,id,p);
}
});


om.core.IRootKey = (function (){var obj32976 = {};
return obj32976;
})();

om.core._root_key = (function _root_key(cursor){
if((function (){var and__3803__auto__ = cursor;
if(and__3803__auto__){
return cursor.om$core$IRootKey$_root_key$arity$1;
} else {
return and__3803__auto__;
}
})()){
return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else {
var x__4459__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3815__auto__ = (om.core._root_key[(function (){var G__32980 = x__4459__auto__;
return goog.typeOf(G__32980);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._root_key["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootKey.-root-key",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IAdapt = (function (){var obj32982 = {};
return obj32982;
})();

om.core._adapt = (function _adapt(this$,other){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IAdapt$_adapt$arity$2;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core._adapt[(function (){var G__32986 = x__4459__auto__;
return goog.typeOf(G__32986);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._adapt["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IAdapt.-adapt",this$);
}
}
})().call(null,this$,other);
}
});

(om.core.IAdapt["_"] = true);

(om.core._adapt["_"] = (function (_,other){
return other;
}));
om.core.adapt = (function adapt(x,other){
return om.core._adapt(x,other);
});

om.core.IOmRef = (function (){var obj32988 = {};
return obj32988;
})();

om.core._add_dep_BANG_ = (function _add_dep_BANG_(this$,c){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core._add_dep_BANG_[(function (){var G__32992 = x__4459__auto__;
return goog.typeOf(G__32992);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._add_dep_BANG_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmRef.-add-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._remove_dep_BANG_ = (function _remove_dep_BANG_(this$,c){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core._remove_dep_BANG_[(function (){var G__32996 = x__4459__auto__;
return goog.typeOf(G__32996);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._remove_dep_BANG_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmRef.-remove-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._refresh_deps_BANG_ = (function _refresh_deps_BANG_(this$){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core._refresh_deps_BANG_[(function (){var G__33000 = x__4459__auto__;
return goog.typeOf(G__33000);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._refresh_deps_BANG_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmRef.-refresh-deps!",this$);
}
}
})().call(null,this$);
}
});

om.core._get_deps = (function _get_deps(this$){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IOmRef$_get_deps$arity$1;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core._get_deps[(function (){var G__33004 = x__4459__auto__;
return goog.typeOf(G__33004);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._get_deps["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmRef.-get-deps",this$);
}
}
})().call(null,this$);
}
});


om.core.transact_STAR_ = (function transact_STAR_(state,cursor,korks,f,tag){
var old_state = (function (){var G__33014 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33014) : cljs.core.deref.call(null,G__33014));
})();
var path = cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var G__33015 = cursor;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__33015) : om.core.path.call(null,G__33015));
})(),korks);
var ret = (((function (){var G__33016 = state;
if(G__33016){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__33016.om$core$IOmSwap$;
}
})())){
return true;
} else {
if((!G__33016.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,G__33016);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,G__33016);
}
})())?om.core._om_swap_BANG_(state,cursor,korks,f,tag):((cljs.core.empty_QMARK_(path))?cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,f):cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.constant$keyword$54)){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$55,path,cljs.core.constant$keyword$56,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,path),cljs.core.constant$keyword$57,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__33017 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33017) : cljs.core.deref.call(null,G__33017));
})(),path),cljs.core.constant$keyword$58,old_state,cljs.core.constant$keyword$59,(function (){var G__33018 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33018) : cljs.core.deref.call(null,G__33018));
})()], null);
if(!((tag == null))){
var G__33019 = cursor;
var G__33020 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx_data,cljs.core.constant$keyword$60,tag);
return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(G__33019,G__33020) : om.core.notify_STAR_.call(null,G__33019,G__33020));
} else {
var G__33021 = cursor;
var G__33022 = tx_data;
return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(G__33021,G__33022) : om.core.notify_STAR_.call(null,G__33021,G__33022));
}
}
});
om.core.cursor_QMARK_ = (function cursor_QMARK_(x){
var G__33024 = x;
if(G__33024){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__33024.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__33024.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__33024);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__33024);
}
});
om.core.component_QMARK_ = (function component_QMARK_(x){
return (x["isOmComponent"]);
});
om.core.children = (function children(node){
var c = node.props.children;
if(cljs.core.ifn_QMARK_(c)){
return node.props.children = (function (){var G__33026 = node;
return (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(G__33026) : c.call(null,G__33026));
})();
} else {
return c;
}
});
/**
* Given an owning Pure node return the Om props. Analogous to React
* component props.
*/
om.core.get_props = (function() {
var get_props = null;
var get_props__1 = (function (x){
if(cljs.core.truth_(om.core.component_QMARK_(x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))], 0)))].join('')));
}

return (x.props["__om_cursor"]);
});
var get_props__2 = (function (x,korks){
if(cljs.core.truth_(om.core.component_QMARK_(x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))], 0)))].join('')));
}

var korks__$1 = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
var G__33028 = (x.props["__om_cursor"]);
var G__33028__$1 = ((cljs.core.seq(korks__$1))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__33028,korks__$1):G__33028);
return G__33028__$1;
});
get_props = function(x,korks){
switch(arguments.length){
case 1:
return get_props__1.call(this,x);
case 2:
return get_props__2.call(this,x,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_props.cljs$core$IFn$_invoke$arity$1 = get_props__1;
get_props.cljs$core$IFn$_invoke$arity$2 = get_props__2;
return get_props;
})()
;
/**
* Returns the component local state of an owning component. owner is
* the component. An optional key or sequence of keys may be given to
* extract a specific value. Always returns pending state.
*/
om.core.get_state = (function() {
var get_state = null;
var get_state__1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

return om.core._get_state.cljs$core$IFn$_invoke$arity$1(owner);
});
var get_state__2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_state.cljs$core$IFn$_invoke$arity$2(owner,ks);
});
get_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_state__1.call(this,owner);
case 2:
return get_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_state.cljs$core$IFn$_invoke$arity$1 = get_state__1;
get_state.cljs$core$IFn$_invoke$arity$2 = get_state__2;
return get_state;
})()
;
/**
* Takes an owner and returns a map of global shared values for a
* render loop. An optional key or sequence of keys may be given to
* extract a specific value.
*/
om.core.get_shared = (function() {
var get_shared = null;
var get_shared__1 = (function (owner){
if((owner == null)){
return null;
} else {
return (owner.props["__om_shared"]);
}
});
var get_shared__2 = (function (owner,korks){
if(!(cljs.core.sequential_QMARK_(korks))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(get_shared.cljs$core$IFn$_invoke$arity$1(owner),korks);
} else {
if(cljs.core.empty_QMARK_(korks)){
return get_shared.cljs$core$IFn$_invoke$arity$1(owner);
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(get_shared.cljs$core$IFn$_invoke$arity$1(owner),korks);

}
}
});
get_shared = function(owner,korks){
switch(arguments.length){
case 1:
return get_shared__1.call(this,owner);
case 2:
return get_shared__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_shared.cljs$core$IFn$_invoke$arity$1 = get_shared__1;
get_shared.cljs$core$IFn$_invoke$arity$2 = get_shared__2;
return get_shared;
})()
;
om.core.merge_pending_state = (function merge_pending_state(owner){
var state = owner.state;
var temp__4126__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(temp__4126__auto__)){
var pending_state = temp__4126__auto__;
var G__33033 = state;
(G__33033["__om_prev_state"] = (state["__om_state"]));

(G__33033["__om_state"] = pending_state);

(G__33033["__om_pending_state"] = null);

return G__33033;
} else {
return null;
}
});
om.core.merge_props_state = (function() {
var merge_props_state = null;
var merge_props_state__1 = (function (owner){
return merge_props_state.cljs$core$IFn$_invoke$arity$2(owner,null);
});
var merge_props_state__2 = (function (owner,props){
var props__$1 = (function (){var or__3815__auto__ = props;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return owner.props;
}
})();
var temp__4126__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4126__auto__)){
var props_state = temp__4126__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var or__3815__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return (state["__om_state"]);
}
})(),props_state], 0)));

return (props__$1["__om_state"] = null);
} else {
return null;
}
});
merge_props_state = function(owner,props){
switch(arguments.length){
case 1:
return merge_props_state__1.call(this,owner);
case 2:
return merge_props_state__2.call(this,owner,props);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge_props_state.cljs$core$IFn$_invoke$arity$1 = merge_props_state__1;
merge_props_state.cljs$core$IFn$_invoke$arity$2 = merge_props_state__2;
return merge_props_state;
})()
;
om.core.ref_changed_QMARK_ = (function ref_changed_QMARK_(ref){
var val = om.core.value(ref);
var val_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__33038 = om.core.state(ref);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33038) : cljs.core.deref.call(null,G__33038));
})(),(function (){var G__33039 = ref;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__33039) : om.core.path.call(null,G__33039));
})(),cljs.core.constant$keyword$61);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function update_refs(c){
var cstate = c.state;
var refs = (cstate["__om_refs"]);
if((cljs.core.count(refs) === (0))){
return null;
} else {
return (cstate["__om_refs"] = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cstate,refs){
return (function (ref){
var ref_val = om.core.value(ref);
var ref_state = om.core.state(ref);
var ref_path = (function (){var G__33045 = ref;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__33045) : om.core.path.call(null,G__33045));
})();
var ref_val_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__33046 = ref_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33046) : cljs.core.deref.call(null,G__33046));
})(),ref_path,cljs.core.constant$keyword$61);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref_val,cljs.core.constant$keyword$61)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref_val,ref_val_SINGLEQUOTE_)){
return om.core.adapt(ref,(function (){var G__33047 = ref_val_SINGLEQUOTE_;
var G__33048 = ref_state;
var G__33049 = ref_path;
return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(G__33047,G__33048,G__33049) : om.core.to_cursor.call(null,G__33047,G__33048,G__33049));
})());
} else {
return ref;
}
} else {
return null;
}
});})(cstate,refs))
,refs))));
}
});
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$62,cljs.core.constant$keyword$63,cljs.core.constant$keyword$64,cljs.core.constant$keyword$65,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69,cljs.core.constant$keyword$70,cljs.core.constant$keyword$71,cljs.core.constant$keyword$72],[(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children(this$);
if((function (){var G__33051 = c;
if(G__33051){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__33051.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__33051.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__33051);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__33051);
}
})()){
var state_33076 = this$.state;
om.core.did_update(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": prev_props}),(function (){var or__3815__auto__ = (state_33076["__om_prev_state"]);
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return (state_33076["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children(this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__33052 = c;
if(G__33052){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__33052.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__33052.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__33052);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__33052);
}
})()){
om.core.will_unmount(c);
} else {
}

var temp__4126__auto__ = cljs.core.seq((this$.state["__om_refs"]));
if(temp__4126__auto__){
var refs = temp__4126__auto__;
var seq__33053 = cljs.core.seq(refs);
var chunk__33054 = null;
var count__33055 = (0);
var i__33056 = (0);
while(true){
if((i__33056 < count__33055)){
var ref = chunk__33054.cljs$core$IIndexed$_nth$arity$2(null,i__33056);
var G__33057_33077 = this$;
var G__33058_33078 = ref;
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__33057_33077,G__33058_33078) : om.core.unobserve.call(null,G__33057_33077,G__33058_33078));

var G__33079 = seq__33053;
var G__33080 = chunk__33054;
var G__33081 = count__33055;
var G__33082 = (i__33056 + (1));
seq__33053 = G__33079;
chunk__33054 = G__33080;
count__33055 = G__33081;
i__33056 = G__33082;
continue;
} else {
var temp__4126__auto____$1 = cljs.core.seq(seq__33053);
if(temp__4126__auto____$1){
var seq__33053__$1 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__33053__$1)){
var c__4602__auto__ = cljs.core.chunk_first(seq__33053__$1);
var G__33083 = cljs.core.chunk_rest(seq__33053__$1);
var G__33084 = c__4602__auto__;
var G__33085 = cljs.core.count(c__4602__auto__);
var G__33086 = (0);
seq__33053 = G__33083;
chunk__33054 = G__33084;
count__33055 = G__33085;
i__33056 = G__33086;
continue;
} else {
var ref = cljs.core.first(seq__33053__$1);
var G__33059_33087 = this$;
var G__33060_33088 = ref;
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__33059_33087,G__33060_33088) : om.core.unobserve.call(null,G__33059_33087,G__33060_33088));

var G__33089 = cljs.core.next(seq__33053__$1);
var G__33090 = null;
var G__33091 = (0);
var G__33092 = (0);
seq__33053 = G__33089;
chunk__33054 = G__33090;
count__33055 = G__33091;
i__33056 = G__33092;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),(function (next_props){
var this$ = this;
var c = om.core.children(this$);
if((function (){var G__33061 = c;
if(G__33061){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__33061.om$core$IWillReceiveProps$;
}
})())){
return true;
} else {
if((!G__33061.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,G__33061);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,G__33061);
}
})()){
return om.core.will_receive_props(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": next_props}));
} else {
return null;
}
}),(function (next_props,next_state){
var this$ = this;
var props = this$.props;
var state = this$.state;
var c = om.core.children(this$);
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2(this$,next_props);

if((function (){var G__33062 = c;
if(G__33062){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__33062.om$core$IShouldUpdate$;
}
})())){
return true;
} else {
if((!G__33062.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,G__33062);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,G__33062);
}
})()){
return om.core.should_update(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
var cursor = (props["__om_cursor"]);
var next_cursor = (next_props["__om_cursor"]);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._value(cursor),om.core._value(next_cursor))){
return true;
} else {
if((om.core.cursor_QMARK_(cursor)) && (om.core.cursor_QMARK_(next_cursor)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._path(cursor),om.core._path(next_cursor)))){
return true;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$),om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$))){
return true;
} else {
if(cljs.core.truth_((function (){var and__3803__auto__ = !((cljs.core.count((state["__om_refs"])) === (0)));
if(and__3803__auto__){
return cljs.core.some(((function (and__3803__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__33050_SHARP_){
return om.core.ref_changed_QMARK_(p1__33050_SHARP_);
});})(and__3803__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else {
return and__3803__auto__;
}
})())){
return true;
} else {
if(!(((props["__om_index"]) === (next_props["__om_index"])))){
return true;
} else {
return false;

}
}
}
}
}
}
}),(function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var _STAR_parent_STAR_33063 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_33064 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_33065 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_33066 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_33067 = om.core._STAR_root_key_STAR_;
om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

try{if((function (){var G__33068 = c;
if(G__33068){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__33068.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__33068.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__33068);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__33068);
}
})()){
return om.core.render(c);
} else {
if((function (){var G__33069 = c;
if(G__33069){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__33069.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__33069.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__33069);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__33069);
}
})()){
return om.core.render_props(c,(props["__om_cursor"]),om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
if((function (){var G__33070 = c;
if(G__33070){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__33070.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__33070.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__33070);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__33070);
}
})()){
return om.core.render_state(c,om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_33067;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_33066;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_33065;

om.core._STAR_state_STAR_ = _STAR_state_STAR_33064;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_33063;
}}),(function (next_props,next_state){
var this$ = this;
var c_33093 = om.core.children(this$);
if((function (){var G__33071 = c_33093;
if(G__33071){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__33071.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__33071.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__33071);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__33071);
}
})()){
var state_33094 = this$.state;
om.core.will_update(c_33093,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
}

om.core.merge_pending_state(this$);

return om.core.update_refs(this$);
}),(function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var istate = (function (){var or__3815__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = cljs.core.constant$keyword$73.cljs$core$IFn$_invoke$arity$1(istate);
var ret = {"__om_state": cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(((function (){var G__33072 = c;
if(G__33072){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__33072.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__33072.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__33072);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__33072);
}
})())?om.core.init_state(c):null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,cljs.core.constant$keyword$73)], 0)), "__om_id": (function (){var or__3815__auto__ = id;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})()};
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children(this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__33073 = c;
if(G__33073){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__33073.om$core$IDidMount$;
}
})())){
return true;
} else {
if((!G__33073.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDidMount,G__33073);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDidMount,G__33073);
}
})()){
return om.core.did_mount(c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children(this$);
if((function (){var G__33074 = c;
if(G__33074){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__33074.om$core$IDisplayName$;
}
})())){
return true;
} else {
if((!G__33074.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,G__33074);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,G__33074);
}
})()){
return om.core.display_name(c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);

var c_33095 = om.core.children(this$);
if((function (){var G__33075 = c_33095;
if(G__33075){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__33075.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__33075.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__33075);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__33075);
}
})()){
om.core.will_mount(c_33095);
} else {
}

return om.core.merge_pending_state(this$);
})]);
om.core.specify_state_methods_BANG_ = (function specify_state_methods_BANG_(obj){
var x33097 = obj;
x33097.om$core$IGetState$ = true;

x33097.om$core$IGetState$_get_state$arity$1 = ((function (x33097){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__3815__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return (state["__om_state"]);
}
});})(x33097))
;

x33097.om$core$IGetState$_get_state$arity$2 = ((function (x33097){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x33097))
;

x33097.om$core$IGetRenderState$ = true;

x33097.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x33097){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x33097))
;

x33097.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x33097){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x33097))
;

x33097.om$core$ISetState$ = true;

x33097.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x33097){
return (function (this$,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__3803__auto__ = !((app_state == null));
if(and__3803__auto__){
return render;
} else {
return and__3803__auto__;
}
})())){
return om.core._queue_render_BANG_(app_state,this$__$1);
} else {
return null;
}
});})(x33097))
;

x33097.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x33097){
return (function (this$,ks,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in(pstate,ks,val));

if(cljs.core.truth_((function (){var and__3803__auto__ = !((app_state == null));
if(and__3803__auto__){
return render;
} else {
return and__3803__auto__;
}
})())){
return om.core._queue_render_BANG_(app_state,this$__$1);
} else {
return null;
}
});})(x33097))
;

return x33097;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_(cljs.core.clj__GT_js(om.core.pure_methods));
om.core.react_id = (function react_id(x){
var id = (x["_rootNodeID"]);
if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"id","id",252129435,null)], 0)))].join('')));
}

return id;
});
om.core.get_gstate = (function get_gstate(owner){
return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function no_local_merge_pending_state(owner){
var gstate = om.core.get_gstate(owner);
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$74,om.core.react_id(owner)], null);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__33099 = gstate;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33099) : cljs.core.deref.call(null,G__33099));
})(),spath);
if(cljs.core.truth_(cljs.core.constant$keyword$75.cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(states__$1,cljs.core.constant$keyword$76,cljs.core.constant$keyword$77.cljs$core$IFn$_invoke$arity$1(states__$1)),cljs.core.constant$keyword$77,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$77.cljs$core$IFn$_invoke$arity$1(states__$1),cljs.core.constant$keyword$75.cljs$core$IFn$_invoke$arity$1(states__$1)], 0))),cljs.core.constant$keyword$75);
});})(gstate,spath,states))
);
} else {
return null;
}
});
om.core.no_local_state_methods = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(om.core.pure_methods,cljs.core.constant$keyword$69,(function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var istate = (function (){var or__3815__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var om_id = (function (){var or__3815__auto__ = cljs.core.constant$keyword$73.cljs$core$IFn$_invoke$arity$1(istate);
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();
var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,cljs.core.constant$keyword$73),(((function (){var G__33100 = c;
if(G__33100){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__33100.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__33100.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__33100);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__33100);
}
})())?om.core.init_state(c):null)], 0));
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$74,om.core.react_id(this$),cljs.core.constant$keyword$77], null);
(props["__om_init_state"] = null);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$),cljs.core.assoc_in,spath,state);

return {"__om_id": om_id};
}),cljs.core.array_seq([cljs.core.constant$keyword$72,(function (){
var this$ = this;
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);

var c_33114 = om.core.children(this$);
if((function (){var G__33101 = c_33114;
if(G__33101){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__33101.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__33101.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__33101);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__33101);
}
})()){
om.core.will_mount(c_33114);
} else {
}

return om.core.no_local_merge_pending_state(this$);
}),cljs.core.constant$keyword$64,(function (){
var this$ = this;
var c = om.core.children(this$);
if((function (){var G__33102 = c;
if(G__33102){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__33102.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__33102.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__33102);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__33102);
}
})()){
om.core.will_unmount(c);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(om.core.get_gstate(this$),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$74], null),cljs.core.dissoc,cljs.core.array_seq([om.core.react_id(this$)], 0));

var temp__4126__auto__ = cljs.core.seq((this$.state["__om_refs"]));
if(temp__4126__auto__){
var refs = temp__4126__auto__;
var seq__33103 = cljs.core.seq(refs);
var chunk__33104 = null;
var count__33105 = (0);
var i__33106 = (0);
while(true){
if((i__33106 < count__33105)){
var ref = chunk__33104.cljs$core$IIndexed$_nth$arity$2(null,i__33106);
var G__33107_33115 = this$;
var G__33108_33116 = ref;
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__33107_33115,G__33108_33116) : om.core.unobserve.call(null,G__33107_33115,G__33108_33116));

var G__33117 = seq__33103;
var G__33118 = chunk__33104;
var G__33119 = count__33105;
var G__33120 = (i__33106 + (1));
seq__33103 = G__33117;
chunk__33104 = G__33118;
count__33105 = G__33119;
i__33106 = G__33120;
continue;
} else {
var temp__4126__auto____$1 = cljs.core.seq(seq__33103);
if(temp__4126__auto____$1){
var seq__33103__$1 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__33103__$1)){
var c__4602__auto__ = cljs.core.chunk_first(seq__33103__$1);
var G__33121 = cljs.core.chunk_rest(seq__33103__$1);
var G__33122 = c__4602__auto__;
var G__33123 = cljs.core.count(c__4602__auto__);
var G__33124 = (0);
seq__33103 = G__33121;
chunk__33104 = G__33122;
count__33105 = G__33123;
i__33106 = G__33124;
continue;
} else {
var ref = cljs.core.first(seq__33103__$1);
var G__33109_33125 = this$;
var G__33110_33126 = ref;
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__33109_33125,G__33110_33126) : om.core.unobserve.call(null,G__33109_33125,G__33110_33126));

var G__33127 = cljs.core.next(seq__33103__$1);
var G__33128 = null;
var G__33129 = (0);
var G__33130 = (0);
seq__33103 = G__33127;
chunk__33104 = G__33128;
count__33105 = G__33129;
i__33106 = G__33130;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),cljs.core.constant$keyword$68,(function (next_props,next_state){
var this$ = this;
var props_33131 = this$.props;
var c_33132 = om.core.children(this$);
if((function (){var G__33111 = c_33132;
if(G__33111){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__33111.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__33111.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__33111);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__33111);
}
})()){
var state_33133 = this$.state;
om.core.will_update(c_33132,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
}

om.core.no_local_merge_pending_state(this$);

return om.core.update_refs(this$);
}),cljs.core.constant$keyword$62,(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children(this$);
var gstate = om.core.get_gstate(this$);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__33112 = gstate;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33112) : cljs.core.deref.call(null,G__33112));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$74,om.core.react_id(this$)], null));
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$74,om.core.react_id(this$)], null);
if((function (){var G__33113 = c;
if(G__33113){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__33113.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__33113.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__33113);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__33113);
}
})()){
var state_33134 = this$.state;
om.core.did_update(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": prev_props}),(function (){var or__3815__auto__ = cljs.core.constant$keyword$76.cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return cljs.core.constant$keyword$77.cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else {
}

if(cljs.core.truth_(cljs.core.constant$keyword$76.cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gstate,cljs.core.update_in,spath,cljs.core.dissoc,cljs.core.array_seq([cljs.core.constant$keyword$76], 0));
} else {
return null;
}
})], 0));
om.core.no_local_descriptor = (function no_local_descriptor(methods$){
var x33138 = cljs.core.clj__GT_js(methods$);
x33138.om$core$IGetState$ = true;

x33138.om$core$IGetState$_get_state$arity$1 = ((function (x33138){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$74,om.core.react_id(this$__$1)], null);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__33139 = om.core.get_gstate(this$__$1);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33139) : cljs.core.deref.call(null,G__33139));
})(),spath);
var or__3815__auto__ = cljs.core.constant$keyword$75.cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return cljs.core.constant$keyword$77.cljs$core$IFn$_invoke$arity$1(states);
}
});})(x33138))
;

x33138.om$core$IGetState$_get_state$arity$2 = ((function (x33138){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x33138))
;

x33138.om$core$IGetRenderState$ = true;

x33138.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x33138){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$74,om.core.react_id(this$__$1),cljs.core.constant$keyword$77], null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__33140 = om.core.get_gstate(this$__$1);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33140) : cljs.core.deref.call(null,G__33140));
})(),spath);
});})(x33138))
;

x33138.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x33138){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x33138))
;

x33138.om$core$ISetState$ = true;

x33138.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x33138){
return (function (this$,val,render){
var this$__$1 = this;
var gstate = om.core.get_gstate(this$__$1);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$74,om.core.react_id(this$__$1),cljs.core.constant$keyword$75], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$__$1),cljs.core.assoc_in,spath,val);

if(cljs.core.truth_((function (){var and__3803__auto__ = !((gstate == null));
if(and__3803__auto__){
return render;
} else {
return and__3803__auto__;
}
})())){
return om.core._queue_render_BANG_(gstate,this$__$1);
} else {
return null;
}
});})(x33138))
;

x33138.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x33138){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.assoc_in(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks,val),render);
});})(x33138))
;

return x33138;
});
om.core.valid_QMARK_ = (function valid_QMARK_(x){
if((function (){var G__33143 = x;
if(G__33143){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__33143.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__33143.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__33143);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__33143);
}
})()){
return !(cljs.core.keyword_identical_QMARK_((function (){var G__33144 = x;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33144) : cljs.core.deref.call(null,G__33144));
})(),cljs.core.constant$keyword$78));
} else {
return true;
}
});

/**
* @constructor
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2163640079;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this$__$1,k,null);
});

om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var v = cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.value,k,cljs.core.constant$keyword$61);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.constant$keyword$61))){
return om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k));
} else {
return not_found;
}
});

om.core.MapCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce(self__.value,f,init);
});

om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer(self__.value,writer,opts);
});

om.core.MapCursor.prototype.om$core$ICursor$ = true;

om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta(self__.value);
});

om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count(self__.value);
});

om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(self__.value);
});

om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(om.core.cursor_QMARK_(other)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,other);
}
});

om.core.MapCursor.prototype.om$core$IValue$ = true;

om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.empty(self__.value),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._dissoc(self__.value,k),self__.state,self__.path));
});

om.core.MapCursor.prototype.om$core$ITransact$ = true;

om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_(self__.state,this$__$1,korks,f,tag);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_(self__.value,k);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._assoc(self__.value,k,v),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.value) > (0))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__33146){
var vec__33147 = p__33146;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33147,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33147,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else {
return null;
}
});

om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.with_meta(self__.value,new_meta),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._conj(self__.value,o),self__.state,self__.path));
});

om.core.MapCursor.prototype.call = (function() {
var G__33149 = null;
var G__33149__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__33149__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__33149 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__33149__2.call(this,self__,k);
case 3:
return G__33149__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33149.cljs$core$IFn$_invoke$arity$2 = G__33149__2;
G__33149.cljs$core$IFn$_invoke$arity$3 = G__33149__3;
return G__33149;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args33145){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args33145)));
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__33148 = self__.state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33148) : cljs.core.deref.call(null,G__33148));
})(),self__.path,cljs.core.constant$keyword$78);
});

om.core.MapCursor.cljs$lang$type = true;

om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"om.core/MapCursor");
});

om.core.__GT_MapCursor = (function __GT_MapCursor(value,state,path){
return (new om.core.MapCursor(value,state,path));
});


/**
* @constructor
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2180424479;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(this$__$1,n,null);
});

om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(this$__$1,n,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce(self__.value,f,init);
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.value,n),self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n));
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if((n < cljs.core._count(self__.value))){
return om.core._derive(this$__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$3(self__.value,n,not_found),self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n));
} else {
return not_found;
}
});

om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer(self__.value,writer,opts);
});

om.core.IndexedCursor.prototype.om$core$ICursor$ = true;

om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta(self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count(self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._peek(self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._pop(self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(om.core.cursor_QMARK_(other)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,other);
}
});

om.core.IndexedCursor.prototype.om$core$IValue$ = true;

om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.empty(self__.value),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.om$core$ITransact$ = true;

om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_(self__.state,this$__$1,korks,f,tag);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_(self__.value,k);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._assoc_n(self__.value,n,v),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.value) > (0))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (this$__$1){
return (function (v,i){
return om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
} else {
return null;
}
});

om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.with_meta(self__.value,new_meta),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core._conj(self__.value,o),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.call = (function() {
var G__33152 = null;
var G__33152__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__33152__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__33152 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__33152__2.call(this,self__,k);
case 3:
return G__33152__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33152.cljs$core$IFn$_invoke$arity$2 = G__33152__2;
G__33152.cljs$core$IFn$_invoke$arity$3 = G__33152__3;
return G__33152;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args33150){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args33150)));
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__33151 = self__.state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33151) : cljs.core.deref.call(null,G__33151));
})(),self__.path,cljs.core.constant$keyword$78);
});

om.core.IndexedCursor.cljs$lang$type = true;

om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function __GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function to_cursor_STAR_(val,state,path){
var x33155 = cljs.core.clone(val);
x33155.cljs$core$IEquiv$ = true;

x33155.cljs$core$IEquiv$_equiv$arity$2 = ((function (x33155){
return (function (_,other){
var ___$1 = this;
if(om.core.cursor_QMARK_(other)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,other);
}
});})(x33155))
;

x33155.om$core$ITransact$ = true;

x33155.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x33155){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_(state,this$__$1,korks,f,tag);
});})(x33155))
;

x33155.om$core$ICursor$ = true;

x33155.om$core$ICursor$_path$arity$1 = ((function (x33155){
return (function (_){
var ___$1 = this;
return path;
});})(x33155))
;

x33155.om$core$ICursor$_state$arity$1 = ((function (x33155){
return (function (_){
var ___$1 = this;
return state;
});})(x33155))
;

x33155.cljs$core$IDeref$ = true;

x33155.cljs$core$IDeref$_deref$arity$1 = ((function (x33155){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__33156 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33156) : cljs.core.deref.call(null,G__33156));
})(),path,cljs.core.constant$keyword$78);
});})(x33155))
;

return x33155;
});
om.core.to_cursor = (function() {
var to_cursor = null;
var to_cursor__1 = (function (val){
return to_cursor.cljs$core$IFn$_invoke$arity$3(val,null,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__2 = (function (val,state){
return to_cursor.cljs$core$IFn$_invoke$arity$3(val,state,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__3 = (function (val,state,path){
if(om.core.cursor_QMARK_(val)){
return val;
} else {
if((function (){var G__33165 = val;
if(G__33165){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__33165.om$core$IToCursor$;
}
})())){
return true;
} else {
if((!G__33165.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IToCursor,G__33165);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IToCursor,G__33165);
}
})()){
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3(val,state,path);
} else {
if(cljs.core.indexed_QMARK_(val)){
return (new om.core.IndexedCursor(val,state,path));
} else {
if(cljs.core.map_QMARK_(val)){
return (new om.core.MapCursor(val,state,path));
} else {
if((function (){var G__33166 = val;
if(G__33166){
var bit__4496__auto__ = (G__33166.cljs$lang$protocol_mask$partition1$ & (8192));
if((bit__4496__auto__) || (G__33166.cljs$core$ICloneable$)){
return true;
} else {
if((!G__33166.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__33166);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__33166);
}
})()){
return om.core.to_cursor_STAR_(val,state,path);
} else {
return val;

}
}
}
}
}
});
to_cursor = function(val,state,path){
switch(arguments.length){
case 1:
return to_cursor__1.call(this,val);
case 2:
return to_cursor__2.call(this,val,state);
case 3:
return to_cursor__3.call(this,val,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
to_cursor.cljs$core$IFn$_invoke$arity$1 = to_cursor__1;
to_cursor.cljs$core$IFn$_invoke$arity$2 = to_cursor__2;
to_cursor.cljs$core$IFn$_invoke$arity$3 = to_cursor__3;
return to_cursor;
})()
;
om.core.notify_STAR_ = (function notify_STAR_(cursor,tx_data){
var state = om.core._state(cursor);
return om.core._notify_BANG_(state,tx_data,om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((function (){var G__33168 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33168) : cljs.core.deref.call(null,G__33168));
})(),state));
});


/**
* Given an application state atom return a root cursor for it.
*/
om.core.root_cursor = (function root_cursor(atom){
if((function (){var G__33171 = atom;
if(G__33171){
var bit__4496__auto__ = (G__33171.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4496__auto__) || (G__33171.cljs$core$IDeref$)){
return true;
} else {
if((!G__33171.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__33171);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__33171);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"atom","atom",1243487874,null))], 0)))].join('')));
}

return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((function (){var G__33172 = atom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33172) : cljs.core.deref.call(null,G__33172));
})(),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = (function (){var G__33173 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__33173) : cljs.core.atom.call(null,G__33173));
})();
om.core.ref_sub_cursor = (function ref_sub_cursor(x,parent){
var x33182 = cljs.core.clone(x);
x33182.om$core$ITransact$ = true;

x33182.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x33182){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
var G__33183_33186 = cursor__$1;
var G__33184_33187 = korks;
var G__33185_33188 = f;
(om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3 ? om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3(G__33183_33186,G__33184_33187,G__33185_33188) : om.core.commit_BANG_.call(null,G__33183_33186,G__33184_33187,G__33185_33188));

return om.core._refresh_deps_BANG_(parent);
});})(x33182))
;

x33182.om$core$ICursorDerive$ = true;

x33182.om$core$ICursorDerive$_derive$arity$4 = ((function (x33182){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path);
if(om.core.cursor_QMARK_(cursor_SINGLEQUOTE_)){
return om.core.adapt(this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x33182))
;

x33182.om$core$IAdapt$ = true;

x33182.om$core$IAdapt$_adapt$arity$2 = ((function (x33182){
return (function (this$,other){
var this$__$1 = this;
return ref_sub_cursor(om.core.adapt(x,other),parent);
});})(x33182))
;

x33182.cljs$core$ICloneable$ = true;

x33182.cljs$core$ICloneable$_clone$arity$1 = ((function (x33182){
return (function (this$){
var this$__$1 = this;
return ref_sub_cursor(cljs.core.clone(x),parent);
});})(x33182))
;

return x33182;
});
/**
* Given a cursor return a reference cursor that inherits all of the
* properties and methods of the cursor. Reference cursors may be
* observed via om.core/observe.
*/
om.core.ref_cursor = (function ref_cursor(cursor){
if(om.core.cursor_QMARK_(cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))], 0)))].join('')));
}

if((function (){var G__33204 = cursor;
if(G__33204){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__33204.om$core$IOmRef$;
}
})())){
return true;
} else {
if((!G__33204.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IOmRef,G__33204);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IOmRef,G__33204);
}
})()){
return cursor;
} else {
var path = (function (){var G__33205 = cursor;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__33205) : om.core.path.call(null,G__33205));
})();
var storage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(function (){var G__33206 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__33206) : cljs.core.atom.call(null,G__33206));
})())),path);
var x33207 = cljs.core.clone(cursor);
x33207.om$core$ITransact$ = true;

x33207.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x33207,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
var G__33208_33219 = cursor__$2;
var G__33209_33220 = korks;
var G__33210_33221 = f;
(om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3 ? om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3(G__33208_33219,G__33209_33220,G__33210_33221) : om.core.commit_BANG_.call(null,G__33208_33219,G__33209_33220,G__33210_33221));

return om.core._refresh_deps_BANG_(cursor__$2);
});})(x33207,path,storage))
;

x33207.om$core$IOmRef$ = true;

x33207.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x33207,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(storage,cljs.core.assoc,(function (){var G__33211 = c;
return (om.core.id.cljs$core$IFn$_invoke$arity$1 ? om.core.id.cljs$core$IFn$_invoke$arity$1(G__33211) : om.core.id.call(null,G__33211));
})(),c);
});})(x33207,path,storage))
;

x33207.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x33207,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(storage,cljs.core.dissoc,(function (){var G__33212 = c;
return (om.core.id.cljs$core$IFn$_invoke$arity$1 ? om.core.id.cljs$core$IFn$_invoke$arity$1(G__33212) : om.core.id.call(null,G__33212));
})());
if((cljs.core.count(m) === (0))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x33207,path,storage))
;

x33207.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x33207,path,storage){
return (function (_){
var ___$1 = this;
var seq__33213 = cljs.core.seq(cljs.core.vals((function (){var G__33217 = storage;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33217) : cljs.core.deref.call(null,G__33217));
})()));
var chunk__33214 = null;
var count__33215 = (0);
var i__33216 = (0);
while(true){
if((i__33216 < count__33215)){
var c = chunk__33214.cljs$core$IIndexed$_nth$arity$2(null,i__33216);
om.core._queue_render_BANG_(om.core.state(cursor),c);

var G__33222 = seq__33213;
var G__33223 = chunk__33214;
var G__33224 = count__33215;
var G__33225 = (i__33216 + (1));
seq__33213 = G__33222;
chunk__33214 = G__33223;
count__33215 = G__33224;
i__33216 = G__33225;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__33213);
if(temp__4126__auto__){
var seq__33213__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33213__$1)){
var c__4602__auto__ = cljs.core.chunk_first(seq__33213__$1);
var G__33226 = cljs.core.chunk_rest(seq__33213__$1);
var G__33227 = c__4602__auto__;
var G__33228 = cljs.core.count(c__4602__auto__);
var G__33229 = (0);
seq__33213 = G__33226;
chunk__33214 = G__33227;
count__33215 = G__33228;
i__33216 = G__33229;
continue;
} else {
var c = cljs.core.first(seq__33213__$1);
om.core._queue_render_BANG_(om.core.state(cursor),c);

var G__33230 = cljs.core.next(seq__33213__$1);
var G__33231 = null;
var G__33232 = (0);
var G__33233 = (0);
seq__33213 = G__33230;
chunk__33214 = G__33231;
count__33215 = G__33232;
i__33216 = G__33233;
continue;
}
} else {
return null;
}
}
break;
}
});})(x33207,path,storage))
;

x33207.om$core$IOmRef$_get_deps$arity$1 = ((function (x33207,path,storage){
return (function (_){
var ___$1 = this;
var G__33218 = storage;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33218) : cljs.core.deref.call(null,G__33218));
});})(x33207,path,storage))
;

x33207.om$core$ICursorDerive$ = true;

x33207.om$core$ICursorDerive$_derive$arity$4 = ((function (x33207,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path__$1);
if(om.core.cursor_QMARK_(cursor_SINGLEQUOTE_)){
return om.core.ref_sub_cursor(cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x33207,path,storage))
;

return x33207;
}
});
om.core.add_ref_to_component_BANG_ = (function add_ref_to_component_BANG_(c,ref){
var state = c.state;
var refs = (function (){var or__3815__auto__ = (state["__om_refs"]);
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(refs,ref)){
return null;
} else {
return (state["__om_refs"] = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function remove_ref_from_component_BANG_(c,ref){
var state = c.state;
var refs = (state["__om_refs"]);
if(cljs.core.contains_QMARK_(refs,ref)){
return (state["__om_refs"] = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(refs,ref));
} else {
return null;
}
});
/**
* Given a component and a reference cursor have the component observe
* the reference cursor for any data changes.
*/
om.core.observe = (function observe(c,ref){
if(cljs.core.truth_(om.core.component_QMARK_(c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))], 0)))].join('')));
}

if(om.core.cursor_QMARK_(ref)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null))], 0)))].join('')));
}

om.core.add_ref_to_component_BANG_(c,ref);

om.core._add_dep_BANG_(ref,c);

return ref;
});
om.core.unobserve = (function unobserve(c,ref){
om.core.remove_ref_from_component_BANG_(c,ref);

om.core._remove_dep_BANG_(ref,c);

return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = (function (){var G__33234 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__33234) : cljs.core.atom.call(null,G__33234));
})();
om.core.get_renderT = (function get_renderT(state){
var or__3815__auto__ = state.om$render$T;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return (0);
}
});
/**
* Force a render of *all* roots. Usage of this function is almost
* never recommended.
*/
om.core.render_all = (function() {
var render_all = null;
var render_all__0 = (function (){
return render_all.cljs$core$IFn$_invoke$arity$1(null);
});
var render_all__1 = (function (state){
om.core.refresh_queued = false;

var seq__33241_33246 = cljs.core.seq((function (){var G__33245 = om.core.refresh_set;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33245) : cljs.core.deref.call(null,G__33245));
})());
var chunk__33242_33247 = null;
var count__33243_33248 = (0);
var i__33244_33249 = (0);
while(true){
if((i__33244_33249 < count__33243_33248)){
var f_33250 = chunk__33242_33247.cljs$core$IIndexed$_nth$arity$2(null,i__33244_33249);
(f_33250.cljs$core$IFn$_invoke$arity$0 ? f_33250.cljs$core$IFn$_invoke$arity$0() : f_33250.call(null));

var G__33251 = seq__33241_33246;
var G__33252 = chunk__33242_33247;
var G__33253 = count__33243_33248;
var G__33254 = (i__33244_33249 + (1));
seq__33241_33246 = G__33251;
chunk__33242_33247 = G__33252;
count__33243_33248 = G__33253;
i__33244_33249 = G__33254;
continue;
} else {
var temp__4126__auto___33255 = cljs.core.seq(seq__33241_33246);
if(temp__4126__auto___33255){
var seq__33241_33256__$1 = temp__4126__auto___33255;
if(cljs.core.chunked_seq_QMARK_(seq__33241_33256__$1)){
var c__4602__auto___33257 = cljs.core.chunk_first(seq__33241_33256__$1);
var G__33258 = cljs.core.chunk_rest(seq__33241_33256__$1);
var G__33259 = c__4602__auto___33257;
var G__33260 = cljs.core.count(c__4602__auto___33257);
var G__33261 = (0);
seq__33241_33246 = G__33258;
chunk__33242_33247 = G__33259;
count__33243_33248 = G__33260;
i__33244_33249 = G__33261;
continue;
} else {
var f_33262 = cljs.core.first(seq__33241_33256__$1);
(f_33262.cljs$core$IFn$_invoke$arity$0 ? f_33262.cljs$core$IFn$_invoke$arity$0() : f_33262.call(null));

var G__33263 = cljs.core.next(seq__33241_33256__$1);
var G__33264 = null;
var G__33265 = (0);
var G__33266 = (0);
seq__33241_33246 = G__33263;
chunk__33242_33247 = G__33264;
count__33243_33248 = G__33265;
i__33244_33249 = G__33266;
continue;
}
} else {
}
}
break;
}

if((state == null)){
return null;
} else {
return state.om$render$T = (om.core.get_renderT(state) + (1));
}
});
render_all = function(state){
switch(arguments.length){
case 0:
return render_all__0.call(this);
case 1:
return render_all__1.call(this,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
render_all.cljs$core$IFn$_invoke$arity$0 = render_all__0;
render_all.cljs$core$IFn$_invoke$arity$1 = render_all__1;
return render_all;
})()
;
om.core.roots = (function (){var G__33267 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__33267) : cljs.core.atom.call(null,G__33267));
})();
om.core.valid_component_QMARK_ = (function valid_component_QMARK_(x,f){
if((function (){var or__3815__auto__ = (function (){var G__33274 = x;
if(G__33274){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__33274.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__33274.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__33274);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__33274);
}
})();
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (function (){var G__33276 = x;
if(G__33276){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto____$1 = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto____$1)){
return or__3815__auto____$1;
} else {
return G__33276.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__33276.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__33276);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__33276);
}
})();
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
var G__33277 = x;
if(G__33277){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto____$2 = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto____$2)){
return or__3815__auto____$2;
} else {
return G__33277.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__33277.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__33277);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__33277);
}
}
}
})()){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid Om component fn, "),cljs.core.str(f.name),cljs.core.str(" does not return valid instance")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRender","IRender",590822196,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderProps","IRenderProps",2115139472,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderState","IRenderState",-897673898,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))], 0)))].join('')));
}
});
om.core.valid_opts_QMARK_ = (function valid_opts_QMARK_(m){
return cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [cljs.core.constant$keyword$79,null,cljs.core.constant$keyword$80,null,cljs.core.constant$keyword$81,null,cljs.core.constant$keyword$82,null,cljs.core.constant$keyword$47,null,cljs.core.constant$keyword$83,null,cljs.core.constant$keyword$84,null,cljs.core.constant$keyword$85,null,cljs.core.constant$keyword$86,null,cljs.core.constant$keyword$87,null,cljs.core.constant$keyword$88,null], null), null),cljs.core.keys(m));
});
om.core.id = (function id(owner){
return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function() {
var get_descriptor = null;
var get_descriptor__1 = (function (f){
return get_descriptor.cljs$core$IFn$_invoke$arity$2(f,null);
});
var get_descriptor__2 = (function (f,descriptor){
if(((f["om$descriptor"]) == null)){
(f["om$descriptor"] = (function (){var G__33282 = (function (){var G__33283 = (function (){var or__3815__auto__ = descriptor;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = om.core._STAR_descriptor_STAR_;
if(cljs.core.truth_(or__3815__auto____$1)){
return or__3815__auto____$1;
} else {
return om.core.pure_descriptor;
}
}
})();
return React.createClass(G__33283);
})();
return React.createFactory(G__33282);
})());
} else {
}

return (f["om$descriptor"]);
});
get_descriptor = function(f,descriptor){
switch(arguments.length){
case 1:
return get_descriptor__1.call(this,f);
case 2:
return get_descriptor__2.call(this,f,descriptor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_descriptor.cljs$core$IFn$_invoke$arity$1 = get_descriptor__1;
get_descriptor.cljs$core$IFn$_invoke$arity$2 = get_descriptor__2;
return get_descriptor;
})()
;
om.core.getf = (function() {
var getf = null;
var getf__2 = (function (f,cursor){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null);
return cljs.core.get_method(f,dv);
} else {
return f;
}
});
var getf__3 = (function (f,cursor,opts){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null,opts);
return cljs.core.get_method(f,dv);
} else {
return f;
}
});
getf = function(f,cursor,opts){
switch(arguments.length){
case 2:
return getf__2.call(this,f,cursor);
case 3:
return getf__3.call(this,f,cursor,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
getf.cljs$core$IFn$_invoke$arity$2 = getf__2;
getf.cljs$core$IFn$_invoke$arity$3 = getf__3;
return getf;
})()
;
om.core.build_STAR_ = (function() {
var build_STAR_ = null;
var build_STAR___2 = (function (f,cursor){
return build_STAR_.cljs$core$IFn$_invoke$arity$3(f,cursor,null);
});
var build_STAR___3 = (function (f,cursor,m){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_(m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))], 0)))].join('')));
}

if(om.core.valid_opts_QMARK_(m)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"build options contains invalid keys, only :key, :key-fn :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.keys(m)))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"valid-opts?","valid-opts?",1000038576,null),new cljs.core.Symbol(null,"m","m",-1021758608,null))], 0)))].join('')));
}

if((m == null)){
var shared = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);
var ctor = om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1(om.core.getf.cljs$core$IFn$_invoke$arity$2(f,cursor));
var G__33301 = {"children": ((function (shared,ctor){
return (function (this$){
var ret = (function (){var G__33302 = cursor;
var G__33303 = this$;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__33302,G__33303) : f.call(null,G__33302,G__33303));
})();
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(shared,ctor))
, "__om_instrument": om.core._STAR_instrument_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_shared": shared, "__om_cursor": cursor};
return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__33301) : ctor.call(null,G__33301));
} else {
var map__33304 = m;
var map__33304__$1 = ((cljs.core.seq_QMARK_(map__33304))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33304):map__33304);
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33304__$1,cljs.core.constant$keyword$86);
var init_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33304__$1,cljs.core.constant$keyword$83);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33304__$1,cljs.core.constant$keyword$84);
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33304__$1,cljs.core.constant$keyword$85);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33304__$1,cljs.core.constant$keyword$47);
var dataf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.constant$keyword$80);
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4124__auto__ = cljs.core.constant$keyword$87.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4124__auto__)){
var i = temp__4124__auto__;
var G__33305 = cursor;
var G__33306 = i;
return (dataf.cljs$core$IFn$_invoke$arity$2 ? dataf.cljs$core$IFn$_invoke$arity$2(G__33305,G__33306) : dataf.call(null,G__33305,G__33306));
} else {
var G__33307 = cursor;
return (dataf.cljs$core$IFn$_invoke$arity$1 ? dataf.cljs$core$IFn$_invoke$arity$1(G__33307) : dataf.call(null,G__33307));
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(cursor_SINGLEQUOTE_,key):((!((key_fn == null)))?(function (){var G__33308 = cursor_SINGLEQUOTE_;
return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__33308) : key_fn.call(null,G__33308));
})():cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.constant$keyword$82)
));
var shared = (function (){var or__3815__auto__ = cljs.core.constant$keyword$88.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2(om.core.getf.cljs$core$IFn$_invoke$arity$3(f,cursor_SINGLEQUOTE_,opts),cljs.core.constant$keyword$79.cljs$core$IFn$_invoke$arity$1(m));
var G__33309 = {"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__33304,map__33304__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = (function (){var G__33310 = cursor_SINGLEQUOTE_;
var G__33311 = this$;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__33310,G__33311) : f.call(null,G__33310,G__33311));
})();
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(map__33304,map__33304__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__33304,map__33304__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = (function (){var G__33312 = cursor_SINGLEQUOTE_;
var G__33313 = this$;
var G__33314 = opts;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__33312,G__33313,G__33314) : f.call(null,G__33312,G__33313,G__33314));
})();
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(map__33304,map__33304__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": (function (){var or__3815__auto__ = rkey;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return undefined;
}
})(), "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": cljs.core.constant$keyword$87.cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_};
return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__33309) : ctor.call(null,G__33309));

}
});
build_STAR_ = function(f,cursor,m){
switch(arguments.length){
case 2:
return build_STAR___2.call(this,f,cursor);
case 3:
return build_STAR___3.call(this,f,cursor,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_STAR_.cljs$core$IFn$_invoke$arity$2 = build_STAR___2;
build_STAR_.cljs$core$IFn$_invoke$arity$3 = build_STAR___3;
return build_STAR_;
})()
;
/**
* Builds an Om component. Takes an IRender/IRenderState instance
* returning function f, a value, and an optional third argument
* which may be a map of build specifications.
* 
* f - is a function of 2 or 3 arguments. The first argument can be
* any value and the second argument will be the owning pure node.
* If a map of options m is passed in this will be the third
* argument. f must return at a minimum an IRender or IRenderState
* instance, this instance may implement other React life cycle
* protocols.
* 
* x - any value
* 
* m - a map the following keys are allowed:
* 
* :key        - a keyword that should be used to look up the key used by
* React itself when rendering sequential things.
* :react-key  - an explicit react key
* :fn         - a function to apply to the data before invoking f.
* :init-state - a map of initial state to pass to the component.
* :state      - a map of state to pass to the component, will be merged in.
* :opts       - a map of values. Can be used to pass side information down
* the render tree.
* :descriptor - a JS object of React methods, will be used to
* construct a React class per Om component function
* encountered. defaults to pure-descriptor.
* 
* Example:
* 
* (build list-of-gadgets x
* {:init-state {:event-chan ...
* :narble ...}})
* 
*/
om.core.build = (function() {
var build = null;
var build__2 = (function (f,x){
return build.cljs$core$IFn$_invoke$arity$3(f,x,null);
});
var build__3 = (function (f,x,m){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_(m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))], 0)))].join('')));
}

if(!((om.core._STAR_instrument_STAR_ == null))){
var ret = (function (){var G__33321 = f;
var G__33322 = x;
var G__33323 = m;
return (om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3 ? om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3(G__33321,G__33322,G__33323) : om.core._STAR_instrument_STAR_.call(null,G__33321,G__33322,G__33323));
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.constant$keyword$89)){
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,x,m);
} else {
return ret;
}
} else {
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,x,m);
}
});
build = function(f,x,m){
switch(arguments.length){
case 2:
return build__2.call(this,f,x);
case 3:
return build__3.call(this,f,x,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build.cljs$core$IFn$_invoke$arity$2 = build__2;
build.cljs$core$IFn$_invoke$arity$3 = build__3;
return build;
})()
;
/**
* Build a sequence of components. f is the component constructor
* function, xs a sequence of values, and m a map of options the
* same as provided to om.core/build.
*/
om.core.build_all = (function() {
var build_all = null;
var build_all__2 = (function (f,xs){
return build_all.cljs$core$IFn$_invoke$arity$3(f,xs,null);
});
var build_all__3 = (function (f,xs,m){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_(m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))], 0)))].join('')));
}

return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (x,i){
return om.core.build.cljs$core$IFn$_invoke$arity$3(f,x,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.constant$keyword$87,i));
}),xs,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
});
build_all = function(f,xs,m){
switch(arguments.length){
case 2:
return build_all__2.call(this,f,xs);
case 3:
return build_all__3.call(this,f,xs,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_all.cljs$core$IFn$_invoke$arity$2 = build_all__2;
build_all.cljs$core$IFn$_invoke$arity$3 = build_all__3;
return build_all;
})()
;
om.core.setup = (function setup(state,key,tx_listen){
if((function (){var G__33346 = state;
if(G__33346){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__33346.om$core$INotify$;
}
})())){
return true;
} else {
if((!G__33346.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.INotify,G__33346);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.INotify,G__33346);
}
})()){
} else {
var properties_33365 = (function (){var G__33347 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__33347) : cljs.core.atom.call(null,G__33347));
})();
var listeners_33366 = (function (){var G__33348 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__33348) : cljs.core.atom.call(null,G__33348));
})();
var render_queue_33367 = (function (){var G__33349 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__33349) : cljs.core.atom.call(null,G__33349));
})();
var x33350_33368 = state;
x33350_33368.om$core$IRenderQueue$ = true;

x33350_33368.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x33350_33368,properties_33365,listeners_33366,render_queue_33367){
return (function (this$){
var this$__$1 = this;
var G__33351 = render_queue_33367;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33351) : cljs.core.deref.call(null,G__33351));
});})(x33350_33368,properties_33365,listeners_33366,render_queue_33367))
;

x33350_33368.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x33350_33368,properties_33365,listeners_33366,render_queue_33367){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_((function (){var G__33352 = render_queue_33367;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33352) : cljs.core.deref.call(null,G__33352));
})(),c)){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(render_queue_33367,cljs.core.conj,c);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.identity);
}
});})(x33350_33368,properties_33365,listeners_33366,render_queue_33367))
;

x33350_33368.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x33350_33368,properties_33365,listeners_33366,render_queue_33367){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(render_queue_33367,cljs.core.empty);
});})(x33350_33368,properties_33365,listeners_33366,render_queue_33367))
;

x33350_33368.om$core$INotify$ = true;

x33350_33368.om$core$INotify$_listen_BANG_$arity$3 = ((function (x33350_33368,properties_33365,listeners_33366,render_queue_33367){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(listeners_33366,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x33350_33368,properties_33365,listeners_33366,render_queue_33367))
;

x33350_33368.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x33350_33368,properties_33365,listeners_33366,render_queue_33367){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(listeners_33366,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x33350_33368,properties_33365,listeners_33366,render_queue_33367))
;

x33350_33368.om$core$INotify$_notify_BANG_$arity$3 = ((function (x33350_33368,properties_33365,listeners_33366,render_queue_33367){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__33353_33369 = cljs.core.seq((function (){var G__33357 = listeners_33366;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33357) : cljs.core.deref.call(null,G__33357));
})());
var chunk__33354_33370 = null;
var count__33355_33371 = (0);
var i__33356_33372 = (0);
while(true){
if((i__33356_33372 < count__33355_33371)){
var vec__33358_33373 = chunk__33354_33370.cljs$core$IIndexed$_nth$arity$2(null,i__33356_33372);
var __33374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33358_33373,(0),null);
var f_33375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33358_33373,(1),null);
var G__33359_33376 = tx_data;
var G__33360_33377 = root_cursor;
(f_33375.cljs$core$IFn$_invoke$arity$2 ? f_33375.cljs$core$IFn$_invoke$arity$2(G__33359_33376,G__33360_33377) : f_33375.call(null,G__33359_33376,G__33360_33377));

var G__33378 = seq__33353_33369;
var G__33379 = chunk__33354_33370;
var G__33380 = count__33355_33371;
var G__33381 = (i__33356_33372 + (1));
seq__33353_33369 = G__33378;
chunk__33354_33370 = G__33379;
count__33355_33371 = G__33380;
i__33356_33372 = G__33381;
continue;
} else {
var temp__4126__auto___33382 = cljs.core.seq(seq__33353_33369);
if(temp__4126__auto___33382){
var seq__33353_33383__$1 = temp__4126__auto___33382;
if(cljs.core.chunked_seq_QMARK_(seq__33353_33383__$1)){
var c__4602__auto___33384 = cljs.core.chunk_first(seq__33353_33383__$1);
var G__33385 = cljs.core.chunk_rest(seq__33353_33383__$1);
var G__33386 = c__4602__auto___33384;
var G__33387 = cljs.core.count(c__4602__auto___33384);
var G__33388 = (0);
seq__33353_33369 = G__33385;
chunk__33354_33370 = G__33386;
count__33355_33371 = G__33387;
i__33356_33372 = G__33388;
continue;
} else {
var vec__33361_33389 = cljs.core.first(seq__33353_33383__$1);
var __33390 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33361_33389,(0),null);
var f_33391 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33361_33389,(1),null);
var G__33362_33392 = tx_data;
var G__33363_33393 = root_cursor;
(f_33391.cljs$core$IFn$_invoke$arity$2 ? f_33391.cljs$core$IFn$_invoke$arity$2(G__33362_33392,G__33363_33393) : f_33391.call(null,G__33362_33392,G__33363_33393));

var G__33394 = cljs.core.next(seq__33353_33383__$1);
var G__33395 = null;
var G__33396 = (0);
var G__33397 = (0);
seq__33353_33369 = G__33394;
chunk__33354_33370 = G__33395;
count__33355_33371 = G__33396;
i__33356_33372 = G__33397;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x33350_33368,properties_33365,listeners_33366,render_queue_33367))
;

x33350_33368.om$core$IRootProperties$ = true;

x33350_33368.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x33350_33368,properties_33365,listeners_33366,render_queue_33367){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(properties_33365,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x33350_33368,properties_33365,listeners_33366,render_queue_33367))
;

x33350_33368.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x33350_33368,properties_33365,listeners_33366,render_queue_33367){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(properties_33365,cljs.core.dissoc,id,k);
});})(x33350_33368,properties_33365,listeners_33366,render_queue_33367))
;

x33350_33368.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x33350_33368,properties_33365,listeners_33366,render_queue_33367){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(properties_33365,cljs.core.dissoc,id);
});})(x33350_33368,properties_33365,listeners_33366,render_queue_33367))
;

x33350_33368.om$core$IRootProperties$_get_property$arity$3 = ((function (x33350_33368,properties_33365,listeners_33366,render_queue_33367){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__33364 = properties_33365;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33364) : cljs.core.deref.call(null,G__33364));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x33350_33368,properties_33365,listeners_33366,render_queue_33367))
;

}

return om.core._listen_BANG_(state,key,tx_listen);
});
om.core.tear_down = (function tear_down(state,key){
return om.core._unlisten_BANG_(state,key);
});
om.core.tag_root_key = (function tag_root_key(cursor,root_key){
if(om.core.cursor_QMARK_(cursor)){
var x33403 = cljs.core.clone(cursor);
x33403.om$core$IRootKey$ = true;

x33403.om$core$IRootKey$_root_key$arity$1 = ((function (x33403){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x33403))
;

x33403.om$core$IAdapt$ = true;

x33403.om$core$IAdapt$_adapt$arity$2 = ((function (x33403){
return (function (this$,other){
var this$__$1 = this;
return tag_root_key(om.core.adapt(cursor,other),root_key);
});})(x33403))
;

x33403.cljs$core$ICloneable$ = true;

x33403.cljs$core$ICloneable$_clone$arity$1 = ((function (x33403){
return (function (this$){
var this$__$1 = this;
return tag_root_key(cljs.core.clone(cursor),root_key);
});})(x33403))
;

return x33403;
} else {
return cursor;
}
});
/**
* Take a component constructor function f, value an immutable tree of
* associative data structures optionally an wrapped in an IAtom
* instance, and a map of options and installs an Om/React render
* loop.
* 
* f must return an instance that at a minimum implements IRender or
* IRenderState (it may implement other React life cycle protocols). f
* must take at least two arguments, the root cursor and the owning pure
* node. A cursor is just the original data wrapped in an ICursor
* instance which maintains path information. Only one root render
* loop allowed per target element. om.core/root is idempotent, if
* called again on the same target element the previous render loop
* will be replaced.
* 
* Options may also include any key allowed by om.core/build to
* customize f. In addition om.core/root supports the following
* special options:
* 
* :target     - (required) a DOM element.
* :shared     - data to be shared by all components, see om.core/get-shared
* :tx-listen  - a function that will listen in in transactions, should
* take 2 arguments - the first a map containing the
* path, old and new state at path, old and new global
* state, and transaction tag if provided.
* :instrument - a function of three arguments that if provided will
* intercept all calls to om.core/build. This function should
* correspond to the three arity version of om.core/build.
* :adapt      - a function to adapt the root cursor
* :raf        - override requestAnimationFrame based rendering. If
* false setTimeout will be use. If given a function
* will be invoked instead.
* 
* Example:
* 
* (root
* (fn [data owner]
* ...)
* {:message :hello}
* {:target js/document.body})
*/
om.core.root = (function root(f,value,p__33404){
var map__33493 = p__33404;
var map__33493__$1 = ((cljs.core.seq_QMARK_(map__33493))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33493):map__33493);
var options = map__33493__$1;
var raf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33493__$1,cljs.core.constant$keyword$90);
var adapt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33493__$1,cljs.core.constant$keyword$91);
var descriptor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33493__$1,cljs.core.constant$keyword$79);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33493__$1,cljs.core.constant$keyword$81);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33493__$1,cljs.core.constant$keyword$55);
var tx_listen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33493__$1,cljs.core.constant$keyword$92);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33493__$1,cljs.core.constant$keyword$93);
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First argument must be a function"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

if(!((target == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"target","target",1893533248,null)))], 0)))].join('')));
}

var roots_SINGLEQUOTE__33581 = (function (){var G__33494 = om.core.roots;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33494) : cljs.core.deref.call(null,G__33494));
})();
if(cljs.core.contains_QMARK_(roots_SINGLEQUOTE__33581,target)){
cljs.core.get.cljs$core$IFn$_invoke$arity$2(roots_SINGLEQUOTE__33581,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var state = (((function (){var G__33495 = value;
if(G__33495){
var bit__4496__auto__ = (G__33495.cljs$lang$protocol_mask$partition1$ & (16384));
if((bit__4496__auto__) || (G__33495.cljs$core$IAtom$)){
return true;
} else {
if((!G__33495.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,G__33495);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,G__33495);
}
})())?value:(function (){var G__33496 = value;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__33496) : cljs.core.atom.call(null,G__33496));
})());
var state__$1 = om.core.setup(state,watch_key,tx_listen);
var adapt__$1 = (function (){var or__3815__auto__ = adapt;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return cljs.core.identity;
}
})();
var m = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.constant$keyword$93,cljs.core.array_seq([cljs.core.constant$keyword$92,cljs.core.constant$keyword$55,cljs.core.constant$keyword$91,cljs.core.constant$keyword$90], 0));
var ret = (function (){var G__33497 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__33497) : cljs.core.atom.call(null,G__33497));
})();
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__33493,map__33493__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function rootf(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.disj,rootf);

var value__$1 = (function (){var G__33537 = state__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33537) : cljs.core.deref.call(null,G__33537));
})();
var cursor = (function (){var G__33538 = om.core.tag_root_key((((path == null))?om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(value__$1,path),state__$1,path)),watch_key);
return (adapt__$1.cljs$core$IFn$_invoke$arity$1 ? adapt__$1.cljs$core$IFn$_invoke$arity$1(G__33538) : adapt__$1.call(null,G__33538));
})();
if(cljs.core.truth_(om.core._get_property(state__$1,watch_key,cljs.core.constant$keyword$94))){
} else {
var c_33582 = om.dom.render((function (){var _STAR_descriptor_STAR_33539 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_33540 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_33541 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_33542 = om.core._STAR_root_key_STAR_;
om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

try{return om.core.build.cljs$core$IFn$_invoke$arity$3(f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_33542;

om.core._STAR_state_STAR_ = _STAR_state_STAR_33541;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_33540;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_33539;
}})(),target);
if(((function (){var G__33543 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33543) : cljs.core.deref.call(null,G__33543));
})() == null)){
var G__33544_33583 = ret;
var G__33545_33584 = c_33582;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__33544_33583,G__33545_33584) : cljs.core.reset_BANG_.call(null,G__33544_33583,G__33545_33584));
} else {
}
}

var queue_33585 = om.core._get_queue(state__$1);
om.core._empty_queue_BANG_(state__$1);

if(cljs.core.empty_QMARK_(queue_33585)){
} else {
var seq__33546_33586 = cljs.core.seq(queue_33585);
var chunk__33547_33587 = null;
var count__33548_33588 = (0);
var i__33549_33589 = (0);
while(true){
if((i__33549_33589 < count__33548_33588)){
var c_33590 = chunk__33547_33587.cljs$core$IIndexed$_nth$arity$2(null,i__33549_33589);
if(cljs.core.truth_(c_33590.isMounted())){
var temp__4126__auto___33591 = (c_33590.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4126__auto___33591)){
var next_props_33592 = temp__4126__auto___33591;
(c_33590.props["__om_cursor"] = next_props_33592);

(c_33590.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__3815__auto__ = !((function (){var G__33551 = om.core.children(c_33590);
if(G__33551){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__33551.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__33551.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__33551);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__33551);
}
})());
if(or__3815__auto__){
return or__3815__auto__;
} else {
return c_33590.shouldComponentUpdate(c_33590.props,c_33590.state);
}
})())){
c_33590.forceUpdate();
} else {
}
} else {
}

var G__33593 = seq__33546_33586;
var G__33594 = chunk__33547_33587;
var G__33595 = count__33548_33588;
var G__33596 = (i__33549_33589 + (1));
seq__33546_33586 = G__33593;
chunk__33547_33587 = G__33594;
count__33548_33588 = G__33595;
i__33549_33589 = G__33596;
continue;
} else {
var temp__4126__auto___33597 = cljs.core.seq(seq__33546_33586);
if(temp__4126__auto___33597){
var seq__33546_33598__$1 = temp__4126__auto___33597;
if(cljs.core.chunked_seq_QMARK_(seq__33546_33598__$1)){
var c__4602__auto___33599 = cljs.core.chunk_first(seq__33546_33598__$1);
var G__33600 = cljs.core.chunk_rest(seq__33546_33598__$1);
var G__33601 = c__4602__auto___33599;
var G__33602 = cljs.core.count(c__4602__auto___33599);
var G__33603 = (0);
seq__33546_33586 = G__33600;
chunk__33547_33587 = G__33601;
count__33548_33588 = G__33602;
i__33549_33589 = G__33603;
continue;
} else {
var c_33604 = cljs.core.first(seq__33546_33598__$1);
if(cljs.core.truth_(c_33604.isMounted())){
var temp__4126__auto___33605__$1 = (c_33604.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4126__auto___33605__$1)){
var next_props_33606 = temp__4126__auto___33605__$1;
(c_33604.props["__om_cursor"] = next_props_33606);

(c_33604.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__3815__auto__ = !((function (){var G__33553 = om.core.children(c_33604);
if(G__33553){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__33553.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__33553.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__33553);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__33553);
}
})());
if(or__3815__auto__){
return or__3815__auto__;
} else {
return c_33604.shouldComponentUpdate(c_33604.props,c_33604.state);
}
})())){
c_33604.forceUpdate();
} else {
}
} else {
}

var G__33607 = cljs.core.next(seq__33546_33598__$1);
var G__33608 = null;
var G__33609 = (0);
var G__33610 = (0);
seq__33546_33586 = G__33607;
chunk__33547_33587 = G__33608;
count__33548_33588 = G__33609;
i__33549_33589 = G__33610;
continue;
}
} else {
}
}
break;
}
}

var _refs_33611 = (function (){var G__33554 = om.core._refs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33554) : cljs.core.deref.call(null,G__33554));
})();
if(cljs.core.empty_QMARK_(_refs_33611)){
} else {
var seq__33555_33612 = cljs.core.seq(_refs_33611);
var chunk__33556_33613 = null;
var count__33557_33614 = (0);
var i__33558_33615 = (0);
while(true){
if((i__33558_33615 < count__33557_33614)){
var vec__33559_33616 = chunk__33556_33613.cljs$core$IIndexed$_nth$arity$2(null,i__33558_33615);
var path_33617__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33559_33616,(0),null);
var cs_33618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33559_33616,(1),null);
var cs_33619__$1 = (function (){var G__33560 = cs_33618;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33560) : cljs.core.deref.call(null,G__33560));
})();
var seq__33561_33620 = cljs.core.seq(cs_33619__$1);
var chunk__33562_33621 = null;
var count__33563_33622 = (0);
var i__33564_33623 = (0);
while(true){
if((i__33564_33623 < count__33563_33622)){
var vec__33565_33624 = chunk__33562_33621.cljs$core$IIndexed$_nth$arity$2(null,i__33564_33623);
var id_33625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33565_33624,(0),null);
var c_33626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33565_33624,(1),null);
if(cljs.core.truth_(c_33626.shouldComponentUpdate(c_33626.props,c_33626.state))){
c_33626.forceUpdate();
} else {
}

var G__33627 = seq__33561_33620;
var G__33628 = chunk__33562_33621;
var G__33629 = count__33563_33622;
var G__33630 = (i__33564_33623 + (1));
seq__33561_33620 = G__33627;
chunk__33562_33621 = G__33628;
count__33563_33622 = G__33629;
i__33564_33623 = G__33630;
continue;
} else {
var temp__4126__auto___33631 = cljs.core.seq(seq__33561_33620);
if(temp__4126__auto___33631){
var seq__33561_33632__$1 = temp__4126__auto___33631;
if(cljs.core.chunked_seq_QMARK_(seq__33561_33632__$1)){
var c__4602__auto___33633 = cljs.core.chunk_first(seq__33561_33632__$1);
var G__33634 = cljs.core.chunk_rest(seq__33561_33632__$1);
var G__33635 = c__4602__auto___33633;
var G__33636 = cljs.core.count(c__4602__auto___33633);
var G__33637 = (0);
seq__33561_33620 = G__33634;
chunk__33562_33621 = G__33635;
count__33563_33622 = G__33636;
i__33564_33623 = G__33637;
continue;
} else {
var vec__33566_33638 = cljs.core.first(seq__33561_33632__$1);
var id_33639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33566_33638,(0),null);
var c_33640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33566_33638,(1),null);
if(cljs.core.truth_(c_33640.shouldComponentUpdate(c_33640.props,c_33640.state))){
c_33640.forceUpdate();
} else {
}

var G__33641 = cljs.core.next(seq__33561_33632__$1);
var G__33642 = null;
var G__33643 = (0);
var G__33644 = (0);
seq__33561_33620 = G__33641;
chunk__33562_33621 = G__33642;
count__33563_33622 = G__33643;
i__33564_33623 = G__33644;
continue;
}
} else {
}
}
break;
}

var G__33645 = seq__33555_33612;
var G__33646 = chunk__33556_33613;
var G__33647 = count__33557_33614;
var G__33648 = (i__33558_33615 + (1));
seq__33555_33612 = G__33645;
chunk__33556_33613 = G__33646;
count__33557_33614 = G__33647;
i__33558_33615 = G__33648;
continue;
} else {
var temp__4126__auto___33649 = cljs.core.seq(seq__33555_33612);
if(temp__4126__auto___33649){
var seq__33555_33650__$1 = temp__4126__auto___33649;
if(cljs.core.chunked_seq_QMARK_(seq__33555_33650__$1)){
var c__4602__auto___33651 = cljs.core.chunk_first(seq__33555_33650__$1);
var G__33652 = cljs.core.chunk_rest(seq__33555_33650__$1);
var G__33653 = c__4602__auto___33651;
var G__33654 = cljs.core.count(c__4602__auto___33651);
var G__33655 = (0);
seq__33555_33612 = G__33652;
chunk__33556_33613 = G__33653;
count__33557_33614 = G__33654;
i__33558_33615 = G__33655;
continue;
} else {
var vec__33567_33656 = cljs.core.first(seq__33555_33650__$1);
var path_33657__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33567_33656,(0),null);
var cs_33658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33567_33656,(1),null);
var cs_33659__$1 = (function (){var G__33568 = cs_33658;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33568) : cljs.core.deref.call(null,G__33568));
})();
var seq__33569_33660 = cljs.core.seq(cs_33659__$1);
var chunk__33570_33661 = null;
var count__33571_33662 = (0);
var i__33572_33663 = (0);
while(true){
if((i__33572_33663 < count__33571_33662)){
var vec__33573_33664 = chunk__33570_33661.cljs$core$IIndexed$_nth$arity$2(null,i__33572_33663);
var id_33665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33573_33664,(0),null);
var c_33666 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33573_33664,(1),null);
if(cljs.core.truth_(c_33666.shouldComponentUpdate(c_33666.props,c_33666.state))){
c_33666.forceUpdate();
} else {
}

var G__33667 = seq__33569_33660;
var G__33668 = chunk__33570_33661;
var G__33669 = count__33571_33662;
var G__33670 = (i__33572_33663 + (1));
seq__33569_33660 = G__33667;
chunk__33570_33661 = G__33668;
count__33571_33662 = G__33669;
i__33572_33663 = G__33670;
continue;
} else {
var temp__4126__auto___33671__$1 = cljs.core.seq(seq__33569_33660);
if(temp__4126__auto___33671__$1){
var seq__33569_33672__$1 = temp__4126__auto___33671__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33569_33672__$1)){
var c__4602__auto___33673 = cljs.core.chunk_first(seq__33569_33672__$1);
var G__33674 = cljs.core.chunk_rest(seq__33569_33672__$1);
var G__33675 = c__4602__auto___33673;
var G__33676 = cljs.core.count(c__4602__auto___33673);
var G__33677 = (0);
seq__33569_33660 = G__33674;
chunk__33570_33661 = G__33675;
count__33571_33662 = G__33676;
i__33572_33663 = G__33677;
continue;
} else {
var vec__33574_33678 = cljs.core.first(seq__33569_33672__$1);
var id_33679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33574_33678,(0),null);
var c_33680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33574_33678,(1),null);
if(cljs.core.truth_(c_33680.shouldComponentUpdate(c_33680.props,c_33680.state))){
c_33680.forceUpdate();
} else {
}

var G__33681 = cljs.core.next(seq__33569_33672__$1);
var G__33682 = null;
var G__33683 = (0);
var G__33684 = (0);
seq__33569_33660 = G__33681;
chunk__33570_33661 = G__33682;
count__33571_33662 = G__33683;
i__33572_33663 = G__33684;
continue;
}
} else {
}
}
break;
}

var G__33685 = cljs.core.next(seq__33555_33650__$1);
var G__33686 = null;
var G__33687 = (0);
var G__33688 = (0);
seq__33555_33612 = G__33685;
chunk__33556_33613 = G__33686;
count__33557_33614 = G__33687;
i__33558_33615 = G__33688;
continue;
}
} else {
}
}
break;
}
}

om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$94,true);

var G__33575 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33575) : cljs.core.deref.call(null,G__33575));
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__33493,map__33493__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
;
cljs.core.add_watch(state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__33493,map__33493__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (_,___$1,o,n){
if((cljs.core.not(om.core._get_property(state__$1,watch_key,cljs.core.constant$keyword$95))) && (!((o === n)))){
om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$94,false);
} else {
}

om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$95,false);

if(cljs.core.contains_QMARK_((function (){var G__33576 = om.core.refresh_set;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33576) : cljs.core.deref.call(null,G__33576));
})(),rootf)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.conj,rootf);
}

if(cljs.core.truth_(om.core.refresh_queued)){
return null;
} else {
om.core.refresh_queued = true;

if((raf === false) || (!(typeof requestAnimationFrame !== 'undefined'))){
var G__33577 = ((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__33493,map__33493__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
return om.core.render_all.cljs$core$IFn$_invoke$arity$1(state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__33493,map__33493__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
;
var G__33578 = (16);
return setTimeout(G__33577,G__33578);
} else {
if(cljs.core.fn_QMARK_(raf)){
return (raf.cljs$core$IFn$_invoke$arity$0 ? raf.cljs$core$IFn$_invoke$arity$0() : raf.call(null));
} else {
var G__33579 = ((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__33493,map__33493__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
return om.core.render_all.cljs$core$IFn$_invoke$arity$1(state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__33493,map__33493__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
;
return requestAnimationFrame(G__33579);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__33493,map__33493__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__33493,map__33493__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
om.core._remove_properties_BANG_(state__$1,watch_key);

cljs.core.remove_watch(state__$1,watch_key);

om.core.tear_down(state__$1,watch_key);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.roots,cljs.core.dissoc,target);

var G__33580 = target;
return React.unmountComponentAtNode(G__33580);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__33493,map__33493__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

return rootf();
});
/**
* Given a DOM target remove its render loop if one exists.
*/
om.core.detach_root = (function detach_root(target){
if(cljs.core.truth_((function (){var G__33691 = target;
return goog.dom.isElement(G__33691);
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("gdom","isElement","gdom/isElement",465934354,null),new cljs.core.Symbol(null,"target","target",1893533248,null))], 0)))].join('')));
}

var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__33692 = om.core.roots;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33692) : cljs.core.deref.call(null,G__33692));
})(),target);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return null;
}
});
om.core.transactable_QMARK_ = (function transactable_QMARK_(x){
var G__33694 = x;
if(G__33694){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__33694.om$core$ITransact$;
}
})())){
return true;
} else {
if((!G__33694.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ITransact,G__33694);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ITransact,G__33694);
}
});
/**
* Given a tag, a cursor, an optional list of keys ks, mutate the tree
* at the path specified by the cursor + the optional keys by applying
* f to the specified value in the tree. An Om re-render will be
* triggered.
*/
om.core.transact_BANG_ = (function() {
var transact_BANG_ = null;
var transact_BANG___2 = (function (cursor,f){
return transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.PersistentVector.EMPTY,f,null);
});
var transact_BANG___3 = (function (cursor,korks,f){
return transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,f,null);
});
var transact_BANG___4 = (function (cursor,korks,f,tag){
if(om.core.transactable_QMARK_(cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"transactable?","transactable?",780536292,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
return om.core._transact_BANG_(cursor,korks__$1,f,tag);
});
transact_BANG_ = function(cursor,korks,f,tag){
switch(arguments.length){
case 2:
return transact_BANG___2.call(this,cursor,korks);
case 3:
return transact_BANG___3.call(this,cursor,korks,f);
case 4:
return transact_BANG___4.call(this,cursor,korks,f,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transact_BANG_.cljs$core$IFn$_invoke$arity$2 = transact_BANG___2;
transact_BANG_.cljs$core$IFn$_invoke$arity$3 = transact_BANG___3;
transact_BANG_.cljs$core$IFn$_invoke$arity$4 = transact_BANG___4;
return transact_BANG_;
})()
;
/**
* Like transact! but no function provided, instead a replacement
* value is given.
*/
om.core.update_BANG_ = (function() {
var update_BANG_ = null;
var update_BANG___2 = (function (cursor,v){
if(om.core.cursor_QMARK_(cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))], 0)))].join('')));
}

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.PersistentVector.EMPTY,(function (_){
return v;
}),null);
});
var update_BANG___3 = (function (cursor,korks,v){
if(om.core.cursor_QMARK_(cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))], 0)))].join('')));
}

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,(function (_){
return v;
}),null);
});
var update_BANG___4 = (function (cursor,korks,v,tag){
if(om.core.cursor_QMARK_(cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))], 0)))].join('')));
}

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,(function (_){
return v;
}),tag);
});
update_BANG_ = function(cursor,korks,v,tag){
switch(arguments.length){
case 2:
return update_BANG___2.call(this,cursor,korks);
case 3:
return update_BANG___3.call(this,cursor,korks,v);
case 4:
return update_BANG___4.call(this,cursor,korks,v,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_BANG_.cljs$core$IFn$_invoke$arity$2 = update_BANG___2;
update_BANG_.cljs$core$IFn$_invoke$arity$3 = update_BANG___3;
update_BANG_.cljs$core$IFn$_invoke$arity$4 = update_BANG___4;
return update_BANG_;
})()
;
/**
* EXPERIMENTAL: Like transact! but does not schedule a re-render or
* create a transact event.
*/
om.core.commit_BANG_ = (function commit_BANG_(cursor,korks,f){
if(om.core.cursor_QMARK_(cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

var key = (((function (){var G__33705 = cursor;
if(G__33705){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__33705.om$core$IRootKey$;
}
})())){
return true;
} else {
if((!G__33705.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRootKey,G__33705);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRootKey,G__33705);
}
})())?om.core._root_key(cursor):null);
var app_state = om.core.state(cursor);
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
var cpath = (function (){var G__33706 = cursor;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__33706) : om.core.path.call(null,G__33706));
})();
var rpath = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cpath,korks__$1);
if(cljs.core.truth_(key)){
om.core._set_property_BANG_(app_state,key,cljs.core.constant$keyword$95,true);
} else {
}

if(cljs.core.empty_QMARK_(rpath)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app_state,f);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,rpath,f);
}
});
/**
* A helper function to get at React refs. Given a owning pure node
* extract the ref specified by name.
*/
om.core.get_node = (function() {
var get_node = null;
var get_node__1 = (function (owner){
return owner.getDOMNode();
});
var get_node__2 = (function (owner,name){
if(typeof name === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"name","name",-810760592,null))], 0)))].join('')));
}

var temp__4126__auto__ = owner.refs;
if(cljs.core.truth_(temp__4126__auto__)){
var refs = temp__4126__auto__;
return (refs[name]).getDOMNode();
} else {
return null;
}
});
get_node = function(owner,name){
switch(arguments.length){
case 1:
return get_node__1.call(this,owner);
case 2:
return get_node__2.call(this,owner,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_node.cljs$core$IFn$_invoke$arity$1 = get_node__1;
get_node.cljs$core$IFn$_invoke$arity$2 = get_node__2;
return get_node;
})()
;
/**
* Return true if the backing React component is mounted into the DOM.
*/
om.core.mounted_QMARK_ = (function mounted_QMARK_(owner){
return owner.isMounted();
});
/**
* Takes a pure owning component, a sequential list of keys and value and
* sets the state of the component. Conceptually analagous to React
* setState. Will schedule an Om re-render.
*/
om.core.set_state_BANG_ = (function() {
var set_state_BANG_ = null;
var set_state_BANG___2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,v,true);
});
var set_state_BANG___3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4(owner,ks,v,true);
});
set_state_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return set_state_BANG___2.call(this,owner,korks);
case 3:
return set_state_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = set_state_BANG___2;
set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = set_state_BANG___3;
return set_state_BANG_;
})()
;
/**
* EXPERIMENTAL: Same as set-state! but does not trigger re-render.
*/
om.core.set_state_nr_BANG_ = (function() {
var set_state_nr_BANG_ = null;
var set_state_nr_BANG___2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,v,false);
});
var set_state_nr_BANG___3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4(owner,ks,v,false);
});
set_state_nr_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return set_state_nr_BANG___2.call(this,owner,korks);
case 3:
return set_state_nr_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_state_nr_BANG___2;
set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_state_nr_BANG___3;
return set_state_nr_BANG_;
})()
;
/**
* Takes a pure owning component, a sequential list of keys and a
* function to transition the state of the component. Conceptually
* analagous to React setState. Will schedule an Om re-render.
*/
om.core.update_state_BANG_ = (function() {
var update_state_BANG_ = null;
var update_state_BANG___2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__33709 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__33709) : f.call(null,G__33709));
})());
});
var update_state_BANG___3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__33710 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__33710) : f.call(null,G__33710));
})());
});
update_state_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return update_state_BANG___2.call(this,owner,korks);
case 3:
return update_state_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = update_state_BANG___2;
update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = update_state_BANG___3;
return update_state_BANG_;
})()
;
/**
* EXPERIMENTAL: Same as update-state! but does not trigger re-render.
*/
om.core.update_state_nr_BANG_ = (function() {
var update_state_nr_BANG_ = null;
var update_state_nr_BANG___2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__33713 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__33713) : f.call(null,G__33713));
})());
});
var update_state_nr_BANG___3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__33714 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__33714) : f.call(null,G__33714));
})());
});
update_state_nr_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return update_state_nr_BANG___2.call(this,owner,korks);
case 3:
return update_state_nr_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = update_state_nr_BANG___2;
update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = update_state_nr_BANG___3;
return update_state_nr_BANG_;
})()
;
/**
* Utility to re-render an owner.
*/
om.core.refresh_BANG_ = (function refresh_BANG_(owner){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.identity);
});
/**
* Takes a pure owning component and an optional key or sequential
* list of keys and returns a property in the component local state if
* it exists. Always returns the rendered state, not the pending
* state.
*/
om.core.get_render_state = (function() {
var get_render_state = null;
var get_render_state__1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(owner);
});
var get_render_state__2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2(owner,ks);
});
get_render_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_render_state__1.call(this,owner);
case 2:
return get_render_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_render_state.cljs$core$IFn$_invoke$arity$1 = get_render_state__1;
get_render_state.cljs$core$IFn$_invoke$arity$2 = get_render_state__2;
return get_render_state;
})()
;

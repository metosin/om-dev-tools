// Compiled by ClojureScript 0.0-2850 {}
goog.provide('example.main');
goog.require('cljs.core');
goog.require('om_dev_tools.core');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('om_tools.core');
goog.require('om.core');
if(typeof example.main.state !== 'undefined'){
} else {
example.main.state = (function (){var G__21084 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$269,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$119,cljs.core.constant$keyword$271], null),cljs.core.constant$keyword$270,null,cljs.core.constant$keyword$271,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$273,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null),cljs.core.constant$keyword$274,"    abc   "], null),cljs.core.constant$keyword$272,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$275,"hello world"], null)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21084) : cljs.core.atom.call(null,G__21084));
})();
}
if(typeof example.main.dev_state !== 'undefined'){
} else {
example.main.dev_state = (function (){var G__21085 = cljs.core.assoc_in(om_dev_tools.core.empty_state(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$254,cljs.core.constant$keyword$272], null),cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21085) : cljs.core.atom.call(null,G__21085));
})();
}

var ufv___21106 = schema.utils.use_fn_validation;
var output_schema21088_21107 = schema.core.Any;
var input_schema21089_21108 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"state","state",-348086572,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker21090_21109 = schema.core.checker(input_schema21089_21108);
var output_checker21091_21110 = schema.core.checker(output_schema21088_21107);
/**
* Inputs: [state owner]
*/
example.main.example = ((function (ufv___21106,output_schema21088_21107,input_schema21089_21108,input_checker21090_21109,output_checker21091_21110){
return (function example__$1(G__21092,G__21093){
var validate__10780__auto__ = ufv___21106.get_cell();
if(cljs.core.truth_(validate__10780__auto__)){
var args__10781__auto___21111 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21092,G__21093], null);
var temp__4126__auto___21112 = (function (){var G__21100 = args__10781__auto___21111;
return (input_checker21090_21109.cljs$core$IFn$_invoke$arity$1 ? input_checker21090_21109.cljs$core$IFn$_invoke$arity$1(G__21100) : input_checker21090_21109.call(null,G__21100));
})();
if(cljs.core.truth_(temp__4126__auto___21112)){
var error__10782__auto___21113 = temp__4126__auto___21112;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"example","example",-115247617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21113], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21113,cljs.core.constant$keyword$21,args__10781__auto___21111,cljs.core.constant$keyword$22,input_schema21089_21108,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

var o__10783__auto__ = (function (){var state = G__21092;
var owner = G__21093;
while(true){
if(typeof example.main.t21101 !== 'undefined'){
} else {

/**
* @constructor
*/
example.main.t21101 = (function (owner,G__21092,G__21093,state,validate__10780__auto__,output_schema21088,input_schema21089,output_checker21091,ufv__,example,input_checker21090,meta21102){
this.owner = owner;
this.G__21092 = G__21092;
this.G__21093 = G__21093;
this.state = state;
this.validate__10780__auto__ = validate__10780__auto__;
this.output_schema21088 = output_schema21088;
this.input_schema21089 = input_schema21089;
this.output_checker21091 = output_checker21091;
this.ufv__ = ufv__;
this.example = example;
this.input_checker21090 = input_checker21090;
this.meta21102 = meta21102;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
example.main.t21101.prototype.om$core$IDisplayName$ = true;

example.main.t21101.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__10780__auto__,ufv___21106,output_schema21088_21107,input_schema21089_21108,input_checker21090_21109,output_checker21091_21110){
return (function (_){
var self__ = this;
var ___$1 = this;
return "example";
});})(validate__10780__auto__,ufv___21106,output_schema21088_21107,input_schema21089_21108,input_checker21090_21109,output_checker21091_21110))
;

example.main.t21101.prototype.om$core$IRender$ = true;

example.main.t21101.prototype.om$core$IRender$render$arity$1 = ((function (validate__10780__auto__,ufv___21106,output_schema21088_21107,input_schema21089_21108,input_checker21090_21109,output_checker21091_21110){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__21104 = {"className": "form-control", "value": cljs.core.constant$keyword$275.cljs$core$IFn$_invoke$arity$1(self__.state), "onChange": ((function (___$1,validate__10780__auto__,ufv___21106,output_schema21088_21107,input_schema21089_21108,input_checker21090_21109,output_checker21091_21110){
return (function (p1__21086_SHARP_){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.state,cljs.core.constant$keyword$275,p1__21086_SHARP_.target.value);
});})(___$1,validate__10780__auto__,ufv___21106,output_schema21088_21107,input_schema21089_21108,input_checker21090_21109,output_checker21091_21110))
};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__21104) : sablono.interpreter.input.call(null,G__21104));
});})(validate__10780__auto__,ufv___21106,output_schema21088_21107,input_schema21089_21108,input_checker21090_21109,output_checker21091_21110))
;

example.main.t21101.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__10780__auto__,ufv___21106,output_schema21088_21107,input_schema21089_21108,input_checker21090_21109,output_checker21091_21110){
return (function (_21103){
var self__ = this;
var _21103__$1 = this;
return self__.meta21102;
});})(validate__10780__auto__,ufv___21106,output_schema21088_21107,input_schema21089_21108,input_checker21090_21109,output_checker21091_21110))
;

example.main.t21101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__10780__auto__,ufv___21106,output_schema21088_21107,input_schema21089_21108,input_checker21090_21109,output_checker21091_21110){
return (function (_21103,meta21102__$1){
var self__ = this;
var _21103__$1 = this;
return (new example.main.t21101(self__.owner,self__.G__21092,self__.G__21093,self__.state,self__.validate__10780__auto__,self__.output_schema21088,self__.input_schema21089,self__.output_checker21091,self__.ufv__,self__.example,self__.input_checker21090,meta21102__$1));
});})(validate__10780__auto__,ufv___21106,output_schema21088_21107,input_schema21089_21108,input_checker21090_21109,output_checker21091_21110))
;

example.main.t21101.cljs$lang$type = true;

example.main.t21101.cljs$lang$ctorStr = "example.main/t21101";

example.main.t21101.cljs$lang$ctorPrWriter = ((function (validate__10780__auto__,ufv___21106,output_schema21088_21107,input_schema21089_21108,input_checker21090_21109,output_checker21091_21110){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"example.main/t21101");
});})(validate__10780__auto__,ufv___21106,output_schema21088_21107,input_schema21089_21108,input_checker21090_21109,output_checker21091_21110))
;

example.main.__GT_t21101 = ((function (validate__10780__auto__,ufv___21106,output_schema21088_21107,input_schema21089_21108,input_checker21090_21109,output_checker21091_21110){
return (function __GT_t21101(owner__$1,G__21092__$1,G__21093__$1,state__$1,validate__10780__auto____$1,output_schema21088__$1,input_schema21089__$1,output_checker21091__$1,ufv____$1,example__$2,input_checker21090__$1,meta21102){
return (new example.main.t21101(owner__$1,G__21092__$1,G__21093__$1,state__$1,validate__10780__auto____$1,output_schema21088__$1,input_schema21089__$1,output_checker21091__$1,ufv____$1,example__$2,input_checker21090__$1,meta21102));
});})(validate__10780__auto__,ufv___21106,output_schema21088_21107,input_schema21089_21108,input_checker21090_21109,output_checker21091_21110))
;

}

return (new example.main.t21101(owner,G__21092,G__21093,state,validate__10780__auto__,output_schema21088_21107,input_schema21089_21108,output_checker21091_21110,ufv___21106,example__$1,input_checker21090_21109,null));
break;
}
})();
if(cljs.core.truth_(validate__10780__auto__)){
var temp__4126__auto___21114 = (function (){var G__21105 = o__10783__auto__;
return (output_checker21091_21110.cljs$core$IFn$_invoke$arity$1 ? output_checker21091_21110.cljs$core$IFn$_invoke$arity$1(G__21105) : output_checker21091_21110.call(null,G__21105));
})();
if(cljs.core.truth_(temp__4126__auto___21114)){
var error__10782__auto___21115 = temp__4126__auto___21114;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"example","example",-115247617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21115], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21115,cljs.core.constant$keyword$21,o__10783__auto__,cljs.core.constant$keyword$22,output_schema21088_21107,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

return o__10783__auto__;
});})(ufv___21106,output_schema21088_21107,input_schema21089_21108,input_checker21090_21109,output_checker21091_21110))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(example.main.example),schema.core.make_fn_schema(output_schema21088_21107,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21089_21108], null)));

example.main.__GT_example = (function() {
var __GT_example = null;
var __GT_example__1 = (function (cursor__20840__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(example.main.example,cursor__20840__auto__);
});
var __GT_example__2 = (function (cursor__20840__auto__,m21087){
return om.core.build.cljs$core$IFn$_invoke$arity$3(example.main.example,cursor__20840__auto__,m21087);
});
__GT_example = function(cursor__20840__auto__,m21087){
switch(arguments.length){
case 1:
return __GT_example__1.call(this,cursor__20840__auto__);
case 2:
return __GT_example__2.call(this,cursor__20840__auto__,m21087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_example.cljs$core$IFn$_invoke$arity$1 = __GT_example__1;
__GT_example.cljs$core$IFn$_invoke$arity$2 = __GT_example__2;
return __GT_example;
})()
;

var ufv___21153 = schema.utils.use_fn_validation;
var output_schema21117_21154 = schema.core.Any;
var input_schema21118_21155 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker21119_21156 = schema.core.checker(input_schema21118_21155);
var output_checker21120_21157 = schema.core.checker(output_schema21117_21154);
/**
* Inputs: [app-state owner]
*/
example.main.app_view = ((function (ufv___21153,output_schema21117_21154,input_schema21118_21155,input_checker21119_21156,output_checker21120_21157){
return (function app_view(G__21121,G__21122){
var validate__10780__auto__ = ufv___21153.get_cell();
if(cljs.core.truth_(validate__10780__auto__)){
var args__10781__auto___21158 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21121,G__21122], null);
var temp__4126__auto___21159 = (function (){var G__21138 = args__10781__auto___21158;
return (input_checker21119_21156.cljs$core$IFn$_invoke$arity$1 ? input_checker21119_21156.cljs$core$IFn$_invoke$arity$1(G__21138) : input_checker21119_21156.call(null,G__21138));
})();
if(cljs.core.truth_(temp__4126__auto___21159)){
var error__10782__auto___21160 = temp__4126__auto___21159;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"app-view","app-view",-1295186174,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21160], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21160,cljs.core.constant$keyword$21,args__10781__auto___21158,cljs.core.constant$keyword$22,input_schema21118_21155,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

var o__10783__auto__ = (function (){var app_state = G__21121;
var owner = G__21122;
while(true){
if(typeof example.main.t21139 !== 'undefined'){
} else {

/**
* @constructor
*/
example.main.t21139 = (function (G__21121,app_view,input_checker21119,owner,output_checker21120,G__21122,output_schema21117,input_schema21118,validate__10780__auto__,app_state,ufv__,meta21140){
this.G__21121 = G__21121;
this.app_view = app_view;
this.input_checker21119 = input_checker21119;
this.owner = owner;
this.output_checker21120 = output_checker21120;
this.G__21122 = G__21122;
this.output_schema21117 = output_schema21117;
this.input_schema21118 = input_schema21118;
this.validate__10780__auto__ = validate__10780__auto__;
this.app_state = app_state;
this.ufv__ = ufv__;
this.meta21140 = meta21140;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
example.main.t21139.prototype.om$core$IDisplayName$ = true;

example.main.t21139.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__10780__auto__,ufv___21153,output_schema21117_21154,input_schema21118_21155,input_checker21119_21156,output_checker21120_21157){
return (function (_){
var self__ = this;
var ___$1 = this;
return "app-view";
});})(validate__10780__auto__,ufv___21153,output_schema21117_21154,input_schema21118_21155,input_checker21119_21156,output_checker21120_21157))
;

example.main.t21139.prototype.om$core$IRender$ = true;

example.main.t21139.prototype.om$core$IRender$render$arity$1 = ((function (validate__10780__auto__,ufv___21153,output_schema21117_21154,input_schema21118_21155,input_checker21119_21156,output_checker21120_21157){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__21144 = null;
var G__21145 = (function (){var G__21146 = null;
var G__21147 = "Example ";
var G__21148 = (function (){var G__21150 = {"href": "https://github.com/metosin/om-dev-tools/blob/master/example/src/cljs/example/main.cljs"};
var G__21151 = "(Code)";
return React.DOM.a(G__21150,G__21151);
})();
var G__21149 = sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$2(example.main.example,cljs.core.constant$keyword$272.cljs$core$IFn$_invoke$arity$1(self__.app_state)));
return React.DOM.h1(G__21146,G__21147,G__21148,G__21149);
})();
return React.DOM.div(G__21144,G__21145);
});})(validate__10780__auto__,ufv___21153,output_schema21117_21154,input_schema21118_21155,input_checker21119_21156,output_checker21120_21157))
;

example.main.t21139.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__10780__auto__,ufv___21153,output_schema21117_21154,input_schema21118_21155,input_checker21119_21156,output_checker21120_21157){
return (function (_21141){
var self__ = this;
var _21141__$1 = this;
return self__.meta21140;
});})(validate__10780__auto__,ufv___21153,output_schema21117_21154,input_schema21118_21155,input_checker21119_21156,output_checker21120_21157))
;

example.main.t21139.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__10780__auto__,ufv___21153,output_schema21117_21154,input_schema21118_21155,input_checker21119_21156,output_checker21120_21157){
return (function (_21141,meta21140__$1){
var self__ = this;
var _21141__$1 = this;
return (new example.main.t21139(self__.G__21121,self__.app_view,self__.input_checker21119,self__.owner,self__.output_checker21120,self__.G__21122,self__.output_schema21117,self__.input_schema21118,self__.validate__10780__auto__,self__.app_state,self__.ufv__,meta21140__$1));
});})(validate__10780__auto__,ufv___21153,output_schema21117_21154,input_schema21118_21155,input_checker21119_21156,output_checker21120_21157))
;

example.main.t21139.cljs$lang$type = true;

example.main.t21139.cljs$lang$ctorStr = "example.main/t21139";

example.main.t21139.cljs$lang$ctorPrWriter = ((function (validate__10780__auto__,ufv___21153,output_schema21117_21154,input_schema21118_21155,input_checker21119_21156,output_checker21120_21157){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"example.main/t21139");
});})(validate__10780__auto__,ufv___21153,output_schema21117_21154,input_schema21118_21155,input_checker21119_21156,output_checker21120_21157))
;

example.main.__GT_t21139 = ((function (validate__10780__auto__,ufv___21153,output_schema21117_21154,input_schema21118_21155,input_checker21119_21156,output_checker21120_21157){
return (function __GT_t21139(G__21121__$1,app_view__$1,input_checker21119__$1,owner__$1,output_checker21120__$1,G__21122__$1,output_schema21117__$1,input_schema21118__$1,validate__10780__auto____$1,app_state__$1,ufv____$1,meta21140){
return (new example.main.t21139(G__21121__$1,app_view__$1,input_checker21119__$1,owner__$1,output_checker21120__$1,G__21122__$1,output_schema21117__$1,input_schema21118__$1,validate__10780__auto____$1,app_state__$1,ufv____$1,meta21140));
});})(validate__10780__auto__,ufv___21153,output_schema21117_21154,input_schema21118_21155,input_checker21119_21156,output_checker21120_21157))
;

}

return (new example.main.t21139(G__21121,app_view,input_checker21119_21156,owner,output_checker21120_21157,G__21122,output_schema21117_21154,input_schema21118_21155,validate__10780__auto__,app_state,ufv___21153,null));
break;
}
})();
if(cljs.core.truth_(validate__10780__auto__)){
var temp__4126__auto___21161 = (function (){var G__21152 = o__10783__auto__;
return (output_checker21120_21157.cljs$core$IFn$_invoke$arity$1 ? output_checker21120_21157.cljs$core$IFn$_invoke$arity$1(G__21152) : output_checker21120_21157.call(null,G__21152));
})();
if(cljs.core.truth_(temp__4126__auto___21161)){
var error__10782__auto___21162 = temp__4126__auto___21161;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"app-view","app-view",-1295186174,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21162], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21162,cljs.core.constant$keyword$21,o__10783__auto__,cljs.core.constant$keyword$22,output_schema21117_21154,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

return o__10783__auto__;
});})(ufv___21153,output_schema21117_21154,input_schema21118_21155,input_checker21119_21156,output_checker21120_21157))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(example.main.app_view),schema.core.make_fn_schema(output_schema21117_21154,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21118_21155], null)));

example.main.__GT_app_view = (function() {
var __GT_app_view = null;
var __GT_app_view__1 = (function (cursor__20840__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(example.main.app_view,cursor__20840__auto__);
});
var __GT_app_view__2 = (function (cursor__20840__auto__,m21116){
return om.core.build.cljs$core$IFn$_invoke$arity$3(example.main.app_view,cursor__20840__auto__,m21116);
});
__GT_app_view = function(cursor__20840__auto__,m21116){
switch(arguments.length){
case 1:
return __GT_app_view__1.call(this,cursor__20840__auto__);
case 2:
return __GT_app_view__2.call(this,cursor__20840__auto__,m21116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_app_view.cljs$core$IFn$_invoke$arity$1 = __GT_app_view__1;
__GT_app_view.cljs$core$IFn$_invoke$arity$2 = __GT_app_view__2;
return __GT_app_view;
})()
;
example.main.restart_BANG_ = (function restart_BANG_(){
return om_dev_tools.core.root(example.main.app_view,example.main.state,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$93,document.getElementById("app"),cljs.core.constant$keyword$268,document.getElementById("dev"),cljs.core.constant$keyword$267,example.main.dev_state], null));
});
example.main.restart_BANG_();

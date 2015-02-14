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
example.main.state = (function (){var G__21086 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$269,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$119,cljs.core.constant$keyword$271], null),cljs.core.constant$keyword$270,null,cljs.core.constant$keyword$271,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$273,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null),cljs.core.constant$keyword$274,"    abc   "], null),cljs.core.constant$keyword$272,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$275,"hello world"], null)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21086) : cljs.core.atom.call(null,G__21086));
})();
}
if(typeof example.main.dev_state !== 'undefined'){
} else {
example.main.dev_state = (function (){var G__21087 = cljs.core.assoc_in(om_dev_tools.core.empty_state(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$254,cljs.core.constant$keyword$272], null),cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21087) : cljs.core.atom.call(null,G__21087));
})();
}

var ufv___21106 = schema.utils.use_fn_validation;
var output_schema21090_21107 = schema.core.Any;
var input_schema21091_21108 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"state","state",-348086572,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker21092_21109 = schema.core.checker(input_schema21091_21108);
var output_checker21093_21110 = schema.core.checker(output_schema21090_21107);
/**
* Inputs: [state owner]
*/
example.main.example = ((function (ufv___21106,output_schema21090_21107,input_schema21091_21108,input_checker21092_21109,output_checker21093_21110){
return (function example__$1(G__21094,G__21095){
var validate__10780__auto__ = ufv___21106.get_cell();
if(cljs.core.truth_(validate__10780__auto__)){
var args__10781__auto___21111 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21094,G__21095], null);
var temp__4126__auto___21112 = (function (){var G__21101 = args__10781__auto___21111;
return (input_checker21092_21109.cljs$core$IFn$_invoke$arity$1 ? input_checker21092_21109.cljs$core$IFn$_invoke$arity$1(G__21101) : input_checker21092_21109.call(null,G__21101));
})();
if(cljs.core.truth_(temp__4126__auto___21112)){
var error__10782__auto___21113 = temp__4126__auto___21112;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"example","example",-115247617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21113], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21113,cljs.core.constant$keyword$21,args__10781__auto___21111,cljs.core.constant$keyword$22,input_schema21091_21108,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

var o__10783__auto__ = (function (){var state = G__21094;
var owner = G__21095;
while(true){
if(typeof example.main.t21102 !== 'undefined'){
} else {

/**
* @constructor
*/
example.main.t21102 = (function (owner,input_checker21092,G__21095,state,validate__10780__auto__,output_schema21090,output_checker21093,G__21094,ufv__,input_schema21091,example,meta21103){
this.owner = owner;
this.input_checker21092 = input_checker21092;
this.G__21095 = G__21095;
this.state = state;
this.validate__10780__auto__ = validate__10780__auto__;
this.output_schema21090 = output_schema21090;
this.output_checker21093 = output_checker21093;
this.G__21094 = G__21094;
this.ufv__ = ufv__;
this.input_schema21091 = input_schema21091;
this.example = example;
this.meta21103 = meta21103;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
example.main.t21102.prototype.om$core$IDisplayName$ = true;

example.main.t21102.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__10780__auto__,ufv___21106,output_schema21090_21107,input_schema21091_21108,input_checker21092_21109,output_checker21093_21110){
return (function (_){
var self__ = this;
var ___$1 = this;
return "example";
});})(validate__10780__auto__,ufv___21106,output_schema21090_21107,input_schema21091_21108,input_checker21092_21109,output_checker21093_21110))
;

example.main.t21102.prototype.om$core$IRender$ = true;

example.main.t21102.prototype.om$core$IRender$render$arity$1 = ((function (validate__10780__auto__,ufv___21106,output_schema21090_21107,input_schema21091_21108,input_checker21092_21109,output_checker21093_21110){
return (function (_){
var self__ = this;
var ___$1 = this;
return sablono.interpreter.create_element("input",{"className": "form-control", "value": cljs.core.constant$keyword$275.cljs$core$IFn$_invoke$arity$1(self__.state), "onChange": ((function (___$1,validate__10780__auto__,ufv___21106,output_schema21090_21107,input_schema21091_21108,input_checker21092_21109,output_checker21093_21110){
return (function (p1__21088_SHARP_){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.state,cljs.core.constant$keyword$275,p1__21088_SHARP_.target.value);
});})(___$1,validate__10780__auto__,ufv___21106,output_schema21090_21107,input_schema21091_21108,input_checker21092_21109,output_checker21093_21110))
});
});})(validate__10780__auto__,ufv___21106,output_schema21090_21107,input_schema21091_21108,input_checker21092_21109,output_checker21093_21110))
;

example.main.t21102.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__10780__auto__,ufv___21106,output_schema21090_21107,input_schema21091_21108,input_checker21092_21109,output_checker21093_21110){
return (function (_21104){
var self__ = this;
var _21104__$1 = this;
return self__.meta21103;
});})(validate__10780__auto__,ufv___21106,output_schema21090_21107,input_schema21091_21108,input_checker21092_21109,output_checker21093_21110))
;

example.main.t21102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__10780__auto__,ufv___21106,output_schema21090_21107,input_schema21091_21108,input_checker21092_21109,output_checker21093_21110){
return (function (_21104,meta21103__$1){
var self__ = this;
var _21104__$1 = this;
return (new example.main.t21102(self__.owner,self__.input_checker21092,self__.G__21095,self__.state,self__.validate__10780__auto__,self__.output_schema21090,self__.output_checker21093,self__.G__21094,self__.ufv__,self__.input_schema21091,self__.example,meta21103__$1));
});})(validate__10780__auto__,ufv___21106,output_schema21090_21107,input_schema21091_21108,input_checker21092_21109,output_checker21093_21110))
;

example.main.t21102.cljs$lang$type = true;

example.main.t21102.cljs$lang$ctorStr = "example.main/t21102";

example.main.t21102.cljs$lang$ctorPrWriter = ((function (validate__10780__auto__,ufv___21106,output_schema21090_21107,input_schema21091_21108,input_checker21092_21109,output_checker21093_21110){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"example.main/t21102");
});})(validate__10780__auto__,ufv___21106,output_schema21090_21107,input_schema21091_21108,input_checker21092_21109,output_checker21093_21110))
;

example.main.__GT_t21102 = ((function (validate__10780__auto__,ufv___21106,output_schema21090_21107,input_schema21091_21108,input_checker21092_21109,output_checker21093_21110){
return (function __GT_t21102(owner__$1,input_checker21092__$1,G__21095__$1,state__$1,validate__10780__auto____$1,output_schema21090__$1,output_checker21093__$1,G__21094__$1,ufv____$1,input_schema21091__$1,example__$2,meta21103){
return (new example.main.t21102(owner__$1,input_checker21092__$1,G__21095__$1,state__$1,validate__10780__auto____$1,output_schema21090__$1,output_checker21093__$1,G__21094__$1,ufv____$1,input_schema21091__$1,example__$2,meta21103));
});})(validate__10780__auto__,ufv___21106,output_schema21090_21107,input_schema21091_21108,input_checker21092_21109,output_checker21093_21110))
;

}

return (new example.main.t21102(owner,input_checker21092_21109,G__21095,state,validate__10780__auto__,output_schema21090_21107,output_checker21093_21110,G__21094,ufv___21106,input_schema21091_21108,example__$1,null));
break;
}
})();
if(cljs.core.truth_(validate__10780__auto__)){
var temp__4126__auto___21114 = (function (){var G__21105 = o__10783__auto__;
return (output_checker21093_21110.cljs$core$IFn$_invoke$arity$1 ? output_checker21093_21110.cljs$core$IFn$_invoke$arity$1(G__21105) : output_checker21093_21110.call(null,G__21105));
})();
if(cljs.core.truth_(temp__4126__auto___21114)){
var error__10782__auto___21115 = temp__4126__auto___21114;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"example","example",-115247617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21115], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21115,cljs.core.constant$keyword$21,o__10783__auto__,cljs.core.constant$keyword$22,output_schema21090_21107,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

return o__10783__auto__;
});})(ufv___21106,output_schema21090_21107,input_schema21091_21108,input_checker21092_21109,output_checker21093_21110))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(example.main.example),schema.core.make_fn_schema(output_schema21090_21107,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21091_21108], null)));

example.main.__GT_example = (function() {
var __GT_example = null;
var __GT_example__1 = (function (cursor__20840__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(example.main.example,cursor__20840__auto__);
});
var __GT_example__2 = (function (cursor__20840__auto__,m21089){
return om.core.build.cljs$core$IFn$_invoke$arity$3(example.main.example,cursor__20840__auto__,m21089);
});
__GT_example = function(cursor__20840__auto__,m21089){
switch(arguments.length){
case 1:
return __GT_example__1.call(this,cursor__20840__auto__);
case 2:
return __GT_example__2.call(this,cursor__20840__auto__,m21089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_example.cljs$core$IFn$_invoke$arity$1 = __GT_example__1;
__GT_example.cljs$core$IFn$_invoke$arity$2 = __GT_example__2;
return __GT_example;
})()
;

var ufv___21159 = schema.utils.use_fn_validation;
var output_schema21117_21160 = schema.core.Any;
var input_schema21118_21161 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker21119_21162 = schema.core.checker(input_schema21118_21161);
var output_checker21120_21163 = schema.core.checker(output_schema21117_21160);
/**
* Inputs: [app-state owner]
*/
example.main.app_view = ((function (ufv___21159,output_schema21117_21160,input_schema21118_21161,input_checker21119_21162,output_checker21120_21163){
return (function app_view(G__21121,G__21122){
var validate__10780__auto__ = ufv___21159.get_cell();
if(cljs.core.truth_(validate__10780__auto__)){
var args__10781__auto___21164 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21121,G__21122], null);
var temp__4126__auto___21165 = (function (){var G__21141 = args__10781__auto___21164;
return (input_checker21119_21162.cljs$core$IFn$_invoke$arity$1 ? input_checker21119_21162.cljs$core$IFn$_invoke$arity$1(G__21141) : input_checker21119_21162.call(null,G__21141));
})();
if(cljs.core.truth_(temp__4126__auto___21165)){
var error__10782__auto___21166 = temp__4126__auto___21165;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"app-view","app-view",-1295186174,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21166], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21166,cljs.core.constant$keyword$21,args__10781__auto___21164,cljs.core.constant$keyword$22,input_schema21118_21161,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

var o__10783__auto__ = (function (){var app_state = G__21121;
var owner = G__21122;
while(true){
if(typeof example.main.t21142 !== 'undefined'){
} else {

/**
* @constructor
*/
example.main.t21142 = (function (G__21121,app_view,input_checker21119,owner,output_checker21120,G__21122,output_schema21117,input_schema21118,validate__10780__auto__,app_state,ufv__,meta21143){
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
this.meta21143 = meta21143;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
example.main.t21142.prototype.om$core$IDisplayName$ = true;

example.main.t21142.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__10780__auto__,ufv___21159,output_schema21117_21160,input_schema21118_21161,input_checker21119_21162,output_checker21120_21163){
return (function (_){
var self__ = this;
var ___$1 = this;
return "app-view";
});})(validate__10780__auto__,ufv___21159,output_schema21117_21160,input_schema21118_21161,input_checker21119_21162,output_checker21120_21163))
;

example.main.t21142.prototype.om$core$IRender$ = true;

example.main.t21142.prototype.om$core$IRender$render$arity$1 = ((function (validate__10780__auto__,ufv___21159,output_schema21117_21160,input_schema21118_21161,input_checker21119_21162,output_checker21120_21163){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__21147 = "div";
var G__21148 = null;
var G__21149 = (function (){var G__21150 = "h1";
var G__21151 = null;
var G__21152 = "Example ";
var G__21153 = (function (){var G__21155 = "a";
var G__21156 = {"href": "https://github.com/metosin/om-dev-tools/blob/master/example/src/cljs/example/main.cljs"};
var G__21157 = "(Code)";
return React.createElement(G__21155,G__21156,G__21157);
})();
var G__21154 = sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$2(example.main.example,cljs.core.constant$keyword$272.cljs$core$IFn$_invoke$arity$1(self__.app_state)));
return React.createElement(G__21150,G__21151,G__21152,G__21153,G__21154);
})();
return React.createElement(G__21147,G__21148,G__21149);
});})(validate__10780__auto__,ufv___21159,output_schema21117_21160,input_schema21118_21161,input_checker21119_21162,output_checker21120_21163))
;

example.main.t21142.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__10780__auto__,ufv___21159,output_schema21117_21160,input_schema21118_21161,input_checker21119_21162,output_checker21120_21163){
return (function (_21144){
var self__ = this;
var _21144__$1 = this;
return self__.meta21143;
});})(validate__10780__auto__,ufv___21159,output_schema21117_21160,input_schema21118_21161,input_checker21119_21162,output_checker21120_21163))
;

example.main.t21142.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__10780__auto__,ufv___21159,output_schema21117_21160,input_schema21118_21161,input_checker21119_21162,output_checker21120_21163){
return (function (_21144,meta21143__$1){
var self__ = this;
var _21144__$1 = this;
return (new example.main.t21142(self__.G__21121,self__.app_view,self__.input_checker21119,self__.owner,self__.output_checker21120,self__.G__21122,self__.output_schema21117,self__.input_schema21118,self__.validate__10780__auto__,self__.app_state,self__.ufv__,meta21143__$1));
});})(validate__10780__auto__,ufv___21159,output_schema21117_21160,input_schema21118_21161,input_checker21119_21162,output_checker21120_21163))
;

example.main.t21142.cljs$lang$type = true;

example.main.t21142.cljs$lang$ctorStr = "example.main/t21142";

example.main.t21142.cljs$lang$ctorPrWriter = ((function (validate__10780__auto__,ufv___21159,output_schema21117_21160,input_schema21118_21161,input_checker21119_21162,output_checker21120_21163){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"example.main/t21142");
});})(validate__10780__auto__,ufv___21159,output_schema21117_21160,input_schema21118_21161,input_checker21119_21162,output_checker21120_21163))
;

example.main.__GT_t21142 = ((function (validate__10780__auto__,ufv___21159,output_schema21117_21160,input_schema21118_21161,input_checker21119_21162,output_checker21120_21163){
return (function __GT_t21142(G__21121__$1,app_view__$1,input_checker21119__$1,owner__$1,output_checker21120__$1,G__21122__$1,output_schema21117__$1,input_schema21118__$1,validate__10780__auto____$1,app_state__$1,ufv____$1,meta21143){
return (new example.main.t21142(G__21121__$1,app_view__$1,input_checker21119__$1,owner__$1,output_checker21120__$1,G__21122__$1,output_schema21117__$1,input_schema21118__$1,validate__10780__auto____$1,app_state__$1,ufv____$1,meta21143));
});})(validate__10780__auto__,ufv___21159,output_schema21117_21160,input_schema21118_21161,input_checker21119_21162,output_checker21120_21163))
;

}

return (new example.main.t21142(G__21121,app_view,input_checker21119_21162,owner,output_checker21120_21163,G__21122,output_schema21117_21160,input_schema21118_21161,validate__10780__auto__,app_state,ufv___21159,null));
break;
}
})();
if(cljs.core.truth_(validate__10780__auto__)){
var temp__4126__auto___21167 = (function (){var G__21158 = o__10783__auto__;
return (output_checker21120_21163.cljs$core$IFn$_invoke$arity$1 ? output_checker21120_21163.cljs$core$IFn$_invoke$arity$1(G__21158) : output_checker21120_21163.call(null,G__21158));
})();
if(cljs.core.truth_(temp__4126__auto___21167)){
var error__10782__auto___21168 = temp__4126__auto___21167;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"app-view","app-view",-1295186174,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21168], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21168,cljs.core.constant$keyword$21,o__10783__auto__,cljs.core.constant$keyword$22,output_schema21117_21160,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

return o__10783__auto__;
});})(ufv___21159,output_schema21117_21160,input_schema21118_21161,input_checker21119_21162,output_checker21120_21163))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(example.main.app_view),schema.core.make_fn_schema(output_schema21117_21160,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21118_21161], null)));

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

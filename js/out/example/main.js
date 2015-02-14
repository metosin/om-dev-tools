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
example.main.state = (function (){var G__21139 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$268,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$119,cljs.core.constant$keyword$270], null),cljs.core.constant$keyword$269,null,cljs.core.constant$keyword$270,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$272,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null),cljs.core.constant$keyword$273,"    abc   "], null),cljs.core.constant$keyword$271,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$274,"hello world"], null)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21139) : cljs.core.atom.call(null,G__21139));
})();
}
if(typeof example.main.dev_state !== 'undefined'){
} else {
example.main.dev_state = (function (){var G__21140 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(om_dev_tools.core.empty_state(),cljs.core.constant$keyword$260,true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$255,cljs.core.constant$keyword$271], null),cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21140) : cljs.core.atom.call(null,G__21140));
})();
}

var ufv___21159 = schema.utils.use_fn_validation;
var output_schema21143_21160 = schema.core.Any;
var input_schema21144_21161 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"state","state",-348086572,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker21145_21162 = schema.core.checker(input_schema21144_21161);
var output_checker21146_21163 = schema.core.checker(output_schema21143_21160);
/**
* Inputs: [state owner]
*/
example.main.example = ((function (ufv___21159,output_schema21143_21160,input_schema21144_21161,input_checker21145_21162,output_checker21146_21163){
return (function example__$1(G__21147,G__21148){
var validate__10780__auto__ = ufv___21159.get_cell();
if(cljs.core.truth_(validate__10780__auto__)){
var args__10781__auto___21164 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21147,G__21148], null);
var temp__4126__auto___21165 = (function (){var G__21154 = args__10781__auto___21164;
return (input_checker21145_21162.cljs$core$IFn$_invoke$arity$1 ? input_checker21145_21162.cljs$core$IFn$_invoke$arity$1(G__21154) : input_checker21145_21162.call(null,G__21154));
})();
if(cljs.core.truth_(temp__4126__auto___21165)){
var error__10782__auto___21166 = temp__4126__auto___21165;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"example","example",-115247617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21166], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21166,cljs.core.constant$keyword$21,args__10781__auto___21164,cljs.core.constant$keyword$22,input_schema21144_21161,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

var o__10783__auto__ = (function (){var state = G__21147;
var owner = G__21148;
while(true){
if(typeof example.main.t21155 !== 'undefined'){
} else {

/**
* @constructor
*/
example.main.t21155 = (function (G__21147,input_checker21145,output_schema21143,owner,output_checker21146,G__21148,state,validate__10780__auto__,input_schema21144,ufv__,example,meta21156){
this.G__21147 = G__21147;
this.input_checker21145 = input_checker21145;
this.output_schema21143 = output_schema21143;
this.owner = owner;
this.output_checker21146 = output_checker21146;
this.G__21148 = G__21148;
this.state = state;
this.validate__10780__auto__ = validate__10780__auto__;
this.input_schema21144 = input_schema21144;
this.ufv__ = ufv__;
this.example = example;
this.meta21156 = meta21156;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
example.main.t21155.prototype.om$core$IDisplayName$ = true;

example.main.t21155.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__10780__auto__,ufv___21159,output_schema21143_21160,input_schema21144_21161,input_checker21145_21162,output_checker21146_21163){
return (function (_){
var self__ = this;
var ___$1 = this;
return "example";
});})(validate__10780__auto__,ufv___21159,output_schema21143_21160,input_schema21144_21161,input_checker21145_21162,output_checker21146_21163))
;

example.main.t21155.prototype.om$core$IRender$ = true;

example.main.t21155.prototype.om$core$IRender$render$arity$1 = ((function (validate__10780__auto__,ufv___21159,output_schema21143_21160,input_schema21144_21161,input_checker21145_21162,output_checker21146_21163){
return (function (_){
var self__ = this;
var ___$1 = this;
return sablono.interpreter.create_element("input",{"className": "form-control", "value": cljs.core.constant$keyword$274.cljs$core$IFn$_invoke$arity$1(self__.state), "onChange": ((function (___$1,validate__10780__auto__,ufv___21159,output_schema21143_21160,input_schema21144_21161,input_checker21145_21162,output_checker21146_21163){
return (function (p1__21141_SHARP_){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.state,cljs.core.constant$keyword$274,p1__21141_SHARP_.target.value);
});})(___$1,validate__10780__auto__,ufv___21159,output_schema21143_21160,input_schema21144_21161,input_checker21145_21162,output_checker21146_21163))
});
});})(validate__10780__auto__,ufv___21159,output_schema21143_21160,input_schema21144_21161,input_checker21145_21162,output_checker21146_21163))
;

example.main.t21155.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__10780__auto__,ufv___21159,output_schema21143_21160,input_schema21144_21161,input_checker21145_21162,output_checker21146_21163){
return (function (_21157){
var self__ = this;
var _21157__$1 = this;
return self__.meta21156;
});})(validate__10780__auto__,ufv___21159,output_schema21143_21160,input_schema21144_21161,input_checker21145_21162,output_checker21146_21163))
;

example.main.t21155.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__10780__auto__,ufv___21159,output_schema21143_21160,input_schema21144_21161,input_checker21145_21162,output_checker21146_21163){
return (function (_21157,meta21156__$1){
var self__ = this;
var _21157__$1 = this;
return (new example.main.t21155(self__.G__21147,self__.input_checker21145,self__.output_schema21143,self__.owner,self__.output_checker21146,self__.G__21148,self__.state,self__.validate__10780__auto__,self__.input_schema21144,self__.ufv__,self__.example,meta21156__$1));
});})(validate__10780__auto__,ufv___21159,output_schema21143_21160,input_schema21144_21161,input_checker21145_21162,output_checker21146_21163))
;

example.main.t21155.cljs$lang$type = true;

example.main.t21155.cljs$lang$ctorStr = "example.main/t21155";

example.main.t21155.cljs$lang$ctorPrWriter = ((function (validate__10780__auto__,ufv___21159,output_schema21143_21160,input_schema21144_21161,input_checker21145_21162,output_checker21146_21163){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"example.main/t21155");
});})(validate__10780__auto__,ufv___21159,output_schema21143_21160,input_schema21144_21161,input_checker21145_21162,output_checker21146_21163))
;

example.main.__GT_t21155 = ((function (validate__10780__auto__,ufv___21159,output_schema21143_21160,input_schema21144_21161,input_checker21145_21162,output_checker21146_21163){
return (function __GT_t21155(G__21147__$1,input_checker21145__$1,output_schema21143__$1,owner__$1,output_checker21146__$1,G__21148__$1,state__$1,validate__10780__auto____$1,input_schema21144__$1,ufv____$1,example__$2,meta21156){
return (new example.main.t21155(G__21147__$1,input_checker21145__$1,output_schema21143__$1,owner__$1,output_checker21146__$1,G__21148__$1,state__$1,validate__10780__auto____$1,input_schema21144__$1,ufv____$1,example__$2,meta21156));
});})(validate__10780__auto__,ufv___21159,output_schema21143_21160,input_schema21144_21161,input_checker21145_21162,output_checker21146_21163))
;

}

return (new example.main.t21155(G__21147,input_checker21145_21162,output_schema21143_21160,owner,output_checker21146_21163,G__21148,state,validate__10780__auto__,input_schema21144_21161,ufv___21159,example__$1,null));
break;
}
})();
if(cljs.core.truth_(validate__10780__auto__)){
var temp__4126__auto___21167 = (function (){var G__21158 = o__10783__auto__;
return (output_checker21146_21163.cljs$core$IFn$_invoke$arity$1 ? output_checker21146_21163.cljs$core$IFn$_invoke$arity$1(G__21158) : output_checker21146_21163.call(null,G__21158));
})();
if(cljs.core.truth_(temp__4126__auto___21167)){
var error__10782__auto___21168 = temp__4126__auto___21167;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"example","example",-115247617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21168], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21168,cljs.core.constant$keyword$21,o__10783__auto__,cljs.core.constant$keyword$22,output_schema21143_21160,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

return o__10783__auto__;
});})(ufv___21159,output_schema21143_21160,input_schema21144_21161,input_checker21145_21162,output_checker21146_21163))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(example.main.example),schema.core.make_fn_schema(output_schema21143_21160,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21144_21161], null)));

example.main.__GT_example = (function() {
var __GT_example = null;
var __GT_example__1 = (function (cursor__20840__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(example.main.example,cursor__20840__auto__);
});
var __GT_example__2 = (function (cursor__20840__auto__,m21142){
return om.core.build.cljs$core$IFn$_invoke$arity$3(example.main.example,cursor__20840__auto__,m21142);
});
__GT_example = function(cursor__20840__auto__,m21142){
switch(arguments.length){
case 1:
return __GT_example__1.call(this,cursor__20840__auto__);
case 2:
return __GT_example__2.call(this,cursor__20840__auto__,m21142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_example.cljs$core$IFn$_invoke$arity$1 = __GT_example__1;
__GT_example.cljs$core$IFn$_invoke$arity$2 = __GT_example__2;
return __GT_example;
})()
;

var ufv___21212 = schema.utils.use_fn_validation;
var output_schema21170_21213 = schema.core.Any;
var input_schema21171_21214 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker21172_21215 = schema.core.checker(input_schema21171_21214);
var output_checker21173_21216 = schema.core.checker(output_schema21170_21213);
/**
* Inputs: [app-state owner]
*/
example.main.app_view = ((function (ufv___21212,output_schema21170_21213,input_schema21171_21214,input_checker21172_21215,output_checker21173_21216){
return (function app_view(G__21174,G__21175){
var validate__10780__auto__ = ufv___21212.get_cell();
if(cljs.core.truth_(validate__10780__auto__)){
var args__10781__auto___21217 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21174,G__21175], null);
var temp__4126__auto___21218 = (function (){var G__21194 = args__10781__auto___21217;
return (input_checker21172_21215.cljs$core$IFn$_invoke$arity$1 ? input_checker21172_21215.cljs$core$IFn$_invoke$arity$1(G__21194) : input_checker21172_21215.call(null,G__21194));
})();
if(cljs.core.truth_(temp__4126__auto___21218)){
var error__10782__auto___21219 = temp__4126__auto___21218;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"app-view","app-view",-1295186174,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21219], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21219,cljs.core.constant$keyword$21,args__10781__auto___21217,cljs.core.constant$keyword$22,input_schema21171_21214,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

var o__10783__auto__ = (function (){var app_state = G__21174;
var owner = G__21175;
while(true){
if(typeof example.main.t21195 !== 'undefined'){
} else {

/**
* @constructor
*/
example.main.t21195 = (function (app_view,owner,input_schema21171,output_checker21173,output_schema21170,validate__10780__auto__,G__21174,G__21175,app_state,input_checker21172,ufv__,meta21196){
this.app_view = app_view;
this.owner = owner;
this.input_schema21171 = input_schema21171;
this.output_checker21173 = output_checker21173;
this.output_schema21170 = output_schema21170;
this.validate__10780__auto__ = validate__10780__auto__;
this.G__21174 = G__21174;
this.G__21175 = G__21175;
this.app_state = app_state;
this.input_checker21172 = input_checker21172;
this.ufv__ = ufv__;
this.meta21196 = meta21196;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
example.main.t21195.prototype.om$core$IDisplayName$ = true;

example.main.t21195.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__10780__auto__,ufv___21212,output_schema21170_21213,input_schema21171_21214,input_checker21172_21215,output_checker21173_21216){
return (function (_){
var self__ = this;
var ___$1 = this;
return "app-view";
});})(validate__10780__auto__,ufv___21212,output_schema21170_21213,input_schema21171_21214,input_checker21172_21215,output_checker21173_21216))
;

example.main.t21195.prototype.om$core$IRender$ = true;

example.main.t21195.prototype.om$core$IRender$render$arity$1 = ((function (validate__10780__auto__,ufv___21212,output_schema21170_21213,input_schema21171_21214,input_checker21172_21215,output_checker21173_21216){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__21200 = "div";
var G__21201 = null;
var G__21202 = (function (){var G__21203 = "h1";
var G__21204 = null;
var G__21205 = "Example ";
var G__21206 = (function (){var G__21208 = "a";
var G__21209 = {"href": "https://github.com/metosin/om-dev-tools/blob/master/example/src/cljs/example/main.cljs"};
var G__21210 = "(Code)";
return React.createElement(G__21208,G__21209,G__21210);
})();
var G__21207 = sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$2(example.main.example,cljs.core.constant$keyword$271.cljs$core$IFn$_invoke$arity$1(self__.app_state)));
return React.createElement(G__21203,G__21204,G__21205,G__21206,G__21207);
})();
return React.createElement(G__21200,G__21201,G__21202);
});})(validate__10780__auto__,ufv___21212,output_schema21170_21213,input_schema21171_21214,input_checker21172_21215,output_checker21173_21216))
;

example.main.t21195.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__10780__auto__,ufv___21212,output_schema21170_21213,input_schema21171_21214,input_checker21172_21215,output_checker21173_21216){
return (function (_21197){
var self__ = this;
var _21197__$1 = this;
return self__.meta21196;
});})(validate__10780__auto__,ufv___21212,output_schema21170_21213,input_schema21171_21214,input_checker21172_21215,output_checker21173_21216))
;

example.main.t21195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__10780__auto__,ufv___21212,output_schema21170_21213,input_schema21171_21214,input_checker21172_21215,output_checker21173_21216){
return (function (_21197,meta21196__$1){
var self__ = this;
var _21197__$1 = this;
return (new example.main.t21195(self__.app_view,self__.owner,self__.input_schema21171,self__.output_checker21173,self__.output_schema21170,self__.validate__10780__auto__,self__.G__21174,self__.G__21175,self__.app_state,self__.input_checker21172,self__.ufv__,meta21196__$1));
});})(validate__10780__auto__,ufv___21212,output_schema21170_21213,input_schema21171_21214,input_checker21172_21215,output_checker21173_21216))
;

example.main.t21195.cljs$lang$type = true;

example.main.t21195.cljs$lang$ctorStr = "example.main/t21195";

example.main.t21195.cljs$lang$ctorPrWriter = ((function (validate__10780__auto__,ufv___21212,output_schema21170_21213,input_schema21171_21214,input_checker21172_21215,output_checker21173_21216){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"example.main/t21195");
});})(validate__10780__auto__,ufv___21212,output_schema21170_21213,input_schema21171_21214,input_checker21172_21215,output_checker21173_21216))
;

example.main.__GT_t21195 = ((function (validate__10780__auto__,ufv___21212,output_schema21170_21213,input_schema21171_21214,input_checker21172_21215,output_checker21173_21216){
return (function __GT_t21195(app_view__$1,owner__$1,input_schema21171__$1,output_checker21173__$1,output_schema21170__$1,validate__10780__auto____$1,G__21174__$1,G__21175__$1,app_state__$1,input_checker21172__$1,ufv____$1,meta21196){
return (new example.main.t21195(app_view__$1,owner__$1,input_schema21171__$1,output_checker21173__$1,output_schema21170__$1,validate__10780__auto____$1,G__21174__$1,G__21175__$1,app_state__$1,input_checker21172__$1,ufv____$1,meta21196));
});})(validate__10780__auto__,ufv___21212,output_schema21170_21213,input_schema21171_21214,input_checker21172_21215,output_checker21173_21216))
;

}

return (new example.main.t21195(app_view,owner,input_schema21171_21214,output_checker21173_21216,output_schema21170_21213,validate__10780__auto__,G__21174,G__21175,app_state,input_checker21172_21215,ufv___21212,null));
break;
}
})();
if(cljs.core.truth_(validate__10780__auto__)){
var temp__4126__auto___21220 = (function (){var G__21211 = o__10783__auto__;
return (output_checker21173_21216.cljs$core$IFn$_invoke$arity$1 ? output_checker21173_21216.cljs$core$IFn$_invoke$arity$1(G__21211) : output_checker21173_21216.call(null,G__21211));
})();
if(cljs.core.truth_(temp__4126__auto___21220)){
var error__10782__auto___21221 = temp__4126__auto___21220;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"app-view","app-view",-1295186174,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10782__auto___21221], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,error__10782__auto___21221,cljs.core.constant$keyword$21,o__10783__auto__,cljs.core.constant$keyword$22,output_schema21170_21213,cljs.core.constant$keyword$23,cljs.core.constant$keyword$24], null));
} else {
}
} else {
}

return o__10783__auto__;
});})(ufv___21212,output_schema21170_21213,input_schema21171_21214,input_checker21172_21215,output_checker21173_21216))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(example.main.app_view),schema.core.make_fn_schema(output_schema21170_21213,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21171_21214], null)));

example.main.__GT_app_view = (function() {
var __GT_app_view = null;
var __GT_app_view__1 = (function (cursor__20840__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(example.main.app_view,cursor__20840__auto__);
});
var __GT_app_view__2 = (function (cursor__20840__auto__,m21169){
return om.core.build.cljs$core$IFn$_invoke$arity$3(example.main.app_view,cursor__20840__auto__,m21169);
});
__GT_app_view = function(cursor__20840__auto__,m21169){
switch(arguments.length){
case 1:
return __GT_app_view__1.call(this,cursor__20840__auto__);
case 2:
return __GT_app_view__2.call(this,cursor__20840__auto__,m21169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_app_view.cljs$core$IFn$_invoke$arity$1 = __GT_app_view__1;
__GT_app_view.cljs$core$IFn$_invoke$arity$2 = __GT_app_view__2;
return __GT_app_view;
})()
;
example.main.restart_BANG_ = (function restart_BANG_(){
return om_dev_tools.core.root(example.main.app_view,example.main.state,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$93,document.getElementById("app"),cljs.core.constant$keyword$267,document.getElementById("dev"),cljs.core.constant$keyword$266,example.main.dev_state], null));
});
example.main.restart_BANG_();

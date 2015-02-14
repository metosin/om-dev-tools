// Compiled by ClojureScript 0.0-2850 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){
return (function() { 
var G__32458__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__32457 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32457,(0),null);
var body = cljs.core.nthnext(vec__32457,(1));
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__32458 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32459__i = 0, G__32459__a = new Array(arguments.length -  0);
while (G__32459__i < G__32459__a.length) {G__32459__a[G__32459__i] = arguments[G__32459__i + 0]; ++G__32459__i;}
  args = new cljs.core.IndexedSeq(G__32459__a,0);
} 
return G__32458__delegate.call(this,args);};
G__32458.cljs$lang$maxFixedArity = 0;
G__32458.cljs$lang$applyTo = (function (arglist__32460){
var args = cljs.core.seq(arglist__32460);
return G__32458__delegate(args);
});
G__32458.cljs$core$IFn$_invoke$arity$variadic = G__32458__delegate;
return G__32458;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){
var iter__4571__auto__ = (function iter__32467(s__32468){
return (new cljs.core.LazySeq(null,(function (){
var s__32468__$1 = s__32468;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__32468__$1);
if(temp__4126__auto__){
var s__32468__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32468__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__32468__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__32470 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__32469 = (0);
while(true){
if((i__32469 < size__4570__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__32469);
cljs.core.chunk_append(b__32470,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__32473 = (i__32469 + (1));
i__32469 = G__32473;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32470),iter__32467(cljs.core.chunk_rest(s__32468__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32470),null);
}
} else {
var args = cljs.core.first(s__32468__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__32467(cljs.core.rest(s__32468__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4571__auto__(arglists);
});
/**
* Render `element` as HTML string.
*/
sablono.core.render = (function render(element){
if(cljs.core.truth_(element)){
var G__32475 = element;
return React.renderToString(G__32475);
} else {
return null;
}
});
/**
* Render `element` as HTML string, without React internal attributes.
*/
sablono.core.render_static = (function render_static(element){
if(cljs.core.truth_(element)){
var G__32477 = element;
return React.renderToStaticMarkup(G__32477);
} else {
return null;
}
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){
var iter__4571__auto__ = (function iter__32484(s__32485){
return (new cljs.core.LazySeq(null,(function (){
var s__32485__$1 = s__32485;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__32485__$1);
if(temp__4126__auto__){
var s__32485__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32485__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__32485__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__32487 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__32486 = (0);
while(true){
if((i__32486 < size__4570__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__32486);
cljs.core.chunk_append(b__32487,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$123,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$23,"text/css",cljs.core.constant$keyword$124,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$125,"stylesheet"], null)], null));

var G__32490 = (i__32486 + (1));
i__32486 = G__32490;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32487),iter__32484(cljs.core.chunk_rest(s__32485__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32487),null);
}
} else {
var style = cljs.core.first(s__32485__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$123,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$23,"text/css",cljs.core.constant$keyword$124,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$125,"stylesheet"], null)], null),iter__32484(cljs.core.rest(s__32485__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4571__auto__(styles);
};
var include_css = function (var_args){
var styles = null;
if (arguments.length > 0) {
var G__32491__i = 0, G__32491__a = new Array(arguments.length -  0);
while (G__32491__i < G__32491__a.length) {G__32491__a[G__32491__i] = arguments[G__32491__i + 0]; ++G__32491__i;}
  styles = new cljs.core.IndexedSeq(G__32491__a,0);
} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__32492){
var styles = cljs.core.seq(arglist__32492);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){
var G__32497 = (function (){return goog.dom.getDocument();
})().body;
var G__32498 = (function (){var G__32499 = "script";
var G__32500 = {"src": src};
return goog.dom.createDom(G__32499,G__32500);
})();
return goog.dom.appendChild(G__32497,G__32498);
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to32501 = (function() { 
var link_to32501__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$126,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$124,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to32501 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
var G__32502__i = 0, G__32502__a = new Array(arguments.length -  1);
while (G__32502__i < G__32502__a.length) {G__32502__a[G__32502__i] = arguments[G__32502__i + 1]; ++G__32502__i;}
  content = new cljs.core.IndexedSeq(G__32502__a,0);
} 
return link_to32501__delegate.call(this,url,content);};
link_to32501.cljs$lang$maxFixedArity = 1;
link_to32501.cljs$lang$applyTo = (function (arglist__32503){
var url = cljs.core.first(arglist__32503);
var content = cljs.core.rest(arglist__32503);
return link_to32501__delegate(url,content);
});
link_to32501.cljs$core$IFn$_invoke$arity$variadic = link_to32501__delegate;
return link_to32501;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to32501);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to32504 = (function() { 
var mail_to32504__delegate = function (e_mail,p__32505){
var vec__32507 = p__32505;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32507,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$126,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$124,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3815__auto__ = content;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return e_mail;
}
})()], null);
};
var mail_to32504 = function (e_mail,var_args){
var p__32505 = null;
if (arguments.length > 1) {
var G__32508__i = 0, G__32508__a = new Array(arguments.length -  1);
while (G__32508__i < G__32508__a.length) {G__32508__a[G__32508__i] = arguments[G__32508__i + 1]; ++G__32508__i;}
  p__32505 = new cljs.core.IndexedSeq(G__32508__a,0);
} 
return mail_to32504__delegate.call(this,e_mail,p__32505);};
mail_to32504.cljs$lang$maxFixedArity = 1;
mail_to32504.cljs$lang$applyTo = (function (arglist__32509){
var e_mail = cljs.core.first(arglist__32509);
var p__32505 = cljs.core.rest(arglist__32509);
return mail_to32504__delegate(e_mail,p__32505);
});
mail_to32504.cljs$core$IFn$_invoke$arity$variadic = mail_to32504__delegate;
return mail_to32504;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to32504);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list32510 = (function unordered_list32510(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$127,(function (){var iter__4571__auto__ = (function iter__32517(s__32518){
return (new cljs.core.LazySeq(null,(function (){
var s__32518__$1 = s__32518;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__32518__$1);
if(temp__4126__auto__){
var s__32518__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32518__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__32518__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__32520 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__32519 = (0);
while(true){
if((i__32519 < size__4570__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__32519);
cljs.core.chunk_append(b__32520,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,x], null));

var G__32523 = (i__32519 + (1));
i__32519 = G__32523;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32520),iter__32517(cljs.core.chunk_rest(s__32518__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32520),null);
}
} else {
var x = cljs.core.first(s__32518__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,x], null),iter__32517(cljs.core.rest(s__32518__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4571__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list32510);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list32524 = (function ordered_list32524(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$129,(function (){var iter__4571__auto__ = (function iter__32531(s__32532){
return (new cljs.core.LazySeq(null,(function (){
var s__32532__$1 = s__32532;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__32532__$1);
if(temp__4126__auto__){
var s__32532__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32532__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__32532__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__32534 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__32533 = (0);
while(true){
if((i__32533 < size__4570__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__32533);
cljs.core.chunk_append(b__32534,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,x], null));

var G__32537 = (i__32533 + (1));
i__32533 = G__32537;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32534),iter__32531(cljs.core.chunk_rest(s__32532__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32534),null);
}
} else {
var x = cljs.core.first(s__32532__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,x], null),iter__32531(cljs.core.rest(s__32532__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4571__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list32524);
/**
* Create an image element.
*/
sablono.core.image32538 = (function() {
var image32538 = null;
var image32538__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$131,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image32538__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$131,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$132,alt], null)], null);
});
image32538 = function(src,alt){
switch(arguments.length){
case 1:
return image32538__1.call(this,src);
case 2:
return image32538__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image32538.cljs$core$IFn$_invoke$arity$1 = image32538__1;
image32538.cljs$core$IFn$_invoke$arity$2 = image32538__2;
return image32538;
})()
;

sablono.core.image = sablono.core.wrap_attrs(sablono.core.image32538);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__32539_SHARP_,p2__32540_SHARP_){
return [cljs.core.str(p1__32539_SHARP_),cljs.core.str("["),cljs.core.str(p2__32540_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__32541_SHARP_,p2__32542_SHARP_){
return [cljs.core.str(p1__32541_SHARP_),cljs.core.str("-"),cljs.core.str(p2__32542_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$122,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$23,type,cljs.core.constant$keyword$35,sablono.core.make_name(name),cljs.core.constant$keyword$119,sablono.core.make_id(name),cljs.core.constant$keyword$21,value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field32543 = (function() {
var color_field32543 = null;
var color_field32543__1 = (function (name__19849__auto__){
return color_field32543.cljs$core$IFn$_invoke$arity$2(name__19849__auto__,null);
});
var color_field32543__2 = (function (name__19849__auto__,value__19850__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__19849__auto__,value__19850__auto__);
});
color_field32543 = function(name__19849__auto__,value__19850__auto__){
switch(arguments.length){
case 1:
return color_field32543__1.call(this,name__19849__auto__);
case 2:
return color_field32543__2.call(this,name__19849__auto__,value__19850__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field32543.cljs$core$IFn$_invoke$arity$1 = color_field32543__1;
color_field32543.cljs$core$IFn$_invoke$arity$2 = color_field32543__2;
return color_field32543;
})()
;

sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field32543);

/**
* Creates a date input field.
*/
sablono.core.date_field32546 = (function() {
var date_field32546 = null;
var date_field32546__1 = (function (name__19849__auto__){
return date_field32546.cljs$core$IFn$_invoke$arity$2(name__19849__auto__,null);
});
var date_field32546__2 = (function (name__19849__auto__,value__19850__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__19849__auto__,value__19850__auto__);
});
date_field32546 = function(name__19849__auto__,value__19850__auto__){
switch(arguments.length){
case 1:
return date_field32546__1.call(this,name__19849__auto__);
case 2:
return date_field32546__2.call(this,name__19849__auto__,value__19850__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field32546.cljs$core$IFn$_invoke$arity$1 = date_field32546__1;
date_field32546.cljs$core$IFn$_invoke$arity$2 = date_field32546__2;
return date_field32546;
})()
;

sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field32546);

/**
* Creates a datetime input field.
*/
sablono.core.datetime_field32549 = (function() {
var datetime_field32549 = null;
var datetime_field32549__1 = (function (name__19849__auto__){
return datetime_field32549.cljs$core$IFn$_invoke$arity$2(name__19849__auto__,null);
});
var datetime_field32549__2 = (function (name__19849__auto__,value__19850__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__19849__auto__,value__19850__auto__);
});
datetime_field32549 = function(name__19849__auto__,value__19850__auto__){
switch(arguments.length){
case 1:
return datetime_field32549__1.call(this,name__19849__auto__);
case 2:
return datetime_field32549__2.call(this,name__19849__auto__,value__19850__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field32549.cljs$core$IFn$_invoke$arity$1 = datetime_field32549__1;
datetime_field32549.cljs$core$IFn$_invoke$arity$2 = datetime_field32549__2;
return datetime_field32549;
})()
;

sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field32549);

/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field32552 = (function() {
var datetime_local_field32552 = null;
var datetime_local_field32552__1 = (function (name__19849__auto__){
return datetime_local_field32552.cljs$core$IFn$_invoke$arity$2(name__19849__auto__,null);
});
var datetime_local_field32552__2 = (function (name__19849__auto__,value__19850__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__19849__auto__,value__19850__auto__);
});
datetime_local_field32552 = function(name__19849__auto__,value__19850__auto__){
switch(arguments.length){
case 1:
return datetime_local_field32552__1.call(this,name__19849__auto__);
case 2:
return datetime_local_field32552__2.call(this,name__19849__auto__,value__19850__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field32552.cljs$core$IFn$_invoke$arity$1 = datetime_local_field32552__1;
datetime_local_field32552.cljs$core$IFn$_invoke$arity$2 = datetime_local_field32552__2;
return datetime_local_field32552;
})()
;

sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field32552);

/**
* Creates a email input field.
*/
sablono.core.email_field32555 = (function() {
var email_field32555 = null;
var email_field32555__1 = (function (name__19849__auto__){
return email_field32555.cljs$core$IFn$_invoke$arity$2(name__19849__auto__,null);
});
var email_field32555__2 = (function (name__19849__auto__,value__19850__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__19849__auto__,value__19850__auto__);
});
email_field32555 = function(name__19849__auto__,value__19850__auto__){
switch(arguments.length){
case 1:
return email_field32555__1.call(this,name__19849__auto__);
case 2:
return email_field32555__2.call(this,name__19849__auto__,value__19850__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field32555.cljs$core$IFn$_invoke$arity$1 = email_field32555__1;
email_field32555.cljs$core$IFn$_invoke$arity$2 = email_field32555__2;
return email_field32555;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field32555);

/**
* Creates a file input field.
*/
sablono.core.file_field32558 = (function() {
var file_field32558 = null;
var file_field32558__1 = (function (name__19849__auto__){
return file_field32558.cljs$core$IFn$_invoke$arity$2(name__19849__auto__,null);
});
var file_field32558__2 = (function (name__19849__auto__,value__19850__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__19849__auto__,value__19850__auto__);
});
file_field32558 = function(name__19849__auto__,value__19850__auto__){
switch(arguments.length){
case 1:
return file_field32558__1.call(this,name__19849__auto__);
case 2:
return file_field32558__2.call(this,name__19849__auto__,value__19850__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field32558.cljs$core$IFn$_invoke$arity$1 = file_field32558__1;
file_field32558.cljs$core$IFn$_invoke$arity$2 = file_field32558__2;
return file_field32558;
})()
;

sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field32558);

/**
* Creates a hidden input field.
*/
sablono.core.hidden_field32561 = (function() {
var hidden_field32561 = null;
var hidden_field32561__1 = (function (name__19849__auto__){
return hidden_field32561.cljs$core$IFn$_invoke$arity$2(name__19849__auto__,null);
});
var hidden_field32561__2 = (function (name__19849__auto__,value__19850__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__19849__auto__,value__19850__auto__);
});
hidden_field32561 = function(name__19849__auto__,value__19850__auto__){
switch(arguments.length){
case 1:
return hidden_field32561__1.call(this,name__19849__auto__);
case 2:
return hidden_field32561__2.call(this,name__19849__auto__,value__19850__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field32561.cljs$core$IFn$_invoke$arity$1 = hidden_field32561__1;
hidden_field32561.cljs$core$IFn$_invoke$arity$2 = hidden_field32561__2;
return hidden_field32561;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field32561);

/**
* Creates a month input field.
*/
sablono.core.month_field32564 = (function() {
var month_field32564 = null;
var month_field32564__1 = (function (name__19849__auto__){
return month_field32564.cljs$core$IFn$_invoke$arity$2(name__19849__auto__,null);
});
var month_field32564__2 = (function (name__19849__auto__,value__19850__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__19849__auto__,value__19850__auto__);
});
month_field32564 = function(name__19849__auto__,value__19850__auto__){
switch(arguments.length){
case 1:
return month_field32564__1.call(this,name__19849__auto__);
case 2:
return month_field32564__2.call(this,name__19849__auto__,value__19850__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field32564.cljs$core$IFn$_invoke$arity$1 = month_field32564__1;
month_field32564.cljs$core$IFn$_invoke$arity$2 = month_field32564__2;
return month_field32564;
})()
;

sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field32564);

/**
* Creates a number input field.
*/
sablono.core.number_field32567 = (function() {
var number_field32567 = null;
var number_field32567__1 = (function (name__19849__auto__){
return number_field32567.cljs$core$IFn$_invoke$arity$2(name__19849__auto__,null);
});
var number_field32567__2 = (function (name__19849__auto__,value__19850__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__19849__auto__,value__19850__auto__);
});
number_field32567 = function(name__19849__auto__,value__19850__auto__){
switch(arguments.length){
case 1:
return number_field32567__1.call(this,name__19849__auto__);
case 2:
return number_field32567__2.call(this,name__19849__auto__,value__19850__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field32567.cljs$core$IFn$_invoke$arity$1 = number_field32567__1;
number_field32567.cljs$core$IFn$_invoke$arity$2 = number_field32567__2;
return number_field32567;
})()
;

sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field32567);

/**
* Creates a password input field.
*/
sablono.core.password_field32570 = (function() {
var password_field32570 = null;
var password_field32570__1 = (function (name__19849__auto__){
return password_field32570.cljs$core$IFn$_invoke$arity$2(name__19849__auto__,null);
});
var password_field32570__2 = (function (name__19849__auto__,value__19850__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__19849__auto__,value__19850__auto__);
});
password_field32570 = function(name__19849__auto__,value__19850__auto__){
switch(arguments.length){
case 1:
return password_field32570__1.call(this,name__19849__auto__);
case 2:
return password_field32570__2.call(this,name__19849__auto__,value__19850__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field32570.cljs$core$IFn$_invoke$arity$1 = password_field32570__1;
password_field32570.cljs$core$IFn$_invoke$arity$2 = password_field32570__2;
return password_field32570;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field32570);

/**
* Creates a range input field.
*/
sablono.core.range_field32573 = (function() {
var range_field32573 = null;
var range_field32573__1 = (function (name__19849__auto__){
return range_field32573.cljs$core$IFn$_invoke$arity$2(name__19849__auto__,null);
});
var range_field32573__2 = (function (name__19849__auto__,value__19850__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__19849__auto__,value__19850__auto__);
});
range_field32573 = function(name__19849__auto__,value__19850__auto__){
switch(arguments.length){
case 1:
return range_field32573__1.call(this,name__19849__auto__);
case 2:
return range_field32573__2.call(this,name__19849__auto__,value__19850__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field32573.cljs$core$IFn$_invoke$arity$1 = range_field32573__1;
range_field32573.cljs$core$IFn$_invoke$arity$2 = range_field32573__2;
return range_field32573;
})()
;

sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field32573);

/**
* Creates a search input field.
*/
sablono.core.search_field32576 = (function() {
var search_field32576 = null;
var search_field32576__1 = (function (name__19849__auto__){
return search_field32576.cljs$core$IFn$_invoke$arity$2(name__19849__auto__,null);
});
var search_field32576__2 = (function (name__19849__auto__,value__19850__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__19849__auto__,value__19850__auto__);
});
search_field32576 = function(name__19849__auto__,value__19850__auto__){
switch(arguments.length){
case 1:
return search_field32576__1.call(this,name__19849__auto__);
case 2:
return search_field32576__2.call(this,name__19849__auto__,value__19850__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field32576.cljs$core$IFn$_invoke$arity$1 = search_field32576__1;
search_field32576.cljs$core$IFn$_invoke$arity$2 = search_field32576__2;
return search_field32576;
})()
;

sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field32576);

/**
* Creates a tel input field.
*/
sablono.core.tel_field32579 = (function() {
var tel_field32579 = null;
var tel_field32579__1 = (function (name__19849__auto__){
return tel_field32579.cljs$core$IFn$_invoke$arity$2(name__19849__auto__,null);
});
var tel_field32579__2 = (function (name__19849__auto__,value__19850__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__19849__auto__,value__19850__auto__);
});
tel_field32579 = function(name__19849__auto__,value__19850__auto__){
switch(arguments.length){
case 1:
return tel_field32579__1.call(this,name__19849__auto__);
case 2:
return tel_field32579__2.call(this,name__19849__auto__,value__19850__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field32579.cljs$core$IFn$_invoke$arity$1 = tel_field32579__1;
tel_field32579.cljs$core$IFn$_invoke$arity$2 = tel_field32579__2;
return tel_field32579;
})()
;

sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field32579);

/**
* Creates a text input field.
*/
sablono.core.text_field32582 = (function() {
var text_field32582 = null;
var text_field32582__1 = (function (name__19849__auto__){
return text_field32582.cljs$core$IFn$_invoke$arity$2(name__19849__auto__,null);
});
var text_field32582__2 = (function (name__19849__auto__,value__19850__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__19849__auto__,value__19850__auto__);
});
text_field32582 = function(name__19849__auto__,value__19850__auto__){
switch(arguments.length){
case 1:
return text_field32582__1.call(this,name__19849__auto__);
case 2:
return text_field32582__2.call(this,name__19849__auto__,value__19850__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field32582.cljs$core$IFn$_invoke$arity$1 = text_field32582__1;
text_field32582.cljs$core$IFn$_invoke$arity$2 = text_field32582__2;
return text_field32582;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field32582);

/**
* Creates a time input field.
*/
sablono.core.time_field32585 = (function() {
var time_field32585 = null;
var time_field32585__1 = (function (name__19849__auto__){
return time_field32585.cljs$core$IFn$_invoke$arity$2(name__19849__auto__,null);
});
var time_field32585__2 = (function (name__19849__auto__,value__19850__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__19849__auto__,value__19850__auto__);
});
time_field32585 = function(name__19849__auto__,value__19850__auto__){
switch(arguments.length){
case 1:
return time_field32585__1.call(this,name__19849__auto__);
case 2:
return time_field32585__2.call(this,name__19849__auto__,value__19850__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field32585.cljs$core$IFn$_invoke$arity$1 = time_field32585__1;
time_field32585.cljs$core$IFn$_invoke$arity$2 = time_field32585__2;
return time_field32585;
})()
;

sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field32585);

/**
* Creates a url input field.
*/
sablono.core.url_field32588 = (function() {
var url_field32588 = null;
var url_field32588__1 = (function (name__19849__auto__){
return url_field32588.cljs$core$IFn$_invoke$arity$2(name__19849__auto__,null);
});
var url_field32588__2 = (function (name__19849__auto__,value__19850__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__19849__auto__,value__19850__auto__);
});
url_field32588 = function(name__19849__auto__,value__19850__auto__){
switch(arguments.length){
case 1:
return url_field32588__1.call(this,name__19849__auto__);
case 2:
return url_field32588__2.call(this,name__19849__auto__,value__19850__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field32588.cljs$core$IFn$_invoke$arity$1 = url_field32588__1;
url_field32588.cljs$core$IFn$_invoke$arity$2 = url_field32588__2;
return url_field32588;
})()
;

sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field32588);

/**
* Creates a week input field.
*/
sablono.core.week_field32591 = (function() {
var week_field32591 = null;
var week_field32591__1 = (function (name__19849__auto__){
return week_field32591.cljs$core$IFn$_invoke$arity$2(name__19849__auto__,null);
});
var week_field32591__2 = (function (name__19849__auto__,value__19850__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__19849__auto__,value__19850__auto__);
});
week_field32591 = function(name__19849__auto__,value__19850__auto__){
switch(arguments.length){
case 1:
return week_field32591__1.call(this,name__19849__auto__);
case 2:
return week_field32591__2.call(this,name__19849__auto__,value__19850__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field32591.cljs$core$IFn$_invoke$arity$1 = week_field32591__1;
week_field32591.cljs$core$IFn$_invoke$arity$2 = week_field32591__2;
return week_field32591;
})()
;

sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field32591);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box32594 = (function() {
var check_box32594 = null;
var check_box32594__1 = (function (name){
return check_box32594.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box32594__2 = (function (name,checked_QMARK_){
return check_box32594.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box32594__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$122,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$23,"checkbox",cljs.core.constant$keyword$35,sablono.core.make_name(name),cljs.core.constant$keyword$119,sablono.core.make_id(name),cljs.core.constant$keyword$21,value,cljs.core.constant$keyword$133,checked_QMARK_], null)], null);
});
check_box32594 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box32594__1.call(this,name);
case 2:
return check_box32594__2.call(this,name,checked_QMARK_);
case 3:
return check_box32594__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box32594.cljs$core$IFn$_invoke$arity$1 = check_box32594__1;
check_box32594.cljs$core$IFn$_invoke$arity$2 = check_box32594__2;
check_box32594.cljs$core$IFn$_invoke$arity$3 = check_box32594__3;
return check_box32594;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box32594);
/**
* Creates a radio button.
*/
sablono.core.radio_button32600 = (function() {
var radio_button32600 = null;
var radio_button32600__1 = (function (group){
return radio_button32600.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button32600__2 = (function (group,checked_QMARK_){
return radio_button32600.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button32600__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$122,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$23,"radio",cljs.core.constant$keyword$35,sablono.core.make_name(group),cljs.core.constant$keyword$119,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$21,value,cljs.core.constant$keyword$133,checked_QMARK_], null)], null);
});
radio_button32600 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button32600__1.call(this,group);
case 2:
return radio_button32600__2.call(this,group,checked_QMARK_);
case 3:
return radio_button32600__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button32600.cljs$core$IFn$_invoke$arity$1 = radio_button32600__1;
radio_button32600.cljs$core$IFn$_invoke$arity$2 = radio_button32600__2;
radio_button32600.cljs$core$IFn$_invoke$arity$3 = radio_button32600__3;
return radio_button32600;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button32600);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options32606 = (function() {
var select_options32606 = null;
var select_options32606__1 = (function (coll){
return select_options32606.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options32606__2 = (function (coll,selected){
var iter__4571__auto__ = (function iter__32627(s__32628){
return (new cljs.core.LazySeq(null,(function (){
var s__32628__$1 = s__32628;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__32628__$1);
if(temp__4126__auto__){
var s__32628__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32628__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__32628__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__32630 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__32629 = (0);
while(true){
if((i__32629 < size__4570__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__32629);
cljs.core.chunk_append(b__32630,((cljs.core.sequential_QMARK_(x))?(function (){var vec__32635 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32635,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32635,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32635,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$134,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$135,text], null),select_options32606.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$121,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$21,val,cljs.core.constant$keyword$136,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$137,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$121,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$136,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));

var G__32637 = (i__32629 + (1));
i__32629 = G__32637;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32630),iter__32627(cljs.core.chunk_rest(s__32628__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32630),null);
}
} else {
var x = cljs.core.first(s__32628__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__32636 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32636,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32636,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32636,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$134,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$135,text], null),select_options32606.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$121,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$21,val,cljs.core.constant$keyword$136,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$137,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$121,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$136,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__32627(cljs.core.rest(s__32628__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4571__auto__(coll);
});
select_options32606 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options32606__1.call(this,coll);
case 2:
return select_options32606__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options32606.cljs$core$IFn$_invoke$arity$1 = select_options32606__1;
select_options32606.cljs$core$IFn$_invoke$arity$2 = select_options32606__2;
return select_options32606;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options32606);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down32638 = (function() {
var drop_down32638 = null;
var drop_down32638__2 = (function (name,options){
return drop_down32638.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down32638__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$138,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$35,sablono.core.make_name(name),cljs.core.constant$keyword$119,sablono.core.make_id(name)], null),(function (){var G__32644 = options;
var G__32645 = selected;
return (sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(G__32644,G__32645) : sablono.core.select_options.call(null,G__32644,G__32645));
})()], null);
});
drop_down32638 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down32638__2.call(this,name,options);
case 3:
return drop_down32638__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down32638.cljs$core$IFn$_invoke$arity$2 = drop_down32638__2;
drop_down32638.cljs$core$IFn$_invoke$arity$3 = drop_down32638__3;
return drop_down32638;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down32638);
/**
* Creates a text area element.
*/
sablono.core.text_area32646 = (function() {
var text_area32646 = null;
var text_area32646__1 = (function (name){
return text_area32646.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area32646__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$120,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$35,sablono.core.make_name(name),cljs.core.constant$keyword$119,sablono.core.make_id(name),cljs.core.constant$keyword$21,value], null)], null);
});
text_area32646 = function(name,value){
switch(arguments.length){
case 1:
return text_area32646__1.call(this,name);
case 2:
return text_area32646__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area32646.cljs$core$IFn$_invoke$arity$1 = text_area32646__1;
text_area32646.cljs$core$IFn$_invoke$arity$2 = text_area32646__2;
return text_area32646;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area32646);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label32649 = (function label32649(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$135,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$117,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label32649);
/**
* Creates a submit button.
*/
sablono.core.submit_button32650 = (function submit_button32650(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$122,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$23,"submit",cljs.core.constant$keyword$21,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button32650);
/**
* Creates a form reset button.
*/
sablono.core.reset_button32651 = (function reset_button32651(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$122,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$23,"reset",cljs.core.constant$keyword$21,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button32651);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to32652 = (function() { 
var form_to32652__delegate = function (p__32653,body){
var vec__32657 = p__32653;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32657,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32657,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$139,null,cljs.core.constant$keyword$140,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$141,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$142,method_str,cljs.core.constant$keyword$143,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$141,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$142,"POST",cljs.core.constant$keyword$143,action_uri], null),(function (){var G__32658 = "_method";
var G__32659 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2(G__32658,G__32659) : sablono.core.hidden_field.call(null,G__32658,G__32659));
})()], null)),body));
};
var form_to32652 = function (p__32653,var_args){
var body = null;
if (arguments.length > 1) {
var G__32660__i = 0, G__32660__a = new Array(arguments.length -  1);
while (G__32660__i < G__32660__a.length) {G__32660__a[G__32660__i] = arguments[G__32660__i + 1]; ++G__32660__i;}
  body = new cljs.core.IndexedSeq(G__32660__a,0);
} 
return form_to32652__delegate.call(this,p__32653,body);};
form_to32652.cljs$lang$maxFixedArity = 1;
form_to32652.cljs$lang$applyTo = (function (arglist__32661){
var p__32653 = cljs.core.first(arglist__32661);
var body = cljs.core.rest(arglist__32661);
return form_to32652__delegate(p__32653,body);
});
form_to32652.cljs$core$IFn$_invoke$arity$variadic = form_to32652__delegate;
return form_to32652;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to32652);

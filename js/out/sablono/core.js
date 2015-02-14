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
var G__32584__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__32583 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32583,(0),null);
var body = cljs.core.nthnext(vec__32583,(1));
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__32584 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32585__i = 0, G__32585__a = new Array(arguments.length -  0);
while (G__32585__i < G__32585__a.length) {G__32585__a[G__32585__i] = arguments[G__32585__i + 0]; ++G__32585__i;}
  args = new cljs.core.IndexedSeq(G__32585__a,0);
} 
return G__32584__delegate.call(this,args);};
G__32584.cljs$lang$maxFixedArity = 0;
G__32584.cljs$lang$applyTo = (function (arglist__32586){
var args = cljs.core.seq(arglist__32586);
return G__32584__delegate(args);
});
G__32584.cljs$core$IFn$_invoke$arity$variadic = G__32584__delegate;
return G__32584;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){
var iter__4571__auto__ = (function iter__32593(s__32594){
return (new cljs.core.LazySeq(null,(function (){
var s__32594__$1 = s__32594;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__32594__$1);
if(temp__4126__auto__){
var s__32594__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32594__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__32594__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__32596 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__32595 = (0);
while(true){
if((i__32595 < size__4570__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__32595);
cljs.core.chunk_append(b__32596,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__32599 = (i__32595 + (1));
i__32595 = G__32599;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32596),iter__32593(cljs.core.chunk_rest(s__32594__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32596),null);
}
} else {
var args = cljs.core.first(s__32594__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__32593(cljs.core.rest(s__32594__$2)));
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
var G__32601 = element;
return React.renderToString(G__32601);
} else {
return null;
}
});
/**
* Render `element` as HTML string, without React internal attributes.
*/
sablono.core.render_static = (function render_static(element){
if(cljs.core.truth_(element)){
var G__32603 = element;
return React.renderToStaticMarkup(G__32603);
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
var iter__4571__auto__ = (function iter__32610(s__32611){
return (new cljs.core.LazySeq(null,(function (){
var s__32611__$1 = s__32611;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__32611__$1);
if(temp__4126__auto__){
var s__32611__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32611__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__32611__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__32613 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__32612 = (0);
while(true){
if((i__32612 < size__4570__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__32612);
cljs.core.chunk_append(b__32613,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$123,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$23,"text/css",cljs.core.constant$keyword$124,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$125,"stylesheet"], null)], null));

var G__32616 = (i__32612 + (1));
i__32612 = G__32616;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32613),iter__32610(cljs.core.chunk_rest(s__32611__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32613),null);
}
} else {
var style = cljs.core.first(s__32611__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$123,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$23,"text/css",cljs.core.constant$keyword$124,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$125,"stylesheet"], null)], null),iter__32610(cljs.core.rest(s__32611__$2)));
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
var G__32617__i = 0, G__32617__a = new Array(arguments.length -  0);
while (G__32617__i < G__32617__a.length) {G__32617__a[G__32617__i] = arguments[G__32617__i + 0]; ++G__32617__i;}
  styles = new cljs.core.IndexedSeq(G__32617__a,0);
} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__32618){
var styles = cljs.core.seq(arglist__32618);
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
var G__32623 = (function (){return goog.dom.getDocument();
})().body;
var G__32624 = (function (){var G__32625 = "script";
var G__32626 = {"src": src};
return goog.dom.createDom(G__32625,G__32626);
})();
return goog.dom.appendChild(G__32623,G__32624);
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
sablono.core.link_to32627 = (function() { 
var link_to32627__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$126,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$124,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to32627 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
var G__32628__i = 0, G__32628__a = new Array(arguments.length -  1);
while (G__32628__i < G__32628__a.length) {G__32628__a[G__32628__i] = arguments[G__32628__i + 1]; ++G__32628__i;}
  content = new cljs.core.IndexedSeq(G__32628__a,0);
} 
return link_to32627__delegate.call(this,url,content);};
link_to32627.cljs$lang$maxFixedArity = 1;
link_to32627.cljs$lang$applyTo = (function (arglist__32629){
var url = cljs.core.first(arglist__32629);
var content = cljs.core.rest(arglist__32629);
return link_to32627__delegate(url,content);
});
link_to32627.cljs$core$IFn$_invoke$arity$variadic = link_to32627__delegate;
return link_to32627;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to32627);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to32630 = (function() { 
var mail_to32630__delegate = function (e_mail,p__32631){
var vec__32633 = p__32631;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32633,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$126,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$124,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3815__auto__ = content;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return e_mail;
}
})()], null);
};
var mail_to32630 = function (e_mail,var_args){
var p__32631 = null;
if (arguments.length > 1) {
var G__32634__i = 0, G__32634__a = new Array(arguments.length -  1);
while (G__32634__i < G__32634__a.length) {G__32634__a[G__32634__i] = arguments[G__32634__i + 1]; ++G__32634__i;}
  p__32631 = new cljs.core.IndexedSeq(G__32634__a,0);
} 
return mail_to32630__delegate.call(this,e_mail,p__32631);};
mail_to32630.cljs$lang$maxFixedArity = 1;
mail_to32630.cljs$lang$applyTo = (function (arglist__32635){
var e_mail = cljs.core.first(arglist__32635);
var p__32631 = cljs.core.rest(arglist__32635);
return mail_to32630__delegate(e_mail,p__32631);
});
mail_to32630.cljs$core$IFn$_invoke$arity$variadic = mail_to32630__delegate;
return mail_to32630;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to32630);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list32636 = (function unordered_list32636(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$127,(function (){var iter__4571__auto__ = (function iter__32643(s__32644){
return (new cljs.core.LazySeq(null,(function (){
var s__32644__$1 = s__32644;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__32644__$1);
if(temp__4126__auto__){
var s__32644__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32644__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__32644__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__32646 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__32645 = (0);
while(true){
if((i__32645 < size__4570__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__32645);
cljs.core.chunk_append(b__32646,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,x], null));

var G__32649 = (i__32645 + (1));
i__32645 = G__32649;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32646),iter__32643(cljs.core.chunk_rest(s__32644__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32646),null);
}
} else {
var x = cljs.core.first(s__32644__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,x], null),iter__32643(cljs.core.rest(s__32644__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list32636);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list32650 = (function ordered_list32650(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$129,(function (){var iter__4571__auto__ = (function iter__32657(s__32658){
return (new cljs.core.LazySeq(null,(function (){
var s__32658__$1 = s__32658;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__32658__$1);
if(temp__4126__auto__){
var s__32658__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32658__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__32658__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__32660 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__32659 = (0);
while(true){
if((i__32659 < size__4570__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__32659);
cljs.core.chunk_append(b__32660,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,x], null));

var G__32663 = (i__32659 + (1));
i__32659 = G__32663;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32660),iter__32657(cljs.core.chunk_rest(s__32658__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32660),null);
}
} else {
var x = cljs.core.first(s__32658__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,x], null),iter__32657(cljs.core.rest(s__32658__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list32650);
/**
* Create an image element.
*/
sablono.core.image32664 = (function() {
var image32664 = null;
var image32664__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$131,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image32664__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$131,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$132,alt], null)], null);
});
image32664 = function(src,alt){
switch(arguments.length){
case 1:
return image32664__1.call(this,src);
case 2:
return image32664__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image32664.cljs$core$IFn$_invoke$arity$1 = image32664__1;
image32664.cljs$core$IFn$_invoke$arity$2 = image32664__2;
return image32664;
})()
;

sablono.core.image = sablono.core.wrap_attrs(sablono.core.image32664);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__32665_SHARP_,p2__32666_SHARP_){
return [cljs.core.str(p1__32665_SHARP_),cljs.core.str("["),cljs.core.str(p2__32666_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__32667_SHARP_,p2__32668_SHARP_){
return [cljs.core.str(p1__32667_SHARP_),cljs.core.str("-"),cljs.core.str(p2__32668_SHARP_)].join('');
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
sablono.core.color_field32669 = (function() {
var color_field32669 = null;
var color_field32669__1 = (function (name__19849__auto__){
return color_field32669.cljs$core$IFn$_invoke$arity$2(name__19849__auto__,null);
});
var color_field32669__2 = (function (name__19849__auto__,value__19850__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__19849__auto__,value__19850__auto__);
});
color_field32669 = function(name__19849__auto__,value__19850__auto__){
switch(arguments.length){
case 1:
return color_field32669__1.call(this,name__19849__auto__);
case 2:
return color_field32669__2.call(this,name__19849__auto__,value__19850__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field32669.cljs$core$IFn$_invoke$arity$1 = color_field32669__1;
color_field32669.cljs$core$IFn$_invoke$arity$2 = color_field32669__2;
return color_field32669;
})()
;

sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field32669);

/**
* Creates a date input field.
*/
sablono.core.date_field32672 = (function() {
var date_field32672 = null;
var date_field32672__1 = (function (name__19849__auto__){
return date_field32672.cljs$core$IFn$_invoke$arity$2(name__19849__auto__,null);
});
var date_field32672__2 = (function (name__19849__auto__,value__19850__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__19849__auto__,value__19850__auto__);
});
date_field32672 = function(name__19849__auto__,value__19850__auto__){
switch(arguments.length){
case 1:
return date_field32672__1.call(this,name__19849__auto__);
case 2:
return date_field32672__2.call(this,name__19849__auto__,value__19850__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field32672.cljs$core$IFn$_invoke$arity$1 = date_field32672__1;
date_field32672.cljs$core$IFn$_invoke$arity$2 = date_field32672__2;
return date_field32672;
})()
;

sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field32672);

/**
* Creates a datetime input field.
*/
sablono.core.datetime_field32675 = (function() {
var datetime_field32675 = null;
var datetime_field32675__1 = (function (name__19849__auto__){
return datetime_field32675.cljs$core$IFn$_invoke$arity$2(name__19849__auto__,null);
});
var datetime_field32675__2 = (function (name__19849__auto__,value__19850__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__19849__auto__,value__19850__auto__);
});
datetime_field32675 = function(name__19849__auto__,value__19850__auto__){
switch(arguments.length){
case 1:
return datetime_field32675__1.call(this,name__19849__auto__);
case 2:
return datetime_field32675__2.call(this,name__19849__auto__,value__19850__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field32675.cljs$core$IFn$_invoke$arity$1 = datetime_field32675__1;
datetime_field32675.cljs$core$IFn$_invoke$arity$2 = datetime_field32675__2;
return datetime_field32675;
})()
;

sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field32675);

/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field32678 = (function() {
var datetime_local_field32678 = null;
var datetime_local_field32678__1 = (function (name__19849__auto__){
return datetime_local_field32678.cljs$core$IFn$_invoke$arity$2(name__19849__auto__,null);
});
var datetime_local_field32678__2 = (function (name__19849__auto__,value__19850__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__19849__auto__,value__19850__auto__);
});
datetime_local_field32678 = function(name__19849__auto__,value__19850__auto__){
switch(arguments.length){
case 1:
return datetime_local_field32678__1.call(this,name__19849__auto__);
case 2:
return datetime_local_field32678__2.call(this,name__19849__auto__,value__19850__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field32678.cljs$core$IFn$_invoke$arity$1 = datetime_local_field32678__1;
datetime_local_field32678.cljs$core$IFn$_invoke$arity$2 = datetime_local_field32678__2;
return datetime_local_field32678;
})()
;

sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field32678);

/**
* Creates a email input field.
*/
sablono.core.email_field32681 = (function() {
var email_field32681 = null;
var email_field32681__1 = (function (name__19849__auto__){
return email_field32681.cljs$core$IFn$_invoke$arity$2(name__19849__auto__,null);
});
var email_field32681__2 = (function (name__19849__auto__,value__19850__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__19849__auto__,value__19850__auto__);
});
email_field32681 = function(name__19849__auto__,value__19850__auto__){
switch(arguments.length){
case 1:
return email_field32681__1.call(this,name__19849__auto__);
case 2:
return email_field32681__2.call(this,name__19849__auto__,value__19850__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field32681.cljs$core$IFn$_invoke$arity$1 = email_field32681__1;
email_field32681.cljs$core$IFn$_invoke$arity$2 = email_field32681__2;
return email_field32681;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field32681);

/**
* Creates a file input field.
*/
sablono.core.file_field32684 = (function() {
var file_field32684 = null;
var file_field32684__1 = (function (name__19849__auto__){
return file_field32684.cljs$core$IFn$_invoke$arity$2(name__19849__auto__,null);
});
var file_field32684__2 = (function (name__19849__auto__,value__19850__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__19849__auto__,value__19850__auto__);
});
file_field32684 = function(name__19849__auto__,value__19850__auto__){
switch(arguments.length){
case 1:
return file_field32684__1.call(this,name__19849__auto__);
case 2:
return file_field32684__2.call(this,name__19849__auto__,value__19850__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field32684.cljs$core$IFn$_invoke$arity$1 = file_field32684__1;
file_field32684.cljs$core$IFn$_invoke$arity$2 = file_field32684__2;
return file_field32684;
})()
;

sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field32684);

/**
* Creates a hidden input field.
*/
sablono.core.hidden_field32687 = (function() {
var hidden_field32687 = null;
var hidden_field32687__1 = (function (name__19849__auto__){
return hidden_field32687.cljs$core$IFn$_invoke$arity$2(name__19849__auto__,null);
});
var hidden_field32687__2 = (function (name__19849__auto__,value__19850__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__19849__auto__,value__19850__auto__);
});
hidden_field32687 = function(name__19849__auto__,value__19850__auto__){
switch(arguments.length){
case 1:
return hidden_field32687__1.call(this,name__19849__auto__);
case 2:
return hidden_field32687__2.call(this,name__19849__auto__,value__19850__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field32687.cljs$core$IFn$_invoke$arity$1 = hidden_field32687__1;
hidden_field32687.cljs$core$IFn$_invoke$arity$2 = hidden_field32687__2;
return hidden_field32687;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field32687);

/**
* Creates a month input field.
*/
sablono.core.month_field32690 = (function() {
var month_field32690 = null;
var month_field32690__1 = (function (name__19849__auto__){
return month_field32690.cljs$core$IFn$_invoke$arity$2(name__19849__auto__,null);
});
var month_field32690__2 = (function (name__19849__auto__,value__19850__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__19849__auto__,value__19850__auto__);
});
month_field32690 = function(name__19849__auto__,value__19850__auto__){
switch(arguments.length){
case 1:
return month_field32690__1.call(this,name__19849__auto__);
case 2:
return month_field32690__2.call(this,name__19849__auto__,value__19850__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field32690.cljs$core$IFn$_invoke$arity$1 = month_field32690__1;
month_field32690.cljs$core$IFn$_invoke$arity$2 = month_field32690__2;
return month_field32690;
})()
;

sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field32690);

/**
* Creates a number input field.
*/
sablono.core.number_field32693 = (function() {
var number_field32693 = null;
var number_field32693__1 = (function (name__19849__auto__){
return number_field32693.cljs$core$IFn$_invoke$arity$2(name__19849__auto__,null);
});
var number_field32693__2 = (function (name__19849__auto__,value__19850__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__19849__auto__,value__19850__auto__);
});
number_field32693 = function(name__19849__auto__,value__19850__auto__){
switch(arguments.length){
case 1:
return number_field32693__1.call(this,name__19849__auto__);
case 2:
return number_field32693__2.call(this,name__19849__auto__,value__19850__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field32693.cljs$core$IFn$_invoke$arity$1 = number_field32693__1;
number_field32693.cljs$core$IFn$_invoke$arity$2 = number_field32693__2;
return number_field32693;
})()
;

sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field32693);

/**
* Creates a password input field.
*/
sablono.core.password_field32696 = (function() {
var password_field32696 = null;
var password_field32696__1 = (function (name__19849__auto__){
return password_field32696.cljs$core$IFn$_invoke$arity$2(name__19849__auto__,null);
});
var password_field32696__2 = (function (name__19849__auto__,value__19850__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__19849__auto__,value__19850__auto__);
});
password_field32696 = function(name__19849__auto__,value__19850__auto__){
switch(arguments.length){
case 1:
return password_field32696__1.call(this,name__19849__auto__);
case 2:
return password_field32696__2.call(this,name__19849__auto__,value__19850__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field32696.cljs$core$IFn$_invoke$arity$1 = password_field32696__1;
password_field32696.cljs$core$IFn$_invoke$arity$2 = password_field32696__2;
return password_field32696;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field32696);

/**
* Creates a range input field.
*/
sablono.core.range_field32699 = (function() {
var range_field32699 = null;
var range_field32699__1 = (function (name__19849__auto__){
return range_field32699.cljs$core$IFn$_invoke$arity$2(name__19849__auto__,null);
});
var range_field32699__2 = (function (name__19849__auto__,value__19850__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__19849__auto__,value__19850__auto__);
});
range_field32699 = function(name__19849__auto__,value__19850__auto__){
switch(arguments.length){
case 1:
return range_field32699__1.call(this,name__19849__auto__);
case 2:
return range_field32699__2.call(this,name__19849__auto__,value__19850__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field32699.cljs$core$IFn$_invoke$arity$1 = range_field32699__1;
range_field32699.cljs$core$IFn$_invoke$arity$2 = range_field32699__2;
return range_field32699;
})()
;

sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field32699);

/**
* Creates a search input field.
*/
sablono.core.search_field32702 = (function() {
var search_field32702 = null;
var search_field32702__1 = (function (name__19849__auto__){
return search_field32702.cljs$core$IFn$_invoke$arity$2(name__19849__auto__,null);
});
var search_field32702__2 = (function (name__19849__auto__,value__19850__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__19849__auto__,value__19850__auto__);
});
search_field32702 = function(name__19849__auto__,value__19850__auto__){
switch(arguments.length){
case 1:
return search_field32702__1.call(this,name__19849__auto__);
case 2:
return search_field32702__2.call(this,name__19849__auto__,value__19850__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field32702.cljs$core$IFn$_invoke$arity$1 = search_field32702__1;
search_field32702.cljs$core$IFn$_invoke$arity$2 = search_field32702__2;
return search_field32702;
})()
;

sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field32702);

/**
* Creates a tel input field.
*/
sablono.core.tel_field32705 = (function() {
var tel_field32705 = null;
var tel_field32705__1 = (function (name__19849__auto__){
return tel_field32705.cljs$core$IFn$_invoke$arity$2(name__19849__auto__,null);
});
var tel_field32705__2 = (function (name__19849__auto__,value__19850__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__19849__auto__,value__19850__auto__);
});
tel_field32705 = function(name__19849__auto__,value__19850__auto__){
switch(arguments.length){
case 1:
return tel_field32705__1.call(this,name__19849__auto__);
case 2:
return tel_field32705__2.call(this,name__19849__auto__,value__19850__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field32705.cljs$core$IFn$_invoke$arity$1 = tel_field32705__1;
tel_field32705.cljs$core$IFn$_invoke$arity$2 = tel_field32705__2;
return tel_field32705;
})()
;

sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field32705);

/**
* Creates a text input field.
*/
sablono.core.text_field32708 = (function() {
var text_field32708 = null;
var text_field32708__1 = (function (name__19849__auto__){
return text_field32708.cljs$core$IFn$_invoke$arity$2(name__19849__auto__,null);
});
var text_field32708__2 = (function (name__19849__auto__,value__19850__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__19849__auto__,value__19850__auto__);
});
text_field32708 = function(name__19849__auto__,value__19850__auto__){
switch(arguments.length){
case 1:
return text_field32708__1.call(this,name__19849__auto__);
case 2:
return text_field32708__2.call(this,name__19849__auto__,value__19850__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field32708.cljs$core$IFn$_invoke$arity$1 = text_field32708__1;
text_field32708.cljs$core$IFn$_invoke$arity$2 = text_field32708__2;
return text_field32708;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field32708);

/**
* Creates a time input field.
*/
sablono.core.time_field32711 = (function() {
var time_field32711 = null;
var time_field32711__1 = (function (name__19849__auto__){
return time_field32711.cljs$core$IFn$_invoke$arity$2(name__19849__auto__,null);
});
var time_field32711__2 = (function (name__19849__auto__,value__19850__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__19849__auto__,value__19850__auto__);
});
time_field32711 = function(name__19849__auto__,value__19850__auto__){
switch(arguments.length){
case 1:
return time_field32711__1.call(this,name__19849__auto__);
case 2:
return time_field32711__2.call(this,name__19849__auto__,value__19850__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field32711.cljs$core$IFn$_invoke$arity$1 = time_field32711__1;
time_field32711.cljs$core$IFn$_invoke$arity$2 = time_field32711__2;
return time_field32711;
})()
;

sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field32711);

/**
* Creates a url input field.
*/
sablono.core.url_field32714 = (function() {
var url_field32714 = null;
var url_field32714__1 = (function (name__19849__auto__){
return url_field32714.cljs$core$IFn$_invoke$arity$2(name__19849__auto__,null);
});
var url_field32714__2 = (function (name__19849__auto__,value__19850__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__19849__auto__,value__19850__auto__);
});
url_field32714 = function(name__19849__auto__,value__19850__auto__){
switch(arguments.length){
case 1:
return url_field32714__1.call(this,name__19849__auto__);
case 2:
return url_field32714__2.call(this,name__19849__auto__,value__19850__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field32714.cljs$core$IFn$_invoke$arity$1 = url_field32714__1;
url_field32714.cljs$core$IFn$_invoke$arity$2 = url_field32714__2;
return url_field32714;
})()
;

sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field32714);

/**
* Creates a week input field.
*/
sablono.core.week_field32717 = (function() {
var week_field32717 = null;
var week_field32717__1 = (function (name__19849__auto__){
return week_field32717.cljs$core$IFn$_invoke$arity$2(name__19849__auto__,null);
});
var week_field32717__2 = (function (name__19849__auto__,value__19850__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__19849__auto__,value__19850__auto__);
});
week_field32717 = function(name__19849__auto__,value__19850__auto__){
switch(arguments.length){
case 1:
return week_field32717__1.call(this,name__19849__auto__);
case 2:
return week_field32717__2.call(this,name__19849__auto__,value__19850__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field32717.cljs$core$IFn$_invoke$arity$1 = week_field32717__1;
week_field32717.cljs$core$IFn$_invoke$arity$2 = week_field32717__2;
return week_field32717;
})()
;

sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field32717);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box32720 = (function() {
var check_box32720 = null;
var check_box32720__1 = (function (name){
return check_box32720.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box32720__2 = (function (name,checked_QMARK_){
return check_box32720.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box32720__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$122,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$23,"checkbox",cljs.core.constant$keyword$35,sablono.core.make_name(name),cljs.core.constant$keyword$119,sablono.core.make_id(name),cljs.core.constant$keyword$21,value,cljs.core.constant$keyword$133,checked_QMARK_], null)], null);
});
check_box32720 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box32720__1.call(this,name);
case 2:
return check_box32720__2.call(this,name,checked_QMARK_);
case 3:
return check_box32720__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box32720.cljs$core$IFn$_invoke$arity$1 = check_box32720__1;
check_box32720.cljs$core$IFn$_invoke$arity$2 = check_box32720__2;
check_box32720.cljs$core$IFn$_invoke$arity$3 = check_box32720__3;
return check_box32720;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box32720);
/**
* Creates a radio button.
*/
sablono.core.radio_button32726 = (function() {
var radio_button32726 = null;
var radio_button32726__1 = (function (group){
return radio_button32726.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button32726__2 = (function (group,checked_QMARK_){
return radio_button32726.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button32726__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$122,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$23,"radio",cljs.core.constant$keyword$35,sablono.core.make_name(group),cljs.core.constant$keyword$119,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$21,value,cljs.core.constant$keyword$133,checked_QMARK_], null)], null);
});
radio_button32726 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button32726__1.call(this,group);
case 2:
return radio_button32726__2.call(this,group,checked_QMARK_);
case 3:
return radio_button32726__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button32726.cljs$core$IFn$_invoke$arity$1 = radio_button32726__1;
radio_button32726.cljs$core$IFn$_invoke$arity$2 = radio_button32726__2;
radio_button32726.cljs$core$IFn$_invoke$arity$3 = radio_button32726__3;
return radio_button32726;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button32726);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options32732 = (function() {
var select_options32732 = null;
var select_options32732__1 = (function (coll){
return select_options32732.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options32732__2 = (function (coll,selected){
var iter__4571__auto__ = (function iter__32753(s__32754){
return (new cljs.core.LazySeq(null,(function (){
var s__32754__$1 = s__32754;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__32754__$1);
if(temp__4126__auto__){
var s__32754__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32754__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__32754__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__32756 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__32755 = (0);
while(true){
if((i__32755 < size__4570__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__32755);
cljs.core.chunk_append(b__32756,((cljs.core.sequential_QMARK_(x))?(function (){var vec__32761 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32761,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32761,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32761,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$134,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$135,text], null),select_options32732.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$121,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$21,val,cljs.core.constant$keyword$136,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$137,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$121,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$136,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));

var G__32763 = (i__32755 + (1));
i__32755 = G__32763;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32756),iter__32753(cljs.core.chunk_rest(s__32754__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32756),null);
}
} else {
var x = cljs.core.first(s__32754__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__32762 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32762,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32762,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32762,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$134,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$135,text], null),select_options32732.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$121,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$21,val,cljs.core.constant$keyword$136,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$137,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$121,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$136,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__32753(cljs.core.rest(s__32754__$2)));
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
select_options32732 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options32732__1.call(this,coll);
case 2:
return select_options32732__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options32732.cljs$core$IFn$_invoke$arity$1 = select_options32732__1;
select_options32732.cljs$core$IFn$_invoke$arity$2 = select_options32732__2;
return select_options32732;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options32732);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down32764 = (function() {
var drop_down32764 = null;
var drop_down32764__2 = (function (name,options){
return drop_down32764.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down32764__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$138,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$35,sablono.core.make_name(name),cljs.core.constant$keyword$119,sablono.core.make_id(name)], null),(function (){var G__32770 = options;
var G__32771 = selected;
return (sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(G__32770,G__32771) : sablono.core.select_options.call(null,G__32770,G__32771));
})()], null);
});
drop_down32764 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down32764__2.call(this,name,options);
case 3:
return drop_down32764__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down32764.cljs$core$IFn$_invoke$arity$2 = drop_down32764__2;
drop_down32764.cljs$core$IFn$_invoke$arity$3 = drop_down32764__3;
return drop_down32764;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down32764);
/**
* Creates a text area element.
*/
sablono.core.text_area32772 = (function() {
var text_area32772 = null;
var text_area32772__1 = (function (name){
return text_area32772.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area32772__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$120,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$35,sablono.core.make_name(name),cljs.core.constant$keyword$119,sablono.core.make_id(name),cljs.core.constant$keyword$21,value], null)], null);
});
text_area32772 = function(name,value){
switch(arguments.length){
case 1:
return text_area32772__1.call(this,name);
case 2:
return text_area32772__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area32772.cljs$core$IFn$_invoke$arity$1 = text_area32772__1;
text_area32772.cljs$core$IFn$_invoke$arity$2 = text_area32772__2;
return text_area32772;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area32772);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label32775 = (function label32775(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$135,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$117,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label32775);
/**
* Creates a submit button.
*/
sablono.core.submit_button32776 = (function submit_button32776(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$122,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$23,"submit",cljs.core.constant$keyword$21,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button32776);
/**
* Creates a form reset button.
*/
sablono.core.reset_button32777 = (function reset_button32777(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$122,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$23,"reset",cljs.core.constant$keyword$21,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button32777);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to32778 = (function() { 
var form_to32778__delegate = function (p__32779,body){
var vec__32783 = p__32779;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32783,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32783,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$139,null,cljs.core.constant$keyword$140,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$141,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$142,method_str,cljs.core.constant$keyword$143,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$141,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$142,"POST",cljs.core.constant$keyword$143,action_uri], null),(function (){var G__32784 = "_method";
var G__32785 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2(G__32784,G__32785) : sablono.core.hidden_field.call(null,G__32784,G__32785));
})()], null)),body));
};
var form_to32778 = function (p__32779,var_args){
var body = null;
if (arguments.length > 1) {
var G__32786__i = 0, G__32786__a = new Array(arguments.length -  1);
while (G__32786__i < G__32786__a.length) {G__32786__a[G__32786__i] = arguments[G__32786__i + 1]; ++G__32786__i;}
  body = new cljs.core.IndexedSeq(G__32786__a,0);
} 
return form_to32778__delegate.call(this,p__32779,body);};
form_to32778.cljs$lang$maxFixedArity = 1;
form_to32778.cljs$lang$applyTo = (function (arglist__32787){
var p__32779 = cljs.core.first(arglist__32787);
var body = cljs.core.rest(arglist__32787);
return form_to32778__delegate(p__32779,body);
});
form_to32778.cljs$core$IFn$_invoke$arity$variadic = form_to32778__delegate;
return form_to32778;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to32778);

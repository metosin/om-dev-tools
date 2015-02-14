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
var G__32450__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__32449 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32449,(0),null);
var body = cljs.core.nthnext(vec__32449,(1));
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__32450 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32451__i = 0, G__32451__a = new Array(arguments.length -  0);
while (G__32451__i < G__32451__a.length) {G__32451__a[G__32451__i] = arguments[G__32451__i + 0]; ++G__32451__i;}
  args = new cljs.core.IndexedSeq(G__32451__a,0);
} 
return G__32450__delegate.call(this,args);};
G__32450.cljs$lang$maxFixedArity = 0;
G__32450.cljs$lang$applyTo = (function (arglist__32452){
var args = cljs.core.seq(arglist__32452);
return G__32450__delegate(args);
});
G__32450.cljs$core$IFn$_invoke$arity$variadic = G__32450__delegate;
return G__32450;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){
var iter__4571__auto__ = (function iter__32459(s__32460){
return (new cljs.core.LazySeq(null,(function (){
var s__32460__$1 = s__32460;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__32460__$1);
if(temp__4126__auto__){
var s__32460__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32460__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__32460__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__32462 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__32461 = (0);
while(true){
if((i__32461 < size__4570__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__32461);
cljs.core.chunk_append(b__32462,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__32465 = (i__32461 + (1));
i__32461 = G__32465;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32462),iter__32459(cljs.core.chunk_rest(s__32460__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32462),null);
}
} else {
var args = cljs.core.first(s__32460__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__32459(cljs.core.rest(s__32460__$2)));
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
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){
return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){
var iter__4571__auto__ = (function iter__32472(s__32473){
return (new cljs.core.LazySeq(null,(function (){
var s__32473__$1 = s__32473;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__32473__$1);
if(temp__4126__auto__){
var s__32473__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32473__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__32473__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__32475 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__32474 = (0);
while(true){
if((i__32474 < size__4570__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__32474);
cljs.core.chunk_append(b__32475,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$123,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$23,"text/css",cljs.core.constant$keyword$124,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$125,"stylesheet"], null)], null));

var G__32478 = (i__32474 + (1));
i__32474 = G__32478;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32475),iter__32472(cljs.core.chunk_rest(s__32473__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32475),null);
}
} else {
var style = cljs.core.first(s__32473__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$123,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$23,"text/css",cljs.core.constant$keyword$124,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$125,"stylesheet"], null)], null),iter__32472(cljs.core.rest(s__32473__$2)));
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
var G__32479__i = 0, G__32479__a = new Array(arguments.length -  0);
while (G__32479__i < G__32479__a.length) {G__32479__a[G__32479__i] = arguments[G__32479__i + 0]; ++G__32479__i;}
  styles = new cljs.core.IndexedSeq(G__32479__a,0);
} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__32480){
var styles = cljs.core.seq(arglist__32480);
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
var G__32485 = (function (){return goog.dom.getDocument();
})().body;
var G__32486 = (function (){var G__32487 = "script";
var G__32488 = {"src": src};
return goog.dom.createDom(G__32487,G__32488);
})();
return goog.dom.appendChild(G__32485,G__32486);
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){
return sablono.core.include_js("http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to32489 = (function() { 
var link_to32489__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$126,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$124,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to32489 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
var G__32490__i = 0, G__32490__a = new Array(arguments.length -  1);
while (G__32490__i < G__32490__a.length) {G__32490__a[G__32490__i] = arguments[G__32490__i + 1]; ++G__32490__i;}
  content = new cljs.core.IndexedSeq(G__32490__a,0);
} 
return link_to32489__delegate.call(this,url,content);};
link_to32489.cljs$lang$maxFixedArity = 1;
link_to32489.cljs$lang$applyTo = (function (arglist__32491){
var url = cljs.core.first(arglist__32491);
var content = cljs.core.rest(arglist__32491);
return link_to32489__delegate(url,content);
});
link_to32489.cljs$core$IFn$_invoke$arity$variadic = link_to32489__delegate;
return link_to32489;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to32489);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to32492 = (function() { 
var mail_to32492__delegate = function (e_mail,p__32493){
var vec__32495 = p__32493;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32495,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$126,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$124,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3815__auto__ = content;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return e_mail;
}
})()], null);
};
var mail_to32492 = function (e_mail,var_args){
var p__32493 = null;
if (arguments.length > 1) {
var G__32496__i = 0, G__32496__a = new Array(arguments.length -  1);
while (G__32496__i < G__32496__a.length) {G__32496__a[G__32496__i] = arguments[G__32496__i + 1]; ++G__32496__i;}
  p__32493 = new cljs.core.IndexedSeq(G__32496__a,0);
} 
return mail_to32492__delegate.call(this,e_mail,p__32493);};
mail_to32492.cljs$lang$maxFixedArity = 1;
mail_to32492.cljs$lang$applyTo = (function (arglist__32497){
var e_mail = cljs.core.first(arglist__32497);
var p__32493 = cljs.core.rest(arglist__32497);
return mail_to32492__delegate(e_mail,p__32493);
});
mail_to32492.cljs$core$IFn$_invoke$arity$variadic = mail_to32492__delegate;
return mail_to32492;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to32492);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list32498 = (function unordered_list32498(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$127,(function (){var iter__4571__auto__ = (function iter__32505(s__32506){
return (new cljs.core.LazySeq(null,(function (){
var s__32506__$1 = s__32506;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__32506__$1);
if(temp__4126__auto__){
var s__32506__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32506__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__32506__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__32508 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__32507 = (0);
while(true){
if((i__32507 < size__4570__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__32507);
cljs.core.chunk_append(b__32508,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,x], null));

var G__32511 = (i__32507 + (1));
i__32507 = G__32511;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32508),iter__32505(cljs.core.chunk_rest(s__32506__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32508),null);
}
} else {
var x = cljs.core.first(s__32506__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,x], null),iter__32505(cljs.core.rest(s__32506__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list32498);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list32512 = (function ordered_list32512(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$129,(function (){var iter__4571__auto__ = (function iter__32519(s__32520){
return (new cljs.core.LazySeq(null,(function (){
var s__32520__$1 = s__32520;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__32520__$1);
if(temp__4126__auto__){
var s__32520__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32520__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__32520__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__32522 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__32521 = (0);
while(true){
if((i__32521 < size__4570__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__32521);
cljs.core.chunk_append(b__32522,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,x], null));

var G__32525 = (i__32521 + (1));
i__32521 = G__32525;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32522),iter__32519(cljs.core.chunk_rest(s__32520__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32522),null);
}
} else {
var x = cljs.core.first(s__32520__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,x], null),iter__32519(cljs.core.rest(s__32520__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list32512);
/**
* Create an image element.
*/
sablono.core.image32526 = (function() {
var image32526 = null;
var image32526__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$131,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image32526__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$131,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$132,alt], null)], null);
});
image32526 = function(src,alt){
switch(arguments.length){
case 1:
return image32526__1.call(this,src);
case 2:
return image32526__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image32526.cljs$core$IFn$_invoke$arity$1 = image32526__1;
image32526.cljs$core$IFn$_invoke$arity$2 = image32526__2;
return image32526;
})()
;

sablono.core.image = sablono.core.wrap_attrs(sablono.core.image32526);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__32527_SHARP_,p2__32528_SHARP_){
return [cljs.core.str(p1__32527_SHARP_),cljs.core.str("["),cljs.core.str(p2__32528_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__32529_SHARP_,p2__32530_SHARP_){
return [cljs.core.str(p1__32529_SHARP_),cljs.core.str("-"),cljs.core.str(p2__32530_SHARP_)].join('');
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
sablono.core.color_field32531 = (function() {
var color_field32531 = null;
var color_field32531__1 = (function (name__19837__auto__){
return color_field32531.cljs$core$IFn$_invoke$arity$2(name__19837__auto__,null);
});
var color_field32531__2 = (function (name__19837__auto__,value__19838__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__19837__auto__,value__19838__auto__);
});
color_field32531 = function(name__19837__auto__,value__19838__auto__){
switch(arguments.length){
case 1:
return color_field32531__1.call(this,name__19837__auto__);
case 2:
return color_field32531__2.call(this,name__19837__auto__,value__19838__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field32531.cljs$core$IFn$_invoke$arity$1 = color_field32531__1;
color_field32531.cljs$core$IFn$_invoke$arity$2 = color_field32531__2;
return color_field32531;
})()
;

sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field32531);

/**
* Creates a date input field.
*/
sablono.core.date_field32534 = (function() {
var date_field32534 = null;
var date_field32534__1 = (function (name__19837__auto__){
return date_field32534.cljs$core$IFn$_invoke$arity$2(name__19837__auto__,null);
});
var date_field32534__2 = (function (name__19837__auto__,value__19838__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__19837__auto__,value__19838__auto__);
});
date_field32534 = function(name__19837__auto__,value__19838__auto__){
switch(arguments.length){
case 1:
return date_field32534__1.call(this,name__19837__auto__);
case 2:
return date_field32534__2.call(this,name__19837__auto__,value__19838__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field32534.cljs$core$IFn$_invoke$arity$1 = date_field32534__1;
date_field32534.cljs$core$IFn$_invoke$arity$2 = date_field32534__2;
return date_field32534;
})()
;

sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field32534);

/**
* Creates a datetime input field.
*/
sablono.core.datetime_field32537 = (function() {
var datetime_field32537 = null;
var datetime_field32537__1 = (function (name__19837__auto__){
return datetime_field32537.cljs$core$IFn$_invoke$arity$2(name__19837__auto__,null);
});
var datetime_field32537__2 = (function (name__19837__auto__,value__19838__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__19837__auto__,value__19838__auto__);
});
datetime_field32537 = function(name__19837__auto__,value__19838__auto__){
switch(arguments.length){
case 1:
return datetime_field32537__1.call(this,name__19837__auto__);
case 2:
return datetime_field32537__2.call(this,name__19837__auto__,value__19838__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field32537.cljs$core$IFn$_invoke$arity$1 = datetime_field32537__1;
datetime_field32537.cljs$core$IFn$_invoke$arity$2 = datetime_field32537__2;
return datetime_field32537;
})()
;

sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field32537);

/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field32540 = (function() {
var datetime_local_field32540 = null;
var datetime_local_field32540__1 = (function (name__19837__auto__){
return datetime_local_field32540.cljs$core$IFn$_invoke$arity$2(name__19837__auto__,null);
});
var datetime_local_field32540__2 = (function (name__19837__auto__,value__19838__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__19837__auto__,value__19838__auto__);
});
datetime_local_field32540 = function(name__19837__auto__,value__19838__auto__){
switch(arguments.length){
case 1:
return datetime_local_field32540__1.call(this,name__19837__auto__);
case 2:
return datetime_local_field32540__2.call(this,name__19837__auto__,value__19838__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field32540.cljs$core$IFn$_invoke$arity$1 = datetime_local_field32540__1;
datetime_local_field32540.cljs$core$IFn$_invoke$arity$2 = datetime_local_field32540__2;
return datetime_local_field32540;
})()
;

sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field32540);

/**
* Creates a email input field.
*/
sablono.core.email_field32543 = (function() {
var email_field32543 = null;
var email_field32543__1 = (function (name__19837__auto__){
return email_field32543.cljs$core$IFn$_invoke$arity$2(name__19837__auto__,null);
});
var email_field32543__2 = (function (name__19837__auto__,value__19838__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__19837__auto__,value__19838__auto__);
});
email_field32543 = function(name__19837__auto__,value__19838__auto__){
switch(arguments.length){
case 1:
return email_field32543__1.call(this,name__19837__auto__);
case 2:
return email_field32543__2.call(this,name__19837__auto__,value__19838__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field32543.cljs$core$IFn$_invoke$arity$1 = email_field32543__1;
email_field32543.cljs$core$IFn$_invoke$arity$2 = email_field32543__2;
return email_field32543;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field32543);

/**
* Creates a file input field.
*/
sablono.core.file_field32546 = (function() {
var file_field32546 = null;
var file_field32546__1 = (function (name__19837__auto__){
return file_field32546.cljs$core$IFn$_invoke$arity$2(name__19837__auto__,null);
});
var file_field32546__2 = (function (name__19837__auto__,value__19838__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__19837__auto__,value__19838__auto__);
});
file_field32546 = function(name__19837__auto__,value__19838__auto__){
switch(arguments.length){
case 1:
return file_field32546__1.call(this,name__19837__auto__);
case 2:
return file_field32546__2.call(this,name__19837__auto__,value__19838__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field32546.cljs$core$IFn$_invoke$arity$1 = file_field32546__1;
file_field32546.cljs$core$IFn$_invoke$arity$2 = file_field32546__2;
return file_field32546;
})()
;

sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field32546);

/**
* Creates a hidden input field.
*/
sablono.core.hidden_field32549 = (function() {
var hidden_field32549 = null;
var hidden_field32549__1 = (function (name__19837__auto__){
return hidden_field32549.cljs$core$IFn$_invoke$arity$2(name__19837__auto__,null);
});
var hidden_field32549__2 = (function (name__19837__auto__,value__19838__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__19837__auto__,value__19838__auto__);
});
hidden_field32549 = function(name__19837__auto__,value__19838__auto__){
switch(arguments.length){
case 1:
return hidden_field32549__1.call(this,name__19837__auto__);
case 2:
return hidden_field32549__2.call(this,name__19837__auto__,value__19838__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field32549.cljs$core$IFn$_invoke$arity$1 = hidden_field32549__1;
hidden_field32549.cljs$core$IFn$_invoke$arity$2 = hidden_field32549__2;
return hidden_field32549;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field32549);

/**
* Creates a month input field.
*/
sablono.core.month_field32552 = (function() {
var month_field32552 = null;
var month_field32552__1 = (function (name__19837__auto__){
return month_field32552.cljs$core$IFn$_invoke$arity$2(name__19837__auto__,null);
});
var month_field32552__2 = (function (name__19837__auto__,value__19838__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__19837__auto__,value__19838__auto__);
});
month_field32552 = function(name__19837__auto__,value__19838__auto__){
switch(arguments.length){
case 1:
return month_field32552__1.call(this,name__19837__auto__);
case 2:
return month_field32552__2.call(this,name__19837__auto__,value__19838__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field32552.cljs$core$IFn$_invoke$arity$1 = month_field32552__1;
month_field32552.cljs$core$IFn$_invoke$arity$2 = month_field32552__2;
return month_field32552;
})()
;

sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field32552);

/**
* Creates a number input field.
*/
sablono.core.number_field32555 = (function() {
var number_field32555 = null;
var number_field32555__1 = (function (name__19837__auto__){
return number_field32555.cljs$core$IFn$_invoke$arity$2(name__19837__auto__,null);
});
var number_field32555__2 = (function (name__19837__auto__,value__19838__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__19837__auto__,value__19838__auto__);
});
number_field32555 = function(name__19837__auto__,value__19838__auto__){
switch(arguments.length){
case 1:
return number_field32555__1.call(this,name__19837__auto__);
case 2:
return number_field32555__2.call(this,name__19837__auto__,value__19838__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field32555.cljs$core$IFn$_invoke$arity$1 = number_field32555__1;
number_field32555.cljs$core$IFn$_invoke$arity$2 = number_field32555__2;
return number_field32555;
})()
;

sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field32555);

/**
* Creates a password input field.
*/
sablono.core.password_field32558 = (function() {
var password_field32558 = null;
var password_field32558__1 = (function (name__19837__auto__){
return password_field32558.cljs$core$IFn$_invoke$arity$2(name__19837__auto__,null);
});
var password_field32558__2 = (function (name__19837__auto__,value__19838__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__19837__auto__,value__19838__auto__);
});
password_field32558 = function(name__19837__auto__,value__19838__auto__){
switch(arguments.length){
case 1:
return password_field32558__1.call(this,name__19837__auto__);
case 2:
return password_field32558__2.call(this,name__19837__auto__,value__19838__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field32558.cljs$core$IFn$_invoke$arity$1 = password_field32558__1;
password_field32558.cljs$core$IFn$_invoke$arity$2 = password_field32558__2;
return password_field32558;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field32558);

/**
* Creates a range input field.
*/
sablono.core.range_field32561 = (function() {
var range_field32561 = null;
var range_field32561__1 = (function (name__19837__auto__){
return range_field32561.cljs$core$IFn$_invoke$arity$2(name__19837__auto__,null);
});
var range_field32561__2 = (function (name__19837__auto__,value__19838__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__19837__auto__,value__19838__auto__);
});
range_field32561 = function(name__19837__auto__,value__19838__auto__){
switch(arguments.length){
case 1:
return range_field32561__1.call(this,name__19837__auto__);
case 2:
return range_field32561__2.call(this,name__19837__auto__,value__19838__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field32561.cljs$core$IFn$_invoke$arity$1 = range_field32561__1;
range_field32561.cljs$core$IFn$_invoke$arity$2 = range_field32561__2;
return range_field32561;
})()
;

sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field32561);

/**
* Creates a search input field.
*/
sablono.core.search_field32564 = (function() {
var search_field32564 = null;
var search_field32564__1 = (function (name__19837__auto__){
return search_field32564.cljs$core$IFn$_invoke$arity$2(name__19837__auto__,null);
});
var search_field32564__2 = (function (name__19837__auto__,value__19838__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__19837__auto__,value__19838__auto__);
});
search_field32564 = function(name__19837__auto__,value__19838__auto__){
switch(arguments.length){
case 1:
return search_field32564__1.call(this,name__19837__auto__);
case 2:
return search_field32564__2.call(this,name__19837__auto__,value__19838__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field32564.cljs$core$IFn$_invoke$arity$1 = search_field32564__1;
search_field32564.cljs$core$IFn$_invoke$arity$2 = search_field32564__2;
return search_field32564;
})()
;

sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field32564);

/**
* Creates a tel input field.
*/
sablono.core.tel_field32567 = (function() {
var tel_field32567 = null;
var tel_field32567__1 = (function (name__19837__auto__){
return tel_field32567.cljs$core$IFn$_invoke$arity$2(name__19837__auto__,null);
});
var tel_field32567__2 = (function (name__19837__auto__,value__19838__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__19837__auto__,value__19838__auto__);
});
tel_field32567 = function(name__19837__auto__,value__19838__auto__){
switch(arguments.length){
case 1:
return tel_field32567__1.call(this,name__19837__auto__);
case 2:
return tel_field32567__2.call(this,name__19837__auto__,value__19838__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field32567.cljs$core$IFn$_invoke$arity$1 = tel_field32567__1;
tel_field32567.cljs$core$IFn$_invoke$arity$2 = tel_field32567__2;
return tel_field32567;
})()
;

sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field32567);

/**
* Creates a text input field.
*/
sablono.core.text_field32570 = (function() {
var text_field32570 = null;
var text_field32570__1 = (function (name__19837__auto__){
return text_field32570.cljs$core$IFn$_invoke$arity$2(name__19837__auto__,null);
});
var text_field32570__2 = (function (name__19837__auto__,value__19838__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__19837__auto__,value__19838__auto__);
});
text_field32570 = function(name__19837__auto__,value__19838__auto__){
switch(arguments.length){
case 1:
return text_field32570__1.call(this,name__19837__auto__);
case 2:
return text_field32570__2.call(this,name__19837__auto__,value__19838__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field32570.cljs$core$IFn$_invoke$arity$1 = text_field32570__1;
text_field32570.cljs$core$IFn$_invoke$arity$2 = text_field32570__2;
return text_field32570;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field32570);

/**
* Creates a time input field.
*/
sablono.core.time_field32573 = (function() {
var time_field32573 = null;
var time_field32573__1 = (function (name__19837__auto__){
return time_field32573.cljs$core$IFn$_invoke$arity$2(name__19837__auto__,null);
});
var time_field32573__2 = (function (name__19837__auto__,value__19838__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__19837__auto__,value__19838__auto__);
});
time_field32573 = function(name__19837__auto__,value__19838__auto__){
switch(arguments.length){
case 1:
return time_field32573__1.call(this,name__19837__auto__);
case 2:
return time_field32573__2.call(this,name__19837__auto__,value__19838__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field32573.cljs$core$IFn$_invoke$arity$1 = time_field32573__1;
time_field32573.cljs$core$IFn$_invoke$arity$2 = time_field32573__2;
return time_field32573;
})()
;

sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field32573);

/**
* Creates a url input field.
*/
sablono.core.url_field32576 = (function() {
var url_field32576 = null;
var url_field32576__1 = (function (name__19837__auto__){
return url_field32576.cljs$core$IFn$_invoke$arity$2(name__19837__auto__,null);
});
var url_field32576__2 = (function (name__19837__auto__,value__19838__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__19837__auto__,value__19838__auto__);
});
url_field32576 = function(name__19837__auto__,value__19838__auto__){
switch(arguments.length){
case 1:
return url_field32576__1.call(this,name__19837__auto__);
case 2:
return url_field32576__2.call(this,name__19837__auto__,value__19838__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field32576.cljs$core$IFn$_invoke$arity$1 = url_field32576__1;
url_field32576.cljs$core$IFn$_invoke$arity$2 = url_field32576__2;
return url_field32576;
})()
;

sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field32576);

/**
* Creates a week input field.
*/
sablono.core.week_field32579 = (function() {
var week_field32579 = null;
var week_field32579__1 = (function (name__19837__auto__){
return week_field32579.cljs$core$IFn$_invoke$arity$2(name__19837__auto__,null);
});
var week_field32579__2 = (function (name__19837__auto__,value__19838__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__19837__auto__,value__19838__auto__);
});
week_field32579 = function(name__19837__auto__,value__19838__auto__){
switch(arguments.length){
case 1:
return week_field32579__1.call(this,name__19837__auto__);
case 2:
return week_field32579__2.call(this,name__19837__auto__,value__19838__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field32579.cljs$core$IFn$_invoke$arity$1 = week_field32579__1;
week_field32579.cljs$core$IFn$_invoke$arity$2 = week_field32579__2;
return week_field32579;
})()
;

sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field32579);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box32582 = (function() {
var check_box32582 = null;
var check_box32582__1 = (function (name){
return check_box32582.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box32582__2 = (function (name,checked_QMARK_){
return check_box32582.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box32582__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$122,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$23,"checkbox",cljs.core.constant$keyword$35,sablono.core.make_name(name),cljs.core.constant$keyword$119,sablono.core.make_id(name),cljs.core.constant$keyword$21,value,cljs.core.constant$keyword$133,checked_QMARK_], null)], null);
});
check_box32582 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box32582__1.call(this,name);
case 2:
return check_box32582__2.call(this,name,checked_QMARK_);
case 3:
return check_box32582__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box32582.cljs$core$IFn$_invoke$arity$1 = check_box32582__1;
check_box32582.cljs$core$IFn$_invoke$arity$2 = check_box32582__2;
check_box32582.cljs$core$IFn$_invoke$arity$3 = check_box32582__3;
return check_box32582;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box32582);
/**
* Creates a radio button.
*/
sablono.core.radio_button32588 = (function() {
var radio_button32588 = null;
var radio_button32588__1 = (function (group){
return radio_button32588.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button32588__2 = (function (group,checked_QMARK_){
return radio_button32588.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button32588__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$122,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$23,"radio",cljs.core.constant$keyword$35,sablono.core.make_name(group),cljs.core.constant$keyword$119,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$21,value,cljs.core.constant$keyword$133,checked_QMARK_], null)], null);
});
radio_button32588 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button32588__1.call(this,group);
case 2:
return radio_button32588__2.call(this,group,checked_QMARK_);
case 3:
return radio_button32588__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button32588.cljs$core$IFn$_invoke$arity$1 = radio_button32588__1;
radio_button32588.cljs$core$IFn$_invoke$arity$2 = radio_button32588__2;
radio_button32588.cljs$core$IFn$_invoke$arity$3 = radio_button32588__3;
return radio_button32588;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button32588);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options32594 = (function() {
var select_options32594 = null;
var select_options32594__1 = (function (coll){
return select_options32594.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options32594__2 = (function (coll,selected){
var iter__4571__auto__ = (function iter__32615(s__32616){
return (new cljs.core.LazySeq(null,(function (){
var s__32616__$1 = s__32616;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__32616__$1);
if(temp__4126__auto__){
var s__32616__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32616__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__32616__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__32618 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__32617 = (0);
while(true){
if((i__32617 < size__4570__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__32617);
cljs.core.chunk_append(b__32618,((cljs.core.sequential_QMARK_(x))?(function (){var vec__32623 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32623,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32623,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32623,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$134,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$135,text], null),select_options32594.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$121,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$21,val,cljs.core.constant$keyword$136,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$137,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$121,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$136,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));

var G__32625 = (i__32617 + (1));
i__32617 = G__32625;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32618),iter__32615(cljs.core.chunk_rest(s__32616__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32618),null);
}
} else {
var x = cljs.core.first(s__32616__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__32624 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32624,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32624,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32624,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$134,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$135,text], null),select_options32594.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$121,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$21,val,cljs.core.constant$keyword$136,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$137,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$121,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$136,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__32615(cljs.core.rest(s__32616__$2)));
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
select_options32594 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options32594__1.call(this,coll);
case 2:
return select_options32594__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options32594.cljs$core$IFn$_invoke$arity$1 = select_options32594__1;
select_options32594.cljs$core$IFn$_invoke$arity$2 = select_options32594__2;
return select_options32594;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options32594);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down32626 = (function() {
var drop_down32626 = null;
var drop_down32626__2 = (function (name,options){
return drop_down32626.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down32626__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$138,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$35,sablono.core.make_name(name),cljs.core.constant$keyword$119,sablono.core.make_id(name)], null),(function (){var G__32632 = options;
var G__32633 = selected;
return (sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(G__32632,G__32633) : sablono.core.select_options.call(null,G__32632,G__32633));
})()], null);
});
drop_down32626 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down32626__2.call(this,name,options);
case 3:
return drop_down32626__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down32626.cljs$core$IFn$_invoke$arity$2 = drop_down32626__2;
drop_down32626.cljs$core$IFn$_invoke$arity$3 = drop_down32626__3;
return drop_down32626;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down32626);
/**
* Creates a text area element.
*/
sablono.core.text_area32634 = (function() {
var text_area32634 = null;
var text_area32634__1 = (function (name){
return text_area32634.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area32634__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$120,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$35,sablono.core.make_name(name),cljs.core.constant$keyword$119,sablono.core.make_id(name),cljs.core.constant$keyword$21,value], null)], null);
});
text_area32634 = function(name,value){
switch(arguments.length){
case 1:
return text_area32634__1.call(this,name);
case 2:
return text_area32634__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area32634.cljs$core$IFn$_invoke$arity$1 = text_area32634__1;
text_area32634.cljs$core$IFn$_invoke$arity$2 = text_area32634__2;
return text_area32634;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area32634);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label32637 = (function label32637(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$135,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$117,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label32637);
/**
* Creates a submit button.
*/
sablono.core.submit_button32638 = (function submit_button32638(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$122,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$23,"submit",cljs.core.constant$keyword$21,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button32638);
/**
* Creates a form reset button.
*/
sablono.core.reset_button32639 = (function reset_button32639(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$122,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$23,"reset",cljs.core.constant$keyword$21,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button32639);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to32640 = (function() { 
var form_to32640__delegate = function (p__32641,body){
var vec__32645 = p__32641;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32645,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32645,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$139,null,cljs.core.constant$keyword$140,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$141,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$142,method_str,cljs.core.constant$keyword$143,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$141,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$142,"POST",cljs.core.constant$keyword$143,action_uri], null),(function (){var G__32646 = "_method";
var G__32647 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2(G__32646,G__32647) : sablono.core.hidden_field.call(null,G__32646,G__32647));
})()], null)),body));
};
var form_to32640 = function (p__32641,var_args){
var body = null;
if (arguments.length > 1) {
var G__32648__i = 0, G__32648__a = new Array(arguments.length -  1);
while (G__32648__i < G__32648__a.length) {G__32648__a[G__32648__i] = arguments[G__32648__i + 1]; ++G__32648__i;}
  body = new cljs.core.IndexedSeq(G__32648__a,0);
} 
return form_to32640__delegate.call(this,p__32641,body);};
form_to32640.cljs$lang$maxFixedArity = 1;
form_to32640.cljs$lang$applyTo = (function (arglist__32649){
var p__32641 = cljs.core.first(arglist__32649);
var body = cljs.core.rest(arglist__32649);
return form_to32640__delegate(p__32641,body);
});
form_to32640.cljs$core$IFn$_invoke$arity$variadic = form_to32640__delegate;
return form_to32640;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to32640);

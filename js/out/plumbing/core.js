// Compiled by ClojureScript 0.0-2850 {}
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('plumbing.fnk.schema');
goog.require('schema.utils');
/**
* A sentinel value representing missing portions of the input data.
*/
plumbing.core._PLUS_none_PLUS_ = cljs.core.constant$keyword$53;
/**
* Updates the value in map m at k with the function f.
* 
* Like update-in, but for updating a single top-level key.
* Any additional args will be passed to f after the value.
* @param {...*} var_args
*/
plumbing.core.update = (function() {
var update = null;
var update__3 = (function (m,k,f){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__22282 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22282) : f.call(null,G__22282));
})());
});
var update__4 = (function (m,k,f,x1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__22283 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__22284 = x1;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22283,G__22284) : f.call(null,G__22283,G__22284));
})());
});
var update__5 = (function (m,k,f,x1,x2){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__22285 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__22286 = x1;
var G__22287 = x2;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__22285,G__22286,G__22287) : f.call(null,G__22285,G__22286,G__22287));
})());
});
var update__6 = (function() { 
var G__22288__delegate = function (m,k,f,x1,x2,xs){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x1,x2,xs));
};
var G__22288 = function (m,k,f,x1,x2,var_args){
var xs = null;
if (arguments.length > 5) {
var G__22289__i = 0, G__22289__a = new Array(arguments.length -  5);
while (G__22289__i < G__22289__a.length) {G__22289__a[G__22289__i] = arguments[G__22289__i + 5]; ++G__22289__i;}
  xs = new cljs.core.IndexedSeq(G__22289__a,0);
} 
return G__22288__delegate.call(this,m,k,f,x1,x2,xs);};
G__22288.cljs$lang$maxFixedArity = 5;
G__22288.cljs$lang$applyTo = (function (arglist__22290){
var m = cljs.core.first(arglist__22290);
arglist__22290 = cljs.core.next(arglist__22290);
var k = cljs.core.first(arglist__22290);
arglist__22290 = cljs.core.next(arglist__22290);
var f = cljs.core.first(arglist__22290);
arglist__22290 = cljs.core.next(arglist__22290);
var x1 = cljs.core.first(arglist__22290);
arglist__22290 = cljs.core.next(arglist__22290);
var x2 = cljs.core.first(arglist__22290);
var xs = cljs.core.rest(arglist__22290);
return G__22288__delegate(m,k,f,x1,x2,xs);
});
G__22288.cljs$core$IFn$_invoke$arity$variadic = G__22288__delegate;
return G__22288;
})()
;
update = function(m,k,f,x1,x2,var_args){
var xs = var_args;
switch(arguments.length){
case 3:
return update__3.call(this,m,k,f);
case 4:
return update__4.call(this,m,k,f,x1);
case 5:
return update__5.call(this,m,k,f,x1,x2);
default:
var G__22291 = null;
if (arguments.length > 5) {
var G__22292__i = 0, G__22292__a = new Array(arguments.length -  5);
while (G__22292__i < G__22292__a.length) {G__22292__a[G__22292__i] = arguments[G__22292__i + 5]; ++G__22292__i;}
G__22291 = new cljs.core.IndexedSeq(G__22292__a,0);
}
return update__6.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x1,x2, G__22291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update.cljs$lang$maxFixedArity = 5;
update.cljs$lang$applyTo = update__6.cljs$lang$applyTo;
update.cljs$core$IFn$_invoke$arity$3 = update__3;
update.cljs$core$IFn$_invoke$arity$4 = update__4;
update.cljs$core$IFn$_invoke$arity$5 = update__5;
update.cljs$core$IFn$_invoke$arity$variadic = update__6.cljs$core$IFn$_invoke$arity$variadic;
return update;
})()
;
/**
* Build map k -> (f v) for [k v] in map, preserving the initial type
*/
plumbing.core.map_vals = (function map_vals(f,m){
if(cljs.core.sorted_QMARK_(m)){
return cljs.core.reduce_kv((function (out_m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out_m,k,(function (){var G__22312 = v;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22312) : f.call(null,G__22312));
})());
}),cljs.core.sorted_map(),m);
} else {
if(cljs.core.map_QMARK_(m)){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,k,(function (){var G__22313 = v;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22313) : f.call(null,G__22313));
})());
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__12913__auto__ = (function (){var G__22315 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22315) : cljs.core.atom.call(null,G__22315));
})();
var seq__22316_22331 = cljs.core.seq(m);
var chunk__22317_22332 = null;
var count__22318_22333 = (0);
var i__22319_22334 = (0);
while(true){
if((i__22319_22334 < count__22318_22333)){
var vec__22320_22335 = chunk__22317_22332.cljs$core$IIndexed$_nth$arity$2(null,i__22319_22334);
var k_22336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22320_22335,(0),null);
var v_22337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22320_22335,(1),null);
var m22314_22338 = (function (){var G__22321 = m_atom__12913__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22321) : cljs.core.deref.call(null,G__22321));
})();
var G__22322_22339 = m_atom__12913__auto__;
var G__22323_22340 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m22314_22338,k_22336,(function (){var G__22324 = v_22337;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22324) : f.call(null,G__22324));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22322_22339,G__22323_22340) : cljs.core.reset_BANG_.call(null,G__22322_22339,G__22323_22340));

var G__22341 = seq__22316_22331;
var G__22342 = chunk__22317_22332;
var G__22343 = count__22318_22333;
var G__22344 = (i__22319_22334 + (1));
seq__22316_22331 = G__22341;
chunk__22317_22332 = G__22342;
count__22318_22333 = G__22343;
i__22319_22334 = G__22344;
continue;
} else {
var temp__4126__auto___22345 = cljs.core.seq(seq__22316_22331);
if(temp__4126__auto___22345){
var seq__22316_22346__$1 = temp__4126__auto___22345;
if(cljs.core.chunked_seq_QMARK_(seq__22316_22346__$1)){
var c__4602__auto___22347 = cljs.core.chunk_first(seq__22316_22346__$1);
var G__22348 = cljs.core.chunk_rest(seq__22316_22346__$1);
var G__22349 = c__4602__auto___22347;
var G__22350 = cljs.core.count(c__4602__auto___22347);
var G__22351 = (0);
seq__22316_22331 = G__22348;
chunk__22317_22332 = G__22349;
count__22318_22333 = G__22350;
i__22319_22334 = G__22351;
continue;
} else {
var vec__22325_22352 = cljs.core.first(seq__22316_22346__$1);
var k_22353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22325_22352,(0),null);
var v_22354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22325_22352,(1),null);
var m22314_22355 = (function (){var G__22326 = m_atom__12913__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22326) : cljs.core.deref.call(null,G__22326));
})();
var G__22327_22356 = m_atom__12913__auto__;
var G__22328_22357 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m22314_22355,k_22353,(function (){var G__22329 = v_22354;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22329) : f.call(null,G__22329));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22327_22356,G__22328_22357) : cljs.core.reset_BANG_.call(null,G__22327_22356,G__22328_22357));

var G__22358 = cljs.core.next(seq__22316_22346__$1);
var G__22359 = null;
var G__22360 = (0);
var G__22361 = (0);
seq__22316_22331 = G__22358;
chunk__22317_22332 = G__22359;
count__22318_22333 = G__22360;
i__22319_22334 = G__22361;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__22330 = m_atom__12913__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22330) : cljs.core.deref.call(null,G__22330));
})());

}
}
});
/**
* Build map (f k) -> v for [k v] in map m
*/
plumbing.core.map_keys = (function map_keys(f,m){
if(cljs.core.map_QMARK_(m)){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,(function (){var G__22380 = k;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22380) : f.call(null,G__22380));
})(),v);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__12913__auto__ = (function (){var G__22382 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22382) : cljs.core.atom.call(null,G__22382));
})();
var seq__22383_22398 = cljs.core.seq(m);
var chunk__22384_22399 = null;
var count__22385_22400 = (0);
var i__22386_22401 = (0);
while(true){
if((i__22386_22401 < count__22385_22400)){
var vec__22387_22402 = chunk__22384_22399.cljs$core$IIndexed$_nth$arity$2(null,i__22386_22401);
var k_22403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22387_22402,(0),null);
var v_22404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22387_22402,(1),null);
var m22381_22405 = (function (){var G__22388 = m_atom__12913__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22388) : cljs.core.deref.call(null,G__22388));
})();
var G__22389_22406 = m_atom__12913__auto__;
var G__22390_22407 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m22381_22405,(function (){var G__22391 = k_22403;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22391) : f.call(null,G__22391));
})(),v_22404);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22389_22406,G__22390_22407) : cljs.core.reset_BANG_.call(null,G__22389_22406,G__22390_22407));

var G__22408 = seq__22383_22398;
var G__22409 = chunk__22384_22399;
var G__22410 = count__22385_22400;
var G__22411 = (i__22386_22401 + (1));
seq__22383_22398 = G__22408;
chunk__22384_22399 = G__22409;
count__22385_22400 = G__22410;
i__22386_22401 = G__22411;
continue;
} else {
var temp__4126__auto___22412 = cljs.core.seq(seq__22383_22398);
if(temp__4126__auto___22412){
var seq__22383_22413__$1 = temp__4126__auto___22412;
if(cljs.core.chunked_seq_QMARK_(seq__22383_22413__$1)){
var c__4602__auto___22414 = cljs.core.chunk_first(seq__22383_22413__$1);
var G__22415 = cljs.core.chunk_rest(seq__22383_22413__$1);
var G__22416 = c__4602__auto___22414;
var G__22417 = cljs.core.count(c__4602__auto___22414);
var G__22418 = (0);
seq__22383_22398 = G__22415;
chunk__22384_22399 = G__22416;
count__22385_22400 = G__22417;
i__22386_22401 = G__22418;
continue;
} else {
var vec__22392_22419 = cljs.core.first(seq__22383_22413__$1);
var k_22420 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22392_22419,(0),null);
var v_22421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22392_22419,(1),null);
var m22381_22422 = (function (){var G__22393 = m_atom__12913__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22393) : cljs.core.deref.call(null,G__22393));
})();
var G__22394_22423 = m_atom__12913__auto__;
var G__22395_22424 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m22381_22422,(function (){var G__22396 = k_22420;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22396) : f.call(null,G__22396));
})(),v_22421);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22394_22423,G__22395_22424) : cljs.core.reset_BANG_.call(null,G__22394_22423,G__22395_22424));

var G__22425 = cljs.core.next(seq__22383_22413__$1);
var G__22426 = null;
var G__22427 = (0);
var G__22428 = (0);
seq__22383_22398 = G__22425;
chunk__22384_22399 = G__22426;
count__22385_22400 = G__22427;
i__22386_22401 = G__22428;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__22397 = m_atom__12913__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22397) : cljs.core.deref.call(null,G__22397));
})());
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){
var m_atom__12913__auto__ = (function (){var G__22445 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22445) : cljs.core.atom.call(null,G__22445));
})();
var seq__22446_22459 = cljs.core.seq(ks);
var chunk__22447_22460 = null;
var count__22448_22461 = (0);
var i__22449_22462 = (0);
while(true){
if((i__22449_22462 < count__22448_22461)){
var k_22463 = chunk__22447_22460.cljs$core$IIndexed$_nth$arity$2(null,i__22449_22462);
var m22444_22464 = (function (){var G__22450 = m_atom__12913__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22450) : cljs.core.deref.call(null,G__22450));
})();
var G__22451_22465 = m_atom__12913__auto__;
var G__22452_22466 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m22444_22464,k_22463,(function (){var G__22453 = k_22463;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22453) : f.call(null,G__22453));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22451_22465,G__22452_22466) : cljs.core.reset_BANG_.call(null,G__22451_22465,G__22452_22466));

var G__22467 = seq__22446_22459;
var G__22468 = chunk__22447_22460;
var G__22469 = count__22448_22461;
var G__22470 = (i__22449_22462 + (1));
seq__22446_22459 = G__22467;
chunk__22447_22460 = G__22468;
count__22448_22461 = G__22469;
i__22449_22462 = G__22470;
continue;
} else {
var temp__4126__auto___22471 = cljs.core.seq(seq__22446_22459);
if(temp__4126__auto___22471){
var seq__22446_22472__$1 = temp__4126__auto___22471;
if(cljs.core.chunked_seq_QMARK_(seq__22446_22472__$1)){
var c__4602__auto___22473 = cljs.core.chunk_first(seq__22446_22472__$1);
var G__22474 = cljs.core.chunk_rest(seq__22446_22472__$1);
var G__22475 = c__4602__auto___22473;
var G__22476 = cljs.core.count(c__4602__auto___22473);
var G__22477 = (0);
seq__22446_22459 = G__22474;
chunk__22447_22460 = G__22475;
count__22448_22461 = G__22476;
i__22449_22462 = G__22477;
continue;
} else {
var k_22478 = cljs.core.first(seq__22446_22472__$1);
var m22444_22479 = (function (){var G__22454 = m_atom__12913__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22454) : cljs.core.deref.call(null,G__22454));
})();
var G__22455_22480 = m_atom__12913__auto__;
var G__22456_22481 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m22444_22479,k_22478,(function (){var G__22457 = k_22478;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22457) : f.call(null,G__22457));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22455_22480,G__22456_22481) : cljs.core.reset_BANG_.call(null,G__22455_22480,G__22456_22481));

var G__22482 = cljs.core.next(seq__22446_22472__$1);
var G__22483 = null;
var G__22484 = (0);
var G__22485 = (0);
seq__22446_22459 = G__22482;
chunk__22447_22460 = G__22483;
count__22448_22461 = G__22484;
i__22449_22462 = G__22485;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__22458 = m_atom__12913__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22458) : cljs.core.deref.call(null,G__22458));
})());
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){
var m_atom__12913__auto__ = (function (){var G__22502 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22502) : cljs.core.atom.call(null,G__22502));
})();
var seq__22503_22516 = cljs.core.seq(vs);
var chunk__22504_22517 = null;
var count__22505_22518 = (0);
var i__22506_22519 = (0);
while(true){
if((i__22506_22519 < count__22505_22518)){
var v_22520 = chunk__22504_22517.cljs$core$IIndexed$_nth$arity$2(null,i__22506_22519);
var m22501_22521 = (function (){var G__22507 = m_atom__12913__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22507) : cljs.core.deref.call(null,G__22507));
})();
var G__22508_22522 = m_atom__12913__auto__;
var G__22509_22523 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m22501_22521,(function (){var G__22510 = v_22520;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22510) : f.call(null,G__22510));
})(),v_22520);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22508_22522,G__22509_22523) : cljs.core.reset_BANG_.call(null,G__22508_22522,G__22509_22523));

var G__22524 = seq__22503_22516;
var G__22525 = chunk__22504_22517;
var G__22526 = count__22505_22518;
var G__22527 = (i__22506_22519 + (1));
seq__22503_22516 = G__22524;
chunk__22504_22517 = G__22525;
count__22505_22518 = G__22526;
i__22506_22519 = G__22527;
continue;
} else {
var temp__4126__auto___22528 = cljs.core.seq(seq__22503_22516);
if(temp__4126__auto___22528){
var seq__22503_22529__$1 = temp__4126__auto___22528;
if(cljs.core.chunked_seq_QMARK_(seq__22503_22529__$1)){
var c__4602__auto___22530 = cljs.core.chunk_first(seq__22503_22529__$1);
var G__22531 = cljs.core.chunk_rest(seq__22503_22529__$1);
var G__22532 = c__4602__auto___22530;
var G__22533 = cljs.core.count(c__4602__auto___22530);
var G__22534 = (0);
seq__22503_22516 = G__22531;
chunk__22504_22517 = G__22532;
count__22505_22518 = G__22533;
i__22506_22519 = G__22534;
continue;
} else {
var v_22535 = cljs.core.first(seq__22503_22529__$1);
var m22501_22536 = (function (){var G__22511 = m_atom__12913__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22511) : cljs.core.deref.call(null,G__22511));
})();
var G__22512_22537 = m_atom__12913__auto__;
var G__22513_22538 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m22501_22536,(function (){var G__22514 = v_22535;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22514) : f.call(null,G__22514));
})(),v_22535);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22512_22537,G__22513_22538) : cljs.core.reset_BANG_.call(null,G__22512_22537,G__22513_22538));

var G__22539 = cljs.core.next(seq__22503_22529__$1);
var G__22540 = null;
var G__22541 = (0);
var G__22542 = (0);
seq__22503_22516 = G__22539;
chunk__22504_22517 = G__22540;
count__22505_22518 = G__22541;
i__22506_22519 = G__22542;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__22515 = m_atom__12913__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22515) : cljs.core.deref.call(null,G__22515));
})());
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__22543){
var vec__22549 = p__22543;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22549,(0),null);
var ks = cljs.core.nthnext(vec__22549,(1));
if(cljs.core.truth_(m)){
var temp__4124__auto__ = (function (){var and__3803__auto__ = ks;
if(and__3803__auto__){
return dissoc_in(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks);
} else {
return and__3803__auto__;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var res = temp__4124__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,res);
} else {
var res = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.empty_QMARK_(res)){
return null;
} else {
return res;
}
}
} else {
return null;
}
});
/**
* Recursively convert maps in m (including itself)
* to have keyword keys instead of string
*/
plumbing.core.keywordize_map = (function keywordize_map(x){
if(cljs.core.map_QMARK_(x)){
var m_atom__12913__auto__ = (function (){var G__22568 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22568) : cljs.core.atom.call(null,G__22568));
})();
var seq__22569_22582 = cljs.core.seq(x);
var chunk__22570_22583 = null;
var count__22571_22584 = (0);
var i__22572_22585 = (0);
while(true){
if((i__22572_22585 < count__22571_22584)){
var vec__22573_22586 = chunk__22570_22583.cljs$core$IIndexed$_nth$arity$2(null,i__22572_22585);
var k_22587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22573_22586,(0),null);
var v_22588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22573_22586,(1),null);
var m22567_22589 = (function (){var G__22574 = m_atom__12913__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22574) : cljs.core.deref.call(null,G__22574));
})();
var G__22575_22590 = m_atom__12913__auto__;
var G__22576_22591 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m22567_22589,((typeof k_22587 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_22587):k_22587),keywordize_map(v_22588));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22575_22590,G__22576_22591) : cljs.core.reset_BANG_.call(null,G__22575_22590,G__22576_22591));

var G__22592 = seq__22569_22582;
var G__22593 = chunk__22570_22583;
var G__22594 = count__22571_22584;
var G__22595 = (i__22572_22585 + (1));
seq__22569_22582 = G__22592;
chunk__22570_22583 = G__22593;
count__22571_22584 = G__22594;
i__22572_22585 = G__22595;
continue;
} else {
var temp__4126__auto___22596 = cljs.core.seq(seq__22569_22582);
if(temp__4126__auto___22596){
var seq__22569_22597__$1 = temp__4126__auto___22596;
if(cljs.core.chunked_seq_QMARK_(seq__22569_22597__$1)){
var c__4602__auto___22598 = cljs.core.chunk_first(seq__22569_22597__$1);
var G__22599 = cljs.core.chunk_rest(seq__22569_22597__$1);
var G__22600 = c__4602__auto___22598;
var G__22601 = cljs.core.count(c__4602__auto___22598);
var G__22602 = (0);
seq__22569_22582 = G__22599;
chunk__22570_22583 = G__22600;
count__22571_22584 = G__22601;
i__22572_22585 = G__22602;
continue;
} else {
var vec__22577_22603 = cljs.core.first(seq__22569_22597__$1);
var k_22604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22577_22603,(0),null);
var v_22605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22577_22603,(1),null);
var m22567_22606 = (function (){var G__22578 = m_atom__12913__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22578) : cljs.core.deref.call(null,G__22578));
})();
var G__22579_22607 = m_atom__12913__auto__;
var G__22580_22608 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m22567_22606,((typeof k_22604 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_22604):k_22604),keywordize_map(v_22605));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22579_22607,G__22580_22608) : cljs.core.reset_BANG_.call(null,G__22579_22607,G__22580_22608));

var G__22609 = cljs.core.next(seq__22569_22597__$1);
var G__22610 = null;
var G__22611 = (0);
var G__22612 = (0);
seq__22569_22582 = G__22609;
chunk__22570_22583 = G__22610;
count__22571_22584 = G__22611;
i__22572_22585 = G__22612;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__22581 = m_atom__12913__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22581) : cljs.core.deref.call(null,G__22581));
})());
} else {
if(cljs.core.seq_QMARK_(x)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(keywordize_map,x);
} else {
if(cljs.core.vector_QMARK_(x)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(keywordize_map,x);
} else {
return x;

}
}
}
});
/**
* Like get but throw an exception if not found
*/
plumbing.core.safe_get = (function safe_get(m,k){
var temp__4124__auto__ = cljs.core.find(m,k);
if(cljs.core.truth_(temp__4124__auto__)){
var pair__12982__auto__ = temp__4124__auto__;
return cljs.core.val(pair__12982__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.array_seq([k,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.key,m)], 0))));

}
});
/**
* Like get-in but throws exception if not found
*/
plumbing.core.safe_get_in = (function safe_get_in(m,ks){
while(true){
if(cljs.core.seq(ks)){
var G__22613 = plumbing.core.safe_get(m,cljs.core.first(ks));
var G__22614 = cljs.core.next(ks);
m = G__22613;
ks = G__22614;
continue;
} else {
return m;
}
break;
}
});
/**
* Like assoc but only assocs when value is truthy
* @param {...*} var_args
*/
plumbing.core.assoc_when = (function() { 
var assoc_when__delegate = function (m,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))], 0)))].join('')));
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__3815__auto__ = m;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4571__auto__ = (function iter__22625(s__22626){
return (new cljs.core.LazySeq(null,(function (){
var s__22626__$1 = s__22626;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__22626__$1);
if(temp__4126__auto__){
var s__22626__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22626__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__22626__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__22628 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__22627 = (0);
while(true){
if((i__22627 < size__4570__auto__)){
var vec__22633 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__22627);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22633,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22633,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append(b__22628,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__22635 = (i__22627 + (1));
i__22627 = G__22635;
continue;
} else {
var G__22636 = (i__22627 + (1));
i__22627 = G__22636;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22628),iter__22625(cljs.core.chunk_rest(s__22626__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22628),null);
}
} else {
var vec__22634 = cljs.core.first(s__22626__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22634,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22634,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__22625(cljs.core.rest(s__22626__$2)));
} else {
var G__22637 = cljs.core.rest(s__22626__$2);
s__22626__$1 = G__22637;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4571__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;
if (arguments.length > 1) {
var G__22638__i = 0, G__22638__a = new Array(arguments.length -  1);
while (G__22638__i < G__22638__a.length) {G__22638__a[G__22638__i] = arguments[G__22638__i + 1]; ++G__22638__i;}
  kvs = new cljs.core.IndexedSeq(G__22638__a,0);
} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__22639){
var m = cljs.core.first(arglist__22639);
var kvs = cljs.core.rest(arglist__22639);
return assoc_when__delegate(m,kvs);
});
assoc_when.cljs$core$IFn$_invoke$arity$variadic = assoc_when__delegate;
return assoc_when;
})()
;
/**
* Like update-in but returns m unchanged if key-seq is not present.
* @param {...*} var_args
*/
plumbing.core.update_in_when = (function() { 
var update_in_when__delegate = function (m,key_seq,f,args){
var found = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m,key_seq,plumbing.core._PLUS_none_PLUS_);
if(!((plumbing.core._PLUS_none_PLUS_ === found))){
return cljs.core.assoc_in(m,key_seq,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,found,args));
} else {
return m;
}
};
var update_in_when = function (m,key_seq,f,var_args){
var args = null;
if (arguments.length > 3) {
var G__22640__i = 0, G__22640__a = new Array(arguments.length -  3);
while (G__22640__i < G__22640__a.length) {G__22640__a[G__22640__i] = arguments[G__22640__i + 3]; ++G__22640__i;}
  args = new cljs.core.IndexedSeq(G__22640__a,0);
} 
return update_in_when__delegate.call(this,m,key_seq,f,args);};
update_in_when.cljs$lang$maxFixedArity = 3;
update_in_when.cljs$lang$applyTo = (function (arglist__22641){
var m = cljs.core.first(arglist__22641);
arglist__22641 = cljs.core.next(arglist__22641);
var key_seq = cljs.core.first(arglist__22641);
arglist__22641 = cljs.core.next(arglist__22641);
var f = cljs.core.first(arglist__22641);
var args = cljs.core.rest(arglist__22641);
return update_in_when__delegate(m,key_seq,f,args);
});
update_in_when.cljs$core$IFn$_invoke$arity$variadic = update_in_when__delegate;
return update_in_when;
})()
;
/**
* Like group-by, but accepts a map-fn that is applied to values before
* collected.
*/
plumbing.core.grouped_map = (function grouped_map(key_fn,map_fn,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x){
var k = (function (){var G__22644 = x;
return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__22644) : key_fn.call(null,G__22644));
})();
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.PersistentVector.EMPTY),(function (){var G__22645 = x;
return (map_fn.cljs$core$IFn$_invoke$arity$1 ? map_fn.cljs$core$IFn$_invoke$arity$1(G__22645) : map_fn.call(null,G__22645));
})()));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Like (apply concat s) but lazier (and shorter)
*/
plumbing.core.aconcat = (function aconcat(s){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.LazySeq(null,(function (){
return cljs.core.first(s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.next(s);
if(temp__4126__auto__){
var n = temp__4126__auto__;
return aconcat(n);
} else {
return null;
}
}),null,null)));
});
/**
* Takes a seqable and returns a lazy sequence that
* is maximally lazy and doesn't realize elements due to either
* chunking or apply.
* 
* Useful when you don't want chunking, for instance,
* (first awesome-website? (map slurp +a-bunch-of-urls+))
* may slurp up to 31 unneed webpages, wherease
* (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
* is guaranteed to stop slurping after the first awesome website.
* 
* Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
*/
plumbing.core.unchunk = (function unchunk(s){
if(cljs.core.seq(s)){
return cljs.core.cons(cljs.core.first(s),(new cljs.core.LazySeq(null,(function (){
return unchunk(cljs.core.rest(s));
}),null,null)));
} else {
return null;
}
});
/**
* Return sum of (f x) for each x in xs
*/
plumbing.core.sum = (function() {
var sum = null;
var sum__1 = (function (xs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,xs);
});
var sum__2 = (function (f,xs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,xs));
});
sum = function(f,xs){
switch(arguments.length){
case 1:
return sum__1.call(this,f);
case 2:
return sum__2.call(this,f,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sum.cljs$core$IFn$_invoke$arity$1 = sum__1;
sum.cljs$core$IFn$_invoke$arity$2 = sum__2;
return sum;
})()
;
/**
* returns (first xs) when xs has only 1 element
*/
plumbing.core.singleton = (function singleton(xs){
var temp__4126__auto__ = cljs.core.seq(xs);
if(temp__4126__auto__){
var xs__$1 = temp__4126__auto__;
if(cljs.core.next(xs__$1)){
return null;
} else {
return cljs.core.first(xs__$1);
}
} else {
return null;
}
});
/**
* Returns [idx x] for x in seqable s
*/
plumbing.core.indexed = (function indexed(s){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,s);
});
/**
* Returns indices idx of sequence s where (f (nth s idx))
*/
plumbing.core.positions = (function positions(f,s){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,x){
if(cljs.core.truth_((function (){var G__22649 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22649) : f.call(null,G__22649));
})())){
return i;
} else {
return null;
}
}),s);
});
/**
* Returns elements of xs which return unique
* values according to f. If multiple elements of xs return the same
* value under f, the first is returned
*/
plumbing.core.distinct_by = (function distinct_by(f,xs){
var s = (function (){var G__22665 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22665) : cljs.core.atom.call(null,G__22665));
})();
var iter__4571__auto__ = ((function (s){
return (function iter__22666(s__22667){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__22667__$1 = s__22667;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__22667__$1);
if(temp__4126__auto__){
var s__22667__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22667__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__22667__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__22669 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__22668 = (0);
while(true){
if((i__22668 < size__4570__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__22668);
var id = (function (){var G__22676 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22676) : f.call(null,G__22676));
})();
if(!(cljs.core.contains_QMARK_((function (){var G__22677 = s;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22677) : cljs.core.deref.call(null,G__22677));
})(),id))){
cljs.core.chunk_append(b__22669,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);

return x;
})()
);

var G__22680 = (i__22668 + (1));
i__22668 = G__22680;
continue;
} else {
var G__22681 = (i__22668 + (1));
i__22668 = G__22681;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22669),iter__22666(cljs.core.chunk_rest(s__22667__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22669),null);
}
} else {
var x = cljs.core.first(s__22667__$2);
var id = (function (){var G__22678 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22678) : f.call(null,G__22678));
})();
if(!(cljs.core.contains_QMARK_((function (){var G__22679 = s;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22679) : cljs.core.deref.call(null,G__22679));
})(),id))){
return cljs.core.cons((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);

return x;
})()
,iter__22666(cljs.core.rest(s__22667__$2)));
} else {
var G__22682 = cljs.core.rest(s__22667__$2);
s__22667__$1 = G__22682;
continue;
}
}
} else {
return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;
return iter__4571__auto__(xs);
});
/**
* Analogy: partition:partition-all :: interleave:interleave-all
* @param {...*} var_args
*/
plumbing.core.interleave_all = (function() { 
var interleave_all__delegate = function (colls){
return (new cljs.core.LazySeq(null,(function (){
return (function helper(seqs){
if(cljs.core.seq(seqs)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){
return helper(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.next,seqs));
}),null,null)));
} else {
return null;
}
}).call(null,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,colls));
}),null,null));
};
var interleave_all = function (var_args){
var colls = null;
if (arguments.length > 0) {
var G__22685__i = 0, G__22685__a = new Array(arguments.length -  0);
while (G__22685__i < G__22685__a.length) {G__22685__a[G__22685__i] = arguments[G__22685__i + 0]; ++G__22685__i;}
  colls = new cljs.core.IndexedSeq(G__22685__a,0);
} 
return interleave_all__delegate.call(this,colls);};
interleave_all.cljs$lang$maxFixedArity = 0;
interleave_all.cljs$lang$applyTo = (function (arglist__22686){
var colls = cljs.core.seq(arglist__22686);
return interleave_all__delegate(colls);
});
interleave_all.cljs$core$IFn$_invoke$arity$variadic = interleave_all__delegate;
return interleave_all;
})()
;
/**
* Returns # of elements of xs where pred holds
*/
plumbing.core.count_when = (function count_when(pred,xs){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(pred,xs));
});
/**
* Like conj but ignores non-truthy values
* @param {...*} var_args
*/
plumbing.core.conj_when = (function() {
var conj_when = null;
var conj_when__2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,x);
} else {
return coll;
}
});
var conj_when__3 = (function() { 
var G__22691__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__22692 = conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
var G__22693 = cljs.core.first(xs);
var G__22694 = cljs.core.next(xs);
coll = G__22692;
x = G__22693;
xs = G__22694;
continue;
} else {
return conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
}
break;
}
};
var G__22691 = function (coll,x,var_args){
var xs = null;
if (arguments.length > 2) {
var G__22695__i = 0, G__22695__a = new Array(arguments.length -  2);
while (G__22695__i < G__22695__a.length) {G__22695__a[G__22695__i] = arguments[G__22695__i + 2]; ++G__22695__i;}
  xs = new cljs.core.IndexedSeq(G__22695__a,0);
} 
return G__22691__delegate.call(this,coll,x,xs);};
G__22691.cljs$lang$maxFixedArity = 2;
G__22691.cljs$lang$applyTo = (function (arglist__22696){
var coll = cljs.core.first(arglist__22696);
arglist__22696 = cljs.core.next(arglist__22696);
var x = cljs.core.first(arglist__22696);
var xs = cljs.core.rest(arglist__22696);
return G__22691__delegate(coll,x,xs);
});
G__22691.cljs$core$IFn$_invoke$arity$variadic = G__22691__delegate;
return G__22691;
})()
;
conj_when = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj_when__2.call(this,coll,x);
default:
var G__22697 = null;
if (arguments.length > 2) {
var G__22698__i = 0, G__22698__a = new Array(arguments.length -  2);
while (G__22698__i < G__22698__a.length) {G__22698__a[G__22698__i] = arguments[G__22698__i + 2]; ++G__22698__i;}
G__22697 = new cljs.core.IndexedSeq(G__22698__a,0);
}
return conj_when__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, G__22697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj_when.cljs$lang$maxFixedArity = 2;
conj_when.cljs$lang$applyTo = conj_when__3.cljs$lang$applyTo;
conj_when.cljs$core$IFn$_invoke$arity$2 = conj_when__2;
conj_when.cljs$core$IFn$_invoke$arity$variadic = conj_when__3.cljs$core$IFn$_invoke$arity$variadic;
return conj_when;
})()
;
/**
* Like cons but does nothing if x is non-truthy.
*/
plumbing.core.cons_when = (function cons_when(x,s){
if(cljs.core.truth_(x)){
return cljs.core.cons(x,s);
} else {
return s;
}
});
/**
* Like sort-by, but prefers higher values rather than lower ones.
*/
plumbing.core.rsort_by = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse,cljs.core.sort_by);
/**
* Like swap! but returns a pair [old-val new-val]
* @param {...*} var_args
*/
plumbing.core.swap_pair_BANG_ = (function() {
var swap_pair_BANG_ = null;
var swap_pair_BANG___2 = (function (a,f){
while(true){
var old_val = (function (){var G__22704 = a;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22704) : cljs.core.deref.call(null,G__22704));
})();
var new_val = (function (){var G__22705 = old_val;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22705) : f.call(null,G__22705));
})();
if(cljs.core.compare_and_set_BANG_(a,old_val,new_val)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else {
continue;
}
break;
}
});
var swap_pair_BANG___3 = (function() { 
var G__22706__delegate = function (a,f,args){
return swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2(a,(function (p1__22699_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__22699_SHARP_,args);
}));
};
var G__22706 = function (a,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__22707__i = 0, G__22707__a = new Array(arguments.length -  2);
while (G__22707__i < G__22707__a.length) {G__22707__a[G__22707__i] = arguments[G__22707__i + 2]; ++G__22707__i;}
  args = new cljs.core.IndexedSeq(G__22707__a,0);
} 
return G__22706__delegate.call(this,a,f,args);};
G__22706.cljs$lang$maxFixedArity = 2;
G__22706.cljs$lang$applyTo = (function (arglist__22708){
var a = cljs.core.first(arglist__22708);
arglist__22708 = cljs.core.next(arglist__22708);
var f = cljs.core.first(arglist__22708);
var args = cljs.core.rest(arglist__22708);
return G__22706__delegate(a,f,args);
});
G__22706.cljs$core$IFn$_invoke$arity$variadic = G__22706__delegate;
return G__22706;
})()
;
swap_pair_BANG_ = function(a,f,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return swap_pair_BANG___2.call(this,a,f);
default:
var G__22709 = null;
if (arguments.length > 2) {
var G__22710__i = 0, G__22710__a = new Array(arguments.length -  2);
while (G__22710__i < G__22710__a.length) {G__22710__a[G__22710__i] = arguments[G__22710__i + 2]; ++G__22710__i;}
G__22709 = new cljs.core.IndexedSeq(G__22710__a,0);
}
return swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic(a,f, G__22709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_pair_BANG_.cljs$lang$maxFixedArity = 2;
swap_pair_BANG_.cljs$lang$applyTo = swap_pair_BANG___3.cljs$lang$applyTo;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = swap_pair_BANG___2;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return swap_pair_BANG_;
})()
;
/**
* Like reset! but returns old-val
*/
plumbing.core.get_and_set_BANG_ = (function get_and_set_BANG_(a,new_val){
return cljs.core.first(plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2(a,cljs.core.constantly(new_val)));
});
plumbing.core.millis = (function millis(){
return (new Date()).getTime();
});
/**
* Like apply, but applies a map to a function with positional map
* arguments. Can take optional initial args just like apply.
* @param {...*} var_args
*/
plumbing.core.mapply = (function() {
var mapply = null;
var mapply__2 = (function (f,m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,m));
});
var mapply__3 = (function() { 
var G__22711__delegate = function (f,arg,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,arg,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(args),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.last(args))));
};
var G__22711 = function (f,arg,var_args){
var args = null;
if (arguments.length > 2) {
var G__22712__i = 0, G__22712__a = new Array(arguments.length -  2);
while (G__22712__i < G__22712__a.length) {G__22712__a[G__22712__i] = arguments[G__22712__i + 2]; ++G__22712__i;}
  args = new cljs.core.IndexedSeq(G__22712__a,0);
} 
return G__22711__delegate.call(this,f,arg,args);};
G__22711.cljs$lang$maxFixedArity = 2;
G__22711.cljs$lang$applyTo = (function (arglist__22713){
var f = cljs.core.first(arglist__22713);
arglist__22713 = cljs.core.next(arglist__22713);
var arg = cljs.core.first(arglist__22713);
var args = cljs.core.rest(arglist__22713);
return G__22711__delegate(f,arg,args);
});
G__22711.cljs$core$IFn$_invoke$arity$variadic = G__22711__delegate;
return G__22711;
})()
;
mapply = function(f,arg,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return mapply__2.call(this,f,arg);
default:
var G__22714 = null;
if (arguments.length > 2) {
var G__22715__i = 0, G__22715__a = new Array(arguments.length -  2);
while (G__22715__i < G__22715__a.length) {G__22715__a[G__22715__i] = arguments[G__22715__i + 2]; ++G__22715__i;}
G__22714 = new cljs.core.IndexedSeq(G__22715__a,0);
}
return mapply__3.cljs$core$IFn$_invoke$arity$variadic(f,arg, G__22714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapply.cljs$lang$maxFixedArity = 2;
mapply.cljs$lang$applyTo = mapply__3.cljs$lang$applyTo;
mapply.cljs$core$IFn$_invoke$arity$2 = mapply__2;
mapply.cljs$core$IFn$_invoke$arity$variadic = mapply__3.cljs$core$IFn$_invoke$arity$variadic;
return mapply;
})()
;

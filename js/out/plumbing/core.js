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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__22290 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22290) : f.call(null,G__22290));
})());
});
var update__4 = (function (m,k,f,x1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__22291 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__22292 = x1;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22291,G__22292) : f.call(null,G__22291,G__22292));
})());
});
var update__5 = (function (m,k,f,x1,x2){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__22293 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__22294 = x1;
var G__22295 = x2;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__22293,G__22294,G__22295) : f.call(null,G__22293,G__22294,G__22295));
})());
});
var update__6 = (function() { 
var G__22296__delegate = function (m,k,f,x1,x2,xs){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x1,x2,xs));
};
var G__22296 = function (m,k,f,x1,x2,var_args){
var xs = null;
if (arguments.length > 5) {
var G__22297__i = 0, G__22297__a = new Array(arguments.length -  5);
while (G__22297__i < G__22297__a.length) {G__22297__a[G__22297__i] = arguments[G__22297__i + 5]; ++G__22297__i;}
  xs = new cljs.core.IndexedSeq(G__22297__a,0);
} 
return G__22296__delegate.call(this,m,k,f,x1,x2,xs);};
G__22296.cljs$lang$maxFixedArity = 5;
G__22296.cljs$lang$applyTo = (function (arglist__22298){
var m = cljs.core.first(arglist__22298);
arglist__22298 = cljs.core.next(arglist__22298);
var k = cljs.core.first(arglist__22298);
arglist__22298 = cljs.core.next(arglist__22298);
var f = cljs.core.first(arglist__22298);
arglist__22298 = cljs.core.next(arglist__22298);
var x1 = cljs.core.first(arglist__22298);
arglist__22298 = cljs.core.next(arglist__22298);
var x2 = cljs.core.first(arglist__22298);
var xs = cljs.core.rest(arglist__22298);
return G__22296__delegate(m,k,f,x1,x2,xs);
});
G__22296.cljs$core$IFn$_invoke$arity$variadic = G__22296__delegate;
return G__22296;
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
var G__22299 = null;
if (arguments.length > 5) {
var G__22300__i = 0, G__22300__a = new Array(arguments.length -  5);
while (G__22300__i < G__22300__a.length) {G__22300__a[G__22300__i] = arguments[G__22300__i + 5]; ++G__22300__i;}
G__22299 = new cljs.core.IndexedSeq(G__22300__a,0);
}
return update__6.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x1,x2, G__22299);
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out_m,k,(function (){var G__22320 = v;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22320) : f.call(null,G__22320));
})());
}),cljs.core.sorted_map(),m);
} else {
if(cljs.core.map_QMARK_(m)){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,k,(function (){var G__22321 = v;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22321) : f.call(null,G__22321));
})());
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__12913__auto__ = (function (){var G__22323 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22323) : cljs.core.atom.call(null,G__22323));
})();
var seq__22324_22339 = cljs.core.seq(m);
var chunk__22325_22340 = null;
var count__22326_22341 = (0);
var i__22327_22342 = (0);
while(true){
if((i__22327_22342 < count__22326_22341)){
var vec__22328_22343 = chunk__22325_22340.cljs$core$IIndexed$_nth$arity$2(null,i__22327_22342);
var k_22344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22328_22343,(0),null);
var v_22345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22328_22343,(1),null);
var m22322_22346 = (function (){var G__22329 = m_atom__12913__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22329) : cljs.core.deref.call(null,G__22329));
})();
var G__22330_22347 = m_atom__12913__auto__;
var G__22331_22348 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m22322_22346,k_22344,(function (){var G__22332 = v_22345;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22332) : f.call(null,G__22332));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22330_22347,G__22331_22348) : cljs.core.reset_BANG_.call(null,G__22330_22347,G__22331_22348));

var G__22349 = seq__22324_22339;
var G__22350 = chunk__22325_22340;
var G__22351 = count__22326_22341;
var G__22352 = (i__22327_22342 + (1));
seq__22324_22339 = G__22349;
chunk__22325_22340 = G__22350;
count__22326_22341 = G__22351;
i__22327_22342 = G__22352;
continue;
} else {
var temp__4126__auto___22353 = cljs.core.seq(seq__22324_22339);
if(temp__4126__auto___22353){
var seq__22324_22354__$1 = temp__4126__auto___22353;
if(cljs.core.chunked_seq_QMARK_(seq__22324_22354__$1)){
var c__4602__auto___22355 = cljs.core.chunk_first(seq__22324_22354__$1);
var G__22356 = cljs.core.chunk_rest(seq__22324_22354__$1);
var G__22357 = c__4602__auto___22355;
var G__22358 = cljs.core.count(c__4602__auto___22355);
var G__22359 = (0);
seq__22324_22339 = G__22356;
chunk__22325_22340 = G__22357;
count__22326_22341 = G__22358;
i__22327_22342 = G__22359;
continue;
} else {
var vec__22333_22360 = cljs.core.first(seq__22324_22354__$1);
var k_22361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22333_22360,(0),null);
var v_22362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22333_22360,(1),null);
var m22322_22363 = (function (){var G__22334 = m_atom__12913__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22334) : cljs.core.deref.call(null,G__22334));
})();
var G__22335_22364 = m_atom__12913__auto__;
var G__22336_22365 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m22322_22363,k_22361,(function (){var G__22337 = v_22362;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22337) : f.call(null,G__22337));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22335_22364,G__22336_22365) : cljs.core.reset_BANG_.call(null,G__22335_22364,G__22336_22365));

var G__22366 = cljs.core.next(seq__22324_22354__$1);
var G__22367 = null;
var G__22368 = (0);
var G__22369 = (0);
seq__22324_22339 = G__22366;
chunk__22325_22340 = G__22367;
count__22326_22341 = G__22368;
i__22327_22342 = G__22369;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__22338 = m_atom__12913__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22338) : cljs.core.deref.call(null,G__22338));
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
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,(function (){var G__22388 = k;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22388) : f.call(null,G__22388));
})(),v);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__12913__auto__ = (function (){var G__22390 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22390) : cljs.core.atom.call(null,G__22390));
})();
var seq__22391_22406 = cljs.core.seq(m);
var chunk__22392_22407 = null;
var count__22393_22408 = (0);
var i__22394_22409 = (0);
while(true){
if((i__22394_22409 < count__22393_22408)){
var vec__22395_22410 = chunk__22392_22407.cljs$core$IIndexed$_nth$arity$2(null,i__22394_22409);
var k_22411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22395_22410,(0),null);
var v_22412 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22395_22410,(1),null);
var m22389_22413 = (function (){var G__22396 = m_atom__12913__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22396) : cljs.core.deref.call(null,G__22396));
})();
var G__22397_22414 = m_atom__12913__auto__;
var G__22398_22415 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m22389_22413,(function (){var G__22399 = k_22411;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22399) : f.call(null,G__22399));
})(),v_22412);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22397_22414,G__22398_22415) : cljs.core.reset_BANG_.call(null,G__22397_22414,G__22398_22415));

var G__22416 = seq__22391_22406;
var G__22417 = chunk__22392_22407;
var G__22418 = count__22393_22408;
var G__22419 = (i__22394_22409 + (1));
seq__22391_22406 = G__22416;
chunk__22392_22407 = G__22417;
count__22393_22408 = G__22418;
i__22394_22409 = G__22419;
continue;
} else {
var temp__4126__auto___22420 = cljs.core.seq(seq__22391_22406);
if(temp__4126__auto___22420){
var seq__22391_22421__$1 = temp__4126__auto___22420;
if(cljs.core.chunked_seq_QMARK_(seq__22391_22421__$1)){
var c__4602__auto___22422 = cljs.core.chunk_first(seq__22391_22421__$1);
var G__22423 = cljs.core.chunk_rest(seq__22391_22421__$1);
var G__22424 = c__4602__auto___22422;
var G__22425 = cljs.core.count(c__4602__auto___22422);
var G__22426 = (0);
seq__22391_22406 = G__22423;
chunk__22392_22407 = G__22424;
count__22393_22408 = G__22425;
i__22394_22409 = G__22426;
continue;
} else {
var vec__22400_22427 = cljs.core.first(seq__22391_22421__$1);
var k_22428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22400_22427,(0),null);
var v_22429 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22400_22427,(1),null);
var m22389_22430 = (function (){var G__22401 = m_atom__12913__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22401) : cljs.core.deref.call(null,G__22401));
})();
var G__22402_22431 = m_atom__12913__auto__;
var G__22403_22432 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m22389_22430,(function (){var G__22404 = k_22428;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22404) : f.call(null,G__22404));
})(),v_22429);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22402_22431,G__22403_22432) : cljs.core.reset_BANG_.call(null,G__22402_22431,G__22403_22432));

var G__22433 = cljs.core.next(seq__22391_22421__$1);
var G__22434 = null;
var G__22435 = (0);
var G__22436 = (0);
seq__22391_22406 = G__22433;
chunk__22392_22407 = G__22434;
count__22393_22408 = G__22435;
i__22394_22409 = G__22436;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__22405 = m_atom__12913__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22405) : cljs.core.deref.call(null,G__22405));
})());
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){
var m_atom__12913__auto__ = (function (){var G__22453 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22453) : cljs.core.atom.call(null,G__22453));
})();
var seq__22454_22467 = cljs.core.seq(ks);
var chunk__22455_22468 = null;
var count__22456_22469 = (0);
var i__22457_22470 = (0);
while(true){
if((i__22457_22470 < count__22456_22469)){
var k_22471 = chunk__22455_22468.cljs$core$IIndexed$_nth$arity$2(null,i__22457_22470);
var m22452_22472 = (function (){var G__22458 = m_atom__12913__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22458) : cljs.core.deref.call(null,G__22458));
})();
var G__22459_22473 = m_atom__12913__auto__;
var G__22460_22474 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m22452_22472,k_22471,(function (){var G__22461 = k_22471;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22461) : f.call(null,G__22461));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22459_22473,G__22460_22474) : cljs.core.reset_BANG_.call(null,G__22459_22473,G__22460_22474));

var G__22475 = seq__22454_22467;
var G__22476 = chunk__22455_22468;
var G__22477 = count__22456_22469;
var G__22478 = (i__22457_22470 + (1));
seq__22454_22467 = G__22475;
chunk__22455_22468 = G__22476;
count__22456_22469 = G__22477;
i__22457_22470 = G__22478;
continue;
} else {
var temp__4126__auto___22479 = cljs.core.seq(seq__22454_22467);
if(temp__4126__auto___22479){
var seq__22454_22480__$1 = temp__4126__auto___22479;
if(cljs.core.chunked_seq_QMARK_(seq__22454_22480__$1)){
var c__4602__auto___22481 = cljs.core.chunk_first(seq__22454_22480__$1);
var G__22482 = cljs.core.chunk_rest(seq__22454_22480__$1);
var G__22483 = c__4602__auto___22481;
var G__22484 = cljs.core.count(c__4602__auto___22481);
var G__22485 = (0);
seq__22454_22467 = G__22482;
chunk__22455_22468 = G__22483;
count__22456_22469 = G__22484;
i__22457_22470 = G__22485;
continue;
} else {
var k_22486 = cljs.core.first(seq__22454_22480__$1);
var m22452_22487 = (function (){var G__22462 = m_atom__12913__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22462) : cljs.core.deref.call(null,G__22462));
})();
var G__22463_22488 = m_atom__12913__auto__;
var G__22464_22489 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m22452_22487,k_22486,(function (){var G__22465 = k_22486;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22465) : f.call(null,G__22465));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22463_22488,G__22464_22489) : cljs.core.reset_BANG_.call(null,G__22463_22488,G__22464_22489));

var G__22490 = cljs.core.next(seq__22454_22480__$1);
var G__22491 = null;
var G__22492 = (0);
var G__22493 = (0);
seq__22454_22467 = G__22490;
chunk__22455_22468 = G__22491;
count__22456_22469 = G__22492;
i__22457_22470 = G__22493;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__22466 = m_atom__12913__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22466) : cljs.core.deref.call(null,G__22466));
})());
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){
var m_atom__12913__auto__ = (function (){var G__22510 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22510) : cljs.core.atom.call(null,G__22510));
})();
var seq__22511_22524 = cljs.core.seq(vs);
var chunk__22512_22525 = null;
var count__22513_22526 = (0);
var i__22514_22527 = (0);
while(true){
if((i__22514_22527 < count__22513_22526)){
var v_22528 = chunk__22512_22525.cljs$core$IIndexed$_nth$arity$2(null,i__22514_22527);
var m22509_22529 = (function (){var G__22515 = m_atom__12913__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22515) : cljs.core.deref.call(null,G__22515));
})();
var G__22516_22530 = m_atom__12913__auto__;
var G__22517_22531 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m22509_22529,(function (){var G__22518 = v_22528;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22518) : f.call(null,G__22518));
})(),v_22528);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22516_22530,G__22517_22531) : cljs.core.reset_BANG_.call(null,G__22516_22530,G__22517_22531));

var G__22532 = seq__22511_22524;
var G__22533 = chunk__22512_22525;
var G__22534 = count__22513_22526;
var G__22535 = (i__22514_22527 + (1));
seq__22511_22524 = G__22532;
chunk__22512_22525 = G__22533;
count__22513_22526 = G__22534;
i__22514_22527 = G__22535;
continue;
} else {
var temp__4126__auto___22536 = cljs.core.seq(seq__22511_22524);
if(temp__4126__auto___22536){
var seq__22511_22537__$1 = temp__4126__auto___22536;
if(cljs.core.chunked_seq_QMARK_(seq__22511_22537__$1)){
var c__4602__auto___22538 = cljs.core.chunk_first(seq__22511_22537__$1);
var G__22539 = cljs.core.chunk_rest(seq__22511_22537__$1);
var G__22540 = c__4602__auto___22538;
var G__22541 = cljs.core.count(c__4602__auto___22538);
var G__22542 = (0);
seq__22511_22524 = G__22539;
chunk__22512_22525 = G__22540;
count__22513_22526 = G__22541;
i__22514_22527 = G__22542;
continue;
} else {
var v_22543 = cljs.core.first(seq__22511_22537__$1);
var m22509_22544 = (function (){var G__22519 = m_atom__12913__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22519) : cljs.core.deref.call(null,G__22519));
})();
var G__22520_22545 = m_atom__12913__auto__;
var G__22521_22546 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m22509_22544,(function (){var G__22522 = v_22543;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22522) : f.call(null,G__22522));
})(),v_22543);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22520_22545,G__22521_22546) : cljs.core.reset_BANG_.call(null,G__22520_22545,G__22521_22546));

var G__22547 = cljs.core.next(seq__22511_22537__$1);
var G__22548 = null;
var G__22549 = (0);
var G__22550 = (0);
seq__22511_22524 = G__22547;
chunk__22512_22525 = G__22548;
count__22513_22526 = G__22549;
i__22514_22527 = G__22550;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__22523 = m_atom__12913__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22523) : cljs.core.deref.call(null,G__22523));
})());
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__22551){
var vec__22557 = p__22551;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22557,(0),null);
var ks = cljs.core.nthnext(vec__22557,(1));
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
var m_atom__12913__auto__ = (function (){var G__22576 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22576) : cljs.core.atom.call(null,G__22576));
})();
var seq__22577_22590 = cljs.core.seq(x);
var chunk__22578_22591 = null;
var count__22579_22592 = (0);
var i__22580_22593 = (0);
while(true){
if((i__22580_22593 < count__22579_22592)){
var vec__22581_22594 = chunk__22578_22591.cljs$core$IIndexed$_nth$arity$2(null,i__22580_22593);
var k_22595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22581_22594,(0),null);
var v_22596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22581_22594,(1),null);
var m22575_22597 = (function (){var G__22582 = m_atom__12913__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22582) : cljs.core.deref.call(null,G__22582));
})();
var G__22583_22598 = m_atom__12913__auto__;
var G__22584_22599 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m22575_22597,((typeof k_22595 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_22595):k_22595),keywordize_map(v_22596));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22583_22598,G__22584_22599) : cljs.core.reset_BANG_.call(null,G__22583_22598,G__22584_22599));

var G__22600 = seq__22577_22590;
var G__22601 = chunk__22578_22591;
var G__22602 = count__22579_22592;
var G__22603 = (i__22580_22593 + (1));
seq__22577_22590 = G__22600;
chunk__22578_22591 = G__22601;
count__22579_22592 = G__22602;
i__22580_22593 = G__22603;
continue;
} else {
var temp__4126__auto___22604 = cljs.core.seq(seq__22577_22590);
if(temp__4126__auto___22604){
var seq__22577_22605__$1 = temp__4126__auto___22604;
if(cljs.core.chunked_seq_QMARK_(seq__22577_22605__$1)){
var c__4602__auto___22606 = cljs.core.chunk_first(seq__22577_22605__$1);
var G__22607 = cljs.core.chunk_rest(seq__22577_22605__$1);
var G__22608 = c__4602__auto___22606;
var G__22609 = cljs.core.count(c__4602__auto___22606);
var G__22610 = (0);
seq__22577_22590 = G__22607;
chunk__22578_22591 = G__22608;
count__22579_22592 = G__22609;
i__22580_22593 = G__22610;
continue;
} else {
var vec__22585_22611 = cljs.core.first(seq__22577_22605__$1);
var k_22612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22585_22611,(0),null);
var v_22613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22585_22611,(1),null);
var m22575_22614 = (function (){var G__22586 = m_atom__12913__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22586) : cljs.core.deref.call(null,G__22586));
})();
var G__22587_22615 = m_atom__12913__auto__;
var G__22588_22616 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m22575_22614,((typeof k_22612 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_22612):k_22612),keywordize_map(v_22613));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22587_22615,G__22588_22616) : cljs.core.reset_BANG_.call(null,G__22587_22615,G__22588_22616));

var G__22617 = cljs.core.next(seq__22577_22605__$1);
var G__22618 = null;
var G__22619 = (0);
var G__22620 = (0);
seq__22577_22590 = G__22617;
chunk__22578_22591 = G__22618;
count__22579_22592 = G__22619;
i__22580_22593 = G__22620;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__22589 = m_atom__12913__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22589) : cljs.core.deref.call(null,G__22589));
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
var G__22621 = plumbing.core.safe_get(m,cljs.core.first(ks));
var G__22622 = cljs.core.next(ks);
m = G__22621;
ks = G__22622;
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
})(),(function (){var iter__4571__auto__ = (function iter__22633(s__22634){
return (new cljs.core.LazySeq(null,(function (){
var s__22634__$1 = s__22634;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__22634__$1);
if(temp__4126__auto__){
var s__22634__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22634__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__22634__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__22636 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__22635 = (0);
while(true){
if((i__22635 < size__4570__auto__)){
var vec__22641 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__22635);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22641,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22641,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append(b__22636,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__22643 = (i__22635 + (1));
i__22635 = G__22643;
continue;
} else {
var G__22644 = (i__22635 + (1));
i__22635 = G__22644;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22636),iter__22633(cljs.core.chunk_rest(s__22634__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22636),null);
}
} else {
var vec__22642 = cljs.core.first(s__22634__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22642,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22642,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__22633(cljs.core.rest(s__22634__$2)));
} else {
var G__22645 = cljs.core.rest(s__22634__$2);
s__22634__$1 = G__22645;
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
var G__22646__i = 0, G__22646__a = new Array(arguments.length -  1);
while (G__22646__i < G__22646__a.length) {G__22646__a[G__22646__i] = arguments[G__22646__i + 1]; ++G__22646__i;}
  kvs = new cljs.core.IndexedSeq(G__22646__a,0);
} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__22647){
var m = cljs.core.first(arglist__22647);
var kvs = cljs.core.rest(arglist__22647);
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
var G__22648__i = 0, G__22648__a = new Array(arguments.length -  3);
while (G__22648__i < G__22648__a.length) {G__22648__a[G__22648__i] = arguments[G__22648__i + 3]; ++G__22648__i;}
  args = new cljs.core.IndexedSeq(G__22648__a,0);
} 
return update_in_when__delegate.call(this,m,key_seq,f,args);};
update_in_when.cljs$lang$maxFixedArity = 3;
update_in_when.cljs$lang$applyTo = (function (arglist__22649){
var m = cljs.core.first(arglist__22649);
arglist__22649 = cljs.core.next(arglist__22649);
var key_seq = cljs.core.first(arglist__22649);
arglist__22649 = cljs.core.next(arglist__22649);
var f = cljs.core.first(arglist__22649);
var args = cljs.core.rest(arglist__22649);
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
var k = (function (){var G__22652 = x;
return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__22652) : key_fn.call(null,G__22652));
})();
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.PersistentVector.EMPTY),(function (){var G__22653 = x;
return (map_fn.cljs$core$IFn$_invoke$arity$1 ? map_fn.cljs$core$IFn$_invoke$arity$1(G__22653) : map_fn.call(null,G__22653));
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
if(cljs.core.truth_((function (){var G__22657 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22657) : f.call(null,G__22657));
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
var s = (function (){var G__22673 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22673) : cljs.core.atom.call(null,G__22673));
})();
var iter__4571__auto__ = ((function (s){
return (function iter__22674(s__22675){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__22675__$1 = s__22675;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__22675__$1);
if(temp__4126__auto__){
var s__22675__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22675__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__22675__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__22677 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__22676 = (0);
while(true){
if((i__22676 < size__4570__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__22676);
var id = (function (){var G__22684 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22684) : f.call(null,G__22684));
})();
if(!(cljs.core.contains_QMARK_((function (){var G__22685 = s;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22685) : cljs.core.deref.call(null,G__22685));
})(),id))){
cljs.core.chunk_append(b__22677,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);

return x;
})()
);

var G__22688 = (i__22676 + (1));
i__22676 = G__22688;
continue;
} else {
var G__22689 = (i__22676 + (1));
i__22676 = G__22689;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22677),iter__22674(cljs.core.chunk_rest(s__22675__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22677),null);
}
} else {
var x = cljs.core.first(s__22675__$2);
var id = (function (){var G__22686 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22686) : f.call(null,G__22686));
})();
if(!(cljs.core.contains_QMARK_((function (){var G__22687 = s;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22687) : cljs.core.deref.call(null,G__22687));
})(),id))){
return cljs.core.cons((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);

return x;
})()
,iter__22674(cljs.core.rest(s__22675__$2)));
} else {
var G__22690 = cljs.core.rest(s__22675__$2);
s__22675__$1 = G__22690;
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
var G__22693__i = 0, G__22693__a = new Array(arguments.length -  0);
while (G__22693__i < G__22693__a.length) {G__22693__a[G__22693__i] = arguments[G__22693__i + 0]; ++G__22693__i;}
  colls = new cljs.core.IndexedSeq(G__22693__a,0);
} 
return interleave_all__delegate.call(this,colls);};
interleave_all.cljs$lang$maxFixedArity = 0;
interleave_all.cljs$lang$applyTo = (function (arglist__22694){
var colls = cljs.core.seq(arglist__22694);
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
var G__22699__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__22700 = conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
var G__22701 = cljs.core.first(xs);
var G__22702 = cljs.core.next(xs);
coll = G__22700;
x = G__22701;
xs = G__22702;
continue;
} else {
return conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
}
break;
}
};
var G__22699 = function (coll,x,var_args){
var xs = null;
if (arguments.length > 2) {
var G__22703__i = 0, G__22703__a = new Array(arguments.length -  2);
while (G__22703__i < G__22703__a.length) {G__22703__a[G__22703__i] = arguments[G__22703__i + 2]; ++G__22703__i;}
  xs = new cljs.core.IndexedSeq(G__22703__a,0);
} 
return G__22699__delegate.call(this,coll,x,xs);};
G__22699.cljs$lang$maxFixedArity = 2;
G__22699.cljs$lang$applyTo = (function (arglist__22704){
var coll = cljs.core.first(arglist__22704);
arglist__22704 = cljs.core.next(arglist__22704);
var x = cljs.core.first(arglist__22704);
var xs = cljs.core.rest(arglist__22704);
return G__22699__delegate(coll,x,xs);
});
G__22699.cljs$core$IFn$_invoke$arity$variadic = G__22699__delegate;
return G__22699;
})()
;
conj_when = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj_when__2.call(this,coll,x);
default:
var G__22705 = null;
if (arguments.length > 2) {
var G__22706__i = 0, G__22706__a = new Array(arguments.length -  2);
while (G__22706__i < G__22706__a.length) {G__22706__a[G__22706__i] = arguments[G__22706__i + 2]; ++G__22706__i;}
G__22705 = new cljs.core.IndexedSeq(G__22706__a,0);
}
return conj_when__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, G__22705);
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
var old_val = (function (){var G__22712 = a;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22712) : cljs.core.deref.call(null,G__22712));
})();
var new_val = (function (){var G__22713 = old_val;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22713) : f.call(null,G__22713));
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
var G__22714__delegate = function (a,f,args){
return swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2(a,(function (p1__22707_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__22707_SHARP_,args);
}));
};
var G__22714 = function (a,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__22715__i = 0, G__22715__a = new Array(arguments.length -  2);
while (G__22715__i < G__22715__a.length) {G__22715__a[G__22715__i] = arguments[G__22715__i + 2]; ++G__22715__i;}
  args = new cljs.core.IndexedSeq(G__22715__a,0);
} 
return G__22714__delegate.call(this,a,f,args);};
G__22714.cljs$lang$maxFixedArity = 2;
G__22714.cljs$lang$applyTo = (function (arglist__22716){
var a = cljs.core.first(arglist__22716);
arglist__22716 = cljs.core.next(arglist__22716);
var f = cljs.core.first(arglist__22716);
var args = cljs.core.rest(arglist__22716);
return G__22714__delegate(a,f,args);
});
G__22714.cljs$core$IFn$_invoke$arity$variadic = G__22714__delegate;
return G__22714;
})()
;
swap_pair_BANG_ = function(a,f,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return swap_pair_BANG___2.call(this,a,f);
default:
var G__22717 = null;
if (arguments.length > 2) {
var G__22718__i = 0, G__22718__a = new Array(arguments.length -  2);
while (G__22718__i < G__22718__a.length) {G__22718__a[G__22718__i] = arguments[G__22718__i + 2]; ++G__22718__i;}
G__22717 = new cljs.core.IndexedSeq(G__22718__a,0);
}
return swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic(a,f, G__22717);
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
var G__22719__delegate = function (f,arg,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,arg,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(args),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.last(args))));
};
var G__22719 = function (f,arg,var_args){
var args = null;
if (arguments.length > 2) {
var G__22720__i = 0, G__22720__a = new Array(arguments.length -  2);
while (G__22720__i < G__22720__a.length) {G__22720__a[G__22720__i] = arguments[G__22720__i + 2]; ++G__22720__i;}
  args = new cljs.core.IndexedSeq(G__22720__a,0);
} 
return G__22719__delegate.call(this,f,arg,args);};
G__22719.cljs$lang$maxFixedArity = 2;
G__22719.cljs$lang$applyTo = (function (arglist__22721){
var f = cljs.core.first(arglist__22721);
arglist__22721 = cljs.core.next(arglist__22721);
var arg = cljs.core.first(arglist__22721);
var args = cljs.core.rest(arglist__22721);
return G__22719__delegate(f,arg,args);
});
G__22719.cljs$core$IFn$_invoke$arity$variadic = G__22719__delegate;
return G__22719;
})()
;
mapply = function(f,arg,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return mapply__2.call(this,f,arg);
default:
var G__22722 = null;
if (arguments.length > 2) {
var G__22723__i = 0, G__22723__a = new Array(arguments.length -  2);
while (G__22723__i < G__22723__a.length) {G__22723__a[G__22723__i] = arguments[G__22723__i + 2]; ++G__22723__i;}
G__22722 = new cljs.core.IndexedSeq(G__22723__a,0);
}
return mapply__3.cljs$core$IFn$_invoke$arity$variadic(f,arg, G__22722);
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

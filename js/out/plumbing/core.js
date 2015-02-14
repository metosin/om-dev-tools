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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__22416 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22416) : f.call(null,G__22416));
})());
});
var update__4 = (function (m,k,f,x1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__22417 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__22418 = x1;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22417,G__22418) : f.call(null,G__22417,G__22418));
})());
});
var update__5 = (function (m,k,f,x1,x2){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__22419 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__22420 = x1;
var G__22421 = x2;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__22419,G__22420,G__22421) : f.call(null,G__22419,G__22420,G__22421));
})());
});
var update__6 = (function() { 
var G__22422__delegate = function (m,k,f,x1,x2,xs){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x1,x2,xs));
};
var G__22422 = function (m,k,f,x1,x2,var_args){
var xs = null;
if (arguments.length > 5) {
var G__22423__i = 0, G__22423__a = new Array(arguments.length -  5);
while (G__22423__i < G__22423__a.length) {G__22423__a[G__22423__i] = arguments[G__22423__i + 5]; ++G__22423__i;}
  xs = new cljs.core.IndexedSeq(G__22423__a,0);
} 
return G__22422__delegate.call(this,m,k,f,x1,x2,xs);};
G__22422.cljs$lang$maxFixedArity = 5;
G__22422.cljs$lang$applyTo = (function (arglist__22424){
var m = cljs.core.first(arglist__22424);
arglist__22424 = cljs.core.next(arglist__22424);
var k = cljs.core.first(arglist__22424);
arglist__22424 = cljs.core.next(arglist__22424);
var f = cljs.core.first(arglist__22424);
arglist__22424 = cljs.core.next(arglist__22424);
var x1 = cljs.core.first(arglist__22424);
arglist__22424 = cljs.core.next(arglist__22424);
var x2 = cljs.core.first(arglist__22424);
var xs = cljs.core.rest(arglist__22424);
return G__22422__delegate(m,k,f,x1,x2,xs);
});
G__22422.cljs$core$IFn$_invoke$arity$variadic = G__22422__delegate;
return G__22422;
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
var G__22425 = null;
if (arguments.length > 5) {
var G__22426__i = 0, G__22426__a = new Array(arguments.length -  5);
while (G__22426__i < G__22426__a.length) {G__22426__a[G__22426__i] = arguments[G__22426__i + 5]; ++G__22426__i;}
G__22425 = new cljs.core.IndexedSeq(G__22426__a,0);
}
return update__6.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x1,x2, G__22425);
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out_m,k,(function (){var G__22446 = v;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22446) : f.call(null,G__22446));
})());
}),cljs.core.sorted_map(),m);
} else {
if(cljs.core.map_QMARK_(m)){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,k,(function (){var G__22447 = v;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22447) : f.call(null,G__22447));
})());
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__12913__auto__ = (function (){var G__22449 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22449) : cljs.core.atom.call(null,G__22449));
})();
var seq__22450_22465 = cljs.core.seq(m);
var chunk__22451_22466 = null;
var count__22452_22467 = (0);
var i__22453_22468 = (0);
while(true){
if((i__22453_22468 < count__22452_22467)){
var vec__22454_22469 = chunk__22451_22466.cljs$core$IIndexed$_nth$arity$2(null,i__22453_22468);
var k_22470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22454_22469,(0),null);
var v_22471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22454_22469,(1),null);
var m22448_22472 = (function (){var G__22455 = m_atom__12913__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22455) : cljs.core.deref.call(null,G__22455));
})();
var G__22456_22473 = m_atom__12913__auto__;
var G__22457_22474 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m22448_22472,k_22470,(function (){var G__22458 = v_22471;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22458) : f.call(null,G__22458));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22456_22473,G__22457_22474) : cljs.core.reset_BANG_.call(null,G__22456_22473,G__22457_22474));

var G__22475 = seq__22450_22465;
var G__22476 = chunk__22451_22466;
var G__22477 = count__22452_22467;
var G__22478 = (i__22453_22468 + (1));
seq__22450_22465 = G__22475;
chunk__22451_22466 = G__22476;
count__22452_22467 = G__22477;
i__22453_22468 = G__22478;
continue;
} else {
var temp__4126__auto___22479 = cljs.core.seq(seq__22450_22465);
if(temp__4126__auto___22479){
var seq__22450_22480__$1 = temp__4126__auto___22479;
if(cljs.core.chunked_seq_QMARK_(seq__22450_22480__$1)){
var c__4602__auto___22481 = cljs.core.chunk_first(seq__22450_22480__$1);
var G__22482 = cljs.core.chunk_rest(seq__22450_22480__$1);
var G__22483 = c__4602__auto___22481;
var G__22484 = cljs.core.count(c__4602__auto___22481);
var G__22485 = (0);
seq__22450_22465 = G__22482;
chunk__22451_22466 = G__22483;
count__22452_22467 = G__22484;
i__22453_22468 = G__22485;
continue;
} else {
var vec__22459_22486 = cljs.core.first(seq__22450_22480__$1);
var k_22487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22459_22486,(0),null);
var v_22488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22459_22486,(1),null);
var m22448_22489 = (function (){var G__22460 = m_atom__12913__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22460) : cljs.core.deref.call(null,G__22460));
})();
var G__22461_22490 = m_atom__12913__auto__;
var G__22462_22491 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m22448_22489,k_22487,(function (){var G__22463 = v_22488;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22463) : f.call(null,G__22463));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22461_22490,G__22462_22491) : cljs.core.reset_BANG_.call(null,G__22461_22490,G__22462_22491));

var G__22492 = cljs.core.next(seq__22450_22480__$1);
var G__22493 = null;
var G__22494 = (0);
var G__22495 = (0);
seq__22450_22465 = G__22492;
chunk__22451_22466 = G__22493;
count__22452_22467 = G__22494;
i__22453_22468 = G__22495;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__22464 = m_atom__12913__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22464) : cljs.core.deref.call(null,G__22464));
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
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,(function (){var G__22514 = k;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22514) : f.call(null,G__22514));
})(),v);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__12913__auto__ = (function (){var G__22516 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22516) : cljs.core.atom.call(null,G__22516));
})();
var seq__22517_22532 = cljs.core.seq(m);
var chunk__22518_22533 = null;
var count__22519_22534 = (0);
var i__22520_22535 = (0);
while(true){
if((i__22520_22535 < count__22519_22534)){
var vec__22521_22536 = chunk__22518_22533.cljs$core$IIndexed$_nth$arity$2(null,i__22520_22535);
var k_22537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22521_22536,(0),null);
var v_22538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22521_22536,(1),null);
var m22515_22539 = (function (){var G__22522 = m_atom__12913__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22522) : cljs.core.deref.call(null,G__22522));
})();
var G__22523_22540 = m_atom__12913__auto__;
var G__22524_22541 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m22515_22539,(function (){var G__22525 = k_22537;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22525) : f.call(null,G__22525));
})(),v_22538);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22523_22540,G__22524_22541) : cljs.core.reset_BANG_.call(null,G__22523_22540,G__22524_22541));

var G__22542 = seq__22517_22532;
var G__22543 = chunk__22518_22533;
var G__22544 = count__22519_22534;
var G__22545 = (i__22520_22535 + (1));
seq__22517_22532 = G__22542;
chunk__22518_22533 = G__22543;
count__22519_22534 = G__22544;
i__22520_22535 = G__22545;
continue;
} else {
var temp__4126__auto___22546 = cljs.core.seq(seq__22517_22532);
if(temp__4126__auto___22546){
var seq__22517_22547__$1 = temp__4126__auto___22546;
if(cljs.core.chunked_seq_QMARK_(seq__22517_22547__$1)){
var c__4602__auto___22548 = cljs.core.chunk_first(seq__22517_22547__$1);
var G__22549 = cljs.core.chunk_rest(seq__22517_22547__$1);
var G__22550 = c__4602__auto___22548;
var G__22551 = cljs.core.count(c__4602__auto___22548);
var G__22552 = (0);
seq__22517_22532 = G__22549;
chunk__22518_22533 = G__22550;
count__22519_22534 = G__22551;
i__22520_22535 = G__22552;
continue;
} else {
var vec__22526_22553 = cljs.core.first(seq__22517_22547__$1);
var k_22554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22526_22553,(0),null);
var v_22555 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22526_22553,(1),null);
var m22515_22556 = (function (){var G__22527 = m_atom__12913__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22527) : cljs.core.deref.call(null,G__22527));
})();
var G__22528_22557 = m_atom__12913__auto__;
var G__22529_22558 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m22515_22556,(function (){var G__22530 = k_22554;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22530) : f.call(null,G__22530));
})(),v_22555);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22528_22557,G__22529_22558) : cljs.core.reset_BANG_.call(null,G__22528_22557,G__22529_22558));

var G__22559 = cljs.core.next(seq__22517_22547__$1);
var G__22560 = null;
var G__22561 = (0);
var G__22562 = (0);
seq__22517_22532 = G__22559;
chunk__22518_22533 = G__22560;
count__22519_22534 = G__22561;
i__22520_22535 = G__22562;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__22531 = m_atom__12913__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22531) : cljs.core.deref.call(null,G__22531));
})());
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){
var m_atom__12913__auto__ = (function (){var G__22579 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22579) : cljs.core.atom.call(null,G__22579));
})();
var seq__22580_22593 = cljs.core.seq(ks);
var chunk__22581_22594 = null;
var count__22582_22595 = (0);
var i__22583_22596 = (0);
while(true){
if((i__22583_22596 < count__22582_22595)){
var k_22597 = chunk__22581_22594.cljs$core$IIndexed$_nth$arity$2(null,i__22583_22596);
var m22578_22598 = (function (){var G__22584 = m_atom__12913__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22584) : cljs.core.deref.call(null,G__22584));
})();
var G__22585_22599 = m_atom__12913__auto__;
var G__22586_22600 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m22578_22598,k_22597,(function (){var G__22587 = k_22597;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22587) : f.call(null,G__22587));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22585_22599,G__22586_22600) : cljs.core.reset_BANG_.call(null,G__22585_22599,G__22586_22600));

var G__22601 = seq__22580_22593;
var G__22602 = chunk__22581_22594;
var G__22603 = count__22582_22595;
var G__22604 = (i__22583_22596 + (1));
seq__22580_22593 = G__22601;
chunk__22581_22594 = G__22602;
count__22582_22595 = G__22603;
i__22583_22596 = G__22604;
continue;
} else {
var temp__4126__auto___22605 = cljs.core.seq(seq__22580_22593);
if(temp__4126__auto___22605){
var seq__22580_22606__$1 = temp__4126__auto___22605;
if(cljs.core.chunked_seq_QMARK_(seq__22580_22606__$1)){
var c__4602__auto___22607 = cljs.core.chunk_first(seq__22580_22606__$1);
var G__22608 = cljs.core.chunk_rest(seq__22580_22606__$1);
var G__22609 = c__4602__auto___22607;
var G__22610 = cljs.core.count(c__4602__auto___22607);
var G__22611 = (0);
seq__22580_22593 = G__22608;
chunk__22581_22594 = G__22609;
count__22582_22595 = G__22610;
i__22583_22596 = G__22611;
continue;
} else {
var k_22612 = cljs.core.first(seq__22580_22606__$1);
var m22578_22613 = (function (){var G__22588 = m_atom__12913__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22588) : cljs.core.deref.call(null,G__22588));
})();
var G__22589_22614 = m_atom__12913__auto__;
var G__22590_22615 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m22578_22613,k_22612,(function (){var G__22591 = k_22612;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22591) : f.call(null,G__22591));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22589_22614,G__22590_22615) : cljs.core.reset_BANG_.call(null,G__22589_22614,G__22590_22615));

var G__22616 = cljs.core.next(seq__22580_22606__$1);
var G__22617 = null;
var G__22618 = (0);
var G__22619 = (0);
seq__22580_22593 = G__22616;
chunk__22581_22594 = G__22617;
count__22582_22595 = G__22618;
i__22583_22596 = G__22619;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__22592 = m_atom__12913__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22592) : cljs.core.deref.call(null,G__22592));
})());
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){
var m_atom__12913__auto__ = (function (){var G__22636 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22636) : cljs.core.atom.call(null,G__22636));
})();
var seq__22637_22650 = cljs.core.seq(vs);
var chunk__22638_22651 = null;
var count__22639_22652 = (0);
var i__22640_22653 = (0);
while(true){
if((i__22640_22653 < count__22639_22652)){
var v_22654 = chunk__22638_22651.cljs$core$IIndexed$_nth$arity$2(null,i__22640_22653);
var m22635_22655 = (function (){var G__22641 = m_atom__12913__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22641) : cljs.core.deref.call(null,G__22641));
})();
var G__22642_22656 = m_atom__12913__auto__;
var G__22643_22657 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m22635_22655,(function (){var G__22644 = v_22654;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22644) : f.call(null,G__22644));
})(),v_22654);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22642_22656,G__22643_22657) : cljs.core.reset_BANG_.call(null,G__22642_22656,G__22643_22657));

var G__22658 = seq__22637_22650;
var G__22659 = chunk__22638_22651;
var G__22660 = count__22639_22652;
var G__22661 = (i__22640_22653 + (1));
seq__22637_22650 = G__22658;
chunk__22638_22651 = G__22659;
count__22639_22652 = G__22660;
i__22640_22653 = G__22661;
continue;
} else {
var temp__4126__auto___22662 = cljs.core.seq(seq__22637_22650);
if(temp__4126__auto___22662){
var seq__22637_22663__$1 = temp__4126__auto___22662;
if(cljs.core.chunked_seq_QMARK_(seq__22637_22663__$1)){
var c__4602__auto___22664 = cljs.core.chunk_first(seq__22637_22663__$1);
var G__22665 = cljs.core.chunk_rest(seq__22637_22663__$1);
var G__22666 = c__4602__auto___22664;
var G__22667 = cljs.core.count(c__4602__auto___22664);
var G__22668 = (0);
seq__22637_22650 = G__22665;
chunk__22638_22651 = G__22666;
count__22639_22652 = G__22667;
i__22640_22653 = G__22668;
continue;
} else {
var v_22669 = cljs.core.first(seq__22637_22663__$1);
var m22635_22670 = (function (){var G__22645 = m_atom__12913__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22645) : cljs.core.deref.call(null,G__22645));
})();
var G__22646_22671 = m_atom__12913__auto__;
var G__22647_22672 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m22635_22670,(function (){var G__22648 = v_22669;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22648) : f.call(null,G__22648));
})(),v_22669);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22646_22671,G__22647_22672) : cljs.core.reset_BANG_.call(null,G__22646_22671,G__22647_22672));

var G__22673 = cljs.core.next(seq__22637_22663__$1);
var G__22674 = null;
var G__22675 = (0);
var G__22676 = (0);
seq__22637_22650 = G__22673;
chunk__22638_22651 = G__22674;
count__22639_22652 = G__22675;
i__22640_22653 = G__22676;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__22649 = m_atom__12913__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22649) : cljs.core.deref.call(null,G__22649));
})());
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__22677){
var vec__22683 = p__22677;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22683,(0),null);
var ks = cljs.core.nthnext(vec__22683,(1));
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
var m_atom__12913__auto__ = (function (){var G__22702 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22702) : cljs.core.atom.call(null,G__22702));
})();
var seq__22703_22716 = cljs.core.seq(x);
var chunk__22704_22717 = null;
var count__22705_22718 = (0);
var i__22706_22719 = (0);
while(true){
if((i__22706_22719 < count__22705_22718)){
var vec__22707_22720 = chunk__22704_22717.cljs$core$IIndexed$_nth$arity$2(null,i__22706_22719);
var k_22721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22707_22720,(0),null);
var v_22722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22707_22720,(1),null);
var m22701_22723 = (function (){var G__22708 = m_atom__12913__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22708) : cljs.core.deref.call(null,G__22708));
})();
var G__22709_22724 = m_atom__12913__auto__;
var G__22710_22725 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m22701_22723,((typeof k_22721 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_22721):k_22721),keywordize_map(v_22722));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22709_22724,G__22710_22725) : cljs.core.reset_BANG_.call(null,G__22709_22724,G__22710_22725));

var G__22726 = seq__22703_22716;
var G__22727 = chunk__22704_22717;
var G__22728 = count__22705_22718;
var G__22729 = (i__22706_22719 + (1));
seq__22703_22716 = G__22726;
chunk__22704_22717 = G__22727;
count__22705_22718 = G__22728;
i__22706_22719 = G__22729;
continue;
} else {
var temp__4126__auto___22730 = cljs.core.seq(seq__22703_22716);
if(temp__4126__auto___22730){
var seq__22703_22731__$1 = temp__4126__auto___22730;
if(cljs.core.chunked_seq_QMARK_(seq__22703_22731__$1)){
var c__4602__auto___22732 = cljs.core.chunk_first(seq__22703_22731__$1);
var G__22733 = cljs.core.chunk_rest(seq__22703_22731__$1);
var G__22734 = c__4602__auto___22732;
var G__22735 = cljs.core.count(c__4602__auto___22732);
var G__22736 = (0);
seq__22703_22716 = G__22733;
chunk__22704_22717 = G__22734;
count__22705_22718 = G__22735;
i__22706_22719 = G__22736;
continue;
} else {
var vec__22711_22737 = cljs.core.first(seq__22703_22731__$1);
var k_22738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22711_22737,(0),null);
var v_22739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22711_22737,(1),null);
var m22701_22740 = (function (){var G__22712 = m_atom__12913__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22712) : cljs.core.deref.call(null,G__22712));
})();
var G__22713_22741 = m_atom__12913__auto__;
var G__22714_22742 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m22701_22740,((typeof k_22738 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_22738):k_22738),keywordize_map(v_22739));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22713_22741,G__22714_22742) : cljs.core.reset_BANG_.call(null,G__22713_22741,G__22714_22742));

var G__22743 = cljs.core.next(seq__22703_22731__$1);
var G__22744 = null;
var G__22745 = (0);
var G__22746 = (0);
seq__22703_22716 = G__22743;
chunk__22704_22717 = G__22744;
count__22705_22718 = G__22745;
i__22706_22719 = G__22746;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__22715 = m_atom__12913__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22715) : cljs.core.deref.call(null,G__22715));
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
var G__22747 = plumbing.core.safe_get(m,cljs.core.first(ks));
var G__22748 = cljs.core.next(ks);
m = G__22747;
ks = G__22748;
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
})(),(function (){var iter__4571__auto__ = (function iter__22759(s__22760){
return (new cljs.core.LazySeq(null,(function (){
var s__22760__$1 = s__22760;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__22760__$1);
if(temp__4126__auto__){
var s__22760__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22760__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__22760__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__22762 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__22761 = (0);
while(true){
if((i__22761 < size__4570__auto__)){
var vec__22767 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__22761);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22767,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22767,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append(b__22762,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__22769 = (i__22761 + (1));
i__22761 = G__22769;
continue;
} else {
var G__22770 = (i__22761 + (1));
i__22761 = G__22770;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22762),iter__22759(cljs.core.chunk_rest(s__22760__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22762),null);
}
} else {
var vec__22768 = cljs.core.first(s__22760__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22768,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22768,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__22759(cljs.core.rest(s__22760__$2)));
} else {
var G__22771 = cljs.core.rest(s__22760__$2);
s__22760__$1 = G__22771;
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
var G__22772__i = 0, G__22772__a = new Array(arguments.length -  1);
while (G__22772__i < G__22772__a.length) {G__22772__a[G__22772__i] = arguments[G__22772__i + 1]; ++G__22772__i;}
  kvs = new cljs.core.IndexedSeq(G__22772__a,0);
} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__22773){
var m = cljs.core.first(arglist__22773);
var kvs = cljs.core.rest(arglist__22773);
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
var G__22774__i = 0, G__22774__a = new Array(arguments.length -  3);
while (G__22774__i < G__22774__a.length) {G__22774__a[G__22774__i] = arguments[G__22774__i + 3]; ++G__22774__i;}
  args = new cljs.core.IndexedSeq(G__22774__a,0);
} 
return update_in_when__delegate.call(this,m,key_seq,f,args);};
update_in_when.cljs$lang$maxFixedArity = 3;
update_in_when.cljs$lang$applyTo = (function (arglist__22775){
var m = cljs.core.first(arglist__22775);
arglist__22775 = cljs.core.next(arglist__22775);
var key_seq = cljs.core.first(arglist__22775);
arglist__22775 = cljs.core.next(arglist__22775);
var f = cljs.core.first(arglist__22775);
var args = cljs.core.rest(arglist__22775);
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
var k = (function (){var G__22778 = x;
return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__22778) : key_fn.call(null,G__22778));
})();
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.PersistentVector.EMPTY),(function (){var G__22779 = x;
return (map_fn.cljs$core$IFn$_invoke$arity$1 ? map_fn.cljs$core$IFn$_invoke$arity$1(G__22779) : map_fn.call(null,G__22779));
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
if(cljs.core.truth_((function (){var G__22783 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22783) : f.call(null,G__22783));
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
var s = (function (){var G__22799 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22799) : cljs.core.atom.call(null,G__22799));
})();
var iter__4571__auto__ = ((function (s){
return (function iter__22800(s__22801){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__22801__$1 = s__22801;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__22801__$1);
if(temp__4126__auto__){
var s__22801__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22801__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__22801__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__22803 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__22802 = (0);
while(true){
if((i__22802 < size__4570__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__22802);
var id = (function (){var G__22810 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22810) : f.call(null,G__22810));
})();
if(!(cljs.core.contains_QMARK_((function (){var G__22811 = s;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22811) : cljs.core.deref.call(null,G__22811));
})(),id))){
cljs.core.chunk_append(b__22803,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);

return x;
})()
);

var G__22814 = (i__22802 + (1));
i__22802 = G__22814;
continue;
} else {
var G__22815 = (i__22802 + (1));
i__22802 = G__22815;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22803),iter__22800(cljs.core.chunk_rest(s__22801__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22803),null);
}
} else {
var x = cljs.core.first(s__22801__$2);
var id = (function (){var G__22812 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22812) : f.call(null,G__22812));
})();
if(!(cljs.core.contains_QMARK_((function (){var G__22813 = s;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22813) : cljs.core.deref.call(null,G__22813));
})(),id))){
return cljs.core.cons((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);

return x;
})()
,iter__22800(cljs.core.rest(s__22801__$2)));
} else {
var G__22816 = cljs.core.rest(s__22801__$2);
s__22801__$1 = G__22816;
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
var G__22819__i = 0, G__22819__a = new Array(arguments.length -  0);
while (G__22819__i < G__22819__a.length) {G__22819__a[G__22819__i] = arguments[G__22819__i + 0]; ++G__22819__i;}
  colls = new cljs.core.IndexedSeq(G__22819__a,0);
} 
return interleave_all__delegate.call(this,colls);};
interleave_all.cljs$lang$maxFixedArity = 0;
interleave_all.cljs$lang$applyTo = (function (arglist__22820){
var colls = cljs.core.seq(arglist__22820);
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
var G__22825__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__22826 = conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
var G__22827 = cljs.core.first(xs);
var G__22828 = cljs.core.next(xs);
coll = G__22826;
x = G__22827;
xs = G__22828;
continue;
} else {
return conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
}
break;
}
};
var G__22825 = function (coll,x,var_args){
var xs = null;
if (arguments.length > 2) {
var G__22829__i = 0, G__22829__a = new Array(arguments.length -  2);
while (G__22829__i < G__22829__a.length) {G__22829__a[G__22829__i] = arguments[G__22829__i + 2]; ++G__22829__i;}
  xs = new cljs.core.IndexedSeq(G__22829__a,0);
} 
return G__22825__delegate.call(this,coll,x,xs);};
G__22825.cljs$lang$maxFixedArity = 2;
G__22825.cljs$lang$applyTo = (function (arglist__22830){
var coll = cljs.core.first(arglist__22830);
arglist__22830 = cljs.core.next(arglist__22830);
var x = cljs.core.first(arglist__22830);
var xs = cljs.core.rest(arglist__22830);
return G__22825__delegate(coll,x,xs);
});
G__22825.cljs$core$IFn$_invoke$arity$variadic = G__22825__delegate;
return G__22825;
})()
;
conj_when = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj_when__2.call(this,coll,x);
default:
var G__22831 = null;
if (arguments.length > 2) {
var G__22832__i = 0, G__22832__a = new Array(arguments.length -  2);
while (G__22832__i < G__22832__a.length) {G__22832__a[G__22832__i] = arguments[G__22832__i + 2]; ++G__22832__i;}
G__22831 = new cljs.core.IndexedSeq(G__22832__a,0);
}
return conj_when__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, G__22831);
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
var old_val = (function (){var G__22838 = a;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22838) : cljs.core.deref.call(null,G__22838));
})();
var new_val = (function (){var G__22839 = old_val;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22839) : f.call(null,G__22839));
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
var G__22840__delegate = function (a,f,args){
return swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2(a,(function (p1__22833_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__22833_SHARP_,args);
}));
};
var G__22840 = function (a,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__22841__i = 0, G__22841__a = new Array(arguments.length -  2);
while (G__22841__i < G__22841__a.length) {G__22841__a[G__22841__i] = arguments[G__22841__i + 2]; ++G__22841__i;}
  args = new cljs.core.IndexedSeq(G__22841__a,0);
} 
return G__22840__delegate.call(this,a,f,args);};
G__22840.cljs$lang$maxFixedArity = 2;
G__22840.cljs$lang$applyTo = (function (arglist__22842){
var a = cljs.core.first(arglist__22842);
arglist__22842 = cljs.core.next(arglist__22842);
var f = cljs.core.first(arglist__22842);
var args = cljs.core.rest(arglist__22842);
return G__22840__delegate(a,f,args);
});
G__22840.cljs$core$IFn$_invoke$arity$variadic = G__22840__delegate;
return G__22840;
})()
;
swap_pair_BANG_ = function(a,f,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return swap_pair_BANG___2.call(this,a,f);
default:
var G__22843 = null;
if (arguments.length > 2) {
var G__22844__i = 0, G__22844__a = new Array(arguments.length -  2);
while (G__22844__i < G__22844__a.length) {G__22844__a[G__22844__i] = arguments[G__22844__i + 2]; ++G__22844__i;}
G__22843 = new cljs.core.IndexedSeq(G__22844__a,0);
}
return swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic(a,f, G__22843);
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
var G__22845__delegate = function (f,arg,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,arg,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(args),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.last(args))));
};
var G__22845 = function (f,arg,var_args){
var args = null;
if (arguments.length > 2) {
var G__22846__i = 0, G__22846__a = new Array(arguments.length -  2);
while (G__22846__i < G__22846__a.length) {G__22846__a[G__22846__i] = arguments[G__22846__i + 2]; ++G__22846__i;}
  args = new cljs.core.IndexedSeq(G__22846__a,0);
} 
return G__22845__delegate.call(this,f,arg,args);};
G__22845.cljs$lang$maxFixedArity = 2;
G__22845.cljs$lang$applyTo = (function (arglist__22847){
var f = cljs.core.first(arglist__22847);
arglist__22847 = cljs.core.next(arglist__22847);
var arg = cljs.core.first(arglist__22847);
var args = cljs.core.rest(arglist__22847);
return G__22845__delegate(f,arg,args);
});
G__22845.cljs$core$IFn$_invoke$arity$variadic = G__22845__delegate;
return G__22845;
})()
;
mapply = function(f,arg,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return mapply__2.call(this,f,arg);
default:
var G__22848 = null;
if (arguments.length > 2) {
var G__22849__i = 0, G__22849__a = new Array(arguments.length -  2);
while (G__22849__i < G__22849__a.length) {G__22849__a[G__22849__i] = arguments[G__22849__i + 2]; ++G__22849__i;}
G__22848 = new cljs.core.IndexedSeq(G__22849__a,0);
}
return mapply__3.cljs$core$IFn$_invoke$arity$variadic(f,arg, G__22848);
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

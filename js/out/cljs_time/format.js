// Compiled by ClojureScript 0.0-2850 {}
goog.provide('cljs_time.format');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.date');
goog.require('cljs_time.core');
goog.require('clojure.set');
goog.require('cljs_time.internal.core');
goog.require('goog.string.format');
goog.require('clojure.string');
cljs_time.format.months = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["January","February","March","April","May","June","July","August","September","October","November","December"], null);
cljs_time.format.days = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], null);
cljs_time.format.abbreviate = (function abbreviate(n,s){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),n);
});
/**
* **Note: not all formatters have been implemented yet.**
* 
* The pattern syntax is mostly compatible with java.text.SimpleDateFormat -
* time zone names cannot be parsed and a few more symbols are supported. All
* ASCII letters are reserved as pattern letters, which are defined as follows:
* 
* Symbol  Meaning                      Presentation  Examples
* ------  -------                      ------------  -------
* G       era                          text          AD
* C       century of era (>=0)         number        20
* Y       year of era (>=0)            year          1996
* 
* x       weekyear                     year          1996
* w       week of weekyear             number        27
* e       day of week                  number        2
* E       day of week                  text          Tuesday; Tue
* 
* y       year                         year          1996
* D       day of year                  number        189
* M       month of year                month         July; Jul; 07
* d       day of month                 number        10
* 
* a       halfday of day               text          PM
* K       hour of halfday (0~11)       number        0
* h       clockhour of halfday (1~12)  number        12
* 
* H       hour of day (0~23)           number        0
* k       clockhour of day (1~24)      number        24
* m       minute of hour               number        30
* s       second of minute             number        55
* S       fraction of second           number        978
* a       meridiem                     text          am; pm
* A       meridiem                     text          AM; PM
* 
* z       time zone                    text          Pacific Standard Time; PST
* Z       time zone offset/id          zone          -0800; -08:00; America/Los_Angeles
* 
* '       escape for text              delimiter
* ''      single quote                 literal       '
* 
* The count of pattern letters determine the format.
* 
* **Text:** If the number of pattern letters is 4 or more, the full form is used;
* otherwise a short or abbreviated form is used if available.
* 
* **Number:** The minimum number of digits. Shorter numbers are zero-padded to this
* amount.
* 
* **Year:** Numeric presentation for year and weekyear fields are handled
* specially. For example, if the count of 'y' is 2, the year will be displayed
* as the zero-based year of the century, which is two digits.
* 
* **Month:** 3 or over, use text, otherwise use number.
* 
* **Zone:** 'Z' outputs offset without a colon, 'ZZ' outputs the offset with a
* colon, 'ZZZ' or more outputs the zone id.
* 
* **Zone names:** Time zone names ('z') cannot be parsed.
* 
* Any characters in the pattern that are not in the ranges of ['a'..'z'] and
* ['A'..'Z'] will be treated as quoted text. For instance, characters like ':',
* '.', ' ', '#' and '?' will appear in the resulting time text even they are
* not embraced within single quotes.
*/
cljs_time.format.date_formatters = (function (){var d = (function (p1__34471_SHARP_){
return p1__34471_SHARP_.getDate();
});
var M = ((function (d){
return (function (p1__34472_SHARP_){
return (p1__34472_SHARP_.getMonth() + (1));
});})(d))
;
var y = ((function (d,M){
return (function (p1__34473_SHARP_){
return p1__34473_SHARP_.getYear();
});})(d,M))
;
var h = ((function (d,M,y){
return (function (p1__34474_SHARP_){
var hr = cljs.core.mod(p1__34474_SHARP_.getHours(),(12));
if((hr === (0))){
return (12);
} else {
return hr;
}
});})(d,M,y))
;
var a = ((function (d,M,y,h){
return (function (p1__34475_SHARP_){
if((p1__34475_SHARP_.getHours() < (12))){
return "am";
} else {
return "pm";
}
});})(d,M,y,h))
;
var A = ((function (d,M,y,h,a){
return (function (p1__34476_SHARP_){
if((p1__34476_SHARP_.getHours() < (12))){
return "AM";
} else {
return "PM";
}
});})(d,M,y,h,a))
;
var H = ((function (d,M,y,h,a,A){
return (function (p1__34477_SHARP_){
return p1__34477_SHARP_.getHours();
});})(d,M,y,h,a,A))
;
var m = ((function (d,M,y,h,a,A,H){
return (function (p1__34478_SHARP_){
return p1__34478_SHARP_.getMinutes();
});})(d,M,y,h,a,A,H))
;
var s = ((function (d,M,y,h,a,A,H,m){
return (function (p1__34479_SHARP_){
return p1__34479_SHARP_.getSeconds();
});})(d,M,y,h,a,A,H,m))
;
var S = ((function (d,M,y,h,a,A,H,m,s){
return (function (p1__34480_SHARP_){
return p1__34480_SHARP_.getMilliseconds();
});})(d,M,y,h,a,A,H,m,s))
;
var Z = ((function (d,M,y,h,a,A,H,m,s,S){
return (function (p1__34481_SHARP_){
return p1__34481_SHARP_.getTimezoneOffsetString();
});})(d,M,y,h,a,A,H,m,s,S))
;
var doy = ((function (d,M,y,h,a,A,H,m,s,S,Z){
return (function (p1__34482_SHARP_){
return p1__34482_SHARP_.getDayOfYear();
});})(d,M,y,h,a,A,H,m,s,S,Z))
;
var dow = ((function (d,M,y,h,a,A,H,m,s,S,Z,doy){
return (function (p1__34483_SHARP_){
return p1__34483_SHARP_.getDay();
});})(d,M,y,h,a,A,H,m,s,S,Z,doy))
;
return cljs.core.PersistentHashMap.fromArrays(["d","HH","ZZ","s","ww","MMM","YYYY","e","ss","DDD","SSS","dow","YY","M","mm","S","MM","EEE","Z","H","DD","dd","a","hh","dth","yyyy","A","EEEE","h","xxxx","m","yy","D","MMMM"],[d,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__34495_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(H(p1__34495_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,Z,s,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__34499_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1((function (){var G__34500 = (doy(p1__34499_SHARP_) / (7));
return (Math.ceil.cljs$core$IFn$_invoke$arity$1 ? Math.ceil.cljs$core$IFn$_invoke$arity$1(G__34500) : Math.ceil.call(null,G__34500));
})());
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__34490_SHARP_){
return cljs_time.format.abbreviate((3),(function (){var G__34501 = (M(p1__34490_SHARP_) - (1));
return (cljs_time.format.months.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.months.cljs$core$IFn$_invoke$arity$1(G__34501) : cljs_time.format.months.call(null,G__34501));
})());
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,y,dow,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__34497_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(s(p1__34497_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,doy,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__34498_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$2(S(p1__34498_SHARP_),(3));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__34486_SHARP_){
var G__34502 = dow(p1__34486_SHARP_);
return (cljs_time.format.days.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.days.cljs$core$IFn$_invoke$arity$1(G__34502) : cljs_time.format.days.call(null,G__34502));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__34493_SHARP_){
return cljs.core.mod(y(p1__34493_SHARP_),(100));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,M,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__34496_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(m(p1__34496_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,S,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__34489_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(M(p1__34489_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__34487_SHARP_){
return cljs_time.format.abbreviate((3),(function (){var G__34503 = dow(p1__34487_SHARP_);
return (cljs_time.format.days.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.days.cljs$core$IFn$_invoke$arity$1(G__34503) : cljs_time.format.days.call(null,G__34503));
})());
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,Z,H,doy,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__34484_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(d(p1__34484_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,a,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__34494_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(h(p1__34494_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__34485_SHARP_){
var d__$1 = d(p1__34485_SHARP_);
return [cljs.core.str(d__$1),cljs.core.str((function (){var G__34504 = d__$1;
switch (G__34504) {
case (1):
return "st";

break;
case (2):
return "nd";

break;
case (3):
return "rd";

break;
case (21):
return "st";

break;
case (22):
return "nd";

break;
case (23):
return "rd";

break;
case (31):
return "st";

break;
default:
return "th";

}
})())].join('');
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,y,A,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__34488_SHARP_){
var G__34505 = dow(p1__34488_SHARP_);
return (cljs_time.format.days.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.days.cljs$core$IFn$_invoke$arity$1(G__34505) : cljs_time.format.days.call(null,G__34505));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,h,y,m,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__34492_SHARP_){
return cljs.core.mod(y(p1__34492_SHARP_),(100));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,doy,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__34491_SHARP_){
var G__34506 = (M(p1__34491_SHARP_) - (1));
return (cljs_time.format.months.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.months.cljs$core$IFn$_invoke$arity$1(G__34506) : cljs_time.format.months.call(null,G__34506));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
]);
})();
cljs_time.format.timezone_adjustment = (function timezone_adjustment(d,timezone_string){
var vec__34517 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(timezone_string,/Z|(?:([-+])(\d{2})(?::?(\d{2}))?)$/);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34517,(0),null);
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34517,(1),null);
var hh = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34517,(2),null);
var mm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34517,(3),null);
if(cljs.core.truth_((function (){var and__3803__auto__ = sign;
if(cljs.core.truth_(and__3803__auto__)){
var and__3803__auto____$1 = hh;
if(cljs.core.truth_(and__3803__auto____$1)){
return mm;
} else {
return and__3803__auto____$1;
}
} else {
return and__3803__auto__;
}
})())){
var sign_34525__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sign,"-"))?cljs_time.core.plus:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sign,"+"))?cljs_time.core.minus:null));
var vec__34518_34526 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (sign_34525__$1,vec__34517,_,sign,hh,mm){
return (function (p1__34508_SHARP_){
var G__34519 = p1__34508_SHARP_;
var G__34520 = (10);
return parseInt(G__34519,G__34520);
});})(sign_34525__$1,vec__34517,_,sign,hh,mm))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hh,mm], null));
var hh_34527__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34518_34526,(0),null);
var mm_34528__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34518_34526,(1),null);
var adjusted_34529 = (function (){var G__34521 = (function (){var G__34523 = d;
var G__34524 = cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1(hh_34527__$1);
return (sign_34525__$1.cljs$core$IFn$_invoke$arity$2 ? sign_34525__$1.cljs$core$IFn$_invoke$arity$2(G__34523,G__34524) : sign_34525__$1.call(null,G__34523,G__34524));
})();
var G__34522 = cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1(mm_34528__$1);
return (sign_34525__$1.cljs$core$IFn$_invoke$arity$2 ? sign_34525__$1.cljs$core$IFn$_invoke$arity$2(G__34521,G__34522) : sign_34525__$1.call(null,G__34521,G__34522));
})();
d.setTime(adjusted_34529.getTime());
} else {
}

return d;
});
cljs_time.format.date_parsers = (function (){var parse_int = (function (p1__34530_SHARP_){
var G__34543 = p1__34530_SHARP_;
var G__34544 = (10);
return parseInt(G__34543,G__34544);
});
var assoc_fn = ((function (parse_int){
return (function (kw){
return ((function (parse_int){
return (function (p1__34531_SHARP_,p2__34532_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34531_SHARP_,kw,parse_int(p2__34532_SHARP_));
});
;})(parse_int))
});})(parse_int))
;
var y = assoc_fn(cljs.core.constant$keyword$150);
var d = assoc_fn(cljs.core.constant$keyword$148);
var M = ((function (parse_int,assoc_fn,y,d){
return (function (p1__34533_SHARP_,p2__34534_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34533_SHARP_,cljs.core.constant$keyword$149,(parse_int(p2__34534_SHARP_) - (1)));
});})(parse_int,assoc_fn,y,d))
;
var h = ((function (parse_int,assoc_fn,y,d,M){
return (function (p1__34535_SHARP_,p2__34536_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34535_SHARP_,cljs.core.constant$keyword$147,cljs.core.mod(parse_int(p2__34536_SHARP_),(12)));
});})(parse_int,assoc_fn,y,d,M))
;
var a = ((function (parse_int,assoc_fn,y,d,M,h){
return (function (p__34545,x){
var map__34546 = p__34545;
var map__34546__$1 = ((cljs.core.seq_QMARK_(map__34546))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34546):map__34546);
var date = map__34546__$1;
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34546__$1,cljs.core.constant$keyword$147);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["p",null,"pm",null], null), null).call(null,clojure.string.lower_case(x)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(date,cljs.core.constant$keyword$147,(function (){var hours__$1 = ((12) + hours);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hours__$1,(24))){
return (0);
} else {
return hours__$1;
}
})());
} else {
return date;
}
});})(parse_int,assoc_fn,y,d,M,h))
;
var H = assoc_fn(cljs.core.constant$keyword$147);
var m = assoc_fn(cljs.core.constant$keyword$146);
var s = assoc_fn(cljs.core.constant$keyword$145);
var S = assoc_fn(cljs.core.constant$keyword$144);
var MMM = ((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S){
return (function (p1__34538_SHARP_,p2__34537_SHARP_){
var full = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S){
return (function (m__$1){
return cljs.core.re_seq(cljs.core.re_pattern([cljs.core.str("^"),cljs.core.str(p2__34537_SHARP_)].join('')),m__$1);
});})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S))
,cljs_time.format.months));
return M(p1__34538_SHARP_,[cljs.core.str((cljs_time.internal.core.index_of(cljs_time.format.months,full) + (1)))].join(''));
});})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S))
;
var MMMM = ((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM){
return (function (p1__34539_SHARP_,p2__34540_SHARP_){
return M(p1__34539_SHARP_,[cljs.core.str((cljs_time.internal.core.index_of(cljs_time.format.months,p2__34540_SHARP_) + (1)))].join(''));
});})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM))
;
var skip = ((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM,MMMM){
return (function() { 
var G__34547__delegate = function (x,args){
return x;
};
var G__34547 = function (x,var_args){
var args = null;
if (arguments.length > 1) {
var G__34548__i = 0, G__34548__a = new Array(arguments.length -  1);
while (G__34548__i < G__34548__a.length) {G__34548__a[G__34548__i] = arguments[G__34548__i + 1]; ++G__34548__i;}
  args = new cljs.core.IndexedSeq(G__34548__a,0);
} 
return G__34547__delegate.call(this,x,args);};
G__34547.cljs$lang$maxFixedArity = 1;
G__34547.cljs$lang$applyTo = (function (arglist__34549){
var x = cljs.core.first(arglist__34549);
var args = cljs.core.rest(arglist__34549);
return G__34547__delegate(x,args);
});
G__34547.cljs$core$IFn$_invoke$arity$variadic = G__34547__delegate;
return G__34547;
})()
;})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM,MMMM))
;
var tz = ((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM,MMMM,skip){
return (function (p1__34541_SHARP_,p2__34542_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34541_SHARP_,cljs.core.constant$keyword$167,p2__34542_SHARP_);
});})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM,MMMM,skip))
;
return cljs.core.PersistentHashMap.fromArrays(["d","HH","ZZ","s","MMM","YYYY","ss","DDD","SSS","dow","YY","M","mm","S","MM","Y","EEE","Z","H","E","DD","dd","a","hh","dth","y","yyyy","A","EEEE","h","m","yy","D","MMMM"],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",H], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["((?:(?:\\+|-)\\d{2}:\\d{2})|Z+)",tz], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",s], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("("),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_time.format.abbreviate,(3)),cljs_time.format.months))),cljs.core.str(")")].join(''),MMM], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",s], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{3})",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{3})",S], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("("),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs_time.format.days)),cljs.core.str(")")].join(''),skip], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2,4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",M], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",m], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",S], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["((?:\\d{2})|(?:\\b\\d{1,2}\\b))",M], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("("),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_time.format.abbreviate,(3)),cljs_time.format.days))),cljs.core.str(")")].join(''),skip], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["((?:(?:\\+|-)\\d{2}:?\\d{2})|Z+)",tz], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",H], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("("),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_time.format.abbreviate,(3)),cljs_time.format.days))),cljs.core.str(")")].join(''),skip], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2,3})",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(am|pm|a|p|AM|PM|A|P)",a], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})(?:st|nd|rd|th)",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(am|pm|a|p|AM|PM|A|P)",a], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("("),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs_time.format.days)),cljs.core.str(")")].join(''),skip], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",m], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2,4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,3})",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("("),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs_time.format.months)),cljs.core.str(")")].join(''),MMMM], null)]);
})();
cljs_time.format.date_setters = new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$150,(function (p1__34550_SHARP_,p2__34551_SHARP_){
return p1__34550_SHARP_.setYear(p2__34551_SHARP_);
}),cljs.core.constant$keyword$149,(function (p1__34552_SHARP_,p2__34553_SHARP_){
return p1__34552_SHARP_.setMonth(p2__34553_SHARP_);
}),cljs.core.constant$keyword$148,(function (p1__34554_SHARP_,p2__34555_SHARP_){
return p1__34554_SHARP_.setDate(p2__34555_SHARP_);
}),cljs.core.constant$keyword$147,(function (p1__34556_SHARP_,p2__34557_SHARP_){
return p1__34556_SHARP_.setHours(p2__34557_SHARP_);
}),cljs.core.constant$keyword$146,(function (p1__34558_SHARP_,p2__34559_SHARP_){
return p1__34558_SHARP_.setMinutes(p2__34559_SHARP_);
}),cljs.core.constant$keyword$145,(function (p1__34560_SHARP_,p2__34561_SHARP_){
return p1__34560_SHARP_.setSeconds(p2__34561_SHARP_);
}),cljs.core.constant$keyword$144,(function (p1__34562_SHARP_,p2__34563_SHARP_){
return p1__34562_SHARP_.setMilliseconds(p2__34563_SHARP_);
}),cljs.core.constant$keyword$167,cljs_time.format.timezone_adjustment], null);
cljs_time.format.parser_sort_order_pred = (function parser_sort_order_pred(parser){
return cljs_time.internal.core.index_of(new cljs.core.PersistentVector(null, 30, 5, cljs.core.PersistentVector.EMPTY_NODE, ["YYYY","YY","Y","yyyy","yy","y","d","dd","D","DD","DDD","dth","M","MM","MMM","MMMM","dow","h","H","m","s","S","hh","HH","mm","ss","a","SSS","Z","ZZ"], null),parser);
});
cljs_time.format.date_format_pattern = cljs.core.re_pattern([cljs.core.str("("),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2(")|(",cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.keys(cljs_time.format.date_formatters))))),cljs.core.str(")")].join(''));
cljs_time.format.date_parse_pattern = (function date_parse_pattern(formatter){
return cljs.core.re_pattern(clojure.string.replace(clojure.string.replace(formatter,/'([^']+)'/,"$1"),cljs_time.format.date_format_pattern,(function (p1__34564_SHARP_){
return cljs.core.first((function (){var G__34566 = p1__34564_SHARP_;
return (cljs_time.format.date_parsers.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.date_parsers.cljs$core$IFn$_invoke$arity$1(G__34566) : cljs_time.format.date_parsers.call(null,G__34566));
})());
})));
});
cljs_time.format.parser_fn = (function parser_fn(fmts){
return (function (s){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs_time.format.parser_sort_order_pred,cljs.core.second),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.nfirst(cljs.core.re_seq(cljs_time.format.date_parse_pattern(fmts),s)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.re_seq(cljs_time.format.date_format_pattern,fmts)))));
});
});
cljs_time.format.formatter_fn = (function formatter_fn(fmts,formatters){
return (function() { 
var G__34572__delegate = function (date,p__34570){
var vec__34571 = p__34570;
var formatter_overrides = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34571,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.replace(fmts,/'([^']+)'/,"$1"),cljs_time.format.date_format_pattern,((function (vec__34571,formatter_overrides){
return (function (p1__34567_SHARP_){
return (function (){var or__3815__auto__ = formatter_overrides;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return formatters;
}
})().call(null,p1__34567_SHARP_).call(null,date);
});})(vec__34571,formatter_overrides))
], null);
};
var G__34572 = function (date,var_args){
var p__34570 = null;
if (arguments.length > 1) {
var G__34573__i = 0, G__34573__a = new Array(arguments.length -  1);
while (G__34573__i < G__34573__a.length) {G__34573__a[G__34573__i] = arguments[G__34573__i + 1]; ++G__34573__i;}
  p__34570 = new cljs.core.IndexedSeq(G__34573__a,0);
} 
return G__34572__delegate.call(this,date,p__34570);};
G__34572.cljs$lang$maxFixedArity = 1;
G__34572.cljs$lang$applyTo = (function (arglist__34574){
var date = cljs.core.first(arglist__34574);
var p__34570 = cljs.core.rest(arglist__34574);
return G__34572__delegate(date,p__34570);
});
G__34572.cljs$core$IFn$_invoke$arity$variadic = G__34572__delegate;
return G__34572;
})()
;
});
cljs_time.format.formatter = (function() {
var formatter = null;
var formatter__1 = (function (fmts){
return formatter.cljs$core$IFn$_invoke$arity$2(fmts,cljs_time.core.utc);
});
var formatter__2 = (function (fmts,dtz){
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$168,fmts,cljs.core.constant$keyword$169,cljs_time.format.date_formatters], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$23,cljs.core.constant$keyword$170], null));
});
formatter = function(fmts,dtz){
switch(arguments.length){
case 1:
return formatter__1.call(this,fmts);
case 2:
return formatter__2.call(this,fmts,dtz);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
formatter.cljs$core$IFn$_invoke$arity$1 = formatter__1;
formatter.cljs$core$IFn$_invoke$arity$2 = formatter__2;
return formatter;
})()
;
cljs_time.format.formatter_local = (function formatter_local(fmts){
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$168,fmts,cljs.core.constant$keyword$169,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs_time.format.date_formatters,"Z",cljs.core.constantly(""),cljs.core.array_seq(["ZZ",cljs.core.constantly("")], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$23,cljs.core.constant$keyword$170], null));
});
cljs_time.format.not_implemented = (function not_implemented(sym){
return (function (){
throw cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$35,cljs.core.constant$keyword$172,cljs.core.constant$keyword$171,cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic("%s not implemented yet",cljs.core.array_seq([cljs.core.name(sym)], 0))], null));
});
});
/**
* Return a copy of a formatter that uses the given default year.
*/
cljs_time.format.with_default_year = (function with_default_year(f,default_year){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,cljs.core.constant$keyword$173,default_year);
});
/**
* Map of ISO 8601 and a single RFC 822 formatters that can be used
* for parsing and, in most cases, printing.
* 
* Note: due to current implementation limitations, timezone information
* cannot be kept. Although the correct offset will be applied to UTC
* time if supplied.
*/
cljs_time.format.formatters = cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$174,cljs.core.constant$keyword$175,cljs.core.constant$keyword$176,cljs.core.constant$keyword$177,cljs.core.constant$keyword$151,cljs.core.constant$keyword$178,cljs.core.constant$keyword$179,cljs.core.constant$keyword$180,cljs.core.constant$keyword$181,cljs.core.constant$keyword$182,cljs.core.constant$keyword$183,cljs.core.constant$keyword$184,cljs.core.constant$keyword$185,cljs.core.constant$keyword$186,cljs.core.constant$keyword$187,cljs.core.constant$keyword$188,cljs.core.constant$keyword$189,cljs.core.constant$keyword$190,cljs.core.constant$keyword$191,cljs.core.constant$keyword$192,cljs.core.constant$keyword$193,cljs.core.constant$keyword$194,cljs.core.constant$keyword$195,cljs.core.constant$keyword$196,cljs.core.constant$keyword$197,cljs.core.constant$keyword$198,cljs.core.constant$keyword$199,cljs.core.constant$keyword$200,cljs.core.constant$keyword$201,cljs.core.constant$keyword$202,cljs.core.constant$keyword$203,cljs.core.constant$keyword$204,cljs.core.constant$keyword$205,cljs.core.constant$keyword$206,cljs.core.constant$keyword$207,cljs.core.constant$keyword$208,cljs.core.constant$keyword$209,cljs.core.constant$keyword$210,cljs.core.constant$keyword$211,cljs.core.constant$keyword$212,cljs.core.constant$keyword$213,cljs.core.constant$keyword$214,cljs.core.constant$keyword$215,cljs.core.constant$keyword$216,cljs.core.constant$keyword$217,cljs.core.constant$keyword$218,cljs.core.constant$keyword$219,cljs.core.constant$keyword$220,cljs.core.constant$keyword$221,cljs.core.constant$keyword$222,cljs.core.constant$keyword$223,cljs.core.constant$keyword$224,cljs.core.constant$keyword$225],[cljs_time.format.not_implemented(new cljs.core.Symbol(null,"dateElementParser","dateElementParser",984800945,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyDDD"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd'T'HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HHmmssZ"),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"dateParser","dateParser",-1248418930,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx'W'wwe"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HHmmssZ"),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"localTimeParser","localTimeParser",-1738135328,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd"),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"dateOptionalTimeParser","dateOptionalTimeParser",1783230854,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("EEE, dd MMM yyyy HH:mm:ss Z"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyDDD'T'HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-DDD"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx'W'wwe'T'HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-DDD'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-DDD'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"timeParser","timeParser",1585048034,null)),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"dateTimeParser","dateTimeParser",-1493718282,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx'W'wwe'T'HHmmssZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww"),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"localDateParser","localDateParser",477820077,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyDDD'T'HHmmssZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM"),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"localDateOptionalTimeParser","localDateOptionalTimeParser",435955537,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH"),cljs_time.format.not_implemented(new cljs.core.Symbol(null,"timeElementParser","timeElementParser",302132553,null)),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd'T'HHmmssZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd HH:mm:ss"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HHmmss.SSSZ")]);
cljs_time.format.parsers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [cljs.core.constant$keyword$174,null,cljs.core.constant$keyword$186,null,cljs.core.constant$keyword$189,null,cljs.core.constant$keyword$192,null,cljs.core.constant$keyword$207,null,cljs.core.constant$keyword$208,null,cljs.core.constant$keyword$214,null,cljs.core.constant$keyword$217,null,cljs.core.constant$keyword$220,null], null), null);
cljs_time.format.printers = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(cljs_time.format.formatters)),cljs_time.format.parsers);
cljs_time.format.part_splitter_regex = /(?:(?!(?:\+|-)\d{2}):(?!\d{2}$))|[^\w:]+|.[TW]|'[^']+'/;
cljs_time.format.date_map = (function (){var method_table__4712__auto__ = (function (){var G__34577 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34577) : cljs.core.atom.call(null,G__34577));
})();
var prefer_table__4713__auto__ = (function (){var G__34578 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34578) : cljs.core.atom.call(null,G__34578));
})();
var method_cache__4714__auto__ = (function (){var G__34579 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34579) : cljs.core.atom.call(null,G__34579));
})();
var cached_hierarchy__4715__auto__ = (function (){var G__34580 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34580) : cljs.core.atom.call(null,G__34580));
})();
var hierarchy__4716__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$166,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs-time.format","date-map"),cljs.core.type,cljs.core.constant$keyword$7,hierarchy__4716__auto__,method_table__4712__auto__,prefer_table__4713__auto__,method_cache__4714__auto__,cached_hierarchy__4715__auto__));
})();
cljs_time.format.date_map.cljs$core$IMultiFn$_add_method$arity$3(null,goog.date.Date,(function (d){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$150,(0),cljs.core.constant$keyword$149,(0),cljs.core.constant$keyword$148,(1)], null);
}));
cljs_time.format.date_map.cljs$core$IMultiFn$_add_method$arity$3(null,goog.date.DateTime,(function (d){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$150,(0),cljs.core.constant$keyword$149,(0),cljs.core.constant$keyword$148,(1),cljs.core.constant$keyword$147,(0),cljs.core.constant$keyword$146,(0),cljs.core.constant$keyword$145,(0),cljs.core.constant$keyword$144,(0)], null);
}));
cljs_time.format.date_map.cljs$core$IMultiFn$_add_method$arity$3(null,goog.date.UtcDateTime,(function (d){
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$150,(0),cljs.core.constant$keyword$149,(0),cljs.core.constant$keyword$148,(1),cljs.core.constant$keyword$147,(0),cljs.core.constant$keyword$146,(0),cljs.core.constant$keyword$145,(0),cljs.core.constant$keyword$144,(0),cljs.core.constant$keyword$167,null], null);
}));
cljs_time.format.parse_STAR_ = (function parse_STAR_(constructor,p__34583,s){
var map__34596 = p__34583;
var map__34596__$1 = ((cljs.core.seq_QMARK_(map__34596))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34596):map__34596);
var fmt = map__34596__$1;
var default_year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34596__$1,cljs.core.constant$keyword$173);
var format_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34596__$1,cljs.core.constant$keyword$168);
if(cljs.core.seq(s)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"s","s",-948495851,null))], 0)))].join('')));
}

var min_parts = cljs.core.count(clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,cljs_time.format.part_splitter_regex));
var parse_fn = cljs_time.format.parser_fn(format_str);
var parse_seq = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (parse_fn,min_parts,map__34596,map__34596__$1,fmt,default_year,format_str){
return (function (p__34597){
var vec__34598 = p__34597;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34598,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34598,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,cljs.core.second((function (){var G__34599 = b;
return (cljs_time.format.date_parsers.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.date_parsers.cljs$core$IFn$_invoke$arity$1(G__34599) : cljs_time.format.date_parsers.call(null,G__34599));
})())], null);
});})(parse_fn,min_parts,map__34596,map__34596__$1,fmt,default_year,format_str))
,(function (){var G__34600 = s;
return (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(G__34600) : parse_fn.call(null,G__34600));
})()));
if((cljs.core.count(parse_seq) >= min_parts)){
var d = (new constructor((0),(0),(0),(0),(0),(0),(0)));
var empty = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__34601 = d;
return (cljs_time.format.date_map.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.date_map.cljs$core$IFn$_invoke$arity$1(G__34601) : cljs_time.format.date_map.call(null,G__34601));
})(),cljs.core.constant$keyword$150,(function (){var or__3815__auto__ = default_year;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return (0);
}
})());
var setters = cljs.core.select_keys(cljs_time.format.date_setters,cljs.core.keys(empty));
cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(((function (d,empty,setters,parse_fn,parse_seq,min_parts,map__34596,map__34596__$1,fmt,default_year,format_str){
return (function (p1__34581_SHARP_,p2__34582_SHARP_){
var G__34602 = d;
var G__34603 = p2__34582_SHARP_;
return (p1__34581_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__34581_SHARP_.cljs$core$IFn$_invoke$arity$2(G__34602,G__34603) : p1__34581_SHARP_.call(null,G__34602,G__34603));
});})(d,empty,setters,parse_fn,parse_seq,min_parts,map__34596,map__34596__$1,fmt,default_year,format_str))
,cljs.core.array_seq([setters,cljs_time.internal.core.valid_date_QMARK_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (d,empty,setters,parse_fn,parse_seq,min_parts,map__34596,map__34596__$1,fmt,default_year,format_str){
return (function (date,p__34604){
var vec__34605 = p__34604;
var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34605,(0),null);
var do_parse = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34605,(1),null);
var G__34606 = date;
var G__34607 = part;
return (do_parse.cljs$core$IFn$_invoke$arity$2 ? do_parse.cljs$core$IFn$_invoke$arity$2(G__34606,G__34607) : do_parse.call(null,G__34606,G__34607));
});})(d,empty,setters,parse_fn,parse_seq,min_parts,map__34596,map__34596__$1,fmt,default_year,format_str))
,empty,parse_seq))], 0));

return d;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("The parser could not match the input string.",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$23,cljs.core.constant$keyword$226], null));
}
});
/**
* Returns a DateTime instance in the UTC time zone obtained by parsing the
* given string according to the given formatter.
*/
cljs_time.format.parse = (function() {
var parse = null;
var parse__1 = (function (s){
return cljs.core.first((function (){var iter__4571__auto__ = (function iter__34626(s__34627){
return (new cljs.core.LazySeq(null,(function (){
var s__34627__$1 = s__34627;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__34627__$1);
if(temp__4126__auto__){
var s__34627__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34627__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__34627__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__34629 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__34628 = (0);
while(true){
if((i__34628 < size__4570__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__34628);
var d = (function (){try{return parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e34634){if((e34634 instanceof Error)){
var _ = e34634;
return null;
} else {
throw e34634;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__34629,d);

var G__34636 = (i__34628 + (1));
i__34628 = G__34636;
continue;
} else {
var G__34637 = (i__34628 + (1));
i__34628 = G__34637;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34629),iter__34626(cljs.core.chunk_rest(s__34627__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34629),null);
}
} else {
var f = cljs.core.first(s__34627__$2);
var d = (function (){try{return parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e34635){if((e34635 instanceof Error)){
var _ = e34635;
return null;
} else {
throw e34635;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,iter__34626(cljs.core.rest(s__34627__$2)));
} else {
var G__34638 = cljs.core.rest(s__34627__$2);
s__34627__$1 = G__34638;
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
return iter__4571__auto__(cljs.core.vals(cljs_time.format.formatters));
})());
});
var parse__2 = (function (fmt,s){
return cljs_time.format.parse_STAR_(goog.date.UtcDateTime,fmt,s);
});
parse = function(fmt,s){
switch(arguments.length){
case 1:
return parse__1.call(this,fmt);
case 2:
return parse__2.call(this,fmt,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
parse.cljs$core$IFn$_invoke$arity$1 = parse__1;
parse.cljs$core$IFn$_invoke$arity$2 = parse__2;
return parse;
})()
;
/**
* Returns a local DateTime instance obtained by parsing the
* given string according to the given formatter.
*/
cljs_time.format.parse_local = (function() {
var parse_local = null;
var parse_local__1 = (function (s){
return cljs.core.first((function (){var iter__4571__auto__ = (function iter__34657(s__34658){
return (new cljs.core.LazySeq(null,(function (){
var s__34658__$1 = s__34658;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__34658__$1);
if(temp__4126__auto__){
var s__34658__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34658__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__34658__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__34660 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__34659 = (0);
while(true){
if((i__34659 < size__4570__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__34659);
var d = (function (){try{return parse_local.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e34665){if((e34665 instanceof Error)){
var _ = e34665;
return null;
} else {
throw e34665;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__34660,d);

var G__34667 = (i__34659 + (1));
i__34659 = G__34667;
continue;
} else {
var G__34668 = (i__34659 + (1));
i__34659 = G__34668;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34660),iter__34657(cljs.core.chunk_rest(s__34658__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34660),null);
}
} else {
var f = cljs.core.first(s__34658__$2);
var d = (function (){try{return parse_local.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e34666){if((e34666 instanceof Error)){
var _ = e34666;
return null;
} else {
throw e34666;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,iter__34657(cljs.core.rest(s__34658__$2)));
} else {
var G__34669 = cljs.core.rest(s__34658__$2);
s__34658__$1 = G__34669;
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
return iter__4571__auto__(cljs.core.vals(cljs_time.format.formatters));
})());
});
var parse_local__2 = (function (fmt,s){
return cljs_time.format.parse_STAR_(goog.date.DateTime,fmt,s);
});
parse_local = function(fmt,s){
switch(arguments.length){
case 1:
return parse_local__1.call(this,fmt);
case 2:
return parse_local__2.call(this,fmt,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
parse_local.cljs$core$IFn$_invoke$arity$1 = parse_local__1;
parse_local.cljs$core$IFn$_invoke$arity$2 = parse_local__2;
return parse_local;
})()
;
/**
* Returns a local Date instance obtained by parsing the
* given string according to the given formatter.
*/
cljs_time.format.parse_local_date = (function() {
var parse_local_date = null;
var parse_local_date__1 = (function (s){
return cljs.core.first((function (){var iter__4571__auto__ = (function iter__34688(s__34689){
return (new cljs.core.LazySeq(null,(function (){
var s__34689__$1 = s__34689;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__34689__$1);
if(temp__4126__auto__){
var s__34689__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34689__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__34689__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__34691 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__34690 = (0);
while(true){
if((i__34690 < size__4570__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__34690);
var d = (function (){try{return parse_local_date.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e34696){if((e34696 instanceof Error)){
var _ = e34696;
return null;
} else {
throw e34696;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__34691,d);

var G__34698 = (i__34690 + (1));
i__34690 = G__34698;
continue;
} else {
var G__34699 = (i__34690 + (1));
i__34690 = G__34699;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34691),iter__34688(cljs.core.chunk_rest(s__34689__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34691),null);
}
} else {
var f = cljs.core.first(s__34689__$2);
var d = (function (){try{return parse_local_date.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e34697){if((e34697 instanceof Error)){
var _ = e34697;
return null;
} else {
throw e34697;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,iter__34688(cljs.core.rest(s__34689__$2)));
} else {
var G__34700 = cljs.core.rest(s__34689__$2);
s__34689__$1 = G__34700;
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
return iter__4571__auto__(cljs.core.vals(cljs_time.format.formatters));
})());
});
var parse_local_date__2 = (function (fmt,s){
return cljs_time.format.parse_STAR_(goog.date.Date,fmt,s);
});
parse_local_date = function(fmt,s){
switch(arguments.length){
case 1:
return parse_local_date__1.call(this,fmt);
case 2:
return parse_local_date__2.call(this,fmt,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
parse_local_date.cljs$core$IFn$_invoke$arity$1 = parse_local_date__1;
parse_local_date.cljs$core$IFn$_invoke$arity$2 = parse_local_date__2;
return parse_local_date;
})()
;
/**
* Returns a string representing the given DateTime instance in UTC and in the
* form determined by the given formatter.
*/
cljs_time.format.unparse = (function unparse(p__34701,dt){
var map__34703 = p__34701;
var map__34703__$1 = ((cljs.core.seq_QMARK_(map__34703))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34703):map__34703);
var formatters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34703__$1,cljs.core.constant$keyword$169);
var format_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34703__$1,cljs.core.constant$keyword$168);
if(!((dt == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"dt","dt",1272086768,null)))], 0)))].join('')));
}

if((dt instanceof goog.date.DateTime)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol(null,"goog.date.DateTime","goog.date.DateTime",-2139257094,null),new cljs.core.Symbol(null,"dt","dt",1272086768,null))], 0)))].join('')));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.string.replace,cljs_time.format.formatter_fn(format_str,formatters).call(null,dt));
});
/**
* Returns a string representing the given local DateTime instance in the
* form determined by the given formatter.
*/
cljs_time.format.unparse_local = (function unparse_local(p__34704,dt){
var map__34706 = p__34704;
var map__34706__$1 = ((cljs.core.seq_QMARK_(map__34706))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34706):map__34706);
var fmt = map__34706__$1;
var formatters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34706__$1,cljs.core.constant$keyword$169);
var format_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34706__$1,cljs.core.constant$keyword$168);
if(!((dt == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"dt","dt",1272086768,null)))], 0)))].join('')));
}

if((dt instanceof goog.date.DateTime)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol(null,"goog.date.DateTime","goog.date.DateTime",-2139257094,null),new cljs.core.Symbol(null,"dt","dt",1272086768,null))], 0)))].join('')));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.string.replace,cljs_time.format.formatter_fn(format_str,formatters).call(null,dt,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs_time.format.date_formatters,"Z",cljs.core.constantly(""),cljs.core.array_seq(["ZZ",cljs.core.constantly("")], 0))));
});
/**
* Returns a string representing the given local Date instance in the form
* determined by the given formatter.
*/
cljs_time.format.unparse_local_date = (function unparse_local_date(p__34707,dt){
var map__34709 = p__34707;
var map__34709__$1 = ((cljs.core.seq_QMARK_(map__34709))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34709):map__34709);
var fmt = map__34709__$1;
var formatters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34709__$1,cljs.core.constant$keyword$169);
var format_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34709__$1,cljs.core.constant$keyword$168);
if(!((dt == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"dt","dt",1272086768,null)))], 0)))].join('')));
}

if((dt instanceof goog.date.Date)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol(null,"goog.date.Date","goog.date.Date",-1613361125,null),new cljs.core.Symbol(null,"dt","dt",1272086768,null))], 0)))].join('')));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.string.replace,cljs_time.format.formatter_fn(format_str,formatters).call(null,dt,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs_time.format.date_formatters,"Z",cljs.core.constantly(""),cljs.core.array_seq(["ZZ",cljs.core.constantly("")], 0))));
});
/**
* Shows how a given DateTime, or by default the current time, would be
* formatted with each of the available printing formatters.
*/
cljs_time.format.show_formatters = (function() {
var show_formatters = null;
var show_formatters__0 = (function (){
return show_formatters.cljs$core$IFn$_invoke$arity$1(cljs_time.core.now());
});
var show_formatters__1 = (function (dt){
var seq__34717 = cljs.core.seq(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs_time.format.printers));
var chunk__34718 = null;
var count__34719 = (0);
var i__34720 = (0);
while(true){
if((i__34720 < count__34719)){
var p = chunk__34718.cljs$core$IIndexed$_nth$arity$2(null,i__34720);
var fmt_34723 = (function (){var G__34721 = p;
return (cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1(G__34721) : cljs_time.format.formatters.call(null,G__34721));
})();
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic("%-40s%s\n",cljs.core.array_seq([p,cljs_time.format.unparse(fmt_34723,dt)], 0))], 0));

var G__34724 = seq__34717;
var G__34725 = chunk__34718;
var G__34726 = count__34719;
var G__34727 = (i__34720 + (1));
seq__34717 = G__34724;
chunk__34718 = G__34725;
count__34719 = G__34726;
i__34720 = G__34727;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__34717);
if(temp__4126__auto__){
var seq__34717__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34717__$1)){
var c__4602__auto__ = cljs.core.chunk_first(seq__34717__$1);
var G__34728 = cljs.core.chunk_rest(seq__34717__$1);
var G__34729 = c__4602__auto__;
var G__34730 = cljs.core.count(c__4602__auto__);
var G__34731 = (0);
seq__34717 = G__34728;
chunk__34718 = G__34729;
count__34719 = G__34730;
i__34720 = G__34731;
continue;
} else {
var p = cljs.core.first(seq__34717__$1);
var fmt_34732 = (function (){var G__34722 = p;
return (cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1(G__34722) : cljs_time.format.formatters.call(null,G__34722));
})();
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic("%-40s%s\n",cljs.core.array_seq([p,cljs_time.format.unparse(fmt_34732,dt)], 0))], 0));

var G__34733 = cljs.core.next(seq__34717__$1);
var G__34734 = null;
var G__34735 = (0);
var G__34736 = (0);
seq__34717 = G__34733;
chunk__34718 = G__34734;
count__34719 = G__34735;
i__34720 = G__34736;
continue;
}
} else {
return null;
}
}
break;
}
});
show_formatters = function(dt){
switch(arguments.length){
case 0:
return show_formatters__0.call(this);
case 1:
return show_formatters__1.call(this,dt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
show_formatters.cljs$core$IFn$_invoke$arity$0 = show_formatters__0;
show_formatters.cljs$core$IFn$_invoke$arity$1 = show_formatters__1;
return show_formatters;
})()
;

cljs_time.format.Mappable = (function (){var obj34738 = {};
return obj34738;
})();

cljs_time.format.instant__GT_map = (function instant__GT_map(instant){
if((function (){var and__3803__auto__ = instant;
if(and__3803__auto__){
return instant.cljs_time$format$Mappable$instant__GT_map$arity$1;
} else {
return and__3803__auto__;
}
})()){
return instant.cljs_time$format$Mappable$instant__GT_map$arity$1(instant);
} else {
var x__4459__auto__ = (((instant == null))?null:instant);
return (function (){var or__3815__auto__ = (cljs_time.format.instant__GT_map[(function (){var G__34742 = x__4459__auto__;
return goog.typeOf(G__34742);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs_time.format.instant__GT_map["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("Mappable.instant->map",instant);
}
}
})().call(null,instant);
}
});

cljs_time.format.to_map = (function to_map(years,months,days,hours,minutes,seconds,millis){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$150,years,cljs.core.constant$keyword$149,months,cljs.core.constant$keyword$148,days,cljs.core.constant$keyword$147,hours,cljs.core.constant$keyword$146,minutes,cljs.core.constant$keyword$145,seconds,cljs.core.constant$keyword$144,millis], null);
});
cljs.core.PersistentArrayMap.prototype.cljs_time$format$Mappable$ = true;

cljs.core.PersistentArrayMap.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (m){
var m__$1 = this;
var G__34743 = (((cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(m__$1)) instanceof cljs.core.Keyword))?cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(m__$1)).fqn:null);
switch (G__34743) {
case "cljs-time.core/interval":
var G__34744 = m__$1;
return (cljs_time.core.__GT_period.cljs$core$IFn$_invoke$arity$1 ? cljs_time.core.__GT_period.cljs$core$IFn$_invoke$arity$1(G__34744) : cljs_time.core.__GT_period.call(null,G__34744));

break;
case "cljs-time.core/period":
return m__$1;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(m__$1)))].join('')));

}
});

cljs_time.core.Interval.prototype.cljs_time$format$Mappable$ = true;

cljs_time.core.Interval.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (m){
var m__$1 = this;
var G__34745 = m__$1;
return (cljs_time.core.__GT_period.cljs$core$IFn$_invoke$arity$1 ? cljs_time.core.__GT_period.cljs$core$IFn$_invoke$arity$1(G__34745) : cljs_time.core.__GT_period.call(null,G__34745));
});

cljs_time.core.Period.prototype.cljs_time$format$Mappable$ = true;

cljs_time.core.Period.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (m){
var m__$1 = this;
var G__34746 = m__$1;
return (cljs_time.core.__GT_period.cljs$core$IFn$_invoke$arity$1 ? cljs_time.core.__GT_period.cljs$core$IFn$_invoke$arity$1(G__34746) : cljs_time.core.__GT_period.call(null,G__34746));
});

goog.date.UtcDateTime.prototype.cljs_time$format$Mappable$ = true;

goog.date.UtcDateTime.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (dt){
var dt__$1 = this;
return cljs_time.format.to_map(dt__$1.getYear(),(dt__$1.getMonth() + (1)),dt__$1.getDate(),dt__$1.getHours(),dt__$1.getMinutes(),dt__$1.getSeconds(),dt__$1.getMilliseconds());
});

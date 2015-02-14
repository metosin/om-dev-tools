// Compiled by ClojureScript 0.0-2850 {}
goog.provide('cljs_time.core');
goog.require('cljs.core');
goog.require('goog.i18n.TimeZone');
goog.require('goog.date.UtcDateTime');
goog.require('goog.date.DateTime');
goog.require('goog.date.Date');
goog.require('clojure.string');
goog.require('cljs_time.internal.core');
cljs_time.core._STAR_sys_time_STAR_ = null;
/**
* **Note:** Equality in goog.date.* (and also with plain
* javascript dates) is not the same as in Joda/clj-time. Two date
* objects representing the same instant in time in goog.date.* are not
* equal.
* 
* If you need to test for equality use either `cljs-time.core/=`, or
* optionally you can require the `cljs-time.extend` namespace which will
* extend the goog.date.* datatypes, so that clojure.core/= works as
* expected.
*/
cljs_time.core._EQ_ = cljs_time.internal.core._EQ_;

cljs_time.core.DateTimeProtocol = (function (){var obj34131 = {};
return obj34131;
})();

cljs_time.core.year = (function year(this$){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.cljs_time$core$DateTimeProtocol$year$arity$1;
} else {
return and__3803__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$year$arity$1(this$);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (cljs_time.core.year[(function (){var G__34135 = x__4459__auto__;
return goog.typeOf(G__34135);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs_time.core.year["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.year",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.month = (function month(this$){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.cljs_time$core$DateTimeProtocol$month$arity$1;
} else {
return and__3803__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$month$arity$1(this$);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (cljs_time.core.month[(function (){var G__34139 = x__4459__auto__;
return goog.typeOf(G__34139);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs_time.core.month["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.month",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.day = (function day(this$){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.cljs_time$core$DateTimeProtocol$day$arity$1;
} else {
return and__3803__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$day$arity$1(this$);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (cljs_time.core.day[(function (){var G__34143 = x__4459__auto__;
return goog.typeOf(G__34143);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs_time.core.day["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.day",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.day_of_week = (function day_of_week(this$){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.cljs_time$core$DateTimeProtocol$day_of_week$arity$1;
} else {
return and__3803__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$day_of_week$arity$1(this$);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (cljs_time.core.day_of_week[(function (){var G__34147 = x__4459__auto__;
return goog.typeOf(G__34147);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs_time.core.day_of_week["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.day-of-week",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.hour = (function hour(this$){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.cljs_time$core$DateTimeProtocol$hour$arity$1;
} else {
return and__3803__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$hour$arity$1(this$);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (cljs_time.core.hour[(function (){var G__34151 = x__4459__auto__;
return goog.typeOf(G__34151);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs_time.core.hour["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.hour",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.minute = (function minute(this$){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.cljs_time$core$DateTimeProtocol$minute$arity$1;
} else {
return and__3803__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$minute$arity$1(this$);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (cljs_time.core.minute[(function (){var G__34155 = x__4459__auto__;
return goog.typeOf(G__34155);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs_time.core.minute["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.minute",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.sec = (function sec(this$){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.cljs_time$core$DateTimeProtocol$sec$arity$1;
} else {
return and__3803__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$sec$arity$1(this$);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (cljs_time.core.sec[(function (){var G__34159 = x__4459__auto__;
return goog.typeOf(G__34159);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs_time.core.sec["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.sec",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.second = (function second(this$){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.cljs_time$core$DateTimeProtocol$second$arity$1;
} else {
return and__3803__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$second$arity$1(this$);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (cljs_time.core.second[(function (){var G__34163 = x__4459__auto__;
return goog.typeOf(G__34163);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs_time.core.second["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.second",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.milli = (function milli(this$){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.cljs_time$core$DateTimeProtocol$milli$arity$1;
} else {
return and__3803__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$milli$arity$1(this$);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (cljs_time.core.milli[(function (){var G__34167 = x__4459__auto__;
return goog.typeOf(G__34167);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs_time.core.milli["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.milli",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.after_QMARK_ = (function after_QMARK_(this$,that){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2;
} else {
return and__3803__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2(this$,that);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (cljs_time.core.after_QMARK_[(function (){var G__34171 = x__4459__auto__;
return goog.typeOf(G__34171);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs_time.core.after_QMARK_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.after?",this$);
}
}
})().call(null,this$,that);
}
});

cljs_time.core.before_QMARK_ = (function before_QMARK_(this$,that){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2;
} else {
return and__3803__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2(this$,that);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (cljs_time.core.before_QMARK_[(function (){var G__34175 = x__4459__auto__;
return goog.typeOf(G__34175);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs_time.core.before_QMARK_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.before?",this$);
}
}
})().call(null,this$,that);
}
});

cljs_time.core.plus_ = (function plus_(this$,period){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.cljs_time$core$DateTimeProtocol$plus_$arity$2;
} else {
return and__3803__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$plus_$arity$2(this$,period);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (cljs_time.core.plus_[(function (){var G__34179 = x__4459__auto__;
return goog.typeOf(G__34179);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs_time.core.plus_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.plus-",this$);
}
}
})().call(null,this$,period);
}
});

cljs_time.core.minus_ = (function minus_(this$,period){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.cljs_time$core$DateTimeProtocol$minus_$arity$2;
} else {
return and__3803__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$minus_$arity$2(this$,period);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (cljs_time.core.minus_[(function (){var G__34183 = x__4459__auto__;
return goog.typeOf(G__34183);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs_time.core.minus_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.minus-",this$);
}
}
})().call(null,this$,period);
}
});

cljs_time.core.first_day_of_the_month_ = (function first_day_of_the_month_(this$){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1;
} else {
return and__3803__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1(this$);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (cljs_time.core.first_day_of_the_month_[(function (){var G__34187 = x__4459__auto__;
return goog.typeOf(G__34187);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs_time.core.first_day_of_the_month_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.first-day-of-the-month-",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.last_day_of_the_month_ = (function last_day_of_the_month_(this$){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1;
} else {
return and__3803__auto__;
}
})()){
return this$.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1(this$);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (cljs_time.core.last_day_of_the_month_[(function (){var G__34191 = x__4459__auto__;
return goog.typeOf(G__34191);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs_time.core.last_day_of_the_month_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.last-day-of-the-month-",this$);
}
}
})().call(null,this$);
}
});


cljs_time.core.InTimeUnitProtocol = (function (){var obj34193 = {};
return obj34193;
})();

cljs_time.core.in_millis = (function in_millis(this$){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1;
} else {
return and__3803__auto__;
}
})()){
return this$.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1(this$);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (cljs_time.core.in_millis[(function (){var G__34197 = x__4459__auto__;
return goog.typeOf(G__34197);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs_time.core.in_millis["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-millis",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.in_seconds = (function in_seconds(this$){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1;
} else {
return and__3803__auto__;
}
})()){
return this$.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1(this$);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (cljs_time.core.in_seconds[(function (){var G__34201 = x__4459__auto__;
return goog.typeOf(G__34201);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs_time.core.in_seconds["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-seconds",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.in_minutes = (function in_minutes(this$){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1;
} else {
return and__3803__auto__;
}
})()){
return this$.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1(this$);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (cljs_time.core.in_minutes[(function (){var G__34205 = x__4459__auto__;
return goog.typeOf(G__34205);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs_time.core.in_minutes["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-minutes",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.in_hours = (function in_hours(this$){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1;
} else {
return and__3803__auto__;
}
})()){
return this$.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1(this$);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (cljs_time.core.in_hours[(function (){var G__34209 = x__4459__auto__;
return goog.typeOf(G__34209);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs_time.core.in_hours["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-hours",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.in_days = (function in_days(this$){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.cljs_time$core$InTimeUnitProtocol$in_days$arity$1;
} else {
return and__3803__auto__;
}
})()){
return this$.cljs_time$core$InTimeUnitProtocol$in_days$arity$1(this$);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (cljs_time.core.in_days[(function (){var G__34213 = x__4459__auto__;
return goog.typeOf(G__34213);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs_time.core.in_days["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-days",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.in_weeks = (function in_weeks(this$){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1;
} else {
return and__3803__auto__;
}
})()){
return this$.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1(this$);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (cljs_time.core.in_weeks[(function (){var G__34217 = x__4459__auto__;
return goog.typeOf(G__34217);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs_time.core.in_weeks["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-weeks",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.in_months = (function in_months(this$){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.cljs_time$core$InTimeUnitProtocol$in_months$arity$1;
} else {
return and__3803__auto__;
}
})()){
return this$.cljs_time$core$InTimeUnitProtocol$in_months$arity$1(this$);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (cljs_time.core.in_months[(function (){var G__34221 = x__4459__auto__;
return goog.typeOf(G__34221);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs_time.core.in_months["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-months",this$);
}
}
})().call(null,this$);
}
});

cljs_time.core.in_years = (function in_years(this$){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.cljs_time$core$InTimeUnitProtocol$in_years$arity$1;
} else {
return and__3803__auto__;
}
})()){
return this$.cljs_time$core$InTimeUnitProtocol$in_years$arity$1(this$);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (cljs_time.core.in_years[(function (){var G__34225 = x__4459__auto__;
return goog.typeOf(G__34225);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs_time.core.in_years["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-years",this$);
}
}
})().call(null,this$);
}
});


/**
* @constructor
* @param {*} start
* @param {*} end
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs_time.core.Interval = (function (start,end,__meta,__extmap,__hash){
this.start = start;
this.end = end;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs_time.core.Interval.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4418__auto__,k__4419__auto__){
var self__ = this;
var this__4418__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4418__auto____$1,k__4419__auto__,null);
});

cljs_time.core.Interval.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4420__auto__,k34227,else__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
var G__34229 = (((k34227 instanceof cljs.core.Keyword))?k34227.fqn:null);
switch (G__34229) {
case "end":
return self__.end;

break;
case "start":
return self__.start;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34227,else__4421__auto__);

}
});

cljs_time.core.Interval.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4432__auto__,writer__4433__auto__,opts__4434__auto__){
var self__ = this;
var this__4432__auto____$1 = this;
var pr_pair__4435__auto__ = ((function (this__4432__auto____$1){
return (function (keyval__4436__auto__){
return cljs.core.pr_sequential_writer(writer__4433__auto__,cljs.core.pr_writer,""," ","",opts__4434__auto__,keyval__4436__auto__);
});})(this__4432__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4433__auto__,pr_pair__4435__auto__,"#cljs-time.core.Interval{",", ","}",opts__4434__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$154,self__.start],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$155,self__.end],null))], null),self__.__extmap));
});

cljs_time.core.Interval.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4416__auto__){
var self__ = this;
var this__4416__auto____$1 = this;
return self__.__meta;
});

cljs_time.core.Interval.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4412__auto__){
var self__ = this;
var this__4412__auto____$1 = this;
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,self__.__extmap,self__.__hash));
});

cljs_time.core.Interval.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4422__auto__){
var self__ = this;
var this__4422__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

cljs_time.core.Interval.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
var h__4236__auto__ = self__.__hash;
if(!((h__4236__auto__ == null))){
return h__4236__auto__;
} else {
var h__4236__auto____$1 = cljs.core.hash_imap(this__4413__auto____$1);
self__.__hash = h__4236__auto____$1;

return h__4236__auto____$1;
}
});

cljs_time.core.Interval.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4414__auto__,other__4415__auto__){
var self__ = this;
var this__4414__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3803__auto__ = other__4415__auto__;
if(cljs.core.truth_(and__3803__auto__)){
return ((this__4414__auto____$1.constructor === other__4415__auto__.constructor)) && (cljs.core.equiv_map(this__4414__auto____$1,other__4415__auto__));
} else {
return and__3803__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs_time.core.Interval.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4427__auto__,k__4428__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$154,null,cljs.core.constant$keyword$155,null], null), null),k__4428__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4427__auto____$1),self__.__meta),k__4428__auto__);
} else {
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4428__auto__)),null));
}
});

cljs_time.core.Interval.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4425__auto__,k__4426__auto__,G__34226){
var self__ = this;
var this__4425__auto____$1 = this;
var pred__34230 = cljs.core.keyword_identical_QMARK_;
var expr__34231 = k__4426__auto__;
if(cljs.core.truth_((function (){var G__34233 = cljs.core.constant$keyword$154;
var G__34234 = expr__34231;
return (pred__34230.cljs$core$IFn$_invoke$arity$2 ? pred__34230.cljs$core$IFn$_invoke$arity$2(G__34233,G__34234) : pred__34230.call(null,G__34233,G__34234));
})())){
return (new cljs_time.core.Interval(G__34226,self__.end,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34235 = cljs.core.constant$keyword$155;
var G__34236 = expr__34231;
return (pred__34230.cljs$core$IFn$_invoke$arity$2 ? pred__34230.cljs$core$IFn$_invoke$arity$2(G__34235,G__34236) : pred__34230.call(null,G__34235,G__34236));
})())){
return (new cljs_time.core.Interval(self__.start,G__34226,self__.__meta,self__.__extmap,null));
} else {
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4426__auto__,G__34226),null));
}
}
});

cljs_time.core.Interval.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4430__auto__){
var self__ = this;
var this__4430__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$154,self__.start],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$155,self__.end],null))], null),self__.__extmap));
});

cljs_time.core.Interval.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4417__auto__,G__34226){
var self__ = this;
var this__4417__auto____$1 = this;
return (new cljs_time.core.Interval(self__.start,self__.end,G__34226,self__.__extmap,self__.__hash));
});

cljs_time.core.Interval.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4423__auto__,entry__4424__auto__){
var self__ = this;
var this__4423__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4424__auto__)){
return cljs.core._assoc(this__4423__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4424__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4424__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4423__auto____$1,entry__4424__auto__);
}
});

cljs_time.core.Interval.cljs$lang$type = true;

cljs_time.core.Interval.cljs$lang$ctorPrSeq = (function (this__4452__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs-time.core/Interval");
});

cljs_time.core.Interval.cljs$lang$ctorPrWriter = (function (this__4452__auto__,writer__4453__auto__){
return cljs.core._write(writer__4453__auto__,"cljs-time.core/Interval");
});

cljs_time.core.__GT_Interval = (function __GT_Interval(start,end){
return (new cljs_time.core.Interval(start,end,null,null,null));
});

cljs_time.core.map__GT_Interval = (function map__GT_Interval(G__34228){
return (new cljs_time.core.Interval(cljs.core.constant$keyword$154.cljs$core$IFn$_invoke$arity$1(G__34228),cljs.core.constant$keyword$155.cljs$core$IFn$_invoke$arity$1(G__34228),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34228,cljs.core.constant$keyword$154,cljs.core.array_seq([cljs.core.constant$keyword$155], 0)),null));
});

/**
* Returns an Interval representing the span between the two given DateTime.
* Note that intervals are closed on the left and open on the right.
*/
cljs_time.core.interval = (function interval(start,end){
if((start.getTime() <= end.getTime())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),cljs.core.list(new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null),new cljs.core.Symbol(null,"start","start",1285322546,null)),cljs.core.list(new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null),new cljs.core.Symbol(null,"end","end",1372345569,null)))], 0)))].join('')));
}

return cljs_time.core.__GT_Interval(start,end);
});

/**
* @constructor
* @param {*} years
* @param {*} months
* @param {*} weeks
* @param {*} days
* @param {*} hours
* @param {*} minutes
* @param {*} seconds
* @param {*} millis
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs_time.core.Period = (function (years,months,weeks,days,hours,minutes,seconds,millis,__meta,__extmap,__hash){
this.years = years;
this.months = months;
this.weeks = weeks;
this.days = days;
this.hours = hours;
this.minutes = minutes;
this.seconds = seconds;
this.millis = millis;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs_time.core.Period.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4418__auto__,k__4419__auto__){
var self__ = this;
var this__4418__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4418__auto____$1,k__4419__auto__,null);
});

cljs_time.core.Period.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4420__auto__,k34239,else__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
var G__34241 = (((k34239 instanceof cljs.core.Keyword))?k34239.fqn:null);
switch (G__34241) {
case "millis":
return self__.millis;

break;
case "seconds":
return self__.seconds;

break;
case "minutes":
return self__.minutes;

break;
case "hours":
return self__.hours;

break;
case "days":
return self__.days;

break;
case "weeks":
return self__.weeks;

break;
case "months":
return self__.months;

break;
case "years":
return self__.years;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34239,else__4421__auto__);

}
});

cljs_time.core.Period.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4432__auto__,writer__4433__auto__,opts__4434__auto__){
var self__ = this;
var this__4432__auto____$1 = this;
var pr_pair__4435__auto__ = ((function (this__4432__auto____$1){
return (function (keyval__4436__auto__){
return cljs.core.pr_sequential_writer(writer__4433__auto__,cljs.core.pr_writer,""," ","",opts__4434__auto__,keyval__4436__auto__);
});})(this__4432__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4433__auto__,pr_pair__4435__auto__,"#cljs-time.core.Period{",", ","}",opts__4434__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$150,self__.years],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$149,self__.months],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$153,self__.weeks],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$148,self__.days],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$147,self__.hours],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$146,self__.minutes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$145,self__.seconds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$144,self__.millis],null))], null),self__.__extmap));
});

cljs_time.core.Period.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4416__auto__){
var self__ = this;
var this__4416__auto____$1 = this;
return self__.__meta;
});

cljs_time.core.Period.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4412__auto__){
var self__ = this;
var this__4412__auto____$1 = this;
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,self__.__hash));
});

cljs_time.core.Period.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4422__auto__){
var self__ = this;
var this__4422__auto____$1 = this;
return (8 + cljs.core.count(self__.__extmap));
});

cljs_time.core.Period.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
var h__4236__auto__ = self__.__hash;
if(!((h__4236__auto__ == null))){
return h__4236__auto__;
} else {
var h__4236__auto____$1 = cljs.core.hash_imap(this__4413__auto____$1);
self__.__hash = h__4236__auto____$1;

return h__4236__auto____$1;
}
});

cljs_time.core.Period.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4414__auto__,other__4415__auto__){
var self__ = this;
var this__4414__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3803__auto__ = other__4415__auto__;
if(cljs.core.truth_(and__3803__auto__)){
return ((this__4414__auto____$1.constructor === other__4415__auto__.constructor)) && (cljs.core.equiv_map(this__4414__auto____$1,other__4415__auto__));
} else {
return and__3803__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs_time.core.Period.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4427__auto__,k__4428__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$149,null,cljs.core.constant$keyword$148,null,cljs.core.constant$keyword$145,null,cljs.core.constant$keyword$147,null,cljs.core.constant$keyword$150,null,cljs.core.constant$keyword$146,null,cljs.core.constant$keyword$153,null,cljs.core.constant$keyword$144,null], null), null),k__4428__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4427__auto____$1),self__.__meta),k__4428__auto__);
} else {
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4428__auto__)),null));
}
});

cljs_time.core.Period.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4425__auto__,k__4426__auto__,G__34238){
var self__ = this;
var this__4425__auto____$1 = this;
var pred__34242 = cljs.core.keyword_identical_QMARK_;
var expr__34243 = k__4426__auto__;
if(cljs.core.truth_((function (){var G__34245 = cljs.core.constant$keyword$150;
var G__34246 = expr__34243;
return (pred__34242.cljs$core$IFn$_invoke$arity$2 ? pred__34242.cljs$core$IFn$_invoke$arity$2(G__34245,G__34246) : pred__34242.call(null,G__34245,G__34246));
})())){
return (new cljs_time.core.Period(G__34238,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34247 = cljs.core.constant$keyword$149;
var G__34248 = expr__34243;
return (pred__34242.cljs$core$IFn$_invoke$arity$2 ? pred__34242.cljs$core$IFn$_invoke$arity$2(G__34247,G__34248) : pred__34242.call(null,G__34247,G__34248));
})())){
return (new cljs_time.core.Period(self__.years,G__34238,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34249 = cljs.core.constant$keyword$153;
var G__34250 = expr__34243;
return (pred__34242.cljs$core$IFn$_invoke$arity$2 ? pred__34242.cljs$core$IFn$_invoke$arity$2(G__34249,G__34250) : pred__34242.call(null,G__34249,G__34250));
})())){
return (new cljs_time.core.Period(self__.years,self__.months,G__34238,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34251 = cljs.core.constant$keyword$148;
var G__34252 = expr__34243;
return (pred__34242.cljs$core$IFn$_invoke$arity$2 ? pred__34242.cljs$core$IFn$_invoke$arity$2(G__34251,G__34252) : pred__34242.call(null,G__34251,G__34252));
})())){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,G__34238,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34253 = cljs.core.constant$keyword$147;
var G__34254 = expr__34243;
return (pred__34242.cljs$core$IFn$_invoke$arity$2 ? pred__34242.cljs$core$IFn$_invoke$arity$2(G__34253,G__34254) : pred__34242.call(null,G__34253,G__34254));
})())){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,G__34238,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34255 = cljs.core.constant$keyword$146;
var G__34256 = expr__34243;
return (pred__34242.cljs$core$IFn$_invoke$arity$2 ? pred__34242.cljs$core$IFn$_invoke$arity$2(G__34255,G__34256) : pred__34242.call(null,G__34255,G__34256));
})())){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,G__34238,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34257 = cljs.core.constant$keyword$145;
var G__34258 = expr__34243;
return (pred__34242.cljs$core$IFn$_invoke$arity$2 ? pred__34242.cljs$core$IFn$_invoke$arity$2(G__34257,G__34258) : pred__34242.call(null,G__34257,G__34258));
})())){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,G__34238,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34259 = cljs.core.constant$keyword$144;
var G__34260 = expr__34243;
return (pred__34242.cljs$core$IFn$_invoke$arity$2 ? pred__34242.cljs$core$IFn$_invoke$arity$2(G__34259,G__34260) : pred__34242.call(null,G__34259,G__34260));
})())){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,G__34238,self__.__meta,self__.__extmap,null));
} else {
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4426__auto__,G__34238),null));
}
}
}
}
}
}
}
}
});

cljs_time.core.Period.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4430__auto__){
var self__ = this;
var this__4430__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$150,self__.years],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$149,self__.months],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$153,self__.weeks],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$148,self__.days],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$147,self__.hours],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$146,self__.minutes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$145,self__.seconds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$144,self__.millis],null))], null),self__.__extmap));
});

cljs_time.core.Period.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4417__auto__,G__34238){
var self__ = this;
var this__4417__auto____$1 = this;
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,G__34238,self__.__extmap,self__.__hash));
});

cljs_time.core.Period.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4423__auto__,entry__4424__auto__){
var self__ = this;
var this__4423__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4424__auto__)){
return cljs.core._assoc(this__4423__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4424__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4424__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4423__auto____$1,entry__4424__auto__);
}
});

cljs_time.core.Period.cljs$lang$type = true;

cljs_time.core.Period.cljs$lang$ctorPrSeq = (function (this__4452__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs-time.core/Period");
});

cljs_time.core.Period.cljs$lang$ctorPrWriter = (function (this__4452__auto__,writer__4453__auto__){
return cljs.core._write(writer__4453__auto__,"cljs-time.core/Period");
});

cljs_time.core.__GT_Period = (function __GT_Period(years,months,weeks,days,hours,minutes,seconds,millis){
return (new cljs_time.core.Period(years,months,weeks,days,hours,minutes,seconds,millis,null,null,null));
});

cljs_time.core.map__GT_Period = (function map__GT_Period(G__34240){
return (new cljs_time.core.Period(cljs.core.constant$keyword$150.cljs$core$IFn$_invoke$arity$1(G__34240),cljs.core.constant$keyword$149.cljs$core$IFn$_invoke$arity$1(G__34240),cljs.core.constant$keyword$153.cljs$core$IFn$_invoke$arity$1(G__34240),cljs.core.constant$keyword$148.cljs$core$IFn$_invoke$arity$1(G__34240),cljs.core.constant$keyword$147.cljs$core$IFn$_invoke$arity$1(G__34240),cljs.core.constant$keyword$146.cljs$core$IFn$_invoke$arity$1(G__34240),cljs.core.constant$keyword$145.cljs$core$IFn$_invoke$arity$1(G__34240),cljs.core.constant$keyword$144.cljs$core$IFn$_invoke$arity$1(G__34240),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34240,cljs.core.constant$keyword$150,cljs.core.array_seq([cljs.core.constant$keyword$149,cljs.core.constant$keyword$153,cljs.core.constant$keyword$148,cljs.core.constant$keyword$147,cljs.core.constant$keyword$146,cljs.core.constant$keyword$145,cljs.core.constant$keyword$144], 0)),null));
});

/**
* @param {...*} var_args
*/
cljs_time.core.period = (function() {
var period = null;
var period__2 = (function (period__$1,value){
return cljs_time.core.map__GT_Period(new cljs.core.PersistentArrayMap.fromArray([period__$1,value], true, false));
});
var period__3 = (function() { 
var G__34264__delegate = function (p1,v1,kvs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,period.cljs$core$IFn$_invoke$arity$2(p1,v1),kvs);
};
var G__34264 = function (p1,v1,var_args){
var kvs = null;
if (arguments.length > 2) {
var G__34265__i = 0, G__34265__a = new Array(arguments.length -  2);
while (G__34265__i < G__34265__a.length) {G__34265__a[G__34265__i] = arguments[G__34265__i + 2]; ++G__34265__i;}
  kvs = new cljs.core.IndexedSeq(G__34265__a,0);
} 
return G__34264__delegate.call(this,p1,v1,kvs);};
G__34264.cljs$lang$maxFixedArity = 2;
G__34264.cljs$lang$applyTo = (function (arglist__34266){
var p1 = cljs.core.first(arglist__34266);
arglist__34266 = cljs.core.next(arglist__34266);
var v1 = cljs.core.first(arglist__34266);
var kvs = cljs.core.rest(arglist__34266);
return G__34264__delegate(p1,v1,kvs);
});
G__34264.cljs$core$IFn$_invoke$arity$variadic = G__34264__delegate;
return G__34264;
})()
;
period = function(p1,v1,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return period__2.call(this,p1,v1);
default:
var G__34267 = null;
if (arguments.length > 2) {
var G__34268__i = 0, G__34268__a = new Array(arguments.length -  2);
while (G__34268__i < G__34268__a.length) {G__34268__a[G__34268__i] = arguments[G__34268__i + 2]; ++G__34268__i;}
G__34267 = new cljs.core.IndexedSeq(G__34268__a,0);
}
return period__3.cljs$core$IFn$_invoke$arity$variadic(p1,v1, G__34267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
period.cljs$lang$maxFixedArity = 2;
period.cljs$lang$applyTo = period__3.cljs$lang$applyTo;
period.cljs$core$IFn$_invoke$arity$2 = period__2;
period.cljs$core$IFn$_invoke$arity$variadic = period__3.cljs$core$IFn$_invoke$arity$variadic;
return period;
})()
;
cljs_time.core.periods = (function (){var fixed_time_fn = (function (f,set_fn,op,date,value){
var date__$1 = date.clone();
if(cljs.core.truth_(value)){
var G__34279_34298 = date__$1;
var G__34280_34299 = (function (){var G__34281 = (function (){var G__34283 = date__$1;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34283) : f.call(null,G__34283));
})();
var G__34282 = value;
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__34281,G__34282) : op.call(null,G__34281,G__34282));
})();
(set_fn.cljs$core$IFn$_invoke$arity$2 ? set_fn.cljs$core$IFn$_invoke$arity$2(G__34279_34298,G__34280_34299) : set_fn.call(null,G__34279_34298,G__34280_34299));
} else {
}

return date__$1;
});
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$144,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(fixed_time_fn,cljs_time.core.milli,((function (fixed_time_fn){
return (function (p1__34269_SHARP_,p2__34270_SHARP_){
return p1__34269_SHARP_.setMilliseconds(p2__34270_SHARP_);
});})(fixed_time_fn))
),cljs.core.constant$keyword$145,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(fixed_time_fn,cljs_time.core.second,((function (fixed_time_fn){
return (function (p1__34271_SHARP_,p2__34272_SHARP_){
return p1__34271_SHARP_.setSeconds(p2__34272_SHARP_);
});})(fixed_time_fn))
),cljs.core.constant$keyword$146,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(fixed_time_fn,cljs_time.core.minute,((function (fixed_time_fn){
return (function (p1__34273_SHARP_,p2__34274_SHARP_){
return p1__34273_SHARP_.setMinutes(p2__34274_SHARP_);
});})(fixed_time_fn))
),cljs.core.constant$keyword$147,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(fixed_time_fn,cljs_time.core.hour,((function (fixed_time_fn){
return (function (p1__34275_SHARP_,p2__34276_SHARP_){
return p1__34275_SHARP_.setHours(p2__34276_SHARP_);
});})(fixed_time_fn))
),cljs.core.constant$keyword$148,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(fixed_time_fn,cljs_time.core.day,((function (fixed_time_fn){
return (function (p1__34277_SHARP_,p2__34278_SHARP_){
return p1__34277_SHARP_.setDate(p2__34278_SHARP_);
});})(fixed_time_fn))
),cljs.core.constant$keyword$153,((function (fixed_time_fn){
return (function (op,date,value){
var date__$1 = date.clone();
if(cljs.core.truth_(value)){
date__$1.setDate((function (){var G__34284 = cljs_time.core.day(date__$1);
var G__34285 = ((7) * value);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__34284,G__34285) : op.call(null,G__34284,G__34285));
})());
} else {
}

return date__$1;
});})(fixed_time_fn))
,cljs.core.constant$keyword$149,((function (fixed_time_fn){
return (function (op,date,value){
var date__$1 = date.clone();
if(cljs.core.truth_(value)){
var m_34300 = (function (){var G__34286 = cljs_time.core.month(date__$1);
var G__34287 = value;
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__34286,G__34287) : op.call(null,G__34286,G__34287));
})();
var y_34301 = cljs_time.core.year(date__$1);
var y_34302__$1 = (((m_34300 > (12)))?(y_34301 + (1)):(((m_34300 < (1)))?(y_34301 - (1)):y_34301
));
var m_34303__$1 = (((m_34300 > (12)))?cljs.core.mod(m_34300,(12)):(((m_34300 < (1)))?(m_34300 + (12)):m_34300
));
var ldom_34304 = cljs_time.core.day(cljs_time.core.last_day_of_the_month_((new goog.date.Date(y_34302__$1,(m_34303__$1 - (1)),(1)))));
if((ldom_34304 < cljs_time.core.day(date__$1))){
date__$1.setDate(ldom_34304);
} else {
}

date__$1.setMonth((m_34303__$1 - (1)));

date__$1.setYear(y_34302__$1);
} else {
}

return date__$1;
});})(fixed_time_fn))
,cljs.core.constant$keyword$150,((function (fixed_time_fn){
return (function (op,date,value){
var date__$1 = date.clone();
if(cljs.core.truth_(value)){
if(cljs.core.truth_((function (){var and__3803__auto__ = cljs_time.internal.core.leap_year_QMARK_(cljs_time.core.year(date__$1));
if(and__3803__auto__){
var and__3803__auto____$1 = (function (){var G__34292 = (2);
var G__34293 = cljs_time.core.month(date__$1);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__34292,G__34293) : cljs_time.core._EQ_.call(null,G__34292,G__34293));
})();
if(cljs.core.truth_(and__3803__auto____$1)){
var G__34294 = (29);
var G__34295 = cljs_time.core.day(date__$1);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__34294,G__34295) : cljs_time.core._EQ_.call(null,G__34294,G__34295));
} else {
return and__3803__auto____$1;
}
} else {
return and__3803__auto__;
}
})())){
date__$1.setDate((28));
} else {
}

date__$1.setYear((function (){var G__34296 = cljs_time.core.year(date__$1);
var G__34297 = value;
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__34296,G__34297) : op.call(null,G__34296,G__34297));
})());
} else {
}

return date__$1;
});})(fixed_time_fn))
], null);
})();
cljs_time.core.period_fn = (function period_fn(p){
return (function (operator,date){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__34306_SHARP_,p2__34305_SHARP_){
return (function (){var G__34308 = cljs.core.key(p2__34305_SHARP_);
return (cljs_time.core.periods.cljs$core$IFn$_invoke$arity$1 ? cljs_time.core.periods.cljs$core$IFn$_invoke$arity$1(G__34308) : cljs_time.core.periods.call(null,G__34308));
})().call(null,operator,p1__34306_SHARP_,cljs.core.val(p2__34305_SHARP_));
}),date,p);
});
});
goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$ = true;

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getYear();
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1.getMonth() + (1));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getDate();
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){
var this$__$1 = this;
var d = this$__$1.getDay();
if(cljs.core.truth_((function (){var G__34309 = d;
var G__34310 = (0);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__34309,G__34310) : cljs_time.core._EQ_.call(null,G__34309,G__34310));
})())){
return (7);
} else {
return d;
}
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() > that.getTime());
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() < that.getTime());
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn(period).call(null,cljs.core._PLUS_,this$__$1);
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn(period).call(null,cljs.core._,this$__$1);
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return (new goog.date.Date(this$__$1.getYear(),this$__$1.getMonth(),(1)));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.minus_((new goog.date.Date(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1))),cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$148,(1)));
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$ = true;

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getYear();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1.getMonth() + (1));
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getDate();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){
var this$__$1 = this;
var d = this$__$1.getDay();
if(cljs.core.truth_((function (){var G__34311 = d;
var G__34312 = (0);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__34311,G__34312) : cljs_time.core._EQ_.call(null,G__34311,G__34312));
})())){
return (7);
} else {
return d;
}
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getHours();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMinutes();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getSeconds();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMilliseconds();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() > that.getTime());
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() < that.getTime());
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn(period).call(null,cljs.core._PLUS_,this$__$1);
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn(period).call(null,cljs.core._,this$__$1);
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return (new goog.date.DateTime(this$__$1.getYear(),this$__$1.getMonth(),(1),(0),(0),(0),(0)));
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.minus_((new goog.date.DateTime(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1),(0),(0),(0),(0))),cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$148,(1)));
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$ = true;

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getYear();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1.getMonth() + (1));
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getDate();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){
var this$__$1 = this;
var d = this$__$1.getDay();
if(cljs.core.truth_((function (){var G__34313 = d;
var G__34314 = (0);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__34313,G__34314) : cljs_time.core._EQ_.call(null,G__34313,G__34314));
})())){
return (7);
} else {
return d;
}
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getHours();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMinutes();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getSeconds();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMilliseconds();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() > that.getTime());
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() < that.getTime());
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn(period).call(null,cljs.core._PLUS_,this$__$1);
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn(period).call(null,cljs.core._,this$__$1);
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return (new goog.date.UtcDateTime(this$__$1.getYear(),this$__$1.getMonth(),(1),(0),(0),(0),(0)));
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.minus_((new goog.date.UtcDateTime(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1),(0),(0),(0),(0))),cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$148,(1)));
});
cljs_time.core.utc = (function (){var G__34315 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$119,"UTC",cljs.core.constant$keyword$156,(0),cljs.core.constant$keyword$157,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["UTC"], null),cljs.core.constant$keyword$158,cljs.core.PersistentVector.EMPTY], null));
return goog.i18n.TimeZone.createTimeZone(G__34315);
})();
/**
* Returns a DateTime for the current instant in the UTC time zone.
*/
cljs_time.core.now = (function now(){
if(cljs.core.truth_(cljs_time.core._STAR_sys_time_STAR_)){
return cljs_time.core._STAR_sys_time_STAR_;
} else {
return (new goog.date.UtcDateTime());
}
});
/**
* Returns a local DateTime for the current instant without date or time zone
* in the current time zone.
*/
cljs_time.core.time_now = (function time_now(){
return (new goog.date.DateTime());
});
cljs_time.core.at_midnight = (function at_midnight(datetime){
var datetime__$1 = datetime.clone();
var G__34317 = datetime__$1;
G__34317.setHours((0));

G__34317.setMinutes((0));

G__34317.setSeconds((0));

G__34317.setMilliseconds((0));

return G__34317;
});
/**
* Returns a DateTime for today at midnight in the UTC time zone.
*/
cljs_time.core.today_at_midnight = (function today_at_midnight(){
return cljs_time.core.at_midnight(cljs_time.core.now());
});
/**
* Returns a DateTime for the begining of the Unix epoch in the UTC time zone.
*/
cljs_time.core.epoch = (function epoch(){
var G__34319 = (new goog.date.UtcDateTime());
G__34319.setTime((0));

return G__34319;
});
/**
* Constructs and returns a new DateTime at midnight in UTC.
* 
* Specify the year, month of year, day of month. Note that month and day are
* 1-indexed. Any number of least-significant components can be ommited, in
* which case they will default to 1.
*/
cljs_time.core.date_midnight = (function() {
var date_midnight = null;
var date_midnight__1 = (function (year){
return date_midnight.cljs$core$IFn$_invoke$arity$3(year,(1),(1));
});
var date_midnight__2 = (function (year,month){
return date_midnight.cljs$core$IFn$_invoke$arity$3(year,month,(1));
});
var date_midnight__3 = (function (year,month,day){
return (new goog.date.UtcDateTime(year,(month - (1)),day));
});
date_midnight = function(year,month,day){
switch(arguments.length){
case 1:
return date_midnight__1.call(this,year);
case 2:
return date_midnight__2.call(this,year,month);
case 3:
return date_midnight__3.call(this,year,month,day);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_midnight.cljs$core$IFn$_invoke$arity$1 = date_midnight__1;
date_midnight.cljs$core$IFn$_invoke$arity$2 = date_midnight__2;
date_midnight.cljs$core$IFn$_invoke$arity$3 = date_midnight__3;
return date_midnight;
})()
;
/**
* Constructs and returns a new DateTime in UTC.
* 
* Specify the year, month of year, day of month, hour of day, minute if hour,
* second of minute, and millisecond of second. Note that month and day are
* 1-indexed while hour, second, minute, and millis are 0-indexed.
* 
* Any number of least-significant components can be ommited, in which case
* they will default to 1 or 0 as appropriate.
*/
cljs_time.core.date_time = (function() {
var date_time = null;
var date_time__1 = (function (year){
return date_time.cljs$core$IFn$_invoke$arity$7(year,(1),(1),(0),(0),(0),(0));
});
var date_time__2 = (function (year,month){
return date_time.cljs$core$IFn$_invoke$arity$7(year,month,(1),(0),(0),(0),(0));
});
var date_time__3 = (function (year,month,day){
return date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,(0),(0),(0),(0));
});
var date_time__4 = (function (year,month,day,hour){
return date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,hour,(0),(0),(0));
});
var date_time__5 = (function (year,month,day,hour,minute){
return date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,hour,minute,(0),(0));
});
var date_time__6 = (function (year,month,day,hour,minute,second){
return date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,hour,minute,second,(0));
});
var date_time__7 = (function (year,month,day,hour,minute,second,millis){
return (new goog.date.UtcDateTime(year,(month - (1)),day,hour,minute,second,millis));
});
date_time = function(year,month,day,hour,minute,second,millis){
switch(arguments.length){
case 1:
return date_time__1.call(this,year);
case 2:
return date_time__2.call(this,year,month);
case 3:
return date_time__3.call(this,year,month,day);
case 4:
return date_time__4.call(this,year,month,day,hour);
case 5:
return date_time__5.call(this,year,month,day,hour,minute);
case 6:
return date_time__6.call(this,year,month,day,hour,minute,second);
case 7:
return date_time__7.call(this,year,month,day,hour,minute,second,millis);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_time.cljs$core$IFn$_invoke$arity$1 = date_time__1;
date_time.cljs$core$IFn$_invoke$arity$2 = date_time__2;
date_time.cljs$core$IFn$_invoke$arity$3 = date_time__3;
date_time.cljs$core$IFn$_invoke$arity$4 = date_time__4;
date_time.cljs$core$IFn$_invoke$arity$5 = date_time__5;
date_time.cljs$core$IFn$_invoke$arity$6 = date_time__6;
date_time.cljs$core$IFn$_invoke$arity$7 = date_time__7;
return date_time;
})()
;
/**
* Constructs and returns a new local DateTime.
* Specify the year, month of year, day of month, hour of day, minute of hour,
* second of minute, and millisecond of second. Note that month and day are
* 1-indexed while hour, second, minute, and millis are 0-indexed.
* Any number of least-significant components can be ommited, in which case
* they will default to 1 or 0 as appropriate.
*/
cljs_time.core.local_date_time = (function() {
var local_date_time = null;
var local_date_time__1 = (function (year){
return local_date_time.cljs$core$IFn$_invoke$arity$7(year,(1),(1),(0),(0),(0),(0));
});
var local_date_time__2 = (function (year,month){
return local_date_time.cljs$core$IFn$_invoke$arity$7(year,month,(1),(0),(0),(0),(0));
});
var local_date_time__3 = (function (year,month,day){
return local_date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,(0),(0),(0),(0));
});
var local_date_time__4 = (function (year,month,day,hour){
return local_date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,hour,(0),(0),(0));
});
var local_date_time__5 = (function (year,month,day,hour,minute){
return local_date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,hour,minute,(0),(0));
});
var local_date_time__6 = (function (year,month,day,hour,minute,second){
return local_date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,hour,minute,second,(0));
});
var local_date_time__7 = (function (year,month,day,hour,minute,second,millis){
return (new goog.date.DateTime(year,(month - (1)),day,hour,minute,second,millis));
});
local_date_time = function(year,month,day,hour,minute,second,millis){
switch(arguments.length){
case 1:
return local_date_time__1.call(this,year);
case 2:
return local_date_time__2.call(this,year,month);
case 3:
return local_date_time__3.call(this,year,month,day);
case 4:
return local_date_time__4.call(this,year,month,day,hour);
case 5:
return local_date_time__5.call(this,year,month,day,hour,minute);
case 6:
return local_date_time__6.call(this,year,month,day,hour,minute,second);
case 7:
return local_date_time__7.call(this,year,month,day,hour,minute,second,millis);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
local_date_time.cljs$core$IFn$_invoke$arity$1 = local_date_time__1;
local_date_time.cljs$core$IFn$_invoke$arity$2 = local_date_time__2;
local_date_time.cljs$core$IFn$_invoke$arity$3 = local_date_time__3;
local_date_time.cljs$core$IFn$_invoke$arity$4 = local_date_time__4;
local_date_time.cljs$core$IFn$_invoke$arity$5 = local_date_time__5;
local_date_time.cljs$core$IFn$_invoke$arity$6 = local_date_time__6;
local_date_time.cljs$core$IFn$_invoke$arity$7 = local_date_time__7;
return local_date_time;
})()
;
/**
* Constructs and returns a new local DateTime.
* Specify the year, month, and day. Does not deal with timezones.
*/
cljs_time.core.local_date = (function local_date(year,month,day){
return (new goog.date.Date(year,(month - (1)),day));
});
/**
* Constructs and returns a new local DateTime representing today's date.
* local DateTime objects do not deal with timezones at all.
*/
cljs_time.core.today = (function today(){
if(cljs.core.truth_(cljs_time.core._STAR_sys_time_STAR_)){
var d = cljs_time.core._STAR_sys_time_STAR_;
return (new goog.date.Date(d.getYear(),d.getMonth(),d.getDate()));
} else {
return (new goog.date.Date());
}
});
/**
* Returns a timezone map for the given offset, specified either in hours or
* hours and minutes.
*/
cljs_time.core.time_zone_for_offset = (function() {
var time_zone_for_offset = null;
var time_zone_for_offset__1 = (function (hours){
return time_zone_for_offset.cljs$core$IFn$_invoke$arity$2(hours,null);
});
var time_zone_for_offset__2 = (function (hours,minutes){
var sign = (((hours < (0)))?cljs.core.constant$keyword$159:cljs.core.constant$keyword$160);
var fmt = [cljs.core.str("UTC%s%02d"),cljs.core.str((cljs.core.truth_(minutes)?":%02d":null))].join('');
var hours__$1 = (((hours < (0)))?((-1) * hours):hours);
var tz_name = (cljs.core.truth_(minutes)?cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic(fmt,cljs.core.array_seq([cljs.core.name(sign),hours__$1,minutes], 0)):cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic(fmt,cljs.core.array_seq([cljs.core.name(sign),hours__$1], 0)));
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$119,tz_name,cljs.core.constant$keyword$161,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sign,hours__$1,(function (){var or__3815__auto__ = minutes;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return (0);
}
})(),(0)], null),cljs.core.constant$keyword$162,"-",cljs.core.constant$keyword$157,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tz_name], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$23,cljs.core.constant$keyword$163], null));
});
time_zone_for_offset = function(hours,minutes){
switch(arguments.length){
case 1:
return time_zone_for_offset__1.call(this,hours);
case 2:
return time_zone_for_offset__2.call(this,hours,minutes);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_zone_for_offset.cljs$core$IFn$_invoke$arity$1 = time_zone_for_offset__1;
time_zone_for_offset.cljs$core$IFn$_invoke$arity$2 = time_zone_for_offset__2;
return time_zone_for_offset;
})()
;
/**
* Returns the default timezone map for the current environment.
*/
cljs_time.core.default_time_zone = (function default_time_zone(){
var hours = (((-1) * (new goog.date.DateTime()).getTimezoneOffset()) / (60));
return cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$2((hours | (0)),cljs.core.mod(hours,(1)));
});
/**
* Assuming `dt` is in the UTC timezone, returns a DateTime
* corresponding to the same absolute instant in time as the given
* DateTime, but with calendar fields corresponding to in the default
* (local) timezone.
*/
cljs_time.core.to_default_time_zone = (function to_default_time_zone(dt){
return (new goog.date.DateTime(dt));
});
/**
* Assuming `dt` is in the UTC timezone, returns a DateTime
* corresponding to the same point in calendar time as the given
* DateTime, but for a correspondingly different absolute instant in
* time in the default (local) timezone.
* 
* Note: This implementation uses the ECMAScript 5.1 implementation which
* trades some historical daylight savings transition accuracy for simplicity.
* see http://es5.github.io/#x15.9.1.8
* 
*/
cljs_time.core.from_default_time_zone = (function from_default_time_zone(dt){
return (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate(),dt.getHours(),dt.getMinutes(),dt.getSeconds(),dt.getMilliseconds()));
});
/**
* Given a number, returns a Period representing that many years.
* Without an argument, returns a Period representing only years.
*/
cljs_time.core.years = (function() {
var years = null;
var years__0 = (function (){
return years.cljs$core$IFn$_invoke$arity$1(null);
});
var years__1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$150,n);
});
years = function(n){
switch(arguments.length){
case 0:
return years__0.call(this);
case 1:
return years__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
years.cljs$core$IFn$_invoke$arity$0 = years__0;
years.cljs$core$IFn$_invoke$arity$1 = years__1;
return years;
})()
;
/**
* Given a number, returns a Period representing that many months.
* Without an argument, returns a Period representing only months.
*/
cljs_time.core.months = (function() {
var months = null;
var months__0 = (function (){
return months.cljs$core$IFn$_invoke$arity$1(null);
});
var months__1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$149,n);
});
months = function(n){
switch(arguments.length){
case 0:
return months__0.call(this);
case 1:
return months__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
months.cljs$core$IFn$_invoke$arity$0 = months__0;
months.cljs$core$IFn$_invoke$arity$1 = months__1;
return months;
})()
;
/**
* Given a number, returns a Period representing that many weeks.
* Without an argument, returns a Period representing only weeks.
*/
cljs_time.core.weeks = (function() {
var weeks = null;
var weeks__0 = (function (){
return weeks.cljs$core$IFn$_invoke$arity$1(null);
});
var weeks__1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$153,n);
});
weeks = function(n){
switch(arguments.length){
case 0:
return weeks__0.call(this);
case 1:
return weeks__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
weeks.cljs$core$IFn$_invoke$arity$0 = weeks__0;
weeks.cljs$core$IFn$_invoke$arity$1 = weeks__1;
return weeks;
})()
;
/**
* Given a number, returns a Period representing that many days.
* Without an argument, returns a Period representing only days.
*/
cljs_time.core.days = (function() {
var days = null;
var days__0 = (function (){
return days.cljs$core$IFn$_invoke$arity$1(null);
});
var days__1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$148,n);
});
days = function(n){
switch(arguments.length){
case 0:
return days__0.call(this);
case 1:
return days__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
days.cljs$core$IFn$_invoke$arity$0 = days__0;
days.cljs$core$IFn$_invoke$arity$1 = days__1;
return days;
})()
;
/**
* Given a number, returns a Period representing that many hours.
* Without an argument, returns a Period representing only hours.
*/
cljs_time.core.hours = (function() {
var hours = null;
var hours__0 = (function (){
return hours.cljs$core$IFn$_invoke$arity$1(null);
});
var hours__1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$147,n);
});
hours = function(n){
switch(arguments.length){
case 0:
return hours__0.call(this);
case 1:
return hours__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hours.cljs$core$IFn$_invoke$arity$0 = hours__0;
hours.cljs$core$IFn$_invoke$arity$1 = hours__1;
return hours;
})()
;
/**
* Given a number, returns a Period representing that many minutes.
* Without an argument, returns a Period representing only minutes.
*/
cljs_time.core.minutes = (function() {
var minutes = null;
var minutes__0 = (function (){
return minutes.cljs$core$IFn$_invoke$arity$1(null);
});
var minutes__1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$146,n);
});
minutes = function(n){
switch(arguments.length){
case 0:
return minutes__0.call(this);
case 1:
return minutes__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
minutes.cljs$core$IFn$_invoke$arity$0 = minutes__0;
minutes.cljs$core$IFn$_invoke$arity$1 = minutes__1;
return minutes;
})()
;
/**
* Given a number, returns a Period representing that many seconds.
* Without an argument, returns a Period representing only seconds.
*/
cljs_time.core.seconds = (function() {
var seconds = null;
var seconds__0 = (function (){
return seconds.cljs$core$IFn$_invoke$arity$1(null);
});
var seconds__1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$145,n);
});
seconds = function(n){
switch(arguments.length){
case 0:
return seconds__0.call(this);
case 1:
return seconds__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
seconds.cljs$core$IFn$_invoke$arity$0 = seconds__0;
seconds.cljs$core$IFn$_invoke$arity$1 = seconds__1;
return seconds;
})()
;
/**
* Given a number, returns a Period representing that many milliseconds.
* Without an argument, returns a Period representing only milliseconds.
*/
cljs_time.core.millis = (function() {
var millis = null;
var millis__0 = (function (){
return millis.cljs$core$IFn$_invoke$arity$1(null);
});
var millis__1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$144,n);
});
millis = function(n){
switch(arguments.length){
case 0:
return millis__0.call(this);
case 1:
return millis__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
millis.cljs$core$IFn$_invoke$arity$0 = millis__0;
millis.cljs$core$IFn$_invoke$arity$1 = millis__1;
return millis;
})()
;
/**
* Returns a new date/time corresponding to the given date/time moved
* forwards by the given Period(s).
* @param {...*} var_args
*/
cljs_time.core.plus = (function() {
var plus = null;
var plus__2 = (function (dt,p){
return cljs_time.core.plus_(dt,p);
});
var plus__3 = (function() { 
var G__34420__delegate = function (dt,p,ps){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs_time.core.plus_,cljs_time.core.plus_(dt,p),ps);
};
var G__34420 = function (dt,p,var_args){
var ps = null;
if (arguments.length > 2) {
var G__34421__i = 0, G__34421__a = new Array(arguments.length -  2);
while (G__34421__i < G__34421__a.length) {G__34421__a[G__34421__i] = arguments[G__34421__i + 2]; ++G__34421__i;}
  ps = new cljs.core.IndexedSeq(G__34421__a,0);
} 
return G__34420__delegate.call(this,dt,p,ps);};
G__34420.cljs$lang$maxFixedArity = 2;
G__34420.cljs$lang$applyTo = (function (arglist__34422){
var dt = cljs.core.first(arglist__34422);
arglist__34422 = cljs.core.next(arglist__34422);
var p = cljs.core.first(arglist__34422);
var ps = cljs.core.rest(arglist__34422);
return G__34420__delegate(dt,p,ps);
});
G__34420.cljs$core$IFn$_invoke$arity$variadic = G__34420__delegate;
return G__34420;
})()
;
plus = function(dt,p,var_args){
var ps = var_args;
switch(arguments.length){
case 2:
return plus__2.call(this,dt,p);
default:
var G__34423 = null;
if (arguments.length > 2) {
var G__34424__i = 0, G__34424__a = new Array(arguments.length -  2);
while (G__34424__i < G__34424__a.length) {G__34424__a[G__34424__i] = arguments[G__34424__i + 2]; ++G__34424__i;}
G__34423 = new cljs.core.IndexedSeq(G__34424__a,0);
}
return plus__3.cljs$core$IFn$_invoke$arity$variadic(dt,p, G__34423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
plus.cljs$lang$maxFixedArity = 2;
plus.cljs$lang$applyTo = plus__3.cljs$lang$applyTo;
plus.cljs$core$IFn$_invoke$arity$2 = plus__2;
plus.cljs$core$IFn$_invoke$arity$variadic = plus__3.cljs$core$IFn$_invoke$arity$variadic;
return plus;
})()
;
/**
* Returns a new date/time object corresponding to the given date/time
* moved backwards by the given Period(s).
* @param {...*} var_args
*/
cljs_time.core.minus = (function() {
var minus = null;
var minus__2 = (function (dt,p){
return cljs_time.core.minus_(dt,p);
});
var minus__3 = (function() { 
var G__34425__delegate = function (dt,p,ps){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs_time.core.minus_,cljs_time.core.minus_(dt,p),ps);
};
var G__34425 = function (dt,p,var_args){
var ps = null;
if (arguments.length > 2) {
var G__34426__i = 0, G__34426__a = new Array(arguments.length -  2);
while (G__34426__i < G__34426__a.length) {G__34426__a[G__34426__i] = arguments[G__34426__i + 2]; ++G__34426__i;}
  ps = new cljs.core.IndexedSeq(G__34426__a,0);
} 
return G__34425__delegate.call(this,dt,p,ps);};
G__34425.cljs$lang$maxFixedArity = 2;
G__34425.cljs$lang$applyTo = (function (arglist__34427){
var dt = cljs.core.first(arglist__34427);
arglist__34427 = cljs.core.next(arglist__34427);
var p = cljs.core.first(arglist__34427);
var ps = cljs.core.rest(arglist__34427);
return G__34425__delegate(dt,p,ps);
});
G__34425.cljs$core$IFn$_invoke$arity$variadic = G__34425__delegate;
return G__34425;
})()
;
minus = function(dt,p,var_args){
var ps = var_args;
switch(arguments.length){
case 2:
return minus__2.call(this,dt,p);
default:
var G__34428 = null;
if (arguments.length > 2) {
var G__34429__i = 0, G__34429__a = new Array(arguments.length -  2);
while (G__34429__i < G__34429__a.length) {G__34429__a[G__34429__i] = arguments[G__34429__i + 2]; ++G__34429__i;}
G__34428 = new cljs.core.IndexedSeq(G__34429__a,0);
}
return minus__3.cljs$core$IFn$_invoke$arity$variadic(dt,p, G__34428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
minus.cljs$lang$maxFixedArity = 2;
minus.cljs$lang$applyTo = minus__3.cljs$lang$applyTo;
minus.cljs$core$IFn$_invoke$arity$2 = minus__2;
minus.cljs$core$IFn$_invoke$arity$variadic = minus__3.cljs$core$IFn$_invoke$arity$variadic;
return minus;
})()
;
/**
* Returns a DateTime a supplied period before the present.
* 
* e.g. `(-> 5 years ago)`
*/
cljs_time.core.ago = (function ago(period){
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.now(),period);
});
/**
* Returns a DateTime for yesterday relative to now
*/
cljs_time.core.yesterday = (function yesterday(){
return cljs_time.core.ago(cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((1)));
});
/**
* Returns a DateTime a supplied period after the present.
* e.g. `(-> 30 minutes from-now)`
*/
cljs_time.core.from_now = (function from_now(period){
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.now(),period);
});
/**
* Returns the earliest of the supplied DateTimes
*/
cljs_time.core.earliest = (function() {
var earliest = null;
var earliest__1 = (function (dts){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(earliest,dts);
});
var earliest__2 = (function (dt1,dt2){
if(cljs.core.truth_(cljs_time.core.before_QMARK_(dt1,dt2))){
return dt1;
} else {
return dt2;
}
});
earliest = function(dt1,dt2){
switch(arguments.length){
case 1:
return earliest__1.call(this,dt1);
case 2:
return earliest__2.call(this,dt1,dt2);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
earliest.cljs$core$IFn$_invoke$arity$1 = earliest__1;
earliest.cljs$core$IFn$_invoke$arity$2 = earliest__2;
return earliest;
})()
;
/**
* Returns the latest of the supplied DateTimes
*/
cljs_time.core.latest = (function() {
var latest = null;
var latest__1 = (function (dts){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(latest,dts);
});
var latest__2 = (function (dt1,dt2){
if(cljs.core.truth_(cljs_time.core.after_QMARK_(dt1,dt2))){
return dt1;
} else {
return dt2;
}
});
latest = function(dt1,dt2){
switch(arguments.length){
case 1:
return latest__1.call(this,dt1);
case 2:
return latest__2.call(this,dt1,dt2);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
latest.cljs$core$IFn$_invoke$arity$1 = latest__1;
latest.cljs$core$IFn$_invoke$arity$2 = latest__2;
return latest;
})()
;
/**
* Returns the start DateTime of an Interval.
*/
cljs_time.core.start = (function start(in$){
return cljs.core.constant$keyword$154.cljs$core$IFn$_invoke$arity$1(in$);
});
/**
* Returns the end DateTime of an Interval.
*/
cljs_time.core.end = (function end(in$){
return cljs.core.constant$keyword$155.cljs$core$IFn$_invoke$arity$1(in$);
});
/**
* Returns an Interval with an end DateTime the specified Period after the end
* of the given Interval
* @param {...*} var_args
*/
cljs_time.core.extend = (function() { 
var extend__delegate = function (in$,by){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(in$,cljs.core.constant$keyword$155,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs_time.core.plus,cljs_time.core.end(in$),by));
};
var extend = function (in$,var_args){
var by = null;
if (arguments.length > 1) {
var G__34430__i = 0, G__34430__a = new Array(arguments.length -  1);
while (G__34430__i < G__34430__a.length) {G__34430__a[G__34430__i] = arguments[G__34430__i + 1]; ++G__34430__i;}
  by = new cljs.core.IndexedSeq(G__34430__a,0);
} 
return extend__delegate.call(this,in$,by);};
extend.cljs$lang$maxFixedArity = 1;
extend.cljs$lang$applyTo = (function (arglist__34431){
var in$ = cljs.core.first(arglist__34431);
var by = cljs.core.rest(arglist__34431);
return extend__delegate(in$,by);
});
extend.cljs$core$IFn$_invoke$arity$variadic = extend__delegate;
return extend;
})()
;
cljs_time.core.month_range = (function month_range(p__34434){
var map__34436 = p__34434;
var map__34436__$1 = ((cljs.core.seq_QMARK_(map__34436))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34436):map__34436);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34436__$1,cljs.core.constant$keyword$155);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34436__$1,cljs.core.constant$keyword$154);
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (map__34436,map__34436__$1,end,start){
return (function (p1__34432_SHARP_){
return cljs_time.core.before_QMARK_(p1__34432_SHARP_,end);
});})(map__34436,map__34436__$1,end,start))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__34436,map__34436__$1,end,start){
return (function (p1__34433_SHARP_){
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(start,cljs_time.core.months.cljs$core$IFn$_invoke$arity$1((p1__34433_SHARP_ + (1))));
});})(map__34436,map__34436__$1,end,start))
,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
});
cljs_time.core.total_days_in_whole_months = (function total_days_in_whole_months(interval){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34437_SHARP_){
return p1__34437_SHARP_.getNumberOfDaysInMonth();
}),cljs_time.core.month_range(interval));
});
/**
* Returns the number of months in the given Interval.
* 
* For example, the interval 2nd Jan 2012 midnight to 2nd Feb 2012 midnight,
* returns 1 month.
* 
* Likewise, 29th Dec 2011 midnight to 29th Feb 2012 midnight returns 2 months.
* 
* But also, 31st Dec 2011 midnight to 29th Feb 2012 midnight returns 2 months.
* 
* And, 28th Dec 2012 midnight to 28th Feb 2013 midnight returns 2 months.
*/
cljs_time.core.in_months_ = (function in_months_(p__34438){
var map__34440 = p__34438;
var map__34440__$1 = ((cljs.core.seq_QMARK_(map__34440))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34440):map__34440);
var interval = map__34440__$1;
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34440__$1,cljs.core.constant$keyword$155);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34440__$1,cljs.core.constant$keyword$154);
return cljs.core.count(cljs_time.core.total_days_in_whole_months(interval));
});
/**
* Returns the number of standard years in the given Interval.
*/
cljs_time.core.in_years_ = (function in_years_(p__34441){
var map__34457 = p__34441;
var map__34457__$1 = ((cljs.core.seq_QMARK_(map__34457))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34457):map__34457);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34457__$1,cljs.core.constant$keyword$155);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34457__$1,cljs.core.constant$keyword$154);
var sm = cljs_time.core.month(start);
var sd = cljs_time.core.day(start);
var em = cljs_time.core.month(end);
var ed = cljs_time.core.day(end);
var d1 = (cljs.core.truth_((function (){var and__3803__auto__ = (function (){var G__34460 = sm;
var G__34461 = (2);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__34460,G__34461) : cljs_time.core._EQ_.call(null,G__34460,G__34461));
})();
if(cljs.core.truth_(and__3803__auto__)){
var and__3803__auto____$1 = (function (){var G__34464 = sd;
var G__34465 = (29);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__34464,G__34465) : cljs_time.core._EQ_.call(null,G__34464,G__34465));
})();
if(cljs.core.truth_(and__3803__auto____$1)){
var and__3803__auto____$2 = (function (){var G__34468 = em;
var G__34469 = (2);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__34468,G__34469) : cljs_time.core._EQ_.call(null,G__34468,G__34469));
})();
if(cljs.core.truth_(and__3803__auto____$2)){
var G__34470 = ed;
var G__34471 = (28);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__34470,G__34471) : cljs_time.core._EQ_.call(null,G__34470,G__34471));
} else {
return and__3803__auto____$2;
}
} else {
return and__3803__auto____$1;
}
} else {
return and__3803__auto__;
}
})())?(0):(cljs.core.truth_(cljs_time.core.before_QMARK_(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(cljs_time.core.year(start),sm,sd),cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(cljs_time.core.year(start),em,ed)))?(0):(cljs.core.truth_(cljs_time.core.after_QMARK_(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(cljs_time.core.year(start),sm,sd),cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(cljs_time.core.year(start),em,ed)))?(1):(0)
)));
return ((cljs_time.core.year(end) - cljs_time.core.year(start)) - d1);
});
cljs_time.core.conversion_error = (function conversion_error(from,to){
var from__$1 = clojure.string.capitalize(cljs.core.name(from));
var to__$1 = cljs.core.name(to);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic("%s cannot be converted to %s",cljs.core.array_seq([from__$1,to__$1], 0)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$23,cljs.core.constant$keyword$165], null));
});
cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$ = true;

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1 = (function (p__34472){
var map__34473 = p__34472;
var map__34473__$1 = ((cljs.core.seq_QMARK_(map__34473))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34473):map__34473);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34473__$1,cljs.core.constant$keyword$155);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34473__$1,cljs.core.constant$keyword$154);
var map__34474 = this;
var map__34474__$1 = ((cljs.core.seq_QMARK_(map__34474))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34474):map__34474);
var end__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34474__$1,cljs.core.constant$keyword$155);
var start__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34474__$1,cljs.core.constant$keyword$154);
return (end__$1.getTime() - start__$1.getTime());
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_millis(this$__$1) / (1000)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_seconds(this$__$1) / (60)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_minutes(this$__$1) / (60)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_days$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_hours(this$__$1) / (24)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_days(this$__$1) / (7)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_months$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.in_months_(this$__$1);
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_years$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.in_years_(this$__$1);
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$ = true;

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1 = (function (p__34475){
var map__34476 = p__34475;
var map__34476__$1 = ((cljs.core.seq_QMARK_(map__34476))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34476):map__34476);
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34476__$1,cljs.core.constant$keyword$150);
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34476__$1,cljs.core.constant$keyword$149);
var weeks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34476__$1,cljs.core.constant$keyword$153);
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34476__$1,cljs.core.constant$keyword$148);
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34476__$1,cljs.core.constant$keyword$147);
var minutes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34476__$1,cljs.core.constant$keyword$146);
var seconds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34476__$1,cljs.core.constant$keyword$145);
var millis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34476__$1,cljs.core.constant$keyword$144);
var map__34477 = this;
var map__34477__$1 = ((cljs.core.seq_QMARK_(map__34477))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34477):map__34477);
var years__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34477__$1,cljs.core.constant$keyword$150);
var months__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34477__$1,cljs.core.constant$keyword$149);
var weeks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34477__$1,cljs.core.constant$keyword$153);
var days__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34477__$1,cljs.core.constant$keyword$148);
var hours__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34477__$1,cljs.core.constant$keyword$147);
var minutes__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34477__$1,cljs.core.constant$keyword$146);
var seconds__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34477__$1,cljs.core.constant$keyword$145);
var millis__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34477__$1,cljs.core.constant$keyword$144);
if(cljs.core.truth_(months__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$149,cljs.core.constant$keyword$144);
} else {
if(cljs.core.truth_(years__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$150,cljs.core.constant$keyword$144);
} else {
return (((((millis__$1 + (seconds__$1 * (1000))) + ((minutes__$1 * (60)) * (1000))) + (((hours__$1 * (60)) * (60)) * (1000))) + ((((days__$1 * (24)) * (60)) * (60)) * (1000))) + (((((weeks__$1 * (7)) * (24)) * (60)) * (60)) * (1000)));

}
}
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_millis(this$__$1) / (1000)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_seconds(this$__$1) / (60)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_minutes(this$__$1) / (60)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_days$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_hours(this$__$1) / (24)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_days(this$__$1) / (7)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_months$arity$1 = (function (p__34478){
var map__34479 = p__34478;
var map__34479__$1 = ((cljs.core.seq_QMARK_(map__34479))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34479):map__34479);
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34479__$1,cljs.core.constant$keyword$150);
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34479__$1,cljs.core.constant$keyword$149);
var weeks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34479__$1,cljs.core.constant$keyword$153);
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34479__$1,cljs.core.constant$keyword$148);
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34479__$1,cljs.core.constant$keyword$147);
var minutes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34479__$1,cljs.core.constant$keyword$146);
var seconds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34479__$1,cljs.core.constant$keyword$145);
var millis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34479__$1,cljs.core.constant$keyword$144);
var map__34480 = this;
var map__34480__$1 = ((cljs.core.seq_QMARK_(map__34480))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34480):map__34480);
var years__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34480__$1,cljs.core.constant$keyword$150);
var months__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34480__$1,cljs.core.constant$keyword$149);
var weeks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34480__$1,cljs.core.constant$keyword$153);
var days__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34480__$1,cljs.core.constant$keyword$148);
var hours__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34480__$1,cljs.core.constant$keyword$147);
var minutes__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34480__$1,cljs.core.constant$keyword$146);
var seconds__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34480__$1,cljs.core.constant$keyword$145);
var millis__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34480__$1,cljs.core.constant$keyword$144);
if(cljs.core.truth_(millis__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$144,cljs.core.constant$keyword$149);
} else {
if(cljs.core.truth_(seconds__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$145,cljs.core.constant$keyword$149);
} else {
if(cljs.core.truth_(minutes__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$146,cljs.core.constant$keyword$149);
} else {
if(cljs.core.truth_(hours__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$147,cljs.core.constant$keyword$149);
} else {
if(cljs.core.truth_(days__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$148,cljs.core.constant$keyword$149);
} else {
if(cljs.core.truth_(weeks__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$153,cljs.core.constant$keyword$149);
} else {
if(cljs.core.truth_(months__$1)){
return (months__$1 + ((function (){var or__3815__auto__ = years__$1;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return (0);
}
})() * (12)));
} else {
if(cljs.core.truth_(years__$1)){
return (years__$1 * (12));
} else {
return null;
}
}
}
}
}
}
}
}
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_years$arity$1 = (function (p__34481){
var map__34482 = p__34481;
var map__34482__$1 = ((cljs.core.seq_QMARK_(map__34482))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34482):map__34482);
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34482__$1,cljs.core.constant$keyword$150);
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34482__$1,cljs.core.constant$keyword$149);
var weeks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34482__$1,cljs.core.constant$keyword$153);
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34482__$1,cljs.core.constant$keyword$148);
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34482__$1,cljs.core.constant$keyword$147);
var minutes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34482__$1,cljs.core.constant$keyword$146);
var seconds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34482__$1,cljs.core.constant$keyword$145);
var millis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34482__$1,cljs.core.constant$keyword$144);
var map__34483 = this;
var map__34483__$1 = ((cljs.core.seq_QMARK_(map__34483))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34483):map__34483);
var years__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34483__$1,cljs.core.constant$keyword$150);
var months__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34483__$1,cljs.core.constant$keyword$149);
var weeks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34483__$1,cljs.core.constant$keyword$153);
var days__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34483__$1,cljs.core.constant$keyword$148);
var hours__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34483__$1,cljs.core.constant$keyword$147);
var minutes__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34483__$1,cljs.core.constant$keyword$146);
var seconds__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34483__$1,cljs.core.constant$keyword$145);
var millis__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34483__$1,cljs.core.constant$keyword$144);
if(cljs.core.truth_(millis__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$144,cljs.core.constant$keyword$150);
} else {
if(cljs.core.truth_(seconds__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$145,cljs.core.constant$keyword$150);
} else {
if(cljs.core.truth_(minutes__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$146,cljs.core.constant$keyword$150);
} else {
if(cljs.core.truth_(hours__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$147,cljs.core.constant$keyword$150);
} else {
if(cljs.core.truth_(days__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$148,cljs.core.constant$keyword$150);
} else {
if(cljs.core.truth_(weeks__$1)){
return cljs_time.core.conversion_error(cljs.core.constant$keyword$153,cljs.core.constant$keyword$150);
} else {
if(cljs.core.truth_(months__$1)){
return (((months__$1 / (12)) + years__$1) | (0));
} else {
if(cljs.core.truth_(years__$1)){
return years__$1;
} else {
return null;
}
}
}
}
}
}
}
}
});
/**
* With 2 arguments: Returns true if the given Interval contains the given
* DateTime. Note that if the DateTime is exactly equal to the
* end of the interval, this function returns false.
* 
* With 3 arguments: Returns true if the start DateTime is
* equal to or before and the end DateTime is equal to or after the test
* DateTime.
*/
cljs_time.core.within_QMARK_ = (function() {
var within_QMARK_ = null;
var within_QMARK___2 = (function (p__34484,date){
var map__34493 = p__34484;
var map__34493__$1 = ((cljs.core.seq_QMARK_(map__34493))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34493):map__34493);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34493__$1,cljs.core.constant$keyword$155);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34493__$1,cljs.core.constant$keyword$154);
return within_QMARK_.cljs$core$IFn$_invoke$arity$3(start,end,date);
});
var within_QMARK___3 = (function (start,end,date){
var or__3815__auto__ = (function (){var G__34496 = start;
var G__34497 = date;
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__34496,G__34497) : cljs_time.core._EQ_.call(null,G__34496,G__34497));
})();
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
var and__3803__auto__ = cljs_time.core.before_QMARK_(start,date);
if(cljs.core.truth_(and__3803__auto__)){
return cljs_time.core.after_QMARK_(end,date);
} else {
return and__3803__auto__;
}
}
});
within_QMARK_ = function(start,end,date){
switch(arguments.length){
case 2:
return within_QMARK___2.call(this,start,end);
case 3:
return within_QMARK___3.call(this,start,end,date);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
within_QMARK_.cljs$core$IFn$_invoke$arity$2 = within_QMARK___2;
within_QMARK_.cljs$core$IFn$_invoke$arity$3 = within_QMARK___3;
return within_QMARK_;
})()
;
/**
* With 2 arguments: Returns true of the two given Intervals overlap.
* Note that intervals that satisfy abuts? do not satisfy overlaps?
* 
* With 4 arguments: Returns true if the range specified by start-a and end-a
* overlaps with the range specified by start-b and end-b.
*/
cljs_time.core.overlaps_QMARK_ = (function() {
var overlaps_QMARK_ = null;
var overlaps_QMARK___2 = (function (p__34498,p__34499){
var map__34528 = p__34498;
var map__34528__$1 = ((cljs.core.seq_QMARK_(map__34528))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34528):map__34528);
var start_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34528__$1,cljs.core.constant$keyword$154);
var end_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34528__$1,cljs.core.constant$keyword$155);
var map__34529 = p__34499;
var map__34529__$1 = ((cljs.core.seq_QMARK_(map__34529))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34529):map__34529);
var start_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34529__$1,cljs.core.constant$keyword$154);
var end_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34529__$1,cljs.core.constant$keyword$155);
var and__3803__auto__ = cljs.core.not((function (){var or__3815__auto__ = (function (){var G__34538 = start_a;
var G__34539 = end_b;
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__34538,G__34539) : cljs_time.core._EQ_.call(null,G__34538,G__34539));
})();
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
var G__34540 = end_a;
var G__34541 = start_b;
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__34540,G__34541) : cljs_time.core._EQ_.call(null,G__34540,G__34541));
}
})());
if(and__3803__auto__){
return overlaps_QMARK_.cljs$core$IFn$_invoke$arity$4(start_a,end_a,start_b,end_b);
} else {
return and__3803__auto__;
}
});
var overlaps_QMARK___4 = (function (start_a,end_a,start_b,end_b){
var or__3815__auto__ = (function (){var and__3803__auto__ = cljs_time.core.before_QMARK_(start_b,end_a);
if(cljs.core.truth_(and__3803__auto__)){
return cljs_time.core.after_QMARK_(end_b,start_a);
} else {
return and__3803__auto__;
}
})();
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (function (){var and__3803__auto__ = cljs_time.core.after_QMARK_(end_b,start_a);
if(cljs.core.truth_(and__3803__auto__)){
return cljs_time.core.before_QMARK_(start_b,end_a);
} else {
return and__3803__auto__;
}
})();
if(cljs.core.truth_(or__3815__auto____$1)){
return or__3815__auto____$1;
} else {
var or__3815__auto____$2 = (function (){var G__34544 = start_a;
var G__34545 = end_b;
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__34544,G__34545) : cljs_time.core._EQ_.call(null,G__34544,G__34545));
})();
if(cljs.core.truth_(or__3815__auto____$2)){
return or__3815__auto____$2;
} else {
var G__34546 = start_b;
var G__34547 = end_a;
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__34546,G__34547) : cljs_time.core._EQ_.call(null,G__34546,G__34547));
}
}
}
});
overlaps_QMARK_ = function(start_a,end_a,start_b,end_b){
switch(arguments.length){
case 2:
return overlaps_QMARK___2.call(this,start_a,end_a);
case 4:
return overlaps_QMARK___4.call(this,start_a,end_a,start_b,end_b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
overlaps_QMARK_.cljs$core$IFn$_invoke$arity$2 = overlaps_QMARK___2;
overlaps_QMARK_.cljs$core$IFn$_invoke$arity$4 = overlaps_QMARK___4;
return overlaps_QMARK_;
})()
;
/**
* Returns true if Interval a abuts b, i.e. then end of a is exactly the
* beginning of b.
*/
cljs_time.core.abuts_QMARK_ = (function abuts_QMARK_(p__34548,p__34549){
var map__34558 = p__34548;
var map__34558__$1 = ((cljs.core.seq_QMARK_(map__34558))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34558):map__34558);
var start_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34558__$1,cljs.core.constant$keyword$154);
var end_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34558__$1,cljs.core.constant$keyword$155);
var map__34559 = p__34549;
var map__34559__$1 = ((cljs.core.seq_QMARK_(map__34559))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34559):map__34559);
var start_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34559__$1,cljs.core.constant$keyword$154);
var end_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34559__$1,cljs.core.constant$keyword$155);
var or__3815__auto__ = (function (){var G__34562 = start_a;
var G__34563 = end_b;
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__34562,G__34563) : cljs_time.core._EQ_.call(null,G__34562,G__34563));
})();
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
var G__34564 = end_a;
var G__34565 = start_b;
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__34564,G__34565) : cljs_time.core._EQ_.call(null,G__34564,G__34565));
}
});
cljs_time.core.date_QMARK_ = (function date_QMARK_(x){
var G__34567 = x;
if(G__34567){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__34567.cljs_time$core$DateTimeProtocol$;
}
})())){
return true;
} else {
if((!G__34567.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs_time.core.DateTimeProtocol,G__34567);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs_time.core.DateTimeProtocol,G__34567);
}
});
cljs_time.core.interval_QMARK_ = (function interval_QMARK_(x){
return (x instanceof cljs_time.core.Interval);
});
cljs_time.core.period_QMARK_ = (function period_QMARK_(x){
return (x instanceof cljs_time.core.Period);
});
cljs_time.core.period_type_QMARK_ = (function period_type_QMARK_(type,x){
return (cljs_time.core.period_QMARK_(x)) && (cljs.core.contains_QMARK_(x,type));
});
/**
* Returns true if the given value is an instance of Years
*/
cljs_time.core.years_QMARK_ = (function years_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.constant$keyword$150,val);
});
/**
* Returns true if the given value is an instance of Months
*/
cljs_time.core.months_QMARK_ = (function months_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.constant$keyword$149,val);
});
/**
* Returns true if the given value is an instance of Weeks
*/
cljs_time.core.weeks_QMARK_ = (function weeks_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.constant$keyword$153,val);
});
/**
* Returns true if the given value is an instance of Days
*/
cljs_time.core.days_QMARK_ = (function days_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.constant$keyword$148,val);
});
/**
* Returns true if the given value is an instance of Hours
*/
cljs_time.core.hours_QMARK_ = (function hours_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.constant$keyword$147,val);
});
/**
* Returns true if the given value is an instance of Minutes
*/
cljs_time.core.minutes_QMARK_ = (function minutes_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.constant$keyword$146,val);
});
/**
* Returns true if the given value is an instance of Seconds
*/
cljs_time.core.seconds_QMARK_ = (function seconds_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.constant$keyword$145,val);
});
cljs_time.core.mins_ago = (function mins_ago(d){
return cljs_time.core.in_minutes(cljs_time.core.interval(d,cljs_time.core.now()));
});
cljs_time.core.last_day_of_the_month = (function() {
var last_day_of_the_month = null;
var last_day_of_the_month__1 = (function (dt){
return cljs_time.core.last_day_of_the_month_(dt);
});
var last_day_of_the_month__2 = (function (year,month){
return cljs_time.core.last_day_of_the_month_(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$2(year,month));
});
last_day_of_the_month = function(year,month){
switch(arguments.length){
case 1:
return last_day_of_the_month__1.call(this,year);
case 2:
return last_day_of_the_month__2.call(this,year,month);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
last_day_of_the_month.cljs$core$IFn$_invoke$arity$1 = last_day_of_the_month__1;
last_day_of_the_month.cljs$core$IFn$_invoke$arity$2 = last_day_of_the_month__2;
return last_day_of_the_month;
})()
;
cljs_time.core.number_of_days_in_the_month = (function() {
var number_of_days_in_the_month = null;
var number_of_days_in_the_month__1 = (function (dt){
return number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$2(cljs_time.core.year(dt),cljs_time.core.month(dt));
});
var number_of_days_in_the_month__2 = (function (year,month){
return cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$2(year,month).getDate();
});
number_of_days_in_the_month = function(year,month){
switch(arguments.length){
case 1:
return number_of_days_in_the_month__1.call(this,year);
case 2:
return number_of_days_in_the_month__2.call(this,year,month);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$1 = number_of_days_in_the_month__1;
number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$2 = number_of_days_in_the_month__2;
return number_of_days_in_the_month;
})()
;
cljs_time.core.first_day_of_the_month = (function() {
var first_day_of_the_month = null;
var first_day_of_the_month__1 = (function (dt){
return cljs_time.core.first_day_of_the_month_(dt);
});
var first_day_of_the_month__2 = (function (year,month){
return cljs_time.core.first_day_of_the_month_(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$2(year,month));
});
first_day_of_the_month = function(year,month){
switch(arguments.length){
case 1:
return first_day_of_the_month__1.call(this,year);
case 2:
return first_day_of_the_month__2.call(this,year,month);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
first_day_of_the_month.cljs$core$IFn$_invoke$arity$1 = first_day_of_the_month__1;
first_day_of_the_month.cljs$core$IFn$_invoke$arity$2 = first_day_of_the_month__2;
return first_day_of_the_month;
})()
;
cljs_time.core.__GT_period = (function (){var method_table__4712__auto__ = (function (){var G__34570 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34570) : cljs.core.atom.call(null,G__34570));
})();
var prefer_table__4713__auto__ = (function (){var G__34571 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34571) : cljs.core.atom.call(null,G__34571));
})();
var method_cache__4714__auto__ = (function (){var G__34572 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34572) : cljs.core.atom.call(null,G__34572));
})();
var cached_hierarchy__4715__auto__ = (function (){var G__34573 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34573) : cljs.core.atom.call(null,G__34573));
})();
var hierarchy__4716__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$166,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs-time.core","->period"),cljs.core.type,cljs.core.constant$keyword$7,hierarchy__4716__auto__,method_table__4712__auto__,prefer_table__4713__auto__,method_cache__4714__auto__,cached_hierarchy__4715__auto__));
})();
cljs_time.core.__GT_period.cljs$core$IMultiFn$_add_method$arity$3(null,cljs_time.core.Interval,(function (p__34574){
var map__34575 = p__34574;
var map__34575__$1 = ((cljs.core.seq_QMARK_(map__34575))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34575):map__34575);
var interval = map__34575__$1;
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34575__$1,cljs.core.constant$keyword$155);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34575__$1,cljs.core.constant$keyword$154);
var years = cljs_time.core.in_years(interval);
var start_year = cljs_time.core.year(start);
var leap_years = cljs.core.count(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.false_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_time.internal.core.leap_year_QMARK_,cljs.core.range.cljs$core$IFn$_invoke$arity$2(start_year,(start_year + years)))));
var start_month = cljs_time.core.month(start);
var days_in_months = cljs_time.core.total_days_in_whole_months(interval);
var months = cljs.core.count(days_in_months);
var days_to_remove = ((((365) * years) + leap_years) + cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,days_in_months));
var days = (cljs_time.core.in_days(interval) - days_to_remove);
var hours_to_remove = ((24) * (days + days_to_remove));
var hours = (cljs_time.core.in_hours(interval) - hours_to_remove);
var minutes_to_remove = ((60) * (hours + hours_to_remove));
var minutes = (cljs_time.core.in_minutes(interval) - minutes_to_remove);
var seconds_to_remove = ((60) * (minutes + minutes_to_remove));
var seconds = (cljs_time.core.in_seconds(interval) - seconds_to_remove);
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$150,years,cljs.core.array_seq([cljs.core.constant$keyword$149,months,cljs.core.constant$keyword$148,days,cljs.core.constant$keyword$147,hours,cljs.core.constant$keyword$146,minutes,cljs.core.constant$keyword$145,seconds,cljs.core.constant$keyword$144,(cljs_time.core.in_millis(interval) - ((1000) * (seconds + seconds_to_remove)))], 0));
}));
cljs_time.core.__GT_period.cljs$core$IMultiFn$_add_method$arity$3(null,cljs_time.core.Period,(function (period){
return period;
}));
cljs_time.core.today_at = (function() {
var today_at = null;
var today_at__2 = (function (hours,minutes){
return today_at.cljs$core$IFn$_invoke$arity$3(hours,minutes,(0));
});
var today_at__3 = (function (hours,minutes,seconds){
return today_at.cljs$core$IFn$_invoke$arity$4(hours,minutes,seconds,(0));
});
var today_at__4 = (function (hours,minutes,seconds,millis){
var midnight = (new goog.date.Date());
var G__34584 = (new goog.date.UtcDateTime((0)));
G__34584.setYear(midnight.getYear());

G__34584.setMonth(midnight.getMonth());

G__34584.setDate(midnight.getDate());

G__34584.setHours(hours);

G__34584.setMinutes(minutes);

G__34584.setSeconds(seconds);

G__34584.setMilliseconds(millis);

return G__34584;
});
today_at = function(hours,minutes,seconds,millis){
switch(arguments.length){
case 2:
return today_at__2.call(this,hours,minutes);
case 3:
return today_at__3.call(this,hours,minutes,seconds);
case 4:
return today_at__4.call(this,hours,minutes,seconds,millis);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
today_at.cljs$core$IFn$_invoke$arity$2 = today_at__2;
today_at.cljs$core$IFn$_invoke$arity$3 = today_at__3;
today_at.cljs$core$IFn$_invoke$arity$4 = today_at__4;
return today_at;
})()
;
cljs_time.core.do_at_STAR_ = (function do_at_STAR_(base_date_time,body_fn){
var _STAR_sys_time_STAR_34586 = cljs_time.core._STAR_sys_time_STAR_;
cljs_time.core._STAR_sys_time_STAR_ = base_date_time;

try{return (body_fn.cljs$core$IFn$_invoke$arity$0 ? body_fn.cljs$core$IFn$_invoke$arity$0() : body_fn.call(null));
}finally {cljs_time.core._STAR_sys_time_STAR_ = _STAR_sys_time_STAR_34586;
}});

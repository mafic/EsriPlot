// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/DateTimeTextBox","dojo/_base/lang dojo/_base/declare dojo/date/locale dojo/sniff dojo/keys ../kernel ../renderers/utils ./_EventedWidget dijit/form/_DateTimeTextBox dijit/form/ValidationTextBox".split(" "),function(g,h,k,n,p,q,l,t,m,r){h=h([r],{declaredClass:"esri.dijit.DateTimeTextBox",value:null,date:null,_timeSeparator:", ",_dateFormatOptions:{dateOptions:{formatLength:"short",selector:"date",fullYear:!0},timeOptions:{formatLength:"short",selector:"time"}},constructor:function(a,
b){this._getValidDateTimeRE=g.hitch(this,this._getValidDateTimeRE);this.set("pattern",this._getValidDateTimeRE);this.set("invalidMessage",this._getInvalidMessage())},postCreate:function(){this.inherited(arguments);this.own(this.on("change",g.hitch(this,this._valueChangeHandler)),this.on("keydown",g.hitch(this,this._keydownHandler)))},format:function(a){return this._formatDate(a)},parse:function(a,b){a=this._parseDateString(a,b);return a.isValid?new Date(a.value):void 0},compare:m.prototype.compare,
_isInvalidDate:m.prototype._isInvalidDate,_setDateAttr:function(a){this._set("date",a);this.set("value",a)},_valueChangeHandler:function(a){this.isValid()&&this.set("date",a)},_keydownHandler:function(a){a.keyCode===p.ENTER&&this._commitValueToDate()},_commitValueToDate:function(){var a=this._parseDateString(this.textbox.value);a.isValid&&this.set("value",new Date(a.value))},_formatDate:function(a){var b="";a instanceof Date&&(a=a.getTime());"number"!==typeof a||isNaN(a)||(b=l.formatDate(a,{selector:"date",
dateOptions:this._dateFormatOptions.dateOptions}),a=l.formatDate(a,{selector:"time",timeOptions:this._dateFormatOptions.timeOptions}),b=this._mergeDateTime(b,a));return b},_parseDateString:function(a,b){b=b||{};var d=(a||"").split(this._timeSeparator);a=d[1];var c=k.parse(d[0],this._dateFormatOptions.dateOptions),d=k.parse(a,this._dateFormatOptions.timeOptions),e=!1,f=b.min;b=b.max;c=c&&c.getTime();"number"!==typeof c||isNaN(c)?c=null:d?(a=d&&d.getTime(),"number"!==typeof a||isNaN(a)||(a-=6E4*d.getTimezoneOffset(),
c+=a,e=!0)):e=!a;e&&(f=f&&f.getTime(),b=b&&b.getTime(),"number"!==typeof f||isNaN(f)||c<f&&(e=!1),"number"!==typeof b||isNaN(b)||c>b&&(e=!1));return{isValid:e,value:c}},_getValidDateTimeRE:function(){var a=k.regexp(this._dateFormatOptions.dateOptions),b=k.regexp(this._dateFormatOptions.timeOptions);return a+"(,\\s"+b+")?"},_getInvalidMessage:function(){return this._formatDate(new Date(0))},_mergeDateTime:function(a,b){return a+(b?this._timeSeparator+b:"")}});n("extend-esri")&&g.setObject("dijit.DateTimeTextBox",
h,q);return h});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/templates/CreditEstimator.html":'\x3cdiv class\x3d"esriAnalysis esriSimpleForm"\x3e\r\n  \x3ctable class\x3d"esriFormTable"  data-dojo-attach-point\x3d"_table"  style\x3d"border-collapse:collapse;border-spacing:5px;"\x3e\r\n     \x3c!--\x3ctr\x3e\r\n      \x3ctd\x3e\r\n        \x3clabel class\x3d"esriFloatLeading"\x3e${i18n.analysisLayersLabel}\x3c/label\x3e\r\n      \x3c/td\x3e\r\n      \x3ctd\x3e\r\n      \x3c/td\x3e\r\n    \x3c/tr\x3e--\x3e\r\n     \x3ctr\x3e\r\n      \x3ctd\x3e\r\n        \x3clabel class\x3d"esriFloatLeading"\x3e${i18n.totalRecordsLabel}\x3c/label\x3e\r\n      \x3c/td\x3e\r\n      \x3ctd data-dojo-attach-point\x3d"_totalRecordsNode"\x3e\r\n      \x3c/td\x3e\r\n    \x3c/tr\x3e\r\n     \x3c!--\x3ctr\x3e\r\n      \x3ctd\x3e\r\n        \x3clabel class\x3d"esriFloatLeading"\x3e${i18n.creditsAvailLabel}\x3c/label\x3e\r\n      \x3c/td\x3e\r\n      \x3ctd\x3e\r\n      \x3c/td\x3e\r\n    \x3c/tr\x3e--\x3e\r\n     \x3ctr\x3e\r\n      \x3ctd\x3e\r\n        \x3clabel class\x3d"esriFloatLeading" data-dojo-attach-point\x3d"_costLabelNode"\x3e${i18n.creditsReqLabel}\x3c/label\x3e\r\n      \x3c/td\x3e\r\n      \x3ctd data-dojo-attach-point\x3d"_creditsReqNode"\x3e\r\n      \x3c/td\x3e\r\n    \x3c/tr\x3e\r\n  \x3c/table\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"_messageDiv"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/analysis/CreditEstimator","require dojo/_base/declare dojo/_base/lang dojo/_base/connect dojo/_base/event dojo/_base/kernel dojo/has dojo/dom-construct dojo/dom-class dojo/dom-attr dojo/dom-style dojo/string dojo/number dijit/_WidgetBase dijit/_TemplatedMixin dijit/_OnDijitClickMixin dijit/_FocusMixin ../../kernel ../../lang dojo/i18n!../../nls/jsapi dojo/text!./templates/CreditEstimator.html".split(" "),function(f,m,e,x,y,k,n,z,A,b,g,p,l,q,r,t,u,v,d,h,w){f=m([q,r,t,u],{declaredClass:"esri.dijit.analysis.CreditEstimator",
i18n:null,templateString:w,postMixInProperties:function(){this.inherited(arguments);this.i18n={};e.mixin(this.i18n,h.common);e.mixin(this.i18n,h.analysisMsgCodes);e.mixin(this.i18n,h.creditEstimator)},postCreate:function(){this.inherited(arguments)},_setContentAttr:function(a){var c="";a.code&&!a.messageCode&&(a.messageCode=a.code);a.messageCode?(c=d.isDefined(this.i18n[a.messageCode])?this.i18n[a.messageCode]:a.message,c=d.isDefined(a.params)?p.substitute(c,a.params):c,b.set(this._messageDiv,"display",
"block"),b.set(this._messageDiv,"innerHTML",c),g.set(this._table,"display","none")):(g.set(this._table,"display","table"),b.set(this._messageDiv,"display",d.isDefined(a.infoMessage)?"block":"none"),b.set(this._messageDiv,"innerHTML",d.isDefined(a.infoMessage)?a.infoMessage:""),d.isDefined(a.infoMessage)&&g.set(this._messageDiv,"margin-top","1em"),c=d.isDefined(a.cost)?a.cost:a.maximumCost,a.maximumCost&&b.set(this._costLabelNode,"innerHTML",this.i18n.maxCreditsLabel),b.set(this._totalRecordsNode,
"innerHTML",l.format(a.totalRecords,{locale:k.locale})),b.set(this._creditsReqNode,"innerHTML",l.format(c,{locale:k.locale})))}});n("extend-esri")&&e.setObject("dijit.analysis.CreditEstimator",f,v);return f});
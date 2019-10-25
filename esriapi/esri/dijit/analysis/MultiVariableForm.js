// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/templates/MultiVariableForm.html":'\x3cdiv class\x3d"esriAnalysis esriMultiVariableForm"\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"_form" readOnly\x3d"true"\x3e\r\n      \x3ctable class\x3d"esriFormTable"  data-dojo-attach-point\x3d"_aggregateTable"  style\x3d"border-collapse:collapse;border-spacing:5px;" cellpadding\x3d"5px" cellspacing\x3d"5px"\x3e\r\n         \x3ctbody\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_attrTypeRow"\x3e\r\n            \x3ctd  colspan\x3d"3" style\x3d"padding-top:0;"\x3e\r\n              \x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_attrTypeSelect" data-dojo-attach-event\x3d"onChange:_handleVariableTypeChange"\x3e\r\n                \x3coption value\x3d"DistanceToNearest"\x3e${i18n.distToNearest}\x3c/option\x3e\r\n                \x3coption value\x3d"AttributeOfNearest"\x3e${i18n.attrOfInterest}\x3c/option\x3e\r\n                \x3coption value\x3d"AttributeSummaryOfRelated"\x3e${i18n.summaryNearby}\x3c/option\x3e\r\n                \x3coption value\x3d"AttributeSummaryOfIntersect"\x3e${i18n.summaryIntersecting}\x3c/option\x3e\r\n              \x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_attrLabelRow"\x3e\r\n            \x3ctd colspan\x3d"3" style\x3d"padding-top:0;padding-bottom:0"\x3e\r\n              \x3clabel class\x3d"esriLeadingMargin2 esriSmallLabel" data-dojo-attach-point\x3d"_attrTypeLabel"\x3e\x3c/label\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_includeFieldLabelRow"\x3e\r\n            \x3ctd colspan\x3d"2"\x3e\r\n              \x3clabel class\x3d"esriLeadingMargin1" data-dojo-attach-point\x3d"_includeFieldLabel"\x3e${i18n.fieldToIncude}\x3c/label\x3e\r\n           \x3c/td\x3e\r\n           \x3c!--\x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom:0;"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' data-dojo-attach-point\x3d"_chooseAggHelp" esriHelpTopic\x3d""\x3e\x3c/a\x3e\r\n            \x3c/td\x3e--\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_includeFieldRow"\x3e\r\n            \x3ctd  colspan\x3d"3"\x3e\r\n              \x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel"  data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_includeFieldSelect" data-dojo-attach-event\x3d"onChange:_handleIncludeFieldChange"\x3e\r\n              \x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_statsLabelRow"\x3e\r\n            \x3ctd colspan\x3d"2"\x3e\r\n              \x3clabel class\x3d"esriLeadingMargin1"\x3e${i18n.statstoCalculate}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3c!--\x3ctd class\x3d"shortTextInput"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d""\x3e\x3c/a\x3e\r\n            \x3c/td\x3e--\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_afterStatsRow"\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_binCenterLabelRow"\x3e\r\n            \x3ctd colspan\x3d"2" style\x3d"padding-bottom:0;"\x3e\r\n              \x3clabel class\x3d"esriLeadingMargin1" data-dojo-attach-point\x3d"_binCenterLabel"\x3e${i18n.maxDistancefromCtr}\x3c/label\x3e\r\n           \x3c/td\x3e\r\n           \x3c!--\x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom:0;"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d""\x3e\x3c/a\x3e\r\n            \x3c/td\x3e--\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_binCenterUnitsRow"\x3e\r\n           \x3ctd style\x3d"width:50%;"\x3e\r\n              \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-props\x3d"intermediateChanges:true,value:\'5\',required:false,missingMessage:\'${i18n.distanceMsg}\'" data-dojo-attach-point\x3d"_binsInput" class\x3d"esriLeadingMargin1"  style\x3d"width:75%;"\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd colspan\x3d"2" style\x3d"width:50%;"\x3e\r\n              \x3cselect class\x3d"mediumInput esriAnalysisSelect" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_binUnits" style\x3d"width:80%;table-layout:fixed;"\x3e\r\n                 \x3coption value\x3d"NauticalMiles"\x3e${i18n.nautMiles}\x3c/option\x3e\r\n                 \x3coption value\x3d"Miles"\x3e${i18n.miles}\x3c/option\x3e\r\n                 \x3coption value\x3d"Yards"\x3e${i18n.yards}\x3c/option\x3e\r\n                 \x3coption value\x3d"Feet"\x3e${i18n.feet}\x3c/option\x3e\r\n                 \x3coption type\x3d"separator"\x3e\x3c/option\x3e\r\n                 \x3coption value\x3d"Kilometers"\x3e${i18n.kilometers}\x3c/option\x3e\r\n                 \x3coption value\x3d"Meters"\x3e${i18n.meters}\x3c/option\x3e\r\n              \x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n        \x3c/tbody\x3e\r\n       \x3c/table\x3e\r\n     \x3c/div\x3e\r\n    \x3cdiv class\x3d"esriFormWarning esriRoundedBox" data-dojo-attach-point\x3d"_errorMessagePane" style\x3d"display:none;"\x3e\r\n      \x3ca href\x3d"#" title\x3d"${i18n.close}" class\x3d"esriFloatTrailing esriAnalysisCloseIcon" data-dojo-attach-event\x3d"onclick:_handleCloseMsg"\x3e\x3c/a\x3e\r\n      \x3cspan data-dojo-attach-point\x3d"_bodyNode"\x3e\x3c/span\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n'}});
define("esri/dijit/analysis/MultiVariableForm","require dojo/aspect dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/_base/json dojo/has dojo/json dojo/string dojo/dom-style dojo/dom-attr dojo/dom-construct dojo/query dojo/dom-class dojo/on dojo/_base/fx dojo/fx/easing dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin dijit/registry dijit/form/Button dijit/form/CheckBox dijit/form/Form dijit/form/Select dijit/form/TextBox dijit/form/ToggleButton dijit/form/ValidationTextBox dijit/form/NumberTextBox dijit/layout/ContentPane dijit/form/FilteringSelect dijit/Dialog dijit/TitlePane dijit/InlineEditBox ../../kernel ../../lang ./utils dojo/i18n!../../nls/jsapi dojo/i18n!./nls/MultiVariableForm dojo/text!./templates/MultiVariableForm.html".split(" "),
function(k,F,t,e,n,G,H,u,I,J,l,m,f,K,v,L,p,q,w,x,y,z,A,M,N,O,P,r,Q,R,S,T,U,V,W,X,Y,B,Z,g,C,D,E){k=t([w,x,y,z,A],{declaredClass:"esri.dijit.analysis.MultiVariableForm",templateString:E,widgetsInTemplate:!0,distanceDefaultUnits:"Miles",inputLayer:null,type:"DistanceToNearest",outFieldName:"",searchDistance:0,searchDistanceUnit:null,statisticType:null,statisticField:null,emptyValue:"",i18n:null,constructor:function(a){this._pbConnects=[];a.containerNode&&(this.container=a.containerNode)},destroy:function(){this.inherited(arguments)},
postMixInProperties:function(){this.inherited(arguments);this.i18n={};e.mixin(this.i18n,C.common);e.mixin(this.i18n,D)},postCreate:function(){this.inherited(arguments);v.add(this._form.domNode,"esriSimpleForm");this.inputLayer&&this.inputLayer.fields&&0<this.inputLayer.fields.length&&(this.set("fields",this.inputLayer.fields),this._createStatsRow());this.fields&&g.addAttributeOptions({selectWidget:this._includeFieldSelect,layer:this.inputLayer,allowDateType:this.showGeoAnalyticsParams,allowStringType:this.showGeoAnalyticsParams});
this._loadConnections();this.type&&this._attrTypeSelect.set("value",this.type);this.searchDistanceUnit||(this.searchDistanceUnit=this.distanceDefaultUnits);this._binUnits.set("value",this.searchDistanceUnit);this._handleVariableTypeChange(this._attrTypeSelect.get("value"))},startup:function(){},validate:function(){var a=this._form.validate(),d="";this._handleCloseMsg();a&&"none"!==l.get(this._binCenterUnitsRow,"display")&&g.unitConversion(this.binSize,g.UNITSMAP[this.binSizeUnit],g.UNITSMAP[this._binUnits.get("value")])>=
this._binsInput.get("value")&&(a=!1,d="AttributeSummaryOfRelated"===this._attrTypeSelect.get("value")?this.i18n.smallSumFeaturesErrorMsg:this.i18n.smallMaxDistErrorMsg,this._showMessages(d));return a},_loadConnections:function(){this.own(this.watch("variable",e.hitch(this,this._handleVariableChange)))},_handleVariableChange:function(a,d,b){b&&(a=b.type,"AttributeSummaryOfRelated"===a&&0===b.searchDistance&&(a="AttributeSummaryOfIntersect"),this._attrTypeSelect.set("value",a),b.searchDistance&&(this._binsInput.set("value",
b.searchDistance),this._binUnits.set("value",b.searchDistanceUnit)),b.attributeField&&this._includeFieldSelect.set("value",b.attributeField),b.statisticType&&(this._attrSelect.set("value",b.statisticField),this._statsSelect.set("value",b.statisticType),this._initStat=!1))},_createStatsRow:function(){var a,d;f.create("tr",null,this._afterStatsRow,"before");d=f.create("td",{style:{width:"45%",maxWidth:"100px"}},this._afterStatsRow);a=f.create("td",{style:{width:"55%",maxWidth:"104px"}},this._afterStatsRow);
this._attrSelect=new r({maxHeight:200,"class":"esriLeadingMargin1 mediumInput esriTrailingMargin025 attrSelect",style:{tableLayout:"fixed",overflowX:"hidden"}},f.create("select",null,d));g.addAttributeOptions({selectWidget:this._attrSelect,layer:this.inputLayer,allowDateType:this.showGeoAnalyticsParams,allowStringType:this.showGeoAnalyticsParams});this._statsSelect=new r({"class":"mediumInput statsSelect",style:{tableLayout:"fixed",overflowX:"hidden"}},f.create("select",null,a));g.addStatisticsOptions({selectWidget:this._statsSelect,
showGeoAnalyticsParams:this.showGeoAnalyticsParams});this._attrSelect.set("statisticSelect",this._statsSelect);this._attrSelect.set("showGeoAnalyticsParams",this.showGeoAnalyticsParams);this._addAttrSelectChangeHandler()},_addAttrSelectChangeHandler:function(){this._attrSelect._changeHandle=this._attrSelect.on("change",e.hitch(this,this._handleAttrSelectChange))},_removeAttrSelectChangeHandler:function(){this._attrSelect&&this._attrSelect._changeHandle&&(this._attrSelect._changeHandle.remove(),this._attrSelect._changeHandle=
null)},_handleAttrSelectChange:function(a){a!==this.emptyValue&&((a=this._attrSelect.getOptions(a))&&a.type&&g.addStatisticsOptions({selectWidget:this._statsSelect,type:a.type,showGeoAnalyticsParams:this.showGeoAnalyticsParams}),!this._initStat&&this.variable&&this.variable.statisticType&&(this._statsSelect.set("value",this.variable.statisticType),this._initStat=!0))},_setInputLayerAttr:function(a){this.inputLayer=a},_setFieldsAttr:function(a){this.fields=a},_handleVariableTypeChange:function(a){var d=
"",b="",c=[],e=[],f=[],h=[];"DistanceToNearest"===a?(b=this.i18n.distToNearestLabel,d=this.i18n.maxDistancefromCtr,c=[this._includeFieldLabelRow,this._includeFieldRow,this._statsLabelRow,this._afterStatsRow],e=[this._binCenterLabelRow,this._binCenterUnitsRow],f=[this._binsInput,this._binUnits],h=[this._includeFieldSelect,this._attrSelect,this._statsSelect]):"AttributeOfNearest"===a?(b=this.i18n.attrOfInterestLabel,d=this.i18n.maxDistancefromCtr,c=[this._statsLabelRow,this._afterStatsRow],e=[this._includeFieldLabelRow,
this._includeFieldRow,this._binCenterLabelRow,this._binCenterUnitsRow],f=[this._binsInput,this._binUnits,this._includeFieldSelect],h=[this._attrSelect,this._statsSelect]):"AttributeSummaryOfRelated"===a?(b=this.i18n.summaryNearbyLabel,d=this.i18n.summFeatuesWithin,c=[this._includeFieldLabelRow,this._includeFieldRow],e=[this._statsLabelRow,this._afterStatsRow,this._binCenterLabelRow,this._binCenterUnitsRow],f=[this._binsInput,this._binUnits,this._attrSelect,this._statsSelect],h=[this._includeFieldSelect]):
"AttributeSummaryOfIntersect"===a&&(b=this.i18n.summaryIntersectingLabel,c=[this._includeFieldLabelRow,this._includeFieldRow,this._binCenterLabelRow,this._binCenterUnitsRow],e=[this._statsLabelRow,this._afterStatsRow],f=[this._attrSelect,this._statsSelect],h=[this._binsInput,this._binUnits,this._includeFieldSelect]);g.updateDisplay(c,!1,"table-row");g.updateDisplay(e,!0,"table-row");m.set(this._attrTypeLabel,"innerHTML",b);m.set(this._binCenterLabel,"innerHTML",d);n.forEach(f,function(a){a.set("required",
!0)});n.forEach(h,function(a){a.set("required",!1)})},_handleIncludeFieldChange:function(){},_showMessages:function(a){m.set(this._bodyNode,"innerHTML",a);p.fadeIn({node:this._errorMessagePane,easing:q.quadIn,onEnd:e.hitch(this,function(){l.set(this._errorMessagePane,{display:""})})}).play()},_handleCloseMsg:function(a){a&&a.preventDefault();p.fadeOut({node:this._errorMessagePane,easing:q.quadOut,onEnd:e.hitch(this,function(){l.set(this._errorMessagePane,{display:"none"})})}).play()},_getVariableAttr:function(){var a=
this._attrTypeSelect.get("value"),d=this._binsInput.get("value"),b=this._binUnits.get("value"),c={type:a,outFieldName:this.outFieldName};"DistanceToNearest"===a?(c.searchDistance=d,c.searchDistanceUnit=b):"AttributeOfNearest"===a?(c.attributeField=this._includeFieldSelect.get("value"),c.searchDistance=d,c.searchDistanceUnit=b):"AttributeSummaryOfRelated"===a?(c.statisticType=this._statsSelect.get("value"),c.statisticField=this._attrSelect.get("value"),c.searchDistance=d,c.searchDistanceUnit=b):"AttributeSummaryOfIntersect"===
a&&(c.type="AttributeSummaryOfRelated",c.statisticType=this._statsSelect.get("value"),c.statisticField=this._attrSelect.get("value"),c.searchDistance=0,c.searchDistanceUnit="Miles");return c},_setVariableAttr:function(a){this._set("variable",a)}});u("extend-esri")&&e.setObject("dijit.analysis.MultiVariableForm",k,B);return k});
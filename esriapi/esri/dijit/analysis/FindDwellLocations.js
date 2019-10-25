// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/templates/FindDwellLocations.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" style\x3d"margin-top:0.5em; margin-bottom: 0.5em;"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"_aggregateToolContentTitle" class\x3d"analysisTitle"\x3e\r\n        \x3ctable class\x3d"esriFormTable" \x3e \r\n          \x3ctr\x3e\r\n            \x3ctd class\x3d"esriToolIconTd"\x3e\x3cdiv class\x3d"reconstructIcon"\x3e\x3c/div\x3e\x3c/td\x3e\r\n            \x3ctd class\x3d"esriAlignLeading esriAnalysisTitle" data-dojo-attach-point\x3d"_toolTitle"\x3e\r\n              \x3clabel data-dojo-attach-point\x3d"_titleLbl"\x3e${i18n.findDwellLocations}\x3c/label\x3e\r\n              \x3cnav class\x3d"breadcrumbs"  data-dojo-attach-point\x3d"_analysisModeLblNode" style\x3d"display:none;"\x3e\r\n                \x3ca href\x3d"#" class\x3d"crumb breadcrumbs__modelabel" data-dojo-attach-event\x3d"onclick:_handleModeCrumbClick" data-dojo-attach-point\x3d"_analysisModeCrumb"\x3e\x3c/a\x3e\r\n                \x3ca href\x3d"#" class\x3d"crumb is-active" data-dojo-attach-point\x3d"_analysisTitleCrumb" style\x3d"font-size:16px;"\x3e${i18n.findDwellLocations}\x3c/a\x3e\r\n              \x3c/nav\x3e              \r\n            \x3c/td\x3e\r\n            \x3ctd\x3e\r\n              \x3cdiv class\x3d"esriFloatTrailing" style\x3d"padding:0;"\x3e\r\n                  \x3cdiv class\x3d"esriFloatLeading"\x3e\r\n                    \x3ca href\x3d"#" class\x3d\'esriFloatLeading helpIcon\' esriHelpTopic\x3d"toolDescription"\x3e\x3c/a\x3e\r\n                  \x3c/div\x3e\r\n                  \x3cdiv class\x3d"esriFloatTrailing"\x3e\r\n                    \x3ca href\x3d"#" data-dojo-attach-point\x3d"_closeBtn" title\x3d"${i18n.close}" class\x3d"esriAnalysisCloseIcon"\x3e\x3c/a\x3e\r\n                  \x3c/div\x3e              \r\n              \x3c/div\x3e                \r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n        \x3c/table\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv style\x3d"clear:both; border-bottom: #CCC thin solid; height:1px;width:100%;"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"_form" readOnly\x3d"true"\x3e\r\n       \x3ctable class\x3d"esriFormTable"  data-dojo-attach-point\x3d"_aggregateTable"  style\x3d"border-collapse:collapse;border-spacing:5px;" cellpadding\x3d"5px" cellspacing\x3d"5px"\x3e \r\n         \x3ctbody\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_titleRow"\x3e\r\n            \x3ctd  colspan\x3d"3" class\x3d"sectionHeader" data-dojo-attach-point\x3d"_toolDescription" \x3e\x3c/td\x3e\r\n          \x3c/tr\x3e \r\n          \x3ctr data-dojo-attach-point\x3d"_analysisLabelRow" style\x3d"display:none;"\x3e\r\n            \x3ctd colspan\x3d"2" style\x3d"padding-bottom:0;"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.inputLayerLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom:0;"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"inputLayer"\x3e\x3c/a\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e \r\n          \x3ctr data-dojo-attach-point\x3d"_selectAnalysisRow" style\x3d"display:none;"\x3e\r\n            \x3ctd  colspan\x3d"3" style\x3d"padding-top:0;" \x3e\r\n              \x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel"  style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_analysisSelect" data-dojo-attach-event\x3d"onChange:_handleAnalysisLayerChange"\x3e\x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"2" style\x3d"padding-bottom:0;"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.twoLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.selectTracksLabel}\x3c/label\x3e\r\n           \x3c/td\x3e\r\n           \x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom:0;"\x3e  \r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"trackFields"\x3e\x3c/a\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3" style\x3d"padding-top:0;"\x3e\r\n              \x3cselect multiple\x3d"true"  class\x3d"esriLeadingMargin1" style\x3d"width:100%;margin-top:10px;" data-dojo-props\x3d"required:true" data-dojo-type\x3d"dojox/form/CheckedMultiSelect" data-dojo-attach-point\x3d"_trackFieldSelect"\x3e\x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e \r\n          \x3ctr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"2" style\x3d"padding-bottom:0;"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.threeLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.defineDistanceLabel}\x3c/label\x3e\r\n           \x3c/td\x3e\r\n           \x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom:0;"\x3e  \r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"distanceTolerance"\x3e\x3c/a\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd style\x3d"padding-right:0;padding-bottom:0;width:50%;"\x3e\r\n              \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-props\x3d"constraints:{min:0},intermediateChanges:true,missingMessage:\'${i18n.distanceMsg}\'" data-dojo-attach-point\x3d"_distToleranceValue" class\x3d"esriLeadingMargin1"  style\x3d"width:75%;"/\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd colspan\x3d"2" style\x3d"padding-left:0.25em;padding-bottom:0;width:50%;"\x3e\r\n              \x3cselect class\x3d"mediumInput esriAnalysisSelect" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_distToleranceUnitSelect" style\x3d"width:80%;table-layout:fixed;"\x3e\r\n                \x3coption value\x3d"NauticalMiles"\x3e${i18n.nautMiles}\x3c/option\x3e\r\n                \x3coption value\x3d"Miles"\x3e${i18n.miles}\x3c/option\x3e\r\n                \x3coption value\x3d"Yards"\x3e${i18n.yards}\x3c/option\x3e\r\n                \x3coption value\x3d"Feet"\x3e${i18n.feet}\x3c/option\x3e\r\n                \x3coption type\x3d"separator"\x3e\x3c/option\x3e\r\n                \x3coption value\x3d"Kilometers"\x3e${i18n.kilometers}\x3c/option\x3e\r\n                \x3coption value\x3d"Meters"\x3e${i18n.meters}\x3c/option\x3e\r\n              \x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"2" style\x3d"padding-bottom:0;"\x3e\r\n              \x3clabel class\x3d"esriLeadingMargin1"\x3e${i18n.distMethodLabel}\x3c/label\x3e\r\n           \x3c/td\x3e\r\n           \x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom:0;"\x3e  \r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"distanceMethod"\x3e\x3c/a\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd  colspan\x3d"3" style\x3d"padding-top:0;"\x3e\r\n              \x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel"  style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_methodSelect"\x3e\r\n                \x3coption value\x3d"Geodesic"\x3e${i18n.geodesicLabel}\x3c/option\x3e\r\n                \x3coption value\x3d"Planar"\x3e${i18n.planarLabel}\x3c/option\x3e\r\n              \x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e \r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"2"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.fourLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.temporalSearchLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput"\x3e\r\n               \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"timeTolerance"\x3e\x3c/a\x3e \r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd style\x3d"padding-right:0;padding-bottom:0;width:50%;"\x3e\r\n              \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-props\x3d"constraints:{min:1,places:0},intermediateChanges:true,missingMessage:\'${i18n.distanceMsg}\'" data-dojo-attach-point\x3d"_timeToleranceValue" class\x3d"esriLeadingMargin1"  style\x3d"width:75%;"/\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd colspan\x3d"2" style\x3d"padding-left:0.25em;padding-bottom:0;width:50%;"\x3e\r\n              \x3cselect class\x3d"mediumInput esriAnalysisSelect" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_timeToleranceUnitSelect" style\x3d"width:80%;table-layout:fixed;"\x3e\r\n              \x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"2"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.fiveLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.outputDwellLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"outputType"\x3e\x3c/a\x3e \r\n            \x3c/td\x3e             \r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3" style\x3d"padding-top:0;"\x3e\r\n              \x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel"  style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_outputTypeSelect" data-dojo-attach-event\x3d"onChange:_handleOutputTypeChange"\x3e\r\n                \x3coption value\x3d"AllFeatures"\x3e${i18n.allFeatures}\x3c/option\x3e\r\n                \x3coption value\x3d"DwellConvexHulls"\x3e${i18n.convexHulls}\x3c/option\x3e\r\n                \x3coption value\x3d"DwellFeatures"\x3e${i18n.dwellFeatures}\x3c/option\x3e\r\n                \x3coption value\x3d"DwellMeanCenters"\x3e${i18n.meanCenters}\x3c/option\x3e\r\n              \x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e \r\n          \x3ctr data-dojo-attach-point\x3d"_addStatsRow"\x3e\r\n            \x3ctd colspan\x3d"2"\x3e\r\n              \x3clabel class\x3d"esriLeadingMargin1"\x3e${i18n.addStatsLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"summaryFields"\x3e\x3c/a\x3e \r\n            \x3c/td\x3e             \r\n          \x3c/tr\x3e\r\n          \x3ctr data-dojo-type\x3d"esri/dijit/analysis/components/AddSummaryFields" data-dojo-attach-point\x3d"_summaryWidget" \r\n            data-dojo-props\x3d"layer:\'\', showGeoAnalyticsParams:${showGeoAnalyticsParams}, addAsRow:true"\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"2"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.sixLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.outputLayerLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"outputName"\x3e\x3c/a\x3e \r\n            \x3c/td\x3e             \r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3"\x3e\r\n              \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" class\x3d"esriLeadingMargin1 longInput" data-dojo-props\x3d"trim:false,required:true" data-dojo-attach-point\x3d"_outputLayerInput" value\x3d""\x3e\x3c/input\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3"\x3e\r\n               \x3cdiv class\x3d"esriLeadingMargin1" data-dojo-attach-point\x3d"_chooseFolderRow"\x3e\r\n                 \x3clabel style\x3d"width:9px;font-size:smaller;"\x3e${i18n.saveResultIn}\x3c/label\x3e\r\n                 \x3cinput class\x3d"longInput esriFolderSelect" data-dojo-attach-point\x3d"_webMapFolderSelect" dojotype\x3d"dijit/form/FilteringSelect" trim\x3d"false"\x3e\x3c/input\x3e\r\n               \x3c/div\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n        \x3c/tbody\x3e\r\n       \x3c/table\x3e\r\n     \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_aggregateToolContentButtons" style\x3d"padding:5px;margin-top:5px;border-top:solid 1px #BBB;"\x3e\r\n      \x3cdiv class\x3d"esriExtentCreditsCtr"\x3e\r\n        \x3ca class\x3d"esriFloatTrailing esriSmallFont"  href\x3d"#" data-dojo-attach-point\x3d"_showCreditsLink"\x3e${i18n.showCredits}\x3c/a\x3e\r\n       \x3clabel data-dojo-attach-point\x3d"_chooseExtentDiv" class\x3d"esriSelectLabel esriExtentLabel"\x3e\r\n         \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_useExtentCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true" name\x3d"extent" value\x3d"true"/\x3e\r\n           ${i18n.useMapExtent}\r\n       \x3c/label\x3e\r\n      \x3c/div\x3e\r\n      \x3cbutton data-dojo-type\x3d"dijit/form/Button" type\x3d"submit" data-dojo-attach-point\x3d"_saveBtn" class\x3d"esriLeadingMargin4 esriAnalysisSubmitButton" data-dojo-attach-event\x3d"onClick:_handleSaveBtnClick"\x3e\r\n          ${i18n.runAnalysis}\r\n      \x3c/button\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.creditTitle}" data-dojo-attach-point\x3d"_usageDialog" style\x3d"width:40em;"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/CreditEstimator"  data-dojo-attach-point\x3d"_usageForm"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n'}});
define("esri/dijit/analysis/FindDwellLocations","require dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/_base/json dojo/has dojo/json dojo/string dojo/dom-style dojo/dom-attr dojo/dom-construct dojo/query dojo/dom-class dojo/on dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin dijit/registry dijit/form/Button dijit/form/CheckBox dijit/form/Form dijit/form/Select dijit/form/TextBox dijit/form/ValidationTextBox dijit/layout/ContentPane dijit/form/FilteringSelect dijit/Dialog dojox/form/CheckedMultiSelect ../../kernel ../../lang ./AnalysisBase ./utils ./AnalysisRegistry ./CreditEstimator ./_AnalysisOptions ../CalculateField ./components/AddSummaryFields dojo/i18n!../../nls/jsapi dojo/i18n!./nls/FindDwellLocations dojo/text!./templates/FindDwellLocations.html".split(" "),
function(f,n,c,g,l,h,p,D,k,e,E,F,G,q,H,r,t,u,v,w,I,J,K,L,M,N,O,P,Q,R,S,x,m,y,b,d,T,z,U,V,W,A,B){f=n([r,t,u,v,w,z,y],{declaredClass:"esri.dijit.analysis.FindDwellLocations",templateString:B,widgetsInTemplate:!0,inputLayer:null,summaryFields:null,outputLayerName:null,i18n:null,toolName:"FindDwellLocations",helpFileName:"FindDwellLocations",resultParameter:"output",constructor:function(a){this._pbConnects=[];a.containerNode&&(this.container=a.containerNode);a.trackFields&&"string"===typeof a.trackFields&&
(a.trackFields=a.trackFields.split(","))},destroy:function(){this.inherited(arguments);g.forEach(this._pbConnects,l.disconnect);delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments);c.mixin(this.i18n,A)},postCreate:function(){this.inherited(arguments);q.add(this._form.domNode,"esriSimpleForm");e.set(this._trackFieldSelect.selectNode,"width","90%");this._outputLayerInput.set("validator",c.hitch(this,this.validateServiceName));this._timeToleranceValue.set("isInRange",c.hitch(this._timeToleranceValue,
b.isGreaterThanZero));this._timeToleranceValue.set("rangeMessage",this.i18n.greaterThanZeroMsg);this._buildUI()},startup:function(){},_onClose:function(a){a&&(this._save(),this.emit("save",{save:!0}));this.emit("close",{save:a})},_handleSaveBtnClick:function(){if(this._form.validate()){this._saveBtn.set("disabled",!0);var a={};a.jobParams=this._buildJobParams();a.itemParams={description:k.substitute(this.i18n.itemDescription,{inputLayerName:this.inputLayer.name}),tags:k.substitute(this.i18n.itemTags,
{inputLayerName:this.inputLayer.name}),snippet:this.i18n.itemSnippet};this.showSelectFolder&&(a.itemParams.folder=this.get("folderId"));this.showGeoAnalyticsParams&&(a.isSpatioTemporalDataStore=!0);this.execute(a)}},_handleShowCreditsClick:function(a){a.preventDefault();this._form.validate()&&this.getCreditsEstimate(this.toolName,this._buildJobParams()).then(c.hitch(this,function(a){this._usageForm.set("content",a);this._usageDialog.show()}))},_buildJobParams:function(){var a={},b;b=this.constructAnalysisInputLyrObj(this.inputLayer,
!0);a.inputLayer=b;a.trackFields=this._trackFieldSelect.get("value").toString();a.distanceMethod=this._methodSelect.get("value");a.distanceTolerance=this._distToleranceValue.get("value");a.distanceToleranceUnit=this._distToleranceUnitSelect.get("value");a.timeTolerance=this._timeToleranceValue.get("value");a.timeToleranceUnit=this._timeToleranceUnitSelect.get("value");b=this._summaryWidget.get("summaryFields");a.summaryFields=h.toJson(b);a.outputType=this._outputTypeSelect.get("value");this.returnFeatureCollection||
(a.OutputName=h.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}}));this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.context=h.toJson({extent:this.map.extent._normalize(!0)}));return this._updateJobFilterAndSelection(a)},_handleBrowseItemsSelect:function(a,C){a&&a.selection&&b.addAnalysisReadyLayer({item:a.selection,layers:this.inputLayers,layersSelect:this._analysisSelect,browseDialog:a.dialog||this._browsedlg,widget:this},C).always(c.hitch(this,this._updateAnalysisLayerUI,
!0))},_save:function(){},_buildUI:function(){var a=!0;b.initHelpLinks(this.domNode,this.showHelp);this.get("showSelectAnalysisLayer")&&(this.inputLayers&&this.inputLayer&&!b.isLayerInLayers(this.inputLayer,this.inputLayers)&&(this.inputLayers.push(this.inputLayer),this._summaryWidget.set("layer",this.inputLayer)),this.get("inputLayer")||!this.get("inputLayers")||this.rerun||this.set("inputLayer",this.inputLayers[0]),b.populateAnalysisLayers(this,"inputLayer","inputLayers"));b.addReadyToUseLayerOption(this,
[this._analysisSelect]);this.outputLayerName&&(this._outputLayerInput.set("value",this.outputLayerName),a=!1);this.outputType?this._outputTypeSelect.set("value",this.outputType):this._outputTypeSelect.set("value","DwellMeanCenters");this.distanceMethod&&this._methodSelect.set("value",this.distanceMethod);this._timeToleranceUnitSelect.addOption([{value:"Seconds",label:this.i18n.seconds},{value:"Minutes",label:this.i18n.minutes},{value:"Hours",label:this.i18n.hours},{value:"Days",label:this.i18n.days},
{value:"Weeks",label:this.i18n.weeks},{value:"Months",label:this.i18n.months},{value:"Years",label:this.i18n.years}]);this.timeToleranceUnit&&this._timeToleranceUnitSelect.set("value",this.timeToleranceUnit);this.timeTolerance&&this._timeToleranceValue.set("value",this.timeTolerance);this.distanceDefaultUnits&&this._distToleranceUnitSelect.set("value",this.distanceDefaultUnits);this.distanceToleranceUnit&&this._distToleranceUnitSelect.set("value",this.distanceToleranceUnit);this.distanceTolerance&&
this._distToleranceValue.set("value",this.distanceTolerance);this.summaryFields&&(a=!1,this._summaryWidget.set("summaryFields",this.summaryFields));e.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none");this.showSelectFolder&&this.getFolderStore().then(c.hitch(this,function(a){this.folderStore=a;b.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:
""})}));e.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":"none");e.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none");this.outputLayerName&&(this._outputLayerInput.set("value",this.outputLayerName),a=!1);this._updateAnalysisLayerUI(a);this._loadConnections();this._createFilterAndSelections()},_loadConnections:function(){this.on("start",c.hitch(this,"_onClose",!0));this._connect(this._closeBtn,"onclick",c.hitch(this,"_onClose",!1))},_handleAnalysisLayerChange:function(a){"browse"===
a||"browselayers"===a?this._createBrowseItems({browseValue:a},{tags:["point"],geometryTypes:[d.GeometryTypes.Point],timeTypes:[d.TimeTypes.Instant]},this._analysisSelect):(this.set("inputLayer",this.inputLayers[a]),this._updateAnalysisLayerUI(!0))},_updateAnalysisLayerUI:function(a){this.inputLayer&&(b.addAttributeOptions({selectWidget:this._trackFieldSelect,layer:this.inputLayer,allowStringType:!0,allowSelectLabel:!1}),!a&&this.trackFields&&0<this.trackFields.length&&this._trackFieldSelect.set("value",
this.trackFields),a&&(this.outputLayerName=k.substitute(this.i18n.outputLayerName,{inputLayerName:this.inputLayer.name}),this._outputLayerInput.set("value",this.outputLayerName)))},_handleOutputTypeChange:function(a){-1!==["AllFeatures","DwellFeatures"].indexOf(a)?(this._summaryWidget.set("summaryFields",[]),b.updateDisplay([this._addStatsRow],!1,"table-row"),this._summaryWidget.hide()):(b.updateDisplay([this._addStatsRow],!0,"table-row"),a=this._summaryWidget.get("summaryFields"),this._summaryWidget.set("layer",
this.get("inputLayer")),this._summaryWidget.set("summaryFields",a),this._summaryWidget.show())},_setAnalysisGpServerAttr:function(a){a&&(this.analysisGpServer=a,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setInputLayerAttr:function(a){m.isDefined(a)&&a.geometryType===d.GeometryTypes.Point&&b.isTimeInstantLayer(a)?this.inputLayer=a:this.inputLayer=null;this._summaryWidget.set("layer",this.get("inputLayer"))},_setDisableRunAnalysisAttr:function(a){this._saveBtn.set("disabled",
a)},validateServiceName:function(a){return b.validateServiceName(a,{textInput:this._outputLayerInput,isItem:!this.returnFeatureCollection})},_setInputLayersAttr:function(a){m.isDefined(a)&&(this.inputLayers=a=g.filter(a,function(a,c){return-1!==g.indexOf([d.GeometryTypes.Point,d.GeometryTypes.MultiPoint],a.geometryType)&&b.isTimeInstantLayer(a)}))},_connect:function(a,b,c){this._pbConnects.push(l.connect(a,b,c))}});p("extend-esri")&&c.setObject("dijit.analysis.FindDwellLocations",f,x);return f});
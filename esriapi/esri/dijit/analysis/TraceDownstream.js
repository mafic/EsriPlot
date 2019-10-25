// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/templates/TraceDownstream.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" style\x3d"margin-top:0.5em; margin-bottom: 0.5em;"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_hotspotsToolContentTitle" class\x3d"analysisTitle"\x3e\r\n         \x3ctable class\x3d"esriFormTable" \x3e \r\n            \x3ctr\x3e\r\n              \x3ctd class\x3d"esriToolIconTd"\x3e\x3cdiv class\x3d"traceDownstreamIcon"\x3e\x3c/div\x3e\x3c/td\x3e\r\n              \x3ctd class\x3d"esriAlignLeading esriAnalysisTitle" data-dojo-attach-point\x3d"_toolTitle"\x3e\r\n               \x3clabel data-dojo-attach-point\x3d"_titleLbl"\x3e${i18n.traceDownstream}\x3c/label\x3e\r\n                \x3cnav class\x3d"breadcrumbs"  data-dojo-attach-point\x3d"_analysisModeLblNode" style\x3d"display:none;"\x3e\r\n                  \x3ca href\x3d"#" class\x3d"crumb breadcrumbs__modelabel" data-dojo-attach-event\x3d"onclick:_handleModeCrumbClick" data-dojo-attach-point\x3d"_analysisModeCrumb"\x3e\x3c/a\x3e\r\n                  \x3ca href\x3d"#" class\x3d"crumb is-active" data-dojo-attach-point\x3d"_analysisTitleCrumb" style\x3d"font-size:16px;"\x3e${i18n.traceDownstream}\x3c/a\x3e\r\n                \x3c/nav\x3e                  \r\n              \x3c/td\x3e\r\n              \x3ctd\x3e\r\n                \x3cdiv class\x3d"esriFloatTrailing" style\x3d"padding:0;"\x3e\r\n                    \x3cdiv class\x3d"esriFloatLeading"\x3e\r\n                      \x3ca href\x3d"#" class\x3d\'esriFloatLeading helpIcon\' esriHelpTopic\x3d"toolDescription"\x3e\x3c/a\x3e\r\n                    \x3c/div\x3e\r\n                    \x3cdiv class\x3d"esriFloatTrailing"\x3e\r\n                      \x3ca href\x3d"#" data-dojo-attach-point\x3d"_closeBtn" title\x3d"${i18n.close}" class\x3d"esriAnalysisCloseIcon"\x3e\x3c/a\x3e\r\n                    \x3c/div\x3e              \r\n                \x3c/div\x3e  \r\n              \x3c/td\x3e\r\n            \x3c/tr\x3e\r\n         \x3c/table\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv style\x3d"clear:both; border-bottom: #CCC thin solid; height:1px;width:100%;"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"_form" readOnly\x3d"true"\x3e\r\n     \x3ctable class\x3d"esriFormTable"\x3e \r\n       \x3ctbody\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_titleRow"\x3e\r\n          \x3ctd  colspan\x3d"3" class\x3d"sectionHeader" data-dojo-attach-point\x3d"_interpolateToolDescription" \x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_analysisLabelRow" style\x3d"display:none;"\x3e\r\n          \x3ctd colspan\x3d"2" style\x3d"padding-bottom:0;"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.analysisLayerLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom:0;"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"inputLayer"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e \r\n        \x3ctr data-dojo-attach-point\x3d"_selectAnalysisRow" style\x3d"display:none;"\x3e\r\n          \x3ctd  colspan\x3d"3" style\x3d"padding-top:0;"\x3e\r\n            \x3ctable style\x3d"width:100%;"\x3e\r\n              \x3ctr\x3e\r\n                \x3ctd style\x3d"width:80%"\x3e  \r\n                \x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel"  style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_analysisSelect" data-dojo-attach-event\x3d"onChange:_handleAnalysisLayerChange"\x3e\x3c/select\x3e\r\n                \x3c/td\x3e\r\n                \x3ctd style\x3d"width:20%"\x3e\r\n                \x3cdiv data-dojo-type\x3d"dijit/form/ToggleButton"  data-dojo-attach-point\x3d"_analysisPointDrawBtn"  class\x3d"esriFloatLeading esriActionButton" data-dojo-props\x3d"showLabel:false,iconClass:\'toolbarIcon esriPointIcon\',label:\'${i18n.drawLabel}\'" data-dojo-attach-event\x3d"onChange:_handleInputDrawPointChange"\x3e\x3c/div\x3e\r\n                \x3c/td\x3e\r\n              \x3c/tr\x3e\r\n            \x3c/table\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e          \r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_labelTwo" class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_measurelabel" class\x3d"esriAnalysisStepsLabel"\x3e${i18n.traceOptionsLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriLeadingMargin2"\x3e${i18n.splitTraceLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' data-dojo-attach-point\x3d"_analysisFieldHelpLink" esriHelpTopic\x3d"SplitDistance"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3" style\x3d"padding:0;"\x3e\r\n            \x3ctable class\x3d"esriFormTable esriLeadingMargin2" style\x3d"width:90%;"\x3e\r\n              \x3ctbody\x3e\r\n                \x3ctr\x3e\r\n                \x3ctd  style\x3d"width:50%;padding-right:1em;"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-props\x3d"intermediateChanges:true,invalidMessage:\'${i18n.distanceMsg}\'" data-dojo-attach-point\x3d"_splitTraceInput" style\x3d"width:100%;"\x3e\r\n                \x3c/td\x3e\r\n                \x3ctd colspan\x3d"2"\x3e\r\n            \x3cselect class\x3d"longInput esriAnalysisSelect esriLongLabel" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_splitTraceUnitsSelect"\x3e\r\n            \x3c/select\x3e\r\n                \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n              \x3c/tbody\x3e\r\n            \x3c/table\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriLeadingMargin2"\x3e${i18n.maxTraceLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' data-dojo-attach-point\x3d"_analysisFieldHelpLink" esriHelpTopic\x3d"MaxDistance"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3" style\x3d"padding:0;"\x3e\r\n            \x3ctable class\x3d"esriFormTable esriLeadingMargin2" style\x3d"width:90%;"\x3e\r\n              \x3ctbody\x3e\r\n                \x3ctr\x3e\r\n                \x3ctd  style\x3d"width:50%;padding-right:1em;"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-props\x3d"intermediateChanges:true,invalidMessage:\'${i18n.distanceMsg}\'" data-dojo-attach-point\x3d"_maxTraceInput" style\x3d"width:100%;"\x3e\r\n                \x3c/td\x3e\r\n                \x3ctd colspan\x3d"2"\x3e\r\n            \x3cselect class\x3d"longInput esriAnalysisSelect esriLongLabel" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_maxTraceUnitsSelect"\x3e\r\n            \x3c/select\x3e\r\n                \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n              \x3c/tbody\x3e\r\n            \x3c/table\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriLeadingMargin2"\x3e${i18n.clipOutputToLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' data-dojo-attach-point\x3d"_analysisFieldHelpLink" esriHelpTopic\x3d"ClipArea"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2" style\x3d"width:35%;"\x3e\r\n            \x3cselect class\x3d"esriLeadingMargin2 longInput esriLongLabel" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_boundingAreaSelect" data-dojo-attach-event\x3d"onChange:_handleBoundingSelectChange"\x3e\x3c/select\x3e                      \r\n          \x3c/td\x3e\r\n          \x3ctd style\x3d"width:9%;"\x3e\r\n            \x3cdiv data-dojo-type\x3d"dijit/form/ToggleButton" data-dojo-attach-point\x3d"_bndgPolyDrawBtn" class\x3d"esriFloatLeading esriActionButton" data-dojo-props\x3d"showLabel:false,iconClass:\'toolbarIcon polygonIcon\',label:\'${i18n.drawLabel}\'" data-dojo-attach-event\x3d"onChange:_handleBoundingBtnChange"\x3e\x3c/div\x3e\r\n          \x3c/td\x3e \r\n        \x3c/tr\x3e          \r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.twoLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.outputLayerLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"OutputTrace"\x3e\x3c/a\x3e \r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"trim:true,required:true" class\x3d"longTextInput esriLeadingMargin1" data-dojo-attach-point\x3d"_outputLayerInput"\x3e\x3c/input\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n             \x3cdiv data-dojo-attach-point\x3d"_chooseFolderRow" class\x3d"esriLeadingMargin1"\x3e\r\n               \x3clabel style\x3d"width:9px;font-size:smaller;"\x3e${i18n.saveResultIn}\x3c/label\x3e\r\n               \x3cinput class\x3d"longInput" data-dojo-attach-point\x3d"_webMapFolderSelect" data-dojo-type\x3d"dijit/form/FilteringSelect" trim\x3d"true" style\x3d"width:55%;"\x3e\x3c/input\x3e\r\n             \x3c/div\x3e              \r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/tbody\x3e\r\n     \x3c/table\x3e\r\n   \x3c/div\x3e\r\n  \x3cdiv style\x3d"padding:5px;margin-top:5px;border-top:solid 1px #BBB;"\x3e\r\n    \x3cdiv class\x3d"esriExtentCreditsCtr"\x3e\r\n      \x3ca class\x3d"esriFloatTrailing esriSmallFont"  href\x3d"#" data-dojo-attach-point\x3d"_showCreditsLink"\x3e${i18n.showCredits}\x3c/a\x3e\r\n     \x3clabel data-dojo-attach-point\x3d"_chooseExtentDiv" class\x3d"esriSelectLabel esriExtentLabel"\x3e\r\n       \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_useExtentCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true" name\x3d"extent" value\x3d"true"/\x3e\r\n         ${i18n.useMapExtent}\r\n     \x3c/label\x3e\r\n    \x3c/div\x3e\r\n    \x3cbutton data-dojo-type\x3d"dijit/form/Button" type\x3d"submit" data-dojo-attach-point\x3d"_saveBtn" class\x3d"esriLeadingMargin4 esriAnalysisSubmitButton" data-dojo-attach-event\x3d"onClick:_handleSaveBtnClick"\x3e\r\n        ${i18n.runAnalysis}\r\n    \x3c/button\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.creditTitle}" data-dojo-attach-point\x3d"_usageDialog" style\x3d"width:40em;"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/CreditEstimator"  data-dojo-attach-point\x3d"_usageForm"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e    \r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/analysis/TraceDownstream","require dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/_base/Color dojo/_base/json dojo/has dojo/json dojo/string dojo/dom-style dojo/dom-attr dojo/dom-construct dojo/query dojo/dom-class dojo/number dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin dijit/registry dijit/form/Button dijit/form/CheckBox dijit/form/Form dijit/form/Select dijit/form/TextBox dijit/form/NumberSpinner dijit/form/ValidationTextBox dijit/layout/ContentPane dijit/form/FilteringSelect dijit/Dialog ../../kernel ../../lang ./AnalysisBase ./_AnalysisOptions ../../symbols/SimpleFillSymbol ../../symbols/SimpleLineSymbol ../../toolbars/draw ../PopupTemplate ../../layers/FeatureLayer ../../graphic ./utils ./AnalysisRegistry ./CreditEstimator ./components/AddSummaryFields ../../symbols/PictureMarkerSymbol dijit/form/HorizontalSlider dijit/form/HorizontalRule dijit/form/HorizontalRuleLabels dojo/i18n!../../nls/jsapi dojo/text!./templates/TraceDownstream.html".split(" "),
function(m,u,d,g,h,H,e,v,I,n,p,w,J,K,x,L,y,z,A,B,C,M,N,O,P,Q,R,S,T,U,V,W,D,X,E,F,Y,Z,k,aa,q,r,f,l,ba,ca,da,ea,fa,ga,t,G){m=u([y,z,A,B,C,F,E],{declaredClass:"esri.dijit.analysis.TraceDownstream",templateString:G,widgetsInTemplate:!0,inputLayer:null,boundingPolygonLayer:null,outputLayerName:null,splitDistance:null,splitUnits:"Kilometers",maxDistance:null,maxDistanceUnits:"Kilometers",getResultLyrInfos:!1,i18n:null,map:null,toolName:"TraceDownstream",helpFileName:"TraceDownstream",resultParameter:"traceLayer",
constructor:function(a,c){this._pbConnects=[];a.containerNode&&(this.container=a.containerNode)},destroy:function(){this.inherited(arguments);g.forEach(this._pbConnects,h.disconnect);delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments);d.mixin(this.i18n,t.findHotSpotsTool);d.mixin(this.i18n,t.traceDownstreamTool);this.set("drawLayerName",this.i18n.blayerName);this.set("drawPointLayerName",this.i18n.pointlayerName)},postCreate:function(){this.inherited(arguments);x.add(this._form.domNode,
"esriSimpleForm");this._outputLayerInput.set("validator",d.hitch(this,this.validateServiceName));this.showCredits=!1;this._buildUI()},startup:function(){},_handleModeCrumbClick:function(a){a.preventDefault();this._onClose(!0)},_onClose:function(a){a&&(this._featureLayer&&(this.map.removeLayer(this._featureLayer),g.forEach(this.boundingPolygonLayers,function(a,b){a===this._featureLayer&&(this._boundingAreaSelect.removeOption({value:b+1,label:this._featureLayer.name}),this.boundingPolygonLayers.splice(b,
1))},this)),this._pointfeatureLayer&&(this.map.removeLayer(this._pointfeatureLayer),g.forEach(this.predictAtPointLayers,function(a,b){a===this._pointfeatureLayer&&(this._analysisSelect.removeOption({value:b+1,label:this._pointfeatureLayer.name}),this.inputLayers.splice(b,1))},this)));this._handleBoundingBtnChange(!1);this._handleInputDrawPointChange(!1);this.emit("close",{save:!a})},clear:function(){this._featureLayer&&(this.map.removeLayer(this._featureLayer),g.forEach(this.boundingPolygonLayers,
function(a,c){a===this._featureLayer&&(this._boundingAreaSelect.removeOption({value:c+1,label:this._featureLayer.name}),this.boundingPolygonLayers.splice(c,1))},this));this._pointfeatureLayer&&(this.map.removeLayer(this._pointfeatureLayer),g.forEach(this.predictAtPointLayers,function(a,c){a===this._pointfeatureLayer&&(this._predictPointSelect.removeOption({value:c+1,label:this._pointfeatureLayer.name}),this.predictAtPointLayers.splice(c,1))},this));this._handleBoundingBtnChange(!1);this._handleInputDrawPointChange(!1)},
_handleShowCreditsClick:function(a){a.preventDefault();a={};this._form.validate()&&(a.inputLayer=e.toJson(this.constructAnalysisInputLyrObj(this.get("inputLayer"))),this.get("boundingPolygonLayer")&&(a.boundingPolygonLayer=e.toJson(this.constructAnalysisInputLyrObj(this.boundingPolygonLayer))),this.get("maxDistance")&&(a.maximumDistance=this.get("maxDistance"),a.maxDistanceUnits=this.get("maxDistanceUnits")),this.get("splitDistance")&&(a.splitDistance=this.get("splitDistance"),a.splitUnits=this.get("splitUnits")),
this.returnFeatureCollection||(a.OutputName=e.toJson({serviceProperties:{name:this.get("outputLayerName")}})),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.context=e.toJson({extent:this.map.extent._normalize(!0)})),this.getCreditsEstimate(this.toolName,a).then(d.hitch(this,function(a){this._usageForm.set("content",a);this._usageDialog.show()})))},_handleSaveBtnClick:function(a){if(this._form.validate()){this._saveBtn.set("disabled",!0);a={};var c={},b;a.inputLayer=e.toJson(this.constructAnalysisInputLyrObj(this.get("inputLayer")));
this.get("boundingPolygonLayer")&&(a.boundingPolygonLayer=e.toJson(this.constructAnalysisInputLyrObj(this.boundingPolygonLayer)));this.get("maxDistance")&&(a.maxDistance=this.get("maxDistance"),a.maxDistanceUnits=this.get("maxDistanceUnits"));this.get("splitDistance")&&(a.splitDistance=this.get("splitDistance"),a.splitUnits=this.get("splitUnits"),this.getResultLyrInfos=!0);this.returnFeatureCollection||(a.OutputName=e.toJson({serviceProperties:{name:this.get("outputLayerName")}}));this.showChooseExtent&&
!this.get("DisableExtent")&&this._useExtentCheck.get("checked")&&(a.context=e.toJson({extent:this.map.extent._normalize(!0)}));this.returnFeatureCollection&&(b={outSR:this.map.spatialReference},this.showChooseExtent&&this._useExtentCheck.get("checked")&&(b.extent=this.map.extent._normalize(!0)),a.context=e.toJson(b));a.returnFeatureCollection=this.returnFeatureCollection;c.jobParams=a;c.itemParams={description:this.i18n.itemDescription,tags:n.substitute(this.i18n.itemTags,{layername:this.inputLayer.name,
fieldname:a.field?a.field:""}),snippet:this.i18n.itemSnippet};this.showSelectFolder&&(c.itemParams.folder=this.get("folderId"));this.execute(c)}},_save:function(){},_buildUI:function(){this._loadConnections();this.signInPromise.then(d.hitch(this,f.initHelpLinks,this.domNode,this.showHelp,{analysisGpServer:this.analysisGpServer}));this.get("showSelectAnalysisLayer")&&(this.inputLayers&&this.inputLayer&&!f.isLayerInLayers(this.inputLayer,this.inputLayers)&&this.inputLayers.push(this.inputLayer),this.get("inputLayer")||
!this.get("inputLayers")||this.rerun||this.set("inputLayer",this.inputLayers[0]),f.populateAnalysisLayers(this,"inputLayer","inputLayers",{posIncrement:1}));var a=[{value:"Miles",label:this.i18n.miles},{value:"Yards",label:this.i18n.yards},{value:"Feet",label:this.i18n.feet},{type:"separator"},{value:"Kilometers",label:this.i18n.kilometers},{value:"Meters",label:this.i18n.meters}],c=!0;this._splitTraceUnitsSelect.addOption(a);this._maxTraceUnitsSelect.addOption(a);this.outputLayerName&&(this._outputLayerInput.set("value",
this.outputLayerName),c=!1);this.inputLayer&&this._updateAnalysisLayerUI(c);this.maxDistanceUnits&&this._maxTraceUnitsSelect.set("value",this.maxDistanceUnits);this.maxDistance&&this._maxTraceInput.set("value",this.maxDistance);this.splitUnits&&this._splitTraceUnitsSelect.set("value",this.splitUnits);this.splitDistance&&this._splitTraceInput.set("value",this.splitDistance);if(this.boundingPolygonLayers){this.boundingPolygonLayers&&this.boundingPolygonLayer&&!f.isLayerInLayers(this.boundingPolygonLayer,
this.boundingPolygonLayers)&&this.boundingPolygonLayers.push(this.boundingPolygonLayer);var b=-1,e=[{value:"-1",label:this.i18n.defaultBoundingOption}];g.forEach(this.boundingPolygonLayers,function(a,c){a.geometryType===l.GeometryTypes.Polygon&&(this.boundingPolygonLayer&&this.boundingPolygonLayer.name===a.name&&(b=c+1),e.push({value:c+1,label:a.name}))},this);this._boundingAreaSelect.addOption(e);this._boundingAreaSelect.set("value",b)}f.addReadyToUseLayerOption(this,[this._analysisSelect,this._boundingAreaSelect]);
p.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none");this.showSelectFolder&&this.getFolderStore().then(d.hitch(this,function(a){this.folderStore=a;f.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})}));p.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":"none");p.set(this._showCreditsLink,"display",!0===this.showCredits?
"block":"none")},_handleAnalysisLayerChange:function(a){this._isAnalysisSelect=!0;"browse"===a||"browselayers"===a?(this._createBrowseItems({browseValue:a,disabledSubResources:[this.inputLayer]},{tags:["point"],geometryTypes:[l.GeometryTypes.Point,l.GeometryTypes.MultiPoint]},this._analysisSelect),this._analysisPointDrawBtn.reset()):(this.inputLayer=this.inputLayers[a-1],this._updateAnalysisLayerUI(!0))},_updateAnalysisLayerUI:function(a){this.inputLayer&&(w.set(this._interpolateToolDescription,"innerHTML",
n.substitute(this.i18n.toolDefine,{layername:this.inputLayer.name})),a&&(this.outputLayerName=n.substitute(this.i18n.outputLayerName,{layername:this.inputLayer.name})),this._pointfeatureLayer&&this._pointfeatureLayer.name!==this.inputLayer.name&&this._analysisPointDrawBtn.reset(),this._outputLayerInput.set("value",this.outputLayerName))},_handleBrowseItemsSelect:function(a,c){a&&a.selection&&f.addAnalysisReadyLayer({item:a.selection,layers:this._isAnalysisSelect?this.inputLayers:this.boundingPolygonLayers,
layersSelect:this._isAnalysisSelect?this._analysisSelect:this._boundingAreaSelect,posIncrement:1,browseDialog:a.dialog||this._browsedlg,widget:this},c).always(d.hitch(this,this._updateAnalysisLayerUI,!0))},_handleBoundingSelectChange:function(a){this._isAnalysisSelect=!0;"browse"===a?this._createBrowseItems({browseValue:a},{tags:["polygon"],geometryTypes:[l.GeometryTypes.Polygon]},this._boundingAreaSelect):"-1"===a||this._featureLayer&&this.get("boundingPolygonLayer").id===this._featureLayer.id?this._bndgPolyDrawBtn.set("disabled",
!1):(this._bndgPolyDrawBtn.set("disabled",!0),this._bndgPolyDrawBtn.set("checked",!1))},_handleBoundingBtnChange:function(a){a?(this.emit("drawtool-activate",{}),this._featureLayer||this._createBoundingPolyFeatColl(),this._analysisPointDrawBtn.set("checked",!1),this._toolbar.activate(k.POLYGON)):(this._toolbar.deactivate(),this._analysisPointDrawBtn.get("checked")||this.emit("drawtool-deactivate",{}))},_loadConnections:function(){this.on("start",d.hitch(this,"_onClose",!1));this._connect(this._closeBtn,
"onclick",d.hitch(this,"_onClose",!0))},_createBoundingPolyFeatColl:function(){var a=f.createPolygonFeatureCollection(this.drawLayerName);this._featureLayer=new q(a,{id:this.drawLayerName});this.map.addLayer(this._featureLayer);h.connect(this._featureLayer,"onClick",d.hitch(this,function(a){this.map.infoWindow.setFeatures([a.graphic])}))},_addFeatures:function(a){var c=[],b={};a=new r(a);b.description="blayer desc";b.title="blayer";a.setAttributes(b);c.push(a);this._featureLayer.applyEdits(c,null,
null);if(0===this.boundingPolygonLayers.length||this.boundingPolygonLayers[this.boundingPolygonLayers.length-1]!==this._featureLayer)c=this.boundingPolygonLayers.push(this._featureLayer),b=this._boundingAreaSelect.getOptions(),this._boundingAreaSelect.removeOption(b),b=g.map(b,function(a){a.selected=!1;return a}),b.push({value:c,label:this._featureLayer.name,selected:!0}),this._boundingAreaSelect.addOption(b)},_handleInputDrawPointChange:function(a){a?(this.emit("drawtool-activate",{}),this._pointfeatureLayer||
this._createPointFeatColl(),this._pointtoolbar.activate(k.POINT),this._bndgPolyDrawBtn.set("checked",!1)):(this._pointtoolbar.deactivate(),this._bndgPolyDrawBtn.get("checked")||this.emit("drawtool-deactivate",{}))},_createPointFeatColl:function(){var a=f.createPointFeatureCollection(this.drawPointLayerName);this._pointfeatureLayer=new q(a,{id:this.drawPointLayerName});this.map.addLayer(this._pointfeatureLayer);h.connect(this._pointfeatureLayer,"onClick",d.hitch(this,function(a){this.map.infoWindow.setFeatures([a.graphic])}))},
_addPointFeatures:function(a){var c=[],b={};a=new r(a);b.description="blayer desc";b.title="blayer";a.setAttributes(b);c.push(a);this._pointfeatureLayer.applyEdits(c,null,null);if(0===this.inputLayers.length||this.inputLayers[this.inputLayers.length-1]!==this._pointfeatureLayer)this.inputLayers.push(this._pointfeatureLayer),c=this.inputLayers.length-1,b=this._analysisSelect.getOptions(),this._analysisSelect.removeOption(b),b=g.map(b,function(a){a.selected=!1;return a}),this._analysisSelect.addOption({value:c+
1,label:this._pointfeatureLayer.name,selected:!0}),this._analysisSelect.addOption(b),this._handleAnalysisLayerChange(c+1)},validateServiceName:function(a){return f.validateServiceName(a,{textInput:this._outputLayerInput,isItem:!this.returnFeatureCollection})},_setAnalysisGpServerAttr:function(a){a&&(this.analysisGpServer=a,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setInputLayerAttr:function(a){this.inputLayer=a},_getInputLayerAttr:function(){return this.inputLayer},_setInputLayersAttr:function(a){this.inputLayers=
a},_getBoundingPolygonLayerAttr:function(){this._boundingAreaSelect&&(this.boundingPolygonLayer=null,"-1"!==this._boundingAreaSelect.get("value")&&(this.boundingPolygonLayer=this.boundingPolygonLayers[this._boundingAreaSelect.get("value")-1]));return this.boundingPolygonLayer},_setBoundingPolygonLayerAttr:function(a){this.boundingPolygonLayer=a},_setBoundingPolygonLayersAttr:function(a){this.boundingPolygonLayers=a},_setSplitUnitsAttr:function(a){this.splitUnits=a},_getSplitUnitsAttr:function(){this._splitTraceUnitsSelect&&
this._splitTraceUnitsSelect.get("value")&&(this.splitUnits=this._splitTraceUnitsSelect.get("value"));return this.splitUnits},_setSplitDistanceAttr:function(a){this.splitDistance=a},_getSplitDistanceAttr:function(){this._splitTraceInput&&this._splitTraceInput.get("value")&&(this.splitDistance=this._splitTraceInput.get("value"));return this.splitDistance},_setMaxDistanceUnitsAttr:function(a){this.maxDistanceUnits=a},_getMaxDistanceUnitsAttr:function(){this._maxTraceUnitsSelect&&this._maxTraceUnitsSelect.get("value")&&
(this.maxDistanceUnits=this._maxTraceUnitsSelect.get("value"));return this.maxDistanceUnits},_setMaxDistanceAttr:function(a){this.maxDistance=a},_getMaxDistanceAttr:function(){this._maxTraceInput&&this._maxTraceInput.get("value")&&(this.maxDistance=this._maxTraceInput.get("value"));return this.maxDistance},_getOutputLayerNameAttr:function(){this._outputLayerInput&&(this.outputLayerName=this._outputLayerInput.get("value"));return this.outputLayerName},_setOutputLayerNameAttr:function(a){this.outputLayerName=
a},_setMapAttr:function(a){this.map=a;this._toolbar=new k(this.map);h.connect(this._toolbar,"onDrawEnd",d.hitch(this,this._addFeatures));this._pointtoolbar=new k(this.map);h.connect(this._pointtoolbar,"onDrawEnd",d.hitch(this,this._addPointFeatures))},_getMapAttr:function(){return this.map},_setDrawLayerNameAttr:function(a){this.drawLayerName=a},_getDrawLayerNameAttr:function(){return this._featureLayer.name},_setDisableRunAnalysisAttr:function(a){this._saveBtn.set("disabled",a)},_getDrawLayerAttr:function(){var a=
[];this._featureLayer&&a.push(this._featureLayer);this._pointfeatureLayer&&a.push(this._pointfeatureLayer);return a},_setDisableExtentAttr:function(a){this._useExtentCheck.set("checked",!a);this._useExtentCheck.set("disabled",a)},_getDisableExtentAttr:function(){this._useExtentCheck.get("disabled")},_setDrawPointLayerNameAttr:function(a){this.drawPointLayerName=a},_getDrawPointLayerNameAttr:function(){return this._pointfeatureLayer.name},_connect:function(a,c,b){this._pbConnects.push(h.connect(a,
c,b))}});v("extend-esri")&&d.setObject("dijit.analysis.TraceDownstream",m,D);return m});
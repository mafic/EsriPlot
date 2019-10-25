// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/templates/DescribeDataset.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" style\x3d"margin-top:0.5em; margin-bottom: 0.5em;"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_describeDatasetToolContentTitle" class\x3d"analysisTitle"\x3e\r\n         \x3ctable class\x3d"esriFormTable" \x3e\r\n            \x3ctr\x3e\r\n              \x3ctd class\x3d"esriToolIconTd"\x3e\x3cdiv class\x3d"describeDatasetIcon"\x3e\x3c/div\x3e\x3c/td\x3e\r\n              \x3ctd class\x3d"esriAlignLeading esriAnalysisTitle" data-dojo-attach-point\x3d"_toolTitle"\x3e\r\n                \x3clabel data-dojo-attach-point\x3d"_titleLbl"\x3e${i18n.describeDataset}\x3c/label\x3e\r\n                \x3cnav class\x3d"breadcrumbs"  data-dojo-attach-point\x3d"_analysisModeLblNode" style\x3d"display:none;"\x3e\r\n                  \x3ca href\x3d"#" class\x3d"crumb" style\x3d"font-size:12px;" data-dojo-attach-event\x3d"onclick:_handleModeCrumbClick" data-dojo-attach-point\x3d"_analysisModeCrumb"\x3e\x3c/a\x3e\r\n                  \x3ca href\x3d"#" class\x3d"crumb is-active" data-dojo-attach-point\x3d"_analysisTitleCrumb" style\x3d"font-size:16px;"\x3e${i18n.describeDataset}\x3c/a\x3e\r\n                \x3c/nav\x3e\r\n              \x3c/td\x3e\r\n              \x3ctd\x3e\r\n              \x3cdiv class\x3d"esriFloatTrailing" style\x3d"padding:0;"\x3e\r\n                \x3cdiv class\x3d"esriFloatLeading"\x3e\r\n                  \x3ca href\x3d"#" class\x3d\'esriFloatLeading helpIcon\' esriHelpTopic\x3d"toolDescription"\x3e\x3c/a\x3e\r\n                \x3c/div\x3e\r\n                \x3cdiv class\x3d"esriFloatTrailing"\x3e\r\n                  \x3ca href\x3d"#" data-dojo-attach-point\x3d"_closeBtn" title\x3d"${i18n.close}" class\x3d"esriAnalysisCloseIcon"\x3e\x3c/a\x3e\r\n                \x3c/div\x3e\r\n              \x3c/div\x3e\r\n              \x3c/td\x3e\r\n            \x3c/tr\x3e\r\n         \x3c/table\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv style\x3d"clear:both; border-bottom: #CCC thin solid; height:1px;width:100%;"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"esriSimpleForm" data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"_form" readOnly\x3d"true"\x3e\r\n    \x3ctable class\x3d"esriFormTable"  data-dojo-attach-point\x3d"_describeDatasetTable"\x3e\r\n      \x3ctbody\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.inputLayerLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"inputLayer"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3" \x3e\r\n            \x3cselect class\x3d"esriLeadingMargin1  longInput esriAnalysisSelect esriLongLabel" data-dojo-type\x3d"dijit/form/Select" data-dojo-props\x3d"required:true" data-dojo-attach-point\x3d"_inputLayerSelect" data-dojo-attach-event\x3d"onChange:_handleInputLayerChange"\x3e\x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.twoLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.describeDataLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"additionalOutputs"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriLeadingMargin2 bufferSelector" data-dojo-attach-point\x3d"_sampleLayerLabel"\x3e\r\n              \x3cdiv class\x3d"dijitInline bufferIcon sampleLayerIcon"\x3e\x3c/div\x3e\r\n              \x3cdiv data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-attach-point\x3d"_sampleLayerCheck" data-dojo-props\x3d"checked:false"\r\n              data-dojo-attach-event\x3d"onChange:_handleSampleCheckChanged" style\x3d"display:none"\x3e\x3c/div\x3e\r\n              \x3cspan class\x3d"esriLeadingMargin1"\x3e${i18n.sampleLayer}\x3c/span\x3e\r\n            \x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput verticalCenter"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"sampleLayer"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_selectNoofSamplesRow" style\x3d"display:none;"\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3clabel class\x3d"esriLeadingMargin2"\x3e\r\n              ${i18n.noOfFeaturesLabel}\r\n            \x3c/label\x3e\r\n            \x3cinput type\x3d"text" class\x3d"shortNumberInput" \r\n            data-dojo-attach-point\x3d"_sampleSizeInput"\r\n            data-dojo-type\x3d"dijit/form/NumberSpinner" value\x3d "1" data-dojo-attach-event\x3d"onChange:_handleNumberOfSamplesChange" data-dojo-props\x3d"value:100,intermediateChanges:true,invalidMessage:\'${i18n.distanceMsg}\',constraints:{ places:0 }"\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriLeadingMargin2 bufferSelector" data-dojo-attach-point\x3d"_extentLayerLabel"\x3e\r\n              \x3cdiv class\x3d"dijitInline bufferIcon extentLayerIcon"\x3e\x3c/div\x3e\r\n              \x3cdiv data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-attach-point\x3d"_extentLayerCheck"\r\n              data-dojo-attach-event\x3d"onChange:_handleExtentCheckChanged"\r\n              data-dojo-props\x3d"checked:false" style\x3d"display:none"\x3e\x3c/div\x3e\r\n              \x3cspan class\x3d"esriLeadingMargin1"\x3e${i18n.extentLayer}\x3c/span\x3e\r\n            \x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput verticalCenter"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"extentLayer"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_outputLayerLabel" class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.threeLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.outputLayerName}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"outputName"\x3e\x3c/a\x3e \r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"trim:true" class\x3d"longTextInput esriLeadingMargin1" data-dojo-attach-point\x3d"_outputLayerInput" required\x3d"true"\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n             \x3cdiv data-dojo-attach-point\x3d"_chooseFolderRow" class\x3d"esriLeadingMargin1"\x3e\r\n               \x3clabel style\x3d"width:9px;font-size:smaller;"\x3e${i18n.saveResultIn}\x3c/label\x3e\r\n               \x3cinput class\x3d"longInput" data-dojo-attach-point\x3d"_webMapFolderSelect" data-dojo-type\x3d"dijit/form/FilteringSelect" trim\x3d"true" style\x3d"width:55%;" /\x3e\r\n             \x3c/div\x3e              \r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/tbody\x3e\r\n    \x3c/table\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"_DescribeDataSetToolContentButtons" style\x3d"padding:5px;margin-top:5px;border-top:solid 1px #BBB;"\x3e\r\n    \x3cdiv class\x3d"esriExtentCreditsCtr"\x3e\r\n      \x3ca class\x3d"esriFloatTrailing esriSmallFont"  href\x3d"#" data-dojo-attach-point\x3d"_showCreditsLink"\x3e${i18n.showCredits}\x3c/a\x3e\r\n      \x3clabel data-dojo-attach-point\x3d"_chooseExtentDiv" class\x3d"esriSelectLabel esriExtentLabel"\x3e\r\n        \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_useExtentCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:false" name\x3d"extent" value\x3d"false"/\x3e\r\n          ${i18n.useMapExtent}\r\n      \x3c/label\x3e\r\n    \x3c/div\x3e\r\n    \x3cbutton data-dojo-type\x3d"dijit/form/Button" type\x3d"submit" data-dojo-attach-point\x3d"_saveBtn" class\x3d"esriLeadingMargin4 esriAnalysisSubmitButton" data-dojo-attach-event\x3d"onClick:_handleSaveBtnClick"\x3e\r\n      ${i18n.runAnalysis}\r\n    \x3c/button\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.creditTitle}" data-dojo-attach-point\x3d"_usageDialog" style\x3d"width:40em;"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/CreditEstimator"  data-dojo-attach-point\x3d"_usageForm"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"esriFormWarning esriRoundedBox" data-dojo-attach-point\x3d"_errorMessagePane" style\x3d"display:none;"\x3e\r\n    \x3ca href\x3d"#" title\x3d"${i18n.close}" class\x3d"esriFloatTrailing esriAnalysisCloseIcon" title\x3d\'${i18n.close}\' data-dojo-attach-event\x3d"onclick:_handleCloseMsg"\x3e\r\n    \x3c/a\x3e\r\n    \x3cspan data-dojo-attach-point\x3d"_bodyNode"\x3e\x3c/span\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/analysis/DescribeDataset","../../kernel ./_AnalysisOptions ./AnalysisBase ./ItemTypes ./utils ./components/ToggleIconButtons dijit/_FocusMixin dijit/_OnDijitClickMixin dijit/_TemplatedMixin dijit/_WidgetBase dijit/_WidgetsInTemplateMixin dijit/form/Button dijit/form/CheckBox dijit/form/Form dijit/form/TextBox dijit/form/ValidationTextBox dijit/form/NumberSpinner dijit/layout/ContentPane dojo/_base/array dojo/_base/connect dojo/_base/declare dojo/_base/fx dojo/_base/json dojo/_base/lang dojo/dom-attr dojo/dom-style dojo/dom-class dojo/fx/easing dojo/has dojo/string dojo/i18n!./nls/DescribeDataset dojo/text!./templates/DescribeDataset.html".split(" "),
function(q,f,r,g,e,E,t,u,v,w,x,F,G,H,I,J,K,L,y,m,z,n,h,c,A,d,k,p,B,l,C,D){f=z([w,v,x,u,t,f,r],{declaredClass:"esri.dijit.analysis.DescribeDataset",templateString:D,widgetsInTemplate:!0,inputLayer:void 0,inputLayers:[],extentOutput:!1,sampleSize:void 0,primaryActionButttonClass:"btn calcite primary",toolName:"DescribeDataset",helpFileName:"DescribeDataset",resultName:"",resultParameter:"output",returnProcessInfo:!0,constructor:function(a,b){this._pbConnects=[];a.containerNode&&(this.container=a.containerNode)},
destroy:function(){this.inherited(arguments);y.forEach(this._pbConnects,m.disconnect);delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments);c.mixin(this.i18n,C)},postCreate:function(){this.inherited(arguments);this.filterObjects=[{layer:"inputLayer",select:this._inputLayerSelect,expressionObj:"attributeExprObj"}];this._buildUI()},startup:function(){},_onClose:function(a){a&&(this._save(),this.emit("save",{save:!0}));this.emit("close",{save:a})},_buildJobParams:function(){var a=
{};a.inputLayer=h.toJson(this.constructAnalysisInputLyrObj(this.inputLayer,this.showGeoAnalyticsParams));this.get("extentOutput")&&(a.extentOutput=this.get("extentOutput"));this._sampleLayerCheck.get("value")&&(a.sampleSize=this.get("sampleSize"));a.returnProcessInfo=this.returnProcessInfo;this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.context=h.toJson({extent:this.map.extent._normalize(!0)}));if(this.returnFeatureCollection){var b={outSR:this.map.spatialReference};this.showChooseExtent&&
this._useExtentCheck.get("checked")&&(b.extent=this.map.extent._normalize(!0));a.context=h.toJson(b)}else a.OutputName=h.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}});return this._updateJobFilterAndSelection(a)},_handleSaveBtnClick:function(a){if(this._form.validate()){a={};this._saveBtn.set("disabled",!0);a.jobParams=this._buildJobParams();this.showGeoAnalyticsParams&&(a.isSpatioTemporalDataStore=!0);var b={description:l.substitute(this.i18n.itemDescription,{layerName:this.inputLayer.name||
this.inputLayer.title}),tags:l.substitute(this.i18n.itemTags,{layerName:this.inputLayer.name||this.inputLayer.title}),snippet:this.i18n.itemSnippet};this.showSelectFolder&&(b.folder=this.get("folderId"));a.itemParams=b;this.execute(a)}},_handleShowCreditsClick:function(a){a.preventDefault();this._form.validate()&&this.getCreditsEstimate(this.toolName,this._buildJobParams()).then(c.hitch(this,function(a){this._usageForm.set("content",a);this._usageDialog.show()}))},_save:function(){},_buildUI:function(){this.signInPromise.then(c.hitch(this,
e.initHelpLinks,this.domNode,this.showHelp,{analysisGpServer:this.analysisGpServer}));this.get("showSelectAnalysisLayer")&&(this.inputLayer=this.setDefaultLayer(this.inputLayer,this.inputLayers),e.populateAnalysisLayers(this,"inputLayer","inputLayers",{layerSelect:this._inputLayerSelect}));e.addReadyToUseLayerOption(this,[this._inputLayerSelect]);d.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":"none");d.set(this._showCreditsLink,"display",!0===this.showCredits?"block":
"none");this._loadConnections();0<this.sampleSize&&this._sampleLayerCheck.set("value",!0);this._extentLayerCheck.set("value",this.extentOutput);this._updateOutputLayerName(this.rerun);this._createFilterAndSelections()},_updateOutputLayerName:function(a){a?this._outputLayerInput.set("value",this.OutputName.serviceProperties.name):this.inputLayer&&(a=l.substitute(this.i18n.resultName,{layerName:this.inputLayer.name||this.inputLayer.title}),this._outputLayerInput.set("value",a))},_handleInputLayerChange:function(a){this.isAppendToLayerSelected=
!0;this._checkBrowseLayer(a,!0)||(this.inputLayer=this.inputLayers[a]);this._updateOutputLayerName()},_handleSampleCheckChanged:function(a){a?(d.set(this._selectNoofSamplesRow,"display",""),this._sampleSizeInput.set("required",!0),k.add(this._sampleLayerLabel,"selected"),this._sampleSizeInput.set("constraints",{min:1,places:0}),this._handleNumberOfSamplesChange(this._sampleSizeInput.get("value"))):(this._sampleSizeInput.set("required",!1),d.set(this._selectNoofSamplesRow,"display","none"),k.remove(this._sampleLayerLabel,
"selected"),this._sampleSizeInput.set("constraints",{}))},_handleExtentCheckChanged:function(a){a?k.add(this._extentLayerLabel,"selected"):k.remove(this._extentLayerLabel,"selected")},_handleNumberOfSamplesChange:function(a){void 0!==a&&this.set("sampleSize",a)},_checkBrowseLayer:function(a){return"browse"===a||"browselayers"===a?(this._createBrowseItems({browseValue:a,disabledSubResources:[this.inputLayer]},{layerTypes:[g.TABLE,g.BTABLE,g.FLAYER,g.BDATAFEATURE]},this._inputLayerSelect),!0):!1},setDefaultLayer:function(a,
b){a&&b&&!e.isLayerInLayers(a,b)&&b.push(a);return a||!b||this.rerun?a:b[0]},_handleBrowseItemsSelect:function(a,b){a&&a.selection&&e.addAnalysisReadyLayer({item:a.selection,layers:this.inputLayers,layersSelect:this._inputLayerSelect,browseDialog:a.dialog||this._browsedlg,posIncrement:0,widget:this},b)},_loadConnections:function(){this.on("start",c.hitch(this,"_onClose",!0));this._connect(this._closeBtn,"onclick",c.hitch(this,"_onClose",!1))},_showMessages:function(a){A.set(this._bodyNode,"innerHTML",
a);n.fadeIn({node:this._errorMessagePane,easing:p.quadIn,onEnd:c.hitch(this,function(){d.set(this._errorMessagePane,{display:""})})}).play();window.setTimeout(c.hitch(this,this._handleCloseMsg),3E3)},_handleCloseMsg:function(a){a&&a.preventDefault();n.fadeOut({node:this._errorMessagePane,easing:p.quadOut,onEnd:c.hitch(this,function(){d.set(this._errorMessagePane,{display:"none"})})}).play()},_setAnalysisGpServerAttr:function(a){a&&(this.analysisGpServer=a,this.set("toolServiceUrl",this.analysisGpServer+
"/"+this.toolName))},_setInputLayerAttr:function(a){this.inputLayer=a},_setInputLayersAttr:function(a){this.inputLayers=a},_setExtentOutputAttr:function(a){this._extentLayerCheck.set("checked",!!a)},_getExtentOutputAttr:function(){return this._extentLayerCheck.get("checked")},_setSampleSizeAttr:function(a){void 0===a?this._sampleLayerCheck.set("value",!1):(this._sampleLayerCheck.set("value",!0),this._sampleSizeInput.set("value",a));this.sampleSize=a},_getSampleSizeAttr:function(){return this.sampleSize},
_setDisableRunAnalysisAttr:function(a){this._saveBtn.set("disabled",a)},_connect:function(a,b,c){this._pbConnects.push(m.connect(a,b,c))}});B("extend-esri")&&c.setObject("dijit.analysis.DescribeDataset",f,q);return f});
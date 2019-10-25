// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/templates/SummarizeCenterAndDispersion.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" style\x3d"margin-top:0.5em; margin-bottom: 0.5em;"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_SummarizeCenterAndDispersionToolContentTitle" class\x3d"analysisTitle"\x3e\r\n         \x3ctable class\x3d"esriFormTable" \x3e\r\n            \x3ctr\x3e\r\n              \x3ctd class\x3d"esriToolIconTd"\x3e\x3cdiv class\x3d"summarizeCenterAndDispersionIcon"\x3e\x3c/div\x3e\x3c/td\x3e\r\n              \x3ctd class\x3d"esriAlignLeading esriAnalysisTitle" data-dojo-attach-point\x3d"_toolTitle"\x3e\r\n                \x3clabel data-dojo-attach-point\x3d"_titleLbl"\x3e${i18n.summarizeCenterAndDispersion}\x3c/label\x3e\r\n                \x3cnav class\x3d"breadcrumbs"  data-dojo-attach-point\x3d"_analysisModeLblNode" style\x3d"display:none;"\x3e\r\n                  \x3ca href\x3d"#" class\x3d"crumb" style\x3d"font-size:12px;" data-dojo-attach-event\x3d"onclick:_handleModeCrumbClick" data-dojo-attach-point\x3d"_analysisModeCrumb"\x3e\x3c/a\x3e\r\n                  \x3ca href\x3d"#" class\x3d"crumb is-active" data-dojo-attach-point\x3d"_analysisTitleCrumb" style\x3d"font-size:16px;"\x3e${i18n.summarizeCenterAndDispersion}\x3c/a\x3e\r\n                \x3c/nav\x3e\r\n              \x3c/td\x3e\r\n              \x3ctd\x3e\r\n              \x3cdiv class\x3d"esriFloatTrailing" style\x3d"padding:0;"\x3e\r\n                \x3cdiv class\x3d"esriFloatLeading"\x3e\r\n                  \x3ca href\x3d"#" class\x3d\'esriFloatLeading helpIcon\' esriHelpTopic\x3d"toolDescription"\x3e\x3c/a\x3e\r\n                \x3c/div\x3e\r\n                \x3cdiv class\x3d"esriFloatTrailing"\x3e\r\n                  \x3ca href\x3d"#" data-dojo-attach-point\x3d"_closeBtn" title\x3d"${i18n.close}" class\x3d"esriAnalysisCloseIcon"\x3e\x3c/a\x3e\r\n                \x3c/div\x3e\r\n              \x3c/div\x3e\r\n              \x3c/td\x3e\r\n            \x3c/tr\x3e\r\n         \x3c/table\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv style\x3d"clear:both; border-bottom: #CCC thin solid; height:1px;width:100%;"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"_form" readOnly\x3d"true"\x3e\r\n    \x3ctable class\x3d"esriFormTable"\x3e\r\n      \x3ctbody\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.inputLayerLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput" width\x3d"1%"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"analysisLayer"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cselect class\x3d"esriLeadingMargin1 longInput esriAnalysisSelect esriLongLabel" data-dojo-type\x3d"dijit/form/Select" data-dojo-props\x3d"required:true" data-dojo-attach-point\x3d"_analysisSelect" data-dojo-attach-event\x3d"onChange:_handleInputLayerChange"\x3e\x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.twoLabel}\x3c/label\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"summarizeTypes"\x3e\x3c/a\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.summaryTypes}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3clabel class\x3d"esriLeadingMargin1"\x3e\r\n               \x3cdiv data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-attach-point\x3d"_centralFeatureCheck" data-dojo-props\x3d"checked:false"\x3e\x3c/div\x3e\r\n               ${i18n.centralFeature}\r\n            \x3c/label\x3e \r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3clabel class\x3d"esriLeadingMargin1"\x3e\r\n               \x3cdiv data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-attach-point\x3d"_meanCenterCheck" data-dojo-props\x3d"checked:false"\x3e\x3c/div\x3e\r\n               ${i18n.meanCenter}\r\n            \x3c/label\x3e \r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3clabel class\x3d"esriLeadingMargin1"\x3e\r\n               \x3cdiv data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-attach-point\x3d"_medianCenterCheck" data-dojo-props\x3d"checked:false"\x3e\x3c/div\x3e\r\n               ${i18n.medianCenter}\r\n            \x3c/label\x3e \r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3clabel class\x3d"esriLeadingMargin1"\x3e\r\n               \x3cdiv data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-attach-point\x3d"_ellipseCheck" data-dojo-props\x3d"checked:false" data-dojo-attach-event\x3d"onClick:_handleElipseCheck"\x3e\x3c/div\x3e\r\n               ${i18n.ellipse}\r\n            \x3c/label\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/components/ToggleIconButtons" data-dojo-props\x3d"\r\n            buttons:[{icon: \'bufferIcon oneSdIcon\',label: \'${i18n.oneLabel}SD\', value:\'1 standard deviation\' , title:\'${i18n.oneLabel}SD\'},{icon: \'bufferIcon twoSdIcon\',label: \'${i18n.twoLabel}SD\', value:\'2 standard deviations\' , title:\'${i18n.twoLabel}SD\'},{icon: \'bufferIcon threeSdIcon\',label: \'${i18n.threeLabel}SD\', value:\'3 standard deviations\', title:\'${i18n.threeLabel}SD\'}]" data-dojo-attach-point\x3d"_toggleButton"\x3e\r\n              \x3c/div\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.threeLabel}\x3c/label\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"weightBy"\x3e\x3c/a\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.weightBy}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cselect class\x3d"esriLeadingMargin1 longInput esriAnalysisSelect esriLongLabel" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_weightBySelect"\x3e\x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.fourLabel}\x3c/label\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"groupBy"\x3e\x3c/a\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.groupBy}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cselect class\x3d"esriLeadingMargin1 longInput esriAnalysisSelect esriLongLabel" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_groupBySelect"\x3e\x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.fiveLabel}\x3c/label\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"outputName"\x3e\x3c/a\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.resultLayerName}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"trim:true,required:true" class\x3d"esriOutputText esriLeadingMargin1" data-dojo-attach-point\x3d"_outputLayerInput"\x3e\x3c/input\x3e\r\n          \x3c/td\x3e                \r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n             \x3cdiv class\x3d"esriLeadingMargin1" data-dojo-attach-point\x3d"_chooseFolderRow"\x3e\r\n               \x3clabel style\x3d"width:9px;font-size:smaller;"\x3e${i18n.saveResultIn}\x3c/label\x3e\r\n               \x3cinput class\x3d"longInput" data-dojo-attach-point\x3d"_webMapFolderSelect" data-dojo-type\x3d"dijit/form/FilteringSelect" trim\x3d"true" style\x3d"width:60%;"\x3e\x3c/input\x3e\r\n             \x3c/div\x3e              \r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e  \r\n      \x3c/tbody\x3e\r\n    \x3c/table\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv style\x3d"padding:5px;margin-top:5px;border-top:solid 1px #BBB;"\x3e\r\n      \x3cdiv class\x3d"esriExtentCreditsCtr"\x3e\r\n        \x3ca class\x3d"esriFloatTrailing esriSmallFont"  href\x3d"#" data-dojo-attach-point\x3d"_showCreditsLink"\x3e${i18n.showCredits}\x3c/a\x3e\r\n        \x3clabel data-dojo-attach-point\x3d"_chooseExtentDiv" class\x3d"esriSelectLabel esriExtentLabel"\x3e\r\n          \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_useExtentCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true" name\x3d"extent" value\x3d"true"/\x3e\r\n           ${i18n.useMapExtent}\r\n        \x3c/label\x3e\r\n      \x3c/div\x3e\r\n    \x3cbutton data-dojo-type\x3d"dijit/form/Button" type\x3d"submit" data-dojo-attach-point\x3d"_saveBtn" class\x3d"esriLeadingMargin4 esriAnalysisSubmitButton" data-dojo-attach-event\x3d"onClick:_handleSaveBtnClick"\x3e\r\n      ${i18n.runAnalysis}\r\n    \x3c/button\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.creditTitle}" data-dojo-attach-point\x3d"_usageDialog" style\x3d"width:40em;"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/CreditEstimator"  data-dojo-attach-point\x3d"_usageForm"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"esriFormWarning esriRoundedBox" data-dojo-attach-point\x3d"_errorMessagePane" style\x3d"display:none;"\x3e\r\n    \x3ca href\x3d"#" title\x3d"${i18n.close}" class\x3d"esriFloatTrailing esriAnalysisCloseIcon" title\x3d\'${i18n.close}\' data-dojo-attach-event\x3d"onclick:_handleCloseMsg"\x3e\r\n    \x3c/a\x3e\r\n    \x3cspan data-dojo-attach-point\x3d"_bodyNode"\x3e\x3c/span\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/analysis/SummarizeCenterAndDispersion","../../kernel ../../lang ./_AnalysisOptions ./AnalysisBase ./AnalysisRegistry ./CreditEstimator ./ItemTypes ./utils ./components/ToggleIconButtons dijit/Dialog dijit/_FocusMixin dijit/_OnDijitClickMixin dijit/_TemplatedMixin dijit/_WidgetBase dijit/_WidgetsInTemplateMixin dijit/form/Form dijit/form/CheckBox dijit/form/ValidationTextBox dijit/form/FilteringSelect dijit/form/Button dijit/form/Select dijit/layout/ContentPane dojo/_base/array dojo/_base/connect dojo/_base/declare dojo/_base/fx dojo/_base/json dojo/_base/lang dojo/dom-attr dojo/dom-class dojo/dom-style dojo/fx/easing dojo/has dojo/i18n!../../nls/jsapi dojo/i18n!./nls/SummarizeCenterAndDispersion dojo/string dojo/text!./templates/SummarizeCenterAndDispersion.html".split(" "),
function(r,k,f,t,e,F,G,d,H,I,u,v,w,x,y,J,K,L,M,N,O,P,l,n,z,p,g,b,A,B,h,q,C,Q,D,m,E){f=z([x,w,y,v,u,f,t],{declaredClass:"esri.dijit.analysis.SummarizeCenterAndDispersion",templateString:E,widgetsInTemplate:!0,analysisLayer:void 0,inputLayers:[],summarizeType:"CentralFeature",weightField:"",groupField:"",toolName:"SummarizeCenterAndDispersion",helpFileName:"SummarizeCenterAndDispersion",resultParameter:["centralFeatureResultLayer","meanCenterResultLayer","medianCenterResultLayer","ellipseResultLayer"],
constructor:function(a,c){this._pbConnects=[];a.containerNode&&(this.container=a.containerNode)},destroy:function(){this.inherited(arguments);l.forEach(this._pbConnects,n.disconnect);delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments);b.mixin(this.i18n,D)},postCreate:function(){this.inherited(arguments);B.add(this._form.domNode,"esriSimpleForm");this._buildUI();this._outputLayerInput.set("validator",b.hitch(this,this.validateServiceName))},startup:function(){},_onClose:function(a){a&&
(this._save(),this.emit("save",{save:!0}));this.emit("close",{save:a})},_buildJobParams:function(){var a={};a.analysisLayer=g.toJson(this.constructAnalysisInputLyrObj(this.analysisLayer));a.summarizeType=this._getSummarizeTypeJobParam();a.weightField=this._weightBySelect.get("value");a.groupField=this._groupBySelect.get("value");-1<a.summarizeType.indexOf("Ellipse")&&(a.ellipseSize=this.ellipseSize);this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.context=g.toJson({extent:this.map.extent._normalize(!0)}));
if(this.returnFeatureCollection){var c={outSR:this.map.spatialReference};this.showChooseExtent&&this._useExtentCheck.get("checked")&&(c.extent=this.map.extent._normalize(!0));a.context=g.toJson(c)}else a.OutputName=g.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}});return a},_getSummarizeTypeJobParam:function(){var a=[];this._centralFeatureCheck.get("checked")&&a.push("CentralFeature");this._meanCenterCheck.get("checked")&&a.push("MeanCenter");this._medianCenterCheck.get("checked")&&
a.push("MedianCenter");this._ellipseCheck.get("checked")&&a.push("Ellipse");return a},_handleSaveBtnClick:function(a){this._form.validate()&&(0===this._getSummarizeTypeJobParam().length?this._showMessages(this.i18n.summaryTypes+" "+this.i18n.none):(a={},this._saveBtn.set("disabled",!0),a.jobParams=this._buildJobParams(),a.itemParams={description:m.substitute(this.i18n.itemDescription,{layerName:this.analysisLayer.name}),tags:m.substitute(this.i18n.itemTags,{layerName:this.analysisLayer.name}),snippet:this.i18n.itemSnippet},
this.showSelectFolder&&(a.itemParams.folder=this.get("folderId")),this.execute(a)))},_handleShowCreditsClick:function(a){a.preventDefault();this._form.validate()&&this.getCreditsEstimate(this.toolName,this._buildJobParams()).then(b.hitch(this,function(a){this._usageForm.set("content",a);this._usageDialog.show()}))},_save:function(){},_buildUI:function(){this.signInPromise.then(b.hitch(this,d.initHelpLinks,this.domNode,this.showHelp,{analysisGpServer:this.analysisGpServer}));this.get("showSelectAnalysisLayer")&&
(this.analysisLayer=this.setDefaultLayer(this.analysisLayer,this.inputLayers),d.populateAnalysisLayers(this,"analysisLayer","inputLayers"));d.addReadyToUseLayerOption(this,[this._analysisSelect]);h.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":"none");h.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none");this._loadConnections();this.setOutputName();this.setColumnSelectOptions();this.setSummary();this.setFolder()},setFolder:function(){this.showSelectFolder&&
this.getFolderStore().then(b.hitch(this,function(a){this.folderStore=a;d.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})}))},setDefaultLayer:function(a,c){a&&c&&!d.isLayerInLayers(a,c)&&c.push(a);return a||!c||this.rerun?a:c[0]},_handleInputLayerChange:function(a){""===a||this._checkBrowseLayer(a,!0)||(this.analysisLayer=this.inputLayers[a],k.isDefined(this.analysisLayer)&&
(this.set("groupField",""),this.set("weightField",""),this.setColumnSelectOptions(),this.setOutputName()))},_handleElipseCheck:function(){this._ellipseCheck.get("checked")?this._toggleButton.set("selectedButton","1 standard deviation"):(this.ellipseSize="",this._toggleButton.reset())},changeStdDev:function(a){this._ellipseCheck.set("checked",!0);this.ellipseSize=a.value},setColumnSelectOptions:function(){var a=[],c=[];this._weightBySelect.removeOption(this._weightBySelect.getOptions());this._groupBySelect.removeOption(this._groupBySelect.getOptions());
c.push({label:this.i18n.none,value:"",selected:!this.weightField||""===this.weightField});a.push({label:this.i18n.none,value:"",selected:!this.groupField||""===this.groupField});if(k.isDefined(this.analysisLayer)){var d=l.filter(this.analysisLayer.fields,b.hitch(this,function(a){return a.type!==e.FieldTypes.ObjectId}));l.forEach(d,function(b){this.isNumberType(b.type)&&c.push(this.getOption(b,this.weightField));this.isFloatType(b.type)||a.push(this.getOption(b,this.groupField))},this);this._weightBySelect.addOption(c);
this._groupBySelect.addOption(a)}},isFloatType:function(a){return a===e.FieldTypes.Double||a===e.FieldTypes.Float},isNumberType:function(a){return a===e.FieldTypes.Integer||a===e.FieldTypes.Short||this.isFloatType(a)},setSummary:function(){this.summarizeType?(-1<this.summarizeType.indexOf("CentralFeature")&&this._centralFeatureCheck.set("checked",!0),-1<this.summarizeType.indexOf("MeanCenter")&&this._meanCenterCheck.set("checked",!0),-1<this.summarizeType.indexOf("MedianCenter")&&this._medianCenterCheck.set("checked",
!0),-1<this.summarizeType.indexOf("Ellipse")&&this._toggleButton.set("selectedButton",this.ellipseSize)):this._centralFeatureCheck.set("checked",!0)},setOutputName:function(){k.isDefined(this.analysisLayer)&&(this.outputLayerName=m.substitute(this.i18n.outputLayerName,{layerName:this.analysisLayer.name}),this._outputLayerInput.set("value",this.outputLayerName))},getOption:function(a,c){return{value:a.name,label:a.alias,selected:c===a.name}},_checkBrowseLayer:function(a){return"browse"===a||"browselayers"===
a?(this._createBrowseItems({browseValue:a},{tags:["point","polygon","line"],geometryTypes:[e.GeometryTypes.Point,e.GeometryTypes.Line,e.GeometryTypes.Polygon]},this._analysisSelect),!0):!1},_handleBrowseItemsSelect:function(a,c){a&&a.selection&&d.addAnalysisReadyLayer({item:a.selection,layers:this.inputLayers,layersSelect:this._analysisSelect,browseDialog:a.dialog||this._browsedlg,posIncrement:0,widget:this},c)},_loadConnections:function(){this.on("start",b.hitch(this,"_onClose",!0));this._toggleButton.on("change",
b.hitch(this,this.changeStdDev));this._connect(this._closeBtn,"onclick",b.hitch(this,"_onClose",!1))},_showMessages:function(a){A.set(this._bodyNode,"innerHTML",a);p.fadeIn({node:this._errorMessagePane,easing:q.quadIn,onEnd:b.hitch(this,function(){h.set(this._errorMessagePane,{display:""})})}).play();window.setTimeout(b.hitch(this,this._handleCloseMsg),3E3)},_handleCloseMsg:function(a){a&&a.preventDefault();p.fadeOut({node:this._errorMessagePane,easing:q.quadOut,onEnd:b.hitch(this,function(){h.set(this._errorMessagePane,
{display:"none"})})}).play()},_setAnalysisGpServerAttr:function(a){a&&(this.analysisGpServer=a,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},validateServiceName:function(a){return d.validateServiceName(a,{textInput:this._outputLayerInput,isItem:!this.returnFeatureCollection})},_setAnalysisLayerAttr:function(a){this.analysisLayer=a},_setInputLayersAttr:function(a){this.inputLayers=a},_setSummarizeTypeAttr:function(a){this.summarizeType=a},_setWeightFieldAttr:function(a){this.weightField=
a},_setGroupFieldAttr:function(a){this.groupField=a},_setDisableRunAnalysisAttr:function(a){this._saveBtn.set("disabled",a)},_connect:function(a,c,b){this._pbConnects.push(n.connect(a,c,b))}});C("extend-esri")&&b.setObject("dijit.analysis.SummarizeCenterAndDispersion",f,r);return f});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/templates/GeneralizedLinearRegression.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" style\x3d"margin-top:0.5em; margin-bottom: 0.5em;"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_generalizedLinearRegressionToolContentTitle" class\x3d"analysisTitle"\x3e\r\n      \x3ctable class\x3d"esriFormTable" \x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"esriToolIconTd"\x3e\x3cdiv class\x3d"generalizedLinearRegressionIcon"\x3e\x3c/div\x3e\x3c/td\x3e\r\n          \x3ctd class\x3d"esriAlignLeading esriAnalysisTitle" data-dojo-attach-point\x3d"_toolTitle"\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_titleLbl"\x3e${i18n.generalizedLinearRegression}\x3c/label\x3e\r\n            \x3cnav class\x3d"breadcrumbs"  data-dojo-attach-point\x3d"_analysisModeLblNode"\x3e\r\n              \x3ca href\x3d"#" class\x3d"crumb breadcrumbs__modelabel" data-dojo-attach-event\x3d"onclick:_handleModeCrumbClick" data-dojo-attach-point\x3d"_analysisModeCrumb"\x3e\x3c/a\x3e\r\n              \x3ca href\x3d"#" class\x3d"crumb is-active" data-dojo-attach-point\x3d"_analysisTitleCrumb" style\x3d"font-size:16px;"\x3e${i18n.generalizedLinearRegression}\x3c/a\x3e\r\n            \x3c/nav\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd\x3e\r\n            \x3cdiv class\x3d"esriFloatTrailing" style\x3d"padding:0;"\x3e\r\n              \x3cdiv class\x3d"esriFloatLeading"\x3e\r\n                \x3ca href\x3d"#" class\x3d\'esriFloatLeading helpIcon\' esriHelpTopic\x3d"toolDescription"\x3e\x3c/a\x3e\r\n              \x3c/div\x3e\r\n              \x3cdiv class\x3d"esriFloatTrailing"\x3e\r\n                \x3ca href\x3d"#" data-dojo-attach-point\x3d"_closeBtn" title\x3d"${i18n.close}" class\x3d"esriAnalysisCloseIcon"\x3e\x3c/a\x3e\r\n              \x3c/div\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/table\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"separatorLine"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"_stackDiv" class\x3d"fullSpread"\x3e\x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" class\x3d"fullSpread" data-dojo-attach-point\x3d"_taskPane"\x3e\r\n    \x3cdiv\x3e\r\n      \x3clabel class\x3d"analysisTitle"\x3e${i18n.selectGoal}\x3c/label\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"padTop05" data-dojo-attach-point\x3d"_goalNode1" data-dojo-type\x3d"esri/dijit/analysis/AnalysisToolItem" data-dojo-props\x3d"helpTopic:\'fit\',name:\'${i18n.fitGoal}\',toolIcon:\'mlFitIcon\'"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"padTop05" data-dojo-attach-point\x3d"_goalNode2" data-dojo-type\x3d"esri/dijit/analysis/AnalysisToolItem" data-dojo-props\x3d"helpTopic:\'fitAndPredict\',name:\'${i18n.fitAndPredictGoal}\',toolIcon:\'mlFitAndPredictIcon\'"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" class\x3d"fullSpread" data-dojo-attach-point\x3d"_toolPane"\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"_form" readOnly\x3d"true"\x3e\r\n      \x3ctable class\x3d"esriFormTable"  data-dojo-attach-point\x3d"_generalizedLinearRegressionTable"\x3e\r\n        \x3ctbody\x3e\r\n        \x3c!--A Line/Horzontal Divider--\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_titleRow" style\x3d"display: none;"\x3e\r\n          \x3ctd colspan\x3d"3" class\x3d"sectionHeader one-width" data-dojo-attach-point\x3d"_generalizedLinearRegressionToolDescription"\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3c!--Input Layer | Title--\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_analysisLabelRow"\x3e\r\n          \x3ctd colspan\x3d"2" class\x3d"width-90 padBottom0"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.inputLayerLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput padBottom0"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"inputLayer"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3c!--Input Layer | Select Box Widget--\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_selectAnalysisRow"\x3e\r\n          \x3ctd  colspan\x3d"3" class\x3d"padTop0"\x3e\r\n            \x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel"  style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_analysisSelect" data-dojo-props\x3d"required:true" data-dojo-attach-event\x3d"onChange:_handleAnalysisLayerChange"\x3e\x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3c!--Choose the field to model | Title--\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_labelOne" class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.twoLabel}\x3c/label\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_polylabel" class\x3d"esriAnalysisStepsLabel"\x3e${i18n.chooseDependentField}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' data-dojo-attach-point\x3d"_analysisFieldHelpLink" esriHelpTopic\x3d"dependentVariable"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3c!-- Choose field to model | Select widget --\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_selectAnalysisRow"\x3e\r\n          \x3ctd  colspan\x3d"3" style\x3d"padding-top:0"\x3e\r\n            \x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel"  style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_dependentFieldSelect" data-dojo-props\x3d"required:true" data-dojo-attach-event\x3d"onChange:_handleDependentFieldChange"\x3e\x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3c!--Choose data type | Label--\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3cdiv class\x3d"esriLeadingMargin1"\x3e\r\n              \x3clabel\x3e${i18n.chooseDataType}\x3c/label\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3c!--Data types | Icon Strip--\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd data-dojo-attach-point\x3d"bufTypeTd" colspan\x3d"2"\x3e\r\n            \x3ctable class\x3d"one-width"\x3e\r\n              \x3ctr\x3e\r\n                \x3ctd class\x3d"onebythree-width"\x3e\r\n                  \x3cdiv class\x3d"bufferSelector" data-dojo-attach-point\x3d"_continuousData"\x3e\r\n                    \x3cdiv class\x3d"bufferIcon continuousDataIcon"\x3e\x3c/div\x3e\r\n                    \x3cdiv\x3e\x3clabel class\x3d"esriSelectLabel"\x3e${i18n.continuousData}\x3c/label\x3e\x3c/div\x3e\r\n                  \x3c/div\x3e\r\n                \x3c/td\x3e\r\n                \x3ctd class\x3d"onebythree-width"\x3e\r\n                  \x3cdiv class\x3d"bufferSelector" data-dojo-attach-point\x3d"_binaryData"\x3e\r\n                    \x3cdiv class\x3d"bufferIcon binaryDataIcon"\x3e\x3c/div\x3e\r\n                    \x3cdiv\x3e\x3clabel class\x3d"esriSelectLabel"\x3e${i18n.binaryData}\x3c/label\x3e\x3c/div\x3e\r\n                  \x3c/div\x3e\r\n                \x3c/td\x3e\r\n                \x3ctd class\x3d"onebythree-width"\x3e\r\n                  \x3cdiv class\x3d"bufferSelector" data-dojo-attach-point\x3d"_countData"\x3e\r\n                    \x3cdiv class\x3d"bufferIcon countDataIcon"\x3e\x3c/div\x3e\r\n                    \x3cdiv\x3e\x3clabel class\x3d"esriSelectLabel"\x3e${i18n.countData}\x3c/label\x3e\x3c/div\x3e\r\n                  \x3c/div\x3e\r\n                \x3c/td\x3e                \r\n              \x3c/tr\x3e\r\n            \x3c/table\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3c!--Choose the explanatory variable | Title--\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.threeLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.chooseExplanatoryField}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"explanatoryVariables" data-dojo-attach-point\x3d"_outputLayerHelpNode"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3c!--Choose the explanatory variable | MultiSelect Widget--\x3e\r\n        \x3ctr\x3e      \r\n          \x3ctd colspan\x3d"3"\x3e  \r\n            \x3cselect class\x3d"esriLeadingMargin1 longInput esriMultiSelect" multiple\x3d"true" data-dojo-type\x3d"dojox/form/CheckedMultiSelect" data-dojo-props\x3d"required:true" data-dojo-attach-point\x3d"_explanatoryFieldSelect" data-dojo-attach-event\x3d"onChange:_handleExplanatoryFieldChange"\x3e\r\n            \x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3c!--Choose the featuresToPredict layer | Title--\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_featuresToPredictTitle"\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.fourLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.chooseFeaturesToPredict}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"featuresToPredict" data-dojo-attach-point\x3d"_outputLayerHelpNode"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3c!--Input Layer | Select Box Widget--\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_featuresToPredictWidget"\x3e\r\n          \x3ctd  colspan\x3d"3" class\x3d"padTop0"\x3e\r\n            \x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel"  style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_featuresToPredictSelect" data-dojo-attach-event\x3d"onChange:_handleFeaturesToPredictChange"\x3e\x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3c!--Choose the explanatory variable | Title--\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_addExplanatoryFieldsTitle"\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.fiveLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.chooseExplainMatch}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"explanatoryVariableMatching" data-dojo-attach-point\x3d"_outputLayerHelpNode"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3c!--Choose the explanatory variable | Component Widget--\x3e\r\n        \x3ctr data-dojo-type\x3d"esri/dijit/analysis/components/AddExplanatoryFields/AddExplanatoryFields" data-dojo-attach-point\x3d"_addExplanatoryFieldsComponent"\x3e\r\n        \x3c/tr\x3e \r\n        \x3c!--Result Layer | Title--\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel" data-dojo-attach-point\x3d"_resultLayerLabel"\x3e${i18n.sixLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.outputLayerLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"outputName" data-dojo-attach-point\x3d"_outputLayerHelpNode"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3c!--Result Layer | Text Box--\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"trim:true,required:true" class\x3d"longTextInput esriLeadingMargin1" data-dojo-attach-point\x3d"_outputLayerInput"\x3e\x3c/input\x3e\r\n          \x3c/td\x3e                \r\n        \x3c/tr\x3e\r\n        \x3c!--Save result in | Input Box--\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cdiv class\x3d"esriLeadingMargin1" data-dojo-attach-point\x3d"_chooseFolderRow"\x3e\r\n              \x3clabel style\x3d"font-size:smaller;"\x3e${i18n.saveResultIn}\x3c/label\x3e\r\n              \x3cinput class\x3d"longInput esriFolderSelect" data-dojo-attach-point\x3d"_webMapFolderSelect" data-dojo-type\x3d"dijit/form/FilteringSelect" trim\x3d"true"\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3c/tbody\x3e\r\n      \x3c/table\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"separatorLine"\x3e\x3c/div\x3e  \r\n    \x3cdiv data-dojo-attach-point\x3d"_generalizedLinearRegressionToolContentButtons"\x3e\r\n      \x3cdiv class\x3d"esriExtentCreditsCtr"\x3e\r\n        \x3ca class\x3d"esriFloatTrailing esriSmallFont"  href\x3d"#" data-dojo-attach-point\x3d"_showCreditsLink" data-dojo-attach-event\x3d"onclick:_handleShowCreditsClick"\x3e${i18n.showCredits}\x3c/a\x3e\r\n        \x3clabel data-dojo-attach-point\x3d"_chooseExtentDiv" class\x3d"esriSelectLabel esriExtentLabel"\x3e\r\n          \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_useExtentCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true" name\x3d"extent" value\x3d"true"/\x3e\r\n          ${i18n.useMapExtent}\r\n        \x3c/label\x3e\r\n      \x3c/div\x3e\r\n      \x3cbutton data-dojo-type\x3d"dijit/form/Button" type\x3d"submit" data-dojo-attach-point\x3d"_saveBtn" class\x3d"esriLeadingMargin4 esriAnalysisSubmitButton" data-dojo-attach-event\x3d"onClick:_handleSaveBtnClick"\x3e\r\n        ${i18n.runAnalysis}\r\n      \x3c/button\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.creditTitle}" data-dojo-attach-point\x3d"_usageDialog" style\x3d"width:40em;"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/CreditEstimator"  data-dojo-attach-point\x3d"_usageForm"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"esriFormWarning esriRoundedBox" data-dojo-attach-point\x3d"_errorMessagePane" style\x3d"display:none;"\x3e\r\n      \x3ca href\x3d"#" title\x3d"${i18n.close}" class\x3d"esriFloatTrailing esriAnalysisCloseIcon" title\x3d\'${i18n.close}\' data-dojo-attach-event\x3d"onclick:_handleCloseMsg"\x3e\r\n      \x3c/a\x3e\r\n      \x3cspan data-dojo-attach-point\x3d"_bodyNode"\x3e\x3c/span\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/analysis/GeneralizedLinearRegression","require dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/_base/json dojo/_base/fx dojo/has dojo/dom-style dojo/dom-class dojo/fx/easing dojo/string dojo/dom-attr dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin dijit/form/Button dijit/form/CheckBox dijit/form/Form dijit/form/Select dijit/form/ValidationTextBox dijit/layout/ContentPane dijit/form/FilteringSelect dojox/form/CheckedMultiSelect dijit/layout/StackContainer ../../kernel ./AnalysisBase ./utils ./_AnalysisOptions ./AnalysisRegistry ./AnalysisToolItem ./CreditEstimator ./components/AddExplanatoryFields/AddExplanatoryFields dojo/i18n!../../nls/jsapi dojo/i18n!./nls/GeneralizedLinearRegression dojo/text!./templates/GeneralizedLinearRegression.html".split(" "),
function(l,p,c,q,n,h,r,t,m,d,u,f,v,w,x,y,z,A,I,J,K,L,M,N,O,P,B,C,D,e,E,g,Q,R,S,F,G,H){l=p([w,x,y,z,A,E,D],{declaredClass:"esri.dijit.analysis.GeneralizedLinearRegression",templateString:H,widgetsInTemplate:!0,inputLayer:"",inputLayers:[],featuresToPredict:"",predictLayers:[],dependentVariable:"",explanatoryVariables:"",regressionFamily:"",explanatoryVariableMatching:"",outputLayerName:"",returnProcessInfo:!0,i18n:{},toolName:"GeneralizedLinearRegression",helpFileName:"GeneralizedLinearRegression",
resultParameter:["output"],mlGoals:{fit:"Fit",fitAndPredict:"Fit and Predict"},goal:"",allowedGeometryTypes:[g.GeometryTypes.Point,g.GeometryTypes.Line,g.GeometryTypes.Polygon,void 0],allowedGeometryTags:[g.PseudoGeometryTypes.Point,g.PseudoGeometryTypes.Line,g.PseudoGeometryTypes.Polygon],regressionFamilies:{continuous:"Continuous",binary:"Binary",count:"Count"},removeJobParamKeys:["featureExpresssionObject"],constructor:function(a){this._pbConnects=[];a.containerNode&&(this.container=a.containerNode)},
destroy:function(){this.inherited(arguments);q.forEach(this._pbConnects,n.disconnect);delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments);c.mixin(this.i18n,F.analysisTools);c.mixin(this.i18n,G)},postCreate:function(){this.inherited(arguments);d.add(this._form.domNode,"esriSimpleForm");this._outputLayerInput.set("validator",c.hitch(this,this.validateServiceName));this._buildStack();this.filterObjects=[{layer:"inputLayer",select:this._analysisSelect,expressionObj:"attributeExprObj"},
{layer:"featuresToPredict",select:this._featuresToPredictSelect,expressionObj:"featureExpresssionObject"}];this._buildUI();this._loadConnections()},startup:function(){this.inherited(arguments)},_getInputLayerAttr:function(){return this.inputLayer},_getDependentVariableAttr:function(){return this._dependentFieldSelect.get("value")},_getRegressionFamilyAttr:function(){return this.regressionFamily},_getExplanatoryVariablesAttr:function(){return this._explanatoryFieldSelect.get("value")},_getFeaturesToPredictAttr:function(){return this.featuresToPredict},
_getExplanatoryVariableMatchingAttr:function(){return this._addExplanatoryFieldsComponent.get("explanatoryVariableMatching")},_getOutputLayerNameAttr:function(){return this._outputLayerInput.get("value")},_setAnalysisGpServerAttr:function(a){a&&(this.analysisGpServer=a,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setGoalAttr:function(a){var b=this.i18n.generalizedLinearRegression,k="",c=this._taskPane,e=this.i18n.close;this._isMLGoal(a)&&(k=a,c=this._toolPane,e=this.i18n.back,
a===this.mlGoals.fit?(b=f.substitute(this.i18n.modifiedTitle,{goal:this.i18n.fit}),this._showPredictUI(!1)):(b=f.substitute(this.i18n.modifiedTitle,{goal:this.i18n.fitAndPredict}),this._showPredictUI(!0)));this.goal=k;this._toolTitle.innerHTML=b;this._stackContainer.selectChild(c);v.set(this._closeBtn,"title",e)},_showPredictUI:function(a){a?this._addExplanatoryFieldsComponent.enable():this._addExplanatoryFieldsComponent.disable();d.toggle(this._featuresToPredictTitle,"hide",!a);d.toggle(this._featuresToPredictWidget,
"hide",!a);this._featuresToPredictSelect.set("required",a);d.toggle(this._addExplanatoryFieldsTitle,"hide",!a);this._resultLayerLabel.innerHTML=a?this.i18n.sixLabel:this.i18n.fourLabel},_setInputLayerAttr:function(a){var b=!0;this.inputLayer=a;this._updateOutputLayerName();(b=e.addAttributeOptions({selectWidget:this._dependentFieldSelect,layer:a,allowSelectLabel:!1,priorityChange:!1}))||this._dependentFieldSelect._setDisplay("");this._handleDependentFieldChange(this._dependentFieldSelect.get("value"))},
_setInputLayersAttr:function(a){this.inputLayers=a;this.set("predictLayers",a)},_setDependentVariableAttr:function(a){this.dependentVariable=a;this._dependentFieldSelect.set("value",a,!1);this._handleDependentFieldChange(this._dependentFieldSelect.get("value"))},_setRegressionFamilyAttr:function(a){this.regressionFamily=a;d.toggle(this._continuousData,"selected",a===this.regressionFamilies.continuous);d.toggle(this._binaryData,"selected",a===this.regressionFamilies.binary);d.toggle(this._countData,
"selected",a===this.regressionFamilies.count)},_setExplanatoryVariablesAttr:function(a){this.explanatoryVariables="string"===typeof a?a.split(","):a;this._explanatoryFieldSelect.set("value",this.explanatoryVariables,!1);this._handleExplanatoryFieldChange(this._explanatoryFieldSelect.get("value"))},_setFeaturesToPredictAttr:function(a){this.featuresToPredict=a;this._addExplanatoryFieldsComponent.set("featuresToPredict",a);this._updateExplanatoryComponent()},_setPredictLayersAttr:function(a){this.predictLayers=
a},_updateExplanatoryComponent:function(){if(this.featuresToPredict&&this._explanatoryFieldSelect.get("value")){var a=[];this._explanatoryFieldSelect.getOptions().forEach(function(b){b.selected&&a.push(b)});this._addExplanatoryFieldsComponent.addRows(a)}},_setExplanatoryVariableMatchingAttr:function(a){this._addExplanatoryFieldsComponent.set("explanatoryVariableMatching",a)},_setOutputLayerNameAttr:function(a){this.outputLayerName=a;this._outputLayerInput.set("value",a)},_setDisableRunAnalysisAttr:function(a){this._saveBtn.set("disabled",
a)},_loadConnections:function(){this.on("start",c.hitch(this,"_onClose",!0));this._connect(this._closeBtn,"onclick",c.hitch(this,"_onClose",!1));this.own(this._goalNode1.on("tool-select",c.hitch(this,this._handleGoalSelect,this.mlGoals[this._goalNode1.helpTopic])),this._goalNode2.on("tool-select",c.hitch(this,this._handleGoalSelect,this.mlGoals[this._goalNode2.helpTopic])));this._connect(this._continuousData,"onclick",c.hitch(this,this._handleRegressionClick,this.regressionFamilies.continuous));this._connect(this._binaryData,
"onclick",c.hitch(this,this._handleRegressionClick,this.regressionFamilies.binary));this._connect(this._countData,"onclick",c.hitch(this,this._handleRegressionClick,this.regressionFamilies.count))},_connect:function(a,b,c){this._pbConnects.push(n.connect(a,b,c))},_onClose:function(a){a?(this._save(),this.emit("save",{save:!0}),this.emit("close",{save:a})):this._isMLGoal(this.goal)?this.set("goal",""):""===this.goal&&this.emit("close",{save:a})},_save:function(){},_handleCloseMsg:function(a){a&&a.preventDefault();
r.fadeOut({node:this._errorMessagePane,easing:u.quadOut,onEnd:c.hitch(this,function(){m.set(this._errorMessagePane,{display:"none"})})}).play()},_handleGoalSelect:function(a){this.set("goal",a)},_handleAnalysisLayerChange:function(a){this._isAnalysisSelect=!0;"browse"===a||"browselayers"===a?this._createBrowseItems({browseValue:a},{tags:this.allowedGeometryTags,geometryTypes:this.allowedGeometryTypes},this._analysisSelect):this.set("inputLayer",this.inputLayers[a])},_handleDependentFieldChange:function(a){var b=
this._dependentFieldSelect.getOptions().filter(function(b){return""!==b.value&&b.value!==a});e.updateOptions(this._explanatoryFieldSelect,b);this._addExplanatoryFieldsComponent.removeAllRows()},_handleRegressionClick:function(a){this.set("regressionFamily",a)},_handleExplanatoryFieldChange:function(a){this._updateExplanatoryComponent()},_handleFeaturesToPredictChange:function(a){this._isAnalysisSelect=!1;"browse"===a||"browselayers"===a?this._createBrowseItems({browseValue:a},{tags:this.allowedGeometryTags,
geometryTypes:this.allowedGeometryTypes},this._featuresToPredictSelect):this.set("featuresToPredict",this.predictLayers[a])},_handleBrowseItemsSelect:function(a,b){a&&a.selection&&e.addAnalysisReadyLayer({item:a.selection,layers:this._isAnalysisSelect?this.inputLayers:this.predictLayers,layersSelect:this._isAnalysisSelect?this._analysisSelect:this._featuresToPredictSelect,browseDialog:a.dialog||this._browsedlg,widget:this},b)},validateServiceName:function(a){return e.validateServiceName(a,{textInput:this._outputLayerInput,
isItem:!this.returnFeatureCollection})},_buildStack:function(){this._stackContainer=new B({doLayout:!1},this._stackDiv);this._stackContainer.addChild(this._taskPane);this._stackContainer.addChild(this._toolPane);this._stackContainer.startup()},_buildUI:function(){e.initHelpLinks(this.domNode,this.showHelp);this.get("showSelectAnalysisLayer")&&this._harmonizeLayerSelection();this.rerun&&this.set("outputLayerName",this.OutputName.serviceProperties.name);e.populateAnalysisLayers(this,"inputLayer","inputLayers");
this._populatefeatureToPredictSelect(this.featuresToPredict,this.predictLayers);e.addReadyToUseLayerOption(this,[this._analysisSelect,this._featuresToPredictSelect]);this.set("dependentVariable",this.dependentVariable);this.set("regressionFamily",this.regressionFamily||this.regressionFamilies.continuous);this.set("explanatoryVariables",this.explanatoryVariables);setTimeout(c.hitch(this,function(){this.set("explanatoryVariableMatching",this.explanatoryVariableMatching)}),0);m.set(this._chooseFolderRow,
"display",!0===this.showSelectFolder?"block":"none");m.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none");this._createFilterAndSelections()},_populatefeatureToPredictSelect:function(a,b){var c=[];b.forEach(function(b,d){var k=!!e.isSameLayer(b,a);c.push({value:d.toString(),label:b.name,selected:k})});e.updateOptions(this._featuresToPredictSelect,c)},_harmonizeLayerSelection:function(){var a=this.get("inputLayer"),b=this.get("inputLayers"),c=this.get("featuresToPredict"),d=this.get("predictLayers");
a&&b&&!e.isLayerInLayers(a,b)&&b.push(a);c&&d&&!e.isLayerInLayers(c,d)&&d.push(c);!a&&b&&this.set("inputLayer",b[0]);!c&&d&&this.set("featuresToPredict",d[0])},_updateOutputLayerName:function(){this.inputLayer&&this.set("outputLayerName",f.substitute(this.i18n.outputLayerName,{inputLayerName:this.inputLayer.name}))},_updateAnalysisLayerUI:function(){},_buildJobParams:function(){var a={},b={},a={inputLayer:h.toJson(this.constructAnalysisInputLyrObj(this.inputLayer)),dependentVariable:this.get("dependentVariable"),
regressionFamily:this.get("regressionFamily"),explanatoryVariables:this.get("explanatoryVariables").toString(),returnProcessInfo:this.get("returnProcessInfo")};this.goal===this.mlGoals.fitAndPredict&&(this.resultParameter.push("outputPredicted"),a.featuresToPredict=h.toJson(this.constructAnalysisInputLyrObj(this.featuresToPredict)),a.explanatoryVariableMatching=h.toJson(this.get("explanatoryVariableMatching")));this.showChooseExtent&&this._useExtentCheck.get("checked")&&(b.extent=this.map.extent._normalize(!0));
this.returnFeatureCollection?b.outSR=this.map.spatialReference:a.OutputName=h.toJson({serviceProperties:{name:this.get("outputLayerName")}});a.context=h.toJson(b);return this._updateJobFilterAndSelection(a)},_buildExecuteObj:function(){var a={};a.jobParams=this._buildJobParams();a.itemParams={description:f.substitute(this.i18n.itemDescription,{inputLayerName:this.inputLayer.name,goal:this.goal}),tags:f.substitute(this.i18n.itemTags,{inputLayerName:this.inputLayer.name,goal:this.goal}),snippet:f.substitute(this.i18n.itemSnippet,
{goal:this.goal})};this.showSelectFolder&&(a.itemParams.folder=this.get("folderId"));this.showGeoAnalyticsParams&&(a.isSpatioTemporalDataStore=!0);return a},_handleShowCreditsClick:function(a){},_handleSaveBtnClick:function(){var a;this._form.validate()&&(this.set("disableRunAnalysis",!0),a=this._buildExecuteObj(),this.execute(a))},_isMLGoal:function(a){return a===this.mlGoals.fit||a===this.mlGoals.fitAndPredict}});t("extend-esri")&&c.setObject("dijit.analysis.GeneralizedLinearRegression",l,C);return l});
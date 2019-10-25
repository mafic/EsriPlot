// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/templates/InterpolatePointsEBK.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" style\x3d"margin-top:0.5em; margin-bottom: 0.5em;"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_hotspotsToolContentTitle" class\x3d"analysisTitle"\x3e\r\n      \x3ctable class\x3d"esriFormTable" \x3e \r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"esriToolIconTd"\x3e\x3cdiv class\x3d"createInterpolatedRasterIcon"\x3e\x3c/div\x3e\x3c/td\x3e\r\n          \x3ctd class\x3d"esriAlignLeading esriAnalysisTitle" data-dojo-attach-point\x3d"_toolTitle"\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_titleLbl"\x3e${i18n.interpolatePoints}\x3c/label\x3e\r\n            \x3cnav class\x3d"breadcrumbs" data-dojo-attach-point\x3d"_analysisModeLblNode" style\x3d"display:none;"\x3e\r\n              \x3ca href\x3d"#" class\x3d"crumb breadcrumbs__modelabel" data-dojo-attach-event\x3d"onclick:_handleModeCrumbClick" data-dojo-attach-point\x3d"_analysisModeCrumb"\x3e\x3c/a\x3e\r\n              \x3ca href\x3d"#" class\x3d"crumb is-active" data-dojo-attach-point\x3d"_analysisTitleCrumb" style\x3d"font-size:16px;"\x3e${i18n.interpolatePoints}\x3c/a\x3e\r\n            \x3c/nav\x3e \r\n          \x3c/td\x3e\r\n          \x3ctd\x3e\r\n            \x3cdiv class\x3d"esriFloatTrailing" style\x3d"padding:0;"\x3e\r\n                \x3cdiv class\x3d"esriFloatLeading"\x3e\r\n                  \x3ca href\x3d"#" class\x3d\'esriFloatLeading helpIcon\' esriHelpTopic\x3d"toolDescription"\x3e\x3c/a\x3e\r\n                \x3c/div\x3e\r\n                \x3cdiv class\x3d"esriFloatTrailing"\x3e\r\n                  \x3ca href\x3d"#" data-dojo-attach-point\x3d"_closeBtn" title\x3d"${i18n.close}" class\x3d"esriAnalysisCloseIcon"\x3e\x3c/a\x3e\r\n                \x3c/div\x3e              \r\n            \x3c/div\x3e  \r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/table\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv style\x3d"clear:both; border-bottom: #CCC thin solid; height:1px;width:100%;"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"_form" readonly\x3d"true"\x3e\r\n    \x3ctable class\x3d"esriFormTable"\x3e\r\n      \x3ctbody\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_titleRow"\x3e\r\n          \x3ctd colspan\x3d"3" class\x3d"sectionHeader" data-dojo-attach-point\x3d"_interpolateToolDescription"\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_analysisLabelRow" style\x3d"display:none;"\x3e\r\n          \x3ctd colspan\x3d"2" style\x3d"padding-bottom:0;"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.analysisLayerLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom:0;"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esrihelptopic\x3d"inputPointFeatures"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_selectAnalysisRow" style\x3d"display:none;"\x3e\r\n          \x3ctd colspan\x3d"3" style\x3d"padding-top:0;"\x3e\r\n            \x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel" style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_analysisSelect" data-dojo-attach-event\x3d"onChange:_handleAnalysisLayerChange"\x3e\x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2" style\x3d"padding-bottom:0;"\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_labelTwo" class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_attrLabel" class\x3d"esriAnalysisStepsLabel"\x3e${i18n.selectAttributesLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom:0;"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' data-dojo-attach-point\x3d"_analysisFieldHelpLink" esrihelptopic\x3d"interpolateField"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3" style\x3d"padding-top:0;"\x3e\r\n            \x3cselect class\x3d"esriLeadingMargin1 longInput" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_interpolateFieldSelect"\x3e\x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_labelTwo" class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.twoLabel}\x3c/label\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_optimizeForLabel" class\x3d"esriAnalysisStepsLabel"\x3e${i18n.optimizeFor}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' data-dojo-attach-point\x3d"_analysisFieldHelpLink" esrihelptopic\x3d"optimizeFor"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cdiv class\x3d"esriLeadingMargin1" data-dojo-props\x3d"value:5,intermediateChanges:false,showButtons:true,minimum:1,maximum:9,discreteValues:3,pageIncrement:1" style\x3d"width:90%;" data-dojo-attach-point\x3d"_optimizeSlider" data-dojo-attach-event\x3d"onChange:_handleOptimizeSliderChange" type\x3d"range" data-dojo-type\x3d"dijit/form/HorizontalSlider"\x3e\r\n              \x3cdiv data-dojo-type\x3d"dijit/form/HorizontalRule" data-dojo-props\x3d"container: \'topDecoration\',count: 3,style: \'height: 0.5em;\'"\x3e\x3c/div\x3e\r\n              \x3col data-dojo-type\x3d"dijit/form/HorizontalRuleLabels" data-dojo-attach-point\x3d"_optimizeLabels" data-dojo-props\x3d"container: \'bottomDecoration\', count:3" style\x3d"margin-top:5px;height: 1em;"\x3e\r\n                \x3cli\x3e${i18n.speed}\x3c/li\x3e\r\n                \x3cli\x3e\x3c/li\x3e\r\n                \x3cli\x3e${i18n.accuracy}\x3c/li\x3e\r\n              \x3c/ol\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_optionsRow"\x3e\r\n          \x3ctd colspan\x3d"2" class\x3d"optionsTd"\x3e\r\n            \x3cdiv class\x3d"optionsClose" data-dojo-attach-point\x3d"_optionsDiv"\x3e\r\n              \x3cdiv class\x3d"dijitTreeExpando" data-dojo-attach-event\x3d"onclick:_handleOptionsBtnClick"\x3e\x3clabel class\x3d"esriLeadingMargin2 noWrapLabel"\x3e${i18n.options}\x3c/label\x3e\x3c/div\x3e\r\n              \x3ctable class\x3d"esriFormTable optionsTable"\x3e\r\n                \x3ctbody\x3e\r\n                  \x3ctr\x3e\r\n                    \x3ctd colspan\x3d"2"\x3e\r\n                      \x3clabel class\x3d"esriLeadingMargin1 esriSelectLabel"\x3e\r\n                        \x3cdiv data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-attach-point\x3d"_transformCheck" data-dojo-props\x3d"intermediateChanges:true,checked:false" data-dojo-attach-event\x3d"onClick:_handleTransformChange"\x3e\x3c/div\x3e\r\n                        ${i18n.transform}\r\n                      \x3c/label\x3e\r\n                    \x3c/td\x3e\r\n                    \x3ctd class\x3d"shortTextInput"\x3e\r\n                      \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esrihelptopic\x3d"transformData"\x3e\x3c/a\x3e\r\n                    \x3c/td\x3e\r\n                  \x3c/tr\x3e\r\n                  \x3ctr\x3e\r\n                    \x3ctd\x3e\r\n                      \x3clabel\x3e${i18n.sizeOfLocalModels}\x3c/label\x3e\r\n                    \x3c/td\x3e\r\n                    \x3ctd\x3e\r\n                      \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-props\x3d"intermediateChanges:true,trim:true, invalidMessage:\'${i18n.sizeOfLocalModelsInValidMsg}\', constraints:{min: 30, max: 500 }" class\x3d" longtextinput" data-dojo-attach-point\x3d"_sizeOfLocalModelsInput" data-dojo-attach-event\x3d"onChange:_handleSizeOfLocalModelsChange"\x3e\x3c/input\x3e\r\n                    \x3c/td\x3e\r\n                    \x3ctd class\x3d"shortTextInput"\x3e\r\n                      \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esrihelptopic\x3d"sizeOfLocalModels"\x3e\x3c/a\x3e\r\n                    \x3c/td\x3e\r\n                  \x3c/tr\x3e\r\n                  \x3ctr\x3e\r\n                    \x3ctd\x3e\r\n                      \x3clabel\x3e${i18n.numberOfNeighbors}\x3c/label\x3e\r\n                    \x3c/td\x3e\r\n                    \x3ctd\x3e\r\n                      \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-props\x3d"intermediateChanges:true,trim:true,invalidMessage:\'${i18n.numberOfNeighborsInValidMsg}\', constraints:{min: 1, max: 64} " class\x3d" longtextinput" data-dojo-attach-point\x3d"_numberOfNeighborsInput" data-dojo-attach-event\x3d"onChange:_handleNumberOfNeighborsChange"\x3e\x3c/input\x3e                        \r\n                    \x3c/td\x3e\r\n                    \x3ctd class\x3d"shortTextInput"\x3e\r\n                      \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esrihelptopic\x3d"numberOfNeighbors"\x3e\x3c/a\x3e\r\n                    \x3c/td\x3e\r\n                  \x3c/tr\x3e\r\n                \x3c/tbody\x3e\r\n              \x3c/table\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2" style\x3d"padding-bottom:0;"\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_labelTwo" class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.fourLabel}\x3c/label\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_celllabel" class\x3d"esriAnalysisStepsLabel"\x3e${i18n.outputCellsize}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom:0;"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esrihelptopic\x3d"outputCellSize"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3" style\x3d"padding:0;"\x3e\r\n            \x3ctable class\x3d"esriFormTable esriLeadingMargin1" style\x3d"width:90%;"\x3e\r\n              \x3ctbody\x3e\r\n                \x3ctr\x3e\r\n                  \x3ctd style\x3d"width:50%;padding-right:1em;"\x3e\r\n                    \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-props\x3d"intermediateChanges:true,invalidMessage:\'${i18n.cellsizeInValidMsg}\', constraints:{min: 0.0000000001}" data-dojo-attach-point\x3d"_outputCellSizeInput" style\x3d"width:100%;text-align:right"\x3e\r\n                  \x3c/td\x3e\r\n                  \x3ctd colspan\x3d"2"\x3e\r\n                    \x3cselect class\x3d"longInput esriAnalysisSelect esriLongLabel" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_cellSizeUnitsSelect"\x3e\x3c/select\x3e\r\n                  \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n              \x3c/tbody\x3e\r\n            \x3c/table\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_optionalOutputsRow"\x3e\r\n          \x3ctd colspan\x3d"2" class\x3d"optionsTd"\x3e\r\n            \x3cdiv class\x3d"esriLeadingMargin1 optionsClose" data-dojo-attach-point\x3d"_optionalOutputsDiv"\x3e\r\n              \x3cdiv class\x3d"dijitTreeExpando" data-dojo-attach-event\x3d"onclick:_handleOptionalOutputsBtnClick"\x3e\x3clabel class\x3d"esriLeadingMargin2 noWrapLabel"\x3e${i18n.optionalOutputs}\x3c/label\x3e\x3c/div\x3e\r\n              \x3ctable class\x3d"esriFormTable optionsTable"\x3e\r\n                \x3ctbody\x3e\r\n                  \x3ctr\x3e\r\n                    \x3ctd colspan\x3d"3" style\x3d"padding:0;"\x3e\r\n                      \x3ctable class\x3d"esriFormTable esriLeadingMargin2" style\x3d"width:90%;"\x3e\r\n                        \x3ctbody\x3e\r\n                          \x3ctr\x3e\r\n                            \x3ctd colspan\x3d"2"\x3e\r\n                              \x3clabel class\x3d"esriSelectLabel"\x3e\r\n                                \x3cdiv data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-attach-point\x3d"_predictionErrorCheck" data-dojo-props\x3d"intermediateChanges:true,checked:false"\x3e\x3c/div\x3e\r\n                                ${i18n.outputPredictionErrors}\r\n                              \x3c/label\x3e                            \r\n                            \x3c/td\x3e\r\n                            \x3ctd class\x3d"shortTextInput"\x3e\r\n                              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esrihelptopic\x3d"outputPredictionError"\x3e\x3c/a\x3e\r\n                            \x3c/td\x3e\r\n                          \x3c/tr\x3e\r\n                        \x3c/tbody\x3e\r\n                      \x3c/table\x3e\r\n                    \x3c/td\x3e\r\n                  \x3c/tr\x3e\r\n                \x3c/tbody\x3e\r\n              \x3c/table\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.twoLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.outputLayerLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esrihelptopic\x3d"outputName"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"trim:true,required:true" class\x3d"longTextInput esriLeadingMargin1" data-dojo-attach-point\x3d"_outputLayerInput"\x3e\x3c/input\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"_chooseFolderRow" class\x3d"esriLeadingMargin1"\x3e\r\n              \x3clabel class\x3d"esriSaveLayerlabel"\x3e${i18n.saveResultIn}\x3c/label\x3e\r\n              \x3cinput class\x3d"longInput" data-dojo-attach-point\x3d"_webMapFolderSelect" data-dojo-type\x3d"dijit/form/FilteringSelect" trim\x3d"true" style\x3d"width:55%;"\x3e\x3c/input\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"_chooseLayerTypeRow" class\x3d"esriLeadingMargin1"\x3e\r\n              \x3clabel class\x3d"esriSaveLayerlabel"\x3e${i18n.saveLayerType}\x3c/label\x3e\r\n              \x3cinput class\x3d"longInput esriLongLabel" data-dojo-attach-point\x3d"_webLayerTypeSelect" data-dojo-type\x3d"dijit/form/FilteringSelect" trim\x3d"true" style\x3d"width:55%;"\x3e\x3c/input\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/tbody\x3e\r\n    \x3c/table\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv style\x3d"padding:5px;margin-top:5px;border-top:solid 1px #BBB;"\x3e\r\n    \x3cdiv class\x3d"esriExtentCreditsCtr"\x3e\r\n      \x3ca class\x3d"esriFloatTrailing esriSmallFont" href\x3d"#" data-dojo-attach-point\x3d"_showCreditsLink"\x3e${i18n.showCredits}\x3c/a\x3e\r\n      \x3clabel data-dojo-attach-point\x3d"_chooseExtentDiv" class\x3d"esriSelectLabel esriExtentLabel"\x3e\r\n        \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_useExtentCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true" name\x3d"extent" value\x3d"true" /\x3e\r\n        ${i18n.useMapExtent}\r\n      \x3c/label\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv\x3e\r\n      \x3ctable class\x3d"esriFormTable"\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd\x3e\r\n            \x3cbutton data-dojo-type\x3d"dijit/form/Button" type\x3d"submit" data-dojo-attach-point\x3d"_saveBtn" class\x3d"esriAnalysisSubmitButton" data-dojo-attach-event\x3d"onClick:_handleSaveBtnClick"\x3e\r\n              ${i18n.runAnalysis}\r\n            \x3c/button\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/table\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.creditTitle}" data-dojo-attach-point\x3d"_usageDialog" style\x3d"width:40em;"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/CreditEstimator" data-dojo-attach-point\x3d"_usageForm"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/analysis/InterpolatePointsEBK","require dojo/_base/declare dojo/_base/lang dojo/has dojo/_base/array dojo/_base/json dojo/_base/connect dojo/_base/Color dojo/dom-class dojo/dom-style dojo/json dojo/string dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin dijit/form/HorizontalSlider dijit/form/HorizontalRule dijit/form/HorizontalRuleLabels ../../kernel ../../lang ./utils ./RasterAnalysisMixin ./AnalysisRegistry ./ItemTypes dojo/i18n!../../nls/jsapi dojo/text!./templates/InterpolatePointsEBK.html".split(" "),
function(c,k,l,m,d,n,D,E,b,F,p,e,q,r,t,u,v,G,H,I,w,x,y,z,f,A,B,C){c=k([q,r,t,u,v,z],{declaredClass:"esri.dijit.analysis.InterpolatePointsEBK",templateString:C,widgetsInTemplate:!0,browseType:[A.FS],checkGeometries:[f.GeometryTypes.Point,f.GeometryTypes.MultiPoint],tags:["point"],inputLayer:null,interpolateField:null,interpolateOption:5,cellUnit:null,cellsize:null,predictionError:null,transform:null,numberOfNeighbors:null,sizeOfModels:null,toolName:"InterpolatePointsEBK",helpFileName:"InterpolatePointsEBK",
toolNlsName:B.interpolatePointsEBKTool,rasterGPToolName:"InterpolatePoints",resultParameter:"outputRaster",returnProcessInfo:!0,constructor:function(a,b){this._pbConnects=[];a.containerNode&&(this.container=a.containerNode);if(a.rerun){a.inputLayer=a.inputPointFeatures;a.transform=a.transformData;a.sizeOfModels=a.sizeOfLocalModels;a.cellsize=a.outputCellSize&&a.outputCellSize.distance;a.cellUnit=a.outputCellSize&&a.outputCellSize.units;a.predictionError=a.outputPredictionError;a.outputErrorLayerName=
a.outputErrorRaster;if(b=a.optimizeFor)a.interpolateOption="SPEED"===b?1:"BALANCE"===b?5:9;this._transformChanged=this._numberChanged=this._sizeChanged=!0}},_getJobParameters:function(){var a=n.toJson(y.constructAnalysisInputLyrObj(this.get("inputLayer"))),b=this.get("interpolateField"),h=this.get("interpolateOption"),c={distance:this.get("cellsize"),units:this.get("cellSizeUnit")},d=this.get("transform"),e=this.get("sizeOfLocalModels"),f=this.get("numberOfNeighbors"),g=this.get("predictionError");
g&&(this.resultParameter=["outputRaster","outputErrorRaster"]);return{inputPointFeatures:a,interpolateField:b,optimizeFor:1==h?"SPEED":5==h?"BALANCE":"ACCURACY",transformData:d,sizeOfLocalModels:e,numberOfNeighbors:f,outputCellSize:p.stringify(c),outputPredictionError:g,outputErrorRaster:g?this.outputErrorLayerName:null}},_setDefaultInputs:function(){this.set("interpolateFields",this.interpolateField);this._cellSizeUnitsSelect.addOption([{value:"Miles",label:this.i18n.miles},{value:"Feet",label:this.i18n.feet},
{type:"separator"},{value:"Kilometers",label:this.i18n.kilometers},{value:"Meters",label:this.i18n.meters}]);this.cellsize&&this._outputCellSizeInput.set("value",this.cellsize);this.cellUnit&&this._cellSizeUnitsSelect.set("value",this.cellUnit);this.interpolateOption&&this.set("interpolateOption",this.interpolateOption);this.transform&&this._transformCheck.set("checked",this.transform);this.sizeOfModels&&(this._sizeOfLocalModelsInput.textbox.value=this.sizeOfModels);this.numberOfNeighbors&&(this._numberOfNeighborsInput.textbox.value=
this.numberOfNeighbors);this.predictionError&&this._predictionErrorCheck.set("checked",this.predictionError);this._sizeOfLocalModelsInput.set("rangeMessage",this.i18n.sizeOfLocalModelsInValidMsg);this._numberOfNeighborsInput.set("rangeMessage",this.i18n.numberOfNeighborsInValidMsg);this._outputCellSizeInput.set("rangeMessage",this.i18n.cellsizeInValidMsg)},_resetUI:function(){this.inputLayer&&(this.set("interpolateFields",this.interpolateField),this.outputErrorLayerName=e.substitute(this.i18n.outputErrorLayerName,
{layername:this.inputLayer.name}),this.outputTableName=e.substitute(this.i18n.outputTableName,{layername:this.inputLayer.name}))},_handleOptionsBtnClick:function(){b.contains(this._optionsDiv,"disabled")||(b.contains(this._optionsDiv,"optionsClose")?(b.remove(this._optionsDiv,"optionsClose"),b.add(this._optionsDiv,"optionsOpen")):b.contains(this._optionsDiv,"optionsOpen")&&(b.remove(this._optionsDiv,"optionsOpen"),b.add(this._optionsDiv,"optionsClose")))},_handleOptimizeSliderChange:function(a){this.set("interpolateOption",
this._optimizeSlider.get("value"));this._transformChanged||this._transformCheck.set("checked",9===this.interpolateOption);this._sizeChanged||this.set("sizeOfLocalModels",1===this.interpolateOption?50:5===this.interpolateOption?75:100);this._numberChanged||this.set("numberOfNeighbors",1===this.interpolateOption?8:5===this.interpolateOption?10:15)},_handleOptionalOutputsBtnClick:function(){b.contains(this._optionalOutputsDiv,"disabled")||(b.contains(this._optionalOutputsDiv,"optionsClose")?(b.remove(this._optionalOutputsDiv,
"optionsClose"),b.add(this._optionalOutputsDiv,"optionsOpen")):b.contains(this._optionalOutputsDiv,"optionsOpen")&&(b.remove(this._optionalOutputsDiv,"optionsOpen"),b.add(this._optionalOutputsDiv,"optionsClose")))},_handleSizeOfLocalModelsChange:function(){this._sizeChanged=!0},_handleNumberOfNeighborsChange:function(){this._numberChanged=!0},_handleTransformChange:function(){this._transformChanged=!0},_setInterpolateFieldsAttr:function(a){if(this.inputLayer){var b=this.inputLayer.fields;this._interpolateFieldSelect.removeOption(this._interpolateFieldSelect.getOptions());
d.forEach(b,function(a){-1!==d.indexOf(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],a.type)&&a.name!==this.inputLayer.objectIdField&&this._interpolateFieldSelect.addOption({value:a.name,label:x.isDefined(a.alias)&&""!==a.alias?a.alias:a.name})},this);a&&this._interpolateFieldSelect.set("value",a)}},_setInterpolateFieldAttr:function(a){this.interpolateField=a},_getInterpolateFieldAttr:function(){this._interpolateFieldSelect&&this._interpolateFieldSelect.get("value")&&
(this.interpolateField=this._interpolateFieldSelect.get("value"));return this.interpolateField},_getCellsizeAttr:function(){this._outputCellSizeInput&&this._outputCellSizeInput.get("value")&&(this.cellsize=this._outputCellSizeInput.get("value"));return this.cellsize},_setCellsizeAttr:function(a){this.cellsize=a},_getCellSizeUnitAttr:function(){this._cellSizeUnitsSelect&&this._cellSizeUnitsSelect.get("value")&&(this.cellUnit=this._cellSizeUnitsSelect.get("value"));return this.cellUnit},_setCellSizeUnitAttr:function(a){this.cellUnit=
a},_setSizeOfLocalModelsAttr:function(a){this.sizeOfModels=a;this._sizeOfLocalModelsInput.textbox.value=a},_getSizeOfLocalModelsAttr:function(){this._sizeOfLocalModelsInput&&this._sizeOfLocalModelsInput.get("value")&&(this.sizeOfModels=this._sizeOfLocalModelsInput.get("value"));return this.sizeOfModels},_setNumberOfNeighborsAttr:function(a){this.numberOfNeighbors=a;this._numberOfNeighborsInput.textbox.value=a},_getNumberOfNeighborsAttr:function(){this._numberOfNeighborsInput&&this._numberOfNeighborsInput.get("value")&&
(this.numberOfNeighbors=this._numberOfNeighborsInput.get("value"));return this.numberOfNeighbors},_setInterpolateOptionAttr:function(a){this.interpolateOption=a;this._optimizeSlider.set("value",this.interpolateOption)},_getInterpolateOptionAttr:function(){this._optimizeSlider&&(this.interpolateOption=Math.floor(this._optimizeSlider.get("value")));return this.interpolateOption},_setTransformAttr:function(a){this.transform=a;this._transformCheck.get("checked",a)},_getTransformAttr:function(){this._transformCheck&&
(this.transform=this._transformCheck.get("checked"));return this.transform},_setPredictionErrorAttr:function(a){this.predictionError=a;this._predictionErrorCheck.set("value",a)},_getPredictionErrorAttr:function(){this._predictionErrorCheck&&(this.predictionError=this._predictionErrorCheck.get("checked"));return this.predictionError}});m("extend-esri")&&l.setObject("dijit.analysis.InterpolatePointsEBK",c,w);return c});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/arcgis/metadata/templates/Details.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n    \r\n  \x3c!-- hierarchy level --\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n    data-dojo-props\x3d"target:\'mdHrLv\',minOccurs:0,maxOccurs:\'unbounded\',label:\'${i18nArcGIS.metadata.mdHrLv}\'"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n      data-dojo-props\x3d"target:\'ScopeCd\',minOccurs:1,showHeader:false"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Attribute"\r\n        data-dojo-props\x3d"target:\'value\',minOccurs:1,showHeader:false"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputHierarchyLevel"\r\n          data-dojo-props\x3d"codelistType:\'MD_ScopeCode\'"\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \r\n  \x3c!-- hierarchy level name --\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n    data-dojo-props\x3d"target:\'mdHrLvName\',minOccurs:0,maxOccurs:\'unbounded\',label:\'${i18nArcGIS.metadata.mdHrLvName}\'"\x3e\r\n  \x3c/div\x3e\r\n  \r\n  \x3c!-- metadata date --\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n    data-dojo-props\x3d"target:\'mdDateSt\',minOccurs:1,label:\'${i18nArcGIS.metadata.mdDateSt}\'"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputDate" data-dojo-props\x3d"allowTime:false,useNow:true"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \r\n  \x3c!-- file identifier --\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n    data-dojo-props\x3d"target:\'mdFileID\',minOccurs:0,label:\'${i18nArcGIS.metadata.mdFileID}\'"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputText"\r\n      data-dojo-props\x3d"useUniqueId:true,regenerateIfTemplate:true"\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \r\n  \x3c!-- parent identifier --\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n    data-dojo-props\x3d"target:\'mdParentID\',minOccurs:0,label:\'${i18nArcGIS.metadata.mdParentID}\'"\x3e\r\n  \x3c/div\x3e\r\n  \r\n  \x3c!-- dataset URI --\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n    data-dojo-props\x3d"target:\'dataSetURI\',minOccurs:0,label:\'${i18nArcGIS.metadata.datasetURI}\'"\x3e\r\n  \x3c/div\x3e\r\n  \r\n  \x3c!-- dataset function --\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n    data-dojo-props\x3d"target:\'dataSetFn\',minOccurs:0,label:\'${i18nArcGIS.metadata.dataSetFn}\'"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n      data-dojo-props\x3d"target:\'OnFunctCd\',minOccurs:0,showHeader:false"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Attribute"\r\n        data-dojo-props\x3d"target:\'value\',minOccurs:0,showHeader:false"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputSelectCode"\r\n          data-dojo-props\x3d"codelistType:\'CI_OnLineFunctionCode\'"\x3e\r\n        \x3c/div\x3e              \r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n      \r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/arcgis/metadata/Details","dojo/_base/declare dojo/_base/lang dojo/has ../../../../../kernel ../../../base/Descriptor dojo/text!./templates/Details.html ../form/InputHierarchyLevel ../maintenance/ScopeCd".split(" "),function(a,b,c,d,e,f){a=a(e,{templateString:f});c("extend-esri")&&b.setObject("dijit.metadata.types.arcgis.metadata.Details",a,d);return a});
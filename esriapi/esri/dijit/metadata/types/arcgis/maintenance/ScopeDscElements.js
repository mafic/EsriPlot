// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/arcgis/maintenance/templates/ScopeDscElements.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n    data-dojo-props\x3d"target:\'attribSet\',minOccurs:0,label:\'${i18nArcGIS.maintenance.upScpDesc.attribSet}\'"\x3e\r\n  \x3c/div\x3e  \r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n    data-dojo-props\x3d"target:\'attribIntSet\',minOccurs:0,label:\'${i18nArcGIS.maintenance.upScpDesc.attribIntSet}\'"\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n    data-dojo-props\x3d"target:\'featSet\',minOccurs:0,label:\'${i18nArcGIS.maintenance.upScpDesc.featSet}\'"\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n    data-dojo-props\x3d"target:\'featIntSet\',minOccurs:0,label:\'${i18nArcGIS.maintenance.upScpDesc.featIntSet}\'"\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n    data-dojo-props\x3d"target:\'datasetSet\',minOccurs:0,label:\'${i18nArcGIS.maintenance.upScpDesc.datasetSet}\'"\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n    data-dojo-props\x3d"target:\'other\',minOccurs:0,label:\'${i18nArcGIS.maintenance.upScpDesc.other}\'"\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/arcgis/maintenance/ScopeDscElements","dojo/_base/declare dojo/_base/lang dojo/has ../../../../../kernel ../../../base/Descriptor dojo/text!./templates/ScopeDscElements.html".split(" "),function(a,b,c,d,e,f){a=a(e,{templateString:f});c("extend-esri")&&b.setObject("dijit.metadata.types.arcgis.maintenance.ScopeDscElements",a,d);return a});
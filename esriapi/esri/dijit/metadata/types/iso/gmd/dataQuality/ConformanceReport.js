// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/iso/gmd/dataQuality/templates/ConformanceReport.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/ObjectReference"\r\n    data-dojo-props\x3d"target:\'gmd:report\',minOccurs:0,maxOccurs:\'unbounded\',\r\n      label:\'${i18nIso.DQ_DataQuality.report}\'"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/AbstractObject"\r\n      data-dojo-props\x3d"target:\'gmd:DQ_DomainConsistency\',minOccurs:0"\x3e\r\n      \r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/ObjectReference"\r\n        data-dojo-props\x3d"target:\'gmd:result\',maxOccurs:2,\r\n          label:\'${i18nIso.DQ_ConformanceResult.caption}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/AbstractObject"\r\n          data-dojo-props\x3d"target:\'gmd:DQ_ConformanceResult\',minOccurs:0"\x3e\r\n          \r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/ObjectReference"\r\n            data-dojo-props\x3d"target:\'gmd:specification\',showHeader:false"\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/citation/SpecificationCitation"\x3e\x3c/div\x3e\r\n          \x3c/div\x3e\r\n          \r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n            data-dojo-props\x3d"target:\'gmd:explanation\',\r\n              label:\'${i18nIso.DQ_ConformanceResult.explanation}\'"\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/GcoElement"\r\n              data-dojo-props\x3d"target:\'gco:CharacterString\'"\x3e\r\n                \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputTextArea"\x3e\x3c/div\x3e\r\n            \x3c/div\x3e\r\n          \x3c/div\x3e\r\n          \r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/dataQuality/ConformanceDegree"\x3e\x3c/div\x3e\r\n          \r\n        \x3c/div\x3e\r\n      \x3c/div\x3e  \r\n      \r\n    \x3c/div\x3e\r\n  \x3c/div\x3e  \r\n\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/iso/gmd/dataQuality/ConformanceReport","dojo/_base/declare dojo/_base/lang dojo/has ../../../../base/Descriptor ../../../../form/Element ../../../../form/InputTextArea ../../../../form/iso/AbstractObject ../../../../form/iso/GcoElement ../../../../form/iso/ObjectReference ../citation/SpecificationCitation ./ConformanceDegree dojo/text!./templates/ConformanceReport.html ../../../../../../kernel".split(" "),function(a,b,c,d,g,h,k,l,m,n,p,e,f){a=a(d,{templateString:e});
c("extend-esri")&&b.setObject("dijit.metadata.types.iso.gmd.dataQuality.ConformanceReport",a,f);return a});
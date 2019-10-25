// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/iso/gmi/acquisitionInformation/templates/MI_Plan.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/AbstractObject" data-dojo-props\x3d"target:\'gmi:MI_Plan\',minOccurs:0"\x3e\r\n  \r\n    \x3c!-- \r\n      http://www.isotc211.org/2005/gmi/acquisitionInformation.xsd\r\n      \x3cxs:sequence\x3e\r\n        \x3cxs:element name\x3d"type" type\x3d"gmi:MI_GeometryTypeCode_PropertyType" minOccurs\x3d"0"/\x3e\r\n        \x3cxs:element name\x3d"status" type\x3d"gmd:MD_ProgressCode_PropertyType"/\x3e\r\n        \x3cxs:element name\x3d"citation" type\x3d"gmd:CI_Citation_PropertyType"/\x3e\r\n        \x3cxs:element name\x3d"satisfiedRequirement" type\x3d"gmi:MI_Requirement_PropertyType" minOccurs\x3d"0" maxOccurs\x3d"unbounded"/\x3e\r\n        \x3cxs:element name\x3d"operation" type\x3d"gmi:MI_Operation_PropertyType" minOccurs\x3d"0" maxOccurs\x3d"unbounded"/\x3e\r\n      \x3c/xs:sequence\x3e\r\n     --\x3e\r\n     \r\n    \x3c!-- type, manner of sampling geometry that the planner expects for collection of objective data --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListReference"\r\n      data-dojo-props\x3d"target:\'gmi:type\',minOccurs:0,\r\n        label:\'${i18nIso.MI_Plan.sType}\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmi/acquisitionInformation/MI_GeometryTypeCode"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- status, current status of the plan --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListReference"\r\n      data-dojo-props\x3d"target:\'gmi:status\',\r\n        label:\'${i18nIso.MI_Plan.status}\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/identification/MD_ProgressCode"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n        \r\n    \x3c!-- citation, identification of authority requesting target collection --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/ObjectReference"\r\n      data-dojo-props\x3d"target:\'gmi:citation\',label:\'${i18nIso.MI_Plan.citation}\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/citation/SimpleCI_Citation"\x3e\x3c/div\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Attribute"\r\n        data-dojo-props\x3d"target:\'xlink:href\',label:\'${i18nIso.ObjectReference.xlinkref}\'"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- satisfiedRequirement (allow MI_Requirement references) --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/ObjectReference"\r\n      data-dojo-props\x3d"target:\'gmi:satisfiedRequirement\',minOccurs:0,maxOccurs:\'unbounded\',\r\n        label:\'${i18nIso.MI_Plan.satisfiedRequirementReference}\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Attribute" data-dojo-props\x3d"target:\'xlink:href\',showHeader:false"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- operation (allow MI_Operation references) --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/ObjectReference"\r\n      data-dojo-props\x3d"target:\'gmi:operation\',minOccurs:0,maxOccurs:\'unbounded\',\r\n        label:\'${i18nIso.MI_Plan.operationReference}\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Attribute" data-dojo-props\x3d"target:\'xlink:href\',showHeader:false"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/iso/gmi/acquisitionInformation/MI_Plan","dojo/_base/declare dojo/_base/lang dojo/has ../../../../base/Descriptor ../../../../form/Attribute ../../../../form/iso/AbstractObject ../../../../form/iso/CodeListReference ../../../../form/iso/ObjectReference ../../gmd/identification/MD_ProgressCode ../../gmd/citation/SimpleCI_Citation ./MI_GeometryTypeCode dojo/text!./templates/MI_Plan.html ../../../../../../kernel".split(" "),function(a,b,c,d,g,h,k,l,m,n,p,e,f){a=a(d,{templateString:e});
c("extend-esri")&&b.setObject("dijit.metadata.types.iso.gmi.acquisitionInformation.MI_Plan",a,f);return a});
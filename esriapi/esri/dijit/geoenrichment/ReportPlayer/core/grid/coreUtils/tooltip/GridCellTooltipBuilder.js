// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/grid/coreUtils/tooltip/GridCellTooltipBuilder","dojo/_base/declare ../GridDataUtil ../../../supportClasses/conditionalStyling/ConditionalStyleLegendBuilder ../../valueField/supportClasses/TextRenderer ./_ScriptExpressionBuilder esri/dijit/geoenrichment/utils/ObjectUtil esri/dijit/geoenrichment/utils/TooltipUtil esri/dijit/geoenrichment/ReportPlayer/config dojo/i18n!esri/nls/jsapi".split(" "),function(p,f,r,t,u,v,w,q,l){l=l.geoenrichment.dijit.ReportPlayer.Grid;
var x=p(null,{_content:"",getContent:function(){return this._content?"\x3cdiv class\x3d'esriGEAdjustableGridValueField_cellTooltipContent'\x3e"+this._content+"\x3c/div\x3e":null},addValue:function(a){this._content+="\x3cdiv class\x3d'esriGERowHigh esriGEAdjustableGridValueField_cellTooltipContentValue'\x3e"+a+"\x3c/div\x3e"},addImageValue:function(a){var c=f.getNumericCellValue(a);isNaN(c)||"number"!==typeof c||(a=a.numberFormatFunction?a.numberFormatFunction(c):v.formatNumber(c),this._content+="\x3cdiv class\x3d'esriGERowHigh esriGEAdjustableGridValueField_cellTooltipContentValue'\x3e"+
a+"\x3c/div\x3e")},addAlias:function(a){this._content+="\x3cdiv class\x3d'esriGERowHigh'\x3e\x3cb\x3e"+l.variable+"\x3c/b\x3e "+a+"\x3c/div\x3e"},addExpression:function(a,c,b){if(a=u.buildTooltipExpression(a,c))this._content+="\x3cdiv class\x3d'esriGERowHigh'\x3e"+l.variableIsBasedOnExpression+"\x3c/div\x3e",this._content+="\x3cdiv class\x3d'esriGERowHigh'\x3e"+a+"\x3c/div\x3e"},addConditionalStyleLegend:function(a){var c=f.getNumericCellValue(a),b=f.getConditionalFormatting(a);a=f.getFieldInfo(a).isImage;
this._content+=r.createLegendNode(b,a?"image":"text",c).outerHTML},addTextBlock:function(a){this._content+="\x3cdiv class\x3d'esriGERowHigh'\x3e"+a+"\x3c/div\x3e"},addSeparator:function(){this._content+="\x3cdiv class\x3d'esriGERowHigh esriGEAdjustableGridValueField_cellTooltipContentSeparator'\x3e\x3c/div\x3e"}}),y=/<\w/,m={setDynamicTooltipToCell:function(a,c,b){var h=f.getFieldInfo(a),d=f.getConditionalFormatting(a),d=d&&d.fieldInfo;if(a.hasOverflowText()||f.isVariableFieldCell(a)||f.isImageTriggerCell(a))h=
h&&(h.script||h.expressionText)||d&&(d.script||d.expressionText),a.own(w.setTooltipToNode(a.domNode,function(){return m.renderCellTooltip(a,c,b)},{classes:"esriGEAdjustableGridValueField_cellTooltip",notRestricted:h,stayOnHover:h}))},renderCellTooltip:function(a,c,b){b=b||{};var h=b.getExpressionText||function(a){return q.modules.complexCellTooltips&&a.expressionText},d=t.getFullText(a),k=f.getConditionalFormatting(a),e=f.getFieldInfo(a),l=e&&(e.hasVariable||e.script),m=e&&e.isImage,p=e&&e.isRichText||
d&&y.test(d),g=new x;!d||p||m||b.hideValue||g.addValue(d);if(l){g.addAlias(e.script?e.script.alias:e.alias);var n=h(e);n&&g.addExpression(n,c,b.makeExpressionExpandable)}else m&&k&&k.fieldInfo&&(!b.hideValue&&g.addImageValue(a),g.addAlias(k.fieldInfo.script?k.fieldInfo.script.alias:k.fieldInfo.alias),(n=h(k.fieldInfo))&&g.addExpression(n,c,b.makeExpressionExpandable));k&&q.modules.complexCellTooltips&&(n&&g.addSeparator(),b.conditionalLegendDesc&&g.addTextBlock(b.conditionalLegendDesc),g.addConditionalStyleLegend(a));
return g.getContent()}};return m});
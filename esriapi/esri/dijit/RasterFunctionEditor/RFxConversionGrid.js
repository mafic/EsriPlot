// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/RasterFunctionEditor/templates/RFxConversionGrid.html":'\x3cdiv class\x3d"esriRFxConversionGrid esriRFxMatrix"\x3e\r\n  \x3cdiv class\x3d"conversion-grid-label"\x3e\r\n    \x3clabel data-dojo-attach-point\x3d"gridLabel"\x3e\x3c/label\x3e\r\n    \x3clabel class\x3d"conversion-grid-size-container"\x3e\r\n      \x3clabel class\x3d"conversion-grid-size-label"\x3e${_i18n.rfxConversionGrid.size}\x3c/label\x3e\r\n      \x3cinput class\x3d"conversion-grid-size-selector" data-dojo-type\x3d"dijit/form/NumberSpinner" value\x3d"3" data-dojo-props\x3d"smallDelta:1, constraints:{min:1,max:100,places:0}"\r\n        data-dojo-attach-point\x3d"gridSize" data-dojo-attach-event\x3d"onChange: _onSizeValueChange" /\x3e\r\n    \x3c/label\x3e\r\n  \x3c/div\x3e\r\n\r\n  \x3cdiv class\x3d"conversion-grid-container" data-dojo-attach-point\x3d"gridDiv"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/RasterFunctionEditor/RFxConversionGrid","dojo/_base/declare dojo/has dojo/text!./templates/RFxConversionGrid.html dojo/i18n!../../nls/jsapi ../../kernel dojo/_base/lang dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin ./SimpleMatrixCreator".split(" "),function(c,d,e,f,g,h,k,l,m,n){c=c("RFxConversionGrid",[k,l,m,n],{templateString:e,declaredClass:"esri.dijit.RasterFunctionEditor.RFxConversionGrid",constructor:function(){this.inherited(arguments);this._i18n=f.widgets.rasterFunctionEditor},
postCreate:function(){this.inherited(arguments);this._setLabels();this._getInfo();this._info&&this._initializeGrid()},_getInfo:function(){this._info={};var a,b;this.inputArgs&&this.inputArgs.ConversionMatrix&&this.inputArgs.ConversionMatrix.value.length?(a=this.inputArgs.ConversionMatrix.value,b=Math.sqrt(a.length)):b=3;this.gridSize.set("value",b);this._info.columns=b;this._info.rows=b;this._info.value=a},_updateValue:function(a){this.inputArgs.ConversionMatrix.value=this._getValueFromGridData(a)},
_onSizeValueChange:function(a){a&&(this._info.columns=a,this._info.rows=a,this._onGridSizeChange(),this.inputArgs.ConversionMatrix.value=this._info.value)},_setLabels:function(){this.inputArgs&&this.inputArgs.ConversionMatrix&&(this.gridLabel.innerHTML=this.inputArgs.ConversionMatrix.displayName)}});d("extend-esri")&&h.setObject("dijit.RasterFunctionEditor.RFxConversionGrid",c,g);return c});
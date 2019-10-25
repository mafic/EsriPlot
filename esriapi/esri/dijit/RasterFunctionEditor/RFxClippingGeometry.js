// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/RasterFunctionEditor/templates/RFxClippingGeometry.html":'\x3cdiv\x3e\r\n  \x3ctable style\x3d"width: 100%;"\x3e\r\n    \x3ctr class\x3d"esriRFxArgsEditor__tr--arg-name"\x3e\r\n      \x3ctd colspan\x3d"2" data-dojo-attach-point\x3d"clippingGeometryLabel"\x3e\r\n        ${_i18n.rfxClippingGeometry.clippingGeometry}\r\n      \x3c/td\x3e\r\n    \x3c/tr\x3e\r\n    \x3ctr class\x3d"esriRFxArgsEditor__tr--arg-widget"\x3e\r\n      \x3ctd\x3e\r\n        \x3cdiv data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"geometryTypeSelect" data-dojo-attach-event\x3d"onChange: onGeometryTypeChange"\x3e\r\n          \x3cspan value\x3d"${clippingTypes.clippingRaster}"\x3e${_i18n.rfxClippingGeometry.clippingRaster}\x3c/span\x3e\r\n          \x3cspan value\x3d"${clippingTypes.clippingGeometry}"\x3e${_i18n.rfxClippingGeometry.studyArea}\x3c/span\x3e\r\n          \x3cspan value\x3d"${clippingTypes.currentExtent}"\x3e${_i18n.rfxClippingGeometry.currentExtent}\x3c/span\x3e\r\n        \x3c/div\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd data-dojo-attach-point\x3d"polyDrawBtnTd"\x3e\r\n        \x3cdiv data-dojo-type\x3d"dijit/form/ToggleButton" data-dojo-attach-point\x3d"polyDrawBtn" class\x3d"esriFloatLeading esriActionButton"\r\n        data-dojo-props\x3d"showLabel:false,iconClass:\'toolbarIcon polygonIcon\',label:\'${_i18n.rfxClippingGeometry.drawLabel}\'" data-dojo-attach-event\x3d"onChange:_handlePolyBtnChange"\x3e\x3c/div\x3e\r\n      \x3c/td\x3e\r\n    \x3c/tr\x3e\r\n    \x3ctr class\x3d"esriRFxArgsEditor__tr--arg-name" data-dojo-attach-point\x3d"clippingRasterLabelRow"\x3e\r\n      \x3ctd colspan\x3d"2" data-dojo-attach-point\x3d"clippingRasterLabel"\x3e\r\n        ${_i18n.rfxClippingGeometry.clippingRaster}\r\n      \x3c/td\x3e\r\n    \x3c/tr\x3e\r\n    \x3ctr class\x3d"esriRFxArgsEditor__tr--arg-widget" data-dojo-attach-point\x3d"clippingRasterWidgetRow"\x3e\r\n      \x3ctd colspan\x3d"2"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/RasterFunctionEditor/RFxRasterInput" data-dojo-attach-point\x3d"clippingRasterSelect" data-dojo-attach-event\x3d"onChange: _setClippingRasterArgValue"\x3e\r\n        \x3c/div\x3e\r\n      \x3c/td\x3e\r\n    \x3c/tr\x3e\r\n  \x3c/table\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/RasterFunctionEditor/RFxClippingGeometry","dojo/_base/declare dojo/has ../../kernel dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/_base/lang dojo/_base/Color dojo/dom-construct dojo/_base/array dojo/dom-class dojo/dom-style dojo/store/Memory dojo/data/ObjectStore dojo/text!./templates/RFxClippingGeometry.html dojo/i18n!../../nls/jsapi dijit/form/Select dijit/form/ToggleButton ./utils ../../symbols/SimpleFillSymbol ../../symbols/SimpleLineSymbol ../../toolbars/draw ../../graphic".split(" "),
function(c,k,l,m,n,p,d,q,x,r,y,e,z,A,t,u,B,C,v,f,g,h,w){c=c("esriRFxClippingGeometry",[m,n,p],{declaredClass:"esri.dijit.RasterFunctionEditor.RFxClippingGeometry",templateString:t,clippingTypes:{clippingRaster:"clippingRaster",clippingGeometry:"clippingGeometry",currentExtent:"currentExtent"},inputArgs:{},rasterArgs:{},inputLayers:[],map:null,constructor:function(){this.inherited(arguments);this._i18n=u.widgets.rasterFunctionEditor},postCreate:function(){this.inherited(arguments);this.map=this.browseProperties.map;
this._setLabels();this._populateRasterSelect();this._createDrawToolbar();this.own(this.map.on("extent-change",d.hitch(this,this._setExtentArgValue)))},destroy:function(){this._clearGeometry();this._toolbar&&(this._toolbar.deactivate(),this.emit("drawtool-deactivate",{}));this.inherited(arguments)},_populateRasterSelect:function(){this.clippingRasterSelect.set("browseProperties",this.browseProperties);this.clippingRasterSelect.set("selectDefault",!1);this.clippingRasterSelect.set("allowScalar",this.allowScalar);
this.clippingRasterSelect.set("inputLayers",this.inputLayers);this.own(this.clippingRasterSelect.on("change",d.hitch(this,this._setClippingRasterArgValue)));this.onGeometryTypeChange()},_createDrawToolbar:function(){this._toolbar=new h(this.map);this.own(this._toolbar.on("draw-end",d.hitch(this,this._addGeometry)))},_addGeometry:function(a){if(a=a&&a.geometry){this._toolbar&&(this._toolbar.deactivate(),this.emit("drawtool-deactivate",{}));this._clearGeometry();var b=new f(f.STYLE_NULL,new g(g.STYLE_SOLID,
new q([0,0,0]),4)),b=new w(a,b);this.map.graphics.add(b);this.graphic=b;this.map.setExtent(a.getExtent(),!0);this.geometry=a;this._setClippingGeometryArgValue()}},_clearGeometry:function(){this.graphic&&this.map.graphics.remove(this.graphic)},onGeometryTypeChange:function(){var a=this.geometryTypeSelect.value;this._clearGeometryArgValues();switch(a){case this.clippingTypes.clippingRaster:this._setRasterSelectVisibility(!0);this._setDrawToolVisibility(!1);this._setClippingRasterArgValue();break;case this.clippingTypes.clippingGeometry:this._setRasterSelectVisibility(!1);
this._setDrawToolVisibility(!0);break;case this.clippingTypes.currentExtent:this._setRasterSelectVisibility(!1),this._setDrawToolVisibility(!1),this._setExtentArgValue()}},_setRasterSelectVisibility:function(a){a=a?"table-row":"none";e.set(this.clippingRasterLabelRow,"display",a);e.set(this.clippingRasterWidgetRow,"display",a)},_setDrawToolVisibility:function(a){e.set(this.polyDrawBtnTd,"display",a?"table-cell":"none");!a&&this._toolbar&&(this._toolbar.deactivate(),this.emit("drawtool-deactivate",
{}),this._clearGeometry())},_handlePolyBtnChange:function(a){a?(this.emit("drawtool-activate",{}),this._toolbar.activate(h.POLYGON),this._clearGeometry()):(this._toolbar.deactivate(),this.emit("drawtool-deactivate",{}))},_clearGeometryArgValues:function(){r.forEach(["Extent","ClippingGeometry","ClippingRaster"],function(a){if(a=this.inputArgs&&this.inputArgs[a])a.value=null},this)},_setExtentArgValue:function(){var a=this.map.extent;if(this.geometryTypeSelect.value===this.clippingTypes.currentExtent){var b=
this.inputArgs&&this.inputArgs.Extent;b&&(b.value=a.toJson())}},_setClippingGeometryArgValue:function(){var a=this.geometry;if(this.geometryTypeSelect.value===this.clippingTypes.clippingGeometry){var b=this.inputArgs&&this.inputArgs.ClippingGeometry;b&&(b.value=a.toJson())}},_setClippingRasterArgValue:function(){if(this.geometryTypeSelect.value===this.clippingTypes.clippingRaster){var a=this.clippingRasterSelect.getSelectedLayer(),b=this.inputArgs&&this.inputArgs.ClippingRaster;b&&(b.value=v.getRasterJsonFromLayer(a))}},
_setLabels:function(){this.inputArgs&&(this.clippingGeometryLabel.innerHTML=this.inputArgs.ClippingGeometry.displayName,this.clippingRasterLabel.innerHTML=this.inputArgs.ClippingRaster.displayName)}});k("extend-esri")&&d.setObject("dijit.RasterFunctionEditor.RFxClippingGeometry",c,l);return c});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/RasterFunctionEditor/RFxScaleSelect","dojo/_base/declare dojo/_base/lang dojo/has ../../kernel dojo/store/Memory dojo/data/ObjectStore dijit/form/Select".split(" "),function(a,d,e,f,g,h,k){a=a([k],{declaredClass:"esri.dijit.RasterFunctionEditor.RFxScaleSelect",startup:function(){this.inherited(arguments);this.setScaleOptions()},setScaleOptions:function(){!this.evalValues||2!==this.evalValues.length||isNaN(parseInt(this.evalValues[0],10))||isNaN(parseInt(this.evalValues[1],10))||
this.evalValues[0]>this.evalValues[1]||(this.set("labelAttr","name"),this.set("store",this._getScaleStore(this.evalValues)),this.reset())},_getScaleStore:function(a){var b=parseInt(a[0],10);a=parseInt(a[1],10);for(var c=[];b<=a;b++)c.push({name:b.toString(),value:b});c.push({name:"NODATA",value:"NODATA"});return new h(new g({data:c,idProperty:"name"}))}});e("extend-esri")&&d.setObject("dijit.RasterFunctionEditor.RFxRasterInput",a,f);return a});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/RasterFunctionEditor/RFxFieldSelect","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/has dojo/store/Memory dojo/data/ObjectStore dojo/i18n!../../nls/jsapi dijit/form/Select ../../kernel".split(" "),function(d,c,g,k,e,f,l,m,n){d=d([m],{declaredClass:"esri.dijit.RasterFunctionEditor.RFxFieldSelect",postCreate:function(){this.inherited(arguments);this._i18n=l.widgets.rasterFunctionEditor.rfxFieldSelect},startup:function(){this.inherited(arguments);this.setFieldOptions(this.layerArg)},
setFieldOptions:function(){if(this.layerArg&&this.layerArg.input){var a=this.layerArg.input,b;this.set("labelAttr","alias");if(0<a.declaredClass.indexOf("RFxFeatureSelect"))a.value&&(g.some(a.inputLayers,function(h){if(h.url===a.value.url)return b=h,!0}),b&&this.setStore(new f(new e({idProperty:"name",data:c.clone(b.fields)})))),this.otherOptions&&this._addOtherOptions();else if(0<a.declaredClass.indexOf("RFxRasterInput"))if(a.value)if(b=a.getSelectedLayer(a.get("value").name))if(b.loaded)b.hasRasterAttributeTable?
this.setFieldStore(b):this._setDefaultFieldStore();else b.on("load",c.hitch(this,function(a){this.setFieldStore(a.target)}));else this._setDefaultFieldStore();else this._setDefaultFieldStore();this.defaultValue?this.set("value",this.defaultValue):this.reset()}},setFieldStore:function(a){a.getRasterAttributeTable({renderingRule:a.renderingRule}).then(c.hitch(this,function(a){a&&a.fields?this.set("store",this._getFieldStore(a.fields)):this._setDefaultFieldStore();this.selectedValue?this.set("value",
this.selectedValue):this.reset()}),c.hitch(this,function(a){this._setDefaultFieldStore();this.reset()}))},_setDefaultFieldStore:function(){this.set("store",this._getFieldStore())},_addOtherOptions:function(){var a=[];Object.keys(this.otherOptions).forEach(function(b){a.push({name:b,alias:this.otherOptions[b]})},this);if(this.store&&this.store.data&&this.store.data.length){var b=this.store.data;a.forEach(function(a){b.some(function(b){if(b.name===a.name)return!0})||b.push(a)});this.setStore(this.store)}else this.setStore(new f(new e({idProperty:"name",
data:a})))},_getFieldStore:function(a){var b=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString"];return a&&a.length?(a=g.filter(a,function(a){return-1<g.indexOf(b,a.type)}),new f(new e({data:a,idProperty:"name"}))):new f(new e({data:this.isInGrid?[{name:"VALUE",alias:this._i18n.value}]:[{name:"VALUE",alias:this._i18n.value},{name:"COUNT",alias:this._i18n.count}],idProperty:"name"}))}});k("extend-esri")&&c.setObject("dijit.RasterFunctionEditor.RFxFieldSelect",
d,n);return d});
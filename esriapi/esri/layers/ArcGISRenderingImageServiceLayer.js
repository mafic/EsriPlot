// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/layers/ArcGISRenderingImageServiceLayer","dojo/_base/declare dojo/_base/lang dojo/has dojox/encoding/digests/_base ../kernel ../config ./DynamicMapServiceLayer ./ImageServiceLayerMixin".split(" "),function(d,e,g,f,h,k,l,m){d=d([l,m],{declaredClass:"esri.layers.ArcGISRenderingImageServiceLayer",rasterType:{rft:"rft",rasterObject:"rasterObj",url:"url"},constructor:function(a,b){this.type=b.type;var c=this._processRasterParam(b.raster);c&&(this._initialize(a+"?raster\x3d"+c,b),this.useMapImage=
b&&b.useMapImage||!1)},_processRasterParam:function(a){if(a)return this.type===this.rasterType.rft||this.type===this.rasterType.rasterObject?("object"===typeof a&&(a=JSON.stringify(a)),a=f.stringToWord(a),f.wordToBase64(a)):a},refresh:function(a){if(a)this.inherited(arguments);else{var b=this.disableClientCaching;this.disableClientCaching=!0;this.inherited(arguments);this.disableClientCaching=b}},setRaster:function(a){a=this._processRasterParam(a);this._url.query.raster=a;this._params.raster=a;this.refresh(!0)},
setRenderer:function(a,b){this.renderer=a;this.onRendererChange();b||this.refresh(!0)},exportMapImage:function(a,b){var c=k.defaults.map;a=e.mixin({size:c.width+","+c.height},this._params,a?a.toJson(this.normalization):{},{f:"json"});delete a._ts;this._exportMapImage(this._url.path+"/exportImage",a,b)}});g("extend-esri")&&e.setObject("layers.ArcGISRenderingImageServiceLayer",d,h);return d});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/map/layers/_HeatMapSupport",["dojo/_base/declare","esri/dijit/geoenrichment/when","esri/layers/HeatmapManager","esri/layers/FeatureLayer"],function(d,e,f,g){return d(null,{mode:g.MODE_AUTO,geometryType:"esriGeometryPoint",declaredClass:"esri.layers.FeatureLayer",onRendererChange:function(b){this.inherited(arguments);var a=this._map;this._heatmapManager&&!this._heatmapManager.sourceLayer&&(this._heatmapManager=null);b&&"colors"in b&&
"blurRadius"in b&&"maxPixelIntensity"in b?this.graphics&&this.graphics.length&&"point"==this.graphics[0].geometry.type&&!this._heatmapManager&&a&&(this._heatmapManager=new f(this),this._heatmapManager.initialize(a)):this._heatmapManager=null},_canDoClientSideQuery:function(){return!0},queryFeatures:function(b,a){var c={features:this.graphics.filter(function(a){return a.visible&&(!b||b.geometry.getExtent().intersects(a.geometry))})};a&&a(c);return e(c)}})});
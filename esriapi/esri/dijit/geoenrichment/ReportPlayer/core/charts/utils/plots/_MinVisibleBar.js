// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/plots/_MinVisibleBar",["dojo/_base/declare","dojo/_base/lang"],function(e,f){return e(null,{minVisibleWidth:2,createRect:function(c,d,a){var b=f.mixin({},a);b.width<this.minVisibleWidth&&(b.y-=this.minVisibleWidth-a.width,b.width=this.minVisibleWidth);this.opt.enableCache&&0<c._rectFreePool.length?(a=c._rectFreePool.pop(),a.setShape(b),d.add(a)):a=d.createRect(b);this.opt.enableCache&&c._rectUsePool.push(a);return a}})});
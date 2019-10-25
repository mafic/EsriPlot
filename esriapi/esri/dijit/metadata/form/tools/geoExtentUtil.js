// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/form/tools/geoExtentUtil","dojo/_base/lang dojo/_base/array dojo/number dojo/has dojo/_base/Color ../../../../graphic ../../../../SpatialReference ../../../../geometry/Extent ../../../../symbols/SimpleFillSymbol ../../../../symbols/SimpleLineSymbol ../../../../kernel".split(" "),function(l,f,m,n,g,p,q,r,h,k,t){f={addGraphic:function(a,b,d){if(a&&b){var c=new k(k.STYLE_SOLID,new g([255,0,0]),2),c=new h(h.STYLE_SOLID,c,new g([0,0,0,0]));d&&a.graphics.clear();a.graphics.add(new p(b,
c))}},checkNumber:function(a){var b=typeof a;if("undefined"===b&&null===a)return null;if("string"===b){a=parseFloat(a);if(isNaN(a))return null;b=typeof a}return"number"===b?isFinite(a)?a:null:null},formatCoordinate:function(a){for(a=m.format(a,{places:4});-1!==a.indexOf("0",a.length-1);)a=a.substring(0,a.length-1);-1!==a.indexOf(".",a.length-1)&&(a=a.substring(0,a.length-1));return a},makeGeographicExtent:function(a,b,d,c){var e;a=this.checkNumber(a);b=this.checkNumber(b);d=this.checkNumber(d);c=
this.checkNumber(c);if(null===a||null===d||null===b||null===c)return null;-85>b&&(b=-85);85<c&&(c=85);d<a&&(e=d,d=a,a=e);c<b&&(e=c,c=b,b=e);try{return new r(a,b,d,c,new q({wkid:4326}))}catch(u){}return null}};n("extend-esri")&&l.setObject("dijit.metadata.form.tools.geoExtentUtil",f,t);return f});
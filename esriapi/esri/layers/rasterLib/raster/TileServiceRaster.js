// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/layers/rasterLib/raster/TileServiceRaster","require dojo/_base/declare dojo/_base/lang dojo/_base/Deferred dojo/_base/array dojo/_base/config dojo/_base/json dojo/sniff dojo/DeferredList dojo/when ../../../kernel ../../../Evented ../../../request ../../../geometry/Extent ../../../geometry/Point ../../../SpatialReference ../../../deferredUtils ../../../urlUtils ../../PixelBlock ../../rasterFormats/rasterCodec ../tile/RasterTileInfo ./RasterInfo ./BasicRaster".split(" "),function(e,l,d,
h,z,A,B,m,C,n,p,D,q,r,t,u,v,E,F,G,w,x,y){e=l([y],{declaredClass:"esri.layers.rasterLib.raster.TileServiceRaster",constructor:function(b){},open:function(){var b=new h,a=this.serviceInfo||this._getServiceInfo(null),c=d.hitch(this,function(a){this.serviceInfo=a;this.version=a.currentVersion;this.rasterInfo=this._parseRasterInfo(a);this.loaded=!0;this._getRasterIdentifier();b.resolve(this)}),f=d.hitch(this,function(a){this.loaded=!0;this._getRasterIdentifier();b.reject(a)});n(a,c,f);return b.promise},
read:function(b){var a=this.url+"/tile/"+b.level+"/"+b.row+"/"+b.col,c={width:this.tileInfo.cols,height:this.tileInfo.rows,planes:null,pixelType:null,format:null,decodeFunc:null,isPoint:"elevation"===this.tileType.toLowerCase()?!0:!1};return this._requestPixels({url:a+(this.disableClientCaching?"?_ts\x3d "+(new Date).getTime():""),payload:{},decodeParams:c,tileOptions:b})},identify:function(b,a){null==a&&(a=this.tileInfo.lods[this.tileInfo.lods.length-1].level);var c=(b.x-this.tileInfo.origin.x)/
this.tileInfo.lods[a].resolution/this.tileInfo.cols;b=(this.tileInfo.origin.y-b.y)/this.tileInfo.lods[a].resolution/this.tileInfo.rows;var f=Math.floor(c),e=Math.floor(b),d=Math.floor((c-f)*this.tileInfo.cols),d=Math.min(d,this.tileInfo.cols-1),k=Math.floor((b-e)*this.tileInfo.rows),k=Math.min(k,this.tileInfo.rows-1),g=new h;this.read({level:a,row:e,col:f}).then(function(a){var b=k*a.width+d;a&&a.pixels&&0<a.pixels.length?(a=a.mask?a.mask[b]?a.pixels.map(function(a){return a[b]}):null:a.pixels.map(function(a){return a[b]}),
g.resolve(a)):g.reject("no valid data")},function(a){g.reject(a)});return g.promise},setFetchParameters:function(b,a){},_getRasterIdentifier:function(){this._rasterId||(this._rasterId=this.url.replace("http:","").replace("https:",""));return this._rasterId},_getServiceInfo:function(){var b=this.url,a=new h(v._dfdCanceller);a._pendingDfd=q({url:b,content:{f:"json"},handleAs:"json",callbackParamName:"callback"});a._pendingDfd.then(function(b){a.callback(b)},function(b){a.errback(b)});return a},_parseRasterInfo:function(b){var a=
new x;a.extent=new r(b.fullExtent);a.spatialReference=new u(b.spatialReference);this.tileType=b.cacheType||"Map";switch(this.tileType){case "Map":a.bandCount=3;a.pixelType="U8";this.dataType="Processed";break;case "Elevation":a.bandCount=1;a.pixelType=b.pixelType||"F32";this.dataType="Elevation";break;case "Raster":a.bandCount=null,a.pixelType=null,this.dataType=b.serviceDataType&&b.serviceDataType.replace("esriImageServiceDataType","")||"Generic"}var c=b.tileInfo;a.width=Math.floor((b.fullExtent.xmax-
b.fullExtent.xmin)/c.lods[c.lods.length-1].resolution+.5);a.height=Math.floor((b.fullExtent.ymax-b.fullExtent.ymin)/c.lods[c.lods.length-1].resolution+.5);a.cellSize=new t({x:c.lods[c.lods.length-1].resolution,y:c.lods[c.lods.length-1].resolution,spatialReference:b.spatialReference});this.tileInfo=new w(c);this.tileInfo.tileType=this.tileType;return a}});m("extend-esri")&&d.setObject("layers.rasterLib.raster.TileServiceRaster",e,p);return e});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/layers/rasterLib/raster/rasterProjectionHelper","dojo/_base/declare dojo/_base/lang dojo/_base/Deferred dojo/sniff ../../../kernel ../../../geometry/Extent ../../../geometry/projection ../../../geometry/webMercatorUtils ../../../SpatialReference ../../../geometry/Point".split(" "),function(g,h,n,q,r,f,d,x,t,p){g={requirePE:function(a,b){return!(a.equals(b.spatialReference)||a._canProject(b))},load:function(){var a=new n;if(!this._loadPromise)if(d.isSupported())this._loadPromise=d.load();
else{var b=new n;b.reject("projection engine is not supported on this version of the browser, please try with a modern browser");this._loadPromise=b.promise}this._loadPromise.isFulfilled()?this._loadPromise.isResolved()?a.resolve():this._loadPromise.isRejected()&&a.resolve():(this._pendingdfds=this._pendingdfds||[],this._pendingdfds.push(a),this._loadPromise.then(h.hitch(this,function(){this._pendingdfds.forEach(function(a){a.resolve()})}),h.hitch(this,function(){this._pendingdfds.forEach(function(a){a.reject()})})));
return a.promise},project:function(a,b){if(!b||a.spatialReference.wkid===b.wkid)return a;var c=d.isLoaded()?d:x;"esri.geometry.Extent"===a.declaredClass?a=new f(a.toJson()):"esri.geometry.Point"===a.declaredClass&&(a=new p(a.toJson()));b=new t(b.toJson());(a=c.project(a,b))&&"esri.geometry.Extent"===a.declaredClass?a=new f(a.toJson()):a&&"esri.geometry.Point"===a.declaredClass&&(a=new p(a.toJson()));return a},projectResolution:function(a,b,c){var d=c.xmin+(c.xmax-c.xmin)/2;c=c.ymin+(c.ymax-c.ymin)/
2;a=new f(d,c,d+a.x,c+a.y,a.spatialReference);a=this.project(a,b);return new p(a.xmax-a.xmin,a.ymax-a.ymin,b)},getProjectionOffsetGrid:function(a,b,c){c=c||20;var g=a.xmin,h=a.ymin,f=a.xmax,u=a.ymax;a=a.spatialReference;var n=b.spatialReference,q=d.isLoaded()?d:x,k=b.spatialReference._getInfo(),r=k&&k.valid[0],t=k&&k.valid[1],f=(f-g)/(c-1),u=(u-h)/(c-1),e,l,m,v=[],y,w;for(l=0;l<c;l++)for(y=w,w=[],m=0;m<c;m++)e=new p({x:g+f*l,y:h+u*m,spatialReference:a}),e=q.project(e,n),w.push(e),0<l&&k&&e.x<y[m].x&&
(e.x+=t-r),v.push((e.x-b.xmin)/(b.xmax-b.xmin)),v.push((e.y-b.ymin)/(b.ymax-b.ymin));return v}};q("extend-esri")&&h.setObject("layers.rasterLib.raster.rasterProjectionHelper",g,r);return g});
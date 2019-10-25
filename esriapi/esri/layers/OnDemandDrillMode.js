// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/layers/OnDemandDrillMode","dojo/_base/declare dojo/_base/lang dojo/Deferred ../sniff ../kernel ../promiseList ./RenderMode ../geometry/Extent ../geometry/jsonUtils ../tasks/query ../tasks/FeatureSet ../tasks/support/pbfDeps ./vectorTiles/core/promiseUtils ./vectorTiles/core/SetPool ./vectorTiles/views/2d/tiling/TileQueue ./vectorTiles/views/2d/tiling/TileStrategy ./vectorTiles/views/2d/tiling/TileKey".split(" "),function(l,t,u,p,v,w,x,q,y,z,r,g,A,m,B,C,F){var D=g.pbfQueryUtils,E=g.optimizedFeatures;
g=p("esri-featurelayer-webgl");l=l([x],{declaredClass:"esri.layers._OnDemandDrillMode",featureLayer:null,graphics:null,maxDrillLevel:g&&g.maxDrillLevel,maxRecordCountFactor:g&&g.maxRecordCountFactor,enablePBFQuery:g&&g.enablePBFQuery,_graphicsVal:null,_reEvalGraphics:!1,_featureMap:null,_quantizationFactor:1,_wglRenderer:null,_tileInfo:null,_tileInfoView:null,_tileFetchQueue:null,_tileStrategy:null,_tileRequests:null,constructor:function(a){this._graphicsVal=[];this._featureMap={};this.featureLayer=
a},initialize:function(a){this.inherited(arguments);this._tileRequests=new Map},startup:function(){if(!this._started||this._isSuspendedAtStartup){this.inherited(arguments);var a=this.featureLayer;this._wglRenderer=a._div;this._tileInfo=this._wglRenderer._tileInfo;this._tileInfoView=this._wglRenderer._tileInfoView;this._tileRenderer=this._wglRenderer._tileRenderer;this._tileFetchQueue=new B({tileInfoView:this._tileInfoView,process:this._getFeatureSet.bind(this)});this._tileStrategy=new C({cachePolicy:"purge",
buffer:0,acquireTile:this._acquireTile.bind(this),releaseTile:this._releaseTile.bind(this),tileInfoView:this._tileInfoView});this._isSuspendedAtStartup=a.suspended;this.start()}},propertyChangeHandler:function(a){this._init&&(2>a?this.start():console.log("FeatureLayer: layer in on-demand mode does not support time definitions. Layer id \x3d "+this.featureLayer.id+", Layer URL \x3d "+this.featureLayer.url))},destroy:function(){this._tileFetchQueue&&this._tileFetchQueue.clear();this._tileStrategy&&
this._tileStrategy.destroy();this._tileRequests&&this._tileRequests.clear();this.inherited(arguments)},update:function(a){this._tileFetchQueue.pause();this._tileFetchQueue.state=a.state;a=this._tileStrategy.update(a);this._tileFetchQueue.resume();a?this.featureLayer._fireUpdateEnd():this.featureLayer._fireUpdateStart()},suspend:function(){this._init&&this.stop()},resume:function(){this._init&&this.start()},refresh:function(){this.start()},hasAllFeatures:function(){var a=!1;this._getVisibleTileRequests().forEach(function(b){b.hasPartialFeatures&&
(a=!0)});return!a},hasUpdateError:function(){var a=!1;this._getVisibleTileRequests().forEach(function(b){b.hasUpdateError&&(a=!0)});return a},start:function(){var a=this.featureLayer;!a.suspended&&a.isQueryable()&&(this._clearIIf(),this._tileFetchQueue.pause(),this._tileFetchQueue.clear(),this._tileStrategy.clear(),this._wglRenderer.start())},stop:function(){this._wglRenderer.stop()},_getVisibleTileRequests:function(){var a=this._tileStrategy.tileIndex;if(!a)return[];var b=[];this._tileRequests.forEach(function(e,
c){(c=a.get(c))&&c.visible&&b.push(e)});return b},_acquireTile:function(a){this.featureLayer._fireUpdateStart();var b=this._acquireRendererTile(a),e=b.key,c=e.id;a=this._tileInfo.lodAt(a.level);var d={id:c,key:e,bounds:this._tileInfo.getTileBounds([0,0,0,0],e),resolution:a.resolution,scale:a.scale},e=this._tileFetchQueue.push(e).then(function(a){return this._wglRenderer._symbolProcessor.getMeshData(d,a.featureSet).then(function(b){return{meshData:b.data,featureSet:a.featureSet,errors:a.errors,hasPartialFeatures:a.hasPartialFeatures}})}.bind(this)).then(function(a){this._tileRenderer.onTileData({tileKey:c,
data:a.meshData});this._addTile(c,a)}.bind(this)).otherwise(function(a){this._tileRenderer.onTileData({tileKey:c,data:null});this._tileError(c);return A.reject(a)}.bind(this));this._tileRequests.set(c,{tsTile:d,request:e,isFulfilled:!1,hasUpdateError:null,hasPartialFeatures:null,featureSet:null,graphics:[]});return b},_acquireRendererTile:function(a){a=this._tileRenderer.acquireTile(a);a.once("attach",function(){this._wglRenderer._scheduleUpdate()}.bind(this));return a},_releaseTile:function(a){this.featureLayer._fireUpdateStart();
this._tileRequests.get(a.key.id)&&(this._removeTile(a),this._wglRenderer._scheduleUpdate())},_addTile:function(a,b){this._reEvalGraphics=!0;var e=this._createGraphics(b.featureSet);this._registerGraphics(e);if(a=this._tileRequests.get(a))a.isFulfilled=!0,a.hasUpdateError=!!b.errors.length,a.hasPartialFeatures=b.hasPartialFeatures||a.hasUpdateError,a.featureSet=b.featureSet,a.graphics=e},_tileError:function(a){if(a=this._tileRequests.get(a))a.isFulfilled=!0,a.hasUpdateError=!0,a.hasPartialFeatures=
!0,a.graphics=[];this._wglRenderer._scheduleUpdate()},_removeTile:function(a){var b=a.key.id,e=this._tileRequests.get(b);e.request.isFulfilled()||e.request.cancel();this._tileRequests["delete"](b);this._wglRenderer._cancelRedraw(b);this._reEvalGraphics=!0;this._tileRenderer.releaseTile(a);this._unregisterGraphics(e.graphics)},_getFeatureSet:function(a){var b={hashes:new Set,drill:[],featureSet:{features:[],geometryType:this.featureLayer.geometryType,spatialReference:this.map.spatialReference.toJson(),
transform:null},hasPartialFeatures:!1,errors:[]},e=this.featureLayer._task,c=this._getResolutionParams(a),d=this._tileInfoView.getTileBounds([0,0,0,0],a),d=this._expandTileBounds(d,c),h=m.acquire();return this._drillQuery(b,h,e,d,c,null,a).then(function(a){m.release(h);this._calculateCentroid(a);return a}.bind(this)).otherwise(function(a){m.release(h);throw a;})},_getResolutionParams:function(a){this._tileInfo.updateTileInfo(a);var b=this._tileInfo.lodAt(a.level);return{mode:"view",originPosition:"upperLeft",
tolerance:this._quantizationFactor*b.resolution,extent:new q(a.extent[0],a.extent[1],a.extent[2],a.extent[3],this.map.spatialReference)}},_expandTileBounds:function(a,b){var e=this.featureLayer.geometryType;b=("esriGeometryPoint"===e||"esriGeometryMultipoint"===e||this._wglRenderer._returnCentroid?20:0)*b.tolerance;a[0]-=b;a[1]-=b;a[2]+=b;a[3]+=b;return a},_calculateCentroid:function(a){var b;if("esriGeometryPolygon"===a.featureSet.geometryType&&this._wglRenderer._returnCentroid){b=0;var e=a.featureSet.spatialReference,
c=a.featureSet.transform,d={geometry:{x:null,y:null}},h=[d];a.featureSet.features.forEach(function(a){if(!a.centroid){var f=a.geometry;f&&(f=r.createPolygon(f,e,c),f=f.getCentroid())&&(d.geometry.x=f.x,d.geometry.y=f.y,y.quantize(h,"esriGeometryPoint",c),a.centroid={x:d.geometry.x,y:d.geometry.y},b++)}})}return b},_drillQuery:function(a,b,e,c,d,h,n,f){f=null!=f?f:0;a.drill.push(c);return this._query(e,c,d,h,n,f).then(function(k){this.featureLayer.supportsFormatPBF&&this.enablePBFQuery&&(k=E.convertToFeatureSet(D.parsePBFFeatureQuery(k)));
this._appendFeatures(a.featureSet.features,b,k.features);k.transform&&(a.featureSet.transform=k.transform);if(k.exceededTransferLimit){if(f<this.maxDrillLevel){f++;k=(c[2]-c[0])/2;var g=(c[3]-c[1])/2,l=[c[0]+k,c[1]+g,c[2],c[3]],m=[c[0],c[1],c[2]-k,c[3]-g],p=[c[0]+k,c[1],c[2],c[3]-g];return w([this._drillQuery(a,b,e,[c[0],c[1]+g,c[2]-k,c[3]],d,h,n,f),this._drillQuery(a,b,e,l,d,h,n,f),this._drillQuery(a,b,e,m,d,h,n,f),this._drillQuery(a,b,e,p,d,h,n,f)]).then(function(){return a})}a.hasPartialFeatures=
!0}return a}.bind(this)).otherwise(function(b){if(0<f)a.errors.push(b);else throw b;}.bind(this))},_appendFeatures:function(a,b,e){var c=a.length,d=e?e.length:0;a.length=c+d;var h=0,g,f,k,l=this.featureLayer.objectIdField;for(g=0;g<d;g++)f=e[g],k=f.attributes[l],b.has(k)||(a[c+h]=f,b.add(k),h++);a.length-=d-h},_query:function(a,b,e,c,d,g){c=this.featureLayer;d=new z;var h=c.getOutFields();.75<=h.length/c.fields.length&&(h=["*"]);d.geometry=new q(b[0],b[1],b[2],b[3],this.map.spatialReference);d.outFields=
h;d.where=c.getDefinitionExpression();d.returnGeometry=!0;d.returnCentroid=this._wglRenderer._returnCentroid;d.timeExtent=c._getOffsettedTE(c._mapTimeExtent);c._ts&&(d._ts=Date.now());d.orderByFields=c.supportsAdvancedQueries?c.getOrderByFields():null;d.multipatchOption=c.multipatchOption;d.maxAllowableOffset="esriGeometryPolyline"===c.geometryType?e.tolerance:null;d.quantizationParameters=e;(b=c.advancedQueryCapabilities)&&b.supportsQueryWithResultType&&(d.resultType="tile");d.returnExceededLimitFeatures=
g===this.maxDrillLevel;b&&b.supportsMaxRecordCountFactor&&(d.maxRecordCountFactor=this.maxRecordCountFactor);return this._wrapInNewDeferred(a.rawExecute(d,c.supportsFormatPBF&&this.enablePBFQuery?{format:"pbf"}:null))},_wrapInNewDeferred:function(a){var b=new u(function(){a.isFulfilled()||a.cancel()});a.then(function(a){b.resolve(a)}).otherwise(function(a){b.reject(a)});return b.promise},_collectGraphics:function(){var a=this._featureMap,b=[],e;for(e in a)b.push(a[e]);return b},_createGraphics:function(a){return r.createGraphics(a)},
_registerGraphics:function(a){var b=this.featureLayer.objectIdField;a.forEach(function(a){var c=a.attributes&&a.attributes[b];this._registerFeature(c,a);this._incRefCount(c)}.bind(this))},_unregisterGraphics:function(a){var b=this.featureLayer.objectIdField;a.forEach(function(a){a=a.attributes&&a.attributes[b];this._decRefCount(a);this._unregisterFeature(a)}.bind(this))}});Object.defineProperty(l.prototype,"graphics",{get:function(){this._reEvalGraphics&&(this._reEvalGraphics=!1,this._graphicsVal=
this._collectGraphics());return this._graphicsVal}});p("extend-esri")&&t.setObject("layers._OnDemandDrillMode",l,v);return l});
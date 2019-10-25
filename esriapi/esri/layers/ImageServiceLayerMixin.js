// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/layers/ImageServiceLayerMixin","dojo/_base/declare dojo/_base/lang dojo/_base/Deferred dojo/_base/array dojo/_base/json dojo/_base/config dojo/_base/connect dojo/has dojo/io-query dojo/DeferredList ../kernel ../config ../lang ../request ../deferredUtils ../urlUtils ../geometry/Extent ../geometry/Point ../geometry/Polygon ./MosaicRule ./RasterFunction ./DimensionalDefinition ./Raster ./PixelBlock ./pixelFilters/VectorFieldPixelFilter ./rasterFormats/ImageCanvasDecoder ./TimeInfo ./Field ../graphic ../tasks/ImageServiceIdentifyTask ../tasks/ImageServiceIdentifyParameters".split(" "),
function(J,f,r,m,l,C,N,Q,R,da,S,T,F,D,q,L,K,U,V,z,A,O,W,M,P,X,Y,Z,aa,ba,ca){J=J(null,{declaredClass:"esri.layers.ImageServiceLayerMixin",_rasterFieldPrefix:"Raster.",_renderingRuleFieldSubPrefix:"ServicePixelValue.",_rasterFunctionServiceInfoProps:"bandCount pixelType hasRasterAttributeTable hasHistograms minValues maxValues meanValues stdvValues serviceDataType".split(" "),_pixelTypeRanges:{U1:[0,1],U2:[0,3],U4:[0,15],U8:[0,255],S8:[-128,127],U16:[0,65535],S16:[-32768,32767]},_eventMap:{"rendering-change":!0,
"mosaic-rule-change":!0,"spatial-reference-change":!0,"renderer-change":!0},constructor:function(a,b){this.useMapTime=b&&b.hasOwnProperty("useMapTime")?!!b.useMapTime:!0},_initialize:function(a,b){this._url=L.urlToObject(a);this.raster=new W(this._url.path);this._rasterFunctionTemplateInfos={};this._customRenderingRuleId={};this.infoTemplate=b&&b.infoTemplate;this.format=(a=b&&b.imageServiceParameters)&&a.format;this.compressionTolerance=a&&a.compressionTolerance?a.compressionTolerance:.01;this.interpolation=
a?a.interpolation:null;this.compressionQuality=a?a.compressionQuality:null;this.bandIds=a?a.bandIds:null;this.mosaicRule=a?a.mosaicRule:null;this.renderingRule=a?a.renderingRule:null;this.renderer=a?a.renderer:null;this.useMapDimensionValue=b&&b.hasOwnProperty("useMapDimensionValue")?!!b.useMapDimensionValue:!0;this.hasImageFilter=b&&b.hasImageFilter;this.activeMapDimensions=b&&b.activeMapDimensions;this._params=f.mixin({},this._url.query,{f:"image",interpolation:this.interpolation,format:this.format,
compressionQuality:this.compressionQuality,bandIds:this.bandIds?this.bandIds.join(","):null},a?a.toJson():{});this.pixelFilter=b&&b.pixelFilter;this.originalPixelData=this.pixelData=null;this.hasDataChanged=!0;this._requestDataHandler=f.hitch(this,this._requestDataHandler);this._requestDataErrorHandler=f.hitch(this,this._requestDataErrorHandler);this._rasterReadPromise=null;this._initLayer=f.hitch(this,this._initLayer);this._queryVisibleRastersHandler=f.hitch(this,this._queryVisibleRastersHandler);
this._visibleRasters=[];this._rasterAttributeTableFields=[];this._rasterAttributeTableFeatures=[];this._renderingRuleAttributeTable={};this._useRenderingRuleAttributeTable=!1;this._loadCallback=b&&b.loadCallback;a&&a.renderer&&(a.renderer.outputUnit||a.renderer.inputUnit)&&(this.vectorFieldPixelFilter=new P,this.vectorFieldPixelFilter.setUnits(a.renderer.inputUnit,a.renderer.outputUnit));(b=b&&b.resourceInfo)?this._initLayer(b):D({url:this._url.path,content:f.mixin({f:"json"},this._url.query),callbackParamName:"callback",
load:this._initLayer,error:this._errorHandler});this.registerConnectEvents()},disableClientCaching:!1,_initLayer:function(a,b){if(null!==a&&void 0!==a){this._findCredential();(this.credential&&this.credential.ssl||a&&a._ssl)&&this._useSSL();b=this.minScale;var c=this.maxScale;f.mixin(this,a);this.minScale=b;this.maxScale=c;this.initialExtent=this.fullExtent=this.extent=new K(a.extent);this.spatialReference=this.initialExtent.spatialReference;this.pixelSizeX=parseFloat(this.pixelSizeX);this.pixelSizeY=
parseFloat(this.pixelSizeY);var e=this.minValues,d=this.maxValues,h=this.meanValues,g=this.stdvValues,B=this.bands=[];b=0;for(c=this.bandCount;b<c;b++)B[b]={min:e[b],max:d[b],mean:h[b],stddev:g[b]};this.timeInfo=(b=this.timeInfo)&&b.timeExtent?new Y(b):null;c=this.fields=[];if(e=a.fields)for(b=0;b<e.length;b++)c.push(new Z(e[b]));this._updateInfoTemplateFields(this.fields);this.version=a.currentVersion;this.version||(this.version="fields"in a||"objectIdField"in a||"timeInfo"in a?10:9.3);F.isDefined(a.minScale)&&
!this._hasMin&&this.setMinScale(a.minScale);F.isDefined(a.maxScale)&&!this._hasMax&&this.setMaxScale(a.maxScale);b={};a.defaultMosaicMethod?(b.method=a.defaultMosaicMethod,b.operation=a.mosaicOperator,b.sortField=a.sortField,b.sortValue=a.sortValue):b.method=z.METHOD_NONE;this.defaultMosaicRule=new z(b);this.defaultMosaicRule.ascending=!0;this._useRenderingRuleAttributeTable=10<this.version&&"esriImageServiceDataTypeThematic"===this.serviceDataType;this._setDefaultRenderingRule(!0);this.renderingRule&&
this.getRenderingRuleServiceInfo(this.renderingRule).then(f.hitch(this,function(a){a.hasRasterAttributeTable&&this.getRenderingRuleAttributeTable({renderingRule:this.renderingRule}).then(f.hitch(this,function(){!this.renderer||"esri.renderer.ClassBreaksRenderer"!==this.renderer.declaredClass&&"esri.renderer.UniqueValueRenderer"!==this.renderer.declaredClass||this.refresh()}))}));this._isScientificData()&&(!this.mosaicRule||this.mosaicRule&&!this.mosaicRule.multidimensionalDefinition)&&this._setDefaultMultidimensionalDefinition(!0);
10<this.version&&this.hasRasterAttributeTable&&this.getRasterAttributeTable().then(f.hitch(this,function(a){a&&(a.features&&a.fields&&(this.rasterAttributeTable=f.clone(a)),a.features&&0<a.features.length&&(this._rasterAttributeTableFeatures=f.clone(a.features)),a.fields&&0<a.fields.length&&(this._rasterAttributeTableFields=f.clone(a.fields)),this.renderingRule||!this.renderer||"esri.renderer.ClassBreaksRenderer"!==this.renderer.declaredClass&&"esri.renderer.UniqueValueRenderer"!==this.renderer.declaredClass||
this.refresh())}));this._initVectorPixelFilter();10.3<=this.version&&this.rasterFunctionInfos&&this.rasterFunctionInfos.length&&this.getRasterFunctionInfos().then(f.hitch(this,function(a){if(a&&a.length){this.rasterFunctionInfos=a;var b=[],c;m.forEach(a,function(a){if(a){var e=a.functionType;c=c||1===e||2===e;b.push(a.name)}},this);this._hasItemLevelRFT=c;this._rasterFunctionNames=b;c&&(this._initVectorPixelFilter(),this.refresh())}}));this.loaded=!0;this._setDefaultFilter();this.onLoad(this);if(a=
this._loadCallback)delete this._loadCallback,a(this)}},_updateInfoTemplateFields:function(a){if(a&&!(1>a.length)&&this.infoTemplate&&this.infoTemplate.info&&this.infoTemplate.info.fieldInfos&&!(1>this.infoTemplate.info.fieldInfos.length)){var b,c,e,d;d=this.infoTemplate.info.fieldInfos;for(b=0;b<a.length;b++)for(e=a[b],c=0;c<d.length;c++)if(d[c].fieldName.toLowerCase()===e.name.toLowerCase()&&d[c].fieldName!==e.name){d[c].fieldName=e.name;break}}},getKeyProperties:function(a){var b=this._url.path+
"/keyProperties",c=new r(q._dfdCanceller),e={f:"json"};a&&a.renderingRule&&(e.renderingRule=l.toJson(a.renderingRule.toJson()));10<this.version?(c._pendingDfd=D({url:b,content:e,handleAs:"json",callbackParamName:"callback"}),c._pendingDfd.then(function(a){c.callback(a)},function(a){c.errback(a)})):(a=Error("Layer does not have key properties"),a.log=!!C.isDebug,c.errback(a));return c},getRasterAttributeTable:function(a){var b=this._url.path+"/rasterAttributeTable",c=new r(q._dfdCanceller),e={f:"json"},
d=this.hasRasterAttributeTable;a&&a.renderingRule&&(e.renderingRule=l.toJson(a.renderingRule.toJson()),d=!0);10<this.version&&d?(c._pendingDfd=D({url:b,content:e,handleAs:"json",callbackParamName:"callback"}),c._pendingDfd.then(function(a){c.callback(a)},function(a){c.errback(a)})):(a=Error("Layer does not support raster attribute table"),a.log=!!C.isDebug,c.errback(a));return c},getRenderingRuleAttributeTable:function(a){var b=new r(q._dfdCanceller);if(!a||!a.renderingRule)return b.errback(Error("Rendering rule is not specified")),
b;a=a.renderingRule;var c=this._getRenderingRuleId(a);this._renderingRuleAttributeTable&&c&&this._renderingRuleAttributeTable.hasOwnProperty(c)?b.resolve(this._renderingRuleAttributeTable[c]):b=this.getRasterAttributeTable({renderingRule:a}).then(f.hitch(this,function(a){var b;a&&a.features&&a.features.length&&a.fields&&a.fields.length&&(b={features:f.clone(a.features),fields:f.clone(a.fields)},c&&(this._renderingRuleAttributeTable[c]=b));return b}));return b},_initVectorPixelFilter:function(){var a;
this._hasItemLevelRFT&&this.renderingRule&&(a=this._getItemLevelRenderingRule(this.renderingRule));if(a=a||this.renderingRule)return this.getRenderingRuleServiceInfo(a).then(f.hitch(this,function(a){a&&this._isVectorData(a)&&!F.isDefined(this.pixelFilter)&&"esri.layers.ArcGISImageServiceVectorLayer"===this.declaredClass&&(this.vectorFieldPixelFilter=this.vectorFieldPixelFilter||new P,this.vectorFieldPixelFilter.isDataUV="esriImageServiceDataTypeVector-UV"===a.serviceDataType,this.pixelFilter=this.vectorFieldPixelFilter.computeMagnitudeAndDirection,
this.getKeyProperties().then(f.hitch(this,this._setFlowRepresentation)),this._applyVectorResamplingType(a.serviceDataType))}))},_applyVectorResamplingType:function(a){if(a){var b=this.renderingRule;b&&"Resample"===b.functionName&&((b.functionArguments||{}).ResamplingType="esriImageServiceDataTypeVector-UV"===a?7:10,this.setRenderingRule(new A(b.toJson())))}},_getRasterAttributeTableFeatures:function(){var a=new r;if(this._rasterAttributeTableFeatures&&0<this._rasterAttributeTableFeatures.length)return a.resolve(this._rasterAttributeTableFeatures),
a;if(10<this.version&&this.hasRasterAttributeTable)return a=this.getRasterAttributeTable(),a.then(f.hitch(this,function(a){a&&a.features&&0<a.features.length&&(this._rasterAttributeTableFeatures=f.clone(a.features))})),a;a.resolve(this._rasterAttributeTableFeatures);return a},_getRenderingRuleAttributeTableFeatures:function(a){a=a&&a.renderingRule;return a?this.getRenderingRuleAttributeTable({renderingRule:a}).then(function(a){return a&&a.features}):(a=new r,a.errback(Error("Rendering rule is not specified")),
a)},getCustomRasterFields:function(a){var b=a?a.rasterAttributeTableFieldPrefix:this._rasterFieldPrefix;a=10.3<=this.version?"esriFieldTypeDouble":"esriFieldTypeString";var c={name:this._rasterFieldPrefix+"ItemPixelValue",alias:"Item Pixel Value",domain:null,editable:!1,length:50,type:a},e={name:this._rasterFieldPrefix+"ServicePixelValue",alias:"Service Pixel Value",domain:null,editable:!1,length:50,type:a},d={name:this._rasterFieldPrefix+"ServicePixelValue.Raw",alias:"Raw Service Pixel Value",domain:null,
editable:!1,length:50,type:"esriFieldTypeDouble"},h=this.fields?f.clone(this.fields):[];a=h.length;h[a]=e;10.4<=this.version&&"esri.layers.ArcGISImageServiceLayer"===this.declaredClass&&(!this.rasterFunctionInfos||!this.rasterFunctionInfos.length||this._isRenderingRuleAProcessingTemplate({functionName:"none"}))&&(a++,h[a]=d);if(this.capabilities&&-1<this.capabilities.toLowerCase().indexOf("catalog")||this.fields&&0<this.fields.length)a++,h[a]=c;!F.isDefined(this.pixelFilter)||"esriImageServiceDataTypeVector-UV"!==
this.serviceDataType&&"esriImageServiceDataTypeVector-MagDir"!==this.serviceDataType||(c={name:this._rasterFieldPrefix+"Magnitude",alias:"Magnitude",domain:null,editable:!1,type:"esriFieldTypeDouble"},e={name:this._rasterFieldPrefix+"Direction",alias:"Direction",domain:null,editable:!1,type:"esriFieldTypeDouble"},a++,h[a]=c,a++,h[a]=e);a=this._rasterAttributeTableFields;(c=this.renderingRule&&this._getRenderingRuleId(this.renderingRule))&&this._renderingRuleAttributeTable&&this._renderingRuleAttributeTable.hasOwnProperty(c)&&
(a=this._renderingRuleAttributeTable[c].fields);a&&0<a.length&&(a=m.filter(a,function(a){return"esriFieldTypeOID"!==a.type&&"value"!==a.name.toLowerCase()}),a=m.map(a,function(a){var c=f.clone(a);c.name=b+a.name;return c}),h=h.concat(a));var g=this._rasterFieldPrefix+this._renderingRuleFieldSubPrefix;10.4<=this.version&&this.rasterFunctionInfos&&m.forEach(this.rasterFunctionInfos,function(a){a&&a.name&&"none"!==a.name.toLowerCase()&&(a={name:g+a.name.replace(/ /gi,"_"),alias:a.name,domain:null,editable:!1,
type:"esriFieldTypeDouble"},h.push(a))});return h},_applyTimeToMultidimensionalCRF:function(a,b){var c=this.timeInfo&&this.timeInfo.startTimeField;if((b=b||this._params.time)&&c&&this._isMultidimensionalCRF()){a=f.clone(a||this.defaultMosaicRule)||new z;a.multidimensionalDefinition=a.multidimensionalDefinition||[];var e=a.multidimensionalDefinition.filter(function(a){return a.dimensionName===c}),d=b.split(",").map(function(a){return parseInt(a,10)});0<e.length?a.multidimensionalDefinition.forEach(function(a){a.dimensionName===
c&&(a.isSlice=1===d.length,a.values=1===d.length?d:[d])}):a.multidimensionalDefinition.push(new O({dimensionName:c,isSlice:1===d.length,values:1===d.length?d:[d]}))}return a},_prepareGetImageParameters:function(a,b,c,e){e=F.isDefined(e)?e:this._params;if(this.renderer||this._hasItemLevelRFT&&this.renderingRule){var d=this.getExportImageRenderingRule();e.renderingRule=d?l.toJson(d.toJson()):null}d=this.getExportImageMosaicRule(e);e.mosaicRule=d?l.toJson(d.toJson()):null;d=a.spatialReference.wkid||
l.toJson(a.spatialReference.toJson(!1));delete e._ts;f.mixin(e,{bbox:a.xmin+","+a.ymin+","+a.xmax+","+a.ymax,imageSR:d,bboxSR:d,size:b+","+c},this.disableClientCaching?{_ts:(new Date).getTime()}:{});delete e.compressionTolerance;e.format&&"LERC"===e.format.toUpperCase()&&(e.compressionTolerance=this.compressionTolerance);e.token=this._getToken()},getImageUrl:function(a,b,c,e,d){d=F.isDefined(d)?d:this._params;this._prepareGetImageParameters(a,b,c,d);a=f.clone(d);this._cleanupRequestParams(a);b=this._url.path+
"/exportImage?";c=L.addProxy(b+R.objectToQuery(f.mixin(a,{f:"image"})));var h=a.token;c.length>T.defaults.io.postLength||this.useMapImage?this._jsonRequest=D({url:b,content:f.mixin(a,{f:"json"}),callbackParamName:"callback",load:function(a,b){a=a.href;h&&(a+=-1===a.indexOf("?")?"?token\x3d"+h:"\x26token\x3d"+h);e(L.addProxy(a))},error:this._errorHandler}):e(c)},onRenderingChange:function(){},onMosaicRuleChange:function(){},onRendererChange:function(){},setInterpolation:function(a,b){this.interpolation=
this._params.interpolation=a;b||this.refresh(!0)},setCompressionQuality:function(a,b){this.compressionQuality=this._params.compressionQuality=a;b||this.refresh(!0)},setCompressionTolerance:function(a,b){this.compressionTolerance=a;b||this.refresh(!0)},setBandIds:function(a,b){var c=!1;this.bandIds!==a&&(c=!0);this.bandIds=a;this._params.bandIds=a.join(",");if(c&&!b)this.onRenderingChange();b||this.refresh(!0)},setDefaultBandIds:function(a){this.bandIds=this._params.bandIds=null;a||this.refresh(!0)},
setDisableClientCaching:function(a){this.disableClientCaching=a},setMosaicRule:function(a,b){var c=!1;this.mosaicRule!==a&&(c=!0);this.mosaicRule=a;this._params.mosaicRule=l.toJson(a.toJson());if(c&&!b)this.onMosaicRuleChange();b||this.refresh(!0)},getRasterFunctionInfos:function(){if(10.3>this.version||!this.rasterFunctionInfos||!this.rasterFunctionInfos.length)console.log("Layer doesn't support /rasterFunctionInfos resource.");else return D({url:this._url.path+"/rasterFunctionInfos",content:{f:"json"},
handleAs:"json",load:function(a){return a&&a.rasterFunctionInfos}})},setRenderingRule:function(a,b){var c=!1;this.renderingRule!==a&&(c=!0);this.renderingRule=a;this._params.renderingRule=a?l.toJson(a.toJson()):null;this._useRenderingRuleAttributeTable&&this.getRenderingRuleAttributeTable({renderingRule:a});if(c)this.onRenderingChange();this._setDefaultFilter();b||this.refresh(!0)},setImageFormat:function(a,b){this.format=this._params.format=a;this._setDefaultFilter();b||this.refresh(!0)},setInfoTemplate:function(a){this.infoTemplate=
a;this._updateInfoTemplateFields(this.fields)},setDefinitionExpression:function(a,b){var c=this.mosaicRule?this.mosaicRule.toJson():{};this.mosaicRule||(this.defaultMosaicRule?c=this.defaultMosaicRule.toJson():c.method=z.METHOD_NONE);c.where=a;a=new z(c);this.setMosaicRule(a,b);return this},getDefinitionExpression:function(){return this.mosaicRule?this.mosaicRule.where:null},setPixelFilter:function(a){this.pixelFilter=a;this._isDefaultPixelFilter=!1},getPixelData:function(a){return a?(this._useBrowserDecoding()&&
(this.originalPixelData={pixelBlock:this._getPixelBlockFromCanvas(this._context,this._map.width,this._map.height),extent:this._map.extent}),this.originalPixelData):this.pixelData},getExportImageRenderingRule:function(){var a;this._hasItemLevelRFT&&this.renderingRule&&(a=this._getServiceLevelRenderingRule(this.renderingRule));a=a||this.renderingRule;this._isItemLevelRasterFunction(this.renderingRule)&&(a=void 0);return this._combineRenderingRule(this._convertRendererToRenderingRule(this.renderer),
a)},getExportImageMosaicRule:function(){var a=this.mosaicRule,b;this._hasItemLevelRFT&&this.renderingRule&&(b=this._getItemLevelRenderingRule(this.renderingRule));b&&(a=a||this.defaultMosaicRule||new z,a.itemRenderingRule=b);return a=this._applyTimeToMultidimensionalCRF(a)},redraw:function(){this.hasDataChanged=!1;this._setPixelData(this.originalPixelData)},getHistograms:function(){var a=new r(q._dfdCanceller);if(this.hasHistograms)a._pendingDfd=D({url:this._url.path+"/histograms",content:{f:"json"},
handleAs:"json",callbackParamName:"callback"}),a._pendingDfd.then(function(b){a.callback(b)},function(b){a.errback(b)});else{var b=Error("Layer does not have histograms.");b.log=!!C.isDebug;a.errback(b)}return a},computeHistograms:function(a){var b=new r(q._dfdCanceller);if(10.1<=this.currentVersion){a=a||{};var c=a.geometry||this.fullExtent,e=(a.geometry||this.fullExtent).toJson(),c="extent"===c.type?"esriGeometryEnvelope":"esriGeometryPolygon",d=a.renderingRule||this.renderingRule||this.defaultRenderingRule,
d=d?d.toJson():null,h=a.mosaicRule||this.mosaicRule||this.defaultMosaicRule,h=h?h.toJson():null;a=a.pixelSize||{x:this.pixelSizeX,y:this.pixelSizeY};b._pendingDfd=D({url:this._url.path+"/computeHistograms",content:f.mixin({f:"json",geometry:JSON.stringify(e),geometryType:c,renderingRule:JSON.stringify(d),mosaicRule:JSON.stringify(h),pixelSize:JSON.stringify(a),callbackParamName:"callback"}),handleAs:"json"});b._pendingDfd.then(function(a){b.callback(a)},function(a){b.errback(a)})}else e=Error("Layer doesn't support computeHistograms."),
e.log=!!C.isDebug,b.errback(e);return b},getRenderingRuleServiceInfo:function(a){var b=new q._fixDfd(new r(q._dfdCanceller));if(!a)return b.errback(Error("Rendering rule is not specified")),b;var c=this._getRenderingRuleId(a);return c&&this._rasterFunctionTemplateInfos[c]?(b.resolve(this._rasterFunctionTemplateInfos[c]),b):D({url:this._url.path,content:f.mixin(f.mixin({f:"json",renderingRule:JSON.stringify(a.toJson())},this._url.query)),callbackParamName:"callback",load:f.hitch(this,function(a){var b=
{};m.forEach(this._rasterFunctionServiceInfoProps,function(c){b[c]=a[c]});return this._rasterFunctionTemplateInfos[c]=b}),error:this._errorHandler})},queryVisibleRasters:function(a,b,c,e){var d=this._map,h=q._fixDfd(new r(q._dfdCanceller));this._visibleRasters=[];var g,B,n=!0,p=!0,k=null,y=this.infoTemplate?this.infoTemplate.info:null,t=y?f.clone(this.infoTemplate.info.fieldInfos):null;b=b||{};if(y&&this.infoTemplate.info.mediaInfos&&this.infoTemplate.info.mediaInfos.length){var v=[];m.forEach(this.infoTemplate.info.mediaInfos,
function(a){v=v.concat(a&&a.value&&a.value.fields||[])});v.length&&m.forEach(t,function(a){a&&-1<v.indexOf(a.fieldName)&&(a.visible=!0)})}if(t&&0<t.length)for(n=!1,g=0;g<t.length;g++)if((B=t[g])&&B.fieldName.toLowerCase()!==this._rasterFieldPrefix.toLowerCase()+"servicepixelvalue"&&(B.visible||y.title&&-1<y.title.toLowerCase().indexOf(B.fieldName.toLowerCase()))){n=!0;break}this.infoTemplate&&this.infoTemplate.info&&this.infoTemplate.info.layerOptions&&this.infoTemplate.info.layerOptions.hasOwnProperty("returnTopmostRaster")&&
(k=this.infoTemplate.info.layerOptions.returnTopmostRaster?1:null);t&&0<t.length&&(p=!1,m.some(t,function(a){if(a&&a.fieldName.toLowerCase()===this._rasterFieldPrefix.toLowerCase()+"itempixelvalue"&&a.visible)return p=!0},this));var w=(B=this._removeVisualizationStretchFunction(this.renderingRule))&&B.functionName,u=[];if(10.4<=this.version){var H=!1;if(this.rasterFunctionInfos&&t){var E=this._rasterFieldPrefix+this._renderingRuleFieldSubPrefix;m.forEach(this.rasterFunctionInfos,function(a){var b=
E+a.name.replace(/ /gi,"_");m.some(t,function(a){return a.visible&&a.fieldName===b})&&(H=H||w&&w===a.name,u.push(new A({rasterFunction:a.name})))})}B&&!H&&u.push(B)}g=new ca;g.geometry=a.geometry;g.returnGeometry=this._map.spatialReference.equals(this.spatialReference);g.returnCatalogItems=n;g.timeExtent=a.timeExtent;g.returnPixelValues=p;g.maxItemCount=k||a.maxItemCount;this._params.time&&this.mosaicRule?(a=f.clone(this.mosaicRule),a=this._filterOutTimeDimension(a),g.mosaicRule=a):g.mosaicRule=this.mosaicRule||
null;this._isMultidimensionalCRF()&&g.timeExtent&&(g.mosaicRule=this._applyTimeToMultidimensionalCRF(g.mosaicRule,g.timeExtent.toJson().join(",")),delete g.timeExtent);g.renderingRule=10.4>this.version&&B||null;g.renderingRules=u||null;10.61>this.version&&(g.returnPixelValues=void 0,g.maxItemCount=void 0);d&&(d=new U((d.extent.xmax-d.extent.xmin)/d.width,(d.extent.ymax-d.extent.ymin)/d.height,d.extent.spatialReference),g.pixelSize=d);b.requestParams=g;var l=this,d=new ba(this.url);(h._pendingDfd=
d.execute(g)).addCallbacks(function(a){l._queryVisibleRastersHandler(a,b,c,e,h)},function(a){l._resolve([a],null,e,h,!0)});return h},_queryVisibleRastersHandler:function(a,b,c,e,d){function h(){var a=this.getCustomRasterFields(b),e=this._getDomainFields(a),h=b?b.returnDomainValues:!1,t=b&&b.rasterAttributeTableFieldPrefix,k,y,v,w,u,l,q,r,E,z,a=(a=this._getRenderingRuleId(this.renderingRule))&&this._rasterFunctionTemplateInfos[a];this.renderingRule&&(this._useRenderingRuleAttributeTable||a)?(a=this._getRenderingRuleAttributeTableFeatures({renderingRule:this.renderingRule}),
z=g):a=this._getRasterAttributeTableFeatures();a.then(f.hitch(this,function(a){for(k=0;k<p.length;k++){x=p[k];x.setInfoTemplate(this.infoTemplate);x._layer=this;if(g){E=g.replace(/ /gi,"").split(",");y=g;v=E;n&&n.length>=k&&(y=n[k].replace(/ /gi,", "),v=n[k].split(" "));x.attributes[this._rasterFieldPrefix+"ItemPixelValue"]=v;x.attributes[this._rasterFieldPrefix+"ServicePixelValue"]=E;B&&(x.attributes[this._rasterFieldPrefix+"ServicePixelValue.Raw"]=B.replace(/ /gi,"").split(","));if(this.pixelFilter){var b=
new M({height:1,width:1,pixelType:"F32",pixels:[],statistics:[]});m.forEach(v,function(a){b.addData({pixels:[a],statistics:{minValue:a,maxValue:a,noDataValue:null}})});this.pixelFilter({pixelBlock:b,extent:new K(0,0,0,0,this._map.spatialReference)});if("esriImageServiceDataTypeVector-UV"===this.serviceDataType||"esriImageServiceDataTypeVector-MagDir"===this.serviceDataType)x.attributes[this._rasterFieldPrefix+"Magnitude"]=b.pixels[0][0],x.attributes[this._rasterFieldPrefix+"Direction"]=b.pixels[1][0]}m.forEach(H,
function(a){x.attributes[a.name]=a.value});var A=z||y;if(a&&0<a.length&&(w=m.filter(a,function(a){if(a&&a.attributes)return a.attributes.hasOwnProperty("Value")?a.attributes.Value==A:a.attributes.VALUE==A}),0<w.length&&(u=f.clone(w[0]),t&&u))){r={};for(l in u.attributes)u.attributes.hasOwnProperty(l)&&(q=t+l,r[q]=u.attributes[l]);u.attributes=r;x.attributes=f.mixin(x.attributes,u.attributes)}}h&&e&&0<e.length&&m.forEach(e,function(a){if(a){var b=x.attributes[a.name];F.isDefined(b)&&(b=this._getDomainValue(a.domain,
b),F.isDefined(b)&&(x.attributes[a.name]=b))}},this);C.push(x);this._visibleRasters.push(x)}this._resolve([C,null,!0],null,c,d)}))}var g=a.value,B=a.value,n,p,k=0,y=0,t=this,v=this.objectIdField,w,u,H=[];e=b.requestParams.renderingRules;var E=a.processedValues,q=this.renderingRule&&l.toJson(this._removeVisualizationStretchFunction(this.renderingRule).toJson());if(e&&E&&e.length===E.length){var r=this._rasterFieldPrefix+this._renderingRuleFieldSubPrefix;m.forEach(e,function(a,b){if(a.functionName){var c=
{name:r+a.functionName.replace(/ /gi,"_"),value:E[b].replace(/ /gi,"").split(",")};H.push(c);q&&q===l.toJson(a.toJson())&&(g=E[b])}})}e=this.infoTemplate&&this.infoTemplate.info&&this.infoTemplate.info.layerOptions&&this.infoTemplate.info.layerOptions.hasOwnProperty("showNoDataRecords")?this.infoTemplate.info.layerOptions.showNoDataRecords:!0;if(a.catalogItems){var A=0,z,I,G=a.catalogItems.features.length;u=0;p=Array(G);n=Array(G);w=Array(G);if(a.properties&&a.properties.Values){G=a.properties.Values.length;
for(k=0;k<G;k++)-1<a.properties.Values[k].toLowerCase().indexOf("nodata")&&u++;z=G-u;for(k=0;k<G;k++)u=!0,-1<a.properties.Values[k].toLowerCase().indexOf("nodata")?(I=z++,e||(u=!1,p.length--,n.length--,w.length--)):I=A++,u&&(p[I]=a.catalogItems.features[k],n[I]=a.properties.Values[k],w[I]=p[I].attributes[v])}else{for(k=0;k<G;k++)p[k]=a.catalogItems.features[k],w[k]=p[k].attributes[v];n=null}}this._visibleRasters=[];var x;(a=-1<g.toLowerCase().indexOf("nodata"))&&!e&&(p=[],n=[],w=[]);!g||p||a||(v=
"ObjectId",p=[],x=new aa(new K(this.fullExtent),null,{ObjectId:0}),p.push(x));var C=[];p?!this._map.spatialReference.equals(this.spatialReference)&&w&&0<w.length?D({url:this._url.path+"/query",content:{f:"json",objectIds:w.join(","),returnGeometry:!0,outSR:l.toJson(t._map.spatialReference.toJson()),outFields:v},handleAs:"json",callbackParamName:"callback",load:function(a){if(0===a.features.length)t._resolve([C,null,null],null,c,d);else{for(k=0;k<a.features.length;k++)for(y=0;y<p.length;y++)p[y].attributes[v]==
a.features[k].attributes[v]&&(p[y].geometry=new V(a.features[k].geometry),p[y].geometry.setSpatialReference(t._map.spatialReference));h.call(t)}},error:function(a){t._resolve([C,null,null],null,c,d)}}):h.call(this):this._resolve([C,null,null],null,c,d)},getVisibleRasters:function(){var a=this._visibleRasters,b=[],c;for(c in a)a.hasOwnProperty(c)&&b.push(a[c]);return b},_getDomainFields:function(a){if(a){var b=[];m.forEach(a,function(a){if(a.domain){var c={};c.name=a.name;c.domain=a.domain;b.push(c)}});
return b}},_getDomainValue:function(a,b){if(a&&a.codedValues){var c;m.some(a.codedValues,function(a){return a.code===b?(c=a.name,!0):!1});return c}},_requestData:function(a,b,c){this._rasterReadPromise&&this._rasterReadPromise.cancel();a=f.clone(a);var e=a._normalize(!0);this._prepareGetImageParameters(e,b,c);b=f.clone(this._params);this._cleanupRequestParams(b);b.extent=a;b.format=b.format||(10.3<=this.version?"lerc":"jpgpng");"lerc"===b.format.toLowerCase()&&!b.lercVersion&&10.5<=this.version&&
(b.lercVersion=2);this._params.time&&this._isMultidimensionalCRF()&&delete b.time;c=null;this._useBrowserDecoding()&&(c=new X({ctx:this._context}));b={imageServiceParameters:b,nBands:Math.min(this.bandCount,3),pixelType:this.pixelType,decodeFunc:c?f.hitch(c,"decode"):null};this._rasterReadPromise=this.raster.read(b,this._requestDataHandler,this._requestDataErrorHandler)},_requestDataHandler:function(a){this._rasterReadPromise&&this._rasterReadPromise.isCanceled()||(this.originalPixelData=a,this.hasDataChanged=
!0,this._setPixelData(a))},_setPixelData:function(a){a=this._clonePixelData(a);this.pixelFilter&&this.pixelFilter(a);this.pixelData=a;this._rasterReadPromise&&this._rasterReadPromise.isCanceled()||(this._drawPixelData(),this._rasterReadPromise=null)},_clonePixelData:function(a){if(null===a||void 0===a)return a;var b={};a.extent&&(b.extent=f.clone(a.extent));a=a.pixelBlock;if(null===a||void 0===a)return b;b.pixelBlock=a.clone();return b},_setDefaultFilter:function(){},_getPixelBlockFromCanvas:function(a,
b,c){a=a.getImageData(0,0,b,c).data;for(var e=b*c,d=0,h=0,g=new Uint8Array(e),f=new Uint8Array(e),n=new Uint8Array(e),p=new Uint8Array(e),k=Infinity,m=Infinity,t=Infinity,v=-Infinity,w=-Infinity,u=-Infinity,l,q,r,d=0;d<e;d++)l=a[h++],q=a[h++],r=a[h++],k=k<l?k:l,v=v>l?v:l,m=m<q?m:q,w=w>q?w:q,t=t<r?t:r,u=u>r?u:r,g[d]=l,f[d]=q,n[d]=r,p[d]=a[h++]&1;return new M({width:b,height:c,pixels:[g,f,n],pixelType:"U8",mask:p,statistics:[{minValue:k,maxValue:v},{minValue:m,maxValue:w},{minValue:t,maxValue:u}]})},
_useBrowserDecoding:function(){return(void 0===this.pixelFilter||null===this.pixelFilter)&&("jpeg"===this.format.toLowerCase()||"jpg"===this.format.toLowerCase()||-1<this.format.toLowerCase().indexOf("png"))},getMultidimensionalInfo:function(){var a=this._url.path+"/multiDimensionalInfo",b=new r(q._dfdCanceller);if(this._multidimensionalInfo)return b.resolve(this._multidimensionalInfo),b;10.3<=this.version&&this.hasMultidimensions?(b._pendingDfd=D({url:a,content:{f:"json"},handleAs:"json",callbackParamName:"callback"}),
b._pendingDfd.then(f.hitch(this,function(a){this._multidimensionalInfo=a.multidimensionalInfo;b.callback(a.multidimensionalInfo)}),function(a){b.errback(a)})):(a=Error("Layer does not support multidimensional info"),a.log=!!C.isDebug,b.errback(a));return b},getDefaultMultidimensionalDefinition:function(){var a,b,c,e=[],d=new r(q._dfdCanceller),h;if(this._defaultMultidimensionalDefinition)return d.resolve(f.clone(this._defaultMultidimensionalDefinition)),d;d._pendingDfd=this.getMultidimensionalInfo();
d._pendingDfd.then(f.hitch(this,function(g){a=g;b=a.variables[0].dimensions;for(c in b)b.hasOwnProperty(c)&&"StdTime"!==b[c].name&&(h=b[c],e.push(new O({variableName:"",dimensionName:h.name,isSlice:!h.hasRanges,values:[this._getDefaultDimensionValue(h)]})));this._defaultMultidimensionalDefinition=e;d.callback(f.clone(e))}),function(a){d.errback(a)});return d},_getDefaultDimensionValue:function(a){if(a&&a.values&&a.values.length){var b,c,e=Infinity,d,h;if(a.hasRanges)return a.values[0];if(a.name&&
"stdz"===a.name.toLowerCase()){for(h=0;h<a.values.length&&(d=a.values[h],c=Math.abs(d-0),c<e&&(e=c,b=d),0!==c);h++);return b}return a.extent[0]}},_setDefaultMultidimensionalDefinition:function(a){var b,c={};this.getDefaultMultidimensionalDefinition().then(f.hitch(this,function(e){b=e;0<b.length&&(this.mosaicRule?(c=f.clone(this.mosaicRule),c.multidimensionalDefinition=b):this.defaultMosaicRule?(c=f.clone(this.defaultMosaicRule),c.multidimensionalDefinition=b):c=new z({multidimensionalDefinition:b}),
this.setMosaicRule(c,a))}))},_setDefaultRenderingRule:function(a){var b={},c=this.renderingRule;if(!c&&"esri.layers.ArcGISImageServiceVectorLayer"!==this.declaredClass&&!this.bandIds&&this.rasterFunctionInfos&&this.rasterFunctionInfos.length&&"none"!==this.rasterFunctionInfos[0].name.toLowerCase())b.rasterFunction=this.rasterFunctionInfos[0].name;else if("esri.layers.ArcGISImageServiceVectorLayer"===this.declaredClass&&10.3<this.version&&(!c||"Resample"!==c.functionName)){var e="esriImageServiceDataTypeVector-UV"===
this.serviceDataType?7:10;b.rasterFunction="Resample";b.rasterFunctionArguments={ResamplingType:e,InputCellSize:{x:this.pixelSizeX,y:this.pixelSizeY}};c&&(b.rasterFunctionArguments.Raster=c.toJson())}b.hasOwnProperty("rasterFunction")&&(this.defaultRenderingRule=new A(b),this.setRenderingRule(this.defaultRenderingRule,a))},_cleanupRequestParams:function(a){if(!a)return a;if(a.time&&a.mosaicRule){var b=new z(l.fromJson(a.mosaicRule)),b=this._filterOutTimeDimension(b);a.mosaicRule=l.toJson(b.toJson())}var b=
"displayOnPan drawMode styling id opacity visible resourceInfo useMapDimensionValue extent renderer".split(" "),c;for(c in b)a.hasOwnProperty(b[c])&&delete a[b[c]];return a},_filterOutTimeDimension:function(a){if(this._isMultidimensionalCRF())return a;if(a&&a.multidimensionalDefinition&&0<a.multidimensionalDefinition.length){var b=m.filter(a.multidimensionalDefinition,function(a){return"StdTime"!==a.dimensionName});a.multidimensionalDefinition=b}return a},_removeVisualizationStretchFunction:function(a){var b=
a&&a.functionName;if(!b||"stretch"!==b.toLowerCase())return a;var c=a.functionArguments.Raster;return c&&c.functionName&&m.some(this.rasterFunctionInfos,function(a){return c.functionName===a.name})?c:a},_isMultidimensionalCRF:function(){return 10.71<=this.version&&this.hasMultidimensions&&this.timeInfo&&!(this.objectIdField&&this.fields&&1<this.fields.length)},_isScientificData:function(){return"esriImageServiceDataTypeVector-UV"===this.serviceDataType||"esriImageServiceDataTypeVector-MagDir"===this.serviceDataType||
"esriImageServiceDataTypeScientific"===this.serviceDataType},_isVectorData:function(a){a=(a=a||this)&&a.serviceDataType;return"esriImageServiceDataTypeVector-UV"===a||"esriImageServiceDataTypeVector-MagDir"===a},_isRenderingRuleAProcessingTemplate:function(a){var b=a&&a.functionName;return!b||a.functionArguments?!1:m.some(b&&(this.rasterFunctionInfos||[]),function(a){return a&&a.name&&a.name.toLowerCase()===b.toLowerCase()})},_getRenderingRuleId:function(a){var b=a&&a.functionName;if(b){if(this._isRenderingRuleAProcessingTemplate(a))return b;
var c=this._customRenderingRuleId[b];if(c){if(c!==a){for(var e in this._customRenderingRuleId)if(this._customRenderingRuleId[e]===a)return e;for(c=0;this._customRenderingRuleId[d];)c+=1;var d;this._customRenderingRuleId[b+c]=a}}else this._customRenderingRuleId[b]=a;return b}},_createPixelData:function(a){a=new M({width:2,height:2,pixels:a,pixelType:this.pixelType,statistics:a});var b=this.fullExtent.getCenter(),b=new K(b.x,b.y,b.x+this.pixelSizeX,b.y+this.pixelSizeY,this.spatialReference);return{pixelBlock:a,
extent:b}},_convertRendererToRenderingRule:function(a){var b=a&&a.declaredClass;if(!b||"esri.renderer.UniqueValueRenderer"!==b&&"esri.renderer.ClassBreaksRenderer"!==b&&"esri.renderer.StretchRenderer"!==b)return null;var c=null;"esri.renderer.StretchRenderer"===b?c=a.toRenderingRule({convertToColormap:10.6>this.version}):"esri.renderer.ClassBreaksRenderer"===b?c=this._convertClassifyRenderer(a):"esri.renderer.UniqueValueRenderer"===b&&(c=this._convertUniqueValueRenderer(a));return c},_getValueField:function(a){if(a&&
a.length){var b,c;m.some(a,function(a){if((c=a.name)&&"value"===c.toLowerCase())return b=c,!0});return b}},_convertClassifyRenderer:function(a){var b,c=[],e=[],d=[],h=[],g;b=this.renderingRule&&this._getRenderingRuleId(this.renderingRule);var f,n,p=this.hasRasterAttributeTable,k,l;b&&(p=this._rasterFunctionTemplateInfos[b]?this._rasterFunctionTemplateInfos[b].hasRasterAttributeTable:this.hasRasterAttributeTable,n=this._renderingRuleAttributeTable[b],l=this._rasterFunctionTemplateInfos[b]);f=n&&n.features?
n.features:this._rasterAttributeTableFeatures;k=this._getValueField(n&&n.fields?n.fields:this._rasterAttributeTableFields);p&&f?(m.forEach(a.infos,function(b,c){var e,d=b.symbol.color;d.a&&m.forEach(f,function(g){e=g.attributes[a.attributeField];(e>=b.minValue&&e<b.maxValue||c===a.infos.length-1&&e>=b.minValue)&&h.push([g.attributes[k],d.r,d.g,d.b])},this)},this),b=l&&l.pixelType||this.pixelType,this._adjustColormapToPixelTypeRange(h,b),b=new A,b.functionName="Colormap",b.functionArguments={},b.functionArguments.Colormap=
h,b.variableName="Raster"):(m.forEach(a.infos,function(a,b){g=a.symbol&&a.symbol.color;g.a?(0===b?c.push.call(c,a.minValue,a.maxValue+1E-4):c.push.call(c,a.minValue+1E-4,a.maxValue+1E-4),e.push(b),h.push([b,g.r,g.g,g.b])):d.push(a.minValue,a.maxValue)}),b=l&&l.pixelType||this.pixelType,this._adjustColormapToPixelTypeRange(h,b),b=new A,b.functionName="Remap",b.functionArguments={InputRanges:c,OutputValues:e,NoDataRanges:d},b.variableName="Raster",n=new A,n.functionName="Colormap",n.functionArguments=
{Colormap:h,Raster:b},b=n);return b},_convertUniqueValueRenderer:function(a){var b=[],c=this.renderingRule&&this._getRenderingRuleId(this.renderingRule),e,d,f,g;c&&(d=this._renderingRuleAttributeTable[c],g=this._rasterFunctionTemplateInfos[c]);e=d&&d.features?d.features:this._rasterAttributeTableFeatures;f=(c=d&&d.fields?d.fields:this._rasterAttributeTableFields)&&c.length?this._getValueField(c):"Value";m.forEach(a.infos,function(c){var d=c.symbol.color;d.a&&(a.attributeField!==f&&e?m.forEach(e,function(e){e.attributes[a.attributeField]==
c.value&&b.push([e.attributes[f],d.r,d.g,d.b])},this):b.push([c.value,d.r,d.g,d.b]))},this);this._adjustColormapToPixelTypeRange(b,g&&g.pixelType||this.pixelType);g=new A;g.functionName="Colormap";g.functionArguments={};g.functionArguments.Colormap=b;g.variableName="Raster";return g},_adjustColormapToPixelTypeRange:function(a,b){(b=this._pixelTypeRanges[b])&&a.push([Math.floor(b[0]-1),0,0,0],[Math.ceil(b[1]+1),0,0,0]);return a},_combineRenderingRule:function(a,b){if(!a||!b)return a||b;var c=function(a){var b=
a.Raster;return b=b&&"esri.layers.RasterFunction"===b.declaredClass?c(b.functionArguments):a};a=f.clone(a);"none"!==b.functionName.toLocaleLowerCase()&&(c(a.functionArguments).Raster=b);return a},_isItemLevelRasterFunction:function(a){var b=a&&a.functionName;if(!b||!this._hasItemLevelRFT)return!1;var c=!1;m.some(this.rasterFunctionInfos,function(a){if(a&&a.name===b){if(1===a.functionType||2===a.functionType)c=!0;return!0}});return c},_getServiceLevelRenderingRule:function(a){if(!this._hasItemLevelRFT||
!a)return a;a=new A(a.toJson());var b;b=a.functionArguments;for(var c;;)if((c=b&&b.Raster)&&c.functionArguments&&c.functionArguments.Raster)b=c,b=b.functionArguments;else{this._isItemLevelRasterFunction(c)&&delete b.Raster;break}return a},_getItemLevelRenderingRule:function(a){if(!this._hasItemLevelRFT||!a)return null;if(this._isItemLevelRasterFunction(a))return a;a=new A(a.toJson());for(a=a.functionArguments;;)if((a=a&&a.Raster)&&a.functionArguments&&a.functionArguments.Raster)a=a.functionArguments;
else{if(this._isItemLevelRasterFunction(a))return a;break}},_resolve:function(a,b,c,e,d){b&&this[b].apply(this,a);c&&c.apply(null,a);e&&q._resDfd(e,a,d)},_toggleTime:function(){var a=this._map;this.timeInfo&&this.useMapTime&&a&&!this.suspended?(this._timeConnect||(this._timeConnect=N.connect(a,"onTimeExtentChange",this,this._onTimeExtentChangeHandler)),this._setTime(a.timeExtent)):(N.disconnect(this._timeConnect),this._timeConnect=null,this._setTime(null))},setUseMapTime:function(a,b){this.useMapTime=
a;this._toggleTime();!b&&this._map&&this.refresh(!0)},_setTime:function(a){this._params&&(this._params.time=a?a.toJson().join(","):null)},_onTimeExtentChangeHandler:function(a){this.suspended||(this._setTime(a),this.refresh(!0))},handleSpatialReferenceChange:function(){this.onSpatialReferenceChange()}});Q("extend-esri")&&f.setObject("layers.ImageServiceLayerMixin",J,S);return J});
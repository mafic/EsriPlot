// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/layers/OnDemandMode","dojo/_base/declare dojo/_base/connect dojo/_base/lang dojo/_base/array dojo/has ../kernel ../geometry/Point ../tasks/query ./RenderMode ./GridLayout".split(" "),function(n,l,q,p,t,u,x,r,v,w){n=n([v],{declaredClass:"esri.layers._OnDemandMode",constructor:function(a){this.featureLayer=a;this._featureMap={}},initialize:function(a){this.inherited(arguments);this._cellMap={};this._gridLayer=w.createFromFeatureLayer({layer:this.featureLayer,map:a})},startup:function(){if(!this._started||
this._isSuspendedAtStartup)this.inherited(arguments),this._ioQueue=[],this._isSuspendedAtStartup=this.featureLayer.suspended,this.featureLayer.suspended||(this._zoomHandler(),this._enableConnectors())},propertyChangeHandler:function(a){this._init&&(2>a?this._zoomHandler():console.log("FeatureLayer: layer in on-demand mode does not support time definitions. Layer id \x3d "+this.featureLayer.id+", Layer URL \x3d "+this.featureLayer.url))},destroy:function(){this._disableConnectors();this._processIOQueue(!0);
this.inherited(arguments)},drawFeature:function(a){var b=a.geometry,c=[];if(b){var c=this._gridLayer.getCellsInExtent("point"===b.type?{xmin:b.x,ymin:b.y,xmax:b.x,ymax:b.y}:b.getExtent(),!1).cells,b=this._cellMap,d,e,g=a.attributes[this.featureLayer.objectIdField],f,k,h;for(d=0;d<c.length;d++)e=c[d],f=e.latticeID,k=e.row,h=e.col,f?e=b[f]=b[f]||e:(b[k]=b[k]||{},e=b[k][h]=b[k][h]||e),e.features=e.features||[],e.features.push(a),this._addFeatureIIf(g,a),this._incRefCount(g)}},suspend:function(){this._init&&
this._disableConnectors()},resume:function(){this._init&&(this._enableConnectors(),this._zoomHandler())},refresh:function(){this._zoomHandler()},hasAllFeatures:function(){var a=!1,b=this._getCurrentCells(),c;for(c=0;c<b.length;c++)if(b[c].hasPartialFeatures){a=!0;break}return!a},hasUpdateError:function(){var a=!1,b=this._getCurrentCells(),c;for(c=0;c<b.length;c++)if(b[c].hasUpdateError){a=!0;break}return a},canFetchPBF:function(a){return this.inherited(arguments)&&this.featureLayer._canFetchPBFForQuery(a)},
_enableConnectors:function(){var a=this.map;this._zoomConnect=l.connect(a,"onZoomEnd",this,this._zoomHandler);this._panConnect=l.connect(a,"onPanEnd",this,this._panHandler);this._resizeConnect=l.connect(a,"onResize",this,this._panHandler)},_disableConnectors:function(){l.disconnect(this._zoomConnect);l.disconnect(this._panConnect);l.disconnect(this._resizeConnect)},_zoomHandler:function(){this._processIOQueue(!0);var a=this.featureLayer,b=this.map;!a.suspended&&a.isQueryable()&&(a._fireUpdateStart(),
this._clearIIf(),(a=a._trackManager)&&a.clearTracks(),this._cellMap={},this._gridLayer.setResolution(b.extent),this._sendRequest())},_panHandler:function(a){if(this.featureLayer.isQueryable()){this.featureLayer._fireUpdateStart();var b=this.featureLayer._resized;a=b?a:null;b&&this._gridLayer.setMapState(a,this.map.width,this.map.height);this._sendRequest(a)}},_sendRequest:function(a){this._exceeds=!1;var b=this.featureLayer,c=this.map;a=a||c.extent;c=this._gridLayer.getCellsInExtent(a,b.latticeTiling).cells;
if(!b.isEditable())var d=this._cellMap,c=p.filter(c,function(a){if(a.lattice){if(d[a.latticeID])return!1}else if(d[a.row]&&d[a.row][a.col])return!1;return!0});this._pending=this._pending||0;var e;for(e=0;e<c.length;e++){var g=c[e],f=this._createQueryInfo(g);this._pending++;this._ioQueue.push(b._task.execute(f.query,q.hitch(this,this._drawFeatures,g),q.hitch(this,this._queryErrorHandler,g),f.pbf?{format:"pbf"}:null))}this._removeOldCells(a);this._endCheck()},_drawFeatures:function(a,b){this.featureLayer._isImageService&&
10.7>this.featureLayer.version&&void 0===b.exceededTransferLimit&&(b.exceededTransferLimit=b.features.length===this.featureLayer.maxRecordCount);a.hasPartialFeatures=!!b.exceededTransferLimit;a.hasUpdateError=!1;this._exceeds=this._exceeds||b.exceededTransferLimit;this._finalizeIO();var c=this.featureLayer,d=this.map.extent,e=a.extent,g=a.row,f=a.col,k=c.objectIdField;b=b.features;var h=this._gridLayer,m=this._cellMap,l=a.latticeID,m=l?m[l]:m[g]&&m[g][f];if(a.resolution==h.resolution&&(l?l===h.getLatticeID(d):
h.intersects(e,d)))if(m)c._sortFeatures(b),this._updateCell(m,b);else for(c._sortFeatures(b),a.features=b,this._addCellToCellMap(a),c=b.length,a=0;a<c;a++)d=b[a],e=d.attributes[k],this._addFeatureIIf(e,d),this._incRefCount(e);else m&&this._removeCell(g,f,l);this._endCheck()},_queryErrorHandler:function(a,b){this._finalizeIO();a.hasPartialFeatures=!0;a.hasUpdateError=!0;this._addCellToCellMap(a);this.featureLayer._errorHandler(b);this._endCheck(b)},_finalizeIO:function(){this._pending--},_endCheck:function(a){if(0===
this._pending){this._processIOQueue();var b=this.featureLayer,c=b._trackManager;c&&(c.clearTracks(),c.addFeatures(b.graphics),b._ager&&p.forEach(b.graphics,function(a){a._shape&&b._repaint(a)}),c.moveLatestToFront(),c.drawTracks());this.featureLayer._fireUpdateEnd(!!a&&Error("FeatureLayer: "+(a.message||"an error occurred while updating the layer.")),this._exceeds?{queryLimitExceeded:!0}:null);if(this._exceeds)b.onQueryLimitExceeded()}},_processIOQueue:function(a){this._ioQueue=p.filter(this._ioQueue,
function(a){return-1<a.fired?!1:!0});a&&p.forEach(this._ioQueue,this._cancelPendingRequest)},_createQueryInfo:function(a){var b=this.featureLayer,c=new r;c.outFields=b.getOutFields();c.where=b.getDefinitionExpression();c.returnGeometry=!0;c.geometry=a.extent||a.lattice;b.latticeTiling&&a.extent&&(c.spatialRelationship=r.SPATIAL_REL_CONTAINS);c.timeExtent=b._getOffsettedTE(b._mapTimeExtent);c.maxAllowableOffset=b._maxOffset;c.quantizationParameters=b._quantizationParameters;c.orderByFields=b.supportsAdvancedQueries?
b.getOrderByFields():null;c.multipatchOption=b.multipatchOption;b._ts&&(c._ts=(new Date).getTime());(a=b.advancedQueryCapabilities)&&a.supportsQueryWithResultType&&(c.resultType="tile");a=this.canFetchPBF(c);b._enableEditModeQuantization(c,a);return{query:c,pbf:a}},_getCurrentCells:function(a){var b=[];a=a||this._cellMap;for(var c in a)if(a.hasOwnProperty(c)){var d=a[c];d&&(d.hasOwnProperty("row")||d.hasOwnProperty("latticeID")?b.push(d):"object"===typeof d&&b.push.apply(b,this._getCurrentCells(d)))}return b},
_addCellToCellMap:function(a){var b=this._cellMap;if(a.latticeID)b[a.latticeID]=a;else{var c=a.row,d=a.col;b[c]=b[c]||{};b[c][d]=a}},_removeOldCells:function(a){var b=this._cellMap,c=this._gridLayer,d,e;for(d in b)if(b[d]){var g=b[d],f=g.latticeID,k=0,h=0;if(f)k++,f!==c.getLatticeID(a)&&(this._removeCell(null,null,f),h++);else for(e in g)g[e]&&(k++,c.intersects(g[e].extent,a)||(this._removeCell(d,e),h++));h===k&&delete b[d]}},_updateCell:function(a,b){var c=this.featureLayer,d=c.objectIdField,c=c._selectedFeatures,
e,g=b.length;a.features=a.features||[];for(e=0;e<g;e++){var f=b[e],k=f.attributes[d],h=this._addFeatureIIf(k,f);h===f?(this._incRefCount(k),a.features.push(h)):k in c||(h.setGeometry(f.geometry),h.setAttributes(f.attributes))}},_removeCell:function(a,b,c){var d=this._cellMap,e=this.featureLayer,g=e.objectIdField,f=c?d[c]:d[a]&&d[a][b];if(f&&(c?delete d[c]:delete d[a][b],a=f.features))for(b=0;b<a.length;b++)c=a[b].attributes[g],this._decRefCount(c),c in e._selectedFeatures||this._removeFeatureIIf(c)}});
t("extend-esri")&&q.setObject("layers._OnDemandMode",n,u);return n});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
var __extends=this&&this.__extends||function(){var l=function(c,d){l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,g){d.__proto__=g}||function(d,g){for(var c in g)g.hasOwnProperty(c)&&(d[c]=g[c])};return l(c,d)};return function(c,d){function k(){this.constructor=c}l(c,d);c.prototype=null===d?Object.create(d):(k.prototype=d.prototype,new k)}}();
define("esri/arcade/featureset/actions/OrderBy","require exports ../../languageUtils ../support/FeatureSet ../support/IdSet ../support/OrderbyClause ../../polyfill/promiseUtils".split(" "),function(l,c,d,k,g,p,m){var n=function(c){function e(a){var b=c.call(this,a)||this;b._orderbyclause=null;b.declaredClass="esri.arcade.featureset.actions.OrderBy";b._maxProcessing=100;b._orderbyclause=a.orderbyclause;b._parent=a.parentfeatureset;return b}__extends(e,c);e.prototype._getSet=function(a){var b=this;
return null===this._wset?this._ensureLoaded().then(function(){return b._getFilteredSet("",null,null,b._orderbyclause,a)}).then(function(h){b._checkCancelled(a);b._wset=h;return b._wset}):m.resolve(this._wset)};e.prototype.manualOrderSet=function(a,b){var h=this;return this.getIdColumnDictionary(a,[],-1,b).then(function(a){h._orderbyclause.order(a);for(var b=new g([],[],!0,null),f=0;f<a.length;f++)b._known.push(a[f].id);return b})};e.prototype.getIdColumnDictionary=function(a,b,h,c){var e=this;if(h<
a._known.length-1){var f=this._maxQueryRate();if("GETPAGES"===a._known[h+1])return d.tick(this._parent._expandPagedSet(a,f,0,0,c)).then(function(f){return e.getIdColumnDictionary(a,b,h,c)});for(var f=h+1,g=[];f<a._known.length&&"GETPAGES"!==a._known[f];)g.push(a._known[f]),f++;h+=g.length;return d.tick(this._parent._getFeatureBatch(g,c)).then(function(f){e._checkCancelled(c);for(var d=0;d<f.length;d++){var g=f[d];b.push({id:g.attributes[e.objectIdField],feature:g})}return e.getIdColumnDictionary(a,
b,h,c)})}return 0<a._candidates.length?d.tick(this._refineSetBlock(a,this._maxProcessingRate(),c)).then(function(){e._checkCancelled(c);return e.getIdColumnDictionary(a,b,h,c)}):m.resolve(b)};e.prototype._isInFeatureSet=function(a){return this._parent._isInFeatureSet(a)};e.prototype._getFeatures=function(a,b,c,d){return this._parent._getFeatures(a,b,c,d)};e.prototype._featureFromCache=function(a){if(void 0===this._featureCache[a]){var b=this._parent._featureFromCache(a);return void 0===b?void 0:null===
b?null:this._featureCache[a]=b}return this._featureCache[a]};e.prototype._fetchAndRefineFeatures=function(a,b,c){return m.reject(Error("Fetch and Refine should not be called in this featureset"))};e.prototype._getFilteredSet=function(a,b,c,d,e){var f=this;return this._ensureLoaded().then(function(){return f._parent._getFilteredSet(a,b,c,null===d?f._orderbyclause:d,e)}).then(function(a){f._checkCancelled(e);var d;d=new g(a._candidates.slice(0),a._known.slice(0),a._ordered,f._clonePageDefinition(a.pagesDefinition));
var h=!0;0<a._candidates.length&&(h=!1);return!1===d._ordered?f.manualOrderSet(d,e).then(function(a){!1!==h||null===b&&null===c||(a=new g(a._candidates.slice(0).concat(a._known.slice(0)),[],a._ordered,f._clonePageDefinition(a.pagesDefinition)));return a}):d})};return e}(k);k._featuresetFunctions.orderBy=function(c){return""===c?this:new n({parentfeatureset:this,orderbyclause:new p(c)})};return n});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/arcade/featureset/support/OrderbyClause",["require","exports"],function(k,l){return function(){function e(b){b=b.split(",");this._fields=[];this._directions=[];for(var a=0;a<b.length;a++){var c=b[a].match(/\S+/g);this._fields.push(c[0]);2===c.length?"asc"===c[1].toLowerCase()?this._directions.push(1):this._directions.push(0):this._directions.push(1)}}e.prototype.constructClause=function(){for(var b="",a=0;a<this._fields.length;a++)0!==a&&(b+=","),b+=this._fields[a],b=1===this._directions[a]?
b+" ASC":b+" DESC";return b};e.prototype.order=function(b){var a=this;b.sort(function(b,g){for(var d=0;d<a._fields.length;d++){var c=a.featureValue(b.feature,a._fields[d],d),f=a.featureValue(g.feature,a._fields[d],d),e=0,e=1===a._directions[d]?c===f?0:null===c?-1:null===f?1:c<f?-1:1:-1*(c===f?0:null===c?-1:null===f?1:c<f?-1:1);if(0!==e)return e}return 0})};e.prototype.scanForField=function(b){for(var a=0;a<this._fields.length;a++)if(this._fields[a].toLowerCase().trim()===b.toLowerCase().trim())return!0;
return!1};e.prototype.replaceFields=function(b){for(var a="",c=0;c<this._fields.length;c++){0!==c&&(a+=",");for(var g=this._fields[c],d=0,h=b;d<h.length;d++){var f=h[d];if(g.toLowerCase()===f.field.toLowerCase()){g=f.newfield;break}}a+=g;a=1===this._directions[c]?a+" ASC":a+" DESC"}return new e(a)};e.prototype.featureValue=function(b,a,c){var e=b.attributes[a];if(void 0!==e)return e;for(var d in b.attributes)if(a.toLowerCase()===d.toLowerCase())return this._fields[c]=d,b.attributes[d];return null};
return e}()});
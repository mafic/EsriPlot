// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/core/accessorSupport/extensions/serializableProperty/writer",["require","exports","../../../object","./type"],function(r,k,h,m){function n(a,b,d,c){h.setDeepValue(d,g(a,c),b)}function g(a,b){return a&&"function"===typeof a.write?a.write({},b):a&&"function"===typeof a.toJSON?a.toJSON():"number"===typeof a?-Infinity===a?-Number.MAX_VALUE:Infinity===a?Number.MAX_VALUE:isNaN(a)?null:a:a}function p(a,b,d,c){null===a?a=null:a&&"function"===typeof a.map?(a=a.map(function(a){return g(a,
c)}),"function"===typeof a.toArray&&(a=a.toArray())):a=[g(a,c)];h.setDeepValue(d,a,b)}function l(a,b,d){return 0!==d&&Array.isArray(a)?a.map(function(a){return l(a,b,d-1)}):g(a,b)}function q(a){return function(b,d,c,f){if(null===b)b=null;else{b=l(b,f,a);f=a;for(var e=b;0<f&&Array.isArray(e);)f--,e=e[0];if(void 0!==e)for(e=0;e<f;e++)b=[b]}h.setDeepValue(c,b,d)}}Object.defineProperty(k,"__esModule",{value:!0});k.create=function(a,b,d,c){c.write&&!c.write.writer&&!1!==c.write.enabled&&(1===b||m.isCollection(a)?
c.write.writer=p:c.write.writer=1<b?q(b):n)}});
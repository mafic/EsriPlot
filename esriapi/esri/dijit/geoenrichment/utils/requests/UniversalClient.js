// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/requests/UniversalClient","dojo/_base/declare dojo/_base/lang esri/dijit/geoenrichment/Deferred dojo/request/xhr dojo/io-query dojo/sniff esri/dijit/geoenrichment/when esri/kernel esri/config esri/lang esri/urlUtils ../UrlUtil ./BinaryData ./FileContent ./MultipartDataBuilder ./ErrorUtil".split(" "),function(w,l,m,x,y,z,A,n,u,B,p,r,C,D,E,t){function F(a,b){if(b)this.reject(b);else{b=a.xhr;var c=b.getResponseHeader&&b.getResponseHeader("Content-Type");a.status=
b.status;a.data=new C(b.response||b.responseBody||b.responseText,c);this.resolve(a)}}var G=0,H=z("safari"),f=w(null,{constructor:function(a){"string"===typeof a?this.url=a:"object"===typeof a&&l.mixin(this,a)},url:null,preventCache:null,usePost:!1,timeout:0,multipartThreshold:0,useCommonAuth:!1,useProxy:!1,allowSSL:null,send:function(a,b){return this.sendUrlRequest(this.prepareUrlRequest(a,b),"UniversalClient.send")},prepareUrlRequest:function(a,b){"string"===typeof a?a={urlSuffix:a}:a||(a={});b||
(b={});var c=a.url||this.url;a=a.urlSuffix;c||(c=a,a=null);if(!c)throw Error("URL is missing.");var d=p.urlToObject(c),c=r.combine(d.path,a);a=d.query||{};"object"===typeof b.content&&(a=l.mixin(a,b.content));d=b.requireSSL;!0!==d&&!1===this.allowSSL&&(d=!1);!1!==d&&!0===this.allowSSL&&/^https/i.test(window.location.protocol)&&(d=!0);if(n.id){var e=n.id.findCredential(c);!e&&this.useCommonAuth&&(e="string"==typeof this.useCommonAuth?n.id.findCredential(this.useCommonAuth):n.id.credentials[0]);e&&
(a.token||!1===a.token||(a.token=e.token),e.ssl&&!1!==d&&(d=!0))}!0===d&&(c=r.toHttpsUrl(c));!1===a.token&&delete a.token;var h=b.handleAs||"json";"json"===h&&(a.f="json");var e=(b.sendAs||(b.usePost||this.usePost||a.token?"post":"get")).toLowerCase(),d="multipart"==e?!0:b.sendAs||b.sizeLimit?!1:null,v=0,g;for(g in a){var f=a[g];f instanceof D?d=!0:("object"==typeof f&&(f=a[g]=JSON.stringify(f)),!d&&0<this.multipartThreshold&&(v+=g.length+(f?f.length:0)+2))}!1!==d&&0<this.multipartThreshold&&v>this.multipartThreshold&&
(d=!0);if(b.useProxy||!p.hasSameOrigin(c,window.location.href)&&this.useProxy&&!b.hasOwnProperty("useProxy")){var k=r.getProxyUrl();k&&(c=k+"?"+c)}else p.getProxyRule(c)&&(c=p.getProxyRule(c).proxyUrl+"?"+c);g=(g=b.hasOwnProperty("preventCache")?b.preventCache:this.preventCache)||null===g&&k||H?"_ts\x3d"+(new Date).getTime()+G++:"";k={handleAs:h};if(h=Number(B.isDefined(b.timeout)?b.timeout:this.timeout))k.timeout=h;h="get"!=e||d;e=d?null:y.objectToQuery(a);h||(h=e.length+c.length+g.length+1>=u.defaults.io.postLength);
k.method=h?"POST":"GET";k.headers={"X-Requested-With":null};k.headers["Content-Type"]="undefined"!=typeof b.contentType?b.contentType:"application/x-www-form-urlencoded; charset\x3dutf-8";d?(d=new E,d.addVariables(a),d.build(k)):h?k.data=e:e&&(c+="?"+e,g&&(c+="\x26"+g),g=null);!e&&g&&(c+="?"+g);return{url:c,options:k,sizeLimit:b.sizeLimit}},sendUrlRequest:function(a,b){var c="string"===typeof a.options.data?a.options.data.length:null;if(a.sizeLimit&&c&&("function"===typeof a.sizeLimit?a.sizeLimit(c):
c>a.sizeLimit))return(new m).reject(Error("SIZE_LIMIT_EXCEEDED"));b=b||"UniversalClient.sendUrlRequest";var d=a.deferred||new m;if(c="bin"==a.options.handleAs)a.options.handleAs="blob";var e=x(a.url,a.options,!0);c&&(e.handleResponse=F);var h=this;e.then(function(c){c="json"===a.options.handleAs&&c&&t.parseError(c)||c;if(c instanceof Error){var e;!0===h.useCommonAuth&&498===c.code&&(e=f.handleInvalidTokenError(c));A(e)["finally"](function(){d.reject(c)})}else d.resolve(h._makeResponse(b,c))},function(a){d.reject(t.makeError(a))});
return d.promise},requestToUrl:function(a){if(a.options.headers&&a.options.headers["Content-Type"]&&0==a.options.headers["Content-Type"].indexOf("multipart/form-data"))return null;var b=a.url;if(a=a.options.data){if(b.length+a.length>=u.defaults.io.postLength)return null;b+="?"+a}return b},_makeResponse:function(a,b){return b}});f.makeError=t.makeError;f.handleInvalidTokenError=function(a){};var q=new f({useCommonAuth:!0,allowSSL:!0});f.request=function(a,b){return q.send(a,b).otherwise(function(c){var d=
b&&b.content&&b.content.token;if(498!==c.code||null!=d)return(new m).reject(c);b=l.mixin({},b);b.content=l.mixin({},b.content);b.content.token=!1;return q.send(a,b)})};f.requestPublicFirst=function(a,b){var c=l.mixin({},b);c.content=l.mixin({},b.content);c.content.token=!1;return q.send(a,c).otherwise(function(c){return 499===c.code?q.send(a,b):(new m).reject(c)})};return f});
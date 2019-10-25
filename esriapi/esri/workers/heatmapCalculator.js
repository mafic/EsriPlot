// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
(function(f,w){"function"===typeof define&&define.amd?define("esri/workers/heatmapCalculator",[],w):f.HeatmapCalculator=w();if(f.importScripts&&"function"===typeof f.importScripts){var v;f.addEventListener("message",function(r){var a=r.data,d=a.action;r=a.msgId;d&&r&&("initialize"==d?(v=new f.HeatmapCalculator(a),postMessage({msgId:r})):"calculate"==d&&(a=v.calculateImageData(a),postMessage({msgId:r,imageData:a},a)))},!1)}})(this,function(){function f(a){a=a||{};this.radius=a.blurRadius||10;this.maxVal=
a.maxPixelIntensity;this.minVal=a.minPixelIntensity;this.field=a.field;this.fieldOffset=a.fieldOffset;this.width=a.width;this.height=a.height;this.gradient=a.gradient;this.stats=null}function w(a,d){for(var k=Array(a),b=0;b<a;b++)for(var c=k[b]=Array(d),e=0;e<d;e++)c[e]=0;return k}function v(a,d){return a-d}var r=window.ArrayBuffer?!0:!1;f.prototype.calculateImageData=function(a){var d=this.radius=a.blurRadius||this.blurRadius;this.maxVal=null!=a.maxPixelIntensity?a.maxPixelIntensity:this.maxPixelIntensity;
this.minVal=null!=a.minPixelIntensity?a.minPixelIntensity:this.minPixelIntensity;var k=this.field="field"in a?a.field:this.field,b=this.fieldOffset="fieldOffset"in a?a.fieldOffset:this.fieldOffset,c=a.screenPoints,e=a.gradient;if(e)this.gradient=e;else if(this.gradient)e=this.gradient;else return!1;var h=a.features,g=a.mapinfo;c||(h&&g?c=this.screenPoints=this._calculateScreenPoints(h,g):!g&&this.screenPoints&&(h=!0,a.width&&a.width!=this.width&&(h=!1,this.width=a.width),a.height&&a.height!=this.height&&
(h=!1,this.height=a.height),h?c=this.screenPoints:this.screenPoints=null));if(!c)return!1;h=g.width||a.width||this.width;a=g.height||a.height||this.height;d=this._calculateIntensityMatrix(c,h,a,d,k,b);this._lastMatrix=d.matrix;this._maxIntVal=d.max;return this._createImageData(h,a,this._lastMatrix,e)};f.prototype._calculateScreenPoints=function(a,d){var k=d.resolution,b=d.width,c=d.height;d=d.extent;var e=[];if(d)k||(k=c?Math.abs(d[3]-d[1])/c:Math.abs(d[2]-d[0])/b);else return!1;b=0;for(c=a.length;b<
c;b++){var h=a[b];e[b]={x:Math.round((h.geometry.x-d[0])/k),y:Math.round((d[3]-h.geometry.y)/k),attributes:h.attributes}}return e};f.prototype._calculateIntensityMatrix=function(a,d,k,b,c,e){var h=w(k,d),g=Math.round(4.5*b),l=b*b,q=[],m=2*g+1,n=-1,p=1,f=-Infinity,u;e=e||0;for(c=function(a){return"function"==typeof a?a:a?"abs"==e?function(b){return-1*+b.attributes[a]}:function(b){return+b.attributes[a]+e}:function(){return 1}}(c);++n<m;)q[n]=Math.exp(-Math.pow(n-g,2)/(2*l))/Math.sqrt(2*Math.PI)*(b/
2);for(n=0;n<a.length;n++){u=a[n];b=u.x-g;var l=u.y-g,m=b,r=l,p=+c(u);if(!isNaN(p)&&null!==p)for(var v=Math.min(u.y+g,k-1),x=Math.min(u.x+g,d-1);l<=v;){for(var y=q[l-r];b<=x;)-1<b&&-1<l&&(u=h[l][b]+=y*q[b-m]*p,u>f&&(f=u)),b++;l++;b=m}}return{matrix:h,max:f}};f.prototype._createImageData=function(a,d,k,b){if(!r)return this._createPixelData(a,d,k,b);var c=new Uint32Array(a*d);b=b.buffer?new Uint32Array(b.buffer):new Uint32Array((new Uint8Array(b)).buffer);for(var e=this.minVal,h=b.length/(this.maxVal-
e),g=0;g<d;g++)for(var l=k[g],f=0;f<a;f++){var m=Math.floor((l[f]-e)*h);c[g*a+f]=0>m?b[0]:m<b.length?b[m]:b[b.length-1]}return c};f.prototype._createPixelData=function(a,d,k,b){for(var c=Array(a*d*4),e=this.minVal,h=b.length/4/(this.maxVal-e),g=3,l=0;l<d;l++)for(var f=k[l],m=0;m<a;m++){var n=4*(l*a+m)+3,p=4*Math.floor((f[m]-e)*h)+3;3>p?p=3:p>b.length-1&&(p=b.length-1);for(g=4;g--;)c[n-g]=b[p-g]}return c};f.calculateStats=function(a,d){if(!a)return!1;for(var k=a.length,b=0,c=0,e=0,h=0,g=Infinity,f=
-Infinity,q,m,n,p,t;k--;)for(n=a[k],q=n.length;q--;)if(t=n[q],!d||d(t))p||(p=t),m=t-p,h+=t,b+=m,c+=m*m,t<g&&(g=t),t>f&&(f=t),e++;return 0<e?{mean:h/e,stdDev:Math.sqrt((c-b*b/e)/e),min:g,max:f,mid:(f-g)/2}:{mean:0,stdDev:0,min:0,max:0,mid:0}};f.getBinnedValues=function(a){function d(){console.log("not enough information to determine bins for HeatmapCalculator.getBinnedValues")}function f(a,b,c){for(var d=[];a<b;a+=c)d.push(a);return d}a=a||{};var b=a.stats,c=a.min,e=a.max,h=a.bins,g=a.count,l=a.size;
a=a.values;if(!a)return console.log("values are required for HeatmapCalculator.getBinnedValues function"),!1;b&&null!=b.max&&null!=b.min&&(c=b.min,e=b.max);if(!h)if(l){null==c&&(c=0);if(null==e){if(null==g)return d(),!1;e=c+g*l}h=f(c,e,l)}else if(g){b&&null!=b.min&&null!=b.max?(c=b.min,e=b.max):null!=e&&0<e&&null==c&&(c=0);if(null==c||null==e)return d(),!1;h=f(c,e,(e-c)/g)}for(var g=h.length,b=w(g,0),c=a.length,q,m,n;c--;)for(l=a[c],e=l.length;e--;){q=l[e];for(n=1;n<g&&!(m=h[n],q<m);n++);b[n-1].push(q)}return b.map(function(a){return a.sort(v)})};
f.getHistogramData=function(a){a=a||{};var d=a.binnedData,k=a.stats,b=a.byStdDev,c=a.matrix;a=a.binOptions||{};if(!d)if(c){if(a.values=c,b&&(k||(k=f.calculateStats(c)),a.size=k.stdDev),a.stats=k,d=f.getBinnedValues(a),!d)return!1}else return console.log("no data provided to HeatmapCalculator.getHistogramData"),!1;var e;if(a.bins)a=a.bins;else for(a=[],b=0;b<d.length;b++)c=d[b],a.push(c[0]);e=[];for(b=0;b<a.length-1;b++)c=a[b],e[b]={range:[c,a[b+1]],count:c.length};k?d=k.max:(c=d[b],d=c[c.length-1]);
c=a[b];e[b]={range:[c,d],count:c.length};return e};return f});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/animation/Animator",["esri/dijit/geoenrichment/Deferred","dojo/fx/easing","dojox/gfx/matrix"],function(l,m,n){function g(a){1>a.progress&&!a.isStopped?p.setTimeout(function(){if(a.isStopped)a.endFunction();else{var b=(new Date).getTime();a.progress=1-(a.endTime-b)/a.duration;a.progress=Math.min(1,a.progress);h(a);g(a)}}):a.endFunction()}function h(a){for(var b in a.params.properties){var c=a.params.properties[b],e=c.easing?"function"===typeof c.easing?c.easing:
m[c.easing]:null,e=e?e(a.progress):a.progress,f=c.start+e*(c.end-c.start);a.obj[b]=c.addPx?f+"px":f;a.progressFunction&&a.progressFunction(b,f,e)}}var d={},p={_funcs:null,setTimeout:function(a){var b=this;this._funcs?this._funcs.push(a):(this._funcs=[a],setTimeout(function(){var a=b._funcs;b._funcs=null;a.forEach(function(a){a()})},33))}};d.animateProperty=function(a){var b={},c=new l;b.promise=c.promise;b.params=a;b.obj=a.obj||a.node||{};b.duration=void 0!==a.duration?a.duration:1E3;b.startTime=
(new Date).getTime();b.endTime=b.startTime+b.duration;b.progress=0;b.endFunction=function(){a.endFunction&&a.endFunction();c.resolve()};b.progressFunction=a.progressFunction;b.stop=function(){b.isStopped=!0};h(b);g(b);return b};d.animateTransform=function(a){var b=a.shape;b.setTransform(null);return d.animateProperty({duration:a.duration,properties:{p:{start:0,end:1,easing:a.easing}},progressFunction:function(c,e,f){var d,g,h,k;a.transform.forEach(function(a){var b=a.start[0]+(a.end[0]-a.start[0])*
f,c=a.start[1]+(a.end[1]-a.start[1])*f;"translate"===a.name?(d=b,g=c):"scale"===a.name&&(h=b,k=c)});b.setTransform(new n.Matrix2D({dx:d,dy:g,xx:h,yy:k}))},endFunction:function(){b.setTransform(null);a.onEnd&&a.onEnd()}}).promise};return d});
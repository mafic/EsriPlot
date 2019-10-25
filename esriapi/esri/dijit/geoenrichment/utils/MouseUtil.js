// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/MouseUtil","dojo/_base/lang dojo/on dojo/sniff dojo/touch dojo/dom-geometry ./DomUtil dojo/domReady!".split(" "),function(f,e,k,h,l,m){var c={_latestEvent:null,_setLatestEvent:function(a){c._latestEvent=a}};k("touch")?(e(document.body,h.press,function(a){c._setLatestEvent(c.fixTouchEvent(a,!0))}),e(document.body,h.move,function(a){c._setLatestEvent(c.fixTouchEvent(a,!0))})):e(document.body,"mousemove",function(a){c._setLatestEvent(c.fixTouchEvent(a,!0))});var g;
e(document.body,"mousedown",function(){g||(g=!0,e.once(document.body,"mouseup, click",function(){g=!1}))});c.getCursorPosition=function(){return c._latestEvent};c.isMouseOver=function(a,b){var d=b&&b.event||c._latestEvent;if(!(a&&a.parentNode&&a.getBoundingClientRect&&d))return!1;if(b&&b.checkAllChildren){b=f.mixin({},b);delete b.checkAllChildren;var e=!1;m.traverseChildren(a,function(a){if(c.isMouseOver(a,b))return e=!0});return e}return c.isMouseOverBox(l.position(a),b)};c.isMouseOverBox=function(a,
b){if(!a)return!1;var d=b&&b.event||c._latestEvent;b&&b.ignoreBorderTolerance&&(b=b.ignoreBorderTolerance,a=f.mixin({},a),a.x+=b,a.y+=b,a.w-=2*b,a.h-=2*b);return a.x<=d.clientX&&a.x+a.w>=d.clientX&&a.y<=d.clientY&&a.y+a.h>=d.clientY};c.fixTouchEvent=function(a,b){a=b?f.mixin({},a):a;a.touches&&1===a.touches.length?(b=a.touches[0],a.clientX=b.clientX,a.clientY=b.clientY,a.pageX=b.pageX,a.pageY=b.pageY):a.changedTouches&&1===a.changedTouches.length&&(b=a.changedTouches[0],a.clientX=b.clientX,a.clientY=
b.clientY,a.pageX=b.pageX,a.pageY=b.pageY);return a};c.isBeingDragged=function(){return g};c.addOverOutHandler=function(a){function b(){clearTimeout(g);d&&d.remove()}var d,g,f=e(a.node,"mouseover",function(f){function h(){c.isMouseOver(a.node)&&(a.onMouseOver(f),d=e(document.body,"mousemove",function(d){c.isMouseOver(a.node)||(b(),a.onMouseOut(d))}))}b();a.delayTimeout?g=setTimeout(h,a.delayTimeout):h()});return{remove:function(){f.remove();b()}}};c.addOutHandler=function(a,b){return e(document.body,
"mousemove",function(d){c.isMouseOver(a,{checkAllChildren:!0})||b(d)})};return c});
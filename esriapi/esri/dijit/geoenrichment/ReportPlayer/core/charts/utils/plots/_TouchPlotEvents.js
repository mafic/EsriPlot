// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/plots/_TouchPlotEvents",["dojo/_base/declare","dojo/on","esri/dijit/geoenrichment/utils/DeviceUtil","esri/dijit/geoenrichment/utils/MouseUtil"],function(d,h,k,l){var m=0,c={};return d(null,{_connectSingleEvent:function(a,d){if(k.isMobileDevice()){var e=this;a.eventMask._maskId=m++;switch(d){case "onmouseover":var g=function(b){30<Math.abs(b.clientX-f.clientX)||30<Math.abs(b.clientY-f.clientY)||(a.type="onmouseover",e.raiseEvent(a),c[a.eventMask._maskId]=
a,a.eventMask._touchOutsideHandle&&a.eventMask._touchOutsideHandle.remove(),a.eventMask._touchOutsideHandle=h(document.body,"touchstart",function(b){l.isMouseOver(a.eventMask.rawNode,{event:b})||(a.eventMask._touchOutsideHandle&&a.eventMask._touchOutsideHandle.remove(),a.type="onmouseout",e.raiseEvent(a),delete c[a.eventMask._maskId])}))},f;this._shapeEvents.push({shape:a.eventMask,handle:a.eventMask.connect("touchstart",this,function(a){Object.keys(c).forEach(function(a){var b=c[a];b.eventMask._touchOutsideHandle&&
b.eventMask._touchOutsideHandle.remove();b.type="onmouseout";e.raiseEvent(b);delete c[a]});f=a})});a.eventMask.connect("touchend",this,g);a.eventMask.connect("touchcancel",this,g)}}else this.inherited(arguments)}})});
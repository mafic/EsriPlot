// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/htmlToSvg/HTMLtoSVGConverter","dojo/_base/declare esri/dijit/geoenrichment/when ./supportClasses/imageUtils/ImageReplacer ./supportClasses/imageUtils/ImageOptimizer ./supportClasses/NodeProcessor ./supportClasses/SVGBuilder ./supportClasses/DomProcessor ./supportClasses/text/TextMeasurer".split(" "),function(f,d,g,h,k,l,m,n){var p=f(null,{htmlToSvg:function(b,a){a=a||{};a.definitions=a.definitions||[];a.fitParams=a.fitParams||{};return d(g.replaceImagesWithDataURL(b),
function(){return d(k.processNode(b,a),function(c){c=l.buildSVG(c,b,a);return d(h.optimizeSize([c],a.sizeLimit),function(a){return a[0]})})})}}),e={_numRunningTasks:0,htmlToSvg:function(b,a){var c=(new Date).getTime();e._numRunningTasks++;return(new p).htmlToSvg(b,a).then(function(a){console.log("HTMLtoSVGConverter: conversion time: "+Number(((new Date).getTime()-c)/1E3).toFixed(3)+" s.");--e._numRunningTasks||(m.cleanUp(),n.cleanUp());return a})}};return e});
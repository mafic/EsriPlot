// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/conversion/ShapeConverter",["dojo/_base/lang","esri/dijit/geoenrichment/utils/JsonXmlConverter"],function(k,l){function b(a){return"string"===typeof a?Number(a.replace("px","")):Number(a)}var d={},m=/path|ellipse|circle|polygon|rect|line/,r=["fill","fill-opacity","stroke","stroke-opacity"],t=["display"];d.svgJsonToShapeObject=function(a,h){function u(a){if(!a)return!1;if(!h.ignoreHiddenElements)return!0;if("none"===a.display)return!1;var c=a.fill&&
"none"!==a.fill&&(void 0===a["fill-opacity"]||0!==a["fill-opacity"]);a=a.stroke&&"none"!==a.stroke&&(void 0===a["stroke-opacity"]||0!==a["stroke-opacity"]);return void 0===c&&void 0===a?!0:c||a}h=h||{};if(h.ignoreHiddenElements){var g=function(a,c){c=k.mixin({},c);a.attributes=a.attributes||{};r.forEach(function(b){var e=a.attributes[b];void 0===e&&(e=a.attributes[b]=c[b]);c[b]=e});t.forEach(function(b){var e=c[b]||a.attributes[b];a.attributes[b]=e;c[b]=e});a.tags&&a.tags.forEach(function(a){g(a,
c)})};a=k.clone(a);g(a)}var f={name:h.name||"",g:[],style:{}};if(a.attributes.viewBox){var d=a.attributes.viewBox.split(" ");f.viewBox={xmin:b(d[0]),ymin:b(d[1]),width:b(d[2]),height:b(d[3])}}else if(a.attributes.width&&a.attributes.height)f.viewBox={xmin:0,ymin:0,width:b(a.attributes.width),height:b(a.attributes.height)};else return f;a.attributes.width&&(f.style.width=b(a.attributes.width));a.attributes.height&&(f.style.height=b(a.attributes.height));a.attributes.zoom&&(f.style.zoom=b(a.attributes.zoom));
f.preserveAspectRatio=a.attributes.preserveAspectRatio;f.showAsBar=a.attributes.showAsBar;f.showBarBackground=a.attributes.showBarBackground;l.queryJson(a,m).forEach(function(a){var c=a.attributes;if(u(c)){var e;switch(a.name){case "path":e={d:c.d};break;case "ellipse":e={cx:b(c.cx),cy:b(c.cy),rx:b(c.rx),ry:b(c.ry)};break;case "circle":e={cx:b(c.cx),cy:b(c.cy),r:b(c.r)};break;case "polygon":e={points:c.points};break;case "rect":e={x:b(c.x),y:b(c.y),width:b(c.width),height:b(c.height)};break;case "line":e=
{x1:b(c.x1),y1:b(c.y1),x2:b(c.x2),y2:b(c.y2)}}e&&(e.name=a.name,c["fill-opacity"]&&(e["fill-opacity"]=b(c["fill-opacity"])),f.g.push(e))}});return f};d.shapeJsonToSvgJson=function(a){return{name:"svg",attributes:{width:a.style.width||void 0,height:a.style.height||void 0,viewBox:a.viewBox.xmin+" "+a.viewBox.ymin+" "+a.viewBox.width+" "+a.viewBox.height,preserveAspectRatio:a.preserveAspectRatio,showAsBar:a.showAsBar,showBarBackground:a.showBarBackground,zoom:a.style.zoom||void 0},tags:[{name:"g",tags:a.g.map(function(a){var b=
k.mixin({},a);delete b.name;return{name:a.name,attributes:b}})}]}};var n={borderColor:"stroke",fillColor:"fill",borderAlpha:"stroke-opacity",fillAlpha:"fill-opacity",borderWidth:"stroke-width",borderDashArray:"stroke-dasharray",strokeMiterLimit:"stroke-miterlimit"},v={"stroke-opacity":1,"fill-opacity":1,"stroke-width":1},p={},q;for(q in n)p[n[q]]=q;d.applyStylesToSvgJson=function(a,b){l.queryJson(a,m).forEach(function(a){a.attributes=a.attributes||{};for(var d in b){var f=n[d];f&&(a.attributes[f]=
b[d])}})};d.getStylesFromSvgJson=function(a){var b={};a=l.queryJson(a,m)[0];if(!a||!a.attributes)return b;for(var d in p){var g=a.attributes[d];void 0!==g&&(b[p[d]]=v[d]?Number(g):g)}return b};return d});
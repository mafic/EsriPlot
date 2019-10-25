// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/infographics/dynamic/_AgePyramid","dojo/_base/declare dojo/_base/lang dojo/dom-class dojo/dom-style dojox/charting/plot2d/Bars dojox/charting/plot2d/Lines ../../charts/utils/plots/_TouchPlotEvents ../../charts/tooltips/ZoomSupportTooltip esri/dijit/geoenrichment/infographicPanels/AgePyramid ./_SelectedFeatureControlMixin".split(" "),function(d,h,e,f,k,l,g,m,n,p){return d([n,p],{tooltipClass:m,infographicStyleProvider:null,_onThemeLoad:function(a){var b=
this.infographicStyleProvider&&this.infographicStyleProvider.agePyramid;b&&(a=h.mixin({},a),a.male=a.male||{},a.male.fill=b.male.backgroundColor,a.female=a.female||{},a.female.fill=b.female.backgroundColor);this.inherited(arguments,[a]);if(b){var c=function(a){f.set(a,"color",e.contains(a,"AgePyramid_TextMale")?b.male.backgroundColor:b.female.backgroundColor)};c(this.min);c(this.max)}},resize:function(){this.inherited(arguments);var a=this.min&&this.min.parentNode;if(a&&this.parent)for(var b=400>
f.get(this.parent,"width"),c=0;c<a.children.length;c++)e[b?"add":"remove"](a.children[c],"TrimWithEllipses")},_getLinesPlot:function(){return d([l,g])},_getBarsPlot:function(){return d([k,g])}})});
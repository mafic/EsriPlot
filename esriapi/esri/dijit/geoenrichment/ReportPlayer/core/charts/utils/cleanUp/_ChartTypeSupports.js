// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/cleanUp/_ChartTypeSupports","esri/dijit/geoenrichment/utils/ObjectUtil esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/ChartTypes ./chartTypes/classic/_ColumnBarLike ./chartTypes/classic/_LineLike ./chartTypes/classic/_Pie ./chartTypes/graphic/_ColumnBarLike ./chartTypes/graphic/_ColumnBarPictureLike ./chartTypes/graphic/_LineLike ./chartTypes/graphic/_Pie ./chartTypes/graphic/_Donut ./chartTypes/graphic/_Ring ./chartTypes/graphic/_Gauge ./chartTypes/graphic/_Waffle".split(" "),
function(g,a,h,k,l,m,n,p,q,r,t,u,v){var d={},c={};c[a.COLUMN]=c[a.BAR]=h;c[a.LINE]=k;c[a.PIE]=l;var b={};b[a.COLUMN]=b[a.BAR]=m;b[a.PICTURE_COLUMN]=b[a.PICTURE_BAR]=n;b[a.LINE]=b[a.VERTICAL_LINE]=p;b[a.PIE]=q;b[a.DONUT]=r;b[a.RING]=t;b[a.GAUGE]=u;b[a.WAFFLE]=v;d.cleanUpJsonForChartType=function(a,e){return g.filterByPattern(a,(e?b:c)[a.type])};d.supportsVisualProperty=function(a,e,d){e=e.split(".");var f=(a=(d?b:c)[a])&&a.visualProperties;e.forEach(function(a){f=f&&f[a]});return f};return d});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/grid/coreUtils/gridLayoutCalcUtils/columns/_ColumnModifierNormal",["./ColumnDataUtil"],function(l){var m={},q={adjustColumnWidth:function(d,g,e,b,m){function h(b,a){return l.setFieldWidth(d,g,b.field,a,!0)}var n=d.layoutDefaults.columnMinWidth,a=function(){if(!e)return null;var a=l.getFieldWidth(d,g,e.field);void 0!==m&&(b=a+m);b=Math.max(n,b);var c,f=0,h=!1;d.columns.forEach(function(a){f+=l.getFieldWidth(d,g,a.field);h&&!c?c=a:a===e&&(h=!0)});var k=
l.getAllowedWidth(d)-(f-a);return isNaN(k)?null:{width:b,widthMemo:a,maxAllowedColumnWidth:k,nextColumn:c}}();if(a){b=a.width;var c=a.widthMemo,f=a.maxAllowedColumnWidth,k=(a=a.nextColumn)&&l.getFieldWidth(d,g,a.field),c=b-c,p=0;d.keepGridWidthWhenResized?(a&&(c=k-c,c<n&&(b-=n-c,c=n),c<k&&(f+=k-c),h(a,c)),h(e,Math.min(f,b))):(a&&f<b&&k>n?(h(e,b),p=f-b):h(e,Math.min(f,b)),0!==p&&q.adjustColumnWidth(d,g,a,null,p))}}};m.adjustColumnWidth=function(d,g,e,b){q.adjustColumnWidth(d,g,e,b)};return m});
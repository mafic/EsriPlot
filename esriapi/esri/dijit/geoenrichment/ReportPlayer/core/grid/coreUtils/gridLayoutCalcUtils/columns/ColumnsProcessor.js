// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/grid/coreUtils/gridLayoutCalcUtils/columns/ColumnsProcessor",["dojox/uuid/generateRandomUuid","./ColumnDataUtil"],function(u,f){function v(a){a._dynamicBindings={};if(a.getNumDynamicColumns()){for(var b=a.getNumDynamicColumns(),f=a.getNumFixedColumns(),c=0;c<f;c++)a.columns[c].isFixed=!0;for(var c=[],k=0;k<b;k++){for(var g=f,l=[];g<a.columns.length;){var h=a.columns[g+k];h.isDynamic=!0;l.push(h);g+=b}c.push(l)}c.forEach(function(b){b.forEach(function(c){a._dynamicBindings[c.field]=
b})})}}var p={recalcColumns:function(a,b){var p=b&&b.resetWidth,c=b&&b.columnsToPreserve,k=b&&b.stickToRight,g=b&&b.newWidth,l=b&&b.rightOffsetWeight;b=b&&b._isJson;var h={},n=0;a.columns.every(function(d,a){if(!d.style||!d.style.width||isNaN(d.style.width)||"number"!==typeof d.style.width)return n=0,!1;n+=d.style.width;h[a]=d.style.width;return!0});var e;e=g?g:k?a.getAllowedWidth():n?Math.min(n,a._width):a._width;e-=0<l?e*l:0;var q=e/a.columns.length,m=e;if(c){var w=c.length*q,r=0;c.forEach(function(a){r+=
a.style.width});c.forEach(function(a){a.style.width=w/r*a.style.width/m*100+"%"})}a.columns.forEach(function(a,b,c){a.index=b;a.style=a.style||{};if("number"!==typeof a.style.width||p)if(b===c.length-1)a.style.width=m;else{var d=a.style.width;"string"===typeof d&&-1!==d.indexOf("%")?a.style.width=parseFloat(d.substr(0,d.length-1))/100*e:a.style.width=q}m-=a.style.width;b===c.length-1&&0>m&&(a.style.width+=m);void 0===a.id&&(a.id=u())});if(a.looseResize){a.columns.some(function(b,c){var d=h[c]?b.style.width/
h[c]:void 0;a.store.data.forEach(function(c){var e=f.getFieldWidthOwn(a,c,b.field);e?d&&1!==d&&f.setFieldWidth(a,c,b.field,e*d):f.setFieldWidth(a,c,b.field,b.style.width)})});var t=a.columns[a.columns.length-1].field;a.store.data.forEach(function(b){var c=0;a.columns.some(function(d){c+=f.getFieldWidthOwn(a,b,d.field)});var d=e-c;0!==d&&f.setFieldWidth(a,b,t,f.getFieldWidthOwn(a,b,t)+d)})}b||(v(a),f.recalcGridWidth(a));return e},recalcColumnsTableJson:function(a){p.recalcColumns(a.data,{resetWidth:!0,
newWidth:a.style.width,_isJson:!0})}};return p});
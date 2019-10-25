// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProvider/supportClasses/data/AreaDataUtil",["dojo/_base/lang","../../../core/supportClasses/templateJsonUtils/fieldInfo/FieldInfoNameUtil","../../../_devConfig"],function(h,q,r){var f={getAreaDataValue:function(a){function b(a){!1!==p&&(g=a[p]);void 0===g&&(g=a[c])}function e(){var a=l[k];a&&(0<=m?b(a.comparisonLevels[m]):b(a.data))}var c=a.fieldName,d=a.fieldData,l=a.areaDataObject,k=a.calculatorName,f=a.featureIndex,m=a.comparisonIndex,h=a.ignoreMetadata,
t=a.isMultiFeature;if(!r.showAreaDataUtilUndefinedData&&c){var n=c.indexOf("."),p=!1;-1!==n&&(p=c.substr(n+1));k||-1===n||(k=c.substr(0,n));f=void 0===f?0:Number(f)||0;if(l=a.areaDataObject||d.areaData[f]){var g;t&&k===q.AREA_ATTRIBUTES_CALCULATOR_NAME&&!h&&d&&b(d.metadata);void 0===g&&e();if(k)return g;void 0===g&&!h&&d&&b(d.metadata);if(void 0===g)for(var u in l)if(a=l[u],0<=m?b(a.comparisonLevels[m]):b(a.data),void 0!==g)break;return g}}},getAreaDataObjectCalculator:function(a,b,e){if(!a)return null;
var c=a[b];!c&&e&&(c=a[b]=f.createCalculator());return c},createCalculator:function(a,b){return{data:a||{},comparisonLevels:b||[]}},combineAreaDataObjectCalculators:function(a,b,e){var c=[],d=[];a.forEach(function(a){if(a=f.getAreaDataObjectCalculator(a,b))c.push(a.data),d=d.concat(a.comparisonLevels)});e&&e.removeDuplicates&&(d=f.removeDuplicacatedCalcData(d));return{thisAreas:c,comparisonLevels:d}},removeDuplicacatedCalcData:function(a){if(!a.length)return a;var b=[],e={},c=Object.keys(a[0]);a.forEach(function(a){var d=
function(a){var b="";c.forEach(function(c){b+=a[c]+";"});return b}(a);e[d]||(e[d]=!0,b.push(a))});return b},setAreaDataValue:function(a,b,e,c,d){d=void 0===d?0:Number(d)||0;f.setAreaDataObjectValue(a,b,e[d],c)},setAreaDataObjectValue:function(a,b,e,c){e&&c&&null!==b&&void 0!==b&&(f.getAreaDataObjectCalculator(e,c,!0).data[a]=b)},mergeAreaData:function(a,b){b.forEach(function(b,c){(c=a[c])&&f.mergeAreaDataObjects(c,b)})},mergeAreaDataObjects:function(a,b){for(var e in a){var c=a[e],d=b[e];d?c.comparisonLevels.length!==
d.comparisonLevels.length?console.log("Error: can't merge calculators with different comparison levels!"):(h.mixin(d.data,c.data),c.comparisonLevels.forEach(function(a,b){h.mixin(d.comparisonLevels[b],a)})):b[e]=c}console.log("AreaDataUtil.js merging area data \x3d\x3e areaData");console.log(b)}};return f});
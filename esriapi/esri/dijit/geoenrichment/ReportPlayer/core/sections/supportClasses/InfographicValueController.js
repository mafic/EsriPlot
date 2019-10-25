// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/sections/supportClasses/InfographicValueController",["dojo/_base/declare","../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoRenderer"],function(d,g){function f(b){var c=-Infinity;b.forEach(function(a){c=Math.max(c,a)});return c}return d(null,{_sections:null,_variableTables:null,constructor:function(){this._sections=[]},_samplePercentValues:[52,30,18,90,70,100],setVariableTables:function(b){this._variableTables=b},addSection:function(b){this._sections.push(b)},
_getRealValues:function(b){var c=this._sections[0],a=c.viewModel.dynamicReportInfo.fieldData;return this._variableTables.map(function(e){return g.getFieldDataValue(e.variable.fieldInfo,a,b&&"number"===typeof b.currentFeatureIndex?b.currentFeatureIndex:c.currentFeatureIndex)})},getValueInfo:function(b,c){var a=!b.viewModel.dynamicReportInfo;b=this._sections.indexOf(b);if(a){a=this._samplePercentValues.slice();a.length=this._sections.length;var e=f(a);c=a.map(function(a){return a/e});a=a[b];return{number:100*
a,percent:a,normalizedValue:c[b]}}var a=this._getRealValues(c),d=f(a);c=a.map(function(a){return a/d});a=a[b];return{number:a,percent:a,normalizedValue:c[b]}}})});
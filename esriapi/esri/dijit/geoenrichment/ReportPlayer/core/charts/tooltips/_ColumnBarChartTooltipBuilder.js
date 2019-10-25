// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/tooltips/_ColumnBarChartTooltipBuilder",["dojo/dom-construct","./_BuilderUtil","dojo/i18n!esri/nls/jsapi"],function(h,b,c){c=c.geoenrichment.dijit.ReportPlayer.ChartTooltip;return{buildColumnChartTooltip:function(a,b){var c=a.getGroup&&a.getGroup();a.isMultiFeature||c&&1!==c.length?this._buildMultiSeriesTooltip(a,b):this._buildSingleSeriesTooltip(a,b)},_buildSingleSeriesTooltip:function(a,f){var e=[],d=h.create("div",{"class":"chartTooltip_row esriGERowHigh"},
f);b.addColor(a,d);e.push(b.addLabel(a.label,d));a.isUnavailableData?b.addValue(c.unavailableData,d):a.isBenchmarked?b.addBenchmarkValue(a,d):(b.addValue(a.valueLabel,d),e=e.concat(b.buildStatLabels(a,f,c.weight,c.minValue,c.maxValue,c.avgValue)));b.formatTable(e)},_buildMultiSeriesTooltip:function(a,f){var e=[];b.addTitle(f,a.isMultiFeature?b.buildSeriesLabel(a):a.label);var d=h.create("div",{"class":"chartTooltip_row esriGERowHigh"},f);b.addColor(a,d);e.push(b.addLabel(a.isMultiFeature?a.label:
b.buildSeriesLabel(a),d));a.isUnavailableData?b.addValue(c.unavailableData,d):a.isBenchmarked?b.addBenchmarkValue(a,d):(b.addValue(a.valueLabel,d),d=a.isMultiFeature?b.buildStatLabels(a,f,c.weightInAreas,c.minValueInAreas,c.maxValueInAreas,c.avgValueInAreas,c.weightInStack):a.isSinglePointInSeries?b.buildStatLabels(a,f,null,null,null,null,c.weightInStack):b.buildStatLabels(a,f,c.weightInSeries,c.minValueInSeries,c.maxValueInSeries,c.avgValueInSeries,c.weightInStack),e=e.concat(d));a.getGroup().forEach(function(d){if(a!==
d){var g=h.create("div",{"class":"chartTooltip_row esriGERowHigh"},f);b.addColor(d,g);e.push(b.addLabel(d.isMultiFeature?d.label:b.buildSeriesLabel(d),g));d.isUnavailableData?b.addValue(c.unavailableData,g):a.isBenchmarked?b.addBenchmarkValue(d,g):b.addValue(d.valueLabel,g)}});b.formatTable(e)}}});
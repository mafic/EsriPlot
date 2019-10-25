// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/_ChartLegendSupport","dojo/_base/declare dojo/_base/lang dojo/dom-class dojo/dom-style ./utils/ChartTypes ./utils/ChartStyleUtil ./utils/ChartCalculator ./legends/ChartLegendTypes ./legends/ChartLegendPlacements ./legends/MinMaxLegend ./legends/SelectableLegend ./legends/ChartLegendSymbols".split(" "),function(h,e,d,f,c,k,l,g,a,m,n,p){return h(null,{legend:null,_placements:[a.LEFT,a.RIGHT,a.TOP,a.BOTTOM],_excludedSeriesHash:null,_createLegend:function(){this._excludedSeriesHash=
{};this._placements.forEach(function(b){d.remove(this.domNode,"legendPlacement"+b)},this);this._currentVisualProperties.legend&&(this._currentVisualProperties.legend.type===g.MIN_MAX?this._createMinMaxLegend():this._createSeriesLegend())},_createSeriesLegend:function(){var b=this._currentVisualProperties.legend.series.placement;b!==a.NONE&&(this.legend=(new n(e.mixin({chart:this.chart,chartType:this._currentChartType,allowSelect:!!this.viewModel.dynamicReportInfo&&(c.isColumnBarLike(this._currentChartType)||
c.isLineLike(this._currentChartType)),isStacked:a.isOnSide(b),isRtlPlacement:b===a.LEFT&&!this.viewModel.isGraphicStyle,keepItemsTheSameWidth:!0,customLegendSymbol:this._currentVisualProperties.legend.series.symbol,defaultLegendSymbol:p.getDefaultSymbol(this._currentChartType,this.viewModel.isGraphicStyle),showValues:this._currentChartType===c.WAFFLE,hideLastPoint:this._currentVisualProperties.legend.series.hideOthers,onSeriesExclusionChanged:e.hitch(this,this._onSeriesExclusionChanged)},this._getAdditionalLegendParams()))).placeAt(this.getLegendNode()),
this._applyStyleToSeriesLegend(),d.add(this.domNode,"legendPlacement"+b))},_applyStyleToSeriesLegend:function(){var b=this.viewModel.getChartDefaultStyles(this.theme),b=e.mixin({},b.legendStyle,this._currentVisualProperties.legend.series.style);this.viewModel.isGraphicStyle||delete b.backgroundColor;f.set(this.legend.domNode,k.getStyleObjWithUnits(b));this._currentVisualProperties.legend.series.hasBorder||f.set(this.legend.domNode,"border","none")},_createMinMaxLegend:function(){this._currentVisualProperties.legend.minMax&&
this._currentVisualProperties.legend.minMax.placement!==a.NONE&&(this.legend=(new m({viewModel:this.viewModel,theme:this.theme,chartType:this._currentChartType})).placeAt(this.getLegendNode()),d.add(this.domNode,"hasMinMaxLegend"),d.add(this.domNode,"legendPlacement"+this._currentVisualProperties.legend.minMax.placement))},_getAdditionalLegendParams:function(){return null},_onSeriesExclusionChanged:function(b){this._excludedSeriesHash=b;this._updateSeries()},_updateLegend:function(){this.legend&&
(this._currentVisualProperties.legend.type===g.MIN_MAX?this._updateMinMaxLegend():this._updateSeriesLegend())},_updateSeriesLegend:function(){this.legend.chartWidth=this.domNode.clientWidth-2*l.PRETTY_PADDING;var b=(!this._isMultiFeatureChart||c.isLineLike(this._currentChartType))&&this._currentComparisonInfo&&this._currentVisualProperties.legend.series.showComparison,a=this._currentSeries.filter(function(a){return!a.isComparisonSeries||b});this.legend.series=a;this.legend.showSeriesData=1===a.length&&
!c.isLineLike(this._currentChartType);a=!!this.viewModel.dynamicReportInfo&&1<a.length;a!==this.legend.allowSelect&&(this.legend.allowSelect=a);this.legend.refresh()},_updateMinMaxLegend:function(){var a=this._currentSeries.filter(function(a){return!a.isComparisonSeries});this.legend.refresh(a,this._currentVisualProperties)},_destroyLegend:function(){this.legend&&this.legend.destroy();this.legend=null}})});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/sections/dynamicSettings/SectionDynamicSettings","dojo/aspect dojo/_base/declare dojo/dom-construct dijit/_WidgetBase dijit/_TemplatedMixin ./chart/ChartSettings ./locator/LocatorSettings ./comparison/ComparisonSettings ./map/MapSettings ./table/TableSettings esri/dijit/geoenrichment/utils/MouseUtil".split(" "),function(d,e,c,f,g,h,k,l,m,n,p){return e([f,g],{templateString:"\x3cdiv class\x3d'esriGEReportPlayer_sectionDynamicSettings'\x3e\x3c/div\x3e",
chartSettings:null,comparisonSettings:null,locatorSettings:null,mapSettings:null,tableSettings:null,_chartSettingsWidget:null,_comparisonSettingsWidget:null,_locatorSettingsWidget:null,_mapSettingsWidget:null,_tableSettingsWidget:null,postCreate:function(){this._tryInitChartSettings();this._tryInitComparisonSettings();this._tryInitLocatorSettings();this._tryInitMapSettings();this._tryInitTableSettings()},_tryInitChartSettings:function(){this.chartSettings&&(this._chartSettingsWidget=(new h({onSortChart:this.onSortChart.bind(this),
onChartToTable:this.onChartToTable.bind(this),onTableToChart:this.onTableToChart.bind(this),onCalcStateChanged:this.onCalcStateChanged.bind(this)})).placeAt(c.create("div",{"class":"sectionDynamicSettings_row"},this.domNode)),this.own(this._chartSettingsWidget),this._chartSettingsWidget.setSortingOptions(this.chartSettings.sortingOptions,this.chartSettings.sorting),this._chartSettingsWidget.setViewOptions(this.chartSettings.canViewTable),this._chartSettingsWidget.setToggleCalcStateOptions(this.chartSettings.group))},
_tryInitLocatorSettings:function(){this.locatorSettings&&(this._locatorSettingsWidget=(new k({onLocatorSummaryChanged:this.onLocatorSummaryChanged.bind(this)})).placeAt(c.create("div",{"class":"sectionDynamicSettings_row"},this.domNode)),this.own(this._locatorSettingsWidget),this._locatorSettingsWidget.setSummaryInfos(this.locatorSettings.summaryInfos))},_tryInitComparisonSettings:function(){this.comparisonSettings&&(this._comparisonSettingsWidget=(new l({onChartToTable:this.onChartToTable.bind(this),
onTableToChart:this.onTableToChart.bind(this)})).placeAt(c.create("div",{"class":"sectionDynamicSettings_row"},this.domNode)),this.own(this._comparisonSettingsWidget),this._comparisonSettingsWidget.setChartViewOptions(this.comparisonSettings.chartViewOptions))},_tryInitMapSettings:function(){function a(){b._mapSettingsWidget.setLegendVisible(b.mapSettings.getLegendVisible())}var b=this;this.mapSettings&&(this._mapSettingsWidget=(new m({onLegendVisibilityChanged:this.onLegendVisibilityChanged.bind(this)})).placeAt(c.create("div",
{"class":"sectionDynamicSettings_row"},this.domNode)),this.own(this._mapSettingsWidget),a(),this.own(d.after(this.mapSettings,"onLegendVisibilityChanged",a)))},_tryInitTableSettings:function(){this.tableSettings&&(this._tableSettingsWidget=(new n({onChartToTable:this.onChartToTable.bind(this),onTableToChart:this.onTableToChart.bind(this)})).placeAt(c.create("div",{"class":"sectionDynamicSettings_row"},this.domNode)),this.own(this._tableSettingsWidget),this._tableSettingsWidget.setChartViewOptions(this.tableSettings.chartViewOptions))},
setVisualState:function(a){var b=(a=a&&a.stackElements[0]&&a.stackElements[0])&&a.cells&&a.cells[0];this._chartSettingsWidget&&this._chartSettingsWidget.setVisualState(b);this._locatorSettingsWidget&&this._locatorSettingsWidget.setVisualState(b);this._comparisonSettingsWidget&&this._comparisonSettingsWidget.setVisualState(b);this._mapSettingsWidget&&this._mapSettingsWidget.setVisualState(b);this._tableSettingsWidget&&this._tableSettingsWidget.setVisualState(a)},isMouseOver:function(a){return p.isMouseOver(this.domNode,
{event:a})||[this._chartSettingsWidget,this._comparisonSettingsWidget,this._locatorSettingsWidget,this._mapSettingsWidget,this._tableSettingsWidget].some(function(b){return b&&b.isMouseOver&&b.isMouseOver(a)})},onSortChart:function(a){},onCalcStateChanged:function(a){},onChartToTable:function(a,b){},onTableToChart:function(a){},onLocatorSummaryChanged:function(a){},onLegendVisibilityChanged:function(a){},onClosePopup:function(){}})});
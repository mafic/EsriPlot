// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/infographics/dynamic/_Infographic","dojo/_base/declare dojo/_base/lang dojo/on esri/dijit/geoenrichment/Infographic ./_AgePyramid ./_RelatedVariables ./_OneVar ./_Tapestry ./_Prizm5 ../InfographicTypes".split(" "),function(e,d,f,g,h,k,l,m,n,c){var b={};b[c.ONE_VAR]=l;b[c.AGE_PYRAMID]=h;b[c.RELATED_VARS]=k;b[c.TAPESTRY]=m;b[c.PRIZM5]=n;return e(g,{documentStyleProvider:null,infographicStyleProvider:null,widgetParams:null,_requireReport:function(){this.type&&
(b[this.type]?this._createReportWidget(this.type,b[this.type]):require([this._getAbsMid("./"+this.type)],d.hitch(this,this._createReportWidget,this.type)))},_createReportWidget:function(a,b){var c=this;if(!this._destroyed&&this.type===a)if(this._ge&&this._ge.isBusy())f.once(this._ge,"end",d.hitch(this,this._createReportWidget,this.type,b));else this._autoTitlePromise?this._autoTitlePromise.then(d.hitch(this,this._createReportWidget,this.type,b)):this.type&&(a=this._widget=new b(this.domNode),d.mixin(a,
this.widgetParams),a.onExpandedStateChanged=function(){c.onExpandedStateChanged()},a.onSelectedFeatureChanged=function(){c.onSelectedFeatureChanged()},a.documentStyleProvider=this.documentStyleProvider,a.infographicStyleProvider=this.infographicStyleProvider,a.title="string"===typeof this.title?this.title:this._autoTitle,a.subtitle=this.subtitle,a.expanded=this.expanded,a.parentInfographic=this,a.on("resize",d.hitch(this,this._onResize)),isNaN(this._lastSelectedComparison)||a.setState({selectedComparison:this._lastSelectedComparison}),
a.setDataProvider(this.dataProvider),this.onWidgetCreated())},collapseContent:function(){this._widget&&this._widget.collapseContent&&this._widget.collapseContent()},getSelectedFeatureID:function(){return this._widget&&this._widget.getSelectedFeatureID&&this._widget.getSelectedFeatureID()},setSelectedFeatureID:function(a){this._widget&&this._widget.setSelectedFeatureID&&this._widget.setSelectedFeatureID(a)},onWidgetCreated:function(){},onExpandedStateChanged:function(){},onSelectedFeatureChanged:function(){}})});
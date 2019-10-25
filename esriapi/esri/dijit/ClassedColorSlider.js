// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/ClassedColorSlider/templates/ClassedColorSlider.html":'\x3cdiv class\x3d"${baseClass}"\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"_titleNode"\x3e\x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"_sliderNode"\x3e\x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"_scaleNode"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/ClassedColorSlider","../kernel ../numberUtils ../renderers/utils ../dijit/RendererSlider ../dijit/RendererSlider/sliderUtils dijit/_TemplatedMixin dijit/_WidgetBase dojo/_base/array dojo/_base/declare dojo/_base/lang dojo/debounce dojo/dom-style dojo/Evented dojo/has dojox/gfx dojo/text!./ClassedColorSlider/templates/ClassedColorSlider.html".split(" "),function(m,n,l,p,f,g,q,r,t,c,u,h,v,w,x,y){g=t([q,g,v],{declaredClass:"esri.dijit.ClassedColorSlider",baseClass:"esriClassedColorSlider",
templateString:y,breakInfos:null,histogram:null,handles:[],showHistogram:!0,showStatistics:!0,showLabels:!0,showTicks:!0,showHandles:!0,classificationMethod:null,normalizationType:null,histogramWidth:100,rampWidth:26,_rampNode:null,_sliderHeight:null,_colorRampSurface:null,_histogramSurface:null,_surfaceRect:null,_barsGroup:null,_updateTimer:null,constructor:function(a,b){b&&(this.breakInfos=c.clone(a.breakInfos),this.set("values",this._getHandleInfo(this.breakInfos)),this._updateTimeout=u(this._updateTimeout,
0))},postCreate:function(){this.inherited(arguments);this._setupDataDefaults()},startup:function(){this.inherited(arguments);this._slider=new p({type:"ClassedColorSlider",values:this.values,minimum:this.minValue,maximum:this.maxValue,showLabels:this.showLabels,showTicks:this.showTicks,showHandles:this.showHandles,classificationMethod:this.classificationMethod,normalizationType:this.normalizationType},this._sliderNode);this._slider.startup();this._rampNode=this._slider._sliderAreaRight;this._sliderHeight=
h.get(this._rampNode,"height")||155;this._createSVGSurfaces();this._slider.on("slide",c.hitch(this,function(a){this.classificationMethod=null;this._updateBreakInfos(a.values);this._updateBreakInfoLabels();this._fillRamp();this.emit("data-change",{minValue:this.minValue,maxValue:this.maxValue,breakInfos:c.clone(this.breakInfos)})}));this._slider.on("handle-value-change",c.hitch(this,function(a){this.classificationMethod=null;this._updateBreakInfos(a.values);this._updateBreakInfoLabels();this._fillRamp();
a=c.clone(this.breakInfos);this.emit("data-change",{minValue:this.minValue,maxValue:this.maxValue,breakInfos:a});this.emit("handle-value-change",a)}));this._slider.on("data-value-change",c.hitch(this,function(a){this.classificationMethod=null;this.breakInfos[0].minValue=a.min;this.breakInfos[this.breakInfos.length-1].maxValue=a.max;this.set({minValue:a.min,maxValue:a.max});this._updateBreakInfoLabels();this._updateRendererSlider();a={minValue:this.minValue,maxValue:this.maxValue,breakInfos:c.clone(this.breakInfos)};
this.emit("data-change",a);this.emit("data-value-change",a)}));this._slider.on("stop",c.hitch(this,function(a){this.emit("handle-value-change",c.clone(this.breakInfos))}));this.histogram&&this.showHistogram&&this._generateHistogram();this.statistics&&this.showStatistics&&this._generateStatistics();this.watch("breakInfos",this._updateTimeout);this.watch("handles",this._updateTimeout);this.watch("statistics",this._updateTimeout);this.watch("showHandles",this._updateTimeout);this.watch("showLabels",
this._updateTimeout);this.watch("showTicks",this._updateTimeout);this.watch("histogram",this._showHistogram);this.watch("showHistogram",this._toggleHistogram)},destroy:function(){this.inherited(arguments);this._slider&&this._slider.destroy();this._avgHandleObjs&&this._avgHandleObjs.avgHandleTooltip&&this._avgHandleObjs.avgHandleTooltip.destroy();this.countTooltips&&r.forEach(this.countTooltips,function(a){a.destroy()})},_updateTimeout:function(){this._updateRendererSlider()},_updateRendererSlider:function(){this.set({minValue:this.breakInfos[0].minValue,
maxValue:this.breakInfos[this.breakInfos.length-1].maxValue});this._slider.set({minimum:this.minValue,maximum:this.maxValue,values:this._getHandleInfo(this.breakInfos),handles:this.handles});this._slider._reset();this._slider._updateRoundedLabels();this._slider._generateMoveables();this._clearRect();this._createSVGSurfaces();this.histogram&&this.showHistogram&&this._generateHistogram();this.statistics&&this.showStatistics&&this._generateStatistics()},_getHandleInfo:function(a){var b=[],d;for(d=0;d<
a.length-1;d++)b.push(a[d].maxValue);return b},_updateBreakInfos:function(a){var b=this.breakInfos,d;l.updateClassBreak({classBreaks:b,normalizationType:this.normalizationType,classificationMethod:this.classificationMethod,change:a});for(d=0;d<a.length;d++)b[d].maxValue=a[d],b[d+1]&&(b[d+1].minValue=a[d])},_updateBreakInfoLabels:function(){l.setLabelsForClassBreaks({classBreaks:this.breakInfos,normalizationType:this.normalizationType,classificationMethod:this.classificationMethod,round:!0})},_setupDataDefaults:function(){null!==
this.breakInfos&&1<this.breakInfos.length?this.set({minValue:this.breakInfos[0].minValue,maxValue:this.breakInfos[this.breakInfos.length-1].maxValue}):null!==this.breakInfos&&1===this.breakInfos.length?this.set({minValue:this.breakInfos[0].minValue,maxValue:this.breakInfos[0].maxValue}):(this.set({minValue:0,maxValue:100,breakInfos:[{minValue:0,maxValue:20},{minValue:20,maxValue:80},{minValue:80,maxValue:100}]}),this.set("values",this._getHandleInfo(this.breakInfos)),this._updateBreakInfoLabels())},
_createSVGSurfaces:function(){this._colorRampSurface=x.createSurface(this._rampNode,this.rampWidth,this._sliderHeight);h.set(this._colorRampSurface.rawNode,"border","1px solid #888");this._surfaceRect=this._colorRampSurface.createRect({width:this.rampWidth+2,height:this._sliderHeight+2});this._histogramSurface=f.generateHistogramSurface(this._rampNode,this.histogramWidth,this._sliderHeight,this.rampWidth);this._fillRamp()},_clearRect:function(){this._colorRampSurface.destroy();this._histogramSurface.destroy()},
_fillRamp:function(){var a=this.breakInfos,b=this.maxValue,d=this.minValue,k=[],e;for(e=0;e<a.length;e++){var c,f;b===d?c=f=0:(c=(b-a[e].minValue)/(b-d),f=(b-a[e].maxValue)/(b-d));k.push({offset:c,color:a[e].symbol?a[e].symbol.color:"#5daddd"});k.push({offset:f,color:a[e].symbol?a[e].symbol.color:"#5daddd"})}k.reverse();this._surfaceRect.setFill({type:"linear",x1:0,y1:0,x2:0,y2:this._sliderHeight,colors:k})},_showHistogram:function(){this.histogram?this._generateHistogram():this._barsGroup&&(this._barsGroup.destroy(),
this._barsGroup=null)},_toggleHistogram:function(){this.showHistogram?(h.set(this._barsGroup.rawNode,"display","inline-block"),this._showHistogram()):h.set(this._barsGroup.rawNode,"display","none")},_generateHistogram:function(){this._barsGroup=f.generateHistogram(this._histogramSurface,this.histogram,this.histogramWidth,this.rampWidth,this.isLeftToRight());this.countTooltips=f.generateCountTooltips(this.histogram,this._barsGroup)},_generateStatistics:function(){if(!(2>this.statistics.count||isNaN(this.statistics.avg))){var a=
this.statistics,b=this._slider,d=f.getPrecision(this.maxValue),c,e;a.min===a.max&&a.min===a.avg?(c=0,e=2*a.avg):(c=a.min,e=a.max);if(c!==b.minimum||e!==b.maximum)c=b.minimum,e=b.maximum;b=this._sliderHeight*(e-a.avg)/(e-c);a=n.round([a.avg,e,c])[0];this._avgHandleObjs=f.generateAvgLine(this._histogramSurface,a,b,d,this.isLeftToRight())}}});w("extend-esri")&&c.setObject("dijit.ClassedColorSlider",g,m);return g});
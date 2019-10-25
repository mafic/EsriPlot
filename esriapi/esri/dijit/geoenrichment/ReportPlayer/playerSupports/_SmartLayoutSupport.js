// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/playerSupports/_SmartLayoutSupport",["dojo/_base/declare","dojo/dom-class","dojo/on","esri/dijit/geoenrichment/utils/DomUtil","../PlayerResizeModes"],function(d,b,e,f,c){return d(null,{_width:0,_height:0,_measuredWinBox:null,_initSmartLayout:function(){var a=this;this.resizeMode===c.FIT_WINDOW&&this.own(e(window,"resize, orientationchange",function(){setTimeout(function(){a._measuredWinBox=null;a.resize()})}));this._resize()},_resize:function(a){a=a||
{};b.remove(this.domNode,"esriGEReportPlayerFullScreen esriGEReportPlayerAutoResize esriGEReportPlayerManualResize");switch(this.resizeMode){case c.FIT_WINDOW:return this._resize_fitWindow(a);case c.AUTO:return this._resize_auto(a);case c.MANUAL:return this._resize_manual(a)}},_resize_fitWindow:function(a){this._measuredWinBox=this._measuredWinBox||f.getWindowBox();this._width=this._maxWidth=this._measuredWinBox.w;this._height=this._maxHeight=this._measuredWinBox.h;b.add(this.domNode,"esriGEReportPlayerFullScreen");
this.domNode.style.width=this._width+"px";this.domNode.style.height=this._height+"px";this._currentReportContainer&&(this._currentReportContainer.setMaxWidth&&this._currentReportContainer.setMaxWidth(this._maxWidth),this._currentReportContainer.setMaxHeight&&this._currentReportContainer.setMaxHeight(this._maxHeight-this._getToolbarHeight()),this._currentReportContainer.resize(this._width,this._height-this._getToolbarHeight()),this._emitResizedEvent(a.isPaginating))},_resize_auto:function(a){this._height=
this._width=0;b.add(this.domNode,"esriGEReportPlayerAutoResize");this.domNode.style.width="auto";this.domNode.style.height="auto";this._currentReportContainer&&(this._currentReportContainer.setMaxWidth&&this._currentReportContainer.setMaxWidth(this._maxWidth),this._currentReportContainer.setMaxHeight&&this._currentReportContainer.setMaxHeight(this._maxHeight-this._getToolbarHeight()),this._currentReportContainer.resize(0,0),this._emitResizedEvent(a.isPaginating))},_resize_manual:function(a){this._width=
void 0!==a.width?a.width:this._width;this._height=void 0!==a.height?a.height:this._height;this._width&&this._height&&(this._maxWidth&&(this._width=Math.min(this._maxWidth,this._width)),this._maxHeight&&(this._height=Math.min(this._maxHeight,this._height)),b.add(this.domNode,"esriGEReportPlayerManualResize"),this.domNode.style.width=this._width+"px",this.domNode.style.height=this._height+"px",this._currentReportContainer&&(this._currentReportContainer.setMaxWidth&&this._currentReportContainer.setMaxWidth(this._maxWidth||
this._width),this._currentReportContainer.setMaxHeight&&this._currentReportContainer.setMaxHeight((this._maxHeight||this._height)-this._getToolbarHeight()),this._currentReportContainer.resize(this._width,this._height-this._getToolbarHeight()),this._emitResizedEvent(a.isPaginating)))},_getToolbarHeight:function(){return this.showToolbarInPopup?0:50},_maxWidth:0,_maxHeight:0,setMaxWidth:function(a){this._maxWidth=a},setMaxHeight:function(a){this._maxHeight=a}})});
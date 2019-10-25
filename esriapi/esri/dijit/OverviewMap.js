// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/templates/OverviewMap.html":'\x3cdiv class\x3d"esriOverviewMap"\x3e\r\n  \x3cdiv class\x3d"ovwContainer" dojoattachpoint\x3d"_body" style\x3d"width: ${width}px; height: ${height}px;"\x3e\r\n    \x3cdiv id\x3d"${id}-map" style\x3d"width: 100%; height: 100%;"\x3e\r\n      \x3cdiv class\x3d"ovwHighlight" dojoattachpoint\x3d"_focusDiv" title\x3d"${NLS_drag}" style\x3d"border: 1px solid ${color}; background-color: ${color};"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"ovwButton ovwController" title\x3d"${NLS_show}" dojoattachpoint\x3d"_controllerDiv" dojoattachevent\x3d"onclick: _visibilityHandler"\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"ovwButton ovwMaximizer" title\x3d"${NLS_maximize}" dojoattachpoint\x3d"_maximizerDiv" dojoattachevent\x3d"onclick: _maximizeHandler"\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/OverviewMap","dojo/_base/declare dojo/_base/lang dojo/_base/connect dojo/_base/html dojo/has dojo/dom-class dojo/dom-style dojo/dnd/Moveable dijit/_Widget dijit/_Templated ../map ../geometry/Point ../geometry/ScreenPoint ../layers/TiledMapServiceLayer ../layers/DynamicMapServiceLayer ../layers/VectorTileLayer ../layers/ArcGISTiledMapServiceLayer ../layers/ArcGISDynamicMapServiceLayer ../layers/ArcGISImageServiceLayer ../layers/OpenStreetMapLayer ../virtualearth/VETiledLayer ../kernel ../config ../domUtils dojo/text!./templates/OverviewMap.html dojo/i18n!../nls/jsapi".split(" "),
function(k,l,c,r,m,e,f,t,u,v,w,n,x,y,z,A,q,B,C,D,E,F,p,g,G,H){k=k([u,v],{declaredClass:"esri.dijit.OverviewMap",widgetsInTemplate:!0,templateString:G,constructor:function(a,b){l.mixin(this,H.widgets.overviewMap);a=a||{};if(a.map){var d={};b&&(this._detached=!0,d=r.coords(b,!0));this.map=a.map;this.baseLayer=a.baseLayer;this.width=a.width||d.w||this.map.width/4;this.height=a.height||d.h||this.map.height/4;this.attachTo=a.attachTo||"top-right";this.expandFactor=a.expandFactor||2;this.color=a.color||
"#000000";this.opacity=a.opacity||.5;this.maximizeButton=!!a.maximizeButton;this.visible=!!a.visible;if(this.map.loaded)this._initialSetup();else var h=c.connect(this.map,"onLoad",this,function(){c.disconnect(h);h=null;this._initialSetup()});this._detached&&(this.visible=!0);this._maximized=!1}else console.error("esri.dijit.OverviewMap: "+this.NLS_noMap)},startup:function(){this.inherited(arguments);(!this.domNode.parentNode||9>m("ie")&&"DIV"!==this.domNode.parentNode.nodeName)&&this.map.container.appendChild(this.domNode);
this._detached?(f.set(this._body,"display","block"),f.set(this._controllerDiv,"display","none"),f.set(this._maximizerDiv,"display","none"),this.map.loaded?this._initialize():c.connect(this.map,"onLoad",this,this._initialize)):("bottom"===this.attachTo.split("-")[0]&&this.domNode.insertBefore(this._maximizerDiv,this._controllerDiv),this.maximizeButton||e.add(this._maximizerDiv,"ovwDisabledButton"),e.add(this.domNode,{"top-left":"ovwTL","top-right":"ovwTR","bottom-left":"ovwBL","bottom-right":"ovwBR"}[this.attachTo]),
e.add(this._controllerDiv,"ovwShow"),e.add(this._maximizerDiv,"ovwMaximize"),this.visible&&this.map.loaded&&(this.visible=!1,this.show()));f.set(this._focusDiv,"opacity",this.opacity)},destroy:function(){this._deactivate();this.overviewMap&&this.overviewMap.destroy();this.overviewMap=this.baseLayer=null;this.inherited(arguments)},resize:function(a){!a||0>=a.w||0>=a.h||this._resize(a.w,a.h)},show:function(){if(!this.visible){var a=this._controllerDiv;a.title=this.NLS_hide;e.remove(a,"ovwShow");e.add(a,
"ovwHide");g.show(this._body);g.show(this._maximizerDiv);this._initialize();this.visible=!0}},hide:function(){if(this.visible){var a=this._controllerDiv;a.title=this.NLS_show;e.remove(a,"ovwHide");e.add(a,"ovwShow");this._maximized&&this._maximizeHandler();g.hide(this._body);g.hide(this._maximizerDiv);this._deactivate();this.visible=!1}},_initialSetup:function(){if(this._mainMapLayer=this.map.getLayer(this.map.layerIds[0])){var a=this.baseLayer||this._mainMapLayer,b=this.map.spatialReference,d=a.spatialReference;
if(d.wkid!==b.wkid&&d.wkt!==b.wkt)console.error("esri.dijit.OverviewMap: "+this.NLS_invalidSR);else{b=a.declaredClass;if(a instanceof y)if(-1!==b.indexOf("VETiledLayer"))this.baseLayer=new E({resourceInfo:a.getResourceInfo(),culture:a.culture,mapStyle:a.mapStyle,bingMapsKey:a.bingMapsKey});else if(-1!==b.indexOf("OpenStreetMapLayer"))this.baseLayer=new D({tileServers:a.tileServers});else if(-1!==b.indexOf("WebTiledLayer")){var b=a.initialExtent,d=a.fullExtent,h=a.tileInfo;this.baseLayer=new a.constructor(a.urlTemplate,
{initialExtent:b&&new b.constructor(b.toJson()),fullExtent:d&&new d.constructor(d.toJson()),tileInfo:h&&new h.constructor(h.toJson()),tileServers:a.tileServers&&a.tileServers.slice(0)})}else this.baseLayer=new q(a.url,{resourceInfo:a.getResourceInfo()});else if(a instanceof z)-1!==b.indexOf("ArcGISImageServiceLayer")?this.baseLayer=new C(a.url):(this.baseLayer=new B(a.url),this.baseLayer.setImageFormat("png24"));else if(a instanceof A)this.baseLayer=new q("https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer",
{});else{console.error("esri.dijit.OverviewMap: "+this.NLS_invalidType);return}!this._detached&&this.visible&&this._controllerDiv&&(a=function(){this.visible=!1;this.show()},this.baseLayer.loaded?a.call(this):c.connect(this.baseLayer,"onLoad",this,a))}}else console.error("esri.dijit.OverviewMap: "+this.NLS_noLayer)},_visibilityHandler:function(){this.visible?this.hide():this.show()},_maximizeHandler:function(){var a=this._maximizerDiv;this._maximized?(a.title=this.NLS_maximize,e.remove(a,"ovwRestore"),
e.add(a,"ovwMaximize"),this._resize(this.width,this.height)):(a.title=this.NLS_restore,e.remove(a,"ovwMaximize"),e.add(a,"ovwRestore"),this._resize(this.map.width,this.map.height));this._maximized=!this._maximized},_resize:function(a,b){f.set(this._body,{width:a+"px",height:b+"px"});a=p.defaults.map.panDuration;b=this.overviewMap;p.defaults.map.panDuration=0;b&&(b.resize(!0),b.centerAt(this._focusExtent.getCenter()));p.defaults.map.panDuration=a},_initialize:function(){if(this.overviewMap)this._activate();
else{var a,b;b=9>m("ie")?this._body.firstChild:this._body.firstElementChild;this.overviewMap=a=new w(b,{slider:!1,showAttribution:!1,logo:!1,lods:this._overviewLods,wrapAround180:this.map.wrapAround180});c.connect(a,"onLoad",this,function(){this._map_resize_override=l.hitch(a,this._map_resize_override);a.disableMapNavigation();this._activate()});a.addLayer(this.baseLayer)}},_activate:function(){var a=this.map,b=this.overviewMap;this._moveableHandle=new t(this._focusDiv);this._soeConnect=c.connect(a,
"onExtentChange",this,this._syncOverviewMap);this._ufoConnect=c.connect(a,"onPan",this,this._updateFocus);this._oecConnect=c.connect(b,"onExtentChange",this,this._ovwExtentChangeHandler);this._opaConnect=c.connect(b,"onPan",this,this._ovwPanHandler);this._ozsConnect=c.connect(b,"onZoomStart",this,function(){g.hide(this._focusDiv)});this._ozeConnect=c.connect(b,"onZoomEnd",this,function(){g.show(this._focusDiv)});this._omsConnect=c.connect(this._moveableHandle,"onMoveStop",this,this._moveStopHandler);
this._syncOverviewMap(a.extent,null,null,null)},_deactivate:function(){c.disconnect(this._soeConnect);c.disconnect(this._ufoConnect);c.disconnect(this._oecConnect);c.disconnect(this._opaConnect);c.disconnect(this._ozsConnect);c.disconnect(this._ozeConnect);c.disconnect(this._omsConnect);this._moveableHandle&&(this._moveableHandle.destroy(),this._moveableHandle=null)},_syncOverviewMap:function(a,b,d,c){this._suspendPanHandling?this._suspendPanHandling=!1:(this._focusExtent=a,this.overviewMap.setExtent(a.expand(this.expandFactor),
!0))},_updateFocus:function(a){this._suspendPanHandling||(this._focusExtent=a,this._drawFocusDiv(a))},_drawFocusDiv:function(a,b){var d=this.overviewMap,c=d.toScreen(new n(a.xmin,a.ymax,d.spatialReference)),d=d.toScreen(new n(a.xmax,a.ymin,d.spatialReference));a=d.x-c.x;var d=d.y-c.y,e=!0;a>this.overviewMap.width&&d>this.overviewMap.height&&(e=!1);f.set(this._focusDiv,{left:c.x+(b?b.x:0)+"px",top:c.y+(b?b.y:0)+"px",width:a+"px",height:d+"px",display:e?"block":"none"})},_moveStopHandler:function(a){var b=
this._moveableHandle.node.style;a=this._focusExtent;var d=this.overviewMap,b=d.toMap(new x(parseInt(b.left,10),parseInt(b.top,10))),c=new n(a.xmin,a.ymax,d.spatialReference);this._focusExtent=a.offset(b.x-c.x,b.y-c.y);this._maximized?this._maximizeHandler():d.centerAt(this._focusExtent.getCenter());this._suspendPanHandling=!0;this.map.setExtent(this._focusExtent)},_ovwExtentChangeHandler:function(){this._drawFocusDiv(this._focusExtent)},_ovwPanHandler:function(a,b){this._drawFocusDiv(this._focusExtent,
b)}});m("extend-esri")&&l.setObject("dijit.OverviewMap",k,F);return k});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/PluginLayers","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/dom-construct dojo/Deferred dojo/promise/all dojo/dom dojo/dom-attr dojo/dom-class dojo/dom-style dojo/query dojo/store/Memory dojo/store/Observable dojo/Evented dojo/has ./ItemTypes ../../request ../../kernel ../../lang dgrid/OnDemandGrid dgrid/Selection ./AnalysisRegistry dojo/i18n!../../nls/jsapi".split(" "),function(p,e,h,m,t,F,u,v,w,G,q,x,y,z,A,c,r,B,k,C,D,g,n){var l=p([z],{infoPanelTemplate:'\x3cdiv\x3e\x3cdiv class\x3d"template-info-showing"\x3e\x3cdiv\x3e\x3cimg width\x3d\'16px\' height\x3d\'16px\' alt\x3d\'\' src\x3d\'${item.iconUrl}\'\x3e\x3c/div\x3e\x3ch4\x3e${item.title}\x3c/h4\x3e\x3cdiv class\x3d"template-info"\x3e\x3cp class\x3d""\x3e${item.snippet}\x3c/p\x3e${item:plugIn._showLayers}\x3cdiv id\x3d"${item.id}_details" class\x3d"quiet-scroll layer-container"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"panel-actions"\x3e${item:plugIn._addLayerToMap}\x3cbutton class\x3d"btn blue btn-main disabled" id\x3d"add-layer"\x3e${i18n.common.addLayerBtnLabel}\x3c/button\x3e\x3cbutton class\x3d"btn btn-cancel" id\x3d"close-panel"\x3e${i18n.common.close}\x3c/button\x3e\x3c/div\x3e\x3cdiv\x3e',
geometryTypes:[g.GeometryTypes.Point,g.GeometryTypes.Point.MultiPoint,g.GeometryTypes.Line,g.GeometryTypes.Polygon],layerTypes:[c.FLAYER,c.BDATAFEATURE,c.BTABLE,c.TABLE],timeTypes:[g.TimeTypes.Instant,g.TimeTypes.Interval],checkGeometryType:!0,checkLayerType:!1,checkTimeFilter:!1,fetchType:['type:"'+c.MS+'"','type:"'+c.FS+'"'],constructor:function(a){e.mixin(this,a);this.filters={all:{},mycontent:{owners:this.self?[this.self.user.username]:[]},esriBoundaryLayers:{owners:["esri_boundaries"]}};this.i18n=
e.mixin({},n.browseLayersDlg);e.mixin(this.i18n,n.browseItems);e.mixin(this.i18n,n.common);this.filterStrings={all:{title:this.self&&this.self.isPortal?this.i18n.items.portalOrg:this.i18n.items.organizationLabel},mycontent:{title:this.i18n.items.contentLabel},esriBoundaryLayers:{title:this.i18n.esriBoundaryLayers}}},fetchData:function(){this._portal=this.parent._portal;this._user=this._portal.getPortalUser();this.filters.mycontent.owner=this._user;this.parent.fetchType&&(this.fetchType=this.parent.fetchType);
return this._fetchItems()},_fetchItems:function(){return this.parent._fetchItems({types:this.fetchType})},_fetchServiceInfo:function(a){var b=new t,c,f={f:"json"};a.url?(-1!==window.location.protocol.indexOf("https:")&&(a.url=a.url.replace("http:","https:")),r({url:a.url,content:f}).then(function(a){b.resolve(a)},e.hitch(this,function(f){c=f.details&&f.details.length?f.details.shift():"";f&&403===f.httpCode&&-1<c.indexOf("SSL Required")?(a.set("url",a.url.replace("http:","https:")),this._fetchServiceInfo(a).then(function(a){b.resolve(a)})):
(a.isLoaded=!0,b.resolve({error:f}))}))):b.resolve(null);return b},_addLayerToMap:function(a){return a.type===c.BIGDATA||a.type===c.CSV||a.type===c.XLS?"":'\x3cdiv class\x3d"esriFloatLeading esriLeadingPadding1 padding-trailer-half js-add-layer-node"\x3e\x3clabel\x3e\x3cinput name\x3d"addlayertomap" class\x3d"js-add-layer-checkbox" type\x3d"checkbox"\x3e\x3cspan class\x3d"esriLeadingPadding1"\x3e'+this.i18n.common.addLayer+"\x3c/span\x3e\x3c/label\x3e\x3c/div\x3e"},_showLayers:function(a){if(a&&-1!==
h.indexOf([c.FS,c.MS,c.IS,c.BIGDATA,c.CSV,c.XLS],a.type)){if(a.type===c.CSV||a.type===c.XLS)a.url=a.itemUrl;this.plugIn._fetchServiceInfo(a).then(e.hitch(this,function(b){var d=[],f={f:"json"};b.layers&&(d=[].concat(d).concat(b.layers));b.tables&&0<b.tables.length&&(d=[].concat(d).concat(b.tables));b.children&&(d=b.children);!a||a.type!==c.CSV&&a.type!==c.XLS&&a.type!==c.IS||(d=[a]);if(!d.length)var E=this.plugIn.i18n.noDataMessages.noItemInfo;this.plugIn._createLayerGrid(m.create("div",null,u.byId(a.id+
"_details")),E);h.forEach(d,function(b,d){a.type===c.BIGDATA?(b.url=a.url+"/"+b.name,b.url=encodeURI(b.url)):b.url=a.type===c.CSV?a.itemUrl:a.type===c.IS?a.url:a.url+"/"+d;-1!==window.location.protocol.indexOf("https:")&&(b.url=b.url.replace("http:","https:"));r({url:b.url,content:f}).then(e.hitch(this,function(a){b=e.mixin(b,a);this.plugIn._store.put(b);this.plugIn._grid.refresh()}),e.hitch(this,function(a){this.plugIn._grid.noDataMessage=this.plugIn.i18n.noDataMessages.noLayerInfo;this.plugIn._grid.refresh()}))},
this)}))}return""},_getLayerHead:function(){return"\x3ctr\x3e\x3cth\x3e\x3c/th\x3e\x3cth\x3eLayer Name\x3c/th\x3e\x3cth\x3e Geometry Type\x3c/th\x3e\x3c/tr\x3e"},_getLayerNode:function(a,b,c){b=a.name;var f='\x3ctr\x3e\x3ctd\x3e\x3cinput type\x3d"checkbox" class\x3d"js-layer-check" name\x3d"layers" value\x3d"'+b+' checked"\x3e\x3c/td\x3e\x3ctd\x3e',d="\x3c/td\x3e\x3ctd\x3e"+a.geometryType+"\x3c/td\x3e\x3c/tr\x3e";return a.itemUrl||a.url?f+'\x3ca class\x3d"'+(c||"")+'"\x3e'+b+"\x3c/a\x3e"+d:f+b+d},
_createLayerGrid:function(a,b){var d=p([C,D]);this._store=y(new x({idProperty:"name"}));this._atleastALayerAvailable=!1;this._grid=new d({store:this._store,query:e.hitch(this,function(a){var b=!0,f=!0,d=!0,e=!0;this.checkGeometryType&&a.type!==c.IS&&(d=-1!==h.indexOf(this.geometryTypes,a.geometryType));this.checkTimeFilter&&(b=-1!==h.indexOf(this.timeTypes,this.getTimeType(a)));this.checkLayerType&&(f=-1!==h.indexOf(this.layerTypes,a.type));"function"===typeof this.customCheckHandler&&(e=this.customCheckHandler(a));
a=a&&d&&b&&f&&e;a||(this._grid.noDataMessage=this.getNoDataMessage({geomCheck:d,timeCheck:b,typeCheck:f,customCheck:e}));!this._atleastALayerAvailable&&a&&(this._atleastALayerAvailable=a);q(".js-add-layer-checkbox",this.parent.infoPanel).forEach(function(a){v.set(a,"disabled",!this._atleastALayerAvailable)},this);return a}),selectionMode:"single","class":"esriAnalysisLayersGrid quiet-scroll",noDataMessage:b||this.i18n.noValidLayerMsg,allowSelect:e.hitch(this,function(a){var b;this.checkLayerType&&
a.data&&(b=-1!==h.indexOf(this.layerTypes,a.data.type));b=a.data.geometryType?-1!==h.indexOf(this.geometryTypes,a.data.geometryType)||this.checkLayerType&&b:!0;return a&&a.data&&b}),renderRow:e.hitch(this,this._renderer)},a);this._grid.startup();this._grid.on("dgrid-select,dgrid-deselect",e.hitch(this,function(a){a=a.grid.selection;var b,c=[];for(b in a)a[b]&&c.push(this._grid.row(b).data);b={selection:c};q(".panel-actions .btn-main",this.parent.infoPanel).forEach(function(a){w.toggle(a,"disabled",
0===c.length)},this);c[0]&&(this._selectedLayer=c[0]);this.emit("layer-change",b)}))},hasTimeInfo:function(a){return a&&a.timeInfo},getTimeType:function(a){return a?k.isDefined(a.timeInfo)&&k.isDefined(a.timeInfo.startTimeField)&&!k.isDefined(a.timeInfo.endTimeField)?g.TimeTypes.Instant:k.isDefined(a.timeInfo)&&k.isDefined(a.timeInfo.startTimeField)&&k.isDefined(a.timeInfo.endTimeField)?g.TimeTypes.Interval:k.isDefined(a.time)&&k.isDefined(a.time.timeType)?a.time.timeType:!1:!1},getNoDataMessage:function(a){if(a.geomCheck)if(a.timeCheck){if(!a.typeCheck)return this.i18n.noDataMessages.typeCheckFailure;
if(!a.customCheck)return this.customCheckFailureMessage}else return this.i18n.noDataMessages.timeCheckFailure;else return this.i18n.noDataMessages.geomCheckFailure},getDateFields:function(a){return h.filter(a&&a.fields||[],function(a){return a&&"esriFieldTypeDate"===a.type})},_renderer:function(a){a.snippet=a.snippet||"";var b=m.create("div"),c=this._getLabel(a);m.place('\x3cdiv class\x3d"panel panel-white panel-bordered panel-compact border-bottom-clear"\x3e\x3ch5 class\x3d"trailer-0 font-size-0 word-break"\x3e\x3ca\x3e'+
a.name+'\x3c/a\x3e\x3c/h5\x3e\x3cnav class\x3d"inline-block"\x3e\x3ca class\x3d"link-gray font-size--2 esriTrailingPadding1 esriTrailingMargin05"\x3e\x3cspan class\x3d"'+c.icon+'"\x3e\x3c/span\x3e'+c.name+"\x3c/a\x3e"+(a.timeInfo||a.time&&"instant"===a.time.timeType?'\x3ca class\x3d"link-gray font-size--2 esriTrailingPadding1" data-action\x3d"timeSettings" data-layerid\x3d"0"\x3e\x3cspan class\x3d"esri-icon-time-clock"\x3e\x3c/span\x3e'+this.i18n.timeEnabled+"\x3c/a\x3e":'\x3ca class\x3d"esriTrailingPadding1"\x3e\x3c/a\x3e')+
"\x3c/nav\x3e\x3c/div\x3e",b);return b},_getLabel:function(a){var b={icon:"",name:""},d=a.geometryType;d===g.GeometryTypes.Point||d===g.GeometryTypes.MultiPoint?(b.name=this.i18n.points,b.icon="esri-icon-map-pin"):d===g.GeometryTypes.Polygon?(b.name=this.i18n.areas,b.icon="esri-icon-polygon"):d===g.GeometryTypes.Line?(b.name=this.i18n.lines,b.icon="esri-icon-polyline"):a.type===c.IS?(b.name=this.i18n.imageService,b.icon="esri-icon-layers"):(b.name=this.i18n.table,b.icon="esri-icon-table");return b}});
e.mixin(l,{add:function(a,b){a.plugIn||(b=b||{},b.parent=a,b.self=a.self,a.plugIn=new l(b))},remove:function(a){a.plugIn&&(a.plugIn.destroy(),delete a.plugIn)}});A("extend-esri")&&e.setObject("dijit.analysis.PluginLayers",l,B);return l});
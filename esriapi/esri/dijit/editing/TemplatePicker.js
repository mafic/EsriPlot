// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/editing/templates/TemplatePicker.html":'\x3cdiv class\x3d"templatePicker"\x3e\r\n\r\n  \x3ctable dojoType\x3d"dojox.grid.DataGrid" noDataMessage\x3d"${emptyMessage}" selectionMode\x3d"none" autoHeight\x3d"${_rows}" autoWidth\x3d"${_autoWidth}"\r\n         query\x3d"{ query: \'*\' }" dojoAttachPoint\x3d"grid" class\x3d"grid"\x3e\r\n  \x3c/table\x3e\r\n  \r\n\x3c/div\x3e'}});
define("esri/dijit/editing/TemplatePicker","dojo/_base/declare dojo/_base/lang dojo/_base/connect dojo/_base/html dojo/_base/array dojo/_base/json dojo/_base/kernel dojo/has dojo/query dojo/sniff dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/dom-style dijit/_Widget dijit/_Templated dojo/data/ItemFileReadStore dojox/grid/DataGrid dojox/gfx ../../layers/FeatureLayer ../../symbols/SimpleMarkerSymbol ../../symbols/PictureMarkerSymbol ../../symbols/SimpleFillSymbol ../../symbols/SimpleLineSymbol ./TemplatePickerItem ../../kernel ../../lang ../../request ../_EventedWidget dojo/i18n!../../nls/jsapi dojo/text!./templates/TemplatePicker.html".split(" "),function(G,
n,h,z,f,A,B,r,U,H,C,D,t,u,I,J,K,L,V,M,E,v,F,N,O,P,w,Q,R,S,T){var x=G([R,I,J],{declaredClass:"esri.dijit.editing.TemplatePicker",widgetsInTemplate:!0,templateString:T,featureLayers:null,items:null,grouping:!0,showTooltip:!1,maxLabelLength:0,rows:4,_rows:0,columns:3,surfaceWidth:30,surfaceHeight:30,emptyMessage:"",useLegend:!0,legendCache:{},_uniqueId:{id:0},_assumedCellWidth:90,_initialAutoWidth:300,_initialAutoHeight:200,_ieTimer:150,constructor:function(a,b){a=a||{};a.items||a.featureLayers||console.error("TemplatePicker: please provide 'featureLayers' or 'items' parameter in the constructor");
this._dojo14x=4<=B.version.minor;this._itemWidgets={};a.featureLayers&&a.featureLayers.length&&(this._flChanged=1);this._nls=S.widgets.templatePicker;this.emptyMessage=a.emptyMessage||this._nls&&this._nls.creationDisabled||""},postMixInProperties:function(){this.inherited(arguments);this._preprocess()},startup:function(){this.inherited(arguments);if("auto"===this.rows&&"auto"===this.columns){var a=t.getContentBox(this.domNode);a.w||(this.domNode.style.width=this._initialAutoWidth+"px");if(!a.h||1>=
a.h)this.domNode.style.height=this._initialAutoHeight+"px";a=t.getContentBox(this.domNode);this._columns=Math.floor(a.w/this._assumedCellWidth)||1}this._applyGridPatches();this._setGridLayout();h.connect(this.grid,"onRowClick",this,this._rowClicked);this._setGridData();this._toggleTooltip();9>r("ie")&&(this._repaintItems=n.hitch(this,this._repaintItems),setTimeout(this._repaintItems,this._ieTimer))},destroy:function(){this.showTooltip=!1;this._toggleTooltip();this._clearLegendInfo();this.featureLayers=
this.items=this.grid=this._flItems=this._itItems=this._groupRowIndices=this._selectedCell=this._selectedInfo=this._selectedItem=null;this.inherited(arguments)},getSelected:function(){return this._selectedCell?this._selectedItem:null},clearSelection:function(){var a=this._selectedCell,b=this._selectedInfo;a&&this._rowClicked({cellNode:a,rowIndex:b.selRow,cellIndex:b.selCol})},update:function(a){a="auto"===this.rows&&"auto"===this.columns&&a?!0:!1;var b=this.grid,d;if(a){d=this.domNode;var c;c=B.query("#"+
d.id+".templatePicker div.item")[0];d=t.getContentBox(d);c=(c=c&&c.parentNode)?z.coords(c).w:this._assumedCellWidth;this._columns=(this._columns=Math.floor((d.w-b.views.views[0].getScrollbarWidth())/c))||1}c=this._rows;this._preprocess();var e=this._rows;this._setGridLayout();this._setGridData();e!==c&&b.set("autoHeight",this._rows,!1);a?(b._resize({w:d.w,h:d.h}),b.viewsHeaderNode.style.display="none"):b.update();this._toggleTooltip();var k=this,g=this.getSelected();g&&b.store.fetch({onComplete:function(a){var d=
(a=k._locate(g,k._selectedInfo,a))&&b.views.views[0].getCellNode(a[0],a[1]);d&&k._rowClicked({cellNode:d,rowIndex:a[0],cellIndex:a[1]},!0)}});9>r("ie")&&setTimeout(this._repaintItems,this._ieTimer);a=this.featureLayers;d=this.items;a&&a.length||d&&d.length||!b||!this.emptyMessage||b.showMessage(this.emptyMessage)},_eventMap:{"selection-change":!0},onSelectionChange:function(){},_setUseLegendAttr:function(a){var b=this.useLegend;this._started&&b===a||(a?this._flChanged=1:this._clearLegendInfo());this.useLegend=
a},_setFeatureLayersAttr:function(a){var b=this.featureLayers;this._started&&b===a||(this._flChanged=1);this.featureLayers=a},_adjustRowsCols:function(a){if("auto"===this.rows&&"auto"===this.columns)this._started||(this._rows=!1,this._columns=null,this._autoWidth=!1);else{var b=0;this._rows=this.rows;this._columns=this.columns;"auto"===this.rows?(this.featureLayers?this.grouping?(b=a.length,f.forEach(a,function(a){b+=Math.ceil(a.length/this.columns)},this)):(f.forEach(a,function(a){b+=a.length},this),
b=Math.ceil(b/this.columns)):b=Math.ceil(a.length/this.columns),this._rows=b):"auto"===this.columns&&(this.featureLayers?this.grouping?b=3:(f.forEach(a,function(a){b+=a.length},this),b=Math.ceil(b/this.rows)):b=Math.ceil(a.length/this.rows),this._columns=b)}},_preprocess:function(){this.items&&(this.grouping=!1);this._autoWidth=!1;if("auto"===this.rows||"auto"===this.columns)this._autoWidth=!0;var a;if(this.featureLayers)if(this.useLegend&&this._flChanged&&(this._legendIndices=[],this._loadingIndices=
[],this._legendSymbols={},this._ignoreLegends(),this._loadingLegends=[],clearTimeout(this._legendTimer),this._legendTimer=null,this._processSelectionLayers(),this._flChanged=0),f.every(this.featureLayers,function(a){return a.loaded}))this.featureLayers=f.filter(this.featureLayers,function(a){return!(a.hasZ&&!a.enableZDefaults)}),a=this._flItems=this._getItemsFromLayers(this.featureLayers),this._adjustRowsCols(a);else{var b=this.featureLayers.length;f.forEach(this.featureLayers,function(a){if(a.loaded)b--;
else var c=h.connect(a,"onLoad",this,function(){h.disconnect(c);c=null;b--;b||this.update()})},this)}else a=this._itItems=this._getItemsFromItems(this.items),this._adjustRowsCols(a)},_processSelectionLayers:function(){var a,b,d,c,e,k,g,m={};f.forEach(this.featureLayers,function(e,g){e.mode===M.MODE_SELECTION&&e._map&&e.url&&e._params.drawMode&&!e.source&&(b=n.trim(e._url.path).replace(/\/(MapServer|FeatureServer).*/ig,"/MapServer").replace(/^https?:\/\//ig,"").toLowerCase(),d=m[b]=m[b]||{},c=d.featureLayers=
d.featureLayers||{},k=d.indices=d.indices||[],c[g]=e,k.push(g),a=e._map)});a&&f.forEach(a.layerIds,function(c){(c=a.getLayer(c))&&c.url&&(c.getImageUrl||c.getTileUrl)&&c.loaded&&10.1<=c.version&&(b=n.trim(c._url.path).replace(/(\/MapServer).*/ig,"$1"),e=b.replace(/^https?:\/\//ig,"").toLowerCase(),m[e]&&!m[e].mapServiceUrl&&(d=m[e],d.mapServiceUrl=b,d.mapServiceLayer=c,this._legendIndices=this._legendIndices.concat(d.indices),g=this._fetchLegend({pickerInstance:this,info:d},e),g.then?(this._loadingIndices=
this._loadingIndices.concat(d.indices),this._loadingLegends.push(g)):this._processLegendResponse(g,d)))},this)},_fetchLegend:function(a,b){var d=x.prototype,c=d.legendCache[b];c?c.then&&c._contexts.push(a):(c=d.legendCache[b]=Q({url:a.info.mapServiceUrl+"/legend",content:{f:"json"},callbackParamName:"callback"}),c._contexts=[a],c.addBoth(function(a){if(!c.canceled){d.legendCache[b]=a;var e=c._contexts;c._contexts=null;f.forEach(e,function(b){var d=b.pickerInstance;b=b.info;var e;d._destroyed||(f.forEach(b.indices,
function(a){e=f.indexOf(d._loadingIndices,a);-1<e&&d._loadingIndices.splice(e,1)}),e=f.indexOf(d._loadingLegends,c),-1<e&&d._loadingLegends.splice(e,1),d._processLegendResponse(a,b))})}}));return c},_clearLegendInfo:function(){clearTimeout(this._legendTimer);this._ignoreLegends();this._legendIndices=this._loadingIndices=this._legendSymbols=this._loadingLegends=this._legendTimer=null},_ignoreLegends:function(){this._loadingLegends&&f.forEach(this._loadingLegends,function(a){var b=-1;f.some(a._contexts,
function(a,c){a.pickerInstance===this&&(b=c);return-1<b},this);-1<b&&a._contexts.splice(b,1)},this)},_processLegendResponse:function(a,b){if(!a||a instanceof Error){var d;f.forEach(b.indices,function(a){d=f.indexOf(this._legendIndices,a);-1<d&&this._legendIndices.splice(d,1)},this)}else f.forEach(b.indices,function(c){var d=b.featureLayers[c].layerId,e,m=b.mapServiceUrl+"/"+d+"/images/",p=b.mapServiceLayer._getToken(),q,l,h,y;this._legendSymbols[c]||(q=null,f.some(a.layers,function(a){a.layerId==
d&&(q=a);return!!q}),q&&(l=this._legendSymbols[c]={},f.forEach(q.legend,function(a){if((h=a.values)&&h.length)for(e=0;e<h.length;e++)l[h[e]]=a;else l.defaultSymbol=a;(y=a.url)&&!a._fixed&&(a._fixed=1,-1===y.search(/https?\:/)&&(a.url=m+y),p&&-1!==a.url.search(/https?\:/)&&(a.url+=(-1<a.url.indexOf("?")?"\x26":"?")+"token\x3d"+p))})))},this);var c=this;c._started&&!c._legendTimer&&(c._legendTimer=setTimeout(function(){clearTimeout(c._legendTimer);c._legendTimer=null;c._destroyed||c.update()},0))},
_applyGridPatches:function(){var a=this.grid,b=a.adaptWidth,d,c,e;a.adaptWidth=function(){d=this.views.views;for(c=0;e=d[c];c++)u.set(e.headerNode,"display","block");b.apply(this,arguments);for(c=0;e=d[c];c++)u.set(e.headerNode,"display","none")};if(this._dojo14x){if("auto"!==this.rows&&"auto"!==this.columns)var k=h.connect(a,"_onFetchComplete",this,function(){h.disconnect(k);this.grid.set("autoHeight",this._rows)});h.connect(a,"_onDelete",this,this._destroyItems);h.connect(a,"_clearData",this,this._destroyItems);
h.connect(a,"destroy",this,this._destroyItems);(a=a.focus)&&a.findAndFocusGridCell&&(a.findAndFocusGridCell=function(){return!1})}},_setGridLayout:function(){var a=function(a){return function(b,c){return this._cellGet(a,b,c)}},b=n.hitch(this,this._cellFormatter),d=[],c=this._columns,e;for(e=0;e<c;e++)d.push({field:"cell"+e,get:n.hitch(this,a(e)),formatter:b});a={cells:[d]};this.grouping&&(c={field:"groupName",colSpan:c,get:n.hitch(this,this._cellGetGroup),formatter:n.hitch(this,this._cellGroupFormatter)},
a.cells.push([c]));c=this.grid;b=L.prototype.rowsPerPage;c.set("rowsPerPage",this._rows>b?this._rows:b);c.set("structure",a)},_setGridData:function(){var a=[];if(this.grouping){this._groupRowIndices=[];var b,d,c=this._columns;f.forEach(this._flItems,function(e,f){a.push({});f=0===f?0:b+d+1;this._groupRowIndices.push(f);b=f;d=Math.ceil(e.length/c);a=a.concat(this._getStoreItems(e))},this)}else this.featureLayers?(f.forEach(this._flItems,function(b){a=a.concat(b)}),a=this._getStoreItems(a)):a=this._getStoreItems(this._itItems);
var e=new K({data:{items:a}});this.grid.setStore(e)},_toggleTooltip:function(){if(this.showTooltip){if(!this.tooltip){this.tooltip=D.create("div",{"class":"esriMapTooltip"},this.domNode);this.tooltip.style.display="none";this.tooltip.style.position="fixed";var a=this.grid;this._mouseOverConnect=h.connect(a,"onCellMouseOver",this,this._cellMouseOver);this._mouseOutConnect=h.connect(a,"onCellMouseOut",this,this._cellMouseOut)}}else this.tooltip&&(h.disconnect(this._mouseOverConnect),h.disconnect(this._mouseOutConnect),
D.destroy(this.tooltip),this.tooltip=null)},_rowClicked:function(a,b){var d=a.cellNode,c=a.rowIndex;a=a.cellIndex;var e=this._getCellInfo(d,c,a);if(e){var f=this.grid.store;if(!f.getValue(e,"loadingCell")&&(this._selectedCell&&C.remove(this._selectedCell,"selectedItem"),d!==this._selectedCell?(C.add(d,"selectedItem"),this._selectedCell=d,this._selectedItem={featureLayer:f.getValue(e,"layer"),type:f.getValue(e,"type"),template:f.getValue(e,"template"),symbolInfo:f.getValue(e,"symbolInfo"),item:this._getItem(e)},
this._selectedInfo={selRow:c,selCol:a,index1:f.getValue(e,"index1"),index2:f.getValue(e,"index2"),index:f.getValue(e,"index")}):this._selectedCell=this._selectedInfo=this._selectedItem=null,!b))this.onSelectionChange()}},_locate:function(a,b,d){var c=this.grid.store,e=Array(this._columns),k,g=b.index1,m=b.index2,p=b.index,h=a.item;f.some(d,function(a,b){return f.some(e,function(d,e){return(d=c.getValue(a,"cell"+e))&&(h?p===c.getValue(d,"index"):g===c.getValue(d,"index1")&&m===c.getValue(d,"index2"))?
(k=[b,e],!0):!1})});return k},_getCellInfo:function(a,b,d){if(a)return a=this.grid,b=a.getItem(b),a.store.getValue(b,"cell"+d)},_getItem:function(a){var b=this.items;if(b)return b[this.grid.store.getValue(a,"index")]},_cellMouseOver:function(a){var b=this.tooltip,d=a.cellNode,c=this._getCellInfo(d,a.rowIndex,a.cellIndex);if(b&&c){var e=this.grid.store;a=e.getValue(c,"template");var f=e.getValue(c,"type"),g=e.getValue(c,"symbolInfo"),e=e.getValue(c,"layer");a=(c=this._getItem(c))&&c.label+(c.description?
": "+c.description:"")||a&&a.name+(a.description?": "+a.description:"")||f&&f.name||g&&g.label+(g.description?": "+g.description:"")||(e&&e.name+": ")+"Default";b.style.display="none";b.innerHTML=a;d=z.coords(d.firstChild);u.set(b,{left:d.x+"px",top:d.y+d.h+5+"px"});b.style.display=""}},_cellMouseOut:function(){var a=this.tooltip;a&&(a.style.display="none")},_destroyItems:function(){var a=this._itemWidgets,b;for(b in a)a[b]&&(a[b].destroy(),delete a[b])},_repaintItems:function(){var a=this._itemWidgets,
b;for(b in a){var d=a[b];d&&d._repaint(d._surface)}},_getStoreItems:function(a){var b=this._uniqueId;a=f.map(a,function(a){return n.mixin({surfaceId:"tpick-surface-"+b.id++},a)});for(var d=a.length,c=0,e={},k=0,g,m=[],p=!0,h=this._columns;c<d;)p=!0,g="cell"+k,e[g]=a[c],c++,k++,0===k%h&&(p=!1,m.push(e),e={},k=0);p&&d&&m.push(e);return m},_getItemsFromLayers:function(a){var b=[];f.forEach(a,function(a,c){b.push(this._getItemsFromLayer(a,c))},this);return b},_getItemsFromLayer:function(a,b){var d=[];
if(this.useLegend&&-1<f.indexOf(this._loadingIndices,b))return[{label:this._nls&&this._nls.loading||"",symbol:null,layer:a,type:null,template:null,index1:b,index2:0,loadingCell:1}];var c=[],c=c.concat(a.templates);f.forEach(a.types,function(a){var b=a.templates;f.forEach(b,function(b){b._type_=a});c=c.concat(b)});var c=f.filter(c,w.isDefined),e=a.renderer;if(e){var k=e.declaredClass.replace("esri.renderer.","");if(0<c.length)f.forEach(c,function(c){var g=c.prototype;if(g){var h;if(h=this._isUnclassedRenderer(e)?
e.infos[0].symbol:e.valueExpression?this._createSimpleSymbol(a):e.getSymbol(g)||this._createSimpleSymbol(a)){var l=null,m;if(!(9>H("ie"))&&c.thumbnail&&c.thumbnail.imageData)l=new v(c.thumbnail);else if(this.useLegend&&-1<f.indexOf(this._legendIndices,b)){if(m=this._legendSymbols&&this._legendSymbols[b])switch(k){case "SimpleRenderer":l=m.defaultSymbol;break;case "UniqueValueRenderer":f.some(e.infos,function(a){a.symbol===h&&(l=m[a.value]);return!!l});break;case "ClassBreaksRenderer":f.some(e.infos,
function(a){a.symbol===h&&(l=m[a.maxValue]);return!!l})}l&&(g=A.fromJson(A.toJson(v.defaultProps)),g.url=l.url,g.imageData=l.imageData,g.contentType=l.contentType,g.width=l.width,g.height=l.height,w.isDefined(g.width)&&w.isDefined(g.height)||(g.width=15,g.height=15),l=new v(g))}d.push({label:this._trimLabel(c.name),symbol:l||h,legendOverride:!!l,layer:a,type:c._type_,template:c,index1:b,index2:d.length})}else switch(k){case "HeatmapRenderer":d.push({label:this._trimLabel(c.name),symbol:new E,legendOverride:!!l,
layer:a,type:c._type_,template:c,index1:b,index2:d.length})}}delete c._type_},this);else{var g=[];"TemporalRenderer"===k&&(e=e.observationRenderer)&&(k=e.declaredClass.replace("esri.renderer.",""));switch(k){case "SimpleRenderer":g=[{symbol:e.symbol,label:e.label,description:e.description}];break;case "UniqueValueRenderer":case "ClassBreaksRenderer":g=e.infos}d=f.map(g,function(c,d){return{label:this._trimLabel(c.label),description:c.description,symbolInfo:n.mixin({constructor:function(){}},c),symbol:c.symbol,
layer:a,index1:b,index2:d}},this)}}return d},_isUnclassedRenderer:function(a){return!!((a.hasVisualVariables("sizeInfo",!1)||a.hasVisualVariables("colorInfo",!1)||a.hasVisualVariables("opacityInfo",!1))&&a.addBreak&&a.infos&&1===a.infos.length)},_createSimpleSymbol:function(a){var b;switch(a.geometryType){case "esriGeometryPoint":case "esriGeometryMultipoint":b=new E;break;case "esriGeometryPolyline":b=new N;break;case "esriGeometryPolygon":b=new F;break;default:a.hasXYFootprint&&a.hasXYFootprint()&&
(b=new F)}return b},_getItemsFromItems:function(a){return f.map(a,function(a,d){a=n.mixin({index:d},a);a.label=this._trimLabel(a.label);return a},this)},_trimLabel:function(a){var b=this.maxLabelLength;b&&a&&a.length>b&&(a=a.substr(0,b)+"...");return a||""},_cellGet:function(a,b,d){return d?this.grid.store.getValue(d,"cell"+a):""},_cellFormatter:function(a){if(a){var b=this._itemWidgets,d=this.grid.store,c=d.getValue(a,"surfaceId"),e=b[c];e||(e=b[c]=new O({id:c,label:d.getValue(a,"label"),symbol:d.getValue(a,
"symbol"),legendOverride:d.getValue(a,"legendOverride"),surfaceWidth:this.surfaceWidth,surfaceHeight:this.surfaceHeight,template:d.getValue(a,"template")}));return e||""}return""},_cellGetGroup:function(a,b){if(!this._groupRowIndices)return"";a=f.indexOf(this._groupRowIndices,a);return b&&-1!==a?(b=this.featureLayers[a])&&(this.groupLabelFunction?this.groupLabelFunction(b):b.name)||"":""},_cellGroupFormatter:function(a){return a?"\x3cdiv class\x3d'groupLabel'\x3e"+a+"\x3c/div\x3e":""}});r("extend-esri")&&
n.setObject("dijit.editing.TemplatePicker",x,P);return x});
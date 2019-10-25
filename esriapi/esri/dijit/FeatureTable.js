// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/FeatureTable/templates/FeatureTable.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"${css.borderContainer}" data-dojo-attach-point\x3d "_gridBorderContainerNode" data-dojo-type\x3d"dijit/layout/BorderContainer" gutters\x3d"false"\x3e\r\n    \x3cdiv class\x3d"${css.contentPane}" data-dojo-attach-point\x3d "_leadingPaneNode" data-dojo-type\x3d"dijit/layout/ContentPane" data-dojo-props\x3d"region: \'leading\'"\x3e\r\n      \x3cdiv class\x3d"${css.grid}" data-dojo-attach-point\x3d"_gridNode"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"${css.contentPane} ${css.hidden}" data-dojo-attach-point\x3d "_centerPaneNode" data-dojo-type\x3d"dijit/layout/ContentPane" data-dojo-props\x3d"region: \'center\'"\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"${css.contentPane} ${css.hidden}" data-dojo-attach-point\x3d "_trailingPaneNode" data-dojo-type\x3d"dijit/layout/ContentPane" data-dojo-props\x3d"region: \'trailing\'"\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/FeatureTable","../kernel ../lang ./FeatureTable/Grid ./FeatureTable/storeUtils ./FeatureTable/dataUtils dojo/dom-class dojo/dom-construct dojo/dom-style dojo/aspect dojo/debounce dojo/has dojo/on dojo/string dojo/promise/all dojo/Deferred dojo/Evented dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/fx dojo/text!../dijit/FeatureTable/templates/FeatureTable.html dojo/i18n!../nls/jsapi dijit/_WidgetBase dijit/_OnDijitClickMixin dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/a11yclick dijit/Menu dijit/MenuItem dgrid/util/misc dijit/layout/BorderContainer dijit/layout/TabContainer dijit/layout/ContentPane dojo/query!css2 dojo/domReady!".split(" "),
function(G,H,y,w,h,z,t,A,B,x,C,p,I,J,q,u,K,f,k,L,M,N,O,P,Q,R,v,S,T,W,U,X,D){u=K([O,P,Q,R,u],{declaredClass:"esri.dijit.FeatureTable.Grid",baseClass:"esri-feature-table",templateString:M,featureLayer:null,map:null,fieldInfos:null,gridOptions:null,dateOptions:null,editable:!1,editOn:null,hiddenFields:null,outFields:null,menuFunctions:null,columnMenuFunctions:null,batchCount:50,syncSelection:!1,zoomToSelection:!1,showDataTypes:!1,showGridHeader:!0,showGridMenu:!0,showFeatureCount:!0,showColumnHeaderTooltips:!1,
showColumnHeaderTooltipsWithDescription:!1,showAttachments:!1,showStatistics:!0,showRelatedRecords:!1,showCyclicalRelationships:!1,filterIds:null,showFieldDetails:!1,showColumnHiderButton:!1,showDefaultSortMenuItem:!0,showExpressionFields:!1,loaded:!1,grid:null,layerInfo:null,dataStore:null,columns:null,featureCount:0,idProperty:"id",gridMenu:null,gridMenuAnchor:null,selectedRows:null,selectedRowIds:null,css:{button:"esri-feature-table-button",hidden:"esri-feature-table-hidden",select:"esri-feature-table-select",
borderContainer:"esri-feature-table-border-container",contentPane:"esri-feature-table-content-pane",grid:"esri-feature-table-grid",title:"esri-feature-table-title",loadingIndicator:"esri-feature-table-loading-indicator",cellLoadingIndicator:"esri-feature-table-cell-loading-indicator",menu:"esri-feature-table-menu",menuItem:"esri-feature-table-menu-item",menuOptions:"esri-feature-table-menu-options",columnHeader:"esri-feature-table-column-header",columnHeaderTitle:"esri-feature-table-column-header-title",
columnHeaderType:"esri-feature-table-column-header-type",columnHeaderClear:"esri-feature-table-column-header-clear",columnMenu:"esri-feature-table-column-menu",sortAscendingIcon:"esri-icon-ascending icon-ui-ascending",sortDescendingIcon:"esri-icon-descending icon-ui-descending",filterIcon:"esri-icon-filter icon-ui-filter",propertiesIcon:"esri-icon-properties icon-ui-properties",statisticsIcon:"esri-icon-statistics icon-ui-statistics",settingsIcon:"esri-icon-settings icon-ui-settings",columnHeaderTooltip:"esri-feature-table-column-header-tooltip",
lockedIcon:"esri-icon-locked icon-ui-locked",lockedIconContainer:"esri-locked-icon-container",downIcon:"esri-icon-down icon-ui-down",menuIcon:"esri-icon-menu icon-ui-menu",closeIcon:"esri-icon-close icon-ui-close",optionsMenu:"esri-feature-table-options-menu-container",relatedRecordsCell:"esri-feature-table-related-records-cell",relatedRecordsTitle:"esri-feature-table-related-records-title",relatedRecordsLink:"esri-related-records-link",attachmentsCell:"esri-feature-table-attachments-cell",attachmentsTitle:"esri-feature-table-attachments-title",
attachmentsLink:"esri-attachments-link",expressionsCell:"esri-feature-table-expressions-cell",expressionsTitle:"esri-feature-table-expressions-title",expressionsLink:"esri-expressions-link",dialog:"esri-feature-table-dialog",closeButton:"esri-dialog-close-button dijitButton",statisticsTableContainer:"esri-feature-table-statistics",statisticsHeader:"esri-statistics-header",statisticsBreak:"esri-break",statisticsHorizontalBreak:"esri-horizontal-break",statisticsAttrTable:"esri-attribute-table",statisticsAttrName:"esri-attribute-name",
statisticsAttrValue:"esri-attribute-value",leftMargin:"esri-feature-table-left-margin",dateValue:"esri-date-value"},_i18nStrings:N.widgets.FeatureTable,_layerInfos:null,_fieldInfos:null,_cachedIds:null,_defaultBatchCount:50,_defaultFeatureCount:2E3,_defaultDateOptions:{timeEnabled:!0,dateEnabled:!0,timePattern:null,datePattern:null},_defaultGridOptions:{allowSelectAll:!1,cellNavigation:!0,selectionMode:"extended",pagination:!1,allowTextSelection:!1,pageSizeOptions:[10,25,50],columnHider:!0,columnResizer:!0,
pagingDelay:300,keepScrollPosition:!0,queryRowsOverlap:0,sort:{field:"id",descending:!1}},_defaultSort:null,_defaultEditOn:"dblclick, keypress",_orderByFields:null,_showRelatedRecords:!1,_showAttachments:!1,_rollbackInfos:null,_statisticsDialog:null,_attachmentsDialog:null,_columnRules:null,_relatedGridInfos:null,_popupDateFormats:{shortDate:{datePattern:"M/d/y"},shortDateLE:{datePattern:"d/M/y"},longMonthDayYear:{datePattern:"MMMM d, y"},dayShortMonthYear:{datePattern:"d MMM y"},longDate:{datePattern:"EEEE, MMMM d, y",
selector:"date"},shortDateShortTime:{datePattern:"M/d/y",timePattern:"h:mm a",timeEnabled:!0},shortDateLEShortTime:{datePattern:"d/M/y",timePattern:"h:mm a",timeEnabled:!0},shortDateShortTime24:{datePattern:"M/d/y",timePattern:"H:mm",timeEnabled:!0},shortDateLEShortTime24:{datePattern:"d/M/y",timePattern:"H:mm",timeEnabled:!0},shortDateLongTime:{datePattern:"M/d/y",timePattern:"h:mm:ss a",timeEnabled:!0},shortDateLELongTime:{datePattern:"d/M/y",timePattern:"h:mm:ss a",timeEnabled:!0},shortDateLongTime24:{datePattern:"M/d/y",
timePattern:"H:mm:ss",timeEnabled:!0},shortDateLELongTime24:{datePattern:"d/M/y",timePattern:"H:mm:ss",timeEnabled:!0},longMonthYear:{datePattern:"MMMM y"},shortMonthYear:{datePattern:"MMM y"},year:{datePattern:"y"}},constructor:function(a,b){b&&(this._rowSelectHandler=x(this._rowSelectHandler,0),this._rowDeselectHandler=x(this._rowDeselectHandler,0),this._refreshHandler=x(this._refreshHandler,0))},postMixInProperties:function(){this.inherited(arguments);this.set({columns:[],layerInfo:{},selectedRows:[],
selectedRowIds:[],hiddenFields:this.hiddenFields||[],outFields:this.outFields||["*"],fieldInfos:this.fieldInfos||[],menuFunctions:this.menuFunctions||[],columnMenuFunctions:this.columnMenuFunctions||[],gridOptions:f.mixin({},this._defaultGridOptions,this.gridOptions),dateOptions:f.mixin({},this._defaultDateOptions,this.dateOptions),_fieldInfos:[],_cachedIds:[],_columnRules:{},_relatedGridInfos:[]});C("touch")&&!this.editOn?this.set("editOn",v):this.editOn||this.set("editOn",this._defaultEditOn);this.filterIds&&
0===this.filterIds.length&&(this.filterIds=null);this._noDataMessage=this.gridOptions.noDataMessage||this._i18nStrings.noData},startup:function(){this.inherited(arguments);var a=this.featureLayer;a&&a.loadError?this._showLoadError():this.domNode&&a.loaded?this._setUpDataForMainGrid():this.own(p(a,"load",f.hitch(this,function(){this._setUpDataForMainGrid()})),p(a,"error",f.hitch(this,function(){a.loaded||this._showLoadError()})))},destroy:function(){this.inherited(arguments);this._statisticsDialog&&
this._statisticsDialog.destroy();this._attachmentsDialog&&this._attachmentsDialog.destroy();this._grid&&this._grid._destroyColumns()},refresh:function(a){var b=a||this._grid,c=this._relatedGridInfos,d=c.length,e;b===this._grid&&0<d&&k.forEach(c,function(a,b){(e=c[d-1-b])&&e.grid&&this._removeGrid(e.grid)},this);return this._refreshStore({grid:b}).then(function(){b.refresh()})},resize:function(a){this._gridBorderContainerNode&&this._gridBorderContainerNode.resize();(a=a&&a.resize?a:this._grid)&&a.resize()},
clearSelection:function(a){(a=a||this._grid)&&a.clearSelection()},getRowDataById:function(a,b){if(b=b||this._grid)return b.getRowDataById(a)},filterSelectedRecords:function(a,b){b=(a=b||this._grid)?a.selectedRowIds:[];a&&b&&b.length&&this.filterRecordsByIds(a.selectedRowIds)},filterRecordsByIds:function(a,b){if(b=b||this._grid)this.filterIds=a,b.filterIds=a,a&&0!==a.length||(this.selectedRows=[],this.selectedRowIds=[],b.selectedFeatureCount=0,b.selectedRowIds=[],b.selectedRows=[]),this._refreshStore({grid:b}),
this.emit("filter",{ids:a||[]})},clearFilter:function(a){(a=a||this._grid)&&this.filterRecordsByIds(null,a)},getFeatureDataById:function(a){return a instanceof Array?h.queryLayerForFeature({layer:this.featureLayer,id:a}):h.queryLayerForFeatures({layer:this.featureLayer,ids:a})},selectRows:function(a,b,c){(c=c||this._grid)&&c.selectRows(a,b)},sort:function(a,b,c){c=c||this._grid;var d,e;c&&a&&(d=h.getOrderByString(a,b),e=h.getColumnFromFieldName({fieldName:a,grid:c}),this._sortField(c,{field:a,descending:b,
column:e,orderByFields:[d]}))},centerOnSelection:function(a){return(a||this._grid).centerOnSelection()},_setUpMainGrid:function(a,b){var c=new y({map:this.map,layer:a,layerInfo:b,idProperty:b.idProperty,customFieldInfos:this._getCustomFieldInfos(a)||this.fieldInfos,expressionInfos:this._getExpressionInfos(a),defaultSort:this._defaultSort,outFields:this.outFields,hiddenFields:this.hiddenFields,filterIds:this.filterIds,gridOptions:this.gridOptions,dateOptions:this.dateOptions,batchCount:this.batchCount,
editable:this.editable,editOn:this.editOn,css:this.css,showAttachments:this._showAttachments,showRelatedRecords:this._showRelatedRecords,showCyclicalRelationships:this.showCyclicalRelationships,showStatistics:this.showStatistics,showFieldDetails:this.showFieldDetails,showGridHeader:this.showGridHeader,showGridMenu:this.showGridMenu,showFeatureCount:this.showFeatureCount,showDataTypes:this.showDataTypes,showColumnHeaderTooltips:this.showColumnHeaderTooltips,showColumnHeaderTooltipsWithDescription:this.showColumnHeaderTooltipsWithDescription,
showColumnHider:this.showColumnHiderButton,syncSelection:this.syncSelection,menuFunctions:this.menuFunctions,showDefaultSortMenuItem:this.showDefaultSortMenuItem,columnMenuFunctions:this.columnMenuFunctions,showFilterMenuItems:this.showFilterMenuItems,showExpressionFields:this.showExpressionFields},this._gridNode);c.startup();this.set({_grid:c,grid:c.dGrid,gridMenu:c.optionsMenu,gridMenuAnchor:c.optionsMenuAnchor});this._wireUpGridEvents(c);c.showLoadingIndicator();c.updateNoDataMessage("");c.setHeaderTitle(this._i18nStrings.loadingData);
c.resize();this._setUpColumns({grid:c,layer:a});h.queryLayerForCount({layer:a,layerInfo:b}).then(f.hitch(this,function(d){c.set("featureCount",d);c.updateHeaderText();this._generateStore({grid:c,layer:a,layerInfo:b,count:d,filterIds:this.filterIds}).then(f.hitch(this,function(a){d||c.updateNoDataMessage(this._noDataMessage);this.set("dataStore",a);c.updateStore(a);c.hideLoadingIndicator();setTimeout(f.hitch(this,function(){this.resize()},200))})).otherwise(f.hitch(this,function(){this._showLoadError();
c.updateNoDataMessage(this._noDataMessage)}))})).otherwise(f.hitch(this,function(){this._showLoadError();c.updateNoDataMessage(this._noDataMessage)}))},_setUpDataForMainGrid:function(){var a=this.featureLayer,b=this.gridOptions,c=this.outFields;this._generateLayerInfo(a).then(f.hitch(this,function(d){var e=d.idProperty;d.hasRelatedRecords&&(this._showRelatedRecords=!!this.showRelatedRecords);d.hasAttachments&&(this._showAttachments=!!this.showAttachments);var g=b.sort&&b.sort.field?h.findFirst(a.fields,
"name",b.sort.field):null,g=g&&g.name?g.name:e,f=!(!b.sort||!b.sort.descending),m=h.getOrderByString(g,f);c=k.filter(c,function(b){return!!h.findFirst(a.fields,"name",b)},this);0===c.length&&c.push("*");this.layerInfo=d;this.idProperty=e;this._orderByFields=[m];this._defaultSort={attribute:g,descending:f};this._setUpMainGrid(a,d)}))},_getCustomFieldInfos:function(a){return(a=this._getPopupInfo(a))&&a.fieldInfos?this._updatePopupInfosDateFormat(a.fieldInfos):null},_getExpressionInfos:function(a){return(a=
this._getPopupInfo(a))&&a.expressionInfos?a.expressionInfos:null},_getPopupInfo:function(a){a=a.id||a.layerId||0;return(a=this._layerInfos?this._layerInfos[a]:null)?a.popupInfo:null},_generateLayerInfo:function(a){var b=new q,c=a.id||a.layerId||0,d=a.objectIdField;if(!d){var e=JSON.parse(a._json);e.uniqueIdField&&e.uniqueIdField.name&&(d=e.uniqueIdField.name)}d={idProperty:d,layerId:c,userIds:{}};a.credential&&(d.userIds[c]=a.credential.userId);d.userId&&(d.userIds[c]=d.userId);d.isFeatureCollection=
a._collection&&!0===a._collection||null===a.url&&null===a._url;d.typeIdField=a.typeIdField;d.types=a.types;d.editable=a.isEditable?a.isEditable():!!a.userIsAdmin||!1;d.editCapabilities=a.getEditCapabilities?a.getEditCapabilities():{};d.hasRelatedRecords=a.relationships&&0<a.relationships.length;d.supportsAdvancedQueryRelated=!(!a.advancedQueryCapabilities||!a.advancedQueryCapabilities.supportsAdvancedQueryRelated);d.hasAttachments=a.hasAttachments;d.queryAttachmentsSupported=!0;d=f.clone(d);b.resolve(d);
return b},_setUpColumns:function(a){var b=a.grid;a=a.layer;var c=a.fields,d,e;e=(d=a.getOutFields?a.getOutFields():["*"])&&d[0]&&"*"===d[0]?c:k.filter(c,function(a){return-1!==k.indexOf(d,a.name)});b===this._grid&&"*"!==this.outFields[0]&&(e=k.filter(e,f.hitch(this,function(a){return-1!==k.indexOf(this.outFields,a.name)})));H.isDefined(a.objectIdField)&&!h.findFirst(e,"name",a.objectIdField)&&(c=h.findFirst(c,"name",a.objectIdField))&&e.unshift(c);if(this.showExpressionFields){var g=this._getPopupInfo(a);
g&&g.expressionInfos&&(a=this._getCustomFieldInfos(a),k.forEach(a,function(a){var b=h.getExpressionInfo(g.expressionInfos,a.fieldName);b&&e.push({name:a.fieldName,alias:b.title,editable:!1,nullable:!1,type:b.returnType})}))}a=b._setUpColumns(e);b===this._grid&&this.set({columns:a.columns,_fieldInfos:a.fieldInfos})},_showLoadError:function(a){var b=a&&a.grid?a.grid:this._grid;a=a&&a.error?a.error:this._i18nStrings.dataError;b&&(b.hideLoadingIndicator(),b.setHeaderTitle(a));this.emit("error",{message:a})},
_wireUpGridEvents:function(a){a&&(a.on("load",f.hitch(this,function(b){a===this._grid&&this.set("loaded",b.loaded);this.emit("load",b.loaded)})),a.on("error",f.hitch(this,function(a){this._showLoadError();this.emit("error",a)})),a.on("row-select",f.hitch(this,this._rowSelectHandler,a)),a.on("row-deselect",f.hitch(this,this._rowDeselectHandler,a)),a.on("refresh",f.hitch(this,this._refreshHandler,a)),a.on("sort",f.hitch(this,this._sortField,a)),a.on("filter",f.hitch(this,function(a){this.emit("filter",
a)})),a.on("column-resize",f.hitch(this,function(a){this.emit("column-resize",a)})),a.on("column-state-change",f.hitch(this,function(a){this.emit("column-state-change",a)})),a.on("editor-show",f.hitch(this,function(a){this.emit("editor-show",a)})),a.on("editor-hide",f.hitch(this,function(a){this.emit("editor-hide",a)})),a.on("data-change",f.hitch(this,function(a){this.emit("data-change",a)})),a.on("edits-complete",f.hitch(this,function(a){this.emit("edits-complete",a)})),a.on("layer-click",f.hitch(this,
function(a){this.emit("layer-click",a)})),a.on("layer-selection-complete",f.hitch(this,function(b){a===this._grid&&this.syncSelection&&this._syncSelectionFromLayer({grid:a,features:b.features});this.emit("layer-selection-complete",b)})),a.on("layer-selection-clear",f.hitch(this,function(b){a===this._grid&&this.syncSelection&&this.clearSelection();this.emit("layer-selection-clear",b)})),a.on("layer-update-end",f.hitch(this,function(a){this.emit("layer-update-end",a)})),a.on("layer-refresh-tick",f.hitch(this,
function(a){this.refresh()})),a.on("show-selected-records",f.hitch(this,function(b){this.emit("show-selected-records",{grid:a,ids:b.ids});this.filterRecordsByIds(b.ids,a)})),a.on("clear-selection",f.hitch(this,function(){this.emit("clear-selection")})),a.on("clear-filter",f.hitch(this,this.clearFilter,a)),a.on("show-statistics",f.hitch(this,function(a){this._statisticsDialog=a.dialog;this.emit("show-statistics",{dialog:a.dialog,statistics:a.statistics})})),a.on("show-attachments",f.hitch(this,function(a){this._attachmentsDialog=
a.dialog;this.emit("show-attachments",{featureId:a.featureId,dialog:a.dialog,attachments:a.attachments})})),a.on("show-related-records",f.hitch(this,this._showRelatedRecordsCallback,a)),a.on("show-detailed-field-view",f.hitch(this,this._showDetailedFieldViewCallback,a)),a.on("add-attachment-complete",f.hitch(this,function(a){this.emit("add-attachment-complete",a)})),a.on("delete-attachment-complete",f.hitch(this,function(a){this.emit("delete-attachment-complete",a)})))},_wireUpRelatedGridEvents:function(a){a.grid.own(p(a.parentGrid,
"row-select",this._updateRelatedGridsHandler.bind(this,a)))},_updateRelatedGridsHandler:function(a,b){if(b.rows&&b.rows.length&&b.rows[0].data){var c=a.grid,d=a.parentGrid;a=a.relationship;var e=this._relatedGridInfos;b=b.rows[0];var g=e[e.length-1];if(g=g?g.grid:null){var n=c===g,m=parseInt(b.id,10),g=h.findFirst(c.layer.relationships,"id",a.id),V=h.findFirst(e,"grid",c),r=k.indexOf(e,V),E=d._getRelatedRecordsCount({featureId:m,relationshipId:a.id});0<E?(n||k.forEach(e,function(a,b){a.grid&&b>=r&&
(a.grid.emptyStore(),a.grid.set("featureCount",0),a.grid.updateHeaderText())}),e=a.keyField,"undefined"===typeof b.data[e]&&(e=d.layer.getField(e).name),h.getRelationshipWhereClause({layer:c.layer,originRelationship:a,destinationRelationship:g,keyValue:b.data[e]}).then(f.hitch(this,function(a){c.set({where:a,featureCount:E});c.updateHeaderText();this._refreshStore({grid:c}).then(function(a){n||setTimeout(function(){if(c.store){var a=c.store.data;if(a=a?a[Object.keys(a)[0]]:null)a=a.attributes[c.idProperty],
c.selectRows(a,!1)}},600)})}))):n?(c.emptyStore(),c.set("featureCount",0),c.updateHeaderText(),c.refresh()):(c.set("featureCount",0),c.updateHeaderText(),k.forEach(e,function(a,b){a=a.grid;b<r||(a.emptyStore(),a.set("featureCount",0),a.updateHeaderText(),a.refresh())}))}}},_generateStore:function(a){var b=a.grid,c=a.layer,d=a.layerInfo,e=a.where||null,f=a.orderByFields||null,n=a.count||null,h=a.filterIds||null;(a.store||b.store)&&b.emptyStore();return d.isFeatureCollection?this._generateStoreForFeatureCollection({grid:b,
layer:c,layerInfo:d}):c.advancedQueryCapabilities&&!c.advancedQueryCapabilities.supportsPagination?this._generateStoreForNonPaginatedLayer({grid:b,layer:c,layerInfo:d,where:e,orderByFields:f,count:n,filterIds:h}):this._generateCacheStore({grid:b,where:e,orderByFields:f,count:n,ids:h})},_generateCacheStore:function(a){var b=new q,c=a.grid,d;d=a.orderByFields?a.orderByFields:c===this._grid?this._orderByFields&&this._orderByFields.length?this._orderByFields:[h.getOrderByString(this._defaultSort.attribute,
this._defaultSort.descending)]:null;a=w.generateCacheStore({grid:c,layer:c.layer,ids:a.ids,where:a.where,orderByFields:d,count:a.count,getAttachments:this.showAttachments&&c.layerInfo.hasAttachments,getRelatedRecords:this.showRelatedRecords&&c.layerInfo.hasRelatedRecords});B.before(a,"query",function(a,b){c.showLoadingIndicator()});B.after(a,"query",function(a){a.then(function(a){a.attachmentInfos?c._updateAttachmentInfos(a.attachmentInfos):c.layerInfo.queryAttachmentsSupported=!1;a.relatedRecordInfos&&
(c.layerInfo.supportsAdvancedQueryRelated?c._updateRelatedRecordCounts(a.relatedRecordInfos):c._updateRelatedRecordInfos(a.relatedRecordInfos));c.hideLoadingIndicator()}).otherwise(function(){c.hideLoadingIndicator()});return a});b.resolve(a);return b},_generateMemoryStore:function(a){var b=a.grid,c=a.features;a=new q;c=w.generateMemoryStore({features:c,idProperty:this.idProperty});c.query=f.hitch(this,w.generateSort,b.dGrid,c);a.resolve(c);return a},_generateStoreForFeatureCollection:function(a){return this._generateMemoryStore({grid:a.grid,
features:a.layer.graphics})},_generateStoreForNonPaginatedLayer:function(a){var b=a.grid,c=a.layer,d=a.layerInfo,e=a.where||null,g=a.orderByFields||null;return(a=a.filterIds||null)&&a.length?this._generateCacheStore({grid:b,ids:a,where:e,orderByFields:g}):h.queryLayerForIds({layer:c,idProperty:d.idProperty,where:e}).then(f.hitch(this,function(a){d._cachedIds=a;b.layerInfo.cachedIds=a;return this._generateCacheStore({grid:b,ids:a,where:e,orderByFields:g})})).otherwise(f.hitch(this,function(){this._showLoadError()}))},
_refreshStore:function(a){var b=a.grid,c=b.filterIds,d=a.where||b.where||null,e=a.orderByFields,g=b.layer,n=b.layerInfo;b.showLoadingIndicator();b.updateNoDataMessage("");b.setHeaderTitle(this._i18nStrings.loadingData);return h.queryLayerForCount({layer:g,layerInfo:n,where:d}).then(f.hitch(this,function(a){b.set("featureCount",a);b.updateHeaderText();return this._generateStore({grid:b,layer:g,layerInfo:n,orderByFields:e,where:d,count:a,filterIds:c}).then(f.hitch(this,function(c){b===this._grid&&this.set("dataStore",
c);a||b.updateNoDataMessage(this._noDataMessage);b.updateStore(c);b.hideLoadingIndicator();return c}))})).otherwise(f.hitch(this,function(){this._showLoadError();b.updateNoDataMessage(this._noDataMessage);return null}))},_setEditableAttr:function(a){this._grid&&this._grid.set("editable",!!a);k.forEach(this._relatedGridInfos,function(b){b.grid.set("editable",!!a)})},_sortField:function(a,b){var c=b.column,d=parseInt(b.id,10),e=b.field,g=b.descending;b=b.orderByFields;a===this._grid&&(this._orderByFields=
b);a.emptyStore();c?a.updateSort([{attribute:e,columnId:d,fieldType:c.type,descending:g}]):a.updateSort([{attribute:e,descending:g}]);this._refreshStore({grid:a,orderByFields:b}).then(f.hitch(this,function(){this.emit("sort",{field:e,descending:g})}))},_rowSelectHandler:function(a,b){this.syncSelection&&this._syncSelectionFromGrid({grid:a,ids:a.selectedRowIds});a===this._grid&&(this.set({selectedRows:a.selectedRows,selectedRowIds:a.selectedRowIds}),this.emit("row-select",b))},_rowDeselectHandler:function(a,
b){var c=a.selectedRows;this.syncSelection&&(0<c.length?this._syncSelectionFromGrid({grid:a,ids:a.selectedRowIds}):a.layer.clearSelection(!0));a===this._grid&&(this.set({selectedRows:c,selectedRowIds:a.selectedRowIds}),this.emit("row-deselect",b))},_refreshHandler:function(a,b){a===this._grid&&this.emit("refresh",b)},_syncSelectionFromLayer:function(a){var b=a.features||[],c=(a.grid||this._grid).idProperty;0===b.length?this.clearSelection():(a=k.map(b,function(a){return a.attributes[c]}),h.compareIntArrays(a,
this.selectedRowIds)||(this.map&&this.zoomToSelection&&0<b.length&&(b=h.calculateExtentFromFeatures(b),this.map.setExtent(b)),this.selectRows(a,!0)))},_syncSelectionFromGrid:function(a){var b=a.grid||this._grid,c=b.layer,d=a.ids;a=c.getSelectedFeatures();var e=b.idProperty,g;a=k.map(a,function(a){return a.attributes[e]});h.compareIntArrays(d,a)||h.queryLayerForFeatures({grid:b,layer:c,ids:d}).then(f.hitch(this,function(a){a&&a.features&&(a=a.features,a.length&&(this.map&&this.zoomToSelection&&(g=
h.calculateExtentFromFeatures(a),this.map.setExtent(g)),h.selectFeaturesById({grid:b,ids:d})))}))},_showRelatedRecordsCallback:function(a,b){var c=b.columnId,d=b.relationship,e=b.keyFieldValue,g=b.row,n=b.count;b=[];var m,k;a===this._grid?(m=this._centerPaneNode,k=this._leadingPaneNode):(b=this._relatedGridInfos.length-1,b=this._relatedGridInfos[b],m=b.layout.centerContentPane,k=b.layout.leadingContentPane,this._removeButtonNode(b.closeButton),b.closeButton=null);this._addSmallRelatedRecordsColumn({grid:a,
relationship:d});a.showFieldDetails=!1;a.showFeatureCount=!1;a.updateSelectionMode("single");a.updateHeaderText();a.hideOptionsMenu();b=[this._shrinkGrid({grid:a,centerPane:m,leadingPane:k,columnId:c}),this._setUpDataForRelatedGrid({parentGrid:a,relationship:d})];J(b).then(f.hitch(this,function(b){var k=b[1].layer;b=m;var l,F;this._addHiddenColumnRules({grid:a,columnId:c});a.refresh();a.selectRows(g[a.idProperty],!0,!0);this._showPane(b);F=this._generateSubLayout(b.domNode);this.resize();this._generateLayerInfo(k).then(f.hitch(this,
function(b){this.emit("show-related-records",{grid:a,relationship:d,row:g});l=h.findFirst(k.relationships,"id",d.id);h.getRelationshipWhereClause({layer:k,originRelationship:d,destinationRelationship:l,keyValue:e}).then(f.hitch(this,function(c){this._setUpRelatedGrid({parentGrid:a,layer:k,layerInfo:b,relationship:d,where:c,layout:F,count:n})}))}))}))},_setUpDataForRelatedGrid:function(a){var b=a.relationship.relatedTableId;return this._setUpRelatedLayer({baseLayer:a.parentGrid.layer,layerId:b}).then(function(a){return{layer:a,
layerId:b}})},_generateSubLayout:function(a){var b=this.css,c=b.contentPane+" "+b.hidden,d,e;d=new U({className:b.borderContainer+" "+b.leftMargin,gutters:!1,design:"headline"});b=new D({className:b.contentPane,region:"leading"});c=new D({className:c,region:"center"});e=t.create("div",null,b.domNode);d.addChild(b);d.addChild(c);d.placeAt(a);d.startup();return{borderContainer:d,leadingContentPane:b,centerContentPane:c,containerNode:e}},_setUpRelatedGrid:function(a){var b=this,c=a.layer,d=a.layerInfo,
e=d.idProperty,g=a.parentGrid,n=a.relationship,m=a.layout,p=a.where||null,r=a.count||null;a=k.map(this._relatedGridInfos,function(a){return a.grid.layer.layerId});a.unshift(this._grid.layer.layerId);var q=[{label:this._i18nStrings.close,callback:function(){b._removeGrid(this)}}],l=new y({map:this.map,layer:c,layerInfo:d,idProperty:e,customFieldInfos:this._getCustomFieldInfos(c),expressionInfos:this._getExpressionInfos(c),defaultSort:{attribute:e,descending:!1},outFields:["*"],where:p,gridOptions:this.gridOptions,
dateOptions:this.dateOptions,batchCount:this.batchCount,editable:this.editable,editOn:this.editOn,css:this.css,showAttachments:!(!this.showAttachments||!d.hasAttachments),showRelatedRecords:!0,showCyclicalRelationships:this.showCyclicalRelationships,showStatistics:this.showStatistics,showFieldDetails:!1,showGridHeader:this.showGridHeader,showGridMenu:this.showGridMenu,showFeatureCount:this.showFeatureCount,showDataTypes:this.showDataTypes,showColumnHeaderTooltips:this.showColumnHeaderTooltips,showColumnHeaderTooltipsWithDescription:this.showColumnHeaderTooltipsWithDescription,
showColumnHider:this.showColumnHiderButton,menuFunctions:q,showFilterMenuItems:!1,showDefaultSortMenuItem:this.showDefaultSortMenuItem,syncSelection:!1,showExpressionFields:this.showExpressionFields,visibleLayerIds:a},m.containerNode);l.startup();this._wireUpGridEvents(l);this._wireUpRelatedGridEvents({grid:l,parentGrid:g,relationship:n});l.showLoadingIndicator();l.updateNoDataMessage("");l.setHeaderTitle(this._i18nStrings.loadingData);l.resize();e=this._generateColumnSwitcherButton(g);a=this._generateGridCloseButton(l);
this._relatedGridInfos.push({grid:l,parentGrid:g,layout:m,relationship:n,pickerButton:e,closeButton:a});this._setUpColumns({grid:l,layer:c});if(h.isValueEmpty(r))return h.queryLayerForCount({layer:c,layerInfo:d}).then(f.hitch(this,function(a){l.set("featureCount",a);l.updateHeaderText();this._generateStore({grid:l,layer:c,layout:m,layerInfo:d,where:p,count:a,filterIds:null}).then(f.hitch(this,function(b){a||l.updateNoDataMessage(this._noDataMessage);l.updateStore(b);l.hideLoadingIndicator()}))})).otherwise(f.hitch(this,
function(){this._showLoadError();l.updateNoDataMessage(this._noDataMessage)}));l.set("featureCount",r);l.updateHeaderText();this._generateStore({grid:l,layer:c,layout:m,layerInfo:d,where:p,count:r,filterIds:null}).then(f.hitch(this,function(a){r||l.updateNoDataMessage(this._noDataMessage);l.updateStore(a);l.hideLoadingIndicator()})).otherwise(f.hitch(this,function(){this._showLoadError();l.updateNoDataMessage(this._noDataMessage)}))},_setUpRelatedLayer:function(a){var b=new q,c=h.initFeatureLayer(a.baseLayer,
a.layerId);c.loaded?b.resolve(c):p(c,"load",function(){b.resolve(c)});return b},_showPane:function(a){a&&a.domNode&&z.remove(a.domNode,this.css.hidden)},_hidePane:function(a){a&&a.domNode&&z.add(a.domNode,this.css.hidden)},_shrinkGrid:function(a){var b=new q,c=a.grid,d=a.leadingPane,e=a.finalWidth||220;a=L.animateProperty({node:d.id,properties:{width:{start:function(){return d.domNode.getBoundingClientRect().width},end:function(){return e}}}}).play();p(a,"End",function(){b.resolve(c)});return b},
_growGrid:function(a){a=a.grid;var b,c,d;this._removeSmallRelatedRecordsColumn(a);this._removeHiddenColumnRules(a);a.showColumnHider&&a.showColumnHiderButton();a===this._grid?(c=this._centerPaneNode,d=this._leadingPaneNode,a.showFieldDetails=this.showFieldDetails,this.emit("hide-related-records")):(b=this._relatedGridInfos.length-1,b=this._relatedGridInfos[b],c=b.layout.centerContentPane,d=b.layout.leadingContentPane,b.closeButton=this._generateGridCloseButton(a));this._hidePane(c);d.domNode&&A.set(d.domNode,
"width","100%");a.updateSelectionMode(this.gridOptions.selectionMode);a.showFeatureCount=this.showFeatureCount;a.updateHeaderText();this.showGridMenu&&a.showOptionsMenu();a.resize();this.resize()},_removeGrid:function(a){if(a!==this._grid){var b=h.findFirst(this._relatedGridInfos,"grid",a),c=b.parentGrid,d=b.layout.borderContainer,e=b.layout.leadingContentPane;this._hidePane(b.layout.centerContentPane);e.domNode&&A.set(e.domNode,"width","100%");this._removeButtonNode(b.pickerButton);this._relatedGridInfos.pop();
a.destroy();d.destroy();this._growGrid({grid:c})}},_addHiddenColumnRules:function(a){var b=a.grid,c=a.columnId;a=b.getColumns();a=Object.keys(a);var d=[],e,d=k.map(a,function(a,d){e=d===c?"display: table-cell;":"display: none;";return b.styleColumn(a,e)});this._columnRules[b.id]=d},_removeHiddenColumnRules:function(a){k.forEach(this._columnRules[a.id],function(a){a.remove()});this._columnRules[a.id]=[]},_addSmallRelatedRecordsColumn:function(a){var b=a.grid,c=a.relationship.id,d=b.idProperty;b.columns.push({unhidable:!0,
label:"esriRelatedRecordsSmall",field:"esriRelatedRecordsSmall",get:function(a){a=b._getRelatedRecordsCount({featureId:a[d],relationshipId:c});return I.substitute(b._i18nStrings.parenValue,{value:a})}})},_removeSmallRelatedRecordsColumn:function(a){var b=a.columns;"esriRelatedRecordsSmall"===(b&&b[b.length-1]?b[b.length-1].field:null)&&(b.pop(),a.refresh())},_generateGridCloseButton:function(a){var b=this.css,b=t.create("div",{className:b.menuItem+" "+b.button+" "+b.closeIcon,tabIndex:0});t.place(b,
a._menuNode,"before");p(b,v,f.hitch(this,function(){this._removeGrid(a)}));return b},_generateColumnSwitcherButton:function(a){var b=a._gridHeaderNode.domNode,c=this._generateColumnSwitcherMenu(a);a=this.css;var d=this._i18nStrings,e;e=t.create("div",{title:d.columnSelectionMenu,"aria-label":d.columnSelectionMenu,className:a.menuItem+" "+a.button+" "+a.menuIcon,tabIndex:0},b);p(e,[v,"keydown"],f.hitch(this,function(a){var b=e.getBoundingClientRect(),d=b.top+b.height,b=this.isLeftToRight()?b.right-
b.width:b.right;c._openMyself({target:a.target,delegatedTarget:e,iframe:null,coords:{x:b,y:d}})}));return e},_generateColumnSwitcherMenu:function(a){var b=a.fieldInfos,c=this.css,d,e;d=new S({className:c.optionsMenu});k.forEach(a.columns,function(g){var n=parseInt(g.id,10),m=h.findFirst(b,"name",g.field);"esriRelatedRecords"===g.type||"esriRelatedRecordsSmall"===g.field||"esriAttachments"===g.type||"esriFieldTypeGUID"===m.type||"esriFieldTypeGlobalID"===m.type||-1!==k.indexOf(a._unsupportedFieldTypes,
m.type)||g.hidden||(e=new T({label:g.label||g.field,baseClass:c.menuItem,tabIndex:1}),p(e,v,f.hitch(this,function(){this._removeHiddenColumnRules(a);this._addHiddenColumnRules({grid:a,columnId:n});this.emit("column-focus-change",{fieldInfo:m,column:g})})),d.addChild(e))},this);d.startup();return d},_removeButtonNode:function(a){a&&a&&a.parentNode&&a.parentNode.removeChild(a)},_showDetailedFieldViewCallback:function(a,b){var c=b.columnId,d=b.fieldInfo;b=this._centerPaneNode;var e=this._leadingPaneNode,
g=e.domNode.getBoundingClientRect().width/6,h;a.showFeatureCount=!1;a.showFieldDetails=!1;a.updateHeaderText();a.hideOptionsMenu();this._shrinkGrid({grid:a,centerPane:b,leadingPane:e,columnId:c,finalWidth:g}).then(f.hitch(this,function(){h=this._generateColumnSwitcherButton(a);this._addHiddenColumnRules({grid:a,columnId:c});a.updateSelectionMode("single");a.refresh();this.resize();this.emit("show-detailed-field-view",{columnId:c,grid:a,fieldInfo:d,pickerButton:h})}))},_updatePopupInfosDateFormat:function(a){k.forEach(a,
function(a){a.format&&a.format.dateFormat&&(a.format.dateFormat=this._popupDateFormats[a.format.dateFormat])},this);return a}});C("extend-esri")&&f.setObject("dijit.FeatureTable",u,G);return u});
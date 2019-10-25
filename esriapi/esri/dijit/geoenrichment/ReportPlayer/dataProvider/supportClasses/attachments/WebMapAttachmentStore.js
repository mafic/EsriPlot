// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProvider/supportClasses/attachments/WebMapAttachmentStore","dojo/_base/declare dojo/_base/lang esri/dijit/geoenrichment/when esri/dijit/geoenrichment/ReportPlayer/dataProvider/supportClasses/attachments/AttributesUtil esri/dijit/geoenrichment/utils/requests/UniversalClient esri/dijit/geoenrichment/utils/ImageUtil ./AttachmentsUtil".split(" "),function(d,e,c,f,g,h,k){var l={_cache:{},getThumbnail:function(a){this._cache[a.url]||(this._cache[a.url]=
this._getDataURL(a));return this._cache[a.url]},_getDataURL:function(a){return 0===a.url.indexOf("data:")?a.url:g.request(a.url).then(function(b){return b&&b.Attachment&&h.base64DataToDataURL(b.Attachment,a.contentType)}).otherwise(function(){return null})}};return d(null,{supportsMultipleAreas:!1,_attachmentInfos:null,_feature:null,_fieldInfos:null,_attributes:null,constructor:function(a,b){this._feature=a;this._attachmentInfos=b},initialize:function(){this._tryGetFieldInfosAndAttributes();return c(this._attachmentInfos||
this._tryGetAttachmentInfos()).always(function(){return!!this._attachmentInfos}.bind(this))},_tryGetFieldInfosAndAttributes:function(){var a=this._feature.getLayer();this._fieldInfos=(a=this._feature.infoTemplate||a&&a.infoTemplate)&&a.info.fieldInfos||[];this._attributes=e.mixin({},this._feature.attributes)},_tryGetAttachmentInfos:function(){return c(k.getFeatureAttachmentInfos(this._feature),function(a){this._attachmentInfos=a}.bind(this))},getAttachments:function(){return this._attachmentInfos?
this._attachmentInfos.map(function(a){return{getThumbnail:function(){return l.getThumbnail(a)},getAttachmentUrl:function(){return a.url}}}):[]},getAttributes:function(){return f.composeAttributesFromFieldInfos(this._fieldInfos,this._attributes)},getNotes:function(){return[]},setCurrentAnalysisAreaIndex:null})});
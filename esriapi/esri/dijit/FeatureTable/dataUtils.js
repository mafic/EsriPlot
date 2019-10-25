// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/FeatureTable/dataUtils","dojo/_base/array dojo/_base/lang dojo/Deferred dojo/number dojo/string dojo/date/locale dojo/promise/all ../../config ../../graphic ../../numberUtils ../../request ../../ArcadeExpression ../../arcadeProfiles/popupProfile ../../layers/FeatureLayer ../../geometry/Extent ../../tasks/query ../../tasks/StatisticDefinition ../../tasks/QueryTask ../../tasks/RelationshipQuery dojo/i18n dojo/i18n!../../nls/jsapi".split(" "),function(g,x,r,t,I,y,z,J,A,B,m,C,u,n,v,
h,D,w,E,F,G){return{i18nStrings:G.widgets.FeatureTable,numericFieldTypes:["esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeSmallInteger"],statisticDefinitions:[{type:"count",name:"countField"},{type:"sum",name:"sumField"},{type:"min",name:"minField"},{type:"max",name:"maxField"},{type:"avg",name:"avgField"},{type:"stddev",name:"stddevField"}],_reExprField:/^\s*expression\//i,getOrderByString:function(a,b){return a+(b?" DESC":" ASC")},getWhereString:function(a,b){return a+
"\x3d'"+b+"'"},getRelationshipWhereClause:function(a){var b=a.layer,c=a.originRelationship,d=a.destinationRelationship,e=c.relationshipTableId||c.relatedTableId,c=c.keyFieldInRelationshipTable||c.keyField,f=d.keyFieldInRelationshipTable||d.keyField,p=b.layerId==e?f:c;a=this.getWhereString(p,a.keyValue);c=b._url.path;c=c.substring(0,c.lastIndexOf("/")+1);return m({url:c+e+"/query",content:{f:"json",outFields:["*"],returnGeometry:!1,where:a},handleAs:"json",callbackParamName:"callback"}).then(x.hitch(this,
function(a){if(a&&a.features&&a.features.length){var c=a.features,e=[],l="",q;g.forEach(c,function(a,k){if(a.attributes&&a.attributes[f])q=a.attributes[f];else{var h=b.getField(p)?b.getField(p).name:null;if(this.isValueEmpty(h)){var h=f.toUpperCase(),H=f.toLowerCase();q=a.attributes[h]||a.attributes[H]||null}else q=a.attributes[h]}-1===g.indexOf(e,q)&&(0<e.length&&k<c.length&&(l=l.concat(" OR ")),e.push(q),l=l.concat(this.getWhereString(d.keyField,q)))},this);return l}return null}))},isValueEmpty:function(a){return null===
a||" "===a||""===a||"undefined"===typeof a},findFirst:function(a,b,c){return g.filter(a,function(a){return a.hasOwnProperty(b)&&a[b]===c})[0]||null},compareIntArrays:function(a,b){a.sort();b.sort();var c=g.every(b,function(b){return-1!==g.indexOf(a,b)},this),d=g.every(a,function(a){return-1!==g.indexOf(b,a)},this);return c&&d},findFirstNumberColumn:function(a,b){var c;g.some(a,function(a,e){if(-1!==g.indexOf(this.numericFieldTypes,a.type)&&a.field!==b&&!a.hidden)return c=a,!0},this);return c},getRoundingPrecision:function(a){return 1E3<=
a?0:10<=a?2:0<=a?4:6},generateLinkFromString:function(a){var b=/^\s*(http?:\/\/([^\s]+))\s*$/i,c=/^\s*(https?:\/\/([^\s]+))\s*$/i;if("string"===typeof a){var d;b.test(a)?d=a.indexOf("http:"):c.test(a)&&(d=a.indexOf("https:"));-1<d&&-1===a.indexOf("href\x3d")&&(b=a.indexOf(" ",d),-1===b&&(b=a.length),c=a.substring(d,b),a=a.substring(0,d)+"\x3ca href\x3d'"+c+"' target\x3d'_blank'\x3e"+c+"\x3c/a\x3e"+a.substring(b,a.length))}return this.isValueEmpty(a)?"":a},isNumericFieldType:function(a){return-1!==
g.indexOf(this.numericFieldTypes,a)},isIntegerFieldType:function(a){return"esriFieldTypeInteger"===a||"esriFieldTypeSmallInteger"===a},isFloatFieldType:function(a){return"esriFieldTypeDouble"===a||"esriFieldTypeSingle"===a},getDomainValueFromRow:function(a){var b=a.fieldInfo.name,c=a.fieldInfo.domain,d=a.row;if("range"===c.type)return d[b];a=g.filter(c.codedValues,function(a){return a.hasOwnProperty("code")&&a.code==d[b]});return a[0]&&!this.isValueEmpty(a[0].name)?a[0].name:d[b]},getTypeValueFromRow:function(a){var b=
a.layerInfo.types,c=a.fieldInfo,d=a.row;a=b&&b[0];var e;a&&(e=d[c.name],c=this.isNumericFieldType(c.type),c=(a="string"===typeof a.id)&&c?e.toString():e,e=(e=this.findFirst(b,"id",c))?e.name:null);return e},getSubtypeDomainValue:function(a){var b=a.layerInfo,c=a.fieldInfo.name,d=a.row,e;a=(b=this.findFirst(b.types,"id",d[b.typeIdField]))?b.domains:null;if(!b||!a)return d[c];a[c]&&a[c].codedValues&&(e=g.filter(a[c].codedValues,function(a){return a.hasOwnProperty("code")&&a.code==d[c]}));return e&&
e[0]&&!this.isValueEmpty(e[0].name)?e[0].name:d[c]},mergeDictionaries:function(a,b){if(null===a||null===b)return a;for(var c in b){a[c]||(a[c]={});for(var d in b[c])a[c][d]=b[c][d]}return a},isCyclicalRelationship:function(a){return"esriRelCardinalityOneToOne"===a.cardinality||"esriRelCardinalityOneToMany"===a.cardinality&&"esriRelRoleDestination"===a.role},getColumnFromFieldName:function(a){return this.findFirst(a.grid.columns,"field",a.fieldName)},formatNumberForLocale:function(a,b){if(b){var c=
F.getLocalization("dojo.cldr","number");if(b.digitSeparator||!c||this.isValueEmpty(a))return isNaN(a)||null===a?null:t.format(a,b);a=isNaN(a)||null===a?null:t.format(a,b);return a.replace(new RegExp("\\"+c.group,"g"),"")}return isNaN(a)||null===a?null:B.format(a,b)},getCombinedDateTime:function(a,b){return new Date(a.getFullYear(),a.getMonth(),a.getDate(),b.getHours(),b.getMinutes(),b.getSeconds())},formatDateForLocale:function(a){var b=a.dateOptions||{},c=a.timestamp,d=a.fieldInfo,e=!1,f=!1;a={};
b=(e=d&&d.dateOptions?d.dateOptions:!1)||b;e=e&&this.isValueEmpty(b.dateEnabled)?!0:!!b.dateEnabled;f=!!b.timeEnabled;this.isValueEmpty(b.datePattern)||(a.datePattern=b.datePattern);this.isValueEmpty(b.timeEnabled)||this.isValueEmpty(b.timePattern)||(a.timePattern=b.timePattern);a.selector=e&&f?"date and time":e&&!f?"date":!e&&f?"time":"date";return y.format(new Date(c),a)},calculateExtentFromFeatures:function(a){var b=a[0].geometry,c,d,e,f;if(null===b&&1===a.length)return null;for(b=a.length-1;0<=
b;b--)null===a[b].geometry&&a.splice(b,1);b=a[0].geometry;c=b.getExtent();e=a.length;null===c&&(c=new v(b.x,b.y,b.x,b.y,b.spatialReference));for(f=1;f<e;f++)b=a[f].geometry,d=b.getExtent(),null===d&&(d=new v(b.x,b.y,b.x,b.y,b.spatialReference)),c=c.union(d);return c},initFeatureLayer:function(a,b){a=a._url.path;a=a.substring(0,a.lastIndexOf("/")+1);return new n(a+b,{mode:n.MODE_ONDEMAND,outFields:["*"],visible:!0})},applyEdits:function(a){var b=[],c=new r;if(!a||0>=a.length)return c.reject(),c;g.forEach(a,
function(a){a.layer&&b.push(a.layer.applyEdits(a.adds,a.updates,a.deletes,function(a,b,d){c.resolve({adds:a,updates:b,deletes:d})},function(a){c.reject(a)}))});0<b.length?z(b):c.reject();return c},applyEditsFromRow:function(a){var b=a.layer,c=new A;c.setAttributes(a.row);return this.applyEdits([{layer:b,updates:[c]}],null)},queryLayer:function(a){var b=a.layer;a=a.ids||null;var c=new h;c.where="1\x3d1";c.returnGeometry=!1;c.objectIds=a;return b.queryFeatures(c)},queryLayerForFeature:function(a){return this.queryLayerForFeatures({layer:a.layer,
ids:[a.id]})},queryLayerForFeatures:function(a){var b=a.layer,c=b.advancedQueryCapabilities,c=c&&c.supportsQueryWithCacheHint;a=a.ids;var d=new h;d.objectIds=a;d.outFields=["*"];c&&(d.cacheHint=!0);return b.queryFeatures(d,function(a){return a.features})},queryLayerForCount:function(a){var b=a.layer,c=b.advancedQueryCapabilities,c=c&&c.supportsQueryWithCacheHint;if(b.queryCount){var d=new h,e=a.layerInfo;a=a.where||"1\x3d1";d.returnGeometry=!1;d.returnCountOnly=!0;d.where=a;c&&(d.cacheHint=!0);return b.queryCount(d).then(function(a){return a}).otherwise(function(){return e.isFeatureCollection?
b.graphics.length:2E3}).always(function(a){return a})}return this.queryLayerCustom({layer:b,returnCountOnly:!0,cacheHint:c}).then(function(a){return a&&a.features?a.features.length:0}).otherwise(function(){return b.maxRecordCount||2E3}).always(function(a){return a})},queryLayerCustom:function(a){var b=new h,c=a.returnCountOnly||!1,d=a.where||"1\x3d1",e=a.returnGeometry||!1,f=a.outFields||["*"],g=a.cacheHint||!1;a=new w(a.layer.url);b.returnGeometry=e;b.outFields=f;b.where=d;b.returnCountOnly=c;g&&
(b.cacheHint=!0);return a.execute(b)},queryLayerForIds:function(a){var b=a.layer,c=b.advancedQueryCapabilities,c=c&&c.supportsQueryWithCacheHint,d=a.idProperty;a=a.where||"1\x3d1";var e=new h;e.returnGeometry=!1;e.outFields=[d];e.where=a;e.returnIdsOnly=!0;c&&(e.cacheHint=!0);return b.queryIds(e)},queryLayerForAttachments:function(a){return m({url:a.layer._url.path+"/queryAttachments",content:{f:"json",objectIds:a.ids},handleAs:"json",callbackParamName:"callback"})},queryLayerForAttachmentById:function(a){return a.layer.queryAttachmentInfos(a.id||
0)},addAttachmentToLayer:function(a){return a.layer.addAttachment(a.featureId,a.formData)},deleteAttachmentFromLayer:function(a){return a.layer.deleteAttachments(a.featureId,[a.attachmentId])},queryLayerForRelatedRecords:function(a){var b=a.layer,c=a.ids,d=a.outFields||["*"],e=a.relationship;a=a.returnCountOnly||!1;var f=new E;f.outFields=d;f.returnGeometry=!1;f.relationshipId=e.id;f.returnCountOnly=a;f.objectIds=c;return b.queryRelatedFeatures(f)},queryLayerForRelatedRecordCount:function(a){return m({url:a.layer._url.path+
"/queryRelatedRecords",content:{f:"json",objectIds:a.objectIds.toString(),outFields:a.outFields,returnGeometry:!1,relationshipId:a.relationship.id,returnCountOnly:!0},handleAs:"json",callbackParamName:"callback"})},getFieldStatistics:function(a){var b=new r,c=a.layer,d=c.advancedQueryCapabilities,d=d&&d.supportsQueryWithCacheHint,e=a.idProperty,f=a.where||"1\x3d1",p=a.filterIds,m=a.grid.columns[a.columnId].field;a=c.url;var n=[],k,l;l=g.map(this.statisticDefinitions,function(a){var b=new D;b.onStatisticField=
m;b.displayFieldName=m;b.outStatisticFieldName=a.name;b.statisticType=a.type;return b});k=new h;k.outFields=[m];k.outStatistics=[];k.where=f;k.outStatistics=l;d&&(k.cacheHint=!0);p&&0<p.length&&(n=p);k.where&&0<n.length&&(k.where="("+k.where+") AND ("+e+" IN ("+n.toString()+"))");c.source&&!this.isValueEmpty(c.source.mapLayerId)&&a.endsWith("/dynamicLayer")&&(a=a.slice(0,-13),a=a+"/"+c.source.mapLayerId);(new w(a)).execute(k).then(function(a){b.resolve(a)}).otherwise(function(){b.reject()});return b},
selectFeaturesById:function(a){var b=a.grid,c=b.layer,b=b.layerInfo,d=a.map,e=a.ids;a=a.id;var f=new h;f.returnGeometry=!!d;f.objectIds=e||[a];b.isFeatureCollection||(f.where="1\x3d1");return c.selectFeatures(f,n.SELECTION_NEW)},isFeatureEditable:function(a){var b=a.layerInfo;return!!a.layer.getEditCapabilities({userId:b.userIds[b.layerId]||null,feature:{attributes:a.attributes}}).canUpdate},isExpressionField:function(a){return this._reExprField.test(a)},getExpressionInfo:function(a,b){if(this.isExpressionField(b)){var c;
b=b.replace(this._reExprField,"");b=b.toLowerCase();g.some(a,function(a){a.name.toLowerCase()===b&&(c=a);return!!c});return c}},compileExpressions:function(a){var b={};g.forEach(a,function(a){var c=a.returnType&&a.returnType.toLowerCase();b[a.name]=new C({expression:a.expression,returnType:"number"===c?"number":"string",profile:u})});return b},getExpressionValue:function(a,b){var c=a.getLayer(),d=c&&c.getMap();return b?a.evaluateExpression(b,u.getEvalOptions({expression:b,feature:a,layer:c,map:d,
spatialReference:d&&d.spatialReference})):null}}});
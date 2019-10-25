// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/tasks/geoenrichment/GeoenrichmentTask","../../declare dojo/_base/array dojo/_base/lang dojo/dom-construct ./taskHelper ../FeatureSet ./EnrichParameters ./ReportParameters ../../urlUtils ../../IdentityManager ../../geometry/Point ../../geometry/Polygon ../../geometry/Polyline dojo/i18n!../../nls/jsapi".split(" "),function(v,w,h,l,f,x,n,p,q,y,z,A,B,m){function r(a){this.name="UserError";this.message=a||""}function t(a,b){return a.getAvailableCountries().then(function(a){for(var c=0;c<a.length;c++)if(a[c].id==
b)return a[c].name})}function u(a){a=a.getExtent();return new z((a.xmin+a.xmax)/2,(a.ymin+a.ymax)/2,a.spatialReference)}m=m.geoenrichment.task.GeoenrichmentTask;r.prototype=Error.prototype;return v("esri.tasks.geoenrichment.GeoenrichmentTask",null,{token:null,url:null,_query:null,constructor:function(a){if(a){var b=q.urlToObject(a);a=b.path;this._query=b.query}this.url=a||q.getProtocolForWebResource()+"//geoenrich.arcgis.com/arcgis/rest/services/World/GeoenrichmentServer"},enrich:function(a){var b=
this;return f.invokeMethod(this,"/Geoenrichment/enrich",function(){a instanceof n||(a=new n(a));return f.jsonToRest(a.toJson(),b._query)},function(a){(!a.results||1>a.results.length||!a.results[0].value||!a.results[0].value.FeatureSet||1>a.results[0].value.FeatureSet.length)&&f.throwEmptyResponse();var b={featureSets:[],messages:a.messages};a=a.results[0].value.FeatureSet;for(var d=0;d<a.length;d++)b.featureSets.push(new x(a[d]));return b},"onEnrichComplete","onError")},getAvailableCountries:function(){var a=
this;return f.invokeMethod(this,"/Geoenrichment/Countries",function(){return h.mixin({},a._query)},function(a){if(a.error)throw a.error;a=a.countries;for(var b=0;b<a.length;b++){var e=a[b].datasets;delete a[b].datasets;a[b].datasetIDs=e}return a},"onGetAvailableCountriesComplete","onError")},getDataCollections:function(a,b,c,e){var d;b?d="/GetDataCollections/execute":(d="/Geoenrichment/DataCollections",a&&(d+="/"+a));var k=this;return f.invokeMethod(this,d,function(){var g=h.mixin({},k._query);g.suppressNullValues=
!0;c&&(g.outFields=0===c.length?"none":JSON.stringify(c));b&&(a&&(g.sourcecountry=a),g.searchtext="id:"+b);e&&(g.addDerivativeVariables=JSON.stringify(e));return g},function(a){if(a.error)throw a.error;a=a.results||a.dataCollections||a.DataCollections;for(var b=0;b<a.length;b++)a[b]={id:a[b].dataCollectionID,metadata:a[b].metadata,variables:a[b].data};return a},"onGetDataCollectionsComplete","onError")},createReport:function(a){var b=this;y.getCredential(this.url).then(function(c){try{var e=l.create("form",
{target:"_blank",action:b.url+"/Geoenrichment/CreateReport",method:"post"});a instanceof p||(a=new p(a));var d=f.jsonToRest(a.toJson(),b._query);d.f="bin";d.token=c.token;for(var k in d)d.hasOwnProperty(k)&&l.create("input",{type:"hidden",name:k,value:d[k]},e);l.place(e,document.body);e.submit();l.destroy(e)}catch(g){b.onError(g)}},function(a){b.onError(a)})},getReports:function(a){var b=this;return t(this,a).then(function(a){return f.invokeMethod(b,"/Geoenrichment/Reports/"+a,function(){return h.mixin({},
b._query)},function(a){for(var b=0;b<a.reports.length;b++){var c=a.reports[b].reportID;delete a.reports[b].reportID;a.reports[b].id=c}return a.reports},"onGetReportsComplete","onError")})},getStandardGeographyLevels:function(a){function b(a){return f.invokeMethod(c,a,function(){return h.mixin({},c._query)},function(a){a=a.geographyLevels;for(var b=0;b<a.length;b++){var c=a[b];c.id=c.countryID;delete c.countryID;c.name=c.countryName;delete c.countryName;for(var c=c.datasets,d=0;d<c.length;d++){var e=
c[d];e.id=e.datasetID;delete e.datasetID;e.geographyLayers=e.levels;delete e.levels}}return a},"onGetStandardGeographyLevelsComplete","onError")}var c=this;return a?t(this,a).then(function(a){return b("/Geoenrichment/StandardGeographyLevels/"+a)}):b("/Geoenrichment/StandardGeographyLevels")},getServiceLimits:function(){var a=this;return f.invokeMethod(this,"/Geoenrichment/ServiceLimits",function(){return h.mixin({},a._query)},function(a){return a.serviceLimits.value},"onGetServiceLimitsComplete",
"onError")},getCountries:function(a){var b;switch(a.type){case "point":b=a;break;case "polyline":b=a.paths[0];a=new B(a.spatialReference);a.addPath(b);b=u(a);break;case "polygon":b=a.rings[0],a=new A(a.spatialReference),a.addRing(b),b=u(a)}return this.enrich({variables:["GlobalIntersect.*"],studyAreas:[{geometry:b}],forStorage:!1}).then(function(a){var b=[];a=a.featureSets[0].features;for(var c=0;c<a.length;c++){var f=a[c].attributes.sourceCountry;0>w.indexOf(b,f)&&b.push(f)}if(0===b.length)throw new r(m.noData);
return b})},onEnrichComplete:function(a){},onGetAvailableCountriesComplete:function(a){},onGetDataCollectionsComplete:function(a){},onCreateReportComplete:function(a){},onGetReportsComplete:function(a){},onGetStandardGeographyLevelsComplete:function(a){},onGetServiceLimitsComplete:function(a){},onError:function(a){}})});
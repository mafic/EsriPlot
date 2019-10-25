// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/templates/JobsList.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\r\n   \x3cdiv class\x3d"analysisCategoryCtr" style\x3d"overflow:auto;" data-dojo-attach-point\x3d"_tableDiv"\x3e\r\n    \x3ctable class\x3d"calciteWebTable table-striped"\x3e\r\n       \x3cthead\x3e\r\n         \x3ctr\x3e\r\n          \x3cth\x3e${i18n.toolName}\x3c/th\x3e\r\n          \x3cth\x3e${i18n.dateCreated}\x3c/th\x3e\r\n         \x3c/tr\x3e\r\n      \x3c/thead\x3e\r\n      \x3ctbody data-dojo-attach-point\x3d"_analysisJobTBody"\x3e\r\n      \x3c/tbody\x3e\r\n    \x3c/table\x3e\r\n   \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/analysis/JobsList","require dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/_base/Color dojo/_base/json dojo/date/locale dojo/has dojo/json dojo/on dojo/string dojo/dom-style dojo/dom-attr dojo/dom-construct dojo/query dojo/dom-class dojo/NodeList dojo/NodeList-dom dojo/_base/fx dojo/fx/easing dojo/Evented dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin dijit/registry dijit/form/Button dijit/form/CheckBox dijit/form/Form dijit/form/Select dijit/form/TextBox dijit/form/ToggleButton dijit/form/ValidationTextBox dijit/layout/ContentPane dijit/form/FilteringSelect dijit/Dialog dijit/ConfirmDialog dojox/mvc/at dgrid1/OnDemandGrid dgrid1/Tree dgrid1/Editor dgrid1/Keyboard dgrid1/Selection dgrid1/Selector dgrid1/extensions/ColumnResizer dgrid1/extensions/DijitRegistry ../../kernel ../../lang ./_Widget ./utils ./JobsViewModel dojo/i18n!../../nls/jsapi dojo/text!./templates/JobsList.html".split(" "),
function(b,v,c,d,w,x,y,f,g,z,h,A,B,C,e,D,E,F,G,H,I,J,k,l,m,n,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,aa,ba,ca,da,ea,p,fa,q,ga,r,t,u){b=q.createSubclass([k,l,m,n],{declaredClass:"esri.dijit.analysis.JobsList",templateString:u,widgetsInTemplate:!0,i18n:null,toolName:"JobsList",helpFileName:"AnalysisEnvironments",viewModelType:r,cssClass:{primaryButton:"btn calcite blue",button:"btn calcite",tableRow:"esriHelpPopup"},constructor:function(a,b){this._pbConnects=[];a.containerNode&&(this.container=a.containerNode);
this.cssClass=c.mixin({},this.cssClass)},destroy:function(){this.inherited(arguments)},postMixInProperties:function(){this.inherited(arguments);this.i18n={};c.mixin(this.i18n,t.common);this._initModelWatchers()},postCreate:function(){this.inherited(arguments);this.buildJobsList()},startup:function(){},buildJobsList:function(){d.forEach(this.viewModel.jobs,function(a){var b=e.create("tr",{"class":this.cssClass.tableRow},this._analysisJobTBody),d=e.create("td",{innerHTML:"\x3ca href\x3d'#'\x3e"+a.toolName+
"\x3c/a\x3e"},b);e.create("td",{innerHTML:this._formatTimeStamp(a.timestamp)},b);h(d,"click",c.hitch(this,this._openTool,a))},this)},_initModelWatchers:function(){this.own(this.viewModel.watch("jobs",c.hitch(this,this.buildJobsList)))},_openTool:function(a){this.viewModel.set("currentJob",a)},_formatTimeStamp:function(a){return f.format(new Date(a),{formatLength:"medium"})}});g("extend-esri")&&c.setObject("dijit.analysis.JobsList",b,p);return b});
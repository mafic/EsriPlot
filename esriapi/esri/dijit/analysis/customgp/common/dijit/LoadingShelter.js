// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/customgp/common/dijit/templates/LoadingShelter.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"loading-container"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"loadingNode" class\x3d"jimu-loading"\x3e\x3c/div\x3e\r\n      \x3cp data-dojo-attach-point\x3d"textNode"\x3e\x3c/p\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/analysis/customgp/common/dijit/LoadingShelter","dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dojo/text!./templates/LoadingShelter.html dojo/i18n!../nls/main dojo/_base/html".split(" "),function(c,d,e,f,g,a){return c([d,e],{baseClass:"jimu-loading-shelter",declaredClass:"esri.dijit.analysis.customgp.common.dijit.LoadingShelter",templateString:f,loadingText:null,hidden:!1,showLoading:!0,postMixInProperties:function(){this.nls=g.loadingShelter},postCreate:function(){this.inherited(arguments);
this.hidden&&a.setStyle(this.domNode,"display","none");a.setStyle(this.domNode,{width:"100%",height:"100%"});this.showLoading||a.setStyle(this.loadingNode,"display","none");"string"===typeof this.loadingText&&(this.textNode.innerHTML=this.loadingText)},show:function(b){this.domNode&&this.hidden&&("string"===typeof b&&(this.textNode.innerHTML=b),a.setStyle(this.domNode,"display","block"),this.hidden=!1)},hide:function(){this.domNode&&!this.hidden&&(a.setStyle(this.domNode,"display","none"),this.hidden=
!0)}})});
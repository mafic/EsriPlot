// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/templates/AnalysisToolItem.html":'\x3cdiv class\x3d\'${cssClass.root}\' data-dojo-attach-point\x3d"_toolCtr" style\x3d"cursor:pointer;cursor:hand;" data-dojo-attach-event\x3d"onclick:_handleToolIconClick"\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d\'_toolIcon\'\x3e\x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"_toolContent" class\x3d\'${cssClass.toolContent}\'\x3e\r\n    \x3ca  href\x3d"#" class\x3d\'${cssClass.helpLink}\' esriHelpTopic\x3d"toolDescription" data-dojo-attach-point\x3d"_helpIconNode"\x3e\x3c/a\x3e\r\n  \t\x3clabel data-dojo-attach-point\x3d\'_toolNameLabel\' class\x3d"${cssClass.toolNameLabel}" style\x3d"cursor:pointer;cursor:hand;"\x3e\x3c/label\x3e\r\n    \x3cp data-dojo-attach-point\x3d"_toolDesc" class\x3d"${cssClass.toolDesc}"\x3e\x3c/p\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d\'${cssClass.comingSoonContent}\' data-dojo-attach-point\x3d"optionsDiv" style\x3d"margin-top:0.5em;font-size:0.85em;"\x3e\x3clabel class\x3d"${cssClass.comingSoonLabel}"\x3e${i18n.comingSoonLabel}\x3c/label\x3e\x3c/div\x3e\t\r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/analysis/AnalysisToolItem","require dojo/_base/declare dojo/_base/lang dojo/_base/connect dojo/_base/event dojo/has dojo/dom-class dojo/dom-construct dojo/dom-attr dojo/dom-style dojo/Evented dijit/_WidgetBase dijit/_TemplatedMixin dijit/_OnDijitClickMixin dijit/_FocusMixin dijit/Tooltip ../../kernel dojo/i18n!../../nls/jsapi dojo/text!./templates/AnalysisToolItem.html".split(" "),function(e,h,c,w,k,f,b,x,l,d,m,n,p,q,r,t,u,g,v){e=h([n,p,q,r,m],{declaredClass:"esri.dijit.analysis.AnalysisToolItem",
templateString:v,widgetsInTemplate:!0,i18n:null,_helpIconNode:null,_toolIcon:null,_toolIconClass:null,_toolNameLabel:null,toolName:null,helpTopic:null,helpFileName:"Analysis",showHelp:!0,cssClass:{toolIcon:"toolIcon "},constructor:function(a,b){this._defaulCSSClass={root:"toolContainer",toolContent:"esriLeadingMargin5 toolContent",helpLink:"helpIcon esriFloatTrailing esriTrailingMargin2",comingSoonLabel:"esriLeadingMargin5 comingSoonIcon",comingSoonContent:"esriLeadingMargin2",toolNameLabel:"toolLabel",
toolDesc:"toolDesc",toolTip:"analysisTooltip"};this.cssClass=c.mixin(this.cssClass,this._defaulCSSClass);a.toolIcon&&(this._toolIconClass=this.cssClass.toolIcon+a.toolIcon);a.name&&(this.toolName=a.name,this.helpTopic=a.helpTopic)},postCreate:function(){this.inherited(arguments);this._toolNameLabel.innerHTML=this.toolName;b.add(this._toolIcon,this._toolIconClass);l.set(this._helpIconNode,"esriHelpTopic",this.helpTopic);d.set(this._helpIconNode,"display",this.showHelp?"block":"none");this.set("showComingSoonLabel",
!1);this.description&&(this._toolDesc.innerHTML=this.description);this.tooltip&&!f("esri-mobile")&&(this._tooltip=new t({connectId:[this._toolCtr],label:"\x3cdiv class\x3d'"+this.cssClass.toolTip+"'\x3e"+this.tooltip+"\x3c/div\x3e",showDelay:this.toolTipShowDelay?this.toolTipShowDelay:100}))},postMixInProperties:function(){this.inherited(arguments);this.i18n={};c.mixin(this.i18n,g.common);c.mixin(this.i18n,g.analysisTools)},_handleToolNameClick:function(){this.emit("tool-select",this)},_handleToolIconClick:function(a){k.stop(a);
this.emit("tool-select",this)},_setShowComingSoonLabelAttr:function(a){d.set(this.optionsDiv,"display",!0===a?"block":"none");b.toggle(this._toolCtr,"esriToolContainerDisabled",a);b.toggle(this._toolNameLabel,"esriTransparentNode",a);b.toggle(this._toolIcon,"esriTransparentNode",a);d.set(this._toolNameLabel,"cursor",!0===a?"default":"pointer");d.set(this._toolCtr,"cursor",!0===a?"default":"pointer")},_setCssClassAttr:function(a){this.cssClass=c.mixin(this.cssClass,a);this._toolCtr&&(b.replace(this._toolCtr,
this.cssClass.root),b.replace(this._toolContent,this.cssClass.toolContent),b.replace(this._helpIconNode,this.cssClass.helpLink),b.replace(this._toolNameLabel,this.cssClass.toolNameLabel),b.replace(this._toolDesc,this.cssClass.toolDesc))},_setDescriptionAttr:function(a){this._set("description",a)}});f("extend-esri")&&c.setObject("dijit.analysis.AnalysisToolItem",e,u);return e});
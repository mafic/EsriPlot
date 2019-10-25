// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/form/iso/gemet/templates/ThemePane.html":'\x3cdiv class\x3d"gxeGemetPane"\x3e\r\n\r\n  \x3cdiv class\x3d"gxeTop" data-dojo-attach-point\x3d"topNode"\x3e\r\n    \x3cdiv class\x3d"gxeLeft gxeFloatLeft"\x3e\r\n      \x3cselect data-dojo-attach-point\x3d"languageSelect" \r\n        data-dojo-attach-event\x3d"onchange: _onLanguageChange"\x3e\x3c/select\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"gxeRight gxeFloatRight"\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"gxeClear"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \r\n  \x3cdiv class\x3d"gxeOptions" data-dojo-attach-point\x3d"resultsNode"\x3e\x3c/div\x3e\r\n  \r\n  \x3cdiv class\x3d"gxeDialogActionBar" data-dojo-attach-point\x3d"bottomNode"\x3e\r\n    \x3cdiv class\x3d"gxeLeft gxeFloatLeft"\x3e\r\n      \x3cspan class\x3d"gxeMessage" data-dojo-attach-point\x3d"workingNode"\x3e${i18nIso.gemet.searching}\x3c/span\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"gxeRight gxeFloatRight gxeButtons"\x3e\r\n      \x3cbutton class\x3d"gxeButton prominent" data-dojo-attach-point\x3d"okButton"\r\n        data-dojo-attach-event\x3d"onclick: _onOkClick"\x3e${i18nBase.general.ok}\x3c/button\x3e\r\n      \x3cbutton class\x3d"gxeButton" data-dojo-attach-point\x3d"cancelButton"\r\n        data-dojo-attach-event\x3d"onclick: _onCancelClick"\x3e${i18nBase.general.cancel}\x3c/button\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"gxeClear"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n   \r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/form/iso/gemet/ThemePane","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/dom-construct dojo/has ../../../base/Templated dojo/text!./templates/ThemePane.html dojo/i18n!../../../nls/i18nBase dojo/i18n!../../../nls/i18nIso ../../../base/etc/docUtil ./gemet ../../../../../request ../../../../../kernel".split(" "),function(f,h,m,d,p,q,r,t,n,l,e,u,v){f=f([q],{checkBoxes:null,dialogBroker:null,gxeDocument:null,initiallySelectedValues:null,i18nBase:t,i18nIso:n,templateString:r,
gemetUrl:null,gemetInspireThemeThesaurus:null,initialLanguage:null,_activePromise:null,postCreate:function(){this.inherited(arguments);this.workingNode.style.display="none";this.checkBoxes=[];var a=this.gxeDocument.gxeContext;this.gemetUrl=a.gemetUrl;this.gemetInspireThemeThesaurus=a.gemetInspireThemeThesaurus;e.populateLanguages(this.gxeDocument,this.languageSelect);this.initialLanguage=e.getSelectedLanguage(this.languageSelect);this._query()},_addOption:function(a,c,b){var k="Unknown",g=null;a.preferredLabel&&
"string"===typeof a.preferredLabel.string&&(k=h.trim(a.preferredLabel.string));a.definition&&"string"===typeof a.definition.string&&(g=h.trim(a.definition.string),0===g.length&&(g=null));a=this.id+"_chk"+c;b=d.create("div",{"class":"gxeOption"},b);var e=k;c=m.some(this.initiallySelectedValues,function(a){if(a===e)return!0});var f={id:a,type:"checkbox",value:e};c&&(f.checked="checked");c=d.create("input",f,b);this.checkBoxes.push(c);a=d.create("label",{"for":a},b);l.setNodeText(a,k);null!==g&&0<g.length&&
(k=d.create("div",{"class":"gxeDescription gxeSmallText"},b),l.setNodeText(k,g))},_fetch:function(a,c){var b=this.gemetUrl+"/getConceptsMatchingRegexByThesaurus",b=b+("?thesaurus_uri\x3d"+encodeURIComponent(this.gemetInspireThemeThesaurus)),b=b+("\x26language\x3d"+encodeURIComponent(a)),b=b+("\x26regex\x3d"+encodeURIComponent(c));return u({url:b,handleAs:"json",callbackParamName:"jsonp"},{})},_handleError:function(a){this.workingNode.style.display="none";console.error(a);a=n.gemet.ioerror.replace("{url}",
this.gemetUrl);d.empty(this.resultsNode);var c=d.create("div",{"class":"gxeMessagePane"},this.resultsNode);d.create("div",{"class":"gxeIcon gxeIconError"},c);c=d.create("div",{"class":"gxeMessageText"},c);l.setNodeText(c,a)},_onCancelClick:function(a){this.onCancelClick(a)},onCancelClick:function(a){},_onLanguageChange:function(a){this._query()},_onOkClick:function(a){var c=[];a=null;m.forEach(this.checkBoxes,function(a){a.checked&&c.push(a.value)});0<c.length&&(a=e.getSelectedLanguage(this.languageSelect),
this.initialLanguage!==a&&e.saveSessionLanguage(a));this.onOkClick(c)},onOkClick:function(a){},_query:function(){var a=e.getSelectedLanguage(this.languageSelect);null===this._activePromise&&(this.workingNode.style.display="inline-block",d.empty(this.resultsNode),(this._activePromise=this._fetch(a,".")).then(h.hitch(this,function(a){this._activePromise=null;try{this._render(a)}catch(b){this._handleError(b)}}),h.hitch(this,function(a){this._activePromise=null;this._handleError(a)})))},_render:function(a){var c=
0,b=this.resultsNode;d.empty(b);this.checkBoxes=[];m.forEach(a,function(a,d){c++;this._addOption(a,d,b)},this);this.workingNode.style.display="none";0===c&&(d.empty(b),a=d.create("div",{"class":"gxeMessagePane"},b),d.create("div",{"class":"gxeIcon gxeIconWarning"},a),a=d.create("div",{"class":"gxeMessageText"},a),l.setNodeText(a,n.gemet.noMatch))}});p("extend-esri")&&h.setObject("dijit.metadata.form.iso.gemet.ThemePane",f,v);return f});
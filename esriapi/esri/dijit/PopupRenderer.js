// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/PopupRenderer","require dojo/_base/declare dojo/_base/connect dojo/_base/lang dojo/_base/array dojo/_base/kernel dojo/sniff dojo/query dojo/dom dojo/dom-attr dojo/dom-class dojo/dom-construct dojo/dom-style dojox/html/entities dijit/_Widget dijit/_Templated ../kernel ../lang ../urlUtils ./_EventedWidget dojo/i18n!../nls/jsapi dojo/NodeList-dom".split(" "),function(w,n,t,k,q,h,x,I,y,g,f,r,u,z,A,B,C,D,E,F,v){var G=0,d=v.widgets.popup,H=v.widgets.templatePicker;n=n([F,A,B],{declaredClass:"esri.dijit._PopupRenderer",
constructor:function(){this._nls=k.mixin({},d)},templateString:"\x3cdiv class\x3d'esriViewPopup'\x3e\x3cdiv class\x3d'statusSection hidden' dojoAttachPoint\x3d'_status'\x3e\x3c/div\x3e\x3cdiv class\x3d'mainSection'\x3e\x3cdiv class\x3d'header' dojoAttachPoint\x3d'_title'\x3e\x3c/div\x3e\x3cdiv class\x3d'hzLine'\x3e\x3c/div\x3e\x3cdiv dojoAttachPoint\x3d'_description'\x3e\x3c/div\x3e\x3cdiv class\x3d'break'\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d'attachmentsSection hidden'\x3e\x3cdiv\x3e${_nls.NLS_attach}:\x3c/div\x3e\x3cul dojoAttachPoint\x3d'_attachmentsList'\x3e\x3c/ul\x3e\x3cdiv class\x3d'break'\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d'mediaSection hidden'\x3e\x3cdiv class\x3d'header' dojoAttachPoint\x3d'_mediaTitle'\x3e\x3c/div\x3e\x3cdiv class\x3d'hzLine'\x3e\x3c/div\x3e\x3cdiv class\x3d'caption' dojoAttachPoint\x3d'_mediaCaption'\x3e\x3c/div\x3e\x3cdiv class\x3d'gallery' dojoAttachPoint\x3d'_gallery'\x3e\x3cdiv class\x3d'mediaHandle prev' dojoAttachPoint\x3d'_prevMedia' dojoAttachEvent\x3d'onclick: _goToPrevMedia'\x3e\x3c/div\x3e\x3cdiv class\x3d'mediaHandle next' dojoAttachPoint\x3d'_nextMedia' dojoAttachEvent\x3d'onclick: _goToNextMedia'\x3e\x3c/div\x3e\x3cul class\x3d'summary'\x3e\x3cli class\x3d'image mediaCount hidden' dojoAttachPoint\x3d'_imageCount'\x3e0\x3c/li\x3e\x3cli class\x3d'image mediaIcon hidden'\x3e\x3c/li\x3e\x3cli class\x3d'chart mediaCount hidden' dojoAttachPoint\x3d'_chartCount'\x3e0\x3c/li\x3e\x3cli class\x3d'chart mediaIcon hidden'\x3e\x3c/li\x3e\x3c/ul\x3e\x3cdiv class\x3d'frame' dojoAttachPoint\x3d'_mediaFrame'\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d'editSummarySection hidden' dojoAttachPoint\x3d'_editSummarySection'\x3e\x3cdiv class\x3d'break'\x3e\x3c/div\x3e\x3cdiv class\x3d'break hidden' dojoAttachPoint\x3d'_mediaBreak'\x3e\x3c/div\x3e\x3cdiv class\x3d'editSummary' dojoAttachPoint\x3d'_editSummary'\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e",
showTitle:!0,startup:function(){this.inherited(arguments);this._showStatus(H.loading);this._contentDfd=this.template.getComponents(this.graphic).then(k.hitch(this,this._handleComponentsSuccess)).otherwise(k.hitch(this,this._handleComponentsError))},destroy:function(){this._contentDfd&&this._contentDfd.cancel();this._attachmentsDfd&&this._attachmentsDfd.cancel();this._destroyFrame();this.template=this.graphic=this._nls=this._mediaInfos=this._mediaPtr=this._contentDfd=this._attachmentsDfd=null;this.inherited(arguments)},
_goToPrevMedia:function(){0>this._mediaPtr-1||(this._mediaPtr--,this._updateUI(),this._displayMedia())},_goToNextMedia:function(){this._mediaPtr+1!==this._mediaInfos.length&&(this._mediaPtr++,this._updateUI(),this._displayMedia())},_updateUI:function(){var b=this._mediaInfos,c=b.length,a=this.domNode,p=this._prevMedia,e=this._nextMedia;if(1<c){var d=0,l=0;q.forEach(b,function(a){"image"===a.type?d++:-1!==a.type.indexOf("chart")&&l++});d&&(g.set(this._imageCount,"innerHTML",d),h.query(".summary .image",
a).removeClass("hidden"));l&&(g.set(this._chartCount,"innerHTML",l),h.query(".summary .chart",a).removeClass("hidden"))}else h.query(".summary",a).addClass("hidden"),f.add(p,"hidden"),f.add(e,"hidden");b=this._mediaPtr;0===b?f.add(p,"hidden"):f.remove(p,"hidden");b===c-1?f.add(e,"hidden"):f.remove(e,"hidden");this._destroyFrame()},_displayMedia:function(){var b=this._mediaInfos[this._mediaPtr],c=b.title,a=b.caption,d=h.query(".mediaSection .hzLine",this.domNode)[0];g.set(this._mediaTitle,"innerHTML",
c);f[c?"remove":"add"](this._mediaTitle,"hidden");g.set(this._mediaCaption,"innerHTML",a);f[a?"remove":"add"](this._mediaCaption,"hidden");f[c&&a?"remove":"add"](d,"hidden");this._rid=null;if("image"===b.type)this._showImage(b);else{var e=this,c=["dojox/charting/Chart2D","dojox/charting/action2d/Tooltip"],a=b.value.theme||this.chartTheme;k.isString(a)&&(a=a.replace(/\./gi,"/"),-1===a.indexOf("/")&&(a="dojox/charting/themes/"+a));a||(a="./Rainbow");c.push(a);try{var m=this._rid=G++;w(c,function(a,
c,d){m===e._rid&&(e._rid=null,e._showChart(b.type,b.value,a,c,d))})}catch(l){console.log("PopupRenderer: error loading modules")}}},_preventNewTab:function(b){return(b=b&&k.trim(b).toLowerCase())&&(0===b.indexOf("mailto:")||0===b.indexOf("tel:"))},_showImage:function(b){f.add(this._mediaFrame,"image");var c=u.get(this._gallery,"height"),a=b.value,d;a.linkURL&&(d=r.create("a",{href:a.linkURL,target:this._preventNewTab(a.linkURL)?"":"_blank"},this._mediaFrame));a=b.refreshInterval?this._addURLParameter(a.sourceURL,
"timestamp",Date.now()):a.sourceURL;r.create("img",{className:"esriPopupMediaImage",src:a},d||this._mediaFrame);var e=h.query(".esriPopupMediaImage",this._mediaFrame)[0];this._imageLoadHandle=t.connect(e,"onload",this,function(){this._clearImageHandles();this._imageLoaded(e,c);this._initImageRefresh(b)})},_addURLParameter:function(b,c,a){var d=-1===b.indexOf("?")?"?":"\x26";return b+d+c+"\x3d"+a},_initImageRefresh:function(b){if(b.refreshInterval){var c=6E4*b.refreshInterval;this._imageRefreshHandle=
setTimeout(k.hitch(this,function(){this._destroyFrame();this._showImage(b)}),c)}},_clearImageHandles:function(){t.disconnect(this._imageLoadHandle);this._imageLoadHandle=null;clearTimeout(this._imageRefreshHandle);this._imageRefreshHandle=null},_showChart:function(b,c,a,d,e){f.remove(this._mediaFrame,"image");a=this._chart=new a(r.create("div",{"class":"chart"},this._mediaFrame),{margins:{l:4,t:4,r:4,b:4}});e&&a.setTheme(e);switch(b){case "piechart":a.addPlot("default",{type:"Pie",labels:!1});a.addSeries("Series A",
c.fields);break;case "linechart":a.addPlot("default",{type:"Markers"});a.addAxis("x",{min:0,majorTicks:!1,minorTicks:!1,majorLabels:!1,minorLabels:!1});a.addAxis("y",{includeZero:!0,vertical:!0,fixUpper:"minor"});q.forEach(c.fields,function(a,b){a.x=b+1});a.addSeries("Series A",c.fields);break;case "columnchart":a.addPlot("default",{type:"Columns",gap:3});a.addAxis("y",{includeZero:!0,vertical:!0,fixUpper:"minor"});a.addSeries("Series A",c.fields);break;case "barchart":a.addPlot("default",{type:"Bars",
gap:3}),a.addAxis("x",{includeZero:!0,fixUpper:"minor",minorLabels:!1}),a.addAxis("y",{vertical:!0,majorTicks:!1,minorTicks:!1,majorLabels:!1,minorLabels:!1}),a.addSeries("Series A",c.fields)}this._action=new d(a);a.render()},_destroyFrame:function(){this._rid=null;this._clearImageHandles();this._chart&&(this._chart.destroy(),this._chart=null);this._action&&(this._action.destroy(),this._action=null);g.set(this._mediaFrame,"innerHTML","")},_imageLoaded:function(b,c){var a=b.height;a<c&&u.set(b,"marginTop",
Math.round((c-a)/2)+"px")},_attListHandler:function(b,c){if(b===this._attachmentsDfd){this._attachmentsDfd=null;var a="";c instanceof Error||!c||!c.length||q.forEach(c,function(b){a+="\x3cli\x3e";a+="\x3ca href\x3d'"+E.addProxy(b.url)+"' target\x3d'_blank'\x3e"+(b.name||"[No name]")+"\x3c/a\x3e";a+="\x3c/li\x3e"});g.set(this._attachmentsList,"innerHTML",a||"\x3cli\x3e"+this._nls.NLS_noAttach+"\x3c/li\x3e")}},_supportedURIInfos:[{pattern:/^\s*(https?:\/\/([^\s]+))\s*$/i,label:d.NLS_moreInfo},{pattern:/^\s*(tel:([^\s]+))\s*$/i,
label:"${hierPart}"},{pattern:/^\s*(mailto:([^\s]+))\s*$/i,label:"${hierPart}"},{pattern:/^\s*(arcgis-appstudio-player:\/\/([^\s]+))\s*$/i,appName:"App Studio Player",label:d.NLS_openLinkInApp},{pattern:/^\s*(arcgis-collector:\/\/([^\s]+))\s*$/i,appName:"Collector",label:d.NLS_openLinkInApp},{pattern:/^\s*(arcgis-explorer:\/\/([^\s]+))\s*$/i,appName:"Explorer",label:d.NLS_openLinkInApp},{pattern:/^\s*(arcgis-navigator:\/\/([^\s]+))\s*$/i,appName:"Navigator",label:d.NLS_openLinkInApp},{pattern:/^\s*(arcgis-survey123:\/\/([^\s]+))\s*$/i,
appName:"Survey123",label:d.NLS_openLinkInApp},{pattern:/^\s*(arcgis-trek2there:\/\/([^\s]+))\s*$/i,appName:"Trek2There",label:d.NLS_openLinkInApp},{pattern:/^\s*(arcgis-workforce:\/\/([^\s]+))\s*$/i,appName:"Workforce",label:d.NLS_openLinkInApp},{pattern:/^\s*(iform:\/\/([^\s]+))\s*$/i,appName:"iForm",label:d.NLS_openLinkInApp},{pattern:/^\s*(flow:\/\/([^\s]+))\s*$/i,appName:"FlowFinity",label:d.NLS_openLinkInApp},{pattern:/^\s*(lfmobile:\/\/([^\s]+))\s*$/i,appName:"Laserfische",label:d.NLS_openLinkInApp},
{pattern:/^\s*(mspbi:\/\/([^\s]+))\s*$/i,appName:"Microsoft Power BI",label:d.NLS_openLinkInApp}],_findURIInfo:function(b){var c;q.some(this._supportedURIInfos,function(a){a.pattern.test(b)&&(c=a);return!!c});return c},_createLinkIfURI:function(b){var c=this._findURIInfo(b);if(c){var a=b.match(c.pattern);return b.replace(c.pattern,"\x3ca target\x3d'_blank' href\x3d'$1' title\x3d'$1'\x3e"+D.substitute({appName:c.appName,hierPart:a&&a[2]},c.label)+"\x3c/a\x3e")}return b},_showStatus:function(b){g.set(this._status,
"innerHTML",b);f.remove(this._status,"hidden");h.query(".mainSection",this.domNode).addClass("hidden")},_hideStatus:function(){g.set(this._status,"innerHTML","");f.add(this._status,"hidden");h.query(".mainSection",this.domNode).removeClass("hidden")},_handleComponentsSuccess:function(b){if(b){this._hideStatus();var c=this.showTitle?b.title:"",a=b.description,p=b.fields,e=b.mediaInfos,m=this.domNode,l=this._nls,n=this,r=this.template,t=this.graphic;this._prevMedia.title=l.NLS_prevMedia;this._nextMedia.title=
l.NLS_nextMedia;g.set(this._title,"innerHTML",c);c||f.add(this._title,"hidden");!b.hasDescription&&p&&(a="",q.forEach(p,function(b){a+="\x3ctr valign\x3d'top'\x3e";a+="\x3ctd class\x3d'attrName'\x3e"+z.encode(b[0])+"\x3c/td\x3e";a+="\x3ctd class\x3d'attrValue'\x3e"+this._createLinkIfURI(b[1])+"\x3c/td\x3e";a+="\x3c/tr\x3e"},this),a&&(a="\x3ctable class\x3d'attrTable' cellpadding\x3d'0px' cellspacing\x3d'0px'\x3e"+a+"\x3c/table\x3e"));g.set(this._description,"innerHTML",a);a||f.add(this._description,
"hidden");h.query("a",this._description).forEach(function(a){n._preventNewTab(a.href)?"_blank"===a.target&&g.remove(a,"target"):g.set(a,"target","_blank")});c&&a?h.query(".mainSection .hzLine",m).removeClass("hidden"):c||a?h.query(".mainSection .hzLine",m).addClass("hidden"):h.query(".mainSection",m).addClass("hidden");if(c=this._attachmentsDfd=r.getAttachments(t))c.addBoth(k.hitch(this,this._attListHandler,c)),g.set(this._attachmentsList,"innerHTML","\x3cli\x3e"+l.NLS_searching+"...\x3c/li\x3e"),
h.query(".attachmentsSection",m).removeClass("hidden");e&&e.length&&(h.query(".mediaSection",m).removeClass("hidden"),y.setSelectable(this._mediaFrame,!1),this._mediaInfos=e,this._mediaPtr=0,this._updateUI(),this._displayMedia());b.editSummary&&(g.set(this._editSummary,"innerHTML",b.editSummary),e&&e.length&&f.remove(this._mediaBreak,"hidden"),f.remove(this._editSummarySection,"hidden"));this.emit("content-update")}else this._showStatus(d.NLS_noInfo)},_handleComponentsError:function(b){b&&"cancel"===
b.dojoType||(console.log("PopupRenderer: error loading template",b),this._showStatus(d.NLS_noInfo))}});x("extend-esri")&&k.setObject("dijit._PopupRenderer",n,C);return n});
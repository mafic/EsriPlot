// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
require({cache:{"dijit/_WidgetBase":function(){define("require dojo/_base/array dojo/aspect dojo/_base/config dojo/_base/connect dojo/_base/declare dojo/dom dojo/dom-attr dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/dom-style dojo/has dojo/_base/kernel dojo/_base/lang dojo/on dojo/ready dojo/Stateful dojo/topic dojo/_base/window ./Destroyable dojo/has!dojo-bidi?./_BidiMixin ./registry".split(" "),function(n,e,g,t,p,u,q,v,h,c,f,r,a,y,k,x,l,B,C,D,E,F,w){function z(b){return function(d){v[d?
"set":"remove"](this.domNode,b,d);this._set(b,d)}}a.add("dijit-legacy-requires",!y.isAsync);a.add("dojo-bidi",!1);a("dijit-legacy-requires")&&l(0,function(){n(["dijit/_base/manager"])});var A={};t=u("dijit._WidgetBase",[B,E],{id:"",_setIdAttr:"domNode",lang:"",_setLangAttr:z("lang"),dir:"",_setDirAttr:z("dir"),"class":"",_setClassAttr:{node:"domNode",type:"class"},_setTypeAttr:null,style:"",title:"",tooltip:"",baseClass:"",srcNodeRef:null,domNode:null,containerNode:null,ownerDocument:null,_setOwnerDocumentAttr:function(b){this._set("ownerDocument",
b)},attributeMap:{},_blankGif:t.blankGif||n.toUrl("dojo/resources/blank.gif"),textDir:"",_introspect:function(){var b=this.constructor;if(!b._setterAttrs){var d=b.prototype,m=b._setterAttrs=[],b=b._onMap={},a;for(a in d.attributeMap)m.push(a);for(a in d)/^on/.test(a)&&(b[a.substring(2).toLowerCase()]=a),/^_set[A-Z](.*)Attr$/.test(a)&&(a=a.charAt(4).toLowerCase()+a.substr(5,a.length-9),d.attributeMap&&a in d.attributeMap||m.push(a))}},postscript:function(b,d){this.create(b,d)},create:function(b,d){this._introspect();
this.srcNodeRef=q.byId(d);this._connects=[];this._supportingWidgets=[];this.srcNodeRef&&this.srcNodeRef.id&&"string"==typeof this.srcNodeRef.id&&(this.id=this.srcNodeRef.id);b&&(this.params=b,k.mixin(this,b));this.postMixInProperties();this.id||(this.id=w.getUniqueId(this.declaredClass.replace(/\./g,"_")),this.params&&delete this.params.id);this.ownerDocument=this.ownerDocument||(this.srcNodeRef?this.srcNodeRef.ownerDocument:document);this.ownerDocumentBody=D.body(this.ownerDocument);w.add(this);
this.buildRendering();var a;this.domNode&&(this._applyAttributes(),(b=this.srcNodeRef)&&b.parentNode&&this.domNode!==b&&(b.parentNode.replaceChild(this.domNode,b),a=!0),this.domNode.setAttribute("widgetId",this.id));this.postCreate();a&&delete this.srcNodeRef;this._created=!0},_applyAttributes:function(){var b={},d;for(d in this.params||{})b[d]=this._get(d);e.forEach(this.constructor._setterAttrs,function(d){if(!(d in b)){var a=this._get(d);a&&this.set(d,a)}},this);for(d in b)this.set(d,b[d])},postMixInProperties:function(){},
buildRendering:function(){this.domNode||(this.domNode=this.srcNodeRef||this.ownerDocument.createElement("div"));if(this.baseClass){var b=this.baseClass.split(" ");this.isLeftToRight()||(b=b.concat(e.map(b,function(b){return b+"Rtl"})));h.add(this.domNode,b)}},postCreate:function(){},startup:function(){this._started||(this._started=!0,e.forEach(this.getChildren(),function(b){b._started||b._destroyed||!k.isFunction(b.startup)||(b.startup(),b._started=!0)}))},destroyRecursive:function(b){this._beingDestroyed=
!0;this.destroyDescendants(b);this.destroy(b)},destroy:function(b){function d(d){d.destroyRecursive?d.destroyRecursive(b):d.destroy&&d.destroy(b)}this._beingDestroyed=!0;this.uninitialize();e.forEach(this._connects,k.hitch(this,"disconnect"));e.forEach(this._supportingWidgets,d);this.domNode&&e.forEach(w.findWidgets(this.domNode,this.containerNode),d);this.destroyRendering(b);w.remove(this.id);this._destroyed=!0},destroyRendering:function(b){this.bgIframe&&(this.bgIframe.destroy(b),delete this.bgIframe);
this.domNode&&(b?v.remove(this.domNode,"widgetId"):c.destroy(this.domNode),delete this.domNode);this.srcNodeRef&&(b||c.destroy(this.srcNodeRef),delete this.srcNodeRef)},destroyDescendants:function(b){e.forEach(this.getChildren(),function(d){d.destroyRecursive&&d.destroyRecursive(b)})},uninitialize:function(){return!1},_setStyleAttr:function(b){var d=this.domNode;k.isObject(b)?r.set(d,b):d.style.cssText=d.style.cssText?d.style.cssText+("; "+b):b;this._set("style",b)},_attrToDom:function(b,d,a){a=3<=
arguments.length?a:this.attributeMap[b];e.forEach(k.isArray(a)?a:[a],function(a){var m=this[a.node||a||"domNode"];switch(a.type||"attribute"){case "attribute":k.isFunction(d)&&(d=k.hitch(this,d));a=a.attribute?a.attribute:/^on[A-Z][a-zA-Z]*$/.test(b)?b.toLowerCase():b;m.tagName?v.set(m,a,d):m.set(a,d);break;case "innerText":m.innerHTML="";m.appendChild(this.ownerDocument.createTextNode(d));break;case "textContent":m.textContent=d;break;case "innerHTML":m.innerHTML=d;break;case "class":h.replace(m,
d,this[b]);break;case "toggleClass":h.toggle(m,a.className||b,d)}},this)},get:function(b){var d=this._getAttrNames(b);return this[d.g]?this[d.g]():this._get(b)},set:function(b,d){if("object"===typeof b){for(var a in b)this.set(a,b[a]);return this}a=this._getAttrNames(b);var c=this[a.s];if(k.isFunction(c))var r=c.apply(this,Array.prototype.slice.call(arguments,1));else{var c=this.focusNode&&!k.isFunction(this.focusNode)?"focusNode":"domNode",f=this[c]&&this[c].tagName,l;if((l=f)&&!(l=A[f])){l=this[c];
var x={},g;for(g in l)x[g.toLowerCase()]=!0;l=A[f]=x}g=l;a=b in this.attributeMap?this.attributeMap[b]:a.s in this?this[a.s]:g&&a.l in g&&"function"!=typeof d||/^aria-|^data-|^role$/.test(b)?c:null;null!=a&&this._attrToDom(b,d,a);this._set(b,d)}return r||this},_attrPairNames:{},_getAttrNames:function(b){var a=this._attrPairNames;if(a[b])return a[b];var m=b.replace(/^[a-z]|-[a-zA-Z]/g,function(b){return b.charAt(b.length-1).toUpperCase()});return a[b]={n:b+"Node",s:"_set"+m+"Attr",g:"_get"+m+"Attr",
l:m.toLowerCase()}},_set:function(b,a){var d=this[b];this[b]=a;!this._created||d===a||d!==d&&a!==a||(this._watchCallbacks&&this._watchCallbacks(b,d,a),this.emit("attrmodified-"+b,{detail:{prevValue:d,newValue:a}}))},_get:function(b){return this[b]},emit:function(b,a,c){a=a||{};void 0===a.bubbles&&(a.bubbles=!0);void 0===a.cancelable&&(a.cancelable=!0);a.detail||(a.detail={});a.detail.widget=this;var d,m=this["on"+b];m&&(d=m.apply(this,c?c:[a]));this._started&&!this._beingDestroyed&&x.emit(this.domNode,
b.toLowerCase(),a);return d},on:function(a,d){var b=this._onMap(a);return b?g.after(this,b,d,!0):this.own(x(this.domNode,a,d))[0]},_onMap:function(a){var b=this.constructor,c=b._onMap;if(!c){var c=b._onMap={},k;for(k in b.prototype)/^on/.test(k)&&(c[k.replace(/^on/,"").toLowerCase()]=k)}return c["string"==typeof a&&a.toLowerCase()]},toString:function(){return"[Widget "+this.declaredClass+", "+(this.id||"NO ID")+"]"},getChildren:function(){return this.containerNode?w.findWidgets(this.containerNode):
[]},getParent:function(){return w.getEnclosingWidget(this.domNode.parentNode)},connect:function(a,d,c){return this.own(p.connect(a,d,this,c))[0]},disconnect:function(a){a.remove()},subscribe:function(a,d){return this.own(C.subscribe(a,k.hitch(this,d)))[0]},unsubscribe:function(a){a.remove()},isLeftToRight:function(){return this.dir?"ltr"==this.dir.toLowerCase():f.isBodyLtr(this.ownerDocument)},isFocusable:function(){return this.focus&&"none"!=r.get(this.domNode,"display")},placeAt:function(a,d){var b=
!a.tagName&&w.byId(a);!b||!b.addChild||d&&"number"!==typeof d?(a=b&&"domNode"in b?b.containerNode&&!/after|before|replace/.test(d||"")?b.containerNode:b.domNode:q.byId(a,this.ownerDocument),c.place(this.domNode,a,d),!this._started&&(this.getParent()||{})._started&&this.startup()):b.addChild(this,d);return this},defer:function(a,d){var b=setTimeout(k.hitch(this,function(){b&&(b=null,this._destroyed||k.hitch(this,a)())}),d||0);return{remove:function(){b&&(clearTimeout(b),b=null);return null}}}});a("dojo-bidi")&&
t.extend(F);return t})},"dijit/Destroyable":function(){define(["dojo/_base/array","dojo/aspect","dojo/_base/declare"],function(n,e,g){return g("dijit.Destroyable",null,{destroy:function(g){this._destroyed=!0},own:function(){var g=["destroyRecursive","destroy","remove"];n.forEach(arguments,function(p){function u(){t.remove();n.forEach(h,function(c){c.remove()})}var q,t=e.before(this,"destroy",function(c){p[q](c)}),h=[];p.then?(q="cancel",p.then(u,u)):n.forEach(g,function(c){"function"===typeof p[c]&&
(q||(q=c),h.push(e.after(p,c,u,!0)))})},this);return arguments}})})},"dijit/_TemplatedMixin":function(){define("dojo/cache dojo/_base/declare dojo/dom-construct dojo/_base/lang dojo/on dojo/sniff dojo/string ./_AttachMixin".split(" "),function(n,e,g,t,p,u,q,v){var h=e("dijit._TemplatedMixin",v,{templateString:null,templatePath:null,_skipNodeCache:!1,searchContainerNode:!0,_stringRepl:function(c){var f=this.declaredClass,r=this;return q.substitute(c,this,function(a,c){"!"==c.charAt(0)&&(a=t.getObject(c.substr(1),
!1,r));if("undefined"==typeof a)throw Error(f+" template:"+c);return null==a?"":"!"==c.charAt(0)?a:this._escapeValue(""+a)},this)},_escapeValue:function(c){return c.replace(/["'<>&]/g,function(c){return{"\x26":"\x26amp;","\x3c":"\x26lt;","\x3e":"\x26gt;",'"':"\x26quot;","'":"\x26#x27;"}[c]})},buildRendering:function(){if(!this._rendered){this.templateString||(this.templateString=n(this.templatePath,{sanitize:!0}));var c=h.getCachedTemplate(this.templateString,this._skipNodeCache,this.ownerDocument),
f;if(t.isString(c)){if(f=g.toDom(this._stringRepl(c),this.ownerDocument),1!=f.nodeType)throw Error("Invalid template: "+c);}else f=c.cloneNode(!0);this.domNode=f}this.inherited(arguments);this._rendered||this._fillContent(this.srcNodeRef);this._rendered=!0},_fillContent:function(c){var f=this.containerNode;if(c&&f)for(;c.hasChildNodes();)f.appendChild(c.firstChild)}});h._templateCache={};h.getCachedTemplate=function(c,f,r){var a=h._templateCache,e=c,k=a[e];if(k){try{if(!k.ownerDocument||k.ownerDocument==
(r||document))return k}catch(x){}g.destroy(k)}c=q.trim(c);if(f||c.match(/\$\{([^\}]+)\}/g))return a[e]=c;f=g.toDom(c,r);if(1!=f.nodeType)throw Error("Invalid template: "+c);return a[e]=f};u("ie")&&p(window,"unload",function(){var c=h._templateCache,f;for(f in c){var r=c[f];"object"==typeof r&&g.destroy(r);delete c[f]}});return h})},"dojo/cache":function(){define(["./_base/kernel","./text"],function(n){return n.cache})},"dijit/_AttachMixin":function(){define("require dojo/_base/array dojo/_base/connect dojo/_base/declare dojo/_base/lang dojo/mouse dojo/on dojo/touch ./_WidgetBase".split(" "),
function(n,e,g,t,p,u,q,v,h){var c=p.delegate(v,{mouseenter:u.enter,mouseleave:u.leave,keypress:g._keypress}),f;g=t("dijit._AttachMixin",null,{constructor:function(){this._attachPoints=[];this._attachEvents=[]},buildRendering:function(){this.inherited(arguments);this._attachTemplateNodes(this.domNode);this._beforeFillContent()},_beforeFillContent:function(){},_attachTemplateNodes:function(c){for(var a=c;;)if(1==a.nodeType&&(this._processTemplateNode(a,function(a,c){return a.getAttribute(c)},this._attach)||
this.searchContainerNode)&&a.firstChild)a=a.firstChild;else{if(a==c)break;for(;!a.nextSibling;)if(a=a.parentNode,a==c)return;a=a.nextSibling}},_processTemplateNode:function(c,a,f){var k=!0,g=this.attachScope||this,l=a(c,"dojoAttachPoint")||a(c,"data-dojo-attach-point");if(l)for(var e=l.split(/\s*,\s*/);l=e.shift();)p.isArray(g[l])?g[l].push(c):g[l]=c,k="containerNode"!=l,this._attachPoints.push(l);if(a=a(c,"dojoAttachEvent")||a(c,"data-dojo-attach-event"))for(l=a.split(/\s*,\s*/),e=p.trim;a=l.shift();)if(a){var h=
null;-1!=a.indexOf(":")?(h=a.split(":"),a=e(h[0]),h=e(h[1])):a=e(a);h||(h=a);this._attachEvents.push(f(c,a,p.hitch(g,h)))}return k},_attach:function(g,a,e){a=a.replace(/^on/,"").toLowerCase();a="dijitclick"==a?f||(f=n("./a11yclick")):c[a]||a;return q(g,a,e)},_detachTemplateNodes:function(){var c=this.attachScope||this;e.forEach(this._attachPoints,function(a){delete c[a]});this._attachPoints=[];e.forEach(this._attachEvents,function(a){a.remove()});this._attachEvents=[]},destroyRendering:function(){this._detachTemplateNodes();
this.inherited(arguments)}});p.extend(h,{dojoAttachEvent:"",dojoAttachPoint:""});return g})},"url:esri/dijit/templates/HomeButton.html":'\x3cdiv class\x3d"${theme}" role\x3d"presentation"\x3e\r\n    \x3cdiv class\x3d"${_css.container}"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"_homeNode" title\x3d"${_i18n.widgets.homeButton.home.title}" role\x3d"button" class\x3d"${_css.home}" tabindex\x3d"0"\x3e\x3cspan\x3e${_i18n.widgets.homeButton.home.button}\x3c/span\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e',
"*noref":1}});
define("esri/dijit/HomeButton","dojo/Evented dojo/_base/declare dojo/_base/lang dojo/has ../kernel dijit/_WidgetBase dijit/a11yclick dijit/_TemplatedMixin dojo/on dojo/Deferred dojo/text!./templates/HomeButton.html dojo/i18n!../nls/jsapi dojo/dom-class dojo/dom-style".split(" "),function(n,e,g,t,p,u,q,v,h,c,f,r,a,y){n=e("esri.dijit.HomeButton",[u,v,n],{templateString:f,options:{theme:"HomeButton",map:null,extent:null,fit:!1,visible:!0},constructor:function(a,c){a=g.mixin({},this.options,a);this.domNode=
c;this._i18n=r;this.set("map",a.map);this.set("theme",a.theme);this.set("visible",a.visible);this.set("extent",a.extent);this.set("fit",a.fit);this.watch("theme",this._updateThemeWatch);this.watch("visible",this._visible);this._css={container:"homeContainer",home:"home",loading:"loading"}},postCreate:function(){this.inherited(arguments);this.own(h(this._homeNode,q,g.hitch(this,this.home)))},startup:function(){this.inherited(arguments);this.map||(this.destroy(),console.log("HomeButton::map required"));
if(this.map.loaded)this._init();else h.once(this.map,"load",g.hitch(this,function(){this._init()}))},destroy:function(){this.inherited(arguments)},home:function(){var a=new c,f=this.get("extent");this._showLoading();var e={extent:f};f?this.map.extent!==f?this.map.setExtent(f,this.get("fit")).then(g.hitch(this,function(){this._hideLoading();this.emit("home",e);a.resolve(e)}),g.hitch(this,function(c){c||(c=Error("HomeButton::Error setting map extent"));e.error=c;this.emit("home",e);a.reject(c)})):(this._hideLoading(),
this.emit("home",e),a.resolve(e)):(this._hideLoading(),f=Error("HomeButton::home extent is undefined"),e.error=f,this.emit("home",e),a.reject(f));return a.promise},show:function(){this.set("visible",!0)},hide:function(){this.set("visible",!1)},_init:function(){this._visible();this.get("extent")||this.set("extent",this.map.extent);this.set("loaded",!0);this.emit("load",{})},_showLoading:function(){a.add(this._homeNode,this._css.loading)},_hideLoading:function(){a.remove(this._homeNode,this._css.loading)},
_updateThemeWatch:function(c,e,f){a.remove(this.domNode,e);a.add(this.domNode,f)},_visible:function(){this.get("visible")?y.set(this.domNode,"display","block"):y.set(this.domNode,"display","none")}});t("extend-esri")&&g.setObject("dijit.HomeButton",n,p);return n});
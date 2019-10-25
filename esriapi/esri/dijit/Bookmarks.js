// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/templates/Bookmarks.html":'\x3cdiv class\x3d"${_css.esriBookmarks}"\x3e\r\n  \x3cdiv class\x3d"${_css.esriBookmarkList}" dojoAttachPoint\x3d"bookmarkDomNode"\x3e\r\n      \x3cdiv class\x3d"${_css.esriBookmarkTable}" dojoAttachPoint\x3d"bookmarkTable"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/Bookmarks","dojo/_base/array dojo/_base/connect dojo/_base/declare dojo/_base/lang dojo/has dojo/keys dojo/on dojo/query dojo/window dojo/dom dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/dnd/Avatar dojo/dnd/Source dojo/i18n!../nls/jsapi dijit/a11yclick dijit/_WidgetBase ../kernel ../domUtils ../Evented ../geometry/Extent ./BookmarkItem dijit/_TemplatedMixin dojo/text!./templates/Bookmarks.html".split(" "),function(g,e,r,d,y,z,n,l,A,H,k,m,v,u,B,q,t,C,D,w,E,p,x,F,G){r=
r([C,F,E],{declaredClass:"esri.dijit.Bookmarks",templateString:G,bookmarks:[],bookmarkDomNode:null,bookmarkTable:null,initBookmarks:null,editable:null,map:null,_oldGenerateText:null,_customGenerateText:!1,_LTR:!0,_dndSource:null,_inputBox:null,_label:null,_css:{esriBookmarks:"esriBookmarks",esriBookmarksRTL:"esriBookmarksRTL",esriBookmarkList:"esriBookmarkList",esriBookmarkTable:"esriBookmarkTable",esriBookmarkEditImage:"esriBookmarkEditImage",esriBookmarkRemoveImage:"esriBookmarkRemoveImage",esriBookmarkLabel:"esriBookmarkLabel",
esriBookmarkItem:"esriBookmarkItem",esriBookmarkHighlight:"esriBookmarkHighlight",esriAddBookmark:"esriAddBookmark",esriBookmarkEditBox:"esriBookmarkEditBox"},_clickHandlers:[],_mouseOverHandlers:[],_mouseOutHandlers:[],_removeHandlers:[],_editHandlers:[],_dndHandlers:[],_eventMap:{click:!0,edit:!0,remove:!0},onClick:function(){},onEdit:function(){},onRemove:function(){},constructor:function(a,b){this.initBookmarks=a.bookmarks;delete a.bookmarks},postCreate:function(){this.srcNodeRef=this.domNode;
(this._LTR=this.isLeftToRight())||k.add(this.domNode,this._css.esriBookmarksRTL);this._dndSource=new B(this.bookmarkTable,{creator:this._avatarCreator,singular:!0,checkAcceptance:function(a,b){return this===a?!0:!1}});this._dndSourceNodes=this._dndSource.getAllNodes();this._dndHandlers.push(n(this._dndSource,"DndStart",d.hitch(this,function(a){a===this._dndSource&&(this._oldGenerateText=u.prototype._generateText,u.prototype._generateText=d.hitch(this,this._generateText),this._customGenerateText=!0,
this._inputBox&&this._inputBox.blur())})));this._dndHandlers.push(n(this._dndSource,"DndDrop",d.hitch(this,function(a){a===this._dndSource&&(this._syncBookmarksAfterReorder(),this.emit("reorder",this.bookmarks))})));this._dndHandlers.push(n(this._dndSource,"DndCancel",d.hitch(this,function(){this._customGenerateText&&(u.prototype._generateText=this._oldGenerateText,this._customGenerateText=!1)})));this._addInitialBookmarks()},destroy:function(){this.inherited(arguments);this.map=null;g.forEach(this._clickHandlers,
function(a){e.disconnect(a)});g.forEach(this._mouseOverHandlers,function(a){e.disconnect(a)});g.forEach(this._mouseOutHandlers,function(a){e.disconnect(a)});g.forEach(this._removeHandlers,function(a){e.disconnect(a)});g.forEach(this._editHandlers,function(a){e.disconnect(a)});m.destroy(this.bookmarkDomNode)},addBookmark:function(a){var b,c,h,f;"esri.dijit.BookmarkItem"===a.declaredClass?b=a:(b=new p(a.extent),b=new x({name:a.name,extent:b}));this.editable?(h=q.widgets.bookmarks,f=h.NLS_bookmark_edit,
h=h.NLS_bookmark_remove,c=m.create("div",{innerHTML:'\x3cdiv tabindex\x3d"0" role\x3d"button" class\x3d\'esriBookmarkLabel\'\x3e'+a.name+'\x3c/div\x3e\x3cdiv tabindex\x3d"0" role\x3d"button" title\x3d\''+h+"' class\x3d'esriBookmarkRemoveImage'\x3e\x3cbr/\x3e\x3c/div\x3e\x3cdiv tabindex\x3d\"0\" role\x3d\"button\" title\x3d'"+f+"' class\x3d'esriBookmarkEditImage'\x3e\x3cbr/\x3e\x3c/div\x3e"}),f=l(".esriBookmarkEditImage",c)[0],h=l(".esriBookmarkRemoveImage",c)[0],this._removeHandlers.push(e.connect(h,
t,this,"_removeBookmark")),this._editHandlers.push(e.connect(f,t,this,"_editBookmarkLabel"))):c=m.create("div",{innerHTML:"\x3cdiv tabindex\x3d\"0\" class\x3d'esriBookmarkLabel'\x3e"+a.name+"\x3c/div\x3e"});k.add(c,this._css.esriBookmarkItem);"esri.geometry.Extent"!==a.extent.declaredClass&&new p(a.extent);f=l(".esriBookmarkLabel",c)[0];this._clickHandlers.push(e.connect(f,t,d.hitch(this,"_onClickHandler",a)));this._mouseOverHandlers.push(e.connect(c,"onmouseover",d.hitch(this,function(){k.add(c,
this._css.esriBookmarkHighlight)})));this._mouseOutHandlers.push(e.connect(c,"onmouseout",d.hitch(this,function(){k.remove(c,this._css.esriBookmarkHighlight)})));this.bookmarks.push(b);this._dndSource.insertNodes(!1,[c]);this._dndSourceNodes=this._dndSource.getAllNodes();A.scrollIntoView(c);this._syncBookmarksAfterReorder()},removeBookmark:function(a){this._inputBox&&this._inputBox.blur();var b;b=l(".esriBookmarkLabel",this.bookmarkDomNode);b=g.filter(b,function(b){return b.innerHTML===a});g.forEach(b,
function(a){a.parentNode.parentNode.parentNode.removeChild(a.parentNode.parentNode)});for(b=this.bookmarks.length-1;0<=b;b--)this.bookmarks[b].name===a&&this.bookmarks.splice(b,1);this.onRemove()},hide:function(){w.hide(this.bookmarkDomNode)},show:function(){w.show(this.bookmarkDomNode)},_addInitialBookmarks:function(){if(this.editable){var a=m.create("div",{tabIndex:0,role:"button",innerHTML:"\x3cdiv\x3e"+q.widgets.bookmarks.NLS_add_bookmark+"\x3c/div\x3e"});k.add(a,this._css.esriBookmarkItem);k.add(a,
this._css.esriAddBookmark);this._clickHandlers.push(e.connect(a,t,this,this._newBookmark));this._mouseOverHandlers.push(e.connect(a,"onmouseover",d.hitch(this,function(){k.add(a,this._css.esriBookmarkHighlight)})));this._mouseOutHandlers.push(e.connect(a,"onmouseout",d.hitch(this,function(){k.remove(a,this._css.esriBookmarkHighlight)})));this.domNode.appendChild(a)}this.bookmarks=[];g.forEach(this.initBookmarks,function(a){this.addBookmark(a)},this)},_newBookmark:function(){var a,b,c,h,f,d;d=this.map;
a=q.widgets.bookmarks.NLS_new_bookmark;var e=d.extent;d.spatialReference._isWrappable()?(b=p.prototype._normalizeX(e.xmin,d.spatialReference._getInfo()).x,c=p.prototype._normalizeX(e.xmax,d.spatialReference._getInfo()).x,b>c&&(h=(f=d.spatialReference.isWebMercator())?2.0037508342788905E7:180,f=f?-2.0037508342788905E7:-180,Math.abs(b-h)>Math.abs(c-f)?c=h:b=f),d=new p(b,e.ymin,c,e.ymax,d.spatialReference)):d=e;a=new x({name:a,extent:d});this.addBookmark(a);a=l(".esriBookmarkItem",this.bookmarkDomNode);
d=a[a.length-1];a={target:{parentNode:null}};a.target.parentNode=d;this._editBookmarkLabel(a)},_removeBookmark:function(a){a.target.parentNode.parentNode.parentNode.removeChild(a.target.parentNode.parentNode);this.removeBookmark(a.target.parentNode.textContent)},_syncBookmarksAfterReorder:function(){var a=[],b=this._dndSource.getAllNodes();g.forEach(b,d.hitch(this,function(b){var c=this._dndSourceNodes.map(function(a,c){if(a===b)return c}).filter(isFinite)[0];a.push(this.bookmarks[c])}));this.bookmarks=
a;this._dndSourceNodes=b},_generateText:function(){return this._dndSource&&this._dndSource.getSelectedNodes()[0]&&this._dndSource.getSelectedNodes()[0].firstChild.firstChild.innerHTML?this._dndSource.getSelectedNodes()[0].firstChild.firstChild.innerHTML:""},_editBookmarkLabel:function(a){this._inputBox&&this._inputBox.blur();var b=q.widgets.bookmarks.NLS_new_bookmark;a=a.target.parentNode;var c=a.firstChild||l(".esriBookmarkLabel",a)[0],e=v.position(a,!0).y;this._label=c;this._inputBox=m.create("input",
{className:"esriBookmarkEditBox",value:c.innerHTML!==b?c.textContent:"",style:{top:e+"px"}},this.domNode);n(this._inputBox,"keyup",d.hitch(this,function(a){switch(a.keyCode){case z.ENTER:this._inputBox.blur()}}));n(this._inputBox,"focus",d.hitch(this,function(){this.map&&"function"===typeof this.map.disableKeyboardNavigation&&this.map.disableKeyboardNavigation()}));n(this._inputBox,"blur",d.hitch(this,function(){this.map&&"function"===typeof this.map.enableKeyboardNavigation&&this.map.enableKeyboardNavigation();
this._finishEdit()}));this._inputBox.focus();this._inputBox.select();b=v.position(a,!0);this._inputBox.style.top=b.y+"px"},_finishEdit:function(){if(this._inputBox){var a=q.widgets.bookmarks.NLS_new_bookmark,b=l(".esriBookmarkLabel",this.bookmarkDomNode),c=this._inputBox.value;c===this._label.innerHTML?(this._inputBox.parentNode.removeChild(this._inputBox),this._inputBox=null):(this._label.textContent=""!==c?c:a,g.forEach(this.bookmarks,function(a,c){a&&b[c]&&(a.name=b[c].innerHTML)}),this._inputBox.parentNode.removeChild(this._inputBox),
this._inputBox=null,this.onEdit())}},_avatarCreator:function(a,b){var c=m.create("div");c.id=dojo.dnd.getUniqueId();k.add(c,"dojoDndItem");"avatar"!==b&&m.place(a,c);return{node:c,data:a,type:"something"}},_onClickHandler:function(a){var b=a.extent;a.extent.declaredClass||(b=new p(a.extent));this.map.setExtent(b);this.onClick()},toJson:function(){var a=[];g.forEach(this.bookmarks,function(b){b&&a.push(b.toJson())});return a}});y("extend-esri")&&d.setObject("dijit.Bookmarks",r,D);return r});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/form/iso/gemet/ConceptDialog","dojo/_base/declare dojo/_base/lang dojo/dom-class dojo/has dijit/_WidgetBase dojo/i18n!../../../nls/i18nBase dojo/i18n!../../../nls/i18nIso dijit/Dialog ./ConceptPane ../../../../../kernel".split(" "),function(b,c,d,e,f,m,g,h,k,l){b=b([f],{dialog:null,gxeDocument:null,initialValue:null,title:g.gemet.concept.dialogTitle,postCreate:function(){this.inherited(arguments)},onSelect:function(a){},show:function(){var a=null,b=new k({dialogBroker:this,
gxeDocument:this.gxeDocument,initialValue:this.initialValue,onSelect:c.hitch(this,function(b){this.onSelect(b);a&&a.hide()}),onCancelClick:c.hitch(this,function(){a&&a.hide()})}),a=this.dialog=new h({"class":"gxeDialog gxePopupDialog gxeGemetDialog",title:this.title,content:b,autofocus:!1});this.isLeftToRight()||d.add(a.domNode,"gxeRtl");this.own(a.on("hide",c.hitch(this,function(){setTimeout(c.hitch(this,function(){b.destroyRecursive(!1);a.destroyRecursive(!1);this.destroyRecursive(!1)}),300)})));
a.show()}});e("extend-esri")&&c.setObject("dijit.metadata.form.iso.gemet.ConceptDialog",b,l);return b});
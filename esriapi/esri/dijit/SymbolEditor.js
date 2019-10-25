// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/templates/SymbolEditor.html":'\x3cdiv class\x3d"esriSymbolEditor"\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/SymbolEditor","dojo/_base/declare dojo/_base/lang dojo/has ../kernel dojo/_base/array dojo/_base/Color dojo/dom-construct dojo/query dijit/_Widget dijit/_TemplatedMixin ../domUtils ./Form dojo/text!./templates/SymbolEditor.html dojo/i18n!../nls/jsapi".split(" "),function(f,h,k,n,v,l,p,w,q,r,m,t,u,g){f=f([q,r],{declaredClass:"esri.dijit.SymbolEditor",widgetsInTemplate:!0,templateString:u,symbolConfigLabel:g.widgets.textSymbolEditor.symbolConfiguration,alignmentLabel:g.widgets.textSymbolEditor.alignment,
colorLabel:g.widgets.textSymbolEditor.color,haloLabel:g.widgets.textSymbolEditor.halo,_showHaloStyler:!0,constructor:function(c,a){this.set("_showHaloStyler",10>k("ie")?!1:!0)},destroy:function(){this.inherited(arguments);this.form.destroy();this.form=null},createForm:function(c){if(c=c||this.graphic){var a=c.symbol||c.getLayer().renderer&&c.getLayer().renderer.getSymbol(c),b={};if(!this.form||this._symbolType&&this._symbolType!==a.type){this.form&&this.destroy();this._symbolType=a.type;b=p.create("div",
null,this.domNode);switch(a.type){case "textsymbol":this.form=this._createTextEditorForm(a,b)}this.form.startup()}else{b.color=a.color.toHex();b.alignment=(a.verticalAlignment||"baseline")+","+a.horizontalAlignment;if(this._showHaloStyler){var d=a.haloSize||null,e=a.haloColor?a.haloColor.toHex():null;b.halo={haloSize:d,haloColor:e}}this._symbolChangeHandler&&this._symbolChangeHandler.remove();this.form.setValues(b)}this._symbolChangeHandler=this.form.on("value-change",h.hitch(this,"_valueChangeCallback",
c,a))}},hide:function(){m.hide(this.domNode)},show:function(){m.show(this.domNode)},_createTextEditorForm:function(c,a){var b=(c.verticalAlignment||"baseline")+","+c.horizontalAlignment,d=c.color.toHex(),e=c.haloColor||null;c=c.haloSize||0;b=[{name:"alignment",label:this.alignmentLabel,type:"string",value:b,widget:"./FontAlignment",widgetParameters:{value:b}},{name:"color",label:this.colorLabel,type:"string",value:d,widget:"dijit/ColorPalette",widgetParameters:{palette:"7x10"}}];this._showHaloStyler&&
b.push({name:"halo",label:this.haloLabel,type:"object",value:{haloColor:e,haloSize:c},widget:"./HaloStyler",widgetParameters:{haloColor:e,haloEnabled:!!c,haloSize:c}});return new t({fields:b},a)},_valueChangeCallback:function(c,a,b){if("color"===b.fieldName)a.setColor(new l(b.value));else if("alignment"===b.fieldName){var d=b.value.split(",")[0];b=b.value.split(",")[1];a.setHorizontalAlignment(b);a.setVerticalAlignment(d)}else if("halo"===b.fieldName&&this._showHaloStyler){var d=b.value.color,e=b.value.size;
b.value.enabled?(a.setHaloSize(e),a.setHaloColor(new l(d))):(a.setHaloSize(0),a.setHaloColor(null))}c.setSymbol(a);this.emit("symbol-change",{symbol:a})}});k("extend-esri")&&h.setObject("dijit.SymbolEditor",f,n);return f});
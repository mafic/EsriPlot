// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/types/arcgis/form/InputCitationDate","dojo/_base/declare dojo/_base/lang dojo/has ../../../../../kernel ../../../base/etc/docUtil ./InputDate".split(" "),function(a,c,d,e,f,g){a=a([g],{allowTime:!0,postCreate:function(){this.inherited(arguments)},emitInteractionOccurred:function(a){this.inherited(arguments);try{if("pubDate"!==this.parentXNode.target){var b=f.findInputWidget(this.parentXNode.parentElement.gxePath+"/pubDate",this.parentXNode.domNode.parentNode);b&&b.emitInteractionOccurred()}}catch(h){console.error(h)}}});
d("extend-esri")&&c.setObject("dijit.metadata.types.arcgis.form.InputCitationDate",a,e);return a});
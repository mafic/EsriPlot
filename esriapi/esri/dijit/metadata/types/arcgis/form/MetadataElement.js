// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/types/arcgis/form/MetadataElement","dojo/_base/declare dojo/_base/lang dojo/dom-class dojo/has ../../../../../kernel ../../../form/Element".split(" "),function(a,b,c,d,e,f){a=a([f],{postCreate:function(){this.inherited(arguments)},startup:function(){this._started||(this.inherited(arguments),this.labelNode&&c.add(this.labelNode,"gxeRootLabel"))}});d("extend-esri")&&b.setObject("dijit.metadata.types.arcgis.form.MetadataElement",a,e);return a});
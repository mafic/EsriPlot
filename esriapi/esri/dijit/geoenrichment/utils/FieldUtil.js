// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/FieldUtil",[],function(){var b={isNumericField:function(a){switch(a&&a.type){case "esriFieldTypeSmallInteger":case "esriFieldTypeInteger":return"i";case "esriFieldTypeSingle":case "esriFieldTypeDouble":return"f"}return!1},isStringField:function(a){return a&&"esriFieldTypeString"==a.type||!1},isDateField:function(a){return a&&"esriFieldTypeDate"==a.type||!1}},e=/DISTANCE$/;b.isDistanceField=function(a){return a&&e.test(a)};var f=/^(SHAPE__Area|SHAPE__Length)$/;
b.canShowField=function(a,c){if(!a||!a.name||"esriFieldTypeOID"===a.type)return!1;if("esriFieldTypeDate"===a.type)return"d";var d=b.isNumericField(a)||b.isStringField(a);if("f"===d&&!1===a.editable&&f.test(a.name))return null;void 0===c&&(c=/^(OBJECTID|OID|FID)$/i);return c&&c.test(a.name)?!1:!0===d?"s":d};b.createFieldInfo=function(a){var c=b.canShowField(a);a={fieldName:a.name,label:a.alias||a.name,isEditable:!!a.editable,visible:!!c};switch(c){case "i":a.format={places:0,digitSeparator:!0};break;
case "f":a.format={digitSeparator:!0};break;case "s":a.stringFieldOption="textbox"}return a};return b});
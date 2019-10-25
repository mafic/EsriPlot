// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/templateJsonUtils/TemplateJsonSerializer",["./query/TemplateJsonQueryUtil","../images/ImageDataHolder","../conditionalStyling/ConditionalStyleUtil"],function(c,d,f){return{serialize:function(a){this._attachImagesToTemplateJson(a);this._3_29_compatibilityFix(a);return a},_attachImagesToTemplateJson:function(a){function b(a){var b=d.getImageData(a);b&&(e[a]=b)}var e={};c.processTemplateFieldInfos(a,function(a){a.isImage?(b(a.imageJson.fileName),
a.triggerJson&&f.collectImageFileNames(a.triggerJson).forEach(b)):a.isInfographic&&a.infographicJson.variableTables&&a.infographicJson.variableTables.forEach(function(a){a.image&&b(a.image.imageJson.fileName)})});c.processSectionElements(a,function(a){"img"===a.id&&b(a.fileName)});a.imageData=e},_3_29_compatibilityFix:function(a){c.process(c.DOCUMENT,c.TABLE,a,function(a){a.style&&(a.style.spaceBefore=a.style.top)})},deserialize:function(a){this._takeImagesFromTemplateJson(a);return a},_takeImagesFromTemplateJson:function(a){for(var b in a.imageData)d.putImageData(b,
a.imageData[b]);delete a.imageData}}});
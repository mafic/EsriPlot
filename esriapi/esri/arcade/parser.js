// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/arcade/parser",["require","exports","./treeAnalysis","./lib/esprima"],function(q,c,d,k){Object.defineProperty(c,"__esModule",{value:!0});c.parseScript=function(a,b){void 0===b&&(b=[]);a=k.parse("function _() { "+a+"\n}");if(null===a.body||void 0===a.body)throw Error("No formula provided.");if(0===a.body.length)throw Error("No formula provided.");if(0===a.body.length)throw Error("No formula provided.");if("BlockStatement"!==a.body[0].body.type)throw Error("Invalid formula content.");var c=
d.validateLanguage(a);if(""!==c)throw Error(c);d.findScriptDependencies(a,b);return a};c.scriptCheck=function(a,b,c,n,p){var f=[];try{var l=k.parse("function _() { "+a+"\n}",{tolerant:!0,loc:!0}),g=l.errors;if(0<g.length)for(var h=0;h<g.length;h++)f.push({line:g[h].lineNumber,character:g[h].column,reason:g[h].description});var m=d.checkScript(l,b,c,n,p);for(b=0;b<m.length;b++)f.push(m[b])}catch(e){try{"Unexpected token }"===e.description?(e.index=("function _() { "+a+"\n}").length-1,f.push({line:e.lineNumber,
character:e.column,reason:"Unexpected end of script"})):f.push({line:e.lineNumber,character:e.column,reason:e.description})}catch(r){}}return f};c.extractFieldLiterals=function(a,b){void 0===b&&(b=!1);return d.findFieldLiterals(a,b)};c.validateScript=function(a,b,c){return d.validateScript(a,b,c)};c.referencesMember=function(a,b){return d.referencesMember(a,b)};c.referencesFunction=function(a,b){return d.referencesFunction(a,b)}});
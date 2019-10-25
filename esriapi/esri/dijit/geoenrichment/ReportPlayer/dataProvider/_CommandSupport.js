// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProvider/_CommandSupport","require dojo/_base/declare dojo/_base/lang esri/dijit/geoenrichment/Deferred esri/dijit/geoenrichment/when ../PlayerCommands ./supportClasses/GEUtil esri/dijit/geoenrichment/ReportPlayer/config".split(" "),function(l,m,n,p,h,c,k,q){var e={};return m(null,{_commands:null,_commandIndex:0,_initCommandsPromise:null,constructor:function(){this._commands={}},_initCommands:function(){if(this._initCommandsPromise)return this._initCommandsPromise;
var b=new p;if(q.modules.exportCommands)l(["./commands/CreateHTMLCommand","./commands/CreatePDFCommand","./commands/CreateImageCommand","./commands/PrintReportCommand","./commands/CreatePlayerCommand"],function(d,a,g,f,r){e[c.HTML]=d;e[c.PDF]=a;e[c.IMAGE]=g;e[c.PRINT]=f;e[c.DYNAMIC_HTML]=r;k.getInitPromise().then(b.resolve)});else return b.resolve();return this._initCommandsPromise=b.promise},registerCommand:function(b,d,a){function g(a){if(!a.isBrowserSupported||a.isBrowserSupported())f._commands[b]||
(f._commands[b]={index:f._commandIndex++,id:b,label:d||a.label,command:a})}var f=this;if(a)g(a);else return this._initCommands().then(function(){var a=e[b];a&&g(new a)})},getCommands:function(){return this._initCommands().then(function(){var b=[],d=this._commands[c.PDF],a;for(a in this._commands)b.push(this._commands[a]);b.sort(function(b,a){return b.index-a.index});return(a=this._getCurrentContext())&&a.geoenrichmentUrl&&d?h(k.hasCapability("FormatInfographics"),function(a){a||(b=b.filter(function(a){return a!==
d}));return b}):h(b)}.bind(this))},getCommandById:function(b){return this._commands[b]&&this._commands[b].command},executeCommand:function(b,d,a,c){return this._initCommands().then(function(){a=n.mixin({printMapTaskUrl:this.printMapTaskUrl},a);return this._commands[b]&&this._commands[b].command&&this._commands[b].command.execute(d,a||{},c)}.bind(this))}})});
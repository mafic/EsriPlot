// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/RasterFunctionEditor/templates/RFxBandCombinationEditor.html":'\x3cdiv class\x3d"esriRFxBandCombinationEditor"\x3e\r\n  \x3ctable class\x3d"esriRFxArgsEditor__table"\x3e\r\n    \x3ctr class\x3d"esriRFxArgsEditor__tr--arg-name esriRFxBandCombinationEditor--method"\x3e\r\n      \x3ctd data-dojo-attach-point\x3d"methodLabel"\x3e${_i18n.methodLabel}\x3c/td\x3e\r\n    \x3c/tr\x3e\r\n    \x3ctr class\x3d"esriRFxArgsEditor__tr--arg-widget esriRFxBandCombinationEditor--method" \x3e\r\n      \x3ctd\x3e\r\n        \x3cdiv data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"methodSelect" data-dojo-attach-event\x3d"onChange: onBandComboMethodChange"\x3e\x3c/div\x3e\r\n      \x3c/td\x3e\r\n    \x3c/tr\x3e\r\n    \x3ctr class\x3d"esriRFxArgsEditor__tr--arg-name esriRFxBandCombinationEditor--band"\x3e\r\n      \x3ctd\x3e${_i18n.bandLabel}\x3c/td\x3e\r\n    \x3c/tr\x3e\r\n    \x3ctr class\x3d"esriRFxArgsEditor__tr--arg-widget esriRFxBandCombinationEditor--band"\x3e\r\n      \x3ctd\x3e\r\n        \x3cdiv data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"bandNameSelect" data-dojo-attach-event\x3d"onChange: onBandChange"\r\n          data-dojo-attach-props\x3d"labelAttr: \'label\'"\x3e\x3c/div\x3e\r\n        \x3cdiv data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"bandIdSelect" data-dojo-attach-event\x3d"onChange: onBandChange"\r\n          data-dojo-attach-props\x3d"labelAttr: \'label\'"\x3e\x3c/div\x3e\r\n        \x3cdiv data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"bandWavelengthSelect" data-dojo-attach-event\x3d"onChange: onBandChange"\r\n          data-dojo-attach-props\x3d"labelAttr: \'label\'"\x3e\x3c/div\x3e\r\n      \x3c/td\x3e\r\n    \x3c/tr\x3e\r\n    \x3ctr class\x3d"esriRFxArgsEditor__tr--arg-name esriRFxBandCombinationEditor--combination"\x3e\r\n      \x3ctd\x3e${_i18n.combinationLabel}\x3c/td\x3e\r\n    \x3c/tr\x3e\r\n    \x3ctr class\x3d"esriRFxArgsEditor__tr--arg-widget esriRFxBandCombinationEditor--combination"\x3e\r\n      \x3ctd\x3e\r\n        \x3cdiv data-dojo-type\x3d"dijit/form/TextBox" data-dojo-attach-point\x3d"bandCombinationTextbox" data-dojo-attach-event\x3d"onChange: onBandCombinationChange"\x3e\x3c/div\x3e\r\n      \x3c/td\x3e\r\n    \x3c/tr\x3e\r\n  \x3c/table\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/RasterFunctionEditor/RFxBandCombinationEditor","dojo/_base/declare dojo/_base/lang dojo/has dojo/query dojo/_base/array dojo/store/Memory dojo/data/ObjectStore dojo/dom-style dijit/form/Select dijit/form/TextBox dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin ../../kernel dojo/text!./templates/RFxBandCombinationEditor.html dojo/i18n!../../nls/jsapi".split(" "),function(n,k,p,l,e,f,g,h,m,x,q,r,t,u,v,w){m=n("RFxBandCombinationEditor",[q,r,t],{baseClass:"esriRFxBandCombinationEditor",
templateString:v,schemaArgDefinitions:{},inputArgs:{},rasterArgs:{},rasterFunctionSchema:null,rasterFunctionEnums:null,rasterSelect:null,constructor:function(a){this.inherited(arguments);n.safeMixin(this,a);this._i18n=w.widgets.rasterFunctionEditor.rfxBandCombinationEditor},postCreate:function(){this.inherited(arguments);this._setLabels();this._processRasterArgs();this._bandControls=[this.bandNameSelect,this.bandWavelengthSelect,this.bandIdSelect];this._setupBandComboStore();this._setupValues()},
startup:function(){this.inherited(arguments);this._setArgVisibilities()},_setupValues:function(){var a=this.inputArgs;a&&a.Method&&void 0!==a.Method.value?this.methodSelect.set("value",a.Method.value.toString()):(!a.BandIds||a.BandNames||a.BandWavelengths?!a.BandNames||a.BandIds||a.BandWavelengths?!a.bandWavelengths||a.BandIds||a.BandNames||this.methodSelect.set("value","1"):this.methodSelect.set("value","0"):this.methodSelect.set("value","2"),this.methodSelect.set("disabled",!0));this._setBandCombinationValue()},
_setBandCombinationValue:function(){var a=this.inputArgs;0===this.method&&a.BandNames&&a.BandNames.value&&a.BandNames.value.length?this.bandCombinationTextbox.set("value",a.BandNames.value.join(" ")):1===this.method&&a.BandWavelengths&&a.BandWavelengths.value&&a.BandWavelengths.value.length?this.bandCombinationTextbox.set("value",a.BandWavelengths.value.join(" ")):2===this.method&&a.BandIds&&a.BandIds.value&&a.BandIds.value.length&&this.bandCombinationTextbox.set("value",a.BandIds.value.map(function(a){return+a+
1}).join(" "))},_setArgVisibilities:function(){var a=this.inputArgs,b;this.isShownFx(a.Method)||(b=l("."+this.baseClass+"--method",this.domNode),e.forEach(b,function(a){h.set(a,"display","none")}));this.isShownFx(a.BandIds)||this.isShownFx(a.BandNames)||this.isShownFx(a.BandWavelengths)||(b=l("."+this.baseClass+"--band",this.domNode),b=b.concat(l("."+this.baseClass+"--combination",this.domNode)),e.forEach(b,function(a){h.set(a,"display","none")}))},_processRasterArgs:function(){if(this.rasterArgs){var a=
(this.rasterArg=this.rasterArgs.Raster)&&this.rasterArg.input;a&&(this._updateRasterArg(a.value),a.on("change",k.hitch(this,this._updateRasterArg)))}},_updateRasterArg:function(a){this.layer=(a=this.rasterArg&&this.rasterArg.input)&&"function"===typeof a.getSelectedLayer?a.getSelectedLayer():void 0;this._updateBands()},_updateBands:function(){if(this.layer){var a=[],b=[],d=[{label:"200"},{label:"400"},{label:"600"}];this.layer.getKeyProperties({renderingRule:this.layer.renderingRule}).then(k.hitch(this,
function(c){e.forEach(c.BandProperties,function(c,d){a.push({label:String(d+1)});c.BandName&&b.push({label:c.BandName})});if(!c.BandProperties||c.BandProperties&&!c.BandProperties.length)c=this._getDefaultBandProperties(),b=c.bandNames,a=c.bandIds;this.bandWavelengthSelect.set("store",new g(new f({data:d,idProperty:"label"})));this.bandNameSelect.set("store",new g(new f({data:b,idProperty:"label"})));this.bandIdSelect.set("store",new g(new f({data:a,idProperty:"label"})))}))}},_getDefaultBandProperties:function(){for(var a=
this.layer.bandCount,b=[],d=[],c=1;c<=a;c++)b.push({label:String(c)}),d.push({label:"Band_"+c});return{bandNames:d,bandIds:b}},_setupBandComboStore:function(){if(this.rasterFunctionEnums){var a=[];e.forEach(this.rasterFunctionEnums.bandComboMethods,function(b){a.push({key:b.key+"",label:b.label})});this.methodSelect.set("labelAttr","label");this.methodSelect.set("store",new g(new f({idProperty:"key",data:a})));this.onBandComboMethodChange(this.methodSelect.value)}},onBandComboMethodChange:function(a){this.method=
parseInt(a,10);this.inputArgs&&this.inputArgs.Method&&(this.inputArgs.Method.value=this.method);e.forEach(this._bandControls,function(a,d){if(d===this.method)return h.set(a.domNode,"display","");h.set(a.domNode,"display","none")},this);this._setBandCombinationValue()},onBandChange:function(a){var b=this.bandCombinationTextbox.value;b.length?this.bandCombinationTextbox.set("value",b+" "+a):this.bandCombinationTextbox.set("value",a)},onBandCombinationChange:function(){var a=this.bandCombinationTextbox.value,
b=0<e.indexOf(a,",")?a.split(","):a.split(" ");e.forEach(b,function(a,c){b[c]=1===this.method?parseFloat(a):2===this.method?parseInt(a,10)-1:a.trim()},this);a=this.inputArgs;this._clearArgValues();a&&(0===this.method&&a.BandNames?a.BandNames.value=b:1===this.method&&a.BandWavelengths?a.BandWavelengths.value=b:2===this.method&&a.BandIds&&(a.BandIds.value=b))},_clearArgValues:function(){var a=this.inputArgs;a&&(a.BandIds&&(a.BandIds.value=void 0),a.BandNames&&(a.BandNames.value=void 0),a.BandWavelengths&&
(a.BandWavelengths.value=void 0))},_setLabels:function(){this.inputArgs&&this.inputArgs.Method&&(this.methodLabel.innerHTML=this.inputArgs.Method.displayName)}});p("extend-esri")&&k.setObject("dijit.RasterFunctionEditor.RFxBandCombinationEditor",m,u);return m});
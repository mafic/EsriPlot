// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/RasterFunctionEditor/RFxRemapGrid",["dojo/_base/declare","dojo/_base/lang","dojo/has","../../kernel","../analysis/RemapGrid"],function(c,d,e,f,g){c=c("RFxRemapGrid",[g],{inputArgs:{},constructor:function(b){this.inherited(arguments);this.own(this.on("change",d.hitch(this,this._updateInputArgs)))},postCreate:function(){this.inherited(arguments);this._setArgVisibilities();this._setRanges()},_setArgVisibilities:function(){var b="none",a,c;for(c in this.inputArgs)this.inputArgs.hasOwnProperty(c)&&
(a=this.inputArgs[c],!a.hasOwnProperty("isPublic")||a.isPublic)&&(b="block");this.domNode.style.display=b},_setRanges:function(){var b={},a=this.inputArgs;a&&(a.InputRanges&&(b.InputRanges=a.InputRanges.value),a.OutputValues&&(b.OutputValues=a.OutputValues.value),a.NoDataRanges&&(b.NoDataRanges=a.NoDataRanges.value),this.set("ranges",b))},_updateInputArgs:function(){var b=this.get("ranges"),a=this.inputArgs;a&&b&&(a.InputRanges&&(a.InputRanges.value=b.InputRanges),a.OutputValues&&(a.OutputValues.value=
b.OutputValues),a.NoDataRanges&&(a.NoDataRanges.value=b.NoDataRanges))}});e("extend-esri")&&d.setObject("dijit.RasterFunctionEditor.RFxRemapGrid",c,f);return c});
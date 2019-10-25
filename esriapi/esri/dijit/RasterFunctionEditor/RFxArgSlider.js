// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/RasterFunctionEditor/templates/RFxArgSlider.html":'\x3cdiv class\x3d"esriRFxArgSlider"\x3e\r\n\t\x3ctable class\x3d"esriRFxArgsEditor__table"\x3e\r\n\t\t\x3ccol class\x3d"${baseClass}SliderCell"\x3e\r\n\t\t\x3ccol class\x3d"${baseClass}NumberSpinnerCell"\x3e\r\n\t\t\x3ctr colspan\x3d"2"\x3e\r\n\t\t\t\x3cth class\x3d"${baseClass}LabelCell" align\x3d"left"\x3e\r\n\t\t\t\t\x3cdiv class\x3d"${baseClass}Label" data-dojo-attach-point\x3d"labelNode"\x3e\r\n\t\t\t\t\x3c/div\x3e\r\n\t\t\t\x3c/th\x3e\r\n\t\t\x3c/tr\x3e\r\n\t\t\x3ctr\x3e\r\n\t\t\t\x3ctd class\x3d"${baseClass}SliderCell"\x3e\r\n\t\t\t\t\x3cinput data-dojo-type\x3d"dijit/form/HorizontalSlider" data-dojo-props\x3d"\r\n\t\t\t\t\t\t\tintermediateChanges: true,\r\n\t\t\t\t\t\t\tstyle:\'width: 100%\',\r\n\t\t\t\t\t\t\tshowButtons: false" data-dojo-attach-event\x3d"onChange: _onSliderChange" data-dojo-attach-point\x3d"slider" /\x3e\r\n\t\t\t\t\x3col data-dojo-type\x3d"dijit/form/HorizontalRule" data-dojo-props\x3d"\r\n\t\t\t\t\t\t\tcontainer: \'bottomDecoration\',\r\n\t\t\t\t\t\t\tcount: 11," style\x3d"height: 5px; margin: 2px 9px;" data-dojo-attach-point\x3d"sliderRuleNode"\x3e\r\n\t\t\t\t\x3c/ol\x3e\r\n\r\n\t\t\t\x3c/td\x3e\r\n\t\t\t\x3ctd class\x3d"${baseClass}NumberSpinnerCell"\x3e\r\n\t\t\t\t\x3cinput data-dojo-type\x3d"dijit/form/NumberSpinner" data-dojo-props\x3d"smallDelta:1,\r\n\t\t\t\tintermediateChanges: true,\r\n\t\t\t\tconstraints:{min:0,max:10,places:3}" data-dojo-attach-event\x3d"onChange: _onNumberSpinnerChange" data-dojo-attach-point\x3d"spinner"\r\n\t\t\t\t class\x3d"${baseClass}NumberSpinner" /\x3e\r\n\t\t\t\x3c/td\x3e\r\n\t\t\x3c/tr\x3e\r\n\t\x3c/table\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/RasterFunctionEditor/RFxArgSlider","dojo/_base/declare dojo/_base/lang dojo/has ../../kernel dijit/form/HorizontalSlider dijit/form/HorizontalRuleLabels dijit/form/HorizontalRule dijit/form/NumberSpinner dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./templates/RFxArgSlider.html".split(" "),function(a,b,c,d,k,l,m,n,e,f,g,h){a=a("RFxArgSlider",[e,f,g],{declaredClass:"esri.dijit.RasterFunctionEditor.RFxArgSlider",templateString:h,baseClass:"esriRFxArgSlider",
label:"",min:0,max:100,value:0,postCreate:function(){this.labelNode.innerHTML=this.label;this.slider.set("minimum",this.min);this.slider.set("maximum",this.max);this.spinner.attr("constraints",{min:this.min,max:this.max});this.slider.set("value",this.value);this.spinner.set("value",this.value)},_onNumberSpinnerChange:function(){this.slider.set("value",this.spinner.value,!1);this.set("value",this.slider.value)},_onSliderChange:function(){this.spinner.set("value",this.slider.value,!1);this.set("value",
this.slider.value)},_setValueAttr:function(a){this._set("value",a)}});c("extend-esri")&&b.setObject("dijit.RasterFunctionEditor.RFxArgSlider",a,d);return a});
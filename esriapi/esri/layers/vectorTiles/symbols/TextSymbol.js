// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("../core/declare ../core/lang ../core/screenUtils ../Color ./Symbol ./Font".split(" "),function(h,a,e,f,k,l){var g={text:"",rotated:!1,kerning:!0,color:[0,0,0,1],font:{},angle:0,xoffset:0,yoffset:0,horizontalAlignment:"center"},c=h(k,{declaredClass:"esri.symbols.TextSymbol",properties:{backgroundColor:{type:f,json:{write:!0}},borderLineColor:{type:f,json:{write:!0}},borderLineSize:{type:Number,json:{write:!0}},color:{},font:{type:l,json:{write:!0}},horizontalAlignment:{value:"center",json:{write:!0}},
kerning:{value:!0,json:{write:!0}},haloColor:{type:f,json:{write:!0}},haloSize:{type:Number,cast:e.toPt,json:{write:!0}},rightToLeft:{json:{write:!0}},rotated:{value:!1,json:{write:!0}},text:{type:String,json:{write:!0}},type:"text",verticalAlignment:{type:String,json:{write:!0}},xoffset:{value:0,type:Number,cast:e.toPt,json:{write:!0}},yoffset:{value:0,type:Number,cast:e.toPt,json:{write:!0}},angle:{type:Number,value:0,json:{read:function(b){return b&&-1*b},write:function(b,a){a.angle=b&&-1*b}}},
width:{json:{write:!0}}},getDefaults:function(){return a.mixin(this.inherited(arguments),g)},normalizeCtorArgs:function(b,a,c){if(b&&"string"!==typeof b)return b;var d={};b&&(d.text=b);a&&(d.font=a);c&&(d.color=c);return d},clone:function(){return new c({angle:this.angle,backgroundColor:a.clone(this.backgroundColor),borderLineColor:a.clone(this.borderLineColor),borderLineSize:this.borderLineSize,color:a.clone(this.color),font:this.font&&this.font.clone(),haloColor:a.clone(this.haloColor),haloSize:this.haloSize,
horizontalAlignment:this.horizontalAlignment,kerning:this.kerning,rightToLeft:this.rightToLeft,rotated:this.rotated,text:this.text,verticalAlignment:this.verticalAlignment,width:this.width,xoffset:this.xoffset,yoffset:this.yoffset})}});a.mixin(c,{ALIGN_START:"start",ALIGN_MIDDLE:"middle",ALIGN_END:"end",DECORATION_NONE:"none",DECORATION_UNDERLINE:"underline",DECORATION_OVERLINE:"overline",DECORATION_LINETHROUGH:"line-through"});c.defaultProps=g;return c});
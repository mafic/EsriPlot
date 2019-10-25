// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/layers/pixelFilters/VectorFieldPixelFilter","dojo/_base/declare dojo/_base/lang dojo/has ../../kernel ../../lang dojo/_base/array".split(" "),function(d,g,v,w,x,k){d=d(null,{declaredClass:"esri.layers.pixelFilters.VectorFieldPixelFilter",speedUnits:["esriMetersPerSecond","esriKilometersPerHour","esriKnots","esriFeetPerSecond","esriMilesPerHour"],constructor:function(b){g.mixin(this,b);this.isDataUV=b&&b.isDataUV?b.isDataUV:!1;this.computeMagnitudeAndDirection=g.hitch(this,this.computeMagnitudeAndDirection);
this.unitConversionFactor=1;this._updateUnitConvFactor()},setUnits:function(b,a){this.inputUnit=b;this.outputUnit=a;this.unitConversionFactor=1;this._updateUnitConvFactor()},_updateUnitConvFactor:function(){var b=k.indexOf(this.speedUnits,this.inputUnit),a=k.indexOf(this.speedUnits,this.outputUnit);if(this.inputUnit&&this.outputUnit&&0<=b&&0<=a){var c=[1,.277778,.514444,.3048,.44704,0];this.unitConversionFactor=c[b]/c[a]}},computeMagnitudeAndDirection:function(b){if(!x.isDefined(b))throw"Could not compute magnitude and direction. No pixel data is available.";
var a=b.pixelBlock;if(!x.isDefined(a)||2!==a.getPlaneCount())throw"Could not compute magnitude and direction. Pixel data does not contain two bands.";var c=b.extent,d=(c.xmax-c.xmin)/a.width,g=(c.ymax-c.ymin)/a.height,k=c.xmin+d/2,c=c.ymax-g/2;a.statistics[0].minValue=0;a.statistics[0].maxValue=0;var v=180/Math.PI,y=[],l=0,m=0,h=0,w=!x.isDefined(a.mask),n,p,e,f,q,r,t,u;q=t=Infinity;r=u=-Infinity;for(l=0;l<a.height;l++)for(m=0;m<a.width;m++,h++)if(y.push([k+d*m,c-g*l]),w||a.mask[h])e=n=a.pixels[0][h]*
this.unitConversionFactor,f=p=a.pixels[1][h],this.isDataUV&&(e=Math.sqrt(n*n+p*p),f=90-v*Math.atan2(p,n),a.pixels[0][h]=e*this.unitConversionFactor,a.pixels[1][h]=f),e>r&&(r=e),e<q&&(q=e),f>u&&(u=f),f<t&&(t=f);a.statistics[0].maxValue=r;a.statistics[0].minValue=q;a.statistics[1].maxValue=u;a.statistics[1].minValue=t;b.locations=y;return b}});v("extend-esri")&&g.setObject("layers.pixelFilters.VectorFieldPixelFilter",d,w);return d});
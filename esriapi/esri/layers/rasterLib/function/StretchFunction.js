// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/layers/rasterLib/function/StretchFunction","dojo/_base/declare dojo/_base/lang ./RasterFunctionX ../../PixelBlock ./vertexShaders ./pixelShaders ./RasterFunctionWebGLMixin".split(" "),function(A,y,B,C,H,z,D){return A([B,D],{declaredClass:"esri.layers.rasterLib.function.StretchFunction",functionName:"Stretch",supportWebGL:!0,support2D:!0,constructor:function(a){this.functionArguments=this.mixinIgnoreCase({stretchType:0,min:0,max:255,numberOfStandardDeviations:2,statistics:null,histograms:null,
dra:!1,minPercent:.25,maxPercent:.5,useGamma:!1,gamma:null,raster:null,computeGamma:!1},a);this.functionArguments.statistics=this._convertStats(this.functionArguments.statistics);-1===[0,3,5,6].indexOf(this.functionArguments.stretchType)&&(console.error("The specific stretch type has not been implemented: "+this.functionArguments.stretchType),this.functionArguments.stretchType=5);this.min=null==this.min?0:this.min;this.max=null==this.max?255:this.max},bind:function(a){a=this.getSourceRasterInfo(a);
if(!a.raster)return Error("The raster input to stretch function is invalid.");this.rasterInfo=y.mixin(a.raster,{bandCount:a.raster.bandCount,pixelType:this._calculatePixelType(this.pixelType,"U8"),statistics:null,histograms:null});this.rasterInfo.keyProperties=this.rasterInfo.keyProperties||{};this.rasterInfo.keyProperties.DataType="Generic";return!0},read2D:function(a){a=a.raster;this._stretch(a);return a},hasTilingEffects:function(a){a=a||this.functionArguments;return!!(a.dra||a.raster&&"object"===
typeof a.raster&&a.raster.dra)},_convertStats:function(a){return a?a.map(function(a){return a&&null!=a.min?[a.min,a.max,a.mean,a.stddev]:a}):null},_updateStatistisHistograms:function(a){var d=this.functionArguments;if(!(a&&a.pixelBlock&&a.pixelBlock.pixels))this._statistics=d.statistics,this._histograms=d.histograms,this._gammaCorrection=this._getGammaCorrection(),this._statistics=this._convertStats(this._statistics);else if(0!==d.stretchType){var b=a.pixelBlock,c=b.pixels.length,k=6===d.stretchType&&
(d.dra||!d.histograms)||3===d.stretchType&&d.dra;k&&(b.statistics||b.calculateStatistics(),this._calculateStatisticsHistograms(a));if(d.dra)if(b.statistics||b.calculateStatistics(),k)this._statistics=b.statistics,this._histograms=b.histograms;else for(d=b.statistics,this._statistics=[],a=0;a<c;a++)this._statistics[a]=[d[a].minValue,d[a].maxValue,0,0];else this._statistics=d.statistics,this._histograms=d.histograms;this._statistics=this._convertStats(this._statistics);this._gammaCorrection=this._getGammaCorrection()}},
_getGammaCorrection:function(){var a=this.functionArguments.gamma;if(a){var d=[],b;for(b=0;b<a.length;b++)d[b]=1<a[b]?2<a[b]?6.5+Math.pow(a[b]-2,2.5):6.5+100*Math.pow(2-a[b],4):1;return d}},_stretch:function(a){if(null!==a&&null!==a.pixelBlock&&null!==a.pixelBlock.pixels&&0!==this.functionArguments.stretchType){this._updateStatistisHistograms(a);var d=a.pixelBlock,b=d.pixels,d=d.width*d.height,c=b.length,k,m;this._createLUT(a);if(null==this.LUT)return this._filterNoLUT(a);var h=this.LUT,g=this.LUTOffset,
f,e;for(k=0;k<c;k++)for(e=h[k],m=0;m<d;m++)f=b[k][m],b[k][m]=e[f-g];a.pixelBlock.pixelType="U8"}},_calculateStatisticsHistograms:function(a){var d=this.functionArguments;a=a.pixelBlock;var b=a.pixelType,c=a.pixels,k=a.mask,m=c.length,h,g,f,e,l=function(a){d.min=-.5;d.max=255.5;this.size=256;y.mixin(this,a);this.counts=this.counts||new Uint32Array(this.size)},q=[],n,p,r,t,u,v;for(f=0;f<m;f++){n=new l;p=n.counts;t=c[f];if("U8"===b)if(k)for(e=0;e<a.width*a.height;e++)k[e]&&p[t[e]]++;else for(e=0;e<a.width*
a.height;e++)p[t[e]]++;else{h=a.statistics[f].minValue;g=a.statistics[f].maxValue;n.min=h;n.max=g;g=(g-h)/256;r=new Uint32Array(257);if(k)for(e=0;e<a.width*a.height;e++)k[e]&&r[Math.floor((t[e]-h)/g)]++;else for(e=0;e<a.width*a.height;e++)r[Math.floor((t[e]-h)/g)]++;for(e=0;255>e;e++)p[e]=r[e];p[255]=r[255]+r[256]}q.push(n);t=[];h=a.statistics[f].minValue;g=a.statistics[f].maxValue;for(e=v=u=r=0;e<n.size;e++)r+=p[e],u+=e*p[e];u/=r;for(e=0;e<n.size;e++)v+=p[e]*Math.pow(e-u,2);p=Math.sqrt(v/(r-1));
e=(u+.5)*(n.max-n.min)/n.size+n.min;n=p*(n.max-n.min)/n.size;t.push(h);t.push(g);t.push(e);t.push(n);a.statistics[f]={min:h,minValue:h,max:g,maxValue:g,mean:e,stddev:n}}a.histograms=q},_getCutOffPoints:function(a){var d=this.functionArguments,b=999;a&&a.pixelBlock?b=a.pixelBlock.pixels.length:a&&a.texture&&(b=3);a=Math.min(b,this._statistics.length);var c=[],k=[],m,h,g,f,e,l;switch(d.stretchType){case 5:for(e=0;e<a;e++)c[e]=this._statistics[e][0],k[e]=this._statistics[e][1];break;case 3:for(e=0;e<
a;e++)c[e]=this._statistics[e][2]-d.numberOfStandardDeviations*this._statistics[e][3],k[e]=this._statistics[e][2]+d.numberOfStandardDeviations*this._statistics[e][3],c[e]<this._statistics[e][0]&&(c[e]=this._statistics[e][0]),k[e]>this._statistics[e][1]&&(k[e]=this._statistics[e][1]);break;case 6:for(e=0;e<a;e++){b=this._histograms[e];g=new Uint32Array(b.size);h=b.counts;m=0;f=-.5===b.min&&1===(b.max-b.min)/h?.5:0;for(l=0;l<b.size;l++)m+=h[l],g[l]=m;h=d.minPercent*m/100;for(l=0;l<b.size;l++)if(g[l]>
h){c[e]=b.min+(b.max-b.min)/b.size*(l+f);break}h=(1-d.maxPercent/100)*m;for(l=b.size-2;0<=l;l--)if(g[l]<h){k[e]=b.min+(b.max-b.min)/b.size*(l+2-f);break}}break;default:for(e=0;e<b;e++)c[e]=0,k[e]=255}return{minCutOff:c,maxCutOff:k}},_createLUT:function(a){var d=this.functionArguments,b=a.pixelBlock,c=b.pixelType;if("U8"===c||"U16"===c||"S8"===c||"S16"===c){if(this._LUTSignature&&(c=this._computeLutSignature(),c.length===this._LUTSignature.length&&!c.some(function(a,b){return a!==this._LUTSignature[b]}.bind(this))))return;
var c=b.pixels.length,k=[],m=[],h,g,f=d.max,e=d.min,l=d.gamma,q=f-e,n=this._getCutOffPoints(a);a=n.minCutOff;var n=n.maxCutOff,p=0,r=256,t;"S8"===b.pixelType?p=-127:"S16"===b.pixelType&&(p=-32767);if("U16"===b.pixelType||"S16"===b.pixelType)r=65536;for(b=0;b<c;b++)k[b]=n[b]-a[b];var u=this._gammaCorrection;if(d.useGamma)for(var v,b=0;b<c;b++){t=[];for(d=0;d<r;d++)h=d+p,v=(h-a[b])/k[b],g=1,1<l[b]&&(g-=Math.pow(1/q,v*u[b])),h<n[b]&&h>a[b]?t[d]=Math.floor(g*q*Math.pow(v,1/l[b]))+e:h>n[b]?t[d]=f:h<a[b]&&
(t[d]=e);m[b]=t}else for(b=0;b<c;b++){t=[];for(d=0;d<r;d++)h=d+p,t[d]=h<a[b]?e:h>n[b]?f:Math.floor((h-a[b])/k[b]*q)+e;m[b]=t}this.LUT=m;this.LUTOffset=p;this._LUTSignature=this._computeLutSignature()}},_computeLutSignature:function(){var a=this.functionArguments,d=[],b,c;d.push(a.stretchType);d.push(a.min);d.push(a.max);d.push(a.numberOfStandardDeviations);if(this._statistics)for(b=0;b<this._statistics.length;b++)for(c=0;c<this._statistics[b].length;c++)d.push(this._statistics[b][c]);d.push(a.dra?
1:0);d.push(a.minPercent);d.push(a.maxPercent);if(a.gamma)for(b=0;b<this._statistics.length;b++)d.push(a.gamma[b]);d.push(a.useGamma?1:0);return d},_filterNoLUT:function(a){if(null!==a&&null!==a.pixelBlock&&null!==a.pixelBlock.pixels){var d=this.functionArguments,b=a.pixelBlock,c=b.pixels,k=b.mask,b=b.width*b.height,m=c.length,h=[],g=[],f,e,l,q,n=d.max,p=d.min,r=d.gamma,t=n-p;f=this._getCutOffPoints(a);var u=f.minCutOff,v=f.maxCutOff;for(f=0;f<m;f++)h[f]=v[f]-u[f];if(d.useGamma&&null!==r&&r.length>=
m)for(f=0;f<m;f++)g[f]=1<r[f]?2<r[f]?6.5+Math.pow(r[f]-2,2.5):6.5+100*Math.pow(2-r[f],4):1;if(d.useGamma)if(void 0!==k&&null!==k)for(d=0;d<b;d++){if(k[d])for(f=0;f<m;f++)e=c[f][d],q=(e-u[f])/h[f],l=1,1<r[f]&&(l-=Math.pow(1/t,q*g[f])),e<v[f]&&e>u[f]?c[f][d]=Math.floor(l*t*Math.pow(q,1/r[f]))+p:e>v[f]?c[f][d]=n:e<u[f]&&(c[f][d]=p)}else for(d=0;d<b;d++)for(f=0;f<m;f++)e=c[f][d],q=(e-u[f])/h[f],l=1,1<r[f]&&(l-=Math.pow(1/t,q*g[f])),e<v[f]&&e>u[f]?c[f][d]=Math.floor(l*t*Math.pow(q,1/r[f]))+p:e>v[f]?c[f][d]=
n:e<u[f]&&(c[f][d]=p);else if(void 0!==k&&null!==k)for(d=0;d<b;d++){if(k[d])for(f=0;f<m;f++)e=c[f][d],e<v[f]&&e>u[f]?c[f][d]=Math.floor((e-u[f])/h[f]*t)+p:e>v[f]?c[f][d]=n:e<u[f]&&(c[f][d]=p)}else for(d=0;d<b;d++)for(f=0;f<m;f++)e=c[f][d],e<v[f]&&e>u[f]?c[f][d]=Math.floor((e-u[f])/h[f]*t)+p:e>v[f]?c[f][d]=n:e<u[f]&&(c[f][d]=p);a.pixelBlock.pixelType="U8";return a}},_computeGammaValues:function(a){var d=this._statistics.length,b,c=[],k;for(b=0;b<d;b++)k=this._statistics[b][2],"U8"!==a&&(k=255*(k-this._statistics[b][0])/
(this._statistics[b][1]-this._statistics[b][0])),c.push(this._computeGammaValue(k));return c},_computeGammaValue:function(a){if(0!==a&&!(255<a||0>a)){var d=0;0<a&&150!=a&&255>a&&(d=150>=a?45*Math.cos(.01047*a):17*Math.sin(.021*a));d=Math.log((a+d)/255);if(0!==d&&(a=Math.log(a/255)/d,!isNaN(a)))return Math.min(9.9,Math.max(.01,a))}},readGL:function(a){return this._stretchGL(a.raster)},_stretchGL:function(a){this._performance.start();var d=this.renderTexture,b,c,k,m=this.sourceRasterInfo.raster.bandCount,
h=a.pixelBlock,g=this.gl,f=g.drawingBufferWidth,e=g.drawingBufferHeight;if(!h&&this.functionArguments.dra){var l=new Float32Array(f*e*4);c=new Uint8Array(f*e);k=new Float32Array(f*e);var q=new Float32Array(f*e),n=new Float32Array(f*e);g.checkFramebufferStatus(g.FRAMEBUFFER)==g.FRAMEBUFFER_COMPLETE&&g.readPixels(0,0,f,e,g.RGBA,g.FLOAT,l);for(b=0;b<f*e;b++)k[b]=l[4*b],q[b]=l[4*b+1],n[b]=l[4*b+2],c[b]=l[4*b+3];a.pixelBlock=new C({width:f,height:e,pixels:[k,q,n],mask:c});a.pixelBlock.calculateStatistics()}!h&&
this.functionArguments.dra&&this._useGPUStats?(c=new Float32Array(m),k=new Float32Array(m)):(this._updateStatistisHistograms(a),b=this._getCutOffPoints(a),c=new Float32Array(m),k=new Float32Array(m),c.set(b.minCutOff.slice(0,m)),k.set(b.maxCutOff.slice(0,m)));this._initializeProgram({fragment:z.stretch,fragmentName:"Stretch"});l=this._setupTextureData(a);this.renderTexture=!1;b=g.getUniformLocation(this.rasterProgram,"u_image");g.uniform1i(b,0);g.activeTexture(g.TEXTURE0);var p,r;this._performance.start();
!h&&this.functionArguments.dra&&this._useGPUStats&&(this._setUniforms({u_sourceDim:[f,e],u_bandCount:m}),1===m?p=this._readMinMax(l,2):(p=this._readMinMax(l,0),r=this._readMinMax(l,1)),6===this.functionArguments.stretchType||3===this.functionArguments.stretchType&&this.functionArguments.dra)&&(b=this._readHistogram(p,r,a),c=b.minCutOff||c,k=b.minCutOff||k);q=this.functionArguments.max-this.functionArguments.min;a=new Float32Array(m);for(b=0;b<m;b++)a[b]=q/(k[b]-c[b]);this._initializeProgram({fragment:z.stretch,
fragmentName:"Stretch"});g.blendFunc(g.SRC_ALPHA,g.ZERO);q=new Float32Array(3);n=new Float32Array(3);for(b=0;3>b;b++)q[b]=this.functionArguments.min,n[b]=this.functionArguments.max;this._setUniforms({u_sourceDim:[f,e],u_bandCount:m,u_minOutput:q,u_maxOutput:n,u_minCutOff:c,u_maxCutOff:k,u_factor:a,u_state:100,u_useGamma:this.functionArguments.useGamma,u_gamma:this.functionArguments.gamma,u_scaled:!d,u_gammaCorrection:this._gammaCorrection,u_minMaxTexture:!h&&this.functionArguments.dra&&this._useGPUStats?
!0:!1});this.renderTexture=d;g.viewport(0,0,f,e);g.activeTexture(g.TEXTURE0);g.bindTexture(g.TEXTURE_2D,l.texture);!h&&this.functionArguments.dra&&this._useGPUStats&&(d=g.getUniformLocation(this.rasterProgram,"u_image1"),g.uniform1i(d,1),g.activeTexture(g.TEXTURE1),g.bindTexture(g.TEXTURE_2D,p.texture),1<m&&(m=g.getUniformLocation(this.rasterProgram,"u_image2"),g.uniform1i(m,2),g.activeTexture(g.TEXTURE2),g.bindTexture(g.TEXTURE_2D,r.texture)));g=this.bindFrameBuffer();this._drawGL();return{extent:l.extent,
texture:g.texture}},_readMinMax:function(a,d){var b=this.gl,c=a.width||b.drawingBufferWidth,k=a.height||b.drawingBufferHeight;this._setUniforms({u_state:d});this.renderTexture=!1;var m,h,g=a.texture;for(b.activeTexture(b.TEXTURE0);1<c||1<k;)m=this._createTexture(),d=Math.max(Math.ceil(c/2),1),h=Math.max(Math.ceil(k/2),1),b.getExtension("OES_texture_float"),b.texImage2D(b.TEXTURE_2D,0,b.RGBA,d,h,0,b.RGBA,b.FLOAT,null),a=b.createFramebuffer(),b.bindFramebuffer(b.FRAMEBUFFER,a),b.framebufferTexture2D(b.FRAMEBUFFER,
b.COLOR_ATTACHMENT0,b.TEXTURE_2D,m,0),b.viewport(0,0,d,h),b.bindTexture(b.TEXTURE_2D,g),this._setUniforms({u_sourceDim:[c,k]}),c=d,k=h,this._drawGL(!0),g=m;a=new Float32Array(c*k*4);b.checkFramebufferStatus(b.FRAMEBUFFER)==b.FRAMEBUFFER_COMPLETE&&b.readPixels(0,0,c,k,b.RGBA,b.FLOAT,a);return{texture:m,minmax:a}},_readHistogram:function(a,d,b){if(a)try{var c=this.gl,k=c.drawingBufferWidth,m=c.drawingBufferHeight,h,g,f,e,l,q,n;if(a.texture instanceof WebGLTexture)n=!0,e=[1,0,0,1],d?(l=a.minmax,q=d.minmax):
(l=[a.minmax[0]],q=[a.minmax[1]]);else for(q=d,l=a,e=new Float32Array(q.length),h=0;h<q.length;h++)e[h]=256/(q[h]-l[h]);var p=new Float32Array(k*m);for(f=0;f<p.length;f++)p[f]=f;if(!this.histogramProgram){var r=H.getShader(c,H.histogram),t=z.getShader(c,z.constant);this.histogramProgram=this._loadProgram(r,t)}c.blendFunc(c.ONE,c.ONE);c.enable(c.BLEND);c.useProgram(this.histogramProgram);var u=c.getAttribLocation(this.histogramProgram,"a_pixelIndex"),v=c.createBuffer();c.bindBuffer(c.ARRAY_BUFFER,
v);c.bufferData(c.ARRAY_BUFFER,p,c.STATIC_DRAW);c.enableVertexAttribArray(u);c.vertexAttribPointer(u,1,c.FLOAT,!1,0,0);var y=this._setupHistTexture(b),A=this._createTexture();c.getExtension("OES_texture_float");c.texImage2D(c.TEXTURE_2D,0,c.RGBA,257,1,0,c.RGBA,c.FLOAT,null);var B=c.createFramebuffer();c.bindFramebuffer(c.FRAMEBUFFER,B);c.framebufferTexture2D(c.FRAMEBUFFER,c.COLOR_ATTACHMENT0,c.TEXTURE_2D,A,0);c.viewport(0,0,257,1);var C=c.getUniformLocation(this.histogramProgram,"u_image");c.uniform1i(C,
0);c.activeTexture(c.TEXTURE0);c.bindTexture(c.TEXTURE_2D,y);var D=c.getUniformLocation(this.histogramProgram,"u_sourceDim");c.uniform2f(D,k,m);var M=c.getUniformLocation(this.histogramProgram,"u_bandCount");c.uniform1i(M,3);var N=c.getUniformLocation(this.histogramProgram,"u_halfPixel");c.uniform2f(N,.5/k,.5/m);var I=c.getUniformLocation(this.histogramProgram,"u_minMaxTexture");if(n){c.uniform1i(I,1);var O=c.getUniformLocation(this.histogramProgram,"u_image1");c.uniform1i(O,1);c.activeTexture(c.TEXTURE1);
c.bindTexture(c.TEXTURE_2D,a.texture);if(d){var P=c.getUniformLocation(this.histogramProgram,"u_image2");c.uniform1i(P,2);c.activeTexture(c.TEXTURE2);c.bindTexture(c.TEXTURE_2D,d.texture)}}else{var Q=c.getUniformLocation(this.histogramProgram,"u_mins");c.uniform4f(Q,l[0],l[0],l[0],l[0]);c.uniform1i(I,0)}var E=c.getUniformLocation(this.histogramProgram,"u_color"),F=c.getUniformLocation(this.histogramProgram,"u_factors"),R=c.getUniformLocation(this.histogramProgram,"u_size");c.uniform1f(R,256);a=[];
d=[];var w;c.uniform4fv(E,[1,0,0,1]);c.uniform4fv(F,[e[0],0,0,1]);c.drawArrays(c.POINTS,0,p.length);var J=this.sourceRasterInfo.raster.bandCount;1<J&&(c.uniform4fv(E,[0,1,0,1]),c.uniform4fv(F,[0,e[0],0,1]),c.drawArrays(c.POINTS,0,p.length),c.uniform4fv(E,[0,0,1,1]),c.uniform4fv(F,[0,0,e[0],1]),c.drawArrays(c.POINTS,0,p.length));if(c.checkFramebufferStatus(c.FRAMEBUFFER)==c.FRAMEBUFFER_COMPLETE){w=new Float32Array(1028);c.readPixels(0,0,257,1,c.RGBA,c.FLOAT,w);var x,c=0,K=-.5===l[0]&&1===(q[0]-l[0])/
256?.5:0;for(h=0;h<J;h++){x=new Float32Array(257);var L=new Float32Array(257);for(f=c=0;256>f;f++)c+=w[4*f+h],x[f]=c,L[f]=w[4*f+h];L[256]=w[1024+h];x[256]=c+w[1024+h];var G=this.functionArguments.minPercent*c/100;if(q){for(g=0;256>g;g++)if(x[g]>G){a[h]=l[0]+(q[0]-l[0])/256*(g+K);break}G=(1-this.functionArguments.maxPercent/100)*c;for(g=254;0<=g;g--)if(x[g]<G){d[h]=l[0]+(q[0]-l[0])/256*(g+2-K);break}}}}return{histogram:w,minCutOff:a,maxCutOff:d}}catch(S){console.debug("webgl filter exception: "+S.message)}},
_setupHistTexture:function(a){if(a instanceof WebGLTexture)return a;var d=this.originalHistTexture=this._createTexture(),b=this.gl;a=a.pixelBlock;var c=a.width,k=a.height;b.getExtension("OES_texture_float");this.rgbaFloatData=a.getAsRGBAFloat();b.texImage2D(b.TEXTURE_2D,0,b.RGBA,c,k,0,b.RGBA,b.FLOAT,this.rgbaFloatData);return d}})});
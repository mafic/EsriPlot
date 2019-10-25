// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/2d/engine/StageGL","require exports ../../../core/tsSupport/extendsHelper dojo/has ../../../core/promiseUtils ./Container ../engine/webgl/Fader ./webgl/BitBlitRenderer ./webgl/enums ./webgl/WGLPainter ./webgl/shaders/glShaderSnippets ../libs/gl-matrix/common ../libs/gl-matrix/mat2d ../libs/gl-matrix/vec2 ../../support/screenshotUtils ../../webgl/BufferObject ../../webgl/context-util ../../webgl/FramebufferObject ../../webgl/Program ../../webgl/RenderingContext ../../webgl/VertexArrayObject".split(" "),
function(Q,R,D,A,E,F,G,H,r,I,B,J,x,n,K,C,L,y,M,N,O){function z(n){return{state:n.state,pixelRatio:n.pixelRatio,stationary:n.stationary}}var P={png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg"};return function(v){function c(){var a=null!==v&&v.apply(this,arguments)||this;a._clipData=new Float32Array(8);a._upperLeft=n.create();a._upperRight=n.create();a._lowerLeft=n.create();a._lowerRight=n.create();a._mat2=x.create();a._clipRendererInitialized=!1;a._contextVersion=null;a._labelFader=new G.default(a);
return a}D(c,v);Object.defineProperty(c.prototype,"glPainter",{get:function(){return this._painter},enumerable:!0,configurable:!0});c.prototype.fadeInLabels=function(){this._labelFader.reset();this.requestRender()};c.prototype.createElement=function(){var a=document.createElement("canvas");a.setAttribute("class","esri-display-object");return a};c.prototype.setElement=function(a){this.element=a};c.prototype.useContextVersion=function(a){this._renderingContext||(this._contextVersion=a)};c.prototype.attach=
function(a){if(this.attached)return!0;this._resizeCanvas(a);var b=L.createContextOrErrorHTML(this.element,{alpha:!0,antialias:!1,depth:!0,stencil:!0},this._contextVersion);this._renderingContext=new N(b);this._contextVersion=this._renderingContext.contextVersion;this.attached=!0;this._cachedRenderParams=z(a);this._painter||(this._painter=new I.default,this._painter.initialize(this._renderingContext));return v.prototype.attach.call(this,a)};c.prototype.detach=function(a){v.prototype.detach.call(this,
a);this._boundFBO=null;this._clipFBO&&(this._clipFBO.dispose(),this._clipFBO=null);this._labelsFBO1&&(this._labelsFBO1.dispose(),this._labelsFBO1=null);this._labelsFBO2&&(this._labelsFBO2.dispose(),this._labelsFBO2=null);this._blitRenderer&&(this._blitRenderer.dispose(),this._blitRenderer=null);this._clipVAO&&(this._clipVAO.dispose(),this._clipVBO=this._clipVAO=null);this._painter&&(this._painter.dispose(),this._painter=null);this._clipStencilProgram&&(this._clipStencilProgram.dispose(),this._clipStencilProgram=
null);this._renderingContext&&(this._renderingContext.dispose(),this._renderingContext=null);this._cachedRenderParams=null};c.prototype.renderChildren=function(a){var b=this.children;a.drawPhase=r.WGLDrawPhase.FILL|r.WGLDrawPhase.LINE|r.WGLDrawPhase.MARKER|r.WGLDrawPhase.TEXT;for(var h=b.length,d=0;d<h;d++){var e=b[d];e.attached&&this.renderChild(e,a)}if(A("esri-featurelayer-webgl-labeling")){var f=a.context,w=f.getBoundFramebufferObject();f.bindFramebuffer(this._labelsFBO2);d=a.stationary;f.setClearColor(0,
0,0,d?0:1);f.clear(f.gl.COLOR_BUFFER_BIT);if(d)for(a.drawPhase=r.WGLDrawPhase.LABEL_ALPHA,a.labelFBO=this._labelsFBO1,a.labelStep=this._labelFader.step(),d=0;d<h;d++)e=b[d],e.attached&&this.renderChild(e,a);else this._labelFader.reset();f.bindFramebuffer(w);a.labelFBO=this._labelsFBO2;a.drawPhase=r.WGLDrawPhase.LABEL;for(d=0;d<h;d++)e=b[d],e.attached&&this.renderChild(e,a);a=this._labelsFBO2;this._labelsFBO2=this._labelsFBO1;this._labelsFBO1=a}};c.prototype.beforeRenderChildren=function(a,b){a=b.context;
var h=b.state,d=b.pixelRatio;if(b=this._painter){a.enforceState();b.update(h,d);var e=h.width;b=h.height;var f=h.rotation,e=Math.round(e*d);b=Math.round(b*d);this._boundFBO=a.getBoundFramebufferObject();!A("esri-featurelayer-webgl-labeling")||this._labelsFBO1&&this._labelsFBO1.width===e&&this._labelsFBO1.height===b||(this._labelsFBO1&&(this._labelsFBO1.dispose(),this._labelsFBO2.dispose()),this._labelsFBO1=y.createWithAttachments(a,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,samplingMode:9728,
wrapMode:33071,width:e,height:b},{colorTarget:0,depthStencilTarget:0}),a.bindFramebuffer(this._labelsFBO1),a.setDepthWriteEnabled(!0),a.setStencilWriteMask(255),a.setClearColor(0,0,0,0),a.setClearDepth(1),a.setClearStencil(0),a.clear(a.gl.COLOR_BUFFER_BIT|a.gl.DEPTH_BUFFER_BIT|a.gl.STENCIL_BUFFER_BIT),a.setDepthWriteEnabled(!1),a.bindFramebuffer(this._boundFBO),this._labelsFBO2=y.createWithAttachments(a,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,
width:e,height:b},{colorTarget:0,depthStencilTarget:0}));if(h.spatialReference&&(h.spatialReference._isWrappable?h.spatialReference._isWrappable():h.spatialReference.isWrappable)){var w=J.toRadian(f),m=Math.abs(Math.cos(w)),k=Math.abs(Math.sin(w)),c=Math.round(h.worldScreenWidth);if(Math.round(e*m+b*k)<=c)this._clipFrame=!1;else{this._clipFBO&&this._clipFBO.width===e&&this._clipFBO.height===b||(this._clipFBO=new y(a,{colorTarget:0,depthStencilTarget:3,width:e,height:b}));var r=.5*e,g=.5*b,h=1/e,q=
1/b,d=.5*c*d,u=.5*(e*k+b*m),e=this._upperLeft,m=this._upperRight,k=this._lowerLeft,c=this._lowerRight;n.set(e,-d,-u);n.set(m,d,-u);n.set(k,-d,u);n.set(c,d,u);x.identity(this._mat2);x.translate(this._mat2,this._mat2,[r,g]);0!==f&&x.rotate(this._mat2,this._mat2,w);n.transformMat2d(e,e,this._mat2);n.transformMat2d(m,m,this._mat2);n.transformMat2d(k,k,this._mat2);n.transformMat2d(c,c,this._mat2);f=this._clipData;f.set([2*k[0]*h-1,2*(b-k[1])*q-1,2*c[0]*h-1,2*(b-c[1])*q-1,2*e[0]*h-1,2*(b-e[1])*q-1,2*m[0]*
h-1,2*(b-m[1])*q-1]);this._clipRendererInitialized||this._initializeClipRenderer(a);this._clipVBO.setData(f);this._boundFBO=a.getBoundFramebufferObject();a.bindFramebuffer(this._clipFBO);a.setDepthWriteEnabled(!0);a.setStencilWriteMask(255);a.setClearColor(0,0,0,0);a.setClearDepth(1);a.setClearStencil(0);a.clear(a.gl.COLOR_BUFFER_BIT|a.gl.DEPTH_BUFFER_BIT|a.gl.STENCIL_BUFFER_BIT);a.setDepthWriteEnabled(!1);this._clipFrame=!0}}else this._clipFrame=!1}};c.prototype.afterRenderChildren=function(a,b){this._clipFrame&&
this._clipRendererInitialized&&(a=this._renderingContext,a.bindFramebuffer(this._boundFBO),this._boundFBO=null,a.bindVAO(this._clipVAO),a.bindProgram(this._clipStencilProgram),a.setDepthWriteEnabled(!1),a.setDepthTestEnabled(!1),a.setStencilTestEnabled(!0),a.setBlendingEnabled(!1),a.setColorMask(!1,!1,!1,!1),a.setStencilOp(7680,7680,7681),a.setStencilWriteMask(255),a.setStencilFunction(519,1,255),a.drawElements(4,6,5123,0),a.bindVAO(),a.setColorMask(!0,!0,!0,!0),a.setBlendingEnabled(!0),a.setStencilFunction(514,
1,255),this._blitRenderer.render(a,this._clipFBO.colorTexture,9728,1),a.setStencilTestEnabled(!1))};c.prototype.doRender=function(a){var b=this.element.style;this.visible?(b.display="block",b.opacity=""+this.opacity,this._resizeCanvas(a),v.prototype.doRender.call(this,a),this._cachedRenderParams=z(a)):b.display="none"};c.prototype.takeScreenshot=function(a){void 0===a&&(a={});var b=a.pixelRatio||1;this._cachedRenderParams.pixelRatio=b;var h=Math.round(b*this._cachedRenderParams.state.width),d=Math.round(b*
this._cachedRenderParams.state.height),e=0,f=0,c=h,m=d,k=h,n=d;if(k=a.area)e=Math.round(b*k.x),f=Math.round(b*k.y),c=Math.round(b*k.width),m=Math.round(b*k.height);void 0!==a.width&&void 0!==a.height?(k=a.width/a.height,m*k<c?(k*=m,e+=Math.floor((c-k)/2),c=Math.floor(k)):(k=c/k,f+=Math.floor((m-k)/2),m=Math.floor(k)),k=a.width,n=a.height):(k=c,n=m);b=document.createElement("canvas");b.width=k;b.height=n;var r=b.getContext("2d"),g=new Uint8Array(c*m*4),q=this._renderingContext,u=y.create(q,{colorTarget:1,
depthStencilTarget:3,width:h,height:d});q.bindFramebuffer(u);q.setViewport(0,0,h,d);var l=this._cachedRenderParams,p=this._renderingContext.gl;this._renderingContext.setClearColor(0,0,0,0);this._renderingContext.setClearDepth(1);this._renderingContext.setClearStencil(0);this._renderingContext.clear(p.COLOR_BUFFER_BIT|p.DEPTH_BUFFER_BIT|p.STENCIL_BUFFER_BIT);l.context=this._renderingContext;l.painter=this._painter;this.beforeRenderChildren(l,l);if(void 0!==a.rotation&&null!==a.rotation){var p=l.state,
t=p.clone();t.viewpoint.rotation=a.rotation;l.state=t;this.renderChildren(l);l.state=p}else this.renderChildren(l);this.afterRenderChildren(l,l);u.readPixels(e,d-(f+m),c,m,6408,5121,g);q.bindFramebuffer();q=r.getImageData(0,0,k,n);if(0!==e||0!==f||c!==h||m!==d||k!==h||n!==d)K.resampleHermite(g,c,m,q.data,k,n,!0);else{f=m-1;m=0;u=4*c;for(t=p=e=d=h=c=l=void 0;m<f;){p=m*u;t=f*u;for(l=0;l<u;l+=4)c=g[p+l],h=g[p+l+1],d=g[p+l+2],e=g[p+l+3],g[p+l]=g[t+l],g[p+l+1]=g[t+l+1],g[p+l+2]=g[t+l+2],g[p+l+3]=g[t+l+
3],g[t+l]=c,g[t+l+1]=h,g[t+l+2]=d,g[t+l+3]=e;m++;f--}c=q.data;h=g.length;for(f=0;f<h;f++)c[f]=g[f]}g=q.data;m=g.length;for(f=0;f<m;f+=4)e=g[f+3],0<e&&(d=e/255,c=Math.floor(g[f+0]/d),h=Math.floor(g[f+1]/d),d=Math.floor(g[f+2]/d),g[f+0]=255>=c?c:255,g[f+1]=255>=h?h:255,g[f+2]=255>=d?d:255);r.putImageData(q,0,0);r=P[a.format?a.format.toLowerCase():"png"];g=1;void 0!==a.quality&&(g=a.quality/100);a=b.toDataURL(r,g);return E.resolve({dataURL:a,x:0,y:0,width:k,height:n})};c.prototype.prepareChildrenRenderParameters=
function(a){if(!this.attached||!this._renderingContext)return null;a=z(a);var b=this._renderingContext,c=b.gl;b.setDepthWriteEnabled(!0);b.setStencilWriteMask(255);b.setClearColor(0,0,0,0);b.setClearDepth(1);b.setClearStencil(0);b.clear(c.COLOR_BUFFER_BIT|c.DEPTH_BUFFER_BIT|c.STENCIL_BUFFER_BIT);b.setViewport(0,0,this.element.width,this.element.height);b.setDepthWriteEnabled(!1);a.context=b;a.painter=this._painter;return a};c.prototype.attachChild=function(a,b){return a.attach(b)};c.prototype.detachChild=
function(a,b){return a.detach(b)};c.prototype.renderChild=function(a,b){return a.processRender(b)};c.prototype._resizeCanvas=function(a){var b=this.element,c=b.style,d=a.state,e=a.pixelRatio;a=Math.round(d.width*e);e=Math.round(d.height*e);if(b.width!==a||b.height!==e)b.width=a,b.height=e;c.width=d.width+"px";c.height=d.height+"px"};c.prototype._initializeClipRenderer=function(a){if(this._clipRendererInitialized)return!0;this._blitRenderer=new H;var b={a_pos:0},c=new M(a,B.stencilVS,B.stencilFS,b);
if(!c)return!1;var d=C.createVertex(a,35040,32),e=new Uint16Array([0,1,2,2,1,3]),e=C.createIndex(a,35044,e);a=new O(a,b,{geometry:[{name:"a_pos",count:2,type:5126,offset:0,stride:8,normalized:!1,divisor:0}]},{geometry:d},e);this._clipStencilProgram=c;this._clipVBO=d;this._clipVAO=a;return this._clipRendererInitialized=!0};return c}(F)});
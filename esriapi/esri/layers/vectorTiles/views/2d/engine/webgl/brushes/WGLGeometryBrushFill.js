// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/2d/engine/webgl/brushes/WGLGeometryBrushFill","require exports ../../../../../core/tsSupport/extendsHelper ../enums ../Utils ./WGLGeometryBrush ../../../../webgl/VertexArrayObject".split(" "),function(k,l,r,t,u,v,m){Object.defineProperty(l,"__esModule",{value:!0});k=function(g){function b(){var a=null!==g&&g.apply(this,arguments)||this;a._isInitialized=!1;a._fillAttributeLocations={a_pos:0,a_id:1,a_color:2,a_tlbr:3,a_aux:4};a._fillAttributeLocationsVV={a_pos:0,
a_id:1,a_color:2,a_tlbr:3,a_aux:4,a_vv:5};a._spritesTextureSize=new Float32Array(2);return a}r(b,g);b.prototype.dispose=function(){};b.prototype.getGeometryType=function(){return t.WGLGeometryType.FILL};b.prototype.drawGeometry=function(a,e,c,f){f=a.context;var b=a.painter,n=a.rendererInfo,g=a.requiredLevel,k=a.stationary,l=c.indexCount,m=c.indexFrom;this._initialize();var p=c.materialInfo.materialKeyInfo,d=p.hasVV()?this._fillAttributeLocationsVV:this._fillAttributeLocations;if(d=a.painter.materialManager.getProgram(c.materialInfo.materialKey,
a.drawPhase,d)){f.bindProgram(d);var h=this._getVAO(f,e,p.hasVV());f.bindVAO(h);if(0<c.materialInfo.texBindingInfo.length){c=c.materialInfo.texBindingInfo[0];var h=c.pageId,q=a.painter.textureManager.sprites;this._spritesTextureSize[0]=q.getWidth(h);this._spritesTextureSize[1]=q.getHeight(h);d.setUniform1f("u_zoomFactor",1/Math.pow(2,g-e.key.level)/a.pixelRatio);b.textureManager.bindSpritePage(f,h,c.unit,k?9728:9729);d.setUniform1i(c.semantic,c.unit);d.setUniform2fv("u_mosaicSize",this._spritesTextureSize)}d.setUniformMatrix4fv("u_transformMatrix",
e.tileTransform.transform);d.setUniform2fv("u_normalized_origin",e.tileTransform.displayCoord);d.setUniform1f("u_opacity",1);p.vvColor&&(d.setUniform1fv("u_vvColorValues",n.vvColorValues),d.setUniform4fv("u_vvColors",n.vvColors));p.vvOpacity&&(d.setUniform1fv("u_vvOpacityValues",n.vvOpacityValues),d.setUniform1fv("u_vvOpacities",n.vvOpacities));f.drawElements(4,l,5125,4*m);f.bindVAO(null)}};b.prototype._initialize=function(){if(this._isInitialized)return!0;this._fillVertexAttributeLayout={geometry:[{name:"a_pos",
count:2,type:5122,offset:0,stride:24,normalized:!1,divisor:0},{name:"a_id",count:4,type:5121,offset:4,stride:24,normalized:!0,divisor:0},{name:"a_color",count:4,type:5121,offset:8,stride:24,normalized:!0,divisor:0},{name:"a_tlbr",count:4,type:5123,offset:12,stride:24,normalized:!1,divisor:0},{name:"a_aux",count:4,type:5121,offset:20,stride:24,normalized:!1,divisor:0}]};this._fillVertexAttributeLayoutVV={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:32,normalized:!1,divisor:0},{name:"a_id",
count:4,type:5121,offset:4,stride:32,normalized:!0,divisor:0},{name:"a_color",count:4,type:5121,offset:8,stride:32,normalized:!0,divisor:0},{name:"a_tlbr",count:4,type:5123,offset:12,stride:32,normalized:!1,divisor:0},{name:"a_aux",count:4,type:5121,offset:20,stride:32,normalized:!1,divisor:0},{name:"a_vv",count:2,type:5126,offset:24,stride:32,normalized:!1,divisor:0}]};this._isInitialized=!0};b.prototype._getVAO=function(a,e,c){if(e.fillGeometry.vao)return e.fillGeometry.vao;var f=e.fillGeometry.vertexBufferMap[u.C_VBO_GEOMETRY],
b=e.fillGeometry.indexBuffer;if(!f||!b)return null;e.fillGeometry.vao=c?new m(a,this._fillAttributeLocationsVV,this._fillVertexAttributeLayoutVV,{geometry:f},b):new m(a,this._fillAttributeLocations,this._fillVertexAttributeLayout,{geometry:f},b);return e.fillGeometry.vao};return b}(v.default);l.default=k});
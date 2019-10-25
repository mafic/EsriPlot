// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/2d/engine/webgl/brushes/WGLGeometryBrushLine","require exports ../../../../../core/tsSupport/extendsHelper ../enums ../Utils ./WGLGeometryBrush ../../../../webgl/VertexArrayObject".split(" "),function(n,l,t,u,v,w,r){Object.defineProperty(l,"__esModule",{value:!0});n=function(m){function e(){var b=null!==m&&m.apply(this,arguments)||this;b._lineAttributeLocations={a_pos:0,a_id:1,a_color:2,a_offsetAndNormal:3,a_accumulatedDistanceAndHalfWidth:4,a_tlbr:5,a_segmentDirection:6};
b._lineAttributeLocationsVV={a_pos:0,a_id:1,a_color:2,a_offsetAndNormal:3,a_accumulatedDistanceAndHalfWidth:4,a_tlbr:5,a_segmentDirection:6,a_vv:7};b._lineVertexAttributeLayout={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:32,normalized:!1,divisor:0},{name:"a_id",count:4,type:5121,offset:4,stride:32,normalized:!0,divisor:0},{name:"a_color",count:4,type:5121,offset:8,stride:32,normalized:!0,divisor:0},{name:"a_offsetAndNormal",count:4,type:5120,offset:12,stride:32,normalized:!1,divisor:0},
{name:"a_accumulatedDistanceAndHalfWidth",count:2,type:5123,offset:16,stride:32,normalized:!1,divisor:0},{name:"a_tlbr",count:4,type:5123,offset:20,stride:32,normalized:!1,divisor:0},{name:"a_segmentDirection",count:4,type:5120,offset:28,stride:32,normalized:!1,divisor:0}]};b._lineVertexAttributeLayoutVV={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:44,normalized:!1,divisor:0},{name:"a_id",count:4,type:5121,offset:4,stride:44,normalized:!0,divisor:0},{name:"a_color",count:4,type:5121,
offset:8,stride:44,normalized:!0,divisor:0},{name:"a_offsetAndNormal",count:4,type:5120,offset:12,stride:44,normalized:!1,divisor:0},{name:"a_accumulatedDistanceAndHalfWidth",count:2,type:5123,offset:16,stride:44,normalized:!1,divisor:0},{name:"a_tlbr",count:4,type:5123,offset:20,stride:44,normalized:!1,divisor:0},{name:"a_segmentDirection",count:4,type:5120,offset:28,stride:44,normalized:!1,divisor:0},{name:"a_vv",count:3,type:5126,offset:32,stride:44,normalized:!1,divisor:0}]};b._spritesTextureSize=
new Float32Array(2);return b}t(e,m);e.prototype.dispose=function(){};e.prototype.getGeometryType=function(){return u.WGLGeometryType.LINE};e.prototype.drawGeometry=function(b,f,d,c){c=b.context;var p=b.painter,g=b.rendererInfo,e=b.requiredLevel,a=b.drawPhase,m=d.indexFrom,n=d.indexCount,h=d.materialInfo;d=h.materialKeyInfo;var k=d.hasVV()?this._lineAttributeLocationsVV:this._lineAttributeLocations;if(a=p.materialManager.getProgram(h.materialKey,a,k)){c.bindProgram(a);k=this._getVAO(c,f,d.hasVV());
c.bindVAO(k);k=1/b.pixelRatio;if(0<h.texBindingInfo.length){var h=h.texBindingInfo[0],q=h.pageId,l=p.textureManager.sprites;this._spritesTextureSize[0]=l.getWidth(q);this._spritesTextureSize[1]=l.getHeight(q);p.textureManager.bindSpritePage(c,q,h.unit);a.setUniform1i(h.semantic,h.unit);a.setUniform2fv("u_mosaicSize",this._spritesTextureSize)}b=Math.pow(2,e-f.key.level)/b.pixelRatio;a.setUniform1f("u_zoomFactor",b);a.setUniformMatrix4fv("u_transformMatrix",f.tileTransform.transform);a.setUniformMatrix4fv("u_extrudeMatrix",
p.extrudeMatrix);a.setUniform2fv("u_normalized_origin",f.tileTransform.displayCoord);a.setUniform1f("u_opacity",1);a.setUniform1f("u_blur",0+k);a.setUniform1f("u_antialiasing",k);a.setUniform1f("u_zoomFactor",b);d.vvSizeMinMaxValue&&a.setUniform4fv("u_vvSizeMinMaxValue",g.vvSizeMinMaxValue);d.vvSizeScaleStops&&a.setUniform1f("u_vvSizeScaleStopsValue",g.vvSizeScaleStopsValue);d.vvSizeFieldStops&&(a.setUniform1fv("u_vvSizeFieldStopsValues",g.vvSizeFieldStopsValues),a.setUniform1fv("u_vvSizeFieldStopsSizes",
g.vvSizeFieldStopsSizes));d.vvSizeUnitValue&&a.setUniform1f("u_vvSizeUnitValueWorldToPixelsRatio",g.vvSizeUnitValueToPixelsRatio);d.vvColor&&(a.setUniform1fv("u_vvColorValues",g.vvColorValues),a.setUniform4fv("u_vvColors",g.vvColors));d.vvOpacity&&(a.setUniform1fv("u_vvOpacityValues",g.vvOpacityValues),a.setUniform1fv("u_vvOpacities",g.vvOpacities));c.setFaceCullingEnabled(!0);c.setFrontFace(2305);c.setCullFace(1029);c.drawElements(4,n,5125,4*m);c.setFaceCullingEnabled(!1);c.bindVAO(null)}};e.prototype._getVAO=
function(b,f,d){if(f.lineGeometry.vao)return f.lineGeometry.vao;var c=f.lineGeometry.vertexBufferMap[v.C_VBO_GEOMETRY],e=f.lineGeometry.indexBuffer;if(!c||!e)return null;f.lineGeometry.vao=d?new r(b,this._lineAttributeLocationsVV,this._lineVertexAttributeLayoutVV,{geometry:c},e):new r(b,this._lineAttributeLocations,this._lineVertexAttributeLayout,{geometry:c},e);return f.lineGeometry.vao};return e}(w.default);l.default=n});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/plots/Donut","dojo/_base/declare dojo/_base/lang dojox/charting/plot2d/Base dojox/charting/plot2d/_PlotEvents dojox/charting/plot2d/common dojox/gfx/matrix dojox/lang/functional dojox/lang/utils ./animation/_DonutAnimation ./labelsRendering/LabelOverlapFixer ./labelsRendering/LabelsUtil".split(" "),function(H,y,I,J,P,K,u,B,Q,R,N){var S={createPath:function(a,d,e,c,b,f,h,m,q,r,n,g){var k=function(b,g,k){d=void 0!==g?g:d;g=C.getEndAngle(d,
b,f,h,q,n,k);1===b&&(g=Number(Math.floor(1E5*g)/1E5));b=e*m;k=g-d;var p=c.cx+e*Math.cos(d),l=c.cy+e*Math.sin(d),u=c.cx+e*Math.cos(g),w=c.cy+e*Math.sin(g);if(b){var t=c.cx+b*Math.cos(d),v=c.cy+b*Math.sin(d),D=c.cx+b*Math.cos(g),y=c.cy+b*Math.sin(g);b=a.createPath().moveTo(t,v).lineTo(p,l).arcTo(e,e,0,k>Math.PI,!0,u,w).lineTo(D,y).arcTo(b,b,0,k>Math.PI,!1,t,v).closePath().setStroke(r.series.stroke)}else b=a.createPath().moveTo(c.cx,c.cy).lineTo(p,l).arcTo(e,e,0,k>Math.PI,!0,u,w).lineTo(c.cx,c.cy).closePath().setStroke(r.series.stroke);
b.setFill(r.series.fill);return{shape:b,end:g,donutGap:h}};g.push({isSlice:!0,sliceIndex:b,func:k});return k}},C={getStartAngle:function(a,d){return a.series.donutArcPercent&&100!==a.series.donutArcPercent?-270+(100-a.series.donutArcPercent)/100*360/2:(a.series.startAngle||0)+d},getEndAngle:function(a,d,e,c,b,f,h){a=a+2*d*Math.PI-c;e&&(e=f+2*Math.PI-c,a=h||b.series.donutArcPercent&&100!==b.series.donutArcPercent?Math.min(a+c,e):e);return a}};return H([I,J,Q],{enableHole:!0,enableGap:!0,startAngleOffset:0,
_animationInfos:null,_dataLabels:null,_labelBoxes:null,defaultParams:{labels:!0,ticks:!1,fixed:!0,precision:1,labelStyle:"outside",startAngle:0,animate:null},optionalParams:{radius:0,omitLabels:!1,labelFunc:null,stroke:{},outline:{},fill:{},styleFunc:null,font:"",fontColor:"",labelWiring:{}},constructor:function(a,d){this.opt=y.clone(this.defaultParams);B.updateWithObject(this.opt,d);B.updateWithPattern(this.opt,d,this.optionalParams);this.axes=[];this.run=null;this.dyn=[];this.runFilter=[]},clear:function(){this.inherited(arguments);
this.dyn=[];this.run=null;return this},setAxis:function(a){return this},addSeries:function(a){this.run=a;return this},getSeriesStats:function(){return y.delegate(P.defaultStats)},getRequiredColors:function(){return this.run?this.run.data.length:0},getRenderResults:function(){return this._lastRenderResults},render:function(a,d){if(!this.dirty)return this;this.resetEvents();this._eventSeries={};this.cleanGroup();var e=this.group,c=this.chart.theme;if(!this.run||!this.run.data.length)return this;var b=
(a.width-d.l-d.r)/2,f=(a.height-d.t-d.b)/2/this._getRYMultiplier(c),h=Math.min(b,f),m,q,r=K._degToRad(this._getStartAngle(c)),n=r,g,k,v,p,B=this.events(),x=this.run.data.map(function(c,a){"number"!==typeof c&&c.hidden&&(this.runFilter.push(a),c.hidden=!1);return this.runFilter.some(function(c){return c===a})?"number"===typeof c?0:{y:0,text:c.text}:c},this);this.dyn=[];"radius"in this.opt&&(p=h=this.opt.radius);var l={cx:d.l+b,cy:d.t+f,r:h},L;g=u.map(x,"x ? Math.max(x.y, 0) : 0");if(u.every(g,"\x3c\x3d 0"))return e.createCircle(l).setStroke(c.series.stroke),
this.dyn=g.map(function(){return{}}),this;k=u.map(g,"/this",u.foldl(g,"+",0));this.opt.labels&&(v=k.map(function(a,b){return N.getLabelInfo(this,x[b],c,{horizontalAlign:c.series.dataLabelsHorizontalAlign,dataLabelsMaxWidth:c.series.dataLabelsMaxWidth})},this));var w=this.enableHole?(c.series.donutHolePercent||0)/100:0,t=this.enableGap?K._degToRad(c.series.donutGap||0):0;k=this._fixSlices(k,t);this._lastRenderResults={};this._animationInfos=[];this._labelBoxes=[];var O=u.map(x,function(a,b){b=[this.opt,
this.run];null!=a&&"number"!==typeof a&&b.push(a);this.opt.styleFunc&&b.push(this.opt.styleFunc(a));return c.next("slice",b,!0)},this);g=this._preprocessParams(x,c,h,h*w,b,f,l,k);l=g.circle;h=g.r;if(this.opt.labels)switch(q=m=0,v.forEach(function(c,a){m=Math.max(m,c.box.w);q=Math.max(q,c.box.h)}),this.opt.labelStyle){case "outside":g=h;h=Math.min(b-m,f-q)-5;p=h+10;h=Math.max(h,g/2);break;case "inside":p=Math.abs((h-h*w)/2+h*w+(h-m/2))/2;break;case "columns":p=h=Math.min(b-m-20,f-2*q)}var D=Array(k.length);
k.some(function(a,b){a=this._getSliceValueAt(k,b,c);var d=x[b],f=O[b];L=h*w;var g=S.createPath(e,n,h,l,b,b+1===k.length,t,w,c,f,r,this._animationInfos)(a);a=g.end;shape=g.shape;c.series.isEditMode&&(shape.rawNode.style.cursor="pointer");this.dyn.push({fill:void 0,stroke:f.series.stroke});B&&(d={element:"slice",index:b,run:this.run,shape:shape,x:b,y:"number"===typeof d?d:d.y,cx:l.cx,cy:l.cy,cr:h},this._connectEvents(d),D[b]=d);n=a+t;return!1},this);if(this.opt.labels)if("outside"===this.opt.labelStyle||
"inside"===this.opt.labelStyle)n=r,k.some(function(a,b){a=this._getSliceValueAt(k,b,c);var d=v[b];if(0>=a)return!1;if(1<=a)return this._labelBoxes.push({x:l.cx-d.box.w/2,y:l.cy-d.box.h/2,w:d.box.w,h:d.box.h,text:d.getText()}),!0;a=C.getEndAngle(n,a,b+1===k.length,t,c,r);if(this.opt.omitLabels&&.001>a-n)return!1;var e=(n+a)/2;"outside"===this.opt.labelStyle?(b=l.cx+p*Math.cos(e)-(d.box.w/2-d.box.w/2*Math.cos(e)),e=l.cy+p*Math.sin(e)-(d.box.h/2-d.box.h/2*Math.sin(e))):(b=l.cx+p*Math.cos(e)-d.box.w/
2,e=l.cy+p*Math.sin(e)-d.box.h/2);this._labelBoxes.push({x:b,y:e,w:d.box.w,h:d.box.h,text:d.getText()});n=a+t;return!1},this);else if("columns"===this.opt.labelStyle){var n=r,H=this.opt.omitLabels,E=[];k.forEach(function(a,b){a=this._getSliceValueAt(k,b,c);a=C.getEndAngle(n,a,b+1===k.length,t,c,r);var d=(n+a)/2;E.push({angle:d,left:0>Math.cos(d),theme:O[b],index:b,omit:H?.001>a-n:!1});n=a+t},this);this._getProperLabelRadius(E,v[0].box.h,1.1*p);for(f=0;f<E.length;f++){g=E[f];var z=v[f];if(!g.omit){var F=
l.cx-b,G=l.cx+b,A=z.box.w+5,I=l.cx+g.labelR*Math.cos(g.angle),M=l.cy+g.labelR*Math.sin(g.angle),G=g.left?F+A:G-A,F=g.left?F:G+5,A=e.createPath().moveTo(l.cx+p*Math.cos(g.angle),l.cy+p*Math.sin(g.angle));A.lineTo(I,M);A.lineTo(G,M).setStroke(g.theme.series.labelWiring);this._labelBoxes.push({x:F,y:M-z.box.h/2,w:z.box.w,h:z.box.h,text:z.getText()})}}}this._renderLabels(e,c,a,d);var J=0;this._eventSeries[this.run.name]=u.map(x,function(a){return 0>=a?null:D[J++]});this.dirty=!1;this._lastRenderResults=
y.mixin(this._lastRenderResults,{labels:this.opt.labels,radiusInner:L,radiusOuter:h});this._renderAdditionalElements(x,e,c,h,L,l,k);this.opt.animate&&this._renderAnimation(c,h,e,l,k);return this},_renderLabels:function(a,d,e,c){this._dataLabels=[];R.fixLabelsOverlap(this._labelBoxes,e,c,this._getFixLabelsParams(),a);this._labelBoxes.forEach(function(a){a.hidden||this._dataLabels.push(this.renderLabel(a))},this)},renderLabel:function(a){a=N.renderHTMLLabel(this.chart,a.x,a.y,a.text);this.htmlElements.push(a);
return a},_getFixLabelsParams:function(){return{allowXShift:!0,allowYShift:!0,xGap:3,yGap:3,xTolerance:0,yTolerance:0}},_getStartAngle:function(a){return C.getStartAngle(a,this.startAngleOffset)},_getEndAngle:function(a){return 0},_fixSlices:function(a,d){var e=[],c=0,b=[],f=d/(2*Math.PI)+.001;a.forEach(function(a,d){if(a<f){var h=f-a;a=f;c+=h;b.push(d);e[d]=a}});var h=c/(a.length-b.length);a.forEach(function(a,c){-1===b.indexOf(c)&&(a-=h,e[c]=a)});return e},_getSliceValueAt:function(a,d,e){return Math.max(0,
a[d])*(e.series.donutArcPercent?e.series.donutArcPercent/100:1)},_preprocessParams:function(a,d,e,c,b,f,h,m){return{circle:h,r:e}},_getRYMultiplier:function(a){return Math.max(.625,a.series.donutArcPercent&&100!==a.series.donutArcPercent?(1+Math.cos(K._degToRad(360*(100-a.series.donutArcPercent)/100/2.1)))/2:1)},_renderAdditionalElements:function(a,d,e,c,b,f,h){},_getProperLabelRadius:function(a,d,e){var c,b,f=1,h=1;if(1===a.length)a[0].labelR=e;else{for(var m=0;m<a.length;m++){var q=Math.abs(Math.sin(a[m].angle));
a[m].left?f>=q&&(f=q,c=a[m]):h>=q&&(h=q,b=a[m])}c.labelR=b.labelR=e;this._calculateLabelR(c,a,d);this._calculateLabelR(b,a,d)}},_calculateLabelR:function(a,d,e){for(var c=a.index,b=d.length,f=a.labelR;!(d[c%b].left^d[(c+1)%b].left);)d[(c+1)%b].omit||(f=(Math.sin(d[c%b].angle)*f+(d[c%b].left?-e:e))/Math.sin(d[(c+1)%b].angle),f=f<a.labelR?a.labelR:f,d[(c+1)%b].labelR=f),c++;c=a.index;for(b=0===c?b-1:c-1;!(d[c].left^d[b].left);)d[b].omit||(f=(Math.sin(d[c].angle)*f+(d[c].left?e:-e))/Math.sin(d[b].angle),
f=f<a.labelR?a.labelR:f,d[b].labelR=f),c--,b--,c=0>c?c+d.length:c,b=0>b?b+d.length:b}})});
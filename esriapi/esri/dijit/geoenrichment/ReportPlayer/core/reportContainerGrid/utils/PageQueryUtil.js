// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/reportContainerGrid/utils/PageQueryUtil",["dojo/dom-geometry","../../../ReportPlayer","esri/dijit/geoenrichment/utils/ColorUtil","esri/dijit/geoenrichment/utils/DomUtil"],function(r,w,y,t){var u={getElementPageInfo:function(a){function d(a,g){a=r.position(a.domNode);g=r.position(g.domNode);c.x+=a.x-g.x;c.y+=a.y-g.y}function h(a){p||(a=a.getFullStyle().backgroundColor)&&!y.isTransparent(a)&&(p=a)}function f(b){if(b){b.parentGridCell&&h(b.parentGridCell);
var m=b.parentWidget;if(m)if(m&&m.isReportContainerGrid){if(e=m,b=u.getNodePositionOnPage(e,b.domNode))c.x+=b.x,c.y+=b.y,n=b.pageGrid,k=b.gridContainer,l=b.pageIndex,b=u.getNodePositionOnPage(e,a.domNode),q=b.layoutCell,v=b.isBackgroundFloatingPanel,g=b.isForegroundFloatingPanel,x=b.panelIndex}else d(b,m),f(m);else b.parentElementInPageInfo&&(e=b.parentElementInPageInfo.reportContainer,p=p||b.parentElementInPageInfo.panelBackgroundColor,c.x+=b.parentElementInPageInfo.pos.x,c.y+=b.parentElementInPageInfo.pos.y)}}
if(a&&(a.parentWidget||a.parentGrid)){var e,c={x:0,y:0},n,k,l,q,p,v,g,x;a.parentGrid&&a.rowId&&a.columnId?(h(a),d(a,a.parentGrid),f(a.parentGrid)):f(a);return e?{reportContainer:e,documentOptions:e.documentOptions,pos:c,zoom:e.getZoomInfo().scale,pageGrid:n,gridContainer:k,pageIndex:l,layoutCell:q,panelBackgroundColor:p,isFloatingPanel:v||g,isBackgroundFloatingPanel:v,isForegroundFloatingPanel:g,panelIndex:x}:null}},getReportContainerPageNode:function(a){for(;a;){if(a.reportContainerPageNode)return a.reportContainerPageNode;
a=a.parentWidget||a.parentGrid}return null},getParentReportContainerGrid:function(a){if(a&&a.isReportContainerGrid)return a;for(;a;){if(a.parentWidget&&a.parentWidget.isReportContainerGrid)return a.parentWidget;if(a.parentElementInPageInfo)return a.parentElementInPageInfo.reportContainer;a=a.parentWidget||a.parentGrid}return null},getParentReportPlayer:function(a){if(a instanceof w)return a;for(;a;){if(a.parentWidget instanceof w)return a.parentWidget;a=a.parentWidget||a.parentGrid}return null},getNodePositionOnPage:function(a,
d){if(!d)return null;var h,f=-1,e,c,n,k;a.getGrids().some(function(a,l){if(a.domNode===d||t.isChildOf(d,a.domNode))return h=a,e=l,a.getFieldCells().some(function(a,c){if(a.domNode===d||t.isChildOf(d,a.domNode))return f=c,k=a,!0}),-1===f&&a.getBackgroundFloatingCells().some(function(a,e){if(a.domNode===d||t.isChildOf(d,a.domNode))return f=e,c=!0,k=a,!0}),-1===f&&a.getForegroundFloatingCells().some(function(a,c){if(a.domNode===d||t.isChildOf(d,a.domNode))return f=c,n=!0,k=a,!0}),!0});if(!h)return null;
a=a.getGridContainer(h);var l=r.position(a),q=r.position(d);return{x:q.x-l.x,y:q.y-l.y,pageGrid:h,gridContainer:a,pageIndex:e,layoutCell:k,isFloatingPanel:c||n,isBackgroundFloatingPanel:c,isForegroundFloatingPanel:n,panelIndex:f}}};return u});
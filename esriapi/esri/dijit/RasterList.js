// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/RasterList","dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/form/CheckBox dojo/_base/array dgrid/OnDemandGrid dgrid/extensions/DijitRegistry dgrid/Selection dojo/_base/lang dojo/dom-class dojo/dom-construct ../lang".split(" "),function(f,n,p,q,r,t,u,v,w,z,e,a,x){var y=f([u,v,w],{selectionMode:"single",selection:!0,maxRowsPerPage:2,minRowsPerPage:2,farOffRemoval:500});return f([n,p,q],{templateString:'\x3cdiv class\x3d"esriRasterListDiv"\x3e \x3cdiv data-dojo-attach-point \x3d "listDiv" style\x3d"height: 100%; width: 100%;" class\x3d"obliqueRasterList"\x3e\x3c/div\x3e\x3c/div\x3e',
showThumbnail:!1,setData:function(a){this.rasterList.set("store",a)},clearSelection:function(){this.rasterList.clearSelection()},refresh:function(a){this.rasterList.refresh({keepScrollPosition:a})},startup:function(){this.inherited(arguments);var b=this;this.rasterList=new y({store:this.store,minRowsPerPage:5,maxRowsPerPage:6,bufferRows:3,selectionMode:this.selectionMode?this.selectionMode:"single",renderRow:function(c){c=c.attributes||c;var f,h=a.create("div");b.showThumbnail?e.add(h,"esriRasterListThumbnailRow"):
e.add(h,"esriRasterListNoThumbnailRow");var k=a.create("div");e.add(k,"esriRasterListInfoTag");t.forEach(b.fields,function(a){x.isDefined(c[a.name])&&a.display&&(f=c[a.name].toFixed&&0<c[a.name].toString().indexOf(".")?c[a.name].toFixed(2):c[a.name],k.innerHTML+="\x3cstrong\x3e"+a.alias+": \x3c/strong\x3e"+f+"\x3cbr/\x3e")});var m=a.create("table"),l=a.create("tr");e.add(m,"esriRasterListRowTable");if(b.showThumbnail){var d=a.create("img",{className:"esriRasterListThumbnail",src:c.thumbnailUrl}),
g=a.create("td");e.add(g,"esriRasterListThumbnailCol");a.place(d,g);a.place(g,l)}d=a.create("td");a.place(k,d);a.place(d,l);b.showCheckbox&&(d=a.create("td"),e.add(d,"esriRasterListCheckboxCol"),g=new r({checked:c.selected}),a.place(g.domNode,d),a.place(d,l));a.place(l,m);a.place(m,h);c.selected&&b.rasterList.select(b.rasterList.row(c));return h}},this.listDiv);this.rasterList.startup();this.own(this.rasterList.on(".dgrid-row:click",function(a){a=b.rasterList.row(a).data;b.emit("raster-select",a)}),
this.rasterList.on(".dgrid-row:mouseover",function(a){a=b.rasterList.row(a).data;b.emit("raster-mouseover",a)}),this.rasterList.on(".dgrid-row:mouseout",function(a){b.emit("raster-mouseout")}),this.rasterList.on("dgrid-select",function(a){b.emit("raster-row-select",{rasters:a.rows})}))}})});
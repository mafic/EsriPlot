// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/RasterFunctionEditor/EditableGridMixin","dojo/_base/declare dojo/has dojo/query ../../kernel dojo/dom-construct dojo/_base/array dojo/_base/lang dojo/dom-class dojo/Evented".split(" "),function(f,k,l,m,q,g,b,n,p){f=f([p],{attachGridEvents:function(){this.own(this._grid.on("dgrid-datachange",b.hitch(this,"_onDataChange")),this._grid.on(".dgrid-content .dgrid-cell:mouseover",b.hitch(this,"_onGridMouseOver")),this._grid.on(".dgrid-content .dgrid-cell:mouseout",b.hitch(this,"_onGridMouseOut")),
this._grid.on(".dgrid-content .dgrid-cell:click",b.hitch(this,"_onGridCellClick")))},_addBlankObject:function(){var a=this._store.data,c=this._store,e=this._grid;a.length&&(a[a.length-1].idNum=a.length);var d={id:a.length?a[a.length-1].id+1:1,idNum:"*"};if(this.defaultBlankObject){var h=b.clone(this.defaultBlankObject);g.forEach(Object.keys(h),function(a){d[a]=h[a]},this)}else g.forEach(Object.keys(e.columns),function(a){a=e.columns[a];var c=a.field;"idNum"!==c&&"id"!==c&&(d[a.field]="")});c.add(d)},
_onDataChange:function(a){var c=this._grid;a&&("*"===a.cell.row.data.idNum&&this._addBlankObject(),a.cell.row.data[a.cell.column.field]=a.value);c.refresh();this.emit("change",{bubbles:!1,cancelable:!1})},_onGridMouseOver:function(a){this._toggleDeleteButton(a,!0)},_onGridMouseOut:function(a){this._toggleDeleteButton(a,!1)},_toggleDeleteButton:function(a,c){var e=this._grid,d=this._store.data.length;a=e.cell(a);var b;a&&a.row&&(b=l(".field-idNum",a.row.element)[0]);if(1<d&&b){for(d=0;d<this.dataLength;d++)e.store.data[d].idNum=
d+1;void 0!==a.column&&"*"!=a.row.data.idNum&&n.toggle(b,"esriBandMatrixDeleteIcon",c)}},_onGridCellClick:function(a){var c=this._grid,b=this._store.data.length;a=c.cell(a);if(1<b&&"*"!=a.row.data.idNum&&"idNum"===a.column.field){c.store.remove(a.row.data.id);for(a=0;a<b-2;a++)c.store.data[a].idNum=a+1;c.store.data[b-2].idNum="*";c.refresh();this.emit("change",{bubbles:!1,cancelable:!1})}}});k("extend-esri")&&b.setObject("dijit.RasterFunctionEditor.EditableGridMixin",f,m);return f});
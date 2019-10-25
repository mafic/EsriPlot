// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/mixins/FilterAndSelection","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/json dojo/has dojo/dom-construct dojo/dom-class ../../../kernel dojo/aspect ../components/FilterAndSelection/FilterAndSelection".split(" "),function(d,l,f,g,m,h,n,p,k,q){d=d([],{showFilterAndSelection:!1,filterAndSelections:[],aspectsForFilters:[],_updateJobFilterAndSelection:function(a){this.showFilterAndSelection&&this.filterObjects&&this.filterObjects.forEach(function(c){var b=
a[c.layer],e=this.filterAndSelections[c.layer];if((b="string"===typeof b?g.fromJson(b):b)&&e){var d=e.get("inputQuery");d&&(b.filter=b.filter?b.filter+" AND "+d:d,a[c.layer]=g.toJson(b),e.get("expression")&&(a[c.expressionObj]=g.toJson(e.get("expression"))))}}.bind(this));return a},clearFilterAndSelection:function(){f.forEach(this.aspectsForFilters,function(a){a.remove()});f.forEach(Object.keys(this.filterAndSelections),function(a){this.filterAndSelections[a].clear()},this)},_createFilterAndSelections:function(){this.filterAndSelections=
{};this.showFilterAndSelection&&f.forEach(this.filterObjects,function(a){this.filterAndSelections[a.layer]=this._createFilterAndSelection(a)},this)},_createFilterAndSelection:function(a){n.add(a.select.domNode,"with-filter");var c=a.layerForTool||a.layer,b={map:this.map,layer:this[a.layer]||this[a.layerForTool]||a.layers&&a.layers[a.select.get("value")],expression:this[a.expressionObj]},b=this.constructDomForFilter(b,a.select);this.aspectsForFilters.push(k.after(a.select,"onChange",function(b){0<=
parseInt(b)&&(b=a.layers&&a.layers[b]||this[c],this.filterAndSelections[a.layer]&&this.filterAndSelections[a.layer].set("layer",b))}.bind(this),!0));this.aspectsForFilters.push(k.after(this,"_onClose",this.clearFilterAndSelection.bind(this)));return b},constructDomForFilter:function(a,c){c=c.domNode.parentNode;var b=h.create("div",null,c);a.msgContainer=h.create("div",{class:"esriLeadingMargin1 paddingTop1"},c);return new q(a,b)}});m("extend-esri")&&l.setObject("dijit.analysis.mixins.FilterAndSelection.FilterAndSelection",
d,p);return d});
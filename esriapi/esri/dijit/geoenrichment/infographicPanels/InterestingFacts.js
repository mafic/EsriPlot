// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/infographicPanels/InterestingFacts",["esri/declare","../BaseWidget"],function(n,p){return n("esri.dijit.geoenrichment.InterestingFacts",[p],{_chartNode:null,_varNode:null,_table:null,_selectedFact:0,_lastSelectedTag:null,createUIExpanded:function(d){this.inherited(arguments);this._chartNode=d.addContent("div",{"class":"InterestingFacts_Chart"});this._varNode=d.addFooter("div",{"class":"OneVarMultiComparison_TextColumnHeader"});this._table=d.addFooter("table",{"class":"OneVarMultiComparison_Table"})},
updateUIExpanded:function(){var d=this;this.inherited(arguments);this._updateTable();var c=this._chartNode;c.innerHTML="";for(var g=c.clientWidth,h=c.clientHeight,k=Number.NEGATIVE_INFINITY,e=Number.POSITIVE_INFINITY,l=[],m=0;30>m;m++){var f="FACT"+(m+1).toString();if(!d.getValueByName(0,f+"ALIAS"))break;var a=d.getValueByName(0,f+"DIFF"),b;0<a?b="#66F45B":(a=-a,b="#43D3FF");a>k&&(k=a);a<e&&(e=a);l.push({text:d.getValueByName(0,f+"TAG"),absDiff:a,color:b})}d3.layout.cloud().size([g,h]).words(l.map(function(a,
b){a.size=Math.ceil(8+30*(a.absDiff-e)/(k-e));a.tagIndex=b;return a})).padding(5).rotate(function(){return 0}).font("Verdana").fontSize(function(a){return a.size}).on("end",function(a){function b(a){d._selectedFact=a;e.classed("selected",function(b){return b.tagIndex===a})}var e=d3.select(c).selectAll("div").data(a).enter().append("div").style("font-size",function(a){return a.size+"px"}).style("color",function(a){return a.color}).style("left",function(a){return a.x+a.x0+g/2+"px"}).style("top",function(a){return a.y+
a.y0+h/2+"px"}).style("margin",function(a){return a.padding+"px"}).text(function(a){return a.text}).on("click",function(a){b(a.tagIndex);d._updateTable()});b(0)}).start()},_updateTable:function(){var d=this.metadata.name,c=(this._selectedFact+1).toString(),g="FACT"+c+"VALUE";d3.select(this._varNode).text(this.getValueByName(0,"FACT"+c+"ALIAS"));var c=this.data.features,h=-Infinity,k=Infinity,e,l;c.forEach(function(a){var b=a.attributes[g];b<k&&(k=b,e=a);b>h&&(h=b,l=a)});var m=d3.scale.linear().domain([0,
1.4*h]).nice().range([0,100]),f=[{width:"50%",cl:"OneVarMultiComparison_TextColumn"},{width:"20%",cl:"OneVarMultiComparison_ValueColumn"},{cl:"OneVarMultiComparison_ChartColumn"}],c=d3.select(this._table).selectAll("tr").data(c);c.enter().append("tr").classed("OneVarMultiComparison_Row",!0).classed("AlternatingRow",function(a,b){return 1===b%2});c.exit().remove();c=c.selectAll("td").data(function(a){var b=a.attributes;return[{v:b[d],f:a},{v:b[g],f:a},{v:b[g],f:a}]});c.enter().append("td");c.each(function(a,
b){var c=d3.select(this);f[b].width&&(c=c.style("width",f[b].width));c=c.classed(f[b].cl,!0);2>b?c.text(a.v):(b=c.selectAll("div").data([1]),b.enter().append("div").style("height","9px"),b.transition().style("background-color",function(){return a.f===e?"#43D3FF":a.f===l?"#66F45B":"#b5b5b5"}).style("width",m(a.v)+"%"))})}})});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/renderers/TimeClassBreaksAger","dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/has dojo/date ../kernel ../lang ../symbols/jsonUtils ../Color ./SymbolAger".split(" "),function(h,k,e,l,m,n,p,q,r,t){var c=h(t,{declaredClass:"esri.renderer.TimeClassBreaksAger",constructor:function(b,a){this.infos=b;this.timeUnits=a||"day";b.sort(function(a,b){return a.minAge<b.minAge?-1:a.minAge>b.minAge?1:0})},getAgedSymbol:function(b,a){var d=a.getLayer();a=a.attributes;var c=p.isDefined;b=q.fromJson(b.toJson());
var e=d._map.timeExtent.endTime;if(!e)return b;var g=m.difference(new Date(a[d._startTimeField]),e,this.timeUnits);k.some(this.infos,function(a){if(g>=a.minAge&&g<=a.maxAge){var d=a.color,f=a.size;a=a.alpha;d&&b.setColor(d);c(f)&&this._setSymbolSize(b,f);c(a)&&b.color&&(b.color.a=a);return!0}},this);return b},toJson:function(){var b={agerClassBreakInfos:[]},a,d,c;b.timeUnits=this._getRestUnits(this.timeUnits);for(a=0;a<this.infos.length;a+=1)d=this.infos[a],c={},c.oldestAge=Infinity===d.maxAge?null:
d.maxAge,c.size=d.size,d.color&&(c.color=r.toJsonColor(d.color)),d.alpha&&(c.alpha=Math.round(255*d.alpha)),b.agerClassBreakInfos[a]=c;return b},_getRestUnits:function(b){var a="esriTimeUnitsDays";switch(b){case c.UNIT_SECONDS:a="esriTimeUnitsSeconds";break;case c.UNIT_MILLISECONDS:a="esriTimeUnitsMilliseconds";break;case c.UNIT_HOURS:a="esriTimeUnitsHours";break;case c.UNIT_MINUTES:a="esriTimeUnitsMinutes";break;case c.UNIT_MONTHS:a="esriTimeUnitsMonths";break;case c.UNIT_WEEKS:a="esriTimeUnitsWeeks";
break;case c.UNIT_YEARS:a="esriTimeUnitsYears"}return a}});e.mixin(c,{UNIT_DAYS:"day",UNIT_HOURS:"hour",UNIT_MILLISECONDS:"millisecond",UNIT_MINUTES:"minute",UNIT_MONTHS:"month",UNIT_SECONDS:"second",UNIT_WEEKS:"week",UNIT_YEARS:"year"});l("extend-esri")&&e.setObject("renderer.TimeClassBreaksAger",c,n);return c});
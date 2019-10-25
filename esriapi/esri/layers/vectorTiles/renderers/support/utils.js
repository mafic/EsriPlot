// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/renderers/support/utils",["dojo/date/locale","../../Color","../../core/lang","../../core/numberUtils","dojo/i18n!dojo/cldr/nls/gregorian"],function(p,q,c,l,t){function u(b){return b&&b.map(function(a){return new q(a)})}function r(b,a,d){var f="";0===a?f=m.lt+" ":a===d&&(f=m.gt+" ");return f+b}var g={},m={lte:"\x3c\x3d",gte:"\x3e\x3d",lt:"\x3c",gt:"\x3e",pct:"%",ld:"\u2013"},v={millisecond:0,second:1,minute:2,hour:3,day:4,month:5,year:6},w={millisecond:{dateOptions:{formatLength:"long"},
timeOptions:{formatLength:"medium"}},second:{dateOptions:{formatLength:"long"},timeOptions:{formatLength:"medium"}},minute:{dateOptions:{formatLength:"long"},timeOptions:{formatLength:"short"}},hour:{dateOptions:{formatLength:"long"},timeOptions:{formatLength:"short"}},day:{selector:"date",dateOptions:{formatLength:"long"}},month:{selector:"date",dateOptions:{formatLength:"long"}},year:{selector:"date",dateOptions:{selector:"year"}}},x={formatLength:"short",fullYear:!0},y={formatLength:"short"};c.mixin(g,
{meterIn:{inches:1/.0254,feet:1/.3048,"us-feet":3.28084,yards:1/.9144,miles:1/1609.344,"nautical-miles":1/1852,millimeters:1E3,centimeters:100,decimeters:10,meters:1,kilometers:.001,"decimal-degrees":180/20015077},timelineDateFormatOptions:{selector:"date",dateOptions:{formatLength:"short",fullYear:!0}},formatDate:function(b,a){var d=[];null==b||b instanceof Date||(b=new Date(b));a=a||{};a=c.mixin({},a);var f=a.selector?a.selector.toLowerCase():null,e=!f||-1<f.indexOf("time"),f=!f||-1<f.indexOf("date");
e&&(a.timeOptions=a.timeOptions||y,a.timeOptions&&(a.timeOptions=c.mixin({},a.timeOptions),a.timeOptions.selector=a.timeOptions.selector||"time",d.push(a.timeOptions)));f&&(a.dateOptions=a.dateOptions||x,a.dateOptions&&(a.dateOptions=c.mixin({},a.dateOptions),a.dateOptions.selector=a.dateOptions.selector||"date",d.push(a.dateOptions)));d&&d.length?(d=d.map(function(a){return p.format(b,a)}),a=1==d.length?d[0]:t["dateTimeFormat-medium"].replace(/\'/g,"").replace(/\{(\d+)\}/g,function(a,b){return d[b]})):
a=p.format(b);return a},createColorStops:function(b){var a=b.values,d=b.colors,f=b.labelIndexes,e=b.isDate,h=b.dateFormatOptions;b=[];return b=a.map(function(b,k){var n=null;if(!f||-1<f.indexOf(k)){var c;(c=e?g.formatDate(b,h):l.format(b))&&(n=r(c,k,a.length-1))}return{value:b,color:d[k],label:n}})},updateColorStops:function(b){var a=b.stops,d=b.changes,f=b.isDate,e=b.dateFormatOptions,h=[],n,c=a.map(function(a){return a.value});d.forEach(function(a){h.push(a.index);c[a.index]=a.value});n=l.round(c,
{indexes:h});a.forEach(function(b,d){b.value=c[d];if(null!=b.label){var h,k=null;(h=f?g.formatDate(n[d],e):l.format(n[d]))&&(k=r(h,d,a.length-1));b.label=k}})},createClassBreakLabel:function(b){var a=b.minValue,d=b.maxValue,f=b.isFirstBreak?"":m.gt+" ";b="percent-of-total"===b.normalizationType?m.pct:"";a=null==a?"":l.format(a);d=null==d?"":l.format(d);return f+a+b+" "+m.ld+" "+d+b},setLabelsForClassBreaks:function(b){var a=b.classBreakInfos,d=b.classificationMethod,f=b.normalizationType,e=[];a&&
a.length&&("standard-deviation"===d?console.log("setLabelsForClassBreaks: cannot set labels for class breaks generated using 'standard-deviation' method."):b.round?(e.push(a[0].minValue),a.forEach(function(a){e.push(a.maxValue)}),e=l.round(e),a.forEach(function(a,b){a.label=g.createClassBreakLabel({minValue:0===b?e[0]:e[b],maxValue:e[b+1],isFirstBreak:0===b,normalizationType:f})})):a.forEach(function(a,b){a.label=g.createClassBreakLabel({minValue:a.minValue,maxValue:a.maxValue,isFirstBreak:0===b,
normalizationType:f})}))},updateClassBreak:function(b){var a=b.classBreaks,d=b.normalizationType,f=b.change,e=f.index,f=f.value,h=-1,c=-1,k=a.length;"standard-deviation"===b.classificationMethod?console.log("updateClassBreak: cannot update labels for class breaks generated using 'standard-deviation' method."):(0===e?h=e:e===k?c=e-1:(c=e-1,h=e),-1<h&&h<k&&(b=a[h],b.minValue=f,b.label=g.createClassBreakLabel({minValue:b.minValue,maxValue:b.maxValue,isFirstBreak:0===h,normalizationType:d})),-1<c&&c<
k&&(b=a[c],b.maxValue=f,b.label=g.createClassBreakLabel({minValue:b.minValue,maxValue:b.maxValue,isFirstBreak:0===c,normalizationType:d})))},calculateDateFormatInterval:function(b){var a,d,f=b.length,e,c,g,k,l,m,p=Infinity,q;b=b.map(function(a){return new Date(a)});for(a=0;a<f-1;a++){e=b[a];g=[];l=Infinity;m="";for(d=a+1;d<f;d++)c=b[d],c=e.getFullYear()!==c.getFullYear()&&"year"||e.getMonth()!==c.getMonth()&&"month"||e.getDate()!==c.getDate()&&"day"||e.getHours()!==c.getHours()&&"hour"||e.getMinutes()!==
c.getMinutes()&&"minute"||e.getSeconds()!==c.getSeconds()&&"second"||"millisecond",k=v[c],k<l&&(l=k,m=c),g.push(c);l<p&&(p=l,q=m)}return q},createUniqueValueLabel:function(b){var a=b.value,d=b.fieldInfo,c=b.domain;b=b.dateFormatInterval;var e=String(a);(c=c&&c.codedValues?c.getName(a):null)?e=c:"number"===typeof a&&(e=d&&"date"===d.type?g.formatDate(a,b&&w[b]):l.format(a));return e},cloneColorVariable:function(b){var a;b&&(a=c.mixin({},b),a.colors=u(a.colors),a.stops=a.stops&&a.stops.map(function(a){a=
c.mixin({},a);a.color&&(a.color=new q(a.color));return a}),a.legendOptions&&(a.legendOptions=c.mixin({},a.legendOptions)));return a},cloneOpacityVariable:function(b){var a;if(b){a=c.mixin({},b);if(b=a.opacityValues)a.opacityValues=b.slice(0);if(b=a.stops)a.stops=b.map(function(a){return c.mixin({},a)});if(b=a.legendOptions)a.legendOptions=c.mixin({},b)}return a},cloneSizeVariable:function(b){var a;b&&(a=c.mixin({},b),a.stops&&(a.stops=a.stops.map(function(a){return c.mixin({},a)})),(b=a.minSize)&&
"object"===typeof b&&(a.minSize=g.cloneSizeVariable(b)),(b=a.maxSize)&&"object"===typeof b&&(a.maxSize=g.cloneSizeVariable(b)),b=a.legendOptions)&&(a.legendOptions=c.mixin({},b),b=b.customValues)&&(a.legendOptions.customValues=b.slice(0));return a}});return g});
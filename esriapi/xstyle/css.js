//>>built
define("xstyle/css",["require"],function(h){function k(a,c,e){var f=document.documentElement;a=f.insertBefore(document.createElement(a),f.firstChild);a.id=c;c=(a.currentStyle||getComputedStyle(a,null)||{})[e];f.removeChild(a);return c}return{load:function(a,c,e,f){function g(a){var b=k("x-parse",null,"content"),d=a&&(a.sheet||a.styleSheet);b&&"none"!=b&&"normal"!=b?c([eval(b)],function(b){a?b.process(a,e):(b.processAll(),e(d))}):e(d)}var d=c.toUrl(a),l;d.match(/!$/)&&(l={wait:!1},d=d.slice(0,-1));
var b=c.cache&&c.cache["url:"+d];if(null!=b)b.xCss&&(b=b.cssText),"string"==typeof b?h(["./core/load-css"],function(a){g(a.insertCss(b))}):g();else{if("none"==k("div",a.replace(/\//g,"-").replace(/\..*/,"")+"-loaded","display"))return g();h(["./core/load-css"],function(a){a(d,g,l)})}}}});
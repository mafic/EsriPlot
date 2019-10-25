/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/promise/Promise",["../_base/lang"],function(e){function d(){throw new TypeError("abstract");}return e.extend(function(){},{then:function(a,c,b){d()},cancel:function(a,c){d()},isResolved:function(){d()},isRejected:function(){d()},isFulfilled:function(){d()},isCanceled:function(){d()},"finally":function(a){return this.then(function(c){var b=a();return b&&"function"===typeof b.then?b.then(function(){return c}):c},function(c){var b=a();if(b&&"function"===typeof b.then)return b.then(function(){throw c;
});throw c;})},always:function(a){return this.then(a,a)},"catch":function(a){return this.then(null,a)},otherwise:function(a){return this.then(null,a)},trace:function(){return this},traceRejected:function(){return this},toString:function(){return"[object Promise]"}})});
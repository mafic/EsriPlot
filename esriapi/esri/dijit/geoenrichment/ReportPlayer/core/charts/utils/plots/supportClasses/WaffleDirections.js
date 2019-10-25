// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/plots/supportClasses/WaffleDirections",[],function(){var a={UP_RIGHT:"Up",DOWN_RIGHT:"Down",RIGHT_UP:"Right",LEFT_UP:"Left",UP_LEFT:"UpLeft",DOWN_LEFT:"DownLeft",RIGHT_DOWN:"RightDown",LEFT_DOWN:"LeftDown",isSupported:function(b){for(var c in a)if(a[c]===b)return!0;return!1},toSupportedValue:function(b){return a.isSupported(b)?b:a.DOWN_RIGHT},isLeftRightStartPosition:function(b){return b===a.RIGHT_UP||b===a.LEFT_UP||b===a.RIGHT_DOWN||
b===a.LEFT_DOWN},isLeftGrowth:function(b){return b===a.UP_LEFT||b===a.DOWN_LEFT},isDownGrowth:function(b){return b===a.RIGHT_DOWN||b===a.LEFT_DOWN},toFlowDirectionPosition:function(b){switch(b){case a.UP_RIGHT:return["Right","Down"];case a.DOWN_RIGHT:return["Right","Up"];case a.RIGHT_UP:return["Up","Left"];case a.LEFT_UP:return["Up","Right"];case a.UP_LEFT:return["Left","Down"];case a.DOWN_LEFT:return["Left","Up"];case a.RIGHT_DOWN:return["Down","Left"];case a.LEFT_DOWN:return["Down","Right"]}},fromFlowDirectionPosition:function(b,
c){if("Right"===b)return"Down"===c?a.UP_RIGHT:a.DOWN_RIGHT;if("Up"===b)return"Left"===c?a.RIGHT_UP:a.LEFT_UP;if("Left"===b)return"Down"===c?a.UP_LEFT:a.DOWN_LEFT;if("Down"===b)return"Left"===c?a.RIGHT_DOWN:a.LEFT_DOWN}};return a});
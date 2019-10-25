// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/th/DetectObjectsUsingDeepLearning",{toolDefine:"\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e2d\u0e2d\u0e1a\u0e40\u0e08\u0e47\u0e01\u0e15\u0e4c\u0e42\u0e14\u0e22\u0e43\u0e0a\u0e49\u0e01\u0e32\u0e23\u0e40\u0e23\u0e35\u0e22\u0e19\u0e23\u0e39\u0e49\u0e40\u0e0a\u0e34\u0e07\u0e25\u0e36\u0e01",outputLayerName:"${layername}_detected",modelLabel:"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e42\u0e21\u0e40\u0e14\u0e25\u0e01\u0e32\u0e23\u0e40\u0e23\u0e35\u0e22\u0e19\u0e23\u0e39\u0e49\u0e40\u0e0a\u0e34\u0e07\u0e25\u0e36\u0e01\u0e17\u0e35\u0e48\u0e08\u0e30\u0e43\u0e0a\u0e49\u0e43\u0e19\u0e01\u0e32\u0e23\u0e15\u0e23\u0e27\u0e08\u0e2b\u0e32\u0e2d\u0e2d\u0e1a\u0e40\u0e08\u0e47\u0e01\u0e15\u0e4c",
modelArgsLabel:"\u0e23\u0e30\u0e1a\u0e38\u0e2d\u0e32\u0e23\u0e4c\u0e01\u0e34\u0e27\u0e40\u0e21\u0e19\u0e17\u0e4c\u0e42\u0e21\u0e40\u0e14\u0e25\u0e01\u0e32\u0e23\u0e40\u0e23\u0e35\u0e22\u0e19\u0e23\u0e39\u0e49\u0e40\u0e0a\u0e34\u0e07\u0e25\u0e36\u0e01",nameLabel:"\u0e0a\u0e37\u0e48\u0e2d",valueLabel:"\u0e04\u0e48\u0e32",removeDuplicatesLable:"\u0e25\u0e1a\u0e1f\u0e35\u0e40\u0e08\u0e2d\u0e23\u0e4c\u0e17\u0e35\u0e48\u0e0b\u0e49\u0e33\u0e2d\u0e2d\u0e01\u0e08\u0e32\u0e01\u0e40\u0e2d\u0e32\u0e17\u0e4c\u0e1e\u0e38\u0e17 (\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01)",
queryModelArgsMsg:"\u0e01\u0e33\u0e25\u0e31\u0e07\u0e04\u0e34\u0e27\u0e23\u0e35\u0e2d\u0e32\u0e23\u0e4c\u0e01\u0e34\u0e27\u0e40\u0e21\u0e19\u0e17\u0e4c\u0e42\u0e21\u0e40\u0e14\u0e25...",nonMaxSuppressionLabel:"\u0e01\u0e32\u0e23\u0e23\u0e30\u0e07\u0e31\u0e1a\u0e41\u0e1a\u0e1a\u0e44\u0e21\u0e48\u0e2a\u0e39\u0e07\u0e2a\u0e38\u0e14",options:"\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01",confidenceLabel:"\u0e1f\u0e34\u0e25\u0e14\u0e4c\u0e04\u0e30\u0e41\u0e19\u0e19\u0e04\u0e27\u0e32\u0e21\u0e40\u0e0a\u0e37\u0e48\u0e2d\u0e21\u0e31\u0e48\u0e19",
classValueLabel:"\u0e1f\u0e34\u0e25\u0e14\u0e4c\u0e04\u0e48\u0e32\u0e04\u0e25\u0e32\u0e2a",maxOverlapLabel:"\u0e2d\u0e31\u0e15\u0e23\u0e32\u0e2a\u0e48\u0e27\u0e19\u0e0b\u0e49\u0e2d\u0e19\u0e17\u0e31\u0e1a\u0e2a\u0e39\u0e07\u0e2a\u0e38\u0e14",numberOnlyMsg:"\u0e04\u0e48\u0e32\u0e15\u0e31\u0e27\u0e40\u0e25\u0e02\u0e17\u0e35\u0e48\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a\u0e2d\u0e19\u0e38\u0e0d\u0e32\u0e15\u0e40\u0e17\u0e48\u0e32\u0e19\u0e31\u0e49\u0e19",analysisLayerLabel:"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e20\u0e32\u0e1e\u0e17\u0e35\u0e48\u0e08\u0e30\u0e43\u0e0a\u0e49\u0e43\u0e19\u0e01\u0e32\u0e23\u0e15\u0e23\u0e27\u0e08\u0e08\u0e31\u0e1a\u0e2d\u0e2d\u0e1a\u0e40\u0e08\u0e47\u0e01\u0e15\u0e4c",
itemDescription:"\u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23\u0e20\u0e32\u0e1e\u0e01\u0e32\u0e23\u0e27\u0e34\u0e40\u0e04\u0e23\u0e32\u0e30\u0e2b\u0e4c\u0e17\u0e35\u0e48\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e08\u0e32\u0e01\u0e01\u0e32\u0e23\u0e15\u0e23\u0e27\u0e08\u0e08\u0e31\u0e1a\u0e2d\u0e2d\u0e1a\u0e40\u0e08\u0e47\u0e01\u0e15\u0e4c\u0e14\u0e49\u0e27\u0e22\u0e01\u0e32\u0e23\u0e40\u0e23\u0e35\u0e22\u0e19\u0e23\u0e39\u0e49\u0e40\u0e0a\u0e34\u0e07\u0e25\u0e36\u0e01",itemTags:"\u0e1c\u0e25\u0e01\u0e32\u0e23\u0e27\u0e34\u0e40\u0e04\u0e23\u0e32\u0e30\u0e2b\u0e4c\u0e23\u0e32\u0e2a\u0e40\u0e15\u0e2d\u0e23\u0e4c, \u0e15\u0e23\u0e27\u0e08\u0e08\u0e31\u0e1a\u0e2d\u0e2d\u0e1a\u0e40\u0e08\u0e47\u0e01\u0e15\u0e4c\u0e42\u0e14\u0e22\u0e43\u0e0a\u0e49\u0e01\u0e32\u0e23\u0e40\u0e23\u0e35\u0e22\u0e19\u0e23\u0e39\u0e49\u0e40\u0e0a\u0e34\u0e07\u0e25\u0e36\u0e01, ${layername}",
itemSnippet:"\u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23\u0e20\u0e32\u0e1e\u0e01\u0e32\u0e23\u0e27\u0e34\u0e40\u0e04\u0e23\u0e32\u0e30\u0e2b\u0e4c\u0e17\u0e35\u0e48\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e08\u0e32\u0e01\u0e01\u0e32\u0e23\u0e15\u0e23\u0e27\u0e08\u0e08\u0e31\u0e1a\u0e2d\u0e2d\u0e1a\u0e40\u0e08\u0e47\u0e01\u0e15\u0e4c\u0e14\u0e49\u0e27\u0e22\u0e01\u0e32\u0e23\u0e40\u0e23\u0e35\u0e22\u0e19\u0e23\u0e39\u0e49\u0e40\u0e0a\u0e34\u0e07\u0e25\u0e36\u0e01"});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/uk/CalculateDistance",{inputLayerLabel:"\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u0440\u0430\u0441\u0442\u0440 \u0430\u0431\u043e \u0448\u0430\u0440 \u043c\u0456\u0441\u0446\u044f \u0440\u043e\u0437\u0442\u0430\u0448\u0443\u0432\u0430\u043d\u043d\u044f \u043e\u0431'\u0454\u043a\u0442\u0443, \u0432\u0456\u0434\u0441\u0442\u0430\u043d\u044c \u0434\u043e \u044f\u043a\u043e\u0433\u043e \u0442\u0440\u0435\u0431\u0430 \u043e\u0431\u0447\u0438\u0441\u043b\u0438\u0442\u0438",
inputRaster:"\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u0440\u0430\u0441\u0442\u0440 \u0430\u0431\u043e \u0432\u0435\u043a\u0442\u043e\u0440\u043d\u0438\u0439 \u0448\u0430\u0440 \u0434\u043b\u044f \u0432\u0456\u0434\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f \u0431\u0430\u0440'\u0454\u0440\u0456\u0432 (\u043e\u043f\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u043e)",maxDistanceLabel:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430 \u0432\u0456\u0434\u0441\u0442\u0430\u043d\u044c, \u044f\u043a\u0443 \u0442\u0440\u0435\u0431\u0430 \u043e\u0431\u0447\u0438\u0441\u043b\u0438\u0442\u0438 (\u043e\u043f\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u043e)",
outputCellSize:"\u0420\u043e\u0437\u043c\u0456\u0440 \u0432\u0438\u0445\u0456\u0434\u043d\u043e\u0433\u043e \u043e\u0441\u0435\u0440\u0435\u0434\u043a\u0443 (\u043e\u043f\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u043e)",distanceMethod:"\u041c\u0435\u0442\u043e\u0434 \u0432\u0456\u0434\u0441\u0442\u0430\u043d\u0456",resultDistLayerName:"\u0406\u043c'\u044f \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0443\u044e\u0447\u043e\u0433\u043e \u0448\u0430\u0440\u0443 \u0432\u0456\u0434\u0441\u0442\u0430\u043d\u0456",
resultDirectionLayerName:"\u0406\u043c'\u044f \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0443\u044e\u0447\u043e\u0433\u043e \u0448\u0430\u0440\u0443 \u0432\u0456\u0434\u0441\u0442\u0430\u043d\u0456 (\u043e\u043f\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u043e)",resultAllocationLayerName:"\u0406\u043c'\u044f \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0443\u044e\u0447\u043e\u0433\u043e \u0448\u0430\u0440\u0443 \u0440\u043e\u0437\u043f\u043e\u0434\u0456\u043b\u0443 (\u043e\u043f\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u043e)",
outputBackDirectionName:"\u0406\u043c'\u044f \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0443\u044e\u0447\u043e\u0433\u043e \u0448\u0430\u0440\u0443 \u0437\u0432\u043e\u0440\u043e\u0442\u043d\u043e\u0433\u043e \u043d\u0430\u043f\u0440\u044f\u043c\u043a\u0443 (\u043e\u043f\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u043e)",outputLayerName:"\u041e\u0431\u0447\u0438\u0441\u043b\u0435\u043d\u0430 \u0432\u0456\u0434\u0441\u0442\u0430\u043d\u044c ${layername}",allocationFieldLabel:"\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u043f\u043e\u043b\u0435 \u0440\u043e\u0437\u043f\u043e\u0434\u0456\u043b\u0443 (\u043e\u043f\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u043e)",
itemDescription:"\u0412\u0435\u043a\u0442\u043e\u0440\u043d\u0438\u0439 \u0448\u0430\u0440, \u0437\u0433\u0435\u043d\u0435\u0440\u043e\u0432\u0430\u043d\u0438\u0439 \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0456 \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u043d\u044f \u043e\u0431\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044f \u0432\u0456\u0434\u0441\u0442\u0430\u043d\u0456 \u0434\u043b\u044f ${layerName}. ",itemTags:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0430\u043d\u0430\u043b\u0456\u0437\u0443, \u041e\u0431\u0447\u0438\u0441\u043b\u0438\u0442\u0438 \u0432\u0456\u0434\u0441\u0442\u0430\u043d\u044c, ${layername} ${fieldname}",
itemSnippet:"\u0412\u0435\u043a\u0442\u043e\u0440\u043d\u0438\u0439 \u0448\u0430\u0440, \u0437\u0433\u0435\u043d\u0435\u0440\u043e\u0432\u0430\u043d\u0438\u0439 \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0456 \u043e\u0431\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044f \u0432\u0456\u0434\u0441\u0442\u0430\u043d\u0456.",planar:"\u041f\u043b\u0430\u043d\u0430\u0440\u043d\u0438\u0439",geodesic:"\u0413\u0435\u043e\u0434\u0435\u0437\u0438\u0447\u043d\u0438\u0439",selectDistance:"-- \u0432\u0438\u0431\u0440\u0430\u0442\u0438 --"});
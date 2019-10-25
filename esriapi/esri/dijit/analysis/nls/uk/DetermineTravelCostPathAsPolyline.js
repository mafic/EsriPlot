// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/uk/DetermineTravelCostPathAsPolyline",{inputSourceLayerLabel:"\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u0440\u0430\u0441\u0442\u0440 \u0430\u0431\u043e \u0448\u0430\u0440 \u0434\u0436\u0435\u0440\u0435\u043b\u0430 \u043e\u0431'\u0454\u043a\u0442\u0443, \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0456 \u044f\u043a\u043e\u0433\u043e \u0442\u0440\u0435\u0431\u0430 \u0432\u0438\u0437\u043d\u0430\u0447\u0438\u0442\u0438 \u0448\u043b\u044f\u0445\u0438",inputCostRasterLabel:"\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u0440\u0430\u0441\u0442\u0440\u043e\u0432\u0438\u0439 \u0448\u0430\u0440 \u0432\u0430\u0440\u0442\u043e\u0441\u0442\u0456 \u043f\u043e\u0434\u043e\u0440\u043e\u0436\u0456",
inputDestinationLayerLabel:"\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u0440\u0430\u0441\u0442\u0440 \u0430\u0431\u043e \u0448\u0430\u0440 \u043f\u0440\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u043e\u0431'\u0454\u043a\u0442\u0443, \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0456 \u044f\u043a\u043e\u0433\u043e \u0442\u0440\u0435\u0431\u0430 \u0432\u0438\u0437\u043d\u0430\u0447\u0438\u0442\u0438 \u0448\u043b\u044f\u0445\u0438",pathTypeLabel:"\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u0442\u0438\u043f \u0448\u043b\u044f\u0445\u0456\u0432, \u044f\u043a\u0456 \u0442\u0440\u0435\u0431\u0430 \u0432\u0438\u0437\u043d\u0430\u0447\u0438\u0442\u0438 (\u043e\u043f\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u043e)",
bestSingle:"\u041d\u0430\u0439\u043a\u0440\u0430\u0449\u0438\u0439 \u043e\u0434\u0438\u043d\u043e\u0447\u043d\u0438\u0439",eachCell:"\u0414\u043e \u043a\u043e\u0436\u043d\u043e\u0433\u043e \u043e\u0441\u0435\u0440\u0435\u0434\u043a\u0443",eachZone:"\u0414\u043e \u043a\u043e\u0436\u043d\u043e\u0457 \u0437\u043e\u043d\u0438",destinationField:"\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u043f\u043e\u043b\u0435 \u0434\u043b\u044f \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u0434\u043b\u044f \u043f\u0443\u043d\u043a\u0442\u0443 \u043f\u0440\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f",
outputPolylineName:"\u0406\u043c'\u044f \u043f\u043e\u043b\u0456\u043b\u0456\u043d\u0456\u0457 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0456\u0432",outputLayerName:"\u041e\u043f\u0442\u0438\u043c\u0430\u043b\u044c\u043d\u0430 \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044c \u043f\u043e\u0434\u043e\u0440\u043e\u0436\u0456 \u044f\u043a \u043f\u043e\u043b\u0456\u043b\u0456\u043d\u0456\u044f ${layername}",drawDestinationPointLayerName:"\u0422\u043e\u0447\u043a\u0438 \u043f\u0440\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f",
drawSourcePointLayerName:"\u0422\u043e\u0447\u043a\u0438 \u0434\u0436\u0435\u0440\u0435\u043b\u0430",itemDescription:"\u0412\u0435\u043a\u0442\u043e\u0440\u043d\u0438\u0439 \u0448\u0430\u0440, \u0437\u0433\u0435\u043d\u0435\u0440\u043e\u0432\u0430\u043d\u0438\u0439 \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0456 \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u043d\u044f \u0432\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u0448\u043b\u044f\u0445\u0443 \u0432\u0430\u0440\u0442\u043e\u0441\u0442\u0456 \u043f\u043e\u0434\u043e\u0440\u043e\u0436\u0456 \u044f\u043a \u043f\u043e\u043b\u0456\u043b\u0456\u043d\u0456\u0457 \u0434\u043b\u044f ${layername}. ",
itemTags:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0430\u043d\u0430\u043b\u0456\u0437\u0443, \u0412\u0438\u0437\u043d\u0430\u0447\u0430\u0442\u0438 \u0448\u043b\u044f\u0445 \u0432\u0430\u0440\u0442\u043e\u0441\u0442\u0456 \u043f\u043e\u0434\u043e\u0440\u043e\u0436\u0456 \u044f\u043a \u043f\u043e\u043b\u0456\u043b\u0456\u043d\u0456\u044e, ${layername} ${fieldname}",itemSnippet:"\u0412\u0435\u043a\u0442\u043e\u0440\u043d\u0438\u0439 \u0448\u0430\u0440, \u0437\u0433\u0435\u043d\u0435\u0440\u043e\u0432\u0430\u043d\u0438\u0439 \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0456 \u0432\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u0448\u043b\u044f\u0445\u0443 \u0432\u0430\u0440\u0442\u043e\u0441\u0442\u0456 \u043f\u043e\u0434\u043e\u0440\u043e\u0436\u0456 \u044f\u043a \u043f\u043e\u043b\u0456\u043b\u0456\u043d\u0456\u0457.",
missingMessage:"\u0428\u0430\u0440 \u043f\u0440\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u043f\u043e\u0432\u0438\u043d\u0435\u043d \u0432\u0456\u0434\u0440\u0456\u0437\u043d\u044f\u0442\u0438\u0441\u044f \u0432\u0456\u0434 \u0448\u0430\u0440\u0443 \u0434\u0436\u0435\u0440\u0435\u043b\u0430.",noValueMessage:"\u0426\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c",placeHolder:"--\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u0448\u0430\u0440--"});
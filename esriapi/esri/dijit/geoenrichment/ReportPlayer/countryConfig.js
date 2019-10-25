// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/countryConfig",["./dataProvider/supportClasses/stdGeographies/StdGeographiesModel"],function(h){var a={},b;a.getCountryID=function(){return b&&b.id};a.getCurrencySymbol=function(){return b&&b.currencySymbol||"$"};a.getCurrencyFormat=function(){if(b&&b.currencyFormat)return b.currencyFormat;var e=a.getCurrencySymbol();return e+"0;-"+e+"0"};a.setCountry=function(a){b=a};var f,g;a.getSingleUnits=function(){return f};a.getPluralUnits=function(){return g};
a.setSingleAndPluralUnits=function(a,b){f=a;g=b};var d;a.getHierarchyID=function(){return d};a.setHierarchyID=function(a){d=a||"census"};var c;a.getGeographiesModel=function(){return c};a.setGeographiesModel=function(a){c=a};a.toJson=function(){return{country:{id:a.getCountryID(),currencySymbol:a.getCurrencySymbol(),currencyFormat:a.getCurrencyFormat()},hierarchy:d,geographiesModel:c&&c.toJson()}};a.fromJson=function(a){a&&(b=a.country,d=a.hierarchy,c=a.geographiesModel&&new h(a.geographiesModel))};
return a});
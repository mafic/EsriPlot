// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/infographics/simpleInfographic/DataDrillingBackgroundUtil",["dojo/dom-class","esri/dijit/geoenrichment/utils/ColorUtil","../../themes/BackgroundThemeUtil"],function(c,d,g){return{setUpDDPanelBackgroundColor:function(a){if(a.infographicJson){var e=a.viewModel.getStaticInfographicDefaultStyles(a.theme),f=a.viewModel.getDocumentDefaultStyles(a.theme);[a.infographicJson.style.backgroundColor,e&&e.backgroundColor,f.backgroundColor].some(function(b){if(b&&
!d.isTransparent(b))return a.node.style.backgroundColor=b,c.remove(a.node,"playerThemeDark playerThemeLight"),c.add(a.node,d.isLightColor(b)?"playerThemeLight":"playerThemeDark"),!0})||g.renderThemeBackgroundImage(a.node,f.backgroundImage)}}}});
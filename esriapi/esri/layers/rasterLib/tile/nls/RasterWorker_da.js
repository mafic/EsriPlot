// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/layers/rasterLib/tile/nls/RasterWorker_da",{"dojo/cldr/nls/number":{scientificFormat:"#E0","currencySpacing-afterCurrency-currencyMatch":"[:^S:]",infinity:"\u221e",superscriptingExponent:"\u00d7",list:";",percentSign:"%",minusSign:"-","currencySpacing-beforeCurrency-surroundingMatch":"[:digit:]","decimalFormat-short":"000\u00a0bill","currencySpacing-afterCurrency-insertBetween":"\u00a0",nan:"NaN",plusSign:"+","currencySpacing-afterCurrency-surroundingMatch":"[:digit:]","currencySpacing-beforeCurrency-currencyMatch":"[:^S:]",
currencyFormat:"#,##0.00\u00a0\u00a4",perMille:"\u2030",group:".",percentFormat:"#,##0\u00a0%","decimalFormat-long":"000 billioner",decimalFormat:"#,##0.###",decimal:",","currencySpacing-beforeCurrency-insertBetween":"\u00a0",exponential:"E",_localized:{}},"dojo/cldr/nls/gregorian":{"dateFormatItem-Ehm":"E h.mm a","days-standAlone-short":"s\u00f8 ma ti on to fr l\u00f8".split(" "),"months-format-narrow":"JFMAMJJASOND".split(""),"field-second-relative+0":"nu","quarters-standAlone-narrow":["1","2",
"3","4"],"field-weekday":"Ugedag","dateFormatItem-yQQQ":"QQQ y","dateFormatItem-yMEd":"E d/M/y","field-wed-relative+0":"denne onsdag","field-wed-relative+1":"n\u00e6ste onsdag","dateFormatItem-GyMMMEd":"E d. MMM y G","dateFormatItem-MMMEd":"E d. MMM",eraNarrow:["fKr","fvt","eKr","vt"],"field-tue-relative+-1":"sidste tirsdag","days-format-short":"s\u00f8 ma ti on to fr l\u00f8".split(" "),"dateTimeFormats-appendItem-Day-Of-Week":"{0} {1}","dateFormat-long":"d. MMMM y","field-fri-relative+-1":"sidste fredag",
"field-wed-relative+-1":"sidste onsdag","months-format-wide":"januar februar marts april maj juni juli august september oktober november december".split(" "),"dateTimeFormat-medium":"{1} {0}","dayPeriods-format-wide-pm":"PM","dateFormat-full":"EEEE 'den' d. MMMM y","field-thu-relative+-1":"sidste torsdag","dateFormatItem-Md":"d/M","dayPeriods-format-abbr-am":"AM","dateTimeFormats-appendItem-Second":"{0} ({2}: {1})","dayPeriods-format-wide-noon":"middag","dateFormatItem-yMd":"d/M/y","field-era":"\u00c6ra",
"dateFormatItem-yM":"M/y","months-standAlone-wide":"januar februar marts april maj juni juli august september oktober november december".split(" "),"timeFormat-short":"HH.mm","quarters-format-wide":["1. kvartal","2. kvartal","3. kvartal","4. kvartal"],"dateFormatItem-yQQQQ":"QQQQ y","timeFormat-long":"HH.mm.ss z","field-year":"\u00c5r","dateFormatItem-yMMM":"MMM y","dateTimeFormats-appendItem-Era":"{1} {0}","field-hour":"Time","months-format-abbr":"jan. feb. mar. apr. maj jun. jul. aug. sep. okt. nov. dec.".split(" "),
"field-sat-relative+0":"denne l\u00f8rdag","field-sat-relative+1":"n\u00e6ste l\u00f8rdag","timeFormat-full":"HH.mm.ss zzzz","dateTimeFormats-appendItem-Week":"{0} ({2}: {1})","field-day-relative+0":"i dag","field-thu-relative+0":"denne torsdag","field-day-relative+1":"i morgen","field-thu-relative+1":"n\u00e6ste torsdag","dateFormatItem-GyMMMd":"d. MMM y G","dateFormatItem-H":"HH","months-standAlone-abbr":"jan feb mar apr maj jun jul aug sep okt nov dec".split(" "),"quarters-format-abbr":["1. kvt.",
"2. kvt.","3. kvt.","4. kvt."],"quarters-standAlone-wide":["1. kvartal","2. kvartal","3. kvartal","4. kvartal"],"dateFormatItem-Gy":"y G","dateFormatItem-M":"M","days-standAlone-wide":"s\u00f8ndag mandag tirsdag onsdag torsdag fredag l\u00f8rdag".split(" "),"dayPeriods-format-abbr-noon":"middag","timeFormat-medium":"HH.mm.ss","field-sun-relative+0":"denne s\u00f8ndag","dateFormatItem-Hm":"HH.mm","field-sun-relative+1":"n\u00e6ste s\u00f8ndag","quarters-standAlone-abbr":["1. kvt.","2. kvt.","3. kvt.",
"4. kvt."],eraAbbr:["f.Kr.","e.Kr."],"field-minute":"Minut","field-dayperiod":"AM/PM","days-standAlone-abbr":"s\u00f8n man tir ons tor fre l\u00f8r".split(" "),"dateFormatItem-d":"d.","dateFormatItem-ms":"mm.ss","quarters-format-narrow":["1","2","3","4"],"field-day-relative+-1":"i g\u00e5r","dateTimeFormat-long":"{1} 'kl.' {0}","dayPeriods-format-narrow-am":"a","dateFormatItem-h":"h a","dateFormatItem-MMMd":"d. MMM","dateFormatItem-MEd":"E d/M","dateTimeFormat-full":"{1} 'kl.' {0}","field-fri-relative+0":"denne fredag",
"field-fri-relative+1":"n\u00e6ste fredag","field-day":"Dag","days-format-wide":"s\u00f8ndag mandag tirsdag onsdag torsdag fredag l\u00f8rdag".split(" "),"field-zone":"Tidszone","months-standAlone-narrow":"JFMAMJJASOND".split(""),"dateFormatItem-y":"y","dateTimeFormats-appendItem-Day":"{0} ({2}: {1})","field-year-relative+-1":"sidste \u00e5r","field-month-relative+-1":"sidste m\u00e5ned","dateTimeFormats-appendItem-Year":"{1} {0}","dateFormatItem-hm":"h.mm a","dateTimeFormats-appendItem-Hour":"{0} ({2}: {1})",
"dayPeriods-format-abbr-pm":"PM","days-format-abbr":"s\u00f8n. man. tir. ons. tor. fre. l\u00f8r.".split(" "),eraNames:["f.Kr.","e.Kr."],"dateFormatItem-yMMMd":"d. MMM y","days-format-narrow":"SMTOTFL".split(""),"field-month":"M\u00e5ned","days-standAlone-narrow":"SMTOTFL".split(""),"dateFormatItem-MMM":"MMM","field-tue-relative+0":"denne tirsdag","dateTimeFormats-appendItem-Quarter":"{0} ({2}: {1})","field-tue-relative+1":"n\u00e6ste tirsdag","dayPeriods-format-wide-am":"AM","dateTimeFormats-appendItem-Month":"{0} ({2}: {1})",
"dateTimeFormats-appendItem-Minute":"{0} ({2}: {1})","dateFormatItem-EHm":"E HH.mm","field-mon-relative+0":"denne mandag","field-mon-relative+1":"n\u00e6ste mandag","dateFormat-short":"dd/MM/y","dateFormatItem-EHms":"E HH.mm.ss","dateFormatItem-Ehms":"E h.mm.ss a","dayPeriods-format-narrow-noon":"middag","field-second":"Sekund","field-sat-relative+-1":"sidste l\u00f8rdag","dateFormatItem-yMMMEd":"E d. MMM y","field-sun-relative+-1":"sidste s\u00f8ndag","field-month-relative+0":"denne m\u00e5ned",
"field-month-relative+1":"n\u00e6ste m\u00e5ned","dateTimeFormats-appendItem-Timezone":"{0} {1}","dateFormatItem-Ed":"E 'den' d.","field-week":"Uge","dateFormat-medium":"d. MMM y","field-week-relative+-1":"sidste uge","field-year-relative+0":"i \u00e5r","field-year-relative+1":"n\u00e6ste \u00e5r","dayPeriods-format-narrow-pm":"p","dateTimeFormat-short":"{1} {0}","dateFormatItem-Hms":"HH.mm.ss","dateFormatItem-hms":"h.mm.ss a","dateFormatItem-GyMMM":"MMM y G","field-mon-relative+-1":"sidste mandag",
"field-week-relative+0":"denne uge","field-week-relative+1":"n\u00e6ste uge","dateFormatItem-yMM":"MM/y","dateFormatItem-MMdd":"dd/MM","field-day-relative+2":"i overmorgen","field-day-relative+-2":"i forg\u00e5rs","dateFormatItem-MMMMEd":"E d. MMMM",_localized:{}}});
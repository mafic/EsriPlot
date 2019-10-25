// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/arcade/featureset/support/sqlUtils",["require","exports","../../languageUtils","./shared","../../polyfill/sql/WhereClause"],function(y,k,x,h,t){function q(b,a){return g(b.parseTree,a,b.parameters)}function g(b,a,c,d,e){void 0===d&&(d=null);void 0===e&&(e=null);var f;switch(b.type){case "interval":return u(g(b.value,a,c,d,e),b.qualifier,b.op,a);case "case_expression":var h=" CASE ";"simple"===b.format&&(h+=g(b.operand,a,c,d,e));for(f=0;f<b.clauses.length;f++)h+=" WHEN "+g(b.clauses[f].operand,
a,c,d,e)+" THEN "+g(b.clauses[f].value,a,c,d,e);null!==b.else&&(h+=" ELSE "+g(b.else,a,c,d,e));return h+" END ";case "param":d=c[b.value.toLowerCase()];if("string"===typeof d)return"'"+c[b.value.toLowerCase()].toString().replace(/'/g,"''")+"'";if(d instanceof Date)return n(d,a);if(d instanceof Array){b=[];for(f=0;f<d.length;f++)"string"===typeof d[f]?b.push("'"+d[f].toString().replace(/'/g,"''")+"'"):d[f]instanceof Date?b.push(n(d[f],a)):b.push(d[f].toString());return b}return d.toString();case "expr_list":f=
[];h=0;for(b=b.value;h<b.length;h++)f.push(g(b[h],a,c,d,e));return f;case "unary_expr":return" ( NOT "+g(b.expr,a,c,d,e)+" ) ";case "binary_expr":switch(b.operator){case "AND":return" ("+g(b.left,a,c,d,e)+" AND "+g(b.right,a,c,d,e)+") ";case "OR":return" ("+g(b.left,a,c,d,e)+" OR "+g(b.right,a,c,d,e)+") ";case "IS":if("null"!==b.right.type)throw Error("Unsupported RHS for IS");return" ("+g(b.left,a,c,d,e)+" IS NULL )";case "ISNOT":if("null"!==b.right.type)throw Error("Unsupported RHS for IS");return" ("+
g(b.left,a,c,d,e)+" IS NOT NULL )";case "IN":f=[];if("expr_list"===b.right.type)return f=g(b.right,a,c,d,e)," ("+g(b.left,a,c,d,e)+" IN ("+f.join(",")+")) ";f=g(b.right,a,c,d,e);return f instanceof Array?" ("+g(b.left,a,c,d,e)+" IN ("+f.join(",")+")) ":" ("+g(b.left,a,c,d,e)+" IN ("+f+")) ";case "NOT IN":f=[];if("expr_list"===b.right.type)return f=g(b.right,a,c,d,e)," ("+g(b.left,a,c,d,e)+" NOT IN ("+f.join(",")+")) ";f=g(b.right,a,c,d,e);return f instanceof Array?" ("+g(b.left,a,c,d,e)+" NOT IN ("+
f.join(",")+")) ":" ("+g(b.left,a,c,d,e)+" NOT IN ("+f+")) ";case "BETWEEN":return f=g(b.right,a,c,d,e)," ("+g(b.left,a,c,d,e)+" BETWEEN "+f[0]+" AND "+f[1]+" ) ";case "NOTBETWEEN":return f=g(b.right,a,c,d,e)," ("+g(b.left,a,c,d,e)+" NOT BETWEEN "+f[0]+" AND "+f[1]+" ) ";case "LIKE":return""!==b.escape?" ("+g(b.left,a,c,d,e)+" LIKE "+g(b.right,a,c,d,e)+" ESCAPE '"+b.escape+"') ":" ("+g(b.left,a,c,d,e)+" LIKE "+g(b.right,a,c,d,e)+") ";case "NOT LIKE":return""!==b.escape?" ("+g(b.left,a,c,d,e)+" NOT LIKE "+
g(b.right,a,c,d,e)+" ESCAPE '"+b.escape+"') ":" ("+g(b.left,a,c,d,e)+" NOT LIKE "+g(b.right,a,c,d,e)+") ";case "\x3c\x3e":case "\x3c":case "\x3e":case "\x3e\x3d":case "\x3c\x3d":case "\x3d":case "*":case "-":case "+":case "/":return" ("+g(b.left,a,c,d,e)+" "+b.operator+" "+g(b.right,a,c,d,e)+") "}throw Error("Not Supported Operator "+b.operator);case "null":return"null";case "bool":return!0===b.value?"1":"0";case "string":return"'"+b.value.toString().replace(/'/g,"''")+"'";case "timestamp":return n(b.value,
a);case "date":return n(b.value,a);case "number":return b.value.toString();case "column_ref":return"CURRENT_DATE"===b.column.toUpperCase()?r(!0,a):"CURRENT_TIMESTAMP"===b.column.toUpperCase()?r(!1,a):d&&d.toLowerCase()===b.column.toLowerCase()?"("+e+")":b.column;case "function":return c=g(b.args,a,c,d,e),v(b.name,c,a)}throw Error("Unsupported sql syntax "+b.type);}function v(b,a,c){switch(b.toLowerCase().trim()){case "abs":if(1!==a.length)throw Error("Invalid Parameter for call to ABS");return"abs("+
a[0]+")";case "ceiling":case "ceil":if(1!==a.length)throw Error("Invalid Parameter for call to CEILING");switch(c){case h.FeatureServiceDatabaseType.Standardised:case h.FeatureServiceDatabaseType.StandardisedNoInterval:return"CEILING("+a[0]+")";default:return"CEILING("+a[0]+")"}case "floor":if(1!==a.length)throw Error("Invalid Parameter for call to Floor");return"FLOOR("+a[0]+")";case "log":if(1!==a.length)throw Error("Invalid Parameter for call to LOG");return"LOG("+a[0]+")";case "log10":if(1!==
a.length)throw Error("Invalid Parameter for call to LOG10");return"LOG10("+a[0]+")";case "power":if(2!==a.length)throw Error("Invalid Parameter for call to POWER");return"POWER("+a[0]+","+a[1]+")";case "round":if(2===a.length)return"ROUND("+a[0]+","+a[1]+")";if(1===a.length)return"ROUND("+a[0]+")";throw Error("Invalid Parameter for call to ROUND");case "truncate":if(1>a.length||2<a.length)throw Error("Invalid Parameter for TRUNCATE function");switch(c){case h.FeatureServiceDatabaseType.SqlServer:return"ROUND("+
a[0]+(1===a.length?"0":","+a[1])+",1)";default:return"TRUNCATE("+a[0]+(1===a.length?")":","+a[1]+")")}case "char_length":case "len":if(1!==a.length)throw Error("Invalid Parameter for CHAR_LENGTH function");switch(c){case h.FeatureServiceDatabaseType.SqlServer:return"LEN("+a[0]+")";case h.FeatureServiceDatabaseType.Oracle:return"LENGTH("+a[0]+")";default:return"CHAR_LENGTH("+a[0]+")"}case "concat":if(1>a.length)throw Error("Invalid Parameter for CONCAT function");c="CONCAT(";for(b=0;b<a.length;b++)0!==
b&&(c+=","),c+=a[b];return c+")";case "lower":case "lcase":if(1!==a.length)throw Error("Invalid Parameter for Lower function");return"LOWER("+a[0]+")";case "upper":case "ucase":if(1!==a.length)throw Error("Invalid Parameter for Upper function");return"UPPER("+a[0]+")";case "substring":switch(b="",c){case h.FeatureServiceDatabaseType.Oracle:return b="SUBSTR("+a[0]+","+a[1],3===a.length&&(b+=","+a[2]),b+")";case h.FeatureServiceDatabaseType.SqlServer:return b=3===a.length?"SUBSTRING("+a[0]+","+a[1]+
","+a[2]+")":"SUBSTRING("+a[0]+",  "+a[1]+", LEN("+a[0]+") - "+a[1]+")";default:return b="SUBSTRING("+a[0]+" FROM "+a[1],3===a.length&&(b+=" FOR "+a[2]),b+")"}case "extract":return"EXTRACT("+a[0].replace(/\'/g,"")+" FROM "+a[1]+")"}throw Error("Function Not Recognised");}function n(b,a){b=x.MomentLibrary.Moment(b);var c=0===b.minute()&&0===b.hour()&&0===b.second()&&0===b.millisecond();switch(a){case h.FeatureServiceDatabaseType.FILEGDB:case h.FeatureServiceDatabaseType.Standardised:case h.FeatureServiceDatabaseType.StandardisedNoInterval:return c?
"date '"+b.format("YYYY-MM-DD")+"'":"date '"+b.format("YYYY-MM-DD HH:mm:ss")+"'";case h.FeatureServiceDatabaseType.Oracle:return c?"TO_DATE('"+b.format("YYYY-MM-DD")+"','YYYY-MM-DD')":"TO_DATE('"+b.format("YYYY-MM-DD HH:mm:ss")+"','YYYY-MM-DD HH24:MI:SS')";case h.FeatureServiceDatabaseType.SqlServer:return"'"+b.format(c?"YYYY-MM-DD":"YYYY-MM-DD HH:mm:ss")+"'";case h.FeatureServiceDatabaseType.PGDB:return"#"+b.format(c?"MM-DD-YYYY":"MM-DD-YYYY HH:mm:ss")+"#";case h.FeatureServiceDatabaseType.Postgres:return"TIMESTAMP '"+
b.format(c?"YYYY-MM-DD":"YYYY-MM-DD HH:mm:ss")+"'";default:return"date '"+b.format("YYYY-MM-DD HH:mm:ss")+"'"}}function r(b,a){switch(a){case h.FeatureServiceDatabaseType.FILEGDB:case h.FeatureServiceDatabaseType.Standardised:case h.FeatureServiceDatabaseType.StandardisedNoInterval:return b?"CURRENT_DATE":"CURRENT_TIMESTAMP";case h.FeatureServiceDatabaseType.Oracle:return b?"CURRENT_DATE":"CURRENT_TIMESTAMP";case h.FeatureServiceDatabaseType.SqlServer:return b?"CAST(GETDATE() AS DATE)":"GETDATE()";
case h.FeatureServiceDatabaseType.PGDB:return b?"CURRENT_DATE":"CURRENT_TIMESTAMP";case h.FeatureServiceDatabaseType.Postgres:return b?"CURRENT_DATE":"CURRENT_TIMESTAMP";default:return b?"CURRENT_DATE":"CURRENT_TIMESTAMP"}}function l(b,a,c,d){switch(a.type){case "interval":return"integer";case "case_expression":var e=[];if("simple"===a.format)for(var f=0;f<a.clauses.length;f++)e.push(l(b,a.clauses[f].value,c,d));else for(f=0;f<a.clauses.length;f++)e.push(l(b,a.else,c,d));null!==a.else&&e.push(l(b,
a.else,c,d));return p(e);case "param":b=d[a.value.toLowerCase()];if(void 0===b&&c){c=c[a.value.toLowerCase()];if(void 0===c||null===c)return"";if("string"===typeof c||c instanceof String)return"string";if("boolean"===typeof c)return"boolean";if(c instanceof Date)return"date";if("number"===typeof c)return 0===c%1?"integer":"double"}return void 0===b?"":b;case "expr_list":e=[];f=0;for(a=a.value;f<a.length;f++)e.push(l(b,a[f],c,d));return e;case "unary_expr":return"boolean";case "binary_expr":switch(a.operator){case "AND":return"boolean";
case "OR":return"boolean";case "IS":if("null"!==a.right.type)throw Error("Unsupported RHS for IS");return"boolean";case "ISNOT":if("null"!==a.right.type)throw Error("Unsupported RHS for IS");return"boolean";case "IN":return"boolean";case "NOT IN":return"boolean";case "BETWEEN":return"boolean";case "NOTBETWEEN":return"boolean";case "LIKE":return"boolean";case "NOT LIKE":return"boolean";case "\x3c\x3e":case "\x3c":case "\x3e":case "\x3e\x3d":case "\x3c\x3d":case "\x3d":return"boolean";case "*":case "-":case "+":case "/":return p([l(b,
a.left,c,d),l(b,a.right,c,d)])}throw Error("Not Supported Operator "+a.operator);case "null":return"";case "bool":return"boolean";case "string":return"string";case "number":return null===a.value?"":0===a.value%1?"integer":"double";case "date":return"date";case "timestamp":return"date";case "column_ref":if("CURRENT_DATE"===a.column.toUpperCase()||"CURRENT_TIMESTAMP"===a.column.toUpperCase())return"date";c=b[a.column.toLowerCase()];return void 0===c?"":c;case "function":switch(a.name.toLowerCase()){case "position":case "extract":case "char_length":return"integer";
case "round":c=l(b,a.args,c,d);if(c instanceof Array){if(0<c.length)return c[0];break}return c;case "sign":return c=l(b,a.args,c,d),c instanceof Array&&(c=p(c)),"integer"===c||"double"===c?c:"double";case "ceiling":case "floor":case "abs":return c=l(b,a.args,c,d),c instanceof Array?p(c):c;case "area":case "length":case "log":case "log10":case "sin":case "cos":case "tan":case "asin":case "acos":case "atan":case "power":return"double";case "substring":case "trim":case "concat":case "lower":case "upper":return"string";
case "truncate":return"double";case "round":if(c=l(b,a.args,c,d),c instanceof Array){if(0<c.length)return c[0]}else return c}return""}throw Error("Unsupported sql syntax "+a.type);}function p(b){if(b){for(var a="",c=0;c<b.length;c++){var d=b[c];""!==d&&(a=""===a?d:w[a]<w[d]?d:a)}return a}return""}function m(b,a){if(null===b||void 0===b)return!1;switch(b.type){case "when_clause":return m(b.operand,a)||m(b.value,a);case "case_expression":for(var c=0,d=b.clauses;c<d.length;c++){var e=d[c];if(m(e,a))return!0}if("simple"===
b.format&&m(b.operand,a)||null!==b.else&&m(b.else,a))return!0;break;case "expr_list":c=0;for(b=b.value;c<b.length;c++)if(e=b[c],m(e,a))return!0;break;case "unary_expr":return m(b.expr,a);case "binary_expr":return m(b.left,a)||m(b.right,a);case "column_ref":return a.toLowerCase()===b.column.toLowerCase();case "function":return m(b.args,a)}return!1}function u(b,a,c,d){d="";d="interval-period"===a.type?""+a.period.toUpperCase():""+a.start.period.toUpperCase()+" TO "+(""+a.end.period.toUpperCase());return"INTERVAL "+
c+" "+b+" "+d}Object.defineProperty(k,"__esModule",{value:!0});k.toWhereClause=q;k.toWhereClauseFromTree=function(b,a,c){return g(b,a,c)};k.reformulateWithoutField=function(b,a,c,d){return t.WhereClause.create(g(b.parseTree,h.FeatureServiceDatabaseType.Standardised,b.parameters,a,c),d)};k.combine=function(b,a,c){void 0===c&&(c="AND");return t.WhereClause.create("(("+q(b,h.FeatureServiceDatabaseType.Standardised)+")"+c+"("+q(a,h.FeatureServiceDatabaseType.Standardised)+"))",b.fieldsIndex)};k.translateFunctionToDatabaseSpecific=
v;k.makeDateString=n;k.makeToday=r;k.predictType=function(b,a,c){void 0===c&&(c={});for(var d={},e={},f={esriFieldTypeSmallInteger:"integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"double",esriFieldTypeDouble:"double",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"integer",oid:"integer",long:"integer","small-integer":"integer",integer:"integer",single:"double",double:"double",date:"date",string:"string"},g=0;g<a.length;g++){var h=a[g],k=f[h.type];d[h.name.toLowerCase()]=
void 0===k?"":k}for(h in c)k=f[c[h]],e[h.toLowerCase()]=void 0===k?"":k;switch(l(d,b.parseTree,b.parameters,e)){case "double":return"double";case "integer":return"integer";case "double":return"double";case "date":return"date";case "string":return"string"}return""};var w={boolean:1,string:2,integer:3,double:4,date:5};k.scanForField=function(b,a){return m(b.parseTree,a)};k.isSingleField=function(b){return"column_ref"===b.parseTree.type?!0:!1};k.convertIntervalToSql=u});
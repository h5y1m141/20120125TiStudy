var exports = {
  readSchema :function(tableName){
    var s = require('lib/googleFusionTables').schema;
    return s[tableName];
  }
};
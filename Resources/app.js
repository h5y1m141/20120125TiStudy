var googleFusionTables = new (require('lib/googleFusionTables').util);
var ui = require('ui/ui');
var param ={
  url:"https://www.google.com/fusiontables/api/query?sql=",
  query:"DESCRIBE ",
  tableid:googleFusionTables.tableList.craftBeer
};
var param1 ={
  url:"https://www.google.com/fusiontables/api/query?sql=",
  selectStatement:"SELECT shop_name,drink_or_buy,location ",
  tableid:googleFusionTables.tableList.craftBeer,
  callback:"ui.createMap"
};


googleFusionTables.select('GET',param1);
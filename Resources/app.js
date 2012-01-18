var googleFusionTables = new (require('lib/googleFusionTables').util);
var ui = require('ui/ui');
var param ={
  url:"https://www.google.com/fusiontables/api/query?sql=",
  query:"DESCRIBE ",
  tableid:googleFusionTables.tableList.craftBeer
};
var param1 ={
  url:"https://www.google.com/fusiontables/api/query?sql=",
  sqlStatement:"SELECT shop_name,drink_or_buy,location FROM 2415682",
  callback:"ui.createMap"
};


//googleFusionTables.select('GET',param1);


// var testData = {
//   "table": {
//     "cols":["shop_name","comment","user_id","post_date"],
//     "rows":[
//      ["地ビールダイニング神楽坂ラ・カシェット","南信州のアンバーエールが美味しかった","h5y1m141","2011/12/16"],
//      ["地ビールダイニング神楽坂ラ・カシェット","桃のビールとマスカットのビール飲んだけどマスカットのほうが好みだった","tnakamaw","12/16/11"]
//    ]
//   }
// };
// var obj = ui.util(eval(testData));
// Ti.API.info('after:'+obj[0].comment);

var tableid   =2415682;
var tableName ='craftBeer';
var param2 ={
  url:"https://www.google.com/fusiontables/api/query?sql=",
  sqlStatement:"SELECT * FROM " + tableid,
  callback:"ui.util"
};

googleFusionTables.select('GET',param2);

Titanium.UI.setBackgroundColor('#000');
var ui = require('ui/ui');
var $$ = require('ui/styles').prop;
var win1 = Titanium.UI.createWindow($$.win);
win1.title = 'レストランブック';

var shopAddress = [
  {
    name:'地ビールダイニング神楽坂ラ・カシェット',
    address:'東京都新宿区神楽坂1-10',
    latitude:35.700457,
    longitude:139.742207,
    pict:'pict/001.png'
  },
  {
    name:'イノダコーヒ 東京大丸支店',
    address:'東京都千代田区丸の内1-9-1',
    latitude:35.683016,
    longitude:139.768417,
    pict:'pict/002.png'
  },
  {
    name:'nicoドーナツ 麻布十番店',
    address:'東京都港区麻布十番1-7-9',
    latitude:35.656134,
    longitude:139.734884,
    pict:'pict/003.png'
  }
];
var container = [];
var len = shopAddress.length;
for(var i=0;i<len;i++){
  var row = ui.createAddressRow(shopAddress[i]);
  container.push(row);
}
var tableView  = ui.createTableView(container);
var mapView = Titanium.Map.createView($$.mapView);
win1.add(mapView);
win1.add(tableView);
win1.open();

<<<<<<< HEAD
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
=======
>>>>>>> MapPlusAddressBook

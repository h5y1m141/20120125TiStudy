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

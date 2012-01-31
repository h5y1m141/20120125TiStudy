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
  },
  {
    name:'キャロリーヌ',
    address:'東京都練馬区春日町6-10-28',
    latitude:35.753396,
    longitude:139.634192,
    pict:'pict/004.png'
  },
  {
    name:'ラトリエコッコ',
    address:'東京都港区白金5-7-6',
    latitude:35.644722,
    longitude:139.727752,
    pict:'pict/005.png'
  },
  {
    name:'CRAFT BEER MARKET 虎ノ門店',
    address:'東京都港区西新橋1-23-3',
    latitude:35.6683,
    longitude:139.751549,
    pict:'pict/006.png'
  }
];
var container = [];
var len = shopAddress.length;
for(var i=0;i<len;i++){
  var row = ui.createAddressRow(shopAddress[i]);
  container.push(row);
}
var tableView  = ui.createTableView(container);


win1.add(tableView);
win1.open();

var $$ = require('ui/styles').prop;
var exports = {
  createMap:function(/* object */ annotaion){

    var container = [];
    var rows =  [];
    var len = annotaion.table.rows.length;

    var mapView = Titanium.Map.createView($$.mapView);
    for(var i=0;i<len;i++){
      var location = annotaion.table.rows[i][2].split(",");

      // table View用の情報
      var info = {};
      info.latitude = location[0];
      info.longitude =location[1];
      info.title = annotaion.table.rows[i][0];
      info.subtitle = annotaion.table.rows[i][1];

      var row = createTableViewRow(info);
      rows.push(row);

      var pin = Titanium.Map.createAnnotation($$.mapAnnotation);
      pin.latitude = location[0];
      pin.longitude =location[1];
      pin.title = annotaion.table.rows[i][0];
      pin.subtitle = annotaion.table.rows[i][1];

      container.push(pin);
    }
    var tableView = createTableView(rows);
    mapView.addAnnotations(container);
    createMainWindow(mapView,tableView);
  },
  util:function(/* object */ obj){

    /*
     1. DESCRIBEを使って該当テーブルのスキーマ取得
     2. 取得したスキーマ情報をベースにJSON化する。
     ただしスキーマタイプがLocationの場合にはそこだけ格納されるデータ構造は
     配列なのでその部分だけ処理がやや煩雑
     */

    var len = obj.table.rows.length;
    var len1 = obj.table.cols.length;
    var s = require('lib/googleFusionTables').schema;

    // テーブルIDかテーブル名を何らかの形で引数に取る
    // やり方が思いつかないため、ひとまず決め打ち
    var tableName = 'mainTable';
    var result = h.readSchema(tableName);
    var columns = result.cols;
    var container = [];
    var _obj ={};

    for(var i=0;i<len;i++){
      for(var j=0;j<len1;j++){

        // 型がlocation の場合には緯度、経度の座標情報を配列で保持したほうが
        // 処理しやすくなるために判定処理を入れてます。

        var columnsName = obj.table.cols[j];
        if(columns[columnsName]==='location'){
          var location = obj.table.rows[i][j];
          _obj.latitude  = location[0];
          _obj.longitude = location[1];
        }else{
          _obj[columnsName] = obj.table.rows[i][j];
        }
      }

      container.push(_obj);
    }

    var mapView = createMap(container);
    Ti.API.info('start map view create ');
    //var tableView = createTableView(container);
    var win = Titanium.UI.createWindow();
    var mainView = Titanium.UI.createView($$.mainView);
    var subView = Titanium.UI.createView($$.subView);
    mainView.add(mapView);
    win.add(mainView);
    win.open();
    //return container;
  }
};

//private method


function createMap(/* object */ annotaion){

  var container = [];
  var rows =  [];
  var len = annotaion.length;

  var mapView = Titanium.Map.createView($$.mapView);
  for(var i=0;i<len;i++){
    var pin = Titanium.Map.createAnnotation($$.mapAnnotation);
    pin.latitude = annotaion.latitude;
    pin.longitude =annotaion.longitude;
    pin.title = annotaion[shop_name];
    pin.subtitle = annotaion[comment];
    container.push(pin);
  }
  return container;

}
function createMainWindow(mapView,tableView){
  var win = Titanium.UI.createWindow();
  var mainView = Titanium.UI.createView($$.mainView);
  var subView = Titanium.UI.createView($$.subView);
  mainView.add(mapView);
  subView.add(tableView);
  win.add(mainView);
  win.add(subView);
  win.open();
}
function createTableView(/* array */ rows){
  var tableView = Ti.UI.createTableView($$.tableView);

  var len = rows.length;
  for(var i=0;i<len;i++){
    tableView.appendRow(rows[i]);
  }
  return tableView;
}

function createTableViewRow(/* object */ json){
  var row = Ti.UI.createTableViewRow($$.viewRow);
  row.data = json;
  var shopName = Ti.UI.createLabel($$.shopName);
  shopName.text = json.title,

  row.add(shopName);

  return row;
}

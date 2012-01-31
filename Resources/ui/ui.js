var $$ = require('ui/styles').prop;
var exports = {
  createAddressRow:function(/* JSON */ address){
    var row = Ti.UI.createTableViewRow($$.viewRow);
    row.data = address;
    row.addEventListener('click', function(e){
      /*
        e.rowData.data.latitude,e.rowData.data.longitudeにて
        緯度経度情報を取得可能
      */

      var pin = Titanium.Map.createAnnotation($$.mapAnnotation);
      var mapView = Titanium.Map.createView($$.mapView);
      mapView.addAnnotations([pin]);
      mapView.region = {
        latitude:e.rowData.data.latitude,
        longitude:e.rowData.data.longitude,
        latitudeDelta:0.01,
        longitudeDelta:0.01
      };
      var mapWin = Ti.UI.createWindow($$.mapWin);
      var closeBtn = Titanium.UI.createButton($$.closeBtn);
      closeBtn.addEventListener('click',function(){
        mapWin.close();
      });
      mapWin.leftNavButton = closeBtn;
      mapWin.add(mapView);
      mapWin.open();

    });
    var shopName = Ti.UI.createLabel($$.shopName);
    shopName.text = address.name,
    row.add(shopName);

    var addressInfo = Ti.UI.createLabel($$.address);
    addressInfo.text = address.address,
    row.add(addressInfo);

    var pict = Ti.UI.createImageView($$.pict);
    pict.image = address.pict;
    row.add(pict);
    return row;
  },

  createTableView:function(/* array */ rows){
    var len = rows.length;
    var tableView = Ti.UI.createTableView($$.tableView);
    for(var i=0;i<len;i++){
      tableView.appendRow(rows[i]);
    }
    return tableView;
  }
};

// private method
function setMapView(pin,latitude,longitude){
  var mapView = Titanium.Map.createView($$.mapView);
  mapView.addAnnotations([pin]);
  mapView.setLocation({
    latitude :latitude,
    longitude:longitude,
    latitudeDelta:0.01,
    longitudeDelta:0.01
  });
  return mapView;
}

function createCloseBtn(){

}
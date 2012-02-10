var $$ = require('ui/styles').prop;
var exports = {
  createAddressRow:function(/* JSON */ address){
    var row = Ti.UI.createTableViewRow($$.viewRow);
    row.data = address;
    row.addEventListener('click', function(e){
      actInd.show();
      var xhr = Titanium.Network.createHTTPClient();
      // URLエンコード処理をこれで行なってくれる
      xhr.autoEncodeUrl = true;
      xhr.open('GET','http://www.geocoding.jp/api/?v=1.1&q=' + e.rowData.data.address);
      xhr.onload = function(){
        var xml = this.responseXML;
        var lat = xml.documentElement.getElementsByTagName("lat").item(0).text;
        var lng = xml.documentElement.getElementsByTagName("lng").item(0).text;
        var pin = Titanium.Map.createAnnotation($$.mapAnnotation);
        Ti.API.info('lat:'+ lat +'lng:' +lng);
        pin.latitude = lat;
        pin.longitude = lng;
        setMapView(pin,lat,lng);
      };
      xhr.onerror = function(error){
        // errorにはエラー事由の文字列オブジェクトが入ってくる。
      };
      xhr.send();
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
  actInd.hide();
  mapView.addAnnotations([pin]);
  mapView.setLocation({
    latitude :latitude,
    longitude:longitude,
    latitudeDelta:0.01,
    longitudeDelta:0.01
  });
}
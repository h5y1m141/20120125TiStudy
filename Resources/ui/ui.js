var exports = {
  createMap:function(/* object */ annotaion, /* function */ func){
    var container = [];
    var len = annotaion.table.rows.length;

    var mapView = Titanium.Map.createView({
    mapType: Titanium.Map.STANDARD_TYPE,
    region: {
      latitude:35.676564,
      longitude:139.765076,
      // 1.0から0.001の間で縮尺尺度を示している。
      // 数値が大きい方が広域な地図になる。donayamaさんの書籍P.179の解説がわかりやすい
      latitudeDelta:0.01,
      longitudeDelta:0.01
    },
    animate:true,
    regionFit:true,
    userLocation:true
    });
    for(var i=0;i<len;i++){
      var location = annotaion.table.rows[i][2].split(",");
      var pin = Titanium.Map.createAnnotation({
        pincolor:Titanium.Map.ANNOTATION_GREEN,
        animate:true

      });
      pin.latitude = location[0];
      pin.longitude =location[1];
      pin.title = annotaion.table.rows[i][0];
      pin.subtitle = annotaion.table.rows[i][1];

      container.push(pin);
    }

    mapView.addAnnotations(container);
    createMainWindow(mapView);
  }
};

//private method
function createMainWindow(mapView){
  var win = Titanium.UI.createWindow();
  win.add(mapView);
  win.open();
}

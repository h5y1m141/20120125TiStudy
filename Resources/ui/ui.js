var exports = {
  createMap:function(/* object */ annotaion, /* function */ func){
    var $$ = require('ui/styles').prop;
    var container = [];
    var len = annotaion.table.rows.length;

    var mapView = Titanium.Map.createView($$.mapView);
    for(var i=0;i<len;i++){
      var location = annotaion.table.rows[i][2].split(",");
      var pin = Titanium.Map.createAnnotation($$.mapAnnotation);
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

Titanium.UI.setBackgroundColor('#000');
var ui = require('ui/ui');
var shopAddress = require('model/shopAddress').info;
var $$ = require('ui/styles').prop;
var win1 = Titanium.UI.createWindow($$.win);
win1.title = 'レストランブック';


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

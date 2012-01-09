(function() {
   pt.ui.createBloggerWindow = function(/*Ti.UI.object*/ element) {
     var win = Ti.UI.createWindow();
     win.add(element);
     return win;
   };
  pt.ui.createBloggerRow = function(/* JSON */ blogger){
    var row = Ti.UI.createTableViewRow($$.viewRow);
    row.data = blogger;
    row.hasChild = true;
    row.addEventListener('click', function(e){
      var win1 = Ti.UI.createWindow();
      win1.title = 'next window';
      var _tab = Titanium.App.Properties.getString('selectedTab');
      _tab.hide();

    });
    var title = Ti.UI.createLabel($$.contentLabel);
    title.text = blogger.blogTitle;
    row.add(title);

    var screen_name = Ti.UI.createLabel($$.screenName);
    screen_name.text = blogger.name;
    row.add(screen_name);

    var icon_iamge = Ti.UI.createImageView($$.iconImage);
    icon_iamge.image = "/ui/images/" + blogger.picture;

    row.add(icon_iamge);
    return row;

  };
  pt.ui.createTableView = function(/* array */ rows){
    var len = rows.length;
    var tableView = Ti.UI.createTableView($$.tableView);
    for(var i=0;i<len;i++){
      tableView.appendRow(rows[i]);
    }
    return tableView;
  };

}).call(this);

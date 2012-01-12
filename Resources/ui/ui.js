var exports = {
  createEntryRow:function(/* JSON */ entry){
    var row = Ti.UI.createTableViewRow($$.prop.viewRow);
    row.data = entry;
    row.addEventListener('click', function(e){
      var win = Titanium.UI.createWindow({left:20});
      var label = Ti.UI.createLabel({
        backgroundColor:'#000',
        color:'#FFF',
        text:e.row.data.title,
        top:0,
        left:0,
        height:30
      });
      win.add(label);
      var webView = Ti.UI.createWebView({top:30,left:0,height:'auto',width:'auto'});
      webView.html = '<html><head><meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1"></head><body>'
      + e.row.data.html_body
      + '</body></html>';
      win.add(webView);
      win.open();

    });
    var title = Ti.UI.createLabel($$.prop.entry);
    title.text = entry.title,
    row.add(title);

    var entrySummary = Ti.UI.createLabel($$.prop.entrySummary);
    entrySummary.text = entry.html_body.replace(/<\/?[^>]+>/gi, "");
    row.add(entrySummary);

    var bloggerName = Ti.UI.createLabel($$.prop.bloggerName);
    bloggerName.text = entry.blogger;
    row.add(bloggerName);

    var icon_iamge = Ti.UI.createImageView($$.prop.iconImage);
    icon_iamge.image = '/ui/images/' + entry.blogger + '.gif';

    row.add(icon_iamge);
    return row;
  },
  createTableView:function(/* array */ rows){
    /*
      実際のエントリ表示とは別のRowを1つ作成してそこにラベルを表示
     */
    var headerRow = Ti.UI.createTableViewRow($$.prop.headerRow);
    var label = Titanium.UI.createLabel($$.prop.label);
    label.text = 'あすなろBLOG';
    headerRow.add(label);

    var tableView = Ti.UI.createTableView($$.tableView);
    tableView.appendRow(headerRow);
    var len = rows.length;
    for(var i=0;i<len;i++){
      tableView.appendRow(rows[i]);
    }
    // tableView.addEventListener('click',function(e){
    //   var index = e.index;
    // });

    return tableView;
  },
  createMap:function(/* object */ json){
    Ti.API.info(json);
  }
};
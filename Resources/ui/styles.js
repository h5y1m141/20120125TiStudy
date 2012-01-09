var theme = {
  color:'#999',
  backgroundColor:'#fff',
  font:{fontSize:20,fontFamily:'Helvetica Neue'},
  textAlign:'center',
  width:'auto',
  viewIcon:'KS_nav_views.png',
  uiIcon:'KS_nav_ui.png'
};
var prop = {
  win: {
    backgroundColor:theme.backgroundColor
  },
  label : {
    color:'#FFF',
    textAlign:theme.textAlign,
    width:theme.width
  },
  tab1:{
    icon:theme.viewIcon
  },
  tab2:{
    icon:theme.uiIcon
  },
  headerRow:{
    width:'auto',
    backgroundColor:'#385292',
    height:40,
    hasDetail:false
  },
  viewRow:{
    width:'auto',
    height:'auto',
    hasDetail:true
  },
  entrySummary:{
    font:{fontSize:12},
    left:55,
    top:30,
    width:245,
    height:40
  },
  entry:{
    font:{fontSize:16},
    color:'#000',
    left:55,
    top:5,
    width:'auto',
    height:20
  },

  bloggerName:{
    font:{fontSize:12},
    color:'#000',
    left:5,
    top:40,
    width:'auto',
    height:20
  },
  iconImage:{
    left:5,
    top:5,
    width:30,
    height:30
  },
  tableView:{
    backgroundColor:theme.backgroundColor
  }
};

var exports = {
  prop:prop
};

var theme = {
  color:'#999',
  backgroundColor:'#fff',
  viewIcon:'KS_nav_views.png'
};
var prop = {
  win: {
    backgroundColor:theme.backgroundColor
  },
  tab1:{
    icon:theme.viewIcon,
    title:'MapView'
  },
  mapView:{
    width: 320,
    height:640,
    top:0,
    left:0,
    mapType: Titanium.Map.STANDARD_TYPE,
    animate:true,
    regionFit:true,
    userLocation:true
  },
  mapWin:{
    modal:true,
    title:'地図の表示',
    backgroundColor:theme.backgroundColor
  },
  mapAnnotation:{
    pincolor:Titanium.Map.ANNOTATION_GREEN,
    animate:false
  },
  tableView:{
    width: 320,
    height:640,
    top:0,
    left:0
  },
  viewRow:{
    width:320,
    height:'auto'
  },
  shopName:{
    font:{fontSize:14},
    color:'#000',
    left:80,
    top:5,
    width:230,
    height:20
  },
  address:{
    font:{fontSize:10},
    left:80,
    top:30,
    width:230,
    height:20
  },
  pict:{
    left:5,
    top:5,
    width:60,
    height:60
  },
  closeBtn:{
    title:'閉じる'
  }

};

var exports = {
  prop:prop
};

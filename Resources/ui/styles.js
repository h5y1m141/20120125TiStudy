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
  mainView:{
    width:320,
    height:300,
    left:0,
    top:0
  },
  subView:{
    width:320,
    height:200,
    left:0,
    top:305
  },
  label : {
    color:'#FFF',
    textAlign:theme.textAlign,
    width:theme.width,
    top:5,
    left:5
  },
  tab1:{
    icon:theme.viewIcon
  },
  tab2:{
    icon:theme.uiIcon
  },
  viewRow:{
    width:320,
    height:20
  },
  shopName:{
    font:{fontSize:16},
    color:'#000',
    left:0,
    top:0
  },
  tableView:{
    width:320,
    height:200,
    backgroundColor:theme.backgroundColor
  },
  mapView:{
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
  },
  mapAnnotation:{
    pincolor:Titanium.Map.ANNOTATION_GREEN,
    animate:true
  }
};

var exports = {
  prop:prop
};

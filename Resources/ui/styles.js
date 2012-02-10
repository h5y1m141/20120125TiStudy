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
    height:280,
    top:200,
    left:0,
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
    animate:false
  },
  tableView:{
    width: 320,
    height:200,
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
  actInd:{
    top:300,
    height:55,
    width:'auto',
    opacity:0.7,
    color:'#FFFFFF',
    backgroundColor:'#000',
    borderRadius:5,
    borderColor:'#000',
    font:{fontFamily:'Helvetica Neue', fontSize:14},
    message:' Loading...',
    style:Titanium.UI.iPhone.ActivityIndicatorStyle.PLAIN
  }
};

var exports = {
  prop:prop
};

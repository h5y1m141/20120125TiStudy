var util = function(){
  var self = this;
  self.data = [];
  self.tableList = {
    mainTable:2466170,
    craftBeer:2415682,
    comment:2467514
  };
  self.tableInfo = null;
  self.auth = null;
  self.name = function(){
    return 'Google Fusion Tables Library';
  };
  self.describeTable = function(method,param){
    if(param.query && param.url && param.tableid && param.callback){
    var query = encodeURI(param.query);
    var queryParameter = param.url+query + param.tableid;
    self._callAPI(method,queryParameter);
    }else {
      Ti.API.error('no param ');
    }
  };
  self.select = function(method,param){
    /*
      Fusion TablesのクエリーパラメータにjsonCallback=xxxx
      を付けることでCSVではなくJSONPでデータ取得できる。
      param.callbackにMapViewを生成するメソッド名を渡すことで

     */
    if(param.url && param.sqlStatement && param.callback){
      var sql = encodeURI(param.sqlStatement + " &jsonCallback=" + param.callback);
      Ti.API.info(sql);
      var queryParameter = param.url + sql;
      self._callAPI(method,queryParameter);
    } else {
      Ti.API.error('no param ');
    }
  };

  self.insert = function(/* array */ shopdata){
    return true;
  };
  self.isRegisterd = function(/* array */ shopdata){
    return true;
  };

  self._callAPI= function(
    /* string(GET or POST) */ method,
    /* param{url:'xx',query:'xx',tableid:self.tableList.xxx}*/ param
  ){

    var s = setInterval(function(){
      Ti.API.info(self.auth);
      if(!self.auth){
        self.login();
      }else{
        var xhr = Ti.Network.createHTTPClient();
        xhr.setTimeout(3000);
        xhr.setRequestHeader("Authorization",self.auth);
        xhr.open(method,param);
        xhr.onload = function(){
          clearInterval(s);
          eval(this.responseText);
        };
        xhr.error = function(){
          clearInterval(s);
          alert('no data');
        };
        xhr.send();
      }
    },1000);
  };

  self.login= function(){
    Ti.include('lib/config.js');

    var _authToken = null;
    var auth = null;
    var xhr = Ti.Network.createHTTPClient();
    var loginParam ={
        accountType: 'HOSTED_OR_GOOGLE',
        Email : config.email,
        Passwd : config.password,
        'Content-Type': "application/x-www-form-urlencoded",
        service        : "reader"
    };
    /*
      init()で、setIntervalを使って一定間隔ごとにauthキーが取得できてるか
      どうか確認しているが、その際にxhr.setTimeoutの数値を上記
      setIntervalの数値よりも大きくしておかないと、xhrが意図した処理に
      ならないためこれは必須みたい
      xhr.send() returns immediately before onload is called
      http://developer.appcelerator.com/question/24471/xhrsend-returns-immediately-before-onload-is-called
     */

    xhr.setTimeout(3000);
    xhr.open('POST','https://www.google.com/accounts/ClientLogin');
    xhr.onload = function(){
      //AuthKey取得した後にその値をHeaderにセットして認証処理を行う
      var body = xhr.responseText;
      var matches = body.match(/Auth=(.*)/);
      var results = matches[0].split('Auth=');
      var auth_token = results[1];
      if(this.status===200){
        self.auth = "GoogleLogin auth=" + auth_token;

      }else{
        var dialog = Ti.UI.createAlertDialog({
	  title: "認証失敗",
	  message: "ユーザ名かパスワードに入力の誤りがあります"
        });
        dialog.show();
      }
    };
    xhr.error = function(){
      var dialog = Ti.UI.createAlertDialog({
        title: "ネットワーク接続エラー",
        message: "ネットワーク接続が確立されていません。再度お試しください"
      });
      dialog.show();
    };
    xhr.send(loginParam);
  };
};
var schema =  {
  mainTable:{
    id:2466170,
    cols:{
      shop_name:'string',
      comment:'string',
      user_id:'string',
      post_date:'datetime',
      drink_or_buy:'number',
      location:'location'
    }
  },
  craftBeer:{
    id:2415682,
    cols:{
      shop_name:'string',
      drink_or_buy:'number',
      location:'location'
    }
  },
  comment:{
    id:2467514,
    cols:{
      shop_name:'string',
      comment:'string',
      user_id:'string',
      post_date:'datetime'
    }
  }
};
var exports = {
  util:util,
  schema:schema
};


// private method

function getSavePath(){
  var path = Titanium.Filesystem.applicationDataDirectory + "storage/";
  var file  = Ti.Filesystem.getFile(path);
  //存在しないときは作成
  if ( !file.exists() ) file.createDirectory();
  Ti.API.info("storage="+path);
  return path;
}

function fetch_remote_image(url, tmpPath, callback, height, width, defaultImage, timeout) {


  var imagePath = tmpPath + Ti.Utils.md5HexDigest(url) + '.jpg';
  var imagefile = Ti.Filesystem.getFile(imagePath);

  if (imagefile.exists()) {
    callback(imagePath);
  }

  defaultImage = defaultImage || 'images/dummy_profile50x50.png';
  timeout = timeout || 30000;
  height = height || 64;
  width = width || 64;

  var xhr = Ti.Network.createHTTPClient();
  xhr.setTimeout(timeout);

  xhr.onerror = function(e) {
    callback(defaultImage);
  };

  xhr.onload = function(){
    var remoteimage = this.responseData;

    if (!remoteimage) {
      imagePath = defaultImage;
    } else {
      var imageView = Ti.UI.createImageView({
        image: remoteimage,
        width: width,
        height: height
      });

      var tmpImage = imageView.toImage();
      var imagefile = Ti.Filesystem.getFile(imagePath);
      imagefile.write(tmpImage);
    }

    callback(imagePath);
  };

  xhr.open('GET', url);
  xhr.send();
}
//pinを追加する
function addFriendPushPin(lat, lng, title, subtitle, image, id,mapview) {
  var friendAnnotation;
  //画像をキャッシュする
  fetch_remote_image(image, getSavePath(), function(remoteImage) {
    var imagefile = Ti.Filesystem.getFile(remoteImage);
    Ti.API.info("now:"+title);
    if (imagefile.exists()) {
      Ti.API.info("now1:"+remoteImage);
      friendAnnotation = Ti.Map.createAnnotation({
        latitude: lat,
        longitude: lng,
        title: title,
        subtitle: subtitle,
        image: remoteImage,
        animate:true,
        //leftButton: 'appicon.png',
        myid: id
      });

      mapview.addAnnotation(friendAnnotation);
    }
  }, 32, 32);
}
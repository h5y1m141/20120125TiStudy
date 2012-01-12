var util = function(){
  var self = this;
  self.data = [];
  self.auth = null;
  self.login= function(email,password){
    var _authToken = null;
    var auth = null;
    var xhr = Ti.Network.createHTTPClient();
    var config = {
      email          : email,
      password       : password,
      login_param :{
        accountType: 'HOSTED_OR_GOOGLE',
        Email : email,
        Passwd : password,
        'Content-Type': "application/x-www-form-urlencoded",
        service        : "reader"
      }
    };
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
    xhr.send(config.login_param);

  };

  self.name = function(){
    return 'Google Fusion Tables Library';
  };
  self.list =  function(){
    var s = setInterval(function(){
      if(!self.auth){
        self.login('h5y1m141@gmail.com','tkmt411106');
      }else{
        Ti.API.info(self.auth);
        clearInterval(s);
      }
    },1000);

    if(auth){

    }else{

    }

  };
  self.craftBeer = function(){
    var flg=false,auth;
    setInterval(function(){
      if(!flg){
        login('h5y1m141@gmail.com','tkmt411106');
        Ti.API.info(self.auth);
      }else{
        clearInterval(function(){flg=true;});
      }
    },1000);


  };
  self.post = function(/* array */ shopdata){
    return true;
  };
  self.isRegisterd = function(/* array */ shopdata){
    return true;
  };
};

var exports = {
  util:util
};


// private method

function _get( auth, table, func){
  var xhr = Ti.Network.createHTTPClient();
  var tableList = {
    mainTable:2466170,
    craftBeer:2415682,
    comment:2467514
  };
  xhr.setRequestHeader("Authorization",auth);
  var baseUrl= "https://www.google.com/fusiontables/api/query?sql=SELECT+*+FROM+"+ tableList[table];

  xhr.open('GET',baseUrl);
  xhr.onload = function(){
    var result = this.responseText;
    func(result);
  };
  xhr.send();
};


/*
  http://stackoverflow.com/questions/1293147/javascript-code-to-parse-csv-data*/
function CSVToArray( strData, strDelimiter ){
  // Check to see if the delimiter is defined. If not,
  // then default to comma.
  strDelimiter = (strDelimiter || ",");

  // Create a regular expression to parse the CSV values.
  var objPattern = new RegExp(
    (
      // Delimiters.
      "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +

      // Quoted fields.
      "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +

      // Standard fields.
      "([^\"\\" + strDelimiter + "\\r\\n]*))"
    ),
    "gi"
  );


  // Create an array to hold our data. Give the array
  // a default empty first row.
  var arrData = [[]];

  // Create an array to hold our individual pattern
  // matching groups.
  var arrMatches = null;


  // Keep looping over the regular expression matches
  // until we can no longer find a match.
  while (arrMatches = objPattern.exec( strData )){

    // Get the delimiter that was found.
    var strMatchedDelimiter = arrMatches[ 1 ];

    // Check to see if the given delimiter has a length
    // (is not the start of string) and if it matches
    // field delimiter. If id does not, then we know
    // that this delimiter is a row delimiter.
    if (
      strMatchedDelimiter.length &&
          (strMatchedDelimiter != strDelimiter)
    ){

      // Since we have reached a new row of data,
      // add an empty row to our data array.
      arrData.push( [] );

    }


    // Now that we have our delimiter out of the way,
    // let's check to see which kind of value we
    // captured (quoted or unquoted).
    if (arrMatches[ 2 ]){

      // We found a quoted value. When we capture
      // this value, unescape any double quotes.
      var strMatchedValue = arrMatches[ 2 ].replace(
        new RegExp( "\"\"", "g" ),
        "\""
      );

    } else {

      // We found a non-quoted value.
      var strMatchedValue = arrMatches[ 3 ];

    }


    // Now that we have our value string, let's add
    // it to the data array.
    arrData[ arrData.length - 1 ].push( strMatchedValue );
  }

  // Return the parsed data.
  return( arrData );
};
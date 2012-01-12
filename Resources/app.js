var googleFusionTables = new (require('lib/googleFusionTables').util);
var ui = require('ui/ui');


var s = setInterval(function(){
  if(!googleFusionTables.auth){
    googleFusionTables.login('h5y1m141@gmail.com','tkmt411106');
  }else{
    Ti.API.info(googleFusionTables.auth);
    clearInterval(s);
  }
},1000);

var googleFusionTables = new (require('lib/googleFusionTables').util);
var ui = require('ui/ui');
googleFusionTables.init();

var s = setInterval(function(){
  if(!googleFusionTables.auth){
    googleFusionTables.login();
  }else{
    Ti.API.info(googleFusionTables.auth);
    clearInterval(s);
  }
},1000);

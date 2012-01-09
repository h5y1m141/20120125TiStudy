var util = function(){
  var self = this;
  self.name = function(){
    return 'Google Fusion Tables Library';
  };
  self.list =  function(){
    return '地ビールダイニング神楽坂ラ・カシェット';
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
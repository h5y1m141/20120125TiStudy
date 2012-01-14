describe("Google Fusion Tables", function() {
  var googleFusionTables;
  var util;
  var tableList = {
    mainTable:2466170,
    craftBeer:2415682,
    comment:2467514
  };
  beforeEach(function() {
    googleFusionTables = new (require('lib/googleFusionTables').util);
  });
  it("should be retreive table info", function() {
    var obj;
    var tableInfo = googleFusionTables.describeTable(tableList.craftBeer);
    expect(typeof tableInfo).toEqual('object');
  });


  it("should be post shop data into FutionTables", function() {
    var shopdata = [
      "萬感",//お店の名前
      "drink",//テイクアウト or 店内のどちらかを指定。
      "35,42,13.086,139,38,52.534"//座標情報
    ];
    expect(googleFusionTables.post(shopdata)).toEqual(true);
  });

  it("check if shop data is dupulicated", function() {
    var shopdata = [
      "地ビールダイニング神楽坂ラ・カシェット",//お店の名前
      "drink",//テイクアウト or 店内のどちらかを指定。
      "35.700457,139.742207"//座標情報
    ];
    expect(googleFusionTables.isRegisterd(shopdata)).toEqual(true);
  });

});
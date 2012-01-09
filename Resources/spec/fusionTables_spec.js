describe("Google Fusion Tables", function() {
  var googleFusionTables;
  var util;
  beforeEach(function() {
    googleFusionTables = new (require('lib/googleFusionTables').util);
  });
  it("should be retreive librarry name", function() {
    expect(googleFusionTables.name()).toEqual('Google Fusion Tables Library');
  });

  it("should be shop name in list of BeerShopRestraunt", function() {
    expect(googleFusionTables.list()).toEqual('地ビールダイニング神楽坂ラ・カシェット');
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
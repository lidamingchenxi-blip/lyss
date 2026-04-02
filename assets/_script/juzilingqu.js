cc.Class({
  extends: cc.Component,
  properties: {
    guang: cc.Node
  },
  onLoad: function () {},
  start: function () {
    adUtils.executeShowOtherAdvertising(true);
  },
  but_lingqu: function () {
    var e = this;
    music.api_audioPlay(MainDate.mp3.anniu);
    adUtils.executeShowVideo(function () {
      MainDate.PlayerData.juzi += 30;
      MainDate.PlayerDataSetObject();
      e.node.destroy();
      Menu.juziNum.getComponent(cc.Label).string = MainDate.PlayerData.juzi;
      window.goldTX();
    });
  },
  but_guanbi: function () {
    music.api_audioPlay(MainDate.mp3.anniu);
    this.node.destroy();
  },
  update: function (e) {
    this.guang.angle += 2;
  }
});
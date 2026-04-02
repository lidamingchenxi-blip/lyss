cc.Class({
  extends: cc.Component,
  properties: {},
  onLoad: function () {},
  start: function () {
    adUtils.executeShowGameAdvertising(true);
  },
  but_fuhuo: function () {
    var e = this;
    adUtils.executeShowVideo(function () {
      e.node.destroy();
      Game.guiweizhi.removeAllChildren();
      Game.gameOver = false;
    });
  },
  but_guanbi: function () {
    this.node.destroy();
    cocoscreator.api_showTip("prefab/game/gameOver", function (e) {
      var i = cc.instantiate(e);
      i.scale = 0;
      Game.MainCameraUI.addChild(i);
      cocoscreator.api_panetoff(i);
    }.bind(this));
  }
});
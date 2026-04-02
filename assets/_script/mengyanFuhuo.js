cc.Class({
  extends: cc.Component,
  properties: {},
  onLoad: function () {},
  but_fuhuo: function () {
    var e = this;
    adUtils.executeShowVideo(function () {
      e.node.destroy();
      Game.gameOver = false;
      playerGui.gui_fuhuo();
    });
  },
  but_guanbi: function () {
    this.node.destroy();
    Game.gameOver = true;
    cocoscreator.api_showTip("prefab/game/gameOver", function (e) {
      var i = cc.instantiate(e);
      i.scale = 0;
      Game.MainCameraUI.addChild(i);
      cocoscreator.api_panetoff(i);
    }.bind(this));
  },
  start: function () {
    adUtils.executeShowGameAdvertising(true);
  }
});
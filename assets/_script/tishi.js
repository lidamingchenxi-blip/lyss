cc.Class({
  extends: cc.Component,
  properties: {},
  but_guanbi: function () {
    music.api_audioPlay(MainDate.mp3.anniu);
    this.node.destroy();
  },
  start: function () {
    adUtils.executeShowOtherAdvertising(true);
  }
});
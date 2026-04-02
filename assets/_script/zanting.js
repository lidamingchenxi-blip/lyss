cc.Class({
  extends: cc.Component,
  properties: {},
  onLoad: function () {},
  start: function () {
    adUtils.executeShowPauseAdvertising(true);
    cc.director.pause();
  },
  but_jixuyouxi: function () {
    music.api_audioPlay(MainDate.mp3.anniu);
    cc.director.resume();
    this.node.destroy();
  },
  but_fanhui: function () {
    music.api_audioPlay(MainDate.mp3.anniu);
    cc.director.resume();
    cc.director.loadScene("scene/Menu");
  }
});
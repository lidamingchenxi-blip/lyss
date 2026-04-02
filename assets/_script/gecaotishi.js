cc.Class({
  extends: cc.Component,
  properties: {
    jinru_but: cc.Node
  },
  onLoad: function () {},
  but_guanbi: function () {
    this.node.destroy();
  },
  but_jinru: function () {
    MainDate.wuxianjinbi = true;
    MainDate.GameType = 8;
    cc.director.loadScene("scene/Game");
    this.node.destroy();
  },
  update: function (e) {
    if (ext && 0 == ext.tafang) {
      this.jinru_but.active = false;
    } else if (ext && 1 == ext.tafang && MainDate.PlayerData.tafang) {
      this.jinru_but.active = false;
    } else {
      this.jinru_but.active = true;
    }
  }
});
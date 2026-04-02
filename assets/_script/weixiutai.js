cc.Class({
  extends: cc.Component,
  properties: {},
  onLoad: function () {},
  but_weixiutai: function () {
    music.api_audioPlay("mp3/anniu");
    Game.xuanzhongWeixiutai = this;
    Game.tanchuang("weixiutai", Game.xuanzhongWeixiutai.node.bianzu);
  }
});
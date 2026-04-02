cc.Class({
  extends: cc.Component,
  properties: {
    huodeshandian: cc.Node
  },
  onLoad: function () {
    this.huodeshandian.getComponent(cc.Label).string = "+" + Math.floor(Game.daoJuJson[52].jiagedian / 2);
  },
  but_chaichu: function () {
    music.api_audioPlay("mp3/chaijianzhu");
    Player.fk_fangzhitishi(Game.xuanzhongWeixiutai.node.posFK, true);
    Player.jinbiArr += Math.floor(Game.daoJuJson[52].jiagejin / 2);
    Player.shandianArr += Math.floor(Game.daoJuJson[52].jiagedian / 2);
    MainDate.dangqianNum_weixiutai--;
    Game.jinbiNum.getComponent(cc.Label).string = Player.jinbiArr;
    Game.shandianNum.getComponent(cc.Label).string = Player.shandianArr;
    Player.shengjijiantou_tishi();
    Game.xuanzhongWeixiutai.node.destroy();
    this.node.destroy();
  },
  but_guanbi: function () {
    music.api_audioPlay("mp3/anniu");
    this.node.destroy();
  },
  start: function () {
    adUtils.executeShowGameAdvertising(true);
  }
});
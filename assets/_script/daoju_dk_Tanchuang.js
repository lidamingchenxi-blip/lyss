cc.Class({
  extends: cc.Component,
  properties: {
    img: cc.Node
  },
  onLoad: function () {
    var e;
    var i = this;
    switch (Game.chaichudaojuType) {
      case "nengliangzhao":
        e = "image/game/jianzao/daoju/hudun";
        break;
      case "binxiang":
        e = "image/game/jianzao/daoju/bingxiang1";
        break;
      case "lizijiasuqi":
        e = "image/game/jianzao/daoju/dianciquan";
        break;
      case "weixiutai":
        e = "image/game/jianzao/daoju/weixiu";
    }
    cc.loader.loadRes(e, cc.SpriteFrame, function (e, a) {
      i.img.getComponent(cc.Sprite).spriteFrame = a;
    });
  },
  but_chaichu: function () {
    music.api_audioPlay("mp3/chaijianzhu");
    switch (Game.chaichudaojuType) {
      case "nengliangzhao":
        Player.nengliangzhaoNum--;
        break;
      case "binxiang":
        Player.player_men_bing(false);
        Player.bingxiangNum--;
        break;
      case "lizijiasuqi":
        Player.dianciquanNum--;
        break;
      case "weixiutai":
        Player.weixiutaiNum--;
    }
    Game.chaichudaoju.destroy();
    this.node.destroy();
  },
  but_guanbi: function () {
    music.api_audioPlay(MainDate.mp3.jianzhushengji);
    this.node.destroy();
  },
  start: function () {
    adUtils.executeShowGameAdvertising(true);
  }
});
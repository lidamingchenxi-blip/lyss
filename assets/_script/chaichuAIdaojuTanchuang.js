cc.Class({
  extends: cc.Component,
  properties: {
    daoju: cc.Node,
    jinbi: cc.Node,
    shandian: cc.Node
  },
  onLoad: function () {
    var e = this;
    if ("paotai" == xuanzhongAIdaoju.name) {
      this.dengji = xuanzhongAIdaoju.getComponent("paotai").dengji;
      cc.loader.loadRes("image/game/jianzao/paotai/" + this.dengji + "/shang", cc.SpriteFrame, function (i, a) {
        e.daoju.getComponent(cc.Sprite).spriteFrame = a;
      });
    } else if ("youxiji" == xuanzhongAIdaoju.name) {
      this.dengji = xuanzhongAIdaoju.getComponent("youxiji").dengji, cc.loader.loadRes("image/game/jianzao/youxiji/" + this.dengji, cc.SpriteFrame, function (i, a) {
        e.daoju.getComponent(cc.Sprite).spriteFrame = a;
      });
    }
    this.jinbi.getComponent(cc.Label).string = Math.floor(Game.daoJuJson[this.dengji + 31].jiagejin / 2);
    this.shandian.getComponent(cc.Label).string = Math.floor(Game.daoJuJson[this.dengji + 31].jiagedian / 2);
    if (Math.floor(Game.daoJuJson[this.dengji + 31].jiagejin / 2) <= 0) {
      this.jinbi.active = false;
      this.shandian.scale = .8;
    } else if (Math.floor(Game.daoJuJson[this.dengji + 31].jiagedian / 2) <= 0) {
      this.shandian.active = false, this.jinbi.scale = .8;
    }
  },
  but_dianjichaichu: function () {
    Player.jinbiArr += Math.floor(Game.daoJuJson[this.dengji + 31].jiagejin / 2);
    Player.shandianArr += Math.floor(Game.daoJuJson[this.dengji + 31].jiagedian / 2);
    Game.jinbiNum.getComponent(cc.Label).string = Player.jinbiArr;
    Game.shandianNum.getComponent(cc.Label).string = Player.shandianArr;
    Player.shengjijiantou_tishi();
    xuanzhongAIdaoju.destroy();
    this.node.destroy();
  },
  start: function () {
    adUtils.executeShowGameAdvertising(true);
  }
});
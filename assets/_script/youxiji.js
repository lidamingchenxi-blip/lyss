cc.Class({
  extends: cc.Component,
  properties: {
    youxiji: cc.Node,
    shengji: cc.Node
  },
  onLoad: function () {
    this.dengji = 1;
    this.jiluTime = 1;
  },
  but_shezhi: function () {
    music.api_audioPlay("mp3/anniu");
    Game.xuanzhongYouxiji = this;
    Game.tanchuang("youxiji", Game.xuanzhongYouxiji.node.bianzu);
  },
  update: function (e) {
    if (!Game.gameOver) {
      this.jiluTime -= e;
      if (this.jiluTime <= 0) {
        this.jiluTime = 1, (5 == MainDate.GameType || 8 == MainDate.GameType || Player.men && this.node.bianzu == Player.men.bianzu) && (Player.shandianArr += Game.daoJuJson[this.dengji - 1 + 22].shengchanshandian * Game.shouyi_Beishu, Game.shandianNum.getComponent(cc.Label).string = Player.shandianArr, Player.shengjijiantou_tishi()), cocoscreator.api_showTip("prefab/game/huodeziyuan", function (e) {
          var i = cc.instantiate(e);
          i.getChildByName("jinbi").active = false;
          i.getChildByName("shandian").active = true;
          i.getChildByName("shandian").getComponent(cc.Label).string = " +" + Game.daoJuJson[this.dengji - 1 + 22].shengchanshandian * Game.shouyi_Beishu;
          i.x = this.node.x;
          i.y = this.node.y;
          Game.props.addChild(i);
          cc.tween(i).to(1.5, {
            y: i.y + 80,
            scale: .4
          }).call(function () {
            i.destroy();
          }).start();
          cc.tween(this.youxiji).to(.2, {
            scale: .8
          }).to(.1, {
            scale: 1
          }).start();
        }.bind(this));
      }
    }
  }
});
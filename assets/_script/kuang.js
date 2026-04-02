cc.Class({
  extends: cc.Component,
  properties: {
    kuang: cc.Node,
    shengji: cc.Node
  },
  onLoad: function () {
    this.kuangdengji = 1;
    this.jiluTime = 0;
  },
  but_kuangshi: function () {
    music.api_audioPlay("mp3/anniu");
    Game.kuangshixuanze = this;
    Game.tanchuang("kuangshi", Game.kuangshixuanze.node.bianzu);
  },
  update: function (e) {
    if (!Game.gameOver) {
      this.jiluTime++;
      if (this.jiluTime >= 60) {
        this.jiluTime = 0, Player.jinbiArr += Game.daoJuJson[55 + this.kuangdengji].shengchanjinbi * Game.shouyi_Beishu, Game.jinbiNum.getComponent(cc.Label).string = Player.jinbiArr, Player.shengjijiantou_tishi(), cc.tween(this.kuang).to(.2, {
          scale: .6
        }).to(.1, {
          scale: .8
        }).start(), cocoscreator.api_showTip("prefab/game/huodeziyuan", function (e) {
          var i = cc.instantiate(e);
          i.getChildByName("jinbi").active = true;
          i.getChildByName("shandian").active = false;
          i.getChildByName("jinbi").getComponent(cc.Label).string = " +" + Game.daoJuJson[55 + this.kuangdengji].shengchanjinbi * Game.shouyi_Beishu;
          i.x = this.node.x;
          i.y = this.node.y;
          Game.props.addChild(i);
          cc.tween(i).to(1.5, {
            y: i.y + 80,
            scale: .4
          }).call(function () {
            i.destroy();
          }).start();
        }.bind(this));
      }
    }
  }
});
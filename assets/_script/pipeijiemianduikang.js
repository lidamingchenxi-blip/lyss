cc.Class({
  extends: cc.Component,
  properties: {
    pipeijiemian_player2: cc.Node,
    pipeijiemian_player1: cc.Node,
    pipeijiemian_zhunbei: cc.Node
  },
  onLoad: function () {
    var e = this;
    this.node.zIndex = 15;
    cc.loader.loadRes("image/game/xuesheng/ren" + MainDate.renwuXuhao, cc.SpriteFrame, function (i, a) {
      e.pipeijiemian_player1.getComponent(cc.Sprite).spriteFrame = a;
      e.pipeijiemian_player1.active = true;
    });
  },
  but_zhunbei: function () {
    music.api_audioPlay(MainDate.mp3.anniu);
    if (!this.zhunbei) {
      this.pipeijiemian_zhunbei.active = false;
      this.zhunbei = true;
      var e = function () {
        var e = this;
        cc.loader.loadRes("image/game/xuesheng/ren" + Game.player2Xuhao, cc.SpriteFrame, function (i, a) {
          e.pipeijiemian_player2.getComponent(cc.Sprite).spriteFrame = a;
          e.pipeijiemian_player2.active = true;
          setTimeout(function () {
            e.node.destroy();
            Game.pipeijiemian = false;
          }, 1500 * Math.random());
        });
        cocoscreator.api_showTip("prefab/game/dk/playerAI_dk", function (e) {
          var i = cc.instantiate(e);
          i.name = MainDate.gameName[Math.floor(MainDate.gameName.length * Math.random())];
          i.pifu = this.player2Xuhao;
          i.Pos = {
            x: 4,
            y: 13 - Math.floor(40 / 9) - 1
          };
          i.x = 0;
          i.y = 90 * (13 - Math.floor(40 / 9) - 1) - 855;
          i.pifuNum = 0;
          i.qianwangfangjian = 1;
          this.props.addChild(i);
          this.player_Arr.push(i);
        }.bind(Game));
      }.bind(this);
      setTimeout(function () {
        e();
      }, 1500 * Math.random());
    }
  },
  but_genghuanzhenying: function () {
    if (1 == MainDate.GameType || 3 == MainDate.GameType || 4 == MainDate.GameType || 5 == MainDate.GameType || 7 == MainDate.GameType) {
      MainDate.GameType = 2;
      cc.director.loadScene("scene/Game");
    } else if (2 == MainDate.GameType) {
      MainDate.GameType = 1, cc.director.loadScene("scene/Game");
    }
  },
  start: function () {}
});
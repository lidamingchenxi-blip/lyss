cc.Class({
  extends: cc.Component,
  properties: {
    gui1: cc.Node,
    gui2: cc.Node,
    gui3: cc.Node,
    xuetiao: cc.Node,
    Lvxianshi: cc.Node
  },
  onLoad: function () {
    this.guixianshi();
    this.Lvxianshi.getComponent(cc.Label).string = "lv:" + Game.tafanglv;
    this.hpMax = MainDate.tafangGuihpMax;
    this.node.boss && (this.hpMax = 2 * this.hpMax);
    this.hp = this.hpMax;
    this.daoci_time = 1;
    this.vis = true;
    var e = Axunlu.searchRoad(Game.xunlumapArray, this.node.zishenPos.y, this.node.zishenPos.x, Player.chuang.zuobiaoPos.y, Player.chuang.zuobiaoPos.x);
    this.gui_move(e);
  },
  guixianshi: function () {
    if (1 == Game.guiXuhao) {
      this.gui1.active = true;
    } else if (2 == Game.guiXuhao) {
      this.gui2.active = true;
    } else {
      3 == Game.guiXuhao && (this.gui3.active = true);
    }
  },
  beigongji: function (e) {
    if (!(this.hp < 0 && !this.vis)) {
      this.hp -= e;
      if (this.hp <= 0) {
        this.vis = false, this.node.destroy();
      }
    }
  },
  update: function (e) {
    var i = this.hp / this.hpMax;
    i <= 0 && (i = 0);
    if (MainDate.dangqianNum_daoci > 0) {
      this.daoci_time -= e;
      if (this.daoci_time < 0) {
        this.daoci_time = 1, this.hp -= this.hpMax / 100;
      }
    }
    this.xuetiao.getComponent(cc.ProgressBar).progress = i;
  },
  gui_move: function (e) {
    var i = this;
    if (!Game.gameOver) {
      var a = e.pop();
      this.guiyidong = true;
      this.node.zishenPos = {
        x: a.x,
        y: a.y
      };
      var n = 90 * a.y - 360;
      var t = 90 * a.x - 855;
      var o = 1.2;
      MainDate.dangqianNum_bingxiang > 0 && (o = 1.5);
      cc.tween(this.node).to(o, {
        x: n,
        y: t
      }).call(function () {
        if (e.length > 0) {
          i.gui_move(e);
        } else if (!Game.gameOver) {
          Game.gameOver = true, cocoscreator.api_showTip("prefab/game/tafangFuhuo", function (e) {
            var i = cc.instantiate(e);
            i.scale = 0;
            Game.MainCameraUI.addChild(i);
            cocoscreator.api_panetoff(i);
          }.bind(i));
        }
      }).start();
    }
  }
});
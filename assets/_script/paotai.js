function n(e) {
  "@babel/helpers - typeof";

  return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    if (e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof e;
    }
  })(e);
}
cc.Class({
  extends: cc.Component,
  properties: {
    paotai: cc.Node,
    xia: cc.Node,
    guang: cc.Node,
    shengji: cc.Node,
    zhenhantexiao: cc.Node,
    zidanchutangxiaoguo: cc.Node
  },
  onLoad: function () {
    this.dengji = 1;
    this.gongjiV = 0;
    this.Vmax = 1;
    this.gongjili = 4;
    this.gongjiS = 4;
    this.juligongji = 4;
    this.Vmaxdangqian = this.Vmax;
    this.zhenhaiTime = 0;
  },
  but_shezhi: function () {
    music.api_audioPlay("mp3/anniu");
    Game.xuanzhongPaotai = this;
    Game.tanchuang("paotai", Game.xuanzhongPaotai.node.bianzu);
  },
  zhenhan: function () {
    this.zhenhaiTime = 180;
  },
  update: function (e) {
    if (!Game.gameOver) {
      if (this.zhenhaiTime > 0) {
        this.zhenhaiTime--;
        return void (this.zhenhantexiao.active = true);
      }
      var i;
      this.zhenhantexiao.active = false;
      if (MainDate.dangqianNum_liaowangtai > 0) {
        this.juligongji = 1.2 * this.gongjiS;
      } else {
        this.juligongji = this.gongjiS;
      }
      if (MainDate.dangqianNum_lizijiasuqi > 0) {
        this.Vmaxdangqian = .5 * this.Vmax;
      } else {
        this.Vmaxdangqian = this.Vmax;
      }
      if (1 == MainDate.GameType || 2 == MainDate.GameType || 3 == MainDate.GameType || 4 == MainDate.GameType || 7 == MainDate.GameType) {
        i = Player.men;
      } else {
        5 == MainDate.GameType && (i = Player.chuang);
      }
      if (MainDate.dangqianNum_dianciquan > 0 && i && i.name && Math.abs(i.x - Game.gui.x) < 360 && Math.abs(i.y - Game.gui.y) < 360) {
        var a = Math.abs(i.x - Game.gui.x);
        var n = Math.abs(i.y - Game.gui.y);
        this.Vmaxdangqian = this.Vmaxdangqian * (510 - Math.sqrt(a * a + n * n)) / 510 * .5;
      }
      this.chuantong_gongji(e);
      this.tafang_gongji(e);
    }
  },
  chuantong_gongji: function (e) {
    if (8 != MainDate.GameType && Math.abs(Game.gui.x - this.node.x) < 90 * this.juligongji && Math.abs(Game.gui.y - this.node.y) < 90 * this.juligongji && (this.gongjiV += e, this.Vmaxdangqian <= this.gongjiV && (7 == MainDate.GameType && 1 != Game.gui.getComponent("gui").taopao || 7 != MainDate.GameType))) {
      var i = 180 * Math.atan2(Game.gui.x - this.node.x, Game.gui.y - this.node.y) / Math.PI;
      this.paotai.angle = -i;
      this.gongjiV = 0;
      cc.tween(this.paotai).to(.2, {
        scaleY: .8
      }).to(.1, {
        scaleY: 1
      }).start();
      cc.tween(this.zidanchutangxiaoguo).to(.2, {
        opacity: 255
      }).to(.1, {
        opacity: 0
      }).start();
      Math.abs(Game.MainCamera.x - this.node.x) < 400 && Math.abs(Game.MainCamera.y - this.node.y) < 700 && music.api_audioPlay("mp3/paotaiogngji");
      cocoscreator.api_showTip("prefab/game/zidan", function (e) {
        var a = cc.instantiate(e);
        cc.loader.loadRes("image/game/zidan/zidan" + this.dengji, cc.SpriteFrame, function (e, i) {
          a && a.isValid && (a.getComponent(cc.Sprite).spriteFrame = i);
        });
        if (this.node && this.node.isValid) {
          a.x = this.node.x;
          a.y = this.node.y;
          a.angle = -i;
          a.zIndex = 9999;
          Game.props.addChild(a);
          a.getComponent("zidan").gongjili = this.gongjili;
          a.getComponent("zidan").dengji = this.dengji;
          a.getComponent("zidan").bianzu = this.node.bianzu;
          a.getComponent("zidan").paotai = this.node;
        }
      }.bind(this));
    }
  },
  tafang_gongji: function (e) {
    var i = this;
    if (8 == MainDate.GameType && (this.gongjiV += e, this.Vmaxdangqian <= this.gongjiV)) {
      var a = function (e) {
        var a = Game.guiweizhi.children[e];
        if (a && a.isValid && Math.abs(a.x - i.node.x) < 90 * i.juligongji && Math.abs(a.y - i.node.y) < 90 * i.juligongji) {
          i.gongjiV = 0;
          var n = 180 * Math.atan2(a.x - i.node.x, a.y - i.node.y) / Math.PI;
          i.paotai.angle = -n;
          cc.tween(i.paotai).to(.2, {
            scaleY: .8
          }).to(.1, {
            scaleY: 1
          }).start();
          cc.tween(i.zidanchutangxiaoguo).to(.2, {
            opacity: 255
          }).to(.1, {
            opacity: 0
          }).start();
          Math.abs(Game.MainCamera.x - i.node.x) < 400 && Math.abs(Game.MainCamera.y - i.node.y) < 700 && music.api_audioPlay("mp3/paotaiogngji");
          cocoscreator.api_showTip("prefab/game/zidan", function (e) {
            var i = cc.instantiate(e);
            cc.loader.loadRes("image/game/zidan/zidan" + this.dengji, cc.SpriteFrame, function (e, a) {
              i && i.isValid && (i.getComponent(cc.Sprite).spriteFrame = a);
            });
            if (this.node && this.node.isValid) {
              i.x = this.node.x;
              i.y = this.node.y;
              i.angle = -n;
              i.zIndex = 9999;
              Game.props.addChild(i);
              i.getComponent("zidan").gongjili = this.gongjili;
              i.getComponent("zidan").dengji = this.dengji;
              i.getComponent("zidan").bianzu = this.node.bianzu;
              i.getComponent("zidan").paotai = this.node;
              i.getComponent("zidan").gui = a;
            }
          }.bind(i));
          return {
            v: undefined
          };
        }
      };
      for (var t = Game.guiweizhi.children.length - 1; t >= 0; t--) {
        var o = a(t);
        if ("object" === n(o)) {
          return o.v;
        }
      }
    }
  }
});
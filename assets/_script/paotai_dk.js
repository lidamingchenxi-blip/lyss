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
    zidanchutangxiaoguo: cc.Node
  },
  onLoad: function () {
    this.dengji = 1;
    this.gongjiV = 0;
    this.Vmax = 1;
    this.gongjili = window.PlayerAI_dk.daojuduikang1[this.dengji].ad;
    console.log(this.gongjili);
    this.juligongji = 4;
    this.bianzu = this.node.bianzu;
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
      if (Player.dianciquanNum > 0) {
        this.Vmaxdangqian = .5 * this.Vmax;
      } else {
        this.Vmaxdangqian = this.Vmax;
      }
      this.gongjiV += e;
      if (this.Vmaxdangqian <= this.gongjiV) {
        this.gongjiV = 0, this.paotai_gongji();
      }
    }
  },
  paotai_gongji: function () {
    var e = this;
    var i = function (i) {
      var a = Game.guiweizhi.children[i];
      if (a.bianzu == e.bianzu) {
        return "continue";
      }
      if (Math.abs(a.x - e.node.x) < 90 * e.juligongji && Math.abs(a.y - e.node.y) < 90 * e.juligongji) {
        var n = 180 * Math.atan2(a.x - e.node.x, a.y - e.node.y) / Math.PI;
        e.paotai.angle = -n;
        cc.tween(e.paotai).to(.2, {
          scaleY: .8
        }).to(.1, {
          scaleY: 1
        }).start();
        cc.tween(e.zidanchutangxiaoguo).to(.2, {
          opacity: 255
        }).to(.1, {
          opacity: 0
        }).start();
        music.api_audioPlay(MainDate.mp3.paotaiogngji);
        cocoscreator.api_showTip("prefab/game/dk/zidan_dk", function (e) {
          var i = cc.instantiate(e);
          cc.loader.loadRes("image/game/zidan/zidan" + this.dengji, cc.SpriteFrame, function (e, a) {
            i && i.isValid && (i.getComponent(cc.Sprite).spriteFrame = a);
          });
          if (this.node && this.node.isValid) {
            i.x = this.node.x;
            i.y = this.node.y;
            i.angle = -n;
            i.zIndex = 9999;
            i.gongjili = this.gongjili;
            i.dengji = this.dengji;
            i.bianzu = this.node.bianzu;
            if (a && a.isValid) {
              i.guiX = a.x, i.guiY = a.y, i.gui = a, Game.props.addChild(i);
            }
          }
        }.bind(e));
        return {
          v: undefined
        };
      }
    };
    for (var a = 0; a < Game.guiweizhi.children.length; a++) {
      var t = i(a);
      switch (t) {
        case "continue":
          continue;
        default:
          if ("object" === n(t)) {
            return t.v;
          }
      }
    }
  }
});
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
    fuzhoufasheqi: cc.Node,
    duantoutai: cc.Node
  },
  onLoad: function () {
    this.daojuduantoutai_time = 0;
    this.daojufuzhoufasheqi_time = 0;
  },
  but_fuzhoufasheqi: function () {
    music.api_audioPlay("mp3/anniu");
    Game.chaichudaoju = this;
    Game.chaichudaojuType = "fuzhoufasheqi";
    Game.tanchuang("daoju", Game.chaichudaoju.node.bianzu);
  },
  but_nengliangzhao: function () {
    music.api_audioPlay("mp3/anniu");
    Game.chaichudaoju = this;
    Game.chaichudaojuType = "nengliangzhao";
    Game.tanchuang("daoju", Game.chaichudaoju.node.bianzu);
  },
  but_tikuanji: function () {
    music.api_audioPlay("mp3/anniu");
    Game.chaichudaoju = this;
    Game.chaichudaojuType = "tikuanji";
    Game.tanchuang("daoju", Game.chaichudaoju.node.bianzu);
  },
  but_bingxiang: function () {
    music.api_audioPlay("mp3/anniu");
    Game.chaichudaoju = this;
    Game.chaichudaojuType = "binxiang";
    Game.tanchuang("daoju", Game.chaichudaoju.node.bianzu);
  },
  but_youbu: function () {
    music.api_audioPlay("mp3/anniu");
    Game.chaichudaoju = this;
    Game.chaichudaojuType = "youbu";
    Game.tanchuang("daoju", Game.chaichudaoju.node.bianzu);
  },
  but_daoci: function () {
    music.api_audioPlay("mp3/anniu");
    Game.chaichudaoju = this;
    Game.chaichudaojuType = "daoci";
    Game.tanchuang("daoju", Game.chaichudaoju.node.bianzu);
  },
  but_duantoutai: function () {
    music.api_audioPlay("mp3/anniu");
    Game.chaichudaoju = this;
    Game.chaichudaojuType = "duantoutai";
    Game.tanchuang("daoju", Game.chaichudaoju.node.bianzu);
  },
  but_liaowangtai: function () {
    music.api_audioPlay("mp3/anniu");
    Game.chaichudaoju = this;
    Game.chaichudaojuType = "liaowangtai";
    Game.tanchuang("daoju", Game.chaichudaoju.node.bianzu);
  },
  but_lizijiasuqi: function () {
    music.api_audioPlay("mp3/anniu");
    Game.chaichudaoju = this;
    Game.chaichudaojuType = "lizijiasuqi";
    Game.tanchuang("daoju", Game.chaichudaoju.node.bianzu);
  },
  but_dianciquan: function () {
    music.api_audioPlay("mp3/anniu");
    Game.chaichudaoju = this;
    Game.chaichudaojuType = "dianciquan";
    Game.tanchuang("daoju", Game.chaichudaoju.node.bianzu);
  },
  jinengfuzhou: function () {
    if (!(this.daojufuzhoufasheqi_time > 0 || Math.random() > .3)) {
      this.daojufuzhoufasheqi_time = 900;
      cocoscreator.api_showTip("prefab/game/zidan", function (e) {
        var i = cc.instantiate(e);
        cc.loader.loadRes("image/game/zidan/fuzhou", cc.SpriteFrame, function (e, a) {
          i.getComponent(cc.Sprite).spriteFrame = a;
        });
        i.x = this.node.x;
        i.y = this.node.y;
        Game.props.addChild(i);
        i.getComponent("zidan").gongjili = "fuzhou";
        i.getComponent("zidan").fuzhoufasheqi = true;
      }.bind(this));
    }
  },
  youbufasheqi: function () {
    cocoscreator.api_showTip("prefab/game/zidan", function (e) {
      var i = cc.instantiate(e);
      cc.loader.loadRes("image/game/zidan/youbu", cc.SpriteFrame, function (e, a) {
        i.getComponent(cc.Sprite).spriteFrame = a;
      });
      i.x = this.node.x;
      i.y = this.node.y;
      Game.props.addChild(i);
      i.getComponent("zidan").gongjili = "youbu";
      i.getComponent("zidan").fuzhoufasheqi = true;
    }.bind(this));
  },
  update: function (e) {
    var i = this;
    if (!Game.gameOver) {
      if (this.duantoutai.active && 8 != MainDate.GameType) {
        if (Math.abs(Game.gui.x - this.node.x) < 600 && Math.abs(Game.gui.y - this.node.y) < 600 && .2 * Game.gui.getComponent("gui").phMax > Game.gui.getComponent("gui").ph && this.daojuduantoutai_time <= 0) {
          this.daojuduantoutai_time = 900;
          cocoscreator.api_showTip("prefab/game/zidan", function (e) {
            var i = this;
            var a = cc.instantiate(e);
            cc.loader.loadRes("image/game/zidan/duantoutai", cc.SpriteFrame, function (e, n) {
              a.getComponent(cc.Sprite).spriteFrame = n;
              a.x = i.node.x;
              a.y = i.node.y;
              Game.props.addChild(a);
              a.getComponent("zidan").gongjili = .1 * Game.gui.getComponent("gui").phMax;
              a.getComponent("zidan").duantoutai = true;
            });
          }.bind(this));
        }
        this.daojuduantoutai_time > 0 && this.daojuduantoutai_time--;
      } else if (this.duantoutai.active && 8 == MainDate.GameType) {
        var a = function (e) {
          var a = Game.guiweizhi.children[e];
          if (a && a.isValid && Math.abs(a.x - i.node.x) < 600 && Math.abs(a.y - i.node.y) < 600 && .2 * a.getComponent("tafangGui").hpMax > a.getComponent("tafangGui").hp && i.daojuduantoutai_time <= 0) {
            i.daojuduantoutai_time = 900;
            cocoscreator.api_showTip("prefab/game/zidan", function (e) {
              var i = this;
              var n = cc.instantiate(e);
              cc.loader.loadRes("image/game/zidan/duantoutai", cc.SpriteFrame, function (e, t) {
                n.getComponent(cc.Sprite).spriteFrame = t;
                n.x = i.node.x;
                n.y = i.node.y;
                if (a && a.isValid) {
                  n.getComponent("zidan").gongjili = .1 * a.getComponent("tafangGui").phMax;
                  Game.props.addChild(n);
                }
              });
            }.bind(i));
            return {
              v: undefined
            };
          }
        };
        for (var t = 0; t < Game.guiweizhi.children.length; t++) {
          var o = a(t);
          if ("object" === n(o)) {
            return o.v;
          }
        }
        this.daojuduantoutai_time > 0 && this.daojuduantoutai_time--;
      }
      this.fuzhoufasheqi.active && this.daojufuzhoufasheqi_time > 0 && this.daojufuzhoufasheqi_time--;
    }
  }
});
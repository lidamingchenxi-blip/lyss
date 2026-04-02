cc.Class({
  extends: cc.Component,
  properties: {
    daoju: cc.Node,
    youxijiSpriteFrame: {
      default: null,
      type: cc.SpriteFrame
    },
    weixiuSpriteFrame: {
      default: null,
      type: cc.SpriteFrame
    },
    bingxiangSpriteFrame: {
      default: null,
      type: cc.SpriteFrame
    },
    nengliangzhaoSpriteFrame: {
      default: null,
      type: cc.SpriteFrame
    },
    dianciquanSpriteFrame: {
      default: null,
      type: cc.SpriteFrame
    },
    mengyan_gongjiSpriteFrame: {
      default: null,
      type: cc.SpriteFrame
    },
    mengyan_gongsuSpriteFrame: {
      default: null,
      type: cc.SpriteFrame
    },
    mengyan_shengmingSpriteFrame: {
      default: null,
      type: cc.SpriteFrame
    },
    mengyan_yisuSpriteFrame: {
      default: null,
      type: cc.SpriteFrame
    },
    liemengzheSpriteFrame: {
      default: null,
      type: cc.SpriteFrame
    },
    dengjixiasnhi: cc.Node
  },
  onLoad: function () {
    this.daojuduikang1 = null;
    cc.loader.loadRes("json/daojuduikang1", function (e, i) {
      this.daojuduikang1 = i.json;
      cc.loader.loadRes("json/duikangguilv", function (e, i) {
        this.duikangguilv = i.json;
        this.newGame();
      }.bind(this));
    }.bind(this));
  },
  newGame: function () {
    this.dengji = 1;
    switch (this.node.daoju) {
      case "youxiji":
        this.daoju.getComponent(cc.Sprite).spriteFrame = this.youxijiSpriteFrame;
        if (this.node.bianzu == Player.bianzu) {
          Player.youxijiNum += 1;
        } else {
          PlayerAI_dk.youxijiNum += 1;
        }
        break;
      case "weixiutai":
        this.daoju.getComponent(cc.Sprite).spriteFrame = this.weixiuSpriteFrame;
        if (this.node.bianzu == Player.bianzu) {
          Player.weixiutaiNum += 1;
        } else {
          PlayerAI_dk.weixiutaiNum += 1;
        }
        break;
      case "bingxiang":
        this.daoju.getComponent(cc.Sprite).spriteFrame = this.bingxiangSpriteFrame;
        if (this.node.bianzu == Player.bianzu) {
          Player.bingxiangNum += 1;
        } else {
          PlayerAI_dk.bingxiangNum += 1;
        }
        break;
      case "nengliangzhao":
        this.daoju.getComponent(cc.Sprite).spriteFrame = this.nengliangzhaoSpriteFrame;
        if (this.node.bianzu == Player.bianzu) {
          Player.nengliangzhaoNum += 1;
        } else {
          PlayerAI_dk.nengliangzhaoNum += 1;
        }
        break;
      case "dianciquan":
        this.daoju.getComponent(cc.Sprite).spriteFrame = this.dianciquanSpriteFrame;
        if (this.node.bianzu == Player.bianzu) {
          Player.dianciquanNum += 1;
        } else {
          PlayerAI_dk.dianciquanNum += 1;
        }
        break;
      case "mengyan_gongji":
        this.dengjixiasnhi.active = true;
        this.dengjixiasnhi.getComponent(cc.Label).string = "lv:" + this.dengji;
        this.daoju.getComponent(cc.Sprite).spriteFrame = this.mengyan_gongjiSpriteFrame;
        if (this.node.bianzu == Player.bianzu) {
          Player.mengyan_gongjiNum += 1;
        } else {
          PlayerAI_dk.mengyan_gongjiNum += 1;
        }
        window.mengyan_gongji_dengji = 1;
        break;
      case "mengyan_gongsu":
        this.dengjixiasnhi.active = true;
        this.dengjixiasnhi.getComponent(cc.Label).string = "lv:" + this.dengji;
        this.daoju.getComponent(cc.Sprite).spriteFrame = this.mengyan_gongsuSpriteFrame;
        if (this.node.bianzu == Player.bianzu) {
          Player.mengyan_gongsuNum += 1;
        } else {
          PlayerAI_dk.mengyan_gongsuNum += 1;
        }
        window.mengyan_gongsu_dengji = 1;
        break;
      case "mengyan_shengming":
        this.dengjixiasnhi.active = true;
        this.dengjixiasnhi.getComponent(cc.Label).string = "lv:" + this.dengji;
        this.daoju.getComponent(cc.Sprite).spriteFrame = this.mengyan_shengmingSpriteFrame;
        if (this.node.bianzu == Player.bianzu) {
          Player.mengyan_shengmingNum += 1;
        } else {
          PlayerAI_dk.mengyan_shengmingNum += 1;
        }
        window.mengyan_shengming_dengji = 1;
        break;
      case "mengyan_yisu":
        this.dengjixiasnhi.active = true;
        this.dengjixiasnhi.getComponent(cc.Label).string = "lv:" + this.dengji;
        this.daoju.getComponent(cc.Sprite).spriteFrame = this.mengyan_yisuSpriteFrame;
        if (this.node.bianzu == Player.bianzu) {
          Player.mengyan_yisuNum += 1;
        } else {
          PlayerAI_dk.mengyan_yisuNum += 1;
        }
        window.mengyan_yisu_dengji = 1;
        break;
      case "liemengzhe":
        this.dengjixiasnhi.active = true;
        this.dengjixiasnhi.getComponent(cc.Label).string = "lv:" + this.dengji;
        this.daoju.getComponent(cc.Sprite).spriteFrame = this.liemengzheSpriteFrame;
        if (this.node.bianzu == Player.bianzu) {
          Player.liemengzheNum += 1;
          Game.guiJiage.getComponent(cc.Label).string = "-" + this.duikangguilv[1].price;
        } else {
          PlayerAI_dk.liemengzheNum += 1;
        }
        mengyan_lv = 1;
    }
    this.jiluTime = 1;
  },
  update: function (e) {
    if (this.daojuduikang1) {
      switch (this.node.daoju) {
        case "youxiji":
          this.jiluTime -= e;
          if (this.jiluTime <= 0) {
            this.jiluTime = 1;
            if (this.node.bianzu == Player.bianzu) {
              Player.shandianArr += this.daojuduikang1[13 + this.dengji]["dian+"] * Game.shouyi_Beishu, Game.shandianNum.getComponent(cc.Label).string = Player.shandianArr;
            } else {
              this.node.bianzu == PlayerAI_dk.bianzu && (PlayerAI_dk.shandianArr += 1.5 * this.daojuduikang1[13 + this.dengji]["dian+"]);
            }
            cocoscreator.api_showTip("prefab/game/huodeziyuan", function (e) {
              var i = cc.instantiate(e);
              if (i && i.getChildByName("jinbi") && i.getChildByName("shandian") && i.getChildByName("shandian")) {
                i.getChildByName("jinbi").active = false;
                i.getChildByName("shandian").active = true;
                i.getChildByName("shandian").getComponent(cc.Label).string = " +" + this.daojuduikang1[13 + this.dengji]["dian+"] * Game.shouyi_Beishu;
                i.x = this.node.x;
                i.y = this.node.y;
                Game.props.addChild(i);
                cc.tween(i).to(1.5, {
                  y: i.y + 80,
                  scale: .4
                }).call(function () {
                  i.destroy();
                }).start();
                cc.tween(this.daoju).to(.2, {
                  scale: .8
                }).to(.1, {
                  scale: 1
                }).start();
              }
            }.bind(this));
          }
      }
    }
  }
});
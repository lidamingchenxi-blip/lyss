cc.Class({
  extends: cc.Component,
  properties: {
    chuangxianshi: cc.Node,
    tiaojian: cc.Node,
    miaoshu: cc.Node,
    feiyongJinbi: cc.Node,
    feiyongShandian: cc.Node,
    shengjianniu: cc.Node,
    huise_SpriteFrame: {
      default: null,
      type: cc.SpriteFrame
    },
    minse_SpriteFrame: {
      default: null,
      type: cc.SpriteFrame
    }
  },
  onLoad: function () {
    var e = this;
    this.feiyongJinbi.getComponent(cc.Label).string = Game.daoJuJson[Player.chuangLever + 1].jiagejin;
    this.feiyongShandian.getComponent(cc.Label).string = Game.daoJuJson[Player.chuangLever + 1].jiagedian;
    this.miaoshu.getComponent(cc.Label).string = Game.daoJuJson[Player.chuangLever + 1].miaoshu;
    if (0 == Game.daoJuJson[Player.chuangLever + 1].jiagedian) {
      this.feiyongShandian.active = false;
      this.feiyongJinbi.scale = .8;
    } else {
      this.feiyongShandian.active = true;
      this.feiyongShandian.scale = .6;
      this.feiyongJinbi.scale = .6;
    }
    cc.loader.loadRes("image/game/chuang/chuang" + (Player.chuangLever + 1), cc.SpriteFrame, function (i, a) {
      e.chuangxianshi.getComponent(cc.Sprite).spriteFrame = a;
    });
    this.time = 0;
  },
  but_chuangshengji: function () {
    music.api_audioPlay(MainDate.mp3.jianzhushengji);
    if (Game.daoJuJson[Player.chuangLever + 1].jiagejin > Player.jinbiArr) {
      Game.fangzhitanchuang("金币不够");
    } else if (Game.daoJuJson[Player.chuangLever + 1].jiagedian > Player.shandianArr) {
      Game.fangzhitanchuang("闪电不够");
    } else {
      Game.daoJuJson[Player.chuangLever + 1].tiaojian > Player.mendengji && Game.fangzhitanchuang("请升级你的门");
    }
    if (!(Game.daoJuJson[Player.chuangLever + 1].jiagejin > Player.jinbiArr || Game.daoJuJson[Player.chuangLever + 1].jiagedian > Player.shandianArr || Game.daoJuJson[Player.chuangLever + 1].tiaojian > Player.mendengji || Player.chuangLever >= 9)) {
      Player.shandianArr -= Game.daoJuJson[Player.chuangLever + 1].jiagedian;
      Player.jinbiArr -= Game.daoJuJson[Player.chuangLever + 1].jiagejin;
      Game.jinbiNum.getComponent(cc.Label).string = Player.jinbiArr;
      Game.shandianNum.getComponent(cc.Label).string = Player.shandianArr;
      Player.shengjijiantou_tishi();
      Player.chuangLever++;
      cc.loader.loadRes("image/game/chuang/chuang" + Player.chuangLever + "/shang", cc.SpriteFrame, function (e, i) {
        Player.chuang.getChildByName("shang").getComponent(cc.Sprite).spriteFrame = i;
      });
      cc.loader.loadRes("image/game/chuang/chuang" + Player.chuangLever + "/xia", cc.SpriteFrame, function (e, i) {
        Player.chuang.getChildByName("xia").getComponent(cc.Sprite).spriteFrame = i;
      });
      Game.lingqujinbi.getComponent(cc.Label).string = "金币X" + 60 * Game.daoJuJson[Player.chuangLever].shengchanjinbi;
      Game.fenxianglingqujinbi.getComponent(cc.Label).string = "金币X" + 60 * Game.daoJuJson[Player.chuangLever].shengchanjinbi;
      Player.chuang.getChildByName("shengji").active = true;
      Player.chuang.getChildByName("shengji").getComponent(cc.Animation).play();
      this.node.destroy();
    }
  },
  anniu_huanpifu: function () {
    if (this.node) {
      if (Game.daoJuJson[Player.chuangLever + 1].jiagedian > Player.shandianArr || Game.daoJuJson[Player.chuangLever + 1].jiagejin > Player.jinbiArr || Game.daoJuJson[Player.chuangLever + 1].tiaojian > Player.mendengji) {
        this.shengjianniu.getComponent(cc.Sprite).spriteFrame == this.minse_SpriteFrame && (this.shengjianniu.getComponent(cc.Sprite).spriteFrame = this.huise_SpriteFrame);
      } else {
        this.shengjianniu.getComponent(cc.Sprite).spriteFrame == this.huise_SpriteFrame && (this.shengjianniu.getComponent(cc.Sprite).spriteFrame = this.minse_SpriteFrame);
      }
    }
  },
  but_guanbi: function () {
    music.api_audioPlay(MainDate.mp3.anniu);
    this.node.destroy();
  },
  update: function (e) {
    if (!Game.gameOver) {
      this.time--;
      if (this.time <= 0) {
        this.time = 20, this.anniu_huanpifu();
      }
    }
  },
  start: function () {
    adUtils.executeShowGameAdvertising(true);
  }
});
cc.Class({
  extends: cc.Component,
  properties: {
    shengjijinbi: cc.Node,
    shengjishandian: cc.Node,
    men1: cc.Node,
    men2: cc.Node,
    miaoshu1: cc.Node,
    miaoshu2: cc.Node,
    shengjianniu: cc.Node,
    mingzi1: cc.Node,
    mingzi2: cc.Node,
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
    this.shengjijinbi.getComponent(cc.Label).string = Game.daoJuJson[Player.menjs.mendengji + 10].jiagejin;
    this.shengjishandian.getComponent(cc.Label).string = Game.daoJuJson[Player.menjs.mendengji + 10].jiagedian;
    if (0 == Game.daoJuJson[Player.menjs.mendengji + 10].jiagedian) {
      this.shengjishandian.active = false;
      this.shengjijinbi.scale = .8;
    } else {
      this.shengjishandian.active = true;
      this.shengjijinbi.scale = .6;
      this.shengjishandian.scale = .6;
    }
    this.miaoshu1.getComponent(cc.Label).string = Game.daoJuJson[Player.menjs.mendengji + 10].miaoshu;
    this.miaoshu2.getComponent(cc.Label).string = Game.daoJuJson[Player.menjs.mendengji + 10].miaoshu;
    this.mingzi1.getComponent(cc.Label).string = Game.daoJuJson[Player.menjs.mendengji + 10].name;
    this.mingzi2.getComponent(cc.Label).string = Game.daoJuJson[Player.menjs.mendengji + 10].name;
    cc.loader.loadRes("image/game/men/" + (Player.menjs.mendengji + 1), cc.SpriteFrame, function (i, a) {
      e.men1.getComponent(cc.Sprite).spriteFrame = a;
      e.men2.getComponent(cc.Sprite).spriteFrame = a;
    });
    this.time = 0;
  },
  but_dianjishengji: function () {
    music.api_audioPlay("mp3/jianzhushengji");
    if (Game.daoJuJson[Player.menjs.mendengji + 10].jiagejin > Player.jinbiArr) {
      Game.fangzhitanchuang("金币不够");
    } else {
      Game.daoJuJson[Player.menjs.mendengji + 10].jiagedian > Player.shandianArr && Game.fangzhitanchuang("闪电不够");
    }
    if (!(Game.daoJuJson[Player.menjs.mendengji + 10].jiagejin > Player.jinbiArr || Game.daoJuJson[Player.menjs.mendengji + 10].jiagedian > Player.shandianArr)) {
      Player.menjs.mendengji++;
      Player.mendengji < Player.menjs.mendengji && (Player.mendengji = Player.menjs.mendengji);
      Player.shandianArr -= Game.daoJuJson[Player.menjs.mendengji + 9].jiagedian;
      Player.jinbiArr -= Game.daoJuJson[Player.menjs.mendengji + 9].jiagejin;
      Game.jinbiNum.getComponent(cc.Label).string = Player.jinbiArr;
      Game.shandianNum.getComponent(cc.Label).string = Player.shandianArr;
      Player.menjs.phMax = Game.daoJuJson[Player.menjs.mendengji + 9].HP;
      Player.menjs.ph = Game.daoJuJson[Player.menjs.mendengji + 9].HP;
      Player.shengjijiantou_tishi();
      Player.menjs.shengji.active = true;
      Player.menjs.shengji.getComponent(cc.Animation).play();
      cc.loader.loadRes("image/game/men/" + Player.menjs.mendengji, cc.SpriteFrame, function (e, i) {
        Player.menjs.node.getComponent(cc.Sprite).spriteFrame = i;
      });
      this.node.destroy();
    }
  },
  but_ADshengji: function () {
    var e = this;
    music.api_audioPlay("mp3/anniu");
    adUtils.executeShowVideo(function () {
      Player.menjs.mendengji++;
      Player.mendengji < Player.menjs.mendengji && (Player.mendengji = Player.menjs.mendengji);
      Player.menjs.phMax = Game.daoJuJson[Player.menjs.mendengji + 9].HP;
      Player.menjs.ph = Game.daoJuJson[Player.menjs.mendengji + 9].HP;
      cc.loader.loadRes("image/game/men/" + Player.menjs.mendengji, cc.SpriteFrame, function (e, i) {
        Player.menjs.node.getComponent(cc.Sprite).spriteFrame = i;
      });
      Player.menjs.shengji.active = true;
      Player.menjs.shengji.getComponent(cc.Animation).play();
      e.node.destroy();
    });
  },
  but_guanbi: function () {
    music.api_audioPlay("mp3/anniu");
    this.node.destroy();
  },
  anniu_huanpifu: function () {
    if (Game.daoJuJson[Player.menjs.mendengji + 10].jiagejin > Player.jinbiArr || Game.daoJuJson[Player.menjs.mendengji + 10].jiagedian > Player.shandianArr) {
      this.shengjianniu.getComponent(cc.Sprite).spriteFrame == this.minse_SpriteFrame && (this.shengjianniu.getComponent(cc.Sprite).spriteFrame = this.huise_SpriteFrame);
    } else {
      this.shengjianniu.getComponent(cc.Sprite).spriteFrame == this.huise_SpriteFrame && (this.shengjianniu.getComponent(cc.Sprite).spriteFrame = this.minse_SpriteFrame);
    }
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
cc.Class({
  extends: cc.Component,
  properties: {
    shengjikuang: cc.Node,
    kuangshi: cc.Node,
    miaoshu: cc.Node,
    feiyongShandian: cc.Node,
    chaichuhuode: cc.Node,
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
    this.chaichuhuode.getComponent(cc.Label).string = Math.floor(Game.daoJuJson[Game.kuangshixuanze.kuangdengji + 55].jiagedian / 2);
    if (Game.kuangshixuanze.kuangdengji >= 4) {
      this.shengjikuang.active = false;
    } else {
      cc.loader.loadRes("image/game/jianzao/kuang/kuang" + (Game.kuangshixuanze.kuangdengji + 1), cc.SpriteFrame, function (i, a) {
        e.kuangshi.getComponent(cc.Sprite).spriteFrame = a;
      });
      this.miaoshu.getComponent(cc.Label).string = Game.daoJuJson[Game.kuangshixuanze.kuangdengji + 56].miaoshu;
      this.feiyongShandian.getComponent(cc.Label).string = Game.daoJuJson[Game.kuangshixuanze.kuangdengji + 56].jiagedian;
      this.time = 0;
    }
  },
  but_shengji: function () {
    music.api_audioPlay("mp3/jianzhushengji");
    if (Game.daoJuJson[Game.kuangshixuanze.kuangdengji + 56].jiagedian > Player.shandianArr) {
      Game.fangzhitanchuang("闪电不够");
    } else if (!(Game.kuangshixuanze.kuangdengji >= 4)) {
      Player.shandianArr -= Game.daoJuJson[Game.kuangshixuanze.kuangdengji + 56].jiagedian, Game.jinbiNum.getComponent(cc.Label).string = Player.jinbiArr, Game.shandianNum.getComponent(cc.Label).string = Player.shandianArr, Player.shengjijiantou_tishi(), Game.kuangshixuanze.kuangdengji++, cc.loader.loadRes("image/game/jianzao/kuang/kuang" + Game.kuangshixuanze.kuangdengji, cc.SpriteFrame, function (e, i) {
        Game.kuangshixuanze.kuang.getComponent(cc.Sprite).spriteFrame = i;
      }), Game.kuangshixuanze.shengji.active = true, Game.kuangshixuanze.shengji.getComponent(cc.Animation).play(), this.node.destroy();
    }
  },
  but_chachu: function () {
    music.api_audioPlay("mp3/chaijianzhu");
    Player.fk_fangzhitishi(Game.kuangshixuanze.node.posFK, true);
    Player.jinbiArr += Math.floor(Game.daoJuJson[Game.kuangshixuanze.kuangdengji + 55].jiagejin / 2);
    Player.shandianArr += Math.floor(Game.daoJuJson[Game.kuangshixuanze.kuangdengji + 55].jiagedian / 2);
    Game.jinbiNum.getComponent(cc.Label).string = Player.jinbiArr;
    Game.shandianNum.getComponent(cc.Label).string = Player.shandianArr;
    Player.shengjijiantou_tishi();
    Game.kuangshixuanze.node.destroy();
    this.node.destroy();
  },
  but_guanbi: function () {
    music.api_audioPlay("mp3/anniu");
    this.node.destroy();
  },
  anniu_huanpifu: function () {
    if (Game.daoJuJson[Game.kuangshixuanze.kuangdengji + 56].jiagedian > Player.shandianArr) {
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
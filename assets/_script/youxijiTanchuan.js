cc.Class({
  extends: cc.Component,
  properties: {
    youxijixianshi: cc.Node,
    shengjikuang: cc.Node,
    miaoshu: cc.Node,
    feiyongJinbi: cc.Node,
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
    this.chaichuhuode.getComponent(cc.Label).string = Math.floor(Game.daoJuJson[Game.xuanzhongYouxiji.dengji + 21].jiagejin / 2);
    if (Game.xuanzhongYouxiji.dengji >= 9) {
      this.shengjikuang.active = false;
    } else {
      cc.loader.loadRes("image/game/jianzao/youxiji/" + (Game.xuanzhongYouxiji.dengji + 1), cc.SpriteFrame, function (i, a) {
        e.youxijixianshi.getComponent(cc.Sprite).spriteFrame = a;
      });
      this.miaoshu.getComponent(cc.Label).string = Game.daoJuJson[Game.xuanzhongYouxiji.dengji + 22].miaoshu;
      this.feiyongJinbi.getComponent(cc.Label).string = Game.daoJuJson[Game.xuanzhongYouxiji.dengji + 22].jiagejin;
      this.feiyongShandian.getComponent(cc.Label).string = Game.daoJuJson[Game.xuanzhongYouxiji.dengji + 22].jiagedian;
      if (0 == Game.daoJuJson[Game.xuanzhongYouxiji.dengji + 22].jiagedian) {
        this.feiyongShandian.active = false, this.feiyongJinbi.scale = .8;
      } else {
        this.feiyongShandian.active = true, this.feiyongShandian.scale = .6, this.feiyongJinbi.scale = .6;
      }
      this.time = 0;
    }
  },
  but_shengji: function () {
    music.api_audioPlay("mp3/jianzhushengji");
    if (Game.daoJuJson[Game.xuanzhongYouxiji.dengji + 22].jiagejin > Player.jinbiArr) {
      Game.fangzhitanchuang("金币不够");
    } else {
      Game.daoJuJson[Game.xuanzhongYouxiji.dengji + 22].jiagedian > Player.shandianArr && Game.fangzhitanchuang("闪电不够");
    }
    if (!(Game.daoJuJson[Game.xuanzhongYouxiji.dengji + 22].jiagejin > Player.jinbiArr || Game.daoJuJson[Game.xuanzhongYouxiji.dengji + 22].jiagedian > Player.shandianArr || Game.xuanzhongYouxiji.dengji >= 9)) {
      Player.shandianArr -= Game.daoJuJson[Game.xuanzhongYouxiji.dengji + 22].jiagedian;
      Player.jinbiArr -= Game.daoJuJson[Game.xuanzhongYouxiji.dengji + 22].jiagejin;
      Game.jinbiNum.getComponent(cc.Label).string = Player.jinbiArr;
      Game.shandianNum.getComponent(cc.Label).string = Player.shandianArr;
      Player.shengjijiantou_tishi();
      Game.xuanzhongYouxiji.dengji++;
      cc.loader.loadRes("image/game/jianzao/youxiji/" + Game.xuanzhongYouxiji.dengji, cc.SpriteFrame, function (e, i) {
        Game.xuanzhongYouxiji.youxiji.getComponent(cc.Sprite).spriteFrame = i;
      });
      Game.xuanzhongYouxiji.shengji.active = true;
      Game.xuanzhongYouxiji.shengji.getComponent(cc.Animation).play();
      this.node.destroy();
    }
  },
  but_chanchu: function () {
    music.api_audioPlay("mp3/chaijianzhu");
    Player.fk_fangzhitishi(Game.xuanzhongYouxiji.node.posFK, true);
    Player.jinbiArr += Math.floor(Game.daoJuJson[Game.xuanzhongYouxiji.dengji + 21].jiagejin / 2);
    Player.shandianArr += Math.floor(Game.daoJuJson[Game.xuanzhongYouxiji.dengji + 21].jiagedian / 2);
    Game.jinbiNum.getComponent(cc.Label).string = Player.jinbiArr;
    Game.shandianNum.getComponent(cc.Label).string = Player.shandianArr;
    Player.shengjijiantou_tishi();
    Game.xuanzhongYouxiji.node.destroy();
    this.node.destroy();
  },
  but_guanbi: function () {
    music.api_audioPlay("mp3/anniu");
    this.node.destroy();
  },
  anniu_huanpifu: function () {
    if (Game.daoJuJson[Game.xuanzhongYouxiji.dengji + 22].jiagejin > Player.jinbiArr || Game.daoJuJson[Game.xuanzhongYouxiji.dengji + 22].jiagedian > Player.shandianArr) {
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
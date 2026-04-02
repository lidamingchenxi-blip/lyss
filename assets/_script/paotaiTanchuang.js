cc.Class({
  extends: cc.Component,
  properties: {
    paotai: cc.Node,
    paotai_3: cc.Node,
    paotai_5: cc.Node,
    paotai_10: cc.Node,
    guang: cc.Node,
    guang_3: cc.Node,
    guang_5: cc.Node,
    guang_10: cc.Node,
    xia: cc.Node,
    xia_3: cc.Node,
    xia_5: cc.Node,
    xia_10: cc.Node,
    miaoshu: cc.Node,
    miaoshu_3: cc.Node,
    miaoshu_5: cc.Node,
    miaoshu_10: cc.Node,
    feiyongJinbi: cc.Node,
    feiyongJinbi_3: cc.Node,
    feiyongJinbi_5: cc.Node,
    feiyongJinbi_10: cc.Node,
    feiyongShandian: cc.Node,
    feiyongShandian_3: cc.Node,
    feiyongShandian_5: cc.Node,
    feiyongShandian_10: cc.Node,
    chaichujinbi: cc.Node,
    chaichudian: cc.Node,
    shengjidi: cc.Node,
    shengjidi_3: cc.Node,
    shengjidi_5: cc.Node,
    shengjidi_10: cc.Node,
    shengjianniu: cc.Node,
    shengjianniu_3: cc.Node,
    shengjianniu_5: cc.Node,
    shengjianniu_10: cc.Node,
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
    this.chaichujinbi.getComponent(cc.Label).string = Math.floor(Game.daoJuJson[Game.xuanzhongPaotai.dengji + 31].jiagejin / 2);
    this.chaichudian.getComponent(cc.Label).string = Math.floor(Game.daoJuJson[Game.xuanzhongPaotai.dengji + 31].jiagedian / 2);
    if (0 == Game.daoJuJson[Game.xuanzhongPaotai.dengji + 31].jiagedian) {
      this.chaichudian.active = false;
      this.chaichujinbi.scale = .8;
    } else {
      this.chaichudian.active = true;
      this.chaichudian.scale = .6;
      this.chaichujinbi.scale = .6;
    }
    this.time = 0;
    if (Game.xuanzhongPaotai.dengji >= 13) {
      this.shengjidi.active = false;
      this.shengjidi_3.active = false;
      this.shengjidi_5.active = false;
      return void (this.shengjidi_10.active = false);
    }
    cc.loader.loadRes("image/game/jianzao/paotai/" + (Game.xuanzhongPaotai.dengji + 1) + "/shang", cc.SpriteFrame, function (i, a) {
      e.paotai.getComponent(cc.Sprite).spriteFrame = a;
    });
    cc.loader.loadRes("image/game/jianzao/paotai/" + (Game.xuanzhongPaotai.dengji + 1) + "/xia", cc.SpriteFrame, function (i, a) {
      e.xia.getComponent(cc.Sprite).spriteFrame = a;
    });
    cc.loader.loadRes("image/game/jianzao/paotai/" + (Game.xuanzhongPaotai.dengji + 1) + "/guang", cc.SpriteFrame, function (i, a) {
      e.guang.getComponent(cc.Sprite).spriteFrame = a;
    });
    this.miaoshu.getComponent(cc.Label).string = Game.daoJuJson[Game.xuanzhongPaotai.dengji + 31].miaoshu;
    this.feiyongJinbi.getComponent(cc.Label).string = Game.daoJuJson[Game.xuanzhongPaotai.dengji + 31].jiagejin;
    this.feiyongShandian.getComponent(cc.Label).string = Game.daoJuJson[Game.xuanzhongPaotai.dengji + 31].jiagedian;
    if (0 == Game.daoJuJson[Game.xuanzhongPaotai.dengji + 31].jiagedian) {
      this.feiyongShandian.active = false;
    } else {
      this.feiyongShandian.active = true;
    }
    if (8 != MainDate.GameType) {
      this.shengjidi_3.active = false;
      this.shengjidi_5.active = false;
      return void (this.shengjidi_10.active = false);
    }
    if (Game.xuanzhongPaotai.dengji >= 10) {
      this.shengjidi_3.active = false;
      this.shengjidi_5.active = false;
      return void (this.shengjidi_10.active = false);
    }
    cc.loader.loadRes("image/game/jianzao/paotai/" + (Game.xuanzhongPaotai.dengji + 3) + "/shang", cc.SpriteFrame, function (i, a) {
      e.paotai_3.getComponent(cc.Sprite).spriteFrame = a;
    });
    cc.loader.loadRes("image/game/jianzao/paotai/" + (Game.xuanzhongPaotai.dengji + 3) + "/xia", cc.SpriteFrame, function (i, a) {
      e.xia_3.getComponent(cc.Sprite).spriteFrame = a;
    });
    cc.loader.loadRes("image/game/jianzao/paotai/" + (Game.xuanzhongPaotai.dengji + 3) + "/guang", cc.SpriteFrame, function (i, a) {
      e.guang_3.getComponent(cc.Sprite).spriteFrame = a;
    });
    var i = Game.daoJuJson[Game.xuanzhongPaotai.dengji + 33].miaoshu;
    this.miaoshu_3.getComponent(cc.Label).string = i;
    var a = Game.daoJuJson[Game.xuanzhongPaotai.dengji + 31].jiagejin + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 32].jiagejin + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 33].jiagejin;
    this.feiyongJinbi_3.getComponent(cc.Label).string = a;
    var n = Game.daoJuJson[Game.xuanzhongPaotai.dengji + 31].jiagedian + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 32].jiagedian + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 33].jiagedian;
    this.feiyongShandian_3.getComponent(cc.Label).string = n;
    this.feiyongShandian_3.active = 0 != n;
    if (Game.xuanzhongPaotai.dengji >= 8) {
      this.shengjidi_5.active = false;
      return void (this.shengjidi_10.active = false);
    }
    cc.loader.loadRes("image/game/jianzao/paotai/" + (Game.xuanzhongPaotai.dengji + 5) + "/shang", cc.SpriteFrame, function (i, a) {
      e.paotai_5.getComponent(cc.Sprite).spriteFrame = a;
    });
    cc.loader.loadRes("image/game/jianzao/paotai/" + (Game.xuanzhongPaotai.dengji + 5) + "/xia", cc.SpriteFrame, function (i, a) {
      e.xia_5.getComponent(cc.Sprite).spriteFrame = a;
    });
    cc.loader.loadRes("image/game/jianzao/paotai/" + (Game.xuanzhongPaotai.dengji + 5) + "/guang", cc.SpriteFrame, function (i, a) {
      e.guang_5.getComponent(cc.Sprite).spriteFrame = a;
    });
    var t = Game.daoJuJson[Game.xuanzhongPaotai.dengji + 35].miaoshu;
    this.miaoshu_5.getComponent(cc.Label).string = t;
    var o = Game.daoJuJson[Game.xuanzhongPaotai.dengji + 31].jiagejin + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 32].jiagejin + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 33].jiagejin + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 34].jiagejin + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 35].jiagejin;
    this.feiyongJinbi_5.getComponent(cc.Label).string = o;
    var s = Game.daoJuJson[Game.xuanzhongPaotai.dengji + 31].jiagedian + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 32].jiagedian + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 33].jiagedian + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 34].jiagedian + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 35].jiagedian;
    this.feiyongShandian_5.getComponent(cc.Label).string = s;
    this.feiyongShandian_5.active = 0 != s;
    if (Game.xuanzhongPaotai.dengji >= 3) {
      this.shengjidi_10.active = false;
    } else {
      cc.loader.loadRes("image/game/jianzao/paotai/" + (Game.xuanzhongPaotai.dengji + 10) + "/shang", cc.SpriteFrame, function (i, a) {
        e.paotai_10.getComponent(cc.Sprite).spriteFrame = a;
      });
      cc.loader.loadRes("image/game/jianzao/paotai/" + (Game.xuanzhongPaotai.dengji + 10) + "/xia", cc.SpriteFrame, function (i, a) {
        e.xia_10.getComponent(cc.Sprite).spriteFrame = a;
      });
      cc.loader.loadRes("image/game/jianzao/paotai/" + (Game.xuanzhongPaotai.dengji + 10) + "/guang", cc.SpriteFrame, function (i, a) {
        e.guang_10.getComponent(cc.Sprite).spriteFrame = a;
      });
      var c = Game.daoJuJson[Game.xuanzhongPaotai.dengji + 40].miaoshu;
      this.miaoshu_10.getComponent(cc.Label).string = c;
      var r = Game.daoJuJson[Game.xuanzhongPaotai.dengji + 31].jiagejin + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 32].jiagejin + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 33].jiagejin + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 34].jiagejin + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 35].jiagejin + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 36].jiagejin + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 37].jiagejin + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 38].jiagejin + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 39].jiagejin + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 40].jiagejin;
      this.feiyongJinbi_10.getComponent(cc.Label).string = r;
      var u = Game.daoJuJson[Game.xuanzhongPaotai.dengji + 31].jiagedian + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 32].jiagedian + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 33].jiagedian + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 34].jiagedian + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 35].jiagedian + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 36].jiagedian + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 37].jiagedian + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 38].jiagedian + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 39].jiagedian + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 40].jiagedian;
      this.feiyongShandian_10.getComponent(cc.Label).string = u;
      this.feiyongShandian_10.active = 0 != u;
    }
  },
  but_shengji: function () {
    music.api_audioPlay("mp3/jianzhushengji");
    if (Game.daoJuJson[Game.xuanzhongPaotai.dengji + 31].jiagejin > Player.jinbiArr) {
      Game.fangzhitanchuang("金币不够");
    } else {
      Game.daoJuJson[Game.xuanzhongPaotai.dengji + 31].jiagedian > Player.shandianArr && Game.fangzhitanchuang("闪电不够");
    }
    if (!(Game.daoJuJson[Game.xuanzhongPaotai.dengji + 31].jiagejin > Player.jinbiArr || Game.daoJuJson[Game.xuanzhongPaotai.dengji + 31].jiagedian > Player.shandianArr)) {
      Player.jinbiArr -= Game.daoJuJson[Game.xuanzhongPaotai.dengji + 31].jiagejin;
      Player.shandianArr -= Game.daoJuJson[Game.xuanzhongPaotai.dengji + 31].jiagedian;
      Game.jinbiNum.getComponent(cc.Label).string = Player.jinbiArr;
      Game.shandianNum.getComponent(cc.Label).string = Player.shandianArr;
      Player.shengjijiantou_tishi();
      Game.xuanzhongPaotai.gongjili = Game.daoJuJson[Game.xuanzhongPaotai.dengji + 31].gongjili;
      Game.xuanzhongPaotai.dengji++;
      cc.loader.loadRes("image/game/jianzao/paotai/" + Game.xuanzhongPaotai.dengji + "/shang", cc.SpriteFrame, function (e, i) {
        Game.xuanzhongPaotai.paotai.getComponent(cc.Sprite).spriteFrame = i;
      });
      cc.loader.loadRes("image/game/jianzao/paotai/" + Game.xuanzhongPaotai.dengji + "/xia", cc.SpriteFrame, function (e, i) {
        Game.xuanzhongPaotai.xia.getComponent(cc.Sprite).spriteFrame = i;
      });
      cc.loader.loadRes("image/game/jianzao/paotai/" + Game.xuanzhongPaotai.dengji + "/guang", cc.SpriteFrame, function (e, i) {
        Game.xuanzhongPaotai.guang.getComponent(cc.Sprite).spriteFrame = i;
      });
      Game.xuanzhongPaotai.shengji.active = true;
      Game.xuanzhongPaotai.shengji.getComponent(cc.Animation).play();
      this.node.destroy();
    }
  },
  but_shengji_3: function () {
    var e = Game.daoJuJson[Game.xuanzhongPaotai.dengji + 31].jiagejin + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 32].jiagejin + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 33].jiagejin;
    var i = Game.daoJuJson[Game.xuanzhongPaotai.dengji + 31].jiagedian + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 32].jiagedian + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 33].jiagedian;
    music.api_audioPlay("mp3/jianzhushengji");
    if (e > Player.jinbiArr) {
      Game.fangzhitanchuang("金币不够");
    } else {
      i > Player.shandianArr && Game.fangzhitanchuang("闪电不够");
    }
    if (!(e > Player.jinbiArr || i > Player.shandianArr)) {
      Player.jinbiArr -= e;
      Player.shandianArr -= i;
      Game.jinbiNum.getComponent(cc.Label).string = Player.jinbiArr;
      Game.shandianNum.getComponent(cc.Label).string = Player.shandianArr;
      Player.shengjijiantou_tishi();
      Game.xuanzhongPaotai.gongjili = Game.daoJuJson[Game.xuanzhongPaotai.dengji + 33].gongjili;
      Game.xuanzhongPaotai.dengji += 3;
      cc.loader.loadRes("image/game/jianzao/paotai/" + Game.xuanzhongPaotai.dengji + "/shang", cc.SpriteFrame, function (e, i) {
        Game.xuanzhongPaotai.paotai.getComponent(cc.Sprite).spriteFrame = i;
      });
      cc.loader.loadRes("image/game/jianzao/paotai/" + Game.xuanzhongPaotai.dengji + "/xia", cc.SpriteFrame, function (e, i) {
        Game.xuanzhongPaotai.xia.getComponent(cc.Sprite).spriteFrame = i;
      });
      cc.loader.loadRes("image/game/jianzao/paotai/" + Game.xuanzhongPaotai.dengji + "/guang", cc.SpriteFrame, function (e, i) {
        Game.xuanzhongPaotai.guang.getComponent(cc.Sprite).spriteFrame = i;
      });
      Game.xuanzhongPaotai.shengji.active = true;
      Game.xuanzhongPaotai.shengji.getComponent(cc.Animation).play();
      this.node.destroy();
    }
  },
  but_shengji_5: function () {
    var e = Game.daoJuJson[Game.xuanzhongPaotai.dengji + 31].jiagejin + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 32].jiagejin + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 33].jiagejin + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 34].jiagejin + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 35].jiagejin;
    var i = Game.daoJuJson[Game.xuanzhongPaotai.dengji + 31].jiagedian + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 32].jiagedian + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 33].jiagedian + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 34].jiagedian + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 35].jiagedian;
    music.api_audioPlay("mp3/jianzhushengji");
    if (e > Player.jinbiArr) {
      Game.fangzhitanchuang("金币不够");
    } else {
      i > Player.shandianArr && Game.fangzhitanchuang("闪电不够");
    }
    if (!(e > Player.jinbiArr || i > Player.shandianArr)) {
      Player.jinbiArr -= e;
      Player.shandianArr -= i;
      Game.jinbiNum.getComponent(cc.Label).string = Player.jinbiArr;
      Game.shandianNum.getComponent(cc.Label).string = Player.shandianArr;
      Player.shengjijiantou_tishi();
      Game.xuanzhongPaotai.gongjili = Game.daoJuJson[Game.xuanzhongPaotai.dengji + 35].gongjili;
      Game.xuanzhongPaotai.dengji += 5;
      cc.loader.loadRes("image/game/jianzao/paotai/" + Game.xuanzhongPaotai.dengji + "/shang", cc.SpriteFrame, function (e, i) {
        Game.xuanzhongPaotai.paotai.getComponent(cc.Sprite).spriteFrame = i;
      });
      cc.loader.loadRes("image/game/jianzao/paotai/" + Game.xuanzhongPaotai.dengji + "/xia", cc.SpriteFrame, function (e, i) {
        Game.xuanzhongPaotai.xia.getComponent(cc.Sprite).spriteFrame = i;
      });
      cc.loader.loadRes("image/game/jianzao/paotai/" + Game.xuanzhongPaotai.dengji + "/guang", cc.SpriteFrame, function (e, i) {
        Game.xuanzhongPaotai.guang.getComponent(cc.Sprite).spriteFrame = i;
      });
      Game.xuanzhongPaotai.shengji.active = true;
      Game.xuanzhongPaotai.shengji.getComponent(cc.Animation).play();
      this.node.destroy();
    }
  },
  but_shengji_10: function () {
    var e = Game.daoJuJson[Game.xuanzhongPaotai.dengji + 31].jiagejin + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 32].jiagejin + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 33].jiagejin + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 34].jiagejin + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 35].jiagejin + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 36].jiagejin + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 37].jiagejin + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 38].jiagejin + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 39].jiagejin + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 40].jiagejin;
    var i = Game.daoJuJson[Game.xuanzhongPaotai.dengji + 31].jiagedian + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 32].jiagedian + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 33].jiagedian + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 34].jiagedian + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 35].jiagedian + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 36].jiagedian + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 37].jiagedian + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 38].jiagedian + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 39].jiagedian + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 40].jiagedian;
    music.api_audioPlay("mp3/jianzhushengji");
    if (e > Player.jinbiArr) {
      Game.fangzhitanchuang("金币不够");
    } else {
      i > Player.shandianArr && Game.fangzhitanchuang("闪电不够");
    }
    if (!(e > Player.jinbiArr || i > Player.shandianArr)) {
      Player.jinbiArr -= e;
      Player.shandianArr -= i;
      Game.jinbiNum.getComponent(cc.Label).string = Player.jinbiArr;
      Game.shandianNum.getComponent(cc.Label).string = Player.shandianArr;
      Player.shengjijiantou_tishi();
      Game.xuanzhongPaotai.gongjili = Game.daoJuJson[Game.xuanzhongPaotai.dengji + 40].gongjili;
      Game.xuanzhongPaotai.dengji += 10;
      cc.loader.loadRes("image/game/jianzao/paotai/" + Game.xuanzhongPaotai.dengji + "/shang", cc.SpriteFrame, function (e, i) {
        Game.xuanzhongPaotai.paotai.getComponent(cc.Sprite).spriteFrame = i;
      });
      cc.loader.loadRes("image/game/jianzao/paotai/" + Game.xuanzhongPaotai.dengji + "/xia", cc.SpriteFrame, function (e, i) {
        Game.xuanzhongPaotai.xia.getComponent(cc.Sprite).spriteFrame = i;
      });
      cc.loader.loadRes("image/game/jianzao/paotai/" + Game.xuanzhongPaotai.dengji + "/guang", cc.SpriteFrame, function (e, i) {
        Game.xuanzhongPaotai.guang.getComponent(cc.Sprite).spriteFrame = i;
      });
      Game.xuanzhongPaotai.shengji.active = true;
      Game.xuanzhongPaotai.shengji.getComponent(cc.Animation).play();
      this.node.destroy();
    }
  },
  but_chanchu: function () {
    music.api_audioPlay("mp3/chaijianzhu");
    Player.fk_fangzhitishi(Game.xuanzhongPaotai.node.posFK, true);
    Player.jinbiArr += Math.floor(Game.daoJuJson[Game.xuanzhongPaotai.dengji + 31].jiagejin / 2);
    Player.shandianArr += Math.floor(Game.daoJuJson[Game.xuanzhongPaotai.dengji + 31].jiagedian / 2);
    Game.jinbiNum.getComponent(cc.Label).string = Player.jinbiArr;
    Game.shandianNum.getComponent(cc.Label).string = Player.shandianArr;
    Player.shengjijiantou_tishi();
    Game.xuanzhongPaotai.node.destroy();
    this.node.destroy();
  },
  but_guanbi: function () {
    music.api_audioPlay("mp3/anniu");
    this.node.destroy();
  },
  anniu_huanpifu: function () {
    if (!(Game.xuanzhongPaotai.dengji >= 13 || (Game.daoJuJson[Game.xuanzhongPaotai.dengji + 31].jiagejin > Player.jinbiArr || Game.daoJuJson[Game.xuanzhongPaotai.dengji + 31].jiagedian > Player.shandianArr ? this.shengjianniu.getComponent(cc.Sprite).spriteFrame == this.minse_SpriteFrame && (this.shengjianniu.getComponent(cc.Sprite).spriteFrame = this.huise_SpriteFrame) : this.shengjianniu.getComponent(cc.Sprite).spriteFrame == this.huise_SpriteFrame && (this.shengjianniu.getComponent(cc.Sprite).spriteFrame = this.minse_SpriteFrame), Game.xuanzhongPaotai.dengji >= 10))) {
      var e = Game.daoJuJson[Game.xuanzhongPaotai.dengji + 31].jiagejin + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 32].jiagejin + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 33].jiagejin;
      var i = Game.daoJuJson[Game.xuanzhongPaotai.dengji + 31].jiagedian + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 32].jiagedian + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 33].jiagedian;
      if (e > Player.jinbiArr || i > Player.shandianArr) {
        this.shengjianniu_3.getComponent(cc.Sprite).spriteFrame == this.minse_SpriteFrame && (this.shengjianniu_3.getComponent(cc.Sprite).spriteFrame = this.huise_SpriteFrame);
      } else {
        this.shengjianniu_3.getComponent(cc.Sprite).spriteFrame == this.huise_SpriteFrame && (this.shengjianniu_3.getComponent(cc.Sprite).spriteFrame = this.minse_SpriteFrame);
      }
      if (!(Game.xuanzhongPaotai.dengji >= 8)) {
        var a = Game.daoJuJson[Game.xuanzhongPaotai.dengji + 31].jiagejin + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 32].jiagejin + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 33].jiagejin + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 34].jiagejin + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 35].jiagejin;
        var n = Game.daoJuJson[Game.xuanzhongPaotai.dengji + 31].jiagedian + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 32].jiagedian + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 33].jiagedian + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 34].jiagedian + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 35].jiagedian;
        if (a > Player.jinbiArr || n > Player.shandianArr) {
          this.shengjianniu_5.getComponent(cc.Sprite).spriteFrame == this.minse_SpriteFrame && (this.shengjianniu_5.getComponent(cc.Sprite).spriteFrame = this.huise_SpriteFrame);
        } else {
          this.shengjianniu_5.getComponent(cc.Sprite).spriteFrame == this.huise_SpriteFrame && (this.shengjianniu_5.getComponent(cc.Sprite).spriteFrame = this.minse_SpriteFrame);
        }
        if (!(Game.xuanzhongPaotai.dengji >= 3)) {
          var t = Game.daoJuJson[Game.xuanzhongPaotai.dengji + 31].jiagejin + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 32].jiagejin + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 33].jiagejin + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 34].jiagejin + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 35].jiagejin + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 36].jiagejin + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 37].jiagejin + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 38].jiagejin + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 39].jiagejin + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 40].jiagejin;
          var o = Game.daoJuJson[Game.xuanzhongPaotai.dengji + 31].jiagedian + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 32].jiagedian + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 33].jiagedian + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 34].jiagedian + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 35].jiagedian + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 36].jiagedian + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 37].jiagedian + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 38].jiagedian + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 39].jiagedian + Game.daoJuJson[Game.xuanzhongPaotai.dengji + 40].jiagedian;
          if (t > Player.jinbiArr || o > Player.shandianArr) {
            this.shengjianniu_10.getComponent(cc.Sprite).spriteFrame == this.minse_SpriteFrame && (this.shengjianniu_10.getComponent(cc.Sprite).spriteFrame = this.huise_SpriteFrame);
          } else {
            this.shengjianniu_10.getComponent(cc.Sprite).spriteFrame == this.huise_SpriteFrame && (this.shengjianniu_10.getComponent(cc.Sprite).spriteFrame = this.minse_SpriteFrame);
          }
        }
      }
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
cc.Class({
  extends: cc.Component,
  properties: {
    paotai: cc.Node,
    paotai_xia: cc.Node,
    paotai_guang: cc.Node,
    paotai_shenzi: cc.Node,
    liemengzhe: cc.Node,
    liemengzheLab: cc.Node,
    mengyan_gongji: cc.Node,
    mengyan_gongjiLab: cc.Node,
    mengyan_gongsu: cc.Node,
    mengyan_gongsuLab: cc.Node,
    mengyan_shengming: cc.Node,
    mengyan_shengmingLab: cc.Node,
    mengyan_yisu: cc.Node,
    mengyan_yisuLab: cc.Node,
    youxiji: cc.Node,
    miaoshu: cc.Node,
    shengjijin: cc.Node,
    shengjidian: cc.Node,
    chanchujin: cc.Node,
    chanchudian: cc.Node,
    shangkuangdi: cc.Node,
    shengjiBut: cc.Node,
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
    cc.loader.loadRes("json/daojuduikang1", function (e, i) {
      this.daojuduikang = i.json;
      cc.loader.loadRes("json/duikangguilv", function (e, i) {
        this.duikangguilv = i.json;
        this.newGame();
      }.bind(this));
    }.bind(this));
  },
  newGame: function () {
    var e = this;
    switch (Game.chaichudaojuType) {
      case "paotai":
        this.paotai.active = true;
        this.shengjiJS = Game.chaichudaoju.getComponent("paotai_dk");
        this.dengji = this.shengjiJS.dengji;
        this.chanchujin.getComponent(cc.Label).string = this.daojuduikang[this.dengji].jiagejin / 2;
        if (this.daojuduikang[this.dengji].jiagedian > 0) {
          this.chanchudian.getComponent(cc.Label).string = this.daojuduikang[this.dengji].jiagedian / 2;
          this.chanchudian.scale = .6;
          this.chanchujin.scale = .6;
        } else {
          this.chanchudian.active = false;
          this.chanchujin.scale = .8;
        }
        this.chanchujinNum = this.daojuduikang[this.dengji].jiagejin / 2;
        this.chanchudianNum = this.daojuduikang[this.dengji].jiagedian / 2;
        if (this.dengji >= 10) {
          this.shangkuangdi.active = false;
        } else {
          this.miaoshu.getComponent(cc.Label).string = this.daojuduikang[this.dengji + 1].miaoshu;
          this.shengjijin.getComponent(cc.Label).string = this.daojuduikang[this.dengji + 1].jiagejin;
          this.shengjijinNum = this.daojuduikang[this.dengji + 1].jiagejin;
          this.shengjidianNum = this.daojuduikang[this.dengji + 1].jiagedian;
          if (this.daojuduikang[this.dengji + 1].jiagedian > 0) {
            this.shengjidian.getComponent(cc.Label).string = this.daojuduikang[this.dengji + 1].jiagedian, this.shengjidian.scale = .6, this.shengjijin.scale = .6;
          } else {
            this.shengjidian.active = false, this.shengjijin.scale = .8;
          }
          cc.loader.loadRes("image/game/jianzao/paotai/" + (this.dengji + 1) + "/shang", cc.SpriteFrame, function (i, a) {
            e.paotai_shenzi.getComponent(cc.Sprite).spriteFrame = a;
          });
          cc.loader.loadRes("image/game/jianzao/paotai/" + (this.dengji + 1) + "/xia", cc.SpriteFrame, function (i, a) {
            e.paotai_xia.getComponent(cc.Sprite).spriteFrame = a;
          });
          cc.loader.loadRes("image/game/jianzao/paotai/" + (this.dengji + 1) + "/guang", cc.SpriteFrame, function (i, a) {
            e.paotai_guang.getComponent(cc.Sprite).spriteFrame = a;
          });
        }
        break;
      case "youxiji":
        this.youxiji.active = true;
        this.shengjiJS = Game.chaichudaoju.getComponent("daoju_dk");
        this.dengji = this.shengjiJS.dengji;
        this.chanchujin.getComponent(cc.Label).string = this.daojuduikang[this.dengji + 13].jiagejin / 2;
        if (this.daojuduikang[this.dengji].jiagedian > 0) {
          this.chanchudian.getComponent(cc.Label).string = this.daojuduikang[this.dengji + 13].jiagedian / 2;
        } else {
          this.chanchudian.active = false;
        }
        this.chanchujinNum = this.daojuduikang[this.dengji + 13].jiagejin / 2;
        this.chanchudianNum = this.daojuduikang[this.dengji + 13].jiagedian / 2;
        if (this.dengji >= 9) {
          this.shangkuangdi.active = false;
        } else {
          this.miaoshu.getComponent(cc.Label).string = this.daojuduikang[this.dengji + 14].miaoshu;
          this.shengjijin.getComponent(cc.Label).string = this.daojuduikang[this.dengji + 14].jiagejin;
          this.shengjijinNum = this.daojuduikang[this.dengji + 14].jiagejin;
          this.shengjidianNum = this.daojuduikang[this.dengji + 14].jiagedian;
          if (this.daojuduikang[this.dengji + 14].jiagedian > 0) {
            this.shengjidian.getComponent(cc.Label).string = this.daojuduikang[this.dengji + 14].jiagedian;
          } else {
            this.shengjidian.active = false;
          }
          cc.loader.loadRes("image/game/jianzao/youxiji/" + (this.dengji + 1), cc.SpriteFrame, function (i, a) {
            e.youxiji.getComponent(cc.Sprite).spriteFrame = a;
          });
        }
        break;
      case "mengyan_gongji":
        this.mengyan_gongji.active = true;
        this.shengjiJS = Game.chaichudaoju.getComponent("daoju_dk");
        this.dengji = this.shengjiJS.dengji;
        this.mengyan_gongjiLab.getComponent(cc.Label).string = "lv:" + (this.dengji + 1);
        this.chanchujin.getComponent(cc.Label).string = this.daojuduikang[this.dengji + 35].jiagejin / 2;
        if (this.daojuduikang[this.dengji].jiagedian > 0) {
          this.chanchudian.getComponent(cc.Label).string = this.daojuduikang[this.dengji + 35].jiagedian / 2;
        } else {
          this.chanchudian.active = false;
        }
        this.chanchujinNum = this.daojuduikang[this.dengji + 35].jiagejin / 2;
        this.chanchudianNum = this.daojuduikang[this.dengji + 35].jiagedian / 2;
        if (this.dengji >= 9) {
          this.shangkuangdi.active = false;
        } else {
          this.miaoshu.getComponent(cc.Label).string = this.daojuduikang[this.dengji + 36].miaoshu;
          this.shengjijin.getComponent(cc.Label).string = this.daojuduikang[this.dengji + 36].jiagejin;
          this.shengjijinNum = this.daojuduikang[this.dengji + 36].jiagejin;
          this.shengjidianNum = this.daojuduikang[this.dengji + 36].jiagedian;
          if (this.daojuduikang[this.dengji + 36].jiagedian > 0) {
            this.shengjidian.getComponent(cc.Label).string = this.daojuduikang[this.dengji + 36].jiagedian;
          } else {
            this.shengjidian.active = false;
          }
        }
        break;
      case "mengyan_gongsu":
        this.mengyan_gongsu.active = true;
        this.shengjiJS = Game.chaichudaoju.getComponent("daoju_dk");
        this.dengji = this.shengjiJS.dengji;
        this.mengyan_gongsuLab.getComponent(cc.Label).string = "lv:" + (this.dengji + 1);
        this.chanchujin.getComponent(cc.Label).string = this.daojuduikang[this.dengji + 55].jiagejin / 2;
        if (this.daojuduikang[this.dengji].jiagedian > 0) {
          this.chanchudian.getComponent(cc.Label).string = this.daojuduikang[this.dengji + 55].jiagedian / 2;
        } else {
          this.chanchudian.active = false;
        }
        this.chanchujinNum = this.daojuduikang[this.dengji + 55].jiagejin / 2;
        this.chanchudianNum = this.daojuduikang[this.dengji + 55].jiagedian / 2;
        if (this.dengji >= 4) {
          this.shangkuangdi.active = false;
        } else {
          this.miaoshu.getComponent(cc.Label).string = this.daojuduikang[this.dengji + 56].miaoshu;
          this.shengjijin.getComponent(cc.Label).string = this.daojuduikang[this.dengji + 56].jiagejin;
          this.shengjijinNum = this.daojuduikang[this.dengji + 56].jiagejin;
          this.shengjidianNum = this.daojuduikang[this.dengji + 56].jiagedian;
          if (this.daojuduikang[this.dengji + 56].jiagedian > 0) {
            this.shengjidian.getComponent(cc.Label).string = this.daojuduikang[this.dengji + 56].jiagedian;
          } else {
            this.shengjidian.active = false;
          }
        }
        break;
      case "mengyan_shengming":
        this.mengyan_shengming.active = true;
        this.shengjiJS = Game.chaichudaoju.getComponent("daoju_dk");
        this.dengji = this.shengjiJS.dengji;
        this.mengyan_shengmingLab.getComponent(cc.Label).string = "lv:" + (this.dengji + 1);
        this.chanchujin.getComponent(cc.Label).string = this.daojuduikang[this.dengji + 45].jiagejin / 2;
        if (this.daojuduikang[this.dengji].jiagedian > 0) {
          this.chanchudian.getComponent(cc.Label).string = this.daojuduikang[this.dengji + 45].jiagedian / 2;
        } else {
          this.chanchudian.active = false;
        }
        this.chanchujinNum = this.daojuduikang[this.dengji + 45].jiagejin / 2;
        this.chanchudianNum = this.daojuduikang[this.dengji + 45].jiagedian / 2;
        if (this.dengji >= 9) {
          this.shangkuangdi.active = false;
        } else {
          this.miaoshu.getComponent(cc.Label).string = this.daojuduikang[this.dengji + 46].miaoshu;
          this.shengjijin.getComponent(cc.Label).string = this.daojuduikang[this.dengji + 46].jiagejin;
          this.shengjijinNum = this.daojuduikang[this.dengji + 46].jiagejin;
          this.shengjidianNum = this.daojuduikang[this.dengji + 46].jiagedian;
          if (this.daojuduikang[this.dengji + 46].jiagedian > 0) {
            this.shengjidian.getComponent(cc.Label).string = this.daojuduikang[this.dengji + 46].jiagedian;
          } else {
            this.shengjidian.active = false;
          }
        }
        break;
      case "mengyan_yisu":
        this.mengyan_yisu.active = true;
        this.shengjiJS = Game.chaichudaoju.getComponent("daoju_dk");
        this.dengji = this.shengjiJS.dengji;
        this.mengyan_yisuLab.getComponent(cc.Label).string = "lv:" + (this.dengji + 1);
        this.chanchujin.getComponent(cc.Label).string = this.daojuduikang[this.dengji + 60].jiagejin / 2;
        if (this.daojuduikang[this.dengji].jiagedian > 0) {
          this.chanchudian.getComponent(cc.Label).string = this.daojuduikang[this.dengji + 60].jiagedian / 2;
        } else {
          this.chanchudian.active = false;
        }
        this.chanchujinNum = this.daojuduikang[this.dengji + 60].jiagejin / 2;
        this.chanchudianNum = this.daojuduikang[this.dengji + 60].jiagedian / 2;
        if (this.dengji >= 4) {
          this.shangkuangdi.active = false;
        } else {
          this.miaoshu.getComponent(cc.Label).string = this.daojuduikang[this.dengji + 61].miaoshu;
          this.shengjijin.getComponent(cc.Label).string = this.daojuduikang[this.dengji + 61].jiagejin;
          this.shengjijinNum = this.daojuduikang[this.dengji + 61].jiagejin;
          this.shengjidianNum = this.daojuduikang[this.dengji + 61].jiagedian;
          if (this.daojuduikang[this.dengji + 61].jiagedian > 0) {
            this.shengjidian.getComponent(cc.Label).string = this.daojuduikang[this.dengji + 61].jiagedian;
          } else {
            this.shengjidian.active = false;
          }
        }
        break;
      case "liemengzhe":
        this.liemengzhe.active = true;
        this.shengjiJS = Game.chaichudaoju.getComponent("daoju_dk");
        this.dengji = this.shengjiJS.dengji;
        this.liemengzheLab.getComponent(cc.Label).string = "lv:" + (this.dengji + 1);
        this.chanchujin.getComponent(cc.Label).string = this.daojuduikang[this.dengji + 23].jiagejin / 2;
        if (this.daojuduikang[this.dengji].jiagedian > 0) {
          this.chanchudian.getComponent(cc.Label).string = this.daojuduikang[this.dengji + 23].jiagedian / 2;
        } else {
          this.chanchudian.active = false;
        }
        this.chanchujinNum = this.daojuduikang[this.dengji + 23].jiagejin / 2;
        this.chanchudianNum = this.daojuduikang[this.dengji + 23].jiagedian / 2;
        if (this.dengji >= 9) {
          this.shangkuangdi.active = false;
        } else {
          this.miaoshu.getComponent(cc.Label).string = this.daojuduikang[this.dengji + 24].miaoshu;
          this.shengjijin.getComponent(cc.Label).string = this.daojuduikang[this.dengji + 24].jiagejin;
          this.shengjijinNum = this.daojuduikang[this.dengji + 24].jiagejin;
          this.shengjidianNum = this.daojuduikang[this.dengji + 24].jiagedian;
          if (this.daojuduikang[this.dengji + 24].jiagedian > 0) {
            this.shengjidian.getComponent(cc.Label).string = this.daojuduikang[this.dengji + 24].jiagedian;
          } else {
            this.shengjidian.active = false;
          }
        }
    }
    this.v = 0;
  },
  but_guanbi: function () {
    this.node.destroy();
  },
  but_shengji: function () {
    music.api_audioPlay("mp3/jianzhushengji");
    if (Player.jinbiArr < this.shengjijinNum) {
      Game.fangzhitanchuang("金币不够");
    } else if (Player.shandianArr < this.shengjidianNum) {
      Game.fangzhitanchuang("闪电不够");
    } else {
      Player.jinbiArr -= this.shengjijinNum;
      Player.shandianArr -= this.shengjidianNum;
      Game.shandianNum.getComponent(cc.Label).string = Player.shandianArr;
      switch (Game.chaichudaojuType) {
        case "paotai":
          Game.chaichudaoju.getComponent("paotai_dk").dengji++;
          cc.loader.loadRes("image/game/jianzao/paotai/" + this.shengjiJS.dengji + "/shang", cc.SpriteFrame, function (e, i) {
            Game.chaichudaoju.getComponent("paotai_dk").paotai.getComponent(cc.Sprite).spriteFrame = i;
          });
          cc.loader.loadRes("image/game/jianzao/paotai/" + this.shengjiJS.dengji + "/xia", cc.SpriteFrame, function (e, i) {
            Game.chaichudaoju.getComponent("paotai_dk").xia.getComponent(cc.Sprite).spriteFrame = i;
          });
          cc.loader.loadRes("image/game/jianzao/paotai/" + this.shengjiJS.dengji + "/guang", cc.SpriteFrame, function (e, i) {
            Game.chaichudaoju.getComponent("paotai_dk").guang.getComponent(cc.Sprite).spriteFrame = i;
          });
          Game.chaichudaoju.getComponent("paotai_dk").gongjili = this.daojuduikang[this.shengjiJS.dengji].ad;
          break;
        case "youxiji":
          Game.chaichudaoju.getComponent("daoju_dk").dengji++;
          cc.loader.loadRes("image/game/jianzao/youxiji/" + this.shengjiJS.dengji, cc.SpriteFrame, function (e, i) {
            Game.chaichudaoju.getComponent("daoju_dk").daoju.getComponent(cc.Sprite).spriteFrame = i;
          });
          break;
        case "mengyan_gongji":
          Game.chaichudaoju.getComponent("daoju_dk").dengji++;
          this.mengyan_gongjiLab.getComponent(cc.Label).string = "lv:" + Game.chaichudaoju.getComponent("daoju_dk").dengji;
          mengyan_gongji_dengji = Game.chaichudaoju.getComponent("daoju_dk").dengji;
          Game.chaichudaoju.getComponent("daoju_dk").dengjixiasnhi.getComponent(cc.Label).string = "lv:" + mengyan_gongji_dengji;
          break;
        case "mengyan_gongsu":
          Game.chaichudaoju.getComponent("daoju_dk").dengji++;
          this.mengyan_gongsuLab.getComponent(cc.Label).string = "lv:" + Game.chaichudaoju.getComponent("daoju_dk").dengji;
          mengyan_gongsu_dengji = Game.chaichudaoju.getComponent("daoju_dk").dengji;
          Game.chaichudaoju.getComponent("daoju_dk").dengjixiasnhi.getComponent(cc.Label).string = "lv:" + mengyan_gongsu_dengji;
          break;
        case "mengyan_shengming":
          Game.chaichudaoju.getComponent("daoju_dk").dengji++;
          this.mengyan_shengmingLab.getComponent(cc.Label).string = "lv:" + Game.chaichudaoju.getComponent("daoju_dk").dengji;
          mengyan_shengming_dengji = Game.chaichudaoju.getComponent("daoju_dk").dengji;
          Game.chaichudaoju.getComponent("daoju_dk").dengjixiasnhi.getComponent(cc.Label).string = "lv:" + mengyan_shengming_dengji;
          break;
        case "mengyan_yisu":
          Game.chaichudaoju.getComponent("daoju_dk").dengji++;
          this.mengyan_yisuLab.getComponent(cc.Label).string = "lv:" + Game.chaichudaoju.getComponent("daoju_dk").dengji;
          mengyan_yisu_dengji = Game.chaichudaoju.getComponent("daoju_dk").dengji;
          Game.chaichudaoju.getComponent("daoju_dk").dengjixiasnhi.getComponent(cc.Label).string = "lv:" + mengyan_yisu_dengji;
          break;
        case "liemengzhe":
          Game.chaichudaoju.getComponent("daoju_dk").dengji++;
          this.liemengzheLab.getComponent(cc.Label).string = "lv:" + Game.chaichudaoju.getComponent("daoju_dk").dengji;
          mengyan_lv = Game.chaichudaoju.getComponent("daoju_dk").dengji;
          Game.chaichudaoju.getComponent("daoju_dk").dengjixiasnhi.getComponent(cc.Label).string = "lv:" + mengyan_lv;
          Game.guiJiage.getComponent(cc.Label).string = "-" + this.duikangguilv[mengyan_lv].price;
      }
      this.node.destroy();
    }
  },
  but_chaichu: function () {
    music.api_audioPlay("mp3/chaijianzhu");
    Player.jinbiArr += this.chanchujinNum;
    Player.shandianArr += this.chanchudianNum;
    Game.shandianNum.getComponent(cc.Label).string = Player.shandianArr;
    Game.chaichudaoju.destroy();
    switch (Game.chaichudaojuType) {
      case "paotai":
        Player.paotaiNum--;
        break;
      case "youxiji":
        Player.youxijiNum--;
        break;
      case "mengyan_gongji":
        Player.mengyan_gongjiNum--;
        break;
      case "mengyan_gongsu":
        Player.mengyan_gongsuNum--;
        break;
      case "mengyan_shengming":
        Player.mengyan_shengmingNum--;
        break;
      case "mengyan_yisu":
        Player.mengyan_yisuNum--;
        break;
      case "liemengzhe":
        Player.liemengzheNum--;
        mengyan_lv = 1;
        Game.guiJiage.getComponent(cc.Label).string = "-" + this.duikangguilv[mengyan_lv].price;
    }
    this.node.destroy();
  },
  update: function (e) {
    if (this.duikangguilv) {
      this.v--;
      if (this.v < 0) {
        this.v = 20, this.gengxinanniu();
      }
    }
  },
  gengxinanniu: function () {
    var e;
    switch (Game.chaichudaojuType) {
      case "paotai":
        e = 1;
        break;
      case "youxiji":
        e = 14;
        break;
      case "mengyan_gongji":
        e = 36;
        break;
      case "mengyan_gongsu":
        e = 56;
        break;
      case "mengyan_shengming":
        e = 46;
        break;
      case "mengyan_yisu":
        e = 61;
        break;
      case "liemengzhe":
        e = 24;
    }
    if (this.daojuduikang[this.dengji + e].jiagejin > Player.jinbiArr) {
      this.shengjiBut.getComponent(cc.Sprite).spriteFrame == this.minse_SpriteFrame && (this.shengjiBut.getComponent(cc.Sprite).spriteFrame = this.huise_SpriteFrame);
    } else {
      this.shengjiBut.getComponent(cc.Sprite).spriteFrame == this.huise_SpriteFrame && (this.shengjiBut.getComponent(cc.Sprite).spriteFrame = this.minse_SpriteFrame);
    }
  },
  start: function () {
    adUtils.executeShowGameAdvertising(true);
  }
});
cc.Class({
  extends: cc.Component,
  properties: {},
  onLoad: function () {
    if (this.node.name == "player" + MainDate.renwuXuhao) {
      window.Player = this;
      window.mengyan_lv = 1;
      this.chuangLever = 1;
      this.chuang = null;
      this.bianzu = 0;
      this.men = null;
      this.mendengji = 0;
      this.menArr = [];
      this.shangchuanType = false;
      this.jinbiArr = 0;
      this.shandianArr = 0;
      this.jishiqiTime = 1;
      this.jinbijiangeTime = 1;
      if (7 == MainDate.GameType && MainDate.wuxianjinbi) {
        this.jinbiArr = 5e5, Game.jinbiNum.getComponent(cc.Label).string = this.jinbiArr, this.jinbijiangeTime = .5;
      }
      this.jishiqiTime = this.jinbijiangeTime;
      this.fk_fangzhitishiArr = [];
      this.weixiuTime = 0;
      MainDate.dangqianNum_fuzhoufasheqi = 0;
      MainDate.dangqianNum_nengliang = 0;
      MainDate.dangqianNum_tikuanji = 0;
      MainDate.dangqianNum_bingxiang = 0;
      MainDate.dangqianNum_youbu = 0;
      MainDate.dangqianNum_daoci = 0;
      MainDate.dangqianNum_duantoutai = 0;
      MainDate.dangqianNum_weixiutai = 0;
      MainDate.dangqianNum_liaowangtai = 0;
      MainDate.dangqianNum_lizijiasuqi = 0;
      MainDate.dangqianNum_dianciquan = 0;
      this.paotaiNum = 0;
      this.youxijiNum = 0;
      this.weixiutaiNum = 0;
      this.bingxiangNum = 0;
      this.nengliangzhaoNum = 0;
      this.dianciquanNum = 0;
      this.mengyan_gongjiNum = 0;
      this.mengyan_gongsuNum = 0;
      this.mengyan_shengmingNum = 0;
      this.mengyan_yisuNum = 0;
      this.liemengzheNum = 0;
      cc.loader.loadRes("json/daojuduikang1", function (e, i) {
        this.duikangJson = i.json;
      }.bind(this));
      cc.loader.loadRes("json/duikangguilv", function (e, i) {
        this.duikangguilvJson = i.json;
      }.bind(this));
    } else {
      this.node.destroy();
    }
  },
  butweixiu: function () {
    if (!(this.weixiuTime > 0)) {
      if ((1 == MainDate.GameType || 3 == MainDate.GameType || 4 == MainDate.GameType || 6 == MainDate.GameType || 7 == MainDate.GameType) && this.men && this.men.isValid) {
        this.weixiuTime = 600;
        this.men.getComponent("men").weixiuTime = 300;
      } else if (5 == MainDate.GameType) {
        this.weixiuTime = 600;
        for (var e = 0; e < this.menArr.length; e++) {
          this.menArr[e].getComponent("men").weixiuTime = 300;
        }
      }
    }
  },
  fk_fangzhitishi: function (e, i) {
    e.getChildByName("fangzhitishi").type = i;
  },
  shengjijiantou_tishi: function () {
    if (!Game.gameOver) {
      if (1 == MainDate.GameType || 3 == MainDate.GameType || 4 == MainDate.GameType || 5 == MainDate.GameType || 7 == MainDate.GameType || 8 == MainDate.GameType) {
        this.shengjijiantou();
      } else {
        6 == MainDate.GameType && this.dk_shengjijiantou();
      }
    }
  },
  shengjijiantou: function () {
    for (var e = 0; e < Game.shengji_Arr.length; e++) {
      if (!("chuang" != Game.shengji_Arr[e].name || 1 != MainDate.GameType && 3 != MainDate.GameType && 4 != MainDate.GameType && 7 != MainDate.GameType)) {
        if (this.men.name && Game.daoJuJson[this.chuangLever + 1].jiagejin <= this.jinbiArr && Game.daoJuJson[this.chuangLever + 1].jiagedian <= this.shandianArr && this.chuangLever < 9 && Game.daoJuJson[this.chuangLever + 1].tiaojian <= this.mendengji) {
          Game.shengji_Arr[e].getChildByName("xiaojiantou").active = true;
        } else {
          Game.shengji_Arr[e].getChildByName("xiaojiantou").active = false;
        }
      }
      if ("chuang" != Game.shengji_Arr[e].name || 5 != MainDate.GameType && 8 != MainDate.GameType) {
        if ("men" == Game.shengji_Arr[e].name) {
          var i = Game.shengji_Arr[e].getComponent("men").mendengji;
          if (Game.daoJuJson[i + 10].jiagejin <= this.jinbiArr && Game.daoJuJson[i + 10].jiagedian <= this.shandianArr && i < 11) {
            Game.shengji_Arr[e].getChildByName("xiaojiantou").active = true;
          } else {
            Game.shengji_Arr[e].getChildByName("xiaojiantou").active = false;
          }
        } else if ("paotai" == Game.shengji_Arr[e].name) {
          var a = Game.shengji_Arr[e].getComponent("paotai").dengji;
          if (Game.daoJuJson[a + 31].jiagejin <= this.jinbiArr && Game.daoJuJson[a + 31].jiagedian <= this.shandianArr && a < 13) {
            Game.shengji_Arr[e].getChildByName("xiaojiantou").active = true;
          } else {
            Game.shengji_Arr[e].getChildByName("xiaojiantou").active = false;
          }
        } else if ("youxiji" == Game.shengji_Arr[e].name) {
          var n = Game.shengji_Arr[e].getComponent("youxiji").dengji;
          if (n < 9 && Game.daoJuJson[n + 22].jiagejin <= this.jinbiArr && Game.daoJuJson[n + 22].jiagedian <= this.shandianArr) {
            Game.shengji_Arr[e].getChildByName("xiaojiantou").active = true;
          } else {
            Game.shengji_Arr[e].getChildByName("xiaojiantou").active = false;
          }
        } else if ("kuang" == Game.shengji_Arr[e].name) {
          var t = Game.shengji_Arr[e].getComponent("kuang").kuangdengji;
          if (t < 4 && Game.daoJuJson[t + 56].jiagejin <= this.jinbiArr && Game.daoJuJson[t + 56].jiagedian <= this.shandianArr) {
            Game.shengji_Arr[e].getChildByName("xiaojiantou").active = true;
          } else {
            Game.shengji_Arr[e].getChildByName("xiaojiantou").active = false;
          }
        }
      } else if (Game.daoJuJson[this.chuangLever + 1].jiagejin <= this.jinbiArr && Game.daoJuJson[this.chuangLever + 1].jiagedian <= this.shandianArr && this.chuangLever < 9 && Game.daoJuJson[this.chuangLever + 1].tiaojian <= this.mendengji) {
        Game.shengji_Arr[e].getChildByName("xiaojiantou").active = true;
      } else {
        Game.shengji_Arr[e].getChildByName("xiaojiantou").active = false;
      }
    }
    Game.renwuzhuangtai();
  },
  dk_shengjijiantou: function () {
    for (var e = 0; e < Game.shengji_Arr.length; e++) {
      if ("chuang" == Game.shengji_Arr[e].name && 6 == MainDate.GameType) {
        if (this.men.name && Game.daoJuJson[this.chuangLever + 1].jiagejin <= this.jinbiArr && Game.daoJuJson[this.chuangLever + 1].jiagedian <= this.shandianArr && this.chuangLever < 9 && Game.daoJuJson[this.chuangLever + 1].tiaojian <= this.mendengji) {
          Game.shengji_Arr[e].getChildByName("xiaojiantou").active = true;
        } else {
          Game.shengji_Arr[e].getChildByName("xiaojiantou").active = false;
        }
      } else if ("men" == Game.shengji_Arr[e].name) {
        var i = Game.shengji_Arr[e].getComponent("men").mendengji;
        if (Game.daoJuJson[i + 10].jiagejin <= this.jinbiArr && Game.daoJuJson[i + 10].jiagedian <= this.shandianArr && i < 11) {
          Game.shengji_Arr[e].getChildByName("xiaojiantou").active = true;
        } else {
          Game.shengji_Arr[e].getChildByName("xiaojiantou").active = false;
        }
      } else if ("paotai" == Game.shengji_Arr[e].name) {
        var a = Game.shengji_Arr[e].getComponent("paotai_dk").dengji;
        if (this.duikangJson[a + 1].jiagejin <= this.jinbiArr && this.duikangJson[a + 1].jiagedian <= this.shandianArr && a < 10) {
          Game.shengji_Arr[e].getChildByName("xiaojiantou").active = true;
        } else {
          Game.shengji_Arr[e].getChildByName("xiaojiantou").active = false;
        }
      } else if ("youxiji" == Game.shengji_Arr[e].name) {
        var n = Game.shengji_Arr[e].getComponent("daoju_dk").dengji;
        if (n < 9 && this.duikangJson[n + 14].jiagejin <= this.jinbiArr && this.duikangJson[n + 14].jiagedian <= this.shandianArr) {
          Game.shengji_Arr[e].getChildByName("xiaojiantou").active = true;
        } else {
          Game.shengji_Arr[e].getChildByName("xiaojiantou").active = false;
        }
      }
    }
  },
  butfangzhigui: function () {
    if (this.shandianArr < this.duikangguilvJson[mengyan_lv].price) {
      Game.fangzhitanchuang("闪电不够");
    } else {
      this.shandianArr -= this.duikangguilvJson[mengyan_lv].price;
      Game.shandianNum.getComponent(cc.Label).string = this.shandianArr;
      cocoscreator.api_showTip("prefab/game/dk/npc_dk", function (e) {
        var i = cc.instantiate(e);
        i.y = this.menY + 110;
        var a = 1;
        Math.random() < .5 && (a = -1);
        i.x = this.menX + 200 * a;
        i.bianzu = this.bianzu;
        i.dengji = 1;
        this.liemengzheNum >= 1 && (i.dengji = mengyan_lv);
        i.pifu = Game.guiXuhao;
        i.gongjisudu = 1;
        i.yisu = 2;
        i.gongji = this.duikangguilvJson[i.dengji].ad;
        i.hp = this.duikangguilvJson[i.dengji].hp;
        this.mengyan_gongjiNum >= 1 && (i.gongji = i.gongji * (this.duikangJson[mengyan_gongji_dengji - 1 + 36]["ad+"] + 1));
        this.mengyan_gongsuNum >= 1 && (i.gongjisudu -= this.duikangJson[mengyan_gongsu_dengji - 1 + 56]["as+"]);
        this.mengyan_shengmingNum >= 1 && (i.hp = i.hp * (this.duikangJson[mengyan_shengming_dengji - 1 + 46]["hp+"] + 1));
        this.mengyan_yisuNum >= 1 && (i.yisu = i.yisu * (1 - this.duikangJson[mengyan_yisu_dengji - 1 + 61]["ms+"]));
        Game.guiweizhi.addChild(i);
      }.bind(this));
    }
  },
  update: function (e) {
    if (this.node.name == "player" + MainDate.renwuXuhao) {
      if (!this.shangchuanType) {
        for (var i = 0; i < Game.shangchuangArr.length; i++) {
          var a = Game.shangchuangArr[i];
          if (Math.abs(this.node.x - a.x) < 90 && Math.abs(this.node.y - a.y) < 90 && (1 == MainDate.GameType || 3 == MainDate.GameType || 4 == MainDate.GameType || 6 == MainDate.GameType || 7 == MainDate.GameType) && !this.shangchuanType) {
            a.getChildByName("shangchuang").active = true;
          } else {
            a.getChildByName("shangchuang").active = false;
          }
        }
      }
      this.jishiqiTime -= e;
      this.player_move(e);
      if (this.shangchuanType && this.jishiqiTime <= 0 && !Game.gameOver) {
        this.jishiqiTime = this.jinbijiangeTime;
        this.jinbiArr += Game.daoJuJson[this.chuangLever].shengchanjinbi * Game.shouyi_Beishu;
        Game.jinbiNum.getComponent(cc.Label).string = this.jinbiArr;
        cc.tween(this.chuang).to(.2, {
          scale: .8
        }).to(.1, {
          scale: 1
        }).start();
        this.shengjijiantou_tishi();
        cocoscreator.api_showTip("prefab/game/huodeziyuan", function (e) {
          var i = cc.instantiate(e);
          i.getChildByName("jinbi").active = true;
          i.getChildByName("shandian").active = false;
          i.getChildByName("jinbi").getComponent(cc.Label).string = " +" + Game.daoJuJson[this.chuangLever].shengchanjinbi * Game.shouyi_Beishu;
          i.x = this.chuang.x;
          i.y = this.chuang.y;
          Game.props.addChild(i);
          cc.tween(i).to(1.5, {
            y: i.y + 80,
            scale: .4
          }).call(function () {
            i.destroy();
          }).start();
        }.bind(this));
      } else if (!this.shangchuanType && this.jishiqiTime <= 0) {
        this.jishiqiTime = this.jinbijiangeTime, this.jinbiArr += 1 * Game.shouyi_Beishu, Game.jinbiNum.getComponent(cc.Label).string = this.jinbiArr;
      }
      for (var n = 0; n < this.fk_fangzhitishiArr.length; n++) {
        this.fk_fangzhitishiArr[n].active = this.fk_fangzhitishiArr[n].type;
        this.fk_fangzhitishiArr[n].opacity += this.fk_fangzhitishiArr[n].toumingdu;
        if (this.fk_fangzhitishiArr[n].opacity >= 225) {
          this.fk_fangzhitishiArr[n].toumingdu = -2;
        } else {
          this.fk_fangzhitishiArr[n].opacity <= 0 && (this.fk_fangzhitishiArr[n].toumingdu = 2);
        }
      }
      if (this.weixiuTime > 0) {
        this.weixiuTime--;
        Game.weixiuBut.opacity = 150;
        Game.weixiuBut.getComponent(cc.Sprite).fillRange = this.weixiuTime / 600;
      }
    }
  },
  player_move: function (e) {
    if (Game.yidongjiandu && !this.shangchuanType) {
      if (1 == MainDate.GameType || 3 == MainDate.GameType) {
        if (Math.sin(Game.yidongjiandu * Math.PI / 180) * Game.yidongV > 0 && this.node.x < 412) {
          this.node.x += Math.sin(Game.yidongjiandu * Math.PI / 180) * Game.yidongV * 60 * e;
        } else {
          Math.sin(Game.yidongjiandu * Math.PI / 180) * Game.yidongV < 0 && this.node.x > -2100 && (this.node.x += Math.sin(Game.yidongjiandu * Math.PI / 180) * Game.yidongV * 60 * e);
        }
        if (Math.cos(Game.yidongjiandu * Math.PI / 180) * Game.yidongV > 0 && this.node.y < 2130) {
          this.node.y += Math.cos(Game.yidongjiandu * Math.PI / 180) * Game.yidongV * 60 * e;
        } else {
          Math.cos(Game.yidongjiandu * Math.PI / 180) * Game.yidongV < 0 && this.node.y > -994 && (this.node.y += Math.cos(Game.yidongjiandu * Math.PI / 180) * Game.yidongV * 60 * e);
        }
      } else if (4 == MainDate.GameType || 7 == MainDate.GameType) {
        if (Math.cos(Game.yidongjiandu * Math.PI / 180) * Game.yidongV > 0 && this.node.y < 810) {
          this.node.y += Math.cos(Game.yidongjiandu * Math.PI / 180) * Game.yidongV * 60 * e;
        } else {
          Math.cos(Game.yidongjiandu * Math.PI / 180) * Game.yidongV < 0 && (this.node.y += Math.cos(Game.yidongjiandu * Math.PI / 180) * Game.yidongV * 60 * e);
        }
        this.node.x += Math.sin(Game.yidongjiandu * Math.PI / 180) * Game.yidongV * 60 * e;
      } else if (6 == MainDate.GameType) {
        Math.sin(Game.yidongjiandu * Math.PI / 180) * Game.yidongV > 0 && this.node.x < 300 ? this.node.x += Math.sin(Game.yidongjiandu * Math.PI / 180) * Game.yidongV * 60 * e : Math.sin(Game.yidongjiandu * Math.PI / 180) * Game.yidongV < 0 && this.node.x > -300 && (this.node.x += Math.sin(Game.yidongjiandu * Math.PI / 180) * Game.yidongV * 60 * e), Math.cos(Game.yidongjiandu * Math.PI / 180) * Game.yidongV > 0 && this.node.y < -100 ? this.node.y += Math.cos(Game.yidongjiandu * Math.PI / 180) * Game.yidongV * 60 * e : Math.cos(Game.yidongjiandu * Math.PI / 180) * Game.yidongV < 0 && (this.node.y += Math.cos(Game.yidongjiandu * Math.PI / 180) * Game.yidongV * 60 * e);
      }
    }
  },
  player_men_bing: function (e) {
    if ((1 == MainDate.GameType || 3 == MainDate.GameType || 4 == MainDate.GameType || 6 == MainDate.GameType || 7 == MainDate.GameType) && this.men && this.men.isValid) {
      this.men.getChildByName("bing").active = e;
    } else if (5 == MainDate.GameType) {
      for (var i = 0; i < this.menArr.length; i++) {
        this.menArr[i].getChildByName("bing").active = e;
      }
    }
  },
  player_men_daoci: function (e) {
    if (1 == MainDate.GameType || 3 == MainDate.GameType || 4 == MainDate.GameType || 7 == MainDate.GameType) {
      this.men.getChildByName("jingji").active = e;
    } else if (5 == MainDate.GameType) {
      for (var i = 0; i < this.menArr.length; i++) {
        this.menArr[i].getChildByName("jingji").active = e;
      }
    }
  },
  chuangjian_youxiji_dk: function () {
    cocoscreator.api_showTip("prefab/game/dk/daoju_dk", function (e) {
      var i = cc.instantiate(e);
      i.x = 270;
      i.y = 90 * (13 - Math.floor(106 / 9) - 1) - 855;
      i.bianzu = this.bianzu;
      i.daoju = "youxiji";
      i.name = "youxiji";
      Game.props.addChild(i);
      Game.shengji_Arr.push(i);
      i.getChildByName("1").on(cc.Node.EventType.TOUCH_START && cc.Node.EventType.TOUCH_END, function () {
        Game.chaichudaojuType = "youxiji";
        Game.chaichudaoju = i;
        cocoscreator.api_showTip("prefab/game/dk/shengjiTanchuang_dk", function (e) {
          var i = cc.instantiate(e);
          Game.MainCameraUI.addChild(i);
        });
      }.bind(this));
    }.bind(this));
  },
  chuangjiantikuanji_tafang: function () {
    var e = [];
    for (var i = 0; i < this.fk_fangzhitishiArr.length; i++) {
      this.fk_fangzhitishiArr[i].type && e.push(this.fk_fangzhitishiArr[i]);
    }
    if (!(e.length <= 0)) {
      var a = e[Math.floor(Math.random() * e.length)].parent;
      Game.AD_ATM.active = false;
      MainDate.dangqianNum_tikuanji++;
      cocoscreator.api_showTip("prefab/game/daoju", function (e) {
        var i = cc.instantiate(e);
        this.fk_fangzhitishi(a, false);
        i.x = a.x;
        i.y = a.y;
        i.posFK = a;
        Game.props.addChild(i);
        i.getChildByName("ATM").active = true;
        i.bianzu = this.bianzu;
      }.bind(this));
    }
  }
});
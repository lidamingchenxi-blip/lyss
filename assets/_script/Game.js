cc.Class({
  extends: cc.Component,
  properties: {
    MainCamera: cc.Node,
    MainCameraUI: cc.Node,
    mapPos: cc.Node,
    DownMask: cc.Node,
    yaoganwai: cc.Node,
    yaogannei: cc.Node,
    props: cc.Node,
    jinbiNum: cc.Node,
    shandianNum: cc.Node,
    weixiuBut: cc.Node,
    guitouxiang: cc.Node,
    guiJiage: cc.Node,
    fangzhiguiBut: cc.Node,
    bociLab: cc.Node,
    shouwushijian: cc.Node,
    luzhishijianDisplay: cc.Node,
    luzhikaishiBut: cc.Node,
    luzhijieshuBut: cc.Node,
    fenxiangjinbi: cc.Node,
    AD_ATM: cc.Node,
    students: cc.Node,
    player: cc.Node,
    guiweizhi: cc.Node,
    gogameTime: cc.Node,
    tishikuang: cc.Node,
    renwumiaoshu: cc.Node,
    renwubutt: cc.Node,
    lingqudi: cc.Node,
    touxiangkuang: cc.Node,
    touxiangzhong_WOLab: cc.Node,
    shouyiBut: cc.Node,
    lingqujinbi: cc.Node,
    fenxianglingqujinbi: cc.Node,
    anniuweizhi: cc.Node,
    guijinengbut: cc.Node,
    kuangbaobut: cc.Node,
    zhenhanbut: cc.Node,
    kuangbaoAD: cc.Node,
    zhenhanAD: cc.Node
  },
  onLoad: function () {
    MainDate.scene = "Game";
    window.Game = this;
    music.BGMusic(MainDate.mp3.bgm);
    this.luzhishijianDisplay.active = false;
    this.luzhikaishiBut.active = false;
    this.luzhijieshuBut.active = false;
    this.fenxiangjinbi.active = false;
    MainDate.renwuXuhao = 1;
    MainDate.tafangGuihpMax = 0;
    this.shouyi_Beishu = 1;
    this.gameOver = false;
    this.tishikuang.zIndex = 9999;
    this.shengji_Arr = [];
    this.player_Arr = [];
    this.player_ArrPifu = [];
    this.player_ArrName = [];
    this.pipeijiemian = true;
    this.chuangArr = [];
    this.shangchuangArr = [];
    this.menArr = [];
    this.menGuanbi = [];
    this.huixuedian = [];
    this.yidongV = 5;
    this.xuanzerenwu = false;
    this.props.zIndex = 1e3;
    this.tafanglv = 1;
    this.shouwushijian.active = false;
    this.AD_ATM.active = false;
    this.yaoganwai.active = true;
    this.shouzhiMoveMap = false;
    this.jinbiNum.getComponent(cc.Label).string = 0;
    this.shandianNum.getComponent(cc.Label).string = 0;
    this.luzhikaishiType = false;
    this.guiXuhao = 1;
    this.guiXuhaoTime = 180;
    this.player2Xuhao = Math.floor(6 * Math.random() + 1);
    this.gamekaishiTime = 0;
    this.gameluzhiTime = 0;
    this.weixiuBut.opacity = 150;
    this.weixiuBut.parent.active = false;
    this.touxiangkuang.active = false;
    this.kuangbaobut.opacity = 150;
    this.zhenhanbut.opacity = 150;
    this.fangzhiguiBut.active = false;
    this.bociLab.active = false;
    this.renwuwanchengNum = 1;
    this.gogameTime.active = true;
    if (1 == MainDate.GameType || 3 == MainDate.GameType || 4 == MainDate.GameType || 5 == MainDate.GameType) {
      this.guixingdongTime = 30;
    } else if (2 == MainDate.GameType) {
      this.guixingdongTime = 11;
    } else if (6 == MainDate.GameType) {
      this.guixingdongTime = 10;
    } else if (7 == MainDate.GameType) {
      this.guixingdongTime = 10;
    } else {
      8 == MainDate.GameType && (this.guixingdongTime = 30);
    }
    this.yaoganwaiPos = {
      x: this.yaoganwai.x,
      y: this.yaoganwai.y
    };
    if (1 == MainDate.GameType || 3 == MainDate.GameType || 2 == MainDate.GameType) {
      this.touxiangkuang.active = true;
      "map";
      "map";
      "daoju";
      cocoscreator.api_showTip("prefab/game/pipeijiemian", function (e) {
        var i = cc.instantiate(e);
        i.zIndex = 15;
        this.MainCameraUI.addChild(i);
      }.bind(this));
      if (2 == MainDate.GameType) {
        this.lingqudi.active = false, this.yaoganwai.active = false, this.anniuweizhi.active = false, this.touxiangzhong_WOLab.active = false, this.gogameTime.getChildByName("mengyan").active = true, this.hengfuTishi = this.gogameTime.getChildByName("mengyan");
      } else {
        1 == MainDate.GameType && (this.gogameTime.getChildByName("chuantong").active = true, this.hengfuTishi = this.gogameTime.getChildByName("chuantong"));
      }
    } else {
      this.initTouchEffect();
      this.newGame();
    }
  },
  Init_Game: function () {
    if (!(1 != MainDate.GameType && 3 != MainDate.GameType && 2 != MainDate.GameType)) {
      this.initTouchEffect();
      this.newGame();
    }
  },
  initTouchEffect: function () {
    this.DownMask.on(cc.Node.EventType.TOUCH_END, function (e) {
      this.shouzhiEnd(e);
    }.bind(this));
    this.DownMask.on(cc.Node.EventType.TOUCH_MOVE, function (e) {
      this.shouzhiMove(e);
    }.bind(this));
    this.DownMask.on(cc.Node.EventType.TOUCH_START, function (e) {
      this.shouzhiSTART(e);
    }.bind(this));
    this.DownMask._touchListener.swallowTouches = false;
  },
  shouzhiEnd: function (e) {
    var i = this;
    this.yaoganwai.x = this.yaoganwaiPos.x;
    this.yaoganwai.y = this.yaoganwaiPos.y;
    this.yaogannei.x = 0;
    this.yaogannei.y = 0;
    this.yidongjiandu = null;
    setTimeout(function () {
      i.shouzhiMoveMap = false;
    }, 100);
  },
  shouzhiMove: function (e) {
    var i = this.node.convertToNodeSpaceAR(e.getLocation());
    this.yaogan_move_pinghu(i);
    (Math.abs(this.yaoganwaiAnxiaX - this.yaoganwai.x) > 10 || Math.abs(this.yaoganwaiAnxiaY - this.yaoganwai.y) > 10) && (this.shouzhiMoveMap = true);
  },
  yaogan_move_pinghu: function (e) {
    var i = function () {
      var i = -2100;
      var a = 412;
      if (8 == MainDate.GameType) {
        a = 200;
        i = -350;
      }
      if (e.x - this.yaoganwai.x < 0 && this.MainCamera.x < a) {
        this.MainCamera.x += this.yaoganwai.x - e.x;
      } else {
        e.x - this.yaoganwai.x > 0 && this.MainCamera.x > i && (this.MainCamera.x += this.yaoganwai.x - e.x);
      }
      var n = -800;
      var t = 1600;
      if (8 == MainDate.GameType) {
        n = -400;
        t = 600;
      }
      if (e.y - this.yaoganwai.y < 0 && this.MainCamera.y < t) {
        this.MainCamera.y += this.yaoganwai.y - e.y;
      } else {
        e.y - this.yaoganwai.y > 0 && this.MainCamera.y > n && (this.MainCamera.y += this.yaoganwai.y - e.y);
      }
      this.yaoganwai.x = e.x;
      this.yaoganwai.y = e.y;
    }.bind(this);
    var a = function () {
      var i = 180 * Math.atan2(e.x - this.yaoganwai.x, e.y - this.yaoganwai.y) / Math.PI;
      i < 0 && (i += 360);
      i = Math.abs(i);
      if ((e.x - this.yaoganwai.x) * (e.x - this.yaoganwai.x) + (e.y - this.yaoganwai.y) * (e.y - this.yaoganwai.y) <= 14400) {
        this.yaogannei.x = e.x - this.yaoganwai.x;
        this.yaogannei.y = e.y - this.yaoganwai.y;
      } else {
        this.yaogannei.x = 120 * Math.sin(i * Math.PI / 180);
        this.yaogannei.y = 120 * Math.cos(i * Math.PI / 180);
      }
      this.yidongjiandu = i;
    }.bind(this);
    if (1 == MainDate.GameType || 3 == MainDate.GameType || 4 == MainDate.GameType || 5 == MainDate.GameType || 6 == MainDate.GameType || 7 == MainDate.GameType || 8 == MainDate.GameType) {
      if (Player.shangchuanType) {
        4 != MainDate.GameType && 6 != MainDate.GameType && 7 != MainDate.GameType && i();
      } else {
        a();
      }
    } else if (2 == MainDate.GameType && this.player.getComponent("playerGui") && !this.player.getComponent("playerGui").xingdong) {
      i();
    } else {
      2 == MainDate.GameType && this.player.getComponent("playerGui") && this.player.getComponent("playerGui").xingdong && a();
    }
  },
  shouzhiSTART: function (e) {
    var i = this.node.convertToNodeSpaceAR(e.getLocation());
    this.yaoganwai.x = i.x;
    this.yaoganwai.y = i.y;
    this.yaoganwaiAnxiaX = i.x;
    this.yaoganwaiAnxiaY = i.y;
  },
  newGame: function () {
    var e;
    var i;
    var a;
    this.yaoganwaiPos = {
      x: this.yaoganwai.x,
      y: this.yaoganwai.y
    };
    if (1 == MainDate.GameType || 3 == MainDate.GameType || 2 == MainDate.GameType) {
      e = "map";
      i = "map";
      a = "daoju";
    } else if (4 == MainDate.GameType) {
      e = "dantiaomap";
      i = "dantiaomap";
      a = "daoju";
      this.MainCamera.x = 0;
      this.MainCamera.y = 200;
      this.touxiangkuang.active = false;
      this.gogameTime.getChildByName("dantiao").active = true;
      this.hengfuTishi = this.gogameTime.getChildByName("dantiao");
      cocoscreator.api_showTip("prefab/game/pipeijiemiandantiao", function (e) {
        var i = cc.instantiate(e);
        i.zIndex = 15;
        this.MainCameraUI.addChild(i);
      }.bind(this));
    } else if (5 == MainDate.GameType) {
      this.touxiangkuang.active = false;
      e = "map";
      i = "jianzaomoshi";
      a = "daojuquandi";
      this.gogameTime.getChildByName("quandi").active = true;
      this.hengfuTishi = this.gogameTime.getChildByName("quandi");
      cocoscreator.api_showTip("prefab/game/pipeijiemiandantiao", function (e) {
        var i = cc.instantiate(e);
        i.zIndex = 15;
        this.MainCameraUI.addChild(i);
      }.bind(this));
    } else if (6 == MainDate.GameType) {
      e = "duikangmap";
      i = "duikangmap";
      a = "daojuduikang";
      this.gogameTime.getChildByName("duikang1").active = true;
      this.hengfuTishi = this.gogameTime.getChildByName("duikang1");
      this.MainCamera.x = 0;
      this.MainCamera.y = -300;
      cocoscreator.api_showTip("prefab/game/pipeijiemianduikang", function (e) {
        var i = cc.instantiate(e);
        i.zIndex = 15;
        this.MainCameraUI.addChild(i);
      }.bind(this));
    } else if (7 == MainDate.GameType) {
      e = "dantiaomap";
      i = "dantiaomap";
      a = "daoju";
      this.MainCamera.x = 0;
      this.MainCamera.y = 200;
      this.touxiangkuang.active = false;
      this.gogameTime.getChildByName("dantiao").active = true;
      this.bociLab.active = true;
      this.bociNum = 1;
      this.bociLab.getComponent(cc.Label).string = "1/99";
      this.hengfuTishi = this.gogameTime.getChildByName("dantiao");
      cocoscreator.api_showTip("prefab/game/pipeijiemiandantiao", function (e) {
        var i = cc.instantiate(e);
        i.zIndex = 15;
        this.MainCameraUI.addChild(i);
      }.bind(this));
    } else if (8 == MainDate.GameType) {
      e = "tafangmap", i = "tafangmap", a = "daojutafang", this.MainCamera.x = 0, this.MainCamera.y = 200, this.shouwushijian.active = true, this.AD_ATM.active = true, this.gogameTime.getChildByName("tafang").active = true, this.hengfuTishi = this.gogameTime.getChildByName("tafang"), this.MainCamera.x = 0, this.MainCamera.y = -300, cocoscreator.api_showTip("prefab/game/pipeijiemiandantiao", function (e) {
        var i = cc.instantiate(e);
        i.zIndex = 15;
        this.MainCameraUI.addChild(i);
      }.bind(this));
    }
    this.hengfuTishi.Type = false;
    cocoscreator.api_showTip("prefab/" + e, function (e) {
      var a = cc.instantiate(e);
      this.map = a;
      this.mapPos.addChild(a);
      cc.loader.loadRes("json/" + i, function (e, i) {
        this.MapJson = i.json;
        this.shengcheng_xunlu_map();
        this.newmap();
        8 == MainDate.GameType || cocoscreator.api_showTip("prefab/game/xuanzerenwu", function (e) {
          var i = cc.instantiate(e);
          i.zIndex = 10;
          this.MainCameraUI.addChild(i);
        }.bind(this));
      }.bind(this));
    }.bind(this));
    cc.loader.loadRes("json/renwu", function (e, i) {
      this.renwuJson = i.json;
      this.renwuzhuangtai();
    }.bind(this));
    cc.loader.loadRes("json/guishengjitafang", function (e, i) {
      this.guishengjitafang = i.json[1];
      MainDate.tafangGuihpMax = this.guishengjitafang.hp;
    }.bind(this));
    cc.loader.loadRes("json/" + a, function (e, i) {
      this.daoJuJson = i.json;
      this.lingqujinbi.getComponent(cc.Label).string = "金币X" + 60 * this.daoJuJson[1].shengchanjinbi;
      this.fenxianglingqujinbi.getComponent(cc.Label).string = "金币X" + 60 * this.daoJuJson[1].shengchanjinbi;
    }.bind(this));
    this.fenxianglingqujinbi.active = false;
  },
  shengcheng_xunlu_map: function () {
    if (1 == MainDate.GameType || 2 == MainDate.GameType || 3 == MainDate.GameType || 5 == MainDate.GameType) {
      this.xunlumapArray = [];
      this.playermapArray = [];
      for (var e = 0; e < 50; e++) {
        var i = [];
        var a = [];
        for (var n = 0; n < 50; n++) {
          i.push(1);
          a.push(1);
        }
        this.xunlumapArray.push(i);
        this.playermapArray.push(a);
      }
    } else if (4 == MainDate.GameType || 7 == MainDate.GameType) {
      this.xunlumapArray = [];
      this.playermapArray = [];
      for (var t = 0; t < 20; t++) {
        var o = [];
        var s = [];
        for (var c = 0; c < 9; c++) {
          o.push(1);
          s.push(1);
        }
        this.xunlumapArray.push(o);
        this.playermapArray.push(s);
      }
    } else if (6 == MainDate.GameType) {
      this.xunlumapArray = [];
      this.playermapArray = [];
      for (var r = 0; r < 13; r++) {
        var u = [];
        var h = [];
        for (var g = 0; g < 9; g++) {
          u.push(1);
          h.push(1);
        }
        this.xunlumapArray.push(u);
        this.playermapArray.push(h);
      }
    } else if (8 == MainDate.GameType) {
      this.xunlumapArray = [];
      this.playermapArray = [];
      for (var d = 0; d < 20; d++) {
        var m = [];
        var l = [];
        for (var p = 0; p < 9; p++) {
          m.push(1);
          l.push(1);
        }
        this.xunlumapArray.push(m);
        this.playermapArray.push(l);
      }
    }
  },
  chuangjian_gui: function () {
    var e;
    this.player.active = true;
    if (2 == MainDate.GameType) {
      e = "prefab/game/player/playergui" + this.guiXuhao;
    } else {
      1 != MainDate.GameType && 3 != MainDate.GameType && 4 != MainDate.GameType && 5 != MainDate.GameType && 7 != MainDate.GameType || (e = "prefab/game/gui");
    }
    cocoscreator.api_showTip(e, function (e) {
      var i = cc.instantiate(e);
      this.gui = i;
      if (1 == MainDate.GameType || 3 == MainDate.GameType) {
        var a = this.huixuedian[Math.floor(this.huixuedian.length * Math.random())];
        i.x = a % 50 * 90 - 2205;
        i.y = 90 * (50 - Math.floor(a / 50) - 1) - 2205;
        this.gui.zishenPos = {
          x: a % 50,
          y: 50 - Math.floor(a / 50) - 1
        };
        this.player.getChildByName("player" + MainDate.renwuXuhao).active = true;
        this.player = this.player.getChildByName("player" + MainDate.renwuXuhao);
      } else if (2 == MainDate.GameType) {
        this.player.destroy();
        this.player = this.gui;
        var n = this.huixuedian[Math.floor(this.huixuedian.length * Math.random())];
        i.x = n % 50 * 90 - 2205;
        i.y = 90 * (50 - Math.floor(n / 50) - 1) - 2205;
      } else if (4 == MainDate.GameType || 7 == MainDate.GameType) {
        this.player.getChildByName("player" + MainDate.renwuXuhao).active = true;
        this.player = this.player.getChildByName("player" + MainDate.renwuXuhao);
        this.player.x = 0;
        var t = this.huixuedian[Math.floor(this.huixuedian.length * Math.random())];
        i.x = t % 9 * 90 - 360;
        i.y = 90 * (20 - Math.floor(t / 9) - 1) - 855;
        this.gui.zishenPos = {
          x: t % 9,
          y: 20 - Math.floor(t / 9) - 1
        };
      } else if (5 == MainDate.GameType) {
        this.player.getChildByName("player" + MainDate.renwuXuhao).active = true;
        this.player = this.player.getChildByName("player" + MainDate.renwuXuhao);
        var o = this.huixuedian[Math.floor(this.huixuedian.length * Math.random())];
        i.x = o % 50 * 90 - 2205;
        i.y = 90 * (50 - Math.floor(o / 50) - 1) - 2205;
        this.gui.zishenPos = {
          x: o % 50,
          y: 50 - Math.floor(o / 50) - 1
        };
        this.zidongshangchuang();
      }
      this.guiweizhi.addChild(i);
      this.xuanzerenwu = true;
    }.bind(this));
  },
  chuangjian_gui_tafang: function (e, i) {
    var a = this;
    if ("Game" == MainDate.scene) {
      if (this.tafanglv % 5 == 0 && 0 != this.tafanglv) {
        cocoscreator.api_showTip("prefab/game/tafangGui", function (e) {
          if ("Game" == MainDate.scene) {
            var a = cc.instantiate(e);
            var n = this.huixuedian[Math.floor(this.huixuedian.length * Math.random())];
            a.x = n % 9 * 90 - 360;
            a.y = 90 * (20 - Math.floor(n / 9) - 1) - 855;
            a.scale = 1.3;
            a.zIndex = i;
            a.boss = true;
            a.zishenPos = {
              x: n % 9,
              y: 20 - Math.floor(n / 9) - 1
            };
            this.guiweizhi.addChild(a);
            this.gogameTime.active = true;
            this.guixingdongTime = 15;
            this.tafanglv++;
          }
        }.bind(this));
      } else {
        cocoscreator.api_showTip("prefab/game/tafangGui", function (e) {
          if ("Game" == MainDate.scene) {
            var a = cc.instantiate(e);
            var n = this.huixuedian[Math.floor(this.huixuedian.length * Math.random())];
            a.x = n % 9 * 90 - 360;
            a.y = 90 * (20 - Math.floor(n / 9) - 1) - 855;
            a.zIndex = i;
            a.boss = false;
            a.zishenPos = {
              x: n % 9,
              y: 20 - Math.floor(n / 9) - 1
            };
            this.guiweizhi.addChild(a);
          }
        }.bind(this));
        setTimeout(function () {
          if ("Game" == MainDate.scene) {
            i--;
            if (--e >= 0) {
              a.chuangjian_gui_tafang(e, i);
            } else {
              a.gogameTime.active = true, a.guixingdongTime = 15, a.tafanglv++;
            }
          }
        }, 1e3);
      }
    }
  },
  xuanzegui_dk: function () {
    var e = this;
    this.player.active = true;
    this.player.getChildByName("player" + MainDate.renwuXuhao).active = true;
    this.player = this.player.getChildByName("player" + MainDate.renwuXuhao);
    this.player.x = 0;
    this.player.y = 90 * (13 - Math.floor(67 / 9) - 1) - 855;
    cc.loader.loadRes("image/game/gui/touxiang" + this.guiXuhao, cc.SpriteFrame, function (i, a) {
      e.guitouxiang.getComponent(cc.Sprite).spriteFrame = a;
    });
    setTimeout(function () {
      e.xuanzerenwu = true;
      PlayerAI_dk.jianzao_youxiji();
      Player.chuangjian_youxiji_dk();
    }, 200);
    this.zidongshangchuang();
  },
  tafang_newGame: function () {
    var e = this;
    this.player.active = true;
    this.player.getChildByName("player" + MainDate.renwuXuhao).active = true;
    this.player = this.player.getChildByName("player" + MainDate.renwuXuhao);
    this.player.x = 0;
    this.player.y = 90 * (13 - Math.floor(67 / 9) - 1) - 855;
    setTimeout(function () {
      e.xuanzerenwu = true;
    }, 200);
    this.zidongshangchuang();
  },
  newmap: function () {
    var e = this;
    var i = function (i) {
      var a = e.MapJson[Object.keys(e.MapJson)[i]];
      if (9 == a.type) {
        cocoscreator.api_showTip("prefab/fknei", function (e) {
          var i;
          var n = cc.instantiate(e);
          if (1 == MainDate.GameType || 2 == MainDate.GameType || 3 == MainDate.GameType || 5 == MainDate.GameType) {
            n.x = a.dimianxuhao % 50 * 90 - 2205;
            n.y = 90 * (50 - Math.floor(a.dimianxuhao / 50) - 1) - 2205;
          } else if (4 == MainDate.GameType || 7 == MainDate.GameType) {
            n.x = a.dimianxuhao % 9 * 90 - 360;
            n.y = 90 * (20 - Math.floor(a.dimianxuhao / 9) - 1) - 855;
          } else if (6 == MainDate.GameType) {
            n.x = a.dimianxuhao % 9 * 90 - 360, n.y = 90 * (13 - Math.floor(a.dimianxuhao / 9) - 1) - 855;
          }
          this.map.addChild(n);
          i = 2 == MainDate.GameType ? "prefab/game/men" : "prefab/game/men_2";
          cocoscreator.api_showTip(i, function (e) {
            var i = cc.instantiate(e);
            if (1 == a.fangxiang) {
              i.x = n.x;
              i.y = n.y + 90;
            } else if (2 == a.fangxiang) {
              i.x = n.x;
              i.y = n.y - 90;
            } else if (3 == a.fangxiang) {
              i.x = n.x - 90;
              i.y = n.y;
            } else if (4 == a.fangxiang) {
              i.x = n.x + 90, i.y = n.y;
            }
            if (1 == MainDate.GameType || 2 == MainDate.GameType || 3 == MainDate.GameType) {
              i.zuobiaoPos = {
                x: a.dimianxuhao % 50,
                y: 50 - Math.floor(a.dimianxuhao / 50) - 1
              };
            } else if (4 == MainDate.GameType || 7 == MainDate.GameType) {
              i.zuobiaoPos = {
                x: a.dimianxuhao % 9,
                y: 20 - Math.floor(a.dimianxuhao / 9) - 1
              };
            } else {
              6 == MainDate.GameType && (i.zuobiaoPos = {
                x: a.dimianxuhao % 9,
                y: 13 - Math.floor(a.dimianxuhao / 9) - 1
              });
            }
            i.Pos = {
              x: n.x,
              y: n.y
            };
            i.bianzu = a.bianzu;
            i.name = "men";
            this.props.addChild(i);
            this.menArr.push(i);
          }.bind(this));
        }.bind(e));
      } else if (10 == a.type) {
        cocoscreator.api_showTip("prefab/fknei", function (e) {
          var i = cc.instantiate(e);
          if (1 == MainDate.GameType || 2 == MainDate.GameType || 3 == MainDate.GameType || 5 == MainDate.GameType) {
            i.x = a.dimianxuhao % 50 * 90 - 2205;
            i.y = 90 * (50 - Math.floor(a.dimianxuhao / 50) - 1) - 2205;
          } else if (4 == MainDate.GameType || 7 == MainDate.GameType) {
            i.x = a.dimianxuhao % 9 * 90 - 360;
            i.y = 90 * (20 - Math.floor(a.dimianxuhao / 9) - 1) - 855;
          } else if (6 == MainDate.GameType) {
            i.x = a.dimianxuhao % 9 * 90 - 360;
            i.y = 90 * (13 - Math.floor(a.dimianxuhao / 9) - 1) - 855;
          } else if (8 == MainDate.GameType) {
            i.x = a.dimianxuhao % 9 * 90 - 360, i.y = 90 * (20 - Math.floor(a.dimianxuhao / 9) - 1) - 855;
          }
          this.map.addChild(i);
          i.name = "chuang";
          cocoscreator.api_showTip("prefab/game/chuang", function (e) {
            var i = cc.instantiate(e);
            if (1 == MainDate.GameType || 2 == MainDate.GameType || 3 == MainDate.GameType || 5 == MainDate.GameType) {
              i.x = a.dimianxuhao % 50 * 90 - 2205;
              i.y = 90 * (50 - Math.floor(a.dimianxuhao / 50) - 1) - 2205;
              i.zuobiaoPos = {
                x: a.dimianxuhao % 50,
                y: 50 - Math.floor(a.dimianxuhao / 50) - 1
              };
            } else if (4 == MainDate.GameType || 7 == MainDate.GameType) {
              i.x = a.dimianxuhao % 9 * 90 - 360;
              i.y = 90 * (20 - Math.floor(a.dimianxuhao / 9) - 1) - 855;
              i.zuobiaoPos = {
                x: a.dimianxuhao % 9,
                y: 20 - Math.floor(a.dimianxuhao / 9) - 1
              };
            } else if (6 == MainDate.GameType) {
              i.x = a.dimianxuhao % 9 * 90 - 360;
              i.y = 90 * (13 - Math.floor(a.dimianxuhao / 9) - 1) - 855;
              i.zuobiaoPos = {
                x: a.dimianxuhao % 9,
                y: 13 - Math.floor(a.dimianxuhao / 9) - 1
              };
            } else if (8 == MainDate.GameType) {
              i.x = a.dimianxuhao % 9 * 90 - 360, i.y = 90 * (20 - Math.floor(a.dimianxuhao / 9) - 1) - 855, i.zuobiaoPos = {
                x: a.dimianxuhao % 9,
                y: 20 - Math.floor(a.dimianxuhao / 9) - 1
              };
            }
            this.props.addChild(i);
            i.bianzu = a.bianzu;
            this.chuangArr.push(i);
            this.shangchuangArr.push(i);
            i.getChildByName("shangchuang").on(cc.Node.EventType.TOUCH_START && cc.Node.EventType.TOUCH_END, function () {
              this.butshangchuang(i);
            }.bind(this));
          }.bind(this));
        }.bind(e));
      } else if (11 == a.type) {
        cocoscreator.api_showTip("prefab/huixue", function (e) {
          var i = cc.instantiate(e);
          if (1 == MainDate.GameType || 2 == MainDate.GameType || 3 == MainDate.GameType || 5 == MainDate.GameType) {
            i.x = a.dimianxuhao % 50 * 90 - 2205;
            i.y = 90 * (50 - Math.floor(a.dimianxuhao / 50) - 1) - 2205;
          } else if (4 == MainDate.GameType || 7 == MainDate.GameType) {
            i.x = a.dimianxuhao % 9 * 90 - 360;
            i.y = 90 * (20 - Math.floor(a.dimianxuhao / 9) - 1) - 855;
          } else if (6 == MainDate.GameType) {
            i.x = a.dimianxuhao % 9 * 90 - 360;
            i.y = 90 * (13 - Math.floor(a.dimianxuhao / 9) - 1) - 855;
          } else if (8 == MainDate.GameType) {
            i.x = a.dimianxuhao % 9 * 90 - 360, i.y = 90 * (20 - Math.floor(a.dimianxuhao / 9) - 1) - 855;
          }
          this.map.addChild(i);
        }.bind(e));
        e.huixuedian.push(a.dimianxuhao);
      } else if (3 == a.type) {
        cocoscreator.api_showTip("prefab/fkqiang", function (e) {
          var i = cc.instantiate(e);
          if (1 == MainDate.GameType || 2 == MainDate.GameType || 3 == MainDate.GameType || 5 == MainDate.GameType) {
            i.x = a.dimianxuhao % 50 * 90 - 2205;
            i.y = 90 * (50 - Math.floor(a.dimianxuhao / 50) - 1) - 2205;
            this.xunlumapArray[a.dimianxuhao % 50][50 - Math.floor(a.dimianxuhao / 50) - 1] = 0;
            this.playermapArray[a.dimianxuhao % 50][50 - Math.floor(a.dimianxuhao / 50) - 1] = 0;
          } else if (4 == MainDate.GameType || 7 == MainDate.GameType) {
            i.x = a.dimianxuhao % 9 * 90 - 360;
            i.y = 90 * (20 - Math.floor(a.dimianxuhao / 9) - 1) - 855;
            this.xunlumapArray[a.dimianxuhao % 9][20 - Math.floor(a.dimianxuhao / 9) - 1] = 0;
            this.playermapArray[a.dimianxuhao % 9][20 - Math.floor(a.dimianxuhao / 9) - 1] = 0;
          } else if (6 == MainDate.GameType) {
            i.x = a.dimianxuhao % 9 * 90 - 360;
            i.y = 90 * (13 - Math.floor(a.dimianxuhao / 9) - 1) - 855;
            this.xunlumapArray[a.dimianxuhao % 9][13 - Math.floor(a.dimianxuhao / 9) - 1] = 0;
            this.playermapArray[a.dimianxuhao % 9][13 - Math.floor(a.dimianxuhao / 9) - 1] = 0;
          } else if (8 == MainDate.GameType) {
            i.x = a.dimianxuhao % 9 * 90 - 360, i.y = 90 * (20 - Math.floor(a.dimianxuhao / 9) - 1) - 855, this.xunlumapArray[20 - Math.floor(a.dimianxuhao / 9) - 1][a.dimianxuhao % 9] = 0, this.playermapArray[20 - Math.floor(a.dimianxuhao / 9) - 1][a.dimianxuhao % 9] = 0;
          }
          this.map.addChild(i);
        }.bind(e));
      } else if (13 == a.type) {
        cocoscreator.api_showTip("prefab/fkqiangwai", function (e) {
          var i = cc.instantiate(e);
          if (!(1 != MainDate.GameType && 2 != MainDate.GameType && 3 != MainDate.GameType && 5 != MainDate.GameType)) {
            i.x = a.dimianxuhao % 50 * 90 - 2205;
            i.y = 90 * (50 - Math.floor(a.dimianxuhao / 50) - 1) - 2205;
            this.xunlumapArray[a.dimianxuhao % 50][50 - Math.floor(a.dimianxuhao / 50) - 1] = 0;
            this.playermapArray[a.dimianxuhao % 50][50 - Math.floor(a.dimianxuhao / 50) - 1] = 0;
          }
          this.map.addChild(i);
        }.bind(e));
      } else {
        2 == a.type && cocoscreator.api_showTip("prefab/fknei", function (e) {
          var i = cc.instantiate(e);
          if (1 == MainDate.GameType || 2 == MainDate.GameType || 3 == MainDate.GameType || 5 == MainDate.GameType) {
            i.x = a.dimianxuhao % 50 * 90 - 2205;
            i.y = 90 * (50 - Math.floor(a.dimianxuhao / 50) - 1) - 2205;
          } else if (4 == MainDate.GameType || 7 == MainDate.GameType) {
            i.x = a.dimianxuhao % 9 * 90 - 360;
            i.y = 90 * (20 - Math.floor(a.dimianxuhao / 9) - 1) - 855;
          } else if (6 == MainDate.GameType) {
            i.x = a.dimianxuhao % 9 * 90 - 360;
            i.y = 90 * (13 - Math.floor(a.dimianxuhao / 9) - 1) - 855;
          } else if (8 == MainDate.GameType) {
            i.x = a.dimianxuhao % 9 * 90 - 360, i.y = 90 * (20 - Math.floor(a.dimianxuhao / 9) - 1) - 855;
          }
          this.map.addChild(i);
          i.bianzu = a.bianzu;
          i.dimianxuhao = a.dimianxuhao;
          if (1 == MainDate.GameType || 3 == MainDate.GameType || 4 == MainDate.GameType || 6 == MainDate.GameType || 7 == MainDate.GameType || 8 == MainDate.GameType) {
            i.on(cc.Node.EventType.TOUCH_START && cc.Node.EventType.TOUCH_END, function () {
              this.butfangjianNei(i);
            }.bind(this));
          } else {
            5 == MainDate.GameType && i.on(cc.Node.EventType.TOUCH_START && cc.Node.EventType.TOUCH_END, function () {
              a.dimianxuhao % 50 == this.gui.zishenPos.x && 50 - Math.floor(a.dimianxuhao / 50) - 1 == this.gui.zishenPos.y || this.butfangjianNei(i);
            }.bind(this));
          }
        }.bind(e));
      }
    };
    for (var a = 0; a < Object.keys(this.MapJson).length; a++) {
      i(a);
    }
  },
  zidongshangchuang: function () {
    if (!Player.chuang) {
      var e = this.shangchuangArr[Math.floor(this.shangchuangArr.length * Math.random())];
      var i = null;
      for (var a = 0; a < this.shangchuangArr.length; a++) {
        var n = (this.player.x - this.shangchuangArr[a].x) * (this.player.x - this.shangchuangArr[a].x) + (this.player.y - this.shangchuangArr[a].y) * (this.player.y - this.shangchuangArr[a].y);
        if (i) {
          if (i > n) {
            e = this.shangchuangArr[a], i = n;
          }
        } else {
          e = this.shangchuangArr[a];
          i = n;
        }
      }
      if (4 != MainDate.GameType && 6 != MainDate.GameType && 7 != MainDate.GameType) {
        this.MainCamera.x = e.x;
        this.MainCamera.y = e.y;
      }
      this.butshangchuang(e);
    }
  },
  butshangchuang: function (e) {
    var i = this;
    Player.shangchuanType = true;
    this.player.opacity = 0;
    Player.chuang = e;
    Player.bianzu = e.bianzu;
    e.getChildByName("shangchuang").active = false;
    this.yaoganwai.active = false;
    e.getChildByName("ren" + MainDate.renwuXuhao).active = true;
    setTimeout(function () {
      e.on(cc.Node.EventType.TOUCH_START && cc.Node.EventType.TOUCH_END, function () {
        this.tanchuang("chuang", e.bianzu);
      }.bind(i));
    }, 100);
    this.weixiuBut.parent.active = true;
    if (5 == MainDate.GameType) {
      ;
    } else if (8 == MainDate.GameType) {
      this.weixiuBut.parent.active = false;
    } else {
      for (var a = 0; a < this.menArr.length; a++) {
        if (this.menArr[a].bianzu == e.bianzu) {
          Player.men = this.menArr[a];
          cc.tween(this.menArr[a]).to(.7, {
            x: this.menArr[a].Pos.x,
            y: this.menArr[a].Pos.y
          }).start();
          this.xunlumapArray[this.menArr[a].zuobiaoPos.x][this.menArr[a].zuobiaoPos.y] = 0;
          this.menGuanbi.push(this.menArr[a]);
          this.shengji_Arr.push(Player.men);
        }
      }
      if (6 == MainDate.GameType) {
        Player.menX = Player.men.x;
        Player.menY = Player.men.y;
      }
    }
    this.shengji_Arr.push(e);
    for (var n = 0; n < this.map.children.length; n++) {
      if (this.map.children[n].bianzu == Player.bianzu && "nei" == this.map.children[n].name) {
        this.map.children[n].getChildByName("fangzhitishi").type = true;
        Player.fk_fangzhitishiArr.push(this.map.children[n].getChildByName("fangzhitishi"));
      }
    }
  },
  butfangjianNei: function (e) {
    if (e.bianzu == Player.bianzu) {
      this.xuanzhongFK = e;
      this.tanchuang("jianzao", e.bianzu);
    }
  },
  tanchuang: function (e, i) {
    if (!this.gameOver && !this.shouzhiMoveMap && Player.shangchuanType && i == Player.bianzu) {
      var a = "";
      switch (e) {
        case "paotai":
          a = "prefab/game/paotaiTanchuang";
          break;
        case "youxiji":
          a = "prefab/game/youxijiTanchuang";
          break;
        case "men":
          a = "prefab/game/menTanchuang";
          break;
        case "chuang":
          if (Player.chuangLever >= 9) {
            return void this.fangzhitanchuang("床铺已经到达最高等级");
          }
          a = "prefab/game/chuangTanchuang";
          break;
        case "jianzao":
          a = "prefab/game/jianzao";
          break;
        case "weixiutai":
          a = "prefab/game/weixiutaiTanchuang";
          break;
        case "kuangshi":
          a = "prefab/game/kuangTanchuang";
          break;
        case "daoju":
          a = "prefab/game/daojuTanchuang";
      }
      cocoscreator.api_showTip(a, function (e) {
        var i = cc.instantiate(e);
        this.MainCameraUI.addChild(i);
      }.bind(this));
    }
  },
  but_fangzhigui: function () {
    Player.butfangzhigui();
  },
  but_weixiu: function () {
    this.weixiuBut.opacity = 150;
    Player.butweixiu();
  },
  but_fenxiangJin: function () {
    var e = this;
    qqUtil_fenxiang.shareTo(function () {
      Player.jinbiArr += 60 * e.daoJuJson[Player.chuangLever].shengchanjinbi;
      e.jinbiNum.getComponent(cc.Label).string = Player.jinbiArr;
      e.fangzhitanchuang("领取成功");
      e.shareTime_qq = ext.shareTime;
      e.fenxiangjinbi.active = false;
    }, function () {
      e.fangzhitanchuang("领取失败");
    });
  },
  but_kuangbao: function () {
    this.kuangbaobut.opacity = 150;
    playerGui.but_kuangbao();
  },
  but_zhenhan: function () {
    this.zhenhanbut.opacity = 150;
    playerGui.but_zhanhan();
  },
  update: function (e) {
    var i = this;
    if (!this.pipeijiemian && !this.gameOver && this.xuanzerenwu) {
      this.shexiangji_gensui_player();
      if (this.guixingdongTime > 0) {
        this.guixingdongTime -= e;
        var a = Math.floor(this.guixingdongTime);
        a < 10 && a < this.gogameTime.getChildByName("gogameTime").getComponent(cc.Label).string && music.api_audioPlay(MainDate.mp3.daojishi);
        this.gogameTime.getChildByName("gogameTime").getComponent(cc.Label).string = a;
        if (this.guixingdongTime <= 0 && (1 == MainDate.GameType || 3 == MainDate.GameType || 4 == MainDate.GameType || 5 == MainDate.GameType || 7 == MainDate.GameType)) {
          this.gogameTime.active = false;
          this.zidongshangchuang();
          this.gui.getComponent("gui").guixingdong();
        } else if (this.guixingdongTime <= 0 && 2 == MainDate.GameType) {
          this.guijinengbut.active = true;
          this.gogameTime.active = false;
          var n = [];
          for (var t = 0; t < this.huixuedian.length; t++) {
            var o = {
              x: this.huixuedian[t] % 50 * 90 - 2205,
              y: 90 * (50 - Math.floor(this.huixuedian[t] / 50) - 1) - 2205
            };
            n.push(o);
          }
          this.player.getComponent("playerGui").Playerxingdong(n);
          this.yaoganwai.active = true;
        } else if (this.guixingdongTime <= 0 && 6 == MainDate.GameType) {
          this.hengfuTishi.active = false;
          this.gogameTime.getChildByName("duikang2").active = true;
          this.gogameTime.getChildByName("gogameTime").active = false;
          this.gogameTime.getChildByName("shuzidi").active = false;
          setTimeout(function () {
            i.gogameTime.active = false;
          }, 1500);
          this.fangzhiguiBut.active = true;
        } else if (this.guixingdongTime <= 0 && 8 == MainDate.GameType) {
          this.gogameTime.active = false;
          var s = Math.floor(this.tafanglv * Game.guishengjitafang["pcs+"] + Game.guishengjitafang.pcs);
          MainDate.tafangGuihpMax = Math.floor(MainDate.tafangGuihpMax * (1 + this.guishengjitafang["hp+"]));
          this.chuangjian_gui_tafang(s, 5e3);
        }
      }
      if (8 == MainDate.GameType) {
        this.guiXuhaoTime -= e;
        if (this.guiXuhaoTime < 0) {
          this.guiXuhaoTime = 180, this.guiXuhao = Math.floor(3 * Math.random() + 1);
        }
      }
      if (this.gogameTime.active && this.hengfuTishi.Type) {
        this.hengfuTishi.opacity -= 3;
        this.hengfuTishi.opacity <= 0 && (this.hengfuTishi.Type = false);
      } else if (this.gogameTime.active && !this.hengfuTishi.Type) {
        this.hengfuTishi.opacity += 3, this.hengfuTishi.opacity >= 255 && (this.hengfuTishi.Type = true);
      }
      this.gamekaishiTime += e;
      var c = Math.floor(this.gamekaishiTime / 60);
      var r = Math.floor(this.gamekaishiTime - 60 * c);
      c < 10 && (c = "0" + c);
      r < 10 && (r = "0" + r);
      this.shouwushijian.getComponent(cc.Label).string = "守护时间:" + c + ":" + r;
      if (this.luzhikaishiType) {
        this.gameluzhiTime += e;
        var u = Math.floor(this.gameluzhiTime / 60);
        var h = Math.floor(this.gameluzhiTime - 60 * u);
        u < 10 && (u = "0" + u);
        h < 10 && (h = "0" + h);
        this.luzhishijianDisplay.getComponent(cc.Label).string = u + ":" + h;
        this.gameluzhiTime > 280 && this.but_fenxiangluping();
      } else {
        this.luzhishijianDisplay.getComponent(cc.Label).string = "";
      }
    }
  },
  shexiangji_gensui_player: function () {
    var e = function () {
      if (this.MainCamera.x > this.player.x && this.player.x > -1940) {
        this.MainCamera.x = this.player.x;
      } else if (this.MainCamera.x < this.player.x && this.player.x < 1940) {
        this.MainCamera.x = this.player.x;
      } else if (this.MainCamera.x > this.player.x && this.player.x < -1940) {
        this.MainCamera.x = -1940;
      } else {
        this.MainCamera.x < this.player.x && this.player.x > 1940 && (this.MainCamera.x = 1940);
      }
      if (this.MainCamera.y > this.player.y && this.player.y > -1600) {
        this.MainCamera.y = this.player.y;
      } else if (this.MainCamera.y < this.player.y && this.player.y < 1600) {
        this.MainCamera.y = this.player.y;
      } else if (this.MainCamera.y > this.player.y && this.player.y < -1600) {
        this.MainCamera.y = -1600;
      } else {
        this.MainCamera.y < this.player.y && this.player.y > 1600 && (this.MainCamera.y = 1600);
      }
    }.bind(this);
    if (1 != MainDate.GameType && 3 != MainDate.GameType || Player.shangchuanType) {
      2 == MainDate.GameType && this.player.getComponent("playerGui") && this.player.getComponent("playerGui").xingdong && e();
    } else {
      e();
    }
  },
  renwuzhuangtai: function () {
    if (!this.gameOver && this.xuanzerenwu && 8 != MainDate.GameType && !MainDate.wuxianjinbi) {
      this.renwubutt.active = false;
      if (!this.renwuJson[this.renwuwanchengNum]) {
        this.renwumiaoshu.active = false;
        return void (this.lingqudi.active = false);
      }
      this.lingqudi.active = true;
      this.renwumiaoshu.getComponent(cc.Label).string = this.renwuJson[this.renwuwanchengNum].type;
      Player.men && Player.men.name && Player.chuangLever >= this.renwuJson[this.renwuwanchengNum].chuang && Player.men.getComponent("men").mendengji >= this.renwuJson[this.renwuwanchengNum].men && (this.renwubutt.active = true);
    }
  },
  lingqurenwujiangli: function () {
    if (!this.gameOver) {
      MainDate.PlayerData.juzi += this.renwuJson[this.renwuwanchengNum].juzi;
      MainDate.PlayerDataSetObject();
      this.renwuwanchengNum++;
      this.renwuzhuangtai();
    }
  },
  fangzhitanchuang: function (e) {
    this.gameOver || cocoscreator.api_showTip("prefab/game/tishikuang", function (i) {
      var a = cc.instantiate(i);
      a.getChildByName("tishiwenzi").getComponent(cc.Label).string = e;
      a.scale = 0;
      a.y = 455;
      this.tishikuang.addChild(a);
      cocoscreator.api_panetoff(a);
    }.bind(this));
  },
  but_fanhuianniu: function () {
    music.api_audioPlay(MainDate.mp3.anniu);
    cocoscreator.api_showTip("prefab/game/GameZanting", function (e) {
      var i = cc.instantiate(e);
      this.MainCameraUI.addChild(i);
    }.bind(this));
  },
  but_chuangjiantikuanji_tafang: function () {
    adUtils.executeShowVideo(function () {
      Player.chuangjiantikuanji_tafang();
    });
  },
  but_kaishiluping: function () {
    music.api_audioPlay(MainDate.mp3.anniu);
    this.luzhikaishiBut.active = false;
    this.luzhijieshuBut.active = true;
    this.luzhikaishiType = true;
    this.gameluzhiTime = 0;
  },
  but_fenxiangluping: function () {
    music.api_audioPlay(MainDate.mp3.anniu);
    this.luzhikaishiBut.active = true;
    this.luzhijieshuBut.active = false;
    this.luzhikaishiType = false;
    this.gameluzhiTime < 4 && this.fangzhitanchuang("录制时间小于4s");
  },
  but_shouyi: function () {
    var e = this;
    adUtils.executeShowVideo(function () {
      e.shouyi_Beishu = 2;
      e.shouyiBut.active = false;
    });
  },
  but_huodejinbi: function () {
    var e = this;
    adUtils.executeShowVideo(function () {
      Player.jinbiArr += 60 * e.daoJuJson[Player.chuangLever].shengchanjinbi;
      e.jinbiNum.getComponent(cc.Label).string = Player.jinbiArr;
    });
  },
  start: function () {
    adUtils.executeStartRecorder();
    adUtils.executeShowGameAdvertising(true);
  }
});
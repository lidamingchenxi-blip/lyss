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
    player1: cc.Node,
    player2: cc.Node,
    player3: cc.Node,
    player4: cc.Node,
    player5: cc.Node,
    player6: cc.Node
  },
  onLoad: function () {
    var e = this;
    this.bangdinggeziArr = [];
    this.fangzhiPaotai = [];
    this.playerAIchuang = null;
    this.youxiji = null;
    this.mengyandengji = null;
    this.mengyan_gongji = null;
    this.mengyan_gongsu = null;
    this.mengyan_shengming = null;
    this.player_xianshi();
    window.PlayerAI_dk = this;
    this.bianzu = 1;
    this.guiXuhao = Math.floor(3 * Math.random() + 1);
    this.jinbiArr = 0;
    this.shandianArr = 0;
    this.chuang_zhuanqian_Time = 1;
    this.chuang_dengji = 1;
    this.men_dengji = 1;
    this.youxiji_dengji = 1;
    this.gui_dengji = 1;
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
    this.zhixingTime = MainDate.gamepeizhiJson.zhixingTime_dk;
    cc.loader.loadRes("json/duikangguilv", function (e, i) {
      this.duikangguilvJson = i.json;
    }.bind(this));
    setTimeout(function () {
      cc.loader.loadRes("json/daojuduikang1", function (e, i) {
        this.daojuduikang1 = i.json;
        this.newGame();
      }.bind(e));
    }, 200);
  },
  player_yincang: function () {
    this.player1.active = false;
    this.player2.active = false;
    this.player3.active = false;
    this.player4.active = false;
    this.player5.active = false;
    this.player6.active = false;
  },
  newGame: function () {
    for (var e = 0; e < Game.chuangArr.length; e++) {
      1 == Game.chuangArr[e].bianzu && (this.playerAIchuang = Game.chuangArr[e]);
    }
    this.player_fangjianjianzao = [];
    this.playerAIchuang.getChildByName("ren" + this.node.pifu).active = true;
    this.playerAIchuang.getChildByName("shangchuang").active = false;
    for (var i = 0; i < Game.menArr.length; i++) {
      if (Game.menArr[i].bianzu == this.playerAIchuang.bianzu) {
        this.playerAImen = Game.menArr[i];
        this.playerAImenX = this.playerAImen.x;
        this.playerAImenY = this.playerAImen.y;
        cc.tween(Game.menArr[i]).to(.7, {
          x: Game.menArr[i].Pos.x,
          y: Game.menArr[i].Pos.y
        }).start();
        Game.menGuanbi.push(Game.menArr[i]);
        this.kuangjinbi = 1;
        this.player_yincang();
        this.bangdinggezi();
        this.vis = true;
      }
    }
  },
  bangdinggezi: function () {
    this.bangdinggeziArr = [];
    for (var e = 0; e < Game.map.children.length; e++) {
      Game.map.children[e].bianzu == this.playerAIchuang.bianzu && "nei" == Game.map.children[e].name && this.bangdinggeziArr.push(Game.map.children[e]);
    }
  },
  player_xianshi: function () {
    if (1 == this.node.pifu) {
      this.player1.active = true;
    } else if (2 == this.node.pifu) {
      this.player2.active = true;
    } else if (3 == this.node.pifu) {
      this.player3.active = true;
    } else if (4 == this.node.pifu) {
      this.player4.active = true;
    } else if (5 == this.node.pifu) {
      this.player5.active = true;
    } else {
      6 == this.node.pifu && (this.player6.active = true);
    }
  },
  butfangzhigui: function () {
    cocoscreator.api_showTip("prefab/game/dk/npc_dk", function (e) {
      var i = cc.instantiate(e);
      i.y = this.playerAImenY - 110;
      var a = 1;
      Math.random() < .5 && (a = -1);
      i.x = this.playerAImenX + 200 * a;
      i.bianzu = this.bianzu;
      i.pifu = this.guiXuhao;
      i.dengji = 1;
      i.yisu = 2;
      i.gongji = this.duikangguilvJson[1].ad;
      i.hp = this.duikangguilvJson[1].hp;
      i.gongjisudu = 1;
      this.mengyan_gongjiNum >= 1 && (i.gongji = 1.2 * i.gongji);
      this.mengyan_gongsuNum >= 1 && (i.gongjisudu -= .3);
      this.mengyan_shengmingNum >= 1 && (i.hp = 1.6 * i.hp);
      Game.guiweizhi.addChild(i);
    }.bind(this));
  },
  update: function (e) {
    if (!Game.gameOver && Game.xuanzerenwu) {
      if (this.playerAIchuang && this.playerAIchuang.isValid) {
        this.chuang_zhuanqian_Time -= e, this.chuang_zhuanqian_Time < 0 && (this.chuang_zhuanqian_Time = 1, this.jinbiArr += Game.daoJuJson[this.chuang_dengji].shengchanjinbi, cocoscreator.api_showTip("prefab/game/huodeziyuan", function (e) {
          var i = cc.instantiate(e);
          i.getChildByName("jinbi").active = true;
          i.getChildByName("shandian").active = false;
          i.getChildByName("jinbi").getComponent(cc.Label).string = " +" + Game.daoJuJson[this.chuang_dengji].shengchanjinbi;
          i.x = this.playerAIchuang.x;
          i.y = this.playerAIchuang.y;
          Game.props.addChild(i);
          cc.tween(i).to(1.5, {
            y: i.y + 80,
            scale: .4
          }).call(function () {
            i.destroy();
          }).start();
          cc.tween(this.playerAIchuang).to(.2, {
            scale: .8
          }).to(.1, {
            scale: 1
          }).start();
        }.bind(this)));
      }
      this.zhixingTime -= e;
      if (this.zhixingTime <= 0) {
        this.zhixingTime = MainDate.gamepeizhiJson.zhixingTime_dk + 1 - 2 * Math.random(), this.jianzao_jianzhu(), this.shengji_jianzhu(), 100 * Math.random() < MainDate.gamepeizhiJson.chubing_dk && this.chuangjiangui();
      }
    }
  },
  jianzao_jianzhu: function () {
    if (!(this.bangdinggeziArr.length <= 0)) {
      if (this.paotaiNum < 4 && this.jinbiArr >= 8) {
        this.jinbiArr -= 8;
        var e = this.juliMin();
        if (e) {
          this.paotaiNum++;
          var i = this.bangdinggeziArr.indexOf(e);
          this.bangdinggeziArr.splice(i, 1);
          cocoscreator.api_showTip("prefab/game/dk/paotai", function (i) {
            var a = cc.instantiate(i);
            a.x = e.x;
            a.y = e.y;
            a.bianzu = this.bianzu;
            Game.props.addChild(a);
            this.fangzhiPaotai.push(a);
          }.bind(this));
        }
      } else if (this.liemengzheNum < 1 && this.jinbiArr >= 12) {
        this.jinbiArr -= 12;
        var a = this.juliMax();
        if (a) {
          this.youxijiNum++;
          i = this.bangdinggeziArr.indexOf(a);
          this.bangdinggeziArr.splice(i, 1);
          cocoscreator.api_showTip("prefab/game/dk/daoju_dk", function (e) {
            var i = cc.instantiate(e);
            i.x = a.x;
            i.y = a.y;
            i.bianzu = this.bianzu;
            i.daoju = "liemengzhe";
            Game.props.addChild(i);
            this.mengyandengji = i;
          }.bind(this));
        }
      } else if (this.mengyan_gongjiNum < 1 && this.jinbiArr >= 51) {
        this.jinbiArr -= 51;
        var n = this.juliMax();
        if (n) {
          this.mengyan_gongjiNum++;
          i = this.bangdinggeziArr.indexOf(n);
          this.bangdinggeziArr.splice(i, 1);
          cocoscreator.api_showTip("prefab/game/dk/daoju_dk", function (e) {
            var i = cc.instantiate(e);
            i.x = n.x;
            i.y = n.y;
            i.bianzu = this.bianzu;
            i.daoju = "mengyan_gongji";
            Game.props.addChild(i);
            this.mengyan_gongji = i;
          }.bind(this));
        }
      } else if (this.mengyan_gongsuNum < 1 && this.jinbiArr >= 204) {
        this.jinbiArr -= 204;
        var t = this.juliMax();
        if (t) {
          this.mengyan_gongsuNum++;
          i = this.bangdinggeziArr.indexOf(t);
          this.bangdinggeziArr.splice(i, 1);
          cocoscreator.api_showTip("prefab/game/dk/daoju_dk", function (e) {
            var i = cc.instantiate(e);
            i.x = t.x;
            i.y = t.y;
            i.bianzu = this.bianzu;
            i.daoju = "mengyan_gongsu";
            Game.props.addChild(i);
            this.mengyan_gongsu = i;
          }.bind(this));
        }
      } else if (this.mengyan_shengmingNum < 1 && this.jinbiArr >= 51) {
        this.jinbiArr -= 51;
        var o = this.juliMax();
        if (o) {
          this.mengyan_shengmingNum++;
          i = this.bangdinggeziArr.indexOf(o);
          this.bangdinggeziArr.splice(i, 1);
          cocoscreator.api_showTip("prefab/game/dk/daoju_dk", function (e) {
            var i = cc.instantiate(e);
            i.x = o.x;
            i.y = o.y;
            i.bianzu = this.bianzu;
            i.daoju = "mengyan_shengming";
            Game.props.addChild(i);
            this.mengyan_shengming = i;
          }.bind(this));
        }
      } else {
        ;
      }
    }
  },
  juliMax: function () {
    var e = null;
    for (var i = 0; i < this.bangdinggeziArr.length; i++) {
      var a = (this.playerAImenX - this.bangdinggeziArr[i].x) * (this.playerAImenX - this.bangdinggeziArr[i].x) + (this.playerAImenY - this.bangdinggeziArr[i].y) * (this.playerAImenY - this.bangdinggeziArr[i].y);
      var n = undefined;
      e && (n = (this.playerAImenX - e.x) * (this.playerAImenX - e.x) + (this.playerAImenY - e.y) * (this.playerAImenY - e.y));
      (!e || a > n) && (e = this.bangdinggeziArr[i]);
    }
    return e;
  },
  juliMin: function () {
    var e = null;
    for (var i = 0; i < this.bangdinggeziArr.length; i++) {
      var a = (this.playerAImenX - this.bangdinggeziArr[i].x) * (this.playerAImenX - this.bangdinggeziArr[i].x) + (this.playerAImenY - this.bangdinggeziArr[i].y) * (this.playerAImenY - this.bangdinggeziArr[i].y);
      var n = undefined;
      e && (n = (this.playerAImenX - e.x) * (this.playerAImenX - e.x) + (this.playerAImenY - e.y) * (this.playerAImenY - e.y));
      (!e || a < n) && (e = this.bangdinggeziArr[i]);
    }
    return e;
  },
  shengji_jianzhu: function () {
    var e = this;
    if (this.playerAIchuang && this.chuang_dengji < 8 && this.jinbiArr >= Game.daoJuJson[this.chuang_dengji + 1].jiagejin && this.shandianArr >= Game.daoJuJson[this.chuang_dengji + 1].jiagedian) {
      this.jinbiArr -= Game.daoJuJson[this.chuang_dengji + 1].jiagejin;
      this.shandianArr -= Game.daoJuJson[this.chuang_dengji + 1].jiagedian;
      this.chuang_dengji++;
      cc.loader.loadRes("image/game/chuang/chuang" + this.chuang_dengji + "/shang", cc.SpriteFrame, function (i, a) {
        e.playerAIchuang.getChildByName("shang").getComponent(cc.Sprite).spriteFrame = a;
      });
      return void cc.loader.loadRes("image/game/chuang/chuang" + this.chuang_dengji + "/xia", cc.SpriteFrame, function (i, a) {
        e.playerAIchuang.getChildByName("xia").getComponent(cc.Sprite).spriteFrame = a;
      });
    }
    if (this.playerAImen && this.playerAImen.isValid && this.men_dengji < 8 && this.jinbiArr >= Game.daoJuJson[this.men_dengji + 10].jiagejin && this.shandianArr >= Game.daoJuJson[this.men_dengji + 10].jiagedian) {
      this.jinbiArr -= Game.daoJuJson[this.chuang_dengji + 10].jiagejin;
      this.shandianArr -= Game.daoJuJson[this.chuang_dengji + 10].jiagedian;
      this.men_dengji++;
      this.playerAImen.getComponent("men").phMax = Game.daoJuJson[this.men_dengji + 9].HP;
      this.playerAImen.getComponent("men").ph = Game.daoJuJson[this.men_dengji + 9].HP;
      return void cc.loader.loadRes("image/game/men/" + this.men_dengji, cc.SpriteFrame, function (i, a) {
        e.playerAImen.getComponent(cc.Sprite).spriteFrame = a;
      });
    }
    if (this.youxiji && this.youxiji.isValid && this.youxiji_dengji < 8 && this.jinbiArr >= this.daojuduikang1[this.youxiji_dengji + 14].jiagejin && this.shandianArr >= this.daojuduikang1[this.youxiji_dengji + 14].jiagedian) {
      this.jinbiArr -= this.daojuduikang1[this.youxiji_dengji + 14].jiagejin;
      this.shandianArr -= this.daojuduikang1[this.youxiji_dengji + 14].jiagedian;
      this.youxiji_dengji++;
      cc.loader.loadRes("image/game/jianzao/youxiji/" + this.youxiji_dengji, cc.SpriteFrame, function (i, a) {
        e.youxiji.getChildByName("1").getComponent(cc.Sprite).spriteFrame = a;
      });
      return void this.youxiji.getComponent("daoju_dk").dengji++;
    }
    var i = function (i) {
      var a = e.fangzhiPaotai[i];
      var n = a.getComponent("paotai_dk").dengji;
      if (a && a.isValid && n < 8 && e.jinbiArr >= e.daojuduikang1[n + 1].jiagejin && e.shandianArr >= e.daojuduikang1[n + 1].jiagedian) {
        e.jinbiArr -= e.daojuduikang1[n + 1].jiagejin;
        e.shandianArr -= e.daojuduikang1[n + 1].jiagedian;
        e.fangzhiPaotai[i].getComponent("paotai_dk").dengji++;
        e.fangzhiPaotai[i].getComponent("paotai_dk").gongjili = e.daojuduikang1[n].ad;
        cc.loader.loadRes("image/game/jianzao/paotai/" + e.fangzhiPaotai[i].getComponent("paotai_dk").dengji + "/shang", cc.SpriteFrame, function (a, n) {
          e.fangzhiPaotai[i].getComponent("paotai_dk").paotai.getComponent(cc.Sprite).spriteFrame = n;
        });
        cc.loader.loadRes("image/game/jianzao/paotai/" + e.fangzhiPaotai[i].getComponent("paotai_dk").dengji + "/xia", cc.SpriteFrame, function (a, n) {
          e.fangzhiPaotai[i].getComponent("paotai_dk").xia.getComponent(cc.Sprite).spriteFrame = n;
        });
        cc.loader.loadRes("image/game/jianzao/paotai/" + e.fangzhiPaotai[i].getComponent("paotai_dk").dengji + "/guang", cc.SpriteFrame, function (a, n) {
          e.fangzhiPaotai[i].getComponent("paotai_dk").guang.getComponent(cc.Sprite).spriteFrame = n;
        });
      }
      return {
        v: undefined
      };
    };
    for (var a = 0; a < this.fangzhiPaotai.length; a++) {
      var t = i(a);
      if ("object" === n(t)) {
        return t.v;
      }
    }
  },
  chuangjiangui: function () {
    if (this.shandianArr >= parseInt(this.duikangguilvJson[this.gui_dengji].price) && Game.fangzhiguiBut.active) {
      this.shandianArr -= parseInt(this.duikangguilvJson[this.gui_dengji].price);
      this.butfangzhigui();
    }
  },
  jianzao_youxiji: function () {
    var e = this.juliMax();
    if (e) {
      this.youxijiNum++;
      var i = this.bangdinggeziArr.indexOf(e);
      this.bangdinggeziArr.splice(i, 1);
      cocoscreator.api_showTip("prefab/game/dk/daoju_dk", function (i) {
        var a = cc.instantiate(i);
        a.x = e.x;
        a.y = e.y;
        a.bianzu = this.bianzu;
        a.daoju = "youxiji";
        Game.props.addChild(a);
        this.youxiji = a;
      }.bind(this));
    }
  }
});
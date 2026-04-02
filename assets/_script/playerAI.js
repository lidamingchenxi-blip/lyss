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
    console.log("我是AI------");
    this.bangdinggeziArr = [];
    this.fangzhiPaotai = [];
    this.fangzhiYouxiji = [];
    this.playerAIchuang = null;
    this.player_xianshi();
    this.playershijianTime = 0;
    this.chuangdengji = 1;
    this.youxijidengji = 0;
    this.kuangjinbi = 0;
    this.paotaiArrNum = Math.floor(5 * Math.random() + 4);
    this.youxijiArrNum = Math.floor(4 * Math.random() + 2);
    this.zegnjiaTime = 0;
  },
  go_home: function () {
    for (var e = 0; e < Game.chuangArr.length; e++) {
      if (Game.chuangArr[e].bianzu == this.node.qianwangfangjian) {
        var i = Axunlu.searchRoad(Game.playermapArray, this.node.Pos.x, this.node.Pos.y, Game.chuangArr[e].zuobiaoPos.x, Game.chuangArr[e].zuobiaoPos.y);
        i.pop();
        i.unshift(cc.v2(Game.chuangArr[e].zuobiaoPos.x, Game.chuangArr[e].zuobiaoPos.y));
        this.zhunbeishangChuang = Game.chuangArr[e];
        this.player_move(i);
      }
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
  player_yincang: function () {
    this.player1.active = false;
    this.player2.active = false;
    this.player3.active = false;
    this.player4.active = false;
    this.player5.active = false;
    this.player6.active = false;
  },
  player_move: function (e) {
    var i = this;
    var a = e.pop();
    this.node.Pos = {
      x: a.x,
      y: a.y
    };
    var n;
    var t = 90 * a.x - 2205;
    var o = 90 * a.y - 2205;
    if (1 == MainDate.GameType || 3 == MainDate.GameType || 4 == MainDate.GameType || 5 == MainDate.GameType || 7 == MainDate.GameType) {
      n = .5;
    } else {
      2 == MainDate.GameType && (n = .18);
    }
    cc.tween(this.node).to(n, {
      x: t,
      y: o
    }).call(function () {
      if (e.length > 0) {
        i.player_move(e);
      } else if (2 != MainDate.GameType && Player.chuang == i.zhunbeishangChuang) {
        var a = Math.floor(Math.random() * Game.fangjianbianzu.length);
        i.node.qianwangfangjian = Game.fangjianbianzu[a];
        i.go_home();
      } else {
        i.playerAIchuang = i.zhunbeishangChuang;
        i.playerAIchuang.playerAI = true;
        var n = Game.shangchuangArr.indexOf(i.playerAIchuang);
        Game.shangchuangArr.splice(n, 1);
        i.player_bianzu = i.zhunbeishangChuang.bianzu;
        i.player_fangjianjianzao = [];
        i.zhunbeishangChuang.getChildByName("ren" + i.node.pifu).active = true;
        i.zhunbeishangChuang.getChildByName("shangchuang").active = false;
        for (var t = 0; t < Game.menArr.length; t++) {
          if (Game.menArr[t].bianzu == i.zhunbeishangChuang.bianzu) {
            i.playerAImen = Game.menArr[t];
            i.playerAImenX = i.playerAImen.x;
            i.playerAImenY = i.playerAImen.y;
            cc.tween(Game.menArr[t]).to(.7, {
              x: Game.menArr[t].Pos.x,
              y: Game.menArr[t].Pos.y
            }).start();
            Game.xunlumapArray[Game.menArr[t].zuobiaoPos.x][Game.menArr[t].zuobiaoPos.y] = 0;
            Game.menGuanbi.push(Game.menArr[t]);
            i.kuangjinbi = 1;
            i.player_yincang();
            i.bangdinggezi();
            i.vis = true;
          }
        }
      }
    }).start();
  },
  bangdinggezi: function () {
    this.bangdinggeziArr = [];
    for (var e = 0; e < Game.map.children.length; e++) {
      Game.map.children[e].bianzu == this.zhunbeishangChuang.bianzu && "nei" == Game.map.children[e].name && this.bangdinggeziArr.push(Game.map.children[e]);
    }
  },
  update: function (e) {
    if (Game.xuanzerenwu) {
      if (!this.xingdong) {
        this.xingdong = true, this.go_home();
      }
      if (this.playerAIchuang && !Game.gameOver && this.playerAIchuang.name && this.vis) {
        this.zegnjiaTime -= e, this.zegnjiaTime <= 0 && (this.zegnjiaTime = 1, this.playershijianTime += this.kuangjinbi, cocoscreator.api_showTip("prefab/game/huodeziyuan", function (e) {
          if (this.playerAIchuang && this.playerAIchuang.name) {
            var i = cc.instantiate(e);
            i.getChildByName("jinbi").active = true;
            i.getChildByName("shandian").active = false;
            i.getChildByName("jinbi").getComponent(cc.Label).string = " +" + Game.daoJuJson[this.chuangdengji].shengchanjinbi;
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
          }
        }.bind(this)), this.player_ai());
      } else {
        this.vis && (this.vis = false, Game.touxiangkuang.children[this.node.pifuNum].getChildByName("beidaosi").active = true);
      }
    }
  },
  player_ai: function () {
    var e;
    if (1 == MainDate.GameType ? e = MainDate.gamepeizhiJson.playerAIJanzaoType1 : 2 == MainDate.GameType && (e = MainDate.gamepeizhiJson.playerAIJanzaoType2), this.playershijianTime > e) {
      this.playershijianTime = 0;
      if (Math.random() > .2 && this.playerAImen && this.playerAImen.name) {
        if (this.playerAImen.getComponent("men").mendengji <= 3) {
          if (Math.random() < .5) {
            this.shengji_men();
          } else {
            this.pao_chuang();
          }
        } else if (this.playerAImen.getComponent("men").mendengji <= 6) {
          if (Math.random() < .4) {
            this.shengji_men();
          } else {
            this.pao_chuang();
          }
        } else if (Math.random() < .1) {
          this.shengji_men();
        } else {
          this.pao_chuang();
        }
      } else {
        this.pao_chuang();
      }
    }
  },
  shengji_men: function () {
    var e = this;
    if (this.playerAImen && this.playerAImen.name && !(this.playerAImen.getComponent("men").mendengji >= 8)) {
      var i = this.playerAImen.getComponent("men");
      i.mendengji++;
      i.phMax = Game.daoJuJson[i.mendengji + 10].HP;
      i.ph = Game.daoJuJson[i.mendengji + 10].HP;
      cc.loader.loadRes("image/game/men/" + i.mendengji, cc.SpriteFrame, function (i, a) {
        e.playerAImen.getComponent(cc.Sprite).spriteFrame = a;
      });
    }
  },
  pao_chuang: function () {
    var e = Math.random();
    if (e > .24 && e < .7) {
      this.jianzao_or_shengji_paotai();
    } else if (e > .7) {
      this.jianzao_or_shengji_youxiji();
    } else {
      this.shgengji_chuang();
    }
  },
  shgengji_chuang: function () {
    var e = this;
    if (!(this.chuangdengji >= 8)) {
      this.chuangdengji++;
      this.kuangjinbi += .3;
      cc.loader.loadRes("image/game/chuang/chuang" + this.chuangdengji + "/shang", cc.SpriteFrame, function (i, a) {
        e.playerAIchuang.getChildByName("shang").getComponent(cc.Sprite).spriteFrame = a;
      });
      cc.loader.loadRes("image/game/chuang/chuang" + this.chuangdengji + "/xia", cc.SpriteFrame, function (i, a) {
        e.playerAIchuang.getChildByName("xia").getComponent(cc.Sprite).spriteFrame = a;
      });
    }
  },
  jianzao_or_shengji_paotai: function () {
    if (this.paotaiArrNum > 0 && Math.random() > .5 || 0 == this.fangzhiPaotai.length) {
      var e = null;
      for (var i = 0; i < this.bangdinggeziArr.length; i++) {
        var a = (this.playerAImenX - this.bangdinggeziArr[i].x) * (this.playerAImenX - this.bangdinggeziArr[i].x) + (this.playerAImenY - this.bangdinggeziArr[i].y) * (this.playerAImenY - this.bangdinggeziArr[i].y);
        var n = undefined;
        e && (n = (this.playerAImenX - e.x) * (this.playerAImenX - e.x) + (this.playerAImenY - e.y) * (this.playerAImenY - e.y));
        (!e || a < n) && (e = this.bangdinggeziArr[i]);
      }
      if (e) {
        this.jianzao_paotai(e);
      } else {
        this.shengji_paotai();
      }
    } else {
      this.shengji_paotai();
    }
  },
  shengji_paotai: function () {
    if (0 != this.fangzhiPaotai.length) {
      var e = this.fangzhiPaotai[Math.floor(Math.random() * this.fangzhiPaotai.length)];
      if (e && e.isValid) {
        var i = e.getComponent("paotai");
        if (!(!i || !i.isValid || i.dengji >= 10)) {
          i.dengji++;
          i.gongjiS = Game.daoJuJson[i.dengji + 31].gongjijuli;
          i.gongjili = Game.daoJuJson[i.dengji + 31].gongjili;
          cc.loader.loadRes("image/game/jianzao/paotai/" + i.dengji + "/shang", cc.SpriteFrame, function (e, a) {
            i.paotai.getComponent(cc.Sprite).spriteFrame = a;
          });
          cc.loader.loadRes("image/game/jianzao/paotai/" + i.dengji + "/xia", cc.SpriteFrame, function (e, a) {
            i.xia.getComponent(cc.Sprite).spriteFrame = a;
          });
          cc.loader.loadRes("image/game/jianzao/paotai/" + i.dengji + "/guang", cc.SpriteFrame, function (e, a) {
            i.guang.getComponent(cc.Sprite).spriteFrame = a;
          });
          i.shengji.active = true;
          i.shengji.getComponent(cc.Animation).play();
        }
      }
    }
  },
  jianzao_paotai: function (e) {
    if (e) {
      this.paotaiArrNum--;
      var i = this.bangdinggeziArr.indexOf(e);
      this.bangdinggeziArr.splice(i, 1);
      cocoscreator.api_showTip("prefab/game/paotai", function (i) {
        if (this.playerAIchuang && this.playerAIchuang.name) {
          var a = cc.instantiate(i);
          a.x = e.x;
          a.y = e.y;
          Game.props.addChild(a);
          a.bianzu = this.node.bianzu;
          this.fangzhiPaotai.push(a);
        }
      }.bind(this));
    }
  },
  jianzao_or_shengji_youxiji: function () {
    if (this.youxijiArrNum > 0 && Math.random() > .5 || 0 == this.fangzhiYouxiji.length) {
      var e = null;
      for (var i = 0; i < this.bangdinggeziArr.length; i++) {
        var a = (this.playerAImenX - this.bangdinggeziArr[i].x) * (this.playerAImenX - this.bangdinggeziArr[i].x) + (this.playerAImenY - this.bangdinggeziArr[i].y) * (this.playerAImenY - this.bangdinggeziArr[i].y);
        var n = undefined;
        e && (n = (this.playerAImenX - e.x) * (this.playerAImenX - e.x) + (this.playerAImenY - e.y) * (this.playerAImenY - e.y));
        (!e || a > n) && (e = this.bangdinggeziArr[i]);
      }
      if (e) {
        this.jianzao_youxiji(e);
      } else {
        this.shengji_youxiji();
      }
    } else {
      this.shengji_youxiji();
    }
  },
  jianzao_youxiji: function (e) {
    this.youxijiArrNum--;
    var i = this.bangdinggeziArr.indexOf(e);
    this.bangdinggeziArr.splice(i, 1);
    cocoscreator.api_showTip("prefab/game/youxiji", function (i) {
      if (this.playerAIchuang && this.playerAIchuang.name) {
        var a = cc.instantiate(i);
        a.x = e.x;
        a.y = e.y;
        Game.props.addChild(a);
        a.bianzu = this.node.bianzu;
        this.fangzhiYouxiji.push(a);
      }
    }.bind(this));
  },
  shengji_youxiji: function () {
    if (0 != this.fangzhiYouxiji.length) {
      var e = this.fangzhiYouxiji[Math.floor(Math.random() * this.fangzhiYouxiji.length)];
      if (e && e.isValid) {
        var i = e.getComponent("youxiji");
        if (!(!i || !i.isValid || i.dengji >= 7)) {
          i.dengji++;
          cc.loader.loadRes("image/game/jianzao/youxiji/" + i.dengji, cc.SpriteFrame, function (e, a) {
            i.youxiji.getComponent(cc.Sprite).spriteFrame = a;
          });
          i.shengji.active = true;
          i.shengji.getComponent(cc.Animation).play();
        }
      }
    }
  },
  maidiao_Arr: function (e) {
    if (this.playerAIchuang == e && (1 == MainDate.GameType || 3 == MainDate.GameType || 4 == MainDate.GameType || 5 == MainDate.GameType || 7 == MainDate.GameType)) {
      for (var i = 0; i < this.fangzhiPaotai.length; i++) {
        this.fangzhiPaotai[i].destroy();
      }
      for (var a = 0; a < this.fangzhiYouxiji.length; a++) {
        this.fangzhiYouxiji[a].destroy();
      }
    }
  }
});
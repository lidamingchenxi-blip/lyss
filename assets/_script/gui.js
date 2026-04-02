cc.Class({
  extends: cc.Component,
  properties: {
    gui1: cc.Node,
    gui2: cc.Node,
    gui3: cc.Node,
    xuetiao: cc.Node,
    huixuetexiao: cc.Node,
    kuangbao: cc.Node,
    dengjixianshi: cc.Node
  },
  onLoad: function () {
    var e;
    this.dengji = 1;
    this.dengjixianshi.getComponent(cc.Label).string = "lv:" + this.dengji;
    this.gui1.active = false;
    this.gui2.active = false;
    this.gui3.active = false;
    if (1 == Game.guiXuhao) {
      this.gui1.active = true;
      this.gui = this.gui1;
    } else if (2 == Game.guiXuhao) {
      this.gui2.active = true;
      this.gui = this.gui2;
    } else if (3 == Game.guiXuhao) {
      this.gui3.active = true, this.gui = this.gui3;
    }
    this.gongjiTime = 0;
    this.gongjisudu = 60;
    this.guigongji_cishuNum = 0;
    this.guixingdongBoll = false;
    this.guiVis = true;
    this.guiyidong = false;
    this.taopao = 0;
    this.taopao_chonglai_time = MainDate.gamepeizhiJson.boci_time;
    this.huixuePos = [];
    this.guinaomenNum = 0;
    this.guinaomenNumEXP = 0;
    this.kuangbaoTime = 0;
    this.gongjishdujiansu = false;
    this.fuzhouTime = -1;
    this.youbuTime = -1;
    if (1 == MainDate.GameType || 5 == MainDate.GameType) {
      e = "json/guishengji";
    } else if (4 == MainDate.GameType) {
      e = "json/guishengjidantiao";
    } else {
      7 == MainDate.GameType && (e = "json/guishengjiboci");
    }
    cc.loader.loadRes(e, function (e, i) {
      this.guishengjiJson = i.json;
      this.phMax = this.guishengjiJson[this.dengji].hp;
      this.ph = this.phMax;
      this.gongjili = this.guishengjiJson[this.dengji].at;
    }.bind(this));
  },
  guixingdong: function () {
    this.guixingdongBoll = true;
    Game.fangzhitanchuang("怪物进入了宿舍");
    music.api_audioPlay(MainDate.mp3.guijinru);
    if (1 == MainDate.GameType || 3 == MainDate.GameType || 4 == MainDate.GameType || 7 == MainDate.GameType) {
      this.guigongjiMen();
    } else {
      5 == MainDate.GameType && this.gui_gongjichuang();
    }
  },
  guigongjiMen: function () {
    if (!(this.fuzhouTime > 0 || this.youbuTime > 0)) {
      if (Game.menGuanbi.length <= 0) {
        if (0 == Game.chuangArr.length) {
          return void cocoscreator.api_showTip("prefab/game/gameOver", function (e) {
            var i = cc.instantiate(e);
            i.scale = 0;
            Game.MainCameraUI.addChild(i);
            cocoscreator.api_panetoff(i);
          }.bind(this));
        }
        var e = Game.chuangArr[Math.floor(Game.chuangArr.length * Math.random())].bianzu;
        this.guigongjiChuang(e);
      } else {
        var i;
        var a;
        var n = Math.floor(Math.random() * Game.menGuanbi.length);
        var t = Game.menGuanbi[n].bianzu;
        this.guigongji_cishuNum = Math.floor(20 * Math.random()) + 30;
        for (var o = 0; o < Object.keys(Game.MapJson).length; o++) {
          var s = Game.MapJson[Object.keys(Game.MapJson)[o]];
          9 == s.type && s.bianzu == t && (i = s);
        }
        if (4 == MainDate.GameType || 7 == MainDate.GameType) {
          (a = Axunlu.searchRoad(Game.xunlumapArray, this.node.zishenPos.x, this.node.zishenPos.y, i.guiweizhi % 9, 20 - Math.floor(i.guiweizhi / 9) - 1)).pop();
          a.unshift({
            x: i.guiweizhi % 9,
            y: 20 - Math.floor(i.guiweizhi / 9) - 1
          });
        } else {
          (a = Axunlu.searchRoad(Game.xunlumapArray, this.node.zishenPos.x, this.node.zishenPos.y, i.guiweizhi % 50, 50 - Math.floor(i.guiweizhi / 50) - 1)).pop();
          a.unshift({
            x: i.guiweizhi % 50,
            y: 50 - Math.floor(i.guiweizhi / 50) - 1
          });
        }
        this.gui_move(a);
      }
    }
  },
  gui_gongjichuang: function () {
    if (!(this.fuzhouTime > 0 || this.youbuTime > 0)) {
      var e = Player.chuang.zuobiaoPos.x;
      var i = Player.chuang.zuobiaoPos.y;
      var a = Axunlu.searchRoad(Game.xunlumapArray, this.node.zishenPos.x, this.node.zishenPos.y, e, i);
      if (a.length <= 0) {
        this.gui_gongji_men_jianzaomoshi();
      } else {
        this.gui_move(a);
      }
    }
  },
  gui_gongji_men_jianzaomoshi: function () {
    var e = Player.menArr[Math.floor(Player.menArr.length * Math.random())];
    var i = e.zuobiaoPos.x;
    var a = e.zuobiaoPos.y;
    Game.xunlumapArray[i][a] = 1;
    var n = Axunlu.searchRoad(Game.xunlumapArray, this.node.zishenPos.x, this.node.zishenPos.y, i, a);
    Game.xunlumapArray[i][a] = 0;
    this.gongjimen = e;
    if (n.length <= 0) {
      this.gui_gongjichuang();
    } else {
      this.guigongji_cishuNum = Math.floor(20 * Math.random()) + 30;
      0 == Game.xunlumapArray[n[0].x][n[0].y] && n.shift();
      if (n.length <= 0) {
        return;
      }
      this.gui_move(n);
    }
  },
  guigongjiChuang: function (e) {
    var i = null;
    for (var a = 0; a < Game.chuangArr.length; a++) {
      Game.chuangArr[a].bianzu == e && (i = Game.chuangArr[a]);
    }
    var n = Axunlu.searchRoad(Game.xunlumapArray, this.node.zishenPos.x, this.node.zishenPos.y, i.zuobiaoPos.x, i.zuobiaoPos.y);
    n.pop();
    n.unshift(cc.v2(i.zuobiaoPos.x, i.zuobiaoPos.y));
    var t = this;
    (function a() {
      var o = n.pop();
      t.guiyidong = true;
      t.node.zishenPos = {
        x: o.x,
        y: o.y
      };
      if (1 == MainDate.GameType || 2 == MainDate.GameType || 3 == MainDate.GameType) {
        var s = 90 * o.x - 2205;
        var c = 90 * o.y - 2205;
      } else if (!(4 != MainDate.GameType && 7 != MainDate.GameType)) {
        s = 90 * o.x - 360;
        c = 90 * o.y - 855;
      }
      cc.tween(t.node).to(.15, {
        x: s,
        y: c
      }).call(function () {
        if (n.length > 0) {
          a();
        } else {
          t.guiyidong = false;
          if (i) {
            cc.tween(t.node).to(.4, {
              x: i.x,
              y: i.y
            }).call(function () {
              if (Player.bianzu == e) {
                Game.gameOver = true;
                cocoscreator.api_showTip("prefab/game/gameOver", function (e) {
                  var i = cc.instantiate(e);
                  i.scale = 0;
                  Game.MainCameraUI.addChild(i);
                  cocoscreator.api_panetoff(i);
                }.bind(t));
              } else {
                for (var a = 0; a < Game.player_Arr.length; a++) {
                  Game.player_Arr[a].getComponent("playerAI").maidiao_Arr(i);
                }
                var n = Game.chuangArr.indexOf(i);
                Game.fangzhitanchuang("怪物毁坏了一个床位");
                Game.chuangArr.splice(n, 1);
                i.destroy();
                t.guigongjiMen();
              }
            }).start();
          } else {
            t.guigongjiMen();
          }
        }
      }).start();
    })();
  },
  gui_taopao_huixue: function () {
    if (!(this.guiyidong || this.fuzhouTime > 0 || this.youbuTime > 0)) {
      Game.fangzhitanchuang("怪物逃跑了");
      for (var e = 0; e < Game.props.children.length; e++) {
        if (Game.props.children[e].getComponent("daoju") && Game.props.children[e].getChildByName("youbu").active && Math.abs(Game.props.children[e].x - this.node.x) < 540 && Math.abs(Game.props.children[e].y - this.node.y) < 540) {
          Game.props.children[e].getComponent("daoju").youbufasheqi();
          this.guiyidong = true;
        }
      }
      this.guiyidong || this.gui_taopao_huixue_move();
    }
  },
  update: function (e) {
    if (this.guixingdongBoll) {
      var i = this.ph / this.phMax;
      i <= 0 && (i = 0);
      this.xuetiao.getComponent(cc.ProgressBar).progress = i;
      if (this.guiVis) {
        if (this.fuzhouTime > 0) {
          this.fuzhouTime--;
        } else {
          0 == this.fuzhouTime && (this.gui.getChildByName("fuzhou").active = false, this.fuzhouTime--, 1 == MainDate.GameType || 3 == MainDate.GameType || 4 == MainDate.GameType || 7 == MainDate.GameType ? this.guigongjiMen() : 5 == MainDate.GameType && this.gui_gongjichuang());
        }
        if (this.youbuTime > 0) {
          this.youbuTime--;
        } else {
          0 == this.youbuTime && (this.gui.getChildByName("youbu").active = false, this.youbuTime--, this.gui_taopao_huixue_move());
        }
        if (this.kuangbaoTime > 0) {
          this.kuangbaoTime--, this.gongjisudu = 30;
        } else {
          0 == this.kuangbaoTime && (this.gongjisudu = 60, this.kuangbaoTime--);
        }
        if (1 == MainDate.GameType || 3 == MainDate.GameType || 4 == MainDate.GameType || 7 == MainDate.GameType) {
          this.gui_gongji_men();
        } else {
          5 == MainDate.GameType && this.gui_gongji_men_jianzao();
        }
        this.gui_huixue();
        if (2 == this.taopao && this.taopao_chonglai_time > 0) {
          this.taopao_chonglai_time -= e, Game.gogameTime.getChildByName("gogameTime").getComponent(cc.Label).string = Math.floor(this.taopao_chonglai_time), this.taopao_chonglai_time < 0 && (this.taopao = 0, this.taopao_chonglai_time = MainDate.gamepeizhiJson.boci_time, Game.gogameTime.active = false, this.guigongjiMen());
        }
      }
    }
  },
  gui_gongji_men: function () {
    if (!(this.fuzhouTime > 0 || this.youbuTime > 0) && (this.gongjiTime++, this.gongjiTime > this.gongjisudu)) {
      this.gongjiTime = 0;
      for (var e = 0; e < Game.menArr.length; e++) {
        var i = Game.menArr[e];
        var a = MathMgr._getDistance(this.node.position, i.position);
        console.log("间距 = ", a);
        if (Math.abs(a) < 150) {
          music.api_audioPlay(MainDate.mp3.guigongji);
          var n = i.getComponent("men").gongji(this.gongjili);
          this.playAnimation_gongji();
          if (n) {
            Game.xunlumapArray[i.zuobiaoPos.x][i.zuobiaoPos.y] = 1;
            this.guigongjiChuang(n);
          } else {
            this.guigongji_cishuNum--;
            this.guinaomenNum++;
            this.guinaomenNumEXP++;
            this.guishengji();
            this.gongji_jingjimen(i);
            this.gongji_bingxiangmen(i);
            if (this.guinaomenNum >= MainDate.gamepeizhiJson.guiAIjineng) {
              this.guinaomenNum = 0, this.shiyongjineng();
            }
            this.guigongji_cishuNum <= 0 && this.guigongjiMen();
          }
          break;
        }
      }
    }
  },
  gui_gongji_men_jianzao: function () {
    if (!(this.fuzhouTime > 0 || this.youbuTime > 0)) {
      this.gongjiTime++;
      if (this.gongjimen && this.gongjimen.name && this.gongjiTime > this.gongjisudu && Math.abs(this.node.x - this.gongjimen.x) < 120 && Math.abs(this.node.y - this.gongjimen.y) < 120) {
        this.gongjiTime = 0, music.api_audioPlay(MainDate.mp3.guigongji), this.playAnimation_gongji(), this.gongjimen.getComponent("men").gongji(this.gongjili) ? (Game.xunlumapArray[this.gongjimen.zuobiaoPos.x][this.gongjimen.zuobiaoPos.y] = 1, this.gui_gongjichuang()) : (this.guigongji_cishuNum--, this.guinaomenNum++, this.guinaomenNumEXP++, this.guishengji(), this.gongji_jingjimen(this.gongjimen), this.gongji_bingxiangmen_jianzao(), this.guinaomenNum >= MainDate.gamepeizhiJson.guiAIjineng && (this.guinaomenNum = 0, this.shiyongjineng()), this.guigongji_cishuNum <= 0 && this.gui_gongjichuang());
      }
    }
  },
  gongji_jingjimen: function (e) {
    if ((1 == MainDate.GameType || 3 == MainDate.GameType || 4 == MainDate.GameType || 7 == MainDate.GameType) && e == Player.men && e.bianzu == Player.men.bianzu && MainDate.dangqianNum_daoci > 0) {
      this.gui_beigongji(this.phMax / 100);
    } else {
      5 == MainDate.GameType && MainDate.dangqianNum_daoci > 0 && this.gui_beigongji(this.phMax / 100);
    }
  },
  gongji_bingxiangmen: function (e) {
    if (e == Game.playermen) {
      if (e.bianzu == Game.playermen.bianzu && MainDate.dangqianNum_bingxiang > 0 && !this.gongjishdujiansu) {
        this.gongjishdujiansu = true, this.gongjisudu = 1.2 * this.gongjisudu;
      }
      e.bianzu == Game.playermen.bianzu && MainDate.dangqianNum_bingxiang > 0 || this.gongjishdujiansu && (this.gongjishdujiansu = false, this.gongjisudu = this.gongjisudu / 1.2);
    } else if (this.gongjishdujiansu) {
      this.gongjishdujiansu = false, this.gongjisudu = this.gongjisudu / 1.2;
    }
  },
  gongji_bingxiangmen_jianzao: function () {
    if (this.gongjishdujiansu && MainDate.dangqianNum_bingxiang < 0) {
      this.gongjishdujiansu = false;
      return void (this.gongjisudu = this.gongjisudu / 1.2);
    }
    if (MainDate.dangqianNum_bingxiang > 0 && !this.gongjishdujiansu) {
      this.gongjishdujiansu = true;
      this.gongjisudu = 1.2 * this.gongjisudu;
    }
    MainDate.dangqianNum_bingxiang > 0 || this.gongjishdujiansu && (this.gongjishdujiansu = false, this.gongjisudu = this.gongjisudu / 1.2);
  },
  shiyongjineng: function () {
    if (!(this.fuzhouTime > 0 || this.youbuTime > 0)) {
      for (var e = 0; e < Game.props.children.length; e++) {
        Game.props.children[e].getComponent("daoju") && Game.props.children[e].getChildByName("fuzhou").active && Math.abs(Game.props.children[e].x - this.node.x) < 600 && Math.abs(Game.props.children[e].y - this.node.y) < 600 && Game.props.children[e].getComponent("daoju").jinengfuzhou();
      }
      if (Math.random() < .5) {
        Game.fangzhitanchuang("怪物狂暴了");
        this.kuangbaoTime = 300;
        this.kuangbao.active = true;
        this.kuangbao.getComponent(cc.Animation).play();
      } else {
        Game.fangzhitanchuang("怪物使用了震撼");
        for (var i = 0; i < Game.props.children.length; i++) {
          "paotai" == Game.props.children[i].name && Math.abs(Game.props.children[i].x - this.node.x) < 450 && Math.abs(Game.props.children[i].y - this.node.y) < 450 && Game.props.children[i].getComponent("paotai").zhenhan();
        }
      }
    }
  },
  playAnimation_gongji: function () {
    this.gui.active = true;
    this._armatureDisplay = this.gui.getComponent(dragonBones.ArmatureDisplay);
    this._armatureDisplay.playAnimation("newAnimation_gongji", 1);
    this._armatureDisplay.addEventListener(dragonBones.EventObject.COMPLETE, this.OnAnimationPlayComplete_gongji, this);
  },
  OnAnimationPlayComplete_gongji: function (e) {
    this._armatureDisplay = this.gui.getComponent(dragonBones.ArmatureDisplay);
    this._armatureDisplay.removeEventListener(dragonBones.EventObject.COMPLETE, this.OnAnimationPlayComplete_gongji, this);
    this.playAnimation_zou();
  },
  playAnimation_zou: function () {
    this.gui.active = true;
    this._armatureDisplay = this.gui.getComponent(dragonBones.ArmatureDisplay);
    this._armatureDisplay.playAnimation("newAnimation_zou", -1);
    this._armatureDisplay.addEventListener(dragonBones.EventObject.COMPLETE, this.OnAnimationPlayComplete_zou, this);
  },
  OnAnimationPlayComplete_zou: function (e) {
    this._armatureDisplay = this.gui.getComponent(dragonBones.ArmatureDisplay);
    this._armatureDisplay.removeEventListener(dragonBones.EventObject.COMPLETE, this.OnAnimationPlayComplete_zou, this);
  },
  gui_huixue: function () {
    if (!(this.huixuePos.length <= 0)) {
      var e = false;
      for (var i = 0; i < Game.huixuedian.length; i++) {
        if (Math.abs(this.node.x - this.huixuePos[i].x) < 90 && Math.abs(this.node.y - this.huixuePos[i].y) < 90) {
          this.ph < 0 && (this.ph = 1);
          this.ph += this.phMax / 300;
          if (this.ph >= this.phMax) {
            this.guiyidong || 1 != MainDate.GameType && 3 != MainDate.GameType && 4 != MainDate.GameType ? this.guiyidong || 5 != MainDate.GameType ? this.guiyidong || 7 != MainDate.GameType || 0 == this.taopao || (Game.gogameTime.active = true, this.guiyidong = true, this.guibocishengji(), this.taopao = 2) : this.gui_gongjichuang() : this.guigongjiMen(), this.ph = this.phMax;
          } else {
            e = true;
          }
        }
      }
      this.huixuetexiao.active = e;
    }
  },
  guishengji: function () {
    if (7 != MainDate.GameType) {
      this.dengji >= 14 || this.guishengjiJson[this.dengji].exp < this.guinaomenNumEXP && (music.api_audioPlay(MainDate.mp3.guishengji), this.dengji++, this.dengjixianshi.getComponent(cc.Label).string = "lv:" + this.dengji, Game.fangzhitanchuang("怪物升到了" + this.dengji + "级"), this.phMax = this.guishengjiJson[this.dengji].hp, this.ph += this.phMax / 2, this.ph >= this.phMax && (this.ph = this.phMax), this.gongjili = this.guishengjiJson[this.dengji].at);
    } else if (this.guishengjiJson[this.dengji].exp <= this.guinaomenNumEXP) {
      this.guinaomenNumEXP = 0, this.taopao = 1, Game.gogameTime.getChildByName("gogameTime").getComponent(cc.Label).string = MainDate.gamepeizhiJson.boci_time, Game.gogameTime.getChildByName("bocidengdai").active = true, this.gui_taopao_huixue();
    }
  },
  guibocishengji: function () {
    this.dengji++;
    if (this.dengji >= 100) {
      this.guiVis = false;
      return void cocoscreator.api_showTip("prefab/game/gameWin", function (e) {
        var i = cc.instantiate(e);
        i.scale = 0;
        Game.MainCameraUI.addChild(i);
        cocoscreator.api_panetoff(i);
      }.bind(this));
    }
    this.guinaomenNumEXP = 0;
    this.dengjixianshi.getComponent(cc.Label).string = "lv:" + this.dengji;
    Game.fangzhitanchuang("怪物升到了" + this.dengji + "级");
    Game.bociLab.getComponent(cc.Label).string = this.dengji + "/99";
    this.phMax = this.guishengjiJson[this.dengji].hp;
    7 == MainDate.GameType && MainDate.wuxianjinbi && (this.phMax = 10 * this.phMax);
    this.ph += this.phMax / 2;
    this.ph >= this.phMax && (this.ph = this.phMax);
    this.gongjili = this.guishengjiJson[this.dengji].at;
  },
  gui_beigongji: function (e) {
    if (this.guiVis && this.guixingdongBoll) {
      if ("fuzhou" != e) {
        if ("youbu" != e) {
          this.ph -= e;
          if (this.ph <= 0 && 7 != MainDate.GameType) {
            this.ph, this.guiVis = false, cocoscreator.api_showTip("prefab/game/gameWin", function (e) {
              var i = cc.instantiate(e);
              i.scale = 0;
              Game.MainCameraUI.addChild(i);
              cocoscreator.api_panetoff(i);
            }.bind(this));
          } else {
            this.ph <= 0 && 7 == MainDate.GameType && !this.guiyidong && (this.taopao = 1, Game.gogameTime.getChildByName("bocidengdai").active = true, this.ph = 1, this.gui_taopao_huixue());
          }
          this.ph / this.phMax <= .2 && 7 != MainDate.GameType && this.gui_taopao_huixue();
        } else {
          this.shiyongyoubu();
        }
      } else {
        this.shiyongfuzhou();
      }
    }
  },
  gui_taopao_huixue_move: function () {
    var e;
    var i = this;
    var a = Game.huixuedian[Math.floor(Math.random() * Game.huixuedian.length)];
    if (1 == MainDate.GameType || 3 == MainDate.GameType) {
      (e = Axunlu.searchRoad(Game.xunlumapArray, this.node.zishenPos.x, this.node.zishenPos.y, a % 50, 50 - Math.floor(a / 50) - 1)).pop();
      e.unshift({
        x: a % 50,
        y: 50 - Math.floor(a / 50) - 1
      });
      this.huixuePos = [];
      for (var n = 0; n < Game.huixuedian.length; n++) {
        this.huixuePos.push({
          x: a % 50 * 90 - 2205,
          y: 90 * (50 - Math.floor(a / 50) - 1) - 2205
        });
      }
      this.gui_move(e);
    } else if (4 == MainDate.GameType || 7 == MainDate.GameType) {
      (e = Axunlu.searchRoad(Game.xunlumapArray, this.node.zishenPos.x, this.node.zishenPos.y, a % 9, 20 - Math.floor(a / 9) - 1)).pop();
      e.unshift({
        x: a % 9,
        y: 20 - Math.floor(a / 9) - 1
      });
      this.huixuePos = [];
      for (var t = 0; t < Game.huixuedian.length; t++) {
        this.huixuePos.push({
          x: a % 9 * 90 - 360,
          y: 90 * (20 - Math.floor(a / 9) - 1) - 855
        });
      }
      this.gui_move(e);
    } else if (5 == MainDate.GameType) {
      e = Axunlu.searchRoad(Game.xunlumapArray, this.node.zishenPos.x, this.node.zishenPos.y, a % 50, 50 - Math.floor(a / 50) - 1);
      this.huixuePos.push({
        x: a % 50 * 90 - 2205,
        y: 90 * (50 - Math.floor(a / 50) - 1) - 2205
      });
      if (e.length <= 0) {
        this.guiyidong = true, cc.tween(this.node).to(.55, {
          x: a % 50 * 90 - 2205,
          y: 90 * (50 - Math.floor(a / 50) - 1) - 2205
        }).call(function () {
          i.node.zishenPos = {
            x: a % 50,
            y: 50 - Math.floor(a / 50) - 1
          };
          i.guiyidong = false;
        }).start();
      } else {
        e.pop(), e.unshift({
          x: a % 50,
          y: 50 - Math.floor(a / 50) - 1
        }), this.gui_move(e);
      }
    }
  },
  shiyongfuzhou: function () {
    this.gui.getChildByName("fuzhou").active = true;
    this.fuzhouTime = 180;
    this.guiyidong = false;
  },
  shiyongyoubu: function () {
    this.gui.getChildByName("youbu").active = true;
    this.youbuTime = 180;
  },
  gui_move: function (e) {
    var i = this;
    if (!(this.fuzhouTime > 0 || this.youbuTime > 0)) {
      var a = e.pop();
      this.guiyidong = true;
      this.node.zishenPos = {
        x: a.x,
        y: a.y
      };
      if (4 == MainDate.GameType || 7 == MainDate.GameType) {
        var n = 90 * a.x - 360;
        var t = 90 * a.y - 855;
        cc.tween(this.node).to(1.2, {
          x: n,
          y: t
        }).call(function () {
          if (e.length > 0) {
            i.gui_move(e);
          } else {
            i.guiyidong = false;
          }
        }).start();
      } else if (1 == MainDate.GameType || 3 == MainDate.GameType) {
        var o = 90 * a.x - 2205;
        var s = 90 * a.y - 2205;
        cc.tween(this.node).to(.15, {
          x: o,
          y: s
        }).call(function () {
          if (e.length > 0) {
            i.gui_move(e);
          } else {
            i.guiyidong = false;
          }
        }).start();
      } else if (5 == MainDate.GameType) {
        if (!a || !a.x || !a.y) {
          return void this.gui_gongjichuang();
        }
        var c = 90 * a.x - 2205;
        var r = 90 * a.y - 2205;
        cc.tween(this.node).to(.2, {
          x: c,
          y: r
        }).call(function () {
          var n = e[e.length - 1];
          i.gui_move_chaihui_paotai(a);
          if (e.length > 0 && 1 == Game.xunlumapArray[n.x][n.y]) {
            i.gui_move(e);
          } else if (e.length > 0) {
            i.guiyidong = false;
            i.gui_gongjichuang();
          } else {
            i.guiyidong = false;
            i.gui_die_player();
          }
        }).start();
      }
    }
  },
  gui_die_player: function () {
    if (!(Math.abs(this.node.x - Player.chuang.x) > 45 || Math.abs(this.node.y - Player.chuang.y) > 45)) {
      Game.gameOver = true;
      cocoscreator.api_showTip("prefab/game/gameOver", function (e) {
        var i = cc.instantiate(e);
        i.scale = 0;
        Game.MainCameraUI.addChild(i);
        cocoscreator.api_panetoff(i);
      }.bind(this));
    }
  },
  gui_move_chaihui_paotai: function (e) {
    for (var i = 0; i < Game.props.children.length; i++) {
      var a = Game.props.children[i];
      if ("paotai" == a.name && a.zuobiaoPos.x == e.x && a.zuobiaoPos.y == e.y) {
        music.api_audioPlay(MainDate.mp3.chaijianzhu);
        a.destroy();
      }
    }
  }
});
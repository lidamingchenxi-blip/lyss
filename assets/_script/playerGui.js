cc.Class({
  extends: cc.Component,
  properties: {
    xuetiao: cc.Node,
    kuangbao: cc.Node,
    dengjixianshi: cc.Node,
    huixuetexiao: cc.Node
  },
  onLoad: function () {
    this.guiVis = true;
    this.dengji = 1;
    this.dengjixianshi.getComponent(cc.Label).string = "lv:" + this.dengji;
    this.fuzhouTime = 0;
    this.youbuTime = 0;
    this.gongjiTime = 0;
    this.gongjisudu = 60;
    this.kuangbaoTime = 0;
    this.guikuangbao = false;
    window.playerGui = this;
    this.guinaomenNumEXP = 0;
    this.gui_gongjiMenDie = false;
    this.kuangbaoLengqueTime = 0;
    this.zhenhanLengqueTime = 0;
    cc.loader.loadRes("json/playerguishengji", function (e, i) {
      this.guishengjiJson = i.json;
      this.ph = this.guishengjiJson[this.dengji].hp;
      this.gui_dengji_shuju();
    }.bind(this));
  },
  Playerxingdong: function (e) {
    this.xingdong = true;
    this.huixuedian = e;
  },
  gui_dengji_shuju: function () {
    this.phMax = this.guishengjiJson[this.dengji].hp;
    this.ph += this.phMax / 2;
    this.ph >= this.phMax && (this.ph = this.phMax);
    this.gongjili = this.guishengjiJson[this.dengji].at;
  },
  update: function (e) {
    if (this.xingdong && !Game.gameOver) {
      this.gui_gongji_men();
      Game.yidongjiandu && this.jiance_gui_Move(e);
      if (this.kuangbaoTime > 0 && this.guikuangbao) {
        this.kuangbaoTime -= e;
        this.gongjisudu = 30;
      } else if (this.kuangbaoTime <= 0 && this.guikuangbao) {
        this.gongjisudu = 60, this.guikuangbao = false, this.kuangbaoTime -= e;
      }
      if (this.kuangbaoLengqueTime > 0) {
        this.kuangbaoLengqueTime -= e;
        Game.kuangbaobut.opacity = 150;
        Game.kuangbaoAD.active = true;
        Game.kuangbaobut.getComponent(cc.Sprite).fillRange = this.kuangbaoLengqueTime / MainDate.gamepeizhiJson.kuangbaoLengqueTime;
      } else {
        Game.kuangbaoAD.active = false;
      }
      if (this.zhenhanLengqueTime > 0) {
        this.zhenhanLengqueTime -= e;
        Game.zhenhanbut.opacity = 150;
        Game.zhenhanAD.active = true;
        Game.zhenhanbut.getComponent(cc.Sprite).fillRange = this.zhenhanLengqueTime / MainDate.gamepeizhiJson.zhenhanLengqueTime;
      } else {
        Game.zhenhanAD.active = false;
      }
      this.gui_huixue();
      var i = this.ph / this.phMax;
      this.xuetiao.getComponent(cc.ProgressBar).progress = i;
      this.gui_gongji_chuang();
    }
  },
  but_kuangbao: function () {
    var e = function () {
      this.kuangbaoLengqueTime = MainDate.gamepeizhiJson.kuangbaoLengqueTime;
      this.kuangbaoTime = MainDate.gamepeizhiJson.kuangbaoZhixing;
      this.guikuangbao = true;
      Game.fangzhitanchuang("怪物狂暴了");
      Game.kuangbaoAD.active = true;
      this.kuangbao.active = true;
      this.kuangbao.getComponent(cc.Animation).play();
    }.bind(this);
    if (this.kuangbaoLengqueTime > 0) {
      adUtils.executeShowVideo(function () {
        e();
      });
    } else {
      e();
    }
  },
  but_zhanhan: function () {
    var e = function () {
      this.zhenhanLengqueTime = MainDate.gamepeizhiJson.zhenhanLengqueTime;
      Game.fangzhitanchuang("怪物使用了震撼");
      Game.zhenhanAD.active = true;
      for (var e = 0; e < Game.props.children.length; e++) {
        "paotai" == Game.props.children[e].name && Math.abs(Game.props.children[e].x - this.node.x) < 450 && Math.abs(Game.props.children[e].y - this.node.y) < 450 && Game.props.children[e].getComponent("paotai").zhenhan();
      }
    }.bind(this);
    if (this.zhenhanLengqueTime > 0) {
      adUtils.executeShowVideo(function () {
        e();
      });
    } else {
      e();
    }
  },
  jiance_gui_Move: function (e) {
    var i = -2120;
    Math.abs(this.node.y - 18) < 45 && (i -= 90);
    var a = 412;
    Math.abs(this.node.y - 70) < 45 && (a += 90);
    if (Math.sin(Game.yidongjiandu * Math.PI / 180) * Game.yidongV > 0 && this.node.x < a && this.node.y > -1040 && this.node.y < 2200) {
      this.node.x += Math.sin(Game.yidongjiandu * Math.PI / 180) * Game.yidongV * 60 * e;
    } else {
      Math.sin(Game.yidongjiandu * Math.PI / 180) * Game.yidongV < 0 && this.node.x > i && this.node.y > -1040 && this.node.y < 2200 && (this.node.x += Math.sin(Game.yidongjiandu * Math.PI / 180) * Game.yidongV * 60 * e);
    }
    var n = 2130;
    Math.abs(this.node.x - 40) < 45 && (n += 90);
    var t = -1020;
    Math.abs(this.node.x + 940) < 45 && (t -= 90);
    if (Math.cos(Game.yidongjiandu * Math.PI / 180) * Game.yidongV > 0 && this.node.y < n && this.node.x > -2190 && this.node.x < 460) {
      this.node.y += Math.cos(Game.yidongjiandu * Math.PI / 180) * Game.yidongV * 60 * e;
    } else {
      Math.cos(Game.yidongjiandu * Math.PI / 180) * Game.yidongV < 0 && this.node.y > t && this.node.x > -2190 && this.node.x < 460 && (this.node.y += Math.cos(Game.yidongjiandu * Math.PI / 180) * Game.yidongV * 60 * e);
    }
    this.gui_gongji_daoju();
  },
  gui_huixue: function () {
    if (!(this.huixuedian.length <= 0)) {
      var e = false;
      for (var i = 0; i < this.huixuedian.length; i++) {
        if (Math.abs(this.node.x - this.huixuedian[i].x) < 90 && Math.abs(this.node.y - this.huixuedian[i].y) < 90) {
          this.ph += this.phMax / 300;
          if (this.ph >= this.phMax) {
            this.ph = this.phMax;
          } else {
            e = true;
          }
        }
      }
      this.huixuetexiao.active = e;
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
          console.log("进入范围---------");
          music.api_audioPlay(MainDate.mp3.guigongji);
          if (this.gui_gongjiMenDie) {
            i.getComponent("men").gongji(this.gongjili);
            this.guinaomenNumEXP++;
            this.guishengji();
          } else {
            if (i.getComponent("men").ph <= i.getComponent("men").phMax / 8) {
              this.gui_gongjiMenDie = true, music.api_audioPlay(MainDate.mp3.guishengji), this.dengji++, this.guinaomenNumEXP = 0, this.dengjixianshi.getComponent(cc.Label).string = "lv:" + this.dengji, Game.fangzhitanchuang("怪物升到了" + this.dengji + "级"), this.gui_dengji_shuju();
            }
            i.getComponent("men").gongji(i.getComponent("men").phMax / 8);
          }
          this.playAnimation_gongji();
          break;
        }
      }
    }
  },
  gui_gongji_daoju: function () {
    if (!(this.fuzhouTime > 0 || this.youbuTime > 0 || Game.gameOver)) {
      for (var e = 0; e < Game.props.children.length; e++) {
        var i = Game.props.children[e];
        if (i && i.isValid && ("youxiji" == i.name || "paotai" == i.name) && Math.abs(i.x - this.node.x) < 45 && Math.abs(i.y - this.node.y) < 45) {
          music.api_audioPlay(MainDate.mp3.chaijianzhu);
          this.playAnimation_gongji();
          return void Game.props.children[e].destroy();
        }
      }
    }
  },
  gui_gongji_chuang: function () {
    if (!(this.fuzhouTime > 0 || this.youbuTime > 0 || Game.gameOver)) {
      for (var e = 0; e < Game.chuangArr.length; e++) {
        var i = Game.chuangArr[e];
        if (i && i.isValid && Math.abs(i.x - this.node.x) <= 120 && Math.abs(i.y - this.node.y) <= 120) {
          music.api_audioPlay(MainDate.mp3.chaijianzhu);
          if (i.playerAI) {
            Game.fangzhitanchuang("一名玩家已被淘汰");
            for (var a = 0; a < Game.player_Arr.length; a++) {
              Game.player_Arr[a].getComponent("playerAI").maidiao_Arr(i);
            }
            playerNum--;
          }
          this.playAnimation_gongji();
          Game.chuangArr[e].destroy();
          playerNum <= 0 && cocoscreator.api_showTip("prefab/game/gameWin", function (e) {
            var i = cc.instantiate(e);
            i.scale = 0;
            Game.MainCameraUI.addChild(i);
            cocoscreator.api_panetoff(i);
          }.bind(this));
        }
      }
    }
  },
  gui_beigongji: function (e) {
    if (this.guiVis && !Game.gameOver) {
      this.ph -= e;
      if (this.ph <= 0) {
        this.ph, this.guiVis = false, ext && ext.guiFuhuo ? cocoscreator.api_showTip("prefab/game/mengyanFuhuo", function (e) {
          var i = cc.instantiate(e);
          i.scale = 0;
          Game.MainCameraUI.addChild(i);
          cocoscreator.api_panetoff(i);
        }.bind(this)) : (Game.gameOver = true, cocoscreator.api_showTip("prefab/game/gameOver", function (e) {
          var i = cc.instantiate(e);
          i.scale = 0;
          Game.MainCameraUI.addChild(i);
          cocoscreator.api_panetoff(i);
        }.bind(this)));
      }
    }
  },
  gui_fuhuo: function () {
    this.huixuedian;
    if (this.dengji < 14) {
      this.dengji++;
      Game.fangzhitanchuang("怪物升到了" + this.dengji + "级");
    }
    this.guiVis = true;
    this.dengjixianshi.getComponent(cc.Label).string = "lv:" + this.dengji;
    this.ph = this.guishengjiJson[this.dengji].hp;
    this.gui_dengji_shuju();
  },
  playAnimation_gongji: function () {
    this._armatureDisplay = this.node.getComponent(dragonBones.ArmatureDisplay);
    this._armatureDisplay.playAnimation("newAnimation_gongji", 1);
    this._armatureDisplay.addEventListener(dragonBones.EventObject.COMPLETE, this.OnAnimationPlayComplete_gongji, this);
  },
  OnAnimationPlayComplete_gongji: function (e) {
    this._armatureDisplay = this.node.getComponent(dragonBones.ArmatureDisplay);
    this._armatureDisplay.removeEventListener(dragonBones.EventObject.COMPLETE, this.OnAnimationPlayComplete_gongji, this);
    this.playAnimation_zou();
  },
  playAnimation_zou: function () {
    this._armatureDisplay = this.node.getComponent(dragonBones.ArmatureDisplay);
    this._armatureDisplay.playAnimation("newAnimation_zou", -1);
    this._armatureDisplay.addEventListener(dragonBones.EventObject.COMPLETE, this.OnAnimationPlayComplete_zou, this);
  },
  OnAnimationPlayComplete_zou: function (e) {
    this._armatureDisplay = this.node.getComponent(dragonBones.ArmatureDisplay);
    this._armatureDisplay.removeEventListener(dragonBones.EventObject.COMPLETE, this.OnAnimationPlayComplete_zou, this);
  },
  guishengji: function () {
    this.dengji >= 14 || this.guishengjiJson[this.dengji].exp < this.guinaomenNumEXP && (music.api_audioPlay(MainDate.mp3.guishengji), this.dengji++, this.guinaomenNumEXP = 0, this.dengjixianshi.getComponent(cc.Label).string = "lv:" + this.dengji, Game.fangzhitanchuang("怪物升到了" + this.dengji + "级"), this.gui_dengji_shuju());
  }
});
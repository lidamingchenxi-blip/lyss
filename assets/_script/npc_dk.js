cc.Class({
  extends: cc.Component,
  properties: {
    gui1: cc.Node,
    gui2: cc.Node,
    gui3: cc.Node,
    xuetiao: cc.Node,
    bar: cc.Node,
    dengji: cc.Node,
    hongbarSpriteFrame: {
      default: null,
      type: cc.SpriteFrame
    },
    lvbarSpriteFrame: {
      default: null,
      type: cc.SpriteFrame
    }
  },
  onLoad: function () {
    this.newGame();
  },
  newGame: function () {
    switch (this.node.pifu) {
      case 1:
        this.gui1.active = true;
        this.gui = this.gui1;
        break;
      case 2:
        this.gui2.active = true;
        this.gui = this.gui2;
        break;
      case 3:
        this.gui3.active = true;
        this.gui = this.gui3;
    }
    this.gongjichuangbuzhou = -1;
    this.bianzu = this.node.bianzu;
    this.gongji = this.node.gongji;
    this.gongjisudu = this.node.gongjisudu;
    this.gongjusudu_zuiman = this.node.gongjisudu;
    this.gongsu_jianshao = false;
    this.yisu = this.node.yisu;
    this.ph = this.node.hp;
    this.phMax = this.node.hp;
    if (this.bianzu == Player.bianzu) {
      this.bar.getComponent(cc.Sprite).spriteFrame = this.lvbarSpriteFrame;
    } else {
      this.bar.getComponent(cc.Sprite).spriteFrame = this.hongbarSpriteFrame;
    }
    this.dengji.getComponent(cc.Label).string = "lv:" + this.node.dengji;
    this.gongji_player();
    this.playAnimation_zou();
  },
  gongji_player: function () {
    this.jiancegongjigui() || this.jiancegongjimen() || this.jiancegongjichuang();
  },
  jiancegongjigui: function () {
    var e = [];
    for (var i = 0; i < Game.guiweizhi.children.length; i++) {
      var a = Game.guiweizhi.children[i];
      a.bianzu != this.bianzu && e.push(a);
    }
    if (e.length <= 0) {
      return false;
    }
    var n = e[Math.floor(Math.random() * e.length)];
    this.gongjigui = n;
    return true;
  },
  jiancegongjichuang: function () {
    if (1 == this.bianzu) {
      this.gongjiChuangPosArr = [{
        x: Player.menX + 90,
        y: Player.menY
      }, {
        x: Player.menX + 45,
        y: Player.menY - 90
      }, {
        x: Player.menX - 270 + 45,
        y: Player.menY - 90
      }];
    } else {
      2 == this.bianzu && (this.gongjiChuangPosArr = [{
        x: PlayerAI_dk.playerAImenX - 90,
        y: PlayerAI_dk.playerAImenY
      }, {
        x: PlayerAI_dk.playerAImenX - 90,
        y: PlayerAI_dk.playerAImenY + 90
      }, {
        x: PlayerAI_dk.playerAImenX - 270 - 90,
        y: PlayerAI_dk.playerAImenY + 90
      }]);
    }
    this.gongjichuangbuzhou = 0;
  },
  jiancegongjimen: function () {
    var e = [];
    for (var i = 0; i < Game.menArr.length; i++) {
      var a = Game.menArr[i];
      a && a.isValid && a.bianzu != this.bianzu && e.push(a);
    }
    this.bianzu;
    if (e.length <= 0) {
      return false;
    }
    var n = e[Math.floor(Math.random() * e.length)];
    this.gongjimen = n;
    return true;
  },
  update: function (e) {
    if (!Game.gameOver) {
      var i = this.ph / this.phMax;
      i <= 0 && (i = 0);
      this.xuetiao.getComponent(cc.ProgressBar).progress = i;
      if (this.gongjichuangbuzhou >= 0) {
        var a = this.gongjiChuangPosArr[this.gongjichuangbuzhou];
        if (this.gongjichuangbuzhou <= 2 && Math.abs(this.node.x - a.x) < 25 && Math.abs(this.node.y - a.y) < 25) {
          this.gongjichuangbuzhou += 1;
        } else if (this.gongjichuangbuzhou <= 2) {
          var n = 60 * this.yisu * e;
          var t = 60 * this.yisu * e;
          if (Math.abs(this.node.x - a.x) >= 15) {
            if (this.node.x < a.x) {
              this.node.x += t;
            } else {
              this.node.x -= t;
            }
          }
          if (Math.abs(this.node.y - a.y) >= 15) {
            if (this.node.y < a.y) {
              this.node.y += n;
            } else {
              this.node.y -= n;
            }
          }
        } else {
          var o;
          Game.gameOver = true;
          o = this.bianzu == Player.bianzu ? "prefab/game/gameWin" : "prefab/game/gameOver";
          cocoscreator.api_showTip(o, function (e) {
            var i = cc.instantiate(e);
            i.scale = 0;
            Game.MainCameraUI.addChild(i);
            cocoscreator.api_panetoff(i);
          }.bind(this));
        }
      } else if (this.gongjigui || this.gongjimen) {
        if (this.gongjigui && this.gongjigui.isValid) {
          if (Math.abs(this.node.x - this.gongjigui.x) < 60 && Math.abs(this.node.y - this.gongjigui.y) < 60) {
            this.gongjisudu -= e;
            if (this.gongjisudu <= 0) {
              this.gongjusudu_zuiman = this.node.gongjisudu;
              this.gongjisudu = this.gongjusudu_zuiman;
              this.playAnimation_gongji();
              this.gongjigui.getComponent("npc_dk").gui_beigongji(this.gongji) && this.gongji_player();
            }
          } else {
            var s = 60 * this.yisu * e;
            var c = 60 * this.yisu * e;
            if (Math.abs(this.node.x - this.gongjigui.x) >= 30) {
              if (this.node.x < this.gongjigui.x) {
                this.node.x += c;
              } else {
                this.node.x -= c;
              }
            }
            if (Math.abs(this.node.y - this.gongjigui.y) >= 30) {
              if (this.node.y < this.gongjigui.y) {
                this.node.y += s;
              } else {
                this.node.y -= s;
              }
            }
          }
        } else if (this.gongjimen && this.gongjimen.isValid) {
          if (Math.abs(this.node.x - this.gongjimen.x) < 60 && Math.abs(this.node.y - this.gongjimen.y) < 60) {
            this.gongjisudu -= e;
            if (this.gongjisudu <= 0) {
              if (this.bianzu != Player.bianzu && Player.bingxiangNum >= 1) {
                this.gongjusudu_zuiman = 1.15 * this.node.gongjisudu;
              } else {
                this.gongjusudu_zuiman = this.node.gongjisudu;
              }
              this.gongjisudu = this.gongjusudu_zuiman;
              this.playAnimation_gongji();
              this.gongjimen.getComponent("men").gongji(this.gongji);
            }
          } else {
            var r = 120 * e;
            var u = 120 * e;
            if (Math.abs(this.node.x - this.gongjimen.x) >= 30) {
              if (this.node.x < this.gongjimen.x) {
                this.node.x += u;
              } else {
                this.node.x -= u;
              }
            }
            if (Math.abs(this.node.y - this.gongjimen.y) >= 30) {
              if (this.node.y < this.gongjimen.y) {
                this.node.y += r;
              } else {
                this.node.y -= r;
              }
            }
          }
        } else {
          this.gongji_player();
        }
      } else {
        this.gongji_player();
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
  gui_beigongji: function (e) {
    return this.ph <= 0 || (this.ph -= e, this.ph <= 0 && (this.node.destroy(), true));
  }
});
cc.Class({
  extends: cc.Component,
  properties: {
    pipeijiemian_gui: cc.Node,
    pipeijiemian_xueshengS: cc.Node,
    pipeijiemian_zhunbei: cc.Node,
    qiehuanzhenying: cc.Node,
    guidi: cc.Node,
    xuesheng_jiantou: cc.Node,
    xuesheng_zi: cc.Node,
    gui_jiantou: cc.Node,
    gui_zi: cc.Node
  },
  onLoad: function () {
    var e = this;
    this.node.zIndex = 15;
    if (2 == MainDate.GameType) {
      this.qiehuanzhenying.active = true;
      this.xuesheng_jiantou.active = false;
      this.xuesheng_zi.active = false;
      this.gui_jiantou.active = true;
      this.gui_zi.active = true;
      cc.loader.loadRes("image/game/gui/" + Game.guiXuhao, cc.SpriteFrame, function (i, a) {
        e.pipeijiemian_gui.getComponent(cc.Sprite).spriteFrame = a;
        e.pipeijiemian_gui.active = true;
      });
      if (window.playerNum) {
        this.playerNum = window.playerNum;
        switch (this.playerNum) {
          case 4:
            this.pipeirenwu = [0, 1, 2, 3];
            break;
          case 6:
            this.pipeirenwu = [0, 1, 2, 3, 4, 5];
        }
        var i = this.pipeijiemian_xueshengS.children;
        for (var a = 0; a < i.length; a++) {
          a < this.playerNum || i[--a].removeFromParent();
        }
      } else {
        this.pipeirenwu = [0, 1, 2, 3, 4, 5];
        this.playerNum = 6;
        window.playerNum = this.playerNum;
      }
      cc.loader.loadRes("image/game/pipeijiemian/xuanzhongkuang", cc.SpriteFrame, function (i, a) {
        e.guidi.getComponent(cc.Sprite).spriteFrame = a;
      });
    } else if (1 == MainDate.GameType) {
      this.qiehuanzhenying.active = true;
      this.xuesheng_jiantou.active = true;
      this.xuesheng_zi.active = true;
      this.gui_jiantou.active = false;
      this.gui_zi.active = false;
      if (window.playerNum) {
        this.playerNum = window.playerNum;
        switch (this.playerNum) {
          case 4:
            this.pipeirenwu = ["gui", 0, 1, 3];
            break;
          case 6:
            this.pipeirenwu = ["gui", 0, 1, 3, 4, 5];
        }
        var n = this.pipeijiemian_xueshengS.children;
        for (var t = 0; t < n.length; t++) {
          t < this.playerNum || n[--t].removeFromParent();
        }
      } else {
        this.pipeirenwu = ["gui", 0, 1, 3, 4, 5];
        this.playerNum = 5;
        window.playerNum = this.playerNum;
      }
      cc.loader.loadRes("image/game/xuesheng/ren" + MainDate.renwuXuhao, cc.SpriteFrame, function (i, a) {
        e.pipeijiemian_xueshengS.children[2].getChildByName("xuesheng").getComponent(cc.Sprite).spriteFrame = a;
        e.pipeijiemian_xueshengS.children[2].getChildByName("xuesheng").active = true;
      });
      cc.loader.loadRes("image/game/pipeijiemian/xuanzhongkuang", cc.SpriteFrame, function (i, a) {
        e.pipeijiemian_xueshengS.children[2].getComponent(cc.Sprite).spriteFrame = a;
      });
    } else if (3 == MainDate.GameType) {
      this.qiehuanzhenying.active = true;
      this.xuesheng_jiantou.active = true;
      this.xuesheng_zi.active = true;
      this.gui_jiantou.active = false;
      this.gui_zi.active = false;
      this.pipeirenwu = ["gui", 0, 1, 3, 4, 5];
      this.playerNum = 5;
      window.playerNum = this.playerNum;
      cc.loader.loadRes("image/game/xuesheng/ren" + MainDate.renwuXuhao, cc.SpriteFrame, function (i, a) {
        e.pipeijiemian_xueshengS.children[2].getChildByName("xuesheng").getComponent(cc.Sprite).spriteFrame = a;
        e.pipeijiemian_xueshengS.children[2].getChildByName("xuesheng").active = true;
      });
      cc.loader.loadRes("image/game/pipeijiemian/xuanzhongkuang", cc.SpriteFrame, function (i, a) {
        e.pipeijiemian_xueshengS.children[2].getComponent(cc.Sprite).spriteFrame = a;
      });
    } else {
      this.qiehuanzhenying.active = false;
    }
  },
  but_pipeijiemianzhunbei: function () {
    window.Game.Init_Game();
    music.api_audioPlay(MainDate.mp3.anniu);
    if (!this.zhunbei) {
      this.pipeijiemian_zhunbei.active = false;
      this.zhunbei = true;
      Game.fangjianbianzu = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];
      var e = function (i, a) {
        cocoscreator.api_showTip("prefab/game/player", function (n) {
          var t = cc.instantiate(n);
          var o = Math.floor(Math.random() * this.fangjianbianzu.length);
          t.qianwangfangjian = this.fangjianbianzu[o];
          this.fangjianbianzu.splice(o, 1);
          t.name = this.player_ArrName[i];
          t.pifu = this.player_ArrPifu[i];
          t.pifuNum = i;
          t.Pos = {
            x: (918 + i) % 50,
            y: 50 - Math.floor((918 + i) / 50) - 1
          };
          t.x = t.Pos.x % 50 * 90 - 2205;
          t.y = 90 * t.Pos.y - 2205;
          this.props.addChild(t);
          this.player_Arr.push(t);
          ++i < a && e(i, a);
        }.bind(Game));
      }.bind(this);
      var i = function () {
        var a = this;
        if (this.pipeirenwu.length <= 0) {
          this.node.destroy();
          Game.pipeijiemian = false;
          e(0, this.playerNum);
          var n = function (e) {
            cc.loader.loadRes("image/game/touxiang/" + Game.player_ArrPifu[e], cc.SpriteFrame, function (i, a) {
              Game.touxiangkuang.children[e].getChildByName("touxiang").getComponent(cc.Sprite).spriteFrame = a;
              Game.touxiangkuang.children[e].getChildByName("beidaosi").active = false;
            });
          };
          for (var t = 0; t < Game.player_ArrPifu.length - 1; t++) {
            n(t);
          }
          for (var o = 0; o < Game.touxiangkuang.children.length; o++) {
            if (o > this.playerNum) {
              Game.touxiangkuang.children[o].active = false;
            } else {
              Game.touxiangkuang.children[o].children[1].active = false;
            }
          }
          cc.loader.loadRes("image/game/touxiang/" + MainDate.renwuXuhao, cc.SpriteFrame, function (e, i) {
            Game.touxiangkuang.children[Game.player_ArrPifu.length - 1].getChildByName("touxiang").getComponent(cc.Sprite).spriteFrame = i;
            Game.touxiangkuang.children[Game.player_ArrPifu.length - 1].getChildByName("beidaosi").active = false;
            Game.touxiangkuang.children[Game.player_ArrPifu.length - 1].children[1].active = true;
          });
        } else {
          var s = Math.floor(Math.random() * this.pipeirenwu.length);
          var c = this.pipeirenwu[s];
          var r = Math.floor(6 * Math.random()) + 1;
          var u = MainDate.gameName[Math.floor(MainDate.gameName.length * Math.random())];
          if ("gui" == c) {
            cc.loader.loadRes("image/game/gui/" + Game.guiXuhao, cc.SpriteFrame, function (e, i) {
              a.pipeijiemian_gui.getComponent(cc.Sprite).spriteFrame = i;
              a.pipeijiemian_gui.active = true;
            });
          } else {
            cc.loader.loadRes("image/game/xuesheng/ren" + r, cc.SpriteFrame, function (e, i) {
              a.pipeijiemian_xueshengS.children[c].getChildByName("xuesheng").getComponent(cc.Sprite).spriteFrame = i;
              a.pipeijiemian_xueshengS.children[c].getChildByName("xuesheng").active = true;
              a.pipeijiemian_xueshengS.children[c].getChildByName("name").getComponent(cc.Label).string = u;
              a.pipeijiemian_xueshengS.children[c].getChildByName("name").active = true;
              cc.tween(a.pipeijiemian_xueshengS.children[c]).to(.2, {
                scale: .7
              }).to(.1, {
                scale: 1
              }).start();
            });
          }
          Game.player_ArrPifu.push(r);
          Game.player_ArrName.push(u);
          s > -1 && this.pipeirenwu.splice(s, 1);
          setTimeout(function () {
            i();
          }, 1500 * Math.random());
        }
      }.bind(this);
      i();
    }
  },
  but_genghuanzhenying: function () {
    adUtils.executeShowVideo(function () {
      if (1 == MainDate.GameType || 3 == MainDate.GameType || 4 == MainDate.GameType || 5 == MainDate.GameType || 7 == MainDate.GameType) {
        MainDate.GameType = 2;
        cc.director.loadScene("scene/Game");
      } else if (2 == MainDate.GameType) {
        MainDate.GameType = 1, cc.director.loadScene("scene/Game");
      }
    });
  },
  start: function () {}
});
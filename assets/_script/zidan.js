cc.Class({
  extends: cc.Component,
  properties: {},
  onLoad: function () {
    this.vis = true;
  },
  update: function (e) {
    if (this.vis) {
      if (8 == MainDate.GameType) {
        if (!this.gui || !this.gui.isValid) {
          this.vis = false;
          return void this.node.destroy();
        }
        if (Math.abs(this.node.x - this.gui.x) < 40 && Math.abs(this.node.y - this.gui.y) < 40) {
          this.vis = false;
          this.node.getComponent(cc.Animation).play();
          this.gui.getComponent("tafangGui").beigongji(this.gongjili);
          this.shifoutouqian();
        } else {
          var i = 1500 * e;
          var a = 1500 * e;
          if (Math.abs(this.node.y - this.gui.y) > Math.abs(this.node.x - this.gui.x)) {
            a = Math.abs(this.node.x - this.gui.x) / Math.abs(this.node.y - this.gui.y) * 25;
          } else {
            i = Math.abs(this.node.y - this.gui.y) / Math.abs(this.node.x - this.gui.x) * 25;
          }
          if (Math.abs(this.node.x - this.gui.x) >= 30) {
            if (this.node.x < this.gui.x) {
              this.node.x += a;
            } else {
              this.node.x -= a;
            }
          }
          if (Math.abs(this.node.y - this.gui.y) >= 30) {
            if (this.node.y < this.gui.y) {
              this.node.y += i;
            } else {
              this.node.y -= i;
            }
          }
        }
      } else if (Math.abs(this.node.x - Game.gui.x) < 40 && Math.abs(this.node.y - Game.gui.y) < 40) {
        this.vis = false;
        this.node.getComponent(cc.Animation).play();
        if (2 == MainDate.GameType) {
          playerGui.gui_beigongji(this.gongjili);
        } else {
          Game.gui.getComponent("gui").gui_beigongji(this.gongjili);
        }
        this.duantoutai || this.fuzhoufasheqi || this.shifoutouqian();
      } else {
        var n = 1500 * e;
        var t = 1500 * e;
        if (Math.abs(this.node.y - Game.gui.y) > Math.abs(this.node.x - Game.gui.x)) {
          t = Math.abs(this.node.x - Game.gui.x) / Math.abs(this.node.y - Game.gui.y) * 25;
        } else {
          n = Math.abs(this.node.y - Game.gui.y) / Math.abs(this.node.x - Game.gui.x) * 25;
        }
        if (Math.abs(this.node.x - Game.gui.x) >= 30) {
          if (this.node.x < Game.gui.x) {
            this.node.x += t;
          } else {
            this.node.x -= t;
          }
        }
        if (Math.abs(this.node.y - Game.gui.y) >= 30) {
          if (this.node.y < Game.gui.y) {
            this.node.y += n;
          } else {
            this.node.y -= n;
          }
        }
      }
    }
  },
  shifoutouqian: function () {
    (1 != MainDate.GameType && 2 != MainDate.GameType && 3 != MainDate.GameType && 4 != MainDate.GameType && 7 != MainDate.GameType || Player.men && Player.men.bianzu == this.bianzu && !(MainDate.dangqianNum_tikuanji <= 0)) && ((5 == MainDate.GameType || 8 == MainDate.GameType) && MainDate.dangqianNum_tikuanji <= 0 || (cocoscreator.api_showTip("prefab/game/huodeziyuan", function (e) {
      var i = cc.instantiate(e);
      i.getChildByName("jinbi").active = true;
      i.getChildByName("shandian").active = false;
      i.getChildByName("jinbi").getComponent(cc.Label).string = " +" + Game.daoJuJson[31 + this.dengji].touqian * Game.shouyi_Beishu;
      if (this.paotai && this.paotai.isValid) {
        i.x = this.paotai.x;
        i.y = this.paotai.y;
      } else {
        i.active = false;
      }
      Game.props.addChild(i);
      cc.tween(i).to(1.5, {
        y: i.y + 80,
        scale: .4
      }).call(function () {
        i.destroy();
      }).start();
    }.bind(this)), Player.jinbiArr += Game.daoJuJson[31 + this.dengji].touqian * Game.shouyi_Beishu, Game.jinbiNum.getComponent(cc.Label).string = Player.jinbiArr, Player.shengjijiantou_tishi()));
  },
  donghuabofang: function () {
    this.node.destroy();
  }
});
cc.Class({
  extends: cc.Component,
  properties: {},
  onLoad: function () {
    this.vis = true;
    this.guiX = this.node.guiX;
    this.guiY = this.node.guiY;
    this.gui = this.node.gui;
    this.gongjili = this.node.gongjili;
  },
  update: function (e) {
    if (this.vis) {
      if (Math.abs(this.node.x - this.guiX) < 40 && Math.abs(this.node.y - this.guiY) < 40) {
        this.vis = false;
        this.node.getComponent(cc.Animation).play();
        this.gui && this.gui.isValid && this.gui.getComponent("npc_dk").gui_beigongji(this.gongjili);
      } else {
        var i = 1500 * e;
        var a = 1500 * e;
        if (Math.abs(this.node.y - this.guiY) > Math.abs(this.node.x - this.guiX)) {
          a = Math.abs(this.node.x - this.guiX) / Math.abs(this.node.y - this.guiY) * 25;
        } else {
          i = Math.abs(this.node.y - this.guiY) / Math.abs(this.node.x - this.guiX) * 25;
        }
        if (Math.abs(this.node.x - this.guiX) >= 30) {
          if (this.node.x < this.guiX) {
            this.node.x += a;
          } else {
            this.node.x -= a;
          }
        }
        if (Math.abs(this.node.y - this.guiY) >= 30) {
          if (this.node.y < this.guiY) {
            this.node.y += i;
          } else {
            this.node.y -= i;
          }
        }
      }
    }
  },
  shifoutouqian: function () {
    (Player.men && Player.men.bianzu == this.bianzu && !(MainDate.dangqianNum_tikuanji <= 0) || 1 != MainDate.GameType && 2 != MainDate.GameType && 3 != MainDate.GameType && 4 != MainDate.GameType) && (5 == MainDate.GameType && MainDate.dangqianNum_tikuanji <= 0 || (cocoscreator.api_showTip("prefab/game/huodeziyuan", function (e) {
      var i = cc.instantiate(e);
      i.getChildByName("jinbi").active = true;
      i.getChildByName("shandian").active = false;
      i.getChildByName("jinbi").getComponent(cc.Label).string = " +" + Game.daoJuJson[31 + this.dengji].touqian * Game.shouyi_Beishu;
      i.x = this.paotai.x;
      i.y = this.paotai.y;
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
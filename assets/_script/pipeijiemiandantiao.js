cc.Class({
  extends: cc.Component,
  properties: {
    pipeijiemian_gui: cc.Node,
    pipeijiemian_xuesheng: cc.Node,
    pipeijiemian_zhunbei: cc.Node,
    qiehuanzhenying: cc.Node
  },
  onLoad: function () {
    var e = this;
    this.node.zIndex = 15;
    cc.loader.loadRes("image/game/xuesheng/ren" + MainDate.renwuXuhao, cc.SpriteFrame, function (i, a) {
      e.pipeijiemian_xuesheng.getComponent(cc.Sprite).spriteFrame = a;
      e.pipeijiemian_xuesheng.active = true;
    });
    this.qiehuanzhenying.active = false;
  },
  but_dantiaopipeijiemian: function () {
    music.api_audioPlay(MainDate.mp3.anniu);
    if (!this.zhunbei) {
      this.pipeijiemian_zhunbei.active = false;
      this.zhunbei = true;
      var e = function () {
        var e = this;
        cc.loader.loadRes("image/game/gui/" + Game.guiXuhao, cc.SpriteFrame, function (i, a) {
          e.pipeijiemian_gui.getComponent(cc.Sprite).spriteFrame = a;
          e.pipeijiemian_gui.active = true;
          setTimeout(function () {
            e.node.destroy();
            Game.pipeijiemian = false;
            8 == MainDate.GameType && Game.tafang_newGame();
          }, 1500 * Math.random());
        });
      }.bind(this);
      setTimeout(function () {
        e();
      }, 1500 * Math.random());
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
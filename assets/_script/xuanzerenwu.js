cc.Class({
  extends: cc.Component,
  properties: {
    guixuanze: cc.Node,
    guixuanzepifu: cc.Node,
    xueshengxuanze: cc.Node,
    xueshengxuanzepifu: cc.Node
  },
  onLoad: function () {
    this.newGame();
  },
  newGame: function () {
    if (2 == MainDate.GameType || 6 == MainDate.GameType) {
      this.guixuanze.active = true;
      this.xueshengxuanze.active = false;
    } else if (1 == MainDate.GameType || 3 == MainDate.GameType || 5 == MainDate.GameType || 4 == MainDate.GameType || 7 == MainDate.GameType) {
      this.guixuanze.active = false;
      this.xueshengxuanze.active = true;
      var e = [2, 3, 4, 5, 6];
      var i = Math.floor(Math.random() * e.length);
      this.xueshengxuanzepifu.children[e[i]].active = true;
      e.splice(i, 1);
      var a = Math.floor(Math.random() * e.length);
      this.xueshengxuanzepifu.children[e[a]].active = true;
      e.splice(a, 1);
    }
  },
  but_huoqu: function (e) {
    var i = this;
    adUtils.executeShowVideo(function () {
      switch (e.currentTarget.name) {
        case "gui2xuanze":
          Game.guiXuhao = 2;
          break;
        case "gui3xuanze":
          Game.guiXuhao = 3;
          break;
        case "xuesheng2":
          MainDate.renwuXuhao = 2;
          break;
        case "xuesheng3":
          MainDate.renwuXuhao = 3;
          break;
        case "xuesheng4":
          MainDate.renwuXuhao = 4;
          break;
        case "xuesheng5":
          MainDate.renwuXuhao = 5;
          break;
        case "xuesheng6":
          MainDate.renwuXuhao = 6;
      }
      i.node.destroy();
      if (6 != MainDate.GameType) {
        Game.chuangjian_gui();
      } else {
        Game.xuanzegui_dk();
      }
    });
  },
  but_guanbi: function () {
    this.node.destroy();
    if (6 != MainDate.GameType) {
      Game.chuangjian_gui();
    } else {
      Game.xuanzegui_dk();
    }
  },
  start: function () {}
});
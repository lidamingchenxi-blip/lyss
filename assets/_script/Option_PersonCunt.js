cc.Class({
  extends: cc.Component,
  properties: {},
  onLoad: function () {
    window.playerNum = null;
  },
  start: function () {},
  touch_ButtonCallback: function (e) {
    switch (e.target.name) {
      case "4":
        window.playerNum = 4;
        break;
      case "6":
        window.playerNum = 6;
    }
    this.but_gogame();
  },
  but_gogame: function () {
    MainDate.GameType = 1;
    cc.director.loadScene("scene/Game");
  }
});
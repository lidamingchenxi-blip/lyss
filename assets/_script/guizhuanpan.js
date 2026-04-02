cc.Class({
  extends: cc.Component,
  properties: {
    zhuandong: cc.Node,
    button: cc.Node
  },
  onLoad: function () {},
  but_fangqi: function () {
    music.api_audioPlay(MainDate.mp3.anniu);
    this.node.destroy();
  },
  but_choujiang: function () {
    var e;
    var i;
    var a;
    var n = this;
    music.api_audioPlay(MainDate.mp3.anniu);
    var t = Math.random();
    this.button.active = false;
    if (t > .9) {
      e = "liaowangtai";
      i = "望远镜";
      a = 26;
    } else if (t > .8) {
      e = "daoci";
      i = "藤蔓";
      a = 150;
    } else if (t > .3) {
      e = "weixiutai";
      i = "精密仪器";
      a = Math.random() > .5 ? 90 : -90;
    } else {
      e = "nengliang";
      i = "防护装置";
      a = -27;
    }
    this.zhuandong.angle = 0;
    cc.tween(this.zhuandong).to(5, {
      angle: 5400 + a
    }, {
      easing: "sineOut"
    }).call(function () {
      MainDate.PlayerData[e] += 1;
      MainDate.PlayerDataSetObject();
      Tools.ShowAsk("恭喜获得一个" + i);
      n.button.active = true;
    }).start();
  }
});
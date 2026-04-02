cc.Class({
  extends: cc.Component,
  properties: {
    yy_modules: {
      default: null,
      type: cc.Node,
      displayName: "预约_模式"
    }
  },
  onLoad: function () {
    this.yy_clickList = [];
    this.yy_Kye = "";
    this.yy_Index = 0;
    var e = new Date().getFullYear().toString();
    var i = new Date() - new Date(e);
    var a = Math.ceil(i / 864e5) + 1;
    this.yy_Kye = a;
    var n = false;
    var t = cc.StorageInfo.yy_click;
    for (var o = 0; o < t.length; o++) {
      var s = t[o];
      var c = Object.keys(s)[0];
      if (c && String(a) === String(c)) {
        this.yy_Index = o;
        n = true;
        this.yy_clickList = s;
        break;
      }
    }
    var r = {};
    if (!n) {
      r[a] = [0, 0, 0];
      cc.StorageInfo.yy_click.push(r);
      this.yy_clickList = r;
      this.yy_Index = cc.StorageInfo.yy_click.length - 1;
    }
    cc.sys.localStorage.setItem(App.storageName, JSON.stringify(cc.StorageInfo));
    var u = this.yy_modules.children;
    for (var h = 0; h < this.yy_clickList[a].length; h++) {
      var g = this.yy_clickList[a][h];
      u[h].btnId = h;
      g > 0 && (u[h].getChildByName("yy_btn").active = false);
    }
  },
  start: function () {
    adUtils.executeShowOtherAdvertising(true);
  },
  touchButtonCallback: function (e) {
    var i = this;
    music.api_audioPlay(MainDate.mp3.anniu);
    switch (e.target.name) {
      case "yy_btn":
        adUtils.executeShowVideo(function () {
          var a = e.target.parent;
          cc.StorageInfo.yy_click[i.yy_Index][i.yy_Kye][a.btnId] = 1;
          cc.sys.localStorage.setItem(App.storageName, JSON.stringify(cc.StorageInfo));
          MainDate.PlayerData.juzi += 100;
          MainDate.PlayerDataSetObject();
          Menu.juziNum.getComponent(cc.Label).string = MainDate.PlayerData.juzi;
          window.goldTX();
        });
    }
    this.node.removeFromParent();
  },
  getYearDay: function () {
    var e = new Date().getFullYear().toString();
    var i = new Date() - new Date(e);
    var a = Math.ceil(i / 864e5) + 1;
    console.log("今天是%s年中的第%s天", e, a);
    return a >= 4399;
  }
});
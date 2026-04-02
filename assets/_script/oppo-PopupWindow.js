cc.Class({
  extends: cc.Component,
  properties: {},
  onLoad: function () {
    var e = this.node.getChildByName("native").getChildByName("closeButton");
    if (ServerConfig.closeScale) {
      e.width = 39 * ServerConfig.closeScale;
      e.width = 40 * ServerConfig.closeScale;
    }
    this.nImg = this.node.getChildByName("native").getChildByName("img").getComponent(cc.Sprite);
    this.nImg.spriteFrame = null;
    this.awardList = [50, 75, 100, 150, 200, 250, 300, 500, 1e3];
    this.openCount = 0;
    var i = this.node.getChildByName("body");
    var a = i.getChildByName("window").getChildByName("content").children;
    this.boxList = [];
    for (var n = 0; n < a.length; n++) {
      a[n].getComponent("oppo-BoxItem").registerTouchEvent(this.openBoxHandle.bind(this));
      this.boxList.push(a[n]);
    }
    this.lookButton = i.getChildByName("below").getChildByName("button").getChildByName("lookButton");
    this.openButton = i.getChildByName("below").getChildByName("button").getChildByName("openButton");
    this.waiveButton = i.getChildByName("below").getChildByName("waiveButton");
    this.openButton.active = false;
    this.waiveButton.active = false;
  },
  initialize: function (e, i, a, n) {
    var t = this;
    this.waive_handle = i;
    this.touch_handle = a;
    this.close_handle = n;
    var o = StringMgr.getExtensionName(e);
    "png" !== o && "jpg" !== o && (o = "png");
    cc.loader.load({
      url: e,
      type: o
    }, function (e, i) {
      if (e) {
        t.node.getChildByName("native").removeFromParent(true);
      } else {
        t.nImg.spriteFrame = new cc.SpriteFrame(i);
      }
    });
  },
  openBoxHandle: function (e) {
    var i = this;
    var a = function () {
      e.doOpen(i.awardList[i.openCount]);
      i.openCount++;
      if (i.openCount >= 3 && !i.openButton.active) {
        i.openButton.active = true;
        i.waiveButton.active = true;
        for (var a = 0; a < i.boxList.length; a++) {
          i.boxList[a].getComponent("oppo-BoxItem").showVideoFlag();
        }
      }
      if (i.openCount >= 9) {
        i.lookButton.active = false;
        i.scheduleOnce(function () {
          i.node.removeFromParent(true);
        }, .5);
      }
    };
    if (this.openCount >= 3) {
      adUtils.executeShowVideo(a);
    } else {
      a();
    }
  },
  executeOpen: function () {
    var e = this;
    adUtils.executeShowVideo(function () {
      var i = [];
      for (var a = 0; a < e.boxList.length; a++) {
        var n = e.boxList[a];
        n.isOpen || i.push(n);
      }
      if (!(i.length <= 0)) {
        var t = i.slice(0, 3);
        for (var o = 0; o < t.length; o++) {
          t[o].getComponent("oppo-BoxItem").doOpen(e.awardList[e.openCount]);
          e.openCount++;
        }
        if (e.openCount >= 9) {
          e.lookButton.active = false;
          e.scheduleOnce(function () {
            e.node.removeFromParent(true);
          }, .5);
        }
      }
    });
  },
  buttonTouchEventCallBack: function (e) {
    switch (e.target.name) {
      case "closeButton":
        console.log("closeButton");
        this.lookButton.active = false;
        this.waiveButton.active = true;
        this.close_handle && this.close_handle(this.node.getChildByName("native"));
        break;
      case "lookButton":
      case "native":
        console.log("lookButton");
        this.lookButton.active = false;
        this.waiveButton.active = true;
        this.touch_handle && this.touch_handle(this.node.getChildByName("native"));
        break;
      case "openButton":
        this.executeOpen();
        break;
      case "waiveButton":
        this.waive_handle && this.waive_handle(this.node);
    }
  }
});
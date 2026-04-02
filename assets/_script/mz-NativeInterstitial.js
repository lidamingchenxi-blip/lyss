cc.Class({
  extends: cc.Component,
  properties: {
    NativeImg: {
      default: null,
      type: cc.Sprite,
      displayName: "原生图"
    },
    CloseButton: {
      default: null,
      type: cc.Node,
      displayName: "关闭按钮"
    }
  },
  onLoad: function () {
    if (ServerConfig.closeScale) {
      this.CloseButton.width = 38 * ServerConfig.closeScale;
      this.CloseButton.height = 38 * ServerConfig.closeScale;
    }
  },
  initialize: function (e, i) {
    var a = this;
    console.log("初始化[OPPO]原生插屏");
    this.data = e;
    this.eHandle = i;
    var n = this.data.res.adList.pop();
    this.id = n.adId;
    var t = n.imgUrlList.pop();
    this.data.ad.reportAdShow({
      adId: this.id
    });
    var o = StringMgr.getExtensionName(t);
    "png" !== o && "jpg" !== o && (o = "png");
    cc.loader.load({
      url: t,
      type: o
    }, function (e, i) {
      if (e) {
        a.node.removeFromParent(true);
      } else {
        a.NativeImg.spriteFrame = new cc.SpriteFrame(i);
      }
    });
  },
  executeDestroy: function () {
    this.data.ad.destroy();
    this.node.removeFromParent(true);
  },
  executeClose: function () {
    this.eHandle && this.eHandle();
    this.executeDestroy();
  },
  executeTouch: function () {
    this.data.ad.reportAdClick({
      adId: this.id
    });
    this.eHandle && this.eHandle();
    this.executeDestroy();
  },
  buttonTouchEventCallBack: function (e) {
    switch (e.target.name) {
      case "closeButton":
        this.executeClose();
        break;
      case "nativeButton":
      case "window":
        this.executeTouch();
    }
  }
});
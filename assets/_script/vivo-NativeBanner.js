cc.Class({
  extends: cc.Component,
  properties: {
    NativeImg: {
      default: null,
      type: cc.Sprite,
      displayName: "底图"
    },
    CloseButton: {
      default: null,
      type: cc.Sprite,
      displayName: "关闭按钮"
    }
  },
  onLoad: function () {
    if (ServerConfig.closeScale) {
      this.CloseButton.width = 38 * ServerConfig.closeScale;
      this.CloseButton.height = 38 * ServerConfig.closeScale;
    }
  },
  initialize: function (e) {
    var i = this;
    this.data = e;
    var a = this.data.res.adList.pop();
    this.id = a.adId;
    var n = a.imgUrlList.pop();
    this.data.ad.reportAdShow({
      adId: this.id
    });
    var t = StringMgr.getExtensionName(n);
    "png" !== t && "jpg" !== t && (t = "png");
    cc.loader.load({
      url: imgPath,
      type: t
    }, function (e, a) {
      i.NativeImg.spriteFrame = new cc.SpriteFrame(a);
    });
  },
  executeDestroy: function () {
    this.data.ad.destroy();
    this.node.removeFromParent(true);
  },
  executeClose: function () {
    this.executeDestroy();
  },
  executeTouch: function () {
    console.log("executeTouch");
    this.data.ad.reportAdClick({
      adId: this.id
    });
    this.executeDestroy();
  },
  buttonTouchEventCallBack: function (e) {
    switch (e.target.name) {
      case "vivo-NativeBanner":
        this.executeTouch();
        break;
      case "closeButton":
        this.executeClose();
    }
  }
});
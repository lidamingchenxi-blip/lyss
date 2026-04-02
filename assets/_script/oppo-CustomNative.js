cc.Class({
  extends: cc.Component,
  properties: {},
  onLoad: function () {
    if (PlatformCode !== PlatformList.OPPO) {
      console.log("隐藏");
      return void (this.node.active = false);
    }
    this.Img = this.node.getChildByName("img").getComponent(cc.Sprite);
    this.Img.spriteFrame = null;
    this.button = this.node.getChildByName("lookButton");
    this.button.active = false;
  },
  start: function () {
    var e = this;
    adUtils.getNativeMessage(function (i) {
      if (i) {
        e.ad = i.ad;
        var a = i.res.adList.pop();
        e.id = a.adId;
        var n = a.imgUrlList.pop();
        var t = StringMgr.getExtensionName(n);
        "png" !== t && "jpg" !== t && (t = "png");
        cc.loader.load({
          url: n,
          type: t
        }, function (i, a) {
          if (i) {
            e.node.active = false;
          } else {
            e.ad.reportAdShow({
              adId: e.id
            });
            e.NativeImg.spriteFrame = new cc.SpriteFrame(a);
          }
        });
      } else {
        e.node.active = false;
      }
    });
  },
  executeClose: function () {
    this.ad.destroy();
    this.node.removeFromParent(true);
  },
  executeTouch: function () {
    this.ad.reportAdClick({
      adId: this.id
    });
    this.executeClose();
  },
  buttonTouchEventCallBack: function (e) {
    switch (e.target.name) {
      case "closeButton":
        this.executeClose();
        break;
      case "lookButton":
      case "img":
        this.executeTouch();
    }
  }
});
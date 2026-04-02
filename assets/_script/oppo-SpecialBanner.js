cc.Class({
  extends: cc.Component,
  properties: {},
  onLoad: function () {
    this.NativeImg = this.node.getChildByName("content").getChildByName("img").getComponent(cc.Sprite);
    this.NativeImg.spriteFrame = null;
  },
  initialize: function (e, i, a, n) {
    var t = this;
    this.next_handle = i;
    this.touch_handle = a;
    this.close_handle = n;
    var o = StringMgr.getExtensionName(e);
    "png" !== o && "jpg" !== o && (o = "png");
    cc.loader.load({
      url: e,
      type: o
    }, function (e, i) {
      if (e) {
        t.node.removeFromParent(true);
      } else {
        t.NativeImg.spriteFrame = new cc.SpriteFrame(i);
      }
    });
  },
  executeTouch: function () {
    console.log("查看广告");
    this.touch_handle && this.touch_handle(this.node.getChildByName("content"));
  },
  buttonTouchEventCallBack: function (e) {
    switch (e.target.name) {
      case "img":
        this.executeTouch();
        break;
      case "closeButton":
        this.close_handle && this.close_handle(this.node.getChildByName("content"));
        break;
      case "nextButton":
        this.next_handle && this.next_handle();
    }
  }
});
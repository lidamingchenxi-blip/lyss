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
  initialize: function (e, i, a) {
    var n = this;
    this.touch_handle = i;
    this.close_handle = a;
    var t = StringMgr.getExtensionName(e);
    "png" !== t && "jpg" !== t && (t = "png");
    cc.loader.load({
      url: e,
      type: t
    }, function (e, i) {
      n.NativeImg.spriteFrame = new cc.SpriteFrame(i);
    });
  },
  executeClose: function () {
    this.close_handle && this.close_handle();
  },
  executeTouch: function () {
    this.touch_handle && this.touch_handle();
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
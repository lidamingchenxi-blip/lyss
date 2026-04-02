cc.Class({
  extends: cc.Component,
  properties: {},
  registerLoginHandle: function (e) {
    this.handle = e;
  },
  buttonTouchEventCallBack: function (e) {
    this.handle && this.handle();
  }
});
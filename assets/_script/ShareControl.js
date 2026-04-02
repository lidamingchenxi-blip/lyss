cc.Class({
  extends: cc.Component,
  properties: {},
  onLoad: function () {
    if (PlatformCode === PlatformList.头条 || PlatformCode === PlatformList.快手 || PlatformCode === PlatformList.QQ || PlatformCode === PlatformList.微信) {
      this.node.active = true;
    } else {
      this.node.active = false;
    }
  },
  buttonTouchEventCallBack: function () {
    adUtils.executeShare();
  }
});
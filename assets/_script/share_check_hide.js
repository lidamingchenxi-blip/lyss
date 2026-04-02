cc.Class({
  extends: cc.Component,
  properties: {},
  onLoad: function () {},
  start: function () {
    if (PlatformCode === PlatformList.QQ || PlatformCode === PlatformList.头条 || PlatformCode === PlatformList.快手) {
      this.node.active = true;
    } else {
      this.node.active = false;
    }
  }
});
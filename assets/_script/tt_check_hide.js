cc.Class({
  extends: cc.Component,
  properties: {},
  onLoad: function () {},
  start: function () {
    var e = this;
    this.scheduleOnce(function () {
      // if (PlatformCode === PlatformList.QQ || PlatformCode === PlatformList.头条 || PlatformCode === PlatformList.快手) {
      //   if (0 === ServerConfig.startVideo) {
      //     e.node.active = false;
      //   } else {
      //     e.node.active = true;
      //   }
      // } else if (PlatformCode === PlatformList.摸摸鱼 && ServerConfig.isShengHe) {
      //   e.node.active = false;
      // } else {
      //   e.node.active = true;
      // }
    }, .001);
  }
});
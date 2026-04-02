cc.Class({
  extends: cc.Component,
  properties: {},
  onLoad: function () {
    cc.game.addPersistRootNode(this.node);
  },
  start: function () {
    ServerConfig.celue.apkTime > 0 && (PlatformCode !== PlatformList.OPPO && PlatformCode !== PlatformList.VIVO && PlatformCode !== PlatformList.UC || this.schedule(function () {
      console.log("间隔时间调用插屏,间隔的时间为: ", ServerConfig.celue.apkTime);
      adUtils.clearAllAdvertising();
      adUtils.executeShowInterstitial(false);
    }, ServerConfig.celue.apkTime));
  }
});
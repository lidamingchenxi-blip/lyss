cc.Class({
  extends: cc.Component,
  properties: {
    progressBar: {
      default: null,
      type: cc.ProgressBar,
      displayName: "进度条"
    }
  },
  onLoad: function () {
    if (!cc.sys.localStorage.getItem("box_".concat(App.storageName))) {
      cc.sys.localStorage.setItem("box_".concat(App.storageName), JSON.stringify("新用户"));
    }
    this.showBoxCount = 0;
    this.isTrigger = false;
    this.clickSpeed = .18;
    this.value = 0;
    this.crazyClickValue = Math.round(10 * Math.random() + 30);
    this.node.zIndex = 999;
    adUtils.clearAllAdvertising();
  },
  start: function () {
    PlatformCode === PlatformList.QQ && window.qq.onHide(function () {
      if (this.nHandle) {
        this.nHandle();
        this.nHandle = null;
      }
      adUtils.executeDestroyBanner();
      this.node.destroy();
    }.bind(this));
    PlatformCode === PlatformList.头条 && window.tt.onHide(function () {
      if (this.nHandle) {
        this.nHandle();
        this.nHandle = null;
      }
      adUtils.clearAllAdvertising();
      this.node.destroy();
    }.bind(this));
  },
  onDestroy: function () {
    PlatformCode === PlatformList.QQ && window.qq.offHide();
    window.tt && window.tt.offHide();
  },
  initialize: function (e) {
    this.nHandle = e;
  },
  onCrazyClick: function (e) {
    var i = this;
    this.value += this.clickSpeed;
    if (1 != this.isTrigger) {
      if (this.value >= 1) {
        this.isTrigger = true;
        if (this.nHandle) {
          this.nHandle();
          this.nHandle = null;
        }
        adUtils.executeDestroyBanner();
        return void this.node.destroy();
      }
      if (!(this.showBoxCount >= 2)) {
        if (this.value >= this.crazyClickValue / 100) {
          this.isTrigger = true;
          this.showBoxCount++;
          this.scheduleOnce(function () {
            i.isTrigger = false;
          }, .5);
          if (MathMgr.getRandomNum(0, 100) < ServerConfig.boxVideo) {
            console.log("触发视频");
            this.showVideo();
          } else {
            console.log("触发Banner");
            this.showBanner();
          }
        }
      }
    }
  },
  showVideo: function () {
    var e = this;
    adUtils.executeShowVideo(function (i) {
      if (e.nHandle) {
        e.nHandle();
        e.nHandle = null;
      }
      e.node.destroy();
    }, function (i) {
      if (e.nHandle) {
        e.nHandle();
        e.nHandle = null;
      }
      e.node.destroy();
    });
  },
  showBanner: function () {
    adUtils.executeShowBanner();
  },
  update: function (e) {
    this.value -= .6 * e * (1 + 1 * this.value);
    this.value < 0 && (this.value = 0);
    this.progressBar.progress = this.value;
  }
});
function n(e, i) {
  if (!(e instanceof i)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function t(e, i) {
  for (var a = 0; a < i.length; a++) {
    var n = i[a];
    n.enumerable = n.enumerable || false;
    n.configurable = true;
    "value" in n && (n.writable = true);
    Object.defineProperty(e, n.key, n);
  }
}
function o(e, i, a) {
  i && t(e.prototype, i);
  a && t(e, a);
  return e;
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.baidu = undefined;
var exp_baidu = function () {
  function _ctor() {
    var i = this;
    n(this, _ctor);
    this.device = null;
    this.Interstitial = null;
    this.Banner = null;
    this.video = null;
    this.video_success = null;
    this.video_failure = null;
    this.lastVideoTime = 0;
    this.allowVideo = true;
    console.log("初始化[百度]平台");
    this.device = swan.getSystemInfoSync();
    ServerConfig.iconList.length > 0 && ServerConfig.allowInterstitial && cc.loader.loadRes("Platform/Prefabs/baidu/baidu-Interstitial", cc.Prefab, function (e, a) {
      i.Interstitial = cc.instantiate(a);
      i.Interstitial.zIndex = 99998;
      cc.game.addPersistRootNode(i.Interstitial);
    });
    ServerConfig.iconList.length > 5 && ServerConfig.allowBanner && cc.loader.loadRes("Platform/Prefabs/baidu/baidu-Banner", cc.Prefab, function (e, a) {
      i.Banner = cc.instantiate(a);
      i.Banner.zIndex = 99999;
      cc.game.addPersistRootNode(i.Banner);
    });
    this.video = swan.createRewardedVideoAd({
      adUnitId: App.BaiDu.videoCode,
      appSid: App.BaiDu.appSID
    });
    this.video.onClose(function (e) {
      if (e.isEnded) {
        i.executeVideoSuccessCallBack();
      } else {
        i.executeVideoFailureCallBack();
      }
    });
  }
  o(_ctor, [{
    key: "clearAdvertising",
    value: function () {
      this.Interstitial && this.Interstitial.getComponent("baidu-Interstitial").doHide();
      this.Banner && (this.Banner.active = false);
    }
  }, {
    key: "getRandomIntNum",
    value: function (e, i) {
      var a = i - e;
      var n = Math.random();
      return e + Math.round(n * a);
    }
  }, {
    key: "showVideo",
    value: function (e, i) {
      var a = this;
      if (!(new Date().getTime() - this.lastVideoTime <= 2e3)) {
        console.log("触发Baidu激励视频");
        this.video_success = e;
        this.video_failure = i;
        cc.audioEngine.pauseAll();
        cc.director.pause();
        this.video.load().then(function () {
          a.video.show();
        }).catch(function (e) {
          a.executeVideoFailureCallBack();
        });
      }
    }
  }, {
    key: "showStartVideo",
    value: function (e, i) {
      if (ServerConfig.startVideo && this.allowVideo) {
        this.allowVideo = false;
        this.getRandomIntNum(0, 100) < ServerConfig.startVideo && this.showVideo(e, i);
      }
    }
  }, {
    key: "showCustomInterstitial",
    value: function (e) {
      var i = this;
      if (ServerConfig.allowInterstitial) {
        this.Interstitial && this.Interstitial.getComponent("baidu-Interstitial").doShow(function () {
          if (e) {
            var a = MathMgr.getRandomNum(0, 100);
            console.log("rdm:", a);
            a < ServerConfig.quitShow && i.showCustomBanner();
          }
        });
        this.Banner && this.Banner.active && (this.Banner.active = false);
      }
    }
  }, {
    key: "showCustomBanner",
    value: function () {
      if (ServerConfig.allowBanner) {
        this.Interstitial && this.Interstitial.active && this.Interstitial.getComponent("baidu-Interstitial").doHide();
        this.Banner && (this.Banner.active = true);
      }
    }
  }, {
    key: "executeShowToast",
    value: function () {
      swan.showToast({
        title: msg,
        duration: 1500
      });
    }
  }, {
    key: "executeVideoSuccessCallBack",
    value: function () {
      cc.director.resume();
      cc.audioEngine.resumeAll();
      this.video_success && this.video_success();
      this.video_success = null;
    }
  }, {
    key: "executeVideoFailureCallBack",
    value: function () {
      cc.director.resume();
      cc.audioEngine.resumeAll();
      this.video_failure && this.video_failure();
      this.video_failure = null;
    }
  }]);
  return _ctor;
}();
exports.baidu = exp_baidu;
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
exports.bytedance = undefined;
var exp_bytedance = function () {
  function _ctor() {
    var i = this;
    n(this, _ctor);
    this.allowVideo = true;
    this.device = null;
    this.video = null;
    this.sBanner = null;
    this.sInterstitial = null;
    this.startTime = null;
    this.displayTime = 0;
    this.allowInterstitial = false;
    this.recorder = null;
    this.recorderPath = "";
    this.startRecorderTime = null;
    this.endRecorderTime = null;
    this.video_success = null;
    this.video_failure = null;
    this.share_success = null;
    this.share_failure = null;
    this.device = tt.getSystemInfoSync();
    this.startTime = new Date().getTime();
    window.tt.onShow(function (e) {
      i.recorder && i.recorder.isRecording && i.recorder.resume();
    });
    window.tt.onHide(function () {
      i.recorder && i.recorder.isRecording && i.recorder.pause();
    });
    if ("novel_fm" !== this.device.appName && "novelapp" !== this.device.appName) {
      this.recorder = window.tt.getGameRecorderManager();
      this.recorder.onStop(function (e) {
        i.recorderPath = e.videoPath;
        i.endRecorderTime = new Date().getTime();
        i.recorder.isRecording = false;
      });
    }
    if (ServerConfig.bannerCode && "" !== ServerConfig.bannerCode) {
      this.sBanner = window.tt.createBannerAd({
        adUnitId: ServerConfig.bannerCode,
        adIntervals: 30,
        style: {
          width: 200,
          top: this.device.windowHeight - 112.5
        }
      });
      this.sBanner.onLoad(function () {
        console.log("Banner加载成功");
      });
      this.sBanner.onResize(function (e) {
        i.sBanner.style.left = (i.device.windowWidth - e.width) / 2;
        i.sBanner.style.top = i.device.windowHeight - 112.5;
      });
    }
  }
  o(_ctor, [{
    key: "clearAdvertising",
    value: function () {
      this.destroySystemInterstitial();
      this.destroySystemBanner();
    }
  }, {
    key: "getRandomIntNum",
    value: function (e, i) {
      var a = i - e;
      var n = Math.random();
      return e + Math.round(n * a);
    }
  }, {
    key: "isSatisfy",
    value: function () {
      if (!tt.getLaunchOptionsSync) {
        return false;
      }
      if (!ServerConfig.sceneID || ServerConfig.sceneID.length <= 0) {
        return false;
      }
      var e = tt.getLaunchOptionsSync().scene;
      console.log("当前场景值 = ", e);
      for (var i = 0; i < ServerConfig.sceneID.length; i++) {
        if (e === ServerConfig.sceneID[i]) {
          return true;
        }
      }
      return false;
    }
  }, {
    key: "showStartVideo",
    value: function () {
      if (this.allowVideo) {
        this.allowVideo = false;
        if (this.isSatisfy()) {
          this.showVideo(null, null);
        } else {
          this.getRandomIntNum(0, 100) < ServerConfig.startVideo && this.showVideo(null, null);
        }
      }
    }
  }, {
    key: "showVideo",
    value: function (e, i) {
      var a = this;
      var n = ServerConfig.videoCode;
      n && "" !== n || (n = App.ByteDance.videoCode[this.getRandomIntNum(0, 1)]);
      cc.director.pause();
      cc.audioEngine.pauseAll();
      this.video_success = e;
      this.video_failure = i;
      var t = window.tt.createRewardedVideoAd({
        adUnitId: n
      });
      t.onClose(function (e) {
        if (e.isEnded) {
          a.executeSucceedWithVideo();
        } else {
          a.executeFailureWithVideo();
        }
      });
      t.load().then(function () {
        console.log("拉取视频广告成功, 等待显示!!");
        t.show().then(function () {
          console.log("视频广告成功显示~~~~");
        }).catch(function (e) {
          console.log("视频广告成功失败:", e);
          a.executeShowToast("视频组件显示失败，请稍后再试！");
          a.executeFailureWithVideo();
        });
      }).catch(function (e) {
        console.error("拉取视频广告失败:", e);
        a.executeShowToast("视频组件加载失败，请稍后再试！");
        a.executeFailureWithVideo();
      });
    }
  }, {
    key: "showSystemBanner",
    value: function () {
      this.sBanner && this.sBanner.show();
    }
  }, {
    key: "destroySystemBanner",
    value: function () {
      this.sBanner && this.sBanner.hide();
    }
  }, {
    key: "showSystemInterstitial",
    value: function (e) {
      var i = this;
      if (ServerConfig.interstitialCode && "" !== ServerConfig.interstitialCode) {
        var a = new Date().getTime();
        if ((a - this.startTime) / 1e3 < 30) {
          console.warn("游戏启动后, 30秒内无法显示插屏");
        } else if ((a - this.displayTime) / 1e3 <= 60) {
          console.warn("距离上次显示不得小于60秒");
        } else {
          this.sInterstitial = tt.createInterstitialAd({
            adUnitId: ServerConfig.interstitialCode
          });
          this.sInterstitial.onClose(function () {
            e && i.getRandomIntNum(0, 100) < ServerConfig.quitShow && i.showSystemBanner();
          });
          this.sInterstitial.load().then(function () {
            i.sInterstitial.show().then(function () {
              console.log("插屏广告展示成功");
              i.displayTime = new Date().getTime();
            });
          }).catch(function (a) {
            e && i.getRandomIntNum(0, 100) < ServerConfig.quitShow && i.showSystemBanner();
          });
        }
      }
    }
  }, {
    key: "destroySystemInterstitial",
    value: function () {
      if (this.interstitial) {
        this.interstitial.destroy();
        this.interstitial = null;
      }
    }
  }, {
    key: "startRecorder",
    value: function () {
      var e = this;
      if (this.recorder) {
        this.recorder.isRecording && this.stopRecorder();
        setTimeout(function () {
          e.recorder.start({
            duration: 120
          });
          e.startRecorderTime = new Date().getTime();
          console.log("开始录制, 开始时间:", e.startRecorderTime);
        }, 200);
      } else {
        console.error("开始录制失败:无效的录制组件!!");
      }
    }
  }, {
    key: "stopRecorder",
    value: function () {
      if (this.recorder) {
        this.recorder.stop();
      } else {
        console.error("停止录制失败:无效的录制组件!!");
      }
    }
  }, {
    key: "doShare",
    value: function (e, i) {
      var a = this;
      if (this.recorderPath && "" !== this.recorderPath) {
        if (this.endRecorderTime - this.startRecorderTime <= 3e3) {
          this.executeShowToast("视频时长过短");
        } else {
          this.share_success = e;
          this.share_failure = i;
          var n = "";
          if (ServerConfig.bgm.length > 0) {
            var t = this.getRandomIntNum(0, ServerConfig.bgm.length - 1);
            n = ServerConfig.bgm[t];
          }
          window.tt.shareAppMessage({
            channel: "video",
            title: "点击这里，开始游戏",
            extra: {
              defaultBgm: n,
              videoPath: this.recorderPath,
              videoTopics: ["小游戏", App.chineseName, App.shareLanguage]
            },
            success: function () {
              a.share_success && a.share_success();
            },
            fail: function (e) {
              "shareAppMessage:fail video file is too short" === e.errMsg.substr(0, 44) && tt.showToast({
                title: "视频时长过短",
                duration: 1e3
              });
              a.share_failure && a.share_failure();
            }
          });
        }
      } else {
        this.executeShowToast("无有效录制文件!");
      }
    }
  }, {
    key: "showMoreGame",
    value: function () {
      if ("ios" !== this.device.platform) {
        window.tt.showMoreGamesModal({
          appLaunchOptions: [{
            appId: App.ByteDance.appId
          }]
        });
      } else {
        this.executeShowToast("IOS暂不支持此功能");
      }
    }
  }, {
    key: "doShake",
    value: function (e) {
      if (e) {
        tt.vibrateLong({});
      } else {
        tt.vibrateShort({});
      }
    }
  }, {
    key: "executeShowToast",
    value: function (e) {
      window.tt.showToast({
        title: e,
        duration: 1500
      });
    }
  }, {
    key: "executeSucceedWithVideo",
    value: function () {
      cc.director.resume();
      cc.audioEngine.resumeAll();
      this.video_success && this.video_success();
      this.video_success = null;
    }
  }, {
    key: "executeFailureWithVideo",
    value: function () {
      cc.director.resume();
      cc.audioEngine.resumeAll();
      this.video_failure && this.video_failure();
      this.video_failure = null;
    }
  }]);
  return _ctor;
}();
exports.bytedance = exp_bytedance;
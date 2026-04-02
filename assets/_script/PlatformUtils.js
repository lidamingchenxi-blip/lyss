Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var $8_oppo = require("_oppo");
var $8_vivo = require("_vivo");
var $8_baidu = require("_baidu");
var $8_bytedance = require("_bytedance");
var $8_huawei = require("_huawei");
var $8_tencent = require("_tencent");
var $8_quick = require("_quick");
var $8_uc = require("_uc");
var $8_4399 = require("_4399");
var $8_meizu = require("_meizu");
function m(e, i) {
  if (!(e instanceof i)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function l(e, i) {
  for (var a = 0; a < i.length; a++) {
    var n = i[a];
    n.enumerable = n.enumerable || false;
    n.configurable = true;
    "value" in n && (n.writable = true);
    Object.defineProperty(e, n.key, n);
  }
}
function p(e, i, a) {
  i && l(e.prototype, i);
  a && l(e, a);
  return e;
}
var def_PlatformUtils = function () {
  function _ctor() {
    m(this, _ctor);
    this.platform = null;
    this.nativeCallBack = null;
    this.bannerTriggerTime = 0;
    this.interstitialTriggerTime = 0;
    this.overResidueCount = 0;
    this.pauseResidueCount = 0;
    this.otherResidueCount = 0;
    this.gameResidueCount = 0;
    console.log("初始化平台工具集合");
  }
  p(_ctor, [{
    key: "initialize",
    value: function () {
      var e = new Date().getTime();
      this.interstitialTriggerTime = e + 1e3 * ServerConfig.celue.interstitialTime;
      this.bannerTriggerTime = e + 1e3 * ServerConfig.celue.bannerTime;
      this.overResidueCount = ServerConfig.celue.overCount;
      this.pauseResidueCount = ServerConfig.celue.pauseCount;
      this.otherResidueCount = ServerConfig.celue.otherCount;
      this.gameResidueCount = ServerConfig.celue.gameCount;
      switch (PlatformCode) {
        case PlatformList.头条:
          this.platform = new $8_bytedance.bytedance();
          break;
        case PlatformList.华为:
          this.platform = new $8_huawei.huawei();
          break;
        case PlatformList.OPPO:
          this.platform = new $8_oppo.oppo();
          break;
        case PlatformList.VIVO:
          this.platform = new $8_vivo.vivo();
          break;
        case PlatformList.QQ:
          this.platform = new $8_tencent.tencent();
          break;
        case PlatformList.微信:
          break;
        case PlatformList.百度:
          this.platform = new $8_baidu.baidu();
          break;
        case PlatformList.快手:
          this.platform = new $8_quick.quick();
          break;
        case PlatformList.魅族:
          this.platform = new $8_meizu.meizu();
          break;
        case PlatformList.UC:
          this.platform = new $8_uc.uc();
          break;
        case PlatformList.游家:
          this.platform = new $8_4399.youjia();
      }
    }
  }, {
    key: "requestLocation",
    value: function (e) {
      var i = this;
      switch (PlatformCode) {
        case PlatformList.头条:
          Object.assign(ServerConfig, ServerConfig, App.ByteDance.extend);
          break;
        case PlatformList.华为:
          Object.assign(ServerConfig, ServerConfig, App.HuaWei.extend);
          break;
        case PlatformList.OPPO:
          Object.assign(ServerConfig, ServerConfig, App.OPPO.extend);
          break;
        case PlatformList.VIVO:
          Object.assign(ServerConfig, ServerConfig, App.VIVO.extend);
          break;
        case PlatformList.QQ:
          Object.assign(ServerConfig, ServerConfig, App.Tencent.extend);
          break;
        case PlatformList.微信:
          Object.assign(ServerConfig, ServerConfig, App.WeChat.extend);
          break;
        case PlatformList.百度:
          Object.assign(ServerConfig, ServerConfig, App.BaiDu.extend);
          break;
        case PlatformList.快手:
          Object.assign(ServerConfig, ServerConfig, App.Quick.extend);
          break;
        case PlatformList.魅族:
          Object.assign(ServerConfig, ServerConfig, App.MeiZu.extend);
          break;
        case PlatformList.UC:
          Object.assign(ServerConfig, ServerConfig, App.UC.extend);
          break;
        case PlatformList.游家:
          Object.assign(ServerConfig, ServerConfig, App.YouJia.extend);
          break;
        case PlatformList.VIVO_APK:
          Object.assign(ServerConfig, ServerConfig, App.VIVO_APK.extend);
          break;
        case PlatformList.OPPO_APK:
          Object.assign(ServerConfig, ServerConfig, App.OPPO_APK.extend);
          break;
        case PlatformList.APK_233:
          Object.assign(ServerConfig, ServerConfig, App.APK_233.extend);
          break;
        case PlatformList.XIAOMI_APK:
          Object.assign(ServerConfig, ServerConfig, App.XIAOMI_APK.extend);
          break;
        case PlatformList.OTHER_APK:
          Object.assign(ServerConfig, ServerConfig, App.OTHER_APK.extend);
          break;
        case PlatformList.摸摸鱼:
          Object.assign(ServerConfig, ServerConfig, App.Fish_APK.extend);
      }
      console.log("url = ", window.urlPath);
      console.log("当前平台 = ".concat(Object.keys(PlatformList)[PlatformCode]));
      if (PlatformCode !== PlatformList.无 && PlatformCode !== PlatformList.游家) {
        if (PlatformCode !== PlatformList.UC && cc.sys.os !== cc.sys.OS_IOS) {
          if (PlatformCode !== PlatformList.头条 && PlatformCode !== PlatformList.QQ && PlatformCode !== PlatformList.微信 && PlatformCode !== PlatformList.快手) {
            var a = new XMLHttpRequest();
            a.addEventListener("error", function () {
              i.requestRemote(null, e);
            });
            a.addEventListener("load", function () {
              if (a.responseText) {
                try {
                  var n = JSON.parse(a.responseText);
                  if (n.cityCode && n.proCode) {
                    var t = "".concat(n.cityCode, ",").concat(n.proCode);
                    i.requestRemote(t, e);
                  } else {
                    i.requestRemote(null, e);
                  }
                } catch (a) {
                  i.requestRemote(null, e);
                }
              } else {
                i.requestRemote(null, e);
              }
            });
            a.open("GET", "");
            a.setRequestHeader("content-type", "application/json; charset=utf-8");
            a.send();
          } else {
            var n = null;
            var t = this;
            switch (PlatformCode) {
              case PlatformList.头条:
                n = tt.request;
                break;
              case PlatformList.QQ:
                n = qq.request;
                break;
              case PlatformList.微信:
                n = wx.request;
                break;
              case PlatformList.快手:
                n = ks.request;
                break;
              case PlatformList.百度:
                n = swan.request;
            }
            n({
              url: "",
              data: {},
              handle: {
                "content-type": "application/json"
              },
              dataType: "JSON",
              success: function (i) {
                if (i) {
                  try {
                    var a = cc.js.isString(i.data) ? JSON.parse(i.data) : i.data;
                    var n = "".concat(a.cityCode, ",").concat(a.proCode);
                    t.requestRemote(n, e);
                  } catch (i) {
                    t.requestRemote(null, e);
                  }
                } else {
                  t.requestRemote(null, e);
                }
              },
              fail: function (i) {
                t.requestRemote(null, e);
              }
            });
          }
        } else {
          this.requestRemote(null, e);
        }
      } else {
        e && e();
      }
    }
  }, {
    key: "requestRemote",
    value: function (e, i) {
      var a = this;
      if (PlatformCode !== PlatformList.UC) {
        var n = function (i) {
          for (var a = 0; a < i.length; a++) {
            if (-1 != e.indexOf(i[a])) {
              return true;
            }
          }
          return false;
        };
        if (PlatformCode !== PlatformList.头条 && PlatformCode !== PlatformList.QQ && PlatformCode !== PlatformList.微信 && PlatformCode !== PlatformList.快手) {
          console.log("读取远程配置");
          var t = new XMLHttpRequest();
          t.addEventListener("error", function () {
            console.log("error1");
            PlatformCode !== PlatformList.OPPO && a.loadSubpackage(i);
          });
          t.addEventListener("load", function () {
            if (t.responseText) {
              try {
                var o = JSON.parse(t.responseText);
                if (e) {
                  if (o.locationList && o.locationList.length > 0) {
                    if (n(o.locationList)) {
                      a.loadSubpackage(i);
                    } else {
                      window.ServerConfig = o;
                      a.loadSubpackage(i);
                    }
                  } else {
                    window.ServerConfig = o;
                    a.loadSubpackage(i);
                  }
                } else {
                  window.ServerConfig = o;
                  a.loadSubpackage(i);
                }
              } catch (e) {
                console.log("error2");
                PlatformCode !== PlatformList.OPPO && a.loadSubpackage(i);
              }
            } else {
              PlatformCode !== PlatformList.OPPO && a.loadSubpackage(i);
            }
          });
          t.open("GET", window.urlPath);
          t.setRequestHeader("content-type", "application/json; charset=utf-8");
          t.send();
        } else {
          var o = null;
          var s = this;
          switch (PlatformCode) {
            case PlatformList.头条:
              o = tt.request;
              break;
            case PlatformList.QQ:
              o = qq.request;
              break;
            case PlatformList.微信:
              o = wx.request;
              break;
            case PlatformList.快手:
              o = ks.request;
              break;
            case PlatformList.百度:
              o = swan.request;
          }
          o({
            url: window.urlPath,
            data: {},
            handle: {
              "content-type": "application/json"
            },
            dataType: "JSON",
            success: function (a) {
              if (a) {
                try {
                  var t = cc.js.isString(a.data) ? JSON.parse(a.data) : a.data;
                  if (e) {
                    if (t.locationList && t.locationList.length > 0) {
                      if (n(t.locationList)) {
                        s.loadSubpackage(i);
                      } else if (n(t.locationList)) {
                        s.loadSubpackage(i);
                      } else {
                        if (PlatformCode === PlatformList.头条) {
                          var o = false;
                          if (tt.getLaunchOptionsSync) {
                            "990001" == tt.getLaunchOptionsSync().scene && (o = true);
                          } else {
                            o = false;
                          }
                          if (o) {
                            t.saoma && (window.ServerConfig = t);
                          } else {
                            window.ServerConfig = t;
                          }
                        } else {
                          window.ServerConfig = t;
                        }
                        s.loadSubpackage(i);
                      }
                    } else {
                      window.ServerConfig = t;
                      s.loadSubpackage(i);
                    }
                  } else {
                    window.ServerConfig = t;
                    s.loadSubpackage(i);
                  }
                } catch (e) {
                  s.loadSubpackage(i);
                }
              } else {
                s.loadSubpackage(i);
              }
            },
            fail: function (e) {
              s.loadSubpackage(i);
            }
          });
        }
      } else {
        cc.loader.load({
          url: window.urlPath,
          type: "json"
        }, function (e, a) {
          if (e) {
            i && i();
          } else {
            window.ServerConfig = a;
            i && i();
          }
        });
      }
    }
  }, {
    key: "loadSubpackage",
    value: function (e) {
      var i = null;
      switch (PlatformCode) {
        case PlatformList.头条:
          i = tt;
          break;
        case PlatformList.OPPO:
        case PlatformList.VIVO:
          i = qg;
          break;
        case PlatformList.QQ:
          i = qq;
          break;
        case PlatformList.微信:
          i = wx;
          break;
        case PlatformList.百度:
          i = swan;
          break;
        case PlatformList.快手:
          i = ks;
      }
      if (i) {
        i.showLoading({
          title: "加载中...",
          mask: true,
          success: function () {
            return console.log("loading 提示框显示成功");
          }
        });
        var a = function (e, a) {
          i.loadSubpackage({
            name: e,
            success: function (e) {
              a();
            },
            fail: function (e) {}
          }).onProgressUpdate(function (e) {});
        };
        (function (e, i) {
          var n = 0;
          console.log(e[n])
          a(e[n], function t() {
            if (++n >= e.length) {
              i();
            } else {
              a(e[n], t);
            }
          });
        })(window.subpackage, function () {
          i.hideLoading({});
          e && e();
        });
      } else {
        e && e();
      }
    }
  }, {
    key: "getRandomIntNum",
    value: function (e, i) {
      var a = i - e;
      var n = Math.random();
      return e + Math.round(n * a);
    }
  }, {
    key: "setMoreButtonStatus",
    value: function (e) {
      if (PlatformCode !== PlatformList.头条 && PlatformCode !== PlatformList.QQ && PlatformCode !== PlatformList.OPPO) {
        e.active = false;
      } else {
        e.active = true;
      }
    }
  }, {
    key: "setShortcutButtonStatus",
    value: function (e) {
      if (PlatformCode !== PlatformList.QQ && PlatformCode !== PlatformList.VIVO && PlatformCode !== PlatformList.OPPO && PlatformCode !== PlatformList.华为 && PlatformCode !== PlatformList.魅族) {
        e.active = false;
      } else {
        e.active = true;
      }
    }
  }, {
    key: "setShareButtonStatus",
    value: function (e) {
      if (PlatformCode !== PlatformList.头条 && PlatformCode !== PlatformList.QQ && PlatformCode !== PlatformList.微信 && PlatformCode !== PlatformList.快手) {
        e.active = false;
      } else {
        e.active = true;
      }
    }
  }, {
    key: "isSatisfyCondition",
    value: function () {
      return !!this.platform && !!this.platform.isSatisfy && this.platform.isSatisfy();
    }
  }, {
    key: "executeShowStartVideo",
    value: function (e, i) {
      this.platform && this.platform.showStartVideo && this.platform.showStartVideo(e, i);
    }
  }, {
    key: "executeShowVideo",
    value: function (e, i) {
      console.log("触发视频");
      if (this.platform) {
        this.platform.showVideo && this.platform.showVideo(e, i);
      } else {
        e && e();
      }
    }
  }, {
    key: "executeStartRecorder",
    value: function () {
      this.platform && this.platform.startRecorder && this.platform.startRecorder();
    }
  }, {
    key: "executeStopRecorder",
    value: function () {
      this.platform && this.platform.stopRecorder && this.platform.stopRecorder();
    }
  }, {
    key: "executeShare",
    value: function (e, i) {
      this.platform && this.platform.doShare && this.platform.doShare(e, i);
    }
  }, {
    key: "executeShowFinishBox",
    value: function (e) {
      if (ServerConfig.newUserBox && ServerConfig.oldUserBox) {
        if (this.isSatisfyCondition()) {
          if (cc.sys.localStorage.getItem("box_".concat(App.storageName))) {
            if (ServerConfig.oldUserBox[0] <= 0) {
              return void e();
            }
            ServerConfig.oldUserBox[0]--;
          } else {
            if (ServerConfig.newUserBox[0] <= 0) {
              return void e();
            }
            ServerConfig.newUserBox[0]--;
            ServerConfig.oldUserBox[0] = ServerConfig.newUserBox[0];
          }
          cc.loader.loadRes("Platform/Prefabs/common/common-Box", cc.Prefab, function (i, a) {
            var n = cc.instantiate(a);
            cc.director.getScene().addChild(n);
            n.getComponent("common-Box").initialize(e);
          });
        } else {
          e();
        }
      } else {
        e();
      }
    }
  }, {
    key: "clearAllAdvertising",
    value: function () {
      this.platform && this.platform.clearAdvertising && this.platform.clearAdvertising();
    }
  }, {
    key: "getNativeMessage",
    value: function (e) {
      this.platform && this.platform.getNative && this.platform.getNative(e);
    }
  }, {
    key: "executeShowInterstitial",
    value: function (e) {
      if (this.platform) {
        if (PlatformCode === PlatformList.头条) {
          this.platform.showSystemInterstitial && this.platform.showSystemInterstitial(e);
        } else if (PlatformCode === PlatformList.华为) {
          if (1 === ServerConfig.celue.interstitialType) {
            this.platform.showNativeInterstitial && this.platform.showNativeInterstitial(e);
          } else if (2 === ServerConfig.celue.interstitialType) {
            this.platform.showSystemInterstitial && this.platform.showSystemInterstitial(e);
          } else if (this.getRandomIntNum(0, 100) < 50) {
            this.platform.showNativeInterstitial && this.platform.showNativeInterstitial(e);
          } else {
            this.platform.showSystemInterstitial && this.platform.showSystemInterstitial(e);
          }
        } else if (PlatformCode === PlatformList.OPPO) {
          this.platform.showInterstitial && this.platform.showInterstitial(e);
        } else if (PlatformCode === PlatformList.VIVO) {
          this.platform.showTemplateInterstitial && this.platform.showTemplateInterstitial(e);
        } else if (PlatformCode === PlatformList.QQ) {
          if (this.getRandomIntNum(0, 100) < ServerConfig.moreGame) {
            this.executeShowMoreGame();
          } else {
            this.platform.showSystemInterstitial && this.platform.showSystemInterstitial(e);
          }
        } else if (PlatformCode === PlatformList.微信) {
          this.platform.showCustomInterstitial && this.platform.showCustomInterstitial(e);
        } else if (PlatformCode === PlatformList.百度) {
          ;
        } else if (PlatformCode === PlatformList.快手) {
          this.platform.showSystemInterstitial && this.platform.showSystemInterstitial(e);
        } else if (PlatformCode === PlatformList.魅族) {
          if (this.getRandomIntNum(0, 100) < ServerConfig.randomNative) {
            this.platform.showSystemInterstitial && this.platform.showSystemInterstitial(e);
          } else {
            this.platform.showNativeInterstitial && this.platform.showNativeInterstitial(e);
          }
        } else if (PlatformCode === PlatformList.UC) {
          this.platform.showSystemInterstitial && this.platform.showSystemInterstitial(e);
        } else {
          PlatformCode;
          PlatformList.游家;
        }
      }
    }
  }, {
    key: "executeShowBannerAdvertising",
    value: function () {
      var e = this;
      if (this.platform) {
        var i = function () {
          if (PlatformCode === PlatformList.头条) {
            e.platform.showSystemBanner && e.platform.showSystemBanner();
          } else if (PlatformCode === PlatformList.华为) {
            e.platform.showSystemBanner && e.platform.showSystemBanner();
          } else if (PlatformCode === PlatformList.OPPO) {
            e.platform.showNativeBanner && e.platform.showNativeBanner();
          } else if (PlatformCode === PlatformList.VIVO) {
            e.platform.showSystemBanner && e.platform.showSystemBanner();
          } else if (PlatformCode === PlatformList.QQ) {
            e.platform.showSystemBanner && e.platform.showSystemBanner();
          } else if (PlatformCode === PlatformList.微信) {
            e.platform.showSystemBanner && e.platform.showSystemBanner();
          } else if (!(PlatformCode === PlatformList.百度)) {
            if (PlatformCode === PlatformList.魅族) {
              e.platform.showSystemBanner && e.platform.showSystemBanner();
            } else {
              PlatformCode === PlatformList.UC && e.platform.showSystemBanner && e.platform.showSystemBanner();
            }
          }
        };
        if (ServerConfig.celue.bannerTime <= 0) {
          i();
        } else {
          var a = new Date().getTime();
          if (a > this.bannerTriggerTime) {
            this.bannerTriggerTime = a + 1e3 * ServerConfig.celue.bannerTime;
            i();
          }
        }
      }
    }
  }, {
    key: "executeShowFinishAdvertising",
    value: function (e) {
      this.clearAllAdvertising();
      console.log("显示胜利/失败的插屏");
      if (!(ServerConfig.celue.apkTime > 0) && ServerConfig.celue.interstitialTime >= 0) {
        if (PlatformCode === PlatformList.VIVO) {
          if (0 === this.overResidueCount && 0 === ServerConfig.celue.overRatio) {
            return void (this.getRandomIntNum(0, 100) < 50 ? this.platform.showSystemInterstitial && this.platform.showSystemInterstitial(e) : this.platform.showTemplateInterstitial && this.platform.showTemplateInterstitial(e));
          }
        }
        if (this.overResidueCount <= 0) {
          return;
        }
        var i = new Date().getTime();
        if (i - this.interstitialTriggerTime >= 1e3 * ServerConfig.celue.interstitialTime) {
          this.interstitialTriggerTime = i;
          this.overResidueCount--;
          if (this.overResidueCount <= 0) {
            this.overResidueCount = ServerConfig.celue.overCount;
            if (this.getRandomIntNum(0, 100) < ServerConfig.celue.overRatio) {
              this.executeShowInterstitial(e);
            }
          } else {
            e && this.executeShowBannerAdvertising();
          }
        }
      }
    }
  }, {
    key: "executeShowPauseAdvertising",
    value: function (e) {
      this.clearAllAdvertising();
      console.log("显示暂停弹窗广告");
      if (!(ServerConfig.celue.apkTime > 0) && ServerConfig.celue.interstitialTime >= 0 && this.pauseResidueCount > 0) {
        var i = new Date().getTime();
        console.log("调用游戏暂停插屏");
        if (i - this.interstitialTriggerTime >= 1e3 * ServerConfig.celue.interstitialTime) {
          this.interstitialTriggerTime = i;
          this.pauseResidueCount--;
          if (this.pauseResidueCount <= 0) {
            this.pauseResidueCount = ServerConfig.celue.pauseCount;
            if (this.getRandomIntNum(0, 100) < ServerConfig.celue.pauseRatio) {
              this.executeShowInterstitial(e);
            }
          } else {
            e && this.executeShowBannerAdvertising();
          }
        }
      }
    }
  }, {
    key: "executeShowOtherAdvertising",
    value: function (e) {
      this.clearAllAdvertising();
      console.log("显示游戏外插屏");
      if (!(ServerConfig.celue.apkTime > 0) && ServerConfig.celue.interstitialTime >= 0 && this.otherResidueCount > 0) {
        var i = new Date().getTime();
        if (i - this.interstitialTriggerTime >= 1e3 * ServerConfig.celue.interstitialTime) {
          this.interstitialTriggerTime = i;
          this.otherResidueCount--;
          if (this.otherResidueCount <= 0) {
            this.otherResidueCount = ServerConfig.celue.otherCount;
            if (this.getRandomIntNum(0, 100) < ServerConfig.celue.otherRatio) {
              this.executeShowInterstitial(e);
            }
          } else {
            e && this.executeShowBannerAdvertising();
          }
        }
      }
    }
  }, {
    key: "executeShowGameAdvertising",
    value: function (e) {
      this.clearAllAdvertising();
      console.log("显示游戏内插屏");
      if (!(ServerConfig.celue.apkTime > 0)) {
        var i = new Date().getTime();
        if (ServerConfig.celue.interstitialTime >= 0) {
          if (PlatformCode === PlatformList.VIVO && 0 === this.gameResidueCount && 0 === ServerConfig.celue.gameRatio) {
            return void (e && this.platform.showSystemBanner && this.platform.showSystemBanner());
          }
          if (this.gameResidueCount <= 0) {
            return;
          }
          console.log("调用游戏内插屏");
          if (i - this.interstitialTriggerTime >= 1e3 * ServerConfig.celue.interstitialTime) {
            this.interstitialTriggerTime = i;
            this.gameResidueCount--;
            if (this.gameResidueCount <= 0) {
              this.gameResidueCount = ServerConfig.celue.gameCount;
              if (this.getRandomIntNum(0, 100) < ServerConfig.celue.gameRatio) {
                this.executeShowInterstitial(e);
              }
            } else {
              e && this.executeShowBannerAdvertising();
            }
          }
        }
      }
    }
  }, {
    key: "executeShowFinishLogic",
    value: function (e) {
      var i = this;
      if (PlatformCode !== PlatformList.VIVO && PlatformCode !== PlatformList.OPPO && PlatformCode !== PlatformList.华为) {
        if (PlatformCode === PlatformList.QQ) {
          var a = function () {
            var e = i.getRandomIntNum(0, 100);
            if (e < ServerConfig.sendDesk) {
              i.isAdditionDesktop(null, function () {
                i.executeAdditionDesktop(null);
              });
            }
            (e = i.getRandomIntNum(0, 100)) < ServerConfig.sendShare && i.executeShare(null, null);
            qq.isColorSignExistSync || qq.addRecentColorSign({});
          };
          if (e) {
            if (ServerConfig.winCount <= 0) {
              return;
            }
            ServerConfig.winCount--;
            if (ServerConfig.winCount <= 0) {
              return ServerConfig.winCount = ServerConfig.winVideo, void this.executeShowVideo(a, a);
            } else {
              return void a();
            }
          }
          if (ServerConfig.loseCount <= 0) {
            return;
          }
          ServerConfig.loseCount--;
          if (ServerConfig.loseCount <= 0) {
            ServerConfig.loseCount = ServerConfig.loseVideo;
            return void this.executeShowVideo(a, a);
          }
          a();
        }
        if (PlatformCode === PlatformList.快手) {
          var n = function () {
            var e = i.getRandomIntNum(0, 100);
            if (e < ServerConfig.sendDesk) {
              i.isAdditionDesktop(null, function () {
                i.executeAdditionDesktop(null);
              });
            }
            (e = i.getRandomIntNum(0, 100)) < ServerConfig.sendShare && i.executeShare(null, null);
          };
          if (e) {
            if (ServerConfig.winCount <= 0) {
              return;
            }
            ServerConfig.winCount--;
            if (ServerConfig.winCount <= 0) {
              return ServerConfig.winCount = ServerConfig.winVideo, void this.executeShowVideo(n, n);
            } else {
              return void n();
            }
          }
          if (ServerConfig.loseCount <= 0) {
            return;
          }
          ServerConfig.loseCount--;
          if (ServerConfig.loseCount <= 0) {
            return ServerConfig.loseCount = ServerConfig.loseVideo, void this.executeShowVideo(n, n);
          } else {
            return void n();
          }
        }
        if (PlatformCode === PlatformList.头条) {
          console.log("完结后的逻辑处理-----头条");
          if (e) {
            console.log("胜利");
            if (ServerConfig.winCount <= 0) {
              return;
            }
            ServerConfig.winCount--;
            if (ServerConfig.winCount <= 0) {
              ServerConfig.winCount = ServerConfig.winVideo;
              return void this.executeShowVideo();
            }
          }
          console.log("失败");
          if (ServerConfig.loseCount <= 0) {
            return;
          }
          ServerConfig.loseCount--;
          if (ServerConfig.loseCount <= 0) {
            ServerConfig.loseCount = ServerConfig.loseVideo;
            this.executeShowVideo();
          }
        }
      } else if (this.getRandomIntNum(0, 100) < ServerConfig.sendDesk) {
        this.isAdditionDesktop(null, function () {
          i.executeAdditionDesktop(null);
        });
      }
    }
  }, {
    key: "executeShowMoreGame",
    value: function () {
      this.platform && this.platform.showMoreGame && this.platform.showMoreGame();
    }
  }, {
    key: "executeAdditionDesktop",
    value: function (e) {
      this.platform && this.platform.additionDesktop && this.platform.additionDesktop(e);
    }
  }, {
    key: "isAdditionDesktop",
    value: function (e, i) {
      this.platform && this.platform.isAdditionDesktop && this.platform.isAdditionDesktop(e, i);
    }
  }, {
    key: "executeShake",
    value: function (e) {
      this.platform && Global.is_EnableShake && this.platform.doShake && this.platform.doShake(e);
    }
  }, {
    key: "executeShowToast",
    value: function (e) {
      this.platform && this.platform.showToast && this.platform.showToast(e);
    }
  }, {
    key: "showIcon",
    value: function () {
      0;
    }
  }, {
    key: "closeIcon",
    value: function () {
      0;
    }
  }, {
    key: "java2JsEvent",
    value: function (e) {
      if ("playADSuccess" === e) {
        this.playADSuccess();
      } else {
        "playADFailed" === e && this.playADFailed();
      }
    }
  }, {
    key: "APK_SHOWAD",
    value: function () {}
  }, {
    key: "js2JavaEvent",
    value: function (e) {
      cc.log("CC_JSB or jsb.reflection is undefined");
      return false;
    }
  }, {
    key: "playADSuccess",
    value: function () {
      if (null != this.nativeCallBack) {
        this.nativeCallBack();
        this.nativeCallBack = null;
      }
    }
  }, {
    key: "playADFailed",
    value: function () {}
  }]);
  return _ctor;
}();
exports.default = def_PlatformUtils;
module.exports = exports.default;
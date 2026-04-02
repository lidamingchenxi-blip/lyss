var $1$8PlatformUtils = require("PlatformUtils");
var n = function (e) {
  if (e && e.__esModule) {
    return e;
  } else {
    return {
      default: e
    };
  }
}($1$8PlatformUtils);
window.urlPath = "";
window.subpackage = ["bao1", "bao2"];
window.NameList = cc.Enum({
  恐怖的凶宅: 0,
  密室逃亡: 1,
  有种你就来: 2,
  密室躺平: 3,
  僵尸哪里跑: 4,
  疯狂的大冒险: 5,
  奇怪的历险记: 6,
  末日生存记: 7,
  还能这样玩吗: 8,
  杀鬼专家: 9,
  灵异宿舍: 10
});
window.PlatformList = cc.Enum({
  无: 0,
  头条: 1,
  华为: 2,
  OPPO: 3,
  VIVO: 4,
  QQ: 5,
  微信: 6,
  百度: 7,
  快手: 8,
  魅族: 9,
  UC: 10,
  游家: 11,
  VIVO_APK: 12,
  OPPO_APK: 13,
  APK_233: 14,
  XIAOMI_APK: 15,
  OTHER_APK: 16,
  APK_4399: 17,
  摸摸鱼: 18
});
cc.Class({
  extends: cc.Component,
  properties: {
    isDebug: {
      default: true,
      displayName: "是否调试"
    },
    GameName: {
      default: 0,
      type: NameList,
      displayName: "游戏名"
    },
    PlatformCode: {
      default: PlatformList.无,
      type: PlatformList,
      displayName: "平台编号"
    },
    yingSi: {
      default: null,
      type: cc.Node,
      displayName: "隐私节点"
    },
    JingDu_lable: {
      default: null,
      type: cc.Node,
      displayName: "进度"
    }
  },
  onLoad: function () {
    var e = this;
    this.yingSi.scale = 1;
    this.scheduleOnce(function () {
      e.yingSi.active = false;
      var i = 0;
      e.schedule(function a() {
        i++;
        e.JingDu_lable.getComponent(cc.Label).string = "".concat(i, "%");
        i >= 100 && e.unschedule(a);
      }, .01);
    }, 2);
    cc.debug.setDisplayStats(false);
    window.PlatformCode = this.PlatformCode;
    window.App = AppList[this.GameName];
    if (!this.isDebug) {
      console.log = function () {};
      console.warn = function () {};
      console.error = function () {};
    }
    switch (PlatformCode) {
      case PlatformList.头条:
        App.companyName = App.ByteDance.companyName;
        App.logoName = App.ByteDance.logoName;
        break;
      case PlatformList.华为:
        App.companyName = App.HuaWei.companyName;
        App.logoName = App.HuaWei.logoName;
        window.SequenceNumber = "AE5B87FFEC1A4A5AAC770DC5842255EF";
        break;
      case PlatformList.OPPO:
        App.companyName = App.OPPO.companyName;
        App.logoName = App.OPPO.logoName;
        window.SequenceNumber = "A9D369ECF3D945CC9652CA3875974F95";
        break;
      case PlatformList.VIVO:
        App.companyName = App.VIVO.companyName;
        App.logoName = App.VIVO.logoName;
        window.SequenceNumber = "6A61B8F2078B453991E5E80355EF32EE";
        break;
      case PlatformList.QQ:
        App.companyName = App.Tencent.companyName;
        App.logoName = App.Tencent.logoName;
        window.SequenceNumber = "EB5A06FD2BB049D69FF4D546687DE8E5";
        break;
      case PlatformList.微信:
        App.companyName = App.WeChat.companyName;
        App.logoName = App.WeChat.logoName;
        window.SequenceNumber = "0740F749888746EF8747909B25778BFA";
        break;
      case PlatformList.百度:
        App.companyName = App.BaiDu.companyName;
        App.logoName = App.BaiDu.logoName;
        break;
      case PlatformList.快手:
        App.companyName = App.Quick.companyName;
        App.logoName = App.Quick.logoName;
        window.SequenceNumber = "851C19AB9E4341289B007AAFAD140E7E";
        break;
      case PlatformList.魅族:
        App.companyName = App.MeiZu.companyName;
        App.logoName = App.MeiZu.logoName;
        window.SequenceNumber = "FFDEDDDBBA0F4D92AF8D69A29CDCF5F8";
        break;
      case PlatformList.UC:
        App.companyName = App.UC.companyName;
        App.logoName = App.UC.logoName;
        break;
      case PlatformList.游家:
        App.companyName = App.YouJia.companyName;
        App.logoName = App.YouJia.logoName;
        break;
      case PlatformList.VIVO_APK:
        App.companyName = App.VIVO_APK.companyName;
        App.logoName = App.VIVO_APK.logoName;
        window.SequenceNumber = "788EFB87651C46D696B1BF8358DD9540";
        break;
      case PlatformList.OPPO_APK:
        App.companyName = App.OPPO_APK.companyName;
        App.logoName = App.OPPO_APK.logoName;
        window.SequenceNumber = "E3A2319F38CE40F1942C10FE01C5D786";
        break;
      case PlatformList.APK_233:
        App.companyName = App.APK_233.companyName;
        App.logoName = App.APK_233.logoName;
        window.SequenceNumber = "7FAD8BF738EB4466A7874B0C819F2876";
        break;
      case PlatformList.XIAOMI_APK:
        App.companyName = App.XIAOMI_APK.companyName;
        App.logoName = App.XIAOMI_APK.logoName;
        window.SequenceNumber = "6E3312E35E2C426EB981AE12941F9CB6";
        break;
      case PlatformList.OTHER_APK:
        App.companyName = App.OTHER_APK.companyName;
        App.logoName = App.OTHER_APK.logoName;
        break;
      case PlatformList.APK_4399:
        App.companyName = App.APK_4399.companyName;
        App.logoName = App.APK_4399.logoName;
        window.SequenceNumber = "71F7246C952A457092266A038B86DFD4";
        break;
      case PlatformList.摸摸鱼:
        App.companyName = App.Fish_APK.companyName;
        App.logoName = App.Fish_APK.logoName;
        window.SequenceNumber = "CBB1AB01FE984CFA80412FB2899405BC";
    }
    this.LoginWindow = this.node.getChildByName("hw-LoginWindow");
    if (this.LoginWindow) {
      this.LoginWindow.getComponent("hw-LoginWindow").registerLoginHandle(function () {
        e.executeEnterNextScreen();
      });
      this.LoginWindow.active = false;
    }
    if (PlatformCode !== PlatformList.游家) {
      var i = Object.keys(PlatformList)[window.PlatformCode];
      window.TD_GAME_NAME = "".concat(App.chineseName, "_").concat(i);
    }
    window.adUtils = new n.default();
  },
  start: function () {
    var e = this;
    adUtils.requestLocation(function () {
      console.log("实际游戏配置:", ServerConfig);
      e.node.getChildByName("ChildrenItem").getComponent("ChildrenControl").executeRefresh();
      adUtils.APK_SHOWAD();
      adUtils.initialize();
      if (ServerConfig.winVideo && ServerConfig.winVideo > 0) {
        ServerConfig.winCount = ServerConfig.winVideo;
      } else {
        ServerConfig.winCount = 0;
      }
      if (ServerConfig.loseVideo && ServerConfig.loseVideo > 0) {
        ServerConfig.loseCount = ServerConfig.loseVideo;
      } else {
        ServerConfig.loseVideo = 0;
      }
      e.loadSpriteFramePath();
    });
  },
  instantiationStorage: function () {
    var e = cc.sys.localStorage.getItem(App.storageName);
    if (e && "" !== e) {
      cc.StorageInfo = JSON.parse(e);
    } else {
      cc.StorageInfo = StorageInfo;
      cc.sys.localStorage.setItem(App.storageName, JSON.stringify(cc.StorageInfo));
    }
    cc.StorageInfo.module_lockState = ServerConfig.ModuleState;
    cc.sys.localStorage.setItem(App.storageName, JSON.stringify(cc.StorageInfo));
  },
  loadSpriteFramePath: function () {
    var e = this;
    cc.loader.loadRes("App/Json/ImageList", cc.Asset, function (i, a) {
      i || AssMgr.registerSpriteFramePath(a.json);
      e.loadPrefabPath();
    });
  },
  loadPrefabPath: function () {
    var e = this;
    cc.loader.loadRes("App/Json/PrefabList", cc.Asset, function (i, a) {
      i || AssMgr.registerPrefabPath(a.json);
      e.loadTexturePath();
    });
  },
  loadTexturePath: function () {
    var e = this;
    cc.loader.loadRes("App/Json/TextureList", cc.Asset, function (i, a) {
      i || AssMgr.registerTexturePath(a.json);
      e.loadAudioPath();
    });
  },
  loadAudioPath: function () {
    var e = this;
    cc.loader.loadRes("App/Json/AudioList", cc.Asset, function (i, a) {
      i || SoundMgr.registerSoundPath(a.json);
      e.executeEnterNextScene();
    });
  },
  executeEnterNextScene: function () {
    var e = this;
    console.log("进入下一个场景");
    this.scheduleOnce(function () {
      var i = cc.sys.localStorage.getItem("agreement-".concat(App.storageName));
      if (PlatformCode === PlatformList.VIVO || PlatformCode === PlatformList.OPPO || PlatformCode === PlatformList.QQ || PlatformCode === PlatformList.华为) {
        if (i) {
          return void e.executeEnterNextScreen();
        } else {
          return void cc.loader.loadRes("Platform/Prefabs/AgreementWindow", cc.Prefab, function (i, a) {
            var n = cc.instantiate(a);
            cc.director.getScene().addChild(n);
            n.getComponent("AgreementWindow").initialize(true, e.executeEnterNextScreen.bind(e));
          });
        }
      }
      e.executeEnterNextScreen();
    }, 4);
  },
  executeEnterNextScreen: function () {
    var e = this;
    var i = function () {
      e.instantiationStorage();
      adUtils.executeShowStartVideo();
      cc.director.loadScene("Menu");
    };
    if (PlatformCode === PlatformList.华为) {
      if (ServerConfig.allowLogin) {
        return void this.executeLoginHuaWei(i);
      } else {
        return void i();
      }
    }
    i();
  },
  executeLoginHuaWei: function (e) {
    var i = this;
    i.LoginWindow.active = false;
    qg.gameLogin({
      forceLogin: 1,
      appid: App.HuaWei.appId,
      success: function (i) {
        e && e();
      },
      fail: function (e, a) {
        console.log("登录华为账号失败:");
        console.log("AppId:", App.HuaWei.appId);
        console.log("data:", e);
        console.log("code:", a);
        i.LoginWindow.active = true;
      }
    });
  }
});
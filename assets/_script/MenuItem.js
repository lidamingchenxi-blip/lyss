cc.Class({
  extends: cc.Component,
  properties: {
    guang: {
      default: null,
      type: cc.Node,
      displayName: "光"
    },
    TiShi_alert: {
      default: null,
      type: cc.Node,
      displayName: "提示弹窗"
    },
    ShortcutButton: {
      default: null,
      type: cc.Node,
      displayName: "快捷桌面按钮"
    },
    MoreButton: {
      default: null,
      type: cc.Node,
      displayName: "更多游戏按钮"
    }
  },
  onLoad: function () {
    var e = this;
    window.MenuItem = this;
    if (PlatformCode === PlatformList.无 || PlatformCode === PlatformList.头条) {
      if (!window.isShowGuo) {
        window.isShowGuo = true, this.TiShi_alert.active = true;
      }
    } else {
      this.TiShi_alert.active = false;
    }
    window.goldTX = function () {
      e.create_GoldEffects_Alert();
    };
    var i = cc.tween().to(1, {
      opacity: 155
    }).to(1, {
      opacity: 255
    }).to(.1, {
      opacity: 155
    }).to(.1, {
      opacity: 255
    }).to(.1, {
      opacity: 155
    }).to(.1, {
      opacity: 255
    });
    cc.tween(this.guang).repeatForever(i).start();
    adUtils.setMoreButtonStatus(this.MoreButton);
    adUtils.setShortcutButtonStatus(this.ShortcutButton);
    if (this.ShortcutButton.active) {
      adUtils.isAdditionDesktop(function () {
        e.ShortcutButton.active = false;
      });
    }
  },
  start: function () {
    console.log("window.isCreatePushAlert = ", window.isCreatePushAlert);
    if (window.isCreatePushAlert) {
      this._create_Push_Alert();
      console.log("创建推送");
    } else {
      window.isCreatePushAlert = true;
    }
  },
  touch_ButtonCallback: function (e) {
    music.api_audioPlay(MainDate.mp3.anniu);
    switch (e.target.name) {
      case "TianJiaZhuoMian":
        this._doShortcut(e);
        break;
      case "GengDuoYouXi":
        this._doMore();
        break;
      case "yuYue":
        this._btn_YuYue();
        break;
      case "juzigongfang":
        this._but_juziShop();
        break;
      case "shenmihe":
        this._but_shenmihe();
    }
  },
  _doShortcut: function (e) {
    adUtils.executeAdditionDesktop(e.target);
  },
  _doMore: function () {
    adUtils.executeShowMoreGame();
  },
  _btn_YuYue: function () {
    cocoscreator.api_showTip("prefab/Alert/YuYue_Alert", function (e) {
      var i = cc.instantiate(e);
      i.scale = 0;
      this.node.addChild(i);
      cocoscreator.api_panetoff(i);
    }.bind(this));
  },
  _but_juziShop: function () {
    cocoscreator.api_showTip("prefab/menu/juziShop", function (e) {
      var i = cc.instantiate(e);
      i.scale = 0;
      this.node.addChild(i);
      cocoscreator.api_panetoff(i);
    }.bind(this));
  },
  _but_shenmihe: function () {
    cocoscreator.api_showTip("prefab/menu/baibaoxiang", function (e) {
      var i = cc.instantiate(e);
      i.scale = 0;
      this.node.addChild(i);
      cocoscreator.api_panetoff(i);
    }.bind(this));
  },
  create_GoldEffects_Alert: function () {
    cc.loader.loadRes("prefab/Alert/GoldEffects_Alert", cc.Prefab, function (e, i) {
      var a = cc.instantiate(i);
      cc.director.getScene().addChild(a);
    });
  },
  _create_Push_Alert: function () {
    var e = this;
    cc.loader.loadRes("prefab/Alert/Push_Alert", cc.Prefab, function (i, a) {
      var n = cc.instantiate(a);
      n.scale = 0;
      e.node.addChild(n);
      cocoscreator.api_panetoff(n);
    });
  }
});
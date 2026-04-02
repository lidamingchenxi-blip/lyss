cc.Class({
  extends: cc.Component,
  properties: {
    module_img: {
      default: null,
      type: cc.Node,
      displayName: "模式图"
    }
  },
  onLoad: function () {
    this.module_ID = 0;
  },
  start: function () {
    var e = this;
    var i = [];
    var a = cc.StorageInfo.module_lockState;
    var n = a.module_1;
    var t = a.module_2;
    if (2 === window.Button_Layout.Layout_Type) {
      n = n.module_Config;
      t = t.module_Config;
    }
    for (var o = 0; o < n.length; o++) {
      var s = n[o];
      s.module_type = "module_1";
      s.isLock && i.push(s);
    }
    if (t && t.length > 0) {
      for (var c = 0; c < t.length; c++) {
        var r = t[c];
        r.module_type = "module_2";
        r.isLock && i.push(r);
      }
    }
    if (i.length > 0) {
      var u = i[Math.floor(Math.random() * i.length)];
      this.module_type = u.module_type;
      this.module_ID = u.id;
      var h = "image/Alert/Push/push_img/push_img_".concat(u.id);
      cc.loader.loadRes(h, cc.SpriteFrame, function (i, a) {
        e.module_img.getComponent(cc.Sprite).spriteFrame = a;
      });
    } else {
      this.node.removeFromParent();
    }
    adUtils.executeShowOtherAdvertising(true);
  },
  touch_ButtonCallback: function (e) {
    var i = this;
    switch (e.target.name) {
      case "open_btn":
        adUtils.executeShowVideo(function () {
          var a = 0;
          if (2 === window.Button_Layout.Layout_Type) {
            for (var n = 0; n < cc.StorageInfo.module_lockState[i.module_type].module_Config.length; n++) {
              if (cc.StorageInfo.module_lockState[i.module_type].module_Config[n].id === i.module_ID) {
                a = n;
                break;
              }
            }
            cc.StorageInfo.module_lockState[i.module_type].module_Config[a].isLock = false;
          } else {
            for (var t = 0; t < cc.StorageInfo.module_lockState[i.module_type].length; t++) {
              if (cc.StorageInfo.module_lockState[i.module_type][t].id === i.module_ID) {
                a = t;
                break;
              }
            }
            cc.StorageInfo.module_lockState[i.module_type][a].isLock = false;
          }
          cc.sys.localStorage.setItem(App.storageName, JSON.stringify(cc.StorageInfo));
          e.target.name = "mo_".concat(i.module_ID);
          window.Button_Layout.touch_ModuleBtnHandle(e);
          i.node.removeFromParent();
        });
    }
    this.node.removeFromParent();
  }
});
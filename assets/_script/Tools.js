window.Tools = {
  WINDOWSIZE: null,
  Log: function (e) {
    GameConfig.GAME_lOG(e);
  },
  LoadSpriteFrame: function (e, i) {
    cc.loader.loadRes(e, cc.SpriteFrame, function (e, a) {
      i.spriteFrame = a;
    });
  },
  timeDifc: function (e, i) {
    var a = new Date(e);
    var n = new Date(i);
    if (a.getTime() > n.getTime()) {
      return 0;
    } else {
      return parseInt((n.getTime() - a.getTime()) / 1e3);
    }
  },
  PrefixInteger: function (e, i) {
    return ("0000000000000000" + e).substr(-i);
  },
  getDateTimes: function () {
    return Date.now() - 1541e9;
  },
  setBool: function (e, i) {
    cc.sys.localStorage.setItem(e, i.toString());
  },
  getBool: function (e) {
    return null != cc.sys.localStorage.getItem(e) && "false" != cc.sys.localStorage.getItem(e);
  },
  setInt: function (e, i) {
    cc.sys.localStorage.setItem(e, i.toString());
  },
  getInt: function (e) {
    return Number(cc.sys.localStorage.getItem(e));
  },
  setString: function (e, i) {
    cc.sys.localStorage.setItem(e, i);
  },
  getString: function (e) {
    return cc.sys.localStorage.getItem(e);
  },
  setObject: function (e, i) {
    cc.sys.localStorage.setItem(e, JSON.stringify(i));
  },
  getObject: function (e) {
    if (undefined == cc.sys.localStorage.getItem(e) || null == cc.sys.localStorage.getItem(e) || "" == cc.sys.localStorage.getItem(e)) {
      return null;
    } else {
      return JSON.parse(cc.sys.localStorage.getItem(e));
    }
  },
  RandomBCFCount: function (e) {
    var i = e;
    var a = new Array();
    for (var n = 0; n < i; n++) {
      a[n] = n + 1;
    }
    a.sort(function () {
      return .5 - Math.random();
    });
    for (n = 0; n < i; n++) {
      Tools.Log(a[n] + " , ");
    }
    return a;
  },
  RandomInt: function (e, i) {
    if ((i += 1) == e) {
      i = e;
      mid = 0;
    }
    return e + Math.floor(Math.random() * (i - e));
  },
  GaiLv: function (e) {
    return 1 + Math.floor(100 * Math.random()) <= e;
  },
  GaiLv_Qian: function (e) {
    return 1 + Math.floor(1e3 * Math.random()) <= e;
  },
  MyccpCountAngle: function (e, i) {
    var a = i;
    var n = e;
    if (cc.pAngle(cc.v2(-1, 0), cc.pSub(a, n)) < Math.PI / 2) {
      return 180 * cc.pAngle(cc.v2(0, -1), cc.pSub(a, n)) / Math.PI;
    } else {
      return 180 - 180 * cc.pAngle(cc.v2(0, -1), cc.pSub(a, n)) / Math.PI + 180;
    }
  },
  LoadPreFtabData_zanting: function (i, a) {
    cc.loader.loadRes(i, function (i, n) {
      if (!i && n instanceof cc.Prefab) {
        var t = cc.instantiate(n);
        t.parent = cc.director.getScene();
        t.getComponent(require("GamePaush")).InitData(a);
        t.zIndex = 9999;
      }
    });
  },
  LoadPreFtabData_shang: function (e) {
    cc.loader.loadRes(e, function (e, i) {
      if (!e && i instanceof cc.Prefab) {
        var a = cc.instantiate(i);
        a.parent = cc.director.getScene();
        a.zIndex = 9999;
      }
    });
  },
  LoadPreFtabData: function (e) {
    cc.loader.loadRes(e, function (e, i) {
      if (!e && i instanceof cc.Prefab) {
        var a = cc.instantiate(i);
        a.parent = cc.director.getScene();
        a.zIndex = 9e3;
      }
    });
  },
  LoadPreFtabData2: function (e) {
    cc.loader.loadRes(e, function (e, i) {
      if (!e && i instanceof cc.Prefab) {
        var a = cc.instantiate(i);
        a.parent = cc.director.getScene();
        a.zIndex = 8990;
      }
    });
  },
  getNowFormatDate: function () {
    var e = new Date();
    var i = e.getFullYear();
    var a = e.getMonth() + 1;
    var n = e.getDate();
    a >= 1 && a <= 9 && (a = "0" + a);
    n >= 0 && n <= 9 && (n = "0" + n);
    return i + "/" + a + "/" + n;
  },
  ShowAsk: function (e) {
    var i = new cc.Node();
    var a = i.addComponent(cc.Sprite);
    cc.loader.loadRes("showAskkuang", cc.SpriteFrame, function (e, i) {
      a.spriteFrame = i;
    });
    i.parent = cc.director.getScene();
    i.zIndex = 9999;
    i.setPosition(cc.v2(cc.view.getVisibleSize().width / 2, cc.view.getVisibleSize().height / 2 - 200));
    var n = cc.callFunc(function (e) {
      e.destroy();
    }, i);
    var t = cc.sequence(cc.moveTo(.5, cc.view.getVisibleSize().width / 2, cc.view.getVisibleSize().height / 2 + 30).easing(cc.easeIn(.5)), cc.moveTo(.5, cc.view.getVisibleSize().width / 2, cc.view.getVisibleSize().height / 2).easing(cc.easeOut(.5)), n);
    i.runAction(t);
    var o = new cc.Node();
    o.color = new cc.Color(255, 255, 255);
    var s = o.addComponent(cc.Label);
    var c = cc.js.formatStr("%s", e);
    s.string = c;
    o.parent = cc.director.getScene();
    o.scale = .6;
    o.zIndex = 1e4;
    o.setPosition(cc.v2(cc.view.getVisibleSize().width / 2, cc.view.getVisibleSize().height / 2 - 200));
    n = cc.callFunc(function (e) {
      e.destroy();
    }, o);
    t = cc.sequence(cc.moveTo(.5, cc.view.getVisibleSize().width / 2, cc.view.getVisibleSize().height / 2 + 30).easing(cc.easeIn(.5)), cc.moveTo(.5, cc.view.getVisibleSize().width / 2, cc.view.getVisibleSize().height / 2).easing(cc.easeOut(.5)), n);
    o.runAction(t);
  }
};
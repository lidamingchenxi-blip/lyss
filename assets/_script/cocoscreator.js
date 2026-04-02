window.cocoscreator = {
  api_showTip: function (e, i) {
    cc.loader.loadRes(e, function (e, a) {
      if (a instanceof cc.Prefab) {
        i(a);
      } else {
        cc.log("Prefab error");
      }
    });
  },
  api_panetoff: function (e) {
    var i = cc.scaleTo(.25, 1.1, 1.1).easing(cc.easeSineOut());
    var a = cc.scaleTo(.05, 1, 1).easing(cc.easeSineInOut());
    var n = cc.sequence(i, a);
    e.runAction(n);
  },
  api_panetoffs: function (e) {
    var i = !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1];
    var a = cc.scaleTo(.2, 0, 0).easing(cc.easeSineInOut());
    e.runAction(a);
    i && window.setTimeout(function () {
      e.parent && e.parent.destroy();
    }, 200);
  },
  js_zidian_val_r_key: function (e, i) {
    var a = [];
    for (var n = 0; n < Object.keys(e).length; n++) {
      e[Object.keys(e)[n]] == i && a.push(Object.keys(e)[n]);
    }
    return a;
  },
  js_zidian_jian: function (e, i) {
    for (var a = 0; a < Object.keys(e).length; a++) {
      if (Object.keys(e)[a] == i) {
        return e[Object.keys(e)[a]];
      }
    }
    return false;
  },
  js_zidian_key: function (e, i) {
    var a = false;
    for (var n = 0; n < Object.keys(e).length; n++) {
      Object.keys(e)[n] == i && (a = true);
    }
    return a;
  },
  js_includes: function (e, i) {
    return e.includes(i);
  }
};
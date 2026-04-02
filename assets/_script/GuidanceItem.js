cc.Class({
  extends: cc.Component,
  properties: {},
  onLoad: function () {
    var e = function (e, i) {
      var a = i - e;
      var n = Math.random();
      return e + Math.round(n * a);
    }(0, 100);
    this.node.active = e < ServerConfig.isShowHand;
  }
});
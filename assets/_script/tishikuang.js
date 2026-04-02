cc.Class({
  extends: cc.Component,
  properties: {},
  onLoad: function () {
    var e = this;
    setTimeout(function () {
      e.node && e.node.destroy();
    }, 3e3);
  }
});
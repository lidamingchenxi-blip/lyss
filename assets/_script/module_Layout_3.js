cc.Class({
  extends: cc.Component,
  properties: {},
  onLoad: function () {},
  start: function () {},
  close_handle: function () {
    this.node.removeFromParent();
  }
});
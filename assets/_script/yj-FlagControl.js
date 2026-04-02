cc.Class({
  extends: cc.Component,
  properties: {},
  onLoad: function () {
    this.node.active = PlatformCode === PlatformList.游家;
  }
});
cc.Class({
  extends: cc.Component,
  properties: {
    zhidaole: cc.Node,
    time: cc.Node
  },
  onLoad: function () {
    this.timeNum = 3;
    this.jilutime = 0;
    this.node.zIndex = 20;
  },
  start: function () {
    adUtils.executeShowGameAdvertising(true);
  },
  but_guanbi: function () {
    this.node.destroy();
    MainDate.youxiguize = true;
  },
  update: function (e) {
    if (this.time.active) {
      this.jilutime++;
      if (this.jilutime > 60) {
        this.jilutime = 0, this.timeNum--, this.time.getComponent(cc.Label).string = this.timeNum, this.timeNum <= 0 && (this.zhidaole.active = true, this.time.active = false);
      }
    }
  }
});
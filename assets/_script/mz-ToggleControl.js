cc.Class({
  extends: cc.Component,
  properties: {
    ControlList: {
      default: [],
      type: cc.Node,
      displayName: "控制节点"
    }
  },
  onLoad: function () {
    PlatformCode !== PlatformList.魅族 && (this.node.active = false);
    this.toggle = this.node.getComponent(cc.Toggle);
  },
  toggleTouchCallBack: function (e) {
    this.ControlList[0].active = !e.isChecked;
    this.ControlList[1].active = e.isChecked;
  },
  start: function () {
    var e = MathMgr.getRandomNum(0, 100);
    this.toggle.isChecked = e < ServerConfig.fuXuanKuang;
    this.ControlList[0].active = !this.toggle.isChecked;
    this.ControlList[1].active = this.toggle.isChecked;
  }
});
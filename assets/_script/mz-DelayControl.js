cc.Class({
  extends: cc.Component,
  properties: {
    allow_RandomBtn: {
      default: null,
      type: cc.Node,
      displayName: "触发随机按钮"
    }
  },
  onLoad: function () {
    this.allowDelay = true;
    if (PlatformCode !== PlatformList.魅族) {
      this.allowDelay = false;
      this.node.active = true;
    }
    if (PlatformCode === PlatformList.魅族) {
      this.tName = this.node.name;
      this.aName = this.allow_RandomBtn.name;
      var e = this.node.getComponent(cc.Button);
      this.rClickEvents = e.clickEvents;
      var i = this.allow_RandomBtn.getComponent(cc.Button);
      this.aClickEvents = i.clickEvents;
      var a = new cc.Component.EventHandler();
      a.target = this.node;
      a.component = "mz-DelayControl";
      a.handler = "touch_callback";
      e.clickEvents = [];
      e.clickEvents.push(a);
    }
  },
  start: function () {
    var e = this;
    if (this.allowDelay) {
      if (ServerConfig.guanBiYanChi && ServerConfig.guanBiYanChi > 0) {
        this.node.active = false;
        cc.tween(this.node).delay(ServerConfig.guanBiYanChi).call(function () {
          e.node.active = true;
        }).start();
      } else {
        this.node.active = true;
      }
    }
  },
  touch_callback: function (e) {
    if (MathMgr.getRandomNum(0, 100) < ServerConfig.randomVideo) {
      e.target.name = this.aName;
      cc.Component.EventHandler.emitEvents(this.rClickEvents, e);
    } else {
      e.target.name = this.tName;
      cc.Component.EventHandler.emitEvents(this.aClickEvents, e);
    }
  }
});
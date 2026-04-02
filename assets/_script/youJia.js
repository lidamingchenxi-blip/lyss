cc.Class({
  extends: cc.Component,
  properties: {},
  onLoad: function () {
    var e = this;
    if (PlatformCode === PlatformList.游家) {
      cc.game.addPersistRootNode(this.node);
      this.up_SceneFit();
      cc.director.on(cc.Director.EVENT_BEFORE_SCENE_LAUNCH, function () {
        e.up_SceneFit();
      });
      this.node.zIndex = 999;
    } else {
      this.node.destroy();
    }
  },
  up_SceneFit: function () {
    console.log("更新场景适配");
    var e = this.node.parent.getChildByName("Canvas").getComponent(cc.Canvas);
    e.fitHeight = true;
    e.fitWidth = true;
  }
});
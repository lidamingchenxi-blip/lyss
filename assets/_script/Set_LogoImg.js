var n = cc.Enum({
  sprite: 0,
  dragonBones_Skeleton: 1,
  sp_Skeleton: 2
});
cc.Class({
  extends: cc.Component,
  properties: {
    Logo_Type: {
      default: n.sprite,
      type: n,
      displayName: "Logo类型"
    }
  },
  onLoad: function () {
    this.node.getComponent(cc.Sprite).spriteFrame = null;
    if ("" === App.logoName) {
      this.node.active = false;
    } else {
      this.node.active = true;
    }
  },
  start: function () {
    var e = this;
    switch (this.Logo_Type) {
      case 0:
        var i = "Load/".concat(App.logoName);
        cc.loader.loadRes(i, cc.SpriteFrame, function (a, n) {
          if (a) {
            console.warn("没有找到图片资源", i);
          } else {
            e.node.getComponent(cc.Sprite).spriteFrame = n;
          }
        });
        break;
      case 1:
        this.node.getComponent(dragonBones.ArmatureDisplay).playAnimation(App.logoName, -1);
        break;
      case 2:
        this.node.getComponent(sp.Skeleton).setAnimation(0, App.logoName, true);
    }
  }
});
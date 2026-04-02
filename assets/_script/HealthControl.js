cc.Class({
  extends: cc.Component,
  properties: {},
  onLoad: function () {
    var e = this.node.getComponent(cc.Sprite);
    var i = cc.view.getVisibleSize();
    var a = "Platform/Textures/".concat(i.width > i.height ? "notice-horizontal" : "notice-vertical");
    cc.loader.loadRes(a, cc.SpriteFrame, function (i, a) {
      e.spriteFrame = a;
    });
  }
});
cc.Class({
  extends: cc.Component,
  properties: {},
  onLoad: function () {
    this.iconImg = this.node.getComponent(cc.Sprite);
    if (PlatformCode === PlatformList.华为) {
      this.node.active = false;
    } else {
      this.iconImg.spriteFrame = null;
      ServerConfig.shilingbiao && this.executeRefresh();
    }
  },
  executeRefresh: function () {
    var e = this;
    if (this.node.active) {
      var i = 8;
      cc.js.isNumber(ServerConfig.shilingbiao) && (i = ServerConfig.shilingbiao);
      var a = "Platform/Textures/common/flag/flag-".concat(i);
      cc.loader.loadRes(a, cc.SpriteFrame, function (i, a) {
        e.iconImg.spriteFrame = a;
      });
    }
  }
});
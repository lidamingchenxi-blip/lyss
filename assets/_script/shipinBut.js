cc.Class({
  extends: cc.Component,
  properties: {
    ADSpriteFrame: {
      default: null,
      type: cc.SpriteFrame
    },
    shipinSpriteFrame: {
      default: null,
      type: cc.SpriteFrame
    },
    shipinBut: cc.Node
  },
  onLoad: function () {
    if (PlatformCode === PlatformList.头条 || PlatformCode === PlatformList.QQ) {
      //this.shipinBut.getComponent(cc.Sprite).spriteFrame = this.shipinSpriteFrame;
    } else {
      //this.shipinBut.getComponent(cc.Sprite).spriteFrame = this.ADSpriteFrame;
    }
  }
});
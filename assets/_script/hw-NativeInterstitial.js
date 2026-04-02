cc.Class({
  extends: cc.Component,
  properties: {
    Img: {
      default: null,
      type: cc.Sprite,
      displayName: "广告图"
    },
    TitleLabel: {
      default: null,
      type: cc.Label,
      displayName: "标题"
    },
    SourceLabel: {
      default: null,
      type: cc.Label,
      displayName: "出处"
    }
  },
  onLoad: function () {
    var e = this.node.getChildByName("content");
    this.downButton = e.getChildByName("downButton");
    this.downButton.active = false;
    var i = e.getChildByName("closeButton");
    if (1 === ServerConfig.closeScale) {
      i.position = cc.v2(-326, 245);
    } else {
      i.position = cc.v2(-326, 165);
    }
    i.width = 38 * ServerConfig.closeScale;
    i.height = 38 * ServerConfig.closeScale;
  },
  initialize: function (e, i) {
    var a = this;
    this.data = e;
    this.eHandle = i;
    var n = this.data.res.adList.pop();
    this.id = n.adId;
    var t = n.imgUrlList.pop();
    this.executeReport();
    this.TitleLabel.string = n.title;
    this.SourceLabel.string = n.source;
    101 !== n.creativeType && 102 !== n.creativeType && 103 !== n.creativeType && 106 !== n.creativeType && 107 !== n.creativeType && 108 !== n.creativeType && 110 !== n.creativeType || (this.downButton.active = true);
    var o = StringMgr.getExtensionName(t);
    "png" !== o && "jpg" !== o && (o = "png");
    cc.loader.load({
      url: t,
      type: o
    }, function (e, i) {
      a.Img.spriteFrame = new cc.SpriteFrame(i);
    });
  },
  executeReport: function () {
    console.log("展示上报");
    this.data.ad.reportAdShow({
      adId: this.id
    });
  },
  executeDestroy: function () {
    this.data.ad.destroy();
    this.node.removeFromParent(true);
  },
  executeClose: function () {
    this.eHandle && this.eHandle();
    this.executeDestroy();
  },
  executeTouch: function () {
    console.log("点击上报并关闭");
    this.data.ad.reportAdClick({
      adId: this.id
    });
    this.eHandle && this.eHandle();
    this.executeDestroy();
  },
  buttonTouchEventCallBack: function (e) {
    switch (e.target.name) {
      case "closeButton":
        this.executeClose();
        break;
      case "content":
      case "downButton":
        this.executeTouch();
    }
  }
});
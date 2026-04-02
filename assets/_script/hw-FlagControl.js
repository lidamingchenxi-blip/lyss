cc.Class({
  extends: cc.Component,
  properties: {},
  onLoad: function () {
    var e = this.node.getComponent(cc.Label);
    var i = null;
    switch (PlatformCode) {
      case PlatformList.头条:
        i = App.ByteDance.loadText;
        break;
      case PlatformList.华为:
        i = App.HuaWei.loadText;
        break;
      case PlatformList.OPPO:
        i = App.OPPO.loadText;
        break;
      case PlatformList.VIVO:
        i = App.VIVO.loadText;
        break;
      case PlatformList.QQ:
        i = App.Tencent.loadText;
        break;
      case PlatformList.微信:
        i = App.WeChat.loadText;
        break;
      case PlatformList.百度:
        i = App.BaiDu.loadText;
        break;
      case PlatformList.快手:
        i = App.Quick.loadText;
        break;
      case PlatformList.魅族:
        i = App.MeiZu.loadText;
        break;
      case PlatformList.UC:
        i = App.UC.loadText;
        break;
      case PlatformList.游家:
        i = App.YouJia.loadText;
    }
    if ("" !== i && i) {
      e.string = i;
    } else {
      this.node.active = false;
    }
  }
});
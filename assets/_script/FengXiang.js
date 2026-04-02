cc.Class({
  extends: cc.Component,
  properties: {
    closeBtn: {
      default: null,
      type: cc.Node,
      displayName: "关闭按钮"
    },
    main: {
      default: null,
      type: cc.Node
    },
    fengXiang_btn: {
      default: null,
      type: cc.Node,
      displayName: "分享按钮"
    },
    fengXiang_Img: {
      default: null,
      type: cc.Node,
      displayName: "分享图"
    }
  },
  onLoad: function () {
    this.closeBtn.width = 25 * ServerConfig.closeScale;
    this.closeBtn.height = 30 * ServerConfig.closeScale;
  },
  start: function () {},
  btnClick: function (e) {
    SoundMgr.playEffect("audio_btn");
    switch (e.target.name) {
      case "fenxiangkuang":
      case "xuanyaoyixia":
        console.log("分享界面 --- 执行分享");
        adUtils.executeShare();
    }
    this.node.removeFromParent();
  }
});
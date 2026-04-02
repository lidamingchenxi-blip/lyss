cc.Class({
  extends: cc.Component,
  properties: {
    gui1: cc.Node,
    gui2: cc.Node,
    gui3: cc.Node,
    numLab: cc.Node,
    beixiji: cc.Node,
    tunshishibai: cc.Node,
    share_btn: {
      default: null,
      type: cc.Node,
      displayName: "主动分享按钮"
    }
  },
  onLoad: function () {
    var e;
    cocoscreator.api_showTip("prefab/game/shenmihe", function (e) {
      var i = cc.instantiate(e);
      this.node.addChild(i);
    }.bind(this));
    if (1 == (e = 6 == MainDate.GameType ? PlayerAI_dk.guiXuhao : Game.guiXuhao)) {
      this.gui1.active = true;
    } else if (2 == e) {
      this.gui2.active = true;
    } else {
      3 == e && (this.gui3.active = true);
    }
    Game.gameOver = true;
    this.num = Math.floor(10 * Math.random());
    this.numLab.getComponent(cc.Label).string = this.num;
    if (1 == MainDate.GameType || 3 == MainDate.GameType || 4 == MainDate.GameType || 5 == MainDate.GameType || 6 == MainDate.GameType || 7 == MainDate.GameType || 8 == MainDate.GameType) {
      this.beixiji.active = true;
      this.tunshishibai.active = false;
    } else if (2 == MainDate.GameType) {
      this.beixiji.active = false, this.tunshishibai.active = true;
    }
    adUtils.setShareButtonStatus(this.share_btn);
  },
  start: function () {
    adUtils.executeStopRecorder();
    (function () {
      PlatformCode !== PlatformList.头条 && PlatformCode !== PlatformList.QQ && PlatformCode !== PlatformList.快手 || MathMgr.getRandomNum(0, 100) < ServerConfig.randomPush && cc.loader.loadRes("prefab/Alert/FengXiang", cc.Prefab, function (e, i) {
        var a = cc.instantiate(i);
        cc.director.getScene().addChild(a);
      });
      adUtils.executeShowFinishAdvertising(true);
      adUtils.executeShowFinishLogic(false);
    })();
  },
  btn_share: function () {
    console.log("执行分享");
    adUtils.executeShare();
  },
  but_lingqu: function () {
    MainDate.PlayerData.juzi += this.num;
    MainDate.PlayerDataSetObject();
    cc.director.loadScene("scene/Menu");
  },
  but_sanbeilingqu: function () {
    var e = this;
    adUtils.executeShowVideo(function () {
      MainDate.PlayerData.juzi += 3 * e.num;
      MainDate.PlayerDataSetObject();
      cc.director.loadScene("scene/Menu");
    });
  }
});
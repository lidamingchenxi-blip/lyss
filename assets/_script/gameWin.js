cc.Class({
  extends: cc.Component,
  properties: {
    player1: cc.Node,
    player2: cc.Node,
    player3: cc.Node,
    player4: cc.Node,
    player5: cc.Node,
    player6: cc.Node,
    numLab: cc.Node,
    gui1: cc.Node,
    gui2: cc.Node,
    gui3: cc.Node,
    chenggongduobi: cc.Node,
    chenggongtunshi: cc.Node,
    mvp: cc.Node,
    share_btn: {
      default: null,
      type: cc.Node,
      displayName: "主动分享按钮"
    }
  },
  onLoad: function () {
    MainDate.winNum++;
    cocoscreator.api_showTip("prefab/game/shenmihe", function (e) {
      var i = cc.instantiate(e);
      this.node.addChild(i);
    }.bind(this));
    if (1 == MainDate.GameType || 3 == MainDate.GameType || 4 == MainDate.GameType || 5 == MainDate.GameType || 7 == MainDate.GameType) {
      this.chenggongduobi.active = true;
      this.chenggongtunshi.active = false;
      if (1 == MainDate.renwuXuhao) {
        this.player1.active = true;
      } else if (2 == MainDate.renwuXuhao) {
        this.player2.active = true;
      } else if (3 == MainDate.renwuXuhao) {
        this.player3.active = true;
      } else if (4 == MainDate.renwuXuhao) {
        this.player4.active = true;
      } else if (5 == MainDate.renwuXuhao) {
        this.player5.active = true;
      } else {
        6 == MainDate.renwuXuhao && (this.player6.active = true);
      }
    } else if (!(2 != MainDate.GameType && 6 != MainDate.GameType)) {
      this.chenggongduobi.active = false, this.chenggongtunshi.active = true, this.mvp.active = false, 1 == Game.guiXuhao ? this.gui1.active = true : 2 == Game.guiXuhao ? this.gui2.active = true : 3 == Game.guiXuhao && (this.gui3.active = true);
    }
    Game.gameOver = true;
    this.num = Math.floor(20 * Math.random() + 10);
    this.numLab.getComponent(cc.Label).string = this.num;
    adUtils.setShareButtonStatus(this.share_btn);
  },
  start: function () {
    adUtils.executeStopRecorder();
    (function () {
      PlatformCode !== PlatformList.头条 && PlatformCode !== PlatformList.QQ && PlatformCode !== PlatformList.快手 || MathMgr.getRandomNum(0, 100) < ServerConfig.randomPush && cc.loader.loadRes("prefab/Alert/FengXiang", cc.Prefab, function (e) {
        var i = cc.instantiate(e);
        cc.director.getScene().addChild(i);
      });
      adUtils.executeShowFinishAdvertising(true);
      adUtils.executeShowFinishLogic(true);
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
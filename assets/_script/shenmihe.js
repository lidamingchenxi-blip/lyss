cc.Class({
  extends: cc.Component,
  properties: {
    baoxianArr: cc.Node,
    guanbi: cc.Node
  },
  onLoad: function () {
    this.lujing = {
      tikuanji: "image/game/jianzao/daoju/ATM",
      bingxiang: "image/game/jianzao/daoju/bingxiang1",
      lizijiasuqi: "image/game/jianzao/daoju/dianciquan",
      fuzhoufasheqi: "image/game/jianzao/daoju/fuzhou",
      nengliang: "image/game/jianzao/daoju/hudun",
      daoci: "image/game/jianzao/daoju/jingji",
      duantoutai: "image/game/jianzao/daoju/kaitouzha",
      youbu: "image/game/jianzao/daoju/wang",
      weixiutai: "image/game/jianzao/daoju/weixiu",
      dianciquan: "image/game/jianzao/daoju/xianquan",
      liaowangtai: "image/game/jianzao/daoju/xinhaota"
    };
    this.daojuNum = {
      tikuanji: 2,
      bingxiang: 2,
      lizijiasuqi: 1,
      fuzhoufasheqi: 3,
      nengliang: 2,
      daoci: 1,
      duantoutai: 1,
      youbu: 1,
      weixiutai: 5,
      dianciquan: 1,
      liaowangtai: 1
    };
    this.mianfeiNum = 3;
    MainDate.winNum >= 2 && Math.random() < .5 && (this.mianfeiNum = 2);
    this.baoxiangshipin();
  },
  baoxiangshipin: function () {
    for (var e = 0; e < this.baoxianArr.children.length; e++) {
      var i = this.baoxianArr.children[e];
      if (this.mianfeiNum > 0) {
        i.getChildByName("shipin").active = false;
      } else {
        i.getChildByName("shipin").active = !i.getChildByName("num").active;
      }
    }
  },
  but_baoxian: function (e) {
    var i = this;
    var a = Object.keys(this.lujing)[Math.floor(Object.keys(this.lujing).length * Math.random())];
    var n = this.baoxianArr.getChildByName(e.target.name);
    if (!n.getChildByName("num").active) {
      music.api_audioPlay(MainDate.mp3.anniu);
      if (this.mianfeiNum > 0) {
        cc.loader.loadRes("image/game/jianzao/daoju/juzi", cc.SpriteFrame, function (e, i) {
          n.getChildByName("hezi").getComponent(cc.Sprite).spriteFrame = i;
        });
        var t = Math.floor(4 * Math.random() + 1);
        n.getChildByName("num").getComponent(cc.Label).string = "X" + t;
        n.getChildByName("num").active = true;
        n.getChildByName("shipin").active = false;
        MainDate.PlayerData.juzi += t;
        MainDate.PlayerDataSetObject();
      } else {
        adUtils.executeShowVideo(function () {
          cc.loader.loadRes(i.lujing[a], cc.SpriteFrame, function (e, i) {
            n.getChildByName("hezi").getComponent(cc.Sprite).spriteFrame = i;
          });
          n.getChildByName("num").getComponent(cc.Label).string = "X" + i.daojuNum[a];
          n.getChildByName("num").active = true;
          n.getChildByName("shipin").active = false;
          MainDate.PlayerData[a] += i.daojuNum[a];
          MainDate.PlayerDataSetObject();
        });
      }
      ext && ext.shenmiheSPLv && ext.shenmiheSPLv > 100 * Math.random() && this.mianfeiNum > 0 && (this.mianfeiNum = 0);
      this.mianfeiNum--;
      this.mianfeiNum <= 0 && (this.guanbi.active = true);
      this.baoxiangshipin();
    }
  },
  but_guanbi: function () {
    music.api_audioPlay(MainDate.mp3.anniu);
    this.node.destroy();
  },
  start: function () {}
});
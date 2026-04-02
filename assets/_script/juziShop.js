cc.Class({
  extends: cc.Component,
  properties: {
    gaokejidi: cc.Node,
    heikejidi: cc.Node,
    juzigongfangdi: cc.Node,
    gaokejidaoju: cc.Node,
    heikejidaoju: cc.Node,
    juzigongfangdaoju: cc.Node,
    fuzhou: cc.Node,
    nengliang: cc.Node,
    tikuanji: cc.Node,
    bingxiang: cc.Node,
    youbu: cc.Node,
    daoci: cc.Node,
    duantoutai: cc.Node,
    weixiutai: cc.Node,
    liaowangtai: cc.Node,
    jiasuqi: cc.Node,
    dianciquan: cc.Node
  },
  onLoad: function () {
    cc.loader.loadRes("json/daoju", function (e, i) {
      this.shopJson = i.json;
      this.newshuju();
    }.bind(this));
  },
  start: function () {
    adUtils.executeShowOtherAdvertising(true);
  },
  newshuju: function () {
    this.fuzhou.getChildByName("yongyou").getComponent(cc.Label).string = "拥有: " + MainDate.PlayerData.fuzhoufasheqi;
    this.nengliang.getChildByName("yongyou").getComponent(cc.Label).string = "拥有: " + MainDate.PlayerData.nengliang;
    this.tikuanji.getChildByName("yongyou").getComponent(cc.Label).string = "拥有: " + MainDate.PlayerData.tikuanji;
    this.bingxiang.getChildByName("yongyou").getComponent(cc.Label).string = "拥有: " + MainDate.PlayerData.bingxiang;
    this.youbu.getChildByName("yongyou").getComponent(cc.Label).string = "拥有: " + MainDate.PlayerData.youbu;
    this.daoci.getChildByName("yongyou").getComponent(cc.Label).string = "拥有: " + MainDate.PlayerData.daoci;
    this.duantoutai.getChildByName("yongyou").getComponent(cc.Label).string = "拥有: " + MainDate.PlayerData.duantoutai;
    this.weixiutai.getChildByName("yongyou").getComponent(cc.Label).string = "拥有: " + MainDate.PlayerData.weixiutai;
    this.liaowangtai.getChildByName("yongyou").getComponent(cc.Label).string = "拥有: " + MainDate.PlayerData.liaowangtai;
    this.jiasuqi.getChildByName("yongyou").getComponent(cc.Label).string = "拥有: " + MainDate.PlayerData.lizijiasuqi;
    this.dianciquan.getChildByName("yongyou").getComponent(cc.Label).string = "拥有: " + MainDate.PlayerData.dianciquan;
    this.fuzhou.getChildByName("miaoshu").getComponent(cc.Label).string = this.shopJson[45].miaoshu;
    this.nengliang.getChildByName("miaoshu").getComponent(cc.Label).string = this.shopJson[46].miaoshu;
    this.tikuanji.getChildByName("miaoshu").getComponent(cc.Label).string = this.shopJson[47].miaoshu;
    this.bingxiang.getChildByName("miaoshu").getComponent(cc.Label).string = this.shopJson[48].miaoshu;
    this.youbu.getChildByName("miaoshu").getComponent(cc.Label).string = this.shopJson[49].miaoshu;
    this.daoci.getChildByName("miaoshu").getComponent(cc.Label).string = this.shopJson[50].miaoshu;
    this.duantoutai.getChildByName("miaoshu").getComponent(cc.Label).string = this.shopJson[51].miaoshu;
    this.weixiutai.getChildByName("miaoshu").getComponent(cc.Label).string = this.shopJson[52].miaoshu;
    this.liaowangtai.getChildByName("miaoshu").getComponent(cc.Label).string = this.shopJson[53].miaoshu;
    this.jiasuqi.getChildByName("miaoshu").getComponent(cc.Label).string = this.shopJson[54].miaoshu;
    this.dianciquan.getChildByName("miaoshu").getComponent(cc.Label).string = this.shopJson[55].miaoshu;
    if ("shipin" == this.shopJson[45].juzi) {
      this.fuzhou.getChildByName("anniu").active = false;
      this.fuzhou.getChildByName("anniushipin").active = true;
    } else {
      this.fuzhou.getChildByName("anniu").getChildByName("jiage").getComponent(cc.Label).string = this.shopJson[45].juzi;
    }
    if ("shipin" == this.shopJson[46].juzi) {
      this.nengliang.getChildByName("anniu").active = false;
      this.nengliang.getChildByName("anniushipin").active = true;
    } else {
      this.nengliang.getChildByName("anniu").getChildByName("jiage").getComponent(cc.Label).string = this.shopJson[46].juzi;
    }
    if ("shipin" == this.shopJson[47].juzi) {
      this.tikuanji.getChildByName("anniu").active = false;
      this.tikuanji.getChildByName("anniushipin").active = true;
    } else {
      this.tikuanji.getChildByName("anniu").getChildByName("jiage").getComponent(cc.Label).string = this.shopJson[47].juzi;
    }
    if ("shipin" == this.shopJson[48].juzi) {
      this.bingxiang.getChildByName("anniu").active = false;
      this.bingxiang.getChildByName("anniushipin").active = true;
    } else {
      this.bingxiang.getChildByName("anniu").getChildByName("jiage").getComponent(cc.Label).string = this.shopJson[48].juzi;
    }
    if ("shipin" == this.shopJson[49].juzi) {
      this.youbu.getChildByName("anniu").active = false;
      this.youbu.getChildByName("anniushipin").active = true;
    } else {
      this.youbu.getChildByName("anniu").getChildByName("jiage").getComponent(cc.Label).string = this.shopJson[49].juzi;
    }
    if ("shipin" == this.shopJson[50].juzi) {
      this.daoci.getChildByName("anniu").active = false;
      this.daoci.getChildByName("anniushipin").active = true;
    } else {
      this.daoci.getChildByName("anniu").getChildByName("jiage").getComponent(cc.Label).string = this.shopJson[50].juzi;
    }
    if ("shipin" == this.shopJson[51].juzi) {
      this.duantoutai.getChildByName("anniu").active = false;
      this.duantoutai.getChildByName("anniushipin").active = true;
    } else {
      this.duantoutai.getChildByName("anniu").getChildByName("jiage").getComponent(cc.Label).string = this.shopJson[51].juzi;
    }
    if ("shipin" == this.shopJson[52].juzi) {
      this.weixiutai.getChildByName("anniu").active = false;
      this.weixiutai.getChildByName("anniushipin").active = true;
    } else {
      this.weixiutai.getChildByName("anniu").getChildByName("jiage").getComponent(cc.Label).string = this.shopJson[52].juzi;
    }
    if ("shipin" == this.shopJson[53].juzi) {
      this.liaowangtai.getChildByName("anniu").active = false;
      this.liaowangtai.getChildByName("anniushipin").active = true;
    } else {
      this.liaowangtai.getChildByName("anniu").getChildByName("jiage").getComponent(cc.Label).string = this.shopJson[53].juzi;
    }
    if ("shipin" == this.shopJson[54].juzi) {
      this.jiasuqi.getChildByName("anniu").active = false;
      this.jiasuqi.getChildByName("anniushipin").active = true;
    } else {
      this.jiasuqi.getChildByName("anniu").getChildByName("jiage").getComponent(cc.Label).string = this.shopJson[54].juzi;
    }
    if ("shipin" == this.shopJson[55].juzi) {
      this.dianciquan.getChildByName("anniu").active = false;
      this.dianciquan.getChildByName("anniushipin").active = true;
    } else {
      this.dianciquan.getChildByName("anniu").getChildByName("jiage").getComponent(cc.Label).string = this.shopJson[55].juzi;
    }
  },
  but_guanbi: function () {
    music.api_audioPlay(MainDate.mp3.anniu);
    this.node.destroy();
  },
  but_keji: function (e) {
    var i = this;
    music.api_audioPlay(MainDate.mp3.anniu);
    if ("gaokeji" == e.currentTarget.name) {
      cc.loader.loadRes("image/game/jianzao/shanganniu", cc.SpriteFrame, function (e, a) {
        i.gaokejidi.getComponent(cc.Sprite).spriteFrame = a;
      });
      cc.loader.loadRes("image/game/jianzao/shangannuhei", cc.SpriteFrame, function (e, a) {
        i.heikejidi.getComponent(cc.Sprite).spriteFrame = a;
      });
      cc.loader.loadRes("image/game/jianzao/shangannuhei", cc.SpriteFrame, function (e, a) {
        i.juzigongfangdi.getComponent(cc.Sprite).spriteFrame = a;
      });
      this.gaokejidaoju.active = true;
      this.heikejidaoju.active = false;
      this.juzigongfangdaoju.active = false;
    } else if ("heikeji" == e.currentTarget.name) {
      cc.loader.loadRes("image/game/jianzao/shanganniu", cc.SpriteFrame, function (e, a) {
        i.heikejidi.getComponent(cc.Sprite).spriteFrame = a;
      });
      cc.loader.loadRes("image/game/jianzao/shangannuhei", cc.SpriteFrame, function (e, a) {
        i.gaokejidi.getComponent(cc.Sprite).spriteFrame = a;
      });
      cc.loader.loadRes("image/game/jianzao/shangannuhei", cc.SpriteFrame, function (e, a) {
        i.juzigongfangdi.getComponent(cc.Sprite).spriteFrame = a;
      });
      this.gaokejidaoju.active = false;
      this.heikejidaoju.active = true;
      this.juzigongfangdaoju.active = false;
    } else if ("juzigongfang" == e.currentTarget.name) {
      cc.loader.loadRes("image/game/jianzao/shanganniu", cc.SpriteFrame, function (e, a) {
        i.juzigongfangdi.getComponent(cc.Sprite).spriteFrame = a;
      }), cc.loader.loadRes("image/game/jianzao/shangannuhei", cc.SpriteFrame, function (e, a) {
        i.heikejidi.getComponent(cc.Sprite).spriteFrame = a;
      }), cc.loader.loadRes("image/game/jianzao/shangannuhei", cc.SpriteFrame, function (e, a) {
        i.gaokejidi.getComponent(cc.Sprite).spriteFrame = a;
      }), this.gaokejidaoju.active = false, this.heikejidaoju.active = false, this.juzigongfangdaoju.active = true;
    }
  },
  but_goumaifuzhou: function () {
    music.api_audioPlay(MainDate.mp3.anniu);
    if (MainDate.PlayerData.juzi < this.shopJson[45].juzi) {
      Tools.ShowAsk("黄符不足");
      return void cocoscreator.api_showTip("prefab/menu/jutituisong", function (e) {
        var i = cc.instantiate(e);
        i.scale = 0;
        this.node.addChild(i);
        cocoscreator.api_panetoff(i);
      }.bind(this));
    }
    Tools.ShowAsk("购买成功");
    MainDate.PlayerData.juzi -= this.shopJson[45].juzi;
    MainDate.PlayerData.fuzhoufasheqi++;
    MainDate.PlayerDataSetObject();
    Menu.juziNum.getComponent(cc.Label).string = MainDate.PlayerData.juzi;
    this.newshuju();
  },
  but_goumainengliangzhao: function () {
    music.api_audioPlay(MainDate.mp3.anniu);
    if (MainDate.PlayerData.juzi < this.shopJson[46].juzi) {
      Tools.ShowAsk("黄符不足");
      return void cocoscreator.api_showTip("prefab/menu/jutituisong", function (e) {
        var i = cc.instantiate(e);
        i.scale = 0;
        this.node.addChild(i);
        cocoscreator.api_panetoff(i);
      }.bind(this));
    }
    Tools.ShowAsk("购买成功");
    MainDate.PlayerData.juzi -= this.shopJson[46].juzi;
    MainDate.PlayerData.nengliang++;
    MainDate.PlayerDataSetObject();
    Menu.juziNum.getComponent(cc.Label).string = MainDate.PlayerData.juzi;
    this.newshuju();
  },
  but_goumaitikuanji: function () {
    music.api_audioPlay(MainDate.mp3.anniu);
    if (MainDate.PlayerData.juzi < this.shopJson[47].juzi) {
      Tools.ShowAsk("黄符不足");
      return void cocoscreator.api_showTip("prefab/menu/jutituisong", function (e) {
        var i = cc.instantiate(e);
        i.scale = 0;
        this.node.addChild(i);
        cocoscreator.api_panetoff(i);
      }.bind(this));
    }
    Tools.ShowAsk("购买成功");
    MainDate.PlayerData.juzi -= this.shopJson[47].juzi;
    MainDate.PlayerData.tikuanji++;
    MainDate.PlayerDataSetObject();
    Menu.juziNum.getComponent(cc.Label).string = MainDate.PlayerData.juzi;
    this.newshuju();
  },
  but_goumaibingxiang: function () {
    music.api_audioPlay(MainDate.mp3.anniu);
    if (MainDate.PlayerData.juzi < this.shopJson[48].juzi) {
      Tools.ShowAsk("黄符不足");
      return void cocoscreator.api_showTip("prefab/menu/jutituisong", function (e) {
        var i = cc.instantiate(e);
        i.scale = 0;
        this.node.addChild(i);
        cocoscreator.api_panetoff(i);
      }.bind(this));
    }
    Tools.ShowAsk("购买成功");
    MainDate.PlayerData.juzi -= this.shopJson[48].juzi;
    MainDate.PlayerData.bingxiang++;
    MainDate.PlayerDataSetObject();
    Menu.juziNum.getComponent(cc.Label).string = MainDate.PlayerData.juzi;
    this.newshuju();
  },
  but_goumaiyoubu: function () {
    music.api_audioPlay(MainDate.mp3.anniu);
    if (MainDate.PlayerData.juzi < this.shopJson[49].juzi) {
      Tools.ShowAsk("黄符不足");
      return void cocoscreator.api_showTip("prefab/menu/jutituisong", function (e) {
        var i = cc.instantiate(e);
        i.scale = 0;
        this.node.addChild(i);
        cocoscreator.api_panetoff(i);
      }.bind(this));
    }
    Tools.ShowAsk("购买成功");
    MainDate.PlayerData.juzi -= this.shopJson[49].juzi;
    MainDate.PlayerData.youbu++;
    MainDate.PlayerDataSetObject();
    Menu.juziNum.getComponent(cc.Label).string = MainDate.PlayerData.juzi;
    this.newshuju();
  },
  but_goumaidaoci: function () {
    music.api_audioPlay(MainDate.mp3.anniu);
    if (MainDate.PlayerData.juzi < this.shopJson[50].juzi) {
      Tools.ShowAsk("黄符不足");
      return void cocoscreator.api_showTip("prefab/menu/jutituisong", function (e) {
        var i = cc.instantiate(e);
        i.scale = 0;
        this.node.addChild(i);
        cocoscreator.api_panetoff(i);
      }.bind(this));
    }
    Tools.ShowAsk("购买成功");
    MainDate.PlayerData.juzi -= this.shopJson[50].juzi;
    MainDate.PlayerData.daoci++;
    MainDate.PlayerDataSetObject();
    Menu.juziNum.getComponent(cc.Label).string = MainDate.PlayerData.juzi;
    this.newshuju();
  },
  but_goumaiduantoutai: function () {
    var e = this;
    music.api_audioPlay(MainDate.mp3.anniu);
    adUtils.executeShowVideo(function () {
      MainDate.PlayerData.duantoutai++;
      MainDate.PlayerDataSetObject();
      Menu.juziNum.getComponent(cc.Label).string = MainDate.PlayerData.juzi;
      e.newshuju();
    });
  },
  but_goumaiweixiutai: function () {
    music.api_audioPlay(MainDate.mp3.anniu);
    if (MainDate.PlayerData.juzi < this.shopJson[52].juzi) {
      Tools.ShowAsk("黄符不足");
      return void cocoscreator.api_showTip("prefab/menu/jutituisong", function (e) {
        var i = cc.instantiate(e);
        i.scale = 0;
        this.node.addChild(i);
        cocoscreator.api_panetoff(i);
      }.bind(this));
    }
    Tools.ShowAsk("购买成功");
    MainDate.PlayerData.juzi -= this.shopJson[52].juzi;
    MainDate.PlayerData.weixiutai++;
    MainDate.PlayerDataSetObject();
    Menu.juziNum.getComponent(cc.Label).string = MainDate.PlayerData.juzi;
    this.newshuju();
  },
  but_goumailiaowangtai: function () {
    music.api_audioPlay(MainDate.mp3.anniu);
    if (MainDate.PlayerData.juzi < this.shopJson[53].juzi) {
      Tools.ShowAsk("黄符不足");
      return void cocoscreator.api_showTip("prefab/menu/jutituisong", function (e) {
        var i = cc.instantiate(e);
        i.scale = 0;
        this.node.addChild(i);
        cocoscreator.api_panetoff(i);
      }.bind(this));
    }
    Tools.ShowAsk("购买成功");
    MainDate.PlayerData.juzi -= this.shopJson[53].juzi;
    MainDate.PlayerData.liaowangtai++;
    MainDate.PlayerDataSetObject();
    Menu.juziNum.getComponent(cc.Label).string = MainDate.PlayerData.juzi;
    this.newshuju();
  },
  but_goumaijiasuqi: function () {
    music.api_audioPlay(MainDate.mp3.anniu);
    if (MainDate.PlayerData.juzi < this.shopJson[54].juzi) {
      Tools.ShowAsk("黄符不足");
      return void cocoscreator.api_showTip("prefab/menu/jutituisong", function (e) {
        var i = cc.instantiate(e);
        i.scale = 0;
        this.node.addChild(i);
        cocoscreator.api_panetoff(i);
      }.bind(this));
    }
    Tools.ShowAsk("购买成功");
    MainDate.PlayerData.juzi -= this.shopJson[54].juzi;
    MainDate.PlayerData.lizijiasuqi++;
    MainDate.PlayerDataSetObject();
    Menu.juziNum.getComponent(cc.Label).string = MainDate.PlayerData.juzi;
    this.newshuju();
  },
  but_goumaidianciquan: function () {
    var e = this;
    music.api_audioPlay(MainDate.mp3.anniu);
    adUtils.executeShowVideo(function () {
      MainDate.PlayerData.dianciquan++;
      MainDate.PlayerDataSetObject();
      Menu.juziNum.getComponent(cc.Label).string = MainDate.PlayerData.juzi;
      e.newshuju();
    });
  }
});
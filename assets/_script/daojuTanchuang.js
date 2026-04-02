cc.Class({
  extends: cc.Component,
  properties: {
    img: cc.Node,
    jinbiNum: cc.Node,
    shandianNum: cc.Node
  },
  onLoad: function () {
    var e;
    var i;
    var a = this;
    switch (Game.chaichudaojuType) {
      case "fuzhoufasheqi":
        e = "image/game/jianzao/daoju/fuzhou";
        i = 45;
        break;
      case "nengliangzhao":
        e = "image/game/jianzao/daoju/hudun";
        i = 46;
        break;
      case "tikuanji":
        e = "image/game/jianzao/daoju/ATM";
        i = 47;
        break;
      case "binxiang":
        e = "image/game/jianzao/daoju/bingxiang1";
        i = 48;
        break;
      case "youbu":
        e = "image/game/jianzao/daoju/wang";
        i = 49;
        break;
      case "daoci":
        e = "image/game/jianzao/daoju/jingji";
        i = 50;
        break;
      case "duantoutai":
        e = "image/game/jianzao/daoju/kaitouzha";
        i = 51;
        break;
      case "liaowangtai":
        e = "image/game/jianzao/daoju/xinhaota";
        i = 53;
        break;
      case "lizijiasuqi":
        e = "image/game/jianzao/daoju/dianciquan";
        i = 54;
        break;
      case "dianciquan":
        e = "image/game/jianzao/daoju/xianquan";
        i = 55;
    }
    cc.loader.loadRes(e, cc.SpriteFrame, function (e, i) {
      a.img.getComponent(cc.Sprite).spriteFrame = i;
    });
    this.jinbiNum.getComponent(cc.Label).string = Math.floor(Game.daoJuJson[i].jiagejin / 2);
    this.shandianNum.getComponent(cc.Label).string = Math.floor(Game.daoJuJson[i].jiagedian / 2);
    if (0 == Game.daoJuJson[i].jiagejin) {
      this.jinbiNum.active = false;
      this.shandianNum.scale = .8;
    } else if (0 == Game.daoJuJson[i].jiagedian) {
      this.shandianNum.active = false, this.jinbiNum.scale = .8;
    }
  },
  but_chaichu: function () {
    var e;
    music.api_audioPlay("mp3/chaijianzhu");
    switch (Game.chaichudaojuType) {
      case "fuzhoufasheqi":
        MainDate.dangqianNum_fuzhoufasheqi--;
        e = 45;
        break;
      case "nengliangzhao":
        MainDate.dangqianNum_nengliang--;
        e = 46;
        break;
      case "tikuanji":
        MainDate.dangqianNum_tikuanji--;
        e = 47;
        break;
      case "binxiang":
        Player.player_men_bing(false);
        MainDate.dangqianNum_bingxiang--;
        e = 48;
        break;
      case "youbu":
        MainDate.dangqianNum_youbu--;
        e = 49;
        break;
      case "daoci":
        Player.player_men_daoci(false);
        MainDate.dangqianNum_daoci--;
        e = 50;
        break;
      case "duantoutai":
        MainDate.dangqianNum_duantoutai--;
        e = 51;
        break;
      case "liaowangtai":
        MainDate.dangqianNum_liaowangtai--;
        e = 53;
        break;
      case "lizijiasuqi":
        MainDate.dangqianNum_lizijiasuqi--;
        e = 54;
        break;
      case "dianciquan":
        MainDate.dangqianNum_dianciquan--;
        e = 55;
    }
    Player.jinbiArr += Math.floor(Game.daoJuJson[e].jiagejin / 2);
    Player.shandianArr += Math.floor(Game.daoJuJson[e].jiagedian / 2);
    Player.fk_fangzhitishi(Game.chaichudaoju.node.posFK, true);
    Game.jinbiNum.getComponent(cc.Label).string = Player.jinbiArr;
    Game.shandianNum.getComponent(cc.Label).string = Player.shandianArr;
    Player.shengjijiantou_tishi();
    Game.chaichudaoju.node.destroy();
    this.node.destroy();
  },
  but_guanbi: function () {
    music.api_audioPlay(MainDate.mp3.jianzhushengji);
    this.node.destroy();
  },
  start: function () {
    adUtils.executeShowGameAdvertising(true);
  }
});
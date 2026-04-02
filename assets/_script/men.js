cc.Class({
  extends: cc.Component,
  properties: {
    xuetiao: cc.Node,
    naomen: cc.Node,
    shengji: cc.Node,
    nengliangzhao: cc.Node,
    bing: cc.Node,
    jingji: cc.Node,
    banzi: cc.Node
  },
  onLoad: function () {
    this.node.zIndex = 10;
    this.mendengji = 0;
    this.phMax = 35;
    this.ph = 35;
    this.weixiuTime = 0;
    this.baohuTime = 0;
    this.baohuLengque = 0;
  },
  but_mentanchuang: function () {
    this.mendengji >= 12 && Game.fangzhitanchuang("门已经到达最高等级");
    (1 != MainDate.GameType && 3 != MainDate.GameType && 4 != MainDate.GameType && 6 != MainDate.GameType && 7 != MainDate.GameType || !(Player.men != this.node || this.mendengji >= 12)) && (5 == MainDate.GameType && this.mendengji >= 12 || 2 != MainDate.GameType && (Player.menjs = this, Game.tanchuang("men", this.node.bianzu)));
  },
  gongji: function (e) {
    if (1 == this.nengliangzhao.active) {
      return false;
    }
    this.ph -= e;
    .3 * this.phMax > this.ph && this.nengliangzhao_chufa();
    if (this.ph <= 0) {
      var i = this.node.bianzu;
      if (1 == MainDate.GameType || 2 == MainDate.GameType || 3 == MainDate.GameType || 4 == MainDate.GameType || 7 == MainDate.GameType) {
        var a = Game.menArr.indexOf(this.node);
        Game.menArr.splice(a, 1);
        var n = Game.menGuanbi.indexOf(this.node);
        Game.menGuanbi.splice(n, 1);
      } else if (5 == MainDate.GameType || 6 == MainDate.GameType) {
        var t = Player.menArr.indexOf(this.node);
        Player.menArr.splice(t, 1);
      }
      music.api_audioPlay(MainDate.mp3.chaijianzhu);
      this.node.destroy();
      return i;
    }
    this.naomen.active = true;
    this.naomen.getComponent(cc.Animation).play();
    cc.tween(this.node).to(.15, {
      scale: .8
    }).to(.075, {
      scale: 1
    }).start();
    return false;
  },
  nengliangzhao_chufa: function () {
    (!(MainDate.dangqianNum_nengliang <= 0 || this.baohuLengque > 0 || Player.men != this.node) || 1 != MainDate.GameType && 2 != MainDate.GameType && 3 != MainDate.GameType && 4 != MainDate.GameType && 7 != MainDate.GameType) && (5 == MainDate.GameType && (MainDate.dangqianNum_nengliang <= 0 || this.baohuLengque > 0) || 6 == MainDate.GameType && (Player.nengliangzhaoNum <= 0 || this.baohuLengque > 0 || Player.men != this.node) || (this.nengliangzhao.active = true, this.baohuTime = 150, this.baohuLengque = 900));
  },
  update: function (e) {
    var i = this.ph / this.phMax;
    i <= 0 && (i = 0);
    this.xuetiao.getComponent(cc.ProgressBar).progress = i;
    if (this.weixiuTime > 0) {
      this.weixiuTime--;
      this.ph += 7 * this.phMax / 6e3 * 60 * e;
      this.ph >= this.phMax && (this.ph = this.phMax);
      this.banzi.active = true;
    } else {
      this.banzi.active = false;
    }
    if (this.baohuTime > 0) {
      this.baohuTime--;
    } else {
      0 == this.baohuTime && (this.nengliangzhao.active = false);
    }
    this.baohuLengque > 0 && this.baohuLengque--;
    if (6 == MainDate.GameType && Game.xuanzerenwu) {
      if (Player.weixiutaiNum >= 1 || this.ph < this.phMax) {
        this.ph += this.phMax / 600 * Player.weixiutaiNum * 60 * e, this.ph >= this.phMax && (this.ph = this.phMax);
      }
    } else if (MainDate.dangqianNum_weixiutai >= 1 || this.ph < this.phMax) {
      this.ph += this.phMax / 600 * MainDate.dangqianNum_weixiutai * 60 * e, this.ph >= this.phMax && (this.ph = this.phMax);
    }
    if (this.ph < this.phMax) {
      this.ph += this.phMax / 2400 * 60 * e;
      this.ph >= this.phMax && (this.ph = this.phMax);
    }
  }
});
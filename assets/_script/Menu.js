cc.Class({
  extends: cc.Component,
  properties: {
    danrenADbut: cc.Node,
    mengyanADbut: cc.Node,
    quandiADbut: cc.Node,
    duikangADbut: cc.Node,
    bociADbut: cc.Node,
    wuxianjinbiADbut: cc.Node,
    tafangADbut: cc.Node,
    juziNum: cc.Node,
    guizhanpan: cc.Node,
    shenmihe: cc.Node,
    chuantongmoshi: cc.Node,
    dantiaomoshi: cc.Node,
    mengyanmoshi: cc.Node,
    quandimoshi: cc.Node,
    qiusheng: cc.Node,
    duikangmoshi: cc.Node,
    gecao: cc.Node,
    wuxianjinbi: cc.Node,
    BtnArrayPos: [cc.Node],
    tishi: cc.Node
  },
  onLoad: function () {
    window.Menu = this;
    if (MainDate.dengluyouxi) {
      MainDate.initdate();
      MainDate.dengluyouxi = false;
    }
    this.juziNum.getComponent(cc.Label).string = MainDate.PlayerData.juzi;
    music.BGMusic(MainDate.mp3.bgm);
    music.api_audioPlay(MainDate.mp3.youxikaishi_menu);
    MainDate.scene = "Menu";
    this.chuantongmoshi.setsiblingindex = 5;
  }
});
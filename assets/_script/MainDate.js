window.MainDate = {
  initdate: function () {
    this.GameType = 1;
    this.renwuXuhao = 1;
    this.winNum = 0;
    this.PlayerData = {
      juzi: 0,
      renwuArr: [1],
      guiArr: [1],
      fuzhoufasheqi: 1,
      nengliang: 1,
      tikuanji: 1,
      bingxiang: 1,
      youbu: 1,
      daoci: 1,
      duantoutai: 1,
      weixiutai: 1,
      liaowangtai: 1,
      lizijiasuqi: 1,
      dianciquan: 1,
      youxiguize: false,
      dantiaojiesuo: false,
      mengyanjiesuo: false,
      quandijiesuo: false,
      duikangjiesuo: false,
      bicijiesuo: false,
      wuxianjinbi: false,
      tafang: false
    };
    this.mp3 = {
      anniu: "mp3/anniu",
      bgm: "mp3/bgm",
      chaijianzhu: "mp3/chaijianzhu",
      daojishi: "mp3/daojishi",
      guigongji: "mp3/guigongji",
      guijinru: "mp3/guijinru",
      guikuangbao: "mp3/guikuangbao",
      guishengji: "mp3/guishengji",
      jianzaojianzhu: "mp3/jianzaojianzhu",
      jianzhushengji: "mp3/jianzhushengji",
      paotaiogngji: "mp3/paotaiogngji",
      weixiu: "mp3/weixiu",
      youjieshu: "mp3/youjieshu",
      youxikaishi_menu: "mp3/youxikaishi_menu"
    };
    this.dangqianNum_fuzhoufasheqi = 0;
    this.dangqianNum_nengliang = 0;
    this.dangqianNum_tikuanji = 0;
    this.dangqianNum_bingxiang = 0;
    this.dangqianNum_youbu = 0;
    this.dangqianNum_daoci = 0;
    this.dangqianNum_duantoutai = 0;
    this.dangqianNum_weixiutai = 0;
    this.dangqianNum_liaowangtai = 0;
    this.dangqianNum_lizijiasuqi = 0;
    this.dangqianNum_dianciquan = 0;
    this.dengluyouxi = true;
    this.wuxianjinbi = false;
    this.tafangGuihpMax = 0;
    this.scene = "Menu";
    this.guanggaocishu = 0;
    if (PlatformCode === PlatformList.游家) {
      this.gameName = ["4399玩家"];
    } else {
      this.gameName = ["云友灵", "雷平雅", "战涵柳", "僪白山", "淦怀思", "检尔真", "练怡乐", "隐含灵", "焉念露", "圣寄蕾", "菅皎洁", "源秀颖", "檀英豪", "席婉娜", "刑红叶", "恭雅柏", "沐问萍", "戢正德", "裘令秋", "马雅凡", "阳丽玉", "字运虹", "武才俊", "隽飞松", "苗听枫", "凭欣艳", "诗长旭", "抄秀敏", "水梦竹", "紫语梦", "书笑柳", "栗和正", "良新梅", "愈宛丝", "后芷珍", "翁丰熙", "尹桂帆", "幸瑛瑶", "理念蕾", "暴娜兰"];
    }
    this.GAME_TAG = "lingyixueyuan_qq_101";
    if (null == this.getObject("PlayerData" + this.GAME_TAG)) {
      this.PlayerDataSetObject();
    } else {
      this.PlayerData = this.getObject("PlayerData" + this.GAME_TAG);
    }
    cc.loader.loadRes("json/gamepeizhi", function (e, i) {
      this.gamepeizhiJson = i.json[1];
    }.bind(this));
  },
  getObject: function (e) {
    if (undefined == cc.sys.localStorage.getItem(e) || null == cc.sys.localStorage.getItem(e) || "" == cc.sys.localStorage.getItem(e)) {
      return null;
    } else {
      return JSON.parse(cc.sys.localStorage.getItem(e));
    }
  },
  PlayerDataSetObject: function () {
    this.setObject("PlayerData" + this.GAME_TAG, this.PlayerData);
  },
  setObject: function (e, i) {
    cc.sys.localStorage.setItem(e, JSON.stringify(i));
  }
};
window.MainDate.dengluyouxi = true;
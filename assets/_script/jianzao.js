cc.Class({
  extends: cc.Component,
  properties: {
    jichubut: cc.Node,
    zhuanqianbut: cc.Node,
    gaokejibut: cc.Node,
    heikejibut: cc.Node,
    juzigongfangbut: cc.Node,
    jichubut_dk: cc.Node,
    tianfubut_dk: cc.Node,
    gaokejibut_dk: cc.Node,
    jichu: cc.Node,
    zhuanqian: cc.Node,
    gaokeji: cc.Node,
    heikeji: cc.Node,
    juzigongfang: cc.Node,
    jichu_dk: cc.Node,
    tianfu_dk: cc.Node,
    gaokeji_dk: cc.Node,
    paotai: cc.Node,
    paotaijinbi: cc.Node,
    youxiji: cc.Node,
    youxijijinbi: cc.Node,
    weixiutai: cc.Node,
    weixiutaishandian: cc.Node,
    weixiutaiNum: cc.Node,
    kuang1jiage: cc.Node,
    kuang1shandian: cc.Node,
    kuang2jiage: cc.Node,
    kuang2shandian: cc.Node,
    kuang3jiage: cc.Node,
    kuang3shandian: cc.Node,
    kuang4jiage: cc.Node,
    kuang4shandian: cc.Node,
    kuang1miaoshu: cc.Node,
    kuang2miaoshu: cc.Node,
    kuang3miaoshu: cc.Node,
    kuang4miaoshu: cc.Node,
    fuzhoufasheqimiaoshu: cc.Node,
    nengliangzhaomiaoshu: cc.Node,
    tikuanjimiaoshu: cc.Node,
    bingxiangmiaoshu: cc.Node,
    fuzhoufasheqishandian: cc.Node,
    nengliangzhaoshandian: cc.Node,
    tikuanjishandian: cc.Node,
    bingxiangshandian: cc.Node,
    fuzhoufasheqishuliang: cc.Node,
    nengliangzhaoshuliang: cc.Node,
    tikuanjishuliang: cc.Node,
    bingxiangshuliang: cc.Node,
    youbumiaoshu: cc.Node,
    daocimiaoshu: cc.Node,
    duantoutaimiaoshu: cc.Node,
    youbushandian: cc.Node,
    daocishandian: cc.Node,
    duantoutaishandian: cc.Node,
    youbushuliang: cc.Node,
    daocishuliang: cc.Node,
    duantoutaishuliang: cc.Node,
    liaowangtaimiaoshu: cc.Node,
    lizijiasuqimiaoshu: cc.Node,
    dianciquanmiaoshu: cc.Node,
    liaowangtaijiage: cc.Node,
    lizijiasuqijiage: cc.Node,
    dianciquanjiage: cc.Node,
    liaowangtaishuliang: cc.Node,
    lizijiasuqishuliang: cc.Node,
    dianciquanshuliang: cc.Node,
    weixiutaishu: cc.Node,
    fuzhoufasheqishu: cc.Node,
    nenglkiangzhaoshu: cc.Node,
    tikuanjishu: cc.Node,
    bingxiangshu: cc.Node,
    youbushu: cc.Node,
    daocishu: cc.Node,
    duantoutaishu: cc.Node,
    liaowangtaishu: cc.Node,
    lizijiasuqishu: cc.Node,
    dianciquanshu: cc.Node,
    paotaiBut: cc.Node,
    youxijiBut: cc.Node,
    weixiutaiBut: cc.Node,
    tongkuangBut: cc.Node,
    yinkuangBut: cc.Node,
    jinkuangBut: cc.Node,
    zuanshikuangBut: cc.Node,
    fuzhoufasheqiBut: cc.Node,
    nengliangzhaoBut: cc.Node,
    tikuanjiBut: cc.Node,
    bingxiangBut: cc.Node,
    youbuBut: cc.Node,
    daociBut: cc.Node,
    duantoutaiBut: cc.Node,
    liaowangtaiBut: cc.Node,
    lizijiasuqiBut: cc.Node,
    dianciquanBut: cc.Node,
    tiemen1But: cc.Node,
    mentanchuang: cc.Node,
    weixiutaitanchuang: cc.Node,
    fuzhoufasheqitanchuang: cc.Node,
    nengliangzhaotanchuang: cc.Node,
    youbutanchuang: cc.Node,
    dianciquantanchuang: cc.Node,
    huise_SpriteFrame: {
      default: null,
      type: cc.SpriteFrame
    },
    minse_SpriteFrame: {
      default: null,
      type: cc.SpriteFrame
    },
    paotaiNum_dk: cc.Node,
    youxijiNum_dk: cc.Node,
    mengyanLvNum_dk: cc.Node,
    mengyan_gongji_Num_dk: cc.Node,
    mengyan_shengming_Num_dk: cc.Node,
    mengyan_gongsu_Num_dk: cc.Node,
    mengyan_yisu_Num_dk: cc.Node,
    weixiutaiNum_dk: cc.Node,
    bingxiangNum_dk: cc.Node,
    nengliangzhaoNum_dk: cc.Node,
    lizijiasuqiNum_dk: cc.Node,
    paotaijinbi_dk: cc.Node,
    youxijijinbi_dk: cc.Node,
    mengyanlvjinbi_dk: cc.Node,
    mengyan_gongji_jinbi_dk: cc.Node,
    mengyan_shengming_jinbi_dk: cc.Node,
    mengyan_gongsu_jinbi_dk: cc.Node,
    mengyan_yisu_jinbi_dk: cc.Node,
    paotaimiaoshu_dk: cc.Node,
    youxijimiaoshu_dk: cc.Node,
    mengyanlvmiaoshu_dk: cc.Node,
    mengyan_gongji_miaoshu_dk: cc.Node,
    mengyan_shengming_miaoshu_dk: cc.Node,
    mengyan_gongsu_miaoshu_dk: cc.Node,
    mengyan_yisu_miaoshu_dk: cc.Node,
    weixiutaimiaoshu_dk: cc.Node,
    bingxiangmiaoshu_dk: cc.Node,
    nengliangzhao_dk: cc.Node,
    lizijiasuqi_dk: cc.Node,
    paotai_but_dk: cc.Node,
    youxiji_but_dk: cc.Node,
    mengyanlvbut: cc.Node,
    mengyan_gongji_but_dk: cc.Node,
    mengyan_shengming_but_dk: cc.Node,
    mengyan_gongsu_but_dk: cc.Node,
    mengyan_yisu_but_dk: cc.Node,
    weixiutai_but_dk: cc.Node,
    bingxiang_but_dk: cc.Node,
    nengliangzhao_but_dk: cc.Node,
    lizijiasuqi_but_dk: cc.Node
  },
  onLoad: function () {
    this.butgametypevis();
    var e = "json/daoju";
    8 == MainDate.GameType && (e = "json/daojutafang");
    cc.loader.loadRes(e, function (e, i) {
      this.daoJuJson = i.json;
      cc.loader.loadRes("json/daojuduikang1", function (e, i) {
        this.daojuduikang1 = i.json;
        this.newjianzao();
      }.bind(this));
    }.bind(this));
    this.time = 0;
  },
  newjianzao: function () {
    if (this.paotai && this.paotai.getChildByName("miaoshu") && this.youxiji && this.youxiji.getChildByName("miaoshu") && this.weixiutai && this.weixiutai.getChildByName("miaoshu") && this.daoJuJson && this.daojuduikang1) {
      this.paotai.getChildByName("miaoshu").getComponent(cc.Label).string = this.daoJuJson[32].miaoshu;
      this.paotaijinbi.getComponent(cc.Label).string = this.daoJuJson[32].jiagejin;
      this.youxiji.getChildByName("miaoshu").getComponent(cc.Label).string = this.daoJuJson[22].miaoshu;
      this.youxijijinbi.getComponent(cc.Label).string = this.daoJuJson[22].jiagejin;
      this.weixiutai.getChildByName("miaoshu").getComponent(cc.Label).string = this.daoJuJson[52].miaoshu;
      this.weixiutaishandian.getComponent(cc.Label).string = this.daoJuJson[52].jiagedian;
      this.weixiutaiNum.getComponent(cc.Label).string = MainDate.PlayerData.weixiutai;
      this.kuang1jiage.getComponent(cc.Label).string = this.daoJuJson[56].shengchanjinbi;
      this.kuang2jiage.getComponent(cc.Label).string = this.daoJuJson[57].shengchanjinbi;
      this.kuang3jiage.getComponent(cc.Label).string = this.daoJuJson[58].shengchanjinbi;
      this.kuang4jiage.getComponent(cc.Label).string = this.daoJuJson[59].shengchanjinbi;
      this.kuang1miaoshu.getComponent(cc.Label).string = this.daoJuJson[56].miaoshu;
      this.kuang2miaoshu.getComponent(cc.Label).string = this.daoJuJson[57].miaoshu;
      this.kuang3miaoshu.getComponent(cc.Label).string = this.daoJuJson[58].miaoshu;
      this.kuang4miaoshu.getComponent(cc.Label).string = this.daoJuJson[59].miaoshu;
      this.kuang1shandian.getComponent(cc.Label).string = this.daoJuJson[56].jiagedian;
      this.kuang2shandian.getComponent(cc.Label).string = this.daoJuJson[57].jiagedian;
      this.kuang3shandian.getComponent(cc.Label).string = this.daoJuJson[58].jiagedian;
      this.kuang4shandian.getComponent(cc.Label).string = this.daoJuJson[59].jiagedian;
      this.fuzhoufasheqimiaoshu.getComponent(cc.Label).string = this.daoJuJson[45].miaoshu;
      this.nengliangzhaomiaoshu.getComponent(cc.Label).string = this.daoJuJson[46].miaoshu;
      this.tikuanjimiaoshu.getComponent(cc.Label).string = this.daoJuJson[47].miaoshu;
      this.bingxiangmiaoshu.getComponent(cc.Label).string = this.daoJuJson[48].miaoshu;
      this.fuzhoufasheqishandian.getComponent(cc.Label).string = this.daoJuJson[45].jiagedian;
      this.nengliangzhaoshandian.getComponent(cc.Label).string = this.daoJuJson[46].jiagedian;
      this.tikuanjishandian.getComponent(cc.Label).string = this.daoJuJson[47].jiagedian;
      this.bingxiangshandian.getComponent(cc.Label).string = this.daoJuJson[48].jiagedian;
      this.fuzhoufasheqishuliang.getComponent(cc.Label).string = MainDate.PlayerData.fuzhoufasheqi;
      this.nengliangzhaoshuliang.getComponent(cc.Label).string = MainDate.PlayerData.nengliang;
      this.tikuanjishuliang.getComponent(cc.Label).string = MainDate.PlayerData.tikuanji;
      this.bingxiangshuliang.getComponent(cc.Label).string = MainDate.PlayerData.bingxiang;
      this.youbumiaoshu.getComponent(cc.Label).string = this.daoJuJson[49].miaoshu;
      this.daocimiaoshu.getComponent(cc.Label).string = this.daoJuJson[50].miaoshu;
      this.duantoutaimiaoshu.getComponent(cc.Label).string = this.daoJuJson[51].miaoshu;
      this.youbushandian.getComponent(cc.Label).string = this.daoJuJson[49].jiagedian;
      this.daocishandian.getComponent(cc.Label).string = this.daoJuJson[50].jiagedian;
      this.duantoutaishandian.getComponent(cc.Label).string = this.daoJuJson[51].jiagedian;
      this.youbushuliang.getComponent(cc.Label).string = MainDate.PlayerData.youbu;
      this.daocishuliang.getComponent(cc.Label).string = MainDate.PlayerData.daoci;
      this.duantoutaishuliang.getComponent(cc.Label).string = MainDate.PlayerData.duantoutai;
      this.liaowangtaimiaoshu.getComponent(cc.Label).string = this.daoJuJson[53].miaoshu;
      this.lizijiasuqimiaoshu.getComponent(cc.Label).string = this.daoJuJson[54].miaoshu;
      this.dianciquanmiaoshu.getComponent(cc.Label).string = this.daoJuJson[55].miaoshu;
      this.liaowangtaijiage.getComponent(cc.Label).string = this.daoJuJson[53].jiagedian;
      this.lizijiasuqijiage.getComponent(cc.Label).string = this.daoJuJson[54].jiagedian;
      this.dianciquanjiage.getComponent(cc.Label).string = this.daoJuJson[55].jiagedian;
      this.liaowangtaishuliang.getComponent(cc.Label).string = MainDate.PlayerData.liaowangtai;
      this.lizijiasuqishuliang.getComponent(cc.Label).string = MainDate.PlayerData.lizijiasuqi;
      this.dianciquanshuliang.getComponent(cc.Label).string = MainDate.PlayerData.dianciquan;
      this.weixiutaishu.getComponent(cc.Label).string = MainDate.dangqianNum_weixiutai + "/4";
      this.fuzhoufasheqishu.getComponent(cc.Label).string = MainDate.dangqianNum_fuzhoufasheqi + "/1";
      this.nenglkiangzhaoshu.getComponent(cc.Label).string = MainDate.dangqianNum_nengliang + "/1";
      this.tikuanjishu.getComponent(cc.Label).string = MainDate.dangqianNum_tikuanji + "/1";
      this.bingxiangshu.getComponent(cc.Label).string = MainDate.dangqianNum_bingxiang + "/1";
      this.youbushu.getComponent(cc.Label).string = MainDate.dangqianNum_youbu + "/1";
      this.daocishu.getComponent(cc.Label).string = MainDate.dangqianNum_daoci + "/1";
      this.duantoutaishu.getComponent(cc.Label).string = MainDate.dangqianNum_duantoutai + "/1";
      this.liaowangtaishu.getComponent(cc.Label).string = MainDate.dangqianNum_liaowangtai + "/1";
      this.lizijiasuqishu.getComponent(cc.Label).string = MainDate.dangqianNum_lizijiasuqi + "/1";
      this.dianciquanshu.getComponent(cc.Label).string = MainDate.dangqianNum_dianciquan + "/1";
      this.youxijiNum_dk.getComponent(cc.Label).string = Player.youxijiNum + "/1";
      this.mengyanLvNum_dk.getComponent(cc.Label).string = Player.liemengzheNum + "/1";
      this.mengyan_gongji_Num_dk.getComponent(cc.Label).string = Player.mengyan_gongjiNum + "/1";
      this.mengyan_shengming_Num_dk.getComponent(cc.Label).string = Player.mengyan_shengmingNum + "/1";
      this.mengyan_gongsu_Num_dk.getComponent(cc.Label).string = Player.mengyan_gongsuNum + "/1";
      this.mengyan_yisu_Num_dk.getComponent(cc.Label).string = Player.mengyan_yisuNum + "/1";
      this.weixiutaiNum_dk.getComponent(cc.Label).string = Player.weixiutaiNum + "/4";
      this.bingxiangNum_dk.getComponent(cc.Label).string = Player.bingxiangNum + "/1";
      this.nengliangzhaoNum_dk.getComponent(cc.Label).string = Player.nengliangzhaoNum + "/1";
      this.lizijiasuqiNum_dk.getComponent(cc.Label).string = Player.dianciquanNum + "/1";
      this.paotaiNum_dk.getComponent(cc.Label).string = Player.paotaiNum + "/4";
      this.paotaijinbi_dk.getComponent(cc.Label).string = this.daojuduikang1[1].jiagejin;
      this.youxijijinbi_dk.getComponent(cc.Label).string = this.daojuduikang1[14].jiagejin;
      this.mengyanlvjinbi_dk.getComponent(cc.Label).string = this.daojuduikang1[24].jiagejin;
      this.mengyan_gongji_jinbi_dk.getComponent(cc.Label).string = this.daojuduikang1[36].jiagejin;
      this.mengyan_shengming_jinbi_dk.getComponent(cc.Label).string = this.daojuduikang1[46].jiagejin;
      this.mengyan_gongsu_jinbi_dk.getComponent(cc.Label).string = this.daojuduikang1[56].jiagejin;
      this.mengyan_yisu_jinbi_dk.getComponent(cc.Label).string = this.daojuduikang1[61].jiagejin;
      this.paotaimiaoshu_dk.getComponent(cc.Label).string = this.daojuduikang1[1].miaoshu;
      this.youxijimiaoshu_dk.getComponent(cc.Label).string = this.daojuduikang1[14].miaoshu;
      this.mengyanlvmiaoshu_dk.getComponent(cc.Label).string = this.daojuduikang1[24].miaoshu;
      this.mengyan_gongji_miaoshu_dk.getComponent(cc.Label).string = this.daojuduikang1[36].miaoshu;
      this.mengyan_shengming_miaoshu_dk.getComponent(cc.Label).string = this.daojuduikang1[46].miaoshu;
      this.mengyan_gongsu_miaoshu_dk.getComponent(cc.Label).string = this.daojuduikang1[56].miaoshu;
      this.mengyan_yisu_miaoshu_dk.getComponent(cc.Label).string = this.daojuduikang1[61].miaoshu;
      this.weixiutaimiaoshu_dk.getComponent(cc.Label).string = this.daoJuJson[52].miaoshu;
      this.nengliangzhao_dk.getComponent(cc.Label).string = this.daoJuJson[46].miaoshu;
      this.lizijiasuqi_dk.getComponent(cc.Label).string = this.daoJuJson[54].miaoshu;
      this.bingxiangmiaoshu_dk.getComponent(cc.Label).string = this.daoJuJson[48].miaoshu;
    }
  },
  anniu_huanpifu: function () {
    if (Game.daoJuJson[32].jiagedian > Player.shandianArr || Game.daoJuJson[32].jiagejin > Player.jinbiArr) {
      this.paotaiBut.getComponent(cc.Sprite).spriteFrame == this.minse_SpriteFrame && (this.paotaiBut.getComponent(cc.Sprite).spriteFrame = this.huise_SpriteFrame);
    } else {
      this.paotaiBut.getComponent(cc.Sprite).spriteFrame == this.huise_SpriteFrame && (this.paotaiBut.getComponent(cc.Sprite).spriteFrame = this.minse_SpriteFrame);
    }
    if (Game.daoJuJson[22].jiagedian > Player.shandianArr || Game.daoJuJson[22].jiagejin > Player.jinbiArr) {
      this.youxijiBut.getComponent(cc.Sprite).spriteFrame == this.minse_SpriteFrame && (this.youxijiBut.getComponent(cc.Sprite).spriteFrame = this.huise_SpriteFrame);
    } else {
      this.youxijiBut.getComponent(cc.Sprite).spriteFrame == this.huise_SpriteFrame && (this.youxijiBut.getComponent(cc.Sprite).spriteFrame = this.minse_SpriteFrame);
    }
    if (Game.daoJuJson[52].jiagedian > Player.shandianArr || Game.daoJuJson[52].jiagejin > Player.jinbiArr || MainDate.PlayerData.weixiutai <= 0 || MainDate.dangqianNum_weixiutai >= 4) {
      this.weixiutaiBut.getComponent(cc.Sprite).spriteFrame == this.minse_SpriteFrame && (this.weixiutaiBut.getComponent(cc.Sprite).spriteFrame = this.huise_SpriteFrame);
    } else {
      this.weixiutaiBut.getComponent(cc.Sprite).spriteFrame == this.huise_SpriteFrame && (this.weixiutaiBut.getComponent(cc.Sprite).spriteFrame = this.minse_SpriteFrame);
    }
    if (Game.daoJuJson[56].jiagedian > Player.shandianArr || Game.daoJuJson[56].jiagejin > Player.jinbiArr) {
      this.tongkuangBut.getComponent(cc.Sprite).spriteFrame == this.minse_SpriteFrame && (this.tongkuangBut.getComponent(cc.Sprite).spriteFrame = this.huise_SpriteFrame);
    } else {
      this.tongkuangBut.getComponent(cc.Sprite).spriteFrame == this.huise_SpriteFrame && (this.tongkuangBut.getComponent(cc.Sprite).spriteFrame = this.minse_SpriteFrame);
    }
    if (Game.daoJuJson[57].jiagedian > Player.shandianArr || Game.daoJuJson[57].jiagejin > Player.jinbiArr) {
      this.yinkuangBut.getComponent(cc.Sprite).spriteFrame == this.minse_SpriteFrame && (this.yinkuangBut.getComponent(cc.Sprite).spriteFrame = this.huise_SpriteFrame);
    } else {
      this.yinkuangBut.getComponent(cc.Sprite).spriteFrame == this.huise_SpriteFrame && (this.yinkuangBut.getComponent(cc.Sprite).spriteFrame = this.minse_SpriteFrame);
    }
    if (Game.daoJuJson[58].jiagedian > Player.shandianArr || Game.daoJuJson[58].jiagejin > Player.jinbiArr) {
      this.jinkuangBut.getComponent(cc.Sprite).spriteFrame == this.minse_SpriteFrame && (this.jinkuangBut.getComponent(cc.Sprite).spriteFrame = this.huise_SpriteFrame);
    } else {
      this.jinkuangBut.getComponent(cc.Sprite).spriteFrame == this.huise_SpriteFrame && (this.jinkuangBut.getComponent(cc.Sprite).spriteFrame = this.minse_SpriteFrame);
    }
    if (Game.daoJuJson[59].jiagedian > Player.shandianArr || Game.daoJuJson[59].jiagejin > Player.jinbiArr) {
      this.zuanshikuangBut.getComponent(cc.Sprite).spriteFrame == this.minse_SpriteFrame && (this.zuanshikuangBut.getComponent(cc.Sprite).spriteFrame = this.huise_SpriteFrame);
    } else {
      this.zuanshikuangBut.getComponent(cc.Sprite).spriteFrame == this.huise_SpriteFrame && (this.zuanshikuangBut.getComponent(cc.Sprite).spriteFrame = this.minse_SpriteFrame);
    }
    if (Game.daoJuJson[45].jiagedian > Player.shandianArr || Game.daoJuJson[45].jiagejin > Player.jinbiArr || MainDate.PlayerData.fuzhoufasheqi <= 0 || MainDate.dangqianNum_fuzhoufasheqi >= 1) {
      this.fuzhoufasheqiBut.getComponent(cc.Sprite).spriteFrame == this.minse_SpriteFrame && (this.fuzhoufasheqiBut.getComponent(cc.Sprite).spriteFrame = this.huise_SpriteFrame);
    } else {
      this.fuzhoufasheqiBut.getComponent(cc.Sprite).spriteFrame == this.huise_SpriteFrame && (this.fuzhoufasheqiBut.getComponent(cc.Sprite).spriteFrame = this.minse_SpriteFrame);
    }
    if (Game.daoJuJson[46].jiagedian > Player.shandianArr || Game.daoJuJson[46].jiagejin > Player.jinbiArr || MainDate.PlayerData.nengliang <= 0 || MainDate.dangqianNum_nengliang >= 1) {
      this.nengliangzhaoBut.getComponent(cc.Sprite).spriteFrame == this.minse_SpriteFrame && (this.nengliangzhaoBut.getComponent(cc.Sprite).spriteFrame = this.huise_SpriteFrame);
    } else {
      this.nengliangzhaoBut.getComponent(cc.Sprite).spriteFrame == this.huise_SpriteFrame && (this.nengliangzhaoBut.getComponent(cc.Sprite).spriteFrame = this.minse_SpriteFrame);
    }
    if (Game.daoJuJson[47].jiagedian > Player.shandianArr || Game.daoJuJson[47].jiagejin > Player.jinbiArr || MainDate.PlayerData.tikuanji <= 0 || MainDate.dangqianNum_tikuanji >= 1) {
      this.tikuanjiBut.getComponent(cc.Sprite).spriteFrame == this.minse_SpriteFrame && (this.tikuanjiBut.getComponent(cc.Sprite).spriteFrame = this.huise_SpriteFrame);
    } else {
      this.tikuanjiBut.getComponent(cc.Sprite).spriteFrame == this.huise_SpriteFrame && (this.tikuanjiBut.getComponent(cc.Sprite).spriteFrame = this.minse_SpriteFrame);
    }
    if (Game.daoJuJson[48].jiagedian > Player.shandianArr || Game.daoJuJson[48].jiagejin > Player.jinbiArr || MainDate.PlayerData.bingxiang <= 0 || MainDate.dangqianNum_bingxiang >= 1) {
      this.bingxiangBut.getComponent(cc.Sprite).spriteFrame == this.minse_SpriteFrame && (this.bingxiangBut.getComponent(cc.Sprite).spriteFrame = this.huise_SpriteFrame);
    } else {
      this.bingxiangBut.getComponent(cc.Sprite).spriteFrame == this.huise_SpriteFrame && (this.bingxiangBut.getComponent(cc.Sprite).spriteFrame = this.minse_SpriteFrame);
    }
    if (Game.daoJuJson[49].jiagedian > Player.shandianArr || Game.daoJuJson[49].jiagejin > Player.jinbiArr || MainDate.PlayerData.youbu <= 0 || MainDate.dangqianNum_youbu >= 1) {
      this.youbuBut.getComponent(cc.Sprite).spriteFrame == this.minse_SpriteFrame && (this.youbuBut.getComponent(cc.Sprite).spriteFrame = this.huise_SpriteFrame);
    } else {
      this.youbuBut.getComponent(cc.Sprite).spriteFrame == this.huise_SpriteFrame && (this.youbuBut.getComponent(cc.Sprite).spriteFrame = this.minse_SpriteFrame);
    }
    if (Game.daoJuJson[50].jiagedian > Player.shandianArr || Game.daoJuJson[50].jiagejin > Player.jinbiArr || MainDate.PlayerData.daoci <= 0 || MainDate.dangqianNum_daoci >= 1) {
      this.daociBut.getComponent(cc.Sprite).spriteFrame == this.minse_SpriteFrame && (this.daociBut.getComponent(cc.Sprite).spriteFrame = this.huise_SpriteFrame);
    } else {
      this.daociBut.getComponent(cc.Sprite).spriteFrame == this.huise_SpriteFrame && (this.daociBut.getComponent(cc.Sprite).spriteFrame = this.minse_SpriteFrame);
    }
    if (Game.daoJuJson[51].jiagedian > Player.shandianArr || Game.daoJuJson[51].jiagejin > Player.jinbiArr || MainDate.PlayerData.duantoutai <= 0 || MainDate.dangqianNum_duantoutai >= 1) {
      this.duantoutaiBut.getComponent(cc.Sprite).spriteFrame == this.minse_SpriteFrame && (this.duantoutaiBut.getComponent(cc.Sprite).spriteFrame = this.huise_SpriteFrame);
    } else {
      this.duantoutaiBut.getComponent(cc.Sprite).spriteFrame == this.huise_SpriteFrame && (this.duantoutaiBut.getComponent(cc.Sprite).spriteFrame = this.minse_SpriteFrame);
    }
    if (Game.daoJuJson[53].jiagedian > Player.shandianArr || Game.daoJuJson[53].jiagejin > Player.jinbiArr || MainDate.PlayerData.liaowangtai <= 0 || MainDate.dangqianNum_liaowangtai >= 1) {
      this.liaowangtaiBut.getComponent(cc.Sprite).spriteFrame == this.minse_SpriteFrame && (this.liaowangtaiBut.getComponent(cc.Sprite).spriteFrame = this.huise_SpriteFrame);
    } else {
      this.liaowangtaiBut.getComponent(cc.Sprite).spriteFrame == this.huise_SpriteFrame && (this.liaowangtaiBut.getComponent(cc.Sprite).spriteFrame = this.minse_SpriteFrame);
    }
    if (Game.daoJuJson[54].jiagedian > Player.shandianArr || Game.daoJuJson[54].jiagejin > Player.jinbiArr || MainDate.PlayerData.lizijiasuqi <= 0 || MainDate.dangqianNum_lizijiasuqi >= 1) {
      this.lizijiasuqiBut.getComponent(cc.Sprite).spriteFrame == this.minse_SpriteFrame && (this.lizijiasuqiBut.getComponent(cc.Sprite).spriteFrame = this.huise_SpriteFrame);
    } else {
      this.lizijiasuqiBut.getComponent(cc.Sprite).spriteFrame == this.huise_SpriteFrame && (this.lizijiasuqiBut.getComponent(cc.Sprite).spriteFrame = this.minse_SpriteFrame);
    }
    if (Game.daoJuJson[55].jiagedian > Player.shandianArr || Game.daoJuJson[55].jiagejin > Player.jinbiArr || MainDate.PlayerData.dianciquan <= 0 || MainDate.dangqianNum_dianciquan >= 1) {
      this.dianciquanBut.getComponent(cc.Sprite).spriteFrame == this.minse_SpriteFrame && (this.dianciquanBut.getComponent(cc.Sprite).spriteFrame = this.huise_SpriteFrame);
    } else {
      this.dianciquanBut.getComponent(cc.Sprite).spriteFrame == this.huise_SpriteFrame && (this.dianciquanBut.getComponent(cc.Sprite).spriteFrame = this.minse_SpriteFrame);
    }
    if (3 > Player.jinbiArr) {
      this.tiemen1But.getComponent(cc.Sprite).spriteFrame == this.minse_SpriteFrame && (this.tiemen1But.getComponent(cc.Sprite).spriteFrame = this.huise_SpriteFrame);
    } else {
      this.tiemen1But.getComponent(cc.Sprite).spriteFrame == this.huise_SpriteFrame && (this.tiemen1But.getComponent(cc.Sprite).spriteFrame = this.minse_SpriteFrame);
    }
    if (Player.dianciquanNum > 0) {
      this.lizijiasuqi_but_dk.getComponent(cc.Sprite).spriteFrame == this.minse_SpriteFrame && (this.lizijiasuqi_but_dk.getComponent(cc.Sprite).spriteFrame = this.huise_SpriteFrame);
    } else {
      this.lizijiasuqi_but_dk.getComponent(cc.Sprite).spriteFrame == this.huise_SpriteFrame && (this.lizijiasuqi_but_dk.getComponent(cc.Sprite).spriteFrame = this.minse_SpriteFrame);
    }
    if (Player.nengliangzhaoNum > 0) {
      this.nengliangzhao_but_dk.getComponent(cc.Sprite).spriteFrame == this.minse_SpriteFrame && (this.nengliangzhao_but_dk.getComponent(cc.Sprite).spriteFrame = this.huise_SpriteFrame);
    } else {
      this.nengliangzhao_but_dk.getComponent(cc.Sprite).spriteFrame == this.huise_SpriteFrame && (this.nengliangzhao_but_dk.getComponent(cc.Sprite).spriteFrame = this.minse_SpriteFrame);
    }
    if (Player.weixiutaiNum >= 4) {
      this.weixiutai_but_dk.getComponent(cc.Sprite).spriteFrame == this.minse_SpriteFrame && (this.weixiutai_but_dk.getComponent(cc.Sprite).spriteFrame = this.huise_SpriteFrame);
    } else {
      this.weixiutai_but_dk.getComponent(cc.Sprite).spriteFrame == this.huise_SpriteFrame && (this.weixiutai_but_dk.getComponent(cc.Sprite).spriteFrame = this.minse_SpriteFrame);
    }
    if (Player.bingxiangNum > 0) {
      this.bingxiang_but_dk.getComponent(cc.Sprite).spriteFrame == this.minse_SpriteFrame && (this.bingxiang_but_dk.getComponent(cc.Sprite).spriteFrame = this.huise_SpriteFrame);
    } else {
      this.bingxiang_but_dk.getComponent(cc.Sprite).spriteFrame == this.huise_SpriteFrame && (this.bingxiang_but_dk.getComponent(cc.Sprite).spriteFrame = this.minse_SpriteFrame);
    }
    if (Player.mengyan_yisuNum > 0 || this.daojuduikang1[61].jiagejin > Player.jinbiArr) {
      this.mengyan_yisu_but_dk.getComponent(cc.Sprite).spriteFrame == this.minse_SpriteFrame && (this.mengyan_yisu_but_dk.getComponent(cc.Sprite).spriteFrame = this.huise_SpriteFrame);
    } else {
      this.mengyan_yisu_but_dk.getComponent(cc.Sprite).spriteFrame == this.huise_SpriteFrame && (this.mengyan_yisu_but_dk.getComponent(cc.Sprite).spriteFrame = this.minse_SpriteFrame);
    }
    if (Player.mengyan_gongsuNum > 0 || this.daojuduikang1[56].jiagejin > Player.jinbiArr) {
      this.mengyan_gongsu_but_dk.getComponent(cc.Sprite).spriteFrame == this.minse_SpriteFrame && (this.mengyan_gongsu_but_dk.getComponent(cc.Sprite).spriteFrame = this.huise_SpriteFrame);
    } else {
      this.mengyan_gongsu_but_dk.getComponent(cc.Sprite).spriteFrame == this.huise_SpriteFrame && (this.mengyan_gongsu_but_dk.getComponent(cc.Sprite).spriteFrame = this.minse_SpriteFrame);
    }
    if (Player.mengyan_shengmingNum > 0 || this.daojuduikang1[46].jiagejin > Player.jinbiArr) {
      this.mengyan_shengming_but_dk.getComponent(cc.Sprite).spriteFrame == this.minse_SpriteFrame && (this.mengyan_shengming_but_dk.getComponent(cc.Sprite).spriteFrame = this.huise_SpriteFrame);
    } else {
      this.mengyan_shengming_but_dk.getComponent(cc.Sprite).spriteFrame == this.huise_SpriteFrame && (this.mengyan_shengming_but_dk.getComponent(cc.Sprite).spriteFrame = this.minse_SpriteFrame);
    }
    if (Player.mengyan_gongjiNum > 0 || this.daojuduikang1[36].jiagejin > Player.jinbiArr) {
      this.mengyan_gongji_but_dk.getComponent(cc.Sprite).spriteFrame == this.minse_SpriteFrame && (this.mengyan_gongji_but_dk.getComponent(cc.Sprite).spriteFrame = this.huise_SpriteFrame);
    } else {
      this.mengyan_gongji_but_dk.getComponent(cc.Sprite).spriteFrame == this.huise_SpriteFrame && (this.mengyan_gongji_but_dk.getComponent(cc.Sprite).spriteFrame = this.minse_SpriteFrame);
    }
    if (Player.liemengzheNum > 0 || this.daojuduikang1[24].jiagejin > Player.jinbiArr) {
      this.mengyanlvbut.getComponent(cc.Sprite).spriteFrame == this.minse_SpriteFrame && (this.mengyanlvbut.getComponent(cc.Sprite).spriteFrame = this.huise_SpriteFrame);
    } else {
      this.mengyanlvbut.getComponent(cc.Sprite).spriteFrame == this.huise_SpriteFrame && (this.mengyanlvbut.getComponent(cc.Sprite).spriteFrame = this.minse_SpriteFrame);
    }
    if (Player.youxijiNum > 0 || this.daojuduikang1[14].jiagejin > Player.jinbiArr) {
      this.youxiji_but_dk.getComponent(cc.Sprite).spriteFrame == this.minse_SpriteFrame && (this.youxiji_but_dk.getComponent(cc.Sprite).spriteFrame = this.huise_SpriteFrame);
    } else {
      this.youxiji_but_dk.getComponent(cc.Sprite).spriteFrame == this.huise_SpriteFrame && (this.youxiji_but_dk.getComponent(cc.Sprite).spriteFrame = this.minse_SpriteFrame);
    }
    if (Player.paotaiNum >= 4 || this.daojuduikang1[1].jiagejin > Player.jinbiArr) {
      this.paotai_but_dk.getComponent(cc.Sprite).spriteFrame == this.minse_SpriteFrame && (this.paotai_but_dk.getComponent(cc.Sprite).spriteFrame = this.huise_SpriteFrame);
    } else {
      this.paotai_but_dk.getComponent(cc.Sprite).spriteFrame == this.huise_SpriteFrame && (this.paotai_but_dk.getComponent(cc.Sprite).spriteFrame = this.minse_SpriteFrame);
    }
  },
  but_paotai: function () {
    music.api_audioPlay(MainDate.mp3.jianzaojianzhu);
    if (Game.daoJuJson[32].jiagedian > Player.shandianArr) {
      Game.fangzhitanchuang("闪电不够");
    } else {
      Game.daoJuJson[32].jiagejin > Player.jinbiArr && Game.fangzhitanchuang("金币不够");
    }
    if (!(Game.daoJuJson[32].jiagedian > Player.shandianArr || Game.daoJuJson[32].jiagejin > Player.jinbiArr)) {
      Player.shandianArr -= Game.daoJuJson[32].jiagedian;
      Player.jinbiArr -= Game.daoJuJson[32].jiagejin;
      Game.jinbiNum.getComponent(cc.Label).string = Player.jinbiArr;
      Game.shandianNum.getComponent(cc.Label).string = Player.shandianArr;
      Player.shengjijiantou_tishi();
      Player.fk_fangzhitishi(Game.xuanzhongFK, false);
      cocoscreator.api_showTip("prefab/game/paotai", function (e) {
        var i = cc.instantiate(e);
        i.x = Game.xuanzhongFK.x;
        i.y = Game.xuanzhongFK.y;
        i.zuobiaoPos = {
          x: Game.xuanzhongFK.dimianxuhao % 50,
          y: 50 - Math.floor(Game.xuanzhongFK.dimianxuhao / 50) - 1
        };
        Game.props.addChild(i);
        i.posFK = Game.xuanzhongFK;
        i.bianzu = Player.bianzu;
        Game.shengji_Arr.push(i);
      }.bind(this));
      this.node.destroy();
    }
  },
  but_youxiji: function () {
    music.api_audioPlay(MainDate.mp3.jianzaojianzhu);
    if (Game.daoJuJson[22].jiagedian > Player.shandianArr) {
      Game.fangzhitanchuang("闪电不够");
    } else {
      Game.daoJuJson[22].jiagejin > Player.jinbiArr && Game.fangzhitanchuang("金币不够");
    }
    if (!(Game.daoJuJson[22].jiagedian > Player.shandianArr || Game.daoJuJson[22].jiagejin > Player.jinbiArr)) {
      Player.shandianArr -= Game.daoJuJson[22].jiagedian;
      Player.jinbiArr -= Game.daoJuJson[22].jiagejin;
      Game.jinbiNum.getComponent(cc.Label).string = Player.jinbiArr;
      Game.shandianNum.getComponent(cc.Label).string = Player.shandianArr;
      Player.shengjijiantou_tishi();
      Player.fk_fangzhitishi(Game.xuanzhongFK, false);
      cocoscreator.api_showTip("prefab/game/youxiji", function (e) {
        var i = cc.instantiate(e);
        i.x = Game.xuanzhongFK.x;
        i.y = Game.xuanzhongFK.y;
        Game.props.addChild(i);
        i.posFK = Game.xuanzhongFK;
        i.bianzu = Player.bianzu;
        Game.shengji_Arr.push(i);
      }.bind(this));
      this.node.destroy();
    }
  },
  but_weixiutai: function () {
    music.api_audioPlay(MainDate.mp3.jianzaojianzhu);
    if (Game.daoJuJson[52].jiagedian > Player.shandianArr) {
      Game.fangzhitanchuang("闪电不够");
    } else if (Game.daoJuJson[52].jiagejin > Player.jinbiArr) {
      Game.fangzhitanchuang("金币不够");
    } else {
      MainDate.dangqianNum_weixiutai >= 4 && Game.fangzhitanchuang("无法建造更更多");
    }
    if (!(Game.daoJuJson[52].jiagedian > Player.shandianArr || Game.daoJuJson[52].jiagejin > Player.jinbiArr || MainDate.PlayerData.weixiutai <= 0 || MainDate.dangqianNum_weixiutai >= 4)) {
      Player.shandianArr -= Game.daoJuJson[52].jiagedian;
      Player.jinbiArr -= Game.daoJuJson[52].jiagejin;
      Game.jinbiNum.getComponent(cc.Label).string = Player.jinbiArr;
      Game.shandianNum.getComponent(cc.Label).string = Player.shandianArr;
      MainDate.PlayerData.weixiutai--;
      MainDate.PlayerDataSetObject();
      MainDate.dangqianNum_weixiutai++;
      Player.shengjijiantou_tishi();
      Player.fk_fangzhitishi(Game.xuanzhongFK, false);
      cocoscreator.api_showTip("prefab/game/weixiutai", function (e) {
        var i = cc.instantiate(e);
        i.x = Game.xuanzhongFK.x;
        i.y = Game.xuanzhongFK.y;
        Game.props.addChild(i);
        i.posFK = Game.xuanzhongFK;
        i.bianzu = Player.bianzu;
      }.bind(this));
      this.node.destroy();
    }
  },
  but_tongkuang1: function () {
    music.api_audioPlay(MainDate.mp3.jianzaojianzhu);
    if (Game.daoJuJson[56].jiagedian > Player.shandianArr) {
      Game.fangzhitanchuang("闪电不够");
    } else {
      Game.daoJuJson[56].jiagejin > Player.jinbiArr && Game.fangzhitanchuang("金币不够");
    }
    if (!(Game.daoJuJson[56].jiagedian > Player.shandianArr || Game.daoJuJson[56].jiagejin > Player.jinbiArr)) {
      Player.shandianArr -= Game.daoJuJson[56].jiagedian;
      Player.jinbiArr -= Game.daoJuJson[56].jiagejin;
      Game.jinbiNum.getComponent(cc.Label).string = Player.jinbiArr;
      Game.shandianNum.getComponent(cc.Label).string = Player.shandianArr;
      Player.shengjijiantou_tishi();
      Player.fk_fangzhitishi(Game.xuanzhongFK, false);
      cocoscreator.api_showTip("prefab/game/kuang", function (e) {
        var i = cc.instantiate(e);
        i.x = Game.xuanzhongFK.x;
        i.y = Game.xuanzhongFK.y;
        i.posFK = Game.xuanzhongFK;
        Game.props.addChild(i);
        cc.loader.loadRes("image/game/jianzao/kuang/kuang1", cc.SpriteFrame, function (e, a) {
          i && i.isValid && (i.getChildByName("kuang").getComponent(cc.Sprite).spriteFrame = a);
        });
        i.getComponent("kuang").kuangdengji = 1;
        i.bianzu = Player.bianzu;
        Game.shengji_Arr.push(i);
      }.bind(this));
      this.node.destroy();
    }
  },
  but_yinkuang2: function () {
    music.api_audioPlay(MainDate.mp3.jianzaojianzhu);
    if (Game.daoJuJson[57].jiagedian > Player.shandianArr) {
      Game.fangzhitanchuang("闪电不够");
    } else {
      Game.daoJuJson[57].jiagejin > Player.jinbiArr && Game.fangzhitanchuang("金币不够");
    }
    if (!(Game.daoJuJson[57].jiagedian > Player.shandianArr || Game.daoJuJson[57].jiagejin > Player.jinbiArr)) {
      Player.shandianArr -= Game.daoJuJson[57].jiagedian;
      Player.jinbiArr -= Game.daoJuJson[57].jiagejin;
      Game.jinbiNum.getComponent(cc.Label).string = Player.jinbiArr;
      Game.shandianNum.getComponent(cc.Label).string = Player.shandianArr;
      Player.shengjijiantou_tishi();
      Player.fk_fangzhitishi(Game.xuanzhongFK, false);
      cocoscreator.api_showTip("prefab/game/kuang", function (e) {
        var i = cc.instantiate(e);
        i.x = Game.xuanzhongFK.x;
        i.y = Game.xuanzhongFK.y;
        i.posFK = Game.xuanzhongFK;
        Game.props.addChild(i);
        cc.loader.loadRes("image/game/jianzao/kuang/kuang2", cc.SpriteFrame, function (e, a) {
          i && i.isValid && (i.getChildByName("kuang").getComponent(cc.Sprite).spriteFrame = a);
        });
        i.getComponent("kuang").kuangdengji = 2;
        i.bianzu = Player.bianzu;
        Game.shengji_Arr.push(i);
      }.bind(this));
      this.node.destroy();
    }
  },
  but_jinkuang3: function () {
    music.api_audioPlay(MainDate.mp3.jianzaojianzhu);
    if (Game.daoJuJson[58].jiagedian > Player.shandianArr) {
      Game.fangzhitanchuang("闪电不够");
    } else {
      Game.daoJuJson[58].jiagejin > Player.jinbiArr && Game.fangzhitanchuang("金币不够");
    }
    if (!(Game.daoJuJson[58].jiagedian > Player.shandianArr || Game.daoJuJson[58].jiagejin > Player.jinbiArr)) {
      Player.shandianArr -= Game.daoJuJson[58].jiagedian;
      Player.jinbiArr -= Game.daoJuJson[58].jiagejin;
      Game.jinbiNum.getComponent(cc.Label).string = Player.jinbiArr;
      Game.shandianNum.getComponent(cc.Label).string = Player.shandianArr;
      Player.shengjijiantou_tishi();
      Player.fk_fangzhitishi(Game.xuanzhongFK, false);
      cocoscreator.api_showTip("prefab/game/kuang", function (e) {
        var i = cc.instantiate(e);
        i.x = Game.xuanzhongFK.x;
        i.y = Game.xuanzhongFK.y;
        i.posFK = Game.xuanzhongFK;
        Game.props.addChild(i);
        cc.loader.loadRes("image/game/jianzao/kuang/kuang3", cc.SpriteFrame, function (e, a) {
          i && i.isValid && (i.getChildByName("kuang").getComponent(cc.Sprite).spriteFrame = a);
        });
        i.getComponent("kuang").kuangdengji = 3;
        i.bianzu = Player.bianzu;
        Game.shengji_Arr.push(i);
      }.bind(this));
      this.node.destroy();
    }
  },
  but_zuanshikuang4: function () {
    music.api_audioPlay(MainDate.mp3.jianzaojianzhu);
    if (Game.daoJuJson[59].jiagedian > Player.shandianArr) {
      Game.fangzhitanchuang("闪电不够");
    } else {
      Game.daoJuJson[59].jiagejin > Player.jinbiArr && Game.fangzhitanchuang("金币不够");
    }
    if (!(Game.daoJuJson[59].jiagedian > Player.shandianArr || Game.daoJuJson[59].jiagejin > Player.jinbiArr)) {
      Player.shandianArr -= Game.daoJuJson[59].jiagedian;
      Player.jinbiArr -= Game.daoJuJson[59].jiagejin;
      Game.jinbiNum.getComponent(cc.Label).string = Player.jinbiArr;
      Game.shandianNum.getComponent(cc.Label).string = Player.shandianArr;
      Player.shengjijiantou_tishi();
      Player.fk_fangzhitishi(Game.xuanzhongFK, false);
      cocoscreator.api_showTip("prefab/game/kuang", function (e) {
        var i = cc.instantiate(e);
        i.x = Game.xuanzhongFK.x;
        i.y = Game.xuanzhongFK.y;
        i.posFK = Game.xuanzhongFK;
        Game.props.addChild(i);
        cc.loader.loadRes("image/game/jianzao/kuang/kuang4", cc.SpriteFrame, function (e, a) {
          i && i.isValid && (i.getChildByName("kuang").getComponent(cc.Sprite).spriteFrame = a);
        });
        i.getComponent("kuang").kuangdengji = 4;
        i.bianzu = Player.bianzu;
      }.bind(this));
      this.node.destroy();
    }
  },
  but_fuzhoufasheqi: function () {
    music.api_audioPlay(MainDate.mp3.jianzaojianzhu);
    if (Game.daoJuJson[45].jiagedian > Player.shandianArr) {
      Game.fangzhitanchuang("闪电不够");
    } else if (Game.daoJuJson[45].jiagejin > Player.jinbiArr) {
      Game.fangzhitanchuang("金币不够");
    } else {
      MainDate.dangqianNum_fuzhoufasheqi >= 1 && Game.fangzhitanchuang("无法建造更更多");
    }
    if (!(Game.daoJuJson[45].jiagedian > Player.shandianArr || Game.daoJuJson[45].jiagejin > Player.jinbiArr || MainDate.PlayerData.fuzhoufasheqi <= 0 || MainDate.dangqianNum_fuzhoufasheqi >= 1)) {
      Player.shandianArr -= Game.daoJuJson[45].jiagedian;
      Player.jinbiArr -= Game.daoJuJson[45].jiagejin;
      Game.jinbiNum.getComponent(cc.Label).string = Player.jinbiArr;
      Game.shandianNum.getComponent(cc.Label).string = Player.shandianArr;
      MainDate.PlayerData.fuzhoufasheqi--;
      MainDate.PlayerDataSetObject();
      MainDate.dangqianNum_fuzhoufasheqi++;
      Player.shengjijiantou_tishi();
      Player.fk_fangzhitishi(Game.xuanzhongFK, false);
      cocoscreator.api_showTip("prefab/game/daoju", function (e) {
        var i = cc.instantiate(e);
        i.x = Game.xuanzhongFK.x;
        i.y = Game.xuanzhongFK.y;
        i.posFK = Game.xuanzhongFK;
        Game.props.addChild(i);
        i && i.isValid && (i.getChildByName("fuzhou").active = true);
        i.bianzu = Player.bianzu;
      }.bind(this));
      this.node.destroy();
    }
  },
  but_nengliangzhao: function () {
    music.api_audioPlay(MainDate.mp3.jianzaojianzhu);
    if (Game.daoJuJson[46].jiagedian > Player.shandianArr) {
      Game.fangzhitanchuang("闪电不够");
    } else if (Game.daoJuJson[46].jiagejin > Player.jinbiArr) {
      Game.fangzhitanchuang("金币不够");
    } else {
      MainDate.dangqianNum_nengliang >= 1 && Game.fangzhitanchuang("无法建造更更多");
    }
    if (!(Game.daoJuJson[46].jiagedian > Player.shandianArr || Game.daoJuJson[46].jiagejin > Player.jinbiArr || MainDate.PlayerData.nengliang <= 0 || MainDate.dangqianNum_nengliang >= 1)) {
      Player.shandianArr -= Game.daoJuJson[46].jiagedian;
      Player.jinbiArr -= Game.daoJuJson[46].jiagejin;
      Game.jinbiNum.getComponent(cc.Label).string = Player.jinbiArr;
      Game.shandianNum.getComponent(cc.Label).string = Player.shandianArr;
      MainDate.PlayerData.nengliang--;
      MainDate.PlayerDataSetObject();
      Player.shengjijiantou_tishi();
      MainDate.dangqianNum_nengliang++;
      Player.fk_fangzhitishi(Game.xuanzhongFK, false);
      cocoscreator.api_showTip("prefab/game/daoju", function (e) {
        var i = cc.instantiate(e);
        i.x = Game.xuanzhongFK.x;
        i.y = Game.xuanzhongFK.y;
        i.posFK = Game.xuanzhongFK;
        Game.props.addChild(i);
        i && i.isValid && (i.getChildByName("nengliangzhao").active = true);
        i.bianzu = Player.bianzu;
      }.bind(this));
      this.node.destroy();
    }
  },
  but_tikuanji: function () {
    music.api_audioPlay(MainDate.mp3.jianzaojianzhu);
    if (Game.daoJuJson[47].jiagedian > Player.shandianArr) {
      Game.fangzhitanchuang("闪电不够");
    } else if (Game.daoJuJson[47].jiagejin > Player.jinbiArr) {
      Game.fangzhitanchuang("金币不够");
    } else {
      MainDate.dangqianNum_tikuanji >= 1 && Game.fangzhitanchuang("无法建造更更多");
    }
    if (!(Game.daoJuJson[47].jiagedian > Player.shandianArr || Game.daoJuJson[47].jiagejin > Player.jinbiArr || MainDate.PlayerData.tikuanji <= 0 || MainDate.dangqianNum_tikuanji >= 1)) {
      Game.AD_ATM.active = false;
      Player.shandianArr -= Game.daoJuJson[47].jiagedian;
      Player.jinbiArr -= Game.daoJuJson[47].jiagejin;
      Game.jinbiNum.getComponent(cc.Label).string = Player.jinbiArr;
      Game.shandianNum.getComponent(cc.Label).string = Player.shandianArr;
      MainDate.PlayerData.tikuanji--;
      MainDate.PlayerDataSetObject();
      MainDate.dangqianNum_tikuanji++;
      Player.shengjijiantou_tishi();
      Player.fk_fangzhitishi(Game.xuanzhongFK, false);
      cocoscreator.api_showTip("prefab/game/daoju", function (e) {
        var i = cc.instantiate(e);
        i.x = Game.xuanzhongFK.x;
        i.y = Game.xuanzhongFK.y;
        i.posFK = Game.xuanzhongFK;
        Game.props.addChild(i);
        i && i.isValid && (i.getChildByName("ATM").active = true);
        i.bianzu = Player.bianzu;
      }.bind(this));
      this.node.destroy();
    }
  },
  but_bingxiang: function () {
    music.api_audioPlay(MainDate.mp3.jianzaojianzhu);
    if (Game.daoJuJson[48].jiagedian > Player.shandianArr) {
      Game.fangzhitanchuang("闪电不够");
    } else if (Game.daoJuJson[48].jiagejin > Player.jinbiArr) {
      Game.fangzhitanchuang("金币不够");
    } else {
      MainDate.dangqianNum_bingxiang >= 1 && Game.fangzhitanchuang("无法建造更更多");
    }
    if (!(Game.daoJuJson[48].jiagedian > Player.shandianArr || Game.daoJuJson[48].jiagejin > Player.jinbiArr || MainDate.PlayerData.bingxiang <= 0 || MainDate.dangqianNum_bingxiang >= 1)) {
      Player.shandianArr -= Game.daoJuJson[48].jiagedian;
      Player.jinbiArr -= Game.daoJuJson[48].jiagejin;
      Game.jinbiNum.getComponent(cc.Label).string = Player.jinbiArr;
      Game.shandianNum.getComponent(cc.Label).string = Player.shandianArr;
      MainDate.PlayerData.bingxiang--;
      MainDate.PlayerDataSetObject();
      MainDate.dangqianNum_bingxiang++;
      Player.player_men_bing(true);
      Player.shengjijiantou_tishi();
      Player.fk_fangzhitishi(Game.xuanzhongFK, false);
      cocoscreator.api_showTip("prefab/game/daoju", function (e) {
        var i = cc.instantiate(e);
        i.x = Game.xuanzhongFK.x;
        i.y = Game.xuanzhongFK.y;
        i.posFK = Game.xuanzhongFK;
        Game.props.addChild(i);
        i && i.isValid && (i.getChildByName("bingxiang").active = true);
        i.bianzu = Player.bianzu;
      }.bind(this));
      this.node.destroy();
    }
  },
  but_youbu: function () {
    music.api_audioPlay(MainDate.mp3.jianzaojianzhu);
    if (Game.daoJuJson[49].jiagedian > Player.shandianArr) {
      Game.fangzhitanchuang("闪电不够");
    } else if (Game.daoJuJson[49].jiagejin > Player.jinbiArr) {
      Game.fangzhitanchuang("金币不够");
    } else {
      MainDate.dangqianNum_youbu >= 1 && Game.fangzhitanchuang("无法建造更更多");
    }
    if (!(Game.daoJuJson[49].jiagedian > Player.shandianArr || Game.daoJuJson[49].jiagejin > Player.jinbiArr || MainDate.PlayerData.youbu <= 0 || MainDate.dangqianNum_youbu >= 1)) {
      Player.shandianArr -= Game.daoJuJson[49].jiagedian;
      Player.jinbiArr -= Game.daoJuJson[49].jiagejin;
      Game.jinbiNum.getComponent(cc.Label).string = Player.jinbiArr;
      Game.shandianNum.getComponent(cc.Label).string = Player.shandianArr;
      MainDate.PlayerData.youbu--;
      MainDate.PlayerDataSetObject();
      MainDate.dangqianNum_youbu++;
      Player.shengjijiantou_tishi();
      Player.fk_fangzhitishi(Game.xuanzhongFK, false);
      cocoscreator.api_showTip("prefab/game/daoju", function (e) {
        var i = cc.instantiate(e);
        i.x = Game.xuanzhongFK.x;
        i.y = Game.xuanzhongFK.y;
        i.posFK = Game.xuanzhongFK;
        Game.props.addChild(i);
        i && i.isValid && (i.getChildByName("youbu").active = true);
        i.bianzu = Player.bianzu;
      }.bind(this));
      this.node.destroy();
    }
  },
  but_daoci: function () {
    music.api_audioPlay(MainDate.mp3.jianzaojianzhu);
    if (Game.daoJuJson[50].jiagedian > Player.shandianArr) {
      Game.fangzhitanchuang("闪电不够");
    } else if (Game.daoJuJson[50].jiagejin > Player.jinbiArr) {
      Game.fangzhitanchuang("金币不够");
    } else {
      MainDate.dangqianNum_daoci >= 1 && Game.fangzhitanchuang("无法建造更更多");
    }
    if (!(Game.daoJuJson[50].jiagedian > Player.shandianArr || Game.daoJuJson[50].jiagejin > Player.jinbiArr || MainDate.PlayerData.daoci <= 0 || MainDate.dangqianNum_daoci >= 1)) {
      Player.shandianArr -= Game.daoJuJson[50].jiagedian;
      Player.jinbiArr -= Game.daoJuJson[50].jiagejin;
      Game.jinbiNum.getComponent(cc.Label).string = Player.jinbiArr;
      Game.shandianNum.getComponent(cc.Label).string = Player.shandianArr;
      MainDate.PlayerData.daoci--;
      MainDate.PlayerDataSetObject();
      Player.fk_fangzhitishi(Game.xuanzhongFK, false);
      MainDate.dangqianNum_daoci++;
      Player.player_men_daoci(true);
      Player.shengjijiantou_tishi();
      cocoscreator.api_showTip("prefab/game/daoju", function (e) {
        var i = cc.instantiate(e);
        i.x = Game.xuanzhongFK.x;
        i.y = Game.xuanzhongFK.y;
        i.posFK = Game.xuanzhongFK;
        Game.props.addChild(i);
        i && i.isValid && (i.getChildByName("daoci").active = true);
        i.bianzu = Player.bianzu;
      }.bind(this));
      this.node.destroy();
    }
  },
  but_duantoutai: function () {
    music.api_audioPlay(MainDate.mp3.jianzaojianzhu);
    if (Game.daoJuJson[51].jiagedian > Player.shandianArr) {
      Game.fangzhitanchuang("闪电不够");
    } else if (Game.daoJuJson[51].jiagejin > Player.jinbiArr) {
      Game.fangzhitanchuang("金币不够");
    } else {
      MainDate.dangqianNum_duantoutai >= 1 && Game.fangzhitanchuang("无法建造更更多");
    }
    if (!(Game.daoJuJson[51].jiagedian > Player.shandianArr || Game.daoJuJson[51].jiagejin > Player.jinbiArr || MainDate.PlayerData.duantoutai <= 0 || MainDate.dangqianNum_duantoutai >= 1)) {
      Player.shandianArr -= Game.daoJuJson[51].jiagedian;
      Player.jinbiArr -= Game.daoJuJson[51].jiagejin;
      Game.jinbiNum.getComponent(cc.Label).string = Player.jinbiArr;
      Game.shandianNum.getComponent(cc.Label).string = Player.shandianArr;
      MainDate.PlayerData.duantoutai--;
      MainDate.PlayerDataSetObject();
      MainDate.dangqianNum_duantoutai++;
      Player.shengjijiantou_tishi();
      Player.fk_fangzhitishi(Game.xuanzhongFK, false);
      cocoscreator.api_showTip("prefab/game/daoju", function (e) {
        var i = cc.instantiate(e);
        i.x = Game.xuanzhongFK.x;
        i.y = Game.xuanzhongFK.y;
        i.posFK = Game.xuanzhongFK;
        Game.props.addChild(i);
        i && i.isValid && (i.getChildByName("duantoutai").active = true);
        i.bianzu = Player.bianzu;
      }.bind(this));
      this.node.destroy();
    }
  },
  but_liaowangtai: function () {
    music.api_audioPlay(MainDate.mp3.jianzaojianzhu);
    if (Game.daoJuJson[53].jiagedian > Player.shandianArr) {
      Game.fangzhitanchuang("闪电不够");
    } else if (Game.daoJuJson[53].jiagejin > Player.jinbiArr) {
      Game.fangzhitanchuang("金币不够");
    } else {
      MainDate.dangqianNum_liaowangtai >= 1 && Game.fangzhitanchuang("无法建造更更多");
    }
    if (!(Game.daoJuJson[53].jiagedian > Player.shandianArr || Game.daoJuJson[53].jiagejin > Player.jinbiArr || MainDate.PlayerData.liaowangtai <= 0 || MainDate.dangqianNum_liaowangtai >= 1)) {
      Player.shandianArr -= Game.daoJuJson[53].jiagedian;
      Player.jinbiArr -= Game.daoJuJson[53].jiagejin;
      Game.jinbiNum.getComponent(cc.Label).string = Player.jinbiArr;
      Game.shandianNum.getComponent(cc.Label).string = Player.shandianArr;
      MainDate.PlayerData.liaowangtai--;
      MainDate.PlayerDataSetObject();
      MainDate.dangqianNum_liaowangtai++;
      Player.shengjijiantou_tishi();
      Player.fk_fangzhitishi(Game.xuanzhongFK, false);
      cocoscreator.api_showTip("prefab/game/daoju", function (e) {
        var i = cc.instantiate(e);
        i.x = Game.xuanzhongFK.x;
        i.y = Game.xuanzhongFK.y;
        i.posFK = Game.xuanzhongFK;
        Game.props.addChild(i);
        i && i.isValid && (i.getChildByName("liaowangtai").active = true);
        i.bianzu = Player.bianzu;
      }.bind(this));
      this.node.destroy();
    }
  },
  but_lizijiasuqi: function () {
    music.api_audioPlay(MainDate.mp3.jianzaojianzhu);
    if (Game.daoJuJson[54].jiagedian > Player.shandianArr) {
      Game.fangzhitanchuang("闪电不够");
    } else if (Game.daoJuJson[54].jiagejin > Player.jinbiArr) {
      Game.fangzhitanchuang("金币不够");
    } else {
      MainDate.dangqianNum_lizijiasuqi >= 1 && Game.fangzhitanchuang("无法建造更更多");
    }
    if (!(Game.daoJuJson[54].jiagedian > Player.shandianArr || Game.daoJuJson[54].jiagejin > Player.jinbiArr || MainDate.PlayerData.lizijiasuqi <= 0 || MainDate.dangqianNum_lizijiasuqi >= 1)) {
      Player.shandianArr -= Game.daoJuJson[54].jiagedian;
      Player.jinbiArr -= Game.daoJuJson[54].jiagejin;
      Game.jinbiNum.getComponent(cc.Label).string = Player.jinbiArr;
      Game.shandianNum.getComponent(cc.Label).string = Player.shandianArr;
      MainDate.PlayerData.lizijiasuqi--;
      MainDate.PlayerDataSetObject();
      MainDate.dangqianNum_lizijiasuqi++;
      Player.shengjijiantou_tishi();
      Player.fk_fangzhitishi(Game.xuanzhongFK, false);
      cocoscreator.api_showTip("prefab/game/daoju", function (e) {
        var i = cc.instantiate(e);
        i.x = Game.xuanzhongFK.x;
        i.y = Game.xuanzhongFK.y;
        i.posFK = Game.xuanzhongFK;
        Game.props.addChild(i);
        i && i.isValid && (i.getChildByName("lizijiasuqi").active = true);
        i.bianzu = Player.bianzu;
      }.bind(this));
      this.node.destroy();
    }
  },
  but_dianciquan: function () {
    music.api_audioPlay(MainDate.mp3.jianzaojianzhu);
    if (Game.daoJuJson[55].jiagedian > Player.shandianArr) {
      Game.fangzhitanchuang("闪电不够");
    } else if (Game.daoJuJson[55].jiagejin > Player.jinbiArr) {
      Game.fangzhitanchuang("金币不够");
    } else {
      MainDate.dangqianNum_dianciquan >= 1 && Game.fangzhitanchuang("无法建造更更多");
    }
    if (!(Game.daoJuJson[55].jiagedian > Player.shandianArr || Game.daoJuJson[55].jiagejin > Player.jinbiArr || MainDate.PlayerData.dianciquan <= 0 || MainDate.dangqianNum_dianciquan >= 1)) {
      Player.shandianArr -= Game.daoJuJson[55].jiagedian;
      Player.jinbiArr -= Game.daoJuJson[55].jiagejin;
      Game.jinbiNum.getComponent(cc.Label).string = Player.jinbiArr;
      Game.shandianNum.getComponent(cc.Label).string = Player.shandianArr;
      MainDate.PlayerData.dianciquan--;
      MainDate.PlayerDataSetObject();
      MainDate.dangqianNum_dianciquan++;
      Player.shengjijiantou_tishi();
      Player.fk_fangzhitishi(Game.xuanzhongFK, false);
      cocoscreator.api_showTip("prefab/game/daoju", function (e) {
        var i = cc.instantiate(e);
        i.x = Game.xuanzhongFK.x;
        i.y = Game.xuanzhongFK.y;
        i.posFK = Game.xuanzhongFK;
        Game.props.addChild(i);
        i && i.isValid && (i.getChildByName("dianciquan").active = true);
        i.bianzu = Player.bianzu;
      }.bind(this));
      this.node.destroy();
    }
  },
  but_tiemen1: function () {
    music.api_audioPlay(MainDate.mp3.jianzaojianzhu);
    if (3 > Player.jinbiArr) {
      Game.fangzhitanchuang("金币不够");
    } else if (!(Game.gui.zishenPos.x == Game.xuanzhongFK.dimianxuhao % 50 && Game.gui.zishenPos.y == 50 - Math.floor(Game.xuanzhongFK.dimianxuhao / 50) - 1)) {
      Player.jinbiArr -= 3, Game.jinbiNum.getComponent(cc.Label).string = Player.jinbiArr, Player.shengjijiantou_tishi(), Player.fk_fangzhitishi(Game.xuanzhongFK, false), cocoscreator.api_showTip("prefab/game/men", function (e) {
        var i = cc.instantiate(e);
        i.x = Game.xuanzhongFK.x;
        i.y = Game.xuanzhongFK.y;
        i.posFK = Game.xuanzhongFK;
        Game.props.addChild(i);
        i.bianzu = Player.bianzu;
        MainDate.dangqianNum_daoci > 0 && i && i.isValid && (i.getChildByName("jingji").active = true);
        MainDate.dangqianNum_bingxiang > 0 && i && i.isValid && (i.getChildByName("bing").active = true);
        Game.xunlumapArray[Game.xuanzhongFK.dimianxuhao % 50][50 - Math.floor(Game.xuanzhongFK.dimianxuhao / 50) - 1] = 0;
        Game.playermapArray[Game.xuanzhongFK.dimianxuhao % 50][50 - Math.floor(Game.xuanzhongFK.dimianxuhao / 50) - 1] = 0;
        i.zuobiaoPos = {
          x: Game.xuanzhongFK.dimianxuhao % 50,
          y: 50 - Math.floor(Game.xuanzhongFK.dimianxuhao / 50) - 1
        };
        Player.menArr.push(i);
      }.bind(this)), this.node.destroy();
    }
  },
  but_paotai_dk: function () {
    music.api_audioPlay(MainDate.mp3.jianzaojianzhu);
    if (Player.jinbiArr < this.daojuduikang1[1].jiagejin) {
      Game.fangzhitanchuang("金币不够");
    } else if (Player.paotaiNum >= 4) {
      Game.fangzhitanchuang("无法建造更多");
    } else {
      Player.jinbiArr -= this.daojuduikang1[1].jiagejin;
      Game.jinbiNum.getComponent(cc.Label).string = Player.jinbiArr;
      Player.shengjijiantou_tishi();
      cocoscreator.api_showTip("prefab/game/dk/paotai", function (e) {
        var i = cc.instantiate(e);
        Player.paotaiNum += 1;
        i.x = Game.xuanzhongFK.x;
        i.y = Game.xuanzhongFK.y;
        i.bianzu = Player.bianzu;
        i.posFK = Game.xuanzhongFK;
        i.name = "paotai";
        Game.props.addChild(i);
        Game.shengji_Arr.push(i);
        i && i.isValid && i.getChildByName("1").on(cc.Node.EventType.TOUCH_START && cc.Node.EventType.TOUCH_END, function () {
          Game.chaichudaojuType = "paotai";
          Game.chaichudaoju = i;
          cocoscreator.api_showTip("prefab/game/dk/shengjiTanchuang_dk", function (e) {
            var i = cc.instantiate(e);
            Game.MainCameraUI.addChild(i);
          });
        }.bind(this));
      }.bind(this));
      this.node.destroy();
    }
  },
  but_youxiji_dk: function () {
    music.api_audioPlay(MainDate.mp3.jianzaojianzhu);
    if (Player.jinbiArr < this.daojuduikang1[14].jiagejin) {
      Game.fangzhitanchuang("金币不够");
    } else if (Player.youxijiNum >= 1) {
      Game.fangzhitanchuang("无法建造更多");
    } else {
      Player.jinbiArr -= this.daojuduikang1[14].jiagejin;
      Game.jinbiNum.getComponent(cc.Label).string = Player.jinbiArr;
      Player.shengjijiantou_tishi();
      cocoscreator.api_showTip("prefab/game/dk/daoju_dk", function (e) {
        var i = cc.instantiate(e);
        i.x = Game.xuanzhongFK.x;
        i.y = Game.xuanzhongFK.y;
        i.bianzu = Player.bianzu;
        i.posFK = Game.xuanzhongFK;
        i.daoju = "youxiji";
        i.name = "youxiji";
        Game.props.addChild(i);
        Game.shengji_Arr.push(i);
        i && i.isValid && i.getChildByName("1").on(cc.Node.EventType.TOUCH_START && cc.Node.EventType.TOUCH_END, function () {
          Game.chaichudaojuType = "youxiji";
          Game.chaichudaoju = i;
          cocoscreator.api_showTip("prefab/game/dk/shengjiTanchuang_dk", function (e) {
            var i = cc.instantiate(e);
            Game.MainCameraUI.addChild(i);
          });
        }.bind(this));
      }.bind(this));
      this.node.destroy();
    }
  },
  but_weixiutai_dk: function () {
    var e = this;
    music.api_audioPlay(MainDate.mp3.jianzaojianzhu);
    if (Player.weixiutaiNum >= 4) {
      Game.fangzhitanchuang("无法建造更多");
    } else {
      adUtils.executeShowVideo(function () {
        cocoscreator.api_showTip("prefab/game/dk/daoju_dk", function (e) {
          var i = cc.instantiate(e);
          i.x = Game.xuanzhongFK.x;
          i.y = Game.xuanzhongFK.y;
          i.bianzu = Player.bianzu;
          i.posFK = Game.xuanzhongFK;
          i.daoju = "weixiutai";
          Game.props.addChild(i);
          Game.shengji_Arr.push(i);
          i && i.isValid && i.getChildByName("1").on(cc.Node.EventType.TOUCH_START && cc.Node.EventType.TOUCH_END, function () {
            Game.chaichudaojuType = "weixiutai";
            Game.chaichudaoju = i;
            cocoscreator.api_showTip("prefab/game/dk/daoju_dk_Tanchuang", function (e) {
              var i = cc.instantiate(e);
              Game.MainCameraUI.addChild(i);
            });
          }.bind(this));
        }.bind(e));
        e.node.destroy();
      });
    }
  },
  but_bingxiang_dk: function () {
    var e = this;
    music.api_audioPlay(MainDate.mp3.jianzaojianzhu);
    if (Player.bingxiangNum >= 1) {
      Game.fangzhitanchuang("无法建造更多");
    } else {
      adUtils.executeShowVideo(function () {
        cocoscreator.api_showTip("prefab/game/dk/daoju_dk", function (e) {
          var i = cc.instantiate(e);
          i.x = Game.xuanzhongFK.x;
          i.y = Game.xuanzhongFK.y;
          Player.player_men_bing(true);
          i.bianzu = Player.bianzu;
          i.posFK = Game.xuanzhongFK;
          i.daoju = "bingxiang";
          Game.props.addChild(i);
          Game.shengji_Arr.push(i);
          i && i.isValid && i.getChildByName("1").on(cc.Node.EventType.TOUCH_START && cc.Node.EventType.TOUCH_END, function () {
            Game.chaichudaojuType = "binxiang";
            Game.chaichudaoju = i;
            cocoscreator.api_showTip("prefab/game/dk/daoju_dk_Tanchuang", function (e) {
              var i = cc.instantiate(e);
              Game.MainCameraUI.addChild(i);
            });
          }.bind(this));
        }.bind(e));
        e.node.destroy();
      });
    }
  },
  but_nengliangzhao_dk: function () {
    var e = this;
    music.api_audioPlay(MainDate.mp3.jianzaojianzhu);
    if (Player.nengliangzhaoNum >= 1) {
      Game.fangzhitanchuang("无法建造更多");
    } else {
      adUtils.executeShowVideo(function () {
        cocoscreator.api_showTip("prefab/game/dk/daoju_dk", function (e) {
          var i = cc.instantiate(e);
          i.x = Game.xuanzhongFK.x;
          i.y = Game.xuanzhongFK.y;
          i.bianzu = Player.bianzu;
          i.posFK = Game.xuanzhongFK;
          i.daoju = "nengliangzhao";
          Game.props.addChild(i);
          Game.shengji_Arr.push(i);
          i && i.isValid && i.getChildByName("1").on(cc.Node.EventType.TOUCH_START && cc.Node.EventType.TOUCH_END, function () {
            Game.chaichudaojuType = "nengliangzhao";
            Game.chaichudaoju = i;
            cocoscreator.api_showTip("prefab/game/dk/daoju_dk_Tanchuang", function (e) {
              var i = cc.instantiate(e);
              Game.MainCameraUI.addChild(i);
            });
          }.bind(this));
        }.bind(e));
        e.node.destroy();
      });
    }
  },
  but_dianciquan_dk: function () {
    var e = this;
    music.api_audioPlay(MainDate.mp3.jianzaojianzhu);
    if (Player.dianciquanNum >= 1) {
      Game.fangzhitanchuang("无法建造更多");
    } else {
      adUtils.executeShowVideo(function () {
        cocoscreator.api_showTip("prefab/game/dk/daoju_dk", function (e) {
          var i = cc.instantiate(e);
          i.x = Game.xuanzhongFK.x;
          i.y = Game.xuanzhongFK.y;
          i.bianzu = Player.bianzu;
          i.posFK = Game.xuanzhongFK;
          i.daoju = "dianciquan";
          Game.props.addChild(i);
          Game.shengji_Arr.push(i);
          i && i.isValid && i.getChildByName("1").on(cc.Node.EventType.TOUCH_START && cc.Node.EventType.TOUCH_END, function () {
            Game.chaichudaojuType = "lizijiasuqi";
            Game.chaichudaoju = i;
            cocoscreator.api_showTip("prefab/game/dk/daoju_dk_Tanchuang", function (e) {
              var i = cc.instantiate(e);
              Game.MainCameraUI.addChild(i);
            });
          }.bind(this));
        }.bind(e));
        e.node.destroy();
      });
    }
  },
  but_mengyan_gongji_dk: function () {
    music.api_audioPlay(MainDate.mp3.jianzaojianzhu);
    if (Player.jinbiArr < this.daojuduikang1[36].jiagejin) {
      Game.fangzhitanchuang("金币不够");
    } else if (Player.mengyan_gongjiNum >= 1) {
      Game.fangzhitanchuang("无法建造更多");
    } else {
      Player.jinbiArr -= this.daojuduikang1[36].jiagejin;
      Game.jinbiNum.getComponent(cc.Label).string = Player.jinbiArr;
      Player.shengjijiantou_tishi();
      cocoscreator.api_showTip("prefab/game/dk/daoju_dk", function (e) {
        var i = cc.instantiate(e);
        i.x = Game.xuanzhongFK.x;
        i.y = Game.xuanzhongFK.y;
        i.bianzu = Player.bianzu;
        i.daoju = "mengyan_gongji";
        Game.props.addChild(i);
        Game.shengji_Arr.push(i);
        i && i.isValid && i.getChildByName("1").on(cc.Node.EventType.TOUCH_START && cc.Node.EventType.TOUCH_END, function () {
          Game.chaichudaojuType = "mengyan_gongji";
          Game.chaichudaoju = i;
          cocoscreator.api_showTip("prefab/game/dk/shengjiTanchuang_dk", function (e) {
            var i = cc.instantiate(e);
            Game.MainCameraUI.addChild(i);
          });
        }.bind(this));
      }.bind(this));
      this.node.destroy();
    }
  },
  but_mengyan_gongsu_dk: function () {
    music.api_audioPlay(MainDate.mp3.jianzaojianzhu);
    if (Player.jinbiArr < this.daojuduikang1[56].jiagejin) {
      Game.fangzhitanchuang("金币不够");
    } else if (Player.mengyan_gongsuNum >= 1) {
      Game.fangzhitanchuang("无法建造更多");
    } else {
      Player.jinbiArr -= this.daojuduikang1[56].jiagejin;
      Game.jinbiNum.getComponent(cc.Label).string = Player.jinbiArr;
      Player.shengjijiantou_tishi();
      cocoscreator.api_showTip("prefab/game/dk/daoju_dk", function (e) {
        var i = cc.instantiate(e);
        i.x = Game.xuanzhongFK.x;
        i.y = Game.xuanzhongFK.y;
        i.bianzu = Player.bianzu;
        i.daoju = "mengyan_gongsu";
        Game.props.addChild(i);
        Game.shengji_Arr.push(i);
        i && i.isValid && i.getChildByName("1").on(cc.Node.EventType.TOUCH_START && cc.Node.EventType.TOUCH_END, function () {
          Game.chaichudaojuType = "mengyan_gongsu";
          Game.chaichudaoju = i;
          cocoscreator.api_showTip("prefab/game/dk/shengjiTanchuang_dk", function (e) {
            var i = cc.instantiate(e);
            Game.MainCameraUI.addChild(i);
          });
        }.bind(this));
      }.bind(this));
      this.node.destroy();
    }
  },
  but_mengyan_shengming_dk: function () {
    music.api_audioPlay(MainDate.mp3.jianzaojianzhu);
    if (Player.jinbiArr < this.daojuduikang1[46].jiagejin) {
      Game.fangzhitanchuang("金币不够");
    } else if (Player.mengyan_shengmingNum >= 1) {
      Game.fangzhitanchuang("无法建造更多");
    } else {
      Player.jinbiArr -= this.daojuduikang1[46].jiagejin;
      Game.jinbiNum.getComponent(cc.Label).string = Player.jinbiArr;
      Player.shengjijiantou_tishi();
      cocoscreator.api_showTip("prefab/game/dk/daoju_dk", function (e) {
        var i = cc.instantiate(e);
        i.x = Game.xuanzhongFK.x;
        i.y = Game.xuanzhongFK.y;
        i.bianzu = Player.bianzu;
        i.daoju = "mengyan_shengming";
        Game.props.addChild(i);
        Game.shengji_Arr.push(i);
        i && i.isValid && i.getChildByName("1").on(cc.Node.EventType.TOUCH_START && cc.Node.EventType.TOUCH_END, function () {
          Game.chaichudaojuType = "mengyan_shengming";
          Game.chaichudaoju = i;
          cocoscreator.api_showTip("prefab/game/dk/shengjiTanchuang_dk", function (e) {
            var i = cc.instantiate(e);
            Game.MainCameraUI.addChild(i);
          });
        }.bind(this));
      }.bind(this));
      this.node.destroy();
    }
  },
  but_mengyan_yisu_dk: function () {
    music.api_audioPlay(MainDate.mp3.jianzaojianzhu);
    if (Player.jinbiArr < this.daojuduikang1[61].jiagejin) {
      Game.fangzhitanchuang("金币不够");
    } else if (Player.mengyan_yisuNum >= 1) {
      Game.fangzhitanchuang("无法建造更多");
    } else {
      Player.jinbiArr -= this.daojuduikang1[61].jiagejin;
      Game.jinbiNum.getComponent(cc.Label).string = Player.jinbiArr;
      Player.shengjijiantou_tishi();
      cocoscreator.api_showTip("prefab/game/dk/daoju_dk", function (e) {
        var i = cc.instantiate(e);
        i.x = Game.xuanzhongFK.x;
        i.y = Game.xuanzhongFK.y;
        i.bianzu = Player.bianzu;
        i.daoju = "mengyan_yisu";
        Game.props.addChild(i);
        Game.shengji_Arr.push(i);
        i && i.isValid && i.getChildByName("1").on(cc.Node.EventType.TOUCH_START && cc.Node.EventType.TOUCH_END, function () {
          Game.chaichudaojuType = "mengyan_yisu";
          Game.chaichudaoju = i;
          cocoscreator.api_showTip("prefab/game/dk/shengjiTanchuang_dk", function (e) {
            var i = cc.instantiate(e);
            Game.MainCameraUI.addChild(i);
          });
        }.bind(this));
      }.bind(this));
      this.node.destroy();
    }
  },
  but_liemengzhe_dk: function () {
    music.api_audioPlay(MainDate.mp3.jianzaojianzhu);
    if (Player.jinbiArr < this.daojuduikang1[24].jiagejin) {
      Game.fangzhitanchuang("金币不够");
    } else if (Player.liemengzheNum >= 1) {
      Game.fangzhitanchuang("无法建造更多");
    } else {
      Player.jinbiArr -= this.daojuduikang1[24].jiagejin;
      Game.jinbiNum.getComponent(cc.Label).string = Player.jinbiArr;
      Player.shengjijiantou_tishi();
      cocoscreator.api_showTip("prefab/game/dk/daoju_dk", function (e) {
        var i = cc.instantiate(e);
        i.x = Game.xuanzhongFK.x;
        i.y = Game.xuanzhongFK.y;
        i.bianzu = Player.bianzu;
        i.daoju = "liemengzhe";
        Game.props.addChild(i);
        Game.shengji_Arr.push(i);
        i && i.isValid && i.getChildByName("1").on(cc.Node.EventType.TOUCH_START && cc.Node.EventType.TOUCH_END, function () {
          Game.chaichudaojuType = "liemengzhe";
          Game.chaichudaoju = i;
          cocoscreator.api_showTip("prefab/game/dk/shengjiTanchuang_dk", function (e) {
            var i = cc.instantiate(e);
            Game.MainCameraUI.addChild(i);
          });
        }.bind(this));
      }.bind(this));
      this.node.destroy();
    }
  },
  but_leixinganniu: function (e) {
    var i = this;
    this.jichu.active = false;
    this.zhuanqian.active = false;
    this.gaokeji.active = false;
    this.heikeji.active = false;
    this.juzigongfang.active = false;
    this.jichu_dk.active = false;
    this.tianfu_dk.active = false;
    this.gaokeji_dk.active = false;
    var a = "image/game/jianzao/shangannuhei";
    var n = "image/game/jianzao/shangannuhei";
    var t = "image/game/jianzao/shangannuhei";
    var o = "image/game/jianzao/shangannuhei";
    var s = "image/game/jianzao/shangannuhei";
    var c = "image/game/jianzao/shangannuhei";
    var r = "image/game/jianzao/shangannuhei";
    var u = "image/game/jianzao/shangannuhei";
    if ("jichu" == e.currentTarget.name) {
      this.jichu.active = true;
      a = "image/game/jianzao/shanganniu";
    } else if ("zhuanqian" == e.currentTarget.name) {
      this.zhuanqian.active = true;
      n = "image/game/jianzao/shanganniu";
    } else if ("gaokeji" == e.currentTarget.name) {
      this.gaokeji.active = true;
      t = "image/game/jianzao/shanganniu";
    } else if ("heikeji" == e.currentTarget.name) {
      this.heikeji.active = true;
      o = "image/game/jianzao/shanganniu";
    } else if ("juzigongfang" == e.currentTarget.name) {
      this.juzigongfang.active = true;
      s = "image/game/jianzao/shanganniu";
    } else if ("jichubut_dk" == e.currentTarget.name) {
      this.jichu_dk.active = true;
      c = "image/game/jianzao/shanganniu";
    } else if ("tianfubut_dk" == e.currentTarget.name) {
      this.tianfu_dk.active = true;
      r = "image/game/jianzao/shanganniu";
    } else if ("gaokejibut_dk" == e.currentTarget.name) {
      this.gaokeji_dk.active = true, u = "image/game/jianzao/shanganniu";
    }
    cc.loader.loadRes(a, cc.SpriteFrame, function (e, a) {
      i.jichubut.getComponent(cc.Sprite).spriteFrame = a;
    });
    cc.loader.loadRes(n, cc.SpriteFrame, function (e, a) {
      i.zhuanqianbut.getComponent(cc.Sprite).spriteFrame = a;
    });
    cc.loader.loadRes(t, cc.SpriteFrame, function (e, a) {
      i.gaokejibut.getComponent(cc.Sprite).spriteFrame = a;
    });
    cc.loader.loadRes(o, cc.SpriteFrame, function (e, a) {
      i.heikejibut.getComponent(cc.Sprite).spriteFrame = a;
    });
    cc.loader.loadRes(s, cc.SpriteFrame, function (e, a) {
      i.juzigongfangbut.getComponent(cc.Sprite).spriteFrame = a;
    });
    cc.loader.loadRes(c, cc.SpriteFrame, function (e, a) {
      i.jichubut_dk.getComponent(cc.Sprite).spriteFrame = a;
    });
    cc.loader.loadRes(r, cc.SpriteFrame, function (e, a) {
      i.tianfubut_dk.getComponent(cc.Sprite).spriteFrame = a;
    });
    cc.loader.loadRes(u, cc.SpriteFrame, function (e, a) {
      i.gaokejibut_dk.getComponent(cc.Sprite).spriteFrame = a;
    });
  },
  butgametypevis: function () {
    if (1 == MainDate.GameType || 2 == MainDate.GameType || 3 == MainDate.GameType || 4 == MainDate.GameType || 5 == MainDate.GameType || 7 == MainDate.GameType || 8 == MainDate.GameType) {
      if (!(5 == MainDate.GameType)) {
        this.mentanchuang.active = false, 8 == MainDate.GameType && (this.weixiutaitanchuang.active = false, this.fuzhoufasheqitanchuang.active = false, this.nengliangzhaotanchuang.active = false, this.youbutanchuang.active = false, this.dianciquantanchuang.active = false);
      }
      this.jichubut_dk.active = false;
      this.tianfubut_dk.active = false;
      this.gaokejibut_dk.active = false;
      this.jichu.active = true;
    } else if (6 == MainDate.GameType) {
      this.jichubut.active = false, this.zhuanqianbut.active = false, this.gaokejibut.active = false, this.heikejibut.active = false, this.juzigongfangbut.active = false, this.jichu_dk.active = true;
    }
  },
  but_guanbi: function () {
    music.api_audioPlay(MainDate.mp3.anniu);
    this.node.destroy();
  },
  update: function (e) {
    if (!Game.gameOver && this.daojuduikang1) {
      this.time--;
      if (this.time <= 0) {
        this.time = 20, this.anniu_huanpifu();
      }
    }
  },
  start: function () {
    adUtils.executeShowGameAdvertising(true);
  }
});
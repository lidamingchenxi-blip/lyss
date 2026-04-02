window.GAME_NAME = "灵异学院";
window.GONGSI_NAME = "石家庄邦康堡信息科技有限公司:";
window.locationList = "";
window.openRandShare = 0;
window.closeBtnScale = 1;
window.pushBoxgl = 0;
window.kaiguan = false;
window.celve = {
  time_chaping: 0,
  time_banner: 0,
  time_xitongcp: 0,
  overcount: 1,
  overgaiLv: 100,
  pausecount: 1110,
  pausegaiLv: 0,
  inGamecount: 20,
  inGamegaiLv: 80,
  othercount: 1110,
  othergaiLv: 0,
  xitongcount: 3,
  xitonggaiLv: 70,
  apk_time: 0
};
window.ext = {
  showtsgc: true,
  mengyan: 1,
  dantiao: 1,
  quandi: 1,
  duikang: 1,
  guiFuhuo: false,
  boci: 1,
  wuxianjinbi: 1,
  tafang: 1,
  moshi: [8, 7, 1, 2, 3, 4, 5, 6],
  shareTime: 20,
  shenmiheSPLv: 0
};
window.openFlag = function (e) {
  undefined != e.openRandShare && (openRandShare = e.openRandShare);
  undefined != e.closeBtnScale && (closeBtnScale = e.closeBtnScale);
  undefined != e.pushBoxgl && (pushBoxgl = e.pushBoxgl);
  undefined != e.kaiguan && (kaiguan = e.kaiguan);
  undefined != e.celve && (celve = e.celve);
  undefined != e.ext && (ext = e.ext);
};
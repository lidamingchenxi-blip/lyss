cc.Class({
  extends: cc.Component,
  properties: {},
  start: function () {},
  but_queren: function () {
    Game.xuanzerenwu = true;
    Game.zidongshangchuang();
    this.node.destroy();
  }
});
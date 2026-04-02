cc.Class({
  extends: cc.Component,
  properties: {
    goldCenter: {
      default: null,
      type: cc.Node
    }
  },
  onLoad: function () {},
  start: function () {
    var e = this;
    this.node.getComponent(cc.Widget).updateAlignment();
    var i = cc.director.getScene().getChildByName("Canvas").getChildByName("juzidikuang").convertToWorldSpaceAR(cc.v2(-50, 0));
    var a = this.goldCenter.convertToNodeSpaceAR(i);
    var n = this.getCirclePoints(120, cc.v2(-30, -30), 10, 80);
    var t = function (i) {
      var t = e.goldCenter.children[i];
      var o = n[i];
      cc.tween(t).to(.3, {
        position: o
      }, {
        easing: "smooth"
      }).delay(.03 * i).to(.6, {
        position: a
      }, {
        easing: "smooth"
      }).call(function () {
        t.removeFromParent();
      }).start();
    };
    for (var o = 0; o < this.goldCenter.children.length; o++) {
      t(o);
    }
  },
  getCirclePoints: function (e, i, a, n) {
    var t = [];
    var o = Math.PI / 180 * Math.round(360 / a);
    for (var s = 0; s < a; s++) {
      var c = i.x + e * Math.sin(o * s);
      var r = i.y + e * Math.cos(o * s);
      t.unshift(cc.v3(c + Math.random() * n, r + Math.random() * n, 0));
    }
    return t;
  }
});
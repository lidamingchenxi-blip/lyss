cc.Class({
  extends: cc.Component,
  properties: {},
  onLoad: function () {
    this.button = this.node.getComponent(cc.Button);
    this.node.isOpen = false;
    this.img = this.node.getComponent(cc.Sprite);
    this.award = this.node.getChildByName("num").getComponent(cc.Label);
    this.boxImg = this.node.getChildByName("New Node").getChildByName("box");
    this.boxImg.active = true;
    var e = this.node.getChildByName("halo");
    e.scale = .8;
    cc.tween(e).repeatForever(cc.tween().by(.1, {
      angle: 15
    })).start();
    var i = function (e) {
      var i = cc.scaleTo(e.time, e.scale_x, e.scale_y);
      var a = cc.fadeIn(e.time);
      return cc.spawn(i, a);
    };
    var a = i({
      time: .18,
      scale_x: .63,
      scale_y: 1.3,
      scale_z: 1
    });
    var n = i({
      time: .36,
      scale_x: 1.1,
      scale_y: .7,
      scale_z: 1
    });
    var t = i({
      time: .07 * 3,
      scale_x: .8,
      scale_y: 1.1,
      scale_z: 1
    });
    var o = i({
      time: .07 * 3,
      scale_x: 1.1,
      scale_: .95,
      scale_z: 1
    });
    var s = i({
      time: .07 * 3,
      scale_x: 1,
      scale_y: 1,
      scale_z: 1
    });
    var c = cc.tween().sequence(a, n, t, o, s);
    cc.tween(this.boxImg).repeatForever(c).start();
    this.flag = this.node.getChildByName("New Node").getChildByName("flag");
    this.flag.active = false;
  },
  doOpen: function (e) {
    var i = this;
    this.button.enabled = false;
    this.node.isOpen = true;
    cc.loader.loadRes("Platform/Textures/oppo/oppo-mutual-gold", cc.SpriteFrame, function (e, a) {
      cc.Tween.stopAllByTarget(i.boxImg);
      i.boxImg.parent.position = cc.v2(0, 20);
      i.boxImg.getComponent(cc.Sprite).spriteFrame = a;
      i.boxImg.scale = 1;
    });
    cc.loader.loadRes("Platform/Textures/oppo/oppo-mutual-item-2", cc.SpriteFrame, function (a, n) {
      i.flag.active = false;
      i.img.spriteFrame = n;
      i.award.string = e;
    });
  },
  showVideoFlag: function () {
    this.node.isOpen || (this.flag.active = true);
  },
  registerTouchEvent: function (e) {
    this.touch_handle = e;
  },
  buttonTouchEventCallBack: function (e) {
    this.node.isOpen || this.touch_handle && this.touch_handle(this);
  }
});
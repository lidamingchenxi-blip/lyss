var n = cc.Enum({
  其他: 0,
  弹窗: 1
});
var t = cc.Class({
  name: "AlertClass",
  properties: {
    start_scale: {
      default: 0,
      displayName: "初始_缩放大小"
    },
    end_scale: {
      default: 0,
      displayName: "结束_缩放大小"
    },
    time: {
      default: 1,
      displayName: "变化时间"
    },
    easingFunc: {
      default: "smooth",
      displayName: "缓动效果函数"
    }
  }
});
var o = cc.Class({
  name: "OtherClass",
  properties: {
    lessen_time: {
      default: .5,
      displayName: "缩小_时间"
    },
    lessen_scale: {
      default: .5,
      displayName: "缩小_缩放值"
    },
    lessen_easingFunc: {
      default: "smooth",
      displayName: "缩小_缓动效果函数"
    },
    magnify_time: {
      default: .5,
      displayName: "放大_时间"
    },
    magnify_scale: {
      default: 1,
      displayName: "放大_缩放值"
    },
    magnify_easingFunc: {
      default: "smooth",
      displayName: "放大_缓动效果函数"
    },
    isRepeatForever: {
      default: true,
      displayName: "是否_一直重复播放"
    },
    repeat_count: {
      default: 1,
      displayName: "重复_次数",
      visible: function () {
        return false === this.isRepeatForever;
      }
    }
  }
});
cc.Class({
  extends: cc.Component,
  properties: {
    scale_Type: {
      default: n.其他,
      type: n,
      displayName: "缩放_类型"
    },
    alertClass: {
      default: null,
      type: t,
      displayName: "弹窗类",
      visible: function () {
        return this.scale_Type === n.弹窗;
      }
    },
    otherClass: {
      default: null,
      type: o,
      displayName: "其他类",
      visible: function () {
        return this.scale_Type === n.其他;
      }
    }
  },
  ctor: function () {
    this.alertClass = new t();
    this.otherClass = new o();
  },
  onLoad: function () {
    var e = this.node.getComponent(cc.Widget);
    if (e) {
      e.updateAlignment();
      e.enabled = false;
      this.update_out_position = this.node.position;
    }
  },
  start: function () {
    this.update_out_position && (this.node.position = this.update_out_position);
    if (this.scale_Type === n.其他) {
      var e = cc.tween().to(this.otherClass.lessen_time, {
        scale: this.otherClass.lessen_scale
      }, {
        easing: this.otherClass.lessen_easingFunc
      }).to(this.otherClass.magnify_time, {
        scale: this.otherClass.magnify_scale
      }, {
        easing: this.otherClass.magnify_easingFunc
      });
      if (this.otherClass.isRepeatForever) {
        cc.tween(this.node).repeatForever(e).start();
      } else {
        cc.tween(this.node).repeat(this.otherClass.repeat_count, e).start();
      }
    } else if (this.scale_Type === n.弹窗) {
      this.node.scale = this.alertClass.start_scale;
      cc.tween(this.node).to(this.alertClass.time, {
        scale: this.alertClass.end_scale
      }, {
        easing: this.alertClass.easingFunc
      }).start();
    }
  },
  close_handle: function () {
    var e = this;
    if (this.scale_Type === n.弹窗) {
      this.node.scale = this.alertClass.end_scale;
      SoundMgr.playEffect("audio_btn");
      cc.tween(this.node).to(this.alertClass.time, {
        scale: this.alertClass.start_scale
      }, {
        easing: this.alertClass.easingFunc
      }).call(function () {
        e.node.parent.removeFromParent();
      }).start();
    } else {
      console.warn("不是弹窗类型 , 关闭方法不可用");
    }
  }
});
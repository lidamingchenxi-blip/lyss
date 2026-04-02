function n(e, i) {
  if (!(e instanceof i)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function t(e, i) {
  for (var a = 0; a < i.length; a++) {
    var n = i[a];
    n.enumerable = n.enumerable || false;
    n.configurable = true;
    "value" in n && (n.writable = true);
    Object.defineProperty(e, n.key, n);
  }
}
function o(e, i, a) {
  i && t(e.prototype, i);
  a && t(e, a);
  return e;
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.youjia = undefined;
var exp_youjia = function () {
  function _ctor() {
    n(this, _ctor);
    this.video_success = null;
    this.video_failure = null;
    console.log("初始化4399游戏平台");
  }
  o(_ctor, [{
    key: "showVideo",
    value: function (e, i) {
      var a = this;
      cc.director.pause();
      cc.audioEngine.setEffectsVolume(0);
      cc.audioEngine.setMusicVolume(0);
      this.video_success = e;
      this.video_failure = i;
      window.h5api.canPlayAd(function (e) {
        window.h5api.playAd(function (e) {
          if (1e4 === e.code) {
            console.log("开始播放");
          } else if (10001 === e.code) {
            console.log("播放结束");
            cc.director.resume();
            cc.audioEngine.setEffectsVolume(1);
            cc.audioEngine.setMusicVolume(1);
            a.video_success && a.video_success();
          } else {
            console.log("广告异常");
            cc.director.resume();
            cc.audioEngine.setEffectsVolume(1);
            cc.audioEngine.setMusicVolume(1);
            a.video_failure && a.video_failure();
          }
        });
      });
    }
  }]);
  return _ctor;
}();
exports.youjia = exp_youjia;
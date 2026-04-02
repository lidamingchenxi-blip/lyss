window.music = {
  api_audioPlay: function (e) {
    var i = arguments.length > 1 && undefined !== arguments[1] && arguments[1];
    cc.loader.loadRes(e, cc.AudioClip, function (e, a) {
      if (e) {
        console.log("load error => " + e);
      } else {
        cc.audioEngine.playEffect(a, i, 20);
      }
    }.bind(this));
  },
  BGMusic: function (e) {
    this.playAudioClip(e);
  },
  playAudioClip: function (e) {
    var i = !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1];
    cc.loader.loadRes(e, cc.AudioClip, function (e, a) {
      if (e) {
        console.log("load error => " + e);
      } else {
        cc.audioEngine.stopAll();
        cc.audioEngine.play(a, i, .35);
      }
    }.bind(this));
  },
  mp3shezhi: function () {
    this.playAudioClip("music/bgm");
  }
};
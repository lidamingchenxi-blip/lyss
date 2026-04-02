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
var s = function () {
  function e() {
    n(this, e);
  }
  o(e, [{
    key: "getRandomNum",
    value: function (e, i) {
      var a = i - e;
      var n = Math.random();
      return e + Math.round(n * a);
    }
  }, {
    key: "getTwoVectorDegree",
    value: function (e, i) {
      var a = i.x - e.x;
      var n = i.y - e.y;
      var t = Math.atan2(n, a);
      return cc.misc.radiansToDegrees(t) - 90;
    }
  }, {
    key: "rotationTarget",
    value: function (e, i) {
      var a = i.sub(e).normalize();
      return -(cc.v2(a).signAngle(cc.v2(1, 0)) / Math.PI * 180 + 90);
    }
  }, {
    key: "_getDistance",
    value: function (e, i) {
      return Math.sqrt(Math.pow(e.x - i.x, 2) + Math.pow(e.y - i.y, 2));
    }
  }, {
    key: "getMoveVector",
    value: function (e, i) {
      var a = cc.misc.degreesToRadians(e);
      var n = cc.v2();
      n.x = -Math.sin(a) * i;
      n.y = Math.cos(a) * i;
      return n;
    }
  }, {
    key: "getYearDay",
    value: function (e) {
      var i = new Date().getFullYear().toString();
      var a = new Date() - new Date(i);
      var n = Math.ceil(a / 864e5) + 1;
      console.log("今天是%s年中的第%s天", i, n);
      return n >= e;
    }
  }]);
  return e;
}();
var c = function () {
  function e() {
    n(this, e);
    this.soundList = [];
    this.soundPathList = [];
  }
  o(e, [{
    key: "registerSoundPath",
    value: function (e) {
      this.soundPathList = e;
    }
  }, {
    key: "playMusic",
    value: function (e) {
      var i = this;
      var a = function (e) {
        return cc.audioEngine.playMusic(e, true);
      };
      for (var n = 0; n < this.soundList.length; n++) {
        var t = this.soundList[n];
        if (t.name === e) {
          return a(t);
        }
      }
      for (var o = 0; o < this.soundPathList.length; o++) {
        var s = this.soundPathList[o];
        if (s.indexOf(e) >= 0) {
          cc.loader.loadRes(s, cc.AudioClip, function (e, n) {
            i.soundList.push(n);
            return a(n);
          });
          break;
        }
      }
    }
  }, {
    key: "stopMusic",
    value: function () {
      cc.audioEngine.stopMusic();
    }
  }, {
    key: "playEffect",
    value: function (e) {
      var i = this;
      var a = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : null;
      var n = function (e) {
        var i = cc.audioEngine.playEffect(e, false);
        a && cc.audioEngine.setFinishCallback(i, a);
        return i;
      };
      for (var t = 0; t < this.soundList.length; t++) {
        var o = this.soundList[t];
        if (o.name === e) {
          return n(o);
        }
      }
      for (var s = 0; s < this.soundPathList.length; s++) {
        var c = this.soundPathList[s];
        if (c.indexOf(e) >= 0) {
          cc.loader.loadRes(c, cc.AudioClip, function (e, a) {
            i.soundList.push(a);
            return n(a);
          });
          break;
        }
      }
    }
  }]);
  return e;
}();
var r = function () {
  function e() {
    n(this, e);
    this.frameList = [];
    this.framePathList = [];
    this.textureList = [];
    this.texturePathList = [];
    this.prefabList = [];
    this.prefabPathList = [];
  }
  o(e, [{
    key: "registerSpriteFramePath",
    value: function (e) {
      this.framePathList = e;
    }
  }, {
    key: "registerTexturePath",
    value: function (e) {
      this.texturePathList = e;
    }
  }, {
    key: "registerPrefabPath",
    value: function (e) {
      this.prefabPathList = e;
    }
  }, {
    key: "setSpriteFrameByName",
    value: function (e, i, a) {
      var n = this;
      if (e instanceof cc.Sprite) {
        var t = false;
        for (var o = 0; o < this.frameList.length; o++) {
          var s = this.frameList[o];
          if (s.name === i) {
            e.spriteFrame = s;
            a && a();
            return t = true;
          }
        }
        for (var c = 0; c < this.framePathList.length; c++) {
          var r = this.framePathList[c];
          var u = r.split("/");
          if (u[u.length - 1] === i) {
            cc.loader.loadRes(r, cc.SpriteFrame, function (i, t) {
              n.frameList.push(t);
              e.spriteFrame = t;
              a && a();
            });
            return t = true;
          }
        }
        return t;
      }
      console.warn("无效的Sprite类型");
    }
  }, {
    key: "setSpriteFrameByTexture",
    value: function (e, i, a) {
      var n = this;
      if (e instanceof cc.Sprite) {
        for (var t = 0; t < this.textureList.length; t++) {
          var o = this.textureList[t];
          if (o.name === "".concat(i, ".plist")) {
            return void (e.spriteFrame = o.getSpriteFrame(a));
          }
        }
        for (var s = 0; s < this.texturePathList.length; s++) {
          var c = this.texturePathList[s];
          if (c.indexOf(i) >= 0) {
            cc.loader.loadRes(c, cc.SpriteAtlas, function (i, t) {
              n.textureList.push(t);
              e.spriteFrame = t.getSpriteFrame(a);
            });
            break;
          }
        }
      } else {
        console.warn("无效的Sprite类型");
      }
    }
  }, {
    key: "createPrefabByName",
    value: function (e, i) {
      var a = this;
      for (var n = 0; n < this.prefabList.length; n++) {
        var t = this.prefabList[n];
        if (t.name === e) {
          return void (i && i(t));
        }
      }
      for (var o = 0; o < this.prefabPathList.length; o++) {
        var s = this.prefabPathList[o];
        var c = s.split("/");
        if ((c = c[c.length - 1]) === e) {
          cc.loader.loadRes(s, cc.Prefab, function (e, n) {
            a.prefabList.push(n);
            i && i(n);
          });
          break;
        }
      }
    }
  }, {
    key: "setDragonBones",
    value: function (e, i, a) {
      var n = e.getComponent(dragonBones.ArmatureDisplay);
      var t = "App/Skeleton/person/gq_" + i + "/gq_" + i + "_" + a + "_ske";
      var o = "App/Skeleton/person/gq_" + i + "/gq_" + i + "_" + a + "_tex";
      cc.loader.loadRes(o, dragonBones.DragonBonesAtlasAsset, function (e, o) {
        if (e) {
          console.log("err=", e);
        } else {
          n.dragonAtlasAsset = o;
          cc.loader.loadRes(t, dragonBones.DragonBonesAsset, function (e, t) {
            if (e) {
              console.log("err=", e);
            } else {
              n.dragonAsset = t;
              n.armatureName = "gq_" + i + "_" + a;
              n.playAnimation("donghua", 1);
            }
          });
        }
      });
    }
  }]);
  return e;
}();
var u = function () {
  function e() {
    n(this, e);
  }
  o(e, [{
    key: "clickStartMoveEnd",
    value: function (e) {
      var i = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : null;
      var a = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : null;
      var n = arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : null;
      var t = function (e) {
        n && n(e);
      };
      e.on(cc.Node.EventType.TOUCH_START, function (e) {
        if (i) {
          SoundMgr.playEffect("button");
          i(e);
        }
      }, this);
      e.on(cc.Node.EventType.TOUCH_MOVE, function (e) {
        a && a(e);
      }, this);
      e.on(cc.Node.EventType.TOUCH_END, t, this);
      e.on(cc.Node.EventType.TOUCH_CANCEL, t, this);
    }
  }]);
  return e;
}();
var h = function () {
  function e() {
    n(this, e);
  }
  o(e, [{
    key: "localConvertWorldPointAR",
    value: function (e) {
      if (e) {
        return e.convertToWorldSpaceAR(cc.v2(0, 0));
      } else {
        return null;
      }
    }
  }, {
    key: "localConvertWorldPoint",
    value: function (e) {
      if (e) {
        return e.convertToWorldSpace(cc.v2(0, 0));
      } else {
        return null;
      }
    }
  }, {
    key: "worldConvertLocalPointAR",
    value: function (e, i) {
      if (e) {
        return e.convertToNodeSpaceAR(i);
      } else {
        return null;
      }
    }
  }, {
    key: "worldConvertLocalPoint",
    value: function (e, i) {
      if (e) {
        return e.convertToNodeSpace(i);
      } else {
        return null;
      }
    }
  }, {
    key: "convertOtherNodeSpace",
    value: function (e, i) {
      if (!e || !i) {
        return null;
      }
      var a = this.localConvertWorldPoint(e);
      return this.worldConvertLocalPoint(i, a);
    }
  }, {
    key: "convertOtherNodeSpaceAR",
    value: function (e, i) {
      if (!e || !i) {
        return null;
      }
      var a = this.localConvertWorldPointAR(e);
      return this.worldConvertLocalPointAR(i, a);
    }
  }]);
  return e;
}();
var g = function () {
  function e() {
    n(this, e);
  }
  o(e, [{
    key: "getExtensionName",
    value: function (e) {
      var i = e.lastIndexOf(".");
      return e.substr(i + 1);
    }
  }]);
  return e;
}();
window.AssMgr = new r();
window.SoundMgr = new c();
window.MathMgr = new s();
window.MouseMgr = new u();
window.PosSwitchMgr = new h();
window.StringMgr = new g();
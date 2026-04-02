cc.Class({
  extends: cc.Component,
  properties: {
    active: {
      default: true,
      tooltip: "是否启用物理引擎"
    },
    aabb: {
      default: true,
      tooltip: "是否显示包围盒"
    },
    pair: {
      default: true
    },
    centerOfMass: {
      default: true,
      tooltip: "是否显示中心点"
    },
    joint: {
      default: true,
      tooltip: "是否显示关节连接线"
    },
    shape: {
      default: true,
      tooltip: "是否填充形状"
    },
    gravity: {
      default: cc.v2(0, -0),
      tooltip: "重力"
    }
  },
  onEnable: function () {
    console.log("开启或关闭物理系统onEnable");
    var e = cc.director.getPhysicsManager();
    e.enabled && this.active && cc.warn("The physical system is enabled！");
    e.enabled = this.active;
    if (this.active) {
      e.gravity = this.gravity;
      cc.PhysicsManager.DrawBits;
      e.debugDrawFlags = 0;
    }
  },
  onDisable: function () {
    console.log("关闭onDisable");
    var e = cc.director.getPhysicsManager();
    e.debugDrawFlags = 0;
    e.enabled = false;
  }
});
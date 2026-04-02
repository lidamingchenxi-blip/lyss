window.Axunlu = {
  searchRoad: function (e, i, a, n, t) {
    function o(e, i) {
      return i.F - e.F;
    }
    function s(e) {
      var i = e.x;
      var a = e.y;
      return [{
        x: i,
        y: a - 1
      }, {
        x: i + 1,
        y: a
      }, {
        x: i,
        y: a + 1
      }, {
        x: i - 1,
        y: a
      }];
    }
    function c(e, i) {
      for (var a in i) {
        if (e.x === i[a].x && e.y === i[a].y) {
          return a;
        }
      }
      return false;
    }
    if (4 == MainDate.GameType || 7 == MainDate.GameType || 8 == MainDate.GameType) {
      e = {
        rows: 20,
        cols: 9,
        arr: e
      };
    } else {
      1 != MainDate.GameType && 2 != MainDate.GameType && 3 != MainDate.GameType && 5 != MainDate.GameType || (e = {
        rows: 50,
        cols: 50,
        arr: e
      });
    }
    var r;
    var u = [];
    var h = [];
    var g = [];
    u.push({
      x: i,
      y: a,
      G: 0
    });
    do {
      var d = u.pop();
      h.push(d);
      var m = s(d);
      for (var l in m) {
        var p = m[l];
        if (p.x >= 0 && p.y >= 0 && p.x < e.rows && p.y < e.cols && 1 === e.arr[p.x][p.y] && !c(p, h) && 0 !== e.arr[p.x][d.y] && 0 !== e.arr[d.x][p.y]) {
          var y = d.G + ((d.x - p.x) * (d.y - p.y) == 0 ? 10 : 14);
          if (c(p, u)) {
            var f = c(p, u);
            if (y < u[f].G) {
              u[f].parent = d;
              u[f].G = y;
              u[f].F = y + u[f].H;
            }
          } else {
            p.H = 10 * Math.abs(n - p.x) + 10 * Math.abs(t - p.y);
            p.G = y;
            p.F = p.H + p.G;
            p.parent = d;
            u.push(p);
          }
        }
      }
      if (0 === u.length) {
        break;
      }
      u.sort(o);
    } while (!(r = c({
      x: n,
      y: t
    }, u)));
    if (r) {
      var j = u[r];
      do {
        g.unshift({
          x: j.x,
          y: j.y
        });
        j = j.parent;
      } while (j.x != i || j.y != a);
    } else {
      g = [];
    }
    return g.reverse();
  }
};
// Generated by CoffeeScript 1.3.3
(function() {
  $(function() {
    var e, t, n, r, i, s, o, u, a;
    r = 1;
    s = 50;
    e = 4;
    n = $("#gridster ul");
    while (r <= s) {
      t = Math.floor(Math.random() * e) + 1;
      o = Math.floor(Math.random() * (s / e)) + 1;
      u = Math.floor(Math.random() * 2) + 1;
      a = Math.floor(Math.random() * 2) + 1;
      i = $("<li>", {
        "data-row": o,
        "data-col": t,
        "data-sizex": u,
        "data-sizey": a
      }).appendTo(n);
      r++;
    }
    return n.gridster({
      widget_margins: [ 10, 10 ],
      widget_base_dimensions: [ 100, 100 ]
    });
  });
}).call(this);
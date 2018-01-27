/* -- FILE: [javascripts/jQuery.marquee.min.js]*/
(function(f) {
  f.fn.marquee = function(x) {
    return this.each(function() {
      var a = f.extend({}, f.fn
          .marquee.defaults, x),
        b = f(this),
        c, h, t, u, k, e = 3,
        y =
        "animation-play-state",
        n = !1,
        E = function(a, b, c) {
          for (var e = [
              "webkit", "moz",
              "MS", "o", ""
            ], d = 0; d < e.length; d++)
            e[d] || (b = b.toLowerCase()),
            a.addEventListener(
              e[d] + b, c, !1)
        },
        F = function(a) {
          var b = [],
            c;
          for (c in a) a.hasOwnProperty(
            c) && b.push(c +
            ":" + a[c]);
          b.push();
          return "{" + b.join(
            ",") + "}"
        },
        p = {
          pause: function() {
            n && a.allowCss3Support ?
              c.css(y,
                "paused") : f
              .fn.pause && c.pause();
            b.data(
              "runningStatus",
              "paused");
            b.trigger(
              "paused")
          },
          resume: function() {
            n && a.allowCss3Support ?
              c.css(y,
                "running") :
              f.fn.resume &&
              c.resume();
            b.data(
              "runningStatus",
              "resumed");
            b.trigger(
              "resumed")
          },
          toggle: function() {
            p["resumed" == b.data(
                "runningStatus"
              ) ? "pause" :
              "resume"]()
          },
          destroy: function() {
            clearTimeout(b.timer);
            b.find("*").andSelf()
              .unbind();
            b.html(b.find(
              ".js-marquee:first"
            ).html())
          }
        };
      if ("string" === typeof x)
        f.isFunction(p[x]) && (
          c || (c = b.find(
            ".js-marquee-wrapper"
          )), !0 === b.data(
            "css3AnimationIsSupported"
          ) && (n = !0), p[x]()
        );
      else {
        var v;
        f.each(a, function(c, d) {
          v = b.attr(
            "data-" + c);
          if ("undefined" !==
            typeof v) {
            switch (v) {
              case "true":
                v = !0;
                break;
              case "false":
                v = !1
            }
            a[c] = v
          }
        });
        a.speed && (a.duration =
          a.speed * parseInt(
            b.width(), 10));
        u = "up" == a.direction ||
          "down" == a.direction;
        a.gap = a.duplicated ?
          parseInt(a.gap) : 0;
        b.wrapInner(
          '<div class="js-marquee"></div>'
        );
        var l = b.find(
          ".js-marquee").css({
          "margin-right": a
            .gap,
          "float": "left"
        });
        a.duplicated && l.clone(!
          0).appendTo(b);
        b.wrapInner(
          '<div style="width:100000px" class="js-marquee-wrapper"></div>'
        );
        c = b.find(
          ".js-marquee-wrapper"
        );
        if (u) {
          var m = b.height();
          c.removeAttr("style");
          b.height(m);
          b.find(".js-marquee")
            .css({
              "float": "none",
              "margin-bottom": a
                .gap,
              "margin-right": 0
            });
          a.duplicated && b.find(
            ".js-marquee:last"
          ).css({
            "margin-bottom": 0
          });
          var q = b.find(
            ".js-marquee:first"
          ).height() + a.gap;
          a.startVisible && !a.duplicated ?
            (a._completeDuration =
              (parseInt(q, 10) +
                parseInt(m, 10)
              ) / parseInt(m,
                10) * a.duration,
              a.duration *=
              parseInt(q, 10) /
              parseInt(m, 10)) :
            a.duration *= (
              parseInt(q, 10) +
              parseInt(m, 10)) /
            parseInt(m, 10)
        } else k = b.find(
            ".js-marquee:first"
          ).width() +
          a.gap, h = b.width(),
          a.startVisible && !a.duplicated ?
          (a._completeDuration =
            (parseInt(k, 10) +
              parseInt(h, 10)) /
            parseInt(h, 10) * a
            .duration, a.duration *=
            parseInt(k, 10) /
            parseInt(h, 10)) :
          a.duration *= (
            parseInt(k, 10) +
            parseInt(h, 10)) /
          parseInt(h, 10);
        a.duplicated && (a.duration /=
          2);
        if (a.allowCss3Support) {
          var l = document.body ||
            document.createElement(
              "div"),
            g =
            "marqueeAnimation-" +
            Math.floor(1E7 *
              Math.random()),
            A = ["Webkit",
              "Moz", "O", "ms",
              "Khtml"
            ],
            B = "animation",
            d = "",
            r = "";
          l.style.animation &&
            (r = "@keyframes " +
              g + " ", n = !0);
          if (!1 === n)
            for (var z = 0; z <
              A.length; z++)
              if (void 0 !== l.style[
                  A[z] +
                  "AnimationName"
                ]) {
                l = "-" + A[z].toLowerCase() +
                  "-";
                B = l + B;
                y = l + y;
                r = "@" + l +
                  "keyframes " +
                  g + " ";
                n = !0;
                break
              }
          n && (d = g + " " + a
            .duration / 1E3 +
            "s " + a.delayBeforeStart /
            1E3 +
            "s infinite " + a
            .css3easing, b.data(
              "css3AnimationIsSupported", !
              0))
        }
        var C = function() {
            c.css("margin-top",
              "up" == a.direction ?
              m + "px" : "-" +
              q + "px")
          },
          D = function() {
            c.css("margin-left",
              "left" == a.direction ?
              h + "px" : "-" +
              k + "px")
          };
        a.duplicated ? (u ? a.startVisible ?
            c.css("margin-top",
              0) : c.css(
              "margin-top",
              "up" == a.direction ?
              m + "px" : "-" +
              (2 * q - a.gap) +
              "px") : a.startVisible ?
            c.css("margin-left",
              0) : c.css(
              "margin-left",
              "left" == a.direction ?
              h + "px" : "-" +
              (2 * k - a.gap) +
              "px"), a.startVisible ||
            (e = 1)) : a.startVisible ?
          e = 2 : u ? C() : D();
        var w = function() {
          a.duplicated && (1 ===
            e ? (a._originalDuration =
              a.duration, a
              .duration = u ?
              "up" == a.direction ?
              a.duration +
              m / (q / a.duration) :
              2 * a.duration :
              "left" == a.direction ?
              a.duration +
              h / (k / a.duration) :
              2 * a.duration,
              d && (d = g +
                " " + a.duration /
                1E3 + "s " +
                a.delayBeforeStart /
                1E3 + "s " +
                a.css3easing
              ), e++) : 2 ===
            e && (a.duration =
              a._originalDuration,
              d && (g +=
                "0", r = f.trim(
                  r) + "0 ",
                d = g + " " +
                a.duration /
                1E3 +
                "s 0s infinite " +
                a.css3easing
              ), e++));
          u ? a.duplicated ?
            (2 < e && c.css(
              "margin-top",
              "up" == a.direction ?
              0 : "-" + q +
              "px"), t = {
              "margin-top": "up" ==
                a.direction ?
                "-" + q +
                "px" : 0
            }) : a.startVisible ?
            2 === e ? (d && (
                d = g + " " +
                a.duration /
                1E3 + "s " +
                a.delayBeforeStart /
                1E3 + "s " +
                a.css3easing),
              t = {
                "margin-top": "up" ==
                  a.direction ?
                  "-" + q +
                  "px" : m +
                  "px"
              }, e++) : 3 ===
            e && (a.duration =
              a._completeDuration,
              d && (g += "0",
                r = f.trim(r) +
                "0 ", d = g +
                " " + a.duration /
                1E3 +
                "s 0s infinite " +
                a.css3easing),
              C()) : (C(), t = {
              "margin-top": "up" ==
                a.direction ?
                "-" + c.height() +
                "px" : m +
                "px"
            }) : a.duplicated ?
            (2 < e && c.css(
              "margin-left",
              "left" == a.direction ?
              0 : "-" + k +
              "px"), t = {
              "margin-left": "left" ==
                a.direction ?
                "-" + k +
                "px" : 0
            }) : a.startVisible ?
            2 === e ? (d && (
                d = g + " " +
                a.duration /
                1E3 + "s " +
                a.delayBeforeStart /
                1E3 + "s " +
                a.css3easing),
              t = {
                "margin-left": "left" ==
                  a.direction ?
                  "-" + k +
                  "px" : h +
                  "px"
              }, e++) : 3 ===
            e && (a.duration =
              a._completeDuration,
              d && (g += "0",
                r = f.trim(r) +
                "0 ", d = g +
                " " + a.duration /
                1E3 +
                "s 0s infinite " +
                a.css3easing),
              D()) : (D(), t = {
              "margin-left": "left" ==
                a.direction ?
                "-" + k +
                "px" : h +
                "px"
            });
          b.trigger(
            "beforeStarting"
          );
          if (n) {
            c.css(B, d);
            var l = r +
              " { 100%  " + F(
                t) + "}",
              p = c.find(
                "style");
            0 !== p.length ?
              p.filter(
                ":last").html(
                l) : c.append(
                "<style>" + l +
                "</style>");
            E(c[0],
              "AnimationIteration",
              function() {
                b.trigger(
                  "finished"
                )
              });
            E(c[0],
              "AnimationEnd",
              function() {
                w();
                b.trigger(
                  "finished"
                )
              })
          } else c.animate(t,
            a.duration, a.easing,
            function() {
              b.trigger(
                "finished"
              );
              a.pauseOnCycle ?
                b.timer =
                setTimeout(
                  w, a.delayBeforeStart
                ) : w()
            });
          b.data(
            "runningStatus",
            "resumed")
        };
        b.bind("pause", p.pause);
        b.bind("resume", p.resume);
        a.pauseOnHover && b.bind(
          "mouseenter mouseleave",
          p.toggle);
        n && a.allowCss3Support ?
          w() : b.timer =
          setTimeout(w, a.delayBeforeStart)
      }
    })
  };
  f.fn.marquee.defaults = {
    allowCss3Support: !0,
    css3easing: "linear",
    easing: "linear",
    delayBeforeStart: 1E3,
    direction: "left",
    duplicated: !1,
    duration: 5E3,
    gap: 20,
    pauseOnCycle: !1,
    pauseOnHover: !1,
    startVisible: !1
  }
})(jQuery);

/* -- FILE: [javascripts/jQuery.waypoints.min.js]*/
/*!
jQuery Waypoints - v2.0.5
Copyright (c) 2011-2014 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function() {
  var t = [].indexOf || function(t) {
      for (var e = 0, n = this.length; e <
        n; e++) {
        if (e in this && this[e] ===
          t) return e
      }
      return -1
    },
    e = [].slice;
  (function(t, e) {
    if (typeof define ===
      "function" && define.amd) {
      return define("waypoints", [
        "jquery"
      ], function(n) {
        return e(n, t)
      })
    } else {
      return e(t.jQuery, t)
    }
  })(window, function(n, r) {
    var i, o, l, s, f, u, c, a, h,
      d, p, y, v, w, g, m;
    i = n(r);
    a = t.call(r, "ontouchstart") >=
      0;
    s = {
      horizontal: {},
      vertical: {}
    };
    f = 1;
    c = {};
    u = "waypoints-context-id";
    p = "resize.waypoints";
    y = "scroll.waypoints";
    v = 1;
    w = "waypoints-waypoint-ids";
    g = "waypoint";
    m = "waypoints";
    o = function() {
      function t(t) {
        var e = this;
        this.$element = t;
        this.element = t[0];
        this.didResize = false;
        this.didScroll = false;
        this.id = "context" + f++;
        this.oldScroll = {
          x: t.scrollLeft(),
          y: t.scrollTop()
        };
        this.waypoints = {
          horizontal: {},
          vertical: {}
        };
        this.element[u] = this.id;
        c[this.id] = this;
        t.bind(y, function() {
          var t;
          if (!(e.didScroll ||
              a)) {
            e.didScroll =
              true;
            t = function() {
              e.doScroll();
              return e.didScroll =
                false
            };
            return r.setTimeout(
              t, n[m].settings
              .scrollThrottle
            )
          }
        });
        t.bind(p, function() {
          var t;
          if (!e.didResize) {
            e.didResize =
              true;
            t = function() {
              n[m](
                "refresh"
              );
              return e.didResize =
                false
            };
            return r.setTimeout(
              t, n[m].settings
              .resizeThrottle
            )
          }
        })
      }
      t.prototype.doScroll =
        function() {
          var t, e = this;
          t = {
            horizontal: {
              newScroll: this.$element
                .scrollLeft(),
              oldScroll: this.oldScroll
                .x,
              forward: "right",
              backward: "left"
            },
            vertical: {
              newScroll: this.$element
                .scrollTop(),
              oldScroll: this.oldScroll
                .y,
              forward: "down",
              backward: "up"
            }
          };
          if (a && (!t.vertical.oldScroll ||
              !t.vertical.newScroll
            )) {
            n[m]("refresh")
          }
          n.each(t, function(t, r) {
            var i, o, l;
            l = [];
            o = r.newScroll >
              r.oldScroll;
            i = o ? r.forward :
              r.backward;
            n.each(e.waypoints[
                t],
              function(t, e) {
                var n, i;
                if (r.oldScroll <
                  (n = e.offset) &&
                  n <= r.newScroll
                ) {
                  return l.push(
                    e)
                } else if (
                  r.newScroll <
                  (i = e.offset) &&
                  i <= r.oldScroll
                ) {
                  return l.push(
                    e)
                }
              });
            l.sort(function(t,
              e) {
              return t.offset -
                e.offset
            });
            if (!o) {
              l.reverse()
            }
            return n.each(l,
              function(t, e) {
                if (e.options
                  .continuous ||
                  t === l.length -
                  1) {
                  return e.trigger(
                    [i])
                }
              })
          });
          return this.oldScroll = {
            x: t.horizontal.newScroll,
            y: t.vertical.newScroll
          }
        };
      t.prototype.refresh =
        function() {
          var t, e, r, i = this;
          r = n.isWindow(this.element);
          e = this.$element.offset();
          this.doScroll();
          t = {
            horizontal: {
              contextOffset: r ?
                0 : e.left,
              contextScroll: r ?
                0 : this.oldScroll
                .x,
              contextDimension: this
                .$element.width(),
              oldScroll: this.oldScroll
                .x,
              forward: "right",
              backward: "left",
              offsetProp: "left"
            },
            vertical: {
              contextOffset: r ?
                0 : e.top,
              contextScroll: r ?
                0 : this.oldScroll
                .y,
              contextDimension: r ?
                n[m](
                  "viewportHeight"
                ) : this.$element
                .height(),
              oldScroll: this.oldScroll
                .y,
              forward: "down",
              backward: "up",
              offsetProp: "top"
            }
          };
          return n.each(t,
            function(t, e) {
              return n.each(i.waypoints[
                  t],
                function(t, r) {
                  var i, o, l,
                    s, f;
                  i = r.options
                    .offset;
                  l = r.offset;
                  o = n.isWindow(
                      r.element
                    ) ? 0 : r
                    .$element
                    .offset()[
                      e.offsetProp
                    ];
                  if (n.isFunction(
                      i)) {
                    i = i.apply(
                      r.element
                    )
                  } else if (
                    typeof i ===
                    "string") {
                    i =
                      parseFloat(
                        i);
                    if (r.options
                      .offset
                      .indexOf(
                        "%") >
                      -1) {
                      i =
                        Math.ceil(
                          e.contextDimension *
                          i /
                          100
                        )
                    }
                  }
                  r.offset =
                    o - e.contextOffset +
                    e.contextScroll -
                    i;
                  if (r.options
                    .onlyOnScroll &&
                    l != null ||
                    !r.enabled
                  ) {
                    return
                  }
                  if (l !==
                    null && l <
                    (s = e.oldScroll) &&
                    s <= r.offset
                  ) {
                    return r.trigger(
                      [e.backward]
                    )
                  } else if (
                    l !==
                    null && l >
                    (f = e.oldScroll) &&
                    f >= r.offset
                  ) {
                    return r.trigger(
                      [e.forward]
                    )
                  } else if (
                    l ===
                    null && e
                    .oldScroll >=
                    r.offset) {
                    return r.trigger(
                      [e.forward]
                    )
                  }
                })
            })
        };
      t.prototype.checkEmpty =
        function() {
          if (n.isEmptyObject(
              this.waypoints.horizontal
            ) && n.isEmptyObject(
              this.waypoints.vertical
            )) {
            this.$element.unbind(
              [p, y].join(" "));
            return delete c[this.id]
          }
        };
      return t
    }();
    l = function() {
      function t(t, e, r) {
        var i, o;
        if (r.offset ===
          "bottom-in-view") {
          r.offset = function() {
            var t;
            t = n[m](
              "viewportHeight"
            );
            if (!n.isWindow(e.element)) {
              t = e.$element.height()
            }
            return t - n(this).outerHeight()
          }
        }
        this.$element = t;
        this.element = t[0];
        this.axis = r.horizontal ?
          "horizontal" :
          "vertical";
        this.callback = r.handler;
        this.context = e;
        this.enabled = r.enabled;
        this.id = "waypoints" + v++;
        this.offset = null;
        this.options = r;
        e.waypoints[this.axis][
          this.id
        ] = this;
        s[this.axis][this.id] =
          this;
        i = (o = this.element[w]) !=
          null ? o : [];
        i.push(this.id);
        this.element[w] = i
      }
      t.prototype.trigger =
        function(t) {
          if (!this.enabled) {
            return
          }
          if (this.callback !=
            null) {
            this.callback.apply(
              this.element, t)
          }
          if (this.options.triggerOnce) {
            return this.destroy()
          }
        };
      t.prototype.disable =
        function() {
          return this.enabled =
            false
        };
      t.prototype.enable =
        function() {
          this.context.refresh();
          return this.enabled =
            true
        };
      t.prototype.destroy =
        function() {
          delete s[this.axis][
            this.id
          ];
          delete this.context.waypoints[
            this.axis][this.id];
          return this.context.checkEmpty()
        };
      t.getWaypointsByElement =
        function(t) {
          var e, r;
          r = t[w];
          if (!r) {
            return []
          }
          e = n.extend({}, s.horizontal,
            s.vertical);
          return n.map(r,
            function(t) {
              return e[t]
            })
        };
      return t
    }();
    d = {
      init: function(t, e) {
        var r;
        e = n.extend({}, n.fn[g]
          .defaults, e);
        if ((r = e.handler) ==
          null) {
          e.handler = t
        }
        this.each(function() {
          var t, r, i, s;
          t = n(this);
          i = (s = e.context) !=
            null ? s : n.fn[
              g].defaults.context;
          if (!n.isWindow(i)) {
            i = t.closest(i)
          }
          i = n(i);
          r = c[i[0][u]];
          if (!r) {
            r = new o(i)
          }
          return new l(t, r,
            e)
        });
        n[m]("refresh");
        return this
      },
      disable: function() {
        return d._invoke.call(
          this, "disable")
      },
      enable: function() {
        return d._invoke.call(
          this, "enable")
      },
      destroy: function() {
        return d._invoke.call(
          this, "destroy")
      },
      prev: function(t, e) {
        return d._traverse.call(
          this, t, e,
          function(t, e, n) {
            if (e > 0) {
              return t.push(n[
                e - 1])
            }
          })
      },
      next: function(t, e) {
        return d._traverse.call(
          this, t, e,
          function(t, e, n) {
            if (e < n.length -
              1) {
              return t.push(n[
                e + 1])
            }
          })
      },
      _traverse: function(t, e, i) {
        var o, l;
        if (t == null) {
          t = "vertical"
        }
        if (e == null) {
          e = r
        }
        l = h.aggregate(e);
        o = [];
        this.each(function() {
          var e;
          e = n.inArray(
            this, l[t]);
          return i(o, e, l[
            t])
        });
        return this.pushStack(o)
      },
      _invoke: function(t) {
        this.each(function() {
          var e;
          e = l.getWaypointsByElement(
            this);
          return n.each(e,
            function(e, n) {
              n[t]();
              return true
            })
        });
        return this
      }
    };
    n.fn[g] = function() {
      var t, r;
      r = arguments[0], t = 2 <=
        arguments.length ? e.call(
          arguments, 1) : [];
      if (d[r]) {
        return d[r].apply(this, t)
      } else if (n.isFunction(r)) {
        return d.init.apply(this,
          arguments)
      } else if (n.isPlainObject(
          r)) {
        return d.init.apply(this, [
          null, r
        ])
      } else if (!r) {
        return n.error(
          "jQuery Waypoints needs a callback function or handler option."
        )
      } else {
        return n.error("The " + r +
          " method does not exist in jQuery Waypoints."
        )
      }
    };
    n.fn[g].defaults = {
      context: r,
      continuous: true,
      enabled: true,
      horizontal: false,
      offset: 0,
      triggerOnce: false
    };
    h = {
      refresh: function() {
        return n.each(c,
          function(t, e) {
            return e.refresh()
          })
      },
      viewportHeight: function() {
        var t;
        return (t = r.innerHeight) !=
          null ? t : i.height()
      },
      aggregate: function(t) {
        var e, r, i;
        e = s;
        if (t) {
          e = (i = c[n(t)[0][u]]) !=
            null ? i.waypoints :
            void 0
        }
        if (!e) {
          return []
        }
        r = {
          horizontal: [],
          vertical: []
        };
        n.each(r, function(t, i) {
          n.each(e[t],
            function(t, e) {
              return i.push(
                e)
            });
          i.sort(function(t,
            e) {
            return t.offset -
              e.offset
          });
          r[t] = n.map(i,
            function(t) {
              return t.element
            });
          return r[t] = n.unique(
            r[t])
        });
        return r
      },
      above: function(t) {
        if (t == null) {
          t = r
        }
        return h._filter(t,
          "vertical",
          function(t, e) {
            return e.offset <=
              t.oldScroll.y
          })
      },
      below: function(t) {
        if (t == null) {
          t = r
        }
        return h._filter(t,
          "vertical",
          function(t, e) {
            return e.offset >
              t.oldScroll.y
          })
      },
      left: function(t) {
        if (t == null) {
          t = r
        }
        return h._filter(t,
          "horizontal",
          function(t, e) {
            return e.offset <=
              t.oldScroll.x
          })
      },
      right: function(t) {
        if (t == null) {
          t = r
        }
        return h._filter(t,
          "horizontal",
          function(t, e) {
            return e.offset >
              t.oldScroll.x
          })
      },
      enable: function() {
        return h._invoke(
          "enable")
      },
      disable: function() {
        return h._invoke(
          "disable")
      },
      destroy: function() {
        return h._invoke(
          "destroy")
      },
      extendFn: function(t, e) {
        return d[t] = e
      },
      _invoke: function(t) {
        var e;
        e = n.extend({}, s.vertical,
          s.horizontal);
        return n.each(e,
          function(e, n) {
            n[t]();
            return true
          })
      },
      _filter: function(t, e, r) {
        var i, o;
        i = c[n(t)[0][u]];
        if (!i) {
          return []
        }
        o = [];
        n.each(i.waypoints[e],
          function(t, e) {
            if (r(i, e)) {
              return o.push(e)
            }
          });
        o.sort(function(t, e) {
          return t.offset -
            e.offset
        });
        return n.map(o,
          function(t) {
            return t.element
          })
      }
    };
    n[m] = function() {
      var t, n;
      n = arguments[0], t = 2 <=
        arguments.length ? e.call(
          arguments, 1) : [];
      if (h[n]) {
        return h[n].apply(null, t)
      } else {
        return h.aggregate.call(
          null, n)
      }
    };
    n[m].settings = {
      resizeThrottle: 100,
      scrollThrottle: 30
    };
    return i.on("load.waypoints",
      function() {
        return n[m]("refresh")
      })
  })
}).call(this);

/* -- FILE: [javascripts/standard.js]*/
$.urlParam = function(name) {
  var results = new RegExp('[\?&]' +
    name + '=([^&#]*)').exec(window
    .location.href);
  if (typeof results != 'undefined' &&
    results != null) {
    return results[1] || 0;
  }
}

function appendCss(cssPath) {
  var link = $("<link />", {
    rel: "stylesheet",
    type: "text/css",
    href: cssPath
  });
  $('head').append(link);
}
$(function() {
  var getUrlParam = $.urlParam(
    'tab');
  if (typeof getUrlParam !=
    'undefined') {
    var getUrlParamEl = $('body').find(
        '[data-tab="' + getUrlParam +
        '"]'),
      getUrlParamElBtn = $('body').find(
        '[data-tab-btn="' +
        getUrlParam + '"]');
    if (typeof getUrlParamEl !=
      'undefined') {
      var getUrlParamElHidden =
        getUrlParamEl.attr(
          'data-tab-hidden');
      if (typeof getUrlParamElHidden !=
        'undefined') {
        $('body').find(
          '[data-tab="' +
          getUrlParamElHidden +
          '"]').hide(0);
        $('[data-tab-btn]').each(
          function() {
            if ($(this).attr(
                'data-tab-btn') !=
              getUrlParam) {
              $(this).addClass($(
                this).attr(
                'data-tab-btn-toggleclass'
              ));
            }
          });
        getUrlParamElBtn.removeClass(
          getUrlParamElBtn.attr(
            'data-tab-btn-toggleclass'
          ));
      }
      if (typeof getUrlParamElBtn !=
        'undefined') {
        getUrlParamElBtn.removeClass(
          getUrlParamElBtn.attr(
            'data-tab-btn-toggleclass'
          ));
      }
      getUrlParamEl.fadeIn(300);
    }
  }
  t
  $('[data-tab-btn]').click(
    function(e) {
      var getDataBtnToggleClass =
        $(this).attr(
          'data-tab-btn-toggleclass'
        );
      if (typeof getDataBtnToggleClass !=
        'undefined') {
        $('[data-tab-btn]').each(
          function() {
            $(this).addClass(
              getDataBtnToggleClass
            );
          });
        $(this).removeClass(
          getDataBtnToggleClass
        );
      }
    });
  $('.bg-modal').click(function() {
    $('.modal-body .close').click();
  });
  if ($(window).outerWidth() < 1280) {
    $('#loader').remove();
    $('.op-0').css('opacity', 0);
  }
  $('#btn-icon-bar').click(function(
    e) {
    $(this).find(
      '.icon-bar-box').toggleClass(
      'opened');
    $('nav').toggleClass(
      'opened');
    e.preventDefault();
  });
  $(
    '#btn-icon-search, .search-box-close'
  ).click(function(e) {
    $('#search-box').fadeToggle(
      300, "linear");
    e.preventDefault();
  });
  $('#btn-icon-search').click(
    function() {
      $('#searchphrase').focus();
    });
  $('#fulltext').attr(
    'autocomplete', 'off');
  var oneSlider = ($(
      '.slider-image').children()
    .length < 2);
  var sliderImage = $(
    '.slider-image').bxSlider({
    auto: (!oneSlider),
    mode: 'horizontal',
    useCSS: false,
    easing: 'linear',
    speed: 600,
    pause: 6000,
    pager: (!oneSlider),
    video: true,
    onSlideAfter: function(
      $slideElement, oldIndex,
      newIndex) {
      $slideElement.parent().find(
        'iframe').removeAttr(
        'src').removeClass(
        'active');
      $('.play-button').show();
    }
  });
  $('body').on('click',
    '.play-button',
    function(e) {
      var actualVideo = $(this).parent()
        .parent().find('iframe'),
        actualVideoDataSrc =
        actualVideo.attr(
          'data-src') +
        '&autoplay=1';
      actualVideo.attr('src',
        actualVideoDataSrc).addClass(
        "active");
      $(this).hide();
      $(this).parent().parent().find(
        '.play-hide-after-click'
      ).next().attr({
        'width': $(this).parent()
          .parent().find(
            'img').outerWidth(),
        'height': $(this).parent()
          .parent().find(
            'img').outerHeight()
      });
      $(this).parent().parent().find(
        '.play-hide-after-click'
      ).hide();
      sliderImage.stopAuto();
    });
  $('.slider-text').bxSlider({
    mode: 'fade',
    useCSS: false,
    infiniteLoop: true,
    easing: 'linear',
    speed: 600,
    pause: 8000,
    pager: false,
    maxSlides: 3,
    auto: true
  });
  $('.slider-image-small').bxSlider({
    mode: 'fade',
    useCSS: false,
    infiniteLoop: true,
    easing: 'linear',
    speed: 600,
    pause: 6000,
    pager: false,
    auto: true,
    minSlides: 2,
    maxSlides: 3
  });
  $('.slider-image-small-2').bxSlider({
    mode: 'fade',
    useCSS: false,
    infiniteLoop: true,
    easing: 'linear',
    speed: 600,
    pause: 6000,
    pager: false,
    auto: true,
    minSlides: 2,
    maxSlides: 3,
    autoDelay: 2000
  });
  $('.slider-logo').bxSlider({
    mode: 'fade',
    useCSS: false,
    infiniteLoop: true,
    easing: 'linear',
    speed: 600,
    pause: 6000,
    pager: false,
    auto: true,
    minSlides: 4,
    maxSlides: 5,
    slideMargin: 10
  });
  $('.slider-image').each(function() {
    if ($(this).hasClass(
        'medium')) {
      $(this).closest(
        '.bx-wrapper').addClass(
        'h-75vh');
    }
  });
  $('.slider-image-small').each(
    function() {
      $(this).closest(
        '.bx-wrapper').addClass(
        'bx-wrapper-image-small'
      );
    });
  $('.slider-image-small-2').each(
    function() {
      $(this).closest(
        '.bx-wrapper').addClass(
        'bx-wrapper-image-small-2'
      );
    });
  $('.large-slider').each(function() {
    $(this).closest(
      '.bx-wrapper').addClass(
      'bx-wrapper-image-small-large'
    );
  });
  $('.slider-text').each(function() {
    $(this).closest(
      '.bx-wrapper').addClass(
      'bx-wrapper-text');
  });
  $('.slider-logo').each(function() {
    $(this).closest(
      '.bx-wrapper').addClass(
      'bx-wrapper-text');
  });
});
$(document).ajaxComplete(function() {
  $('.bx-clone iframe').removeAttr(
    'src');
});
$(window).load(function() {
  $('#loader').remove();
  $('.op-0').animate({
    'opacity': 1
  }, 500);
  $(
    'main > section:first-child > :first-child > .bx-wrapper, main > section:first-child > :first-child > .bx-wrapper .bx-viewport, main > #sub-nav:first-child + section > :first-child > .bx-wrapper, main > #sub-nav:first-child + section > :first-child > .bx-wrapper .bx-viewport, .image-cover'
  ).css({
    'max-height': $(window).outerHeight() -
      100
  });
  $('.slider-image li').each(
    function() {
      if (!$(this).hasClass(
          'loaded')) {
        var thisAttrSrc = $(this)
          .attr('data-src');
        $(this).css({
          'background': 'url(' +
            thisAttrSrc + ')'
        });
        $(this).addClass('loaded');
      }
    });
  $(
    '.slider-image-small li, .image-cover'
  ).each(function() {
    if (!$(this).hasClass(
        'loaded')) {
      var thisAttrSrc = $(this)
        .attr('data-src');
      $(this).css({
        'background': 'url(' +
          thisAttrSrc + ')'
      });
      $(this).addClass('loaded');
    }
  });
  $(
    '.slider-image-small-2 li, .image-cover'
  ).each(function() {
    if (!$(this).hasClass(
        'loaded')) {
      var thisAttrSrc = $(this)
        .attr('data-src');
      $(this).css({
        'background': 'url(' +
          thisAttrSrc + ')'
      });
      $(this).addClass('loaded');
    }
  });
  $('.slider-text li').each(
    function() {
      if (!$(this).hasClass(
          'loaded')) {
        var thisAttrSrc = $(this)
          .attr('data-src');
        if (typeof thisAttrSrc !==
          typeof undefined &&
          thisAttrSrc !== false) {
          $(this).css({
            'background': 'url(' +
              thisAttrSrc +
              ')'
          });
        }
        $(this).addClass('loaded');
      }
    });
  $('.slider-logo li').each(
    function() {
      if (!$(this).hasClass(
          'loaded')) {
        var thisAttrSrc = $(this)
          .attr('data-src');
        if (typeof thisAttrSrc !==
          typeof undefined &&
          thisAttrSrc !== false) {
          $(this).css({
            'background': 'url(' +
              thisAttrSrc +
              ')'
          });
        }
        $(this).addClass('loaded');
      }
    });
  // appendCss(
  //   'http://localhost/presisi_company_profile/style/font-awesome.min.css'
  // );
});
$(function() {
  if (window.location.hash ==
    '#open-nav') {
    history.replaceState('',
      document.title, window.location
      .pathname);
    if (window.innerWidth > 991) {
      $('#btn-icon-bar').click();
    }
  }
});
if ($('#parallax1').length > 0) {
  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: "onEnter",
      duration: "200%"
    }
  });
  new ScrollMagic.Scene({
    triggerElement: "#parallax1"
  }).setTween("#parallax1 > div", {
    y: "100%",
    ease: Linear.easeNone
  }).addTo(controller);
}
if ($('#parallax2').length > 0) {
  new ScrollMagic.Scene({
    triggerElement: "#parallax2"
  }).setTween("#parallax2 > div", {
    y: "100%",
    ease: Linear.easeNone
  }).addTo(controller);
}
$(window).load(function() {
  $('.get-bg').each(function() {
    var getThisBg = $(this).attr(
      'data-src');
    $(this).css({
      'background-image': 'url(' +
        getThisBg + ')'
    });
  });
});
$('.news-toggle').click(function(e) {
  var thisDataId = $(this).attr(
    'data-id');
  $('.news-toggle').removeClass(
    'active');
  $(this).addClass('active');
  $('.news-toggle-box').fadeOut(300);
  $('#' + thisDataId).delay(300).fadeIn(
    300);
  e.preventDefault();
});
$('.menu-toggle').click(function(e) {
  var thisDataId = $(this).attr(
    'data-id');
  $('.menu-toggle-box').fadeOut(300);
  $('#' + thisDataId).delay(300).fadeIn(
    300);
  e.preventDefault();
});
jQuery(document).ready(function($) {
  $('.counter').counterUp({
    delay: 10,
    time: 1600
  });
});
$('#searchphrase').focus(function() {
  $(this).val('');
});
$(function() {
  $(".btn-toggle").click(function() {
    $(".btn-toggle2").removeClass(
      "btn-default-big");
    $(".btn-toggle2").addClass(
      "btn-deactive-big");
    $(".btn-toggle").removeClass(
      "btn-deactive-big");
    $(".btn-toggle").addClass(
      "btn-default-big");
  });
  $(".btn-toggle2").click(function() {
    $(".btn-toggle").removeClass(
      "btn-default-big");
    $(".btn-toggle").addClass(
      "btn-deactive-big");
    $(".btn-toggle2").removeClass(
      "btn-deactive-big");
    $(".btn-toggle2").addClass(
      "btn-default-big");
  });
  $('.bxslider').bxSlider({
    minSlides: 3,
    maxSlides: 3,
    slideWidth: 360,
    slideMargin: 10,
    auto: true,
    pager: false
  });
  $("#menu-box-countries").click(
    function() {
      $("#menu-countries-lvl2").show();
      $("#menu-teams-lvl2").hide();
    });
  $("#menu-box-teams").click(
    function() {
      $("#menu-teams-lvl2").show();
      $("#menu-countries-lvl2").hide();
    });
  $("#hp-arrow").click(function() {
    $('html, body').animate({
      scrollTop: $(
          "#anchor-slide").offset()
        .top - 50
    }, 1500);
  });
  $('[data-bg]').each(function() {
    var getDataBg = $(this).attr(
      'data-bg');
    $(this).css(
      'background-image',
      'url(' + getDataBg +
      ')');
  });
  $(".info-img").hover(function() {
    $("#" + $(this).attr(
      "data-show")).show();
    $(".people_modal").css({
      left: $(this).offset()
        .left + 'px',
    });
  }, function() {
    $("#" + $(this).attr(
      "data-show")).hide();
  });
  if ($(".fb_invalid")[0]) {
    $('html, body').animate({
      scrollTop: $(
          "#m2b7d3fbrp_submit")
        .offset().top - 50
    }, 0);
  }
  if ($("#successful-sent")[0]) {
    $(".last-step").hide();
    $(".modal-content").css(
      "height", "40%");
  }
  if ($(
      ".form-message, .popup-error_message"
    )[0]) {
    $(".modal").addClass("active");
    var email = $(
      '#contact-form-stored-email'
    ).text();
    if (email.length !== 0) {
      $('input#fbrp__17').val(email);
    }
  }
  $(".close").click(function() {
    $(".modal").addClass(
      "no-active");
  });
  $('.company-logos').marquee({
    duration: 15000,
    gap: 50,
    delayBeforeStart: 0,
    direction: 'left',
    duplicated: true
  });
  jQuery('section').addClass(
    "fade-hidden").viewportChecker({
    classToAdd: 'fade-visible animated fadeIn',
    offset: 100
  });
});
$(function() {
  $('a.show-more-btn').click(
    function(e) {
      e.preventDefault();
      $(this).parents('.row').prev(
        '.row').find(
        'div.hidden-element').show();
      $(this).hide();
      $(this).next(
        'a.show-less-btn').show();
    });
  $('a.show-less-btn').click(
    function(e) {
      e.preventDefault();
      $(this).parents('.row').prev(
        '.row').find(
        'div.hidden-element').hide();
      $(this).hide();
      $(this).prev(
        'a.show-more-btn').show();
    });
});
$(function() {
  $("#share-button").click(function() {
    event.preventDefault()
    $(".social-share-box").toggleClass(
      "show");
  });
  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 800) {
      $('#slide-top').fadeIn();
    } else {
      $('#slide-top').fadeOut();
    }
  });
  $("#slide-top").click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
    return false;
  });
  $(
    "#main-menu > li, #main-menu > li > ul > li"
  ).hover(function() {
    $(this).addClass(
      "active-menu");
  }, function() {
    $(this).removeClass(
      "active-menu");
  });
  $(".btn-default").each(function() {
    var longTxt = $(this).text()
      .replace(/ /g, '').length;
    if (longTxt >= 22) {
      $(this).css("padding",
        "13px");
      $(this).css("font-size",
        "1.5rem");
    } else if (longTxt >= 20) {
      $(this).css("font-size",
        "1.9rem");
      $(this).css("padding-top",
        "10px");
    }
  });
});

/* -- FILE: [javascripts/jQuery.validation.min.js]*/
/*! jQuery Validation Plugin - v1.11.0 - 2/4/2013
 * https://github.com/jzaefferer/jquery-validation
 * Copyright (c) 2013 JĂ¶rn Zaefferer; Licensed MIT */
(function(e) {
  e.extend(e.fn, {
    validate: function(t) {
      if (!this.length) {
        t && t.debug && window.console &&
          console.warn(
            "Nothing selected, can't validate, returning nothing."
          );
        return
      }
      var n = e.data(this[0],
        "validator");
      return n ? n : (this.attr(
          "novalidate",
          "novalidate"), n =
        new e.validator(t,
          this[0]), e.data(
          this[0],
          "validator", n), n.settings
        .onsubmit && (this.validateDelegate(
          ":submit",
          "click",
          function(t) {
            n.settings.submitHandler &&
              (n.submitButton =
                t.target),
              e(t.target).hasClass(
                "cancel") &&
              (n.cancelSubmit = !
                0)
          }), this.submit(
          function(t) {
            function r() {
              var r;
              return n.settings
                .submitHandler ?
                (n.submitButton &&
                  (r = e(
                    "<input type='hidden'/>"
                  ).attr(
                    "name",
                    n.submitButton
                    .name
                  ).val(n
                    .submitButton
                    .value
                  ).appendTo(
                    n.currentForm
                  )), n.settings
                  .submitHandler
                  .call(n,
                    n.currentForm,
                    t), n.submitButton &&
                  r.remove(), !
                  1) : !0
            }
            return n.settings
              .debug && t.preventDefault(),
              n.cancelSubmit ?
              (n.cancelSubmit = !
                1, r()) : n
              .form() ? n.pendingRequest ?
              (n.formSubmitted = !
                0, !1) : r() :
              (n.focusInvalid(), !
                1)
          })), n)
    },
    valid: function() {
      if (e(this[0]).is("form"))
        return this.validate().form();
      var t = !0,
        n = e(this[0].form).validate();
      return this.each(function() {
        t &= n.element(this)
      }), t
    },
    removeAttrs: function(t) {
      var n = {},
        r = this;
      return e.each(t.split(
        /\s/), function(e,
        t) {
        n[t] = r.attr(t), r
          .removeAttr(t)
      }), n
    },
    rules: function(t, n) {
      var r = this[0];
      if (t) {
        var i = e.data(r.form,
            "validator").settings,
          s = i.rules,
          o = e.validator.staticRules(
            r);
        switch (t) {
          case "add":
            e.extend(o, e.validator
                .normalizeRule(
                  n)), s[r.name] =
              o, n.messages &&
              (i.messages[r.name] =
                e.extend(i.messages[
                  r.name], n.messages)
              );
            break;
          case "remove":
            if (!n) return delete s[
              r.name], o;
            var u = {};
            return e.each(n.split(
                /\s/),
              function(e, t) {
                u[t] = o[t],
                  delete o[t]
              }), u
        }
      }
      var a = e.validator.normalizeRules(
        e.extend({}, e.validator
          .classRules(r), e.validator
          .attributeRules(r),
          e.validator.dataRules(
            r), e.validator.staticRules(
            r)), r);
      if (a.required) {
        var f = a.required;
        delete a.required, a =
          e.extend({
            required: f
          }, a)
      }
      return a
    }
  }), e.extend(e.expr[":"], {
    blank: function(t) {
      return !e.trim("" + t.value)
    },
    filled: function(t) {
      return !!e.trim("" + t.value)
    },
    unchecked: function(e) {
      return !e.checked
    }
  }), e.validator = function(t, n) {
    this.settings = e.extend(!0, {},
        e.validator.defaults, t),
      this.currentForm = n, this.init()
  }, e.validator.format = function(
    t, n) {
    return arguments.length === 1 ?
      function() {
        var n = e.makeArray(
          arguments);
        return n.unshift(t), e.validator
          .format.apply(this, n)
      } : (arguments.length > 2 &&
        n.constructor !== Array &&
        (n = e.makeArray(arguments)
          .slice(1)), n.constructor !==
        Array && (n = [n]), e.each(
          n,
          function(e, n) {
            t = t.replace(new RegExp(
              "\\{" + e + "\\}",
              "g"), function() {
              return n
            })
          }), t)
  }, e.extend(e.validator, {
    defaults: {
      messages: {},
      groups: {},
      rules: {},
      errorClass: "error",
      validClass: "valid",
      errorElement: "label",
      focusInvalid: !0,
      errorContainer: e([]),
      errorLabelContainer: e([]),
      onsubmit: !0,
      ignore: ":hidden",
      ignoreTitle: !1,
      onfocusin: function(e, t) {
        this.lastActive = e,
          this.settings.focusCleanup &&
          !this.blockFocusCleanup &&
          (this.settings.unhighlight &&
            this.settings.unhighlight
            .call(this, e, this
              .settings.errorClass,
              this.settings.validClass
            ), this.addWrapper(
              this.errorsFor(e)
            ).hide())
      },
      onfocusout: function(e, t) {
        !this.checkable(e) && (
            e.name in this.submitted ||
            !this.optional(e)) &&
          this.element(e)
      },
      onkeyup: function(e, t) {
        if (t.which === 9 &&
          this.elementValue(e) ===
          "") return;
        (e.name in this.submitted ||
          e === this.lastElement
        ) && this.element(e)
      },
      onclick: function(e, t) {
        e.name in this.submitted ?
          this.element(e) : e.parentNode
          .name in this.submitted &&
          this.element(e.parentNode)
      },
      highlight: function(t, n, r) {
        t.type === "radio" ?
          this.findByName(t.name)
          .addClass(n).removeClass(
            r) : e(t).addClass(
            n).removeClass(r)
      },
      unhighlight: function(t, n,
        r) {
        t.type === "radio" ?
          this.findByName(t.name)
          .removeClass(n).addClass(
            r) : e(t).removeClass(
            n).addClass(r)
      }
    },
    setDefaults: function(t) {
      e.extend(e.validator.defaults,
        t)
    },
    messages: {
      required: "This field is required.",
      remote: "Please fix this field.",
      email: "Please enter a valid email address.",
      url: "Please enter a valid URL.",
      date: "Please enter a valid date.",
      dateISO: "Please enter a valid date (ISO).",
      number: "Please enter a valid number.",
      digits: "Please enter only digits.",
      creditcard: "Please enter a valid credit card number.",
      equalTo: "Please enter the same value again.",
      maxlength: e.validator.format(
        "Please enter no more than {0} characters."
      ),
      minlength: e.validator.format(
        "Please enter at least {0} characters."
      ),
      rangelength: e.validator.format(
        "Please enter a value between {0} and {1} characters long."
      ),
      range: e.validator.format(
        "Please enter a value between {0} and {1}."
      ),
      max: e.validator.format(
        "Please enter a value less than or equal to {0}."
      ),
      min: e.validator.format(
        "Please enter a value greater than or equal to {0}."
      )
    },
    autoCreateRanges: !1,
    prototype: {
      init: function() {
        function r(t) {
          var n = e.data(this[0]
              .form,
              "validator"),
            r = "on" + t.type.replace(
              /^validate/, "");
          n.settings[r] && n.settings[
            r].call(n, this[0],
            t)
        }
        this.labelContainer = e(
            this.settings.errorLabelContainer
          ), this.errorContext =
          this.labelContainer.length &&
          this.labelContainer ||
          e(this.currentForm),
          this.containers = e(
            this.settings.errorContainer
          ).add(this.settings.errorLabelContainer),
          this.submitted = {},
          this.valueCache = {},
          this.pendingRequest =
          0, this.pending = {},
          this.invalid = {},
          this.reset();
        var t = this.groups = {};
        e.each(this.settings.groups,
          function(n, r) {
            typeof r ==
              "string" && (r =
                r.split(/\s/)
              ), e.each(r,
                function(e, r) {
                  t[r] = n
                })
          });
        var n = this.settings.rules;
        e.each(n, function(t, r) {
            n[t] = e.validator
              .normalizeRule(
                r)
          }), e(this.currentForm)
          .validateDelegate(
            ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ",
            "focusin focusout keyup",
            r).validateDelegate(
            "[type='radio'], [type='checkbox'], select, option",
            "click", r), this.settings
          .invalidHandler && e(
            this.currentForm).bind(
            "invalid-form.validate",
            this.settings.invalidHandler
          )
      },
      form: function() {
        return this.checkForm(),
          e.extend(this.submitted,
            this.errorMap),
          this.invalid = e.extend({},
            this.errorMap),
          this.valid() || e(
            this.currentForm).triggerHandler(
            "invalid-form", [
              this
            ]), this.showErrors(),
          this.valid()
      },
      checkForm: function() {
        this.prepareForm();
        for (var e = 0, t =
            this.currentElements =
            this.elements(); t[
            e]; e++) this.check(
          t[e]);
        return this.valid()
      },
      element: function(t) {
        t = this.validationTargetFor(
            this.clean(t)),
          this.lastElement = t,
          this.prepareElement(t),
          this.currentElements =
          e(t);
        var n = this.check(t) !==
          !1;
        return n ? delete this.invalid[
            t.name] : this.invalid[
            t.name] = !0, this.numberOfInvalids() ||
          (this.toHide = this.toHide
            .add(this.containers)
          ), this.showErrors(),
          n
      },
      showErrors: function(t) {
        if (t) {
          e.extend(this.errorMap,
            t), this.errorList = [];
          for (var n in t) this
            .errorList.push({
              message: t[n],
              element: this.findByName(
                n)[0]
            });
          this.successList = e.grep(
            this.successList,
            function(e) {
              return !(e.name in
                t)
            })
        }
        this.settings.showErrors ?
          this.settings.showErrors
          .call(this, this.errorMap,
            this.errorList) :
          this.defaultShowErrors()
      },
      resetForm: function() {
        e.fn.resetForm && e(
            this.currentForm).resetForm(),
          this.submitted = {},
          this.lastElement =
          null, this.prepareForm(),
          this.hideErrors(),
          this.elements().removeClass(
            this.settings.errorClass
          ).removeData(
            "previousValue")
      },
      numberOfInvalids: function() {
        return this.objectLength(
          this.invalid)
      },
      objectLength: function(e) {
        var t = 0;
        for (var n in e) t++;
        return t
      },
      hideErrors: function() {
        this.addWrapper(this.toHide)
          .hide()
      },
      valid: function() {
        return this.size() ===
          0
      },
      size: function() {
        return this.errorList.length
      },
      focusInvalid: function() {
        if (this.settings.focusInvalid)
          try {
            e(this.findLastActive() ||
                this.errorList.length &&
                this.errorList[
                  0].element ||
                []).filter(
                ":visible").focus()
              .trigger(
                "focusin")
          } catch (t) {}
      },
      findLastActive: function() {
        var t = this.lastActive;
        return t && e.grep(this
            .errorList,
            function(e) {
              return e.element.name ===
                t.name
            }).length === 1 &&
          t
      },
      elements: function() {
        var t = this,
          n = {};
        return e(this.currentForm)
          .find(
            "input, select, textarea"
          ).not(
            ":submit, :reset, :image, [disabled]"
          ).not(this.settings.ignore)
          .filter(function() {
            return !this.name &&
              t.settings.debug &&
              window.console &&
              console.error(
                "%o has no name assigned",
                this), this.name in
              n || !t.objectLength(
                e(this).rules()
              ) ? !1 : (n[
                  this.name] = !
                0, !0)
          })
      },
      clean: function(t) {
        return e(t)[0]
      },
      errors: function() {
        var t = this.settings.errorClass
          .replace(" ", ".");
        return e(this.settings.errorElement +
          "." + t, this.errorContext
        )
      },
      reset: function() {
        this.successList = [],
          this.errorList = [],
          this.errorMap = {},
          this.toShow = e([]),
          this.toHide = e([]),
          this.currentElements =
          e([])
      },
      prepareForm: function() {
        this.reset(), this.toHide =
          this.errors().add(
            this.containers)
      },
      prepareElement: function(e) {
        this.reset(), this.toHide =
          this.errorsFor(e)
      },
      elementValue: function(t) {
        var n = e(t).attr(
            "type"),
          r = e(t).val();
        return n === "radio" ||
          n === "checkbox" ? e(
            "input[name='" + e(
              t).attr("name") +
            "']:checked").val() :
          typeof r == "string" ?
          r.replace(/\r/g, "") :
          r
      },
      check: function(t) {
        t = this.validationTargetFor(
          this.clean(t));
        var n = e(t).rules(),
          r = !1,
          i = this.elementValue(
            t),
          s;
        for (var o in n) {
          var u = {
            method: o,
            parameters: n[o]
          };
          try {
            s = e.validator.methods[
              o].call(this, i,
              t, u.parameters
            );
            if (s ===
              "dependency-mismatch"
            ) {
              r = !0;
              continue
            }
            r = !1;
            if (s === "pending") {
              this.toHide =
                this.toHide.not(
                  this.errorsFor(
                    t));
              return
            }
            if (!s) return this
              .formatAndAdd(t,
                u), !1
          } catch (a) {
            throw this.settings
              .debug && window.console &&
              console.log(
                "Exception occured when checking element " +
                t.id +
                ", check the '" +
                u.method +
                "' method.", a),
              a
          }
        }
        if (r) return;
        return this.objectLength(
            n) && this.successList
          .push(t), !0
      },
      customDataMessage: function(
        t, n) {
        return e(t).data("msg-" +
            n.toLowerCase()) ||
          t.attributes && e(t).attr(
            "data-msg-" + n.toLowerCase()
          )
      },
      customMessage: function(e,
        t) {
        var n = this.settings.messages[
          e];
        return n && (n.constructor ===
          String ? n : n[t])
      },
      findDefined: function() {
        for (var e = 0; e <
          arguments.length; e++
        )
          if (arguments[e] !==
            undefined) return arguments[
            e];
        return undefined
      },
      defaultMessage: function(t,
        n) {
        return this.findDefined(
          this.customMessage(
            t.name, n), this.customDataMessage(
            t, n), !this.settings
          .ignoreTitle && t.title ||
          undefined, e.validator
          .messages[n],
          "<strong>Warning: No message defined for " +
          t.name +
          "</strong>")
      },
      formatAndAdd: function(t, n) {
        var r = this.defaultMessage(
            t, n.method),
          i = /\$?\{(\d+)\}/g;
        typeof r == "function" ?
          r = r.call(this, n.parameters,
            t) : i.test(r) && (
            r = e.validator.format(
              r.replace(i,
                "{$1}"), n.parameters
            )), this.errorList.push({
            message: r,
            element: t
          }), this.errorMap[t.name] =
          r, this.submitted[t.name] =
          r
      },
      addWrapper: function(e) {
        return this.settings.wrapper &&
          (e = e.add(e.parent(
            this.settings.wrapper
          ))), e
      },
      defaultShowErrors: function() {
        var e, t;
        for (e = 0; this.errorList[
            e]; e++) {
          var n = this.errorList[
            e];
          this.settings.highlight &&
            this.settings.highlight
            .call(this, n.element,
              this.settings.errorClass,
              this.settings.validClass
            ), this.showLabel(n
              .element, n.message
            )
        }
        this.errorList.length &&
          (this.toShow = this.toShow
            .add(this.containers)
          );
        if (this.settings.success)
          for (e = 0; this.successList[
              e]; e++) this.showLabel(
            this.successList[
              e]);
        if (this.settings.unhighlight)
          for (e = 0, t = this.validElements(); t[
              e]; e++) this.settings
            .unhighlight.call(
              this, t[e], this.settings
              .errorClass, this
              .settings.validClass
            );
        this.toHide = this.toHide
          .not(this.toShow),
          this.hideErrors(),
          this.addWrapper(this.toShow)
          .show()
      },
      validElements: function() {
        return this.currentElements
          .not(this.invalidElements())
      },
      invalidElements: function() {
        return e(this.errorList)
          .map(function() {
            return this.element
          })
      },
      showLabel: function(t, n) {
        var r = this.errorsFor(
          t);
        r.length ? (r.removeClass(
            this.settings.validClass
          ).addClass(this.settings
            .errorClass), r.html(
            n)) : (r = e("<" +
              this.settings.errorElement +
              ">").attr("for",
              this.idOrName(t))
            .addClass(this.settings
              .errorClass).html(
              n || ""), this.settings
            .wrapper && (r = r.hide()
              .show().wrap("<" +
                this.settings.wrapper +
                "/>").parent()),
            this.labelContainer
            .append(r).length ||
            (this.settings.errorPlacement ?
              this.settings.errorPlacement(
                r, e(t)) : r.insertAfter(
                t))), !n &&
          this.settings.success &&
          (r.text(""), typeof this
            .settings.success ==
            "string" ? r.addClass(
              this.settings.success
            ) : this.settings.success(
              r, t)), this.toShow =
          this.toShow.add(r)
      },
      errorsFor: function(t) {
        var n = this.idOrName(t);
        return this.errors().filter(
          function() {
            return e(this).attr(
              "for") === n
          })
      },
      idOrName: function(e) {
        return this.groups[e.name] ||
          (this.checkable(e) ?
            e.name : e.id || e.name
          )
      },
      validationTargetFor: function(
        e) {
        return this.checkable(e) &&
          (e = this.findByName(
            e.name).not(this.settings
            .ignore)[0]), e
      },
      checkable: function(e) {
        return /radio|checkbox/i
          .test(e.type)
      },
      findByName: function(t) {
        return e(this.currentForm)
          .find("[name='" + t +
            "']")
      },
      getLength: function(t, n) {
        switch (n.nodeName.toLowerCase()) {
          case "select":
            return e(
              "option:selected",
              n).length;
          case "input":
            if (this.checkable(
                n)) return this
              .findByName(n.name)
              .filter(
                ":checked").length
        }
        return t.length
      },
      depend: function(e, t) {
        return this.dependTypes[
            typeof e] ? this.dependTypes[
            typeof e](e, t) : !
          0
      },
      dependTypes: {
        "boolean": function(e, t) {
          return e
        },
        string: function(t, n) {
          return !!e(t, n.form)
            .length
        },
        "function": function(e, t) {
          return e(t)
        }
      },
      optional: function(t) {
        var n = this.elementValue(
          t);
        return !e.validator.methods
          .required.call(this,
            n, t) &&
          "dependency-mismatch"
      },
      startRequest: function(e) {
        this.pending[e.name] ||
          (this.pendingRequest++,
            this.pending[e.name] = !
            0)
      },
      stopRequest: function(t, n) {
        this.pendingRequest--,
          this.pendingRequest <
          0 && (this.pendingRequest =
            0), delete this.pending[
            t.name], n && this.pendingRequest ===
          0 && this.formSubmitted &&
          this.form() ? (e(this
              .currentForm).submit(),
            this.formSubmitted = !
            1) : !n && this.pendingRequest ===
          0 && this.formSubmitted &&
          (e(this.currentForm).triggerHandler(
              "invalid-form", [
                this
              ]), this.formSubmitted = !
            1)
      },
      previousValue: function(t) {
        return e.data(t,
            "previousValue") ||
          e.data(t,
            "previousValue", {
              old: null,
              valid: !0,
              message: this.defaultMessage(
                t, "remote")
            })
      }
    },
    classRuleSettings: {
      required: {
        required: !0
      },
      email: {
        email: !0
      },
      url: {
        url: !0
      },
      date: {
        date: !0
      },
      dateISO: {
        dateISO: !0
      },
      number: {
        number: !0
      },
      digits: {
        digits: !0
      },
      creditcard: {
        creditcard: !0
      }
    },
    addClassRules: function(t, n) {
      t.constructor === String ?
        this.classRuleSettings[
          t] = n : e.extend(
          this.classRuleSettings,
          t)
    },
    classRules: function(t) {
      var n = {},
        r = e(t).attr("class");
      return r && e.each(r.split(
        " "), function() {
        this in e.validator
          .classRuleSettings &&
          e.extend(n, e.validator
            .classRuleSettings[
              this])
      }), n
    },
    attributeRules: function(t) {
      var n = {},
        r = e(t);
      for (var i in e.validator
          .methods) {
        var s;
        i === "required" ? (s =
            r.get(0).getAttribute(
              i), s === "" && (
              s = !0), s = !!s) :
          s = r.attr(i), s ? n[
            i] = s : r[0].getAttribute(
            "type") === i && (n[
            i] = !0)
      }
      return n.maxlength &&
        /-1|2147483647|524288/.test(
          n.maxlength) &&
        delete n.maxlength, n
    },
    dataRules: function(t) {
      var n, r, i = {},
        s = e(t);
      for (n in e.validator.methods)
        r = s.data("rule-" + n.toLowerCase()),
        r !== undefined && (i[n] =
          r);
      return i
    },
    staticRules: function(t) {
      var n = {},
        r = e.data(t.form,
          "validator");
      return r.settings.rules &&
        (n = e.validator.normalizeRule(
          r.settings.rules[t.name]
        ) || {}), n
    },
    normalizeRules: function(t, n) {
      return e.each(t, function(
          r, i) {
          if (i === !1) {
            delete t[r];
            return
          }
          if (i.param || i.depends) {
            var s = !0;
            switch (typeof i.depends) {
              case "string":
                s = !!e(i.depends,
                  n.form).length;
                break;
              case "function":
                s = i.depends
                  .call(n, n)
            }
            s ? t[r] = i.param !==
              undefined ? i.param :
              !0 : delete t[r]
          }
        }), e.each(t, function(
          r, i) {
          t[r] = e.isFunction(
            i) ? i(n) : i
        }), e.each(["minlength",
          "maxlength"
        ], function() {
          t[this] && (t[this] =
            Number(t[this])
          )
        }), e.each([
          "rangelength"
        ], function() {
          var n;
          t[this] && (e.isArray(
              t[this]) ? t[
              this] = [
              Number(t[this]
                [0]),
              Number(t[this]
                [1])
            ] : typeof t[
              this] ==
            "string" && (n =
              t[this].split(
                /[\s,]+/),
              t[this] = [
                Number(n[0]),
                Number(n[1])
              ]))
        }), e.validator.autoCreateRanges &&
        (t.min && t.max && (t.range = [
              t.min, t.max
            ], delete t.min,
            delete t.max), t.minlength &&
          t.maxlength && (t.rangelength = [
              t.minlength, t.maxlength
            ], delete t.minlength,
            delete t.maxlength)
        ), t
    },
    normalizeRule: function(t) {
      if (typeof t == "string") {
        var n = {};
        e.each(t.split(/\s/),
          function() {
            n[this] = !0
          }), t = n
      }
      return t
    },
    addMethod: function(t, n, r) {
      e.validator.methods[t] =
        n, e.validator.messages[
          t] = r !== undefined ?
        r : e.validator.messages[
          t], n.length < 3 && e
        .validator.addClassRules(
          t, e.validator.normalizeRule(
            t))
    },
    methods: {
      required: function(t, n, r) {
        if (!this.depend(r, n))
          return "dependency-mismatch";
        if (n.nodeName.toLowerCase() ===
          "select") {
          var i = e(n).val();
          return i && i.length >
            0
        }
        return this.checkable(n) ?
          this.getLength(t, n) >
          0 : e.trim(t).length >
          0
      },
      remote: function(t, n, r) {
        if (this.optional(n))
          return "dependency-mismatch";
        var i = this.previousValue(
          n);
        this.settings.messages[
            n.name] || (this.settings
            .messages[n.name] = {}
          ), i.originalMessage =
          this.settings.messages[
            n.name].remote,
          this.settings.messages[
            n.name].remote = i.message,
          r = typeof r ==
          "string" && {
            url: r
          } || r;
        if (i.old === t) return i
          .valid;
        i.old = t;
        var s = this;
        this.startRequest(n);
        var o = {};
        return o[n.name] = t, e
          .ajax(e.extend(!0, {
            url: r,
            mode: "abort",
            port: "validate" +
              n.name,
            dataType: "json",
            data: o,
            success: function(
              r) {
              s.settings.messages[
                  n.name]
                .remote =
                i.originalMessage;
              var o = r ===
                !0 || r ===
                "true";
              if (o) {
                var u = s
                  .formSubmitted;
                s.prepareElement(
                    n), s
                  .formSubmitted =
                  u, s.successList
                  .push(n),
                  delete s
                  .invalid[
                    n.name
                  ], s.showErrors()
              } else {
                var a = {},
                  f = r ||
                  s.defaultMessage(
                    n,
                    "remote"
                  );
                a[n.name] =
                  i.message =
                  e.isFunction(
                    f) ?
                  f(t) :
                  f, s.invalid[
                    n.name
                  ] = !0,
                  s.showErrors(
                    a)
              }
              i.valid = o,
                s.stopRequest(
                  n, o)
            }
          }, r)), "pending"
      },
      minlength: function(t, n, r) {
        var i = e.isArray(t) ?
          t.length : this.getLength(
            e.trim(t), n);
        return this.optional(n) ||
          i >= r
      },
      maxlength: function(t, n, r) {
        var i = e.isArray(t) ?
          t.length : this.getLength(
            e.trim(t), n);
        return this.optional(n) ||
          i <= r
      },
      rangelength: function(t, n,
        r) {
        var i = e.isArray(t) ?
          t.length : this.getLength(
            e.trim(t), n);
        return this.optional(n) ||
          i >= r[0] && i <= r[1]
      },
      min: function(e, t, n) {
        return this.optional(t) ||
          e >= n
      },
      max: function(e, t, n) {
        return this.optional(t) ||
          e <= n
      },
      range: function(e, t, n) {
        return this.optional(t) ||
          e >= n[0] && e <= n[1]
      },
      email: function(e, t) {
        return this.optional(t) ||
          /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i
          .test(e)
      },
      url: function(e, t) {
        return this.optional(t) ||
          /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
          .test(e)
      },
      date: function(e, t) {
        return this.optional(t) ||
          !/Invalid|NaN/.test((
            new Date(e)).toString())
      },
      dateISO: function(e, t) {
        return this.optional(t) ||
          /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/
          .test(e)
      },
      number: function(e, t) {
        return this.optional(t) ||
          /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/
          .test(e)
      },
      digits: function(e, t) {
        return this.optional(t) ||
          /^\d+$/.test(e)
      },
      creditcard: function(e, t) {
        if (this.optional(t))
          return "dependency-mismatch";
        if (/[^0-9 \-]+/.test(e))
          return !1;
        var n = 0,
          r = 0,
          i = !1;
        e = e.replace(/\D/g, "");
        for (var s = e.length -
            1; s >= 0; s--) {
          var o = e.charAt(s);
          r = parseInt(o, 10),
            i && (r *= 2) > 9 &&
            (r -= 9), n += r, i = !
            i
        }
        return n % 10 === 0
      },
      equalTo: function(t, n, r) {
        var i = e(r);
        return this.settings.onfocusout &&
          i.unbind(
            ".validate-equalTo"
          ).bind(
            "blur.validate-equalTo",
            function() {
              e(n).valid()
            }), t === i.val()
      }
    }
  }), e.format = e.validator.format
})(jQuery),
function(e) {
  var t = {};
  if (e.ajaxPrefilter) e.ajaxPrefilter(
    function(e, n, r) {
      var i = e.port;
      e.mode === "abort" && (t[i] &&
        t[i].abort(), t[i] = r)
    });
  else {
    var n = e.ajax;
    e.ajax = function(r) {
      var i = ("mode" in r ? r : e.ajaxSettings)
        .mode,
        s = ("port" in r ? r : e.ajaxSettings)
        .port;
      return i === "abort" ? (t[s] &&
        t[s].abort(), t[s] = n.apply(
          this, arguments)) : n.apply(
        this, arguments)
    }
  }
}(jQuery),
function(e) {
  e.extend(e.fn, {
    validateDelegate: function(t, n,
      r) {
      return this.bind(n,
        function(n) {
          var i = e(n.target);
          if (i.is(t)) return r
            .apply(i,
              arguments)
        })
    }
  })
}(jQuery);
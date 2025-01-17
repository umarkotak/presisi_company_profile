/* -- FILE: [lib/content/javascripts/jquery/1.11.0/core.js]*/
/*! jQuery v1.11.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
! function(a, b) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");
    return b(a)
  } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
  var c = [],
    d = c.slice,
    e = c.concat,
    f = c.push,
    g = c.indexOf,
    h = {},
    i = h.toString,
    j = h.hasOwnProperty,
    k = "".trim,
    l = {},
    m = "1.11.0",
    n = function(a, b) {
      return new n.fn.init(a, b)
    },
    o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    p = /^-ms-/,
    q = /-([\da-z])/gi,
    r = function(a, b) {
      return b.toUpperCase()
    };
  n.fn = n.prototype = {
    jquery: m,
    constructor: n,
    selector: "",
    length: 0,
    toArray: function() {
      return d.call(this)
    },
    get: function(a) {
      return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
    },
    pushStack: function(a) {
      var b = n.merge(this.constructor(), a);
      return b.prevObject = this, b.context = this.context, b
    },
    each: function(a, b) {
      return n.each(this, a, b)
    },
    map: function(a) {
      return this.pushStack(n.map(this, function(b, c) {
        return a.call(b, c, b)
      }))
    },
    slice: function() {
      return this.pushStack(d.apply(this, arguments))
    },
    first: function() {
      return this.eq(0)
    },
    last: function() {
      return this.eq(-1)
    },
    eq: function(a) {
      var b = this.length,
        c = +a + (0 > a ? b : 0);
      return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
    },
    end: function() {
      return this.prevObject || this.constructor(null)
    },
    push: f,
    sort: c.sort,
    splice: c.splice
  }, n.extend = n.fn.extend = function() {
    var a, b, c, d, e, f, g = arguments[0] || {},
      h = 1,
      i = arguments.length,
      j = !1;
    for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
      if (null != (e = arguments[h]))
        for (d in e) a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
    return g
  }, n.extend({
    expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function(a) {
      throw new Error(a)
    },
    noop: function() {},
    isFunction: function(a) {
      return "function" === n.type(a)
    },
    isArray: Array.isArray || function(a) {
      return "array" === n.type(a)
    },
    isWindow: function(a) {
      return null != a && a == a.window
    },
    isNumeric: function(a) {
      return a - parseFloat(a) >= 0
    },
    isEmptyObject: function(a) {
      var b;
      for (b in a) return !1;
      return !0
    },
    isPlainObject: function(a) {
      var b;
      if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
      try {
        if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1
      } catch (c) {
        return !1
      }
      if (l.ownLast)
        for (b in a) return j.call(a, b);
      for (b in a);
      return void 0 === b || j.call(a, b)
    },
    type: function(a) {
      return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
    },
    globalEval: function(b) {
      b && n.trim(b) && (a.execScript || function(b) {
        a.eval.call(a, b)
      })(b)
    },
    camelCase: function(a) {
      return a.replace(p, "ms-").replace(q, r)
    },
    nodeName: function(a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
    },
    each: function(a, b, c) {
      var d, e = 0,
        f = a.length,
        g = s(a);
      if (c) {
        if (g) {
          for (; f > e; e++)
            if (d = b.apply(a[e], c), d === !1) break
        } else
          for (e in a)
            if (d = b.apply(a[e], c), d === !1) break
      } else if (g) {
        for (; f > e; e++)
          if (d = b.call(a[e], e, a[e]), d === !1) break
      } else
        for (e in a)
          if (d = b.call(a[e], e, a[e]), d === !1) break;
      return a
    },
    trim: k && !k.call("\ufeff\xa0") ? function(a) {
      return null == a ? "" : k.call(a)
    } : function(a) {
      return null == a ? "" : (a + "").replace(o, "")
    },
    makeArray: function(a, b) {
      var c = b || [];
      return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
    },
    inArray: function(a, b, c) {
      var d;
      if (b) {
        if (g) return g.call(b, a, c);
        for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
          if (c in b && b[c] === a) return c
      }
      return -1
    },
    merge: function(a, b) {
      var c = +b.length,
        d = 0,
        e = a.length;
      while (c > d) a[e++] = b[d++];
      if (c !== c)
        while (void 0 !== b[d]) a[e++] = b[d++];
      return a.length = e, a
    },
    grep: function(a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
      return e
    },
    map: function(a, b, c) {
      var d, f = 0,
        g = a.length,
        h = s(a),
        i = [];
      if (h)
        for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);
      else
        for (f in a) d = b(a[f], f, c), null != d && i.push(d);
      return e.apply([], i)
    },
    guid: 1,
    proxy: function(a, b) {
      var c, e, f;
      return "string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = d.call(arguments, 2), e = function() {
        return a.apply(b || this, c.concat(d.call(arguments)))
      }, e.guid = a.guid = a.guid || n.guid++, e) : void 0
    },
    now: function() {
      return +new Date
    },
    support: l
  }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
    h["[object " + b + "]"] = b.toLowerCase()
  });

  function s(a) {
    var b = a.length,
      c = n.type(a);
    return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
  }
  var t = function(a) {
    var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s = "sizzle" + -new Date,
      t = a.document,
      u = 0,
      v = 0,
      w = eb(),
      x = eb(),
      y = eb(),
      z = function(a, b) {
        return a === b && (j = !0), 0
      },
      A = "undefined",
      B = 1 << 31,
      C = {}.hasOwnProperty,
      D = [],
      E = D.pop,
      F = D.push,
      G = D.push,
      H = D.slice,
      I = D.indexOf || function(a) {
        for (var b = 0, c = this.length; c > b; b++)
          if (this[b] === a) return b;
        return -1
      },
      J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      K = "[\\x20\\t\\r\\n\\f]",
      L = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      M = L.replace("w", "w#"),
      N = "\\[" + K + "*(" + L + ")" + K + "*(?:([*^$|!~]?=)" + K + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + M + ")|)|)" + K + "*\\]",
      O = ":(" + L + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + N.replace(3, 8) + ")*)|.*)\\)|)",
      P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
      Q = new RegExp("^" + K + "*," + K + "*"),
      R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
      S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
      T = new RegExp(O),
      U = new RegExp("^" + M + "$"),
      V = {
        ID: new RegExp("^#(" + L + ")"),
        CLASS: new RegExp("^\\.(" + L + ")"),
        TAG: new RegExp("^(" + L.replace("w", "w*") + ")"),
        ATTR: new RegExp("^" + N),
        PSEUDO: new RegExp("^" + O),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + J + ")$", "i"),
        needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i")
      },
      W = /^(?:input|select|textarea|button)$/i,
      X = /^h\d$/i,
      Y = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      $ = /[+~]/,
      _ = /'|\\/g,
      ab = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
      bb = function(a, b, c) {
        var d = "0x" + b - 65536;
        return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
      };
    try {
      G.apply(D = H.call(t.childNodes), t.childNodes), D[t.childNodes.length].nodeType
    } catch (cb) {
      G = {
        apply: D.length ? function(a, b) {
          F.apply(a, H.call(b))
        } : function(a, b) {
          var c = a.length,
            d = 0;
          while (a[c++] = b[d++]);
          a.length = c - 1
        }
      }
    }

    function db(a, b, d, e) {
      var f, g, h, i, j, m, p, q, u, v;
      if ((b ? b.ownerDocument || b : t) !== l && k(b), b = b || l, d = d || [], !a || "string" != typeof a) return d;
      if (1 !== (i = b.nodeType) && 9 !== i) return [];
      if (n && !e) {
        if (f = Z.exec(a))
          if (h = f[1]) {
            if (9 === i) {
              if (g = b.getElementById(h), !g || !g.parentNode) return d;
              if (g.id === h) return d.push(g), d
            } else if (b.ownerDocument && (g = b.ownerDocument.getElementById(h)) && r(b, g) && g.id === h) return d.push(g), d
          } else {
            if (f[2]) return G.apply(d, b.getElementsByTagName(a)), d;
            if ((h = f[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(h)), d
          }
        if (c.qsa && (!o || !o.test(a))) {
          if (q = p = s, u = b, v = 9 === i && a, 1 === i && "object" !== b.nodeName.toLowerCase()) {
            m = ob(a), (p = b.getAttribute("id")) ? q = p.replace(_, "\\$&") : b.setAttribute("id", q), q = "[id='" + q + "'] ", j = m.length;
            while (j--) m[j] = q + pb(m[j]);
            u = $.test(a) && mb(b.parentNode) || b, v = m.join(",")
          }
          if (v) try {
            return G.apply(d, u.querySelectorAll(v)), d
          } catch (w) {} finally {
            p || b.removeAttribute("id")
          }
        }
      }
      return xb(a.replace(P, "$1"), b, d, e)
    }

    function eb() {
      var a = [];

      function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
      }
      return b
    }

    function fb(a) {
      return a[s] = !0, a
    }

    function gb(a) {
      var b = l.createElement("div");
      try {
        return !!a(b)
      } catch (c) {
        return !1
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null
      }
    }

    function hb(a, b) {
      var c = a.split("|"),
        e = a.length;
      while (e--) d.attrHandle[c[e]] = b
    }

    function ib(a, b) {
      var c = b && a,
        d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || B) - (~a.sourceIndex || B);
      if (d) return d;
      if (c)
        while (c = c.nextSibling)
          if (c === b) return -1;
      return a ? 1 : -1
    }

    function jb(a) {
      return function(b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a
      }
    }

    function kb(a) {
      return function(b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a
      }
    }

    function lb(a) {
      return fb(function(b) {
        return b = +b, fb(function(c, d) {
          var e, f = a([], c.length, b),
            g = f.length;
          while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
        })
      })
    }

    function mb(a) {
      return a && typeof a.getElementsByTagName !== A && a
    }
    c = db.support = {}, f = db.isXML = function(a) {
      var b = a && (a.ownerDocument || a).documentElement;
      return b ? "HTML" !== b.nodeName : !1
    }, k = db.setDocument = function(a) {
      var b, e = a ? a.ownerDocument || a : t,
        g = e.defaultView;
      return e !== l && 9 === e.nodeType && e.documentElement ? (l = e, m = e.documentElement, n = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function() {
        k()
      }, !1) : g.attachEvent && g.attachEvent("onunload", function() {
        k()
      })), c.attributes = gb(function(a) {
        return a.className = "i", !a.getAttribute("className")
      }), c.getElementsByTagName = gb(function(a) {
        return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length
      }), c.getElementsByClassName = Y.test(e.getElementsByClassName) && gb(function(a) {
        return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
      }), c.getById = gb(function(a) {
        return m.appendChild(a).id = s, !e.getElementsByName || !e.getElementsByName(s).length
      }), c.getById ? (d.find.ID = function(a, b) {
        if (typeof b.getElementById !== A && n) {
          var c = b.getElementById(a);
          return c && c.parentNode ? [c] : []
        }
      }, d.filter.ID = function(a) {
        var b = a.replace(ab, bb);
        return function(a) {
          return a.getAttribute("id") === b
        }
      }) : (delete d.find.ID, d.filter.ID = function(a) {
        var b = a.replace(ab, bb);
        return function(a) {
          var c = typeof a.getAttributeNode !== A && a.getAttributeNode("id");
          return c && c.value === b
        }
      }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
        return typeof b.getElementsByTagName !== A ? b.getElementsByTagName(a) : void 0
      } : function(a, b) {
        var c, d = [],
          e = 0,
          f = b.getElementsByTagName(a);
        if ("*" === a) {
          while (c = f[e++]) 1 === c.nodeType && d.push(c);
          return d
        }
        return f
      }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
        return typeof b.getElementsByClassName !== A && n ? b.getElementsByClassName(a) : void 0
      }, p = [], o = [], (c.qsa = Y.test(e.querySelectorAll)) && (gb(function(a) {
        a.innerHTML = "<select t=''><option selected=''></option></select>", a.querySelectorAll("[t^='']").length && o.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || o.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll(":checked").length || o.push(":checked")
      }), gb(function(a) {
        var b = e.createElement("input");
        b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && o.push("name" + K + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), o.push(",.*:")
      })), (c.matchesSelector = Y.test(q = m.webkitMatchesSelector || m.mozMatchesSelector || m.oMatchesSelector || m.msMatchesSelector)) && gb(function(a) {
        c.disconnectedMatch = q.call(a, "div"), q.call(a, "[s!='']:x"), p.push("!=", O)
      }), o = o.length && new RegExp(o.join("|")), p = p.length && new RegExp(p.join("|")), b = Y.test(m.compareDocumentPosition), r = b || Y.test(m.contains) ? function(a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
          d = b && b.parentNode;
        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
      } : function(a, b) {
        if (b)
          while (b = b.parentNode)
            if (b === a) return !0;
        return !1
      }, z = b ? function(a, b) {
        if (a === b) return j = !0, 0;
        var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
        return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === t && r(t, a) ? -1 : b === e || b.ownerDocument === t && r(t, b) ? 1 : i ? I.call(i, a) - I.call(i, b) : 0 : 4 & d ? -1 : 1)
      } : function(a, b) {
        if (a === b) return j = !0, 0;
        var c, d = 0,
          f = a.parentNode,
          g = b.parentNode,
          h = [a],
          k = [b];
        if (!f || !g) return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : i ? I.call(i, a) - I.call(i, b) : 0;
        if (f === g) return ib(a, b);
        c = a;
        while (c = c.parentNode) h.unshift(c);
        c = b;
        while (c = c.parentNode) k.unshift(c);
        while (h[d] === k[d]) d++;
        return d ? ib(h[d], k[d]) : h[d] === t ? -1 : k[d] === t ? 1 : 0
      }, e) : l
    }, db.matches = function(a, b) {
      return db(a, null, null, b)
    }, db.matchesSelector = function(a, b) {
      if ((a.ownerDocument || a) !== l && k(a), b = b.replace(S, "='$1']"), !(!c.matchesSelector || !n || p && p.test(b) || o && o.test(b))) try {
        var d = q.call(a, b);
        if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
      } catch (e) {}
      return db(b, l, null, [a]).length > 0
    }, db.contains = function(a, b) {
      return (a.ownerDocument || a) !== l && k(a), r(a, b)
    }, db.attr = function(a, b) {
      (a.ownerDocument || a) !== l && k(a);
      var e = d.attrHandle[b.toLowerCase()],
        f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !n) : void 0;
      return void 0 !== f ? f : c.attributes || !n ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
    }, db.error = function(a) {
      throw new Error("Syntax error, unrecognized expression: " + a)
    }, db.uniqueSort = function(a) {
      var b, d = [],
        e = 0,
        f = 0;
      if (j = !c.detectDuplicates, i = !c.sortStable && a.slice(0), a.sort(z), j) {
        while (b = a[f++]) b === a[f] && (e = d.push(f));
        while (e--) a.splice(d[e], 1)
      }
      return i = null, a
    }, e = db.getText = function(a) {
      var b, c = "",
        d = 0,
        f = a.nodeType;
      if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;
          for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
        } else if (3 === f || 4 === f) return a.nodeValue
      } else
        while (b = a[d++]) c += e(b);
      return c
    }, d = db.selectors = {
      cacheLength: 50,
      createPseudo: fb,
      match: V,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function(a) {
          return a[1] = a[1].replace(ab, bb), a[3] = (a[4] || a[5] || "").replace(ab, bb), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
        },
        CHILD: function(a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || db.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && db.error(a[0]), a
        },
        PSEUDO: function(a) {
          var b, c = !a[5] && a[2];
          return V.CHILD.test(a[0]) ? null : (a[3] && void 0 !== a[4] ? a[2] = a[4] : c && T.test(c) && (b = ob(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
        }
      },
      filter: {
        TAG: function(a) {
          var b = a.replace(ab, bb).toLowerCase();
          return "*" === a ? function() {
            return !0
          } : function(a) {
            return a.nodeName && a.nodeName.toLowerCase() === b
          }
        },
        CLASS: function(a) {
          var b = w[a + " "];
          return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && w(a, function(a) {
            return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== A && a.getAttribute("class") || "")
          })
        },
        ATTR: function(a, b, c) {
          return function(d) {
            var e = db.attr(d, a);
            return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
          }
        },
        CHILD: function(a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
            g = "last" !== a.slice(-4),
            h = "of-type" === b;
          return 1 === d && 0 === e ? function(a) {
            return !!a.parentNode
          } : function(b, c, i) {
            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
              q = b.parentNode,
              r = h && b.nodeName.toLowerCase(),
              t = !i && !h;
            if (q) {
              if (f) {
                while (p) {
                  l = b;
                  while (l = l[p])
                    if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                  o = p = "only" === a && !o && "nextSibling"
                }
                return !0
              }
              if (o = [g ? q.firstChild : q.lastChild], g && t) {
                k = q[s] || (q[s] = {}), j = k[a] || [], n = j[0] === u && j[1], m = j[0] === u && j[2], l = n && q.childNodes[n];
                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                  if (1 === l.nodeType && ++m && l === b) {
                    k[a] = [u, n, m];
                    break
                  }
              } else if (t && (j = (b[s] || (b[s] = {}))[a]) && j[0] === u) m = j[1];
              else
                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                  if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (t && ((l[s] || (l[s] = {}))[a] = [u, m]), l === b)) break;
              return m -= e, m === d || m % d === 0 && m / d >= 0
            }
          }
        },
        PSEUDO: function(a, b) {
          var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || db.error("unsupported pseudo: " + a);
          return e[s] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? fb(function(a, c) {
            var d, f = e(a, b),
              g = f.length;
            while (g--) d = I.call(a, f[g]), a[d] = !(c[d] = f[g])
          }) : function(a) {
            return e(a, 0, c)
          }) : e
        }
      },
      pseudos: {
        not: fb(function(a) {
          var b = [],
            c = [],
            d = g(a.replace(P, "$1"));
          return d[s] ? fb(function(a, b, c, e) {
            var f, g = d(a, null, e, []),
              h = a.length;
            while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
          }) : function(a, e, f) {
            return b[0] = a, d(b, null, f, c), !c.pop()
          }
        }),
        has: fb(function(a) {
          return function(b) {
            return db(a, b).length > 0
          }
        }),
        contains: fb(function(a) {
          return function(b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
          }
        }),
        lang: fb(function(a) {
          return U.test(a || "") || db.error("unsupported lang: " + a), a = a.replace(ab, bb).toLowerCase(),
            function(b) {
              var c;
              do
                if (c = n ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
              return !1
            }
        }),
        target: function(b) {
          var c = a.location && a.location.hash;
          return c && c.slice(1) === b.id
        },
        root: function(a) {
          return a === m
        },
        focus: function(a) {
          return a === l.activeElement && (!l.hasFocus || l.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
        },
        enabled: function(a) {
          return a.disabled === !1
        },
        disabled: function(a) {
          return a.disabled === !0
        },
        checked: function(a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && !!a.checked || "option" === b && !!a.selected
        },
        selected: function(a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
        },
        empty: function(a) {
          for (a = a.firstChild; a; a = a.nextSibling)
            if (a.nodeType < 6) return !1;
          return !0
        },
        parent: function(a) {
          return !d.pseudos.empty(a)
        },
        header: function(a) {
          return X.test(a.nodeName)
        },
        input: function(a) {
          return W.test(a.nodeName)
        },
        button: function(a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && "button" === a.type || "button" === b
        },
        text: function(a) {
          var b;
          return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
        },
        first: lb(function() {
          return [0]
        }),
        last: lb(function(a, b) {
          return [b - 1]
        }),
        eq: lb(function(a, b, c) {
          return [0 > c ? c + b : c]
        }),
        even: lb(function(a, b) {
          for (var c = 0; b > c; c += 2) a.push(c);
          return a
        }),
        odd: lb(function(a, b) {
          for (var c = 1; b > c; c += 2) a.push(c);
          return a
        }),
        lt: lb(function(a, b, c) {
          for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
          return a
        }),
        gt: lb(function(a, b, c) {
          for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
          return a
        })
      }
    }, d.pseudos.nth = d.pseudos.eq;
    for (b in {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) d.pseudos[b] = jb(b);
    for (b in {
        submit: !0,
        reset: !0
      }) d.pseudos[b] = kb(b);

    function nb() {}
    nb.prototype = d.filters = d.pseudos, d.setFilters = new nb;

    function ob(a, b) {
      var c, e, f, g, h, i, j, k = x[a + " "];
      if (k) return b ? 0 : k.slice(0);
      h = a, i = [], j = d.preFilter;
      while (h) {
        (!c || (e = Q.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({
          value: c,
          type: e[0].replace(P, " ")
        }), h = h.slice(c.length));
        for (g in d.filter) !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
          value: c,
          type: g,
          matches: e
        }), h = h.slice(c.length));
        if (!c) break
      }
      return b ? h.length : h ? db.error(a) : x(a, i).slice(0)
    }

    function pb(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
      return d
    }

    function qb(a, b, c) {
      var d = b.dir,
        e = c && "parentNode" === d,
        f = v++;
      return b.first ? function(b, c, f) {
        while (b = b[d])
          if (1 === b.nodeType || e) return a(b, c, f)
      } : function(b, c, g) {
        var h, i, j = [u, f];
        if (g) {
          while (b = b[d])
            if ((1 === b.nodeType || e) && a(b, c, g)) return !0
        } else
          while (b = b[d])
            if (1 === b.nodeType || e) {
              if (i = b[s] || (b[s] = {}), (h = i[d]) && h[0] === u && h[1] === f) return j[2] = h[2];
              if (i[d] = j, j[2] = a(b, c, g)) return !0
            }
      }
    }

    function rb(a) {
      return a.length > 1 ? function(b, c, d) {
        var e = a.length;
        while (e--)
          if (!a[e](b, c, d)) return !1;
        return !0
      } : a[0]
    }

    function sb(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
      return g
    }

    function tb(a, b, c, d, e, f) {
      return d && !d[s] && (d = tb(d)), e && !e[s] && (e = tb(e, f)), fb(function(f, g, h, i) {
        var j, k, l, m = [],
          n = [],
          o = g.length,
          p = f || wb(b || "*", h.nodeType ? [h] : h, []),
          q = !a || !f && b ? p : sb(p, m, a, h, i),
          r = c ? e || (f ? a : o || d) ? [] : g : q;
        if (c && c(q, r, h, i), d) {
          j = sb(r, n), d(j, [], h, i), k = j.length;
          while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
        }
        if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;
              while (k--)(l = r[k]) && j.push(q[k] = l);
              e(null, r = [], j, i)
            }
            k = r.length;
            while (k--)(l = r[k]) && (j = e ? I.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
          }
        } else r = sb(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r)
      })
    }

    function ub(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], i = g || d.relative[" "], j = g ? 1 : 0, k = qb(function(a) {
          return a === b
        }, i, !0), l = qb(function(a) {
          return I.call(b, a) > -1
        }, i, !0), m = [function(a, c, d) {
          return !g && (d || c !== h) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
        }]; f > j; j++)
        if (c = d.relative[a[j].type]) m = [qb(rb(m), c)];
        else {
          if (c = d.filter[a[j].type].apply(null, a[j].matches), c[s]) {
            for (e = ++j; f > e; e++)
              if (d.relative[a[e].type]) break;
            return tb(j > 1 && rb(m), j > 1 && pb(a.slice(0, j - 1).concat({
              value: " " === a[j - 2].type ? "*" : ""
            })).replace(P, "$1"), c, e > j && ub(a.slice(j, e)), f > e && ub(a = a.slice(e)), f > e && pb(a))
          }
          m.push(c)
        }
      return rb(m)
    }

    function vb(a, b) {
      var c = b.length > 0,
        e = a.length > 0,
        f = function(f, g, i, j, k) {
          var m, n, o, p = 0,
            q = "0",
            r = f && [],
            s = [],
            t = h,
            v = f || e && d.find.TAG("*", k),
            w = u += null == t ? 1 : Math.random() || .1,
            x = v.length;
          for (k && (h = g !== l && g); q !== x && null != (m = v[q]); q++) {
            if (e && m) {
              n = 0;
              while (o = a[n++])
                if (o(m, g, i)) {
                  j.push(m);
                  break
                }
              k && (u = w)
            }
            c && ((m = !o && m) && p--, f && r.push(m))
          }
          if (p += q, c && q !== p) {
            n = 0;
            while (o = b[n++]) o(r, s, g, i);
            if (f) {
              if (p > 0)
                while (q--) r[q] || s[q] || (s[q] = E.call(j));
              s = sb(s)
            }
            G.apply(j, s), k && !f && s.length > 0 && p + b.length > 1 && db.uniqueSort(j)
          }
          return k && (u = w, h = t), r
        };
      return c ? fb(f) : f
    }
    g = db.compile = function(a, b) {
      var c, d = [],
        e = [],
        f = y[a + " "];
      if (!f) {
        b || (b = ob(a)), c = b.length;
        while (c--) f = ub(b[c]), f[s] ? d.push(f) : e.push(f);
        f = y(a, vb(e, d))
      }
      return f
    };

    function wb(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) db(a, b[d], c);
      return c
    }

    function xb(a, b, e, f) {
      var h, i, j, k, l, m = ob(a);
      if (!f && 1 === m.length) {
        if (i = m[0] = m[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && c.getById && 9 === b.nodeType && n && d.relative[i[1].type]) {
          if (b = (d.find.ID(j.matches[0].replace(ab, bb), b) || [])[0], !b) return e;
          a = a.slice(i.shift().value.length)
        }
        h = V.needsContext.test(a) ? 0 : i.length;
        while (h--) {
          if (j = i[h], d.relative[k = j.type]) break;
          if ((l = d.find[k]) && (f = l(j.matches[0].replace(ab, bb), $.test(i[0].type) && mb(b.parentNode) || b))) {
            if (i.splice(h, 1), a = f.length && pb(i), !a) return G.apply(e, f), e;
            break
          }
        }
      }
      return g(a, m)(f, b, !n, e, $.test(a) && mb(b.parentNode) || b), e
    }
    return c.sortStable = s.split("").sort(z).join("") === s, c.detectDuplicates = !!j, k(), c.sortDetached = gb(function(a) {
      return 1 & a.compareDocumentPosition(l.createElement("div"))
    }), gb(function(a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
    }) || hb("type|href|height|width", function(a, b, c) {
      return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
    }), c.attributes && gb(function(a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
    }) || hb("value", function(a, b, c) {
      return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
    }), gb(function(a) {
      return null == a.getAttribute("disabled")
    }) || hb(J, function(a, b, c) {
      var d;
      return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
    }), db
  }(a);
  n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
  var u = n.expr.match.needsContext,
    v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    w = /^.[^:#\[\.,]*$/;

  function x(a, b, c) {
    if (n.isFunction(b)) return n.grep(a, function(a, d) {
      return !!b.call(a, d, a) !== c
    });
    if (b.nodeType) return n.grep(a, function(a) {
      return a === b !== c
    });
    if ("string" == typeof b) {
      if (w.test(b)) return n.filter(b, a, c);
      b = n.filter(b, a)
    }
    return n.grep(a, function(a) {
      return n.inArray(a, b) >= 0 !== c
    })
  }
  n.filter = function(a, b, c) {
    var d = b[0];
    return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
      return 1 === a.nodeType
    }))
  }, n.fn.extend({
    find: function(a) {
      var b, c = [],
        d = this,
        e = d.length;
      if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
        for (b = 0; e > b; b++)
          if (n.contains(d[b], this)) return !0
      }));
      for (b = 0; e > b; b++) n.find(a, d[b], c);
      return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
    },
    filter: function(a) {
      return this.pushStack(x(this, a || [], !1))
    },
    not: function(a) {
      return this.pushStack(x(this, a || [], !0))
    },
    is: function(a) {
      return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length
    }
  });
  var y, z = a.document,
    A = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    B = n.fn.init = function(a, b) {
      var c, d;
      if (!a) return this;
      if ("string" == typeof a) {
        if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : A.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
        if (c[1]) {
          if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : z, !0)), v.test(c[1]) && n.isPlainObject(b))
            for (c in b) n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
          return this
        }
        if (d = z.getElementById(c[2]), d && d.parentNode) {
          if (d.id !== c[2]) return y.find(a);
          this.length = 1, this[0] = d
        }
        return this.context = z, this.selector = a, this
      }
      return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
    };
  B.prototype = n.fn, y = n(z);
  var C = /^(?:parents|prev(?:Until|All))/,
    D = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  n.extend({
    dir: function(a, b, c) {
      var d = [],
        e = a[b];
      while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !n(e).is(c))) 1 === e.nodeType && d.push(e), e = e[b];
      return d
    },
    sibling: function(a, b) {
      for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
      return c
    }
  }), n.fn.extend({
    has: function(a) {
      var b, c = n(a, this),
        d = c.length;
      return this.filter(function() {
        for (b = 0; d > b; b++)
          if (n.contains(this, c[b])) return !0
      })
    },
    closest: function(a, b) {
      for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
        for (c = this[d]; c && c !== b; c = c.parentNode)
          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
            f.push(c);
            break
          }
      return this.pushStack(f.length > 1 ? n.unique(f) : f)
    },
    index: function(a) {
      return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function(a, b) {
      return this.pushStack(n.unique(n.merge(this.get(), n(a, b))))
    },
    addBack: function(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
    }
  });

  function E(a, b) {
    do a = a[b]; while (a && 1 !== a.nodeType);
    return a
  }
  n.each({
    parent: function(a) {
      var b = a.parentNode;
      return b && 11 !== b.nodeType ? b : null
    },
    parents: function(a) {
      return n.dir(a, "parentNode")
    },
    parentsUntil: function(a, b, c) {
      return n.dir(a, "parentNode", c)
    },
    next: function(a) {
      return E(a, "nextSibling")
    },
    prev: function(a) {
      return E(a, "previousSibling")
    },
    nextAll: function(a) {
      return n.dir(a, "nextSibling")
    },
    prevAll: function(a) {
      return n.dir(a, "previousSibling")
    },
    nextUntil: function(a, b, c) {
      return n.dir(a, "nextSibling", c)
    },
    prevUntil: function(a, b, c) {
      return n.dir(a, "previousSibling", c)
    },
    siblings: function(a) {
      return n.sibling((a.parentNode || {}).firstChild, a)
    },
    children: function(a) {
      return n.sibling(a.firstChild)
    },
    contents: function(a) {
      return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes)
    }
  }, function(a, b) {
    n.fn[a] = function(c, d) {
      var e = n.map(this, b, c);
      return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (D[a] || (e = n.unique(e)), C.test(a) && (e = e.reverse())), this.pushStack(e)
    }
  });
  var F = /\S+/g,
    G = {};

  function H(a) {
    var b = G[a] = {};
    return n.each(a.match(F) || [], function(a, c) {
      b[c] = !0
    }), b
  }
  n.Callbacks = function(a) {
    a = "string" == typeof a ? G[a] || H(a) : n.extend({}, a);
    var b, c, d, e, f, g, h = [],
      i = !a.once && [],
      j = function(l) {
        for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++)
          if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
            c = !1;
            break
          }
        b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
      },
      k = {
        add: function() {
          if (h) {
            var d = h.length;
            ! function f(b) {
              n.each(b, function(b, c) {
                var d = n.type(c);
                "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c)
              })
            }(arguments), b ? e = h.length : c && (g = d, j(c))
          }
          return this
        },
        remove: function() {
          return h && n.each(arguments, function(a, c) {
            var d;
            while ((d = n.inArray(c, h, d)) > -1) h.splice(d, 1), b && (e >= d && e--, f >= d && f--)
          }), this
        },
        has: function(a) {
          return a ? n.inArray(a, h) > -1 : !(!h || !h.length)
        },
        empty: function() {
          return h = [], e = 0, this
        },
        disable: function() {
          return h = i = c = void 0, this
        },
        disabled: function() {
          return !h
        },
        lock: function() {
          return i = void 0, c || k.disable(), this
        },
        locked: function() {
          return !i
        },
        fireWith: function(a, c) {
          return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this
        },
        fire: function() {
          return k.fireWith(this, arguments), this
        },
        fired: function() {
          return !!d
        }
      };
    return k
  }, n.extend({
    Deferred: function(a) {
      var b = [
          ["resolve", "done", n.Callbacks("once memory"), "resolved"],
          ["reject", "fail", n.Callbacks("once memory"), "rejected"],
          ["notify", "progress", n.Callbacks("memory")]
        ],
        c = "pending",
        d = {
          state: function() {
            return c
          },
          always: function() {
            return e.done(arguments).fail(arguments), this
          },
          then: function() {
            var a = arguments;
            return n.Deferred(function(c) {
              n.each(b, function(b, f) {
                var g = n.isFunction(a[b]) && a[b];
                e[f[1]](function() {
                  var a = g && g.apply(this, arguments);
                  a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                })
              }), a = null
            }).promise()
          },
          promise: function(a) {
            return null != a ? n.extend(a, d) : d
          }
        },
        e = {};
      return d.pipe = d.then, n.each(b, function(a, f) {
        var g = f[2],
          h = f[3];
        d[f[1]] = g.add, h && g.add(function() {
          c = h
        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
          return e[f[0] + "With"](this === e ? d : this, arguments), this
        }, e[f[0] + "With"] = g.fireWith
      }), d.promise(e), a && a.call(e, e), e
    },
    when: function(a) {
      var b = 0,
        c = d.call(arguments),
        e = c.length,
        f = 1 !== e || a && n.isFunction(a.promise) ? e : 0,
        g = 1 === f ? a : n.Deferred(),
        h = function(a, b, c) {
          return function(e) {
            b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
          }
        },
        i, j, k;
      if (e > 1)
        for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
      return f || g.resolveWith(k, c), g.promise()
    }
  });
  var I;
  n.fn.ready = function(a) {
    return n.ready.promise().done(a), this
  }, n.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function(a) {
      a ? n.readyWait++ : n.ready(!0)
    },
    ready: function(a) {
      if (a === !0 ? !--n.readyWait : !n.isReady) {
        if (!z.body) return setTimeout(n.ready);
        n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(z, [n]), n.fn.trigger && n(z).trigger("ready").off("ready"))
      }
    }
  });

  function J() {
    z.addEventListener ? (z.removeEventListener("DOMContentLoaded", K, !1), a.removeEventListener("load", K, !1)) : (z.detachEvent("onreadystatechange", K), a.detachEvent("onload", K))
  }

  function K() {
    (z.addEventListener || "load" === event.type || "complete" === z.readyState) && (J(), n.ready())
  }
  n.ready.promise = function(b) {
    if (!I)
      if (I = n.Deferred(), "complete" === z.readyState) setTimeout(n.ready);
      else if (z.addEventListener) z.addEventListener("DOMContentLoaded", K, !1), a.addEventListener("load", K, !1);
    else {
      z.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
      var c = !1;
      try {
        c = null == a.frameElement && z.documentElement
      } catch (d) {}
      c && c.doScroll && ! function e() {
        if (!n.isReady) {
          try {
            c.doScroll("left")
          } catch (a) {
            return setTimeout(e, 50)
          }
          J(), n.ready()
        }
      }()
    }
    return I.promise(b)
  };
  var L = "undefined",
    M;
  for (M in n(l)) break;
  l.ownLast = "0" !== M, l.inlineBlockNeedsLayout = !1, n(function() {
      var a, b, c = z.getElementsByTagName("body")[0];
      c && (a = z.createElement("div"), a.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", b = z.createElement("div"), c.appendChild(a).appendChild(b), typeof b.style.zoom !== L && (b.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (l.inlineBlockNeedsLayout = 3 === b.offsetWidth) && (c.style.zoom = 1)), c.removeChild(a), a = b = null)
    }),
    function() {
      var a = z.createElement("div");
      if (null == l.deleteExpando) {
        l.deleteExpando = !0;
        try {
          delete a.test
        } catch (b) {
          l.deleteExpando = !1
        }
      }
      a = null
    }(), n.acceptData = function(a) {
      var b = n.noData[(a.nodeName + " ").toLowerCase()],
        c = +a.nodeType || 1;
      return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
    };
  var N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    O = /([A-Z])/g;

  function P(a, b, c) {
    if (void 0 === c && 1 === a.nodeType) {
      var d = "data-" + b.replace(O, "-$1").toLowerCase();
      if (c = a.getAttribute(d), "string" == typeof c) {
        try {
          c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
        } catch (e) {}
        n.data(a, b, c)
      } else c = void 0
    }
    return c
  }

  function Q(a) {
    var b;
    for (b in a)
      if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
    return !0
  }

  function R(a, b, d, e) {
    if (n.acceptData(a)) {
      var f, g, h = n.expando,
        i = a.nodeType,
        j = i ? n.cache : a,
        k = i ? a[h] : a[h] && h;
      if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : {
        toJSON: n.noop
      }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g, f
    }
  }

  function S(a, b, c) {
    if (n.acceptData(a)) {
      var d, e, f = a.nodeType,
        g = f ? n.cache : a,
        h = f ? a[n.expando] : n.expando;
      if (g[h]) {
        if (b && (d = c ? g[h] : g[h].data)) {
          n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
          while (e--) delete d[b[e]];
          if (c ? !Q(d) : !n.isEmptyObject(d)) return
        }(c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
      }
    }
  }
  n.extend({
    cache: {},
    noData: {
      "applet ": !0,
      "embed ": !0,
      "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
    },
    hasData: function(a) {
      return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !!a && !Q(a)
    },
    data: function(a, b, c) {
      return R(a, b, c)
    },
    removeData: function(a, b) {
      return S(a, b)
    },
    _data: function(a, b, c) {
      return R(a, b, c, !0)
    },
    _removeData: function(a, b) {
      return S(a, b, !0)
    }
  }), n.fn.extend({
    data: function(a, b) {
      var c, d, e, f = this[0],
        g = f && f.attributes;
      if (void 0 === a) {
        if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
          c = g.length;
          while (c--) d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d]));
          n._data(f, "parsedAttrs", !0)
        }
        return e
      }
      return "object" == typeof a ? this.each(function() {
        n.data(this, a)
      }) : arguments.length > 1 ? this.each(function() {
        n.data(this, a, b)
      }) : f ? P(f, a, n.data(f, a)) : void 0
    },
    removeData: function(a) {
      return this.each(function() {
        n.removeData(this, a)
      })
    }
  }), n.extend({
    queue: function(a, b, c) {
      var d;
      return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
    },
    dequeue: function(a, b) {
      b = b || "fx";
      var c = n.queue(a, b),
        d = c.length,
        e = c.shift(),
        f = n._queueHooks(a, b),
        g = function() {
          n.dequeue(a, b)
        };
      "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
    },
    _queueHooks: function(a, b) {
      var c = b + "queueHooks";
      return n._data(a, c) || n._data(a, c, {
        empty: n.Callbacks("once memory").add(function() {
          n._removeData(a, b + "queue"), n._removeData(a, c)
        })
      })
    }
  }), n.fn.extend({
    queue: function(a, b) {
      var c = 2;
      return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
        var c = n.queue(this, a, b);
        n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
      })
    },
    dequeue: function(a) {
      return this.each(function() {
        n.dequeue(this, a)
      })
    },
    clearQueue: function(a) {
      return this.queue(a || "fx", [])
    },
    promise: function(a, b) {
      var c, d = 1,
        e = n.Deferred(),
        f = this,
        g = this.length,
        h = function() {
          --d || e.resolveWith(f, [f])
        };
      "string" != typeof a && (b = a, a = void 0), a = a || "fx";
      while (g--) c = n._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
      return h(), e.promise(b)
    }
  });
  var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    U = ["Top", "Right", "Bottom", "Left"],
    V = function(a, b) {
      return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
    },
    W = n.access = function(a, b, c, d, e, f, g) {
      var h = 0,
        i = a.length,
        j = null == c;
      if ("object" === n.type(c)) {
        e = !0;
        for (h in c) n.access(a, b, h, c[h], !0, f, g)
      } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
          return j.call(n(a), c)
        })), b))
        for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
      return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    },
    X = /^(?:checkbox|radio)$/i;
  ! function() {
    var a = z.createDocumentFragment(),
      b = z.createElement("div"),
      c = z.createElement("input");
    if (b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a>", l.leadingWhitespace = 3 === b.firstChild.nodeType, l.tbody = !b.getElementsByTagName("tbody").length, l.htmlSerialize = !!b.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== z.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, a.appendChild(c), l.appendChecked = c.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, a.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function() {
        l.noCloneEvent = !1
      }), b.cloneNode(!0).click()), null == l.deleteExpando) {
      l.deleteExpando = !0;
      try {
        delete b.test
      } catch (d) {
        l.deleteExpando = !1
      }
    }
    a = b = c = null
  }(),
  function() {
    var b, c, d = z.createElement("div");
    for (b in {
        submit: !0,
        change: !0,
        focusin: !0
      }) c = "on" + b, (l[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), l[b + "Bubbles"] = d.attributes[c].expando === !1);
    d = null
  }();
  var Y = /^(?:input|select|textarea)$/i,
    Z = /^key/,
    $ = /^(?:mouse|contextmenu)|click/,
    _ = /^(?:focusinfocus|focusoutblur)$/,
    ab = /^([^.]*)(?:\.(.+)|)$/;

  function bb() {
    return !0
  }

  function cb() {
    return !1
  }

  function db() {
    try {
      return z.activeElement
    } catch (a) {}
  }
  n.event = {
    global: {},
    add: function(a, b, c, d, e) {
      var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
      if (r) {
        c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
          return typeof n === L || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments)
        }, k.elem = a), b = (b || "").match(F) || [""], h = b.length;
        while (h--) f = ab.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({
          type: o,
          origType: q,
          data: d,
          handler: c,
          guid: c.guid,
          selector: e,
          needsContext: e && n.expr.match.needsContext.test(e),
          namespace: p.join(".")
        }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0);
        a = null
      }
    },
    remove: function(a, b, c, d, e) {
      var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
      if (r && (k = r.events)) {
        b = (b || "").match(F) || [""], j = b.length;
        while (j--)
          if (h = ab.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
            l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length;
            while (f--) g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
            i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete k[o])
          } else
            for (o in k) n.event.remove(a, o + b[j], c, d, !0);
        n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"))
      }
    },
    trigger: function(b, c, d, e) {
      var f, g, h, i, k, l, m, o = [d || z],
        p = j.call(b, "type") ? b.type : b,
        q = j.call(b, "namespace") ? b.namespace.split(".") : [];
      if (h = l = d = d || z, 3 !== d.nodeType && 8 !== d.nodeType && !_.test(p + n.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[n.expando] ? b : new n.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), k = n.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
        if (!e && !k.noBubble && !n.isWindow(d)) {
          for (i = k.delegateType || p, _.test(i + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), l = h;
          l === (d.ownerDocument || z) && o.push(l.defaultView || l.parentWindow || a)
        }
        m = 0;
        while ((h = o[m++]) && !b.isPropagationStopped()) b.type = m > 1 ? i : k.bindType || p, f = (n._data(h, "events") || {})[b.type] && n._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && n.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
        if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && n.acceptData(d) && g && d[p] && !n.isWindow(d)) {
          l = d[g], l && (d[g] = null), n.event.triggered = p;
          try {
            d[p]()
          } catch (r) {}
          n.event.triggered = void 0, l && (d[g] = l)
        }
        return b.result
      }
    },
    dispatch: function(a) {
      a = n.event.fix(a);
      var b, c, e, f, g, h = [],
        i = d.call(arguments),
        j = (n._data(this, "events") || {})[a.type] || [],
        k = n.event.special[a.type] || {};
      if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
        h = n.event.handlers.call(this, a, j), b = 0;
        while ((f = h[b++]) && !a.isPropagationStopped()) {
          a.currentTarget = f.elem, g = 0;
          while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((n.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()))
        }
        return k.postDispatch && k.postDispatch.call(this, a), a.result
      }
    },
    handlers: function(a, b) {
      var c, d, e, f, g = [],
        h = b.delegateCount,
        i = a.target;
      if (h && i.nodeType && (!a.button || "click" !== a.type))
        for (; i != this; i = i.parentNode || this)
          if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
            for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? n(c, this).index(i) >= 0 : n.find(c, this, null, [i]).length), e[c] && e.push(d);
            e.length && g.push({
              elem: i,
              handlers: e
            })
          }
      return h < b.length && g.push({
        elem: this,
        handlers: b.slice(h)
      }), g
    },
    fix: function(a) {
      if (a[n.expando]) return a;
      var b, c, d, e = a.type,
        f = a,
        g = this.fixHooks[e];
      g || (this.fixHooks[e] = g = $.test(e) ? this.mouseHooks : Z.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
      while (b--) c = d[b], a[c] = f[c];
      return a.target || (a.target = f.srcElement || z), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function(a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function(a, b) {
        var c, d, e, f = b.button,
          g = b.fromElement;
        return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || z, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
      }
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function() {
          if (this !== db() && this.focus) try {
            return this.focus(), !1
          } catch (a) {}
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          return this === db() && this.blur ? (this.blur(), !1) : void 0
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function() {
          return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
        },
        _default: function(a) {
          return n.nodeName(a.target, "a")
        }
      },
      beforeunload: {
        postDispatch: function(a) {
          void 0 !== a.result && (a.originalEvent.returnValue = a.result)
        }
      }
    },
    simulate: function(a, b, c, d) {
      var e = n.extend(new n.Event, c, {
        type: a,
        isSimulated: !0,
        originalEvent: {}
      });
      d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
    }
  }, n.removeEvent = z.removeEventListener ? function(a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c, !1)
  } : function(a, b, c) {
    var d = "on" + b;
    a.detachEvent && (typeof a[d] === L && (a[d] = null), a.detachEvent(d, c))
  }, n.Event = function(a, b) {
    return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && (a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault()) ? bb : cb) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
  }, n.Event.prototype = {
    isDefaultPrevented: cb,
    isPropagationStopped: cb,
    isImmediatePropagationStopped: cb,
    preventDefault: function() {
      var a = this.originalEvent;
      this.isDefaultPrevented = bb, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
    },
    stopPropagation: function() {
      var a = this.originalEvent;
      this.isPropagationStopped = bb, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
    },
    stopImmediatePropagation: function() {
      this.isImmediatePropagationStopped = bb, this.stopPropagation()
    }
  }, n.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  }, function(a, b) {
    n.event.special[a] = {
      delegateType: b,
      bindType: b,
      handle: function(a) {
        var c, d = this,
          e = a.relatedTarget,
          f = a.handleObj;
        return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
      }
    }
  }), l.submitBubbles || (n.event.special.submit = {
    setup: function() {
      return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function(a) {
        var b = a.target,
          c = n.nodeName(b, "input") || n.nodeName(b, "button") ? b.form : void 0;
        c && !n._data(c, "submitBubbles") && (n.event.add(c, "submit._submit", function(a) {
          a._submit_bubble = !0
        }), n._data(c, "submitBubbles", !0))
      })
    },
    postDispatch: function(a) {
      a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a, !0))
    },
    teardown: function() {
      return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit")
    }
  }), l.changeBubbles || (n.event.special.change = {
    setup: function() {
      return Y.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (n.event.add(this, "propertychange._change", function(a) {
        "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
      }), n.event.add(this, "click._change", function(a) {
        this._just_changed && !a.isTrigger && (this._just_changed = !1), n.event.simulate("change", this, a, !0)
      })), !1) : void n.event.add(this, "beforeactivate._change", function(a) {
        var b = a.target;
        Y.test(b.nodeName) && !n._data(b, "changeBubbles") && (n.event.add(b, "change._change", function(a) {
          !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a, !0)
        }), n._data(b, "changeBubbles", !0))
      })
    },
    handle: function(a) {
      var b = a.target;
      return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
    },
    teardown: function() {
      return n.event.remove(this, "._change"), !Y.test(this.nodeName)
    }
  }), l.focusinBubbles || n.each({
    focus: "focusin",
    blur: "focusout"
  }, function(a, b) {
    var c = function(a) {
      n.event.simulate(b, a.target, n.event.fix(a), !0)
    };
    n.event.special[b] = {
      setup: function() {
        var d = this.ownerDocument || this,
          e = n._data(d, b);
        e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1)
      },
      teardown: function() {
        var d = this.ownerDocument || this,
          e = n._data(d, b) - 1;
        e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b))
      }
    }
  }), n.fn.extend({
    on: function(a, b, c, d, e) {
      var f, g;
      if ("object" == typeof a) {
        "string" != typeof b && (c = c || b, b = void 0);
        for (f in a) this.on(f, b, c, a[f], e);
        return this
      }
      if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = cb;
      else if (!d) return this;
      return 1 === e && (g = d, d = function(a) {
        return n().off(a), g.apply(this, arguments)
      }, d.guid = g.guid || (g.guid = n.guid++)), this.each(function() {
        n.event.add(this, a, d, c, b)
      })
    },
    one: function(a, b, c, d) {
      return this.on(a, b, c, d, 1)
    },
    off: function(a, b, c) {
      var d, e;
      if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
      if ("object" == typeof a) {
        for (e in a) this.off(e, b, a[e]);
        return this
      }
      return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = cb), this.each(function() {
        n.event.remove(this, a, c, b)
      })
    },
    trigger: function(a, b) {
      return this.each(function() {
        n.event.trigger(a, b, this)
      })
    },
    triggerHandler: function(a, b) {
      var c = this[0];
      return c ? n.event.trigger(a, b, c, !0) : void 0
    }
  });

  function eb(a) {
    var b = fb.split("|"),
      c = a.createDocumentFragment();
    if (c.createElement)
      while (b.length) c.createElement(b.pop());
    return c
  }
  var fb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    gb = / jQuery\d+="(?:null|\d+)"/g,
    hb = new RegExp("<(?:" + fb + ")[\\s/>]", "i"),
    ib = /^\s+/,
    jb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    kb = /<([\w:]+)/,
    lb = /<tbody/i,
    mb = /<|&#?\w+;/,
    nb = /<(?:script|style|link)/i,
    ob = /checked\s*(?:[^=]|=\s*.checked.)/i,
    pb = /^$|\/(?:java|ecma)script/i,
    qb = /^true\/(.*)/,
    rb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    sb = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      area: [1, "<map>", "</map>"],
      param: [1, "<object>", "</object>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    },
    tb = eb(z),
    ub = tb.appendChild(z.createElement("div"));
  sb.optgroup = sb.option, sb.tbody = sb.tfoot = sb.colgroup = sb.caption = sb.thead, sb.th = sb.td;

  function vb(a, b) {
    var c, d, e = 0,
      f = typeof a.getElementsByTagName !== L ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== L ? a.querySelectorAll(b || "*") : void 0;
    if (!f)
      for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, vb(d, b));
    return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f
  }

  function wb(a) {
    X.test(a.type) && (a.defaultChecked = a.checked)
  }

  function xb(a, b) {
    return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
  }

  function yb(a) {
    return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a
  }

  function zb(a) {
    var b = qb.exec(a.type);
    return b ? a.type = b[1] : a.removeAttribute("type"), a
  }

  function Ab(a, b) {
    for (var c, d = 0; null != (c = a[d]); d++) n._data(c, "globalEval", !b || n._data(b[d], "globalEval"))
  }

  function Bb(a, b) {
    if (1 === b.nodeType && n.hasData(a)) {
      var c, d, e, f = n._data(a),
        g = n._data(b, f),
        h = f.events;
      if (h) {
        delete g.handle, g.events = {};
        for (c in h)
          for (d = 0, e = h[c].length; e > d; d++) n.event.add(b, c, h[c][d])
      }
      g.data && (g.data = n.extend({}, g.data))
    }
  }

  function Cb(a, b) {
    var c, d, e;
    if (1 === b.nodeType) {
      if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) {
        e = n._data(b);
        for (d in e.events) n.removeEvent(b, d, e.handle);
        b.removeAttribute(n.expando)
      }
      "script" === c && b.text !== a.text ? (yb(b).text = a.text, zb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && X.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }
  }
  n.extend({
    clone: function(a, b, c) {
      var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
      if (l.html5Clone || n.isXMLDoc(a) || !hb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ub.innerHTML = a.outerHTML, ub.removeChild(f = ub.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
        for (d = vb(f), h = vb(a), g = 0; null != (e = h[g]); ++g) d[g] && Cb(e, d[g]);
      if (b)
        if (c)
          for (h = h || vb(a), d = d || vb(f), g = 0; null != (e = h[g]); g++) Bb(e, d[g]);
        else Bb(a, f);
      return d = vb(f, "script"), d.length > 0 && Ab(d, !i && vb(a, "script")), d = h = e = null, f
    },
    buildFragment: function(a, b, c, d) {
      for (var e, f, g, h, i, j, k, m = a.length, o = eb(b), p = [], q = 0; m > q; q++)
        if (f = a[q], f || 0 === f)
          if ("object" === n.type(f)) n.merge(p, f.nodeType ? [f] : f);
          else if (mb.test(f)) {
        h = h || o.appendChild(b.createElement("div")), i = (kb.exec(f) || ["", ""])[1].toLowerCase(), k = sb[i] || sb._default, h.innerHTML = k[1] + f.replace(jb, "<$1></$2>") + k[2], e = k[0];
        while (e--) h = h.lastChild;
        if (!l.leadingWhitespace && ib.test(f) && p.push(b.createTextNode(ib.exec(f)[0])), !l.tbody) {
          f = "table" !== i || lb.test(f) ? "<table>" !== k[1] || lb.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length;
          while (e--) n.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j)
        }
        n.merge(p, h.childNodes), h.textContent = "";
        while (h.firstChild) h.removeChild(h.firstChild);
        h = o.lastChild
      } else p.push(b.createTextNode(f));
      h && o.removeChild(h), l.appendChecked || n.grep(vb(p, "input"), wb), q = 0;
      while (f = p[q++])
        if ((!d || -1 === n.inArray(f, d)) && (g = n.contains(f.ownerDocument, f), h = vb(o.appendChild(f), "script"), g && Ab(h), c)) {
          e = 0;
          while (f = h[e++]) pb.test(f.type || "") && c.push(f)
        }
      return h = null, o
    },
    cleanData: function(a, b) {
      for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.deleteExpando, m = n.event.special; null != (d = a[h]); h++)
        if ((b || n.acceptData(d)) && (f = d[i], g = f && j[f])) {
          if (g.events)
            for (e in g.events) m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
          j[f] && (delete j[f], k ? delete d[i] : typeof d.removeAttribute !== L ? d.removeAttribute(i) : d[i] = null, c.push(f))
        }
    }
  }), n.fn.extend({
    text: function(a) {
      return W(this, function(a) {
        return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || z).createTextNode(a))
      }, null, a, arguments.length)
    },
    append: function() {
      return this.domManip(arguments, function(a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = xb(this, a);
          b.appendChild(a)
        }
      })
    },
    prepend: function() {
      return this.domManip(arguments, function(a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = xb(this, a);
          b.insertBefore(a, b.firstChild)
        }
      })
    },
    before: function() {
      return this.domManip(arguments, function(a) {
        this.parentNode && this.parentNode.insertBefore(a, this)
      })
    },
    after: function() {
      return this.domManip(arguments, function(a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
      })
    },
    remove: function(a, b) {
      for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || n.cleanData(vb(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && Ab(vb(c, "script")), c.parentNode.removeChild(c));
      return this
    },
    empty: function() {
      for (var a, b = 0; null != (a = this[b]); b++) {
        1 === a.nodeType && n.cleanData(vb(a, !1));
        while (a.firstChild) a.removeChild(a.firstChild);
        a.options && n.nodeName(a, "select") && (a.options.length = 0)
      }
      return this
    },
    clone: function(a, b) {
      return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
        return n.clone(this, a, b)
      })
    },
    html: function(a) {
      return W(this, function(a) {
        var b = this[0] || {},
          c = 0,
          d = this.length;
        if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(gb, "") : void 0;
        if (!("string" != typeof a || nb.test(a) || !l.htmlSerialize && hb.test(a) || !l.leadingWhitespace && ib.test(a) || sb[(kb.exec(a) || ["", ""])[1].toLowerCase()])) {
          a = a.replace(jb, "<$1></$2>");
          try {
            for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(vb(b, !1)), b.innerHTML = a);
            b = 0
          } catch (e) {}
        }
        b && this.empty().append(a)
      }, null, a, arguments.length)
    },
    replaceWith: function() {
      var a = arguments[0];
      return this.domManip(arguments, function(b) {
        a = this.parentNode, n.cleanData(vb(this)), a && a.replaceChild(b, this)
      }), a && (a.length || a.nodeType) ? this : this.remove()
    },
    detach: function(a) {
      return this.remove(a, !0)
    },
    domManip: function(a, b) {
      a = e.apply([], a);
      var c, d, f, g, h, i, j = 0,
        k = this.length,
        m = this,
        o = k - 1,
        p = a[0],
        q = n.isFunction(p);
      if (q || k > 1 && "string" == typeof p && !l.checkClone && ob.test(p)) return this.each(function(c) {
        var d = m.eq(c);
        q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
      });
      if (k && (i = n.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
        for (g = n.map(vb(i, "script"), yb), f = g.length; k > j; j++) d = i, j !== o && (d = n.clone(d, !0, !0), f && n.merge(g, vb(d, "script"))), b.call(this[j], d, j);
        if (f)
          for (h = g[g.length - 1].ownerDocument, n.map(g, zb), j = 0; f > j; j++) d = g[j], pb.test(d.type || "") && !n._data(d, "globalEval") && n.contains(h, d) && (d.src ? n._evalUrl && n._evalUrl(d.src) : n.globalEval((d.text || d.textContent || d.innerHTML || "").replace(rb, "")));
        i = c = null
      }
      return this
    }
  }), n.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(a, b) {
    n.fn[a] = function(a) {
      for (var c, d = 0, e = [], g = n(a), h = g.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), n(g[d])[b](c), f.apply(e, c.get());
      return this.pushStack(e)
    }
  });
  var Db, Eb = {};

  function Fb(b, c) {
    var d = n(c.createElement(b)).appendTo(c.body),
      e = a.getDefaultComputedStyle ? a.getDefaultComputedStyle(d[0]).display : n.css(d[0], "display");
    return d.detach(), e
  }

  function Gb(a) {
    var b = z,
      c = Eb[a];
    return c || (c = Fb(a, b), "none" !== c && c || (Db = (Db || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Db[0].contentWindow || Db[0].contentDocument).document, b.write(), b.close(), c = Fb(a, b), Db.detach()), Eb[a] = c), c
  }! function() {
    var a, b, c = z.createElement("div"),
      d = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
    c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], a.style.cssText = "float:left;opacity:.5", l.opacity = /^0.5/.test(a.style.opacity), l.cssFloat = !!a.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === c.style.backgroundClip, a = c = null, l.shrinkWrapBlocks = function() {
      var a, c, e, f;
      if (null == b) {
        if (a = z.getElementsByTagName("body")[0], !a) return;
        f = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", c = z.createElement("div"), e = z.createElement("div"), a.appendChild(c).appendChild(e), b = !1, typeof e.style.zoom !== L && (e.style.cssText = d + ";width:1px;padding:1px;zoom:1", e.innerHTML = "<div></div>", e.firstChild.style.width = "5px", b = 3 !== e.offsetWidth), a.removeChild(c), a = c = e = null
      }
      return b
    }
  }();
  var Hb = /^margin/,
    Ib = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
    Jb, Kb, Lb = /^(top|right|bottom|left)$/;
  a.getComputedStyle ? (Jb = function(a) {
    return a.ownerDocument.defaultView.getComputedStyle(a, null)
  }, Kb = function(a, b, c) {
    var d, e, f, g, h = a.style;
    return c = c || Jb(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), Ib.test(g) && Hb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
  }) : z.documentElement.currentStyle && (Jb = function(a) {
    return a.currentStyle
  }, Kb = function(a, b, c) {
    var d, e, f, g, h = a.style;
    return c = c || Jb(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Ib.test(g) && !Lb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
  });

  function Mb(a, b) {
    return {
      get: function() {
        var c = a();
        if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments)
      }
    }
  }! function() {
    var b, c, d, e, f, g, h = z.createElement("div"),
      i = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
      j = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
    h.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", b = h.getElementsByTagName("a")[0], b.style.cssText = "float:left;opacity:.5", l.opacity = /^0.5/.test(b.style.opacity), l.cssFloat = !!b.style.cssFloat, h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === h.style.backgroundClip, b = h = null, n.extend(l, {
      reliableHiddenOffsets: function() {
        if (null != c) return c;
        var a, b, d, e = z.createElement("div"),
          f = z.getElementsByTagName("body")[0];
        if (f) return e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = z.createElement("div"), a.style.cssText = i, f.appendChild(a).appendChild(e), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", b = e.getElementsByTagName("td"), b[0].style.cssText = "padding:0;margin:0;border:0;display:none", d = 0 === b[0].offsetHeight, b[0].style.display = "", b[1].style.display = "none", c = d && 0 === b[0].offsetHeight, f.removeChild(a), e = f = null, c
      },
      boxSizing: function() {
        return null == d && k(), d
      },
      boxSizingReliable: function() {
        return null == e && k(), e
      },
      pixelPosition: function() {
        return null == f && k(), f
      },
      reliableMarginRight: function() {
        var b, c, d, e;
        if (null == g && a.getComputedStyle) {
          if (b = z.getElementsByTagName("body")[0], !b) return;
          c = z.createElement("div"), d = z.createElement("div"), c.style.cssText = i, b.appendChild(c).appendChild(d), e = d.appendChild(z.createElement("div")), e.style.cssText = d.style.cssText = j, e.style.marginRight = e.style.width = "0", d.style.width = "1px", g = !parseFloat((a.getComputedStyle(e, null) || {}).marginRight), b.removeChild(c)
        }
        return g
      }
    });

    function k() {
      var b, c, h = z.getElementsByTagName("body")[0];
      h && (b = z.createElement("div"), c = z.createElement("div"), b.style.cssText = i, h.appendChild(b).appendChild(c), c.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", n.swap(h, null != h.style.zoom ? {
        zoom: 1
      } : {}, function() {
        d = 4 === c.offsetWidth
      }), e = !0, f = !1, g = !0, a.getComputedStyle && (f = "1%" !== (a.getComputedStyle(c, null) || {}).top, e = "4px" === (a.getComputedStyle(c, null) || {
        width: "4px"
      }).width), h.removeChild(b), c = h = null)
    }
  }(), n.swap = function(a, b, c, d) {
    var e, f, g = {};
    for (f in b) g[f] = a.style[f], a.style[f] = b[f];
    e = c.apply(a, d || []);
    for (f in b) a.style[f] = g[f];
    return e
  };
  var Nb = /alpha\([^)]*\)/i,
    Ob = /opacity\s*=\s*([^)]*)/,
    Pb = /^(none|table(?!-c[ea]).+)/,
    Qb = new RegExp("^(" + T + ")(.*)$", "i"),
    Rb = new RegExp("^([+-])=(" + T + ")", "i"),
    Sb = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    Tb = {
      letterSpacing: 0,
      fontWeight: 400
    },
    Ub = ["Webkit", "O", "Moz", "ms"];

  function Vb(a, b) {
    if (b in a) return b;
    var c = b.charAt(0).toUpperCase() + b.slice(1),
      d = b,
      e = Ub.length;
    while (e--)
      if (b = Ub[e] + c, b in a) return b;
    return d
  }

  function Wb(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = n._data(d, "olddisplay", Gb(d.nodeName)))) : f[g] || (e = V(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
    for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
    return a
  }

  function Xb(a, b, c) {
    var d = Qb.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
  }

  function Yb(a, b, c, d, e) {
    for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)));
    return g
  }

  function Zb(a, b, c) {
    var d = !0,
      e = "width" === b ? a.offsetWidth : a.offsetHeight,
      f = Jb(a),
      g = l.boxSizing() && "border-box" === n.css(a, "boxSizing", !1, f);
    if (0 >= e || null == e) {
      if (e = Kb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ib.test(e)) return e;
      d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
    }
    return e + Yb(a, b, c || (g ? "border" : "content"), d, f) + "px"
  }
  n.extend({
    cssHooks: {
      opacity: {
        get: function(a, b) {
          if (b) {
            var c = Kb(a, "opacity");
            return "" === c ? "1" : c
          }
        }
      }
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      "float": l.cssFloat ? "cssFloat" : "styleFloat"
    },
    style: function(a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e, f, g, h = n.camelCase(b),
          i = a.style;
        if (b = n.cssProps[h] || (n.cssProps[h] = Vb(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
        if (f = typeof c, "string" === f && (e = Rb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
          i[b] = "", i[b] = c
        } catch (j) {}
      }
    },
    css: function(a, b, c, d) {
      var e, f, g, h = n.camelCase(b);
      return b = n.cssProps[h] || (n.cssProps[h] = Vb(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Kb(a, b, d)), "normal" === f && b in Tb && (f = Tb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || n.isNumeric(e) ? e || 0 : f) : f
    }
  }), n.each(["height", "width"], function(a, b) {
    n.cssHooks[b] = {
      get: function(a, c, d) {
        return c ? 0 === a.offsetWidth && Pb.test(n.css(a, "display")) ? n.swap(a, Sb, function() {
          return Zb(a, b, d)
        }) : Zb(a, b, d) : void 0
      },
      set: function(a, c, d) {
        var e = d && Jb(a);
        return Xb(a, c, d ? Yb(a, b, d, l.boxSizing() && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
      }
    }
  }), l.opacity || (n.cssHooks.opacity = {
    get: function(a, b) {
      return Ob.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
    },
    set: function(a, b) {
      var c = a.style,
        d = a.currentStyle,
        e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
        f = d && d.filter || c.filter || "";
      c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Nb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Nb.test(f) ? f.replace(Nb, e) : f + " " + e)
    }
  }), n.cssHooks.marginRight = Mb(l.reliableMarginRight, function(a, b) {
    return b ? n.swap(a, {
      display: "inline-block"
    }, Kb, [a, "marginRight"]) : void 0
  }), n.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(a, b) {
    n.cssHooks[a + b] = {
      expand: function(c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
        return e
      }
    }, Hb.test(a) || (n.cssHooks[a + b].set = Xb)
  }), n.fn.extend({
    css: function(a, b) {
      return W(this, function(a, b, c) {
        var d, e, f = {},
          g = 0;
        if (n.isArray(b)) {
          for (d = Jb(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
          return f
        }
        return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
      }, a, b, arguments.length > 1)
    },
    show: function() {
      return Wb(this, !0)
    },
    hide: function() {
      return Wb(this)
    },
    toggle: function(a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
        V(this) ? n(this).show() : n(this).hide()
      })
    }
  });

  function $b(a, b, c, d, e) {
    return new $b.prototype.init(a, b, c, d, e)
  }
  n.Tween = $b, $b.prototype = {
    constructor: $b,
    init: function(a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
    },
    cur: function() {
      var a = $b.propHooks[this.prop];
      return a && a.get ? a.get(this) : $b.propHooks._default.get(this)
    },
    run: function(a) {
      var b, c = $b.propHooks[this.prop];
      return this.pos = b = this.options.duration ? n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : $b.propHooks._default.set(this), this
    }
  }, $b.prototype.init.prototype = $b.prototype, $b.propHooks = {
    _default: {
      get: function(a) {
        var b;
        return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
      },
      set: function(a) {
        n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
      }
    }
  }, $b.propHooks.scrollTop = $b.propHooks.scrollLeft = {
    set: function(a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
    }
  }, n.easing = {
    linear: function(a) {
      return a
    },
    swing: function(a) {
      return .5 - Math.cos(a * Math.PI) / 2
    }
  }, n.fx = $b.prototype.init, n.fx.step = {};
  var _b, ac, bc = /^(?:toggle|show|hide)$/,
    cc = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
    dc = /queueHooks$/,
    ec = [jc],
    fc = {
      "*": [function(a, b) {
        var c = this.createTween(a, b),
          d = c.cur(),
          e = cc.exec(b),
          f = e && e[3] || (n.cssNumber[a] ? "" : "px"),
          g = (n.cssNumber[a] || "px" !== f && +d) && cc.exec(n.css(c.elem, a)),
          h = 1,
          i = 20;
        if (g && g[3] !== f) {
          f = f || g[3], e = e || [], g = +d || 1;
          do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
        }
        return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
      }]
    };

  function gc() {
    return setTimeout(function() {
      _b = void 0
    }), _b = n.now()
  }

  function hc(a, b) {
    var c, d = {
        height: a
      },
      e = 0;
    for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = U[e], d["margin" + c] = d["padding" + c] = a;
    return b && (d.opacity = d.width = a), d
  }

  function ic(a, b, c) {
    for (var d, e = (fc[b] || []).concat(fc["*"]), f = 0, g = e.length; g > f; f++)
      if (d = e[f].call(c, b, a)) return d
  }

  function jc(a, b, c) {
    var d, e, f, g, h, i, j, k, m = this,
      o = {},
      p = a.style,
      q = a.nodeType && V(a),
      r = n._data(a, "fxshow");
    c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
      h.unqueued || i()
    }), h.unqueued++, m.always(function() {
      m.always(function() {
        h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
      })
    })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = Gb(a.nodeName), "none" === j && (j = k), "inline" === j && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== k ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function() {
      p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
    }));
    for (d in b)
      if (e = b[d], bc.exec(e)) {
        if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
          if ("show" !== e || !r || void 0 === r[d]) continue;
          q = !0
        }
        o[d] = r && r[d] || n.style(a, d)
      }
    if (!n.isEmptyObject(o)) {
      r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function() {
        n(a).hide()
      }), m.done(function() {
        var b;
        n._removeData(a, "fxshow");
        for (b in o) n.style(a, b, o[b])
      });
      for (d in o) g = ic(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
    }
  }

  function kc(a, b) {
    var c, d, e, f, g;
    for (c in a)
      if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
        f = g.expand(f), delete a[d];
        for (c in f) c in a || (a[c] = f[c], b[c] = e)
      } else b[d] = e
  }

  function lc(a, b, c) {
    var d, e, f = 0,
      g = ec.length,
      h = n.Deferred().always(function() {
        delete i.elem
      }),
      i = function() {
        if (e) return !1;
        for (var b = _b || gc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
        return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
      },
      j = h.promise({
        elem: a,
        props: n.extend({}, b),
        opts: n.extend(!0, {
          specialEasing: {}
        }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: _b || gc(),
        duration: c.duration,
        tweens: [],
        createTween: function(b, c) {
          var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
          return j.tweens.push(d), d
        },
        stop: function(b) {
          var c = 0,
            d = b ? j.tweens.length : 0;
          if (e) return this;
          for (e = !0; d > c; c++) j.tweens[c].run(1);
          return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
        }
      }),
      k = j.props;
    for (kc(k, j.opts.specialEasing); g > f; f++)
      if (d = ec[f].call(j, a, k, j.opts)) return d;
    return n.map(k, ic, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
      elem: a,
      anim: j,
      queue: j.opts.queue
    })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
  }
  n.Animation = n.extend(lc, {
      tweener: function(a, b) {
        n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
        for (var c, d = 0, e = a.length; e > d; d++) c = a[d], fc[c] = fc[c] || [], fc[c].unshift(b)
      },
      prefilter: function(a, b) {
        b ? ec.unshift(a) : ec.push(a)
      }
    }), n.speed = function(a, b, c) {
      var d = a && "object" == typeof a ? n.extend({}, a) : {
        complete: c || !c && b || n.isFunction(a) && a,
        duration: a,
        easing: c && b || b && !n.isFunction(b) && b
      };
      return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
        n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
      }, d
    }, n.fn.extend({
      fadeTo: function(a, b, c, d) {
        return this.filter(V).css("opacity", 0).show().end().animate({
          opacity: b
        }, a, c, d)
      },
      animate: function(a, b, c, d) {
        var e = n.isEmptyObject(a),
          f = n.speed(b, c, d),
          g = function() {
            var b = lc(this, n.extend({}, a), f);
            (e || n._data(this, "finish")) && b.stop(!0)
          };
        return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
      },
      stop: function(a, b, c) {
        var d = function(a) {
          var b = a.stop;
          delete a.stop, b(c)
        };
        return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
          var b = !0,
            e = null != a && a + "queueHooks",
            f = n.timers,
            g = n._data(this);
          if (e) g[e] && g[e].stop && d(g[e]);
          else
            for (e in g) g[e] && g[e].stop && dc.test(e) && d(g[e]);
          for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
          (b || !c) && n.dequeue(this, a)
        })
      },
      finish: function(a) {
        return a !== !1 && (a = a || "fx"), this.each(function() {
          var b, c = n._data(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = n.timers,
            g = d ? d.length : 0;
          for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
          for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
          delete c.finish
        })
      }
    }), n.each(["toggle", "show", "hide"], function(a, b) {
      var c = n.fn[b];
      n.fn[b] = function(a, d, e) {
        return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(hc(b, !0), a, d, e)
      }
    }), n.each({
      slideDown: hc("show"),
      slideUp: hc("hide"),
      slideToggle: hc("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function(a, b) {
      n.fn[a] = function(a, c, d) {
        return this.animate(b, a, c, d)
      }
    }), n.timers = [], n.fx.tick = function() {
      var a, b = n.timers,
        c = 0;
      for (_b = n.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
      b.length || n.fx.stop(), _b = void 0
    }, n.fx.timer = function(a) {
      n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
    }, n.fx.interval = 13, n.fx.start = function() {
      ac || (ac = setInterval(n.fx.tick, n.fx.interval))
    }, n.fx.stop = function() {
      clearInterval(ac), ac = null
    }, n.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, n.fn.delay = function(a, b) {
      return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
        var d = setTimeout(b, a);
        c.stop = function() {
          clearTimeout(d)
        }
      })
    },
    function() {
      var a, b, c, d, e = z.createElement("div");
      e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = e.getElementsByTagName("a")[0], c = z.createElement("select"), d = c.appendChild(z.createElement("option")), b = e.getElementsByTagName("input")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== e.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = d.selected, l.enctype = !!z.createElement("form").enctype, c.disabled = !0, l.optDisabled = !d.disabled, b = z.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value, a = b = c = d = e = null
    }();
  var mc = /\r/g;
  n.fn.extend({
    val: function(a) {
      var b, c, d, e = this[0]; {
        if (arguments.length) return d = n.isFunction(a), this.each(function(c) {
          var e;
          1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
            return null == a ? "" : a + ""
          })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
        });
        if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(mc, "") : null == c ? "" : c)
      }
    }
  }), n.extend({
    valHooks: {
      option: {
        get: function(a) {
          var b = n.find.attr(a, "value");
          return null != b ? b : n.text(a)
        }
      },
      select: {
        get: function(a) {
          for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
            if (c = d[i], !(!c.selected && i !== e || (l.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
              if (b = n(c).val(), f) return b;
              g.push(b)
            }
          return g
        },
        set: function(a, b) {
          var c, d, e = a.options,
            f = n.makeArray(b),
            g = e.length;
          while (g--)
            if (d = e[g], n.inArray(n.valHooks.option.get(d), f) >= 0) try {
              d.selected = c = !0
            } catch (h) {
              d.scrollHeight
            } else d.selected = !1;
          return c || (a.selectedIndex = -1), e
        }
      }
    }
  }), n.each(["radio", "checkbox"], function() {
    n.valHooks[this] = {
      set: function(a, b) {
        return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0
      }
    }, l.checkOn || (n.valHooks[this].get = function(a) {
      return null === a.getAttribute("value") ? "on" : a.value
    })
  });
  var nc, oc, pc = n.expr.attrHandle,
    qc = /^(?:checked|selected)$/i,
    rc = l.getSetAttribute,
    sc = l.input;
  n.fn.extend({
    attr: function(a, b) {
      return W(this, n.attr, a, b, arguments.length > 1)
    },
    removeAttr: function(a) {
      return this.each(function() {
        n.removeAttr(this, a)
      })
    }
  }), n.extend({
    attr: function(a, b, c) {
      var d, e, f = a.nodeType;
      if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === L ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? oc : nc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b))
    },
    removeAttr: function(a, b) {
      var c, d, e = 0,
        f = b && b.match(F);
      if (f && 1 === a.nodeType)
        while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) ? sc && rc || !qc.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(rc ? c : d)
    },
    attrHooks: {
      type: {
        set: function(a, b) {
          if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
            var c = a.value;
            return a.setAttribute("type", b), c && (a.value = c), b
          }
        }
      }
    }
  }), oc = {
    set: function(a, b, c) {
      return b === !1 ? n.removeAttr(a, c) : sc && rc || !qc.test(c) ? a.setAttribute(!rc && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c
    }
  }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
    var c = pc[b] || n.find.attr;
    pc[b] = sc && rc || !qc.test(b) ? function(a, b, d) {
      var e, f;
      return d || (f = pc[b], pc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, pc[b] = f), e
    } : function(a, b, c) {
      return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null
    }
  }), sc && rc || (n.attrHooks.value = {
    set: function(a, b, c) {
      return n.nodeName(a, "input") ? void(a.defaultValue = b) : nc && nc.set(a, b, c)
    }
  }), rc || (nc = {
    set: function(a, b, c) {
      var d = a.getAttributeNode(c);
      return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
    }
  }, pc.id = pc.name = pc.coords = function(a, b, c) {
    var d;
    return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
  }, n.valHooks.button = {
    get: function(a, b) {
      var c = a.getAttributeNode(b);
      return c && c.specified ? c.value : void 0
    },
    set: nc.set
  }, n.attrHooks.contenteditable = {
    set: function(a, b, c) {
      nc.set(a, "" === b ? !1 : b, c)
    }
  }, n.each(["width", "height"], function(a, b) {
    n.attrHooks[b] = {
      set: function(a, c) {
        return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
      }
    }
  })), l.style || (n.attrHooks.style = {
    get: function(a) {
      return a.style.cssText || void 0
    },
    set: function(a, b) {
      return a.style.cssText = b + ""
    }
  });
  var tc = /^(?:input|select|textarea|button|object)$/i,
    uc = /^(?:a|area)$/i;
  n.fn.extend({
    prop: function(a, b) {
      return W(this, n.prop, a, b, arguments.length > 1)
    },
    removeProp: function(a) {
      return a = n.propFix[a] || a, this.each(function() {
        try {
          this[a] = void 0, delete this[a]
        } catch (b) {}
      })
    }
  }), n.extend({
    propFix: {
      "for": "htmlFor",
      "class": "className"
    },
    prop: function(a, b, c) {
      var d, e, f, g = a.nodeType;
      if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
    },
    propHooks: {
      tabIndex: {
        get: function(a) {
          var b = n.find.attr(a, "tabindex");
          return b ? parseInt(b, 10) : tc.test(a.nodeName) || uc.test(a.nodeName) && a.href ? 0 : -1
        }
      }
    }
  }), l.hrefNormalized || n.each(["href", "src"], function(a, b) {
    n.propHooks[b] = {
      get: function(a) {
        return a.getAttribute(b, 4)
      }
    }
  }), l.optSelected || (n.propHooks.selected = {
    get: function(a) {
      var b = a.parentNode;
      return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
    }
  }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    n.propFix[this.toLowerCase()] = this
  }), l.enctype || (n.propFix.enctype = "encoding");
  var vc = /[\t\r\n\f]/g;
  n.fn.extend({
    addClass: function(a) {
      var b, c, d, e, f, g, h = 0,
        i = this.length,
        j = "string" == typeof a && a;
      if (n.isFunction(a)) return this.each(function(b) {
        n(this).addClass(a.call(this, b, this.className))
      });
      if (j)
        for (b = (a || "").match(F) || []; i > h; h++)
          if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(vc, " ") : " ")) {
            f = 0;
            while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
            g = n.trim(d), c.className !== g && (c.className = g)
          }
      return this
    },
    removeClass: function(a) {
      var b, c, d, e, f, g, h = 0,
        i = this.length,
        j = 0 === arguments.length || "string" == typeof a && a;
      if (n.isFunction(a)) return this.each(function(b) {
        n(this).removeClass(a.call(this, b, this.className))
      });
      if (j)
        for (b = (a || "").match(F) || []; i > h; h++)
          if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(vc, " ") : "")) {
            f = 0;
            while (e = b[f++])
              while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
            g = a ? n.trim(d) : "", c.className !== g && (c.className = g)
          }
      return this
    },
    toggleClass: function(a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function(c) {
        n(this).toggleClass(a.call(this, c, this.className, b), b)
      } : function() {
        if ("string" === c) {
          var b, d = 0,
            e = n(this),
            f = a.match(F) || [];
          while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
        } else(c === L || "boolean" === c) && (this.className && n._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : n._data(this, "__className__") || "")
      })
    },
    hasClass: function(a) {
      for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
        if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(vc, " ").indexOf(b) >= 0) return !0;
      return !1
    }
  }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
    n.fn[b] = function(a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
    }
  }), n.fn.extend({
    hover: function(a, b) {
      return this.mouseenter(a).mouseleave(b || a)
    },
    bind: function(a, b, c) {
      return this.on(a, null, b, c)
    },
    unbind: function(a, b) {
      return this.off(a, null, b)
    },
    delegate: function(a, b, c, d) {
      return this.on(b, a, c, d)
    },
    undelegate: function(a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
    }
  });
  var wc = n.now(),
    xc = /\?/,
    yc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  n.parseJSON = function(b) {
    if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
    var c, d = null,
      e = n.trim(b + "");
    return e && !n.trim(e.replace(yc, function(a, b, e, f) {
      return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
    })) ? Function("return " + e)() : n.error("Invalid JSON: " + b)
  }, n.parseXML = function(b) {
    var c, d;
    if (!b || "string" != typeof b) return null;
    try {
      a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
    } catch (e) {
      c = void 0
    }
    return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
  };
  var zc, Ac, Bc = /#.*$/,
    Cc = /([?&])_=[^&]*/,
    Dc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Ec = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Fc = /^(?:GET|HEAD)$/,
    Gc = /^\/\//,
    Hc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    Ic = {},
    Jc = {},
    Kc = "*/".concat("*");
  try {
    Ac = location.href
  } catch (Lc) {
    Ac = z.createElement("a"), Ac.href = "", Ac = Ac.href
  }
  zc = Hc.exec(Ac.toLowerCase()) || [];

  function Mc(a) {
    return function(b, c) {
      "string" != typeof b && (c = b, b = "*");
      var d, e = 0,
        f = b.toLowerCase().match(F) || [];
      if (n.isFunction(c))
        while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
    }
  }

  function Nc(a, b, c, d) {
    var e = {},
      f = a === Jc;

    function g(h) {
      var i;
      return e[h] = !0, n.each(a[h] || [], function(a, h) {
        var j = h(b, c, d);
        return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
      }), i
    }
    return g(b.dataTypes[0]) || !e["*"] && g("*")
  }

  function Oc(a, b) {
    var c, d, e = n.ajaxSettings.flatOptions || {};
    for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
    return c && n.extend(!0, a, c), a
  }

  function Pc(a, b, c) {
    var d, e, f, g, h = a.contents,
      i = a.dataTypes;
    while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
    if (e)
      for (g in h)
        if (h[g] && h[g].test(e)) {
          i.unshift(g);
          break
        }
    if (i[0] in c) f = i[0];
    else {
      for (g in c) {
        if (!i[0] || a.converters[g + " " + i[0]]) {
          f = g;
          break
        }
        d || (d = g)
      }
      f = f || d
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
  }

  function Qc(a, b, c, d) {
    var e, f, g, h, i, j = {},
      k = a.dataTypes.slice();
    if (k[1])
      for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
    f = k.shift();
    while (f)
      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
        if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
      if (g = j[i + " " + f] || j["* " + f], !g)
        for (e in j)
          if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
            break
          }
      if (g !== !0)
        if (g && a["throws"]) b = g(b);
        else try {
          b = g(b)
        } catch (l) {
          return {
            state: "parsererror",
            error: g ? l : "No conversion from " + i + " to " + f
          }
        }
    }
    return {
      state: "success",
      data: b
    }
  }
  n.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Ac,
      type: "GET",
      isLocal: Ec.test(zc[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Kc,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": n.parseJSON,
        "text xml": n.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function(a, b) {
      return b ? Oc(Oc(a, n.ajaxSettings), b) : Oc(n.ajaxSettings, a)
    },
    ajaxPrefilter: Mc(Ic),
    ajaxTransport: Mc(Jc),
    ajax: function(a, b) {
      "object" == typeof a && (b = a, a = void 0), b = b || {};
      var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b),
        l = k.context || k,
        m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
        o = n.Deferred(),
        p = n.Callbacks("once memory"),
        q = k.statusCode || {},
        r = {},
        s = {},
        t = 0,
        u = "canceled",
        v = {
          readyState: 0,
          getResponseHeader: function(a) {
            var b;
            if (2 === t) {
              if (!j) {
                j = {};
                while (b = Dc.exec(f)) j[b[1].toLowerCase()] = b[2]
              }
              b = j[a.toLowerCase()]
            }
            return null == b ? null : b
          },
          getAllResponseHeaders: function() {
            return 2 === t ? f : null
          },
          setRequestHeader: function(a, b) {
            var c = a.toLowerCase();
            return t || (a = s[c] = s[c] || a, r[a] = b), this
          },
          overrideMimeType: function(a) {
            return t || (k.mimeType = a), this
          },
          statusCode: function(a) {
            var b;
            if (a)
              if (2 > t)
                for (b in a) q[b] = [q[b], a[b]];
              else v.always(a[v.status]);
            return this
          },
          abort: function(a) {
            var b = a || u;
            return i && i.abort(b), x(0, b), this
          }
        };
      if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || Ac) + "").replace(Bc, "").replace(Gc, zc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(F) || [""], null == k.crossDomain && (c = Hc.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === zc[1] && c[2] === zc[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (zc[3] || ("http:" === zc[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), Nc(Ic, k, b, v), 2 === t) return v;
      h = k.global, h && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Fc.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (xc.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Cc.test(e) ? e.replace(Cc, "$1_=" + wc++) : e + (xc.test(e) ? "&" : "?") + "_=" + wc++)), k.ifModified && (n.lastModified[e] && v.setRequestHeader("If-Modified-Since", n.lastModified[e]), n.etag[e] && v.setRequestHeader("If-None-Match", n.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Kc + "; q=0.01" : "") : k.accepts["*"]);
      for (d in k.headers) v.setRequestHeader(d, k.headers[d]);
      if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
      u = "abort";
      for (d in {
          success: 1,
          error: 1,
          complete: 1
        }) v[d](k[d]);
      if (i = Nc(Jc, k, b, v)) {
        v.readyState = 1, h && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function() {
          v.abort("timeout")
        }, k.timeout));
        try {
          t = 1, i.send(r, x)
        } catch (w) {
          if (!(2 > t)) throw w;
          x(-1, w)
        }
      } else x(-1, "No Transport");

      function x(a, b, c, d) {
        var j, r, s, u, w, x = b;
        2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Pc(k, v, c)), u = Qc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (n.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")))
      }
      return v
    },
    getJSON: function(a, b, c) {
      return n.get(a, b, c, "json")
    },
    getScript: function(a, b) {
      return n.get(a, void 0, b, "script")
    }
  }), n.each(["get", "post"], function(a, b) {
    n[b] = function(a, c, d, e) {
      return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
        url: a,
        type: b,
        dataType: e,
        data: c,
        success: d
      })
    }
  }), n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
    n.fn[b] = function(a) {
      return this.on(b, a)
    }
  }), n._evalUrl = function(a) {
    return n.ajax({
      url: a,
      type: "GET",
      dataType: "script",
      async: !1,
      global: !1,
      "throws": !0
    })
  }, n.fn.extend({
    wrapAll: function(a) {
      if (n.isFunction(a)) return this.each(function(b) {
        n(this).wrapAll(a.call(this, b))
      });
      if (this[0]) {
        var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
          var a = this;
          while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
          return a
        }).append(this)
      }
      return this
    },
    wrapInner: function(a) {
      return this.each(n.isFunction(a) ? function(b) {
        n(this).wrapInner(a.call(this, b))
      } : function() {
        var b = n(this),
          c = b.contents();
        c.length ? c.wrapAll(a) : b.append(a)
      })
    },
    wrap: function(a) {
      var b = n.isFunction(a);
      return this.each(function(c) {
        n(this).wrapAll(b ? a.call(this, c) : a)
      })
    },
    unwrap: function() {
      return this.parent().each(function() {
        n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
      }).end()
    }
  }), n.expr.filters.hidden = function(a) {
    return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !l.reliableHiddenOffsets() && "none" === (a.style && a.style.display || n.css(a, "display"))
  }, n.expr.filters.visible = function(a) {
    return !n.expr.filters.hidden(a)
  };
  var Rc = /%20/g,
    Sc = /\[\]$/,
    Tc = /\r?\n/g,
    Uc = /^(?:submit|button|image|reset|file)$/i,
    Vc = /^(?:input|select|textarea|keygen)/i;

  function Wc(a, b, c, d) {
    var e;
    if (n.isArray(b)) n.each(b, function(b, e) {
      c || Sc.test(a) ? d(a, e) : Wc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
    });
    else if (c || "object" !== n.type(b)) d(a, b);
    else
      for (e in b) Wc(a + "[" + e + "]", b[e], c, d)
  }
  n.param = function(a, b) {
    var c, d = [],
      e = function(a, b) {
        b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
      };
    if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
      e(this.name, this.value)
    });
    else
      for (c in a) Wc(c, a[c], b, e);
    return d.join("&").replace(Rc, "+")
  }, n.fn.extend({
    serialize: function() {
      return n.param(this.serializeArray())
    },
    serializeArray: function() {
      return this.map(function() {
        var a = n.prop(this, "elements");
        return a ? n.makeArray(a) : this
      }).filter(function() {
        var a = this.type;
        return this.name && !n(this).is(":disabled") && Vc.test(this.nodeName) && !Uc.test(a) && (this.checked || !X.test(a))
      }).map(function(a, b) {
        var c = n(this).val();
        return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
          return {
            name: b.name,
            value: a.replace(Tc, "\r\n")
          }
        }) : {
          name: b.name,
          value: c.replace(Tc, "\r\n")
        }
      }).get()
    }
  }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
    return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && $c() || _c()
  } : $c;
  var Xc = 0,
    Yc = {},
    Zc = n.ajaxSettings.xhr();
  a.ActiveXObject && n(a).on("unload", function() {
    for (var a in Yc) Yc[a](void 0, !0)
  }), l.cors = !!Zc && "withCredentials" in Zc, Zc = l.ajax = !!Zc, Zc && n.ajaxTransport(function(a) {
    if (!a.crossDomain || l.cors) {
      var b;
      return {
        send: function(c, d) {
          var e, f = a.xhr(),
            g = ++Xc;
          if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
            for (e in a.xhrFields) f[e] = a.xhrFields[e];
          a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
          for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
          f.send(a.hasContent && a.data || null), b = function(c, e) {
            var h, i, j;
            if (b && (e || 4 === f.readyState))
              if (delete Yc[g], b = void 0, f.onreadystatechange = n.noop, e) 4 !== f.readyState && f.abort();
              else {
                j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                try {
                  i = f.statusText
                } catch (k) {
                  i = ""
                }
                h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
              }
            j && d(h, i, j, f.getAllResponseHeaders())
          }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Yc[g] = b : b()
        },
        abort: function() {
          b && b(void 0, !0)
        }
      }
    }
  });

  function $c() {
    try {
      return new a.XMLHttpRequest
    } catch (b) {}
  }

  function _c() {
    try {
      return new a.ActiveXObject("Microsoft.XMLHTTP")
    } catch (b) {}
  }
  n.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /(?:java|ecma)script/
    },
    converters: {
      "text script": function(a) {
        return n.globalEval(a), a
      }
    }
  }), n.ajaxPrefilter("script", function(a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
  }), n.ajaxTransport("script", function(a) {
    if (a.crossDomain) {
      var b, c = z.head || n("head")[0] || z.documentElement;
      return {
        send: function(d, e) {
          b = z.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
            (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
          }, c.insertBefore(b, c.firstChild)
        },
        abort: function() {
          b && b.onload(void 0, !0)
        }
      }
    }
  });
  var ad = [],
    bd = /(=)\?(?=&|$)|\?\?/;
  n.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var a = ad.pop() || n.expando + "_" + wc++;
      return this[a] = !0, a
    }
  }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
    var e, f, g, h = b.jsonp !== !1 && (bd.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && bd.test(b.data) && "data");
    return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(bd, "$1" + e) : b.jsonp !== !1 && (b.url += (xc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
      return g || n.error(e + " was not called"), g[0]
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
      g = arguments
    }, d.always(function() {
      a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, ad.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
    }), "script") : void 0
  }), n.parseHTML = function(a, b, c) {
    if (!a || "string" != typeof a) return null;
    "boolean" == typeof b && (c = b, b = !1), b = b || z;
    var d = v.exec(a),
      e = !c && [];
    return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes))
  };
  var cd = n.fn.load;
  n.fn.load = function(a, b, c) {
    if ("string" != typeof a && cd) return cd.apply(this, arguments);
    var d, e, f, g = this,
      h = a.indexOf(" ");
    return h >= 0 && (d = a.slice(h, a.length), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && n.ajax({
      url: a,
      type: f,
      dataType: "html",
      data: b
    }).done(function(a) {
      e = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
    }).complete(c && function(a, b) {
      g.each(c, e || [a.responseText, b, a])
    }), this
  }, n.expr.filters.animated = function(a) {
    return n.grep(n.timers, function(b) {
      return a === b.elem
    }).length
  };
  var dd = a.document.documentElement;

  function ed(a) {
    return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
  }
  n.offset = {
    setOffset: function(a, b, c) {
      var d, e, f, g, h, i, j, k = n.css(a, "position"),
        l = n(a),
        m = {};
      "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
    }
  }, n.fn.extend({
    offset: function(a) {
      if (arguments.length) return void 0 === a ? this : this.each(function(b) {
        n.offset.setOffset(this, a, b)
      });
      var b, c, d = {
          top: 0,
          left: 0
        },
        e = this[0],
        f = e && e.ownerDocument;
      if (f) return b = f.documentElement, n.contains(b, e) ? (typeof e.getBoundingClientRect !== L && (d = e.getBoundingClientRect()), c = ed(f), {
        top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
        left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
      }) : d
    },
    position: function() {
      if (this[0]) {
        var a, b, c = {
            top: 0,
            left: 0
          },
          d = this[0];
        return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)), {
          top: b.top - c.top - n.css(d, "marginTop", !0),
          left: b.left - c.left - n.css(d, "marginLeft", !0)
        }
      }
    },
    offsetParent: function() {
      return this.map(function() {
        var a = this.offsetParent || dd;
        while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
        return a || dd
      })
    }
  }), n.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(a, b) {
    var c = /Y/.test(b);
    n.fn[a] = function(d) {
      return W(this, function(a, d, e) {
        var f = ed(a);
        return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e)
      }, a, d, arguments.length, null)
    }
  }), n.each(["top", "left"], function(a, b) {
    n.cssHooks[b] = Mb(l.pixelPosition, function(a, c) {
      return c ? (c = Kb(a, b), Ib.test(c) ? n(a).position()[b] + "px" : c) : void 0
    })
  }), n.each({
    Height: "height",
    Width: "width"
  }, function(a, b) {
    n.each({
      padding: "inner" + a,
      content: b,
      "": "outer" + a
    }, function(c, d) {
      n.fn[d] = function(d, e) {
        var f = arguments.length && (c || "boolean" != typeof d),
          g = c || (d === !0 || e === !0 ? "margin" : "border");
        return W(this, function(b, c, d) {
          var e;
          return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
        }, b, f ? d : void 0, f, null)
      }
    })
  }), n.fn.size = function() {
    return this.length
  }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
    return n
  });
  var fd = a.jQuery,
    gd = a.$;
  return n.noConflict = function(b) {
    return a.$ === n && (a.$ = gd), b && a.jQuery === n && (a.jQuery = fd), n
  }, typeof b === L && (a.jQuery = a.$ = n), n
});


/* -- FILE: [javascripts/bootstrap.min.js]*/
/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(a) {
  "use strict";
  var b = a.fn.jquery.split(" ")[0].split(".");
  if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 2) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")
}(jQuery), + function(a) {
  "use strict";

  function b() {
    var a = document.createElement("bootstrap"),
      b = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd otransitionend",
        transition: "transitionend"
      };
    for (var c in b)
      if (void 0 !== a.style[c]) return {
        end: b[c]
      };
    return !1
  }
  a.fn.emulateTransitionEnd = function(b) {
    var c = !1,
      d = this;
    a(this).one("bsTransitionEnd", function() {
      c = !0
    });
    var e = function() {
      c || a(d).trigger(a.support.transition.end)
    };
    return setTimeout(e, b), this
  }, a(function() {
    a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
      bindType: a.support.transition.end,
      delegateType: a.support.transition.end,
      handle: function(b) {
        return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
      }
    })
  })
}(jQuery), + function(a) {
  "use strict";

  function b(b) {
    return this.each(function() {
      var c = a(this),
        e = c.data("bs.alert");
      e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
    })
  }
  var c = '[data-dismiss="alert"]',
    d = function(b) {
      a(b).on("click", c, this.close)
    };
  d.VERSION = "3.3.6", d.TRANSITION_DURATION = 150, d.prototype.close = function(b) {
    function c() {
      g.detach().trigger("closed.bs.alert").remove()
    }
    var e = a(this),
      f = e.attr("data-target");
    f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
    var g = a(f);
    b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
  };
  var e = a.fn.alert;
  a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() {
    return a.fn.alert = e, this
  }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), + function(a) {
  "use strict";

  function b(b) {
    return this.each(function() {
      var d = a(this),
        e = d.data("bs.button"),
        f = "object" == typeof b && b;
      e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
    })
  }
  var c = function(b, d) {
    this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
  };
  c.VERSION = "3.3.6", c.DEFAULTS = {
    loadingText: "loading..."
  }, c.prototype.setState = function(b) {
    var c = "disabled",
      d = this.$element,
      e = d.is("input") ? "val" : "html",
      f = d.data();
    b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function() {
      d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
    }, this), 0)
  }, c.prototype.toggle = function() {
    var a = !0,
      b = this.$element.closest('[data-toggle="buttons"]');
    if (b.length) {
      var c = this.$element.find("input");
      "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change")
    } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
  };
  var d = a.fn.button;
  a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() {
    return a.fn.button = d, this
  }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
    var d = a(c.target);
    d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), a(c.target).is('input[type="radio"]') || a(c.target).is('input[type="checkbox"]') || c.preventDefault()
  }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) {
    a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
  })
}(jQuery), + function(a) {
  "use strict";

  function b(b) {
    return this.each(function() {
      var d = a(this),
        e = d.data("bs.carousel"),
        f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
        g = "string" == typeof b ? b : f.slide;
      e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
    })
  }
  var c = function(b, c) {
    this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
  };
  c.VERSION = "3.3.6", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
    interval: 5e3,
    pause: "hover",
    wrap: !0,
    keyboard: !0
  }, c.prototype.keydown = function(a) {
    if (!/input|textarea/i.test(a.target.tagName)) {
      switch (a.which) {
        case 37:
          this.prev();
          break;
        case 39:
          this.next();
          break;
        default:
          return
      }
      a.preventDefault()
    }
  }, c.prototype.cycle = function(b) {
    return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
  }, c.prototype.getItemIndex = function(a) {
    return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
  }, c.prototype.getItemForDirection = function(a, b) {
    var c = this.getItemIndex(b),
      d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
    if (d && !this.options.wrap) return b;
    var e = "prev" == a ? -1 : 1,
      f = (c + e) % this.$items.length;
    return this.$items.eq(f)
  }, c.prototype.to = function(a) {
    var b = this,
      c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
    return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
      b.to(a)
    }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
  }, c.prototype.pause = function(b) {
    return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
  }, c.prototype.next = function() {
    return this.sliding ? void 0 : this.slide("next")
  }, c.prototype.prev = function() {
    return this.sliding ? void 0 : this.slide("prev")
  }, c.prototype.slide = function(b, d) {
    var e = this.$element.find(".item.active"),
      f = d || this.getItemForDirection(b, e),
      g = this.interval,
      h = "next" == b ? "left" : "right",
      i = this;
    if (f.hasClass("active")) return this.sliding = !1;
    var j = f[0],
      k = a.Event("slide.bs.carousel", {
        relatedTarget: j,
        direction: h
      });
    if (this.$element.trigger(k), !k.isDefaultPrevented()) {
      if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
        this.$indicators.find(".active").removeClass("active");
        var l = a(this.$indicators.children()[this.getItemIndex(f)]);
        l && l.addClass("active")
      }
      var m = a.Event("slid.bs.carousel", {
        relatedTarget: j,
        direction: h
      });
      return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function() {
        f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function() {
          i.$element.trigger(m)
        }, 0)
      }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
    }
  };
  var d = a.fn.carousel;
  a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() {
    return a.fn.carousel = d, this
  };
  var e = function(c) {
    var d, e = a(this),
      f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
    if (f.hasClass("carousel")) {
      var g = a.extend({}, f.data(), e.data()),
        h = e.attr("data-slide-to");
      h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
    }
  };
  a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function() {
    a('[data-ride="carousel"]').each(function() {
      var c = a(this);
      b.call(c, c.data())
    })
  })
}(jQuery), + function(a) {
  "use strict";

  function b(b) {
    var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
    return a(d)
  }

  function c(b) {
    return this.each(function() {
      var c = a(this),
        e = c.data("bs.collapse"),
        f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
      !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
    })
  }
  var d = function(b, c) {
    this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
  };
  d.VERSION = "3.3.6", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
    toggle: !0
  }, d.prototype.dimension = function() {
    var a = this.$element.hasClass("width");
    return a ? "width" : "height"
  }, d.prototype.show = function() {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
      if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
        var f = a.Event("show.bs.collapse");
        if (this.$element.trigger(f), !f.isDefaultPrevented()) {
          e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
          var g = this.dimension();
          this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
          var h = function() {
            this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
          };
          if (!a.support.transition) return h.call(this);
          var i = a.camelCase(["scroll", g].join("-"));
          this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
        }
      }
    }
  }, d.prototype.hide = function() {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var b = a.Event("hide.bs.collapse");
      if (this.$element.trigger(b), !b.isDefaultPrevented()) {
        var c = this.dimension();
        this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
        var e = function() {
          this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
        };
        return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
      }
    }
  }, d.prototype.toggle = function() {
    this[this.$element.hasClass("in") ? "hide" : "show"]()
  }, d.prototype.getParent = function() {
    return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
      var e = a(d);
      this.addAriaAndCollapsedClass(b(e), e)
    }, this)).end()
  }, d.prototype.addAriaAndCollapsedClass = function(a, b) {
    var c = a.hasClass("in");
    a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
  };
  var e = a.fn.collapse;
  a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function() {
    return a.fn.collapse = e, this
  }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) {
    var e = a(this);
    e.attr("data-target") || d.preventDefault();
    var f = b(e),
      g = f.data("bs.collapse"),
      h = g ? "toggle" : e.data();
    c.call(f, h)
  })
}(jQuery), + function(a) {
  "use strict";

  function b(b) {
    var c = b.attr("data-target");
    c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
    var d = c && a(c);
    return d && d.length ? d : b.parent()
  }

  function c(c) {
    c && 3 === c.which || (a(e).remove(), a(f).each(function() {
      var d = a(this),
        e = b(d),
        f = {
          relatedTarget: this
        };
      e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))))
    }))
  }

  function d(b) {
    return this.each(function() {
      var c = a(this),
        d = c.data("bs.dropdown");
      d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
    })
  }
  var e = ".dropdown-backdrop",
    f = '[data-toggle="dropdown"]',
    g = function(b) {
      a(b).on("click.bs.dropdown", this.toggle)
    };
  g.VERSION = "3.3.6", g.prototype.toggle = function(d) {
    var e = a(this);
    if (!e.is(".disabled, :disabled")) {
      var f = b(e),
        g = f.hasClass("open");
      if (c(), !g) {
        "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
        var h = {
          relatedTarget: this
        };
        if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
        e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h))
      }
      return !1
    }
  }, g.prototype.keydown = function(c) {
    if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
      var d = a(this);
      if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
        var e = b(d),
          g = e.hasClass("open");
        if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
        var h = " li:not(.disabled):visible a",
          i = e.find(".dropdown-menu" + h);
        if (i.length) {
          var j = i.index(c.target);
          38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
        }
      }
    }
  };
  var h = a.fn.dropdown;
  a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() {
    return a.fn.dropdown = h, this
  }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
    a.stopPropagation()
  }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
}(jQuery), + function(a) {
  "use strict";

  function b(b, d) {
    return this.each(function() {
      var e = a(this),
        f = e.data("bs.modal"),
        g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
      f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
    })
  }
  var c = function(b, c) {
    this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
      this.$element.trigger("loaded.bs.modal")
    }, this))
  };
  c.VERSION = "3.3.6", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
    backdrop: !0,
    keyboard: !0,
    show: !0
  }, c.prototype.toggle = function(a) {
    return this.isShown ? this.hide() : this.show(a)
  }, c.prototype.show = function(b) {
    var d = this,
      e = a.Event("show.bs.modal", {
        relatedTarget: b
      });
    this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
      d.$element.one("mouseup.dismiss.bs.modal", function(b) {
        a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
      })
    }), this.backdrop(function() {
      var e = a.support.transition && d.$element.hasClass("fade");
      d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
      var f = a.Event("shown.bs.modal", {
        relatedTarget: b
      });
      e ? d.$dialog.one("bsTransitionEnd", function() {
        d.$element.trigger("focus").trigger(f)
      }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
    }))
  }, c.prototype.hide = function(b) {
    b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
  }, c.prototype.enforceFocus = function() {
    a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
      this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
    }, this))
  }, c.prototype.escape = function() {
    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
      27 == a.which && this.hide()
    }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
  }, c.prototype.resize = function() {
    this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
  }, c.prototype.hideModal = function() {
    var a = this;
    this.$element.hide(), this.backdrop(function() {
      a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
    })
  }, c.prototype.removeBackdrop = function() {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
  }, c.prototype.backdrop = function(b) {
    var d = this,
      e = this.$element.hasClass("fade") ? "fade" : "";
    if (this.isShown && this.options.backdrop) {
      var f = a.support.transition && e;
      if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
          return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
        }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
      f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass("in");
      var g = function() {
        d.removeBackdrop(), b && b()
      };
      a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
    } else b && b()
  }, c.prototype.handleUpdate = function() {
    this.adjustDialog()
  }, c.prototype.adjustDialog = function() {
    var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
    this.$element.css({
      paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
      paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
    })
  }, c.prototype.resetAdjustments = function() {
    this.$element.css({
      paddingLeft: "",
      paddingRight: ""
    })
  }, c.prototype.checkScrollbar = function() {
    var a = window.innerWidth;
    if (!a) {
      var b = document.documentElement.getBoundingClientRect();
      a = b.right - Math.abs(b.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
  }, c.prototype.setScrollbar = function() {
    var a = parseInt(this.$body.css("padding-right") || 0, 10);
    this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
  }, c.prototype.resetScrollbar = function() {
    this.$body.css("padding-right", this.originalBodyPad)
  }, c.prototype.measureScrollbar = function() {
    var a = document.createElement("div");
    a.className = "modal-scrollbar-measure", this.$body.append(a);
    var b = a.offsetWidth - a.clientWidth;
    return this.$body[0].removeChild(a), b
  };
  var d = a.fn.modal;
  a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() {
    return a.fn.modal = d, this
  }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
    var d = a(this),
      e = d.attr("href"),
      f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
      g = f.data("bs.modal") ? "toggle" : a.extend({
        remote: !/#/.test(e) && e
      }, f.data(), d.data());
    d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) {
      a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
        d.is(":visible") && d.trigger("focus")
      })
    }), b.call(f, g, this)
  })
}(jQuery), + function(a) {
  "use strict";

  function b(b) {
    return this.each(function() {
      var d = a(this),
        e = d.data("bs.tooltip"),
        f = "object" == typeof b && b;
      (e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
    })
  }
  var c = function(a, b) {
    this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b)
  };
  c.VERSION = "3.3.6", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
    animation: !0,
    placement: "top",
    selector: !1,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    container: !1,
    viewport: {
      selector: "body",
      padding: 0
    }
  }, c.prototype.init = function(b, c, d) {
    if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
        click: !1,
        hover: !1,
        focus: !1
      }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
    for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
      var g = e[f];
      if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
      else if ("manual" != g) {
        var h = "hover" == g ? "mouseenter" : "focusin",
          i = "hover" == g ? "mouseleave" : "focusout";
        this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
      }
    }
    this.options.selector ? this._options = a.extend({}, this.options, {
      trigger: "manual",
      selector: ""
    }) : this.fixTitle()
  }, c.prototype.getDefaults = function() {
    return c.DEFAULTS
  }, c.prototype.getOptions = function(b) {
    return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
      show: b.delay,
      hide: b.delay
    }), b
  }, c.prototype.getDelegateOptions = function() {
    var b = {},
      c = this.getDefaults();
    return this._options && a.each(this._options, function(a, d) {
      c[a] != d && (b[a] = d)
    }), b
  }, c.prototype.enter = function(b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
    return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void(c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() {
      "in" == c.hoverState && c.show()
    }, c.options.delay.show)) : c.show())
  }, c.prototype.isInStateTrue = function() {
    for (var a in this.inState)
      if (this.inState[a]) return !0;
    return !1
  }, c.prototype.leave = function(b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
    return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), c.isInStateTrue() ? void 0 : (clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() {
      "out" == c.hoverState && c.hide()
    }, c.options.delay.hide)) : c.hide())
  }, c.prototype.show = function() {
    var b = a.Event("show.bs." + this.type);
    if (this.hasContent() && this.enabled) {
      this.$element.trigger(b);
      var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
      if (b.isDefaultPrevented() || !d) return;
      var e = this,
        f = this.tip(),
        g = this.getUID(this.type);
      this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
      var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
        i = /\s?auto?\s?/i,
        j = i.test(h);
      j && (h = h.replace(i, "") || "top"), f.detach().css({
        top: 0,
        left: 0,
        display: "block"
      }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
      var k = this.getPosition(),
        l = f[0].offsetWidth,
        m = f[0].offsetHeight;
      if (j) {
        var n = h,
          o = this.getPosition(this.$viewport);
        h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h)
      }
      var p = this.getCalculatedOffset(h, k, l, m);
      this.applyPlacement(p, h);
      var q = function() {
        var a = e.hoverState;
        e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
      };
      a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
    }
  }, c.prototype.applyPlacement = function(b, c) {
    var d = this.tip(),
      e = d[0].offsetWidth,
      f = d[0].offsetHeight,
      g = parseInt(d.css("margin-top"), 10),
      h = parseInt(d.css("margin-left"), 10);
    isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
      using: function(a) {
        d.css({
          top: Math.round(a.top),
          left: Math.round(a.left)
        })
      }
    }, b), 0), d.addClass("in");
    var i = d[0].offsetWidth,
      j = d[0].offsetHeight;
    "top" == c && j != f && (b.top = b.top + f - j);
    var k = this.getViewportAdjustedDelta(c, b, i, j);
    k.left ? b.left += k.left : b.top += k.top;
    var l = /top|bottom/.test(c),
      m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
      n = l ? "offsetWidth" : "offsetHeight";
    d.offset(b), this.replaceArrow(m, d[0][n], l)
  }, c.prototype.replaceArrow = function(a, b, c) {
    this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
  }, c.prototype.setContent = function() {
    var a = this.tip(),
      b = this.getTitle();
    a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
  }, c.prototype.hide = function(b) {
    function d() {
      "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
    }
    var e = this,
      f = a(this.$tip),
      g = a.Event("hide.bs." + this.type);
    return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this)
  }, c.prototype.fixTitle = function() {
    var a = this.$element;
    (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
  }, c.prototype.hasContent = function() {
    return this.getTitle()
  }, c.prototype.getPosition = function(b) {
    b = b || this.$element;
    var c = b[0],
      d = "BODY" == c.tagName,
      e = c.getBoundingClientRect();
    null == e.width && (e = a.extend({}, e, {
      width: e.right - e.left,
      height: e.bottom - e.top
    }));
    var f = d ? {
        top: 0,
        left: 0
      } : b.offset(),
      g = {
        scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
      },
      h = d ? {
        width: a(window).width(),
        height: a(window).height()
      } : null;
    return a.extend({}, e, g, h, f)
  }, c.prototype.getCalculatedOffset = function(a, b, c, d) {
    return "bottom" == a ? {
      top: b.top + b.height,
      left: b.left + b.width / 2 - c / 2
    } : "top" == a ? {
      top: b.top - d,
      left: b.left + b.width / 2 - c / 2
    } : "left" == a ? {
      top: b.top + b.height / 2 - d / 2,
      left: b.left - c
    } : {
      top: b.top + b.height / 2 - d / 2,
      left: b.left + b.width
    }
  }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
    var e = {
      top: 0,
      left: 0
    };
    if (!this.$viewport) return e;
    var f = this.options.viewport && this.options.viewport.padding || 0,
      g = this.getPosition(this.$viewport);
    if (/right|left/.test(a)) {
      var h = b.top - f - g.scroll,
        i = b.top + f - g.scroll + d;
      h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
    } else {
      var j = b.left - f,
        k = b.left + f + c;
      j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
    }
    return e
  }, c.prototype.getTitle = function() {
    var a, b = this.$element,
      c = this.options;
    return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
  }, c.prototype.getUID = function(a) {
    do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
    return a
  }, c.prototype.tip = function() {
    if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
    return this.$tip
  }, c.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
  }, c.prototype.enable = function() {
    this.enabled = !0
  }, c.prototype.disable = function() {
    this.enabled = !1
  }, c.prototype.toggleEnabled = function() {
    this.enabled = !this.enabled
  }, c.prototype.toggle = function(b) {
    var c = this;
    b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
  }, c.prototype.destroy = function() {
    var a = this;
    clearTimeout(this.timeout), this.hide(function() {
      a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null
    })
  };
  var d = a.fn.tooltip;
  a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() {
    return a.fn.tooltip = d, this
  }
}(jQuery), + function(a) {
  "use strict";

  function b(b) {
    return this.each(function() {
      var d = a(this),
        e = d.data("bs.popover"),
        f = "object" == typeof b && b;
      (e || !/destroy|hide/.test(b)) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
    })
  }
  var c = function(a, b) {
    this.init("popover", a, b)
  };
  if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
  c.VERSION = "3.3.6", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function() {
    return c.DEFAULTS
  }, c.prototype.setContent = function() {
    var a = this.tip(),
      b = this.getTitle(),
      c = this.getContent();
    a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
  }, c.prototype.hasContent = function() {
    return this.getTitle() || this.getContent()
  }, c.prototype.getContent = function() {
    var a = this.$element,
      b = this.options;
    return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
  }, c.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".arrow")
  };
  var d = a.fn.popover;
  a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() {
    return a.fn.popover = d, this
  }
}(jQuery), + function(a) {
  "use strict";

  function b(c, d) {
    this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process()
  }

  function c(c) {
    return this.each(function() {
      var d = a(this),
        e = d.data("bs.scrollspy"),
        f = "object" == typeof c && c;
      e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
    })
  }
  b.VERSION = "3.3.6", b.DEFAULTS = {
    offset: 10
  }, b.prototype.getScrollHeight = function() {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }, b.prototype.refresh = function() {
    var b = this,
      c = "offset",
      d = 0;
    this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
      var b = a(this),
        e = b.data("target") || b.attr("href"),
        f = /^#./.test(e) && a(e);
      return f && f.length && f.is(":visible") && [
        [f[c]().top + d, e]
      ] || null
    }).sort(function(a, b) {
      return a[0] - b[0]
    }).each(function() {
      b.offsets.push(this[0]), b.targets.push(this[1])
    })
  }, b.prototype.process = function() {
    var a, b = this.$scrollElement.scrollTop() + this.options.offset,
      c = this.getScrollHeight(),
      d = this.options.offset + c - this.$scrollElement.height(),
      e = this.offsets,
      f = this.targets,
      g = this.activeTarget;
    if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
    if (g && b < e[0]) return this.activeTarget = null, this.clear();
    for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
  }, b.prototype.activate = function(b) {
    this.activeTarget = b, this.clear();
    var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
      d = a(c).parents("li").addClass("active");
    d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
  }, b.prototype.clear = function() {
    a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
  };
  var d = a.fn.scrollspy;
  a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
    return a.fn.scrollspy = d, this
  }, a(window).on("load.bs.scrollspy.data-api", function() {
    a('[data-spy="scroll"]').each(function() {
      var b = a(this);
      c.call(b, b.data())
    })
  })
}(jQuery), + function(a) {
  "use strict";

  function b(b) {
    return this.each(function() {
      var d = a(this),
        e = d.data("bs.tab");
      e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
    })
  }
  var c = function(b) {
    this.element = a(b)
  };
  c.VERSION = "3.3.6", c.TRANSITION_DURATION = 150, c.prototype.show = function() {
    var b = this.element,
      c = b.closest("ul:not(.dropdown-menu)"),
      d = b.data("target");
    if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
      var e = c.find(".active:last a"),
        f = a.Event("hide.bs.tab", {
          relatedTarget: b[0]
        }),
        g = a.Event("show.bs.tab", {
          relatedTarget: e[0]
        });
      if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
        var h = a(d);
        this.activate(b.closest("li"), c), this.activate(h, h.parent(), function() {
          e.trigger({
            type: "hidden.bs.tab",
            relatedTarget: b[0]
          }), b.trigger({
            type: "shown.bs.tab",
            relatedTarget: e[0]
          })
        })
      }
    }
  }, c.prototype.activate = function(b, d, e) {
    function f() {
      g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
    }
    var g = d.find("> .active"),
      h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
    g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
  };
  var d = a.fn.tab;
  a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() {
    return a.fn.tab = d, this
  };
  var e = function(c) {
    c.preventDefault(), b.call(a(this), "show")
  };
  a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), + function(a) {
  "use strict";

  function b(b) {
    return this.each(function() {
      var d = a(this),
        e = d.data("bs.affix"),
        f = "object" == typeof b && b;
      e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
    })
  }
  var c = function(b, d) {
    this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
  };
  c.VERSION = "3.3.6", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
    offset: 0,
    target: window
  }, c.prototype.getState = function(a, b, c, d) {
    var e = this.$target.scrollTop(),
      f = this.$element.offset(),
      g = this.$target.height();
    if (null != c && "top" == this.affixed) return c > e ? "top" : !1;
    if ("bottom" == this.affixed) return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";
    var h = null == this.affixed,
      i = h ? e : f.top,
      j = h ? g : b;
    return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1
  }, c.prototype.getPinnedOffset = function() {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(c.RESET).addClass("affix");
    var a = this.$target.scrollTop(),
      b = this.$element.offset();
    return this.pinnedOffset = b.top - a
  }, c.prototype.checkPositionWithEventLoop = function() {
    setTimeout(a.proxy(this.checkPosition, this), 1)
  }, c.prototype.checkPosition = function() {
    if (this.$element.is(":visible")) {
      var b = this.$element.height(),
        d = this.options.offset,
        e = d.top,
        f = d.bottom,
        g = Math.max(a(document).height(), a(document.body).height());
      "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
      var h = this.getState(g, b, e, f);
      if (this.affixed != h) {
        null != this.unpin && this.$element.css("top", "");
        var i = "affix" + (h ? "-" + h : ""),
          j = a.Event(i + ".bs.affix");
        if (this.$element.trigger(j), j.isDefaultPrevented()) return;
        this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
      }
      "bottom" == h && this.$element.offset({
        top: g - b - f
      })
    }
  };
  var d = a.fn.affix;
  a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() {
    return a.fn.affix = d, this
  }, a(window).on("load", function() {
    a('[data-spy="affix"]').each(function() {
      var c = a(this),
        d = c.data();
      d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
    })
  })
}(jQuery);

/* -- FILE: [javascripts/modernizr.custom.min.js]*/
;
window.Modernizr = function(a, b, c) {
    function A(a) {
      j.cssText = a
    }

    function B(a, b) {
      return A(m.join(a + ";") + (b || ""))
    }

    function C(a, b) {
      return typeof a === b
    }

    function D(a, b) {
      return !!~("" + a).indexOf(b)
    }

    function E(a, b) {
      for (var d in a) {
        var e = a[d];
        if (!D(e, "-") && j[e] !== c) return b == "pfx" ? e : !0
      }
      return !1
    }

    function F(a, b, d) {
      for (var e in a) {
        var f = b[a[e]];
        if (f !== c) return d === !1 ? a[e] : C(f, "function") ? f.bind(d || b) : f
      }
      return !1
    }

    function G(a, b, c) {
      var d = a.charAt(0).toUpperCase() + a.slice(1),
        e = (a + " " + o.join(d + " ") + d).split(" ");
      return C(b, "string") || C(b, "undefined") ? E(e, b) : (e = (a + " " + p.join(d + " ") + d).split(" "), F(e, b, c))
    }
    var d = "2.7.1",
      e = {},
      f = !0,
      g = b.documentElement,
      h = "modernizr",
      i = b.createElement(h),
      j = i.style,
      k, l = {}.toString,
      m = " -webkit- -moz- -o- -ms- ".split(" "),
      n = "Webkit Moz O ms",
      o = n.split(" "),
      p = n.toLowerCase().split(" "),
      q = {},
      r = {},
      s = {},
      t = [],
      u = t.slice,
      v, w = function(a, c, d, e) {
        var f, i, j, k, l = b.createElement("div"),
          m = b.body,
          n = m || b.createElement("body");
        if (parseInt(d, 10))
          while (d--) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
        return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i
      },
      x = function() {
        function d(d, e) {
          e = e || b.createElement(a[d] || "div"), d = "on" + d;
          var f = d in e;
          return f || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(d, ""), f = C(e[d], "function"), C(e[d], "undefined") || (e[d] = c), e.removeAttribute(d))), e = null, f
        }
        var a = {
          select: "input",
          change: "input",
          submit: "form",
          reset: "form",
          error: "img",
          load: "img",
          abort: "img"
        };
        return d
      }(),
      y = {}.hasOwnProperty,
      z;
    !C(y, "undefined") && !C(y.call, "undefined") ? z = function(a, b) {
      return y.call(a, b)
    } : z = function(a, b) {
      return b in a && C(a.constructor.prototype[b], "undefined")
    }, Function.prototype.bind || (Function.prototype.bind = function(b) {
      var c = this;
      if (typeof c != "function") throw new TypeError;
      var d = u.call(arguments, 1),
        e = function() {
          if (this instanceof e) {
            var a = function() {};
            a.prototype = c.prototype;
            var f = new a,
              g = c.apply(f, d.concat(u.call(arguments)));
            return Object(g) === g ? g : f
          }
          return c.apply(b, d.concat(u.call(arguments)))
        };
      return e
    }), q.touch = function() {
      var c;
      return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : w(["@media (", m.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
        c = a.offsetTop === 9
      }), c
    };
    for (var H in q) z(q, H) && (v = H.toLowerCase(), e[v] = q[H](), t.push((e[v] ? "" : "no-") + v));
    return e.addTest = function(a, b) {
        if (typeof a == "object")
          for (var d in a) z(a, d) && e.addTest(d, a[d]);
        else {
          a = a.toLowerCase();
          if (e[a] !== c) return e;
          b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
        }
        return e
      }, A(""), i = k = null,
      function(a, b) {
        function l(a, b) {
          var c = a.createElement("p"),
            d = a.getElementsByTagName("head")[0] || a.documentElement;
          return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
        }

        function m() {
          var a = s.elements;
          return typeof a == "string" ? a.split(" ") : a
        }

        function n(a) {
          var b = j[a[h]];
          return b || (b = {}, i++, a[h] = i, j[i] = b), b
        }

        function o(a, c, d) {
          c || (c = b);
          if (k) return c.createElement(a);
          d || (d = n(c));
          var g;
          return d.cache[a] ? g = d.cache[a].cloneNode() : f.test(a) ? g = (d.cache[a] = d.createElem(a)).cloneNode() : g = d.createElem(a), g.canHaveChildren && !e.test(a) && !g.tagUrn ? d.frag.appendChild(g) : g
        }

        function p(a, c) {
          a || (a = b);
          if (k) return a.createDocumentFragment();
          c = c || n(a);
          var d = c.frag.cloneNode(),
            e = 0,
            f = m(),
            g = f.length;
          for (; e < g; e++) d.createElement(f[e]);
          return d
        }

        function q(a, b) {
          b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
            return s.shivMethods ? o(c, a, b) : b.createElem(c)
          }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + m().join().replace(/[\w\-]+/g, function(a) {
            return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
          }) + ");return n}")(s, b.frag)
        }

        function r(a) {
          a || (a = b);
          var c = n(a);
          return s.shivCSS && !g && !c.hasCSS && (c.hasCSS = !!l(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), k || q(a, c), a
        }
        var c = "3.7.0",
          d = a.html5 || {},
          e = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
          f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
          g, h = "_html5shiv",
          i = 0,
          j = {},
          k;
        (function() {
          try {
            var a = b.createElement("a");
            a.innerHTML = "<xyz></xyz>", g = "hidden" in a, k = a.childNodes.length == 1 || function() {
              b.createElement("a");
              var a = b.createDocumentFragment();
              return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
            }()
          } catch (c) {
            g = !0, k = !0
          }
        })();
        var s = {
          elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
          version: c,
          shivCSS: d.shivCSS !== !1,
          supportsUnknownElements: k,
          shivMethods: d.shivMethods !== !1,
          type: "default",
          shivDocument: r,
          createElement: o,
          createDocumentFragment: p
        };
        a.html5 = s, r(b)
      }(this, b), e._version = d, e._prefixes = m, e._domPrefixes = p, e._cssomPrefixes = o, e.hasEvent = x, e.testProp = function(a) {
        return E([a])
      }, e.testAllProps = G, e.testStyles = w, e.prefixed = function(a, b, c) {
        return b ? G(a, b, c) : G(a, "pfx")
      }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + t.join(" ") : ""), e
  }(this, this.document),
  function(a, b, c) {
    function d(a) {
      return "[object Function]" == o.call(a)
    }

    function e(a) {
      return "string" == typeof a
    }

    function f() {}

    function g(a) {
      return !a || "loaded" == a || "complete" == a || "uninitialized" == a
    }

    function h() {
      var a = p.shift();
      q = 1, a ? a.t ? m(function() {
        ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
      }, 0) : (a(), h()) : q = 0
    }

    function i(a, c, d, e, f, i, j) {
      function k(b) {
        if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
          "img" != a && m(function() {
            t.removeChild(l)
          }, 50);
          for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
        }
      }
      var j = j || B.errorTimeout,
        l = b.createElement(a),
        o = 0,
        r = 0,
        u = {
          t: d,
          s: c,
          e: f,
          a: i,
          x: j
        };
      1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
        k.call(this, r)
      }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
    }

    function j(a, b, c, d, f) {
      return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
    }

    function k() {
      var a = B;
      return a.loader = {
        load: j,
        i: 0
      }, a
    }
    var l = b.documentElement,
      m = a.setTimeout,
      n = b.getElementsByTagName("script")[0],
      o = {}.toString,
      p = [],
      q = 0,
      r = "MozAppearance" in l.style,
      s = r && !!b.createRange().compareNode,
      t = s ? l : n.parentNode,
      l = a.opera && "[object Opera]" == o.call(a.opera),
      l = !!b.attachEvent && !l,
      u = r ? "object" : l ? "script" : "img",
      v = l ? "script" : u,
      w = Array.isArray || function(a) {
        return "[object Array]" == o.call(a)
      },
      x = [],
      y = {},
      z = {
        timeout: function(a, b) {
          return b.length && (a.timeout = b[0]), a
        }
      },
      A, B;
    B = function(a) {
      function b(a) {
        var a = a.split("!"),
          b = x.length,
          c = a.pop(),
          d = a.length,
          c = {
            url: c,
            origUrl: c,
            prefixes: a
          },
          e, f, g;
        for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
        for (f = 0; f < b; f++) c = x[f](c);
        return c
      }

      function g(a, e, f, g, h) {
        var i = b(a),
          j = i.autoCallback;
        i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
          k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
        })))
      }

      function h(a, b) {
        function c(a, c) {
          if (a) {
            if (e(a)) c || (j = function() {
              var a = [].slice.call(arguments);
              k.apply(this, a), l()
            }), g(a, j, b, 0, h);
            else if (Object(a) === a)
              for (n in m = function() {
                  var b = 0,
                    c;
                  for (c in a) a.hasOwnProperty(c) && b++;
                  return b
                }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                var a = [].slice.call(arguments);
                k.apply(this, a), l()
              } : j[n] = function(a) {
                return function() {
                  var b = [].slice.call(arguments);
                  a && a.apply(this, b), l()
                }
              }(k[n])), g(a[n], j, b, n, h))
          } else !c && l()
        }
        var h = !!a.test,
          i = a.load || a.both,
          j = a.callback || f,
          k = j,
          l = a.complete || f,
          m, n;
        c(h ? a.yep : a.nope, !!i), i && c(i)
      }
      var i, j, l = this.yepnope.loader;
      if (e(a)) g(a, 0, l, 0);
      else if (w(a))
        for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
      else Object(a) === a && h(a, l)
    }, B.addPrefix = function(a, b) {
      z[a] = b
    }, B.addFilter = function(a) {
      x.push(a)
    }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() {
      b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
    }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
      var k = b.createElement("script"),
        l, o, e = e || B.errorTimeout;
      k.src = a;
      for (o in d) k.setAttribute(o, d[o]);
      c = j ? h : c || f, k.onreadystatechange = k.onload = function() {
        !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
      }, m(function() {
        l || (l = 1, c(1))
      }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
    }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
      var e = b.createElement("link"),
        j, c = i ? h : c || f;
      e.href = a, e.rel = "stylesheet", e.type = "text/css";
      for (j in d) e.setAttribute(j, d[j]);
      g || (n.parentNode.insertBefore(e, n), m(c, 0))
    }
  }(this, document), Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
  };

/* -- FILE: [javascripts/TweenMax.min.js]*/
/*!
 * VERSION: 1.15.1
 * DATE: 2015-01-20
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
        var s = function(t) {
            var e, i = [],
              s = t.length;
            for (e = 0; e !== s; i.push(t[e++]));
            return i
          },
          r = function(t, e, s) {
            i.call(this, t, e, s), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = r.prototype.render
          },
          n = 1e-10,
          a = i._internals,
          o = a.isSelector,
          h = a.isArray,
          l = r.prototype = i.to({}, .1, {}),
          _ = [];
        r.version = "1.15.1", l.constructor = r, l.kill()._gc = !1, r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf, r.getTweensOf = i.getTweensOf, r.lagSmoothing = i.lagSmoothing, r.ticker = i.ticker, r.render = i.render, l.invalidate = function() {
          return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
        }, l.updateTo = function(t, e) {
          var s, r = this.ratio,
            n = this.vars.immediateRender || t.immediateRender;
          e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
          for (s in t) this.vars[s] = t[s];
          if (this._initted || n)
            if (e) this._initted = !1, n && this.render(0, !0, !0);
            else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
            var a = this._time;
            this.render(0, !0, !1), this._initted = !1, this.render(a, !0, !1)
          } else if (this._time > 0 || n) {
            this._initted = !1, this._init();
            for (var o, h = 1 / (1 - r), l = this._firstPT; l;) o = l.s + l.c, l.c *= h, l.s = o - l.c, l = l._next
          }
          return this
        }, l.render = function(t, e, i) {
          this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
          var s, r, o, h, l, u, p, c, f = this._dirty ? this.totalDuration() : this._totalDuration,
            m = this._time,
            d = this._totalTime,
            g = this._cycle,
            v = this._duration,
            y = this._rawPrevTime;
          if (t >= f ? (this._totalTime = f, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = v, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (s = !0, r = "onComplete"), 0 === v && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > y || y === n) && y !== t && (i = !0, y > n && (r = "onReverseComplete")), this._rawPrevTime = c = !e || t || y === t ? t : n)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== d || 0 === v && y > 0 && y !== n) && (r = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === v && (this._initted || !this.vars.lazy || i) && (y >= 0 && (i = !0), this._rawPrevTime = c = !e || t || y === t ? t : n)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (h = v + this._repeatDelay, this._cycle = this._totalTime / h >> 0, 0 !== this._cycle && this._cycle === this._totalTime / h && this._cycle--, this._time = this._totalTime - this._cycle * h, this._yoyo && 0 !== (1 & this._cycle) && (this._time = v - this._time), this._time > v ? this._time = v : 0 > this._time && (this._time = 0)), this._easeType ? (l = this._time / v, u = this._easeType, p = this._easePower, (1 === u || 3 === u && l >= .5) && (l = 1 - l), 3 === u && (l *= 2), 1 === p ? l *= l : 2 === p ? l *= l * l : 3 === p ? l *= l * l * l : 4 === p && (l *= l * l * l * l), this.ratio = 1 === u ? 1 - l : 2 === u ? l : .5 > this._time / v ? l / 2 : 1 - l / 2) : this.ratio = this._ease.getRatio(this._time / v)), m === this._time && !i && g === this._cycle) return d !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _)), void 0;
          if (!this._initted) {
            if (this._init(), !this._initted || this._gc) return;
            if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = m, this._totalTime = d, this._rawPrevTime = y, this._cycle = g, a.lazyTweens.push(this), this._lazy = [t, e], void 0;
            this._time && !s ? this.ratio = this._ease.getRatio(this._time / v) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
          }
          for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== m && t >= 0 && (this._active = !0), 0 === d && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === v) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || _))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
          this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== d || s) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _)), this._cycle !== g && (e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || _)), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || _), 0 === v && this._rawPrevTime === n && c !== n && (this._rawPrevTime = 0))
        }, r.to = function(t, e, i) {
          return new r(t, e, i)
        }, r.from = function(t, e, i) {
          return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new r(t, e, i)
        }, r.fromTo = function(t, e, i, s) {
          return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new r(t, e, s)
        }, r.staggerTo = r.allTo = function(t, e, n, a, l, u, p) {
          a = a || 0;
          var c, f, m, d, g = n.delay || 0,
            v = [],
            y = function() {
              n.onComplete && n.onComplete.apply(n.onCompleteScope || this, arguments), l.apply(p || this, u || _)
            };
          for (h(t) || ("string" == typeof t && (t = i.selector(t) || t), o(t) && (t = s(t))), t = t || [], 0 > a && (t = s(t), t.reverse(), a *= -1), c = t.length - 1, m = 0; c >= m; m++) {
            f = {};
            for (d in n) f[d] = n[d];
            f.delay = g, m === c && l && (f.onComplete = y), v[m] = new r(t[m], e, f), g += a
          }
          return v
        }, r.staggerFrom = r.allFrom = function(t, e, i, s, n, a, o) {
          return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, r.staggerTo(t, e, i, s, n, a, o)
        }, r.staggerFromTo = r.allFromTo = function(t, e, i, s, n, a, o, h) {
          return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, r.staggerTo(t, e, s, n, a, o, h)
        }, r.delayedCall = function(t, e, i, s, n) {
          return new r(e, 0, {
            delay: t,
            onComplete: e,
            onCompleteParams: i,
            onCompleteScope: s,
            onReverseComplete: e,
            onReverseCompleteParams: i,
            onReverseCompleteScope: s,
            immediateRender: !1,
            useFrames: n,
            overwrite: 0
          })
        }, r.set = function(t, e) {
          return new r(t, 0, e)
        }, r.isTweening = function(t) {
          return i.getTweensOf(t, !0).length > 0
        };
        var u = function(t, e) {
            for (var s = [], r = 0, n = t._first; n;) n instanceof i ? s[r++] = n : (e && (s[r++] = n), s = s.concat(u(n, e)), r = s.length), n = n._next;
            return s
          },
          p = r.getAllTweens = function(e) {
            return u(t._rootTimeline, e).concat(u(t._rootFramesTimeline, e))
          };
        r.killAll = function(t, i, s, r) {
          null == i && (i = !0), null == s && (s = !0);
          var n, a, o, h = p(0 != r),
            l = h.length,
            _ = i && s && r;
          for (o = 0; l > o; o++) a = h[o], (_ || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
        }, r.killChildTweensOf = function(t, e) {
          if (null != t) {
            var n, l, _, u, p, c = a.tweenLookup;
            if ("string" == typeof t && (t = i.selector(t) || t), o(t) && (t = s(t)), h(t))
              for (u = t.length; --u > -1;) r.killChildTweensOf(t[u], e);
            else {
              n = [];
              for (_ in c)
                for (l = c[_].target.parentNode; l;) l === t && (n = n.concat(c[_].tweens)), l = l.parentNode;
              for (p = n.length, u = 0; p > u; u++) e && n[u].totalTime(n[u].totalDuration()), n[u]._enabled(!1, !1)
            }
          }
        };
        var c = function(t, i, s, r) {
          i = i !== !1, s = s !== !1, r = r !== !1;
          for (var n, a, o = p(r), h = i && s && r, l = o.length; --l > -1;) a = o[l], (h || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && a.paused(t)
        };
        return r.pauseAll = function(t, e, i) {
          c(!0, t, e, i)
        }, r.resumeAll = function(t, e, i) {
          c(!1, t, e, i)
        }, r.globalTimeScale = function(e) {
          var s = t._rootTimeline,
            r = i.ticker.time;
          return arguments.length ? (e = e || n, s._startTime = r - (r - s._startTime) * s._timeScale / e, s = t._rootFramesTimeline, r = i.ticker.frame, s._startTime = r - (r - s._startTime) * s._timeScale / e, s._timeScale = t._rootTimeline._timeScale = e, e) : s._timeScale
        }, l.progress = function(t) {
          return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
        }, l.totalProgress = function(t) {
          return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
        }, l.time = function(t, e) {
          return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
        }, l.duration = function(e) {
          return arguments.length ? t.prototype.duration.call(this, e) : this._duration
        }, l.totalDuration = function(t) {
          return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
        }, l.repeat = function(t) {
          return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
        }, l.repeatDelay = function(t) {
          return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
        }, l.yoyo = function(t) {
          return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, r
      }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
        var s = function(t) {
            e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
            var i, s, r = this.vars;
            for (s in r) i = r[s], h(i) && -1 !== i.join("").indexOf("{self}") && (r[s] = this._swapSelfInParams(i));
            h(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
          },
          r = 1e-10,
          n = i._internals,
          a = s._internals = {},
          o = n.isSelector,
          h = n.isArray,
          l = n.lazyTweens,
          _ = n.lazyRender,
          u = [],
          p = _gsScope._gsDefine.globals,
          c = function(t) {
            var e, i = {};
            for (e in t) i[e] = t[e];
            return i
          },
          f = a.pauseCallback = function(t, e, i, s) {
            var r = t._timeline,
              n = r._totalTime;
            !e && this._forcingPlayhead || r._rawPrevTime === t._startTime || (r.pause(t._startTime), e && e.apply(s || r, i || u), this._forcingPlayhead && r.seek(n))
          },
          m = function(t) {
            var e, i = [],
              s = t.length;
            for (e = 0; e !== s; i.push(t[e++]));
            return i
          },
          d = s.prototype = new e;
        return s.version = "1.15.1", d.constructor = s, d.kill()._gc = d._forcingPlayhead = !1, d.to = function(t, e, s, r) {
          var n = s.repeat && p.TweenMax || i;
          return e ? this.add(new n(t, e, s), r) : this.set(t, s, r)
        }, d.from = function(t, e, s, r) {
          return this.add((s.repeat && p.TweenMax || i).from(t, e, s), r)
        }, d.fromTo = function(t, e, s, r, n) {
          var a = r.repeat && p.TweenMax || i;
          return e ? this.add(a.fromTo(t, e, s, r), n) : this.set(t, r, n)
        }, d.staggerTo = function(t, e, r, n, a, h, l, _) {
          var u, p = new s({
            onComplete: h,
            onCompleteParams: l,
            onCompleteScope: _,
            smoothChildTiming: this.smoothChildTiming
          });
          for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], o(t) && (t = m(t)), n = n || 0, 0 > n && (t = m(t), t.reverse(), n *= -1), u = 0; t.length > u; u++) r.startAt && (r.startAt = c(r.startAt)), p.to(t[u], e, c(r), u * n);
          return this.add(p, a)
        }, d.staggerFrom = function(t, e, i, s, r, n, a, o) {
          return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, s, r, n, a, o)
        }, d.staggerFromTo = function(t, e, i, s, r, n, a, o, h) {
          return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, s, r, n, a, o, h)
        }, d.call = function(t, e, s, r) {
          return this.add(i.delayedCall(0, t, e, s), r)
        }, d.set = function(t, e, s) {
          return s = this._parseTimeOrLabel(s, 0, !0), null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused), this.add(new i(t, 0, e), s)
        }, s.exportRoot = function(t, e) {
          t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
          var r, n, a = new s(t),
            o = a._timeline;
          for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, r = o._first; r;) n = r._next, e && r instanceof i && r.target === r.vars.onComplete || a.add(r, r._startTime - r._delay), r = n;
          return o.add(a, 0), a
        }, d.add = function(r, n, a, o) {
          var l, _, u, p, c, f;
          if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, r)), !(r instanceof t)) {
            if (r instanceof Array || r && r.push && h(r)) {
              for (a = a || "normal", o = o || 0, l = n, _ = r.length, u = 0; _ > u; u++) h(p = r[u]) && (p = new s({
                tweens: p
              })), this.add(p, l), "string" != typeof p && "function" != typeof p && ("sequence" === a ? l = p._startTime + p.totalDuration() / p._timeScale : "start" === a && (p._startTime -= p.delay())), l += o;
              return this._uncache(!0)
            }
            if ("string" == typeof r) return this.addLabel(r, n);
            if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
            r = i.delayedCall(0, r)
          }
          if (e.prototype.add.call(this, r, n), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
            for (c = this, f = c.rawTime() > r._startTime; c._timeline;) f && c._timeline.smoothChildTiming ? c.totalTime(c._totalTime, !0) : c._gc && c._enabled(!0, !1), c = c._timeline;
          return this
        }, d.remove = function(e) {
          if (e instanceof t) return this._remove(e, !1);
          if (e instanceof Array || e && e.push && h(e)) {
            for (var i = e.length; --i > -1;) this.remove(e[i]);
            return this
          }
          return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
        }, d._remove = function(t, i) {
          e.prototype._remove.call(this, t, i);
          var s = this._last;
          return s ? this._time > s._startTime + s._totalDuration / s._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
        }, d.append = function(t, e) {
          return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
        }, d.insert = d.insertMultiple = function(t, e, i, s) {
          return this.add(t, e || 0, i, s)
        }, d.appendMultiple = function(t, e, i, s) {
          return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s)
        }, d.addLabel = function(t, e) {
          return this._labels[t] = this._parseTimeOrLabel(e), this
        }, d.addPause = function(t, e, s, r) {
          var n = i.delayedCall(0, f, ["{self}", e, s, r], this);
          return n.data = "isPause", this.add(n, t)
        }, d.removeLabel = function(t) {
          return delete this._labels[t], this
        }, d.getLabelTime = function(t) {
          return null != this._labels[t] ? this._labels[t] : -1
        }, d._parseTimeOrLabel = function(e, i, s, r) {
          var n;
          if (r instanceof t && r.timeline === this) this.remove(r);
          else if (r && (r instanceof Array || r.push && h(r)))
            for (n = r.length; --n > -1;) r[n] instanceof t && r[n].timeline === this && this.remove(r[n]);
          if ("string" == typeof i) return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, s);
          if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
          else {
            if (n = e.indexOf("="), -1 === n) return null == this._labels[e] ? s ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
            i = parseInt(e.charAt(n - 1) + "1", 10) * Number(e.substr(n + 1)), e = n > 1 ? this._parseTimeOrLabel(e.substr(0, n - 1), 0, s) : this.duration()
          }
          return Number(e) + i
        }, d.seek = function(t, e) {
          return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
        }, d.stop = function() {
          return this.paused(!0)
        }, d.gotoAndPlay = function(t, e) {
          return this.play(t, e)
        }, d.gotoAndStop = function(t, e) {
          return this.pause(t, e)
        }, d.render = function(t, e, i) {
          this._gc && this._enabled(!0, !1);
          var s, n, a, o, h, p = this._dirty ? this.totalDuration() : this._totalDuration,
            c = this._time,
            f = this._startTime,
            m = this._timeScale,
            d = this._paused;
          if (t >= p ? (this._totalTime = this._time = p, this._reversed || this._hasPausedChild() || (n = !0, o = "onComplete", 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (h = !0, this._rawPrevTime > r && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = p + 1e-4) : 1e-7 > t ? (this._totalTime = this._time = 0, (0 !== c || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (o = "onReverseComplete", n = this._reversed), 0 > t ? (this._active = !1, this._rawPrevTime >= 0 && this._first && (h = !0), this._rawPrevTime = t) : (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = 0, this._initted || (h = !0))) : this._totalTime = this._time = this._rawPrevTime = t, this._time !== c && this._first || i || h) {
            if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== c && t > 0 && (this._active = !0), 0 === c && this.vars.onStart && 0 !== this._time && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || u)), this._time >= c)
              for (s = this._first; s && (a = s._next, !this._paused || d);)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
            else
              for (s = this._last; s && (a = s._prev, !this._paused || d);)(s._active || c >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
            this._onUpdate && (e || (l.length && _(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || u))), o && (this._gc || (f === this._startTime || m !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (n && (l.length && _(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this.vars[o].apply(this.vars[o + "Scope"] || this, this.vars[o + "Params"] || u)))
          }
        }, d._hasPausedChild = function() {
          for (var t = this._first; t;) {
            if (t._paused || t instanceof s && t._hasPausedChild()) return !0;
            t = t._next
          }
          return !1
        }, d.getChildren = function(t, e, s, r) {
          r = r || -9999999999;
          for (var n = [], a = this._first, o = 0; a;) r > a._startTime || (a instanceof i ? e !== !1 && (n[o++] = a) : (s !== !1 && (n[o++] = a), t !== !1 && (n = n.concat(a.getChildren(!0, e, s)), o = n.length))), a = a._next;
          return n
        }, d.getTweensOf = function(t, e) {
          var s, r, n = this._gc,
            a = [],
            o = 0;
          for (n && this._enabled(!0, !0), s = i.getTweensOf(t), r = s.length; --r > -1;)(s[r].timeline === this || e && this._contains(s[r])) && (a[o++] = s[r]);
          return n && this._enabled(!1, !0), a
        }, d.recent = function() {
          return this._recent
        }, d._contains = function(t) {
          for (var e = t.timeline; e;) {
            if (e === this) return !0;
            e = e.timeline
          }
          return !1
        }, d.shiftChildren = function(t, e, i) {
          i = i || 0;
          for (var s, r = this._first, n = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
          if (e)
            for (s in n) n[s] >= i && (n[s] += t);
          return this._uncache(!0)
        }, d._kill = function(t, e) {
          if (!t && !e) return this._enabled(!1, !1);
          for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, r = !1; --s > -1;) i[s]._kill(t, e) && (r = !0);
          return r
        }, d.clear = function(t) {
          var e = this.getChildren(!1, !0, !0),
            i = e.length;
          for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
          return t !== !1 && (this._labels = {}), this._uncache(!0)
        }, d.invalidate = function() {
          for (var e = this._first; e;) e.invalidate(), e = e._next;
          return t.prototype.invalidate.call(this)
        }, d._enabled = function(t, i) {
          if (t === this._gc)
            for (var s = this._first; s;) s._enabled(t, !0), s = s._next;
          return e.prototype._enabled.call(this, t, i)
        }, d.totalTime = function() {
          this._forcingPlayhead = !0;
          var e = t.prototype.totalTime.apply(this, arguments);
          return this._forcingPlayhead = !1, e
        }, d.duration = function(t) {
          return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
        }, d.totalDuration = function(t) {
          if (!arguments.length) {
            if (this._dirty) {
              for (var e, i, s = 0, r = this._last, n = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > n && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : n = r._startTime, 0 > r._startTime && !r._paused && (s -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), n = 0), i = r._startTime + r._totalDuration / r._timeScale, i > s && (s = i), r = e;
              this._duration = this._totalDuration = s, this._dirty = !1
            }
            return this._totalDuration
          }
          return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
        }, d.usesFrames = function() {
          for (var e = this._timeline; e._timeline;) e = e._timeline;
          return e === t._rootFramesTimeline
        }, d.rawTime = function() {
          return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
        }, s
      }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
        var s = function(e) {
            t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
          },
          r = 1e-10,
          n = [],
          a = e._internals,
          o = a.lazyTweens,
          h = a.lazyRender,
          l = new i(null, null, 1, 0),
          _ = s.prototype = new t;
        return _.constructor = s, _.kill()._gc = !1, s.version = "1.15.1", _.invalidate = function() {
          return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
        }, _.addCallback = function(t, i, s, r) {
          return this.add(e.delayedCall(0, t, s, r), i)
        }, _.removeCallback = function(t, e) {
          if (t)
            if (null == e) this._kill(null, t);
            else
              for (var i = this.getTweensOf(t, !1), s = i.length, r = this._parseTimeOrLabel(e); --s > -1;) i[s]._startTime === r && i[s]._enabled(!1, !1);
          return this
        }, _.removePause = function(e) {
          return this.removeCallback(t._internals.pauseCallback, e)
        }, _.tweenTo = function(t, i) {
          i = i || {};
          var s, r, a, o = {
            ease: l,
            useFrames: this.usesFrames(),
            immediateRender: !1
          };
          for (r in i) o[r] = i[r];
          return o.time = this._parseTimeOrLabel(t), s = Math.abs(Number(o.time) - this._time) / this._timeScale || .001, a = new e(this, s, o), o.onStart = function() {
            a.target.paused(!0), a.vars.time !== a.target.time() && s === a.duration() && a.duration(Math.abs(a.vars.time - a.target.time()) / a.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || a, i.onStartParams || n)
          }, a
        }, _.tweenFromTo = function(t, e, i) {
          i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
            onComplete: this.seek,
            onCompleteParams: [t],
            onCompleteScope: this
          }, i.immediateRender = i.immediateRender !== !1;
          var s = this.tweenTo(e, i);
          return s.duration(Math.abs(s.vars.time - t) / this._timeScale || .001)
        }, _.render = function(t, e, i) {
          this._gc && this._enabled(!0, !1);
          var s, a, l, _, u, p, c = this._dirty ? this.totalDuration() : this._totalDuration,
            f = this._duration,
            m = this._time,
            d = this._totalTime,
            g = this._startTime,
            v = this._timeScale,
            y = this._rawPrevTime,
            T = this._paused,
            w = this._cycle;
          if (t >= c ? (this._locked || (this._totalTime = c, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (a = !0, _ = "onComplete", 0 === this._duration && (0 === t || 0 > y || y === r) && y !== t && this._first && (u = !0, y > r && (_ = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = f, t = f + 1e-4)) : 1e-7 > t ? (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== m || 0 === f && y !== r && (y > 0 || 0 > t && y >= 0) && !this._locked) && (_ = "onReverseComplete", a = this._reversed), 0 > t ? (this._active = !1, y >= 0 && this._first && (u = !0), this._rawPrevTime = t) : (this._rawPrevTime = f || !e || t || this._rawPrevTime === t ? t : r, t = 0, this._initted || (u = !0))) : (0 === f && 0 > y && (u = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (p = f + this._repeatDelay, this._cycle = this._totalTime / p >> 0, 0 !== this._cycle && this._cycle === this._totalTime / p && this._cycle--, this._time = this._totalTime - this._cycle * p, this._yoyo && 0 !== (1 & this._cycle) && (this._time = f - this._time), this._time > f ? (this._time = f, t = f + 1e-4) : 0 > this._time ? this._time = t = 0 : t = this._time))), this._cycle !== w && !this._locked) {
            var x = this._yoyo && 0 !== (1 & w),
              b = x === (this._yoyo && 0 !== (1 & this._cycle)),
              P = this._totalTime,
              S = this._cycle,
              k = this._rawPrevTime,
              R = this._time;
            if (this._totalTime = w * f, w > this._cycle ? x = !x : this._totalTime += f, this._time = m, this._rawPrevTime = 0 === f ? y - 1e-4 : y, this._cycle = w, this._locked = !0, m = x ? 0 : f, this.render(m, e, 0 === f), e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || n), b && (m = x ? f + 1e-4 : -1e-4, this.render(m, !0, !1)), this._locked = !1, this._paused && !T) return;
            this._time = R, this._totalTime = P, this._cycle = S, this._rawPrevTime = k
          }
          if (!(this._time !== m && this._first || i || u)) return d !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || n)), void 0;
          if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== d && t > 0 && (this._active = !0), 0 === d && this.vars.onStart && 0 !== this._totalTime && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || n)), this._time >= m)
            for (s = this._first; s && (l = s._next, !this._paused || T);)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = l;
          else
            for (s = this._last; s && (l = s._prev, !this._paused || T);)(s._active || m >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = l;
          this._onUpdate && (e || (o.length && h(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || n))), _ && (this._locked || this._gc || (g === this._startTime || v !== this._timeScale) && (0 === this._time || c >= this.totalDuration()) && (a && (o.length && h(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[_] && this.vars[_].apply(this.vars[_ + "Scope"] || this, this.vars[_ + "Params"] || n)))
        }, _.getActive = function(t, e, i) {
          null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
          var s, r, n = [],
            a = this.getChildren(t, e, i),
            o = 0,
            h = a.length;
          for (s = 0; h > s; s++) r = a[s], r.isActive() && (n[o++] = r);
          return n
        }, _.getLabelAfter = function(t) {
          t || 0 !== t && (t = this._time);
          var e, i = this.getLabelsArray(),
            s = i.length;
          for (e = 0; s > e; e++)
            if (i[e].time > t) return i[e].name;
          return null
        }, _.getLabelBefore = function(t) {
          null == t && (t = this._time);
          for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
            if (t > e[i].time) return e[i].name;
          return null
        }, _.getLabelsArray = function() {
          var t, e = [],
            i = 0;
          for (t in this._labels) e[i++] = {
            time: this._labels[t],
            name: t
          };
          return e.sort(function(t, e) {
            return t.time - e.time
          }), e
        }, _.progress = function(t, e) {
          return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
        }, _.totalProgress = function(t, e) {
          return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
        }, _.totalDuration = function(e) {
          return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
        }, _.time = function(t, e) {
          return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
        }, _.repeat = function(t) {
          return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
        }, _.repeatDelay = function(t) {
          return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
        }, _.yoyo = function(t) {
          return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, _.currentLabel = function(t) {
          return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
        }, s
      }, !0),
      function() {
        var t = 180 / Math.PI,
          e = [],
          i = [],
          s = [],
          r = {},
          n = _gsScope._gsDefine.globals,
          a = function(t, e, i, s) {
            this.a = t, this.b = e, this.c = i, this.d = s, this.da = s - t, this.ca = i - t, this.ba = e - t
          },
          o = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
          h = function(t, e, i, s) {
            var r = {
                a: t
              },
              n = {},
              a = {},
              o = {
                c: s
              },
              h = (t + e) / 2,
              l = (e + i) / 2,
              _ = (i + s) / 2,
              u = (h + l) / 2,
              p = (l + _) / 2,
              c = (p - u) / 8;
            return r.b = h + (t - h) / 4, n.b = u + c, r.c = n.a = (r.b + n.b) / 2, n.c = a.a = (u + p) / 2, a.b = p - c, o.b = _ + (s - _) / 4, a.c = o.a = (a.b + o.b) / 2, [r, n, a, o]
          },
          l = function(t, r, n, a, o) {
            var l, _, u, p, c, f, m, d, g, v, y, T, w, x = t.length - 1,
              b = 0,
              P = t[0].a;
            for (l = 0; x > l; l++) c = t[b], _ = c.a, u = c.d, p = t[b + 1].d, o ? (y = e[l], T = i[l], w = .25 * (T + y) * r / (a ? .5 : s[l] || .5), f = u - (u - _) * (a ? .5 * r : 0 !== y ? w / y : 0), m = u + (p - u) * (a ? .5 * r : 0 !== T ? w / T : 0), d = u - (f + ((m - f) * (3 * y / (y + T) + .5) / 4 || 0))) : (f = u - .5 * (u - _) * r, m = u + .5 * (p - u) * r, d = u - (f + m) / 2), f += d, m += d, c.c = g = f, c.b = 0 !== l ? P : P = c.a + .6 * (c.c - c.a), c.da = u - _, c.ca = g - _, c.ba = P - _, n ? (v = h(_, P, g, u), t.splice(b, 1, v[0], v[1], v[2], v[3]), b += 4) : b++, P = m;
            c = t[b], c.b = P, c.c = P + .4 * (c.d - P), c.da = c.d - c.a, c.ca = c.c - c.a, c.ba = P - c.a, n && (v = h(c.a, P, c.c, c.d), t.splice(b, 1, v[0], v[1], v[2], v[3]))
          },
          _ = function(t, s, r, n) {
            var o, h, l, _, u, p, c = [];
            if (n)
              for (t = [n].concat(t), h = t.length; --h > -1;) "string" == typeof(p = t[h][s]) && "=" === p.charAt(1) && (t[h][s] = n[s] + Number(p.charAt(0) + p.substr(2)));
            if (o = t.length - 2, 0 > o) return c[0] = new a(t[0][s], 0, 0, t[-1 > o ? 0 : 1][s]), c;
            for (h = 0; o > h; h++) l = t[h][s], _ = t[h + 1][s], c[h] = new a(l, 0, 0, _), r && (u = t[h + 2][s], e[h] = (e[h] || 0) + (_ - l) * (_ - l), i[h] = (i[h] || 0) + (u - _) * (u - _));
            return c[h] = new a(t[h][s], 0, 0, t[h + 1][s]), c
          },
          u = function(t, n, a, h, u, p) {
            var c, f, m, d, g, v, y, T, w = {},
              x = [],
              b = p || t[0];
            u = "string" == typeof u ? "," + u + "," : o, null == n && (n = 1);
            for (f in t[0]) x.push(f);
            if (t.length > 1) {
              for (T = t[t.length - 1], y = !0, c = x.length; --c > -1;)
                if (f = x[c], Math.abs(b[f] - T[f]) > .05) {
                  y = !1;
                  break
                }
              y && (t = t.concat(), p && t.unshift(p), t.push(t[1]), p = t[t.length - 3])
            }
            for (e.length = i.length = s.length = 0, c = x.length; --c > -1;) f = x[c], r[f] = -1 !== u.indexOf("," + f + ","), w[f] = _(t, f, r[f], p);
            for (c = e.length; --c > -1;) e[c] = Math.sqrt(e[c]), i[c] = Math.sqrt(i[c]);
            if (!h) {
              for (c = x.length; --c > -1;)
                if (r[f])
                  for (m = w[x[c]], v = m.length - 1, d = 0; v > d; d++) g = m[d + 1].da / i[d] + m[d].da / e[d], s[d] = (s[d] || 0) + g * g;
              for (c = s.length; --c > -1;) s[c] = Math.sqrt(s[c])
            }
            for (c = x.length, d = a ? 4 : 1; --c > -1;) f = x[c], m = w[f], l(m, n, a, h, r[f]), y && (m.splice(0, d), m.splice(m.length - d, d));
            return w
          },
          p = function(t, e, i) {
            e = e || "soft";
            var s, r, n, o, h, l, _, u, p, c, f, m = {},
              d = "cubic" === e ? 3 : 2,
              g = "soft" === e,
              v = [];
            if (g && i && (t = [i].concat(t)), null == t || d + 1 > t.length) throw "invalid Bezier data";
            for (p in t[0]) v.push(p);
            for (l = v.length; --l > -1;) {
              for (p = v[l], m[p] = h = [], c = 0, u = t.length, _ = 0; u > _; _++) s = null == i ? t[_][p] : "string" == typeof(f = t[_][p]) && "=" === f.charAt(1) ? i[p] + Number(f.charAt(0) + f.substr(2)) : Number(f), g && _ > 1 && u - 1 > _ && (h[c++] = (s + h[c - 2]) / 2), h[c++] = s;
              for (u = c - d + 1, c = 0, _ = 0; u > _; _ += d) s = h[_], r = h[_ + 1], n = h[_ + 2], o = 2 === d ? 0 : h[_ + 3], h[c++] = f = 3 === d ? new a(s, r, n, o) : new a(s, (2 * r + s) / 3, (2 * r + n) / 3, n);
              h.length = c
            }
            return m
          },
          c = function(t, e, i) {
            for (var s, r, n, a, o, h, l, _, u, p, c, f = 1 / i, m = t.length; --m > -1;)
              for (p = t[m], n = p.a, a = p.d - n, o = p.c - n, h = p.b - n, s = r = 0, _ = 1; i >= _; _++) l = f * _, u = 1 - l, s = r - (r = (l * l * a + 3 * u * (l * o + u * h)) * l), c = m * i + _ - 1, e[c] = (e[c] || 0) + s * s
          },
          f = function(t, e) {
            e = e >> 0 || 6;
            var i, s, r, n, a = [],
              o = [],
              h = 0,
              l = 0,
              _ = e - 1,
              u = [],
              p = [];
            for (i in t) c(t[i], a, e);
            for (r = a.length, s = 0; r > s; s++) h += Math.sqrt(a[s]), n = s % e, p[n] = h, n === _ && (l += h, n = s / e >> 0, u[n] = p, o[n] = l, h = 0, p = []);
            return {
              length: l,
              lengths: o,
              segments: u
            }
          },
          m = _gsScope._gsDefine.plugin({
            propName: "bezier",
            priority: -1,
            version: "1.3.4",
            API: 2,
            global: !0,
            init: function(t, e, i) {
              this._target = t, e instanceof Array && (e = {
                values: e
              }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
              var s, r, n, a, o, h = e.values || [],
                l = {},
                _ = h[0],
                c = e.autoRotate || i.vars.orientToBezier;
              this._autoRotate = c ? c instanceof Array ? c : [
                ["x", "y", "rotation", c === !0 ? 0 : Number(c) || 0]
              ] : null;
              for (s in _) this._props.push(s);
              for (n = this._props.length; --n > -1;) s = this._props[n], this._overwriteProps.push(s), r = this._func[s] = "function" == typeof t[s], l[s] = r ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]), o || l[s] !== h[0][s] && (o = l);
              if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? u(h, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : p(h, e.type, l), this._segCount = this._beziers[s].length, this._timeRes) {
                var m = f(this._beziers, this._timeRes);
                this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
              }
              if (c = this._autoRotate)
                for (this._initialRotations = [], c[0] instanceof Array || (this._autoRotate = c = [c]), n = c.length; --n > -1;) {
                  for (a = 0; 3 > a; a++) s = c[n][a], this._func[s] = "function" == typeof t[s] ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)] : !1;
                  s = c[n][2], this._initialRotations[n] = this._func[s] ? this._func[s].call(this._target) : this._target[s]
                }
              return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
            },
            set: function(e) {
              var i, s, r, n, a, o, h, l, _, u, p = this._segCount,
                c = this._func,
                f = this._target,
                m = e !== this._startRatio;
              if (this._timeRes) {
                if (_ = this._lengths, u = this._curSeg, e *= this._length, r = this._li, e > this._l2 && p - 1 > r) {
                  for (l = p - 1; l > r && e >= (this._l2 = _[++r]););
                  this._l1 = _[r - 1], this._li = r, this._curSeg = u = this._segments[r], this._s2 = u[this._s1 = this._si = 0]
                } else if (this._l1 > e && r > 0) {
                  for (; r > 0 && (this._l1 = _[--r]) >= e;);
                  0 === r && this._l1 > e ? this._l1 = 0 : r++, this._l2 = _[r], this._li = r, this._curSeg = u = this._segments[r], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si]
                }
                if (i = r, e -= this._l1, r = this._si, e > this._s2 && u.length - 1 > r) {
                  for (l = u.length - 1; l > r && e >= (this._s2 = u[++r]););
                  this._s1 = u[r - 1], this._si = r
                } else if (this._s1 > e && r > 0) {
                  for (; r > 0 && (this._s1 = u[--r]) >= e;);
                  0 === r && this._s1 > e ? this._s1 = 0 : r++, this._s2 = u[r], this._si = r
                }
                o = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec
              } else i = 0 > e ? 0 : e >= 1 ? p - 1 : p * e >> 0, o = (e - i * (1 / p)) * p;
              for (s = 1 - o, r = this._props.length; --r > -1;) n = this._props[r], a = this._beziers[n][i], h = (o * o * a.da + 3 * s * (o * a.ca + s * a.ba)) * o + a.a, this._round[n] && (h = Math.round(h)), c[n] ? f[n](h) : f[n] = h;
              if (this._autoRotate) {
                var d, g, v, y, T, w, x, b = this._autoRotate;
                for (r = b.length; --r > -1;) n = b[r][2], w = b[r][3] || 0, x = b[r][4] === !0 ? 1 : t, a = this._beziers[b[r][0]], d = this._beziers[b[r][1]], a && d && (a = a[i], d = d[i], g = a.a + (a.b - a.a) * o, y = a.b + (a.c - a.b) * o, g += (y - g) * o, y += (a.c + (a.d - a.c) * o - y) * o, v = d.a + (d.b - d.a) * o, T = d.b + (d.c - d.b) * o, v += (T - v) * o, T += (d.c + (d.d - d.c) * o - T) * o, h = m ? Math.atan2(T - v, y - g) * x + w : this._initialRotations[r], c[n] ? f[n](h) : f[n] = h)
              }
            }
          }),
          d = m.prototype;
        m.bezierThrough = u, m.cubicToQuadratic = h, m._autoCSS = !0, m.quadraticToCubic = function(t, e, i) {
          return new a(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
        }, m._cssRegister = function() {
          var t = n.CSSPlugin;
          if (t) {
            var e = t._internals,
              i = e._parseToProxy,
              s = e._setPluginRatio,
              r = e.CSSPropTween;
            e._registerComplexSpecialProp("bezier", {
              parser: function(t, e, n, a, o, h) {
                e instanceof Array && (e = {
                  values: e
                }), h = new m;
                var l, _, u, p = e.values,
                  c = p.length - 1,
                  f = [],
                  d = {};
                if (0 > c) return o;
                for (l = 0; c >= l; l++) u = i(t, p[l], a, o, h, c !== l), f[l] = u.end;
                for (_ in e) d[_] = e[_];
                return d.values = f, o = new r(t, "bezier", 0, 0, u.pt, 2), o.data = u, o.plugin = h, o.setRatio = s, 0 === d.autoRotate && (d.autoRotate = !0), !d.autoRotate || d.autoRotate instanceof Array || (l = d.autoRotate === !0 ? 0 : Number(d.autoRotate), d.autoRotate = null != u.end.left ? [
                  ["left", "top", "rotation", l, !1]
                ] : null != u.end.x ? [
                  ["x", "y", "rotation", l, !1]
                ] : !1), d.autoRotate && (a._transform || a._enableTransforms(!1), u.autoRotate = a._target._gsTransform), h._onInitTween(u.proxy, d, a._tween), o
              }
            })
          }
        }, d._roundProps = function(t, e) {
          for (var i = this._overwriteProps, s = i.length; --s > -1;)(t[i[s]] || t.bezier || t.bezierThrough) && (this._round[i[s]] = e)
        }, d._kill = function(t) {
          var e, i, s = this._props;
          for (e in this._beziers)
            if (e in t)
              for (delete this._beziers[e], delete this._func[e], i = s.length; --i > -1;) s[i] === e && s.splice(i, 1);
          return this._super._kill.call(this, t)
        }
      }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
        var i, s, r, n, a = function() {
            t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio
          },
          o = _gsScope._gsDefine.globals,
          h = {},
          l = a.prototype = new t("css");
        l.constructor = a, a.version = "1.15.1", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", l = "px", a.suffixMap = {
          top: l,
          right: l,
          bottom: l,
          left: l,
          width: l,
          height: l,
          fontSize: l,
          padding: l,
          margin: l,
          perspective: l,
          lineHeight: ""
        };
        var _, u, p, c, f, m, d = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
          g = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
          v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
          y = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
          T = /(?:\d|\-|\+|=|#|\.)*/g,
          w = /opacity *= *([^)]*)/i,
          x = /opacity:([^;]*)/i,
          b = /alpha\(opacity *=.+?\)/i,
          P = /^(rgb|hsl)/,
          S = /([A-Z])/g,
          k = /-([a-z])/gi,
          R = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
          A = function(t, e) {
            return e.toUpperCase()
          },
          C = /(?:Left|Right|Width)/i,
          O = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
          D = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
          M = /,(?=[^\)]*(?:\(|$))/gi,
          z = Math.PI / 180,
          I = 180 / Math.PI,
          F = {},
          E = document,
          N = function(t) {
            return E.createElementNS ? E.createElementNS("http://www.w3.org/1999/xhtml", t) : E.createElement(t)
          },
          L = N("div"),
          X = N("img"),
          U = a._internals = {
            _specialProps: h
          },
          Y = navigator.userAgent,
          B = function() {
            var t = Y.indexOf("Android"),
              e = N("a");
            return p = -1 !== Y.indexOf("Safari") && -1 === Y.indexOf("Chrome") && (-1 === t || Number(Y.substr(t + 8, 1)) > 3), f = p && 6 > Number(Y.substr(Y.indexOf("Version/") + 8, 1)), c = -1 !== Y.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Y)) && (m = parseFloat(RegExp.$1)), e ? (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity)) : !1
          }(),
          j = function(t) {
            return w.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
          },
          q = function(t) {
            window.console && console.log(t)
          },
          V = "",
          G = "",
          W = function(t, e) {
            e = e || L;
            var i, s, r = e.style;
            if (void 0 !== r[t]) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], s = 5; --s > -1 && void 0 === r[i[s] + t];);
            return s >= 0 ? (G = 3 === s ? "ms" : i[s], V = "-" + G.toLowerCase() + "-", G + t) : null
          },
          Z = E.defaultView ? E.defaultView.getComputedStyle : function() {},
          Q = a.getStyle = function(t, e, i, s, r) {
            var n;
            return B || "opacity" !== e ? (!s && t.style[e] ? n = t.style[e] : (i = i || Z(t)) ? n = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(S, "-$1").toLowerCase()) : t.currentStyle && (n = t.currentStyle[e]), null == r || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : r) : j(t)
          },
          $ = U.convertToPixels = function(t, i, s, r, n) {
            if ("px" === r || !r) return s;
            if ("auto" === r || !s) return 0;
            var o, h, l, _ = C.test(i),
              u = t,
              p = L.style,
              c = 0 > s;
            if (c && (s = -s), "%" === r && -1 !== i.indexOf("border")) o = s / 100 * (_ ? t.clientWidth : t.clientHeight);
            else {
              if (p.cssText = "border:0 solid red;position:" + Q(t, "position") + ";line-height:0;", "%" !== r && u.appendChild) p[_ ? "borderLeftWidth" : "borderTopWidth"] = s + r;
              else {
                if (u = t.parentNode || E.body, h = u._gsCache, l = e.ticker.frame, h && _ && h.time === l) return h.width * s / 100;
                p[_ ? "width" : "height"] = s + r
              }
              u.appendChild(L), o = parseFloat(L[_ ? "offsetWidth" : "offsetHeight"]), u.removeChild(L), _ && "%" === r && a.cacheWidths !== !1 && (h = u._gsCache = u._gsCache || {}, h.time = l, h.width = 100 * (o / s)), 0 !== o || n || (o = $(t, i, s, r, !0))
            }
            return c ? -o : o
          },
          H = U.calculateOffset = function(t, e, i) {
            if ("absolute" !== Q(t, "position", i)) return 0;
            var s = "left" === e ? "Left" : "Top",
              r = Q(t, "margin" + s, i);
            return t["offset" + s] - ($(t, e, parseFloat(r), r.replace(T, "")) || 0)
          },
          K = function(t, e) {
            var i, s, r = {};
            if (e = e || Z(t, null))
              for (i in e)(-1 === i.indexOf("Transform") || xe === i) && (r[i] = e[i]);
            else if (e = t.currentStyle || t.style)
              for (i in e) "string" == typeof i && void 0 === r[i] && (r[i.replace(k, A)] = e[i]);
            return B || (r.opacity = j(t)), s = Me(t, e, !1), r.rotation = s.rotation, r.skewX = s.skewX, r.scaleX = s.scaleX, r.scaleY = s.scaleY, r.x = s.x, r.y = s.y, Se && (r.z = s.z, r.rotationX = s.rotationX, r.rotationY = s.rotationY, r.scaleZ = s.scaleZ), r.filters && delete r.filters, r
          },
          J = function(t, e, i, s, r) {
            var n, a, o, h = {},
              l = t.style;
            for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" == typeof n || "string" == typeof n) && (h[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(y, "") ? n : 0 : H(t, a), void 0 !== l[a] && (o = new ce(l, a, l[a], o)));
            if (s)
              for (a in s) "className" !== a && (h[a] = s[a]);
            return {
              difs: h,
              firstMPT: o
            }
          },
          te = {
            width: ["Left", "Right"],
            height: ["Top", "Bottom"]
          },
          ee = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
          ie = function(t, e, i) {
            var s = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
              r = te[e],
              n = r.length;
            for (i = i || Z(t, null); --n > -1;) s -= parseFloat(Q(t, "padding" + r[n], i, !0)) || 0, s -= parseFloat(Q(t, "border" + r[n] + "Width", i, !0)) || 0;
            return s
          },
          se = function(t, e) {
            (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
            var i = t.split(" "),
              s = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
              r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
            return null == r ? r = "center" === s ? "50%" : "0" : "center" === r && (r = "50%"), ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "").indexOf("=")) && (s = "50%"), e && (e.oxp = -1 !== s.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === s.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(s.replace(y, "")), e.oy = parseFloat(r.replace(y, ""))), s + " " + r + (i.length > 2 ? " " + i[2] : "")
          },
          re = function(t, e) {
            return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
          },
          ne = function(t, e) {
            return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t)
          },
          ae = function(t, e, i, s) {
            var r, n, a, o, h, l = 1e-6;
            return null == t ? o = e : "number" == typeof t ? o = t : (r = 360, n = t.split("_"), h = "=" === t.charAt(1), a = (h ? parseInt(t.charAt(0) + "1", 10) * parseFloat(n[0].substr(2)) : parseFloat(n[0])) * (-1 === t.indexOf("rad") ? 1 : I) - (h ? 0 : e), n.length && (s && (s[i] = e + a), -1 !== t.indexOf("short") && (a %= r, a !== a % (r / 2) && (a = 0 > a ? a + r : a - r)), -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * r) % r - (0 | a / r) * r : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * r) % r - (0 | a / r) * r)), o = e + a), l > o && o > -l && (o = 0), o
          },
          oe = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
          },
          he = function(t, e, i) {
            return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
          },
          le = a.parseColor = function(t) {
            var e, i, s, r, n, a;
            return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), oe[t] ? oe[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), s = t.charAt(3), t = "#" + e + e + i + i + s + s), t = parseInt(t.substr(1), 16), [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(d), r = Number(t[0]) % 360 / 360, n = Number(t[1]) / 100, a = Number(t[2]) / 100, i = .5 >= a ? a * (n + 1) : a + n - a * n, e = 2 * a - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = he(r + 1 / 3, e, i), t[1] = he(r, e, i), t[2] = he(r - 1 / 3, e, i), t) : (t = t.match(d) || oe.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : oe.black
          },
          _e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
        for (l in oe) _e += "|" + l + "\\b";
        _e = RegExp(_e + ")", "gi");
        var ue = function(t, e, i, s) {
            if (null == t) return function(t) {
              return t
            };
            var r, n = e ? (t.match(_e) || [""])[0] : "",
              a = t.split(n).join("").match(v) || [],
              o = t.substr(0, t.indexOf(a[0])),
              h = ")" === t.charAt(t.length - 1) ? ")" : "",
              l = -1 !== t.indexOf(" ") ? " " : ",",
              _ = a.length,
              u = _ > 0 ? a[0].replace(d, "") : "";
            return _ ? r = e ? function(t) {
              var e, p, c, f;
              if ("number" == typeof t) t += u;
              else if (s && M.test(t)) {
                for (f = t.replace(M, "|").split("|"), c = 0; f.length > c; c++) f[c] = r(f[c]);
                return f.join(",")
              }
              if (e = (t.match(_e) || [n])[0], p = t.split(e).join("").match(v) || [], c = p.length, _ > c--)
                for (; _ > ++c;) p[c] = i ? p[0 | (c - 1) / 2] : a[c];
              return o + p.join(l) + l + e + h + (-1 !== t.indexOf("inset") ? " inset" : "")
            } : function(t) {
              var e, n, p;
              if ("number" == typeof t) t += u;
              else if (s && M.test(t)) {
                for (n = t.replace(M, "|").split("|"), p = 0; n.length > p; p++) n[p] = r(n[p]);
                return n.join(",")
              }
              if (e = t.match(v) || [], p = e.length, _ > p--)
                for (; _ > ++p;) e[p] = i ? e[0 | (p - 1) / 2] : a[p];
              return o + e.join(l) + h
            } : function(t) {
              return t
            }
          },
          pe = function(t) {
            return t = t.split(","),
              function(e, i, s, r, n, a, o) {
                var h, l = (i + "").split(" ");
                for (o = {}, h = 0; 4 > h; h++) o[t[h]] = l[h] = l[h] || l[(h - 1) / 2 >> 0];
                return r.parse(e, o, n, a)
              }
          },
          ce = (U._setPluginRatio = function(t) {
            this.plugin.setRatio(t);
            for (var e, i, s, r, n = this.data, a = n.proxy, o = n.firstMPT, h = 1e-6; o;) e = a[o.v], o.r ? e = Math.round(e) : h > e && e > -h && (e = 0), o.t[o.p] = e, o = o._next;
            if (n.autoRotate && (n.autoRotate.rotation = a.rotation), 1 === t)
              for (o = n.firstMPT; o;) {
                if (i = o.t, i.type) {
                  if (1 === i.type) {
                    for (r = i.xs0 + i.s + i.xs1, s = 1; i.l > s; s++) r += i["xn" + s] + i["xs" + (s + 1)];
                    i.e = r
                  }
                } else i.e = i.s + i.xs0;
                o = o._next
              }
          }, function(t, e, i, s, r) {
            this.t = t, this.p = e, this.v = i, this.r = r, s && (s._prev = this, this._next = s)
          }),
          fe = (U._parseToProxy = function(t, e, i, s, r, n) {
            var a, o, h, l, _, u = s,
              p = {},
              c = {},
              f = i._transform,
              m = F;
            for (i._transform = null, F = e, s = _ = i.parse(t, e, s, r), F = m, n && (i._transform = f, u && (u._prev = null, u._prev && (u._prev._next = null))); s && s !== u;) {
              if (1 >= s.type && (o = s.p, c[o] = s.s + s.c, p[o] = s.s, n || (l = new ce(s, "s", o, l, s.r), s.c = 0), 1 === s.type))
                for (a = s.l; --a > 0;) h = "xn" + a, o = s.p + "_" + h, c[o] = s.data[h], p[o] = s[h], n || (l = new ce(s, h, o, l, s.rxp[h]));
              s = s._next
            }
            return {
              proxy: p,
              end: c,
              firstMPT: l,
              pt: _
            }
          }, U.CSSPropTween = function(t, e, s, r, a, o, h, l, _, u, p) {
            this.t = t, this.p = e, this.s = s, this.c = r, this.n = h || e, t instanceof fe || n.push(this.n), this.r = l, this.type = o || 0, _ && (this.pr = _, i = !0), this.b = void 0 === u ? s : u, this.e = void 0 === p ? s + r : p, a && (this._next = a, a._prev = this)
          }),
          me = a.parseComplex = function(t, e, i, s, r, n, a, o, h, l) {
            i = i || n || "", a = new fe(t, e, 0, 0, a, l ? 2 : 1, null, !1, o, i, s), s += "";
            var u, p, c, f, m, v, y, T, w, x, b, S, k = i.split(", ").join(",").split(" "),
              R = s.split(", ").join(",").split(" "),
              A = k.length,
              C = _ !== !1;
            for ((-1 !== s.indexOf(",") || -1 !== i.indexOf(",")) && (k = k.join(" ").replace(M, ", ").split(" "), R = R.join(" ").replace(M, ", ").split(" "), A = k.length), A !== R.length && (k = (n || "").split(" "), A = k.length), a.plugin = h, a.setRatio = l, u = 0; A > u; u++)
              if (f = k[u], m = R[u], T = parseFloat(f), T || 0 === T) a.appendXtra("", T, re(m, T), m.replace(g, ""), C && -1 !== m.indexOf("px"), !0);
              else if (r && ("#" === f.charAt(0) || oe[f] || P.test(f))) S = "," === m.charAt(m.length - 1) ? ")," : ")", f = le(f), m = le(m), w = f.length + m.length > 6, w && !B && 0 === m[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(R[u]).join("transparent")) : (B || (w = !1), a.appendXtra(w ? "rgba(" : "rgb(", f[0], m[0] - f[0], ",", !0, !0).appendXtra("", f[1], m[1] - f[1], ",", !0).appendXtra("", f[2], m[2] - f[2], w ? "," : S, !0), w && (f = 4 > f.length ? 1 : f[3], a.appendXtra("", f, (4 > m.length ? 1 : m[3]) - f, S, !1)));
            else if (v = f.match(d)) {
              if (y = m.match(g), !y || y.length !== v.length) return a;
              for (c = 0, p = 0; v.length > p; p++) b = v[p], x = f.indexOf(b, c), a.appendXtra(f.substr(c, x - c), Number(b), re(y[p], b), "", C && "px" === f.substr(x + b.length, 2), 0 === p), c = x + b.length;
              a["xs" + a.l] += f.substr(c)
            } else a["xs" + a.l] += a.l ? " " + f : f;
            if (-1 !== s.indexOf("=") && a.data) {
              for (S = a.xs0 + a.data.s, u = 1; a.l > u; u++) S += a["xs" + u] + a.data["xn" + u];
              a.e = S + a["xs" + u]
            }
            return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
          },
          de = 9;
        for (l = fe.prototype, l.l = l.pr = 0; --de > 0;) l["xn" + de] = 0, l["xs" + de] = "";
        l.xs0 = "", l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null, l.appendXtra = function(t, e, i, s, r, n) {
          var a = this,
            o = a.l;
          return a["xs" + o] += n && o ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = s || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = r, a["xn" + o] = e, a.plugin || (a.xfirst = new fe(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, r, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
            s: e + i
          }, a.rxp = {}, a.s = e, a.c = i, a.r = r, a)) : (a["xs" + o] += e + (s || ""), a)
        };
        var ge = function(t, e) {
            e = e || {}, this.p = e.prefix ? W(t) || t : t, h[t] = h[this.p] = this, this.format = e.formatter || ue(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
          },
          ve = U._registerComplexSpecialProp = function(t, e, i) {
            "object" != typeof e && (e = {
              parser: i
            });
            var s, r, n = t.split(","),
              a = e.defaultValue;
            for (i = i || [a], s = 0; n.length > s; s++) e.prefix = 0 === s && e.prefix, e.defaultValue = i[s] || a, r = new ge(n[s], e)
          },
          ye = function(t) {
            if (!h[t]) {
              var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
              ve(t, {
                parser: function(t, i, s, r, n, a, l) {
                  var _ = o.com.greensock.plugins[e];
                  return _ ? (_._cssRegister(), h[s].parse(t, i, s, r, n, a, l)) : (q("Error: " + e + " js file not loaded."), n)
                }
              })
            }
          };
        l = ge.prototype, l.parseComplex = function(t, e, i, s, r, n) {
          var a, o, h, l, _, u, p = this.keyword;
          if (this.multi && (M.test(i) || M.test(e) ? (o = e.replace(M, "|").split("|"), h = i.replace(M, "|").split("|")) : p && (o = [e], h = [i])), h) {
            for (l = h.length > o.length ? h.length : o.length, a = 0; l > a; a++) e = o[a] = o[a] || this.dflt, i = h[a] = h[a] || this.dflt, p && (_ = e.indexOf(p), u = i.indexOf(p), _ !== u && (i = -1 === u ? h : o, i[a] += " " + p));
            e = o.join(", "), i = h.join(", ")
          }
          return me(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, r, n)
        }, l.parse = function(t, e, i, s, n, a) {
          return this.parseComplex(t.style, this.format(Q(t, this.p, r, !1, this.dflt)), this.format(e), n, a)
        }, a.registerSpecialProp = function(t, e, i) {
          ve(t, {
            parser: function(t, s, r, n, a, o) {
              var h = new fe(t, r, 0, 0, a, 2, r, !1, i);
              return h.plugin = o, h.setRatio = e(t, s, n._tween, r), h
            },
            priority: i
          })
        };
        var Te, we = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
          xe = W("transform"),
          be = V + "transform",
          Pe = W("transformOrigin"),
          Se = null !== W("perspective"),
          ke = U.Transform = function() {
            this.perspective = parseFloat(a.defaultTransformPerspective) || 0, this.force3D = a.defaultForce3D !== !1 && Se ? a.defaultForce3D || "auto" : !1
          },
          Re = window.SVGElement,
          Ae = function(t, e, i) {
            var s, r = E.createElementNS("http://www.w3.org/2000/svg", t),
              n = /([a-z])([A-Z])/g;
            for (s in i) r.setAttributeNS(null, s.replace(n, "$1-$2").toLowerCase(), i[s]);
            return e.appendChild(r), r
          },
          Ce = document.documentElement,
          Oe = function() {
            var t, e, i, s = m || /Android/i.test(Y) && !window.chrome;
            return E.createElementNS && !s && (t = Ae("svg", Ce), e = Ae("rect", t, {
              width: 100,
              height: 50,
              x: 100
            }), i = e.getBoundingClientRect().width, e.style[Pe] = "50% 50%", e.style[xe] = "scaleX(0.5)", s = i === e.getBoundingClientRect().width && !(c && Se), Ce.removeChild(t)), s
          }(),
          De = function(t, e, i) {
            var s = t.getBBox();
            e = se(e).split(" "), i.xOrigin = (-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * s.width : parseFloat(e[0])) + s.x, i.yOrigin = (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * s.height : parseFloat(e[1])) + s.y
          },
          Me = U.getTransform = function(t, e, i, s) {
            if (t._gsTransform && i && !s) return t._gsTransform;
            var n, o, h, l, _, u, p, c, f, m, d = i ? t._gsTransform || new ke : new ke,
              g = 0 > d.scaleX,
              v = 2e-5,
              y = 1e5,
              T = Se ? parseFloat(Q(t, Pe, e, !1, "0 0 0").split(" ")[2]) || d.zOrigin || 0 : 0,
              w = parseFloat(a.defaultTransformPerspective) || 0;
            if (xe ? o = Q(t, be, e, !0) : t.currentStyle && (o = t.currentStyle.filter.match(O), o = o && 4 === o.length ? [o[0].substr(4), Number(o[2].substr(4)), Number(o[1].substr(4)), o[3].substr(4), d.x || 0, d.y || 0].join(",") : ""), n = !o || "none" === o || "matrix(1, 0, 0, 1, 0, 0)" === o, d.svg = !!(Re && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM)), d.svg && (De(t, Q(t, Pe, r, !1, "50% 50%") + "", d), Te = a.useSVGTransformAttr || Oe, h = t.getAttribute("transform"), n && h && -1 !== h.indexOf("matrix") && (o = h, n = 0)), !n) {
              for (h = (o || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], l = h.length; --l > -1;) _ = Number(h[l]), h[l] = (u = _ - (_ |= 0)) ? (0 | u * y + (0 > u ? -.5 : .5)) / y + _ : _;
              if (16 === h.length) {
                var x, b, P, S, k, R = h[0],
                  A = h[1],
                  C = h[2],
                  D = h[3],
                  M = h[4],
                  z = h[5],
                  F = h[6],
                  E = h[7],
                  N = h[8],
                  L = h[9],
                  X = h[10],
                  U = h[12],
                  Y = h[13],
                  B = h[14],
                  j = h[11],
                  q = Math.atan2(F, X);
                d.zOrigin && (B = -d.zOrigin, U = N * B - h[12], Y = L * B - h[13], B = X * B + d.zOrigin - h[14]), d.rotationX = q * I, q && (S = Math.cos(-q), k = Math.sin(-q), x = M * S + N * k, b = z * S + L * k, P = F * S + X * k, N = M * -k + N * S, L = z * -k + L * S, X = F * -k + X * S, j = E * -k + j * S, M = x, z = b, F = P), q = Math.atan2(N, X), d.rotationY = q * I, q && (S = Math.cos(-q), k = Math.sin(-q), x = R * S - N * k, b = A * S - L * k, P = C * S - X * k, L = A * k + L * S, X = C * k + X * S, j = D * k + j * S, R = x, A = b, C = P), q = Math.atan2(A, R), d.rotation = q * I, q && (S = Math.cos(-q), k = Math.sin(-q), R = R * S + M * k, b = A * S + z * k, z = A * -k + z * S, F = C * -k + F * S, A = b), d.rotationX && Math.abs(d.rotationX) + Math.abs(d.rotation) > 359.9 && (d.rotationX = d.rotation = 0, d.rotationY += 180), d.scaleX = (0 | Math.sqrt(R * R + A * A) * y + .5) / y, d.scaleY = (0 | Math.sqrt(z * z + L * L) * y + .5) / y, d.scaleZ = (0 | Math.sqrt(F * F + X * X) * y + .5) / y, d.skewX = 0, d.perspective = j ? 1 / (0 > j ? -j : j) : 0, d.x = U, d.y = Y, d.z = B
              } else if (!(Se && !s && h.length && d.x === h[4] && d.y === h[5] && (d.rotationX || d.rotationY) || void 0 !== d.x && "none" === Q(t, "display", e))) {
                var V = h.length >= 6,
                  G = V ? h[0] : 1,
                  W = h[1] || 0,
                  Z = h[2] || 0,
                  $ = V ? h[3] : 1;
                d.x = h[4] || 0, d.y = h[5] || 0, p = Math.sqrt(G * G + W * W), c = Math.sqrt($ * $ + Z * Z), f = G || W ? Math.atan2(W, G) * I : d.rotation || 0, m = Z || $ ? Math.atan2(Z, $) * I + f : d.skewX || 0, Math.abs(m) > 90 && 270 > Math.abs(m) && (g ? (p *= -1, m += 0 >= f ? 180 : -180, f += 0 >= f ? 180 : -180) : (c *= -1, m += 0 >= m ? 180 : -180)), d.scaleX = p, d.scaleY = c, d.rotation = f, d.skewX = m, Se && (d.rotationX = d.rotationY = d.z = 0, d.perspective = w, d.scaleZ = 1)
              }
              d.zOrigin = T;
              for (l in d) v > d[l] && d[l] > -v && (d[l] = 0)
            }
            return i && (t._gsTransform = d), d
          },
          ze = function(t) {
            var e, i, s = this.data,
              r = -s.rotation * z,
              n = r + s.skewX * z,
              a = 1e5,
              o = (0 | Math.cos(r) * s.scaleX * a) / a,
              h = (0 | Math.sin(r) * s.scaleX * a) / a,
              l = (0 | Math.sin(n) * -s.scaleY * a) / a,
              _ = (0 | Math.cos(n) * s.scaleY * a) / a,
              u = this.t.style,
              p = this.t.currentStyle;
            if (p) {
              i = h, h = -l, l = -i, e = p.filter, u.filter = "";
              var c, f, d = this.t.offsetWidth,
                g = this.t.offsetHeight,
                v = "absolute" !== p.position,
                y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + h + ", M21=" + l + ", M22=" + _,
                x = s.x + d * s.xPercent / 100,
                b = s.y + g * s.yPercent / 100;
              if (null != s.ox && (c = (s.oxp ? .01 * d * s.ox : s.ox) - d / 2, f = (s.oyp ? .01 * g * s.oy : s.oy) - g / 2, x += c - (c * o + f * h), b += f - (c * l + f * _)), v ? (c = d / 2, f = g / 2, y += ", Dx=" + (c - (c * o + f * h) + x) + ", Dy=" + (f - (c * l + f * _) + b) + ")") : y += ", sizingMethod='auto expand')", u.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(D, y) : y + " " + e, (0 === t || 1 === t) && 1 === o && 0 === h && 0 === l && 1 === _ && (v && -1 === y.indexOf("Dx=0, Dy=0") || w.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf("gradient(" && e.indexOf("Alpha")) && u.removeAttribute("filter")), !v) {
                var P, S, k, R = 8 > m ? 1 : -1;
                for (c = s.ieOffsetX || 0, f = s.ieOffsetY || 0, s.ieOffsetX = Math.round((d - ((0 > o ? -o : o) * d + (0 > h ? -h : h) * g)) / 2 + x), s.ieOffsetY = Math.round((g - ((0 > _ ? -_ : _) * g + (0 > l ? -l : l) * d)) / 2 + b), de = 0; 4 > de; de++) S = ee[de], P = p[S], i = -1 !== P.indexOf("px") ? parseFloat(P) : $(this.t, S, parseFloat(P), P.replace(T, "")) || 0, k = i !== s[S] ? 2 > de ? -s.ieOffsetX : -s.ieOffsetY : 2 > de ? c - s.ieOffsetX : f - s.ieOffsetY, u[S] = (s[S] = Math.round(i - k * (0 === de || 2 === de ? 1 : R))) + "px"
              }
            }
          },
          Ie = U.set3DTransformRatio = function(t) {
            var e, i, s, r, n, a, o, h, l, _, u, p, f, m, d, g, v, y, T, w, x, b = this.data,
              P = this.t.style,
              S = b.rotation * z,
              k = b.scaleX,
              R = b.scaleY,
              A = b.scaleZ,
              C = b.x,
              O = b.y,
              D = b.z,
              M = b.perspective;
            if (!(1 !== t && 0 !== t && b.force3D || b.force3D === !0 || b.rotationY || b.rotationX || 1 !== A || M || D)) return Fe.call(this, t), void 0;
            if (c && (m = 1e-4, m > k && k > -m && (k = A = 2e-5), m > R && R > -m && (R = A = 2e-5), !M || b.z || b.rotationX || b.rotationY || (M = 0)), S || b.skewX) d = e = Math.cos(S), g = r = Math.sin(S), b.skewX && (S -= b.skewX * z, d = Math.cos(S), g = Math.sin(S), "simple" === b.skewType && (v = Math.tan(b.skewX * z), v = Math.sqrt(1 + v * v), d *= v, g *= v)), i = -g, n = d;
            else {
              if (!(b.rotationY || b.rotationX || 1 !== A || M || b.svg)) return P[xe] = (b.xPercent || b.yPercent ? "translate(" + b.xPercent + "%," + b.yPercent + "%) translate3d(" : "translate3d(") + C + "px," + O + "px," + D + "px)" + (1 !== k || 1 !== R ? " scale(" + k + "," + R + ")" : ""), void 0;
              e = n = 1, i = r = 0
            }
            l = 1, s = a = o = h = _ = u = 0, p = M ? -1 / M : 0, f = b.zOrigin, m = 1e-6, w = ",", x = "0", S = b.rotationY * z, S && (d = Math.cos(S), g = Math.sin(S), o = -g, _ = p * -g, s = e * g, a = r * g, l = d, p *= d, e *= d, r *= d), S = b.rotationX * z, S && (d = Math.cos(S), g = Math.sin(S), v = i * d + s * g, y = n * d + a * g, h = l * g, u = p * g, s = i * -g + s * d, a = n * -g + a * d, l *= d, p *= d, i = v, n = y), 1 !== A && (s *= A, a *= A, l *= A, p *= A), 1 !== R && (i *= R, n *= R, h *= R, u *= R), 1 !== k && (e *= k, r *= k, o *= k, _ *= k), (f || b.svg) && (f && (C += s * -f, O += a * -f, D += l * -f + f), b.svg && (C += b.xOrigin - (b.xOrigin * e + b.yOrigin * i), O += b.yOrigin - (b.xOrigin * r + b.yOrigin * n)), m > C && C > -m && (C = x), m > O && O > -m && (O = x), m > D && D > -m && (D = 0)), T = b.xPercent || b.yPercent ? "translate(" + b.xPercent + "%," + b.yPercent + "%) matrix3d(" : "matrix3d(", T += (m > e && e > -m ? x : e) + w + (m > r && r > -m ? x : r) + w + (m > o && o > -m ? x : o), T += w + (m > _ && _ > -m ? x : _) + w + (m > i && i > -m ? x : i) + w + (m > n && n > -m ? x : n), b.rotationX || b.rotationY ? (T += w + (m > h && h > -m ? x : h) + w + (m > u && u > -m ? x : u) + w + (m > s && s > -m ? x : s), T += w + (m > a && a > -m ? x : a) + w + (m > l && l > -m ? x : l) + w + (m > p && p > -m ? x : p) + w) : T += ",0,0,0,0,1,0,", T += C + w + O + w + D + w + (M ? 1 + -D / M : 1) + ")", P[xe] = T
          },
          Fe = U.set2DTransformRatio = function(t) {
            var e, i, s, r, n, a, o, h, l, _, u, p = this.data,
              c = this.t,
              f = c.style,
              m = p.x,
              d = p.y;
            return !(p.rotationX || p.rotationY || p.z || p.force3D === !0 || "auto" === p.force3D && 1 !== t && 0 !== t) || p.svg && Te || !Se ? (r = p.scaleX, n = p.scaleY, p.rotation || p.skewX || p.svg ? (e = p.rotation * z, i = e - p.skewX * z, s = 1e5, a = Math.cos(e) * r, o = Math.sin(e) * r, h = Math.sin(i) * -n, l = Math.cos(i) * n, p.svg && (m += p.xOrigin - (p.xOrigin * a + p.yOrigin * h), d += p.yOrigin - (p.xOrigin * o + p.yOrigin * l), u = 1e-6, u > m && m > -u && (m = 0), u > d && d > -u && (d = 0)), _ = (0 | a * s) / s + "," + (0 | o * s) / s + "," + (0 | h * s) / s + "," + (0 | l * s) / s + "," + m + "," + d + ")", p.svg && Te ? c.setAttribute("transform", "matrix(" + _) : f[xe] = (p.xPercent || p.yPercent ? "translate(" + p.xPercent + "%," + p.yPercent + "%) matrix(" : "matrix(") + _) : f[xe] = (p.xPercent || p.yPercent ? "translate(" + p.xPercent + "%," + p.yPercent + "%) matrix(" : "matrix(") + r + ",0,0," + n + "," + m + "," + d + ")", void 0) : (this.setRatio = Ie, Ie.call(this, t), void 0)
          };
        l = ke.prototype, l.x = l.y = l.z = l.skewX = l.skewY = l.rotation = l.rotationX = l.rotationY = l.zOrigin = l.xPercent = l.yPercent = 0, l.scaleX = l.scaleY = l.scaleZ = 1, ve("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent", {
          parser: function(t, e, i, s, n, o, h) {
            if (s._lastParsedTransform === h) return n;
            s._lastParsedTransform = h;
            var l, _, u, p, c, f, m, d = s._transform = Me(t, r, !0, h.parseTransform),
              g = t.style,
              v = 1e-6,
              y = we.length,
              T = h,
              w = {};
            if ("string" == typeof T.transform && xe) u = L.style, u[xe] = T.transform, u.display = "block", u.position = "absolute", E.body.appendChild(L), l = Me(L, null, !1), E.body.removeChild(L);
            else if ("object" == typeof T) {
              if (l = {
                  scaleX: ne(null != T.scaleX ? T.scaleX : T.scale, d.scaleX),
                  scaleY: ne(null != T.scaleY ? T.scaleY : T.scale, d.scaleY),
                  scaleZ: ne(T.scaleZ, d.scaleZ),
                  x: ne(T.x, d.x),
                  y: ne(T.y, d.y),
                  z: ne(T.z, d.z),
                  xPercent: ne(T.xPercent, d.xPercent),
                  yPercent: ne(T.yPercent, d.yPercent),
                  perspective: ne(T.transformPerspective, d.perspective)
                }, m = T.directionalRotation, null != m)
                if ("object" == typeof m)
                  for (u in m) T[u] = m[u];
                else T.rotation = m;
              "string" == typeof T.x && -1 !== T.x.indexOf("%") && (l.x = 0, l.xPercent = ne(T.x, d.xPercent)), "string" == typeof T.y && -1 !== T.y.indexOf("%") && (l.y = 0, l.yPercent = ne(T.y, d.yPercent)), l.rotation = ae("rotation" in T ? T.rotation : "shortRotation" in T ? T.shortRotation + "_short" : "rotationZ" in T ? T.rotationZ : d.rotation, d.rotation, "rotation", w), Se && (l.rotationX = ae("rotationX" in T ? T.rotationX : "shortRotationX" in T ? T.shortRotationX + "_short" : d.rotationX || 0, d.rotationX, "rotationX", w), l.rotationY = ae("rotationY" in T ? T.rotationY : "shortRotationY" in T ? T.shortRotationY + "_short" : d.rotationY || 0, d.rotationY, "rotationY", w)), l.skewX = null == T.skewX ? d.skewX : ae(T.skewX, d.skewX), l.skewY = null == T.skewY ? d.skewY : ae(T.skewY, d.skewY), (_ = l.skewY - d.skewY) && (l.skewX += _, l.rotation += _)
            }
            for (Se && null != T.force3D && (d.force3D = T.force3D, f = !0), d.skewType = T.skewType || d.skewType || a.defaultSkewType, c = d.force3D || d.z || d.rotationX || d.rotationY || l.z || l.rotationX || l.rotationY || l.perspective, c || null == T.scale || (l.scaleZ = 1); --y > -1;) i = we[y], p = l[i] - d[i], (p > v || -v > p || null != T[i] || null != F[i]) && (f = !0, n = new fe(d, i, d[i], p, n), i in w && (n.e = w[i]), n.xs0 = 0, n.plugin = o, s._overwriteProps.push(n.n));
            return p = T.transformOrigin, p && d.svg && (De(t, se(p), l), n = new fe(d, "xOrigin", d.xOrigin, l.xOrigin - d.xOrigin, n, -1, "transformOrigin"), n.b = d.xOrigin, n.e = n.xs0 = l.xOrigin, n = new fe(d, "yOrigin", d.yOrigin, l.yOrigin - d.yOrigin, n, -1, "transformOrigin"), n.b = d.yOrigin, n.e = n.xs0 = l.yOrigin, p = "0px 0px"), (p || Se && c && d.zOrigin) && (xe ? (f = !0, i = Pe, p = (p || Q(t, i, r, !1, "50% 50%")) + "", n = new fe(g, i, 0, 0, n, -1, "transformOrigin"), n.b = g[i], n.plugin = o, Se ? (u = d.zOrigin, p = p.split(" "), d.zOrigin = (p.length > 2 && (0 === u || "0px" !== p[2]) ? parseFloat(p[2]) : u) || 0, n.xs0 = n.e = p[0] + " " + (p[1] || "50%") + " 0px", n = new fe(d, "zOrigin", 0, 0, n, -1, n.n), n.b = u, n.xs0 = n.e = d.zOrigin) : n.xs0 = n.e = p) : se(p + "", d)), f && (s._transformType = d.svg && Te || !c && 3 !== this._transformType ? 2 : 3), n
          },
          prefix: !0
        }), ve("boxShadow", {
          defaultValue: "0px 0px 0px 0px #999",
          prefix: !0,
          color: !0,
          multi: !0,
          keyword: "inset"
        }), ve("borderRadius", {
          defaultValue: "0px",
          parser: function(t, e, i, n, a) {
            e = this.format(e);
            var o, h, l, _, u, p, c, f, m, d, g, v, y, T, w, x, b = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
              P = t.style;
            for (m = parseFloat(t.offsetWidth), d = parseFloat(t.offsetHeight), o = e.split(" "), h = 0; b.length > h; h++) this.p.indexOf("border") && (b[h] = W(b[h])), u = _ = Q(t, b[h], r, !1, "0px"), -1 !== u.indexOf(" ") && (_ = u.split(" "), u = _[0], _ = _[1]), p = l = o[h], c = parseFloat(u), v = u.substr((c + "").length), y = "=" === p.charAt(1), y ? (f = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), f *= parseFloat(p), g = p.substr((f + "").length - (0 > f ? 1 : 0)) || "") : (f = parseFloat(p), g = p.substr((f + "").length)), "" === g && (g = s[i] || v), g !== v && (T = $(t, "borderLeft", c, v), w = $(t, "borderTop", c, v), "%" === g ? (u = 100 * (T / m) + "%", _ = 100 * (w / d) + "%") : "em" === g ? (x = $(t, "borderLeft", 1, "em"), u = T / x + "em", _ = w / x + "em") : (u = T + "px", _ = w + "px"), y && (p = parseFloat(u) + f + g, l = parseFloat(_) + f + g)), a = me(P, b[h], u + " " + _, p + " " + l, !1, "0px", a);
            return a
          },
          prefix: !0,
          formatter: ue("0px 0px 0px 0px", !1, !0)
        }), ve("backgroundPosition", {
          defaultValue: "0 0",
          parser: function(t, e, i, s, n, a) {
            var o, h, l, _, u, p, c = "background-position",
              f = r || Z(t, null),
              d = this.format((f ? m ? f.getPropertyValue(c + "-x") + " " + f.getPropertyValue(c + "-y") : f.getPropertyValue(c) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
              g = this.format(e);
            if (-1 !== d.indexOf("%") != (-1 !== g.indexOf("%")) && (p = Q(t, "backgroundImage").replace(R, ""), p && "none" !== p)) {
              for (o = d.split(" "), h = g.split(" "), X.setAttribute("src", p), l = 2; --l > -1;) d = o[l], _ = -1 !== d.indexOf("%"), _ !== (-1 !== h[l].indexOf("%")) && (u = 0 === l ? t.offsetWidth - X.width : t.offsetHeight - X.height, o[l] = _ ? parseFloat(d) / 100 * u + "px" : 100 * (parseFloat(d) / u) + "%");
              d = o.join(" ")
            }
            return this.parseComplex(t.style, d, g, n, a)
          },
          formatter: se
        }), ve("backgroundSize", {
          defaultValue: "0 0",
          formatter: se
        }), ve("perspective", {
          defaultValue: "0px",
          prefix: !0
        }), ve("perspectiveOrigin", {
          defaultValue: "50% 50%",
          prefix: !0
        }), ve("transformStyle", {
          prefix: !0
        }), ve("backfaceVisibility", {
          prefix: !0
        }), ve("userSelect", {
          prefix: !0
        }), ve("margin", {
          parser: pe("marginTop,marginRight,marginBottom,marginLeft")
        }), ve("padding", {
          parser: pe("paddingTop,paddingRight,paddingBottom,paddingLeft")
        }), ve("clip", {
          defaultValue: "rect(0px,0px,0px,0px)",
          parser: function(t, e, i, s, n, a) {
            var o, h, l;
            return 9 > m ? (h = t.currentStyle, l = 8 > m ? " " : ",", o = "rect(" + h.clipTop + l + h.clipRight + l + h.clipBottom + l + h.clipLeft + ")", e = this.format(e).split(",").join(l)) : (o = this.format(Q(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, n, a)
          }
        }), ve("textShadow", {
          defaultValue: "0px 0px 0px #999",
          color: !0,
          multi: !0
        }), ve("autoRound,strictUnits", {
          parser: function(t, e, i, s, r) {
            return r
          }
        }), ve("border", {
          defaultValue: "0px solid #000",
          parser: function(t, e, i, s, n, a) {
            return this.parseComplex(t.style, this.format(Q(t, "borderTopWidth", r, !1, "0px") + " " + Q(t, "borderTopStyle", r, !1, "solid") + " " + Q(t, "borderTopColor", r, !1, "#000")), this.format(e), n, a)
          },
          color: !0,
          formatter: function(t) {
            var e = t.split(" ");
            return e[0] + " " + (e[1] || "solid") + " " + (t.match(_e) || ["#000"])[0]
          }
        }), ve("borderWidth", {
          parser: pe("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
        }), ve("float,cssFloat,styleFloat", {
          parser: function(t, e, i, s, r) {
            var n = t.style,
              a = "cssFloat" in n ? "cssFloat" : "styleFloat";
            return new fe(n, a, 0, 0, r, -1, i, !1, 0, n[a], e)
          }
        });
        var Ee = function(t) {
          var e, i = this.t,
            s = i.filter || Q(this.data, "filter") || "",
            r = 0 | this.s + this.c * t;
          100 === r && (-1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") && -1 === s.indexOf("oader(") ? (i.removeAttribute("filter"), e = !Q(this.data, "filter")) : (i.filter = s.replace(b, ""), e = !0)), e || (this.xn1 && (i.filter = s = s || "alpha(opacity=" + r + ")"), -1 === s.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = s + " alpha(opacity=" + r + ")") : i.filter = s.replace(w, "opacity=" + r))
        };
        ve("opacity,alpha,autoAlpha", {
          defaultValue: "1",
          parser: function(t, e, i, s, n, a) {
            var o = parseFloat(Q(t, "opacity", r, !1, "1")),
              h = t.style,
              l = "autoAlpha" === i;
            return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), l && 1 === o && "hidden" === Q(t, "visibility", r) && 0 !== e && (o = 0), B ? n = new fe(h, "opacity", o, e - o, n) : (n = new fe(h, "opacity", 100 * o, 100 * (e - o), n), n.xn1 = l ? 1 : 0, h.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = t, n.plugin = a, n.setRatio = Ee), l && (n = new fe(h, "visibility", 0, 0, n, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), n.xs0 = "inherit", s._overwriteProps.push(n.n), s._overwriteProps.push(i)), n
          }
        });
        var Ne = function(t, e) {
            e && (t.removeProperty ? ("ms" === e.substr(0, 2) && (e = "M" + e.substr(1)), t.removeProperty(e.replace(S, "-$1").toLowerCase())) : t.removeAttribute(e))
          },
          Le = function(t) {
            if (this.t._gsClassPT = this, 1 === t || 0 === t) {
              this.t.setAttribute("class", 0 === t ? this.b : this.e);
              for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Ne(i, e.p), e = e._next;
              1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
            } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
          };
        ve("className", {
          parser: function(t, e, s, n, a, o, h) {
            var l, _, u, p, c, f = t.getAttribute("class") || "",
              m = t.style.cssText;
            if (a = n._classNamePT = new fe(t, s, 0, 0, a, 2), a.setRatio = Le, a.pr = -11, i = !0, a.b = f, _ = K(t, r), u = t._gsClassPT) {
              for (p = {}, c = u.data; c;) p[c.p] = 1, c = c._next;
              u.setRatio(1)
            }
            return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : f.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), n._tween._duration && (t.setAttribute("class", a.e), l = J(t, _, K(t), h, p), t.setAttribute("class", f), a.data = l.firstMPT, t.style.cssText = m, a = a.xfirst = n.parse(t, l.difs, a, o)), a
          }
        });
        var Xe = function(t) {
          if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
            var e, i, s, r, n = this.t.style,
              a = h.transform.parse;
            if ("all" === this.e) n.cssText = "", r = !0;
            else
              for (e = this.e.split(" ").join("").split(","), s = e.length; --s > -1;) i = e[s], h[i] && (h[i].parse === a ? r = !0 : i = "transformOrigin" === i ? Pe : h[i].p), Ne(n, i);
            r && (Ne(n, xe), this.t._gsTransform && delete this.t._gsTransform)
          }
        };
        for (ve("clearProps", {
            parser: function(t, e, s, r, n) {
              return n = new fe(t, s, 0, 0, n, 2), n.setRatio = Xe, n.e = e, n.pr = -10, n.data = r._tween, i = !0, n
            }
          }), l = "bezier,throwProps,physicsProps,physics2D".split(","), de = l.length; de--;) ye(l[de]);
        l = a.prototype, l._firstPT = l._lastParsedTransform = l._transform = null, l._onInitTween = function(t, e, o) {
          if (!t.nodeType) return !1;
          this._target = t, this._tween = o, this._vars = e, _ = e.autoRound, i = !1, s = e.suffixMap || a.suffixMap, r = Z(t, ""), n = this._overwriteProps;
          var h, l, c, m, d, g, v, y, T, w = t.style;
          if (u && "" === w.zIndex && (h = Q(t, "zIndex", r), ("auto" === h || "" === h) && this._addLazySet(w, "zIndex", 0)), "string" == typeof e && (m = w.cssText, h = K(t, r), w.cssText = m + ";" + e, h = J(t, h, K(t)).difs, !B && x.test(e) && (h.opacity = parseFloat(RegExp.$1)), e = h, w.cssText = m), this._firstPT = l = this.parse(t, e, null), this._transformType) {
            for (T = 3 === this._transformType, xe ? p && (u = !0, "" === w.zIndex && (v = Q(t, "zIndex", r), ("auto" === v || "" === v) && this._addLazySet(w, "zIndex", 0)), f && this._addLazySet(w, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (T ? "visible" : "hidden"))) : w.zoom = 1, c = l; c && c._next;) c = c._next;
            y = new fe(t, "transform", 0, 0, null, 2), this._linkCSSP(y, null, c), y.setRatio = T && Se ? Ie : xe ? Fe : ze, y.data = this._transform || Me(t, r, !0), n.pop()
          }
          if (i) {
            for (; l;) {
              for (g = l._next, c = m; c && c.pr > l.pr;) c = c._next;
              (l._prev = c ? c._prev : d) ? l._prev._next = l: m = l, (l._next = c) ? c._prev = l : d = l, l = g
            }
            this._firstPT = m
          }
          return !0
        }, l.parse = function(t, e, i, n) {
          var a, o, l, u, p, c, f, m, d, g, v = t.style;
          for (a in e) c = e[a], o = h[a], o ? i = o.parse(t, c, a, this, i, n, e) : (p = Q(t, a, r) + "", d = "string" == typeof c, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || d && P.test(c) ? (d || (c = le(c), c = (c.length > 3 ? "rgba(" : "rgb(") + c.join(",") + ")"), i = me(v, a, p, c, !0, "transparent", i, 0, n)) : !d || -1 === c.indexOf(" ") && -1 === c.indexOf(",") ? (l = parseFloat(p), f = l || 0 === l ? p.substr((l + "").length) : "", ("" === p || "auto" === p) && ("width" === a || "height" === a ? (l = ie(t, a, r), f = "px") : "left" === a || "top" === a ? (l = H(t, a, r), f = "px") : (l = "opacity" !== a ? 0 : 1, f = "")), g = d && "=" === c.charAt(1), g ? (u = parseInt(c.charAt(0) + "1", 10), c = c.substr(2), u *= parseFloat(c), m = c.replace(T, "")) : (u = parseFloat(c), m = d ? c.replace(T, "") : ""), "" === m && (m = a in s ? s[a] : f), c = u || 0 === u ? (g ? u + l : u) + m : e[a], f !== m && "" !== m && (u || 0 === u) && l && (l = $(t, a, l, f), "%" === m ? (l /= $(t, a, 100, "%") / 100, e.strictUnits !== !0 && (p = l + "%")) : "em" === m ? l /= $(t, a, 1, "em") : "px" !== m && (u = $(t, a, u, m), m = "px"), g && (u || 0 === u) && (c = u + l + m)), g && (u += l), !l && 0 !== l || !u && 0 !== u ? void 0 !== v[a] && (c || "NaN" != c + "" && null != c) ? (i = new fe(v, a, u || l || 0, 0, i, -1, a, !1, 0, p, c), i.xs0 = "none" !== c || "display" !== a && -1 === a.indexOf("Style") ? c : p) : q("invalid " + a + " tween value: " + e[a]) : (i = new fe(v, a, l, u - l, i, 0, a, _ !== !1 && ("px" === m || "zIndex" === a), 0, p, c), i.xs0 = m)) : i = me(v, a, p, c, !0, null, i, 0, n)), n && i && !i.plugin && (i.plugin = n);
          return i
        }, l.setRatio = function(t) {
          var e, i, s, r = this._firstPT,
            n = 1e-6;
          if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
            if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
              for (; r;) {
                if (e = r.c * t + r.s, r.r ? e = Math.round(e) : n > e && e > -n && (e = 0), r.type)
                  if (1 === r.type)
                    if (s = r.l, 2 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                    else if (3 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                else if (4 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                else if (5 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                else {
                  for (i = r.xs0 + e + r.xs1, s = 1; r.l > s; s++) i += r["xn" + s] + r["xs" + (s + 1)];
                  r.t[r.p] = i
                } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                else r.t[r.p] = e + r.xs0;
                r = r._next
              } else
                for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
            else
              for (; r;) 2 !== r.type ? r.t[r.p] = r.e : r.setRatio(t), r = r._next
        }, l._enableTransforms = function(t) {
          this._transform = this._transform || Me(this._target, r, !0), this._transformType = this._transform.svg && Te || !t && 3 !== this._transformType ? 2 : 3
        };
        var Ue = function() {
          this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
        };
        l._addLazySet = function(t, e, i) {
          var s = this._firstPT = new fe(t, e, 0, 0, this._firstPT, 2);
          s.e = i, s.setRatio = Ue, s.data = this
        }, l._linkCSSP = function(t, e, i, s) {
          return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, s = !0), i ? i._next = t : s || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
        }, l._kill = function(e) {
          var i, s, r, n = e;
          if (e.autoAlpha || e.alpha) {
            n = {};
            for (s in e) n[s] = e[s];
            n.opacity = 1, n.autoAlpha && (n.visibility = 1)
          }
          return e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), t.prototype._kill.call(this, n)
        };
        var Ye = function(t, e, i) {
          var s, r, n, a;
          if (t.slice)
            for (r = t.length; --r > -1;) Ye(t[r], e, i);
          else
            for (s = t.childNodes, r = s.length; --r > -1;) n = s[r], a = n.type, n.style && (e.push(K(n)), i && i.push(n)), 1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || Ye(n, e, i)
        };
        return a.cascadeTo = function(t, i, s) {
          var r, n, a, o = e.to(t, i, s),
            h = [o],
            l = [],
            _ = [],
            u = [],
            p = e._internals.reservedProps;
          for (t = o._targets || o.target, Ye(t, l, u), o.render(i, !0), Ye(t, _), o.render(0, !0), o._enabled(!0), r = u.length; --r > -1;)
            if (n = J(u[r], l[r], _[r]), n.firstMPT) {
              n = n.difs;
              for (a in s) p[a] && (n[a] = s[a]);
              h.push(e.to(u[r], i, n))
            }
          return h
        }, t.activate([a]), a
      }, !0),
      function() {
        var t = _gsScope._gsDefine.plugin({
            propName: "roundProps",
            priority: -1,
            API: 2,
            init: function(t, e, i) {
              return this._tween = i, !0
            }
          }),
          e = t.prototype;
        e._onInitAllProps = function() {
          for (var t, e, i, s = this._tween, r = s.vars.roundProps instanceof Array ? s.vars.roundProps : s.vars.roundProps.split(","), n = r.length, a = {}, o = s._propLookup.roundProps; --n > -1;) a[r[n]] = 1;
          for (n = r.length; --n > -1;)
            for (t = r[n], e = s._firstPT; e;) i = e._next, e.pg ? e.t._roundProps(a, !0) : e.n === t && (this._add(e.t, t, e.s, e.c), i && (i._prev = e._prev), e._prev ? e._prev._next = i : s._firstPT === e && (s._firstPT = i), e._next = e._prev = null, s._propLookup[t] = o), e = i;
          return !1
        }, e._add = function(t, e, i, s) {
          this._addTween(t, e, i, i + s, e, !0), this._overwriteProps.push(e)
        }
      }(), _gsScope._gsDefine.plugin({
        propName: "attr",
        API: 2,
        version: "0.3.3",
        init: function(t, e) {
          var i, s, r;
          if ("function" != typeof t.setAttribute) return !1;
          this._target = t, this._proxy = {}, this._start = {}, this._end = {};
          for (i in e) this._start[i] = this._proxy[i] = s = t.getAttribute(i), r = this._addTween(this._proxy, i, parseFloat(s), e[i], i), this._end[i] = r ? r.s + r.c : e[i], this._overwriteProps.push(i);
          return !0
        },
        set: function(t) {
          this._super.setRatio.call(this, t);
          for (var e, i = this._overwriteProps, s = i.length, r = 1 === t ? this._end : t ? this._proxy : this._start; --s > -1;) e = i[s], this._target.setAttribute(e, r[e] + "")
        }
      }), _gsScope._gsDefine.plugin({
        propName: "directionalRotation",
        version: "0.2.1",
        API: 2,
        init: function(t, e) {
          "object" != typeof e && (e = {
            rotation: e
          }), this.finals = {};
          var i, s, r, n, a, o, h = e.useRadians === !0 ? 2 * Math.PI : 360,
            l = 1e-6;
          for (i in e) "useRadians" !== i && (o = (e[i] + "").split("_"), s = o[0], r = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), n = this.finals[i] = "string" == typeof s && "=" === s.charAt(1) ? r + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0, a = n - r, o.length && (s = o.join("_"), -1 !== s.indexOf("short") && (a %= h, a !== a % (h / 2) && (a = 0 > a ? a + h : a - h)), -1 !== s.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * h) % h - (0 | a / h) * h : -1 !== s.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * h) % h - (0 | a / h) * h)), (a > l || -l > a) && (this._addTween(t, i, r, r + a, i), this._overwriteProps.push(i)));
          return !0
        },
        set: function(t) {
          var e;
          if (1 !== t) this._super.setRatio.call(this, t);
          else
            for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
        }
      })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
        var e, i, s, r = _gsScope.GreenSockGlobals || _gsScope,
          n = r.com.greensock,
          a = 2 * Math.PI,
          o = Math.PI / 2,
          h = n._class,
          l = function(e, i) {
            var s = h("easing." + e, function() {}, !0),
              r = s.prototype = new t;
            return r.constructor = s, r.getRatio = i, s
          },
          _ = t.register || function() {},
          u = function(t, e, i, s) {
            var r = h("easing." + t, {
              easeOut: new e,
              easeIn: new i,
              easeInOut: new s
            }, !0);
            return _(r, t), r
          },
          p = function(t, e, i) {
            this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
          },
          c = function(e, i) {
            var s = h("easing." + e, function(t) {
                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
              }, !0),
              r = s.prototype = new t;
            return r.constructor = s, r.getRatio = i, r.config = function(t) {
              return new s(t)
            }, s
          },
          f = u("Back", c("BackOut", function(t) {
            return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
          }), c("BackIn", function(t) {
            return t * t * ((this._p1 + 1) * t - this._p1)
          }), c("BackInOut", function(t) {
            return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
          })),
          m = h("easing.SlowMo", function(t, e, i) {
            e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
          }, !0),
          d = m.prototype = new t;
        return d.constructor = m, d.getRatio = function(t) {
          var e = t + (.5 - t) * this._p;
          return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
        }, m.ease = new m(.7, .7), d.config = m.config = function(t, e, i) {
          return new m(t, e, i)
        }, e = h("easing.SteppedEase", function(t) {
          t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
        }, !0), d = e.prototype = new t, d.constructor = e, d.getRatio = function(t) {
          return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
        }, d.config = e.config = function(t) {
          return new e(t)
        }, i = h("easing.RoughEase", function(e) {
          e = e || {};
          for (var i, s, r, n, a, o, h = e.taper || "none", l = [], _ = 0, u = 0 | (e.points || 20), c = u, f = e.randomize !== !1, m = e.clamp === !0, d = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --c > -1;) i = f ? Math.random() : 1 / u * c, s = d ? d.getRatio(i) : i, "none" === h ? r = g : "out" === h ? (n = 1 - i, r = n * n * g) : "in" === h ? r = i * i * g : .5 > i ? (n = 2 * i, r = .5 * n * n * g) : (n = 2 * (1 - i), r = .5 * n * n * g), f ? s += Math.random() * r - .5 * r : c % 2 ? s += .5 * r : s -= .5 * r, m && (s > 1 ? s = 1 : 0 > s && (s = 0)), l[_++] = {
            x: i,
            y: s
          };
          for (l.sort(function(t, e) {
              return t.x - e.x
            }), o = new p(1, 1, null), c = u; --c > -1;) a = l[c], o = new p(a.x, a.y, o);
          this._prev = new p(0, 0, 0 !== o.t ? o : o.next)
        }, !0), d = i.prototype = new t, d.constructor = i, d.getRatio = function(t) {
          var e = this._prev;
          if (t > e.t) {
            for (; e.next && t >= e.t;) e = e.next;
            e = e.prev
          } else
            for (; e.prev && e.t >= t;) e = e.prev;
          return this._prev = e, e.v + (t - e.t) / e.gap * e.c
        }, d.config = function(t) {
          return new i(t)
        }, i.ease = new i, u("Bounce", l("BounceOut", function(t) {
          return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }), l("BounceIn", function(t) {
          return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        }), l("BounceInOut", function(t) {
          var e = .5 > t;
          return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
        })), u("Circ", l("CircOut", function(t) {
          return Math.sqrt(1 - (t -= 1) * t)
        }), l("CircIn", function(t) {
          return -(Math.sqrt(1 - t * t) - 1)
        }), l("CircInOut", function(t) {
          return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        })), s = function(e, i, s) {
          var r = h("easing." + e, function(t, e) {
              this._p1 = t || 1, this._p2 = e || s, this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0)
            }, !0),
            n = r.prototype = new t;
          return n.constructor = r, n.getRatio = i, n.config = function(t, e) {
            return new r(t, e)
          }, r
        }, u("Elastic", s("ElasticOut", function(t) {
          return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * a / this._p2) + 1
        }, .3), s("ElasticIn", function(t) {
          return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2))
        }, .3), s("ElasticInOut", function(t) {
          return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) + 1
        }, .45)), u("Expo", l("ExpoOut", function(t) {
          return 1 - Math.pow(2, -10 * t)
        }), l("ExpoIn", function(t) {
          return Math.pow(2, 10 * (t - 1)) - .001
        }), l("ExpoInOut", function(t) {
          return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        })), u("Sine", l("SineOut", function(t) {
          return Math.sin(t * o)
        }), l("SineIn", function(t) {
          return -Math.cos(t * o) + 1
        }), l("SineInOut", function(t) {
          return -.5 * (Math.cos(Math.PI * t) - 1)
        })), h("easing.EaseLookup", {
          find: function(e) {
            return t.map[e]
          }
        }, !0), _(r.SlowMo, "SlowMo", "ease,"), _(i, "RoughEase", "ease,"), _(e, "SteppedEase", "ease,"), f
      }, !0)
  }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
  function(t, e) {
    "use strict";
    var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
    if (!i.TweenLite) {
      var s, r, n, a, o, h = function(t) {
          var e, s = t.split("."),
            r = i;
          for (e = 0; s.length > e; e++) r[s[e]] = r = r[s[e]] || {};
          return r
        },
        l = h("com.greensock"),
        _ = 1e-10,
        u = function(t) {
          var e, i = [],
            s = t.length;
          for (e = 0; e !== s; i.push(t[e++]));
          return i
        },
        p = function() {},
        c = function() {
          var t = Object.prototype.toString,
            e = t.call([]);
          return function(i) {
            return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
          }
        }(),
        f = {},
        m = function(s, r, n, a) {
          this.sc = f[s] ? f[s].sc : [], f[s] = this, this.gsClass = null, this.func = n;
          var o = [];
          this.check = function(l) {
            for (var _, u, p, c, d = r.length, g = d; --d > -1;)(_ = f[r[d]] || new m(r[d], [])).gsClass ? (o[d] = _.gsClass, g--) : l && _.sc.push(this);
            if (0 === g && n)
              for (u = ("com.greensock." + s).split("."), p = u.pop(), c = h(u.join("."))[p] = this.gsClass = n.apply(n, o), a && (i[p] = c, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + s.split(".").pop(), [], function() {
                  return c
                }) : s === e && "undefined" != typeof module && module.exports && (module.exports = c)), d = 0; this.sc.length > d; d++) this.sc[d].check()
          }, this.check(!0)
        },
        d = t._gsDefine = function(t, e, i, s) {
          return new m(t, e, i, s)
        },
        g = l._class = function(t, e, i) {
          return e = e || function() {}, d(t, [], function() {
            return e
          }, i), e
        };
      d.globals = i;
      var v = [0, 0, 1, 1],
        y = [],
        T = g("easing.Ease", function(t, e, i, s) {
          this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? v.concat(e) : v
        }, !0),
        w = T.map = {},
        x = T.register = function(t, e, i, s) {
          for (var r, n, a, o, h = e.split(","), _ = h.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --_ > -1;)
            for (n = h[_], r = s ? g("easing." + n, null, !0) : l.easing[n] || {}, a = u.length; --a > -1;) o = u[a], w[n + "." + o] = w[o + n] = r[o] = t.getRatio ? t : t[o] || new t
        };
      for (n = T.prototype, n._calcEnd = !1, n.getRatio = function(t) {
          if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
          var e = this._type,
            i = this._power,
            s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
          return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2
        }, s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], r = s.length; --r > -1;) n = s[r] + ",Power" + r, x(new T(null, null, 1, r), n, "easeOut", !0), x(new T(null, null, 2, r), n, "easeIn" + (0 === r ? ",easeNone" : "")), x(new T(null, null, 3, r), n, "easeInOut");
      w.linear = l.easing.Linear.easeIn, w.swing = l.easing.Quad.easeInOut;
      var b = g("events.EventDispatcher", function(t) {
        this._listeners = {}, this._eventTarget = t || this
      });
      n = b.prototype, n.addEventListener = function(t, e, i, s, r) {
        r = r || 0;
        var n, h, l = this._listeners[t],
          _ = 0;
        for (null == l && (this._listeners[t] = l = []), h = l.length; --h > -1;) n = l[h], n.c === e && n.s === i ? l.splice(h, 1) : 0 === _ && r > n.pr && (_ = h + 1);
        l.splice(_, 0, {
          c: e,
          s: i,
          up: s,
          pr: r
        }), this !== a || o || a.wake()
      }, n.removeEventListener = function(t, e) {
        var i, s = this._listeners[t];
        if (s)
          for (i = s.length; --i > -1;)
            if (s[i].c === e) return s.splice(i, 1), void 0
      }, n.dispatchEvent = function(t) {
        var e, i, s, r = this._listeners[t];
        if (r)
          for (e = r.length, i = this._eventTarget; --e > -1;) s = r[e], s && (s.up ? s.c.call(s.s || i, {
            type: t,
            target: i
          }) : s.c.call(s.s || i))
      };
      var P = t.requestAnimationFrame,
        S = t.cancelAnimationFrame,
        k = Date.now || function() {
          return (new Date).getTime()
        },
        R = k();
      for (s = ["ms", "moz", "webkit", "o"], r = s.length; --r > -1 && !P;) P = t[s[r] + "RequestAnimationFrame"], S = t[s[r] + "CancelAnimationFrame"] || t[s[r] + "CancelRequestAnimationFrame"];
      g("Ticker", function(t, e) {
        var i, s, r, n, h, l = this,
          u = k(),
          c = e !== !1 && P,
          f = 500,
          m = 33,
          d = "tick",
          g = function(t) {
            var e, a, o = k() - R;
            o > f && (u += o - m), R += o, l.time = (R - u) / 1e3, e = l.time - h, (!i || e > 0 || t === !0) && (l.frame++, h += e + (e >= n ? .004 : n - e), a = !0), t !== !0 && (r = s(g)), a && l.dispatchEvent(d)
          };
        b.call(l), l.time = l.frame = 0, l.tick = function() {
          g(!0)
        }, l.lagSmoothing = function(t, e) {
          f = t || 1 / _, m = Math.min(e, f, 0)
        }, l.sleep = function() {
          null != r && (c && S ? S(r) : clearTimeout(r), s = p, r = null, l === a && (o = !1))
        }, l.wake = function() {
          null !== r ? l.sleep() : l.frame > 10 && (R = k() - f + 5), s = 0 === i ? p : c && P ? P : function(t) {
            return setTimeout(t, 0 | 1e3 * (h - l.time) + 1)
          }, l === a && (o = !0), g(2)
        }, l.fps = function(t) {
          return arguments.length ? (i = t, n = 1 / (i || 60), h = this.time + n, l.wake(), void 0) : i
        }, l.useRAF = function(t) {
          return arguments.length ? (l.sleep(), c = t, l.fps(i), void 0) : c
        }, l.fps(t), setTimeout(function() {
          c && (!r || 5 > l.frame) && l.useRAF(!1)
        }, 1500)
      }), n = l.Ticker.prototype = new l.events.EventDispatcher, n.constructor = l.Ticker;
      var A = g("core.Animation", function(t, e) {
        if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, j) {
          o || a.wake();
          var i = this.vars.useFrames ? B : j;
          i.add(this, i._time), this.vars.paused && this.paused(!0)
        }
      });
      a = A.ticker = new l.Ticker, n = A.prototype, n._dirty = n._gc = n._initted = n._paused = !1, n._totalTime = n._time = 0, n._rawPrevTime = -1, n._next = n._last = n._onUpdate = n._timeline = n.timeline = null, n._paused = !1;
      var C = function() {
        o && k() - R > 2e3 && a.wake(), setTimeout(C, 2e3)
      };
      C(), n.play = function(t, e) {
        return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
      }, n.pause = function(t, e) {
        return null != t && this.seek(t, e), this.paused(!0)
      }, n.resume = function(t, e) {
        return null != t && this.seek(t, e), this.paused(!1)
      }, n.seek = function(t, e) {
        return this.totalTime(Number(t), e !== !1)
      }, n.restart = function(t, e) {
        return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
      }, n.reverse = function(t, e) {
        return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
      }, n.render = function() {}, n.invalidate = function() {
        return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
      }, n.isActive = function() {
        var t, e = this._timeline,
          i = this._startTime;
        return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
      }, n._enabled = function(t, e) {
        return o || a.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
      }, n._kill = function() {
        return this._enabled(!1, !1)
      }, n.kill = function(t, e) {
        return this._kill(t, e), this
      }, n._uncache = function(t) {
        for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
        return this
      }, n._swapSelfInParams = function(t) {
        for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
        return i
      }, n.eventCallback = function(t, e, i, s) {
        if ("on" === (t || "").substr(0, 2)) {
          var r = this.vars;
          if (1 === arguments.length) return r[t];
          null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = c(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = s), "onUpdate" === t && (this._onUpdate = e)
        }
        return this
      }, n.delay = function(t) {
        return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
      }, n.duration = function(t) {
        return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
      }, n.totalDuration = function(t) {
        return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
      }, n.time = function(t, e) {
        return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
      }, n.totalTime = function(t, e, i) {
        if (o || a.wake(), !arguments.length) return this._totalTime;
        if (this._timeline) {
          if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
            this._dirty && this.totalDuration();
            var s = this._totalDuration,
              r = this._timeline;
            if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? s - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
              for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
          }
          this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), I.length && q())
        }
        return this
      }, n.progress = n.totalProgress = function(t, e) {
        return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
      }, n.startTime = function(t) {
        return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
      }, n.endTime = function(t) {
        return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
      }, n.timeScale = function(t) {
        if (!arguments.length) return this._timeScale;
        if (t = t || _, this._timeline && this._timeline.smoothChildTiming) {
          var e = this._pauseTime,
            i = e || 0 === e ? e : this._timeline.totalTime();
          this._startTime = i - (i - this._startTime) * this._timeScale / t
        }
        return this._timeScale = t, this._uncache(!1)
      }, n.reversed = function(t) {
        return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
      }, n.paused = function(t) {
        if (!arguments.length) return this._paused;
        if (t != this._paused && this._timeline) {
          o || t || a.wake();
          var e = this._timeline,
            i = e.rawTime(),
            s = i - this._pauseTime;
          !t && e.smoothChildTiming && (this._startTime += s, this._uncache(!1)), this._pauseTime = t ? i : null, this._paused = t, this._active = this.isActive(), !t && 0 !== s && this._initted && this.duration() && this.render(e.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0)
        }
        return this._gc && !t && this._enabled(!0, !1), this
      };
      var O = g("core.SimpleTimeline", function(t) {
        A.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
      });
      n = O.prototype = new A, n.constructor = O, n.kill()._gc = !1, n._first = n._last = n._recent = null, n._sortChildren = !1, n.add = n.insert = function(t, e) {
        var i, s;
        if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
          for (s = t._startTime; i && i._startTime > s;) i = i._prev;
        return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), this
      }, n._remove = function(t, e) {
        return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
      }, n.render = function(t, e, i) {
        var s, r = this._first;
        for (this._totalTime = this._time = this._rawPrevTime = t; r;) s = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = s
      }, n.rawTime = function() {
        return o || a.wake(), this._totalTime
      };
      var D = g("TweenLite", function(e, i, s) {
          if (A.call(this, i, s), this.render = D.prototype.render, null == e) throw "Cannot tween a null target.";
          this.target = e = "string" != typeof e ? e : D.selector(e) || e;
          var r, n, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
            h = this.vars.overwrite;
          if (this._overwrite = h = null == h ? Y[D.defaultOverwrite] : "number" == typeof h ? h >> 0 : Y[h], (o || e instanceof Array || e.push && c(e)) && "number" != typeof e[0])
            for (this._targets = a = u(e), this._propLookup = [], this._siblings = [], r = 0; a.length > r; r++) n = a[r], n ? "string" != typeof n ? n.length && n !== t && n[0] && (n[0] === t || n[0].nodeType && n[0].style && !n.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(u(n))) : (this._siblings[r] = V(n, this, !1), 1 === h && this._siblings[r].length > 1 && W(n, this, null, 1, this._siblings[r])) : (n = a[r--] = D.selector(n), "string" == typeof n && a.splice(r + 1, 1)) : a.splice(r--, 1);
          else this._propLookup = {}, this._siblings = V(e, this, !1), 1 === h && this._siblings.length > 1 && W(e, this, null, 1, this._siblings);
          (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -_, this.render(-this._delay))
        }, !0),
        M = function(e) {
          return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
        },
        z = function(t, e) {
          var i, s = {};
          for (i in t) U[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!N[i] || N[i] && N[i]._autoCSS) || (s[i] = t[i], delete t[i]);
          t.css = s
        };
      n = D.prototype = new A, n.constructor = D, n.kill()._gc = !1, n.ratio = 0, n._firstPT = n._targets = n._overwrittenProps = n._startAt = null, n._notifyPluginsOfEnabled = n._lazy = !1, D.version = "1.15.1", D.defaultEase = n._ease = new T(null, null, 1, 1), D.defaultOverwrite = "auto", D.ticker = a, D.autoSleep = !0, D.lagSmoothing = function(t, e) {
        a.lagSmoothing(t, e)
      }, D.selector = t.$ || t.jQuery || function(e) {
        var i = t.$ || t.jQuery;
        return i ? (D.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
      };
      var I = [],
        F = {},
        E = D._internals = {
          isArray: c,
          isSelector: M,
          lazyTweens: I
        },
        N = D._plugins = {},
        L = E.tweenLookup = {},
        X = 0,
        U = E.reservedProps = {
          ease: 1,
          delay: 1,
          overwrite: 1,
          onComplete: 1,
          onCompleteParams: 1,
          onCompleteScope: 1,
          useFrames: 1,
          runBackwards: 1,
          startAt: 1,
          onUpdate: 1,
          onUpdateParams: 1,
          onUpdateScope: 1,
          onStart: 1,
          onStartParams: 1,
          onStartScope: 1,
          onReverseComplete: 1,
          onReverseCompleteParams: 1,
          onReverseCompleteScope: 1,
          onRepeat: 1,
          onRepeatParams: 1,
          onRepeatScope: 1,
          easeParams: 1,
          yoyo: 1,
          immediateRender: 1,
          repeat: 1,
          repeatDelay: 1,
          data: 1,
          paused: 1,
          reversed: 1,
          autoCSS: 1,
          lazy: 1,
          onOverwrite: 1
        },
        Y = {
          none: 0,
          all: 1,
          auto: 2,
          concurrent: 3,
          allOnStart: 4,
          preexisting: 5,
          "true": 1,
          "false": 0
        },
        B = A._rootFramesTimeline = new O,
        j = A._rootTimeline = new O,
        q = E.lazyRender = function() {
          var t, e = I.length;
          for (F = {}; --e > -1;) t = I[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
          I.length = 0
        };
      j._startTime = a.time, B._startTime = a.frame, j._active = B._active = !0, setTimeout(q, 1), A._updateRoot = D.render = function() {
        var t, e, i;
        if (I.length && q(), j.render((a.time - j._startTime) * j._timeScale, !1, !1), B.render((a.frame - B._startTime) * B._timeScale, !1, !1), I.length && q(), !(a.frame % 120)) {
          for (i in L) {
            for (e = L[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
            0 === e.length && delete L[i]
          }
          if (i = j._first, (!i || i._paused) && D.autoSleep && !B._first && 1 === a._listeners.tick.length) {
            for (; i && i._paused;) i = i._next;
            i || a.sleep()
          }
        }
      }, a.addEventListener("tick", A._updateRoot);
      var V = function(t, e, i) {
          var s, r, n = t._gsTweenID;
          if (L[n || (t._gsTweenID = n = "t" + X++)] || (L[n] = {
              target: t,
              tweens: []
            }), e && (s = L[n].tweens, s[r = s.length] = e, i))
            for (; --r > -1;) s[r] === e && s.splice(r, 1);
          return L[n].tweens
        },
        G = function(t, e, i, s) {
          var r, n, a = t.vars.onOverwrite;
          return a && (r = a(t, e, i, s)), a = D.onOverwrite, a && (n = a(t, e, i, s)), r !== !1 && n !== !1
        },
        W = function(t, e, i, s, r) {
          var n, a, o, h;
          if (1 === s || s >= 4) {
            for (h = r.length, n = 0; h > n; n++)
              if ((o = r[n]) !== e) o._gc || G(o, e) && o._enabled(!1, !1) && (a = !0);
              else if (5 === s) break;
            return a
          }
          var l, u = e._startTime + _,
            p = [],
            c = 0,
            f = 0 === e._duration;
          for (n = r.length; --n > -1;)(o = r[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (l = l || Z(e, 0, f), 0 === Z(o, l, f) && (p[c++] = o)) : u >= o._startTime && o._startTime + o.totalDuration() / o._timeScale > u && ((f || !o._initted) && 2e-10 >= u - o._startTime || (p[c++] = o)));
          for (n = c; --n > -1;)
            if (o = p[n], 2 === s && o._kill(i, t, e) && (a = !0), 2 !== s || !o._firstPT && o._initted) {
              if (2 !== s && !G(o, e)) continue;
              o._enabled(!1, !1) && (a = !0)
            }
          return a
        },
        Z = function(t, e, i) {
          for (var s = t._timeline, r = s._timeScale, n = t._startTime; s._timeline;) {
            if (n += s._startTime, r *= s._timeScale, s._paused) return -100;
            s = s._timeline
          }
          return n /= r, n > e ? n - e : i && n === e || !t._initted && 2 * _ > n - e ? _ : (n += t.totalDuration() / t._timeScale / r) > e + _ ? 0 : n - e - _
        };
      n._init = function() {
        var t, e, i, s, r, n = this.vars,
          a = this._overwrittenProps,
          o = this._duration,
          h = !!n.immediateRender,
          l = n.ease;
        if (n.startAt) {
          this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
          for (s in n.startAt) r[s] = n.startAt[s];
          if (r.overwrite = !1, r.immediateRender = !0, r.lazy = h && n.lazy !== !1, r.startAt = r.delay = null, this._startAt = D.to(this.target, 0, r), h)
            if (this._time > 0) this._startAt = null;
            else if (0 !== o) return
        } else if (n.runBackwards && 0 !== o)
          if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
          else {
            0 !== this._time && (h = !1), i = {};
            for (s in n) U[s] && "autoCSS" !== s || (i[s] = n[s]);
            if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && n.lazy !== !1, i.immediateRender = h, this._startAt = D.to(this.target, 0, i), h) {
              if (0 === this._time) return
            } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
          }
        if (this._ease = l = l ? l instanceof T ? l : "function" == typeof l ? new T(l, n.easeParams) : w[l] || D.defaultEase : D.defaultEase, n.easeParams instanceof Array && l.config && (this._ease = l.config.apply(l, n.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
          for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null) && (e = !0);
        else e = this._initProps(this.target, this._propLookup, this._siblings, a);
        if (e && D._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), n.runBackwards)
          for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
        this._onUpdate = n.onUpdate, this._initted = !0
      }, n._initProps = function(e, i, s, r) {
        var n, a, o, h, l, _;
        if (null == e) return !1;
        F[e._gsTweenID] && q(), this.vars.css || e.style && e !== t && e.nodeType && N.css && this.vars.autoCSS !== !1 && z(this.vars, e);
        for (n in this.vars) {
          if (_ = this.vars[n], U[n]) _ && (_ instanceof Array || _.push && c(_)) && -1 !== _.join("").indexOf("{self}") && (this.vars[n] = _ = this._swapSelfInParams(_, this));
          else if (N[n] && (h = new N[n])._onInitTween(e, this.vars[n], this)) {
            for (this._firstPT = l = {
                _next: this._firstPT,
                t: h,
                p: "setRatio",
                s: 0,
                c: 1,
                f: !0,
                n: n,
                pg: !0,
                pr: h._priority
              }, a = h._overwriteProps.length; --a > -1;) i[h._overwriteProps[a]] = this._firstPT;
            (h._priority || h._onInitAllProps) && (o = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0)
          } else this._firstPT = i[n] = l = {
            _next: this._firstPT,
            t: e,
            p: n,
            f: "function" == typeof e[n],
            n: n,
            pg: !1,
            pr: 0
          }, l.s = l.f ? e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(e[n]), l.c = "string" == typeof _ && "=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * Number(_.substr(2)) : Number(_) - l.s || 0;
          l && l._next && (l._next._prev = l)
        }
        return r && this._kill(r, e) ? this._initProps(e, i, s, r) : this._overwrite > 1 && this._firstPT && s.length > 1 && W(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (F[e._gsTweenID] = !0), o)
      }, n.render = function(t, e, i) {
        var s, r, n, a, o = this._time,
          h = this._duration,
          l = this._rawPrevTime;
        if (t >= h) this._totalTime = this._time = h, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, r = "onComplete"), 0 === h && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > l || l === _ && "isPause" !== this.data) && l !== t && (i = !0, l > _ && (r = "onReverseComplete")), this._rawPrevTime = a = !e || t || l === t ? t : _);
        else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === h && l > 0 && l !== _) && (r = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === h && (this._initted || !this.vars.lazy || i) && (l >= 0 && (l !== _ || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !e || t || l === t ? t : _)), this._initted || (i = !0);
        else if (this._totalTime = this._time = t, this._easeType) {
          var u = t / h,
            p = this._easeType,
            c = this._easePower;
          (1 === p || 3 === p && u >= .5) && (u = 1 - u), 3 === p && (u *= 2), 1 === c ? u *= u : 2 === c ? u *= u * u : 3 === c ? u *= u * u * u : 4 === c && (u *= u * u * u * u), this.ratio = 1 === p ? 1 - u : 2 === p ? u : .5 > t / h ? u / 2 : 1 - u / 2
        } else this.ratio = this._ease.getRatio(t / h);
        if (this._time !== o || i) {
          if (!this._initted) {
            if (this._init(), !this._initted || this._gc) return;
            if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = l, I.push(this), this._lazy = [t, e], void 0;
            this._time && !s ? this.ratio = this._ease.getRatio(this._time / h) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
          }
          for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === h) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || y))), n = this._firstPT; n;) n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
          this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== o || s) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || y)), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || y), 0 === h && this._rawPrevTime === _ && a !== _ && (this._rawPrevTime = 0))
        }
      }, n._kill = function(t, e, i) {
        if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
        e = "string" != typeof e ? e || this._targets || this.target : D.selector(e) || e;
        var s, r, n, a, o, h, l, _, u;
        if ((c(e) || M(e)) && "number" != typeof e[0])
          for (s = e.length; --s > -1;) this._kill(t, e[s]) && (h = !0);
        else {
          if (this._targets) {
            for (s = this._targets.length; --s > -1;)
              if (e === this._targets[s]) {
                o = this._propLookup[s] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[s] = t ? this._overwrittenProps[s] || {} : "all";
                break
              }
          } else {
            if (e !== this.target) return !1;
            o = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
          }
          if (o) {
            if (l = t || o, _ = t !== r && "all" !== r && t !== o && ("object" != typeof t || !t._tempKill), i && (D.onOverwrite || this.vars.onOverwrite)) {
              for (n in l) o[n] && (u || (u = []), u.push(n));
              if (!G(this, i, e, u)) return !1
            }
            for (n in l)(a = o[n]) && (a.pg && a.t._kill(l) && (h = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[n]), _ && (r[n] = 1);
            !this._firstPT && this._initted && this._enabled(!1, !1)
          }
        }
        return h
      }, n.invalidate = function() {
        return this._notifyPluginsOfEnabled && D._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], A.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -_, this.render(-this._delay)), this
      }, n._enabled = function(t, e) {
        if (o || a.wake(), t && this._gc) {
          var i, s = this._targets;
          if (s)
            for (i = s.length; --i > -1;) this._siblings[i] = V(s[i], this, !0);
          else this._siblings = V(this.target, this, !0)
        }
        return A.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? D._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
      }, D.to = function(t, e, i) {
        return new D(t, e, i)
      }, D.from = function(t, e, i) {
        return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new D(t, e, i)
      }, D.fromTo = function(t, e, i, s) {
        return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new D(t, e, s)
      }, D.delayedCall = function(t, e, i, s, r) {
        return new D(e, 0, {
          delay: t,
          onComplete: e,
          onCompleteParams: i,
          onCompleteScope: s,
          onReverseComplete: e,
          onReverseCompleteParams: i,
          onReverseCompleteScope: s,
          immediateRender: !1,
          lazy: !1,
          useFrames: r,
          overwrite: 0
        })
      }, D.set = function(t, e) {
        return new D(t, 0, e)
      }, D.getTweensOf = function(t, e) {
        if (null == t) return [];
        t = "string" != typeof t ? t : D.selector(t) || t;
        var i, s, r, n;
        if ((c(t) || M(t)) && "number" != typeof t[0]) {
          for (i = t.length, s = []; --i > -1;) s = s.concat(D.getTweensOf(t[i], e));
          for (i = s.length; --i > -1;)
            for (n = s[i], r = i; --r > -1;) n === s[r] && s.splice(i, 1)
        } else
          for (s = V(t).concat(), i = s.length; --i > -1;)(s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
        return s
      }, D.killTweensOf = D.killDelayedCallsTo = function(t, e, i) {
        "object" == typeof e && (i = e, e = !1);
        for (var s = D.getTweensOf(t, e), r = s.length; --r > -1;) s[r]._kill(i, t)
      };
      var Q = g("plugins.TweenPlugin", function(t, e) {
        this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = Q.prototype
      }, !0);
      if (n = Q.prototype, Q.version = "1.10.1", Q.API = 2, n._firstPT = null, n._addTween = function(t, e, i, s, r, n) {
          var a, o;
          return null != s && (a = "number" == typeof s || "=" !== s.charAt(1) ? Number(s) - i : parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2))) ? (this._firstPT = o = {
            _next: this._firstPT,
            t: t,
            p: e,
            s: i,
            c: a,
            f: "function" == typeof t[e],
            n: r || e,
            r: n
          }, o._next && (o._next._prev = o), o) : void 0
        }, n.setRatio = function(t) {
          for (var e, i = this._firstPT, s = 1e-6; i;) e = i.c * t + i.s, i.r ? e = Math.round(e) : s > e && e > -s && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
        }, n._kill = function(t) {
          var e, i = this._overwriteProps,
            s = this._firstPT;
          if (null != t[this._propName]) this._overwriteProps = [];
          else
            for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
          for (; s;) null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
          return !1
        }, n._roundProps = function(t, e) {
          for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
        }, D._onPluginEvent = function(t, e) {
          var i, s, r, n, a, o = e._firstPT;
          if ("_onInitAllProps" === t) {
            for (; o;) {
              for (a = o._next, s = r; s && s.pr > o.pr;) s = s._next;
              (o._prev = s ? s._prev : n) ? o._prev._next = o: r = o, (o._next = s) ? s._prev = o : n = o, o = a
            }
            o = e._firstPT = r
          }
          for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
          return i
        }, Q.activate = function(t) {
          for (var e = t.length; --e > -1;) t[e].API === Q.API && (N[(new t[e])._propName] = t[e]);
          return !0
        }, d.plugin = function(t) {
          if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
          var e, i = t.propName,
            s = t.priority || 0,
            r = t.overwriteProps,
            n = {
              init: "_onInitTween",
              set: "setRatio",
              kill: "_kill",
              round: "_roundProps",
              initAll: "_onInitAllProps"
            },
            a = g("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
              Q.call(this, i, s), this._overwriteProps = r || []
            }, t.global === !0),
            o = a.prototype = new Q(i);
          o.constructor = a, a.API = t.API;
          for (e in n) "function" == typeof t[e] && (o[n[e]] = t[e]);
          return a.version = t.version, Q.activate([a]), a
        }, s = t._gsQueue) {
        for (r = 0; s.length > r; r++) s[r]();
        for (n in f) f[n].func || t.console.log("GSAP encountered missing dependency: com.greensock." + n)
      }
      o = !1
    }
  }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");

/* -- FILE: [javascripts/ScrollMagic.js]*/
/*!
 * ScrollMagic v2.0.5 (2015-04-29)
 * The javascript library for magical scroll interactions.
 * (c) 2015 Jan Paepke (@janpaepke)
 * Project Website: http://scrollmagic.io
 *
 * @version 2.0.5
 * @license Dual licensed under MIT license and GPL.
 * @author Jan Paepke - e-mail@janpaepke.de
 *
 * @file ScrollMagic main library.
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.ScrollMagic = factory();
  }
}(this, function() {
  "use strict";
  var ScrollMagic = function() {
    _util.log(2, '(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use \'new ScrollMagic.Controller()\' to create a new controller instance. Use \'new ScrollMagic.Scene()\' to instance a scene.');
  };
  ScrollMagic.version = "2.0.5";
  window.addEventListener("mousewheel", function() {});
  var PIN_SPACER_ATTRIBUTE = "data-scrollmagic-pin-spacer";
  ScrollMagic.Controller = function(options) {
    var
      NAMESPACE = 'ScrollMagic.Controller',
      SCROLL_DIRECTION_FORWARD = 'FORWARD',
      SCROLL_DIRECTION_REVERSE = 'REVERSE',
      SCROLL_DIRECTION_PAUSED = 'PAUSED',
      DEFAULT_OPTIONS = CONTROLLER_OPTIONS.defaults;
    var
      Controller = this,
      _options = _util.extend({}, DEFAULT_OPTIONS, options),
      _sceneObjects = [],
      _updateScenesOnNextCycle = false,
      _scrollPos = 0,
      _scrollDirection = SCROLL_DIRECTION_PAUSED,
      _isDocument = true,
      _viewPortSize = 0,
      _enabled = true,
      _updateTimeout, _refreshTimeout;
    var construct = function() {
      for (var key in _options) {
        if (!DEFAULT_OPTIONS.hasOwnProperty(key)) {
          log(2, "WARNING: Unknown option \"" + key + "\"");
          delete _options[key];
        }
      }
      _options.container = _util.get.elements(_options.container)[0];
      if (!_options.container) {
        log(1, "ERROR creating object " + NAMESPACE + ": No valid scroll container supplied");
        throw NAMESPACE + " init failed.";
      }
      _isDocument = _options.container === window || _options.container === document.body || !document.body.contains(_options.container);
      if (_isDocument) {
        _options.container = window;
      }
      _viewPortSize = getViewportSize();
      _options.container.addEventListener("resize", onChange);
      _options.container.addEventListener("scroll", onChange);
      _options.refreshInterval = parseInt(_options.refreshInterval) || DEFAULT_OPTIONS.refreshInterval;
      scheduleRefresh();
      log(3, "added new " + NAMESPACE + " controller (v" + ScrollMagic.version + ")");
    };
    var scheduleRefresh = function() {
      if (_options.refreshInterval > 0) {
        _refreshTimeout = window.setTimeout(refresh, _options.refreshInterval);
      }
    };
    var getScrollPos = function() {
      return _options.vertical ? _util.get.scrollTop(_options.container) : _util.get.scrollLeft(_options.container);
    };
    var getViewportSize = function() {
      return _options.vertical ? _util.get.height(_options.container) : _util.get.width(_options.container);
    };
    var setScrollPos = this._setScrollPos = function(pos) {
      if (_options.vertical) {
        if (_isDocument) {
          window.scrollTo(_util.get.scrollLeft(), pos);
        } else {
          _options.container.scrollTop = pos;
        }
      } else {
        if (_isDocument) {
          window.scrollTo(pos, _util.get.scrollTop());
        } else {
          _options.container.scrollLeft = pos;
        }
      }
    };
    var updateScenes = function() {
      if (_enabled && _updateScenesOnNextCycle) {
        var scenesToUpdate = _util.type.Array(_updateScenesOnNextCycle) ? _updateScenesOnNextCycle : _sceneObjects.slice(0);
        _updateScenesOnNextCycle = false;
        var oldScrollPos = _scrollPos;
        _scrollPos = Controller.scrollPos();
        var deltaScroll = _scrollPos - oldScrollPos;
        if (deltaScroll !== 0) {
          _scrollDirection = (deltaScroll > 0) ? SCROLL_DIRECTION_FORWARD : SCROLL_DIRECTION_REVERSE;
        }
        if (_scrollDirection === SCROLL_DIRECTION_REVERSE) {
          scenesToUpdate.reverse();
        }
        scenesToUpdate.forEach(function(scene, index) {
          log(3, "updating Scene " + (index + 1) + "/" + scenesToUpdate.length + " (" + _sceneObjects.length + " total)");
          scene.update(true);
        });
        if (scenesToUpdate.length === 0 && _options.loglevel >= 3) {
          log(3, "updating 0 Scenes (nothing added to controller)");
        }
      }
    };
    var debounceUpdate = function() {
      _updateTimeout = _util.rAF(updateScenes);
    };
    var onChange = function(e) {
      log(3, "event fired causing an update:", e.type);
      if (e.type == "resize") {
        _viewPortSize = getViewportSize();
        _scrollDirection = SCROLL_DIRECTION_PAUSED;
      }
      if (_updateScenesOnNextCycle !== true) {
        _updateScenesOnNextCycle = true;
        debounceUpdate();
      }
    };
    var refresh = function() {
      if (!_isDocument) {
        if (_viewPortSize != getViewportSize()) {
          var resizeEvent;
          try {
            resizeEvent = new Event('resize', {
              bubbles: false,
              cancelable: false
            });
          } catch (e) {
            resizeEvent = document.createEvent("Event");
            resizeEvent.initEvent("resize", false, false);
          }
          _options.container.dispatchEvent(resizeEvent);
        }
      }
      _sceneObjects.forEach(function(scene, index) {
        scene.refresh();
      });
      scheduleRefresh();
    };
    var log = this._log = function(loglevel, output) {
      if (_options.loglevel >= loglevel) {
        Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ") ->");
        _util.log.apply(window, arguments);
      }
    };
    this._options = _options;
    var sortScenes = function(ScenesArray) {
      if (ScenesArray.length <= 1) {
        return ScenesArray;
      } else {
        var scenes = ScenesArray.slice(0);
        scenes.sort(function(a, b) {
          return a.scrollOffset() > b.scrollOffset() ? 1 : -1;
        });
        return scenes;
      }
    };
    this.addScene = function(newScene) {
      if (_util.type.Array(newScene)) {
        newScene.forEach(function(scene, index) {
          Controller.addScene(scene);
        });
      } else if (newScene instanceof ScrollMagic.Scene) {
        if (newScene.controller() !== Controller) {
          newScene.addTo(Controller);
        } else if (_sceneObjects.indexOf(newScene) < 0) {
          _sceneObjects.push(newScene);
          _sceneObjects = sortScenes(_sceneObjects);
          newScene.on("shift.controller_sort", function() {
            _sceneObjects = sortScenes(_sceneObjects);
          });
          for (var key in _options.globalSceneOptions) {
            if (newScene[key]) {
              newScene[key].call(newScene, _options.globalSceneOptions[key]);
            }
          }
          log(3, "adding Scene (now " + _sceneObjects.length + " total)");
        }
      } else {
        log(1, "ERROR: invalid argument supplied for '.addScene()'");
      }
      return Controller;
    };
    this.removeScene = function(Scene) {
      if (_util.type.Array(Scene)) {
        Scene.forEach(function(scene, index) {
          Controller.removeScene(scene);
        });
      } else {
        var index = _sceneObjects.indexOf(Scene);
        if (index > -1) {
          Scene.off("shift.controller_sort");
          _sceneObjects.splice(index, 1);
          log(3, "removing Scene (now " + _sceneObjects.length + " left)");
          Scene.remove();
        }
      }
      return Controller;
    };
    this.updateScene = function(Scene, immediately) {
      if (_util.type.Array(Scene)) {
        Scene.forEach(function(scene, index) {
          Controller.updateScene(scene, immediately);
        });
      } else {
        if (immediately) {
          Scene.update(true);
        } else if (_updateScenesOnNextCycle !== true && Scene instanceof ScrollMagic.Scene) {
          _updateScenesOnNextCycle = _updateScenesOnNextCycle || [];
          if (_updateScenesOnNextCycle.indexOf(Scene) == -1) {
            _updateScenesOnNextCycle.push(Scene);
          }
          _updateScenesOnNextCycle = sortScenes(_updateScenesOnNextCycle);
          debounceUpdate();
        }
      }
      return Controller;
    };
    this.update = function(immediately) {
      onChange({
        type: "resize"
      });
      if (immediately) {
        updateScenes();
      }
      return Controller;
    };
    this.scrollTo = function(scrollTarget, additionalParameter) {
      if (_util.type.Number(scrollTarget)) {
        setScrollPos.call(_options.container, scrollTarget, additionalParameter);
      } else if (scrollTarget instanceof ScrollMagic.Scene) {
        if (scrollTarget.controller() === Controller) {
          Controller.scrollTo(scrollTarget.scrollOffset(), additionalParameter);
        } else {
          log(2, "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.", scrollTarget);
        }
      } else if (_util.type.Function(scrollTarget)) {
        setScrollPos = scrollTarget;
      } else {
        var elem = _util.get.elements(scrollTarget)[0];
        if (elem) {
          while (elem.parentNode.hasAttribute(PIN_SPACER_ATTRIBUTE)) {
            elem = elem.parentNode;
          }
          var
            param = _options.vertical ? "top" : "left",
            containerOffset = _util.get.offset(_options.container),
            elementOffset = _util.get.offset(elem);
          if (!_isDocument) {
            containerOffset[param] -= Controller.scrollPos();
          }
          Controller.scrollTo(elementOffset[param] - containerOffset[param], additionalParameter);
        } else {
          log(2, "scrollTo(): The supplied argument is invalid. Scroll cancelled.", scrollTarget);
        }
      }
      return Controller;
    };
    this.scrollPos = function(scrollPosMethod) {
      if (!arguments.length) {
        return getScrollPos.call(Controller);
      } else {
        if (_util.type.Function(scrollPosMethod)) {
          getScrollPos = scrollPosMethod;
        } else {
          log(2, "Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'.");
        }
      }
      return Controller;
    };
    this.info = function(about) {
      var values = {
        size: _viewPortSize,
        vertical: _options.vertical,
        scrollPos: _scrollPos,
        scrollDirection: _scrollDirection,
        container: _options.container,
        isDocument: _isDocument
      };
      if (!arguments.length) {
        return values;
      } else if (values[about] !== undefined) {
        return values[about];
      } else {
        log(1, "ERROR: option \"" + about + "\" is not available");
        return;
      }
    };
    this.loglevel = function(newLoglevel) {
      if (!arguments.length) {
        return _options.loglevel;
      } else if (_options.loglevel != newLoglevel) {
        _options.loglevel = newLoglevel;
      }
      return Controller;
    };
    this.enabled = function(newState) {
      if (!arguments.length) {
        return _enabled;
      } else if (_enabled != newState) {
        _enabled = !!newState;
        Controller.updateScene(_sceneObjects, true);
      }
      return Controller;
    };
    this.destroy = function(resetScenes) {
      window.clearTimeout(_refreshTimeout);
      var i = _sceneObjects.length;
      while (i--) {
        _sceneObjects[i].destroy(resetScenes);
      }
      _options.container.removeEventListener("resize", onChange);
      _options.container.removeEventListener("scroll", onChange);
      _util.cAF(_updateTimeout);
      log(3, "destroyed " + NAMESPACE + " (reset: " + (resetScenes ? "true" : "false") + ")");
      return null;
    };
    construct();
    return Controller;
  };
  var CONTROLLER_OPTIONS = {
    defaults: {
      container: window,
      vertical: true,
      globalSceneOptions: {},
      loglevel: 2,
      refreshInterval: 100
    }
  };
  ScrollMagic.Controller.addOption = function(name, defaultValue) {
    CONTROLLER_OPTIONS.defaults[name] = defaultValue;
  };
  ScrollMagic.Controller.extend = function(extension) {
    var oldClass = this;
    ScrollMagic.Controller = function() {
      oldClass.apply(this, arguments);
      this.$super = _util.extend({}, this);
      return extension.apply(this, arguments) || this;
    };
    _util.extend(ScrollMagic.Controller, oldClass);
    ScrollMagic.Controller.prototype = oldClass.prototype;
    ScrollMagic.Controller.prototype.constructor = ScrollMagic.Controller;
  };
  ScrollMagic.Scene = function(options) {
    var
      NAMESPACE = 'ScrollMagic.Scene',
      SCENE_STATE_BEFORE = 'BEFORE',
      SCENE_STATE_DURING = 'DURING',
      SCENE_STATE_AFTER = 'AFTER',
      DEFAULT_OPTIONS = SCENE_OPTIONS.defaults;
    var
      Scene = this,
      _options = _util.extend({}, DEFAULT_OPTIONS, options),
      _state = SCENE_STATE_BEFORE,
      _progress = 0,
      _scrollOffset = {
        start: 0,
        end: 0
      },
      _triggerPos = 0,
      _enabled = true,
      _durationUpdateMethod, _controller;
    var construct = function() {
      for (var key in _options) {
        if (!DEFAULT_OPTIONS.hasOwnProperty(key)) {
          log(2, "WARNING: Unknown option \"" + key + "\"");
          delete _options[key];
        }
      }
      for (var optionName in DEFAULT_OPTIONS) {
        addSceneOption(optionName);
      }
      validateOption();
    };
    var _listeners = {};
    this.on = function(names, callback) {
      if (_util.type.Function(callback)) {
        names = names.trim().split(' ');
        names.forEach(function(fullname) {
          var
            nameparts = fullname.split('.'),
            eventname = nameparts[0],
            namespace = nameparts[1];
          if (eventname != "*") {
            if (!_listeners[eventname]) {
              _listeners[eventname] = [];
            }
            _listeners[eventname].push({
              namespace: namespace || '',
              callback: callback
            });
          }
        });
      } else {
        log(1, "ERROR when calling '.on()': Supplied callback for '" + names + "' is not a valid function!");
      }
      return Scene;
    };
    this.off = function(names, callback) {
      if (!names) {
        log(1, "ERROR: Invalid event name supplied.");
        return Scene;
      }
      names = names.trim().split(' ');
      names.forEach(function(fullname, key) {
        var
          nameparts = fullname.split('.'),
          eventname = nameparts[0],
          namespace = nameparts[1] || '',
          removeList = eventname === '*' ? Object.keys(_listeners) : [eventname];
        removeList.forEach(function(remove) {
          var
            list = _listeners[remove] || [],
            i = list.length;
          while (i--) {
            var listener = list[i];
            if (listener && (namespace === listener.namespace || namespace === '*') && (!callback || callback == listener.callback)) {
              list.splice(i, 1);
            }
          }
          if (!list.length) {
            delete _listeners[remove];
          }
        });
      });
      return Scene;
    };
    this.trigger = function(name, vars) {
      if (name) {
        var
          nameparts = name.trim().split('.'),
          eventname = nameparts[0],
          namespace = nameparts[1],
          listeners = _listeners[eventname];
        log(3, 'event fired:', eventname, vars ? "->" : '', vars || '');
        if (listeners) {
          listeners.forEach(function(listener, key) {
            if (!namespace || namespace === listener.namespace) {
              listener.callback.call(Scene, new ScrollMagic.Event(eventname, listener.namespace, Scene, vars));
            }
          });
        }
      } else {
        log(1, "ERROR: Invalid event name supplied.");
      }
      return Scene;
    };
    Scene.on("change.internal", function(e) {
      if (e.what !== "loglevel" && e.what !== "tweenChanges") {
        if (e.what === "triggerElement") {
          updateTriggerElementPosition();
        } else if (e.what === "reverse") {
          Scene.update();
        }
      }
    }).on("shift.internal", function(e) {
      updateScrollOffset();
      Scene.update();
    });
    var log = this._log = function(loglevel, output) {
      if (_options.loglevel >= loglevel) {
        Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ") ->");
        _util.log.apply(window, arguments);
      }
    };
    this.addTo = function(controller) {
      if (!(controller instanceof ScrollMagic.Controller)) {
        log(1, "ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller");
      } else if (_controller != controller) {
        if (_controller) {
          _controller.removeScene(Scene);
        }
        _controller = controller;
        validateOption();
        updateDuration(true);
        updateTriggerElementPosition(true);
        updateScrollOffset();
        _controller.info("container").addEventListener('resize', onContainerResize);
        controller.addScene(Scene);
        Scene.trigger("add", {
          controller: _controller
        });
        log(3, "added " + NAMESPACE + " to controller");
        Scene.update();
      }
      return Scene;
    };
    this.enabled = function(newState) {
      if (!arguments.length) {
        return _enabled;
      } else if (_enabled != newState) {
        _enabled = !!newState;
        Scene.update(true);
      }
      return Scene;
    };
    this.remove = function() {
      if (_controller) {
        _controller.info("container").removeEventListener('resize', onContainerResize);
        var tmpParent = _controller;
        _controller = undefined;
        tmpParent.removeScene(Scene);
        Scene.trigger("remove");
        log(3, "removed " + NAMESPACE + " from controller");
      }
      return Scene;
    };
    this.destroy = function(reset) {
      Scene.trigger("destroy", {
        reset: reset
      });
      Scene.remove();
      Scene.off("*.*");
      log(3, "destroyed " + NAMESPACE + " (reset: " + (reset ? "true" : "false") + ")");
      return null;
    };
    this.update = function(immediately) {
      if (_controller) {
        if (immediately) {
          if (_controller.enabled() && _enabled) {
            var
              scrollPos = _controller.info("scrollPos"),
              newProgress;
            if (_options.duration > 0) {
              newProgress = (scrollPos - _scrollOffset.start) / (_scrollOffset.end - _scrollOffset.start);
            } else {
              newProgress = scrollPos >= _scrollOffset.start ? 1 : 0;
            }
            Scene.trigger("update", {
              startPos: _scrollOffset.start,
              endPos: _scrollOffset.end,
              scrollPos: scrollPos
            });
            Scene.progress(newProgress);
          } else if (_pin && _state === SCENE_STATE_DURING) {
            updatePinState(true);
          }
        } else {
          _controller.updateScene(Scene, false);
        }
      }
      return Scene;
    };
    this.refresh = function() {
      updateDuration();
      updateTriggerElementPosition();
      return Scene;
    };
    this.progress = function(progress) {
      if (!arguments.length) {
        return _progress;
      } else {
        var
          doUpdate = false,
          oldState = _state,
          scrollDirection = _controller ? _controller.info("scrollDirection") : 'PAUSED',
          reverseOrForward = _options.reverse || progress >= _progress;
        if (_options.duration === 0) {
          doUpdate = _progress != progress;
          _progress = progress < 1 && reverseOrForward ? 0 : 1;
          _state = _progress === 0 ? SCENE_STATE_BEFORE : SCENE_STATE_DURING;
        } else {
          if (progress < 0 && _state !== SCENE_STATE_BEFORE && reverseOrForward) {
            _progress = 0;
            _state = SCENE_STATE_BEFORE;
            doUpdate = true;
          } else if (progress >= 0 && progress < 1 && reverseOrForward) {
            _progress = progress;
            _state = SCENE_STATE_DURING;
            doUpdate = true;
          } else if (progress >= 1 && _state !== SCENE_STATE_AFTER) {
            _progress = 1;
            _state = SCENE_STATE_AFTER;
            doUpdate = true;
          } else if (_state === SCENE_STATE_DURING && !reverseOrForward) {
            updatePinState();
          }
        }
        if (doUpdate) {
          var
            eventVars = {
              progress: _progress,
              state: _state,
              scrollDirection: scrollDirection
            },
            stateChanged = _state != oldState;
          var trigger = function(eventName) {
            Scene.trigger(eventName, eventVars);
          };
          if (stateChanged) {
            if (oldState !== SCENE_STATE_DURING) {
              trigger("enter");
              trigger(oldState === SCENE_STATE_BEFORE ? "start" : "end");
            }
          }
          trigger("progress");
          if (stateChanged) {
            if (_state !== SCENE_STATE_DURING) {
              trigger(_state === SCENE_STATE_BEFORE ? "start" : "end");
              trigger("leave");
            }
          }
        }
        return Scene;
      }
    };
    var updateScrollOffset = function() {
      _scrollOffset = {
        start: _triggerPos + _options.offset
      };
      if (_controller && _options.triggerElement) {
        _scrollOffset.start -= _controller.info("size") * _options.triggerHook;
      }
      _scrollOffset.end = _scrollOffset.start + _options.duration;
    };
    var updateDuration = function(suppressEvents) {
      if (_durationUpdateMethod) {
        var varname = "duration";
        if (changeOption(varname, _durationUpdateMethod.call(Scene)) && !suppressEvents) {
          Scene.trigger("change", {
            what: varname,
            newval: _options[varname]
          });
          Scene.trigger("shift", {
            reason: varname
          });
        }
      }
    };
    var updateTriggerElementPosition = function(suppressEvents) {
      var
        elementPos = 0,
        telem = _options.triggerElement;
      if (_controller && telem) {
        var
          controllerInfo = _controller.info(),
          containerOffset = _util.get.offset(controllerInfo.container),
          param = controllerInfo.vertical ? "top" : "left";
        while (telem.parentNode.hasAttribute(PIN_SPACER_ATTRIBUTE)) {
          telem = telem.parentNode;
        }
        var elementOffset = _util.get.offset(telem);
        if (!controllerInfo.isDocument) {
          containerOffset[param] -= _controller.scrollPos();
        }
        elementPos = elementOffset[param] - containerOffset[param];
      }
      var changed = elementPos != _triggerPos;
      _triggerPos = elementPos;
      if (changed && !suppressEvents) {
        Scene.trigger("shift", {
          reason: "triggerElementPosition"
        });
      }
    };
    var onContainerResize = function(e) {
      if (_options.triggerHook > 0) {
        Scene.trigger("shift", {
          reason: "containerResize"
        });
      }
    };
    var _validate = _util.extend(SCENE_OPTIONS.validate, {
      duration: function(val) {
        if (_util.type.String(val) && val.match(/^(\.|\d)*\d+%$/)) {
          var perc = parseFloat(val) / 100;
          val = function() {
            return _controller ? _controller.info("size") * perc : 0;
          };
        }
        if (_util.type.Function(val)) {
          _durationUpdateMethod = val;
          try {
            val = parseFloat(_durationUpdateMethod());
          } catch (e) {
            val = -1;
          }
        }
        val = parseFloat(val);
        if (!_util.type.Number(val) || val < 0) {
          if (_durationUpdateMethod) {
            _durationUpdateMethod = undefined;
            throw ["Invalid return value of supplied function for option \"duration\":", val];
          } else {
            throw ["Invalid value for option \"duration\":", val];
          }
        }
        return val;
      }
    });
    var validateOption = function(check) {
      check = arguments.length ? [check] : Object.keys(_validate);
      check.forEach(function(optionName, key) {
        var value;
        if (_validate[optionName]) {
          try {
            value = _validate[optionName](_options[optionName]);
          } catch (e) {
            value = DEFAULT_OPTIONS[optionName];
            var logMSG = _util.type.String(e) ? [e] : e;
            if (_util.type.Array(logMSG)) {
              logMSG[0] = "ERROR: " + logMSG[0];
              logMSG.unshift(1);
              log.apply(this, logMSG);
            } else {
              log(1, "ERROR: Problem executing validation callback for option '" + optionName + "':", e.message);
            }
          } finally {
            _options[optionName] = value;
          }
        }
      });
    };
    var changeOption = function(varname, newval) {
      var
        changed = false,
        oldval = _options[varname];
      if (_options[varname] != newval) {
        _options[varname] = newval;
        validateOption(varname);
        changed = oldval != _options[varname];
      }
      return changed;
    };
    var addSceneOption = function(optionName) {
      if (!Scene[optionName]) {
        Scene[optionName] = function(newVal) {
          if (!arguments.length) {
            return _options[optionName];
          } else {
            if (optionName === "duration") {
              _durationUpdateMethod = undefined;
            }
            if (changeOption(optionName, newVal)) {
              Scene.trigger("change", {
                what: optionName,
                newval: _options[optionName]
              });
              if (SCENE_OPTIONS.shifts.indexOf(optionName) > -1) {
                Scene.trigger("shift", {
                  reason: optionName
                });
              }
            }
          }
          return Scene;
        };
      }
    };
    this.controller = function() {
      return _controller;
    };
    this.state = function() {
      return _state;
    };
    this.scrollOffset = function() {
      return _scrollOffset.start;
    };
    this.triggerPosition = function() {
      var pos = _options.offset;
      if (_controller) {
        if (_options.triggerElement) {
          pos += _triggerPos;
        } else {
          pos += _controller.info("size") * Scene.triggerHook();
        }
      }
      return pos;
    };
    var
      _pin, _pinOptions;
    Scene.on("shift.internal", function(e) {
      var durationChanged = e.reason === "duration";
      if ((_state === SCENE_STATE_AFTER && durationChanged) || (_state === SCENE_STATE_DURING && _options.duration === 0)) {
        updatePinState();
      }
      if (durationChanged) {
        updatePinDimensions();
      }
    }).on("progress.internal", function(e) {
      updatePinState();
    }).on("add.internal", function(e) {
      updatePinDimensions();
    }).on("destroy.internal", function(e) {
      Scene.removePin(e.reset);
    });
    var updatePinState = function(forceUnpin) {
      if (_pin && _controller) {
        var
          containerInfo = _controller.info(),
          pinTarget = _pinOptions.spacer.firstChild;
        if (!forceUnpin && _state === SCENE_STATE_DURING) {
          if (_util.css(pinTarget, "position") != "fixed") {
            _util.css(pinTarget, {
              "position": "fixed"
            });
            updatePinDimensions();
          }
          var
            fixedPos = _util.get.offset(_pinOptions.spacer, true),
            scrollDistance = _options.reverse || _options.duration === 0 ? containerInfo.scrollPos - _scrollOffset.start : Math.round(_progress * _options.duration * 10) / 10;
          fixedPos[containerInfo.vertical ? "top" : "left"] += scrollDistance;
          _util.css(_pinOptions.spacer.firstChild, {
            top: fixedPos.top,
            left: fixedPos.left
          });
        } else {
          var
            newCSS = {
              position: _pinOptions.inFlow ? "relative" : "absolute",
              top: 0,
              left: 0
            },
            change = _util.css(pinTarget, "position") != newCSS.position;
          if (!_pinOptions.pushFollowers) {
            newCSS[containerInfo.vertical ? "top" : "left"] = _options.duration * _progress;
          } else if (_options.duration > 0) {
            if (_state === SCENE_STATE_AFTER && parseFloat(_util.css(_pinOptions.spacer, "padding-top")) === 0) {
              change = true;
            } else if (_state === SCENE_STATE_BEFORE && parseFloat(_util.css(_pinOptions.spacer, "padding-bottom")) === 0) {
              change = true;
            }
          }
          _util.css(pinTarget, newCSS);
          if (change) {
            updatePinDimensions();
          }
        }
      }
    };
    var updatePinDimensions = function() {
      if (_pin && _controller && _pinOptions.inFlow) {
        var
          after = (_state === SCENE_STATE_AFTER),
          before = (_state === SCENE_STATE_BEFORE),
          during = (_state === SCENE_STATE_DURING),
          vertical = _controller.info("vertical"),
          pinTarget = _pinOptions.spacer.firstChild,
          marginCollapse = _util.isMarginCollapseType(_util.css(_pinOptions.spacer, "display")),
          css = {};
        if (_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) {
          if (during) {
            _util.css(_pin, {
              "width": _util.get.width(_pinOptions.spacer)
            });
          } else {
            _util.css(_pin, {
              "width": "100%"
            });
          }
        } else {
          css["min-width"] = _util.get.width(vertical ? _pin : pinTarget, true, true);
          css.width = during ? css["min-width"] : "auto";
        }
        if (_pinOptions.relSize.height) {
          if (during) {
            _util.css(_pin, {
              "height": _util.get.height(_pinOptions.spacer) - (_pinOptions.pushFollowers ? _options.duration : 0)
            });
          } else {
            _util.css(_pin, {
              "height": "100%"
            });
          }
        } else {
          css["min-height"] = _util.get.height(vertical ? pinTarget : _pin, true, !marginCollapse);
          css.height = during ? css["min-height"] : "auto";
        }
        if (_pinOptions.pushFollowers) {
          css["padding" + (vertical ? "Top" : "Left")] = _options.duration * _progress;
          css["padding" + (vertical ? "Bottom" : "Right")] = _options.duration * (1 - _progress);
        }
        _util.css(_pinOptions.spacer, css);
      }
    };
    var updatePinInContainer = function() {
      if (_controller && _pin && _state === SCENE_STATE_DURING && !_controller.info("isDocument")) {
        updatePinState();
      }
    };
    var updateRelativePinSpacer = function() {
      if (_controller && _pin && _state === SCENE_STATE_DURING && (((_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) && _util.get.width(window) != _util.get.width(_pinOptions.spacer.parentNode)) || (_pinOptions.relSize.height && _util.get.height(window) != _util.get.height(_pinOptions.spacer.parentNode)))) {
        updatePinDimensions();
      }
    };
    var onMousewheelOverPin = function(e) {
      if (_controller && _pin && _state === SCENE_STATE_DURING && !_controller.info("isDocument")) {
        e.preventDefault();
        _controller._setScrollPos(_controller.info("scrollPos") - ((e.wheelDelta || e[_controller.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || -e.detail * 30));
      }
    };
    this.setPin = function(element, settings) {
      var
        defaultSettings = {
          pushFollowers: true,
          spacerClass: "scrollmagic-pin-spacer"
        };
      settings = _util.extend({}, defaultSettings, settings);
      element = _util.get.elements(element)[0];
      if (!element) {
        log(1, "ERROR calling method 'setPin()': Invalid pin element supplied.");
        return Scene;
      } else if (_util.css(element, "position") === "fixed") {
        log(1, "ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'.");
        return Scene;
      }
      if (_pin) {
        if (_pin === element) {
          return Scene;
        } else {
          Scene.removePin();
        }
      }
      _pin = element;
      var
        parentDisplay = _pin.parentNode.style.display,
        boundsParams = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
      _pin.parentNode.style.display = 'none';
      var
        inFlow = _util.css(_pin, "position") != "absolute",
        pinCSS = _util.css(_pin, boundsParams.concat(["display"])),
        sizeCSS = _util.css(_pin, ["width", "height"]);
      _pin.parentNode.style.display = parentDisplay;
      if (!inFlow && settings.pushFollowers) {
        log(2, "WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled.");
        settings.pushFollowers = false;
      }
      window.setTimeout(function() {
        if (_pin && _options.duration === 0 && settings.pushFollowers) {
          log(2, "WARNING: pushFollowers =", true, "has no effect, when scene duration is 0.");
        }
      }, 0);
      var
        spacer = _pin.parentNode.insertBefore(document.createElement('div'), _pin),
        spacerCSS = _util.extend(pinCSS, {
          position: inFlow ? "relative" : "absolute",
          boxSizing: "content-box",
          mozBoxSizing: "content-box",
          webkitBoxSizing: "content-box"
        });
      if (!inFlow) {
        _util.extend(spacerCSS, _util.css(_pin, ["width", "height"]));
      }
      _util.css(spacer, spacerCSS);
      spacer.setAttribute(PIN_SPACER_ATTRIBUTE, "");
      _util.addClass(spacer, settings.spacerClass);
      _pinOptions = {
        spacer: spacer,
        relSize: {
          width: sizeCSS.width.slice(-1) === "%",
          height: sizeCSS.height.slice(-1) === "%",
          autoFullWidth: sizeCSS.width === "auto" && inFlow && _util.isMarginCollapseType(pinCSS.display)
        },
        pushFollowers: settings.pushFollowers,
        inFlow: inFlow,
      };
      if (!_pin.___origStyle) {
        _pin.___origStyle = {};
        var
          pinInlineCSS = _pin.style,
          copyStyles = boundsParams.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]);
        copyStyles.forEach(function(val) {
          _pin.___origStyle[val] = pinInlineCSS[val] || "";
        });
      }
      if (_pinOptions.relSize.width) {
        _util.css(spacer, {
          width: sizeCSS.width
        });
      }
      if (_pinOptions.relSize.height) {
        _util.css(spacer, {
          height: sizeCSS.height
        });
      }
      spacer.appendChild(_pin);
      _util.css(_pin, {
        position: inFlow ? "relative" : "absolute",
        margin: "auto",
        top: "auto",
        left: "auto",
        bottom: "auto",
        right: "auto"
      });
      if (_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) {
        _util.css(_pin, {
          boxSizing: "border-box",
          mozBoxSizing: "border-box",
          webkitBoxSizing: "border-box"
        });
      }
      window.addEventListener('scroll', updatePinInContainer);
      window.addEventListener('resize', updatePinInContainer);
      window.addEventListener('resize', updateRelativePinSpacer);
      _pin.addEventListener("mousewheel", onMousewheelOverPin);
      _pin.addEventListener("DOMMouseScroll", onMousewheelOverPin);
      log(3, "added pin");
      updatePinState();
      return Scene;
    };
    this.removePin = function(reset) {
      if (_pin) {
        if (_state === SCENE_STATE_DURING) {
          updatePinState(true);
        }
        if (reset || !_controller) {
          var pinTarget = _pinOptions.spacer.firstChild;
          if (pinTarget.hasAttribute(PIN_SPACER_ATTRIBUTE)) {
            var
              style = _pinOptions.spacer.style,
              values = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
            margins = {};
            values.forEach(function(val) {
              margins[val] = style[val] || "";
            });
            _util.css(pinTarget, margins);
          }
          _pinOptions.spacer.parentNode.insertBefore(pinTarget, _pinOptions.spacer);
          _pinOptions.spacer.parentNode.removeChild(_pinOptions.spacer);
          if (!_pin.parentNode.hasAttribute(PIN_SPACER_ATTRIBUTE)) {
            _util.css(_pin, _pin.___origStyle);
            delete _pin.___origStyle;
          }
        }
        window.removeEventListener('scroll', updatePinInContainer);
        window.removeEventListener('resize', updatePinInContainer);
        window.removeEventListener('resize', updateRelativePinSpacer);
        _pin.removeEventListener("mousewheel", onMousewheelOverPin);
        _pin.removeEventListener("DOMMouseScroll", onMousewheelOverPin);
        _pin = undefined;
        log(3, "removed pin (reset: " + (reset ? "true" : "false") + ")");
      }
      return Scene;
    };
    var
      _cssClasses, _cssClassElems = [];
    Scene.on("destroy.internal", function(e) {
      Scene.removeClassToggle(e.reset);
    });
    this.setClassToggle = function(element, classes) {
      var elems = _util.get.elements(element);
      if (elems.length === 0 || !_util.type.String(classes)) {
        log(1, "ERROR calling method 'setClassToggle()': Invalid " + (elems.length === 0 ? "element" : "classes") + " supplied.");
        return Scene;
      }
      if (_cssClassElems.length > 0) {
        Scene.removeClassToggle();
      }
      _cssClasses = classes;
      _cssClassElems = elems;
      Scene.on("enter.internal_class leave.internal_class", function(e) {
        var toggle = e.type === "enter" ? _util.addClass : _util.removeClass;
        _cssClassElems.forEach(function(elem, key) {
          toggle(elem, _cssClasses);
        });
      });
      return Scene;
    };
    this.removeClassToggle = function(reset) {
      if (reset) {
        _cssClassElems.forEach(function(elem, key) {
          _util.removeClass(elem, _cssClasses);
        });
      }
      Scene.off("start.internal_class end.internal_class");
      _cssClasses = undefined;
      _cssClassElems = [];
      return Scene;
    };
    construct();
    return Scene;
  };
  var SCENE_OPTIONS = {
    defaults: {
      duration: 0,
      offset: 0,
      triggerElement: undefined,
      triggerHook: 0.5,
      reverse: true,
      loglevel: 2
    },
    validate: {
      offset: function(val) {
        val = parseFloat(val);
        if (!_util.type.Number(val)) {
          throw ["Invalid value for option \"offset\":", val];
        }
        return val;
      },
      triggerElement: function(val) {
        val = val || undefined;
        if (val) {
          var elem = _util.get.elements(val)[0];
          if (elem) {
            val = elem;
          } else {
            throw ["Element defined in option \"triggerElement\" was not found:", val];
          }
        }
        return val;
      },
      triggerHook: function(val) {
        var translate = {
          "onCenter": 0.5,
          "onEnter": 1,
          "onLeave": 0
        };
        if (_util.type.Number(val)) {
          val = Math.max(0, Math.min(parseFloat(val), 1));
        } else if (val in translate) {
          val = translate[val];
        } else {
          throw ["Invalid value for option \"triggerHook\": ", val];
        }
        return val;
      },
      reverse: function(val) {
        return !!val;
      },
      loglevel: function(val) {
        val = parseInt(val);
        if (!_util.type.Number(val) || val < 0 || val > 3) {
          throw ["Invalid value for option \"loglevel\":", val];
        }
        return val;
      }
    },
    shifts: ["duration", "offset", "triggerHook"],
  };
  ScrollMagic.Scene.addOption = function(name, defaultValue, validationCallback, shifts) {
    if (!(name in SCENE_OPTIONS.defaults)) {
      SCENE_OPTIONS.defaults[name] = defaultValue;
      SCENE_OPTIONS.validate[name] = validationCallback;
      if (shifts) {
        SCENE_OPTIONS.shifts.push(name);
      }
    } else {
      ScrollMagic._util.log(1, "[static] ScrollMagic.Scene -> Cannot add Scene option '" + name + "', because it already exists.");
    }
  };
  ScrollMagic.Scene.extend = function(extension) {
    var oldClass = this;
    ScrollMagic.Scene = function() {
      oldClass.apply(this, arguments);
      this.$super = _util.extend({}, this);
      return extension.apply(this, arguments) || this;
    };
    _util.extend(ScrollMagic.Scene, oldClass);
    ScrollMagic.Scene.prototype = oldClass.prototype;
    ScrollMagic.Scene.prototype.constructor = ScrollMagic.Scene;
  };
  ScrollMagic.Event = function(type, namespace, target, vars) {
    vars = vars || {};
    for (var key in vars) {
      this[key] = vars[key];
    }
    this.type = type;
    this.target = this.currentTarget = target;
    this.namespace = namespace || '';
    this.timeStamp = this.timestamp = Date.now();
    return this;
  };
  var _util = ScrollMagic._util = (function(window) {
    var U = {},
      i;
    var floatval = function(number) {
      return parseFloat(number) || 0;
    };
    var _getComputedStyle = function(elem) {
      return elem.currentStyle ? elem.currentStyle : window.getComputedStyle(elem);
    };
    var _dimension = function(which, elem, outer, includeMargin) {
      elem = (elem === document) ? window : elem;
      if (elem === window) {
        includeMargin = false;
      } else if (!_type.DomElement(elem)) {
        return 0;
      }
      which = which.charAt(0).toUpperCase() + which.substr(1).toLowerCase();
      var dimension = (outer ? elem['offset' + which] || elem['outer' + which] : elem['client' + which] || elem['inner' + which]) || 0;
      if (outer && includeMargin) {
        var style = _getComputedStyle(elem);
        dimension += which === 'Height' ? floatval(style.marginTop) + floatval(style.marginBottom) : floatval(style.marginLeft) + floatval(style.marginRight);
      }
      return dimension;
    };
    var _camelCase = function(str) {
      return str.replace(/^[^a-z]+([a-z])/g, '$1').replace(/-([a-z])/g, function(g) {
        return g[1].toUpperCase();
      });
    };
    U.extend = function(obj) {
      obj = obj || {};
      for (i = 1; i < arguments.length; i++) {
        if (!arguments[i]) {
          continue;
        }
        for (var key in arguments[i]) {
          if (arguments[i].hasOwnProperty(key)) {
            obj[key] = arguments[i][key];
          }
        }
      }
      return obj;
    };
    U.isMarginCollapseType = function(str) {
      return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(str) > -1;
    };
    var
      lastTime = 0,
      vendors = ['ms', 'moz', 'webkit', 'o'];
    var _requestAnimationFrame = window.requestAnimationFrame;
    var _cancelAnimationFrame = window.cancelAnimationFrame;
    for (i = 0; !_requestAnimationFrame && i < vendors.length; ++i) {
      _requestAnimationFrame = window[vendors[i] + 'RequestAnimationFrame'];
      _cancelAnimationFrame = window[vendors[i] + 'CancelAnimationFrame'] || window[vendors[i] + 'CancelRequestAnimationFrame'];
    }
    if (!_requestAnimationFrame) {
      _requestAnimationFrame = function(callback) {
        var
          currTime = new Date().getTime(),
          timeToCall = Math.max(0, 16 - (currTime - lastTime)),
          id = window.setTimeout(function() {
            callback(currTime + timeToCall);
          }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };
    }
    if (!_cancelAnimationFrame) {
      _cancelAnimationFrame = function(id) {
        window.clearTimeout(id);
      };
    }
    U.rAF = _requestAnimationFrame.bind(window);
    U.cAF = _cancelAnimationFrame.bind(window);
    var
      loglevels = ["error", "warn", "log"],
      console = window.console || {};
    console.log = console.log || function() {};
    for (i = 0; i < loglevels.length; i++) {
      var method = loglevels[i];
      if (!console[method]) {
        console[method] = console.log;
      }
    }
    U.log = function(loglevel) {
      if (loglevel > loglevels.length || loglevel <= 0) loglevel = loglevels.length;
      var now = new Date(),
        time = ("0" + now.getHours()).slice(-2) + ":" + ("0" + now.getMinutes()).slice(-2) + ":" + ("0" + now.getSeconds()).slice(-2) + ":" + ("00" + now.getMilliseconds()).slice(-3),
        method = loglevels[loglevel - 1],
        args = Array.prototype.splice.call(arguments, 1),
        func = Function.prototype.bind.call(console[method], console);
      args.unshift(time);
      func.apply(console, args);
    };
    var _type = U.type = function(v) {
      return Object.prototype.toString.call(v).replace(/^\[object (.+)\]$/, "$1").toLowerCase();
    };
    _type.String = function(v) {
      return _type(v) === 'string';
    };
    _type.Function = function(v) {
      return _type(v) === 'function';
    };
    _type.Array = function(v) {
      return Array.isArray(v);
    };
    _type.Number = function(v) {
      return !_type.Array(v) && (v - parseFloat(v) + 1) >= 0;
    };
    _type.DomElement = function(o) {
      return (typeof HTMLElement === "object" ? o instanceof HTMLElement : o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string");
    };
    var _get = U.get = {};
    _get.elements = function(selector) {
      var arr = [];
      if (_type.String(selector)) {
        try {
          selector = document.querySelectorAll(selector);
        } catch (e) {
          return arr;
        }
      }
      if (_type(selector) === 'nodelist' || _type.Array(selector)) {
        for (var i = 0, ref = arr.length = selector.length; i < ref; i++) {
          var elem = selector[i];
          arr[i] = _type.DomElement(elem) ? elem : _get.elements(elem);
        }
      } else if (_type.DomElement(selector) || selector === document || selector === window) {
        arr = [selector];
      }
      return arr;
    };
    _get.scrollTop = function(elem) {
      return (elem && typeof elem.scrollTop === 'number') ? elem.scrollTop : window.pageYOffset || 0;
    };
    _get.scrollLeft = function(elem) {
      return (elem && typeof elem.scrollLeft === 'number') ? elem.scrollLeft : window.pageXOffset || 0;
    };
    _get.width = function(elem, outer, includeMargin) {
      return _dimension('width', elem, outer, includeMargin);
    };
    _get.height = function(elem, outer, includeMargin) {
      return _dimension('height', elem, outer, includeMargin);
    };
    _get.offset = function(elem, relativeToViewport) {
      var offset = {
        top: 0,
        left: 0
      };
      if (elem && elem.getBoundingClientRect) {
        var rect = elem.getBoundingClientRect();
        offset.top = rect.top;
        offset.left = rect.left;
        if (!relativeToViewport) {
          offset.top += _get.scrollTop();
          offset.left += _get.scrollLeft();
        }
      }
      return offset;
    };
    U.addClass = function(elem, classname) {
      if (classname) {
        if (elem.classList) elem.classList.add(classname);
        else elem.className += ' ' + classname;
      }
    };
    U.removeClass = function(elem, classname) {
      if (classname) {
        if (elem.classList) elem.classList.remove(classname);
        else elem.className = elem.className.replace(new RegExp('(^|\\b)' + classname.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
      }
    };
    U.css = function(elem, options) {
      if (_type.String(options)) {
        return _getComputedStyle(elem)[_camelCase(options)];
      } else if (_type.Array(options)) {
        var
          obj = {},
          style = _getComputedStyle(elem);
        options.forEach(function(option, key) {
          obj[option] = style[_camelCase(option)];
        });
        return obj;
      } else {
        for (var option in options) {
          var val = options[option];
          if (val == parseFloat(val)) {
            val += 'px';
          }
          elem.style[_camelCase(option)] = val;
        }
      }
    };
    return U;
  }(window || {}));
  ScrollMagic.Scene.prototype.addIndicators = function() {
    ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin \'debug.addIndicators\'. Please make sure to include plugins/debug.addIndicators.js');
    return this;
  }
  ScrollMagic.Scene.prototype.removeIndicators = function() {
    ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin \'debug.addIndicators\'. Please make sure to include plugins/debug.addIndicators.js');
    return this;
  }
  ScrollMagic.Scene.prototype.setTween = function() {
    ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin \'animation.gsap\'. Please make sure to include plugins/animation.gsap.js');
    return this;
  }
  ScrollMagic.Scene.prototype.removeTween = function() {
    ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin \'animation.gsap\'. Please make sure to include plugins/animation.gsap.js');
    return this;
  }
  ScrollMagic.Scene.prototype.setVelocity = function() {
    ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin \'animation.velocity\'. Please make sure to include plugins/animation.velocity.js');
    return this;
  }
  ScrollMagic.Scene.prototype.removeVelocity = function() {
    ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin \'animation.velocity\'. Please make sure to include plugins/animation.velocity.js');
    return this;
  }
  return ScrollMagic;
}));

/* -- FILE: [javascripts/animation.gsap.min.js]*/
/*! ScrollMagic v2.0.5 | (c) 2015 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
! function(e, n) {
  "function" == typeof define && define.amd ? define(["ScrollMagic", "TweenMax", "TimelineMax"], n) : "object" == typeof exports ? (require("gsap"), n(require("scrollmagic"), TweenMax, TimelineMax)) : n(e.ScrollMagic || e.jQuery && e.jQuery.ScrollMagic, e.TweenMax || e.TweenLite, e.TimelineMax || e.TimelineLite)
}(this, function(e, n, r) {
  "use strict";
  e.Scene.addOption("tweenChanges", !1, function(e) {
    return !!e
  }), e.Scene.extend(function() {
    var e, t = this;
    t.on("progress.plugin_gsap", function() {
      i()
    }), t.on("destroy.plugin_gsap", function(e) {
      t.removeTween(e.reset)
    });
    var i = function() {
      if (e) {
        var n = t.progress(),
          r = t.state();
        e.repeat && -1 === e.repeat() ? "DURING" === r && e.paused() ? e.play() : "DURING" === r || e.paused() || e.pause() : n != e.progress() && (0 === t.duration() ? n > 0 ? e.play() : e.reverse() : t.tweenChanges() && e.tweenTo ? e.tweenTo(n * e.duration()) : e.progress(n).pause())
      }
    };
    t.setTween = function(o, a, s) {
      var u;
      arguments.length > 1 && (arguments.length < 3 && (s = a, a = 1), o = n.to(o, a, s));
      try {
        u = r ? new r({
          smoothChildTiming: !0
        }).add(o) : o, u.pause()
      } catch (p) {
        return t
      }
      return e && t.removeTween(), e = u, o.repeat && -1 === o.repeat() && (e.repeat(-1), e.yoyo(o.yoyo())), i(), t
    }, t.removeTween = function(n) {
      return e && (n && e.progress(0).pause(), e.kill(), e = void 0), t
    }
  })
});

/* -- FILE: [javascripts/jquery.waypoints.min.js]*/
/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
! function() {
  "use strict";

  function t(o) {
    if (!o) throw new Error("No options passed to Waypoint constructor");
    if (!o.element) throw new Error("No element option passed to Waypoint constructor");
    if (!o.handler) throw new Error("No handler option passed to Waypoint constructor");
    this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, o), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = o.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
      name: this.options.group,
      axis: this.axis
    }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1
  }
  var e = 0,
    i = {};
  t.prototype.queueTrigger = function(t) {
    this.group.queueTrigger(this, t)
  }, t.prototype.trigger = function(t) {
    this.enabled && this.callback && this.callback.apply(this, t)
  }, t.prototype.destroy = function() {
    this.context.remove(this), this.group.remove(this), delete i[this.key]
  }, t.prototype.disable = function() {
    return this.enabled = !1, this
  }, t.prototype.enable = function() {
    return this.context.refresh(), this.enabled = !0, this
  }, t.prototype.next = function() {
    return this.group.next(this)
  }, t.prototype.previous = function() {
    return this.group.previous(this)
  }, t.invokeAll = function(t) {
    var e = [];
    for (var o in i) e.push(i[o]);
    for (var n = 0, r = e.length; r > n; n++) e[n][t]()
  }, t.destroyAll = function() {
    t.invokeAll("destroy")
  }, t.disableAll = function() {
    t.invokeAll("disable")
  }, t.enableAll = function() {
    t.Context.refreshAll();
    for (var e in i) i[e].enabled = !0;
    return this
  }, t.refreshAll = function() {
    t.Context.refreshAll()
  }, t.viewportHeight = function() {
    return window.innerHeight || document.documentElement.clientHeight
  }, t.viewportWidth = function() {
    return document.documentElement.clientWidth
  }, t.adapters = [], t.defaults = {
    context: window,
    continuous: !0,
    enabled: !0,
    group: "default",
    horizontal: !1,
    offset: 0
  }, t.offsetAliases = {
    "bottom-in-view": function() {
      return this.context.innerHeight() - this.adapter.outerHeight()
    },
    "right-in-view": function() {
      return this.context.innerWidth() - this.adapter.outerWidth()
    }
  }, window.Waypoint = t
}(),
function() {
  "use strict";

  function t(t) {
    window.setTimeout(t, 1e3 / 60)
  }

  function e(t) {
    this.element = t, this.Adapter = n.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
      x: this.adapter.scrollLeft(),
      y: this.adapter.scrollTop()
    }, this.waypoints = {
      vertical: {},
      horizontal: {}
    }, t.waypointContextKey = this.key, o[t.waypointContextKey] = this, i += 1, n.windowContext || (n.windowContext = !0, n.windowContext = new e(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
  }
  var i = 0,
    o = {},
    n = window.Waypoint,
    r = window.onload;
  e.prototype.add = function(t) {
    var e = t.options.horizontal ? "horizontal" : "vertical";
    this.waypoints[e][t.key] = t, this.refresh()
  }, e.prototype.checkEmpty = function() {
    var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
      e = this.Adapter.isEmptyObject(this.waypoints.vertical),
      i = this.element == this.element.window;
    t && e && !i && (this.adapter.off(".waypoints"), delete o[this.key])
  }, e.prototype.createThrottledResizeHandler = function() {
    function t() {
      e.handleResize(), e.didResize = !1
    }
    var e = this;
    this.adapter.on("resize.waypoints", function() {
      e.didResize || (e.didResize = !0, n.requestAnimationFrame(t))
    })
  }, e.prototype.createThrottledScrollHandler = function() {
    function t() {
      e.handleScroll(), e.didScroll = !1
    }
    var e = this;
    this.adapter.on("scroll.waypoints", function() {
      (!e.didScroll || n.isTouch) && (e.didScroll = !0, n.requestAnimationFrame(t))
    })
  }, e.prototype.handleResize = function() {
    n.Context.refreshAll()
  }, e.prototype.handleScroll = function() {
    var t = {},
      e = {
        horizontal: {
          newScroll: this.adapter.scrollLeft(),
          oldScroll: this.oldScroll.x,
          forward: "right",
          backward: "left"
        },
        vertical: {
          newScroll: this.adapter.scrollTop(),
          oldScroll: this.oldScroll.y,
          forward: "down",
          backward: "up"
        }
      };
    for (var i in e) {
      var o = e[i],
        n = o.newScroll > o.oldScroll,
        r = n ? o.forward : o.backward;
      for (var s in this.waypoints[i]) {
        var a = this.waypoints[i][s];
        if (null !== a.triggerPoint) {
          var l = o.oldScroll < a.triggerPoint,
            h = o.newScroll >= a.triggerPoint,
            p = l && h,
            u = !l && !h;
          (p || u) && (a.queueTrigger(r), t[a.group.id] = a.group)
        }
      }
    }
    for (var c in t) t[c].flushTriggers();
    this.oldScroll = {
      x: e.horizontal.newScroll,
      y: e.vertical.newScroll
    }
  }, e.prototype.innerHeight = function() {
    return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight()
  }, e.prototype.remove = function(t) {
    delete this.waypoints[t.axis][t.key], this.checkEmpty()
  }, e.prototype.innerWidth = function() {
    return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth()
  }, e.prototype.destroy = function() {
    var t = [];
    for (var e in this.waypoints)
      for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
    for (var o = 0, n = t.length; n > o; o++) t[o].destroy()
  }, e.prototype.refresh = function() {
    var t, e = this.element == this.element.window,
      i = e ? void 0 : this.adapter.offset(),
      o = {};
    this.handleScroll(), t = {
      horizontal: {
        contextOffset: e ? 0 : i.left,
        contextScroll: e ? 0 : this.oldScroll.x,
        contextDimension: this.innerWidth(),
        oldScroll: this.oldScroll.x,
        forward: "right",
        backward: "left",
        offsetProp: "left"
      },
      vertical: {
        contextOffset: e ? 0 : i.top,
        contextScroll: e ? 0 : this.oldScroll.y,
        contextDimension: this.innerHeight(),
        oldScroll: this.oldScroll.y,
        forward: "down",
        backward: "up",
        offsetProp: "top"
      }
    };
    for (var r in t) {
      var s = t[r];
      for (var a in this.waypoints[r]) {
        var l, h, p, u, c, d = this.waypoints[r][a],
          f = d.options.offset,
          w = d.triggerPoint,
          y = 0,
          g = null == w;
        d.element !== d.element.window && (y = d.adapter.offset()[s.offsetProp]), "function" == typeof f ? f = f.apply(d) : "string" == typeof f && (f = parseFloat(f), d.options.offset.indexOf("%") > -1 && (f = Math.ceil(s.contextDimension * f / 100))), l = s.contextScroll - s.contextOffset, d.triggerPoint = Math.floor(y + l - f), h = w < s.oldScroll, p = d.triggerPoint >= s.oldScroll, u = h && p, c = !h && !p, !g && u ? (d.queueTrigger(s.backward), o[d.group.id] = d.group) : !g && c ? (d.queueTrigger(s.forward), o[d.group.id] = d.group) : g && s.oldScroll >= d.triggerPoint && (d.queueTrigger(s.forward), o[d.group.id] = d.group)
      }
    }
    return n.requestAnimationFrame(function() {
      for (var t in o) o[t].flushTriggers()
    }), this
  }, e.findOrCreateByElement = function(t) {
    return e.findByElement(t) || new e(t)
  }, e.refreshAll = function() {
    for (var t in o) o[t].refresh()
  }, e.findByElement = function(t) {
    return o[t.waypointContextKey]
  }, window.onload = function() {
    r && r(), e.refreshAll()
  }, n.requestAnimationFrame = function(e) {
    var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
    i.call(window, e)
  }, n.Context = e
}(),
function() {
  "use strict";

  function t(t, e) {
    return t.triggerPoint - e.triggerPoint
  }

  function e(t, e) {
    return e.triggerPoint - t.triggerPoint
  }

  function i(t) {
    this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), o[this.axis][this.name] = this
  }
  var o = {
      vertical: {},
      horizontal: {}
    },
    n = window.Waypoint;
  i.prototype.add = function(t) {
    this.waypoints.push(t)
  }, i.prototype.clearTriggerQueues = function() {
    this.triggerQueues = {
      up: [],
      down: [],
      left: [],
      right: []
    }
  }, i.prototype.flushTriggers = function() {
    for (var i in this.triggerQueues) {
      var o = this.triggerQueues[i],
        n = "up" === i || "left" === i;
      o.sort(n ? e : t);
      for (var r = 0, s = o.length; s > r; r += 1) {
        var a = o[r];
        (a.options.continuous || r === o.length - 1) && a.trigger([i])
      }
    }
    this.clearTriggerQueues()
  }, i.prototype.next = function(e) {
    this.waypoints.sort(t);
    var i = n.Adapter.inArray(e, this.waypoints),
      o = i === this.waypoints.length - 1;
    return o ? null : this.waypoints[i + 1]
  }, i.prototype.previous = function(e) {
    this.waypoints.sort(t);
    var i = n.Adapter.inArray(e, this.waypoints);
    return i ? this.waypoints[i - 1] : null
  }, i.prototype.queueTrigger = function(t, e) {
    this.triggerQueues[e].push(t)
  }, i.prototype.remove = function(t) {
    var e = n.Adapter.inArray(t, this.waypoints);
    e > -1 && this.waypoints.splice(e, 1)
  }, i.prototype.first = function() {
    return this.waypoints[0]
  }, i.prototype.last = function() {
    return this.waypoints[this.waypoints.length - 1]
  }, i.findOrCreate = function(t) {
    return o[t.axis][t.name] || new i(t)
  }, n.Group = i
}(),
function() {
  "use strict";

  function t(t) {
    this.$element = e(t)
  }
  var e = window.jQuery,
    i = window.Waypoint;
  e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(e, i) {
    t.prototype[i] = function() {
      var t = Array.prototype.slice.call(arguments);
      return this.$element[i].apply(this.$element, t)
    }
  }), e.each(["extend", "inArray", "isEmptyObject"], function(i, o) {
    t[o] = e[o]
  }), i.adapters.push({
    name: "jquery",
    Adapter: t
  }), i.Adapter = t
}(),
function() {
  "use strict";

  function t(t) {
    return function() {
      var i = [],
        o = arguments[0];
      return t.isFunction(arguments[0]) && (o = t.extend({}, arguments[1]), o.handler = arguments[0]), this.each(function() {
        var n = t.extend({}, o, {
          element: this
        });
        "string" == typeof n.context && (n.context = t(this).closest(n.context)[0]), i.push(new e(n))
      }), i
    }
  }
  var e = window.Waypoint;
  window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
}();

/* -- FILE: [javascripts/jquery.counterup.min.js]*/
/*!
 * jquery.counterup.js 1.0
 *
 * Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
 * Released under the GPL v2 License
 *
 * Date: Nov 26, 2013
 */
(function($) {
  "use strict";
  $.fn.counterUp = function(options) {
    var settings = $.extend({
      'time': 400,
      'delay': 10
    }, options);
    return this.each(function() {
      var $this = $(this);
      var $settings = settings;
      var locale = $this.data('locale');
      if (locale !== undefined) {
        locale = locale.replace('_', '-');
      }
      var counterUpper = function() {
        var nums = [];
        var divisions = $settings.time / $settings.delay;
        var num = $this.text();
        var isComma = /[0-9]+,[0-9]+/.test(num);
        num = num.replace(/,/g, '');
        var isInt = /^[0-9]+$/.test(num);
        var isFloat = /^[0-9]+\.[0-9]+$/.test(num);
        var decimalPlaces = isFloat ? (num.split('.')[1] || []).length : 0;
        for (var i = divisions; i >= 1; i--) {
          var newNum = parseInt(num / divisions * i);
          if (isFloat) {
            newNum = parseFloat(num / divisions * i).toFixed(decimalPlaces);
          }
          if (isComma) {
            while (/(\d+)(\d{3})/.test(newNum.toString())) {
              newNum = newNum.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
            }
          }
          nums.unshift(newNum);
        }
        $this.data('counterup-nums', nums);
        $this.text('0');
        var f = function() {
          if (!$this.data('counterup-nums')) {
            return;
          }
          if (locale !== undefined) {
            var number = $this.data('counterup-nums').shift();
            number = parseFloat(number);
            $this.text(number.toLocaleString(locale));
          } else {
            $this.text($this.data('counterup-nums').shift());
          }
          if ($this.data('counterup-nums').length) {
            setTimeout($this.data('counterup-func'), $settings.delay);
          } else {
            delete $this.data('counterup-nums');
            $this.data('counterup-nums', null);
            $this.data('counterup-func', null);
          }
        };
        $this.data('counterup-func', f);
        setTimeout($this.data('counterup-func'), $settings.delay);
      };
      $this.waypoint(counterUpper, {
        offset: '100%',
        triggerOnce: true
      });
    });
  };
})(jQuery);

/* -- FILE: [javascripts/jquery.viewportchecker.js]*/
(function($) {
  $.fn.viewportChecker = function(useroptions) {
    var options = {
      classToAdd: 'visible',
      classToRemove: 'invisible',
      classToAddForFullView: 'full-visible',
      removeClassAfterAnimation: false,
      offset: 100,
      repeat: false,
      invertBottomOffset: true,
      callbackFunction: function(elem, action) {},
      scrollHorizontal: false,
      scrollBox: window
    };
    $.extend(options, useroptions);
    var $elem = this,
      boxSize = {
        height: $(options.scrollBox).height(),
        width: $(options.scrollBox).width()
      },
      scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1 || navigator.userAgent.toLowerCase().indexOf('windows phone') != -1) ? 'body' : 'html');
    this.checkElements = function() {
      var viewportStart, viewportEnd;
      if (!options.scrollHorizontal) {
        viewportStart = $(scrollElem).scrollTop();
        viewportEnd = (viewportStart + boxSize.height);
      } else {
        viewportStart = $(scrollElem).scrollLeft();
        viewportEnd = (viewportStart + boxSize.width);
      }
      $elem.each(function() {
        var $obj = $(this),
          objOptions = {},
          attrOptions = {};
        if ($obj.data('vp-add-class'))
          attrOptions.classToAdd = $obj.data('vp-add-class');
        if ($obj.data('vp-remove-class'))
          attrOptions.classToRemove = $obj.data('vp-remove-class');
        if ($obj.data('vp-add-class-full-view'))
          attrOptions.classToAddForFullView = $obj.data('vp-add-class-full-view');
        if ($obj.data('vp-keep-add-class'))
          attrOptions.removeClassAfterAnimation = $obj.data('vp-remove-after-animation');
        if ($obj.data('vp-offset'))
          attrOptions.offset = $obj.data('vp-offset');
        if ($obj.data('vp-repeat'))
          attrOptions.repeat = $obj.data('vp-repeat');
        if ($obj.data('vp-scrollHorizontal'))
          attrOptions.scrollHorizontal = $obj.data('vp-scrollHorizontal');
        if ($obj.data('vp-invertBottomOffset'))
          attrOptions.scrollHorizontal = $obj.data('vp-invertBottomOffset');
        $.extend(objOptions, options);
        $.extend(objOptions, attrOptions);
        if ($obj.data('vp-animated') && !objOptions.repeat) {
          return;
        }
        if (String(objOptions.offset).indexOf("%") > 0)
          objOptions.offset = (parseInt(objOptions.offset) / 100) * boxSize.height;
        var rawStart = (!objOptions.scrollHorizontal) ? $obj.offset().top : $obj.offset().left,
          rawEnd = (!objOptions.scrollHorizontal) ? rawStart + $obj.height() : rawStart + $obj.width();
        var elemStart = Math.round(rawStart) + objOptions.offset,
          elemEnd = (!objOptions.scrollHorizontal) ? elemStart + $obj.height() : elemStart + $obj.width();
        if (objOptions.invertBottomOffset)
          elemEnd -= (objOptions.offset * 2);
        if ((elemStart < viewportEnd) && (elemEnd > viewportStart)) {
          $obj.removeClass(objOptions.classToRemove);
          $obj.addClass(objOptions.classToAdd);
          objOptions.callbackFunction($obj, "add");
          if (rawEnd <= viewportEnd && rawStart >= viewportStart)
            $obj.addClass(objOptions.classToAddForFullView);
          else
            $obj.removeClass(objOptions.classToAddForFullView);
          $obj.data('vp-animated', true);
          if (objOptions.removeClassAfterAnimation) {
            $obj.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
              $obj.removeClass(objOptions.classToAdd);
            });
          }
        } else if ($obj.hasClass(objOptions.classToAdd) && (objOptions.repeat)) {
          $obj.removeClass(objOptions.classToAdd + " " + objOptions.classToAddForFullView);
          objOptions.callbackFunction($obj, "remove");
          $obj.data('vp-animated', false);
        }
      });
    };
    if ('ontouchstart' in window || 'onmsgesturechange' in window) {
      $(document).bind("touchmove MSPointerMove pointermove", this.checkElements);
    }
    $(options.scrollBox).bind("load scroll", this.checkElements);
    $(window).resize(function(e) {
      boxSize = {
        height: $(options.scrollBox).height(),
        width: $(options.scrollBox).width()
      };
      $elem.checkElements();
    });
    this.checkElements();
    return this;
  };
})(jQuery);

/* -- FILE: [javascripts/jquery.imagemapster.min.js]*/
(function(e) {
  e(function() {
    function i() {}

    function s(t) {
      var n = new i;
      return n.then = function(e) {
        var n;
        try {
          return e && (n = e(t)), c(n === r ? t : n)
        } catch (i) {
          return o(i)
        }
      }, e(n)
    }

    function o(t) {
      var n = new i;
      return n.then = function(e, n) {
        var i;
        try {
          return n ? (i = n(t), c(i === r ? t : i)) : o(t)
        } catch (s) {
          return o(s)
        }
      }, e(n)
    }

    function u(e) {
      return l(e, function(e) {
        return o(e)
      })
    }

    function a() {
      function p(e, t, n) {
        return l(e, t, n)
      }

      function d(e) {
        h(s(e))
      }

      function v(e) {
        h(o(e))
      }

      function m(e) {
        c(e)
      }
      var t, n, u, f, l, c, h;
      return u = [], f = [], l = function(t, n, r) {
        var i = a();
        return u.push(function(e) {
          e.then(t, n).then(i.resolve, i.reject, i.progress)
        }), r && f.push(r), i.promise
      }, c = function(e) {
        var t, n = 0;
        while (t = f[n++]) t(e)
      }, h = function(e) {
        var t, n = 0;
        l = e.then, h = c = function() {
          throw new Error("already completed")
        }, f = r;
        while (t = u[n++]) t(e);
        u = []
      }, t = {}, n = new i, n.then = t.then = p, t.promise = e(n), t.resolver = e({
        resolve: t.resolve = d,
        reject: t.reject = v,
        progress: t.progress = m
      }), t
    }

    function f(e) {
      return e && typeof e.then == "function"
    }

    function l(e, t, n, r) {
      var i = c(e);
      return i.then(t, n, r)
    }

    function c(e) {
      var t, n;
      return e instanceof i ? t = e : (n = a(), f(e) ? (e.then(n.resolve, n.reject, n.progress), t = n.promise) : (n.resolve(e), t = n.promise)), t
    }

    function h(e, t, n, r, i) {
      return E(2, arguments), l(e, function(e) {
        function m(e) {
          c(e)
        }

        function g(e) {
          h(e)
        }

        function y(e) {
          p(e)
        }

        function b() {
          c = h = p = S
        }
        var s, o, u, f, c, h, p, d, v;
        d = e.length >>> 0, s = Math.max(0, Math.min(t, d)), o = [], f = a(), u = l(f, n, r, i);
        if (!s) f.resolve(o);
        else {
          c = function(e) {
            o.push(e), --s || (b(), f.resolve(o))
          }, h = function(e) {
            b(), f.reject(e)
          }, p = f.progress;
          for (v = 0; v < d; ++v) v in e && l(e[v], m, g, y)
        }
        return u
      })
    }

    function p(e, t, n, r) {
      return E(1, arguments), l(e, function(e) {
        return b(e, d, [])
      }).then(t, n, r)
    }

    function d(e, t, n) {
      return e[n] = t, e
    }

    function v(e, t, n, r) {
      function i(e) {
        return t ? t(e[0]) : e[0]
      }
      return h(e, 1, i, n, r)
    }

    function m(e, t) {
      return l(e, function(e) {
        return g(e, t)
      })
    }

    function g(e, t) {
      var n, r, i;
      r = e.length >>> 0, n = new Array(r);
      for (i = 0; i < r; i++) i in e && (n[i] = l(e[i], t));
      return b(n, d, n)
    }

    function y(e, t, i) {
      var s = n.call(arguments, 1);
      return l(e, function(e) {
        return b.apply(r, [e].concat(s))
      })
    }

    function b(e, n, r) {
      var i, s;
      return i = e.length, s = [function(e, t, r) {
        return l(e, function(e) {
          return l(t, function(t) {
            return n(e, t, r, i)
          })
        })
      }], arguments.length > 2 && s.push(r), t.apply(e, s)
    }

    function w(e, t, n) {
      var r = arguments.length > 2;
      return l(e, function(e) {
        return r && (e = n), t.resolve(e), e
      }, function(e) {
        return t.reject(e), o(e)
      }, t.progress)
    }

    function E(e, t) {
      var n, r = t.length;
      while (r > e) {
        n = t[--r];
        if (n != null && typeof n != "function") throw new Error("callback is not a function")
      }
    }

    function S() {}
    var e, t, n, r;
    return l.defer = a, l.reject = u, l.isPromise = f, l.all = p, l.some = h, l.any = v, l.map = m, l.reduce = y, l.chain = w, e = Object.freeze || function(e) {
      return e
    }, i.prototype = e({
      always: function(e, t) {
        return this.then(e, e, t)
      },
      otherwise: function(e) {
        return this.then(r, e)
      }
    }), n = [].slice, t = [].reduce || function(e) {
      var t, n, r, i, s;
      s = 0, t = Object(this), i = t.length >>> 0, n = arguments;
      if (n.length <= 1)
        for (;;) {
          if (s in t) {
            r = t[s++];
            break
          }
          if (++s >= i) throw new TypeError
        } else r = n[1];
      for (; s < i; ++s) s in t && (r = e(r, t[s], s, t));
      return r
    }, l
  })
})(typeof define == "function" ? define : function(e) {
  typeof module != "undefined" ? module.exports = e() : jQuery.mapster_when = e()
}),
function($) {
  $.fn.mapster = function(e) {
    var t = $.mapster.impl;
    if ($.isFunction(t[e])) return t[e].apply(this, Array.prototype.slice.call(arguments, 1));
    if (typeof e == "object" || !e) return t.bind.apply(this, arguments);
    $.error("Method " + e + " does not exist on jQuery.mapster")
  }, $.mapster = {
    version: "1.2.10",
    render_defaults: {
      isSelectable: !0,
      isDeselectable: !0,
      fade: !1,
      fadeDuration: 150,
      fill: !0,
      fillColor: "000000",
      fillColorMask: "FFFFFF",
      fillOpacity: .7,
      highlight: !0,
      stroke: !1,
      strokeColor: "ff0000",
      strokeOpacity: 1,
      strokeWidth: 1,
      includeKeys: "",
      altImage: null,
      altImageId: null,
      altImages: {}
    },
    defaults: {
      clickNavigate: !1,
      wrapClass: null,
      wrapCss: null,
      onGetList: null,
      sortList: !1,
      listenToList: !1,
      mapKey: "",
      mapValue: "",
      singleSelect: !1,
      listKey: "value",
      listSelectedAttribute: "selected",
      listSelectedClass: null,
      onClick: null,
      onMouseover: null,
      onMouseout: null,
      mouseoutDelay: 0,
      onStateChange: null,
      boundList: null,
      onConfigured: null,
      configTimeout: 3e4,
      noHrefIsMask: !0,
      scaleMap: !0,
      safeLoad: !1,
      areas: []
    },
    shared_defaults: {
      render_highlight: {
        fade: !0
      },
      render_select: {
        fade: !1
      },
      staticState: null,
      selected: null
    },
    area_defaults: {
      includeKeys: "",
      isMask: !1
    },
    canvas_style: {
      position: "absolute",
      left: 0,
      top: 0,
      padding: 0,
      border: 0
    },
    hasCanvas: null,
    isTouch: null,
    map_cache: [],
    hooks: {},
    addHook: function(e, t) {
      this.hooks[e] = (this.hooks[e] || []).push(t)
    },
    callHooks: function(e, t) {
      $.each(this.hooks[e] || [], function(e, n) {
        n.apply(t)
      })
    },
    utils: {
      when: $.mapster_when,
      defer: $.mapster_when.defer,
      subclass: function(e, t) {
        var n = function() {
          var n = this,
            r = Array.prototype.slice.call(arguments, 0);
          n.base = e.prototype, n.base.init = function() {
            e.prototype.constructor.apply(n, r)
          }, t.apply(n, r)
        };
        return n.prototype = new e, n.prototype.constructor = n, n
      },
      asArray: function(e) {
        return e.constructor === Array ? e : this.split(e)
      },
      split: function(e, t) {
        var n, r, i = e.split(",");
        for (n = 0; n < i.length; n++) r = $.trim(i[n]), r === "" ? i.splice(n, 1) : i[n] = t ? t(r) : r;
        return i
      },
      updateProps: function(e, t) {
        var n, r = e || {},
          i = $.isEmptyObject(r) ? t : e;
        return n = [], $.each(i, function(e) {
          n.push(e)
        }), $.each(Array.prototype.slice.call(arguments, 1), function(e, t) {
          $.each(t || {}, function(e) {
            if (!n || $.inArray(e, n) >= 0) {
              var i = t[e];
              $.isPlainObject(i) ? r[e] = $.extend(r[e] || {}, i) : i && i.constructor === Array ? r[e] = i.slice(0) : typeof i != "undefined" && (r[e] = t[e])
            }
          })
        }), r
      },
      isElement: function(e) {
        return typeof HTMLElement == "object" ? e instanceof HTMLElement : e && typeof e == "object" && e.nodeType === 1 && typeof e.nodeName == "string"
      },
      indexOfProp: function(e, t, n) {
        var r = e.constructor === Array ? -1 : null;
        return $.each(e, function(e, i) {
          if (i && (t ? i[t] : i) === n) return r = e, !1
        }), r
      },
      boolOrDefault: function(e, t) {
        return this.isBool(e) ? e : t || !1
      },
      isBool: function(e) {
        return typeof e == "boolean"
      },
      isUndef: function(e) {
        return typeof e == "undefined"
      },
      ifFunction: function(e, t, n) {
        $.isFunction(e) && e.call(t, n)
      },
      size: function(e, t) {
        var n = $.mapster.utils;
        return {
          width: t ? e.width || e.naturalWidth : n.imgWidth(e, !0),
          height: t ? e.height || e.naturalHeight : n.imgHeight(e, !0),
          complete: function() {
            return !!this.height && !!this.width
          }
        }
      },
      setOpacity: function(e, t) {
        $.mapster.hasCanvas() ? e.style.opacity = t : $(e).each(function(e, n) {
          typeof n.opacity != "undefined" ? n.opacity = t : $(n).css("opacity", t)
        })
      },
      fader: function() {
        var e = {},
          t = 0,
          n = function(r, i, s, o) {
            var u, a = o / 15,
              f, l = $.mapster.utils;
            if (typeof r == "number") {
              f = e[r];
              if (!f) return
            } else u = l.indexOfProp(e, null, r), u && delete e[u], e[++t] = f = r, r = t;
            s = s || 1, i = i + s / a > s - .01 ? s : i + s / a, l.setOpacity(f, i), i < s && setTimeout(function() {
              n(r, i, s, o)
            }, 15)
          };
        return n
      }()
    },
    getBoundList: function(e, t) {
      if (!e.boundList) return null;
      var n, r, i = $(),
        s = $.mapster.utils.split(t);
      return e.boundList.each(function(t, o) {
        for (n = 0; n < s.length; n++) r = s[n], $(o).is("[" + e.listKey + '="' + r + '"]') && (i = i.add(o))
      }), i
    },
    setBoundListProperties: function(e, t, n) {
      t.each(function(t, r) {
        e.listSelectedClass && (n ? $(r).addClass(e.listSelectedClass) : $(r).removeClass(e.listSelectedClass)), e.listSelectedAttribute && $(r).attr(e.listSelectedAttribute, n)
      })
    },
    getMapDataIndex: function(e) {
      var t, n;
      switch (e.tagName && e.tagName.toLowerCase()) {
        case "area":
          n = $(e).parent().attr("name"), t = $("img[usemap='#" + n + "']")[0];
          break;
        case "img":
          t = e
      }
      return t ? this.utils.indexOfProp(this.map_cache, "image", t) : -1
    },
    getMapData: function(e) {
      var t = this.getMapDataIndex(e.length ? e[0] : e);
      if (t >= 0) return t >= 0 ? this.map_cache[t] : null
    },
    queueCommand: function(e, t, n, r) {
      return e ? !e.complete || e.currentAction ? (e.commands.push({
        that: t,
        command: n,
        args: r
      }), !0) : !1 : !1
    },
    unload: function() {
      this.impl.unload(), this.utils = null, this.impl = null, $.fn.mapster = null, $.mapster = null, $("*").unbind()
    }
  };
  var m = $.mapster,
    u = m.utils,
    ap = Array.prototype;
  $.each(["width", "height"], function(e, t) {
    var n = t.substr(0, 1).toUpperCase() + t.substr(1);
    u["img" + n] = function(e, r) {
      return (r ? $(e)[t]() : 0) || e[t] || e["natural" + n] || e["client" + n] || e["offset" + n]
    }
  }), m.Method = function(e, t, n, r) {
    var i = this;
    i.name = r.name, i.output = e, i.input = e, i.first = r.first || !1, i.args = r.args ? ap.slice.call(r.args, 0) : [], i.key = r.key, i.func_map = t, i.func_area = n, i.name = r.name, i.allowAsync = r.allowAsync || !1
  }, m.Method.prototype = {
    constructor: m.Method,
    go: function() {
      var e, t, n, r, i, s = this.input,
        o = [],
        u = this;
      r = s.length;
      for (e = 0; e < r; e++) {
        t = $.mapster.getMapData(s[e]);
        if (t) {
          if (!u.allowAsync && m.queueCommand(t, u.input, u.name, u.args)) {
            this.first && (i = "");
            continue
          }
          n = t.getData(s[e].nodeName === "AREA" ? s[e] : this.key), n ? $.inArray(n, o) < 0 && o.push(n) : i = this.func_map.apply(t, u.args);
          if (this.first || typeof i != "undefined") break
        }
      }
      return $(o).each(function(e, t) {
        i = u.func_area.apply(t, u.args)
      }), typeof i != "undefined" ? i : this.output
    }
  }, $.mapster.impl = function() {
    function hasVml() {
      var e = $("<div />").appendTo("body");
      e.html('<v:shape id="vml_flag1" adj="1" />');
      var t = e[0].firstChild;
      t.style.behavior = "url(#default#VML)";
      var n = t ? typeof t.adj == "object" : !0;
      return e.remove(), n
    }

    function namespaces() {
      return typeof document.namespaces == "object" ? document.namespaces : null
    }

    function hasCanvas() {
      var e = namespaces();
      return e && e.g_vml_ ? !1 : $("<canvas />")[0].getContext ? !0 : !1
    }

    function merge_areas(e, t) {
      var n, r, i = e.options.areas;
      t && $.each(t, function(t, s) {
        if (!s || !s.key) return;
        r = u.indexOfProp(i, "key", s.key), r >= 0 ? $.extend(i[r], s) : i.push(s), n = e.getDataForKey(s.key), n && $.extend(n.options, s)
      })
    }

    function merge_options(e, t) {
      var n = u.updateProps({}, t);
      delete n.areas, u.updateProps(e.options, n), merge_areas(e, t.areas), u.updateProps(e.area_options, e.options)
    }
    var me = {},
      addMap = function(e) {
        return m.map_cache.push(e) - 1
      },
      removeMap = function(e) {
        m.map_cache.splice(e.index, 1);
        for (var t = m.map_cache.length - 1; t >= this.index; t--) m.map_cache[t].index--
      };
    return me.get = function(e) {
      var t = m.getMapData(this);
      if (!t || !t.complete) throw "Can't access data until binding complete.";
      return (new m.Method(this, function() {
        return this.getSelected()
      }, function() {
        return this.isSelected()
      }, {
        name: "get",
        args: arguments,
        key: e,
        first: !0,
        allowAsync: !0,
        defaultReturn: ""
      })).go()
    }, me.data = function(e) {
      return (new m.Method(this, null, function() {
        return this
      }, {
        name: "data",
        args: arguments,
        key: e
      })).go()
    }, me.highlight = function(e) {
      return (new m.Method(this, function() {
        if (e !== !1) {
          var t = this.highlightId;
          return t >= 0 ? this.data[t].key : null
        }
        this.ensureNoHighlight()
      }, function() {
        this.highlight()
      }, {
        name: "highlight",
        args: arguments,
        key: e,
        first: !0
      })).go()
    }, me.keys = function(e, t) {
      function i(e) {
        var r, i = [];
        t ? (r = e.areas(), $.each(r, function(e, t) {
          i = i.concat(t.keys)
        })) : i.push(e.key), $.each(i, function(e, t) {
          $.inArray(t, n) < 0 && n.push(t)
        })
      }
      var n = [],
        r = m.getMapData(this);
      if (!r || !r.complete) throw "Can't access data until binding complete.";
      return !r || !r.complete ? "" : (typeof e == "string" ? t ? i(r.getDataForKey(e)) : n = [r.getKeysForGroup(e)] : (t = e, this.each(function(e, t) {
        t.nodeName === "AREA" && i(r.getDataForArea(t))
      })), n.join(","))
    }, me.select = function() {
      me.set.call(this, !0)
    }, me.deselect = function() {
      me.set.call(this, !1)
    }, me.set = function(e, t, n) {
      function f(t) {
        if (t) switch (e) {
          case !0:
            t.select(s);
            break;
          case !1:
            t.deselect(!0);
            break;
          default:
            t.toggle(s)
        }
      }

      function l(e) {
        e && $.inArray(e, a) < 0 && (a.push(e), o += (o === "" ? "" : ",") + e.key)
      }

      function c(t) {
        $.each(a, function(e, t) {
          f(t)
        }), e || t.removeSelectionFinish(), t.options.boundList && m.setBoundListProperties(t.options, m.getBoundList(t.options, o), e)
      }
      var r, i, s = n,
        o, a;
      return this.filter("img,area").each(function(n, f) {
        var h;
        i = m.getMapData(f), i !== r && (r && c(r), a = [], o = ""), i && (h = "", f.nodeName.toUpperCase() === "IMG" ? m.queueCommand(i, $(f), "set", [e, t, s]) || (t instanceof Array ? t.length && (h = t.join(",")) : h = t, h && $.each(u.split(h), function(e, t) {
          l(i.getDataForKey(t.toString())), r = i
        })) : (s = t, m.queueCommand(i, $(f), "set", [e, s]) || (l(i.getDataForArea(f)), r = i)))
      }), i && c(i), this
    }, me.unbind = function(e) {
      return (new m.Method(this, function() {
        this.clearEvents(), this.clearMapData(e), removeMap(this)
      }, null, {
        name: "unbind",
        args: arguments
      })).go()
    }, me.rebind = function(e) {
      return (new m.Method(this, function() {
        var t = this;
        t.complete = !1, t.configureOptions(e), t.bindImages().then(function() {
          t.buildDataset(!0), t.complete = !0
        })
      }, null, {
        name: "rebind",
        args: arguments
      })).go()
    }, me.get_options = function(e, t) {
      var n = u.isBool(e) ? e : t;
      return (new m.Method(this, function() {
        var e = $.extend({}, this.options);
        return n && (e.render_select = u.updateProps({}, m.render_defaults, e, e.render_select), e.render_highlight = u.updateProps({}, m.render_defaults, e, e.render_highlight)), e
      }, function() {
        return n ? this.effectiveOptions() : this.options
      }, {
        name: "get_options",
        args: arguments,
        first: !0,
        allowAsync: !0,
        key: e
      })).go()
    }, me.set_options = function(e) {
      return (new m.Method(this, function() {
        merge_options(this, e)
      }, null, {
        name: "set_options",
        args: arguments
      })).go()
    }, me.unload = function() {
      var e;
      for (e = m.map_cache.length - 1; e >= 0; e--) m.map_cache[e] && me.unbind.call($(m.map_cache[e].image));
      me.graphics = null
    }, me.snapshot = function() {
      return (new m.Method(this, function() {
        $.each(this.data, function(e, t) {
          t.selected = !1
        }), this.base_canvas = this.graphics.createVisibleCanvas(this), $(this.image).before(this.base_canvas)
      }, null, {
        name: "snapshot"
      })).go()
    }, me.state = function() {
      var e, t = null;
      return $(this).each(function(n, r) {
        if (r.nodeName === "IMG") return e = m.getMapData(r), e && (t = e.state()), !1
      }), t
    }, me.bind = function(e) {
      return this.each(function(t, n) {
        var r, i, s, o;
        r = $(n), o = m.getMapData(n);
        if (o) {
          me.unbind.apply(r);
          if (!o.complete) return r.bind(), !0;
          o = null
        }
        s = this.getAttribute("usemap"), i = s && $('map[name="' + s.substr(1) + '"]');
        if (!(r.is("img") && s && i.size() > 0)) return !0;
        r.css("border", 0), o || (o = new m.MapData(this, e), o.index = addMap(o), o.map = i, o.bindImages().then(function() {
          o.initialize()
        }))
      })
    }, me.init = function(e) {
      var t, n;
      m.hasCanvas = function() {
        return u.isBool(m.hasCanvas.value) || (m.hasCanvas.value = u.isBool(e) ? e : hasCanvas()), m.hasCanvas.value
      }, m.hasVml = function() {
        if (!u.isBool(m.hasVml.value)) {
          var e = namespaces();
          e && !e.v && (e.add("v", "urn:schemas-microsoft-com:vml"), t = document.createStyleSheet(), n = ["shape", "rect", "oval", "circ", "fill", "stroke", "imagedata", "group", "textbox"], $.each(n, function(e, n) {
            t.addRule("v\\:" + n, "behavior: url(#default#VML); antialias:true")
          })), m.hasVml.value = hasVml()
        }
        return m.hasVml.value
      }, m.isTouch = !!document.documentElement.ontouchstart, $.extend(m.defaults, m.render_defaults, m.shared_defaults), $.extend(m.area_defaults, m.render_defaults, m.shared_defaults)
    }, me.test = function(obj) {
      return eval(obj)
    }, me
  }(), $.mapster.impl.init()
}(jQuery),
function(e) {
  function o(t, n, r) {
    var i = t,
      s = i.map_data,
      o = r.isMask;
    e.each(n.areas(), function(e, t) {
      r.isMask = o || t.nohref && s.options.noHrefIsMask, i.addShape(t, r)
    }), r.isMask = o
  }

  function u(e) {
    return Math.max(0, Math.min(parseInt(e, 16), 255))
  }

  function a(e, t) {
    return "rgba(" + u(e.substr(0, 2)) + "," + u(e.substr(2, 2)) + "," + u(e.substr(4, 2)) + "," + t + ")"
  }

  function f() {}
  var t, n = e.mapster,
    r = n.utils,
    i, s;
  n.Graphics = function(e) {
    var t = this;
    t.active = !1, t.canvas = null, t.width = 0, t.height = 0, t.shapes = [], t.masks = [], t.map_data = e
  }, t = n.Graphics.prototype = {
    constructor: n.Graphics,
    begin: function(t, n) {
      var r = e(t);
      this.elementName = n, this.canvas = t, this.width = r.width(), this.height = r.height(), this.shapes = [], this.masks = [], this.active = !0
    },
    addShape: function(e, t) {
      var n = t.isMask ? this.masks : this.shapes;
      n.push({
        mapArea: e,
        options: t
      })
    },
    createVisibleCanvas: function(t) {
      return e(this.createCanvasFor(t)).addClass("mapster_el").css(n.canvas_style)[0]
    },
    addShapeGroup: function(t, i, s) {
      var u = this,
        a, f, l, c = this.map_data,
        h = t.effectiveRenderOptions(i);
      s && e.extend(h, s), i === "select" ? (f = "static_" + t.areaId.toString(), l = c.base_canvas) : l = c.overlay_canvas, u.begin(l, f), h.includeKeys && (a = r.split(h.includeKeys), e.each(a, function(e, t) {
        var n = c.getDataForKey(t.toString());
        o(u, n, n.effectiveRenderOptions(i))
      })), o(u, t, h), u.render(), h.fade && r.fader(n.hasCanvas() ? l : e(l).find("._fill").not(".mapster_mask"), 0, n.hasCanvas() ? 1 : h.fillOpacity, h.fadeDuration)
    }
  }, i = {
    renderShape: function(e, t, n) {
      var r, i = t.coords(null, n);
      switch (t.shape) {
        case "rect":
          e.rect(i[0], i[1], i[2] - i[0], i[3] - i[1]);
          break;
        case "poly":
          e.moveTo(i[0], i[1]);
          for (r = 2; r < t.length; r += 2) e.lineTo(i[r], i[r + 1]);
          e.lineTo(i[0], i[1]);
          break;
        case "circ":
        case "circle":
          e.arc(i[0], i[1], i[2], 0, Math.PI * 2, !1)
      }
    },
    addAltImage: function(e, t, n, r) {
      e.beginPath(), this.renderShape(e, n), e.closePath(), e.clip(), e.globalAlpha = r.altImageOpacity || r.fillOpacity, e.drawImage(t, 0, 0, n.owner.scaleInfo.width, n.owner.scaleInfo.height)
    },
    render: function() {
      var t, n, r = this,
        i = r.map_data,
        s = r.masks.length,
        o = r.createCanvasFor(i),
        u = o.getContext("2d"),
        f = r.canvas.getContext("2d");
      return s && (t = r.createCanvasFor(i), n = t.getContext("2d"), n.clearRect(0, 0, t.width, t.height), e.each(r.masks, function(e, t) {
        n.save(), n.beginPath(), r.renderShape(n, t.mapArea), n.closePath(), n.clip(), n.lineWidth = 0, n.fillStyle = "#000", n.fill(), n.restore()
      })), e.each(r.shapes, function(e, t) {
        u.save(), t.options.fill && (t.options.altImageId ? r.addAltImage(u, i.images[t.options.altImageId], t.mapArea, t.options) : (u.beginPath(), r.renderShape(u, t.mapArea), u.closePath(), u.fillStyle = a(t.options.fillColor, t.options.fillOpacity), u.fill())), u.restore()
      }), e.each(r.shapes.concat(r.masks), function(e, t) {
        var n = t.options.strokeWidth === 1 ? .5 : 0;
        t.options.stroke && (u.save(), u.strokeStyle = a(t.options.strokeColor, t.options.strokeOpacity), u.lineWidth = t.options.strokeWidth, u.beginPath(), r.renderShape(u, t.mapArea, n), u.closePath(), u.stroke(), u.restore())
      }), s ? (n.globalCompositeOperation = "source-out", n.drawImage(o, 0, 0), f.drawImage(t, 0, 0)) : f.drawImage(o, 0, 0), r.active = !1, r.canvas
    },
    createCanvasFor: function(t) {
      return e('<canvas width="' + t.scaleInfo.width + '" height="' + t.scaleInfo.height + '"></canvas>')[0]
    },
    clearHighlight: function() {
      var e = this.map_data.overlay_canvas;
      e.getContext("2d").clearRect(0, 0, e.width, e.height)
    },
    refreshSelections: function() {
      var t, n = this.map_data;
      t = n.base_canvas, n.base_canvas = this.createVisibleCanvas(n), e(n.base_canvas).hide(), e(t).before(n.base_canvas), n.redrawSelections(), e(n.base_canvas).show(), e(t).remove()
    }
  }, s = {
    renderShape: function(t, n, r) {
      var i = this,
        s, o, u, a, f, l, c, h = t.coords();
      f = i.elementName ? 'name="' + i.elementName + '" ' : "", l = r ? 'class="' + r + '" ' : "", a = '<v:fill color="#' + n.fillColor + '" class="_fill" opacity="' + (n.fill ? n.fillOpacity : 0) + '" /><v:stroke class="_fill" opacity="' + n.strokeOpacity + '"/>', o = n.stroke ? " strokeweight=" + n.strokeWidth + ' stroked="t" strokecolor="#' + n.strokeColor + '"' : ' stroked="f"', s = n.fill ? ' filled="t"' : ' filled="f"';
      switch (t.shape) {
        case "rect":
          c = "<v:rect " + l + f + s + o + ' style="zoom:1;margin:0;padding:0;display:block;position:absolute;left:' + h[0] + "px;top:" + h[1] + "px;width:" + (h[2] - h[0]) + "px;height:" + (h[3] - h[1]) + 'px;">' + a + "</v:rect>";
          break;
        case "poly":
          c = "<v:shape " + l + f + s + o + ' coordorigin="0,0" coordsize="' + i.width + "," + i.height + '" path="m ' + h[0] + "," + h[1] + " l " + h.slice(2).join(",") + ' x e" style="zoom:1;margin:0;padding:0;display:block;position:absolute;top:0px;left:0px;width:' + i.width + "px;height:" + i.height + 'px;">' + a + "</v:shape>";
          break;
        case "circ":
        case "circle":
          c = "<v:oval " + l + f + s + o + ' style="zoom:1;margin:0;padding:0;display:block;position:absolute;left:' + (h[0] - h[2]) + "px;top:" + (h[1] - h[2]) + "px;width:" + h[2] * 2 + "px;height:" + h[2] * 2 + 'px;">' + a + "</v:oval>"
      }
      return u = e(c), e(i.canvas).append(u), u
    },
    render: function() {
      var t, n = this;
      return e.each(this.shapes, function(e, t) {
        n.renderShape(t.mapArea, t.options)
      }), this.masks.length && e.each(this.masks, function(e, i) {
        t = r.updateProps({}, i.options, {
          fillOpacity: 1,
          fillColor: i.options.fillColorMask
        }), n.renderShape(i.mapArea, t, "mapster_mask")
      }), this.active = !1, this.canvas
    },
    createCanvasFor: function(t) {
      var n = t.scaleInfo.width,
        r = t.scaleInfo.height;
      return e('<var width="' + n + '" height="' + r + '" style="zoom:1;overflow:hidden;display:block;width:' + n + "px;height:" + r + 'px;"></var>')[0]
    },
    clearHighlight: function() {
      e(this.map_data.overlay_canvas).children().remove()
    },
    removeSelections: function(t) {
      t >= 0 ? e(this.map_data.base_canvas).find('[name="static_' + t.toString() + '"]').remove() : e(this.map_data.base_canvas).children().remove()
    }
  }, e.each(["renderShape", "addAltImage", "render", "createCanvasFor", "clearHighlight", "removeSelections", "refreshSelections"], function(e, r) {
    t[r] = function(e) {
      return function() {
        return t[e] = (n.hasCanvas() ? i[e] : s[e]) || f, t[e].apply(this, arguments)
      }
    }(r)
  })
}(jQuery),
function(e) {
  var t = e.mapster,
    n = t.utils,
    r = [];
  t.MapImages = function(e) {
    this.owner = e, this.clear()
  }, t.MapImages.prototype = {
    constructor: t.MapImages,
    slice: function() {
      return r.slice.apply(this, arguments)
    },
    splice: function() {
      r.slice.apply(this.status, arguments);
      var e = r.slice.apply(this, arguments);
      return e
    },
    complete: function() {
      return e.inArray(!1, this.status) < 0
    },
    _add: function(e) {
      var t = r.push.call(this, e) - 1;
      return this.status[t] = !1, t
    },
    indexOf: function(t) {
      return e.inArray(t, this)
    },
    clear: function() {
      var t = this;
      t.ids && t.ids.length > 0 && e.each(t.ids, function(e, n) {
        delete t[n]
      }), t.ids = [], t.length = 0, t.status = [], t.splice(0)
    },
    add: function(t, n) {
      var r, i, s = this;
      if (!t) return;
      if (typeof t == "string") {
        i = t, t = s[i];
        if (typeof t == "object") return s.indexOf(t);
        t = e("<img />").addClass("mapster_el").hide(), r = s._add(t[0]), t.bind("load", function(e) {
          s.imageLoaded.call(s, e)
        }).bind("error", function(e) {
          s.imageLoadError.call(s, e)
        }), t.attr("src", i)
      } else r = s._add(e(t)[0]);
      if (n) {
        if (this[n]) throw n + " is already used or is not available as an altImage alias.";
        s.ids.push(n), s[n] = s[r]
      }
      return r
    },
    bind: function(e) {
      var t = this,
        r, i = t.owner.options.configTimeout / 200,
        s = function() {
          var e;
          e = t.length;
          while (e-- > 0)
            if (!t.isLoaded(e)) break;
          t.complete() ? t.resolve() : i-- > 0 ? t.imgTimeout = window.setTimeout(function() {
            s.call(t, !0)
          }, 50) : t.imageLoadError.call(t)
        };
      return r = t.deferred = n.defer(), s(), r
    },
    resolve: function() {
      var e = this,
        t = e.deferred;
      t && (e.deferred = null, t.resolve())
    },
    imageLoaded: function(t) {
      var n = this,
        r = n.indexOf(t.target);
      r >= 0 && (n.status[r] = !0, e.inArray(!1, n.status) < 0 && n.resolve())
    },
    imageLoadError: function(e) {
      clearTimeout(this.imgTimeout), this.triesLeft = 0;
      var t = e ? "The image " + e.target.src + " failed to load." : "The images never seemed to finish loading. You may just need to increase the configTimeout if images could take a long time to load.";
      throw t
    },
    isLoaded: function(e) {
      var t, r = this,
        i = r.status;
      return i[e] ? !0 : (t = r[e], typeof t.complete != "undefined" ? i[e] = t.complete : i[e] = !!n.imgWidth(t), i[e])
    }
  }
}(jQuery),
function(e) {
  function r(t) {
    e.extend(t, {
      complete: !1,
      map: null,
      base_canvas: null,
      overlay_canvas: null,
      commands: [],
      data: [],
      mapAreas: [],
      _xref: {},
      highlightId: -1,
      currentAreaId: -1,
      _tooltip_events: [],
      scaleInfo: null,
      index: -1,
      activeAreaEvent: null
    })
  }

  function i(e) {
    return [e, e.render_highlight, e.render_select]
  }

  function s(r) {
    var s = r.options,
      o = r.images;
    t.hasCanvas() && (e.each(s.altImages || {}, function(e, t) {
      o.add(t, e)
    }), e.each([s].concat(s.areas), function(t, n) {
      e.each(i(n), function(e, t) {
        t && t.altImage && (t.altImageId = o.add(t.altImage))
      })
    })), r.area_options = n.updateProps({}, t.area_defaults, s)
  }

  function o(e, t, r, i) {
    function s(t) {
      e.currentAreaId !== t && e.highlightId >= 0 && i.resolve()
    }
    i = i || n.when.defer(), e.activeAreaEvent && (window.clearTimeout(e.activeAreaEvent), e.activeAreaEvent = 0);
    if (t < 0) return;
    return r.owner.currentAction || t ? e.activeAreaEvent = window.setTimeout(function() {
      return function() {
        o(e, 0, r, i)
      }
    }(r), t || 100) : s(r.areaId), i
  }

  function u(e) {
    t.hasCanvas() || this.blur(), e.preventDefault()
  }

  function a(t, n) {
    var r = t.getAllDataForArea(this),
      i = r.length ? r[0] : null;
    if (!i || i.isNotRendered() || i.owner.currentAction) return;
    if (t.currentAreaId === i.areaId) return;
    t.highlightId !== i.areaId && (t.clearEffects(), i.highlight(), t.options.showToolTip && e.each(r, function(e, t) {
      t.effectiveOptions().toolTip && t.showToolTip()
    })), t.currentAreaId = i.areaId, e.isFunction(t.options.onMouseover) && t.options.onMouseover.call(this, {
      e: n,
      options: i.effectiveOptions(),
      key: i.key,
      selected: i.isSelected()
    })
  }

  function f(t, n) {
    var r, i = t.getDataForArea(this),
      s = t.options;
    if (t.currentAreaId < 0 || !i) return;
    r = t.getDataForArea(n.relatedTarget);
    if (r === i) return;
    t.currentAreaId = -1, i.area = null, o(t, s.mouseoutDelay, i).then(t.clearEffects), e.isFunction(s.onMouseout) && s.onMouseout.call(this, {
      e: n,
      options: s,
      key: i.key,
      selected: i.isSelected()
    })
  }

  function l(t) {
    var n = t.options;
    t.ensureNoHighlight(), n.toolTipClose && e.inArray("area-mouseout", n.toolTipClose) >= 0 && t.activeToolTip && t.clearToolTip()
  }

  function c(r, i) {
    function v(u) {
      var p, g;
      l = u.isSelectable() && (u.isDeselectable() || !u.isSelected()), l ? f = !u.isSelected() : f = u.isSelected(), a = t.getBoundList(d, u.key);
      if (e.isFunction(d.onClick)) {
        c = d.onClick.call(h, {
          e: i,
          listTarget: a,
          key: u.key,
          selected: f
        });
        if (n.isBool(c)) {
          if (!c) return !1;
          g = e(u.area).attr("href");
          if (g !== "#") return window.location.href = g, !1
        }
      }
      l && (s = u.toggle()), d.boundList && d.boundList.length > 0 && t.setBoundListProperties(d, a, u.isSelected()), p = u.effectiveOptions(), p.includeKeys && (o = n.split(p.includeKeys), e.each(o, function(e, t) {
        var n = r.getDataForKey(t.toString());
        n.options.isMask || v(n)
      }))
    }
    var s, o, a, f, l, c, h = this,
      p = r.getDataForArea(this),
      d = r.options;
    u.call(this, i);
    if (d.clickNavigate && p.href) {
      window.location.href = p.href;
      return
    }
    p && !p.owner.currentAction && (d = r.options, v(p))
  }
  var t = e.mapster,
    n = t.utils;
  t.MapData = function(e, n) {
    var i = this;
    i.image = e, i.images = new t.MapImages(i), i.graphics = new t.Graphics(i), i.imgCssText = e.style.cssText || null, r(i), i.configureOptions(n), i.mouseover = function(e) {
      a.call(this, i, e)
    }, i.mouseout = function(e) {
      f.call(this, i, e)
    }, i.click = function(e) {
      c.call(this, i, e)
    }, i.clearEffects = function(e) {
      l.call(this, i, e)
    }
  }, t.MapData.prototype = {
    constructor: t.MapData,
    configureOptions: function(e) {
      this.options = n.updateProps({}, t.defaults, e)
    },
    bindImages: function() {
      var e = this,
        t = e.images;
      return t.length > 2 ? t.splice(2) : t.length === 0 && (t.add(e.image), t.add(e.image.src)), s(e), e.images.bind()
    },
    isActive: function() {
      return !this.complete || this.currentAction
    },
    state: function() {
      return {
        complete: this.complete,
        resizing: this.currentAction === "resizing",
        zoomed: this.zoomed,
        zoomedArea: this.zoomedArea,
        scaleInfo: this.scaleInfo
      }
    },
    wrapId: function() {
      return "mapster_wrap_" + this.index
    },
    _idFromKey: function(e) {
      return typeof e == "string" && this._xref.hasOwnProperty(e) ? this._xref[e] : -1
    },
    getSelected: function() {
      var t = "";
      return e.each(this.data, function(e, n) {
        n.isSelected() && (t += (t ? "," : "") + this.key)
      }), t
    },
    getAllDataForArea: function(t, r) {
      var i, s, o, u = this,
        a = e(t).filter("area").attr(u.options.mapKey);
      if (a) {
        o = [], a = n.split(a);
        for (i = 0; i < (r || a.length); i++) s = u.data[u._idFromKey(a[i])], s.area = t.length ? t[0] : t, o.push(s)
      }
      return o
    },
    getDataForArea: function(e) {
      var t = this.getAllDataForArea(e, 1);
      return t ? t[0] || null : null
    },
    getDataForKey: function(e) {
      return this.data[this._idFromKey(e)]
    },
    getKeysForGroup: function(e) {
      var t = this.getDataForKey(e);
      return t ? t.isPrimary ? t.key : this.getPrimaryKeysForMapAreas(t.areas()).join(",") : ""
    },
    getPrimaryKeysForMapAreas: function(t) {
      var n = [];
      return e.each(t, function(t, r) {
        e.inArray(r.keys[0], n) < 0 && n.push(r.keys[0])
      }), n
    },
    getData: function(e) {
      return typeof e == "string" ? this.getDataForKey(e) : e && e.mapster || n.isElement(e) ? this.getDataForArea(e) : null
    },
    ensureNoHighlight: function() {
      var e;
      this.highlightId >= 0 && (this.graphics.clearHighlight(), e = this.data[this.highlightId], e.changeState("highlight", !1), this.setHighlightId(-1))
    },
    setHighlightId: function(e) {
      this.highlightId = e
    },
    clearSelections: function() {
      e.each(this.data, function(e, t) {
        t.selected && t.deselect(!0)
      }), this.removeSelectionFinish()
    },
    setAreaOptions: function(e) {
      var t, r, i;
      e = e || [];
      for (t = e.length - 1; t >= 0; t--) r = e[t], r && (i = this.getDataForKey(r.key), i && (n.updateProps(i.options, r), n.isBool(r.selected) && (i.selected = r.selected)))
    },
    drawSelections: function(e) {
      var t, r = n.asArray(e);
      for (t = r.length - 1; t >= 0; t--) this.data[r[t]].drawSelection()
    },
    redrawSelections: function() {
      e.each(this.data, function(e, t) {
        t.isSelectedOrStatic() && t.drawSelection()
      })
    },
    initialize: function() {
      var r, i, s, o, u, a, f, l, c, h, p, d, v = this,
        g = v.options;
      if (v.complete) return;
      c = e(v.image), u = c.parent().attr("id"), u && u.length >= 12 && u.substring(0, 12) === "mapster_wrap" ? (o = c.parent(), o.attr("id", v.wrapId())) : (o = e('<div id="' + v.wrapId() + '"></div>'), g.wrapClass && (g.wrapClass === !0 ? o.addClass(c[0].className) : o.addClass(g.wrapClass))), v.wrapper = o, v.scaleInfo = d = n.scaleMap(v.images[0], v.images[1], g.scaleMap), v.base_canvas = i = v.graphics.createVisibleCanvas(v), v.overlay_canvas = s = v.graphics.createVisibleCanvas(v), r = e(v.images[1]).addClass("mapster_el " + v.images[0].className).attr({
        id: null,
        usemap: null
      }), l = n.size(v.images[0]), l.complete && r.css({
        width: l.width,
        height: l.height
      }), v.buildDataset(), a = {
        display: "block",
        position: "relative",
        padding: 0,
        width: d.width,
        height: d.height
      }, g.wrapCss && e.extend(a, g.wrapCss), c.parent()[0] !== v.wrapper[0] && c.before(v.wrapper), o.css(a), e(v.images.slice(2)).hide();
      for (f = 1; f < v.images.length; f++) o.append(v.images[f]);
      o.append(i).append(s).append(c.css(t.canvas_style)), n.setOpacity(v.images[0], 0), e(v.images[1]).show(), n.setOpacity(v.images[1], 1), g.isSelectable && g.onGetList && (p = v.data.slice(0), g.sortList && (g.sortList === "desc" ? h = function(e, t) {
        return e === t ? 0 : e > t ? -1 : 1
      } : h = function(e, t) {
        return e === t ? 0 : e < t ? -1 : 1
      }, p.sort(function(e, t) {
        return e = e.value, t = t.value, h(e, t)
      })), v.options.boundList = g.onGetList.call(v.image, p)), v.complete = !0, v.processCommandQueue(), g.onConfigured && typeof g.onConfigured == "function" && g.onConfigured.call(c, !0)
    },
    buildDataset: function(n) {
      function E(e, n) {
        var r = new t.AreaData(y, e, n);
        return r.areaId = y._xref[e] = y.data.push(r) - 1, r.areaId
      }
      var r, i, s, o, u, a, f, l, c, h, p, d, v, g, y = this,
        b = y.options,
        w;
      y._xref = {}, y.data = [], n || (y.mapAreas = []), w = !b.mapKey, w && (b.mapKey = "data-mapster-key"), r = t.hasVml() ? "area" : w ? "area[coords]" : "area[" + b.mapKey + "]", i = e(y.map).find(r).unbind(".mapster");
      for (p = 0; p < i.length; p++) {
        o = 0, a = i[p], u = e(a);
        if (!a.coords) continue;
        w ? (f = String(p), u.attr("data-mapster-key", f)) : f = a.getAttribute(b.mapKey), n ? (l = y.mapAreas[u.data("mapster") - 1], l.configure(f)) : (l = new t.MapArea(y, a, f), y.mapAreas.push(l)), h = l.keys;
        for (s = h.length - 1; s >= 0; s--) c = h[s], b.mapValue && (d = u.attr(b.mapValue)), w ? (o = E(y.data.length, d), v = y.data[o], v.key = c = o.toString()) : (o = y._xref[c], o >= 0 ? (v = y.data[o], d && !y.data[o].value && (v.value = d)) : (o = E(c, d), v = y.data[o], v.isPrimary = s === 0)), l.areaDataXref.push(o), v.areasXref.push(p);
        g = u.attr("href"), g && g !== "#" && !v.href && (v.href = g), l.nohref || (u.bind("click.mapster", y.click), t.isTouch || u.bind("mouseover.mapster", y.mouseover).bind("mouseout.mapster", y.mouseout).bind("mousedown.mapster", y.mousedown)), u.data("mapster", p + 1)
      }
      y.setAreaOptions(b.areas), y.redrawSelections()
    },
    processCommandQueue: function() {
      var e, n = this;
      while (!n.currentAction && n.commands.length) e = n.commands[0], n.commands.splice(0, 1), t.impl[e.command].apply(e.that, e.args)
    },
    clearEvents: function() {
      e(this.map).find("area").unbind(".mapster"), e(this.images).unbind(".mapster")
    },
    _clearCanvases: function(t) {
      t || e(this.base_canvas).remove(), e(this.overlay_canvas).remove()
    },
    clearMapData: function(t) {
      var r = this;
      this._clearCanvases(t), e.each(this.data, function(e, t) {
        t.reset()
      }), this.data = null, t || (this.image.style.cssText = this.imgCssText, e(this.wrapper).before(this.image).remove()), r.images.clear(), this.image = null, n.ifFunction(this.clearTooltip, this)
    },
    removeSelectionFinish: function() {
      var e = this.graphics;
      e.refreshSelections(), e.clearHighlight()
    }
  }
}(jQuery),
function(e) {
  function r(t) {
    var n = this,
      r = n.owner;
    r.options.singleSelect && r.clearSelections(), n.isSelected() || (t && (n.optsCache = e.extend(n.effectiveRenderOptions("select"), t, {
      altImageId: r.images.add(t.altImage)
    })), n.drawSelection(), n.selected = !0, n.changeState("select", !0)), r.options.singleSelect && r.graphics.refreshSelections()
  }

  function i(e) {
    var t = this;
    t.selected = !1, t.changeState("select", !1), t.optsCache = null, t.owner.graphics.removeSelections(t.areaId), e || t.owner.removeSelectionFinish()
  }

  function s(e) {
    var t = this;
    return t.isSelected() ? t.deselect() : t.select(e), t.isSelected()
  }
  var t = e.mapster,
    n = t.utils;
  t.AreaData = function(t, n, r) {
    e.extend(this, {
      owner: t,
      key: n || "",
      isPrimary: !0,
      areaId: -1,
      href: "",
      value: r || "",
      options: {},
      selected: null,
      areasXref: [],
      area: null,
      optsCache: null
    })
  }, t.AreaData.prototype = {
    constuctor: t.AreaData,
    select: r,
    deselect: i,
    toggle: s,
    areas: function() {
      var e, t = [];
      for (e = 0; e < this.areasXref.length; e++) t.push(this.owner.mapAreas[this.areasXref[e]]);
      return t
    },
    coords: function(t) {
      var n = [];
      return e.each(this.areas(), function(e, r) {
        n = n.concat(r.coords(t))
      }), n
    },
    reset: function() {
      e.each(this.areas(), function(e, t) {
        t.reset()
      }), this.areasXref = [], this.options = null
    },
    isSelectedOrStatic: function() {
      var e = this.effectiveOptions();
      return n.isBool(e.staticState) ? e.staticState : this.isSelected()
    },
    isSelected: function() {
      return n.isBool(this.selected) ? this.selected : n.isBool(this.owner.area_options.selected) ? this.owner.area_options.selected : !1
    },
    isSelectable: function() {
      return n.isBool(this.effectiveOptions().staticState) ? !1 : n.isBool(this.owner.options.staticState) ? !1 : n.boolOrDefault(this.effectiveOptions().isSelectable, !0)
    },
    isDeselectable: function() {
      return n.isBool(this.effectiveOptions().staticState) ? !1 : n.isBool(this.owner.options.staticState) ? !1 : n.boolOrDefault(this.effectiveOptions().isDeselectable, !0)
    },
    isNotRendered: function() {
      var t = e(this.area);
      return t.attr("nohref") || !t.attr("href") || this.effectiveOptions().isMask
    },
    effectiveOptions: function(e) {
      var t = n.updateProps({}, this.owner.area_options, this.options, e || {}, {
        id: this.areaId
      });
      return t.selected = this.isSelected(), t
    },
    effectiveRenderOptions: function(t, r) {
      var i, s = this.optsCache;
      if (!s || t === "highlight") i = this.effectiveOptions(r), s = n.updateProps({}, i, i["render_" + t]), t !== "highlight" && (this.optsCache = s);
      return e.extend({}, s)
    },
    changeState: function(t, n) {
      e.isFunction(this.owner.options.onStateChange) && this.owner.options.onStateChange.call(this.owner.image, {
        key: this.key,
        state: t,
        selected: n
      })
    },
    highlight: function(e) {
      var t = this.owner;
      this.effectiveOptions().highlight && t.graphics.addShapeGroup(this, "highlight", e), t.setHighlightId(this.areaId), this.changeState("highlight", !0)
    },
    drawSelection: function() {
      this.owner.graphics.addShapeGroup(this, "select")
    }
  }, t.MapArea = function(t, r, i) {
    if (!t) return;
    var s = this;
    s.owner = t, s.area = r, s.areaDataXref = [], s.originalCoords = [], e.each(n.split(r.coords), function(e, t) {
      s.originalCoords.push(parseFloat(t))
    }), s.length = s.originalCoords.length, s.shape = r.shape.toLowerCase(), s.nohref = r.nohref || !r.href, s.configure(i)
  }, t.MapArea.prototype = {
    constructor: t.MapArea,
    configure: function(e) {
      this.keys = n.split(e)
    },
    reset: function() {
      this.area = null
    },
    coords: function(t) {
      return e.map(this.originalCoords, function(e) {
        return t ? e : e + t
      })
    }
  }
}(jQuery),
function(e) {
  var t = e.mapster.utils;
  t.areaCorners = function(n, r, i, s, o) {
    var a, f, l, c, h, p, d, v, m, g, y, b, w, E, S = 0,
      x = 0,
      T, N, C, k, L, A, O = [];
    n = n.length ? n : [n], i = i ? e(i) : e(document.body), a = i.offset(), T = a.left, N = a.top, r && (a = e(r).offset(), S = a.left, x = a.top);
    for (E = 0; E < n.length; E++) {
      A = n[E];
      if (A.nodeName === "AREA") {
        C = t.split(A.coords, parseInt);
        switch (A.shape) {
          case "circle":
            y = C[0], b = C[1], k = C[2], O = [];
            for (E = 0; E < 360; E += 20) L = E * Math.PI / 180, O.push(y + k * Math.cos(L), b + k * Math.sin(L));
            break;
          case "rect":
            O.push(C[0], C[1], C[2], C[1], C[2], C[3], C[0], C[3]);
            break;
          default:
            O = O.concat(C)
        }
        for (E = 0; E < O.length; E += 2) O[E] = parseInt(O[E], 10) + S, O[E + 1] = parseInt(O[E + 1], 10) + x
      } else A = e(A), a = A.position(), O.push(a.left, a.top, a.left + A.width(), a.top, a.left + A.width(), a.top + A.height(), a.left, a.top + A.height())
    }
    l = c = d = m = 999999, h = p = v = g = -1;
    for (E = O.length - 2; E >= 0; E -= 2) y = O[E], b = O[E + 1], y < l && (l = y, g = b), y > h && (h = y, m = b), b < c && (c = b, v = y), b > p && (p = b, d = y);
    return s && o && (f = !1, e.each([
      [v - s, c - o],
      [d, c - o],
      [l - s, g - o],
      [l - s, m],
      [h, g - o],
      [h, m],
      [v - s, p],
      [d, p]
    ], function(e, t) {
      if (!f && t[0] > T && t[1] > N) return w = t, f = !0, !1
    }), f || (w = [h, p])), w
  }
}(jQuery),
function(e) {
  var t = e.mapster,
    n = t.utils,
    r = t.MapArea.prototype;
  t.utils.getScaleInfo = function(e, t) {
    var n;
    return t ? (n = e.width / t.width || e.height / t.height, n > .98 && n < 1.02 && (n = 1)) : (n = 1, t = e), {
      scale: n !== 1,
      scalePct: n,
      realWidth: t.width,
      realHeight: t.height,
      width: e.width,
      height: e.height,
      ratio: e.width / e.height
    }
  }, t.utils.scaleMap = function(e, t, r) {
    var i = n.size(e),
      s = n.size(t, !0);
    if (!s.complete()) throw "Another script, such as an extension, appears to be interfering with image loading. Please let us know about this.";
    return i.complete() || (i = s), this.getScaleInfo(i, r ? s : null)
  }, t.MapData.prototype.resize = function(r, i, s, o) {
    function v(n, r, i) {
      t.hasCanvas() ? (n.width = r, n.height = i) : (e(n).width(r), e(n).height(i))
    }

    function g() {
      d.currentAction = "", e.isFunction(o) && o(), d.processCommandQueue()
    }

    function y() {
      v(d.overlay_canvas, r, i);
      if (h >= 0) {
        var e = d.data[h];
        e.tempOptions = {
          fade: !1
        }, d.getDataForKey(e.key).highlight(), e.tempOptions = null
      }
      v(d.base_canvas, r, i), d.redrawSelections(), g()
    }

    function b() {
      e(d.image).css(l), d.scaleInfo = n.getScaleInfo({
        width: r,
        height: i
      }, {
        width: d.scaleInfo.realWidth,
        height: d.scaleInfo.realHeight
      }), e.each(d.data, function(t, n) {
        e.each(n.areas(), function(e, t) {
          t.resize()
        })
      })
    }
    var a, f, l, c, h, p, d = this;
    o = o || s;
    if (d.scaleInfo.width === r && d.scaleInfo.height === i) return;
    h = d.highlightId, r || (p = i / d.scaleInfo.realHeight, r = Math.round(d.scaleInfo.realWidth * p)), i || (p = r / d.scaleInfo.realWidth, i = Math.round(d.scaleInfo.realHeight * p)), l = {
      width: String(r) + "px",
      height: String(i) + "px"
    }, t.hasCanvas() || e(d.base_canvas).children().remove(), c = e(d.wrapper).find(".mapster_el").add(d.wrapper), s ? (f = [], d.currentAction = "resizing", c.each(function(t, r) {
      a = n.defer(), f.push(a), e(r).animate(l, {
        duration: s,
        complete: a.resolve,
        easing: "linear"
      })
    }), a = n.defer(), f.push(a), n.when.all(f).then(y), b(), a.resolve()) : (c.css(l), b(), y())
  }, t.MapArea = n.subclass(t.MapArea, function() {
    this.base.init(), this.owner.scaleInfo.scale && this.resize()
  }), r.coords = function(e, t) {
    var n, r = [],
      i = e || this.owner.scaleInfo.scalePct,
      s = t || 0;
    if (i === 1 && t === 0) return this.originalCoords;
    for (n = 0; n < this.length; n++) r.push(Math.round(this.originalCoords[n] * i) + s);
    return r
  }, r.resize = function() {
    this.area.coords = this.coords().join(",")
  }, r.reset = function() {
    this.area.coords = this.coords(1).join(",")
  }, t.impl.resize = function(e, n, r, i) {
    if (!e && !n) return !1;
    var s = (new t.Method(this, function() {
      this.resize(e, n, r, i)
    }, null, {
      name: "resize",
      args: arguments
    })).go();
    return s
  }
}(jQuery),
function(e) {
  function r(t, n, r) {
    var i;
    return n ? (i = typeof n == "string" ? e(n) : e(n).clone(), i.append(t)) : i = e(t), i.css(e.extend(r || {}, {
      display: "block",
      position: "absolute"
    })).hide(), e("body").append(i), i.attr("data-opacity", i.css("opacity")).css("opacity", 0), i.show()
  }

  function i(e, t) {
    var r = {
        left: t.left + "px",
        top: t.top + "px"
      },
      i = e.attr("data-opacity") || 0,
      s = e.css("z-index");
    if (parseInt(s, 10) === 0 || s === "auto") r["z-index"] = 9999;
    e.css(r).addClass("mapster_tooltip"), t.fadeDuration && t.fadeDuration > 0 ? n.fader(e[0], 0, i, t.fadeDuration) : n.setOpacity(e[0], i)
  }

  function s(t, n, r, i, s, o) {
    var u = r + ".mapster-tooltip";
    if (e.inArray(n, t) >= 0) return i.unbind(u).bind(u, function(e) {
      if (!s || s.call(this, e)) i.unbind(".mapster-tooltip"), o && o.call(this)
    }), {
      object: i,
      event: u
    }
  }

  function o(e, t, r, s, o) {
    var u, a = {};
    return o = o || {}, t ? (u = n.areaCorners(t, r, s, e.outerWidth(!0), e.outerHeight(!0)), a.left = u[0], a.top = u[1]) : (a.left = o.left, a.top = o.top), a.left += o.offsetx || 0, a.top += o.offsety || 0, a.css = o.css, a.fadeDuration = o.fadeDuration, i(e, a), e
  }

  function u(e) {
    return e ? typeof e == "string" || e.jquery ? e : e.content : null
  }
  var t = e.mapster,
    n = t.utils;
  e.extend(t.defaults, {
    toolTipContainer: '<div style="border: 2px solid black; background: #EEEEEE; width:160px; padding:4px; margin: 4px; -moz-box-shadow: 3px 3px 5px #535353; -webkit-box-shadow: 3px 3px 5px #535353; box-shadow: 3px 3px 5px #535353; -moz-border-radius: 6px 6px 6px 6px; -webkit-border-radius: 6px; border-radius: 6px 6px 6px 6px; opacity: 0.9;"></dteniv>',
    showToolTip: !1,
    toolTipFade: !0,
    toolTipClose: ["area-mouseout", "image-mouseout"],
    onShowToolTip: null,
    onHideToolTip: null
  }), e.extend(t.area_defaults, {
    toolTip: null,
    toolTipClose: null
  }), t.MapData.prototype.clearToolTip = function() {
    this.activeToolTip && (this.activeToolTip.stop().remove(), this.activeToolTip = null, this.activeToolTipID = null, n.ifFunction(this.options.onHideToolTip, this))
  }, t.AreaData.prototype.showToolTip = function(t, i) {
    var u, a, f, l, c, h = {},
      p = this,
      d = p.owner,
      v = p.effectiveOptions();
    i = i ? e.extend({}, i) : {}, t = t || v.toolTip, a = i.closeEvents || v.toolTipClose || d.options.toolTipClose || "tooltip-click", c = typeof i.template != "undefined" ? i.template : d.options.toolTipContainer, i.closeEvents = typeof a == "string" ? a = n.split(a) : a, i.fadeDuration = i.fadeDuration || (d.options.toolTipFade ? d.options.fadeDuration || v.fadeDuration : 0), f = p.area ? p.area : e.map(p.areas(), function(e) {
      return e.area
    });
    if (d.activeToolTipID === p.areaId) return;
    return d.clearToolTip(), d.activeToolTip = u = r(t, c, i.css), d.activeToolTipID = p.areaId, l = function() {
      d.clearToolTip()
    }, s(a, "area-click", "click", e(d.map), null, l), s(a, "tooltip-click", "click", u, null, l), s(a, "image-mouseout", "mouseout", e(d.image), function(e) {
      return e.relatedTarget && e.relatedTarget.nodeName !== "AREA" && e.relatedTarget !== p.area
    }, l), o(u, f, d.image, i.container, c, i), n.ifFunction(d.options.onShowToolTip, p.area, {
      toolTip: u,
      options: h,
      areaOptions: v,
      key: p.key,
      selected: p.isSelected()
    }), u
  }, t.impl.tooltip = function(n, i) {
    return (new t.Method(this, function() {
      var a, f, l = this;
      if (!n) l.clearToolTip();
      else {
        f = e(n);
        if (l.activeToolTipID === f[0]) return;
        l.clearToolTip(), l.activeToolTip = a = r(u(i), i.template || l.options.toolTipContainer, i.css), l.activeToolTipID = f[0], s(["tooltip-click"], "tooltip-click", "click", a, null, function() {
          l.clearToolTip()
        }), l.activeToolTip = a = o(a, f, l.image, i.container, i)
      }
    }, function() {
      e.isPlainObject(n) && !i && (i = n), this.showToolTip(u(i), i)
    }, {
      name: "tooltip",
      args: arguments,
      key: n
    })).go()
  }
}(jQuery);

/* -- FILE: [javascripts/cookies-agreement.js]*/
(function($) {
  $.cookie = function(name, value, options) {
    var msPerDay = 864E5,
      returnValue, cookies = [],
      path, domain, expires, opts = {},
      secure, date, defaults = {
        expires: '',
        domain: '',
        path: '',
        secure: false
      };
    if (arguments.length === 1) {
      if (document.cookie && document.cookie !== '') {
        cookies = document.cookie.split(';');
        $.each(cookies, function(i, cookie) {
          cookie = $.trim(cookie);
          if (cookie.substring(0, name.length + 1) === name + '=') {
            returnValue = decodeURIComponent(cookie.substring(name.length + 1));
            return false;
          }
        });
      }
      return returnValue;
    } else {
      $.extend(opts, defaults, $.cookie.settings, options);
      if (value === null) {
        value = '';
        opts.expires = -1;
      }
      path = opts.path ? ';path=' + opts.path : '';
      domain = opts.domain ? ';domain=' + opts.domain : '';
      expires = opts.expires ? (function(opts) {
        if (typeof opts.expires === 'number') {
          date = new Date();
          date.setTime(date.getTime() + (opts.expires * msPerDay));
        } else if ($.type(opts.expires) === 'date') {
          date = opts.expires;
        } else {
          date = new Date();
          date.setTime(date.getTime() + msPerDay);
        }
        expires = ';expires=' + date.toUTCString();
        return expires;
      })(opts) : '';
      secure = opts.secure ? ';secure' : '';
      document.cookie = name + '=' + encodeURIComponent(value) + expires + path + domain + secure;
      return document.cookie.indexOf(name);
    }
  };
  $.cookie.settings = {
    expires: '',
    domain: '',
    path: '',
    secure: false
  };
})(jQuery);
$(window).load(function() {
  var cDate, cMinutes;
  cDate = new Date();
  cMinutes = 1440;
  cDate.setTime(cDate.getTime() + (cMinutes * 60 * 1000));
  $.cookie.defaults = {
    expires: cDate,
    domain: '',
    path: '/',
    secure: false
  };
  if ($.cookie('c-agree') != 'open') {
    $('#cookies-rules-box').animate({
      'bottom': 0
    }, 0);
  }
  $('#cookies-rules-box-btn').click(function(e) {
    $.cookie('c-agree', 'open', {
      expires: cDate,
      path: '/'
    });
    $(this).addClass('cookies-agreement');
    e.preventDefault();
    $('#cookies-rules-box').animate({
      'bottom': -300
    }, 300);
  });
});

/* -- FILE: [javascripts/jquery.easing.1.3.js]*/
jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend(jQuery.easing, {
  def: 'easeOutQuad',
  swing: function(x, t, b, c, d) {
    return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
  },
  easeInQuad: function(x, t, b, c, d) {
    return c * (t /= d) * t + b;
  },
  easeOutQuad: function(x, t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b;
  },
  easeInOutQuad: function(x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t + b;
    return -c / 2 * ((--t) * (t - 2) - 1) + b;
  },
  easeInCubic: function(x, t, b, c, d) {
    return c * (t /= d) * t * t + b;
  },
  easeOutCubic: function(x, t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
  },
  easeInOutCubic: function(x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
    return c / 2 * ((t -= 2) * t * t + 2) + b;
  },
  easeInQuart: function(x, t, b, c, d) {
    return c * (t /= d) * t * t * t + b;
  },
  easeOutQuart: function(x, t, b, c, d) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
  },
  easeInOutQuart: function(x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
    return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
  },
  easeInQuint: function(x, t, b, c, d) {
    return c * (t /= d) * t * t * t * t + b;
  },
  easeOutQuint: function(x, t, b, c, d) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
  },
  easeInOutQuint: function(x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
    return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
  },
  easeInSine: function(x, t, b, c, d) {
    return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
  },
  easeOutSine: function(x, t, b, c, d) {
    return c * Math.sin(t / d * (Math.PI / 2)) + b;
  },
  easeInOutSine: function(x, t, b, c, d) {
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
  },
  easeInExpo: function(x, t, b, c, d) {
    return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
  },
  easeOutExpo: function(x, t, b, c, d) {
    return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
  },
  easeInOutExpo: function(x, t, b, c, d) {
    if (t == 0) return b;
    if (t == d) return b + c;
    if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
  },
  easeInCirc: function(x, t, b, c, d) {
    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
  },
  easeOutCirc: function(x, t, b, c, d) {
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
  },
  easeInOutCirc: function(x, t, b, c, d) {
    if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
  },
  easeInElastic: function(x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t == 0) return b;
    if ((t /= d) == 1) return b + c;
    if (!p) p = d * .3;
    if (a < Math.abs(c)) {
      a = c;
      var s = p / 4;
    } else var s = p / (2 * Math.PI) * Math.asin(c / a);
    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
  },
  easeOutElastic: function(x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t == 0) return b;
    if ((t /= d) == 1) return b + c;
    if (!p) p = d * .3;
    if (a < Math.abs(c)) {
      a = c;
      var s = p / 4;
    } else var s = p / (2 * Math.PI) * Math.asin(c / a);
    return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
  },
  easeInOutElastic: function(x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t == 0) return b;
    if ((t /= d / 2) == 2) return b + c;
    if (!p) p = d * (.3 * 1.5);
    if (a < Math.abs(c)) {
      a = c;
      var s = p / 4;
    } else var s = p / (2 * Math.PI) * Math.asin(c / a);
    if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
  },
  easeInBack: function(x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c * (t /= d) * t * ((s + 1) * t - s) + b;
  },
  easeOutBack: function(x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
  },
  easeInOutBack: function(x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
    return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
  },
  easeInBounce: function(x, t, b, c, d) {
    return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
  },
  easeOutBounce: function(x, t, b, c, d) {
    if ((t /= d) < (1 / 2.75)) {
      return c * (7.5625 * t * t) + b;
    } else if (t < (2 / 2.75)) {
      return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
    } else if (t < (2.5 / 2.75)) {
      return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
    } else {
      return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
    }
  },
  easeInOutBounce: function(x, t, b, c, d) {
    if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
    return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
  }
});

/* -- FILE: [javascripts/jquery.fitvids.js]*/
/*!
 * FitVids 1.0
 *
 * Copyright 2011, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
 * Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
 * Released under the WTFPL license - http://sam.zoy.org/wtfpl/
 *
 * Date: Thu Sept 01 18:00:00 2011 -0500
 */
(function($) {
  "use strict";
  $.fn.fitVids = function(options) {
    var settings = {
      customSelector: null
    };
    var div = document.createElement('div'),
      ref = document.getElementsByTagName('base')[0] || document.getElementsByTagName('script')[0];
    div.className = 'fit-vids-style';
    div.innerHTML = '&shy;<style>               .fluid-width-video-wrapper {                 width: 100%;                              position: relative;                       padding: 0;                            }                                                                                   .fluid-width-video-wrapper iframe,        .fluid-width-video-wrapper object,        .fluid-width-video-wrapper embed {           position: absolute;                       top: 0;                                   left: 0;                                  width: 100%;                              height: 100%;                          }                                       </style>';
    ref.parentNode.insertBefore(div, ref);
    if (options) {
      $.extend(settings, options);
    }
    return this.each(function() {
      var selectors = ["iframe[src*='player.vimeo.com']", "iframe[src*='www.youtube.com']", "iframe[src*='www.kickstarter.com']", "object", "embed"];
      if (settings.customSelector) {
        selectors.push(settings.customSelector);
      }
      var $allVideos = $(this).find(selectors.join(','));
      $allVideos.each(function() {
        var $this = $(this);
        if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) {
          return;
        }
        var height = (this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10)))) ? parseInt($this.attr('height'), 10) : $this.height(),
          width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
          aspectRatio = height / width;
        if (!$this.attr('id')) {
          var videoID = 'fitvid' + Math.floor(Math.random() * 999999);
          $this.attr('id', videoID);
        }
        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100) + "%");
        $this.removeAttr('height').removeAttr('width');
      });
    });
  };
})(jQuery);

/* -- FILE: [javascripts/bxslider.js]*/
! function(t) {
  var e = {},
    s = {
      mode: "horizontal",
      slideSelector: "",
      infiniteLoop: !0,
      hideControlOnEnd: !1,
      speed: 500,
      easing: null,
      slideMargin: 0,
      startSlide: 0,
      randomStart: !1,
      captions: !1,
      ticker: !1,
      tickerHover: !1,
      adaptiveHeight: !1,
      adaptiveHeightSpeed: 500,
      video: !1,
      useCSS: !0,
      preloadImages: "visible",
      responsive: !0,
      slideZIndex: 50,
      touchEnabled: !0,
      swipeThreshold: 50,
      oneToOneTouch: !0,
      preventDefaultSwipeX: !0,
      preventDefaultSwipeY: !1,
      pager: !0,
      pagerType: "full",
      pagerShortSeparator: " / ",
      pagerSelector: null,
      buildPager: null,
      pagerCustom: null,
      controls: !0,
      nextText: "Next",
      prevText: "Prev",
      nextSelector: null,
      prevSelector: null,
      autoControls: !1,
      startText: "Start",
      stopText: "Stop",
      autoControlsCombine: !1,
      autoControlsSelector: null,
      auto: !1,
      pause: 4e3,
      autoStart: !0,
      autoDirection: "next",
      autoHover: !1,
      autoDelay: 0,
      minSlides: 1,
      maxSlides: 1,
      moveSlides: 0,
      slideWidth: 0,
      onSliderLoad: function() {},
      onSlideBefore: function() {},
      onSlideAfter: function() {},
      onSlideNext: function() {},
      onSlidePrev: function() {},
      onSliderResize: function() {}
    };
  t.fn.bxSlider = function(n) {
    if (0 == this.length) return this;
    if (this.length > 1) return this.each(function() {
      t(this).bxSlider(n)
    }), this;
    var o = {},
      r = this;
    e.el = this;
    var a = t(window).width(),
      l = t(window).height(),
      d = function() {
        o.settings = t.extend({}, s, n), o.settings.slideWidth = parseInt(o.settings.slideWidth), o.children = r.children(o.settings.slideSelector), o.children.length < o.settings.minSlides && (o.settings.minSlides = o.children.length), o.children.length < o.settings.maxSlides && (o.settings.maxSlides = o.children.length), o.settings.randomStart && (o.settings.startSlide = Math.floor(Math.random() * o.children.length)), o.active = {
          index: o.settings.startSlide
        }, o.carousel = o.settings.minSlides > 1 || o.settings.maxSlides > 1, o.carousel && (o.settings.preloadImages = "all"), o.minThreshold = o.settings.minSlides * o.settings.slideWidth + (o.settings.minSlides - 1) * o.settings.slideMargin, o.maxThreshold = o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin, o.working = !1, o.controls = {}, o.interval = null, o.animProp = "vertical" == o.settings.mode ? "top" : "left", o.usingCSS = o.settings.useCSS && "fade" != o.settings.mode && function() {
          var t = document.createElement("div"),
            e = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
          for (var i in e)
            if (void 0 !== t.style[e[i]]) return o.cssPrefix = e[i].replace("Perspective", "").toLowerCase(), o.animProp = "-" + o.cssPrefix + "-transform", !0;
          return !1
        }(), "vertical" == o.settings.mode && (o.settings.maxSlides = o.settings.minSlides), r.data("origStyle", r.attr("style")), r.children(o.settings.slideSelector).each(function() {
          t(this).data("origStyle", t(this).attr("style"))
        }), c()
      },
      c = function() {
        r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'), o.viewport = r.parent(), o.loader = t('<div class="bx-loading" />'), o.viewport.prepend(o.loader), r.css({
          width: "horizontal" == o.settings.mode ? 100 * o.children.length + 215 + "%" : "auto",
          position: "relative"
        }), o.usingCSS && o.settings.easing ? r.css("-" + o.cssPrefix + "-transition-timing-function", o.settings.easing) : o.settings.easing || (o.settings.easing = "swing"), f(), o.viewport.css({
          width: "100%",
          overflow: "hidden",
          position: "relative"
        }), o.viewport.parent().css({
          maxWidth: p()
        }), o.settings.pager || o.viewport.parent().css({
          margin: "0 auto 0px"
        }), o.children.css({
          "float": "horizontal" == o.settings.mode ? "left" : "none",
          listStyle: "none",
          position: "relative"
        }), o.children.css("width", u()), "horizontal" == o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginRight", o.settings.slideMargin), "vertical" == o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginBottom", o.settings.slideMargin), "fade" == o.settings.mode && (o.children.css({
          position: "absolute",
          zIndex: 0,
          display: "none"
        }), o.children.eq(o.settings.startSlide).css({
          zIndex: o.settings.slideZIndex,
          display: "block"
        })), o.controls.el = t('<div class="bx-controls" />'), o.settings.captions && P(), o.active.last = o.settings.startSlide == x() - 1, o.settings.video && r.fitVids();
        var e = o.children.eq(o.settings.startSlide);
        "all" == o.settings.preloadImages && (e = o.children), o.settings.ticker ? o.settings.pager = !1 : (o.settings.pager && T(), o.settings.controls && C(), o.settings.auto && o.settings.autoControls && E(), (o.settings.controls || o.settings.autoControls || o.settings.pager) && o.viewport.after(o.controls.el)), g(e, h)
      },
      g = function(e, i) {
        var s = e.find("img, iframe").length;
        if (0 == s) return i(), void 0;
        var n = 0;
        e.find("img, iframe").each(function() {
          t(this).one("load", function() {
            ++n == s && i()
          }).each(function() {
            this.complete && t(this).load()
          })
        })
      },
      h = function() {
        if (o.settings.infiniteLoop && "fade" != o.settings.mode && !o.settings.ticker) {
          var e = "vertical" == o.settings.mode ? o.settings.minSlides : o.settings.maxSlides,
            i = o.children.slice(0, e).clone().addClass("bx-clone"),
            s = o.children.slice(-e).clone().addClass("bx-clone");
          r.append(i).prepend(s)
        }
        o.loader.remove(), S(), "vertical" == o.settings.mode && (o.settings.adaptiveHeight = !0), o.viewport.height(v()), r.redrawSlider(), o.settings.onSliderLoad(o.active.index), o.initialized = !0, o.settings.responsive && t(window).bind("resize", Z), o.settings.auto && o.settings.autoStart && H(), o.settings.ticker && L(), o.settings.pager && q(o.settings.startSlide), o.settings.controls && W(), o.settings.touchEnabled && !o.settings.ticker && O()
      },
      v = function() {
        var e = 0,
          s = t();
        if ("vertical" == o.settings.mode || o.settings.adaptiveHeight)
          if (o.carousel) {
            var n = 1 == o.settings.moveSlides ? o.active.index : o.active.index * m();
            for (s = o.children.eq(n), i = 1; i <= o.settings.maxSlides - 1; i++) s = n + i >= o.children.length ? s.add(o.children.eq(i - 1)) : s.add(o.children.eq(n + i))
          } else s = o.children.eq(o.active.index);
        else s = o.children;
        return "vertical" == o.settings.mode ? (s.each(function() {
          e += t(this).outerHeight()
        }), o.settings.slideMargin > 0 && (e += o.settings.slideMargin * (o.settings.minSlides - 1))) : e = Math.max.apply(Math, s.map(function() {
          return t(this).outerHeight(!1)
        }).get()), e
      },
      p = function() {
        var t = "100%";
        return o.settings.slideWidth > 0 && (t = "horizontal" == o.settings.mode ? o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin : o.settings.slideWidth), t
      },
      u = function() {
        var t = o.settings.slideWidth,
          e = o.viewport.width();
        return 0 == o.settings.slideWidth || o.settings.slideWidth > e && !o.carousel || "vertical" == o.settings.mode ? t = e : o.settings.maxSlides > 1 && "horizontal" == o.settings.mode && (e > o.maxThreshold || e < o.minThreshold && (t = (e - o.settings.slideMargin * (o.settings.minSlides - 1)) / o.settings.minSlides)), t
      },
      f = function() {
        var t = 1;
        if ("horizontal" == o.settings.mode && o.settings.slideWidth > 0)
          if (o.viewport.width() < o.minThreshold) t = o.settings.minSlides;
          else if (o.viewport.width() > o.maxThreshold) t = o.settings.maxSlides;
        else {
          var e = o.children.first().width();
          t = Math.floor(o.viewport.width() / e)
        } else "vertical" == o.settings.mode && (t = o.settings.minSlides);
        return t
      },
      x = function() {
        var t = 0;
        if (o.settings.moveSlides > 0)
          if (o.settings.infiniteLoop) t = o.children.length / m();
          else
            for (var e = 0, i = 0; e < o.children.length;) ++t, e = i + f(), i += o.settings.moveSlides <= f() ? o.settings.moveSlides : f();
        else t = Math.ceil(o.children.length / f());
        return t
      },
      m = function() {
        return o.settings.moveSlides > 0 && o.settings.moveSlides <= f() ? o.settings.moveSlides : f()
      },
      S = function() {
        if (o.children.length > o.settings.maxSlides && o.active.last && !o.settings.infiniteLoop) {
          if ("horizontal" == o.settings.mode) {
            var t = o.children.last(),
              e = t.position();
            b(-(e.left - (o.viewport.width() - t.width())), "reset", 0)
          } else if ("vertical" == o.settings.mode) {
            var i = o.children.length - o.settings.minSlides,
              e = o.children.eq(i).position();
            b(-e.top, "reset", 0)
          }
        } else {
          var e = o.children.eq(o.active.index * m()).position();
          o.active.index == x() - 1 && (o.active.last = !0), void 0 != e && ("horizontal" == o.settings.mode ? b(-e.left, "reset", 0) : "vertical" == o.settings.mode && b(-e.top, "reset", 0))
        }
      },
      b = function(t, e, i, s) {
        if (o.usingCSS) {
          var n = "vertical" == o.settings.mode ? "translate3d(0, " + t + "px, 0)" : "translate3d(" + t + "px, 0, 0)";
          r.css("-" + o.cssPrefix + "-transition-duration", i / 1e3 + "s"), "slide" == e ? (r.css(o.animProp, n), r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
            r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), D()
          })) : "reset" == e ? r.css(o.animProp, n) : "ticker" == e && (r.css("-" + o.cssPrefix + "-transition-timing-function", "linear"), r.css(o.animProp, n), r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
            r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), b(s.resetValue, "reset", 0), N()
          }))
        } else {
          var a = {};
          a[o.animProp] = t, "slide" == e ? r.animate(a, i, o.settings.easing, function() {
            D()
          }) : "reset" == e ? r.css(o.animProp, t) : "ticker" == e && r.animate(a, speed, "linear", function() {
            b(s.resetValue, "reset", 0), N()
          })
        }
      },
      w = function() {
        for (var e = "", i = x(), s = 0; i > s; s++) {
          var n = "";
          o.settings.buildPager && t.isFunction(o.settings.buildPager) ? (n = o.settings.buildPager(s), o.pagerEl.addClass("bx-custom-pager")) : (n = s + 1, o.pagerEl.addClass("bx-default-pager")), e += '<div class="bx-pager-item"><a href="" data-slide-index="' + s + '" class="bx-pager-link">' + n + "</a></div>"
        }
        o.pagerEl.html(e)
      },
      T = function() {
        o.settings.pagerCustom ? o.pagerEl = t(o.settings.pagerCustom) : (o.pagerEl = t('<div class="bx-pager" />'), o.settings.pagerSelector ? t(o.settings.pagerSelector).html(o.pagerEl) : o.controls.el.addClass("bx-has-pager").append(o.pagerEl), w()), o.pagerEl.on("click", "a", I)
      },
      C = function() {
        o.controls.next = t('<a class="bx-next" href="">' + o.settings.nextText + "</a>"), o.controls.prev = t('<a class="bx-prev" href="">' + o.settings.prevText + "</a>"), o.controls.next.bind("click", y), o.controls.prev.bind("click", z), o.settings.nextSelector && t(o.settings.nextSelector).append(o.controls.next), o.settings.prevSelector && t(o.settings.prevSelector).append(o.controls.prev), o.settings.nextSelector || o.settings.prevSelector || (o.controls.directionEl = t('<div class="bx-controls-direction" />'), o.controls.directionEl.append(o.controls.prev).append(o.controls.next), o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))
      },
      E = function() {
        o.controls.start = t('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + o.settings.startText + "</a></div>"), o.controls.stop = t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + o.settings.stopText + "</a></div>"), o.controls.autoEl = t('<div class="bx-controls-auto" />'), o.controls.autoEl.on("click", ".bx-start", k), o.controls.autoEl.on("click", ".bx-stop", M), o.settings.autoControlsCombine ? o.controls.autoEl.append(o.controls.start) : o.controls.autoEl.append(o.controls.start).append(o.controls.stop), o.settings.autoControlsSelector ? t(o.settings.autoControlsSelector).html(o.controls.autoEl) : o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl), A(o.settings.autoStart ? "stop" : "start")
      },
      P = function() {
        o.children.each(function() {
          var e = t(this).find("img:first").attr("title");
          void 0 != e && ("" + e).length && t(this).append('<div class="bx-caption"><span>' + e + "</span></div>")
        })
      },
      y = function(t) {
        o.settings.auto && r.stopAuto(), r.goToNextSlide(), t.preventDefault()
      },
      z = function(t) {
        o.settings.auto && r.stopAuto(), r.goToPrevSlide(), t.preventDefault()
      },
      k = function(t) {
        r.startAuto(), t.preventDefault()
      },
      M = function(t) {
        r.stopAuto(), t.preventDefault()
      },
      I = function(e) {
        o.settings.auto && r.stopAuto();
        var i = t(e.currentTarget),
          s = parseInt(i.attr("data-slide-index"));
        s != o.active.index && r.goToSlide(s), e.preventDefault()
      },
      q = function(e) {
        var i = o.children.length;
        return "short" == o.settings.pagerType ? (o.settings.maxSlides > 1 && (i = Math.ceil(o.children.length / o.settings.maxSlides)), o.pagerEl.html(e + 1 + o.settings.pagerShortSeparator + i), void 0) : (o.pagerEl.find("a").removeClass("active"), o.pagerEl.each(function(i, s) {
          t(s).find("a").eq(e).addClass("active")
        }), void 0)
      },
      D = function() {
        if (o.settings.infiniteLoop) {
          var t = "";
          0 == o.active.index ? t = o.children.eq(0).position() : o.active.index == x() - 1 && o.carousel ? t = o.children.eq((x() - 1) * m()).position() : o.active.index == o.children.length - 1 && (t = o.children.eq(o.children.length - 1).position()), t && ("horizontal" == o.settings.mode ? b(-t.left, "reset", 0) : "vertical" == o.settings.mode && b(-t.top, "reset", 0))
        }
        o.working = !1, o.settings.onSlideAfter(o.children.eq(o.active.index), o.oldIndex, o.active.index)
      },
      A = function(t) {
        o.settings.autoControlsCombine ? o.controls.autoEl.html(o.controls[t]) : (o.controls.autoEl.find("a").removeClass("active"), o.controls.autoEl.find("a:not(.bx-" + t + ")").addClass("active"))
      },
      W = function() {
        1 == x() ? (o.controls.prev.addClass("disabled"), o.controls.next.addClass("disabled")) : !o.settings.infiniteLoop && o.settings.hideControlOnEnd && (0 == o.active.index ? (o.controls.prev.addClass("disabled"), o.controls.next.removeClass("disabled")) : o.active.index == x() - 1 ? (o.controls.next.addClass("disabled"), o.controls.prev.removeClass("disabled")) : (o.controls.prev.removeClass("disabled"), o.controls.next.removeClass("disabled")))
      },
      H = function() {
        o.settings.autoDelay > 0 ? setTimeout(r.startAuto, o.settings.autoDelay) : r.startAuto(), o.settings.autoHover && r.hover(function() {
          o.interval && (r.stopAuto(!0), o.autoPaused = !0)
        }, function() {
          o.autoPaused && (r.startAuto(!0), o.autoPaused = null)
        })
      },
      L = function() {
        var e = 0;
        if ("next" == o.settings.autoDirection) r.append(o.children.clone().addClass("bx-clone"));
        else {
          r.prepend(o.children.clone().addClass("bx-clone"));
          var i = o.children.first().position();
          e = "horizontal" == o.settings.mode ? -i.left : -i.top
        }
        b(e, "reset", 0), o.settings.pager = !1, o.settings.controls = !1, o.settings.autoControls = !1, o.settings.tickerHover && !o.usingCSS && o.viewport.hover(function() {
          r.stop()
        }, function() {
          var e = 0;
          o.children.each(function() {
            e += "horizontal" == o.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0)
          });
          var i = o.settings.speed / e,
            s = "horizontal" == o.settings.mode ? "left" : "top",
            n = i * (e - Math.abs(parseInt(r.css(s))));
          N(n)
        }), N()
      },
      N = function(t) {
        speed = t ? t : o.settings.speed;
        var e = {
            left: 0,
            top: 0
          },
          i = {
            left: 0,
            top: 0
          };
        "next" == o.settings.autoDirection ? e = r.find(".bx-clone").first().position() : i = o.children.first().position();
        var s = "horizontal" == o.settings.mode ? -e.left : -e.top,
          n = "horizontal" == o.settings.mode ? -i.left : -i.top,
          a = {
            resetValue: n
          };
        b(s, "ticker", speed, a)
      },
      O = function() {
        o.touch = {
          start: {
            x: 0,
            y: 0
          },
          end: {
            x: 0,
            y: 0
          }
        }, o.viewport.bind("touchstart", X)
      },
      X = function(t) {
        if (o.working) t.preventDefault();
        else {
          o.touch.originalPos = r.position();
          var e = t.originalEvent;
          o.touch.start.x = e.changedTouches[0].pageX, o.touch.start.y = e.changedTouches[0].pageY, o.viewport.bind("touchmove", Y), o.viewport.bind("touchend", V)
        }
      },
      Y = function(t) {
        var e = t.originalEvent,
          i = Math.abs(e.changedTouches[0].pageX - o.touch.start.x),
          s = Math.abs(e.changedTouches[0].pageY - o.touch.start.y);
        if (3 * i > s && o.settings.preventDefaultSwipeX ? t.preventDefault() : 3 * s > i && o.settings.preventDefaultSwipeY && t.preventDefault(), "fade" != o.settings.mode && o.settings.oneToOneTouch) {
          var n = 0;
          if ("horizontal" == o.settings.mode) {
            var r = e.changedTouches[0].pageX - o.touch.start.x;
            n = o.touch.originalPos.left + r
          } else {
            var r = e.changedTouches[0].pageY - o.touch.start.y;
            n = o.touch.originalPos.top + r
          }
          b(n, "reset", 0)
        }
      },
      V = function(t) {
        o.viewport.unbind("touchmove", Y);
        var e = t.originalEvent,
          i = 0;
        if (o.touch.end.x = e.changedTouches[0].pageX, o.touch.end.y = e.changedTouches[0].pageY, "fade" == o.settings.mode) {
          var s = Math.abs(o.touch.start.x - o.touch.end.x);
          s >= o.settings.swipeThreshold && (o.touch.start.x > o.touch.end.x ? r.goToNextSlide() : r.goToPrevSlide(), r.stopAuto())
        } else {
          var s = 0;
          "horizontal" == o.settings.mode ? (s = o.touch.end.x - o.touch.start.x, i = o.touch.originalPos.left) : (s = o.touch.end.y - o.touch.start.y, i = o.touch.originalPos.top), !o.settings.infiniteLoop && (0 == o.active.index && s > 0 || o.active.last && 0 > s) ? b(i, "reset", 200) : Math.abs(s) >= o.settings.swipeThreshold ? (0 > s ? r.goToNextSlide() : r.goToPrevSlide(), r.stopAuto()) : b(i, "reset", 200)
        }
        o.viewport.unbind("touchend", V)
      },
      Z = function() {
        var e = t(window).width(),
          i = t(window).height();
        (a != e || l != i) && (a = e, l = i, r.redrawSlider(), o.settings.onSliderResize.call(r, o.active.index))
      };
    return r.goToSlide = function(e, i) {
      if (!o.working && o.active.index != e)
        if (o.working = !0, o.oldIndex = o.active.index, o.active.index = 0 > e ? x() - 1 : e >= x() ? 0 : e, o.settings.onSlideBefore(o.children.eq(o.active.index), o.oldIndex, o.active.index), "next" == i ? o.settings.onSlideNext(o.children.eq(o.active.index), o.oldIndex, o.active.index) : "prev" == i && o.settings.onSlidePrev(o.children.eq(o.active.index), o.oldIndex, o.active.index), o.active.last = o.active.index >= x() - 1, o.settings.pager && q(o.active.index), o.settings.controls && W(), "fade" == o.settings.mode) o.settings.adaptiveHeight && o.viewport.height() != v() && o.viewport.animate({
          height: v()
        }, o.settings.adaptiveHeightSpeed), o.children.filter(":visible").fadeOut(o.settings.speed).css({
          zIndex: 0
        }), o.children.eq(o.active.index).css("zIndex", o.settings.slideZIndex + 1).fadeIn(o.settings.speed, function() {
          t(this).css("zIndex", o.settings.slideZIndex), D()
        });
        else {
          o.settings.adaptiveHeight && o.viewport.height() != v() && o.viewport.animate({
            height: v()
          }, o.settings.adaptiveHeightSpeed);
          var s = 0,
            n = {
              left: 0,
              top: 0
            };
          if (!o.settings.infiniteLoop && o.carousel && o.active.last)
            if ("horizontal" == o.settings.mode) {
              var a = o.children.eq(o.children.length - 1);
              n = a.position(), s = o.viewport.width() - a.outerWidth()
            } else {
              var l = o.children.length - o.settings.minSlides;
              n = o.children.eq(l).position()
            }
          else if (o.carousel && o.active.last && "prev" == i) {
            var d = 1 == o.settings.moveSlides ? o.settings.maxSlides - m() : (x() - 1) * m() - (o.children.length - o.settings.maxSlides),
              a = r.children(".bx-clone").eq(d);
            n = a.position()
          } else if ("next" == i && 0 == o.active.index) n = r.find("> .bx-clone").eq(o.settings.maxSlides).position(), o.active.last = !1;
          else if (e >= 0) {
            var c = e * m();
            n = o.children.eq(c).position()
          }
          if ("undefined" != typeof n) {
            var g = "horizontal" == o.settings.mode ? -(n.left - s) : -n.top;
            b(g, "slide", o.settings.speed)
          }
        }
    }, r.goToNextSlide = function() {
      if (o.settings.infiniteLoop || !o.active.last) {
        var t = parseInt(o.active.index) + 1;
        r.goToSlide(t, "next")
      }
    }, r.goToPrevSlide = function() {
      if (o.settings.infiniteLoop || 0 != o.active.index) {
        var t = parseInt(o.active.index) - 1;
        r.goToSlide(t, "prev")
      }
    }, r.startAuto = function(t) {
      o.interval || (o.interval = setInterval(function() {
        "next" == o.settings.autoDirection ? r.goToNextSlide() : r.goToPrevSlide()
      }, o.settings.pause), o.settings.autoControls && 1 != t && A("stop"))
    }, r.stopAuto = function(t) {
      o.interval && (clearInterval(o.interval), o.interval = null, o.settings.autoControls && 1 != t && A("start"))
    }, r.getCurrentSlide = function() {
      return o.active.index
    }, r.getCurrentSlideElement = function() {
      return o.children.eq(o.active.index)
    }, r.getSlideCount = function() {
      return o.children.length
    }, r.redrawSlider = function() {
      o.children.add(r.find(".bx-clone")).outerWidth(u()), o.viewport.css("height", v()), o.settings.ticker || S(), o.active.last && (o.active.index = x() - 1), o.active.index >= x() && (o.active.last = !0), o.settings.pager && !o.settings.pagerCustom && (w(), q(o.active.index))
    }, r.destroySlider = function() {
      o.initialized && (o.initialized = !1, t(".bx-clone", this).remove(), o.children.each(function() {
        void 0 != t(this).data("origStyle") ? t(this).attr("style", t(this).data("origStyle")) : t(this).removeAttr("style")
      }), void 0 != t(this).data("origStyle") ? this.attr("style", t(this).data("origStyle")) : t(this).removeAttr("style"), t(this).unwrap().unwrap(), o.controls.el && o.controls.el.remove(), o.controls.next && o.controls.next.remove(), o.controls.prev && o.controls.prev.remove(), o.pagerEl && o.settings.controls && o.pagerEl.remove(), t(".bx-caption", this).remove(), o.controls.autoEl && o.controls.autoEl.remove(), clearInterval(o.interval), o.settings.responsive && t(window).unbind("resize", Z))
    }, r.reloadSlider = function(t) {
      void 0 != t && (n = t), r.destroySlider(), d()
    }, d(), this
  }
}(jQuery);

/* -- FILE: [lib/content/javascripts/old/modules/news-ajax.js]*/
// News-ajax:
NNewsAjax = function(a, b, c) {
  this.root = a;
  this.pageVar = b;
  this.params = c;
  this.position = NNewsAjax.prototype.instances.length;
  NNewsAjax.prototype.instances[NNewsAjax.prototype.instances.length] = this;
  var d = window.location.href.split("#");
  var e = d[1];
  if (/^[0-9]+$/.test(e)) {
    this.get(e);
  } else if (this.params.disableAjaxOnFirstPage != 1) {
    this.get(1);
  }
};
NNewsAjax.prototype.instances = new Array;
NNewsAjax.get = function(a, b) {
  return NNewsAjax.prototype.instances[a].get(b)
};
NNewsAjax.prototype.get = function(a) {
  if (jQuery) {
    var b = $(".news-ajax-wrapper");
    var c = "";
    for (key in this.params) c += "&" + key + "=" + this.params[key];
    for (var d = 0; d < b.length; d++)
      if (d == this.position) $(b[d]).html('<p class="ajax-loading-image" style="height: ' + $(b[d]).height() + 'px"> </p>');
    jQuery.ajax({
      type: "POST",
      url: this.root + "/modules/News/ajax.php?" + this.pageVar + "=" + a + "&fb=1",
      data: "ajax-news-request=1&ajax-news-position=" + this.position + c,
      complete: this.success
    });
    var e = window.location.href.split("#");
    if (a > 1 || e[1]) {
      e = e[0] + "#" + a;
      window.location.href = e;
    }
    return false
  } else return true
};
NNewsAjax.prototype.success = function(a) {
  var b = a.responseText;
  var c = $(".news-ajax-wrapper");
  var d = this.data.split("ajax-news-position=");
  d = d[1].split("&");
  d = d[0];
  for (var e = 0; e < c.length; e++)
    if (e == d) $(c[e]).html(b);
  if (typeof NewsAjaxPostRender == "function") NewsAjaxPostRender();
  if (top.floatbox) {
    fb = top.floatbox;
    fb.tagAnchors(self.document.body);
    if (fb.autoStart) {
      fb.start(fb.autoStart);
      if (typeof fb !== "undefined") delete fb.autoStart
    } else fb.preloadImages("", true)
  }
}


/* -- FILE: [lib/content/javascripts/old/thickbox.js]*/
// Thickbox
function Floatbox() {
  this.defaultOptions = {
    theme: 'white',
    padding: 12,
    panelPadding: 8,
    outerBorder: 4,
    innerBorder: 1,
    overlayOpacity: 55,
    controlOpacity: 60,
    autoSizeImages: true,
    autoSizeOther: false,
    resizeImages: true,
    resizeOther: false,
    resizeTool: 'topleft',
    infoCorner: 'bl',
    controlCorner: 'tr',
    positionLeft: false,
    positionTop: false,
    enableDrag: false,
    dropShadow: true,
    showCaption: true,
    showItemNumber: true,
    showClose: true,
    hideFlash: true,
    hideJava: true,
    disableScroll: false,
    preloadAll: true,
    enableCookies: false,
    cookieScope: 'site',
    language: 'auto',
    graphicsType: 'auto',
    // urlGraphics: 'https://www.p3parks.com/lib/content/images/thickbox-graphics/',
    // urlLanguages: 'https://www.p3parks.com/lib/content/javascripts/old/languages/',
    navType: 'both',
    navOverlayWidth: 35,
    navOverlayPos: 30,
    showNavOverlay: 'always',
    showHints: 'always',
    enableWrap: true,
    enableKeyboardNav: true,
    outsideClickCloses: true,
    showIndexLinks: true,
    showIndexThumbs: true,
    maxIndexCount: 17,
    indexLinksPanel: 'info',
    doAnimations: false,
    resizeDuration: 3.5,
    imageFadeDuration: 3.5,
    overlayFadeDuration: 4,
    splitResize: 'no',
    startAtClick: true,
    zoomImageStart: true,
    liveImageResize: false,
    slideInterval: 4.5,
    endTask: 'exit',
    showPlayPause: true,
    startPaused: false,
    pauseOnResize: true,
    pauseOnPrev: true,
    pauseOnNext: false
  };
  this.childOptions = {
    overlayOpacity: 45,
    resizeDuration: 3,
    imageFadeDuration: 3,
    overlayFadeDuration: 0
  };
  this.init()
}
Floatbox.prototype = {
  init: function() {
    this.win = top;
    this.doc = this.win.document;
    this.bod = this.doc.body;
    this.html = this.doc.documentElement;
    this.items = [];
    this.nodeNames = [];
    this.hiddenEls = [];
    this.timeouts = {};
    this.pos = {};
    this.setOptions(this.defaultOptions);
    if (typeof fbPageOptions === 'object') this.setOptions(fbPageOptions);
    this.setOptions(this.parseOptionString(this.win.location.search.substring(1)));
    this.panelGap = 22;
    this.infoLinkGap = 16;
    this.showHintsTime = 1600;
    this.zoomPopBorder = 1;
    this.controlSpacing = 8;
    this.minIndexWidth = 120;
    this.ctrlJump = 5;
    this.slowLoadDelay = 750;
    this.loaderDelay = 200;
    this.shadowSize = 8;
    this.initialSize = 100;
    this.slowZoomImg = this.urlGraphics + 'loading_white.gif';
    this.slowLoadImg = this.urlGraphics + 'loading_black.gif';
    this.iframeSrc = this.urlGraphics + 'loading_iframe.html';
    this.resizeUpCursor = this.urlGraphics + 'magnify_plus.cur';
    this.resizeDownCursor = this.urlGraphics + 'magnify_minus.cur';
    this.notFoundImg = this.urlGraphics + '404.jpg';
    this.defaultWidth = '85%';
    this.defaultHeight = '82%';
    this.minInfoWidth = 80;
    if (!(this.isChild = !!(this.win.floatbox && this.win.floatbox.fbBox))) {
      this.fbParent = this.lastChild = this;
      this.anchors = [];
      this.children = [];
      this.content = {};
      this.preloads = {};
      this.preloads.count = 0;
      this.xhr = this.getXMLHttpRequest();
      this.strings = {
        hintClose: 'Konec (klávesa: Esc)',
        hintPrev: 'Předcházející (klávesa: <--)',
        hintNext: 'Další (klávesa: -->)',
        hintPlay: 'Přehrát (klávesa: mezerník)',
        hintPause: 'Pause (klávesa: mezerník)',
        hintResize: 'Změna velikosti (klávesa: Tab)',
        imgCount: 'Obrázek %1 z %2',
        nonImgCount: 'Strana %1 z %2',
        mixedCount: '(%1 z %2)',
        infoText: 'Informace...',
        printText: 'Vytisknout...'
      }
    } else {
      this.anchors = fb.anchors;
      this.children = fb.children;
      this.content = fb.content;
      this.xhr = fb.xhr;
      this.strings = fb.strings;
      this.fbParent = fb.lastChild;
      if (this.fbParent.isSlideshow) this.fbParent.setPause(true);
      fb.lastChild = this;
      this.children.push(this)
    }
    this.mac = navigator.appVersion.indexOf('Macintosh') !== -1;
    if (window.opera) {
      this.opera = true;
      this.operaOld = !document.getElementsByClassName;
      this.operaMac = this.mac
    } else if (document.all) {
      this.ie = true;
      this.ieOld = parseInt(navigator.appVersion.substr(navigator.appVersion.indexOf('MSIE') + 5), 10) < 7;
      this.ie8b2 = window.postMessage && navigator.appMinorVersion === 'beta 2';
      this.ieXP = parseInt(navigator.appVersion.substr(navigator.appVersion.indexOf('Windows NT') + 11), 10) < 6
    } else if (navigator.userAgent.indexOf('Firefox') !== -1) {
      this.ff = true;
      this.ffOld = !document.getElementsByClassName;
      this.ffNew = !this.ffOld;
      this.ffMac = this.mac
    } else if (navigator.appVersion.indexOf('WebKit') !== -1) {
      this.webkit = true;
      this.webkitNew = parseInt(navigator.appVersion.substr(navigator.appVersion.indexOf('WebKit') + 7), 10) >= 500;
      this.webkitOld = !this.webkitNew;
      this.webkitMac = this.mac
    }
    this.browserLanguage = (navigator.language || navigator.userLanguage || navigator.systemLanguage || navigator.browserLanguage || 'en').substring(0, 2);
    if (!this.isChild) {
      var lang = this.language === 'auto' ? this.browserLanguage : this.language;
      if (this.xhr) {
        var that = this;
        this.xhr.getResponse(this.urlLanguages + lang + '.json.js', function(xhr) {
          if ((xhr.status === 200 || xhr.status === 203 || xhr.status === 304) && xhr.responseText) {
            var text = xhr.responseText;
            if (that.ieXP) {
              text = text.replace(String.fromCharCode(8592), '<--').replace(String.fromCharCode(8594), '-->')
            }
            try {
              var obj = eval('(' + text + ')');
              if (obj && obj.hintClose) that.strings = obj
            } catch (e) {}
          }
        })
      }
    }
    if (this.graphicsType.toLowerCase() === 'english' || (this.graphicsType === 'auto' && this.browserLanguage === 'en')) {
      this.offPos = 'top left';
      this.onPos = 'bottom left'
    } else {
      this.offPos = 'top right';
      this.onPos = 'bottom right';
      this.controlSpacing = 0
    }
    this.zIndex = {
      base: 90000 + 10 * this.children.length,
      fbOverlay: 1,
      fbBox: 2,
      fbCanvas: 3,
      fbMainDiv: 4,
      fbLeftNav: 5,
      fbRightNav: 5,
      fbOverlayPrev: 6,
      fbOverlayNext: 6,
      fbResizer: 7,
      fbZoomDiv: 8,
      fbInfoPanel: 8,
      fbControlPanel: 8
    };
    var match = /\bautoStart=(.+?)(?:&|$)/i.exec(this.win.location.search);
    this.autoHref = match ? match[1] : false
  },
  tagAnchors: function(baseEl) {
    var that = this,
      doOutline = this.ieOld && /^fb/.test(baseEl.id);

    function tag(tagName) {
      var elements = baseEl.getElementsByTagName(tagName);
      for (var i = 0, len = elements.length; i < len; i++) {
        var el = elements[i];
        var elClass = el.getAttribute('class');
        elClass = elClass ? elClass : el.getAttribute('className');
        if (elClass) {
          for (var att in elClass) {
            if (that.autoGallery && that.fileType(el.href) === 'img' && att !== 'nofloatbox') {
              el.setAttribute('className', 'floatbox.autoGallery');
              if (that.autoTitle && !el.getAttribute('title')) el.setAttribute('title', that.autoTitle)
            }
          }
        }
        if (doOutline) el.setAttribute('hideFocus', 'true');
        that.tagOneAnchor(el)
      }
    }
    tag('a');
    tag('area')
  },
  tagOneAnchor: function(anchor) {
    var that = this,
      isAnchor = !!anchor.getAttribute;
    if (isAnchor) {
      var elClass = anchor.getAttribute('class');
      elClass = elClass ? elClass : anchor.getAttribute('className');
      var relation = null;
      if (elClass) {
        var classes = elClass.split(' ');
        for (var att in classes) {
          if (/^(thickbox|gallery|iframe|slideshow|lytebox|lyteshow|lyteframe|lightbox)/i.test(classes[att])) {
            relation = classes[att];
            break
          }
        }
      }
      var a = {
        href: anchor.href || anchor.getAttribute('href'),
        rel: relation,
        rev: anchor.getAttribute('rev'),
        title: anchor.getAttribute('title'),
        anchor: anchor,
        thumb: this.getThumb(anchor)
      };
      var match;
      if (a.thumb && (match = /(?:^|\s)fbPop(up|down)(?:\s|$)/i.exec(anchor.className))) {
        a.popup = true;
        var up = (match[1] === 'up');
        a.thumb.style.borderWidth = this.zoomPopBorder + 'px';
        anchor.onmouseover = function() {
          a.thumb.style.display = 'none';
          var aPos = that.getLeftTop(this, true),
            aLeft = aPos.left,
            aTop = aPos.top;
          aPos = that.getLayout(this);
          a.thumb.style.display = '';
          var relLeft = (aPos.width - a.thumb.offsetWidth) / 2,
            relTop = up ? 2 - a.thumb.offsetHeight : aPos.height,
            scroll = that.getScroll(),
            screenRight = scroll.left + that.getDisplayWidth();
          var spill = aPos.left + relLeft + a.thumb.offsetWidth - screenRight;
          if (spill > 0) relLeft -= spill;
          var spill = aPos.left + relLeft - scroll.left;
          if (spill < 0) relLeft -= spill;
          if (up) {
            if (aPos.top + relTop < scroll.top) relTop = aPos.height
          } else {
            if (aPos.top + relTop + a.thumb.offsetHeight > scroll.top + that.getDisplayHeight()) relTop = 2 - a.thumb.offsetHeight
          }
          a.thumb.style.left = (aLeft + relLeft) + 'px';
          a.thumb.style.top = (aTop + relTop) + 'px'
        };
        anchor.onmouseout = function() {
          a.thumb.style.left = '-9999px';
          a.thumb.style.top = '0'
        }
      }
    } else {
      var a = anchor
    }
    if (/^(thickbox|gallery|iframe|slideshow|lytebox|lyteshow|lyteframe|lightbox)/i.test(a.rel)) {
      if (isAnchor) {
        anchor.onclick = function() {
          fb.start(this);
          return false
        }
      }
      a.revOptions = this.parseOptionString(a.rev);
      a.level = this.children.length + (fb.lastChild.fbBox && !a.revOptions.sameBox ? 1 : 0);
      var a_i, i = this.anchors.length;
      while (i--) {
        a_i = this.anchors[i];
        if (a_i.href === a.href && a_i.rel === a.rel && a_i.rev === a.rev && a_i.title === a.title && a_i.level === a.level) {
          a_i.anchor = anchor;
          break
        }
      }
      if (i === -1) {
        var match = /\btype\s*[:=]\s*(\w+?)\b/i.exec(a.rev),
          revType = match ? match[1].toLowerCase() : '';
        a.type = revType || this.fileType(a.href);
        if (a.type === 'flash' || a.type === 'quicktime') {
          this.content[a.href] = this.objectHTML(a.href, a.type)
        } else if (a.type === 'html') {
          var match = /#(\w+)/.exec(a.href);
          if (match) {
            var doc = this.doc;
            if (a.anchor) {
              doc = a.anchor.ownerDocument || a.anchor.document || doc
            }
            if (doc === this.doc && this.currentItem && this.currentItem.anchor) {
              doc = this.currentItem.anchor.ownerDocument || this.currentItem.anchor.document || doc
            }
            var el = doc.getElementById(match[1]);
            if (el) {
              a.type = 'inline';
              this.content[a.href] = el.cloneNode(true)
            } else {
              a.type = 'iframe'
            }
          } else {
            a.type = 'iframe'
          }
        }
        this.anchors.push(a);
        if (this.autoHref) {
          if (a.revOptions.showThis !== false && this.autoHref === a.href.substr(a.href.length - this.autoHref.length)) this.autoStart = a
        } else {
          if (a.revOptions.autoStart) this.autoStart = a
        }
      }
    }
    return a
  },
  fileType: function(href) {
    var s = href.toLowerCase(),
      i = s.indexOf('?');
    if (i !== -1) s = s.substr(0, i);
    s = s.substr(s.lastIndexOf('.') + 1);
    if (/^(jpg|jpeg|png|gif|bmp)$/.test(s)) return 'img';
    if (s === 'swf' || /^(http:)?\/\/(www.)?youtube.com\/v\//i.test(href)) return 'flash';
    if (/^(mov|mpg|mpeg|movie)$/.test(s)) return 'quicktime';
    return 'html'
  },
  objectHTML: function(href, type) {
    if (type === 'flash') {
      var classid = 'classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"',
        mime = 'type="application/x-shockwave-flash"',
        pluginurl = 'http://get.adobe.com/flashplayer/',
        match = /\bwmode=(\w+?)\b/i.exec(href),
        wmode = match ? match[1] : 'window',
        match = /\bbgcolor=(#\w+?)\b/i.exec(href),
        bgcolor = match ? match[1] : '',
        match = /\bscale=(\w+?)\b/i.exec(href),
        scale = match ? match[1] : 'exactfit',
        params = {
          wmode: wmode,
          bgcolor: bgcolor,
          scale: scale,
          quality: 'high',
          flashvars: 'autoplay=1&amp;ap=true&amp;border=0&amp;rel=0'
        };
      if (this.ffOld) params.wmode = this.ffMac ? 'window' : 'opaque';
      if (this.ffNew && href.indexOf('YV_YEP.swf') !== -1) params.wmode = 'window'
    } else {
      var classid = 'classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B"',
        mime = 'type="video/quicktime"',
        pluginurl = 'http://www.apple.com/quicktime/download/',
        params = {
          autoplay: 'true',
          controller: 'true',
          showlogo: 'false',
          scale: 'tofit'
        }
    }
    var html = '<object id="fbObject" name="fbObject" width="%width%" height="%height%" ';
    if (this.ie) {
      html += classid + '>';
      params[type === 'flash' ? 'movie' : 'src'] = this.encodeHTML(href)
    } else {
      html += mime + ' data="' + this.encodeHTML(href) + '">'
    }
    for (var name in params) {
      if (params.hasOwnProperty(name)) {
        html += '<param name="' + name + '" value="' + params[name] + '" />'
      }
    }
    if (type === 'quicktime' && this.webkitMac) {
      html += '<embed src="' + this.encodeHTML(href) + '" width="%width%" height="%height%" autoplay="true" controller="true" showlogo="false" scale="tofit" pluginspage="' + pluginurl + '"></embed></object>'
    } else {
      html += '<p style="color:#000; background:#fff; margin:1em; padding:1em;">' + (type === 'flash' ? 'Flash' : 'QuickTime') + ' player is required to view this content.' + '<br /><a href="' + pluginurl + '">download player</a></p></object>'
    }
    return html
  },
  preloadImages: function(href, chain) {
    if (this !== fb) return fb.preloadImages(href, chain);
    var that = this;
    if (typeof chain !== 'undefined') arguments.callee.chain = chain;
    if (!href && arguments.callee.chain && (this.preloadAll || !this.preloads.count)) {
      for (var i = 0, len = this.anchors.length; i < len; i++) {
        var a = this.anchors[i];
        if (a.type === 'img' && !this.preloads[a.href]) {
          href = a.href;
          break
        }
      }
    }
    if (href) {
      if (this.preloads[href]) {
        this.preloadImages()
      } else {
        var img = this.preloads[href] = new Image();
        img.onerror = function() {
          setTimeout(function() {
            that.preloadImages()
          }, 50);
          that.preloads[href] = true
        };
        img.onload = function() {
          that.preloads.count++;
          this.onerror()
        };
        img.src = href
      }
    }
  },
  start: function(anchor) {
    if (this !== fb.lastChild) return fb.lastChild.start(anchor);
    var that = this;
    this.preloadImages('', false);
    if (anchor.getAttribute) {
      var relation = null;
      var elClass = anchor.getAttribute('class');
      elClass = elClass ? elClass : anchor.getAttribute('className');
      if (elClass) {
        var classes = elClass.split(' ');
        for (var att in classes) {
          if (/^(thickbox|gallery|iframe|slideshow|lytebox|lyteshow|lyteframe|lightbox)/i.test(classes[att])) {
            relation = classes[att];
            break
          }
        }
      }
      var a = {
        href: anchor.href || anchor.getAttribute('href'),
        rel: relation,
        rev: anchor.getAttribute('rev'),
        title: anchor.getAttribute('title')
      };
      a.revOptions = this.parseOptionString(a.rev);
      anchor.blur()
    } else {
      var a = anchor
    }
    this.isRestart = !!this.fbBox;
    if (this.isRestart) {
      if (!a.revOptions.sameBox) return new Floatbox().start(anchor);
      this.setOptions(a.revOptions)
    } else {
      this.clickedAnchor = anchor.getAttribute ? anchor : false
    }
    a.level = this.children.length + (fb.lastChild.fbBox && !a.revOptions.sameBox ? 1 : 0);
    this.itemsShown = 0;
    fb.previousAnchor = this.currentItem;
    this.buildItemArray(a);
    if (!this.itemCount) return;
    if (this.itemCount === 1 && this.fbNavControls) this.fbNavControls.style.display = 'none';
    this.win.focus();
    this.revOptions = a.revOptions;
    if (!this.isRestart) {
      this.getOptions();
      this.buildDOM();
      this.addEventHandlers();
      this.initState()
    }
    this.collapse();
    this.updatePanels();
    var fetchAndGo = function() {
      that.fetchContent(function() {
        that.clearTimeout('slowLoad');
        that.calcSize()
      })
    };
    if (this.fbBox.style.visibility || this.isRestart) {
      fetchAndGo()
    } else {
      var offset = this.initialSize / 2,
        size = {
          id: 'fbBox',
          left: that.pos.fbBox.left - offset,
          top: that.pos.fbBox.top - offset,
          width: that.initialSize,
          height: that.initialSize,
          borderWidth: that.outerBorder
        };
      if (this.splitResize) {
        var oncomplete = function() {
          that.setSize(fetchAndGo, size)
        }
      } else {
        this.timeouts.slowLoad = setTimeout(function() {
          that.setSize(size)
        }, this.slowLoadDelay);
        var oncomplete = fetchAndGo
      }
      this.fadeOpacity(this.fbOverlay, this.overlayOpacity, this.overlayFadeDuration, oncomplete)
    }
  },
  buildItemArray: function(a) {
    this.itemCount = this.items.length = this.currentIndex = 0;
    this.justImages = true;
    var isSingle = /^(thickbox|gallery|iframe|lytebox|lyteframe|lightbox)$/i.test(a.rel);
    for (var i = 0, len = this.anchors.length; i < len; i++) {
      var a_i = this.anchors[i];
      if (a_i.rel === a.rel && a_i.level === a.level) {
        if (a_i.revOptions.showThis !== false) {
          var isMatch = a_i.rev === a.rev && a_i.title === a.title && a_i.href === a.href.substr(a.href.length - a_i.href.length);
          if (isMatch || !isSingle) {
            a_i.seen = false;
            this.items.push(a_i);
            if (a_i.type !== 'img') this.justImages = false;
            if (isMatch) this.currentIndex = this.items.length - 1
          }
        }
      }
    }
    if (a.revOptions.showThis === false && a.href) {
      i = this.items.length;
      while (i--) {
        var href = this.items[i].href;
        if (href === a.href.substr(a.href.length - href.length)) {
          this.currentIndex = i
        }
      }
    }
    this.itemCount = this.items.length;
    this.currentItem = this.items[this.currentIndex]
  },
  getOptions: function() {
    if (this.isChild) {
      for (var name in this.defaultOptions) {
        if (this.defaultOptions.hasOwnProperty(name)) this[name] = this.fbParent[name]
      }
      this.setOptions(this.childOptions)
    } else {
      this.setOptions(this.defaultOptions)
    }
    this.doSlideshow = this.loadPageOnClose = this.sameBox = false;
    if (!(this.isChild || this.fbBox)) {
      if (typeof this.win.setFloatboxOptions === 'function') this.win.setFloatboxOptions();
      if (typeof fbPageOptions === 'object') this.setOptions(fbPageOptions);
      if (this.enableCookies) {
        var match = /fbOptions=(.+?)(;|$)/.exec(this.doc.cookie);
        if (match) this.setOptions(this.parseOptionString(match[1]));
        var strOptions = '';
        for (var name in this.defaultOptions) {
          if (this.defaultOptions.hasOwnProperty(name)) {
            strOptions += ' ' + name + ':' + this[name]
          }
        }
        var strPath = '/';
        if (this.cookieScope === 'folder') {
          strPath = this.win.location.pathname;
          strPath = strPath.substring(0, strPath.lastIndexOf('/') + 1)
        }
        this.doc.cookie = 'fbOptions=' + strOptions + '; path=' + strPath
      }
    }
    this.setOptions(this.revOptions);
    this.setOptions(this.parseOptionString(this.win.location.search.substring(1)));
    if (this.theme === 'grey') this.theme = 'white';
    if (this.endTask === 'cont') this.endTask = 'loop';
    if (this.navType === 'upper') this.navType = 'overlay';
    if (this.navType === 'lower') this.navType = 'button';
    if (this.upperOpacity) this.controlOpacity = this.upperOpacity;
    if (this.upperNavWidth) this.navOverlayWidth = this.upperNavWidth;
    if (this.upperNavPos) this.navOverlayPos = this.upperNavPos;
    if (this.showUpperNav) this.showNavOverlay = this.showUpperNav;
    if (!/^(auto|black|white|blue|yellow|red|custom)$/.test(this.theme)) this.theme = 'auto';
    if (!/^(overlay|button|both|none)$/i.test(this.navType)) this.navType = 'button';
    if (!/^(auto|wh|hw)$/.test(this.splitResize)) this.splitResize = false;
    if (this.webkitOld && (this.navType === 'overlay' || this.navType === 'both')) {
      this.navType = 'button'
    }
    if (this.itemCount > 1) {
      this.isSlideshow = this.doSlideshow || /^(slideshow|lyteshow)/i.test(this.currentItem.rel);
      var overlayRequest = /overlay|both/i.test(this.navType),
        buttonRequest = /button|both/i.test(this.navType);
      this.navOverlay = this.justImages && overlayRequest;
      this.navButton = buttonRequest || (!this.justImages && overlayRequest)
    } else {
      this.isSlideshow = this.navOverlay = this.navButton = this.showItemNumber = this.showIndexLinks = false
    }
    this.isPaused = this.startPaused;
    if ((this.lclTheme = this.theme) === 'auto') {
      this.lclTheme = this.currentItem.type === 'img' ? 'black' : /flash|quicktime/.test(this.currentItem.type) ? 'blue' : 'white'
    }
    if (!this.doAnimations) {
      this.resizeDuration = this.imageFadeDuration = this.overlayFadeDuration = 0
    }
    if (!this.resizeDuration) this.zoomImageStart = false;
    this.infoTop = this.infoCorner.charAt(0) === 't';
    this.infoLeft = this.infoCorner.charAt(1) !== 'r';
    this.controlTop = this.controlCorner.charAt(0) === 't';
    this.controlLeft = this.controlCorner.charAt(1) === 'l';
    if (this.infoLeft === this.controlLeft && this.infoTop === this.controlTop) {
      this.infoLeft = true;
      this.controlLeft = false
    }
    if (this.indexLinksPanel === 'info') {
      this.indexLeft = this.infoLeft;
      this.indexTop = this.infoTop
    } else {
      this.indexLeft = this.controlLeft;
      this.indexTop = this.controlTop
    }
    if (this.opera || (this.mac && !this.webkitNew)) {
      this.resizeTool = 'topleft'
    } else {
      this.resizeTool = this.resizeTool.toLowerCase();
      if (!/topleft|cursor|both/.test(this.resizeTool)) this.resizeTool = 'cursor'
    }
    if (this.ieOld) this.dropShadow = false;
    this.overlayOpacity /= 100;
    this.controlOpacity /= 100
  },
  parseOptionString: function(str) {
    if (!str) return {};
    var quotes = [],
      match, rex = /`([^`]*?)`/g;
    while ((match = rex.exec(str))) quotes.push(match[1]);
    if (quotes.length) str = str.replace(rex, '``');
    str = str.replace(/\s*[:=]\s*/g, ':');
    str = str.replace(/\s*[;&]\s*/g, ' ');
    str = str.replace(/^\s+|\s+$/g, '');
    var pairs = {},
      aVars = str.split(' '),
      i = aVars.length;
    while (i--) {
      var aThisVar = aVars[i].split(':'),
        name = aThisVar[0],
        value = aThisVar[1];
      if (typeof value === 'string') {
        if (!isNaN(value)) value = +value;
        else if (value === 'true') value = true;
        else if (value === 'false') value = false
      }
      if (value === '``') value = quotes.pop() || '';
      pairs[name] = value
    }
    return pairs
  },
  setOptions: function(pairs) {
    for (var name in pairs) {
      if (pairs.hasOwnProperty(name)) this[name] = pairs[name]
    }
  },
  buildDOM: function() {
    this.fbOverlay = this.newNode('div', 'fbOverlay', this.bod);
    this.fbZoomDiv = this.newNode('div', 'fbZoomDiv', this.bod);
    this.fbZoomImg = this.newNode('img', 'fbZoomImg', this.fbZoomDiv);
    this.fbBox = this.newNode('div', 'fbBox');
    this.fbShadowRight = this.newNode('div', 'fbShadowRight', this.fbBox);
    this.fbShadowBottom = this.newNode('div', 'fbShadowBottom', this.fbBox);
    this.fbShadowCorner = this.newNode('div', 'fbShadowCorner', this.fbBox);
    this.fbLoader = this.newNode('div', 'fbLoader', this.fbBox);
    this.fbCanvas = this.newNode('div', 'fbCanvas', this.fbBox);
    this.fbMainDiv = this.newNode('div', 'fbMainDiv', this.fbCanvas);
    this.fbLeftNav = this.newNode('a', 'fbLeftNav', this.fbMainDiv);
    this.fbRightNav = this.newNode('a', 'fbRightNav', this.fbMainDiv);
    this.fbOverlayPrev = this.newNode('a', 'fbOverlayPrev', this.fbMainDiv, this.strings.hintPrev);
    this.fbOverlayNext = this.newNode('a', 'fbOverlayNext', this.fbMainDiv, this.strings.hintNext);
    this.fbInfoPanel = this.newNode('div', 'fbInfoPanel', this.fbCanvas);
    this.fbCaptionDiv = this.newNode('div', 'fbCaptionDiv', this.fbInfoPanel);
    this.fbCaption = this.newNode('span', 'fbCaption', this.fbCaptionDiv);
    this.fbInfoLink = this.newNode('span', 'fbInfoLink', this.fbInfoPanel);
    this.fbPrintLink = this.newNode('span', 'fbPrintLink', this.fbInfoPanel);
    this.fbItemNumber = this.newNode('span', 'fbItemNumber', this.fbInfoPanel);
    this.fbControlPanel = this.newNode('div', 'fbControlPanel', this.fbCanvas);
    this.fbClose = this.newNode('a', 'fbClose', this.fbControlPanel, this.strings.hintClose);
    this.fbResizer = this.newNode('a', 'fbResizer', this.fbControlPanel, this.strings.hintResize);
    this.fbControls = this.newNode('div', 'fbControls', this.fbControlPanel);
    this.fbNavControls = this.newNode('div', 'fbNavControls', this.fbControls);
    this.fbPrev = this.newNode('a', 'fbPrev', this.fbNavControls, this.strings.hintPrev);
    this.fbNext = this.newNode('a', 'fbNext', this.fbNavControls, this.strings.hintNext);
    this.fbSubControls = this.newNode('div', 'fbSubControls', this.fbControls);
    this.fbPlayPause = this.newNode('div', 'fbPlayPause', this.fbSubControls);
    this.fbPlay = this.newNode('a', 'fbPlay', this.fbPlayPause, this.strings.hintPlay);
    this.fbPause = this.newNode('a', 'fbPause', this.fbPlayPause, this.strings.hintPause);
    this.fbIndexLinks = this.newNode('span', 'fbIndexLinks', this.indexLinksPanel === 'info' ? this.fbInfoPanel : this.fbControlPanel);
    this.bod.appendChild(this.fbBox)
  },
  newNode: function(nodeType, id, parentNode, title) {
    if (this[id] && this[id].parentNode) {
      this[id].parentNode.removeChild(this[id])
    }
    var node = this.doc.createElement(nodeType);
    node.id = id;
    node.className = id + '_' + this.lclTheme;
    if (nodeType === 'a') {
      if (!this.operaOld) node.setAttribute('href', '');
      if (this.ieOld) node.setAttribute('hideFocus', 'true');
      node.style.outline = 'none'
    } else if (nodeType === 'iframe') {
      node.setAttribute('scrolling', this.itemScroll);
      node.setAttribute('frameBorder', '0');
      node.setAttribute('align', 'middle');
      node.src = this.iframeSrc
    }
    if (this.isChild) title = this.fbParent[id].getAttribute('title');
    if (title && this.showHints !== 'never') node.setAttribute('title', title);
    if (this.zIndex[id]) node.style.zIndex = this.zIndex.base + this.zIndex[id];
    node.style.display = 'none';
    if (parentNode) parentNode.appendChild(node);
    this.nodeNames.push(id);
    return node
  },
  addEventHandlers: function() {
    var that = this,
      leftNav = this.fbLeftNav.style,
      rightNav = this.fbRightNav.style,
      overlayPrev = this.fbOverlayPrev.style,
      overlayNext = this.fbOverlayNext.style,
      prev = this.fbPrev.style,
      next = this.fbNext.style;
    if (this.showHints === 'once') {
      this.hideHint = function(id) {
        if (that[id].title) {
          that.timeouts[id] = setTimeout(function() {
            that[id].title = that.fbParent[id].title = '';
            var id2 = '';
            if (/fbOverlay(Prev|Next)/.test(id)) {
              id2 = id.replace('Overlay', '')
            } else if (/fb(Prev|Next)/.test(id)) {
              id2 = id.replace('fb', 'fbOverlay')
            }
            if (id2) that[id2].title = that.fbParent[id2].title = ''
          }, that.showHintsTime)
        }
      }
    } else {
      this.hideHint = function() {}
    }
    this.fbPlay.onclick = function() {
      that.setPause(false);
      return false
    };
    this.fbPause.onclick = function() {
      that.setPause(true);
      return false
    };
    this.fbClose.onclick = function() {
      that.end();
      return false
    };
    if (this.outsideClickCloses) {
      this.fbOverlay.onclick = function() {
        that.end();
        return false
      }
    }
    this.fbPrev.onclick = function(step) {
      if (typeof step !== 'number') step = 1;
      var newIndex = (that.currentIndex - step) % that.itemCount;
      if (newIndex < 0) newIndex += that.itemCount;
      if (that.enableWrap || newIndex < that.currentIndex) {
        that.newContent(newIndex);
        if (that.isSlideshow && that.pauseOnPrev && !that.isPaused) {
          that.setPause(true)
        }
      }
      return false
    };
    this.fbNext.onclick = function(step) {
      if (typeof step !== 'number') step = 1;
      var newIndex = (that.currentIndex + step) % that.itemCount;
      if (that.enableWrap || newIndex > that.currentIndex) {
        that.newContent(newIndex);
        if (that.isSlideshow && that.pauseOnNext && !that.isPaused) {
          that.setPause(true)
        }
      }
      return false
    };
    this.fbLeftNav.onclick = this.fbOverlayPrev.onclick = this.fbPrev.onclick;
    this.fbRightNav.onclick = this.fbOverlayNext.onclick = this.fbNext.onclick;
    this.fbLeftNav.onmouseover = this.fbLeftNav.onmousemove = this.fbOverlayPrev.onmousemove = function() {
      if (!that.timeouts.fbCanvas) overlayPrev.visibility = '';
      if (that.navButton) prev.backgroundPosition = that.onPos;
      return true
    };
    this.fbRightNav.onmouseover = this.fbRightNav.onmousemove = this.fbOverlayNext.onmousemove = function() {
      if (!that.timeouts.fbCanvas) overlayNext.visibility = '';
      if (that.navButton) next.backgroundPosition = that.onPos;
      return true
    };
    this.fbOverlayPrev.onmouseover = this.fbOverlayNext.onmouseover = function() {
      this.onmousemove();
      that.hideHint(this.id);
      return true
    };
    this.fbLeftNav.onmouseout = function() {
      overlayPrev.visibility = 'hidden';
      if (that.navButton) prev.backgroundPosition = that.offPos
    };
    this.fbRightNav.onmouseout = function() {
      overlayNext.visibility = 'hidden';
      if (that.navButton) next.backgroundPosition = that.offPos
    };
    this.fbOverlayPrev.onmouseout = this.fbOverlayNext.onmouseout = function() {
      this.style.visibility = 'hidden';
      that.clearTimeout(this.id)
    };
    this.fbLeftNav.onmousedown = this.fbRightNav.onmousedown = function(e) {
      e = e || that.win.event;
      if (e.button === 2) {
        leftNav.visibility = rightNav.visibility = 'hidden';
        that.timeouts.hideNavOverlay = setTimeout(function() {
          leftNav.visibility = rightNav.visibility = ''
        }, 600)
      }
    };
    this.fbPlay.onmouseover = this.fbPause.onmouseover = this.fbClose.onmouseover = this.fbPrev.onmouseover = this.fbNext.onmouseover = function() {
      this.style.backgroundPosition = that.onPos;
      that.hideHint(this.id);
      return true
    };
    this.fbResizer.onmouseover = function() {
      that.hideHint(this.id);
      return true
    };
    this.fbPlay.onmouseout = this.fbPause.onmouseout = this.fbClose.onmouseout = this.fbPrev.onmouseout = this.fbNext.onmouseout = function() {
      this.style.backgroundPosition = that.offPos;
      that.clearTimeout(this.id)
    };
    this.fbResizer.onmouseout = function() {
      that.clearTimeout(this.id)
    };
    if (this.enableKeyboardNav) {
      if (!this.keydownSet) {
        this.priorOnkeydown = this.doc.onkeydown;
        this.doc.onkeydown = this.keyboardAction();
        this.keydownSet = true
      }
    } else if (this.keydownSet) {
      this.doc.onkeydown = this.priorOnkeydown;
      this.keydownSet = false
    }
    if (this.opera && !this.keypressSet) {
      this.priorOnkeypress = this.doc.onkeypress;
      this.doc.onkeypress = function() {
        return false
      };
      this.keypressSet = true
    }
    if (this.enableDrag) this.fbBox.onmousedown = this.dragonDrop()
  },
  keyboardAction: function() {
    var that = this;
    return function(e) {
      e = e || that.win.event;
      var keyCode = e.keyCode || e.which;
      switch (keyCode) {
        case 37:
        case 39:
          if (that.itemCount > 1) {
            that[keyCode === 37 ? 'fbPrev' : 'fbNext'].onclick((e.ctrlKey || e.metaKey) ? that.ctrlJump : 1);
            if (that.showHints === 'once') {
              that.fbPrev.title = that.fbNext.title = that.fbOverlayPrev.title = that.fbOverlayNext.title = ''
            }
          }
          return false;
        case 32:
          if (that.isSlideshow) {
            that.setPause(!that.isPaused);
            if (that.showHints === 'once') that.fbPlay.title = that.fbPause.title = ''
          }
          return false;
        case 9:
          if (that.fbResizer.onclick) {
            that.fbResizer.onclick();
            if (that.showHints === 'once') that.fbResizer.title = ''
          }
          return false;
        case 27:
          if (that.showHints === 'once') that.fbClose.title = '';
          that.end();
          return false;
        case 13:
          return false
      }
    }
  },
  dragonDrop: function() {
    var that = this,
      fbBox = this.fbBox;
    return function(e) {
      e = e || that.win.event;
      if (/fb(Box|Canvas|Info|Caption|Item|Control|Index)/.test((e.target || e.srcElement).id)) {
        var startX = e.clientX,
          startY = e.clientY,
          box = that.fbBox.style,
          content = that.fbContent.style,
          pos = that.pos.fbBox,
          boxX = pos.left,
          boxY = pos.top;
        pos.dx = pos.dy = 0;
        var moveHandler = function(e) {
          if (that.currentItem.type === 'iframe' && !(that.ie || that.opera) && !content.visibility) content.visibility = 'hidden';
          if (that.isSlideshow && !that.isPaused) that.setPause(true);
          e = e || that.win.event;
          pos.dx = e.clientX - startX;
          pos.dy = e.clientY - startY;
          box.left = (boxX + pos.dx) + 'px';
          box.top = (boxY + pos.dy) + 'px';
          (e.stopPropagation && e.stopPropagation()) || (e.cancelBubble = true);
          that.clearTimeout('dragonDrop');
          that.timeouts.dragonDrop = setTimeout(upHandler, 1500);
          return false
        };
        var upHandler = function(e) {
          that.clearTimeout('dragonDrop');
          e = e || that.win.event;
          if (that.doc.removeEventListener) {
            that.doc.removeEventListener("mouseup", upHandler, true);
            that.doc.removeEventListener("mousemove", moveHandler, true)
          } else if (fbBox.detachEvent) {
            fbBox.detachEvent("onlosecapture", upHandler);
            fbBox.detachEvent("onmouseup", upHandler);
            fbBox.detachEvent("onmousemove", moveHandler);
            fbBox.releaseCapture()
          }
          if (e)(e.stopPropagation && e.stopPropagation()) || (e.cancelBubble = true);
          pos.left += pos.dx;
          pos.top += pos.dy;
          content.visibility = '';
          return false
        };
        if (that.doc.addEventListener) {
          that.doc.addEventListener("mousemove", moveHandler, true);
          that.doc.addEventListener("mouseup", upHandler, true)
        } else if (fbBox.attachEvent) {
          fbBox.setCapture();
          fbBox.attachEvent("onmousemove", moveHandler);
          fbBox.attachEvent("onmouseup", upHandler);
          fbBox.attachEvent("onlosecapture", upHandler)
        }
        return false
      }
    }
  },
  initState: function() {
    var that = this,
      box = this.fbBox.style,
      mainDiv = this.fbMainDiv.style,
      resizer = this.fbResizer.style,
      canvas = this.fbCanvas.style,
      zoomDiv = this.fbZoomDiv.style,
      zoomImg = this.fbZoomImg.style;
    if (this.currentItem.popup) this.currentItem.anchor.onmouseover();
    var anchorPos = this.getAnchorPos(this.clickedAnchor, this.currentItem.anchor === this.clickedAnchor && this.currentItem.type === 'img');
    if (anchorPos.width) {
      this.pos.fbZoomDiv = anchorPos;
      zoomDiv.borderWidth = this.zoomPopBorder + 'px';
      zoomDiv.left = (anchorPos.left - this.zoomPopBorder) + 'px';
      zoomDiv.top = (anchorPos.top - this.zoomPopBorder) + 'px';
      zoomDiv.width = (this.fbZoomImg.width = anchorPos.width) + 'px';
      zoomDiv.height = (this.fbZoomImg.height = anchorPos.height) + 'px';
      this.fbZoomImg.src = anchorPos.src;
      box.visibility = 'hidden';
      this.timeouts.slowLoad = setTimeout(function() {
        that.fbZoomImg.src = that.slowZoomImg;
        zoomDiv.display = zoomImg.display = ''
      }, this.slowLoadDelay)
    } else {
      this.pos.fbBox = anchorPos;
      this.pos.fbBox.borderWidth = 0;
      this.pos.fbMainDiv = {
        width: 0,
        height: 0
      }
    }
    box.position = 'absolute';
    box.left = box.top = box.width = box.height = box.borderWidth = '0';
    mainDiv.borderWidth = this.innerBorder + 'px';
    mainDiv.left = this.padding + 'px';
    this.fbInfoPanel.style[this.infoLeft ? 'left' : 'right'] = this.fbControlPanel.style[this.controlLeft ? 'left' : 'right'] = Math.max(this.padding, this.panelPadding) + 'px';
    canvas.visibility = 'hidden';
    box.display = canvas.display = '';
    if (this.dropShadow) {
      var shadowRight = this.fbShadowRight.style,
        shadowBottom = this.fbShadowBottom.style,
        shadowCorner = this.fbShadowCorner.style;
      shadowRight.paddingBottom = shadowBottom.paddingRight = this.outerBorder * 2 + 'px';
      shadowRight.paddingRight = shadowBottom.paddingBottom = shadowCorner.paddingRight = shadowCorner.paddingBottom = (this.outerBorder + this.shadowSize) + 'px';
      shadowRight.top = shadowBottom.left = -this.outerBorder + 'px'
    }
    if (this.navOverlay) {
      if (fb.showNavOverlay === 'never' || (fb.showNavOverlay === 'once' && fb.navOverlayShown)) {
        fb.showNavOverlay = false
      } else {
        this.fbOverlayPrev.style.backgroundPosition = this.fbOverlayNext.style.backgroundPosition = this.onPos;
        this.fadeOpacity(this.fbOverlayPrev, this.controlOpacity);
        this.fadeOpacity(this.fbOverlayNext, this.controlOpacity)
      }
    }
    this.initPanels();
    this.lastShown = false;
    if (this.hideFlash) this.hideElements('flash');
    if (this.hideJava) this.hideElements('applet');
    if (this.ieOld) {
      this.hideElements('select');
      this.fbOverlay.style.position = 'absolute';
      this.stretchOverlay()();
      this.win.attachEvent('onresize', this.stretchOverlay());
      this.win.attachEvent('onscroll', this.stretchOverlay())
    }
  },
  getAnchorPos: function(anchor, useThumb) {
    var display = this.getDisplaySize(),
      scroll = this.getScroll(),
      noAnchorPos = {
        left: display.width / 2 + scroll.left,
        top: display.height / 3 + scroll.top,
        width: 0,
        height: 0
      };
    var thumb = useThumb ? this.getThumb(anchor) : false;
    if (thumb && this.zoomImageStart) {
      var pos = this.getLeftTop(thumb),
        border = (thumb.offsetWidth - thumb.width) / 2;
      pos.left += border;
      pos.top += border;
      pos.width = thumb.width;
      pos.height = thumb.height;
      pos.src = thumb.src
    } else if (this.startAtClick && anchor && anchor.offsetWidth && anchor.tagName.toLowerCase() === 'a') {
      var pos = this.getLayout(thumb || anchor)
    } else {
      return noAnchorPos
    }
    var centerPos = {
      left: pos.left + pos.width / 2,
      top: pos.top + pos.height / 2,
      width: 0,
      height: 0
    };
    if (centerPos.left < scroll.left || centerPos.left > (scroll.left + display.width) || centerPos.top < scroll.top || centerPos.top > (scroll.top + display.height)) {
      return noAnchorPos
    }
    return (thumb && this.zoomImageStart ? pos : centerPos)
  },
  getThumb: function(anchor) {
    var nodes = anchor && anchor.childNodes,
      i = (nodes && nodes.length) || 0;
    while (i--) {
      if ((nodes[i].tagName || '').toLowerCase() === 'img') return nodes[i]
    }
    return false
  },
  initPanels: function() {
    var infoPanel = this.fbInfoPanel.style,
      infoLink = this.fbInfoLink.style,
      printLink = this.fbPrintLink.style;
    if (this.infoLeft) {
      var infoPos = ' posLeft';
      infoPanel.textAlign = 'left';
      infoLink.paddingRight = printLink.paddingRight = this.infoLinkGap + 'px'
    } else {
      var infoPos = ' posRight';
      infoPanel.textAlign = 'right';
      infoLink.paddingLeft = printLink.paddingLeft = this.infoLinkGap + 'px'
    }
    this.fbInfoPanel.className += infoPos;
    this.fbInfoLink.className += infoPos;
    this.fbPrintLink.className += infoPos;
    this.fbItemNumber.className += infoPos;
    infoPanel.width = '400px';
    var controlPanel = this.fbControlPanel.style,
      controls = this.fbControls.style,
      subControls = this.fbSubControls.style;
    var indexLinks = this.fbIndexLinks.style;
    if (this.controlLeft) {
      var controlPos = ' posLeft';
      controlPanel.textAlign = 'left'
    } else {
      var controlPos = ' posRight';
      controlPanel.textAlign = 'right'
    }
    this.fbControlPanel.className += controlPos;
    this.fbSubControls.className += controlPos;
    this.fbControls.className += controlPos;
    if (this.navButton) {
      var prev = this.fbPrev.style,
        next = this.fbNext.style,
        navControls = this.fbNavControls.style;
      prev.backgroundPosition = next.backgroundPosition = this.offPos;
      navControls['padding' + (this.controlLeft ? 'Left' : 'Right')] = this.controlSpacing + 'px';
      this.fbNavControls.className += controlPos;
      controlPanel.display = navControls.display = prev.display = next.display = ''
    }
    var width = 0;
    if (this.showClose) {
      var close = this.fbClose.style;
      close.backgroundPosition = this.offPos;
      this.fbClose.className += controlPos;
      controlPanel.display = controls.display = subControls.display = close.display = '';
      width = this.fbClose.offsetWidth
    }
    if (this.showPlayPause && this.isSlideshow) {
      var play = this.fbPlay.style,
        pause = this.fbPause.style,
        playPause = this.fbPlayPause.style;
      play.backgroundPosition = pause.backgroundPosition = this.offPos;
      playPause['padding' + (this.controlLeft ? 'Left' : 'Right')] = this.controlSpacing + 'px';
      this.fbPlayPause.className += controlPos;
      controlPanel.display = controls.display = subControls.display = playPause.display = play.display = pause.display = '';
      play.left = this.isPaused ? '' : '-9999px';
      pause.left = this.isPaused ? '-9999px' : '';
      width += this.fbPlayPause.offsetWidth
    }
    subControls.width = width + 'px';
    controls.width = (width + this.fbNavControls.offsetWidth) + 'px';
    if (this.showIndexLinks) {
      var indexLinks = this.fbIndexLinks.style;
      if (this.indexLinksPanel === 'info') {
        this.fbIndexLinks.className += infoPos;
        infoPanel.display = '';
        if (this.showIndexThumbs) infoPanel.overflow = 'visible'
      } else {
        this.fbIndexLinks.className += controlPos;
        controlPanel.display = '';
        if (this.showIndexThumbs) controlPanel.overflow = 'visible'
      }
      if (this.indexLinksPanel !== 'info') indexLinks['padding' + (this.indexLeft ? 'Left' : 'Right')] = '2px';
      indexLinks.width = '250px';
      indexLinks.display = ''
    }
  },
  fetchContent: function(callback, phase) {
    var that = this;
    if (!phase) {
      if (this.fbContent) {
        this.fbMainDiv.removeChild(this.fbContent);
        delete this.fbContent;
        return this.timeouts.fetch = setTimeout(function() {
          that.fetchContent(callback, 1)
        }, 10)
      }
    }
    var item = this.currentItem;
    item.nativeWidth = item.revOptions.width;
    item.nativeHeight = item.revOptions.height;
    if (item.type !== 'img') {
      item.nativeWidth = item.nativeWidth || (fb.previousAnchor && fb.previousAnchor.nativeWidth) || this.defaultWidth;
      item.nativeHeight = item.nativeHeight || (fb.previousAnchor && fb.previousAnchor.nativeHeight) || this.defaultHeight
    }
    this.itemScroll = item.revOptions.scroll || item.revOptions.scrolling || 'auto';
    if (/img|iframe/.test(item.type)) {
      this.fbContent = this.newNode(item.type, 'fbContent', this.fbMainDiv);
      if (item.type === 'img') {
        var loader = new Image();
        loader.onload = function() {
          item.nativeWidth = item.nativeWidth || loader.width;
          item.nativeHeight = item.nativeHeight || loader.height;
          that.fbContent.src = loader.src;
          if (callback) callback()
        };
        loader.onerror = function() {
          if (this.src !== that.notFoundImg) this.src = that.notFoundImg
        };
        loader.src = item.href
      }
    } else {
      this.fbContent = this.newNode('div', 'fbContent', this.fbMainDiv);
      this.fbContent.style.overflow = this.itemScroll === 'yes' ? 'scroll' : (this.itemScroll === 'no' ? 'hidden' : 'auto');
      var contents = this.content[item.href];
      if (item.type === 'inline') {
        var el = contents.cloneNode(true);
        el.style.display = el.style.visibility = '';
        try {
          this.fbContent.appendChild(el)
        } catch (e) {
          this.setInnerHTML(this.fbContent, el.innerHTML)
        }
        this.tagAnchors(this.fbContent)
      } else if (item.type === 'ajax') {
        this.xhr.getResponse(item.href, function(xhr) {
          if ((xhr.status === 200 || xhr.status === 203 || xhr.status === 304) && xhr.responseText) {
            that.setInnerHTML(that.fbContent, xhr.responseText);
            that.tagAnchors(that.fbContent)
          } else {
            that.setInnerHTML(that.fbContent, '<p style="color:#000; background:#fff; margin:1em; padding:1em;">' + 'Unable to fetch content from ' + item.href + '</p>')
          }
        })
      }
    }
    this.fbContent.style.border = '0';
    this.fbContent.style.display = '';
    if (item.type !== 'img' && callback) callback()
  },
  updatePanels: function() {
    var infoPanel = this.fbInfoPanel.style,
      captionDiv = this.fbCaptionDiv.style,
      caption = this.fbCaption.style,
      infoLink = this.fbInfoLink.style,
      printLink = this.fbPrintLink.style,
      itemNumber = this.fbItemNumber.style,
      item = this.currentItem,
      str;
    infoPanel.display = captionDiv.display = caption.display = infoLink.display = printLink.display = itemNumber.display = 'none';
    if (this.showCaption) {
      str = item.revOptions.caption || item.title || '';
      if (str === 'href') str = this.currentItem.href;
      str = this.decodeHTML(str);
      if (this.setInnerHTML(this.fbCaption, str) && str) infoPanel.display = captionDiv.display = caption.display = ''
    }
    if (item.revOptions.info) {
      str = this.encodeHTML(this.decodeHTML(item.revOptions.info));
      var options = item.revOptions.infoOptions || '';
      if (options) options = this.encodeHTML(this.decodeHTML(options));
      str = '<a href="' + str + '" class="thickbox" rev="' + options + '"><b>' + (item.revOptions.infoText || this.strings.infoText) + '</b></a>';
      if (this.setInnerHTML(this.fbInfoLink, str)) infoPanel.display = infoLink.display = ''
    }
    if (this.showPrint) {
      var css = this.printCSS || '';
      str = '<a href="' + this.encodeHTML(this.currentItem.href) + '" onclick="fb.printContents(null, \'' + css + '\'); return false;"><b>' + (item.revOptions.printText || this.strings.printText) + '</b></a>';
      if (this.setInnerHTML(this.fbPrintLink, str)) infoPanel.display = printLink.display = ''
    }
    if (this.showItemNumber) {
      str = this.justImages ? this.strings.imgCount : this.strings.nonImgCount;
      str = str.replace('%1', this.currentIndex + 1);
      str = str.replace('%2', this.itemCount);
      if (this.setInnerHTML(this.fbItemNumber, str)) infoPanel.display = itemNumber.display = ''
    }
    if (this.showIndexLinks) {
      str = '';
      var max = this.itemCount - 1,
        loRange, hiRange;
      if (!this.maxIndexCount) {
        loRange = 0;
        hiRange = max
      } else {
        var range = Math.floor(this.maxIndexCount / 2) - 1;
        loRange = this.currentIndex - range;
        hiRange = this.currentIndex + range;
        if (loRange <= 0) hiRange += Math.min(1 - loRange, range);
        if (this.currentIndex === 0) hiRange++;
        if (hiRange - max >= 0) loRange -= Math.min(1 + hiRange - max, range);
        if (this.currentIndex === max) loRange--
      }
      var pos = this.indexTop ? 'down' : 'up',
        i = 0;
      while (i < this.itemCount) {
        if (i !== 0 && i < loRange) {
          str += '... ';
          i = loRange
        } else if (i !== max && i > hiRange) {
          str += '... ';
          i = max
        } else {
          if (i !== this.currentIndex) {
            var item = this.items[i];
            str += '<a class="fbPop' + pos + ' nothickbox" href="' + item.href + '" onclick="fb.newContent(' + i + ');return false;">' + ++i;
            if (this.showIndexThumbs && item.thumb) {
              str += '<img src="' + item.thumb.src + '" />'
            }
            str += '</a> '
          } else {
            str += ++i + ' '
          }
        }
      }
      if (this.setInnerHTML(this.fbIndexLinks, str)) this.tagAnchors(this.fbIndexLinks)
    }
    if (!infoPanel.display) this.tagAnchors(this.fbInfoPanel)
  },
  calcSize: function(fit, pass) {
    var that = this;
    if (!this.fbBox) return;
    var boxX, boxY, boxW, boxH, mainW, mainH;
    if (typeof fit === 'undefined') {
      fit = this.currentItem.type === 'img' ? this.autoSizeImages : this.autoSizeOther
    }
    var box = this.fbBox.style,
      infoPanel = this.fbInfoPanel.style,
      indexLinks = this.fbIndexLinks.style,
      captionDiv = this.fbCaptionDiv.style,
      itemNumber = this.fbItemNumber.style;
    if (!pass) {
      this.displaySize = this.getDisplaySize();
      if (this.showCaption && this.fbCaption.innerHTML) captionDiv.display = '';
      if (this.showItemNumber) itemNumber.display = ''
    }
    this.upperSpace = Math.max(this.infoTop ? this.fbInfoPanel.offsetHeight : 0, this.controlTop ? this.fbControlPanel.offsetHeight : 0);
    this.lowerSpace = Math.max(this.infoTop ? 0 : this.fbInfoPanel.offsetHeight, this.controlTop ? 0 : this.fbControlPanel.offsetHeight);
    if (this.upperSpace) this.upperSpace += 2 * this.panelPadding;
    if (this.lowerSpace) this.lowerSpace += 2 * this.panelPadding;
    this.upperSpace = Math.max(this.upperSpace, this.padding);
    this.lowerSpace = Math.max(this.lowerSpace, this.padding);
    var frame = 2 * (this.outerBorder + this.innerBorder + this.shadowSize),
      maxW = this.displaySize.width - frame - 2 * this.padding,
      maxH = this.displaySize.height - frame - this.upperSpace - this.lowerSpace,
      hardW = false,
      hardH = false;
    mainW = this.currentItem.nativeWidth + '';
    if (mainW === 'max') {
      mainW = maxW
    } else if (mainW.substr(mainW.length - 1) === '%') {
      mainW = Math.floor((maxW + 2 * this.shadowSize) * parseInt(mainW, 10) / 100)
    } else {
      mainW = parseInt(mainW, 10);
      hardW = true
    }
    mainH = this.currentItem.nativeHeight + '';
    if (mainH === 'max') {
      mainH = maxH
    } else if (mainH.substr(mainH.length - 1) === '%') {
      mainH = Math.floor((maxH + 2 * this.shadowSize) * parseInt(mainH, 10) / 100)
    } else {
      mainH = parseInt(mainH, 10);
      hardH = true
    }
    this.scaledBy = this.oversizedBy = 0;
    if (fit) {
      var scaleW = maxW / mainW,
        scaleH = maxH / mainH,
        w = mainW,
        h = mainH;
      if (hardW && hardH) scaleW = scaleH = Math.min(scaleW, scaleH);
      if (scaleW < 1) mainW = Math.round(mainW * scaleW);
      if (scaleH < 1) mainH = Math.round(mainH * scaleH);
      this.scaledBy = Math.max(w - mainW, h - mainH);
      if (this.scaledBy && this.scaledBy < this.outerBorder + 2 * this.shadowSize + this.panelPadding) {
        mainW = w;
        mainH = h;
        this.scaledBy = 0
      }
    }
    boxW = mainW + 2 * (this.innerBorder + this.padding);
    boxH = mainH + 2 * this.innerBorder + this.upperSpace + this.lowerSpace;
    var infoW = boxW - 2 * Math.max(this.padding, this.panelPadding);
    if (this.infoTop === this.controlTop && this.fbControls.offsetWidth) {
      infoW -= this.fbControls.offsetWidth + this.panelGap
    }
    if (infoW < 0) infoW = 0;
    if (this.indexLinksPanel === 'info') {
      var indexW = infoW
    } else {
      var infoUsed = Math.max(this.fbCaption.offsetWidth, this.fbInfoLink.offsetWidth + this.fbPrintLink.offsetWidth + this.fbItemNumber.offsetWidth);
      var indexW = Math.max(this.minIndexWidth, this.fbControls.offsetWidth, (boxW - infoUsed - 2 * Math.max(this.padding, this.panelPadding)));
      if (infoUsed) indexW -= this.panelGap
    }
    var infoH = this.fbInfoPanel.offsetHeight,
      indexH = this.fbIndexLinks.offsetHeight;
    infoPanel.width = infoW + 'px';
    indexLinks.width = indexW + 'px';
    var changed = this.fbInfoPanel.offsetHeight !== infoH || this.fbIndexLinks.offsetHeight !== indexH;
    if (this.showCaption) {
      if (this.minInfoWidth > infoW && !captionDiv.display) {
        captionDiv.display = 'none';
        changed = true
      }
    }
    if (this.showItemNumber) {
      if (this.fbInfoLink.offsetWidth + this.fbPrintLink.offsetWidth + this.fbItemNumber.offsetWidth > infoW && !itemNumber.display) {
        itemNumber.display = 'none';
        changed = true
      }
    }
    if (changed && pass !== 3) return this.calcSize(fit, (pass || 0) + 1);
    if (!fit) this.oversizedBy = Math.max(boxW - this.displaySize.width, boxH - this.displaySize.height) + 2 * this.outerBorder + this.shadowSize;
    if (this.oversizedBy < 0) this.oversizedBy = 0;
    if (typeof this.positionLeft === 'number') {
      boxX = this.positionLeft
    } else {
      var freeSpace = this.displaySize.width - boxW - 2 * this.outerBorder;
      boxX = freeSpace <= 0 ? 0 : Math.floor(freeSpace / 2);
      if (typeof this.positionLeft === 'string' && this.positionLeft.substr(this.positionLeft.length - 1) === '%') {
        boxX += parseInt(this.positionLeft, 10) / 100 * boxX
      }
    }
    if (typeof this.positionTop === 'number') {
      boxY = this.positionTop
    } else {
      var freeSpace = this.displaySize.height - boxH - 2 * this.outerBorder,
        ratio = freeSpace / this.displaySize.height,
        factor;
      if (ratio <= 0.15) {
        factor = 2
      } else if (ratio >= 0.3) {
        factor = 3
      } else {
        factor = 1 + ratio / 0.15
      }
      boxY = freeSpace <= 0 ? 0 : Math.floor(freeSpace / factor);
      if (typeof this.positionTop === 'string' && this.positionTop.substr(this.positionTop.length - 1) === '%') {
        boxY += parseInt(this.positionTop, 10) / 100 * boxY
      }
    }
    var boxPosition = box.position;
    if (this.ieOld) {
      box.display = 'none';
      this.stretchOverlay()()
    } else {
      this.setPosition(this.fbBox, 'fixed')
    }
    var scroll = this.getScroll();
    this.setPosition(this.fbBox, boxPosition);
    box.display = '';
    boxX += scroll.left;
    boxY += scroll.top;
    if (this.isChild) {
      var rex = /max|%/i,
        pos = this.fbParent.pos.fbBox,
        childX = rex.test(this.currentItem.nativeWidth) ? 99999 : (pos.left + boxX) / 2,
        childY = rex.test(this.currentItem.nativeHeight) ? 99999 : (pos.top + boxY) / 2;
      if (scroll.left < childX && scroll.top < childY) {
        boxX = Math.min(boxX, childX);
        boxY = Math.min(boxY, childY)
      }
    }
    var split = (pos = this.pos.fbBox) && !this.liveResize && this.splitResize;
    if (split === 'auto') split = boxW - pos.width <= boxH - pos.height ? 'wh' : 'hw';
    var oncomplete = function() {
      that.fbBox.style.visibility ? that.zoomIn() : that.showContent()
    };
    var setSize = function() {
      that.setSize(split, {
        id: 'fbBox',
        left: boxX,
        top: boxY,
        width: boxW,
        height: boxH,
        borderWidth: that.outerBorder
      }, {
        id: 'fbMainDiv',
        width: mainW,
        height: mainH,
        top: that.upperSpace
      }, function() {
        that.timeouts.showContent = setTimeout(oncomplete, 10)
      })
    };
    this.timeouts.setSize = setTimeout(setSize, 10)
  },
  setPosition: function(el, position) {
    if (el.style.position === position) return;
    var scroll = this.getScroll();
    if (position === 'fixed') {
      scroll.left = -scroll.left;
      scroll.top = -scroll.top
    }
    if (this.pos[el.id]) {
      this.pos[el.id].left += scroll.left;
      this.pos[el.id].top += scroll.top
    }
    el.style.left = (el.offsetLeft + scroll.left) + 'px';
    el.style.top = (el.offsetTop + scroll.top) + 'px';
    el.style.position = position
  },
  collapse: function(callback, phase) {
    var that = this;
    if (!phase) {
      this.setPosition(this.fbBox, 'absolute');
      this.fbResizer.onclick = null;
      this.fbResizer.style.display = 'none';
      if (this.fbContent) {
        this.fbContent.onclick = null;
        this.fbContent.style.cursor = ''
      }
      if (this.navOverlay) {
        this.fbLeftNav.style.display = this.fbRightNav.style.display = this.fbOverlayPrev.style.display = this.fbOverlayNext.style.display = 'none'
      }
      var opacity = 0,
        duration = 0;
      if (this.currentItem.type === 'img' && !this.fbCanvas.style.visibility) {
        if (this.currentItem === this.lastShown && this.liveImageResize) opacity = 1;
        duration = this.imageFadeDuration
      }
      this.liveResize = (opacity === 1);
      var oncomplete = function() {
        that.collapse(callback, 1)
      };
      return this.fadeOpacity(this.fbCanvas, opacity, duration, oncomplete)
    }
    if (!this.liveResize) {
      this.fbMainDiv.style.display = 'none';
      this.clearTimeout('loader');
      this.timeouts.loader = setTimeout(function() {
        that.fbLoader.style.display = ''
      }, this.loaderDelay)
    }
    var infoPanel = this.fbInfoPanel.style,
      controlPanel = this.fbControlPanel.style;
    infoPanel.visibility = controlPanel.visibility = 'hidden';
    infoPanel.left = controlPanel.left = '-9999px';
    if (callback) callback()
  },
  restore: function(callback, phase) {
    var that = this;
    if (!phase) {
      if (this.fbShadowRight.style.display && this.dropShadow) {
        this.fbShadowRight.style.display = this.fbShadowBottom.style.display = this.fbShadowCorner.style.display = ''
      }
      var infoPanel = this.fbInfoPanel.style,
        controlPanel = this.fbControlPanel.style,
        pad = this.upperSpace + this.pos.fbMainDiv.height + 2 * this.innerBorder;
      infoPanel.top = (((this.infoTop ? this.upperSpace : this.lowerSpace) - this.fbInfoPanel.offsetHeight) / 2 - 1 + (this.infoTop ? 0 : pad)) + 'px';
      controlPanel.top = (((this.controlTop ? this.upperSpace : this.lowerSpace) - this.fbControlPanel.offsetHeight) / 2 + (this.controlTop ? 0 : pad)) + 'px';
      var pad = Math.max(this.padding, this.panelPadding) + 'px';
      infoPanel.left = [this.infoLeft ? pad : ''];
      controlPanel.left = [this.controlLeft ? pad : ''];
      infoPanel.visibility = controlPanel.visibility = '';
      this.clearTimeout('loader');
      this.fbLoader.style.display = 'none';
      this.fbMainDiv.style.display = '';
      var duration = (this.currentItem.type === 'img' && !this.fbCanvas.style.visibility) ? this.imageFadeDuration : 0,
        oncomplete = function() {
          that.restore(callback, 1)
        };
      return this.fadeOpacity(this.fbCanvas, 1, duration, oncomplete)
    }
    if (this.currentItem.type === 'img' ? this.resizeImages : this.resizeOther) {
      var scale = 0;
      if (this.scaledBy > 35) {
        scale = 1
      } else if (this.oversizedBy > 28) {
        scale = -1
      }
      if (scale) {
        this.fbResizer.onclick = function() {
          if (that.isSlideshow && that.pauseOnResize && !that.isPaused) {
            that.setPause(true)
          }
          that.collapse(function() {
            that.calcSize(scale === -1)
          });
          return false
        };
        if (this.currentItem.type === 'img' && /cursor|both/.test(this.resizeTool)) {
          this.fbContent.style.cursor = 'url(' + (scale === -1 ? this.resizeDownCursor : this.resizeUpCursor) + '), default';
          this.fbContent.onclick = this.fbResizer.onclick
        }
        if (this.currentItem.type !== 'img' || /topleft|both/.test(this.resizeTool)) {
          this.fbResizer.style.backgroundPosition = (scale === -1 ? 'bottom' : 'top');
          this.fadeOpacity(this.fbResizer, this.controlOpacity)
        }
      }
    }
    this.fbContent.style.cursor = 'pointer';
    this.fbContent.onclick = this.fbClose.onclick;
    if (this.navOverlay) {
      var leftNav = this.fbLeftNav.style,
        rightNav = this.fbRightNav.style,
        overlayPrev = this.fbOverlayPrev.style,
        overlayNext = this.fbOverlayNext.style;
      leftNav.width = rightNav.width = Math.max(this.navOverlayWidth / 100 * this.pos.fbMainDiv.width, this.fbOverlayPrev.offsetWidth) + 'px';
      leftNav.display = rightNav.display = '';
      if (fb.showNavOverlay) {
        overlayPrev.visibility = overlayNext.visibility = 'hidden';
        overlayPrev.display = overlayNext.display = '';
        overlayPrev.top = overlayNext.top = ((this.pos.fbMainDiv.height - this.fbOverlayPrev.offsetHeight) * this.navOverlayPos / 100) + 'px'
      }
    }
    if (callback) callback()
  },
  setSize: function(order) {
    var that = this,
      oncomplete = function() {},
      arr = [
        [],
        []
      ],
      defer = {},
      node, i = arguments.length;
    if (order === 'wh') {
      defer.top = 1;
      defer.height = 1
    } else if (order === 'hw') {
      defer.left = 1;
      defer.width = 1
    }
    while (i--) {
      if (typeof arguments[i] === 'object' && (node = this[arguments[i].id])) {
        var obj = arguments[i];
        if (!this.pos[obj.id]) this.pos[obj.id] = {};
        for (var property in obj) {
          if (obj.hasOwnProperty(property) && property !== 'id') {
            var idx = defer[property] || 0;
            var start = this.pos[obj.id][property];
            if (typeof start !== 'number' || node.style.display || node.style.visibility) {
              start = obj[property]
            }
            arr[idx].push({
              node: node,
              property: property,
              start: start,
              finish: obj[property]
            });
            if (obj.id === 'fbMainDiv') {
              arr[idx].push({
                node: this.fbContent,
                property: property,
                start: start,
                finish: obj[property]
              })
            }
            if (obj.id === 'fbZoomDiv' && /\b(width|height)\b/i.test(property)) {
              arr[idx].push({
                node: this.fbZoomImg,
                property: property,
                start: start,
                finish: obj[property]
              })
            }
            this.pos[obj.id][property] = obj[property]
          }
        }
      } else if (typeof arguments[i] === 'function') {
        oncomplete = arguments[i]
      }
    }
    this.resizeGroup(arr[0], function() {
      that.resizeGroup(arr[1], oncomplete)
    })
  },
  showContent: function(phase) {
    var that = this;
    if (!phase) {
      var displaySize = this.getDisplaySize();
      if (!this.resized) {
        var vscrollChanged = displaySize.width !== this.displaySize.width,
          hscrollChanged = displaySize.height !== this.displaySize.height;
        if ((vscrollChanged && Math.abs(this.pos.fbBox.width - displaySize.width) < 50) || (hscrollChanged && Math.abs(this.pos.fbBox.height - displaySize.height) < 50)) {
          this.resized = true;
          return this.calcSize(this.scaledBy)
        }
      }
      this.resized = false;
      this.win.focus();
      if (this.ieOld) this.stretchOverlay()();
      if ((this.disableScroll || (this.ffOld && /iframe|quicktime/i.test(this.currentItem.type))) && !(this.ieOld || this.webkitOld || this.ie8b2)) {
        if (this.pos.fbBox.width <= displaySize.width && this.pos.fbBox.height <= displaySize.height) {
          this.setPosition(this.fbBox, 'fixed')
        }
      }
      if (this.currentItem.type === 'iframe') {
        this.fbContent.src = this.currentItem.href
      } else if (/flash|quicktime/.test(this.currentItem.type)) {
        var html = this.content[this.currentItem.href];
        html = html.replace(/%width%/g, this.pos.fbMainDiv.width).replace(/%height%/g, this.pos.fbMainDiv.height);
        this.setInnerHTML(this.fbContent, html)
      }
      this.prevIndex = this.currentIndex ? this.currentIndex - 1 : this.itemCount - 1;
      this.nextIndex = this.currentIndex < this.itemCount - 1 ? this.currentIndex + 1 : 0;
      var prevHref = this.enableWrap || this.currentIndex !== 0 ? this.items[this.prevIndex].href : '',
        nextHref = this.enableWrap || this.currentIndex !== this.itemCount - 1 ? this.items[this.nextIndex].href : '';
      if (this.navButton) {
        if (prevHref) {
          if (!this.operaOld) this.fbPrev.href = prevHref;
          this.fbPrev.title = this.fbOverlayPrev.title
        } else {
          this.fbPrev.removeAttribute('href');
          this.fbPrev.title = ''
        }
        if (nextHref) {
          if (!this.operaOld) this.fbNext.href = nextHref;
          this.fbNext.title = this.fbOverlayNext.title
        } else {
          this.fbNext.removeAttribute('href');
          this.fbNext.title = ''
        }
        var prevOn = this.fbPrev.className.replace('_off', ''),
          nextOn = this.fbNext.className.replace('_off', '');
        this.fbPrev.className = prevOn + (prevHref ? '' : '_off');
        this.fbNext.className = nextOn + (nextHref ? '' : '_off')
      }
      if (this.navOverlay) {
        if (!this.operaOld) {
          this.fbLeftNav.href = this.fbOverlayPrev.href = prevHref;
          this.fbRightNav.href = this.fbOverlayNext.href = nextHref
        }
        this.fbLeftNav.style.visibility = prevHref ? '' : 'hidden';
        this.fbRightNav.style.visibility = nextHref ? '' : 'hidden';
        fb.navOverlayShown = true
      }
      this.fbCanvas.style.visibility = '';
      return this.restore(function() {
        that.timeouts.showContent = setTimeout(function() {
          that.showContent(1)
        }, 10)
      })
    }
    this.lastShown = this.currentItem;
    if (!this.currentItem.seen) {
      this.currentItem.seen = true;
      this.itemsShown++
    }
    if (this.isSlideshow && !this.isPaused) {
      this.timeouts.slideshow = setTimeout(function() {
        if (that.endTask === 'loop' || that.itemsShown < that.itemCount) {
          that.newContent(that.nextIndex)
        } else if (that.endTask === 'exit') {
          that.end()
        } else {
          that.setPause(true);
          var i = that.itemCount;
          while (i--) that.items[i].seen = false;
          that.itemsShown = 0
        }
      }, this.slideInterval * 1000)
    }
    this.timeouts.preload = setTimeout(function() {
      that.preloadImages(nextHref || prevHref || '', true)
    }, 10)
  },
  newContent: function(index) {
    var that = this;
    this.clearTimeout('slideshow');
    this.clearTimeout('resizeGroup');
    this.currentIndex = index;
    fb.previousAnchor = this.currentItem;
    this.currentItem = this.items[index];
    if (this.showNavOverlay == 'once' && this.navOverlayShown) this.showNavOverlay = false;
    var oncomplete = function() {
      that.updatePanels();
      that.fetchContent(function() {
        that.calcSize()
      })
    };
    this.collapse(function() {
      that.timeouts.fetch = setTimeout(oncomplete, 10)
    })
  },
  end: function(all) {
    if (this !== fb.lastChild) return fb.lastChild.end(all);
    var that = this;
    this.endAll = this.endAll || all;
    if (this.isChild && this.endAll) this.imageFadeDuration = this.overlayFadeDuration = this.resizeDuration = 0;
    this.fbOverlay.onclick = null;
    if (this.keydownSet) {
      this.doc.onkeydown = this.priorOnkeydown;
      this.keydownSet = false
    }
    if (this.keypressSet) {
      this.doc.onkeypress = this.priorOnkeypress;
      this.keypressSet = false
    }
    if (this.ieOld) {
      this.win.detachEvent('onresize', this.stretchOverlay());
      this.win.detachEvent('onscroll', this.stretchOverlay())
    }
    for (var key in this.timeouts) {
      if (this.timeouts.hasOwnProperty(key)) this.clearTimeout(key)
    }
    if (this.fbBox.style.visibility) {
      if (!this.lastShown) this.fbZoomDiv.style.display = 'none'
    } else if (this.currentItem.type === 'img' && this.zoomImageStart) {
      if (this.currentItem.popup) this.currentItem.anchor.onmouseover();
      var anchorPos = this.getAnchorPos(this.currentItem.anchor, true);
      if (this.currentItem.popup) this.currentItem.anchor.onmouseout();
      if (anchorPos.width) {
        this.fbZoomDiv.style.borderWidth = this.zoomPopBorder + 'px';
        anchorPos.left -= this.zoomPopBorder;
        anchorPos.top -= this.zoomPopBorder;
        this.pos.thumb = anchorPos;
        return this.zoomOut()
      }
    }
    if (!this.fbBox.style.visibility) {
      var anchorPos = this.getAnchorPos(this.currentItem.anchor, !this.currentItem.popup),
        offset = this.initialSize / 2,
        initialPos = {
          id: 'fbBox',
          left: anchorPos.left - offset,
          top: anchorPos.top - offset,
          width: this.initialSize,
          height: this.initialSize
        },
        zeroPos = {
          id: 'fbBox',
          left: anchorPos.left,
          top: anchorPos.top,
          width: 0,
          height: 0,
          borderWidth: 0
        },
        split = this.splitResize;
      if (split === 'wh') {
        split = 'hw'
      } else if (split === 'hw') {
        split = 'wh'
      } else if (split === 'auto') {
        split = this.pos.fbBox.width <= this.pos.fbBox.height ? 'hw' : 'wh'
      }
      var oncomplete3 = function() {
        setTimeout(function() {
          that.fbBox.style.visibility = 'hidden';
          that.end()
        }, 10)
      };
      if (split) {
        var oncomplete2 = function() {
          that.setSize(split, initialPos, function() {
            that.setSize(zeroPos, oncomplete3)
          })
        }
      } else {
        var oncomplete2 = function() {
          that.setSize(zeroPos, oncomplete3)
        }
      }
      var oncomplete = function() {
        if (that.fbContent) {
          that.fbMainDiv.removeChild(that.fbContent);
          delete that.fbContent
        }
        that.fbLoader.style.display = '';
        that.fbCanvas.style.display = that.fbShadowRight.style.display = that.fbShadowBottom.style.display = that.fbShadowCorner.style.display = 'none';
        oncomplete2()
      };
      return this.collapse(oncomplete)
    }
    this.fbBox.style.display = 'none';
    var level = this.children.length + 1,
      i = this.anchors.length;
    while (i && this.anchors[i - 1].level >= level) i--;
    this.anchors.length = i;
    if (this.isChild) this.children.length--;
    fb.lastChild = this.children[this.children.length - 1] || fb;
    var oncomplete2 = function() {
      setTimeout(function() {
        while (that.nodeNames.length) {
          var id = that.nodeNames.pop();
          if (that[id] && that[id].parentNode) {
            that[id].parentNode.removeChild(that[id]);
            delete that[id]
          }
        }
        if (that.endAll && that.isChild) {
          return fb.end(true)
        } else if (that.loadPageOnClose) {
          if (that.loadPageOnClose === 'self' || that.loadPageOnClose === 'this') {
            that.win.location.reload(true)
          } else if (that.loadPageOnClose === 'back') {
            history.back()
          } else {
            that.win.location.replace(that.loadPageOnClose)
          }
        }
      }, 10)
    };
    var oncomplete = function() {
      while (that.hiddenEls.length) {
        var el = that.hiddenEls.pop();
        el.style.visibility = 'visible';
        if (this.ffOld && this.ffMac) {
          el.focus();
          el.blur()
        }
      }
      var overlay = that.fbOverlay.style;
      overlay.display = 'none';
      overlay.width = overlay.height = '0';
      var duration = that.currentItem.popup ? 6.5 : 0;
      that.fbZoomDiv.style.opacity = '1';
      that.fadeOpacity(that.fbZoomDiv, 0, duration, oncomplete2);
      that.currentItem = fb.previousAnchor = null
    };
    this.fadeOpacity(this.fbOverlay, 0, this.overlayFadeDuration, oncomplete)
  },
  zoomIn: function(phase) {
    var that = this,
      zoomDiv = this.fbZoomDiv.style;
    if (!phase) {
      this.clearTimeout('slowLoad');
      zoomDiv.display = this.fbZoomImg.style.display = '';
      if (this.currentItem.popup) this.currentItem.anchor.onmouseout();
      var pad = this.outerBorder + this.innerBorder - this.zoomPopBorder;
      var oncomplete = function() {
        that.fbZoomImg.src = that.currentItem.href;
        that.setSize({
          id: 'fbZoomDiv',
          width: that.pos.fbMainDiv.width,
          height: that.pos.fbMainDiv.height,
          left: that.pos.fbBox.left + pad + that.padding,
          top: that.pos.fbBox.top + pad + that.upperSpace
        }, function() {
          that.zoomIn(1)
        })
      };
      return this.fadeOpacity(this.fbOverlay, this.overlayOpacity, this.overlayFadeDuration, oncomplete)
    }
    if (phase === 1) {
      var boxPos = {
        left: this.pos.fbBox.left,
        top: this.pos.fbBox.top,
        width: this.pos.fbBox.width,
        height: this.pos.fbBox.height
      };
      var pad = 2 * (this.zoomPopBorder - this.outerBorder);
      this.pos.fbBox = {
        left: this.pos.fbZoomDiv.left,
        top: this.pos.fbZoomDiv.top,
        width: this.pos.fbZoomDiv.width + pad,
        height: this.pos.fbZoomDiv.height + pad
      };
      this.fbBox.style.visibility = '';
      var oncomplete = function() {
        that.restore(function() {
          that.zoomIn(2)
        })
      };
      return this.setSize({
        id: 'fbBox',
        left: boxPos.left,
        top: boxPos.top,
        width: boxPos.width,
        height: boxPos.height
      }, oncomplete)
    }
    var show = function() {
      zoomDiv.display = 'none';
      that.fbZoomImg.src = '';
      zoomDiv.left = zoomDiv.top = zoomDiv.width = zoomDiv.height = that.fbZoomImg.width = that.fbZoomImg.height = '0';
      that.showContent()
    };
    this.timeouts.showContent = setTimeout(show, 10)
  },
  zoomOut: function(phase) {
    var that = this;
    if (!phase) {
      this.fbZoomImg.src = this.currentItem.href;
      var pad = this.outerBorder + this.innerBorder - this.zoomPopBorder;
      this.setSize({
        id: 'fbZoomDiv',
        width: this.pos.fbMainDiv.width,
        height: this.pos.fbMainDiv.height,
        left: this.pos.fbBox.left + pad + this.padding,
        top: this.pos.fbBox.top + pad + this.upperSpace
      }, function() {
        that.zoomOut(1)
      })
    }
    if (phase === 1) {
      this.fbZoomDiv.style.display = this.fbZoomImg.style.display = '';
      this.fbCanvas.style.visibility = 'hidden';
      return this.collapse(function() {
        that.zoomOut(2)
      })
    }
    if (phase === 2) {
      var pad = 2 * (this.zoomPopBorder - this.outerBorder);
      return this.setSize({
        id: 'fbBox',
        left: this.pos.fbZoomDiv.left,
        top: this.pos.fbZoomDiv.top,
        width: this.pos.fbZoomDiv.width + pad,
        height: this.pos.fbZoomDiv.height + pad
      }, function() {
        that.zoomOut(3)
      })
    }
    this.fbBox.style.visibility = 'hidden';
    var end = function() {
      that.fbZoomImg.src = that.pos.thumb.src;
      that.end()
    };
    this.setSize({
      id: 'fbZoomDiv',
      left: this.pos.thumb.left,
      top: this.pos.thumb.top,
      width: this.pos.thumb.width,
      height: this.pos.thumb.height
    }, end)
  },
  setPause: function(bPause) {
    this.isPaused = bPause;
    if (bPause) {
      this.clearTimeout('slideshow')
    } else {
      this.newContent(this.nextIndex)
    }
    if (this.showPlayPause) {
      this.fbPlay.style.left = bPause ? '' : '-9999px';
      this.fbPause.style.left = bPause ? '-9999px' : ''
    }
  },
  fadeOpacity: function(el, opacity, duration, callback) {
    var startOp = +(el.style.opacity || 0);
    duration = duration || 0;
    this.clearTimeout['fade' + el.id];
    var fadeIn = (startOp <= opacity && opacity > 0);
    if (duration > 10) duration = 10;
    if (duration < 0) duration = 0;
    if (duration === 0) {
      startOp = opacity
    } else {
      var root = Math.pow(100, 0.1),
        power = duration + ((10 - duration) / 9) * (Math.log(2) / Math.log(root) - 1),
        incr = 1 / Math.pow(root, power)
    }
    if (fadeIn) {
      el.style.display = el.style.visibility = ''
    } else {
      incr = -incr
    }
    this.stepFade(el, startOp, opacity, incr, fadeIn, callback)
  },
  stepFade: function(el, thisOp, finishOp, incr, fadeIn, callback) {
    if (!el) return;
    var that = this;
    if ((fadeIn && thisOp >= finishOp) || (!fadeIn && thisOp <= finishOp)) thisOp = finishOp;
    if (this.ie) el.style.filter = 'alpha(opacity=' + thisOp * 100 + ')';
    el.style.opacity = thisOp + '';
    if (thisOp === finishOp) {
      if (this.ie && finishOp >= 1) el.style.removeAttribute('filter');
      if (callback) callback()
    } else {
      this.timeouts['fade' + el.id] = setTimeout(function() {
        that.stepFade(el, thisOp + incr, finishOp, incr, fadeIn, callback)
      }, 20)
    }
  },
  resizeGroup: function(arr, callback) {
    var i = arr.length;
    if (!i) return callback ? callback() : null;
    this.clearTimeout('resizeGroup');
    var diff = 0;
    while (i--) {
      diff = Math.max(diff, Math.abs(arr[i].finish - arr[i].start))
    }
    var duration = this.resizeDuration * (this.liveResize ? 0.65 : 1);
    var rate = diff && duration ? Math.pow(Math.max(1, 2.2 - duration / 10), (Math.log(diff))) / diff : 1;
    i = arr.length;
    while (i--) arr[i].diff = arr[i].finish - arr[i].start;
    this.stepResize(rate, rate, arr, callback)
  },
  stepResize: function(increment, rate, arr, callback) {
    var that = this;
    if (increment > 1) increment = 1;
    var i = arr.length;
    while (i--) {
      var node = arr[i].node,
        prop = arr[i].property,
        val = Math.round(arr[i].start + arr[i].diff * increment),
        tag = node.tagName.toLowerCase();
      if (tag === 'img' || tag === 'iframe') {
        node[prop] = val
      } else {
        node.style[prop] = val + 'px'
      }
    }
    if (increment >= 1) {
      delete this.timeouts.resizeGroup;
      if (callback) callback()
    } else {
      this.timeouts.resizeGroup = setTimeout(function() {
        that.stepResize(increment + rate, rate, arr, callback)
      }, 20)
    }
  },
  getDisplaySize: function() {
    return {
      width: this.getDisplayWidth(),
      height: this.getDisplayHeight()
    }
  },
  getDisplayWidth: function() {
    return this.html.clientWidth || this.bod.clientWidth
  },
  getDisplayHeight: function() {
    if (this.webkitOld) return this.win.innerHeight;
    if (!this.html.clientHeight || this.operaOld || this.doc.compatMode === 'BackCompat') {
      return this.bod.clientHeight
    }
    return this.html.clientHeight
  },
  getScroll: function(win) {
    win = win || this.win;
    var doc = win.document,
      bod = doc.body;
    return {
      left: win.pageXOffset || bod.scrollLeft || doc.documentElement.scrollLeft || 0,
      top: win.pageYOffset || bod.scrollTop || doc.documentElement.scrollTop || 0
    }
  },
  getLeftTop: function(el, local) {
    var left = el.offsetLeft || 0,
      top = el.offsetTop || 0,
      doc = el.ownerDocument || el.document,
      bod = doc.body,
      win = doc.defaultView || doc.parentWindow || doc.contentWindow,
      scroll = this.getScroll(win),
      position = ((el.currentStyle && el.currentStyle.position) || (win.getComputedStyle && win.getComputedStyle(el, '').getPropertyValue('position')) || '').toLowerCase(),
      rex = /absolute|fixed/,
      elFlow = !rex.test(position),
      inFlow = elFlow,
      node = el;
    if (position === 'fixed') {
      left += scroll.left;
      top += scroll.top
    }
    while (position !== 'fixed' && (node = node.offsetParent)) {
      var borderLeft = 0,
        borderTop = 0,
        nodeFlow = true;
      if (node.currentStyle) {
        position = (node.currentStyle.position || '').toLowerCase();
        nodeFlow = !rex.test(position);
        if (this.opera) {
          if (local && node !== bod) {
            left += node.scrollLeft - node.clientLeft;
            top += node.scrollTop - node.clientTop
          }
        } else {
          if (node.currentStyle.hasLayout && node !== doc.documentElement) {
            borderLeft = node.clientLeft;
            borderTop = node.clientTop
          }
        }
      } else if (win.getComputedStyle) {
        position = (win.getComputedStyle(node, '').getPropertyValue('position') || '').toLowerCase();
        nodeFlow = !rex.test(position);
        borderLeft = parseInt(win.getComputedStyle(node, '').getPropertyValue('border-left-width'), 10);
        borderTop = parseInt(win.getComputedStyle(node, '').getPropertyValue('border-top-width'), 10);
        if (this.ff && node === el.offsetParent && !nodeFlow && (this.ffOld || !elFlow)) {
          left += borderLeft;
          top += borderTop
        }
      }
      if (!nodeFlow) {
        if (local) return {
          left: left,
          top: top
        };
        inFlow = false
      }
      left += node.offsetLeft + borderLeft;
      top += node.offsetTop + borderTop;
      if (position === 'fixed') {
        left += scroll.left;
        top += scroll.top
      }
      if (!(this.opera && elFlow) && node !== bod && node !== doc.documentElement) {
        left -= node.scrollLeft;
        top -= node.scrollTop
      }
    }
    if (this.ff && inFlow) {
      left += parseInt(win.getComputedStyle(bod, '').getPropertyValue('border-left-width'), 10);
      top += parseInt(win.getComputedStyle(bod, '').getPropertyValue('border-top-width'), 10)
    }
    if (this.webkitOld) {
      var scriptElement = doc.createElement('script');
      scriptElement.innerHTML = 'document.parentWindow=self';
      doc.documentElement.appendChild(scriptElement);
      doc.documentElement.removeChild(scriptElement);
      win = doc.parentWindow
    }
    if (!local && win !== this.win) {
      var iframes = win.parent.document.getElementsByTagName('iframe'),
        i = iframes.length;
      while (i--) {
        var node = iframes[i],
          idoc = false;
        try {
          idoc = node.contentDocument || node.contentWindow;
          idoc = idoc.document || idoc
        } catch (e) {}
        if (idoc === doc || (typeof idoc !== 'object' && node.src === win.location.href.substr(win.location.href.length - node.src.length))) {
          if (this.webkitOld) win = doc.defaultView;
          var pos = this.getLeftTop(node);
          left += pos.left - scroll.left;
          top += pos.top - scroll.top;
          if (node.currentStyle) {
            var padLeft = 0,
              padTop = 0;
            if (!this.ie || elFlow) {
              padLeft = parseInt(node.currentStyle.paddingLeft, 10);
              padTop = parseInt(node.currentStyle.paddingTop, 10)
            }
            left += node.clientLeft + padLeft;
            top += node.clientTop + padTop
          } else if (win.getComputedStyle) {
            left += parseInt(win.getComputedStyle(node, '').getPropertyValue('border-left-width'), 10) + parseInt(win.getComputedStyle(node, '').getPropertyValue('padding-left'), 10);
            top += parseInt(win.getComputedStyle(node, '').getPropertyValue('border-top-width'), 10) + parseInt(win.getComputedStyle(node, '').getPropertyValue('padding-top'), 10)
          }
          break
        }
      }
    }
    return {
      left: left,
      top: top
    }
  },
  getLayout: function(el) {
    var lay = this.getLeftTop(el);
    lay.width = el.offsetWidth;
    lay.height = el.offsetHeight;
    return lay
  },
  hideElements: function(type, thisWindow) {
    if (!thisWindow) {
      this.hideElements(type, this.win)
    } else {
      var tagName, tagNames = type === 'flash' ? ['object', 'embed'] : [type];
      try {
        while ((tagName = tagNames.pop())) {
          var els = thisWindow.document.getElementsByTagName(tagName),
            i = els.length;
          while (i--) {
            var el = els[i];
            if (el.style.visibility !== 'hidden' && (tagName !== 'object' || (el.getAttribute('type') && el.getAttribute('type').toLowerCase() === 'application/x-shockwave-flash') || (el.getAttribute('classid') && el.getAttribute('classid').toLowerCase() === 'clsid:d27cdb6e-ae6d-11cf-96b8-444553540000') || /data\s*=\s*"?[^>"]+\.swf\b/i.test(el.innerHTML) || /param\s+name\s*=\s*"?(movie|src)("|\s)[^>]+\.swf\b/i.test(el.innerHTML))) {
              this.hiddenEls.push(el);
              el.style.visibility = 'hidden'
            }
          }
        }
      } catch (e) {}
      var frames = thisWindow.frames,
        i = frames.length;
      while (i--) {
        if (typeof frames[i].window === 'object') this.hideElements(type, frames[i].window)
      }
    }
  },
  clearTimeout: function(key) {
    if (this.timeouts[key]) {
      clearTimeout(this.timeouts[key]);
      delete this.timeouts[key]
    }
  },
  stretchOverlay: function() {
    var that = this;
    return function() {
      if (arguments.length === 1) {
        that.clearTimeout('stretch');
        that.timeouts.stretch = setTimeout(function() {
          that.stretchOverlay()()
        }, 25)
      } else {
        delete that.timeouts.stretch;
        if (!that.fbBox) return;
        var width = that.fbBox.offsetLeft + that.fbBox.offsetWidth,
          height = that.fbBox.offsetTop + that.fbBox.offsetHeight,
          display = that.getDisplaySize(),
          scroll = that.getScroll(),
          overlay = that.fbOverlay.style;
        overlay.width = overlay.height = '0';
        overlay.width = Math.max(width, that.bod.scrollWidth, that.bod.clientWidth, that.html.clientWidth, display.width + scroll.left) + 'px';
        overlay.height = Math.max(height, that.bod.scrollHeight, that.bod.clientHeight, that.html.clientHeight, display.height + scroll.top) + 'px'
      }
    }
  },
  encodeHTML: function(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')
  },
  decodeHTML: function(str) {
    return str.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&#39;/g, "'").replace(/&amp;/g, '&')
  },
  getXMLHttpRequest: function() {
    var xhr, that = this;
    if (window.XMLHttpRequest) {
      if (!(xhr = new XMLHttpRequest())) return false
    } else {
      try {
        xhr = new ActiveXObject("Msxml2.XMLHTTP")
      } catch (e) {
        try {
          xhr = new ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {
          return false
        }
      }
    }
    return {
      getResponse: function(url, callback) {
        try {
          xhr.open('GET', url, true);
          xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
              xhr.onreadystatechange = function() {};
              callback(xhr)
            }
          };
          xhr.send(null)
        } catch (e) {}
      }
    }
  },
  setInnerHTML: function(el, strHTML) {
    try {
      var range = this.doc.createRange();
      range.selectNodeContents(el);
      range.deleteContents();
      if (strHTML) {
        strHTML = strHTML.replace('&', '&amp;');
        var xmlDiv = new DOMParser().parseFromString('<div xmlns="http://www.w3.org/1999/xhtml">' + strHTML + '</div>', 'application/xhtml+xml'),
          childNodes = xmlDiv.documentElement.childNodes;
        for (var i = 0, len = childNodes.length; i < len; i++) {
          el.appendChild(this.doc.importNode(childNodes[i], true))
        }
      }
      return true
    } catch (e) {}
    try {
      el.innerHTML = strHTML;
      return true
    } catch (e) {}
    return false
  },
  printContents: function(el, style) {
    if (el && el.offsetWidth) {
      var width = el.offsetWidth,
        height = el.offsetHeight
    } else {
      el = fb.lastChild.fbContent;
      var pos = fb.lastChild.pos.fbMainDiv,
        width = pos.width,
        height = pos.height
    }
    var win = window.open('', '', 'width=' + width + ', height=' + height),
      doc = win && win.document;
    if (!doc) {
      alert('Popup windows are being blocked by your browser.\nUnable to print.');
      return false
    }
    if (/\.css$/i.test(style)) {
      style = '<link rel="stylesheet" type="text/css" href="' + style + '" />'
    } else {
      style = '<style type="text/css"> html,body{border:0;margin:0;padding:0;}' + (style || '') + '</style>'
    }
    var div = this.doc.createElement('div');
    div.appendChild(el.cloneNode(true));
    doc.open('text/html');
    doc.write('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"' + ' "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head>' + style + '</head><body><div>' + div.innerHTML + '</div></body></html>');
    doc.close();
    setTimeout(function() {
      win && win.print();
      win && win.close()
    }, 200);
    return true
  },
  loadAnchor: function(href, rev, title) {
    if (href.setAttribute) {
      var anchor = href;
      var elClass = el.getAttribute('class');
      elClass = elClass ? elClass : el.getAttribute('className');
      if (!elClass) anchor.setAttribute('className', 'thickbox');
      fb.lastChild.start(this.tagOneAnchor(anchor))
    } else {
      fb.lastChild.start(this.tagOneAnchor({
        href: href,
        rev: rev,
        title: title,
        rel: 'thickbox'
      }))
    }
  },
  goBack: function() {
    var a;
    if ((a = fb.previousAnchor)) {
      this.loadAnchor(a.href, a.rev + ' sameBox:true', a.title)
    }
  },
  resize: function(width, height) {
    if (width) fb.lastChild.currentItem.nativeWidth = width;
    if (height) fb.lastChild.currentItem.nativeHeight = height;
    fb.lastChild.calcSize(false)
  }
};

function initfb() {
  if (arguments.callee.done) return;
  if (document.compatMode === 'BackCompat') {
    arguments.callee.done = true; /*alert('Floatbox does not support quirks mode.\nPage needs to have a valid a doc type.');*/
    return
  }
  if (self !== top && !parent.fb) return setTimeout(initfb, 50);
  arguments.callee.done = true;
  if (self === top) top.floatbox = new Floatbox();
  fb = top.floatbox;
  fb.tagAnchors(self.document.body);
  if (fb.autoStart) {
    fb.start(fb.autoStart);
    if (typeof fb !== 'undefined') delete fb.autoStart
  } else {
    fb.preloadImages('', true)
  }
} /*@cc_on fb_tempNode=document.createElement('div');(function(){if(document.readyState!=='complete')return setTimeout(arguments.callee,50);try{fb_tempNode.doScroll('left')}catch(e){return setTimeout(arguments.callee,50)}initfb();delete fb_tempNode})();/*@if(false)@*/
if (/Apple|KDE/i.test(navigator.vendor)) {
  (function() {
    if (/loaded|complete/.test(document.readyState)) {
      initfb()
    } else {
      setTimeout(arguments.callee, 50)
    }
  })()
} else if (document.addEventListener) {
  document.addEventListener('DOMContentLoaded', initfb, false)
} /*@end@*/
fb_prevOnload = window.onload;
window.onload = function() {
  if (typeof fb_prevOnload === 'function') fb_prevOnload();
  initfb()
};
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5377], {
    2445: function(t, e, i) {
      i.d(e, {
        Z: function() {
          return F
        }
      });
      var r, s, n, a, o, h, d, l, p, f, u, c, m, _ = i(7294);

      function g() {
        g = function() {
          return t
        };
        var t = {},
          e = Object.prototype,
          i = e.hasOwnProperty,
          r = Object.defineProperty || function(t, e, i) {
            t[e] = i.value
          },
          s = "function" == typeof Symbol ? Symbol : {},
          n = s.iterator || "@@iterator",
          a = s.asyncIterator || "@@asyncIterator",
          o = s.toStringTag || "@@toStringTag";

        function h(t, e, i) {
          return Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }), t[e]
        }
        try {
          h({}, "")
        } catch (t) {
          h = function(t, e, i) {
            return t[e] = i
          }
        }

        function d(t, e, i, s) {
          var n, a, o = Object.create((e && e.prototype instanceof f ? e : f).prototype);
          return r(o, "_invoke", {
            value: (n = new U(s || []), a = "suspendedStart", function(e, r) {
              if ("executing" === a) throw Error("Generator is already running");
              if ("completed" === a) {
                if ("throw" === e) throw r;
                return T()
              }
              for (n.method = e, n.arg = r;;) {
                var s = n.delegate;
                if (s) {
                  var o = function t(e, i) {
                    var r = i.method,
                      s = e.iterator[r];
                    if (void 0 === s) return i.delegate = null, "throw" === r && e.iterator.return && (i.method = "return", i.arg = void 0, t(e, i), "throw" === i.method) || "return" !== r && (i.method = "throw", i.arg = TypeError("The iterator does not provide a '" + r + "' method")), p;
                    var n = l(s, e.iterator, i.arg);
                    if ("throw" === n.type) return i.method = "throw", i.arg = n.arg, i.delegate = null, p;
                    var a = n.arg;
                    return a ? a.done ? (i[e.resultName] = a.value, i.next = e.nextLoc, "return" !== i.method && (i.method = "next", i.arg = void 0), i.delegate = null, p) : a : (i.method = "throw", i.arg = TypeError("iterator result is not an object"), i.delegate = null, p)
                  }(s, n);
                  if (o) {
                    if (o === p) continue;
                    return o
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if ("suspendedStart" === a) throw a = "completed", n.arg;
                  n.dispatchException(n.arg)
                } else "return" === n.method && n.abrupt("return", n.arg);
                a = "executing";
                var h = l(t, i, n);
                if ("normal" === h.type) {
                  if (a = n.done ? "completed" : "suspendedYield", h.arg === p) continue;
                  return {
                    value: h.arg,
                    done: n.done
                  }
                }
                "throw" === h.type && (a = "completed", n.method = "throw", n.arg = h.arg)
              }
            })
          }), o
        }

        function l(t, e, i) {
          try {
            return {
              type: "normal",
              arg: t.call(e, i)
            }
          } catch (t) {
            return {
              type: "throw",
              arg: t
            }
          }
        }
        t.wrap = d;
        var p = {};

        function f() {}

        function u() {}

        function c() {}
        var m = {};
        h(m, n, function() {
          return this
        });
        var _ = Object.getPrototypeOf,
          y = _ && _(_(E([])));
        y && y !== e && i.call(y, n) && (m = y);
        var b = c.prototype = f.prototype = Object.create(m);

        function v(t) {
          ["next", "throw", "return"].forEach(function(e) {
            h(t, e, function(t) {
              return this._invoke(e, t)
            })
          })
        }

        function w(t, e) {
          var s;
          r(this, "_invoke", {
            value: function(r, n) {
              function a() {
                return new e(function(s, a) {
                  ! function r(s, n, a, o) {
                    var h = l(t[s], t, n);
                    if ("throw" !== h.type) {
                      var d = h.arg,
                        p = d.value;
                      return p && "object" == typeof p && i.call(p, "__await") ? e.resolve(p.__await).then(function(t) {
                        r("next", t, a, o)
                      }, function(t) {
                        r("throw", t, a, o)
                      }) : e.resolve(p).then(function(t) {
                        d.value = t, a(d)
                      }, function(t) {
                        return r("throw", t, a, o)
                      })
                    }
                    o(h.arg)
                  }(r, n, s, a)
                })
              }
              return s = s ? s.then(a, a) : a()
            }
          })
        }

        function S(t) {
          var e = {
            tryLoc: t[0]
          };
          1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
        }

        function x(t) {
          var e = t.completion || {};
          e.type = "normal", delete e.arg, t.completion = e
        }

        function U(t) {
          this.tryEntries = [{
            tryLoc: "root"
          }], t.forEach(S, this), this.reset(!0)
        }

        function E(t) {
          if (t) {
            var e = t[n];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var r = -1,
                s = function e() {
                  for (; ++r < t.length;)
                    if (i.call(t, r)) return e.value = t[r], e.done = !1, e;
                  return e.value = void 0, e.done = !0, e
                };
              return s.next = s
            }
          }
          return {
            next: T
          }
        }

        function T() {
          return {
            value: void 0,
            done: !0
          }
        }
        return u.prototype = c, r(b, "constructor", {
          value: c,
          configurable: !0
        }), r(c, "constructor", {
          value: u,
          configurable: !0
        }), u.displayName = h(c, o, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
          var e = "function" == typeof t && t.constructor;
          return !!e && (e === u || "GeneratorFunction" === (e.displayName || e.name))
        }, t.mark = function(t) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(t, c) : (t.__proto__ = c, h(t, o, "GeneratorFunction")), t.prototype = Object.create(b), t
        }, t.awrap = function(t) {
          return {
            __await: t
          }
        }, v(w.prototype), h(w.prototype, a, function() {
          return this
        }), t.AsyncIterator = w, t.async = function(e, i, r, s, n) {
          void 0 === n && (n = Promise);
          var a = new w(d(e, i, r, s), n);
          return t.isGeneratorFunction(i) ? a : a.next().then(function(t) {
            return t.done ? t.value : a.next()
          })
        }, v(b), h(b, o, "Generator"), h(b, n, function() {
          return this
        }), h(b, "toString", function() {
          return "[object Generator]"
        }), t.keys = function(t) {
          var e = Object(t),
            i = [];
          for (var r in e) i.push(r);
          return i.reverse(),
            function t() {
              for (; i.length;) {
                var r = i.pop();
                if (r in e) return t.value = r, t.done = !1, t
              }
              return t.done = !0, t
            }
        }, t.values = E, U.prototype = {
          constructor: U,
          reset: function(t) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !t)
              for (var e in this) "t" === e.charAt(0) && i.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
          },
          stop: function() {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval
          },
          dispatchException: function(t) {
            if (this.done) throw t;
            var e = this;

            function r(i, r) {
              return a.type = "throw", a.arg = t, e.next = i, r && (e.method = "next", e.arg = void 0), !!r
            }
            for (var s = this.tryEntries.length - 1; s >= 0; --s) {
              var n = this.tryEntries[s],
                a = n.completion;
              if ("root" === n.tryLoc) return r("end");
              if (n.tryLoc <= this.prev) {
                var o = i.call(n, "catchLoc"),
                  h = i.call(n, "finallyLoc");
                if (o && h) {
                  if (this.prev < n.catchLoc) return r(n.catchLoc, !0);
                  if (this.prev < n.finallyLoc) return r(n.finallyLoc)
                } else if (o) {
                  if (this.prev < n.catchLoc) return r(n.catchLoc, !0)
                } else {
                  if (!h) throw Error("try statement without catch or finally");
                  if (this.prev < n.finallyLoc) return r(n.finallyLoc)
                }
              }
            }
          },
          abrupt: function(t, e) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var s = this.tryEntries[r];
              if (s.tryLoc <= this.prev && i.call(s, "finallyLoc") && this.prev < s.finallyLoc) {
                var n = s;
                break
              }
            }
            n && ("break" === t || "continue" === t) && n.tryLoc <= e && e <= n.finallyLoc && (n = null);
            var a = n ? n.completion : {};
            return a.type = t, a.arg = e, n ? (this.method = "next", this.next = n.finallyLoc, p) : this.complete(a)
          },
          complete: function(t, e) {
            if ("throw" === t.type) throw t.arg;
            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), p
          },
          finish: function(t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var i = this.tryEntries[e];
              if (i.finallyLoc === t) return this.complete(i.completion, i.afterLoc), x(i), p
            }
          },
          catch: function(t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var i = this.tryEntries[e];
              if (i.tryLoc === t) {
                var r = i.completion;
                if ("throw" === r.type) {
                  var s = r.arg;
                  x(i)
                }
                return s
              }
            }
            throw Error("illegal catch attempt")
          },
          delegateYield: function(t, e, i) {
            return this.delegate = {
              iterator: E(t),
              resultName: e,
              nextLoc: i
            }, "next" === this.method && (this.arg = void 0), p
          }
        }, t
      }

      function y(t) {
        return (y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
      }

      function b(t, e, i, r, s, n, a) {
        try {
          var o = t[n](a),
            h = o.value
        } catch (t) {
          i(t);
          return
        }
        o.done ? e(h) : Promise.resolve(h).then(r, s)
      }

      function v(t, e) {
        if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
      }

      function w(t, e) {
        for (var i = 0; i < e.length; i++) {
          var r = e[i];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, function(t) {
            var e = function(t, e) {
              if ("object" != typeof t || null === t) return t;
              var i = t[Symbol.toPrimitive];
              if (void 0 !== i) {
                var r = i.call(t, e || "default");
                if ("object" != typeof r) return r;
                throw TypeError("@@toPrimitive must return a primitive value.")
              }
              return ("string" === e ? String : Number)(t)
            }(t, "string");
            return "symbol" == typeof e ? e : String(e)
          }(r.key), r)
        }
      }

      function S(t, e, i) {
        return e && w(t.prototype, e), i && w(t, i), Object.defineProperty(t, "prototype", {
          writable: !1
        }), t
      }

      function x(t, e) {
        return function(t) {
          if (Array.isArray(t)) return t
        }(t) || function(t, e) {
          var i = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
          if (null != i) {
            var r, s, n, a, o = [],
              h = !0,
              d = !1;
            try {
              if (n = (i = i.call(t)).next, 0 === e) {
                if (Object(i) !== i) return;
                h = !1
              } else
                for (; !(h = (r = n.call(i)).done) && (o.push(r.value), o.length !== e); h = !0);
            } catch (t) {
              d = !0, s = t
            } finally {
              try {
                if (!h && null != i.return && (a = i.return(), Object(a) !== a)) return
              } finally {
                if (d) throw s
              }
            }
            return o
          }
        }(t, e) || function(t, e) {
          if (t) {
            if ("string" == typeof t) return U(t, e);
            var i = Object.prototype.toString.call(t).slice(8, -1);
            if ("Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i) return Array.from(t);
            if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return U(t, e)
          }
        }(t, e) || function() {
          throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }

      function U(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, r = Array(e); i < e; i++) r[i] = t[i];
        return r
      }
      var E = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== i.g ? i.g : "undefined" != typeof self ? self : {},
        T = {
          exports: {}
        };
      r = T.exports,
        function(t, e) {
          var i = "function",
            s = "undefined",
            n = "object",
            a = "string",
            o = "model",
            h = "name",
            d = "type",
            l = "vendor",
            p = "version",
            f = "architecture",
            u = "console",
            c = "mobile",
            m = "tablet",
            _ = "smarttv",
            g = "wearable",
            y = "embedded",
            b = "Amazon",
            v = "Apple",
            w = "ASUS",
            S = "BlackBerry",
            x = "Browser",
            U = "Chrome",
            E = "Firefox",
            A = "Google",
            B = "Huawei",
            z = "Microsoft",
            k = "Motorola",
            C = "Opera",
            I = "Samsung",
            P = "Sharp",
            F = "Sony",
            L = "Xiaomi",
            D = "Zebra",
            R = "Facebook",
            N = function(t, e) {
              var i = {};
              for (var r in t) e[r] && e[r].length % 2 == 0 ? i[r] = e[r].concat(t[r]) : i[r] = t[r];
              return i
            },
            O = function(t) {
              for (var e = {}, i = 0; i < t.length; i++) e[t[i].toUpperCase()] = t[i];
              return e
            },
            M = function(t, e) {
              return typeof t === a && -1 !== G(e).indexOf(G(t))
            },
            G = function(t) {
              return t.toLowerCase()
            },
            H = function(t, e) {
              if (typeof t === a) return t = t.replace(/^\s\s*/, ""), typeof e === s ? t : t.substring(0, 350)
            },
            V = function(t, r) {
              for (var s, a, o, h, d, l, p = 0; p < r.length && !d;) {
                var f = r[p],
                  u = r[p + 1];
                for (s = a = 0; s < f.length && !d;)
                  if (d = f[s++].exec(t))
                    for (o = 0; o < u.length; o++) l = d[++a], typeof(h = u[o]) === n && h.length > 0 ? 2 === h.length ? typeof h[1] == i ? this[h[0]] = h[1].call(this, l) : this[h[0]] = h[1] : 3 === h.length ? typeof h[1] !== i || h[1].exec && h[1].test ? this[h[0]] = l ? l.replace(h[1], h[2]) : void 0 : this[h[0]] = l ? h[1].call(this, l, h[2]) : void 0 : 4 === h.length && (this[h[0]] = l ? h[3].call(this, l.replace(h[1], h[2])) : void 0) : this[h] = l || e;
                p += 2
              }
            },
            Y = function(t, i) {
              for (var r in i)
                if (typeof i[r] === n && i[r].length > 0) {
                  for (var s = 0; s < i[r].length; s++)
                    if (M(i[r][s], t)) return "?" === r ? e : r
                } else if (M(i[r], t)) return "?" === r ? e : r;
              return t
            },
            j = {
              ME: "4.90",
              "NT 3.11": "NT3.51",
              "NT 4.0": "NT4.0",
              2e3: "NT 5.0",
              XP: ["NT 5.1", "NT 5.2"],
              Vista: "NT 6.0",
              7: "NT 6.1",
              8: "NT 6.2",
              "8.1": "NT 6.3",
              10: ["NT 6.4", "NT 10.0"],
              RT: "ARM"
            },
            q = {
              browser: [
                [/\b(?:crmo|crios)\/([\w\.]+)/i],
                [p, [h, "Chrome"]],
                [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                [p, [h, "Edge"]],
                [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                [h, p],
                [/opios[\/ ]+([\w\.]+)/i],
                [p, [h, C + " Mini"]],
                [/\bopr\/([\w\.]+)/i],
                [p, [h, C]],
                [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(weibo)__([\d\.]+)/i],
                [h, p],
                [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                [p, [h, "UC" + x]],
                [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i],
                [p, [h, "WeChat(Win) Desktop"]],
                [/micromessenger\/([\w\.]+)/i],
                [p, [h, "WeChat"]],
                [/konqueror\/([\w\.]+)/i],
                [p, [h, "Konqueror"]],
                [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                [p, [h, "IE"]],
                [/yabrowser\/([\w\.]+)/i],
                [p, [h, "Yandex"]],
                [/(avast|avg)\/([\w\.]+)/i],
                [
                  [h, /(.+)/, "$1 Secure " + x], p
                ],
                [/\bfocus\/([\w\.]+)/i],
                [p, [h, E + " Focus"]],
                [/\bopt\/([\w\.]+)/i],
                [p, [h, C + " Touch"]],
                [/coc_coc\w+\/([\w\.]+)/i],
                [p, [h, "Coc Coc"]],
                [/dolfin\/([\w\.]+)/i],
                [p, [h, "Dolphin"]],
                [/coast\/([\w\.]+)/i],
                [p, [h, C + " Coast"]],
                [/miuibrowser\/([\w\.]+)/i],
                [p, [h, "MIUI " + x]],
                [/fxios\/([-\w\.]+)/i],
                [p, [h, E]],
                [/\bqihu|(qi?ho?o?|360)browser/i],
                [
                  [h, "360 " + x]
                ],
                [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
                [
                  [h, /(.+)/, "$1 " + x], p
                ],
                [/(comodo_dragon)\/([\w\.]+)/i],
                [
                  [h, /_/g, " "], p
                ],
                [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],
                [h, p],
                [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i],
                [h],
                [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                [
                  [h, R], p
                ],
                [/safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i],
                [h, p],
                [/\bgsa\/([\w\.]+) .*safari\//i],
                [p, [h, "GSA"]],
                [/headlesschrome(?:\/([\w\.]+)| )/i],
                [p, [h, U + " Headless"]],
                [/ wv\).+(chrome)\/([\w\.]+)/i],
                [
                  [h, U + " WebView"], p
                ],
                [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                [p, [h, "Android " + x]],
                [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                [h, p],
                [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                [p, [h, "Mobile Safari"]],
                [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                [p, h],
                [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                [h, [p, Y, {
                  "1.0": "/8",
                  "1.2": "/1",
                  "1.3": "/3",
                  "2.0": "/412",
                  "2.0.2": "/416",
                  "2.0.3": "/417",
                  "2.0.4": "/419",
                  "?": "/"
                }]],
                [/(webkit|khtml)\/([\w\.]+)/i],
                [h, p],
                [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                [
                  [h, "Netscape"], p
                ],
                [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                [p, [h, E + " Reality"]],
                [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i],
                [h, p],
                [/(cobalt)\/([\w\.]+)/i],
                [h, [p, /master.|lts./, ""]]
              ],
              cpu: [
                [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                [
                  [f, "amd64"]
                ],
                [/(ia32(?=;))/i],
                [
                  [f, G]
                ],
                [/((?:i[346]|x)86)[;\)]/i],
                [
                  [f, "ia32"]
                ],
                [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                [
                  [f, "arm64"]
                ],
                [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                [
                  [f, "armhf"]
                ],
                [/windows (ce|mobile); ppc;/i],
                [
                  [f, "arm"]
                ],
                [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                [
                  [f, /ower/, "", G]
                ],
                [/(sun4\w)[;\)]/i],
                [
                  [f, "sparc"]
                ],
                [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                [
                  [f, G]
                ]
              ],
              device: [
                [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                [o, [l, I],
                  [d, m]
                ],
                [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                [o, [l, I],
                  [d, c]
                ],
                [/\((ip(?:hone|od)[\w ]*);/i],
                [o, [l, v],
                  [d, c]
                ],
                [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                [o, [l, v],
                  [d, m]
                ],
                [/(macintosh);/i],
                [o, [l, v]],
                [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                [o, [l, B],
                  [d, m]
                ],
                [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                [o, [l, B],
                  [d, c]
                ],
                [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
                [
                  [o, /_/g, " "],
                  [l, L],
                  [d, c]
                ],
                [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                [
                  [o, /_/g, " "],
                  [l, L],
                  [d, m]
                ],
                [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                [o, [l, "OPPO"],
                  [d, c]
                ],
                [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                [o, [l, "Vivo"],
                  [d, c]
                ],
                [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
                [o, [l, "Realme"],
                  [d, c]
                ],
                [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                [o, [l, k],
                  [d, c]
                ],
                [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                [o, [l, k],
                  [d, m]
                ],
                [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                [o, [l, "LG"],
                  [d, m]
                ],
                [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                [o, [l, "LG"],
                  [d, c]
                ],
                [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                [o, [l, "Lenovo"],
                  [d, m]
                ],
                [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                [
                  [o, /_/g, " "],
                  [l, "Nokia"],
                  [d, c]
                ],
                [/(pixel c)\b/i],
                [o, [l, A],
                  [d, m]
                ],
                [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                [o, [l, A],
                  [d, c]
                ],
                [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                [o, [l, F],
                  [d, c]
                ],
                [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                [
                  [o, "Xperia Tablet"],
                  [l, F],
                  [d, m]
                ],
                [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                [o, [l, "OnePlus"],
                  [d, c]
                ],
                [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                [o, [l, b],
                  [d, m]
                ],
                [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                [
                  [o, /(.+)/g, "Fire Phone $1"],
                  [l, b],
                  [d, c]
                ],
                [/(playbook);[-\w\),; ]+(rim)/i],
                [o, l, [d, m]],
                [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                [o, [l, S],
                  [d, c]
                ],
                [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                [o, [l, w],
                  [d, m]
                ],
                [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                [o, [l, w],
                  [d, c]
                ],
                [/(nexus 9)/i],
                [o, [l, "HTC"],
                  [d, m]
                ],
                [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i],
                [l, [o, /_/g, " "],
                  [d, c]
                ],
                [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                [o, [l, "Acer"],
                  [d, m]
                ],
                [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                [o, [l, "Meizu"],
                  [d, c]
                ],
                [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                [o, [l, P],
                  [d, c]
                ],
                [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                [l, o, [d, c]],
                [/(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                [l, o, [d, m]],
                [/(surface duo)/i],
                [o, [l, z],
                  [d, m]
                ],
                [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                [o, [l, "Fairphone"],
                  [d, c]
                ],
                [/(u304aa)/i],
                [o, [l, "AT&T"],
                  [d, c]
                ],
                [/\bsie-(\w*)/i],
                [o, [l, "Siemens"],
                  [d, c]
                ],
                [/\b(rct\w+) b/i],
                [o, [l, "RCA"],
                  [d, m]
                ],
                [/\b(venue[\d ]{2,7}) b/i],
                [o, [l, "Dell"],
                  [d, m]
                ],
                [/\b(q(?:mv|ta)\w+) b/i],
                [o, [l, "Verizon"],
                  [d, m]
                ],
                [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                [o, [l, "Barnes & Noble"],
                  [d, m]
                ],
                [/\b(tm\d{3}\w+) b/i],
                [o, [l, "NuVision"],
                  [d, m]
                ],
                [/\b(k88) b/i],
                [o, [l, "ZTE"],
                  [d, m]
                ],
                [/\b(nx\d{3}j) b/i],
                [o, [l, "ZTE"],
                  [d, c]
                ],
                [/\b(gen\d{3}) b.+49h/i],
                [o, [l, "Swiss"],
                  [d, c]
                ],
                [/\b(zur\d{3}) b/i],
                [o, [l, "Swiss"],
                  [d, m]
                ],
                [/\b((zeki)?tb.*\b) b/i],
                [o, [l, "Zeki"],
                  [d, m]
                ],
                [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                [
                  [l, "Dragon Touch"], o, [d, m]
                ],
                [/\b(ns-?\w{0,9}) b/i],
                [o, [l, "Insignia"],
                  [d, m]
                ],
                [/\b((nxa|next)-?\w{0,9}) b/i],
                [o, [l, "NextBook"],
                  [d, m]
                ],
                [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                [
                  [l, "Voice"], o, [d, c]
                ],
                [/\b(lvtel\-)?(v1[12]) b/i],
                [
                  [l, "LvTel"], o, [d, c]
                ],
                [/\b(ph-1) /i],
                [o, [l, "Essential"],
                  [d, c]
                ],
                [/\b(v(100md|700na|7011|917g).*\b) b/i],
                [o, [l, "Envizen"],
                  [d, m]
                ],
                [/\b(trio[-\w\. ]+) b/i],
                [o, [l, "MachSpeed"],
                  [d, m]
                ],
                [/\btu_(1491) b/i],
                [o, [l, "Rotor"],
                  [d, m]
                ],
                [/(shield[\w ]+) b/i],
                [o, [l, "Nvidia"],
                  [d, m]
                ],
                [/(sprint) (\w+)/i],
                [l, o, [d, c]],
                [/(kin\.[onetw]{3})/i],
                [
                  [o, /\./g, " "],
                  [l, z],
                  [d, c]
                ],
                [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                [o, [l, D],
                  [d, m]
                ],
                [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                [o, [l, D],
                  [d, c]
                ],
                [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                [l, o, [d, u]],
                [/droid.+; (shield) bui/i],
                [o, [l, "Nvidia"],
                  [d, u]
                ],
                [/(playstation [345portablevi]+)/i],
                [o, [l, F],
                  [d, u]
                ],
                [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                [o, [l, z],
                  [d, u]
                ],
                [/smart-tv.+(samsung)/i],
                [l, [d, _]],
                [/hbbtv.+maple;(\d+)/i],
                [
                  [o, /^/, "SmartTV"],
                  [l, I],
                  [d, _]
                ],
                [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                [
                  [l, "LG"],
                  [d, _]
                ],
                [/(apple) ?tv/i],
                [l, [o, v + " TV"],
                  [d, _]
                ],
                [/crkey/i],
                [
                  [o, U + "cast"],
                  [l, A],
                  [d, _]
                ],
                [/droid.+aft(\w)( bui|\))/i],
                [o, [l, b],
                  [d, _]
                ],
                [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                [o, [l, P],
                  [d, _]
                ],
                [/(bravia[\w ]+)( bui|\))/i],
                [o, [l, F],
                  [d, _]
                ],
                [/(mitv-\w{5}) bui/i],
                [o, [l, L],
                  [d, _]
                ],
                [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],
                [
                  [l, H],
                  [o, H],
                  [d, _]
                ],
                [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                [
                  [d, _]
                ],
                [/((pebble))app/i],
                [l, o, [d, g]],
                [/droid.+; (glass) \d/i],
                [o, [l, A],
                  [d, g]
                ],
                [/droid.+; (wt63?0{2,3})\)/i],
                [o, [l, D],
                  [d, g]
                ],
                [/(quest( 2)?)/i],
                [o, [l, R],
                  [d, g]
                ],
                [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                [l, [d, y]],
                [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
                [o, [d, c]],
                [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                [o, [d, m]],
                [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                [
                  [d, m]
                ],
                [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                [
                  [d, c]
                ],
                [/(android[-\w\. ]{0,9});.+buil/i],
                [o, [l, "Generic"]]
              ],
              engine: [
                [/windows.+ edge\/([\w\.]+)/i],
                [p, [h, "EdgeHTML"]],
                [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                [p, [h, "Blink"]],
                [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i],
                [h, p],
                [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                [p, h]
              ],
              os: [
                [/microsoft (windows) (vista|xp)/i],
                [h, p],
                [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],
                [h, [p, Y, j]],
                [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                [
                  [h, "Windows"],
                  [p, Y, j]
                ],
                [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i],
                [
                  [p, /_/g, "."],
                  [h, "iOS"]
                ],
                [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                [
                  [h, "Mac OS"],
                  [p, /_/g, "."]
                ],
                [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                [p, h],
                [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                [h, p],
                [/\(bb(10);/i],
                [p, [h, S]],
                [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                [p, [h, "Symbian"]],
                [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                [p, [h, E + " OS"]],
                [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                [p, [h, "webOS"]],
                [/crkey\/([\d\.]+)/i],
                [p, [h, U + "cast"]],
                [/(cros) [\w]+ ([\w\.]+\w)/i],
                [
                  [h, "Chromium OS"], p
                ],
                [/(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                [h, p],
                [/(sunos) ?([\w\.\d]*)/i],
                [
                  [h, "Solaris"], p
                ],
                [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i, /(unix) ?([\w\.]*)/i],
                [h, p]
              ]
            },
            W = function(i, r) {
              if (typeof i === n && (r = i, i = e), !(this instanceof W)) return new W(i, r).getResult();
              var u = i || (typeof t !== s && t.navigator && t.navigator.userAgent ? t.navigator.userAgent : ""),
                c = r ? N(q, r) : q;
              return this.getBrowser = function() {
                var t, i = {};
                return i[h] = e, i[p] = e, V.call(i, u, c.browser), i.major = typeof(t = i.version) === a ? t.replace(/[^\d\.]/g, "").split(".")[0] : e, i
              }, this.getCPU = function() {
                var t = {};
                return t[f] = e, V.call(t, u, c.cpu), t
              }, this.getDevice = function() {
                var t = {};
                return t[l] = e, t[o] = e, t[d] = e, V.call(t, u, c.device), t
              }, this.getEngine = function() {
                var t = {};
                return t[h] = e, t[p] = e, V.call(t, u, c.engine), t
              }, this.getOS = function() {
                var t = {};
                return t[h] = e, t[p] = e, V.call(t, u, c.os), t
              }, this.getResult = function() {
                return {
                  ua: this.getUA(),
                  browser: this.getBrowser(),
                  engine: this.getEngine(),
                  os: this.getOS(),
                  device: this.getDevice(),
                  cpu: this.getCPU()
                }
              }, this.getUA = function() {
                return u
              }, this.setUA = function(t) {
                return u = typeof t === a && t.length > 350 ? H(t, 350) : t, this
              }, this.setUA(u), this
            };
          W.VERSION = "1.0.33", W.BROWSER = O([h, p, "major"]), W.CPU = O([f]), W.DEVICE = O([o, l, d, u, c, _, m, g, y]), W.ENGINE = W.OS = O([h, p]), T.exports && (r = T.exports = W), r.UAParser = W;
          var K = typeof t !== s && (t.jQuery || t.Zepto);
          if (K && !K.ua) {
            var Z = new W;
            K.ua = Z.getResult(), K.ua.get = function() {
              return Z.getUA()
            }, K.ua.set = function(t) {
              Z.setUA(t);
              var e = Z.getResult();
              for (var i in e) K.ua[i] = e[i]
            }
          }
        }("object" == typeof window ? window : E);
      var A = T.exports,
        B = {};
      (s = new Date, n = 4, a = {
        setLogLevel: function(t) {
          t == this.debug ? n = 1 : t == this.info ? n = 2 : t == this.warn ? n = 3 : (this.error, n = 4)
        },
        debug: function(t, e) {
          void 0 === console.debug && (console.debug = console.log), 1 >= n && console.debug("[" + a.getDurationString(new Date - s, 1e3) + "]", "[" + t + "]", e)
        },
        log: function(t, e) {
          this.debug(t.msg)
        },
        info: function(t, e) {
          2 >= n && console.info("[" + a.getDurationString(new Date - s, 1e3) + "]", "[" + t + "]", e)
        },
        warn: function(t, e) {
          3 >= n && console.warn("[" + a.getDurationString(new Date - s, 1e3) + "]", "[" + t + "]", e)
        },
        error: function(t, e) {
          4 >= n && console.error("[" + a.getDurationString(new Date - s, 1e3) + "]", "[" + t + "]", e)
        }
      }).getDurationString = function(t, e) {
        function i(t, e) {
          for (var i = ("" + t).split("."); i[0].length < e;) i[0] = "0" + i[0];
          return i.join(".")
        }
        t < 0 ? (r = !0, t = -t) : r = !1;
        var r, s = t / (e || 1),
          n = Math.floor(s / 3600),
          a = Math.floor((s -= 3600 * n) / 60),
          o = 1e3 * (s -= 60 * a);
        return o -= 1e3 * (s = Math.floor(s)), o = Math.floor(o), (r ? "-" : "") + n + ":" + i(a, 2) + ":" + i(s, 2) + "." + i(o, 3)
      }, a.printRanges = function(t) {
        var e = t.length;
        if (!(e > 0)) return "(empty)";
        for (var i = "", r = 0; r < e; r++) r > 0 && (i += ","), i += "[" + a.getDurationString(t.start(r)) + "," + a.getDurationString(t.end(r)) + "]";
        return i
      }, B.Log = a, (o = function(t) {
        if (t instanceof ArrayBuffer) this.buffer = t, this.dataview = new DataView(t);
        else throw "Needs an array buffer";
        this.position = 0
      }).prototype.getPosition = function() {
        return this.position
      }, o.prototype.getEndPosition = function() {
        return this.buffer.byteLength
      }, o.prototype.getLength = function() {
        return this.buffer.byteLength
      }, o.prototype.seek = function(t) {
        var e = Math.max(0, Math.min(this.buffer.byteLength, t));
        return this.position = isNaN(e) || !isFinite(e) ? 0 : e, !0
      }, o.prototype.isEos = function() {
        return this.getPosition() >= this.getEndPosition()
      }, o.prototype.readAnyInt = function(t, e) {
        var i = 0;
        if (this.position + t <= this.buffer.byteLength) {
          switch (t) {
            case 1:
              i = e ? this.dataview.getInt8(this.position) : this.dataview.getUint8(this.position);
              break;
            case 2:
              i = e ? this.dataview.getInt16(this.position) : this.dataview.getUint16(this.position);
              break;
            case 3:
              if (e) throw "No method for reading signed 24 bits values";
              i = this.dataview.getUint8(this.position) << 16 | this.dataview.getUint8(this.position + 1) << 8 | this.dataview.getUint8(this.position + 2);
              break;
            case 4:
              i = e ? this.dataview.getInt32(this.position) : this.dataview.getUint32(this.position);
              break;
            case 8:
              if (e) throw "No method for reading signed 64 bits values";
              i = this.dataview.getUint32(this.position) << 32 | this.dataview.getUint32(this.position + 4);
              break;
            default:
              throw "readInt method not implemented for size: " + t
          }
          return this.position += t, i
        }
        throw "Not enough bytes in buffer"
      }, o.prototype.readUint8 = function() {
        return this.readAnyInt(1, !1)
      }, o.prototype.readUint16 = function() {
        return this.readAnyInt(2, !1)
      }, o.prototype.readUint24 = function() {
        return this.readAnyInt(3, !1)
      }, o.prototype.readUint32 = function() {
        return this.readAnyInt(4, !1)
      }, o.prototype.readUint64 = function() {
        return this.readAnyInt(8, !1)
      }, o.prototype.readString = function(t) {
        if (this.position + t <= this.buffer.byteLength) {
          for (var e = "", i = 0; i < t; i++) e += String.fromCharCode(this.readUint8());
          return e
        }
        throw "Not enough bytes in buffer"
      }, o.prototype.readCString = function() {
        for (var t = [];;) {
          var e = this.readUint8();
          if (0 !== e) t.push(e);
          else break
        }
        return String.fromCharCode.apply(null, t)
      }, o.prototype.readInt8 = function() {
        return this.readAnyInt(1, !0)
      }, o.prototype.readInt16 = function() {
        return this.readAnyInt(2, !0)
      }, o.prototype.readInt32 = function() {
        return this.readAnyInt(4, !0)
      }, o.prototype.readInt64 = function() {
        return this.readAnyInt(8, !1)
      }, o.prototype.readUint8Array = function(t) {
        for (var e = new Uint8Array(t), i = 0; i < t; i++) e[i] = this.readUint8();
        return e
      }, o.prototype.readInt16Array = function(t) {
        for (var e = new Int16Array(t), i = 0; i < t; i++) e[i] = this.readInt16();
        return e
      }, o.prototype.readUint16Array = function(t) {
        for (var e = new Int16Array(t), i = 0; i < t; i++) e[i] = this.readUint16();
        return e
      }, o.prototype.readUint32Array = function(t) {
        for (var e = new Uint32Array(t), i = 0; i < t; i++) e[i] = this.readUint32();
        return e
      }, o.prototype.readInt32Array = function(t) {
        for (var e = new Int32Array(t), i = 0; i < t; i++) e[i] = this.readInt32();
        return e
      }, B.MP4BoxStream = o, (h = function(t, e, i) {
        this._byteOffset = e || 0, t instanceof ArrayBuffer ? this.buffer = t : "object" == typeof t ? (this.dataView = t, e && (this._byteOffset += e)) : this.buffer = new ArrayBuffer(t || 0), this.position = 0, this.endianness = null == i ? h.LITTLE_ENDIAN : i
      }).prototype = {}, h.prototype.getPosition = function() {
        return this.position
      }, h.prototype._realloc = function(t) {
        if (this._dynamicSize) {
          var e = this._byteOffset + this.position + t,
            i = this._buffer.byteLength;
          if (e <= i) {
            e > this._byteLength && (this._byteLength = e);
            return
          }
          for (i < 1 && (i = 1); e > i;) i *= 2;
          var r = new ArrayBuffer(i),
            s = new Uint8Array(this._buffer);
          new Uint8Array(r, 0, s.length).set(s), this.buffer = r, this._byteLength = e
        }
      }, h.prototype._trimAlloc = function() {
        if (this._byteLength != this._buffer.byteLength) {
          var t = new ArrayBuffer(this._byteLength),
            e = new Uint8Array(t),
            i = new Uint8Array(this._buffer, 0, e.length);
          e.set(i), this.buffer = t
        }
      }, h.BIG_ENDIAN = !1, h.LITTLE_ENDIAN = !0, h.prototype._byteLength = 0, Object.defineProperty(h.prototype, "byteLength", {
        get: function() {
          return this._byteLength - this._byteOffset
        }
      }), Object.defineProperty(h.prototype, "buffer", {
        get: function() {
          return this._trimAlloc(), this._buffer
        },
        set: function(t) {
          this._buffer = t, this._dataView = new DataView(this._buffer, this._byteOffset), this._byteLength = this._buffer.byteLength
        }
      }), Object.defineProperty(h.prototype, "byteOffset", {
        get: function() {
          return this._byteOffset
        },
        set: function(t) {
          this._byteOffset = t, this._dataView = new DataView(this._buffer, this._byteOffset), this._byteLength = this._buffer.byteLength
        }
      }), Object.defineProperty(h.prototype, "dataView", {
        get: function() {
          return this._dataView
        },
        set: function(t) {
          this._byteOffset = t.byteOffset, this._buffer = t.buffer, this._dataView = new DataView(this._buffer, this._byteOffset), this._byteLength = this._byteOffset + t.byteLength
        }
      }), h.prototype.seek = function(t) {
        var e = Math.max(0, Math.min(this.byteLength, t));
        this.position = isNaN(e) || !isFinite(e) ? 0 : e
      }, h.prototype.isEof = function() {
        return this.position >= this._byteLength
      }, h.prototype.mapUint8Array = function(t) {
        this._realloc(1 * t);
        var e = new Uint8Array(this._buffer, this.byteOffset + this.position, t);
        return this.position += 1 * t, e
      }, h.prototype.readInt32Array = function(t, e) {
        var i = new Int32Array(t = null == t ? this.byteLength - this.position / 4 : t);
        return h.memcpy(i.buffer, 0, this.buffer, this.byteOffset + this.position, t * i.BYTES_PER_ELEMENT), h.arrayToNative(i, null == e ? this.endianness : e), this.position += i.byteLength, i
      }, h.prototype.readInt16Array = function(t, e) {
        var i = new Int16Array(t = null == t ? this.byteLength - this.position / 2 : t);
        return h.memcpy(i.buffer, 0, this.buffer, this.byteOffset + this.position, t * i.BYTES_PER_ELEMENT), h.arrayToNative(i, null == e ? this.endianness : e), this.position += i.byteLength, i
      }, h.prototype.readInt8Array = function(t) {
        var e = new Int8Array(t = null == t ? this.byteLength - this.position : t);
        return h.memcpy(e.buffer, 0, this.buffer, this.byteOffset + this.position, t * e.BYTES_PER_ELEMENT), this.position += e.byteLength, e
      }, h.prototype.readUint32Array = function(t, e) {
        var i = new Uint32Array(t = null == t ? this.byteLength - this.position / 4 : t);
        return h.memcpy(i.buffer, 0, this.buffer, this.byteOffset + this.position, t * i.BYTES_PER_ELEMENT), h.arrayToNative(i, null == e ? this.endianness : e), this.position += i.byteLength, i
      }, h.prototype.readUint16Array = function(t, e) {
        var i = new Uint16Array(t = null == t ? this.byteLength - this.position / 2 : t);
        return h.memcpy(i.buffer, 0, this.buffer, this.byteOffset + this.position, t * i.BYTES_PER_ELEMENT), h.arrayToNative(i, null == e ? this.endianness : e), this.position += i.byteLength, i
      }, h.prototype.readUint8Array = function(t) {
        var e = new Uint8Array(t = null == t ? this.byteLength - this.position : t);
        return h.memcpy(e.buffer, 0, this.buffer, this.byteOffset + this.position, t * e.BYTES_PER_ELEMENT), this.position += e.byteLength, e
      }, h.prototype.readFloat64Array = function(t, e) {
        var i = new Float64Array(t = null == t ? this.byteLength - this.position / 8 : t);
        return h.memcpy(i.buffer, 0, this.buffer, this.byteOffset + this.position, t * i.BYTES_PER_ELEMENT), h.arrayToNative(i, null == e ? this.endianness : e), this.position += i.byteLength, i
      }, h.prototype.readFloat32Array = function(t, e) {
        var i = new Float32Array(t = null == t ? this.byteLength - this.position / 4 : t);
        return h.memcpy(i.buffer, 0, this.buffer, this.byteOffset + this.position, t * i.BYTES_PER_ELEMENT), h.arrayToNative(i, null == e ? this.endianness : e), this.position += i.byteLength, i
      }, h.prototype.readInt32 = function(t) {
        var e = this._dataView.getInt32(this.position, null == t ? this.endianness : t);
        return this.position += 4, e
      }, h.prototype.readInt16 = function(t) {
        var e = this._dataView.getInt16(this.position, null == t ? this.endianness : t);
        return this.position += 2, e
      }, h.prototype.readInt8 = function() {
        var t = this._dataView.getInt8(this.position);
        return this.position += 1, t
      }, h.prototype.readUint32 = function(t) {
        var e = this._dataView.getUint32(this.position, null == t ? this.endianness : t);
        return this.position += 4, e
      }, h.prototype.readUint16 = function(t) {
        var e = this._dataView.getUint16(this.position, null == t ? this.endianness : t);
        return this.position += 2, e
      }, h.prototype.readUint8 = function() {
        var t = this._dataView.getUint8(this.position);
        return this.position += 1, t
      }, h.prototype.readFloat32 = function(t) {
        var e = this._dataView.getFloat32(this.position, null == t ? this.endianness : t);
        return this.position += 4, e
      }, h.prototype.readFloat64 = function(t) {
        var e = this._dataView.getFloat64(this.position, null == t ? this.endianness : t);
        return this.position += 8, e
      }, h.endianness = new Int8Array(new Int16Array([1]).buffer)[0] > 0, h.memcpy = function(t, e, i, r, s) {
        var n = new Uint8Array(t, e, s),
          a = new Uint8Array(i, r, s);
        n.set(a)
      }, h.arrayToNative = function(t, e) {
        return e == this.endianness ? t : this.flipArrayEndianness(t)
      }, h.nativeToEndian = function(t, e) {
        return this.endianness == e ? t : this.flipArrayEndianness(t)
      }, h.flipArrayEndianness = function(t) {
        for (var e = new Uint8Array(t.buffer, t.byteOffset, t.byteLength), i = 0; i < t.byteLength; i += t.BYTES_PER_ELEMENT)
          for (var r = i + t.BYTES_PER_ELEMENT - 1, s = i; r > s; r--, s++) {
            var n = e[s];
            e[s] = e[r], e[r] = n
          }
        return t
      }, h.prototype.failurePosition = 0, String.fromCharCodeUint8 = function(t) {
        for (var e = [], i = 0; i < t.length; i++) e[i] = t[i];
        return String.fromCharCode.apply(null, e)
      }, h.prototype.readString = function(t, e) {
        return null == e || "ASCII" == e ? String.fromCharCodeUint8.apply(null, [this.mapUint8Array(null == t ? this.byteLength - this.position : t)]) : new TextDecoder(e).decode(this.mapUint8Array(t))
      }, h.prototype.readCString = function(t) {
        var e = this.byteLength - this.position,
          i = new Uint8Array(this._buffer, this._byteOffset + this.position),
          r = e;
        null != t && (r = Math.min(t, e));
        for (var s = 0; s < r && 0 !== i[s]; s++);
        var n = String.fromCharCodeUint8.apply(null, [this.mapUint8Array(s)]);
        return null != t ? this.position += r - s : s != e && (this.position += 1), n
      }, h.prototype.readInt64 = function() {
        return 4294967296 * this.readInt32() + this.readUint32()
      }, h.prototype.readUint64 = function() {
        return 4294967296 * this.readUint32() + this.readUint32()
      }, h.prototype.readInt64 = function() {
        return 4294967296 * this.readUint32() + this.readUint32()
      }, h.prototype.readUint24 = function() {
        return (this.readUint8() << 16) + (this.readUint8() << 8) + this.readUint8()
      }, B.DataStream = h, h.prototype.save = function(t) {
        var e = new Blob([this.buffer]);
        if (window.URL && URL.createObjectURL) {
          var i = window.URL.createObjectURL(e),
            r = document.createElement("a");
          document.body.appendChild(r), r.setAttribute("href", i), r.setAttribute("download", t), r.setAttribute("target", "_self"), r.click(), window.URL.revokeObjectURL(i)
        } else throw "DataStream.save: Can't create object URL."
      }, h.prototype._dynamicSize = !0, Object.defineProperty(h.prototype, "dynamicSize", {
        get: function() {
          return this._dynamicSize
        },
        set: function(t) {
          t || this._trimAlloc(), this._dynamicSize = t
        }
      }), h.prototype.shift = function(t) {
        var e = new ArrayBuffer(this._byteLength - t),
          i = new Uint8Array(e),
          r = new Uint8Array(this._buffer, t, i.length);
        i.set(r), this.buffer = e, this.position -= t
      }, h.prototype.writeInt32Array = function(t, e) {
        if (this._realloc(4 * t.length), t instanceof Int32Array && this.byteOffset + this.position % t.BYTES_PER_ELEMENT === 0) h.memcpy(this._buffer, this.byteOffset + this.position, t.buffer, 0, t.byteLength), this.mapInt32Array(t.length, e);
        else
          for (var i = 0; i < t.length; i++) this.writeInt32(t[i], e)
      }, h.prototype.writeInt16Array = function(t, e) {
        if (this._realloc(2 * t.length), t instanceof Int16Array && this.byteOffset + this.position % t.BYTES_PER_ELEMENT === 0) h.memcpy(this._buffer, this.byteOffset + this.position, t.buffer, 0, t.byteLength), this.mapInt16Array(t.length, e);
        else
          for (var i = 0; i < t.length; i++) this.writeInt16(t[i], e)
      }, h.prototype.writeInt8Array = function(t) {
        if (this._realloc(1 * t.length), t instanceof Int8Array && this.byteOffset + this.position % t.BYTES_PER_ELEMENT === 0) h.memcpy(this._buffer, this.byteOffset + this.position, t.buffer, 0, t.byteLength), this.mapInt8Array(t.length);
        else
          for (var e = 0; e < t.length; e++) this.writeInt8(t[e])
      }, h.prototype.writeUint32Array = function(t, e) {
        if (this._realloc(4 * t.length), t instanceof Uint32Array && this.byteOffset + this.position % t.BYTES_PER_ELEMENT === 0) h.memcpy(this._buffer, this.byteOffset + this.position, t.buffer, 0, t.byteLength), this.mapUint32Array(t.length, e);
        else
          for (var i = 0; i < t.length; i++) this.writeUint32(t[i], e)
      }, h.prototype.writeUint16Array = function(t, e) {
        if (this._realloc(2 * t.length), t instanceof Uint16Array && this.byteOffset + this.position % t.BYTES_PER_ELEMENT === 0) h.memcpy(this._buffer, this.byteOffset + this.position, t.buffer, 0, t.byteLength), this.mapUint16Array(t.length, e);
        else
          for (var i = 0; i < t.length; i++) this.writeUint16(t[i], e)
      }, h.prototype.writeUint8Array = function(t) {
        if (this._realloc(1 * t.length), t instanceof Uint8Array && this.byteOffset + this.position % t.BYTES_PER_ELEMENT === 0) h.memcpy(this._buffer, this.byteOffset + this.position, t.buffer, 0, t.byteLength), this.mapUint8Array(t.length);
        else
          for (var e = 0; e < t.length; e++) this.writeUint8(t[e])
      }, h.prototype.writeFloat64Array = function(t, e) {
        if (this._realloc(8 * t.length), t instanceof Float64Array && this.byteOffset + this.position % t.BYTES_PER_ELEMENT === 0) h.memcpy(this._buffer, this.byteOffset + this.position, t.buffer, 0, t.byteLength), this.mapFloat64Array(t.length, e);
        else
          for (var i = 0; i < t.length; i++) this.writeFloat64(t[i], e)
      }, h.prototype.writeFloat32Array = function(t, e) {
        if (this._realloc(4 * t.length), t instanceof Float32Array && this.byteOffset + this.position % t.BYTES_PER_ELEMENT === 0) h.memcpy(this._buffer, this.byteOffset + this.position, t.buffer, 0, t.byteLength), this.mapFloat32Array(t.length, e);
        else
          for (var i = 0; i < t.length; i++) this.writeFloat32(t[i], e)
      }, h.prototype.writeInt32 = function(t, e) {
        this._realloc(4), this._dataView.setInt32(this.position, t, null == e ? this.endianness : e), this.position += 4
      }, h.prototype.writeInt16 = function(t, e) {
        this._realloc(2), this._dataView.setInt16(this.position, t, null == e ? this.endianness : e), this.position += 2
      }, h.prototype.writeInt8 = function(t) {
        this._realloc(1), this._dataView.setInt8(this.position, t), this.position += 1
      }, h.prototype.writeUint32 = function(t, e) {
        this._realloc(4), this._dataView.setUint32(this.position, t, null == e ? this.endianness : e), this.position += 4
      }, h.prototype.writeUint16 = function(t, e) {
        this._realloc(2), this._dataView.setUint16(this.position, t, null == e ? this.endianness : e), this.position += 2
      }, h.prototype.writeUint8 = function(t) {
        this._realloc(1), this._dataView.setUint8(this.position, t), this.position += 1
      }, h.prototype.writeFloat32 = function(t, e) {
        this._realloc(4), this._dataView.setFloat32(this.position, t, null == e ? this.endianness : e), this.position += 4
      }, h.prototype.writeFloat64 = function(t, e) {
        this._realloc(8), this._dataView.setFloat64(this.position, t, null == e ? this.endianness : e), this.position += 8
      }, h.prototype.writeUCS2String = function(t, e, i) {
        null == i && (i = t.length);
        for (var r = 0; r < t.length && r < i; r++) this.writeUint16(t.charCodeAt(r), e);
        for (; r < i; r++) this.writeUint16(0)
      }, h.prototype.writeString = function(t, e, i) {
        var r = 0;
        if (null == e || "ASCII" == e) {
          if (null != i) {
            var s = Math.min(t.length, i);
            for (r = 0; r < s; r++) this.writeUint8(t.charCodeAt(r));
            for (; r < i; r++) this.writeUint8(0)
          } else
            for (r = 0; r < t.length; r++) this.writeUint8(t.charCodeAt(r))
        } else this.writeUint8Array(new TextEncoder(e).encode(t.substring(0, i)))
      }, h.prototype.writeCString = function(t, e) {
        var i = 0;
        if (null != e) {
          var r = Math.min(t.length, e);
          for (i = 0; i < r; i++) this.writeUint8(t.charCodeAt(i));
          for (; i < e; i++) this.writeUint8(0)
        } else {
          for (i = 0; i < t.length; i++) this.writeUint8(t.charCodeAt(i));
          this.writeUint8(0)
        }
      }, h.prototype.writeStruct = function(t, e) {
        for (var i = 0; i < t.length; i += 2) {
          var r = t[i + 1];
          this.writeType(r, e[t[i]], e)
        }
      }, h.prototype.writeType = function(t, e, i) {
        if ("function" == typeof t) return t(this, e);
        if ("object" == typeof t && !(t instanceof Array)) return t.set(this, e, i);
        var r, s = null,
          n = "ASCII",
          a = this.position;
        switch ("string" == typeof t && /:/.test(t) && (t = (r = t.split(":"))[0], s = parseInt(r[1])), "string" == typeof t && /,/.test(t) && (t = (r = t.split(","))[0], n = parseInt(r[1])), t) {
          case "uint8":
            this.writeUint8(e);
            break;
          case "int8":
            this.writeInt8(e);
            break;
          case "uint16":
            this.writeUint16(e, this.endianness);
            break;
          case "int16":
            this.writeInt16(e, this.endianness);
            break;
          case "uint32":
            this.writeUint32(e, this.endianness);
            break;
          case "int32":
            this.writeInt32(e, this.endianness);
            break;
          case "float32":
            this.writeFloat32(e, this.endianness);
            break;
          case "float64":
            this.writeFloat64(e, this.endianness);
            break;
          case "uint16be":
            this.writeUint16(e, h.BIG_ENDIAN);
            break;
          case "int16be":
            this.writeInt16(e, h.BIG_ENDIAN);
            break;
          case "uint32be":
            this.writeUint32(e, h.BIG_ENDIAN);
            break;
          case "int32be":
            this.writeInt32(e, h.BIG_ENDIAN);
            break;
          case "float32be":
            this.writeFloat32(e, h.BIG_ENDIAN);
            break;
          case "float64be":
            this.writeFloat64(e, h.BIG_ENDIAN);
            break;
          case "uint16le":
            this.writeUint16(e, h.LITTLE_ENDIAN);
            break;
          case "int16le":
            this.writeInt16(e, h.LITTLE_ENDIAN);
            break;
          case "uint32le":
            this.writeUint32(e, h.LITTLE_ENDIAN);
            break;
          case "int32le":
            this.writeInt32(e, h.LITTLE_ENDIAN);
            break;
          case "float32le":
            this.writeFloat32(e, h.LITTLE_ENDIAN);
            break;
          case "float64le":
            this.writeFloat64(e, h.LITTLE_ENDIAN);
            break;
          case "cstring":
            this.writeCString(e, s);
            break;
          case "string":
            this.writeString(e, n, s);
            break;
          case "u16string":
            this.writeUCS2String(e, this.endianness, s);
            break;
          case "u16stringle":
            this.writeUCS2String(e, h.LITTLE_ENDIAN, s);
            break;
          case "u16stringbe":
            this.writeUCS2String(e, h.BIG_ENDIAN, s);
            break;
          default:
            if (3 == t.length) {
              for (var o = t[1], d = 0; d < e.length; d++) this.writeType(o, e[d]);
              break
            }
            this.writeStruct(t, e)
        }
        null != s && (this.position = a, this._realloc(s), this.position = a + s)
      }, h.prototype.writeUint64 = function(t) {
        this.writeUint32(Math.floor(t / 4294967296)), this.writeUint32(4294967295 & t)
      }, h.prototype.writeUint24 = function(t) {
        this.writeUint8((16711680 & t) >> 16), this.writeUint8((65280 & t) >> 8), this.writeUint8(255 & t)
      }, h.prototype.adjustUint32 = function(t, e) {
        var i = this.position;
        this.seek(t), this.writeUint32(e), this.seek(i)
      }, h.prototype.mapInt32Array = function(t, e) {
        this._realloc(4 * t);
        var i = new Int32Array(this._buffer, this.byteOffset + this.position, t);
        return h.arrayToNative(i, null == e ? this.endianness : e), this.position += 4 * t, i
      }, h.prototype.mapInt16Array = function(t, e) {
        this._realloc(2 * t);
        var i = new Int16Array(this._buffer, this.byteOffset + this.position, t);
        return h.arrayToNative(i, null == e ? this.endianness : e), this.position += 2 * t, i
      }, h.prototype.mapInt8Array = function(t) {
        this._realloc(1 * t);
        var e = new Int8Array(this._buffer, this.byteOffset + this.position, t);
        return this.position += 1 * t, e
      }, h.prototype.mapUint32Array = function(t, e) {
        this._realloc(4 * t);
        var i = new Uint32Array(this._buffer, this.byteOffset + this.position, t);
        return h.arrayToNative(i, null == e ? this.endianness : e), this.position += 4 * t, i
      }, h.prototype.mapUint16Array = function(t, e) {
        this._realloc(2 * t);
        var i = new Uint16Array(this._buffer, this.byteOffset + this.position, t);
        return h.arrayToNative(i, null == e ? this.endianness : e), this.position += 2 * t, i
      }, h.prototype.mapFloat64Array = function(t, e) {
        this._realloc(8 * t);
        var i = new Float64Array(this._buffer, this.byteOffset + this.position, t);
        return h.arrayToNative(i, null == e ? this.endianness : e), this.position += 8 * t, i
      }, h.prototype.mapFloat32Array = function(t, e) {
        this._realloc(4 * t);
        var i = new Float32Array(this._buffer, this.byteOffset + this.position, t);
        return h.arrayToNative(i, null == e ? this.endianness : e), this.position += 4 * t, i
      }, (d = function(t) {
        this.buffers = [], this.bufferIndex = -1, t && (this.insertBuffer(t), this.bufferIndex = 0)
      }).prototype = new h(new ArrayBuffer, 0, h.BIG_ENDIAN), d.prototype.initialized = function() {
        var t;
        return this.bufferIndex > -1 || (this.buffers.length > 0 ? 0 === (t = this.buffers[0]).fileStart ? (this.buffer = t, this.bufferIndex = 0, a.debug("MultiBufferStream", "Stream ready for parsing"), !0) : (a.warn("MultiBufferStream", "The first buffer should have a fileStart of 0"), this.logBufferLevel(), !1) : (a.warn("MultiBufferStream", "No buffer to start parsing from"), this.logBufferLevel(), !1))
      }, ArrayBuffer.concat = function(t, e) {
        a.debug("ArrayBuffer", "Trying to create a new buffer of size: " + (t.byteLength + e.byteLength));
        var i = new Uint8Array(t.byteLength + e.byteLength);
        return i.set(new Uint8Array(t), 0), i.set(new Uint8Array(e), t.byteLength), i.buffer
      }, d.prototype.reduceBuffer = function(t, e, i) {
        var r;
        return (r = new Uint8Array(i)).set(new Uint8Array(t, e, i)), r.buffer.fileStart = t.fileStart + e, r.buffer.usedBytes = 0, r.buffer
      }, d.prototype.insertBuffer = function(t) {
        for (var e = !0, i = 0; i < this.buffers.length; i++) {
          var r = this.buffers[i];
          if (t.fileStart <= r.fileStart) {
            if (t.fileStart === r.fileStart) {
              if (t.byteLength > r.byteLength) {
                this.buffers.splice(i, 1), i--;
                continue
              }
              a.warn("MultiBufferStream", "Buffer (fileStart: " + t.fileStart + " - Length: " + t.byteLength + ") already appended, ignoring")
            } else t.fileStart + t.byteLength <= r.fileStart || (t = this.reduceBuffer(t, 0, r.fileStart - t.fileStart)), a.debug("MultiBufferStream", "Appending new buffer (fileStart: " + t.fileStart + " - Length: " + t.byteLength + ")"), this.buffers.splice(i, 0, t), 0 === i && (this.buffer = t);
            e = !1;
            break
          }
          if (t.fileStart < r.fileStart + r.byteLength) {
            var s = r.fileStart + r.byteLength - t.fileStart,
              n = t.byteLength - s;
            if (n > 0) t = this.reduceBuffer(t, s, n);
            else {
              e = !1;
              break
            }
          }
        }
        e && (a.debug("MultiBufferStream", "Appending new buffer (fileStart: " + t.fileStart + " - Length: " + t.byteLength + ")"), this.buffers.push(t), 0 === i && (this.buffer = t))
      }, d.prototype.logBufferLevel = function(t) {
        var e, i, r, s, n, o = [],
          h = "";
        for (e = 0, r = 0, s = 0; e < this.buffers.length; e++) i = this.buffers[e], 0 === e ? (o.push(n = {}), n.start = i.fileStart, n.end = i.fileStart + i.byteLength, h += "[" + n.start + "-") : n.end === i.fileStart ? n.end = i.fileStart + i.byteLength : ((n = {}).start = i.fileStart, h += o[o.length - 1].end - 1 + "], [" + n.start + "-", n.end = i.fileStart + i.byteLength, o.push(n)), r += i.usedBytes, s += i.byteLength;
        o.length > 0 && (h += n.end - 1 + "]"), (t ? a.info : a.debug)("MultiBufferStream", 0 === this.buffers.length ? "No more buffer in memory" : "" + this.buffers.length + " stored buffer(s) (" + r + "/" + s + " bytes), continuous ranges: " + h)
      }, d.prototype.cleanBuffers = function() {
        var t, e;
        for (t = 0; t < this.buffers.length; t++)(e = this.buffers[t]).usedBytes === e.byteLength && (a.debug("MultiBufferStream", "Removing buffer #" + t), this.buffers.splice(t, 1), t--)
      }, d.prototype.mergeNextBuffer = function() {
        if (!(this.bufferIndex + 1 < this.buffers.length) || (t = this.buffers[this.bufferIndex + 1]).fileStart !== this.buffer.fileStart + this.buffer.byteLength) return !1;
        var t, e = this.buffer.byteLength,
          i = this.buffer.usedBytes,
          r = this.buffer.fileStart;
        return this.buffers[this.bufferIndex] = ArrayBuffer.concat(this.buffer, t), this.buffer = this.buffers[this.bufferIndex], this.buffers.splice(this.bufferIndex + 1, 1), this.buffer.usedBytes = i, this.buffer.fileStart = r, a.debug("ISOFile", "Concatenating buffer for box parsing (length: " + e + "->" + this.buffer.byteLength + ")"), !0
      }, d.prototype.findPosition = function(t, e, i) {
        var r, s = null,
          n = -1;
        for (r = !0 === t ? 0 : this.bufferIndex; r < this.buffers.length && (s = this.buffers[r]).fileStart <= e;) n = r, i && (s.fileStart + s.byteLength <= e ? s.usedBytes = s.byteLength : s.usedBytes = e - s.fileStart, this.logBufferLevel()), r++;
        return -1 === n ? -1 : (s = this.buffers[n]).fileStart + s.byteLength >= e ? (a.debug("MultiBufferStream", "Found position in existing buffer #" + n), n) : -1
      }, d.prototype.findEndContiguousBuf = function(t) {
        var e, i, r, s = void 0 !== t ? t : this.bufferIndex;
        if (i = this.buffers[s], this.buffers.length > s + 1)
          for (e = s + 1; e < this.buffers.length; e++)
            if ((r = this.buffers[e]).fileStart === i.fileStart + i.byteLength) i = r;
            else break;
        return i.fileStart + i.byteLength
      }, d.prototype.getEndFilePositionAfter = function(t) {
        var e = this.findPosition(!0, t, !1);
        return -1 !== e ? this.findEndContiguousBuf(e) : t
      }, d.prototype.addUsedBytes = function(t) {
        this.buffer.usedBytes += t, this.logBufferLevel()
      }, d.prototype.setAllUsedBytes = function() {
        this.buffer.usedBytes = this.buffer.byteLength, this.logBufferLevel()
      }, d.prototype.seek = function(t, e, i) {
        var r;
        return -1 !== (r = this.findPosition(e, t, i)) ? (this.buffer = this.buffers[r], this.bufferIndex = r, this.position = t - this.buffer.fileStart, a.debug("MultiBufferStream", "Repositioning parser at buffer position: " + this.position), !0) : (a.debug("MultiBufferStream", "Position " + t + " not found in buffered data"), !1)
      }, d.prototype.getPosition = function() {
        if (-1 === this.bufferIndex || null === this.buffers[this.bufferIndex]) throw "Error accessing position in the MultiBufferStream";
        return this.buffers[this.bufferIndex].fileStart + this.position
      }, d.prototype.getLength = function() {
        return this.byteLength
      }, d.prototype.getEndPosition = function() {
        if (-1 === this.bufferIndex || null === this.buffers[this.bufferIndex]) throw "Error accessing position in the MultiBufferStream";
        return this.buffers[this.bufferIndex].fileStart + this.byteLength
      }, B.MultiBufferStream = d, l = function() {
        var t = [];
        t[3] = "ES_Descriptor", t[4] = "DecoderConfigDescriptor", t[5] = "DecoderSpecificInfo", t[6] = "SLConfigDescriptor", this.getDescriptorName = function(e) {
          return t[e]
        };
        var e = this,
          i = {};
        return this.parseOneDescriptor = function(e) {
          var r, s, n, o = 0;
          for (r = e.readUint8(), n = e.readUint8(); 128 & n;) o = (127 & n) << 7, n = e.readUint8();
          return o += 127 & n, a.debug("MPEG4DescriptorParser", "Found " + (t[r] || "Descriptor " + r) + ", size " + o + " at position " + e.getPosition()), (s = t[r] ? new i[t[r]](o) : new i.Descriptor(o)).parse(e), s
        }, i.Descriptor = function(t, e) {
          this.tag = t, this.size = e, this.descs = []
        }, i.Descriptor.prototype.parse = function(t) {
          this.data = t.readUint8Array(this.size)
        }, i.Descriptor.prototype.findDescriptor = function(t) {
          for (var e = 0; e < this.descs.length; e++)
            if (this.descs[e].tag == t) return this.descs[e];
          return null
        }, i.Descriptor.prototype.parseRemainingDescriptors = function(t) {
          for (var i = t.position; t.position < i + this.size;) {
            var r = e.parseOneDescriptor(t);
            this.descs.push(r)
          }
        }, i.ES_Descriptor = function(t) {
          i.Descriptor.call(this, 3, t)
        }, i.ES_Descriptor.prototype = new i.Descriptor, i.ES_Descriptor.prototype.parse = function(t) {
          if (this.ES_ID = t.readUint16(), this.flags = t.readUint8(), this.size -= 3, 128 & this.flags ? (this.dependsOn_ES_ID = t.readUint16(), this.size -= 2) : this.dependsOn_ES_ID = 0, 64 & this.flags) {
            var e = t.readUint8();
            this.URL = t.readString(e), this.size -= e + 1
          } else this.URL = "";
          32 & this.flags ? (this.OCR_ES_ID = t.readUint16(), this.size -= 2) : this.OCR_ES_ID = 0, this.parseRemainingDescriptors(t)
        }, i.ES_Descriptor.prototype.getOTI = function(t) {
          var e = this.findDescriptor(4);
          return e ? e.oti : 0
        }, i.ES_Descriptor.prototype.getAudioConfig = function(t) {
          var e = this.findDescriptor(4);
          if (!e) return null;
          var i = e.findDescriptor(5);
          if (!i || !i.data) return null;
          var r = (248 & i.data[0]) >> 3;
          return 31 === r && i.data.length >= 2 && (r = 32 + ((7 & i.data[0]) << 3) + ((224 & i.data[1]) >> 5)), r
        }, i.DecoderConfigDescriptor = function(t) {
          i.Descriptor.call(this, 4, t)
        }, i.DecoderConfigDescriptor.prototype = new i.Descriptor, i.DecoderConfigDescriptor.prototype.parse = function(t) {
          this.oti = t.readUint8(), this.streamType = t.readUint8(), this.bufferSize = t.readUint24(), this.maxBitrate = t.readUint32(), this.avgBitrate = t.readUint32(), this.size -= 13, this.parseRemainingDescriptors(t)
        }, i.DecoderSpecificInfo = function(t) {
          i.Descriptor.call(this, 5, t)
        }, i.DecoderSpecificInfo.prototype = new i.Descriptor, i.SLConfigDescriptor = function(t) {
          i.Descriptor.call(this, 6, t)
        }, i.SLConfigDescriptor.prototype = new i.Descriptor, this
      }, B.MPEG4DescriptorParser = l, (p = {
        ERR_INVALID_DATA: -1,
        ERR_NOT_ENOUGH_DATA: 0,
        OK: 1,
        BASIC_BOXES: ["mdat", "idat", "free", "skip", "meco", "strk"],
        FULL_BOXES: ["hmhd", "nmhd", "iods", "xml ", "bxml", "ipro", "mere"],
        CONTAINER_BOXES: [
          ["moov", ["trak", "pssh"]],
          ["trak"],
          ["edts"],
          ["mdia"],
          ["minf"],
          ["dinf"],
          ["stbl", ["sgpd", "sbgp"]],
          ["mvex", ["trex"]],
          ["moof", ["traf"]],
          ["traf", ["trun", "sgpd", "sbgp"]],
          ["vttc"],
          ["tref"],
          ["iref"],
          ["mfra", ["tfra"]],
          ["meco"],
          ["hnti"],
          ["hinf"],
          ["strk"],
          ["strd"],
          ["sinf"],
          ["rinf"],
          ["schi"],
          ["trgr"],
          ["udta", ["kind"]],
          ["iprp", ["ipma"]],
          ["ipco"]
        ],
        boxCodes: [],
        fullBoxCodes: [],
        containerBoxCodes: [],
        sampleEntryCodes: {},
        sampleGroupEntryCodes: [],
        trackGroupTypes: [],
        UUIDBoxes: {},
        UUIDs: [],
        initialize: function() {
          p.FullBox.prototype = new p.Box, p.ContainerBox.prototype = new p.Box, p.SampleEntry.prototype = new p.Box, p.TrackGroupTypeBox.prototype = new p.FullBox, p.BASIC_BOXES.forEach(function(t) {
            p.createBoxCtor(t)
          }), p.FULL_BOXES.forEach(function(t) {
            p.createFullBoxCtor(t)
          }), p.CONTAINER_BOXES.forEach(function(t) {
            p.createContainerBoxCtor(t[0], null, t[1])
          })
        },
        Box: function(t, e, i) {
          this.type = t, this.size = e, this.uuid = i
        },
        FullBox: function(t, e, i) {
          p.Box.call(this, t, e, i), this.flags = 0, this.version = 0
        },
        ContainerBox: function(t, e, i) {
          p.Box.call(this, t, e, i), this.boxes = []
        },
        SampleEntry: function(t, e, i, r) {
          p.ContainerBox.call(this, t, e), this.hdr_size = i, this.start = r
        },
        SampleGroupEntry: function(t) {
          this.grouping_type = t
        },
        TrackGroupTypeBox: function(t, e) {
          p.FullBox.call(this, t, e)
        },
        createBoxCtor: function(t, e) {
          p.boxCodes.push(t), p[t + "Box"] = function(e) {
            p.Box.call(this, t, e)
          }, p[t + "Box"].prototype = new p.Box, e && (p[t + "Box"].prototype.parse = e)
        },
        createFullBoxCtor: function(t, e) {
          p[t + "Box"] = function(e) {
            p.FullBox.call(this, t, e)
          }, p[t + "Box"].prototype = new p.FullBox, p[t + "Box"].prototype.parse = function(t) {
            this.parseFullHeader(t), e && e.call(this, t)
          }
        },
        addSubBoxArrays: function(t) {
          if (t) {
            this.subBoxNames = t;
            for (var e = t.length, i = 0; i < e; i++) this[t[i] + "s"] = []
          }
        },
        createContainerBoxCtor: function(t, e, i) {
          p[t + "Box"] = function(e) {
            p.ContainerBox.call(this, t, e), p.addSubBoxArrays.call(this, i)
          }, p[t + "Box"].prototype = new p.ContainerBox, e && (p[t + "Box"].prototype.parse = e)
        },
        createMediaSampleEntryCtor: function(t, e, i) {
          p.sampleEntryCodes[t] = [], p[t + "SampleEntry"] = function(t, e) {
            p.SampleEntry.call(this, t, e), p.addSubBoxArrays.call(this, i)
          }, p[t + "SampleEntry"].prototype = new p.SampleEntry, e && (p[t + "SampleEntry"].prototype.parse = e)
        },
        createSampleEntryCtor: function(t, e, i, r) {
          p.sampleEntryCodes[t].push(e), p[e + "SampleEntry"] = function(i) {
            p[t + "SampleEntry"].call(this, e, i), p.addSubBoxArrays.call(this, r)
          }, p[e + "SampleEntry"].prototype = new p[t + "SampleEntry"], i && (p[e + "SampleEntry"].prototype.parse = i)
        },
        createEncryptedSampleEntryCtor: function(t, e, i) {
          p.createSampleEntryCtor.call(this, t, e, i, ["sinf"])
        },
        createSampleGroupCtor: function(t, e) {
          p[t + "SampleGroupEntry"] = function(e) {
            p.SampleGroupEntry.call(this, t, e)
          }, p[t + "SampleGroupEntry"].prototype = new p.SampleGroupEntry, e && (p[t + "SampleGroupEntry"].prototype.parse = e)
        },
        createTrackGroupCtor: function(t, e) {
          p[t + "TrackGroupTypeBox"] = function(e) {
            p.TrackGroupTypeBox.call(this, t, e)
          }, p[t + "TrackGroupTypeBox"].prototype = new p.TrackGroupTypeBox, e && (p[t + "TrackGroupTypeBox"].prototype.parse = e)
        },
        createUUIDBox: function(t, e, i, r) {
          p.UUIDs.push(t), p.UUIDBoxes[t] = function(r) {
            e ? p.FullBox.call(this, "uuid", r, t) : i ? p.ContainerBox.call(this, "uuid", r, t) : p.Box.call(this, "uuid", r, t)
          }, p.UUIDBoxes[t].prototype = e ? new p.FullBox : i ? new p.ContainerBox : new p.Box, r && (e ? p.UUIDBoxes[t].prototype.parse = function(t) {
            this.parseFullHeader(t), r && r.call(this, t)
          } : p.UUIDBoxes[t].prototype.parse = r)
        }
      }).initialize(), p.TKHD_FLAG_ENABLED = 1, p.TKHD_FLAG_IN_MOVIE = 2, p.TKHD_FLAG_IN_PREVIEW = 4, p.TFHD_FLAG_BASE_DATA_OFFSET = 1, p.TFHD_FLAG_SAMPLE_DESC = 2, p.TFHD_FLAG_SAMPLE_DUR = 8, p.TFHD_FLAG_SAMPLE_SIZE = 16, p.TFHD_FLAG_SAMPLE_FLAGS = 32, p.TFHD_FLAG_DUR_EMPTY = 65536, p.TFHD_FLAG_DEFAULT_BASE_IS_MOOF = 131072, p.TRUN_FLAGS_DATA_OFFSET = 1, p.TRUN_FLAGS_FIRST_FLAG = 4, p.TRUN_FLAGS_DURATION = 256, p.TRUN_FLAGS_SIZE = 512, p.TRUN_FLAGS_FLAGS = 1024, p.TRUN_FLAGS_CTS_OFFSET = 2048, p.Box.prototype.add = function(t) {
        return this.addBox(new p[t + "Box"])
      }, p.Box.prototype.addBox = function(t) {
        return this.boxes.push(t), this[t.type + "s"] ? this[t.type + "s"].push(t) : this[t.type] = t, t
      }, p.Box.prototype.set = function(t, e) {
        return this[t] = e, this
      }, p.Box.prototype.addEntry = function(t, e) {
        var i = e || "entries";
        return this[i] || (this[i] = []), this[i].push(t), this
      }, B.BoxParser = p, p.parseUUID = function(t) {
        return p.parseHex16(t)
      }, p.parseHex16 = function(t) {
        for (var e = "", i = 0; i < 16; i++) {
          var r = t.readUint8().toString(16);
          e += 1 === r.length ? "0" + r : r
        }
        return e
      }, p.parseOneBox = function(t, e, i) {
        var r, s, n, o = t.getPosition(),
          h = 0;
        if (t.getEndPosition() - o < 8) return a.debug("BoxParser", "Not enough data in stream to parse the type and size of the box"), {
          code: p.ERR_NOT_ENOUGH_DATA
        };
        if (i && i < 8) return a.debug("BoxParser", "Not enough bytes left in the parent box to parse a new box"), {
          code: p.ERR_NOT_ENOUGH_DATA
        };
        var d = t.readUint32(),
          l = t.readString(4),
          f = l;
        if (a.debug("BoxParser", "Found box of type '" + l + "' and size " + d + " at position " + o), h = 8, "uuid" == l) {
          if (t.getEndPosition() - t.getPosition() < 16 || i - h < 16) return t.seek(o), a.debug("BoxParser", "Not enough bytes left in the parent box to parse a UUID box"), {
            code: p.ERR_NOT_ENOUGH_DATA
          };
          n = p.parseUUID(t), h += 16, f = n
        }
        if (1 == d) {
          if (t.getEndPosition() - t.getPosition() < 8 || i && i - h < 8) return t.seek(o), a.warn("BoxParser", 'Not enough data in stream to parse the extended size of the "' + l + '" box'), {
            code: p.ERR_NOT_ENOUGH_DATA
          };
          d = t.readUint64(), h += 8
        } else if (0 === d) {
          if (i) d = i;
          else if ("mdat" !== l) return a.error("BoxParser", "Unlimited box size not supported for type: '" + l + "'"), r = new p.Box(l, d), {
            code: p.OK,
            box: r,
            size: r.size
          }
        }
        return d < h ? (a.error("BoxParser", "Box of type " + l + " has an invalid size " + d + " (too small to be a box)"), {
          code: p.ERR_NOT_ENOUGH_DATA,
          type: l,
          size: d,
          hdr_size: h,
          start: o
        }) : i && d > i ? (a.error("BoxParser", "Box of type '" + l + "' has a size " + d + " greater than its container size " + i), {
          code: p.ERR_NOT_ENOUGH_DATA,
          type: l,
          size: d,
          hdr_size: h,
          start: o
        }) : o + d > t.getEndPosition() ? (t.seek(o), a.info("BoxParser", "Not enough data in stream to parse the entire '" + l + "' box"), {
          code: p.ERR_NOT_ENOUGH_DATA,
          type: l,
          size: d,
          hdr_size: h,
          start: o
        }) : e ? {
          code: p.OK,
          type: l,
          size: d,
          hdr_size: h,
          start: o
        } : (p[l + "Box"] ? r = new p[l + "Box"](d) : "uuid" !== l ? (a.warn("BoxParser", "Unknown box type: '" + l + "'"), (r = new p.Box(l, d)).has_unparsed_data = !0) : p.UUIDBoxes[n] ? r = new p.UUIDBoxes[n](d) : (a.warn("BoxParser", "Unknown uuid type: '" + n + "'"), (r = new p.Box(l, d)).uuid = n, r.has_unparsed_data = !0), r.hdr_size = h, r.start = o, r.write === p.Box.prototype.write && "mdat" !== r.type && (a.info("BoxParser", "'" + f + "' box writing not yet implemented, keeping unparsed data in memory for later write"), r.parseDataAndRewind(t)), r.parse(t), (s = t.getPosition() - (r.start + r.size)) < 0 ? (a.warn("BoxParser", "Parsing of box '" + f + "' did not read the entire indicated box data size (missing " + -s + " bytes), seeking forward"), t.seek(r.start + r.size)) : s > 0 && (a.error("BoxParser", "Parsing of box '" + f + "' read " + s + " more bytes than the indicated box data size, seeking backwards"), t.seek(r.start + r.size)), {
          code: p.OK,
          box: r,
          size: r.size
        })
      }, p.Box.prototype.parse = function(t) {
        "mdat" != this.type ? this.data = t.readUint8Array(this.size - this.hdr_size) : 0 === this.size ? t.seek(t.getEndPosition()) : t.seek(this.start + this.size)
      }, p.Box.prototype.parseDataAndRewind = function(t) {
        this.data = t.readUint8Array(this.size - this.hdr_size), t.position -= this.size - this.hdr_size
      }, p.FullBox.prototype.parseDataAndRewind = function(t) {
        this.parseFullHeader(t), this.data = t.readUint8Array(this.size - this.hdr_size), this.hdr_size -= 4, t.position -= this.size - this.hdr_size
      }, p.FullBox.prototype.parseFullHeader = function(t) {
        this.version = t.readUint8(), this.flags = t.readUint24(), this.hdr_size += 4
      }, p.FullBox.prototype.parse = function(t) {
        this.parseFullHeader(t), this.data = t.readUint8Array(this.size - this.hdr_size)
      }, p.ContainerBox.prototype.parse = function(t) {
        for (; t.getPosition() < this.start + this.size;) {
          if ((e = p.parseOneBox(t, !1, this.size - (t.getPosition() - this.start))).code !== p.OK) return;
          if (i = e.box, this.boxes.push(i), this.subBoxNames && -1 != this.subBoxNames.indexOf(i.type)) this[this.subBoxNames[this.subBoxNames.indexOf(i.type)] + "s"].push(i);
          else {
            var e, i, r = "uuid" !== i.type ? i.type : i.uuid;
            this[r] ? a.warn("Box of type " + r + " already stored in field of this type") : this[r] = i
          }
        }
      }, p.Box.prototype.parseLanguage = function(t) {
        this.language = t.readUint16();
        var e = [];
        e[0] = this.language >> 10 & 31, e[1] = this.language >> 5 & 31, e[2] = 31 & this.language, this.languageString = String.fromCharCode(e[0] + 96, e[1] + 96, e[2] + 96)
      }, p.SAMPLE_ENTRY_TYPE_VISUAL = "Visual", p.SAMPLE_ENTRY_TYPE_AUDIO = "Audio", p.SAMPLE_ENTRY_TYPE_HINT = "Hint", p.SAMPLE_ENTRY_TYPE_METADATA = "Metadata", p.SAMPLE_ENTRY_TYPE_SUBTITLE = "Subtitle", p.SAMPLE_ENTRY_TYPE_SYSTEM = "System", p.SAMPLE_ENTRY_TYPE_TEXT = "Text", p.SampleEntry.prototype.parseHeader = function(t) {
        t.readUint8Array(6), this.data_reference_index = t.readUint16(), this.hdr_size += 8
      }, p.SampleEntry.prototype.parse = function(t) {
        this.parseHeader(t), this.data = t.readUint8Array(this.size - this.hdr_size)
      }, p.SampleEntry.prototype.parseDataAndRewind = function(t) {
        this.parseHeader(t), this.data = t.readUint8Array(this.size - this.hdr_size), this.hdr_size -= 8, t.position -= this.size - this.hdr_size
      }, p.SampleEntry.prototype.parseFooter = function(t) {
        p.ContainerBox.prototype.parse.call(this, t)
      }, p.createMediaSampleEntryCtor(p.SAMPLE_ENTRY_TYPE_HINT), p.createMediaSampleEntryCtor(p.SAMPLE_ENTRY_TYPE_METADATA), p.createMediaSampleEntryCtor(p.SAMPLE_ENTRY_TYPE_SUBTITLE), p.createMediaSampleEntryCtor(p.SAMPLE_ENTRY_TYPE_SYSTEM), p.createMediaSampleEntryCtor(p.SAMPLE_ENTRY_TYPE_TEXT), p.createMediaSampleEntryCtor(p.SAMPLE_ENTRY_TYPE_VISUAL, function(t) {
        var e;
        this.parseHeader(t), t.readUint16(), t.readUint16(), t.readUint32Array(3), this.width = t.readUint16(), this.height = t.readUint16(), this.horizresolution = t.readUint32(), this.vertresolution = t.readUint32(), t.readUint32(), this.frame_count = t.readUint16(), e = Math.min(31, t.readUint8()), this.compressorname = t.readString(e), e < 31 && t.readString(31 - e), this.depth = t.readUint16(), t.readUint16(), this.parseFooter(t)
      }), p.createMediaSampleEntryCtor(p.SAMPLE_ENTRY_TYPE_AUDIO, function(t) {
        this.parseHeader(t), t.readUint32Array(2), this.channel_count = t.readUint16(), this.samplesize = t.readUint16(), t.readUint16(), t.readUint16(), this.samplerate = t.readUint32() / 65536, this.parseFooter(t)
      }), p.createSampleEntryCtor(p.SAMPLE_ENTRY_TYPE_VISUAL, "avc1"), p.createSampleEntryCtor(p.SAMPLE_ENTRY_TYPE_VISUAL, "avc2"), p.createSampleEntryCtor(p.SAMPLE_ENTRY_TYPE_VISUAL, "avc3"), p.createSampleEntryCtor(p.SAMPLE_ENTRY_TYPE_VISUAL, "avc4"), p.createSampleEntryCtor(p.SAMPLE_ENTRY_TYPE_VISUAL, "av01"), p.createSampleEntryCtor(p.SAMPLE_ENTRY_TYPE_VISUAL, "hvc1"), p.createSampleEntryCtor(p.SAMPLE_ENTRY_TYPE_VISUAL, "hev1"), p.createSampleEntryCtor(p.SAMPLE_ENTRY_TYPE_AUDIO, "mp4a"), p.createSampleEntryCtor(p.SAMPLE_ENTRY_TYPE_AUDIO, "ac-3"), p.createSampleEntryCtor(p.SAMPLE_ENTRY_TYPE_AUDIO, "ec-3"), p.createEncryptedSampleEntryCtor(p.SAMPLE_ENTRY_TYPE_VISUAL, "encv"), p.createEncryptedSampleEntryCtor(p.SAMPLE_ENTRY_TYPE_AUDIO, "enca"), p.createEncryptedSampleEntryCtor(p.SAMPLE_ENTRY_TYPE_SUBTITLE, "encu"), p.createEncryptedSampleEntryCtor(p.SAMPLE_ENTRY_TYPE_SYSTEM, "encs"), p.createEncryptedSampleEntryCtor(p.SAMPLE_ENTRY_TYPE_TEXT, "enct"), p.createEncryptedSampleEntryCtor(p.SAMPLE_ENTRY_TYPE_METADATA, "encm"), p.createBoxCtor("a1lx", function(t) {
        var e = ((1 & t.readUint8() & 1) + 1) * 16;
        this.layer_size = [];
        for (var i = 0; i < 3; i++) 16 == e ? this.layer_size[i] = t.readUint16() : this.layer_size[i] = t.readUint32()
      }), p.createBoxCtor("a1op", function(t) {
        this.op_index = t.readUint8()
      }), p.createFullBoxCtor("auxC", function(t) {
        this.aux_type = t.readCString();
        var e = this.size - this.hdr_size - (this.aux_type.length + 1);
        this.aux_subtype = t.readUint8Array(e)
      }), p.createBoxCtor("av1C", function(t) {
        var e = t.readUint8();
        if (this.version = 127 & e, 1 !== this.version) {
          a.error("av1C version " + this.version + " not supported");
          return
        }
        if (e = t.readUint8(), this.seq_profile = e >> 5 & 7, this.seq_level_idx_0 = 31 & e, e = t.readUint8(), this.seq_tier_0 = e >> 7 & 1, this.high_bitdepth = e >> 6 & 1, this.twelve_bit = e >> 5 & 1, this.monochrome = e >> 4 & 1, this.chroma_subsampling_x = e >> 3 & 1, this.chroma_subsampling_y = e >> 2 & 1, this.chroma_sample_position = 3 & e, e = t.readUint8(), this.reserved_1 = e >> 5 & 7, 0 !== this.reserved_1) {
          a.error("av1C reserved_1 parsing problem");
          return
        }
        if (this.initial_presentation_delay_present = e >> 4 & 1, 1 === this.initial_presentation_delay_present) this.initial_presentation_delay_minus_one = 15 & e;
        else if (this.reserved_2 = 15 & e, 0 !== this.reserved_2) {
          a.error("av1C reserved_2 parsing problem");
          return
        }
        var i = this.size - this.hdr_size - 4;
        this.configOBUs = t.readUint8Array(i)
      }), p.createBoxCtor("avcC", function(t) {
        var e, i;
        for (e = 0, this.configurationVersion = t.readUint8(), this.AVCProfileIndication = t.readUint8(), this.profile_compatibility = t.readUint8(), this.AVCLevelIndication = t.readUint8(), this.lengthSizeMinusOne = 3 & t.readUint8(), this.nb_SPS_nalus = 31 & t.readUint8(), i = this.size - this.hdr_size - 6, this.SPS = []; e < this.nb_SPS_nalus; e++) this.SPS[e] = {}, this.SPS[e].length = t.readUint16(), this.SPS[e].nalu = t.readUint8Array(this.SPS[e].length), i -= 2 + this.SPS[e].length;
        for (this.nb_PPS_nalus = t.readUint8(), i--, this.PPS = [], e = 0; e < this.nb_PPS_nalus; e++) this.PPS[e] = {}, this.PPS[e].length = t.readUint16(), this.PPS[e].nalu = t.readUint8Array(this.PPS[e].length), i -= 2 + this.PPS[e].length;
        i > 0 && (this.ext = t.readUint8Array(i))
      }), p.createBoxCtor("btrt", function(t) {
        this.bufferSizeDB = t.readUint32(), this.maxBitrate = t.readUint32(), this.avgBitrate = t.readUint32()
      }), p.createBoxCtor("clap", function(t) {
        this.cleanApertureWidthN = t.readUint32(), this.cleanApertureWidthD = t.readUint32(), this.cleanApertureHeightN = t.readUint32(), this.cleanApertureHeightD = t.readUint32(), this.horizOffN = t.readUint32(), this.horizOffD = t.readUint32(), this.vertOffN = t.readUint32(), this.vertOffD = t.readUint32()
      }), p.createBoxCtor("clli", function(t) {
        this.max_content_light_level = t.readUint16(), this.max_pic_average_light_level = t.readUint16()
      }), p.createFullBoxCtor("co64", function(t) {
        var e, i;
        if (e = t.readUint32(), this.chunk_offsets = [], 0 === this.version)
          for (i = 0; i < e; i++) this.chunk_offsets.push(t.readUint64())
      }), p.createFullBoxCtor("CoLL", function(t) {
        this.maxCLL = t.readUint16(), this.maxFALL = t.readUint16()
      }), p.createBoxCtor("colr", function(t) {
        if (this.colour_type = t.readString(4), "nclx" === this.colour_type) {
          this.colour_primaries = t.readUint16(), this.transfer_characteristics = t.readUint16(), this.matrix_coefficients = t.readUint16();
          var e = t.readUint8();
          this.full_range_flag = e >> 7
        } else "rICC" === this.colour_type ? this.ICC_profile = t.readUint8Array(this.size - 4) : "prof" === this.colour_type && (this.ICC_profile = t.readUint8Array(this.size - 4))
      }), p.createFullBoxCtor("cprt", function(t) {
        this.parseLanguage(t), this.notice = t.readCString()
      }), p.createFullBoxCtor("cslg", function(t) {
        0 === this.version && (this.compositionToDTSShift = t.readInt32(), this.leastDecodeToDisplayDelta = t.readInt32(), this.greatestDecodeToDisplayDelta = t.readInt32(), this.compositionStartTime = t.readInt32(), this.compositionEndTime = t.readInt32())
      }), p.createFullBoxCtor("ctts", function(t) {
        if (e = t.readUint32(), this.sample_counts = [], this.sample_offsets = [], 0 === this.version)
          for (i = 0; i < e; i++) {
            this.sample_counts.push(t.readUint32());
            var e, i, r = t.readInt32();
            r < 0 && a.warn("BoxParser", "ctts box uses negative values without using version 1"), this.sample_offsets.push(r)
          } else if (1 == this.version)
            for (i = 0; i < e; i++) this.sample_counts.push(t.readUint32()), this.sample_offsets.push(t.readInt32())
      }), p.createBoxCtor("dac3", function(t) {
        var e = t.readUint8(),
          i = t.readUint8(),
          r = t.readUint8();
        this.fscod = e >> 6, this.bsid = e >> 1 & 31, this.bsmod = (1 & e) << 2 | i >> 6 & 3, this.acmod = i >> 3 & 7, this.lfeon = i >> 2 & 1, this.bit_rate_code = 3 & i | r >> 5 & 7
      }), p.createBoxCtor("dec3", function(t) {
        var e = t.readUint16();
        this.data_rate = e >> 3, this.num_ind_sub = 7 & e, this.ind_subs = [];
        for (var i = 0; i < this.num_ind_sub + 1; i++) {
          var r = {};
          this.ind_subs.push(r);
          var s = t.readUint8(),
            n = t.readUint8(),
            a = t.readUint8();
          r.fscod = s >> 6, r.bsid = s >> 1 & 31, r.bsmod = (1 & s) << 4 | n >> 4 & 15, r.acmod = n >> 1 & 7, r.lfeon = 1 & n, r.num_dep_sub = a >> 1 & 15, r.num_dep_sub > 0 && (r.chan_loc = (1 & a) << 8 | t.readUint8())
        }
      }), p.createFullBoxCtor("dfLa", function(t) {
        var e = [],
          i = ["STREAMINFO", "PADDING", "APPLICATION", "SEEKTABLE", "VORBIS_COMMENT", "CUESHEET", "PICTURE", "RESERVED"];
        for (this.parseFullHeader(t);;) {
          var r = t.readUint8(),
            s = Math.min(127 & r, i.length - 1);
          if (s ? t.readUint8Array(t.readUint24()) : (t.readUint8Array(13), this.samplerate = t.readUint32() >> 12, t.readUint8Array(20)), e.push(i[s]), 128 & r) break
        }
        this.numMetadataBlocks = e.length + " (" + e.join(", ") + ")"
      }), p.createBoxCtor("dimm", function(t) {
        this.bytessent = t.readUint64()
      }), p.createBoxCtor("dmax", function(t) {
        this.time = t.readUint32()
      }), p.createBoxCtor("dmed", function(t) {
        this.bytessent = t.readUint64()
      }), p.createFullBoxCtor("dref", function(t) {
        this.entries = [];
        for (var e, i, r = t.readUint32(), s = 0; s < r; s++) {
          if ((e = p.parseOneBox(t, !1, this.size - (t.getPosition() - this.start))).code !== p.OK) return;
          i = e.box, this.entries.push(i)
        }
      }), p.createBoxCtor("drep", function(t) {
        this.bytessent = t.readUint64()
      }), p.createFullBoxCtor("elng", function(t) {
        this.extended_language = t.readString(this.size - this.hdr_size)
      }), p.createFullBoxCtor("elst", function(t) {
        this.entries = [];
        for (var e = t.readUint32(), i = 0; i < e; i++) {
          var r = {};
          this.entries.push(r), 1 === this.version ? (r.segment_duration = t.readUint64(), r.media_time = t.readInt64()) : (r.segment_duration = t.readUint32(), r.media_time = t.readInt32()), r.media_rate_integer = t.readInt16(), r.media_rate_fraction = t.readInt16()
        }
      }), p.createFullBoxCtor("emsg", function(t) {
        1 == this.version ? (this.timescale = t.readUint32(), this.presentation_time = t.readUint64(), this.event_duration = t.readUint32(), this.id = t.readUint32(), this.scheme_id_uri = t.readCString(), this.value = t.readCString()) : (this.scheme_id_uri = t.readCString(), this.value = t.readCString(), this.timescale = t.readUint32(), this.presentation_time_delta = t.readUint32(), this.event_duration = t.readUint32(), this.id = t.readUint32());
        var e = this.size - this.hdr_size - (16 + (this.scheme_id_uri.length + 1) + (this.value.length + 1));
        1 == this.version && (e -= 4), this.message_data = t.readUint8Array(e)
      }), p.createFullBoxCtor("esds", function(t) {
        var e = t.readUint8Array(this.size - this.hdr_size);
        if (void 0 !== l) {
          var i = new l;
          this.esd = i.parseOneDescriptor(new h(e.buffer, 0, h.BIG_ENDIAN))
        }
      }), p.createBoxCtor("fiel", function(t) {
        this.fieldCount = t.readUint8(), this.fieldOrdering = t.readUint8()
      }), p.createBoxCtor("frma", function(t) {
        this.data_format = t.readString(4)
      }), p.createBoxCtor("ftyp", function(t) {
        var e = this.size - this.hdr_size;
        this.major_brand = t.readString(4), this.minor_version = t.readUint32(), e -= 8, this.compatible_brands = [];
        for (var i = 0; e >= 4;) this.compatible_brands[i] = t.readString(4), e -= 4, i++
      }), p.createFullBoxCtor("hdlr", function(t) {
        0 === this.version && (t.readUint32(), this.handler = t.readString(4), t.readUint32Array(3), this.name = t.readString(this.size - this.hdr_size - 20), "\0" === this.name[this.name.length - 1] && (this.name = this.name.slice(0, -1)))
      }), p.createBoxCtor("hvcC", function(t) {
        this.configurationVersion = t.readUint8(), s = t.readUint8(), this.general_profile_space = s >> 6, this.general_tier_flag = (32 & s) >> 5, this.general_profile_idc = 31 & s, this.general_profile_compatibility = t.readUint32(), this.general_constraint_indicator = t.readUint8Array(6), this.general_level_idc = t.readUint8(), this.min_spatial_segmentation_idc = 4095 & t.readUint16(), this.parallelismType = 3 & t.readUint8(), this.chroma_format_idc = 3 & t.readUint8(), this.bit_depth_luma_minus8 = 7 & t.readUint8(), this.bit_depth_chroma_minus8 = 7 & t.readUint8(), this.avgFrameRate = t.readUint16(), s = t.readUint8(), this.constantFrameRate = s >> 6, this.numTemporalLayers = (13 & s) >> 3, this.temporalIdNested = (4 & s) >> 2, this.lengthSizeMinusOne = 3 & s, this.nalu_arrays = [];
        var e, i, r, s, n = t.readUint8();
        for (e = 0; e < n; e++) {
          var a = [];
          this.nalu_arrays.push(a), s = t.readUint8(), a.completeness = (128 & s) >> 7, a.nalu_type = 63 & s;
          var o = t.readUint16();
          for (i = 0; i < o; i++) {
            var h = {};
            a.push(h), r = t.readUint16(), h.data = t.readUint8Array(r)
          }
        }
      }), p.createFullBoxCtor("iinf", function(t) {
        var e;
        0 === this.version ? this.entry_count = t.readUint16() : this.entry_count = t.readUint32(), this.item_infos = [];
        for (var i = 0; i < this.entry_count; i++) {
          if ((e = p.parseOneBox(t, !1, this.size - (t.getPosition() - this.start))).code !== p.OK) return;
          "infe" !== e.box.type && a.error("BoxParser", "Expected 'infe' box, got " + e.box.type), this.item_infos[i] = e.box
        }
      }), p.createFullBoxCtor("iloc", function(t) {
        e = t.readUint8(), this.offset_size = e >> 4 & 15, this.length_size = 15 & e, e = t.readUint8(), this.base_offset_size = e >> 4 & 15, 1 === this.version || 2 === this.version ? this.index_size = 15 & e : this.index_size = 0, this.items = [];
        var e, i = 0;
        if (this.version < 2) i = t.readUint16();
        else if (2 === this.version) i = t.readUint32();
        else throw "version of iloc box not supported";
        for (var r = 0; r < i; r++) {
          var s = {};
          if (this.items.push(s), this.version < 2) s.item_ID = t.readUint16();
          else if (2 === this.version) s.item_ID = t.readUint16();
          else throw "version of iloc box not supported";
          switch (1 === this.version || 2 === this.version ? s.construction_method = 15 & t.readUint16() : s.construction_method = 0, s.data_reference_index = t.readUint16(), this.base_offset_size) {
            case 0:
              s.base_offset = 0;
              break;
            case 4:
              s.base_offset = t.readUint32();
              break;
            case 8:
              s.base_offset = t.readUint64();
              break;
            default:
              throw "Error reading base offset size"
          }
          var n = t.readUint16();
          s.extents = [];
          for (var a = 0; a < n; a++) {
            var o = {};
            if (s.extents.push(o), 1 === this.version || 2 === this.version) switch (this.index_size) {
              case 0:
                o.extent_index = 0;
                break;
              case 4:
                o.extent_index = t.readUint32();
                break;
              case 8:
                o.extent_index = t.readUint64();
                break;
              default:
                throw "Error reading extent index"
            }
            switch (this.offset_size) {
              case 0:
                o.extent_offset = 0;
                break;
              case 4:
                o.extent_offset = t.readUint32();
                break;
              case 8:
                o.extent_offset = t.readUint64();
                break;
              default:
                throw "Error reading extent index"
            }
            switch (this.length_size) {
              case 0:
                o.extent_length = 0;
                break;
              case 4:
                o.extent_length = t.readUint32();
                break;
              case 8:
                o.extent_length = t.readUint64();
                break;
              default:
                throw "Error reading extent index"
            }
          }
        }
      }), p.createBoxCtor("imir", function(t) {
        var e = t.readUint8();
        this.reserved = e >> 7, this.axis = 1 & e
      }), p.createFullBoxCtor("infe", function(t) {
        if ((0 === this.version || 1 === this.version) && (this.item_ID = t.readUint16(), this.item_protection_index = t.readUint16(), this.item_name = t.readCString(), this.content_type = t.readCString(), this.content_encoding = t.readCString()), 1 === this.version) {
          this.extension_type = t.readString(4), a.warn("BoxParser", "Cannot parse extension type"), t.seek(this.start + this.size);
          return
        }
        this.version >= 2 && (2 === this.version ? this.item_ID = t.readUint16() : 3 === this.version && (this.item_ID = t.readUint32()), this.item_protection_index = t.readUint16(), this.item_type = t.readString(4), this.item_name = t.readCString(), "mime" === this.item_type ? (this.content_type = t.readCString(), this.content_encoding = t.readCString()) : "uri " === this.item_type && (this.item_uri_type = t.readCString()))
      }), p.createFullBoxCtor("ipma", function(t) {
        var e, i;
        for (e = 0, entry_count = t.readUint32(), this.associations = []; e < entry_count; e++) {
          var r = {};
          this.associations.push(r), this.version < 1 ? r.id = t.readUint16() : r.id = t.readUint32();
          var s = t.readUint8();
          for (i = 0, r.props = []; i < s; i++) {
            var n = t.readUint8(),
              a = {};
            r.props.push(a), a.essential = (128 & n) >> 7 == 1, 1 & this.flags ? a.property_index = (127 & n) << 8 | t.readUint8() : a.property_index = 127 & n
          }
        }
      }), p.createFullBoxCtor("iref", function(t) {
        var e, i;
        for (this.references = []; t.getPosition() < this.start + this.size;) {
          if ((e = p.parseOneBox(t, !0, this.size - (t.getPosition() - this.start))).code !== p.OK) return;
          (i = 0 === this.version ? new p.SingleItemTypeReferenceBox(e.type, e.size, e.hdr_size, e.start) : new p.SingleItemTypeReferenceBoxLarge(e.type, e.size, e.hdr_size, e.start)).write === p.Box.prototype.write && "mdat" !== i.type && (a.warn("BoxParser", i.type + " box writing not yet implemented, keeping unparsed data in memory for later write"), i.parseDataAndRewind(t)), i.parse(t), this.references.push(i)
        }
      }), p.createBoxCtor("irot", function(t) {
        this.angle = 3 & t.readUint8()
      }), p.createFullBoxCtor("ispe", function(t) {
        this.image_width = t.readUint32(), this.image_height = t.readUint32()
      }), p.createFullBoxCtor("kind", function(t) {
        this.schemeURI = t.readCString(), this.value = t.readCString()
      }), p.createFullBoxCtor("leva", function(t) {
        var e = t.readUint8();
        this.levels = [];
        for (var i = 0; i < e; i++) {
          var r = {};
          this.levels[i] = r, r.track_ID = t.readUint32();
          var s = t.readUint8();
          switch (r.padding_flag = s >> 7, r.assignment_type = 127 & s, r.assignment_type) {
            case 0:
              r.grouping_type = t.readString(4);
              break;
            case 1:
              r.grouping_type = t.readString(4), r.grouping_type_parameter = t.readUint32();
              break;
            case 2:
            case 3:
              break;
            case 4:
              r.sub_track_id = t.readUint32();
              break;
            default:
              a.warn("BoxParser", "Unknown leva assignement type")
          }
        }
      }), p.createBoxCtor("lsel", function(t) {
        this.layer_id = t.readUint16()
      }), p.createBoxCtor("maxr", function(t) {
        this.period = t.readUint32(), this.bytes = t.readUint32()
      }), p.createBoxCtor("mdcv", function(t) {
        this.display_primaries = [], this.display_primaries[0] = {}, this.display_primaries[0].x = t.readUint16(), this.display_primaries[0].y = t.readUint16(), this.display_primaries[1] = {}, this.display_primaries[1].x = t.readUint16(), this.display_primaries[1].y = t.readUint16(), this.display_primaries[2] = {}, this.display_primaries[2].x = t.readUint16(), this.display_primaries[2].y = t.readUint16(), this.white_point = {}, this.white_point.x = t.readUint16(), this.white_point.y = t.readUint16(), this.max_display_mastering_luminance = t.readUint32(), this.min_display_mastering_luminance = t.readUint32()
      }), p.createFullBoxCtor("mdhd", function(t) {
        1 == this.version ? (this.creation_time = t.readUint64(), this.modification_time = t.readUint64(), this.timescale = t.readUint32(), this.duration = t.readUint64()) : (this.creation_time = t.readUint32(), this.modification_time = t.readUint32(), this.timescale = t.readUint32(), this.duration = t.readUint32()), this.parseLanguage(t), t.readUint16()
      }), p.createFullBoxCtor("mehd", function(t) {
        1 & this.flags && (a.warn("BoxParser", "mehd box incorrectly uses flags set to 1, converting version to 1"), this.version = 1), 1 == this.version ? this.fragment_duration = t.readUint64() : this.fragment_duration = t.readUint32()
      }), p.createFullBoxCtor("meta", function(t) {
        this.boxes = [], p.ContainerBox.prototype.parse.call(this, t)
      }), p.createFullBoxCtor("mfhd", function(t) {
        this.sequence_number = t.readUint32()
      }), p.createFullBoxCtor("mfro", function(t) {
        this._size = t.readUint32()
      }), p.createFullBoxCtor("mvhd", function(t) {
        1 == this.version ? (this.creation_time = t.readUint64(), this.modification_time = t.readUint64(), this.timescale = t.readUint32(), this.duration = t.readUint64()) : (this.creation_time = t.readUint32(), this.modification_time = t.readUint32(), this.timescale = t.readUint32(), this.duration = t.readUint32()), this.rate = t.readUint32(), this.volume = t.readUint16() >> 8, t.readUint16(), t.readUint32Array(2), this.matrix = t.readUint32Array(9), t.readUint32Array(6), this.next_track_id = t.readUint32()
      }), p.createBoxCtor("npck", function(t) {
        this.packetssent = t.readUint32()
      }), p.createBoxCtor("nump", function(t) {
        this.packetssent = t.readUint64()
      }), p.createFullBoxCtor("padb", function(t) {
        var e = t.readUint32();
        this.padbits = [];
        for (var i = 0; i < Math.floor((e + 1) / 2); i++) this.padbits = t.readUint8()
      }), p.createBoxCtor("pasp", function(t) {
        this.hSpacing = t.readUint32(), this.vSpacing = t.readUint32()
      }), p.createBoxCtor("payl", function(t) {
        this.text = t.readString(this.size - this.hdr_size)
      }), p.createBoxCtor("payt", function(t) {
        this.payloadID = t.readUint32();
        var e = t.readUint8();
        this.rtpmap_string = t.readString(e)
      }), p.createFullBoxCtor("pdin", function(t) {
        var e = (this.size - this.hdr_size) / 8;
        this.rate = [], this.initial_delay = [];
        for (var i = 0; i < e; i++) this.rate[i] = t.readUint32(), this.initial_delay[i] = t.readUint32()
      }), p.createFullBoxCtor("pitm", function(t) {
        0 === this.version ? this.item_id = t.readUint16() : this.item_id = t.readUint32()
      }), p.createFullBoxCtor("pixi", function(t) {
        var e;
        for (e = 0, this.num_channels = t.readUint8(), this.bits_per_channels = []; e < this.num_channels; e++) this.bits_per_channels[e] = t.readUint8()
      }), p.createBoxCtor("pmax", function(t) {
        this.bytes = t.readUint32()
      }), p.createFullBoxCtor("prft", function(t) {
        this.ref_track_id = t.readUint32(), this.ntp_timestamp = t.readUint64(), 0 === this.version ? this.media_time = t.readUint32() : this.media_time = t.readUint64()
      }), p.createFullBoxCtor("pssh", function(t) {
        if (this.system_id = p.parseHex16(t), this.version > 0) {
          var e = t.readUint32();
          this.kid = [];
          for (var i = 0; i < e; i++) this.kid[i] = p.parseHex16(t)
        }
        var r = t.readUint32();
        r > 0 && (this.data = t.readUint8Array(r))
      }), p.createFullBoxCtor("clef", function(t) {
        this.width = t.readUint32(), this.height = t.readUint32()
      }), p.createFullBoxCtor("enof", function(t) {
        this.width = t.readUint32(), this.height = t.readUint32()
      }), p.createFullBoxCtor("prof", function(t) {
        this.width = t.readUint32(), this.height = t.readUint32()
      }), p.createContainerBoxCtor("tapt", null, ["clef", "prof", "enof"]), p.createBoxCtor("rtp ", function(t) {
        this.descriptionformat = t.readString(4), this.sdptext = t.readString(this.size - this.hdr_size - 4)
      }), p.createFullBoxCtor("saio", function(t) {
        1 & this.flags && (this.aux_info_type = t.readUint32(), this.aux_info_type_parameter = t.readUint32());
        var e = t.readUint32();
        this.offset = [];
        for (var i = 0; i < e; i++) 0 === this.version ? this.offset[i] = t.readUint32() : this.offset[i] = t.readUint64()
      }), p.createFullBoxCtor("saiz", function(t) {
        1 & this.flags && (this.aux_info_type = t.readUint32(), this.aux_info_type_parameter = t.readUint32()), this.default_sample_info_size = t.readUint8();
        var e = t.readUint32();
        if (this.sample_info_size = [], 0 === this.default_sample_info_size)
          for (var i = 0; i < e; i++) this.sample_info_size[i] = t.readUint8()
      }), p.createSampleEntryCtor(p.SAMPLE_ENTRY_TYPE_METADATA, "mett", function(t) {
        this.parseHeader(t), this.content_encoding = t.readCString(), this.mime_format = t.readCString(), this.parseFooter(t)
      }), p.createSampleEntryCtor(p.SAMPLE_ENTRY_TYPE_METADATA, "metx", function(t) {
        this.parseHeader(t), this.content_encoding = t.readCString(), this.namespace = t.readCString(), this.schema_location = t.readCString(), this.parseFooter(t)
      }), p.createSampleEntryCtor(p.SAMPLE_ENTRY_TYPE_SUBTITLE, "sbtt", function(t) {
        this.parseHeader(t), this.content_encoding = t.readCString(), this.mime_format = t.readCString(), this.parseFooter(t)
      }), p.createSampleEntryCtor(p.SAMPLE_ENTRY_TYPE_SUBTITLE, "stpp", function(t) {
        this.parseHeader(t), this.namespace = t.readCString(), this.schema_location = t.readCString(), this.auxiliary_mime_types = t.readCString(), this.parseFooter(t)
      }), p.createSampleEntryCtor(p.SAMPLE_ENTRY_TYPE_SUBTITLE, "stxt", function(t) {
        this.parseHeader(t), this.content_encoding = t.readCString(), this.mime_format = t.readCString(), this.parseFooter(t)
      }), p.createSampleEntryCtor(p.SAMPLE_ENTRY_TYPE_SUBTITLE, "tx3g", function(t) {
        this.parseHeader(t), this.displayFlags = t.readUint32(), this.horizontal_justification = t.readInt8(), this.vertical_justification = t.readInt8(), this.bg_color_rgba = t.readUint8Array(4), this.box_record = t.readInt16Array(4), this.style_record = t.readUint8Array(12), this.parseFooter(t)
      }), p.createSampleEntryCtor(p.SAMPLE_ENTRY_TYPE_METADATA, "wvtt", function(t) {
        this.parseHeader(t), this.parseFooter(t)
      }), p.createSampleGroupCtor("alst", function(t) {
        var e, i = t.readUint16();
        for (e = 0, this.first_output_sample = t.readUint16(), this.sample_offset = []; e < i; e++) this.sample_offset[e] = t.readUint32();
        var r = this.description_length - 4 - 4 * i;
        for (e = 0, this.num_output_samples = [], this.num_total_samples = []; e < r / 4; e++) this.num_output_samples[e] = t.readUint16(), this.num_total_samples[e] = t.readUint16()
      }), p.createSampleGroupCtor("avll", function(t) {
        this.layerNumber = t.readUint8(), this.accurateStatisticsFlag = t.readUint8(), this.avgBitRate = t.readUint16(), this.avgFrameRate = t.readUint16()
      }), p.createSampleGroupCtor("avss", function(t) {
        this.subSequenceIdentifier = t.readUint16(), this.layerNumber = t.readUint8();
        var e = t.readUint8();
        this.durationFlag = e >> 7, this.avgRateFlag = e >> 6 & 1, this.durationFlag && (this.duration = t.readUint32()), this.avgRateFlag && (this.accurateStatisticsFlag = t.readUint8(), this.avgBitRate = t.readUint16(), this.avgFrameRate = t.readUint16()), this.dependency = [];
        for (var i = t.readUint8(), r = 0; r < i; r++) {
          var s = {};
          this.dependency.push(s), s.subSeqDirectionFlag = t.readUint8(), s.layerNumber = t.readUint8(), s.subSequenceIdentifier = t.readUint16()
        }
      }), p.createSampleGroupCtor("dtrt", function(t) {
        a.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed")
      }), p.createSampleGroupCtor("mvif", function(t) {
        a.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed")
      }), p.createSampleGroupCtor("prol", function(t) {
        this.roll_distance = t.readInt16()
      }), p.createSampleGroupCtor("rap ", function(t) {
        var e = t.readUint8();
        this.num_leading_samples_known = e >> 7, this.num_leading_samples = 127 & e
      }), p.createSampleGroupCtor("rash", function(t) {
        if (this.operation_point_count = t.readUint16(), this.description_length !== 2 + (1 === this.operation_point_count ? 2 : 6 * this.operation_point_count) + 9) a.warn("BoxParser", "Mismatch in " + this.grouping_type + " sample group length"), this.data = t.readUint8Array(this.description_length - 2);
        else {
          if (1 === this.operation_point_count) this.target_rate_share = t.readUint16();
          else {
            this.target_rate_share = [], this.available_bitrate = [];
            for (var e = 0; e < this.operation_point_count; e++) this.available_bitrate[e] = t.readUint32(), this.target_rate_share[e] = t.readUint16()
          }
          this.maximum_bitrate = t.readUint32(), this.minimum_bitrate = t.readUint32(), this.discard_priority = t.readUint8()
        }
      }), p.createSampleGroupCtor("roll", function(t) {
        this.roll_distance = t.readInt16()
      }), p.SampleGroupEntry.prototype.parse = function(t) {
        a.warn("BoxParser", "Unknown Sample Group type: " + this.grouping_type), this.data = t.readUint8Array(this.description_length)
      }, p.createSampleGroupCtor("scif", function(t) {
        a.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed")
      }), p.createSampleGroupCtor("scnm", function(t) {
        a.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed")
      }), p.createSampleGroupCtor("seig", function(t) {
        this.reserved = t.readUint8();
        var e = t.readUint8();
        this.crypt_byte_block = e >> 4, this.skip_byte_block = 15 & e, this.isProtected = t.readUint8(), this.Per_Sample_IV_Size = t.readUint8(), this.KID = p.parseHex16(t), this.constant_IV_size = 0, this.constant_IV = 0, 1 === this.isProtected && 0 === this.Per_Sample_IV_Size && (this.constant_IV_size = t.readUint8(), this.constant_IV = t.readUint8Array(this.constant_IV_size))
      }), p.createSampleGroupCtor("stsa", function(t) {
        a.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed")
      }), p.createSampleGroupCtor("sync", function(t) {
        var e = t.readUint8();
        this.NAL_unit_type = 63 & e
      }), p.createSampleGroupCtor("tele", function(t) {
        var e = t.readUint8();
        this.level_independently_decodable = e >> 7
      }), p.createSampleGroupCtor("tsas", function(t) {
        a.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed")
      }), p.createSampleGroupCtor("tscl", function(t) {
        a.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed")
      }), p.createSampleGroupCtor("vipr", function(t) {
        a.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed")
      }), p.createFullBoxCtor("sbgp", function(t) {
        this.grouping_type = t.readString(4), 1 === this.version ? this.grouping_type_parameter = t.readUint32() : this.grouping_type_parameter = 0, this.entries = [];
        for (var e = t.readUint32(), i = 0; i < e; i++) {
          var r = {};
          this.entries.push(r), r.sample_count = t.readInt32(), r.group_description_index = t.readInt32()
        }
      }), p.createFullBoxCtor("schm", function(t) {
        this.scheme_type = t.readString(4), this.scheme_version = t.readUint32(), 1 & this.flags && (this.scheme_uri = t.readString(this.size - this.hdr_size - 8))
      }), p.createBoxCtor("sdp ", function(t) {
        this.sdptext = t.readString(this.size - this.hdr_size)
      }), p.createFullBoxCtor("sdtp", function(t) {
        var e, i = this.size - this.hdr_size;
        this.is_leading = [], this.sample_depends_on = [], this.sample_is_depended_on = [], this.sample_has_redundancy = [];
        for (var r = 0; r < i; r++) e = t.readUint8(), this.is_leading[r] = e >> 6, this.sample_depends_on[r] = e >> 4 & 3, this.sample_is_depended_on[r] = e >> 2 & 3, this.sample_has_redundancy[r] = 3 & e
      }), p.createFullBoxCtor("senc"), p.createFullBoxCtor("sgpd", function(t) {
        this.grouping_type = t.readString(4), a.debug("BoxParser", "Found Sample Groups of type " + this.grouping_type), 1 === this.version ? this.default_length = t.readUint32() : this.default_length = 0, this.version >= 2 && (this.default_group_description_index = t.readUint32()), this.entries = [];
        for (var e, i = t.readUint32(), r = 0; r < i; r++) e = p[this.grouping_type + "SampleGroupEntry"] ? new p[this.grouping_type + "SampleGroupEntry"](this.grouping_type) : new p.SampleGroupEntry(this.grouping_type), this.entries.push(e), 1 === this.version && 0 === this.default_length ? e.description_length = t.readUint32() : e.description_length = this.default_length, e.write === p.SampleGroupEntry.prototype.write && (a.info("BoxParser", "SampleGroup for type " + this.grouping_type + " writing not yet implemented, keeping unparsed data in memory for later write"), e.data = t.readUint8Array(e.description_length), t.position -= e.description_length), e.parse(t)
      }), p.createFullBoxCtor("sidx", function(t) {
        this.reference_ID = t.readUint32(), this.timescale = t.readUint32(), 0 === this.version ? (this.earliest_presentation_time = t.readUint32(), this.first_offset = t.readUint32()) : (this.earliest_presentation_time = t.readUint64(), this.first_offset = t.readUint64()), t.readUint16(), this.references = [];
        for (var e = t.readUint16(), i = 0; i < e; i++) {
          var r = {};
          this.references.push(r);
          var s = t.readUint32();
          r.reference_type = s >> 31 & 1, r.referenced_size = 2147483647 & s, r.subsegment_duration = t.readUint32(), s = t.readUint32(), r.starts_with_SAP = s >> 31 & 1, r.SAP_type = s >> 28 & 7, r.SAP_delta_time = 268435455 & s
        }
      }), p.SingleItemTypeReferenceBox = function(t, e, i, r) {
        p.Box.call(this, t, e), this.hdr_size = i, this.start = r
      }, p.SingleItemTypeReferenceBox.prototype = new p.Box, p.SingleItemTypeReferenceBox.prototype.parse = function(t) {
        this.from_item_ID = t.readUint16();
        var e = t.readUint16();
        this.references = [];
        for (var i = 0; i < e; i++) this.references[i] = t.readUint16()
      }, p.SingleItemTypeReferenceBoxLarge = function(t, e, i, r) {
        p.Box.call(this, t, e), this.hdr_size = i, this.start = r
      }, p.SingleItemTypeReferenceBoxLarge.prototype = new p.Box, p.SingleItemTypeReferenceBoxLarge.prototype.parse = function(t) {
        this.from_item_ID = t.readUint32();
        var e = t.readUint16();
        this.references = [];
        for (var i = 0; i < e; i++) this.references[i] = t.readUint32()
      }, p.createFullBoxCtor("SmDm", function(t) {
        this.primaryRChromaticity_x = t.readUint16(), this.primaryRChromaticity_y = t.readUint16(), this.primaryGChromaticity_x = t.readUint16(), this.primaryGChromaticity_y = t.readUint16(), this.primaryBChromaticity_x = t.readUint16(), this.primaryBChromaticity_y = t.readUint16(), this.whitePointChromaticity_x = t.readUint16(), this.whitePointChromaticity_y = t.readUint16(), this.luminanceMax = t.readUint32(), this.luminanceMin = t.readUint32()
      }), p.createFullBoxCtor("smhd", function(t) {
        this.balance = t.readUint16(), t.readUint16()
      }), p.createFullBoxCtor("ssix", function(t) {
        this.subsegments = [];
        for (var e = t.readUint32(), i = 0; i < e; i++) {
          var r = {};
          this.subsegments.push(r), r.ranges = [];
          for (var s = t.readUint32(), n = 0; n < s; n++) {
            var a = {};
            r.ranges.push(a), a.level = t.readUint8(), a.range_size = t.readUint24()
          }
        }
      }), p.createFullBoxCtor("stco", function(t) {
        var e;
        if (e = t.readUint32(), this.chunk_offsets = [], 0 === this.version)
          for (var i = 0; i < e; i++) this.chunk_offsets.push(t.readUint32())
      }), p.createFullBoxCtor("stdp", function(t) {
        var e = (this.size - this.hdr_size) / 2;
        this.priority = [];
        for (var i = 0; i < e; i++) this.priority[i] = t.readUint16()
      }), p.createFullBoxCtor("sthd"), p.createFullBoxCtor("stri", function(t) {
        this.switch_group = t.readUint16(), this.alternate_group = t.readUint16(), this.sub_track_id = t.readUint32();
        var e = (this.size - this.hdr_size - 8) / 4;
        this.attribute_list = [];
        for (var i = 0; i < e; i++) this.attribute_list[i] = t.readUint32()
      }), p.createFullBoxCtor("stsc", function(t) {
        var e, i;
        if (e = t.readUint32(), this.first_chunk = [], this.samples_per_chunk = [], this.sample_description_index = [], 0 === this.version)
          for (i = 0; i < e; i++) this.first_chunk.push(t.readUint32()), this.samples_per_chunk.push(t.readUint32()), this.sample_description_index.push(t.readUint32())
      }), p.createFullBoxCtor("stsd", function(t) {
        var e, i, r, s;
        for (e = 1, this.entries = [], r = t.readUint32(); e <= r; e++) {
          if ((i = p.parseOneBox(t, !0, this.size - (t.getPosition() - this.start))).code !== p.OK) return;
          p[i.type + "SampleEntry"] ? ((s = new p[i.type + "SampleEntry"](i.size)).hdr_size = i.hdr_size, s.start = i.start) : (a.warn("BoxParser", "Unknown sample entry type: " + i.type), s = new p.SampleEntry(i.type, i.size, i.hdr_size, i.start)), s.write === p.SampleEntry.prototype.write && (a.info("BoxParser", "SampleEntry " + s.type + " box writing not yet implemented, keeping unparsed data in memory for later write"), s.parseDataAndRewind(t)), s.parse(t), this.entries.push(s)
        }
      }), p.createFullBoxCtor("stsg", function(t) {
        this.grouping_type = t.readUint32();
        var e = t.readUint16();
        this.group_description_index = [];
        for (var i = 0; i < e; i++) this.group_description_index[i] = t.readUint32()
      }), p.createFullBoxCtor("stsh", function(t) {
        var e, i;
        if (e = t.readUint32(), this.shadowed_sample_numbers = [], this.sync_sample_numbers = [], 0 === this.version)
          for (i = 0; i < e; i++) this.shadowed_sample_numbers.push(t.readUint32()), this.sync_sample_numbers.push(t.readUint32())
      }), p.createFullBoxCtor("stss", function(t) {
        var e, i;
        if (i = t.readUint32(), 0 === this.version)
          for (e = 0, this.sample_numbers = []; e < i; e++) this.sample_numbers.push(t.readUint32())
      }), p.createFullBoxCtor("stsz", function(t) {
        var e;
        if (this.sample_sizes = [], 0 === this.version)
          for (e = 0, this.sample_size = t.readUint32(), this.sample_count = t.readUint32(); e < this.sample_count; e++) 0 === this.sample_size ? this.sample_sizes.push(t.readUint32()) : this.sample_sizes[e] = this.sample_size
      }), p.createFullBoxCtor("stts", function(t) {
        var e, i, r;
        if (e = t.readUint32(), this.sample_counts = [], this.sample_deltas = [], 0 === this.version)
          for (i = 0; i < e; i++) this.sample_counts.push(t.readUint32()), (r = t.readInt32()) < 0 && (a.warn("BoxParser", "File uses negative stts sample delta, using value 1 instead, sync may be lost!"), r = 1), this.sample_deltas.push(r)
      }), p.createFullBoxCtor("stvi", function(t) {
        var e, i, r = t.readUint32();
        this.single_view_allowed = 3 & r, this.stereo_scheme = t.readUint32();
        var s = t.readUint32();
        for (this.stereo_indication_type = t.readString(s), this.boxes = []; t.getPosition() < this.start + this.size;) {
          if ((e = p.parseOneBox(t, !1, this.size - (t.getPosition() - this.start))).code !== p.OK) return;
          i = e.box, this.boxes.push(i), this[i.type] = i
        }
      }), p.createBoxCtor("styp", function(t) {
        p.ftypBox.prototype.parse.call(this, t)
      }), p.createFullBoxCtor("stz2", function(t) {
        if (this.sample_sizes = [], 0 === this.version) {
          if (this.reserved = t.readUint24(), this.field_size = t.readUint8(), i = t.readUint32(), 4 === this.field_size)
            for (e = 0; e < i; e += 2) {
              var e, i, r = t.readUint8();
              this.sample_sizes[e] = r >> 4 & 15, this.sample_sizes[e + 1] = 15 & r
            } else if (8 === this.field_size)
              for (e = 0; e < i; e++) this.sample_sizes[e] = t.readUint8();
            else if (16 === this.field_size)
            for (e = 0; e < i; e++) this.sample_sizes[e] = t.readUint16();
          else a.error("BoxParser", "Error in length field in stz2 box")
        }
      }), p.createFullBoxCtor("subs", function(t) {
        for (e = 0, r = t.readUint32(), this.entries = []; e < r; e++) {
          var e, i, r, s, n = {};
          if (this.entries[e] = n, n.sample_delta = t.readUint32(), n.subsamples = [], (s = t.readUint16()) > 0)
            for (i = 0; i < s; i++) {
              var a = {};
              n.subsamples.push(a), 1 == this.version ? a.size = t.readUint32() : a.size = t.readUint16(), a.priority = t.readUint8(), a.discardable = t.readUint8(), a.codec_specific_parameters = t.readUint32()
            }
        }
      }), p.createFullBoxCtor("tenc", function(t) {
        if (t.readUint8(), 0 === this.version) t.readUint8();
        else {
          var e = t.readUint8();
          this.default_crypt_byte_block = e >> 4 & 15, this.default_skip_byte_block = 15 & e
        }
        this.default_isProtected = t.readUint8(), this.default_Per_Sample_IV_Size = t.readUint8(), this.default_KID = p.parseHex16(t), 1 === this.default_isProtected && 0 === this.default_Per_Sample_IV_Size && (this.default_constant_IV_size = t.readUint8(), this.default_constant_IV = t.readUint8Array(this.default_constant_IV_size))
      }), p.createFullBoxCtor("tfdt", function(t) {
        1 == this.version ? this.baseMediaDecodeTime = t.readUint64() : this.baseMediaDecodeTime = t.readUint32()
      }), p.createFullBoxCtor("tfhd", function(t) {
        var e = 0;
        this.track_id = t.readUint32(), this.size - this.hdr_size > e && this.flags & p.TFHD_FLAG_BASE_DATA_OFFSET ? (this.base_data_offset = t.readUint64(), e += 8) : this.base_data_offset = 0, this.size - this.hdr_size > e && this.flags & p.TFHD_FLAG_SAMPLE_DESC ? (this.default_sample_description_index = t.readUint32(), e += 4) : this.default_sample_description_index = 0, this.size - this.hdr_size > e && this.flags & p.TFHD_FLAG_SAMPLE_DUR ? (this.default_sample_duration = t.readUint32(), e += 4) : this.default_sample_duration = 0, this.size - this.hdr_size > e && this.flags & p.TFHD_FLAG_SAMPLE_SIZE ? (this.default_sample_size = t.readUint32(), e += 4) : this.default_sample_size = 0, this.size - this.hdr_size > e && this.flags & p.TFHD_FLAG_SAMPLE_FLAGS ? (this.default_sample_flags = t.readUint32(), e += 4) : this.default_sample_flags = 0
      }), p.createFullBoxCtor("tfra", function(t) {
        this.track_ID = t.readUint32(), t.readUint24();
        var e = t.readUint8();
        this.length_size_of_traf_num = e >> 4 & 3, this.length_size_of_trun_num = e >> 2 & 3, this.length_size_of_sample_num = 3 & e, this.entries = [];
        for (var i = t.readUint32(), r = 0; r < i; r++) 1 === this.version ? (this.time = t.readUint64(), this.moof_offset = t.readUint64()) : (this.time = t.readUint32(), this.moof_offset = t.readUint32()), this.traf_number = t["readUint" + 8 * (this.length_size_of_traf_num + 1)](), this.trun_number = t["readUint" + 8 * (this.length_size_of_trun_num + 1)](), this.sample_number = t["readUint" + 8 * (this.length_size_of_sample_num + 1)]()
      }), p.createFullBoxCtor("tkhd", function(t) {
        1 == this.version ? (this.creation_time = t.readUint64(), this.modification_time = t.readUint64(), this.track_id = t.readUint32(), t.readUint32(), this.duration = t.readUint64()) : (this.creation_time = t.readUint32(), this.modification_time = t.readUint32(), this.track_id = t.readUint32(), t.readUint32(), this.duration = t.readUint32()), t.readUint32Array(2), this.layer = t.readInt16(), this.alternate_group = t.readInt16(), this.volume = t.readInt16() >> 8, t.readUint16(), this.matrix = t.readInt32Array(9), this.width = t.readUint32(), this.height = t.readUint32()
      }), p.createBoxCtor("tmax", function(t) {
        this.time = t.readUint32()
      }), p.createBoxCtor("tmin", function(t) {
        this.time = t.readUint32()
      }), p.createBoxCtor("totl", function(t) {
        this.bytessent = t.readUint32()
      }), p.createBoxCtor("tpay", function(t) {
        this.bytessent = t.readUint32()
      }), p.createBoxCtor("tpyl", function(t) {
        this.bytessent = t.readUint64()
      }), p.TrackGroupTypeBox.prototype.parse = function(t) {
        this.parseFullHeader(t), this.track_group_id = t.readUint32()
      }, p.createTrackGroupCtor("msrc"), p.TrackReferenceTypeBox = function(t, e, i, r) {
        p.Box.call(this, t, e), this.hdr_size = i, this.start = r
      }, p.TrackReferenceTypeBox.prototype = new p.Box, p.TrackReferenceTypeBox.prototype.parse = function(t) {
        this.track_ids = t.readUint32Array((this.size - this.hdr_size) / 4)
      }, p.trefBox.prototype.parse = function(t) {
        for (var e, i; t.getPosition() < this.start + this.size;) {
          if ((e = p.parseOneBox(t, !0, this.size - (t.getPosition() - this.start))).code !== p.OK) return;
          (i = new p.TrackReferenceTypeBox(e.type, e.size, e.hdr_size, e.start)).write === p.Box.prototype.write && "mdat" !== i.type && (a.info("BoxParser", "TrackReference " + i.type + " box writing not yet implemented, keeping unparsed data in memory for later write"), i.parseDataAndRewind(t)), i.parse(t), this.boxes.push(i)
        }
      }, p.createFullBoxCtor("trep", function(t) {
        for (this.track_ID = t.readUint32(), this.boxes = []; t.getPosition() < this.start + this.size;) {
          if ((ret = p.parseOneBox(t, !1, this.size - (t.getPosition() - this.start))).code !== p.OK) return;
          box = ret.box, this.boxes.push(box)
        }
      }), p.createFullBoxCtor("trex", function(t) {
        this.track_id = t.readUint32(), this.default_sample_description_index = t.readUint32(), this.default_sample_duration = t.readUint32(), this.default_sample_size = t.readUint32(), this.default_sample_flags = t.readUint32()
      }), p.createBoxCtor("trpy", function(t) {
        this.bytessent = t.readUint64()
      }), p.createFullBoxCtor("trun", function(t) {
        var e = 0;
        if (this.sample_count = t.readUint32(), e += 4, this.size - this.hdr_size > e && this.flags & p.TRUN_FLAGS_DATA_OFFSET ? (this.data_offset = t.readInt32(), e += 4) : this.data_offset = 0, this.size - this.hdr_size > e && this.flags & p.TRUN_FLAGS_FIRST_FLAG ? (this.first_sample_flags = t.readUint32(), e += 4) : this.first_sample_flags = 0, this.sample_duration = [], this.sample_size = [], this.sample_flags = [], this.sample_composition_time_offset = [], this.size - this.hdr_size > e)
          for (var i = 0; i < this.sample_count; i++) this.flags & p.TRUN_FLAGS_DURATION && (this.sample_duration[i] = t.readUint32()), this.flags & p.TRUN_FLAGS_SIZE && (this.sample_size[i] = t.readUint32()), this.flags & p.TRUN_FLAGS_FLAGS && (this.sample_flags[i] = t.readUint32()), this.flags & p.TRUN_FLAGS_CTS_OFFSET && (0 === this.version ? this.sample_composition_time_offset[i] = t.readUint32() : this.sample_composition_time_offset[i] = t.readInt32())
      }), p.createFullBoxCtor("tsel", function(t) {
        this.switch_group = t.readUint32();
        var e = (this.size - this.hdr_size - 4) / 4;
        this.attribute_list = [];
        for (var i = 0; i < e; i++) this.attribute_list[i] = t.readUint32()
      }), p.createFullBoxCtor("txtC", function(t) {
        this.config = t.readCString()
      }), p.createFullBoxCtor("url ", function(t) {
        1 !== this.flags && (this.location = t.readCString())
      }), p.createFullBoxCtor("urn ", function(t) {
        this.name = t.readCString(), this.size - this.hdr_size - this.name.length - 1 > 0 && (this.location = t.readCString())
      }), p.createUUIDBox("a5d40b30e81411ddba2f0800200c9a66", !0, !1, function(t) {
        this.LiveServerManifest = t.readString(this.size - this.hdr_size).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
      }), p.createUUIDBox("d08a4f1810f34a82b6c832d8aba183d3", !0, !1, function(t) {
        this.system_id = p.parseHex16(t);
        var e = t.readUint32();
        e > 0 && (this.data = t.readUint8Array(e))
      }), p.createUUIDBox("a2394f525a9b4f14a2446c427c648df4", !0, !1), p.createUUIDBox("8974dbce7be74c5184f97148f9882554", !0, !1, function(t) {
        this.default_AlgorithmID = t.readUint24(), this.default_IV_size = t.readUint8(), this.default_KID = p.parseHex16(t)
      }), p.createUUIDBox("d4807ef2ca3946958e5426cb9e46a79f", !0, !1, function(t) {
        this.fragment_count = t.readUint8(), this.entries = [];
        for (var e = 0; e < this.fragment_count; e++) {
          var i = {},
            r = 0,
            s = 0;
          1 === this.version ? (r = t.readUint64(), s = t.readUint64()) : (r = t.readUint32(), s = t.readUint32()), i.absolute_time = r, i.absolute_duration = s, this.entries.push(i)
        }
      }), p.createUUIDBox("6d1d9b0542d544e680e2141daff757b2", !0, !1, function(t) {
        1 === this.version ? (this.absolute_time = t.readUint64(), this.duration = t.readUint64()) : (this.absolute_time = t.readUint32(), this.duration = t.readUint32())
      }), p.createFullBoxCtor("vmhd", function(t) {
        this.graphicsmode = t.readUint16(), this.opcolor = t.readUint16Array(3)
      }), p.createFullBoxCtor("vpcC", function(t) {
        var e;
        1 === this.version ? (this.profile = t.readUint8(), this.level = t.readUint8(), e = t.readUint8(), this.bitDepth = e >> 4, this.chromaSubsampling = e >> 1 & 7, this.videoFullRangeFlag = 1 & e, this.colourPrimaries = t.readUint8(), this.transferCharacteristics = t.readUint8(), this.matrixCoefficients = t.readUint8()) : (this.profile = t.readUint8(), this.level = t.readUint8(), e = t.readUint8(), this.bitDepth = e >> 4 & 15, this.colorSpace = 15 & e, e = t.readUint8(), this.chromaSubsampling = e >> 4 & 15, this.transferFunction = e >> 1 & 7, this.videoFullRangeFlag = 1 & e), this.codecIntializationDataSize = t.readUint16(), this.codecIntializationData = t.readUint8Array(this.codecIntializationDataSize)
      }), p.createBoxCtor("vttC", function(t) {
        this.text = t.readString(this.size - this.hdr_size)
      }), p.SampleEntry.prototype.isVideo = function() {
        return !1
      }, p.SampleEntry.prototype.isAudio = function() {
        return !1
      }, p.SampleEntry.prototype.isSubtitle = function() {
        return !1
      }, p.SampleEntry.prototype.isMetadata = function() {
        return !1
      }, p.SampleEntry.prototype.isHint = function() {
        return !1
      }, p.SampleEntry.prototype.getCodec = function() {
        return this.type.replace(".", "")
      }, p.SampleEntry.prototype.getWidth = function() {
        return ""
      }, p.SampleEntry.prototype.getHeight = function() {
        return ""
      }, p.SampleEntry.prototype.getChannelCount = function() {
        return ""
      }, p.SampleEntry.prototype.getSampleRate = function() {
        return ""
      }, p.SampleEntry.prototype.getSampleSize = function() {
        return ""
      }, p.VisualSampleEntry.prototype.isVideo = function() {
        return !0
      }, p.VisualSampleEntry.prototype.getWidth = function() {
        return this.width
      }, p.VisualSampleEntry.prototype.getHeight = function() {
        return this.height
      }, p.AudioSampleEntry.prototype.isAudio = function() {
        return !0
      }, p.AudioSampleEntry.prototype.getChannelCount = function() {
        return this.channel_count
      }, p.AudioSampleEntry.prototype.getSampleRate = function() {
        return this.samplerate
      }, p.AudioSampleEntry.prototype.getSampleSize = function() {
        return this.samplesize
      }, p.SubtitleSampleEntry.prototype.isSubtitle = function() {
        return !0
      }, p.MetadataSampleEntry.prototype.isMetadata = function() {
        return !0
      }, p.decimalToHex = function(t, e) {
        var i = Number(t).toString(16);
        for (e = null == e ? e = 2 : e; i.length < e;) i = "0" + i;
        return i
      }, p.avc1SampleEntry.prototype.getCodec = p.avc2SampleEntry.prototype.getCodec = p.avc3SampleEntry.prototype.getCodec = p.avc4SampleEntry.prototype.getCodec = function() {
        var t = p.SampleEntry.prototype.getCodec.call(this);
        return this.avcC ? t + "." + p.decimalToHex(this.avcC.AVCProfileIndication) + p.decimalToHex(this.avcC.profile_compatibility) + p.decimalToHex(this.avcC.AVCLevelIndication) : t
      }, p.hev1SampleEntry.prototype.getCodec = p.hvc1SampleEntry.prototype.getCodec = function() {
        var t, e = p.SampleEntry.prototype.getCodec.call(this);
        if (this.hvcC) {
          switch (e += ".", this.hvcC.general_profile_space) {
            case 0:
              e += "";
              break;
            case 1:
              e += "A";
              break;
            case 2:
              e += "B";
              break;
            case 3:
              e += "C"
          }
          e += this.hvcC.general_profile_idc + ".";
          var i = this.hvcC.general_profile_compatibility,
            r = 0;
          for (t = 0; t < 32 && (r |= 1 & i, 31 != t); t++) r <<= 1, i >>= 1;
          e += p.decimalToHex(r, 0) + ".", 0 === this.hvcC.general_tier_flag ? e += "L" : e += "H", e += this.hvcC.general_level_idc;
          var s = !1,
            n = "";
          for (t = 5; t >= 0; t--)(this.hvcC.general_constraint_indicator[t] || s) && (n = "." + p.decimalToHex(this.hvcC.general_constraint_indicator[t], 0) + n, s = !0);
          e += n
        }
        return e
      }, p.mp4aSampleEntry.prototype.getCodec = function() {
        var t = p.SampleEntry.prototype.getCodec.call(this);
        if (!this.esds || !this.esds.esd) return t;
        var e = this.esds.esd.getOTI(),
          i = this.esds.esd.getAudioConfig();
        return t + "." + p.decimalToHex(e) + (i ? "." + i : "")
      }, p.stxtSampleEntry.prototype.getCodec = function() {
        var t = p.SampleEntry.prototype.getCodec.call(this);
        return this.mime_format ? t + "." + this.mime_format : t
      }, p.av01SampleEntry.prototype.getCodec = function() {
        var t, e = p.SampleEntry.prototype.getCodec.call(this);
        return 2 === this.av1C.seq_profile && 1 === this.av1C.high_bitdepth ? t = 1 === this.av1C.twelve_bit ? "12" : "10" : this.av1C.seq_profile <= 2 && (t = 1 === this.av1C.high_bitdepth ? "10" : "08"), e + "." + this.av1C.seq_profile + "." + this.av1C.seq_level_idx_0 + (this.av1C.seq_tier_0 ? "H" : "M") + "." + t
      }, p.Box.prototype.writeHeader = function(t, e) {
        this.size += 8, this.size > 4294967296 && (this.size += 8), "uuid" === this.type && (this.size += 16), a.debug("BoxWriter", "Writing box " + this.type + " of size: " + this.size + " at position " + t.getPosition() + (e || "")), this.size > 4294967296 ? t.writeUint32(1) : (this.sizePosition = t.getPosition(), t.writeUint32(this.size)), t.writeString(this.type, null, 4), "uuid" === this.type && t.writeUint8Array(this.uuid), this.size > 4294967296 && t.writeUint64(this.size)
      }, p.FullBox.prototype.writeHeader = function(t) {
        this.size += 4, p.Box.prototype.writeHeader.call(this, t, " v=" + this.version + " f=" + this.flags), t.writeUint8(this.version), t.writeUint24(this.flags)
      }, p.Box.prototype.write = function(t) {
        "mdat" === this.type ? this.data && (this.size = this.data.length, this.writeHeader(t), t.writeUint8Array(this.data)) : (this.size = this.data ? this.data.length : 0, this.writeHeader(t), this.data && t.writeUint8Array(this.data))
      }, p.ContainerBox.prototype.write = function(t) {
        this.size = 0, this.writeHeader(t);
        for (var e = 0; e < this.boxes.length; e++) this.boxes[e] && (this.boxes[e].write(t), this.size += this.boxes[e].size);
        a.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size), t.adjustUint32(this.sizePosition, this.size)
      }, p.TrackReferenceTypeBox.prototype.write = function(t) {
        this.size = 4 * this.track_ids.length, this.writeHeader(t), t.writeUint32Array(this.track_ids)
      }, p.avcCBox.prototype.write = function(t) {
        var e;
        for (e = 0, this.size = 7; e < this.SPS.length; e++) this.size += 2 + this.SPS[e].length;
        for (e = 0; e < this.PPS.length; e++) this.size += 2 + this.PPS[e].length;
        for (this.ext && (this.size += this.ext.length), this.writeHeader(t), t.writeUint8(this.configurationVersion), t.writeUint8(this.AVCProfileIndication), t.writeUint8(this.profile_compatibility), t.writeUint8(this.AVCLevelIndication), t.writeUint8(this.lengthSizeMinusOne + 252), t.writeUint8(this.SPS.length + 224), e = 0; e < this.SPS.length; e++) t.writeUint16(this.SPS[e].length), t.writeUint8Array(this.SPS[e].nalu);
        for (t.writeUint8(this.PPS.length), e = 0; e < this.PPS.length; e++) t.writeUint16(this.PPS[e].length), t.writeUint8Array(this.PPS[e].nalu);
        this.ext && t.writeUint8Array(this.ext)
      }, p.co64Box.prototype.write = function(t) {
        var e;
        for (this.version = 0, this.flags = 0, this.size = 4 + 8 * this.chunk_offsets.length, this.writeHeader(t), t.writeUint32(this.chunk_offsets.length), e = 0; e < this.chunk_offsets.length; e++) t.writeUint64(this.chunk_offsets[e])
      }, p.cslgBox.prototype.write = function(t) {
        this.version = 0, this.flags = 0, this.size = 20, this.writeHeader(t), t.writeInt32(this.compositionToDTSShift), t.writeInt32(this.leastDecodeToDisplayDelta), t.writeInt32(this.greatestDecodeToDisplayDelta), t.writeInt32(this.compositionStartTime), t.writeInt32(this.compositionEndTime)
      }, p.cttsBox.prototype.write = function(t) {
        var e;
        for (this.version = 0, this.flags = 0, this.size = 4 + 8 * this.sample_counts.length, this.writeHeader(t), t.writeUint32(this.sample_counts.length), e = 0; e < this.sample_counts.length; e++) t.writeUint32(this.sample_counts[e]), 1 === this.version ? t.writeInt32(this.sample_offsets[e]) : t.writeUint32(this.sample_offsets[e])
      }, p.drefBox.prototype.write = function(t) {
        this.version = 0, this.flags = 0, this.size = 4, this.writeHeader(t), t.writeUint32(this.entries.length);
        for (var e = 0; e < this.entries.length; e++) this.entries[e].write(t), this.size += this.entries[e].size;
        a.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size), t.adjustUint32(this.sizePosition, this.size)
      }, p.elngBox.prototype.write = function(t) {
        this.version = 0, this.flags = 0, this.size = this.extended_language.length, this.writeHeader(t), t.writeString(this.extended_language)
      }, p.elstBox.prototype.write = function(t) {
        this.version = 0, this.flags = 0, this.size = 4 + 12 * this.entries.length, this.writeHeader(t), t.writeUint32(this.entries.length);
        for (var e = 0; e < this.entries.length; e++) {
          var i = this.entries[e];
          t.writeUint32(i.segment_duration), t.writeInt32(i.media_time), t.writeInt16(i.media_rate_integer), t.writeInt16(i.media_rate_fraction)
        }
      }, p.emsgBox.prototype.write = function(t) {
        this.version = 0, this.flags = 0, this.size = 16 + this.message_data.length + (this.scheme_id_uri.length + 1) + (this.value.length + 1), this.writeHeader(t), t.writeCString(this.scheme_id_uri), t.writeCString(this.value), t.writeUint32(this.timescale), t.writeUint32(this.presentation_time_delta), t.writeUint32(this.event_duration), t.writeUint32(this.id), t.writeUint8Array(this.message_data)
      }, p.ftypBox.prototype.write = function(t) {
        this.size = 8 + 4 * this.compatible_brands.length, this.writeHeader(t), t.writeString(this.major_brand, null, 4), t.writeUint32(this.minor_version);
        for (var e = 0; e < this.compatible_brands.length; e++) t.writeString(this.compatible_brands[e], null, 4)
      }, p.hdlrBox.prototype.write = function(t) {
        this.size = 20 + this.name.length + 1, this.version = 0, this.flags = 0, this.writeHeader(t), t.writeUint32(0), t.writeString(this.handler, null, 4), t.writeUint32(0), t.writeUint32(0), t.writeUint32(0), t.writeCString(this.name)
      }, p.kindBox.prototype.write = function(t) {
        this.version = 0, this.flags = 0, this.size = this.schemeURI.length + 1 + (this.value.length + 1), this.writeHeader(t), t.writeCString(this.schemeURI), t.writeCString(this.value)
      }, p.mdhdBox.prototype.write = function(t) {
        this.size = 20, this.flags = 0, this.version = 0, this.writeHeader(t), t.writeUint32(this.creation_time), t.writeUint32(this.modification_time), t.writeUint32(this.timescale), t.writeUint32(this.duration), t.writeUint16(this.language), t.writeUint16(0)
      }, p.mehdBox.prototype.write = function(t) {
        this.version = 0, this.flags = 0, this.size = 4, this.writeHeader(t), t.writeUint32(this.fragment_duration)
      }, p.mfhdBox.prototype.write = function(t) {
        this.version = 0, this.flags = 0, this.size = 4, this.writeHeader(t), t.writeUint32(this.sequence_number)
      }, p.mvhdBox.prototype.write = function(t) {
        this.version = 0, this.flags = 0, this.size = 96, this.writeHeader(t), t.writeUint32(this.creation_time), t.writeUint32(this.modification_time), t.writeUint32(this.timescale), t.writeUint32(this.duration), t.writeUint32(this.rate), t.writeUint16(this.volume << 8), t.writeUint16(0), t.writeUint32(0), t.writeUint32(0), t.writeUint32Array(this.matrix), t.writeUint32(0), t.writeUint32(0), t.writeUint32(0), t.writeUint32(0), t.writeUint32(0), t.writeUint32(0), t.writeUint32(this.next_track_id)
      }, p.SampleEntry.prototype.writeHeader = function(t) {
        this.size = 8, p.Box.prototype.writeHeader.call(this, t), t.writeUint8(0), t.writeUint8(0), t.writeUint8(0), t.writeUint8(0), t.writeUint8(0), t.writeUint8(0), t.writeUint16(this.data_reference_index)
      }, p.SampleEntry.prototype.writeFooter = function(t) {
        for (var e = 0; e < this.boxes.length; e++) this.boxes[e].write(t), this.size += this.boxes[e].size;
        a.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size), t.adjustUint32(this.sizePosition, this.size)
      }, p.SampleEntry.prototype.write = function(t) {
        this.writeHeader(t), t.writeUint8Array(this.data), this.size += this.data.length, a.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size), t.adjustUint32(this.sizePosition, this.size)
      }, p.VisualSampleEntry.prototype.write = function(t) {
        this.writeHeader(t), this.size += 70, t.writeUint16(0), t.writeUint16(0), t.writeUint32(0), t.writeUint32(0), t.writeUint32(0), t.writeUint16(this.width), t.writeUint16(this.height), t.writeUint32(this.horizresolution), t.writeUint32(this.vertresolution), t.writeUint32(0), t.writeUint16(this.frame_count), t.writeUint8(Math.min(31, this.compressorname.length)), t.writeString(this.compressorname, null, 31), t.writeUint16(this.depth), t.writeInt16(-1), this.writeFooter(t)
      }, p.AudioSampleEntry.prototype.write = function(t) {
        this.writeHeader(t), this.size += 20, t.writeUint32(0), t.writeUint32(0), t.writeUint16(this.channel_count), t.writeUint16(this.samplesize), t.writeUint16(0), t.writeUint16(0), t.writeUint32(this.samplerate << 16), this.writeFooter(t)
      }, p.stppSampleEntry.prototype.write = function(t) {
        this.writeHeader(t), this.size += this.namespace.length + 1 + this.schema_location.length + 1 + this.auxiliary_mime_types.length + 1, t.writeCString(this.namespace), t.writeCString(this.schema_location), t.writeCString(this.auxiliary_mime_types), this.writeFooter(t)
      }, p.SampleGroupEntry.prototype.write = function(t) {
        t.writeUint8Array(this.data)
      }, p.sbgpBox.prototype.write = function(t) {
        this.version = 1, this.flags = 0, this.size = 12 + 8 * this.entries.length, this.writeHeader(t), t.writeString(this.grouping_type, null, 4), t.writeUint32(this.grouping_type_parameter), t.writeUint32(this.entries.length);
        for (var e = 0; e < this.entries.length; e++) {
          var i = this.entries[e];
          t.writeInt32(i.sample_count), t.writeInt32(i.group_description_index)
        }
      }, p.sgpdBox.prototype.write = function(t) {
        var e, i;
        for (e = 0, this.flags = 0, this.size = 12; e < this.entries.length; e++) i = this.entries[e], 1 === this.version && (0 === this.default_length && (this.size += 4), this.size += i.data.length);
        for (this.writeHeader(t), t.writeString(this.grouping_type, null, 4), 1 === this.version && t.writeUint32(this.default_length), this.version >= 2 && t.writeUint32(this.default_sample_description_index), t.writeUint32(this.entries.length), e = 0; e < this.entries.length; e++) i = this.entries[e], 1 === this.version && 0 === this.default_length && t.writeUint32(i.description_length), i.write(t)
      }, p.sidxBox.prototype.write = function(t) {
        this.version = 0, this.flags = 0, this.size = 20 + 12 * this.references.length, this.writeHeader(t), t.writeUint32(this.reference_ID), t.writeUint32(this.timescale), t.writeUint32(this.earliest_presentation_time), t.writeUint32(this.first_offset), t.writeUint16(0), t.writeUint16(this.references.length);
        for (var e = 0; e < this.references.length; e++) {
          var i = this.references[e];
          t.writeUint32(i.reference_type << 31 | i.referenced_size), t.writeUint32(i.subsegment_duration), t.writeUint32(i.starts_with_SAP << 31 | i.SAP_type << 28 | i.SAP_delta_time)
        }
      }, p.stcoBox.prototype.write = function(t) {
        this.version = 0, this.flags = 0, this.size = 4 + 4 * this.chunk_offsets.length, this.writeHeader(t), t.writeUint32(this.chunk_offsets.length), t.writeUint32Array(this.chunk_offsets)
      }, p.stscBox.prototype.write = function(t) {
        var e;
        for (this.version = 0, this.flags = 0, this.size = 4 + 12 * this.first_chunk.length, this.writeHeader(t), t.writeUint32(this.first_chunk.length), e = 0; e < this.first_chunk.length; e++) t.writeUint32(this.first_chunk[e]), t.writeUint32(this.samples_per_chunk[e]), t.writeUint32(this.sample_description_index[e])
      }, p.stsdBox.prototype.write = function(t) {
        var e;
        for (this.version = 0, this.flags = 0, this.size = 0, this.writeHeader(t), t.writeUint32(this.entries.length), this.size += 4, e = 0; e < this.entries.length; e++) this.entries[e].write(t), this.size += this.entries[e].size;
        a.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size), t.adjustUint32(this.sizePosition, this.size)
      }, p.stshBox.prototype.write = function(t) {
        var e;
        for (this.version = 0, this.flags = 0, this.size = 4 + 8 * this.shadowed_sample_numbers.length, this.writeHeader(t), t.writeUint32(this.shadowed_sample_numbers.length), e = 0; e < this.shadowed_sample_numbers.length; e++) t.writeUint32(this.shadowed_sample_numbers[e]), t.writeUint32(this.sync_sample_numbers[e])
      }, p.stssBox.prototype.write = function(t) {
        this.version = 0, this.flags = 0, this.size = 4 + 4 * this.sample_numbers.length, this.writeHeader(t), t.writeUint32(this.sample_numbers.length), t.writeUint32Array(this.sample_numbers)
      }, p.stszBox.prototype.write = function(t) {
        var e, i = !0;
        if (this.version = 0, this.flags = 0, this.sample_sizes.length > 0)
          for (e = 0; e + 1 < this.sample_sizes.length;) {
            if (this.sample_sizes[e + 1] !== this.sample_sizes[0]) {
              i = !1;
              break
            }
            e++
          } else i = !1;
        this.size = 8, i || (this.size += 4 * this.sample_sizes.length), this.writeHeader(t), i ? t.writeUint32(this.sample_sizes[0]) : t.writeUint32(0), t.writeUint32(this.sample_sizes.length), i || t.writeUint32Array(this.sample_sizes)
      }, p.sttsBox.prototype.write = function(t) {
        var e;
        for (this.version = 0, this.flags = 0, this.size = 4 + 8 * this.sample_counts.length, this.writeHeader(t), t.writeUint32(this.sample_counts.length), e = 0; e < this.sample_counts.length; e++) t.writeUint32(this.sample_counts[e]), t.writeUint32(this.sample_deltas[e])
      }, p.tfdtBox.prototype.write = function(t) {
        this.version = this.baseMediaDecodeTime > 4294967295 ? 1 : 0, this.flags = 0, this.size = 4, 1 === this.version && (this.size += 4), this.writeHeader(t), 1 === this.version ? t.writeUint64(this.baseMediaDecodeTime) : t.writeUint32(this.baseMediaDecodeTime)
      }, p.tfhdBox.prototype.write = function(t) {
        this.version = 0, this.size = 4, this.flags & p.TFHD_FLAG_BASE_DATA_OFFSET && (this.size += 8), this.flags & p.TFHD_FLAG_SAMPLE_DESC && (this.size += 4), this.flags & p.TFHD_FLAG_SAMPLE_DUR && (this.size += 4), this.flags & p.TFHD_FLAG_SAMPLE_SIZE && (this.size += 4), this.flags & p.TFHD_FLAG_SAMPLE_FLAGS && (this.size += 4), this.writeHeader(t), t.writeUint32(this.track_id), this.flags & p.TFHD_FLAG_BASE_DATA_OFFSET && t.writeUint64(this.base_data_offset), this.flags & p.TFHD_FLAG_SAMPLE_DESC && t.writeUint32(this.default_sample_description_index), this.flags & p.TFHD_FLAG_SAMPLE_DUR && t.writeUint32(this.default_sample_duration), this.flags & p.TFHD_FLAG_SAMPLE_SIZE && t.writeUint32(this.default_sample_size), this.flags & p.TFHD_FLAG_SAMPLE_FLAGS && t.writeUint32(this.default_sample_flags)
      }, p.tkhdBox.prototype.write = function(t) {
        this.version = 0, this.size = 80, this.writeHeader(t), t.writeUint32(this.creation_time), t.writeUint32(this.modification_time), t.writeUint32(this.track_id), t.writeUint32(0), t.writeUint32(this.duration), t.writeUint32(0), t.writeUint32(0), t.writeInt16(this.layer), t.writeInt16(this.alternate_group), t.writeInt16(this.volume << 8), t.writeUint16(0), t.writeInt32Array(this.matrix), t.writeUint32(this.width), t.writeUint32(this.height)
      }, p.trexBox.prototype.write = function(t) {
        this.version = 0, this.flags = 0, this.size = 20, this.writeHeader(t), t.writeUint32(this.track_id), t.writeUint32(this.default_sample_description_index), t.writeUint32(this.default_sample_duration), t.writeUint32(this.default_sample_size), t.writeUint32(this.default_sample_flags)
      }, p.trunBox.prototype.write = function(t) {
        this.version = 0, this.size = 4, this.flags & p.TRUN_FLAGS_DATA_OFFSET && (this.size += 4), this.flags & p.TRUN_FLAGS_FIRST_FLAG && (this.size += 4), this.flags & p.TRUN_FLAGS_DURATION && (this.size += 4 * this.sample_duration.length), this.flags & p.TRUN_FLAGS_SIZE && (this.size += 4 * this.sample_size.length), this.flags & p.TRUN_FLAGS_FLAGS && (this.size += 4 * this.sample_flags.length), this.flags & p.TRUN_FLAGS_CTS_OFFSET && (this.size += 4 * this.sample_composition_time_offset.length), this.writeHeader(t), t.writeUint32(this.sample_count), this.flags & p.TRUN_FLAGS_DATA_OFFSET && (this.data_offset_position = t.getPosition(), t.writeInt32(this.data_offset)), this.flags & p.TRUN_FLAGS_FIRST_FLAG && t.writeUint32(this.first_sample_flags);
        for (var e = 0; e < this.sample_count; e++) this.flags & p.TRUN_FLAGS_DURATION && t.writeUint32(this.sample_duration[e]), this.flags & p.TRUN_FLAGS_SIZE && t.writeUint32(this.sample_size[e]), this.flags & p.TRUN_FLAGS_FLAGS && t.writeUint32(this.sample_flags[e]), this.flags & p.TRUN_FLAGS_CTS_OFFSET && (0 === this.version ? t.writeUint32(this.sample_composition_time_offset[e]) : t.writeInt32(this.sample_composition_time_offset[e]))
      }, p["url Box"].prototype.write = function(t) {
        this.version = 0, this.location ? (this.flags = 0, this.size = this.location.length + 1) : (this.flags = 1, this.size = 0), this.writeHeader(t), this.location && t.writeCString(this.location)
      }, p["urn Box"].prototype.write = function(t) {
        this.version = 0, this.flags = 0, this.size = this.name.length + 1 + (this.location ? this.location.length + 1 : 0), this.writeHeader(t), t.writeCString(this.name), this.location && t.writeCString(this.location)
      }, p.vmhdBox.prototype.write = function(t) {
        this.version = 0, this.flags = 1, this.size = 8, this.writeHeader(t), t.writeUint16(this.graphicsmode), t.writeUint16Array(this.opcolor)
      }, p.cttsBox.prototype.unpack = function(t) {
        var e, i, r;
        for (e = 0, r = 0; e < this.sample_counts.length; e++)
          for (i = 0; i < this.sample_counts[e]; i++) t[r].pts = t[r].dts + this.sample_offsets[e], r++
      }, p.sttsBox.prototype.unpack = function(t) {
        var e, i, r;
        for (e = 0, r = 0; e < this.sample_counts.length; e++)
          for (i = 0; i < this.sample_counts[e]; i++) 0 === r ? t[r].dts = 0 : t[r].dts = t[r - 1].dts + this.sample_deltas[e], r++
      }, p.stcoBox.prototype.unpack = function(t) {
        var e;
        for (e = 0; e < this.chunk_offsets.length; e++) t[e].offset = this.chunk_offsets[e]
      }, p.stscBox.prototype.unpack = function(t) {
        var e, i, r, s, n;
        for (e = 0, s = 0, n = 0; e < this.first_chunk.length; e++)
          for (i = 0; i < (e + 1 < this.first_chunk.length ? this.first_chunk[e + 1] : 1 / 0); i++)
            for (n++, r = 0; r < this.samples_per_chunk[e]; r++) {
              if (!t[s]) return;
              t[s].description_index = this.sample_description_index[e], t[s].chunk_index = n, s++
            }
      }, p.stszBox.prototype.unpack = function(t) {
        var e;
        for (e = 0; e < this.sample_sizes.length; e++) t[e].size = this.sample_sizes[e]
      }, p.DIFF_BOXES_PROP_NAMES = ["boxes", "entries", "references", "subsamples", "items", "item_infos", "extents", "associations", "subsegments", "ranges", "seekLists", "seekPoints", "esd", "levels"], p.DIFF_PRIMITIVE_ARRAY_PROP_NAMES = ["compatible_brands", "matrix", "opcolor", "sample_counts", "sample_counts", "sample_deltas", "first_chunk", "samples_per_chunk", "sample_sizes", "chunk_offsets", "sample_offsets", "sample_description_index", "sample_duration"], p.boxEqualFields = function(t, e) {
        var i;
        if (t && !e) return !1;
        for (i in t)
          if (!(p.DIFF_BOXES_PROP_NAMES.indexOf(i) > -1)) {
            if (t[i] instanceof p.Box || e[i] instanceof p.Box) continue;
            if (void 0 === t[i] || void 0 === e[i] || "function" == typeof t[i] || "function" == typeof e[i] || t.subBoxNames && t.subBoxNames.indexOf(i.slice(0, 4)) > -1 || e.subBoxNames && e.subBoxNames.indexOf(i.slice(0, 4)) > -1 || "data" === i || "start" === i || "size" === i || "creation_time" === i || "modification_time" === i || p.DIFF_PRIMITIVE_ARRAY_PROP_NAMES.indexOf(i) > -1) continue;
            if (t[i] !== e[i]) return !1
          } return !0
      }, p.boxEqual = function(t, e) {
        if (!p.boxEqualFields(t, e)) return !1;
        for (var i = 0; i < p.DIFF_BOXES_PROP_NAMES.length; i++) {
          var r = p.DIFF_BOXES_PROP_NAMES[i];
          if (t[r] && e[r] && !p.boxEqual(t[r], e[r])) return !1
        }
        return !0
      }, (f = function() {}).prototype.parseSample = function(t) {
        var e, i = {};
        i.resources = [];
        var r = new o(t.data.buffer);
        if (t.subsamples && 0 !== t.subsamples.length) {
          if (i.documentString = r.readString(t.subsamples[0].size), t.subsamples.length > 1)
            for (e = 1; e < t.subsamples.length; e++) i.resources[e] = r.readUint8Array(t.subsamples[e].size)
        } else i.documentString = r.readString(t.data.length);
        return "undefined" != typeof DOMParser && (i.document = new DOMParser().parseFromString(i.documentString, "application/xml")), i
      }, (u = function() {}).prototype.parseSample = function(t) {
        return new o(t.data.buffer).readString(t.data.length)
      }, u.prototype.parseConfig = function(t) {
        var e = new o(t.buffer);
        return e.readUint32(), e.readCString()
      }, B.XMLSubtitlein4Parser = f, B.Textin4Parser = u, (c = function(t) {
        this.stream = t || new d, this.boxes = [], this.mdats = [], this.moofs = [], this.isProgressive = !1, this.moovStartFound = !1, this.onMoovStart = null, this.moovStartSent = !1, this.onReady = null, this.readySent = !1, this.onSegment = null, this.onSamples = null, this.onError = null, this.sampleListBuilt = !1, this.fragmentedTracks = [], this.extractedTracks = [], this.isFragmentationInitialized = !1, this.sampleProcessingStarted = !1, this.nextMoofNumber = 0, this.itemListBuilt = !1, this.onSidx = null, this.sidxSent = !1
      }).prototype.setSegmentOptions = function(t, e, i) {
        var r = this.getTrackById(t);
        if (r) {
          var s = {};
          this.fragmentedTracks.push(s), s.id = t, s.user = e, s.trak = r, r.nextSample = 0, s.segmentStream = null, s.nb_samples = 1e3, s.rapAlignement = !0, i && (i.nbSamples && (s.nb_samples = i.nbSamples), i.rapAlignement && (s.rapAlignement = i.rapAlignement))
        }
      }, c.prototype.unsetSegmentOptions = function(t) {
        for (var e = -1, i = 0; i < this.fragmentedTracks.length; i++) this.fragmentedTracks[i].id == t && (e = i);
        e > -1 && this.fragmentedTracks.splice(e, 1)
      }, c.prototype.setExtractionOptions = function(t, e, i) {
        var r = this.getTrackById(t);
        if (r) {
          var s = {};
          this.extractedTracks.push(s), s.id = t, s.user = e, s.trak = r, r.nextSample = 0, s.nb_samples = 1e3, s.samples = [], i && i.nbSamples && (s.nb_samples = i.nbSamples)
        }
      }, c.prototype.unsetExtractionOptions = function(t) {
        for (var e = -1, i = 0; i < this.extractedTracks.length; i++) this.extractedTracks[i].id == t && (e = i);
        e > -1 && this.extractedTracks.splice(e, 1)
      }, c.prototype.parse = function() {
        var t, e, i;
        if (!this.restoreParsePosition || this.restoreParsePosition())
          for (;;) {
            if (this.hasIncompleteMdat && this.hasIncompleteMdat()) {
              if (this.processIncompleteMdat()) continue;
              return
            }
            if (this.saveParsePosition && this.saveParsePosition(), (t = p.parseOneBox(this.stream, !1)).code === p.ERR_NOT_ENOUGH_DATA) {
              if (!this.processIncompleteBox) return;
              if (this.processIncompleteBox(t)) continue;
              return
            }
            switch (i = "uuid" !== (e = t.box).type ? e.type : e.uuid, this.boxes.push(e), i) {
              case "mdat":
                this.mdats.push(e);
                break;
              case "moof":
                this.moofs.push(e);
                break;
              case "moov":
                this.moovStartFound = !0, 0 === this.mdats.length && (this.isProgressive = !0);
              default:
                void 0 !== this[i] && a.warn("ISOFile", "Duplicate Box of type: " + i + ", overriding previous occurrence"), this[i] = e
            }
            this.updateUsedBytes && this.updateUsedBytes(e, t)
          }
      }, c.prototype.checkBuffer = function(t) {
        if (null == t) throw "Buffer must be defined and non empty";
        if (void 0 === t.fileStart) throw "Buffer must have a fileStart property";
        return 0 === t.byteLength ? (a.warn("ISOFile", "Ignoring empty buffer (fileStart: " + t.fileStart + ")"), this.stream.logBufferLevel(), !1) : (a.info("ISOFile", "Processing buffer (fileStart: " + t.fileStart + ")"), t.usedBytes = 0, this.stream.insertBuffer(t), this.stream.logBufferLevel(), !!this.stream.initialized() || (a.warn("ISOFile", "Not ready to start parsing"), !1))
      }, c.prototype.appendBuffer = function(t, e) {
        var i;
        if (this.checkBuffer(t)) return this.parse(), this.moovStartFound && !this.moovStartSent && (this.moovStartSent = !0, this.onMoovStart && this.onMoovStart()), this.moov ? (this.sampleListBuilt || (this.buildSampleLists(), this.sampleListBuilt = !0), this.updateSampleLists(), this.onReady && !this.readySent && (this.readySent = !0, this.onReady(this.getInfo())), this.processSamples(e), this.nextSeekPosition ? (i = this.nextSeekPosition, this.nextSeekPosition = void 0) : i = this.nextParsePosition, this.stream.getEndFilePositionAfter && (i = this.stream.getEndFilePositionAfter(i))) : i = this.nextParsePosition ? this.nextParsePosition : 0, this.sidx && this.onSidx && !this.sidxSent && (this.onSidx(this.sidx), this.sidxSent = !0), this.meta && (this.flattenItemInfo && !this.itemListBuilt && (this.flattenItemInfo(), this.itemListBuilt = !0), this.processItems && this.processItems(this.onItem)), this.stream.cleanBuffers && (a.info("ISOFile", "Done processing buffer (fileStart: " + t.fileStart + ") - next buffer to fetch should have a fileStart position of " + i), this.stream.logBufferLevel(), this.stream.cleanBuffers(), this.stream.logBufferLevel(!0), a.info("ISOFile", "Sample data size in memory: " + this.getAllocatedSampleDataSize())), i
      }, c.prototype.getInfo = function() {
        var t, e, i, r, s, n = {},
          a = new Date("1904-01-01T00:00:00Z").getTime();
        if (this.moov)
          for (n.hasMoov = !0, n.duration = this.moov.mvhd.duration, n.timescale = this.moov.mvhd.timescale, n.isFragmented = null != this.moov.mvex, n.isFragmented && this.moov.mvex.mehd && (n.fragment_duration = this.moov.mvex.mehd.fragment_duration), n.isProgressive = this.isProgressive, n.hasIOD = null != this.moov.iods, n.brands = [], n.brands.push(this.ftyp.major_brand), n.brands = n.brands.concat(this.ftyp.compatible_brands), n.created = new Date(a + 1e3 * this.moov.mvhd.creation_time), n.modified = new Date(a + 1e3 * this.moov.mvhd.modification_time), n.tracks = [], n.audioTracks = [], n.videoTracks = [], n.subtitleTracks = [], n.metadataTracks = [], n.hintTracks = [], n.otherTracks = [], t = 0; t < this.moov.traks.length; t++) {
            if (s = (i = this.moov.traks[t]).mdia.minf.stbl.stsd.entries[0], r = {}, n.tracks.push(r), r.id = i.tkhd.track_id, r.name = i.mdia.hdlr.name, r.references = [], i.tref)
              for (e = 0; e < i.tref.boxes.length; e++) ref = {}, r.references.push(ref), ref.type = i.tref.boxes[e].type, ref.track_ids = i.tref.boxes[e].track_ids;
            i.edts && (r.edits = i.edts.elst.entries), r.created = new Date(a + 1e3 * i.tkhd.creation_time), r.modified = new Date(a + 1e3 * i.tkhd.modification_time), r.movie_duration = i.tkhd.duration, r.movie_timescale = n.timescale, r.layer = i.tkhd.layer, r.alternate_group = i.tkhd.alternate_group, r.volume = i.tkhd.volume, r.matrix = i.tkhd.matrix, r.track_width = i.tkhd.width / 65536, r.track_height = i.tkhd.height / 65536, r.timescale = i.mdia.mdhd.timescale, r.cts_shift = i.mdia.minf.stbl.cslg, r.duration = i.mdia.mdhd.duration, r.samples_duration = i.samples_duration, r.codec = s.getCodec(), r.kind = i.udta && i.udta.kinds.length ? i.udta.kinds[0] : {
              schemeURI: "",
              value: ""
            }, r.language = i.mdia.elng ? i.mdia.elng.extended_language : i.mdia.mdhd.languageString, r.nb_samples = i.samples.length, r.size = i.samples_size, r.bitrate = 8 * r.size * r.timescale / r.samples_duration, s.isAudio() ? (r.type = "audio", n.audioTracks.push(r), r.audio = {}, r.audio.sample_rate = s.getSampleRate(), r.audio.channel_count = s.getChannelCount(), r.audio.sample_size = s.getSampleSize()) : s.isVideo() ? (r.type = "video", n.videoTracks.push(r), r.video = {}, r.video.width = s.getWidth(), r.video.height = s.getHeight()) : s.isSubtitle() ? (r.type = "subtitles", n.subtitleTracks.push(r)) : s.isHint() ? (r.type = "metadata", n.hintTracks.push(r)) : s.isMetadata() ? (r.type = "metadata", n.metadataTracks.push(r)) : (r.type = "metadata", n.otherTracks.push(r))
          } else n.hasMoov = !1;
        if (n.mime = "", n.hasMoov && n.tracks) {
          for (n.videoTracks && n.videoTracks.length > 0 ? n.mime += 'video/mp4; codecs="' : n.audioTracks && n.audioTracks.length > 0 ? n.mime += 'audio/mp4; codecs="' : n.mime += 'application/mp4; codecs="', t = 0; t < n.tracks.length; t++) 0 !== t && (n.mime += ","), n.mime += n.tracks[t].codec;
          n.mime += '"; profiles="', n.mime += this.ftyp.compatible_brands.join(), n.mime += '"'
        }
        return n
      }, c.prototype.processSamples = function(t) {
        if (this.sampleProcessingStarted) {
          if (this.isFragmentationInitialized && null !== this.onSegment)
            for (e = 0; e < this.fragmentedTracks.length; e++) {
              var e, i, r = this.fragmentedTracks[e];
              for (i = r.trak; i.nextSample < i.samples.length && this.sampleProcessingStarted;) {
                a.debug("ISOFile", "Creating media fragment on track #" + r.id + " for sample " + i.nextSample);
                var s = this.createFragment(r.id, i.nextSample, r.segmentStream);
                if (s) r.segmentStream = s, i.nextSample++;
                else break;
                if ((i.nextSample % r.nb_samples == 0 || t || i.nextSample >= i.samples.length) && (a.info("ISOFile", "Sending fragmented data on track #" + r.id + " for samples [" + Math.max(0, i.nextSample - r.nb_samples) + "," + (i.nextSample - 1) + "]"), a.info("ISOFile", "Sample data size in memory: " + this.getAllocatedSampleDataSize()), this.onSegment && this.onSegment(r.id, r.user, r.segmentStream.buffer, i.nextSample, t || i.nextSample >= i.samples.length), r.segmentStream = null, r !== this.fragmentedTracks[e])) break
              }
            }
          if (null !== this.onSamples)
            for (e = 0; e < this.extractedTracks.length; e++) {
              var n = this.extractedTracks[e];
              for (i = n.trak; i.nextSample < i.samples.length && this.sampleProcessingStarted;) {
                a.debug("ISOFile", "Exporting on track #" + n.id + " sample #" + i.nextSample);
                var o = this.getSample(i, i.nextSample);
                if (o) i.nextSample++, n.samples.push(o);
                else break;
                if ((i.nextSample % n.nb_samples == 0 || i.nextSample >= i.samples.length) && (a.debug("ISOFile", "Sending samples on track #" + n.id + " for sample " + i.nextSample), this.onSamples && this.onSamples(n.id, n.user, n.samples), n.samples = [], n !== this.extractedTracks[e])) break
              }
            }
        }
      }, c.prototype.getBox = function(t) {
        var e = this.getBoxes(t, !0);
        return e.length ? e[0] : null
      }, c.prototype.getBoxes = function(t, e) {
        var i = [];
        return c._sweep.call(this, t, i, e), i
      }, c._sweep = function(t, e, i) {
        for (var r in this.type && this.type == t && e.push(this), this.boxes) {
          if (e.length && i) return;
          c._sweep.call(this.boxes[r], t, e, i)
        }
      }, c.prototype.getTrackSamplesInfo = function(t) {
        var e = this.getTrackById(t);
        return e ? e.samples : void 0
      }, c.prototype.getTrackSample = function(t, e) {
        var i = this.getTrackById(t);
        return this.getSample(i, e)
      }, c.prototype.releaseUsedSamples = function(t, e) {
        var i = 0,
          r = this.getTrackById(t);
        r.lastValidSample || (r.lastValidSample = 0);
        for (var s = r.lastValidSample; s < e; s++) i += this.releaseSample(r, s);
        a.info("ISOFile", "Track #" + t + " released samples up to " + e + " (released size: " + i + ", remaining: " + this.samplesDataSize + ")"), r.lastValidSample = e
      }, c.prototype.start = function() {
        this.sampleProcessingStarted = !0, this.processSamples(!1)
      }, c.prototype.stop = function() {
        this.sampleProcessingStarted = !1
      }, c.prototype.flush = function() {
        a.info("ISOFile", "Flushing remaining samples"), this.updateSampleLists(), this.processSamples(!0), this.stream.cleanBuffers(), this.stream.logBufferLevel(!0)
      }, c.prototype.seekTrack = function(t, e, i) {
        var r, s, n, o = 1 / 0,
          h = 0,
          d = 0;
        if (0 === i.samples.length) return a.info("ISOFile", "No sample in track, cannot seek! Using time " + a.getDurationString(0, 1) + " and offset: 0"), {
          offset: 0,
          time: 0
        };
        for (r = 0; r < i.samples.length; r++) {
          if (s = i.samples[r], 0 === r) d = 0, n = s.timescale;
          else if (s.cts > t * s.timescale) {
            d = r - 1;
            break
          }
          e && s.is_sync && (h = r)
        }
        for (e && (d = h), t = i.samples[d].cts, i.nextSample = d; i.samples[d].alreadyRead === i.samples[d].size && i.samples[d + 1];) d++;
        return o = i.samples[d].offset + i.samples[d].alreadyRead, a.info("ISOFile", "Seeking to " + (e ? "RAP" : "") + " sample #" + i.nextSample + " on track " + i.tkhd.track_id + ", time " + a.getDurationString(t, n) + " and offset: " + o), {
          offset: o,
          time: t / n
        }
      }, c.prototype.seek = function(t, e) {
        var i, r, s, n = this.moov,
          o = {
            offset: 1 / 0,
            time: 1 / 0
          };
        if (this.moov) {
          for (s = 0; s < n.traks.length; s++) i = n.traks[s], (r = this.seekTrack(t, e, i)).offset < o.offset && (o.offset = r.offset), r.time < o.time && (o.time = r.time);
          return a.info("ISOFile", "Seeking at time " + a.getDurationString(o.time, 1) + " needs a buffer with a fileStart position of " + o.offset), o.offset === 1 / 0 ? o = {
            offset: this.nextParsePosition,
            time: 0
          } : o.offset = this.stream.getEndFilePositionAfter(o.offset), a.info("ISOFile", "Adjusted seek position (after checking data already in buffer): " + o.offset), o
        }
        throw "Cannot seek: moov not received!"
      }, c.prototype.equal = function(t) {
        for (var e = 0; e < this.boxes.length && e < t.boxes.length;) {
          var i = this.boxes[e],
            r = t.boxes[e];
          if (!p.boxEqual(i, r)) return !1;
          e++
        }
        return !0
      }, B.ISOFile = c, c.prototype.lastBoxStartPosition = 0, c.prototype.parsingMdat = null, c.prototype.nextParsePosition = 0, c.prototype.discardMdatData = !1, c.prototype.processIncompleteBox = function(t) {
        var e;
        return "mdat" === t.type ? (e = new p[t.type + "Box"](t.size), this.parsingMdat = e, this.boxes.push(e), this.mdats.push(e), e.start = t.start, e.hdr_size = t.hdr_size, this.stream.addUsedBytes(e.hdr_size), this.lastBoxStartPosition = e.start + e.size, this.stream.seek(e.start + e.size, !1, this.discardMdatData)) ? (this.parsingMdat = null, !0) : (this.moovStartFound ? this.nextParsePosition = this.stream.findEndContiguousBuf() : this.nextParsePosition = e.start + e.size, !1) : ("moov" === t.type && (this.moovStartFound = !0, 0 === this.mdats.length && (this.isProgressive = !0)), this.stream.mergeNextBuffer && this.stream.mergeNextBuffer()) ? (this.nextParsePosition = this.stream.getEndPosition(), !0) : (t.type ? this.moovStartFound ? this.nextParsePosition = this.stream.getEndPosition() : this.nextParsePosition = this.stream.getPosition() + t.size : this.nextParsePosition = this.stream.getEndPosition(), !1)
      }, c.prototype.hasIncompleteMdat = function() {
        return null !== this.parsingMdat
      }, c.prototype.processIncompleteMdat = function() {
        var t;
        return (t = this.parsingMdat, this.stream.seek(t.start + t.size, !1, this.discardMdatData)) ? (a.debug("ISOFile", "Found 'mdat' end in buffered data"), this.parsingMdat = null, !0) : (this.nextParsePosition = this.stream.findEndContiguousBuf(), !1)
      }, c.prototype.restoreParsePosition = function() {
        return this.stream.seek(this.lastBoxStartPosition, !0, this.discardMdatData)
      }, c.prototype.saveParsePosition = function() {
        this.lastBoxStartPosition = this.stream.getPosition()
      }, c.prototype.updateUsedBytes = function(t, e) {
        this.stream.addUsedBytes && ("mdat" === t.type ? (this.stream.addUsedBytes(t.hdr_size), this.discardMdatData && this.stream.addUsedBytes(t.size - t.hdr_size)) : this.stream.addUsedBytes(t.size))
      }, c.prototype.add = p.Box.prototype.add, c.prototype.addBox = p.Box.prototype.addBox, c.prototype.init = function(t) {
        var e = t || {};
        this.add("ftyp").set("major_brand", e.brands && e.brands[0] || "iso4").set("minor_version", 0).set("compatible_brands", e.brands || ["iso4"]);
        var i = this.add("moov");
        return i.add("mvhd").set("timescale", e.timescale || 600).set("rate", e.rate || 65536).set("creation_time", 0).set("modification_time", 0).set("duration", e.duration || 0).set("volume", e.width ? 0 : 256).set("matrix", [65536, 0, 0, 0, 65536, 0, 0, 0, 1073741824]).set("next_track_id", 1), i.add("mvex"), this
      }, c.prototype.addTrack = function(t) {
        this.moov || this.init(t);
        var e = t || {};
        e.width = e.width || 320, e.height = e.height || 320, e.id = e.id || this.moov.mvhd.next_track_id, e.type = e.type || "avc1";
        var i = this.moov.add("trak");
        this.moov.mvhd.next_track_id = e.id + 1, i.add("tkhd").set("flags", p.TKHD_FLAG_ENABLED | p.TKHD_FLAG_IN_MOVIE | p.TKHD_FLAG_IN_PREVIEW).set("creation_time", 0).set("modification_time", 0).set("track_id", e.id).set("duration", e.duration || 0).set("layer", e.layer || 0).set("alternate_group", 0).set("volume", 1).set("matrix", [0, 0, 0, 0, 0, 0, 0, 0, 0]).set("width", e.width).set("height", e.height);
        var r = i.add("mdia");
        r.add("mdhd").set("creation_time", 0).set("modification_time", 0).set("timescale", e.timescale || 1).set("duration", e.media_duration || 0).set("language", e.language || "und"), r.add("hdlr").set("handler", e.hdlr || "vide").set("name", e.name || "Track created with MP4Box.js"), r.add("elng").set("extended_language", e.language || "fr-FR");
        var s = r.add("minf");
        if (void 0 !== p[e.type + "SampleEntry"]) {
          var n = new p[e.type + "SampleEntry"];
          n.data_reference_index = 1;
          var a = "";
          for (var h in p.sampleEntryCodes)
            for (var d = p.sampleEntryCodes[h], l = 0; l < d.length; l++)
              if (d.indexOf(e.type) > -1) {
                a = h;
                break
              } switch (a) {
            case "Visual":
              if (s.add("vmhd").set("graphicsmode", 0).set("opcolor", [0, 0, 0]), n.set("width", e.width).set("height", e.height).set("horizresolution", 4718592).set("vertresolution", 4718592).set("frame_count", 1).set("compressorname", e.type + " Compressor").set("depth", 24), e.avcDecoderConfigRecord) {
                var f = new p.avcCBox,
                  u = new o(e.avcDecoderConfigRecord);
                f.parse(u), n.addBox(f)
              }
              break;
            case "Audio":
              s.add("smhd").set("balance", e.balance || 0), n.set("channel_count", e.channel_count || 2).set("samplesize", e.samplesize || 16).set("samplerate", e.samplerate || 65536);
              break;
            case "Hint":
              s.add("hmhd");
              break;
            case "Subtitle":
              s.add("sthd"), "stpp" === e.type && n.set("namespace", e.namespace || "nonamespace").set("schema_location", e.schema_location || "").set("auxiliary_mime_types", e.auxiliary_mime_types || "");
              break;
            default:
              s.add("nmhd")
          }
          e.description && n.addBox(e.description), e.description_boxes && e.description_boxes.forEach(function(t) {
            n.addBox(t)
          }), s.add("dinf").add("dref").addEntry(new p["url Box"]().set("flags", 1));
          var c = s.add("stbl");
          return c.add("stsd").addEntry(n), c.add("stts").set("sample_counts", []).set("sample_deltas", []), c.add("stsc").set("first_chunk", []).set("samples_per_chunk", []).set("sample_description_index", []), c.add("stco").set("chunk_offsets", []), c.add("stsz").set("sample_sizes", []), this.moov.mvex.add("trex").set("track_id", e.id).set("default_sample_description_index", e.default_sample_description_index || 1).set("default_sample_duration", e.default_sample_duration || 0).set("default_sample_size", e.default_sample_size || 0).set("default_sample_flags", e.default_sample_flags || 0), this.buildTrakSampleLists(i), e.id
        }
      }, p.Box.prototype.computeSize = function(t) {
        var e = t || new h;
        e.endianness = h.BIG_ENDIAN, this.write(e)
      }, c.prototype.addSample = function(t, e, i) {
        var r = i || {},
          s = {},
          n = this.getTrackById(t);
        if (null !== n) {
          s.number = n.samples.length, s.track_id = n.tkhd.track_id, s.timescale = n.mdia.mdhd.timescale, s.description_index = r.sample_description_index ? r.sample_description_index - 1 : 0, s.description = n.mdia.minf.stbl.stsd.entries[s.description_index], s.data = e, s.size = e.byteLength, s.alreadyRead = s.size, s.duration = r.duration || 1, s.cts = r.cts || 0, s.dts = r.dts || 0, s.is_sync = r.is_sync || !1, s.is_leading = r.is_leading || 0, s.depends_on = r.depends_on || 0, s.is_depended_on = r.is_depended_on || 0, s.has_redundancy = r.has_redundancy || 0, s.degradation_priority = r.degradation_priority || 0, s.offset = 0, s.subsamples = r.subsamples, n.samples.push(s), n.samples_size += s.size, n.samples_duration += s.duration, n.first_dts || (n.first_dts = r.dts), this.processSamples();
          var a = this.createSingleSampleMoof(s);
          return this.addBox(a), a.computeSize(), a.trafs[0].truns[0].data_offset = a.size + 8, this.add("mdat").data = new Uint8Array(e), s
        }
      }, c.prototype.createSingleSampleMoof = function(t) {
        var e = 0;
        e = t.is_sync ? 33554432 : 65536;
        var i = new p.moofBox;
        i.add("mfhd").set("sequence_number", this.nextMoofNumber), this.nextMoofNumber++;
        var r = i.add("traf"),
          s = this.getTrackById(t.track_id);
        return r.add("tfhd").set("track_id", t.track_id).set("flags", p.TFHD_FLAG_DEFAULT_BASE_IS_MOOF), r.add("tfdt").set("baseMediaDecodeTime", t.dts - s.first_dts), r.add("trun").set("flags", p.TRUN_FLAGS_DATA_OFFSET | p.TRUN_FLAGS_DURATION | p.TRUN_FLAGS_SIZE | p.TRUN_FLAGS_FLAGS | p.TRUN_FLAGS_CTS_OFFSET).set("data_offset", 0).set("first_sample_flags", 0).set("sample_count", 1).set("sample_duration", [t.duration]).set("sample_size", [t.size]).set("sample_flags", [e]).set("sample_composition_time_offset", [t.cts - t.dts]), i
      }, c.prototype.lastMoofIndex = 0, c.prototype.samplesDataSize = 0, c.prototype.resetTables = function() {
        for (t = 0, this.initial_duration = this.moov.mvhd.duration, this.moov.mvhd.duration = 0; t < this.moov.traks.length; t++) {
          (e = this.moov.traks[t]).tkhd.duration = 0, e.mdia.mdhd.duration = 0, (e.mdia.minf.stbl.stco || e.mdia.minf.stbl.co64).chunk_offsets = [], (i = e.mdia.minf.stbl.stsc).first_chunk = [], i.samples_per_chunk = [], i.sample_description_index = [], (e.mdia.minf.stbl.stsz || e.mdia.minf.stbl.stz2).sample_sizes = [], (r = e.mdia.minf.stbl.stts).sample_counts = [], r.sample_deltas = [], (s = e.mdia.minf.stbl.ctts) && (s.sample_counts = [], s.sample_offsets = []), n = e.mdia.minf.stbl.stss;
          var t, e, i, r, s, n, a = e.mdia.minf.stbl.boxes.indexOf(n); - 1 != a && (e.mdia.minf.stbl.boxes[a] = null)
        }
      }, c.initSampleGroups = function(t, e, i, r, s) {
        var n, a, o, h;

        function d(t, e, i) {
          this.grouping_type = t, this.grouping_type_parameter = e, this.sbgp = i, this.last_sample_in_run = -1, this.entry_index = -1
        }
        for (e && (e.sample_groups_info = []), t.sample_groups_info || (t.sample_groups_info = []), a = 0; a < i.length; a++) {
          for (h = i[a].grouping_type + "/" + i[a].grouping_type_parameter, o = new d(i[a].grouping_type, i[a].grouping_type_parameter, i[a]), e && (e.sample_groups_info[h] = o), t.sample_groups_info[h] || (t.sample_groups_info[h] = o), n = 0; n < r.length; n++) r[n].grouping_type === i[a].grouping_type && (o.description = r[n], o.description.used = !0);
          if (s)
            for (n = 0; n < s.length; n++) s[n].grouping_type === i[a].grouping_type && (o.fragment_description = s[n], o.fragment_description.used = !0, o.is_fragment = !0)
        }
        if (e) {
          if (s)
            for (a = 0; a < s.length; a++) s[a].used || !(s[a].version >= 2) || (h = s[a].grouping_type + "/0", (o = new d(s[a].grouping_type, 0)).is_fragment = !0, e.sample_groups_info[h] || (e.sample_groups_info[h] = o))
        } else
          for (a = 0; a < r.length; a++) r[a].used || !(r[a].version >= 2) || (h = r[a].grouping_type + "/0", o = new d(r[a].grouping_type, 0), t.sample_groups_info[h] || (t.sample_groups_info[h] = o))
      }, c.setSampleGroupProperties = function(t, e, i, r) {
        var s, n, a;
        for (s in e.sample_groups = [], r) e.sample_groups[s] = {}, e.sample_groups[s].grouping_type = r[s].grouping_type, e.sample_groups[s].grouping_type_parameter = r[s].grouping_type_parameter, i >= r[s].last_sample_in_run && (r[s].last_sample_in_run < 0 && (r[s].last_sample_in_run = 0), r[s].entry_index++, r[s].entry_index <= r[s].sbgp.entries.length - 1 && (r[s].last_sample_in_run += r[s].sbgp.entries[r[s].entry_index].sample_count)), r[s].entry_index <= r[s].sbgp.entries.length - 1 ? e.sample_groups[s].group_description_index = r[s].sbgp.entries[r[s].entry_index].group_description_index : e.sample_groups[s].group_description_index = -1, 0 !== e.sample_groups[s].group_description_index && (a = r[s].fragment_description ? r[s].fragment_description : r[s].description, e.sample_groups[s].group_description_index > 0 ? (n = e.sample_groups[s].group_description_index > 65535 ? (e.sample_groups[s].group_description_index >> 16) - 1 : e.sample_groups[s].group_description_index - 1, a && n >= 0 && (e.sample_groups[s].description = a.entries[n])) : a && a.version >= 2 && a.default_group_description_index > 0 && (e.sample_groups[s].description = a.entries[a.default_group_description_index - 1]))
      }, c.process_sdtp = function(t, e, i) {
        e && (t ? (e.is_leading = t.is_leading[i], e.depends_on = t.sample_depends_on[i], e.is_depended_on = t.sample_is_depended_on[i], e.has_redundancy = t.sample_has_redundancy[i]) : (e.is_leading = 0, e.depends_on = 0, e.is_depended_on = 0, e.has_redundancy = 0))
      }, c.prototype.buildSampleLists = function() {
        var t, e;
        for (t = 0; t < this.moov.traks.length; t++) e = this.moov.traks[t], this.buildTrakSampleLists(e)
      }, c.prototype.buildTrakSampleLists = function(t) {
        if (t.samples = [], t.samples_duration = 0, t.samples_size = 0, i = t.mdia.minf.stbl.stco || t.mdia.minf.stbl.co64, r = t.mdia.minf.stbl.stsc, s = t.mdia.minf.stbl.stsz || t.mdia.minf.stbl.stz2, n = t.mdia.minf.stbl.stts, a = t.mdia.minf.stbl.ctts, o = t.mdia.minf.stbl.stss, h = t.mdia.minf.stbl.stsd, d = t.mdia.minf.stbl.subs, f = t.mdia.minf.stbl.stdp, l = t.mdia.minf.stbl.sbgps, p = t.mdia.minf.stbl.sgpds, b = -1, v = -1, w = -1, S = -1, x = 0, U = 0, E = 0, c.initSampleGroups(t, null, l, p), void 0 !== s) {
          for (e = 0; e < s.sample_sizes.length; e++) {
            var e, i, r, s, n, a, o, h, d, l, p, f, u, m, _, g, y, b, v, w, S, x, U, E, T = {};
            T.number = e, T.track_id = t.tkhd.track_id, T.timescale = t.mdia.mdhd.timescale, T.alreadyRead = 0, t.samples[e] = T, T.size = s.sample_sizes[e], t.samples_size += T.size, 0 === e ? (m = 1, u = 0, T.chunk_index = m, T.chunk_run_index = u, y = r.samples_per_chunk[u], g = 0, _ = u + 1 < r.first_chunk.length ? r.first_chunk[u + 1] - 1 : 1 / 0) : e < y ? (T.chunk_index = m, T.chunk_run_index = u) : (m++, T.chunk_index = m, g = 0, m <= _ || (_ = ++u + 1 < r.first_chunk.length ? r.first_chunk[u + 1] - 1 : 1 / 0), T.chunk_run_index = u, y += r.samples_per_chunk[u]), T.description_index = r.sample_description_index[T.chunk_run_index] - 1, T.description = h.entries[T.description_index], T.offset = i.chunk_offsets[T.chunk_index - 1] + g, g += T.size, e > b && (v++, b < 0 && (b = 0), b += n.sample_counts[v]), e > 0 ? (t.samples[e - 1].duration = n.sample_deltas[v], t.samples_duration += t.samples[e - 1].duration, T.dts = t.samples[e - 1].dts + t.samples[e - 1].duration) : T.dts = 0, a ? (e >= w && (S++, w < 0 && (w = 0), w += a.sample_counts[S]), T.cts = t.samples[e].dts + a.sample_offsets[S]) : T.cts = T.dts, o ? (e == o.sample_numbers[x] - 1 ? (T.is_sync = !0, x++) : (T.is_sync = !1, T.degradation_priority = 0), d && d.entries[U].sample_delta + E == e + 1 && (T.subsamples = d.entries[U].subsamples, E += d.entries[U].sample_delta, U++)) : T.is_sync = !0, c.process_sdtp(t.mdia.minf.stbl.sdtp, T, T.number), f ? T.degradation_priority = f.priority[e] : T.degradation_priority = 0, d && d.entries[U].sample_delta + E == e && (T.subsamples = d.entries[U].subsamples, E += d.entries[U].sample_delta), (l.length > 0 || p.length > 0) && c.setSampleGroupProperties(t, T, e, t.sample_groups_info)
          }
          e > 0 && (t.samples[e - 1].duration = Math.max(t.mdia.mdhd.duration - t.samples[e - 1].dts, 0), t.samples_duration += t.samples[e - 1].duration)
        }
      }, c.prototype.updateSampleLists = function() {
        if (void 0 !== this.moov) {
          for (; this.lastMoofIndex < this.moofs.length;)
            if (h = this.moofs[this.lastMoofIndex], this.lastMoofIndex++, "moof" == h.type)
              for (t = 0; t < h.trafs.length; t++) {
                for (d = h.trafs[t], l = this.getTrackById(d.tfhd.track_id), f = this.getTrexById(d.tfhd.track_id), r = d.tfhd.flags & p.TFHD_FLAG_SAMPLE_DESC ? d.tfhd.default_sample_description_index : f ? f.default_sample_description_index : 1, s = d.tfhd.flags & p.TFHD_FLAG_SAMPLE_DUR ? d.tfhd.default_sample_duration : f ? f.default_sample_duration : 0, n = d.tfhd.flags & p.TFHD_FLAG_SAMPLE_SIZE ? d.tfhd.default_sample_size : f ? f.default_sample_size : 0, a = d.tfhd.flags & p.TFHD_FLAG_SAMPLE_FLAGS ? d.tfhd.default_sample_flags : f ? f.default_sample_flags : 0, d.sample_number = 0, d.sbgps.length > 0 && c.initSampleGroups(l, d, d.sbgps, l.mdia.minf.stbl.sgpds, d.sgpds), e = 0; e < d.truns.length; e++) {
                  var t, e, i, r, s, n, a, o, h, d, l, f, u, m, _ = d.truns[e];
                  for (i = 0; i < _.sample_count; i++) {
                    (u = {}).moof_number = this.lastMoofIndex, u.number_in_traf = d.sample_number, d.sample_number++, u.number = l.samples.length, d.first_sample_index = l.samples.length, l.samples.push(u), u.track_id = l.tkhd.track_id, u.timescale = l.mdia.mdhd.timescale, u.description_index = r - 1, u.description = l.mdia.minf.stbl.stsd.entries[u.description_index], u.size = n, _.flags & p.TRUN_FLAGS_SIZE && (u.size = _.sample_size[i]), l.samples_size += u.size, u.duration = s, _.flags & p.TRUN_FLAGS_DURATION && (u.duration = _.sample_duration[i]), l.samples_duration += u.duration, l.first_traf_merged || i > 0 ? u.dts = l.samples[l.samples.length - 2].dts + l.samples[l.samples.length - 2].duration : (d.tfdt ? u.dts = d.tfdt.baseMediaDecodeTime : u.dts = 0, l.first_traf_merged = !0), u.cts = u.dts, _.flags & p.TRUN_FLAGS_CTS_OFFSET && (u.cts = u.dts + _.sample_composition_time_offset[i]), m = a, _.flags & p.TRUN_FLAGS_FLAGS ? m = _.sample_flags[i] : 0 === i && _.flags & p.TRUN_FLAGS_FIRST_FLAG && (m = _.first_sample_flags), u.is_sync = !(m >> 16 & 1), u.is_leading = m >> 26 & 3, u.depends_on = m >> 24 & 3, u.is_depended_on = m >> 22 & 3, u.has_redundancy = m >> 20 & 3, u.degradation_priority = 65535 & m;
                    var g = !!(d.tfhd.flags & p.TFHD_FLAG_BASE_DATA_OFFSET),
                      y = !!(d.tfhd.flags & p.TFHD_FLAG_DEFAULT_BASE_IS_MOOF),
                      b = !!(_.flags & p.TRUN_FLAGS_DATA_OFFSET),
                      v = 0;
                    v = g ? d.tfhd.base_data_offset : y ? h.start : 0 === e ? h.start : o, 0 === e && 0 === i ? b ? u.offset = v + _.data_offset : u.offset = v : u.offset = o, o = u.offset + u.size, (d.sbgps.length > 0 || d.sgpds.length > 0 || l.mdia.minf.stbl.sbgps.length > 0 || l.mdia.minf.stbl.sgpds.length > 0) && c.setSampleGroupProperties(l, u, u.number_in_traf, d.sample_groups_info)
                  }
                }
                if (d.subs) {
                  l.has_fragment_subsamples = !0;
                  var w = d.first_sample_index;
                  for (e = 0; e < d.subs.entries.length; e++) w += d.subs.entries[e].sample_delta, (u = l.samples[w - 1]).subsamples = d.subs.entries[e].subsamples
                }
              }
        }
      }, c.prototype.getSample = function(t, e) {
        var i, r = t.samples[e];
        if (!this.moov) return null;
        if (r.data) {
          if (r.alreadyRead == r.size) return r
        } else r.data = new Uint8Array(r.size), r.alreadyRead = 0, this.samplesDataSize += r.size, a.debug("ISOFile", "Allocating sample #" + e + " on track #" + t.tkhd.track_id + " of size " + r.size + " (total: " + this.samplesDataSize + ")");
        for (;;) {
          var s = this.stream.findPosition(!0, r.offset + r.alreadyRead, !1);
          if (!(s > -1)) return null;
          var n = (i = this.stream.buffers[s]).byteLength - (r.offset + r.alreadyRead - i.fileStart);
          if (r.size - r.alreadyRead <= n) return a.debug("ISOFile", "Getting sample #" + e + " data (alreadyRead: " + r.alreadyRead + " offset: " + (r.offset + r.alreadyRead - i.fileStart) + " read size: " + (r.size - r.alreadyRead) + " full size: " + r.size + ")"), h.memcpy(r.data.buffer, r.alreadyRead, i, r.offset + r.alreadyRead - i.fileStart, r.size - r.alreadyRead), i.usedBytes += r.size - r.alreadyRead, this.stream.logBufferLevel(), r.alreadyRead = r.size, r;
          if (0 === n) return null;
          a.debug("ISOFile", "Getting sample #" + e + " partial data (alreadyRead: " + r.alreadyRead + " offset: " + (r.offset + r.alreadyRead - i.fileStart) + " read size: " + n + " full size: " + r.size + ")"), h.memcpy(r.data.buffer, r.alreadyRead, i, r.offset + r.alreadyRead - i.fileStart, n), r.alreadyRead += n, i.usedBytes += n, this.stream.logBufferLevel()
        }
      }, c.prototype.releaseSample = function(t, e) {
        var i = t.samples[e];
        return i.data ? (this.samplesDataSize -= i.size, i.data = null, i.alreadyRead = 0, i.size) : 0
      }, c.prototype.getAllocatedSampleDataSize = function() {
        return this.samplesDataSize
      }, c.prototype.getCodecs = function() {
        var t, e = "";
        for (t = 0; t < this.moov.traks.length; t++) {
          var i = this.moov.traks[t];
          t > 0 && (e += ","), e += i.mdia.minf.stbl.stsd.entries[0].getCodec()
        }
        return e
      }, c.prototype.getTrexById = function(t) {
        var e;
        if (!this.moov || !this.moov.mvex) return null;
        for (e = 0; e < this.moov.mvex.trexs.length; e++) {
          var i = this.moov.mvex.trexs[e];
          if (i.track_id == t) return i
        }
        return null
      }, c.prototype.getTrackById = function(t) {
        if (void 0 === this.moov) return null;
        for (var e = 0; e < this.moov.traks.length; e++) {
          var i = this.moov.traks[e];
          if (i.tkhd.track_id == t) return i
        }
        return null
      }, c.prototype.items = [], c.prototype.itemsDataSize = 0, c.prototype.flattenItemInfo = function() {
        var t, e, i, r = this.items,
          s = this.meta;
        if (null != s && void 0 !== s.hdlr && void 0 !== s.iinf) {
          for (t = 0; t < s.iinf.item_infos.length; t++)(i = {}).id = s.iinf.item_infos[t].item_ID, r[i.id] = i, i.ref_to = [], i.name = s.iinf.item_infos[t].item_name, s.iinf.item_infos[t].protection_index > 0 && (i.protection = s.ipro.protections[s.iinf.item_infos[t].protection_index - 1]), s.iinf.item_infos[t].item_type ? i.type = s.iinf.item_infos[t].item_type : i.type = "mime", i.content_type = s.iinf.item_infos[t].content_type, i.content_encoding = s.iinf.item_infos[t].content_encoding;
          if (s.iloc)
            for (t = 0; t < s.iloc.items.length; t++) {
              var n = s.iloc.items[t];
              switch (i = r[n.item_ID], 0 !== n.data_reference_index && (a.warn("Item storage with reference to other files: not supported"), i.source = s.dinf.boxes[n.data_reference_index - 1]), n.construction_method) {
                case 0:
                  break;
                case 1:
                case 2:
                  a.warn("Item storage with construction_method : not supported")
              }
              for (e = 0, i.extents = [], i.size = 0; e < n.extents.length; e++) i.extents[e] = {}, i.extents[e].offset = n.extents[e].extent_offset + n.base_offset, i.extents[e].length = n.extents[e].extent_length, i.extents[e].alreadyRead = 0, i.size += i.extents[e].length
            }
          if (s.pitm && (r[s.pitm.item_id].primary = !0), s.iref)
            for (t = 0; t < s.iref.references.length; t++) {
              var o = s.iref.references[t];
              for (e = 0; e < o.references.length; e++) r[o.from_item_ID].ref_to.push({
                type: o.type,
                id: o.references[e]
              })
            }
          if (s.iprp)
            for (var h = 0; h < s.iprp.ipmas.length; h++) {
              var d = s.iprp.ipmas[h];
              for (t = 0; t < d.associations.length; t++) {
                var l = d.associations[t];
                for (void 0 === (i = r[l.id]).properties && (i.properties = {}, i.properties.boxes = []), e = 0; e < l.props.length; e++) {
                  var p = l.props[e];
                  if (p.property_index > 0 && p.property_index - 1 < s.iprp.ipco.boxes.length) {
                    var f = s.iprp.ipco.boxes[p.property_index - 1];
                    i.properties[f.type] = f, i.properties.boxes.push(f)
                  }
                }
              }
            }
        }
      }, c.prototype.getItem = function(t) {
        if (!this.meta) return null;
        if (!(i = this.items[t]).data && i.size) i.data = new Uint8Array(i.size), i.alreadyRead = 0, this.itemsDataSize += i.size, a.debug("ISOFile", "Allocating item #" + t + " of size " + i.size + " (total: " + this.itemsDataSize + ")");
        else if (i.alreadyRead === i.size) return i;
        for (var e, i, r = 0; r < i.extents.length; r++) {
          var s = i.extents[r];
          if (s.alreadyRead !== s.length) {
            var n = this.stream.findPosition(!0, s.offset + s.alreadyRead, !1);
            if (!(n > -1)) return null;
            var o = (e = this.stream.buffers[n]).byteLength - (s.offset + s.alreadyRead - e.fileStart);
            if (!(s.length - s.alreadyRead <= o)) return a.debug("ISOFile", "Getting item #" + t + " extent #" + r + " partial data (alreadyRead: " + s.alreadyRead + " offset: " + (s.offset + s.alreadyRead - e.fileStart) + " read size: " + o + " full extent size: " + s.length + " full item size: " + i.size + ")"), h.memcpy(i.data.buffer, i.alreadyRead, e, s.offset + s.alreadyRead - e.fileStart, o), s.alreadyRead += o, i.alreadyRead += o, e.usedBytes += o, this.stream.logBufferLevel(), null;
            a.debug("ISOFile", "Getting item #" + t + " extent #" + r + " data (alreadyRead: " + s.alreadyRead + " offset: " + (s.offset + s.alreadyRead - e.fileStart) + " read size: " + (s.length - s.alreadyRead) + " full extent size: " + s.length + " full item size: " + i.size + ")"), h.memcpy(i.data.buffer, i.alreadyRead, e, s.offset + s.alreadyRead - e.fileStart, s.length - s.alreadyRead), e.usedBytes += s.length - s.alreadyRead, this.stream.logBufferLevel(), i.alreadyRead += s.length - s.alreadyRead, s.alreadyRead = s.length
          }
        }
        return i.alreadyRead === i.size ? i : null
      }, c.prototype.releaseItem = function(t) {
        var e = this.items[t];
        if (!e.data) return 0;
        this.itemsDataSize -= e.size, e.data = null, e.alreadyRead = 0;
        for (var i = 0; i < e.extents.length; i++) e.extents[i].alreadyRead = 0;
        return e.size
      }, c.prototype.processItems = function(t) {
        for (var e in this.items) {
          var i = this.items[e];
          this.getItem(i.id), t && !i.sent && (t(i), i.sent = !0, i.data = null)
        }
      }, c.prototype.hasItem = function(t) {
        for (var e in this.items) {
          var i = this.items[e];
          if (i.name === t) return i.id
        }
        return -1
      }, c.prototype.getMetaHandler = function() {
        return this.meta ? this.meta.hdlr.handler : null
      }, c.prototype.getPrimaryItem = function() {
        return this.meta && this.meta.pitm ? this.getItem(this.meta.pitm.item_id) : null
      }, c.prototype.itemToFragmentedTrackFile = function(t) {
        var e = t || {},
          i = null;
        if (null == (i = e.itemId ? this.getItem(e.itemId) : this.getPrimaryItem())) return null;
        var r = new c;
        r.discardMdatData = !1;
        var s = {
          type: i.type,
          description_boxes: i.properties.boxes
        };
        i.properties.ispe && (s.width = i.properties.ispe.image_width, s.height = i.properties.ispe.image_height);
        var n = r.addTrack(s);
        return n ? (r.addSample(n, i.data), r) : null
      }, c.prototype.write = function(t) {
        for (var e = 0; e < this.boxes.length; e++) this.boxes[e].write(t)
      }, c.prototype.createFragment = function(t, e, i) {
        var r = this.getTrackById(t),
          s = this.getSample(r, e);
        if (null == s) return s = r.samples[e], this.nextSeekPosition ? this.nextSeekPosition = Math.min(s.offset + s.alreadyRead, this.nextSeekPosition) : this.nextSeekPosition = r.samples[e].offset + s.alreadyRead, null;
        var n = i || new h;
        n.endianness = h.BIG_ENDIAN;
        var o = this.createSingleSampleMoof(s);
        o.write(n), o.trafs[0].truns[0].data_offset = o.size + 8, a.debug("MP4Box", "Adjusting data_offset with new value " + o.trafs[0].truns[0].data_offset), n.adjustUint32(o.trafs[0].truns[0].data_offset_position, o.trafs[0].truns[0].data_offset);
        var d = new p.mdatBox;
        return d.data = s.data, d.write(n), n
      }, c.writeInitializationSegment = function(t, e, i, r) {
        a.debug("ISOFile", "Generating initialization segment");
        var s, n = new h;
        n.endianness = h.BIG_ENDIAN, t.write(n);
        var o = e.add("mvex");
        for (i && o.add("mehd").set("fragment_duration", i), s = 0; s < e.traks.length; s++) o.add("trex").set("track_id", e.traks[s].tkhd.track_id).set("default_sample_description_index", 1).set("default_sample_duration", r).set("default_sample_size", 0).set("default_sample_flags", 65536);
        return e.write(n), n.buffer
      }, c.prototype.save = function(t) {
        var e = new h;
        e.endianness = h.BIG_ENDIAN, this.write(e), e.save(t)
      }, c.prototype.getBuffer = function() {
        var t = new h;
        return t.endianness = h.BIG_ENDIAN, this.write(t), t.buffer
      }, c.prototype.initializeSegmentation = function() {
        for (null === this.onSegment && a.warn("MP4Box", "No segmentation callback set!"), this.isFragmentationInitialized || (this.isFragmentationInitialized = !0, this.nextMoofNumber = 0, this.resetTables()), e = [], t = 0; t < this.fragmentedTracks.length; t++) {
          var t, e, i, r, s = new p.moovBox;
          s.mvhd = this.moov.mvhd, s.boxes.push(s.mvhd), i = this.getTrackById(this.fragmentedTracks[t].id), s.boxes.push(i), s.traks.push(i), (r = {}).id = i.tkhd.track_id, r.user = this.fragmentedTracks[t].user, r.buffer = c.writeInitializationSegment(this.ftyp, s, this.moov.mvex && this.moov.mvex.mehd ? this.moov.mvex.mehd.fragment_duration : void 0, this.moov.traks[t].samples.length > 0 ? this.moov.traks[t].samples[0].duration : 0), e.push(r)
        }
        return e
      }, p.Box.prototype.printHeader = function(t) {
        this.size += 8, this.size > 4294967296 && (this.size += 8), "uuid" === this.type && (this.size += 16), t.log(t.indent + "size:" + this.size), t.log(t.indent + "type:" + this.type)
      }, p.FullBox.prototype.printHeader = function(t) {
        this.size += 4, p.Box.prototype.printHeader.call(this, t), t.log(t.indent + "version:" + this.version), t.log(t.indent + "flags:" + this.flags)
      }, p.Box.prototype.print = function(t) {
        this.printHeader(t)
      }, p.ContainerBox.prototype.print = function(t) {
        this.printHeader(t);
        for (var e = 0; e < this.boxes.length; e++)
          if (this.boxes[e]) {
            var i = t.indent;
            t.indent += " ", this.boxes[e].print(t), t.indent = i
          }
      }, c.prototype.print = function(t) {
        t.indent = "";
        for (var e = 0; e < this.boxes.length; e++) this.boxes[e] && this.boxes[e].print(t)
      }, p.mvhdBox.prototype.print = function(t) {
        p.FullBox.prototype.printHeader.call(this, t), t.log(t.indent + "creation_time: " + this.creation_time), t.log(t.indent + "modification_time: " + this.modification_time), t.log(t.indent + "timescale: " + this.timescale), t.log(t.indent + "duration: " + this.duration), t.log(t.indent + "rate: " + this.rate), t.log(t.indent + "volume: " + (this.volume >> 8)), t.log(t.indent + "matrix: " + this.matrix.join(", ")), t.log(t.indent + "next_track_id: " + this.next_track_id)
      }, p.tkhdBox.prototype.print = function(t) {
        p.FullBox.prototype.printHeader.call(this, t), t.log(t.indent + "creation_time: " + this.creation_time), t.log(t.indent + "modification_time: " + this.modification_time), t.log(t.indent + "track_id: " + this.track_id), t.log(t.indent + "duration: " + this.duration), t.log(t.indent + "volume: " + (this.volume >> 8)), t.log(t.indent + "matrix: " + this.matrix.join(", ")), t.log(t.indent + "layer: " + this.layer), t.log(t.indent + "alternate_group: " + this.alternate_group), t.log(t.indent + "width: " + this.width), t.log(t.indent + "height: " + this.height)
      }, (m = {}).createFile = function(t, e) {
        var i = new c(e);
        return i.discardMdatData = !(void 0 === t || t), i
      }, B.createFile = m.createFile;
      var z = function() {
          function t(e) {
            v(this, t), this.data = new Uint8Array(e), this.idx = 0, this.size = e
          }
          return S(t, [{
            key: "getData",
            value: function() {
              if (this.idx !== this.size) throw Error("Mismatch between size reserved and sized used");
              return this.data.slice(0, this.idx)
            }
          }, {
            key: "writeUint8",
            value: function(t) {
              this.data.set([t], this.idx), this.idx += 1
            }
          }, {
            key: "writeUint16",
            value: function(t) {
              var e = new Uint16Array(1);
              e[0] = t;
              var i = new Uint8Array(e.buffer);
              this.data.set([i[1], i[0]], this.idx), this.idx += 2
            }
          }, {
            key: "writeUint8Array",
            value: function(t) {
              this.data.set(t, this.idx), this.idx += t.length
            }
          }]), t
        }(),
        k = function(t) {
          var e, i = 7;
          for (e = 0; e < t.SPS.length; e += 1) i += 2 + t.SPS[e].length;
          for (e = 0; e < t.PPS.length; e += 1) i += 2 + t.PPS[e].length;
          var r = new z(i);
          for (r.writeUint8(t.configurationVersion), r.writeUint8(t.AVCProfileIndication), r.writeUint8(t.profile_compatibility), r.writeUint8(t.AVCLevelIndication), r.writeUint8(t.lengthSizeMinusOne + 252), r.writeUint8(t.nb_SPS_nalus + 224), e = 0; e < t.SPS.length; e += 1) r.writeUint16(t.SPS[e].length), r.writeUint8Array(t.SPS[e].nalu);
          for (r.writeUint8(t.nb_PPS_nalus), e = 0; e < t.PPS.length; e += 1) r.writeUint16(t.PPS[e].length), r.writeUint8Array(t.PPS[e].nalu);
          return r.getData()
        },
        C = function(t, e, i) {
          var r = i.VideoDecoder,
            s = i.EncodedVideoChunk,
            n = i.debug;
          return new Promise(function(i, a) {
            n && console.info("Decoding video from", t);
            try {
              var o, h = B.createFile(),
                d = new r({
                  output: function(t) {
                    createImageBitmap(t, {
                      resizeQuality: "low"
                    }).then(function(r) {
                      e(r), t.close(), d.decodeQueueSize <= 0 && setTimeout(function() {
                        "closed" !== d.state && (d.close(), i())
                      }, 500)
                    })
                  },
                  error: function(t) {
                    console.error(t), a(t)
                  }
                });
              h.onReady = function(t) {
                if (t && t.videoTracks && t.videoTracks[0]) {
                  o = x(t.videoTracks, 1)[0].codec, n && console.info("Video with codec:", o);
                  var e = h.moov.traks[0].mdia.minf.stbl.stsd.entries[0].avcC,
                    i = k(e);
                  d.configure({
                    codec: o,
                    description: i
                  }), h.setExtractionOptions(t.videoTracks[0].id), h.start()
                } else a(Error("URL provided is not a valid mp4 video file."))
              }, h.onSamples = function(t, e, i) {
                for (var r = 0; r < i.length; r += 1) {
                  var n = i[r],
                    a = n.is_sync ? "key" : "delta",
                    o = new s({
                      type: a,
                      timestamp: n.cts,
                      duration: n.duration,
                      data: n.data
                    });
                  d.decode(o)
                }
              }, fetch(t).then(function(t) {
                var e = t.body.getReader(),
                  i = 0;
                return e.read().then(function t(r) {
                  var s = r.done,
                    n = r.value;
                  if (s) return h.flush(), null;
                  var a = n.buffer;
                  return a.fileStart = i, i += a.byteLength, h.appendBuffer(a), e.read().then(t)
                })
              })
            } catch (t) {
              a(t)
            }
          })
        },
        I = function(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
          return Math.abs(window.pageYOffset - t) < e
        },
        P = function() {
          var t, e;

          function i(t) {
            var e = this,
              r = t.src,
              s = t.scrollyVideoContainer,
              n = t.cover,
              a = void 0 === n || n,
              o = t.sticky,
              h = void 0 === o || o,
              d = t.full,
              l = t.trackScroll,
              p = t.lockScroll,
              f = void 0 === p || p,
              u = t.transitionSpeed,
              c = t.frameThreshold,
              m = t.useWebCodecs,
              _ = t.onReady,
              g = t.onChange,
              b = t.debug,
              w = void 0 !== b && b;
            if (v(this, i), ("undefined" == typeof document ? "undefined" : y(document)) !== "object") {
              console.error("ScrollyVideo must be initiated in a DOM context");
              return
            }
            if (!s) {
              console.error("scrollyVideoContainer must be a valid DOM object");
              return
            }
            if (!r) {
              console.error("Must provide valid video src to ScrollyVideo");
              return
            }
            if (s instanceof Element) this.container = s;
            else if ("string" == typeof s) {
              if (this.container = document.getElementById(s), !this.container) throw Error("scrollyVideoContainer must be a valid DOM object")
            } else throw Error("scrollyVideoContainer must be a valid DOM object");
            this.src = r, this.transitionSpeed = void 0 === u ? 8 : u, this.frameThreshold = void 0 === c ? .1 : c, this.useWebCodecs = void 0 === m || m, this.cover = a, this.sticky = h, this.trackScroll = void 0 === l || l, this.onReady = void 0 === _ ? function() {} : _, this.onChange = void 0 === g ? function() {} : g, this.debug = w, this.video = document.createElement("video"), this.video.src = r, this.video.preload = "auto", this.video.tabIndex = 0, this.video.autobuffer = !0, this.video.playsInline = !0, this.video.muted = !0, this.video.pause(), this.video.load(), this.videoPercentage = 0, this.container.appendChild(this.video), h && (this.container.style.display = "block", this.container.style.position = "sticky", this.container.style.top = "0"), (void 0 === d || d) && (this.container.style.width = "100%", this.container.style.height = "100vh", this.container.style.overflow = "hidden"), a && this.setCoverStyle(this.video);
            var S = new A().getEngine();
            this.isSafari = "WebKit" === S.name, w && this.isSafari && console.info("Safari browser detected"), this.currentTime = 0, this.targetTime = 0, this.canvas = null, this.context = null, this.frames = [], this.frameRate = 0;
            var x = function(t) {
              var e, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
              return function() {
                for (var r = arguments.length, s = Array(r), n = 0; n < r; n++) s[n] = arguments[n];
                var a = this;
                clearTimeout(e), e = setTimeout(function() {
                  t.apply(a, s)
                }, i)
              }
            }(function() {
              window.requestAnimationFrame(function() {
                e.setScrollPercent(e.videoPercentage)
              })
            }, 100);
            this.updateScrollPercentage = function(t) {
              var i = e.container.parentNode.getBoundingClientRect(),
                r = -i.top / (i.height - window.innerHeight);
              e.debug && console.info("ScrollyVideo scrolled to", r), null == e.targetScrollPosition ? (e.setTargetTimePercent(r, {
                jump: t
              }), e.onChange(r)) : I(e.targetScrollPosition) ? e.targetScrollPosition = null : f && null != e.targetScrollPosition && x()
            }, this.trackScroll ? (window.addEventListener("scroll", this.updateScrollPercentage), this.video.addEventListener("loadedmetadata", function() {
              return e.updateScrollPercentage(!0)
            }, {
              once: !0
            })) : this.video.addEventListener("loadedmetadata", function() {
              return e.setTargetTimePercent(0, {
                jump: !0
              })
            }, {
              once: !0
            }), this.resize = function() {
              e.debug && console.info("ScrollyVideo resizing..."), e.cover && e.setCoverStyle(e.canvas || e.video), e.paintCanvasFrame(Math.floor(e.currentTime * e.frameRate))
            }, window.addEventListener("resize", this.resize), this.video.addEventListener("progress", this.resize), this.decodeVideo()
          }
          return S(i, [{
            key: "setVideoPercentage",
            value: function(t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              this.videoPercentage !== t && (this.transitioningRaf && window.cancelAnimationFrame(this.transitioningRaf), this.videoPercentage = t, this.onChange(t), this.trackScroll && this.setScrollPercent(t), this.setTargetTimePercent(t, e))
            }
          }, {
            key: "setCoverStyle",
            value: function(t) {
              if (this.cover) {
                t.style.position = "absolute", t.style.top = "50%", t.style.left = "50%", t.style.transform = "translate(-50%, -50%)", t.style.minWidth = "101%", t.style.minHeight = "101%";
                var e = this.container.getBoundingClientRect(),
                  i = e.width,
                  r = e.height,
                  s = t.videoWidth || t.width,
                  n = t.videoHeight || t.height;
                this.debug && console.info("Container dimensions:", [i, r]), this.debug && console.info("Element dimensions:", [s, n]), i / r > s / n ? (t.style.width = "100%", t.style.height = "auto") : (t.style.height = "100%", t.style.width = "auto")
              }
            }
          }, {
            key: "decodeVideo",
            value: (t = g().mark(function t() {
              var e = this;
              return g().wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (this.useWebCodecs) {
                      t.next = 3;
                      break
                    }
                    return this.debug && console.warn("Cannot perform video decode: `useWebCodes` disabled"), t.abrupt("return");
                  case 3:
                    if (this.src) {
                      t.next = 6;
                      break
                    }
                    return this.debug && console.warn("Cannot perform video decode: no `src` found"), t.abrupt("return");
                  case 6:
                    var i, r, s;
                    return t.prev = 6, t.next = 9, i = this.src, r = function(t) {
                      e.frames.push(t)
                    }, s = this.debug, "function" == typeof VideoDecoder && "function" == typeof EncodedVideoChunk ? (s && console.info("WebCodecs is natively supported, using native version..."), C(i, r, {
                      VideoDecoder: VideoDecoder,
                      EncodedVideoChunk: EncodedVideoChunk,
                      debug: s
                    })) : (s && console.info("WebCodecs is not available in this browser."), Promise.resolve());
                  case 9:
                    t.next = 16;
                    break;
                  case 11:
                    t.prev = 11, t.t0 = t.catch(6), this.debug && console.error("Error encountered while decoding video", t.t0), this.frames = [], this.video.load();
                  case 16:
                    if (0 !== this.frames.length) {
                      t.next = 20;
                      break
                    }
                    return this.debug && console.error("No frames were received from webCodecs"), this.onReady(), t.abrupt("return");
                  case 20:
                    this.frameRate = this.frames.length / this.video.duration, this.debug && console.info("Received", this.frames.length, "frames"), this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.video.style.display = "none", this.container.appendChild(this.canvas), this.cover && this.setCoverStyle(this.canvas), this.paintCanvasFrame(Math.floor(this.currentTime * this.frameRate)), this.onReady();
                  case 29:
                  case "end":
                    return t.stop()
                }
              }, t, this, [
                [6, 11]
              ])
            }), e = function() {
              var e = this,
                i = arguments;
              return new Promise(function(r, s) {
                var n = t.apply(e, i);

                function a(t) {
                  b(n, r, s, a, o, "next", t)
                }

                function o(t) {
                  b(n, r, s, a, o, "throw", t)
                }
                a(void 0)
              })
            }, function() {
              return e.apply(this, arguments)
            })
          }, {
            key: "paintCanvasFrame",
            value: function(t) {
              var e = this.frames[t];
              if (this.canvas && e) {
                this.debug && console.info("Painting frame", t), this.canvas.width = e.width, this.canvas.height = e.height;
                var i = this.container.getBoundingClientRect();
                i.width / i.height > e.width / e.height ? (this.canvas.style.width = "100%", this.canvas.style.height = "auto") : (this.canvas.style.height = "100%", this.canvas.style.width = "auto"), this.context.drawImage(e, 0, 0, e.width, e.height)
              }
            }
          }, {
            key: "transitionToTargetTime",
            value: function(t) {
              var e = this,
                i = t.jump,
                r = t.transitionSpeed,
                s = void 0 === r ? this.transitionSpeed : r,
                n = t.easing,
                a = void 0 === n ? null : n;
              this.debug && console.info("Transitioning targetTime:", this.targetTime, "currentTime:", this.currentTime);
              var o = this.targetTime - this.currentTime,
                h = Math.abs(o),
                d = 1e3 * h,
                l = o > 0,
                p = function t(r) {
                  var n = r.startCurrentTime,
                    o = r.startTimestamp,
                    p = (r.timestamp - o) / d,
                    f = l ? e.currentTime >= e.targetTime : e.currentTime <= e.targetTime;
                  if (isNaN(e.targetTime) || Math.abs(e.targetTime - e.currentTime) < e.frameThreshold || f) {
                    e.video.pause(), e.transitioningRaf && (cancelAnimationFrame(e.transitioningRaf), e.transitioningRaf = null);
                    return
                  }
                  e.targetTime > e.video.duration && (e.targetTime = e.video.duration), e.targetTime < 0 && (e.targetTime = 0);
                  var u = e.targetTime - e.currentTime,
                    c = a && Number.isFinite(p) ? a(p) : null,
                    m = l ? n + c * Math.abs(h) * s : n - c * Math.abs(h) * s;
                  if (e.canvas) i ? e.currentTime = e.targetTime : c ? e.currentTime = m : e.currentTime += u / (256 / s), e.paintCanvasFrame(Math.floor(e.currentTime * e.frameRate));
                  else if (i || e.isSafari || !l) e.video.pause(), c ? e.currentTime = m : e.currentTime += u / (64 / s), i && (e.currentTime = e.targetTime), e.video.currentTime = e.currentTime;
                  else {
                    var _ = Math.max(Math.min(4 * u, s, 16), 1);
                    e.debug && console.info("ScrollyVideo playbackRate:", _), isNaN(_) || (e.video.playbackRate = _, e.video.play()), e.currentTime = e.video.currentTime
                  }
                  "function" == typeof requestAnimationFrame && (e.transitioningRaf = requestAnimationFrame(function(e) {
                    return t({
                      startCurrentTime: n,
                      startTimestamp: o,
                      timestamp: e
                    })
                  }))
                };
              "function" == typeof requestAnimationFrame && (this.transitioningRaf = requestAnimationFrame(function(t) {
                p({
                  startCurrentTime: e.currentTime,
                  startTimestamp: t,
                  timestamp: t
                })
              }))
            }
          }, {
            key: "setTargetTimePercent",
            value: function(t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                i = this.frames.length && this.frameRate ? this.frames.length / this.frameRate : this.video.duration;
              this.targetTime = Math.max(Math.min(t, 1), 0) * i, !e.jump && Math.abs(this.currentTime - this.targetTime) < this.frameThreshold || (this.canvas || this.video.paused || this.video.play(), this.transitionToTargetTime(e))
            }
          }, {
            key: "setScrollPercent",
            value: function(t) {
              if (!this.trackScroll) {
                console.warn("`setScrollPercent` requires enabled `trackScroll`");
                return
              }
              var e = this.container.parentNode.getBoundingClientRect(),
                i = e.top,
                r = e.height,
                s = i + window.pageYOffset + (r - window.innerHeight) * t;
              I(s) ? this.targetScrollPosition = null : (window.scrollTo({
                top: s,
                behavior: "smooth"
              }), this.targetScrollPosition = s)
            }
          }, {
            key: "destroy",
            value: function() {
              this.debug && console.info("Destroying ScrollyVideo"), this.trackScroll && window.removeEventListener("scroll", this.updateScrollPercentage), window.removeEventListener("resize", this.resize), this.container && (this.container.innerHTML = "")
            }
          }]), i
        }(),
        F = (0, _.forwardRef)(function(t, e) {
          var i = t.src,
            r = t.transitionSpeed,
            s = t.frameThreshold,
            n = t.cover,
            a = t.sticky,
            o = t.full,
            h = t.trackScroll,
            d = t.lockScroll,
            l = t.useWebCodecs,
            p = t.videoPercentage,
            f = t.debug,
            u = t.onReady,
            c = t.onChange,
            m = (0, _.useRef)(null),
            g = (0, _.useRef)(null),
            y = x((0, _.useState)(null), 2),
            b = y[0],
            v = y[1],
            w = (0, _.useRef)(p);
          w.current = p;
          var S = (0, _.useRef)(u);
          S.current = u;
          var U = (0, _.useRef)(c);
          return U.current = c, (0, _.useEffect)(function() {
            if (m.current) {
              g.current && g.current.destroy && g.current.destroy();
              var t = new P({
                scrollyVideoContainer: m.current,
                src: i,
                transitionSpeed: r,
                frameThreshold: s,
                cover: n,
                sticky: a,
                full: o,
                trackScroll: h,
                lockScroll: d,
                useWebCodecs: l,
                debug: f,
                onReady: S.current,
                onChange: U.current,
                videoPercentage: w.current
              });
              v(t), g.current = t
            }
          }, [i, r, s, n, a, o, h, d, l, f]), (0, _.useEffect)(function() {
            g.current && "number" == typeof p && p >= 0 && p <= 1 && g.current.setVideoPercentage(p)
          }, [p]), (0, _.useEffect)(function() {
            return function() {
              g.current && g.current.destroy && g.current.destroy()
            }
          }, []), (0, _.useImperativeHandle)(e, function() {
            return {
              setVideoPercentage: g.current ? g.current.setVideoPercentage.bind(b) : function() {}
            }
          }, [b]), _.createElement("div", {
            ref: m,
            "data-scrolly-container": !0
          })
        })
    }
  }
]);
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7746], {
    8: function(e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push(["/faq", function() {
        return n(7e3)
      }])
    },
    7062: function(e, t, n) {
      "use strict";
      n.d(t, {
        x: function() {
          return i
        }
      });
      var r = n(5893);

      function i(e) {
        let {
          activeFilter: t,
          filters: n,
          onChange: i
        } = e;
        return (0, r.jsxs)("div", {
          className: "flex gap-x-[1.8rem] mt-12 lg:mt-[2.4rem] overflow-x-auto u-nsb w-full lg:flex-wrap",
          children: [(0, r.jsx)("div", {
            className: "shrink-0 grow-0 pl-[1.2rem] lg:pl-[2.3rem] font-body-mono font-12 leading-[200%] uppercase tracking-0.03 text-dark_grey cursor-pointer ".concat(null === t ? "opacity-100" : "opacity-50"),
            onClick: () => i(null),
            children: "All"
          }), n.map((e, n) => (0, r.jsx)("div", {
            className: "font-body-mono whitespace-nowrap font-12 leading-[200%] uppercase tracking-0.03 text-dark_grey hover:opacity-100 transition-opacity duration-500 cursor-pointer last-of-type:pr-[1.2rem] lg:last-of-type:pr-[2.3rem] ".concat(t === e ? "opacity-100" : "opacity-50"),
            onClick: () => i(e),
            children: e
          }, "".concat(e, "-").concat(n)))]
        })
      }
    },
    1645: function(e, t, n) {
      "use strict";
      n.d(t, {
        Z: function() {
          return x
        }
      });
      var r = n(5893),
        i = n(7294),
        a = n(4599),
        s = n.n(a),
        o = n(4715),
        l = n(6038),
        c = n(9139);

      function u(e) {
        var t;
        let {
          question: n
        } = e, a = (0, i.useRef)(null), u = (0, i.useRef)(null), d = (0, i.useRef)(null), m = (0, i.useRef)(null), [p, f] = (0, i.useState)(!1), [x, h] = (0, i.useState)(0);
        return (0, o.V)(() => {
          if (!m.current) return;
          let e = () => {
            l.ZP.set(m.current, {
              height: "auto"
            }), h(m.current.offsetHeight), l.ZP.set(m.current, {
              height: "0"
            })
          };
          return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
        }, {
          dependencies: [m]
        }), (0, o.V)(() => {
          a.current && (l.ZP.to(a.current, {
            scale: p ? 0 : 1,
            duration: .4
          }), l.ZP.to(u.current, {
            marginBottom: p ? "2.3em" : "0em",
            duration: p ? .4 : .25,
            delay: p ? 0 : .15
          }), l.ZP.to(m.current, {
            height: p ? x : "0px",
            duration: p ? .25 : .3,
            delay: p ? .15 : 0,
            opacity: p ? 1 : 0
          }))
        }, {
          dependencies: [a, p, x]
        }), (0, r.jsxs)("div", {
          ref: d,
          className: s().questionContainer,
          onClick: () => f(!p),
          children: [(0, r.jsxs)("div", {
            className: s().fixedContent,
            ref: u,
            children: [(0, r.jsx)("h4", {
              children: n.question
            }), (0, r.jsxs)("div", {
              children: [(0, r.jsx)("span", {
                ref: a
              }), (0, r.jsx)("span", {})]
            })]
          }), (0, r.jsx)("div", {
            ref: m,
            className: s().questionContent,
            children: (0, r.jsx)(c.Z, {
              content: null !== (t = n.content) && void 0 !== t ? t : []
            })
          })]
        })
      }
      var d = n(7062),
        m = n(1664),
        p = n.n(m),
        f = n(2289);

      function x(e) {
        let {
          questions: t
        } = e, [n, a] = (0, i.useState)(null), o = Array.from(new Set(t.flatMap(e => e.tags.map(e => e.name)))), l = function(e, t) {
          if (null === t) return e;
          let n = t.toLowerCase();
          return e.filter(e => e.tags.find(e => e.name.toLowerCase() === n))
        }(t, n);
        return (0, r.jsxs)("div", {
          className: s().FAQsOverlayContainer,
          children: [(0, r.jsx)(p(), {
            className: s().closureButton,
            href: "/customer-portal/my-pebble",
            children: (0, r.jsx)("svg", {
              viewBox: "0 0 17 14",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, r.jsx)("path", {
                d: "M6.93319 1L1.5 7.00008M1.5 7.00008L6.93319 13M1.5 7.00008H16.5",
                stroke: "#575349"
              })
            })
          }), (0, r.jsx)("h1", {
            className: s().title,
            children: "Frequently asked questions"
          }), (0, r.jsx)(f.Z, {
            width: {
              desktop: "70.92%",
              mobile: "89.33%"
            },
            colorCross: "#575349",
            colorLine: "#edeceb",
            marginBottom: {
              desktop: "2.4em",
              mobile: "1.4em"
            },
            marginTop: {
              desktop: "4.4em",
              mobile: "4.4em"
            }
          }), (0, r.jsx)("div", {
            className: "w-full lg:w-auto flex-shrink-0",
            children: (0, r.jsx)(d.x, {
              activeFilter: n,
              filters: o,
              onChange: a
            })
          }), (0, r.jsx)("div", {
            className: s().questionsContainer,
            children: l.map(e => (0, r.jsx)(u, {
              question: e
            }, e.question))
          })]
        })
      }
    },
    8833: function(e, t, n) {
      "use strict";
      var r = n(5893),
        i = n(9008),
        a = n.n(i),
        s = n(2881);
      t.Z = e => {
        var t;
        let {
          data: n
        } = e, i = n.metaTitle ? n.metaTitle : n.title ? "Blend | ".concat(n.title) : "Pebble Mobility", o = (null === (t = n.metaImage) || void 0 === t ? void 0 : t.data) ? {
          url: s.$N(n.metaImage.data.attributes.url),
          width: n.metaImage.data.attributes.width,
          height: n.metaImage.data.attributes.height,
          type: n.metaImage.data.attributes.mime
        } : void 0;
        return (0, r.jsxs)(a(), {
          children: [(0, r.jsx)("title", {
            children: i
          }), (0, r.jsx)("meta", {
            property: "og:title",
            content: i
          }, "title"), (0, r.jsx)("meta", {
            property: "og:site_name",
            content: "Pebble"
          }), n.metaDescription && (0, r.jsx)("meta", {
            name: "description",
            content: n.metaDescription
          }), o && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("meta", {
              property: "og:image",
              content: o.url
            }), (0, r.jsx)("meta", {
              property: "og:image:type",
              content: o.type
            }), o.width ? (0, r.jsx)("meta", {
              property: "og:image:width",
              content: o.width
            }) : null, o.height ? (0, r.jsx)("meta", {
              property: "og:image:height",
              content: o.height
            }) : null]
          }), (0, r.jsx)("meta", {
            name: "twitter:card",
            content: "summary_large_image"
          }), (0, r.jsx)("meta", {
            name: "theme-color",
            content: "#d7d1c6"
          }), (0, r.jsx)("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1, maximum-scale=1"
          })]
        })
      }
    },
    2289: function(e, t, n) {
      "use strict";
      n.d(t, {
        Z: function() {
          return o
        }
      });
      var r = n(5893),
        i = n(987),
        a = n(247),
        s = n.n(a);

      function o(e) {
        let {
          width: t,
          marginBottom: n,
          marginTop: a,
          colorLine: o,
          colorCross: l
        } = e, c = "Desktop" === (0, i.s)(e => e.currentDevice), u = e => e ? c ? e.desktop : e.mobile : "0";
        return (0, r.jsxs)("div", {
          className: s().separateLine,
          style: {
            borderBottom: "1px solid ".concat(o),
            marginBottom: u(n),
            marginTop: u(a),
            width: u(t)
          },
          children: [(0, r.jsx)("span", {
            style: {
              backgroundColor: l
            }
          }), (0, r.jsx)("span", {
            style: {
              backgroundColor: l
            }
          })]
        })
      }
    },
    7e3: function(e, t, n) {
      "use strict";
      n.r(t), n.d(t, {
        __N_SSP: function() {
          return l
        },
        default: function() {
          return c
        }
      });
      var r = n(5893),
        i = n(3158),
        a = n(1645),
        s = n(8833),
        o = n(6217),
        l = !0;

      function c(e) {
        let {
          footer: t,
          faqs: n
        } = e;
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(s.Z, {
            data: {
              metaTitle: "FAQ | Pebble"
            }
          }), (0, r.jsxs)(o.Z, {
            index: 0,
            translated: !1,
            children: [(0, r.jsx)("section", {
              style: {
                paddingBlockStart: "10em"
              },
              children: (0, r.jsx)(a.Z, {
                questions: n
              })
            }), t && (0, r.jsx)(i.Z, {
              data: t,
              version: "default"
            })]
          })]
        })
      }
    },
    4599: function(e) {
      e.exports = {
        FAQsOverlayContainer: "faqsOverlay_FAQsOverlayContainer__9URBc",
        closureButton: "faqsOverlay_closureButton__2j8t1",
        title: "faqsOverlay_title___McXm",
        filtersContainer: "faqsOverlay_filtersContainer__WvhWY",
        questionsContainer: "faqsOverlay_questionsContainer__mG_kG",
        questionContainer: "faqsOverlay_questionContainer__CLjca",
        questionContent: "faqsOverlay_questionContent__X7R1N",
        fixedContent: "faqsOverlay_fixedContent__F_dTi",
        content: "faqsOverlay_content__iJIRb"
      }
    },
    247: function(e) {
      e.exports = {
        separateLine: "separateLine_separateLine__XZlUb"
      }
    },
    9008: function(e, t, n) {
      e.exports = n(3867)
    }
  },
  function(e) {
    e.O(0, [1894, 6217, 3158, 2888, 9774, 179], function() {
      return e(e.s = 8)
    }), _N_E = e.O()
  }
]);
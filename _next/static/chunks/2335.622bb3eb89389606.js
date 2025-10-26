"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2335], {
    8877: function(e, t, r) {
      r.d(t, {
        V: function() {
          return a
        }
      });
      var l = r(5893);
      r(3205);
      var n = r(1800);

      function a(e) {
        let {
          label: t,
          as: r = "button",
          mode: a,
          ...i
        } = e;
        return (0, l.jsxs)(r, {
          ...i,
          className: "group inline-flex justify-start items-center cursor-pointer",
          children: [(0, l.jsx)("div", {
            className: "flex justify-center items-center w-[3.6rem] h-[3.6rem] ".concat("white" === a ? "bg-white" : "bg-light_beige", " rounded-10 mr-[0.9rem] transition-transform duration-global ease-out group-hover:scale-105"),
            children: (0, l.jsx)("div", {
              className: "svg-wrapper w-[1.1rem] h-[0.85rem]",
              children: (0, l.jsx)(n.Z, {})
            })
          }), (0, l.jsx)("div", {
            className: "font-body-mono text-10 leading-[180%] tracking-[0.05rem] uppercase transition-opacity duration-global ease-out group-hover:opacity-50 ".concat("white" === a ? "text-white" : "text-dark_grey"),
            children: t
          })]
        })
      }
    },
    6209: function(e, t, r) {
      var l = r(5893);
      t.Z = e => {
        let {
          children: t,
          size: r = "small",
          blur: n = !0
        } = e;
        return (0, l.jsx)("div", {
          className: "rounded-12 p-[1.8rem] lg:p-40\n  ".concat(n ? "backdrop-blur-[105px] text-white" : "bg-white text-dark_grey", "\n  ").concat("small" === r && n ? "w-[26.4rem] lg:w-[31rem]" : "", "\n  ").concat("small" !== r || n ? "" : "w-full md:w-[26.4rem] lg:w-[31rem]", "\n  ").concat("small" !== r && n ? "w-[26.4rem] lg:w-[36.8rem]" : "", "\n  ").concat("small" === r || n ? "" : "w-full md:w-[26.4rem] lg:w-[36.8rem]", "\n  "),
          style: {
            backgroundColor: "#d9d9d921"
          },
          children: t
        })
      }
    },
    2335: function(e, t, r) {
      r.r(t), r.d(t, {
        default: function() {
          return v
        }
      });
      var l = r(5893),
        n = r(8877),
        a = r(6038),
        i = r(6546),
        c = r(7294),
        o = e => {
          let {
            src: t,
            children: n
          } = e, a = (0, c.useRef)(null), o = (0, c.useRef)(null), s = (0, c.useRef)(null), d = (0, c.useRef)(null), u = (0, c.useRef)(null), m = (0, c.useRef)(null), [h, f] = (0, c.useState)(!1), g = (0, c.useRef)(null);
          return (0, c.useEffect)(() => {
            if (!h) {
              let e = r(1483);
              d.current.load(), u.current = new e.default({
                src: t,
                scrollyVideoContainer: m.current,
                frameThreshold: .6,
                sticky: !1,
                trackScroll: !1
              });
              return
            }
            return a.current.style.setProperty("--video-parent-height", 24 * d.current.duration + 200 + "vh"), o.current.style.setProperty("--video-height", 24 * d.current.duration + 100 + "vh"), g.current = i.ScrollTrigger.create({
              trigger: o.current,
              start: "top top",
              end: "bottom bottom",
              scrub: !0,
              onUpdate: () => {
                if (!g.current || !d.current) return;
                let e = g.current.progress;
                u.current.setTargetTimePercent(e)
              }
            }), () => {
              g.current && g.current.kill(), g.current && (g.current = null)
            }
          }, [h]), (0, l.jsxs)("div", {
            ref: a,
            className: "sticky top-0 px-half-container-mobile md:px-half-container -mt-[100vh] h-[var(--video-parent-height)]",
            children: [(0, l.jsx)("div", {
              ref: o,
              className: "absolute top-0 left-0 w-full mt-[100vh] h-[var(--video-height)]"
            }), (0, l.jsxs)("div", {
              ref: s,
              className: "sticky top-half-container-mobile md:top-half-container w-full h-[calc(100vh_-_var(--padding-half-container-mobile)*2)] md:h-[calc(100vh_-_var(--padding-half-container)*2)] rounded-18 overflow-hidden bg-white",
              children: [n, (0, l.jsxs)("div", {
                className: "scrolly-wrapper absolute top-0 left-0 w-full h-full",
                children: [(0, l.jsx)("video", {
                  onLoadedMetadata: () => {
                    f(!0)
                  },
                  ref: d,
                  className: "w-full h-full object-cover hidden",
                  muted: !0,
                  playsInline: !0,
                  preload: "auto",
                  tabIndex: 0,
                  children: (0, l.jsx)("source", {
                    src: t,
                    type: "video/mp4"
                  })
                }), (0, l.jsx)("div", {
                  ref: m
                })]
              })]
            })]
          })
        },
        s = r(188),
        d = r(6209),
        u = r(7825),
        m = r(146),
        h = r(1100),
        f = r(6620),
        g = r(2881);
      let p = e => {
        let {
          item: t,
          sticky: r = !1,
          blur: o = !0
        } = e, u = (0, c.useRef)(null), m = (0, c.useRef)(null), h = (0, c.useRef)(null);
        return (0, c.useEffect)(() => {
          if (m.current) {
            if (o) {
              h.current && (h.current.kill(), h.current = null);
              let e = a.p8.fromTo(m.current, {
                yPercent: 100 + (0, s.z6)(10)
              }, {
                yPercent: 0,
                ease: "power3.inOut",
                duration: 1
              });
              h.current = i.ScrollTrigger.create({
                trigger: u.current,
                animation: e,
                start: r ? "150% bottom" : "95% bottom"
              })
            } else a.p8.set(m.current, {
              yPercent: 0
            }), h.current && (h.current.kill(), h.current = null);
            return () => {
              h.current && (h.current.kill(), h.current = null)
            }
          }
        }, [o]), t.text && (0, l.jsx)("div", {
          ref: u,
          className: "flex justify-end items-end w-full relative overflow-hidden h-full ".concat(r ? "px-10 pb-10" : "p-0 md:px-10 md:pb-10", " z-1"),
          children: (0, l.jsx)("div", {
            ref: m,
            className: "flex justify-end items-end w-full",
            children: (0, l.jsxs)(d.Z, {
              size: "large",
              blur: o,
              children: [t.subtitle && (0, l.jsx)("div", {
                className: "font-body-mobo text-10 leading-[180%] tracking-[0.05rem] uppercase mb-[0.8rem] md:mb-[1.2rem]",
                children: t.subtitle
              }), (0, l.jsx)("div", {
                className: "text-17 -tracking-[0.017rem] leading-[141%] lg:text-20 lg:leading-[130%] lg:-tracking-[0.06rem]",
                children: t.text.split("\n").map(e => (0, l.jsx)("p", {
                  children: e
                }, e))
              }), t.link && (0, l.jsx)("div", {
                className: "mt-[3.2rem] md:mt-[2.2rem]",
                children: (0, l.jsx)(n.V, {
                  as: f.U,
                  mode: o ? "white" : "dark",
                  data: t.link,
                  label: t.link.title,
                  popup: t.openLinkAsPopup
                })
              })]
            })
          })
        })
      };
      var v = e => {
        let {
          item: t,
          items: r,
          index: n
        } = e, s = (0, c.useRef)(null), d = (0, c.useRef)(null), f = (0, u.a)("(max-width: 767px)"), v = t.text, x = (0, m.o)(e => e.animationContext);
        return (0, c.useEffect)(() => {
          !s.current || window.innerWidth <= 1024 && v || x.add(() => {
            i.ScrollTrigger.create({
              trigger: s.current,
              start: "top+=".concat(window.innerHeight, " bottom"),
              end: () => "bottom bottom",
              animation: a.p8.fromTo(d.current, {
                scale: 1.1
              }, {
                scale: 1,
                ease: "none"
              }),
              scrub: !f || 1.1
            }), i.ScrollTrigger.create({
              trigger: s.current,
              start: "bottom 100%",
              end: "bottom top",
              animation: a.p8.to(d.current, {
                yPercent: 10,
                ease: "none"
              }),
              scrub: !0
            })
          })
        }, []), (0, l.jsx)("section", {
          style: {
            zIndex: r.length - n
          },
          className: "relative w-full ".concat("content.image-content" === t.__component ? "pb-[13.4rem] py-half-container-mobile md:py-container px-half-container-mobile md:px-half-container md:pb-half-container" : "", " ").concat("White" === t.backgroundColor.color ? "bg-white" : "Beige light" === t.backgroundColor.color ? "bg-light_beige" : "Beige dark" === t.backgroundColor.color ? "bg-dark_beige" : "Grey dark" === t.backgroundColor.color ? "bg-dark_grey" : "bg-green"),
          children: t.video.data ? t.video.data && (0, l.jsxs)(o, {
            src: g.$N(t.video.data.attributes.url),
            children: [t.image.data && (0, l.jsx)("div", {
              className: "w-full h-screen bg-black",
              children: (0, l.jsx)(h.p, {
                image: t.image.data,
                sizes: "(max-width: 768px) 96vw, 96vw",
                fallbackAlt: "",
                priority: !0,
                loading: "eager",
                className: "w-full h-full object-cover"
              })
            }), (0, l.jsx)(p, {
              item: t,
              sticky: !0
            })]
          }) : (0, l.jsx)("div", {
            ref: s,
            className: "".concat(v ? "relative md:h-[60rem] lg:h-[90rem] xl:sticky xl:top-0 xl:h-[200vh] xl:-mt-[100vh]" : "sticky top-0 h-[200vh] -mt-[100vh]"),
            children: (0, l.jsxs)("div", {
              className: "".concat(v ? "xl:sticky h-full xl:top-half-container w-full xl:h-[calc(100vh_-_var(--padding-half-container)*2)]" : "sticky top-half-container-mobile h-[calc(100vh_-_var(--padding-half-container-mobile)*2)] md:top-half-container w-full md:h-[calc(100vh_-_var(--padding-half-container)*2)]"),
              children: [(0, l.jsx)("div", {
                className: "relative w-full ".concat(v ? "h-0 pt-[66.86%]" : "h-full", " md:pt-0 md:absolute md:top-0 md:left-0 md:h-full overflow-hidden rounded-15"),
                children: (0, l.jsx)("div", {
                  ref: d,
                  className: "absolute top-0 left-0 w-full h-full will-change-transform",
                  children: (0, l.jsx)(h.p, {
                    sizes: "(max-width: 768px) 96vw, 96vw",
                    className: "object-cover",
                    image: t.image.data,
                    fallbackAlt: "",
                    fill: !0
                  })
                })
              }), (0, l.jsx)("div", {
                className: "relative w-full md:h-full mt-[0.6rem] md:-mt-10",
                children: (0, l.jsx)(p, {
                  item: t,
                  blur: !f
                })
              })]
            })
          })
        })
      }
    },
    1800: function(e, t, r) {
      var l = r(5893);
      t.Z = e => {
        let {
          stroke: t = "#575349"
        } = e;
        return (0, l.jsx)("svg", {
          width: "11",
          height: "9",
          viewBox: "0 0 11 9",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, l.jsx)("path", {
            id: "Vector 201",
            d: "M0 4.5H9.5M9.5 4.5L5.9 1M9.5 4.5L5.9 8",
            stroke: t
          })
        })
      }
    }
  }
]);
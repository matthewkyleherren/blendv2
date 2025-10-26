"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7885], {
    8616: function(e, t, n) {
      var r = n(5893),
        c = n(7294),
        o = n(3205),
        l = n(6038);
      let a = (0, c.forwardRef)((e, t) => {
        let {
          children: a,
          href: i,
          target: u,
          mode: s = "white",
          ...g
        } = e, d = (0, c.useRef)(null), p = (0, c.useRef)(null), m = (0, c.useRef)(null);
        (0, c.useImperativeHandle)(t, () => ({
          getChars: f,
          getAnimation: h
        }));
        let f = () => p.current,
          h = () => x(),
          x = () => (m.current = l.p8.effects.blink(p.current), m.current),
          C = () => {
            x()
          };
        return (0, c.useEffect)(() => (d.current.addEventListener("mouseenter", C), () => {
          d.current && d.current.removeEventListener("mouseenter", C)
        }), []), (0, c.useEffect)(() => {
          let e = n(2392);
          p.current = new e({
            target: d.current,
            by: "chars"
          })[0].chars
        }, []), (0, r.jsx)("div", {
          ref: d,
          children: (0, r.jsx)(o.Z, {
            href: i,
            target: u,
            className: "button-" + s + " inline-block py-[2.4rem] px-[2.5rem] rounded-[1rem] text-10 leading-[180%] tracking-[0.05rem] uppercase xl:transition-transform xl:duration-global xl:ease-out xl:hover:scale-[1.04]",
            ...g,
            children: a
          })
        })
      });
      a.displayName = "Button", t.Z = a
    },
    7885: function(e, t, n) {
      n.r(t);
      var r = n(5893),
        c = n(7294),
        o = n(6546),
        l = n(6038),
        a = n(753),
        i = n(8616),
        u = n(188),
        s = n(7118),
        g = n(7825),
        d = n(2881);
      let p = e => {
        let {
          isWhite: t,
          children: n,
          zIndex: c
        } = e;
        return t ? (0, r.jsx)(s.Z, {
          zIndex: c,
          children: n
        }) : n
      };
      t.default = e => {
        var t, n;
        let {
          item: s,
          items: f,
          index: h
        } = e, x = (0, c.useRef)(null), C = (0, c.useRef)(null), b = (0, c.useRef)(null), k = (0, c.useRef)(null), y = (0, c.useRef)(null), v = (0, g.a)(), R = (0, c.useMemo)(() => (0, r.jsx)(m, {
          ref: b,
          firstContent: s.content,
          secondContent: !!s.secondContent && s.secondContent
        }), [s.content, s.secondContent]), w = () => {
          v ? (l.p8.set(C.current, {
            y: 0
          }), k.current.disable(), S()) : (j(), k.current.enable())
        }, S = () => {
          if (y.current && (y.current.kill(), y.current = null), l.p8.set(b.current.getFirstContent(), {
              opacity: 1
            }), b.current.getSecondContent()) {
            let e = l.p8.timeline({
              defaults: {
                duration: .4,
                ease: "power2.out"
              },
              paused: !0
            });
            e.to(b.current.getFirstContent(), {
              opacity: 0
            }, 0).to(b.current.getSecondContent(), {
              opacity: 1
            }, .3);
            let t = l.p8.timeline({
              defaults: {
                duration: .4,
                ease: "power2.out"
              },
              paused: !0
            });
            t.to(b.current.getSecondContent(), {
              opacity: 0
            }, 0).to(b.current.getFirstContent(), {
              opacity: 1
            }, .3), l.p8.set(b.current.getSecondContent(), {
              opacity: 0
            }), y.current = o.ScrollTrigger.create({
              trigger: b.current.textRef.current,
              start: "top bottom-=55%",
              onEnter: () => {
                (0, u.RE)(t), e.restart()
              },
              onLeaveBack: () => {
                (0, u.RE)(e), t.restart()
              }
            })
          }
        }, j = () => {
          y.current && (y.current.kill(), y.current = null), l.p8.set(b.current.getFirstContent(), {
            opacity: .4
          }), b.current.getSecondContent() && l.p8.set(b.current.getSecondContent(), {
            opacity: 0
          });
          let e = l.p8.timeline();
          e.to(b.current.getFirstContent(), {
            opacity: 1,
            stagger: b.current.getSecondContent() ? .1 * Math.min(1, b.current.getSecondContent().length / b.current.getFirstContent().length) : .1
          }, 0), b.current.getSecondContent() && e.to(b.current.getFirstContent(), {
            opacity: 0,
            stagger: b.current.getSecondContent() ? .1 * Math.min(1, b.current.getSecondContent().length / b.current.getFirstContent().length) : .1
          }).to(b.current.getSecondContent(), {
            opacity: 1,
            stagger: .1
          }, "<".concat(2 * Math.max(1, b.current.getFirstContent().length / b.current.getSecondContent().length) * 15, "%")), y.current = o.ScrollTrigger.create({
            trigger: b.current.textRef.current,
            start: "top bottom-=10%",
            end: b.current.getSecondContent() ? "top -3%" : "top 35%",
            animation: e,
            invalidateOnRefresh: !0,
            scrub: !0
          })
        };
        return (0, c.useEffect)(() => {
          v ? (l.p8.set(C.current, {
            y: 0
          }), k.current.disable(), S()) : !1 === v && (j(), k.current.enable())
        }, [v]), (0, c.useEffect)(() => {
          let e = l.p8.fromTo(C.current, {
            y: "-15rem"
          }, {
            y: 0,
            ease: "none"
          });
          return k.current = o.ScrollTrigger.create({
            trigger: x.current,
            start: "top bottom",
            end: "top 20%",
            animation: e,
            scrub: !0
          }), w(), () => {
            y.current && (y.current.kill(), y.current = null)
          }
        }, []), (0, c.useEffect)(() => {
          w()
        }, [v]), (0, r.jsx)(p, {
          zIndex: f.length - h,
          isWhite: "White" === s.backgroundColor.color,
          children: (0, r.jsx)("section", {
            "data-anchor": s.addAnchor && (0, u.lV)(s.anchorName),
            ref: x,
            style: {
              zIndex: f.length - h
            },
            className: "simple-content relative px-container grid grid-cols-6 lg:grid-cols-12 first-letter\n          ".concat("content.simple-content" !== s.__component || s.smallSpacings ? "" : "py-[17rem] lg:py-[32.9rem]", "\n          ").concat("content.simple-content" === s.__component && s.smallSpacings ? "pt-[17rem] pb-[11rem] lg:pt-[22rem] lg:pb-[15rem]" : "", "\n          ").concat("content.simple-content-two-texts" === s.__component ? "py-[18.2rem] lg:py-[35.5rem]" : "", "\n          ").concat("content.simple-content-with-button" === s.__component ? "py-[14.2rem] lg:py-[19.8rem]" : "", "\n          ").concat("content.simple-content-with-paragraph" === s.__component ? "py-[15rem] lg:py-[29.8rem]" : "", "\n          ").concat("White" === s.backgroundColor.color ? "bg-white" : "Beige light" === s.backgroundColor.color ? "bg-light_beige" : "Beige dark" === s.backgroundColor.color ? "bg-dark_beige" : "Grey dark" === s.backgroundColor.color ? "bg-dark_grey" : "bg-green", " \n          ").concat("White" === s.backgroundColor.color || "Beige light" === s.backgroundColor.color && (s.paragraph || !s.secondContent) ? "text-dark_grey" : "Beige light" === s.backgroundColor.color ? "text-dark_beige" : "text-light_beige", "\n          "),
            children: (0, r.jsxs)("div", {
              ref: C,
              className: "col-span-full ".concat("left" !== s.textAlignment && s.textAlignment ? "md:col-start-2 md:col-end-6 lg:col-start-3 lg:col-end-11 text-center" : (null === (t = s.link) || void 0 === t ? void 0 : t.title) ? "col-span-full flex flex-col justify-center items-center text-center" : "md:col-span-4 lg:col-start-2 lg:col-end-9"),
              children: [(0, r.jsx)("div", {
                className: "relative heading-36 md:heading-60 ".concat((null === (n = s.link) || void 0 === n ? void 0 : n.title) ? "w-[89%] md:w-[37.5%]" : ""),
                children: R
              }), (s.paragraph || s.addSeparator) && (0, r.jsx)("div", {
                className: "w-[20rem] mt-[4rem] ".concat("center" === s.textAlignment && "mx-auto"),
                children: (0, r.jsx)(a.Z, {
                  mode: ["White", "Beige light"].indexOf(s.backgroundColor.color) > -1 ? "dark" : "light"
                })
              }), s.paragraph && (0, r.jsx)("div", {
                className: "w-full text-16 md:w-[83%] lg:w-[43%] ".concat("center" === s.textAlignment && "mx-auto", " mt-[4rem]"),
                children: s.paragraph.split("\n").map(e => (0, r.jsx)("p", {
                  children: e
                }, e))
              }), s.link && (0, r.jsx)("div", {
                className: "mt-[2.4rem] md:mt-32",
                children: (0, r.jsx)(i.Z, {
                  href: d.sI(s.link),
                  children: s.link.title
                })
              })]
            })
          })
        })
      };
      let m = (0, c.forwardRef)((e, t) => {
        let {
          firstContent: o,
          secondContent: a
        } = e, i = (0, c.useRef)(null), u = (0, c.useRef)(null), s = (0, c.useRef)(null), g = (0, c.useRef)(null);
        (0, c.useImperativeHandle)(t, () => ({
          textRef: i,
          getFirstContent: d,
          getSecondContent: p
        }));
        let d = () => s.current,
          p = () => g.current;
        return (0, c.useEffect)(() => {
          let e = n(2392);
          s.current = new e({
            target: i.current
          })[0].chars, l.p8.set(s.current, {
            opacity: .3
          }), u.current && (g.current = new e({
            target: u.current
          })[0].chars, g.current && l.p8.set(g.current, {
            opacity: 0
          }))
        }, []), (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("div", {
            ref: i,
            children: o.split("\n").map(e => (0, r.jsx)("p", {
              children: e
            }, e))
          }), a && (0, r.jsx)("div", {
            ref: u,
            className: "absolute top-0 left-0 w-full h-full",
            children: a.split("\n").map(e => (0, r.jsx)("p", {
              children: e
            }, e))
          })]
        })
      })
    },
    7118: function(e, t, n) {
      var r = n(5893),
        c = n(7294),
        o = n(6546),
        l = n(146),
        a = n(188);
      t.Z = e => {
        let {
          children: t,
          sticky: n = !1,
          zIndex: i = 0
        } = e, u = (0, c.useRef)(null), s = (0, c.useRef)(null), g = (0, l.o)(e => e.headerLoaded), d = (0, l.o)(e => e.setHeaderDark);
        return (0, c.useEffect)(() => {
          if (!g) return;
          let e = document.querySelector(".header");
          return n ? s.current = o.ScrollTrigger.create({
            trigger: u.current,
            start: () => "top+=".concat(window.innerHeight, " top+=").concat(e.getBoundingClientRect().bottom),
            end: () => "bottom-=".concat((0, a.z6)(10), " top+=").concat(e.getBoundingClientRect().bottom),
            onEnter: () => {
              d(!0)
            },
            onLeave: () => {
              d(!1)
            },
            onEnterBack: () => {
              d(!0)
            },
            onLeaveBack: () => {
              d(!1)
            }
          }) : s.current = o.ScrollTrigger.create({
            trigger: u.current,
            start: () => "top top+=".concat(e.getBoundingClientRect().bottom),
            end: () => "bottom top+=".concat(e.getBoundingClientRect().bottom),
            onEnter: () => {
              d(!0)
            },
            onLeave: () => {
              d(!1)
            },
            onEnterBack: () => {
              d(!0)
            },
            onLeaveBack: () => {
              d(!1)
            }
          }), () => {
            s.current && (s.current.kill(), s.current = null), d(!1)
          }
        }, [g]), (0, r.jsx)("div", {
          ref: u,
          style: {
            zIndex: i
          },
          className: "relative w-full",
          children: t
        })
      }
    }
  }
]);
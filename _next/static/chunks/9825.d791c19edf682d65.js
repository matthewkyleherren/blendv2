"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9825], {
    8616: function(e, r, t) {
      var n = t(5893),
        l = t(7294),
        o = t(3205),
        i = t(6038);
      let a = (0, l.forwardRef)((e, r) => {
        let {
          children: a,
          href: c,
          target: u,
          mode: s = "white",
          ...d
        } = e, f = (0, l.useRef)(null), g = (0, l.useRef)(null), m = (0, l.useRef)(null);
        (0, l.useImperativeHandle)(r, () => ({
          getChars: h,
          getAnimation: p
        }));
        let h = () => g.current,
          p = () => b(),
          b = () => (m.current = i.p8.effects.blink(g.current), m.current),
          w = () => {
            b()
          };
        return (0, l.useEffect)(() => (f.current.addEventListener("mouseenter", w), () => {
          f.current && f.current.removeEventListener("mouseenter", w)
        }), []), (0, l.useEffect)(() => {
          let e = t(2392);
          g.current = new e({
            target: f.current,
            by: "chars"
          })[0].chars
        }, []), (0, n.jsx)("div", {
          ref: f,
          children: (0, n.jsx)(o.Z, {
            href: c,
            target: u,
            className: "button-" + s + " inline-block py-[2.4rem] px-[2.5rem] rounded-[1rem] text-10 leading-[180%] tracking-[0.05rem] uppercase xl:transition-transform xl:duration-global xl:ease-out xl:hover:scale-[1.04]",
            ...d,
            children: a
          })
        })
      });
      a.displayName = "Button", r.Z = a
    },
    9825: function(e, r, t) {
      t.r(r);
      var n = t(5893),
        l = t(7294),
        o = t(6038),
        i = t(6546),
        a = t(8616),
        c = t(188),
        u = t(1100),
        s = t(2881),
        d = t(512);
      r.default = e => {
        var r, f, g, m, h;
        let {
          item: p,
          items: b,
          index: w
        } = e, x = (0, l.useRef)(null), v = (0, l.useRef)(null), y = (0, l.useRef)(null), k = (0, l.useRef)(null), j = (0, l.useRef)(null), R = (0, l.useRef)(null), N = (0, l.useRef)(null), T = (0, l.useRef)(null), E = (0, l.useRef)(null), C = (0, l.useRef)(null), _ = (0, l.useRef)(null), z = (0, l.useRef)(null), I = (0, l.useRef)(null), S = (0, l.useRef)(null);
        (0, l.useEffect)(() => {
          i.ScrollTrigger.config({
            ignoreMobileResize: !0
          });
          let e = t(2392);
          window.addEventListener("refresh-scroll-trigger", B), N.current = new e({
            target: k.current,
            by: "words"
          })[0].words, T.current = new e({
            target: j.current,
            by: "chars"
          })[0].chars, E.current = new e({
            target: R.current,
            by: "chars"
          })[0].chars, o.p8.set([T.current, E.current], {
            alpha: 0
          });
          let r = H(),
            n = o.p8.timeline();
          n.fromTo(T.current, {
            alpha: 0
          }, {
            alpha: 1,
            stagger: .05,
            duration: .01,
            onStart: () => {
              o.p8.effects.blink(T.current, {
                delay: .2
              })
            }
          }, 0).fromTo(E.current, {
            alpha: 0
          }, {
            alpha: 1,
            stagger: .05,
            duration: .01,
            onStart: () => {
              o.p8.effects.blink(E.current, {
                delay: .2
              })
            }
          }, .5), C.current && n.add(C.current.getAnimation(), .5), _.current && n.add(_.current.getAnimation(), .5), i.ScrollTrigger.create({
            trigger: x.current,
            start: "30% bottom",
            once: !0,
            animation: n
          }), z.current = i.ScrollTrigger.create({
            trigger: x.current,
            start: () => (0, c.tq)() ? "30% bottom" : "top bottom",
            end: () => (0, c.tq)() ? "+=".concat(.7 * window.innerHeight) : "+=".concat(window.innerHeight),
            animation: r,
            scrub: !0
          }), x.current.style.height = "".concat(window.innerHeight, "px");
          let {
            scaleAnimation: l,
            parallaxAnimation: a
          } = Z();
          return I.current = i.ScrollTrigger.create({
            trigger: x.current,
            start: () => "top top",
            end: () => "+=".concat(.5 * x.current.clientHeight),
            animation: l,
            scrub: !0
          }), S.current = i.ScrollTrigger.create({
            trigger: x.current,
            start: () => "top top",
            animation: a,
            scrub: !0
          }), () => {
            z.current.kill(), z.current = null, I.current.kill(), I.current = null, S.current.kill(), S.current = null, window.removeEventListener("resize", A), window.removeEventListener("refresh-scroll-trigger", B)
          }
        }, []);
        let A = () => {
            x.current.style.height = "".concat(window.innerHeight, "px")
          },
          B = () => {
            z.current.refresh(), I.current.refresh(), S.current.refresh()
          },
          H = () => {
            let e = o.p8.timeline();
            return e.set(N.current, {
              yPercent: e => 70 + 50 * e
            }, 0).fromTo(v.current, {
              y: () => (0, c.tq)() ? "0" : "-60%"
            }, {
              y: 0,
              ease: "none"
            }, 0).to(N.current, {
              yPercent: 0,
              ease: "none"
            }, 0), e
          },
          Z = () => {
            let e = o.p8.timeline();
            e.to(y.current, {
              scale: window.innerWidth < 768 ? .965 : .972,
              borderRadius: 30,
              ease: "none"
            }, 0);
            let r = o.p8.timeline();
            return r.fromTo(v.current, {
              y: 0
            }, {
              y: window.innerWidth / 15,
              ease: "none"
            }, 0), {
              scaleAnimation: e,
              parallaxAnimation: r
            }
          };
        return (0, n.jsx)("section", {
          style: {
            zIndex: b.length - w
          },
          ref: x,
          className: (0, d.Z)("h-screen min-h-[600px] landscape:min-h-[950px] lg:!min-h-[600px] relative overflow-hidden", {
            "bg-white": (null === (r = p.backgroundColor) || void 0 === r ? void 0 : r.color) === "White",
            "bg-real_white": (null === (f = p.backgroundColor) || void 0 === f ? void 0 : f.color) === "Real white",
            "bg-light_beige": (null === (g = p.backgroundColor) || void 0 === g ? void 0 : g.color) === "Beige light",
            "bg-dark_beige": !p.backgroundColor || "Beige dark" === p.backgroundColor.color,
            "bg-dark_grey": (null === (m = p.backgroundColor) || void 0 === m ? void 0 : m.color) === "Grey dark",
            "bg-green": (null === (h = p.backgroundColor) || void 0 === h ? void 0 : h.color) === "Green"
          }),
          children: (0, n.jsx)("div", {
            ref: y,
            className: "wrapper origin-bottom w-full h-full overflow-hidden",
            children: (0, n.jsxs)("div", {
              ref: v,
              className: "relative w-full h-full md:pt-[22.5rem]",
              children: [(0, n.jsx)("div", {
                className: "absolute left-0 top-0 w-full h-full -z-1 pointer-events-none",
                children: p.backgroundImage.data && (0, n.jsx)(u.p, {
                  image: p.backgroundImage.data,
                  fallbackAlt: "",
                  className: "w-full h-full object-cover",
                  sizes: "(max-width: 768px) 96vw, 100vw"
                })
              }), (0, n.jsx)("div", {
                className: "absolute left-0 top-0 w-full h-full z-1 pointer-events-none",
                children: p.foregroundImage.data && (0, n.jsx)(u.p, {
                  image: p.foregroundImage.data,
                  fallbackAlt: "",
                  className: "w-full h-full object-cover",
                  sizes: "(max-width: 768px) 96vw, 100vw"
                })
              }), (0, n.jsxs)("div", {
                className: "absolute top-[30%] landscape:top-[43%] md:top-[45.5%] md:landscape:top-[38%] lg:top-[47%] xl:top-[34%] left-0 w-full flex flex-col items-center",
                children: [(0, n.jsx)("div", {
                  ref: j,
                  className: "body-mono-14 text-real_white uppercase text-center mb-32",
                  children: p.subtitle
                }), (0, n.jsx)("div", {
                  ref: k,
                  className: "text-center heading-164 text-white whitespace-nowrap flex flex-wrap justify-center w-full gap-x-[0.75rem] lg:gap-x-[2rem] [&>*:first-child]:w-full md:[&>*:first-child]:w-auto",
                  children: p.title
                }), (0, n.jsxs)("div", {
                  className: "flex flex-col items-center mt-[5.6rem] md:mt-[7rem] lg:mt-[15rem] xl:mt-[10.4rem] body-mono-10 z-1",
                  children: [(0, n.jsxs)("div", {
                    className: "flex gap-x-[0.6rem]",
                    children: [p.button && (0, n.jsx)(a.Z, {
                      ref: C,
                      href: s.sI(p.button),
                      children: p.button.title
                    }), p.secondaryButton && (0, n.jsx)(a.Z, {
                      ref: _,
                      mode: "blur",
                      href: s.sI(p.secondaryButton),
                      children: p.secondaryButton.title
                    })]
                  }), p.bottomText && (0, n.jsx)("div", {
                    ref: R,
                    className: "mt-16 md:mt-20 text-white",
                    children: p.bottomText
                  })]
                })]
              })]
            })
          })
        })
      }
    },
    512: function(e, r, t) {
      r.Z = function() {
        for (var e, r, t = 0, n = "", l = arguments.length; t < l; t++)(e = arguments[t]) && (r = function e(r) {
          var t, n, l = "";
          if ("string" == typeof r || "number" == typeof r) l += r;
          else if ("object" == typeof r) {
            if (Array.isArray(r)) {
              var o = r.length;
              for (t = 0; t < o; t++) r[t] && (n = e(r[t])) && (l && (l += " "), l += n)
            } else
              for (n in r) r[n] && (l && (l += " "), l += n)
          }
          return l
        }(e)) && (n && (n += " "), n += r);
        return n
      }
    }
  }
]);
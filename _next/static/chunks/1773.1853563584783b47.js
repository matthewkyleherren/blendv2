"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1773], {
    8616: function(e, t, r) {
      var n = r(5893),
        l = r(7294),
        a = r(3205),
        o = r(6038);
      let c = (0, l.forwardRef)((e, t) => {
        let {
          children: c,
          href: s,
          target: i,
          mode: d = "white",
          ...u
        } = e, g = (0, l.useRef)(null), m = (0, l.useRef)(null), h = (0, l.useRef)(null);
        (0, l.useImperativeHandle)(t, () => ({
          getChars: p,
          getAnimation: f
        }));
        let p = () => m.current,
          f = () => x(),
          x = () => (h.current = o.p8.effects.blink(m.current), h.current),
          b = () => {
            x()
          };
        return (0, l.useEffect)(() => (g.current.addEventListener("mouseenter", b), () => {
          g.current && g.current.removeEventListener("mouseenter", b)
        }), []), (0, l.useEffect)(() => {
          let e = r(2392);
          m.current = new e({
            target: g.current,
            by: "chars"
          })[0].chars
        }, []), (0, n.jsx)("div", {
          ref: g,
          children: (0, n.jsx)(a.Z, {
            href: s,
            target: i,
            className: "button-" + d + " inline-block py-[2.4rem] px-[2.5rem] rounded-[1rem] text-10 leading-[180%] tracking-[0.05rem] uppercase xl:transition-transform xl:duration-global xl:ease-out xl:hover:scale-[1.04]",
            ...u,
            children: c
          })
        })
      });
      c.displayName = "Button", t.Z = c
    },
    1773: function(e, t, r) {
      r.r(t), r.d(t, {
        default: function() {
          return s
        }
      });
      var n = r(5893),
        l = r(8616),
        a = r(7118),
        o = () => (0, n.jsx)("svg", {
          width: "2",
          height: "2",
          viewBox: "0 0 2 2",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, n.jsx)("circle", {
            id: "Ellipse 409",
            cx: "1",
            cy: "1",
            r: "1",
            fill: "#575349"
          })
        }),
        c = r(1100),
        s = e => {
          let {
            item: t,
            items: r,
            index: s
          } = e, i = new Date(t.post.data.attributes.updatedAt), {
            width: d,
            height: u
          } = t.post.data.attributes.mainImage.data.attributes;
          return (0, n.jsx)(a.Z, {
            zIndex: r.length - s,
            children: (0, n.jsx)("section", {
              style: {
                zIndex: r.length - s
              },
              className: "\n          relative p-half-container-mobile md:p-half-container xl:h-screen lg:min-h-[650px]\n          ".concat("White" === t.backgroundColor.color ? "bg-white" : "Beige light" === t.backgroundColor.color ? "bg-light_beige" : "Beige dark" === t.backgroundColor.color ? "bg-dark_beige" : "Grey dark" === t.backgroundColor.color ? "bg-dark_grey" : "bg-green", " \n        "),
              children: (0, n.jsxs)("div", {
                className: "flex items-center justify-center bg-white rounded-15 h-full py-100 lg:py-[15rem] xl:py-0",
                children: [(0, n.jsx)("div", {
                  className: "absolute top-0 right-0 w-full h-full bg-dots bg-size-dots bg-repeat opacity-40 pointer-events-none"
                }), (0, n.jsxs)("div", {
                  className: "grid grid-cols-12 relative z-1",
                  children: [(0, n.jsx)("div", {
                    className: "col-start-4 col-end-10 md:col-start-5 md:col-end-9 lg:col-start-6 lg:col-end-8",
                    children: (0, n.jsx)("div", {
                      className: "mx-auto relative rounded-15 overflow-hidden h-0",
                      style: {
                        paddingBottom: "".concat(u / d * 100, "%")
                      },
                      children: (0, n.jsx)(c.p, {
                        sizes: "(max-width: 768px) 80vw, 15vw",
                        fallbackAlt: "",
                        className: "object-cover",
                        fill: !0,
                        image: t.post.data.attributes.mainImage.data
                      })
                    })
                  }), (0, n.jsxs)("div", {
                    className: "col-span-full text-center mt-[2.4rem] flex gap-x-[0.5rem] items-center font-body-mono text-10 uppercase justify-center",
                    children: [(0, n.jsx)("div", {
                      children: "Pebble App"
                    }), (0, n.jsx)("div", {
                      className: "svg-wrapper w-[0.2rem] h-[0.2rem]",
                      children: (0, n.jsx)(o, {})
                    }), (0, n.jsx)("div", {
                      children: i.toLocaleString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric"
                      })
                    })]
                  }), (0, n.jsx)("div", {
                    className: "col-start-2 col-end-12 lg:col-start-4 lg:col-end-10 text-center mt-[2.4rem]",
                    children: (0, n.jsx)("div", {
                      className: "heading-26 md:heading-44 font-medium text-dark_grey",
                      children: t.post.data.attributes.title
                    })
                  }), (0, n.jsx)("div", {
                    className: "col-span-full mt-32 md:mt-[6rem] text-center",
                    children: (0, n.jsx)(l.Z, {
                      mode: "light_beige",
                      href: "/post/" + t.post.data.attributes.slug,
                      onClick: e => {
                        e.preventDefault(), window.dispatchEvent(new CustomEvent("open-popup", {
                          detail: {
                            name: "global",
                            type: "post",
                            uid: t.post.data.attributes.slug
                          }
                        }))
                      },
                      children: t.buttonText
                    })
                  })]
                })]
              })
            })
          })
        }
    },
    7118: function(e, t, r) {
      var n = r(5893),
        l = r(7294),
        a = r(6546),
        o = r(146),
        c = r(188);
      t.Z = e => {
        let {
          children: t,
          sticky: r = !1,
          zIndex: s = 0
        } = e, i = (0, l.useRef)(null), d = (0, l.useRef)(null), u = (0, o.o)(e => e.headerLoaded), g = (0, o.o)(e => e.setHeaderDark);
        return (0, l.useEffect)(() => {
          if (!u) return;
          let e = document.querySelector(".header");
          return r ? d.current = a.ScrollTrigger.create({
            trigger: i.current,
            start: () => "top+=".concat(window.innerHeight, " top+=").concat(e.getBoundingClientRect().bottom),
            end: () => "bottom-=".concat((0, c.z6)(10), " top+=").concat(e.getBoundingClientRect().bottom),
            onEnter: () => {
              g(!0)
            },
            onLeave: () => {
              g(!1)
            },
            onEnterBack: () => {
              g(!0)
            },
            onLeaveBack: () => {
              g(!1)
            }
          }) : d.current = a.ScrollTrigger.create({
            trigger: i.current,
            start: () => "top top+=".concat(e.getBoundingClientRect().bottom),
            end: () => "bottom top+=".concat(e.getBoundingClientRect().bottom),
            onEnter: () => {
              g(!0)
            },
            onLeave: () => {
              g(!1)
            },
            onEnterBack: () => {
              g(!0)
            },
            onLeaveBack: () => {
              g(!1)
            }
          }), () => {
            d.current && (d.current.kill(), d.current = null), g(!1)
          }
        }, [u]), (0, n.jsx)("div", {
          ref: i,
          style: {
            zIndex: s
          },
          className: "relative w-full",
          children: t
        })
      }
    }
  }
]);
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9854], {
    6710: function(e, r, t) {
      t.r(r);
      var n = t(5893),
        l = t(7294),
        a = t(6038),
        i = t(753),
        c = t(1800),
        s = t(188),
        o = t(1100);
      r.default = e => {
        let {
          item: r
        } = e, t = (0, l.useRef)(null), d = (0, l.useRef)(null), u = (0, l.useRef)([]), m = (0, l.useRef)(0), g = (0, l.useRef)(4), h = (0, l.useRef)(null), f = (0, l.useRef)(null), x = (0, l.useRef)(null), p = (0, l.useRef)([]), b = e => {
          if ((0, s.RE)(x.current), x.current = a.ZP.timeline(), x.current.to(u.current, {
              x: -f.current * m.current,
              ease: "expo.out",
              duration: 1
            }, 0), e > 0) {
            let e = m.current - 1,
              r = g.current - 1 + m.current;
            (0, s.RE)(p.current[e]), p.current[e] = a.ZP.to(u.current[e], {
              autoAlpha: 0,
              ease: "linear",
              duration: .4
            }), (0, s.RE)(p.current[r]), p.current[r] = a.ZP.to(u.current[r], {
              autoAlpha: 1,
              ease: "linear",
              duration: .4,
              delay: .15
            })
          } else {
            let e = m.current,
              r = g.current + m.current;
            (0, s.RE)(p.current[e]), p.current[e] = a.ZP.to(u.current[e], {
              autoAlpha: 1,
              ease: "linear",
              duration: .4,
              delay: .15
            }), (0, s.RE)(p.current[r]), p.current[r] = a.ZP.to(u.current[r], {
              autoAlpha: 0,
              ease: "linear",
              duration: .4
            })
          }
        }, w = () => {
          h.current !== window.innerWidth && (f.current = u.current[0].offsetWidth + (0, s.z6)(10), a.ZP.set(u.current, {
            x: -f.current * m.current
          }), v()), h.current = window.innerWidth
        }, v = () => {
          window.innerWidth < 768 ? g.current = 1 : window.innerWidth < 1024 ? g.current = 3 : g.current = 4
        };
        return (0, l.useEffect)(() => {
          if (f.current = u.current[0].offsetWidth + (0, s.z6)(10), h.current = window.innerWidth, v(), window.innerWidth >= 768)
            for (let e = g.current; e < u.current.length; e++) a.ZP.set(u.current[e], {
              autoAlpha: 0
            });
          return window.addEventListener("resize", w), () => {
            window.removeEventListener("resize", w)
          }
        }, []), (0, n.jsxs)("section", {
          className: "pb-[9rem] md:pb-[18rem] overflow-hidden\n        ".concat("White" === r.backgroundColor.color ? "bg-white" : "Beige light" === r.backgroundColor.color ? "bg-light_beige" : "Beige dark" === r.backgroundColor.color ? "bg-dark_beige" : "Grey dark" === r.backgroundColor.color ? "bg-dark_grey" : "bg-green", " \n      "),
          children: [(0, n.jsx)("div", {
            className: "w-full px-container-mobile md:px-container",
            children: (0, n.jsx)(i.Z, {
              mode: ["White", "Beige light"].indexOf(r.backgroundColor.color) > -1 ? "dark" : "light"
            })
          }), (0, n.jsxs)("div", {
            className: "w-full px-container-mobile md:px-container pt-[2rem] hidden justify-end gap-x-[0.5rem] ".concat(4 === r.items.length ? "md:flex lg:hidden" : "", " ").concat(r.items.length < 4 ? "hidden" : "", " ").concat(r.items.length > 4 ? "md:flex" : ""),
            children: [(0, n.jsx)("div", {
              ref: t,
              className: "pager pager-disabled flex justify-center items-center w-[3.6rem] h-[3.6rem] rounded-10 cursor-pointer transition-transform duration-global ease-out xl:hover:scale-[1.05] ".concat("White" === r.backgroundColor.color ? "bg-light_beige" : "bg-white"),
              onClick: () => {
                0 !== m.current && (t.current.classList.remove("pager-disabled"), d.current.classList.remove("pager-disabled"), m.current -= 1, 0 === m.current && t.current.classList.add("pager-disabled"), b(-1))
              },
              children: (0, n.jsx)("div", {
                className: "svg-wrapper flex w-[1rem] rotate-180",
                children: (0, n.jsx)(c.Z, {})
              })
            }), (0, n.jsx)("div", {
              ref: d,
              className: "pager flex justify-center items-center w-[3.6rem] h-[3.6rem] rounded-10 cursor-pointer transition-transform duration-global ease-out xl:hover:scale-[1.05] ".concat("White" === r.backgroundColor.color ? "bg-light_beige" : "bg-white"),
              onClick: () => {
                m.current >= r.items.length - g.current || (t.current.classList.remove("pager-disabled"), d.current.classList.remove("pager-disabled"), m.current += 1, m.current >= r.items.length - g.current && d.current.classList.add("pager-disabled"), b(1))
              },
              children: (0, n.jsx)("div", {
                className: "svg-wrapper flex w-[1rem]",
                children: (0, n.jsx)(c.Z, {})
              })
            })]
          }), (0, n.jsx)("div", {
            className: "scroll-snap u-nsb px-container-mobile md:px-container w-full flex items-start flex-nowrap gap-x-10 mt-[4rem] md:mt-[6rem] ".concat(r.items.length < 4 ? "justify-center" : ""),
            children: r.items.map((e, t) => (0, n.jsxs)("a", {
              href: e.link,
              target: "_blank",
              ref: e => {
                u.current[t] = e
              },
              className: "scroll-snap-inner group basis-[85%] md:basis-[calc(33.333%-0.66rem)] lg:basis-[calc(25%-0.75rem)] shrink-0\n            ".concat("White" === r.backgroundColor.color ? "text-dark_grey" : "Beige light" === r.backgroundColor.color ? "text-dark_grey" : ("Beige dark" === r.backgroundColor.color || r.backgroundColor.color, "text-white"), " \n          "),
              children: [(0, n.jsx)("div", {
                className: "relative w-full h-0 pt-[100%] rounded-18 overflow-hidden",
                children: (0, n.jsx)("div", {
                  className: "absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-out xl:group-hover:scale-[1.05]",
                  children: (0, n.jsx)(o.p, {
                    image: e.image.data,
                    className: "w-full h-full object-cover select-none",
                    loading: "eager",
                    transition: "none"
                  })
                })
              }), (0, n.jsxs)("div", {
                className: "flex flex-col mt-[3.6rem] px-10 min-h-[20rem] md:min-h-[21.5rem] lg:min-h-[20rem]",
                children: [e.logo.data ? (0, n.jsx)("div", {
                  className: "w-full h-[2rem] mb-20",
                  children: (0, n.jsx)(o.p, {
                    image: e.logo.data,
                    className: "w-auto h-full"
                  })
                }) : null, (0, n.jsx)("div", {
                  className: "text-18 lg:text-20 leading-[130%] -tracking-[0.06rem] pr-[2.4rem] mb-10",
                  children: e.title
                }), e.source && (0, n.jsx)("div", {
                  className: "text-14 leading-[2rem] tracking-[0.014rem] opacity-60 mt-auto",
                  children: e.source
                }), e.link && (0, n.jsx)("div", {
                  className: "pt-[1.6rem]",
                  children: (0, n.jsx)("div", {
                    className: "flex justify-center items-center w-[3.6rem] h-[3.6rem] rounded-10 transition-transform duration-700 ease-out xl:group-hover:scale-[1.1] ".concat("White" === r.backgroundColor.color ? "bg-light_beige" : "bg-white"),
                    children: (0, n.jsx)("div", {
                      className: "svg-wrapper flex w-[1rem] -rotate-45",
                      children: (0, n.jsx)(c.Z, {})
                    })
                  })
                })]
              })]
            }, "slide-".concat(t)))
          })]
        })
      }
    },
    1800: function(e, r, t) {
      var n = t(5893);
      r.Z = e => {
        let {
          stroke: r = "#575349"
        } = e;
        return (0, n.jsx)("svg", {
          width: "11",
          height: "9",
          viewBox: "0 0 11 9",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, n.jsx)("path", {
            id: "Vector 201",
            d: "M0 4.5H9.5M9.5 4.5L5.9 1M9.5 4.5L5.9 8",
            stroke: r
          })
        })
      }
    }
  }
]);
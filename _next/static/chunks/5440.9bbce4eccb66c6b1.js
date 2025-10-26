(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5440], {
    5440: function(e, r, t) {
      "use strict";
      t.r(r);
      var l = t(5893),
        n = t(7825),
        a = t(7294),
        c = t(6038),
        s = t(6546),
        i = t(4247),
        o = t(188),
        u = t(5285),
        d = t(1100),
        m = t(2881),
        f = t(9139),
        g = t(6620);
      r.default = e => {
        let {
          item: r,
          items: t,
          index: a
        } = e, c = (0, n.a)("(max-width: 1200px)", !0);
        return (0, l.jsx)("section", {
          style: {
            zIndex: t.length - a
          },
          className: "relative",
          children: c ? (0, l.jsx)(p, {
            item: r
          }) : !r.showOnMobile && (0, l.jsx)(h, {
            item: r
          })
        })
      };
      let p = e => {
          let {
            item: r
          } = e, t = (0, a.useRef)(null), n = (0, a.useRef)(null), o = (0, a.useRef)([]), u = (0, a.useRef)([]), p = (0, a.useRef)([0, 0, 0]), h = (0, a.useRef)([0, 0, 0]), x = (0, a.useRef)([]), b = (0, a.useRef)([]), w = (0, a.useRef)([]), v = (0, a.useRef)(null), j = (0, a.useRef)(null), y = (0, a.useRef)([]), k = e => {
            b.current[e] && !b.current[e].paused && b.current[e].pause()
          }, N = e => {
            b.current[e] && b.current[e].paused && b.current[e].play()
          }, R = () => {
            for (let e = 0; e < u.current.length; e++)
              if (u.current[e].length > 1)
                for (let r = 1; r < u.current[e].length; r++) c.p8.set(u.current[e][r], {
                  autoAlpha: 0
                })
          }, C = (e, r) => {
            if (h.current[e] = r, h.current[e] != p.current[e]) {
              for (let t = 0; t < o.current[e].length; t++) o.current[e][t].classList.toggle("a", t === r);
              c.p8.set(u.current[e][h.current[e]], {
                zIndex: v.current++
              }), c.p8.fromTo(u.current[e][h.current[e]], {
                autoAlpha: 0
              }, {
                autoAlpha: 1,
                duration: .5,
                ease: "power2.out"
              }), p.current[e] = r
            }
          }, _ = () => {
            for (let e = 0; e < b.current.length; e++) b.current[e] && b.current[e].addEventListener("play", () => {
              x.current[e] && x.current[e].classList.add("opacity-0")
            }, {
              once: !0
            })
          }, z = () => {
            window.innerWidth !== j.current && (c.p8.set(t.current, {
              height: n.current.offsetHeight + window.innerHeight
            }), c.p8.set(n.current, {
              marginTop: -window.innerHeight
            })), j.current = window.innerWidth
          };
          return (0, a.useEffect)(() => {
            R(), _(), c.p8.set(t.current, {
              height: n.current.offsetHeight + window.innerHeight
            }), c.p8.set(n.current, {
              marginTop: -window.innerHeight
            });
            for (let e = 0; e < w.current.length; e++) b.current[e] && (y.current[e] = s.ScrollTrigger.create({
              trigger: w.current[e],
              start: "top+=".concat(window.innerHeight, "px bottom"),
              end: "+=".concat(w.current[e].offsetHeight + window.innerHeight, "px"),
              onEnter: () => {
                b.current[e] && N(e)
              },
              onEnterBack: () => {
                b.current[e] && N(e)
              },
              onLeave: () => {
                b.current[e] && k(e)
              },
              onLeaveBack: () => {
                b.current[e] && k(e)
              }
            }));
            return window.addEventListener("resize", z), () => {
              window.removeEventListener("resize", z);
              for (let e = 0; e < y.current.length; e++) y.current[e] && (y.current[e].kill(), y.current[e] = null)
            }
          }, []), (0, l.jsx)("div", {
            ref: t,
            className: "relative",
            children: (0, l.jsx)("div", {
              ref: n,
              className: "sticky min-h-screen xl:hidden mobile:flex top-0 flex flex-col md:flex-row flex-wrap gap-y-[4rem] md:gap-y-[1.25rem] landscape:gap-y-[1.25rem] mx-0 md:-mx-[0.3rem] px-half-container-mobile md:px-[1.25rem] pt-[8rem] md:pt-[10rem] pb-10 ".concat("White" === r.backgroundColor.color ? "bg-white" : "Beige light" === r.backgroundColor.color ? "bg-light_beige" : "Beige dark" === r.backgroundColor.color ? "bg-dark_beige" : "Grey dark" === r.backgroundColor.color ? "bg-dark_grey" : "bg-green"),
              children: r.items.map((e, t) => (0, l.jsxs)("div", {
                className: "relative flex flex-col w-full flex-1 p-0 md:flex-[0_0_100%] landscape:flex-[0_0_100%] md:px-[0.3rem] landscape:px-0 md:px-0",
                children: [(0, l.jsxs)("div", {
                  ref: e => {
                    w.current[t] = e
                  },
                  className: "relative w-full h-0 mb-[0.6rem] md:mb-0 landscape:mb-0 pt-[77.13%] mobile:pt-[56.25%] rounded-13 overflow-hidden",
                  children: [u.current[t] = [], (0, l.jsx)("div", {
                    ref: e => {
                      u.current[t][0] = e
                    },
                    className: "absolute top-0 left-0 w-full h-full",
                    children: e.mainVideo.data ? (0, l.jsxs)(l.Fragment, {
                      children: [(0, l.jsx)("div", {
                        ref: e => {
                          x.current[t] = e
                        },
                        className: "absolute left-0 top-0 w-full h-full z-1 transition-opacity duration-global ease-out",
                        children: (0, l.jsx)(d.p, {
                          image: e.mainImage.data,
                          sizes: "(max-width: 768px) 96vw, 95vw",
                          fallbackAlt: "",
                          className: "test w-full h-full object-cover"
                        })
                      }), (0, l.jsx)("video", {
                        ref: e => {
                          b.current[t] = e
                        },
                        preload: "none",
                        src: m.$N(e.mainVideo.data.attributes.url),
                        muted: !0,
                        loop: !0,
                        playsInline: !0,
                        className: "absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
                      })]
                    }) : (0, l.jsx)(d.p, {
                      image: e.mainImage.data,
                      sizes: "(max-width: 768px) 96vw, 95vw",
                      fallbackAlt: "",
                      className: "test w-full h-full object-cover"
                    })
                  }), e.image2.data && (0, l.jsx)("div", {
                    ref: e => {
                      u.current[t][1] = e
                    },
                    className: "absolute top-0 left-0 w-full h-full",
                    children: (0, l.jsx)(d.p, {
                      image: e.image2.data,
                      sizes: "(max-width: 768px) 96vw, 95vw",
                      fallbackAlt: "",
                      className: "w-full h-full object-cover"
                    })
                  }), e.image3.data && (0, l.jsx)("div", {
                    ref: e => {
                      u.current[t][2] = e
                    },
                    className: "absolute top-0 left-0 w-full h-full",
                    children: (0, l.jsx)(d.p, {
                      image: e.image3.data,
                      sizes: "(max-width: 768px) 96vw, 95vw",
                      fallbackAlt: "",
                      className: "w-full h-full object-cover"
                    })
                  }), e.image4.data && (0, l.jsx)("div", {
                    ref: e => {
                      u.current[t][3] = e
                    },
                    className: "absolute top-0 left-0 w-full h-full",
                    children: (0, l.jsx)(d.p, {
                      image: e.image4.data,
                      sizes: "(max-width: 768px) 96vw, 95vw",
                      fallbackAlt: "",
                      className: "w-full h-full object-cover"
                    })
                  })]
                }), (0, l.jsxs)("div", {
                  className: "relative w-full min-h-[2.36rem] flex-1 px-[2rem] pt-[1.2rem] pb-[3.7rem] rounded-10 text-dark_grey z-[999] md:absolute landscape:absolute ".concat("right" === r.contentPosition ? "md:right-10 landscape:right-10" : "md:left-10 landscape:left-10", " md:bottom-10 md:w-[26rem] lg:w-[35.2rem] landscape:w-[35.2rem] ").concat("White" === r.backgroundColor.color ? "bg-light_beige md:bg-dark_beige/[0.38] landscape:bg-dark_beige/[0.38] md:backdrop-blur-[60px] landscape:backdrop-blur-[60px] md:text-white landscape:text-white" : "bg-white md:bg-dark_beige/[0.38] md:backdrop-blur-[60px] md:text-white landscape:bg-dark_beige/[0.38] landscape:backdrop-blur-[60px] landscape:text-white"),
                  children: [(0, l.jsx)("div", {
                    className: "text-center font-headings text-26 md:text-20 lg:text-26 leading-[112%] -tracking-[0.078rem] font-medium my-[3.744rem] md:my-[2.5rem] lg:my-[3.744rem]",
                    children: e.title
                  }), (0, l.jsxs)("div", {
                    className: "relative w-full mb-[2.7rem]",
                    children: [(0, l.jsx)("div", {
                      className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                      children: (0, l.jsx)("div", {
                        className: "svg-wrapper w-[0.7rem]",
                        children: (0, l.jsx)(i.Z, {
                          className: "fill-[#575349] md:fill-[#fff] landscape:fill-[#fff]"
                        })
                      })
                    }), (0, l.jsx)("div", {
                      className: "w-full h-px bg-dark_grey md:bg-white landscape:bg-white opacity-20"
                    })]
                  }), (0, l.jsxs)("div", {
                    className: "text-13 leading-[2rem] tracking-[0.013rem] text-center px-[2.75rem] md:px-[0.5rem] lg:px-[2.75rem]",
                    children: [(0, l.jsx)(f.Z, {
                      content: e.content
                    }), (e.image2.data || e.image3.data || e.image4.data) && (0, l.jsxs)("div", {
                      className: "w-full flex items-center justify-center gap-x-[1rem] mt-[3.7rem]",
                      children: [o.current[t] = [], (0, l.jsxs)("div", {
                        ref: e => {
                          o.current[t][0] = e
                        },
                        className: "group relative flex justify-center items-center w-[2.5rem] h-[2.5rem] cursor-pointer a",
                        onClick: () => C(t, 0),
                        children: [(0, l.jsx)("div", {
                          className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full border-px border-[#B1B8C3] opacity-0 transition-opacity duration-global ease-out group-[.a]:opacity-20"
                        }), (0, l.jsx)("div", {
                          className: "w-[1rem] h-[1rem] rounded-full",
                          style: {
                            backgroundColor: e.mainImageColor || "#fff"
                          }
                        })]
                      }), e.image2.data && (0, l.jsxs)("div", {
                        ref: e => {
                          o.current[t][1] = e
                        },
                        className: "group relative flex justify-center items-center w-[2.5rem] h-[2.5rem] cursor-pointer",
                        onClick: () => C(t, 1),
                        children: [(0, l.jsx)("div", {
                          className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full border-px border-[#B1B8C3] opacity-0 transition-opacity duration-global ease-out group-[.a]:opacity-20"
                        }), (0, l.jsx)("div", {
                          className: "w-[1rem] h-[1rem] rounded-full",
                          style: {
                            backgroundColor: e.image2Color || "#fff"
                          }
                        })]
                      }), e.image3.data && (0, l.jsxs)("div", {
                        ref: e => {
                          o.current[t][2] = e
                        },
                        className: "group relative flex justify-center items-center w-[2.5rem] h-[2.5rem] cursor-pointer",
                        onClick: () => C(t, 2),
                        children: [(0, l.jsx)("div", {
                          className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full border-px border-[#B1B8C3] opacity-0 transition-opacity duration-global ease-out group-[.a]:opacity-20"
                        }), (0, l.jsx)("div", {
                          className: "w-[1rem] h-[1rem] rounded-full",
                          style: {
                            backgroundColor: e.image3Color || "#fff"
                          }
                        })]
                      }), e.image4.data && (0, l.jsxs)("div", {
                        ref: e => {
                          o.current[t][3] = e
                        },
                        className: "group relative flex justify-center items-center w-[2.5rem] h-[2.5rem] cursor-pointer",
                        onClick: () => C(t, 3),
                        children: [(0, l.jsx)("div", {
                          className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full border-px border-[#B1B8C3] opacity-0 transition-opacity duration-global ease-out group-[.a]:opacity-20"
                        }), (0, l.jsx)("div", {
                          className: "w-[1rem] h-[1rem] rounded-full",
                          style: {
                            backgroundColor: e.image4Color || "#fff"
                          }
                        })]
                      })]
                    })]
                  }), e.button ? (0, l.jsx)("div", {
                    className: "mt-30 block w-full text-center bg-light_beige transition-bg duration-global ease-out hover:bg-dark_beige/50 text-dark_grey rounded-10 text-10 tracking-[0.05rem] leading-[180%] md:text-12 md:tracking-[0.036rem] md:leading-[200%] font-body-mono uppercase",
                    children: (0, l.jsx)(g.U, {
                      data: e.button,
                      className: "flex justify-center items-center w-full py-[1.7rem]"
                    })
                  }) : null]
                })]
              }, "fullscreenslider-slide-".concat(t)))
            })
          })
        },
        h = e => {
          let {
            item: r
          } = e, t = (0, u.LZ)(), n = (e, r) => {
            t.scrollTo(e, r)
          };
          return (0, a.useMemo)(() => (0, l.jsx)(x, {
            scrollTo: n,
            item: r
          }), [])
        },
        x = e => {
          let {
            item: r,
            scrollTo: n
          } = e, u = (0, a.useRef)(null), p = (0, a.useRef)([]), h = (0, a.useRef)([]), x = (0, a.useRef)([]), b = (0, a.useRef)([]), w = (0, a.useRef)([]), v = (0, a.useRef)([]), j = (0, a.useRef)([]), y = (0, a.useRef)([]), k = (0, a.useRef)([]), N = (0, a.useRef)([0, 0, 0]), R = (0, a.useRef)([0, 0, 0]), C = (0, a.useRef)(0), _ = (0, a.useRef)(0), z = (0, a.useRef)(null), E = (0, a.useRef)(null), A = (0, a.useRef)(null), T = (0, a.useRef)([]), B = (0, a.useRef)([]), H = (0, a.useRef)([]), L = (0, a.useRef)([]), I = (0, a.useRef)(null), P = (0, a.useRef)([]), S = (0, a.useRef)([]), M = (0, a.useRef)(null), W = (0, a.useRef)(null), Z = e => {
            B.current[e] && !B.current[e].paused && B.current[e].pause()
          }, F = e => {
            B.current[e] && B.current[e].paused && (B.current[e].currentTime = 0, B.current[e].play())
          }, O = () => {
            for (let e = 0; e < j.current.length; e++) {
              let r = j.current[e],
                t = c.p8.timeline();
              t.set(r, {
                yPercent: 100
              }), t.set(r.children[0], {
                yPercent: -90
              }), t.to(r, {
                yPercent: 0,
                ease: "none"
              }), t.to(r.children[0], {
                yPercent: 0,
                ease: "none"
              }, "<"), H.current[e] = s.ScrollTrigger.create({
                trigger: r,
                start: () => e > 0 ? "".concat(e * window.innerHeight + (0, o.z6)(10), "px bottom") : "0px bottom",
                end: () => "+=".concat(window.innerHeight),
                animation: e > 0 ? t : null,
                scrub: !0,
                onEnter: () => {
                  0 !== e && F(e)
                },
                onEnterBack: () => {
                  0 !== e && F(e)
                },
                onLeaveBack: () => {
                  0 !== e && Z(e)
                },
                onUpdate: () => {
                  if (!H.current[e]) return;
                  let r = _.current,
                    t = r - C.current,
                    l = t > 0 ? "bottom" : t < 0 ? "top" : null;
                  C.current = r, "bottom" === l ? H.current[e].progress >= .5 && z.current !== e && (!1 !== z.current && e > 0 && V(z.current), z.current = e, $(z.current)) : "top" === l && 0 !== e && H.current[e].progress < .5 && z.current !== e - 1 && (!1 !== z.current && V(z.current), z.current = e - 1, $(z.current))
                }
              }), e !== j.current.length - 1 ? L.current[e] = s.ScrollTrigger.create({
                trigger: r,
                start: () => e > 0 ? "".concat((e + 1) * window.innerHeight + (0, o.z6)(10), "px bottom") : "".concat((e + 2) * window.innerHeight, "px bottom"),
                end: () => "+=".concat(window.innerHeight),
                scrub: !0,
                onEnterBack: () => {
                  F(e)
                },
                onLeave: () => {
                  Z(e)
                }
              }) : I.current = s.ScrollTrigger.create({
                trigger: r,
                start: () => "".concat((e + 1) * window.innerHeight + (0, o.z6)(10), "px bottom"),
                end: () => "+=".concat(window.innerHeight),
                scrub: !0,
                onEnterBack: () => {
                  F(j.current.length - 1)
                },
                onLeave: () => {
                  Z(j.current.length - 1)
                }
              })
            }
            M.current = s.ScrollTrigger.create({
              trigger: u.current,
              start: "top bottom-=100%",
              onEnter: () => {
                F(0)
              },
              onLeaveBack: () => {
                Z(0)
              }
            })
          }, U = () => {
            for (let e = 0; e < y.current.length; e++)
              if (y.current[e].length > 1)
                for (let r = 1; r < y.current[e].length; r++) c.p8.set(y.current[e][r], {
                  autoAlpha: 0
                })
          }, V = e => {
            (0, o.RE)(S.current[e]);
            let r = [h.current[e], x.current[e], b.current[e]];
            w.current[e] && r.push(w.current[e]), v.current[e] && r.push(v.current[e]), P.current[e] = c.p8.to(r, {
              autoAlpha: 0,
              stagger: -.01,
              duration: .4,
              ease: "power2.inOut"
            })
          }, $ = e => {
            (0, o.RE)(P.current[e]);
            let r = [h.current[e], x.current[e], b.current[e]];
            w.current[e] && r.push(w.current[e]), v.current[e] && r.push(v.current[e]), S.current[e] = c.p8.to(r, {
              autoAlpha: 1,
              delay: .35,
              stagger: -.01,
              duration: .4,
              ease: "power2.inOut"
            })
          }, q = (e, r) => {
            if (R.current[e] = r, R.current[e] != N.current[e]) {
              n(u.current, {
                offset: window.innerHeight * (e + 1) - (0, o.z6)(10)
              });
              for (let t = 0; t < k.current[e].length; t++) k.current[e][t].classList.toggle("a", t === r);
              c.p8.set(y.current[e][R.current[e]], {
                zIndex: A.current++
              }), c.p8.fromTo(y.current[e][R.current[e]], {
                autoAlpha: 0
              }, {
                autoAlpha: 1,
                duration: .5,
                ease: "power2.out"
              }), N.current[e] = r
            }
          }, G = () => {
            _.current = window.scrollY
          }, Y = () => {
            c.p8.set(E.current, {
              height: "auto"
            });
            let e = [E.current.offsetHeight];
            for (let r = 0; r < p.current.length; r++) e.push(p.current[r].offsetHeight);
            c.p8.set(E.current, {
              height: Math.max(...e)
            }), window.innerWidth < 1200 ? W.current && (W.current.kill(), W.current = null) : W.current = s.ScrollTrigger.create({
              trigger: u.current,
              start: () => "top+=".concat(window.innerHeight, " bottom"),
              end: () => "+=".concat(window.innerHeight),
              animation: c.p8.fromTo(y.current[0], {
                scale: 1.1
              }, {
                scale: 1,
                ease: "none"
              }),
              scrub: !0
            })
          }, D = () => {
            for (let e = 0; e < B.current.length; e++) B.current[e] && (B.current[e].src = B.current[e].dataset.src, B.current[e].load(), B.current[e].addEventListener("play", () => {
              T.current[e].classList.add("opacity-0")
            }, {
              once: !0
            }))
          };
          return (0, a.useEffect)(() => {
            let e = t(2392);
            for (let r = 0; r < b.current.length; r++) b.current[r] = new e({
              target: b.current[r],
              by: "words"
            })[0].words;
            Y(), U(), O();
            for (let e = 1; e < p.current.length; e++) b.current[e] && c.p8.set(b.current[e], {
              autoAlpha: 0
            }), h.current[e] && c.p8.set(h.current[e], {
              autoAlpha: 0
            }), x.current[e] && c.p8.set(x.current[e], {
              autoAlpha: 0
            }), w.current[e] && c.p8.set(w.current[e], {
              autoAlpha: 0
            }), v.current[e] && c.p8.set(v.current[e], {
              autoAlpha: 0
            });
            return D(), window.addEventListener("scroll", G), window.addEventListener("resize", Y), () => {
              window.removeEventListener("scroll", G), window.removeEventListener("resize", Y), M.current && (M.current.kill(), M.current = null);
              for (let e = 0; e < H.current.length; e++) H.current[e].kill(), H.current[e] = null;
              for (let e = 0; e < L.current.length; e++) L.current[e].kill(), L.current[e] = null
            }
          }, []), (0, l.jsx)("div", {
            ref: u,
            className: "sticky px-10 -mt-[100vh] ".concat("White" === r.backgroundColor.color ? "bg-white" : "Beige light" === r.backgroundColor.color ? "bg-light_beige" : "Beige dark" === r.backgroundColor.color ? "bg-dark_beige" : "Grey dark" === r.backgroundColor.color ? "bg-dark_grey" : "bg-green"),
            style: {
              height: "".concat((r.items.length + 1) * 100, "vh")
            },
            children: (0, l.jsxs)("div", {
              className: "sticky top-10 w-full h-[calc(100vh_-_2rem)] rounded-18 overflow-hidden bg-white",
              children: [r.items.map((e, r) => (0, l.jsx)("div", {
                className: "w-full h-full absolute left-0 top-0 overflow-hidden rounded-t-15",
                ref: e => {
                  j.current[r] = e
                },
                children: (0, l.jsxs)("div", {
                  className: "relative w-full h-full",
                  children: [y.current[r] = [], (0, l.jsx)("div", {
                    ref: e => {
                      y.current[r][0] = e
                    },
                    className: "absolute top-0 left-0 w-full h-full",
                    children: e.mainVideo.data ? (0, l.jsxs)(l.Fragment, {
                      children: [(0, l.jsx)("div", {
                        ref: e => {
                          T.current[r] = e
                        },
                        className: "absolute left-0 top-0 w-full h-full z-1 transition-opacity duration-global ease-out",
                        children: (0, l.jsx)(d.p, {
                          transition: "fast",
                          image: e.mainImage.data,
                          sizes: "(max-width: 768px) 96vw, 95vw",
                          fallbackAlt: "",
                          className: "test w-full h-full object-cover"
                        })
                      }), (0, l.jsx)("video", {
                        ref: e => {
                          B.current[r] = e
                        },
                        "data-src": m.$N(e.mainVideo.data.attributes.url),
                        muted: !0,
                        loop: !0,
                        playsInline: !0,
                        className: "absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
                      })]
                    }) : (0, l.jsx)(d.p, {
                      transition: "fast",
                      image: e.mainImage.data,
                      sizes: "(max-width: 768px) 100vw, 95vw",
                      fallbackAlt: "",
                      className: "w-full h-full object-cover"
                    })
                  }), e.image2.data && (0, l.jsx)("div", {
                    ref: e => {
                      y.current[r][1] = e
                    },
                    className: "absolute top-0 left-0 w-full h-full",
                    children: (0, l.jsx)(d.p, {
                      transition: "fast",
                      image: e.image2.data,
                      sizes: "(max-width: 768px) 100vw, 95vw",
                      fallbackAlt: "",
                      className: "w-full h-full object-cover"
                    })
                  }), e.image3.data && (0, l.jsx)("div", {
                    ref: e => {
                      y.current[r][2] = e
                    },
                    className: "absolute top-0 left-0 w-full h-full",
                    children: (0, l.jsx)(d.p, {
                      transition: "fast",
                      image: e.image3.data,
                      sizes: "(max-width: 768px) 100vw, 95vw",
                      fallbackAlt: "",
                      className: "w-full h-full object-cover"
                    })
                  }), e.image4.data && (0, l.jsx)("div", {
                    ref: e => {
                      y.current[r][3] = e
                    },
                    className: "absolute top-0 left-0 w-full h-full",
                    children: (0, l.jsx)(d.p, {
                      transition: "fast",
                      image: e.image4.data,
                      sizes: "(max-width: 768px) 100vw, 95vw",
                      fallbackAlt: "",
                      className: "w-full h-full object-cover"
                    })
                  })]
                })
              }, "fullscreenslider-image-".concat(r))), (0, l.jsx)("div", {
                ref: E,
                className: "absolute bottom-10 ".concat("right" === r.contentPosition ? "right-10" : "left-10", " w-[35.2rem] min-h-[42rem] bg-dark_beige/[0.38] backdrop-blur-[60px] rounded-12"),
                children: r.items.map((e, r) => (0, l.jsxs)("div", {
                  ref: e => {
                    p.current[r] = e
                  },
                  style: 2 !== r ? {
                    pointerEvents: "none"
                  } : {},
                  className: "absolute w-full h-full top-0 left-0 px-[1.2rem] pt-20 pb-40 flex flex-col",
                  children: [(0, l.jsx)("div", {
                    ref: e => {
                      h.current[r] = e
                    },
                    className: "text-white text-center font-headings text-30 leading-[120%] -tracking-[0.09rem] font-medium my-[5.2rem]",
                    children: e.title
                  }), (0, l.jsxs)("div", {
                    ref: e => {
                      x.current[r] = e
                    },
                    className: "relative w-full mb-40",
                    children: [(0, l.jsx)("div", {
                      className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                      children: (0, l.jsx)("div", {
                        className: "svg-wrapper w-[0.7rem]",
                        children: (0, l.jsx)(i.Z, {
                          color: "#F2EFE9",
                          className: ""
                        })
                      })
                    }), (0, l.jsx)("div", {
                      className: "w-full h-px bg-white opacity-20"
                    })]
                  }), (0, l.jsxs)("div", {
                    className: "text-14 leading-[2rem] tracking-[0.014rem] text-white text-center px-[2.8rem]",
                    children: [(0, l.jsx)("div", {
                      ref: e => {
                        b.current[r] = e
                      },
                      children: (0, l.jsx)(f.Z, {
                        content: e.content
                      })
                    }), (e.image2.data || e.image3.data || e.image4.data) && (0, l.jsxs)("div", {
                      ref: e => {
                        w.current[r] = e
                      },
                      className: "w-full flex items-center justify-center gap-x-[1rem] mt-[6.8rem]",
                      children: [k.current[r] = [], (0, l.jsxs)("div", {
                        ref: e => {
                          k.current[r][0] = e
                        },
                        className: "group relative flex justify-center items-center w-[2.5rem] h-[2.5rem] cursor-pointer a",
                        onClick: () => q(r, 0),
                        children: [(0, l.jsx)("div", {
                          className: "absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 rounded-full border-px border-white opacity-0 transition-opacity duration-global ease-out group-[.a]:opacity-20 group-hover:opacity-20"
                        }), (0, l.jsx)("div", {
                          className: "w-[1rem] h-[1rem] rounded-full",
                          style: {
                            backgroundColor: e.mainImageColor || "#fff"
                          }
                        })]
                      }), e.image2.data && (0, l.jsxs)("div", {
                        ref: e => {
                          k.current[r][1] = e
                        },
                        className: "group relative flex justify-center items-center w-[2.5rem] h-[2.5rem] cursor-pointer",
                        onClick: () => q(r, 1),
                        children: [(0, l.jsx)("div", {
                          className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full border-px border-white opacity-0 transition-opacity duration-global ease-out group-[.a]:opacity-20 group-hover:opacity-20"
                        }), (0, l.jsx)("div", {
                          className: "w-[1rem] h-[1rem] rounded-full",
                          style: {
                            backgroundColor: e.image2Color || "#fff"
                          }
                        })]
                      }), e.image3.data && (0, l.jsxs)("div", {
                        ref: e => {
                          k.current[r][2] = e
                        },
                        className: "group relative flex justify-center items-center w-[2.5rem] h-[2.5rem] cursor-pointer",
                        onClick: () => q(r, 2),
                        children: [(0, l.jsx)("div", {
                          className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full border-px border-white opacity-0 transition-opacity duration-global ease-out group-[.a]:opacity-20 group-hover:opacity-20"
                        }), (0, l.jsx)("div", {
                          className: "w-[1rem] h-[1rem] rounded-full",
                          style: {
                            backgroundColor: e.image3Color || "#fff"
                          }
                        })]
                      }), e.image4.data && (0, l.jsxs)("div", {
                        ref: e => {
                          k.current[r][3] = e
                        },
                        className: "group relative flex justify-center items-center w-[2.5rem] h-[2.5rem] cursor-pointer",
                        onClick: () => q(r, 3),
                        children: [(0, l.jsx)("div", {
                          className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full border-px border-white opacity-0 transition-opacity duration-global ease-out group-[.a]:opacity-20 group-hover:opacity-20"
                        }), (0, l.jsx)("div", {
                          className: "w-[1rem] h-[1rem] rounded-full",
                          style: {
                            backgroundColor: e.image4Color || "#fff"
                          }
                        })]
                      })]
                    })]
                  }), e.button ? (0, l.jsx)("div", {
                    ref: e => {
                      v.current[r] = e
                    },
                    className: "mt-auto",
                    children: (0, l.jsx)("div", {
                      className: "w-full relative mt-auto z-1 hidden landscape:block pointer-events-auto",
                      children: (0, l.jsx)("div", {
                        className: "block w-full text-center bg-white xl:bg-light_beige landscape:bg-light_beige xl:transition-bg xl:duration-global xl:ease-out xl:hover:bg-dark_beige/50 text-dark_grey rounded-[0.8rem] xl:rounded-10 text-10 tracking-[0.05rem] leading-[180%] md:text-12 md:tracking-[0.036rem] md:leading-[200%] font-body-mono uppercase",
                        children: (0, l.jsx)(g.U, {
                          data: e.button,
                          className: "flex justify-center items-center w-full py-[1.7rem] xl:py-[2.1rem]"
                        })
                      })
                    })
                  }) : null]
                }, "fullscreenslider-slide-".concat(r)))
              })]
            })
          })
        }
    },
    9139: function(e, r, t) {
      "use strict";
      t.d(r, {
        Z: function() {
          return s
        }
      });
      var l = t(5893),
        n = t(230),
        a = t(8406),
        c = t.n(a);

      function s(e) {
        let {
          content: r,
          blocks: t,
          className: a
        } = e;
        return (0, l.jsx)("div", {
          className: [c().root, a].join(" "),
          children: (0, l.jsx)(n.i, {
            content: r,
            blocks: t
          })
        })
      }
    },
    8406: function(e) {
      e.exports = {
        root: "StrapiRichText_root__LUiYo"
      }
    },
    230: function(e, r, t) {
      "use strict";
      t.d(r, {
        i: function() {
          return f
        }
      });
      var l = t(5893),
        n = t(7294);
      let a = ({
          text: e,
          ...r
        }) => {
          let {
            modifiers: t,
            missingModifierTypes: n
          } = m();
          return Object.keys(r).reduce((e, a) => {
            if (!r[a]) return e;
            let c = t[a];
            return c ? (0, l.jsx)(c, {
              children: e
            }) : (n.includes(a) || (console.warn(`[@strapi/block-react-renderer] No component found for modifier "${a}"`), n.push(a)), e)
          }, (0, l.jsx)(l.Fragment, {
            children: e
          }))
        },
        c = ["image"],
        s = e => {
          let {
            children: r,
            type: t,
            ...l
          } = e;
          if ("code" === t) {
            let r = e => e.reduce((e, t) => "text" === t.type ? e.concat(t.text) : "link" === t.type ? e.concat(r(t.children)) : e, "");
            return {
              ...l,
              plainText: r(e.children)
            }
          }
          return l
        },
        i = ({
          content: e
        }) => {
          let {
            children: r,
            type: t,
            ...o
          } = e, {
            blocks: u,
            missingBlockTypes: d
          } = m(), f = u[t];
          if (!f) return d.includes(t) || (console.warn(`[@strapi/block-react-renderer] No component found for block type "${t}"`), d.push(t)), null;
          if (c.includes(t)) return (0, l.jsx)(f, {
            ...o
          });
          if ("paragraph" === t && 1 === r.length && "text" === r[0].type && "" === r[0].text) return (0, l.jsx)("br", {});
          let g = s(e);
          return (0, l.jsx)(f, {
            ...g,
            children: r.map((e, r) => {
              if ("text" === e.type) {
                let {
                  type: t,
                  ...l
                } = e;
                return (0, n.createElement)(a, {
                  ...l,
                  key: r
                })
              }
              return (0, l.jsx)(i, {
                content: e
              }, r)
            })
          })
        },
        o = {
          blocks: {
            paragraph: e => (0, l.jsx)("p", {
              children: e.children
            }),
            quote: e => (0, l.jsx)("blockquote", {
              children: e.children
            }),
            code: e => (0, l.jsx)("pre", {
              children: (0, l.jsx)("code", {
                children: e.plainText
              })
            }),
            heading: ({
              level: e,
              children: r
            }) => {
              switch (e) {
                case 1:
                  return (0, l.jsx)("h1", {
                    children: r
                  });
                case 2:
                  return (0, l.jsx)("h2", {
                    children: r
                  });
                case 3:
                  return (0, l.jsx)("h3", {
                    children: r
                  });
                case 4:
                  return (0, l.jsx)("h4", {
                    children: r
                  });
                case 5:
                  return (0, l.jsx)("h5", {
                    children: r
                  });
                case 6:
                  return (0, l.jsx)("h6", {
                    children: r
                  })
              }
            },
            link: e => (0, l.jsx)("a", {
              href: e.url,
              children: e.children
            }),
            list: e => "ordered" === e.format ? (0, l.jsx)("ol", {
              children: e.children
            }) : (0, l.jsx)("ul", {
              children: e.children
            }),
            "list-item": e => (0, l.jsx)("li", {
              children: e.children
            }),
            image: e => (0, l.jsx)("img", {
              src: e.image.url,
              alt: e.image.alternativeText || void 0
            })
          },
          modifiers: {
            bold: e => (0, l.jsx)("strong", {
              children: e.children
            }),
            italic: e => (0, l.jsx)("em", {
              children: e.children
            }),
            underline: e => (0, l.jsx)("u", {
              children: e.children
            }),
            strikethrough: e => (0, l.jsx)("del", {
              children: e.children
            }),
            code: e => (0, l.jsx)("code", {
              children: e.children
            })
          },
          missingBlockTypes: [],
          missingModifierTypes: []
        },
        u = n.createContext(o),
        d = ({
          children: e,
          value: r = o
        }) => {
          let t = n.useMemo(() => r, [r]);
          return (0, l.jsx)(u.Provider, {
            value: t,
            children: e
          })
        };

      function m() {
        return n.useContext(u)
      }
      let f = e => {
        let r = {
            ...o.blocks,
            ...e.blocks
          },
          t = {
            ...o.modifiers,
            ...e.modifiers
          },
          a = n.useRef([]),
          c = n.useRef([]);
        return (0, l.jsx)(d, {
          value: {
            blocks: r,
            modifiers: t,
            missingBlockTypes: a.current,
            missingModifierTypes: c.current
          },
          children: e.content.map((e, r) => (0, l.jsx)(i, {
            content: e
          }, r))
        })
      }
    }
  }
]);
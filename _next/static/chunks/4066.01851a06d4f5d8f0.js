"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4066], {
    4066: function(e, t, r) {
      r.r(t);
      var n = r(5893),
        l = r(7825),
        a = r(7118),
        c = r(7294),
        s = r(6546),
        i = r(6038),
        o = r(188),
        u = r(4247),
        d = r(146),
        m = r(1800),
        p = r(1100),
        f = r(2881),
        h = r(6620);
      t.default = e => {
        let {
          item: t,
          items: r,
          index: c
        } = e, s = (0, l.a)("(max-width: 1200px)", !0), i = "White" === t.backgroundColor.color ? "bg-white" : "Beige light" === t.backgroundColor.color ? "bg-light_beige" : "Beige dark" === t.backgroundColor.color ? "bg-dark_beige" : "Grey dark" === t.backgroundColor.color ? "bg-dark_grey" : "bg-green";
        return (0, n.jsx)(a.Z, {
          sticky: !0,
          zIndex: r.length - c,
          children: (0, n.jsx)("section", {
            className: "relative ".concat(i, " "),
            children: s ? (0, n.jsx)(x, {
              item: t,
              bgColor: i
            }) : (0, n.jsx)(g, {
              item: t
            })
          })
        })
      };
      let g = e => {
          let {
            item: t
          } = e, r = "content.sticky-slider-with-anchors" === t.__component, l = (0, c.useRef)(), a = (0, c.useRef)([]), u = (0, c.useRef)(null), d = (0, c.useRef)([]), m = (0, c.useRef)(null), h = (0, c.useRef)(0), g = (0, c.useRef)(null), x = (0, c.useRef)(0), b = (0, c.useRef)([]), y = (0, c.useRef)([]), k = (0, c.useRef)([]), N = (0, c.useRef)(null), R = (0, c.useRef)([]), _ = (0, c.useRef)(null), E = () => {
            for (let e = 0; e < y.current.length; e++) y.current[e] && (y.current[e].src = y.current[e].dataset.src, y.current[e].load(), y.current[e].addEventListener("play", () => {
              b.current[e].classList.add("opacity-0")
            }, {
              once: !0
            }))
          };
          (0, c.useEffect)(() => {
            S(), E(), window.addEventListener("scroll", T);
            let e = k.current;
            return () => {
              window.removeEventListener("scroll", T), N.current && (N.current.kill(), N.current = null), e.forEach(e => {
                e.kill(), e = null
              })
            }
          }, []);
          let T = () => {
              x.current = window.scrollY
            },
            A = e => {
              y.current[e] && !y.current[e].paused && y.current[e].pause()
            },
            L = e => {
              y.current[e] && y.current[e].paused && y.current[e].play()
            },
            S = () => {
              a.current.forEach((e, t) => {
                let n = i.p8.timeline();
                n.set(e, {
                  yPercent: 100
                }), n.set(e.children[0], {
                  yPercent: -90
                }), n.to(e, {
                  yPercent: 0,
                  ease: "none"
                }), n.to(e.children[0], {
                  yPercent: 0,
                  ease: "none"
                }, "<"), k.current[t] = s.ScrollTrigger.create({
                  trigger: e,
                  start: () => t > 0 ? "".concat(t * window.innerHeight, "px bottom") : "0px bottom",
                  end: () => "+=".concat(window.innerHeight),
                  animation: t > 0 ? n : null,
                  scrub: !0,
                  onUpdate: () => {
                    if (!k.current[t]) return;
                    let e = x.current,
                      n = e - h.current,
                      l = n > 0 ? "bottom" : n < 0 ? "top" : null;
                    if (h.current = e, "bottom" === l) {
                      if (k.current[t].progress >= .5 && m.current !== d.current[t] && (m.current && t > 0 && (m.current && m.current.killAnimations({
                          enter: !1
                        }), m.current.hide(), r && u.current.anchors.current[t - 1].hideActive({
                          from: "right"
                        })), m.current && m.current.killAnimations({
                          enter: !0
                        }), m.current = d.current[t], m.current.show(), r ? (u.current.moveAnchorTimeline(t), u.current.updateLink(t), u.current.anchors.current[t].showActive()) : g.current.updateLink(t)), k.current[t].progress >= .85) {
                        let e = t < k.current.length - 1 && t + 1;
                        e && L(e)
                      }
                      if (k.current[t].progress >= 0 && L(t), 1 === k.current[t].progress) {
                        let e = t > 0 && t - 1;
                        e && A(e)
                      }
                    } else if ("top" === l && 0 !== t) {
                      if (k.current[t].progress < .5 && m.current !== d.current[t - 1] && (m.current && (m.current && m.current.killAnimations({
                          enter: !1
                        }), m.current.hide(), r && u.current.anchors.current[t].hideActive({
                          from: "left"
                        })), m.current && m.current.killAnimations({
                          enter: !0
                        }), m.current = d.current[t - 1], m.current.show(), r ? (u.current.moveAnchorTimeline(t - 1), u.current.updateLink(t - 1), u.current.anchors.current[t - 1].showActive()) : g.current.updateLink(t - 1)), k.current[t].progress <= 1) {
                        let e = t > 0 && t - 1;
                        e && L(e)
                      }
                      0 === k.current[t].progress && A(t)
                    } else "top" === l && 0 === t && k.current[t].progress <= 1 && 0 === t && A(t)
                  }
                }), t !== a.current.length - 1 ? R.current[t] = s.ScrollTrigger.create({
                  trigger: e,
                  start: () => t > 0 ? "".concat((t + 1) * window.innerHeight + (0, o.z6)(10), "px bottom") : "".concat((t + 2) * window.innerHeight, "px bottom"),
                  end: () => "+=".concat(window.innerHeight),
                  animation: i.p8.fromTo(e.children[0], {
                    yPercent: 0
                  }, {
                    yPercent: -10,
                    ease: "none"
                  }),
                  scrub: !0
                }) : _.current = s.ScrollTrigger.create({
                  trigger: e,
                  start: () => "top+=".concat((t + 1) * window.innerHeight + .1 * window.innerHeight + (0, o.z6)(10), "px bottom"),
                  end: () => "+=".concat(window.innerHeight),
                  animation: i.p8.fromTo(e.children[0], {
                    yPercent: 0
                  }, {
                    yPercent: 10,
                    ease: "none"
                  }),
                  scrub: !0
                }), N.current = s.ScrollTrigger.create({
                  trigger: l.current,
                  onEnterBack: () => {
                    y.current[y.current.length - 1] && L(y.current.length - 1)
                  },
                  onLeave: () => {
                    y.current[y.current.length - 1] && A(y.current.length - 1)
                  }
                })
              })
            };
          return (0, n.jsxs)("div", {
            ref: l,
            className: "p-10 flex gap-[0.4rem] sticky top-0 -mt-[100vh]",
            style: {
              height: "".concat((t.items.length + 1) * 100 + 10, "vh")
            },
            children: [(0, n.jsxs)("div", {
              className: "w-[36.5%] h-[calc(100vh_-_2rem)] sticky top-10 bg-white rounded-18 flex flex-col pb-[3rem] px-[3rem]",
              children: [(0, n.jsx)("div", {
                className: "absolute top-0 right-0 w-full h-full bg-dots bg-size-dots bg-repeat opacity-40 pointer-events-none"
              }), (0, n.jsx)("div", {
                className: "h-full relative",
                children: t.items.map((e, t) => (0, n.jsx)(w, {
                  ref: e => {
                    d.current[t] = e
                  },
                  sectionTitle: e.sectionTitle,
                  contentText: e.contentText
                }, "stickyslider-slide-".concat(t)))
              }), r ? (0, n.jsx)(j, {
                ref: u,
                items: t.items,
                lastAnchorText: t.lastAnchorText
              }) : (0, n.jsx)(v, {
                ref: g,
                items: t.items
              })]
            }), (0, n.jsx)("div", {
              className: "flex-1 h-[calc(100vh_-_2rem)] sticky top-10 rounded-18 overflow-hidden z-1",
              children: t.items.map((e, t) => (0, n.jsx)("div", {
                ref: e => {
                  a.current[t] = e
                },
                className: "w-full h-full absolute left-0 top-0 overflow-hidden rounded-t-18",
                style: {
                  zIndex: t + 1
                },
                children: e.video.data ? (0, n.jsxs)("div", {
                  className: "w-full h-full",
                  children: [(0, n.jsx)("div", {
                    ref: e => {
                      b.current[t] = e
                    },
                    className: "absolute left-0 top-0 w-full h-full z-1 transition-opacity duration-global ease-out",
                    children: e.image.data && (0, n.jsx)(p.p, {
                      transition: "fast",
                      image: e.image.data,
                      fallbackAlt: "",
                      fill: !0,
                      className: "object-cover",
                      sizes: "(max-width: 768px) 96vw, 63.5vw"
                    })
                  }), (0, n.jsx)("video", {
                    ref: e => {
                      y.current[t] = e
                    },
                    "data-src": f.$N(e.video.data.attributes.url),
                    muted: !0,
                    loop: !0,
                    playsInline: !0,
                    className: "w-full h-full object-cover"
                  })]
                }) : (0, n.jsxs)(n.Fragment, {
                  children: [y.current[t] = null, e.image.data && (0, n.jsx)(p.p, {
                    transition: "fast",
                    image: e.image.data,
                    fallbackAlt: "",
                    fill: !0,
                    className: "object-cover",
                    sizes: "(max-width: 768px) 96vw, 63.5vw"
                  })]
                })
              }, "stickyslider-image-".concat(t)))
            })]
          })
        },
        x = e => {
          let {
            item: t,
            bgColor: r
          } = e, l = (0, c.useRef)(null), a = (0, c.useRef)([]), i = (0, c.useRef)([]), o = (0, c.useRef)([]), d = (0, c.useRef)([]), m = (0, c.useRef)(null), h = () => {
            for (let e = 0; e < o.current.length; e++) o.current[e] && (o.current[e].load(), o.current[e].addEventListener("play", () => {
              i.current[e].classList.add("opacity-0")
            }, {
              once: !0
            }))
          };
          (0, c.useEffect)(() => {
            w(), h(), m.current = s.ScrollTrigger.create({
              trigger: l.current,
              onLeave: () => {
                x(a.current.length - 1)
              },
              onEnterBack: () => {
                g(a.current.length - 1)
              }
            });
            let e = d.current;
            return () => {
              m.current.kill(), m.current = null, e.forEach(e => {
                e.kill(), e = null
              })
            }
          }, []);
          let g = e => {
              o.current[e] && o.current[e].play()
            },
            x = e => {
              o.current[e] && o.current[e].pause()
            },
            w = () => {
              a.current.forEach((e, t) => {
                t > 0 ? d.current[t] = s.ScrollTrigger.create({
                  trigger: e,
                  start: () => "top bottom-=100%",
                  onEnter: () => {
                    g(t)
                  },
                  onEnterBack: () => {
                    t > 0 && g(t - 1)
                  },
                  onLeave: () => {
                    t > 0 && x(t - 1)
                  },
                  onLeaveBack: () => {
                    x(t)
                  }
                }) : d.current[t] = s.ScrollTrigger.create({
                  trigger: e,
                  start: "bottom bottom",
                  onEnter: () => {
                    g(t)
                  },
                  onLeaveBack: () => {
                    x(t)
                  }
                })
              })
            };
          return (0, n.jsx)("div", {
            ref: l,
            className: "w-full sticky p-half-container-mobile md:p-half-container landscape:p-0 -mt-[100vh]",
            style: {
              height: "calc(".concat((t.items.length + 1) * 100, "vh + 1rem)")
            },
            children: (0, n.jsx)("div", {
              className: "sticky top-half-container-mobile md:top-half-container landscape:top-0 w-full",
              children: t.items.map((e, t, l) => (0, n.jsxs)("div", {
                ref: e => {
                  a.current[t] = e
                },
                className: "relative landscape:sticky landscape:top-0 landscape:".concat(r, " p-half-container-mobile md:p-half-container w-full h-[calc(100vh_-_1.2rem)] md:h-[calc(100vh_-_2rem)] flex flex-col rounded-15 mb-[1.2rem] landscape:rounded-[0] landscape:mb-10 bg-white landscape:flex-row landscape:gap-x-[0.4rem] landscape:h-screen"),
                style: {
                  zIndex: t + 1
                },
                children: [(0, n.jsx)("div", {
                  className: "absolute top-0 right-0 w-full h-full bg-dots bg-size-dots bg-repeat opacity-40 pointer-events-none"
                }), (0, n.jsxs)("div", {
                  className: "flex flex-col items-center gap-[6rem] pb-[6rem] pt-[10.2rem] rounded-10 px-[0.8rem] landscape:w-[36.5%] landscape:pt-[18rem] landscape:gap-0 landscape:pb-[3rem] landscape:px-[3rem] landscape:bg-white",
                  children: [(0, n.jsx)("div", {
                    className: "text-32 text-dark_grey text-center font-headings -tracking-[0.128rem] leading-[93%] landscape:pb-[14.4rem] landscape:text-44 landscape:leading-[86%] landscape:-tracking-[0.176rem]",
                    children: e.sectionTitle
                  }), (0, n.jsx)("div", {
                    className: "relative w-full h-px bg-dark_grey/10 -mb-[4rem] landscape:mb-[3.2rem]",
                    children: (0, n.jsx)("div", {
                      className: "absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 svg-wrapper w-[0.7rem] h-[0.7rem]",
                      children: (0, n.jsx)(u.Z, {
                        className: ""
                      })
                    })
                  }), (0, n.jsx)("div", {
                    className: "px-[4.55rem] text-13 tracking-[0.013rem] leading-[153.8%] text-dark_grey text-center md:w-[60%] md:landscape:w-[80%]",
                    children: (0, n.jsx)("p", {
                      children: e.contentText
                    })
                  }), e.button && (0, n.jsx)("div", {
                    className: "w-full relative mt-auto z-1 hidden landscape:block",
                    children: (0, n.jsx)(v, {
                      items: l,
                      defaultIndex: t
                    })
                  })]
                }), (0, n.jsxs)("div", {
                  className: "flex-1 relative w-full h-[100px] landscape:h-full flex flex-col rounded-10 overflow-hidden",
                  children: [e.video && e.video.data ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("div", {
                      ref: e => {
                        i.current[t] = e
                      },
                      className: "absolute left-0 top-0 w-full h-full z-1 transition-opacity duration-global ease-out",
                      children: e.image.data && (0, n.jsx)(p.p, {
                        image: e.image.data,
                        fallbackAlt: "",
                        className: "w-full h-full object-cover",
                        sizes: "96vw"
                      })
                    }), (0, n.jsx)("video", {
                      ref: e => {
                        o.current[t] = e
                      },
                      preload: "none",
                      src: f.$N(e.video.data.attributes.url),
                      muted: !0,
                      loop: !0,
                      playsInline: !0,
                      className: "absolute top-0 left-0 w-full h-full object-cover"
                    })]
                  }) : e.image.data ? (0, n.jsx)(p.p, {
                    image: e.image.data,
                    fallbackAlt: "",
                    className: "absolute top-0 left-0 w-full h-full object-cover",
                    sizes: "96vw"
                  }) : null, e.button && (0, n.jsx)("div", {
                    className: "w-full p-[0.8rem] relative mt-auto z-1 landscape:hidden",
                    children: (0, n.jsx)(v, {
                      items: l,
                      defaultIndex: t
                    })
                  })]
                })]
              }, "stickyslider-mobile-item-".concat(t)))
            })
          })
        },
        v = (0, c.forwardRef)((e, t) => {
          let {
            items: r,
            defaultIndex: l = 0
          } = e, [a, s] = (0, c.useState)(r[l]), o = (0, d.o)(e => e.windowWidth), u = (0, c.useRef)(null), p = (0, c.useRef)(null);
          (0, c.useImperativeHandle)(t, () => ({
            updateLink: g
          })), (0, c.useEffect)(() => {
            a && i.p8.to([p.current, u.current], {
              alpha: 1,
              duration: .3,
              ease: "linear"
            })
          }, [a]), (0, c.useEffect)(() => {
            x()
          }, [o]);
          let g = e => {
              let t = !1;
              if (!r[e].button) {
                i.p8.to(p.current, {
                  alpha: 0,
                  duration: .3,
                  ease: "linear",
                  onComplete: () => s(null)
                });
                return
              }
              a ? (f.sI(a.button) !== f.sI(r[e].button) && (t = !0), a.button.title !== r[e].button.title && (t = !0)) : t = !0, t && (u.current ? i.p8.to(u.current, {
                alpha: 0,
                duration: .3,
                ease: "linear",
                onComplete: () => s(r[e])
              }) : s(r[e]))
            },
            x = () => {
              u.current && (p.current.style.height = "auto", p.current.style.height = "".concat(u.current.offsetHeight, "px"))
            };
          return (0, n.jsx)("div", {
            ref: p,
            children: (0, n.jsx)("div", {
              className: "block w-full text-center bg-white xl:bg-light_beige landscape:bg-light_beige xl:transition-bg xl:duration-global xl:ease-out xl:hover:bg-dark_beige/50 text-dark_grey rounded-[0.8rem] xl:rounded-10 text-10 tracking-[0.05rem] leading-[180%] md:text-12 md:tracking-[0.036rem] md:leading-[200%] font-body-mono uppercase",
              style: {
                opacity: a && a.button ? 1 : 0
              },
              children: a && a.button ? (0, n.jsxs)(h.U, {
                data: a.button,
                className: "flex justify-center items-center w-full py-[1.7rem] xl:py-[2.1rem]",
                ref: u,
                children: [(0, n.jsx)("span", {
                  children: a.button.title
                }), (0, n.jsx)("span", {
                  className: "svg-wrapper w-[0.95rem] h-[0.84rem] ml-[1.75rem] md:ml-[0.85rem]",
                  children: (0, n.jsx)(m.Z, {})
                })]
              }) : (0, n.jsxs)("div", {
                className: "flex justify-center items-center w-full py-[1.7rem] xl:py-[2.1rem]",
                children: [(0, n.jsx)("span", {
                  children: "No link"
                }), (0, n.jsx)("span", {
                  className: "svg-wrapper w-[0.95rem] h-[0.84rem] ml-[1.75rem] md:ml-[0.85rem]",
                  children: (0, n.jsx)(m.Z, {})
                })]
              })
            })
          })
        });
      v.displayName = "StickySliderButton";
      let w = (0, c.forwardRef)((e, t) => {
        let {
          sectionTitle: r,
          contentText: l
        } = e, a = (0, c.useRef)(null), s = (0, c.useRef)(null), o = (0, c.useRef)(null), d = (0, c.useRef)(null), m = (0, c.useRef)(null), p = (0, c.useMemo)(() => (0, n.jsx)(b, {
          ref: m,
          field: l
        }), [l]);
        (0, c.useImperativeHandle)(t, () => ({
          killAnimations: f,
          show: h,
          hide: g
        }));
        let f = e => {
            let {
              enter: t
            } = e;
            t ? o.current && o.current.isActive() && (o.current.kill(), o.current = null) : d.current && d.current.isActive() && (d.current.kill(), d.current = null)
          },
          h = () => {
            o.current = i.p8.timeline(), o.current.to([m.current.getSplittedText(), s.current, a.current], {
              autoAlpha: 1,
              delay: .35,
              stagger: .01,
              duration: .4,
              ease: "power2.inOut",
              overwrite: !0
            })
          },
          g = () => {
            d.current = i.p8.timeline(), d.current.to([m.current.getSplittedText(), s.current, a.current], {
              autoAlpha: 0,
              stagger: .01,
              duration: .4,
              ease: "power2.inOut"
            })
          };
        return (0, n.jsxs)("div", {
          ref: t,
          className: "flex flex-col h-full absolute left-0 top-0 w-full",
          children: [(0, n.jsx)("div", {
            ref: a,
            className: "w-[80%] mx-auto opacity-0 invisible h-[45%] mt-[3rem] flex items-center justify-center text-44 leading-[86%] text-dark_grey text-center font-headings -tracking-[0.176rem]",
            children: r
          }), (0, n.jsx)("div", {
            ref: s,
            className: "opacity-0 relative invisible w-full h-px bg-dark_grey/10 mb-[3.2rem]",
            children: (0, n.jsx)("div", {
              className: "absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 svg-wrapper w-[0.7rem] h-[0.7rem]",
              children: (0, n.jsx)(u.Z, {
                className: ""
              })
            })
          }), p]
        })
      });
      w.displayName = "SlideContent";
      let b = (0, c.forwardRef)((e, t) => {
        let {
          field: l
        } = e, a = (0, c.useRef)(null), s = (0, c.useRef)(null);
        (0, c.useImperativeHandle)(t, () => ({
          getSplittedText: o
        }));
        let o = () => a.current;
        return (0, c.useEffect)(() => {
          let e = r(2392);
          a.current = new e({
            target: s.current,
            by: "words"
          })[0].words, a.current.reverse(), i.p8.set(a.current, {
            autoAlpha: 0
          })
        }, []), (0, n.jsx)("div", {
          ref: s,
          className: "flex-1 flex justify-between text-14 text-dark_grey",
          children: (0, n.jsx)("div", {
            className: "w-[65%] 2xl:w-[55%] text-center mx-auto",
            children: (0, n.jsx)("p", {
              children: l
            })
          })
        })
      });
      b.displayName = "SlideContentSplitted";
      let j = (0, c.forwardRef)((e, t) => {
        let {
          items: r,
          lastAnchorText: l
        } = e, [a, s] = (0, c.useState)(!1), o = (0, c.useRef)(null), m = (0, c.useRef)([]), p = (0, c.useRef)(null), f = (0, c.useRef)(null), h = (0, c.useRef)(null), g = (0, d.o)(e => e.windowWidth);
        (0, c.useImperativeHandle)(t, () => ({
          anchors: m,
          moveAnchorTimeline: b,
          updateLink: w
        })), (0, c.useEffect)(() => {
          document.fonts.ready.then(() => {
            s(!0)
          })
        }, []), (0, c.useEffect)(() => {
          x()
        }, [a, g]);
        let x = () => {
            let e = p.current.getBoundingClientRect(),
              t = f.current.getBoundingClientRect().width - e.width;
            h.current = t / (r.length - 1)
          },
          w = e => {
            var t;
            null === (t = o.current) || void 0 === t || t.updateLink(e)
          },
          b = e => {
            i.p8.to(f.current, {
              x: -h.current * e,
              duration: 1,
              ease: "power2.inOut"
            })
          };
        return (0, n.jsxs)("div", {
          ref: t,
          className: "mt-auto w-full relative",
          style: {
            height: "".concat(150, "px")
          },
          children: [(0, n.jsx)("div", {
            ref: p,
            className: "w-full overflow-hidden h-1/2",
            children: (0, n.jsxs)("div", {
              ref: f,
              className: "inline-flex items-center h-full gap-x-15 flex-nowrap uppercase px-10",
              children: [r.map((e, t) => (0, n.jsx)(y, {
                ref: e => m.current[t] = e,
                index: t,
                text: e.anchorText
              }, "stickyslider-anchor-".concat(t))), (0, n.jsx)(y, {
                ref: e => m.current[r.length] = e,
                index: r.length,
                text: l
              })]
            })
          }), (0, n.jsxs)("div", {
            className: " h-1/2 flex flex-end relative",
            children: [(0, n.jsx)("div", {
              className: "absolute left-px top-px -translate-x-[54%] -translate-y-[53%] w-[0.7rem] h-[0.9rem] svg-wrapper",
              children: (0, n.jsx)(u.Z, {
                className: ""
              })
            }), (0, n.jsx)("div", {
              className: "w-full pt-[0.8rem] px-[0.8rem] border-t-px border-dark_grey/20",
              children: (0, n.jsx)(v, {
                ref: o,
                items: r
              })
            }), (0, n.jsx)("div", {
              className: "absolute right-px top-px translate-x-[54%] -translate-y-[53%] w-[0.7rem] h-[0.9rem] svg-wrapper",
              children: (0, n.jsx)(u.Z, {
                className: ""
              })
            })]
          }), (0, n.jsx)("div", {
            className: "absolute left-0 top-0 w-px h-full bg-dark_grey opacity-20"
          }), (0, n.jsx)("div", {
            className: "absolute right-0 top-0 w-px h-full bg-dark_grey opacity-20"
          })]
        })
      });
      j.displayName = "Anchors";
      let y = (0, c.forwardRef)((e, t) => {
        let {
          index: r,
          text: l
        } = e, a = (0, c.useRef)(null);
        (0, c.useImperativeHandle)(t, () => ({
          showActive: s,
          hideActive: o
        })), (0, c.useEffect)(() => {
          i.p8.set(a.current, {
            xPercent: -100
          }), i.p8.set(a.current.children[0], {
            xPercent: 100
          })
        });
        let s = () => {
            i.p8.to(a.current, {
              xPercent: 0,
              duration: 1,
              ease: "power2.inOut"
            }), i.p8.to(a.current.children[0], {
              xPercent: 0,
              duration: 1,
              ease: "power2.inOut"
            })
          },
          o = e => {
            let {
              from: t = "left"
            } = e;
            "left" === t ? (i.p8.to(a.current, {
              xPercent: -100,
              duration: 1,
              ease: "power2.inOut"
            }), i.p8.to(a.current.children[0], {
              xPercent: 100,
              duration: 1,
              ease: "power2.inOut"
            })) : (i.p8.to(a.current, {
              xPercent: 100,
              duration: 1,
              ease: "power2.inOut"
            }), i.p8.to(a.current.children[0], {
              xPercent: -100,
              duration: 1,
              ease: "power2.inOut"
            }))
          };
        return (0, n.jsxs)("div", {
          ref: t,
          className: "relative font-body-mono text-10 whitespace-nowrap",
          children: [(0, n.jsxs)("div", {
            className: "text-dark_beige",
            children: [r + 1, ".", l]
          }), (0, n.jsx)("div", {
            ref: a,
            className: "overflow-hidden absolute left-0 top-0",
            children: (0, n.jsxs)("div", {
              className: "text-dark_grey",
              children: [r + 1, ".", l]
            })
          })]
        })
      });
      y.displayName = "Anchor"
    },
    7118: function(e, t, r) {
      var n = r(5893),
        l = r(7294),
        a = r(6546),
        c = r(146),
        s = r(188);
      t.Z = e => {
        let {
          children: t,
          sticky: r = !1,
          zIndex: i = 0
        } = e, o = (0, l.useRef)(null), u = (0, l.useRef)(null), d = (0, c.o)(e => e.headerLoaded), m = (0, c.o)(e => e.setHeaderDark);
        return (0, l.useEffect)(() => {
          if (!d) return;
          let e = document.querySelector(".header");
          return r ? u.current = a.ScrollTrigger.create({
            trigger: o.current,
            start: () => "top+=".concat(window.innerHeight, " top+=").concat(e.getBoundingClientRect().bottom),
            end: () => "bottom-=".concat((0, s.z6)(10), " top+=").concat(e.getBoundingClientRect().bottom),
            onEnter: () => {
              m(!0)
            },
            onLeave: () => {
              m(!1)
            },
            onEnterBack: () => {
              m(!0)
            },
            onLeaveBack: () => {
              m(!1)
            }
          }) : u.current = a.ScrollTrigger.create({
            trigger: o.current,
            start: () => "top top+=".concat(e.getBoundingClientRect().bottom),
            end: () => "bottom top+=".concat(e.getBoundingClientRect().bottom),
            onEnter: () => {
              m(!0)
            },
            onLeave: () => {
              m(!1)
            },
            onEnterBack: () => {
              m(!0)
            },
            onLeaveBack: () => {
              m(!1)
            }
          }), () => {
            u.current && (u.current.kill(), u.current = null), m(!1)
          }
        }, [d]), (0, n.jsx)("div", {
          ref: o,
          style: {
            zIndex: i
          },
          className: "relative w-full",
          children: t
        })
      }
    },
    1800: function(e, t, r) {
      var n = r(5893);
      t.Z = e => {
        let {
          stroke: t = "#575349"
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
            stroke: t
          })
        })
      }
    }
  }
]);
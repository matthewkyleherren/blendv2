(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7135],
  {
    6209: function (e, r, t) {
      "use strict";
      var n = t(5893);
      r.Z = (e) => {
        let { children: r, size: t = "small", blur: c = !0 } = e;
        return (0, n.jsx)("div", {
          className: "rounded-12 p-[1.8rem] lg:p-40\n  "
            .concat(
              c
                ? "backdrop-blur-[105px] text-white"
                : "bg-white text-dark_grey",
              "\n  ",
            )
            .concat(
              "small" === t && c ? "w-[26.4rem] lg:w-[31rem]" : "",
              "\n  ",
            )
            .concat(
              "small" !== t || c ? "" : "w-full md:w-[26.4rem] lg:w-[31rem]",
              "\n  ",
            )
            .concat(
              "small" !== t && c ? "w-[26.4rem] lg:w-[36.8rem]" : "",
              "\n  ",
            )
            .concat(
              "small" === t || c ? "" : "w-full md:w-[26.4rem] lg:w-[36.8rem]",
              "\n  ",
            ),
          style: {
            backgroundColor: "#d9d9d921",
          },
          children: r,
        });
      };
    },
    7135: function (e, r, t) {
      "use strict";
      t.r(r);
      var n = t(5893),
        c = t(7825),
        l = t(6209),
        i = t(6546),
        a = t(6038),
        u = t(7294),
        s = t(146),
        o = t(1100),
        d = t(2881),
        f = t(9139);
      r.default = (e) => {
        let { item: r, items: t, index: l } = e,
          i = (0, c.a)("(max-width: 1200px)", !0);
        return (0, n.jsx)("section", {
          style: {
            zIndex: t.length - l,
          },
          className: "relative",
          children: i
            ? (0, n.jsx)(h, {
                item: r,
              })
            : (0, n.jsx)(m, {
                item: r,
              }),
        });
      };
      let m = (e) => {
          let { item: r } = e,
            c = (0, u.useRef)(null),
            m = (0, s.o)((e) => e.isFirstLoaded),
            h = (0, u.useRef)(!0),
            g = (0, u.useRef)(0),
            p = (0, u.useRef)({
              current: 0,
              target: 0,
              initialTarget: 0,
            }),
            x = (0, u.useRef)({
              current: 0,
              target: 0,
              initialTarget: 0,
            }),
            v = (0, u.useRef)({
              current: 0,
              target: 0,
              initialTarget: 0,
            }),
            w = (0, u.useRef)({
              current: 0,
              target: 0,
              initialTarget: 0,
            }),
            j = (0, u.useRef)({
              current: 0,
              target: 0,
            }),
            b = (0, u.useRef)({
              current: 0,
              target: 0,
            }),
            y = (0, u.useRef)(0.075),
            N = (0, u.useRef)(null),
            T = (0, u.useRef)("center"),
            k = (0, u.useRef)(null),
            R = (0, u.useRef)(null),
            L = (0, u.useRef)(null),
            z = (0, u.useRef)(null),
            E = (0, u.useRef)(null),
            A = (0, u.useRef)(null),
            _ = (0, u.useRef)(null),
            C = (0, u.useRef)(null),
            P = (0, u.useRef)(null),
            Z = (0, u.useRef)(null),
            O = (0, u.useRef)(null),
            F = (0, u.useRef)(null),
            M = (0, u.useRef)(null),
            B = (0, u.useRef)(0),
            S = (0, u.useRef)(0),
            W = (0, u.useRef)(null),
            X = (0, u.useRef)(null),
            q = (0, u.useRef)(null),
            $ = (0, u.useRef)(null);
          (0, u.useEffect)(
            () => (
              (g.current = z.current.offsetWidth),
              (B.current = F.current.offsetWidth),
              (S.current = O.current.offsetWidth),
              m ||
                window.addEventListener("introduction-complete", I, {
                  once: !0,
                }),
              D(),
              G(),
              Y(),
              V(),
              U(),
              Z.current &&
                ((Z.current.src = Z.current.dataset.src),
                Z.current.load(),
                Z.current.addEventListener(
                  "play",
                  () => {
                    P.current && P.current.classList.add("opacity-0");
                  },
                  {
                    once: !0,
                  },
                )),
              window.addEventListener("resize", U),
              window.addEventListener("is-appeared", H),
              () => {
                (window.removeEventListener("introduction-complete", I),
                  window.removeEventListener("is-appeared", H),
                  window.removeEventListener("resize", U),
                  cancelAnimationFrame(N.current),
                  W.current.kill(),
                  X.current.kill(),
                  q.current.kill());
              }
            ),
            [],
          );
          let H = () => {
              I();
            },
            I = () => {
              c.current.classList.remove("opacity-0");
            },
            U = () => {
              ((g.current = z.current.offsetWidth),
                (B.current = F.current.offsetWidth),
                (S.current = O.current.offsetWidth));
            },
            V = () => {
              let e = window.innerHeight,
                r = a.p8.fromTo(
                  [F.current.children[0], O.current.children[0]],
                  {
                    yPercent: 100,
                    autoAlpha: 0,
                  },
                  {
                    yPercent: 0,
                    autoAlpha: 1,
                    ease: "power2.out",
                  },
                );
              X.current = i.ScrollTrigger.create({
                trigger: F.current,
                animation: r,
                start: "".concat(e / 3, "px top"),
                scrub: 0.5,
              });
            },
            Y = () => {
              q.current = i.ScrollTrigger.create({
                trigger: c.current,
                start: "top bottom",
                end: "bottom top",
                onEnter: () => {
                  N.current = requestAnimationFrame(J);
                },
                onEnterBack: () => {
                  (Z.current && ((Z.current.currentTime = 0), Z.current.play()),
                    (N.current = requestAnimationFrame(J)));
                },
                onLeave: () => {
                  (Z.current && Z.current.pause(),
                    cancelAnimationFrame(N.current));
                },
                onLeaveBack: () => {
                  cancelAnimationFrame(N.current);
                },
              });
            },
            D = () => {
              ((x.current.initialTarget = g.current / 2 - 50),
                (x.current.current = x.current.initialTarget),
                (x.current.target = x.current.initialTarget),
                (p.current.initialTarget = g.current / 2),
                (p.current.current = p.current.initialTarget),
                (p.current.target = p.current.initialTarget),
                (j.current.current = 1.3),
                (j.current.target = 1.3),
                (v.current.initialTarget = -(B.current - 0.5 * g.current) / 2),
                (v.current.current = v.current.initialTarget),
                (v.current.target = v.current.initialTarget),
                (w.current.initialTarget = -(S.current - 0.5 * g.current) / 2),
                (w.current.current = w.current.initialTarget),
                (w.current.target = w.current.initialTarget),
                a.p8.set(A.current, {
                  yPercent: 100,
                }),
                a.p8.set(_.current, {
                  yPercent: 100,
                }),
                a.p8.set(C.current, {
                  yPercent: 100,
                }));
            },
            G = () => {
              let e = t(2392),
                r = new e({
                  target: F.current,
                  by: "chars",
                })[0].chars,
                n = new e({
                  target: O.current,
                  by: "chars",
                })[0].chars,
                l = a.p8.to(r, {
                  autoAlpha: 0,
                  stagger: -0.05,
                  paused: !0,
                }),
                u = a.p8.to(n, {
                  autoAlpha: 0,
                  stagger: 0.05,
                  paused: !0,
                });
              (($.current = a.p8.fromTo(
                M.current,
                {
                  scale: 0.9,
                  autoAlpha: 0,
                },
                {
                  autoAlpha: 1,
                  scale: 1,
                  ease: "none",
                  paused: !0,
                },
              )),
                (W.current = i.ScrollTrigger.create({
                  trigger: c.current,
                  start: "60% bottom",
                  end: "85% bottom",
                  scrub: !0,
                  onEnter: () => {
                    ("right" === T.current
                      ? a.p8.to(_.current, {
                          yPercent: 100,
                          duration: 0.9,
                          ease: "power2.inOut",
                        })
                      : "left" === T.current &&
                        a.p8.to(A.current, {
                          yPercent: 100,
                          duration: 0.9,
                          ease: "power2.inOut",
                        }),
                      Z.current &&
                        ((Z.current.currentTime = 0), Z.current.play()),
                      a.p8.to(y, {
                        current: 0.1,
                        ease: "none",
                        duration: 0.3,
                      }),
                      (h.current = !1));
                  },
                  onEnterBack: () => {
                    (a.p8.to(C.current, {
                      yPercent: 100,
                      duration: 0.9,
                      ease: "power2.inOut",
                    }),
                      (h.current = !1));
                  },
                  onLeave: () => {
                    (a.p8.to(C.current, {
                      yPercent: 0,
                      duration: 0.9,
                      ease: "power2.inOut",
                    }),
                      (h.current = !1));
                  },
                  onLeaveBack: () => {
                    ("right" === T.current
                      ? a.p8.to(_.current, {
                          yPercent: 0,
                          duration: 0.9,
                          ease: "power2.inOut",
                        })
                      : "left" === T.current &&
                        a.p8.to(A.current, {
                          yPercent: 0,
                          duration: 0.9,
                          ease: "power2.inOut",
                        }),
                      Z.current && Z.current.pause(),
                      a.p8.to(y, {
                        current: 0.075,
                        ease: "none",
                        duration: 0.3,
                      }),
                      (h.current = !0));
                  },
                  onUpdate: () => {
                    ("center" === T.current
                      ? ((x.current.target =
                          x.current.initialTarget +
                          (0.5 * g.current + 50) * W.current.progress),
                        (p.current.target =
                          p.current.initialTarget +
                          0.5 * g.current * W.current.progress))
                      : "right" === T.current
                        ? ((x.current.target =
                            x.current.initialTarget +
                            (0.4 * g.current + 50) * W.current.progress),
                          (p.current.target =
                            p.current.initialTarget +
                            0.6 * g.current * W.current.progress))
                        : ((x.current.target =
                            x.current.initialTarget +
                            (0.6 * g.current + 50) * W.current.progress),
                          (p.current.target =
                            p.current.initialTarget +
                            0.4 * g.current * W.current.progress)),
                      (j.current.target =
                        1.3 - (1.3 - 1) * W.current.progress));
                    let e = a.p8.utils.mapRange(
                        0,
                        0.4,
                        0,
                        1,
                        W.current.progress,
                      ),
                      r = a.p8.utils.clamp(
                        0,
                        1,
                        a.p8.utils.mapRange(
                          0.4,
                          0.75,
                          0,
                          1,
                          W.current.progress,
                        ),
                      );
                    ((b.current.target = r),
                      l.progress(e),
                      u.progress(e),
                      (v.current.target =
                        -v.current.initialTarget +
                        (v.current.initialTarget - g.current / 12) *
                          W.current.progress),
                      (w.current.target =
                        -w.current.initialTarget +
                        (w.current.initialTarget + g.current / 12) *
                          W.current.progress));
                  },
                })));
            },
            J = () => {
              ((p.current.current +=
                (p.current.target - p.current.current) * y.current),
                (x.current.current +=
                  (x.current.target - x.current.current) * y.current),
                (j.current.current +=
                  (j.current.target - j.current.current) * y.current),
                (v.current.current +=
                  (v.current.target - v.current.current) * y.current),
                (w.current.current +=
                  (w.current.target - w.current.current) * y.current),
                (b.current.current +=
                  (b.current.target - b.current.current) * y.current),
                $.current && $.current.progress(b.current.current),
                k.current &&
                  (k.current.style.transform = "translateX(".concat(
                    p.current.current,
                    "px)",
                  )),
                L.current &&
                  (L.current.style.transform = "translateX(".concat(
                    -p.current.current,
                    "px)",
                  )),
                R.current &&
                  (R.current.style.transform = "translateX(".concat(
                    -x.current.current,
                    "px)",
                  )),
                z.current &&
                  (z.current.style.transform = "translateX(".concat(
                    x.current.current,
                    "px)",
                  )),
                E.current &&
                  (E.current.style.transform = "scale(".concat(
                    j.current.current,
                    ")",
                  )),
                F.current &&
                  (F.current.style.transform = "translateX(".concat(
                    v.current.current,
                    "px)",
                  )),
                O.current &&
                  (O.current.style.transform = "translateX(".concat(
                    w.current.current,
                    "px)",
                  )),
                (N.current = requestAnimationFrame(J)));
            };
          return (0, n.jsx)("div", {
            ref: c,
            className: "w-full h-[400vh] -mt-[100vh] sticky top-0 bg-white",
            children: (0, n.jsxs)("div", {
              className: "sticky top-0 w-full h-screen p-[1rem]",
              children: [
                (0, n.jsxs)("div", {
                  className:
                    "w-full z-2 h-full relative flex overflow-hidden rounded-15",
                  onMouseEnter: () => {
                    h.current &&
                      ((T.current = "left"),
                      (p.current.initialTarget = 0.6 * g.current),
                      (p.current.target = p.current.initialTarget),
                      (x.current.initialTarget = 0.4 * g.current - 50),
                      (x.current.target = x.current.initialTarget),
                      (v.current.initialTarget =
                        (S.current - 0.6 * g.current) / 2),
                      (v.current.target = -v.current.initialTarget),
                      (w.current.initialTarget =
                        (B.current - 0.6 * g.current) / 2),
                      (w.current.target = -w.current.initialTarget),
                      a.p8.to(A.current, {
                        yPercent: 0,
                        duration: 0.9,
                        ease: "power2.inOut",
                      }),
                      a.p8.to(_.current, {
                        yPercent: 100,
                        duration: 0.9,
                        ease: "power2.inOut",
                      }));
                  },
                  children: [
                    (0, n.jsx)("div", {
                      ref: R,
                      className:
                        "absolute w-full h-full overflow-hidden rounded-15",
                      children: (0, n.jsx)("div", {
                        ref: z,
                        className: "w-full h-full pointer-events-none",
                        children: (0, n.jsx)(o.p, {
                          transition: "none",
                          image: r.itemLeft.image.data,
                          fallbackAlt: "",
                          className: "w-full h-full object-cover",
                          sizes: "96vw",
                          style: {
                            backfaceVisibility: "hidden",
                            transform: "translateZ(0)",
                          },
                        }),
                      }),
                    }),
                    (0, n.jsx)("div", {
                      ref: F,
                      className:
                        "absolute z-1 left-0 top-0 bottom-0 w-1/2 flex items-center justify-center",
                      children: (0, n.jsx)("div", {
                        className: "heading-60 text-white",
                        children: r.itemLeft.title,
                      }),
                    }),
                    (0, n.jsx)("div", {
                      ref: A,
                      className: "relative mt-auto pb-10 ml-10",
                      children: (0, n.jsx)(l.Z, {
                        size: "large",
                        children: (0, n.jsx)("div", {
                          className: "body-14 text-white -tracking-0.01",
                          children: (0, n.jsx)(f.Z, {
                            content: r.itemLeft.content,
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className:
                    "xl:absolute z-3 left-10 right-10 top-10 bottom-10 pointer-events-none flex rounded-15 overflow-hidden",
                  children: [
                    (0, n.jsx)("div", {
                      ref: k,
                      className:
                        "absolute w-full h-full overflow-hidden rounded-15 pointer-events-auto",
                      onMouseEnter: () => {
                        h.current &&
                          ((T.current = "right"),
                          (p.current.initialTarget = 0.4 * g.current),
                          (p.current.target = p.current.initialTarget),
                          (x.current.initialTarget = 0.6 * g.current - 50),
                          (x.current.target = x.current.initialTarget),
                          (v.current.initialTarget =
                            (S.current - 0.4 * g.current) / 2),
                          (v.current.target = -v.current.initialTarget),
                          (w.current.initialTarget =
                            (B.current - 0.4 * g.current) / 2),
                          (w.current.target = -w.current.initialTarget),
                          a.p8.to(A.current, {
                            yPercent: 100,
                            duration: 0.9,
                            ease: "power2.inOut",
                          }),
                          a.p8.to(_.current, {
                            yPercent: 0,
                            duration: 0.9,
                            ease: "power2.inOut",
                          }));
                      },
                      children: (0, n.jsx)("div", {
                        ref: L,
                        className: "w-full h-full pointer-events-none",
                        children: (0, n.jsx)(o.p, {
                          transition: "none",
                          image: r.itemRight.image.data,
                          fallbackAlt: "",
                          className: "w-full h-full object-cover",
                          sizes: "96vw",
                          style: {
                            backfaceVisibility: "hidden",
                            transform: "translateZ(0)",
                          },
                        }),
                      }),
                    }),
                    (0, n.jsx)("div", {
                      ref: O,
                      className:
                        "absolute z-1 right-0 top-0 bottom-0 w-1/2 flex items-center justify-center",
                      children: (0, n.jsx)("div", {
                        className: "heading-60 text-white",
                        children: r.itemRight.title,
                      }),
                    }),
                    (0, n.jsx)("div", {
                      ref: _,
                      className: "relative mt-auto pb-10 ml-auto mr-10",
                      children: (0, n.jsx)(l.Z, {
                        size: "large",
                        children: (0, n.jsx)("div", {
                          className: "body-14 text-white -tracking-0.01",
                          children: (0, n.jsx)(f.Z, {
                            content: r.itemRight.content,
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className:
                    "xl:absolute z-1 left-10 right-10 top-10 bottom-10 flex rounded-15 overflow-hidden bg-white items-center justify-center",
                  children: [
                    r.itemCenter.video.data
                      ? (0, n.jsxs)("div", {
                          ref: E,
                          className:
                            "absolute top-0 left-0 w-full h-full pointer-events-none",
                          children: [
                            (0, n.jsx)("div", {
                              ref: P,
                              className:
                                "absolute left-0 top-0 w-full h-full z-1 transition-opacity duration-global ease-out xl:transition-none",
                              children: (0, n.jsx)(o.p, {
                                transition: "none",
                                image: r.itemCenter.image.data,
                                fallbackAlt: "",
                                className: "w-full h-full object-cover",
                                sizes: "96vw",
                              }),
                            }),
                            (0, n.jsx)("video", {
                              ref: Z,
                              "data-src": d.$N(
                                r.itemCenter.video.data.attributes.url,
                              ),
                              muted: !0,
                              loop: !0,
                              playsInline: !0,
                              className:
                                "absolute top-0 left-0 w-full h-full object-cover",
                            }),
                          ],
                        })
                      : (0, n.jsx)("div", {
                          ref: E,
                          className:
                            "absolute top-0 left-0  w-full h-full pointer-events-none",
                          children: (0, n.jsx)(o.p, {
                            transition: "none",
                            image: r.itemCenter.image.data,
                            fallbackAlt: "",
                            className: "w-full h-full object-cover",
                            sizes: "96vw",
                          }),
                        }),
                    (0, n.jsx)("div", {
                      className:
                        "absolute z-1 right-0 top-0 bottom-0 w-full flex items-center justify-center",
                      children: (0, n.jsx)("div", {
                        ref: M,
                        className: "heading-60 text-white",
                        children: r.itemCenter.title,
                      }),
                    }),
                    (0, n.jsx)("div", {
                      ref: C,
                      className: "relative mt-auto pb-10 ml-auto mr-10",
                      children: (0, n.jsx)(l.Z, {
                        size: "large",
                        children: (0, n.jsx)("div", {
                          className: "body-14 text-white -tracking-0.01",
                          children: (0, n.jsx)(f.Z, {
                            content: r.itemCenter.content,
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        h = (e) => {
          let { item: r } = e,
            t = (0, u.useRef)(null),
            c = (0, u.useRef)(null),
            m = (0, u.useRef)(null),
            h = (0, u.useRef)(null),
            g = (0, u.useRef)([]),
            p = (0, u.useRef)([]),
            x = (0, u.useRef)([]),
            v = (0, u.useRef)(null),
            w = (0, s.o)((e) => e.isFirstLoaded),
            j = () => {
              b();
            };
          (0, u.useEffect)(() => {
            (i.ScrollTrigger.config({
              ignoreMobileResize: !0,
            }),
              y(),
              h.current &&
                (h.current.addEventListener(
                  "play",
                  () => {
                    m.current && m.current.classList.add("opacity-0");
                  },
                  {
                    once: !0,
                  },
                ),
                (v.current = i.ScrollTrigger.create({
                  trigger: t.current,
                  onLeave: () => {
                    h.current && (h.current.paused || h.current.pause());
                  },
                  onEnterBack: () => {
                    h.current &&
                      ((h.current.currentTime = 0),
                      h.current.paused && h.current.play());
                  },
                }))),
              w ||
                window.addEventListener("introduction-complete", b, {
                  once: !0,
                }),
              window.addEventListener("is-appeared", j));
            let e = x.current;
            return () => {
              (window.removeEventListener("introduction-complete", b),
                window.removeEventListener("is-appeared", j),
                v.current && (v.current.kill(), (v.current = null)),
                e.forEach((e) => {
                  e.kill();
                }));
            };
          }, []);
          let b = () => {
              t.current.classList.remove("opacity-0");
            },
            y = () => {
              for (let e = 0; e < g.current.length; e++) {
                let r = g.current[e],
                  t = p.current[e],
                  n = a.p8.timeline();
                (n.set([r, t], {
                  y: "100%",
                }),
                  n.set(r.children[0], {
                    y: "-100%",
                  }),
                  n.to(r, {
                    y: "0%",
                    ease: "none",
                    duration: 1,
                  }),
                  n.to(
                    r.children[0],
                    {
                      y: "0%",
                      ease: "none",
                      duration: 1,
                    },
                    "<",
                  ),
                  n.to(
                    t,
                    {
                      y: "0%",
                      ease: "none",
                      duration: 0.3,
                    },
                    "<0.3",
                  ),
                  (x.current[e] = i.ScrollTrigger.create({
                    trigger: r,
                    start: () => "".concat(e * window.innerHeight, "px bottom"),
                    end: () => "+=".concat(window.innerHeight),
                    animation: n,
                    scrub: !0,
                    onEnter: () => {
                      2 === e &&
                        h.current &&
                        ((h.current.currentTime = 0),
                        h.current.paused && h.current.play());
                    },
                    onLeaveBack: () => {
                      2 === e &&
                        h.current &&
                        (h.current.paused || h.current.pause());
                    },
                  })));
              }
            };
          return (0, n.jsx)("div", {
            ref: t,
            className:
              "w-full bg-white sticky px-half-container-mobile md:px-half-container -mt-[100svh] h-[calc(100svh*4)] opacity-0",
            children: (0, n.jsxs)("div", {
              ref: c,
              className:
                "sticky top-half-container-mobile md:top-half-container overflow-hidden w-full h-[calc(100svh_-_var(--padding-half-container-mobile)*2)] md:h-[calc(100svh_-_var(--padding-half-container)*2)] rounded-15",
              children: [
                (0, n.jsx)("div", {
                  className:
                    "absolute left-0 top-0 overflow-hidden w-full h-full md:h-[calc(100svh_-_var(--padding-half-container)*2)] will-change-transform",
                  ref: (e) => {
                    g.current[0] = e;
                  },
                  children: (0, n.jsxs)("div", {
                    className: "relative w-full h-full flex",
                    children: [
                      (0, n.jsx)("div", {
                        className:
                          "absolute w-full h-full overflow-hidden rounded-15",
                        children: (0, n.jsx)(o.p, {
                          image: r.itemLeft.imageMobile.data,
                          fallbackAlt: "",
                          fill: !0,
                          sizes: "100vw",
                          className: "pointer-events-none object-cover",
                        }),
                      }),
                      (0, n.jsx)("div", {
                        className:
                          "absolute z-1 left-0 top-1/2 w-full -translate-y-1/2 text-center",
                        children: (0, n.jsx)("div", {
                          className: "heading-60 text-white",
                          children: r.itemLeft.title,
                        }),
                      }),
                      (0, n.jsx)("div", {
                        className: "relative mt-auto pb-[0.6rem] ml-[0.6rem]",
                        ref: (e) => {
                          p.current[0] = e;
                        },
                        children: (0, n.jsx)(l.Z, {
                          children: (0, n.jsx)("div", {
                            className:
                              "font-body text-13 -tracking-[0.013rem] leading-[153%] lg:text-14 lg:leading-[157%] text-white lg:-tracking-0.01",
                            children: (0, n.jsx)(f.Z, {
                              content: r.itemLeft.content,
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, n.jsx)("div", {
                  className:
                    "absolute left-0 top-0 overflow-hidden w-full h-full md:h-[calc(100svh_-_var(--padding-half-container)*2)] will-change-transform",
                  ref: (e) => {
                    g.current[1] = e;
                  },
                  children: (0, n.jsxs)("div", {
                    className: "relative w-full h-full flex",
                    children: [
                      (0, n.jsx)("div", {
                        className:
                          "absolute w-full h-full overflow-hidden rounded-15",
                        children: (0, n.jsx)(o.p, {
                          image: r.itemRight.imageMobile.data,
                          fallbackAlt: "",
                          fill: !0,
                          sizes: "100vw",
                          className: "pointer-events-none object-cover",
                        }),
                      }),
                      (0, n.jsx)("div", {
                        className:
                          "absolute z-1 left-0 top-1/2 w-full -translate-y-1/2 text-center",
                        children: (0, n.jsx)("div", {
                          className: "heading-60 text-white",
                          children: r.itemRight.title,
                        }),
                      }),
                      (0, n.jsx)("div", {
                        className: "relative mt-auto pb-[0.6rem] ml-[0.6rem]",
                        ref: (e) => {
                          p.current[1] = e;
                        },
                        children: (0, n.jsx)(l.Z, {
                          children: (0, n.jsx)("div", {
                            className:
                              "font-body text-13 -tracking-[0.013rem] leading-[153%] lg:text-14 lg:leading-[157%] text-white lg:-tracking-0.01",
                            children: (0, n.jsx)(f.Z, {
                              content: r.itemRight.content,
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, n.jsx)("div", {
                  className:
                    "absolute left-0 top-0 overflow-hidden w-full h-full md:h-[calc(100svh_-_var(--padding-half-container)*2)] will-change-transform",
                  ref: (e) => {
                    g.current[2] = e;
                  },
                  children: (0, n.jsxs)("div", {
                    className: "relative w-full h-full flex",
                    children: [
                      (0, n.jsx)("div", {
                        className:
                          "absolute w-full h-full overflow-hidden rounded-15",
                        children: r.itemCenter.videoMobile.data
                          ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                (0, n.jsx)("div", {
                                  ref: m,
                                  className:
                                    "absolute left-0 top-0 w-full h-full z-1 transition-opacity duration-global ease-out",
                                  children: (0, n.jsx)(o.p, {
                                    image: r.itemCenter.image.data,
                                    fallbackAlt: "",
                                    className: "w-full h-full object-cover",
                                    sizes: "96vw",
                                  }),
                                }),
                                (0, n.jsx)("video", {
                                  ref: h,
                                  preload: "none",
                                  src: d.$N(
                                    r.itemCenter.videoMobile.data.attributes
                                      .url,
                                  ),
                                  muted: !0,
                                  loop: !0,
                                  playsInline: !0,
                                  className:
                                    "absolute top-0 left-0 w-full h-full object-cover pointer-events-none",
                                }),
                              ],
                            })
                          : (0, n.jsx)(o.p, {
                              image: r.itemCenter.image.data,
                              fallbackAlt: "",
                              fill: !0,
                              sizes: "100vw",
                              className: "pointer-events-none object-cover",
                            }),
                      }),
                      (0, n.jsx)("div", {
                        className:
                          "absolute z-1 left-0 top-1/2 w-full -translate-y-1/2 text-center",
                        children: (0, n.jsx)("div", {
                          className: "heading-60 text-white",
                          children: r.itemCenter.title,
                        }),
                      }),
                      (0, n.jsx)("div", {
                        className: "relative mt-auto pb-[0.6rem] ml-[0.6rem]",
                        ref: (e) => {
                          p.current[2] = e;
                        },
                        children: (0, n.jsx)(l.Z, {
                          children: (0, n.jsx)("div", {
                            className:
                              "font-body text-13 -tracking-[0.013rem] leading-[153%] lg:text-14 lg:leading-[157%] text-white lg:-tracking-0.01",
                            children: (0, n.jsx)(f.Z, {
                              content: r.itemCenter.content,
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        };
    },
    9139: function (e, r, t) {
      "use strict";
      t.d(r, {
        Z: function () {
          return a;
        },
      });
      var n = t(5893),
        c = t(230),
        l = t(8406),
        i = t.n(l);

      function a(e) {
        let { content: r, blocks: t, className: l } = e;
        return (0, n.jsx)("div", {
          className: [i().root, l].join(" "),
          children: (0, n.jsx)(c.i, {
            content: r,
            blocks: t,
          }),
        });
      }
    },
    8406: function (e) {
      e.exports = {
        root: "StrapiRichText_root__LUiYo",
      };
    },
    230: function (e, r, t) {
      "use strict";
      t.d(r, {
        i: function () {
          return m;
        },
      });
      var n = t(5893),
        c = t(7294);
      let l = ({ text: e, ...r }) => {
          let { modifiers: t, missingModifierTypes: c } = f();
          return Object.keys(r).reduce(
            (e, l) => {
              if (!r[l]) return e;
              let i = t[l];
              return i
                ? (0, n.jsx)(i, {
                    children: e,
                  })
                : (c.includes(l) ||
                    (console.warn(
                      `[@strapi/block-react-renderer] No component found for modifier "${l}"`,
                    ),
                    c.push(l)),
                  e);
            },
            (0, n.jsx)(n.Fragment, {
              children: e,
            }),
          );
        },
        i = ["image"],
        a = (e) => {
          let { children: r, type: t, ...n } = e;
          if ("code" === t) {
            let r = (e) =>
              e.reduce(
                (e, t) =>
                  "text" === t.type
                    ? e.concat(t.text)
                    : "link" === t.type
                      ? e.concat(r(t.children))
                      : e,
                "",
              );
            return {
              ...n,
              plainText: r(e.children),
            };
          }
          return n;
        },
        u = ({ content: e }) => {
          let { children: r, type: t, ...s } = e,
            { blocks: o, missingBlockTypes: d } = f(),
            m = o[t];
          if (!m)
            return (
              d.includes(t) ||
                (console.warn(
                  `[@strapi/block-react-renderer] No component found for block type "${t}"`,
                ),
                d.push(t)),
              null
            );
          if (i.includes(t))
            return (0, n.jsx)(m, {
              ...s,
            });
          if (
            "paragraph" === t &&
            1 === r.length &&
            "text" === r[0].type &&
            "" === r[0].text
          )
            return (0, n.jsx)("br", {});
          let h = a(e);
          return (0, n.jsx)(m, {
            ...h,
            children: r.map((e, r) => {
              if ("text" === e.type) {
                let { type: t, ...n } = e;
                return (0, c.createElement)(l, {
                  ...n,
                  key: r,
                });
              }
              return (0, n.jsx)(
                u,
                {
                  content: e,
                },
                r,
              );
            }),
          });
        },
        s = {
          blocks: {
            paragraph: (e) =>
              (0, n.jsx)("p", {
                children: e.children,
              }),
            quote: (e) =>
              (0, n.jsx)("blockquote", {
                children: e.children,
              }),
            code: (e) =>
              (0, n.jsx)("pre", {
                children: (0, n.jsx)("code", {
                  children: e.plainText,
                }),
              }),
            heading: ({ level: e, children: r }) => {
              switch (e) {
                case 1:
                  return (0, n.jsx)("h1", {
                    children: r,
                  });
                case 2:
                  return (0, n.jsx)("h2", {
                    children: r,
                  });
                case 3:
                  return (0, n.jsx)("h3", {
                    children: r,
                  });
                case 4:
                  return (0, n.jsx)("h4", {
                    children: r,
                  });
                case 5:
                  return (0, n.jsx)("h5", {
                    children: r,
                  });
                case 6:
                  return (0, n.jsx)("h6", {
                    children: r,
                  });
              }
            },
            link: (e) =>
              (0, n.jsx)("a", {
                href: e.url,
                children: e.children,
              }),
            list: (e) =>
              "ordered" === e.format
                ? (0, n.jsx)("ol", {
                    children: e.children,
                  })
                : (0, n.jsx)("ul", {
                    children: e.children,
                  }),
            "list-item": (e) =>
              (0, n.jsx)("li", {
                children: e.children,
              }),
            image: (e) =>
              (0, n.jsx)("img", {
                src: e.image.url,
                alt: e.image.alternativeText || void 0,
              }),
          },
          modifiers: {
            bold: (e) =>
              (0, n.jsx)("strong", {
                children: e.children,
              }),
            italic: (e) =>
              (0, n.jsx)("em", {
                children: e.children,
              }),
            underline: (e) =>
              (0, n.jsx)("u", {
                children: e.children,
              }),
            strikethrough: (e) =>
              (0, n.jsx)("del", {
                children: e.children,
              }),
            code: (e) =>
              (0, n.jsx)("code", {
                children: e.children,
              }),
          },
          missingBlockTypes: [],
          missingModifierTypes: [],
        },
        o = c.createContext(s),
        d = ({ children: e, value: r = s }) => {
          let t = c.useMemo(() => r, [r]);
          return (0, n.jsx)(o.Provider, {
            value: t,
            children: e,
          });
        };

      function f() {
        return c.useContext(o);
      }
      let m = (e) => {
        let r = {
            ...s.blocks,
            ...e.blocks,
          },
          t = {
            ...s.modifiers,
            ...e.modifiers,
          },
          l = c.useRef([]),
          i = c.useRef([]);
        return (0, n.jsx)(d, {
          value: {
            blocks: r,
            modifiers: t,
            missingBlockTypes: l.current,
            missingModifierTypes: i.current,
          },
          children: e.content.map((e, r) =>
            (0, n.jsx)(
              u,
              {
                content: e,
              },
              r,
            ),
          ),
        });
      };
    },
  },
]);

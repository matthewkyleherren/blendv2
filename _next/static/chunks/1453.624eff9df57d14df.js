"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1453],
  {
    8877: function (e, r, t) {
      t.d(r, {
        V: function () {
          return a;
        },
      });
      var l = t(5893);
      t(3205);
      var n = t(1800);

      function a(e) {
        let { label: r, as: t = "button", mode: a, ...i } = e;
        return (0, l.jsxs)(t, {
          ...i,
          className:
            "group inline-flex justify-start items-center cursor-pointer",
          children: [
            (0, l.jsx)("div", {
              className:
                "flex justify-center items-center w-[3.6rem] h-[3.6rem] ".concat(
                  "white" === a ? "bg-white" : "bg-light_beige",
                  " rounded-10 mr-[0.9rem] transition-transform duration-global ease-out group-hover:scale-105",
                ),
              children: (0, l.jsx)("div", {
                className: "svg-wrapper w-[1.1rem] h-[0.85rem]",
                children: (0, l.jsx)(n.Z, {}),
              }),
            }),
            (0, l.jsx)("div", {
              className:
                "font-body-mono text-10 leading-[180%] tracking-[0.05rem] uppercase transition-opacity duration-global ease-out group-hover:opacity-50 ".concat(
                  "white" === a ? "text-white" : "text-dark_grey",
                ),
              children: r,
            }),
          ],
        });
      }
    },
    1453: function (e, r, t) {
      t.r(r);
      var l = t(5893),
        n = t(7825),
        a = t(7294),
        i = t(6038),
        s = t(6546),
        c = t(188),
        o = t(8877),
        d = t(1100),
        u = t(2881),
        m = t(6620);
      r.default = (e) => {
        let { item: r, items: t, index: a } = e,
          i = (0, n.a)("(max-width: 1200px)", !0);
        return (0, l.jsx)("section", {
          style: {
            zIndex: t.length - a,
          },
          className: "relative",
          children: i
            ? (0, l.jsx)(f, {
                item: r,
              })
            : (0, l.jsx)(h, {
                item: r,
              }),
        });
      };
      let f = (e) => {
          let { item: r } = e,
            t = (0, a.useRef)(null),
            n = (0, a.useRef)(null),
            f = (0, a.useRef)(null),
            h = (0, a.useRef)(null);
          return (
            (0, a.useEffect)(
              () => (
                window.innerWidth < 768 &&
                  i.p8.set(t.current, {
                    height: window.innerHeight - (0, c.z6)(16),
                  }),
                f.current &&
                  (f.current.addEventListener(
                    "play",
                    () => {
                      n.current && n.current.classList.add("opacity-0");
                    },
                    {
                      once: !0,
                    },
                  ),
                  (h.current = s.ScrollTrigger.create({
                    trigger: t.current,
                    onEnter: () => {
                      ((f.current.currentTime = 0),
                        f.current.paused && f.current.play());
                    },
                    onLeave: () => {
                      f.current.paused || f.current.pause();
                    },
                    onLeaveBack: () => {
                      ((f.current.currentTime = 0),
                        f.current.paused || f.current.pause());
                    },
                  }))),
                () => {
                  h.current && (h.current.kill(), (h.current = null));
                }
              ),
              [],
            ),
            (0, l.jsx)("div", {
              className:
                "bg-dark_beige p-half-container-mobile md:p-half-container",
              children: (0, l.jsxs)("div", {
                ref: t,
                className:
                  "relative h-[100vw] landscape:h-[calc(100vh_-_var(--padding-half-container)*2)] rounded-13 overflow-hidden bg-light_beige",
                children: [
                  (0, l.jsx)("div", {
                    className: "w-full h-full",
                    children: r.video.data
                      ? (0, l.jsxs)(l.Fragment, {
                          children: [
                            (0, l.jsx)("div", {
                              ref: n,
                              className:
                                "absolute left-0 top-0 w-full h-full z-1 transition-opacity duration-global ease-out",
                              children: (0, l.jsx)(d.p, {
                                image: r.mainImage.data,
                                fallbackAlt: "",
                                className: "w-full h-full object-cover",
                                sizes: "96vw",
                              }),
                            }),
                            (0, l.jsx)("video", {
                              ref: f,
                              preload: "none",
                              src: u.$N(r.video.data.attributes.url),
                              className: "w-full h-full object-cover",
                              muted: !0,
                              playsInline: !0,
                            }),
                          ],
                        })
                      : (0, l.jsx)(d.p, {
                          image: r.mainImage.data,
                          sizes: "(max-width: 768px) 100vw, 100vw",
                          fallbackAlt: "",
                          className: "w-full h-full object-cover",
                        }),
                  }),
                  (0, l.jsxs)("div", {
                    className:
                      "absolute bottom-[0.6rem] right-[0.6rem] md:bottom-[1.25rem] md:right-[1.25rem] w-[calc(100%_-_1.2rem)] md:w-[39rem] lg:w-[59rem] xl:w-[39rem] flex items-center bg-white p-[0.2rem] rounded-10 pointer-events-auto z-2",
                    children: [
                      (0, l.jsx)("div", {
                        className:
                          "relative w-[11.5rem] lg:w-[16rem] xl:w-[11rem] z-1",
                        children: (0, l.jsx)("div", {
                          className:
                            "relative w-full h-0 pt-[168%] md:pt-[219%] pointer-events-none",
                          children: (0, l.jsx)(d.p, {
                            image: r.smallPreviewImage.data,
                            sizes: "(max-width: 768px) 100vw, 20vw",
                            fallbackAlt: "",
                            className:
                              "absolute top-0 left-0 w-full h-full object-cover rounded-[0.8rem]",
                          }),
                        }),
                      }),
                      (0, l.jsxs)("div", {
                        className:
                          "flex-1 pl-[1.2rem] md:pl-20 pr-20 md:pr-[3.4rem] py-[1.8rem] md:py-10",
                        children: [
                          r.smallPreviewSubtitle &&
                            (0, l.jsx)("div", {
                              className:
                                "font-body-mono text-10 leading-[180%] tracking-[0.05rem] uppercase mb-8 md:mb-12 text-dark_beige",
                              children: r.smallPreviewSubtitle,
                            }),
                          r.smallPreviewTitle &&
                            (0, l.jsx)("div", {
                              className:
                                "body-15 leading-[146%] -tracking-[0.015rem] md:text-16 md:leading-[150%] md:-tracking-[0.016rem] text-dark_grey",
                              children: r.smallPreviewTitle,
                            }),
                          r.smallPreviewLink &&
                            (0, l.jsx)("div", {
                              className: "mt-[3.2rem] md:mt-[5.5rem]",
                              children: (0, l.jsx)(o.V, {
                                as: m.U,
                                data: r.smallPreviewLink,
                                label: r.smallPreviewLink.title,
                              }),
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        },
        h = (e) => {
          let { item: r } = e,
            f = (0, a.useRef)(null),
            h = (0, a.useRef)(null),
            v = (0, a.useRef)(null),
            g = (0, a.useRef)(null),
            p = (0, a.useRef)(null),
            x = (0, a.useRef)(null),
            b = (0, a.useRef)(null),
            j = (0, a.useRef)(null),
            y = (0, a.useRef)(null),
            N = (0, a.useRef)(null),
            k = (0, a.useRef)(null),
            R = (0, a.useRef)(null),
            P = (0, a.useRef)(null),
            _ = (0, a.useRef)(null),
            T = (0, a.useRef)(null),
            z = (0, a.useRef)(null),
            H = (0, a.useRef)(null),
            L = (0, a.useRef)(null),
            I = (0, a.useRef)(null),
            S = (0, a.useRef)(null),
            W = (0, a.useRef)(null),
            E = (0, a.useRef)(null),
            A = (0, a.useRef)(null),
            O = (0, a.useRef)(null),
            V = (0, a.useRef)(null),
            M = (0, a.useRef)(null),
            [B, C] = (0, a.useState)(!1),
            [U, F] = (0, a.useState)(0),
            [Z, $] = (0, a.useState)(0),
            q = (0, n.a)();
          ((0, a.useEffect)(() => {
            if (!B) {
              let e = t(1483);
              (N.current.load(),
                (V.current = new e.default({
                  src: N.current.dataset.src,
                  scrollyVideoContainer: M.current,
                  frameThreshold: 0.6,
                  sticky: !1,
                  trackScroll: !1,
                })));
              return;
            }
          }, [B]),
            (0, a.useEffect)(() => {
              (N.current &&
                ((N.current.src = N.current.dataset.src), N.current.load()),
                i.p8.set(T.current, {
                  yPercent: 110,
                }));
              let e = window.innerWidth - (0, c.z6)(25) - 5,
                r = window.innerHeight - (0, c.z6)(15),
                t =
                  window.innerWidth < window.innerHeight
                    ? p.current.offsetWidth / e
                    : p.current.offsetHeight / r;
              (j.current.style.setProperty("--progress", 0),
                F(p.current.offsetWidth / e),
                $(p.current.offsetHeight / r),
                i.p8.set(y.current, {
                  scale: t + 0.05,
                }));
              let l = i.p8.timeline({
                defaults: {
                  ease: "none",
                },
              });
              (l
                .fromTo(
                  v.current,
                  {
                    y:
                      window.innerWidth < 768
                        ? 0.4 * window.innerHeight
                        : 1.1 * window.innerHeight,
                  },
                  {
                    y: 0,
                  },
                  0,
                )
                .fromTo(
                  h.current,
                  {
                    y:
                      window.innerWidth < 768
                        ? 0.45 * window.innerHeight
                        : 1.35 * window.innerHeight,
                  },
                  {
                    y: 0,
                  },
                  0,
                )
                .fromTo(
                  p.current,
                  {
                    y:
                      window.innerWidth < 768
                        ? 0.55 * window.innerHeight
                        : 1.75 * window.innerHeight,
                  },
                  {
                    y: 0,
                  },
                  0,
                )
                .fromTo(
                  x.current,
                  {
                    y:
                      window.innerWidth < 768
                        ? 0.6 * window.innerHeight
                        : 2.25 * window.innerHeight,
                  },
                  {
                    y: 0,
                  },
                  0,
                ),
                s.ScrollTrigger.create({
                  trigger: f.current,
                  start: "top bottom",
                  end: "+=150%",
                  animation: l,
                  scrub: !0,
                }));
              let n = i.p8.timeline({
                  defaults: {
                    ease: "none",
                  },
                }),
                a = i.p8.timeline({
                  defaults: {
                    ease: "none",
                  },
                });
              (a.fromTo(
                k.current,
                {
                  yPercent: 0,
                },
                {
                  yPercent: 120,
                },
                0,
              ),
                n
                  .fromTo(
                    h.current,
                    {
                      y: 0,
                    },
                    {
                      y: () =>
                        -(
                          window.innerHeight -
                          p.current.offsetHeight -
                          (0, c.z6)(80)
                        ) /
                          2 -
                        10,
                    },
                    0,
                  )
                  .fromTo(
                    x.current,
                    {
                      y: 0,
                    },
                    {
                      y: () =>
                        (window.innerHeight -
                          p.current.offsetHeight -
                          (0, c.z6)(80)) /
                          2 +
                        10,
                    },
                    0,
                  )
                  .to(
                    g.current,
                    {
                      y: "4rem",
                    },
                    0,
                  )
                  .to(
                    b.current,
                    {
                      y: "-4rem",
                    },
                    0,
                  )
                  .fromTo(
                    y.current,
                    {
                      scale: () =>
                        (window.innerWidth < window.innerHeight
                          ? p.current.offsetWidth / e
                          : p.current.offsetHeight / r) + 0.05,
                    },
                    {
                      scale: 1,
                      onUpdate: function () {
                        if (I.current && N.current) {
                          let e = I.current.progress;
                          V.current.setTargetTimePercent(e);
                        }
                        A.current &&
                          j.current &&
                          j.current.style.setProperty(
                            "--progress",
                            I.current && 0 === I.current.progress
                              ? 0
                              : this.progress(),
                          );
                      },
                    },
                    0,
                  ));
              let o = i.p8.timeline({
                paused: !0,
              });
              (o
                .fromTo(
                  T.current,
                  {
                    yPercent: 110,
                  },
                  {
                    yPercent: 0,
                    ease: "power2.inOut",
                    duration: 0.9,
                  },
                  0,
                )
                .fromTo(
                  z.current,
                  {
                    yPercent: 60,
                  },
                  {
                    yPercent: 0,
                    ease: "power3.out",
                    duration: 0.9,
                  },
                  0.3,
                )
                .to(
                  H.current,
                  {
                    xPercent: -50,
                    ease: "power3.inOut",
                    duration: 0.9,
                  },
                  "<50%",
                )
                .to(
                  L.current,
                  {
                    xPercent: 30,
                    ease: "power3.inOut",
                    duration: 0.9,
                  },
                  "<",
                )
                .fromTo(
                  [R.current, P.current],
                  {
                    opacity: 0,
                  },
                  {
                    opacity: 1,
                    ease: "power3.out",
                    duration: 0.9,
                  },
                  ">-=40%",
                ),
                _.current &&
                  o.fromTo(
                    _.current,
                    {
                      yPercent: 70,
                      opacity: 0,
                    },
                    {
                      yPercent: 0,
                      opacity: 1,
                      ease: "power3.out",
                      duration: 0.7,
                    },
                    "<-=10%",
                  ));
              let d = i.p8.timeline({
                paused: !0,
              });
              (d.to(
                T.current,
                {
                  yPercent: 110,
                  ease: "power2.inOut",
                  duration: 0.6,
                },
                0,
              ),
                (E.current = s.ScrollTrigger.create({
                  trigger: f.current,
                  start: "top top-=45%",
                  end: "52% bottom",
                  animation: a,
                  invalidateOnRefresh: !1,
                  scrub: !0,
                })),
                (I.current = s.ScrollTrigger.create({
                  trigger: f.current,
                  start: "top top-=58%",
                  end: "85% bottom",
                  animation: n,
                  invalidateOnRefresh: !1,
                  scrub: !0,
                  onLeave: () => {
                    o.restart();
                  },
                  onEnterBack: () => {
                    d.restart();
                  },
                })));
              let u = i.p8.to(y.current, {
                y: window.innerWidth / 20,
                ease: "none",
              });
              return (
                (S.current = s.ScrollTrigger.create({
                  once: !0,
                  trigger: f.current,
                  onEnter: () => {
                    if (((A.current = !0), !O.current)) {
                      let e = window.innerHeight - (0, c.z6)(15);
                      ($(p.current.offsetHeight / e), (O.current = !0));
                    }
                  },
                })),
                (W.current = s.ScrollTrigger.create({
                  trigger: f.current,
                  start: "bottom 100%",
                  end: "bottom top",
                  invalidateOnRefresh: !1,
                  animation: u,
                  scrub: !0,
                })),
                window.addEventListener("resize", D),
                () => {
                  (window.removeEventListener("resize", D),
                    E.current.kill(),
                    S.current.kill(),
                    W.current.kill(),
                    I.current.kill(),
                    (E.current = null),
                    (S.current = null),
                    (W.current = null),
                    (I.current = null));
                }
              );
            }, []));
          let D = () => {
            let e = window.innerWidth - (0, c.z6)(25) - 5,
              r = window.innerHeight - (0, c.z6)(15);
            window.innerWidth < 768
              ? F(0.97)
              : (F(p.current.offsetWidth / e), $(p.current.offsetHeight / r));
          };
          return (0, l.jsx)("div", {
            ref: f,
            className: "relative h-[300vh] bg-white",
            children: (0, l.jsxs)("div", {
              className:
                "sticky top-0 px-container grid grid-cols-6 lg:grid-cols-12 h-screen content-center overflow-hidden",
              children: [
                (0, l.jsx)("div", {
                  className:
                    "col-span-full md:col-start-2 md:col-end-6 lg:col-start-2 lg:col-end-12 xl:col-start-4 xl:col-end-10 xl:px-30 h-full",
                  children: (0, l.jsxs)("div", {
                    className: "relative grid gap-y-[3.5rem]",
                    children: [
                      (0, l.jsx)("div", {
                        className:
                          "absolute top-0 left-0 -translate-y-[calc(100%_+_0rem)] w-full pt-[66.4%]",
                        children: (0, l.jsx)("div", {
                          ref: v,
                          className:
                            "absolute top-0 left-0 w-full h-full rounded-[1.3rem] md:rounded-[1.8rem] overflow-hidden",
                          children: (0, l.jsx)("div", {
                            ref: b,
                            className: "w-full h-full",
                            children: (0, l.jsx)(d.p, {
                              image: r.bottomImage.data,
                              sizes: "(max-width: 768px) 100vw, 30vw",
                              fallbackAlt: "",
                              className: "w-full h-full object-cover",
                            }),
                          }),
                        }),
                      }),
                      (0, l.jsx)("div", {
                        ref: h,
                        className:
                          "relative w-full pt-[66.4%] rounded-[1.8rem] overflow-hidden",
                        children: (0, l.jsx)("div", {
                          ref: g,
                          className: "absolute top-0 left-0 w-full h-full",
                          children: (0, l.jsx)(d.p, {
                            image: r.topImage.data,
                            sizes: "(max-width: 768px) 100vw, 30vw",
                            fallbackAlt: "",
                            className: "w-full h-full object-cover",
                          }),
                        }),
                      }),
                      (0, l.jsxs)("div", {
                        ref: p,
                        className: "relative w-full pt-[66.4%]",
                        children: [
                          (0, l.jsxs)("div", {
                            ref: j,
                            className:
                              "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100vw_-_2.5rem_-_5px)] h-[calc(100vh_-_1.5rem)]",
                            style: {
                              clipPath: "inset(calc("
                                .concat(
                                  ((1 - Z) / 2) * 100,
                                  "% * (1 - var(--progress))) calc(",
                                )
                                .concat(
                                  ((1 - U) / 2) * 100,
                                  "% * (1 - var(--progress))) round 1.8rem)",
                                ),
                            },
                            children: [
                              (0, l.jsx)("div", {
                                ref: y,
                                className:
                                  "relative w-full h-full overflow-hidden",
                                children: q
                                  ? (0, l.jsx)(d.p, {
                                      image: r.mainImage.data,
                                      sizes: "(max-width: 768px) 100vw, 100vw",
                                      fallbackAlt: "",
                                      className: "w-full h-full object-cover",
                                    })
                                  : (0, l.jsxs)(l.Fragment, {
                                      children: [
                                        r.mainImage.data &&
                                          (0, l.jsx)(d.p, {
                                            image: r.mainImage.data,
                                            sizes:
                                              "(max-width: 768px) 100vw, 100vw",
                                            fallbackAlt: "",
                                            loading: "eager",
                                            priority: !0,
                                            className:
                                              "absolute top-0 left-0 w-full h-full object-cover",
                                          }),
                                        (0, l.jsx)("video", {
                                          onLoadedMetadata: () => {
                                            C(!0);
                                          },
                                          ref: N,
                                          "data-src": u.$N(
                                            r.video.data.attributes.url,
                                          ),
                                          className:
                                            "w-full h-full object-cover hidden",
                                          muted: !0,
                                          playsInline: !0,
                                          preload: "auto",
                                          tabIndex: 0,
                                        }),
                                        (0, l.jsx)("div", {
                                          className: "scrolly-wrapper",
                                          ref: M,
                                        }),
                                      ],
                                    }),
                              }),
                              (0, l.jsxs)("div", {
                                ref: T,
                                className:
                                  "absolute bottom-[0.6rem] right-[0.6rem] md:bottom-[1.25rem] md:right-[1.25rem] w-[calc(100%_-_1.2rem)] md:w-[39rem] lg:w-[59rem] xl:w-[39rem] flex items-center bg-white p-[0.2rem] rounded-12 pointer-events-auto",
                                children: [
                                  (0, l.jsx)("div", {
                                    ref: z,
                                    className:
                                      "relative w-[11.5rem] lg:w-[16rem] xl:w-[11rem] z-1",
                                    children: (0, l.jsx)("div", {
                                      className:
                                        "relative w-[200%] h-0 pt-[219%] rounded-10 overflow-hidden pointer-events-none",
                                      children: (0, l.jsx)("div", {
                                        ref: H,
                                        className:
                                          "absolute top-0 left-0 w-full h-full rounded-10 overflow-hidden",
                                        children: (0, l.jsx)("div", {
                                          ref: L,
                                          className:
                                            "absolute top-0 left-0 w-full h-full",
                                          children: (0, l.jsx)(d.p, {
                                            image: r.smallPreviewImage.data,
                                            sizes:
                                              "(max-width: 768px) 100vw, 20vw",
                                            fallbackAlt: "",
                                            className:
                                              "absolute top-0 left-0 w-full h-full object-cover",
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  (0, l.jsxs)("div", {
                                    className:
                                      "flex-1 pl-[1.2rem] md:pl-20 pr-20 md:pr-[3.4rem] py-[1.8rem] md:py-10",
                                    children: [
                                      r.smallPreviewSubtitle &&
                                        (0, l.jsx)("div", {
                                          ref: R,
                                          className:
                                            "body-mono-10 mb-8 md:mb-12 text-dark_beige",
                                          children: r.smallPreviewSubtitle,
                                        }),
                                      r.smallPreviewTitle &&
                                        (0, l.jsx)("div", {
                                          ref: P,
                                          className:
                                            "body-15 leading-[146%] -tracking-[0.015rem] md:text-16 md:leading-[150%] md:-tracking-[0.016rem] text-dark_grey",
                                          children: r.smallPreviewTitle,
                                        }),
                                      r.smallPreviewLink &&
                                        (0, l.jsx)("div", {
                                          className:
                                            "mt-[3.2rem] md:mt-[5.5rem]",
                                          ref: _,
                                          children: (0, l.jsx)(o.V, {
                                            as: m.U,
                                            data: r.smallPreviewLink,
                                            label: r.smallPreviewLink.title,
                                          }),
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, l.jsx)("div", {
                            className:
                              "absolute top-0 left-0 w-full h-full overflow-hidden",
                            children: (0, l.jsx)("div", {
                              ref: k,
                              className: "absolute bottom-10 left-10",
                              children: (0, l.jsx)(w, {
                                title: r.featureName,
                                icon: r.featureIcon.data,
                                progress: 0.48,
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, l.jsx)("div", {
                        ref: x,
                        className:
                          "relative w-full pt-[66.4%] rounded-[1.8rem] overflow-hidden",
                        children: (0, l.jsx)("div", {
                          ref: b,
                          className: "absolute top-0 left-0 w-full h-full",
                          children: (0, l.jsx)(d.p, {
                            image: r.bottomImage.data,
                            sizes: "(max-width: 768px) 100vw, 30vw",
                            fallbackAlt: "",
                            className: "w-full h-full object-cover",
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, l.jsx)("div", {
                  className:
                    "absolute left-[1.25rem] top-[1.25rem] right-[1.25rem] bottom-[1.25rem] overflow-hidden rounded-[1.8rem] pointer-events-none",
                }),
              ],
            }),
          });
        },
        w = (e) => {
          let { title: r, icon: t, progress: n } = e,
            i = (0, a.useRef)(null),
            [s, c] = (0, a.useState)(0);
          return (
            (0, a.useEffect)(() => {
              c(100 * n);
            }, [n]),
            (0, l.jsxs)("div", {
              ref: i,
              className:
                "relative flex items-center bg-white rounded-12 border-white border-[0.2rem] uppercase",
              children: [
                (0, l.jsx)("div", {
                  className:
                    "absolute top-0 left-0 h-full bg-light_beige rounded-10",
                  style: {
                    width: s + "%",
                  },
                }),
                (0, l.jsxs)("div", {
                  className:
                    "relative ml-[1.4rem] mr-[3.1rem] my-15 text-10 leading-[180%] tracking-[0.05rem] text-dark_grey z-1",
                  children: [
                    (0, l.jsx)("div", {
                      className: "",
                      children: r,
                    }),
                    (0, l.jsxs)("div", {
                      className: "-mt-[0.5rem] opacity-50",
                      children: [
                        (0, l.jsx)("span", {
                          children: "On: ",
                        }),
                        (0, l.jsxs)("span", {
                          children: [s, "%"],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, l.jsx)("div", {
                  className:
                    "relative w-[1.4rem] ml-[3.1rem] mr-[2.4rem] svg-wrapper z-1",
                  children: (0, l.jsx)(d.p, {
                    image: t,
                    fallbackAlt: "",
                    className: "w-full h-auto",
                  }),
                }),
              ],
            })
          );
        };
    },
    1800: function (e, r, t) {
      var l = t(5893);
      r.Z = (e) => {
        let { stroke: r = "#575349" } = e;
        return (0, l.jsx)("svg", {
          width: "11",
          height: "9",
          viewBox: "0 0 11 9",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, l.jsx)("path", {
            id: "Vector 201",
            d: "M0 4.5H9.5M9.5 4.5L5.9 1M9.5 4.5L5.9 8",
            stroke: r,
          }),
        });
      };
    },
  },
]);

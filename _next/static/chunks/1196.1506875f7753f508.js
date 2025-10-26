(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1196], {
    1196: function(e, t, r) {
      "use strict";
      r.r(t);
      var n = r(5893),
        l = r(7294),
        i = r(6038),
        c = r(4247),
        s = r(188),
        o = r(9139),
        a = r(1100);
      t.default = e => {
        let {
          item: t,
          items: r,
          index: l
        } = e;
        return (0, n.jsxs)("section", {
          className: "".concat("white" === t.theme ? "bg-[#F2EFE9]" : "bg-dark_beige", " lg:grid lg:grid-cols-12 px-container text-white ").concat("content.dropdown" === t.__component ? "pb-[10.4rem] lg:pb-[14.4rem] ".concat(!["content.dropdown", "content.dropdown-with-content"].includes(r[l - 1].__component) && "pt-[10.4rem] lg:pt-[22rem]") : "pb-[14.4rem] lg:pb-[17.2rem] ".concat(["content.dropdown", "content.dropdown-with-content"].includes(r[l - 1].__component) && "pt-[10.4rem] lg:pt-[14.4rem]")),
          children: [(0, n.jsxs)("div", {
            className: "lg:col-span-4 font-headings font-medium leading-[0.94] lg:leading-[0.9] lg:pl-[2rem] -tracking-[0.144rem] lg:-tracking-[0.24rem]",
            children: [(0, n.jsx)("h2", {
              className: "text-36 lg:text-60 mb-[3rem] ".concat("white" === t.theme && "text-[#575349]"),
              children: t.title
            }), t.cta && (0, n.jsxs)("button", {
              className: "flex gap-[1em] justify-center items-center bg-[#d7d1c6] text-[#575349] uppercase w-[15em] py-[2.4em] rounded-[0.6em] text-[0.9em] font-medium tracking-[0.03em]",
              onClick: () => window.open(t.cta.url),
              style: {
                fontFamily: "Aeonik Fono"
              },
              children: [t.cta.title, (0, n.jsxs)("svg", {
                width: "8",
                height: "12",
                viewBox: "0 0 8 12",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0, n.jsx)("path", {
                  d: "M3.98217 0.814353V7.95757M3.98217 7.95757L1.21533 5.19073M3.98217 7.95757L6.74901 5.19073",
                  stroke: "#575349"
                }), (0, n.jsx)("line", {
                  x1: "1.21533",
                  y1: "10.6865",
                  x2: "6.78467",
                  y2: "10.6865",
                  stroke: "#575349"
                })]
              })]
            })]
          }), (0, n.jsxs)("div", {
            className: "lg:col-end-13 lg:col-start-5 flex flex-col gap-[4rem] lg:gap-[8rem] mt-[4rem] lg:mt-[1.2rem] lg:pl-[5rem]",
            children: ["content.dropdown" === t.__component ? (0, n.jsx)(m, {
              item: t
            }) : (0, n.jsx)(u, {
              item: t
            }), (0, n.jsx)("div", {
              children: t.items.map((e, r) => (0, n.jsx)(d, {
                option: e,
                theme: t.theme,
                index: r
              }, "dropdown-".concat(r)))
            })]
          })]
        })
      };
      let d = e => {
          let {
            option: t,
            index: a,
            theme: d
          } = e, m = (0, l.useRef)(null), u = (0, l.useRef)(null), g = (0, l.useRef)(!1), h = (0, l.useRef)(null), p = (0, l.useRef)(null);
          (0, l.useEffect)(() => {
            h.current = r(2392), p.current = new h.current({
              target: m.current,
              by: "words"
            })[0].words, i.p8.set(p.current, {
              autoAlpha: 0
            })
          }, []);
          let x = () => {
              g.current ? f() : j()
            },
            f = () => {
              g.current = !1, i.p8.to(m.current, {
                duration: .6,
                ease: "expo.out",
                height: 0,
                onComplete: () => {
                  window.dispatchEvent(new CustomEvent("refresh-scroll-trigger"))
                }
              }), i.p8.to(p.current, {
                autoAlpha: 0,
                duration: .4,
                ease: "power2.out"
              }), i.p8.to(u.current, {
                rduration: .6,
                ease: "expo.out",
                rotate: 0
              })
            },
            j = () => {
              let e = window.innerWidth >= 1024 ? (0, s.z6)(40) : (0, s.z6)(32);
              g.current = !0, i.p8.set(m.current, {
                height: "auto"
              });
              let t = m.current.getBoundingClientRect().height + e;
              i.p8.fromTo(m.current, {
                height: 0
              }, {
                duration: .6,
                ease: "expo.out",
                height: t,
                onComplete: () => {
                  window.dispatchEvent(new CustomEvent("refresh-scroll-trigger"))
                }
              }), i.p8.to(p.current, {
                autoAlpha: 1,
                duration: .4,
                ease: "power2.inOut",
                stagger: .004
              }), i.p8.to(u.current, {
                duration: .6,
                ease: "expo.out",
                rotate: 45
              })
            };
          return (0, n.jsxs)("div", {
            className: "border-b-[1px] ".concat("white" === d ? "border-b-[#575349]" : "border-b-white", " border-opacity-10 flex flex-col leading-[1.42] text-18 tracking-[0.014rem]"),
            children: [(0, n.jsxs)("div", {
              className: "cursor-pointer flex items-center py-[3.2rem] lg:py-[4rem] w-full justify-between",
              style: {
                fontFamily: "Youth",
                fontWeight: 400,
                letterSpacing: "-0.05em"
              },
              onClick: () => x(),
              children: [(0, n.jsx)("div", {
                className: "max-w-[75.2%] md:w-auto ".concat("white" === d && "text-[#575349]"),
                children: t.title
              }), (0, n.jsx)("div", {
                className: "flex-none h-[1.2rem] mt-[0.2rem] svg-wrapper w-[1.2rem]",
                ref: u,
                children: (0, n.jsx)(c.Z, {
                  color: "white" === d ? "#575349" : "#F2EFE9",
                  className: ""
                })
              })]
            }), (0, n.jsx)("div", {
              className: "h-0 overflow-hidden md:w-[75%] ".concat("white" === d && "text-[#575349]"),
              ref: m,
              children: (0, n.jsx)(o.Z, {
                content: t.content
              })
            })]
          })
        },
        m = e => {
          let {
            item: t
          } = e;
          return (0, n.jsx)("div", {
            className: "bg-light_beige bg-opacity-20 h-0 pb-[65.67%] lg:pb-[49.94%] relative rounded-16",
            children: (0, n.jsx)("div", {
              className: "absolute h-full left-0 pb-[6.751rem] lg:pb-[11.812rem] pl-[1.4rem] lg:pl-[4.6rem] pr-[1.871rem] lg:pr-[5.4rem] pt-[6.7rem] lg:pt-[10.101rem] top-0 w-full",
              children: (0, n.jsx)("div", {
                className: "h-full w-full",
                children: (0, n.jsx)(a.p, {
                  image: t.image.data,
                  sizes: "(max-width: 768px) 96vw, 71.5vw",
                  fallbackAlt: "",
                  className: "h-full object-contain w-full"
                })
              })
            })
          })
        },
        u = e => {
          let {
            item: t
          } = e;
          return (0, n.jsxs)("div", {
            className: "flex flex-col md:flex-row gap-[0.8rem] md:gap-[1rem] justify-end",
            children: [t.leftContentTitle && (0, n.jsxs)("div", {
              className: "bg-light_beige bg-opacity-20 flex flex-col gap-[2.4rem] lg:gap-[12.4rem] justify-between px-[2.4rem] py-[2.8rem] lg:p-[4rem] rounded-16 w-full",
              children: [(0, n.jsx)("div", {
                className: "font-headings font-medium leading-[0.92] lg:leading-[1.2] text-[2.4rem] lg:text-30 -tracking-[0.072rem] lg:-tracking-[0.09rem]",
                children: t.leftContentTitle
              }), (0, n.jsx)("div", {
                className: "leading-[1.53] lg:leading-[1.42] lg:pr-[1.75rem] text-13 lg:text-14 tracking-[0.013rem] lg:tracking-[0.014rem]",
                children: (0, n.jsx)(o.Z, {
                  content: t.leftContent
                })
              })]
            }), t.rightContentTitle && (0, n.jsxs)("div", {
              className: "bg-light_beige bg-opacity-20 flex flex-col gap-[2.4rem] lg:gap-[12.4rem] justify-between px-[2.4rem] py-[2.8rem] lg:p-[4rem] rounded-16 w-full",
              children: [(0, n.jsx)("div", {
                className: "font-headings font-medium leading-[0.92] lg:leading-[1.2] text-[2.4rem] lg:text-30 -tracking-[0.072rem] lg:-tracking-[0.09rem]",
                children: t.rightContentTitle
              }), (0, n.jsx)("div", {
                className: "leading-[1.53] lg:leading-[1.42] lg:pr-[1.75rem] text-13 lg:text-14 tracking-[0.013rem] lg:tracking-[0.014rem]",
                children: (0, n.jsx)(o.Z, {
                  content: t.rightContent
                })
              })]
            })]
          })
        }
    },
    9139: function(e, t, r) {
      "use strict";
      r.d(t, {
        Z: function() {
          return s
        }
      });
      var n = r(5893),
        l = r(230),
        i = r(8406),
        c = r.n(i);

      function s(e) {
        let {
          content: t,
          blocks: r,
          className: i
        } = e;
        return (0, n.jsx)("div", {
          className: [c().root, i].join(" "),
          children: (0, n.jsx)(l.i, {
            content: t,
            blocks: r
          })
        })
      }
    },
    8406: function(e) {
      e.exports = {
        root: "StrapiRichText_root__LUiYo"
      }
    },
    230: function(e, t, r) {
      "use strict";
      r.d(t, {
        i: function() {
          return g
        }
      });
      var n = r(5893),
        l = r(7294);
      let i = ({
          text: e,
          ...t
        }) => {
          let {
            modifiers: r,
            missingModifierTypes: l
          } = u();
          return Object.keys(t).reduce((e, i) => {
            if (!t[i]) return e;
            let c = r[i];
            return c ? (0, n.jsx)(c, {
              children: e
            }) : (l.includes(i) || (console.warn(`[@strapi/block-react-renderer] No component found for modifier "${i}"`), l.push(i)), e)
          }, (0, n.jsx)(n.Fragment, {
            children: e
          }))
        },
        c = ["image"],
        s = e => {
          let {
            children: t,
            type: r,
            ...n
          } = e;
          if ("code" === r) {
            let t = e => e.reduce((e, r) => "text" === r.type ? e.concat(r.text) : "link" === r.type ? e.concat(t(r.children)) : e, "");
            return {
              ...n,
              plainText: t(e.children)
            }
          }
          return n
        },
        o = ({
          content: e
        }) => {
          let {
            children: t,
            type: r,
            ...a
          } = e, {
            blocks: d,
            missingBlockTypes: m
          } = u(), g = d[r];
          if (!g) return m.includes(r) || (console.warn(`[@strapi/block-react-renderer] No component found for block type "${r}"`), m.push(r)), null;
          if (c.includes(r)) return (0, n.jsx)(g, {
            ...a
          });
          if ("paragraph" === r && 1 === t.length && "text" === t[0].type && "" === t[0].text) return (0, n.jsx)("br", {});
          let h = s(e);
          return (0, n.jsx)(g, {
            ...h,
            children: t.map((e, t) => {
              if ("text" === e.type) {
                let {
                  type: r,
                  ...n
                } = e;
                return (0, l.createElement)(i, {
                  ...n,
                  key: t
                })
              }
              return (0, n.jsx)(o, {
                content: e
              }, t)
            })
          })
        },
        a = {
          blocks: {
            paragraph: e => (0, n.jsx)("p", {
              children: e.children
            }),
            quote: e => (0, n.jsx)("blockquote", {
              children: e.children
            }),
            code: e => (0, n.jsx)("pre", {
              children: (0, n.jsx)("code", {
                children: e.plainText
              })
            }),
            heading: ({
              level: e,
              children: t
            }) => {
              switch (e) {
                case 1:
                  return (0, n.jsx)("h1", {
                    children: t
                  });
                case 2:
                  return (0, n.jsx)("h2", {
                    children: t
                  });
                case 3:
                  return (0, n.jsx)("h3", {
                    children: t
                  });
                case 4:
                  return (0, n.jsx)("h4", {
                    children: t
                  });
                case 5:
                  return (0, n.jsx)("h5", {
                    children: t
                  });
                case 6:
                  return (0, n.jsx)("h6", {
                    children: t
                  })
              }
            },
            link: e => (0, n.jsx)("a", {
              href: e.url,
              children: e.children
            }),
            list: e => "ordered" === e.format ? (0, n.jsx)("ol", {
              children: e.children
            }) : (0, n.jsx)("ul", {
              children: e.children
            }),
            "list-item": e => (0, n.jsx)("li", {
              children: e.children
            }),
            image: e => (0, n.jsx)("img", {
              src: e.image.url,
              alt: e.image.alternativeText || void 0
            })
          },
          modifiers: {
            bold: e => (0, n.jsx)("strong", {
              children: e.children
            }),
            italic: e => (0, n.jsx)("em", {
              children: e.children
            }),
            underline: e => (0, n.jsx)("u", {
              children: e.children
            }),
            strikethrough: e => (0, n.jsx)("del", {
              children: e.children
            }),
            code: e => (0, n.jsx)("code", {
              children: e.children
            })
          },
          missingBlockTypes: [],
          missingModifierTypes: []
        },
        d = l.createContext(a),
        m = ({
          children: e,
          value: t = a
        }) => {
          let r = l.useMemo(() => t, [t]);
          return (0, n.jsx)(d.Provider, {
            value: r,
            children: e
          })
        };

      function u() {
        return l.useContext(d)
      }
      let g = e => {
        let t = {
            ...a.blocks,
            ...e.blocks
          },
          r = {
            ...a.modifiers,
            ...e.modifiers
          },
          i = l.useRef([]),
          c = l.useRef([]);
        return (0, n.jsx)(m, {
          value: {
            blocks: t,
            modifiers: r,
            missingBlockTypes: i.current,
            missingModifierTypes: c.current
          },
          children: e.content.map((e, t) => (0, n.jsx)(o, {
            content: e
          }, t))
        })
      }
    }
  }
]);
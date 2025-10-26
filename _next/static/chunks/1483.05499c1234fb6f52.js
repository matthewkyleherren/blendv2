(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1483], {
    1483: function(i, e, t) {
      "use strict";
      t.r(e), t.d(e, {
        default: function() {
          return b
        }
      });
      var o = t(2238),
        r = t.n(o),
        s = t(2041);
      class n {
        constructor(i) {
          this.data = new Uint8Array(i), this.idx = 0, this.size = i
        }
        getData() {
          if (this.idx !== this.size) throw Error("Mismatch between size reserved and sized used");
          return this.data.slice(0, this.idx)
        }
        writeUint8(i) {
          this.data.set([i], this.idx), this.idx += 1
        }
        writeUint16(i) {
          let e = new Uint16Array(1);
          e[0] = i;
          let t = new Uint8Array(e.buffer);
          this.data.set([t[1], t[0]], this.idx), this.idx += 2
        }
        writeUint8Array(i) {
          this.data.set(i, this.idx), this.idx += i.length
        }
      }
      let a = i => {
          let e;
          let t = 7;
          for (e = 0; e < i.SPS.length; e += 1) t += 2 + i.SPS[e].length;
          for (e = 0; e < i.PPS.length; e += 1) t += 2 + i.PPS[e].length;
          let o = new n(t);
          for (o.writeUint8(i.configurationVersion), o.writeUint8(i.AVCProfileIndication), o.writeUint8(i.profile_compatibility), o.writeUint8(i.AVCLevelIndication), o.writeUint8(i.lengthSizeMinusOne + 252), o.writeUint8(i.nb_SPS_nalus + 224), e = 0; e < i.SPS.length; e += 1) o.writeUint16(i.SPS[e].length), o.writeUint8Array(i.SPS[e].nalu);
          for (o.writeUint8(i.nb_PPS_nalus), e = 0; e < i.PPS.length; e += 1) o.writeUint16(i.PPS[e].length), o.writeUint8Array(i.PPS[e].nalu);
          return o.getData()
        },
        l = (i, e, {
          VideoDecoder: t,
          EncodedVideoChunk: o,
          debug: r
        }) => new Promise((n, l) => {
          r && console.info("Decoding video from", i);
          try {
            let d;
            let c = s.cn(),
              h = new t({
                output: i => {
                  createImageBitmap(i, {
                    resizeQuality: "low"
                  }).then(t => {
                    e(t), i.close(), h.decodeQueueSize <= 0 && setTimeout(() => {
                      "closed" !== h.state && (h.close(), n())
                    }, 500)
                  })
                },
                error: i => {
                  console.error(i), l(i)
                }
              });
            c.onReady = i => {
              if (i && i.videoTracks && i.videoTracks[0]) {
                [{
                  codec: d
                }] = i.videoTracks, r && console.info("Video with codec:", d);
                let e = c.moov.traks[0].mdia.minf.stbl.stsd.entries[0].avcC,
                  t = a(e);
                h.configure({
                  codec: d,
                  description: t
                }), c.setExtractionOptions(i.videoTracks[0].id), c.start()
              } else l(Error("URL provided is not a valid mp4 video file."))
            }, c.onSamples = (i, e, t) => {
              for (let i = 0; i < t.length; i += 1) {
                let e = t[i],
                  r = e.is_sync ? "key" : "delta",
                  s = new o({
                    type: r,
                    timestamp: e.cts,
                    duration: e.duration,
                    data: e.data
                  });
                h.decode(s)
              }
            }, fetch(i).then(i => {
              let e = i.body.getReader(),
                t = 0;
              return e.read().then(function i({
                done: o,
                value: r
              }) {
                if (o) return c.flush(), null;
                let s = r.buffer;
                return s.fileStart = t, t += s.byteLength, c.appendBuffer(s), e.read().then(i)
              })
            })
          } catch (i) {
            l(i)
          }
        });
      var d = (i, e, t) => "function" == typeof VideoDecoder && "function" == typeof EncodedVideoChunk ? (t && console.info("WebCodecs is natively supported, using native version..."), l(i, e, {
        VideoDecoder,
        EncodedVideoChunk,
        debug: t
      })) : (t && console.info("WebCodecs is not available in this browser."), Promise.resolve());
      let c = (i, e = 1) => Math.abs(window.pageYOffset - i) < e;
      class h {
        constructor({
          src: i,
          scrollyVideoContainer: e,
          cover: t = !0,
          sticky: o = !0,
          full: s = !0,
          trackScroll: n = !0,
          lockScroll: a = !0,
          transitionSpeed: l = 8,
          frameThreshold: d = .1,
          useWebCodecs: h = !0,
          onReady: b = () => {},
          onChange: w = () => {},
          debug: u = !1
        }) {
          if ("object" != typeof document) {
            console.error("ScrollyVideo must be initiated in a DOM context");
            return
          }
          if (!e) {
            console.error("scrollyVideoContainer must be a valid DOM object");
            return
          }
          if (!i) {
            console.error("Must provide valid video src to ScrollyVideo");
            return
          }
          if (e instanceof Element) this.container = e;
          else if ("string" == typeof e) {
            if (this.container = document.getElementById(e), !this.container) throw Error("scrollyVideoContainer must be a valid DOM object")
          } else throw Error("scrollyVideoContainer must be a valid DOM object");
          this.src = i, this.transitionSpeed = l, this.frameThreshold = d, this.useWebCodecs = h, this.cover = t, this.sticky = o, this.trackScroll = n, this.onReady = b, this.onChange = w, this.debug = u, this.video = document.createElement("video"), this.video.src = i, this.video.preload = "auto", this.video.tabIndex = 0, this.video.autobuffer = !0, this.video.playsInline = !0, this.video.muted = !0, this.video.pause(), this.video.load(), this.videoPercentage = 0, this.container.appendChild(this.video), o && (this.container.style.display = "block", this.container.style.position = "sticky", this.container.style.top = "0"), s && (this.container.style.width = "100%", this.container.style.height = "100vh", this.container.style.overflow = "hidden"), t && this.setCoverStyle(this.video);
          let m = new(r())().getEngine();
          this.isSafari = "WebKit" === m.name, u && this.isSafari && console.info("Safari browser detected"), this.currentTime = 0, this.targetTime = 0, this.canvas = null, this.context = null, this.frames = [], this.frameRate = 0;
          let p = function(i, e = 0) {
            let t;
            return function(...o) {
              let r = this;
              clearTimeout(t), t = setTimeout(() => {
                i.apply(r, o)
              }, e)
            }
          }(() => {
            window.requestAnimationFrame(() => {
              this.setScrollPercent(this.videoPercentage)
            })
          }, 100);
          this.updateScrollPercentage = i => {
            let e = this.container.parentNode.getBoundingClientRect(),
              t = -e.top / (e.height - window.innerHeight);
            this.debug && console.info("ScrollyVideo scrolled to", t), null == this.targetScrollPosition ? (this.setTargetTimePercent(t, {
              jump: i
            }), this.onChange(t)) : c(this.targetScrollPosition) ? this.targetScrollPosition = null : a && null != this.targetScrollPosition && p()
          }, this.trackScroll ? (window.addEventListener("scroll", this.updateScrollPercentage), this.video.addEventListener("loadedmetadata", () => this.updateScrollPercentage(!0), {
            once: !0
          })) : this.video.addEventListener("loadedmetadata", () => this.setTargetTimePercent(0, {
            jump: !0
          }), {
            once: !0
          }), this.resize = () => {
            this.debug && console.info("ScrollyVideo resizing..."), this.cover && this.setCoverStyle(this.canvas || this.video), this.paintCanvasFrame(Math.floor(this.currentTime * this.frameRate))
          }, window.addEventListener("resize", this.resize), this.video.addEventListener("progress", this.resize), this.decodeVideo()
        }
        setVideoPercentage(i, e = {}) {
          this.videoPercentage !== i && (this.transitioningRaf && window.cancelAnimationFrame(this.transitioningRaf), this.videoPercentage = i, this.onChange(i), this.trackScroll && this.setScrollPercent(i), this.setTargetTimePercent(i, e))
        }
        setCoverStyle(i) {
          if (this.cover) {
            i.style.position = "absolute", i.style.top = "50%", i.style.left = "50%", i.style.transform = "translate(-50%, -50%)", i.style.minWidth = "101%", i.style.minHeight = "101%";
            let {
              width: e,
              height: t
            } = this.container.getBoundingClientRect(), o = i.videoWidth || i.width, r = i.videoHeight || i.height;
            this.debug && console.info("Container dimensions:", [e, t]), this.debug && console.info("Element dimensions:", [o, r]), e / t > o / r ? (i.style.width = "100%", i.style.height = "auto") : (i.style.height = "100%", i.style.width = "auto")
          }
        }
        async decodeVideo() {
          if (!this.useWebCodecs) {
            this.debug && console.warn("Cannot perform video decode: `useWebCodes` disabled");
            return
          }
          if (!this.src) {
            this.debug && console.warn("Cannot perform video decode: no `src` found");
            return
          }
          try {
            await d(this.src, i => {
              this.frames.push(i)
            }, this.debug)
          } catch (i) {
            this.debug && console.error("Error encountered while decoding video", i), this.frames = [], this.video.load()
          }
          if (0 === this.frames.length) {
            this.debug && console.error("No frames were received from webCodecs"), this.onReady();
            return
          }
          this.frameRate = this.frames.length / this.video.duration, this.debug && console.info("Received", this.frames.length, "frames"), this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.video.style.display = "none", this.container.appendChild(this.canvas), this.cover && this.setCoverStyle(this.canvas), this.paintCanvasFrame(Math.floor(this.currentTime * this.frameRate)), this.onReady()
        }
        paintCanvasFrame(i) {
          let e = this.frames[i];
          if (!this.canvas || !e) return;
          this.debug && console.info("Painting frame", i), this.canvas.width = e.width, this.canvas.height = e.height;
          let {
            width: t,
            height: o
          } = this.container.getBoundingClientRect();
          t / o > e.width / e.height ? (this.canvas.style.width = "100%", this.canvas.style.height = "auto") : (this.canvas.style.height = "100%", this.canvas.style.width = "auto"), this.context.drawImage(e, 0, 0, e.width, e.height)
        }
        transitionToTargetTime({
          jump: i,
          transitionSpeed: e = this.transitionSpeed,
          easing: t = null
        }) {
          this.debug && console.info("Transitioning targetTime:", this.targetTime, "currentTime:", this.currentTime);
          let o = this.targetTime - this.currentTime,
            r = Math.abs(o),
            s = 1e3 * r,
            n = o > 0,
            a = ({
              startCurrentTime: o,
              startTimestamp: l,
              timestamp: d
            }) => {
              let c = (d - l) / s,
                h = n ? this.currentTime >= this.targetTime : this.currentTime <= this.targetTime;
              if (isNaN(this.targetTime) || Math.abs(this.targetTime - this.currentTime) < this.frameThreshold || h) {
                this.video.pause(), this.transitioningRaf && (cancelAnimationFrame(this.transitioningRaf), this.transitioningRaf = null);
                return
              }
              this.targetTime > this.video.duration && (this.targetTime = this.video.duration), this.targetTime < 0 && (this.targetTime = 0);
              let b = this.targetTime - this.currentTime,
                w = t && Number.isFinite(c) ? t(c) : null,
                u = n ? o + w * Math.abs(r) * e : o - w * Math.abs(r) * e;
              if (this.canvas) i ? this.currentTime = this.targetTime : w ? this.currentTime = u : this.currentTime += b / (256 / e), this.paintCanvasFrame(Math.floor(this.currentTime * this.frameRate));
              else if (i || this.isSafari || !n) this.video.pause(), w ? this.currentTime = u : this.currentTime += b / (64 / e), i && (this.currentTime = this.targetTime), this.video.currentTime = this.currentTime;
              else {
                let i = Math.max(Math.min(4 * b, e, 16), 1);
                this.debug && console.info("ScrollyVideo playbackRate:", i), isNaN(i) || (this.video.playbackRate = i, this.video.play()), this.currentTime = this.video.currentTime
              }
              "function" == typeof requestAnimationFrame && (this.transitioningRaf = requestAnimationFrame(i => a({
                startCurrentTime: o,
                startTimestamp: l,
                timestamp: i
              })))
            };
          "function" == typeof requestAnimationFrame && (this.transitioningRaf = requestAnimationFrame(i => {
            a({
              startCurrentTime: this.currentTime,
              startTimestamp: i,
              timestamp: i
            })
          }))
        }
        setTargetTimePercent(i, e = {}) {
          let t = this.frames.length && this.frameRate ? this.frames.length / this.frameRate : this.video.duration;
          this.targetTime = Math.max(Math.min(i, 1), 0) * t, !e.jump && Math.abs(this.currentTime - this.targetTime) < this.frameThreshold || (this.canvas || this.video.paused || this.video.play(), this.transitionToTargetTime(e))
        }
        setScrollPercent(i) {
          if (!this.trackScroll) {
            console.warn("`setScrollPercent` requires enabled `trackScroll`");
            return
          }
          let {
            top: e,
            height: t
          } = this.container.parentNode.getBoundingClientRect(), o = e + window.pageYOffset + (t - window.innerHeight) * i;
          c(o) ? this.targetScrollPosition = null : (window.scrollTo({
            top: o,
            behavior: "smooth"
          }), this.targetScrollPosition = o)
        }
        destroy() {
          this.debug && console.info("Destroying ScrollyVideo"), this.trackScroll && window.removeEventListener("scroll", this.updateScrollPercentage), window.removeEventListener("resize", this.resize), this.container && (this.container.innerHTML = "")
        }
      }
      var b = h
    },
    2238: function(i, e, t) {
      var o;
      ! function(r, s) {
        "use strict";
        var n = "function",
          a = "undefined",
          l = "object",
          d = "string",
          c = "major",
          h = "model",
          b = "name",
          w = "type",
          u = "vendor",
          m = "version",
          p = "architecture",
          f = "console",
          g = "mobile",
          v = "tablet",
          y = "smarttv",
          k = "wearable",
          x = "embedded",
          T = "Amazon",
          S = "Apple",
          P = "ASUS",
          C = "BlackBerry",
          _ = "Browser",
          E = "Chrome",
          z = "Firefox",
          R = "Google",
          A = "Huawei",
          M = "Microsoft",
          U = "Motorola",
          q = "Opera",
          N = "Samsung",
          V = "Sharp",
          O = "Sony",
          j = "Xiaomi",
          B = "Zebra",
          D = "Facebook",
          L = "Chromium OS",
          F = "Mac OS",
          I = " Browser",
          W = function(i, e) {
            var t = {};
            for (var o in i) e[o] && e[o].length % 2 == 0 ? t[o] = e[o].concat(i[o]) : t[o] = i[o];
            return t
          },
          H = function(i) {
            for (var e = {}, t = 0; t < i.length; t++) e[i[t].toUpperCase()] = i[t];
            return e
          },
          G = function(i, e) {
            return typeof i === d && -1 !== Z(e).indexOf(Z(i))
          },
          Z = function(i) {
            return i.toLowerCase()
          },
          $ = function(i, e) {
            if (typeof i === d) return i = i.replace(/^\s\s*/, ""), typeof e === a ? i : i.substring(0, 500)
          },
          Q = function(i, e) {
            for (var t, o, r, a, d, c, h = 0; h < e.length && !d;) {
              var b = e[h],
                w = e[h + 1];
              for (t = o = 0; t < b.length && !d && b[t];)
                if (d = b[t++].exec(i))
                  for (r = 0; r < w.length; r++) c = d[++o], typeof(a = w[r]) === l && a.length > 0 ? 2 === a.length ? typeof a[1] == n ? this[a[0]] = a[1].call(this, c) : this[a[0]] = a[1] : 3 === a.length ? typeof a[1] !== n || a[1].exec && a[1].test ? this[a[0]] = c ? c.replace(a[1], a[2]) : void 0 : this[a[0]] = c ? a[1].call(this, c, a[2]) : void 0 : 4 === a.length && (this[a[0]] = c ? a[3].call(this, c.replace(a[1], a[2])) : void 0) : this[a] = c || s;
              h += 2
            }
          },
          X = function(i, e) {
            for (var t in e)
              if (typeof e[t] === l && e[t].length > 0) {
                for (var o = 0; o < e[t].length; o++)
                  if (G(e[t][o], i)) return "?" === t ? s : t
              } else if (G(e[t], i)) return "?" === t ? s : t;
            return e.hasOwnProperty("*") ? e["*"] : i
          },
          K = {
            ME: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2e3: "NT 5.0",
            XP: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            "8.1": "NT 6.3",
            10: ["NT 6.4", "NT 10.0"],
            RT: "ARM"
          },
          Y = {
            browser: [
              [/\b(?:crmo|crios)\/([\w\.]+)/i],
              [m, [b, "Chrome"]],
              [/edg(?:e|ios|a)?\/([\w\.]+)/i],
              [m, [b, "Edge"]],
              [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
              [b, m],
              [/opios[\/ ]+([\w\.]+)/i],
              [m, [b, q + " Mini"]],
              [/\bop(?:rg)?x\/([\w\.]+)/i],
              [m, [b, q + " GX"]],
              [/\bopr\/([\w\.]+)/i],
              [m, [b, q]],
              [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
              [m, [b, "Baidu"]],
              [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
              [m, [b, "Maxthon"]],
              [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
              [b, m],
              [/quark(?:pc)?\/([-\w\.]+)/i],
              [m, [b, "Quark"]],
              [/\bddg\/([\w\.]+)/i],
              [m, [b, "DuckDuckGo"]],
              [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
              [m, [b, "UC" + _]],
              [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
              [m, [b, "WeChat"]],
              [/konqueror\/([\w\.]+)/i],
              [m, [b, "Konqueror"]],
              [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
              [m, [b, "IE"]],
              [/ya(?:search)?browser\/([\w\.]+)/i],
              [m, [b, "Yandex"]],
              [/slbrowser\/([\w\.]+)/i],
              [m, [b, "Smart Lenovo " + _]],
              [/(avast|avg)\/([\w\.]+)/i],
              [
                [b, /(.+)/, "$1 Secure " + _], m
              ],
              [/\bfocus\/([\w\.]+)/i],
              [m, [b, z + " Focus"]],
              [/\bopt\/([\w\.]+)/i],
              [m, [b, q + " Touch"]],
              [/coc_coc\w+\/([\w\.]+)/i],
              [m, [b, "Coc Coc"]],
              [/dolfin\/([\w\.]+)/i],
              [m, [b, "Dolphin"]],
              [/coast\/([\w\.]+)/i],
              [m, [b, q + " Coast"]],
              [/miuibrowser\/([\w\.]+)/i],
              [m, [b, "MIUI" + I]],
              [/fxios\/([\w\.-]+)/i],
              [m, [b, z]],
              [/\bqihoobrowser\/?([\w\.]*)/i],
              [m, [b, "360"]],
              [/\b(qq)\/([\w\.]+)/i],
              [
                [b, /(.+)/, "$1Browser"], m
              ],
              [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
              [
                [b, /(.+)/, "$1" + I], m
              ],
              [/samsungbrowser\/([\w\.]+)/i],
              [m, [b, N + " Internet"]],
              [/metasr[\/ ]?([\d\.]+)/i],
              [m, [b, "Sogou Explorer"]],
              [/(sogou)mo\w+\/([\d\.]+)/i],
              [
                [b, "Sogou Mobile"], m
              ],
              [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
              [b, m],
              [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
              [b],
              [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
              [m, b],
              [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
              [
                [b, D], m
              ],
              [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
              [b, m],
              [/\bgsa\/([\w\.]+) .*safari\//i],
              [m, [b, "GSA"]],
              [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
              [m, [b, "TikTok"]],
              [/headlesschrome(?:\/([\w\.]+)| )/i],
              [m, [b, E + " Headless"]],
              [/ wv\).+(chrome)\/([\w\.]+)/i],
              [
                [b, E + " WebView"], m
              ],
              [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
              [m, [b, "Android " + _]],
              [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
              [b, m],
              [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
              [m, [b, "Mobile Safari"]],
              [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
              [m, b],
              [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
              [b, [m, X, {
                "1.0": "/8",
                "1.2": "/1",
                "1.3": "/3",
                "2.0": "/412",
                "2.0.2": "/416",
                "2.0.3": "/417",
                "2.0.4": "/419",
                "?": "/"
              }]],
              [/(webkit|khtml)\/([\w\.]+)/i],
              [b, m],
              [/(navigator|netscape\d?)\/([-\w\.]+)/i],
              [
                [b, "Netscape"], m
              ],
              [/(wolvic|librewolf)\/([\w\.]+)/i],
              [b, m],
              [/mobile vr; rv:([\w\.]+)\).+firefox/i],
              [m, [b, z + " Reality"]],
              [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i],
              [b, [m, /_/g, "."]],
              [/(cobalt)\/([\w\.]+)/i],
              [b, [m, /master.|lts./, ""]]
            ],
            cpu: [
              [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
              [
                [p, "amd64"]
              ],
              [/(ia32(?=;))/i],
              [
                [p, Z]
              ],
              [/((?:i[346]|x)86)[;\)]/i],
              [
                [p, "ia32"]
              ],
              [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
              [
                [p, "arm64"]
              ],
              [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
              [
                [p, "armhf"]
              ],
              [/windows (ce|mobile); ppc;/i],
              [
                [p, "arm"]
              ],
              [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
              [
                [p, /ower/, "", Z]
              ],
              [/(sun4\w)[;\)]/i],
              [
                [p, "sparc"]
              ],
              [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
              [
                [p, Z]
              ]
            ],
            device: [
              [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
              [h, [u, N],
                [w, v]
              ],
              [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
              [h, [u, N],
                [w, g]
              ],
              [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
              [h, [u, S],
                [w, g]
              ],
              [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
              [h, [u, S],
                [w, v]
              ],
              [/(macintosh);/i],
              [h, [u, S]],
              [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
              [h, [u, V],
                [w, g]
              ],
              [/(?:honor)([-\w ]+)[;\)]/i],
              [h, [u, "Honor"],
                [w, g]
              ],
              [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
              [h, [u, A],
                [w, v]
              ],
              [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
              [h, [u, A],
                [w, g]
              ],
              [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i],
              [
                [h, /_/g, " "],
                [u, j],
                [w, g]
              ],
              [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
              [
                [h, /_/g, " "],
                [u, j],
                [w, v]
              ],
              [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
              [h, [u, "OPPO"],
                [w, g]
              ],
              [/\b(opd2\d{3}a?) bui/i],
              [h, [u, "OPPO"],
                [w, v]
              ],
              [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
              [h, [u, "Vivo"],
                [w, g]
              ],
              [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
              [h, [u, "Realme"],
                [w, g]
              ],
              [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
              [h, [u, U],
                [w, g]
              ],
              [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
              [h, [u, U],
                [w, v]
              ],
              [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
              [h, [u, "LG"],
                [w, v]
              ],
              [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
              [h, [u, "LG"],
                [w, g]
              ],
              [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
              [h, [u, "Lenovo"],
                [w, v]
              ],
              [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
              [
                [h, /_/g, " "],
                [u, "Nokia"],
                [w, g]
              ],
              [/(pixel c)\b/i],
              [h, [u, R],
                [w, v]
              ],
              [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
              [h, [u, R],
                [w, g]
              ],
              [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
              [h, [u, O],
                [w, g]
              ],
              [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
              [
                [h, "Xperia Tablet"],
                [u, O],
                [w, v]
              ],
              [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
              [h, [u, "OnePlus"],
                [w, g]
              ],
              [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
              [h, [u, T],
                [w, v]
              ],
              [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
              [
                [h, /(.+)/g, "Fire Phone $1"],
                [u, T],
                [w, g]
              ],
              [/(playbook);[-\w\),; ]+(rim)/i],
              [h, u, [w, v]],
              [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
              [h, [u, C],
                [w, g]
              ],
              [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
              [h, [u, P],
                [w, v]
              ],
              [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
              [h, [u, P],
                [w, g]
              ],
              [/(nexus 9)/i],
              [h, [u, "HTC"],
                [w, v]
              ],
              [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
              [u, [h, /_/g, " "],
                [w, g]
              ],
              [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
              [h, [u, "TCL"],
                [w, v]
              ],
              [/(itel) ((\w+))/i],
              [
                [u, Z], h, [w, X, {
                  tablet: ["p10001l", "w7001"],
                  "*": "mobile"
                }]
              ],
              [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
              [h, [u, "Acer"],
                [w, v]
              ],
              [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
              [h, [u, "Meizu"],
                [w, g]
              ],
              [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
              [h, [u, "Ulefone"],
                [w, g]
              ],
              [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
              [h, [u, "Energizer"],
                [w, g]
              ],
              [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
              [h, [u, "Cat"],
                [w, g]
              ],
              [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
              [h, [u, "Smartfren"],
                [w, g]
              ],
              [/droid.+; (a(?:015|06[35]|142p?))/i],
              [h, [u, "Nothing"],
                [w, g]
              ],
              [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (imo) ((?!tab)[\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
              [u, h, [w, g]],
              [/(imo) (tab \w+)/i, /(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
              [u, h, [w, v]],
              [/(surface duo)/i],
              [h, [u, M],
                [w, v]
              ],
              [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
              [h, [u, "Fairphone"],
                [w, g]
              ],
              [/(u304aa)/i],
              [h, [u, "AT&T"],
                [w, g]
              ],
              [/\bsie-(\w*)/i],
              [h, [u, "Siemens"],
                [w, g]
              ],
              [/\b(rct\w+) b/i],
              [h, [u, "RCA"],
                [w, v]
              ],
              [/\b(venue[\d ]{2,7}) b/i],
              [h, [u, "Dell"],
                [w, v]
              ],
              [/\b(q(?:mv|ta)\w+) b/i],
              [h, [u, "Verizon"],
                [w, v]
              ],
              [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
              [h, [u, "Barnes & Noble"],
                [w, v]
              ],
              [/\b(tm\d{3}\w+) b/i],
              [h, [u, "NuVision"],
                [w, v]
              ],
              [/\b(k88) b/i],
              [h, [u, "ZTE"],
                [w, v]
              ],
              [/\b(nx\d{3}j) b/i],
              [h, [u, "ZTE"],
                [w, g]
              ],
              [/\b(gen\d{3}) b.+49h/i],
              [h, [u, "Swiss"],
                [w, g]
              ],
              [/\b(zur\d{3}) b/i],
              [h, [u, "Swiss"],
                [w, v]
              ],
              [/\b((zeki)?tb.*\b) b/i],
              [h, [u, "Zeki"],
                [w, v]
              ],
              [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
              [
                [u, "Dragon Touch"], h, [w, v]
              ],
              [/\b(ns-?\w{0,9}) b/i],
              [h, [u, "Insignia"],
                [w, v]
              ],
              [/\b((nxa|next)-?\w{0,9}) b/i],
              [h, [u, "NextBook"],
                [w, v]
              ],
              [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
              [
                [u, "Voice"], h, [w, g]
              ],
              [/\b(lvtel\-)?(v1[12]) b/i],
              [
                [u, "LvTel"], h, [w, g]
              ],
              [/\b(ph-1) /i],
              [h, [u, "Essential"],
                [w, g]
              ],
              [/\b(v(100md|700na|7011|917g).*\b) b/i],
              [h, [u, "Envizen"],
                [w, v]
              ],
              [/\b(trio[-\w\. ]+) b/i],
              [h, [u, "MachSpeed"],
                [w, v]
              ],
              [/\btu_(1491) b/i],
              [h, [u, "Rotor"],
                [w, v]
              ],
              [/(shield[\w ]+) b/i],
              [h, [u, "Nvidia"],
                [w, v]
              ],
              [/(sprint) (\w+)/i],
              [u, h, [w, g]],
              [/(kin\.[onetw]{3})/i],
              [
                [h, /\./g, " "],
                [u, M],
                [w, g]
              ],
              [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
              [h, [u, B],
                [w, v]
              ],
              [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
              [h, [u, B],
                [w, g]
              ],
              [/smart-tv.+(samsung)/i],
              [u, [w, y]],
              [/hbbtv.+maple;(\d+)/i],
              [
                [h, /^/, "SmartTV"],
                [u, N],
                [w, y]
              ],
              [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
              [
                [u, "LG"],
                [w, y]
              ],
              [/(apple) ?tv/i],
              [u, [h, S + " TV"],
                [w, y]
              ],
              [/crkey/i],
              [
                [h, E + "cast"],
                [u, R],
                [w, y]
              ],
              [/droid.+aft(\w+)( bui|\))/i],
              [h, [u, T],
                [w, y]
              ],
              [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
              [h, [u, V],
                [w, y]
              ],
              [/(bravia[\w ]+)( bui|\))/i],
              [h, [u, O],
                [w, y]
              ],
              [/(mitv-\w{5}) bui/i],
              [h, [u, j],
                [w, y]
              ],
              [/Hbbtv.*(technisat) (.*);/i],
              [u, h, [w, y]],
              [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
              [
                [u, $],
                [h, $],
                [w, y]
              ],
              [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
              [
                [w, y]
              ],
              [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
              [u, h, [w, f]],
              [/droid.+; (shield) bui/i],
              [h, [u, "Nvidia"],
                [w, f]
              ],
              [/(playstation [345portablevi]+)/i],
              [h, [u, O],
                [w, f]
              ],
              [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
              [h, [u, M],
                [w, f]
              ],
              [/\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i],
              [h, [u, N],
                [w, k]
              ],
              [/((pebble))app/i],
              [u, h, [w, k]],
              [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
              [h, [u, S],
                [w, k]
              ],
              [/droid.+; (glass) \d/i],
              [h, [u, R],
                [w, k]
              ],
              [/droid.+; (wt63?0{2,3})\)/i],
              [h, [u, B],
                [w, k]
              ],
              [/droid.+; (glass) \d/i],
              [h, [u, R],
                [w, k]
              ],
              [/(pico) (4|neo3(?: link|pro)?)/i],
              [u, h, [w, k]],
              [/; (quest( \d| pro)?)/i],
              [h, [u, D],
                [w, k]
              ],
              [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
              [u, [w, x]],
              [/(aeobc)\b/i],
              [h, [u, T],
                [w, x]
              ],
              [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
              [h, [w, g]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
              [h, [w, v]],
              [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
              [
                [w, v]
              ],
              [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
              [
                [w, g]
              ],
              [/(android[-\w\. ]{0,9});.+buil/i],
              [h, [u, "Generic"]]
            ],
            engine: [
              [/windows.+ edge\/([\w\.]+)/i],
              [m, [b, "EdgeHTML"]],
              [/(arkweb)\/([\w\.]+)/i],
              [b, m],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [m, [b, "Blink"]],
              [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
              [b, m],
              [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
              [m, b]
            ],
            os: [
              [/microsoft (windows) (vista|xp)/i],
              [b, m],
              [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
              [b, [m, X, K]],
              [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
              [
                [m, X, K],
                [b, "Windows"]
              ],
              [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
              [
                [m, /_/g, "."],
                [b, "iOS"]
              ],
              [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
              [
                [b, F],
                [m, /_/g, "."]
              ],
              [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
              [m, b],
              [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish|openharmony)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
              [b, m],
              [/\(bb(10);/i],
              [m, [b, C]],
              [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
              [m, [b, "Symbian"]],
              [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
              [m, [b, z + " OS"]],
              [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
              [m, [b, "webOS"]],
              [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
              [m, [b, "watchOS"]],
              [/crkey\/([\d\.]+)/i],
              [m, [b, E + "cast"]],
              [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
              [
                [b, L], m
              ],
              [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
              [b, m],
              [/(sunos) ?([\w\.\d]*)/i],
              [
                [b, "Solaris"], m
              ],
              [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
              [b, m]
            ]
          },
          J = function(i, e) {
            if (typeof i === l && (e = i, i = s), !(this instanceof J)) return new J(i, e).getResult();
            var t = typeof r !== a && r.navigator ? r.navigator : s,
              o = i || (t && t.userAgent ? t.userAgent : ""),
              f = t && t.userAgentData ? t.userAgentData : s,
              y = e ? W(Y, e) : Y,
              k = t && t.userAgent == o;
            return this.getBrowser = function() {
              var i, e = {};
              return e[b] = s, e[m] = s, Q.call(e, o, y.browser), e[c] = typeof(i = e[m]) === d ? i.replace(/[^\d\.]/g, "").split(".")[0] : s, k && t && t.brave && typeof t.brave.isBrave == n && (e[b] = "Brave"), e
            }, this.getCPU = function() {
              var i = {};
              return i[p] = s, Q.call(i, o, y.cpu), i
            }, this.getDevice = function() {
              var i = {};
              return i[u] = s, i[h] = s, i[w] = s, Q.call(i, o, y.device), k && !i[w] && f && f.mobile && (i[w] = g), k && "Macintosh" == i[h] && t && typeof t.standalone !== a && t.maxTouchPoints && t.maxTouchPoints > 2 && (i[h] = "iPad", i[w] = v), i
            }, this.getEngine = function() {
              var i = {};
              return i[b] = s, i[m] = s, Q.call(i, o, y.engine), i
            }, this.getOS = function() {
              var i = {};
              return i[b] = s, i[m] = s, Q.call(i, o, y.os), k && !i[b] && f && f.platform && "Unknown" != f.platform && (i[b] = f.platform.replace(/chrome os/i, L).replace(/macos/i, F)), i
            }, this.getResult = function() {
              return {
                ua: this.getUA(),
                browser: this.getBrowser(),
                engine: this.getEngine(),
                os: this.getOS(),
                device: this.getDevice(),
                cpu: this.getCPU()
              }
            }, this.getUA = function() {
              return o
            }, this.setUA = function(i) {
              return o = typeof i === d && i.length > 500 ? $(i, 500) : i, this
            }, this.setUA(o), this
          };
        J.VERSION = "1.0.40", J.BROWSER = H([b, m, c]), J.CPU = H([p]), J.DEVICE = H([h, u, w, f, g, y, v, k, x]), J.ENGINE = J.OS = H([b, m]), typeof e !== a ? (i.exports && (e = i.exports = J), e.UAParser = J) : t.amdO ? s !== (o = (function() {
          return J
        }).call(e, t, e, i)) && (i.exports = o) : typeof r !== a && (r.UAParser = J);
        var ii = typeof r !== a && (r.jQuery || r.Zepto);
        if (ii && !ii.ua) {
          var ie = new J;
          ii.ua = ie.getResult(), ii.ua.get = function() {
            return ie.getUA()
          }, ii.ua.set = function(i) {
            ie.setUA(i);
            var e = ie.getResult();
            for (var t in e) ii.ua[t] = e[t]
          }
        }
      }("object" == typeof window ? window : this)
    }
  }
]);
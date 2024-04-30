/*! For license information please see script.js.LICENSE.txt */
(() => {
  "use strict";
  var t = {
      449: (t, e, i) => {
        function s(t) {
          return (t + 0.5) | 0;
        }
        i.r(e),
          i.d(e, {
            Animation: () => Mi,
            Animations: () => wi,
            ArcElement: () => wn,
            BarController: () => $i,
            BarElement: () => jn,
            BasePlatform: () => ys,
            BasicPlatform: () => vs,
            BubbleController: () => Yi,
            CategoryScale: () => Vo,
            Chart: () => _n,
            Colors: () => qn,
            DatasetController: () => Ii,
            Decimation: () => Kn,
            DomPlatform: () => Is,
            DoughnutController: () => qi,
            Element: () => Fs,
            Filler: () => uo,
            Interaction: () => rs,
            Legend: () => mo,
            LineController: () => Ui,
            LineElement: () => Ln,
            LinearScale: () => No,
            LogarithmicScale: () => qo,
            PieController: () => Ki,
            PointElement: () => Tn,
            PolarAreaController: () => Xi,
            RadarController: () => Zi,
            RadialLinearScale: () => Jo,
            Scale: () => Ys,
            ScatterController: () => Gi,
            SubTitle: () => yo,
            Ticks: () => Gt,
            TimeScale: () => ra,
            TimeSeriesScale: () => ha,
            Title: () => xo,
            Tooltip: () => Io,
            _adapters: () => es,
            _detectPlatform: () => zs,
            animator: () => _i,
            controllers: () => Qi,
            defaults: () => se,
            elements: () => Bn,
            layouts: () => _s,
            plugins: () => zo,
            registerables: () => da,
            registry: () => Xs,
            scales: () => ca,
          });
        const n = (t, e, i) => Math.max(Math.min(t, i), e);
        function o(t) {
          return n(s(2.55 * t), 0, 255);
        }
        function a(t) {
          return n(s(255 * t), 0, 255);
        }
        function r(t) {
          return n(s(t / 2.55) / 100, 0, 1);
        }
        function l(t) {
          return n(s(100 * t), 0, 100);
        }
        const h = {
            0: 0,
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
            7: 7,
            8: 8,
            9: 9,
            A: 10,
            B: 11,
            C: 12,
            D: 13,
            E: 14,
            F: 15,
            a: 10,
            b: 11,
            c: 12,
            d: 13,
            e: 14,
            f: 15,
          },
          c = [..."0123456789ABCDEF"],
          d = (t) => c[15 & t],
          u = (t) => c[(240 & t) >> 4] + c[15 & t],
          f = (t) => (240 & t) >> 4 == (15 & t);
        const g =
          /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
        function p(t, e, i) {
          const s = e * Math.min(i, 1 - i),
            n = (e, n = (e + t / 30) % 12) =>
              i - s * Math.max(Math.min(n - 3, 9 - n, 1), -1);
          return [n(0), n(8), n(4)];
        }
        function m(t, e, i) {
          const s = (s, n = (s + t / 60) % 6) =>
            i - i * e * Math.max(Math.min(n, 4 - n, 1), 0);
          return [s(5), s(3), s(1)];
        }
        function b(t, e, i) {
          const s = p(t, 1, 0.5);
          let n;
          for (
            e + i > 1 && ((n = 1 / (e + i)), (e *= n), (i *= n)), n = 0;
            n < 3;
            n++
          )
            (s[n] *= 1 - e - i), (s[n] += e);
          return s;
        }
        function x(t) {
          const e = t.r / 255,
            i = t.g / 255,
            s = t.b / 255,
            n = Math.max(e, i, s),
            o = Math.min(e, i, s),
            a = (n + o) / 2;
          let r, l, h;
          return (
            n !== o &&
              ((h = n - o),
              (l = a > 0.5 ? h / (2 - n - o) : h / (n + o)),
              (r = (function (t, e, i, s, n) {
                return t === n
                  ? (e - i) / s + (e < i ? 6 : 0)
                  : e === n
                  ? (i - t) / s + 2
                  : (t - e) / s + 4;
              })(e, i, s, h, n)),
              (r = 60 * r + 0.5)),
            [0 | r, l || 0, a]
          );
        }
        function _(t, e, i, s) {
          return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, i, s)).map(a);
        }
        function y(t, e, i) {
          return _(p, t, e, i);
        }
        function v(t) {
          return ((t % 360) + 360) % 360;
        }
        const M = {
            x: "dark",
            Z: "light",
            Y: "re",
            X: "blu",
            W: "gr",
            V: "medium",
            U: "slate",
            A: "ee",
            T: "ol",
            S: "or",
            B: "ra",
            C: "lateg",
            D: "ights",
            R: "in",
            Q: "turquois",
            E: "hi",
            P: "ro",
            O: "al",
            N: "le",
            M: "de",
            L: "yello",
            F: "en",
            K: "ch",
            G: "arks",
            H: "ea",
            I: "ightg",
            J: "wh",
          },
          w = {
            OiceXe: "f0f8ff",
            antiquewEte: "faebd7",
            aqua: "ffff",
            aquamarRe: "7fffd4",
            azuY: "f0ffff",
            beige: "f5f5dc",
            bisque: "ffe4c4",
            black: "0",
            blanKedOmond: "ffebcd",
            Xe: "ff",
            XeviTet: "8a2be2",
            bPwn: "a52a2a",
            burlywood: "deb887",
            caMtXe: "5f9ea0",
            KartYuse: "7fff00",
            KocTate: "d2691e",
            cSO: "ff7f50",
            cSnflowerXe: "6495ed",
            cSnsilk: "fff8dc",
            crimson: "dc143c",
            cyan: "ffff",
            xXe: "8b",
            xcyan: "8b8b",
            xgTMnPd: "b8860b",
            xWay: "a9a9a9",
            xgYF: "6400",
            xgYy: "a9a9a9",
            xkhaki: "bdb76b",
            xmagFta: "8b008b",
            xTivegYF: "556b2f",
            xSange: "ff8c00",
            xScEd: "9932cc",
            xYd: "8b0000",
            xsOmon: "e9967a",
            xsHgYF: "8fbc8f",
            xUXe: "483d8b",
            xUWay: "2f4f4f",
            xUgYy: "2f4f4f",
            xQe: "ced1",
            xviTet: "9400d3",
            dAppRk: "ff1493",
            dApskyXe: "bfff",
            dimWay: "696969",
            dimgYy: "696969",
            dodgerXe: "1e90ff",
            fiYbrick: "b22222",
            flSOwEte: "fffaf0",
            foYstWAn: "228b22",
            fuKsia: "ff00ff",
            gaRsbSo: "dcdcdc",
            ghostwEte: "f8f8ff",
            gTd: "ffd700",
            gTMnPd: "daa520",
            Way: "808080",
            gYF: "8000",
            gYFLw: "adff2f",
            gYy: "808080",
            honeyMw: "f0fff0",
            hotpRk: "ff69b4",
            RdianYd: "cd5c5c",
            Rdigo: "4b0082",
            ivSy: "fffff0",
            khaki: "f0e68c",
            lavFMr: "e6e6fa",
            lavFMrXsh: "fff0f5",
            lawngYF: "7cfc00",
            NmoncEffon: "fffacd",
            ZXe: "add8e6",
            ZcSO: "f08080",
            Zcyan: "e0ffff",
            ZgTMnPdLw: "fafad2",
            ZWay: "d3d3d3",
            ZgYF: "90ee90",
            ZgYy: "d3d3d3",
            ZpRk: "ffb6c1",
            ZsOmon: "ffa07a",
            ZsHgYF: "20b2aa",
            ZskyXe: "87cefa",
            ZUWay: "778899",
            ZUgYy: "778899",
            ZstAlXe: "b0c4de",
            ZLw: "ffffe0",
            lime: "ff00",
            limegYF: "32cd32",
            lRF: "faf0e6",
            magFta: "ff00ff",
            maPon: "800000",
            VaquamarRe: "66cdaa",
            VXe: "cd",
            VScEd: "ba55d3",
            VpurpN: "9370db",
            VsHgYF: "3cb371",
            VUXe: "7b68ee",
            VsprRggYF: "fa9a",
            VQe: "48d1cc",
            VviTetYd: "c71585",
            midnightXe: "191970",
            mRtcYam: "f5fffa",
            mistyPse: "ffe4e1",
            moccasR: "ffe4b5",
            navajowEte: "ffdead",
            navy: "80",
            Tdlace: "fdf5e6",
            Tive: "808000",
            TivedBb: "6b8e23",
            Sange: "ffa500",
            SangeYd: "ff4500",
            ScEd: "da70d6",
            pOegTMnPd: "eee8aa",
            pOegYF: "98fb98",
            pOeQe: "afeeee",
            pOeviTetYd: "db7093",
            papayawEp: "ffefd5",
            pHKpuff: "ffdab9",
            peru: "cd853f",
            pRk: "ffc0cb",
            plum: "dda0dd",
            powMrXe: "b0e0e6",
            purpN: "800080",
            YbeccapurpN: "663399",
            Yd: "ff0000",
            Psybrown: "bc8f8f",
            PyOXe: "4169e1",
            saddNbPwn: "8b4513",
            sOmon: "fa8072",
            sandybPwn: "f4a460",
            sHgYF: "2e8b57",
            sHshell: "fff5ee",
            siFna: "a0522d",
            silver: "c0c0c0",
            skyXe: "87ceeb",
            UXe: "6a5acd",
            UWay: "708090",
            UgYy: "708090",
            snow: "fffafa",
            sprRggYF: "ff7f",
            stAlXe: "4682b4",
            tan: "d2b48c",
            teO: "8080",
            tEstN: "d8bfd8",
            tomato: "ff6347",
            Qe: "40e0d0",
            viTet: "ee82ee",
            JHt: "f5deb3",
            wEte: "ffffff",
            wEtesmoke: "f5f5f5",
            Lw: "ffff00",
            LwgYF: "9acd32",
          };
        let k;
        const S =
            /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/,
          P = (t) =>
            t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055,
          A = (t) =>
            t <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
        function D(t, e, i) {
          if (t) {
            let s = x(t);
            (s[e] = Math.max(0, Math.min(s[e] + s[e] * i, 0 === e ? 360 : 1))),
              (s = y(s)),
              (t.r = s[0]),
              (t.g = s[1]),
              (t.b = s[2]);
          }
        }
        function C(t, e) {
          return t ? Object.assign(e || {}, t) : t;
        }
        function O(t) {
          var e = { r: 0, g: 0, b: 0, a: 255 };
          return (
            Array.isArray(t)
              ? t.length >= 3 &&
                ((e = { r: t[0], g: t[1], b: t[2], a: 255 }),
                t.length > 3 && (e.a = a(t[3])))
              : ((e = C(t, { r: 0, g: 0, b: 0, a: 1 })).a = a(e.a)),
            e
          );
        }
        function L(t) {
          return "r" === t.charAt(0)
            ? (function (t) {
                const e = S.exec(t);
                let i,
                  s,
                  a,
                  r = 255;
                if (e) {
                  if (e[7] !== i) {
                    const t = +e[7];
                    r = e[8] ? o(t) : n(255 * t, 0, 255);
                  }
                  return (
                    (i = +e[1]),
                    (s = +e[3]),
                    (a = +e[5]),
                    (i = 255 & (e[2] ? o(i) : n(i, 0, 255))),
                    (s = 255 & (e[4] ? o(s) : n(s, 0, 255))),
                    (a = 255 & (e[6] ? o(a) : n(a, 0, 255))),
                    { r: i, g: s, b: a, a: r }
                  );
                }
              })(t)
            : (function (t) {
                const e = g.exec(t);
                let i,
                  s = 255;
                if (!e) return;
                e[5] !== i && (s = e[6] ? o(+e[5]) : a(+e[5]));
                const n = v(+e[2]),
                  r = +e[3] / 100,
                  l = +e[4] / 100;
                return (
                  (i =
                    "hwb" === e[1]
                      ? (function (t, e, i) {
                          return _(b, t, e, i);
                        })(n, r, l)
                      : "hsv" === e[1]
                      ? (function (t, e, i) {
                          return _(m, t, e, i);
                        })(n, r, l)
                      : y(n, r, l)),
                  { r: i[0], g: i[1], b: i[2], a: s }
                );
              })(t);
        }
        class E {
          constructor(t) {
            if (t instanceof E) return t;
            const e = typeof t;
            let i;
            var s, n, o;
            "object" === e
              ? (i = O(t))
              : "string" === e &&
                ((o = (s = t).length),
                "#" === s[0] &&
                  (4 === o || 5 === o
                    ? (n = {
                        r: 255 & (17 * h[s[1]]),
                        g: 255 & (17 * h[s[2]]),
                        b: 255 & (17 * h[s[3]]),
                        a: 5 === o ? 17 * h[s[4]] : 255,
                      })
                    : (7 !== o && 9 !== o) ||
                      (n = {
                        r: (h[s[1]] << 4) | h[s[2]],
                        g: (h[s[3]] << 4) | h[s[4]],
                        b: (h[s[5]] << 4) | h[s[6]],
                        a: 9 === o ? (h[s[7]] << 4) | h[s[8]] : 255,
                      })),
                (i =
                  n ||
                  (function (t) {
                    k ||
                      ((k = (function () {
                        const t = {},
                          e = Object.keys(w),
                          i = Object.keys(M);
                        let s, n, o, a, r;
                        for (s = 0; s < e.length; s++) {
                          for (a = r = e[s], n = 0; n < i.length; n++)
                            (o = i[n]), (r = r.replace(o, M[o]));
                          (o = parseInt(w[a], 16)),
                            (t[r] = [(o >> 16) & 255, (o >> 8) & 255, 255 & o]);
                        }
                        return t;
                      })()),
                      (k.transparent = [0, 0, 0, 0]));
                    const e = k[t.toLowerCase()];
                    return (
                      e && {
                        r: e[0],
                        g: e[1],
                        b: e[2],
                        a: 4 === e.length ? e[3] : 255,
                      }
                    );
                  })(t) ||
                  L(t))),
              (this._rgb = i),
              (this._valid = !!i);
          }
          get valid() {
            return this._valid;
          }
          get rgb() {
            var t = C(this._rgb);
            return t && (t.a = r(t.a)), t;
          }
          set rgb(t) {
            this._rgb = O(t);
          }
          rgbString() {
            return this._valid
              ? (t = this._rgb) &&
                  (t.a < 255
                    ? `rgba(${t.r}, ${t.g}, ${t.b}, ${r(t.a)})`
                    : `rgb(${t.r}, ${t.g}, ${t.b})`)
              : void 0;
            var t;
          }
          hexString() {
            return this._valid
              ? ((t = this._rgb),
                (e = ((t) => f(t.r) && f(t.g) && f(t.b) && f(t.a))(t) ? d : u),
                t
                  ? "#" +
                    e(t.r) +
                    e(t.g) +
                    e(t.b) +
                    ((t, e) => (t < 255 ? e(t) : ""))(t.a, e)
                  : void 0)
              : void 0;
            var t, e;
          }
          hslString() {
            return this._valid
              ? (function (t) {
                  if (!t) return;
                  const e = x(t),
                    i = e[0],
                    s = l(e[1]),
                    n = l(e[2]);
                  return t.a < 255
                    ? `hsla(${i}, ${s}%, ${n}%, ${r(t.a)})`
                    : `hsl(${i}, ${s}%, ${n}%)`;
                })(this._rgb)
              : void 0;
          }
          mix(t, e) {
            if (t) {
              const i = this.rgb,
                s = t.rgb;
              let n;
              const o = e === n ? 0.5 : e,
                a = 2 * o - 1,
                r = i.a - s.a,
                l = ((a * r == -1 ? a : (a + r) / (1 + a * r)) + 1) / 2;
              (n = 1 - l),
                (i.r = 255 & (l * i.r + n * s.r + 0.5)),
                (i.g = 255 & (l * i.g + n * s.g + 0.5)),
                (i.b = 255 & (l * i.b + n * s.b + 0.5)),
                (i.a = o * i.a + (1 - o) * s.a),
                (this.rgb = i);
            }
            return this;
          }
          interpolate(t, e) {
            return (
              t &&
                (this._rgb = (function (t, e, i) {
                  const s = A(r(t.r)),
                    n = A(r(t.g)),
                    o = A(r(t.b));
                  return {
                    r: a(P(s + i * (A(r(e.r)) - s))),
                    g: a(P(n + i * (A(r(e.g)) - n))),
                    b: a(P(o + i * (A(r(e.b)) - o))),
                    a: t.a + i * (e.a - t.a),
                  };
                })(this._rgb, t._rgb, e)),
              this
            );
          }
          clone() {
            return new E(this.rgb);
          }
          alpha(t) {
            return (this._rgb.a = a(t)), this;
          }
          clearer(t) {
            return (this._rgb.a *= 1 - t), this;
          }
          greyscale() {
            const t = this._rgb,
              e = s(0.3 * t.r + 0.59 * t.g + 0.11 * t.b);
            return (t.r = t.g = t.b = e), this;
          }
          opaquer(t) {
            return (this._rgb.a *= 1 + t), this;
          }
          negate() {
            const t = this._rgb;
            return (
              (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this
            );
          }
          lighten(t) {
            return D(this._rgb, 2, t), this;
          }
          darken(t) {
            return D(this._rgb, 2, -t), this;
          }
          saturate(t) {
            return D(this._rgb, 1, t), this;
          }
          desaturate(t) {
            return D(this._rgb, 1, -t), this;
          }
          rotate(t) {
            return (
              (function (t, e) {
                var i = x(t);
                (i[0] = v(i[0] + e)),
                  (i = y(i)),
                  (t.r = i[0]),
                  (t.g = i[1]),
                  (t.b = i[2]);
              })(this._rgb, t),
              this
            );
          }
        }
        function T() {}
        const R = (() => {
          let t = 0;
          return () => t++;
        })();
        function I(t) {
          return null == t;
        }
        function z(t) {
          if (Array.isArray && Array.isArray(t)) return !0;
          const e = Object.prototype.toString.call(t);
          return "[object" === e.slice(0, 7) && "Array]" === e.slice(-6);
        }
        function F(t) {
          return (
            null !== t &&
            "[object Object]" === Object.prototype.toString.call(t)
          );
        }
        function V(t) {
          return ("number" == typeof t || t instanceof Number) && isFinite(+t);
        }
        function j(t, e) {
          return V(t) ? t : e;
        }
        function B(t, e) {
          return void 0 === t ? e : t;
        }
        const N = (t, e) =>
          "string" == typeof t && t.endsWith("%")
            ? (parseFloat(t) / 100) * e
            : +t;
        function H(t, e, i) {
          if (t && "function" == typeof t.call) return t.apply(i, e);
        }
        function W(t, e, i, s) {
          let n, o, a;
          if (z(t))
            if (((o = t.length), s))
              for (n = o - 1; n >= 0; n--) e.call(i, t[n], n);
            else for (n = 0; n < o; n++) e.call(i, t[n], n);
          else if (F(t))
            for (a = Object.keys(t), o = a.length, n = 0; n < o; n++)
              e.call(i, t[a[n]], a[n]);
        }
        function $(t, e) {
          let i, s, n, o;
          if (!t || !e || t.length !== e.length) return !1;
          for (i = 0, s = t.length; i < s; ++i)
            if (
              ((n = t[i]),
              (o = e[i]),
              n.datasetIndex !== o.datasetIndex || n.index !== o.index)
            )
              return !1;
          return !0;
        }
        function Y(t) {
          if (z(t)) return t.map(Y);
          if (F(t)) {
            const e = Object.create(null),
              i = Object.keys(t),
              s = i.length;
            let n = 0;
            for (; n < s; ++n) e[i[n]] = Y(t[i[n]]);
            return e;
          }
          return t;
        }
        function q(t) {
          return -1 === ["__proto__", "prototype", "constructor"].indexOf(t);
        }
        function U(t, e, i, s) {
          if (!q(t)) return;
          const n = e[t],
            o = i[t];
          F(n) && F(o) ? X(n, o, s) : (e[t] = Y(o));
        }
        function X(t, e, i) {
          const s = z(e) ? e : [e],
            n = s.length;
          if (!F(t)) return t;
          const o = (i = i || {}).merger || U;
          let a;
          for (let e = 0; e < n; ++e) {
            if (((a = s[e]), !F(a))) continue;
            const n = Object.keys(a);
            for (let e = 0, s = n.length; e < s; ++e) o(n[e], t, a, i);
          }
          return t;
        }
        function K(t, e) {
          return X(t, e, { merger: Z });
        }
        function Z(t, e, i) {
          if (!q(t)) return;
          const s = e[t],
            n = i[t];
          F(s) && F(n)
            ? K(s, n)
            : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = Y(n));
        }
        const G = { "": (t) => t, x: (t) => t.x, y: (t) => t.y };
        function Q(t, e) {
          const i =
            G[e] ||
            (G[e] = (function (t) {
              const e = (function (t) {
                const e = t.split("."),
                  i = [];
                let s = "";
                for (const t of e)
                  (s += t),
                    s.endsWith("\\")
                      ? (s = s.slice(0, -1) + ".")
                      : (i.push(s), (s = ""));
                return i;
              })(t);
              return (t) => {
                for (const i of e) {
                  if ("" === i) break;
                  t = t && t[i];
                }
                return t;
              };
            })(e));
          return i(t);
        }
        function J(t) {
          return t.charAt(0).toUpperCase() + t.slice(1);
        }
        const tt = (t) => void 0 !== t,
          et = (t) => "function" == typeof t,
          it = (t, e) => {
            if (t.size !== e.size) return !1;
            for (const i of t) if (!e.has(i)) return !1;
            return !0;
          },
          st = Math.PI,
          nt = 2 * st,
          ot = nt + st,
          at = Number.POSITIVE_INFINITY,
          rt = st / 180,
          lt = st / 2,
          ht = st / 4,
          ct = (2 * st) / 3,
          dt = Math.log10,
          ut = Math.sign;
        function ft(t, e, i) {
          return Math.abs(t - e) < i;
        }
        function gt(t) {
          const e = Math.round(t);
          t = ft(t, e, t / 1e3) ? e : t;
          const i = Math.pow(10, Math.floor(dt(t))),
            s = t / i;
          return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * i;
        }
        function pt(t) {
          return !isNaN(parseFloat(t)) && isFinite(t);
        }
        function mt(t, e, i) {
          let s, n, o;
          for (s = 0, n = t.length; s < n; s++)
            (o = t[s][i]),
              isNaN(o) ||
                ((e.min = Math.min(e.min, o)), (e.max = Math.max(e.max, o)));
        }
        function bt(t) {
          return t * (st / 180);
        }
        function xt(t) {
          return t * (180 / st);
        }
        function _t(t) {
          if (!V(t)) return;
          let e = 1,
            i = 0;
          for (; Math.round(t * e) / e !== t; ) (e *= 10), i++;
          return i;
        }
        function yt(t, e) {
          const i = e.x - t.x,
            s = e.y - t.y,
            n = Math.sqrt(i * i + s * s);
          let o = Math.atan2(s, i);
          return o < -0.5 * st && (o += nt), { angle: o, distance: n };
        }
        function vt(t, e) {
          return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
        }
        function Mt(t, e) {
          return ((t - e + ot) % nt) - st;
        }
        function wt(t) {
          return ((t % nt) + nt) % nt;
        }
        function kt(t, e, i, s) {
          const n = wt(t),
            o = wt(e),
            a = wt(i),
            r = wt(o - n),
            l = wt(a - n),
            h = wt(n - o),
            c = wt(n - a);
          return n === o || n === a || (s && o === a) || (r > l && h < c);
        }
        function St(t, e, i) {
          return Math.max(e, Math.min(i, t));
        }
        function Pt(t, e, i, s = 1e-6) {
          return t >= Math.min(e, i) - s && t <= Math.max(e, i) + s;
        }
        function At(t, e, i) {
          i = i || ((i) => t[i] < e);
          let s,
            n = t.length - 1,
            o = 0;
          for (; n - o > 1; ) (s = (o + n) >> 1), i(s) ? (o = s) : (n = s);
          return { lo: o, hi: n };
        }
        const Dt = (t, e, i, s) =>
            At(
              t,
              i,
              s
                ? (s) => {
                    const n = t[s][e];
                    return n < i || (n === i && t[s + 1][e] === i);
                  }
                : (s) => t[s][e] < i
            ),
          Ct = (t, e, i) => At(t, i, (s) => t[s][e] >= i),
          Ot = ["push", "pop", "shift", "splice", "unshift"];
        function Lt(t, e) {
          const i = t._chartjs;
          if (!i) return;
          const s = i.listeners,
            n = s.indexOf(e);
          -1 !== n && s.splice(n, 1),
            s.length > 0 ||
              (Ot.forEach((e) => {
                delete t[e];
              }),
              delete t._chartjs);
        }
        function Et(t) {
          const e = new Set();
          let i, s;
          for (i = 0, s = t.length; i < s; ++i) e.add(t[i]);
          return e.size === s ? t : Array.from(e);
        }
        const Tt =
          "undefined" == typeof window
            ? function (t) {
                return t();
              }
            : window.requestAnimationFrame;
        function Rt(t, e) {
          let i = [],
            s = !1;
          return function (...n) {
            (i = n),
              s ||
                ((s = !0),
                Tt.call(window, () => {
                  (s = !1), t.apply(e, i);
                }));
          };
        }
        const It = (t) =>
            "start" === t ? "left" : "end" === t ? "right" : "center",
          zt = (t, e, i) => ("start" === t ? e : "end" === t ? i : (e + i) / 2);
        function Ft(t, e, i) {
          const s = e.length;
          let n = 0,
            o = s;
          if (t._sorted) {
            const { iScale: a, _parsed: r } = t,
              l = a.axis,
              {
                min: h,
                max: c,
                minDefined: d,
                maxDefined: u,
              } = a.getUserBounds();
            d &&
              (n = St(
                Math.min(
                  Dt(r, a.axis, h).lo,
                  i ? s : Dt(e, l, a.getPixelForValue(h)).lo
                ),
                0,
                s - 1
              )),
              (o = u
                ? St(
                    Math.max(
                      Dt(r, a.axis, c, !0).hi + 1,
                      i ? 0 : Dt(e, l, a.getPixelForValue(c), !0).hi + 1
                    ),
                    n,
                    s
                  ) - n
                : s - n);
          }
          return { start: n, count: o };
        }
        function Vt(t) {
          const { xScale: e, yScale: i, _scaleRanges: s } = t,
            n = { xmin: e.min, xmax: e.max, ymin: i.min, ymax: i.max };
          if (!s) return (t._scaleRanges = n), !0;
          const o =
            s.xmin !== e.min ||
            s.xmax !== e.max ||
            s.ymin !== i.min ||
            s.ymax !== i.max;
          return Object.assign(s, n), o;
        }
        const jt = (t) => 0 === t || 1 === t,
          Bt = (t, e, i) =>
            -Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * nt) / i),
          Nt = (t, e, i) =>
            Math.pow(2, -10 * t) * Math.sin(((t - e) * nt) / i) + 1,
          Ht = {
            linear: (t) => t,
            easeInQuad: (t) => t * t,
            easeOutQuad: (t) => -t * (t - 2),
            easeInOutQuad: (t) =>
              (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1),
            easeInCubic: (t) => t * t * t,
            easeOutCubic: (t) => (t -= 1) * t * t + 1,
            easeInOutCubic: (t) =>
              (t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2),
            easeInQuart: (t) => t * t * t * t,
            easeOutQuart: (t) => -((t -= 1) * t * t * t - 1),
            easeInOutQuart: (t) =>
              (t /= 0.5) < 1
                ? 0.5 * t * t * t * t
                : -0.5 * ((t -= 2) * t * t * t - 2),
            easeInQuint: (t) => t * t * t * t * t,
            easeOutQuint: (t) => (t -= 1) * t * t * t * t + 1,
            easeInOutQuint: (t) =>
              (t /= 0.5) < 1
                ? 0.5 * t * t * t * t * t
                : 0.5 * ((t -= 2) * t * t * t * t + 2),
            easeInSine: (t) => 1 - Math.cos(t * lt),
            easeOutSine: (t) => Math.sin(t * lt),
            easeInOutSine: (t) => -0.5 * (Math.cos(st * t) - 1),
            easeInExpo: (t) => (0 === t ? 0 : Math.pow(2, 10 * (t - 1))),
            easeOutExpo: (t) => (1 === t ? 1 : 1 - Math.pow(2, -10 * t)),
            easeInOutExpo: (t) =>
              jt(t)
                ? t
                : t < 0.5
                ? 0.5 * Math.pow(2, 10 * (2 * t - 1))
                : 0.5 * (2 - Math.pow(2, -10 * (2 * t - 1))),
            easeInCirc: (t) => (t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)),
            easeOutCirc: (t) => Math.sqrt(1 - (t -= 1) * t),
            easeInOutCirc: (t) =>
              (t /= 0.5) < 1
                ? -0.5 * (Math.sqrt(1 - t * t) - 1)
                : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
            easeInElastic: (t) => (jt(t) ? t : Bt(t, 0.075, 0.3)),
            easeOutElastic: (t) => (jt(t) ? t : Nt(t, 0.075, 0.3)),
            easeInOutElastic(t) {
              const e = 0.1125;
              return jt(t)
                ? t
                : t < 0.5
                ? 0.5 * Bt(2 * t, e, 0.45)
                : 0.5 + 0.5 * Nt(2 * t - 1, e, 0.45);
            },
            easeInBack(t) {
              const e = 1.70158;
              return t * t * ((e + 1) * t - e);
            },
            easeOutBack(t) {
              const e = 1.70158;
              return (t -= 1) * t * ((e + 1) * t + e) + 1;
            },
            easeInOutBack(t) {
              let e = 1.70158;
              return (t /= 0.5) < 1
                ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
                : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
            },
            easeInBounce: (t) => 1 - Ht.easeOutBounce(1 - t),
            easeOutBounce(t) {
              const e = 7.5625,
                i = 2.75;
              return t < 1 / i
                ? e * t * t
                : t < 2 / i
                ? e * (t -= 1.5 / i) * t + 0.75
                : t < 2.5 / i
                ? e * (t -= 2.25 / i) * t + 0.9375
                : e * (t -= 2.625 / i) * t + 0.984375;
            },
            easeInOutBounce: (t) =>
              t < 0.5
                ? 0.5 * Ht.easeInBounce(2 * t)
                : 0.5 * Ht.easeOutBounce(2 * t - 1) + 0.5,
          };
        function Wt(t) {
          if (t && "object" == typeof t) {
            const e = t.toString();
            return (
              "[object CanvasPattern]" === e || "[object CanvasGradient]" === e
            );
          }
          return !1;
        }
        function $t(t) {
          return Wt(t) ? t : new E(t);
        }
        function Yt(t) {
          return Wt(t) ? t : new E(t).saturate(0.5).darken(0.1).hexString();
        }
        const qt = ["x", "y", "borderWidth", "radius", "tension"],
          Ut = ["color", "borderColor", "backgroundColor"],
          Xt = new Map();
        function Kt(t, e, i) {
          return (function (t, e) {
            e = e || {};
            const i = t + JSON.stringify(e);
            let s = Xt.get(i);
            return s || ((s = new Intl.NumberFormat(t, e)), Xt.set(i, s)), s;
          })(e, i).format(t);
        }
        const Zt = {
          values: (t) => (z(t) ? t : "" + t),
          numeric(t, e, i) {
            if (0 === t) return "0";
            const s = this.chart.options.locale;
            let n,
              o = t;
            if (i.length > 1) {
              const e = Math.max(
                Math.abs(i[0].value),
                Math.abs(i[i.length - 1].value)
              );
              (e < 1e-4 || e > 1e15) && (n = "scientific"),
                (o = (function (t, e) {
                  let i =
                    e.length > 3
                      ? e[2].value - e[1].value
                      : e[1].value - e[0].value;
                  return (
                    Math.abs(i) >= 1 &&
                      t !== Math.floor(t) &&
                      (i = t - Math.floor(t)),
                    i
                  );
                })(t, i));
            }
            const a = dt(Math.abs(o)),
              r = Math.max(Math.min(-1 * Math.floor(a), 20), 0),
              l = {
                notation: n,
                minimumFractionDigits: r,
                maximumFractionDigits: r,
              };
            return Object.assign(l, this.options.ticks.format), Kt(t, s, l);
          },
          logarithmic(t, e, i) {
            if (0 === t) return "0";
            const s = i[e].significand || t / Math.pow(10, Math.floor(dt(t)));
            return [1, 2, 3, 5, 10, 15].includes(s) || e > 0.8 * i.length
              ? Zt.numeric.call(this, t, e, i)
              : "";
          },
        };
        var Gt = { formatters: Zt };
        const Qt = Object.create(null),
          Jt = Object.create(null);
        function te(t, e) {
          if (!e) return t;
          const i = e.split(".");
          for (let e = 0, s = i.length; e < s; ++e) {
            const s = i[e];
            t = t[s] || (t[s] = Object.create(null));
          }
          return t;
        }
        function ee(t, e, i) {
          return "string" == typeof e ? X(te(t, e), i) : X(te(t, ""), e);
        }
        class ie {
          constructor(t, e) {
            (this.animation = void 0),
              (this.backgroundColor = "rgba(0,0,0,0.1)"),
              (this.borderColor = "rgba(0,0,0,0.1)"),
              (this.color = "#666"),
              (this.datasets = {}),
              (this.devicePixelRatio = (t) =>
                t.chart.platform.getDevicePixelRatio()),
              (this.elements = {}),
              (this.events = [
                "mousemove",
                "mouseout",
                "click",
                "touchstart",
                "touchmove",
              ]),
              (this.font = {
                family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                size: 12,
                style: "normal",
                lineHeight: 1.2,
                weight: null,
              }),
              (this.hover = {}),
              (this.hoverBackgroundColor = (t, e) => Yt(e.backgroundColor)),
              (this.hoverBorderColor = (t, e) => Yt(e.borderColor)),
              (this.hoverColor = (t, e) => Yt(e.color)),
              (this.indexAxis = "x"),
              (this.interaction = {
                mode: "nearest",
                intersect: !0,
                includeInvisible: !1,
              }),
              (this.maintainAspectRatio = !0),
              (this.onHover = null),
              (this.onClick = null),
              (this.parsing = !0),
              (this.plugins = {}),
              (this.responsive = !0),
              (this.scale = void 0),
              (this.scales = {}),
              (this.showLine = !0),
              (this.drawActiveElementsOnTop = !0),
              this.describe(t),
              this.apply(e);
          }
          set(t, e) {
            return ee(this, t, e);
          }
          get(t) {
            return te(this, t);
          }
          describe(t, e) {
            return ee(Jt, t, e);
          }
          override(t, e) {
            return ee(Qt, t, e);
          }
          route(t, e, i, s) {
            const n = te(this, t),
              o = te(this, i),
              a = "_" + e;
            Object.defineProperties(n, {
              [a]: { value: n[e], writable: !0 },
              [e]: {
                enumerable: !0,
                get() {
                  const t = this[a],
                    e = o[s];
                  return F(t) ? Object.assign({}, e, t) : B(t, e);
                },
                set(t) {
                  this[a] = t;
                },
              },
            });
          }
          apply(t) {
            t.forEach((t) => t(this));
          }
        }
        var se = new ie(
          {
            _scriptable: (t) => !t.startsWith("on"),
            _indexable: (t) => "events" !== t,
            hover: { _fallback: "interaction" },
            interaction: { _scriptable: !1, _indexable: !1 },
          },
          [
            function (t) {
              t.set("animation", {
                delay: void 0,
                duration: 1e3,
                easing: "easeOutQuart",
                fn: void 0,
                from: void 0,
                loop: void 0,
                to: void 0,
                type: void 0,
              }),
                t.describe("animation", {
                  _fallback: !1,
                  _indexable: !1,
                  _scriptable: (t) =>
                    "onProgress" !== t && "onComplete" !== t && "fn" !== t,
                }),
                t.set("animations", {
                  colors: { type: "color", properties: Ut },
                  numbers: { type: "number", properties: qt },
                }),
                t.describe("animations", { _fallback: "animation" }),
                t.set("transitions", {
                  active: { animation: { duration: 400 } },
                  resize: { animation: { duration: 0 } },
                  show: {
                    animations: {
                      colors: { from: "transparent" },
                      visible: { type: "boolean", duration: 0 },
                    },
                  },
                  hide: {
                    animations: {
                      colors: { to: "transparent" },
                      visible: {
                        type: "boolean",
                        easing: "linear",
                        fn: (t) => 0 | t,
                      },
                    },
                  },
                });
            },
            function (t) {
              t.set("layout", {
                autoPadding: !0,
                padding: { top: 0, right: 0, bottom: 0, left: 0 },
              });
            },
            function (t) {
              t.set("scale", {
                display: !0,
                offset: !1,
                reverse: !1,
                beginAtZero: !1,
                bounds: "ticks",
                grace: 0,
                grid: {
                  display: !0,
                  lineWidth: 1,
                  drawOnChartArea: !0,
                  drawTicks: !0,
                  tickLength: 8,
                  tickWidth: (t, e) => e.lineWidth,
                  tickColor: (t, e) => e.color,
                  offset: !1,
                },
                border: { display: !0, dash: [], dashOffset: 0, width: 1 },
                title: {
                  display: !1,
                  text: "",
                  padding: { top: 4, bottom: 4 },
                },
                ticks: {
                  minRotation: 0,
                  maxRotation: 50,
                  mirror: !1,
                  textStrokeWidth: 0,
                  textStrokeColor: "",
                  padding: 3,
                  display: !0,
                  autoSkip: !0,
                  autoSkipPadding: 3,
                  labelOffset: 0,
                  callback: Gt.formatters.values,
                  minor: {},
                  major: {},
                  align: "center",
                  crossAlign: "near",
                  showLabelBackdrop: !1,
                  backdropColor: "rgba(255, 255, 255, 0.75)",
                  backdropPadding: 2,
                },
              }),
                t.route("scale.ticks", "color", "", "color"),
                t.route("scale.grid", "color", "", "borderColor"),
                t.route("scale.border", "color", "", "borderColor"),
                t.route("scale.title", "color", "", "color"),
                t.describe("scale", {
                  _fallback: !1,
                  _scriptable: (t) =>
                    !t.startsWith("before") &&
                    !t.startsWith("after") &&
                    "callback" !== t &&
                    "parser" !== t,
                  _indexable: (t) =>
                    "borderDash" !== t &&
                    "tickBorderDash" !== t &&
                    "dash" !== t,
                }),
                t.describe("scales", { _fallback: "scale" }),
                t.describe("scale.ticks", {
                  _scriptable: (t) =>
                    "backdropPadding" !== t && "callback" !== t,
                  _indexable: (t) => "backdropPadding" !== t,
                });
            },
          ]
        );
        function ne(t, e, i, s, n) {
          let o = e[n];
          return (
            o || ((o = e[n] = t.measureText(n).width), i.push(n)),
            o > s && (s = o),
            s
          );
        }
        function oe(t, e, i, s) {
          let n = ((s = s || {}).data = s.data || {}),
            o = (s.garbageCollect = s.garbageCollect || []);
          s.font !== e &&
            ((n = s.data = {}), (o = s.garbageCollect = []), (s.font = e)),
            t.save(),
            (t.font = e);
          let a = 0;
          const r = i.length;
          let l, h, c, d, u;
          for (l = 0; l < r; l++)
            if (((d = i[l]), null != d && !0 !== z(d))) a = ne(t, n, o, a, d);
            else if (z(d))
              for (h = 0, c = d.length; h < c; h++)
                (u = d[h]), null == u || z(u) || (a = ne(t, n, o, a, u));
          t.restore();
          const f = o.length / 2;
          if (f > i.length) {
            for (l = 0; l < f; l++) delete n[o[l]];
            o.splice(0, f);
          }
          return a;
        }
        function ae(t, e, i) {
          const s = t.currentDevicePixelRatio,
            n = 0 !== i ? Math.max(i / 2, 0.5) : 0;
          return Math.round((e - n) * s) / s + n;
        }
        function re(t, e) {
          (e = e || t.getContext("2d")).save(),
            e.resetTransform(),
            e.clearRect(0, 0, t.width, t.height),
            e.restore();
        }
        function le(t, e, i, s) {
          he(t, e, i, s, null);
        }
        function he(t, e, i, s, n) {
          let o, a, r, l, h, c, d, u;
          const f = e.pointStyle,
            g = e.rotation,
            p = e.radius;
          let m = (g || 0) * rt;
          if (
            f &&
            "object" == typeof f &&
            ((o = f.toString()),
            "[object HTMLImageElement]" === o ||
              "[object HTMLCanvasElement]" === o)
          )
            return (
              t.save(),
              t.translate(i, s),
              t.rotate(m),
              t.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height),
              void t.restore()
            );
          if (!(isNaN(p) || p <= 0)) {
            switch ((t.beginPath(), f)) {
              default:
                n ? t.ellipse(i, s, n / 2, p, 0, 0, nt) : t.arc(i, s, p, 0, nt),
                  t.closePath();
                break;
              case "triangle":
                (c = n ? n / 2 : p),
                  t.moveTo(i + Math.sin(m) * c, s - Math.cos(m) * p),
                  (m += ct),
                  t.lineTo(i + Math.sin(m) * c, s - Math.cos(m) * p),
                  (m += ct),
                  t.lineTo(i + Math.sin(m) * c, s - Math.cos(m) * p),
                  t.closePath();
                break;
              case "rectRounded":
                (h = 0.516 * p),
                  (l = p - h),
                  (a = Math.cos(m + ht) * l),
                  (d = Math.cos(m + ht) * (n ? n / 2 - h : l)),
                  (r = Math.sin(m + ht) * l),
                  (u = Math.sin(m + ht) * (n ? n / 2 - h : l)),
                  t.arc(i - d, s - r, h, m - st, m - lt),
                  t.arc(i + u, s - a, h, m - lt, m),
                  t.arc(i + d, s + r, h, m, m + lt),
                  t.arc(i - u, s + a, h, m + lt, m + st),
                  t.closePath();
                break;
              case "rect":
                if (!g) {
                  (l = Math.SQRT1_2 * p),
                    (c = n ? n / 2 : l),
                    t.rect(i - c, s - l, 2 * c, 2 * l);
                  break;
                }
                m += ht;
              case "rectRot":
                (d = Math.cos(m) * (n ? n / 2 : p)),
                  (a = Math.cos(m) * p),
                  (r = Math.sin(m) * p),
                  (u = Math.sin(m) * (n ? n / 2 : p)),
                  t.moveTo(i - d, s - r),
                  t.lineTo(i + u, s - a),
                  t.lineTo(i + d, s + r),
                  t.lineTo(i - u, s + a),
                  t.closePath();
                break;
              case "crossRot":
                m += ht;
              case "cross":
                (d = Math.cos(m) * (n ? n / 2 : p)),
                  (a = Math.cos(m) * p),
                  (r = Math.sin(m) * p),
                  (u = Math.sin(m) * (n ? n / 2 : p)),
                  t.moveTo(i - d, s - r),
                  t.lineTo(i + d, s + r),
                  t.moveTo(i + u, s - a),
                  t.lineTo(i - u, s + a);
                break;
              case "star":
                (d = Math.cos(m) * (n ? n / 2 : p)),
                  (a = Math.cos(m) * p),
                  (r = Math.sin(m) * p),
                  (u = Math.sin(m) * (n ? n / 2 : p)),
                  t.moveTo(i - d, s - r),
                  t.lineTo(i + d, s + r),
                  t.moveTo(i + u, s - a),
                  t.lineTo(i - u, s + a),
                  (m += ht),
                  (d = Math.cos(m) * (n ? n / 2 : p)),
                  (a = Math.cos(m) * p),
                  (r = Math.sin(m) * p),
                  (u = Math.sin(m) * (n ? n / 2 : p)),
                  t.moveTo(i - d, s - r),
                  t.lineTo(i + d, s + r),
                  t.moveTo(i + u, s - a),
                  t.lineTo(i - u, s + a);
                break;
              case "line":
                (a = n ? n / 2 : Math.cos(m) * p),
                  (r = Math.sin(m) * p),
                  t.moveTo(i - a, s - r),
                  t.lineTo(i + a, s + r);
                break;
              case "dash":
                t.moveTo(i, s),
                  t.lineTo(
                    i + Math.cos(m) * (n ? n / 2 : p),
                    s + Math.sin(m) * p
                  );
                break;
              case !1:
                t.closePath();
            }
            t.fill(), e.borderWidth > 0 && t.stroke();
          }
        }
        function ce(t, e, i) {
          return (
            (i = i || 0.5),
            !e ||
              (t &&
                t.x > e.left - i &&
                t.x < e.right + i &&
                t.y > e.top - i &&
                t.y < e.bottom + i)
          );
        }
        function de(t, e) {
          t.save(),
            t.beginPath(),
            t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top),
            t.clip();
        }
        function ue(t) {
          t.restore();
        }
        function fe(t, e, i, s, n) {
          if (!e) return t.lineTo(i.x, i.y);
          if ("middle" === n) {
            const s = (e.x + i.x) / 2;
            t.lineTo(s, e.y), t.lineTo(s, i.y);
          } else
            ("after" === n) != !!s ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y);
          t.lineTo(i.x, i.y);
        }
        function ge(t, e, i, s) {
          if (!e) return t.lineTo(i.x, i.y);
          t.bezierCurveTo(
            s ? e.cp1x : e.cp2x,
            s ? e.cp1y : e.cp2y,
            s ? i.cp2x : i.cp1x,
            s ? i.cp2y : i.cp1y,
            i.x,
            i.y
          );
        }
        function pe(t, e, i, s, n, o = {}) {
          const a = z(e) ? e : [e],
            r = o.strokeWidth > 0 && "" !== o.strokeColor;
          let l, h;
          for (
            t.save(),
              t.font = n.string,
              (function (t, e) {
                e.translation &&
                  t.translate(e.translation[0], e.translation[1]),
                  I(e.rotation) || t.rotate(e.rotation),
                  e.color && (t.fillStyle = e.color),
                  e.textAlign && (t.textAlign = e.textAlign),
                  e.textBaseline && (t.textBaseline = e.textBaseline);
              })(t, o),
              l = 0;
            l < a.length;
            ++l
          )
            (h = a[l]),
              o.backdrop && be(t, o.backdrop),
              r &&
                (o.strokeColor && (t.strokeStyle = o.strokeColor),
                I(o.strokeWidth) || (t.lineWidth = o.strokeWidth),
                t.strokeText(h, i, s, o.maxWidth)),
              t.fillText(h, i, s, o.maxWidth),
              me(t, i, s, h, o),
              (s += n.lineHeight);
          t.restore();
        }
        function me(t, e, i, s, n) {
          if (n.strikethrough || n.underline) {
            const o = t.measureText(s),
              a = e - o.actualBoundingBoxLeft,
              r = e + o.actualBoundingBoxRight,
              l = i - o.actualBoundingBoxAscent,
              h = i + o.actualBoundingBoxDescent,
              c = n.strikethrough ? (l + h) / 2 : h;
            (t.strokeStyle = t.fillStyle),
              t.beginPath(),
              (t.lineWidth = n.decorationWidth || 2),
              t.moveTo(a, c),
              t.lineTo(r, c),
              t.stroke();
          }
        }
        function be(t, e) {
          const i = t.fillStyle;
          (t.fillStyle = e.color),
            t.fillRect(e.left, e.top, e.width, e.height),
            (t.fillStyle = i);
        }
        function xe(t, e) {
          const { x: i, y: s, w: n, h: o, radius: a } = e;
          t.arc(i + a.topLeft, s + a.topLeft, a.topLeft, -lt, st, !0),
            t.lineTo(i, s + o - a.bottomLeft),
            t.arc(
              i + a.bottomLeft,
              s + o - a.bottomLeft,
              a.bottomLeft,
              st,
              lt,
              !0
            ),
            t.lineTo(i + n - a.bottomRight, s + o),
            t.arc(
              i + n - a.bottomRight,
              s + o - a.bottomRight,
              a.bottomRight,
              lt,
              0,
              !0
            ),
            t.lineTo(i + n, s + a.topRight),
            t.arc(i + n - a.topRight, s + a.topRight, a.topRight, 0, -lt, !0),
            t.lineTo(i + a.topLeft, s);
        }
        const _e = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
          ye =
            /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
        function ve(t, e) {
          const i = ("" + t).match(_e);
          if (!i || "normal" === i[1]) return 1.2 * e;
          switch (((t = +i[2]), i[3])) {
            case "px":
              return t;
            case "%":
              t /= 100;
          }
          return e * t;
        }
        function Me(t, e) {
          const i = {},
            s = F(e),
            n = s ? Object.keys(e) : e,
            o = F(t) ? (s ? (i) => B(t[i], t[e[i]]) : (e) => t[e]) : () => t;
          for (const t of n) i[t] = +o(t) || 0;
          return i;
        }
        function we(t) {
          return Me(t, { top: "y", right: "x", bottom: "y", left: "x" });
        }
        function ke(t) {
          return Me(t, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
        }
        function Se(t) {
          const e = we(t);
          return (e.width = e.left + e.right), (e.height = e.top + e.bottom), e;
        }
        function Pe(t, e) {
          (t = t || {}), (e = e || se.font);
          let i = B(t.size, e.size);
          "string" == typeof i && (i = parseInt(i, 10));
          let s = B(t.style, e.style);
          s &&
            !("" + s).match(ye) &&
            (console.warn('Invalid font style specified: "' + s + '"'),
            (s = void 0));
          const n = {
            family: B(t.family, e.family),
            lineHeight: ve(B(t.lineHeight, e.lineHeight), i),
            size: i,
            style: s,
            weight: B(t.weight, e.weight),
            string: "",
          };
          return (
            (n.string = (function (t) {
              return !t || I(t.size) || I(t.family)
                ? null
                : (t.style ? t.style + " " : "") +
                    (t.weight ? t.weight + " " : "") +
                    t.size +
                    "px " +
                    t.family;
            })(n)),
            n
          );
        }
        function Ae(t, e, i, s) {
          let n,
            o,
            a,
            r = !0;
          for (n = 0, o = t.length; n < o; ++n)
            if (
              ((a = t[n]),
              void 0 !== a &&
                (void 0 !== e &&
                  "function" == typeof a &&
                  ((a = a(e)), (r = !1)),
                void 0 !== i && z(a) && ((a = a[i % a.length]), (r = !1)),
                void 0 !== a))
            )
              return s && !r && (s.cacheable = !1), a;
        }
        function De(t, e) {
          return Object.assign(Object.create(t), e);
        }
        function Ce(t, e = [""], i = t, s, n = () => t[0]) {
          tt(s) || (s = Be("_fallback", t));
          const o = {
            [Symbol.toStringTag]: "Object",
            _cacheable: !0,
            _scopes: t,
            _rootScopes: i,
            _fallback: s,
            _getTarget: n,
            override: (n) => Ce([n, ...t], e, i, s),
          };
          return new Proxy(o, {
            deleteProperty: (e, i) => (
              delete e[i], delete e._keys, delete t[0][i], !0
            ),
            get: (i, s) =>
              Re(i, s, () =>
                (function (t, e, i, s) {
                  let n;
                  for (const o of e)
                    if (((n = Be(Ee(o, t), i)), tt(n)))
                      return Te(t, n) ? Ve(i, s, t, n) : n;
                })(s, e, t, i)
              ),
            getOwnPropertyDescriptor: (t, e) =>
              Reflect.getOwnPropertyDescriptor(t._scopes[0], e),
            getPrototypeOf: () => Reflect.getPrototypeOf(t[0]),
            has: (t, e) => Ne(t).includes(e),
            ownKeys: (t) => Ne(t),
            set(t, e, i) {
              const s = t._storage || (t._storage = n());
              return (t[e] = s[e] = i), delete t._keys, !0;
            },
          });
        }
        function Oe(t, e, i, s) {
          const n = {
            _cacheable: !1,
            _proxy: t,
            _context: e,
            _subProxy: i,
            _stack: new Set(),
            _descriptors: Le(t, s),
            setContext: (e) => Oe(t, e, i, s),
            override: (n) => Oe(t.override(n), e, i, s),
          };
          return new Proxy(n, {
            deleteProperty: (e, i) => (delete e[i], delete t[i], !0),
            get: (t, e, i) =>
              Re(t, e, () =>
                (function (t, e, i) {
                  const {
                    _proxy: s,
                    _context: n,
                    _subProxy: o,
                    _descriptors: a,
                  } = t;
                  let r = s[e];
                  return (
                    et(r) &&
                      a.isScriptable(e) &&
                      (r = (function (t, e, i, s) {
                        const {
                          _proxy: n,
                          _context: o,
                          _subProxy: a,
                          _stack: r,
                        } = i;
                        if (r.has(t))
                          throw new Error(
                            "Recursion detected: " +
                              Array.from(r).join("->") +
                              "->" +
                              t
                          );
                        return (
                          r.add(t),
                          (e = e(o, a || s)),
                          r.delete(t),
                          Te(t, e) && (e = Ve(n._scopes, n, t, e)),
                          e
                        );
                      })(e, r, t, i)),
                    z(r) &&
                      r.length &&
                      (r = (function (t, e, i, s) {
                        const {
                          _proxy: n,
                          _context: o,
                          _subProxy: a,
                          _descriptors: r,
                        } = i;
                        if (tt(o.index) && s(t)) e = e[o.index % e.length];
                        else if (F(e[0])) {
                          const i = e,
                            s = n._scopes.filter((t) => t !== i);
                          e = [];
                          for (const l of i) {
                            const i = Ve(s, n, t, l);
                            e.push(Oe(i, o, a && a[t], r));
                          }
                        }
                        return e;
                      })(e, r, t, a.isIndexable)),
                    Te(e, r) && (r = Oe(r, n, o && o[e], a)),
                    r
                  );
                })(t, e, i)
              ),
            getOwnPropertyDescriptor: (e, i) =>
              e._descriptors.allKeys
                ? Reflect.has(t, i)
                  ? { enumerable: !0, configurable: !0 }
                  : void 0
                : Reflect.getOwnPropertyDescriptor(t, i),
            getPrototypeOf: () => Reflect.getPrototypeOf(t),
            has: (e, i) => Reflect.has(t, i),
            ownKeys: () => Reflect.ownKeys(t),
            set: (e, i, s) => ((t[i] = s), delete e[i], !0),
          });
        }
        function Le(t, e = { scriptable: !0, indexable: !0 }) {
          const {
            _scriptable: i = e.scriptable,
            _indexable: s = e.indexable,
            _allKeys: n = e.allKeys,
          } = t;
          return {
            allKeys: n,
            scriptable: i,
            indexable: s,
            isScriptable: et(i) ? i : () => i,
            isIndexable: et(s) ? s : () => s,
          };
        }
        const Ee = (t, e) => (t ? t + J(e) : e),
          Te = (t, e) =>
            F(e) &&
            "adapters" !== t &&
            (null === Object.getPrototypeOf(e) || e.constructor === Object);
        function Re(t, e, i) {
          if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
          const s = i();
          return (t[e] = s), s;
        }
        function Ie(t, e, i) {
          return et(t) ? t(e, i) : t;
        }
        const ze = (t, e) =>
          !0 === t ? e : "string" == typeof t ? Q(e, t) : void 0;
        function Fe(t, e, i, s, n) {
          for (const o of e) {
            const e = ze(i, o);
            if (e) {
              t.add(e);
              const o = Ie(e._fallback, i, n);
              if (tt(o) && o !== i && o !== s) return o;
            } else if (!1 === e && tt(s) && i !== s) return null;
          }
          return !1;
        }
        function Ve(t, e, i, s) {
          const n = e._rootScopes,
            o = Ie(e._fallback, i, s),
            a = [...t, ...n],
            r = new Set();
          r.add(s);
          let l = je(r, a, i, o || i, s);
          return (
            null !== l &&
            (!tt(o) || o === i || ((l = je(r, a, o, l, s)), null !== l)) &&
            Ce(Array.from(r), [""], n, o, () =>
              (function (t, e, i) {
                const s = t._getTarget();
                e in s || (s[e] = {});
                const n = s[e];
                return z(n) && F(i) ? i : n || {};
              })(e, i, s)
            )
          );
        }
        function je(t, e, i, s, n) {
          for (; i; ) i = Fe(t, e, i, s, n);
          return i;
        }
        function Be(t, e) {
          for (const i of e) {
            if (!i) continue;
            const e = i[t];
            if (tt(e)) return e;
          }
        }
        function Ne(t) {
          let e = t._keys;
          return (
            e ||
              (e = t._keys =
                (function (t) {
                  const e = new Set();
                  for (const i of t)
                    for (const t of Object.keys(i).filter(
                      (t) => !t.startsWith("_")
                    ))
                      e.add(t);
                  return Array.from(e);
                })(t._scopes)),
            e
          );
        }
        function He(t, e, i, s) {
          const { iScale: n } = t,
            { key: o = "r" } = this._parsing,
            a = new Array(s);
          let r, l, h, c;
          for (r = 0, l = s; r < l; ++r)
            (h = r + i), (c = e[h]), (a[r] = { r: n.parse(Q(c, o), h) });
          return a;
        }
        const We = Number.EPSILON || 1e-14,
          $e = (t, e) => e < t.length && !t[e].skip && t[e],
          Ye = (t) => ("x" === t ? "y" : "x");
        function qe(t, e, i, s) {
          const n = t.skip ? e : t,
            o = e,
            a = i.skip ? e : i,
            r = vt(o, n),
            l = vt(a, o);
          let h = r / (r + l),
            c = l / (r + l);
          (h = isNaN(h) ? 0 : h), (c = isNaN(c) ? 0 : c);
          const d = s * h,
            u = s * c;
          return {
            previous: { x: o.x - d * (a.x - n.x), y: o.y - d * (a.y - n.y) },
            next: { x: o.x + u * (a.x - n.x), y: o.y + u * (a.y - n.y) },
          };
        }
        function Ue(t, e, i) {
          return Math.max(Math.min(t, i), e);
        }
        function Xe(t, e, i, s, n) {
          let o, a, r, l;
          if (
            (e.spanGaps && (t = t.filter((t) => !t.skip)),
            "monotone" === e.cubicInterpolationMode)
          )
            !(function (t, e = "x") {
              const i = Ye(e),
                s = t.length,
                n = Array(s).fill(0),
                o = Array(s);
              let a,
                r,
                l,
                h = $e(t, 0);
              for (a = 0; a < s; ++a)
                if (((r = l), (l = h), (h = $e(t, a + 1)), l)) {
                  if (h) {
                    const t = h[e] - l[e];
                    n[a] = 0 !== t ? (h[i] - l[i]) / t : 0;
                  }
                  o[a] = r
                    ? h
                      ? ut(n[a - 1]) !== ut(n[a])
                        ? 0
                        : (n[a - 1] + n[a]) / 2
                      : n[a - 1]
                    : n[a];
                }
              !(function (t, e, i) {
                const s = t.length;
                let n,
                  o,
                  a,
                  r,
                  l,
                  h = $e(t, 0);
                for (let c = 0; c < s - 1; ++c)
                  (l = h),
                    (h = $e(t, c + 1)),
                    l &&
                      h &&
                      (ft(e[c], 0, We)
                        ? (i[c] = i[c + 1] = 0)
                        : ((n = i[c] / e[c]),
                          (o = i[c + 1] / e[c]),
                          (r = Math.pow(n, 2) + Math.pow(o, 2)),
                          r <= 9 ||
                            ((a = 3 / Math.sqrt(r)),
                            (i[c] = n * a * e[c]),
                            (i[c + 1] = o * a * e[c]))));
              })(t, n, o),
                (function (t, e, i = "x") {
                  const s = Ye(i),
                    n = t.length;
                  let o,
                    a,
                    r,
                    l = $e(t, 0);
                  for (let h = 0; h < n; ++h) {
                    if (((a = r), (r = l), (l = $e(t, h + 1)), !r)) continue;
                    const n = r[i],
                      c = r[s];
                    a &&
                      ((o = (n - a[i]) / 3),
                      (r[`cp1${i}`] = n - o),
                      (r[`cp1${s}`] = c - o * e[h])),
                      l &&
                        ((o = (l[i] - n) / 3),
                        (r[`cp2${i}`] = n + o),
                        (r[`cp2${s}`] = c + o * e[h]));
                  }
                })(t, o, e);
            })(t, n);
          else {
            let i = s ? t[t.length - 1] : t[0];
            for (o = 0, a = t.length; o < a; ++o)
              (r = t[o]),
                (l = qe(
                  i,
                  r,
                  t[Math.min(o + 1, a - (s ? 0 : 1)) % a],
                  e.tension
                )),
                (r.cp1x = l.previous.x),
                (r.cp1y = l.previous.y),
                (r.cp2x = l.next.x),
                (r.cp2y = l.next.y),
                (i = r);
          }
          e.capBezierPoints &&
            (function (t, e) {
              let i,
                s,
                n,
                o,
                a,
                r = ce(t[0], e);
              for (i = 0, s = t.length; i < s; ++i)
                (a = o),
                  (o = r),
                  (r = i < s - 1 && ce(t[i + 1], e)),
                  o &&
                    ((n = t[i]),
                    a &&
                      ((n.cp1x = Ue(n.cp1x, e.left, e.right)),
                      (n.cp1y = Ue(n.cp1y, e.top, e.bottom))),
                    r &&
                      ((n.cp2x = Ue(n.cp2x, e.left, e.right)),
                      (n.cp2y = Ue(n.cp2y, e.top, e.bottom))));
            })(t, i);
        }
        function Ke() {
          return "undefined" != typeof window && "undefined" != typeof document;
        }
        function Ze(t) {
          let e = t.parentNode;
          return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e;
        }
        function Ge(t, e, i) {
          let s;
          return (
            "string" == typeof t
              ? ((s = parseInt(t, 10)),
                -1 !== t.indexOf("%") && (s = (s / 100) * e.parentNode[i]))
              : (s = t),
            s
          );
        }
        const Qe = (t) => t.ownerDocument.defaultView.getComputedStyle(t, null),
          Je = ["top", "right", "bottom", "left"];
        function ti(t, e, i) {
          const s = {};
          i = i ? "-" + i : "";
          for (let n = 0; n < 4; n++) {
            const o = Je[n];
            s[o] = parseFloat(t[e + "-" + o + i]) || 0;
          }
          return (s.width = s.left + s.right), (s.height = s.top + s.bottom), s;
        }
        function ei(t, e) {
          if ("native" in t) return t;
          const { canvas: i, currentDevicePixelRatio: s } = e,
            n = Qe(i),
            o = "border-box" === n.boxSizing,
            a = ti(n, "padding"),
            r = ti(n, "border", "width"),
            {
              x: l,
              y: h,
              box: c,
            } = (function (t, e) {
              const i = t.touches,
                s = i && i.length ? i[0] : t,
                { offsetX: n, offsetY: o } = s;
              let a,
                r,
                l = !1;
              if (
                ((t, e, i) => (t > 0 || e > 0) && (!i || !i.shadowRoot))(
                  n,
                  o,
                  t.target
                )
              )
                (a = n), (r = o);
              else {
                const t = e.getBoundingClientRect();
                (a = s.clientX - t.left), (r = s.clientY - t.top), (l = !0);
              }
              return { x: a, y: r, box: l };
            })(t, i),
            d = a.left + (c && r.left),
            u = a.top + (c && r.top);
          let { width: f, height: g } = e;
          return (
            o && ((f -= a.width + r.width), (g -= a.height + r.height)),
            {
              x: Math.round((((l - d) / f) * i.width) / s),
              y: Math.round((((h - u) / g) * i.height) / s),
            }
          );
        }
        const ii = (t) => Math.round(10 * t) / 10;
        function si(t, e, i) {
          const s = e || 1,
            n = Math.floor(t.height * s),
            o = Math.floor(t.width * s);
          (t.height = Math.floor(t.height)), (t.width = Math.floor(t.width));
          const a = t.canvas;
          return (
            a.style &&
              (i || (!a.style.height && !a.style.width)) &&
              ((a.style.height = `${t.height}px`),
              (a.style.width = `${t.width}px`)),
            (t.currentDevicePixelRatio !== s ||
              a.height !== n ||
              a.width !== o) &&
              ((t.currentDevicePixelRatio = s),
              (a.height = n),
              (a.width = o),
              t.ctx.setTransform(s, 0, 0, s, 0, 0),
              !0)
          );
        }
        const ni = (function () {
          let t = !1;
          try {
            const e = {
              get passive() {
                return (t = !0), !1;
              },
            };
            window.addEventListener("test", null, e),
              window.removeEventListener("test", null, e);
          } catch (t) {}
          return t;
        })();
        function oi(t, e) {
          const i = (function (t, e) {
              return Qe(t).getPropertyValue(e);
            })(t, e),
            s = i && i.match(/^(\d+)(\.\d+)?px$/);
          return s ? +s[1] : void 0;
        }
        function ai(t, e, i, s) {
          return { x: t.x + i * (e.x - t.x), y: t.y + i * (e.y - t.y) };
        }
        function ri(t, e, i, s) {
          return {
            x: t.x + i * (e.x - t.x),
            y:
              "middle" === s
                ? i < 0.5
                  ? t.y
                  : e.y
                : "after" === s
                ? i < 1
                  ? t.y
                  : e.y
                : i > 0
                ? e.y
                : t.y,
          };
        }
        function li(t, e, i, s) {
          const n = { x: t.cp2x, y: t.cp2y },
            o = { x: e.cp1x, y: e.cp1y },
            a = ai(t, n, i),
            r = ai(n, o, i),
            l = ai(o, e, i),
            h = ai(a, r, i),
            c = ai(r, l, i);
          return ai(h, c, i);
        }
        function hi(t, e, i) {
          return t
            ? (function (t, e) {
                return {
                  x: (i) => t + t + e - i,
                  setWidth(t) {
                    e = t;
                  },
                  textAlign: (t) =>
                    "center" === t ? t : "right" === t ? "left" : "right",
                  xPlus: (t, e) => t - e,
                  leftForLtr: (t, e) => t - e,
                };
              })(e, i)
            : {
                x: (t) => t,
                setWidth(t) {},
                textAlign: (t) => t,
                xPlus: (t, e) => t + e,
                leftForLtr: (t, e) => t,
              };
        }
        function ci(t, e) {
          let i, s;
          ("ltr" !== e && "rtl" !== e) ||
            ((i = t.canvas.style),
            (s = [
              i.getPropertyValue("direction"),
              i.getPropertyPriority("direction"),
            ]),
            i.setProperty("direction", e, "important"),
            (t.prevTextDirection = s));
        }
        function di(t, e) {
          void 0 !== e &&
            (delete t.prevTextDirection,
            t.canvas.style.setProperty("direction", e[0], e[1]));
        }
        function ui(t) {
          return "angle" === t
            ? { between: kt, compare: Mt, normalize: wt }
            : { between: Pt, compare: (t, e) => t - e, normalize: (t) => t };
        }
        function fi({ start: t, end: e, count: i, loop: s, style: n }) {
          return {
            start: t % i,
            end: e % i,
            loop: s && (e - t + 1) % i == 0,
            style: n,
          };
        }
        function gi(t, e, i) {
          if (!i) return [t];
          const { property: s, start: n, end: o } = i,
            a = e.length,
            { compare: r, between: l, normalize: h } = ui(s),
            {
              start: c,
              end: d,
              loop: u,
              style: f,
            } = (function (t, e, i) {
              const { property: s, start: n, end: o } = i,
                { between: a, normalize: r } = ui(s),
                l = e.length;
              let h,
                c,
                { start: d, end: u, loop: f } = t;
              if (f) {
                for (
                  d += l, u += l, h = 0, c = l;
                  h < c && a(r(e[d % l][s]), n, o);
                  ++h
                )
                  d--, u--;
                (d %= l), (u %= l);
              }
              return (
                u < d && (u += l), { start: d, end: u, loop: f, style: t.style }
              );
            })(t, e, i),
            g = [];
          let p,
            m,
            b,
            x = !1,
            _ = null;
          for (let t = c, i = c; t <= d; ++t)
            (m = e[t % a]),
              m.skip ||
                ((p = h(m[s])),
                p !== b &&
                  ((x = l(p, n, o)),
                  null === _ &&
                    (x || (l(n, b, p) && 0 !== r(n, b))) &&
                    (_ = 0 === r(p, n) ? t : i),
                  null !== _ &&
                    (!x || 0 === r(o, p) || l(o, b, p)) &&
                    (g.push(
                      fi({ start: _, end: t, loop: u, count: a, style: f })
                    ),
                    (_ = null)),
                  (i = t),
                  (b = p)));
          return (
            null !== _ &&
              g.push(fi({ start: _, end: d, loop: u, count: a, style: f })),
            g
          );
        }
        function pi(t, e) {
          const i = [],
            s = t.segments;
          for (let n = 0; n < s.length; n++) {
            const o = gi(s[n], t.points, e);
            o.length && i.push(...o);
          }
          return i;
        }
        function mi(t) {
          return {
            backgroundColor: t.backgroundColor,
            borderCapStyle: t.borderCapStyle,
            borderDash: t.borderDash,
            borderDashOffset: t.borderDashOffset,
            borderJoinStyle: t.borderJoinStyle,
            borderWidth: t.borderWidth,
            borderColor: t.borderColor,
          };
        }
        function bi(t, e) {
          return e && JSON.stringify(t) !== JSON.stringify(e);
        }
        class xi {
          constructor() {
            (this._request = null),
              (this._charts = new Map()),
              (this._running = !1),
              (this._lastDate = void 0);
          }
          _notify(t, e, i, s) {
            const n = e.listeners[s],
              o = e.duration;
            n.forEach((s) =>
              s({
                chart: t,
                initial: e.initial,
                numSteps: o,
                currentStep: Math.min(i - e.start, o),
              })
            );
          }
          _refresh() {
            this._request ||
              ((this._running = !0),
              (this._request = Tt.call(window, () => {
                this._update(),
                  (this._request = null),
                  this._running && this._refresh();
              })));
          }
          _update(t = Date.now()) {
            let e = 0;
            this._charts.forEach((i, s) => {
              if (!i.running || !i.items.length) return;
              const n = i.items;
              let o,
                a = n.length - 1,
                r = !1;
              for (; a >= 0; --a)
                (o = n[a]),
                  o._active
                    ? (o._total > i.duration && (i.duration = o._total),
                      o.tick(t),
                      (r = !0))
                    : ((n[a] = n[n.length - 1]), n.pop());
              r && (s.draw(), this._notify(s, i, t, "progress")),
                n.length ||
                  ((i.running = !1),
                  this._notify(s, i, t, "complete"),
                  (i.initial = !1)),
                (e += n.length);
            }),
              (this._lastDate = t),
              0 === e && (this._running = !1);
          }
          _getAnims(t) {
            const e = this._charts;
            let i = e.get(t);
            return (
              i ||
                ((i = {
                  running: !1,
                  initial: !0,
                  items: [],
                  listeners: { complete: [], progress: [] },
                }),
                e.set(t, i)),
              i
            );
          }
          listen(t, e, i) {
            this._getAnims(t).listeners[e].push(i);
          }
          add(t, e) {
            e && e.length && this._getAnims(t).items.push(...e);
          }
          has(t) {
            return this._getAnims(t).items.length > 0;
          }
          start(t) {
            const e = this._charts.get(t);
            e &&
              ((e.running = !0),
              (e.start = Date.now()),
              (e.duration = e.items.reduce(
                (t, e) => Math.max(t, e._duration),
                0
              )),
              this._refresh());
          }
          running(t) {
            if (!this._running) return !1;
            const e = this._charts.get(t);
            return !!(e && e.running && e.items.length);
          }
          stop(t) {
            const e = this._charts.get(t);
            if (!e || !e.items.length) return;
            const i = e.items;
            let s = i.length - 1;
            for (; s >= 0; --s) i[s].cancel();
            (e.items = []), this._notify(t, e, Date.now(), "complete");
          }
          remove(t) {
            return this._charts.delete(t);
          }
        }
        var _i = new xi();
        const yi = "transparent",
          vi = {
            boolean: (t, e, i) => (i > 0.5 ? e : t),
            color(t, e, i) {
              const s = $t(t || yi),
                n = s.valid && $t(e || yi);
              return n && n.valid ? n.mix(s, i).hexString() : e;
            },
            number: (t, e, i) => t + (e - t) * i,
          };
        class Mi {
          constructor(t, e, i, s) {
            const n = e[i];
            s = Ae([t.to, s, n, t.from]);
            const o = Ae([t.from, n, s]);
            (this._active = !0),
              (this._fn = t.fn || vi[t.type || typeof o]),
              (this._easing = Ht[t.easing] || Ht.linear),
              (this._start = Math.floor(Date.now() + (t.delay || 0))),
              (this._duration = this._total = Math.floor(t.duration)),
              (this._loop = !!t.loop),
              (this._target = e),
              (this._prop = i),
              (this._from = o),
              (this._to = s),
              (this._promises = void 0);
          }
          active() {
            return this._active;
          }
          update(t, e, i) {
            if (this._active) {
              this._notify(!1);
              const s = this._target[this._prop],
                n = i - this._start,
                o = this._duration - n;
              (this._start = i),
                (this._duration = Math.floor(Math.max(o, t.duration))),
                (this._total += n),
                (this._loop = !!t.loop),
                (this._to = Ae([t.to, e, s, t.from])),
                (this._from = Ae([t.from, s, e]));
            }
          }
          cancel() {
            this._active &&
              (this.tick(Date.now()), (this._active = !1), this._notify(!1));
          }
          tick(t) {
            const e = t - this._start,
              i = this._duration,
              s = this._prop,
              n = this._from,
              o = this._loop,
              a = this._to;
            let r;
            if (((this._active = n !== a && (o || e < i)), !this._active))
              return (this._target[s] = a), void this._notify(!0);
            e < 0
              ? (this._target[s] = n)
              : ((r = (e / i) % 2),
                (r = o && r > 1 ? 2 - r : r),
                (r = this._easing(Math.min(1, Math.max(0, r)))),
                (this._target[s] = this._fn(n, a, r)));
          }
          wait() {
            const t = this._promises || (this._promises = []);
            return new Promise((e, i) => {
              t.push({ res: e, rej: i });
            });
          }
          _notify(t) {
            const e = t ? "res" : "rej",
              i = this._promises || [];
            for (let t = 0; t < i.length; t++) i[t][e]();
          }
        }
        class wi {
          constructor(t, e) {
            (this._chart = t),
              (this._properties = new Map()),
              this.configure(e);
          }
          configure(t) {
            if (!F(t)) return;
            const e = Object.keys(se.animation),
              i = this._properties;
            Object.getOwnPropertyNames(t).forEach((s) => {
              const n = t[s];
              if (!F(n)) return;
              const o = {};
              for (const t of e) o[t] = n[t];
              ((z(n.properties) && n.properties) || [s]).forEach((t) => {
                (t !== s && i.has(t)) || i.set(t, o);
              });
            });
          }
          _animateOptions(t, e) {
            const i = e.options,
              s = (function (t, e) {
                if (!e) return;
                let i = t.options;
                if (i)
                  return (
                    i.$shared &&
                      (t.options = i =
                        Object.assign({}, i, { $shared: !1, $animations: {} })),
                    i
                  );
                t.options = e;
              })(t, i);
            if (!s) return [];
            const n = this._createAnimations(s, i);
            return (
              i.$shared &&
                (function (t, e) {
                  const i = [],
                    s = Object.keys(e);
                  for (let e = 0; e < s.length; e++) {
                    const n = t[s[e]];
                    n && n.active() && i.push(n.wait());
                  }
                  return Promise.all(i);
                })(t.options.$animations, i).then(
                  () => {
                    t.options = i;
                  },
                  () => {}
                ),
              n
            );
          }
          _createAnimations(t, e) {
            const i = this._properties,
              s = [],
              n = t.$animations || (t.$animations = {}),
              o = Object.keys(e),
              a = Date.now();
            let r;
            for (r = o.length - 1; r >= 0; --r) {
              const l = o[r];
              if ("$" === l.charAt(0)) continue;
              if ("options" === l) {
                s.push(...this._animateOptions(t, e));
                continue;
              }
              const h = e[l];
              let c = n[l];
              const d = i.get(l);
              if (c) {
                if (d && c.active()) {
                  c.update(d, h, a);
                  continue;
                }
                c.cancel();
              }
              d && d.duration
                ? ((n[l] = c = new Mi(d, t, l, h)), s.push(c))
                : (t[l] = h);
            }
            return s;
          }
          update(t, e) {
            if (0 === this._properties.size) return void Object.assign(t, e);
            const i = this._createAnimations(t, e);
            return i.length ? (_i.add(this._chart, i), !0) : void 0;
          }
        }
        function ki(t, e) {
          const i = (t && t.options) || {},
            s = i.reverse,
            n = void 0 === i.min ? e : 0,
            o = void 0 === i.max ? e : 0;
          return { start: s ? o : n, end: s ? n : o };
        }
        function Si(t, e) {
          const i = [],
            s = t._getSortedDatasetMetas(e);
          let n, o;
          for (n = 0, o = s.length; n < o; ++n) i.push(s[n].index);
          return i;
        }
        function Pi(t, e, i, s = {}) {
          const n = t.keys,
            o = "single" === s.mode;
          let a, r, l, h;
          if (null !== e) {
            for (a = 0, r = n.length; a < r; ++a) {
              if (((l = +n[a]), l === i)) {
                if (s.all) continue;
                break;
              }
              (h = t.values[l]),
                V(h) && (o || 0 === e || ut(e) === ut(h)) && (e += h);
            }
            return e;
          }
        }
        function Ai(t, e) {
          const i = t && t.options.stacked;
          return i || (void 0 === i && void 0 !== e.stack);
        }
        function Di(t, e, i) {
          const s = t[e] || (t[e] = {});
          return s[i] || (s[i] = {});
        }
        function Ci(t, e, i, s) {
          for (const n of e.getMatchingVisibleMetas(s).reverse()) {
            const e = t[n.index];
            if ((i && e > 0) || (!i && e < 0)) return n.index;
          }
          return null;
        }
        function Oi(t, e) {
          const { chart: i, _cachedMeta: s } = t,
            n = i._stacks || (i._stacks = {}),
            { iScale: o, vScale: a, index: r } = s,
            l = o.axis,
            h = a.axis,
            c = (function (t, e, i) {
              return `${t.id}.${e.id}.${i.stack || i.type}`;
            })(o, a, s),
            d = e.length;
          let u;
          for (let t = 0; t < d; ++t) {
            const i = e[t],
              { [l]: o, [h]: d } = i;
            (u = (i._stacks || (i._stacks = {}))[h] = Di(n, c, o)),
              (u[r] = d),
              (u._top = Ci(u, a, !0, s.type)),
              (u._bottom = Ci(u, a, !1, s.type)),
              ((u._visualValues || (u._visualValues = {}))[r] = d);
          }
        }
        function Li(t, e) {
          const i = t.scales;
          return Object.keys(i)
            .filter((t) => i[t].axis === e)
            .shift();
        }
        function Ei(t, e) {
          const i = t.controller.index,
            s = t.vScale && t.vScale.axis;
          if (s) {
            e = e || t._parsed;
            for (const t of e) {
              const e = t._stacks;
              if (!e || void 0 === e[s] || void 0 === e[s][i]) return;
              delete e[s][i],
                void 0 !== e[s]._visualValues &&
                  void 0 !== e[s]._visualValues[i] &&
                  delete e[s]._visualValues[i];
            }
          }
        }
        const Ti = (t) => "reset" === t || "none" === t,
          Ri = (t, e) => (e ? t : Object.assign({}, t));
        class Ii {
          static defaults = {};
          static datasetElementType = null;
          static dataElementType = null;
          constructor(t, e) {
            (this.chart = t),
              (this._ctx = t.ctx),
              (this.index = e),
              (this._cachedDataOpts = {}),
              (this._cachedMeta = this.getMeta()),
              (this._type = this._cachedMeta.type),
              (this.options = void 0),
              (this._parsing = !1),
              (this._data = void 0),
              (this._objectData = void 0),
              (this._sharedOptions = void 0),
              (this._drawStart = void 0),
              (this._drawCount = void 0),
              (this.enableOptionSharing = !1),
              (this.supportsDecimation = !1),
              (this.$context = void 0),
              (this._syncList = []),
              (this.datasetElementType = new.target.datasetElementType),
              (this.dataElementType = new.target.dataElementType),
              this.initialize();
          }
          initialize() {
            const t = this._cachedMeta;
            this.configure(),
              this.linkScales(),
              (t._stacked = Ai(t.vScale, t)),
              this.addElements(),
              this.options.fill &&
                !this.chart.isPluginEnabled("filler") &&
                console.warn(
                  "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options"
                );
          }
          updateIndex(t) {
            this.index !== t && Ei(this._cachedMeta), (this.index = t);
          }
          linkScales() {
            const t = this.chart,
              e = this._cachedMeta,
              i = this.getDataset(),
              s = (t, e, i, s) => ("x" === t ? e : "r" === t ? s : i),
              n = (e.xAxisID = B(i.xAxisID, Li(t, "x"))),
              o = (e.yAxisID = B(i.yAxisID, Li(t, "y"))),
              a = (e.rAxisID = B(i.rAxisID, Li(t, "r"))),
              r = e.indexAxis,
              l = (e.iAxisID = s(r, n, o, a)),
              h = (e.vAxisID = s(r, o, n, a));
            (e.xScale = this.getScaleForId(n)),
              (e.yScale = this.getScaleForId(o)),
              (e.rScale = this.getScaleForId(a)),
              (e.iScale = this.getScaleForId(l)),
              (e.vScale = this.getScaleForId(h));
          }
          getDataset() {
            return this.chart.data.datasets[this.index];
          }
          getMeta() {
            return this.chart.getDatasetMeta(this.index);
          }
          getScaleForId(t) {
            return this.chart.scales[t];
          }
          _getOtherScale(t) {
            const e = this._cachedMeta;
            return t === e.iScale ? e.vScale : e.iScale;
          }
          reset() {
            this._update("reset");
          }
          _destroy() {
            const t = this._cachedMeta;
            this._data && Lt(this._data, this), t._stacked && Ei(t);
          }
          _dataCheck() {
            const t = this.getDataset(),
              e = t.data || (t.data = []),
              i = this._data;
            if (F(e))
              this._data = (function (t) {
                const e = Object.keys(t),
                  i = new Array(e.length);
                let s, n, o;
                for (s = 0, n = e.length; s < n; ++s)
                  (o = e[s]), (i[s] = { x: o, y: t[o] });
                return i;
              })(e);
            else if (i !== e) {
              if (i) {
                Lt(i, this);
                const t = this._cachedMeta;
                Ei(t), (t._parsed = []);
              }
              e &&
                Object.isExtensible(e) &&
                (this,
                (s = e)._chartjs
                  ? s._chartjs.listeners.push(this)
                  : (Object.defineProperty(s, "_chartjs", {
                      configurable: !0,
                      enumerable: !1,
                      value: { listeners: [this] },
                    }),
                    Ot.forEach((t) => {
                      const e = "_onData" + J(t),
                        i = s[t];
                      Object.defineProperty(s, t, {
                        configurable: !0,
                        enumerable: !1,
                        value(...t) {
                          const n = i.apply(this, t);
                          return (
                            s._chartjs.listeners.forEach((i) => {
                              "function" == typeof i[e] && i[e](...t);
                            }),
                            n
                          );
                        },
                      });
                    }))),
                (this._syncList = []),
                (this._data = e);
            }
            var s;
          }
          addElements() {
            const t = this._cachedMeta;
            this._dataCheck(),
              this.datasetElementType &&
                (t.dataset = new this.datasetElementType());
          }
          buildOrUpdateElements(t) {
            const e = this._cachedMeta,
              i = this.getDataset();
            let s = !1;
            this._dataCheck();
            const n = e._stacked;
            (e._stacked = Ai(e.vScale, e)),
              e.stack !== i.stack && ((s = !0), Ei(e), (e.stack = i.stack)),
              this._resyncElements(t),
              (s || n !== e._stacked) && Oi(this, e._parsed);
          }
          configure() {
            const t = this.chart.config,
              e = t.datasetScopeKeys(this._type),
              i = t.getOptionScopes(this.getDataset(), e, !0);
            (this.options = t.createResolver(i, this.getContext())),
              (this._parsing = this.options.parsing),
              (this._cachedDataOpts = {});
          }
          parse(t, e) {
            const { _cachedMeta: i, _data: s } = this,
              { iScale: n, _stacked: o } = i,
              a = n.axis;
            let r,
              l,
              h,
              c = (0 === t && e === s.length) || i._sorted,
              d = t > 0 && i._parsed[t - 1];
            if (!1 === this._parsing)
              (i._parsed = s), (i._sorted = !0), (h = s);
            else {
              h = z(s[t])
                ? this.parseArrayData(i, s, t, e)
                : F(s[t])
                ? this.parseObjectData(i, s, t, e)
                : this.parsePrimitiveData(i, s, t, e);
              const n = () => null === l[a] || (d && l[a] < d[a]);
              for (r = 0; r < e; ++r)
                (i._parsed[r + t] = l = h[r]), c && (n() && (c = !1), (d = l));
              i._sorted = c;
            }
            o && Oi(this, h);
          }
          parsePrimitiveData(t, e, i, s) {
            const { iScale: n, vScale: o } = t,
              a = n.axis,
              r = o.axis,
              l = n.getLabels(),
              h = n === o,
              c = new Array(s);
            let d, u, f;
            for (d = 0, u = s; d < u; ++d)
              (f = d + i),
                (c[d] = { [a]: h || n.parse(l[f], f), [r]: o.parse(e[f], f) });
            return c;
          }
          parseArrayData(t, e, i, s) {
            const { xScale: n, yScale: o } = t,
              a = new Array(s);
            let r, l, h, c;
            for (r = 0, l = s; r < l; ++r)
              (h = r + i),
                (c = e[h]),
                (a[r] = { x: n.parse(c[0], h), y: o.parse(c[1], h) });
            return a;
          }
          parseObjectData(t, e, i, s) {
            const { xScale: n, yScale: o } = t,
              { xAxisKey: a = "x", yAxisKey: r = "y" } = this._parsing,
              l = new Array(s);
            let h, c, d, u;
            for (h = 0, c = s; h < c; ++h)
              (d = h + i),
                (u = e[d]),
                (l[h] = { x: n.parse(Q(u, a), d), y: o.parse(Q(u, r), d) });
            return l;
          }
          getParsed(t) {
            return this._cachedMeta._parsed[t];
          }
          getDataElement(t) {
            return this._cachedMeta.data[t];
          }
          applyStack(t, e, i) {
            const s = this.chart,
              n = this._cachedMeta,
              o = e[t.axis];
            return Pi(
              { keys: Si(s, !0), values: e._stacks[t.axis]._visualValues },
              o,
              n.index,
              { mode: i }
            );
          }
          updateRangeFromParsed(t, e, i, s) {
            const n = i[e.axis];
            let o = null === n ? NaN : n;
            const a = s && i._stacks[e.axis];
            s && a && ((s.values = a), (o = Pi(s, n, this._cachedMeta.index))),
              (t.min = Math.min(t.min, o)),
              (t.max = Math.max(t.max, o));
          }
          getMinMax(t, e) {
            const i = this._cachedMeta,
              s = i._parsed,
              n = i._sorted && t === i.iScale,
              o = s.length,
              a = this._getOtherScale(t),
              r = ((t, e, i) =>
                t &&
                !e.hidden &&
                e._stacked && { keys: Si(i, !0), values: null })(
                e,
                i,
                this.chart
              ),
              l = {
                min: Number.POSITIVE_INFINITY,
                max: Number.NEGATIVE_INFINITY,
              },
              { min: h, max: c } = (function (t) {
                const {
                  min: e,
                  max: i,
                  minDefined: s,
                  maxDefined: n,
                } = t.getUserBounds();
                return {
                  min: s ? e : Number.NEGATIVE_INFINITY,
                  max: n ? i : Number.POSITIVE_INFINITY,
                };
              })(a);
            let d, u;
            function f() {
              u = s[d];
              const e = u[a.axis];
              return !V(u[t.axis]) || h > e || c < e;
            }
            for (
              d = 0;
              d < o && (f() || (this.updateRangeFromParsed(l, t, u, r), !n));
              ++d
            );
            if (n)
              for (d = o - 1; d >= 0; --d)
                if (!f()) {
                  this.updateRangeFromParsed(l, t, u, r);
                  break;
                }
            return l;
          }
          getAllParsedValues(t) {
            const e = this._cachedMeta._parsed,
              i = [];
            let s, n, o;
            for (s = 0, n = e.length; s < n; ++s)
              (o = e[s][t.axis]), V(o) && i.push(o);
            return i;
          }
          getMaxOverflow() {
            return !1;
          }
          getLabelAndValue(t) {
            const e = this._cachedMeta,
              i = e.iScale,
              s = e.vScale,
              n = this.getParsed(t);
            return {
              label: i ? "" + i.getLabelForValue(n[i.axis]) : "",
              value: s ? "" + s.getLabelForValue(n[s.axis]) : "",
            };
          }
          _update(t) {
            const e = this._cachedMeta;
            this.update(t || "default"),
              (e._clip = (function (t) {
                let e, i, s, n;
                return (
                  F(t)
                    ? ((e = t.top), (i = t.right), (s = t.bottom), (n = t.left))
                    : (e = i = s = n = t),
                  { top: e, right: i, bottom: s, left: n, disabled: !1 === t }
                );
              })(
                B(
                  this.options.clip,
                  (function (t, e, i) {
                    if (!1 === i) return !1;
                    const s = ki(t, i),
                      n = ki(e, i);
                    return {
                      top: n.end,
                      right: s.end,
                      bottom: n.start,
                      left: s.start,
                    };
                  })(e.xScale, e.yScale, this.getMaxOverflow())
                )
              ));
          }
          update(t) {}
          draw() {
            const t = this._ctx,
              e = this.chart,
              i = this._cachedMeta,
              s = i.data || [],
              n = e.chartArea,
              o = [],
              a = this._drawStart || 0,
              r = this._drawCount || s.length - a,
              l = this.options.drawActiveElementsOnTop;
            let h;
            for (
              i.dataset && i.dataset.draw(t, n, a, r), h = a;
              h < a + r;
              ++h
            ) {
              const e = s[h];
              e.hidden || (e.active && l ? o.push(e) : e.draw(t, n));
            }
            for (h = 0; h < o.length; ++h) o[h].draw(t, n);
          }
          getStyle(t, e) {
            const i = e ? "active" : "default";
            return void 0 === t && this._cachedMeta.dataset
              ? this.resolveDatasetElementOptions(i)
              : this.resolveDataElementOptions(t || 0, i);
          }
          getContext(t, e, i) {
            const s = this.getDataset();
            let n;
            if (t >= 0 && t < this._cachedMeta.data.length) {
              const e = this._cachedMeta.data[t];
              (n =
                e.$context ||
                (e.$context = (function (t, e, i) {
                  return De(t, {
                    active: !1,
                    dataIndex: e,
                    parsed: void 0,
                    raw: void 0,
                    element: i,
                    index: e,
                    mode: "default",
                    type: "data",
                  });
                })(this.getContext(), t, e))),
                (n.parsed = this.getParsed(t)),
                (n.raw = s.data[t]),
                (n.index = n.dataIndex = t);
            } else
              (n =
                this.$context ||
                (this.$context = (function (t, e) {
                  return De(t, {
                    active: !1,
                    dataset: void 0,
                    datasetIndex: e,
                    index: e,
                    mode: "default",
                    type: "dataset",
                  });
                })(this.chart.getContext(), this.index))),
                (n.dataset = s),
                (n.index = n.datasetIndex = this.index);
            return (n.active = !!e), (n.mode = i), n;
          }
          resolveDatasetElementOptions(t) {
            return this._resolveElementOptions(this.datasetElementType.id, t);
          }
          resolveDataElementOptions(t, e) {
            return this._resolveElementOptions(this.dataElementType.id, e, t);
          }
          _resolveElementOptions(t, e = "default", i) {
            const s = "active" === e,
              n = this._cachedDataOpts,
              o = t + "-" + e,
              a = n[o],
              r = this.enableOptionSharing && tt(i);
            if (a) return Ri(a, r);
            const l = this.chart.config,
              h = l.datasetElementScopeKeys(this._type, t),
              c = s ? [`${t}Hover`, "hover", t, ""] : [t, ""],
              d = l.getOptionScopes(this.getDataset(), h),
              u = Object.keys(se.elements[t]),
              f = l.resolveNamedOptions(
                d,
                u,
                () => this.getContext(i, s, e),
                c
              );
            return (
              f.$shared && ((f.$shared = r), (n[o] = Object.freeze(Ri(f, r)))),
              f
            );
          }
          _resolveAnimations(t, e, i) {
            const s = this.chart,
              n = this._cachedDataOpts,
              o = `animation-${e}`,
              a = n[o];
            if (a) return a;
            let r;
            if (!1 !== s.options.animation) {
              const s = this.chart.config,
                n = s.datasetAnimationScopeKeys(this._type, e),
                o = s.getOptionScopes(this.getDataset(), n);
              r = s.createResolver(o, this.getContext(t, i, e));
            }
            const l = new wi(s, r && r.animations);
            return r && r._cacheable && (n[o] = Object.freeze(l)), l;
          }
          getSharedOptions(t) {
            if (t.$shared)
              return (
                this._sharedOptions ||
                (this._sharedOptions = Object.assign({}, t))
              );
          }
          includeOptions(t, e) {
            return !e || Ti(t) || this.chart._animationsDisabled;
          }
          _getSharedOptions(t, e) {
            const i = this.resolveDataElementOptions(t, e),
              s = this._sharedOptions,
              n = this.getSharedOptions(i),
              o = this.includeOptions(e, n) || n !== s;
            return (
              this.updateSharedOptions(n, e, i),
              { sharedOptions: n, includeOptions: o }
            );
          }
          updateElement(t, e, i, s) {
            Ti(s)
              ? Object.assign(t, i)
              : this._resolveAnimations(e, s).update(t, i);
          }
          updateSharedOptions(t, e, i) {
            t && !Ti(e) && this._resolveAnimations(void 0, e).update(t, i);
          }
          _setStyle(t, e, i, s) {
            t.active = s;
            const n = this.getStyle(e, s);
            this._resolveAnimations(e, i, s).update(t, {
              options: (!s && this.getSharedOptions(n)) || n,
            });
          }
          removeHoverStyle(t, e, i) {
            this._setStyle(t, i, "active", !1);
          }
          setHoverStyle(t, e, i) {
            this._setStyle(t, i, "active", !0);
          }
          _removeDatasetHoverStyle() {
            const t = this._cachedMeta.dataset;
            t && this._setStyle(t, void 0, "active", !1);
          }
          _setDatasetHoverStyle() {
            const t = this._cachedMeta.dataset;
            t && this._setStyle(t, void 0, "active", !0);
          }
          _resyncElements(t) {
            const e = this._data,
              i = this._cachedMeta.data;
            for (const [t, e, i] of this._syncList) this[t](e, i);
            this._syncList = [];
            const s = i.length,
              n = e.length,
              o = Math.min(n, s);
            o && this.parse(0, o),
              n > s
                ? this._insertElements(s, n - s, t)
                : n < s && this._removeElements(n, s - n);
          }
          _insertElements(t, e, i = !0) {
            const s = this._cachedMeta,
              n = s.data,
              o = t + e;
            let a;
            const r = (t) => {
              for (t.length += e, a = t.length - 1; a >= o; a--)
                t[a] = t[a - e];
            };
            for (r(n), a = t; a < o; ++a) n[a] = new this.dataElementType();
            this._parsing && r(s._parsed),
              this.parse(t, e),
              i && this.updateElements(n, t, e, "reset");
          }
          updateElements(t, e, i, s) {}
          _removeElements(t, e) {
            const i = this._cachedMeta;
            if (this._parsing) {
              const s = i._parsed.splice(t, e);
              i._stacked && Ei(i, s);
            }
            i.data.splice(t, e);
          }
          _sync(t) {
            if (this._parsing) this._syncList.push(t);
            else {
              const [e, i, s] = t;
              this[e](i, s);
            }
            this.chart._dataChanges.push([this.index, ...t]);
          }
          _onDataPush() {
            const t = arguments.length;
            this._sync([
              "_insertElements",
              this.getDataset().data.length - t,
              t,
            ]);
          }
          _onDataPop() {
            this._sync([
              "_removeElements",
              this._cachedMeta.data.length - 1,
              1,
            ]);
          }
          _onDataShift() {
            this._sync(["_removeElements", 0, 1]);
          }
          _onDataSplice(t, e) {
            e && this._sync(["_removeElements", t, e]);
            const i = arguments.length - 2;
            i && this._sync(["_insertElements", t, i]);
          }
          _onDataUnshift() {
            this._sync(["_insertElements", 0, arguments.length]);
          }
        }
        function zi(t) {
          const e = t.iScale,
            i = (function (t, e) {
              if (!t._cache.$bar) {
                const i = t.getMatchingVisibleMetas(e);
                let s = [];
                for (let e = 0, n = i.length; e < n; e++)
                  s = s.concat(i[e].controller.getAllParsedValues(t));
                t._cache.$bar = Et(s.sort((t, e) => t - e));
              }
              return t._cache.$bar;
            })(e, t.type);
          let s,
            n,
            o,
            a,
            r = e._length;
          const l = () => {
            32767 !== o &&
              -32768 !== o &&
              (tt(a) && (r = Math.min(r, Math.abs(o - a) || r)), (a = o));
          };
          for (s = 0, n = i.length; s < n; ++s)
            (o = e.getPixelForValue(i[s])), l();
          for (a = void 0, s = 0, n = e.ticks.length; s < n; ++s)
            (o = e.getPixelForTick(s)), l();
          return r;
        }
        function Fi(t, e, i, s) {
          return (
            z(t)
              ? (function (t, e, i, s) {
                  const n = i.parse(t[0], s),
                    o = i.parse(t[1], s),
                    a = Math.min(n, o),
                    r = Math.max(n, o);
                  let l = a,
                    h = r;
                  Math.abs(a) > Math.abs(r) && ((l = r), (h = a)),
                    (e[i.axis] = h),
                    (e._custom = {
                      barStart: l,
                      barEnd: h,
                      start: n,
                      end: o,
                      min: a,
                      max: r,
                    });
                })(t, e, i, s)
              : (e[i.axis] = i.parse(t, s)),
            e
          );
        }
        function Vi(t, e, i, s) {
          const n = t.iScale,
            o = t.vScale,
            a = n.getLabels(),
            r = n === o,
            l = [];
          let h, c, d, u;
          for (h = i, c = i + s; h < c; ++h)
            (u = e[h]),
              (d = {}),
              (d[n.axis] = r || n.parse(a[h], h)),
              l.push(Fi(u, d, o, h));
          return l;
        }
        function ji(t) {
          return t && void 0 !== t.barStart && void 0 !== t.barEnd;
        }
        function Bi(t, e, i, s) {
          let n = e.borderSkipped;
          const o = {};
          if (!n) return void (t.borderSkipped = o);
          if (!0 === n)
            return void (t.borderSkipped = {
              top: !0,
              right: !0,
              bottom: !0,
              left: !0,
            });
          const {
            start: a,
            end: r,
            reverse: l,
            top: h,
            bottom: c,
          } = (function (t) {
            let e, i, s, n, o;
            return (
              t.horizontal
                ? ((e = t.base > t.x), (i = "left"), (s = "right"))
                : ((e = t.base < t.y), (i = "bottom"), (s = "top")),
              e ? ((n = "end"), (o = "start")) : ((n = "start"), (o = "end")),
              { start: i, end: s, reverse: e, top: n, bottom: o }
            );
          })(t);
          "middle" === n &&
            i &&
            ((t.enableBorderRadius = !0),
            (i._top || 0) === s
              ? (n = h)
              : (i._bottom || 0) === s
              ? (n = c)
              : ((o[Ni(c, a, r, l)] = !0), (n = h))),
            (o[Ni(n, a, r, l)] = !0),
            (t.borderSkipped = o);
        }
        function Ni(t, e, i, s) {
          var n, o, a;
          return (
            s
              ? ((a = i),
                (t = Hi((t = (n = t) === (o = e) ? a : n === a ? o : n), i, e)))
              : (t = Hi(t, e, i)),
            t
          );
        }
        function Hi(t, e, i) {
          return "start" === t ? e : "end" === t ? i : t;
        }
        function Wi(t, { inflateAmount: e }, i) {
          t.inflateAmount = "auto" === e ? (1 === i ? 0.33 : 0) : e;
        }
        class $i extends Ii {
          static id = "bar";
          static defaults = {
            datasetElementType: !1,
            dataElementType: "bar",
            categoryPercentage: 0.8,
            barPercentage: 0.9,
            grouped: !0,
            animations: {
              numbers: {
                type: "number",
                properties: ["x", "y", "base", "width", "height"],
              },
            },
          };
          static overrides = {
            scales: {
              _index_: { type: "category", offset: !0, grid: { offset: !0 } },
              _value_: { type: "linear", beginAtZero: !0 },
            },
          };
          parsePrimitiveData(t, e, i, s) {
            return Vi(t, e, i, s);
          }
          parseArrayData(t, e, i, s) {
            return Vi(t, e, i, s);
          }
          parseObjectData(t, e, i, s) {
            const { iScale: n, vScale: o } = t,
              { xAxisKey: a = "x", yAxisKey: r = "y" } = this._parsing,
              l = "x" === n.axis ? a : r,
              h = "x" === o.axis ? a : r,
              c = [];
            let d, u, f, g;
            for (d = i, u = i + s; d < u; ++d)
              (g = e[d]),
                (f = {}),
                (f[n.axis] = n.parse(Q(g, l), d)),
                c.push(Fi(Q(g, h), f, o, d));
            return c;
          }
          updateRangeFromParsed(t, e, i, s) {
            super.updateRangeFromParsed(t, e, i, s);
            const n = i._custom;
            n &&
              e === this._cachedMeta.vScale &&
              ((t.min = Math.min(t.min, n.min)),
              (t.max = Math.max(t.max, n.max)));
          }
          getMaxOverflow() {
            return 0;
          }
          getLabelAndValue(t) {
            const e = this._cachedMeta,
              { iScale: i, vScale: s } = e,
              n = this.getParsed(t),
              o = n._custom,
              a = ji(o)
                ? "[" + o.start + ", " + o.end + "]"
                : "" + s.getLabelForValue(n[s.axis]);
            return { label: "" + i.getLabelForValue(n[i.axis]), value: a };
          }
          initialize() {
            (this.enableOptionSharing = !0),
              super.initialize(),
              (this._cachedMeta.stack = this.getDataset().stack);
          }
          update(t) {
            const e = this._cachedMeta;
            this.updateElements(e.data, 0, e.data.length, t);
          }
          updateElements(t, e, i, s) {
            const n = "reset" === s,
              {
                index: o,
                _cachedMeta: { vScale: a },
              } = this,
              r = a.getBasePixel(),
              l = a.isHorizontal(),
              h = this._getRuler(),
              { sharedOptions: c, includeOptions: d } = this._getSharedOptions(
                e,
                s
              );
            for (let u = e; u < e + i; u++) {
              const e = this.getParsed(u),
                i =
                  n || I(e[a.axis])
                    ? { base: r, head: r }
                    : this._calculateBarValuePixels(u),
                f = this._calculateBarIndexPixels(u, h),
                g = (e._stacks || {})[a.axis],
                p = {
                  horizontal: l,
                  base: i.base,
                  enableBorderRadius:
                    !g || ji(e._custom) || o === g._top || o === g._bottom,
                  x: l ? i.head : f.center,
                  y: l ? f.center : i.head,
                  height: l ? f.size : Math.abs(i.size),
                  width: l ? Math.abs(i.size) : f.size,
                };
              d &&
                (p.options =
                  c ||
                  this.resolveDataElementOptions(
                    u,
                    t[u].active ? "active" : s
                  ));
              const m = p.options || t[u].options;
              Bi(p, m, g, o),
                Wi(p, m, h.ratio),
                this.updateElement(t[u], u, p, s);
            }
          }
          _getStacks(t, e) {
            const { iScale: i } = this._cachedMeta,
              s = i
                .getMatchingVisibleMetas(this._type)
                .filter((t) => t.controller.options.grouped),
              n = i.options.stacked,
              o = [],
              a = (t) => {
                const i = t.controller.getParsed(e),
                  s = i && i[t.vScale.axis];
                if (I(s) || isNaN(s)) return !0;
              };
            for (const i of s)
              if (
                (void 0 === e || !a(i)) &&
                ((!1 === n ||
                  -1 === o.indexOf(i.stack) ||
                  (void 0 === n && void 0 === i.stack)) &&
                  o.push(i.stack),
                i.index === t)
              )
                break;
            return o.length || o.push(void 0), o;
          }
          _getStackCount(t) {
            return this._getStacks(void 0, t).length;
          }
          _getStackIndex(t, e, i) {
            const s = this._getStacks(t, i),
              n = void 0 !== e ? s.indexOf(e) : -1;
            return -1 === n ? s.length - 1 : n;
          }
          _getRuler() {
            const t = this.options,
              e = this._cachedMeta,
              i = e.iScale,
              s = [];
            let n, o;
            for (n = 0, o = e.data.length; n < o; ++n)
              s.push(i.getPixelForValue(this.getParsed(n)[i.axis], n));
            const a = t.barThickness;
            return {
              min: a || zi(e),
              pixels: s,
              start: i._startPixel,
              end: i._endPixel,
              stackCount: this._getStackCount(),
              scale: i,
              grouped: t.grouped,
              ratio: a ? 1 : t.categoryPercentage * t.barPercentage,
            };
          }
          _calculateBarValuePixels(t) {
            const {
                _cachedMeta: { vScale: e, _stacked: i, index: s },
                options: { base: n, minBarLength: o },
              } = this,
              a = n || 0,
              r = this.getParsed(t),
              l = r._custom,
              h = ji(l);
            let c,
              d,
              u = r[e.axis],
              f = 0,
              g = i ? this.applyStack(e, r, i) : u;
            g !== u && ((f = g - u), (g = u)),
              h &&
                ((u = l.barStart),
                (g = l.barEnd - l.barStart),
                0 !== u && ut(u) !== ut(l.barEnd) && (f = 0),
                (f += u));
            const p = I(n) || h ? f : n;
            let m = e.getPixelForValue(p);
            if (
              ((c = this.chart.getDataVisibility(t)
                ? e.getPixelForValue(f + g)
                : m),
              (d = c - m),
              Math.abs(d) < o)
            ) {
              (d =
                (function (t, e, i) {
                  return 0 !== t
                    ? ut(t)
                    : (e.isHorizontal() ? 1 : -1) * (e.min >= i ? 1 : -1);
                })(d, e, a) * o),
                u === a && (m -= d / 2);
              const t = e.getPixelForDecimal(0),
                n = e.getPixelForDecimal(1),
                l = Math.min(t, n),
                f = Math.max(t, n);
              (m = Math.max(Math.min(m, f), l)),
                (c = m + d),
                i &&
                  !h &&
                  (r._stacks[e.axis]._visualValues[s] =
                    e.getValueForPixel(c) - e.getValueForPixel(m));
            }
            if (m === e.getPixelForValue(a)) {
              const t = (ut(d) * e.getLineWidthForValue(a)) / 2;
              (m += t), (d -= t);
            }
            return { size: d, base: m, head: c, center: c + d / 2 };
          }
          _calculateBarIndexPixels(t, e) {
            const i = e.scale,
              s = this.options,
              n = s.skipNull,
              o = B(s.maxBarThickness, 1 / 0);
            let a, r;
            if (e.grouped) {
              const i = n ? this._getStackCount(t) : e.stackCount,
                l =
                  "flex" === s.barThickness
                    ? (function (t, e, i, s) {
                        const n = e.pixels,
                          o = n[t];
                        let a = t > 0 ? n[t - 1] : null,
                          r = t < n.length - 1 ? n[t + 1] : null;
                        const l = i.categoryPercentage;
                        null === a &&
                          (a = o - (null === r ? e.end - e.start : r - o)),
                          null === r && (r = o + o - a);
                        const h = o - ((o - Math.min(a, r)) / 2) * l;
                        return {
                          chunk: ((Math.abs(r - a) / 2) * l) / s,
                          ratio: i.barPercentage,
                          start: h,
                        };
                      })(t, e, s, i)
                    : (function (t, e, i, s) {
                        const n = i.barThickness;
                        let o, a;
                        return (
                          I(n)
                            ? ((o = e.min * i.categoryPercentage),
                              (a = i.barPercentage))
                            : ((o = n * s), (a = 1)),
                          { chunk: o / s, ratio: a, start: e.pixels[t] - o / 2 }
                        );
                      })(t, e, s, i),
                h = this._getStackIndex(
                  this.index,
                  this._cachedMeta.stack,
                  n ? t : void 0
                );
              (a = l.start + l.chunk * h + l.chunk / 2),
                (r = Math.min(o, l.chunk * l.ratio));
            } else
              (a = i.getPixelForValue(this.getParsed(t)[i.axis], t)),
                (r = Math.min(o, e.min * e.ratio));
            return { base: a - r / 2, head: a + r / 2, center: a, size: r };
          }
          draw() {
            const t = this._cachedMeta,
              e = t.vScale,
              i = t.data,
              s = i.length;
            let n = 0;
            for (; n < s; ++n)
              null !== this.getParsed(n)[e.axis] && i[n].draw(this._ctx);
          }
        }
        class Yi extends Ii {
          static id = "bubble";
          static defaults = {
            datasetElementType: !1,
            dataElementType: "point",
            animations: {
              numbers: {
                type: "number",
                properties: ["x", "y", "borderWidth", "radius"],
              },
            },
          };
          static overrides = {
            scales: { x: { type: "linear" }, y: { type: "linear" } },
          };
          initialize() {
            (this.enableOptionSharing = !0), super.initialize();
          }
          parsePrimitiveData(t, e, i, s) {
            const n = super.parsePrimitiveData(t, e, i, s);
            for (let t = 0; t < n.length; t++)
              n[t]._custom = this.resolveDataElementOptions(t + i).radius;
            return n;
          }
          parseArrayData(t, e, i, s) {
            const n = super.parseArrayData(t, e, i, s);
            for (let t = 0; t < n.length; t++) {
              const s = e[i + t];
              n[t]._custom = B(
                s[2],
                this.resolveDataElementOptions(t + i).radius
              );
            }
            return n;
          }
          parseObjectData(t, e, i, s) {
            const n = super.parseObjectData(t, e, i, s);
            for (let t = 0; t < n.length; t++) {
              const s = e[i + t];
              n[t]._custom = B(
                s && s.r && +s.r,
                this.resolveDataElementOptions(t + i).radius
              );
            }
            return n;
          }
          getMaxOverflow() {
            const t = this._cachedMeta.data;
            let e = 0;
            for (let i = t.length - 1; i >= 0; --i)
              e = Math.max(e, t[i].size(this.resolveDataElementOptions(i)) / 2);
            return e > 0 && e;
          }
          getLabelAndValue(t) {
            const e = this._cachedMeta,
              i = this.chart.data.labels || [],
              { xScale: s, yScale: n } = e,
              o = this.getParsed(t),
              a = s.getLabelForValue(o.x),
              r = n.getLabelForValue(o.y),
              l = o._custom;
            return {
              label: i[t] || "",
              value: "(" + a + ", " + r + (l ? ", " + l : "") + ")",
            };
          }
          update(t) {
            const e = this._cachedMeta.data;
            this.updateElements(e, 0, e.length, t);
          }
          updateElements(t, e, i, s) {
            const n = "reset" === s,
              { iScale: o, vScale: a } = this._cachedMeta,
              { sharedOptions: r, includeOptions: l } = this._getSharedOptions(
                e,
                s
              ),
              h = o.axis,
              c = a.axis;
            for (let d = e; d < e + i; d++) {
              const e = t[d],
                i = !n && this.getParsed(d),
                u = {},
                f = (u[h] = n
                  ? o.getPixelForDecimal(0.5)
                  : o.getPixelForValue(i[h])),
                g = (u[c] = n ? a.getBasePixel() : a.getPixelForValue(i[c]));
              (u.skip = isNaN(f) || isNaN(g)),
                l &&
                  ((u.options =
                    r ||
                    this.resolveDataElementOptions(d, e.active ? "active" : s)),
                  n && (u.options.radius = 0)),
                this.updateElement(e, d, u, s);
            }
          }
          resolveDataElementOptions(t, e) {
            const i = this.getParsed(t);
            let s = super.resolveDataElementOptions(t, e);
            s.$shared && (s = Object.assign({}, s, { $shared: !1 }));
            const n = s.radius;
            return (
              "active" !== e && (s.radius = 0),
              (s.radius += B(i && i._custom, n)),
              s
            );
          }
        }
        class qi extends Ii {
          static id = "doughnut";
          static defaults = {
            datasetElementType: !1,
            dataElementType: "arc",
            animation: { animateRotate: !0, animateScale: !1 },
            animations: {
              numbers: {
                type: "number",
                properties: [
                  "circumference",
                  "endAngle",
                  "innerRadius",
                  "outerRadius",
                  "startAngle",
                  "x",
                  "y",
                  "offset",
                  "borderWidth",
                  "spacing",
                ],
              },
            },
            cutout: "50%",
            rotation: 0,
            circumference: 360,
            radius: "100%",
            spacing: 0,
            indexAxis: "r",
          };
          static descriptors = {
            _scriptable: (t) => "spacing" !== t,
            _indexable: (t) => "spacing" !== t,
          };
          static overrides = {
            aspectRatio: 1,
            plugins: {
              legend: {
                labels: {
                  generateLabels(t) {
                    const e = t.data;
                    if (e.labels.length && e.datasets.length) {
                      const {
                        labels: { pointStyle: i, color: s },
                      } = t.legend.options;
                      return e.labels.map((e, n) => {
                        const o = t.getDatasetMeta(0).controller.getStyle(n);
                        return {
                          text: e,
                          fillStyle: o.backgroundColor,
                          strokeStyle: o.borderColor,
                          fontColor: s,
                          lineWidth: o.borderWidth,
                          pointStyle: i,
                          hidden: !t.getDataVisibility(n),
                          index: n,
                        };
                      });
                    }
                    return [];
                  },
                },
                onClick(t, e, i) {
                  i.chart.toggleDataVisibility(e.index), i.chart.update();
                },
              },
            },
          };
          constructor(t, e) {
            super(t, e),
              (this.enableOptionSharing = !0),
              (this.innerRadius = void 0),
              (this.outerRadius = void 0),
              (this.offsetX = void 0),
              (this.offsetY = void 0);
          }
          linkScales() {}
          parse(t, e) {
            const i = this.getDataset().data,
              s = this._cachedMeta;
            if (!1 === this._parsing) s._parsed = i;
            else {
              let n,
                o,
                a = (t) => +i[t];
              if (F(i[t])) {
                const { key: t = "value" } = this._parsing;
                a = (e) => +Q(i[e], t);
              }
              for (n = t, o = t + e; n < o; ++n) s._parsed[n] = a(n);
            }
          }
          _getRotation() {
            return bt(this.options.rotation - 90);
          }
          _getCircumference() {
            return bt(this.options.circumference);
          }
          _getRotationExtents() {
            let t = nt,
              e = -nt;
            for (let i = 0; i < this.chart.data.datasets.length; ++i)
              if (
                this.chart.isDatasetVisible(i) &&
                this.chart.getDatasetMeta(i).type === this._type
              ) {
                const s = this.chart.getDatasetMeta(i).controller,
                  n = s._getRotation(),
                  o = s._getCircumference();
                (t = Math.min(t, n)), (e = Math.max(e, n + o));
              }
            return { rotation: t, circumference: e - t };
          }
          update(t) {
            const e = this.chart,
              { chartArea: i } = e,
              s = this._cachedMeta,
              n = s.data,
              o =
                this.getMaxBorderWidth() +
                this.getMaxOffset(n) +
                this.options.spacing,
              a = Math.max((Math.min(i.width, i.height) - o) / 2, 0),
              r = Math.min(
                ((h = a),
                "string" == typeof (l = this.options.cutout) && l.endsWith("%")
                  ? parseFloat(l) / 100
                  : +l / h),
                1
              );
            var l, h;
            const c = this._getRingWeight(this.index),
              { circumference: d, rotation: u } = this._getRotationExtents(),
              {
                ratioX: f,
                ratioY: g,
                offsetX: p,
                offsetY: m,
              } = (function (t, e, i) {
                let s = 1,
                  n = 1,
                  o = 0,
                  a = 0;
                if (e < nt) {
                  const r = t,
                    l = r + e,
                    h = Math.cos(r),
                    c = Math.sin(r),
                    d = Math.cos(l),
                    u = Math.sin(l),
                    f = (t, e, s) =>
                      kt(t, r, l, !0) ? 1 : Math.max(e, e * i, s, s * i),
                    g = (t, e, s) =>
                      kt(t, r, l, !0) ? -1 : Math.min(e, e * i, s, s * i),
                    p = f(0, h, d),
                    m = f(lt, c, u),
                    b = g(st, h, d),
                    x = g(st + lt, c, u);
                  (s = (p - b) / 2),
                    (n = (m - x) / 2),
                    (o = -(p + b) / 2),
                    (a = -(m + x) / 2);
                }
                return { ratioX: s, ratioY: n, offsetX: o, offsetY: a };
              })(u, d, r),
              b = (i.width - o) / f,
              x = (i.height - o) / g,
              _ = Math.max(Math.min(b, x) / 2, 0),
              y = N(this.options.radius, _),
              v =
                (y - Math.max(y * r, 0)) / this._getVisibleDatasetWeightTotal();
            (this.offsetX = p * y),
              (this.offsetY = m * y),
              (s.total = this.calculateTotal()),
              (this.outerRadius =
                y - v * this._getRingWeightOffset(this.index)),
              (this.innerRadius = Math.max(this.outerRadius - v * c, 0)),
              this.updateElements(n, 0, n.length, t);
          }
          _circumference(t, e) {
            const i = this.options,
              s = this._cachedMeta,
              n = this._getCircumference();
            return (e && i.animation.animateRotate) ||
              !this.chart.getDataVisibility(t) ||
              null === s._parsed[t] ||
              s.data[t].hidden
              ? 0
              : this.calculateCircumference((s._parsed[t] * n) / nt);
          }
          updateElements(t, e, i, s) {
            const n = "reset" === s,
              o = this.chart,
              a = o.chartArea,
              r = o.options.animation,
              l = (a.left + a.right) / 2,
              h = (a.top + a.bottom) / 2,
              c = n && r.animateScale,
              d = c ? 0 : this.innerRadius,
              u = c ? 0 : this.outerRadius,
              { sharedOptions: f, includeOptions: g } = this._getSharedOptions(
                e,
                s
              );
            let p,
              m = this._getRotation();
            for (p = 0; p < e; ++p) m += this._circumference(p, n);
            for (p = e; p < e + i; ++p) {
              const e = this._circumference(p, n),
                i = t[p],
                o = {
                  x: l + this.offsetX,
                  y: h + this.offsetY,
                  startAngle: m,
                  endAngle: m + e,
                  circumference: e,
                  outerRadius: u,
                  innerRadius: d,
                };
              g &&
                (o.options =
                  f ||
                  this.resolveDataElementOptions(p, i.active ? "active" : s)),
                (m += e),
                this.updateElement(i, p, o, s);
            }
          }
          calculateTotal() {
            const t = this._cachedMeta,
              e = t.data;
            let i,
              s = 0;
            for (i = 0; i < e.length; i++) {
              const n = t._parsed[i];
              null === n ||
                isNaN(n) ||
                !this.chart.getDataVisibility(i) ||
                e[i].hidden ||
                (s += Math.abs(n));
            }
            return s;
          }
          calculateCircumference(t) {
            const e = this._cachedMeta.total;
            return e > 0 && !isNaN(t) ? nt * (Math.abs(t) / e) : 0;
          }
          getLabelAndValue(t) {
            const e = this._cachedMeta,
              i = this.chart,
              s = i.data.labels || [],
              n = Kt(e._parsed[t], i.options.locale);
            return { label: s[t] || "", value: n };
          }
          getMaxBorderWidth(t) {
            let e = 0;
            const i = this.chart;
            let s, n, o, a, r;
            if (!t)
              for (s = 0, n = i.data.datasets.length; s < n; ++s)
                if (i.isDatasetVisible(s)) {
                  (o = i.getDatasetMeta(s)), (t = o.data), (a = o.controller);
                  break;
                }
            if (!t) return 0;
            for (s = 0, n = t.length; s < n; ++s)
              (r = a.resolveDataElementOptions(s)),
                "inner" !== r.borderAlign &&
                  (e = Math.max(
                    e,
                    r.borderWidth || 0,
                    r.hoverBorderWidth || 0
                  ));
            return e;
          }
          getMaxOffset(t) {
            let e = 0;
            for (let i = 0, s = t.length; i < s; ++i) {
              const t = this.resolveDataElementOptions(i);
              e = Math.max(e, t.offset || 0, t.hoverOffset || 0);
            }
            return e;
          }
          _getRingWeightOffset(t) {
            let e = 0;
            for (let i = 0; i < t; ++i)
              this.chart.isDatasetVisible(i) && (e += this._getRingWeight(i));
            return e;
          }
          _getRingWeight(t) {
            return Math.max(B(this.chart.data.datasets[t].weight, 1), 0);
          }
          _getVisibleDatasetWeightTotal() {
            return (
              this._getRingWeightOffset(this.chart.data.datasets.length) || 1
            );
          }
        }
        class Ui extends Ii {
          static id = "line";
          static defaults = {
            datasetElementType: "line",
            dataElementType: "point",
            showLine: !0,
            spanGaps: !1,
          };
          static overrides = {
            scales: {
              _index_: { type: "category" },
              _value_: { type: "linear" },
            },
          };
          initialize() {
            (this.enableOptionSharing = !0),
              (this.supportsDecimation = !0),
              super.initialize();
          }
          update(t) {
            const e = this._cachedMeta,
              { dataset: i, data: s = [], _dataset: n } = e,
              o = this.chart._animationsDisabled;
            let { start: a, count: r } = Ft(e, s, o);
            (this._drawStart = a),
              (this._drawCount = r),
              Vt(e) && ((a = 0), (r = s.length)),
              (i._chart = this.chart),
              (i._datasetIndex = this.index),
              (i._decimated = !!n._decimated),
              (i.points = s);
            const l = this.resolveDatasetElementOptions(t);
            this.options.showLine || (l.borderWidth = 0),
              (l.segment = this.options.segment),
              this.updateElement(i, void 0, { animated: !o, options: l }, t),
              this.updateElements(s, a, r, t);
          }
          updateElements(t, e, i, s) {
            const n = "reset" === s,
              {
                iScale: o,
                vScale: a,
                _stacked: r,
                _dataset: l,
              } = this._cachedMeta,
              { sharedOptions: h, includeOptions: c } = this._getSharedOptions(
                e,
                s
              ),
              d = o.axis,
              u = a.axis,
              { spanGaps: f, segment: g } = this.options,
              p = pt(f) ? f : Number.POSITIVE_INFINITY,
              m = this.chart._animationsDisabled || n || "none" === s,
              b = e + i,
              x = t.length;
            let _ = e > 0 && this.getParsed(e - 1);
            for (let i = 0; i < x; ++i) {
              const f = t[i],
                x = m ? f : {};
              if (i < e || i >= b) {
                x.skip = !0;
                continue;
              }
              const y = this.getParsed(i),
                v = I(y[u]),
                M = (x[d] = o.getPixelForValue(y[d], i)),
                w = (x[u] =
                  n || v
                    ? a.getBasePixel()
                    : a.getPixelForValue(
                        r ? this.applyStack(a, y, r) : y[u],
                        i
                      ));
              (x.skip = isNaN(M) || isNaN(w) || v),
                (x.stop = i > 0 && Math.abs(y[d] - _[d]) > p),
                g && ((x.parsed = y), (x.raw = l.data[i])),
                c &&
                  (x.options =
                    h ||
                    this.resolveDataElementOptions(i, f.active ? "active" : s)),
                m || this.updateElement(f, i, x, s),
                (_ = y);
            }
          }
          getMaxOverflow() {
            const t = this._cachedMeta,
              e = t.dataset,
              i = (e.options && e.options.borderWidth) || 0,
              s = t.data || [];
            if (!s.length) return i;
            const n = s[0].size(this.resolveDataElementOptions(0)),
              o = s[s.length - 1].size(
                this.resolveDataElementOptions(s.length - 1)
              );
            return Math.max(i, n, o) / 2;
          }
          draw() {
            const t = this._cachedMeta;
            t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis),
              super.draw();
          }
        }
        class Xi extends Ii {
          static id = "polarArea";
          static defaults = {
            dataElementType: "arc",
            animation: { animateRotate: !0, animateScale: !0 },
            animations: {
              numbers: {
                type: "number",
                properties: [
                  "x",
                  "y",
                  "startAngle",
                  "endAngle",
                  "innerRadius",
                  "outerRadius",
                ],
              },
            },
            indexAxis: "r",
            startAngle: 0,
          };
          static overrides = {
            aspectRatio: 1,
            plugins: {
              legend: {
                labels: {
                  generateLabels(t) {
                    const e = t.data;
                    if (e.labels.length && e.datasets.length) {
                      const {
                        labels: { pointStyle: i, color: s },
                      } = t.legend.options;
                      return e.labels.map((e, n) => {
                        const o = t.getDatasetMeta(0).controller.getStyle(n);
                        return {
                          text: e,
                          fillStyle: o.backgroundColor,
                          strokeStyle: o.borderColor,
                          fontColor: s,
                          lineWidth: o.borderWidth,
                          pointStyle: i,
                          hidden: !t.getDataVisibility(n),
                          index: n,
                        };
                      });
                    }
                    return [];
                  },
                },
                onClick(t, e, i) {
                  i.chart.toggleDataVisibility(e.index), i.chart.update();
                },
              },
            },
            scales: {
              r: {
                type: "radialLinear",
                angleLines: { display: !1 },
                beginAtZero: !0,
                grid: { circular: !0 },
                pointLabels: { display: !1 },
                startAngle: 0,
              },
            },
          };
          constructor(t, e) {
            super(t, e),
              (this.innerRadius = void 0),
              (this.outerRadius = void 0);
          }
          getLabelAndValue(t) {
            const e = this._cachedMeta,
              i = this.chart,
              s = i.data.labels || [],
              n = Kt(e._parsed[t].r, i.options.locale);
            return { label: s[t] || "", value: n };
          }
          parseObjectData(t, e, i, s) {
            return He.bind(this)(t, e, i, s);
          }
          update(t) {
            const e = this._cachedMeta.data;
            this._updateRadius(), this.updateElements(e, 0, e.length, t);
          }
          getMinMax() {
            const t = this._cachedMeta,
              e = {
                min: Number.POSITIVE_INFINITY,
                max: Number.NEGATIVE_INFINITY,
              };
            return (
              t.data.forEach((t, i) => {
                const s = this.getParsed(i).r;
                !isNaN(s) &&
                  this.chart.getDataVisibility(i) &&
                  (s < e.min && (e.min = s), s > e.max && (e.max = s));
              }),
              e
            );
          }
          _updateRadius() {
            const t = this.chart,
              e = t.chartArea,
              i = t.options,
              s = Math.min(e.right - e.left, e.bottom - e.top),
              n = Math.max(s / 2, 0),
              o =
                (n -
                  Math.max(
                    i.cutoutPercentage ? (n / 100) * i.cutoutPercentage : 1,
                    0
                  )) /
                t.getVisibleDatasetCount();
            (this.outerRadius = n - o * this.index),
              (this.innerRadius = this.outerRadius - o);
          }
          updateElements(t, e, i, s) {
            const n = "reset" === s,
              o = this.chart,
              a = o.options.animation,
              r = this._cachedMeta.rScale,
              l = r.xCenter,
              h = r.yCenter,
              c = r.getIndexAngle(0) - 0.5 * st;
            let d,
              u = c;
            const f = 360 / this.countVisibleElements();
            for (d = 0; d < e; ++d) u += this._computeAngle(d, s, f);
            for (d = e; d < e + i; d++) {
              const e = t[d];
              let i = u,
                g = u + this._computeAngle(d, s, f),
                p = o.getDataVisibility(d)
                  ? r.getDistanceFromCenterForValue(this.getParsed(d).r)
                  : 0;
              (u = g),
                n &&
                  (a.animateScale && (p = 0), a.animateRotate && (i = g = c));
              const m = {
                x: l,
                y: h,
                innerRadius: 0,
                outerRadius: p,
                startAngle: i,
                endAngle: g,
                options: this.resolveDataElementOptions(
                  d,
                  e.active ? "active" : s
                ),
              };
              this.updateElement(e, d, m, s);
            }
          }
          countVisibleElements() {
            const t = this._cachedMeta;
            let e = 0;
            return (
              t.data.forEach((t, i) => {
                !isNaN(this.getParsed(i).r) &&
                  this.chart.getDataVisibility(i) &&
                  e++;
              }),
              e
            );
          }
          _computeAngle(t, e, i) {
            return this.chart.getDataVisibility(t)
              ? bt(this.resolveDataElementOptions(t, e).angle || i)
              : 0;
          }
        }
        class Ki extends qi {
          static id = "pie";
          static defaults = {
            cutout: 0,
            rotation: 0,
            circumference: 360,
            radius: "100%",
          };
        }
        class Zi extends Ii {
          static id = "radar";
          static defaults = {
            datasetElementType: "line",
            dataElementType: "point",
            indexAxis: "r",
            showLine: !0,
            elements: { line: { fill: "start" } },
          };
          static overrides = {
            aspectRatio: 1,
            scales: { r: { type: "radialLinear" } },
          };
          getLabelAndValue(t) {
            const e = this._cachedMeta.vScale,
              i = this.getParsed(t);
            return {
              label: e.getLabels()[t],
              value: "" + e.getLabelForValue(i[e.axis]),
            };
          }
          parseObjectData(t, e, i, s) {
            return He.bind(this)(t, e, i, s);
          }
          update(t) {
            const e = this._cachedMeta,
              i = e.dataset,
              s = e.data || [],
              n = e.iScale.getLabels();
            if (((i.points = s), "resize" !== t)) {
              const e = this.resolveDatasetElementOptions(t);
              this.options.showLine || (e.borderWidth = 0);
              const o = {
                _loop: !0,
                _fullLoop: n.length === s.length,
                options: e,
              };
              this.updateElement(i, void 0, o, t);
            }
            this.updateElements(s, 0, s.length, t);
          }
          updateElements(t, e, i, s) {
            const n = this._cachedMeta.rScale,
              o = "reset" === s;
            for (let a = e; a < e + i; a++) {
              const e = t[a],
                i = this.resolveDataElementOptions(a, e.active ? "active" : s),
                r = n.getPointPositionForValue(a, this.getParsed(a).r),
                l = o ? n.xCenter : r.x,
                h = o ? n.yCenter : r.y,
                c = {
                  x: l,
                  y: h,
                  angle: r.angle,
                  skip: isNaN(l) || isNaN(h),
                  options: i,
                };
              this.updateElement(e, a, c, s);
            }
          }
        }
        class Gi extends Ii {
          static id = "scatter";
          static defaults = {
            datasetElementType: !1,
            dataElementType: "point",
            showLine: !1,
            fill: !1,
          };
          static overrides = {
            interaction: { mode: "point" },
            scales: { x: { type: "linear" }, y: { type: "linear" } },
          };
          getLabelAndValue(t) {
            const e = this._cachedMeta,
              i = this.chart.data.labels || [],
              { xScale: s, yScale: n } = e,
              o = this.getParsed(t),
              a = s.getLabelForValue(o.x),
              r = n.getLabelForValue(o.y);
            return { label: i[t] || "", value: "(" + a + ", " + r + ")" };
          }
          update(t) {
            const e = this._cachedMeta,
              { data: i = [] } = e,
              s = this.chart._animationsDisabled;
            let { start: n, count: o } = Ft(e, i, s);
            if (
              ((this._drawStart = n),
              (this._drawCount = o),
              Vt(e) && ((n = 0), (o = i.length)),
              this.options.showLine)
            ) {
              const { dataset: n, _dataset: o } = e;
              (n._chart = this.chart),
                (n._datasetIndex = this.index),
                (n._decimated = !!o._decimated),
                (n.points = i);
              const a = this.resolveDatasetElementOptions(t);
              (a.segment = this.options.segment),
                this.updateElement(n, void 0, { animated: !s, options: a }, t);
            }
            this.updateElements(i, n, o, t);
          }
          addElements() {
            const { showLine: t } = this.options;
            !this.datasetElementType &&
              t &&
              (this.datasetElementType =
                this.chart.registry.getElement("line")),
              super.addElements();
          }
          updateElements(t, e, i, s) {
            const n = "reset" === s,
              {
                iScale: o,
                vScale: a,
                _stacked: r,
                _dataset: l,
              } = this._cachedMeta,
              h = this.resolveDataElementOptions(e, s),
              c = this.getSharedOptions(h),
              d = this.includeOptions(s, c),
              u = o.axis,
              f = a.axis,
              { spanGaps: g, segment: p } = this.options,
              m = pt(g) ? g : Number.POSITIVE_INFINITY,
              b = this.chart._animationsDisabled || n || "none" === s;
            let x = e > 0 && this.getParsed(e - 1);
            for (let h = e; h < e + i; ++h) {
              const e = t[h],
                i = this.getParsed(h),
                g = b ? e : {},
                _ = I(i[f]),
                y = (g[u] = o.getPixelForValue(i[u], h)),
                v = (g[f] =
                  n || _
                    ? a.getBasePixel()
                    : a.getPixelForValue(
                        r ? this.applyStack(a, i, r) : i[f],
                        h
                      ));
              (g.skip = isNaN(y) || isNaN(v) || _),
                (g.stop = h > 0 && Math.abs(i[u] - x[u]) > m),
                p && ((g.parsed = i), (g.raw = l.data[h])),
                d &&
                  (g.options =
                    c ||
                    this.resolveDataElementOptions(h, e.active ? "active" : s)),
                b || this.updateElement(e, h, g, s),
                (x = i);
            }
            this.updateSharedOptions(c, s, h);
          }
          getMaxOverflow() {
            const t = this._cachedMeta,
              e = t.data || [];
            if (!this.options.showLine) {
              let t = 0;
              for (let i = e.length - 1; i >= 0; --i)
                t = Math.max(
                  t,
                  e[i].size(this.resolveDataElementOptions(i)) / 2
                );
              return t > 0 && t;
            }
            const i = t.dataset,
              s = (i.options && i.options.borderWidth) || 0;
            if (!e.length) return s;
            const n = e[0].size(this.resolveDataElementOptions(0)),
              o = e[e.length - 1].size(
                this.resolveDataElementOptions(e.length - 1)
              );
            return Math.max(s, n, o) / 2;
          }
        }
        var Qi = Object.freeze({
          __proto__: null,
          BarController: $i,
          BubbleController: Yi,
          DoughnutController: qi,
          LineController: Ui,
          PolarAreaController: Xi,
          PieController: Ki,
          RadarController: Zi,
          ScatterController: Gi,
        });
        function Ji() {
          throw new Error(
            "This method is not implemented: Check that a complete date adapter is provided."
          );
        }
        class ts {
          static override(t) {
            Object.assign(ts.prototype, t);
          }
          constructor(t) {
            this.options = t || {};
          }
          init() {}
          formats() {
            return Ji();
          }
          parse() {
            return Ji();
          }
          format() {
            return Ji();
          }
          add() {
            return Ji();
          }
          diff() {
            return Ji();
          }
          startOf() {
            return Ji();
          }
          endOf() {
            return Ji();
          }
        }
        var es = { _date: ts };
        function is(t, e, i, s) {
          const { controller: n, data: o, _sorted: a } = t,
            r = n._cachedMeta.iScale;
          if (r && e === r.axis && "r" !== e && a && o.length) {
            const t = r._reversePixels ? Ct : Dt;
            if (!s) return t(o, e, i);
            if (n._sharedOptions) {
              const s = o[0],
                n = "function" == typeof s.getRange && s.getRange(e);
              if (n) {
                const s = t(o, e, i - n),
                  a = t(o, e, i + n);
                return { lo: s.lo, hi: a.hi };
              }
            }
          }
          return { lo: 0, hi: o.length - 1 };
        }
        function ss(t, e, i, s, n) {
          const o = t.getSortedVisibleDatasetMetas(),
            a = i[e];
          for (let t = 0, i = o.length; t < i; ++t) {
            const { index: i, data: r } = o[t],
              { lo: l, hi: h } = is(o[t], e, a, n);
            for (let t = l; t <= h; ++t) {
              const e = r[t];
              e.skip || s(e, i, t);
            }
          }
        }
        function ns(t, e, i, s, n) {
          const o = [];
          return n || t.isPointInArea(e)
            ? (ss(
                t,
                i,
                e,
                function (i, a, r) {
                  (n || ce(i, t.chartArea, 0)) &&
                    i.inRange(e.x, e.y, s) &&
                    o.push({ element: i, datasetIndex: a, index: r });
                },
                !0
              ),
              o)
            : o;
        }
        function os(t, e, i, s, n, o) {
          return o || t.isPointInArea(e)
            ? "r" !== i || s
              ? (function (t, e, i, s, n, o) {
                  let a = [];
                  const r = (function (t) {
                    const e = -1 !== t.indexOf("x"),
                      i = -1 !== t.indexOf("y");
                    return function (t, s) {
                      const n = e ? Math.abs(t.x - s.x) : 0,
                        o = i ? Math.abs(t.y - s.y) : 0;
                      return Math.sqrt(Math.pow(n, 2) + Math.pow(o, 2));
                    };
                  })(i);
                  let l = Number.POSITIVE_INFINITY;
                  return (
                    ss(t, i, e, function (i, h, c) {
                      const d = i.inRange(e.x, e.y, n);
                      if (s && !d) return;
                      const u = i.getCenterPoint(n);
                      if (!o && !t.isPointInArea(u) && !d) return;
                      const f = r(e, u);
                      f < l
                        ? ((a = [{ element: i, datasetIndex: h, index: c }]),
                          (l = f))
                        : f === l &&
                          a.push({ element: i, datasetIndex: h, index: c });
                    }),
                    a
                  );
                })(t, e, i, s, n, o)
              : (function (t, e, i, s) {
                  let n = [];
                  return (
                    ss(t, i, e, function (t, i, o) {
                      const { startAngle: a, endAngle: r } = t.getProps(
                          ["startAngle", "endAngle"],
                          s
                        ),
                        { angle: l } = yt(t, { x: e.x, y: e.y });
                      kt(l, a, r) &&
                        n.push({ element: t, datasetIndex: i, index: o });
                    }),
                    n
                  );
                })(t, e, i, n)
            : [];
        }
        function as(t, e, i, s, n) {
          const o = [],
            a = "x" === i ? "inXRange" : "inYRange";
          let r = !1;
          return (
            ss(t, i, e, (t, s, l) => {
              t[a](e[i], n) &&
                (o.push({ element: t, datasetIndex: s, index: l }),
                (r = r || t.inRange(e.x, e.y, n)));
            }),
            s && !r ? [] : o
          );
        }
        var rs = {
          evaluateInteractionItems: ss,
          modes: {
            index(t, e, i, s) {
              const n = ei(e, t),
                o = i.axis || "x",
                a = i.includeInvisible || !1,
                r = i.intersect ? ns(t, n, o, s, a) : os(t, n, o, !1, s, a),
                l = [];
              return r.length
                ? (t.getSortedVisibleDatasetMetas().forEach((t) => {
                    const e = r[0].index,
                      i = t.data[e];
                    i &&
                      !i.skip &&
                      l.push({ element: i, datasetIndex: t.index, index: e });
                  }),
                  l)
                : [];
            },
            dataset(t, e, i, s) {
              const n = ei(e, t),
                o = i.axis || "xy",
                a = i.includeInvisible || !1;
              let r = i.intersect ? ns(t, n, o, s, a) : os(t, n, o, !1, s, a);
              if (r.length > 0) {
                const e = r[0].datasetIndex,
                  i = t.getDatasetMeta(e).data;
                r = [];
                for (let t = 0; t < i.length; ++t)
                  r.push({ element: i[t], datasetIndex: e, index: t });
              }
              return r;
            },
            point: (t, e, i, s) =>
              ns(t, ei(e, t), i.axis || "xy", s, i.includeInvisible || !1),
            nearest(t, e, i, s) {
              const n = ei(e, t),
                o = i.axis || "xy",
                a = i.includeInvisible || !1;
              return os(t, n, o, i.intersect, s, a);
            },
            x: (t, e, i, s) => as(t, ei(e, t), "x", i.intersect, s),
            y: (t, e, i, s) => as(t, ei(e, t), "y", i.intersect, s),
          },
        };
        const ls = ["left", "top", "right", "bottom"];
        function hs(t, e) {
          return t.filter((t) => t.pos === e);
        }
        function cs(t, e) {
          return t.filter((t) => -1 === ls.indexOf(t.pos) && t.box.axis === e);
        }
        function ds(t, e) {
          return t.sort((t, i) => {
            const s = e ? i : t,
              n = e ? t : i;
            return s.weight === n.weight
              ? s.index - n.index
              : s.weight - n.weight;
          });
        }
        function us(t, e, i, s) {
          return Math.max(t[i], e[i]) + Math.max(t[s], e[s]);
        }
        function fs(t, e) {
          (t.top = Math.max(t.top, e.top)),
            (t.left = Math.max(t.left, e.left)),
            (t.bottom = Math.max(t.bottom, e.bottom)),
            (t.right = Math.max(t.right, e.right));
        }
        function gs(t, e, i, s) {
          const { pos: n, box: o } = i,
            a = t.maxPadding;
          if (!F(n)) {
            i.size && (t[n] -= i.size);
            const e = s[i.stack] || { size: 0, count: 1 };
            (e.size = Math.max(e.size, i.horizontal ? o.height : o.width)),
              (i.size = e.size / e.count),
              (t[n] += i.size);
          }
          o.getPadding && fs(a, o.getPadding());
          const r = Math.max(0, e.outerWidth - us(a, t, "left", "right")),
            l = Math.max(0, e.outerHeight - us(a, t, "top", "bottom")),
            h = r !== t.w,
            c = l !== t.h;
          return (
            (t.w = r),
            (t.h = l),
            i.horizontal ? { same: h, other: c } : { same: c, other: h }
          );
        }
        function ps(t, e) {
          const i = e.maxPadding;
          return (function (t) {
            const s = { left: 0, top: 0, right: 0, bottom: 0 };
            return (
              t.forEach((t) => {
                s[t] = Math.max(e[t], i[t]);
              }),
              s
            );
          })(t ? ["left", "right"] : ["top", "bottom"]);
        }
        function ms(t, e, i, s) {
          const n = [];
          let o, a, r, l, h, c;
          for (o = 0, a = t.length, h = 0; o < a; ++o) {
            (r = t[o]),
              (l = r.box),
              l.update(r.width || e.w, r.height || e.h, ps(r.horizontal, e));
            const { same: a, other: d } = gs(e, i, r, s);
            (h |= a && n.length), (c = c || d), l.fullSize || n.push(r);
          }
          return (h && ms(n, e, i, s)) || c;
        }
        function bs(t, e, i, s, n) {
          (t.top = i),
            (t.left = e),
            (t.right = e + s),
            (t.bottom = i + n),
            (t.width = s),
            (t.height = n);
        }
        function xs(t, e, i, s) {
          const n = i.padding;
          let { x: o, y: a } = e;
          for (const r of t) {
            const t = r.box,
              l = s[r.stack] || { count: 1, placed: 0, weight: 1 },
              h = r.stackWeight / l.weight || 1;
            if (r.horizontal) {
              const s = e.w * h,
                o = l.size || t.height;
              tt(l.start) && (a = l.start),
                t.fullSize
                  ? bs(t, n.left, a, i.outerWidth - n.right - n.left, o)
                  : bs(t, e.left + l.placed, a, s, o),
                (l.start = a),
                (l.placed += s),
                (a = t.bottom);
            } else {
              const s = e.h * h,
                a = l.size || t.width;
              tt(l.start) && (o = l.start),
                t.fullSize
                  ? bs(t, o, n.top, a, i.outerHeight - n.bottom - n.top)
                  : bs(t, o, e.top + l.placed, a, s),
                (l.start = o),
                (l.placed += s),
                (o = t.right);
            }
          }
          (e.x = o), (e.y = a);
        }
        var _s = {
          addBox(t, e) {
            t.boxes || (t.boxes = []),
              (e.fullSize = e.fullSize || !1),
              (e.position = e.position || "top"),
              (e.weight = e.weight || 0),
              (e._layers =
                e._layers ||
                function () {
                  return [
                    {
                      z: 0,
                      draw(t) {
                        e.draw(t);
                      },
                    },
                  ];
                }),
              t.boxes.push(e);
          },
          removeBox(t, e) {
            const i = t.boxes ? t.boxes.indexOf(e) : -1;
            -1 !== i && t.boxes.splice(i, 1);
          },
          configure(t, e, i) {
            (e.fullSize = i.fullSize),
              (e.position = i.position),
              (e.weight = i.weight);
          },
          update(t, e, i, s) {
            if (!t) return;
            const n = Se(t.options.layout.padding),
              o = Math.max(e - n.width, 0),
              a = Math.max(i - n.height, 0),
              r = (function (t) {
                const e = (function (t) {
                    const e = [];
                    let i, s, n, o, a, r;
                    for (i = 0, s = (t || []).length; i < s; ++i)
                      (n = t[i]),
                        ({
                          position: o,
                          options: { stack: a, stackWeight: r = 1 },
                        } = n),
                        e.push({
                          index: i,
                          box: n,
                          pos: o,
                          horizontal: n.isHorizontal(),
                          weight: n.weight,
                          stack: a && o + a,
                          stackWeight: r,
                        });
                    return e;
                  })(t),
                  i = ds(
                    e.filter((t) => t.box.fullSize),
                    !0
                  ),
                  s = ds(hs(e, "left"), !0),
                  n = ds(hs(e, "right")),
                  o = ds(hs(e, "top"), !0),
                  a = ds(hs(e, "bottom")),
                  r = cs(e, "x"),
                  l = cs(e, "y");
                return {
                  fullSize: i,
                  leftAndTop: s.concat(o),
                  rightAndBottom: n.concat(l).concat(a).concat(r),
                  chartArea: hs(e, "chartArea"),
                  vertical: s.concat(n).concat(l),
                  horizontal: o.concat(a).concat(r),
                };
              })(t.boxes),
              l = r.vertical,
              h = r.horizontal;
            W(t.boxes, (t) => {
              "function" == typeof t.beforeLayout && t.beforeLayout();
            });
            const c =
                l.reduce(
                  (t, e) =>
                    e.box.options && !1 === e.box.options.display ? t : t + 1,
                  0
                ) || 1,
              d = Object.freeze({
                outerWidth: e,
                outerHeight: i,
                padding: n,
                availableWidth: o,
                availableHeight: a,
                vBoxMaxWidth: o / 2 / c,
                hBoxMaxHeight: a / 2,
              }),
              u = Object.assign({}, n);
            fs(u, Se(s));
            const f = Object.assign(
                { maxPadding: u, w: o, h: a, x: n.left, y: n.top },
                n
              ),
              g = (function (t, e) {
                const i = (function (t) {
                    const e = {};
                    for (const i of t) {
                      const { stack: t, pos: s, stackWeight: n } = i;
                      if (!t || !ls.includes(s)) continue;
                      const o =
                        e[t] ||
                        (e[t] = { count: 0, placed: 0, weight: 0, size: 0 });
                      o.count++, (o.weight += n);
                    }
                    return e;
                  })(t),
                  { vBoxMaxWidth: s, hBoxMaxHeight: n } = e;
                let o, a, r;
                for (o = 0, a = t.length; o < a; ++o) {
                  r = t[o];
                  const { fullSize: a } = r.box,
                    l = i[r.stack],
                    h = l && r.stackWeight / l.weight;
                  r.horizontal
                    ? ((r.width = h ? h * s : a && e.availableWidth),
                      (r.height = n))
                    : ((r.width = s),
                      (r.height = h ? h * n : a && e.availableHeight));
                }
                return i;
              })(l.concat(h), d);
            ms(r.fullSize, f, d, g),
              ms(l, f, d, g),
              ms(h, f, d, g) && ms(l, f, d, g),
              (function (t) {
                const e = t.maxPadding;
                function i(i) {
                  const s = Math.max(e[i] - t[i], 0);
                  return (t[i] += s), s;
                }
                (t.y += i("top")), (t.x += i("left")), i("right"), i("bottom");
              })(f),
              xs(r.leftAndTop, f, d, g),
              (f.x += f.w),
              (f.y += f.h),
              xs(r.rightAndBottom, f, d, g),
              (t.chartArea = {
                left: f.left,
                top: f.top,
                right: f.left + f.w,
                bottom: f.top + f.h,
                height: f.h,
                width: f.w,
              }),
              W(r.chartArea, (e) => {
                const i = e.box;
                Object.assign(i, t.chartArea),
                  i.update(f.w, f.h, { left: 0, top: 0, right: 0, bottom: 0 });
              });
          },
        };
        class ys {
          acquireContext(t, e) {}
          releaseContext(t) {
            return !1;
          }
          addEventListener(t, e, i) {}
          removeEventListener(t, e, i) {}
          getDevicePixelRatio() {
            return 1;
          }
          getMaximumSize(t, e, i, s) {
            return (
              (e = Math.max(0, e || t.width)),
              (i = i || t.height),
              { width: e, height: Math.max(0, s ? Math.floor(e / s) : i) }
            );
          }
          isAttached(t) {
            return !0;
          }
          updateConfig(t) {}
        }
        class vs extends ys {
          acquireContext(t) {
            return (t && t.getContext && t.getContext("2d")) || null;
          }
          updateConfig(t) {
            t.options.animation = !1;
          }
        }
        const Ms = {
            touchstart: "mousedown",
            touchmove: "mousemove",
            touchend: "mouseup",
            pointerenter: "mouseenter",
            pointerdown: "mousedown",
            pointermove: "mousemove",
            pointerup: "mouseup",
            pointerleave: "mouseout",
            pointerout: "mouseout",
          },
          ws = (t) => null === t || "" === t,
          ks = !!ni && { passive: !0 };
        function Ss(t, e, i) {
          t.canvas.removeEventListener(e, i, ks);
        }
        function Ps(t, e) {
          for (const i of t) if (i === e || i.contains(e)) return !0;
        }
        function As(t, e, i) {
          const s = t.canvas,
            n = new MutationObserver((t) => {
              let e = !1;
              for (const i of t)
                (e = e || Ps(i.addedNodes, s)),
                  (e = e && !Ps(i.removedNodes, s));
              e && i();
            });
          return n.observe(document, { childList: !0, subtree: !0 }), n;
        }
        function Ds(t, e, i) {
          const s = t.canvas,
            n = new MutationObserver((t) => {
              let e = !1;
              for (const i of t)
                (e = e || Ps(i.removedNodes, s)),
                  (e = e && !Ps(i.addedNodes, s));
              e && i();
            });
          return n.observe(document, { childList: !0, subtree: !0 }), n;
        }
        const Cs = new Map();
        let Os = 0;
        function Ls() {
          const t = window.devicePixelRatio;
          t !== Os &&
            ((Os = t),
            Cs.forEach((e, i) => {
              i.currentDevicePixelRatio !== t && e();
            }));
        }
        function Es(t, e, i) {
          const s = t.canvas,
            n = s && Ze(s);
          if (!n) return;
          const o = Rt((t, e) => {
              const s = n.clientWidth;
              i(t, e), s < n.clientWidth && i();
            }, window),
            a = new ResizeObserver((t) => {
              const e = t[0],
                i = e.contentRect.width,
                s = e.contentRect.height;
              (0 === i && 0 === s) || o(i, s);
            });
          return (
            a.observe(n),
            (function (t, e) {
              Cs.size || window.addEventListener("resize", Ls), Cs.set(t, e);
            })(t, o),
            a
          );
        }
        function Ts(t, e, i) {
          i && i.disconnect(),
            "resize" === e &&
              (function (t) {
                Cs.delete(t),
                  Cs.size || window.removeEventListener("resize", Ls);
              })(t);
        }
        function Rs(t, e, i) {
          const s = t.canvas,
            n = Rt((e) => {
              null !== t.ctx &&
                i(
                  (function (t, e) {
                    const i = Ms[t.type] || t.type,
                      { x: s, y: n } = ei(t, e);
                    return {
                      type: i,
                      chart: e,
                      native: t,
                      x: void 0 !== s ? s : null,
                      y: void 0 !== n ? n : null,
                    };
                  })(e, t)
                );
            }, t);
          return (
            (function (t, e, i) {
              t.addEventListener(e, i, ks);
            })(s, e, n),
            n
          );
        }
        class Is extends ys {
          acquireContext(t, e) {
            const i = t && t.getContext && t.getContext("2d");
            return i && i.canvas === t
              ? ((function (t, e) {
                  const i = t.style,
                    s = t.getAttribute("height"),
                    n = t.getAttribute("width");
                  if (
                    ((t.$chartjs = {
                      initial: {
                        height: s,
                        width: n,
                        style: {
                          display: i.display,
                          height: i.height,
                          width: i.width,
                        },
                      },
                    }),
                    (i.display = i.display || "block"),
                    (i.boxSizing = i.boxSizing || "border-box"),
                    ws(n))
                  ) {
                    const e = oi(t, "width");
                    void 0 !== e && (t.width = e);
                  }
                  if (ws(s))
                    if ("" === t.style.height) t.height = t.width / (e || 2);
                    else {
                      const e = oi(t, "height");
                      void 0 !== e && (t.height = e);
                    }
                })(t, e),
                i)
              : null;
          }
          releaseContext(t) {
            const e = t.canvas;
            if (!e.$chartjs) return !1;
            const i = e.$chartjs.initial;
            ["height", "width"].forEach((t) => {
              const s = i[t];
              I(s) ? e.removeAttribute(t) : e.setAttribute(t, s);
            });
            const s = i.style || {};
            return (
              Object.keys(s).forEach((t) => {
                e.style[t] = s[t];
              }),
              (e.width = e.width),
              delete e.$chartjs,
              !0
            );
          }
          addEventListener(t, e, i) {
            this.removeEventListener(t, e);
            const s = t.$proxies || (t.$proxies = {}),
              n = { attach: As, detach: Ds, resize: Es }[e] || Rs;
            s[e] = n(t, e, i);
          }
          removeEventListener(t, e) {
            const i = t.$proxies || (t.$proxies = {}),
              s = i[e];
            s &&
              (({ attach: Ts, detach: Ts, resize: Ts }[e] || Ss)(t, e, s),
              (i[e] = void 0));
          }
          getDevicePixelRatio() {
            return window.devicePixelRatio;
          }
          getMaximumSize(t, e, i, s) {
            return (function (t, e, i, s) {
              const n = Qe(t),
                o = ti(n, "margin"),
                a = Ge(n.maxWidth, t, "clientWidth") || at,
                r = Ge(n.maxHeight, t, "clientHeight") || at,
                l = (function (t, e, i) {
                  let s, n;
                  if (void 0 === e || void 0 === i) {
                    const o = Ze(t);
                    if (o) {
                      const t = o.getBoundingClientRect(),
                        a = Qe(o),
                        r = ti(a, "border", "width"),
                        l = ti(a, "padding");
                      (e = t.width - l.width - r.width),
                        (i = t.height - l.height - r.height),
                        (s = Ge(a.maxWidth, o, "clientWidth")),
                        (n = Ge(a.maxHeight, o, "clientHeight"));
                    } else (e = t.clientWidth), (i = t.clientHeight);
                  }
                  return {
                    width: e,
                    height: i,
                    maxWidth: s || at,
                    maxHeight: n || at,
                  };
                })(t, e, i);
              let { width: h, height: c } = l;
              if ("content-box" === n.boxSizing) {
                const t = ti(n, "border", "width"),
                  e = ti(n, "padding");
                (h -= e.width + t.width), (c -= e.height + t.height);
              }
              return (
                (h = Math.max(0, h - o.width)),
                (c = Math.max(0, s ? h / s : c - o.height)),
                (h = ii(Math.min(h, a, l.maxWidth))),
                (c = ii(Math.min(c, r, l.maxHeight))),
                h && !c && (c = ii(h / 2)),
                (void 0 !== e || void 0 !== i) &&
                  s &&
                  l.height &&
                  c > l.height &&
                  ((c = l.height), (h = ii(Math.floor(c * s)))),
                { width: h, height: c }
              );
            })(t, e, i, s);
          }
          isAttached(t) {
            const e = Ze(t);
            return !(!e || !e.isConnected);
          }
        }
        function zs(t) {
          return !Ke() ||
            ("undefined" != typeof OffscreenCanvas &&
              t instanceof OffscreenCanvas)
            ? vs
            : Is;
        }
        class Fs {
          static defaults = {};
          static defaultRoutes = void 0;
          active = !1;
          tooltipPosition(t) {
            const { x: e, y: i } = this.getProps(["x", "y"], t);
            return { x: e, y: i };
          }
          hasValue() {
            return pt(this.x) && pt(this.y);
          }
          getProps(t, e) {
            const i = this.$animations;
            if (!e || !i) return this;
            const s = {};
            return (
              t.forEach((t) => {
                s[t] = i[t] && i[t].active() ? i[t]._to : this[t];
              }),
              s
            );
          }
        }
        function Vs(t, e, i, s, n) {
          const o = B(s, 0),
            a = Math.min(B(n, t.length), t.length);
          let r,
            l,
            h,
            c = 0;
          for (
            i = Math.ceil(i),
              n && ((r = n - s), (i = r / Math.floor(r / i))),
              h = o;
            h < 0;

          )
            c++, (h = Math.round(o + c * i));
          for (l = Math.max(o, 0); l < a; l++)
            l === h && (e.push(t[l]), c++, (h = Math.round(o + c * i)));
        }
        const js = (t, e, i) =>
          "top" === e || "left" === e ? t[e] + i : t[e] - i;
        function Bs(t, e) {
          const i = [],
            s = t.length / e,
            n = t.length;
          let o = 0;
          for (; o < n; o += s) i.push(t[Math.floor(o)]);
          return i;
        }
        function Ns(t, e, i) {
          const s = t.ticks.length,
            n = Math.min(e, s - 1),
            o = t._startPixel,
            a = t._endPixel,
            r = 1e-6;
          let l,
            h = t.getPixelForTick(n);
          if (
            !(
              i &&
              ((l =
                1 === s
                  ? Math.max(h - o, a - h)
                  : 0 === e
                  ? (t.getPixelForTick(1) - h) / 2
                  : (h - t.getPixelForTick(n - 1)) / 2),
              (h += n < e ? l : -l),
              h < o - r || h > a + r)
            )
          )
            return h;
        }
        function Hs(t) {
          return t.drawTicks ? t.tickLength : 0;
        }
        function Ws(t, e) {
          if (!t.display) return 0;
          const i = Pe(t.font, e),
            s = Se(t.padding);
          return (z(t.text) ? t.text.length : 1) * i.lineHeight + s.height;
        }
        function $s(t, e, i) {
          let s = It(t);
          return (
            ((i && "right" !== e) || (!i && "right" === e)) &&
              (s = ((t) =>
                "left" === t ? "right" : "right" === t ? "left" : t)(s)),
            s
          );
        }
        class Ys extends Fs {
          constructor(t) {
            super(),
              (this.id = t.id),
              (this.type = t.type),
              (this.options = void 0),
              (this.ctx = t.ctx),
              (this.chart = t.chart),
              (this.top = void 0),
              (this.bottom = void 0),
              (this.left = void 0),
              (this.right = void 0),
              (this.width = void 0),
              (this.height = void 0),
              (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
              (this.maxWidth = void 0),
              (this.maxHeight = void 0),
              (this.paddingTop = void 0),
              (this.paddingBottom = void 0),
              (this.paddingLeft = void 0),
              (this.paddingRight = void 0),
              (this.axis = void 0),
              (this.labelRotation = void 0),
              (this.min = void 0),
              (this.max = void 0),
              (this._range = void 0),
              (this.ticks = []),
              (this._gridLineItems = null),
              (this._labelItems = null),
              (this._labelSizes = null),
              (this._length = 0),
              (this._maxLength = 0),
              (this._longestTextCache = {}),
              (this._startPixel = void 0),
              (this._endPixel = void 0),
              (this._reversePixels = !1),
              (this._userMax = void 0),
              (this._userMin = void 0),
              (this._suggestedMax = void 0),
              (this._suggestedMin = void 0),
              (this._ticksLength = 0),
              (this._borderValue = 0),
              (this._cache = {}),
              (this._dataLimitsCached = !1),
              (this.$context = void 0);
          }
          init(t) {
            (this.options = t.setContext(this.getContext())),
              (this.axis = t.axis),
              (this._userMin = this.parse(t.min)),
              (this._userMax = this.parse(t.max)),
              (this._suggestedMin = this.parse(t.suggestedMin)),
              (this._suggestedMax = this.parse(t.suggestedMax));
          }
          parse(t, e) {
            return t;
          }
          getUserBounds() {
            let {
              _userMin: t,
              _userMax: e,
              _suggestedMin: i,
              _suggestedMax: s,
            } = this;
            return (
              (t = j(t, Number.POSITIVE_INFINITY)),
              (e = j(e, Number.NEGATIVE_INFINITY)),
              (i = j(i, Number.POSITIVE_INFINITY)),
              (s = j(s, Number.NEGATIVE_INFINITY)),
              { min: j(t, i), max: j(e, s), minDefined: V(t), maxDefined: V(e) }
            );
          }
          getMinMax(t) {
            let e,
              {
                min: i,
                max: s,
                minDefined: n,
                maxDefined: o,
              } = this.getUserBounds();
            if (n && o) return { min: i, max: s };
            const a = this.getMatchingVisibleMetas();
            for (let r = 0, l = a.length; r < l; ++r)
              (e = a[r].controller.getMinMax(this, t)),
                n || (i = Math.min(i, e.min)),
                o || (s = Math.max(s, e.max));
            return (
              (i = o && i > s ? s : i),
              (s = n && i > s ? i : s),
              { min: j(i, j(s, i)), max: j(s, j(i, s)) }
            );
          }
          getPadding() {
            return {
              left: this.paddingLeft || 0,
              top: this.paddingTop || 0,
              right: this.paddingRight || 0,
              bottom: this.paddingBottom || 0,
            };
          }
          getTicks() {
            return this.ticks;
          }
          getLabels() {
            const t = this.chart.data;
            return (
              this.options.labels ||
              (this.isHorizontal() ? t.xLabels : t.yLabels) ||
              t.labels ||
              []
            );
          }
          getLabelItems(t = this.chart.chartArea) {
            return (
              this._labelItems ||
              (this._labelItems = this._computeLabelItems(t))
            );
          }
          beforeLayout() {
            (this._cache = {}), (this._dataLimitsCached = !1);
          }
          beforeUpdate() {
            H(this.options.beforeUpdate, [this]);
          }
          update(t, e, i) {
            const { beginAtZero: s, grace: n, ticks: o } = this.options,
              a = o.sampleSize;
            this.beforeUpdate(),
              (this.maxWidth = t),
              (this.maxHeight = e),
              (this._margins = i =
                Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, i)),
              (this.ticks = null),
              (this._labelSizes = null),
              (this._gridLineItems = null),
              (this._labelItems = null),
              this.beforeSetDimensions(),
              this.setDimensions(),
              this.afterSetDimensions(),
              (this._maxLength = this.isHorizontal()
                ? this.width + i.left + i.right
                : this.height + i.top + i.bottom),
              this._dataLimitsCached ||
                (this.beforeDataLimits(),
                this.determineDataLimits(),
                this.afterDataLimits(),
                (this._range = (function (t, e, i) {
                  const { min: s, max: n } = t,
                    o = N(e, (n - s) / 2),
                    a = (t, e) => (i && 0 === t ? 0 : t + e);
                  return { min: a(s, -Math.abs(o)), max: a(n, o) };
                })(this, n, s)),
                (this._dataLimitsCached = !0)),
              this.beforeBuildTicks(),
              (this.ticks = this.buildTicks() || []),
              this.afterBuildTicks();
            const r = a < this.ticks.length;
            this._convertTicksToLabels(r ? Bs(this.ticks, a) : this.ticks),
              this.configure(),
              this.beforeCalculateLabelRotation(),
              this.calculateLabelRotation(),
              this.afterCalculateLabelRotation(),
              o.display &&
                (o.autoSkip || "auto" === o.source) &&
                ((this.ticks = (function (t, e) {
                  const i = t.options.ticks,
                    s = (function (t) {
                      const e = t.options.offset,
                        i = t._tickSize(),
                        s = t._length / i + (e ? 0 : 1),
                        n = t._maxLength / i;
                      return Math.floor(Math.min(s, n));
                    })(t),
                    n = Math.min(i.maxTicksLimit || s, s),
                    o = i.major.enabled
                      ? (function (t) {
                          const e = [];
                          let i, s;
                          for (i = 0, s = t.length; i < s; i++)
                            t[i].major && e.push(i);
                          return e;
                        })(e)
                      : [],
                    a = o.length,
                    r = o[0],
                    l = o[a - 1],
                    h = [];
                  if (a > n)
                    return (
                      (function (t, e, i, s) {
                        let n,
                          o = 0,
                          a = i[0];
                        for (s = Math.ceil(s), n = 0; n < t.length; n++)
                          n === a && (e.push(t[n]), o++, (a = i[o * s]));
                      })(e, h, o, a / n),
                      h
                    );
                  const c = (function (t, e, i) {
                    const s = (function (t) {
                        const e = t.length;
                        let i, s;
                        if (e < 2) return !1;
                        for (s = t[0], i = 1; i < e; ++i)
                          if (t[i] - t[i - 1] !== s) return !1;
                        return s;
                      })(t),
                      n = e.length / i;
                    if (!s) return Math.max(n, 1);
                    const o = (function (t) {
                      const e = [],
                        i = Math.sqrt(t);
                      let s;
                      for (s = 1; s < i; s++)
                        t % s == 0 && (e.push(s), e.push(t / s));
                      return (
                        i === (0 | i) && e.push(i),
                        e.sort((t, e) => t - e).pop(),
                        e
                      );
                    })(s);
                    for (let t = 0, e = o.length - 1; t < e; t++) {
                      const e = o[t];
                      if (e > n) return e;
                    }
                    return Math.max(n, 1);
                  })(o, e, n);
                  if (a > 0) {
                    let t, i;
                    const s = a > 1 ? Math.round((l - r) / (a - 1)) : null;
                    for (
                      Vs(e, h, c, I(s) ? 0 : r - s, r), t = 0, i = a - 1;
                      t < i;
                      t++
                    )
                      Vs(e, h, c, o[t], o[t + 1]);
                    return Vs(e, h, c, l, I(s) ? e.length : l + s), h;
                  }
                  return Vs(e, h, c), h;
                })(this, this.ticks)),
                (this._labelSizes = null),
                this.afterAutoSkip()),
              r && this._convertTicksToLabels(this.ticks),
              this.beforeFit(),
              this.fit(),
              this.afterFit(),
              this.afterUpdate();
          }
          configure() {
            let t,
              e,
              i = this.options.reverse;
            this.isHorizontal()
              ? ((t = this.left), (e = this.right))
              : ((t = this.top), (e = this.bottom), (i = !i)),
              (this._startPixel = t),
              (this._endPixel = e),
              (this._reversePixels = i),
              (this._length = e - t),
              (this._alignToPixels = this.options.alignToPixels);
          }
          afterUpdate() {
            H(this.options.afterUpdate, [this]);
          }
          beforeSetDimensions() {
            H(this.options.beforeSetDimensions, [this]);
          }
          setDimensions() {
            this.isHorizontal()
              ? ((this.width = this.maxWidth),
                (this.left = 0),
                (this.right = this.width))
              : ((this.height = this.maxHeight),
                (this.top = 0),
                (this.bottom = this.height)),
              (this.paddingLeft = 0),
              (this.paddingTop = 0),
              (this.paddingRight = 0),
              (this.paddingBottom = 0);
          }
          afterSetDimensions() {
            H(this.options.afterSetDimensions, [this]);
          }
          _callHooks(t) {
            this.chart.notifyPlugins(t, this.getContext()),
              H(this.options[t], [this]);
          }
          beforeDataLimits() {
            this._callHooks("beforeDataLimits");
          }
          determineDataLimits() {}
          afterDataLimits() {
            this._callHooks("afterDataLimits");
          }
          beforeBuildTicks() {
            this._callHooks("beforeBuildTicks");
          }
          buildTicks() {
            return [];
          }
          afterBuildTicks() {
            this._callHooks("afterBuildTicks");
          }
          beforeTickToLabelConversion() {
            H(this.options.beforeTickToLabelConversion, [this]);
          }
          generateTickLabels(t) {
            const e = this.options.ticks;
            let i, s, n;
            for (i = 0, s = t.length; i < s; i++)
              (n = t[i]), (n.label = H(e.callback, [n.value, i, t], this));
          }
          afterTickToLabelConversion() {
            H(this.options.afterTickToLabelConversion, [this]);
          }
          beforeCalculateLabelRotation() {
            H(this.options.beforeCalculateLabelRotation, [this]);
          }
          calculateLabelRotation() {
            const t = this.options,
              e = t.ticks,
              i = this.ticks.length,
              s = e.minRotation || 0,
              n = e.maxRotation;
            let o,
              a,
              r,
              l = s;
            if (
              !this._isVisible() ||
              !e.display ||
              s >= n ||
              i <= 1 ||
              !this.isHorizontal()
            )
              return void (this.labelRotation = s);
            const h = this._getLabelSizes(),
              c = h.widest.width,
              d = h.highest.height,
              u = St(this.chart.width - c, 0, this.maxWidth);
            (o = t.offset ? this.maxWidth / i : u / (i - 1)),
              c + 6 > o &&
                ((o = u / (i - (t.offset ? 0.5 : 1))),
                (a =
                  this.maxHeight -
                  Hs(t.grid) -
                  e.padding -
                  Ws(t.title, this.chart.options.font)),
                (r = Math.sqrt(c * c + d * d)),
                (l = xt(
                  Math.min(
                    Math.asin(St((h.highest.height + 6) / o, -1, 1)),
                    Math.asin(St(a / r, -1, 1)) - Math.asin(St(d / r, -1, 1))
                  )
                )),
                (l = Math.max(s, Math.min(n, l)))),
              (this.labelRotation = l);
          }
          afterCalculateLabelRotation() {
            H(this.options.afterCalculateLabelRotation, [this]);
          }
          afterAutoSkip() {}
          beforeFit() {
            H(this.options.beforeFit, [this]);
          }
          fit() {
            const t = { width: 0, height: 0 },
              {
                chart: e,
                options: { ticks: i, title: s, grid: n },
              } = this,
              o = this._isVisible(),
              a = this.isHorizontal();
            if (o) {
              const o = Ws(s, e.options.font);
              if (
                (a
                  ? ((t.width = this.maxWidth), (t.height = Hs(n) + o))
                  : ((t.height = this.maxHeight), (t.width = Hs(n) + o)),
                i.display && this.ticks.length)
              ) {
                const {
                    first: e,
                    last: s,
                    widest: n,
                    highest: o,
                  } = this._getLabelSizes(),
                  r = 2 * i.padding,
                  l = bt(this.labelRotation),
                  h = Math.cos(l),
                  c = Math.sin(l);
                if (a) {
                  const e = i.mirror ? 0 : c * n.width + h * o.height;
                  t.height = Math.min(this.maxHeight, t.height + e + r);
                } else {
                  const e = i.mirror ? 0 : h * n.width + c * o.height;
                  t.width = Math.min(this.maxWidth, t.width + e + r);
                }
                this._calculatePadding(e, s, c, h);
              }
            }
            this._handleMargins(),
              a
                ? ((this.width = this._length =
                    e.width - this._margins.left - this._margins.right),
                  (this.height = t.height))
                : ((this.width = t.width),
                  (this.height = this._length =
                    e.height - this._margins.top - this._margins.bottom));
          }
          _calculatePadding(t, e, i, s) {
            const {
                ticks: { align: n, padding: o },
                position: a,
              } = this.options,
              r = 0 !== this.labelRotation,
              l = "top" !== a && "x" === this.axis;
            if (this.isHorizontal()) {
              const a = this.getPixelForTick(0) - this.left,
                h = this.right - this.getPixelForTick(this.ticks.length - 1);
              let c = 0,
                d = 0;
              r
                ? l
                  ? ((c = s * t.width), (d = i * e.height))
                  : ((c = i * t.height), (d = s * e.width))
                : "start" === n
                ? (d = e.width)
                : "end" === n
                ? (c = t.width)
                : "inner" !== n && ((c = t.width / 2), (d = e.width / 2)),
                (this.paddingLeft = Math.max(
                  ((c - a + o) * this.width) / (this.width - a),
                  0
                )),
                (this.paddingRight = Math.max(
                  ((d - h + o) * this.width) / (this.width - h),
                  0
                ));
            } else {
              let i = e.height / 2,
                s = t.height / 2;
              "start" === n
                ? ((i = 0), (s = t.height))
                : "end" === n && ((i = e.height), (s = 0)),
                (this.paddingTop = i + o),
                (this.paddingBottom = s + o);
            }
          }
          _handleMargins() {
            this._margins &&
              ((this._margins.left = Math.max(
                this.paddingLeft,
                this._margins.left
              )),
              (this._margins.top = Math.max(
                this.paddingTop,
                this._margins.top
              )),
              (this._margins.right = Math.max(
                this.paddingRight,
                this._margins.right
              )),
              (this._margins.bottom = Math.max(
                this.paddingBottom,
                this._margins.bottom
              )));
          }
          afterFit() {
            H(this.options.afterFit, [this]);
          }
          isHorizontal() {
            const { axis: t, position: e } = this.options;
            return "top" === e || "bottom" === e || "x" === t;
          }
          isFullSize() {
            return this.options.fullSize;
          }
          _convertTicksToLabels(t) {
            let e, i;
            for (
              this.beforeTickToLabelConversion(),
                this.generateTickLabels(t),
                e = 0,
                i = t.length;
              e < i;
              e++
            )
              I(t[e].label) && (t.splice(e, 1), i--, e--);
            this.afterTickToLabelConversion();
          }
          _getLabelSizes() {
            let t = this._labelSizes;
            if (!t) {
              const e = this.options.ticks.sampleSize;
              let i = this.ticks;
              e < i.length && (i = Bs(i, e)),
                (this._labelSizes = t = this._computeLabelSizes(i, i.length));
            }
            return t;
          }
          _computeLabelSizes(t, e) {
            const { ctx: i, _longestTextCache: s } = this,
              n = [],
              o = [];
            let a,
              r,
              l,
              h,
              c,
              d,
              u,
              f,
              g,
              p,
              m,
              b = 0,
              x = 0;
            for (a = 0; a < e; ++a) {
              if (
                ((h = t[a].label),
                (c = this._resolveTickFontOptions(a)),
                (i.font = d = c.string),
                (u = s[d] = s[d] || { data: {}, gc: [] }),
                (f = c.lineHeight),
                (g = p = 0),
                I(h) || z(h))
              ) {
                if (z(h))
                  for (r = 0, l = h.length; r < l; ++r)
                    (m = h[r]),
                      I(m) ||
                        z(m) ||
                        ((g = ne(i, u.data, u.gc, g, m)), (p += f));
              } else (g = ne(i, u.data, u.gc, g, h)), (p = f);
              n.push(g), o.push(p), (b = Math.max(g, b)), (x = Math.max(p, x));
            }
            !(function (t, e) {
              W(t, (t) => {
                const i = t.gc,
                  s = i.length / 2;
                let n;
                if (s > e) {
                  for (n = 0; n < s; ++n) delete t.data[i[n]];
                  i.splice(0, s);
                }
              });
            })(s, e);
            const _ = n.indexOf(b),
              y = o.indexOf(x),
              v = (t) => ({ width: n[t] || 0, height: o[t] || 0 });
            return {
              first: v(0),
              last: v(e - 1),
              widest: v(_),
              highest: v(y),
              widths: n,
              heights: o,
            };
          }
          getLabelForValue(t) {
            return t;
          }
          getPixelForValue(t, e) {
            return NaN;
          }
          getValueForPixel(t) {}
          getPixelForTick(t) {
            const e = this.ticks;
            return t < 0 || t > e.length - 1
              ? null
              : this.getPixelForValue(e[t].value);
          }
          getPixelForDecimal(t) {
            this._reversePixels && (t = 1 - t);
            const e = this._startPixel + t * this._length;
            return St(
              this._alignToPixels ? ae(this.chart, e, 0) : e,
              -32768,
              32767
            );
          }
          getDecimalForPixel(t) {
            const e = (t - this._startPixel) / this._length;
            return this._reversePixels ? 1 - e : e;
          }
          getBasePixel() {
            return this.getPixelForValue(this.getBaseValue());
          }
          getBaseValue() {
            const { min: t, max: e } = this;
            return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
          }
          getContext(t) {
            const e = this.ticks || [];
            if (t >= 0 && t < e.length) {
              const i = e[t];
              return (
                i.$context ||
                (i.$context = (function (t, e, i) {
                  return De(t, { tick: i, index: e, type: "tick" });
                })(this.getContext(), t, i))
              );
            }
            return (
              this.$context ||
              (this.$context = De(this.chart.getContext(), {
                scale: this,
                type: "scale",
              }))
            );
          }
          _tickSize() {
            const t = this.options.ticks,
              e = bt(this.labelRotation),
              i = Math.abs(Math.cos(e)),
              s = Math.abs(Math.sin(e)),
              n = this._getLabelSizes(),
              o = t.autoSkipPadding || 0,
              a = n ? n.widest.width + o : 0,
              r = n ? n.highest.height + o : 0;
            return this.isHorizontal()
              ? r * i > a * s
                ? a / i
                : r / s
              : r * s < a * i
              ? r / i
              : a / s;
          }
          _isVisible() {
            const t = this.options.display;
            return "auto" !== t
              ? !!t
              : this.getMatchingVisibleMetas().length > 0;
          }
          _computeGridLineItems(t) {
            const e = this.axis,
              i = this.chart,
              s = this.options,
              { grid: n, position: o, border: a } = s,
              r = n.offset,
              l = this.isHorizontal(),
              h = this.ticks.length + (r ? 1 : 0),
              c = Hs(n),
              d = [],
              u = a.setContext(this.getContext()),
              f = u.display ? u.width : 0,
              g = f / 2,
              p = function (t) {
                return ae(i, t, f);
              };
            let m, b, x, _, y, v, M, w, k, S, P, A;
            if ("top" === o)
              (m = p(this.bottom)),
                (v = this.bottom - c),
                (w = m - g),
                (S = p(t.top) + g),
                (A = t.bottom);
            else if ("bottom" === o)
              (m = p(this.top)),
                (S = t.top),
                (A = p(t.bottom) - g),
                (v = m + g),
                (w = this.top + c);
            else if ("left" === o)
              (m = p(this.right)),
                (y = this.right - c),
                (M = m - g),
                (k = p(t.left) + g),
                (P = t.right);
            else if ("right" === o)
              (m = p(this.left)),
                (k = t.left),
                (P = p(t.right) - g),
                (y = m + g),
                (M = this.left + c);
            else if ("x" === e) {
              if ("center" === o) m = p((t.top + t.bottom) / 2 + 0.5);
              else if (F(o)) {
                const t = Object.keys(o)[0],
                  e = o[t];
                m = p(this.chart.scales[t].getPixelForValue(e));
              }
              (S = t.top), (A = t.bottom), (v = m + g), (w = v + c);
            } else if ("y" === e) {
              if ("center" === o) m = p((t.left + t.right) / 2);
              else if (F(o)) {
                const t = Object.keys(o)[0],
                  e = o[t];
                m = p(this.chart.scales[t].getPixelForValue(e));
              }
              (y = m - g), (M = y - c), (k = t.left), (P = t.right);
            }
            const D = B(s.ticks.maxTicksLimit, h),
              C = Math.max(1, Math.ceil(h / D));
            for (b = 0; b < h; b += C) {
              const t = this.getContext(b),
                e = n.setContext(t),
                s = a.setContext(t),
                o = e.lineWidth,
                h = e.color,
                c = s.dash || [],
                u = s.dashOffset,
                f = e.tickWidth,
                g = e.tickColor,
                p = e.tickBorderDash || [],
                m = e.tickBorderDashOffset;
              (x = Ns(this, b, r)),
                void 0 !== x &&
                  ((_ = ae(i, x, o)),
                  l ? (y = M = k = P = _) : (v = w = S = A = _),
                  d.push({
                    tx1: y,
                    ty1: v,
                    tx2: M,
                    ty2: w,
                    x1: k,
                    y1: S,
                    x2: P,
                    y2: A,
                    width: o,
                    color: h,
                    borderDash: c,
                    borderDashOffset: u,
                    tickWidth: f,
                    tickColor: g,
                    tickBorderDash: p,
                    tickBorderDashOffset: m,
                  }));
            }
            return (this._ticksLength = h), (this._borderValue = m), d;
          }
          _computeLabelItems(t) {
            const e = this.axis,
              i = this.options,
              { position: s, ticks: n } = i,
              o = this.isHorizontal(),
              a = this.ticks,
              { align: r, crossAlign: l, padding: h, mirror: c } = n,
              d = Hs(i.grid),
              u = d + h,
              f = c ? -h : u,
              g = -bt(this.labelRotation),
              p = [];
            let m,
              b,
              x,
              _,
              y,
              v,
              M,
              w,
              k,
              S,
              P,
              A,
              D = "middle";
            if ("top" === s)
              (v = this.bottom - f), (M = this._getXAxisLabelAlignment());
            else if ("bottom" === s)
              (v = this.top + f), (M = this._getXAxisLabelAlignment());
            else if ("left" === s) {
              const t = this._getYAxisLabelAlignment(d);
              (M = t.textAlign), (y = t.x);
            } else if ("right" === s) {
              const t = this._getYAxisLabelAlignment(d);
              (M = t.textAlign), (y = t.x);
            } else if ("x" === e) {
              if ("center" === s) v = (t.top + t.bottom) / 2 + u;
              else if (F(s)) {
                const t = Object.keys(s)[0],
                  e = s[t];
                v = this.chart.scales[t].getPixelForValue(e) + u;
              }
              M = this._getXAxisLabelAlignment();
            } else if ("y" === e) {
              if ("center" === s) y = (t.left + t.right) / 2 - u;
              else if (F(s)) {
                const t = Object.keys(s)[0],
                  e = s[t];
                y = this.chart.scales[t].getPixelForValue(e);
              }
              M = this._getYAxisLabelAlignment(d).textAlign;
            }
            "y" === e &&
              ("start" === r ? (D = "top") : "end" === r && (D = "bottom"));
            const C = this._getLabelSizes();
            for (m = 0, b = a.length; m < b; ++m) {
              (x = a[m]), (_ = x.label);
              const t = n.setContext(this.getContext(m));
              (w = this.getPixelForTick(m) + n.labelOffset),
                (k = this._resolveTickFontOptions(m)),
                (S = k.lineHeight),
                (P = z(_) ? _.length : 1);
              const e = P / 2,
                i = t.color,
                r = t.textStrokeColor,
                h = t.textStrokeWidth;
              let d,
                u = M;
              if (
                (o
                  ? ((y = w),
                    "inner" === M &&
                      (u =
                        m === b - 1
                          ? this.options.reverse
                            ? "left"
                            : "right"
                          : 0 === m
                          ? this.options.reverse
                            ? "right"
                            : "left"
                          : "center"),
                    (A =
                      "top" === s
                        ? "near" === l || 0 !== g
                          ? -P * S + S / 2
                          : "center" === l
                          ? -C.highest.height / 2 - e * S + S
                          : -C.highest.height + S / 2
                        : "near" === l || 0 !== g
                        ? S / 2
                        : "center" === l
                        ? C.highest.height / 2 - e * S
                        : C.highest.height - P * S),
                    c && (A *= -1),
                    0 === g ||
                      t.showLabelBackdrop ||
                      (y += (S / 2) * Math.sin(g)))
                  : ((v = w), (A = ((1 - P) * S) / 2)),
                t.showLabelBackdrop)
              ) {
                const e = Se(t.backdropPadding),
                  i = C.heights[m],
                  s = C.widths[m];
                let n = A - e.top,
                  o = 0 - e.left;
                switch (D) {
                  case "middle":
                    n -= i / 2;
                    break;
                  case "bottom":
                    n -= i;
                }
                switch (M) {
                  case "center":
                    o -= s / 2;
                    break;
                  case "right":
                    o -= s;
                }
                d = {
                  left: o,
                  top: n,
                  width: s + e.width,
                  height: i + e.height,
                  color: t.backdropColor,
                };
              }
              p.push({
                label: _,
                font: k,
                textOffset: A,
                options: {
                  rotation: g,
                  color: i,
                  strokeColor: r,
                  strokeWidth: h,
                  textAlign: u,
                  textBaseline: D,
                  translation: [y, v],
                  backdrop: d,
                },
              });
            }
            return p;
          }
          _getXAxisLabelAlignment() {
            const { position: t, ticks: e } = this.options;
            if (-bt(this.labelRotation)) return "top" === t ? "left" : "right";
            let i = "center";
            return (
              "start" === e.align
                ? (i = "left")
                : "end" === e.align
                ? (i = "right")
                : "inner" === e.align && (i = "inner"),
              i
            );
          }
          _getYAxisLabelAlignment(t) {
            const {
                position: e,
                ticks: { crossAlign: i, mirror: s, padding: n },
              } = this.options,
              o = t + n,
              a = this._getLabelSizes().widest.width;
            let r, l;
            return (
              "left" === e
                ? s
                  ? ((l = this.right + n),
                    "near" === i
                      ? (r = "left")
                      : "center" === i
                      ? ((r = "center"), (l += a / 2))
                      : ((r = "right"), (l += a)))
                  : ((l = this.right - o),
                    "near" === i
                      ? (r = "right")
                      : "center" === i
                      ? ((r = "center"), (l -= a / 2))
                      : ((r = "left"), (l = this.left)))
                : "right" === e
                ? s
                  ? ((l = this.left + n),
                    "near" === i
                      ? (r = "right")
                      : "center" === i
                      ? ((r = "center"), (l -= a / 2))
                      : ((r = "left"), (l -= a)))
                  : ((l = this.left + o),
                    "near" === i
                      ? (r = "left")
                      : "center" === i
                      ? ((r = "center"), (l += a / 2))
                      : ((r = "right"), (l = this.right)))
                : (r = "right"),
              { textAlign: r, x: l }
            );
          }
          _computeLabelArea() {
            if (this.options.ticks.mirror) return;
            const t = this.chart,
              e = this.options.position;
            return "left" === e || "right" === e
              ? { top: 0, left: this.left, bottom: t.height, right: this.right }
              : "top" === e || "bottom" === e
              ? { top: this.top, left: 0, bottom: this.bottom, right: t.width }
              : void 0;
          }
          drawBackground() {
            const {
              ctx: t,
              options: { backgroundColor: e },
              left: i,
              top: s,
              width: n,
              height: o,
            } = this;
            e &&
              (t.save(),
              (t.fillStyle = e),
              t.fillRect(i, s, n, o),
              t.restore());
          }
          getLineWidthForValue(t) {
            const e = this.options.grid;
            if (!this._isVisible() || !e.display) return 0;
            const i = this.ticks.findIndex((e) => e.value === t);
            return i >= 0 ? e.setContext(this.getContext(i)).lineWidth : 0;
          }
          drawGrid(t) {
            const e = this.options.grid,
              i = this.ctx,
              s =
                this._gridLineItems ||
                (this._gridLineItems = this._computeGridLineItems(t));
            let n, o;
            const a = (t, e, s) => {
              s.width &&
                s.color &&
                (i.save(),
                (i.lineWidth = s.width),
                (i.strokeStyle = s.color),
                i.setLineDash(s.borderDash || []),
                (i.lineDashOffset = s.borderDashOffset),
                i.beginPath(),
                i.moveTo(t.x, t.y),
                i.lineTo(e.x, e.y),
                i.stroke(),
                i.restore());
            };
            if (e.display)
              for (n = 0, o = s.length; n < o; ++n) {
                const t = s[n];
                e.drawOnChartArea &&
                  a({ x: t.x1, y: t.y1 }, { x: t.x2, y: t.y2 }, t),
                  e.drawTicks &&
                    a(
                      { x: t.tx1, y: t.ty1 },
                      { x: t.tx2, y: t.ty2 },
                      {
                        color: t.tickColor,
                        width: t.tickWidth,
                        borderDash: t.tickBorderDash,
                        borderDashOffset: t.tickBorderDashOffset,
                      }
                    );
              }
          }
          drawBorder() {
            const {
                chart: t,
                ctx: e,
                options: { border: i, grid: s },
              } = this,
              n = i.setContext(this.getContext()),
              o = i.display ? n.width : 0;
            if (!o) return;
            const a = s.setContext(this.getContext(0)).lineWidth,
              r = this._borderValue;
            let l, h, c, d;
            this.isHorizontal()
              ? ((l = ae(t, this.left, o) - o / 2),
                (h = ae(t, this.right, a) + a / 2),
                (c = d = r))
              : ((c = ae(t, this.top, o) - o / 2),
                (d = ae(t, this.bottom, a) + a / 2),
                (l = h = r)),
              e.save(),
              (e.lineWidth = n.width),
              (e.strokeStyle = n.color),
              e.beginPath(),
              e.moveTo(l, c),
              e.lineTo(h, d),
              e.stroke(),
              e.restore();
          }
          drawLabels(t) {
            if (!this.options.ticks.display) return;
            const e = this.ctx,
              i = this._computeLabelArea();
            i && de(e, i);
            const s = this.getLabelItems(t);
            for (const t of s) {
              const i = t.options,
                s = t.font;
              pe(e, t.label, 0, t.textOffset, s, i);
            }
            i && ue(e);
          }
          drawTitle() {
            const {
              ctx: t,
              options: { position: e, title: i, reverse: s },
            } = this;
            if (!i.display) return;
            const n = Pe(i.font),
              o = Se(i.padding),
              a = i.align;
            let r = n.lineHeight / 2;
            "bottom" === e || "center" === e || F(e)
              ? ((r += o.bottom),
                z(i.text) && (r += n.lineHeight * (i.text.length - 1)))
              : (r += o.top);
            const {
              titleX: l,
              titleY: h,
              maxWidth: c,
              rotation: d,
            } = (function (t, e, i, s) {
              const { top: n, left: o, bottom: a, right: r, chart: l } = t,
                { chartArea: h, scales: c } = l;
              let d,
                u,
                f,
                g = 0;
              const p = a - n,
                m = r - o;
              if (t.isHorizontal()) {
                if (((u = zt(s, o, r)), F(i))) {
                  const t = Object.keys(i)[0],
                    s = i[t];
                  f = c[t].getPixelForValue(s) + p - e;
                } else
                  f =
                    "center" === i
                      ? (h.bottom + h.top) / 2 + p - e
                      : js(t, i, e);
                d = r - o;
              } else {
                if (F(i)) {
                  const t = Object.keys(i)[0],
                    s = i[t];
                  u = c[t].getPixelForValue(s) - m + e;
                } else
                  u =
                    "center" === i
                      ? (h.left + h.right) / 2 - m + e
                      : js(t, i, e);
                (f = zt(s, a, n)), (g = "left" === i ? -lt : lt);
              }
              return { titleX: u, titleY: f, maxWidth: d, rotation: g };
            })(this, r, e, a);
            pe(t, i.text, 0, 0, n, {
              color: i.color,
              maxWidth: c,
              rotation: d,
              textAlign: $s(a, e, s),
              textBaseline: "middle",
              translation: [l, h],
            });
          }
          draw(t) {
            this._isVisible() &&
              (this.drawBackground(),
              this.drawGrid(t),
              this.drawBorder(),
              this.drawTitle(),
              this.drawLabels(t));
          }
          _layers() {
            const t = this.options,
              e = (t.ticks && t.ticks.z) || 0,
              i = B(t.grid && t.grid.z, -1),
              s = B(t.border && t.border.z, 0);
            return this._isVisible() && this.draw === Ys.prototype.draw
              ? [
                  {
                    z: i,
                    draw: (t) => {
                      this.drawBackground(), this.drawGrid(t), this.drawTitle();
                    },
                  },
                  {
                    z: s,
                    draw: () => {
                      this.drawBorder();
                    },
                  },
                  {
                    z: e,
                    draw: (t) => {
                      this.drawLabels(t);
                    },
                  },
                ]
              : [
                  {
                    z: e,
                    draw: (t) => {
                      this.draw(t);
                    },
                  },
                ];
          }
          getMatchingVisibleMetas(t) {
            const e = this.chart.getSortedVisibleDatasetMetas(),
              i = this.axis + "AxisID",
              s = [];
            let n, o;
            for (n = 0, o = e.length; n < o; ++n) {
              const o = e[n];
              o[i] !== this.id || (t && o.type !== t) || s.push(o);
            }
            return s;
          }
          _resolveTickFontOptions(t) {
            return Pe(this.options.ticks.setContext(this.getContext(t)).font);
          }
          _maxDigits() {
            const t = this._resolveTickFontOptions(0).lineHeight;
            return (this.isHorizontal() ? this.width : this.height) / t;
          }
        }
        class qs {
          constructor(t, e, i) {
            (this.type = t),
              (this.scope = e),
              (this.override = i),
              (this.items = Object.create(null));
          }
          isForType(t) {
            return Object.prototype.isPrototypeOf.call(
              this.type.prototype,
              t.prototype
            );
          }
          register(t) {
            const e = Object.getPrototypeOf(t);
            let i;
            (function (t) {
              return "id" in t && "defaults" in t;
            })(e) && (i = this.register(e));
            const s = this.items,
              n = t.id,
              o = this.scope + "." + n;
            if (!n) throw new Error("class does not have id: " + t);
            return (
              n in s ||
                ((s[n] = t),
                (function (t, e, i) {
                  const s = X(Object.create(null), [
                    i ? se.get(i) : {},
                    se.get(e),
                    t.defaults,
                  ]);
                  se.set(e, s),
                    t.defaultRoutes &&
                      (function (t, e) {
                        Object.keys(e).forEach((i) => {
                          const s = i.split("."),
                            n = s.pop(),
                            o = [t].concat(s).join("."),
                            a = e[i].split("."),
                            r = a.pop(),
                            l = a.join(".");
                          se.route(o, n, l, r);
                        });
                      })(e, t.defaultRoutes),
                    t.descriptors && se.describe(e, t.descriptors);
                })(t, o, i),
                this.override && se.override(t.id, t.overrides)),
              o
            );
          }
          get(t) {
            return this.items[t];
          }
          unregister(t) {
            const e = this.items,
              i = t.id,
              s = this.scope;
            i in e && delete e[i],
              s &&
                i in se[s] &&
                (delete se[s][i], this.override && delete Qt[i]);
          }
        }
        class Us {
          constructor() {
            (this.controllers = new qs(Ii, "datasets", !0)),
              (this.elements = new qs(Fs, "elements")),
              (this.plugins = new qs(Object, "plugins")),
              (this.scales = new qs(Ys, "scales")),
              (this._typedRegistries = [
                this.controllers,
                this.scales,
                this.elements,
              ]);
          }
          add(...t) {
            this._each("register", t);
          }
          remove(...t) {
            this._each("unregister", t);
          }
          addControllers(...t) {
            this._each("register", t, this.controllers);
          }
          addElements(...t) {
            this._each("register", t, this.elements);
          }
          addPlugins(...t) {
            this._each("register", t, this.plugins);
          }
          addScales(...t) {
            this._each("register", t, this.scales);
          }
          getController(t) {
            return this._get(t, this.controllers, "controller");
          }
          getElement(t) {
            return this._get(t, this.elements, "element");
          }
          getPlugin(t) {
            return this._get(t, this.plugins, "plugin");
          }
          getScale(t) {
            return this._get(t, this.scales, "scale");
          }
          removeControllers(...t) {
            this._each("unregister", t, this.controllers);
          }
          removeElements(...t) {
            this._each("unregister", t, this.elements);
          }
          removePlugins(...t) {
            this._each("unregister", t, this.plugins);
          }
          removeScales(...t) {
            this._each("unregister", t, this.scales);
          }
          _each(t, e, i) {
            [...e].forEach((e) => {
              const s = i || this._getRegistryForType(e);
              i || s.isForType(e) || (s === this.plugins && e.id)
                ? this._exec(t, s, e)
                : W(e, (e) => {
                    const s = i || this._getRegistryForType(e);
                    this._exec(t, s, e);
                  });
            });
          }
          _exec(t, e, i) {
            const s = J(t);
            H(i["before" + s], [], i), e[t](i), H(i["after" + s], [], i);
          }
          _getRegistryForType(t) {
            for (let e = 0; e < this._typedRegistries.length; e++) {
              const i = this._typedRegistries[e];
              if (i.isForType(t)) return i;
            }
            return this.plugins;
          }
          _get(t, e, i) {
            const s = e.get(t);
            if (void 0 === s)
              throw new Error('"' + t + '" is not a registered ' + i + ".");
            return s;
          }
        }
        var Xs = new Us();
        class Ks {
          constructor() {
            this._init = [];
          }
          notify(t, e, i, s) {
            "beforeInit" === e &&
              ((this._init = this._createDescriptors(t, !0)),
              this._notify(this._init, t, "install"));
            const n = s ? this._descriptors(t).filter(s) : this._descriptors(t),
              o = this._notify(n, t, e, i);
            return (
              "afterDestroy" === e &&
                (this._notify(n, t, "stop"),
                this._notify(this._init, t, "uninstall")),
              o
            );
          }
          _notify(t, e, i, s) {
            s = s || {};
            for (const n of t) {
              const t = n.plugin;
              if (!1 === H(t[i], [e, s, n.options], t) && s.cancelable)
                return !1;
            }
            return !0;
          }
          invalidate() {
            I(this._cache) ||
              ((this._oldCache = this._cache), (this._cache = void 0));
          }
          _descriptors(t) {
            if (this._cache) return this._cache;
            const e = (this._cache = this._createDescriptors(t));
            return this._notifyStateChanges(t), e;
          }
          _createDescriptors(t, e) {
            const i = t && t.config,
              s = B(i.options && i.options.plugins, {}),
              n = (function (t) {
                const e = {},
                  i = [],
                  s = Object.keys(Xs.plugins.items);
                for (let t = 0; t < s.length; t++) i.push(Xs.getPlugin(s[t]));
                const n = t.plugins || [];
                for (let t = 0; t < n.length; t++) {
                  const s = n[t];
                  -1 === i.indexOf(s) && (i.push(s), (e[s.id] = !0));
                }
                return { plugins: i, localIds: e };
              })(i);
            return !1 !== s || e
              ? (function (t, { plugins: e, localIds: i }, s, n) {
                  const o = [],
                    a = t.getContext();
                  for (const r of e) {
                    const e = r.id,
                      l = Zs(s[e], n);
                    null !== l &&
                      o.push({
                        plugin: r,
                        options: Gs(t.config, { plugin: r, local: i[e] }, l, a),
                      });
                  }
                  return o;
                })(t, n, s, e)
              : [];
          }
          _notifyStateChanges(t) {
            const e = this._oldCache || [],
              i = this._cache,
              s = (t, e) =>
                t.filter((t) => !e.some((e) => t.plugin.id === e.plugin.id));
            this._notify(s(e, i), t, "stop"), this._notify(s(i, e), t, "start");
          }
        }
        function Zs(t, e) {
          return e || !1 !== t ? (!0 === t ? {} : t) : null;
        }
        function Gs(t, { plugin: e, local: i }, s, n) {
          const o = t.pluginScopeKeys(e),
            a = t.getOptionScopes(s, o);
          return (
            i && e.defaults && a.push(e.defaults),
            t.createResolver(a, n, [""], {
              scriptable: !1,
              indexable: !1,
              allKeys: !0,
            })
          );
        }
        function Qs(t, e) {
          const i = se.datasets[t] || {};
          return (
            ((e.datasets || {})[t] || {}).indexAxis ||
            e.indexAxis ||
            i.indexAxis ||
            "x"
          );
        }
        function Js(t, e) {
          if ("x" === t || "y" === t || "r" === t) return t;
          var i;
          if (
            (t =
              e.axis ||
              ("top" === (i = e.position) || "bottom" === i
                ? "x"
                : "left" === i || "right" === i
                ? "y"
                : void 0) ||
              (t.length > 1 && Js(t[0].toLowerCase(), e)))
          )
            return t;
          throw new Error(
            `Cannot determine type of '${name}' axis. Please provide 'axis' or 'position' option.`
          );
        }
        function tn(t) {
          const e = t.options || (t.options = {});
          (e.plugins = B(e.plugins, {})),
            (e.scales = (function (t, e) {
              const i = Qt[t.type] || { scales: {} },
                s = e.scales || {},
                n = Qs(t.type, e),
                o = Object.create(null);
              return (
                Object.keys(s).forEach((t) => {
                  const e = s[t];
                  if (!F(e))
                    return console.error(
                      `Invalid scale configuration for scale: ${t}`
                    );
                  if (e._proxy)
                    return console.warn(
                      `Ignoring resolver passed as options for scale: ${t}`
                    );
                  const a = Js(t, e),
                    r = (function (t, e) {
                      return t === e ? "_index_" : "_value_";
                    })(a, n),
                    l = i.scales || {};
                  o[t] = K(Object.create(null), [{ axis: a }, e, l[a], l[r]]);
                }),
                t.data.datasets.forEach((i) => {
                  const n = i.type || t.type,
                    a = i.indexAxis || Qs(n, e),
                    r = (Qt[n] || {}).scales || {};
                  Object.keys(r).forEach((t) => {
                    const e = (function (t, e) {
                        let i = t;
                        return (
                          "_index_" === t
                            ? (i = e)
                            : "_value_" === t && (i = "x" === e ? "y" : "x"),
                          i
                        );
                      })(t, a),
                      n = i[e + "AxisID"] || e;
                    (o[n] = o[n] || Object.create(null)),
                      K(o[n], [{ axis: e }, s[n], r[t]]);
                  });
                }),
                Object.keys(o).forEach((t) => {
                  const e = o[t];
                  K(e, [se.scales[e.type], se.scale]);
                }),
                o
              );
            })(t, e));
        }
        function en(t) {
          return (
            ((t = t || {}).datasets = t.datasets || []),
            (t.labels = t.labels || []),
            t
          );
        }
        const sn = new Map(),
          nn = new Set();
        function on(t, e) {
          let i = sn.get(t);
          return i || ((i = e()), sn.set(t, i), nn.add(i)), i;
        }
        const an = (t, e, i) => {
          const s = Q(e, i);
          void 0 !== s && t.add(s);
        };
        class rn {
          constructor(t) {
            (this._config = (function (t) {
              return ((t = t || {}).data = en(t.data)), tn(t), t;
            })(t)),
              (this._scopeCache = new Map()),
              (this._resolverCache = new Map());
          }
          get platform() {
            return this._config.platform;
          }
          get type() {
            return this._config.type;
          }
          set type(t) {
            this._config.type = t;
          }
          get data() {
            return this._config.data;
          }
          set data(t) {
            this._config.data = en(t);
          }
          get options() {
            return this._config.options;
          }
          set options(t) {
            this._config.options = t;
          }
          get plugins() {
            return this._config.plugins;
          }
          update() {
            const t = this._config;
            this.clearCache(), tn(t);
          }
          clearCache() {
            this._scopeCache.clear(), this._resolverCache.clear();
          }
          datasetScopeKeys(t) {
            return on(t, () => [[`datasets.${t}`, ""]]);
          }
          datasetAnimationScopeKeys(t, e) {
            return on(`${t}.transition.${e}`, () => [
              [`datasets.${t}.transitions.${e}`, `transitions.${e}`],
              [`datasets.${t}`, ""],
            ]);
          }
          datasetElementScopeKeys(t, e) {
            return on(`${t}-${e}`, () => [
              [
                `datasets.${t}.elements.${e}`,
                `datasets.${t}`,
                `elements.${e}`,
                "",
              ],
            ]);
          }
          pluginScopeKeys(t) {
            const e = t.id;
            return on(`${this.type}-plugin-${e}`, () => [
              [`plugins.${e}`, ...(t.additionalOptionScopes || [])],
            ]);
          }
          _cachedScopes(t, e) {
            const i = this._scopeCache;
            let s = i.get(t);
            return (s && !e) || ((s = new Map()), i.set(t, s)), s;
          }
          getOptionScopes(t, e, i) {
            const { options: s, type: n } = this,
              o = this._cachedScopes(t, i),
              a = o.get(e);
            if (a) return a;
            const r = new Set();
            e.forEach((e) => {
              t && (r.add(t), e.forEach((e) => an(r, t, e))),
                e.forEach((t) => an(r, s, t)),
                e.forEach((t) => an(r, Qt[n] || {}, t)),
                e.forEach((t) => an(r, se, t)),
                e.forEach((t) => an(r, Jt, t));
            });
            const l = Array.from(r);
            return (
              0 === l.length && l.push(Object.create(null)),
              nn.has(e) && o.set(e, l),
              l
            );
          }
          chartOptionScopes() {
            const { options: t, type: e } = this;
            return [t, Qt[e] || {}, se.datasets[e] || {}, { type: e }, se, Jt];
          }
          resolveNamedOptions(t, e, i, s = [""]) {
            const n = { $shared: !0 },
              { resolver: o, subPrefixes: a } = ln(this._resolverCache, t, s);
            let r = o;
            (function (t, e) {
              const { isScriptable: i, isIndexable: s } = Le(t);
              for (const n of e) {
                const e = i(n),
                  o = s(n),
                  a = (o || e) && t[n];
                if ((e && (et(a) || hn(a))) || (o && z(a))) return !0;
              }
              return !1;
            })(o, e) &&
              ((n.$shared = !1),
              (r = Oe(o, (i = et(i) ? i() : i), this.createResolver(t, i, a))));
            for (const t of e) n[t] = r[t];
            return n;
          }
          createResolver(t, e, i = [""], s) {
            const { resolver: n } = ln(this._resolverCache, t, i);
            return F(e) ? Oe(n, e, void 0, s) : n;
          }
        }
        function ln(t, e, i) {
          let s = t.get(e);
          s || ((s = new Map()), t.set(e, s));
          const n = i.join();
          let o = s.get(n);
          return (
            o ||
              ((o = {
                resolver: Ce(e, i),
                subPrefixes: i.filter(
                  (t) => !t.toLowerCase().includes("hover")
                ),
              }),
              s.set(n, o)),
            o
          );
        }
        const hn = (t) =>
            F(t) &&
            Object.getOwnPropertyNames(t).reduce((e, i) => e || et(t[i]), !1),
          cn = ["top", "bottom", "left", "right", "chartArea"];
        function dn(t, e) {
          return (
            "top" === t || "bottom" === t || (-1 === cn.indexOf(t) && "x" === e)
          );
        }
        function un(t, e) {
          return function (i, s) {
            return i[t] === s[t] ? i[e] - s[e] : i[t] - s[t];
          };
        }
        function fn(t) {
          const e = t.chart,
            i = e.options.animation;
          e.notifyPlugins("afterRender"), H(i && i.onComplete, [t], e);
        }
        function gn(t) {
          const e = t.chart,
            i = e.options.animation;
          H(i && i.onProgress, [t], e);
        }
        function pn(t) {
          return (
            Ke() && "string" == typeof t
              ? (t = document.getElementById(t))
              : t && t.length && (t = t[0]),
            t && t.canvas && (t = t.canvas),
            t
          );
        }
        const mn = {},
          bn = (t) => {
            const e = pn(t);
            return Object.values(mn)
              .filter((t) => t.canvas === e)
              .pop();
          };
        function xn(t, e, i) {
          const s = Object.keys(t);
          for (const n of s) {
            const s = +n;
            if (s >= e) {
              const o = t[n];
              delete t[n], (i > 0 || s > e) && (t[s + i] = o);
            }
          }
        }
        class _n {
          static defaults = se;
          static instances = mn;
          static overrides = Qt;
          static registry = Xs;
          static version = "4.1.2";
          static getChart = bn;
          static register(...t) {
            Xs.add(...t), yn();
          }
          static unregister(...t) {
            Xs.remove(...t), yn();
          }
          constructor(t, e) {
            const i = (this.config = new rn(e)),
              s = pn(t),
              n = bn(s);
            if (n)
              throw new Error(
                "Canvas is already in use. Chart with ID '" +
                  n.id +
                  "' must be destroyed before the canvas with ID '" +
                  n.canvas.id +
                  "' can be reused."
              );
            const o = i.createResolver(
              i.chartOptionScopes(),
              this.getContext()
            );
            (this.platform = new (i.platform || zs(s))()),
              this.platform.updateConfig(i);
            const a = this.platform.acquireContext(s, o.aspectRatio),
              r = a && a.canvas,
              l = r && r.height,
              h = r && r.width;
            (this.id = R()),
              (this.ctx = a),
              (this.canvas = r),
              (this.width = h),
              (this.height = l),
              (this._options = o),
              (this._aspectRatio = this.aspectRatio),
              (this._layers = []),
              (this._metasets = []),
              (this._stacks = void 0),
              (this.boxes = []),
              (this.currentDevicePixelRatio = void 0),
              (this.chartArea = void 0),
              (this._active = []),
              (this._lastEvent = void 0),
              (this._listeners = {}),
              (this._responsiveListeners = void 0),
              (this._sortedMetasets = []),
              (this.scales = {}),
              (this._plugins = new Ks()),
              (this.$proxies = {}),
              (this._hiddenIndices = {}),
              (this.attached = !1),
              (this._animationsDisabled = void 0),
              (this.$context = void 0),
              (this._doResize = (function (t, e) {
                let i;
                return function (...s) {
                  return (
                    e
                      ? (clearTimeout(i), (i = setTimeout(t, e, s)))
                      : t.apply(this, s),
                    e
                  );
                };
              })((t) => this.update(t), o.resizeDelay || 0)),
              (this._dataChanges = []),
              (mn[this.id] = this),
              a && r
                ? (_i.listen(this, "complete", fn),
                  _i.listen(this, "progress", gn),
                  this._initialize(),
                  this.attached && this.update())
                : console.error(
                    "Failed to create chart: can't acquire context from the given item"
                  );
          }
          get aspectRatio() {
            const {
              options: { aspectRatio: t, maintainAspectRatio: e },
              width: i,
              height: s,
              _aspectRatio: n,
            } = this;
            return I(t) ? (e && n ? n : s ? i / s : null) : t;
          }
          get data() {
            return this.config.data;
          }
          set data(t) {
            this.config.data = t;
          }
          get options() {
            return this._options;
          }
          set options(t) {
            this.config.options = t;
          }
          get registry() {
            return Xs;
          }
          _initialize() {
            return (
              this.notifyPlugins("beforeInit"),
              this.options.responsive
                ? this.resize()
                : si(this, this.options.devicePixelRatio),
              this.bindEvents(),
              this.notifyPlugins("afterInit"),
              this
            );
          }
          clear() {
            return re(this.canvas, this.ctx), this;
          }
          stop() {
            return _i.stop(this), this;
          }
          resize(t, e) {
            _i.running(this)
              ? (this._resizeBeforeDraw = { width: t, height: e })
              : this._resize(t, e);
          }
          _resize(t, e) {
            const i = this.options,
              s = this.canvas,
              n = i.maintainAspectRatio && this.aspectRatio,
              o = this.platform.getMaximumSize(s, t, e, n),
              a = i.devicePixelRatio || this.platform.getDevicePixelRatio(),
              r = this.width ? "resize" : "attach";
            (this.width = o.width),
              (this.height = o.height),
              (this._aspectRatio = this.aspectRatio),
              si(this, a, !0) &&
                (this.notifyPlugins("resize", { size: o }),
                H(i.onResize, [this, o], this),
                this.attached && this._doResize(r) && this.render());
          }
          ensureScalesHaveIDs() {
            W(this.options.scales || {}, (t, e) => {
              t.id = e;
            });
          }
          buildOrUpdateScales() {
            const t = this.options,
              e = t.scales,
              i = this.scales,
              s = Object.keys(i).reduce((t, e) => ((t[e] = !1), t), {});
            let n = [];
            e &&
              (n = n.concat(
                Object.keys(e).map((t) => {
                  const i = e[t],
                    s = Js(t, i),
                    n = "r" === s,
                    o = "x" === s;
                  return {
                    options: i,
                    dposition: n ? "chartArea" : o ? "bottom" : "left",
                    dtype: n ? "radialLinear" : o ? "category" : "linear",
                  };
                })
              )),
              W(n, (e) => {
                const n = e.options,
                  o = n.id,
                  a = Js(o, n),
                  r = B(n.type, e.dtype);
                (void 0 !== n.position &&
                  dn(n.position, a) === dn(e.dposition)) ||
                  (n.position = e.dposition),
                  (s[o] = !0);
                let l = null;
                o in i && i[o].type === r
                  ? (l = i[o])
                  : ((l = new (Xs.getScale(r))({
                      id: o,
                      type: r,
                      ctx: this.ctx,
                      chart: this,
                    })),
                    (i[l.id] = l)),
                  l.init(n, t);
              }),
              W(s, (t, e) => {
                t || delete i[e];
              }),
              W(i, (t) => {
                _s.configure(this, t, t.options), _s.addBox(this, t);
              });
          }
          _updateMetasets() {
            const t = this._metasets,
              e = this.data.datasets.length,
              i = t.length;
            if ((t.sort((t, e) => t.index - e.index), i > e)) {
              for (let t = e; t < i; ++t) this._destroyDatasetMeta(t);
              t.splice(e, i - e);
            }
            this._sortedMetasets = t.slice(0).sort(un("order", "index"));
          }
          _removeUnreferencedMetasets() {
            const {
              _metasets: t,
              data: { datasets: e },
            } = this;
            t.length > e.length && delete this._stacks,
              t.forEach((t, i) => {
                0 === e.filter((e) => e === t._dataset).length &&
                  this._destroyDatasetMeta(i);
              });
          }
          buildOrUpdateControllers() {
            const t = [],
              e = this.data.datasets;
            let i, s;
            for (
              this._removeUnreferencedMetasets(), i = 0, s = e.length;
              i < s;
              i++
            ) {
              const s = e[i];
              let n = this.getDatasetMeta(i);
              const o = s.type || this.config.type;
              if (
                (n.type &&
                  n.type !== o &&
                  (this._destroyDatasetMeta(i), (n = this.getDatasetMeta(i))),
                (n.type = o),
                (n.indexAxis = s.indexAxis || Qs(o, this.options)),
                (n.order = s.order || 0),
                (n.index = i),
                (n.label = "" + s.label),
                (n.visible = this.isDatasetVisible(i)),
                n.controller)
              )
                n.controller.updateIndex(i), n.controller.linkScales();
              else {
                const e = Xs.getController(o),
                  { datasetElementType: s, dataElementType: a } =
                    se.datasets[o];
                Object.assign(e, {
                  dataElementType: Xs.getElement(a),
                  datasetElementType: s && Xs.getElement(s),
                }),
                  (n.controller = new e(this, i)),
                  t.push(n.controller);
              }
            }
            return this._updateMetasets(), t;
          }
          _resetElements() {
            W(
              this.data.datasets,
              (t, e) => {
                this.getDatasetMeta(e).controller.reset();
              },
              this
            );
          }
          reset() {
            this._resetElements(), this.notifyPlugins("reset");
          }
          update(t) {
            const e = this.config;
            e.update();
            const i = (this._options = e.createResolver(
                e.chartOptionScopes(),
                this.getContext()
              )),
              s = (this._animationsDisabled = !i.animation);
            if (
              (this._updateScales(),
              this._checkEventBindings(),
              this._updateHiddenIndices(),
              this._plugins.invalidate(),
              !1 ===
                this.notifyPlugins("beforeUpdate", { mode: t, cancelable: !0 }))
            )
              return;
            const n = this.buildOrUpdateControllers();
            this.notifyPlugins("beforeElementsUpdate");
            let o = 0;
            for (let t = 0, e = this.data.datasets.length; t < e; t++) {
              const { controller: e } = this.getDatasetMeta(t),
                i = !s && -1 === n.indexOf(e);
              e.buildOrUpdateElements(i),
                (o = Math.max(+e.getMaxOverflow(), o));
            }
            (o = this._minPadding = i.layout.autoPadding ? o : 0),
              this._updateLayout(o),
              s ||
                W(n, (t) => {
                  t.reset();
                }),
              this._updateDatasets(t),
              this.notifyPlugins("afterUpdate", { mode: t }),
              this._layers.sort(un("z", "_idx"));
            const { _active: a, _lastEvent: r } = this;
            r
              ? this._eventHandler(r, !0)
              : a.length && this._updateHoverStyles(a, a, !0),
              this.render();
          }
          _updateScales() {
            W(this.scales, (t) => {
              _s.removeBox(this, t);
            }),
              this.ensureScalesHaveIDs(),
              this.buildOrUpdateScales();
          }
          _checkEventBindings() {
            const t = this.options,
              e = new Set(Object.keys(this._listeners)),
              i = new Set(t.events);
            (it(e, i) && !!this._responsiveListeners === t.responsive) ||
              (this.unbindEvents(), this.bindEvents());
          }
          _updateHiddenIndices() {
            const { _hiddenIndices: t } = this,
              e = this._getUniformDataChanges() || [];
            for (const { method: i, start: s, count: n } of e)
              xn(t, s, "_removeElements" === i ? -n : n);
          }
          _getUniformDataChanges() {
            const t = this._dataChanges;
            if (!t || !t.length) return;
            this._dataChanges = [];
            const e = this.data.datasets.length,
              i = (e) =>
                new Set(
                  t
                    .filter((t) => t[0] === e)
                    .map((t, e) => e + "," + t.splice(1).join(","))
                ),
              s = i(0);
            for (let t = 1; t < e; t++) if (!it(s, i(t))) return;
            return Array.from(s)
              .map((t) => t.split(","))
              .map((t) => ({ method: t[1], start: +t[2], count: +t[3] }));
          }
          _updateLayout(t) {
            if (!1 === this.notifyPlugins("beforeLayout", { cancelable: !0 }))
              return;
            _s.update(this, this.width, this.height, t);
            const e = this.chartArea,
              i = e.width <= 0 || e.height <= 0;
            (this._layers = []),
              W(
                this.boxes,
                (t) => {
                  (i && "chartArea" === t.position) ||
                    (t.configure && t.configure(),
                    this._layers.push(...t._layers()));
                },
                this
              ),
              this._layers.forEach((t, e) => {
                t._idx = e;
              }),
              this.notifyPlugins("afterLayout");
          }
          _updateDatasets(t) {
            if (
              !1 !==
              this.notifyPlugins("beforeDatasetsUpdate", {
                mode: t,
                cancelable: !0,
              })
            ) {
              for (let t = 0, e = this.data.datasets.length; t < e; ++t)
                this.getDatasetMeta(t).controller.configure();
              for (let e = 0, i = this.data.datasets.length; e < i; ++e)
                this._updateDataset(e, et(t) ? t({ datasetIndex: e }) : t);
              this.notifyPlugins("afterDatasetsUpdate", { mode: t });
            }
          }
          _updateDataset(t, e) {
            const i = this.getDatasetMeta(t),
              s = { meta: i, index: t, mode: e, cancelable: !0 };
            !1 !== this.notifyPlugins("beforeDatasetUpdate", s) &&
              (i.controller._update(e),
              (s.cancelable = !1),
              this.notifyPlugins("afterDatasetUpdate", s));
          }
          render() {
            !1 !== this.notifyPlugins("beforeRender", { cancelable: !0 }) &&
              (_i.has(this)
                ? this.attached && !_i.running(this) && _i.start(this)
                : (this.draw(), fn({ chart: this })));
          }
          draw() {
            let t;
            if (this._resizeBeforeDraw) {
              const { width: t, height: e } = this._resizeBeforeDraw;
              this._resize(t, e), (this._resizeBeforeDraw = null);
            }
            if ((this.clear(), this.width <= 0 || this.height <= 0)) return;
            if (!1 === this.notifyPlugins("beforeDraw", { cancelable: !0 }))
              return;
            const e = this._layers;
            for (t = 0; t < e.length && e[t].z <= 0; ++t)
              e[t].draw(this.chartArea);
            for (this._drawDatasets(); t < e.length; ++t)
              e[t].draw(this.chartArea);
            this.notifyPlugins("afterDraw");
          }
          _getSortedDatasetMetas(t) {
            const e = this._sortedMetasets,
              i = [];
            let s, n;
            for (s = 0, n = e.length; s < n; ++s) {
              const n = e[s];
              (t && !n.visible) || i.push(n);
            }
            return i;
          }
          getSortedVisibleDatasetMetas() {
            return this._getSortedDatasetMetas(!0);
          }
          _drawDatasets() {
            if (
              !1 ===
              this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 })
            )
              return;
            const t = this.getSortedVisibleDatasetMetas();
            for (let e = t.length - 1; e >= 0; --e) this._drawDataset(t[e]);
            this.notifyPlugins("afterDatasetsDraw");
          }
          _drawDataset(t) {
            const e = this.ctx,
              i = t._clip,
              s = !i.disabled,
              n =
                (function (t) {
                  const { xScale: e, yScale: i } = t;
                  if (e && i)
                    return {
                      left: e.left,
                      right: e.right,
                      top: i.top,
                      bottom: i.bottom,
                    };
                })(t) || this.chartArea,
              o = { meta: t, index: t.index, cancelable: !0 };
            !1 !== this.notifyPlugins("beforeDatasetDraw", o) &&
              (s &&
                de(e, {
                  left: !1 === i.left ? 0 : n.left - i.left,
                  right: !1 === i.right ? this.width : n.right + i.right,
                  top: !1 === i.top ? 0 : n.top - i.top,
                  bottom: !1 === i.bottom ? this.height : n.bottom + i.bottom,
                }),
              t.controller.draw(),
              s && ue(e),
              (o.cancelable = !1),
              this.notifyPlugins("afterDatasetDraw", o));
          }
          isPointInArea(t) {
            return ce(t, this.chartArea, this._minPadding);
          }
          getElementsAtEventForMode(t, e, i, s) {
            const n = rs.modes[e];
            return "function" == typeof n ? n(this, t, i, s) : [];
          }
          getDatasetMeta(t) {
            const e = this.data.datasets[t],
              i = this._metasets;
            let s = i.filter((t) => t && t._dataset === e).pop();
            return (
              s ||
                ((s = {
                  type: null,
                  data: [],
                  dataset: null,
                  controller: null,
                  hidden: null,
                  xAxisID: null,
                  yAxisID: null,
                  order: (e && e.order) || 0,
                  index: t,
                  _dataset: e,
                  _parsed: [],
                  _sorted: !1,
                }),
                i.push(s)),
              s
            );
          }
          getContext() {
            return (
              this.$context ||
              (this.$context = De(null, { chart: this, type: "chart" }))
            );
          }
          getVisibleDatasetCount() {
            return this.getSortedVisibleDatasetMetas().length;
          }
          isDatasetVisible(t) {
            const e = this.data.datasets[t];
            if (!e) return !1;
            const i = this.getDatasetMeta(t);
            return "boolean" == typeof i.hidden ? !i.hidden : !e.hidden;
          }
          setDatasetVisibility(t, e) {
            this.getDatasetMeta(t).hidden = !e;
          }
          toggleDataVisibility(t) {
            this._hiddenIndices[t] = !this._hiddenIndices[t];
          }
          getDataVisibility(t) {
            return !this._hiddenIndices[t];
          }
          _updateVisibility(t, e, i) {
            const s = i ? "show" : "hide",
              n = this.getDatasetMeta(t),
              o = n.controller._resolveAnimations(void 0, s);
            tt(e)
              ? ((n.data[e].hidden = !i), this.update())
              : (this.setDatasetVisibility(t, i),
                o.update(n, { visible: i }),
                this.update((e) => (e.datasetIndex === t ? s : void 0)));
          }
          hide(t, e) {
            this._updateVisibility(t, e, !1);
          }
          show(t, e) {
            this._updateVisibility(t, e, !0);
          }
          _destroyDatasetMeta(t) {
            const e = this._metasets[t];
            e && e.controller && e.controller._destroy(),
              delete this._metasets[t];
          }
          _stop() {
            let t, e;
            for (
              this.stop(),
                _i.remove(this),
                t = 0,
                e = this.data.datasets.length;
              t < e;
              ++t
            )
              this._destroyDatasetMeta(t);
          }
          destroy() {
            this.notifyPlugins("beforeDestroy");
            const { canvas: t, ctx: e } = this;
            this._stop(),
              this.config.clearCache(),
              t &&
                (this.unbindEvents(),
                re(t, e),
                this.platform.releaseContext(e),
                (this.canvas = null),
                (this.ctx = null)),
              delete mn[this.id],
              this.notifyPlugins("afterDestroy");
          }
          toBase64Image(...t) {
            return this.canvas.toDataURL(...t);
          }
          bindEvents() {
            this.bindUserEvents(),
              this.options.responsive
                ? this.bindResponsiveEvents()
                : (this.attached = !0);
          }
          bindUserEvents() {
            const t = this._listeners,
              e = this.platform,
              i = (i, s) => {
                e.addEventListener(this, i, s), (t[i] = s);
              },
              s = (t, e, i) => {
                (t.offsetX = e), (t.offsetY = i), this._eventHandler(t);
              };
            W(this.options.events, (t) => i(t, s));
          }
          bindResponsiveEvents() {
            this._responsiveListeners || (this._responsiveListeners = {});
            const t = this._responsiveListeners,
              e = this.platform,
              i = (i, s) => {
                e.addEventListener(this, i, s), (t[i] = s);
              },
              s = (i, s) => {
                t[i] && (e.removeEventListener(this, i, s), delete t[i]);
              },
              n = (t, e) => {
                this.canvas && this.resize(t, e);
              };
            let o;
            const a = () => {
              s("attach", a),
                (this.attached = !0),
                this.resize(),
                i("resize", n),
                i("detach", o);
            };
            (o = () => {
              (this.attached = !1),
                s("resize", n),
                this._stop(),
                this._resize(0, 0),
                i("attach", a);
            }),
              e.isAttached(this.canvas) ? a() : o();
          }
          unbindEvents() {
            W(this._listeners, (t, e) => {
              this.platform.removeEventListener(this, e, t);
            }),
              (this._listeners = {}),
              W(this._responsiveListeners, (t, e) => {
                this.platform.removeEventListener(this, e, t);
              }),
              (this._responsiveListeners = void 0);
          }
          updateHoverStyle(t, e, i) {
            const s = i ? "set" : "remove";
            let n, o, a, r;
            for (
              "dataset" === e &&
                ((n = this.getDatasetMeta(t[0].datasetIndex)),
                n.controller["_" + s + "DatasetHoverStyle"]()),
                a = 0,
                r = t.length;
              a < r;
              ++a
            ) {
              o = t[a];
              const e = o && this.getDatasetMeta(o.datasetIndex).controller;
              e && e[s + "HoverStyle"](o.element, o.datasetIndex, o.index);
            }
          }
          getActiveElements() {
            return this._active || [];
          }
          setActiveElements(t) {
            const e = this._active || [],
              i = t.map(({ datasetIndex: t, index: e }) => {
                const i = this.getDatasetMeta(t);
                if (!i) throw new Error("No dataset found at index " + t);
                return { datasetIndex: t, element: i.data[e], index: e };
              });
            !$(i, e) &&
              ((this._active = i),
              (this._lastEvent = null),
              this._updateHoverStyles(i, e));
          }
          notifyPlugins(t, e, i) {
            return this._plugins.notify(this, t, e, i);
          }
          isPluginEnabled(t) {
            return (
              1 === this._plugins._cache.filter((e) => e.plugin.id === t).length
            );
          }
          _updateHoverStyles(t, e, i) {
            const s = this.options.hover,
              n = (t, e) =>
                t.filter(
                  (t) =>
                    !e.some(
                      (e) =>
                        t.datasetIndex === e.datasetIndex && t.index === e.index
                    )
                ),
              o = n(e, t),
              a = i ? t : n(t, e);
            o.length && this.updateHoverStyle(o, s.mode, !1),
              a.length && s.mode && this.updateHoverStyle(a, s.mode, !0);
          }
          _eventHandler(t, e) {
            const i = {
                event: t,
                replay: e,
                cancelable: !0,
                inChartArea: this.isPointInArea(t),
              },
              s = (e) =>
                (e.options.events || this.options.events).includes(
                  t.native.type
                );
            if (!1 === this.notifyPlugins("beforeEvent", i, s)) return;
            const n = this._handleEvent(t, e, i.inChartArea);
            return (
              (i.cancelable = !1),
              this.notifyPlugins("afterEvent", i, s),
              (n || i.changed) && this.render(),
              this
            );
          }
          _handleEvent(t, e, i) {
            const { _active: s = [], options: n } = this,
              o = e,
              a = this._getActiveElements(t, s, i, o),
              r = (function (t) {
                return (
                  "mouseup" === t.type ||
                  "click" === t.type ||
                  "contextmenu" === t.type
                );
              })(t),
              l = (function (t, e, i, s) {
                return i && "mouseout" !== t.type ? (s ? e : t) : null;
              })(t, this._lastEvent, i, r);
            i &&
              ((this._lastEvent = null),
              H(n.onHover, [t, a, this], this),
              r && H(n.onClick, [t, a, this], this));
            const h = !$(a, s);
            return (
              (h || e) &&
                ((this._active = a), this._updateHoverStyles(a, s, e)),
              (this._lastEvent = l),
              h
            );
          }
          _getActiveElements(t, e, i, s) {
            if ("mouseout" === t.type) return [];
            if (!i) return e;
            const n = this.options.hover;
            return this.getElementsAtEventForMode(t, n.mode, n, s);
          }
        }
        function yn() {
          return W(_n.instances, (t) => t._plugins.invalidate());
        }
        function vn(t, e, i, s) {
          return { x: i + t * Math.cos(e), y: s + t * Math.sin(e) };
        }
        function Mn(t, e, i, s, n, o) {
          const {
              x: a,
              y: r,
              startAngle: l,
              pixelMargin: h,
              innerRadius: c,
            } = e,
            d = Math.max(e.outerRadius + s + i - h, 0),
            u = c > 0 ? c + s + i + h : 0;
          let f = 0;
          const g = n - l;
          if (s) {
            const t = ((c > 0 ? c - s : 0) + (d > 0 ? d - s : 0)) / 2;
            f = (g - (0 !== t ? (g * t) / (t + s) : g)) / 2;
          }
          const p = (g - Math.max(0.001, g * d - i / st) / d) / 2,
            m = l + p + f,
            b = n - p - f,
            {
              outerStart: x,
              outerEnd: _,
              innerStart: y,
              innerEnd: v,
            } = (function (t, e, i, s) {
              const n = Me(t.options.borderRadius, [
                  "outerStart",
                  "outerEnd",
                  "innerStart",
                  "innerEnd",
                ]),
                o = (i - e) / 2,
                a = Math.min(o, (s * e) / 2),
                r = (t) => {
                  const e = ((i - Math.min(o, t)) * s) / 2;
                  return St(t, 0, Math.min(o, e));
                };
              return {
                outerStart: r(n.outerStart),
                outerEnd: r(n.outerEnd),
                innerStart: St(n.innerStart, 0, a),
                innerEnd: St(n.innerEnd, 0, a),
              };
            })(e, u, d, b - m),
            M = d - x,
            w = d - _,
            k = m + x / M,
            S = b - _ / w,
            P = u + y,
            A = u + v,
            D = m + y / P,
            C = b - v / A;
          if ((t.beginPath(), o)) {
            const e = (k + S) / 2;
            if ((t.arc(a, r, d, k, e), t.arc(a, r, d, e, S), _ > 0)) {
              const e = vn(w, S, a, r);
              t.arc(e.x, e.y, _, S, b + lt);
            }
            const i = vn(A, b, a, r);
            if ((t.lineTo(i.x, i.y), v > 0)) {
              const e = vn(A, C, a, r);
              t.arc(e.x, e.y, v, b + lt, C + Math.PI);
            }
            const s = (b - v / u + (m + y / u)) / 2;
            if (
              (t.arc(a, r, u, b - v / u, s, !0),
              t.arc(a, r, u, s, m + y / u, !0),
              y > 0)
            ) {
              const e = vn(P, D, a, r);
              t.arc(e.x, e.y, y, D + Math.PI, m - lt);
            }
            const n = vn(M, m, a, r);
            if ((t.lineTo(n.x, n.y), x > 0)) {
              const e = vn(M, k, a, r);
              t.arc(e.x, e.y, x, m - lt, k);
            }
          } else {
            t.moveTo(a, r);
            const e = Math.cos(k) * d + a,
              i = Math.sin(k) * d + r;
            t.lineTo(e, i);
            const s = Math.cos(S) * d + a,
              n = Math.sin(S) * d + r;
            t.lineTo(s, n);
          }
          t.closePath();
        }
        class wn extends Fs {
          static id = "arc";
          static defaults = {
            borderAlign: "center",
            borderColor: "#fff",
            borderJoinStyle: void 0,
            borderRadius: 0,
            borderWidth: 2,
            offset: 0,
            spacing: 0,
            angle: void 0,
            circular: !0,
          };
          static defaultRoutes = { backgroundColor: "backgroundColor" };
          constructor(t) {
            super(),
              (this.options = void 0),
              (this.circumference = void 0),
              (this.startAngle = void 0),
              (this.endAngle = void 0),
              (this.innerRadius = void 0),
              (this.outerRadius = void 0),
              (this.pixelMargin = 0),
              (this.fullCircles = 0),
              t && Object.assign(this, t);
          }
          inRange(t, e, i) {
            const s = this.getProps(["x", "y"], i),
              { angle: n, distance: o } = yt(s, { x: t, y: e }),
              {
                startAngle: a,
                endAngle: r,
                innerRadius: l,
                outerRadius: h,
                circumference: c,
              } = this.getProps(
                [
                  "startAngle",
                  "endAngle",
                  "innerRadius",
                  "outerRadius",
                  "circumference",
                ],
                i
              ),
              d = this.options.spacing / 2,
              u = B(c, r - a) >= nt || kt(n, a, r),
              f = Pt(o, l + d, h + d);
            return u && f;
          }
          getCenterPoint(t) {
            const {
                x: e,
                y: i,
                startAngle: s,
                endAngle: n,
                innerRadius: o,
                outerRadius: a,
              } = this.getProps(
                [
                  "x",
                  "y",
                  "startAngle",
                  "endAngle",
                  "innerRadius",
                  "outerRadius",
                  "circumference",
                ],
                t
              ),
              { offset: r, spacing: l } = this.options,
              h = (s + n) / 2,
              c = (o + a + l + r) / 2;
            return { x: e + Math.cos(h) * c, y: i + Math.sin(h) * c };
          }
          tooltipPosition(t) {
            return this.getCenterPoint(t);
          }
          draw(t) {
            const { options: e, circumference: i } = this,
              s = (e.offset || 0) / 4,
              n = (e.spacing || 0) / 2,
              o = e.circular;
            if (
              ((this.pixelMargin = "inner" === e.borderAlign ? 0.33 : 0),
              (this.fullCircles = i > nt ? Math.floor(i / nt) : 0),
              0 === i || this.innerRadius < 0 || this.outerRadius < 0)
            )
              return;
            t.save();
            const a = (this.startAngle + this.endAngle) / 2;
            t.translate(Math.cos(a) * s, Math.sin(a) * s);
            const r = s * (1 - Math.sin(Math.min(st, i || 0)));
            (t.fillStyle = e.backgroundColor),
              (t.strokeStyle = e.borderColor),
              (function (t, e, i, s, n) {
                const { fullCircles: o, startAngle: a, circumference: r } = e;
                let l = e.endAngle;
                if (o) {
                  Mn(t, e, i, s, l, n);
                  for (let e = 0; e < o; ++e) t.fill();
                  isNaN(r) || (l = a + (r % nt || nt));
                }
                Mn(t, e, i, s, l, n), t.fill();
              })(t, this, r, n, o),
              (function (t, e, i, s, n) {
                const {
                    fullCircles: o,
                    startAngle: a,
                    circumference: r,
                    options: l,
                  } = e,
                  { borderWidth: h, borderJoinStyle: c } = l,
                  d = "inner" === l.borderAlign;
                if (!h) return;
                d
                  ? ((t.lineWidth = 2 * h), (t.lineJoin = c || "round"))
                  : ((t.lineWidth = h), (t.lineJoin = c || "bevel"));
                let u = e.endAngle;
                if (o) {
                  Mn(t, e, i, s, u, n);
                  for (let e = 0; e < o; ++e) t.stroke();
                  isNaN(r) || (u = a + (r % nt || nt));
                }
                d &&
                  (function (t, e, i) {
                    const {
                      startAngle: s,
                      pixelMargin: n,
                      x: o,
                      y: a,
                      outerRadius: r,
                      innerRadius: l,
                    } = e;
                    let h = n / r;
                    t.beginPath(),
                      t.arc(o, a, r, s - h, i + h),
                      l > n
                        ? ((h = n / l), t.arc(o, a, l, i + h, s - h, !0))
                        : t.arc(o, a, n, i + lt, s - lt),
                      t.closePath(),
                      t.clip();
                  })(t, e, u),
                  o || (Mn(t, e, i, s, u, n), t.stroke());
              })(t, this, r, n, o),
              t.restore();
          }
        }
        function kn(t, e, i = e) {
          (t.lineCap = B(i.borderCapStyle, e.borderCapStyle)),
            t.setLineDash(B(i.borderDash, e.borderDash)),
            (t.lineDashOffset = B(i.borderDashOffset, e.borderDashOffset)),
            (t.lineJoin = B(i.borderJoinStyle, e.borderJoinStyle)),
            (t.lineWidth = B(i.borderWidth, e.borderWidth)),
            (t.strokeStyle = B(i.borderColor, e.borderColor));
        }
        function Sn(t, e, i) {
          t.lineTo(i.x, i.y);
        }
        function Pn(t, e, i = {}) {
          const s = t.length,
            { start: n = 0, end: o = s - 1 } = i,
            { start: a, end: r } = e,
            l = Math.max(n, a),
            h = Math.min(o, r),
            c = (n < a && o < a) || (n > r && o > r);
          return {
            count: s,
            start: l,
            loop: e.loop,
            ilen: h < l && !c ? s + h - l : h - l,
          };
        }
        function An(t, e, i, s) {
          const { points: n, options: o } = e,
            { count: a, start: r, loop: l, ilen: h } = Pn(n, i, s),
            c = (function (t) {
              return t.stepped
                ? fe
                : t.tension || "monotone" === t.cubicInterpolationMode
                ? ge
                : Sn;
            })(o);
          let d,
            u,
            f,
            { move: g = !0, reverse: p } = s || {};
          for (d = 0; d <= h; ++d)
            (u = n[(r + (p ? h - d : d)) % a]),
              u.skip ||
                (g ? (t.moveTo(u.x, u.y), (g = !1)) : c(t, f, u, p, o.stepped),
                (f = u));
          return (
            l && ((u = n[(r + (p ? h : 0)) % a]), c(t, f, u, p, o.stepped)), !!l
          );
        }
        function Dn(t, e, i, s) {
          const n = e.points,
            { count: o, start: a, ilen: r } = Pn(n, i, s),
            { move: l = !0, reverse: h } = s || {};
          let c,
            d,
            u,
            f,
            g,
            p,
            m = 0,
            b = 0;
          const x = (t) => (a + (h ? r - t : t)) % o,
            _ = () => {
              f !== g && (t.lineTo(m, g), t.lineTo(m, f), t.lineTo(m, p));
            };
          for (l && ((d = n[x(0)]), t.moveTo(d.x, d.y)), c = 0; c <= r; ++c) {
            if (((d = n[x(c)]), d.skip)) continue;
            const e = d.x,
              i = d.y,
              s = 0 | e;
            s === u
              ? (i < f ? (f = i) : i > g && (g = i), (m = (b * m + e) / ++b))
              : (_(), t.lineTo(e, i), (u = s), (b = 0), (f = g = i)),
              (p = i);
          }
          _();
        }
        function Cn(t) {
          const e = t.options,
            i = e.borderDash && e.borderDash.length;
          return t._decimated ||
            t._loop ||
            e.tension ||
            "monotone" === e.cubicInterpolationMode ||
            e.stepped ||
            i
            ? An
            : Dn;
        }
        const On = "function" == typeof Path2D;
        class Ln extends Fs {
          static id = "line";
          static defaults = {
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0,
            borderJoinStyle: "miter",
            borderWidth: 3,
            capBezierPoints: !0,
            cubicInterpolationMode: "default",
            fill: !1,
            spanGaps: !1,
            stepped: !1,
            tension: 0,
          };
          static defaultRoutes = {
            backgroundColor: "backgroundColor",
            borderColor: "borderColor",
          };
          static descriptors = {
            _scriptable: !0,
            _indexable: (t) => "borderDash" !== t && "fill" !== t,
          };
          constructor(t) {
            super(),
              (this.animated = !0),
              (this.options = void 0),
              (this._chart = void 0),
              (this._loop = void 0),
              (this._fullLoop = void 0),
              (this._path = void 0),
              (this._points = void 0),
              (this._segments = void 0),
              (this._decimated = !1),
              (this._pointsUpdated = !1),
              (this._datasetIndex = void 0),
              t && Object.assign(this, t);
          }
          updateControlPoints(t, e) {
            const i = this.options;
            if (
              (i.tension || "monotone" === i.cubicInterpolationMode) &&
              !i.stepped &&
              !this._pointsUpdated
            ) {
              const s = i.spanGaps ? this._loop : this._fullLoop;
              Xe(this._points, i, t, s, e), (this._pointsUpdated = !0);
            }
          }
          set points(t) {
            (this._points = t),
              delete this._segments,
              delete this._path,
              (this._pointsUpdated = !1);
          }
          get points() {
            return this._points;
          }
          get segments() {
            return (
              this._segments ||
              (this._segments = (function (t, e) {
                const i = t.points,
                  s = t.options.spanGaps,
                  n = i.length;
                if (!n) return [];
                const o = !!t._loop,
                  { start: a, end: r } = (function (t, e, i, s) {
                    let n = 0,
                      o = e - 1;
                    if (i && !s) for (; n < e && !t[n].skip; ) n++;
                    for (; n < e && t[n].skip; ) n++;
                    for (n %= e, i && (o += n); o > n && t[o % e].skip; ) o--;
                    return (o %= e), { start: n, end: o };
                  })(i, n, o, s);
                return (function (t, e, i, s) {
                  return s && s.setContext && i
                    ? (function (t, e, i, s) {
                        const n = t._chart.getContext(),
                          o = mi(t.options),
                          {
                            _datasetIndex: a,
                            options: { spanGaps: r },
                          } = t,
                          l = i.length,
                          h = [];
                        let c = o,
                          d = e[0].start,
                          u = d;
                        function f(t, e, s, n) {
                          const o = r ? -1 : 1;
                          if (t !== e) {
                            for (t += l; i[t % l].skip; ) t -= o;
                            for (; i[e % l].skip; ) e += o;
                            t % l != e % l &&
                              (h.push({
                                start: t % l,
                                end: e % l,
                                loop: s,
                                style: n,
                              }),
                              (c = n),
                              (d = e % l));
                          }
                        }
                        for (const t of e) {
                          d = r ? d : t.start;
                          let e,
                            o = i[d % l];
                          for (u = d + 1; u <= t.end; u++) {
                            const r = i[u % l];
                            (e = mi(
                              s.setContext(
                                De(n, {
                                  type: "segment",
                                  p0: o,
                                  p1: r,
                                  p0DataIndex: (u - 1) % l,
                                  p1DataIndex: u % l,
                                  datasetIndex: a,
                                })
                              )
                            )),
                              bi(e, c) && f(d, u - 1, t.loop, c),
                              (o = r),
                              (c = e);
                          }
                          d < u - 1 && f(d, u - 1, t.loop, c);
                        }
                        return h;
                      })(t, e, i, s)
                    : e;
                })(
                  t,
                  !0 === s
                    ? [{ start: a, end: r, loop: o }]
                    : (function (t, e, i, s) {
                        const n = t.length,
                          o = [];
                        let a,
                          r = e,
                          l = t[e];
                        for (a = e + 1; a <= i; ++a) {
                          const i = t[a % n];
                          i.skip || i.stop
                            ? l.skip ||
                              ((s = !1),
                              o.push({
                                start: e % n,
                                end: (a - 1) % n,
                                loop: s,
                              }),
                              (e = r = i.stop ? a : null))
                            : ((r = a), l.skip && (e = a)),
                            (l = i);
                        }
                        return (
                          null !== r &&
                            o.push({ start: e % n, end: r % n, loop: s }),
                          o
                        );
                      })(
                        i,
                        a,
                        r < a ? r + n : r,
                        !!t._fullLoop && 0 === a && r === n - 1
                      ),
                  i,
                  e
                );
              })(this, this.options.segment))
            );
          }
          first() {
            const t = this.segments,
              e = this.points;
            return t.length && e[t[0].start];
          }
          last() {
            const t = this.segments,
              e = this.points,
              i = t.length;
            return i && e[t[i - 1].end];
          }
          interpolate(t, e) {
            const i = this.options,
              s = t[e],
              n = this.points,
              o = pi(this, { property: e, start: s, end: s });
            if (!o.length) return;
            const a = [],
              r = (function (t) {
                return t.stepped
                  ? ri
                  : t.tension || "monotone" === t.cubicInterpolationMode
                  ? li
                  : ai;
              })(i);
            let l, h;
            for (l = 0, h = o.length; l < h; ++l) {
              const { start: h, end: c } = o[l],
                d = n[h],
                u = n[c];
              if (d === u) {
                a.push(d);
                continue;
              }
              const f = r(
                d,
                u,
                Math.abs((s - d[e]) / (u[e] - d[e])),
                i.stepped
              );
              (f[e] = t[e]), a.push(f);
            }
            return 1 === a.length ? a[0] : a;
          }
          pathSegment(t, e, i) {
            return Cn(this)(t, this, e, i);
          }
          path(t, e, i) {
            const s = this.segments,
              n = Cn(this);
            let o = this._loop;
            (e = e || 0), (i = i || this.points.length - e);
            for (const a of s) o &= n(t, this, a, { start: e, end: e + i - 1 });
            return !!o;
          }
          draw(t, e, i, s) {
            const n = this.options || {};
            (this.points || []).length &&
              n.borderWidth &&
              (t.save(),
              (function (t, e, i, s) {
                On && !e.options.segment
                  ? (function (t, e, i, s) {
                      let n = e._path;
                      n ||
                        ((n = e._path = new Path2D()),
                        e.path(n, i, s) && n.closePath()),
                        kn(t, e.options),
                        t.stroke(n);
                    })(t, e, i, s)
                  : (function (t, e, i, s) {
                      const { segments: n, options: o } = e,
                        a = Cn(e);
                      for (const r of n)
                        kn(t, o, r.style),
                          t.beginPath(),
                          a(t, e, r, { start: i, end: i + s - 1 }) &&
                            t.closePath(),
                          t.stroke();
                    })(t, e, i, s);
              })(t, this, i, s),
              t.restore()),
              this.animated &&
                ((this._pointsUpdated = !1), (this._path = void 0));
          }
        }
        function En(t, e, i, s) {
          const n = t.options,
            { [i]: o } = t.getProps([i], s);
          return Math.abs(e - o) < n.radius + n.hitRadius;
        }
        class Tn extends Fs {
          static id = "point";
          static defaults = {
            borderWidth: 1,
            hitRadius: 1,
            hoverBorderWidth: 1,
            hoverRadius: 4,
            pointStyle: "circle",
            radius: 3,
            rotation: 0,
          };
          static defaultRoutes = {
            backgroundColor: "backgroundColor",
            borderColor: "borderColor",
          };
          constructor(t) {
            super(),
              (this.options = void 0),
              (this.parsed = void 0),
              (this.skip = void 0),
              (this.stop = void 0),
              t && Object.assign(this, t);
          }
          inRange(t, e, i) {
            const s = this.options,
              { x: n, y: o } = this.getProps(["x", "y"], i);
            return (
              Math.pow(t - n, 2) + Math.pow(e - o, 2) <
              Math.pow(s.hitRadius + s.radius, 2)
            );
          }
          inXRange(t, e) {
            return En(this, t, "x", e);
          }
          inYRange(t, e) {
            return En(this, t, "y", e);
          }
          getCenterPoint(t) {
            const { x: e, y: i } = this.getProps(["x", "y"], t);
            return { x: e, y: i };
          }
          size(t) {
            let e = (t = t || this.options || {}).radius || 0;
            return (
              (e = Math.max(e, (e && t.hoverRadius) || 0)),
              2 * (e + ((e && t.borderWidth) || 0))
            );
          }
          draw(t, e) {
            const i = this.options;
            this.skip ||
              i.radius < 0.1 ||
              !ce(this, e, this.size(i) / 2) ||
              ((t.strokeStyle = i.borderColor),
              (t.lineWidth = i.borderWidth),
              (t.fillStyle = i.backgroundColor),
              le(t, i, this.x, this.y));
          }
          getRange() {
            const t = this.options || {};
            return t.radius + t.hitRadius;
          }
        }
        function Rn(t, e) {
          const {
            x: i,
            y: s,
            base: n,
            width: o,
            height: a,
          } = t.getProps(["x", "y", "base", "width", "height"], e);
          let r, l, h, c, d;
          return (
            t.horizontal
              ? ((d = a / 2),
                (r = Math.min(i, n)),
                (l = Math.max(i, n)),
                (h = s - d),
                (c = s + d))
              : ((d = o / 2),
                (r = i - d),
                (l = i + d),
                (h = Math.min(s, n)),
                (c = Math.max(s, n))),
            { left: r, top: h, right: l, bottom: c }
          );
        }
        function In(t, e, i, s) {
          return t ? 0 : St(e, i, s);
        }
        function zn(t, e, i, s) {
          const n = null === e,
            o = null === i,
            a = t && !(n && o) && Rn(t, s);
          return (
            a && (n || Pt(e, a.left, a.right)) && (o || Pt(i, a.top, a.bottom))
          );
        }
        function Fn(t, e) {
          t.rect(e.x, e.y, e.w, e.h);
        }
        function Vn(t, e, i = {}) {
          const s = t.x !== i.x ? -e : 0,
            n = t.y !== i.y ? -e : 0,
            o = (t.x + t.w !== i.x + i.w ? e : 0) - s,
            a = (t.y + t.h !== i.y + i.h ? e : 0) - n;
          return {
            x: t.x + s,
            y: t.y + n,
            w: t.w + o,
            h: t.h + a,
            radius: t.radius,
          };
        }
        class jn extends Fs {
          static id = "bar";
          static defaults = {
            borderSkipped: "start",
            borderWidth: 0,
            borderRadius: 0,
            inflateAmount: "auto",
            pointStyle: void 0,
          };
          static defaultRoutes = {
            backgroundColor: "backgroundColor",
            borderColor: "borderColor",
          };
          constructor(t) {
            super(),
              (this.options = void 0),
              (this.horizontal = void 0),
              (this.base = void 0),
              (this.width = void 0),
              (this.height = void 0),
              (this.inflateAmount = void 0),
              t && Object.assign(this, t);
          }
          draw(t) {
            const {
                inflateAmount: e,
                options: { borderColor: i, backgroundColor: s },
              } = this,
              { inner: n, outer: o } = (function (t) {
                const e = Rn(t),
                  i = e.right - e.left,
                  s = e.bottom - e.top,
                  n = (function (t, e, i) {
                    const s = t.options.borderWidth,
                      n = t.borderSkipped,
                      o = we(s);
                    return {
                      t: In(n.top, o.top, 0, i),
                      r: In(n.right, o.right, 0, e),
                      b: In(n.bottom, o.bottom, 0, i),
                      l: In(n.left, o.left, 0, e),
                    };
                  })(t, i / 2, s / 2),
                  o = (function (t, e, i) {
                    const { enableBorderRadius: s } = t.getProps([
                        "enableBorderRadius",
                      ]),
                      n = t.options.borderRadius,
                      o = ke(n),
                      a = Math.min(e, i),
                      r = t.borderSkipped,
                      l = s || F(n);
                    return {
                      topLeft: In(!l || r.top || r.left, o.topLeft, 0, a),
                      topRight: In(!l || r.top || r.right, o.topRight, 0, a),
                      bottomLeft: In(
                        !l || r.bottom || r.left,
                        o.bottomLeft,
                        0,
                        a
                      ),
                      bottomRight: In(
                        !l || r.bottom || r.right,
                        o.bottomRight,
                        0,
                        a
                      ),
                    };
                  })(t, i / 2, s / 2);
                return {
                  outer: { x: e.left, y: e.top, w: i, h: s, radius: o },
                  inner: {
                    x: e.left + n.l,
                    y: e.top + n.t,
                    w: i - n.l - n.r,
                    h: s - n.t - n.b,
                    radius: {
                      topLeft: Math.max(0, o.topLeft - Math.max(n.t, n.l)),
                      topRight: Math.max(0, o.topRight - Math.max(n.t, n.r)),
                      bottomLeft: Math.max(
                        0,
                        o.bottomLeft - Math.max(n.b, n.l)
                      ),
                      bottomRight: Math.max(
                        0,
                        o.bottomRight - Math.max(n.b, n.r)
                      ),
                    },
                  },
                };
              })(this),
              a =
                (r = o.radius).topLeft ||
                r.topRight ||
                r.bottomLeft ||
                r.bottomRight
                  ? xe
                  : Fn;
            var r;
            t.save(),
              (o.w === n.w && o.h === n.h) ||
                (t.beginPath(),
                a(t, Vn(o, e, n)),
                t.clip(),
                a(t, Vn(n, -e, o)),
                (t.fillStyle = i),
                t.fill("evenodd")),
              t.beginPath(),
              a(t, Vn(n, e)),
              (t.fillStyle = s),
              t.fill(),
              t.restore();
          }
          inRange(t, e, i) {
            return zn(this, t, e, i);
          }
          inXRange(t, e) {
            return zn(this, t, null, e);
          }
          inYRange(t, e) {
            return zn(this, null, t, e);
          }
          getCenterPoint(t) {
            const {
              x: e,
              y: i,
              base: s,
              horizontal: n,
            } = this.getProps(["x", "y", "base", "horizontal"], t);
            return { x: n ? (e + s) / 2 : e, y: n ? i : (i + s) / 2 };
          }
          getRange(t) {
            return "x" === t ? this.width / 2 : this.height / 2;
          }
        }
        var Bn = Object.freeze({
          __proto__: null,
          ArcElement: wn,
          LineElement: Ln,
          PointElement: Tn,
          BarElement: jn,
        });
        const Nn = [
            "rgb(54, 162, 235)",
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(153, 102, 255)",
            "rgb(201, 203, 207)",
          ],
          Hn = Nn.map((t) => t.replace("rgb(", "rgba(").replace(")", ", 0.5)"));
        function Wn(t) {
          return Nn[t % Nn.length];
        }
        function $n(t) {
          return Hn[t % Hn.length];
        }
        function Yn(t) {
          let e;
          for (e in t) if (t[e].borderColor || t[e].backgroundColor) return !0;
          return !1;
        }
        var qn = {
          id: "colors",
          defaults: { enabled: !0, forceOverride: !1 },
          beforeLayout(t, e, i) {
            if (!i.enabled) return;
            const {
              options: { elements: s },
              data: { datasets: n },
            } = t.config;
            if (!i.forceOverride && (Yn(n) || (s && Yn(s)))) return;
            const o = (function (t) {
              let e = 0;
              return (i, s) => {
                const n = t.getDatasetMeta(s).controller;
                n instanceof qi
                  ? (e = (function (t, e) {
                      return (t.backgroundColor = t.data.map(() => Wn(e++))), e;
                    })(i, e))
                  : n instanceof Xi
                  ? (e = (function (t, e) {
                      return (t.backgroundColor = t.data.map(() => $n(e++))), e;
                    })(i, e))
                  : n &&
                    (e = (function (t, e) {
                      return (
                        (t.borderColor = Wn(e)),
                        (t.backgroundColor = $n(e)),
                        ++e
                      );
                    })(i, e));
              };
            })(t);
            n.forEach(o);
          },
        };
        function Un(t) {
          if (t._decimated) {
            const e = t._data;
            delete t._decimated,
              delete t._data,
              Object.defineProperty(t, "data", { value: e });
          }
        }
        function Xn(t) {
          t.data.datasets.forEach((t) => {
            Un(t);
          });
        }
        var Kn = {
          id: "decimation",
          defaults: { algorithm: "min-max", enabled: !1 },
          beforeElementsUpdate: (t, e, i) => {
            if (!i.enabled) return void Xn(t);
            const s = t.width;
            t.data.datasets.forEach((e, n) => {
              const { _data: o, indexAxis: a } = e,
                r = t.getDatasetMeta(n),
                l = o || e.data;
              if ("y" === Ae([a, t.options.indexAxis])) return;
              if (!r.controller.supportsDecimation) return;
              const h = t.scales[r.xAxisID];
              if ("linear" !== h.type && "time" !== h.type) return;
              if (t.options.parsing) return;
              let c,
                { start: d, count: u } = (function (t, e) {
                  const i = e.length;
                  let s,
                    n = 0;
                  const { iScale: o } = t,
                    {
                      min: a,
                      max: r,
                      minDefined: l,
                      maxDefined: h,
                    } = o.getUserBounds();
                  return (
                    l && (n = St(Dt(e, o.axis, a).lo, 0, i - 1)),
                    (s = h ? St(Dt(e, o.axis, r).hi + 1, n, i) - n : i - n),
                    { start: n, count: s }
                  );
                })(r, l);
              if (u <= (i.threshold || 4 * s)) Un(e);
              else {
                switch (
                  (I(o) &&
                    ((e._data = l),
                    delete e.data,
                    Object.defineProperty(e, "data", {
                      configurable: !0,
                      enumerable: !0,
                      get: function () {
                        return this._decimated;
                      },
                      set: function (t) {
                        this._data = t;
                      },
                    })),
                  i.algorithm)
                ) {
                  case "lttb":
                    c = (function (t, e, i, s, n) {
                      const o = n.samples || s;
                      if (o >= i) return t.slice(e, e + i);
                      const a = [],
                        r = (i - 2) / (o - 2);
                      let l = 0;
                      const h = e + i - 1;
                      let c,
                        d,
                        u,
                        f,
                        g,
                        p = e;
                      for (a[l++] = t[p], c = 0; c < o - 2; c++) {
                        let s,
                          n = 0,
                          o = 0;
                        const h = Math.floor((c + 1) * r) + 1 + e,
                          m = Math.min(Math.floor((c + 2) * r) + 1, i) + e,
                          b = m - h;
                        for (s = h; s < m; s++) (n += t[s].x), (o += t[s].y);
                        (n /= b), (o /= b);
                        const x = Math.floor(c * r) + 1 + e,
                          _ = Math.min(Math.floor((c + 1) * r) + 1, i) + e,
                          { x: y, y: v } = t[p];
                        for (u = f = -1, s = x; s < _; s++)
                          (f =
                            0.5 *
                            Math.abs(
                              (y - n) * (t[s].y - v) - (y - t[s].x) * (o - v)
                            )),
                            f > u && ((u = f), (d = t[s]), (g = s));
                        (a[l++] = d), (p = g);
                      }
                      return (a[l++] = t[h]), a;
                    })(l, d, u, s, i);
                    break;
                  case "min-max":
                    c = (function (t, e, i, s) {
                      let n,
                        o,
                        a,
                        r,
                        l,
                        h,
                        c,
                        d,
                        u,
                        f,
                        g = 0,
                        p = 0;
                      const m = [],
                        b = e + i - 1,
                        x = t[e].x,
                        _ = t[b].x - x;
                      for (n = e; n < e + i; ++n) {
                        (o = t[n]), (a = ((o.x - x) / _) * s), (r = o.y);
                        const e = 0 | a;
                        if (e === l)
                          r < u
                            ? ((u = r), (h = n))
                            : r > f && ((f = r), (c = n)),
                            (g = (p * g + o.x) / ++p);
                        else {
                          const i = n - 1;
                          if (!I(h) && !I(c)) {
                            const e = Math.min(h, c),
                              s = Math.max(h, c);
                            e !== d && e !== i && m.push({ ...t[e], x: g }),
                              s !== d && s !== i && m.push({ ...t[s], x: g });
                          }
                          n > 0 && i !== d && m.push(t[i]),
                            m.push(o),
                            (l = e),
                            (p = 0),
                            (u = f = r),
                            (h = c = d = n);
                        }
                      }
                      return m;
                    })(l, d, u, s);
                    break;
                  default:
                    throw new Error(
                      `Unsupported decimation algorithm '${i.algorithm}'`
                    );
                }
                e._decimated = c;
              }
            });
          },
          destroy(t) {
            Xn(t);
          },
        };
        function Zn(t, e, i, s) {
          if (s) return;
          let n = e[t],
            o = i[t];
          return (
            "angle" === t && ((n = wt(n)), (o = wt(o))),
            { property: t, start: n, end: o }
          );
        }
        function Gn(t, e, i) {
          for (; e > t; e--) {
            const t = i[e];
            if (!isNaN(t.x) && !isNaN(t.y)) break;
          }
          return e;
        }
        function Qn(t, e, i, s) {
          return t && e ? s(t[i], e[i]) : t ? t[i] : e ? e[i] : 0;
        }
        function Jn(t, e) {
          let i = [],
            s = !1;
          return (
            z(t)
              ? ((s = !0), (i = t))
              : (i = (function (t, e) {
                  const { x: i = null, y: s = null } = t || {},
                    n = e.points,
                    o = [];
                  return (
                    e.segments.forEach(({ start: t, end: e }) => {
                      e = Gn(t, e, n);
                      const a = n[t],
                        r = n[e];
                      null !== s
                        ? (o.push({ x: a.x, y: s }), o.push({ x: r.x, y: s }))
                        : null !== i &&
                          (o.push({ x: i, y: a.y }), o.push({ x: i, y: r.y }));
                    }),
                    o
                  );
                })(t, e)),
            i.length
              ? new Ln({
                  points: i,
                  options: { tension: 0 },
                  _loop: s,
                  _fullLoop: s,
                })
              : null
          );
        }
        function to(t) {
          return t && !1 !== t.fill;
        }
        function eo(t, e, i) {
          let s = t[e].fill;
          const n = [e];
          let o;
          if (!i) return s;
          for (; !1 !== s && -1 === n.indexOf(s); ) {
            if (!V(s)) return s;
            if (((o = t[s]), !o)) return !1;
            if (o.visible) return s;
            n.push(s), (s = o.fill);
          }
          return !1;
        }
        function io(t, e, i) {
          const s = (function (t) {
            const e = t.options,
              i = e.fill;
            let s = B(i && i.target, i);
            return (
              void 0 === s && (s = !!e.backgroundColor),
              !1 !== s && null !== s && (!0 === s ? "origin" : s)
            );
          })(t);
          if (F(s)) return !isNaN(s.value) && s;
          let n = parseFloat(s);
          return V(n) && Math.floor(n) === n
            ? (function (t, e, i, s) {
                return (
                  ("-" !== t && "+" !== t) || (i = e + i),
                  !(i === e || i < 0 || i >= s) && i
                );
              })(s[0], e, n, i)
            : ["origin", "start", "end", "stack", "shape"].indexOf(s) >= 0 && s;
        }
        function so(t, e, i) {
          const s = [];
          for (let n = 0; n < i.length; n++) {
            const o = i[n],
              { first: a, last: r, point: l } = no(o, e, "x");
            if (!(!l || (a && r)))
              if (a) s.unshift(l);
              else if ((t.push(l), !r)) break;
          }
          t.push(...s);
        }
        function no(t, e, i) {
          const s = t.interpolate(e, i);
          if (!s) return {};
          const n = s[i],
            o = t.segments,
            a = t.points;
          let r = !1,
            l = !1;
          for (let t = 0; t < o.length; t++) {
            const e = o[t],
              s = a[e.start][i],
              h = a[e.end][i];
            if (Pt(n, s, h)) {
              (r = n === s), (l = n === h);
              break;
            }
          }
          return { first: r, last: l, point: s };
        }
        class oo {
          constructor(t) {
            (this.x = t.x), (this.y = t.y), (this.radius = t.radius);
          }
          pathSegment(t, e, i) {
            const { x: s, y: n, radius: o } = this;
            return (
              (e = e || { start: 0, end: nt }),
              t.arc(s, n, o, e.end, e.start, !0),
              !i.bounds
            );
          }
          interpolate(t) {
            const { x: e, y: i, radius: s } = this,
              n = t.angle;
            return { x: e + Math.cos(n) * s, y: i + Math.sin(n) * s, angle: n };
          }
        }
        function ao(t, e, i) {
          const s = (function (t) {
              const { chart: e, fill: i, line: s } = t;
              if (V(i))
                return (function (t, e) {
                  const i = t.getDatasetMeta(e);
                  return i && t.isDatasetVisible(e) ? i.dataset : null;
                })(e, i);
              if ("stack" === i)
                return (function (t) {
                  const { scale: e, index: i, line: s } = t,
                    n = [],
                    o = s.segments,
                    a = s.points,
                    r = (function (t, e) {
                      const i = [],
                        s = t.getMatchingVisibleMetas("line");
                      for (let t = 0; t < s.length; t++) {
                        const n = s[t];
                        if (n.index === e) break;
                        n.hidden || i.unshift(n.dataset);
                      }
                      return i;
                    })(e, i);
                  r.push(Jn({ x: null, y: e.bottom }, s));
                  for (let t = 0; t < o.length; t++) {
                    const e = o[t];
                    for (let t = e.start; t <= e.end; t++) so(n, a[t], r);
                  }
                  return new Ln({ points: n, options: {} });
                })(t);
              if ("shape" === i) return !0;
              const n = (function (t) {
                return (t.scale || {}).getPointPositionForValue
                  ? (function (t) {
                      const { scale: e, fill: i } = t,
                        s = e.options,
                        n = e.getLabels().length,
                        o = s.reverse ? e.max : e.min,
                        a = (function (t, e, i) {
                          let s;
                          return (
                            (s =
                              "start" === t
                                ? i
                                : "end" === t
                                ? e.options.reverse
                                  ? e.min
                                  : e.max
                                : F(t)
                                ? t.value
                                : e.getBaseValue()),
                            s
                          );
                        })(i, e, o),
                        r = [];
                      if (s.grid.circular) {
                        const t = e.getPointPositionForValue(0, o);
                        return new oo({
                          x: t.x,
                          y: t.y,
                          radius: e.getDistanceFromCenterForValue(a),
                        });
                      }
                      for (let t = 0; t < n; ++t)
                        r.push(e.getPointPositionForValue(t, a));
                      return r;
                    })(t)
                  : (function (t) {
                      const { scale: e = {}, fill: i } = t,
                        s = (function (t, e) {
                          let i = null;
                          return (
                            "start" === t
                              ? (i = e.bottom)
                              : "end" === t
                              ? (i = e.top)
                              : F(t)
                              ? (i = e.getPixelForValue(t.value))
                              : e.getBasePixel && (i = e.getBasePixel()),
                            i
                          );
                        })(i, e);
                      if (V(s)) {
                        const t = e.isHorizontal();
                        return { x: t ? s : null, y: t ? null : s };
                      }
                      return null;
                    })(t);
              })(t);
              return n instanceof oo ? n : Jn(n, s);
            })(e),
            { line: n, scale: o, axis: a } = e,
            r = n.options,
            l = r.fill,
            h = r.backgroundColor,
            { above: c = h, below: d = h } = l || {};
          s &&
            n.points.length &&
            (de(t, i),
            (function (t, e) {
              const {
                  line: i,
                  target: s,
                  above: n,
                  below: o,
                  area: a,
                  scale: r,
                } = e,
                l = i._loop ? "angle" : e.axis;
              t.save(),
                "x" === l &&
                  o !== n &&
                  (ro(t, s, a.top),
                  lo(t, {
                    line: i,
                    target: s,
                    color: n,
                    scale: r,
                    property: l,
                  }),
                  t.restore(),
                  t.save(),
                  ro(t, s, a.bottom)),
                lo(t, { line: i, target: s, color: o, scale: r, property: l }),
                t.restore();
            })(t, {
              line: n,
              target: s,
              above: c,
              below: d,
              area: i,
              scale: o,
              axis: a,
            }),
            ue(t));
        }
        function ro(t, e, i) {
          const { segments: s, points: n } = e;
          let o = !0,
            a = !1;
          t.beginPath();
          for (const r of s) {
            const { start: s, end: l } = r,
              h = n[s],
              c = n[Gn(s, l, n)];
            o
              ? (t.moveTo(h.x, h.y), (o = !1))
              : (t.lineTo(h.x, i), t.lineTo(h.x, h.y)),
              (a = !!e.pathSegment(t, r, { move: a })),
              a ? t.closePath() : t.lineTo(c.x, i);
          }
          t.lineTo(e.first().x, i), t.closePath(), t.clip();
        }
        function lo(t, e) {
          const { line: i, target: s, property: n, color: o, scale: a } = e,
            r = (function (t, e, i) {
              const s = t.segments,
                n = t.points,
                o = e.points,
                a = [];
              for (const t of s) {
                let { start: s, end: r } = t;
                r = Gn(s, r, n);
                const l = Zn(i, n[s], n[r], t.loop);
                if (!e.segments) {
                  a.push({ source: t, target: l, start: n[s], end: n[r] });
                  continue;
                }
                const h = pi(e, l);
                for (const e of h) {
                  const s = Zn(i, o[e.start], o[e.end], e.loop),
                    r = gi(t, n, s);
                  for (const t of r)
                    a.push({
                      source: t,
                      target: e,
                      start: { [i]: Qn(l, s, "start", Math.max) },
                      end: { [i]: Qn(l, s, "end", Math.min) },
                    });
                }
              }
              return a;
            })(i, s, n);
          for (const { source: e, target: l, start: h, end: c } of r) {
            const { style: { backgroundColor: r = o } = {} } = e,
              d = !0 !== s;
            t.save(),
              (t.fillStyle = r),
              ho(t, a, d && Zn(n, h, c)),
              t.beginPath();
            const u = !!i.pathSegment(t, e);
            let f;
            if (d) {
              u ? t.closePath() : co(t, s, c, n);
              const e = !!s.pathSegment(t, l, { move: u, reverse: !0 });
              (f = u && e), f || co(t, s, h, n);
            }
            t.closePath(), t.fill(f ? "evenodd" : "nonzero"), t.restore();
          }
        }
        function ho(t, e, i) {
          const { top: s, bottom: n } = e.chart.chartArea,
            { property: o, start: a, end: r } = i || {};
          "x" === o && (t.beginPath(), t.rect(a, s, r - a, n - s), t.clip());
        }
        function co(t, e, i, s) {
          const n = e.interpolate(i, s);
          n && t.lineTo(n.x, n.y);
        }
        var uo = {
          id: "filler",
          afterDatasetsUpdate(t, e, i) {
            const s = (t.data.datasets || []).length,
              n = [];
            let o, a, r, l;
            for (a = 0; a < s; ++a)
              (o = t.getDatasetMeta(a)),
                (r = o.dataset),
                (l = null),
                r &&
                  r.options &&
                  r instanceof Ln &&
                  (l = {
                    visible: t.isDatasetVisible(a),
                    index: a,
                    fill: io(r, a, s),
                    chart: t,
                    axis: o.controller.options.indexAxis,
                    scale: o.vScale,
                    line: r,
                  }),
                (o.$filler = l),
                n.push(l);
            for (a = 0; a < s; ++a)
              (l = n[a]),
                l && !1 !== l.fill && (l.fill = eo(n, a, i.propagate));
          },
          beforeDraw(t, e, i) {
            const s = "beforeDraw" === i.drawTime,
              n = t.getSortedVisibleDatasetMetas(),
              o = t.chartArea;
            for (let e = n.length - 1; e >= 0; --e) {
              const i = n[e].$filler;
              i &&
                (i.line.updateControlPoints(o, i.axis),
                s && i.fill && ao(t.ctx, i, o));
            }
          },
          beforeDatasetsDraw(t, e, i) {
            if ("beforeDatasetsDraw" !== i.drawTime) return;
            const s = t.getSortedVisibleDatasetMetas();
            for (let e = s.length - 1; e >= 0; --e) {
              const i = s[e].$filler;
              to(i) && ao(t.ctx, i, t.chartArea);
            }
          },
          beforeDatasetDraw(t, e, i) {
            const s = e.meta.$filler;
            to(s) &&
              "beforeDatasetDraw" === i.drawTime &&
              ao(t.ctx, s, t.chartArea);
          },
          defaults: { propagate: !0, drawTime: "beforeDatasetDraw" },
        };
        const fo = (t, e) => {
          let { boxHeight: i = e, boxWidth: s = e } = t;
          return (
            t.usePointStyle &&
              ((i = Math.min(i, e)), (s = t.pointStyleWidth || Math.min(s, e))),
            { boxWidth: s, boxHeight: i, itemHeight: Math.max(e, i) }
          );
        };
        class go extends Fs {
          constructor(t) {
            super(),
              (this._added = !1),
              (this.legendHitBoxes = []),
              (this._hoveredItem = null),
              (this.doughnutMode = !1),
              (this.chart = t.chart),
              (this.options = t.options),
              (this.ctx = t.ctx),
              (this.legendItems = void 0),
              (this.columnSizes = void 0),
              (this.lineWidths = void 0),
              (this.maxHeight = void 0),
              (this.maxWidth = void 0),
              (this.top = void 0),
              (this.bottom = void 0),
              (this.left = void 0),
              (this.right = void 0),
              (this.height = void 0),
              (this.width = void 0),
              (this._margins = void 0),
              (this.position = void 0),
              (this.weight = void 0),
              (this.fullSize = void 0);
          }
          update(t, e, i) {
            (this.maxWidth = t),
              (this.maxHeight = e),
              (this._margins = i),
              this.setDimensions(),
              this.buildLabels(),
              this.fit();
          }
          setDimensions() {
            this.isHorizontal()
              ? ((this.width = this.maxWidth),
                (this.left = this._margins.left),
                (this.right = this.width))
              : ((this.height = this.maxHeight),
                (this.top = this._margins.top),
                (this.bottom = this.height));
          }
          buildLabels() {
            const t = this.options.labels || {};
            let e = H(t.generateLabels, [this.chart], this) || [];
            t.filter && (e = e.filter((e) => t.filter(e, this.chart.data))),
              t.sort && (e = e.sort((e, i) => t.sort(e, i, this.chart.data))),
              this.options.reverse && e.reverse(),
              (this.legendItems = e);
          }
          fit() {
            const { options: t, ctx: e } = this;
            if (!t.display) return void (this.width = this.height = 0);
            const i = t.labels,
              s = Pe(i.font),
              n = s.size,
              o = this._computeTitleHeight(),
              { boxWidth: a, itemHeight: r } = fo(i, n);
            let l, h;
            (e.font = s.string),
              this.isHorizontal()
                ? ((l = this.maxWidth), (h = this._fitRows(o, n, a, r) + 10))
                : ((h = this.maxHeight), (l = this._fitCols(o, s, a, r) + 10)),
              (this.width = Math.min(l, t.maxWidth || this.maxWidth)),
              (this.height = Math.min(h, t.maxHeight || this.maxHeight));
          }
          _fitRows(t, e, i, s) {
            const {
                ctx: n,
                maxWidth: o,
                options: {
                  labels: { padding: a },
                },
              } = this,
              r = (this.legendHitBoxes = []),
              l = (this.lineWidths = [0]),
              h = s + a;
            let c = t;
            (n.textAlign = "left"), (n.textBaseline = "middle");
            let d = -1,
              u = -h;
            return (
              this.legendItems.forEach((t, f) => {
                const g = i + e / 2 + n.measureText(t.text).width;
                (0 === f || l[l.length - 1] + g + 2 * a > o) &&
                  ((c += h),
                  (l[l.length - (f > 0 ? 0 : 1)] = 0),
                  (u += h),
                  d++),
                  (r[f] = { left: 0, top: u, row: d, width: g, height: s }),
                  (l[l.length - 1] += g + a);
              }),
              c
            );
          }
          _fitCols(t, e, i, s) {
            const {
                ctx: n,
                maxHeight: o,
                options: {
                  labels: { padding: a },
                },
              } = this,
              r = (this.legendHitBoxes = []),
              l = (this.columnSizes = []),
              h = o - t;
            let c = a,
              d = 0,
              u = 0,
              f = 0,
              g = 0;
            return (
              this.legendItems.forEach((t, o) => {
                const { itemWidth: p, itemHeight: m } = (function (
                  t,
                  e,
                  i,
                  s,
                  n
                ) {
                  const o = (function (t, e, i, s) {
                      let n = t.text;
                      return (
                        n &&
                          "string" != typeof n &&
                          (n = n.reduce((t, e) =>
                            t.length > e.length ? t : e
                          )),
                        e + i.size / 2 + s.measureText(n).width
                      );
                    })(s, t, e, i),
                    a = (function (t, e, i) {
                      let s = t;
                      return "string" != typeof e.text && (s = po(e, i)), s;
                    })(n, s, e.lineHeight);
                  return { itemWidth: o, itemHeight: a };
                })(i, e, n, t, s);
                o > 0 &&
                  u + m + 2 * a > h &&
                  ((c += d + a),
                  l.push({ width: d, height: u }),
                  (f += d + a),
                  g++,
                  (d = u = 0)),
                  (r[o] = { left: f, top: u, col: g, width: p, height: m }),
                  (d = Math.max(d, p)),
                  (u += m + a);
              }),
              (c += d),
              l.push({ width: d, height: u }),
              c
            );
          }
          adjustHitBoxes() {
            if (!this.options.display) return;
            const t = this._computeTitleHeight(),
              {
                legendHitBoxes: e,
                options: {
                  align: i,
                  labels: { padding: s },
                  rtl: n,
                },
              } = this,
              o = hi(n, this.left, this.width);
            if (this.isHorizontal()) {
              let n = 0,
                a = zt(i, this.left + s, this.right - this.lineWidths[n]);
              for (const r of e)
                n !== r.row &&
                  ((n = r.row),
                  (a = zt(i, this.left + s, this.right - this.lineWidths[n]))),
                  (r.top += this.top + t + s),
                  (r.left = o.leftForLtr(o.x(a), r.width)),
                  (a += r.width + s);
            } else {
              let n = 0,
                a = zt(
                  i,
                  this.top + t + s,
                  this.bottom - this.columnSizes[n].height
                );
              for (const r of e)
                r.col !== n &&
                  ((n = r.col),
                  (a = zt(
                    i,
                    this.top + t + s,
                    this.bottom - this.columnSizes[n].height
                  ))),
                  (r.top = a),
                  (r.left += this.left + s),
                  (r.left = o.leftForLtr(o.x(r.left), r.width)),
                  (a += r.height + s);
            }
          }
          isHorizontal() {
            return (
              "top" === this.options.position ||
              "bottom" === this.options.position
            );
          }
          draw() {
            if (this.options.display) {
              const t = this.ctx;
              de(t, this), this._draw(), ue(t);
            }
          }
          _draw() {
            const { options: t, columnSizes: e, lineWidths: i, ctx: s } = this,
              { align: n, labels: o } = t,
              a = se.color,
              r = hi(t.rtl, this.left, this.width),
              l = Pe(o.font),
              { padding: h } = o,
              c = l.size,
              d = c / 2;
            let u;
            this.drawTitle(),
              (s.textAlign = r.textAlign("left")),
              (s.textBaseline = "middle"),
              (s.lineWidth = 0.5),
              (s.font = l.string);
            const { boxWidth: f, boxHeight: g, itemHeight: p } = fo(o, c),
              m = this.isHorizontal(),
              b = this._computeTitleHeight();
            (u = m
              ? {
                  x: zt(n, this.left + h, this.right - i[0]),
                  y: this.top + h + b,
                  line: 0,
                }
              : {
                  x: this.left + h,
                  y: zt(n, this.top + b + h, this.bottom - e[0].height),
                  line: 0,
                }),
              ci(this.ctx, t.textDirection);
            const x = p + h;
            this.legendItems.forEach((_, y) => {
              (s.strokeStyle = _.fontColor), (s.fillStyle = _.fontColor);
              const v = s.measureText(_.text).width,
                M = r.textAlign(_.textAlign || (_.textAlign = o.textAlign)),
                w = f + d + v;
              let k = u.x,
                S = u.y;
              if (
                (r.setWidth(this.width),
                m
                  ? y > 0 &&
                    k + w + h > this.right &&
                    ((S = u.y += x),
                    u.line++,
                    (k = u.x = zt(n, this.left + h, this.right - i[u.line])))
                  : y > 0 &&
                    S + x > this.bottom &&
                    ((k = u.x = k + e[u.line].width + h),
                    u.line++,
                    (S = u.y =
                      zt(n, this.top + b + h, this.bottom - e[u.line].height))),
                (function (t, e, i) {
                  if (isNaN(f) || f <= 0 || isNaN(g) || g < 0) return;
                  s.save();
                  const n = B(i.lineWidth, 1);
                  if (
                    ((s.fillStyle = B(i.fillStyle, a)),
                    (s.lineCap = B(i.lineCap, "butt")),
                    (s.lineDashOffset = B(i.lineDashOffset, 0)),
                    (s.lineJoin = B(i.lineJoin, "miter")),
                    (s.lineWidth = n),
                    (s.strokeStyle = B(i.strokeStyle, a)),
                    s.setLineDash(B(i.lineDash, [])),
                    o.usePointStyle)
                  ) {
                    const a = {
                        radius: (g * Math.SQRT2) / 2,
                        pointStyle: i.pointStyle,
                        rotation: i.rotation,
                        borderWidth: n,
                      },
                      l = r.xPlus(t, f / 2);
                    he(s, a, l, e + d, o.pointStyleWidth && f);
                  } else {
                    const o = e + Math.max((c - g) / 2, 0),
                      a = r.leftForLtr(t, f),
                      l = ke(i.borderRadius);
                    s.beginPath(),
                      Object.values(l).some((t) => 0 !== t)
                        ? xe(s, { x: a, y: o, w: f, h: g, radius: l })
                        : s.rect(a, o, f, g),
                      s.fill(),
                      0 !== n && s.stroke();
                  }
                  s.restore();
                })(r.x(k), S, _),
                (k = ((t, e, i, s) =>
                  t === (s ? "left" : "right")
                    ? i
                    : "center" === t
                    ? (e + i) / 2
                    : e)(M, k + f + d, m ? k + w : this.right, t.rtl)),
                (function (t, e, i) {
                  pe(s, i.text, t, e + p / 2, l, {
                    strikethrough: i.hidden,
                    textAlign: r.textAlign(i.textAlign),
                  });
                })(r.x(k), S, _),
                m)
              )
                u.x += w + h;
              else if ("string" != typeof _.text) {
                const t = l.lineHeight;
                u.y += po(_, t);
              } else u.y += x;
            }),
              di(this.ctx, t.textDirection);
          }
          drawTitle() {
            const t = this.options,
              e = t.title,
              i = Pe(e.font),
              s = Se(e.padding);
            if (!e.display) return;
            const n = hi(t.rtl, this.left, this.width),
              o = this.ctx,
              a = e.position,
              r = i.size / 2,
              l = s.top + r;
            let h,
              c = this.left,
              d = this.width;
            if (this.isHorizontal())
              (d = Math.max(...this.lineWidths)),
                (h = this.top + l),
                (c = zt(t.align, c, this.right - d));
            else {
              const e = this.columnSizes.reduce(
                (t, e) => Math.max(t, e.height),
                0
              );
              h =
                l +
                zt(
                  t.align,
                  this.top,
                  this.bottom -
                    e -
                    t.labels.padding -
                    this._computeTitleHeight()
                );
            }
            const u = zt(a, c, c + d);
            (o.textAlign = n.textAlign(It(a))),
              (o.textBaseline = "middle"),
              (o.strokeStyle = e.color),
              (o.fillStyle = e.color),
              (o.font = i.string),
              pe(o, e.text, u, h, i);
          }
          _computeTitleHeight() {
            const t = this.options.title,
              e = Pe(t.font),
              i = Se(t.padding);
            return t.display ? e.lineHeight + i.height : 0;
          }
          _getLegendItemAt(t, e) {
            let i, s, n;
            if (Pt(t, this.left, this.right) && Pt(e, this.top, this.bottom))
              for (n = this.legendHitBoxes, i = 0; i < n.length; ++i)
                if (
                  ((s = n[i]),
                  Pt(t, s.left, s.left + s.width) &&
                    Pt(e, s.top, s.top + s.height))
                )
                  return this.legendItems[i];
            return null;
          }
          handleEvent(t) {
            const e = this.options;
            if (
              !(function (t, e) {
                return (
                  !(
                    ("mousemove" !== t && "mouseout" !== t) ||
                    (!e.onHover && !e.onLeave)
                  ) || !(!e.onClick || ("click" !== t && "mouseup" !== t))
                );
              })(t.type, e)
            )
              return;
            const i = this._getLegendItemAt(t.x, t.y);
            if ("mousemove" === t.type || "mouseout" === t.type) {
              const o = this._hoveredItem,
                a =
                  ((n = i),
                  null !== (s = o) &&
                    null !== n &&
                    s.datasetIndex === n.datasetIndex &&
                    s.index === n.index);
              o && !a && H(e.onLeave, [t, o, this], this),
                (this._hoveredItem = i),
                i && !a && H(e.onHover, [t, i, this], this);
            } else i && H(e.onClick, [t, i, this], this);
            var s, n;
          }
        }
        function po(t, e) {
          return e * (t.text ? t.text.length + 0.5 : 0);
        }
        var mo = {
          id: "legend",
          _element: go,
          start(t, e, i) {
            const s = (t.legend = new go({ ctx: t.ctx, options: i, chart: t }));
            _s.configure(t, s, i), _s.addBox(t, s);
          },
          stop(t) {
            _s.removeBox(t, t.legend), delete t.legend;
          },
          beforeUpdate(t, e, i) {
            const s = t.legend;
            _s.configure(t, s, i), (s.options = i);
          },
          afterUpdate(t) {
            const e = t.legend;
            e.buildLabels(), e.adjustHitBoxes();
          },
          afterEvent(t, e) {
            e.replay || t.legend.handleEvent(e.event);
          },
          defaults: {
            display: !0,
            position: "top",
            align: "center",
            fullSize: !0,
            reverse: !1,
            weight: 1e3,
            onClick(t, e, i) {
              const s = e.datasetIndex,
                n = i.chart;
              n.isDatasetVisible(s)
                ? (n.hide(s), (e.hidden = !0))
                : (n.show(s), (e.hidden = !1));
            },
            onHover: null,
            onLeave: null,
            labels: {
              color: (t) => t.chart.options.color,
              boxWidth: 40,
              padding: 10,
              generateLabels(t) {
                const e = t.data.datasets,
                  {
                    labels: {
                      usePointStyle: i,
                      pointStyle: s,
                      textAlign: n,
                      color: o,
                      useBorderRadius: a,
                      borderRadius: r,
                    },
                  } = t.legend.options;
                return t._getSortedDatasetMetas().map((t) => {
                  const l = t.controller.getStyle(i ? 0 : void 0),
                    h = Se(l.borderWidth);
                  return {
                    text: e[t.index].label,
                    fillStyle: l.backgroundColor,
                    fontColor: o,
                    hidden: !t.visible,
                    lineCap: l.borderCapStyle,
                    lineDash: l.borderDash,
                    lineDashOffset: l.borderDashOffset,
                    lineJoin: l.borderJoinStyle,
                    lineWidth: (h.width + h.height) / 4,
                    strokeStyle: l.borderColor,
                    pointStyle: s || l.pointStyle,
                    rotation: l.rotation,
                    textAlign: n || l.textAlign,
                    borderRadius: a && (r || l.borderRadius),
                    datasetIndex: t.index,
                  };
                }, this);
              },
            },
            title: {
              color: (t) => t.chart.options.color,
              display: !1,
              position: "center",
              text: "",
            },
          },
          descriptors: {
            _scriptable: (t) => !t.startsWith("on"),
            labels: {
              _scriptable: (t) =>
                !["generateLabels", "filter", "sort"].includes(t),
            },
          },
        };
        class bo extends Fs {
          constructor(t) {
            super(),
              (this.chart = t.chart),
              (this.options = t.options),
              (this.ctx = t.ctx),
              (this._padding = void 0),
              (this.top = void 0),
              (this.bottom = void 0),
              (this.left = void 0),
              (this.right = void 0),
              (this.width = void 0),
              (this.height = void 0),
              (this.position = void 0),
              (this.weight = void 0),
              (this.fullSize = void 0);
          }
          update(t, e) {
            const i = this.options;
            if (((this.left = 0), (this.top = 0), !i.display))
              return void (this.width =
                this.height =
                this.right =
                this.bottom =
                  0);
            (this.width = this.right = t), (this.height = this.bottom = e);
            const s = z(i.text) ? i.text.length : 1;
            this._padding = Se(i.padding);
            const n = s * Pe(i.font).lineHeight + this._padding.height;
            this.isHorizontal() ? (this.height = n) : (this.width = n);
          }
          isHorizontal() {
            const t = this.options.position;
            return "top" === t || "bottom" === t;
          }
          _drawArgs(t) {
            const { top: e, left: i, bottom: s, right: n, options: o } = this,
              a = o.align;
            let r,
              l,
              h,
              c = 0;
            return (
              this.isHorizontal()
                ? ((l = zt(a, i, n)), (h = e + t), (r = n - i))
                : ("left" === o.position
                    ? ((l = i + t), (h = zt(a, s, e)), (c = -0.5 * st))
                    : ((l = n - t), (h = zt(a, e, s)), (c = 0.5 * st)),
                  (r = s - e)),
              { titleX: l, titleY: h, maxWidth: r, rotation: c }
            );
          }
          draw() {
            const t = this.ctx,
              e = this.options;
            if (!e.display) return;
            const i = Pe(e.font),
              s = i.lineHeight / 2 + this._padding.top,
              {
                titleX: n,
                titleY: o,
                maxWidth: a,
                rotation: r,
              } = this._drawArgs(s);
            pe(t, e.text, 0, 0, i, {
              color: e.color,
              maxWidth: a,
              rotation: r,
              textAlign: It(e.align),
              textBaseline: "middle",
              translation: [n, o],
            });
          }
        }
        var xo = {
          id: "title",
          _element: bo,
          start(t, e, i) {
            !(function (t, e) {
              const i = new bo({ ctx: t.ctx, options: e, chart: t });
              _s.configure(t, i, e), _s.addBox(t, i), (t.titleBlock = i);
            })(t, i);
          },
          stop(t) {
            const e = t.titleBlock;
            _s.removeBox(t, e), delete t.titleBlock;
          },
          beforeUpdate(t, e, i) {
            const s = t.titleBlock;
            _s.configure(t, s, i), (s.options = i);
          },
          defaults: {
            align: "center",
            display: !1,
            font: { weight: "bold" },
            fullSize: !0,
            padding: 10,
            position: "top",
            text: "",
            weight: 2e3,
          },
          defaultRoutes: { color: "color" },
          descriptors: { _scriptable: !0, _indexable: !1 },
        };
        const _o = new WeakMap();
        var yo = {
          id: "subtitle",
          start(t, e, i) {
            const s = new bo({ ctx: t.ctx, options: i, chart: t });
            _s.configure(t, s, i), _s.addBox(t, s), _o.set(t, s);
          },
          stop(t) {
            _s.removeBox(t, _o.get(t)), _o.delete(t);
          },
          beforeUpdate(t, e, i) {
            const s = _o.get(t);
            _s.configure(t, s, i), (s.options = i);
          },
          defaults: {
            align: "center",
            display: !1,
            font: { weight: "normal" },
            fullSize: !0,
            padding: 0,
            position: "top",
            text: "",
            weight: 1500,
          },
          defaultRoutes: { color: "color" },
          descriptors: { _scriptable: !0, _indexable: !1 },
        };
        const vo = {
          average(t) {
            if (!t.length) return !1;
            let e,
              i,
              s = 0,
              n = 0,
              o = 0;
            for (e = 0, i = t.length; e < i; ++e) {
              const i = t[e].element;
              if (i && i.hasValue()) {
                const t = i.tooltipPosition();
                (s += t.x), (n += t.y), ++o;
              }
            }
            return { x: s / o, y: n / o };
          },
          nearest(t, e) {
            if (!t.length) return !1;
            let i,
              s,
              n,
              o = e.x,
              a = e.y,
              r = Number.POSITIVE_INFINITY;
            for (i = 0, s = t.length; i < s; ++i) {
              const s = t[i].element;
              if (s && s.hasValue()) {
                const t = vt(e, s.getCenterPoint());
                t < r && ((r = t), (n = s));
              }
            }
            if (n) {
              const t = n.tooltipPosition();
              (o = t.x), (a = t.y);
            }
            return { x: o, y: a };
          },
        };
        function Mo(t, e) {
          return e && (z(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
        }
        function wo(t) {
          return ("string" == typeof t || t instanceof String) &&
            t.indexOf("\n") > -1
            ? t.split("\n")
            : t;
        }
        function ko(t, e) {
          const { element: i, datasetIndex: s, index: n } = e,
            o = t.getDatasetMeta(s).controller,
            { label: a, value: r } = o.getLabelAndValue(n);
          return {
            chart: t,
            label: a,
            parsed: o.getParsed(n),
            raw: t.data.datasets[s].data[n],
            formattedValue: r,
            dataset: o.getDataset(),
            dataIndex: n,
            datasetIndex: s,
            element: i,
          };
        }
        function So(t, e) {
          const i = t.chart.ctx,
            { body: s, footer: n, title: o } = t,
            { boxWidth: a, boxHeight: r } = e,
            l = Pe(e.bodyFont),
            h = Pe(e.titleFont),
            c = Pe(e.footerFont),
            d = o.length,
            u = n.length,
            f = s.length,
            g = Se(e.padding);
          let p = g.height,
            m = 0,
            b = s.reduce(
              (t, e) => t + e.before.length + e.lines.length + e.after.length,
              0
            );
          (b += t.beforeBody.length + t.afterBody.length),
            d &&
              (p +=
                d * h.lineHeight +
                (d - 1) * e.titleSpacing +
                e.titleMarginBottom),
            b &&
              (p +=
                f *
                  (e.displayColors ? Math.max(r, l.lineHeight) : l.lineHeight) +
                (b - f) * l.lineHeight +
                (b - 1) * e.bodySpacing),
            u &&
              (p +=
                e.footerMarginTop +
                u * c.lineHeight +
                (u - 1) * e.footerSpacing);
          let x = 0;
          const _ = function (t) {
            m = Math.max(m, i.measureText(t).width + x);
          };
          return (
            i.save(),
            (i.font = h.string),
            W(t.title, _),
            (i.font = l.string),
            W(t.beforeBody.concat(t.afterBody), _),
            (x = e.displayColors ? a + 2 + e.boxPadding : 0),
            W(s, (t) => {
              W(t.before, _), W(t.lines, _), W(t.after, _);
            }),
            (x = 0),
            (i.font = c.string),
            W(t.footer, _),
            i.restore(),
            (m += g.width),
            { width: m, height: p }
          );
        }
        function Po(t, e, i, s) {
          const { x: n, width: o } = i,
            {
              width: a,
              chartArea: { left: r, right: l },
            } = t;
          let h = "center";
          return (
            "center" === s
              ? (h = n <= (r + l) / 2 ? "left" : "right")
              : n <= o / 2
              ? (h = "left")
              : n >= a - o / 2 && (h = "right"),
            (function (t, e, i, s) {
              const { x: n, width: o } = s,
                a = i.caretSize + i.caretPadding;
              return (
                ("left" === t && n + o + a > e.width) ||
                ("right" === t && n - o - a < 0) ||
                void 0
              );
            })(h, t, e, i) && (h = "center"),
            h
          );
        }
        function Ao(t, e, i) {
          const s =
            i.yAlign ||
            e.yAlign ||
            (function (t, e) {
              const { y: i, height: s } = e;
              return i < s / 2
                ? "top"
                : i > t.height - s / 2
                ? "bottom"
                : "center";
            })(t, i);
          return { xAlign: i.xAlign || e.xAlign || Po(t, e, i, s), yAlign: s };
        }
        function Do(t, e, i, s) {
          const { caretSize: n, caretPadding: o, cornerRadius: a } = t,
            { xAlign: r, yAlign: l } = i,
            h = n + o,
            { topLeft: c, topRight: d, bottomLeft: u, bottomRight: f } = ke(a);
          let g = (function (t, e) {
            let { x: i, width: s } = t;
            return "right" === e ? (i -= s) : "center" === e && (i -= s / 2), i;
          })(e, r);
          const p = (function (t, e, i) {
            let { y: s, height: n } = t;
            return (
              "top" === e ? (s += i) : (s -= "bottom" === e ? n + i : n / 2), s
            );
          })(e, l, h);
          return (
            "center" === l
              ? "left" === r
                ? (g += h)
                : "right" === r && (g -= h)
              : "left" === r
              ? (g -= Math.max(c, u) + n)
              : "right" === r && (g += Math.max(d, f) + n),
            { x: St(g, 0, s.width - e.width), y: St(p, 0, s.height - e.height) }
          );
        }
        function Co(t, e, i) {
          const s = Se(i.padding);
          return "center" === e
            ? t.x + t.width / 2
            : "right" === e
            ? t.x + t.width - s.right
            : t.x + s.left;
        }
        function Oo(t) {
          return Mo([], wo(t));
        }
        function Lo(t, e) {
          const i =
            e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
          return i ? t.override(i) : t;
        }
        const Eo = {
          beforeTitle: T,
          title(t) {
            if (t.length > 0) {
              const e = t[0],
                i = e.chart.data.labels,
                s = i ? i.length : 0;
              if (this && this.options && "dataset" === this.options.mode)
                return e.dataset.label || "";
              if (e.label) return e.label;
              if (s > 0 && e.dataIndex < s) return i[e.dataIndex];
            }
            return "";
          },
          afterTitle: T,
          beforeBody: T,
          beforeLabel: T,
          label(t) {
            if (this && this.options && "dataset" === this.options.mode)
              return t.label + ": " + t.formattedValue || t.formattedValue;
            let e = t.dataset.label || "";
            e && (e += ": ");
            const i = t.formattedValue;
            return I(i) || (e += i), e;
          },
          labelColor(t) {
            const e = t.chart
              .getDatasetMeta(t.datasetIndex)
              .controller.getStyle(t.dataIndex);
            return {
              borderColor: e.borderColor,
              backgroundColor: e.backgroundColor,
              borderWidth: e.borderWidth,
              borderDash: e.borderDash,
              borderDashOffset: e.borderDashOffset,
              borderRadius: 0,
            };
          },
          labelTextColor() {
            return this.options.bodyColor;
          },
          labelPointStyle(t) {
            const e = t.chart
              .getDatasetMeta(t.datasetIndex)
              .controller.getStyle(t.dataIndex);
            return { pointStyle: e.pointStyle, rotation: e.rotation };
          },
          afterLabel: T,
          afterBody: T,
          beforeFooter: T,
          footer: T,
          afterFooter: T,
        };
        function To(t, e, i, s) {
          const n = t[e].call(i, s);
          return void 0 === n ? Eo[e].call(i, s) : n;
        }
        class Ro extends Fs {
          static positioners = vo;
          constructor(t) {
            super(),
              (this.opacity = 0),
              (this._active = []),
              (this._eventPosition = void 0),
              (this._size = void 0),
              (this._cachedAnimations = void 0),
              (this._tooltipItems = []),
              (this.$animations = void 0),
              (this.$context = void 0),
              (this.chart = t.chart),
              (this.options = t.options),
              (this.dataPoints = void 0),
              (this.title = void 0),
              (this.beforeBody = void 0),
              (this.body = void 0),
              (this.afterBody = void 0),
              (this.footer = void 0),
              (this.xAlign = void 0),
              (this.yAlign = void 0),
              (this.x = void 0),
              (this.y = void 0),
              (this.height = void 0),
              (this.width = void 0),
              (this.caretX = void 0),
              (this.caretY = void 0),
              (this.labelColors = void 0),
              (this.labelPointStyles = void 0),
              (this.labelTextColors = void 0);
          }
          initialize(t) {
            (this.options = t),
              (this._cachedAnimations = void 0),
              (this.$context = void 0);
          }
          _resolveAnimations() {
            const t = this._cachedAnimations;
            if (t) return t;
            const e = this.chart,
              i = this.options.setContext(this.getContext()),
              s = i.enabled && e.options.animation && i.animations,
              n = new wi(this.chart, s);
            return (
              s._cacheable && (this._cachedAnimations = Object.freeze(n)), n
            );
          }
          getContext() {
            return (
              this.$context ||
              (this.$context =
                (this,
                De(this.chart.getContext(), {
                  tooltip: this,
                  tooltipItems: this._tooltipItems,
                  type: "tooltip",
                })))
            );
          }
          getTitle(t, e) {
            const { callbacks: i } = e,
              s = To(i, "beforeTitle", this, t),
              n = To(i, "title", this, t),
              o = To(i, "afterTitle", this, t);
            let a = [];
            return (
              (a = Mo(a, wo(s))), (a = Mo(a, wo(n))), (a = Mo(a, wo(o))), a
            );
          }
          getBeforeBody(t, e) {
            return Oo(To(e.callbacks, "beforeBody", this, t));
          }
          getBody(t, e) {
            const { callbacks: i } = e,
              s = [];
            return (
              W(t, (t) => {
                const e = { before: [], lines: [], after: [] },
                  n = Lo(i, t);
                Mo(e.before, wo(To(n, "beforeLabel", this, t))),
                  Mo(e.lines, To(n, "label", this, t)),
                  Mo(e.after, wo(To(n, "afterLabel", this, t))),
                  s.push(e);
              }),
              s
            );
          }
          getAfterBody(t, e) {
            return Oo(To(e.callbacks, "afterBody", this, t));
          }
          getFooter(t, e) {
            const { callbacks: i } = e,
              s = To(i, "beforeFooter", this, t),
              n = To(i, "footer", this, t),
              o = To(i, "afterFooter", this, t);
            let a = [];
            return (
              (a = Mo(a, wo(s))), (a = Mo(a, wo(n))), (a = Mo(a, wo(o))), a
            );
          }
          _createItems(t) {
            const e = this._active,
              i = this.chart.data,
              s = [],
              n = [],
              o = [];
            let a,
              r,
              l = [];
            for (a = 0, r = e.length; a < r; ++a) l.push(ko(this.chart, e[a]));
            return (
              t.filter && (l = l.filter((e, s, n) => t.filter(e, s, n, i))),
              t.itemSort && (l = l.sort((e, s) => t.itemSort(e, s, i))),
              W(l, (e) => {
                const i = Lo(t.callbacks, e);
                s.push(To(i, "labelColor", this, e)),
                  n.push(To(i, "labelPointStyle", this, e)),
                  o.push(To(i, "labelTextColor", this, e));
              }),
              (this.labelColors = s),
              (this.labelPointStyles = n),
              (this.labelTextColors = o),
              (this.dataPoints = l),
              l
            );
          }
          update(t, e) {
            const i = this.options.setContext(this.getContext()),
              s = this._active;
            let n,
              o = [];
            if (s.length) {
              const t = vo[i.position].call(this, s, this._eventPosition);
              (o = this._createItems(i)),
                (this.title = this.getTitle(o, i)),
                (this.beforeBody = this.getBeforeBody(o, i)),
                (this.body = this.getBody(o, i)),
                (this.afterBody = this.getAfterBody(o, i)),
                (this.footer = this.getFooter(o, i));
              const e = (this._size = So(this, i)),
                a = Object.assign({}, t, e),
                r = Ao(this.chart, i, a),
                l = Do(i, a, r, this.chart);
              (this.xAlign = r.xAlign),
                (this.yAlign = r.yAlign),
                (n = {
                  opacity: 1,
                  x: l.x,
                  y: l.y,
                  width: e.width,
                  height: e.height,
                  caretX: t.x,
                  caretY: t.y,
                });
            } else 0 !== this.opacity && (n = { opacity: 0 });
            (this._tooltipItems = o),
              (this.$context = void 0),
              n && this._resolveAnimations().update(this, n),
              t &&
                i.external &&
                i.external.call(this, {
                  chart: this.chart,
                  tooltip: this,
                  replay: e,
                });
          }
          drawCaret(t, e, i, s) {
            const n = this.getCaretPosition(t, i, s);
            e.lineTo(n.x1, n.y1), e.lineTo(n.x2, n.y2), e.lineTo(n.x3, n.y3);
          }
          getCaretPosition(t, e, i) {
            const { xAlign: s, yAlign: n } = this,
              { caretSize: o, cornerRadius: a } = i,
              {
                topLeft: r,
                topRight: l,
                bottomLeft: h,
                bottomRight: c,
              } = ke(a),
              { x: d, y: u } = t,
              { width: f, height: g } = e;
            let p, m, b, x, _, y;
            return (
              "center" === n
                ? ((_ = u + g / 2),
                  "left" === s
                    ? ((p = d), (m = p - o), (x = _ + o), (y = _ - o))
                    : ((p = d + f), (m = p + o), (x = _ - o), (y = _ + o)),
                  (b = p))
                : ((m =
                    "left" === s
                      ? d + Math.max(r, h) + o
                      : "right" === s
                      ? d + f - Math.max(l, c) - o
                      : this.caretX),
                  "top" === n
                    ? ((x = u), (_ = x - o), (p = m - o), (b = m + o))
                    : ((x = u + g), (_ = x + o), (p = m + o), (b = m - o)),
                  (y = x)),
              { x1: p, x2: m, x3: b, y1: x, y2: _, y3: y }
            );
          }
          drawTitle(t, e, i) {
            const s = this.title,
              n = s.length;
            let o, a, r;
            if (n) {
              const l = hi(i.rtl, this.x, this.width);
              for (
                t.x = Co(this, i.titleAlign, i),
                  e.textAlign = l.textAlign(i.titleAlign),
                  e.textBaseline = "middle",
                  o = Pe(i.titleFont),
                  a = i.titleSpacing,
                  e.fillStyle = i.titleColor,
                  e.font = o.string,
                  r = 0;
                r < n;
                ++r
              )
                e.fillText(s[r], l.x(t.x), t.y + o.lineHeight / 2),
                  (t.y += o.lineHeight + a),
                  r + 1 === n && (t.y += i.titleMarginBottom - a);
            }
          }
          _drawColorBox(t, e, i, s, n) {
            const o = this.labelColors[i],
              a = this.labelPointStyles[i],
              { boxHeight: r, boxWidth: l, boxPadding: h } = n,
              c = Pe(n.bodyFont),
              d = Co(this, "left", n),
              u = s.x(d),
              f = r < c.lineHeight ? (c.lineHeight - r) / 2 : 0,
              g = e.y + f;
            if (n.usePointStyle) {
              const e = {
                  radius: Math.min(l, r) / 2,
                  pointStyle: a.pointStyle,
                  rotation: a.rotation,
                  borderWidth: 1,
                },
                i = s.leftForLtr(u, l) + l / 2,
                h = g + r / 2;
              (t.strokeStyle = n.multiKeyBackground),
                (t.fillStyle = n.multiKeyBackground),
                le(t, e, i, h),
                (t.strokeStyle = o.borderColor),
                (t.fillStyle = o.backgroundColor),
                le(t, e, i, h);
            } else {
              (t.lineWidth = F(o.borderWidth)
                ? Math.max(...Object.values(o.borderWidth))
                : o.borderWidth || 1),
                (t.strokeStyle = o.borderColor),
                t.setLineDash(o.borderDash || []),
                (t.lineDashOffset = o.borderDashOffset || 0);
              const e = s.leftForLtr(u, l - h),
                i = s.leftForLtr(s.xPlus(u, 1), l - h - 2),
                a = ke(o.borderRadius);
              Object.values(a).some((t) => 0 !== t)
                ? (t.beginPath(),
                  (t.fillStyle = n.multiKeyBackground),
                  xe(t, { x: e, y: g, w: l, h: r, radius: a }),
                  t.fill(),
                  t.stroke(),
                  (t.fillStyle = o.backgroundColor),
                  t.beginPath(),
                  xe(t, { x: i, y: g + 1, w: l - 2, h: r - 2, radius: a }),
                  t.fill())
                : ((t.fillStyle = n.multiKeyBackground),
                  t.fillRect(e, g, l, r),
                  t.strokeRect(e, g, l, r),
                  (t.fillStyle = o.backgroundColor),
                  t.fillRect(i, g + 1, l - 2, r - 2));
            }
            t.fillStyle = this.labelTextColors[i];
          }
          drawBody(t, e, i) {
            const { body: s } = this,
              {
                bodySpacing: n,
                bodyAlign: o,
                displayColors: a,
                boxHeight: r,
                boxWidth: l,
                boxPadding: h,
              } = i,
              c = Pe(i.bodyFont);
            let d = c.lineHeight,
              u = 0;
            const f = hi(i.rtl, this.x, this.width),
              g = function (i) {
                e.fillText(i, f.x(t.x + u), t.y + d / 2), (t.y += d + n);
              },
              p = f.textAlign(o);
            let m, b, x, _, y, v, M;
            for (
              e.textAlign = o,
                e.textBaseline = "middle",
                e.font = c.string,
                t.x = Co(this, p, i),
                e.fillStyle = i.bodyColor,
                W(this.beforeBody, g),
                u =
                  a && "right" !== p
                    ? "center" === o
                      ? l / 2 + h
                      : l + 2 + h
                    : 0,
                _ = 0,
                v = s.length;
              _ < v;
              ++_
            ) {
              for (
                m = s[_],
                  b = this.labelTextColors[_],
                  e.fillStyle = b,
                  W(m.before, g),
                  x = m.lines,
                  a &&
                    x.length &&
                    (this._drawColorBox(e, t, _, f, i),
                    (d = Math.max(c.lineHeight, r))),
                  y = 0,
                  M = x.length;
                y < M;
                ++y
              )
                g(x[y]), (d = c.lineHeight);
              W(m.after, g);
            }
            (u = 0), (d = c.lineHeight), W(this.afterBody, g), (t.y -= n);
          }
          drawFooter(t, e, i) {
            const s = this.footer,
              n = s.length;
            let o, a;
            if (n) {
              const r = hi(i.rtl, this.x, this.width);
              for (
                t.x = Co(this, i.footerAlign, i),
                  t.y += i.footerMarginTop,
                  e.textAlign = r.textAlign(i.footerAlign),
                  e.textBaseline = "middle",
                  o = Pe(i.footerFont),
                  e.fillStyle = i.footerColor,
                  e.font = o.string,
                  a = 0;
                a < n;
                ++a
              )
                e.fillText(s[a], r.x(t.x), t.y + o.lineHeight / 2),
                  (t.y += o.lineHeight + i.footerSpacing);
            }
          }
          drawBackground(t, e, i, s) {
            const { xAlign: n, yAlign: o } = this,
              { x: a, y: r } = t,
              { width: l, height: h } = i,
              {
                topLeft: c,
                topRight: d,
                bottomLeft: u,
                bottomRight: f,
              } = ke(s.cornerRadius);
            (e.fillStyle = s.backgroundColor),
              (e.strokeStyle = s.borderColor),
              (e.lineWidth = s.borderWidth),
              e.beginPath(),
              e.moveTo(a + c, r),
              "top" === o && this.drawCaret(t, e, i, s),
              e.lineTo(a + l - d, r),
              e.quadraticCurveTo(a + l, r, a + l, r + d),
              "center" === o && "right" === n && this.drawCaret(t, e, i, s),
              e.lineTo(a + l, r + h - f),
              e.quadraticCurveTo(a + l, r + h, a + l - f, r + h),
              "bottom" === o && this.drawCaret(t, e, i, s),
              e.lineTo(a + u, r + h),
              e.quadraticCurveTo(a, r + h, a, r + h - u),
              "center" === o && "left" === n && this.drawCaret(t, e, i, s),
              e.lineTo(a, r + c),
              e.quadraticCurveTo(a, r, a + c, r),
              e.closePath(),
              e.fill(),
              s.borderWidth > 0 && e.stroke();
          }
          _updateAnimationTarget(t) {
            const e = this.chart,
              i = this.$animations,
              s = i && i.x,
              n = i && i.y;
            if (s || n) {
              const i = vo[t.position].call(
                this,
                this._active,
                this._eventPosition
              );
              if (!i) return;
              const o = (this._size = So(this, t)),
                a = Object.assign({}, i, this._size),
                r = Ao(e, t, a),
                l = Do(t, a, r, e);
              (s._to === l.x && n._to === l.y) ||
                ((this.xAlign = r.xAlign),
                (this.yAlign = r.yAlign),
                (this.width = o.width),
                (this.height = o.height),
                (this.caretX = i.x),
                (this.caretY = i.y),
                this._resolveAnimations().update(this, l));
            }
          }
          _willRender() {
            return !!this.opacity;
          }
          draw(t) {
            const e = this.options.setContext(this.getContext());
            let i = this.opacity;
            if (!i) return;
            this._updateAnimationTarget(e);
            const s = { width: this.width, height: this.height },
              n = { x: this.x, y: this.y };
            i = Math.abs(i) < 0.001 ? 0 : i;
            const o = Se(e.padding),
              a =
                this.title.length ||
                this.beforeBody.length ||
                this.body.length ||
                this.afterBody.length ||
                this.footer.length;
            e.enabled &&
              a &&
              (t.save(),
              (t.globalAlpha = i),
              this.drawBackground(n, t, s, e),
              ci(t, e.textDirection),
              (n.y += o.top),
              this.drawTitle(n, t, e),
              this.drawBody(n, t, e),
              this.drawFooter(n, t, e),
              di(t, e.textDirection),
              t.restore());
          }
          getActiveElements() {
            return this._active || [];
          }
          setActiveElements(t, e) {
            const i = this._active,
              s = t.map(({ datasetIndex: t, index: e }) => {
                const i = this.chart.getDatasetMeta(t);
                if (!i) throw new Error("Cannot find a dataset at index " + t);
                return { datasetIndex: t, element: i.data[e], index: e };
              }),
              n = !$(i, s),
              o = this._positionChanged(s, e);
            (n || o) &&
              ((this._active = s),
              (this._eventPosition = e),
              (this._ignoreReplayEvents = !0),
              this.update(!0));
          }
          handleEvent(t, e, i = !0) {
            if (e && this._ignoreReplayEvents) return !1;
            this._ignoreReplayEvents = !1;
            const s = this.options,
              n = this._active || [],
              o = this._getActiveElements(t, n, e, i),
              a = this._positionChanged(o, t),
              r = e || !$(o, n) || a;
            return (
              r &&
                ((this._active = o),
                (s.enabled || s.external) &&
                  ((this._eventPosition = { x: t.x, y: t.y }),
                  this.update(!0, e))),
              r
            );
          }
          _getActiveElements(t, e, i, s) {
            const n = this.options;
            if ("mouseout" === t.type) return [];
            if (!s) return e;
            const o = this.chart.getElementsAtEventForMode(t, n.mode, n, i);
            return n.reverse && o.reverse(), o;
          }
          _positionChanged(t, e) {
            const { caretX: i, caretY: s, options: n } = this,
              o = vo[n.position].call(this, t, e);
            return !1 !== o && (i !== o.x || s !== o.y);
          }
        }
        var Io = {
            id: "tooltip",
            _element: Ro,
            positioners: vo,
            afterInit(t, e, i) {
              i && (t.tooltip = new Ro({ chart: t, options: i }));
            },
            beforeUpdate(t, e, i) {
              t.tooltip && t.tooltip.initialize(i);
            },
            reset(t, e, i) {
              t.tooltip && t.tooltip.initialize(i);
            },
            afterDraw(t) {
              const e = t.tooltip;
              if (e && e._willRender()) {
                const i = { tooltip: e };
                if (
                  !1 ===
                  t.notifyPlugins("beforeTooltipDraw", { ...i, cancelable: !0 })
                )
                  return;
                e.draw(t.ctx), t.notifyPlugins("afterTooltipDraw", i);
              }
            },
            afterEvent(t, e) {
              if (t.tooltip) {
                const i = e.replay;
                t.tooltip.handleEvent(e.event, i, e.inChartArea) &&
                  (e.changed = !0);
              }
            },
            defaults: {
              enabled: !0,
              external: null,
              position: "average",
              backgroundColor: "rgba(0,0,0,0.8)",
              titleColor: "#fff",
              titleFont: { weight: "bold" },
              titleSpacing: 2,
              titleMarginBottom: 6,
              titleAlign: "left",
              bodyColor: "#fff",
              bodySpacing: 2,
              bodyFont: {},
              bodyAlign: "left",
              footerColor: "#fff",
              footerSpacing: 2,
              footerMarginTop: 6,
              footerFont: { weight: "bold" },
              footerAlign: "left",
              padding: 6,
              caretPadding: 2,
              caretSize: 5,
              cornerRadius: 6,
              boxHeight: (t, e) => e.bodyFont.size,
              boxWidth: (t, e) => e.bodyFont.size,
              multiKeyBackground: "#fff",
              displayColors: !0,
              boxPadding: 0,
              borderColor: "rgba(0,0,0,0)",
              borderWidth: 0,
              animation: { duration: 400, easing: "easeOutQuart" },
              animations: {
                numbers: {
                  type: "number",
                  properties: ["x", "y", "width", "height", "caretX", "caretY"],
                },
                opacity: { easing: "linear", duration: 200 },
              },
              callbacks: Eo,
            },
            defaultRoutes: {
              bodyFont: "font",
              footerFont: "font",
              titleFont: "font",
            },
            descriptors: {
              _scriptable: (t) =>
                "filter" !== t && "itemSort" !== t && "external" !== t,
              _indexable: !1,
              callbacks: { _scriptable: !1, _indexable: !1 },
              animation: { _fallback: !1 },
              animations: { _fallback: "animation" },
            },
            additionalOptionScopes: ["interaction"],
          },
          zo = Object.freeze({
            __proto__: null,
            Colors: qn,
            Decimation: Kn,
            Filler: uo,
            Legend: mo,
            SubTitle: yo,
            Title: xo,
            Tooltip: Io,
          });
        function Fo(t) {
          const e = this.getLabels();
          return t >= 0 && t < e.length ? e[t] : t;
        }
        class Vo extends Ys {
          static id = "category";
          static defaults = { ticks: { callback: Fo } };
          constructor(t) {
            super(t),
              (this._startValue = void 0),
              (this._valueRange = 0),
              (this._addedLabels = []);
          }
          init(t) {
            const e = this._addedLabels;
            if (e.length) {
              const t = this.getLabels();
              for (const { index: i, label: s } of e)
                t[i] === s && t.splice(i, 1);
              this._addedLabels = [];
            }
            super.init(t);
          }
          parse(t, e) {
            if (I(t)) return null;
            const i = this.getLabels();
            return ((t, e) => (null === t ? null : St(Math.round(t), 0, e)))(
              (e =
                isFinite(e) && i[e] === t
                  ? e
                  : (function (t, e, i, s) {
                      const n = t.indexOf(e);
                      return -1 === n
                        ? ((t, e, i, s) => (
                            "string" == typeof e
                              ? ((i = t.push(e) - 1),
                                s.unshift({ index: i, label: e }))
                              : isNaN(e) && (i = null),
                            i
                          ))(t, e, i, s)
                        : n !== t.lastIndexOf(e)
                        ? i
                        : n;
                    })(i, t, B(e, t), this._addedLabels)),
              i.length - 1
            );
          }
          determineDataLimits() {
            const { minDefined: t, maxDefined: e } = this.getUserBounds();
            let { min: i, max: s } = this.getMinMax(!0);
            "ticks" === this.options.bounds &&
              (t || (i = 0), e || (s = this.getLabels().length - 1)),
              (this.min = i),
              (this.max = s);
          }
          buildTicks() {
            const t = this.min,
              e = this.max,
              i = this.options.offset,
              s = [];
            let n = this.getLabels();
            (n = 0 === t && e === n.length - 1 ? n : n.slice(t, e + 1)),
              (this._valueRange = Math.max(n.length - (i ? 0 : 1), 1)),
              (this._startValue = this.min - (i ? 0.5 : 0));
            for (let i = t; i <= e; i++) s.push({ value: i });
            return s;
          }
          getLabelForValue(t) {
            return Fo.call(this, t);
          }
          configure() {
            super.configure(),
              this.isHorizontal() ||
                (this._reversePixels = !this._reversePixels);
          }
          getPixelForValue(t) {
            return (
              "number" != typeof t && (t = this.parse(t)),
              null === t
                ? NaN
                : this.getPixelForDecimal(
                    (t - this._startValue) / this._valueRange
                  )
            );
          }
          getPixelForTick(t) {
            const e = this.ticks;
            return t < 0 || t > e.length - 1
              ? null
              : this.getPixelForValue(e[t].value);
          }
          getValueForPixel(t) {
            return Math.round(
              this._startValue + this.getDecimalForPixel(t) * this._valueRange
            );
          }
          getBasePixel() {
            return this.bottom;
          }
        }
        function jo(t, e, { horizontal: i, minRotation: s }) {
          const n = bt(s),
            o = (i ? Math.sin(n) : Math.cos(n)) || 0.001,
            a = 0.75 * e * ("" + t).length;
          return Math.min(e / o, a);
        }
        class Bo extends Ys {
          constructor(t) {
            super(t),
              (this.start = void 0),
              (this.end = void 0),
              (this._startValue = void 0),
              (this._endValue = void 0),
              (this._valueRange = 0);
          }
          parse(t, e) {
            return I(t) ||
              (("number" == typeof t || t instanceof Number) && !isFinite(+t))
              ? null
              : +t;
          }
          handleTickRangeOptions() {
            const { beginAtZero: t } = this.options,
              { minDefined: e, maxDefined: i } = this.getUserBounds();
            let { min: s, max: n } = this;
            const o = (t) => (s = e ? s : t),
              a = (t) => (n = i ? n : t);
            if (t) {
              const t = ut(s),
                e = ut(n);
              t < 0 && e < 0 ? a(0) : t > 0 && e > 0 && o(0);
            }
            if (s === n) {
              let e = 0 === n ? 1 : Math.abs(0.05 * n);
              a(n + e), t || o(s - e);
            }
            (this.min = s), (this.max = n);
          }
          getTickLimit() {
            const t = this.options.ticks;
            let e,
              { maxTicksLimit: i, stepSize: s } = t;
            return (
              s
                ? ((e = Math.ceil(this.max / s) - Math.floor(this.min / s) + 1),
                  e > 1e3 &&
                    (console.warn(
                      `scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${e} ticks. Limiting to 1000.`
                    ),
                    (e = 1e3)))
                : ((e = this.computeTickLimit()), (i = i || 11)),
              i && (e = Math.min(i, e)),
              e
            );
          }
          computeTickLimit() {
            return Number.POSITIVE_INFINITY;
          }
          buildTicks() {
            const t = this.options,
              e = t.ticks;
            let i = this.getTickLimit();
            i = Math.max(2, i);
            const s = (function (t, e) {
              const i = [],
                {
                  bounds: s,
                  step: n,
                  min: o,
                  max: a,
                  precision: r,
                  count: l,
                  maxTicks: h,
                  maxDigits: c,
                  includeBounds: d,
                } = t,
                u = n || 1,
                f = h - 1,
                { min: g, max: p } = e,
                m = !I(o),
                b = !I(a),
                x = !I(l),
                _ = (p - g) / (c + 1);
              let y,
                v,
                M,
                w,
                k = gt((p - g) / f / u) * u;
              if (k < 1e-14 && !m && !b) return [{ value: g }, { value: p }];
              (w = Math.ceil(p / k) - Math.floor(g / k)),
                w > f && (k = gt((w * k) / f / u) * u),
                I(r) || ((y = Math.pow(10, r)), (k = Math.ceil(k * y) / y)),
                "ticks" === s
                  ? ((v = Math.floor(g / k) * k), (M = Math.ceil(p / k) * k))
                  : ((v = g), (M = p)),
                m &&
                b &&
                n &&
                (function (t, e) {
                  const i = Math.round(t);
                  return i - e <= t && i + e >= t;
                })((a - o) / n, k / 1e3)
                  ? ((w = Math.round(Math.min((a - o) / k, h))),
                    (k = (a - o) / w),
                    (v = o),
                    (M = a))
                  : x
                  ? ((v = m ? o : v),
                    (M = b ? a : M),
                    (w = l - 1),
                    (k = (M - v) / w))
                  : ((w = (M - v) / k),
                    (w = ft(w, Math.round(w), k / 1e3)
                      ? Math.round(w)
                      : Math.ceil(w)));
              const S = Math.max(_t(k), _t(v));
              (y = Math.pow(10, I(r) ? S : r)),
                (v = Math.round(v * y) / y),
                (M = Math.round(M * y) / y);
              let P = 0;
              for (
                m &&
                (d && v !== o
                  ? (i.push({ value: o }),
                    v < o && P++,
                    ft(Math.round((v + P * k) * y) / y, o, jo(o, _, t)) && P++)
                  : v < o && P++);
                P < w;
                ++P
              )
                i.push({ value: Math.round((v + P * k) * y) / y });
              return (
                b && d && M !== a
                  ? i.length && ft(i[i.length - 1].value, a, jo(a, _, t))
                    ? (i[i.length - 1].value = a)
                    : i.push({ value: a })
                  : (b && M !== a) || i.push({ value: M }),
                i
              );
            })(
              {
                maxTicks: i,
                bounds: t.bounds,
                min: t.min,
                max: t.max,
                precision: e.precision,
                step: e.stepSize,
                count: e.count,
                maxDigits: this._maxDigits(),
                horizontal: this.isHorizontal(),
                minRotation: e.minRotation || 0,
                includeBounds: !1 !== e.includeBounds,
              },
              this._range || this
            );
            return (
              "ticks" === t.bounds && mt(s, this, "value"),
              t.reverse
                ? (s.reverse(), (this.start = this.max), (this.end = this.min))
                : ((this.start = this.min), (this.end = this.max)),
              s
            );
          }
          configure() {
            const t = this.ticks;
            let e = this.min,
              i = this.max;
            if ((super.configure(), this.options.offset && t.length)) {
              const s = (i - e) / Math.max(t.length - 1, 1) / 2;
              (e -= s), (i += s);
            }
            (this._startValue = e),
              (this._endValue = i),
              (this._valueRange = i - e);
          }
          getLabelForValue(t) {
            return Kt(t, this.chart.options.locale, this.options.ticks.format);
          }
        }
        class No extends Bo {
          static id = "linear";
          static defaults = { ticks: { callback: Gt.formatters.numeric } };
          determineDataLimits() {
            const { min: t, max: e } = this.getMinMax(!0);
            (this.min = V(t) ? t : 0),
              (this.max = V(e) ? e : 1),
              this.handleTickRangeOptions();
          }
          computeTickLimit() {
            const t = this.isHorizontal(),
              e = t ? this.width : this.height,
              i = bt(this.options.ticks.minRotation),
              s = (t ? Math.sin(i) : Math.cos(i)) || 0.001,
              n = this._resolveTickFontOptions(0);
            return Math.ceil(e / Math.min(40, n.lineHeight / s));
          }
          getPixelForValue(t) {
            return null === t
              ? NaN
              : this.getPixelForDecimal(
                  (t - this._startValue) / this._valueRange
                );
          }
          getValueForPixel(t) {
            return (
              this._startValue + this.getDecimalForPixel(t) * this._valueRange
            );
          }
        }
        const Ho = (t) => Math.floor(dt(t)),
          Wo = (t, e) => Math.pow(10, Ho(t) + e);
        function $o(t) {
          return 1 == t / Math.pow(10, Ho(t));
        }
        function Yo(t, e, i) {
          const s = Math.pow(10, i),
            n = Math.floor(t / s);
          return Math.ceil(e / s) - n;
        }
        class qo extends Ys {
          static id = "logarithmic";
          static defaults = {
            ticks: {
              callback: Gt.formatters.logarithmic,
              major: { enabled: !0 },
            },
          };
          constructor(t) {
            super(t),
              (this.start = void 0),
              (this.end = void 0),
              (this._startValue = void 0),
              (this._valueRange = 0);
          }
          parse(t, e) {
            const i = Bo.prototype.parse.apply(this, [t, e]);
            if (0 !== i) return V(i) && i > 0 ? i : null;
            this._zero = !0;
          }
          determineDataLimits() {
            const { min: t, max: e } = this.getMinMax(!0);
            (this.min = V(t) ? Math.max(0, t) : null),
              (this.max = V(e) ? Math.max(0, e) : null),
              this.options.beginAtZero && (this._zero = !0),
              this._zero &&
                this.min !== this._suggestedMin &&
                !V(this._userMin) &&
                (this.min =
                  t === Wo(this.min, 0) ? Wo(this.min, -1) : Wo(this.min, 0)),
              this.handleTickRangeOptions();
          }
          handleTickRangeOptions() {
            const { minDefined: t, maxDefined: e } = this.getUserBounds();
            let i = this.min,
              s = this.max;
            const n = (e) => (i = t ? i : e),
              o = (t) => (s = e ? s : t);
            i === s && (i <= 0 ? (n(1), o(10)) : (n(Wo(i, -1)), o(Wo(s, 1)))),
              i <= 0 && n(Wo(s, -1)),
              s <= 0 && o(Wo(i, 1)),
              (this.min = i),
              (this.max = s);
          }
          buildTicks() {
            const t = this.options,
              e = (function (t, { min: e, max: i }) {
                e = j(t.min, e);
                const s = [],
                  n = Ho(e);
                let o = (function (t, e) {
                    let i = Ho(e - t);
                    for (; Yo(t, e, i) > 10; ) i++;
                    for (; Yo(t, e, i) < 10; ) i--;
                    return Math.min(i, Ho(t));
                  })(e, i),
                  a = o < 0 ? Math.pow(10, Math.abs(o)) : 1;
                const r = Math.pow(10, o),
                  l = n > o ? Math.pow(10, n) : 0,
                  h = Math.round((e - l) * a) / a,
                  c = Math.floor((e - l) / r / 10) * r * 10;
                let d = Math.floor((h - c) / Math.pow(10, o)),
                  u = j(
                    t.min,
                    Math.round((l + c + d * Math.pow(10, o)) * a) / a
                  );
                for (; u < i; )
                  s.push({ value: u, major: $o(u), significand: d }),
                    d >= 10 ? (d = d < 15 ? 15 : 20) : d++,
                    d >= 20 && (o++, (d = 2), (a = o >= 0 ? 1 : a)),
                    (u = Math.round((l + c + d * Math.pow(10, o)) * a) / a);
                const f = j(t.max, u);
                return s.push({ value: f, major: $o(f), significand: d }), s;
              })({ min: this._userMin, max: this._userMax }, this);
            return (
              "ticks" === t.bounds && mt(e, this, "value"),
              t.reverse
                ? (e.reverse(), (this.start = this.max), (this.end = this.min))
                : ((this.start = this.min), (this.end = this.max)),
              e
            );
          }
          getLabelForValue(t) {
            return void 0 === t
              ? "0"
              : Kt(t, this.chart.options.locale, this.options.ticks.format);
          }
          configure() {
            const t = this.min;
            super.configure(),
              (this._startValue = dt(t)),
              (this._valueRange = dt(this.max) - dt(t));
          }
          getPixelForValue(t) {
            return (
              (void 0 !== t && 0 !== t) || (t = this.min),
              null === t || isNaN(t)
                ? NaN
                : this.getPixelForDecimal(
                    t === this.min
                      ? 0
                      : (dt(t) - this._startValue) / this._valueRange
                  )
            );
          }
          getValueForPixel(t) {
            const e = this.getDecimalForPixel(t);
            return Math.pow(10, this._startValue + e * this._valueRange);
          }
        }
        function Uo(t) {
          const e = t.ticks;
          if (e.display && t.display) {
            const t = Se(e.backdropPadding);
            return B(e.font && e.font.size, se.font.size) + t.height;
          }
          return 0;
        }
        function Xo(t, e, i, s, n) {
          return t === s || t === n
            ? { start: e - i / 2, end: e + i / 2 }
            : t < s || t > n
            ? { start: e - i, end: e }
            : { start: e, end: e + i };
        }
        function Ko(t, e, i, s, n) {
          const o = Math.abs(Math.sin(i)),
            a = Math.abs(Math.cos(i));
          let r = 0,
            l = 0;
          s.start < e.l
            ? ((r = (e.l - s.start) / o), (t.l = Math.min(t.l, e.l - r)))
            : s.end > e.r &&
              ((r = (s.end - e.r) / o), (t.r = Math.max(t.r, e.r + r))),
            n.start < e.t
              ? ((l = (e.t - n.start) / a), (t.t = Math.min(t.t, e.t - l)))
              : n.end > e.b &&
                ((l = (n.end - e.b) / a), (t.b = Math.max(t.b, e.b + l)));
        }
        function Zo(t) {
          return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right";
        }
        function Go(t, e, i) {
          return (
            90 === i || 270 === i
              ? (t -= e / 2)
              : (i > 270 || i < 90) && (t -= e),
            t
          );
        }
        function Qo(t, e, i, s) {
          const { ctx: n } = t;
          if (i) n.arc(t.xCenter, t.yCenter, e, 0, nt);
          else {
            let i = t.getPointPosition(0, e);
            n.moveTo(i.x, i.y);
            for (let o = 1; o < s; o++)
              (i = t.getPointPosition(o, e)), n.lineTo(i.x, i.y);
          }
        }
        class Jo extends Bo {
          static id = "radialLinear";
          static defaults = {
            display: !0,
            animate: !0,
            position: "chartArea",
            angleLines: {
              display: !0,
              lineWidth: 1,
              borderDash: [],
              borderDashOffset: 0,
            },
            grid: { circular: !1 },
            startAngle: 0,
            ticks: { showLabelBackdrop: !0, callback: Gt.formatters.numeric },
            pointLabels: {
              backdropColor: void 0,
              backdropPadding: 2,
              display: !0,
              font: { size: 10 },
              callback: (t) => t,
              padding: 5,
              centerPointLabels: !1,
            },
          };
          static defaultRoutes = {
            "angleLines.color": "borderColor",
            "pointLabels.color": "color",
            "ticks.color": "color",
          };
          static descriptors = { angleLines: { _fallback: "grid" } };
          constructor(t) {
            super(t),
              (this.xCenter = void 0),
              (this.yCenter = void 0),
              (this.drawingArea = void 0),
              (this._pointLabels = []),
              (this._pointLabelItems = []);
          }
          setDimensions() {
            const t = (this._padding = Se(Uo(this.options) / 2)),
              e = (this.width = this.maxWidth - t.width),
              i = (this.height = this.maxHeight - t.height);
            (this.xCenter = Math.floor(this.left + e / 2 + t.left)),
              (this.yCenter = Math.floor(this.top + i / 2 + t.top)),
              (this.drawingArea = Math.floor(Math.min(e, i) / 2));
          }
          determineDataLimits() {
            const { min: t, max: e } = this.getMinMax(!1);
            (this.min = V(t) && !isNaN(t) ? t : 0),
              (this.max = V(e) && !isNaN(e) ? e : 0),
              this.handleTickRangeOptions();
          }
          computeTickLimit() {
            return Math.ceil(this.drawingArea / Uo(this.options));
          }
          generateTickLabels(t) {
            Bo.prototype.generateTickLabels.call(this, t),
              (this._pointLabels = this.getLabels()
                .map((t, e) => {
                  const i = H(this.options.pointLabels.callback, [t, e], this);
                  return i || 0 === i ? i : "";
                })
                .filter((t, e) => this.chart.getDataVisibility(e)));
          }
          fit() {
            const t = this.options;
            t.display && t.pointLabels.display
              ? (function (t) {
                  const e = {
                      l: t.left + t._padding.left,
                      r: t.right - t._padding.right,
                      t: t.top + t._padding.top,
                      b: t.bottom - t._padding.bottom,
                    },
                    i = Object.assign({}, e),
                    s = [],
                    n = [],
                    o = t._pointLabels.length,
                    a = t.options.pointLabels,
                    r = a.centerPointLabels ? st / o : 0;
                  for (let d = 0; d < o; d++) {
                    const o = a.setContext(t.getPointLabelContext(d));
                    n[d] = o.padding;
                    const u = t.getPointPosition(d, t.drawingArea + n[d], r),
                      f = Pe(o.font),
                      g =
                        ((l = t.ctx),
                        (h = f),
                        (c = z((c = t._pointLabels[d])) ? c : [c]),
                        { w: oe(l, h.string, c), h: c.length * h.lineHeight });
                    s[d] = g;
                    const p = wt(t.getIndexAngle(d) + r),
                      m = Math.round(xt(p));
                    Ko(
                      i,
                      e,
                      p,
                      Xo(m, u.x, g.w, 0, 180),
                      Xo(m, u.y, g.h, 90, 270)
                    );
                  }
                  var l, h, c;
                  t.setCenterPoint(e.l - i.l, i.r - e.r, e.t - i.t, i.b - e.b),
                    (t._pointLabelItems = (function (t, e, i) {
                      const s = [],
                        n = t._pointLabels.length,
                        o = t.options,
                        a = Uo(o) / 2,
                        r = t.drawingArea,
                        l = o.pointLabels.centerPointLabels ? st / n : 0;
                      for (let o = 0; o < n; o++) {
                        const n = t.getPointPosition(o, r + a + i[o], l),
                          u = Math.round(xt(wt(n.angle + lt))),
                          f = e[o],
                          g = Go(n.y, f.h, u),
                          p = Zo(u),
                          m =
                            ((h = n.x),
                            (c = f.w),
                            "right" === (d = p)
                              ? (h -= c)
                              : "center" === d && (h -= c / 2),
                            h);
                        s.push({
                          x: n.x,
                          y: g,
                          textAlign: p,
                          left: m,
                          top: g,
                          right: m + f.w,
                          bottom: g + f.h,
                        });
                      }
                      var h, c, d;
                      return s;
                    })(t, s, n));
                })(this)
              : this.setCenterPoint(0, 0, 0, 0);
          }
          setCenterPoint(t, e, i, s) {
            (this.xCenter += Math.floor((t - e) / 2)),
              (this.yCenter += Math.floor((i - s) / 2)),
              (this.drawingArea -= Math.min(
                this.drawingArea / 2,
                Math.max(t, e, i, s)
              ));
          }
          getIndexAngle(t) {
            return wt(
              t * (nt / (this._pointLabels.length || 1)) +
                bt(this.options.startAngle || 0)
            );
          }
          getDistanceFromCenterForValue(t) {
            if (I(t)) return NaN;
            const e = this.drawingArea / (this.max - this.min);
            return this.options.reverse
              ? (this.max - t) * e
              : (t - this.min) * e;
          }
          getValueForDistanceFromCenter(t) {
            if (I(t)) return NaN;
            const e = t / (this.drawingArea / (this.max - this.min));
            return this.options.reverse ? this.max - e : this.min + e;
          }
          getPointLabelContext(t) {
            const e = this._pointLabels || [];
            if (t >= 0 && t < e.length) {
              const i = e[t];
              return (function (t, e, i) {
                return De(t, { label: i, index: e, type: "pointLabel" });
              })(this.getContext(), t, i);
            }
          }
          getPointPosition(t, e, i = 0) {
            const s = this.getIndexAngle(t) - lt + i;
            return {
              x: Math.cos(s) * e + this.xCenter,
              y: Math.sin(s) * e + this.yCenter,
              angle: s,
            };
          }
          getPointPositionForValue(t, e) {
            return this.getPointPosition(
              t,
              this.getDistanceFromCenterForValue(e)
            );
          }
          getBasePosition(t) {
            return this.getPointPositionForValue(t || 0, this.getBaseValue());
          }
          getPointLabelPosition(t) {
            const {
              left: e,
              top: i,
              right: s,
              bottom: n,
            } = this._pointLabelItems[t];
            return { left: e, top: i, right: s, bottom: n };
          }
          drawBackground() {
            const {
              backgroundColor: t,
              grid: { circular: e },
            } = this.options;
            if (t) {
              const i = this.ctx;
              i.save(),
                i.beginPath(),
                Qo(
                  this,
                  this.getDistanceFromCenterForValue(this._endValue),
                  e,
                  this._pointLabels.length
                ),
                i.closePath(),
                (i.fillStyle = t),
                i.fill(),
                i.restore();
            }
          }
          drawGrid() {
            const t = this.ctx,
              e = this.options,
              { angleLines: i, grid: s, border: n } = e,
              o = this._pointLabels.length;
            let a, r, l;
            if (
              (e.pointLabels.display &&
                (function (t, e) {
                  const {
                    ctx: i,
                    options: { pointLabels: s },
                  } = t;
                  for (let n = e - 1; n >= 0; n--) {
                    const e = s.setContext(t.getPointLabelContext(n)),
                      o = Pe(e.font),
                      {
                        x: a,
                        y: r,
                        textAlign: l,
                        left: h,
                        top: c,
                        right: d,
                        bottom: u,
                      } = t._pointLabelItems[n],
                      { backdropColor: f } = e;
                    if (!I(f)) {
                      const t = ke(e.borderRadius),
                        s = Se(e.backdropPadding);
                      i.fillStyle = f;
                      const n = h - s.left,
                        o = c - s.top,
                        a = d - h + s.width,
                        r = u - c + s.height;
                      Object.values(t).some((t) => 0 !== t)
                        ? (i.beginPath(),
                          xe(i, { x: n, y: o, w: a, h: r, radius: t }),
                          i.fill())
                        : i.fillRect(n, o, a, r);
                    }
                    pe(i, t._pointLabels[n], a, r + o.lineHeight / 2, o, {
                      color: e.color,
                      textAlign: l,
                      textBaseline: "middle",
                    });
                  }
                })(this, o),
              s.display &&
                this.ticks.forEach((t, e) => {
                  if (0 !== e) {
                    r = this.getDistanceFromCenterForValue(t.value);
                    const i = this.getContext(e),
                      a = s.setContext(i),
                      l = n.setContext(i);
                    !(function (t, e, i, s, n) {
                      const o = t.ctx,
                        a = e.circular,
                        { color: r, lineWidth: l } = e;
                      (!a && !s) ||
                        !r ||
                        !l ||
                        i < 0 ||
                        (o.save(),
                        (o.strokeStyle = r),
                        (o.lineWidth = l),
                        o.setLineDash(n.dash),
                        (o.lineDashOffset = n.dashOffset),
                        o.beginPath(),
                        Qo(t, i, a, s),
                        o.closePath(),
                        o.stroke(),
                        o.restore());
                    })(this, a, r, o, l);
                  }
                }),
              i.display)
            ) {
              for (t.save(), a = o - 1; a >= 0; a--) {
                const s = i.setContext(this.getPointLabelContext(a)),
                  { color: n, lineWidth: o } = s;
                o &&
                  n &&
                  ((t.lineWidth = o),
                  (t.strokeStyle = n),
                  t.setLineDash(s.borderDash),
                  (t.lineDashOffset = s.borderDashOffset),
                  (r = this.getDistanceFromCenterForValue(
                    e.ticks.reverse ? this.min : this.max
                  )),
                  (l = this.getPointPosition(a, r)),
                  t.beginPath(),
                  t.moveTo(this.xCenter, this.yCenter),
                  t.lineTo(l.x, l.y),
                  t.stroke());
              }
              t.restore();
            }
          }
          drawBorder() {}
          drawLabels() {
            const t = this.ctx,
              e = this.options,
              i = e.ticks;
            if (!i.display) return;
            const s = this.getIndexAngle(0);
            let n, o;
            t.save(),
              t.translate(this.xCenter, this.yCenter),
              t.rotate(s),
              (t.textAlign = "center"),
              (t.textBaseline = "middle"),
              this.ticks.forEach((s, a) => {
                if (0 === a && !e.reverse) return;
                const r = i.setContext(this.getContext(a)),
                  l = Pe(r.font);
                if (
                  ((n = this.getDistanceFromCenterForValue(
                    this.ticks[a].value
                  )),
                  r.showLabelBackdrop)
                ) {
                  (t.font = l.string),
                    (o = t.measureText(s.label).width),
                    (t.fillStyle = r.backdropColor);
                  const e = Se(r.backdropPadding);
                  t.fillRect(
                    -o / 2 - e.left,
                    -n - l.size / 2 - e.top,
                    o + e.width,
                    l.size + e.height
                  );
                }
                pe(t, s.label, 0, -n, l, { color: r.color });
              }),
              t.restore();
          }
          drawTitle() {}
        }
        const ta = {
            millisecond: { common: !0, size: 1, steps: 1e3 },
            second: { common: !0, size: 1e3, steps: 60 },
            minute: { common: !0, size: 6e4, steps: 60 },
            hour: { common: !0, size: 36e5, steps: 24 },
            day: { common: !0, size: 864e5, steps: 30 },
            week: { common: !1, size: 6048e5, steps: 4 },
            month: { common: !0, size: 2628e6, steps: 12 },
            quarter: { common: !1, size: 7884e6, steps: 4 },
            year: { common: !0, size: 3154e7 },
          },
          ea = Object.keys(ta);
        function ia(t, e) {
          return t - e;
        }
        function sa(t, e) {
          if (I(e)) return null;
          const i = t._adapter,
            { parser: s, round: n, isoWeekday: o } = t._parseOpts;
          let a = e;
          return (
            "function" == typeof s && (a = s(a)),
            V(a) || (a = "string" == typeof s ? i.parse(a, s) : i.parse(a)),
            null === a
              ? null
              : (n &&
                  (a =
                    "week" !== n || (!pt(o) && !0 !== o)
                      ? i.startOf(a, n)
                      : i.startOf(a, "isoWeek", o)),
                +a)
          );
        }
        function na(t, e, i, s) {
          const n = ea.length;
          for (let o = ea.indexOf(t); o < n - 1; ++o) {
            const t = ta[ea[o]],
              n = t.steps ? t.steps : Number.MAX_SAFE_INTEGER;
            if (t.common && Math.ceil((i - e) / (n * t.size)) <= s)
              return ea[o];
          }
          return ea[n - 1];
        }
        function oa(t, e, i) {
          if (i) {
            if (i.length) {
              const { lo: s, hi: n } = At(i, e);
              t[i[s] >= e ? i[s] : i[n]] = !0;
            }
          } else t[e] = !0;
        }
        function aa(t, e, i) {
          const s = [],
            n = {},
            o = e.length;
          let a, r;
          for (a = 0; a < o; ++a)
            (r = e[a]), (n[r] = a), s.push({ value: r, major: !1 });
          return 0 !== o && i
            ? (function (t, e, i, s) {
                const n = t._adapter,
                  o = +n.startOf(e[0].value, s),
                  a = e[e.length - 1].value;
                let r, l;
                for (r = o; r <= a; r = +n.add(r, 1, s))
                  (l = i[r]), l >= 0 && (e[l].major = !0);
                return e;
              })(t, s, n, i)
            : s;
        }
        class ra extends Ys {
          static id = "time";
          static defaults = {
            bounds: "data",
            adapters: {},
            time: {
              parser: !1,
              unit: !1,
              round: !1,
              isoWeekday: !1,
              minUnit: "millisecond",
              displayFormats: {},
            },
            ticks: { source: "auto", callback: !1, major: { enabled: !1 } },
          };
          constructor(t) {
            super(t),
              (this._cache = { data: [], labels: [], all: [] }),
              (this._unit = "day"),
              (this._majorUnit = void 0),
              (this._offsets = {}),
              (this._normalized = !1),
              (this._parseOpts = void 0);
          }
          init(t, e = {}) {
            const i = t.time || (t.time = {}),
              s = (this._adapter = new es._date(t.adapters.date));
            s.init(e),
              K(i.displayFormats, s.formats()),
              (this._parseOpts = {
                parser: i.parser,
                round: i.round,
                isoWeekday: i.isoWeekday,
              }),
              super.init(t),
              (this._normalized = e.normalized);
          }
          parse(t, e) {
            return void 0 === t ? null : sa(this, t);
          }
          beforeLayout() {
            super.beforeLayout(),
              (this._cache = { data: [], labels: [], all: [] });
          }
          determineDataLimits() {
            const t = this.options,
              e = this._adapter,
              i = t.time.unit || "day";
            let {
              min: s,
              max: n,
              minDefined: o,
              maxDefined: a,
            } = this.getUserBounds();
            function r(t) {
              o || isNaN(t.min) || (s = Math.min(s, t.min)),
                a || isNaN(t.max) || (n = Math.max(n, t.max));
            }
            (o && a) ||
              (r(this._getLabelBounds()),
              ("ticks" === t.bounds && "labels" === t.ticks.source) ||
                r(this.getMinMax(!1))),
              (s = V(s) && !isNaN(s) ? s : +e.startOf(Date.now(), i)),
              (n = V(n) && !isNaN(n) ? n : +e.endOf(Date.now(), i) + 1),
              (this.min = Math.min(s, n - 1)),
              (this.max = Math.max(s + 1, n));
          }
          _getLabelBounds() {
            const t = this.getLabelTimestamps();
            let e = Number.POSITIVE_INFINITY,
              i = Number.NEGATIVE_INFINITY;
            return (
              t.length && ((e = t[0]), (i = t[t.length - 1])),
              { min: e, max: i }
            );
          }
          buildTicks() {
            const t = this.options,
              e = t.time,
              i = t.ticks,
              s =
                "labels" === i.source
                  ? this.getLabelTimestamps()
                  : this._generate();
            "ticks" === t.bounds &&
              s.length &&
              ((this.min = this._userMin || s[0]),
              (this.max = this._userMax || s[s.length - 1]));
            const n = this.min,
              o = (function (t, e, i) {
                let s = 0,
                  n = t.length;
                for (; s < n && t[s] < e; ) s++;
                for (; n > s && t[n - 1] > i; ) n--;
                return s > 0 || n < t.length ? t.slice(s, n) : t;
              })(s, n, this.max);
            return (
              (this._unit =
                e.unit ||
                (i.autoSkip
                  ? na(e.minUnit, this.min, this.max, this._getLabelCapacity(n))
                  : (function (t, e, i, s, n) {
                      for (let o = ea.length - 1; o >= ea.indexOf(i); o--) {
                        const i = ea[o];
                        if (ta[i].common && t._adapter.diff(n, s, i) >= e - 1)
                          return i;
                      }
                      return ea[i ? ea.indexOf(i) : 0];
                    })(this, o.length, e.minUnit, this.min, this.max))),
              (this._majorUnit =
                i.major.enabled && "year" !== this._unit
                  ? (function (t) {
                      for (let e = ea.indexOf(t) + 1, i = ea.length; e < i; ++e)
                        if (ta[ea[e]].common) return ea[e];
                    })(this._unit)
                  : void 0),
              this.initOffsets(s),
              t.reverse && o.reverse(),
              aa(this, o, this._majorUnit)
            );
          }
          afterAutoSkip() {
            this.options.offsetAfterAutoskip &&
              this.initOffsets(this.ticks.map((t) => +t.value));
          }
          initOffsets(t = []) {
            let e,
              i,
              s = 0,
              n = 0;
            this.options.offset &&
              t.length &&
              ((e = this.getDecimalForValue(t[0])),
              (s =
                1 === t.length
                  ? 1 - e
                  : (this.getDecimalForValue(t[1]) - e) / 2),
              (i = this.getDecimalForValue(t[t.length - 1])),
              (n =
                1 === t.length
                  ? i
                  : (i - this.getDecimalForValue(t[t.length - 2])) / 2));
            const o = t.length < 3 ? 0.5 : 0.25;
            (s = St(s, 0, o)),
              (n = St(n, 0, o)),
              (this._offsets = { start: s, end: n, factor: 1 / (s + 1 + n) });
          }
          _generate() {
            const t = this._adapter,
              e = this.min,
              i = this.max,
              s = this.options,
              n = s.time,
              o = n.unit || na(n.minUnit, e, i, this._getLabelCapacity(e)),
              a = B(s.ticks.stepSize, 1),
              r = "week" === o && n.isoWeekday,
              l = pt(r) || !0 === r,
              h = {};
            let c,
              d,
              u = e;
            if (
              (l && (u = +t.startOf(u, "isoWeek", r)),
              (u = +t.startOf(u, l ? "day" : o)),
              t.diff(i, e, o) > 1e5 * a)
            )
              throw new Error(
                e +
                  " and " +
                  i +
                  " are too far apart with stepSize of " +
                  a +
                  " " +
                  o
              );
            const f = "data" === s.ticks.source && this.getDataTimestamps();
            for (c = u, d = 0; c < i; c = +t.add(c, a, o), d++) oa(h, c, f);
            return (
              (c !== i && "ticks" !== s.bounds && 1 !== d) || oa(h, c, f),
              Object.keys(h)
                .sort((t, e) => t - e)
                .map((t) => +t)
            );
          }
          getLabelForValue(t) {
            const e = this._adapter,
              i = this.options.time;
            return i.tooltipFormat
              ? e.format(t, i.tooltipFormat)
              : e.format(t, i.displayFormats.datetime);
          }
          _tickFormatFunction(t, e, i, s) {
            const n = this.options,
              o = n.ticks.callback;
            if (o) return H(o, [t, e, i], this);
            const a = n.time.displayFormats,
              r = this._unit,
              l = this._majorUnit,
              h = r && a[r],
              c = l && a[l],
              d = i[e],
              u = l && c && d && d.major;
            return this._adapter.format(t, s || (u ? c : h));
          }
          generateTickLabels(t) {
            let e, i, s;
            for (e = 0, i = t.length; e < i; ++e)
              (s = t[e]), (s.label = this._tickFormatFunction(s.value, e, t));
          }
          getDecimalForValue(t) {
            return null === t ? NaN : (t - this.min) / (this.max - this.min);
          }
          getPixelForValue(t) {
            const e = this._offsets,
              i = this.getDecimalForValue(t);
            return this.getPixelForDecimal((e.start + i) * e.factor);
          }
          getValueForPixel(t) {
            const e = this._offsets,
              i = this.getDecimalForPixel(t) / e.factor - e.end;
            return this.min + i * (this.max - this.min);
          }
          _getLabelSize(t) {
            const e = this.options.ticks,
              i = this.ctx.measureText(t).width,
              s = bt(this.isHorizontal() ? e.maxRotation : e.minRotation),
              n = Math.cos(s),
              o = Math.sin(s),
              a = this._resolveTickFontOptions(0).size;
            return { w: i * n + a * o, h: i * o + a * n };
          }
          _getLabelCapacity(t) {
            const e = this.options.time,
              i = e.displayFormats,
              s = i[e.unit] || i.millisecond,
              n = this._tickFormatFunction(
                t,
                0,
                aa(this, [t], this._majorUnit),
                s
              ),
              o = this._getLabelSize(n),
              a =
                Math.floor(
                  this.isHorizontal() ? this.width / o.w : this.height / o.h
                ) - 1;
            return a > 0 ? a : 1;
          }
          getDataTimestamps() {
            let t,
              e,
              i = this._cache.data || [];
            if (i.length) return i;
            const s = this.getMatchingVisibleMetas();
            if (this._normalized && s.length)
              return (this._cache.data =
                s[0].controller.getAllParsedValues(this));
            for (t = 0, e = s.length; t < e; ++t)
              i = i.concat(s[t].controller.getAllParsedValues(this));
            return (this._cache.data = this.normalize(i));
          }
          getLabelTimestamps() {
            const t = this._cache.labels || [];
            let e, i;
            if (t.length) return t;
            const s = this.getLabels();
            for (e = 0, i = s.length; e < i; ++e) t.push(sa(this, s[e]));
            return (this._cache.labels = this._normalized
              ? t
              : this.normalize(t));
          }
          normalize(t) {
            return Et(t.sort(ia));
          }
        }
        function la(t, e, i) {
          let s,
            n,
            o,
            a,
            r = 0,
            l = t.length - 1;
          i
            ? (e >= t[r].pos &&
                e <= t[l].pos &&
                ({ lo: r, hi: l } = Dt(t, "pos", e)),
              ({ pos: s, time: o } = t[r]),
              ({ pos: n, time: a } = t[l]))
            : (e >= t[r].time &&
                e <= t[l].time &&
                ({ lo: r, hi: l } = Dt(t, "time", e)),
              ({ time: s, pos: o } = t[r]),
              ({ time: n, pos: a } = t[l]));
          const h = n - s;
          return h ? o + ((a - o) * (e - s)) / h : o;
        }
        class ha extends ra {
          static id = "timeseries";
          static defaults = ra.defaults;
          constructor(t) {
            super(t),
              (this._table = []),
              (this._minPos = void 0),
              (this._tableRange = void 0);
          }
          initOffsets() {
            const t = this._getTimestampsForTable(),
              e = (this._table = this.buildLookupTable(t));
            (this._minPos = la(e, this.min)),
              (this._tableRange = la(e, this.max) - this._minPos),
              super.initOffsets(t);
          }
          buildLookupTable(t) {
            const { min: e, max: i } = this,
              s = [],
              n = [];
            let o, a, r, l, h;
            for (o = 0, a = t.length; o < a; ++o)
              (l = t[o]), l >= e && l <= i && s.push(l);
            if (s.length < 2)
              return [
                { time: e, pos: 0 },
                { time: i, pos: 1 },
              ];
            for (o = 0, a = s.length; o < a; ++o)
              (h = s[o + 1]),
                (r = s[o - 1]),
                (l = s[o]),
                Math.round((h + r) / 2) !== l &&
                  n.push({ time: l, pos: o / (a - 1) });
            return n;
          }
          _getTimestampsForTable() {
            let t = this._cache.all || [];
            if (t.length) return t;
            const e = this.getDataTimestamps(),
              i = this.getLabelTimestamps();
            return (
              (t =
                e.length && i.length
                  ? this.normalize(e.concat(i))
                  : e.length
                  ? e
                  : i),
              (t = this._cache.all = t),
              t
            );
          }
          getDecimalForValue(t) {
            return (la(this._table, t) - this._minPos) / this._tableRange;
          }
          getValueForPixel(t) {
            const e = this._offsets,
              i = this.getDecimalForPixel(t) / e.factor - e.end;
            return la(this._table, i * this._tableRange + this._minPos, !0);
          }
        }
        var ca = Object.freeze({
          __proto__: null,
          CategoryScale: Vo,
          LinearScale: No,
          LogarithmicScale: qo,
          RadialLinearScale: Jo,
          TimeScale: ra,
          TimeSeriesScale: ha,
        });
        const da = [Qi, Bn, zo, ca];
      },
    },
    e = {};
  function i(s) {
    var n = e[s];
    if (void 0 !== n) return n.exports;
    var o = (e[s] = { exports: {} });
    return t[s](o, o.exports, i), o.exports;
  }
  (i.d = (t, e) => {
    for (var s in e)
      i.o(e, s) &&
        !i.o(t, s) &&
        Object.defineProperty(t, s, { enumerable: !0, get: e[s] });
  }),
    (i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (i.r = (t) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (() => {
      function t(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, s = new Array(e); i < e; i++) s[i] = t[i];
        return s;
      }
      var e = !0,
        s = 0,
        n = [];
      function o() {
        return e;
      }
      function a() {
        return s;
      }
      function r(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return l(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return l(t, e);
              var i = Object.prototype.toString.call(t).slice(8, -1);
              return (
                "Object" === i && t.constructor && (i = t.constructor.name),
                "Map" === i || "Set" === i
                  ? Array.from(t)
                  : "Arguments" === i ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
                  ? l(t, e)
                  : void 0
              );
            }
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function l(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, s = new Array(e); i < e; i++) s[i] = t[i];
        return s;
      }
      var h,
        c,
        d,
        u,
        f = i(449),
        g = f.Chart,
        p = f.registerables;
      function m(t) {
        h = t;
      }
      function b(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, s = new Array(e); i < e; i++) s[i] = t[i];
        return s;
      }
      g.register.apply(g, r(p));
      var x,
        _ = 100,
        y = 1;
      function v(t, e) {
        (e.innerHTML = ""), (t.innerHTML = "");
      }
      function M(t, e) {
        var i =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          s = document.createElement("td");
        (s.innerHTML = e),
          i.colspan && s.setAttribute("colspan", i.colspan),
          i.rowspan && s.setAttribute("rowspan", i.rowspan),
          i.style && s.setAttribute("style", i.style),
          t.append(s);
      }
      function w(t) {
        var e = this;
        e.parentNode.querySelectorAll(".open").forEach(function (t) {
          t.classList.remove("open");
        }),
          e.classList.add("open"),
          (y = e.value),
          v(u, c),
          k(d);
      }
      function k(t) {
        var e,
          i = ((e = _ * (y - 1)), G().slice(0 + e, _ + e));
        if (i.length > 0) {
          var s = document.createElement("table");
          c.append(s);
          var n = document.createElement("thead"),
            o = document.createElement("tr");
          M(o, "№", { rowspan: 2 });
          var r = a(),
            l = i[0].length - r,
            h = "1px solid #000";
          M(o, "Значения рандомизированных весовых коэффициентов", {
            colspan: l,
          }),
            t &&
              (M(o, "Рейтинг объекта", {
                colspan: r,
                style: "border-left: ".concat(h, ";"),
              }),
              o.setAttribute("style", "border-top: ".concat(h, ";"))),
            n.append(o),
            (o = document.createElement("tr"));
          for (var d = 1; d <= l; d++) M(o, "p<sub>".concat(d, "</sub>"));
          if (t)
            for (var u = 1; u <= r; u++) {
              var f = 1 == u ? { style: "border-left: ".concat(h, ";") } : {};
              M(o, "O<sub>".concat(u, "</sub>"), f);
            }
          n.append(o), s.append(n);
          var g = document.createElement("tbody"),
            p = _ * (y - 1) + 1;
          if (
            (i.forEach(function (t, e) {
              var i = document.createElement("tr");
              M(i, p + e),
                t.forEach(function (t, e) {
                  var s =
                    e == l ? { style: "border-left: ".concat(h, ";") } : {};
                  M(i, t, s);
                }),
                g.append(i);
            }),
            y == x)
          ) {
            var m = document.createElement("tr");
            m.classList.add("parameters-table__row"),
              M(m, "Среднее<br>значение"),
              $().forEach(function (t, e) {
                var i = e == l ? { style: "border-left: ".concat(h, ";") } : {};
                M(m, t, i);
              }),
              g.append(m);
          }
          s.append(g);
          var b = c.parentNode,
            v = b.querySelector(".js_result-table-pagination"),
            k = b.querySelector(".js_this-page-info");
          if (((v.innerHTML = ""), (k.innerHTML = ""), x > 1)) {
            for (var S = 0; S < x; S++) {
              var P = document.createElement("button");
              P.classList.add("result-table__pagination-item"),
                (P.value = S + 1),
                (P.innerHTML = P.value),
                v.append(P),
                P.addEventListener("click", w);
            }
            k.innerHTML = "Текущая страница ".concat(y, " из ").concat(x);
          }
        }
      }
      function S(t) {
        var e, i, s, n, l;
        G().length
          ? ((function (t) {
              x = Math.ceil(t.length / _);
            })(G()),
            (y = 1),
            k((d = t)),
            document.querySelector(".js_result-block").classList.add("active"),
            (function () {
              var t = a(),
                e = G(),
                i = N(),
                s = e.length;
              if (t > 1) {
                var n = Array.from({ length: t }, function (n, o) {
                    return Array.from({ length: t }, function (t, n) {
                      return o == n
                        ? 0
                        : o < n
                        ? Math.round(
                            100 *
                              (1 -
                                e.filter(function (t, s) {
                                  return t[i + n] > e[s][i + o];
                                }).length /
                                  s)
                          ) / 100
                        : Math.round(
                            (e.filter(function (t, s) {
                              return t[i + o] > e[s][i + n];
                            }).length /
                              s) *
                              100
                          ) / 100;
                    });
                  }),
                  o = document.createElement("table"),
                  r = document.querySelector(".js_result-grade-p-table");
                (r.innerHTML = ""),
                  r.append(
                    "\n\t\tТаблица стахастического доминирования оценок —\n\t\tВероятность, что оценка набора строки больше оценки набора столбца"
                  ),
                  r.append(o),
                  document
                    .querySelector('[data-menu-name="grade-p"]')
                    .classList.remove("hide");
                var l = document.createElement("thead"),
                  h = document.createElement("tr");
                M(h, "№");
                for (var c = 1; c <= n.length; c++)
                  M(h, "O<sub>".concat(c, "</sub>"));
                l.append(h), o.append(l);
                var d = document.createElement("tbody");
                n.forEach(function (t, e) {
                  var i = document.createElement("tr");
                  M(i, "O<sub>".concat(e + 1, "</sub>")),
                    t.forEach(function (t, e) {
                      M(i, t);
                    }),
                    d.append(i);
                }),
                  o.append(d);
              } else
                document
                  .querySelector('[data-menu-name="grade-p"]')
                  .classList.add("hide");
            })(),
            (function () {
              var t = G(),
                e = a(),
                i = N(),
                s = H(),
                n = W(),
                l = 0.05;
              l = l < n ? l : n;
              var h = document.querySelector(".js_result-graths");
              (h.innerHTML = ""),
                $(),
                i < 64 &&
                  (function () {
                    var n,
                      a,
                      c,
                      d = document.createElement("div"),
                      u = document.createElement("div");
                    h.append(d),
                      d.append(
                        "Граффики значений наборов весовых коофициентов"
                      ),
                      (c = Math.round((s / l) * 100) / 100),
                      (a = new Array(c).fill().map(function (t, e) {
                        return Math.round(100 * (s - l * e)) / 100;
                      })),
                      a.sort(function (t, e) {
                        return t - e;
                      }),
                      (n = new Array(c).fill().map(function (t, e) {
                        return "".concat(a[e]);
                      })),
                      new Array(i).fill().map(function (e, i) {
                        var s = document.createElement("canvas");
                        return (
                          d.append(s),
                          new g(s, {
                            data: {
                              labels: n,
                              datasets: [
                                {
                                  type: "bar",
                                  label: "Показатель p".concat(i + 1),
                                  data: new Array(a.length)
                                    .fill()
                                    .map(function (e, s) {
                                      return t.reduce(function (t, e) {
                                        return e[i] == a[s] ? ++t : t;
                                      }, 0);
                                    }),
                                },
                              ],
                            },
                            options: { scales: { y: { beginAtZero: !0 } } },
                          })
                        );
                      }),
                      (n = new Array(i).fill().map(function (t, e) {
                        return "p".concat(e + 1);
                      }));
                    var f = document.createElement("canvas");
                    if (
                      (d.append(f),
                      new g(f, {
                        type: "bar",
                        data: {
                          labels: n,
                          datasets: [
                            {
                              type: "bar",
                              label:
                                "Соотношение максимальных и минимальных значений коофициентов в наборах",
                              data: n.map(function (e, i) {
                                return [
                                  Math.max.apply(
                                    Math,
                                    r(
                                      t.map(function (t) {
                                        return t[i];
                                      })
                                    )
                                  ),
                                  Math.min.apply(
                                    Math,
                                    r(
                                      t.map(function (t) {
                                        return t[i];
                                      })
                                    )
                                  ),
                                ];
                              }),
                            },
                          ],
                        },
                        options: {
                          scales: { y: { min: 0, max: s, beginAtZero: !0 } },
                        },
                      }),
                      o() && e > 1 && e < 64)
                    ) {
                      h.append(u),
                        u.append("Граффики изменения рейтинговых оценок"),
                        (c = Math.round((s / l) * 100) / 100),
                        (a = new Array(c).fill().map(function (t, e) {
                          return Math.round(100 * (s - l * e)) / 100;
                        })),
                        a.sort(function (t, e) {
                          return t - e;
                        }),
                        (n = new Array(c).fill().map(function (t, e) {
                          return "".concat(a[e]);
                        }));
                      for (
                        var p = function (e) {
                            var s = document.createElement("canvas");
                            u.append(s),
                              new g(s, {
                                data: {
                                  labels: n,
                                  datasets: [
                                    {
                                      type: "bar",
                                      label: "Оценка Q".concat(e + 1),
                                      data: new Array(a.length)
                                        .fill()
                                        .map(function (s, n) {
                                          return t.reduce(function (t, s) {
                                            return s[i + e] <= a[n] &&
                                              s[i + e] > a[n] - l
                                              ? ++t
                                              : t;
                                          }, 0);
                                        }),
                                    },
                                  ],
                                },
                                options: { scales: { y: { beginAtZero: !0 } } },
                              });
                          },
                          m = 0;
                        e > m;
                        m++
                      )
                        p(m);
                      n = new Array(e).fill().map(function (t, e) {
                        return "Q".concat(e + 1);
                      });
                      var b = document.createElement("canvas");
                      u.append(b),
                        new g(b, {
                          type: "bar",
                          data: {
                            labels: n,
                            datasets: [
                              {
                                type: "bar",
                                label:
                                  "Соотношение максимальных и минимальных значений оценок в наборах",
                                data: n.map(function (e, s) {
                                  return [
                                    Math.max.apply(
                                      Math,
                                      r(
                                        t.map(function (t) {
                                          return t[i + s];
                                        })
                                      )
                                    ),
                                    Math.min.apply(
                                      Math,
                                      r(
                                        t.map(function (t) {
                                          return t[i + s];
                                        })
                                      )
                                    ),
                                  ];
                                }),
                              },
                            ],
                          },
                          options: {
                            scales: { y: { min: 0, max: s, beginAtZero: !0 } },
                          },
                        });
                    }
                  })();
            })(),
            (e = document.querySelector(".js_result-download")),
            (i =
              (function (t) {
                if (Array.isArray(t)) return b(t);
              })((l = G())) ||
              (function (t) {
                if (
                  ("undefined" != typeof Symbol &&
                    null != t[Symbol.iterator]) ||
                  null != t["@@iterator"]
                )
                  return Array.from(t);
              })(l) ||
              (function (t, e) {
                if (t) {
                  if ("string" == typeof t) return b(t, e);
                  var i = Object.prototype.toString.call(t).slice(8, -1);
                  return (
                    "Object" === i && t.constructor && (i = t.constructor.name),
                    "Map" === i || "Set" === i
                      ? Array.from(t)
                      : "Arguments" === i ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
                      ? b(t, e)
                      : void 0
                  );
                }
              })(l) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()),
            (s = new Array(i[0].length).fill().map(function (t, e) {
              return e < N()
                ? "p".concat(e + 1)
                : e < N() + a()
                ? "O".concat(e + 1 - N())
                : "undefined";
            })),
            i.unshift(s),
            (i = i
              .map(function (t) {
                return t.join(";");
              })
              .join("\n")
              .replaceAll(".", ",")),
            (e.href = "data:text/csv;charset=utf-8,".concat(
              encodeURIComponent(i)
            )),
            (e.download = "data.csv"))
          : (h.innerHTML += "Подходящих элементов не найдено"),
          (n = G().length),
          document
            .querySelectorAll(".js_parametrs-kits-end-number")
            .forEach(function (t) {
              t.innerHTML = n || "-";
            });
      }
      function P(t, e) {
        var i = document.createElement("td");
        i.classList.add("parameters-grade-table__header-item"),
          i.classList.add("parameters-grade-table__item"),
          (i.innerHTML = e),
          t.append(i);
      }
      function A(t) {
        var e,
          i =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          s = document.createElement("td");
        s.classList.add("parameters-grade-table__item"),
          i
            ? ((e = document.createElement("div")).classList.add(
                "parameters-grade-table__input"
              ),
              e.classList.add("parameters-grade-table__input--text"),
              (e.innerHTML = i))
            : ((e = document.createElement("input")).classList.add(
                "parameters-grade-table__input"
              ),
              e.classList.add("js_parameters-grade-table-item-input")),
          s.append(e),
          t.append(s);
      }
      var D = [];
      function C(t) {
        switch (t) {
          case ">":
            return 1;
          case "<":
            return 2;
          case ">=":
            return 3;
          case "<=":
            return 4;
          case "=":
            return 5;
          default:
            return -1;
        }
      }
      function O(t, e, i) {
        switch (e) {
          case 1:
            return t > i;
          case 2:
            return t < i;
          case 3:
            return t >= i;
          case 4:
            return t <= i;
          case 5:
            return t == i;
        }
      }
      var L,
        E,
        T,
        R = 3,
        I = 1,
        z = 0.2,
        F = [],
        V = [],
        j = [],
        B = function (t) {
          return t.toString().includes(".")
            ? t.toString().split(".").pop().length
            : 0;
        };
      function N() {
        return Number(R);
      }
      function H() {
        return Number(I);
      }
      function W() {
        return Number(z);
      }
      function $() {
        return j;
      }
      function Y(i) {
        return (
          (R = i.querySelector(".js_parametrs-number-input").value),
          (z = i.querySelector(".js_parametrs-step-input").value),
          (T = I / z),
          Number.isInteger(T)
            ? (function (t) {
                if (((D = []), t)) {
                  t = t.split(", ");
                  for (var e = 0; e < t.length; e++) {
                    var i = t[e].split(" ");
                    if (3 != i.length) return !1;
                    for (
                      var s = i[0].split(","),
                        n = C(i[1]),
                        o = i[2].split(","),
                        a = 0;
                      a < s.length;
                      a++
                    )
                      for (var r = 0; r < o.length; r++) {
                        if (!(n && s[a] > 0 && o[r] > 0)) return !1;
                        D.push([s[a] - 1, n, o[r] - 1]);
                      }
                  }
                }
                return !0;
              })(i.querySelector(".js_parametrs-filter-input").value)
              ? !!(function (i, o) {
                  var a,
                    r = [];
                  (e = !0), (n = []);
                  for (
                    var l = i
                        .querySelector(".js-parameters-grade-table-block")
                        .querySelectorAll(".js_parameters-grade-table-row"),
                      h = 0;
                    h < l.length;
                    h++
                  ) {
                    a = [];
                    for (
                      var c = l[h].querySelectorAll(
                          ".js_parameters-grade-table-item-input"
                        ),
                        d = 0;
                      d < c.length;
                      d++
                    ) {
                      var u = c[d].value;
                      if (!u) return (e = !1), !0;
                      if (!isFinite(u)) return (e = !1);
                      a.push(Number(c[d].value));
                    }
                    r.push(a);
                  }
                  return (
                    (n = (function (t, i) {
                      if (
                        !Array.isArray(t) ||
                        0 === t.length ||
                        !Array.isArray(t[0])
                      )
                        throw new Error("Invalid input. Expected a 2D array.");
                      for (
                        var s = t.length, n = t[0].length, o = [], a = 0;
                        a < n;
                        a++
                      ) {
                        for (var r = [], l = 0; l < s; l++) r.push(t[l][a]);
                        if (r.length != i) return void (e = !1);
                        o.push(r);
                      }
                      return o;
                    })(
                      (function (e) {
                        for (var i = 0; i < e.length; i++)
                          for (
                            var s = e[i],
                              n = Math.max.apply(
                                Math,
                                (function (e) {
                                  if (Array.isArray(e)) return t(e);
                                })((a = s)) ||
                                  (function (t) {
                                    if (
                                      ("undefined" != typeof Symbol &&
                                        null != t[Symbol.iterator]) ||
                                      null != t["@@iterator"]
                                    )
                                      return Array.from(t);
                                  })(a) ||
                                  (function (e, i) {
                                    if (e) {
                                      if ("string" == typeof e) return t(e, i);
                                      var s = Object.prototype.toString
                                        .call(e)
                                        .slice(8, -1);
                                      return (
                                        "Object" === s &&
                                          e.constructor &&
                                          (s = e.constructor.name),
                                        "Map" === s || "Set" === s
                                          ? Array.from(e)
                                          : "Arguments" === s ||
                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                              s
                                            )
                                          ? t(e, i)
                                          : void 0
                                      );
                                    }
                                  })(a) ||
                                  (function () {
                                    throw new TypeError(
                                      "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                                    );
                                  })()
                              ),
                              o = 0;
                            o < s.length;
                            o++
                          )
                            s[o] /= n;
                        var a;
                        return e;
                      })(r),
                      o
                    )),
                    (s = n.length),
                    e
                  );
                })(i.querySelector(".js_parametrs-grade-input"), R) ||
                ((h.innerHTML +=
                  "Введите пожалуйста корректные данные для вычисления оценок"),
                !1)
              : ((h.innerHTML +=
                  "Введите пожалуйста корректную строку для фильтрации"),
                !1)
            : ((function (t) {
                h.innerHTML +=
                  "Введите пожалуйста шаг, которому кратна сумма ряда равная: ".concat(
                    t
                  );
              })(I),
              !1)
        );
      }
      function q(t) {
        var e = t.slice(0);
        (function (t) {
          for (var e = V.length - 1; e >= 0; e--) {
            var i = V[e].slice(0);
            if (i[0] != t[0]) return !0;
            for (var s = 1, n = 1; n < i.length; n++) i[n] == t[n] && s++;
            if (s == i.length) return !1;
          }
          return !0;
        })(e) &&
          (V.push(e),
          (function (t) {
            for (var e = 0; e < t.length; e++) if (t[e] <= 0) return !1;
            for (var i = 0; i < D.length; i++)
              if (!O(t[D[i][0]], D[i][1], t[D[i][2]])) return !1;
            return !0;
          })(e) &&
            (o() &&
              (e = (function (t) {
                var e = t.slice(0);
                return (
                  (e = e.concat(
                    (function (t) {
                      for (var e, i = [], s = 0; s < n.length; s++) {
                        e = 0;
                        for (var o = n[s], a = 0; a < t.length; a++)
                          e += t[a] * o[a];
                        i.push(e);
                      }
                      return i;
                    })(e)
                  )),
                  e
                );
              })(e)),
            (e = (function (t) {
              return t.map(function (t) {
                return Math.round((t / E) * 100) / 100;
              });
            })(e)),
            F.push(e)));
      }
      function U(t, e) {
        var i = t.slice(0);
        return (i[0] -= z), (i[e] += z), i;
      }
      function X(t, e) {
        var i = t.slice(0);
        return (i[0] += z), (i[e] -= z), i;
      }
      function K() {
        var t;
        (t = B(z)) < B(I) && (t = B(I)),
          (L = t),
          (E = Math.pow(10, L)),
          (I *= E),
          (z *= E);
        for (var e = [], i = 0; i < R; i++) e[i] = 0;
        (e[0] = I), (F = []), (V = []), q(e);
      }
      function Z(t, e, i) {
        v(e, i),
          (function (t) {
            c = t;
          })(i),
          (function (t) {
            u = t;
          })(e),
          m(e),
          performance.mark("начало"),
          Y(t) &&
            (document.body.classList.add("calculate"),
            document
              .querySelector(".js_result-block")
              .classList.remove("active"),
            (function () {
              K();
              for (var t = 0; t < T; t++) {
                console.log(
                  "проход генерации: "
                    .concat(t + 1, " из ")
                    .concat(
                      T,
                      ", \n\t\tколичество элементов массива генерации на этом этапе: "
                    )
                    .concat(V.length)
                );
                for (var e = V.length, i = 0; i < e; i++) {
                  var s = V.shift();
                  if (!(s[0] <= 0))
                    for (var n = 1; n < s.length; n++)
                      q((s = U(s, n))), (s = X(s, n));
                }
              }
              (I /= E),
                (z /= E),
                (V = []),
                (function () {
                  if (F[0]) {
                    j = new Array(F[0].length).fill(0);
                    var t = F,
                      e = t.length;
                    t.forEach(function (t, e) {
                      t.forEach(function (t, e) {
                        j[e] += t;
                      });
                    }),
                      (j = j.map(function (t, i) {
                        return Math.round((t / e) * 100) / 100;
                      }));
                  }
                })(),
                S(o());
            })(),
            document.body.classList.remove("calculate")),
          performance.mark("конец"),
          performance.measure("итого", "начало", "конец"),
          console.log(performance.getEntriesByName("итого")[0].duration),
          performance.clearMeasures(),
          performance.clearMarks();
      }
      function G() {
        return F;
      }
      var Q = document.querySelector(".js_parameters-form"),
        J = document.querySelector(".js_parameters-table"),
        tt = document.querySelector(".js_errno-field");
      function et(t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (e > t) throw new Error("k должно быть меньше или равно n");
        for (var i = 1, s = t; s > e; s--) i *= s;
        return i;
      }
      function it() {
        var t = document.querySelector(".js_parametrs-number-input").value,
          e = document.querySelector(".js_parametrs-step-input").value;
        if (t && e) {
          var i = 1 / e - 1,
            s = t - 1;
          document.querySelector(".js_parametrs-kits-number").innerHTML =
            et(i, i - s) / et(s);
        }
      }
      function st(t) {
        var e,
          i = (function (t) {
            var e = document.createElement("table");
            e.classList.add("parameters-grade-table");
            var i = document.createElement("thead"),
              s = document.createElement("tr");
            s.classList.add("parameters-grade-table__header-row");
            var n = document.querySelector(
                ".js_parametrs-grade-input .js-parameters-grade-table-block table tbody"
              ),
              o = n ? n.querySelectorAll("tr:last-child td").length : 2;
            P(s, "№");
            for (var a = 1; a < o; a++) P(s, "O<sub>".concat(a, "</sub>"));
            i.append(s), e.append(i);
            for (var r = document.createElement("tbody"), l = 1; l <= t; l++) {
              var h = document.createElement("tr");
              h.classList.add("parameters-grade-table__row"),
                h.classList.add("js_parameters-grade-table-row"),
                A(h, "X<sub>".concat(l, "</sub>"));
              for (var c = 1; c < o; c++) A(h);
              r.append(h);
            }
            return e.append(r), e;
          })(((e = Number(t.target.value)), (R = e)));
        Q.querySelectorAll(".js-parameters-grade-table-block").forEach(
          function (t) {
            t.closest(".js_parametrs-grade-input").classList.add("active");
            var e = t.querySelector("table");
            e && e.parentNode.removeChild(e), t.append(i);
          }
        ),
          it();
      }
      function nt(t) {}
      function ot(t) {
        var e;
        (e = t.target
          .closest(".js_parametrs-grade-input")
          .querySelector(".js-parameters-grade-table-block")
          .querySelectorAll("tr td:last-child")).length > 1 &&
          e.forEach(function (t) {
            return t.parentNode.removeChild(t);
          });
      }
      function at(t) {
        var e, i;
        (e = t.target),
          N(),
          (i = e
            .closest(".js_parametrs-grade-input")
            .querySelector(".js-parameters-grade-table-block"))
            .querySelector("thead")
            .querySelectorAll("tr")
            .forEach(function (t) {
              P(t, "O<sub>".concat(t.querySelectorAll("td").length, "</sub>"));
            }),
          i
            .querySelector("tbody")
            .querySelectorAll("tr")
            .forEach(function (t) {
              A(t);
            });
      }
      function rt(t) {
        var e = this,
          i = e.dataset.menuName;
        e.parentNode.querySelector(".active").classList.remove("active");
        var s = e.parentNode.parentNode;
        s.querySelector(".active").classList.remove("active"),
          s
            .querySelector(
              "[data-menu-name=".concat(i, "]:not(.js_result-menu-button)")
            )
            .classList.add("active"),
          e.classList.add("active");
      }
      Q.addEventListener("submit", function (t) {
        t.preventDefault(), Z(this, tt, J);
      }),
        Q.querySelectorAll(".js_parametrs-number-input").forEach(function (t) {
          t.addEventListener("change", st);
        }),
        Q.querySelectorAll(".js_parametrs-step-input").forEach(function (t) {
          t.addEventListener("change", it);
        }),
        Q.querySelectorAll(".js_parametrs-grade-input").forEach(function (t) {
          t.addEventListener("change", nt);
        }),
        Q.querySelectorAll(
          ".js_parametrs-grade-input-number-control-remove"
        ).forEach(function (t) {
          t.addEventListener("click", ot);
        }),
        Q.querySelectorAll(
          ".js_parametrs-grade-input-number-control-add"
        ).forEach(function (t) {
          t.addEventListener("click", at);
        }),
        document
          .querySelectorAll(".js_result-menu-button")
          .forEach(function (t) {
            t.addEventListener("click", rt);
          });
    })();
})();

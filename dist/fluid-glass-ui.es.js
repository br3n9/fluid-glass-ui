"use client";
import { jsxs as H, jsx as d, Fragment as Qn } from "react/jsx-runtime";
import fe, { forwardRef as Zn, createElement as mr, useState as be, createContext as Rt, useCallback as Ge, useEffect as Le, useContext as Pr, useRef as Ct, useMemo as Ot } from "react";
import Wo from "react-dom";
import { usePress as Ko } from "@react-aria/interactions";
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xo = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Qo = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, r, n) => n ? n.toUpperCase() : r.toLowerCase()
), qr = (e) => {
  const t = Qo(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Yn = (...e) => e.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim(), Zo = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Yo = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jo = Zn(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: o = "",
    children: a,
    iconNode: s,
    ...l
  }, i) => mr(
    "svg",
    {
      ref: i,
      ...Yo,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: Yn("lucide", o),
      ...!a && !Zo(l) && { "aria-hidden": "true" },
      ...l
    },
    [
      ...s.map(([h, f]) => mr(h, f)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const he = (e, t) => {
  const r = Zn(
    ({ className: n, ...o }, a) => mr(Jo, {
      ref: a,
      iconNode: t,
      className: Yn(
        `lucide-${Xo(qr(e))}`,
        `lucide-${e}`,
        n
      ),
      ...o
    })
  );
  return r.displayName = qr(e), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const es = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
], Jn = he("bell", es);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ts = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Or = he("check", ts);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rs = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Ve = he("chevron-down", rs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ns = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], os = he("chevron-left", ns);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ss = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Tr = he("chevron-right", ss);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const as = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], eo = he("chevron-up", as);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const is = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], et = he("circle-alert", is);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ls = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], Mr = he("circle-check-big", ls);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cs = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
], us = he("circle-x", cs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ds = [
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], fs = he("clock", ds);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ps = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], hs = he("eye", ps);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ms = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], gr = he("file-text", ms);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gs = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
], bs = he("grid-3x3", gs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ys = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
], Nt = he("info", ys);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vs = [
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 18h.01", key: "1tta3j" }],
  ["path", { d: "M3 6h.01", key: "1rqtza" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 18h13", key: "1lx6n3" }],
  ["path", { d: "M8 6h13", key: "ik3vkj" }]
], xs = he("list", vs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ws = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], _s = he("loader-circle", ws);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rs = [
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 18h16", key: "19g7jn" }],
  ["path", { d: "M4 6h16", key: "1o0s65" }]
], to = he("menu", Rs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cs = [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
], Ns = he("moon", Cs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Es = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], As = he("plus", Es);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ks = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], br = he("search", ks);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ss = [
  ["line", { x1: "21", x2: "14", y1: "4", y2: "4", key: "obuewd" }],
  ["line", { x1: "10", x2: "3", y1: "4", y2: "4", key: "1q6298" }],
  ["line", { x1: "21", x2: "12", y1: "12", y2: "12", key: "1iu8h1" }],
  ["line", { x1: "8", x2: "3", y1: "12", y2: "12", key: "ntss68" }],
  ["line", { x1: "21", x2: "16", y1: "20", y2: "20", key: "14d8ph" }],
  ["line", { x1: "12", x2: "3", y1: "20", y2: "20", key: "m0wm8r" }],
  ["line", { x1: "14", x2: "14", y1: "2", y2: "6", key: "14e1ph" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
  ["line", { x1: "16", x2: "16", y1: "18", y2: "22", key: "1lctlv" }]
], Ps = he("sliders-horizontal", Ss);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Os = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  [
    "path",
    {
      d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
      key: "ohrbg2"
    }
  ]
], ro = he("square-pen", Os);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ts = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
], Ms = he("sun", Ts);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Is = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
], no = he("trash-2", Is);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $s = [
  ["path", { d: "M16 17h6v-6", key: "t6n2it" }],
  ["path", { d: "m22 17-8.5-8.5-5 5L2 7", key: "x473p" }]
], Ls = he("trending-down", $s);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zs = [
  ["path", { d: "M16 7h6v6", key: "box55l" }],
  ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
], js = he("trending-up", zs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hs = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
], Ds = he("upload", Hs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qs = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], Ir = he("user", qs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Us = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], ze = he("x", Us);
function Wl({ title: e, children: t }) {
  const [r, n] = be(!1);
  return /* @__PURE__ */ H("div", { className: "glass-surface rounded-lg overflow-hidden border border-white/10", children: [
    /* @__PURE__ */ H(
      "button",
      {
        onClick: () => n(!r),
        className: "w-full flex justify-between items-center p-4 text-left font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500",
        "aria-expanded": r,
        children: [
          /* @__PURE__ */ d("span", { children: e }),
          /* @__PURE__ */ d(
            Ve,
            {
              className: `transform transition-transform duration-300 ${r ? "rotate-180" : ""}`
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ d("div", { className: `transition-all duration-300 ease-in-out overflow-hidden ${r ? "max-h-screen" : "max-h-0"}`, children: /* @__PURE__ */ d("div", { className: "p-4 border-t border-white/10", children: t }) })
  ] });
}
const Gs = {
  info: {
    icon: Nt,
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    iconColor: "text-blue-600",
    titleColor: "text-blue-900",
    textColor: "text-blue-700"
  },
  success: {
    icon: Mr,
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    iconColor: "text-green-600",
    titleColor: "text-green-900",
    textColor: "text-green-700"
  },
  warning: {
    icon: et,
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
    iconColor: "text-yellow-600",
    titleColor: "text-yellow-900",
    textColor: "text-yellow-700"
  },
  danger: {
    icon: us,
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    iconColor: "text-red-600",
    titleColor: "text-red-900",
    textColor: "text-red-700"
  }
};
function Kl({ variant: e = "info", title: t, children: r }) {
  const n = Gs[e], o = n.icon;
  return /* @__PURE__ */ H(
    "div",
    {
      className: `flex items-center gap-3 p-4 border rounded-lg ${n.bgColor} ${n.borderColor}`,
      children: [
        /* @__PURE__ */ d(o, { size: 20, className: n.iconColor }),
        /* @__PURE__ */ H("div", { children: [
          t && /* @__PURE__ */ d("p", { className: `font-medium ${n.titleColor}`, children: t }),
          /* @__PURE__ */ d("p", { className: `text-sm ${n.textColor}`, children: r })
        ] })
      ]
    }
  );
}
function oo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Bs(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var so = {}, Se = {};
Se._ = Se._interop_require_default = Vs;
function Vs(e) {
  return e && e.__esModule ? e : { default: e };
}
var $r = {}, nt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "warnOnce", {
    enumerable: !0,
    get: function() {
      return t;
    }
  });
  let t = (r) => {
  };
  if (process.env.NODE_ENV !== "production") {
    const r = /* @__PURE__ */ new Set();
    t = (n) => {
      r.has(n) || console.warn(n), r.add(n);
    };
  }
})(nt);
var ao = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "getImageBlurSvg", {
    enumerable: !0,
    get: function() {
      return t;
    }
  });
  function t(r) {
    let { widthInt: n, heightInt: o, blurWidth: a, blurHeight: s, blurDataURL: l, objectFit: i } = r;
    const h = 20, f = a ? a * 40 : n, b = s ? s * 40 : o, y = f && b ? "viewBox='0 0 " + f + " " + b + "'" : "", c = y ? "none" : i === "contain" ? "xMidYMid" : i === "cover" ? "xMidYMid slice" : "none";
    return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + y + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='" + h + "'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='" + h + "'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + c + "' style='filter: url(%23b);' href='" + l + "'/%3E%3C/svg%3E";
  }
})(ao);
var Et = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(o, a) {
    for (var s in a) Object.defineProperty(o, s, {
      enumerable: !0,
      get: a[s]
    });
  }
  t(e, {
    VALID_LOADERS: function() {
      return r;
    },
    imageConfigDefault: function() {
      return n;
    }
  });
  const r = [
    "default",
    "imgix",
    "cloudinary",
    "akamai",
    "custom"
  ], n = {
    deviceSizes: [
      640,
      750,
      828,
      1080,
      1200,
      1920,
      2048,
      3840
    ],
    imageSizes: [
      16,
      32,
      48,
      64,
      96,
      128,
      256,
      384
    ],
    path: "/_next/image",
    loader: "default",
    loaderFile: "",
    domains: [],
    disableStaticImages: !1,
    minimumCacheTTL: 60,
    formats: [
      "image/webp"
    ],
    dangerouslyAllowSVG: !1,
    contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
    contentDispositionType: "inline",
    remotePatterns: [],
    unoptimized: !1
  };
})(Et);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "getImgProps", {
    enumerable: !0,
    get: function() {
      return c;
    }
  });
  const t = nt, r = ao, n = Et, o = [
    "lazy",
    "eager",
    void 0
  ];
  function a(u) {
    return u.default !== void 0;
  }
  function s(u) {
    return u.src !== void 0;
  }
  function l(u) {
    return typeof u == "object" && (a(u) || s(u));
  }
  const i = /* @__PURE__ */ new Map();
  let h;
  function f(u) {
    return typeof u > "u" ? u : typeof u == "number" ? Number.isFinite(u) ? u : NaN : typeof u == "string" && /^[0-9]+$/.test(u) ? parseInt(u, 10) : NaN;
  }
  function b(u, g, m) {
    let { deviceSizes: S, allSizes: v } = u;
    if (m) {
      const A = /(^|\s)(1?\d?\d)vw/g, k = [];
      for (let C; C = A.exec(m); C)
        k.push(parseInt(C[2]));
      if (k.length) {
        const C = Math.min(...k) * 0.01;
        return {
          widths: v.filter((R) => R >= S[0] * C),
          kind: "w"
        };
      }
      return {
        widths: v,
        kind: "w"
      };
    }
    return typeof g != "number" ? {
      widths: S,
      kind: "w"
    } : {
      widths: [
        ...new Set(
          // > This means that most OLED screens that say they are 3x resolution,
          // > are actually 3x in the green color, but only 1.5x in the red and
          // > blue colors. Showing a 3x resolution image in the app vs a 2x
          // > resolution image will be visually the same, though the 3x image
          // > takes significantly more data. Even true 3x resolution screens are
          // > wasteful as the human eye cannot see that level of detail without
          // > something like a magnifying glass.
          // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
          [
            g,
            g * 2
            /*, width * 3*/
          ].map((A) => v.find((k) => k >= A) || v[v.length - 1])
        )
      ],
      kind: "x"
    };
  }
  function y(u) {
    let { config: g, src: m, unoptimized: S, width: v, quality: p, sizes: A, loader: k } = u;
    if (S)
      return {
        src: m,
        srcSet: void 0,
        sizes: void 0
      };
    const { widths: C, kind: R } = b(g, v, A), x = C.length - 1;
    return {
      sizes: !A && R === "w" ? "100vw" : A,
      srcSet: C.map((I, w) => k({
        config: g,
        src: m,
        quality: p,
        width: I
      }) + " " + (R === "w" ? I : w + 1) + R).join(", "),
      // It's intended to keep `src` the last attribute because React updates
      // attributes in order. If we keep `src` the first one, Safari will
      // immediately start to fetch `src`, before `sizes` and `srcSet` are even
      // updated by React. That causes multiple unnecessary requests if `srcSet`
      // and `sizes` are defined.
      // This bug cannot be reproduced in Chrome or Firefox.
      src: k({
        config: g,
        src: m,
        quality: p,
        width: C[x]
      })
    };
  }
  function c(u, g) {
    let { src: m, sizes: S, unoptimized: v = !1, priority: p = !1, loading: A, className: k, quality: C, width: R, height: x, fill: I = !1, style: w, onLoad: E, onLoadingComplete: _, placeholder: P = "empty", blurDataURL: N, fetchPriority: z, layout: T, objectFit: U, objectPosition: M, lazyBoundary: D, lazyRoot: j, ...ee } = u;
    const { imgConf: F, showAltText: W, blurComplete: G, defaultLoader: te } = g;
    let oe, K = F || n.imageConfigDefault;
    if ("allSizes" in K)
      oe = K;
    else {
      const q = [
        ...K.deviceSizes,
        ...K.imageSizes
      ].sort((Ce, V) => Ce - V), me = K.deviceSizes.sort((Ce, V) => Ce - V);
      oe = {
        ...K,
        allSizes: q,
        deviceSizes: me
      };
    }
    let L = ee.loader || te;
    delete ee.loader, delete ee.srcSet;
    const pe = "__next_img_default" in L;
    if (pe) {
      if (oe.loader === "custom")
        throw new Error('Image with src "' + m + `" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`);
    } else {
      const q = L;
      L = (me) => {
        const { config: Ce, ...V } = me;
        return q(V);
      };
    }
    if (T) {
      T === "fill" && (I = !0);
      const q = {
        intrinsic: {
          maxWidth: "100%",
          height: "auto"
        },
        responsive: {
          width: "100%",
          height: "auto"
        }
      }, me = {
        responsive: "100vw",
        fill: "100vw"
      }, Ce = q[T];
      Ce && (w = {
        ...w,
        ...Ce
      });
      const V = me[T];
      V && !S && (S = V);
    }
    let ie = "", se = f(R), $ = f(x), O, re;
    if (l(m)) {
      const q = a(m) ? m.default : m;
      if (!q.src)
        throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(q));
      if (!q.height || !q.width)
        throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(q));
      if (O = q.blurWidth, re = q.blurHeight, N = N || q.blurDataURL, ie = q.src, !I) {
        if (!se && !$)
          se = q.width, $ = q.height;
        else if (se && !$) {
          const me = se / q.width;
          $ = Math.round(q.height * me);
        } else if (!se && $) {
          const me = $ / q.height;
          se = Math.round(q.width * me);
        }
      }
    }
    m = typeof m == "string" ? m : ie;
    let ue = !p && (A === "lazy" || typeof A > "u");
    (!m || m.startsWith("data:") || m.startsWith("blob:")) && (v = !0, ue = !1), oe.unoptimized && (v = !0), pe && m.endsWith(".svg") && !oe.dangerouslyAllowSVG && (v = !0), p && (z = "high");
    const Ne = f(C);
    if (process.env.NODE_ENV !== "production") {
      if (oe.output === "export" && pe && !v)
        throw new Error("Image Optimization using the default loader is not compatible with `{ output: 'export' }`.\n  Possible solutions:\n    - Remove `{ output: 'export' }` and run \"next start\" to run server mode including the Image Optimization API.\n    - Configure `{ images: { unoptimized: true } }` in `next.config.js` to disable the Image Optimization API.\n  Read more: https://nextjs.org/docs/messages/export-image-api");
      if (!m)
        v = !0;
      else if (I) {
        if (R)
          throw new Error('Image with src "' + m + '" has both "width" and "fill" properties. Only one should be used.');
        if (x)
          throw new Error('Image with src "' + m + '" has both "height" and "fill" properties. Only one should be used.');
        if (w != null && w.position && w.position !== "absolute")
          throw new Error('Image with src "' + m + '" has both "fill" and "style.position" properties. Images with "fill" always use position absolute - it cannot be modified.');
        if (w != null && w.width && w.width !== "100%")
          throw new Error('Image with src "' + m + '" has both "fill" and "style.width" properties. Images with "fill" always use width 100% - it cannot be modified.');
        if (w != null && w.height && w.height !== "100%")
          throw new Error('Image with src "' + m + '" has both "fill" and "style.height" properties. Images with "fill" always use height 100% - it cannot be modified.');
      } else {
        if (typeof se > "u")
          throw new Error('Image with src "' + m + '" is missing required "width" property.');
        if (isNaN(se))
          throw new Error('Image with src "' + m + '" has invalid "width" property. Expected a numeric value in pixels but received "' + R + '".');
        if (typeof $ > "u")
          throw new Error('Image with src "' + m + '" is missing required "height" property.');
        if (isNaN($))
          throw new Error('Image with src "' + m + '" has invalid "height" property. Expected a numeric value in pixels but received "' + x + '".');
      }
      if (!o.includes(A))
        throw new Error('Image with src "' + m + '" has invalid "loading" property. Provided "' + A + '" should be one of ' + o.map(String).join(",") + ".");
      if (p && A === "lazy")
        throw new Error('Image with src "' + m + `" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
      if (P !== "empty" && P !== "blur" && !P.startsWith("data:image/"))
        throw new Error('Image with src "' + m + '" has invalid "placeholder" property "' + P + '".');
      if (P !== "empty" && se && $ && se * $ < 1600 && (0, t.warnOnce)('Image with src "' + m + '" is smaller than 40x40. Consider removing the "placeholder" property to improve performance.'), P === "blur" && !N) {
        const q = [
          "jpeg",
          "png",
          "webp",
          "avif"
        ];
        throw new Error('Image with src "' + m + `" has "placeholder='blur'" property but is missing the "blurDataURL" property.
        Possible solutions:
          - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
          - Change the "src" property to a static import with one of the supported file types: ` + q.join(",") + ` (animated images not supported)
          - Remove the "placeholder" property, effectively no blur effect
        Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`);
      }
      if ("ref" in ee && (0, t.warnOnce)('Image with src "' + m + '" is using unsupported "ref" property. Consider using the "onLoad" property instead.'), !v && !pe) {
        const q = L({
          config: oe,
          src: m,
          width: se || 400,
          quality: Ne || 75
        });
        let me;
        try {
          me = new URL(q);
        } catch {
        }
        (q === m || me && me.pathname === m && !me.search) && (0, t.warnOnce)('Image with src "' + m + `" has a "loader" property that does not implement width. Please implement it or use the "unoptimized" property instead.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader-width`);
      }
      _ && (0, t.warnOnce)('Image with src "' + m + '" is using deprecated "onLoadingComplete" property. Please use the "onLoad" property instead.');
      for (const [q, me] of Object.entries({
        layout: T,
        objectFit: U,
        objectPosition: M,
        lazyBoundary: D,
        lazyRoot: j
      }))
        me && (0, t.warnOnce)('Image with src "' + m + '" has legacy prop "' + q + `". Did you forget to run the codemod?
Read more: https://nextjs.org/docs/messages/next-image-upgrade-to-13`);
      if (typeof window < "u" && !h && window.PerformanceObserver) {
        h = new PerformanceObserver((q) => {
          for (const Ce of q.getEntries()) {
            var me;
            const V = (Ce == null || (me = Ce.element) == null ? void 0 : me.src) || "", X = i.get(V);
            X && !X.priority && X.placeholder === "empty" && !X.src.startsWith("data:") && !X.src.startsWith("blob:") && (0, t.warnOnce)('Image with src "' + X.src + `" was detected as the Largest Contentful Paint (LCP). Please add the "priority" property if this image is above the fold.
Read more: https://nextjs.org/docs/api-reference/next/image#priority`);
          }
        });
        try {
          h.observe({
            type: "largest-contentful-paint",
            buffered: !0
          });
        } catch (q) {
          console.error(q);
        }
      }
    }
    const ge = Object.assign(I ? {
      position: "absolute",
      height: "100%",
      width: "100%",
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      objectFit: U,
      objectPosition: M
    } : {}, W ? {} : {
      color: "transparent"
    }, w), de = !G && P !== "empty" ? P === "blur" ? 'url("data:image/svg+xml;charset=utf-8,' + (0, r.getImageBlurSvg)({
      widthInt: se,
      heightInt: $,
      blurWidth: O,
      blurHeight: re,
      blurDataURL: N || "",
      objectFit: ge.objectFit
    }) + '")' : 'url("' + P + '")' : null;
    let Ae = de ? {
      backgroundSize: ge.objectFit || "cover",
      backgroundPosition: ge.objectPosition || "50% 50%",
      backgroundRepeat: "no-repeat",
      backgroundImage: de
    } : {};
    process.env.NODE_ENV === "development" && Ae.backgroundImage && P === "blur" && N != null && N.startsWith("/") && (Ae.backgroundImage = 'url("' + N + '")');
    const xe = y({
      config: oe,
      src: m,
      unoptimized: v,
      width: se,
      quality: Ne,
      sizes: S,
      loader: L
    });
    if (process.env.NODE_ENV !== "production" && typeof window < "u") {
      let q;
      try {
        q = new URL(xe.src);
      } catch {
        q = new URL(xe.src, window.location.href);
      }
      i.set(q.href, {
        src: m,
        priority: p,
        placeholder: P
      });
    }
    return {
      props: {
        ...ee,
        loading: ue ? "lazy" : A,
        fetchPriority: z,
        width: se,
        height: $,
        decoding: "async",
        className: k,
        style: {
          ...ge,
          ...Ae
        },
        sizes: xe.sizes,
        srcSet: xe.srcSet,
        src: xe.src
      },
      meta: {
        unoptimized: v,
        priority: p,
        placeholder: P,
        fill: I
      }
    };
  }
})($r);
var yr = { exports: {} }, tt = {};
function io(e) {
  if (typeof WeakMap != "function") return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (io = function(n) {
    return n ? r : t;
  })(e);
}
tt._ = tt._interop_require_wildcard = Fs;
function Fs(e, t) {
  if (!t && e && e.__esModule) return e;
  if (e === null || typeof e != "object" && typeof e != "function") return { default: e };
  var r = io(t);
  if (r && r.has(e)) return r.get(e);
  var n = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e)
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var s = o ? Object.getOwnPropertyDescriptor(e, a) : null;
      s && (s.get || s.set) ? Object.defineProperty(n, a, s) : n[a] = e[a];
    }
  return n.default = e, r && r.set(e, n), n;
}
var st = { exports: {} }, Tt = {}, Ur;
function Ws() {
  return Ur || (Ur = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "default", {
      enumerable: !0,
      get: function() {
        return a;
      }
    });
    const t = fe, r = typeof window > "u", n = r ? () => {
    } : t.useLayoutEffect, o = r ? () => {
    } : t.useEffect;
    function a(s) {
      const { headManager: l, reduceComponentsToState: i } = s;
      function h() {
        if (l && l.mountedInstances) {
          const b = t.Children.toArray(Array.from(l.mountedInstances).filter(Boolean));
          l.updateHead(i(b, s));
        }
      }
      if (r) {
        var f;
        l == null || (f = l.mountedInstances) == null || f.add(s.children), h();
      }
      return n(() => {
        var b;
        return l == null || (b = l.mountedInstances) == null || b.add(s.children), () => {
          var y;
          l == null || (y = l.mountedInstances) == null || y.delete(s.children);
        };
      }), n(() => (l && (l._pendingUpdate = h), () => {
        l && (l._pendingUpdate = h);
      })), o(() => (l && l._pendingUpdate && (l._pendingUpdate(), l._pendingUpdate = null), () => {
        l && l._pendingUpdate && (l._pendingUpdate(), l._pendingUpdate = null);
      })), null;
    }
  }(Tt)), Tt;
}
var Mt = {}, Gr;
function Ks() {
  return Gr || (Gr = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "AmpStateContext", {
      enumerable: !0,
      get: function() {
        return n;
      }
    });
    const n = (/* @__PURE__ */ Se._(fe)).default.createContext({});
    process.env.NODE_ENV !== "production" && (n.displayName = "AmpStateContext");
  }(Mt)), Mt;
}
var It = {}, Br;
function Xs() {
  return Br || (Br = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "HeadManagerContext", {
      enumerable: !0,
      get: function() {
        return n;
      }
    });
    const n = (/* @__PURE__ */ Se._(fe)).default.createContext({});
    process.env.NODE_ENV !== "production" && (n.displayName = "HeadManagerContext");
  }(It)), It;
}
var $t = {}, Vr;
function Qs() {
  return Vr || (Vr = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "isInAmpMode", {
      enumerable: !0,
      get: function() {
        return t;
      }
    });
    function t(r) {
      let { ampFirst: n = !1, hybrid: o = !1, hasQuery: a = !1 } = r === void 0 ? {} : r;
      return n || o && a;
    }
  }($t)), $t;
}
var Fr;
function Zs() {
  return Fr || (Fr = 1, function(e, t) {
    "use client";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function r(v, p) {
      for (var A in p) Object.defineProperty(v, A, {
        enumerable: !0,
        get: p[A]
      });
    }
    r(t, {
      defaultHead: function() {
        return b;
      },
      default: function() {
        return S;
      }
    });
    const n = Se, a = /* @__PURE__ */ tt._(fe), s = /* @__PURE__ */ n._(Ws()), l = Ks(), i = Xs(), h = Qs(), f = nt;
    function b(v) {
      v === void 0 && (v = !1);
      const p = [
        /* @__PURE__ */ a.default.createElement("meta", {
          charSet: "utf-8"
        })
      ];
      return v || p.push(/* @__PURE__ */ a.default.createElement("meta", {
        name: "viewport",
        content: "width=device-width"
      })), p;
    }
    function y(v, p) {
      return typeof p == "string" || typeof p == "number" ? v : p.type === a.default.Fragment ? v.concat(
        // @ts-expect-error @types/react does not remove fragments but this could also return ReactPortal[]
        a.default.Children.toArray(p.props.children).reduce(
          // @ts-expect-error @types/react does not remove fragments but this could also return ReactPortal[]
          (A, k) => typeof k == "string" || typeof k == "number" ? A : A.concat(k),
          []
        )
      ) : v.concat(p);
    }
    const c = [
      "name",
      "httpEquiv",
      "charSet",
      "itemProp"
    ];
    function u() {
      const v = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Set(), A = /* @__PURE__ */ new Set(), k = {};
      return (C) => {
        let R = !0, x = !1;
        if (C.key && typeof C.key != "number" && C.key.indexOf("$") > 0) {
          x = !0;
          const I = C.key.slice(C.key.indexOf("$") + 1);
          v.has(I) ? R = !1 : v.add(I);
        }
        switch (C.type) {
          case "title":
          case "base":
            p.has(C.type) ? R = !1 : p.add(C.type);
            break;
          case "meta":
            for (let I = 0, w = c.length; I < w; I++) {
              const E = c[I];
              if (C.props.hasOwnProperty(E))
                if (E === "charSet")
                  A.has(E) ? R = !1 : A.add(E);
                else {
                  const _ = C.props[E], P = k[E] || /* @__PURE__ */ new Set();
                  (E !== "name" || !x) && P.has(_) ? R = !1 : (P.add(_), k[E] = P);
                }
            }
            break;
        }
        return R;
      };
    }
    function g(v, p) {
      const { inAmpMode: A } = p;
      return v.reduce(y, []).reverse().concat(b(A).reverse()).filter(u()).reverse().map((k, C) => {
        const R = k.key || C;
        if (process.env.NODE_ENV !== "development" && process.env.__NEXT_OPTIMIZE_FONTS && !A && k.type === "link" && k.props.href && // TODO(prateekbh@): Replace this with const from `constants` when the tree shaking works.
        [
          "https://fonts.googleapis.com/css",
          "https://use.typekit.net/"
        ].some((x) => k.props.href.startsWith(x))) {
          const x = {
            ...k.props || {}
          };
          return x["data-href"] = x.href, x.href = void 0, x["data-optimized-fonts"] = !0, /* @__PURE__ */ a.default.cloneElement(k, x);
        }
        if (process.env.NODE_ENV === "development")
          if (k.type === "script" && k.props.type !== "application/ld+json") {
            const x = k.props.src ? '<script> tag with src="' + k.props.src + '"' : "inline <script>";
            (0, f.warnOnce)("Do not add <script> tags using next/head (see " + x + `). Use next/script instead. 
See more info here: https://nextjs.org/docs/messages/no-script-tags-in-head-component`);
          } else k.type === "link" && k.props.rel === "stylesheet" && (0, f.warnOnce)('Do not add stylesheets using next/head (see <link rel="stylesheet"> tag with href="' + k.props.href + `"). Use Document instead. 
See more info here: https://nextjs.org/docs/messages/no-stylesheets-in-head-component`);
        return /* @__PURE__ */ a.default.cloneElement(k, {
          key: R
        });
      });
    }
    function m(v) {
      let { children: p } = v;
      const A = (0, a.useContext)(l.AmpStateContext), k = (0, a.useContext)(i.HeadManagerContext);
      return /* @__PURE__ */ a.default.createElement(s.default, {
        reduceComponentsToState: g,
        headManager: k,
        inAmpMode: (0, h.isInAmpMode)(A)
      }, p);
    }
    const S = m;
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(st, st.exports)), st.exports;
}
var Lt = {}, Wr;
function Ys() {
  return Wr || (Wr = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "ImageConfigContext", {
      enumerable: !0,
      get: function() {
        return o;
      }
    });
    const r = /* @__PURE__ */ Se._(fe), n = Et, o = r.default.createContext(n.imageConfigDefault);
    process.env.NODE_ENV !== "production" && (o.displayName = "ImageConfigContext");
  }(Lt)), Lt;
}
var zt = {}, Kr;
function lo() {
  return Kr || (Kr = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "RouterContext", {
      enumerable: !0,
      get: function() {
        return n;
      }
    });
    const n = (/* @__PURE__ */ Se._(fe)).default.createContext(null);
    process.env.NODE_ENV !== "production" && (n.displayName = "RouterContext");
  }(zt)), zt;
}
var jt = {}, Ht = {}, Dt = { exports: {} };
const Js = {}, ea = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Js
}, Symbol.toStringTag, { value: "Module" })), vr = /* @__PURE__ */ Bs(ea);
var Xr;
function ta() {
  return Xr || (Xr = 1, (() => {
    var e = { 333: (o, a, s) => {
      const l = s(137), i = s(179), h = s(13), f = s(719), b = (y, c = {}) => {
        let u = [];
        if (Array.isArray(y))
          for (let g of y) {
            let m = b.create(g, c);
            Array.isArray(m) ? u.push(...m) : u.push(m);
          }
        else
          u = [].concat(b.create(y, c));
        return c && c.expand === !0 && c.nodupes === !0 && (u = [...new Set(u)]), u;
      };
      b.parse = (y, c = {}) => f(y, c), b.stringify = (y, c = {}) => l(typeof y == "string" ? b.parse(y, c) : y, c), b.compile = (y, c = {}) => (typeof y == "string" && (y = b.parse(y, c)), i(y, c)), b.expand = (y, c = {}) => {
        typeof y == "string" && (y = b.parse(y, c));
        let u = h(y, c);
        return c.noempty === !0 && (u = u.filter(Boolean)), c.nodupes === !0 && (u = [...new Set(u)]), u;
      }, b.create = (y, c = {}) => y === "" || y.length < 3 ? [y] : c.expand !== !0 ? b.compile(y, c) : b.expand(y, c), o.exports = b;
    }, 179: (o, a, s) => {
      const l = s(783), i = s(617), h = (f, b = {}) => {
        let y = (c, u = {}) => {
          let g = i.isInvalidBrace(u), m = c.invalid === !0 && b.escapeInvalid === !0, S = g === !0 || m === !0, v = b.escapeInvalid === !0 ? "\\" : "", p = "";
          if (c.isOpen === !0 || c.isClose === !0)
            return v + c.value;
          if (c.type === "open")
            return S ? v + c.value : "(";
          if (c.type === "close")
            return S ? v + c.value : ")";
          if (c.type === "comma")
            return c.prev.type === "comma" ? "" : S ? c.value : "|";
          if (c.value)
            return c.value;
          if (c.nodes && c.ranges > 0) {
            let A = i.reduce(c.nodes), k = l(...A, { ...b, wrap: !1, toRegex: !0 });
            if (k.length !== 0)
              return A.length > 1 && k.length > 1 ? `(${k})` : k;
          }
          if (c.nodes)
            for (let A of c.nodes)
              p += y(A, c);
          return p;
        };
        return y(f);
      };
      o.exports = h;
    }, 457: (o) => {
      o.exports = { MAX_LENGTH: 65536, CHAR_0: "0", CHAR_9: "9", CHAR_UPPERCASE_A: "A", CHAR_LOWERCASE_A: "a", CHAR_UPPERCASE_Z: "Z", CHAR_LOWERCASE_Z: "z", CHAR_LEFT_PARENTHESES: "(", CHAR_RIGHT_PARENTHESES: ")", CHAR_ASTERISK: "*", CHAR_AMPERSAND: "&", CHAR_AT: "@", CHAR_BACKSLASH: "\\", CHAR_BACKTICK: "`", CHAR_CARRIAGE_RETURN: "\r", CHAR_CIRCUMFLEX_ACCENT: "^", CHAR_COLON: ":", CHAR_COMMA: ",", CHAR_DOLLAR: "$", CHAR_DOT: ".", CHAR_DOUBLE_QUOTE: '"', CHAR_EQUAL: "=", CHAR_EXCLAMATION_MARK: "!", CHAR_FORM_FEED: "\f", CHAR_FORWARD_SLASH: "/", CHAR_HASH: "#", CHAR_HYPHEN_MINUS: "-", CHAR_LEFT_ANGLE_BRACKET: "<", CHAR_LEFT_CURLY_BRACE: "{", CHAR_LEFT_SQUARE_BRACKET: "[", CHAR_LINE_FEED: `
`, CHAR_NO_BREAK_SPACE: " ", CHAR_PERCENT: "%", CHAR_PLUS: "+", CHAR_QUESTION_MARK: "?", CHAR_RIGHT_ANGLE_BRACKET: ">", CHAR_RIGHT_CURLY_BRACE: "}", CHAR_RIGHT_SQUARE_BRACKET: "]", CHAR_SEMICOLON: ";", CHAR_SINGLE_QUOTE: "'", CHAR_SPACE: " ", CHAR_TAB: "	", CHAR_UNDERSCORE: "_", CHAR_VERTICAL_LINE: "|", CHAR_ZERO_WIDTH_NOBREAK_SPACE: "\uFEFF" };
    }, 13: (o, a, s) => {
      const l = s(783), i = s(137), h = s(617), f = (y = "", c = "", u = !1) => {
        let g = [];
        if (y = [].concat(y), c = [].concat(c), !c.length) return y;
        if (!y.length)
          return u ? h.flatten(c).map((m) => `{${m}}`) : c;
        for (let m of y)
          if (Array.isArray(m))
            for (let S of m)
              g.push(f(S, c, u));
          else
            for (let S of c)
              u === !0 && typeof S == "string" && (S = `{${S}}`), g.push(Array.isArray(S) ? f(m, S, u) : m + S);
        return h.flatten(g);
      }, b = (y, c = {}) => {
        let u = c.rangeLimit === void 0 ? 1e3 : c.rangeLimit, g = (m, S = {}) => {
          m.queue = [];
          let v = S, p = S.queue;
          for (; v.type !== "brace" && v.type !== "root" && v.parent; )
            v = v.parent, p = v.queue;
          if (m.invalid || m.dollar) {
            p.push(f(p.pop(), i(m, c)));
            return;
          }
          if (m.type === "brace" && m.invalid !== !0 && m.nodes.length === 2) {
            p.push(f(p.pop(), ["{}"]));
            return;
          }
          if (m.nodes && m.ranges > 0) {
            let R = h.reduce(m.nodes);
            if (h.exceedsLimit(...R, c.step, u))
              throw new RangeError("expanded array length exceeds range limit. Use options.rangeLimit to increase or disable the limit.");
            let x = l(...R, c);
            x.length === 0 && (x = i(m, c)), p.push(f(p.pop(), x)), m.nodes = [];
            return;
          }
          let A = h.encloseBrace(m), k = m.queue, C = m;
          for (; C.type !== "brace" && C.type !== "root" && C.parent; )
            C = C.parent, k = C.queue;
          for (let R = 0; R < m.nodes.length; R++) {
            let x = m.nodes[R];
            if (x.type === "comma" && m.type === "brace") {
              R === 1 && k.push(""), k.push("");
              continue;
            }
            if (x.type === "close") {
              p.push(f(p.pop(), k, A));
              continue;
            }
            if (x.value && x.type !== "open") {
              k.push(f(k.pop(), x.value));
              continue;
            }
            x.nodes && g(x, m);
          }
          return k;
        };
        return h.flatten(g(y));
      };
      o.exports = b;
    }, 719: (o, a, s) => {
      const l = s(137), { MAX_LENGTH: i, CHAR_BACKSLASH: h, CHAR_BACKTICK: f, CHAR_COMMA: b, CHAR_DOT: y, CHAR_LEFT_PARENTHESES: c, CHAR_RIGHT_PARENTHESES: u, CHAR_LEFT_CURLY_BRACE: g, CHAR_RIGHT_CURLY_BRACE: m, CHAR_LEFT_SQUARE_BRACKET: S, CHAR_RIGHT_SQUARE_BRACKET: v, CHAR_DOUBLE_QUOTE: p, CHAR_SINGLE_QUOTE: A, CHAR_NO_BREAK_SPACE: k, CHAR_ZERO_WIDTH_NOBREAK_SPACE: C } = s(457), R = (x, I = {}) => {
        if (typeof x != "string")
          throw new TypeError("Expected a string");
        let w = I || {}, E = typeof w.maxLength == "number" ? Math.min(i, w.maxLength) : i;
        if (x.length > E)
          throw new SyntaxError(`Input length (${x.length}), exceeds max characters (${E})`);
        let _ = { type: "root", input: x, nodes: [] }, P = [_], N = _, z = _, T = 0, U = x.length, M = 0, D = 0, j;
        const ee = () => x[M++], F = (W) => {
          if (W.type === "text" && z.type === "dot" && (z.type = "text"), z && z.type === "text" && W.type === "text") {
            z.value += W.value;
            return;
          }
          return N.nodes.push(W), W.parent = N, W.prev = z, z = W, W;
        };
        for (F({ type: "bos" }); M < U; )
          if (N = P[P.length - 1], j = ee(), !(j === C || j === k)) {
            if (j === h) {
              F({ type: "text", value: (I.keepEscaping ? j : "") + ee() });
              continue;
            }
            if (j === v) {
              F({ type: "text", value: "\\" + j });
              continue;
            }
            if (j === S) {
              T++;
              let W;
              for (; M < U && (W = ee()); ) {
                if (j += W, W === S) {
                  T++;
                  continue;
                }
                if (W === h) {
                  j += ee();
                  continue;
                }
                if (W === v && (T--, T === 0))
                  break;
              }
              F({ type: "text", value: j });
              continue;
            }
            if (j === c) {
              N = F({ type: "paren", nodes: [] }), P.push(N), F({ type: "text", value: j });
              continue;
            }
            if (j === u) {
              if (N.type !== "paren") {
                F({ type: "text", value: j });
                continue;
              }
              N = P.pop(), F({ type: "text", value: j }), N = P[P.length - 1];
              continue;
            }
            if (j === p || j === A || j === f) {
              let W = j, G;
              for (I.keepQuotes !== !0 && (j = ""); M < U && (G = ee()); ) {
                if (G === h) {
                  j += G + ee();
                  continue;
                }
                if (G === W) {
                  I.keepQuotes === !0 && (j += G);
                  break;
                }
                j += G;
              }
              F({ type: "text", value: j });
              continue;
            }
            if (j === g) {
              D++;
              let G = { type: "brace", open: !0, close: !1, dollar: z.value && z.value.slice(-1) === "$" || N.dollar === !0, depth: D, commas: 0, ranges: 0, nodes: [] };
              N = F(G), P.push(N), F({ type: "open", value: j });
              continue;
            }
            if (j === m) {
              if (N.type !== "brace") {
                F({ type: "text", value: j });
                continue;
              }
              let W = "close";
              N = P.pop(), N.close = !0, F({ type: W, value: j }), D--, N = P[P.length - 1];
              continue;
            }
            if (j === b && D > 0) {
              if (N.ranges > 0) {
                N.ranges = 0;
                let W = N.nodes.shift();
                N.nodes = [W, { type: "text", value: l(N) }];
              }
              F({ type: "comma", value: j }), N.commas++;
              continue;
            }
            if (j === y && D > 0 && N.commas === 0) {
              let W = N.nodes;
              if (D === 0 || W.length === 0) {
                F({ type: "text", value: j });
                continue;
              }
              if (z.type === "dot") {
                if (N.range = [], z.value += j, z.type = "range", N.nodes.length !== 3 && N.nodes.length !== 5) {
                  N.invalid = !0, N.ranges = 0, z.type = "text";
                  continue;
                }
                N.ranges++, N.args = [];
                continue;
              }
              if (z.type === "range") {
                W.pop();
                let G = W[W.length - 1];
                G.value += z.value + j, z = G, N.ranges--;
                continue;
              }
              F({ type: "dot", value: j });
              continue;
            }
            F({ type: "text", value: j });
          }
        do
          if (N = P.pop(), N.type !== "root") {
            N.nodes.forEach((te) => {
              te.nodes || (te.type === "open" && (te.isOpen = !0), te.type === "close" && (te.isClose = !0), te.nodes || (te.type = "text"), te.invalid = !0);
            });
            let W = P[P.length - 1], G = W.nodes.indexOf(N);
            W.nodes.splice(G, 1, ...N.nodes);
          }
        while (P.length > 0);
        return F({ type: "eos" }), _;
      };
      o.exports = R;
    }, 137: (o, a, s) => {
      const l = s(617);
      o.exports = (i, h = {}) => {
        let f = (b, y = {}) => {
          let c = h.escapeInvalid && l.isInvalidBrace(y), u = b.invalid === !0 && h.escapeInvalid === !0, g = "";
          if (b.value)
            return (c || u) && l.isOpenOrClose(b) ? "\\" + b.value : b.value;
          if (b.value)
            return b.value;
          if (b.nodes)
            for (let m of b.nodes)
              g += f(m);
          return g;
        };
        return f(i);
      };
    }, 617: (o, a) => {
      a.isInteger = (s) => typeof s == "number" ? Number.isInteger(s) : typeof s == "string" && s.trim() !== "" ? Number.isInteger(Number(s)) : !1, a.find = (s, l) => s.nodes.find((i) => i.type === l), a.exceedsLimit = (s, l, i = 1, h) => h === !1 || !a.isInteger(s) || !a.isInteger(l) ? !1 : (Number(l) - Number(s)) / Number(i) >= h, a.escapeNode = (s, l = 0, i) => {
        let h = s.nodes[l];
        h && (i && h.type === i || h.type === "open" || h.type === "close") && h.escaped !== !0 && (h.value = "\\" + h.value, h.escaped = !0);
      }, a.encloseBrace = (s) => s.type !== "brace" || s.commas >> 0 + s.ranges >> 0 ? !1 : (s.invalid = !0, !0), a.isInvalidBrace = (s) => s.type !== "brace" ? !1 : s.invalid === !0 || s.dollar ? !0 : !(s.commas >> 0 + s.ranges >> 0) || s.open !== !0 || s.close !== !0 ? (s.invalid = !0, !0) : !1, a.isOpenOrClose = (s) => s.type === "open" || s.type === "close" ? !0 : s.open === !0 || s.close === !0, a.reduce = (s) => s.reduce((l, i) => (i.type === "text" && l.push(i.value), i.type === "range" && (i.type = "text"), l), []), a.flatten = (...s) => {
        const l = [], i = (h) => {
          for (let f = 0; f < h.length; f++) {
            let b = h[f];
            Array.isArray(b) ? i(b) : b !== void 0 && l.push(b);
          }
          return l;
        };
        return i(s), l;
      };
    }, 783: (o, a, s) => {
      /*!
       * fill-range <https://github.com/jonschlinkert/fill-range>
       *
       * Copyright (c) 2014-present, Jon Schlinkert.
       * Licensed under the MIT License.
       */
      const l = s(837), i = s(492), h = (w) => w !== null && typeof w == "object" && !Array.isArray(w), f = (w) => (E) => w === !0 ? Number(E) : String(E), b = (w) => typeof w == "number" || typeof w == "string" && w !== "", y = (w) => Number.isInteger(+w), c = (w) => {
        let E = `${w}`, _ = -1;
        if (E[0] === "-" && (E = E.slice(1)), E === "0") return !1;
        for (; E[++_] === "0"; ) ;
        return _ > 0;
      }, u = (w, E, _) => typeof w == "string" || typeof E == "string" ? !0 : _.stringify === !0, g = (w, E, _) => {
        if (E > 0) {
          let P = w[0] === "-" ? "-" : "";
          P && (w = w.slice(1)), w = P + w.padStart(P ? E - 1 : E, "0");
        }
        return _ === !1 ? String(w) : w;
      }, m = (w, E) => {
        let _ = w[0] === "-" ? "-" : "";
        for (_ && (w = w.slice(1), E--); w.length < E; ) w = "0" + w;
        return _ ? "-" + w : w;
      }, S = (w, E) => {
        w.negatives.sort((T, U) => T < U ? -1 : T > U ? 1 : 0), w.positives.sort((T, U) => T < U ? -1 : T > U ? 1 : 0);
        let _ = E.capture ? "" : "?:", P = "", N = "", z;
        return w.positives.length && (P = w.positives.join("|")), w.negatives.length && (N = `-(${_}${w.negatives.join("|")})`), P && N ? z = `${P}|${N}` : z = P || N, E.wrap ? `(${_}${z})` : z;
      }, v = (w, E, _, P) => {
        if (_)
          return i(w, E, { wrap: !1, ...P });
        let N = String.fromCharCode(w);
        if (w === E) return N;
        let z = String.fromCharCode(E);
        return `[${N}-${z}]`;
      }, p = (w, E, _) => {
        if (Array.isArray(w)) {
          let P = _.wrap === !0, N = _.capture ? "" : "?:";
          return P ? `(${N}${w.join("|")})` : w.join("|");
        }
        return i(w, E, _);
      }, A = (...w) => new RangeError("Invalid range arguments: " + l.inspect(...w)), k = (w, E, _) => {
        if (_.strictRanges === !0) throw A([w, E]);
        return [];
      }, C = (w, E) => {
        if (E.strictRanges === !0)
          throw new TypeError(`Expected step "${w}" to be a number`);
        return [];
      }, R = (w, E, _ = 1, P = {}) => {
        let N = Number(w), z = Number(E);
        if (!Number.isInteger(N) || !Number.isInteger(z)) {
          if (P.strictRanges === !0) throw A([w, E]);
          return [];
        }
        N === 0 && (N = 0), z === 0 && (z = 0);
        let T = N > z, U = String(w), M = String(E), D = String(_);
        _ = Math.max(Math.abs(_), 1);
        let j = c(U) || c(M) || c(D), ee = j ? Math.max(U.length, M.length, D.length) : 0, F = j === !1 && u(w, E, P) === !1, W = P.transform || f(F);
        if (P.toRegex && _ === 1)
          return v(m(w, ee), m(E, ee), !0, P);
        let G = { negatives: [], positives: [] }, te = (L) => G[L < 0 ? "negatives" : "positives"].push(Math.abs(L)), oe = [], K = 0;
        for (; T ? N >= z : N <= z; )
          P.toRegex === !0 && _ > 1 ? te(N) : oe.push(g(W(N, K), ee, F)), N = T ? N - _ : N + _, K++;
        return P.toRegex === !0 ? _ > 1 ? S(G, P) : p(oe, null, { wrap: !1, ...P }) : oe;
      }, x = (w, E, _ = 1, P = {}) => {
        if (!y(w) && w.length > 1 || !y(E) && E.length > 1)
          return k(w, E, P);
        let N = P.transform || ((F) => String.fromCharCode(F)), z = `${w}`.charCodeAt(0), T = `${E}`.charCodeAt(0), U = z > T, M = Math.min(z, T), D = Math.max(z, T);
        if (P.toRegex && _ === 1)
          return v(M, D, !1, P);
        let j = [], ee = 0;
        for (; U ? z >= T : z <= T; )
          j.push(N(z, ee)), z = U ? z - _ : z + _, ee++;
        return P.toRegex === !0 ? p(j, null, { wrap: !1, options: P }) : j;
      }, I = (w, E, _, P = {}) => {
        if (E == null && b(w))
          return [w];
        if (!b(w) || !b(E))
          return k(w, E, P);
        if (typeof _ == "function")
          return I(w, E, 1, { transform: _ });
        if (h(_))
          return I(w, E, 0, _);
        let N = { ...P };
        return N.capture === !0 && (N.wrap = !0), _ = _ || N.step || 1, y(_) ? y(w) && y(E) ? R(w, E, _, N) : x(w, E, Math.max(Math.abs(_), 1), N) : _ != null && !h(_) ? C(_, N) : I(w, E, 1, _);
      };
      o.exports = I;
    }, 357: (o) => {
      /*!
       * is-number <https://github.com/jonschlinkert/is-number>
       *
       * Copyright (c) 2014-present, Jon Schlinkert.
       * Released under the MIT License.
       */
      o.exports = function(a) {
        return typeof a == "number" ? a - a === 0 : typeof a == "string" && a.trim() !== "" ? Number.isFinite ? Number.isFinite(+a) : isFinite(+a) : !1;
      };
    }, 971: (o, a, s) => {
      const l = s(837), i = s(333), h = s(251), f = s(513), b = (c) => c === "" || c === "./", y = (c, u, g) => {
        u = [].concat(u), c = [].concat(c);
        let m = /* @__PURE__ */ new Set(), S = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ new Set(), p = 0, A = (R) => {
          v.add(R.output), g && g.onResult && g.onResult(R);
        };
        for (let R = 0; R < u.length; R++) {
          let x = h(String(u[R]), { ...g, onResult: A }, !0), I = x.state.negated || x.state.negatedExtglob;
          I && p++;
          for (let w of c) {
            let E = x(w, !0);
            (I ? !E.isMatch : E.isMatch) && (I ? m.add(E.output) : (m.delete(E.output), S.add(E.output)));
          }
        }
        let C = (p === u.length ? [...v] : [...S]).filter((R) => !m.has(R));
        if (g && C.length === 0) {
          if (g.failglob === !0)
            throw new Error(`No matches found for "${u.join(", ")}"`);
          if (g.nonull === !0 || g.nullglob === !0)
            return g.unescape ? u.map((R) => R.replace(/\\/g, "")) : u;
        }
        return C;
      };
      y.match = y, y.matcher = (c, u) => h(c, u), y.isMatch = (c, u, g) => h(u, g)(c), y.any = y.isMatch, y.not = (c, u, g = {}) => {
        u = [].concat(u).map(String);
        let m = /* @__PURE__ */ new Set(), S = [], p = y(c, u, { ...g, onResult: (A) => {
          g.onResult && g.onResult(A), S.push(A.output);
        } });
        for (let A of S)
          p.includes(A) || m.add(A);
        return [...m];
      }, y.contains = (c, u, g) => {
        if (typeof c != "string")
          throw new TypeError(`Expected a string: "${l.inspect(c)}"`);
        if (Array.isArray(u))
          return u.some((m) => y.contains(c, m, g));
        if (typeof u == "string") {
          if (b(c) || b(u))
            return !1;
          if (c.includes(u) || c.startsWith("./") && c.slice(2).includes(u))
            return !0;
        }
        return y.isMatch(c, u, { ...g, contains: !0 });
      }, y.matchKeys = (c, u, g) => {
        if (!f.isObject(c))
          throw new TypeError("Expected the first argument to be an object");
        let m = y(Object.keys(c), u, g), S = {};
        for (let v of m) S[v] = c[v];
        return S;
      }, y.some = (c, u, g) => {
        let m = [].concat(c);
        for (let S of [].concat(u)) {
          let v = h(String(S), g);
          if (m.some((p) => v(p)))
            return !0;
        }
        return !1;
      }, y.every = (c, u, g) => {
        let m = [].concat(c);
        for (let S of [].concat(u)) {
          let v = h(String(S), g);
          if (!m.every((p) => v(p)))
            return !1;
        }
        return !0;
      }, y.all = (c, u, g) => {
        if (typeof c != "string")
          throw new TypeError(`Expected a string: "${l.inspect(c)}"`);
        return [].concat(u).every((m) => h(m, g)(c));
      }, y.capture = (c, u, g) => {
        let m = f.isWindows(g), v = h.makeRe(String(c), { ...g, capture: !0 }).exec(m ? f.toPosixSlashes(u) : u);
        if (v)
          return v.slice(1).map((p) => p === void 0 ? "" : p);
      }, y.makeRe = (...c) => h.makeRe(...c), y.scan = (...c) => h.scan(...c), y.parse = (c, u) => {
        let g = [];
        for (let m of [].concat(c || []))
          for (let S of i(String(m), u))
            g.push(h.parse(S, u));
        return g;
      }, y.braces = (c, u) => {
        if (typeof c != "string") throw new TypeError("Expected a string");
        return u && u.nobrace === !0 || !/\{.*\}/.test(c) ? [c] : i(c, u);
      }, y.braceExpand = (c, u) => {
        if (typeof c != "string") throw new TypeError("Expected a string");
        return y.braces(c, { ...u, expand: !0 });
      }, o.exports = y;
    }, 251: (o, a, s) => {
      o.exports = s(683);
    }, 356: (o, a, s) => {
      const l = s(17), i = "\\\\/", h = `[^${i}]`, f = "\\.", b = "\\+", y = "\\?", c = "\\/", u = "(?=.)", g = "[^/]", m = `(?:${c}|$)`, S = `(?:^|${c})`, v = `${f}{1,2}${m}`, p = `(?!${f})`, A = `(?!${S}${v})`, k = `(?!${f}{0,1}${m})`, C = `(?!${v})`, R = `[^.${c}]`, x = `${g}*?`, I = { DOT_LITERAL: f, PLUS_LITERAL: b, QMARK_LITERAL: y, SLASH_LITERAL: c, ONE_CHAR: u, QMARK: g, END_ANCHOR: m, DOTS_SLASH: v, NO_DOT: p, NO_DOTS: A, NO_DOT_SLASH: k, NO_DOTS_SLASH: C, QMARK_NO_DOT: R, STAR: x, START_ANCHOR: S }, w = { ...I, SLASH_LITERAL: `[${i}]`, QMARK: h, STAR: `${h}*?`, DOTS_SLASH: `${f}{1,2}(?:[${i}]|$)`, NO_DOT: `(?!${f})`, NO_DOTS: `(?!(?:^|[${i}])${f}{1,2}(?:[${i}]|$))`, NO_DOT_SLASH: `(?!${f}{0,1}(?:[${i}]|$))`, NO_DOTS_SLASH: `(?!${f}{1,2}(?:[${i}]|$))`, QMARK_NO_DOT: `[^.${i}]`, START_ANCHOR: `(?:^|[${i}])`, END_ANCHOR: `(?:[${i}]|$)` }, E = { alnum: "a-zA-Z0-9", alpha: "a-zA-Z", ascii: "\\x00-\\x7F", blank: " \\t", cntrl: "\\x00-\\x1F\\x7F", digit: "0-9", graph: "\\x21-\\x7E", lower: "a-z", print: "\\x20-\\x7E ", punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~", space: " \\t\\r\\n\\v\\f", upper: "A-Z", word: "A-Za-z0-9_", xdigit: "A-Fa-f0-9" };
      o.exports = { MAX_LENGTH: 65536, POSIX_REGEX_SOURCE: E, REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g, REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/, REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/, REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g, REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g, REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g, REPLACEMENTS: { "***": "*", "**/**": "**", "**/**/**": "**" }, CHAR_0: 48, CHAR_9: 57, CHAR_UPPERCASE_A: 65, CHAR_LOWERCASE_A: 97, CHAR_UPPERCASE_Z: 90, CHAR_LOWERCASE_Z: 122, CHAR_LEFT_PARENTHESES: 40, CHAR_RIGHT_PARENTHESES: 41, CHAR_ASTERISK: 42, CHAR_AMPERSAND: 38, CHAR_AT: 64, CHAR_BACKWARD_SLASH: 92, CHAR_CARRIAGE_RETURN: 13, CHAR_CIRCUMFLEX_ACCENT: 94, CHAR_COLON: 58, CHAR_COMMA: 44, CHAR_DOT: 46, CHAR_DOUBLE_QUOTE: 34, CHAR_EQUAL: 61, CHAR_EXCLAMATION_MARK: 33, CHAR_FORM_FEED: 12, CHAR_FORWARD_SLASH: 47, CHAR_GRAVE_ACCENT: 96, CHAR_HASH: 35, CHAR_HYPHEN_MINUS: 45, CHAR_LEFT_ANGLE_BRACKET: 60, CHAR_LEFT_CURLY_BRACE: 123, CHAR_LEFT_SQUARE_BRACKET: 91, CHAR_LINE_FEED: 10, CHAR_NO_BREAK_SPACE: 160, CHAR_PERCENT: 37, CHAR_PLUS: 43, CHAR_QUESTION_MARK: 63, CHAR_RIGHT_ANGLE_BRACKET: 62, CHAR_RIGHT_CURLY_BRACE: 125, CHAR_RIGHT_SQUARE_BRACKET: 93, CHAR_SEMICOLON: 59, CHAR_SINGLE_QUOTE: 39, CHAR_SPACE: 32, CHAR_TAB: 9, CHAR_UNDERSCORE: 95, CHAR_VERTICAL_LINE: 124, CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279, SEP: l.sep, extglobChars(_) {
        return { "!": { type: "negate", open: "(?:(?!(?:", close: `))${_.STAR})` }, "?": { type: "qmark", open: "(?:", close: ")?" }, "+": { type: "plus", open: "(?:", close: ")+" }, "*": { type: "star", open: "(?:", close: ")*" }, "@": { type: "at", open: "(?:", close: ")" } };
      }, globChars(_) {
        return _ === !0 ? w : I;
      } };
    }, 754: (o, a, s) => {
      const l = s(356), i = s(513), { MAX_LENGTH: h, POSIX_REGEX_SOURCE: f, REGEX_NON_SPECIAL_CHARS: b, REGEX_SPECIAL_CHARS_BACKREF: y, REPLACEMENTS: c } = l, u = (S, v) => {
        if (typeof v.expandRange == "function")
          return v.expandRange(...S, v);
        S.sort();
        const p = `[${S.join("-")}]`;
        try {
          new RegExp(p);
        } catch {
          return S.map((k) => i.escapeRegex(k)).join("..");
        }
        return p;
      }, g = (S, v) => `Missing ${S}: "${v}" - use "\\\\${v}" to match literal characters`, m = (S, v) => {
        if (typeof S != "string")
          throw new TypeError("Expected a string");
        S = c[S] || S;
        const p = { ...v }, A = typeof p.maxLength == "number" ? Math.min(h, p.maxLength) : h;
        let k = S.length;
        if (k > A)
          throw new SyntaxError(`Input length: ${k}, exceeds maximum allowed length: ${A}`);
        const C = { type: "bos", value: "", output: p.prepend || "" }, R = [C], x = p.capture ? "" : "?:", I = i.isWindows(v), w = l.globChars(I), E = l.extglobChars(w), { DOT_LITERAL: _, PLUS_LITERAL: P, SLASH_LITERAL: N, ONE_CHAR: z, DOTS_SLASH: T, NO_DOT: U, NO_DOT_SLASH: M, NO_DOTS_SLASH: D, QMARK: j, QMARK_NO_DOT: ee, STAR: F, START_ANCHOR: W } = w, G = (V) => `(${x}(?:(?!${W}${V.dot ? T : _}).)*?)`, te = p.dot ? "" : U, oe = p.dot ? j : ee;
        let K = p.bash === !0 ? G(p) : F;
        p.capture && (K = `(${K})`), typeof p.noext == "boolean" && (p.noextglob = p.noext);
        const L = { input: S, index: -1, start: 0, dot: p.dot === !0, consumed: "", output: "", prefix: "", backtrack: !1, negated: !1, brackets: 0, braces: 0, parens: 0, quotes: 0, globstar: !1, tokens: R };
        S = i.removePrefix(S, L), k = S.length;
        const pe = [], ie = [], se = [];
        let $ = C, O;
        const re = () => L.index === k - 1, ue = L.peek = (V = 1) => S[L.index + V], Ne = L.advance = () => S[++L.index], ge = () => S.slice(L.index + 1), de = (V = "", X = 0) => {
          L.consumed += V, L.index += X;
        }, Ae = (V) => {
          L.output += V.output != null ? V.output : V.value, de(V.value);
        }, xe = () => {
          let V = 1;
          for (; ue() === "!" && (ue(2) !== "(" || ue(3) === "?"); )
            Ne(), L.start++, V++;
          return V % 2 === 0 ? !1 : (L.negated = !0, L.start++, !0);
        }, ne = (V) => {
          L[V]++, se.push(V);
        }, ye = (V) => {
          L[V]--, se.pop();
        }, q = (V) => {
          if ($.type === "globstar") {
            const X = L.braces > 0 && (V.type === "comma" || V.type === "brace"), B = V.extglob === !0 || pe.length && (V.type === "pipe" || V.type === "paren");
            V.type !== "slash" && V.type !== "paren" && !X && !B && (L.output = L.output.slice(0, -$.output.length), $.type = "star", $.value = "*", $.output = K, L.output += $.output);
          }
          if (pe.length && V.type !== "paren" && !E[V.value] && (pe[pe.length - 1].inner += V.value), (V.value || V.output) && Ae(V), $ && $.type === "text" && V.type === "text") {
            $.value += V.value, $.output = ($.output || "") + V.value;
            return;
          }
          V.prev = $, R.push(V), $ = V;
        }, me = (V, X) => {
          const B = { ...E[X], conditions: 1, inner: "" };
          B.prev = $, B.parens = L.parens, B.output = L.output;
          const ce = (p.capture ? "(" : "") + B.open;
          ne("parens"), q({ type: V, value: X, output: L.output ? "" : z }), q({ type: "paren", extglob: !0, value: Ne(), output: ce }), pe.push(B);
        }, Ce = (V) => {
          let X = V.close + (p.capture ? ")" : "");
          if (V.type === "negate") {
            let B = K;
            V.inner && V.inner.length > 1 && V.inner.includes("/") && (B = G(p)), (B !== K || re() || /^\)+$/.test(ge())) && (X = V.close = `)$))${B}`), V.prev.type === "bos" && (L.negatedExtglob = !0);
          }
          q({ type: "paren", extglob: !0, value: O, output: X }), ye("parens");
        };
        if (p.fastpaths !== !1 && !/(^[*!]|[/()[\]{}"])/.test(S)) {
          let V = !1, X = S.replace(y, (B, ce, ve, Ee, we, Pt) => Ee === "\\" ? (V = !0, B) : Ee === "?" ? ce ? ce + Ee + (we ? j.repeat(we.length) : "") : Pt === 0 ? oe + (we ? j.repeat(we.length) : "") : j.repeat(ve.length) : Ee === "." ? _.repeat(ve.length) : Ee === "*" ? ce ? ce + Ee + (we ? K : "") : K : ce ? B : `\\${B}`);
          return V === !0 && (p.unescape === !0 ? X = X.replace(/\\/g, "") : X = X.replace(/\\+/g, (B) => B.length % 2 === 0 ? "\\\\" : B ? "\\" : "")), X === S && p.contains === !0 ? (L.output = S, L) : (L.output = i.wrapOutput(X, L, v), L);
        }
        for (; !re(); ) {
          if (O = Ne(), O === "\0")
            continue;
          if (O === "\\") {
            const B = ue();
            if (B === "/" && p.bash !== !0 || B === "." || B === ";")
              continue;
            if (!B) {
              O += "\\", q({ type: "text", value: O });
              continue;
            }
            const ce = /^\\+/.exec(ge());
            let ve = 0;
            if (ce && ce[0].length > 2 && (ve = ce[0].length, L.index += ve, ve % 2 !== 0 && (O += "\\")), p.unescape === !0 ? O = Ne() || "" : O += Ne() || "", L.brackets === 0) {
              q({ type: "text", value: O });
              continue;
            }
          }
          if (L.brackets > 0 && (O !== "]" || $.value === "[" || $.value === "[^")) {
            if (p.posix !== !1 && O === ":") {
              const B = $.value.slice(1);
              if (B.includes("[") && ($.posix = !0, B.includes(":"))) {
                const ce = $.value.lastIndexOf("["), ve = $.value.slice(0, ce), Ee = $.value.slice(ce + 2), we = f[Ee];
                if (we) {
                  $.value = ve + we, L.backtrack = !0, Ne(), !C.output && R.indexOf($) === 1 && (C.output = z);
                  continue;
                }
              }
            }
            (O === "[" && ue() !== ":" || O === "-" && ue() === "]") && (O = `\\${O}`), O === "]" && ($.value === "[" || $.value === "[^") && (O = `\\${O}`), p.posix === !0 && O === "!" && $.value === "[" && (O = "^"), $.value += O, Ae({ value: O });
            continue;
          }
          if (L.quotes === 1 && O !== '"') {
            O = i.escapeRegex(O), $.value += O, Ae({ value: O });
            continue;
          }
          if (O === '"') {
            L.quotes = L.quotes === 1 ? 0 : 1, p.keepQuotes === !0 && q({ type: "text", value: O });
            continue;
          }
          if (O === "(") {
            ne("parens"), q({ type: "paren", value: O });
            continue;
          }
          if (O === ")") {
            if (L.parens === 0 && p.strictBrackets === !0)
              throw new SyntaxError(g("opening", "("));
            const B = pe[pe.length - 1];
            if (B && L.parens === B.parens + 1) {
              Ce(pe.pop());
              continue;
            }
            q({ type: "paren", value: O, output: L.parens ? ")" : "\\)" }), ye("parens");
            continue;
          }
          if (O === "[") {
            if (p.nobracket === !0 || !ge().includes("]")) {
              if (p.nobracket !== !0 && p.strictBrackets === !0)
                throw new SyntaxError(g("closing", "]"));
              O = `\\${O}`;
            } else
              ne("brackets");
            q({ type: "bracket", value: O });
            continue;
          }
          if (O === "]") {
            if (p.nobracket === !0 || $ && $.type === "bracket" && $.value.length === 1) {
              q({ type: "text", value: O, output: `\\${O}` });
              continue;
            }
            if (L.brackets === 0) {
              if (p.strictBrackets === !0)
                throw new SyntaxError(g("opening", "["));
              q({ type: "text", value: O, output: `\\${O}` });
              continue;
            }
            ye("brackets");
            const B = $.value.slice(1);
            if ($.posix !== !0 && B[0] === "^" && !B.includes("/") && (O = `/${O}`), $.value += O, Ae({ value: O }), p.literalBrackets === !1 || i.hasRegexChars(B))
              continue;
            const ce = i.escapeRegex($.value);
            if (L.output = L.output.slice(0, -$.value.length), p.literalBrackets === !0) {
              L.output += ce, $.value = ce;
              continue;
            }
            $.value = `(${x}${ce}|${$.value})`, L.output += $.value;
            continue;
          }
          if (O === "{" && p.nobrace !== !0) {
            ne("braces");
            const B = { type: "brace", value: O, output: "(", outputIndex: L.output.length, tokensIndex: L.tokens.length };
            ie.push(B), q(B);
            continue;
          }
          if (O === "}") {
            const B = ie[ie.length - 1];
            if (p.nobrace === !0 || !B) {
              q({ type: "text", value: O, output: O });
              continue;
            }
            let ce = ")";
            if (B.dots === !0) {
              const ve = R.slice(), Ee = [];
              for (let we = ve.length - 1; we >= 0 && (R.pop(), ve[we].type !== "brace"); we--)
                ve[we].type !== "dots" && Ee.unshift(ve[we].value);
              ce = u(Ee, p), L.backtrack = !0;
            }
            if (B.comma !== !0 && B.dots !== !0) {
              const ve = L.output.slice(0, B.outputIndex), Ee = L.tokens.slice(B.tokensIndex);
              B.value = B.output = "\\{", O = ce = "\\}", L.output = ve;
              for (const we of Ee)
                L.output += we.output || we.value;
            }
            q({ type: "brace", value: O, output: ce }), ye("braces"), ie.pop();
            continue;
          }
          if (O === "|") {
            pe.length > 0 && pe[pe.length - 1].conditions++, q({ type: "text", value: O });
            continue;
          }
          if (O === ",") {
            let B = O;
            const ce = ie[ie.length - 1];
            ce && se[se.length - 1] === "braces" && (ce.comma = !0, B = "|"), q({ type: "comma", value: O, output: B });
            continue;
          }
          if (O === "/") {
            if ($.type === "dot" && L.index === L.start + 1) {
              L.start = L.index + 1, L.consumed = "", L.output = "", R.pop(), $ = C;
              continue;
            }
            q({ type: "slash", value: O, output: N });
            continue;
          }
          if (O === ".") {
            if (L.braces > 0 && $.type === "dot") {
              $.value === "." && ($.output = _);
              const B = ie[ie.length - 1];
              $.type = "dots", $.output += O, $.value += O, B.dots = !0;
              continue;
            }
            if (L.braces + L.parens === 0 && $.type !== "bos" && $.type !== "slash") {
              q({ type: "text", value: O, output: _ });
              continue;
            }
            q({ type: "dot", value: O, output: _ });
            continue;
          }
          if (O === "?") {
            if (!($ && $.value === "(") && p.noextglob !== !0 && ue() === "(" && ue(2) !== "?") {
              me("qmark", O);
              continue;
            }
            if ($ && $.type === "paren") {
              const ce = ue();
              let ve = O;
              if (ce === "<" && !i.supportsLookbehinds())
                throw new Error("Node.js v10 or higher is required for regex lookbehinds");
              ($.value === "(" && !/[!=<:]/.test(ce) || ce === "<" && !/<([!=]|\w+>)/.test(ge())) && (ve = `\\${O}`), q({ type: "text", value: O, output: ve });
              continue;
            }
            if (p.dot !== !0 && ($.type === "slash" || $.type === "bos")) {
              q({ type: "qmark", value: O, output: ee });
              continue;
            }
            q({ type: "qmark", value: O, output: j });
            continue;
          }
          if (O === "!") {
            if (p.noextglob !== !0 && ue() === "(" && (ue(2) !== "?" || !/[!=<:]/.test(ue(3)))) {
              me("negate", O);
              continue;
            }
            if (p.nonegate !== !0 && L.index === 0) {
              xe();
              continue;
            }
          }
          if (O === "+") {
            if (p.noextglob !== !0 && ue() === "(" && ue(2) !== "?") {
              me("plus", O);
              continue;
            }
            if ($ && $.value === "(" || p.regex === !1) {
              q({ type: "plus", value: O, output: P });
              continue;
            }
            if ($ && ($.type === "bracket" || $.type === "paren" || $.type === "brace") || L.parens > 0) {
              q({ type: "plus", value: O });
              continue;
            }
            q({ type: "plus", value: P });
            continue;
          }
          if (O === "@") {
            if (p.noextglob !== !0 && ue() === "(" && ue(2) !== "?") {
              q({ type: "at", extglob: !0, value: O, output: "" });
              continue;
            }
            q({ type: "text", value: O });
            continue;
          }
          if (O !== "*") {
            (O === "$" || O === "^") && (O = `\\${O}`);
            const B = b.exec(ge());
            B && (O += B[0], L.index += B[0].length), q({ type: "text", value: O });
            continue;
          }
          if ($ && ($.type === "globstar" || $.star === !0)) {
            $.type = "star", $.star = !0, $.value += O, $.output = K, L.backtrack = !0, L.globstar = !0, de(O);
            continue;
          }
          let V = ge();
          if (p.noextglob !== !0 && /^\([^?]/.test(V)) {
            me("star", O);
            continue;
          }
          if ($.type === "star") {
            if (p.noglobstar === !0) {
              de(O);
              continue;
            }
            const B = $.prev, ce = B.prev, ve = B.type === "slash" || B.type === "bos", Ee = ce && (ce.type === "star" || ce.type === "globstar");
            if (p.bash === !0 && (!ve || V[0] && V[0] !== "/")) {
              q({ type: "star", value: O, output: "" });
              continue;
            }
            const we = L.braces > 0 && (B.type === "comma" || B.type === "brace"), Pt = pe.length && (B.type === "pipe" || B.type === "paren");
            if (!ve && B.type !== "paren" && !we && !Pt) {
              q({ type: "star", value: O, output: "" });
              continue;
            }
            for (; V.slice(0, 3) === "/**"; ) {
              const ot = S[L.index + 4];
              if (ot && ot !== "/")
                break;
              V = V.slice(3), de("/**", 3);
            }
            if (B.type === "bos" && re()) {
              $.type = "globstar", $.value += O, $.output = G(p), L.output = $.output, L.globstar = !0, de(O);
              continue;
            }
            if (B.type === "slash" && B.prev.type !== "bos" && !Ee && re()) {
              L.output = L.output.slice(0, -(B.output + $.output).length), B.output = `(?:${B.output}`, $.type = "globstar", $.output = G(p) + (p.strictSlashes ? ")" : "|$)"), $.value += O, L.globstar = !0, L.output += B.output + $.output, de(O);
              continue;
            }
            if (B.type === "slash" && B.prev.type !== "bos" && V[0] === "/") {
              const ot = V[1] !== void 0 ? "|$" : "";
              L.output = L.output.slice(0, -(B.output + $.output).length), B.output = `(?:${B.output}`, $.type = "globstar", $.output = `${G(p)}${N}|${N}${ot})`, $.value += O, L.output += B.output + $.output, L.globstar = !0, de(O + Ne()), q({ type: "slash", value: "/", output: "" });
              continue;
            }
            if (B.type === "bos" && V[0] === "/") {
              $.type = "globstar", $.value += O, $.output = `(?:^|${N}|${G(p)}${N})`, L.output = $.output, L.globstar = !0, de(O + Ne()), q({ type: "slash", value: "/", output: "" });
              continue;
            }
            L.output = L.output.slice(0, -$.output.length), $.type = "globstar", $.output = G(p), $.value += O, L.output += $.output, L.globstar = !0, de(O);
            continue;
          }
          const X = { type: "star", value: O, output: K };
          if (p.bash === !0) {
            X.output = ".*?", ($.type === "bos" || $.type === "slash") && (X.output = te + X.output), q(X);
            continue;
          }
          if ($ && ($.type === "bracket" || $.type === "paren") && p.regex === !0) {
            X.output = O, q(X);
            continue;
          }
          (L.index === L.start || $.type === "slash" || $.type === "dot") && ($.type === "dot" ? (L.output += M, $.output += M) : p.dot === !0 ? (L.output += D, $.output += D) : (L.output += te, $.output += te), ue() !== "*" && (L.output += z, $.output += z)), q(X);
        }
        for (; L.brackets > 0; ) {
          if (p.strictBrackets === !0) throw new SyntaxError(g("closing", "]"));
          L.output = i.escapeLast(L.output, "["), ye("brackets");
        }
        for (; L.parens > 0; ) {
          if (p.strictBrackets === !0) throw new SyntaxError(g("closing", ")"));
          L.output = i.escapeLast(L.output, "("), ye("parens");
        }
        for (; L.braces > 0; ) {
          if (p.strictBrackets === !0) throw new SyntaxError(g("closing", "}"));
          L.output = i.escapeLast(L.output, "{"), ye("braces");
        }
        if (p.strictSlashes !== !0 && ($.type === "star" || $.type === "bracket") && q({ type: "maybe_slash", value: "", output: `${N}?` }), L.backtrack === !0) {
          L.output = "";
          for (const V of L.tokens)
            L.output += V.output != null ? V.output : V.value, V.suffix && (L.output += V.suffix);
        }
        return L;
      };
      m.fastpaths = (S, v) => {
        const p = { ...v }, A = typeof p.maxLength == "number" ? Math.min(h, p.maxLength) : h, k = S.length;
        if (k > A)
          throw new SyntaxError(`Input length: ${k}, exceeds maximum allowed length: ${A}`);
        S = c[S] || S;
        const C = i.isWindows(v), { DOT_LITERAL: R, SLASH_LITERAL: x, ONE_CHAR: I, DOTS_SLASH: w, NO_DOT: E, NO_DOTS: _, NO_DOTS_SLASH: P, STAR: N, START_ANCHOR: z } = l.globChars(C), T = p.dot ? _ : E, U = p.dot ? P : E, M = p.capture ? "" : "?:", D = { negated: !1, prefix: "" };
        let j = p.bash === !0 ? ".*?" : N;
        p.capture && (j = `(${j})`);
        const ee = (te) => te.noglobstar === !0 ? j : `(${M}(?:(?!${z}${te.dot ? w : R}).)*?)`, F = (te) => {
          switch (te) {
            case "*":
              return `${T}${I}${j}`;
            case ".*":
              return `${R}${I}${j}`;
            case "*.*":
              return `${T}${j}${R}${I}${j}`;
            case "*/*":
              return `${T}${j}${x}${I}${U}${j}`;
            case "**":
              return T + ee(p);
            case "**/*":
              return `(?:${T}${ee(p)}${x})?${U}${I}${j}`;
            case "**/*.*":
              return `(?:${T}${ee(p)}${x})?${U}${j}${R}${I}${j}`;
            case "**/.*":
              return `(?:${T}${ee(p)}${x})?${R}${I}${j}`;
            default: {
              const oe = /^(.*?)\.(\w+)$/.exec(te);
              if (!oe) return;
              const K = F(oe[1]);
              return K ? K + R + oe[2] : void 0;
            }
          }
        }, W = i.removePrefix(S, D);
        let G = F(W);
        return G && p.strictSlashes !== !0 && (G += `${x}?`), G;
      }, o.exports = m;
    }, 683: (o, a, s) => {
      const l = s(17), i = s(700), h = s(754), f = s(513), b = s(356), y = (u) => u && typeof u == "object" && !Array.isArray(u), c = (u, g, m = !1) => {
        if (Array.isArray(u)) {
          const x = u.map((w) => c(w, g, m));
          return (w) => {
            for (const E of x) {
              const _ = E(w);
              if (_) return _;
            }
            return !1;
          };
        }
        const S = y(u) && u.tokens && u.input;
        if (u === "" || typeof u != "string" && !S)
          throw new TypeError("Expected pattern to be a non-empty string");
        const v = g || {}, p = f.isWindows(g), A = S ? c.compileRe(u, g) : c.makeRe(u, g, !1, !0), k = A.state;
        delete A.state;
        let C = () => !1;
        if (v.ignore) {
          const x = { ...g, ignore: null, onMatch: null, onResult: null };
          C = c(v.ignore, x, m);
        }
        const R = (x, I = !1) => {
          const { isMatch: w, match: E, output: _ } = c.test(x, A, g, { glob: u, posix: p }), P = { glob: u, state: k, regex: A, posix: p, input: x, output: _, match: E, isMatch: w };
          return typeof v.onResult == "function" && v.onResult(P), w === !1 ? (P.isMatch = !1, I ? P : !1) : C(x) ? (typeof v.onIgnore == "function" && v.onIgnore(P), P.isMatch = !1, I ? P : !1) : (typeof v.onMatch == "function" && v.onMatch(P), I ? P : !0);
        };
        return m && (R.state = k), R;
      };
      c.test = (u, g, m, { glob: S, posix: v } = {}) => {
        if (typeof u != "string")
          throw new TypeError("Expected input to be a string");
        if (u === "")
          return { isMatch: !1, output: "" };
        const p = m || {}, A = p.format || (v ? f.toPosixSlashes : null);
        let k = u === S, C = k && A ? A(u) : u;
        return k === !1 && (C = A ? A(u) : u, k = C === S), (k === !1 || p.capture === !0) && (p.matchBase === !0 || p.basename === !0 ? k = c.matchBase(u, g, m, v) : k = g.exec(C)), { isMatch: !!k, match: k, output: C };
      }, c.matchBase = (u, g, m, S = f.isWindows(m)) => (g instanceof RegExp ? g : c.makeRe(g, m)).test(l.basename(u)), c.isMatch = (u, g, m) => c(g, m)(u), c.parse = (u, g) => Array.isArray(u) ? u.map((m) => c.parse(m, g)) : h(u, { ...g, fastpaths: !1 }), c.scan = (u, g) => i(u, g), c.compileRe = (u, g, m = !1, S = !1) => {
        if (m === !0)
          return u.output;
        const v = g || {}, p = v.contains ? "" : "^", A = v.contains ? "" : "$";
        let k = `${p}(?:${u.output})${A}`;
        u && u.negated === !0 && (k = `^(?!${k}).*$`);
        const C = c.toRegex(k, g);
        return S === !0 && (C.state = u), C;
      }, c.makeRe = (u, g, m = !1, S = !1) => {
        if (!u || typeof u != "string")
          throw new TypeError("Expected a non-empty string");
        const v = g || {};
        let p = { negated: !1, fastpaths: !0 }, A = "", k;
        return u.startsWith("./") && (u = u.slice(2), A = p.prefix = "./"), v.fastpaths !== !1 && (u[0] === "." || u[0] === "*") && (k = h.fastpaths(u, g)), k === void 0 ? (p = h(u, g), p.prefix = A + (p.prefix || "")) : p.output = k, c.compileRe(p, g, m, S);
      }, c.toRegex = (u, g) => {
        try {
          const m = g || {};
          return new RegExp(u, m.flags || (m.nocase ? "i" : ""));
        } catch (m) {
          if (g && g.debug === !0) throw m;
          return /$^/;
        }
      }, c.constants = b, o.exports = c;
    }, 700: (o, a, s) => {
      const l = s(513), { CHAR_ASTERISK: i, CHAR_AT: h, CHAR_BACKWARD_SLASH: f, CHAR_COMMA: b, CHAR_DOT: y, CHAR_EXCLAMATION_MARK: c, CHAR_FORWARD_SLASH: u, CHAR_LEFT_CURLY_BRACE: g, CHAR_LEFT_PARENTHESES: m, CHAR_LEFT_SQUARE_BRACKET: S, CHAR_PLUS: v, CHAR_QUESTION_MARK: p, CHAR_RIGHT_CURLY_BRACE: A, CHAR_RIGHT_PARENTHESES: k, CHAR_RIGHT_SQUARE_BRACKET: C } = s(356), R = (w) => w === u || w === f, x = (w) => {
        w.isPrefix !== !0 && (w.depth = w.isGlobstar ? 1 / 0 : 1);
      }, I = (w, E) => {
        const _ = E || {}, P = w.length - 1, N = _.parts === !0 || _.scanToEnd === !0, z = [], T = [], U = [];
        let M = w, D = -1, j = 0, ee = 0, F = !1, W = !1, G = !1, te = !1, oe = !1, K = !1, L = !1, pe = !1, ie = !1, se = 0, $, O, re = { value: "", depth: 0, isGlob: !1 };
        const ue = () => D >= P, Ne = () => M.charCodeAt(D + 1), ge = () => ($ = O, M.charCodeAt(++D));
        for (; D < P; ) {
          O = ge();
          let ye;
          if (O === f) {
            L = re.backslashes = !0, O = ge(), O === g && (K = !0);
            continue;
          }
          if (K === !0 || O === g) {
            for (se++; ue() !== !0 && (O = ge()); ) {
              if (O === f) {
                L = re.backslashes = !0, ge();
                continue;
              }
              if (O === g) {
                se++;
                continue;
              }
              if (K !== !0 && O === y && (O = ge()) === y) {
                if (F = re.isBrace = !0, G = re.isGlob = !0, ie = !0, N === !0)
                  continue;
                break;
              }
              if (K !== !0 && O === b) {
                if (F = re.isBrace = !0, G = re.isGlob = !0, ie = !0, N === !0)
                  continue;
                break;
              }
              if (O === A && (se--, se === 0)) {
                K = !1, F = re.isBrace = !0, ie = !0;
                break;
              }
            }
            if (N === !0)
              continue;
            break;
          }
          if (O === u) {
            if (z.push(D), T.push(re), re = { value: "", depth: 0, isGlob: !1 }, ie === !0) continue;
            if ($ === y && D === j + 1) {
              j += 2;
              continue;
            }
            ee = D + 1;
            continue;
          }
          if (_.noext !== !0 && (O === v || O === h || O === i || O === p || O === c) === !0 && Ne() === m) {
            if (G = re.isGlob = !0, te = re.isExtglob = !0, ie = !0, N === !0) {
              for (; ue() !== !0 && (O = ge()); ) {
                if (O === f) {
                  L = re.backslashes = !0, O = ge();
                  continue;
                }
                if (O === k) {
                  G = re.isGlob = !0, ie = !0;
                  break;
                }
              }
              continue;
            }
            break;
          }
          if (O === i) {
            if ($ === i && (oe = re.isGlobstar = !0), G = re.isGlob = !0, ie = !0, N === !0)
              continue;
            break;
          }
          if (O === p) {
            if (G = re.isGlob = !0, ie = !0, N === !0)
              continue;
            break;
          }
          if (O === S) {
            for (; ue() !== !0 && (ye = ge()); ) {
              if (ye === f) {
                L = re.backslashes = !0, ge();
                continue;
              }
              if (ye === C) {
                W = re.isBracket = !0, G = re.isGlob = !0, ie = !0;
                break;
              }
            }
            if (N === !0)
              continue;
            break;
          }
          if (_.nonegate !== !0 && O === c && D === j) {
            pe = re.negated = !0, j++;
            continue;
          }
          if (_.noparen !== !0 && O === m) {
            if (G = re.isGlob = !0, N === !0) {
              for (; ue() !== !0 && (O = ge()); ) {
                if (O === m) {
                  L = re.backslashes = !0, O = ge();
                  continue;
                }
                if (O === k) {
                  ie = !0;
                  break;
                }
              }
              continue;
            }
            break;
          }
          if (G === !0) {
            if (ie = !0, N === !0)
              continue;
            break;
          }
        }
        _.noext === !0 && (te = !1, G = !1);
        let de = M, Ae = "", xe = "";
        j > 0 && (Ae = M.slice(0, j), M = M.slice(j), ee -= j), de && G === !0 && ee > 0 ? (de = M.slice(0, ee), xe = M.slice(ee)) : G === !0 ? (de = "", xe = M) : de = M, de && de !== "" && de !== "/" && de !== M && R(de.charCodeAt(de.length - 1)) && (de = de.slice(0, -1)), _.unescape === !0 && (xe && (xe = l.removeBackslashes(xe)), de && L === !0 && (de = l.removeBackslashes(de)));
        const ne = { prefix: Ae, input: w, start: j, base: de, glob: xe, isBrace: F, isBracket: W, isGlob: G, isExtglob: te, isGlobstar: oe, negated: pe };
        if (_.tokens === !0 && (ne.maxDepth = 0, R(O) || T.push(re), ne.tokens = T), _.parts === !0 || _.tokens === !0) {
          let ye;
          for (let q = 0; q < z.length; q++) {
            const me = ye ? ye + 1 : j, Ce = z[q], V = w.slice(me, Ce);
            _.tokens && (q === 0 && j !== 0 ? (T[q].isPrefix = !0, T[q].value = Ae) : T[q].value = V, x(T[q]), ne.maxDepth += T[q].depth), (q !== 0 || V !== "") && U.push(V), ye = Ce;
          }
          if (ye && ye + 1 < w.length) {
            const q = w.slice(ye + 1);
            U.push(q), _.tokens && (T[T.length - 1].value = q, x(T[T.length - 1]), ne.maxDepth += T[T.length - 1].depth);
          }
          ne.slashes = z, ne.parts = U;
        }
        return ne;
      };
      o.exports = I;
    }, 513: (o, a, s) => {
      const l = s(17), i = process.platform === "win32", { REGEX_BACKSLASH: h, REGEX_REMOVE_BACKSLASH: f, REGEX_SPECIAL_CHARS: b, REGEX_SPECIAL_CHARS_GLOBAL: y } = s(356);
      a.isObject = (c) => c !== null && typeof c == "object" && !Array.isArray(c), a.hasRegexChars = (c) => b.test(c), a.isRegexChar = (c) => c.length === 1 && a.hasRegexChars(c), a.escapeRegex = (c) => c.replace(y, "\\$1"), a.toPosixSlashes = (c) => c.replace(h, "/"), a.removeBackslashes = (c) => c.replace(f, (u) => u === "\\" ? "" : u), a.supportsLookbehinds = () => {
        const c = process.version.slice(1).split(".").map(Number);
        return c.length === 3 && c[0] >= 9 || c[0] === 8 && c[1] >= 10;
      }, a.isWindows = (c) => c && typeof c.windows == "boolean" ? c.windows : i === !0 || l.sep === "\\", a.escapeLast = (c, u, g) => {
        const m = c.lastIndexOf(u, g);
        return m === -1 ? c : c[m - 1] === "\\" ? a.escapeLast(c, u, m - 1) : `${c.slice(0, m)}\\${c.slice(m)}`;
      }, a.removePrefix = (c, u = {}) => {
        let g = c;
        return g.startsWith("./") && (g = g.slice(2), u.prefix = "./"), g;
      }, a.wrapOutput = (c, u = {}, g = {}) => {
        const m = g.contains ? "" : "^", S = g.contains ? "" : "$";
        let v = `${m}(?:${c})${S}`;
        return u.negated === !0 && (v = `(?:^(?!${v}).*$)`), v;
      };
    }, 492: (o, a, s) => {
      /*!
       * to-regex-range <https://github.com/micromatch/to-regex-range>
       *
       * Copyright (c) 2015-present, Jon Schlinkert.
       * Released under the MIT License.
       */
      const l = s(357), i = (R, x, I) => {
        if (l(R) === !1)
          throw new TypeError("toRegexRange: expected the first argument to be a number");
        if (x === void 0 || R === x)
          return String(R);
        if (l(x) === !1)
          throw new TypeError("toRegexRange: expected the second argument to be a number.");
        let w = { relaxZeros: !0, ...I };
        typeof w.strictZeros == "boolean" && (w.relaxZeros = w.strictZeros === !1);
        let E = String(w.relaxZeros), _ = String(w.shorthand), P = String(w.capture), N = String(w.wrap), z = R + ":" + x + "=" + E + _ + P + N;
        if (i.cache.hasOwnProperty(z))
          return i.cache[z].result;
        let T = Math.min(R, x), U = Math.max(R, x);
        if (Math.abs(T - U) === 1) {
          let F = R + "|" + x;
          return w.capture ? `(${F})` : w.wrap === !1 ? F : `(?:${F})`;
        }
        let M = k(R) || k(x), D = { min: R, max: x, a: T, b: U }, j = [], ee = [];
        if (M && (D.isPadded = M, D.maxLen = String(D.max).length), T < 0) {
          let F = U < 0 ? Math.abs(U) : 1;
          ee = y(F, Math.abs(T), D, w), T = D.a = 0;
        }
        return U >= 0 && (j = y(T, U, D, w)), D.negatives = ee, D.positives = j, D.result = h(ee, j), w.capture === !0 ? D.result = `(${D.result})` : w.wrap !== !1 && j.length + ee.length > 1 && (D.result = `(?:${D.result})`), i.cache[z] = D, D.result;
      };
      function h(R, x, I) {
        let w = c(R, x, "-", !1) || [], E = c(x, R, "", !1) || [], _ = c(R, x, "-?", !0) || [];
        return w.concat(_).concat(E).join("|");
      }
      function f(R, x) {
        let I = 1, w = 1, E = S(R, I), _ = /* @__PURE__ */ new Set([x]);
        for (; R <= E && E <= x; )
          _.add(E), I += 1, E = S(R, I);
        for (E = v(x + 1, w) - 1; R < E && E <= x; )
          _.add(E), w += 1, E = v(x + 1, w) - 1;
        return _ = [..._], _.sort(g), _;
      }
      function b(R, x, I) {
        if (R === x)
          return { pattern: R, count: [], digits: 0 };
        let w = u(R, x), E = w.length, _ = "", P = 0;
        for (let N = 0; N < E; N++) {
          let [z, T] = w[N];
          z === T ? _ += z : z !== "0" || T !== "9" ? _ += A(z, T) : P++;
        }
        return P && (_ += I.shorthand === !0 ? "\\d" : "[0-9]"), { pattern: _, count: [P], digits: E };
      }
      function y(R, x, I, w) {
        let E = f(R, x), _ = [], P = R, N;
        for (let z = 0; z < E.length; z++) {
          let T = E[z], U = b(String(P), String(T), w), M = "";
          if (!I.isPadded && N && N.pattern === U.pattern) {
            N.count.length > 1 && N.count.pop(), N.count.push(U.count[0]), N.string = N.pattern + p(N.count), P = T + 1;
            continue;
          }
          I.isPadded && (M = C(T, I, w)), U.string = M + U.pattern + p(U.count), _.push(U), P = T + 1, N = U;
        }
        return _;
      }
      function c(R, x, I, w, E) {
        let _ = [];
        for (let P of R) {
          let { string: N } = P;
          !w && !m(x, "string", N) && _.push(I + N), w && m(x, "string", N) && _.push(I + N);
        }
        return _;
      }
      function u(R, x) {
        let I = [];
        for (let w = 0; w < R.length; w++) I.push([R[w], x[w]]);
        return I;
      }
      function g(R, x) {
        return R > x ? 1 : x > R ? -1 : 0;
      }
      function m(R, x, I) {
        return R.some((w) => w[x] === I);
      }
      function S(R, x) {
        return Number(String(R).slice(0, -x) + "9".repeat(x));
      }
      function v(R, x) {
        return R - R % Math.pow(10, x);
      }
      function p(R) {
        let [x = 0, I = ""] = R;
        return I || x > 1 ? `{${x + (I ? "," + I : "")}}` : "";
      }
      function A(R, x, I) {
        return `[${R}${x - R === 1 ? "" : "-"}${x}]`;
      }
      function k(R) {
        return /^-?(0+)\d/.test(R);
      }
      function C(R, x, I) {
        if (!x.isPadded)
          return R;
        let w = Math.abs(x.maxLen - String(R).length), E = I.relaxZeros !== !1;
        switch (w) {
          case 0:
            return "";
          case 1:
            return E ? "0?" : "0";
          case 2:
            return E ? "0{0,2}" : "00";
          default:
            return E ? `0{0,${w}}` : `0{${w}}`;
        }
      }
      i.cache = {}, i.clearCache = () => i.cache = {}, o.exports = i;
    }, 17: (o) => {
      o.exports = vr;
    }, 837: (o) => {
      o.exports = vr;
    } }, t = {};
    function r(o) {
      var a = t[o];
      if (a !== void 0)
        return a.exports;
      var s = t[o] = { exports: {} }, l = !0;
      try {
        e[o](s, s.exports, r), l = !1;
      } finally {
        l && delete t[o];
      }
      return s.exports;
    }
    typeof r < "u" && (r.ab = __dirname + "/");
    var n = r(971);
    Dt.exports = n;
  })()), Dt.exports;
}
var Qr;
function ra() {
  return Qr || (Qr = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    function t(a, s) {
      for (var l in s) Object.defineProperty(a, l, {
        enumerable: !0,
        get: s[l]
      });
    }
    t(e, {
      matchRemotePattern: function() {
        return n;
      },
      hasMatch: function() {
        return o;
      }
    });
    const r = ta();
    function n(a, s) {
      if (a.protocol !== void 0) {
        const i = s.protocol.slice(0, -1);
        if (a.protocol !== i)
          return !1;
      }
      if (a.port !== void 0 && a.port !== s.port)
        return !1;
      if (a.hostname === void 0)
        throw new Error(`Pattern should define hostname but found
` + JSON.stringify(a));
      if (!(0, r.makeRe)(a.hostname).test(s.hostname))
        return !1;
      var l;
      return !!(0, r.makeRe)((l = a.pathname) != null ? l : "**").test(s.pathname);
    }
    function o(a, s, l) {
      return a.some((i) => l.hostname === i) || s.some((i) => n(i, l));
    }
  }(Ht)), Ht;
}
var Zr;
function co() {
  return Zr || (Zr = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "default", {
      enumerable: !0,
      get: function() {
        return r;
      }
    });
    function t(n) {
      let { config: o, src: a, width: s, quality: l } = n;
      if (process.env.NODE_ENV !== "production") {
        const i = [];
        if (a || i.push("src"), s || i.push("width"), i.length > 0)
          throw new Error("Next Image Optimization requires " + i.join(", ") + " to be provided. Make sure you pass them as props to the `next/image` component. Received: " + JSON.stringify({
            src: a,
            width: s,
            quality: l
          }));
        if (a.startsWith("//"))
          throw new Error('Failed to parse src "' + a + '" on `next/image`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)');
        if (!a.startsWith("/") && (o.domains || o.remotePatterns)) {
          let h;
          try {
            h = new URL(a);
          } catch (f) {
            throw console.error(f), new Error('Failed to parse src "' + a + '" on `next/image`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)');
          }
          if (process.env.NODE_ENV !== "test" && // micromatch isn't compatible with edge runtime
          process.env.NEXT_RUNTIME !== "edge") {
            const { hasMatch: f } = ra();
            if (!f(o.domains, o.remotePatterns, h))
              throw new Error("Invalid src prop (" + a + ') on `next/image`, hostname "' + h.hostname + '" is not configured under images in your `next.config.js`\nSee more info: https://nextjs.org/docs/messages/next-image-unconfigured-host');
          }
        }
      }
      return o.path + "?url=" + encodeURIComponent(a) + "&w=" + s + "&q=" + (l || 75) + (process.env.NEXT_DEPLOYMENT_ID ? "&dpl=" + process.env.NEXT_DEPLOYMENT_ID : "");
    }
    t.__next_img_default = !0;
    const r = t;
  }(jt)), jt;
}
(function(e, t) {
  "use client";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "Image", {
    enumerable: !0,
    get: function() {
      return v;
    }
  });
  const r = Se, o = /* @__PURE__ */ tt._(fe), a = /* @__PURE__ */ r._(Wo), s = /* @__PURE__ */ r._(Zs()), l = $r, i = Et, h = Ys(), f = nt, b = lo(), y = /* @__PURE__ */ r._(co()), c = process.env.__NEXT_IMAGE_OPTS;
  typeof window > "u" && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
  function u(p, A, k, C, R, x) {
    const I = p == null ? void 0 : p.src;
    if (!p || p["data-loaded-src"] === I)
      return;
    p["data-loaded-src"] = I, ("decode" in p ? p.decode() : Promise.resolve()).catch(() => {
    }).then(() => {
      if (!(!p.parentElement || !p.isConnected)) {
        if (A !== "empty" && R(!0), k != null && k.current) {
          const E = new Event("load");
          Object.defineProperty(E, "target", {
            writable: !1,
            value: p
          });
          let _ = !1, P = !1;
          k.current({
            ...E,
            nativeEvent: E,
            currentTarget: p,
            target: p,
            isDefaultPrevented: () => _,
            isPropagationStopped: () => P,
            persist: () => {
            },
            preventDefault: () => {
              _ = !0, E.preventDefault();
            },
            stopPropagation: () => {
              P = !0, E.stopPropagation();
            }
          });
        }
        if (C != null && C.current && C.current(p), process.env.NODE_ENV !== "production") {
          const E = new URL(I, "http://n").searchParams.get("url") || I;
          if (p.getAttribute("data-nimg") === "fill") {
            if (!x && (!p.getAttribute("sizes") || p.getAttribute("sizes") === "100vw") && p.getBoundingClientRect().width / window.innerWidth < 0.6 && (0, f.warnOnce)('Image with src "' + E + '" has "fill" but is missing "sizes" prop. Please add it to improve page performance. Read more: https://nextjs.org/docs/api-reference/next/image#sizes'), p.parentElement) {
              const { position: N } = window.getComputedStyle(p.parentElement), z = [
                "absolute",
                "fixed",
                "relative"
              ];
              z.includes(N) || (0, f.warnOnce)('Image with src "' + E + '" has "fill" and parent element with invalid "position". Provided "' + N + '" should be one of ' + z.map(String).join(",") + ".");
            }
            p.height === 0 && (0, f.warnOnce)('Image with src "' + E + '" has "fill" and a height value of 0. This is likely because the parent element of the image has not been styled to have a set height.');
          }
          const _ = p.height.toString() !== p.getAttribute("height"), P = p.width.toString() !== p.getAttribute("width");
          (_ && !P || !_ && P) && (0, f.warnOnce)('Image with src "' + E + `" has either width or height modified, but not the other. If you use CSS to change the size of your image, also include the styles 'width: "auto"' or 'height: "auto"' to maintain the aspect ratio.`);
        }
      }
    });
  }
  function g(p) {
    const [A, k] = o.version.split(".", 2), C = parseInt(A, 10), R = parseInt(k, 10);
    return C > 18 || C === 18 && R >= 3 ? {
      fetchPriority: p
    } : {
      fetchpriority: p
    };
  }
  const m = /* @__PURE__ */ (0, o.forwardRef)((p, A) => {
    let { src: k, srcSet: C, sizes: R, height: x, width: I, decoding: w, className: E, style: _, fetchPriority: P, placeholder: N, loading: z, unoptimized: T, fill: U, onLoadRef: M, onLoadingCompleteRef: D, setBlurComplete: j, setShowAltText: ee, onLoad: F, onError: W, ...G } = p;
    return /* @__PURE__ */ o.default.createElement("img", {
      ...G,
      ...g(P),
      // It's intended to keep `loading` before `src` because React updates
      // props in order which causes Safari/Firefox to not lazy load properly.
      // See https://github.com/facebook/react/issues/25883
      loading: z,
      width: I,
      height: x,
      decoding: w,
      "data-nimg": U ? "fill" : "1",
      className: E,
      style: _,
      // It's intended to keep `src` the last attribute because React updates
      // attributes in order. If we keep `src` the first one, Safari will
      // immediately start to fetch `src`, before `sizes` and `srcSet` are even
      // updated by React. That causes multiple unnecessary requests if `srcSet`
      // and `sizes` are defined.
      // This bug cannot be reproduced in Chrome or Firefox.
      sizes: R,
      srcSet: C,
      src: k,
      ref: (0, o.useCallback)((te) => {
        A && (typeof A == "function" ? A(te) : typeof A == "object" && (A.current = te)), te && (W && (te.src = te.src), process.env.NODE_ENV !== "production" && (k || console.error('Image is missing required "src" property:', te), te.getAttribute("alt") === null && console.error('Image is missing required "alt" property. Please add Alternative Text to describe the image for screen readers and search engines.')), te.complete && u(te, N, M, D, j, T));
      }, [
        k,
        N,
        M,
        D,
        j,
        W,
        T,
        A
      ]),
      onLoad: (te) => {
        const oe = te.currentTarget;
        u(oe, N, M, D, j, T);
      },
      onError: (te) => {
        ee(!0), N !== "empty" && j(!0), W && W(te);
      }
    });
  });
  function S(p) {
    let { isAppRouter: A, imgAttributes: k } = p;
    const C = {
      as: "image",
      imageSrcSet: k.srcSet,
      imageSizes: k.sizes,
      crossOrigin: k.crossOrigin,
      referrerPolicy: k.referrerPolicy,
      ...g(k.fetchPriority)
    };
    return A && a.default.preload ? (a.default.preload(
      k.src,
      // @ts-expect-error TODO: upgrade to `@types/react-dom@18.3.x`
      C
    ), null) : /* @__PURE__ */ o.default.createElement(s.default, null, /* @__PURE__ */ o.default.createElement("link", {
      key: "__nimg-" + k.src + k.srcSet + k.sizes,
      rel: "preload",
      // Note how we omit the `href` attribute, as it would only be relevant
      // for browsers that do not support `imagesrcset`, and in those cases
      // it would cause the incorrect image to be preloaded.
      //
      // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
      href: k.srcSet ? void 0 : k.src,
      ...C
    }));
  }
  const v = /* @__PURE__ */ (0, o.forwardRef)((p, A) => {
    const C = !(0, o.useContext)(b.RouterContext), R = (0, o.useContext)(h.ImageConfigContext), x = (0, o.useMemo)(() => {
      const D = c || R || i.imageConfigDefault, j = [
        ...D.deviceSizes,
        ...D.imageSizes
      ].sort((F, W) => F - W), ee = D.deviceSizes.sort((F, W) => F - W);
      return {
        ...D,
        allSizes: j,
        deviceSizes: ee
      };
    }, [
      R
    ]), { onLoad: I, onLoadingComplete: w } = p, E = (0, o.useRef)(I);
    (0, o.useEffect)(() => {
      E.current = I;
    }, [
      I
    ]);
    const _ = (0, o.useRef)(w);
    (0, o.useEffect)(() => {
      _.current = w;
    }, [
      w
    ]);
    const [P, N] = (0, o.useState)(!1), [z, T] = (0, o.useState)(!1), { props: U, meta: M } = (0, l.getImgProps)(p, {
      defaultLoader: y.default,
      imgConf: x,
      blurComplete: P,
      showAltText: z
    });
    return /* @__PURE__ */ o.default.createElement(o.default.Fragment, null, /* @__PURE__ */ o.default.createElement(m, {
      ...U,
      unoptimized: M.unoptimized,
      placeholder: M.placeholder,
      fill: M.fill,
      onLoadRef: E,
      onLoadingCompleteRef: _,
      setBlurComplete: N,
      setShowAltText: T,
      ref: A
    }), M.priority ? /* @__PURE__ */ o.default.createElement(S, {
      isAppRouter: C,
      imgAttributes: U
    }) : null);
  });
  (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
})(yr, yr.exports);
var na = yr.exports;
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(h, f) {
    for (var b in f) Object.defineProperty(h, b, {
      enumerable: !0,
      get: f[b]
    });
  }
  t(e, {
    unstable_getImgProps: function() {
      return l;
    },
    default: function() {
      return i;
    }
  });
  const r = Se, n = $r, o = nt, a = na, s = /* @__PURE__ */ r._(co()), l = (h) => {
    (0, o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");
    const { props: f } = (0, n.getImgProps)(h, {
      defaultLoader: s.default,
      // This is replaced by webpack define plugin
      imgConf: process.env.__NEXT_IMAGE_OPTS
    });
    for (const [b, y] of Object.entries(f))
      y === void 0 && delete f[b];
    return {
      props: f
    };
  }, i = a.Image;
})(so);
var oa = so;
const sa = /* @__PURE__ */ oo(oa), aa = {
  sm: {
    wrapper: "w-8 h-8",
    iconSize: 16
  },
  md: {
    wrapper: "w-12 h-12",
    iconSize: 20
  },
  lg: {
    wrapper: "w-16 h-16",
    iconSize: 24
  },
  xl: {
    wrapper: "w-20 h-20",
    iconSize: 32
  }
};
function at({
  size: e = "md",
  src: t,
  icon: r = /* @__PURE__ */ d(Ir, {}),
  className: n = "bg-accent-500"
}) {
  const o = aa[e], a = [
    "rounded-full flex items-center justify-center",
    o.wrapper,
    n
  ].join(" ").trim();
  return /* @__PURE__ */ d("div", { className: a, children: t ? /* @__PURE__ */ d(sa, { src: t, alt: "avatar", layout: "fill", className: "rounded-full object-cover" }) : fe.cloneElement(r, {
    size: o.iconSize,
    className: "text-white"
  }) });
}
const Yr = {
  accent: "bg-accent-500",
  green: "bg-green-500",
  red: "bg-red-500",
  yellow: "bg-yellow-500",
  gray: "bg-gray-500"
};
function Jr({ variant: e = "accent", children: t, className: r = "" }) {
  const o = [
    "px-3 py-1 text-xs font-medium text-white rounded-full",
    Yr[e] || Yr.accent,
    r
  ].join(" ").trim();
  return /* @__PURE__ */ d("span", { className: o, children: t });
}
var xr = { exports: {} }, it = { exports: {} }, qt = {}, en;
function uo() {
  return en || (en = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    function t(s, l) {
      for (var i in l) Object.defineProperty(s, i, {
        enumerable: !0,
        get: l[i]
      });
    }
    t(e, {
      searchParamsToUrlQuery: function() {
        return r;
      },
      urlQueryToSearchParams: function() {
        return o;
      },
      assign: function() {
        return a;
      }
    });
    function r(s) {
      const l = {};
      return s.forEach((i, h) => {
        typeof l[h] > "u" ? l[h] = i : Array.isArray(l[h]) ? l[h].push(i) : l[h] = [
          l[h],
          i
        ];
      }), l;
    }
    function n(s) {
      return typeof s == "string" || typeof s == "number" && !isNaN(s) || typeof s == "boolean" ? String(s) : "";
    }
    function o(s) {
      const l = new URLSearchParams();
      return Object.entries(s).forEach((i) => {
        let [h, f] = i;
        Array.isArray(f) ? f.forEach((b) => l.append(h, n(b))) : l.set(h, n(f));
      }), l;
    }
    function a(s) {
      for (var l = arguments.length, i = new Array(l > 1 ? l - 1 : 0), h = 1; h < l; h++)
        i[h - 1] = arguments[h];
      return i.forEach((f) => {
        Array.from(f.keys()).forEach((b) => s.delete(b)), f.forEach((b, y) => s.append(y, b));
      }), s;
    }
  }(qt)), qt;
}
var Ut = {}, tn;
function fo() {
  return tn || (tn = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    function t(i, h) {
      for (var f in h) Object.defineProperty(i, f, {
        enumerable: !0,
        get: h[f]
      });
    }
    t(e, {
      formatUrl: function() {
        return a;
      },
      urlObjectKeys: function() {
        return s;
      },
      formatWithValidation: function() {
        return l;
      }
    });
    const n = /* @__PURE__ */ tt._(uo()), o = /https?|ftp|gopher|file/;
    function a(i) {
      let { auth: h, hostname: f } = i, b = i.protocol || "", y = i.pathname || "", c = i.hash || "", u = i.query || "", g = !1;
      h = h ? encodeURIComponent(h).replace(/%3A/i, ":") + "@" : "", i.host ? g = h + i.host : f && (g = h + (~f.indexOf(":") ? "[" + f + "]" : f), i.port && (g += ":" + i.port)), u && typeof u == "object" && (u = String(n.urlQueryToSearchParams(u)));
      let m = i.search || u && "?" + u || "";
      return b && !b.endsWith(":") && (b += ":"), i.slashes || (!b || o.test(b)) && g !== !1 ? (g = "//" + (g || ""), y && y[0] !== "/" && (y = "/" + y)) : g || (g = ""), c && c[0] !== "#" && (c = "#" + c), m && m[0] !== "?" && (m = "?" + m), y = y.replace(/[?#]/g, encodeURIComponent), m = m.replace("#", "%23"), "" + b + g + y + m + c;
    }
    const s = [
      "auth",
      "hash",
      "host",
      "hostname",
      "href",
      "path",
      "pathname",
      "port",
      "protocol",
      "query",
      "search",
      "slashes"
    ];
    function l(i) {
      return process.env.NODE_ENV === "development" && i !== null && typeof i == "object" && Object.keys(i).forEach((h) => {
        s.includes(h) || console.warn("Unknown key passed via urlObject into url.format: " + h);
      }), a(i);
    }
  }(Ut)), Ut;
}
var Gt = {}, rn;
function ia() {
  return rn || (rn = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "omit", {
      enumerable: !0,
      get: function() {
        return t;
      }
    });
    function t(r, n) {
      const o = {};
      return Object.keys(r).forEach((a) => {
        n.includes(a) || (o[a] = r[a]);
      }), o;
    }
  }(Gt)), Gt;
}
var Bt = {}, nn;
function At() {
  return nn || (nn = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    function t(A, k) {
      for (var C in k) Object.defineProperty(A, C, {
        enumerable: !0,
        get: k[C]
      });
    }
    t(e, {
      WEB_VITALS: function() {
        return r;
      },
      execOnce: function() {
        return n;
      },
      isAbsoluteUrl: function() {
        return a;
      },
      getLocationOrigin: function() {
        return s;
      },
      getURL: function() {
        return l;
      },
      getDisplayName: function() {
        return i;
      },
      isResSent: function() {
        return h;
      },
      normalizeRepeatedSlashes: function() {
        return f;
      },
      loadGetInitialProps: function() {
        return b;
      },
      SP: function() {
        return y;
      },
      ST: function() {
        return c;
      },
      DecodeError: function() {
        return u;
      },
      NormalizeError: function() {
        return g;
      },
      PageNotFoundError: function() {
        return m;
      },
      MissingStaticPage: function() {
        return S;
      },
      MiddlewareNotFoundError: function() {
        return v;
      },
      stringifyError: function() {
        return p;
      }
    });
    const r = [
      "CLS",
      "FCP",
      "FID",
      "INP",
      "LCP",
      "TTFB"
    ];
    function n(A) {
      let k = !1, C;
      return function() {
        for (var R = arguments.length, x = new Array(R), I = 0; I < R; I++)
          x[I] = arguments[I];
        return k || (k = !0, C = A(...x)), C;
      };
    }
    const o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/, a = (A) => o.test(A);
    function s() {
      const { protocol: A, hostname: k, port: C } = window.location;
      return A + "//" + k + (C ? ":" + C : "");
    }
    function l() {
      const { href: A } = window.location, k = s();
      return A.substring(k.length);
    }
    function i(A) {
      return typeof A == "string" ? A : A.displayName || A.name || "Unknown";
    }
    function h(A) {
      return A.finished || A.headersSent;
    }
    function f(A) {
      const k = A.split("?");
      return k[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (k[1] ? "?" + k.slice(1).join("?") : "");
    }
    async function b(A, k) {
      if (process.env.NODE_ENV !== "production") {
        var C;
        if ((C = A.prototype) != null && C.getInitialProps) {
          const I = '"' + i(A) + '.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.';
          throw new Error(I);
        }
      }
      const R = k.res || k.ctx && k.ctx.res;
      if (!A.getInitialProps)
        return k.ctx && k.Component ? {
          pageProps: await b(k.Component, k.ctx)
        } : {};
      const x = await A.getInitialProps(k);
      if (R && h(R))
        return x;
      if (!x) {
        const I = '"' + i(A) + '.getInitialProps()" should resolve to an object. But found "' + x + '" instead.';
        throw new Error(I);
      }
      return process.env.NODE_ENV !== "production" && Object.keys(x).length === 0 && !k.ctx && console.warn("" + i(A) + " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps"), x;
    }
    const y = typeof performance < "u", c = y && [
      "mark",
      "measure",
      "getEntriesByName"
    ].every((A) => typeof performance[A] == "function");
    class u extends Error {
    }
    class g extends Error {
    }
    class m extends Error {
      constructor(k) {
        super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = "Cannot find module for page: " + k;
      }
    }
    class S extends Error {
      constructor(k, C) {
        super(), this.message = "Failed to load static file for page: " + k + " " + C;
      }
    }
    class v extends Error {
      constructor() {
        super(), this.code = "ENOENT", this.message = "Cannot find the middleware module";
      }
    }
    function p(A) {
      return JSON.stringify({
        message: A.message,
        stack: A.stack
      });
    }
  }(Bt)), Bt;
}
var lt = { exports: {} }, Vt = {}, on;
function po() {
  return on || (on = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "removeTrailingSlash", {
      enumerable: !0,
      get: function() {
        return t;
      }
    });
    function t(r) {
      return r.replace(/\/$/, "") || "/";
    }
  }(Vt)), Vt;
}
var Ft = {}, sn;
function Lr() {
  return sn || (sn = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "parsePath", {
      enumerable: !0,
      get: function() {
        return t;
      }
    });
    function t(r) {
      const n = r.indexOf("#"), o = r.indexOf("?"), a = o > -1 && (n < 0 || o < n);
      return a || n > -1 ? {
        pathname: r.substring(0, a ? o : n),
        query: a ? r.substring(o, n > -1 ? n : void 0) : "",
        hash: n > -1 ? r.slice(n) : ""
      } : {
        pathname: r,
        query: "",
        hash: ""
      };
    }
  }(Ft)), Ft;
}
var an;
function kt() {
  return an || (an = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "normalizePathTrailingSlash", {
      enumerable: !0,
      get: function() {
        return o;
      }
    });
    const r = po(), n = Lr(), o = (a) => {
      if (!a.startsWith("/") || process.env.__NEXT_MANUAL_TRAILING_SLASH)
        return a;
      const { pathname: s, query: l, hash: i } = (0, n.parsePath)(a);
      return process.env.__NEXT_TRAILING_SLASH ? /\.[^/]+\/?$/.test(s) ? "" + (0, r.removeTrailingSlash)(s) + l + i : s.endsWith("/") ? "" + s + l + i : s + "/" + l + i : "" + (0, r.removeTrailingSlash)(s) + l + i;
    };
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(lt, lt.exports)), lt.exports;
}
var Wt = {}, ct = { exports: {} }, Kt = {}, ln;
function ho() {
  return ln || (ln = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "pathHasPrefix", {
      enumerable: !0,
      get: function() {
        return r;
      }
    });
    const t = Lr();
    function r(n, o) {
      if (typeof n != "string")
        return !1;
      const { pathname: a } = (0, t.parsePath)(n);
      return a === o || a.startsWith(o + "/");
    }
  }(Kt)), Kt;
}
var cn;
function la() {
  return cn || (cn = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "hasBasePath", {
      enumerable: !0,
      get: function() {
        return o;
      }
    });
    const r = ho(), n = process.env.__NEXT_ROUTER_BASEPATH || "";
    function o(a) {
      return (0, r.pathHasPrefix)(a, n);
    }
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(ct, ct.exports)), ct.exports;
}
var un;
function mo() {
  return un || (un = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "isLocalURL", {
      enumerable: !0,
      get: function() {
        return n;
      }
    });
    const t = At(), r = la();
    function n(o) {
      if (!(0, t.isAbsoluteUrl)(o)) return !0;
      try {
        const a = (0, t.getLocationOrigin)(), s = new URL(o, a);
        return s.origin === a && (0, r.hasBasePath)(s.pathname);
      } catch {
        return !1;
      }
    }
  }(Wt)), Wt;
}
var Xt = {}, Qt = {}, dn;
function ca() {
  return dn || (dn = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "getSortedRoutes", {
      enumerable: !0,
      get: function() {
        return r;
      }
    });
    class t {
      insert(o) {
        this._insert(o.split("/").filter(Boolean), [], !1);
      }
      smoosh() {
        return this._smoosh();
      }
      _smoosh(o) {
        o === void 0 && (o = "/");
        const a = [
          ...this.children.keys()
        ].sort();
        this.slugName !== null && a.splice(a.indexOf("[]"), 1), this.restSlugName !== null && a.splice(a.indexOf("[...]"), 1), this.optionalRestSlugName !== null && a.splice(a.indexOf("[[...]]"), 1);
        const s = a.map((l) => this.children.get(l)._smoosh("" + o + l + "/")).reduce((l, i) => [
          ...l,
          ...i
        ], []);
        if (this.slugName !== null && s.push(...this.children.get("[]")._smoosh(o + "[" + this.slugName + "]/")), !this.placeholder) {
          const l = o === "/" ? "/" : o.slice(0, -1);
          if (this.optionalRestSlugName != null)
            throw new Error('You cannot define a route with the same specificity as a optional catch-all route ("' + l + '" and "' + l + "[[..." + this.optionalRestSlugName + ']]").');
          s.unshift(l);
        }
        return this.restSlugName !== null && s.push(...this.children.get("[...]")._smoosh(o + "[..." + this.restSlugName + "]/")), this.optionalRestSlugName !== null && s.push(...this.children.get("[[...]]")._smoosh(o + "[[..." + this.optionalRestSlugName + "]]/")), s;
      }
      _insert(o, a, s) {
        if (o.length === 0) {
          this.placeholder = !1;
          return;
        }
        if (s)
          throw new Error("Catch-all must be the last part of the URL.");
        let l = o[0];
        if (l.startsWith("[") && l.endsWith("]")) {
          let f = function(b, y) {
            if (b !== null && b !== y)
              throw new Error("You cannot use different slug names for the same dynamic path ('" + b + "' !== '" + y + "').");
            a.forEach((c) => {
              if (c === y)
                throw new Error('You cannot have the same slug name "' + y + '" repeat within a single dynamic path');
              if (c.replace(/\W/g, "") === l.replace(/\W/g, ""))
                throw new Error('You cannot have the slug names "' + c + '" and "' + y + '" differ only by non-word symbols within a single dynamic path');
            }), a.push(y);
          }, i = l.slice(1, -1), h = !1;
          if (i.startsWith("[") && i.endsWith("]") && (i = i.slice(1, -1), h = !0), i.startsWith("...") && (i = i.substring(3), s = !0), i.startsWith("[") || i.endsWith("]"))
            throw new Error("Segment names may not start or end with extra brackets ('" + i + "').");
          if (i.startsWith("."))
            throw new Error("Segment names may not start with erroneous periods ('" + i + "').");
          if (s)
            if (h) {
              if (this.restSlugName != null)
                throw new Error('You cannot use both an required and optional catch-all route at the same level ("[...' + this.restSlugName + ']" and "' + o[0] + '" ).');
              f(this.optionalRestSlugName, i), this.optionalRestSlugName = i, l = "[[...]]";
            } else {
              if (this.optionalRestSlugName != null)
                throw new Error('You cannot use both an optional and required catch-all route at the same level ("[[...' + this.optionalRestSlugName + ']]" and "' + o[0] + '").');
              f(this.restSlugName, i), this.restSlugName = i, l = "[...]";
            }
          else {
            if (h)
              throw new Error('Optional route parameters are not yet supported ("' + o[0] + '").');
            f(this.slugName, i), this.slugName = i, l = "[]";
          }
        }
        this.children.has(l) || this.children.set(l, new t()), this.children.get(l)._insert(o.slice(1), a, s);
      }
      constructor() {
        this.placeholder = !0, this.children = /* @__PURE__ */ new Map(), this.slugName = null, this.restSlugName = null, this.optionalRestSlugName = null;
      }
    }
    function r(n) {
      const o = new t();
      return n.forEach((a) => o.insert(a)), o.smoosh();
    }
  }(Qt)), Qt;
}
var Zt = {}, fn;
function ua() {
  return fn || (fn = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "isDynamicRoute", {
      enumerable: !0,
      get: function() {
        return r;
      }
    });
    const t = /\/\[[^/]+?\](?=\/|$)/;
    function r(n) {
      return t.test(n);
    }
  }(Zt)), Zt;
}
var pn;
function da() {
  return pn || (pn = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    function t(o, a) {
      for (var s in a) Object.defineProperty(o, s, {
        enumerable: !0,
        get: a[s]
      });
    }
    t(e, {
      getSortedRoutes: function() {
        return r.getSortedRoutes;
      },
      isDynamicRoute: function() {
        return n.isDynamicRoute;
      }
    });
    const r = ca(), n = ua();
  }(Xt)), Xt;
}
var Yt = {}, Jt = {}, hn;
function fa() {
  return hn || (hn = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "getRouteMatcher", {
      enumerable: !0,
      get: function() {
        return r;
      }
    });
    const t = At();
    function r(n) {
      let { re: o, groups: a } = n;
      return (s) => {
        const l = o.exec(s);
        if (!l)
          return !1;
        const i = (f) => {
          try {
            return decodeURIComponent(f);
          } catch {
            throw new t.DecodeError("failed to decode param");
          }
        }, h = {};
        return Object.keys(a).forEach((f) => {
          const b = a[f], y = l[b.pos];
          y !== void 0 && (h[f] = ~y.indexOf("/") ? y.split("/").map((c) => i(c)) : b.repeat ? [
            i(y)
          ] : i(y));
        }), h;
      };
    }
  }(Jt)), Jt;
}
var er = {}, tr = {}, rr = {}, nr = {}, mn;
function pa() {
  return mn || (mn = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "ensureLeadingSlash", {
      enumerable: !0,
      get: function() {
        return t;
      }
    });
    function t(r) {
      return r.startsWith("/") ? r : "/" + r;
    }
  }(nr)), nr;
}
var or = {}, gn;
function ha() {
  return gn || (gn = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "isGroupSegment", {
      enumerable: !0,
      get: function() {
        return t;
      }
    });
    function t(r) {
      return r[0] === "(" && r.endsWith(")");
    }
  }(or)), or;
}
var bn;
function ma() {
  return bn || (bn = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    function t(i, h) {
      for (var f in h) Object.defineProperty(i, f, {
        enumerable: !0,
        get: h[f]
      });
    }
    t(e, {
      normalizeAppPath: function() {
        return a;
      },
      normalizeRscURL: function() {
        return s;
      },
      normalizePostponedURL: function() {
        return l;
      }
    });
    const r = pa(), n = ha(), o = vr;
    function a(i) {
      return (0, r.ensureLeadingSlash)(i.split("/").reduce((h, f, b, y) => !f || (0, n.isGroupSegment)(f) || f[0] === "@" || (f === "page" || f === "route") && b === y.length - 1 ? h : h + "/" + f, ""));
    }
    function s(i) {
      return i.replace(
        /\.rsc($|\?)/,
        // $1 ensures `?` is preserved
        "$1"
      );
    }
    function l(i) {
      const h = (0, o.parse)(i);
      let { pathname: f } = h;
      return f && f.startsWith("/_next/postponed") ? (f = f.substring(16) || "/", (0, o.format)({
        ...h,
        pathname: f
      })) : i;
    }
  }(rr)), rr;
}
var yn;
function ga() {
  return yn || (yn = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    function t(s, l) {
      for (var i in l) Object.defineProperty(s, i, {
        enumerable: !0,
        get: l[i]
      });
    }
    t(e, {
      INTERCEPTION_ROUTE_MARKERS: function() {
        return n;
      },
      isInterceptionRouteAppPath: function() {
        return o;
      },
      extractInterceptionRouteInformation: function() {
        return a;
      }
    });
    const r = ma(), n = [
      "(..)(..)",
      "(.)",
      "(..)",
      "(...)"
    ];
    function o(s) {
      return s.split("/").find((l) => n.find((i) => l.startsWith(i))) !== void 0;
    }
    function a(s) {
      let l, i, h;
      for (const f of s.split("/"))
        if (i = n.find((b) => f.startsWith(b)), i) {
          [l, h] = s.split(i, 2);
          break;
        }
      if (!l || !i || !h)
        throw new Error(`Invalid interception route: ${s}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`);
      switch (l = (0, r.normalizeAppPath)(l), i) {
        case "(.)":
          l === "/" ? h = `/${h}` : h = l + "/" + h;
          break;
        case "(..)":
          if (l === "/")
            throw new Error(`Invalid interception route: ${s}. Cannot use (..) marker at the root level, use (.) instead.`);
          h = l.split("/").slice(0, -1).concat(h).join("/");
          break;
        case "(...)":
          h = "/" + h;
          break;
        case "(..)(..)":
          const f = l.split("/");
          if (f.length <= 2)
            throw new Error(`Invalid interception route: ${s}. Cannot use (..)(..) marker at the root level or one level up.`);
          h = f.slice(0, -2).concat(h).join("/");
          break;
        default:
          throw new Error("Invariant: unexpected marker");
      }
      return {
        interceptingRoute: l,
        interceptedRoute: h
      };
    }
  }(tr)), tr;
}
var sr = {}, vn;
function ba() {
  return vn || (vn = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "escapeStringRegexp", {
      enumerable: !0,
      get: function() {
        return n;
      }
    });
    const t = /[|\\{}()[\]^$+*?.-]/, r = /[|\\{}()[\]^$+*?.-]/g;
    function n(o) {
      return t.test(o) ? o.replace(r, "\\$&") : o;
    }
  }(sr)), sr;
}
var xn;
function ya() {
  return xn || (xn = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    function t(g, m) {
      for (var S in m) Object.defineProperty(g, S, {
        enumerable: !0,
        get: m[S]
      });
    }
    t(e, {
      getRouteRegex: function() {
        return h;
      },
      getNamedRouteRegex: function() {
        return c;
      },
      getNamedMiddlewareRegex: function() {
        return u;
      }
    });
    const r = ga(), n = ba(), o = po(), a = "nxtP", s = "nxtI";
    function l(g) {
      const m = g.startsWith("[") && g.endsWith("]");
      m && (g = g.slice(1, -1));
      const S = g.startsWith("...");
      return S && (g = g.slice(3)), {
        key: g,
        repeat: S,
        optional: m
      };
    }
    function i(g) {
      const m = (0, o.removeTrailingSlash)(g).slice(1).split("/"), S = {};
      let v = 1;
      return {
        parameterizedRoute: m.map((p) => {
          const A = r.INTERCEPTION_ROUTE_MARKERS.find((C) => p.startsWith(C)), k = p.match(/\[((?:\[.*\])|.+)\]/);
          if (A && k) {
            const { key: C, optional: R, repeat: x } = l(k[1]);
            return S[C] = {
              pos: v++,
              repeat: x,
              optional: R
            }, "/" + (0, n.escapeStringRegexp)(A) + "([^/]+?)";
          } else if (k) {
            const { key: C, repeat: R, optional: x } = l(k[1]);
            return S[C] = {
              pos: v++,
              repeat: R,
              optional: x
            }, R ? x ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)";
          } else
            return "/" + (0, n.escapeStringRegexp)(p);
        }).join(""),
        groups: S
      };
    }
    function h(g) {
      const { parameterizedRoute: m, groups: S } = i(g);
      return {
        re: new RegExp("^" + m + "(?:/)?$"),
        groups: S
      };
    }
    function f() {
      let g = 0;
      return () => {
        let m = "", S = ++g;
        for (; S > 0; )
          m += String.fromCharCode(97 + (S - 1) % 26), S = Math.floor((S - 1) / 26);
        return m;
      };
    }
    function b(g) {
      let { getSafeRouteKey: m, segment: S, routeKeys: v, keyPrefix: p } = g;
      const { key: A, optional: k, repeat: C } = l(S);
      let R = A.replace(/\W/g, "");
      p && (R = "" + p + R);
      let x = !1;
      return (R.length === 0 || R.length > 30) && (x = !0), isNaN(parseInt(R.slice(0, 1))) || (x = !0), x && (R = m()), p ? v[R] = "" + p + A : v[R] = "" + A, C ? k ? "(?:/(?<" + R + ">.+?))?" : "/(?<" + R + ">.+?)" : "/(?<" + R + ">[^/]+?)";
    }
    function y(g, m) {
      const S = (0, o.removeTrailingSlash)(g).slice(1).split("/"), v = f(), p = {};
      return {
        namedParameterizedRoute: S.map((A) => {
          const k = r.INTERCEPTION_ROUTE_MARKERS.some((R) => A.startsWith(R)), C = A.match(/\[((?:\[.*\])|.+)\]/);
          return k && C ? b({
            getSafeRouteKey: v,
            segment: C[1],
            routeKeys: p,
            keyPrefix: m ? s : void 0
          }) : C ? b({
            getSafeRouteKey: v,
            segment: C[1],
            routeKeys: p,
            keyPrefix: m ? a : void 0
          }) : "/" + (0, n.escapeStringRegexp)(A);
        }).join(""),
        routeKeys: p
      };
    }
    function c(g, m) {
      const S = y(g, m);
      return {
        ...h(g),
        namedRegex: "^" + S.namedParameterizedRoute + "(?:/)?$",
        routeKeys: S.routeKeys
      };
    }
    function u(g, m) {
      const { parameterizedRoute: S } = i(g), { catchAll: v = !0 } = m;
      if (S === "/")
        return {
          namedRegex: "^/" + (v ? ".*" : "") + "$"
        };
      const { namedParameterizedRoute: p } = y(g, !1);
      let A = v ? "(?:(/.*)?)" : "";
      return {
        namedRegex: "^" + p + A + "$"
      };
    }
  }(er)), er;
}
var wn;
function va() {
  return wn || (wn = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "interpolateAs", {
      enumerable: !0,
      get: function() {
        return n;
      }
    });
    const t = fa(), r = ya();
    function n(o, a, s) {
      let l = "";
      const i = (0, r.getRouteRegex)(o), h = i.groups, f = (
        // Try to match the dynamic route against the asPath
        (a !== o ? (0, t.getRouteMatcher)(i)(a) : "") || // Fall back to reading the values from the href
        // TODO: should this take priority; also need to change in the router.
        s
      );
      l = o;
      const b = Object.keys(h);
      return b.every((y) => {
        let c = f[y] || "";
        const { repeat: u, optional: g } = h[y];
        let m = "[" + (u ? "..." : "") + y + "]";
        return g && (m = (c ? "" : "/") + "[" + m + "]"), u && !Array.isArray(c) && (c = [
          c
        ]), (g || y in f) && // Interpolate group into data URL if present
        (l = l.replace(m, u ? c.map(
          // these values should be fully encoded instead of just
          // path delimiter escaped since they are being inserted
          // into the URL and we expect URL encoded segments
          // when parsing dynamic route params
          (S) => encodeURIComponent(S)
        ).join("/") : encodeURIComponent(c)) || "/");
      }) || (l = ""), {
        params: b,
        result: l
      };
    }
  }(Yt)), Yt;
}
var _n;
function xa() {
  return _n || (_n = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "resolveHref", {
      enumerable: !0,
      get: function() {
        return f;
      }
    });
    const r = uo(), n = fo(), o = ia(), a = At(), s = kt(), l = mo(), i = da(), h = va();
    function f(b, y, c) {
      let u, g = typeof y == "string" ? y : (0, n.formatWithValidation)(y);
      const m = g.match(/^[a-zA-Z]{1,}:\/\//), S = m ? g.slice(m[0].length) : g;
      if ((S.split("?", 1)[0] || "").match(/(\/\/|\\)/)) {
        console.error("Invalid href '" + g + "' passed to next/router in page: '" + b.pathname + "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");
        const p = (0, a.normalizeRepeatedSlashes)(S);
        g = (m ? m[0] : "") + p;
      }
      if (!(0, l.isLocalURL)(g))
        return c ? [
          g
        ] : g;
      try {
        u = new URL(g.startsWith("#") ? b.asPath : b.pathname, "http://n");
      } catch {
        u = new URL("/", "http://n");
      }
      try {
        const p = new URL(g, u);
        p.pathname = (0, s.normalizePathTrailingSlash)(p.pathname);
        let A = "";
        if ((0, i.isDynamicRoute)(p.pathname) && p.searchParams && c) {
          const C = (0, r.searchParamsToUrlQuery)(p.searchParams), { result: R, params: x } = (0, h.interpolateAs)(p.pathname, p.pathname, C);
          R && (A = (0, n.formatWithValidation)({
            pathname: R,
            hash: p.hash,
            query: (0, o.omit)(C, x)
          }));
        }
        const k = p.origin === u.origin ? p.href.slice(p.origin.length) : p.href;
        return c ? [
          k,
          A || k
        ] : k;
      } catch {
        return c ? [
          g
        ] : g;
      }
    }
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(it, it.exports)), it.exports;
}
var ut = { exports: {} }, ar = {}, ir = {}, Rn;
function go() {
  return Rn || (Rn = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "addPathPrefix", {
      enumerable: !0,
      get: function() {
        return r;
      }
    });
    const t = Lr();
    function r(n, o) {
      if (!n.startsWith("/") || !o)
        return n;
      const { pathname: a, query: s, hash: l } = (0, t.parsePath)(n);
      return "" + o + a + s + l;
    }
  }(ir)), ir;
}
var Cn;
function wa() {
  return Cn || (Cn = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "addLocale", {
      enumerable: !0,
      get: function() {
        return n;
      }
    });
    const t = go(), r = ho();
    function n(o, a, s, l) {
      if (!a || a === s) return o;
      const i = o.toLowerCase();
      return !l && ((0, r.pathHasPrefix)(i, "/api") || (0, r.pathHasPrefix)(i, "/" + a.toLowerCase())) ? o : (0, t.addPathPrefix)(o, "/" + a);
    }
  }(ar)), ar;
}
var Nn;
function _a() {
  return Nn || (Nn = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "addLocale", {
      enumerable: !0,
      get: function() {
        return n;
      }
    });
    const r = kt(), n = function(o) {
      for (var a = arguments.length, s = new Array(a > 1 ? a - 1 : 0), l = 1; l < a; l++)
        s[l - 1] = arguments[l];
      return process.env.__NEXT_I18N_SUPPORT ? (0, r.normalizePathTrailingSlash)(wa().addLocale(o, ...s)) : o;
    };
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(ut, ut.exports)), ut.exports;
}
var lr = {}, En;
function Ra() {
  return En || (En = 1, function(e) {
    "use client";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    function t(h, f) {
      for (var b in f) Object.defineProperty(h, b, {
        enumerable: !0,
        get: f[b]
      });
    }
    t(e, {
      CacheStates: function() {
        return o;
      },
      AppRouterContext: function() {
        return a;
      },
      LayoutRouterContext: function() {
        return s;
      },
      GlobalLayoutRouterContext: function() {
        return l;
      },
      TemplateContext: function() {
        return i;
      }
    });
    const n = /* @__PURE__ */ Se._(fe);
    var o;
    (function(h) {
      h.LAZY_INITIALIZED = "LAZYINITIALIZED", h.DATA_FETCH = "DATAFETCH", h.READY = "READY";
    })(o || (o = {}));
    const a = n.default.createContext(null), s = n.default.createContext(null), l = n.default.createContext(null), i = n.default.createContext(null);
    process.env.NODE_ENV !== "production" && (a.displayName = "AppRouterContext", s.displayName = "LayoutRouterContext", l.displayName = "GlobalLayoutRouterContext", i.displayName = "TemplateContext");
  }(lr)), lr;
}
var dt = { exports: {} }, ft = { exports: {} }, An;
function Ca() {
  return An || (An = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function r(a, s) {
      for (var l in s) Object.defineProperty(a, l, {
        enumerable: !0,
        get: s[l]
      });
    }
    r(t, {
      requestIdleCallback: function() {
        return n;
      },
      cancelIdleCallback: function() {
        return o;
      }
    });
    const n = typeof self < "u" && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(a) {
      let s = Date.now();
      return self.setTimeout(function() {
        a({
          didTimeout: !1,
          timeRemaining: function() {
            return Math.max(0, 50 - (Date.now() - s));
          }
        });
      }, 1);
    }, o = typeof self < "u" && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(a) {
      return clearTimeout(a);
    };
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(ft, ft.exports)), ft.exports;
}
var kn;
function Na() {
  return kn || (kn = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "useIntersection", {
      enumerable: !0,
      get: function() {
        return h;
      }
    });
    const r = fe, n = Ca(), o = typeof IntersectionObserver == "function", a = /* @__PURE__ */ new Map(), s = [];
    function l(f) {
      const b = {
        root: f.root || null,
        margin: f.rootMargin || ""
      }, y = s.find((m) => m.root === b.root && m.margin === b.margin);
      let c;
      if (y && (c = a.get(y), c))
        return c;
      const u = /* @__PURE__ */ new Map(), g = new IntersectionObserver((m) => {
        m.forEach((S) => {
          const v = u.get(S.target), p = S.isIntersecting || S.intersectionRatio > 0;
          v && p && v(p);
        });
      }, f);
      return c = {
        id: b,
        observer: g,
        elements: u
      }, s.push(b), a.set(b, c), c;
    }
    function i(f, b, y) {
      const { id: c, observer: u, elements: g } = l(y);
      return g.set(f, b), u.observe(f), function() {
        if (g.delete(f), u.unobserve(f), g.size === 0) {
          u.disconnect(), a.delete(c);
          const S = s.findIndex((v) => v.root === c.root && v.margin === c.margin);
          S > -1 && s.splice(S, 1);
        }
      };
    }
    function h(f) {
      let { rootRef: b, rootMargin: y, disabled: c } = f;
      const u = c || !o, [g, m] = (0, r.useState)(!1), S = (0, r.useRef)(null), v = (0, r.useCallback)((A) => {
        S.current = A;
      }, []);
      (0, r.useEffect)(() => {
        if (o) {
          if (u || g) return;
          const A = S.current;
          if (A && A.tagName)
            return i(A, (C) => C && m(C), {
              root: b == null ? void 0 : b.current,
              rootMargin: y
            });
        } else if (!g) {
          const A = (0, n.requestIdleCallback)(() => m(!0));
          return () => (0, n.cancelIdleCallback)(A);
        }
      }, [
        u,
        y,
        b,
        g,
        S.current
      ]);
      const p = (0, r.useCallback)(() => {
        m(!1);
      }, []);
      return [
        v,
        g,
        p
      ];
    }
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(dt, dt.exports)), dt.exports;
}
var pt = { exports: {} }, ht = { exports: {} }, cr = {}, Sn;
function Ea() {
  return Sn || (Sn = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "normalizeLocalePath", {
      enumerable: !0,
      get: function() {
        return t;
      }
    });
    function t(r, n) {
      let o;
      const a = r.split("/");
      return (n || []).some((s) => a[1] && a[1].toLowerCase() === s.toLowerCase() ? (o = s, a.splice(1, 1), r = a.join("/") || "/", !0) : !1), {
        pathname: r,
        detectedLocale: o
      };
    }
  }(cr)), cr;
}
var Pn;
function Aa() {
  return Pn || (Pn = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "normalizeLocalePath", {
      enumerable: !0,
      get: function() {
        return r;
      }
    });
    const r = (n, o) => process.env.__NEXT_I18N_SUPPORT ? Ea().normalizeLocalePath(n, o) : {
      pathname: n,
      detectedLocale: void 0
    };
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(ht, ht.exports)), ht.exports;
}
var mt = { exports: {} }, ur = {}, On;
function ka() {
  return On || (On = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "detectDomainLocale", {
      enumerable: !0,
      get: function() {
        return t;
      }
    });
    function t(r, n, o) {
      if (r) {
        o && (o = o.toLowerCase());
        for (const l of r) {
          var a, s;
          const i = (a = l.domain) == null ? void 0 : a.split(":", 1)[0].toLowerCase();
          if (n === i || o === l.defaultLocale.toLowerCase() || (s = l.locales) != null && s.some((h) => h.toLowerCase() === o))
            return l;
        }
      }
    }
  }(ur)), ur;
}
var Tn;
function Sa() {
  return Tn || (Tn = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "detectDomainLocale", {
      enumerable: !0,
      get: function() {
        return r;
      }
    });
    const r = function() {
      for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++)
        o[a] = arguments[a];
      if (process.env.__NEXT_I18N_SUPPORT)
        return ka().detectDomainLocale(...o);
    };
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(mt, mt.exports)), mt.exports;
}
var Mn;
function Pa() {
  return Mn || (Mn = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "getDomainLocale", {
      enumerable: !0,
      get: function() {
        return o;
      }
    });
    const r = kt(), n = process.env.__NEXT_ROUTER_BASEPATH || "";
    function o(a, s, l, i) {
      if (process.env.__NEXT_I18N_SUPPORT) {
        const h = Aa().normalizeLocalePath, f = Sa().detectDomainLocale, b = s || h(a, l).detectedLocale, y = f(i, void 0, b);
        if (y) {
          const c = "http" + (y.http ? "" : "s") + "://", u = b === y.defaultLocale ? "" : "/" + b;
          return "" + c + y.domain + (0, r.normalizePathTrailingSlash)("" + n + u + a);
        }
        return !1;
      } else
        return !1;
    }
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(pt, pt.exports)), pt.exports;
}
var gt = { exports: {} }, In;
function Oa() {
  return In || (In = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "addBasePath", {
      enumerable: !0,
      get: function() {
        return a;
      }
    });
    const r = go(), n = kt(), o = process.env.__NEXT_ROUTER_BASEPATH || "";
    function a(s, l) {
      return (0, n.normalizePathTrailingSlash)(process.env.__NEXT_MANUAL_CLIENT_BASE_PATH && !l ? s : (0, r.addPathPrefix)(s, o));
    }
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(gt, gt.exports)), gt.exports;
}
var bt = { exports: {} }, $n;
function Ta() {
  return $n || ($n = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function r(b, y) {
      for (var c in y) Object.defineProperty(b, c, {
        enumerable: !0,
        get: y[c]
      });
    }
    r(t, {
      PrefetchKind: function() {
        return f;
      },
      ACTION_REFRESH: function() {
        return n;
      },
      ACTION_NAVIGATE: function() {
        return o;
      },
      ACTION_RESTORE: function() {
        return a;
      },
      ACTION_SERVER_PATCH: function() {
        return s;
      },
      ACTION_PREFETCH: function() {
        return l;
      },
      ACTION_FAST_REFRESH: function() {
        return i;
      },
      ACTION_SERVER_ACTION: function() {
        return h;
      }
    });
    const n = "refresh", o = "navigate", a = "restore", s = "server-patch", l = "prefetch", i = "fast-refresh", h = "server-action";
    var f;
    (function(b) {
      b.AUTO = "auto", b.FULL = "full", b.TEMPORARY = "temporary";
    })(f || (f = {})), (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(bt, bt.exports)), bt.exports;
}
(function(e, t) {
  "use client";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "default", {
    enumerable: !0,
    get: function() {
      return k;
    }
  });
  const n = /* @__PURE__ */ Se._(fe), o = xa(), a = mo(), s = fo(), l = At(), i = _a(), h = lo(), f = Ra(), b = Na(), y = Pa(), c = Oa(), u = Ta(), g = /* @__PURE__ */ new Set();
  function m(C, R, x, I, w, E) {
    if (typeof window > "u" || !E && !(0, a.isLocalURL)(R))
      return;
    if (!I.bypassPrefetchedCheck) {
      const P = (
        // Let the link's locale prop override the default router locale.
        typeof I.locale < "u" ? I.locale : "locale" in C ? C.locale : void 0
      ), N = R + "%" + x + "%" + P;
      if (g.has(N))
        return;
      g.add(N);
    }
    const _ = E ? C.prefetch(R, w) : C.prefetch(R, x, I);
    Promise.resolve(_).catch((P) => {
      if (process.env.NODE_ENV !== "production")
        throw P;
    });
  }
  function S(C) {
    const x = C.currentTarget.getAttribute("target");
    return x && x !== "_self" || C.metaKey || C.ctrlKey || C.shiftKey || C.altKey || // triggers resource download
    C.nativeEvent && C.nativeEvent.which === 2;
  }
  function v(C, R, x, I, w, E, _, P, N, z) {
    const { nodeName: T } = C.currentTarget;
    if (T.toUpperCase() === "A" && (S(C) || // app-router supports external urls out of the box so it shouldn't short-circuit here as support for e.g. `replace` is added in the app-router.
    !N && !(0, a.isLocalURL)(x)))
      return;
    C.preventDefault();
    const M = () => {
      const D = _ ?? !0;
      "beforePopState" in R ? R[w ? "replace" : "push"](x, I, {
        shallow: E,
        locale: P,
        scroll: D
      }) : R[w ? "replace" : "push"](I || x, {
        forceOptimisticNavigation: !z,
        scroll: D
      });
    };
    N ? n.default.startTransition(M) : M();
  }
  function p(C) {
    return typeof C == "string" ? C : (0, s.formatUrl)(C);
  }
  const k = /* @__PURE__ */ n.default.forwardRef(function(R, x) {
    let I;
    const { href: w, as: E, children: _, prefetch: P = null, passHref: N, replace: z, shallow: T, scroll: U, locale: M, onClick: D, onMouseEnter: j, onTouchStart: ee, legacyBehavior: F = !1, ...W } = R;
    I = _, F && (typeof I == "string" || typeof I == "number") && (I = /* @__PURE__ */ n.default.createElement("a", null, I));
    const G = n.default.useContext(h.RouterContext), te = n.default.useContext(f.AppRouterContext), oe = G ?? te, K = !G, L = P !== !1, pe = P === null ? u.PrefetchKind.AUTO : u.PrefetchKind.FULL;
    if (process.env.NODE_ENV !== "production") {
      let ne = function(X) {
        return new Error("Failed prop type: The prop `" + X.key + "` expects a " + X.expected + " in `<Link>`, but got `" + X.actual + "` instead." + (typeof window < "u" ? `
Open your browser's console to view the Component stack trace.` : ""));
      };
      Object.keys({
        href: !0
      }).forEach((X) => {
        if (X === "href" && (R[X] == null || typeof R[X] != "string" && typeof R[X] != "object"))
          throw ne({
            key: X,
            expected: "`string` or `object`",
            actual: R[X] === null ? "null" : typeof R[X]
          });
      }), Object.keys({
        as: !0,
        replace: !0,
        scroll: !0,
        shallow: !0,
        passHref: !0,
        prefetch: !0,
        locale: !0,
        onClick: !0,
        onMouseEnter: !0,
        onTouchStart: !0,
        legacyBehavior: !0
      }).forEach((X) => {
        const B = typeof R[X];
        if (X === "as") {
          if (R[X] && B !== "string" && B !== "object")
            throw ne({
              key: X,
              expected: "`string` or `object`",
              actual: B
            });
        } else if (X === "locale") {
          if (R[X] && B !== "string")
            throw ne({
              key: X,
              expected: "`string`",
              actual: B
            });
        } else if (X === "onClick" || X === "onMouseEnter" || X === "onTouchStart") {
          if (R[X] && B !== "function")
            throw ne({
              key: X,
              expected: "`function`",
              actual: B
            });
        } else if ((X === "replace" || X === "scroll" || X === "shallow" || X === "passHref" || X === "prefetch" || X === "legacyBehavior") && R[X] != null && B !== "boolean")
          throw ne({
            key: X,
            expected: "`boolean`",
            actual: B
          });
      });
      const V = n.default.useRef(!1);
      R.prefetch && !V.current && !K && (V.current = !0, console.warn("Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated"));
    }
    if (process.env.NODE_ENV !== "production" && K && !E) {
      let ne;
      if (typeof w == "string" ? ne = w : typeof w == "object" && typeof w.pathname == "string" && (ne = w.pathname), ne && ne.split("/").some((q) => q.startsWith("[") && q.endsWith("]")))
        throw new Error("Dynamic href `" + ne + "` found in <Link> while using the `/app` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href");
    }
    const { href: ie, as: se } = n.default.useMemo(() => {
      if (!G) {
        const q = p(w);
        return {
          href: q,
          as: E ? p(E) : q
        };
      }
      const [ne, ye] = (0, o.resolveHref)(G, w, !0);
      return {
        href: ne,
        as: E ? (0, o.resolveHref)(G, E) : ye || ne
      };
    }, [
      G,
      w,
      E
    ]), $ = n.default.useRef(ie), O = n.default.useRef(se);
    let re;
    if (F)
      if (process.env.NODE_ENV === "development") {
        D && console.warn('"onClick" was passed to <Link> with `href` of `' + w + '` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link'), j && console.warn('"onMouseEnter" was passed to <Link> with `href` of `' + w + '` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link');
        try {
          re = n.default.Children.only(I);
        } catch {
          throw I ? new Error("Multiple children were passed to <Link> with `href` of `" + w + "` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children" + (typeof window < "u" ? ` 
Open your browser's console to view the Component stack trace.` : "")) : new Error("No children were passed to <Link> with `href` of `" + w + "` but one child is required https://nextjs.org/docs/messages/link-no-children");
        }
      } else
        re = n.default.Children.only(I);
    else if (process.env.NODE_ENV === "development" && (I == null ? void 0 : I.type) === "a")
      throw new Error(`Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.
Learn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor`);
    const ue = F ? re && typeof re == "object" && re.ref : x, [Ne, ge, de] = (0, b.useIntersection)({
      rootMargin: "200px"
    }), Ae = n.default.useCallback((ne) => {
      (O.current !== se || $.current !== ie) && (de(), O.current = se, $.current = ie), Ne(ne), ue && (typeof ue == "function" ? ue(ne) : typeof ue == "object" && (ue.current = ne));
    }, [
      se,
      ue,
      ie,
      de,
      Ne
    ]);
    n.default.useEffect(() => {
      process.env.NODE_ENV === "production" && oe && (!ge || !L || m(oe, ie, se, {
        locale: M
      }, {
        kind: pe
      }, K));
    }, [
      se,
      ie,
      ge,
      M,
      L,
      G == null ? void 0 : G.locale,
      oe,
      K,
      pe
    ]);
    const xe = {
      ref: Ae,
      onClick(ne) {
        if (process.env.NODE_ENV !== "production" && !ne)
          throw new Error('Component rendered inside next/link has to pass click event to "onClick" prop.');
        !F && typeof D == "function" && D(ne), F && re.props && typeof re.props.onClick == "function" && re.props.onClick(ne), oe && (ne.defaultPrevented || v(ne, oe, ie, se, z, T, U, M, K, L));
      },
      onMouseEnter(ne) {
        !F && typeof j == "function" && j(ne), F && re.props && typeof re.props.onMouseEnter == "function" && re.props.onMouseEnter(ne), oe && ((!L || process.env.NODE_ENV === "development") && K || m(oe, ie, se, {
          locale: M,
          priority: !0,
          // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
          bypassPrefetchedCheck: !0
        }, {
          kind: pe
        }, K));
      },
      onTouchStart(ne) {
        !F && typeof ee == "function" && ee(ne), F && re.props && typeof re.props.onTouchStart == "function" && re.props.onTouchStart(ne), oe && (!L && K || m(oe, ie, se, {
          locale: M,
          priority: !0,
          // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
          bypassPrefetchedCheck: !0
        }, {
          kind: pe
        }, K));
      }
    };
    if ((0, l.isAbsoluteUrl)(se))
      xe.href = se;
    else if (!F || N || re.type === "a" && !("href" in re.props)) {
      const ne = typeof M < "u" ? M : G == null ? void 0 : G.locale, ye = (G == null ? void 0 : G.isLocaleDomain) && (0, y.getDomainLocale)(se, ne, G == null ? void 0 : G.locales, G == null ? void 0 : G.domainLocales);
      xe.href = ye || (0, c.addBasePath)((0, i.addLocale)(se, ne, G == null ? void 0 : G.defaultLocale));
    }
    return F ? /* @__PURE__ */ n.default.cloneElement(re, xe) : /* @__PURE__ */ n.default.createElement("a", {
      ...W,
      ...xe
    }, I);
  });
  (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
})(xr, xr.exports);
var Ma = xr.exports, Ia = Ma;
const $a = /* @__PURE__ */ oo(Ia);
function bo({ href: e, variant: t = "standard", icon: r, children: n, className: o = "" }) {
  const a = "hover:underline", s = {
    standard: "text-accent-500 hover:text-accent-600",
    discreet: "text-gray-600 hover:text-gray-800",
    danger: "text-red-500 hover:text-red-600",
    icon: "flex items-center gap-2 p-2 rounded-lg hover:bg-glass-light transition-colors"
  }, l = [
    t === "icon" ? "" : a,
    s[t] || s.standard,
    o
  ].join(" ").trim();
  return /* @__PURE__ */ H($a, { href: e, className: l, children: [
    r,
    n
  ] });
}
function Xl({ items: e = [] }) {
  return /* @__PURE__ */ d("nav", { className: "flex items-center space-x-2 text-sm", "aria-label": "Breadcrumb", children: e.map((t, r) => /* @__PURE__ */ H("div", { className: "flex items-center", children: [
    r > 0 && /* @__PURE__ */ d(Tr, { size: 16, className: "mx-2 text-gray-400" }),
    t.href ? /* @__PURE__ */ d(bo, { href: t.href, children: t.label }) : /* @__PURE__ */ d("span", { className: "text-gray-600", children: t.label })
  ] }, r)) });
}
const St = fe.forwardRef(
  ({
    children: e,
    variant: t = "primary",
    size: r = "medium",
    isLoading: n = !1,
    startIcon: o,
    endIcon: a,
    ...s
  }, l) => {
    const i = "btn-fluid", h = {
      primary: "",
      // Default style
      outline: "btn-outline",
      ghost: "btn-ghost"
    }, f = {
      small: "text-sm py-2 px-3",
      medium: "",
      // Default size
      large: "text-lg py-4 px-6"
    }, b = [
      i,
      h[t],
      f[r],
      s.className || ""
    ].join(" ").trim();
    return /* @__PURE__ */ H("button", { ref: l, className: b, disabled: n || s.disabled, ...s, children: [
      n && /* @__PURE__ */ d("span", { className: "animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" }),
      !n && /* @__PURE__ */ d("span", { className: "btn-icon", children: o }),
      e,
      !n && /* @__PURE__ */ d("span", { className: "btn-icon", children: a })
    ] });
  }
);
St.displayName = "Button";
const zr = "-", La = (e) => {
  const t = ja(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (s) => {
      const l = s.split(zr);
      return l[0] === "" && l.length !== 1 && l.shift(), yo(l, t) || za(s);
    },
    getConflictingClassGroupIds: (s, l) => {
      const i = r[s] || [];
      return l && n[s] ? [...i, ...n[s]] : i;
    }
  };
}, yo = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), o = n ? yo(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(zr);
  return (s = t.validators.find(({
    validator: l
  }) => l(a))) == null ? void 0 : s.classGroupId;
}, Ln = /^\[(.+)\]$/, za = (e) => {
  if (Ln.test(e)) {
    const t = Ln.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, ja = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in r)
    wr(r[o], n, o, t);
  return n;
}, wr = (e, t, r, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? t : zn(t, o);
      a.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (Ha(o)) {
        wr(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([a, s]) => {
      wr(s, zn(t, a), r, n);
    });
  });
}, zn = (e, t) => {
  let r = e;
  return t.split(zr).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, Ha = (e) => e.isThemeGetter, Da = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const o = (a, s) => {
    r.set(a, s), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let s = r.get(a);
      if (s !== void 0)
        return s;
      if ((s = n.get(a)) !== void 0)
        return o(a, s), s;
    },
    set(a, s) {
      r.has(a) ? r.set(a, s) : o(a, s);
    }
  };
}, _r = "!", Rr = ":", qa = Rr.length, Ua = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let n = (o) => {
    const a = [];
    let s = 0, l = 0, i = 0, h;
    for (let u = 0; u < o.length; u++) {
      let g = o[u];
      if (s === 0 && l === 0) {
        if (g === Rr) {
          a.push(o.slice(i, u)), i = u + qa;
          continue;
        }
        if (g === "/") {
          h = u;
          continue;
        }
      }
      g === "[" ? s++ : g === "]" ? s-- : g === "(" ? l++ : g === ")" && l--;
    }
    const f = a.length === 0 ? o : o.substring(i), b = Ga(f), y = b !== f, c = h && h > i ? h - i : void 0;
    return {
      modifiers: a,
      hasImportantModifier: y,
      baseClassName: b,
      maybePostfixModifierPosition: c
    };
  };
  if (t) {
    const o = t + Rr, a = n;
    n = (s) => s.startsWith(o) ? a(s.substring(o.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: s,
      maybePostfixModifierPosition: void 0
    };
  }
  if (r) {
    const o = n;
    n = (a) => r({
      className: a,
      parseClassName: o
    });
  }
  return n;
}, Ga = (e) => e.endsWith(_r) ? e.substring(0, e.length - 1) : e.startsWith(_r) ? e.substring(1) : e, Ba = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((n) => [n, !0]));
  return (n) => {
    if (n.length <= 1)
      return n;
    const o = [];
    let a = [];
    return n.forEach((s) => {
      s[0] === "[" || t[s] ? (o.push(...a.sort(), s), a = []) : a.push(s);
    }), o.push(...a.sort()), o;
  };
}, Va = (e) => ({
  cache: Da(e.cacheSize),
  parseClassName: Ua(e),
  sortModifiers: Ba(e),
  ...La(e)
}), Fa = /\s+/, Wa = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o,
    sortModifiers: a
  } = t, s = [], l = e.trim().split(Fa);
  let i = "";
  for (let h = l.length - 1; h >= 0; h -= 1) {
    const f = l[h], {
      isExternal: b,
      modifiers: y,
      hasImportantModifier: c,
      baseClassName: u,
      maybePostfixModifierPosition: g
    } = r(f);
    if (b) {
      i = f + (i.length > 0 ? " " + i : i);
      continue;
    }
    let m = !!g, S = n(m ? u.substring(0, g) : u);
    if (!S) {
      if (!m) {
        i = f + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (S = n(u), !S) {
        i = f + (i.length > 0 ? " " + i : i);
        continue;
      }
      m = !1;
    }
    const v = a(y).join(":"), p = c ? v + _r : v, A = p + S;
    if (s.includes(A))
      continue;
    s.push(A);
    const k = o(S, m);
    for (let C = 0; C < k.length; ++C) {
      const R = k[C];
      s.push(p + R);
    }
    i = f + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function Ka() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = vo(t)) && (n && (n += " "), n += r);
  return n;
}
const vo = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = vo(e[n])) && (r && (r += " "), r += t);
  return r;
};
function Xa(e, ...t) {
  let r, n, o, a = s;
  function s(i) {
    const h = t.reduce((f, b) => b(f), e());
    return r = Va(h), n = r.cache.get, o = r.cache.set, a = l, l(i);
  }
  function l(i) {
    const h = n(i);
    if (h)
      return h;
    const f = Wa(i, r);
    return o(i, f), f;
  }
  return function() {
    return a(Ka.apply(null, arguments));
  };
}
const _e = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, xo = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, wo = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Qa = /^\d+\/\d+$/, Za = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ya = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ja = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, ei = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ti = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, qe = (e) => Qa.test(e), ae = (e) => !!e && !Number.isNaN(Number(e)), Ie = (e) => !!e && Number.isInteger(Number(e)), dr = (e) => e.endsWith("%") && ae(e.slice(0, -1)), Pe = (e) => Za.test(e), ri = () => !0, ni = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Ya.test(e) && !Ja.test(e)
), _o = () => !1, oi = (e) => ei.test(e), si = (e) => ti.test(e), ai = (e) => !Q(e) && !Z(e), ii = (e) => Fe(e, No, _o), Q = (e) => xo.test(e), je = (e) => Fe(e, Eo, ni), fr = (e) => Fe(e, fi, ae), jn = (e) => Fe(e, Ro, _o), li = (e) => Fe(e, Co, si), yt = (e) => Fe(e, Ao, oi), Z = (e) => wo.test(e), Ze = (e) => We(e, Eo), ci = (e) => We(e, pi), Hn = (e) => We(e, Ro), ui = (e) => We(e, No), di = (e) => We(e, Co), vt = (e) => We(e, Ao, !0), Fe = (e, t, r) => {
  const n = xo.exec(e);
  return n ? n[1] ? t(n[1]) : r(n[2]) : !1;
}, We = (e, t, r = !1) => {
  const n = wo.exec(e);
  return n ? n[1] ? t(n[1]) : r : !1;
}, Ro = (e) => e === "position" || e === "percentage", Co = (e) => e === "image" || e === "url", No = (e) => e === "length" || e === "size" || e === "bg-size", Eo = (e) => e === "length", fi = (e) => e === "number", pi = (e) => e === "family-name", Ao = (e) => e === "shadow", hi = () => {
  const e = _e("color"), t = _e("font"), r = _e("text"), n = _e("font-weight"), o = _e("tracking"), a = _e("leading"), s = _e("breakpoint"), l = _e("container"), i = _e("spacing"), h = _e("radius"), f = _e("shadow"), b = _e("inset-shadow"), y = _e("text-shadow"), c = _e("drop-shadow"), u = _e("blur"), g = _e("perspective"), m = _e("aspect"), S = _e("ease"), v = _e("animate"), p = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], A = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], k = () => [...A(), Z, Q], C = () => ["auto", "hidden", "clip", "visible", "scroll"], R = () => ["auto", "contain", "none"], x = () => [Z, Q, i], I = () => [qe, "full", "auto", ...x()], w = () => [Ie, "none", "subgrid", Z, Q], E = () => ["auto", {
    span: ["full", Ie, Z, Q]
  }, Ie, Z, Q], _ = () => [Ie, "auto", Z, Q], P = () => ["auto", "min", "max", "fr", Z, Q], N = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], z = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], T = () => ["auto", ...x()], U = () => [qe, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...x()], M = () => [e, Z, Q], D = () => [...A(), Hn, jn, {
    position: [Z, Q]
  }], j = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], ee = () => ["auto", "cover", "contain", ui, ii, {
    size: [Z, Q]
  }], F = () => [dr, Ze, je], W = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    h,
    Z,
    Q
  ], G = () => ["", ae, Ze, je], te = () => ["solid", "dashed", "dotted", "double"], oe = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], K = () => [ae, dr, Hn, jn], L = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    u,
    Z,
    Q
  ], pe = () => ["none", ae, Z, Q], ie = () => ["none", ae, Z, Q], se = () => [ae, Z, Q], $ = () => [qe, "full", ...x()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Pe],
      breakpoint: [Pe],
      color: [ri],
      container: [Pe],
      "drop-shadow": [Pe],
      ease: ["in", "out", "in-out"],
      font: [ai],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Pe],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Pe],
      shadow: [Pe],
      spacing: ["px", ae],
      text: [Pe],
      "text-shadow": [Pe],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", qe, Q, Z, m]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [ae, Q, Z, l]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": p()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": p()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: k()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: C()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": C()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": C()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: R()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": R()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": R()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: I()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": I()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": I()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: I()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: I()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: I()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: I()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: I()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: I()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [Ie, "auto", Z, Q]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [qe, "full", "auto", l, ...x()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [ae, qe, "auto", "initial", "none", Q]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", ae, Z, Q]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", ae, Z, Q]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Ie, "first", "last", "none", Z, Q]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": w()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: E()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": _()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": _()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": w()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: E()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": _()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": _()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": P()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": P()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: x()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": x()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": x()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...N(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...z(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...z()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...N()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...z(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...z(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": N()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...z(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...z()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: x()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: x()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: x()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: x()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: x()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: x()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: x()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: x()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: x()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: T()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: T()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: T()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: T()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: T()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: T()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: T()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: T()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: T()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": x()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": x()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: U()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [l, "screen", ...U()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          l,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...U()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          l,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [s]
          },
          ...U()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...U()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...U()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...U()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, Ze, je]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [n, Z, fr]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", dr, Q]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ci, Q, t]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [o, Z, Q]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [ae, "none", Z, fr]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          a,
          ...x()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Z, Q]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", Z, Q]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: M()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: M()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...te(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [ae, "from-font", "auto", Z, je]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: M()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [ae, "auto", Z, Q]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: x()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Z, Q]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", Z, Q]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: D()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: j()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ee()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Ie, Z, Q],
          radial: ["", Z, Q],
          conic: [Ie, Z, Q]
        }, di, li]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: M()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: F()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: F()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: F()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: M()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: M()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: M()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: W()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": W()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": W()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": W()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": W()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": W()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": W()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": W()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": W()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": W()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": W()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": W()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": W()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": W()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": W()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: G()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": G()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": G()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": G()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": G()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": G()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": G()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": G()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": G()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": G()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": G()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...te(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...te(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: M()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": M()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": M()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": M()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": M()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": M()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": M()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": M()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": M()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: M()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...te(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ae, Z, Q]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", ae, Ze, je]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: M()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          f,
          vt,
          yt
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: M()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", b, vt, yt]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": M()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: G()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: M()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [ae, je]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": M()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": G()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": M()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", y, vt, yt]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": M()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [ae, Z, Q]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...oe(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": oe()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [ae]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": K()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": K()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": M()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": M()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": K()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": K()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": M()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": M()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": K()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": K()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": M()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": M()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": K()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": K()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": M()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": M()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": K()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": K()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": M()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": M()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": K()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": K()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": M()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": M()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": K()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": K()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": M()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": M()
      }],
      "mask-image-radial": [{
        "mask-radial": [Z, Q]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": K()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": K()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": M()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": M()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": A()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [ae]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": K()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": K()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": M()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": M()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: D()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: j()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: ee()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", Z, Q]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          Z,
          Q
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: L()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [ae, Z, Q]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [ae, Z, Q]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          c,
          vt,
          yt
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": M()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", ae, Z, Q]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [ae, Z, Q]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", ae, Z, Q]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ae, Z, Q]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", ae, Z, Q]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          Z,
          Q
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": L()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [ae, Z, Q]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [ae, Z, Q]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", ae, Z, Q]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [ae, Z, Q]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", ae, Z, Q]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [ae, Z, Q]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ae, Z, Q]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", ae, Z, Q]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": x()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": x()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": x()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", Z, Q]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [ae, "initial", Z, Q]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", S, Z, Q]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [ae, Z, Q]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", v, Z, Q]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [g, Z, Q]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": k()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: pe()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": pe()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": pe()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": pe()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: ie()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ie()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ie()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ie()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: se()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": se()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": se()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [Z, Q, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: k()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: $()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": $()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": $()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": $()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: M()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: M()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Z, Q]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": x()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": x()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": x()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": x()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": x()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": x()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": x()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": x()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": x()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": x()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": x()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": x()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": x()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": x()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": x()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": x()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": x()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": x()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", Z, Q]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...M()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [ae, Ze, je, fr]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...M()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, mi = /* @__PURE__ */ Xa(hi), gi = Rt(void 0), bi = gi.Provider, yi = fe.forwardRef((e, t) => {
  const {
    className: r,
    children: n,
    isPressable: o = !1,
    onPress: a,
    onPressStart: s,
    onPressEnd: l,
    onPressChange: i,
    onPressUp: h,
    ...f
  } = e, { pressProps: b, isPressed: y } = Ko({
    onPress: a,
    onPressStart: s,
    onPressEnd: l,
    onPressChange: i,
    onPressUp: h,
    isDisabled: !o,
    ref: t
  }), c = {}, u = mi(
    "glass-card",
    o && "cursor-pointer hover:shadow-lg hover:transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200",
    y && "transform scale-[0.98] shadow-lg",
    r
  );
  return /* @__PURE__ */ d(bi, { value: c, children: /* @__PURE__ */ d("div", { ref: t, className: u, ...o ? b : {}, ...f, children: n }) });
});
yi.displayName = "Card";
const vi = fe.forwardRef(({ children: e, className: t, ...r }, n) => /* @__PURE__ */ d("div", { ref: n, className: `card-body ${t || ""}`, ...r, children: e }));
vi.displayName = "CardBody";
const xi = fe.forwardRef(({ children: e, className: t, ...r }, n) => /* @__PURE__ */ d("p", { ref: n, className: `card-description ${t || ""}`, ...r, children: e }));
xi.displayName = "CardDescription";
const wi = fe.forwardRef(({ children: e, className: t, ...r }, n) => /* @__PURE__ */ d("div", { ref: n, className: `card-footer ${t || ""}`, ...r, children: e }));
wi.displayName = "CardFooter";
const _i = fe.forwardRef(({ children: e, className: t, ...r }, n) => /* @__PURE__ */ d("div", { ref: n, className: `card-header ${t || ""}`, ...r, children: e }));
_i.displayName = "CardHeader";
const Ri = fe.forwardRef(({ children: e, className: t, ...r }, n) => /* @__PURE__ */ d("h3", { ref: n, className: `card-title ${t || ""}`, ...r, children: e }));
Ri.displayName = "CardTitle";
function Dn({ label: e, defaultChecked: t = !1, onChange: r, name: n }) {
  const [o, a] = be(t);
  return /* @__PURE__ */ H("label", { className: "flex items-center space-x-3 cursor-pointer", children: [
    /* @__PURE__ */ d(
      "input",
      {
        type: "checkbox",
        name: n,
        checked: o,
        onChange: (s) => {
          a(s.target.checked), r(s);
        },
        className: "sr-only"
      }
    ),
    /* @__PURE__ */ d(
      "div",
      {
        className: `w-5 h-5 rounded border-2 flex items-center justify-center ${o ? "bg-accent-500 border-accent-500" : "border-gray-300"}`,
        children: o && /* @__PURE__ */ d(Or, { size: 12, className: "text-white" })
      }
    ),
    e && /* @__PURE__ */ d("span", { className: "text-sm", children: e })
  ] });
}
const Ql = ({ label: e, selected: t = !1, onClick: r, className: n = "" }) => {
  const l = `px-3 py-1 rounded-full text-sm border transition-colors cursor-pointer ${t ? "bg-accent-500 border-accent-500 text-white" : "bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200"} ${n}`;
  return /* @__PURE__ */ d(
    "button",
    {
      type: "button",
      className: l,
      onClick: r,
      children: e
    }
  );
};
function Zl({ title: e, children: t }) {
  const [r, n] = be(!1);
  return /* @__PURE__ */ H("div", { className: "glass-surface rounded-lg overflow-hidden", children: [
    /* @__PURE__ */ H(
      "div",
      {
        className: "flex items-center justify-between p-4 cursor-pointer hover:bg-glass-light",
        onClick: () => n(!r),
        children: [
          /* @__PURE__ */ d("h4", { className: "font-medium", children: e }),
          /* @__PURE__ */ d(
            Ve,
            {
              size: 16,
              className: `transform transition-transform ${r ? "rotate-180" : ""}`
            }
          )
        ]
      }
    ),
    r && /* @__PURE__ */ d("div", { className: "px-4 pb-4 bg-gray-50", children: /* @__PURE__ */ d("div", { className: "pt-4 border-t border-gray-200", children: t }) })
  ] });
}
function Be({ icon: e, onClick: t, className: r = "" }) {
  return /* @__PURE__ */ d(
    "button",
    {
      onClick: t,
      className: `p-3 rounded-lg glass-surface hover:bg-accent-500 hover:text-white transition-colors ${r}`.trim(),
      children: e
    }
  );
}
const Yl = ({ logo: e, title: t, header: r, navContent: n, children: o }) => {
  const [a, s] = be(!1);
  return /* @__PURE__ */ H("div", { className: "flex h-full", children: [
    /* @__PURE__ */ d(
      "div",
      {
        className: `glass-surface transition-all duration-300 border-r border-gray-200 dark:border-gray-700 ${a ? "w-20" : "w-64"}`,
        children: /* @__PURE__ */ H("div", { className: "flex flex-col h-full", children: [
          /* @__PURE__ */ H("div", { className: "relative", children: [
            /* @__PURE__ */ d("div", { className: "absolute top-3 right-3 z-10", children: /* @__PURE__ */ d(
              Be,
              {
                onClick: () => s(!a),
                icon: a ? /* @__PURE__ */ d(to, { size: 18 }) : /* @__PURE__ */ d(ze, { size: 18 }),
                "aria-label": "Toggle sidebar"
              }
            ) }),
            r,
            e || t && /* @__PURE__ */ H(
              "div",
              {
                className: `flex flex-col items-center pt-12 pb-4 px-4 ${a ? "pb-6" : "pb-8"}`,
                children: [
                  e && /* @__PURE__ */ d("div", { className: "flex-shrink-0 mb-3", children: e }),
                  !a && t && /* @__PURE__ */ d("div", { className: "font-semibold text-lg text-center leading-tight px-2", children: t })
                ]
              }
            ),
            /* @__PURE__ */ d("div", { className: "mx-4 mb-4 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" })
          ] }),
          /* @__PURE__ */ d("div", { className: "flex-grow overflow-y-auto px-4 pb-4", children: typeof n == "function" ? n(a) : n })
        ] })
      }
    ),
    /* @__PURE__ */ d("div", { className: "flex-1 p-4", children: o })
  ] });
};
function Jl({ size: e = "md", children: t }) {
  const r = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl"
  }, n = `
    ${r[e] || r.md}
    mx-auto 
    glass-surface 
    p-4 
    rounded 
    text-center
  `;
  return /* @__PURE__ */ d("div", { className: n.trim(), children: t });
}
function ec({ children: e, items: t }) {
  const [r, n] = be({ visible: !1, x: 0, y: 0 }), o = Ge((s) => {
    s.preventDefault(), n({ visible: !0, x: s.pageX, y: s.pageY });
  }, []), a = Ge(() => {
    r.visible && n((s) => ({ ...s, visible: !1 }));
  }, [r.visible]);
  return Le(() => (document.addEventListener("click", a), () => {
    document.removeEventListener("click", a);
  }), [a]), /* @__PURE__ */ H("div", { onContextMenu: o, children: [
    e,
    r.visible && /* @__PURE__ */ d(
      "div",
      {
        className: "fixed glass-surface rounded-lg shadow-lg z-50 py-1",
        style: { top: r.y, left: r.x },
        children: t.map((s, l) => s.separator ? /* @__PURE__ */ d("hr", { className: "my-1 border-gray-200" }, `sep-${l}`) : /* @__PURE__ */ H(
          "button",
          {
            onClick: s.onClick,
            className: "flex items-center w-full px-4 py-2 text-sm hover:bg-glass-light transition-colors",
            children: [
              s.icon && /* @__PURE__ */ d("span", { className: "mr-2", children: s.icon }),
              s.label
            ]
          },
          s.label
        ))
      }
    )
  ] });
}
function tc({ icon: e, name: t, email: r, role: n, status: o }) {
  const a = {
    Actif: "bg-green-100 text-green-700",
    Inactif: "bg-gray-100 text-gray-700"
  }, s = `
    glass-surface 
    p-4 
    rounded-lg 
    hover:shadow-lg 
    transition-shadow
  `, l = `
    px-2 
    py-1 
    rounded-full 
    text-xs 
    ${a[o] || "bg-red-100 text-red-700"}
  `;
  return /* @__PURE__ */ H("div", { className: s.trim(), children: [
    /* @__PURE__ */ H("div", { className: "flex items-center gap-3 mb-3", children: [
      /* @__PURE__ */ d("div", { className: "w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center", children: e || /* @__PURE__ */ d(Ir, { size: 20, className: "text-white" }) }),
      /* @__PURE__ */ H("div", { children: [
        /* @__PURE__ */ d("h4", { className: "font-medium", children: t }),
        /* @__PURE__ */ d("p", { className: "text-sm text-gray-600", children: r })
      ] })
    ] }),
    /* @__PURE__ */ H("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ d("span", { className: "text-sm text-gray-500", children: n }),
      /* @__PURE__ */ d("span", { className: l.trim(), children: o })
    ] })
  ] });
}
function rc({ isOpen: e, onClose: t, title: r, children: n }) {
  return e ? /* @__PURE__ */ H(Qn, { children: [
    /* @__PURE__ */ d(
      "div",
      {
        className: "fixed inset-0 bg-black bg-opacity-50 z-40",
        onClick: t
      }
    ),
    /* @__PURE__ */ d("div", { className: "fixed right-0 top-0 h-full w-80 glass-surface z-50 animate-slide-in", children: /* @__PURE__ */ H("div", { className: "p-6", children: [
      /* @__PURE__ */ H("div", { className: "flex justify-between items-center mb-6", children: [
        /* @__PURE__ */ d("h4", { className: "text-lg font-semibold", children: r }),
        /* @__PURE__ */ d(
          "button",
          {
            onClick: t,
            className: "p-2 hover:bg-glass-light rounded-lg transition-colors",
            children: /* @__PURE__ */ d(ze, { size: 20 })
          }
        )
      ] }),
      n
    ] }) })
  ] }) : null;
}
const ko = Rt({
  isOpen: !1,
  setIsOpen: () => {
  },
  onClose: () => {
  }
}), Ci = ko.Provider, jr = () => {
  const e = Pr(ko);
  if (!e)
    throw new Error("useDropdown must be used within a Dropdown component");
  return e;
};
function Te({ children: e, className: t = "" }) {
  const [r, n] = be(!1), o = Ct(null), a = Ge((l) => {
    o.current && !o.current.contains(l.target) && n(!1);
  }, []);
  Le(() => (document.addEventListener("mousedown", a), () => {
    document.removeEventListener("mousedown", a);
  }), [a]);
  const s = Ge(() => {
    n(!1);
  }, []);
  return /* @__PURE__ */ d(Ci, { value: { isOpen: r, setIsOpen: n, onClose: s }, children: /* @__PURE__ */ d("div", { className: `relative inline-block ${t}`, ref: o, children: e }) });
}
function Ni({ children: e, asChild: t }) {
  const { isOpen: r, setIsOpen: n } = jr(), o = (a) => {
    a.preventDefault(), n(!r);
  };
  return t ? e ? fe.cloneElement(e, {
    onClick: (a) => {
      o(a), e.props.onClick && e.props.onClick(a);
    }
  }) : null : /* @__PURE__ */ d(
    "button",
    {
      onClick: o,
      className: "inline-flex items-center justify-center",
      children: e
    }
  );
}
function Ei({ children: e, align: t = "left", className: r = "" }) {
  const { isOpen: n } = jr(), o = Ct(null), [a, s] = be({}), l = t === "right" || t === "end" ? "right-0" : t === "center" ? "left-1/2 -translate-x-1/2" : "left-0";
  return Le(() => {
    if (n && o.current) {
      const i = o.current.getBoundingClientRect(), h = window.innerWidth, f = window.innerHeight, b = {};
      if (i.right > h && (b.right = "0", b.left = "auto", t === "center" && (b.transform = "none")), i.bottom > f) {
        const y = i.bottom - f;
        b.maxHeight = `${i.height - y - 10}px`, b.overflowY = "auto";
      }
      s(b);
    } else n || s({});
  }, [n, t]), n ? /* @__PURE__ */ d(
    "div",
    {
      ref: o,
      className: `absolute ${l} mt-2 glass-surface rounded-lg shadow-lg z-10 ${r}`,
      style: a,
      children: /* @__PURE__ */ d("div", { className: "py-1", children: e })
    }
  ) : null;
}
function Ai({ children: e, onClick: t, className: r = "", asChild: n }) {
  const { onClose: o } = jr(), a = (s) => {
    t && t(s), o();
  };
  return n ? e ? fe.cloneElement(e, {
    onClick: (s) => {
      a(s), e.props.onClick && e.props.onClick(s);
    },
    className: `flex items-center w-full px-4 py-2 text-sm transition-colors hover:bg-glass-light ${r} ${e.props.className || ""}`
  }) : null : /* @__PURE__ */ d(
    "button",
    {
      onClick: a,
      className: `flex items-center w-full px-4 py-2 text-sm transition-colors hover:bg-glass-light ${r}`,
      children: e
    }
  );
}
function ki() {
  return /* @__PURE__ */ d("hr", { className: "my-1 border-gray-200" });
}
Te.Trigger = Ni;
Te.Menu = Ei;
Te.Item = Ai;
Te.Separator = ki;
function nc({ icon: e, title: t, message: r, action: n }) {
  const o = fe.isValidElement(e);
  return o || e && (e.type, { ...e.props }), /* @__PURE__ */ H("div", { className: "text-center py-12", children: [
    o ? fe.cloneElement(e, {
      size: e.props.size || 48,
      className: `mx-auto text-gray-400 mb-4 ${e.props.className || ""}`.trim()
    }) : e ? fe.createElement(e, { size: 48, className: "mx-auto text-gray-400 mb-4" }) : /* @__PURE__ */ d(gr, { size: 48, className: "mx-auto text-gray-400 mb-4" }),
    /* @__PURE__ */ d("h4", { className: "text-lg font-medium text-gray-600 mb-2", children: t }),
    /* @__PURE__ */ d("p", { className: "text-gray-500 mb-4", children: r }),
    n && /* @__PURE__ */ H("button", { className: "btn-fluid", onClick: n.onClick, children: [
      n.icon || /* @__PURE__ */ d(As, { size: 16 }),
      n.label
    ] })
  ] });
}
function oc({ data: e, renderItem: t, renderExpandedContent: r }) {
  const [n, o] = be({}), a = (s) => {
    o((l) => ({
      ...l,
      [s]: !l[s]
    }));
  };
  return !e || e.length === 0 ? /* @__PURE__ */ d("p", { className: "text-center text-gray-500", children: "Aucune donnée à afficher." }) : /* @__PURE__ */ d("div", { className: "space-y-2", children: e.map((s) => /* @__PURE__ */ H(
    "div",
    {
      className: "glass-card-border overflow-hidden rounded-lg",
      children: [
        /* @__PURE__ */ H(
          "div",
          {
            className: "flex items-center justify-between p-4 cursor-pointer hover:bg-base-200/50",
            onClick: () => a(s.id),
            children: [
              /* @__PURE__ */ d("div", { className: "flex-grow", children: t(s) }),
              /* @__PURE__ */ d("div", { className: "ml-4", children: n[s.id] ? /* @__PURE__ */ d(eo, { size: 20, className: "text-gray-500" }) : /* @__PURE__ */ d(Ve, { size: 20, className: "text-gray-500" }) })
            ]
          }
        ),
        n[s.id] && /* @__PURE__ */ d("div", { className: "px-4 pt-2 pb-4 bg-base-200/30 border-t border-base-300/50", children: r(s) })
      ]
    },
    s.id
  )) });
}
function sc({ onFileSelect: e, label: t, acceptedTypes: r }) {
  return /* @__PURE__ */ H("div", { className: "border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-accent-500 transition-colors", children: [
    /* @__PURE__ */ d(Ds, { size: 48, className: "mx-auto text-gray-400 mb-4" }),
    /* @__PURE__ */ d("p", { className: "text-gray-600 mb-2", children: t || "Glissez-déposez vos fichiers ici ou" }),
    /* @__PURE__ */ H("label", { className: "btn-fluid cursor-pointer", children: [
      "Parcourir les fichiers",
      /* @__PURE__ */ d("input", { type: "file", className: "hidden", onChange: (o) => {
        const a = o.target.files[0];
        a && e && e(a);
      } })
    ] }),
    r && /* @__PURE__ */ d("p", { className: "text-xs text-gray-500 mt-2", children: r })
  ] });
}
const Si = ({ title: e, links: t }) => /* @__PURE__ */ H("div", { children: [
  /* @__PURE__ */ d("h4", { className: "font-semibold text-base-content mb-4", children: e }),
  /* @__PURE__ */ d("ul", { className: "space-y-2", children: t.map((r) => /* @__PURE__ */ d("li", { children: /* @__PURE__ */ d(bo, { href: r.href, className: "text-sm text-base-content/80 hover:text-primary transition-colors", children: r.text }) }, r.href + r.text)) })
] });
function ac({ sections: e, socialLinks: t, copyrightText: r }) {
  return !e || !t || !r ? null : /* @__PURE__ */ d("footer", { className: "glass-surface p-8 rounded-lg w-full", children: /* @__PURE__ */ H("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ d("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8", children: e.map((n) => /* @__PURE__ */ d(Si, { title: n.title, links: n.links }, n.title)) }),
    /* @__PURE__ */ H("div", { className: "mt-8 pt-8 border-t border-base-300/50 flex flex-col sm:flex-row justify-between items-center", children: [
      /* @__PURE__ */ d("p", { className: "text-sm text-base-content/70", children: r }),
      /* @__PURE__ */ d("div", { className: "flex items-center gap-2 mt-4 sm:mt-0", children: t.map((n) => /* @__PURE__ */ d(Be, { asChild: !0, "aria-label": n.label, variant: "ghost", children: /* @__PURE__ */ d("a", { href: n.href, target: "_blank", rel: "noopener noreferrer", children: n.icon }) }, n.label)) })
    ] })
  ] }) });
}
const qn = ({
  children: e,
  variant: t = "standard",
  className: r = ""
}) => {
  const n = {
    standard: {
      icon: /* @__PURE__ */ d(Nt, { size: 12 }),
      color: "text-gray-500"
    },
    error: {
      icon: /* @__PURE__ */ d(et, { size: 12 }),
      color: "text-red-500"
    },
    success: {
      icon: /* @__PURE__ */ d(Or, { size: 12 }),
      color: "text-green-500"
    }
  }, o = n[t] || n.standard;
  return /* @__PURE__ */ H("p", { className: `text-sm flex items-center gap-1 mt-1 ${o.color} ${r}`, children: [
    o.icon,
    e
  ] });
}, So = fe.forwardRef(
  ({ label: e, name: t, startIcon: r, endIcon: n, className: o, error: a, helperText: s, ...l }, i) => {
    const h = [
      "input-fluid",
      r ? "pl-10" : "",
      n ? "pr-10" : "",
      a ? "border-red-500" : "",
      o
    ].join(" ").trim();
    return /* @__PURE__ */ H("div", { children: [
      e && /* @__PURE__ */ d("label", { htmlFor: t, className: "block text-sm font-medium mb-2", children: e }),
      /* @__PURE__ */ H("div", { className: "relative", children: [
        r && /* @__PURE__ */ d("div", { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400", children: fe.cloneElement(r, { size: 16 }) }),
        /* @__PURE__ */ d("input", { ref: i, id: t, name: t, className: h, ...l }),
        n && /* @__PURE__ */ d("div", { className: "absolute right-3 top-1/2 transform -translate-y-1/2", children: n })
      ] }),
      a && /* @__PURE__ */ d(qn, { variant: "error", children: a }),
      s && !a && /* @__PURE__ */ d(qn, { variant: "info", children: s })
    ] });
  }
);
So.displayName = "Input";
function Pi({
  currentPage: e,
  totalPages: t,
  onPageChange: r,
  totalResults: n,
  resultsPerPage: o = 10
}) {
  const a = (e - 1) * o + 1, s = Math.min(e * o, n), l = (h) => {
    h >= 1 && h <= t && r(h);
  };
  return /* @__PURE__ */ H("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ H("p", { className: "text-sm text-gray-600", children: [
      "Affichage ",
      a,
      " à ",
      s,
      " sur ",
      n,
      " résultats"
    ] }),
    /* @__PURE__ */ H("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ d(
        "button",
        {
          onClick: () => l(e - 1),
          disabled: e === 1,
          className: "p-2 rounded-lg hover:bg-glass-light transition-colors disabled:opacity-50",
          children: /* @__PURE__ */ d(os, { size: 16 })
        }
      ),
      (() => {
        var f;
        const h = [];
        for (let b = 1; b <= t; b++)
          b === 1 || b === t || b >= e - 1 && b <= e + 1 ? h.push(
            /* @__PURE__ */ d(
              "button",
              {
                onClick: () => l(b),
                className: `px-3 py-1 rounded-lg text-sm transition-colors ${e === b ? "bg-accent-500 text-white" : "hover:bg-glass-light"}`,
                children: b
              },
              b
            )
          ) : ((f = h[h.length - 1]) == null ? void 0 : f.key) !== "..." && h.push(/* @__PURE__ */ d("span", { className: "px-3 py-1", children: "..." }, "..."));
        return h;
      })(),
      /* @__PURE__ */ d(
        "button",
        {
          onClick: () => l(e + 1),
          disabled: e === t,
          className: "p-2 rounded-lg hover:bg-glass-light transition-colors disabled:opacity-50",
          children: /* @__PURE__ */ d(Tr, { size: 16 })
        }
      )
    ] })
  ] });
}
const Oi = [
  {
    id: 1,
    name: "Jean Dupont",
    email: "jean@example.com",
    role: "Admin",
    status: "Actif",
    date: "2024-01-15"
  },
  {
    id: 2,
    name: "Marie Martin",
    email: "marie@example.com",
    role: "User",
    status: "Inactif",
    date: "2024-01-10"
  },
  {
    id: 3,
    name: "Pierre Durand",
    email: "pierre@example.com",
    role: "User",
    status: "Actif",
    date: "2024-01-20"
  },
  {
    id: 4,
    name: "Sophie Leroy",
    email: "sophie@example.com",
    role: "Moderator",
    status: "Actif",
    date: "2024-01-05"
  },
  {
    id: 5,
    name: "Thomas Petit",
    email: "thomas@example.com",
    role: "User",
    status: "Suspendu",
    date: "2024-01-12"
  }
], Ti = (e) => {
  switch (e) {
    case "Admin":
      return "destructive";
    case "Moderator":
      return "warning";
    default:
      return "default";
  }
}, Mi = (e) => {
  switch (e) {
    case "Actif":
      return "success";
    case "Inactif":
      return "default";
    case "Suspendu":
      return "destructive";
    default:
      return "default";
  }
};
function ic({
  data: e = Oi,
  columns: t = [
    { field: "name", header: "Nom", sortable: !0, searchable: !0 },
    { field: "email", header: "Email", searchable: !0 },
    { field: "role", header: "Rôle", renderCell: (i) => /* @__PURE__ */ d(Jr, { variant: Ti(i.role), children: i.role }) },
    { field: "status", header: "Statut", renderCell: (i) => /* @__PURE__ */ d(Jr, { variant: Mi(i.status), children: i.status }) },
    { field: "date", header: "Date", sortable: !0 }
  ],
  actions: r = [
    { icon: /* @__PURE__ */ d(hs, { size: 16 }), label: "Voir", onClick: (i) => console.log("View", i) },
    { icon: /* @__PURE__ */ d(ro, { size: 16 }), label: "Modifier", onClick: (i) => console.log("Edit", i) },
    { icon: /* @__PURE__ */ d(no, { size: 16, className: "text-red-600" }), label: "Supprimer", onClick: (i) => console.log("Delete", i) }
  ],
  title: n = "Table Interactive",
  itemsPerPage: o = 5,
  selectable: a = !0,
  onRowSelect: s,
  onRowClick: l
}) {
  const [i, h] = be(""), [f, b] = be("asc"), [y, c] = be(""), [u, g] = be([]), [m, S] = be(1), [v, p] = be(e);
  Ot(() => {
    p(e);
  }, [e]);
  const A = (E) => {
    const _ = i === E && f === "asc" ? "desc" : "asc";
    h(E), b(_), p(
      (P) => [...P].sort((N, z) => N[E] < z[E] ? _ === "asc" ? -1 : 1 : N[E] > z[E] ? _ === "asc" ? 1 : -1 : 0)
    );
  }, k = (E) => {
    const _ = u.includes(E) ? u.filter((P) => P !== E) : [...u, E];
    if (g(_), s) {
      const P = v.filter((N) => _.includes(N.id));
      s(P);
    }
  }, C = (E) => {
    const _ = E.target.checked ? w.map((P) => P.id) : [];
    if (g(_), s) {
      const P = v.filter((N) => _.includes(N.id));
      s(P);
    }
  }, R = (E) => {
    S(E);
  }, x = Ot(() => {
    if (!y) return v;
    const E = t.filter((_) => _.searchable).map((_) => _.field);
    return v.filter((_) => E.some(
      (P) => String(_[P]).toLowerCase().includes(y.toLowerCase())
    ));
  }, [v, y, t]), I = Math.ceil(x.length / o), w = Ot(() => {
    const E = (m - 1) * o;
    return x.slice(E, E + o);
  }, [x, m, o]);
  return /* @__PURE__ */ H("section", { className: "glass-card", children: [
    n && /* @__PURE__ */ d("h3", { className: "text-xl font-semibold mb-6", children: n }),
    /* @__PURE__ */ H("div", { className: "flex flex-col sm:flex-row gap-4 mb-6", children: [
      /* @__PURE__ */ d("div", { className: "flex-1", children: /* @__PURE__ */ d(
        So,
        {
          type: "text",
          placeholder: "Rechercher...",
          value: y,
          onChange: (E) => c(E.target.value),
          startIcon: /* @__PURE__ */ d(br, { size: 20 })
        }
      ) }),
      /* @__PURE__ */ d(St, { variant: "ghost", startIcon: /* @__PURE__ */ d(Ps, { size: 16 }), children: "Filtrer" })
    ] }),
    /* @__PURE__ */ d("div", { className: "overflow-x-auto", children: /* @__PURE__ */ H("table", { className: "w-full", children: [
      /* @__PURE__ */ d("thead", { children: /* @__PURE__ */ H("tr", { className: "border-b border-gray-200", children: [
        a && /* @__PURE__ */ d("th", { className: "text-left p-3 w-10", children: /* @__PURE__ */ d(
          Dn,
          {
            checked: w.length > 0 && w.every((E) => u.includes(E.id)),
            onChange: C
          }
        ) }),
        t.map((E) => /* @__PURE__ */ d(
          "th",
          {
            className: `text-left p-3 ${E.sortable ? "cursor-pointer hover:bg-gray-50" : ""}`,
            onClick: () => E.sortable && A(E.field),
            children: /* @__PURE__ */ H("div", { className: "flex items-center gap-2", children: [
              E.header,
              E.sortable && i === E.field && (f === "asc" ? /* @__PURE__ */ d(eo, { size: 16 }) : /* @__PURE__ */ d(Ve, { size: 16 }))
            ] })
          },
          E.field
        )),
        r && r.length > 0 && /* @__PURE__ */ d("th", { className: "text-right p-3", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ d("tbody", { children: w.length === 0 ? /* @__PURE__ */ d("tr", { children: /* @__PURE__ */ d(
        "td",
        {
          colSpan: a ? t.length + (r.length > 0 ? 2 : 1) : t.length + (r.length > 0 ? 1 : 0),
          className: "p-6 text-center text-gray-500",
          children: "Aucun résultat trouvé"
        }
      ) }) : w.map((E) => /* @__PURE__ */ H(
        "tr",
        {
          className: `border-b border-gray-100 hover:bg-gray-50 ${l ? "cursor-pointer" : ""}`,
          onClick: () => l && l(E),
          children: [
            a && /* @__PURE__ */ d("td", { className: "p-3", onClick: (_) => _.stopPropagation(), children: /* @__PURE__ */ d(
              Dn,
              {
                checked: u.includes(E.id),
                onChange: () => k(E.id)
              }
            ) }),
            t.map((_) => /* @__PURE__ */ d("td", { className: "p-3", children: _.renderCell ? _.renderCell(E) : /* @__PURE__ */ d("span", { className: _.field === "name" ? "font-medium" : "text-gray-600", children: E[_.field] }) }, `${E.id}-${_.field}`)),
            r && r.length > 0 && /* @__PURE__ */ d("td", { className: "p-3 text-right", onClick: (_) => _.stopPropagation(), children: /* @__PURE__ */ d("div", { className: "flex justify-end gap-1", children: r.map((_, P) => /* @__PURE__ */ d(
              Be,
              {
                onClick: () => _.onClick(E),
                title: _.label,
                children: _.icon
              },
              P
            )) }) })
          ]
        },
        E.id
      )) })
    ] }) }),
    u.length > 0 && /* @__PURE__ */ d("div", { className: "mt-4 p-3 bg-blue-50 rounded-lg", children: /* @__PURE__ */ H("p", { className: "text-sm text-blue-700", children: [
      u.length,
      " élément(s) sélectionné(s)"
    ] }) }),
    x.length > o && /* @__PURE__ */ d("div", { className: "mt-6", children: /* @__PURE__ */ d(
      Pi,
      {
        currentPage: m,
        totalPages: I,
        onPageChange: R,
        totalResults: x.length,
        resultsPerPage: o
      }
    ) })
  ] });
}
const lc = ({
  children: e,
  variant: t = "standard",
  htmlFor: r,
  className: n = ""
}) => {
  const o = {
    standard: "text-foreground",
    required: "text-red-600",
    optional: "text-gray-500"
  }, a = t === "required" ? /* @__PURE__ */ H(Qn, { children: [
    e,
    " ",
    /* @__PURE__ */ d("span", { className: "text-red-600", children: "*" })
  ] }) : e;
  return /* @__PURE__ */ d(
    "label",
    {
      htmlFor: r,
      className: `block text-sm font-medium mb-1 ${o[t]} ${n}`,
      children: a
    }
  );
};
function cc({ isOpen: e, onClose: t, title: r, children: n }) {
  return e ? /* @__PURE__ */ d("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", onClick: t, children: /* @__PURE__ */ H("div", { className: "modal-fluid show w-full max-w-md", onClick: (o) => o.stopPropagation(), children: [
    /* @__PURE__ */ H("div", { className: "flex justify-between items-center mb-4", children: [
      /* @__PURE__ */ d("h4", { className: "text-lg font-semibold", children: r }),
      /* @__PURE__ */ d(Be, { icon: /* @__PURE__ */ d(ze, { size: 20 }), onClick: t })
    ] }),
    /* @__PURE__ */ d("div", { children: n })
  ] }) }) : null;
}
function uc({ type: e = "info", message: t, timestamp: r, onClose: n }) {
  const o = {
    info: /* @__PURE__ */ d(Nt, { size: 20, className: "text-blue-500 mt-0.5" }),
    success: /* @__PURE__ */ d(Mr, { size: 20, className: "text-green-500 mt-0.5" }),
    warning: /* @__PURE__ */ d(et, { size: 20, className: "text-yellow-500 mt-0.5" }),
    error: /* @__PURE__ */ d(ze, { size: 20, className: "text-red-500 mt-0.5" })
  };
  return /* @__PURE__ */ d("div", { className: `max-w-sm w-full p-4 rounded-lg shadow-lg ${{
    info: "bg-blue-50 border border-blue-200",
    success: "bg-green-50 border border-green-200",
    warning: "bg-yellow-50 border border-yellow-200",
    error: "bg-red-50 border border-red-200"
  }[e]}`, children: /* @__PURE__ */ H("div", { className: "flex items-start gap-3", children: [
    o[e],
    /* @__PURE__ */ H("div", { className: "flex-1", children: [
      /* @__PURE__ */ d("p", { className: "text-sm font-medium", children: t }),
      r && /* @__PURE__ */ d("p", { className: "text-xs text-gray-500 mt-1", children: new Date(r).toLocaleTimeString() })
    ] }),
    /* @__PURE__ */ d("button", { onClick: n, className: "text-gray-400 hover:text-gray-600", children: /* @__PURE__ */ d(ze, { size: 16 }) })
  ] }) });
}
function dc({ value: e, label: t, showPercentage: r = !0 }) {
  const n = Math.max(0, Math.min(100, e));
  return /* @__PURE__ */ H("div", { children: [
    /* @__PURE__ */ H("div", { className: "flex justify-between mb-2", children: [
      t && /* @__PURE__ */ d("span", { className: "text-sm font-medium", children: t }),
      r && /* @__PURE__ */ H("span", { className: "text-sm text-gray-500", children: [
        n,
        "%"
      ] })
    ] }),
    /* @__PURE__ */ d(
      "div",
      {
        className: "progress-fluid",
        style: { "--progress-width": `${n}%` },
        role: "progressbar",
        "aria-valuenow": n,
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }
    )
  ] });
}
function fc({ options: e, name: t, selectedValue: r, onChange: n }) {
  return /* @__PURE__ */ d("div", { className: "space-y-3", children: e.map((o) => /* @__PURE__ */ H("label", { className: "flex items-center space-x-3 cursor-pointer", children: [
    /* @__PURE__ */ H("div", { className: "relative", children: [
      /* @__PURE__ */ d(
        "input",
        {
          type: "radio",
          name: t,
          value: o.value,
          checked: r === o.value,
          onChange: (a) => n(a.target.value),
          className: "sr-only"
        }
      ),
      /* @__PURE__ */ d(
        "div",
        {
          className: `w-5 h-5 rounded-full border-2 glass-surface flex items-center justify-center transition-colors ${r === o.value ? "bg-accent-500 border-accent-500" : "border-gray-300"}`,
          children: r === o.value && /* @__PURE__ */ d("div", { className: "w-2 h-2 bg-white rounded-full" })
        }
      )
    ] }),
    /* @__PURE__ */ d("span", { className: "text-sm", children: o.label })
  ] }, o.value)) });
}
const pc = ({ title: e, children: t, variant: r = "default", className: n = "" }) => {
  const o = "glass-surface rounded-lg", a = {
    default: "p-6",
    highlighted: "p-8 border-2 border-accent-500",
    gradient: "p-4 bg-gradient-to-r from-blue-50 to-purple-50"
  }, s = [
    o,
    a[r] || a.default,
    n
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ H("div", { className: s, children: [
    e && /* @__PURE__ */ d("h4", { className: "font-medium mb-2", children: e }),
    /* @__PURE__ */ d("p", { className: "text-sm text-gray-600", children: t })
  ] });
}, hc = ({ label: e, options: t, value: r, onChange: n, placeholder: o, disabled: a = !1 }) => {
  const [s, l] = be(!1), i = Ct(null), h = () => {
    a || l(!s);
  }, f = (c) => {
    n(c), l(!1);
  }, b = (c) => {
    i.current && !i.current.contains(c.target) && l(!1);
  };
  Le(() => (document.addEventListener("mousedown", b), () => {
    document.removeEventListener("mousedown", b);
  }), []);
  const y = t.find((c) => c.value === r);
  return /* @__PURE__ */ H("div", { className: "relative w-full", ref: i, children: [
    e && /* @__PURE__ */ d("label", { className: "block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300", children: e }),
    /* @__PURE__ */ H("div", { className: "relative", children: [
      /* @__PURE__ */ H(
        "button",
        {
          type: "button",
          className: `input-fluid w-full text-left flex items-center justify-between ${a ? "bg-gray-100 dark:bg-gray-800 cursor-not-allowed" : ""}`,
          onClick: h,
          disabled: a,
          "aria-haspopup": "listbox",
          "aria-expanded": s,
          children: [
            /* @__PURE__ */ d("span", { className: y ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400", children: y ? y.label : o }),
            /* @__PURE__ */ d(Ve, { size: 16, className: `transition-transform ${s ? "rotate-180" : ""}` })
          ]
        }
      ),
      s && /* @__PURE__ */ d("div", { className: "absolute top-full left-0 right-0 mt-1 glass-surface rounded-lg shadow-lg z-20 overflow-hidden", children: /* @__PURE__ */ d("div", { className: "py-1 max-h-60 overflow-y-auto", children: t.map((c) => /* @__PURE__ */ d(
        "button",
        {
          type: "button",
          className: "w-full text-left px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-glass-light dark:hover:bg-glass-dark-light transition-colors focus:outline-none focus:bg-glass-light dark:focus:bg-glass-dark-light",
          onClick: () => f(c.value),
          role: "option",
          "aria-selected": r === c.value,
          children: c.label
        },
        c.value
      )) }) })
    ] })
  ] });
};
function Po({
  item: e,
  isActive: t,
  isCollapsed: r = !1,
  onClick: n,
  level: o = 0,
  activePath: a = [],
  wrapper: s
}) {
  const [l, i] = be(() => {
    const c = e.resource || e.id;
    return a.includes(c);
  }), h = e.children && e.children.length > 0, f = e.icon, b = e.name || e.label;
  e.resource || e.id;
  const y = Ge((c) => {
    h && (c.preventDefault(), i(!l)), n && n(e);
  }, [h, l, e, n]);
  return /* @__PURE__ */ H("div", { className: "w-full", children: [
    /* @__PURE__ */ H(
      "button",
      {
        onClick: y,
        className: `nav-item w-full text-left ${h ? "justify-between" : ""}`,
        children: [
          /* @__PURE__ */ H("div", { className: "flex items-center gap-2", children: [
            f && /* @__PURE__ */ d(f, { size: 16 }),
            r ? "" : b
          ] }),
          h && /* @__PURE__ */ d(
            Tr,
            {
              size: 16,
              className: `transform transition-transform ${l ? "rotate-90" : ""}`
            }
          )
        ]
      }
    ),
    h && l && !r && /* @__PURE__ */ d("div", { className: "ml-4 mt-1 space-y-1 border-l pl-2 border-primary-100 dark:border-primary-800", children: e.children.map((c) => {
      const u = c.id, g = /* @__PURE__ */ d(
        Po,
        {
          item: c,
          isActive: a.includes(u),
          isCollapsed: r,
          onClick: n,
          level: o + 1,
          activePath: a,
          wrapper: s
        },
        u
      );
      if (s) {
        const m = s(g, c);
        return m && m.key !== void 0 && m.key !== null ? m : /* @__PURE__ */ d("div", { children: m }, u);
      } else
        return g;
    }) })
  ] });
}
function mc({
  items: e = [],
  isCollapsed: t = !1,
  onNavigate: r,
  activePath: n = [],
  className: o = "",
  wrapper: a
}) {
  const s = Ge((i) => {
    r && r(i);
  }, [r]), l = (i) => {
    const h = i.resource || i.id, f = /* @__PURE__ */ d(
      Po,
      {
        item: i,
        isActive: n.includes(h),
        isCollapsed: t,
        onClick: s,
        activePath: n,
        wrapper: a
      },
      h
    );
    return a ? a(f, i) : f;
  };
  return /* @__PURE__ */ d("nav", { className: `space-y-1 ${o}`, children: e.map((i) => {
    const h = i.resource || i.id;
    return /* @__PURE__ */ d("div", { children: l(i) }, h);
  }) });
}
function gc({ className: e, ...t }) {
  const n = ["animate-pulse rounded-md bg-gray-300 dark:bg-gray-700", e].filter(Boolean).join(" ");
  return /* @__PURE__ */ d(
    "div",
    {
      className: n,
      ...t
    }
  );
}
function bc({ message: e, time: t, onDismiss: r }) {
  return /* @__PURE__ */ H("div", { className: "flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg", children: [
    /* @__PURE__ */ H("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ d(Jn, { size: 16, className: "text-blue-600" }),
      /* @__PURE__ */ H("div", { children: [
        /* @__PURE__ */ d("p", { className: "text-sm font-medium", children: e }),
        t && /* @__PURE__ */ H("p", { className: "text-xs text-gray-500", children: [
          "il y a ",
          t
        ] })
      ] })
    ] }),
    /* @__PURE__ */ d(
      "button",
      {
        onClick: r,
        className: "p-1 hover:bg-blue-100 rounded",
        children: /* @__PURE__ */ d(ze, { size: 16 })
      }
    )
  ] });
}
const Un = {
  sm: "h-4 w-4",
  md: "h-8 w-8",
  lg: "h-12 w-12"
}, Gn = {
  sm: "h-1.5 w-1.5",
  md: "h-2 w-2",
  lg: "h-3 w-3"
};
function yc({ type: e = "spin", size: t = "md" }) {
  if (e === "dots") {
    const n = Gn[t] || Gn.md;
    return /* @__PURE__ */ H("div", { className: "flex space-x-1", children: [
      /* @__PURE__ */ d("div", { className: `${n} bg-accent-500 rounded-full animate-bounce` }),
      /* @__PURE__ */ d(
        "div",
        {
          className: `${n} bg-accent-500 rounded-full animate-bounce`,
          style: { animationDelay: "0.1s" }
        }
      ),
      /* @__PURE__ */ d(
        "div",
        {
          className: `${n} bg-accent-500 rounded-full animate-bounce`,
          style: { animationDelay: "0.2s" }
        }
      )
    ] });
  }
  const r = Un[t] || Un.md;
  return e === "pulse" ? /* @__PURE__ */ d("div", { className: `animate-pulse ${r} bg-accent-500 rounded-full` }) : /* @__PURE__ */ d(
    "div",
    {
      className: `animate-spin rounded-full ${r} border-4 border-accent-500 border-t-transparent`
    }
  );
}
const vc = ({
  direction: e = "vertical",
  spacing: t = 4,
  children: r,
  className: n = "",
  as: o = "div",
  ...a
}) => {
  const s = "flex", l = e === "vertical" ? "flex-col" : "flex-row", i = `gap-${t}`, h = [
    s,
    l,
    i,
    n
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ d(o, { className: h, ...a, children: r });
};
function xc({ title: e, value: t, change: r, trend: n }) {
  return /* @__PURE__ */ H("div", { className: "glass-surface p-4 rounded-lg", children: [
    /* @__PURE__ */ H("div", { className: "flex items-center justify-between mb-2", children: [
      /* @__PURE__ */ d("h4", { className: "text-sm font-medium text-gray-600", children: e }),
      n === "up" ? /* @__PURE__ */ d(js, { size: 16, className: "text-green-500" }) : /* @__PURE__ */ d(Ls, { size: 16, className: "text-red-500" })
    ] }),
    /* @__PURE__ */ d("p", { className: "text-2xl font-bold mb-1", children: t }),
    /* @__PURE__ */ H(
      "p",
      {
        className: `text-sm ${n === "up" ? "text-green-600" : "text-red-600"}`,
        children: [
          r,
          " ce mois"
        ]
      }
    )
  ] });
}
function wc({ steps: e, currentStep: t }) {
  return /* @__PURE__ */ d("div", { className: "flex items-center", children: e.map((r, n) => /* @__PURE__ */ H("div", { className: "flex items-center", children: [
    /* @__PURE__ */ H("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ d(
        "div",
        {
          className: `flex items-center justify-center w-8 h-8 rounded-full border-2 transition-colors duration-300 ${t >= r.id ? "bg-accent-500 border-accent-500 text-white" : "border-gray-300 text-gray-400"}`,
          children: t > r.id ? /* @__PURE__ */ d(Or, { size: 16 }) : r.id
        }
      ),
      /* @__PURE__ */ H("div", { className: "mt-2 text-center", children: [
        /* @__PURE__ */ d("div", { className: "text-sm font-medium", children: r.title }),
        /* @__PURE__ */ d("div", { className: "text-xs text-gray-500", children: r.description })
      ] })
    ] }),
    n < e.length - 1 && /* @__PURE__ */ d(
      "div",
      {
        className: `flex-1 h-0.5 mx-4 transition-colors duration-300 ${t > r.id ? "bg-accent-500" : "bg-gray-300"}`
      }
    )
  ] }, r.id)) });
}
var Bn = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, ke = (e) => !e || typeof e != "object" || Object.keys(e).length === 0, Ii = (e, t) => JSON.stringify(e) === JSON.stringify(t);
function Oo(e, t) {
  e.forEach(function(r) {
    Array.isArray(r) ? Oo(r, t) : t.push(r);
  });
}
function To(e) {
  let t = [];
  return Oo(e, t), t;
}
var Mo = (...e) => To(e).filter(Boolean), Io = (e, t) => {
  let r = {}, n = Object.keys(e), o = Object.keys(t);
  for (let a of n) if (o.includes(a)) {
    let s = e[a], l = t[a];
    Array.isArray(s) || Array.isArray(l) ? r[a] = Mo(l, s) : typeof s == "object" && typeof l == "object" ? r[a] = Io(s, l) : r[a] = l + " " + s;
  } else r[a] = e[a];
  for (let a of o) n.includes(a) || (r[a] = t[a]);
  return r;
}, Vn = (e) => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim();
const Hr = "-", $i = (e) => {
  const t = zi(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (s) => {
      const l = s.split(Hr);
      return l[0] === "" && l.length !== 1 && l.shift(), $o(l, t) || Li(s);
    },
    getConflictingClassGroupIds: (s, l) => {
      const i = r[s] || [];
      return l && n[s] ? [...i, ...n[s]] : i;
    }
  };
}, $o = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), o = n ? $o(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(Hr);
  return (s = t.validators.find(({
    validator: l
  }) => l(a))) == null ? void 0 : s.classGroupId;
}, Fn = /^\[(.+)\]$/, Li = (e) => {
  if (Fn.test(e)) {
    const t = Fn.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, zi = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in r)
    Cr(r[o], n, o, t);
  return n;
}, Cr = (e, t, r, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? t : Wn(t, o);
      a.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (ji(o)) {
        Cr(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([a, s]) => {
      Cr(s, Wn(t, a), r, n);
    });
  });
}, Wn = (e, t) => {
  let r = e;
  return t.split(Hr).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, ji = (e) => e.isThemeGetter, Hi = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const o = (a, s) => {
    r.set(a, s), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let s = r.get(a);
      if (s !== void 0)
        return s;
      if ((s = n.get(a)) !== void 0)
        return o(a, s), s;
    },
    set(a, s) {
      r.has(a) ? r.set(a, s) : o(a, s);
    }
  };
}, Nr = "!", Er = ":", Di = Er.length, qi = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let n = (o) => {
    const a = [];
    let s = 0, l = 0, i = 0, h;
    for (let u = 0; u < o.length; u++) {
      let g = o[u];
      if (s === 0 && l === 0) {
        if (g === Er) {
          a.push(o.slice(i, u)), i = u + Di;
          continue;
        }
        if (g === "/") {
          h = u;
          continue;
        }
      }
      g === "[" ? s++ : g === "]" ? s-- : g === "(" ? l++ : g === ")" && l--;
    }
    const f = a.length === 0 ? o : o.substring(i), b = Ui(f), y = b !== f, c = h && h > i ? h - i : void 0;
    return {
      modifiers: a,
      hasImportantModifier: y,
      baseClassName: b,
      maybePostfixModifierPosition: c
    };
  };
  if (t) {
    const o = t + Er, a = n;
    n = (s) => s.startsWith(o) ? a(s.substring(o.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: s,
      maybePostfixModifierPosition: void 0
    };
  }
  if (r) {
    const o = n;
    n = (a) => r({
      className: a,
      parseClassName: o
    });
  }
  return n;
}, Ui = (e) => e.endsWith(Nr) ? e.substring(0, e.length - 1) : e.startsWith(Nr) ? e.substring(1) : e, Gi = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((n) => [n, !0]));
  return (n) => {
    if (n.length <= 1)
      return n;
    const o = [];
    let a = [];
    return n.forEach((s) => {
      s[0] === "[" || t[s] ? (o.push(...a.sort(), s), a = []) : a.push(s);
    }), o.push(...a.sort()), o;
  };
}, Bi = (e) => ({
  cache: Hi(e.cacheSize),
  parseClassName: qi(e),
  sortModifiers: Gi(e),
  ...$i(e)
}), Vi = /\s+/, Fi = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o,
    sortModifiers: a
  } = t, s = [], l = e.trim().split(Vi);
  let i = "";
  for (let h = l.length - 1; h >= 0; h -= 1) {
    const f = l[h], {
      isExternal: b,
      modifiers: y,
      hasImportantModifier: c,
      baseClassName: u,
      maybePostfixModifierPosition: g
    } = r(f);
    if (b) {
      i = f + (i.length > 0 ? " " + i : i);
      continue;
    }
    let m = !!g, S = n(m ? u.substring(0, g) : u);
    if (!S) {
      if (!m) {
        i = f + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (S = n(u), !S) {
        i = f + (i.length > 0 ? " " + i : i);
        continue;
      }
      m = !1;
    }
    const v = a(y).join(":"), p = c ? v + Nr : v, A = p + S;
    if (s.includes(A))
      continue;
    s.push(A);
    const k = o(S, m);
    for (let C = 0; C < k.length; ++C) {
      const R = k[C];
      s.push(p + R);
    }
    i = f + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function Wi() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Lo(t)) && (n && (n += " "), n += r);
  return n;
}
const Lo = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Lo(e[n])) && (r && (r += " "), r += t);
  return r;
};
function Ar(e, ...t) {
  let r, n, o, a = s;
  function s(i) {
    const h = t.reduce((f, b) => b(f), e());
    return r = Bi(h), n = r.cache.get, o = r.cache.set, a = l, l(i);
  }
  function l(i) {
    const h = n(i);
    if (h)
      return h;
    const f = Fi(i, r);
    return o(i, f), f;
  }
  return function() {
    return a(Wi.apply(null, arguments));
  };
}
const Re = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, zo = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, jo = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Ki = /^\d+\/\d+$/, Xi = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Qi = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Zi = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Yi = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Ji = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ue = (e) => Ki.test(e), le = (e) => !!e && !Number.isNaN(Number(e)), He = (e) => !!e && Number.isInteger(Number(e)), Kn = (e) => e.endsWith("%") && le(e.slice(0, -1)), $e = (e) => Xi.test(e), el = () => !0, tl = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Qi.test(e) && !Zi.test(e)
), Dr = () => !1, rl = (e) => Yi.test(e), nl = (e) => Ji.test(e), ol = (e) => !Y(e) && !J(e), sl = (e) => Ke(e, qo, Dr), Y = (e) => zo.test(e), De = (e) => Ke(e, Uo, tl), pr = (e) => Ke(e, gl, le), al = (e) => Ke(e, Ho, Dr), il = (e) => Ke(e, Do, nl), ll = (e) => Ke(e, Dr, rl), J = (e) => jo.test(e), xt = (e) => Xe(e, Uo), cl = (e) => Xe(e, bl), ul = (e) => Xe(e, Ho), dl = (e) => Xe(e, qo), fl = (e) => Xe(e, Do), pl = (e) => Xe(e, yl, !0), Ke = (e, t, r) => {
  const n = zo.exec(e);
  return n ? n[1] ? t(n[1]) : r(n[2]) : !1;
}, Xe = (e, t, r = !1) => {
  const n = jo.exec(e);
  return n ? n[1] ? t(n[1]) : r : !1;
}, Ho = (e) => e === "position", hl = /* @__PURE__ */ new Set(["image", "url"]), Do = (e) => hl.has(e), ml = /* @__PURE__ */ new Set(["length", "size", "percentage"]), qo = (e) => ml.has(e), Uo = (e) => e === "length", gl = (e) => e === "number", bl = (e) => e === "family-name", yl = (e) => e === "shadow", kr = () => {
  const e = Re("color"), t = Re("font"), r = Re("text"), n = Re("font-weight"), o = Re("tracking"), a = Re("leading"), s = Re("breakpoint"), l = Re("container"), i = Re("spacing"), h = Re("radius"), f = Re("shadow"), b = Re("inset-shadow"), y = Re("drop-shadow"), c = Re("blur"), u = Re("perspective"), g = Re("aspect"), m = Re("ease"), S = Re("animate"), v = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], p = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], A = () => ["auto", "hidden", "clip", "visible", "scroll"], k = () => ["auto", "contain", "none"], C = () => [J, Y, i], R = () => [Ue, "full", "auto", ...C()], x = () => [He, "none", "subgrid", J, Y], I = () => ["auto", {
    span: ["full", He, J, Y]
  }, J, Y], w = () => [He, "auto", J, Y], E = () => ["auto", "min", "max", "fr", J, Y], _ = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline"], P = () => ["start", "end", "center", "stretch"], N = () => ["auto", ...C()], z = () => [Ue, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...C()], T = () => [e, J, Y], U = () => [Kn, De], M = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    h,
    J,
    Y
  ], D = () => ["", le, xt, De], j = () => ["solid", "dashed", "dotted", "double"], ee = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], F = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    c,
    J,
    Y
  ], W = () => ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", J, Y], G = () => ["none", le, J, Y], te = () => ["none", le, J, Y], oe = () => [le, J, Y], K = () => [Ue, "full", ...C()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [$e],
      breakpoint: [$e],
      color: [el],
      container: [$e],
      "drop-shadow": [$e],
      ease: ["in", "out", "in-out"],
      font: [ol],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [$e],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [$e],
      shadow: [$e],
      spacing: ["px", le],
      text: [$e],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", Ue, Y, J, g]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [le, Y, J, l]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": v()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": v()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...p(), Y, J]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: A()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": A()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": A()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: k()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": k()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": k()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: R()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": R()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": R()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: R()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: R()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: R()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: R()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: R()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: R()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [He, "auto", J, Y]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Ue, "full", "auto", l, ...C()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [le, Ue, "auto", "initial", "none", Y]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", le, J, Y]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", le, J, Y]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [He, "first", "last", "none", J, Y]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": x()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: I()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": w()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": w()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": x()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: I()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": w()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": w()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": E()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": E()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: C()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": C()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": C()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [..._(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...P(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...P()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ..._()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...P(), "baseline"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...P(), "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": _()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...P(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...P()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: C()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: C()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: C()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: C()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: C()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: C()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: C()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: C()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: C()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: N()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: N()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: N()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: N()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: N()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: N()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: N()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: N()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: N()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": C()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": C()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: z()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [l, "screen", ...z()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          l,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...z()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          l,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [s]
          },
          ...z()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", ...z()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "none", ...z()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", ...z()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, xt, De]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [n, J, pr]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Kn, Y]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [cl, Y, t]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [o, J, Y]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [le, "none", J, pr]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          a,
          ...C()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", J, Y]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", J, Y]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: T()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: T()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...j(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [le, "from-font", "auto", J, De]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: T()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [le, "auto", J, Y]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: C()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", J, Y]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", J, Y]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...p(), ul, al]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "space", "round"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", dl, sl]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, He, J, Y],
          radial: ["", J, Y],
          conic: [He, J, Y]
        }, fl, il]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: T()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: U()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: U()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: U()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: T()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: T()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: T()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: M()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": M()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": M()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": M()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": M()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": M()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": M()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": M()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": M()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": M()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": M()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": M()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": M()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": M()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": M()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: D()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": D()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": D()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": D()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": D()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": D()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": D()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": D()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": D()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": D()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": D()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...j(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...j(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: T()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": T()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": T()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": T()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": T()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": T()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": T()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": T()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": T()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: T()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...j(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [le, J, Y]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", le, xt, De]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          f,
          pl,
          ll
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: T()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", J, Y, b]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": T()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: D()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: T()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [le, De]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": T()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": D()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": T()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [le, J, Y]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ee(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ee()
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          J,
          Y
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: F()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [le, J, Y]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [le, J, Y]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          y,
          J,
          Y
        ]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", le, J, Y]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [le, J, Y]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", le, J, Y]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [le, J, Y]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", le, J, Y]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          J,
          Y
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": F()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [le, J, Y]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [le, J, Y]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", le, J, Y]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [le, J, Y]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", le, J, Y]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [le, J, Y]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [le, J, Y]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", le, J, Y]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": C()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": C()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": C()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", J, Y]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [le, "initial", J, Y]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", m, J, Y]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [le, J, Y]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", S, J, Y]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [u, J, Y]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": W()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: G()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": G()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": G()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": G()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: te()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": te()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": te()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": te()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: oe()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": oe()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": oe()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [J, Y, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: W()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: K()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": K()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": K()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": K()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: T()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: T()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", J, Y]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": C()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": C()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": C()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": C()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": C()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": C()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": C()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": C()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": C()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": C()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": C()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": C()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": C()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": C()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": C()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": C()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": C()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": C()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", J, Y]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...T()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [le, xt, De, pr]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...T()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["before", "after", "placeholder", "file", "marker", "selection", "first-line", "first-letter", "backdrop", "*", "**"]
  };
}, vl = (e, {
  cacheSize: t,
  prefix: r,
  experimentalParseClassName: n,
  extend: o = {},
  override: a = {}
}) => (Je(e, "cacheSize", t), Je(e, "prefix", r), Je(e, "experimentalParseClassName", n), wt(e.theme, a.theme), wt(e.classGroups, a.classGroups), wt(e.conflictingClassGroups, a.conflictingClassGroups), wt(e.conflictingClassGroupModifiers, a.conflictingClassGroupModifiers), Je(e, "orderSensitiveModifiers", a.orderSensitiveModifiers), _t(e.theme, o.theme), _t(e.classGroups, o.classGroups), _t(e.conflictingClassGroups, o.conflictingClassGroups), _t(e.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), Go(e, o, "orderSensitiveModifiers"), e), Je = (e, t, r) => {
  r !== void 0 && (e[t] = r);
}, wt = (e, t) => {
  if (t)
    for (const r in t)
      Je(e, r, t[r]);
}, _t = (e, t) => {
  if (t)
    for (const r in t)
      Go(e, t, r);
}, Go = (e, t, r) => {
  const n = t[r];
  n !== void 0 && (e[r] = e[r] ? e[r].concat(n) : n);
}, xl = (e, ...t) => typeof e == "function" ? Ar(kr, e, ...t) : Ar(() => vl(kr(), e), ...t), wl = /* @__PURE__ */ Ar(kr);
var _l = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, Bo = (e) => e || void 0, rt = (...e) => Bo(To(e).filter(Boolean).join(" ")), hr = null, Oe = {}, Sr = !1, Ye = (...e) => (t) => t.twMerge ? ((!hr || Sr) && (Sr = !1, hr = ke(Oe) ? wl : xl({ ...Oe, extend: { theme: Oe.theme, classGroups: Oe.classGroups, conflictingClassGroupModifiers: Oe.conflictingClassGroupModifiers, conflictingClassGroups: Oe.conflictingClassGroups, ...Oe.extend } })), Bo(hr(rt(e)))) : rt(e), Xn = (e, t) => {
  for (let r in t) e.hasOwnProperty(r) ? e[r] = rt(e[r], t[r]) : e[r] = t[r];
  return e;
}, Qe = (e, t) => {
  let { extend: r = null, slots: n = {}, variants: o = {}, compoundVariants: a = [], compoundSlots: s = [], defaultVariants: l = {} } = e, i = { ..._l, ...t }, h = r != null && r.base ? rt(r.base, e == null ? void 0 : e.base) : e == null ? void 0 : e.base, f = r != null && r.variants && !ke(r.variants) ? Io(o, r.variants) : o, b = r != null && r.defaultVariants && !ke(r.defaultVariants) ? { ...r.defaultVariants, ...l } : l;
  !ke(i.twMergeConfig) && !Ii(i.twMergeConfig, Oe) && (Sr = !0, Oe = i.twMergeConfig);
  let y = ke(r == null ? void 0 : r.slots), c = ke(n) ? {} : { base: rt(e == null ? void 0 : e.base, y && (r == null ? void 0 : r.base)), ...n }, u = y ? c : Xn({ ...r == null ? void 0 : r.slots }, ke(c) ? { base: e == null ? void 0 : e.base } : c), g = ke(r == null ? void 0 : r.compoundVariants) ? a : Mo(r == null ? void 0 : r.compoundVariants, a), m = (v) => {
    if (ke(f) && ke(n) && y) return Ye(h, v == null ? void 0 : v.class, v == null ? void 0 : v.className)(i);
    if (g && !Array.isArray(g)) throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof g}`);
    if (s && !Array.isArray(s)) throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof s}`);
    let p = (_, P, N = [], z) => {
      let T = N;
      if (typeof P == "string") T = T.concat(Vn(P).split(" ").map((U) => `${_}:${U}`));
      else if (Array.isArray(P)) T = T.concat(P.reduce((U, M) => U.concat(`${_}:${M}`), []));
      else if (typeof P == "object" && typeof z == "string") {
        for (let U in P) if (P.hasOwnProperty(U) && U === z) {
          let M = P[U];
          if (M && typeof M == "string") {
            let D = Vn(M);
            T[z] ? T[z] = T[z].concat(D.split(" ").map((j) => `${_}:${j}`)) : T[z] = D.split(" ").map((j) => `${_}:${j}`);
          } else Array.isArray(M) && M.length > 0 && (T[z] = M.reduce((D, j) => D.concat(`${_}:${j}`), []));
        }
      }
      return T;
    }, A = (_, P = f, N = null, z = null) => {
      var T;
      let U = P[_];
      if (!U || ke(U)) return null;
      let M = (T = z == null ? void 0 : z[_]) != null ? T : v == null ? void 0 : v[_];
      if (M === null) return null;
      let D = Bn(M), j = Array.isArray(i.responsiveVariants) && i.responsiveVariants.length > 0 || i.responsiveVariants === !0, ee = b == null ? void 0 : b[_], F = [];
      if (typeof D == "object" && j) for (let [te, oe] of Object.entries(D)) {
        let K = U[oe];
        if (te === "initial") {
          ee = oe;
          continue;
        }
        Array.isArray(i.responsiveVariants) && !i.responsiveVariants.includes(te) || (F = p(te, K, F, N));
      }
      let W = D != null && typeof D != "object" ? D : Bn(ee), G = U[W || "false"];
      return typeof F == "object" && typeof N == "string" && F[N] ? Xn(F, G) : F.length > 0 ? (F.push(G), N === "base" ? F.join(" ") : F) : G;
    }, k = () => f ? Object.keys(f).map((_) => A(_, f)) : null, C = (_, P) => {
      if (!f || typeof f != "object") return null;
      let N = new Array();
      for (let z in f) {
        let T = A(z, f, _, P), U = _ === "base" && typeof T == "string" ? T : T && T[_];
        U && (N[N.length] = U);
      }
      return N;
    }, R = {};
    for (let _ in v) v[_] !== void 0 && (R[_] = v[_]);
    let x = (_, P) => {
      var N;
      let z = typeof (v == null ? void 0 : v[_]) == "object" ? { [_]: (N = v[_]) == null ? void 0 : N.initial } : {};
      return { ...b, ...R, ...z, ...P };
    }, I = (_ = [], P) => {
      let N = [];
      for (let { class: z, className: T, ...U } of _) {
        let M = !0;
        for (let [D, j] of Object.entries(U)) {
          let ee = x(D, P)[D];
          if (Array.isArray(j)) {
            if (!j.includes(ee)) {
              M = !1;
              break;
            }
          } else {
            let F = (W) => W == null || W === !1;
            if (F(j) && F(ee)) continue;
            if (ee !== j) {
              M = !1;
              break;
            }
          }
        }
        M && (z && N.push(z), T && N.push(T));
      }
      return N;
    }, w = (_) => {
      let P = I(g, _);
      if (!Array.isArray(P)) return P;
      let N = {};
      for (let z of P) if (typeof z == "string" && (N.base = Ye(N.base, z)(i)), typeof z == "object") for (let [T, U] of Object.entries(z)) N[T] = Ye(N[T], U)(i);
      return N;
    }, E = (_) => {
      if (s.length < 1) return null;
      let P = {};
      for (let { slots: N = [], class: z, className: T, ...U } of s) {
        if (!ke(U)) {
          let M = !0;
          for (let D of Object.keys(U)) {
            let j = x(D, _)[D];
            if (j === void 0 || (Array.isArray(U[D]) ? !U[D].includes(j) : U[D] !== j)) {
              M = !1;
              break;
            }
          }
          if (!M) continue;
        }
        for (let M of N) P[M] = P[M] || [], P[M].push([z, T]);
      }
      return P;
    };
    if (!ke(n) || !y) {
      let _ = {};
      if (typeof u == "object" && !ke(u)) for (let P of Object.keys(u)) _[P] = (N) => {
        var z, T;
        return Ye(u[P], C(P, N), ((z = w(N)) != null ? z : [])[P], ((T = E(N)) != null ? T : [])[P], N == null ? void 0 : N.class, N == null ? void 0 : N.className)(i);
      };
      return _;
    }
    return Ye(h, k(), I(g), v == null ? void 0 : v.class, v == null ? void 0 : v.className)(i);
  }, S = () => {
    if (!(!f || typeof f != "object")) return Object.keys(f);
  };
  return m.variantKeys = S(), m.extend = r, m.base = h, m.slots = u, m.variants = f, m.defaultVariants = b, m.compoundSlots = s, m.compoundVariants = g, m;
};
const Rl = Qe({
  slots: {
    wrapper: "relative",
    table: "min-w-full w-full table-auto"
  },
  variants: {
    isCompact: {
      true: {
        table: "text-sm"
      }
    }
  },
  defaultVariants: {
    isCompact: !1
  }
}), Cl = fe.forwardRef(({ children: e, isCompact: t, className: r, ...n }, o) => {
  const { wrapper: a, table: s } = Rl({ isCompact: t });
  return /* @__PURE__ */ d("div", { className: a({ class: r }), children: /* @__PURE__ */ d("table", { ref: o, className: s(), ...n, children: e }) });
});
Cl.displayName = "Table";
const Nl = Qe({
  slots: {
    base: "group/tbody"
  }
}), El = fe.forwardRef(({ children: e, className: t, ...r }, n) => {
  const { base: o } = Nl();
  return /* @__PURE__ */ d("tbody", { ref: n, className: o({ class: t }), ...r, children: e });
});
El.displayName = "TableBody";
const Al = Qe({
  slots: {
    base: "group/td p-4"
  }
}), kl = fe.forwardRef(({ children: e, className: t, ...r }, n) => {
  const { base: o } = Al();
  return /* @__PURE__ */ d("td", { ref: n, className: o({ class: t }), ...r, children: e });
});
kl.displayName = "TableCell";
const Sl = Qe({
  slots: {
    base: "group/th p-4 text-left text-sm font-semibold text-base-content/80 bg-base-200/50"
  }
}), Pl = fe.forwardRef(({ children: e, className: t, ...r }, n) => {
  const { base: o } = Sl();
  return /* @__PURE__ */ d("th", { ref: n, className: o({ class: t }), ...r, children: e });
});
Pl.displayName = "TableColumn";
const Ol = Qe({
  slots: {
    base: "group/thead"
  }
}), Tl = fe.forwardRef(({ children: e, className: t, ...r }, n) => {
  const { base: o } = Ol();
  return /* @__PURE__ */ d("thead", { ref: n, className: o({ class: t }), ...r, children: e });
});
Tl.displayName = "TableHeader";
const Ml = Qe({
  slots: {
    base: "group/tr border-b border-base-200 last:border-b-0 hover:bg-base-200/50"
  }
}), Il = fe.forwardRef(({ children: e, className: t, ...r }, n) => {
  const { base: o } = Ml();
  return /* @__PURE__ */ d("tr", { ref: n, className: o({ class: t }), ...r, children: e });
});
Il.displayName = "TableRow";
function _c({ tabs: e }) {
  var n;
  const [t, r] = be(e && e.length > 0 ? e[0].id : null);
  return !e || e.length === 0 ? null : /* @__PURE__ */ H("div", { children: [
    /* @__PURE__ */ d("div", { className: "border-b border-gray-200 mb-4", children: /* @__PURE__ */ d("nav", { className: "flex space-x-8", children: e.map((o) => /* @__PURE__ */ d(
      "button",
      {
        onClick: () => r(o.id),
        className: `py-2 px-1 border-b-2 font-medium text-sm transition-colors ${t === o.id ? "border-accent-500 text-accent-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`,
        children: o.label
      },
      o.id
    )) }) }),
    /* @__PURE__ */ d("div", { className: "py-4", children: (n = e.find((o) => o.id === t)) == null ? void 0 : n.content })
  ] });
}
function Rc({ label: e, name: t, value: r, onChange: n, placeholder: o, maxLength: a, ...s }) {
  return /* @__PURE__ */ H("div", { children: [
    e && /* @__PURE__ */ d("label", { htmlFor: t, className: "block text-sm font-medium mb-2", children: e }),
    /* @__PURE__ */ d(
      "textarea",
      {
        id: t,
        name: t,
        value: r,
        onChange: n,
        placeholder: o,
        className: "input-fluid min-h-[120px] resize-y",
        maxLength: a,
        ...s
      }
    ),
    a && /* @__PURE__ */ H("p", { className: "text-sm text-gray-500 mt-1", children: [
      r.length,
      "/",
      a,
      " caractères"
    ] })
  ] });
}
function $l(e = {}) {
  const [t, r] = be("light"), [n, o] = be(!1);
  Le(() => {
    if (o(!0), e.mode === "auto") {
      const i = window.matchMedia("(prefers-color-scheme: dark)").matches;
      r(i ? "dark" : "light");
    } else
      r(e.mode || "light");
  }, [e.mode]);
  const a = () => {
    const i = t === "light" ? "dark" : "light";
    r(i), document.documentElement.setAttribute("data-theme", i);
  }, s = (i) => {
    const h = document.documentElement;
    Object.entries(i).forEach(([f, b]) => {
      const y = `--fg-${f.replace(/([A-Z])/g, "-$1").toLowerCase()}`;
      h.style.setProperty(y, b.toString());
    });
  }, l = () => {
    const i = document.documentElement;
    [
      "--fg-primary-hue",
      "--fg-accent-hue",
      "--fg-neutral-hue",
      "--fg-success-hue",
      "--fg-warning-hue",
      "--fg-error-hue",
      "--fg-primary-saturation",
      "--fg-accent-saturation",
      "--fg-glass-opacity",
      "--fg-glass-blur"
    ].forEach((f) => {
      i.style.removeProperty(f);
    });
  };
  return Le(() => {
    n && document.documentElement.setAttribute("data-theme", t);
  }, [t, n]), Le(() => {
    e.config && n && s(e.config);
  }, [e.config, n]), {
    theme: t,
    toggleTheme: a,
    applyTheme: s,
    resetTheme: l,
    mounted: n
  };
}
const Vo = Rt();
function Cc({ children: e, mode: t = "auto", config: r }) {
  const n = $l({ mode: t, config: r });
  return /* @__PURE__ */ d(Vo.Provider, { value: n, children: e });
}
function Ll() {
  const e = Pr(Vo);
  if (!e)
    throw new Error("useThemeContext doit être utilisé dans un ThemeProvider");
  return e;
}
function Nc({ showLabel: e = !0 }) {
  const { theme: t, toggleTheme: r } = Ll();
  return /* @__PURE__ */ d(
    St,
    {
      onClick: r,
      "aria-label": `Passer au mode ${t === "light" ? "sombre" : "clair"}`,
      startIcon: t === "light" ? /* @__PURE__ */ d(Ns, { size: 16 }) : /* @__PURE__ */ d(Ms, { size: 16 }),
      children: e && (t === "light" ? "Mode sombre" : "Mode clair")
    }
  );
}
const zl = (e) => {
  switch (e) {
    case "user":
      return /* @__PURE__ */ d(Ir, { size: 16, className: "text-white" });
    case "order":
      return /* @__PURE__ */ d(gr, { size: 16, className: "text-white" });
    case "update":
      return /* @__PURE__ */ d(ro, { size: 16, className: "text-white" });
    case "delete":
      return /* @__PURE__ */ d(no, { size: 16, className: "text-white" });
    default:
      return null;
  }
}, jl = (e) => {
  switch (e) {
    case "user":
      return "bg-blue-500";
    case "order":
      return "bg-green-500";
    case "update":
      return "bg-yellow-500";
    case "delete":
      return "bg-red-500";
    default:
      return "bg-gray-500";
  }
};
function Ec({ items: e }) {
  return !e || e.length === 0 ? null : /* @__PURE__ */ d("div", { className: "space-y-4", children: e.map((t) => /* @__PURE__ */ H("div", { className: "flex items-start gap-4", children: [
    /* @__PURE__ */ d(
      "div",
      {
        className: `w-8 h-8 rounded-full flex items-center justify-center ${jl(t.type)}`,
        children: zl(t.type)
      }
    ),
    /* @__PURE__ */ H("div", { className: "flex-1", children: [
      /* @__PURE__ */ d("p", { className: "font-medium", children: t.title }),
      /* @__PURE__ */ H("p", { className: "text-sm text-gray-600", children: [
        "par ",
        t.user
      ] }),
      /* @__PURE__ */ H("p", { className: "text-xs text-gray-500 flex items-center gap-1", children: [
        /* @__PURE__ */ d(fs, { size: 12 }),
        "il y a ",
        t.time
      ] })
    ] })
  ] }, t.id)) });
}
const Fo = Rt(null), Hl = {
  "top-right": "top-5 right-5",
  "top-left": "top-5 left-5",
  "top-center": "top-5 left-1/2 -translate-x-1/2",
  "bottom-right": "bottom-5 right-5",
  "bottom-left": "bottom-5 left-5",
  "bottom-center": "bottom-5 left-1/2 -translate-x-1/2"
}, Dl = {
  "top-right": "animate-slide-in-right",
  "top-left": "animate-slide-in-left",
  "top-center": "animate-slide-in-top",
  "bottom-right": "animate-slide-in-right",
  "bottom-left": "animate-slide-in-left",
  "bottom-center": "animate-slide-in-bottom"
};
function Ac({ children: e }) {
  const [t, r] = be([]), n = (f) => {
    const b = Date.now().toString(), y = { id: b, ...f };
    return r((c) => [...c, y]), b;
  }, o = (f, b) => {
    r((y) => {
      const c = y.find((u) => u.id === f);
      return c && c.onClose && c.onClose(b || !0), y.filter((u) => u.id !== f);
    });
  }, a = (f, b) => (r(
    (y) => y.map(
      (c) => c.id === f ? { ...c, ...b } : c
    )
  ), f), h = {
    toasts: t,
    addToast: n,
    removeToast: o,
    updateToast: a,
    loading: (f, b = {}) => n({
      type: "loading",
      message: f,
      autoClose: !1,
      ...b
    }),
    promise: (f, b) => {
      var S;
      const { pending: y, success: c, error: u } = b, g = n({
        type: "loading",
        message: typeof y == "string" ? y : ((S = y == null ? void 0 : y.render) == null ? void 0 : S.call(y)) || "Chargement...",
        autoClose: !1,
        ...typeof y == "object" ? y : {}
      }), m = Promise.resolve(typeof f == "function" ? f() : f);
      return m.then((v) => {
        var A;
        const p = typeof c == "string" ? c : ((A = c == null ? void 0 : c.render) == null ? void 0 : A.call(c, { data: v })) || "Succès";
        return a(g, {
          type: "success",
          message: p,
          autoClose: 5e3,
          ...typeof c == "object" ? c : {}
        }), v;
      }).catch((v) => {
        var A;
        const p = typeof u == "string" ? u : ((A = u == null ? void 0 : u.render) == null ? void 0 : A.call(u, { data: v })) || "Une erreur est survenue";
        return a(g, {
          type: "error",
          message: p,
          autoClose: 5e3,
          ...typeof u == "object" ? u : {}
        }), Promise.reject(v);
      }), m;
    },
    dismissAll: () => {
      t.forEach((f) => {
        f.onClose && f.onClose("dismissed");
      }), r([]);
    },
    // Méthodes pour chaque type de toast
    info: (f, b = {}) => n({ type: "info", message: f, autoClose: 5e3, ...b }),
    success: (f, b = {}) => n({ type: "success", message: f, autoClose: 5e3, ...b }),
    warning: (f, b = {}) => n({ type: "warning", message: f, autoClose: 5e3, ...b }),
    error: (f, b = {}) => n({ type: "error", message: f, autoClose: 5e3, ...b })
  };
  return /* @__PURE__ */ H(Fo.Provider, { value: h, children: [
    e,
    /* @__PURE__ */ d(Ul, {})
  ] });
}
function ql() {
  const e = Pr(Fo);
  if (!e)
    throw new Error("useToast doit être utilisé à l'intérieur d'un ToastProvider");
  return e;
}
function Ul() {
  const { toasts: e, removeToast: t } = ql(), r = e.reduce((n, o) => {
    const a = o.position || "bottom-right";
    return n[a] || (n[a] = []), n[a].push(o), n;
  }, {});
  return Object.entries(r).map(([n, o]) => /* @__PURE__ */ d("div", { className: `fixed z-50 flex flex-col gap-2 ${Hl[n]}`, children: o.map((a) => /* @__PURE__ */ d(Me, { ...a, onClose: (s) => t(a.id, s) }, a.id)) }, n));
}
function Me({
  id: e,
  type: t = "info",
  message: r,
  onClose: n,
  autoClose: o = 5e3,
  position: a = "bottom-right",
  onOpen: s,
  isLoading: l = !1
}) {
  const i = Ct(null), [h, f] = be(!0), b = {
    info: /* @__PURE__ */ d(Nt, { size: 20, className: "text-blue-500 mt-0.5" }),
    success: /* @__PURE__ */ d(Mr, { size: 20, className: "text-green-500 mt-0.5" }),
    warning: /* @__PURE__ */ d(et, { size: 20, className: "text-yellow-500 mt-0.5" }),
    error: /* @__PURE__ */ d(et, { size: 20, className: "text-red-500 mt-0.5" }),
    loading: /* @__PURE__ */ d(_s, { size: 20, className: "text-blue-500 mt-0.5 animate-spin" })
  }, y = {
    info: "bg-blue-50 border border-blue-200",
    success: "bg-green-50 border border-green-200",
    warning: "bg-yellow-50 border border-yellow-200",
    error: "bg-red-50 border border-red-200",
    loading: "bg-blue-50 border border-blue-200"
  };
  Le(() => (s && s(), o !== !1 && !l && (i.current = setTimeout(() => {
    f(!1), setTimeout(() => n("timeout"), 300);
  }, o)), () => {
    i.current && clearTimeout(i.current);
  }), [o, n, s, l]);
  const c = () => {
    f(!1), i.current && clearTimeout(i.current), setTimeout(() => n("dismissed"), 300);
  }, u = h ? "opacity-100" : "opacity-0 translate-x-2";
  return /* @__PURE__ */ H(
    "div",
    {
      className: `max-w-sm w-full p-4 rounded-lg shadow-lg transition-all duration-300 ${y[t]} ${Dl[a]} ${u}`,
      children: [
        /* @__PURE__ */ H("div", { className: "flex items-start gap-3", children: [
          b[t],
          /* @__PURE__ */ d("div", { className: "flex-1", children: /* @__PURE__ */ d("p", { className: "text-sm font-medium", children: r }) }),
          t !== "loading" && /* @__PURE__ */ d("button", { onClick: c, className: "text-gray-400 hover:text-gray-600", children: /* @__PURE__ */ d(ze, { size: 16 }) })
        ] }),
        o !== !1 && t !== "loading" && /* @__PURE__ */ d("div", { className: "mt-2 w-full bg-gray-200 rounded-full h-1 overflow-hidden", children: /* @__PURE__ */ d(
          "div",
          {
            className: `h-full ${t === "info" ? "bg-blue-500" : t === "success" ? "bg-green-500" : t === "warning" ? "bg-yellow-500" : "bg-red-500"}`,
            style: {
              width: "100%",
              animation: `shrink ${o}ms linear forwards`
            }
          }
        ) })
      ]
    }
  );
}
Me.info = (e, t) => (console.warn("Toast.info() est déprécié. Utilisez useToast().info() à la place."), null);
Me.success = (e, t) => (console.warn("Toast.success() est déprécié. Utilisez useToast().success() à la place."), null);
Me.warning = (e, t) => (console.warn("Toast.warning() est déprécié. Utilisez useToast().warning() à la place."), null);
Me.error = (e, t) => (console.warn("Toast.error() est déprécié. Utilisez useToast().error() à la place."), null);
Me.loading = (e, t) => (console.warn("Toast.loading() est déprécié. Utilisez useToast().loading() à la place."), null);
Me.promise = (e, t) => (console.warn("Toast.promise() est déprécié. Utilisez useToast().promise() à la place."), e);
Me.dismiss = (e) => {
  console.warn("Toast.dismiss() est déprécié. Utilisez useToast().removeToast() à la place.");
};
Me.dismissAll = () => {
  console.warn("Toast.dismissAll() est déprécié. Utilisez useToast().dismissAll() à la place.");
};
function kc({ label: e, checked: t, onChange: r }) {
  const [n, o] = be(t || !1);
  return /* @__PURE__ */ H("div", { className: "flex items-center justify-between", children: [
    e && /* @__PURE__ */ d("span", { className: "text-sm font-medium", children: e }),
    /* @__PURE__ */ d(
      "button",
      {
        onClick: () => {
          o(!n), r(!n);
        },
        className: `toggle-fluid ${n ? "active" : ""}`,
        children: /* @__PURE__ */ d("div", { className: "toggle-handle" })
      }
    )
  ] });
}
function Sc({
  logo: e,
  navItems: t = [],
  userDropdownItems: r = [],
  userAvatar: n,
  userName: o,
  notificationCount: a = 0,
  onSearch: s,
  onNavItemClick: l,
  showSearch: i = !0,
  showNotifications: h = !0
}) {
  const [f, b] = be(""), [y, c] = be(!1), [u, g] = be("");
  be(() => {
    t.length > 0 && !f && b(t[0].id);
  }, [t]);
  const m = (v) => {
    b(v.id), l && l(v);
  }, S = (v) => {
    g(v.target.value), s && s(v.target.value);
  };
  return /* @__PURE__ */ H("div", { className: "nav-fluid", children: [
    /* @__PURE__ */ H("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ H("div", { className: "flex items-center gap-6", children: [
        e && /* @__PURE__ */ d("div", { className: "font-bold text-lg", children: e }),
        /* @__PURE__ */ d("nav", { className: "hidden md:flex space-x-8", children: t.map((v) => /* @__PURE__ */ H(
          "button",
          {
            className: `flex items-center gap-2 text-sm font-medium ${f === v.id ? "text-accent-600" : "text-gray-600 hover:text-gray-800"}`,
            onClick: () => m(v),
            children: [
              v.icon && /* @__PURE__ */ d(v.icon, { size: 16 }),
              v.label
            ]
          },
          v.id
        )) })
      ] }),
      /* @__PURE__ */ H("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ H("div", { className: "hidden md:flex items-center gap-2", children: [
          i && /* @__PURE__ */ H("div", { className: "relative", children: [
            /* @__PURE__ */ d(
              "input",
              {
                type: "text",
                placeholder: "Rechercher...",
                className: "py-1 pl-10 pr-4 rounded-lg bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 w-64",
                value: u,
                onChange: S
              }
            ),
            /* @__PURE__ */ d(
              br,
              {
                size: 16,
                className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              }
            )
          ] }),
          h && /* @__PURE__ */ d(
            Be,
            {
              icon: /* @__PURE__ */ d(Jn, { size: 20 }),
              "aria-label": "Notifications",
              variant: "ghost",
              badge: a > 0 ? a : void 0
            }
          ),
          r.length > 0 && /* @__PURE__ */ H(Te, { children: [
            /* @__PURE__ */ d(Te.Trigger, { asChild: !0, children: /* @__PURE__ */ H(
              St,
              {
                variant: "ghost",
                className: "flex items-center gap-2",
                endIcon: /* @__PURE__ */ d(Ve, { size: 16 }),
                children: [
                  n ? typeof n == "string" ? /* @__PURE__ */ d(
                    at,
                    {
                      src: n,
                      alt: o || "User",
                      size: "sm",
                      fallback: (o || "U").charAt(0)
                    }
                  ) : n : /* @__PURE__ */ d(
                    at,
                    {
                      size: "sm",
                      fallback: (o || "U").charAt(0)
                    }
                  ),
                  o && /* @__PURE__ */ d("span", { className: "font-medium", children: o })
                ]
              }
            ) }),
            /* @__PURE__ */ d(Te.Menu, { children: r.map(
              (v, p) => v.isSeparator ? /* @__PURE__ */ d(Te.Separator, {}, `sep-${p}`) : /* @__PURE__ */ H(
                Te.Item,
                {
                  onClick: v.onClick,
                  className: v.isDanger ? "text-red-600 hover:text-red-700" : "",
                  children: [
                    v.icon,
                    v.label
                  ]
                },
                `${v.label}-${p}`
              )
            ) })
          ] })
        ] }),
        /* @__PURE__ */ d(
          Be,
          {
            icon: y ? /* @__PURE__ */ d(ze, { size: 24 }) : /* @__PURE__ */ d(to, { size: 24 }),
            onClick: () => c(!y),
            className: "md:hidden",
            "aria-label": "Menu",
            variant: "ghost"
          }
        )
      ] })
    ] }),
    y && /* @__PURE__ */ d("div", { className: "md:hidden mt-4 py-4 border-t", children: /* @__PURE__ */ H("nav", { className: "flex flex-col space-y-4", children: [
      t.map((v) => /* @__PURE__ */ H(
        "button",
        {
          className: `flex items-center gap-2 text-sm font-medium ${f === v.id ? "text-accent-600" : "text-gray-600"}`,
          onClick: () => {
            m(v), c(!1);
          },
          children: [
            v.icon && /* @__PURE__ */ d(v.icon, { size: 18 }),
            v.label
          ]
        },
        v.id
      )),
      /* @__PURE__ */ H("div", { className: "pt-4 border-t", children: [
        i && /* @__PURE__ */ H("div", { className: "relative mb-4", children: [
          /* @__PURE__ */ d(
            "input",
            {
              type: "text",
              placeholder: "Rechercher...",
              className: "w-full py-2 pl-10 pr-4 rounded-lg bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500",
              value: u,
              onChange: S
            }
          ),
          /* @__PURE__ */ d(
            br,
            {
              size: 16,
              className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            }
          )
        ] }),
        o && /* @__PURE__ */ H("div", { className: "flex items-center gap-3 mb-2", children: [
          n ? typeof n == "string" ? /* @__PURE__ */ d(
            at,
            {
              src: n,
              alt: o,
              size: "sm",
              fallback: o.charAt(0)
            }
          ) : n : /* @__PURE__ */ d(
            at,
            {
              size: "sm",
              fallback: o.charAt(0)
            }
          ),
          /* @__PURE__ */ d("span", { className: "font-medium", children: o })
        ] }),
        r.filter((v) => !v.isSeparator).map((v, p) => /* @__PURE__ */ H(
          "button",
          {
            onClick: v.onClick,
            className: `flex items-center gap-2 text-sm font-medium py-2 w-full ${v.isDanger ? "text-red-600" : "text-gray-600"}`,
            children: [
              v.icon,
              v.label
            ]
          },
          `${v.label}-${p}`
        ))
      ] })
    ] }) })
  ] });
}
function Pc({ view: e, setView: t }) {
  return /* @__PURE__ */ H("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ d(
      "button",
      {
        onClick: () => t("grid"),
        className: `p-2 rounded-lg transition-colors ${e === "grid" ? "bg-accent-500 text-white" : "hover:bg-glass-light"}`,
        children: /* @__PURE__ */ d(bs, { size: 16 })
      }
    ),
    /* @__PURE__ */ d(
      "button",
      {
        onClick: () => t("list"),
        className: `p-2 rounded-lg transition-colors ${e === "list" ? "bg-accent-500 text-white" : "hover:bg-glass-light"}`,
        children: /* @__PURE__ */ d(xs, { size: 16 })
      }
    )
  ] });
}
export {
  Wl as Accordion,
  Kl as Alert,
  at as Avatar,
  Jr as Badge,
  Xl as Breadcrumb,
  St as Button,
  yi as Card,
  vi as CardBody,
  xi as CardDescription,
  wi as CardFooter,
  _i as CardHeader,
  Ri as CardTitle,
  Dn as Checkbox,
  Ql as Chip,
  Zl as Collapsible,
  Yl as CollapsibleSidebar,
  Jl as Container,
  ec as ContextMenu,
  tc as DataCard,
  rc as Drawer,
  Te as Dropdown,
  nc as EmptyState,
  oc as ExpandableTable,
  sc as FileUploader,
  ac as Footer,
  qn as HelperText,
  Be as IconButton,
  So as Input,
  ic as InteractiveTable,
  lc as Label,
  bo as Link,
  cc as Modal,
  uc as Notification,
  Pi as Pagination,
  dc as ProgressBar,
  fc as RadioGroup,
  pc as SectionBox,
  hc as Select,
  Po as SidebarMenuItem,
  mc as SidebarNavigation,
  gc as Skeleton,
  bc as Snackbar,
  yc as Spinner,
  vc as Stack,
  xc as StatCard,
  wc as Stepper,
  Cl as Table,
  El as TableBody,
  kl as TableCell,
  Pl as TableColumn,
  Tl as TableHeader,
  Il as TableRow,
  _c as Tabs,
  Rc as Textarea,
  Cc as ThemeProvider,
  Nc as ThemeSwitcher,
  Ec as Timeline,
  Me as Toast,
  Ac as ToastProvider,
  kc as Toggle,
  Sc as TopNavigation,
  Pc as ViewModeSwitch,
  ql as useToast
};

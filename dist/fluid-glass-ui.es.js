"use client";
import { jsxs as q, jsx as u, Fragment as to } from "react/jsx-runtime";
import pe, { forwardRef as ro, createElement as br, useState as le, createContext as kt, useCallback as Le, useEffect as Se, useRef as Pe, useContext as Or, useMemo as Ke } from "react";
import es, { createPortal as ts } from "react-dom";
import { usePress as rs } from "@react-aria/interactions";
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ns = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), os = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, r, n) => n ? n.toUpperCase() : r.toLowerCase()
), Ur = (e) => {
  const t = os(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, no = (...e) => e.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim(), ss = (e) => {
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
var as = {
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
const is = ro(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: o = "",
    children: s,
    iconNode: a,
    ...l
  }, i) => br(
    "svg",
    {
      ref: i,
      ...as,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: no("lucide", o),
      ...!s && !ss(l) && { "aria-hidden": "true" },
      ...l
    },
    [
      ...a.map(([p, d]) => br(p, d)),
      ...Array.isArray(s) ? s : [s]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const me = (e, t) => {
  const r = ro(
    ({ className: n, ...o }, s) => br(is, {
      ref: s,
      iconNode: t,
      className: no(
        `lucide-${ns(Ur(e))}`,
        `lucide-${e}`,
        n
      ),
      ...o
    })
  );
  return r.displayName = Ur(e), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ls = [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
], cs = me("arrow-up-down", ls);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const us = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
], oo = me("bell", us);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ds = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Mr = me("check", ds);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fs = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Qe = me("chevron-down", fs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ps = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], ms = me("chevron-left", ps);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hs = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Ir = me("chevron-right", hs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gs = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], so = me("chevron-up", gs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bs = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], Xe = me("circle-alert", bs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ys = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], $r = me("circle-check-big", ys);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vs = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
], xs = me("circle-x", vs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ws = [
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], _s = me("clock", ws);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rs = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
], Cs = me("download", Rs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ns = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Es = me("eye", Ns);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const As = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], yr = me("file-text", As);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ks = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }]
], Ss = me("file", ks);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ps = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
], Ts = me("grid-3x3", Ps);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Os = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
], St = me("info", Os);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ms = [
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 18h.01", key: "1tta3j" }],
  ["path", { d: "M3 6h.01", key: "1rqtza" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 18h13", key: "1lx6n3" }],
  ["path", { d: "M8 6h13", key: "ik3vkj" }]
], Is = me("list", Ms);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $s = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], vr = me("loader-circle", $s);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ls = [
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 18h16", key: "19g7jn" }],
  ["path", { d: "M4 6h16", key: "1o0s65" }]
], ao = me("menu", Ls);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zs = [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
], Br = me("moon", zs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const js = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Hs = me("plus", js);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ds = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], At = me("search", Ds);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qs = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  [
    "path",
    {
      d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
      key: "ohrbg2"
    }
  ]
], Us = me("square-pen", qs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bs = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
], Gr = me("sun", Bs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gs = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
], Fs = me("trash-2", Gs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vs = [
  ["path", { d: "M16 17h6v-6", key: "t6n2it" }],
  ["path", { d: "m22 17-8.5-8.5-5 5L2 7", key: "x473p" }]
], Ws = me("trending-down", Vs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ks = [
  ["path", { d: "M16 7h6v6", key: "box55l" }],
  ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
], Xs = me("trending-up", Ks);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qs = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
], io = me("upload", Qs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zs = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], lo = me("user", Zs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ys = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Oe = me("x", Ys);
function ac({ title: e, children: t }) {
  const [r, n] = le(!1);
  return /* @__PURE__ */ q("div", { className: "glass-surface rounded-lg overflow-hidden border border-white/10", children: [
    /* @__PURE__ */ q(
      "button",
      {
        onClick: () => n(!r),
        className: "w-full flex justify-between items-center p-4 text-left font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500",
        "aria-expanded": r,
        children: [
          /* @__PURE__ */ u("span", { children: e }),
          /* @__PURE__ */ u(
            Qe,
            {
              className: `transform transition-transform duration-300 ${r ? "rotate-180" : ""}`
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ u("div", { className: `transition-all duration-300 ease-in-out overflow-hidden ${r ? "max-h-screen" : "max-h-0"}`, children: /* @__PURE__ */ u("div", { className: "p-4 border-t border-white/10", children: t }) })
  ] });
}
const Fr = {
  info: {
    icon: St,
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    iconColor: "text-blue-600",
    titleColor: "text-blue-900",
    textColor: "text-blue-700"
  },
  success: {
    icon: $r,
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    iconColor: "text-green-600",
    titleColor: "text-green-900",
    textColor: "text-green-700"
  },
  warning: {
    icon: Xe,
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
    iconColor: "text-yellow-600",
    titleColor: "text-yellow-900",
    textColor: "text-yellow-700"
  },
  danger: {
    icon: xs,
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    iconColor: "text-red-600",
    titleColor: "text-red-900",
    textColor: "text-red-700"
  }
};
function ic({ variant: e = "info", title: t, children: r }) {
  const n = Fr[e] ?? Fr.info, o = n.icon;
  return /* @__PURE__ */ q(
    "div",
    {
      className: `flex items-center gap-3 p-4 border rounded-lg ${n.bgColor} ${n.borderColor}`,
      children: [
        /* @__PURE__ */ u(o, { size: 20, className: n.iconColor }),
        /* @__PURE__ */ q("div", { children: [
          t && /* @__PURE__ */ u("p", { className: `font-medium ${n.titleColor}`, children: t }),
          /* @__PURE__ */ u("p", { className: `text-sm ${n.textColor}`, children: r })
        ] })
      ]
    }
  );
}
function co(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Js(e) {
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
var uo = {}, Te = {};
Te._ = Te._interop_require_default = ea;
function ea(e) {
  return e && e.__esModule ? e : { default: e };
}
var Lr = {}, it = {};
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
})(it);
var fo = {};
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
    let { widthInt: n, heightInt: o, blurWidth: s, blurHeight: a, blurDataURL: l, objectFit: i } = r;
    const p = 20, d = s ? s * 40 : n, b = a ? a * 40 : o, v = d && b ? "viewBox='0 0 " + d + " " + b + "'" : "", c = v ? "none" : i === "contain" ? "xMidYMid" : i === "cover" ? "xMidYMid slice" : "none";
    return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + v + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='" + p + "'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='" + p + "'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + c + "' style='filter: url(%23b);' href='" + l + "'/%3E%3C/svg%3E";
  }
})(fo);
var Pt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(o, s) {
    for (var a in s) Object.defineProperty(o, a, {
      enumerable: !0,
      get: s[a]
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
})(Pt);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "getImgProps", {
    enumerable: !0,
    get: function() {
      return c;
    }
  });
  const t = it, r = fo, n = Pt, o = [
    "lazy",
    "eager",
    void 0
  ];
  function s(f) {
    return f.default !== void 0;
  }
  function a(f) {
    return f.src !== void 0;
  }
  function l(f) {
    return typeof f == "object" && (s(f) || a(f));
  }
  const i = /* @__PURE__ */ new Map();
  let p;
  function d(f) {
    return typeof f > "u" ? f : typeof f == "number" ? Number.isFinite(f) ? f : NaN : typeof f == "string" && /^[0-9]+$/.test(f) ? parseInt(f, 10) : NaN;
  }
  function b(f, g, h) {
    let { deviceSizes: E, allSizes: S } = f;
    if (h) {
      const y = /(^|\s)(1?\d?\d)vw/g, A = [];
      for (let N; N = y.exec(h); N)
        A.push(parseInt(N[2]));
      if (A.length) {
        const N = Math.min(...A) * 0.01;
        return {
          widths: S.filter((R) => R >= E[0] * N),
          kind: "w"
        };
      }
      return {
        widths: S,
        kind: "w"
      };
    }
    return typeof g != "number" ? {
      widths: E,
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
          ].map((y) => S.find((A) => A >= y) || S[S.length - 1])
        )
      ],
      kind: "x"
    };
  }
  function v(f) {
    let { config: g, src: h, unoptimized: E, width: S, quality: m, sizes: y, loader: A } = f;
    if (E)
      return {
        src: h,
        srcSet: void 0,
        sizes: void 0
      };
    const { widths: N, kind: R } = b(g, S, y), w = N.length - 1;
    return {
      sizes: !y && R === "w" ? "100vw" : y,
      srcSet: N.map(($, _) => A({
        config: g,
        src: h,
        quality: m,
        width: $
      }) + " " + (R === "w" ? $ : _ + 1) + R).join(", "),
      // It's intended to keep `src` the last attribute because React updates
      // attributes in order. If we keep `src` the first one, Safari will
      // immediately start to fetch `src`, before `sizes` and `srcSet` are even
      // updated by React. That causes multiple unnecessary requests if `srcSet`
      // and `sizes` are defined.
      // This bug cannot be reproduced in Chrome or Firefox.
      src: A({
        config: g,
        src: h,
        quality: m,
        width: N[w]
      })
    };
  }
  function c(f, g) {
    let { src: h, sizes: E, unoptimized: S = !1, priority: m = !1, loading: y, className: A, quality: N, width: R, height: w, fill: $ = !1, style: _, onLoad: T, onLoadingComplete: x, placeholder: k = "empty", blurDataURL: C, fetchPriority: L, layout: O, objectFit: M, objectPosition: P, lazyBoundary: D, lazyRoot: z, ...Q } = f;
    const { imgConf: W, showAltText: K, blurComplete: B, defaultLoader: re } = g;
    let X, F = W || n.imageConfigDefault;
    if ("allSizes" in F)
      X = F;
    else {
      const U = [
        ...F.deviceSizes,
        ...F.imageSizes
      ].sort((Ce, V) => Ce - V), ge = F.deviceSizes.sort((Ce, V) => Ce - V);
      X = {
        ...F,
        allSizes: U,
        deviceSizes: ge
      };
    }
    let j = Q.loader || re;
    delete Q.loader, delete Q.srcSet;
    const he = "__next_img_default" in j;
    if (he) {
      if (X.loader === "custom")
        throw new Error('Image with src "' + h + `" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`);
    } else {
      const U = j;
      j = (ge) => {
        const { config: Ce, ...V } = ge;
        return U(V);
      };
    }
    if (O) {
      O === "fill" && ($ = !0);
      const U = {
        intrinsic: {
          maxWidth: "100%",
          height: "auto"
        },
        responsive: {
          width: "100%",
          height: "auto"
        }
      }, ge = {
        responsive: "100vw",
        fill: "100vw"
      }, Ce = U[O];
      Ce && (_ = {
        ..._,
        ...Ce
      });
      const V = ge[O];
      V && !E && (E = V);
    }
    let ie = "", se = d(R), H = d(w), I, ne;
    if (l(h)) {
      const U = s(h) ? h.default : h;
      if (!U.src)
        throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(U));
      if (!U.height || !U.width)
        throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(U));
      if (I = U.blurWidth, ne = U.blurHeight, C = C || U.blurDataURL, ie = U.src, !$) {
        if (!se && !H)
          se = U.width, H = U.height;
        else if (se && !H) {
          const ge = se / U.width;
          H = Math.round(U.height * ge);
        } else if (!se && H) {
          const ge = H / U.height;
          se = Math.round(U.width * ge);
        }
      }
    }
    h = typeof h == "string" ? h : ie;
    let de = !m && (y === "lazy" || typeof y > "u");
    (!h || h.startsWith("data:") || h.startsWith("blob:")) && (S = !0, de = !1), X.unoptimized && (S = !0), he && h.endsWith(".svg") && !X.dangerouslyAllowSVG && (S = !0), m && (L = "high");
    const Ne = d(N);
    if (process.env.NODE_ENV !== "production") {
      if (X.output === "export" && he && !S)
        throw new Error("Image Optimization using the default loader is not compatible with `{ output: 'export' }`.\n  Possible solutions:\n    - Remove `{ output: 'export' }` and run \"next start\" to run server mode including the Image Optimization API.\n    - Configure `{ images: { unoptimized: true } }` in `next.config.js` to disable the Image Optimization API.\n  Read more: https://nextjs.org/docs/messages/export-image-api");
      if (!h)
        S = !0;
      else if ($) {
        if (R)
          throw new Error('Image with src "' + h + '" has both "width" and "fill" properties. Only one should be used.');
        if (w)
          throw new Error('Image with src "' + h + '" has both "height" and "fill" properties. Only one should be used.');
        if (_ != null && _.position && _.position !== "absolute")
          throw new Error('Image with src "' + h + '" has both "fill" and "style.position" properties. Images with "fill" always use position absolute - it cannot be modified.');
        if (_ != null && _.width && _.width !== "100%")
          throw new Error('Image with src "' + h + '" has both "fill" and "style.width" properties. Images with "fill" always use width 100% - it cannot be modified.');
        if (_ != null && _.height && _.height !== "100%")
          throw new Error('Image with src "' + h + '" has both "fill" and "style.height" properties. Images with "fill" always use height 100% - it cannot be modified.');
      } else {
        if (typeof se > "u")
          throw new Error('Image with src "' + h + '" is missing required "width" property.');
        if (isNaN(se))
          throw new Error('Image with src "' + h + '" has invalid "width" property. Expected a numeric value in pixels but received "' + R + '".');
        if (typeof H > "u")
          throw new Error('Image with src "' + h + '" is missing required "height" property.');
        if (isNaN(H))
          throw new Error('Image with src "' + h + '" has invalid "height" property. Expected a numeric value in pixels but received "' + w + '".');
      }
      if (!o.includes(y))
        throw new Error('Image with src "' + h + '" has invalid "loading" property. Provided "' + y + '" should be one of ' + o.map(String).join(",") + ".");
      if (m && y === "lazy")
        throw new Error('Image with src "' + h + `" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
      if (k !== "empty" && k !== "blur" && !k.startsWith("data:image/"))
        throw new Error('Image with src "' + h + '" has invalid "placeholder" property "' + k + '".');
      if (k !== "empty" && se && H && se * H < 1600 && (0, t.warnOnce)('Image with src "' + h + '" is smaller than 40x40. Consider removing the "placeholder" property to improve performance.'), k === "blur" && !C) {
        const U = [
          "jpeg",
          "png",
          "webp",
          "avif"
        ];
        throw new Error('Image with src "' + h + `" has "placeholder='blur'" property but is missing the "blurDataURL" property.
        Possible solutions:
          - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
          - Change the "src" property to a static import with one of the supported file types: ` + U.join(",") + ` (animated images not supported)
          - Remove the "placeholder" property, effectively no blur effect
        Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`);
      }
      if ("ref" in Q && (0, t.warnOnce)('Image with src "' + h + '" is using unsupported "ref" property. Consider using the "onLoad" property instead.'), !S && !he) {
        const U = j({
          config: X,
          src: h,
          width: se || 400,
          quality: Ne || 75
        });
        let ge;
        try {
          ge = new URL(U);
        } catch {
        }
        (U === h || ge && ge.pathname === h && !ge.search) && (0, t.warnOnce)('Image with src "' + h + `" has a "loader" property that does not implement width. Please implement it or use the "unoptimized" property instead.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader-width`);
      }
      x && (0, t.warnOnce)('Image with src "' + h + '" is using deprecated "onLoadingComplete" property. Please use the "onLoad" property instead.');
      for (const [U, ge] of Object.entries({
        layout: O,
        objectFit: M,
        objectPosition: P,
        lazyBoundary: D,
        lazyRoot: z
      }))
        ge && (0, t.warnOnce)('Image with src "' + h + '" has legacy prop "' + U + `". Did you forget to run the codemod?
Read more: https://nextjs.org/docs/messages/next-image-upgrade-to-13`);
      if (typeof window < "u" && !p && window.PerformanceObserver) {
        p = new PerformanceObserver((U) => {
          for (const Ce of U.getEntries()) {
            var ge;
            const V = (Ce == null || (ge = Ce.element) == null ? void 0 : ge.src) || "", Z = i.get(V);
            Z && !Z.priority && Z.placeholder === "empty" && !Z.src.startsWith("data:") && !Z.src.startsWith("blob:") && (0, t.warnOnce)('Image with src "' + Z.src + `" was detected as the Largest Contentful Paint (LCP). Please add the "priority" property if this image is above the fold.
Read more: https://nextjs.org/docs/api-reference/next/image#priority`);
          }
        });
        try {
          p.observe({
            type: "largest-contentful-paint",
            buffered: !0
          });
        } catch (U) {
          console.error(U);
        }
      }
    }
    const be = Object.assign($ ? {
      position: "absolute",
      height: "100%",
      width: "100%",
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      objectFit: M,
      objectPosition: P
    } : {}, K ? {} : {
      color: "transparent"
    }, _), fe = !B && k !== "empty" ? k === "blur" ? 'url("data:image/svg+xml;charset=utf-8,' + (0, r.getImageBlurSvg)({
      widthInt: se,
      heightInt: H,
      blurWidth: I,
      blurHeight: ne,
      blurDataURL: C || "",
      objectFit: be.objectFit
    }) + '")' : 'url("' + k + '")' : null;
    let Ae = fe ? {
      backgroundSize: be.objectFit || "cover",
      backgroundPosition: be.objectPosition || "50% 50%",
      backgroundRepeat: "no-repeat",
      backgroundImage: fe
    } : {};
    process.env.NODE_ENV === "development" && Ae.backgroundImage && k === "blur" && C != null && C.startsWith("/") && (Ae.backgroundImage = 'url("' + C + '")');
    const xe = v({
      config: X,
      src: h,
      unoptimized: S,
      width: se,
      quality: Ne,
      sizes: E,
      loader: j
    });
    if (process.env.NODE_ENV !== "production" && typeof window < "u") {
      let U;
      try {
        U = new URL(xe.src);
      } catch {
        U = new URL(xe.src, window.location.href);
      }
      i.set(U.href, {
        src: h,
        priority: m,
        placeholder: k
      });
    }
    return {
      props: {
        ...Q,
        loading: de ? "lazy" : y,
        fetchPriority: L,
        width: se,
        height: H,
        decoding: "async",
        className: A,
        style: {
          ...be,
          ...Ae
        },
        sizes: xe.sizes,
        srcSet: xe.srcSet,
        src: xe.src
      },
      meta: {
        unoptimized: S,
        priority: m,
        placeholder: k,
        fill: $
      }
    };
  }
})(Lr);
var xr = { exports: {} }, st = {};
function po(e) {
  if (typeof WeakMap != "function") return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (po = function(n) {
    return n ? r : t;
  })(e);
}
st._ = st._interop_require_wildcard = ta;
function ta(e, t) {
  if (!t && e && e.__esModule) return e;
  if (e === null || typeof e != "object" && typeof e != "function") return { default: e };
  var r = po(t);
  if (r && r.has(e)) return r.get(e);
  var n = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var s in e)
    if (s !== "default" && Object.prototype.hasOwnProperty.call(e, s)) {
      var a = o ? Object.getOwnPropertyDescriptor(e, s) : null;
      a && (a.get || a.set) ? Object.defineProperty(n, s, a) : n[s] = e[s];
    }
  return n.default = e, r && r.set(e, n), n;
}
var ct = { exports: {} }, It = {}, Vr;
function ra() {
  return Vr || (Vr = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "default", {
      enumerable: !0,
      get: function() {
        return s;
      }
    });
    const t = pe, r = typeof window > "u", n = r ? () => {
    } : t.useLayoutEffect, o = r ? () => {
    } : t.useEffect;
    function s(a) {
      const { headManager: l, reduceComponentsToState: i } = a;
      function p() {
        if (l && l.mountedInstances) {
          const b = t.Children.toArray(Array.from(l.mountedInstances).filter(Boolean));
          l.updateHead(i(b, a));
        }
      }
      if (r) {
        var d;
        l == null || (d = l.mountedInstances) == null || d.add(a.children), p();
      }
      return n(() => {
        var b;
        return l == null || (b = l.mountedInstances) == null || b.add(a.children), () => {
          var v;
          l == null || (v = l.mountedInstances) == null || v.delete(a.children);
        };
      }), n(() => (l && (l._pendingUpdate = p), () => {
        l && (l._pendingUpdate = p);
      })), o(() => (l && l._pendingUpdate && (l._pendingUpdate(), l._pendingUpdate = null), () => {
        l && l._pendingUpdate && (l._pendingUpdate(), l._pendingUpdate = null);
      })), null;
    }
  }(It)), It;
}
var $t = {}, Wr;
function na() {
  return Wr || (Wr = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "AmpStateContext", {
      enumerable: !0,
      get: function() {
        return n;
      }
    });
    const n = (/* @__PURE__ */ Te._(pe)).default.createContext({});
    process.env.NODE_ENV !== "production" && (n.displayName = "AmpStateContext");
  }($t)), $t;
}
var Lt = {}, Kr;
function oa() {
  return Kr || (Kr = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "HeadManagerContext", {
      enumerable: !0,
      get: function() {
        return n;
      }
    });
    const n = (/* @__PURE__ */ Te._(pe)).default.createContext({});
    process.env.NODE_ENV !== "production" && (n.displayName = "HeadManagerContext");
  }(Lt)), Lt;
}
var zt = {}, Xr;
function sa() {
  return Xr || (Xr = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "isInAmpMode", {
      enumerable: !0,
      get: function() {
        return t;
      }
    });
    function t(r) {
      let { ampFirst: n = !1, hybrid: o = !1, hasQuery: s = !1 } = r === void 0 ? {} : r;
      return n || o && s;
    }
  }(zt)), zt;
}
var Qr;
function aa() {
  return Qr || (Qr = 1, function(e, t) {
    "use client";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function r(S, m) {
      for (var y in m) Object.defineProperty(S, y, {
        enumerable: !0,
        get: m[y]
      });
    }
    r(t, {
      defaultHead: function() {
        return b;
      },
      default: function() {
        return E;
      }
    });
    const n = Te, s = /* @__PURE__ */ st._(pe), a = /* @__PURE__ */ n._(ra()), l = na(), i = oa(), p = sa(), d = it;
    function b(S) {
      S === void 0 && (S = !1);
      const m = [
        /* @__PURE__ */ s.default.createElement("meta", {
          charSet: "utf-8"
        })
      ];
      return S || m.push(/* @__PURE__ */ s.default.createElement("meta", {
        name: "viewport",
        content: "width=device-width"
      })), m;
    }
    function v(S, m) {
      return typeof m == "string" || typeof m == "number" ? S : m.type === s.default.Fragment ? S.concat(
        // @ts-expect-error @types/react does not remove fragments but this could also return ReactPortal[]
        s.default.Children.toArray(m.props.children).reduce(
          // @ts-expect-error @types/react does not remove fragments but this could also return ReactPortal[]
          (y, A) => typeof A == "string" || typeof A == "number" ? y : y.concat(A),
          []
        )
      ) : S.concat(m);
    }
    const c = [
      "name",
      "httpEquiv",
      "charSet",
      "itemProp"
    ];
    function f() {
      const S = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ new Set(), A = {};
      return (N) => {
        let R = !0, w = !1;
        if (N.key && typeof N.key != "number" && N.key.indexOf("$") > 0) {
          w = !0;
          const $ = N.key.slice(N.key.indexOf("$") + 1);
          S.has($) ? R = !1 : S.add($);
        }
        switch (N.type) {
          case "title":
          case "base":
            m.has(N.type) ? R = !1 : m.add(N.type);
            break;
          case "meta":
            for (let $ = 0, _ = c.length; $ < _; $++) {
              const T = c[$];
              if (N.props.hasOwnProperty(T))
                if (T === "charSet")
                  y.has(T) ? R = !1 : y.add(T);
                else {
                  const x = N.props[T], k = A[T] || /* @__PURE__ */ new Set();
                  (T !== "name" || !w) && k.has(x) ? R = !1 : (k.add(x), A[T] = k);
                }
            }
            break;
        }
        return R;
      };
    }
    function g(S, m) {
      const { inAmpMode: y } = m;
      return S.reduce(v, []).reverse().concat(b(y).reverse()).filter(f()).reverse().map((A, N) => {
        const R = A.key || N;
        if (process.env.NODE_ENV !== "development" && process.env.__NEXT_OPTIMIZE_FONTS && !y && A.type === "link" && A.props.href && // TODO(prateekbh@): Replace this with const from `constants` when the tree shaking works.
        [
          "https://fonts.googleapis.com/css",
          "https://use.typekit.net/"
        ].some((w) => A.props.href.startsWith(w))) {
          const w = {
            ...A.props || {}
          };
          return w["data-href"] = w.href, w.href = void 0, w["data-optimized-fonts"] = !0, /* @__PURE__ */ s.default.cloneElement(A, w);
        }
        if (process.env.NODE_ENV === "development")
          if (A.type === "script" && A.props.type !== "application/ld+json") {
            const w = A.props.src ? '<script> tag with src="' + A.props.src + '"' : "inline <script>";
            (0, d.warnOnce)("Do not add <script> tags using next/head (see " + w + `). Use next/script instead. 
See more info here: https://nextjs.org/docs/messages/no-script-tags-in-head-component`);
          } else A.type === "link" && A.props.rel === "stylesheet" && (0, d.warnOnce)('Do not add stylesheets using next/head (see <link rel="stylesheet"> tag with href="' + A.props.href + `"). Use Document instead. 
See more info here: https://nextjs.org/docs/messages/no-stylesheets-in-head-component`);
        return /* @__PURE__ */ s.default.cloneElement(A, {
          key: R
        });
      });
    }
    function h(S) {
      let { children: m } = S;
      const y = (0, s.useContext)(l.AmpStateContext), A = (0, s.useContext)(i.HeadManagerContext);
      return /* @__PURE__ */ s.default.createElement(a.default, {
        reduceComponentsToState: g,
        headManager: A,
        inAmpMode: (0, p.isInAmpMode)(y)
      }, m);
    }
    const E = h;
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(ct, ct.exports)), ct.exports;
}
var jt = {}, Zr;
function ia() {
  return Zr || (Zr = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "ImageConfigContext", {
      enumerable: !0,
      get: function() {
        return o;
      }
    });
    const r = /* @__PURE__ */ Te._(pe), n = Pt, o = r.default.createContext(n.imageConfigDefault);
    process.env.NODE_ENV !== "production" && (o.displayName = "ImageConfigContext");
  }(jt)), jt;
}
var Ht = {}, Yr;
function mo() {
  return Yr || (Yr = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "RouterContext", {
      enumerable: !0,
      get: function() {
        return n;
      }
    });
    const n = (/* @__PURE__ */ Te._(pe)).default.createContext(null);
    process.env.NODE_ENV !== "production" && (n.displayName = "RouterContext");
  }(Ht)), Ht;
}
var Dt = {}, qt = {}, Ut = { exports: {} };
const la = {}, ca = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: la
}, Symbol.toStringTag, { value: "Module" })), wr = /* @__PURE__ */ Js(ca);
var Jr;
function ua() {
  return Jr || (Jr = 1, (() => {
    var e = { 333: (o, s, a) => {
      const l = a(137), i = a(179), p = a(13), d = a(719), b = (v, c = {}) => {
        let f = [];
        if (Array.isArray(v))
          for (let g of v) {
            let h = b.create(g, c);
            Array.isArray(h) ? f.push(...h) : f.push(h);
          }
        else
          f = [].concat(b.create(v, c));
        return c && c.expand === !0 && c.nodupes === !0 && (f = [...new Set(f)]), f;
      };
      b.parse = (v, c = {}) => d(v, c), b.stringify = (v, c = {}) => l(typeof v == "string" ? b.parse(v, c) : v, c), b.compile = (v, c = {}) => (typeof v == "string" && (v = b.parse(v, c)), i(v, c)), b.expand = (v, c = {}) => {
        typeof v == "string" && (v = b.parse(v, c));
        let f = p(v, c);
        return c.noempty === !0 && (f = f.filter(Boolean)), c.nodupes === !0 && (f = [...new Set(f)]), f;
      }, b.create = (v, c = {}) => v === "" || v.length < 3 ? [v] : c.expand !== !0 ? b.compile(v, c) : b.expand(v, c), o.exports = b;
    }, 179: (o, s, a) => {
      const l = a(783), i = a(617), p = (d, b = {}) => {
        let v = (c, f = {}) => {
          let g = i.isInvalidBrace(f), h = c.invalid === !0 && b.escapeInvalid === !0, E = g === !0 || h === !0, S = b.escapeInvalid === !0 ? "\\" : "", m = "";
          if (c.isOpen === !0 || c.isClose === !0)
            return S + c.value;
          if (c.type === "open")
            return E ? S + c.value : "(";
          if (c.type === "close")
            return E ? S + c.value : ")";
          if (c.type === "comma")
            return c.prev.type === "comma" ? "" : E ? c.value : "|";
          if (c.value)
            return c.value;
          if (c.nodes && c.ranges > 0) {
            let y = i.reduce(c.nodes), A = l(...y, { ...b, wrap: !1, toRegex: !0 });
            if (A.length !== 0)
              return y.length > 1 && A.length > 1 ? `(${A})` : A;
          }
          if (c.nodes)
            for (let y of c.nodes)
              m += v(y, c);
          return m;
        };
        return v(d);
      };
      o.exports = p;
    }, 457: (o) => {
      o.exports = { MAX_LENGTH: 65536, CHAR_0: "0", CHAR_9: "9", CHAR_UPPERCASE_A: "A", CHAR_LOWERCASE_A: "a", CHAR_UPPERCASE_Z: "Z", CHAR_LOWERCASE_Z: "z", CHAR_LEFT_PARENTHESES: "(", CHAR_RIGHT_PARENTHESES: ")", CHAR_ASTERISK: "*", CHAR_AMPERSAND: "&", CHAR_AT: "@", CHAR_BACKSLASH: "\\", CHAR_BACKTICK: "`", CHAR_CARRIAGE_RETURN: "\r", CHAR_CIRCUMFLEX_ACCENT: "^", CHAR_COLON: ":", CHAR_COMMA: ",", CHAR_DOLLAR: "$", CHAR_DOT: ".", CHAR_DOUBLE_QUOTE: '"', CHAR_EQUAL: "=", CHAR_EXCLAMATION_MARK: "!", CHAR_FORM_FEED: "\f", CHAR_FORWARD_SLASH: "/", CHAR_HASH: "#", CHAR_HYPHEN_MINUS: "-", CHAR_LEFT_ANGLE_BRACKET: "<", CHAR_LEFT_CURLY_BRACE: "{", CHAR_LEFT_SQUARE_BRACKET: "[", CHAR_LINE_FEED: `
`, CHAR_NO_BREAK_SPACE: " ", CHAR_PERCENT: "%", CHAR_PLUS: "+", CHAR_QUESTION_MARK: "?", CHAR_RIGHT_ANGLE_BRACKET: ">", CHAR_RIGHT_CURLY_BRACE: "}", CHAR_RIGHT_SQUARE_BRACKET: "]", CHAR_SEMICOLON: ";", CHAR_SINGLE_QUOTE: "'", CHAR_SPACE: " ", CHAR_TAB: "	", CHAR_UNDERSCORE: "_", CHAR_VERTICAL_LINE: "|", CHAR_ZERO_WIDTH_NOBREAK_SPACE: "\uFEFF" };
    }, 13: (o, s, a) => {
      const l = a(783), i = a(137), p = a(617), d = (v = "", c = "", f = !1) => {
        let g = [];
        if (v = [].concat(v), c = [].concat(c), !c.length) return v;
        if (!v.length)
          return f ? p.flatten(c).map((h) => `{${h}}`) : c;
        for (let h of v)
          if (Array.isArray(h))
            for (let E of h)
              g.push(d(E, c, f));
          else
            for (let E of c)
              f === !0 && typeof E == "string" && (E = `{${E}}`), g.push(Array.isArray(E) ? d(h, E, f) : h + E);
        return p.flatten(g);
      }, b = (v, c = {}) => {
        let f = c.rangeLimit === void 0 ? 1e3 : c.rangeLimit, g = (h, E = {}) => {
          h.queue = [];
          let S = E, m = E.queue;
          for (; S.type !== "brace" && S.type !== "root" && S.parent; )
            S = S.parent, m = S.queue;
          if (h.invalid || h.dollar) {
            m.push(d(m.pop(), i(h, c)));
            return;
          }
          if (h.type === "brace" && h.invalid !== !0 && h.nodes.length === 2) {
            m.push(d(m.pop(), ["{}"]));
            return;
          }
          if (h.nodes && h.ranges > 0) {
            let R = p.reduce(h.nodes);
            if (p.exceedsLimit(...R, c.step, f))
              throw new RangeError("expanded array length exceeds range limit. Use options.rangeLimit to increase or disable the limit.");
            let w = l(...R, c);
            w.length === 0 && (w = i(h, c)), m.push(d(m.pop(), w)), h.nodes = [];
            return;
          }
          let y = p.encloseBrace(h), A = h.queue, N = h;
          for (; N.type !== "brace" && N.type !== "root" && N.parent; )
            N = N.parent, A = N.queue;
          for (let R = 0; R < h.nodes.length; R++) {
            let w = h.nodes[R];
            if (w.type === "comma" && h.type === "brace") {
              R === 1 && A.push(""), A.push("");
              continue;
            }
            if (w.type === "close") {
              m.push(d(m.pop(), A, y));
              continue;
            }
            if (w.value && w.type !== "open") {
              A.push(d(A.pop(), w.value));
              continue;
            }
            w.nodes && g(w, h);
          }
          return A;
        };
        return p.flatten(g(v));
      };
      o.exports = b;
    }, 719: (o, s, a) => {
      const l = a(137), { MAX_LENGTH: i, CHAR_BACKSLASH: p, CHAR_BACKTICK: d, CHAR_COMMA: b, CHAR_DOT: v, CHAR_LEFT_PARENTHESES: c, CHAR_RIGHT_PARENTHESES: f, CHAR_LEFT_CURLY_BRACE: g, CHAR_RIGHT_CURLY_BRACE: h, CHAR_LEFT_SQUARE_BRACKET: E, CHAR_RIGHT_SQUARE_BRACKET: S, CHAR_DOUBLE_QUOTE: m, CHAR_SINGLE_QUOTE: y, CHAR_NO_BREAK_SPACE: A, CHAR_ZERO_WIDTH_NOBREAK_SPACE: N } = a(457), R = (w, $ = {}) => {
        if (typeof w != "string")
          throw new TypeError("Expected a string");
        let _ = $ || {}, T = typeof _.maxLength == "number" ? Math.min(i, _.maxLength) : i;
        if (w.length > T)
          throw new SyntaxError(`Input length (${w.length}), exceeds max characters (${T})`);
        let x = { type: "root", input: w, nodes: [] }, k = [x], C = x, L = x, O = 0, M = w.length, P = 0, D = 0, z;
        const Q = () => w[P++], W = (K) => {
          if (K.type === "text" && L.type === "dot" && (L.type = "text"), L && L.type === "text" && K.type === "text") {
            L.value += K.value;
            return;
          }
          return C.nodes.push(K), K.parent = C, K.prev = L, L = K, K;
        };
        for (W({ type: "bos" }); P < M; )
          if (C = k[k.length - 1], z = Q(), !(z === N || z === A)) {
            if (z === p) {
              W({ type: "text", value: ($.keepEscaping ? z : "") + Q() });
              continue;
            }
            if (z === S) {
              W({ type: "text", value: "\\" + z });
              continue;
            }
            if (z === E) {
              O++;
              let K;
              for (; P < M && (K = Q()); ) {
                if (z += K, K === E) {
                  O++;
                  continue;
                }
                if (K === p) {
                  z += Q();
                  continue;
                }
                if (K === S && (O--, O === 0))
                  break;
              }
              W({ type: "text", value: z });
              continue;
            }
            if (z === c) {
              C = W({ type: "paren", nodes: [] }), k.push(C), W({ type: "text", value: z });
              continue;
            }
            if (z === f) {
              if (C.type !== "paren") {
                W({ type: "text", value: z });
                continue;
              }
              C = k.pop(), W({ type: "text", value: z }), C = k[k.length - 1];
              continue;
            }
            if (z === m || z === y || z === d) {
              let K = z, B;
              for ($.keepQuotes !== !0 && (z = ""); P < M && (B = Q()); ) {
                if (B === p) {
                  z += B + Q();
                  continue;
                }
                if (B === K) {
                  $.keepQuotes === !0 && (z += B);
                  break;
                }
                z += B;
              }
              W({ type: "text", value: z });
              continue;
            }
            if (z === g) {
              D++;
              let B = { type: "brace", open: !0, close: !1, dollar: L.value && L.value.slice(-1) === "$" || C.dollar === !0, depth: D, commas: 0, ranges: 0, nodes: [] };
              C = W(B), k.push(C), W({ type: "open", value: z });
              continue;
            }
            if (z === h) {
              if (C.type !== "brace") {
                W({ type: "text", value: z });
                continue;
              }
              let K = "close";
              C = k.pop(), C.close = !0, W({ type: K, value: z }), D--, C = k[k.length - 1];
              continue;
            }
            if (z === b && D > 0) {
              if (C.ranges > 0) {
                C.ranges = 0;
                let K = C.nodes.shift();
                C.nodes = [K, { type: "text", value: l(C) }];
              }
              W({ type: "comma", value: z }), C.commas++;
              continue;
            }
            if (z === v && D > 0 && C.commas === 0) {
              let K = C.nodes;
              if (D === 0 || K.length === 0) {
                W({ type: "text", value: z });
                continue;
              }
              if (L.type === "dot") {
                if (C.range = [], L.value += z, L.type = "range", C.nodes.length !== 3 && C.nodes.length !== 5) {
                  C.invalid = !0, C.ranges = 0, L.type = "text";
                  continue;
                }
                C.ranges++, C.args = [];
                continue;
              }
              if (L.type === "range") {
                K.pop();
                let B = K[K.length - 1];
                B.value += L.value + z, L = B, C.ranges--;
                continue;
              }
              W({ type: "dot", value: z });
              continue;
            }
            W({ type: "text", value: z });
          }
        do
          if (C = k.pop(), C.type !== "root") {
            C.nodes.forEach((re) => {
              re.nodes || (re.type === "open" && (re.isOpen = !0), re.type === "close" && (re.isClose = !0), re.nodes || (re.type = "text"), re.invalid = !0);
            });
            let K = k[k.length - 1], B = K.nodes.indexOf(C);
            K.nodes.splice(B, 1, ...C.nodes);
          }
        while (k.length > 0);
        return W({ type: "eos" }), x;
      };
      o.exports = R;
    }, 137: (o, s, a) => {
      const l = a(617);
      o.exports = (i, p = {}) => {
        let d = (b, v = {}) => {
          let c = p.escapeInvalid && l.isInvalidBrace(v), f = b.invalid === !0 && p.escapeInvalid === !0, g = "";
          if (b.value)
            return (c || f) && l.isOpenOrClose(b) ? "\\" + b.value : b.value;
          if (b.value)
            return b.value;
          if (b.nodes)
            for (let h of b.nodes)
              g += d(h);
          return g;
        };
        return d(i);
      };
    }, 617: (o, s) => {
      s.isInteger = (a) => typeof a == "number" ? Number.isInteger(a) : typeof a == "string" && a.trim() !== "" ? Number.isInteger(Number(a)) : !1, s.find = (a, l) => a.nodes.find((i) => i.type === l), s.exceedsLimit = (a, l, i = 1, p) => p === !1 || !s.isInteger(a) || !s.isInteger(l) ? !1 : (Number(l) - Number(a)) / Number(i) >= p, s.escapeNode = (a, l = 0, i) => {
        let p = a.nodes[l];
        p && (i && p.type === i || p.type === "open" || p.type === "close") && p.escaped !== !0 && (p.value = "\\" + p.value, p.escaped = !0);
      }, s.encloseBrace = (a) => a.type !== "brace" || a.commas >> 0 + a.ranges >> 0 ? !1 : (a.invalid = !0, !0), s.isInvalidBrace = (a) => a.type !== "brace" ? !1 : a.invalid === !0 || a.dollar ? !0 : !(a.commas >> 0 + a.ranges >> 0) || a.open !== !0 || a.close !== !0 ? (a.invalid = !0, !0) : !1, s.isOpenOrClose = (a) => a.type === "open" || a.type === "close" ? !0 : a.open === !0 || a.close === !0, s.reduce = (a) => a.reduce((l, i) => (i.type === "text" && l.push(i.value), i.type === "range" && (i.type = "text"), l), []), s.flatten = (...a) => {
        const l = [], i = (p) => {
          for (let d = 0; d < p.length; d++) {
            let b = p[d];
            Array.isArray(b) ? i(b) : b !== void 0 && l.push(b);
          }
          return l;
        };
        return i(a), l;
      };
    }, 783: (o, s, a) => {
      /*!
       * fill-range <https://github.com/jonschlinkert/fill-range>
       *
       * Copyright (c) 2014-present, Jon Schlinkert.
       * Licensed under the MIT License.
       */
      const l = a(837), i = a(492), p = (_) => _ !== null && typeof _ == "object" && !Array.isArray(_), d = (_) => (T) => _ === !0 ? Number(T) : String(T), b = (_) => typeof _ == "number" || typeof _ == "string" && _ !== "", v = (_) => Number.isInteger(+_), c = (_) => {
        let T = `${_}`, x = -1;
        if (T[0] === "-" && (T = T.slice(1)), T === "0") return !1;
        for (; T[++x] === "0"; ) ;
        return x > 0;
      }, f = (_, T, x) => typeof _ == "string" || typeof T == "string" ? !0 : x.stringify === !0, g = (_, T, x) => {
        if (T > 0) {
          let k = _[0] === "-" ? "-" : "";
          k && (_ = _.slice(1)), _ = k + _.padStart(k ? T - 1 : T, "0");
        }
        return x === !1 ? String(_) : _;
      }, h = (_, T) => {
        let x = _[0] === "-" ? "-" : "";
        for (x && (_ = _.slice(1), T--); _.length < T; ) _ = "0" + _;
        return x ? "-" + _ : _;
      }, E = (_, T) => {
        _.negatives.sort((O, M) => O < M ? -1 : O > M ? 1 : 0), _.positives.sort((O, M) => O < M ? -1 : O > M ? 1 : 0);
        let x = T.capture ? "" : "?:", k = "", C = "", L;
        return _.positives.length && (k = _.positives.join("|")), _.negatives.length && (C = `-(${x}${_.negatives.join("|")})`), k && C ? L = `${k}|${C}` : L = k || C, T.wrap ? `(${x}${L})` : L;
      }, S = (_, T, x, k) => {
        if (x)
          return i(_, T, { wrap: !1, ...k });
        let C = String.fromCharCode(_);
        if (_ === T) return C;
        let L = String.fromCharCode(T);
        return `[${C}-${L}]`;
      }, m = (_, T, x) => {
        if (Array.isArray(_)) {
          let k = x.wrap === !0, C = x.capture ? "" : "?:";
          return k ? `(${C}${_.join("|")})` : _.join("|");
        }
        return i(_, T, x);
      }, y = (..._) => new RangeError("Invalid range arguments: " + l.inspect(..._)), A = (_, T, x) => {
        if (x.strictRanges === !0) throw y([_, T]);
        return [];
      }, N = (_, T) => {
        if (T.strictRanges === !0)
          throw new TypeError(`Expected step "${_}" to be a number`);
        return [];
      }, R = (_, T, x = 1, k = {}) => {
        let C = Number(_), L = Number(T);
        if (!Number.isInteger(C) || !Number.isInteger(L)) {
          if (k.strictRanges === !0) throw y([_, T]);
          return [];
        }
        C === 0 && (C = 0), L === 0 && (L = 0);
        let O = C > L, M = String(_), P = String(T), D = String(x);
        x = Math.max(Math.abs(x), 1);
        let z = c(M) || c(P) || c(D), Q = z ? Math.max(M.length, P.length, D.length) : 0, W = z === !1 && f(_, T, k) === !1, K = k.transform || d(W);
        if (k.toRegex && x === 1)
          return S(h(_, Q), h(T, Q), !0, k);
        let B = { negatives: [], positives: [] }, re = (j) => B[j < 0 ? "negatives" : "positives"].push(Math.abs(j)), X = [], F = 0;
        for (; O ? C >= L : C <= L; )
          k.toRegex === !0 && x > 1 ? re(C) : X.push(g(K(C, F), Q, W)), C = O ? C - x : C + x, F++;
        return k.toRegex === !0 ? x > 1 ? E(B, k) : m(X, null, { wrap: !1, ...k }) : X;
      }, w = (_, T, x = 1, k = {}) => {
        if (!v(_) && _.length > 1 || !v(T) && T.length > 1)
          return A(_, T, k);
        let C = k.transform || ((W) => String.fromCharCode(W)), L = `${_}`.charCodeAt(0), O = `${T}`.charCodeAt(0), M = L > O, P = Math.min(L, O), D = Math.max(L, O);
        if (k.toRegex && x === 1)
          return S(P, D, !1, k);
        let z = [], Q = 0;
        for (; M ? L >= O : L <= O; )
          z.push(C(L, Q)), L = M ? L - x : L + x, Q++;
        return k.toRegex === !0 ? m(z, null, { wrap: !1, options: k }) : z;
      }, $ = (_, T, x, k = {}) => {
        if (T == null && b(_))
          return [_];
        if (!b(_) || !b(T))
          return A(_, T, k);
        if (typeof x == "function")
          return $(_, T, 1, { transform: x });
        if (p(x))
          return $(_, T, 0, x);
        let C = { ...k };
        return C.capture === !0 && (C.wrap = !0), x = x || C.step || 1, v(x) ? v(_) && v(T) ? R(_, T, x, C) : w(_, T, Math.max(Math.abs(x), 1), C) : x != null && !p(x) ? N(x, C) : $(_, T, 1, x);
      };
      o.exports = $;
    }, 357: (o) => {
      /*!
       * is-number <https://github.com/jonschlinkert/is-number>
       *
       * Copyright (c) 2014-present, Jon Schlinkert.
       * Released under the MIT License.
       */
      o.exports = function(s) {
        return typeof s == "number" ? s - s === 0 : typeof s == "string" && s.trim() !== "" ? Number.isFinite ? Number.isFinite(+s) : isFinite(+s) : !1;
      };
    }, 971: (o, s, a) => {
      const l = a(837), i = a(333), p = a(251), d = a(513), b = (c) => c === "" || c === "./", v = (c, f, g) => {
        f = [].concat(f), c = [].concat(c);
        let h = /* @__PURE__ */ new Set(), E = /* @__PURE__ */ new Set(), S = /* @__PURE__ */ new Set(), m = 0, y = (R) => {
          S.add(R.output), g && g.onResult && g.onResult(R);
        };
        for (let R = 0; R < f.length; R++) {
          let w = p(String(f[R]), { ...g, onResult: y }, !0), $ = w.state.negated || w.state.negatedExtglob;
          $ && m++;
          for (let _ of c) {
            let T = w(_, !0);
            ($ ? !T.isMatch : T.isMatch) && ($ ? h.add(T.output) : (h.delete(T.output), E.add(T.output)));
          }
        }
        let N = (m === f.length ? [...S] : [...E]).filter((R) => !h.has(R));
        if (g && N.length === 0) {
          if (g.failglob === !0)
            throw new Error(`No matches found for "${f.join(", ")}"`);
          if (g.nonull === !0 || g.nullglob === !0)
            return g.unescape ? f.map((R) => R.replace(/\\/g, "")) : f;
        }
        return N;
      };
      v.match = v, v.matcher = (c, f) => p(c, f), v.isMatch = (c, f, g) => p(f, g)(c), v.any = v.isMatch, v.not = (c, f, g = {}) => {
        f = [].concat(f).map(String);
        let h = /* @__PURE__ */ new Set(), E = [], m = v(c, f, { ...g, onResult: (y) => {
          g.onResult && g.onResult(y), E.push(y.output);
        } });
        for (let y of E)
          m.includes(y) || h.add(y);
        return [...h];
      }, v.contains = (c, f, g) => {
        if (typeof c != "string")
          throw new TypeError(`Expected a string: "${l.inspect(c)}"`);
        if (Array.isArray(f))
          return f.some((h) => v.contains(c, h, g));
        if (typeof f == "string") {
          if (b(c) || b(f))
            return !1;
          if (c.includes(f) || c.startsWith("./") && c.slice(2).includes(f))
            return !0;
        }
        return v.isMatch(c, f, { ...g, contains: !0 });
      }, v.matchKeys = (c, f, g) => {
        if (!d.isObject(c))
          throw new TypeError("Expected the first argument to be an object");
        let h = v(Object.keys(c), f, g), E = {};
        for (let S of h) E[S] = c[S];
        return E;
      }, v.some = (c, f, g) => {
        let h = [].concat(c);
        for (let E of [].concat(f)) {
          let S = p(String(E), g);
          if (h.some((m) => S(m)))
            return !0;
        }
        return !1;
      }, v.every = (c, f, g) => {
        let h = [].concat(c);
        for (let E of [].concat(f)) {
          let S = p(String(E), g);
          if (!h.every((m) => S(m)))
            return !1;
        }
        return !0;
      }, v.all = (c, f, g) => {
        if (typeof c != "string")
          throw new TypeError(`Expected a string: "${l.inspect(c)}"`);
        return [].concat(f).every((h) => p(h, g)(c));
      }, v.capture = (c, f, g) => {
        let h = d.isWindows(g), S = p.makeRe(String(c), { ...g, capture: !0 }).exec(h ? d.toPosixSlashes(f) : f);
        if (S)
          return S.slice(1).map((m) => m === void 0 ? "" : m);
      }, v.makeRe = (...c) => p.makeRe(...c), v.scan = (...c) => p.scan(...c), v.parse = (c, f) => {
        let g = [];
        for (let h of [].concat(c || []))
          for (let E of i(String(h), f))
            g.push(p.parse(E, f));
        return g;
      }, v.braces = (c, f) => {
        if (typeof c != "string") throw new TypeError("Expected a string");
        return f && f.nobrace === !0 || !/\{.*\}/.test(c) ? [c] : i(c, f);
      }, v.braceExpand = (c, f) => {
        if (typeof c != "string") throw new TypeError("Expected a string");
        return v.braces(c, { ...f, expand: !0 });
      }, o.exports = v;
    }, 251: (o, s, a) => {
      o.exports = a(683);
    }, 356: (o, s, a) => {
      const l = a(17), i = "\\\\/", p = `[^${i}]`, d = "\\.", b = "\\+", v = "\\?", c = "\\/", f = "(?=.)", g = "[^/]", h = `(?:${c}|$)`, E = `(?:^|${c})`, S = `${d}{1,2}${h}`, m = `(?!${d})`, y = `(?!${E}${S})`, A = `(?!${d}{0,1}${h})`, N = `(?!${S})`, R = `[^.${c}]`, w = `${g}*?`, $ = { DOT_LITERAL: d, PLUS_LITERAL: b, QMARK_LITERAL: v, SLASH_LITERAL: c, ONE_CHAR: f, QMARK: g, END_ANCHOR: h, DOTS_SLASH: S, NO_DOT: m, NO_DOTS: y, NO_DOT_SLASH: A, NO_DOTS_SLASH: N, QMARK_NO_DOT: R, STAR: w, START_ANCHOR: E }, _ = { ...$, SLASH_LITERAL: `[${i}]`, QMARK: p, STAR: `${p}*?`, DOTS_SLASH: `${d}{1,2}(?:[${i}]|$)`, NO_DOT: `(?!${d})`, NO_DOTS: `(?!(?:^|[${i}])${d}{1,2}(?:[${i}]|$))`, NO_DOT_SLASH: `(?!${d}{0,1}(?:[${i}]|$))`, NO_DOTS_SLASH: `(?!${d}{1,2}(?:[${i}]|$))`, QMARK_NO_DOT: `[^.${i}]`, START_ANCHOR: `(?:^|[${i}])`, END_ANCHOR: `(?:[${i}]|$)` }, T = { alnum: "a-zA-Z0-9", alpha: "a-zA-Z", ascii: "\\x00-\\x7F", blank: " \\t", cntrl: "\\x00-\\x1F\\x7F", digit: "0-9", graph: "\\x21-\\x7E", lower: "a-z", print: "\\x20-\\x7E ", punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~", space: " \\t\\r\\n\\v\\f", upper: "A-Z", word: "A-Za-z0-9_", xdigit: "A-Fa-f0-9" };
      o.exports = { MAX_LENGTH: 65536, POSIX_REGEX_SOURCE: T, REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g, REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/, REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/, REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g, REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g, REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g, REPLACEMENTS: { "***": "*", "**/**": "**", "**/**/**": "**" }, CHAR_0: 48, CHAR_9: 57, CHAR_UPPERCASE_A: 65, CHAR_LOWERCASE_A: 97, CHAR_UPPERCASE_Z: 90, CHAR_LOWERCASE_Z: 122, CHAR_LEFT_PARENTHESES: 40, CHAR_RIGHT_PARENTHESES: 41, CHAR_ASTERISK: 42, CHAR_AMPERSAND: 38, CHAR_AT: 64, CHAR_BACKWARD_SLASH: 92, CHAR_CARRIAGE_RETURN: 13, CHAR_CIRCUMFLEX_ACCENT: 94, CHAR_COLON: 58, CHAR_COMMA: 44, CHAR_DOT: 46, CHAR_DOUBLE_QUOTE: 34, CHAR_EQUAL: 61, CHAR_EXCLAMATION_MARK: 33, CHAR_FORM_FEED: 12, CHAR_FORWARD_SLASH: 47, CHAR_GRAVE_ACCENT: 96, CHAR_HASH: 35, CHAR_HYPHEN_MINUS: 45, CHAR_LEFT_ANGLE_BRACKET: 60, CHAR_LEFT_CURLY_BRACE: 123, CHAR_LEFT_SQUARE_BRACKET: 91, CHAR_LINE_FEED: 10, CHAR_NO_BREAK_SPACE: 160, CHAR_PERCENT: 37, CHAR_PLUS: 43, CHAR_QUESTION_MARK: 63, CHAR_RIGHT_ANGLE_BRACKET: 62, CHAR_RIGHT_CURLY_BRACE: 125, CHAR_RIGHT_SQUARE_BRACKET: 93, CHAR_SEMICOLON: 59, CHAR_SINGLE_QUOTE: 39, CHAR_SPACE: 32, CHAR_TAB: 9, CHAR_UNDERSCORE: 95, CHAR_VERTICAL_LINE: 124, CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279, SEP: l.sep, extglobChars(x) {
        return { "!": { type: "negate", open: "(?:(?!(?:", close: `))${x.STAR})` }, "?": { type: "qmark", open: "(?:", close: ")?" }, "+": { type: "plus", open: "(?:", close: ")+" }, "*": { type: "star", open: "(?:", close: ")*" }, "@": { type: "at", open: "(?:", close: ")" } };
      }, globChars(x) {
        return x === !0 ? _ : $;
      } };
    }, 754: (o, s, a) => {
      const l = a(356), i = a(513), { MAX_LENGTH: p, POSIX_REGEX_SOURCE: d, REGEX_NON_SPECIAL_CHARS: b, REGEX_SPECIAL_CHARS_BACKREF: v, REPLACEMENTS: c } = l, f = (E, S) => {
        if (typeof S.expandRange == "function")
          return S.expandRange(...E, S);
        E.sort();
        const m = `[${E.join("-")}]`;
        try {
          new RegExp(m);
        } catch {
          return E.map((A) => i.escapeRegex(A)).join("..");
        }
        return m;
      }, g = (E, S) => `Missing ${E}: "${S}" - use "\\\\${S}" to match literal characters`, h = (E, S) => {
        if (typeof E != "string")
          throw new TypeError("Expected a string");
        E = c[E] || E;
        const m = { ...S }, y = typeof m.maxLength == "number" ? Math.min(p, m.maxLength) : p;
        let A = E.length;
        if (A > y)
          throw new SyntaxError(`Input length: ${A}, exceeds maximum allowed length: ${y}`);
        const N = { type: "bos", value: "", output: m.prepend || "" }, R = [N], w = m.capture ? "" : "?:", $ = i.isWindows(S), _ = l.globChars($), T = l.extglobChars(_), { DOT_LITERAL: x, PLUS_LITERAL: k, SLASH_LITERAL: C, ONE_CHAR: L, DOTS_SLASH: O, NO_DOT: M, NO_DOT_SLASH: P, NO_DOTS_SLASH: D, QMARK: z, QMARK_NO_DOT: Q, STAR: W, START_ANCHOR: K } = _, B = (V) => `(${w}(?:(?!${K}${V.dot ? O : x}).)*?)`, re = m.dot ? "" : M, X = m.dot ? z : Q;
        let F = m.bash === !0 ? B(m) : W;
        m.capture && (F = `(${F})`), typeof m.noext == "boolean" && (m.noextglob = m.noext);
        const j = { input: E, index: -1, start: 0, dot: m.dot === !0, consumed: "", output: "", prefix: "", backtrack: !1, negated: !1, brackets: 0, braces: 0, parens: 0, quotes: 0, globstar: !1, tokens: R };
        E = i.removePrefix(E, j), A = E.length;
        const he = [], ie = [], se = [];
        let H = N, I;
        const ne = () => j.index === A - 1, de = j.peek = (V = 1) => E[j.index + V], Ne = j.advance = () => E[++j.index], be = () => E.slice(j.index + 1), fe = (V = "", Z = 0) => {
          j.consumed += V, j.index += Z;
        }, Ae = (V) => {
          j.output += V.output != null ? V.output : V.value, fe(V.value);
        }, xe = () => {
          let V = 1;
          for (; de() === "!" && (de(2) !== "(" || de(3) === "?"); )
            Ne(), j.start++, V++;
          return V % 2 === 0 ? !1 : (j.negated = !0, j.start++, !0);
        }, oe = (V) => {
          j[V]++, se.push(V);
        }, ye = (V) => {
          j[V]--, se.pop();
        }, U = (V) => {
          if (H.type === "globstar") {
            const Z = j.braces > 0 && (V.type === "comma" || V.type === "brace"), G = V.extglob === !0 || he.length && (V.type === "pipe" || V.type === "paren");
            V.type !== "slash" && V.type !== "paren" && !Z && !G && (j.output = j.output.slice(0, -H.output.length), H.type = "star", H.value = "*", H.output = F, j.output += H.output);
          }
          if (he.length && V.type !== "paren" && !T[V.value] && (he[he.length - 1].inner += V.value), (V.value || V.output) && Ae(V), H && H.type === "text" && V.type === "text") {
            H.value += V.value, H.output = (H.output || "") + V.value;
            return;
          }
          V.prev = H, R.push(V), H = V;
        }, ge = (V, Z) => {
          const G = { ...T[Z], conditions: 1, inner: "" };
          G.prev = H, G.parens = j.parens, G.output = j.output;
          const ue = (m.capture ? "(" : "") + G.open;
          oe("parens"), U({ type: V, value: Z, output: j.output ? "" : L }), U({ type: "paren", extglob: !0, value: Ne(), output: ue }), he.push(G);
        }, Ce = (V) => {
          let Z = V.close + (m.capture ? ")" : "");
          if (V.type === "negate") {
            let G = F;
            V.inner && V.inner.length > 1 && V.inner.includes("/") && (G = B(m)), (G !== F || ne() || /^\)+$/.test(be())) && (Z = V.close = `)$))${G}`), V.prev.type === "bos" && (j.negatedExtglob = !0);
          }
          U({ type: "paren", extglob: !0, value: I, output: Z }), ye("parens");
        };
        if (m.fastpaths !== !1 && !/(^[*!]|[/()[\]{}"])/.test(E)) {
          let V = !1, Z = E.replace(v, (G, ue, ve, Ee, we, Mt) => Ee === "\\" ? (V = !0, G) : Ee === "?" ? ue ? ue + Ee + (we ? z.repeat(we.length) : "") : Mt === 0 ? X + (we ? z.repeat(we.length) : "") : z.repeat(ve.length) : Ee === "." ? x.repeat(ve.length) : Ee === "*" ? ue ? ue + Ee + (we ? F : "") : F : ue ? G : `\\${G}`);
          return V === !0 && (m.unescape === !0 ? Z = Z.replace(/\\/g, "") : Z = Z.replace(/\\+/g, (G) => G.length % 2 === 0 ? "\\\\" : G ? "\\" : "")), Z === E && m.contains === !0 ? (j.output = E, j) : (j.output = i.wrapOutput(Z, j, S), j);
        }
        for (; !ne(); ) {
          if (I = Ne(), I === "\0")
            continue;
          if (I === "\\") {
            const G = de();
            if (G === "/" && m.bash !== !0 || G === "." || G === ";")
              continue;
            if (!G) {
              I += "\\", U({ type: "text", value: I });
              continue;
            }
            const ue = /^\\+/.exec(be());
            let ve = 0;
            if (ue && ue[0].length > 2 && (ve = ue[0].length, j.index += ve, ve % 2 !== 0 && (I += "\\")), m.unescape === !0 ? I = Ne() || "" : I += Ne() || "", j.brackets === 0) {
              U({ type: "text", value: I });
              continue;
            }
          }
          if (j.brackets > 0 && (I !== "]" || H.value === "[" || H.value === "[^")) {
            if (m.posix !== !1 && I === ":") {
              const G = H.value.slice(1);
              if (G.includes("[") && (H.posix = !0, G.includes(":"))) {
                const ue = H.value.lastIndexOf("["), ve = H.value.slice(0, ue), Ee = H.value.slice(ue + 2), we = d[Ee];
                if (we) {
                  H.value = ve + we, j.backtrack = !0, Ne(), !N.output && R.indexOf(H) === 1 && (N.output = L);
                  continue;
                }
              }
            }
            (I === "[" && de() !== ":" || I === "-" && de() === "]") && (I = `\\${I}`), I === "]" && (H.value === "[" || H.value === "[^") && (I = `\\${I}`), m.posix === !0 && I === "!" && H.value === "[" && (I = "^"), H.value += I, Ae({ value: I });
            continue;
          }
          if (j.quotes === 1 && I !== '"') {
            I = i.escapeRegex(I), H.value += I, Ae({ value: I });
            continue;
          }
          if (I === '"') {
            j.quotes = j.quotes === 1 ? 0 : 1, m.keepQuotes === !0 && U({ type: "text", value: I });
            continue;
          }
          if (I === "(") {
            oe("parens"), U({ type: "paren", value: I });
            continue;
          }
          if (I === ")") {
            if (j.parens === 0 && m.strictBrackets === !0)
              throw new SyntaxError(g("opening", "("));
            const G = he[he.length - 1];
            if (G && j.parens === G.parens + 1) {
              Ce(he.pop());
              continue;
            }
            U({ type: "paren", value: I, output: j.parens ? ")" : "\\)" }), ye("parens");
            continue;
          }
          if (I === "[") {
            if (m.nobracket === !0 || !be().includes("]")) {
              if (m.nobracket !== !0 && m.strictBrackets === !0)
                throw new SyntaxError(g("closing", "]"));
              I = `\\${I}`;
            } else
              oe("brackets");
            U({ type: "bracket", value: I });
            continue;
          }
          if (I === "]") {
            if (m.nobracket === !0 || H && H.type === "bracket" && H.value.length === 1) {
              U({ type: "text", value: I, output: `\\${I}` });
              continue;
            }
            if (j.brackets === 0) {
              if (m.strictBrackets === !0)
                throw new SyntaxError(g("opening", "["));
              U({ type: "text", value: I, output: `\\${I}` });
              continue;
            }
            ye("brackets");
            const G = H.value.slice(1);
            if (H.posix !== !0 && G[0] === "^" && !G.includes("/") && (I = `/${I}`), H.value += I, Ae({ value: I }), m.literalBrackets === !1 || i.hasRegexChars(G))
              continue;
            const ue = i.escapeRegex(H.value);
            if (j.output = j.output.slice(0, -H.value.length), m.literalBrackets === !0) {
              j.output += ue, H.value = ue;
              continue;
            }
            H.value = `(${w}${ue}|${H.value})`, j.output += H.value;
            continue;
          }
          if (I === "{" && m.nobrace !== !0) {
            oe("braces");
            const G = { type: "brace", value: I, output: "(", outputIndex: j.output.length, tokensIndex: j.tokens.length };
            ie.push(G), U(G);
            continue;
          }
          if (I === "}") {
            const G = ie[ie.length - 1];
            if (m.nobrace === !0 || !G) {
              U({ type: "text", value: I, output: I });
              continue;
            }
            let ue = ")";
            if (G.dots === !0) {
              const ve = R.slice(), Ee = [];
              for (let we = ve.length - 1; we >= 0 && (R.pop(), ve[we].type !== "brace"); we--)
                ve[we].type !== "dots" && Ee.unshift(ve[we].value);
              ue = f(Ee, m), j.backtrack = !0;
            }
            if (G.comma !== !0 && G.dots !== !0) {
              const ve = j.output.slice(0, G.outputIndex), Ee = j.tokens.slice(G.tokensIndex);
              G.value = G.output = "\\{", I = ue = "\\}", j.output = ve;
              for (const we of Ee)
                j.output += we.output || we.value;
            }
            U({ type: "brace", value: I, output: ue }), ye("braces"), ie.pop();
            continue;
          }
          if (I === "|") {
            he.length > 0 && he[he.length - 1].conditions++, U({ type: "text", value: I });
            continue;
          }
          if (I === ",") {
            let G = I;
            const ue = ie[ie.length - 1];
            ue && se[se.length - 1] === "braces" && (ue.comma = !0, G = "|"), U({ type: "comma", value: I, output: G });
            continue;
          }
          if (I === "/") {
            if (H.type === "dot" && j.index === j.start + 1) {
              j.start = j.index + 1, j.consumed = "", j.output = "", R.pop(), H = N;
              continue;
            }
            U({ type: "slash", value: I, output: C });
            continue;
          }
          if (I === ".") {
            if (j.braces > 0 && H.type === "dot") {
              H.value === "." && (H.output = x);
              const G = ie[ie.length - 1];
              H.type = "dots", H.output += I, H.value += I, G.dots = !0;
              continue;
            }
            if (j.braces + j.parens === 0 && H.type !== "bos" && H.type !== "slash") {
              U({ type: "text", value: I, output: x });
              continue;
            }
            U({ type: "dot", value: I, output: x });
            continue;
          }
          if (I === "?") {
            if (!(H && H.value === "(") && m.noextglob !== !0 && de() === "(" && de(2) !== "?") {
              ge("qmark", I);
              continue;
            }
            if (H && H.type === "paren") {
              const ue = de();
              let ve = I;
              if (ue === "<" && !i.supportsLookbehinds())
                throw new Error("Node.js v10 or higher is required for regex lookbehinds");
              (H.value === "(" && !/[!=<:]/.test(ue) || ue === "<" && !/<([!=]|\w+>)/.test(be())) && (ve = `\\${I}`), U({ type: "text", value: I, output: ve });
              continue;
            }
            if (m.dot !== !0 && (H.type === "slash" || H.type === "bos")) {
              U({ type: "qmark", value: I, output: Q });
              continue;
            }
            U({ type: "qmark", value: I, output: z });
            continue;
          }
          if (I === "!") {
            if (m.noextglob !== !0 && de() === "(" && (de(2) !== "?" || !/[!=<:]/.test(de(3)))) {
              ge("negate", I);
              continue;
            }
            if (m.nonegate !== !0 && j.index === 0) {
              xe();
              continue;
            }
          }
          if (I === "+") {
            if (m.noextglob !== !0 && de() === "(" && de(2) !== "?") {
              ge("plus", I);
              continue;
            }
            if (H && H.value === "(" || m.regex === !1) {
              U({ type: "plus", value: I, output: k });
              continue;
            }
            if (H && (H.type === "bracket" || H.type === "paren" || H.type === "brace") || j.parens > 0) {
              U({ type: "plus", value: I });
              continue;
            }
            U({ type: "plus", value: k });
            continue;
          }
          if (I === "@") {
            if (m.noextglob !== !0 && de() === "(" && de(2) !== "?") {
              U({ type: "at", extglob: !0, value: I, output: "" });
              continue;
            }
            U({ type: "text", value: I });
            continue;
          }
          if (I !== "*") {
            (I === "$" || I === "^") && (I = `\\${I}`);
            const G = b.exec(be());
            G && (I += G[0], j.index += G[0].length), U({ type: "text", value: I });
            continue;
          }
          if (H && (H.type === "globstar" || H.star === !0)) {
            H.type = "star", H.star = !0, H.value += I, H.output = F, j.backtrack = !0, j.globstar = !0, fe(I);
            continue;
          }
          let V = be();
          if (m.noextglob !== !0 && /^\([^?]/.test(V)) {
            ge("star", I);
            continue;
          }
          if (H.type === "star") {
            if (m.noglobstar === !0) {
              fe(I);
              continue;
            }
            const G = H.prev, ue = G.prev, ve = G.type === "slash" || G.type === "bos", Ee = ue && (ue.type === "star" || ue.type === "globstar");
            if (m.bash === !0 && (!ve || V[0] && V[0] !== "/")) {
              U({ type: "star", value: I, output: "" });
              continue;
            }
            const we = j.braces > 0 && (G.type === "comma" || G.type === "brace"), Mt = he.length && (G.type === "pipe" || G.type === "paren");
            if (!ve && G.type !== "paren" && !we && !Mt) {
              U({ type: "star", value: I, output: "" });
              continue;
            }
            for (; V.slice(0, 3) === "/**"; ) {
              const lt = E[j.index + 4];
              if (lt && lt !== "/")
                break;
              V = V.slice(3), fe("/**", 3);
            }
            if (G.type === "bos" && ne()) {
              H.type = "globstar", H.value += I, H.output = B(m), j.output = H.output, j.globstar = !0, fe(I);
              continue;
            }
            if (G.type === "slash" && G.prev.type !== "bos" && !Ee && ne()) {
              j.output = j.output.slice(0, -(G.output + H.output).length), G.output = `(?:${G.output}`, H.type = "globstar", H.output = B(m) + (m.strictSlashes ? ")" : "|$)"), H.value += I, j.globstar = !0, j.output += G.output + H.output, fe(I);
              continue;
            }
            if (G.type === "slash" && G.prev.type !== "bos" && V[0] === "/") {
              const lt = V[1] !== void 0 ? "|$" : "";
              j.output = j.output.slice(0, -(G.output + H.output).length), G.output = `(?:${G.output}`, H.type = "globstar", H.output = `${B(m)}${C}|${C}${lt})`, H.value += I, j.output += G.output + H.output, j.globstar = !0, fe(I + Ne()), U({ type: "slash", value: "/", output: "" });
              continue;
            }
            if (G.type === "bos" && V[0] === "/") {
              H.type = "globstar", H.value += I, H.output = `(?:^|${C}|${B(m)}${C})`, j.output = H.output, j.globstar = !0, fe(I + Ne()), U({ type: "slash", value: "/", output: "" });
              continue;
            }
            j.output = j.output.slice(0, -H.output.length), H.type = "globstar", H.output = B(m), H.value += I, j.output += H.output, j.globstar = !0, fe(I);
            continue;
          }
          const Z = { type: "star", value: I, output: F };
          if (m.bash === !0) {
            Z.output = ".*?", (H.type === "bos" || H.type === "slash") && (Z.output = re + Z.output), U(Z);
            continue;
          }
          if (H && (H.type === "bracket" || H.type === "paren") && m.regex === !0) {
            Z.output = I, U(Z);
            continue;
          }
          (j.index === j.start || H.type === "slash" || H.type === "dot") && (H.type === "dot" ? (j.output += P, H.output += P) : m.dot === !0 ? (j.output += D, H.output += D) : (j.output += re, H.output += re), de() !== "*" && (j.output += L, H.output += L)), U(Z);
        }
        for (; j.brackets > 0; ) {
          if (m.strictBrackets === !0) throw new SyntaxError(g("closing", "]"));
          j.output = i.escapeLast(j.output, "["), ye("brackets");
        }
        for (; j.parens > 0; ) {
          if (m.strictBrackets === !0) throw new SyntaxError(g("closing", ")"));
          j.output = i.escapeLast(j.output, "("), ye("parens");
        }
        for (; j.braces > 0; ) {
          if (m.strictBrackets === !0) throw new SyntaxError(g("closing", "}"));
          j.output = i.escapeLast(j.output, "{"), ye("braces");
        }
        if (m.strictSlashes !== !0 && (H.type === "star" || H.type === "bracket") && U({ type: "maybe_slash", value: "", output: `${C}?` }), j.backtrack === !0) {
          j.output = "";
          for (const V of j.tokens)
            j.output += V.output != null ? V.output : V.value, V.suffix && (j.output += V.suffix);
        }
        return j;
      };
      h.fastpaths = (E, S) => {
        const m = { ...S }, y = typeof m.maxLength == "number" ? Math.min(p, m.maxLength) : p, A = E.length;
        if (A > y)
          throw new SyntaxError(`Input length: ${A}, exceeds maximum allowed length: ${y}`);
        E = c[E] || E;
        const N = i.isWindows(S), { DOT_LITERAL: R, SLASH_LITERAL: w, ONE_CHAR: $, DOTS_SLASH: _, NO_DOT: T, NO_DOTS: x, NO_DOTS_SLASH: k, STAR: C, START_ANCHOR: L } = l.globChars(N), O = m.dot ? x : T, M = m.dot ? k : T, P = m.capture ? "" : "?:", D = { negated: !1, prefix: "" };
        let z = m.bash === !0 ? ".*?" : C;
        m.capture && (z = `(${z})`);
        const Q = (re) => re.noglobstar === !0 ? z : `(${P}(?:(?!${L}${re.dot ? _ : R}).)*?)`, W = (re) => {
          switch (re) {
            case "*":
              return `${O}${$}${z}`;
            case ".*":
              return `${R}${$}${z}`;
            case "*.*":
              return `${O}${z}${R}${$}${z}`;
            case "*/*":
              return `${O}${z}${w}${$}${M}${z}`;
            case "**":
              return O + Q(m);
            case "**/*":
              return `(?:${O}${Q(m)}${w})?${M}${$}${z}`;
            case "**/*.*":
              return `(?:${O}${Q(m)}${w})?${M}${z}${R}${$}${z}`;
            case "**/.*":
              return `(?:${O}${Q(m)}${w})?${R}${$}${z}`;
            default: {
              const X = /^(.*?)\.(\w+)$/.exec(re);
              if (!X) return;
              const F = W(X[1]);
              return F ? F + R + X[2] : void 0;
            }
          }
        }, K = i.removePrefix(E, D);
        let B = W(K);
        return B && m.strictSlashes !== !0 && (B += `${w}?`), B;
      }, o.exports = h;
    }, 683: (o, s, a) => {
      const l = a(17), i = a(700), p = a(754), d = a(513), b = a(356), v = (f) => f && typeof f == "object" && !Array.isArray(f), c = (f, g, h = !1) => {
        if (Array.isArray(f)) {
          const w = f.map((_) => c(_, g, h));
          return (_) => {
            for (const T of w) {
              const x = T(_);
              if (x) return x;
            }
            return !1;
          };
        }
        const E = v(f) && f.tokens && f.input;
        if (f === "" || typeof f != "string" && !E)
          throw new TypeError("Expected pattern to be a non-empty string");
        const S = g || {}, m = d.isWindows(g), y = E ? c.compileRe(f, g) : c.makeRe(f, g, !1, !0), A = y.state;
        delete y.state;
        let N = () => !1;
        if (S.ignore) {
          const w = { ...g, ignore: null, onMatch: null, onResult: null };
          N = c(S.ignore, w, h);
        }
        const R = (w, $ = !1) => {
          const { isMatch: _, match: T, output: x } = c.test(w, y, g, { glob: f, posix: m }), k = { glob: f, state: A, regex: y, posix: m, input: w, output: x, match: T, isMatch: _ };
          return typeof S.onResult == "function" && S.onResult(k), _ === !1 ? (k.isMatch = !1, $ ? k : !1) : N(w) ? (typeof S.onIgnore == "function" && S.onIgnore(k), k.isMatch = !1, $ ? k : !1) : (typeof S.onMatch == "function" && S.onMatch(k), $ ? k : !0);
        };
        return h && (R.state = A), R;
      };
      c.test = (f, g, h, { glob: E, posix: S } = {}) => {
        if (typeof f != "string")
          throw new TypeError("Expected input to be a string");
        if (f === "")
          return { isMatch: !1, output: "" };
        const m = h || {}, y = m.format || (S ? d.toPosixSlashes : null);
        let A = f === E, N = A && y ? y(f) : f;
        return A === !1 && (N = y ? y(f) : f, A = N === E), (A === !1 || m.capture === !0) && (m.matchBase === !0 || m.basename === !0 ? A = c.matchBase(f, g, h, S) : A = g.exec(N)), { isMatch: !!A, match: A, output: N };
      }, c.matchBase = (f, g, h, E = d.isWindows(h)) => (g instanceof RegExp ? g : c.makeRe(g, h)).test(l.basename(f)), c.isMatch = (f, g, h) => c(g, h)(f), c.parse = (f, g) => Array.isArray(f) ? f.map((h) => c.parse(h, g)) : p(f, { ...g, fastpaths: !1 }), c.scan = (f, g) => i(f, g), c.compileRe = (f, g, h = !1, E = !1) => {
        if (h === !0)
          return f.output;
        const S = g || {}, m = S.contains ? "" : "^", y = S.contains ? "" : "$";
        let A = `${m}(?:${f.output})${y}`;
        f && f.negated === !0 && (A = `^(?!${A}).*$`);
        const N = c.toRegex(A, g);
        return E === !0 && (N.state = f), N;
      }, c.makeRe = (f, g, h = !1, E = !1) => {
        if (!f || typeof f != "string")
          throw new TypeError("Expected a non-empty string");
        const S = g || {};
        let m = { negated: !1, fastpaths: !0 }, y = "", A;
        return f.startsWith("./") && (f = f.slice(2), y = m.prefix = "./"), S.fastpaths !== !1 && (f[0] === "." || f[0] === "*") && (A = p.fastpaths(f, g)), A === void 0 ? (m = p(f, g), m.prefix = y + (m.prefix || "")) : m.output = A, c.compileRe(m, g, h, E);
      }, c.toRegex = (f, g) => {
        try {
          const h = g || {};
          return new RegExp(f, h.flags || (h.nocase ? "i" : ""));
        } catch (h) {
          if (g && g.debug === !0) throw h;
          return /$^/;
        }
      }, c.constants = b, o.exports = c;
    }, 700: (o, s, a) => {
      const l = a(513), { CHAR_ASTERISK: i, CHAR_AT: p, CHAR_BACKWARD_SLASH: d, CHAR_COMMA: b, CHAR_DOT: v, CHAR_EXCLAMATION_MARK: c, CHAR_FORWARD_SLASH: f, CHAR_LEFT_CURLY_BRACE: g, CHAR_LEFT_PARENTHESES: h, CHAR_LEFT_SQUARE_BRACKET: E, CHAR_PLUS: S, CHAR_QUESTION_MARK: m, CHAR_RIGHT_CURLY_BRACE: y, CHAR_RIGHT_PARENTHESES: A, CHAR_RIGHT_SQUARE_BRACKET: N } = a(356), R = (_) => _ === f || _ === d, w = (_) => {
        _.isPrefix !== !0 && (_.depth = _.isGlobstar ? 1 / 0 : 1);
      }, $ = (_, T) => {
        const x = T || {}, k = _.length - 1, C = x.parts === !0 || x.scanToEnd === !0, L = [], O = [], M = [];
        let P = _, D = -1, z = 0, Q = 0, W = !1, K = !1, B = !1, re = !1, X = !1, F = !1, j = !1, he = !1, ie = !1, se = 0, H, I, ne = { value: "", depth: 0, isGlob: !1 };
        const de = () => D >= k, Ne = () => P.charCodeAt(D + 1), be = () => (H = I, P.charCodeAt(++D));
        for (; D < k; ) {
          I = be();
          let ye;
          if (I === d) {
            j = ne.backslashes = !0, I = be(), I === g && (F = !0);
            continue;
          }
          if (F === !0 || I === g) {
            for (se++; de() !== !0 && (I = be()); ) {
              if (I === d) {
                j = ne.backslashes = !0, be();
                continue;
              }
              if (I === g) {
                se++;
                continue;
              }
              if (F !== !0 && I === v && (I = be()) === v) {
                if (W = ne.isBrace = !0, B = ne.isGlob = !0, ie = !0, C === !0)
                  continue;
                break;
              }
              if (F !== !0 && I === b) {
                if (W = ne.isBrace = !0, B = ne.isGlob = !0, ie = !0, C === !0)
                  continue;
                break;
              }
              if (I === y && (se--, se === 0)) {
                F = !1, W = ne.isBrace = !0, ie = !0;
                break;
              }
            }
            if (C === !0)
              continue;
            break;
          }
          if (I === f) {
            if (L.push(D), O.push(ne), ne = { value: "", depth: 0, isGlob: !1 }, ie === !0) continue;
            if (H === v && D === z + 1) {
              z += 2;
              continue;
            }
            Q = D + 1;
            continue;
          }
          if (x.noext !== !0 && (I === S || I === p || I === i || I === m || I === c) === !0 && Ne() === h) {
            if (B = ne.isGlob = !0, re = ne.isExtglob = !0, ie = !0, C === !0) {
              for (; de() !== !0 && (I = be()); ) {
                if (I === d) {
                  j = ne.backslashes = !0, I = be();
                  continue;
                }
                if (I === A) {
                  B = ne.isGlob = !0, ie = !0;
                  break;
                }
              }
              continue;
            }
            break;
          }
          if (I === i) {
            if (H === i && (X = ne.isGlobstar = !0), B = ne.isGlob = !0, ie = !0, C === !0)
              continue;
            break;
          }
          if (I === m) {
            if (B = ne.isGlob = !0, ie = !0, C === !0)
              continue;
            break;
          }
          if (I === E) {
            for (; de() !== !0 && (ye = be()); ) {
              if (ye === d) {
                j = ne.backslashes = !0, be();
                continue;
              }
              if (ye === N) {
                K = ne.isBracket = !0, B = ne.isGlob = !0, ie = !0;
                break;
              }
            }
            if (C === !0)
              continue;
            break;
          }
          if (x.nonegate !== !0 && I === c && D === z) {
            he = ne.negated = !0, z++;
            continue;
          }
          if (x.noparen !== !0 && I === h) {
            if (B = ne.isGlob = !0, C === !0) {
              for (; de() !== !0 && (I = be()); ) {
                if (I === h) {
                  j = ne.backslashes = !0, I = be();
                  continue;
                }
                if (I === A) {
                  ie = !0;
                  break;
                }
              }
              continue;
            }
            break;
          }
          if (B === !0) {
            if (ie = !0, C === !0)
              continue;
            break;
          }
        }
        x.noext === !0 && (re = !1, B = !1);
        let fe = P, Ae = "", xe = "";
        z > 0 && (Ae = P.slice(0, z), P = P.slice(z), Q -= z), fe && B === !0 && Q > 0 ? (fe = P.slice(0, Q), xe = P.slice(Q)) : B === !0 ? (fe = "", xe = P) : fe = P, fe && fe !== "" && fe !== "/" && fe !== P && R(fe.charCodeAt(fe.length - 1)) && (fe = fe.slice(0, -1)), x.unescape === !0 && (xe && (xe = l.removeBackslashes(xe)), fe && j === !0 && (fe = l.removeBackslashes(fe)));
        const oe = { prefix: Ae, input: _, start: z, base: fe, glob: xe, isBrace: W, isBracket: K, isGlob: B, isExtglob: re, isGlobstar: X, negated: he };
        if (x.tokens === !0 && (oe.maxDepth = 0, R(I) || O.push(ne), oe.tokens = O), x.parts === !0 || x.tokens === !0) {
          let ye;
          for (let U = 0; U < L.length; U++) {
            const ge = ye ? ye + 1 : z, Ce = L[U], V = _.slice(ge, Ce);
            x.tokens && (U === 0 && z !== 0 ? (O[U].isPrefix = !0, O[U].value = Ae) : O[U].value = V, w(O[U]), oe.maxDepth += O[U].depth), (U !== 0 || V !== "") && M.push(V), ye = Ce;
          }
          if (ye && ye + 1 < _.length) {
            const U = _.slice(ye + 1);
            M.push(U), x.tokens && (O[O.length - 1].value = U, w(O[O.length - 1]), oe.maxDepth += O[O.length - 1].depth);
          }
          oe.slashes = L, oe.parts = M;
        }
        return oe;
      };
      o.exports = $;
    }, 513: (o, s, a) => {
      const l = a(17), i = process.platform === "win32", { REGEX_BACKSLASH: p, REGEX_REMOVE_BACKSLASH: d, REGEX_SPECIAL_CHARS: b, REGEX_SPECIAL_CHARS_GLOBAL: v } = a(356);
      s.isObject = (c) => c !== null && typeof c == "object" && !Array.isArray(c), s.hasRegexChars = (c) => b.test(c), s.isRegexChar = (c) => c.length === 1 && s.hasRegexChars(c), s.escapeRegex = (c) => c.replace(v, "\\$1"), s.toPosixSlashes = (c) => c.replace(p, "/"), s.removeBackslashes = (c) => c.replace(d, (f) => f === "\\" ? "" : f), s.supportsLookbehinds = () => {
        const c = process.version.slice(1).split(".").map(Number);
        return c.length === 3 && c[0] >= 9 || c[0] === 8 && c[1] >= 10;
      }, s.isWindows = (c) => c && typeof c.windows == "boolean" ? c.windows : i === !0 || l.sep === "\\", s.escapeLast = (c, f, g) => {
        const h = c.lastIndexOf(f, g);
        return h === -1 ? c : c[h - 1] === "\\" ? s.escapeLast(c, f, h - 1) : `${c.slice(0, h)}\\${c.slice(h)}`;
      }, s.removePrefix = (c, f = {}) => {
        let g = c;
        return g.startsWith("./") && (g = g.slice(2), f.prefix = "./"), g;
      }, s.wrapOutput = (c, f = {}, g = {}) => {
        const h = g.contains ? "" : "^", E = g.contains ? "" : "$";
        let S = `${h}(?:${c})${E}`;
        return f.negated === !0 && (S = `(?:^(?!${S}).*$)`), S;
      };
    }, 492: (o, s, a) => {
      /*!
       * to-regex-range <https://github.com/micromatch/to-regex-range>
       *
       * Copyright (c) 2015-present, Jon Schlinkert.
       * Released under the MIT License.
       */
      const l = a(357), i = (R, w, $) => {
        if (l(R) === !1)
          throw new TypeError("toRegexRange: expected the first argument to be a number");
        if (w === void 0 || R === w)
          return String(R);
        if (l(w) === !1)
          throw new TypeError("toRegexRange: expected the second argument to be a number.");
        let _ = { relaxZeros: !0, ...$ };
        typeof _.strictZeros == "boolean" && (_.relaxZeros = _.strictZeros === !1);
        let T = String(_.relaxZeros), x = String(_.shorthand), k = String(_.capture), C = String(_.wrap), L = R + ":" + w + "=" + T + x + k + C;
        if (i.cache.hasOwnProperty(L))
          return i.cache[L].result;
        let O = Math.min(R, w), M = Math.max(R, w);
        if (Math.abs(O - M) === 1) {
          let W = R + "|" + w;
          return _.capture ? `(${W})` : _.wrap === !1 ? W : `(?:${W})`;
        }
        let P = A(R) || A(w), D = { min: R, max: w, a: O, b: M }, z = [], Q = [];
        if (P && (D.isPadded = P, D.maxLen = String(D.max).length), O < 0) {
          let W = M < 0 ? Math.abs(M) : 1;
          Q = v(W, Math.abs(O), D, _), O = D.a = 0;
        }
        return M >= 0 && (z = v(O, M, D, _)), D.negatives = Q, D.positives = z, D.result = p(Q, z), _.capture === !0 ? D.result = `(${D.result})` : _.wrap !== !1 && z.length + Q.length > 1 && (D.result = `(?:${D.result})`), i.cache[L] = D, D.result;
      };
      function p(R, w, $) {
        let _ = c(R, w, "-", !1) || [], T = c(w, R, "", !1) || [], x = c(R, w, "-?", !0) || [];
        return _.concat(x).concat(T).join("|");
      }
      function d(R, w) {
        let $ = 1, _ = 1, T = E(R, $), x = /* @__PURE__ */ new Set([w]);
        for (; R <= T && T <= w; )
          x.add(T), $ += 1, T = E(R, $);
        for (T = S(w + 1, _) - 1; R < T && T <= w; )
          x.add(T), _ += 1, T = S(w + 1, _) - 1;
        return x = [...x], x.sort(g), x;
      }
      function b(R, w, $) {
        if (R === w)
          return { pattern: R, count: [], digits: 0 };
        let _ = f(R, w), T = _.length, x = "", k = 0;
        for (let C = 0; C < T; C++) {
          let [L, O] = _[C];
          L === O ? x += L : L !== "0" || O !== "9" ? x += y(L, O) : k++;
        }
        return k && (x += $.shorthand === !0 ? "\\d" : "[0-9]"), { pattern: x, count: [k], digits: T };
      }
      function v(R, w, $, _) {
        let T = d(R, w), x = [], k = R, C;
        for (let L = 0; L < T.length; L++) {
          let O = T[L], M = b(String(k), String(O), _), P = "";
          if (!$.isPadded && C && C.pattern === M.pattern) {
            C.count.length > 1 && C.count.pop(), C.count.push(M.count[0]), C.string = C.pattern + m(C.count), k = O + 1;
            continue;
          }
          $.isPadded && (P = N(O, $, _)), M.string = P + M.pattern + m(M.count), x.push(M), k = O + 1, C = M;
        }
        return x;
      }
      function c(R, w, $, _, T) {
        let x = [];
        for (let k of R) {
          let { string: C } = k;
          !_ && !h(w, "string", C) && x.push($ + C), _ && h(w, "string", C) && x.push($ + C);
        }
        return x;
      }
      function f(R, w) {
        let $ = [];
        for (let _ = 0; _ < R.length; _++) $.push([R[_], w[_]]);
        return $;
      }
      function g(R, w) {
        return R > w ? 1 : w > R ? -1 : 0;
      }
      function h(R, w, $) {
        return R.some((_) => _[w] === $);
      }
      function E(R, w) {
        return Number(String(R).slice(0, -w) + "9".repeat(w));
      }
      function S(R, w) {
        return R - R % Math.pow(10, w);
      }
      function m(R) {
        let [w = 0, $ = ""] = R;
        return $ || w > 1 ? `{${w + ($ ? "," + $ : "")}}` : "";
      }
      function y(R, w, $) {
        return `[${R}${w - R === 1 ? "" : "-"}${w}]`;
      }
      function A(R) {
        return /^-?(0+)\d/.test(R);
      }
      function N(R, w, $) {
        if (!w.isPadded)
          return R;
        let _ = Math.abs(w.maxLen - String(R).length), T = $.relaxZeros !== !1;
        switch (_) {
          case 0:
            return "";
          case 1:
            return T ? "0?" : "0";
          case 2:
            return T ? "0{0,2}" : "00";
          default:
            return T ? `0{0,${_}}` : `0{${_}}`;
        }
      }
      i.cache = {}, i.clearCache = () => i.cache = {}, o.exports = i;
    }, 17: (o) => {
      o.exports = wr;
    }, 837: (o) => {
      o.exports = wr;
    } }, t = {};
    function r(o) {
      var s = t[o];
      if (s !== void 0)
        return s.exports;
      var a = t[o] = { exports: {} }, l = !0;
      try {
        e[o](a, a.exports, r), l = !1;
      } finally {
        l && delete t[o];
      }
      return a.exports;
    }
    typeof r < "u" && (r.ab = __dirname + "/");
    var n = r(971);
    Ut.exports = n;
  })()), Ut.exports;
}
var en;
function da() {
  return en || (en = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    function t(s, a) {
      for (var l in a) Object.defineProperty(s, l, {
        enumerable: !0,
        get: a[l]
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
    const r = ua();
    function n(s, a) {
      if (s.protocol !== void 0) {
        const i = a.protocol.slice(0, -1);
        if (s.protocol !== i)
          return !1;
      }
      if (s.port !== void 0 && s.port !== a.port)
        return !1;
      if (s.hostname === void 0)
        throw new Error(`Pattern should define hostname but found
` + JSON.stringify(s));
      if (!(0, r.makeRe)(s.hostname).test(a.hostname))
        return !1;
      var l;
      return !!(0, r.makeRe)((l = s.pathname) != null ? l : "**").test(a.pathname);
    }
    function o(s, a, l) {
      return s.some((i) => l.hostname === i) || a.some((i) => n(i, l));
    }
  }(qt)), qt;
}
var tn;
function ho() {
  return tn || (tn = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "default", {
      enumerable: !0,
      get: function() {
        return r;
      }
    });
    function t(n) {
      let { config: o, src: s, width: a, quality: l } = n;
      if (process.env.NODE_ENV !== "production") {
        const i = [];
        if (s || i.push("src"), a || i.push("width"), i.length > 0)
          throw new Error("Next Image Optimization requires " + i.join(", ") + " to be provided. Make sure you pass them as props to the `next/image` component. Received: " + JSON.stringify({
            src: s,
            width: a,
            quality: l
          }));
        if (s.startsWith("//"))
          throw new Error('Failed to parse src "' + s + '" on `next/image`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)');
        if (!s.startsWith("/") && (o.domains || o.remotePatterns)) {
          let p;
          try {
            p = new URL(s);
          } catch (d) {
            throw console.error(d), new Error('Failed to parse src "' + s + '" on `next/image`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)');
          }
          if (process.env.NODE_ENV !== "test" && // micromatch isn't compatible with edge runtime
          process.env.NEXT_RUNTIME !== "edge") {
            const { hasMatch: d } = da();
            if (!d(o.domains, o.remotePatterns, p))
              throw new Error("Invalid src prop (" + s + ') on `next/image`, hostname "' + p.hostname + '" is not configured under images in your `next.config.js`\nSee more info: https://nextjs.org/docs/messages/next-image-unconfigured-host');
          }
        }
      }
      return o.path + "?url=" + encodeURIComponent(s) + "&w=" + a + "&q=" + (l || 75) + (process.env.NEXT_DEPLOYMENT_ID ? "&dpl=" + process.env.NEXT_DEPLOYMENT_ID : "");
    }
    t.__next_img_default = !0;
    const r = t;
  }(Dt)), Dt;
}
(function(e, t) {
  "use client";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "Image", {
    enumerable: !0,
    get: function() {
      return S;
    }
  });
  const r = Te, o = /* @__PURE__ */ st._(pe), s = /* @__PURE__ */ r._(es), a = /* @__PURE__ */ r._(aa()), l = Lr, i = Pt, p = ia(), d = it, b = mo(), v = /* @__PURE__ */ r._(ho()), c = process.env.__NEXT_IMAGE_OPTS;
  typeof window > "u" && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
  function f(m, y, A, N, R, w) {
    const $ = m == null ? void 0 : m.src;
    if (!m || m["data-loaded-src"] === $)
      return;
    m["data-loaded-src"] = $, ("decode" in m ? m.decode() : Promise.resolve()).catch(() => {
    }).then(() => {
      if (!(!m.parentElement || !m.isConnected)) {
        if (y !== "empty" && R(!0), A != null && A.current) {
          const T = new Event("load");
          Object.defineProperty(T, "target", {
            writable: !1,
            value: m
          });
          let x = !1, k = !1;
          A.current({
            ...T,
            nativeEvent: T,
            currentTarget: m,
            target: m,
            isDefaultPrevented: () => x,
            isPropagationStopped: () => k,
            persist: () => {
            },
            preventDefault: () => {
              x = !0, T.preventDefault();
            },
            stopPropagation: () => {
              k = !0, T.stopPropagation();
            }
          });
        }
        if (N != null && N.current && N.current(m), process.env.NODE_ENV !== "production") {
          const T = new URL($, "http://n").searchParams.get("url") || $;
          if (m.getAttribute("data-nimg") === "fill") {
            if (!w && (!m.getAttribute("sizes") || m.getAttribute("sizes") === "100vw") && m.getBoundingClientRect().width / window.innerWidth < 0.6 && (0, d.warnOnce)('Image with src "' + T + '" has "fill" but is missing "sizes" prop. Please add it to improve page performance. Read more: https://nextjs.org/docs/api-reference/next/image#sizes'), m.parentElement) {
              const { position: C } = window.getComputedStyle(m.parentElement), L = [
                "absolute",
                "fixed",
                "relative"
              ];
              L.includes(C) || (0, d.warnOnce)('Image with src "' + T + '" has "fill" and parent element with invalid "position". Provided "' + C + '" should be one of ' + L.map(String).join(",") + ".");
            }
            m.height === 0 && (0, d.warnOnce)('Image with src "' + T + '" has "fill" and a height value of 0. This is likely because the parent element of the image has not been styled to have a set height.');
          }
          const x = m.height.toString() !== m.getAttribute("height"), k = m.width.toString() !== m.getAttribute("width");
          (x && !k || !x && k) && (0, d.warnOnce)('Image with src "' + T + `" has either width or height modified, but not the other. If you use CSS to change the size of your image, also include the styles 'width: "auto"' or 'height: "auto"' to maintain the aspect ratio.`);
        }
      }
    });
  }
  function g(m) {
    const [y, A] = o.version.split(".", 2), N = parseInt(y, 10), R = parseInt(A, 10);
    return N > 18 || N === 18 && R >= 3 ? {
      fetchPriority: m
    } : {
      fetchpriority: m
    };
  }
  const h = /* @__PURE__ */ (0, o.forwardRef)((m, y) => {
    let { src: A, srcSet: N, sizes: R, height: w, width: $, decoding: _, className: T, style: x, fetchPriority: k, placeholder: C, loading: L, unoptimized: O, fill: M, onLoadRef: P, onLoadingCompleteRef: D, setBlurComplete: z, setShowAltText: Q, onLoad: W, onError: K, ...B } = m;
    return /* @__PURE__ */ o.default.createElement("img", {
      ...B,
      ...g(k),
      // It's intended to keep `loading` before `src` because React updates
      // props in order which causes Safari/Firefox to not lazy load properly.
      // See https://github.com/facebook/react/issues/25883
      loading: L,
      width: $,
      height: w,
      decoding: _,
      "data-nimg": M ? "fill" : "1",
      className: T,
      style: x,
      // It's intended to keep `src` the last attribute because React updates
      // attributes in order. If we keep `src` the first one, Safari will
      // immediately start to fetch `src`, before `sizes` and `srcSet` are even
      // updated by React. That causes multiple unnecessary requests if `srcSet`
      // and `sizes` are defined.
      // This bug cannot be reproduced in Chrome or Firefox.
      sizes: R,
      srcSet: N,
      src: A,
      ref: (0, o.useCallback)((re) => {
        y && (typeof y == "function" ? y(re) : typeof y == "object" && (y.current = re)), re && (K && (re.src = re.src), process.env.NODE_ENV !== "production" && (A || console.error('Image is missing required "src" property:', re), re.getAttribute("alt") === null && console.error('Image is missing required "alt" property. Please add Alternative Text to describe the image for screen readers and search engines.')), re.complete && f(re, C, P, D, z, O));
      }, [
        A,
        C,
        P,
        D,
        z,
        K,
        O,
        y
      ]),
      onLoad: (re) => {
        const X = re.currentTarget;
        f(X, C, P, D, z, O);
      },
      onError: (re) => {
        Q(!0), C !== "empty" && z(!0), K && K(re);
      }
    });
  });
  function E(m) {
    let { isAppRouter: y, imgAttributes: A } = m;
    const N = {
      as: "image",
      imageSrcSet: A.srcSet,
      imageSizes: A.sizes,
      crossOrigin: A.crossOrigin,
      referrerPolicy: A.referrerPolicy,
      ...g(A.fetchPriority)
    };
    return y && s.default.preload ? (s.default.preload(
      A.src,
      // @ts-expect-error TODO: upgrade to `@types/react-dom@18.3.x`
      N
    ), null) : /* @__PURE__ */ o.default.createElement(a.default, null, /* @__PURE__ */ o.default.createElement("link", {
      key: "__nimg-" + A.src + A.srcSet + A.sizes,
      rel: "preload",
      // Note how we omit the `href` attribute, as it would only be relevant
      // for browsers that do not support `imagesrcset`, and in those cases
      // it would cause the incorrect image to be preloaded.
      //
      // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
      href: A.srcSet ? void 0 : A.src,
      ...N
    }));
  }
  const S = /* @__PURE__ */ (0, o.forwardRef)((m, y) => {
    const N = !(0, o.useContext)(b.RouterContext), R = (0, o.useContext)(p.ImageConfigContext), w = (0, o.useMemo)(() => {
      const D = c || R || i.imageConfigDefault, z = [
        ...D.deviceSizes,
        ...D.imageSizes
      ].sort((W, K) => W - K), Q = D.deviceSizes.sort((W, K) => W - K);
      return {
        ...D,
        allSizes: z,
        deviceSizes: Q
      };
    }, [
      R
    ]), { onLoad: $, onLoadingComplete: _ } = m, T = (0, o.useRef)($);
    (0, o.useEffect)(() => {
      T.current = $;
    }, [
      $
    ]);
    const x = (0, o.useRef)(_);
    (0, o.useEffect)(() => {
      x.current = _;
    }, [
      _
    ]);
    const [k, C] = (0, o.useState)(!1), [L, O] = (0, o.useState)(!1), { props: M, meta: P } = (0, l.getImgProps)(m, {
      defaultLoader: v.default,
      imgConf: w,
      blurComplete: k,
      showAltText: L
    });
    return /* @__PURE__ */ o.default.createElement(o.default.Fragment, null, /* @__PURE__ */ o.default.createElement(h, {
      ...M,
      unoptimized: P.unoptimized,
      placeholder: P.placeholder,
      fill: P.fill,
      onLoadRef: T,
      onLoadingCompleteRef: x,
      setBlurComplete: C,
      setShowAltText: O,
      ref: y
    }), P.priority ? /* @__PURE__ */ o.default.createElement(E, {
      isAppRouter: N,
      imgAttributes: M
    }) : null);
  });
  (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
})(xr, xr.exports);
var fa = xr.exports;
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(p, d) {
    for (var b in d) Object.defineProperty(p, b, {
      enumerable: !0,
      get: d[b]
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
  const r = Te, n = Lr, o = it, s = fa, a = /* @__PURE__ */ r._(ho()), l = (p) => {
    (0, o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");
    const { props: d } = (0, n.getImgProps)(p, {
      defaultLoader: a.default,
      // This is replaced by webpack define plugin
      imgConf: process.env.__NEXT_IMAGE_OPTS
    });
    for (const [b, v] of Object.entries(d))
      v === void 0 && delete d[b];
    return {
      props: d
    };
  }, i = s.Image;
})(uo);
var pa = uo;
const ma = /* @__PURE__ */ co(pa), ha = {
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
function ut({
  size: e = "md",
  src: t,
  icon: r = /* @__PURE__ */ u(lo, {}),
  className: n = "bg-accent-500"
}) {
  const o = ha[e], s = [
    "rounded-full flex items-center justify-center",
    o.wrapper,
    n
  ].join(" ").trim();
  return /* @__PURE__ */ u("div", { className: s, children: t ? /* @__PURE__ */ u(ma, { src: t, alt: "avatar", layout: "fill", className: "rounded-full object-cover" }) : pe.cloneElement(r, {
    size: o.iconSize,
    className: "text-white"
  }) });
}
const rn = {
  accent: "bg-accent-500",
  green: "bg-green-500",
  red: "bg-red-500",
  yellow: "bg-yellow-500",
  gray: "bg-gray-500"
};
function lc({ variant: e = "accent", children: t, className: r = "" }) {
  const o = [
    "px-3 py-1 text-xs font-medium text-white rounded-full",
    rn[e] || rn.accent,
    r
  ].join(" ").trim();
  return /* @__PURE__ */ u("span", { className: o, children: t });
}
var _r = { exports: {} }, dt = { exports: {} }, Bt = {}, nn;
function go() {
  return nn || (nn = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    function t(a, l) {
      for (var i in l) Object.defineProperty(a, i, {
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
        return s;
      }
    });
    function r(a) {
      const l = {};
      return a.forEach((i, p) => {
        typeof l[p] > "u" ? l[p] = i : Array.isArray(l[p]) ? l[p].push(i) : l[p] = [
          l[p],
          i
        ];
      }), l;
    }
    function n(a) {
      return typeof a == "string" || typeof a == "number" && !isNaN(a) || typeof a == "boolean" ? String(a) : "";
    }
    function o(a) {
      const l = new URLSearchParams();
      return Object.entries(a).forEach((i) => {
        let [p, d] = i;
        Array.isArray(d) ? d.forEach((b) => l.append(p, n(b))) : l.set(p, n(d));
      }), l;
    }
    function s(a) {
      for (var l = arguments.length, i = new Array(l > 1 ? l - 1 : 0), p = 1; p < l; p++)
        i[p - 1] = arguments[p];
      return i.forEach((d) => {
        Array.from(d.keys()).forEach((b) => a.delete(b)), d.forEach((b, v) => a.append(v, b));
      }), a;
    }
  }(Bt)), Bt;
}
var Gt = {}, on;
function bo() {
  return on || (on = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    function t(i, p) {
      for (var d in p) Object.defineProperty(i, d, {
        enumerable: !0,
        get: p[d]
      });
    }
    t(e, {
      formatUrl: function() {
        return s;
      },
      urlObjectKeys: function() {
        return a;
      },
      formatWithValidation: function() {
        return l;
      }
    });
    const n = /* @__PURE__ */ st._(go()), o = /https?|ftp|gopher|file/;
    function s(i) {
      let { auth: p, hostname: d } = i, b = i.protocol || "", v = i.pathname || "", c = i.hash || "", f = i.query || "", g = !1;
      p = p ? encodeURIComponent(p).replace(/%3A/i, ":") + "@" : "", i.host ? g = p + i.host : d && (g = p + (~d.indexOf(":") ? "[" + d + "]" : d), i.port && (g += ":" + i.port)), f && typeof f == "object" && (f = String(n.urlQueryToSearchParams(f)));
      let h = i.search || f && "?" + f || "";
      return b && !b.endsWith(":") && (b += ":"), i.slashes || (!b || o.test(b)) && g !== !1 ? (g = "//" + (g || ""), v && v[0] !== "/" && (v = "/" + v)) : g || (g = ""), c && c[0] !== "#" && (c = "#" + c), h && h[0] !== "?" && (h = "?" + h), v = v.replace(/[?#]/g, encodeURIComponent), h = h.replace("#", "%23"), "" + b + g + v + h + c;
    }
    const a = [
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
      return process.env.NODE_ENV === "development" && i !== null && typeof i == "object" && Object.keys(i).forEach((p) => {
        a.includes(p) || console.warn("Unknown key passed via urlObject into url.format: " + p);
      }), s(i);
    }
  }(Gt)), Gt;
}
var Ft = {}, sn;
function ga() {
  return sn || (sn = 1, function(e) {
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
      return Object.keys(r).forEach((s) => {
        n.includes(s) || (o[s] = r[s]);
      }), o;
    }
  }(Ft)), Ft;
}
var Vt = {}, an;
function Tt() {
  return an || (an = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    function t(y, A) {
      for (var N in A) Object.defineProperty(y, N, {
        enumerable: !0,
        get: A[N]
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
        return s;
      },
      getLocationOrigin: function() {
        return a;
      },
      getURL: function() {
        return l;
      },
      getDisplayName: function() {
        return i;
      },
      isResSent: function() {
        return p;
      },
      normalizeRepeatedSlashes: function() {
        return d;
      },
      loadGetInitialProps: function() {
        return b;
      },
      SP: function() {
        return v;
      },
      ST: function() {
        return c;
      },
      DecodeError: function() {
        return f;
      },
      NormalizeError: function() {
        return g;
      },
      PageNotFoundError: function() {
        return h;
      },
      MissingStaticPage: function() {
        return E;
      },
      MiddlewareNotFoundError: function() {
        return S;
      },
      stringifyError: function() {
        return m;
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
    function n(y) {
      let A = !1, N;
      return function() {
        for (var R = arguments.length, w = new Array(R), $ = 0; $ < R; $++)
          w[$] = arguments[$];
        return A || (A = !0, N = y(...w)), N;
      };
    }
    const o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/, s = (y) => o.test(y);
    function a() {
      const { protocol: y, hostname: A, port: N } = window.location;
      return y + "//" + A + (N ? ":" + N : "");
    }
    function l() {
      const { href: y } = window.location, A = a();
      return y.substring(A.length);
    }
    function i(y) {
      return typeof y == "string" ? y : y.displayName || y.name || "Unknown";
    }
    function p(y) {
      return y.finished || y.headersSent;
    }
    function d(y) {
      const A = y.split("?");
      return A[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (A[1] ? "?" + A.slice(1).join("?") : "");
    }
    async function b(y, A) {
      if (process.env.NODE_ENV !== "production") {
        var N;
        if ((N = y.prototype) != null && N.getInitialProps) {
          const $ = '"' + i(y) + '.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.';
          throw new Error($);
        }
      }
      const R = A.res || A.ctx && A.ctx.res;
      if (!y.getInitialProps)
        return A.ctx && A.Component ? {
          pageProps: await b(A.Component, A.ctx)
        } : {};
      const w = await y.getInitialProps(A);
      if (R && p(R))
        return w;
      if (!w) {
        const $ = '"' + i(y) + '.getInitialProps()" should resolve to an object. But found "' + w + '" instead.';
        throw new Error($);
      }
      return process.env.NODE_ENV !== "production" && Object.keys(w).length === 0 && !A.ctx && console.warn("" + i(y) + " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps"), w;
    }
    const v = typeof performance < "u", c = v && [
      "mark",
      "measure",
      "getEntriesByName"
    ].every((y) => typeof performance[y] == "function");
    class f extends Error {
    }
    class g extends Error {
    }
    class h extends Error {
      constructor(A) {
        super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = "Cannot find module for page: " + A;
      }
    }
    class E extends Error {
      constructor(A, N) {
        super(), this.message = "Failed to load static file for page: " + A + " " + N;
      }
    }
    class S extends Error {
      constructor() {
        super(), this.code = "ENOENT", this.message = "Cannot find the middleware module";
      }
    }
    function m(y) {
      return JSON.stringify({
        message: y.message,
        stack: y.stack
      });
    }
  }(Vt)), Vt;
}
var ft = { exports: {} }, Wt = {}, ln;
function yo() {
  return ln || (ln = 1, function(e) {
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
  }(Wt)), Wt;
}
var Kt = {}, cn;
function zr() {
  return cn || (cn = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "parsePath", {
      enumerable: !0,
      get: function() {
        return t;
      }
    });
    function t(r) {
      const n = r.indexOf("#"), o = r.indexOf("?"), s = o > -1 && (n < 0 || o < n);
      return s || n > -1 ? {
        pathname: r.substring(0, s ? o : n),
        query: s ? r.substring(o, n > -1 ? n : void 0) : "",
        hash: n > -1 ? r.slice(n) : ""
      } : {
        pathname: r,
        query: "",
        hash: ""
      };
    }
  }(Kt)), Kt;
}
var un;
function Ot() {
  return un || (un = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "normalizePathTrailingSlash", {
      enumerable: !0,
      get: function() {
        return o;
      }
    });
    const r = yo(), n = zr(), o = (s) => {
      if (!s.startsWith("/") || process.env.__NEXT_MANUAL_TRAILING_SLASH)
        return s;
      const { pathname: a, query: l, hash: i } = (0, n.parsePath)(s);
      return process.env.__NEXT_TRAILING_SLASH ? /\.[^/]+\/?$/.test(a) ? "" + (0, r.removeTrailingSlash)(a) + l + i : a.endsWith("/") ? "" + a + l + i : a + "/" + l + i : "" + (0, r.removeTrailingSlash)(a) + l + i;
    };
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(ft, ft.exports)), ft.exports;
}
var Xt = {}, pt = { exports: {} }, Qt = {}, dn;
function vo() {
  return dn || (dn = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "pathHasPrefix", {
      enumerable: !0,
      get: function() {
        return r;
      }
    });
    const t = zr();
    function r(n, o) {
      if (typeof n != "string")
        return !1;
      const { pathname: s } = (0, t.parsePath)(n);
      return s === o || s.startsWith(o + "/");
    }
  }(Qt)), Qt;
}
var fn;
function ba() {
  return fn || (fn = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "hasBasePath", {
      enumerable: !0,
      get: function() {
        return o;
      }
    });
    const r = vo(), n = process.env.__NEXT_ROUTER_BASEPATH || "";
    function o(s) {
      return (0, r.pathHasPrefix)(s, n);
    }
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(pt, pt.exports)), pt.exports;
}
var pn;
function xo() {
  return pn || (pn = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "isLocalURL", {
      enumerable: !0,
      get: function() {
        return n;
      }
    });
    const t = Tt(), r = ba();
    function n(o) {
      if (!(0, t.isAbsoluteUrl)(o)) return !0;
      try {
        const s = (0, t.getLocationOrigin)(), a = new URL(o, s);
        return a.origin === s && (0, r.hasBasePath)(a.pathname);
      } catch {
        return !1;
      }
    }
  }(Xt)), Xt;
}
var Zt = {}, Yt = {}, mn;
function ya() {
  return mn || (mn = 1, function(e) {
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
        const s = [
          ...this.children.keys()
        ].sort();
        this.slugName !== null && s.splice(s.indexOf("[]"), 1), this.restSlugName !== null && s.splice(s.indexOf("[...]"), 1), this.optionalRestSlugName !== null && s.splice(s.indexOf("[[...]]"), 1);
        const a = s.map((l) => this.children.get(l)._smoosh("" + o + l + "/")).reduce((l, i) => [
          ...l,
          ...i
        ], []);
        if (this.slugName !== null && a.push(...this.children.get("[]")._smoosh(o + "[" + this.slugName + "]/")), !this.placeholder) {
          const l = o === "/" ? "/" : o.slice(0, -1);
          if (this.optionalRestSlugName != null)
            throw new Error('You cannot define a route with the same specificity as a optional catch-all route ("' + l + '" and "' + l + "[[..." + this.optionalRestSlugName + ']]").');
          a.unshift(l);
        }
        return this.restSlugName !== null && a.push(...this.children.get("[...]")._smoosh(o + "[..." + this.restSlugName + "]/")), this.optionalRestSlugName !== null && a.push(...this.children.get("[[...]]")._smoosh(o + "[[..." + this.optionalRestSlugName + "]]/")), a;
      }
      _insert(o, s, a) {
        if (o.length === 0) {
          this.placeholder = !1;
          return;
        }
        if (a)
          throw new Error("Catch-all must be the last part of the URL.");
        let l = o[0];
        if (l.startsWith("[") && l.endsWith("]")) {
          let d = function(b, v) {
            if (b !== null && b !== v)
              throw new Error("You cannot use different slug names for the same dynamic path ('" + b + "' !== '" + v + "').");
            s.forEach((c) => {
              if (c === v)
                throw new Error('You cannot have the same slug name "' + v + '" repeat within a single dynamic path');
              if (c.replace(/\W/g, "") === l.replace(/\W/g, ""))
                throw new Error('You cannot have the slug names "' + c + '" and "' + v + '" differ only by non-word symbols within a single dynamic path');
            }), s.push(v);
          }, i = l.slice(1, -1), p = !1;
          if (i.startsWith("[") && i.endsWith("]") && (i = i.slice(1, -1), p = !0), i.startsWith("...") && (i = i.substring(3), a = !0), i.startsWith("[") || i.endsWith("]"))
            throw new Error("Segment names may not start or end with extra brackets ('" + i + "').");
          if (i.startsWith("."))
            throw new Error("Segment names may not start with erroneous periods ('" + i + "').");
          if (a)
            if (p) {
              if (this.restSlugName != null)
                throw new Error('You cannot use both an required and optional catch-all route at the same level ("[...' + this.restSlugName + ']" and "' + o[0] + '" ).');
              d(this.optionalRestSlugName, i), this.optionalRestSlugName = i, l = "[[...]]";
            } else {
              if (this.optionalRestSlugName != null)
                throw new Error('You cannot use both an optional and required catch-all route at the same level ("[[...' + this.optionalRestSlugName + ']]" and "' + o[0] + '").');
              d(this.restSlugName, i), this.restSlugName = i, l = "[...]";
            }
          else {
            if (p)
              throw new Error('Optional route parameters are not yet supported ("' + o[0] + '").');
            d(this.slugName, i), this.slugName = i, l = "[]";
          }
        }
        this.children.has(l) || this.children.set(l, new t()), this.children.get(l)._insert(o.slice(1), s, a);
      }
      constructor() {
        this.placeholder = !0, this.children = /* @__PURE__ */ new Map(), this.slugName = null, this.restSlugName = null, this.optionalRestSlugName = null;
      }
    }
    function r(n) {
      const o = new t();
      return n.forEach((s) => o.insert(s)), o.smoosh();
    }
  }(Yt)), Yt;
}
var Jt = {}, hn;
function va() {
  return hn || (hn = 1, function(e) {
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
  }(Jt)), Jt;
}
var gn;
function xa() {
  return gn || (gn = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    function t(o, s) {
      for (var a in s) Object.defineProperty(o, a, {
        enumerable: !0,
        get: s[a]
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
    const r = ya(), n = va();
  }(Zt)), Zt;
}
var er = {}, tr = {}, bn;
function wa() {
  return bn || (bn = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "getRouteMatcher", {
      enumerable: !0,
      get: function() {
        return r;
      }
    });
    const t = Tt();
    function r(n) {
      let { re: o, groups: s } = n;
      return (a) => {
        const l = o.exec(a);
        if (!l)
          return !1;
        const i = (d) => {
          try {
            return decodeURIComponent(d);
          } catch {
            throw new t.DecodeError("failed to decode param");
          }
        }, p = {};
        return Object.keys(s).forEach((d) => {
          const b = s[d], v = l[b.pos];
          v !== void 0 && (p[d] = ~v.indexOf("/") ? v.split("/").map((c) => i(c)) : b.repeat ? [
            i(v)
          ] : i(v));
        }), p;
      };
    }
  }(tr)), tr;
}
var rr = {}, nr = {}, or = {}, sr = {}, yn;
function _a() {
  return yn || (yn = 1, function(e) {
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
  }(sr)), sr;
}
var ar = {}, vn;
function Ra() {
  return vn || (vn = 1, function(e) {
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
  }(ar)), ar;
}
var xn;
function Ca() {
  return xn || (xn = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    function t(i, p) {
      for (var d in p) Object.defineProperty(i, d, {
        enumerable: !0,
        get: p[d]
      });
    }
    t(e, {
      normalizeAppPath: function() {
        return s;
      },
      normalizeRscURL: function() {
        return a;
      },
      normalizePostponedURL: function() {
        return l;
      }
    });
    const r = _a(), n = Ra(), o = wr;
    function s(i) {
      return (0, r.ensureLeadingSlash)(i.split("/").reduce((p, d, b, v) => !d || (0, n.isGroupSegment)(d) || d[0] === "@" || (d === "page" || d === "route") && b === v.length - 1 ? p : p + "/" + d, ""));
    }
    function a(i) {
      return i.replace(
        /\.rsc($|\?)/,
        // $1 ensures `?` is preserved
        "$1"
      );
    }
    function l(i) {
      const p = (0, o.parse)(i);
      let { pathname: d } = p;
      return d && d.startsWith("/_next/postponed") ? (d = d.substring(16) || "/", (0, o.format)({
        ...p,
        pathname: d
      })) : i;
    }
  }(or)), or;
}
var wn;
function Na() {
  return wn || (wn = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    function t(a, l) {
      for (var i in l) Object.defineProperty(a, i, {
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
        return s;
      }
    });
    const r = Ca(), n = [
      "(..)(..)",
      "(.)",
      "(..)",
      "(...)"
    ];
    function o(a) {
      return a.split("/").find((l) => n.find((i) => l.startsWith(i))) !== void 0;
    }
    function s(a) {
      let l, i, p;
      for (const d of a.split("/"))
        if (i = n.find((b) => d.startsWith(b)), i) {
          [l, p] = a.split(i, 2);
          break;
        }
      if (!l || !i || !p)
        throw new Error(`Invalid interception route: ${a}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`);
      switch (l = (0, r.normalizeAppPath)(l), i) {
        case "(.)":
          l === "/" ? p = `/${p}` : p = l + "/" + p;
          break;
        case "(..)":
          if (l === "/")
            throw new Error(`Invalid interception route: ${a}. Cannot use (..) marker at the root level, use (.) instead.`);
          p = l.split("/").slice(0, -1).concat(p).join("/");
          break;
        case "(...)":
          p = "/" + p;
          break;
        case "(..)(..)":
          const d = l.split("/");
          if (d.length <= 2)
            throw new Error(`Invalid interception route: ${a}. Cannot use (..)(..) marker at the root level or one level up.`);
          p = d.slice(0, -2).concat(p).join("/");
          break;
        default:
          throw new Error("Invariant: unexpected marker");
      }
      return {
        interceptingRoute: l,
        interceptedRoute: p
      };
    }
  }(nr)), nr;
}
var ir = {}, _n;
function Ea() {
  return _n || (_n = 1, function(e) {
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
  }(ir)), ir;
}
var Rn;
function Aa() {
  return Rn || (Rn = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    function t(g, h) {
      for (var E in h) Object.defineProperty(g, E, {
        enumerable: !0,
        get: h[E]
      });
    }
    t(e, {
      getRouteRegex: function() {
        return p;
      },
      getNamedRouteRegex: function() {
        return c;
      },
      getNamedMiddlewareRegex: function() {
        return f;
      }
    });
    const r = Na(), n = Ea(), o = yo(), s = "nxtP", a = "nxtI";
    function l(g) {
      const h = g.startsWith("[") && g.endsWith("]");
      h && (g = g.slice(1, -1));
      const E = g.startsWith("...");
      return E && (g = g.slice(3)), {
        key: g,
        repeat: E,
        optional: h
      };
    }
    function i(g) {
      const h = (0, o.removeTrailingSlash)(g).slice(1).split("/"), E = {};
      let S = 1;
      return {
        parameterizedRoute: h.map((m) => {
          const y = r.INTERCEPTION_ROUTE_MARKERS.find((N) => m.startsWith(N)), A = m.match(/\[((?:\[.*\])|.+)\]/);
          if (y && A) {
            const { key: N, optional: R, repeat: w } = l(A[1]);
            return E[N] = {
              pos: S++,
              repeat: w,
              optional: R
            }, "/" + (0, n.escapeStringRegexp)(y) + "([^/]+?)";
          } else if (A) {
            const { key: N, repeat: R, optional: w } = l(A[1]);
            return E[N] = {
              pos: S++,
              repeat: R,
              optional: w
            }, R ? w ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)";
          } else
            return "/" + (0, n.escapeStringRegexp)(m);
        }).join(""),
        groups: E
      };
    }
    function p(g) {
      const { parameterizedRoute: h, groups: E } = i(g);
      return {
        re: new RegExp("^" + h + "(?:/)?$"),
        groups: E
      };
    }
    function d() {
      let g = 0;
      return () => {
        let h = "", E = ++g;
        for (; E > 0; )
          h += String.fromCharCode(97 + (E - 1) % 26), E = Math.floor((E - 1) / 26);
        return h;
      };
    }
    function b(g) {
      let { getSafeRouteKey: h, segment: E, routeKeys: S, keyPrefix: m } = g;
      const { key: y, optional: A, repeat: N } = l(E);
      let R = y.replace(/\W/g, "");
      m && (R = "" + m + R);
      let w = !1;
      return (R.length === 0 || R.length > 30) && (w = !0), isNaN(parseInt(R.slice(0, 1))) || (w = !0), w && (R = h()), m ? S[R] = "" + m + y : S[R] = "" + y, N ? A ? "(?:/(?<" + R + ">.+?))?" : "/(?<" + R + ">.+?)" : "/(?<" + R + ">[^/]+?)";
    }
    function v(g, h) {
      const E = (0, o.removeTrailingSlash)(g).slice(1).split("/"), S = d(), m = {};
      return {
        namedParameterizedRoute: E.map((y) => {
          const A = r.INTERCEPTION_ROUTE_MARKERS.some((R) => y.startsWith(R)), N = y.match(/\[((?:\[.*\])|.+)\]/);
          return A && N ? b({
            getSafeRouteKey: S,
            segment: N[1],
            routeKeys: m,
            keyPrefix: h ? a : void 0
          }) : N ? b({
            getSafeRouteKey: S,
            segment: N[1],
            routeKeys: m,
            keyPrefix: h ? s : void 0
          }) : "/" + (0, n.escapeStringRegexp)(y);
        }).join(""),
        routeKeys: m
      };
    }
    function c(g, h) {
      const E = v(g, h);
      return {
        ...p(g),
        namedRegex: "^" + E.namedParameterizedRoute + "(?:/)?$",
        routeKeys: E.routeKeys
      };
    }
    function f(g, h) {
      const { parameterizedRoute: E } = i(g), { catchAll: S = !0 } = h;
      if (E === "/")
        return {
          namedRegex: "^/" + (S ? ".*" : "") + "$"
        };
      const { namedParameterizedRoute: m } = v(g, !1);
      let y = S ? "(?:(/.*)?)" : "";
      return {
        namedRegex: "^" + m + y + "$"
      };
    }
  }(rr)), rr;
}
var Cn;
function ka() {
  return Cn || (Cn = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "interpolateAs", {
      enumerable: !0,
      get: function() {
        return n;
      }
    });
    const t = wa(), r = Aa();
    function n(o, s, a) {
      let l = "";
      const i = (0, r.getRouteRegex)(o), p = i.groups, d = (
        // Try to match the dynamic route against the asPath
        (s !== o ? (0, t.getRouteMatcher)(i)(s) : "") || // Fall back to reading the values from the href
        // TODO: should this take priority; also need to change in the router.
        a
      );
      l = o;
      const b = Object.keys(p);
      return b.every((v) => {
        let c = d[v] || "";
        const { repeat: f, optional: g } = p[v];
        let h = "[" + (f ? "..." : "") + v + "]";
        return g && (h = (c ? "" : "/") + "[" + h + "]"), f && !Array.isArray(c) && (c = [
          c
        ]), (g || v in d) && // Interpolate group into data URL if present
        (l = l.replace(h, f ? c.map(
          // these values should be fully encoded instead of just
          // path delimiter escaped since they are being inserted
          // into the URL and we expect URL encoded segments
          // when parsing dynamic route params
          (E) => encodeURIComponent(E)
        ).join("/") : encodeURIComponent(c)) || "/");
      }) || (l = ""), {
        params: b,
        result: l
      };
    }
  }(er)), er;
}
var Nn;
function Sa() {
  return Nn || (Nn = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "resolveHref", {
      enumerable: !0,
      get: function() {
        return d;
      }
    });
    const r = go(), n = bo(), o = ga(), s = Tt(), a = Ot(), l = xo(), i = xa(), p = ka();
    function d(b, v, c) {
      let f, g = typeof v == "string" ? v : (0, n.formatWithValidation)(v);
      const h = g.match(/^[a-zA-Z]{1,}:\/\//), E = h ? g.slice(h[0].length) : g;
      if ((E.split("?", 1)[0] || "").match(/(\/\/|\\)/)) {
        console.error("Invalid href '" + g + "' passed to next/router in page: '" + b.pathname + "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");
        const m = (0, s.normalizeRepeatedSlashes)(E);
        g = (h ? h[0] : "") + m;
      }
      if (!(0, l.isLocalURL)(g))
        return c ? [
          g
        ] : g;
      try {
        f = new URL(g.startsWith("#") ? b.asPath : b.pathname, "http://n");
      } catch {
        f = new URL("/", "http://n");
      }
      try {
        const m = new URL(g, f);
        m.pathname = (0, a.normalizePathTrailingSlash)(m.pathname);
        let y = "";
        if ((0, i.isDynamicRoute)(m.pathname) && m.searchParams && c) {
          const N = (0, r.searchParamsToUrlQuery)(m.searchParams), { result: R, params: w } = (0, p.interpolateAs)(m.pathname, m.pathname, N);
          R && (y = (0, n.formatWithValidation)({
            pathname: R,
            hash: m.hash,
            query: (0, o.omit)(N, w)
          }));
        }
        const A = m.origin === f.origin ? m.href.slice(m.origin.length) : m.href;
        return c ? [
          A,
          y || A
        ] : A;
      } catch {
        return c ? [
          g
        ] : g;
      }
    }
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(dt, dt.exports)), dt.exports;
}
var mt = { exports: {} }, lr = {}, cr = {}, En;
function wo() {
  return En || (En = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "addPathPrefix", {
      enumerable: !0,
      get: function() {
        return r;
      }
    });
    const t = zr();
    function r(n, o) {
      if (!n.startsWith("/") || !o)
        return n;
      const { pathname: s, query: a, hash: l } = (0, t.parsePath)(n);
      return "" + o + s + a + l;
    }
  }(cr)), cr;
}
var An;
function Pa() {
  return An || (An = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "addLocale", {
      enumerable: !0,
      get: function() {
        return n;
      }
    });
    const t = wo(), r = vo();
    function n(o, s, a, l) {
      if (!s || s === a) return o;
      const i = o.toLowerCase();
      return !l && ((0, r.pathHasPrefix)(i, "/api") || (0, r.pathHasPrefix)(i, "/" + s.toLowerCase())) ? o : (0, t.addPathPrefix)(o, "/" + s);
    }
  }(lr)), lr;
}
var kn;
function Ta() {
  return kn || (kn = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "addLocale", {
      enumerable: !0,
      get: function() {
        return n;
      }
    });
    const r = Ot(), n = function(o) {
      for (var s = arguments.length, a = new Array(s > 1 ? s - 1 : 0), l = 1; l < s; l++)
        a[l - 1] = arguments[l];
      return process.env.__NEXT_I18N_SUPPORT ? (0, r.normalizePathTrailingSlash)(Pa().addLocale(o, ...a)) : o;
    };
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(mt, mt.exports)), mt.exports;
}
var ur = {}, Sn;
function Oa() {
  return Sn || (Sn = 1, function(e) {
    "use client";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    function t(p, d) {
      for (var b in d) Object.defineProperty(p, b, {
        enumerable: !0,
        get: d[b]
      });
    }
    t(e, {
      CacheStates: function() {
        return o;
      },
      AppRouterContext: function() {
        return s;
      },
      LayoutRouterContext: function() {
        return a;
      },
      GlobalLayoutRouterContext: function() {
        return l;
      },
      TemplateContext: function() {
        return i;
      }
    });
    const n = /* @__PURE__ */ Te._(pe);
    var o;
    (function(p) {
      p.LAZY_INITIALIZED = "LAZYINITIALIZED", p.DATA_FETCH = "DATAFETCH", p.READY = "READY";
    })(o || (o = {}));
    const s = n.default.createContext(null), a = n.default.createContext(null), l = n.default.createContext(null), i = n.default.createContext(null);
    process.env.NODE_ENV !== "production" && (s.displayName = "AppRouterContext", a.displayName = "LayoutRouterContext", l.displayName = "GlobalLayoutRouterContext", i.displayName = "TemplateContext");
  }(ur)), ur;
}
var ht = { exports: {} }, gt = { exports: {} }, Pn;
function Ma() {
  return Pn || (Pn = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function r(s, a) {
      for (var l in a) Object.defineProperty(s, l, {
        enumerable: !0,
        get: a[l]
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
    const n = typeof self < "u" && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(s) {
      let a = Date.now();
      return self.setTimeout(function() {
        s({
          didTimeout: !1,
          timeRemaining: function() {
            return Math.max(0, 50 - (Date.now() - a));
          }
        });
      }, 1);
    }, o = typeof self < "u" && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(s) {
      return clearTimeout(s);
    };
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(gt, gt.exports)), gt.exports;
}
var Tn;
function Ia() {
  return Tn || (Tn = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "useIntersection", {
      enumerable: !0,
      get: function() {
        return p;
      }
    });
    const r = pe, n = Ma(), o = typeof IntersectionObserver == "function", s = /* @__PURE__ */ new Map(), a = [];
    function l(d) {
      const b = {
        root: d.root || null,
        margin: d.rootMargin || ""
      }, v = a.find((h) => h.root === b.root && h.margin === b.margin);
      let c;
      if (v && (c = s.get(v), c))
        return c;
      const f = /* @__PURE__ */ new Map(), g = new IntersectionObserver((h) => {
        h.forEach((E) => {
          const S = f.get(E.target), m = E.isIntersecting || E.intersectionRatio > 0;
          S && m && S(m);
        });
      }, d);
      return c = {
        id: b,
        observer: g,
        elements: f
      }, a.push(b), s.set(b, c), c;
    }
    function i(d, b, v) {
      const { id: c, observer: f, elements: g } = l(v);
      return g.set(d, b), f.observe(d), function() {
        if (g.delete(d), f.unobserve(d), g.size === 0) {
          f.disconnect(), s.delete(c);
          const E = a.findIndex((S) => S.root === c.root && S.margin === c.margin);
          E > -1 && a.splice(E, 1);
        }
      };
    }
    function p(d) {
      let { rootRef: b, rootMargin: v, disabled: c } = d;
      const f = c || !o, [g, h] = (0, r.useState)(!1), E = (0, r.useRef)(null), S = (0, r.useCallback)((y) => {
        E.current = y;
      }, []);
      (0, r.useEffect)(() => {
        if (o) {
          if (f || g) return;
          const y = E.current;
          if (y && y.tagName)
            return i(y, (N) => N && h(N), {
              root: b == null ? void 0 : b.current,
              rootMargin: v
            });
        } else if (!g) {
          const y = (0, n.requestIdleCallback)(() => h(!0));
          return () => (0, n.cancelIdleCallback)(y);
        }
      }, [
        f,
        v,
        b,
        g,
        E.current
      ]);
      const m = (0, r.useCallback)(() => {
        h(!1);
      }, []);
      return [
        S,
        g,
        m
      ];
    }
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(ht, ht.exports)), ht.exports;
}
var bt = { exports: {} }, yt = { exports: {} }, dr = {}, On;
function $a() {
  return On || (On = 1, function(e) {
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
      const s = r.split("/");
      return (n || []).some((a) => s[1] && s[1].toLowerCase() === a.toLowerCase() ? (o = a, s.splice(1, 1), r = s.join("/") || "/", !0) : !1), {
        pathname: r,
        detectedLocale: o
      };
    }
  }(dr)), dr;
}
var Mn;
function La() {
  return Mn || (Mn = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "normalizeLocalePath", {
      enumerable: !0,
      get: function() {
        return r;
      }
    });
    const r = (n, o) => process.env.__NEXT_I18N_SUPPORT ? $a().normalizeLocalePath(n, o) : {
      pathname: n,
      detectedLocale: void 0
    };
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(yt, yt.exports)), yt.exports;
}
var vt = { exports: {} }, fr = {}, In;
function za() {
  return In || (In = 1, function(e) {
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
          var s, a;
          const i = (s = l.domain) == null ? void 0 : s.split(":", 1)[0].toLowerCase();
          if (n === i || o === l.defaultLocale.toLowerCase() || (a = l.locales) != null && a.some((p) => p.toLowerCase() === o))
            return l;
        }
      }
    }
  }(fr)), fr;
}
var $n;
function ja() {
  return $n || ($n = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "detectDomainLocale", {
      enumerable: !0,
      get: function() {
        return r;
      }
    });
    const r = function() {
      for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++)
        o[s] = arguments[s];
      if (process.env.__NEXT_I18N_SUPPORT)
        return za().detectDomainLocale(...o);
    };
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(vt, vt.exports)), vt.exports;
}
var Ln;
function Ha() {
  return Ln || (Ln = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "getDomainLocale", {
      enumerable: !0,
      get: function() {
        return o;
      }
    });
    const r = Ot(), n = process.env.__NEXT_ROUTER_BASEPATH || "";
    function o(s, a, l, i) {
      if (process.env.__NEXT_I18N_SUPPORT) {
        const p = La().normalizeLocalePath, d = ja().detectDomainLocale, b = a || p(s, l).detectedLocale, v = d(i, void 0, b);
        if (v) {
          const c = "http" + (v.http ? "" : "s") + "://", f = b === v.defaultLocale ? "" : "/" + b;
          return "" + c + v.domain + (0, r.normalizePathTrailingSlash)("" + n + f + s);
        }
        return !1;
      } else
        return !1;
    }
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(bt, bt.exports)), bt.exports;
}
var xt = { exports: {} }, zn;
function Da() {
  return zn || (zn = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "addBasePath", {
      enumerable: !0,
      get: function() {
        return s;
      }
    });
    const r = wo(), n = Ot(), o = process.env.__NEXT_ROUTER_BASEPATH || "";
    function s(a, l) {
      return (0, n.normalizePathTrailingSlash)(process.env.__NEXT_MANUAL_CLIENT_BASE_PATH && !l ? a : (0, r.addPathPrefix)(a, o));
    }
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(xt, xt.exports)), xt.exports;
}
var wt = { exports: {} }, jn;
function qa() {
  return jn || (jn = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function r(b, v) {
      for (var c in v) Object.defineProperty(b, c, {
        enumerable: !0,
        get: v[c]
      });
    }
    r(t, {
      PrefetchKind: function() {
        return d;
      },
      ACTION_REFRESH: function() {
        return n;
      },
      ACTION_NAVIGATE: function() {
        return o;
      },
      ACTION_RESTORE: function() {
        return s;
      },
      ACTION_SERVER_PATCH: function() {
        return a;
      },
      ACTION_PREFETCH: function() {
        return l;
      },
      ACTION_FAST_REFRESH: function() {
        return i;
      },
      ACTION_SERVER_ACTION: function() {
        return p;
      }
    });
    const n = "refresh", o = "navigate", s = "restore", a = "server-patch", l = "prefetch", i = "fast-refresh", p = "server-action";
    var d;
    (function(b) {
      b.AUTO = "auto", b.FULL = "full", b.TEMPORARY = "temporary";
    })(d || (d = {})), (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(wt, wt.exports)), wt.exports;
}
(function(e, t) {
  "use client";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "default", {
    enumerable: !0,
    get: function() {
      return A;
    }
  });
  const n = /* @__PURE__ */ Te._(pe), o = Sa(), s = xo(), a = bo(), l = Tt(), i = Ta(), p = mo(), d = Oa(), b = Ia(), v = Ha(), c = Da(), f = qa(), g = /* @__PURE__ */ new Set();
  function h(N, R, w, $, _, T) {
    if (typeof window > "u" || !T && !(0, s.isLocalURL)(R))
      return;
    if (!$.bypassPrefetchedCheck) {
      const k = (
        // Let the link's locale prop override the default router locale.
        typeof $.locale < "u" ? $.locale : "locale" in N ? N.locale : void 0
      ), C = R + "%" + w + "%" + k;
      if (g.has(C))
        return;
      g.add(C);
    }
    const x = T ? N.prefetch(R, _) : N.prefetch(R, w, $);
    Promise.resolve(x).catch((k) => {
      if (process.env.NODE_ENV !== "production")
        throw k;
    });
  }
  function E(N) {
    const w = N.currentTarget.getAttribute("target");
    return w && w !== "_self" || N.metaKey || N.ctrlKey || N.shiftKey || N.altKey || // triggers resource download
    N.nativeEvent && N.nativeEvent.which === 2;
  }
  function S(N, R, w, $, _, T, x, k, C, L) {
    const { nodeName: O } = N.currentTarget;
    if (O.toUpperCase() === "A" && (E(N) || // app-router supports external urls out of the box so it shouldn't short-circuit here as support for e.g. `replace` is added in the app-router.
    !C && !(0, s.isLocalURL)(w)))
      return;
    N.preventDefault();
    const P = () => {
      const D = x ?? !0;
      "beforePopState" in R ? R[_ ? "replace" : "push"](w, $, {
        shallow: T,
        locale: k,
        scroll: D
      }) : R[_ ? "replace" : "push"]($ || w, {
        forceOptimisticNavigation: !L,
        scroll: D
      });
    };
    C ? n.default.startTransition(P) : P();
  }
  function m(N) {
    return typeof N == "string" ? N : (0, a.formatUrl)(N);
  }
  const A = /* @__PURE__ */ n.default.forwardRef(function(R, w) {
    let $;
    const { href: _, as: T, children: x, prefetch: k = null, passHref: C, replace: L, shallow: O, scroll: M, locale: P, onClick: D, onMouseEnter: z, onTouchStart: Q, legacyBehavior: W = !1, ...K } = R;
    $ = x, W && (typeof $ == "string" || typeof $ == "number") && ($ = /* @__PURE__ */ n.default.createElement("a", null, $));
    const B = n.default.useContext(p.RouterContext), re = n.default.useContext(d.AppRouterContext), X = B ?? re, F = !B, j = k !== !1, he = k === null ? f.PrefetchKind.AUTO : f.PrefetchKind.FULL;
    if (process.env.NODE_ENV !== "production") {
      let oe = function(Z) {
        return new Error("Failed prop type: The prop `" + Z.key + "` expects a " + Z.expected + " in `<Link>`, but got `" + Z.actual + "` instead." + (typeof window < "u" ? `
Open your browser's console to view the Component stack trace.` : ""));
      };
      Object.keys({
        href: !0
      }).forEach((Z) => {
        if (Z === "href" && (R[Z] == null || typeof R[Z] != "string" && typeof R[Z] != "object"))
          throw oe({
            key: Z,
            expected: "`string` or `object`",
            actual: R[Z] === null ? "null" : typeof R[Z]
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
      }).forEach((Z) => {
        const G = typeof R[Z];
        if (Z === "as") {
          if (R[Z] && G !== "string" && G !== "object")
            throw oe({
              key: Z,
              expected: "`string` or `object`",
              actual: G
            });
        } else if (Z === "locale") {
          if (R[Z] && G !== "string")
            throw oe({
              key: Z,
              expected: "`string`",
              actual: G
            });
        } else if (Z === "onClick" || Z === "onMouseEnter" || Z === "onTouchStart") {
          if (R[Z] && G !== "function")
            throw oe({
              key: Z,
              expected: "`function`",
              actual: G
            });
        } else if ((Z === "replace" || Z === "scroll" || Z === "shallow" || Z === "passHref" || Z === "prefetch" || Z === "legacyBehavior") && R[Z] != null && G !== "boolean")
          throw oe({
            key: Z,
            expected: "`boolean`",
            actual: G
          });
      });
      const V = n.default.useRef(!1);
      R.prefetch && !V.current && !F && (V.current = !0, console.warn("Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated"));
    }
    if (process.env.NODE_ENV !== "production" && F && !T) {
      let oe;
      if (typeof _ == "string" ? oe = _ : typeof _ == "object" && typeof _.pathname == "string" && (oe = _.pathname), oe && oe.split("/").some((U) => U.startsWith("[") && U.endsWith("]")))
        throw new Error("Dynamic href `" + oe + "` found in <Link> while using the `/app` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href");
    }
    const { href: ie, as: se } = n.default.useMemo(() => {
      if (!B) {
        const U = m(_);
        return {
          href: U,
          as: T ? m(T) : U
        };
      }
      const [oe, ye] = (0, o.resolveHref)(B, _, !0);
      return {
        href: oe,
        as: T ? (0, o.resolveHref)(B, T) : ye || oe
      };
    }, [
      B,
      _,
      T
    ]), H = n.default.useRef(ie), I = n.default.useRef(se);
    let ne;
    if (W)
      if (process.env.NODE_ENV === "development") {
        D && console.warn('"onClick" was passed to <Link> with `href` of `' + _ + '` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link'), z && console.warn('"onMouseEnter" was passed to <Link> with `href` of `' + _ + '` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link');
        try {
          ne = n.default.Children.only($);
        } catch {
          throw $ ? new Error("Multiple children were passed to <Link> with `href` of `" + _ + "` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children" + (typeof window < "u" ? ` 
Open your browser's console to view the Component stack trace.` : "")) : new Error("No children were passed to <Link> with `href` of `" + _ + "` but one child is required https://nextjs.org/docs/messages/link-no-children");
        }
      } else
        ne = n.default.Children.only($);
    else if (process.env.NODE_ENV === "development" && ($ == null ? void 0 : $.type) === "a")
      throw new Error(`Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.
Learn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor`);
    const de = W ? ne && typeof ne == "object" && ne.ref : w, [Ne, be, fe] = (0, b.useIntersection)({
      rootMargin: "200px"
    }), Ae = n.default.useCallback((oe) => {
      (I.current !== se || H.current !== ie) && (fe(), I.current = se, H.current = ie), Ne(oe), de && (typeof de == "function" ? de(oe) : typeof de == "object" && (de.current = oe));
    }, [
      se,
      de,
      ie,
      fe,
      Ne
    ]);
    n.default.useEffect(() => {
      process.env.NODE_ENV === "production" && X && (!be || !j || h(X, ie, se, {
        locale: P
      }, {
        kind: he
      }, F));
    }, [
      se,
      ie,
      be,
      P,
      j,
      B == null ? void 0 : B.locale,
      X,
      F,
      he
    ]);
    const xe = {
      ref: Ae,
      onClick(oe) {
        if (process.env.NODE_ENV !== "production" && !oe)
          throw new Error('Component rendered inside next/link has to pass click event to "onClick" prop.');
        !W && typeof D == "function" && D(oe), W && ne.props && typeof ne.props.onClick == "function" && ne.props.onClick(oe), X && (oe.defaultPrevented || S(oe, X, ie, se, L, O, M, P, F, j));
      },
      onMouseEnter(oe) {
        !W && typeof z == "function" && z(oe), W && ne.props && typeof ne.props.onMouseEnter == "function" && ne.props.onMouseEnter(oe), X && ((!j || process.env.NODE_ENV === "development") && F || h(X, ie, se, {
          locale: P,
          priority: !0,
          // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
          bypassPrefetchedCheck: !0
        }, {
          kind: he
        }, F));
      },
      onTouchStart(oe) {
        !W && typeof Q == "function" && Q(oe), W && ne.props && typeof ne.props.onTouchStart == "function" && ne.props.onTouchStart(oe), X && (!j && F || h(X, ie, se, {
          locale: P,
          priority: !0,
          // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
          bypassPrefetchedCheck: !0
        }, {
          kind: he
        }, F));
      }
    };
    if ((0, l.isAbsoluteUrl)(se))
      xe.href = se;
    else if (!W || C || ne.type === "a" && !("href" in ne.props)) {
      const oe = typeof P < "u" ? P : B == null ? void 0 : B.locale, ye = (B == null ? void 0 : B.isLocaleDomain) && (0, v.getDomainLocale)(se, oe, B == null ? void 0 : B.locales, B == null ? void 0 : B.domainLocales);
      xe.href = ye || (0, c.addBasePath)((0, i.addLocale)(se, oe, B == null ? void 0 : B.defaultLocale));
    }
    return W ? /* @__PURE__ */ n.default.cloneElement(ne, xe) : /* @__PURE__ */ n.default.createElement("a", {
      ...K,
      ...xe
    }, $);
  });
  (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
})(_r, _r.exports);
var Ua = _r.exports, Ba = Ua;
const Ga = /* @__PURE__ */ co(Ba);
function _o({ href: e, variant: t = "standard", icon: r, children: n, className: o = "" }) {
  const s = "hover:underline", a = {
    standard: "text-accent-500 hover:text-accent-600",
    discreet: "text-gray-600 hover:text-gray-800",
    danger: "text-red-500 hover:text-red-600",
    icon: "flex items-center gap-2 p-2 rounded-lg hover:bg-glass-light transition-colors"
  }, l = [
    t === "icon" ? "" : s,
    a[t] || a.standard,
    o
  ].join(" ").trim();
  return /* @__PURE__ */ q(Ga, { href: e, className: l, children: [
    r,
    n
  ] });
}
function cc({ items: e = [] }) {
  return /* @__PURE__ */ u("nav", { className: "flex items-center space-x-2 text-sm", "aria-label": "Breadcrumb", children: e.map((t, r) => /* @__PURE__ */ q("div", { className: "flex items-center", children: [
    r > 0 && /* @__PURE__ */ u(Ir, { size: 16, className: "mx-2 text-gray-400" }),
    t.href ? /* @__PURE__ */ u(_o, { href: t.href, children: t.label }) : /* @__PURE__ */ u("span", { className: "text-gray-600", children: t.label })
  ] }, r)) });
}
const Fa = {
  primary: "",
  // Default style
  outline: "btn-outline",
  ghost: "btn-ghost"
}, Va = {
  small: "text-sm py-2 px-3",
  medium: "",
  // Default size
  large: "text-lg py-4 px-6"
}, Fe = pe.forwardRef(
  ({
    children: e,
    variant: t = "primary",
    size: r = "medium",
    loading: n = !1,
    // API unifiée sur 'loading' uniquement
    startIcon: o,
    endIcon: s,
    disabled: a = !1,
    className: l = "",
    ...i
  }, p) => {
    const b = [
      "btn-fluid",
      Fa[t],
      Va[r],
      l
    ].filter(Boolean).join(" ").trim();
    return /* @__PURE__ */ q(
      "button",
      {
        ref: p,
        className: b,
        disabled: n || a,
        "aria-label": n ? "Chargement en cours..." : void 0,
        ...i,
        children: [
          n && /* @__PURE__ */ u(
            "span",
            {
              className: "animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent",
              "aria-hidden": "true"
            }
          ),
          !n && o && /* @__PURE__ */ u("span", { className: "btn-icon", "aria-hidden": "true", children: o }),
          /* @__PURE__ */ u("span", { children: e }),
          !n && s && /* @__PURE__ */ u("span", { className: "btn-icon", "aria-hidden": "true", children: s })
        ]
      }
    );
  }
);
Fe.displayName = "Button";
const jr = "-", Wa = (e) => {
  const t = Xa(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (a) => {
      const l = a.split(jr);
      return l[0] === "" && l.length !== 1 && l.shift(), Ro(l, t) || Ka(a);
    },
    getConflictingClassGroupIds: (a, l) => {
      const i = r[a] || [];
      return l && n[a] ? [...i, ...n[a]] : i;
    }
  };
}, Ro = (e, t) => {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), o = n ? Ro(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const s = e.join(jr);
  return (a = t.validators.find(({
    validator: l
  }) => l(s))) == null ? void 0 : a.classGroupId;
}, Hn = /^\[(.+)\]$/, Ka = (e) => {
  if (Hn.test(e)) {
    const t = Hn.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, Xa = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in r)
    Rr(r[o], n, o, t);
  return n;
}, Rr = (e, t, r, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : Dn(t, o);
      s.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (Qa(o)) {
        Rr(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([s, a]) => {
      Rr(a, Dn(t, s), r, n);
    });
  });
}, Dn = (e, t) => {
  let r = e;
  return t.split(jr).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, Qa = (e) => e.isThemeGetter, Za = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const o = (s, a) => {
    r.set(s, a), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let a = r.get(s);
      if (a !== void 0)
        return a;
      if ((a = n.get(s)) !== void 0)
        return o(s, a), a;
    },
    set(s, a) {
      r.has(s) ? r.set(s, a) : o(s, a);
    }
  };
}, Cr = "!", Nr = ":", Ya = Nr.length, Ja = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let n = (o) => {
    const s = [];
    let a = 0, l = 0, i = 0, p;
    for (let f = 0; f < o.length; f++) {
      let g = o[f];
      if (a === 0 && l === 0) {
        if (g === Nr) {
          s.push(o.slice(i, f)), i = f + Ya;
          continue;
        }
        if (g === "/") {
          p = f;
          continue;
        }
      }
      g === "[" ? a++ : g === "]" ? a-- : g === "(" ? l++ : g === ")" && l--;
    }
    const d = s.length === 0 ? o : o.substring(i), b = ei(d), v = b !== d, c = p && p > i ? p - i : void 0;
    return {
      modifiers: s,
      hasImportantModifier: v,
      baseClassName: b,
      maybePostfixModifierPosition: c
    };
  };
  if (t) {
    const o = t + Nr, s = n;
    n = (a) => a.startsWith(o) ? s(a.substring(o.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: a,
      maybePostfixModifierPosition: void 0
    };
  }
  if (r) {
    const o = n;
    n = (s) => r({
      className: s,
      parseClassName: o
    });
  }
  return n;
}, ei = (e) => e.endsWith(Cr) ? e.substring(0, e.length - 1) : e.startsWith(Cr) ? e.substring(1) : e, ti = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((n) => [n, !0]));
  return (n) => {
    if (n.length <= 1)
      return n;
    const o = [];
    let s = [];
    return n.forEach((a) => {
      a[0] === "[" || t[a] ? (o.push(...s.sort(), a), s = []) : s.push(a);
    }), o.push(...s.sort()), o;
  };
}, ri = (e) => ({
  cache: Za(e.cacheSize),
  parseClassName: Ja(e),
  sortModifiers: ti(e),
  ...Wa(e)
}), ni = /\s+/, oi = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o,
    sortModifiers: s
  } = t, a = [], l = e.trim().split(ni);
  let i = "";
  for (let p = l.length - 1; p >= 0; p -= 1) {
    const d = l[p], {
      isExternal: b,
      modifiers: v,
      hasImportantModifier: c,
      baseClassName: f,
      maybePostfixModifierPosition: g
    } = r(d);
    if (b) {
      i = d + (i.length > 0 ? " " + i : i);
      continue;
    }
    let h = !!g, E = n(h ? f.substring(0, g) : f);
    if (!E) {
      if (!h) {
        i = d + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (E = n(f), !E) {
        i = d + (i.length > 0 ? " " + i : i);
        continue;
      }
      h = !1;
    }
    const S = s(v).join(":"), m = c ? S + Cr : S, y = m + E;
    if (a.includes(y))
      continue;
    a.push(y);
    const A = o(E, h);
    for (let N = 0; N < A.length; ++N) {
      const R = A[N];
      a.push(m + R);
    }
    i = d + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function si() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Co(t)) && (n && (n += " "), n += r);
  return n;
}
const Co = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Co(e[n])) && (r && (r += " "), r += t);
  return r;
};
function ai(e, ...t) {
  let r, n, o, s = a;
  function a(i) {
    const p = t.reduce((d, b) => b(d), e());
    return r = ri(p), n = r.cache.get, o = r.cache.set, s = l, l(i);
  }
  function l(i) {
    const p = n(i);
    if (p)
      return p;
    const d = oi(i, r);
    return o(i, d), d;
  }
  return function() {
    return s(si.apply(null, arguments));
  };
}
const _e = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, No = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Eo = /^\((?:(\w[\w-]*):)?(.+)\)$/i, ii = /^\d+\/\d+$/, li = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ci = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ui = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, di = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, fi = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ve = (e) => ii.test(e), ae = (e) => !!e && !Number.isNaN(Number(e)), je = (e) => !!e && Number.isInteger(Number(e)), pr = (e) => e.endsWith("%") && ae(e.slice(0, -1)), Me = (e) => li.test(e), pi = () => !0, mi = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  ci.test(e) && !ui.test(e)
), Ao = () => !1, hi = (e) => di.test(e), gi = (e) => fi.test(e), bi = (e) => !Y(e) && !J(e), yi = (e) => Ze(e, Po, Ao), Y = (e) => No.test(e), qe = (e) => Ze(e, To, mi), mr = (e) => Ze(e, Ri, ae), qn = (e) => Ze(e, ko, Ao), vi = (e) => Ze(e, So, gi), _t = (e) => Ze(e, Oo, hi), J = (e) => Eo.test(e), rt = (e) => Ye(e, To), xi = (e) => Ye(e, Ci), Un = (e) => Ye(e, ko), wi = (e) => Ye(e, Po), _i = (e) => Ye(e, So), Rt = (e) => Ye(e, Oo, !0), Ze = (e, t, r) => {
  const n = No.exec(e);
  return n ? n[1] ? t(n[1]) : r(n[2]) : !1;
}, Ye = (e, t, r = !1) => {
  const n = Eo.exec(e);
  return n ? n[1] ? t(n[1]) : r : !1;
}, ko = (e) => e === "position" || e === "percentage", So = (e) => e === "image" || e === "url", Po = (e) => e === "length" || e === "size" || e === "bg-size", To = (e) => e === "length", Ri = (e) => e === "number", Ci = (e) => e === "family-name", Oo = (e) => e === "shadow", Ni = () => {
  const e = _e("color"), t = _e("font"), r = _e("text"), n = _e("font-weight"), o = _e("tracking"), s = _e("leading"), a = _e("breakpoint"), l = _e("container"), i = _e("spacing"), p = _e("radius"), d = _e("shadow"), b = _e("inset-shadow"), v = _e("text-shadow"), c = _e("drop-shadow"), f = _e("blur"), g = _e("perspective"), h = _e("aspect"), E = _e("ease"), S = _e("animate"), m = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], y = () => [
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
  ], A = () => [...y(), J, Y], N = () => ["auto", "hidden", "clip", "visible", "scroll"], R = () => ["auto", "contain", "none"], w = () => [J, Y, i], $ = () => [Ve, "full", "auto", ...w()], _ = () => [je, "none", "subgrid", J, Y], T = () => ["auto", {
    span: ["full", je, J, Y]
  }, je, J, Y], x = () => [je, "auto", J, Y], k = () => ["auto", "min", "max", "fr", J, Y], C = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], L = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], O = () => ["auto", ...w()], M = () => [Ve, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...w()], P = () => [e, J, Y], D = () => [...y(), Un, qn, {
    position: [J, Y]
  }], z = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], Q = () => ["auto", "cover", "contain", wi, yi, {
    size: [J, Y]
  }], W = () => [pr, rt, qe], K = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    p,
    J,
    Y
  ], B = () => ["", ae, rt, qe], re = () => ["solid", "dashed", "dotted", "double"], X = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], F = () => [ae, pr, Un, qn], j = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    f,
    J,
    Y
  ], he = () => ["none", ae, J, Y], ie = () => ["none", ae, J, Y], se = () => [ae, J, Y], H = () => [Ve, "full", ...w()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Me],
      breakpoint: [Me],
      color: [pi],
      container: [Me],
      "drop-shadow": [Me],
      ease: ["in", "out", "in-out"],
      font: [bi],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Me],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Me],
      shadow: [Me],
      spacing: ["px", ae],
      text: [Me],
      "text-shadow": [Me],
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
        aspect: ["auto", "square", Ve, Y, J, h]
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
        columns: [ae, Y, J, l]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": m()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": m()
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
        object: A()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: N()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": N()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": N()
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
        inset: $()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": $()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": $()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: $()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: $()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: $()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: $()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: $()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: $()
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
        z: [je, "auto", J, Y]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Ve, "full", "auto", l, ...w()]
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
        flex: [ae, Ve, "auto", "initial", "none", Y]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", ae, J, Y]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", ae, J, Y]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [je, "first", "last", "none", J, Y]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": _()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: T()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": x()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": x()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": _()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: T()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": x()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": x()
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
        "auto-cols": k()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": k()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: w()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": w()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": w()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...C(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...L(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...L()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...C()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...L(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...L(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": C()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...L(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...L()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: w()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: w()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: w()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: w()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: w()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: w()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: w()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: w()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: w()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: O()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: O()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: O()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: O()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: O()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: O()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: O()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: O()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: O()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": w()
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
        "space-y": w()
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
        size: M()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [l, "screen", ...M()]
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
          ...M()
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
            screen: [a]
          },
          ...M()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...M()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...M()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...M()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, rt, qe]
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
        font: [n, J, mr]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", pr, Y]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [xi, Y, t]
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
        "line-clamp": [ae, "none", J, mr]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          s,
          ...w()
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
        placeholder: P()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: P()
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
        decoration: [...re(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [ae, "from-font", "auto", J, qe]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: P()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [ae, "auto", J, Y]
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
        indent: w()
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
        bg: D()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: z()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: Q()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, je, J, Y],
          radial: ["", J, Y],
          conic: [je, J, Y]
        }, _i, vi]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: P()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: W()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: W()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: W()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: P()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: P()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: P()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: K()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": K()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": K()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": K()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": K()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": K()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": K()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": K()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": K()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": K()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": K()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": K()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": K()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": K()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": K()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: B()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": B()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": B()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": B()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": B()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": B()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": B()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": B()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": B()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": B()
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
        "divide-y": B()
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
        border: [...re(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...re(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: P()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": P()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": P()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": P()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": P()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": P()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": P()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": P()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": P()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: P()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...re(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ae, J, Y]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", ae, rt, qe]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: P()
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
          d,
          Rt,
          _t
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: P()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", b, Rt, _t]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": P()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: B()
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
        ring: P()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [ae, qe]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": P()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": B()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": P()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", v, Rt, _t]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": P()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [ae, J, Y]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...X(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": X()
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
        "mask-linear-from": F()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": F()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": P()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": P()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": F()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": F()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": P()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": P()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": F()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": F()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": P()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": P()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": F()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": F()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": P()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": P()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": F()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": F()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": P()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": P()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": F()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": F()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": P()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": P()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": F()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": F()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": P()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": P()
      }],
      "mask-image-radial": [{
        "mask-radial": [J, Y]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": F()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": F()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": P()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": P()
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
        "mask-radial-at": y()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [ae]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": F()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": F()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": P()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": P()
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
        mask: z()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: Q()
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
        mask: ["none", J, Y]
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
        blur: j()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [ae, J, Y]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [ae, J, Y]
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
          Rt,
          _t
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": P()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", ae, J, Y]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [ae, J, Y]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", ae, J, Y]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ae, J, Y]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", ae, J, Y]
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
        "backdrop-blur": j()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [ae, J, Y]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [ae, J, Y]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", ae, J, Y]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [ae, J, Y]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", ae, J, Y]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [ae, J, Y]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ae, J, Y]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", ae, J, Y]
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
        "border-spacing": w()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": w()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": w()
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
        duration: [ae, "initial", J, Y]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", E, J, Y]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [ae, J, Y]
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
        perspective: [g, J, Y]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": A()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: he()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": he()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": he()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": he()
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
        transform: [J, Y, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: A()
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
        translate: H()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": H()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": H()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": H()
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
        accent: P()
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
        caret: P()
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
        "scroll-m": w()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": w()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": w()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": w()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": w()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": w()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": w()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": w()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": w()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": w()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": w()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": w()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": w()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": w()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": w()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": w()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": w()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": w()
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
        fill: ["none", ...P()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [ae, rt, qe, mr]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...P()]
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
}, Ei = /* @__PURE__ */ ai(Ni), Ai = kt(void 0), ki = Ai.Provider, Si = pe.forwardRef((e, t) => {
  const {
    className: r,
    children: n,
    isPressable: o = !1,
    onPress: s,
    onPressStart: a,
    onPressEnd: l,
    onPressChange: i,
    onPressUp: p,
    ...d
  } = e, { pressProps: b, isPressed: v } = rs({
    onPress: s,
    onPressStart: a,
    onPressEnd: l,
    onPressChange: i,
    onPressUp: p,
    isDisabled: !o,
    ref: t
  }), c = {}, f = Ei(
    "glass-card",
    o && "cursor-pointer hover:shadow-lg hover:transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200",
    v && "transform scale-[0.98] shadow-lg",
    r
  );
  return /* @__PURE__ */ u(ki, { value: c, children: /* @__PURE__ */ u("div", { ref: t, className: f, ...o ? b : {}, ...d, children: n }) });
});
Si.displayName = "Card";
const Pi = pe.forwardRef(({ children: e, className: t, ...r }, n) => /* @__PURE__ */ u("div", { ref: n, className: `card-body ${t || ""}`, ...r, children: e }));
Pi.displayName = "CardBody";
const Ti = pe.forwardRef(({ children: e, className: t, ...r }, n) => /* @__PURE__ */ u("p", { ref: n, className: `card-description ${t || ""}`, ...r, children: e }));
Ti.displayName = "CardDescription";
const Oi = pe.forwardRef(({ children: e, className: t, ...r }, n) => /* @__PURE__ */ u("div", { ref: n, className: `card-footer ${t || ""}`, ...r, children: e }));
Oi.displayName = "CardFooter";
const Mi = pe.forwardRef(({ children: e, className: t, ...r }, n) => /* @__PURE__ */ u("div", { ref: n, className: `card-header ${t || ""}`, ...r, children: e }));
Mi.displayName = "CardHeader";
const Ii = pe.forwardRef(({ children: e, className: t, ...r }, n) => /* @__PURE__ */ u("h3", { ref: n, className: `card-title ${t || ""}`, ...r, children: e }));
Ii.displayName = "CardTitle";
function Bn({ label: e, defaultChecked: t = !1, onChange: r, name: n }) {
  const [o, s] = le(t);
  return /* @__PURE__ */ q("label", { className: "flex items-center space-x-3 cursor-pointer", children: [
    /* @__PURE__ */ u(
      "input",
      {
        type: "checkbox",
        name: n,
        checked: o,
        onChange: (a) => {
          s(a.target.checked), r(a);
        },
        className: "sr-only"
      }
    ),
    /* @__PURE__ */ u(
      "div",
      {
        className: `w-5 h-5 rounded border-2 flex items-center justify-center ${o ? "bg-accent-500 border-accent-500" : "border-gray-300"}`,
        children: o && /* @__PURE__ */ u(Mr, { size: 12, className: "text-white" })
      }
    ),
    e && /* @__PURE__ */ u("span", { className: "text-sm", children: e })
  ] });
}
const uc = ({ label: e, selected: t = !1, onClick: r, className: n = "" }) => {
  const l = `px-3 py-1 rounded-full text-sm border transition-colors cursor-pointer ${t ? "bg-accent-500 border-accent-500 text-white" : "bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200"} ${n}`;
  return /* @__PURE__ */ u(
    "button",
    {
      type: "button",
      className: l,
      onClick: r,
      children: e
    }
  );
};
function dc({ title: e, children: t }) {
  const [r, n] = le(!1);
  return /* @__PURE__ */ q("div", { className: "glass-surface rounded-lg overflow-hidden", children: [
    /* @__PURE__ */ q(
      "div",
      {
        className: "flex items-center justify-between p-4 cursor-pointer hover:bg-glass-light",
        onClick: () => n(!r),
        children: [
          /* @__PURE__ */ u("h4", { className: "font-medium", children: e }),
          /* @__PURE__ */ u(
            Qe,
            {
              size: 16,
              className: `transform transition-transform ${r ? "rotate-180" : ""}`
            }
          )
        ]
      }
    ),
    r && /* @__PURE__ */ u("div", { className: "px-4 pb-4 bg-gray-50", children: /* @__PURE__ */ u("div", { className: "pt-4 border-t border-gray-200", children: t }) })
  ] });
}
function De({ icon: e, onClick: t, className: r = "" }) {
  return /* @__PURE__ */ u(
    "button",
    {
      onClick: t,
      className: `p-3 rounded-lg glass-surface hover:bg-accent-500 hover:text-white transition-colors ${r}`.trim(),
      children: e
    }
  );
}
const fc = ({ logo: e, title: t, header: r, navContent: n, children: o }) => {
  const [s, a] = le(!1);
  return /* @__PURE__ */ q("div", { className: "flex h-full", children: [
    /* @__PURE__ */ u(
      "div",
      {
        className: `glass-surface transition-all duration-300 border-r border-gray-200 dark:border-gray-700 ${s ? "w-20" : "w-64"}`,
        children: /* @__PURE__ */ q("div", { className: "flex flex-col h-full", children: [
          /* @__PURE__ */ q("div", { className: "relative", children: [
            /* @__PURE__ */ u("div", { className: "absolute top-3 right-3 z-10", children: /* @__PURE__ */ u(
              De,
              {
                onClick: () => a(!s),
                icon: s ? /* @__PURE__ */ u(ao, { size: 18 }) : /* @__PURE__ */ u(Oe, { size: 18 }),
                "aria-label": "Toggle sidebar"
              }
            ) }),
            r,
            e || t && /* @__PURE__ */ q(
              "div",
              {
                className: `flex flex-col items-center pt-12 pb-4 px-4 ${s ? "pb-6" : "pb-8"}`,
                children: [
                  e && /* @__PURE__ */ u("div", { className: "flex-shrink-0 mb-3", children: e }),
                  !s && t && /* @__PURE__ */ u("div", { className: "font-semibold text-lg text-center leading-tight px-2", children: t })
                ]
              }
            ),
            /* @__PURE__ */ u("div", { className: "mx-4 mb-4 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" })
          ] }),
          /* @__PURE__ */ u("div", { className: "flex-grow overflow-y-auto px-4 pb-4", children: typeof n == "function" ? n(s) : n })
        ] })
      }
    ),
    /* @__PURE__ */ u("div", { className: "flex-1 p-4", children: o })
  ] });
};
function pc({ size: e = "md", children: t }) {
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
  return /* @__PURE__ */ u("div", { className: n.trim(), children: t });
}
function mc({ children: e, items: t }) {
  const [r, n] = le({ visible: !1, x: 0, y: 0 }), o = Le((a) => {
    a.preventDefault(), n({ visible: !0, x: a.pageX, y: a.pageY });
  }, []), s = Le(() => {
    r.visible && n((a) => ({ ...a, visible: !1 }));
  }, [r.visible]);
  return Se(() => (document.addEventListener("click", s), () => {
    document.removeEventListener("click", s);
  }), [s]), /* @__PURE__ */ q("div", { onContextMenu: o, children: [
    e,
    r.visible && /* @__PURE__ */ u(
      "div",
      {
        className: "fixed glass-surface rounded-lg shadow-lg z-50 py-1",
        style: { top: r.y, left: r.x },
        children: t.map((a, l) => a.separator ? /* @__PURE__ */ u("hr", { className: "my-1 border-gray-200" }, `sep-${l}`) : /* @__PURE__ */ q(
          "button",
          {
            onClick: a.onClick,
            className: "flex items-center w-full px-4 py-2 text-sm hover:bg-glass-light transition-colors",
            children: [
              a.icon && /* @__PURE__ */ u("span", { className: "mr-2", children: a.icon }),
              a.label
            ]
          },
          a.label
        ))
      }
    )
  ] });
}
function hc({ label: e, value: t, icon: r, className: n = "" }) {
  const s = ["flex justify-between items-center py-2 px-3 rounded-md bg-muted/50", n].filter(Boolean).join(" ").trim();
  return /* @__PURE__ */ q("div", { className: s, children: [
    /* @__PURE__ */ q("div", { className: "flex items-center gap-2", children: [
      r && /* @__PURE__ */ u("span", { className: "text-muted-foreground", "aria-hidden": "true", children: r }),
      /* @__PURE__ */ u("span", { className: "text-sm font-medium text-muted-foreground", children: e })
    ] }),
    /* @__PURE__ */ u("div", { className: "text-sm font-semibold text-foreground", children: t })
  ] });
}
const Gn = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-2xl",
  xl: "max-w-4xl",
  "2xl": "max-w-6xl"
};
function $i({ isOpen: e, onClose: t, title: r, children: n, size: o = "md" }) {
  const s = Pe(null), a = Pe(null);
  if (Se(() => {
    var i, p;
    e ? (a.current = document.activeElement, (i = s.current) == null || i.focus()) : (p = a.current) == null || p.focus();
  }, [e]), Se(() => {
    const i = (p) => {
      p.key === "Escape" && t();
    };
    return e && (document.addEventListener("keydown", i), document.body.style.overflow = "hidden"), () => {
      document.removeEventListener("keydown", i), document.body.style.overflow = "unset";
    };
  }, [e, t]), !e) return null;
  const l = Gn[o] || Gn.md;
  return /* @__PURE__ */ u(
    "div",
    {
      className: "fixed inset-0 flex items-center justify-center z-50 p-4",
      style: { background: "var(--fg-overlay-medium)" },
      onClick: t,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "modal-title",
      children: /* @__PURE__ */ q(
        "div",
        {
          ref: s,
          className: `modal-fluid show w-full ${l} max-h-[90vh] overflow-hidden`,
          onClick: (i) => i.stopPropagation(),
          tabIndex: -1,
          role: "document",
          children: [
            /* @__PURE__ */ q("div", { className: "flex justify-between items-center mb-4", children: [
              /* @__PURE__ */ u("h4", { id: "modal-title", className: "text-lg font-semibold", children: r }),
              /* @__PURE__ */ u(
                De,
                {
                  icon: /* @__PURE__ */ u(Oe, { size: 20 }),
                  onClick: t,
                  "aria-label": "Fermer la modal"
                }
              )
            ] }),
            /* @__PURE__ */ u("div", { children: n })
          ]
        }
      )
    }
  );
}
const Mo = ({
  title: e,
  onClose: t,
  showCloseButton: r = !0,
  children: n,
  className: o = "",
  variant: s = "default"
  // default, compact, spacious
}) => {
  const a = "flex-shrink-0 flex justify-between items-center border-b border-border bg-background", l = {
    default: "pb-4 pt-2 px-4",
    compact: "pb-2 pt-1 px-3",
    spacious: "pb-6 pt-4 px-6"
  }, i = [
    a,
    l[s] || l.default,
    o
  ].filter(Boolean).join(" ").trim();
  return /* @__PURE__ */ q("div", { className: i, children: [
    /* @__PURE__ */ q("div", { className: "flex-1", children: [
      e && /* @__PURE__ */ u(
        "h4",
        {
          id: "modal-title",
          className: "text-lg font-semibold text-foreground",
          style: { color: "var(--fg-text-primary)" },
          children: e
        }
      ),
      n
    ] }),
    r && t && /* @__PURE__ */ u(
      De,
      {
        icon: /* @__PURE__ */ u(Oe, { size: 20 }),
        onClick: t,
        "aria-label": "Fermer la modal",
        className: "ml-4"
      }
    )
  ] });
};
Mo.displayName = "ModalHeader";
const Io = ({
  children: e,
  className: t = "",
  variant: r = "default",
  // default, compact, spacious
  scrollable: n = !0
}) => {
  const o = "flex-1 bg-background", s = {
    default: "py-4 px-4",
    compact: "py-2 px-3",
    spacious: "py-6 px-6"
  }, a = n ? "overflow-y-auto max-h-[60vh]" : "overflow-visible", l = [
    o,
    s[r] || s.default,
    a,
    t
  ].filter(Boolean).join(" ").trim();
  return /* @__PURE__ */ u("div", { className: l, children: e });
};
Io.displayName = "ModalBody";
function gc({
  label: e = "Documents",
  acceptedTypes: t = ".pdf,.doc,.docx,.jpg,.jpeg,.png",
  maxFileSize: r = 10 * 1024 * 1024,
  // 10MB par défaut
  multiple: n = !0,
  files: o = [],
  onFilesChange: s,
  onFileRemove: a,
  onFilePreview: l,
  disabled: i = !1,
  error: p = null,
  helperText: d = null,
  required: b = !1
}) {
  var T;
  const [v, c] = le(!1), [f, g] = le(null), [h, E] = le(!1), S = (x) => {
    x.preventDefault(), x.stopPropagation(), x.type === "dragenter" || x.type === "dragover" ? c(!0) : x.type === "dragleave" && c(!1);
  }, m = (x) => {
    if (x.preventDefault(), x.stopPropagation(), c(!1), i) return;
    const k = Array.from(x.dataTransfer.files);
    A(k);
  }, y = (x) => {
    const k = Array.from(x.target.files);
    A(k), x.target.value = "";
  }, A = (x) => {
    const k = [], C = [];
    x.forEach((L) => {
      if (L.size > r) {
        C.push(`${L.name}: Fichier trop volumineux (max ${w(r)})`);
        return;
      }
      const O = `.${L.name.split(".").pop().toLowerCase()}`;
      if (t && !t.includes(O)) {
        C.push(`${L.name}: Type de fichier non supporté`);
        return;
      }
      k.push(L);
    }), C.length > 0 && console.warn("Erreurs de validation:", C), k.length > 0 && s && s(n ? [...o, ...k] : [k[0]]);
  }, N = (x) => {
    if (a)
      a(x);
    else if (s) {
      const k = o.filter((C, L) => L !== x);
      s(k);
    }
  }, R = (x, k) => {
    g({ file: x, index: k }), E(!0), l && l(x, k);
  }, w = (x) => {
    if (x === 0) return "0 Bytes";
    const k = 1024, C = ["Bytes", "KB", "MB", "GB"], L = Math.floor(Math.log(x) / Math.log(k));
    return parseFloat((x / Math.pow(k, L)).toFixed(2)) + " " + C[L];
  }, $ = (x) => {
    const k = x.split(".").pop().toLowerCase();
    return ["jpg", "jpeg", "png", "gif", "webp"].includes(k) ? "🖼️" : ["pdf"].includes(k) ? "📄" : ["doc", "docx"].includes(k) ? "📝" : "📎";
  }, _ = (x) => {
    const k = x.split(".").pop().toLowerCase();
    return ["jpg", "jpeg", "png", "gif", "webp", "pdf"].includes(k);
  };
  return /* @__PURE__ */ q("div", { className: "space-y-4", children: [
    e && /* @__PURE__ */ q("label", { className: "block text-sm font-medium text-gray-700", children: [
      e,
      b && /* @__PURE__ */ u("span", { className: "text-red-500 ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ q(
      "div",
      {
        className: `
          relative border-2 border-dashed rounded-lg p-6 text-center transition-all duration-200
          ${v ? "border-primary-500 bg-primary-50" : "border-gray-300 hover:border-primary-400"}
          ${i ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
          ${p ? "border-red-300 bg-red-50" : ""}
        `,
        onDragEnter: S,
        onDragLeave: S,
        onDragOver: S,
        onDrop: m,
        children: [
          /* @__PURE__ */ u(
            "input",
            {
              type: "file",
              multiple: n,
              accept: t,
              onChange: y,
              disabled: i,
              className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            }
          ),
          /* @__PURE__ */ u(
            io,
            {
              size: 48,
              className: `mx-auto mb-4 ${v ? "text-primary-500" : "text-gray-400"}`
            }
          ),
          /* @__PURE__ */ u("p", { className: "text-gray-600 mb-2", children: v ? "Déposez vos fichiers ici..." : "Glissez-déposez vos fichiers ici ou cliquez pour parcourir" }),
          /* @__PURE__ */ u(
            Fe,
            {
              type: "button",
              variant: "outline",
              size: "sm",
              disabled: i,
              onClick: (x) => x.stopPropagation(),
              children: "Parcourir les fichiers"
            }
          ),
          t && /* @__PURE__ */ q("p", { className: "text-xs text-gray-500 mt-2", children: [
            "Types acceptés: ",
            t
          ] }),
          r && /* @__PURE__ */ q("p", { className: "text-xs text-gray-500", children: [
            "Taille max: ",
            w(r)
          ] })
        ]
      }
    ),
    d && !p && /* @__PURE__ */ u("p", { className: "text-sm text-gray-500", children: d }),
    p && /* @__PURE__ */ q("div", { className: "flex items-center text-sm text-red-600", children: [
      /* @__PURE__ */ u(Xe, { size: 16, className: "mr-1" }),
      p
    ] }),
    o && o.length > 0 && /* @__PURE__ */ q("div", { className: "space-y-2", children: [
      /* @__PURE__ */ q("h4", { className: "text-sm font-medium text-gray-700", children: [
        "Fichiers sélectionnés (",
        o.length,
        ")"
      ] }),
      /* @__PURE__ */ u("div", { className: "space-y-2", children: o.map((x, k) => /* @__PURE__ */ q(
        "div",
        {
          className: "flex items-center justify-between p-3 bg-gray-50 rounded-lg border",
          children: [
            /* @__PURE__ */ q("div", { className: "flex items-center space-x-3 flex-1 min-w-0", children: [
              /* @__PURE__ */ u("span", { className: "text-lg", children: $(x.name) }),
              /* @__PURE__ */ q("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ u("p", { className: "text-sm font-medium text-gray-900 truncate", children: x.name }),
                /* @__PURE__ */ u("p", { className: "text-xs text-gray-500", children: w(x.size) })
              ] })
            ] }),
            /* @__PURE__ */ q("div", { className: "flex items-center space-x-2", children: [
              _(x.name) && /* @__PURE__ */ u(
                Fe,
                {
                  type: "button",
                  variant: "ghost",
                  size: "sm",
                  startIcon: /* @__PURE__ */ u(Es, { size: 16 }),
                  onClick: () => R(x, k),
                  children: "Aperçu"
                }
              ),
              /* @__PURE__ */ u(
                Fe,
                {
                  type: "button",
                  variant: "ghost",
                  size: "sm",
                  startIcon: /* @__PURE__ */ u(Oe, { size: 16 }),
                  onClick: () => N(k),
                  className: "text-red-600 hover:text-red-700",
                  children: "Supprimer"
                }
              )
            ] })
          ]
        },
        k
      )) })
    ] }),
    /* @__PURE__ */ q(
      $i,
      {
        isOpen: h,
        onClose: () => E(!1),
        title: "Aperçu du document",
        children: [
          /* @__PURE__ */ u(Mo, { children: /* @__PURE__ */ q("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ u("h3", { className: "text-lg font-semibold", children: (T = f == null ? void 0 : f.file) == null ? void 0 : T.name }),
            /* @__PURE__ */ u(
              Fe,
              {
                variant: "ghost",
                size: "sm",
                startIcon: /* @__PURE__ */ u(Cs, { size: 16 }),
                onClick: () => {
                  const x = URL.createObjectURL(f.file), k = document.createElement("a");
                  k.href = x, k.download = f.file.name, k.click(), URL.revokeObjectURL(x);
                },
                children: "Télécharger"
              }
            )
          ] }) }),
          /* @__PURE__ */ u(Io, { children: f && /* @__PURE__ */ u("div", { className: "max-h-96 overflow-auto", children: f.file.type.startsWith("image/") ? /* @__PURE__ */ u(
            "img",
            {
              src: URL.createObjectURL(f.file),
              alt: f.file.name,
              className: "max-w-full h-auto rounded-lg"
            }
          ) : f.file.type === "application/pdf" ? /* @__PURE__ */ u(
            "embed",
            {
              src: URL.createObjectURL(f.file),
              type: "application/pdf",
              width: "100%",
              height: "400px",
              className: "rounded-lg"
            }
          ) : /* @__PURE__ */ q("div", { className: "text-center py-8", children: [
            /* @__PURE__ */ u(Ss, { size: 48, className: "mx-auto text-gray-400 mb-4" }),
            /* @__PURE__ */ u("p", { className: "text-gray-600", children: "Aperçu non disponible pour ce type de fichier" })
          ] }) }) })
        ]
      }
    )
  ] });
}
function bc({ isOpen: e, onClose: t, title: r, children: n }) {
  return e ? /* @__PURE__ */ q(to, { children: [
    /* @__PURE__ */ u(
      "div",
      {
        className: "fixed inset-0 bg-black bg-opacity-50 z-40",
        onClick: t
      }
    ),
    /* @__PURE__ */ u("div", { className: "fixed right-0 top-0 h-full w-80 glass-surface z-50 animate-slide-in", children: /* @__PURE__ */ q("div", { className: "p-6", children: [
      /* @__PURE__ */ q("div", { className: "flex justify-between items-center mb-6", children: [
        /* @__PURE__ */ u("h4", { className: "text-lg font-semibold", children: r }),
        /* @__PURE__ */ u(
          "button",
          {
            onClick: t,
            className: "p-2 hover:bg-glass-light rounded-lg transition-colors",
            children: /* @__PURE__ */ u(Oe, { size: 20 })
          }
        )
      ] }),
      n
    ] }) })
  ] }) : null;
}
function Li(e = "portal-root") {
  const [t, r] = le(null);
  return Se(() => {
    let n = document.getElementById(e), o = !1;
    return n || (o = !0, n = document.createElement("div"), n.id = e, n.style.position = "relative", n.style.zIndex = "9999", document.body.appendChild(n)), r(n), () => {
      o && n.parentNode && n.parentNode.removeChild(n);
    };
  }, [e]), t;
}
function zi({ children: e, id: t = "portal-root" }) {
  const r = Li(t);
  return r ? ts(e, r) : null;
}
const $o = kt({
  isOpen: !1,
  setIsOpen: () => {
  },
  onClose: () => {
  }
}), ji = $o.Provider, Hr = () => {
  const e = Or($o);
  if (!e)
    throw new Error("useDropdown must be used within a Dropdown component");
  return e;
};
function $e({ children: e, className: t = "" }) {
  const [r, n] = le(!1), o = Pe(null), s = Le((l) => {
    o.current && !o.current.contains(l.target) && n(!1);
  }, []);
  Se(() => (document.addEventListener("mousedown", s), () => {
    document.removeEventListener("mousedown", s);
  }), [s]);
  const a = Le(() => {
    n(!1);
  }, []);
  return /* @__PURE__ */ u(ji, { value: { isOpen: r, setIsOpen: n, onClose: a }, children: /* @__PURE__ */ u("div", { className: `relative inline-block ${t}`, ref: o, children: e }) });
}
function Hi({ children: e, asChild: t }) {
  const { isOpen: r, setIsOpen: n } = Hr(), o = (s) => {
    s.preventDefault(), n(!r);
  };
  return t ? e ? pe.cloneElement(e, {
    onClick: (s) => {
      o(s), e.props.onClick && e.props.onClick(s);
    }
  }) : null : /* @__PURE__ */ u(
    "button",
    {
      onClick: o,
      className: "inline-flex items-center justify-center",
      children: e
    }
  );
}
function Di({ children: e, align: t = "left", className: r = "" }) {
  const { isOpen: n } = Hr(), o = Pe(null);
  Pe(null);
  const [s, a] = le({}), [l, i] = le(!1), p = t === "right" || t === "end" ? "right-0" : t === "center" ? "left-1/2 -translate-x-1/2" : "left-0";
  if (Se(() => {
    if (n && o.current) {
      const b = o.current.closest(".relative"), v = (b == null ? void 0 : b.querySelector("button")) || (b == null ? void 0 : b.querySelector('[role="button"]'));
      if (v) {
        v.getBoundingClientRect();
        const c = o.current.getBoundingClientRect(), f = window.innerWidth, g = window.innerHeight;
        b == null || b.closest(
          "td, th, .overflow-hidden, .overflow-x-hidden"
        );
        {
          i(!1);
          const h = { zIndex: 50 };
          if (c.right > f && (h.right = "0", h.left = "auto", t === "center" && (h.transform = "none")), c.bottom > g) {
            const E = c.bottom - g;
            h.maxHeight = `${c.height - E - 10}px`, h.overflowY = "auto";
          }
          a(h);
        }
      }
    } else n || (a({}), i(!1));
  }, [n, t]), !n) return null;
  const d = /* @__PURE__ */ u("div", { className: "py-1", children: e });
  return l ? /* @__PURE__ */ u(zi, { id: "dropdown-portal", children: /* @__PURE__ */ u(
    "div",
    {
      ref: o,
      className: `dropdown-menu-portal glass-surface rounded-lg shadow-lg ${r}`,
      style: s,
      children: d
    }
  ) }) : /* @__PURE__ */ u(
    "div",
    {
      ref: o,
      className: `dropdown-menu absolute ${p} mt-2 glass-surface rounded-lg shadow-lg ${r}`,
      style: s,
      children: d
    }
  );
}
function qi({ children: e, onClick: t, className: r = "", asChild: n }) {
  const { onClose: o } = Hr(), s = (a) => {
    setTimeout(() => o(), 150), t && t(a);
  };
  return n ? e ? pe.cloneElement(e, {
    onClick: (a) => {
      e.props.onClick && e.props.onClick(a), setTimeout(() => o(), 150);
    },
    className: `flex items-center w-full px-4 py-2 text-sm transition-colors hover:bg-glass-light ${r} ${e.props.className || ""}`
  }) : null : /* @__PURE__ */ u(
    "button",
    {
      onClick: s,
      className: `flex items-center w-full px-4 py-2 text-sm transition-colors hover:bg-glass-light ${r}`,
      children: e
    }
  );
}
function Ui() {
  return /* @__PURE__ */ u("hr", { className: "my-1 border-gray-200" });
}
$e.Trigger = Hi;
$e.Menu = Di;
$e.Item = qi;
$e.Separator = Ui;
function yc({ icon: e, title: t, message: r, action: n }) {
  const o = pe.isValidElement(e);
  return o || e && (e.type, { ...e.props }), /* @__PURE__ */ q("div", { className: "text-center py-12", children: [
    o ? pe.cloneElement(e, {
      size: e.props.size || 48,
      className: `mx-auto text-gray-400 mb-4 ${e.props.className || ""}`.trim()
    }) : e ? pe.createElement(e, { size: 48, className: "mx-auto text-gray-400 mb-4" }) : /* @__PURE__ */ u(yr, { size: 48, className: "mx-auto text-gray-400 mb-4" }),
    /* @__PURE__ */ u("h4", { className: "text-lg font-medium text-gray-600 mb-2", children: t }),
    /* @__PURE__ */ u("p", { className: "text-gray-500 mb-4", children: r }),
    n && /* @__PURE__ */ q("button", { className: "btn-fluid", onClick: n.onClick, children: [
      n.icon || /* @__PURE__ */ u(Hs, { size: 16 }),
      n.label
    ] })
  ] });
}
function vc({ data: e, renderItem: t, renderExpandedContent: r }) {
  const [n, o] = le({}), s = (a) => {
    o((l) => ({
      ...l,
      [a]: !l[a]
    }));
  };
  return !e || e.length === 0 ? /* @__PURE__ */ u("p", { className: "text-center text-gray-500", children: "Aucune donnée à afficher." }) : /* @__PURE__ */ u("div", { className: "space-y-2", children: e.map((a) => /* @__PURE__ */ q(
    "div",
    {
      className: "glass-card-border overflow-hidden rounded-lg",
      children: [
        /* @__PURE__ */ q(
          "div",
          {
            className: "flex items-center justify-between p-4 cursor-pointer hover:bg-base-200/50",
            onClick: () => s(a.id),
            children: [
              /* @__PURE__ */ u("div", { className: "flex-grow", children: t(a) }),
              /* @__PURE__ */ u("div", { className: "ml-4", children: n[a.id] ? /* @__PURE__ */ u(so, { size: 20, className: "text-gray-500" }) : /* @__PURE__ */ u(Qe, { size: 20, className: "text-gray-500" }) })
            ]
          }
        ),
        n[a.id] && /* @__PURE__ */ u("div", { className: "px-4 pt-2 pb-4 bg-base-200/30 border-t border-base-300/50", children: r(a) })
      ]
    },
    a.id
  )) });
}
function xc({ onFileSelect: e, label: t, acceptedTypes: r }) {
  return /* @__PURE__ */ q("div", { className: "border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-accent-500 transition-colors", children: [
    /* @__PURE__ */ u(io, { size: 48, className: "mx-auto text-gray-400 mb-4" }),
    /* @__PURE__ */ u("p", { className: "text-gray-600 mb-2", children: t || "Glissez-déposez vos fichiers ici ou" }),
    /* @__PURE__ */ q("label", { className: "btn-fluid cursor-pointer", children: [
      "Parcourir les fichiers",
      /* @__PURE__ */ u("input", { type: "file", className: "hidden", onChange: (o) => {
        const s = o.target.files[0];
        s && e && e(s);
      } })
    ] }),
    r && /* @__PURE__ */ u("p", { className: "text-xs text-gray-500 mt-2", children: r })
  ] });
}
const Bi = ({ title: e, links: t }) => /* @__PURE__ */ q("div", { children: [
  /* @__PURE__ */ u("h4", { className: "font-semibold text-base-content mb-4", children: e }),
  /* @__PURE__ */ u("ul", { className: "space-y-2", children: t.map((r) => /* @__PURE__ */ u("li", { children: /* @__PURE__ */ u(_o, { href: r.href, className: "text-sm text-base-content/80 hover:text-primary transition-colors", children: r.text }) }, r.href + r.text)) })
] });
function wc({ sections: e, socialLinks: t, copyrightText: r }) {
  return !e || !t || !r ? null : /* @__PURE__ */ u("footer", { className: "glass-surface p-8 rounded-lg w-full", children: /* @__PURE__ */ q("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ u("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8", children: e.map((n) => /* @__PURE__ */ u(Bi, { title: n.title, links: n.links }, n.title)) }),
    /* @__PURE__ */ q("div", { className: "mt-8 pt-8 border-t border-base-300/50 flex flex-col sm:flex-row justify-between items-center", children: [
      /* @__PURE__ */ u("p", { className: "text-sm text-base-content/70", children: r }),
      /* @__PURE__ */ u("div", { className: "flex items-center gap-2 mt-4 sm:mt-0", children: t.map((n) => /* @__PURE__ */ u(De, { asChild: !0, "aria-label": n.label, variant: "ghost", children: /* @__PURE__ */ u("a", { href: n.href, target: "_blank", rel: "noopener noreferrer", children: n.icon }) }, n.label)) })
    ] })
  ] }) });
}
const Fn = ({
  children: e,
  variant: t = "standard",
  className: r = ""
}) => {
  const n = {
    standard: {
      icon: /* @__PURE__ */ u(St, { size: 12 }),
      color: "text-gray-500"
    },
    error: {
      icon: /* @__PURE__ */ u(Xe, { size: 12 }),
      color: "text-red-500"
    },
    success: {
      icon: /* @__PURE__ */ u(Mr, { size: 12 }),
      color: "text-green-500"
    }
  }, o = n[t] || n.standard;
  return /* @__PURE__ */ q("p", { className: `text-sm flex items-center gap-1 mt-1 ${o.color} ${r}`, children: [
    o.icon,
    e
  ] });
}, Lo = pe.forwardRef(
  ({ label: e, name: t, startIcon: r, endIcon: n, className: o, error: s, helperText: a, ...l }, i) => {
    const p = [
      "input-fluid",
      r ? "pl-10" : "",
      n ? "pr-10" : "",
      s ? "border-red-500" : "",
      o
    ].join(" ").trim();
    return /* @__PURE__ */ q("div", { children: [
      e && /* @__PURE__ */ u("label", { htmlFor: t, className: "block text-sm font-medium mb-2", children: e }),
      /* @__PURE__ */ q("div", { className: "relative", children: [
        r && /* @__PURE__ */ u("div", { className: "absolute left-3 top-1/2 transform -translate-y-1/2", style: { color: "var(--fg-icon-primary)" }, children: pe.cloneElement(r, { size: 16 }) }),
        /* @__PURE__ */ u("input", { ref: i, id: t, name: t, className: p, ...l }),
        n && /* @__PURE__ */ u("div", { className: "absolute right-3 top-1/2 transform -translate-y-1/2", children: n })
      ] }),
      s && /* @__PURE__ */ u(Fn, { variant: "error", children: s }),
      a && !s && /* @__PURE__ */ u(Fn, { variant: "info", children: a })
    ] });
  }
);
Lo.displayName = "Input";
function Gi({
  currentPage: e,
  totalPages: t,
  onPageChange: r,
  totalResults: n,
  resultsPerPage: o = 10
}) {
  const s = (e - 1) * o + 1, a = Math.min(e * o, n), l = (p) => {
    p >= 1 && p <= t && r(p);
  };
  return /* @__PURE__ */ q("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ q("p", { className: "text-sm text-gray-600", children: [
      "Affichage ",
      s,
      " à ",
      a,
      " sur ",
      n,
      " résultats"
    ] }),
    /* @__PURE__ */ q("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ u(
        "button",
        {
          onClick: () => l(e - 1),
          disabled: e === 1,
          className: "p-2 rounded-lg hover:bg-glass-light transition-colors disabled:opacity-50",
          children: /* @__PURE__ */ u(ms, { size: 16 })
        }
      ),
      (() => {
        var d;
        const p = [];
        for (let b = 1; b <= t; b++)
          b === 1 || b === t || b >= e - 1 && b <= e + 1 ? p.push(
            /* @__PURE__ */ u(
              "button",
              {
                onClick: () => l(b),
                className: `px-3 py-1 rounded-lg text-sm transition-colors ${e === b ? "bg-accent-500 text-white" : "hover:bg-glass-light"}`,
                children: b
              },
              b
            )
          ) : ((d = p[p.length - 1]) == null ? void 0 : d.key) !== "..." && p.push(/* @__PURE__ */ u("span", { className: "px-3 py-1", children: "..." }, "..."));
        return p;
      })(),
      /* @__PURE__ */ u(
        "button",
        {
          onClick: () => l(e + 1),
          disabled: e === t,
          className: "p-2 rounded-lg hover:bg-glass-light transition-colors disabled:opacity-50",
          children: /* @__PURE__ */ u(Ir, { size: 16 })
        }
      )
    ] })
  ] });
}
const Fi = ({
  label: e,
  options: t = [],
  value: r,
  onChange: n,
  placeholder: o = "Sélectionner...",
  disabled: s = !1,
  // Nouvelles props pour les fonctionnalités avancées
  searchable: a = !1,
  sortable: l = !1,
  sortOrder: i = "asc",
  // 'asc' | 'desc'
  onSortChange: p,
  loadOptions: d,
  // Fonction pour le chargement dynamique: (searchTerm, page) => Promise<options[]> | null
  searchPlaceholder: b = "Rechercher...",
  maxHeight: v = 240,
  error: c,
  helperText: f
}) => {
  const [g, h] = le(!1), [E, S] = le(""), [m, y] = le(t), [A, N] = le(!1), [R, w] = le(!0), [$, _] = le(1), T = Pe(null), x = Pe(null), k = Pe(null), C = Pe(null);
  Se(() => {
    d || y(t || []);
  }, [t, d]), Se(() => {
    d && (async () => {
      N(!0);
      try {
        const F = await d("", 1);
        F && F.length > 0 ? (y(F), w(F.length > 0), _(1)) : (y([]), w(!1));
      } catch (F) {
        console.error("Erreur lors du chargement initial:", F), y([]), w(!1);
      } finally {
        N(!1);
      }
    })();
  }, [d]);
  const L = () => {
    s || (h(!g), !g && a && setTimeout(() => {
      var X;
      (X = x.current) == null || X.focus();
    }, 100));
  }, O = (X) => {
    n(X), h(!1), S("");
  }, M = (X) => {
    T.current && !T.current.contains(X.target) && (h(!1), S(""));
  }, P = Le(async (X) => {
    if (d) {
      N(!0), _(1);
      try {
        const F = await d(X, 1);
        F === null ? (y([]), w(!1)) : (y(F), w(F.length > 0));
      } catch (F) {
        console.error("Erreur lors de la recherche:", F), y([]), w(!1);
      } finally {
        N(!1);
      }
    }
  }, [d]), D = () => {
    l && p && p(i === "asc" ? "desc" : "asc");
  }, z = Ke(() => !a || d || !E ? m : m.filter(
    (X) => X.label.toLowerCase().includes(E.toLowerCase())
  ), [m, E, a]), Q = Ke(() => !l || p ? z : [...z].sort((X, F) => {
    const j = X.label.localeCompare(F.label);
    return i === "asc" ? j : -j;
  }), [z, l, i, p]), W = Le(async () => {
    if (!(!R || !d)) {
      N(!0);
      try {
        const X = $ + 1, F = await d(E, X);
        F === null || F.length === 0 ? w(!1) : (y((j) => [...j, ...F]), _(X));
      } catch (X) {
        console.error("Erreur lors du chargement:", X), w(!1);
      } finally {
        N(!1);
      }
    }
  }, [R, d, $, E]), K = Pe(W);
  K.current = W;
  const B = Le((X) => {
    A || (C.current && C.current.disconnect(), C.current = new IntersectionObserver((F) => {
      F[0].isIntersecting && R && d && K.current();
    }), X && C.current.observe(X));
  }, [A, R, d]);
  Se(() => (document.addEventListener("mousedown", M), () => {
    document.removeEventListener("mousedown", M), C.current && C.current.disconnect();
  }), []);
  const re = m.find((X) => X.value === r);
  return /* @__PURE__ */ q("div", { className: "relative w-full", ref: T, children: [
    e && /* @__PURE__ */ u("label", { className: "block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300", children: e }),
    /* @__PURE__ */ q("div", { className: "relative", children: [
      /* @__PURE__ */ q(
        "button",
        {
          type: "button",
          className: `input-fluid w-full text-left flex items-center justify-between ${s ? "bg-gray-100 dark:bg-gray-800 cursor-not-allowed" : ""} ${c ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}`,
          onClick: L,
          disabled: s,
          "aria-haspopup": "listbox",
          "aria-expanded": g,
          children: [
            /* @__PURE__ */ u("span", { className: re ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400", children: re ? re.label : o }),
            /* @__PURE__ */ u(Qe, { size: 16, className: `transition-transform ${g ? "rotate-180" : ""}` })
          ]
        }
      ),
      g && /* @__PURE__ */ q("div", { className: "absolute top-full left-0 right-0 mt-1 glass-surface rounded-lg shadow-lg z-50 overflow-hidden", children: [
        (a || l) && /* @__PURE__ */ u("div", { className: "p-2 border-b border-gray-200 dark:border-gray-700", children: /* @__PURE__ */ q("div", { className: "flex gap-2", children: [
          a && /* @__PURE__ */ q("div", { className: "flex-1 relative", children: [
            /* @__PURE__ */ u(At, { size: 16, className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" }),
            /* @__PURE__ */ u(
              "input",
              {
                ref: x,
                type: "text",
                value: E,
                onChange: (X) => {
                  S(X.target.value), P(X.target.value);
                },
                placeholder: b,
                className: "w-full pl-9 pr-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              }
            )
          ] }),
          l && /* @__PURE__ */ q(
            "button",
            {
              type: "button",
              onClick: D,
              className: "px-3 py-2 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition-colors flex items-center gap-1",
              title: `Trier par ordre ${i === "asc" ? "décroissant" : "croissant"}`,
              children: [
                /* @__PURE__ */ u(cs, { size: 14 }),
                i === "asc" ? "A-Z" : "Z-A"
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ q(
          "div",
          {
            ref: k,
            className: "py-1 overflow-y-auto",
            style: { maxHeight: `${v}px` },
            children: [
              A && Q.length === 0 ? /* @__PURE__ */ q("div", { className: "flex items-center justify-center py-4", children: [
                /* @__PURE__ */ u(vr, { size: 16, className: "animate-spin mr-2" }),
                /* @__PURE__ */ u("span", { className: "text-sm text-gray-500", children: "Chargement..." })
              ] }) : Q.length === 0 ? /* @__PURE__ */ u("div", { className: "px-4 py-3 text-sm text-gray-500 text-center", children: E ? "Aucun résultat trouvé" : "Aucune option disponible" }) : Q.map((X, F) => {
                const j = F === Q.length - 1;
                return /* @__PURE__ */ u(
                  "button",
                  {
                    ref: j && R && d ? B : null,
                    type: "button",
                    className: "w-full text-left px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-glass-light dark:hover:bg-glass-dark-light transition-colors focus:outline-none focus:bg-glass-light dark:focus:bg-glass-dark-light",
                    onClick: () => O(X.value),
                    role: "option",
                    "aria-selected": r === X.value,
                    children: X.label
                  },
                  X.value
                );
              }),
              A && R && d && /* @__PURE__ */ q("div", { className: "flex items-center justify-center py-2", children: [
                /* @__PURE__ */ u(vr, { size: 14, className: "animate-spin mr-2" }),
                /* @__PURE__ */ u("span", { className: "text-xs text-gray-500", children: "Chargement..." })
              ] })
            ]
          }
        )
      ] })
    ] }),
    (c || f) && /* @__PURE__ */ u("p", { className: `mt-1 text-sm ${c ? "text-red-600 dark:text-red-400" : "text-gray-500 dark:text-gray-400"}`, children: c || f })
  ] });
};
function _c({
  data: e = [],
  columns: t = [],
  actions: r = [],
  title: n = "Table Interactive",
  itemsPerPage: o = 5,
  selectable: s = !0,
  onRowSelect: a,
  onRowClick: l,
  customFilters: i = null,
  filterConfig: p = [],
  onFilterChange: d
}) {
  const [b, v] = le(""), [c, f] = le("asc"), [g, h] = le(""), [E, S] = le([]), [m, y] = le(1), [A, N] = le(e), [R, w] = le({});
  Ke(() => {
    N(e);
  }, [e]);
  const $ = (M) => {
    const P = b === M && c === "asc" ? "desc" : "asc";
    v(M), f(P), N(
      (D) => [...D].sort((z, Q) => z[M] < Q[M] ? P === "asc" ? -1 : 1 : z[M] > Q[M] ? P === "asc" ? 1 : -1 : 0)
    );
  }, _ = (M) => {
    const P = E.includes(M) ? E.filter((D) => D !== M) : [...E, M];
    if (S(P), a) {
      const D = A.filter(
        (z) => P.includes(z.id)
      );
      a(D);
    }
  }, T = (M) => {
    const P = M.target.checked ? O.map((D) => D.id) : [];
    if (S(P), a) {
      const D = A.filter(
        (z) => P.includes(z.id)
      );
      a(D);
    }
  }, x = (M) => {
    y(M);
  }, k = (M, P) => {
    const D = { ...R, [M]: P };
    w(D), d && d(D);
  }, C = Ke(() => {
    let M = A;
    if (g) {
      const P = t.filter((D) => D.searchable).map((D) => D.field);
      M = M.filter((D) => P.some(
        (z) => String(D[z]).toLowerCase().includes(g.toLowerCase())
      ));
    }
    return Object.entries(R).forEach(([P, D]) => {
      D != null && D !== "" && (M = M.filter((z) => Array.isArray(D) ? D.length === 0 || D.includes(z[P]) : z[P] === D));
    }), M;
  }, [A, g, t, R]), L = Math.ceil(C.length / o), O = Ke(() => {
    const M = (m - 1) * o;
    return C.slice(M, M + o);
  }, [C, m, o]);
  return /* @__PURE__ */ q("section", { className: "glass-card", children: [
    n && /* @__PURE__ */ u("h3", { className: "text-xl font-semibold mb-6", children: n }),
    /* @__PURE__ */ u("div", { className: "mb-6", children: /* @__PURE__ */ q("div", { className: "flex flex-col md:flex-row gap-4 mb-4 items-end", children: [
      /* @__PURE__ */ u("div", { className: "flex-1", children: /* @__PURE__ */ u(
        Lo,
        {
          type: "text",
          placeholder: "Rechercher...",
          value: g,
          onChange: (M) => h(M.target.value),
          startIcon: /* @__PURE__ */ u(At, { size: 20 })
        }
      ) }),
      p && p.length > 0 && /* @__PURE__ */ u("div", { className: "flex flex-wrap gap-2 items-center", children: p.map((M) => /* @__PURE__ */ u("div", { className: "min-w-[150px]", children: /* @__PURE__ */ u(
        Fi,
        {
          label: M.label,
          options: M.options,
          value: R[M.field] || "",
          onChange: (P) => k(M.field, P),
          placeholder: M.placeholder || `Sélectionner ${M.label}`
        }
      ) }, M.field)) }),
      i && /* @__PURE__ */ u("div", { className: "flex items-center", children: i })
    ] }) }),
    /* @__PURE__ */ u("div", { className: "overflow-x-auto", children: /* @__PURE__ */ q("table", { className: "w-full", children: [
      /* @__PURE__ */ u("thead", { children: /* @__PURE__ */ q("tr", { className: "border-b border-gray-200", children: [
        s && /* @__PURE__ */ u("th", { className: "text-left p-3 w-10", children: /* @__PURE__ */ u(
          Bn,
          {
            checked: O.length > 0 && O.every(
              (M) => E.includes(M.id)
            ),
            onChange: T
          }
        ) }),
        t.map((M) => /* @__PURE__ */ u(
          "th",
          {
            className: `text-left p-3 ${M.sortable ? "cursor-pointer hover:bg-gray-50" : ""}`,
            onClick: () => M.sortable && $(M.field),
            children: /* @__PURE__ */ q("div", { className: "flex items-center gap-2", children: [
              M.header,
              M.sortable && b === M.field && (c === "asc" ? /* @__PURE__ */ u(so, { size: 16 }) : /* @__PURE__ */ u(Qe, { size: 16 }))
            ] })
          },
          M.field
        )),
        r && r.length > 0 && /* @__PURE__ */ u("th", { className: "text-right p-3", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ u("tbody", { children: O.length === 0 ? /* @__PURE__ */ u("tr", { children: /* @__PURE__ */ u(
        "td",
        {
          colSpan: s ? t.length + (r.length > 0 ? 2 : 1) : t.length + (r.length > 0 ? 1 : 0),
          className: "p-6 text-center text-gray-500",
          children: "Aucune donnée disponible"
        }
      ) }) : O.map((M) => /* @__PURE__ */ q(
        "tr",
        {
          className: `border-b border-gray-100 hover:bg-gray-50 ${l ? "cursor-pointer" : ""}`,
          onClick: () => l && l(M),
          children: [
            s && /* @__PURE__ */ u("td", { className: "p-3", onClick: (P) => P.stopPropagation(), children: /* @__PURE__ */ u(
              Bn,
              {
                checked: E.includes(M.id),
                onChange: () => _(M.id)
              }
            ) }),
            t.map((P) => /* @__PURE__ */ u("td", { className: "p-3", children: P.renderCell ? P.renderCell(M) : /* @__PURE__ */ u("span", { className: "text-gray-600", children: M[P.field] }) }, `${M.id}-${P.field}`)),
            r && r.length > 0 && /* @__PURE__ */ u(
              "td",
              {
                className: "p-3 text-right",
                onClick: (P) => P.stopPropagation(),
                children: /* @__PURE__ */ u("div", { className: "flex justify-end gap-1", children: r.map((P, D) => /* @__PURE__ */ u(
                  De,
                  {
                    onClick: () => P.onClick(M),
                    title: P.label,
                    children: P.icon
                  },
                  D
                )) })
              }
            )
          ]
        },
        M.id
      )) })
    ] }) }),
    E.length > 0 && /* @__PURE__ */ u("div", { className: "mt-4 p-3 bg-blue-50 rounded-lg", children: /* @__PURE__ */ q("p", { className: "text-sm text-blue-700", children: [
      E.length,
      " élément",
      E.length > 1 ? "s" : "",
      " ",
      "sélectionné",
      E.length > 1 ? "s" : ""
    ] }) }),
    C.length > o && /* @__PURE__ */ u("div", { className: "mt-6", children: /* @__PURE__ */ u(
      Gi,
      {
        currentPage: m,
        totalPages: L,
        onPageChange: x,
        totalResults: C.length,
        resultsPerPage: o
      }
    ) })
  ] });
}
const Rc = ({
  children: e,
  variant: t = "standard",
  htmlFor: r,
  className: n = ""
}) => {
  const o = {
    standard: "text-foreground",
    required: "text-red-600",
    optional: "text-gray-500"
  }, s = t === "required" ? /* @__PURE__ */ q(to, { children: [
    e,
    " ",
    /* @__PURE__ */ u("span", { className: "text-red-600", children: "*" })
  ] }) : e;
  return /* @__PURE__ */ u(
    "label",
    {
      htmlFor: r,
      className: `block text-sm font-medium mb-1 ${o[t]} ${n}`,
      children: s
    }
  );
}, Vi = ({
  children: e,
  className: t = "",
  variant: r = "default"
  // default, compact, spacious
}) => {
  const n = "flex-shrink-0 flex justify-end gap-3 border-t border-border bg-background", o = {
    default: "pt-4 pb-2 px-4",
    compact: "pt-2 pb-1 px-3",
    spacious: "pt-6 pb-4 px-6"
  }, s = [
    n,
    o[r] || o.default,
    t
  ].filter(Boolean).join(" ").trim();
  return /* @__PURE__ */ u("div", { className: s, children: e });
};
Vi.displayName = "ModalFooter";
const Cc = (e = "80vh") => Ke(() => ({
  // Classes pour le conteneur principal de la modal
  containerClass: "flex flex-col h-full",
  containerStyle: { maxHeight: e },
  // Classes pour le contenu scrollable
  contentClass: "flex-1 overflow-y-auto px-1 space-y-6",
  // Classes pour le footer fixe (si ModalFooter n'est pas utilisé)
  footerClass: "flex-shrink-0 flex justify-end gap-3 pt-4 pb-2 px-4 border-t border-border bg-background",
  // Utilitaires
  isScrollable: !0,
  hasFixedFooter: !0
}), [e]);
function Nc({ type: e = "info", message: t, timestamp: r, onClose: n }) {
  const o = {
    info: /* @__PURE__ */ u(St, { size: 20, className: "text-blue-500 mt-0.5" }),
    success: /* @__PURE__ */ u($r, { size: 20, className: "text-green-500 mt-0.5" }),
    warning: /* @__PURE__ */ u(Xe, { size: 20, className: "text-yellow-500 mt-0.5" }),
    error: /* @__PURE__ */ u(Oe, { size: 20, className: "text-red-500 mt-0.5" })
  };
  return /* @__PURE__ */ u("div", { className: `max-w-sm w-full p-4 rounded-lg shadow-lg ${{
    info: "bg-blue-50 border border-blue-200",
    success: "bg-green-50 border border-green-200",
    warning: "bg-yellow-50 border border-yellow-200",
    error: "bg-red-50 border border-red-200"
  }[e]}`, children: /* @__PURE__ */ q("div", { className: "flex items-start gap-3", children: [
    o[e],
    /* @__PURE__ */ q("div", { className: "flex-1", children: [
      /* @__PURE__ */ u("p", { className: "text-sm font-medium", children: t }),
      r && /* @__PURE__ */ u("p", { className: "text-xs text-gray-500 mt-1", children: new Date(r).toLocaleTimeString() })
    ] }),
    /* @__PURE__ */ u("button", { onClick: n, className: "text-gray-400 hover:text-gray-600", children: /* @__PURE__ */ u(Oe, { size: 16 }) })
  ] }) });
}
function Ec({ value: e, label: t, showPercentage: r = !0 }) {
  const n = Math.max(0, Math.min(100, e));
  return /* @__PURE__ */ q("div", { children: [
    /* @__PURE__ */ q("div", { className: "flex justify-between mb-2", children: [
      t && /* @__PURE__ */ u("span", { className: "text-sm font-medium", children: t }),
      r && /* @__PURE__ */ q("span", { className: "text-sm text-gray-500", children: [
        n,
        "%"
      ] })
    ] }),
    /* @__PURE__ */ u(
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
function Ac({ options: e, name: t, selectedValue: r, onChange: n }) {
  return /* @__PURE__ */ u("div", { className: "space-y-3", children: e.map((o) => /* @__PURE__ */ q("label", { className: "flex items-center space-x-3 cursor-pointer", children: [
    /* @__PURE__ */ q("div", { className: "relative", children: [
      /* @__PURE__ */ u(
        "input",
        {
          type: "radio",
          name: t,
          value: o.value,
          checked: r === o.value,
          onChange: (s) => n(s.target.value),
          className: "sr-only"
        }
      ),
      /* @__PURE__ */ u(
        "div",
        {
          className: `w-5 h-5 rounded-full border-2 glass-surface flex items-center justify-center transition-colors ${r === o.value ? "bg-accent-500 border-accent-500" : "border-gray-300"}`,
          children: r === o.value && /* @__PURE__ */ u("div", { className: "w-2 h-2 bg-white rounded-full" })
        }
      )
    ] }),
    /* @__PURE__ */ u("span", { className: "text-sm", children: o.label })
  ] }, o.value)) });
}
const kc = ({ title: e, children: t, variant: r = "default", className: n = "" }) => {
  const o = "glass-surface rounded-lg", s = {
    default: "p-6",
    highlighted: "p-8 border-2 border-accent-500",
    gradient: "p-4 bg-gradient-to-r from-blue-50 to-purple-50"
  }, a = [
    o,
    s[r] || s.default,
    n
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ q("div", { className: a, children: [
    e && /* @__PURE__ */ u("h4", { className: "font-medium mb-2", children: e }),
    /* @__PURE__ */ u("p", { className: "text-sm text-gray-600", children: t })
  ] });
};
function zo({
  item: e,
  isActive: t,
  isCollapsed: r = !1,
  onClick: n,
  level: o = 0,
  activePath: s = [],
  wrapper: a
}) {
  const [l, i] = le(() => {
    const c = e.resource || e.id;
    return s.includes(c);
  }), p = e.children && e.children.length > 0, d = e.icon, b = e.name || e.label;
  e.resource || e.id;
  const v = Le((c) => {
    p && (c.preventDefault(), i(!l)), n && n(e);
  }, [p, l, e, n]);
  return /* @__PURE__ */ q("div", { className: "w-full", children: [
    /* @__PURE__ */ q(
      "button",
      {
        onClick: v,
        className: `nav-item w-full text-left ${p ? "justify-between" : ""}`,
        children: [
          /* @__PURE__ */ q("div", { className: "flex items-center gap-2", children: [
            d && /* @__PURE__ */ u("div", { className: "flex h-6 w-6 items-center justify-center", children: /* @__PURE__ */ u(d, { size: 16 }) }),
            r ? "" : b
          ] }),
          p && /* @__PURE__ */ u(
            Ir,
            {
              size: 16,
              className: `transform transition-transform ${l ? "rotate-90" : ""}`
            }
          )
        ]
      }
    ),
    p && l && !r && /* @__PURE__ */ u("div", { className: "ml-4 mt-1 space-y-1 border-l pl-2 border-primary-100 dark:border-primary-800", children: e.children.map((c) => {
      const f = c.id, g = /* @__PURE__ */ u(
        zo,
        {
          item: c,
          isActive: s.includes(f),
          isCollapsed: r,
          onClick: n,
          level: o + 1,
          activePath: s,
          wrapper: a
        },
        f
      );
      if (a) {
        const h = a(g, c);
        return h && h.key !== void 0 && h.key !== null ? h : /* @__PURE__ */ u("div", { children: h }, f);
      } else
        return g;
    }) })
  ] });
}
function Sc({
  items: e = [],
  isCollapsed: t = !1,
  onNavigate: r,
  activePath: n = [],
  className: o = "",
  wrapper: s
}) {
  const a = Le((i) => {
    r && r(i);
  }, [r]), l = (i) => {
    const p = i.resource || i.id, d = /* @__PURE__ */ u(
      zo,
      {
        item: i,
        isActive: n.includes(p),
        isCollapsed: t,
        onClick: a,
        activePath: n,
        wrapper: s
      },
      p
    );
    return s ? s(d, i) : d;
  };
  return /* @__PURE__ */ u("nav", { className: `space-y-1 ${o}`, children: e.map((i) => {
    const p = i.resource || i.id;
    return /* @__PURE__ */ u("div", { children: l(i) }, p);
  }) });
}
function Pc({ className: e, ...t }) {
  const n = ["animate-pulse rounded-md bg-gray-300 dark:bg-gray-700", e].filter(Boolean).join(" ");
  return /* @__PURE__ */ u(
    "div",
    {
      className: n,
      ...t
    }
  );
}
function Tc({ message: e, time: t, onDismiss: r }) {
  return /* @__PURE__ */ q("div", { className: "flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg", children: [
    /* @__PURE__ */ q("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ u(oo, { size: 16, className: "text-blue-600" }),
      /* @__PURE__ */ q("div", { children: [
        /* @__PURE__ */ u("p", { className: "text-sm font-medium", children: e }),
        t && /* @__PURE__ */ q("p", { className: "text-xs text-gray-500", children: [
          "il y a ",
          t
        ] })
      ] })
    ] }),
    /* @__PURE__ */ u(
      "button",
      {
        onClick: r,
        className: "p-1 hover:bg-blue-100 rounded",
        children: /* @__PURE__ */ u(Oe, { size: 16 })
      }
    )
  ] });
}
const Vn = {
  sm: "h-4 w-4",
  md: "h-8 w-8",
  lg: "h-12 w-12"
}, Wn = {
  sm: "h-1.5 w-1.5",
  md: "h-2 w-2",
  lg: "h-3 w-3"
};
function Oc({ type: e = "spin", size: t = "md" }) {
  if (e === "dots") {
    const n = Wn[t] || Wn.md;
    return /* @__PURE__ */ q("div", { className: "flex space-x-1", children: [
      /* @__PURE__ */ u("div", { className: `${n} bg-accent-500 rounded-full animate-bounce` }),
      /* @__PURE__ */ u(
        "div",
        {
          className: `${n} bg-accent-500 rounded-full animate-bounce`,
          style: { animationDelay: "0.1s" }
        }
      ),
      /* @__PURE__ */ u(
        "div",
        {
          className: `${n} bg-accent-500 rounded-full animate-bounce`,
          style: { animationDelay: "0.2s" }
        }
      )
    ] });
  }
  const r = Vn[t] || Vn.md;
  return e === "pulse" ? /* @__PURE__ */ u("div", { className: `animate-pulse ${r} bg-accent-500 rounded-full` }) : /* @__PURE__ */ u(
    "div",
    {
      className: `animate-spin rounded-full ${r} border-4 border-accent-500 border-t-transparent`
    }
  );
}
const Mc = ({
  direction: e = "vertical",
  spacing: t = 4,
  children: r,
  className: n = "",
  as: o = "div",
  ...s
}) => {
  const a = "flex", l = e === "vertical" ? "flex-col" : "flex-row", i = `gap-${t}`, p = [
    a,
    l,
    i,
    n
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ u(o, { className: p, ...s, children: r });
};
function Ic({ title: e, value: t, change: r, trend: n }) {
  return /* @__PURE__ */ q("div", { className: "glass-surface p-4 rounded-lg", children: [
    /* @__PURE__ */ q("div", { className: "flex items-center justify-between mb-2", children: [
      /* @__PURE__ */ u("h4", { className: "text-sm font-medium text-gray-600", children: e }),
      n === "up" ? /* @__PURE__ */ u(Xs, { size: 16, className: "text-green-500" }) : /* @__PURE__ */ u(Ws, { size: 16, className: "text-red-500" })
    ] }),
    /* @__PURE__ */ u("p", { className: "text-2xl font-bold mb-1", children: t }),
    /* @__PURE__ */ q(
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
function $c({ steps: e, currentStep: t }) {
  return /* @__PURE__ */ u("div", { className: "flex items-center mb-6", children: e.map((r, n) => /* @__PURE__ */ q("div", { className: "flex items-center", children: [
    /* @__PURE__ */ u(
      "div",
      {
        className: `flex items-center justify-center w-8 h-8 rounded-full border-2 ${t >= r.id ? "bg-accent-500 border-accent-500 text-white" : "border-gray-300 text-gray-400"}`,
        children: t > r.id ? /* @__PURE__ */ u(Mr, { size: 16 }) : r.id
      }
    ),
    /* @__PURE__ */ q("div", { className: "ml-2 mr-4", children: [
      /* @__PURE__ */ u("div", { className: "text-sm font-medium", children: r.title }),
      /* @__PURE__ */ u("div", { className: "text-xs text-gray-500", children: r.description })
    ] }),
    n < e.length - 1 && /* @__PURE__ */ u(
      "div",
      {
        className: `w-16 h-0.5 ${t > r.id ? "bg-accent-500" : "bg-gray-300"}`
      }
    )
  ] }, r.id)) });
}
var Kn = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, ke = (e) => !e || typeof e != "object" || Object.keys(e).length === 0, Wi = (e, t) => JSON.stringify(e) === JSON.stringify(t);
function jo(e, t) {
  e.forEach(function(r) {
    Array.isArray(r) ? jo(r, t) : t.push(r);
  });
}
function Ho(e) {
  let t = [];
  return jo(e, t), t;
}
var Do = (...e) => Ho(e).filter(Boolean), qo = (e, t) => {
  let r = {}, n = Object.keys(e), o = Object.keys(t);
  for (let s of n) if (o.includes(s)) {
    let a = e[s], l = t[s];
    Array.isArray(a) || Array.isArray(l) ? r[s] = Do(l, a) : typeof a == "object" && typeof l == "object" ? r[s] = qo(a, l) : r[s] = l + " " + a;
  } else r[s] = e[s];
  for (let s of o) n.includes(s) || (r[s] = t[s]);
  return r;
}, Xn = (e) => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim();
const Dr = "-", Ki = (e) => {
  const t = Qi(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (a) => {
      const l = a.split(Dr);
      return l[0] === "" && l.length !== 1 && l.shift(), Uo(l, t) || Xi(a);
    },
    getConflictingClassGroupIds: (a, l) => {
      const i = r[a] || [];
      return l && n[a] ? [...i, ...n[a]] : i;
    }
  };
}, Uo = (e, t) => {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), o = n ? Uo(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const s = e.join(Dr);
  return (a = t.validators.find(({
    validator: l
  }) => l(s))) == null ? void 0 : a.classGroupId;
}, Qn = /^\[(.+)\]$/, Xi = (e) => {
  if (Qn.test(e)) {
    const t = Qn.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, Qi = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in r)
    Er(r[o], n, o, t);
  return n;
}, Er = (e, t, r, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : Zn(t, o);
      s.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (Zi(o)) {
        Er(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([s, a]) => {
      Er(a, Zn(t, s), r, n);
    });
  });
}, Zn = (e, t) => {
  let r = e;
  return t.split(Dr).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, Zi = (e) => e.isThemeGetter, Yi = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const o = (s, a) => {
    r.set(s, a), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let a = r.get(s);
      if (a !== void 0)
        return a;
      if ((a = n.get(s)) !== void 0)
        return o(s, a), a;
    },
    set(s, a) {
      r.has(s) ? r.set(s, a) : o(s, a);
    }
  };
}, Ar = "!", kr = ":", Ji = kr.length, el = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let n = (o) => {
    const s = [];
    let a = 0, l = 0, i = 0, p;
    for (let f = 0; f < o.length; f++) {
      let g = o[f];
      if (a === 0 && l === 0) {
        if (g === kr) {
          s.push(o.slice(i, f)), i = f + Ji;
          continue;
        }
        if (g === "/") {
          p = f;
          continue;
        }
      }
      g === "[" ? a++ : g === "]" ? a-- : g === "(" ? l++ : g === ")" && l--;
    }
    const d = s.length === 0 ? o : o.substring(i), b = tl(d), v = b !== d, c = p && p > i ? p - i : void 0;
    return {
      modifiers: s,
      hasImportantModifier: v,
      baseClassName: b,
      maybePostfixModifierPosition: c
    };
  };
  if (t) {
    const o = t + kr, s = n;
    n = (a) => a.startsWith(o) ? s(a.substring(o.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: a,
      maybePostfixModifierPosition: void 0
    };
  }
  if (r) {
    const o = n;
    n = (s) => r({
      className: s,
      parseClassName: o
    });
  }
  return n;
}, tl = (e) => e.endsWith(Ar) ? e.substring(0, e.length - 1) : e.startsWith(Ar) ? e.substring(1) : e, rl = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((n) => [n, !0]));
  return (n) => {
    if (n.length <= 1)
      return n;
    const o = [];
    let s = [];
    return n.forEach((a) => {
      a[0] === "[" || t[a] ? (o.push(...s.sort(), a), s = []) : s.push(a);
    }), o.push(...s.sort()), o;
  };
}, nl = (e) => ({
  cache: Yi(e.cacheSize),
  parseClassName: el(e),
  sortModifiers: rl(e),
  ...Ki(e)
}), ol = /\s+/, sl = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o,
    sortModifiers: s
  } = t, a = [], l = e.trim().split(ol);
  let i = "";
  for (let p = l.length - 1; p >= 0; p -= 1) {
    const d = l[p], {
      isExternal: b,
      modifiers: v,
      hasImportantModifier: c,
      baseClassName: f,
      maybePostfixModifierPosition: g
    } = r(d);
    if (b) {
      i = d + (i.length > 0 ? " " + i : i);
      continue;
    }
    let h = !!g, E = n(h ? f.substring(0, g) : f);
    if (!E) {
      if (!h) {
        i = d + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (E = n(f), !E) {
        i = d + (i.length > 0 ? " " + i : i);
        continue;
      }
      h = !1;
    }
    const S = s(v).join(":"), m = c ? S + Ar : S, y = m + E;
    if (a.includes(y))
      continue;
    a.push(y);
    const A = o(E, h);
    for (let N = 0; N < A.length; ++N) {
      const R = A[N];
      a.push(m + R);
    }
    i = d + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function al() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Bo(t)) && (n && (n += " "), n += r);
  return n;
}
const Bo = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Bo(e[n])) && (r && (r += " "), r += t);
  return r;
};
function Sr(e, ...t) {
  let r, n, o, s = a;
  function a(i) {
    const p = t.reduce((d, b) => b(d), e());
    return r = nl(p), n = r.cache.get, o = r.cache.set, s = l, l(i);
  }
  function l(i) {
    const p = n(i);
    if (p)
      return p;
    const d = sl(i, r);
    return o(i, d), d;
  }
  return function() {
    return s(al.apply(null, arguments));
  };
}
const Re = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Go = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Fo = /^\((?:(\w[\w-]*):)?(.+)\)$/i, il = /^\d+\/\d+$/, ll = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, cl = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ul = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, dl = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, fl = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, We = (e) => il.test(e), ce = (e) => !!e && !Number.isNaN(Number(e)), Ue = (e) => !!e && Number.isInteger(Number(e)), Yn = (e) => e.endsWith("%") && ce(e.slice(0, -1)), He = (e) => ll.test(e), pl = () => !0, ml = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  cl.test(e) && !ul.test(e)
), qr = () => !1, hl = (e) => dl.test(e), gl = (e) => fl.test(e), bl = (e) => !ee(e) && !te(e), yl = (e) => Je(e, Ko, qr), ee = (e) => Go.test(e), Be = (e) => Je(e, Xo, ml), hr = (e) => Je(e, Sl, ce), vl = (e) => Je(e, Vo, qr), xl = (e) => Je(e, Wo, gl), wl = (e) => Je(e, qr, hl), te = (e) => Fo.test(e), Ct = (e) => et(e, Xo), _l = (e) => et(e, Pl), Rl = (e) => et(e, Vo), Cl = (e) => et(e, Ko), Nl = (e) => et(e, Wo), El = (e) => et(e, Tl, !0), Je = (e, t, r) => {
  const n = Go.exec(e);
  return n ? n[1] ? t(n[1]) : r(n[2]) : !1;
}, et = (e, t, r = !1) => {
  const n = Fo.exec(e);
  return n ? n[1] ? t(n[1]) : r : !1;
}, Vo = (e) => e === "position", Al = /* @__PURE__ */ new Set(["image", "url"]), Wo = (e) => Al.has(e), kl = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Ko = (e) => kl.has(e), Xo = (e) => e === "length", Sl = (e) => e === "number", Pl = (e) => e === "family-name", Tl = (e) => e === "shadow", Pr = () => {
  const e = Re("color"), t = Re("font"), r = Re("text"), n = Re("font-weight"), o = Re("tracking"), s = Re("leading"), a = Re("breakpoint"), l = Re("container"), i = Re("spacing"), p = Re("radius"), d = Re("shadow"), b = Re("inset-shadow"), v = Re("drop-shadow"), c = Re("blur"), f = Re("perspective"), g = Re("aspect"), h = Re("ease"), E = Re("animate"), S = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], m = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], y = () => ["auto", "hidden", "clip", "visible", "scroll"], A = () => ["auto", "contain", "none"], N = () => [te, ee, i], R = () => [We, "full", "auto", ...N()], w = () => [Ue, "none", "subgrid", te, ee], $ = () => ["auto", {
    span: ["full", Ue, te, ee]
  }, te, ee], _ = () => [Ue, "auto", te, ee], T = () => ["auto", "min", "max", "fr", te, ee], x = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline"], k = () => ["start", "end", "center", "stretch"], C = () => ["auto", ...N()], L = () => [We, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...N()], O = () => [e, te, ee], M = () => [Yn, Be], P = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    p,
    te,
    ee
  ], D = () => ["", ce, Ct, Be], z = () => ["solid", "dashed", "dotted", "double"], Q = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], W = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    c,
    te,
    ee
  ], K = () => ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", te, ee], B = () => ["none", ce, te, ee], re = () => ["none", ce, te, ee], X = () => [ce, te, ee], F = () => [We, "full", ...N()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [He],
      breakpoint: [He],
      color: [pl],
      container: [He],
      "drop-shadow": [He],
      ease: ["in", "out", "in-out"],
      font: [bl],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [He],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [He],
      shadow: [He],
      spacing: ["px", ce],
      text: [He],
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
        aspect: ["auto", "square", We, ee, te, g]
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
        columns: [ce, ee, te, l]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": S()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": S()
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
        object: [...m(), ee, te]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: y()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": y()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": y()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: A()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": A()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": A()
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
        z: [Ue, "auto", te, ee]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [We, "full", "auto", l, ...N()]
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
        flex: [ce, We, "auto", "initial", "none", ee]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", ce, te, ee]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", ce, te, ee]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Ue, "first", "last", "none", te, ee]
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
        col: $()
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
        row: $()
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
        "auto-cols": T()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": T()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: N()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": N()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": N()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...x(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...k(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...k()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...x()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...k(), "baseline"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...k(), "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": x()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...k(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...k()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: N()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: N()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: N()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: N()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: N()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: N()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: N()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: N()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: N()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: C()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: C()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: C()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: C()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: C()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: C()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: C()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: C()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: C()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": N()
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
        "space-y": N()
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
        size: L()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [l, "screen", ...L()]
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
          ...L()
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
            screen: [a]
          },
          ...L()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", ...L()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "none", ...L()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", ...L()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, Ct, Be]
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
        font: [n, te, hr]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Yn, ee]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [_l, ee, t]
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
        tracking: [o, te, ee]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [ce, "none", te, hr]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          s,
          ...N()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", te, ee]
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
        list: ["disc", "decimal", "none", te, ee]
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
        placeholder: O()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: O()
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
        decoration: [...z(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [ce, "from-font", "auto", te, Be]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: O()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [ce, "auto", te, ee]
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
        indent: N()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", te, ee]
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
        content: ["none", te, ee]
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
        bg: [...m(), Rl, vl]
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
        bg: ["auto", "cover", "contain", Cl, yl]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Ue, te, ee],
          radial: ["", te, ee],
          conic: [Ue, te, ee]
        }, Nl, xl]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: O()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: M()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: M()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: M()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: O()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: O()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: O()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: P()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": P()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": P()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": P()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": P()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": P()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": P()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": P()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": P()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": P()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": P()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": P()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": P()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": P()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": P()
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
        border: [...z(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...z(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: O()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": O()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": O()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": O()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": O()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": O()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": O()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": O()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": O()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: O()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...z(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ce, te, ee]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", ce, Ct, Be]
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
          d,
          El,
          wl
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: O()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", te, ee, b]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": O()
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
        ring: O()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [ce, Be]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": O()
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
        "inset-ring": O()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [ce, te, ee]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Q(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Q()
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
          te,
          ee
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: W()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [ce, te, ee]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [ce, te, ee]
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
          v,
          te,
          ee
        ]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", ce, te, ee]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [ce, te, ee]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", ce, te, ee]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ce, te, ee]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", ce, te, ee]
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
          te,
          ee
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": W()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [ce, te, ee]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [ce, te, ee]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", ce, te, ee]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [ce, te, ee]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", ce, te, ee]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [ce, te, ee]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ce, te, ee]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", ce, te, ee]
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
        "border-spacing": N()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": N()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": N()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", te, ee]
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
        duration: [ce, "initial", te, ee]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", h, te, ee]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [ce, te, ee]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", E, te, ee]
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
        perspective: [f, te, ee]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": K()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: B()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": B()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": B()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": B()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: re()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": re()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": re()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": re()
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
        skew: X()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": X()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": X()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [te, ee, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: K()
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
        translate: F()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": F()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": F()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": F()
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
        accent: O()
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
        caret: O()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", te, ee]
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
        "scroll-m": N()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": N()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": N()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": N()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": N()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": N()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": N()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": N()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": N()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": N()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": N()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": N()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": N()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": N()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": N()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": N()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": N()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": N()
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
        "will-change": ["auto", "scroll", "contents", "transform", te, ee]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...O()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [ce, Ct, Be, hr]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...O()]
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
}, Ol = (e, {
  cacheSize: t,
  prefix: r,
  experimentalParseClassName: n,
  extend: o = {},
  override: s = {}
}) => (ot(e, "cacheSize", t), ot(e, "prefix", r), ot(e, "experimentalParseClassName", n), Nt(e.theme, s.theme), Nt(e.classGroups, s.classGroups), Nt(e.conflictingClassGroups, s.conflictingClassGroups), Nt(e.conflictingClassGroupModifiers, s.conflictingClassGroupModifiers), ot(e, "orderSensitiveModifiers", s.orderSensitiveModifiers), Et(e.theme, o.theme), Et(e.classGroups, o.classGroups), Et(e.conflictingClassGroups, o.conflictingClassGroups), Et(e.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), Qo(e, o, "orderSensitiveModifiers"), e), ot = (e, t, r) => {
  r !== void 0 && (e[t] = r);
}, Nt = (e, t) => {
  if (t)
    for (const r in t)
      ot(e, r, t[r]);
}, Et = (e, t) => {
  if (t)
    for (const r in t)
      Qo(e, t, r);
}, Qo = (e, t, r) => {
  const n = t[r];
  n !== void 0 && (e[r] = e[r] ? e[r].concat(n) : n);
}, Ml = (e, ...t) => typeof e == "function" ? Sr(Pr, e, ...t) : Sr(() => Ol(Pr(), e), ...t), Il = /* @__PURE__ */ Sr(Pr);
var $l = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, Zo = (e) => e || void 0, at = (...e) => Zo(Ho(e).filter(Boolean).join(" ")), gr = null, Ie = {}, Tr = !1, nt = (...e) => (t) => t.twMerge ? ((!gr || Tr) && (Tr = !1, gr = ke(Ie) ? Il : Ml({ ...Ie, extend: { theme: Ie.theme, classGroups: Ie.classGroups, conflictingClassGroupModifiers: Ie.conflictingClassGroupModifiers, conflictingClassGroups: Ie.conflictingClassGroups, ...Ie.extend } })), Zo(gr(at(e)))) : at(e), Jn = (e, t) => {
  for (let r in t) e.hasOwnProperty(r) ? e[r] = at(e[r], t[r]) : e[r] = t[r];
  return e;
}, tt = (e, t) => {
  let { extend: r = null, slots: n = {}, variants: o = {}, compoundVariants: s = [], compoundSlots: a = [], defaultVariants: l = {} } = e, i = { ...$l, ...t }, p = r != null && r.base ? at(r.base, e == null ? void 0 : e.base) : e == null ? void 0 : e.base, d = r != null && r.variants && !ke(r.variants) ? qo(o, r.variants) : o, b = r != null && r.defaultVariants && !ke(r.defaultVariants) ? { ...r.defaultVariants, ...l } : l;
  !ke(i.twMergeConfig) && !Wi(i.twMergeConfig, Ie) && (Tr = !0, Ie = i.twMergeConfig);
  let v = ke(r == null ? void 0 : r.slots), c = ke(n) ? {} : { base: at(e == null ? void 0 : e.base, v && (r == null ? void 0 : r.base)), ...n }, f = v ? c : Jn({ ...r == null ? void 0 : r.slots }, ke(c) ? { base: e == null ? void 0 : e.base } : c), g = ke(r == null ? void 0 : r.compoundVariants) ? s : Do(r == null ? void 0 : r.compoundVariants, s), h = (S) => {
    if (ke(d) && ke(n) && v) return nt(p, S == null ? void 0 : S.class, S == null ? void 0 : S.className)(i);
    if (g && !Array.isArray(g)) throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof g}`);
    if (a && !Array.isArray(a)) throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof a}`);
    let m = (x, k, C = [], L) => {
      let O = C;
      if (typeof k == "string") O = O.concat(Xn(k).split(" ").map((M) => `${x}:${M}`));
      else if (Array.isArray(k)) O = O.concat(k.reduce((M, P) => M.concat(`${x}:${P}`), []));
      else if (typeof k == "object" && typeof L == "string") {
        for (let M in k) if (k.hasOwnProperty(M) && M === L) {
          let P = k[M];
          if (P && typeof P == "string") {
            let D = Xn(P);
            O[L] ? O[L] = O[L].concat(D.split(" ").map((z) => `${x}:${z}`)) : O[L] = D.split(" ").map((z) => `${x}:${z}`);
          } else Array.isArray(P) && P.length > 0 && (O[L] = P.reduce((D, z) => D.concat(`${x}:${z}`), []));
        }
      }
      return O;
    }, y = (x, k = d, C = null, L = null) => {
      var O;
      let M = k[x];
      if (!M || ke(M)) return null;
      let P = (O = L == null ? void 0 : L[x]) != null ? O : S == null ? void 0 : S[x];
      if (P === null) return null;
      let D = Kn(P), z = Array.isArray(i.responsiveVariants) && i.responsiveVariants.length > 0 || i.responsiveVariants === !0, Q = b == null ? void 0 : b[x], W = [];
      if (typeof D == "object" && z) for (let [re, X] of Object.entries(D)) {
        let F = M[X];
        if (re === "initial") {
          Q = X;
          continue;
        }
        Array.isArray(i.responsiveVariants) && !i.responsiveVariants.includes(re) || (W = m(re, F, W, C));
      }
      let K = D != null && typeof D != "object" ? D : Kn(Q), B = M[K || "false"];
      return typeof W == "object" && typeof C == "string" && W[C] ? Jn(W, B) : W.length > 0 ? (W.push(B), C === "base" ? W.join(" ") : W) : B;
    }, A = () => d ? Object.keys(d).map((x) => y(x, d)) : null, N = (x, k) => {
      if (!d || typeof d != "object") return null;
      let C = new Array();
      for (let L in d) {
        let O = y(L, d, x, k), M = x === "base" && typeof O == "string" ? O : O && O[x];
        M && (C[C.length] = M);
      }
      return C;
    }, R = {};
    for (let x in S) S[x] !== void 0 && (R[x] = S[x]);
    let w = (x, k) => {
      var C;
      let L = typeof (S == null ? void 0 : S[x]) == "object" ? { [x]: (C = S[x]) == null ? void 0 : C.initial } : {};
      return { ...b, ...R, ...L, ...k };
    }, $ = (x = [], k) => {
      let C = [];
      for (let { class: L, className: O, ...M } of x) {
        let P = !0;
        for (let [D, z] of Object.entries(M)) {
          let Q = w(D, k)[D];
          if (Array.isArray(z)) {
            if (!z.includes(Q)) {
              P = !1;
              break;
            }
          } else {
            let W = (K) => K == null || K === !1;
            if (W(z) && W(Q)) continue;
            if (Q !== z) {
              P = !1;
              break;
            }
          }
        }
        P && (L && C.push(L), O && C.push(O));
      }
      return C;
    }, _ = (x) => {
      let k = $(g, x);
      if (!Array.isArray(k)) return k;
      let C = {};
      for (let L of k) if (typeof L == "string" && (C.base = nt(C.base, L)(i)), typeof L == "object") for (let [O, M] of Object.entries(L)) C[O] = nt(C[O], M)(i);
      return C;
    }, T = (x) => {
      if (a.length < 1) return null;
      let k = {};
      for (let { slots: C = [], class: L, className: O, ...M } of a) {
        if (!ke(M)) {
          let P = !0;
          for (let D of Object.keys(M)) {
            let z = w(D, x)[D];
            if (z === void 0 || (Array.isArray(M[D]) ? !M[D].includes(z) : M[D] !== z)) {
              P = !1;
              break;
            }
          }
          if (!P) continue;
        }
        for (let P of C) k[P] = k[P] || [], k[P].push([L, O]);
      }
      return k;
    };
    if (!ke(n) || !v) {
      let x = {};
      if (typeof f == "object" && !ke(f)) for (let k of Object.keys(f)) x[k] = (C) => {
        var L, O;
        return nt(f[k], N(k, C), ((L = _(C)) != null ? L : [])[k], ((O = T(C)) != null ? O : [])[k], C == null ? void 0 : C.class, C == null ? void 0 : C.className)(i);
      };
      return x;
    }
    return nt(p, A(), $(g), S == null ? void 0 : S.class, S == null ? void 0 : S.className)(i);
  }, E = () => {
    if (!(!d || typeof d != "object")) return Object.keys(d);
  };
  return h.variantKeys = E(), h.extend = r, h.base = p, h.slots = f, h.variants = d, h.defaultVariants = b, h.compoundSlots = a, h.compoundVariants = g, h;
};
const Ll = tt({
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
}), zl = pe.forwardRef(({ children: e, isCompact: t, className: r, ...n }, o) => {
  const { wrapper: s, table: a } = Ll({ isCompact: t });
  return /* @__PURE__ */ u("div", { className: s({ class: r }), children: /* @__PURE__ */ u("table", { ref: o, className: a(), ...n, children: e }) });
});
zl.displayName = "Table";
const jl = tt({
  slots: {
    base: "group/tbody"
  }
}), Hl = pe.forwardRef(({ children: e, className: t, ...r }, n) => {
  const { base: o } = jl();
  return /* @__PURE__ */ u("tbody", { ref: n, className: o({ class: t }), ...r, children: e });
});
Hl.displayName = "TableBody";
const Dl = tt({
  slots: {
    base: "group/td p-4"
  }
}), ql = pe.forwardRef(({ children: e, className: t, ...r }, n) => {
  const { base: o } = Dl();
  return /* @__PURE__ */ u("td", { ref: n, className: o({ class: t }), ...r, children: e });
});
ql.displayName = "TableCell";
const Ul = tt({
  slots: {
    base: "group/th p-4 text-left text-sm font-semibold text-base-content/80 bg-base-200/50"
  }
}), Bl = pe.forwardRef(({ children: e, className: t, ...r }, n) => {
  const { base: o } = Ul();
  return /* @__PURE__ */ u("th", { ref: n, className: o({ class: t }), ...r, children: e });
});
Bl.displayName = "TableColumn";
const Gl = tt({
  slots: {
    base: "group/thead"
  }
}), Fl = pe.forwardRef(({ children: e, className: t, ...r }, n) => {
  const { base: o } = Gl();
  return /* @__PURE__ */ u("thead", { ref: n, className: o({ class: t }), ...r, children: e });
});
Fl.displayName = "TableHeader";
const Vl = tt({
  slots: {
    base: "group/tr border-b border-base-200 last:border-b-0 hover:bg-base-200/50"
  }
}), Wl = pe.forwardRef(({ children: e, className: t, ...r }, n) => {
  const { base: o } = Vl();
  return /* @__PURE__ */ u("tr", { ref: n, className: o({ class: t }), ...r, children: e });
});
Wl.displayName = "TableRow";
function Lc({ tabs: e }) {
  var n;
  const [t, r] = le(e && e.length > 0 ? e[0].id : null);
  return !e || e.length === 0 ? null : /* @__PURE__ */ q("div", { children: [
    /* @__PURE__ */ u("div", { className: "border-b border-gray-200 mb-4", children: /* @__PURE__ */ u("nav", { className: "flex space-x-8", children: e.map((o) => /* @__PURE__ */ u(
      "button",
      {
        onClick: () => r(o.id),
        className: `py-2 px-1 border-b-2 font-medium text-sm transition-colors ${t === o.id ? "border-accent-500 text-accent-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`,
        children: o.label
      },
      o.id
    )) }) }),
    /* @__PURE__ */ u("div", { className: "py-4", children: (n = e.find((o) => o.id === t)) == null ? void 0 : n.content })
  ] });
}
function zc({ label: e, name: t, value: r, onChange: n, placeholder: o, maxLength: s, className: a, ...l }) {
  return /* @__PURE__ */ q("div", { children: [
    e && /* @__PURE__ */ u("label", { htmlFor: t, className: "block text-sm font-medium mb-2", children: e }),
    /* @__PURE__ */ u(
      "textarea",
      {
        id: t,
        name: t,
        value: r,
        onChange: n,
        placeholder: o,
        className: `input-fluid min-h-[120px] resize-y ${a || ""}`,
        maxLength: s,
        ...l
      }
    ),
    s && /* @__PURE__ */ q("p", { className: "text-sm text-gray-500 mt-1", children: [
      r.length,
      "/",
      s,
      " caractères"
    ] })
  ] });
}
const Ge = "fluid-glass-theme";
function Kl(e = {}) {
  const [t, r] = le("light"), [n, o] = le(!1);
  Se(() => {
    o(!0);
    const d = localStorage.getItem(Ge);
    if (d && (d === "light" || d === "dark"))
      r(d);
    else if (e.mode === "auto") {
      const v = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      r(v), localStorage.setItem(Ge, v);
    } else {
      const b = e.mode || "light";
      r(b), localStorage.setItem(Ge, b);
    }
  }, [e.mode]);
  const s = () => {
    const d = t === "light" ? "dark" : "light";
    r(d), document.documentElement.setAttribute("data-theme", d), localStorage.setItem(Ge, d);
  }, a = (d) => {
    (d === "light" || d === "dark") && (r(d), document.documentElement.setAttribute("data-theme", d), localStorage.setItem(Ge, d));
  }, l = () => {
    if (localStorage.removeItem(Ge), e.mode === "auto") {
      const b = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      r(b), document.documentElement.setAttribute("data-theme", b);
    }
  }, i = (d) => {
    const b = document.documentElement;
    Object.entries(d).forEach(([v, c]) => {
      const f = `--fg-${v.replace(/([A-Z])/g, "-$1").toLowerCase()}`;
      b.style.setProperty(f, c.toString());
    });
  }, p = () => {
    const d = document.documentElement;
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
    ].forEach((v) => {
      d.style.removeProperty(v);
    });
  };
  return Se(() => {
    n && document.documentElement.setAttribute("data-theme", t);
  }, [t, n]), Se(() => {
    e.config && n && i(e.config);
  }, [e.config, n]), Se(() => {
    if (e.mode === "auto" && n) {
      const d = window.matchMedia("(prefers-color-scheme: dark)"), b = (v) => {
        if (!localStorage.getItem(Ge)) {
          const f = v.matches ? "dark" : "light";
          r(f), document.documentElement.setAttribute("data-theme", f);
        }
      };
      return d.addEventListener("change", b), () => {
        d.removeEventListener("change", b);
      };
    }
  }, [e.mode, n]), {
    theme: t,
    toggleTheme: s,
    setTheme: a,
    clearSavedTheme: l,
    applyTheme: i,
    resetTheme: p,
    mounted: n
  };
}
const Yo = kt();
function jc({ children: e, mode: t = "auto", config: r }) {
  const n = Kl({ mode: t, config: r });
  return /* @__PURE__ */ u(Yo.Provider, { value: n, children: e });
}
function Xl() {
  const e = Or(Yo);
  if (!e)
    throw new Error("useThemeContext doit être utilisé dans un ThemeProvider");
  return e;
}
function eo({ showLabel: e = !0 }) {
  const { theme: t, toggleTheme: r } = Xl();
  return e ? /* @__PURE__ */ u(
    Fe,
    {
      onClick: r,
      "aria-label": `Passer au mode ${t === "light" ? "sombre" : "clair"}`,
      startIcon: t === "light" ? /* @__PURE__ */ u(Br, { size: 16 }) : /* @__PURE__ */ u(Gr, { size: 16 }),
      children: e && (t === "light" ? "Mode sombre" : "Mode clair")
    }
  ) : /* @__PURE__ */ u(
    De,
    {
      onClick: r,
      "aria-label": `Passer au mode ${t === "light" ? "sombre" : "clair"}`,
      icon: t === "light" ? /* @__PURE__ */ u(Br, { size: 16 }) : /* @__PURE__ */ u(Gr, { size: 16 })
    }
  );
}
const Ql = (e) => {
  switch (e) {
    case "user":
      return /* @__PURE__ */ u(lo, { size: 16, className: "text-white" });
    case "order":
      return /* @__PURE__ */ u(yr, { size: 16, className: "text-white" });
    case "update":
      return /* @__PURE__ */ u(Us, { size: 16, className: "text-white" });
    case "delete":
      return /* @__PURE__ */ u(Fs, { size: 16, className: "text-white" });
    default:
      return null;
  }
}, Zl = (e) => {
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
function Hc({ items: e }) {
  return !e || e.length === 0 ? null : /* @__PURE__ */ u("div", { className: "space-y-4", children: e.map((t) => /* @__PURE__ */ q("div", { className: "flex items-start gap-4", children: [
    /* @__PURE__ */ u(
      "div",
      {
        className: `w-8 h-8 rounded-full flex items-center justify-center ${Zl(t.type)}`,
        children: Ql(t.type)
      }
    ),
    /* @__PURE__ */ q("div", { className: "flex-1", children: [
      /* @__PURE__ */ u("p", { className: "font-medium", children: t.title }),
      /* @__PURE__ */ q("p", { className: "text-sm text-gray-600", children: [
        "par ",
        t.user
      ] }),
      /* @__PURE__ */ q("p", { className: "text-xs text-gray-500 flex items-center gap-1", children: [
        /* @__PURE__ */ u(_s, { size: 12 }),
        "il y a ",
        t.time
      ] })
    ] })
  ] }, t.id)) });
}
const Jo = kt(null), Yl = {
  "top-right": "top-5 right-5",
  "top-left": "top-5 left-5",
  "top-center": "top-5 left-1/2 -translate-x-1/2",
  "bottom-right": "bottom-5 right-5",
  "bottom-left": "bottom-5 left-5",
  "bottom-center": "bottom-5 left-1/2 -translate-x-1/2"
}, Jl = {
  "top-right": "animate-slide-in-right",
  "top-left": "animate-slide-in-left",
  "top-center": "animate-slide-in-top",
  "bottom-right": "animate-slide-in-right",
  "bottom-left": "animate-slide-in-left",
  "bottom-center": "animate-slide-in-bottom"
};
function Dc({ children: e }) {
  const [t, r] = le([]), n = (d) => {
    const b = Date.now().toString(), v = { id: b, ...d };
    return r((c) => [...c, v]), b;
  }, o = (d, b) => {
    r((v) => {
      const c = v.find((f) => f.id === d);
      return c && c.onClose && c.onClose(b || !0), v.filter((f) => f.id !== d);
    });
  }, s = (d, b) => (r(
    (v) => v.map(
      (c) => c.id === d ? { ...c, ...b } : c
    )
  ), d), p = {
    toasts: t,
    addToast: n,
    removeToast: o,
    updateToast: s,
    loading: (d, b = {}) => n({
      type: "loading",
      message: d,
      autoClose: !1,
      ...b
    }),
    promise: (d, b) => {
      var E;
      const { pending: v, success: c, error: f } = b, g = n({
        type: "loading",
        message: typeof v == "string" ? v : ((E = v == null ? void 0 : v.render) == null ? void 0 : E.call(v)) || "Chargement...",
        autoClose: !1,
        ...typeof v == "object" ? v : {}
      }), h = Promise.resolve(typeof d == "function" ? d() : d);
      return h.then((S) => {
        var y;
        const m = typeof c == "string" ? c : ((y = c == null ? void 0 : c.render) == null ? void 0 : y.call(c, { data: S })) || "Succès";
        return s(g, {
          type: "success",
          message: m,
          autoClose: 5e3,
          ...typeof c == "object" ? c : {}
        }), S;
      }).catch((S) => {
        var y;
        const m = typeof f == "string" ? f : ((y = f == null ? void 0 : f.render) == null ? void 0 : y.call(f, { data: S })) || "Une erreur est survenue";
        return s(g, {
          type: "error",
          message: m,
          autoClose: 5e3,
          ...typeof f == "object" ? f : {}
        }), Promise.reject(S);
      }), h;
    },
    dismissAll: () => {
      t.forEach((d) => {
        d.onClose && d.onClose("dismissed");
      }), r([]);
    },
    // Méthodes pour chaque type de toast
    info: (d, b = {}) => n({ type: "info", message: d, autoClose: 5e3, ...b }),
    success: (d, b = {}) => n({ type: "success", message: d, autoClose: 5e3, ...b }),
    warning: (d, b = {}) => n({ type: "warning", message: d, autoClose: 5e3, ...b }),
    error: (d, b = {}) => n({ type: "error", message: d, autoClose: 5e3, ...b })
  };
  return /* @__PURE__ */ q(Jo.Provider, { value: p, children: [
    e,
    /* @__PURE__ */ u(tc, {})
  ] });
}
function ec() {
  const e = Or(Jo);
  if (!e)
    throw new Error("useToast doit être utilisé à l'intérieur d'un ToastProvider");
  return e;
}
function tc() {
  const { toasts: e, removeToast: t } = ec(), r = e.reduce((n, o) => {
    const s = o.position || "bottom-right";
    return n[s] || (n[s] = []), n[s].push(o), n;
  }, {});
  return Object.entries(r).map(([n, o]) => /* @__PURE__ */ u("div", { className: `fixed z-50 flex flex-col gap-2 ${Yl[n]}`, children: o.map((s) => /* @__PURE__ */ u(ze, { ...s, onClose: (a) => t(s.id, a) }, s.id)) }, n));
}
function ze({
  id: e,
  type: t = "info",
  message: r,
  onClose: n,
  autoClose: o = 5e3,
  position: s = "bottom-right",
  onOpen: a,
  isLoading: l = !1
}) {
  const i = Pe(null), [p, d] = le(!0), b = {
    info: /* @__PURE__ */ u(St, { size: 20, className: "text-blue-500 mt-0.5" }),
    success: /* @__PURE__ */ u($r, { size: 20, className: "text-green-500 mt-0.5" }),
    warning: /* @__PURE__ */ u(Xe, { size: 20, className: "text-yellow-500 mt-0.5" }),
    error: /* @__PURE__ */ u(Xe, { size: 20, className: "text-red-500 mt-0.5" }),
    loading: /* @__PURE__ */ u(vr, { size: 20, className: "text-blue-500 mt-0.5 animate-spin" })
  }, v = {
    info: "bg-blue-50 border border-blue-200",
    success: "bg-green-50 border border-green-200",
    warning: "bg-yellow-50 border border-yellow-200",
    error: "bg-red-50 border border-red-200",
    loading: "bg-blue-50 border border-blue-200"
  };
  Se(() => (a && a(), o !== !1 && !l && (i.current = setTimeout(() => {
    d(!1), setTimeout(() => n("timeout"), 300);
  }, o)), () => {
    i.current && clearTimeout(i.current);
  }), [o, n, a, l]);
  const c = () => {
    d(!1), i.current && clearTimeout(i.current), setTimeout(() => n("dismissed"), 300);
  }, f = p ? "opacity-100" : "opacity-0 translate-x-2";
  return /* @__PURE__ */ q(
    "div",
    {
      className: `max-w-sm w-full p-4 rounded-lg shadow-lg transition-all duration-300 ${v[t]} ${Jl[s]} ${f}`,
      children: [
        /* @__PURE__ */ q("div", { className: "flex items-start gap-3", children: [
          b[t],
          /* @__PURE__ */ u("div", { className: "flex-1", children: /* @__PURE__ */ u("p", { className: "text-sm font-medium", children: r }) }),
          t !== "loading" && /* @__PURE__ */ u("button", { onClick: c, className: "text-gray-400 hover:text-gray-600", children: /* @__PURE__ */ u(Oe, { size: 16 }) })
        ] }),
        o !== !1 && t !== "loading" && /* @__PURE__ */ u("div", { className: "mt-2 w-full bg-gray-200 rounded-full h-1 overflow-hidden", children: /* @__PURE__ */ u(
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
ze.info = (e, t) => (console.warn("Toast.info() est déprécié. Utilisez useToast().info() à la place."), null);
ze.success = (e, t) => (console.warn("Toast.success() est déprécié. Utilisez useToast().success() à la place."), null);
ze.warning = (e, t) => (console.warn("Toast.warning() est déprécié. Utilisez useToast().warning() à la place."), null);
ze.error = (e, t) => (console.warn("Toast.error() est déprécié. Utilisez useToast().error() à la place."), null);
ze.loading = (e, t) => (console.warn("Toast.loading() est déprécié. Utilisez useToast().loading() à la place."), null);
ze.promise = (e, t) => (console.warn("Toast.promise() est déprécié. Utilisez useToast().promise() à la place."), e);
ze.dismiss = (e) => {
  console.warn("Toast.dismiss() est déprécié. Utilisez useToast().removeToast() à la place.");
};
ze.dismissAll = () => {
  console.warn("Toast.dismissAll() est déprécié. Utilisez useToast().dismissAll() à la place.");
};
function qc({ label: e, checked: t, onChange: r }) {
  const [n, o] = le(t || !1);
  return /* @__PURE__ */ q("div", { className: "flex items-center justify-between", children: [
    e && /* @__PURE__ */ u("span", { className: "text-sm font-medium", children: e }),
    /* @__PURE__ */ u(
      "button",
      {
        onClick: () => {
          o(!n), r(!n);
        },
        className: `toggle-fluid ${n ? "active" : ""}`,
        children: /* @__PURE__ */ u("div", { className: "toggle-handle" })
      }
    )
  ] });
}
function Uc({
  logo: e,
  navItems: t = [],
  userDropdownItems: r = [],
  userAvatar: n,
  userName: o,
  notificationCount: s = 0,
  onSearch: a,
  onNavItemClick: l,
  showSearch: i = !0,
  showNotifications: p = !0,
  showThemeSwitcher: d = !0,
  showThemeSwitcherLabel: b = !1
}) {
  const [v, c] = le(""), [f, g] = le(!1), [h, E] = le("");
  le(() => {
    t.length > 0 && !v && c(t[0].id);
  }, [t]);
  const S = (y) => {
    c(y.id), l && l(y);
  }, m = (y) => {
    E(y.target.value), a && a(y.target.value);
  };
  return /* @__PURE__ */ q("div", { className: "nav-fluid", children: [
    /* @__PURE__ */ q("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ q("div", { className: "flex items-center gap-6", children: [
        e && /* @__PURE__ */ u("div", { className: "font-bold text-lg", children: e }),
        /* @__PURE__ */ u("nav", { className: "hidden md:flex space-x-8", children: t.map((y) => /* @__PURE__ */ q(
          "button",
          {
            className: `flex items-center gap-2 text-sm font-medium ${v === y.id ? "text-accent-600" : "text-gray-600 hover:text-gray-800"}`,
            onClick: () => S(y),
            children: [
              y.icon && /* @__PURE__ */ u(y.icon, { size: 16 }),
              y.label
            ]
          },
          y.id
        )) })
      ] }),
      /* @__PURE__ */ q("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ q("div", { className: "hidden md:flex items-center gap-2", children: [
          i && /* @__PURE__ */ q("div", { className: "relative", children: [
            /* @__PURE__ */ u(
              "input",
              {
                type: "text",
                placeholder: "Rechercher...",
                className: "py-1 pl-10 pr-4 rounded-lg bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 w-64",
                value: h,
                onChange: m
              }
            ),
            /* @__PURE__ */ u(
              At,
              {
                size: 16,
                className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              }
            )
          ] }),
          d && /* @__PURE__ */ u(eo, { showLabel: b }),
          p && /* @__PURE__ */ u(
            De,
            {
              icon: /* @__PURE__ */ u(oo, { size: 16 }),
              "aria-label": "Notifications",
              variant: "ghost",
              badge: s > 0 ? s : void 0
            }
          ),
          r.length > 0 && /* @__PURE__ */ q($e, { children: [
            /* @__PURE__ */ u($e.Trigger, { asChild: !0, children: /* @__PURE__ */ q(
              Fe,
              {
                variant: "ghost",
                className: "flex items-center gap-2",
                endIcon: /* @__PURE__ */ u(Qe, { size: 16 }),
                children: [
                  n ? typeof n == "string" ? /* @__PURE__ */ u(
                    ut,
                    {
                      src: n,
                      alt: o || "User",
                      size: "sm",
                      fallback: (o || "U").charAt(0)
                    }
                  ) : n : /* @__PURE__ */ u(
                    ut,
                    {
                      size: "sm",
                      fallback: (o || "U").charAt(0)
                    }
                  ),
                  o && /* @__PURE__ */ u("span", { className: "font-medium", children: o })
                ]
              }
            ) }),
            /* @__PURE__ */ u($e.Menu, { children: r.map(
              (y, A) => y.isSeparator ? /* @__PURE__ */ u($e.Separator, {}, `sep-${A}`) : /* @__PURE__ */ q(
                $e.Item,
                {
                  onClick: y.onClick,
                  className: y.isDanger ? "text-red-600 hover:text-red-700" : "",
                  children: [
                    y.icon,
                    y.label
                  ]
                },
                `${y.label}-${A}`
              )
            ) })
          ] })
        ] }),
        /* @__PURE__ */ u(
          De,
          {
            icon: f ? /* @__PURE__ */ u(Oe, { size: 24 }) : /* @__PURE__ */ u(ao, { size: 24 }),
            onClick: () => g(!f),
            className: "md:hidden",
            "aria-label": "Menu",
            variant: "ghost"
          }
        )
      ] })
    ] }),
    f && /* @__PURE__ */ u("div", { className: "md:hidden mt-4 py-4 border-t", children: /* @__PURE__ */ q("nav", { className: "flex flex-col space-y-4", children: [
      t.map((y) => /* @__PURE__ */ q(
        "button",
        {
          className: `flex items-center gap-2 text-sm font-medium ${v === y.id ? "text-accent-600" : "text-gray-600"}`,
          onClick: () => {
            S(y), g(!1);
          },
          children: [
            y.icon && /* @__PURE__ */ u(y.icon, { size: 18 }),
            y.label
          ]
        },
        y.id
      )),
      /* @__PURE__ */ q("div", { className: "pt-4 border-t", children: [
        i && /* @__PURE__ */ q("div", { className: "relative mb-4", children: [
          /* @__PURE__ */ u(
            "input",
            {
              type: "text",
              placeholder: "Rechercher...",
              className: "w-full py-2 pl-10 pr-4 rounded-lg bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500",
              value: h,
              onChange: m
            }
          ),
          /* @__PURE__ */ u(
            At,
            {
              size: 16,
              className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            }
          )
        ] }),
        d && /* @__PURE__ */ u("div", { className: "mb-4", children: /* @__PURE__ */ u(eo, { showLabel: !0 }) }),
        o && /* @__PURE__ */ q("div", { className: "flex items-center gap-3 mb-2", children: [
          n ? typeof n == "string" ? /* @__PURE__ */ u(
            ut,
            {
              src: n,
              alt: o,
              size: "sm",
              fallback: o.charAt(0)
            }
          ) : n : /* @__PURE__ */ u(ut, { size: "sm", fallback: o.charAt(0) }),
          /* @__PURE__ */ u("span", { className: "font-medium", children: o })
        ] }),
        r.filter((y) => !y.isSeparator).map((y, A) => /* @__PURE__ */ q(
          "button",
          {
            onClick: y.onClick,
            className: `flex items-center gap-2 text-sm font-medium py-2 w-full ${y.isDanger ? "text-red-600" : "text-gray-600"}`,
            children: [
              y.icon,
              y.label
            ]
          },
          `${y.label}-${A}`
        ))
      ] })
    ] }) })
  ] });
}
function Bc({ view: e, setView: t }) {
  return /* @__PURE__ */ q("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ u(
      "button",
      {
        onClick: () => t("grid"),
        className: `p-2 rounded-lg transition-colors ${e === "grid" ? "bg-accent-500 text-white" : "hover:bg-glass-light"}`,
        children: /* @__PURE__ */ u(Ts, { size: 16 })
      }
    ),
    /* @__PURE__ */ u(
      "button",
      {
        onClick: () => t("list"),
        className: `p-2 rounded-lg transition-colors ${e === "list" ? "bg-accent-500 text-white" : "hover:bg-glass-light"}`,
        children: /* @__PURE__ */ u(Is, { size: 16 })
      }
    )
  ] });
}
export {
  ac as Accordion,
  ic as Alert,
  ut as Avatar,
  lc as Badge,
  cc as Breadcrumb,
  Fe as Button,
  Si as Card,
  Pi as CardBody,
  Ti as CardDescription,
  Oi as CardFooter,
  Mi as CardHeader,
  Ii as CardTitle,
  Bn as Checkbox,
  uc as Chip,
  dc as Collapsible,
  fc as CollapsibleSidebar,
  pc as Container,
  mc as ContextMenu,
  hc as DataCard,
  gc as DocumentUploader,
  bc as Drawer,
  $e as Dropdown,
  yc as EmptyState,
  vc as ExpandableTable,
  xc as FileUploader,
  wc as Footer,
  Fn as HelperText,
  De as IconButton,
  Lo as Input,
  _c as InteractiveTable,
  Rc as Label,
  _o as Link,
  $i as Modal,
  Io as ModalBody,
  Vi as ModalFooter,
  Mo as ModalHeader,
  Nc as Notification,
  Gi as Pagination,
  Ec as ProgressBar,
  Ac as RadioGroup,
  kc as SectionBox,
  Fi as Select,
  zo as SidebarMenuItem,
  Sc as SidebarNavigation,
  Pc as Skeleton,
  Tc as Snackbar,
  Oc as Spinner,
  Mc as Stack,
  Ic as StatCard,
  $c as Stepper,
  zl as Table,
  Hl as TableBody,
  ql as TableCell,
  Bl as TableColumn,
  Fl as TableHeader,
  Wl as TableRow,
  Lc as Tabs,
  zc as Textarea,
  jc as ThemeProvider,
  eo as ThemeSwitcher,
  Hc as Timeline,
  ze as Toast,
  Dc as ToastProvider,
  qc as Toggle,
  Uc as TopNavigation,
  Bc as ViewModeSwitch,
  Cc as useModalLayout,
  ec as useToast
};

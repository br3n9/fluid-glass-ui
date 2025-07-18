"use client";
import { jsxs as $, jsx as u, Fragment as fn } from "react/jsx-runtime";
import he, { forwardRef as pn, createElement as Ft, useState as me, createContext as er, useCallback as Te, useEffect as Pe, useContext as hn, useRef as tr, useMemo as ct } from "react";
import Kn from "react-dom";
import { usePress as Xn } from "@react-aria/interactions";
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qn = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), mn = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Zn = {
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
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yn = pn(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: a,
    iconNode: s,
    ...l
  }, i) => Ft(
    "svg",
    {
      ref: i,
      ...Zn,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: mn("lucide", o),
      ...l
    },
    [
      ...s.map(([p, g]) => Ft(p, g)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const de = (e, t) => {
  const n = pn(
    ({ className: r, ...o }, a) => Ft(Yn, {
      ref: a,
      iconNode: t,
      className: mn(`lucide-${Qn(e)}`, r),
      ...o
    })
  );
  return n.displayName = `${e}`, n;
};
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gn = de("Bell", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }]
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rr = de("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Me = de("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jn = de("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nr = de("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bn = de("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rt = de("CircleAlert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const or = de("CircleCheckBig", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eo = de("CircleX", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const to = de("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ro = de("Eye", [
  ["path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wt = de("FileText", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const no = de("Grid3x3", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nt = de("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oo = de("List", [
  ["line", { x1: "8", x2: "21", y1: "6", y2: "6", key: "7ey8pc" }],
  ["line", { x1: "8", x2: "21", y1: "12", y2: "12", key: "rjfblc" }],
  ["line", { x1: "8", x2: "21", y1: "18", y2: "18", key: "c3b1m8" }],
  ["line", { x1: "3", x2: "3.01", y1: "6", y2: "6", key: "1g7gq3" }],
  ["line", { x1: "3", x2: "3.01", y1: "12", y2: "12", key: "1pjlvk" }],
  ["line", { x1: "3", x2: "3.01", y1: "18", y2: "18", key: "28t2mc" }]
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yn = de("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const so = de("Moon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ao = de("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vt = de("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const io = de("SlidersHorizontal", [
  ["line", { x1: "21", x2: "14", y1: "4", y2: "4", key: "obuewd" }],
  ["line", { x1: "10", x2: "3", y1: "4", y2: "4", key: "1q6298" }],
  ["line", { x1: "21", x2: "12", y1: "12", y2: "12", key: "1iu8h1" }],
  ["line", { x1: "8", x2: "3", y1: "12", y2: "12", key: "ntss68" }],
  ["line", { x1: "21", x2: "16", y1: "20", y2: "20", key: "14d8ph" }],
  ["line", { x1: "12", x2: "3", y1: "20", y2: "20", key: "m0wm8r" }],
  ["line", { x1: "14", x2: "14", y1: "2", y2: "6", key: "14e1ph" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
  ["line", { x1: "16", x2: "16", y1: "18", y2: "22", key: "1lctlv" }]
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vn = de("SquarePen", [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  [
    "path",
    {
      d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
      key: "ohrbg2"
    }
  ]
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lo = de("Sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xn = de("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const co = de("TrendingDown", [
  ["polyline", { points: "22 17 13.5 8.5 8.5 13.5 2 7", key: "1r2t7k" }],
  ["polyline", { points: "16 17 22 17 22 11", key: "11uiuu" }]
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uo = de("TrendingUp", [
  ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
  ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }]
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fo = de("Upload", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }]
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sr = de("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ae = de("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function fa({ title: e, children: t }) {
  const [n, r] = me(!1);
  return /* @__PURE__ */ $("div", { className: "glass-surface rounded-lg overflow-hidden border border-white/10", children: [
    /* @__PURE__ */ $(
      "button",
      {
        onClick: () => r(!n),
        className: "w-full flex justify-between items-center p-4 text-left font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500",
        "aria-expanded": n,
        children: [
          /* @__PURE__ */ u("span", { children: e }),
          /* @__PURE__ */ u(
            Me,
            {
              className: `transform transition-transform duration-300 ${n ? "rotate-180" : ""}`
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ u("div", { className: `transition-all duration-300 ease-in-out overflow-hidden ${n ? "max-h-screen" : "max-h-0"}`, children: /* @__PURE__ */ u("div", { className: "p-4 border-t border-white/10", children: t }) })
  ] });
}
const po = {
  info: {
    icon: nt,
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    iconColor: "text-blue-600",
    titleColor: "text-blue-900",
    textColor: "text-blue-700"
  },
  success: {
    icon: or,
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    iconColor: "text-green-600",
    titleColor: "text-green-900",
    textColor: "text-green-700"
  },
  warning: {
    icon: rt,
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
    iconColor: "text-yellow-600",
    titleColor: "text-yellow-900",
    textColor: "text-yellow-700"
  },
  danger: {
    icon: eo,
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    iconColor: "text-red-600",
    titleColor: "text-red-900",
    textColor: "text-red-700"
  }
};
function pa({ variant: e = "info", title: t, children: n }) {
  const r = po[e], o = r.icon;
  return /* @__PURE__ */ $(
    "div",
    {
      className: `flex items-center gap-3 p-4 border rounded-lg ${r.bgColor} ${r.borderColor}`,
      children: [
        /* @__PURE__ */ u(o, { size: 20, className: r.iconColor }),
        /* @__PURE__ */ $("div", { children: [
          t && /* @__PURE__ */ u("p", { className: `font-medium ${r.titleColor}`, children: t }),
          /* @__PURE__ */ u("p", { className: `text-sm ${r.textColor}`, children: n })
        ] })
      ]
    }
  );
}
function wn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function ho(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var o = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var _n = {}, Ce = {};
Ce._ = Ce._interop_require_default = mo;
function mo(e) {
  return e && e.__esModule ? e : { default: e };
}
var ar = {}, He = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "warnOnce", {
    enumerable: !0,
    get: function() {
      return t;
    }
  });
  let t = (n) => {
  };
  if (process.env.NODE_ENV !== "production") {
    const n = /* @__PURE__ */ new Set();
    t = (r) => {
      n.has(r) || console.warn(r), n.add(r);
    };
  }
})(He);
var Rn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "getImageBlurSvg", {
    enumerable: !0,
    get: function() {
      return t;
    }
  });
  function t(n) {
    let { widthInt: r, heightInt: o, blurWidth: a, blurHeight: s, blurDataURL: l, objectFit: i } = n;
    const p = 20, g = a ? a * 40 : r, x = s ? s * 40 : o, v = g && x ? "viewBox='0 0 " + g + " " + x + "'" : "", c = v ? "none" : i === "contain" ? "xMidYMid" : i === "cover" ? "xMidYMid slice" : "none";
    return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + v + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='" + p + "'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='" + p + "'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + c + "' style='filter: url(%23b);' href='" + l + "'/%3E%3C/svg%3E";
  }
})(Rn);
var ot = {};
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
      return n;
    },
    imageConfigDefault: function() {
      return r;
    }
  });
  const n = [
    "default",
    "imgix",
    "cloudinary",
    "akamai",
    "custom"
  ], r = {
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
})(ot);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "getImgProps", {
    enumerable: !0,
    get: function() {
      return c;
    }
  });
  const t = He, n = Rn, r = ot, o = [
    "lazy",
    "eager",
    void 0
  ];
  function a(f) {
    return f.default !== void 0;
  }
  function s(f) {
    return f.src !== void 0;
  }
  function l(f) {
    return typeof f == "object" && (a(f) || s(f));
  }
  const i = /* @__PURE__ */ new Map();
  let p;
  function g(f) {
    return typeof f > "u" ? f : typeof f == "number" ? Number.isFinite(f) ? f : NaN : typeof f == "string" && /^[0-9]+$/.test(f) ? parseInt(f, 10) : NaN;
  }
  function x(f, m, h) {
    let { deviceSizes: A, allSizes: w } = f;
    if (h) {
      const N = /(^|\s)(1?\d?\d)vw/g, C = [];
      for (let P; P = N.exec(h); P)
        C.push(parseInt(P[2]));
      if (C.length) {
        const P = Math.min(...C) * 0.01;
        return {
          widths: w.filter((_) => _ >= A[0] * P),
          kind: "w"
        };
      }
      return {
        widths: w,
        kind: "w"
      };
    }
    return typeof m != "number" ? {
      widths: A,
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
            m,
            m * 2
            /*, width * 3*/
          ].map((N) => w.find((C) => C >= N) || w[w.length - 1])
        )
      ],
      kind: "x"
    };
  }
  function v(f) {
    let { config: m, src: h, unoptimized: A, width: w, quality: d, sizes: N, loader: C } = f;
    if (A)
      return {
        src: h,
        srcSet: void 0,
        sizes: void 0
      };
    const { widths: P, kind: _ } = x(m, w, N), b = P.length - 1;
    return {
      sizes: !N && _ === "w" ? "100vw" : N,
      srcSet: P.map((I, y) => C({
        config: m,
        src: h,
        quality: d,
        width: I
      }) + " " + (_ === "w" ? I : y + 1) + _).join(", "),
      // It's intended to keep `src` the last attribute because React updates
      // attributes in order. If we keep `src` the first one, Safari will
      // immediately start to fetch `src`, before `sizes` and `srcSet` are even
      // updated by React. That causes multiple unnecessary requests if `srcSet`
      // and `sizes` are defined.
      // This bug cannot be reproduced in Chrome or Firefox.
      src: C({
        config: m,
        src: h,
        quality: d,
        width: P[b]
      })
    };
  }
  function c(f, m) {
    let { src: h, sizes: A, unoptimized: w = !1, priority: d = !1, loading: N, className: C, quality: P, width: _, height: b, fill: I = !1, style: y, onLoad: R, onLoadingComplete: E, placeholder: T = "empty", blurDataURL: S, fetchPriority: H, layout: q, objectFit: Q, objectPosition: L, lazyBoundary: K, lazyRoot: j, ...J } = f;
    const { imgConf: X, showAltText: G, blurComplete: B, defaultLoader: te } = m;
    let se, Z = X || r.imageConfigDefault;
    if ("allSizes" in Z)
      se = Z;
    else {
      const z = [
        ...Z.deviceSizes,
        ...Z.imageSizes
      ].sort((xe, U) => xe - U), ue = Z.deviceSizes.sort((xe, U) => xe - U);
      se = {
        ...Z,
        allSizes: z,
        deviceSizes: ue
      };
    }
    let M = J.loader || te;
    delete J.loader, delete J.srcSet;
    const ce = "__next_img_default" in M;
    if (ce) {
      if (se.loader === "custom")
        throw new Error('Image with src "' + h + `" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`);
    } else {
      const z = M;
      M = (ue) => {
        const { config: xe, ...U } = ue;
        return z(U);
      };
    }
    if (q) {
      q === "fill" && (I = !0);
      const z = {
        intrinsic: {
          maxWidth: "100%",
          height: "auto"
        },
        responsive: {
          width: "100%",
          height: "auto"
        }
      }, ue = {
        responsive: "100vw",
        fill: "100vw"
      }, xe = z[q];
      xe && (y = {
        ...y,
        ...xe
      });
      const U = ue[q];
      U && !A && (A = U);
    }
    let oe = "", re = g(_), O = g(b), k, Y;
    if (l(h)) {
      const z = a(h) ? h.default : h;
      if (!z.src)
        throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(z));
      if (!z.height || !z.width)
        throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(z));
      if (k = z.blurWidth, Y = z.blurHeight, S = S || z.blurDataURL, oe = z.src, !I) {
        if (!re && !O)
          re = z.width, O = z.height;
        else if (re && !O) {
          const ue = re / z.width;
          O = Math.round(z.height * ue);
        } else if (!re && O) {
          const ue = O / z.height;
          re = Math.round(z.width * ue);
        }
      }
    }
    h = typeof h == "string" ? h : oe;
    let ie = !d && (N === "lazy" || typeof N > "u");
    (!h || h.startsWith("data:") || h.startsWith("blob:")) && (w = !0, ie = !1), se.unoptimized && (w = !0), ce && h.endsWith(".svg") && !se.dangerouslyAllowSVG && (w = !0), d && (H = "high");
    const we = g(P);
    if (process.env.NODE_ENV !== "production") {
      if (se.output === "export" && ce && !w)
        throw new Error("Image Optimization using the default loader is not compatible with `{ output: 'export' }`.\n  Possible solutions:\n    - Remove `{ output: 'export' }` and run \"next start\" to run server mode including the Image Optimization API.\n    - Configure `{ images: { unoptimized: true } }` in `next.config.js` to disable the Image Optimization API.\n  Read more: https://nextjs.org/docs/messages/export-image-api");
      if (!h)
        w = !0;
      else if (I) {
        if (_)
          throw new Error('Image with src "' + h + '" has both "width" and "fill" properties. Only one should be used.');
        if (b)
          throw new Error('Image with src "' + h + '" has both "height" and "fill" properties. Only one should be used.');
        if (y != null && y.position && y.position !== "absolute")
          throw new Error('Image with src "' + h + '" has both "fill" and "style.position" properties. Images with "fill" always use position absolute - it cannot be modified.');
        if (y != null && y.width && y.width !== "100%")
          throw new Error('Image with src "' + h + '" has both "fill" and "style.width" properties. Images with "fill" always use width 100% - it cannot be modified.');
        if (y != null && y.height && y.height !== "100%")
          throw new Error('Image with src "' + h + '" has both "fill" and "style.height" properties. Images with "fill" always use height 100% - it cannot be modified.');
      } else {
        if (typeof re > "u")
          throw new Error('Image with src "' + h + '" is missing required "width" property.');
        if (isNaN(re))
          throw new Error('Image with src "' + h + '" has invalid "width" property. Expected a numeric value in pixels but received "' + _ + '".');
        if (typeof O > "u")
          throw new Error('Image with src "' + h + '" is missing required "height" property.');
        if (isNaN(O))
          throw new Error('Image with src "' + h + '" has invalid "height" property. Expected a numeric value in pixels but received "' + b + '".');
      }
      if (!o.includes(N))
        throw new Error('Image with src "' + h + '" has invalid "loading" property. Provided "' + N + '" should be one of ' + o.map(String).join(",") + ".");
      if (d && N === "lazy")
        throw new Error('Image with src "' + h + `" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
      if (T !== "empty" && T !== "blur" && !T.startsWith("data:image/"))
        throw new Error('Image with src "' + h + '" has invalid "placeholder" property "' + T + '".');
      if (T !== "empty" && re && O && re * O < 1600 && (0, t.warnOnce)('Image with src "' + h + '" is smaller than 40x40. Consider removing the "placeholder" property to improve performance.'), T === "blur" && !S) {
        const z = [
          "jpeg",
          "png",
          "webp",
          "avif"
        ];
        throw new Error('Image with src "' + h + `" has "placeholder='blur'" property but is missing the "blurDataURL" property.
        Possible solutions:
          - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
          - Change the "src" property to a static import with one of the supported file types: ` + z.join(",") + ` (animated images not supported)
          - Remove the "placeholder" property, effectively no blur effect
        Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`);
      }
      if ("ref" in J && (0, t.warnOnce)('Image with src "' + h + '" is using unsupported "ref" property. Consider using the "onLoad" property instead.'), !w && !ce) {
        const z = M({
          config: se,
          src: h,
          width: re || 400,
          quality: we || 75
        });
        let ue;
        try {
          ue = new URL(z);
        } catch {
        }
        (z === h || ue && ue.pathname === h && !ue.search) && (0, t.warnOnce)('Image with src "' + h + `" has a "loader" property that does not implement width. Please implement it or use the "unoptimized" property instead.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader-width`);
      }
      E && (0, t.warnOnce)('Image with src "' + h + '" is using deprecated "onLoadingComplete" property. Please use the "onLoad" property instead.');
      for (const [z, ue] of Object.entries({
        layout: q,
        objectFit: Q,
        objectPosition: L,
        lazyBoundary: K,
        lazyRoot: j
      }))
        ue && (0, t.warnOnce)('Image with src "' + h + '" has legacy prop "' + z + `". Did you forget to run the codemod?
Read more: https://nextjs.org/docs/messages/next-image-upgrade-to-13`);
      if (typeof window < "u" && !p && window.PerformanceObserver) {
        p = new PerformanceObserver((z) => {
          for (const xe of z.getEntries()) {
            var ue;
            const U = (xe == null || (ue = xe.element) == null ? void 0 : ue.src) || "", F = i.get(U);
            F && !F.priority && F.placeholder === "empty" && !F.src.startsWith("data:") && !F.src.startsWith("blob:") && (0, t.warnOnce)('Image with src "' + F.src + `" was detected as the Largest Contentful Paint (LCP). Please add the "priority" property if this image is above the fold.
Read more: https://nextjs.org/docs/api-reference/next/image#priority`);
          }
        });
        try {
          p.observe({
            type: "largest-contentful-paint",
            buffered: !0
          });
        } catch (z) {
          console.error(z);
        }
      }
    }
    const fe = Object.assign(I ? {
      position: "absolute",
      height: "100%",
      width: "100%",
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      objectFit: Q,
      objectPosition: L
    } : {}, G ? {} : {
      color: "transparent"
    }, y), le = !B && T !== "empty" ? T === "blur" ? 'url("data:image/svg+xml;charset=utf-8,' + (0, n.getImageBlurSvg)({
      widthInt: re,
      heightInt: O,
      blurWidth: k,
      blurHeight: Y,
      blurDataURL: S || "",
      objectFit: fe.objectFit
    }) + '")' : 'url("' + T + '")' : null;
    let Re = le ? {
      backgroundSize: fe.objectFit || "cover",
      backgroundPosition: fe.objectPosition || "50% 50%",
      backgroundRepeat: "no-repeat",
      backgroundImage: le
    } : {};
    process.env.NODE_ENV === "development" && Re.backgroundImage && T === "blur" && S != null && S.startsWith("/") && (Re.backgroundImage = 'url("' + S + '")');
    const be = v({
      config: se,
      src: h,
      unoptimized: w,
      width: re,
      quality: we,
      sizes: A,
      loader: M
    });
    if (process.env.NODE_ENV !== "production" && typeof window < "u") {
      let z;
      try {
        z = new URL(be.src);
      } catch {
        z = new URL(be.src, window.location.href);
      }
      i.set(z.href, {
        src: h,
        priority: d,
        placeholder: T
      });
    }
    return {
      props: {
        ...J,
        loading: ie ? "lazy" : N,
        fetchPriority: H,
        width: re,
        height: O,
        decoding: "async",
        className: C,
        style: {
          ...fe,
          ...Re
        },
        sizes: be.sizes,
        srcSet: be.srcSet,
        src: be.src
      },
      meta: {
        unoptimized: w,
        priority: d,
        placeholder: T,
        fill: I
      }
    };
  }
})(ar);
var Kt = { exports: {} }, ze = {};
function Cn(e) {
  if (typeof WeakMap != "function") return null;
  var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (Cn = function(r) {
    return r ? n : t;
  })(e);
}
ze._ = ze._interop_require_wildcard = go;
function go(e, t) {
  if (!t && e && e.__esModule) return e;
  if (e === null || typeof e != "object" && typeof e != "function") return { default: e };
  var n = Cn(t);
  if (n && n.has(e)) return n.get(e);
  var r = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e)
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var s = o ? Object.getOwnPropertyDescriptor(e, a) : null;
      s && (s.get || s.set) ? Object.defineProperty(r, a, s) : r[a] = e[a];
    }
  return r.default = e, n && n.set(e, r), r;
}
var qe = { exports: {} }, ut = {}, ur;
function bo() {
  return ur || (ur = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "default", {
      enumerable: !0,
      get: function() {
        return a;
      }
    });
    const t = he, n = typeof window > "u", r = n ? () => {
    } : t.useLayoutEffect, o = n ? () => {
    } : t.useEffect;
    function a(s) {
      const { headManager: l, reduceComponentsToState: i } = s;
      function p() {
        if (l && l.mountedInstances) {
          const x = t.Children.toArray(Array.from(l.mountedInstances).filter(Boolean));
          l.updateHead(i(x, s));
        }
      }
      if (n) {
        var g;
        l == null || (g = l.mountedInstances) == null || g.add(s.children), p();
      }
      return r(() => {
        var x;
        return l == null || (x = l.mountedInstances) == null || x.add(s.children), () => {
          var v;
          l == null || (v = l.mountedInstances) == null || v.delete(s.children);
        };
      }), r(() => (l && (l._pendingUpdate = p), () => {
        l && (l._pendingUpdate = p);
      })), o(() => (l && l._pendingUpdate && (l._pendingUpdate(), l._pendingUpdate = null), () => {
        l && l._pendingUpdate && (l._pendingUpdate(), l._pendingUpdate = null);
      })), null;
    }
  }(ut)), ut;
}
var dt = {}, dr;
function yo() {
  return dr || (dr = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "AmpStateContext", {
      enumerable: !0,
      get: function() {
        return r;
      }
    });
    const r = (/* @__PURE__ */ Ce._(he)).default.createContext({});
    process.env.NODE_ENV !== "production" && (r.displayName = "AmpStateContext");
  }(dt)), dt;
}
var ft = {}, fr;
function vo() {
  return fr || (fr = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "HeadManagerContext", {
      enumerable: !0,
      get: function() {
        return r;
      }
    });
    const r = (/* @__PURE__ */ Ce._(he)).default.createContext({});
    process.env.NODE_ENV !== "production" && (r.displayName = "HeadManagerContext");
  }(ft)), ft;
}
var pt = {}, pr;
function xo() {
  return pr || (pr = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "isInAmpMode", {
      enumerable: !0,
      get: function() {
        return t;
      }
    });
    function t(n) {
      let { ampFirst: r = !1, hybrid: o = !1, hasQuery: a = !1 } = n === void 0 ? {} : n;
      return r || o && a;
    }
  }(pt)), pt;
}
var hr;
function wo() {
  return hr || (hr = 1, function(e, t) {
    "use client";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function n(w, d) {
      for (var N in d) Object.defineProperty(w, N, {
        enumerable: !0,
        get: d[N]
      });
    }
    n(t, {
      defaultHead: function() {
        return x;
      },
      default: function() {
        return A;
      }
    });
    const r = Ce, a = /* @__PURE__ */ ze._(he), s = /* @__PURE__ */ r._(bo()), l = yo(), i = vo(), p = xo(), g = He;
    function x(w) {
      w === void 0 && (w = !1);
      const d = [
        /* @__PURE__ */ a.default.createElement("meta", {
          charSet: "utf-8"
        })
      ];
      return w || d.push(/* @__PURE__ */ a.default.createElement("meta", {
        name: "viewport",
        content: "width=device-width"
      })), d;
    }
    function v(w, d) {
      return typeof d == "string" || typeof d == "number" ? w : d.type === a.default.Fragment ? w.concat(
        // @ts-expect-error @types/react does not remove fragments but this could also return ReactPortal[]
        a.default.Children.toArray(d.props.children).reduce(
          // @ts-expect-error @types/react does not remove fragments but this could also return ReactPortal[]
          (N, C) => typeof C == "string" || typeof C == "number" ? N : N.concat(C),
          []
        )
      ) : w.concat(d);
    }
    const c = [
      "name",
      "httpEquiv",
      "charSet",
      "itemProp"
    ];
    function f() {
      const w = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set(), N = /* @__PURE__ */ new Set(), C = {};
      return (P) => {
        let _ = !0, b = !1;
        if (P.key && typeof P.key != "number" && P.key.indexOf("$") > 0) {
          b = !0;
          const I = P.key.slice(P.key.indexOf("$") + 1);
          w.has(I) ? _ = !1 : w.add(I);
        }
        switch (P.type) {
          case "title":
          case "base":
            d.has(P.type) ? _ = !1 : d.add(P.type);
            break;
          case "meta":
            for (let I = 0, y = c.length; I < y; I++) {
              const R = c[I];
              if (P.props.hasOwnProperty(R))
                if (R === "charSet")
                  N.has(R) ? _ = !1 : N.add(R);
                else {
                  const E = P.props[R], T = C[R] || /* @__PURE__ */ new Set();
                  (R !== "name" || !b) && T.has(E) ? _ = !1 : (T.add(E), C[R] = T);
                }
            }
            break;
        }
        return _;
      };
    }
    function m(w, d) {
      const { inAmpMode: N } = d;
      return w.reduce(v, []).reverse().concat(x(N).reverse()).filter(f()).reverse().map((C, P) => {
        const _ = C.key || P;
        if (process.env.NODE_ENV !== "development" && process.env.__NEXT_OPTIMIZE_FONTS && !N && C.type === "link" && C.props.href && // TODO(prateekbh@): Replace this with const from `constants` when the tree shaking works.
        [
          "https://fonts.googleapis.com/css",
          "https://use.typekit.net/"
        ].some((b) => C.props.href.startsWith(b))) {
          const b = {
            ...C.props || {}
          };
          return b["data-href"] = b.href, b.href = void 0, b["data-optimized-fonts"] = !0, /* @__PURE__ */ a.default.cloneElement(C, b);
        }
        if (process.env.NODE_ENV === "development")
          if (C.type === "script" && C.props.type !== "application/ld+json") {
            const b = C.props.src ? '<script> tag with src="' + C.props.src + '"' : "inline <script>";
            (0, g.warnOnce)("Do not add <script> tags using next/head (see " + b + `). Use next/script instead. 
See more info here: https://nextjs.org/docs/messages/no-script-tags-in-head-component`);
          } else C.type === "link" && C.props.rel === "stylesheet" && (0, g.warnOnce)('Do not add stylesheets using next/head (see <link rel="stylesheet"> tag with href="' + C.props.href + `"). Use Document instead. 
See more info here: https://nextjs.org/docs/messages/no-stylesheets-in-head-component`);
        return /* @__PURE__ */ a.default.cloneElement(C, {
          key: _
        });
      });
    }
    function h(w) {
      let { children: d } = w;
      const N = (0, a.useContext)(l.AmpStateContext), C = (0, a.useContext)(i.HeadManagerContext);
      return /* @__PURE__ */ a.default.createElement(s.default, {
        reduceComponentsToState: m,
        headManager: C,
        inAmpMode: (0, p.isInAmpMode)(N)
      }, d);
    }
    const A = h;
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(qe, qe.exports)), qe.exports;
}
var ht = {}, mr;
function _o() {
  return mr || (mr = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "ImageConfigContext", {
      enumerable: !0,
      get: function() {
        return o;
      }
    });
    const n = /* @__PURE__ */ Ce._(he), r = ot, o = n.default.createContext(r.imageConfigDefault);
    process.env.NODE_ENV !== "production" && (o.displayName = "ImageConfigContext");
  }(ht)), ht;
}
var mt = {}, gr;
function En() {
  return gr || (gr = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "RouterContext", {
      enumerable: !0,
      get: function() {
        return r;
      }
    });
    const r = (/* @__PURE__ */ Ce._(he)).default.createContext(null);
    process.env.NODE_ENV !== "production" && (r.displayName = "RouterContext");
  }(mt)), mt;
}
var gt = {}, bt = {}, yt = { exports: {} };
const Ro = {}, Co = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ro
}, Symbol.toStringTag, { value: "Module" })), Xt = /* @__PURE__ */ ho(Co);
var br;
function Eo() {
  return br || (br = 1, (() => {
    var e = { 333: (o, a, s) => {
      const l = s(137), i = s(179), p = s(13), g = s(719), x = (v, c = {}) => {
        let f = [];
        if (Array.isArray(v))
          for (let m of v) {
            let h = x.create(m, c);
            Array.isArray(h) ? f.push(...h) : f.push(h);
          }
        else
          f = [].concat(x.create(v, c));
        return c && c.expand === !0 && c.nodupes === !0 && (f = [...new Set(f)]), f;
      };
      x.parse = (v, c = {}) => g(v, c), x.stringify = (v, c = {}) => l(typeof v == "string" ? x.parse(v, c) : v, c), x.compile = (v, c = {}) => (typeof v == "string" && (v = x.parse(v, c)), i(v, c)), x.expand = (v, c = {}) => {
        typeof v == "string" && (v = x.parse(v, c));
        let f = p(v, c);
        return c.noempty === !0 && (f = f.filter(Boolean)), c.nodupes === !0 && (f = [...new Set(f)]), f;
      }, x.create = (v, c = {}) => v === "" || v.length < 3 ? [v] : c.expand !== !0 ? x.compile(v, c) : x.expand(v, c), o.exports = x;
    }, 179: (o, a, s) => {
      const l = s(783), i = s(617), p = (g, x = {}) => {
        let v = (c, f = {}) => {
          let m = i.isInvalidBrace(f), h = c.invalid === !0 && x.escapeInvalid === !0, A = m === !0 || h === !0, w = x.escapeInvalid === !0 ? "\\" : "", d = "";
          if (c.isOpen === !0 || c.isClose === !0)
            return w + c.value;
          if (c.type === "open")
            return A ? w + c.value : "(";
          if (c.type === "close")
            return A ? w + c.value : ")";
          if (c.type === "comma")
            return c.prev.type === "comma" ? "" : A ? c.value : "|";
          if (c.value)
            return c.value;
          if (c.nodes && c.ranges > 0) {
            let N = i.reduce(c.nodes), C = l(...N, { ...x, wrap: !1, toRegex: !0 });
            if (C.length !== 0)
              return N.length > 1 && C.length > 1 ? `(${C})` : C;
          }
          if (c.nodes)
            for (let N of c.nodes)
              d += v(N, c);
          return d;
        };
        return v(g);
      };
      o.exports = p;
    }, 457: (o) => {
      o.exports = { MAX_LENGTH: 65536, CHAR_0: "0", CHAR_9: "9", CHAR_UPPERCASE_A: "A", CHAR_LOWERCASE_A: "a", CHAR_UPPERCASE_Z: "Z", CHAR_LOWERCASE_Z: "z", CHAR_LEFT_PARENTHESES: "(", CHAR_RIGHT_PARENTHESES: ")", CHAR_ASTERISK: "*", CHAR_AMPERSAND: "&", CHAR_AT: "@", CHAR_BACKSLASH: "\\", CHAR_BACKTICK: "`", CHAR_CARRIAGE_RETURN: "\r", CHAR_CIRCUMFLEX_ACCENT: "^", CHAR_COLON: ":", CHAR_COMMA: ",", CHAR_DOLLAR: "$", CHAR_DOT: ".", CHAR_DOUBLE_QUOTE: '"', CHAR_EQUAL: "=", CHAR_EXCLAMATION_MARK: "!", CHAR_FORM_FEED: "\f", CHAR_FORWARD_SLASH: "/", CHAR_HASH: "#", CHAR_HYPHEN_MINUS: "-", CHAR_LEFT_ANGLE_BRACKET: "<", CHAR_LEFT_CURLY_BRACE: "{", CHAR_LEFT_SQUARE_BRACKET: "[", CHAR_LINE_FEED: `
`, CHAR_NO_BREAK_SPACE: " ", CHAR_PERCENT: "%", CHAR_PLUS: "+", CHAR_QUESTION_MARK: "?", CHAR_RIGHT_ANGLE_BRACKET: ">", CHAR_RIGHT_CURLY_BRACE: "}", CHAR_RIGHT_SQUARE_BRACKET: "]", CHAR_SEMICOLON: ";", CHAR_SINGLE_QUOTE: "'", CHAR_SPACE: " ", CHAR_TAB: "	", CHAR_UNDERSCORE: "_", CHAR_VERTICAL_LINE: "|", CHAR_ZERO_WIDTH_NOBREAK_SPACE: "\uFEFF" };
    }, 13: (o, a, s) => {
      const l = s(783), i = s(137), p = s(617), g = (v = "", c = "", f = !1) => {
        let m = [];
        if (v = [].concat(v), c = [].concat(c), !c.length) return v;
        if (!v.length)
          return f ? p.flatten(c).map((h) => `{${h}}`) : c;
        for (let h of v)
          if (Array.isArray(h))
            for (let A of h)
              m.push(g(A, c, f));
          else
            for (let A of c)
              f === !0 && typeof A == "string" && (A = `{${A}}`), m.push(Array.isArray(A) ? g(h, A, f) : h + A);
        return p.flatten(m);
      }, x = (v, c = {}) => {
        let f = c.rangeLimit === void 0 ? 1e3 : c.rangeLimit, m = (h, A = {}) => {
          h.queue = [];
          let w = A, d = A.queue;
          for (; w.type !== "brace" && w.type !== "root" && w.parent; )
            w = w.parent, d = w.queue;
          if (h.invalid || h.dollar) {
            d.push(g(d.pop(), i(h, c)));
            return;
          }
          if (h.type === "brace" && h.invalid !== !0 && h.nodes.length === 2) {
            d.push(g(d.pop(), ["{}"]));
            return;
          }
          if (h.nodes && h.ranges > 0) {
            let _ = p.reduce(h.nodes);
            if (p.exceedsLimit(..._, c.step, f))
              throw new RangeError("expanded array length exceeds range limit. Use options.rangeLimit to increase or disable the limit.");
            let b = l(..._, c);
            b.length === 0 && (b = i(h, c)), d.push(g(d.pop(), b)), h.nodes = [];
            return;
          }
          let N = p.encloseBrace(h), C = h.queue, P = h;
          for (; P.type !== "brace" && P.type !== "root" && P.parent; )
            P = P.parent, C = P.queue;
          for (let _ = 0; _ < h.nodes.length; _++) {
            let b = h.nodes[_];
            if (b.type === "comma" && h.type === "brace") {
              _ === 1 && C.push(""), C.push("");
              continue;
            }
            if (b.type === "close") {
              d.push(g(d.pop(), C, N));
              continue;
            }
            if (b.value && b.type !== "open") {
              C.push(g(C.pop(), b.value));
              continue;
            }
            b.nodes && m(b, h);
          }
          return C;
        };
        return p.flatten(m(v));
      };
      o.exports = x;
    }, 719: (o, a, s) => {
      const l = s(137), { MAX_LENGTH: i, CHAR_BACKSLASH: p, CHAR_BACKTICK: g, CHAR_COMMA: x, CHAR_DOT: v, CHAR_LEFT_PARENTHESES: c, CHAR_RIGHT_PARENTHESES: f, CHAR_LEFT_CURLY_BRACE: m, CHAR_RIGHT_CURLY_BRACE: h, CHAR_LEFT_SQUARE_BRACKET: A, CHAR_RIGHT_SQUARE_BRACKET: w, CHAR_DOUBLE_QUOTE: d, CHAR_SINGLE_QUOTE: N, CHAR_NO_BREAK_SPACE: C, CHAR_ZERO_WIDTH_NOBREAK_SPACE: P } = s(457), _ = (b, I = {}) => {
        if (typeof b != "string")
          throw new TypeError("Expected a string");
        let y = I || {}, R = typeof y.maxLength == "number" ? Math.min(i, y.maxLength) : i;
        if (b.length > R)
          throw new SyntaxError(`Input length (${b.length}), exceeds max characters (${R})`);
        let E = { type: "root", input: b, nodes: [] }, T = [E], S = E, H = E, q = 0, Q = b.length, L = 0, K = 0, j;
        const J = () => b[L++], X = (G) => {
          if (G.type === "text" && H.type === "dot" && (H.type = "text"), H && H.type === "text" && G.type === "text") {
            H.value += G.value;
            return;
          }
          return S.nodes.push(G), G.parent = S, G.prev = H, H = G, G;
        };
        for (X({ type: "bos" }); L < Q; )
          if (S = T[T.length - 1], j = J(), !(j === P || j === C)) {
            if (j === p) {
              X({ type: "text", value: (I.keepEscaping ? j : "") + J() });
              continue;
            }
            if (j === w) {
              X({ type: "text", value: "\\" + j });
              continue;
            }
            if (j === A) {
              q++;
              let G;
              for (; L < Q && (G = J()); ) {
                if (j += G, G === A) {
                  q++;
                  continue;
                }
                if (G === p) {
                  j += J();
                  continue;
                }
                if (G === w && (q--, q === 0))
                  break;
              }
              X({ type: "text", value: j });
              continue;
            }
            if (j === c) {
              S = X({ type: "paren", nodes: [] }), T.push(S), X({ type: "text", value: j });
              continue;
            }
            if (j === f) {
              if (S.type !== "paren") {
                X({ type: "text", value: j });
                continue;
              }
              S = T.pop(), X({ type: "text", value: j }), S = T[T.length - 1];
              continue;
            }
            if (j === d || j === N || j === g) {
              let G = j, B;
              for (I.keepQuotes !== !0 && (j = ""); L < Q && (B = J()); ) {
                if (B === p) {
                  j += B + J();
                  continue;
                }
                if (B === G) {
                  I.keepQuotes === !0 && (j += B);
                  break;
                }
                j += B;
              }
              X({ type: "text", value: j });
              continue;
            }
            if (j === m) {
              K++;
              let B = { type: "brace", open: !0, close: !1, dollar: H.value && H.value.slice(-1) === "$" || S.dollar === !0, depth: K, commas: 0, ranges: 0, nodes: [] };
              S = X(B), T.push(S), X({ type: "open", value: j });
              continue;
            }
            if (j === h) {
              if (S.type !== "brace") {
                X({ type: "text", value: j });
                continue;
              }
              let G = "close";
              S = T.pop(), S.close = !0, X({ type: G, value: j }), K--, S = T[T.length - 1];
              continue;
            }
            if (j === x && K > 0) {
              if (S.ranges > 0) {
                S.ranges = 0;
                let G = S.nodes.shift();
                S.nodes = [G, { type: "text", value: l(S) }];
              }
              X({ type: "comma", value: j }), S.commas++;
              continue;
            }
            if (j === v && K > 0 && S.commas === 0) {
              let G = S.nodes;
              if (K === 0 || G.length === 0) {
                X({ type: "text", value: j });
                continue;
              }
              if (H.type === "dot") {
                if (S.range = [], H.value += j, H.type = "range", S.nodes.length !== 3 && S.nodes.length !== 5) {
                  S.invalid = !0, S.ranges = 0, H.type = "text";
                  continue;
                }
                S.ranges++, S.args = [];
                continue;
              }
              if (H.type === "range") {
                G.pop();
                let B = G[G.length - 1];
                B.value += H.value + j, H = B, S.ranges--;
                continue;
              }
              X({ type: "dot", value: j });
              continue;
            }
            X({ type: "text", value: j });
          }
        do
          if (S = T.pop(), S.type !== "root") {
            S.nodes.forEach((te) => {
              te.nodes || (te.type === "open" && (te.isOpen = !0), te.type === "close" && (te.isClose = !0), te.nodes || (te.type = "text"), te.invalid = !0);
            });
            let G = T[T.length - 1], B = G.nodes.indexOf(S);
            G.nodes.splice(B, 1, ...S.nodes);
          }
        while (T.length > 0);
        return X({ type: "eos" }), E;
      };
      o.exports = _;
    }, 137: (o, a, s) => {
      const l = s(617);
      o.exports = (i, p = {}) => {
        let g = (x, v = {}) => {
          let c = p.escapeInvalid && l.isInvalidBrace(v), f = x.invalid === !0 && p.escapeInvalid === !0, m = "";
          if (x.value)
            return (c || f) && l.isOpenOrClose(x) ? "\\" + x.value : x.value;
          if (x.value)
            return x.value;
          if (x.nodes)
            for (let h of x.nodes)
              m += g(h);
          return m;
        };
        return g(i);
      };
    }, 617: (o, a) => {
      a.isInteger = (s) => typeof s == "number" ? Number.isInteger(s) : typeof s == "string" && s.trim() !== "" ? Number.isInteger(Number(s)) : !1, a.find = (s, l) => s.nodes.find((i) => i.type === l), a.exceedsLimit = (s, l, i = 1, p) => p === !1 || !a.isInteger(s) || !a.isInteger(l) ? !1 : (Number(l) - Number(s)) / Number(i) >= p, a.escapeNode = (s, l = 0, i) => {
        let p = s.nodes[l];
        p && (i && p.type === i || p.type === "open" || p.type === "close") && p.escaped !== !0 && (p.value = "\\" + p.value, p.escaped = !0);
      }, a.encloseBrace = (s) => s.type !== "brace" || s.commas >> 0 + s.ranges >> 0 ? !1 : (s.invalid = !0, !0), a.isInvalidBrace = (s) => s.type !== "brace" ? !1 : s.invalid === !0 || s.dollar ? !0 : !(s.commas >> 0 + s.ranges >> 0) || s.open !== !0 || s.close !== !0 ? (s.invalid = !0, !0) : !1, a.isOpenOrClose = (s) => s.type === "open" || s.type === "close" ? !0 : s.open === !0 || s.close === !0, a.reduce = (s) => s.reduce((l, i) => (i.type === "text" && l.push(i.value), i.type === "range" && (i.type = "text"), l), []), a.flatten = (...s) => {
        const l = [], i = (p) => {
          for (let g = 0; g < p.length; g++) {
            let x = p[g];
            Array.isArray(x) ? i(x) : x !== void 0 && l.push(x);
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
      const l = s(837), i = s(492), p = (y) => y !== null && typeof y == "object" && !Array.isArray(y), g = (y) => (R) => y === !0 ? Number(R) : String(R), x = (y) => typeof y == "number" || typeof y == "string" && y !== "", v = (y) => Number.isInteger(+y), c = (y) => {
        let R = `${y}`, E = -1;
        if (R[0] === "-" && (R = R.slice(1)), R === "0") return !1;
        for (; R[++E] === "0"; ) ;
        return E > 0;
      }, f = (y, R, E) => typeof y == "string" || typeof R == "string" ? !0 : E.stringify === !0, m = (y, R, E) => {
        if (R > 0) {
          let T = y[0] === "-" ? "-" : "";
          T && (y = y.slice(1)), y = T + y.padStart(T ? R - 1 : R, "0");
        }
        return E === !1 ? String(y) : y;
      }, h = (y, R) => {
        let E = y[0] === "-" ? "-" : "";
        for (E && (y = y.slice(1), R--); y.length < R; ) y = "0" + y;
        return E ? "-" + y : y;
      }, A = (y, R) => {
        y.negatives.sort((q, Q) => q < Q ? -1 : q > Q ? 1 : 0), y.positives.sort((q, Q) => q < Q ? -1 : q > Q ? 1 : 0);
        let E = R.capture ? "" : "?:", T = "", S = "", H;
        return y.positives.length && (T = y.positives.join("|")), y.negatives.length && (S = `-(${E}${y.negatives.join("|")})`), T && S ? H = `${T}|${S}` : H = T || S, R.wrap ? `(${E}${H})` : H;
      }, w = (y, R, E, T) => {
        if (E)
          return i(y, R, { wrap: !1, ...T });
        let S = String.fromCharCode(y);
        if (y === R) return S;
        let H = String.fromCharCode(R);
        return `[${S}-${H}]`;
      }, d = (y, R, E) => {
        if (Array.isArray(y)) {
          let T = E.wrap === !0, S = E.capture ? "" : "?:";
          return T ? `(${S}${y.join("|")})` : y.join("|");
        }
        return i(y, R, E);
      }, N = (...y) => new RangeError("Invalid range arguments: " + l.inspect(...y)), C = (y, R, E) => {
        if (E.strictRanges === !0) throw N([y, R]);
        return [];
      }, P = (y, R) => {
        if (R.strictRanges === !0)
          throw new TypeError(`Expected step "${y}" to be a number`);
        return [];
      }, _ = (y, R, E = 1, T = {}) => {
        let S = Number(y), H = Number(R);
        if (!Number.isInteger(S) || !Number.isInteger(H)) {
          if (T.strictRanges === !0) throw N([y, R]);
          return [];
        }
        S === 0 && (S = 0), H === 0 && (H = 0);
        let q = S > H, Q = String(y), L = String(R), K = String(E);
        E = Math.max(Math.abs(E), 1);
        let j = c(Q) || c(L) || c(K), J = j ? Math.max(Q.length, L.length, K.length) : 0, X = j === !1 && f(y, R, T) === !1, G = T.transform || g(X);
        if (T.toRegex && E === 1)
          return w(h(y, J), h(R, J), !0, T);
        let B = { negatives: [], positives: [] }, te = (M) => B[M < 0 ? "negatives" : "positives"].push(Math.abs(M)), se = [], Z = 0;
        for (; q ? S >= H : S <= H; )
          T.toRegex === !0 && E > 1 ? te(S) : se.push(m(G(S, Z), J, X)), S = q ? S - E : S + E, Z++;
        return T.toRegex === !0 ? E > 1 ? A(B, T) : d(se, null, { wrap: !1, ...T }) : se;
      }, b = (y, R, E = 1, T = {}) => {
        if (!v(y) && y.length > 1 || !v(R) && R.length > 1)
          return C(y, R, T);
        let S = T.transform || ((X) => String.fromCharCode(X)), H = `${y}`.charCodeAt(0), q = `${R}`.charCodeAt(0), Q = H > q, L = Math.min(H, q), K = Math.max(H, q);
        if (T.toRegex && E === 1)
          return w(L, K, !1, T);
        let j = [], J = 0;
        for (; Q ? H >= q : H <= q; )
          j.push(S(H, J)), H = Q ? H - E : H + E, J++;
        return T.toRegex === !0 ? d(j, null, { wrap: !1, options: T }) : j;
      }, I = (y, R, E, T = {}) => {
        if (R == null && x(y))
          return [y];
        if (!x(y) || !x(R))
          return C(y, R, T);
        if (typeof E == "function")
          return I(y, R, 1, { transform: E });
        if (p(E))
          return I(y, R, 0, E);
        let S = { ...T };
        return S.capture === !0 && (S.wrap = !0), E = E || S.step || 1, v(E) ? v(y) && v(R) ? _(y, R, E, S) : b(y, R, Math.max(Math.abs(E), 1), S) : E != null && !p(E) ? P(E, S) : I(y, R, 1, E);
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
      const l = s(837), i = s(333), p = s(251), g = s(513), x = (c) => c === "" || c === "./", v = (c, f, m) => {
        f = [].concat(f), c = [].concat(c);
        let h = /* @__PURE__ */ new Set(), A = /* @__PURE__ */ new Set(), w = /* @__PURE__ */ new Set(), d = 0, N = (_) => {
          w.add(_.output), m && m.onResult && m.onResult(_);
        };
        for (let _ = 0; _ < f.length; _++) {
          let b = p(String(f[_]), { ...m, onResult: N }, !0), I = b.state.negated || b.state.negatedExtglob;
          I && d++;
          for (let y of c) {
            let R = b(y, !0);
            (I ? !R.isMatch : R.isMatch) && (I ? h.add(R.output) : (h.delete(R.output), A.add(R.output)));
          }
        }
        let P = (d === f.length ? [...w] : [...A]).filter((_) => !h.has(_));
        if (m && P.length === 0) {
          if (m.failglob === !0)
            throw new Error(`No matches found for "${f.join(", ")}"`);
          if (m.nonull === !0 || m.nullglob === !0)
            return m.unescape ? f.map((_) => _.replace(/\\/g, "")) : f;
        }
        return P;
      };
      v.match = v, v.matcher = (c, f) => p(c, f), v.isMatch = (c, f, m) => p(f, m)(c), v.any = v.isMatch, v.not = (c, f, m = {}) => {
        f = [].concat(f).map(String);
        let h = /* @__PURE__ */ new Set(), A = [], d = v(c, f, { ...m, onResult: (N) => {
          m.onResult && m.onResult(N), A.push(N.output);
        } });
        for (let N of A)
          d.includes(N) || h.add(N);
        return [...h];
      }, v.contains = (c, f, m) => {
        if (typeof c != "string")
          throw new TypeError(`Expected a string: "${l.inspect(c)}"`);
        if (Array.isArray(f))
          return f.some((h) => v.contains(c, h, m));
        if (typeof f == "string") {
          if (x(c) || x(f))
            return !1;
          if (c.includes(f) || c.startsWith("./") && c.slice(2).includes(f))
            return !0;
        }
        return v.isMatch(c, f, { ...m, contains: !0 });
      }, v.matchKeys = (c, f, m) => {
        if (!g.isObject(c))
          throw new TypeError("Expected the first argument to be an object");
        let h = v(Object.keys(c), f, m), A = {};
        for (let w of h) A[w] = c[w];
        return A;
      }, v.some = (c, f, m) => {
        let h = [].concat(c);
        for (let A of [].concat(f)) {
          let w = p(String(A), m);
          if (h.some((d) => w(d)))
            return !0;
        }
        return !1;
      }, v.every = (c, f, m) => {
        let h = [].concat(c);
        for (let A of [].concat(f)) {
          let w = p(String(A), m);
          if (!h.every((d) => w(d)))
            return !1;
        }
        return !0;
      }, v.all = (c, f, m) => {
        if (typeof c != "string")
          throw new TypeError(`Expected a string: "${l.inspect(c)}"`);
        return [].concat(f).every((h) => p(h, m)(c));
      }, v.capture = (c, f, m) => {
        let h = g.isWindows(m), w = p.makeRe(String(c), { ...m, capture: !0 }).exec(h ? g.toPosixSlashes(f) : f);
        if (w)
          return w.slice(1).map((d) => d === void 0 ? "" : d);
      }, v.makeRe = (...c) => p.makeRe(...c), v.scan = (...c) => p.scan(...c), v.parse = (c, f) => {
        let m = [];
        for (let h of [].concat(c || []))
          for (let A of i(String(h), f))
            m.push(p.parse(A, f));
        return m;
      }, v.braces = (c, f) => {
        if (typeof c != "string") throw new TypeError("Expected a string");
        return f && f.nobrace === !0 || !/\{.*\}/.test(c) ? [c] : i(c, f);
      }, v.braceExpand = (c, f) => {
        if (typeof c != "string") throw new TypeError("Expected a string");
        return v.braces(c, { ...f, expand: !0 });
      }, o.exports = v;
    }, 251: (o, a, s) => {
      o.exports = s(683);
    }, 356: (o, a, s) => {
      const l = s(17), i = "\\\\/", p = `[^${i}]`, g = "\\.", x = "\\+", v = "\\?", c = "\\/", f = "(?=.)", m = "[^/]", h = `(?:${c}|$)`, A = `(?:^|${c})`, w = `${g}{1,2}${h}`, d = `(?!${g})`, N = `(?!${A}${w})`, C = `(?!${g}{0,1}${h})`, P = `(?!${w})`, _ = `[^.${c}]`, b = `${m}*?`, I = { DOT_LITERAL: g, PLUS_LITERAL: x, QMARK_LITERAL: v, SLASH_LITERAL: c, ONE_CHAR: f, QMARK: m, END_ANCHOR: h, DOTS_SLASH: w, NO_DOT: d, NO_DOTS: N, NO_DOT_SLASH: C, NO_DOTS_SLASH: P, QMARK_NO_DOT: _, STAR: b, START_ANCHOR: A }, y = { ...I, SLASH_LITERAL: `[${i}]`, QMARK: p, STAR: `${p}*?`, DOTS_SLASH: `${g}{1,2}(?:[${i}]|$)`, NO_DOT: `(?!${g})`, NO_DOTS: `(?!(?:^|[${i}])${g}{1,2}(?:[${i}]|$))`, NO_DOT_SLASH: `(?!${g}{0,1}(?:[${i}]|$))`, NO_DOTS_SLASH: `(?!${g}{1,2}(?:[${i}]|$))`, QMARK_NO_DOT: `[^.${i}]`, START_ANCHOR: `(?:^|[${i}])`, END_ANCHOR: `(?:[${i}]|$)` }, R = { alnum: "a-zA-Z0-9", alpha: "a-zA-Z", ascii: "\\x00-\\x7F", blank: " \\t", cntrl: "\\x00-\\x1F\\x7F", digit: "0-9", graph: "\\x21-\\x7E", lower: "a-z", print: "\\x20-\\x7E ", punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~", space: " \\t\\r\\n\\v\\f", upper: "A-Z", word: "A-Za-z0-9_", xdigit: "A-Fa-f0-9" };
      o.exports = { MAX_LENGTH: 65536, POSIX_REGEX_SOURCE: R, REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g, REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/, REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/, REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g, REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g, REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g, REPLACEMENTS: { "***": "*", "**/**": "**", "**/**/**": "**" }, CHAR_0: 48, CHAR_9: 57, CHAR_UPPERCASE_A: 65, CHAR_LOWERCASE_A: 97, CHAR_UPPERCASE_Z: 90, CHAR_LOWERCASE_Z: 122, CHAR_LEFT_PARENTHESES: 40, CHAR_RIGHT_PARENTHESES: 41, CHAR_ASTERISK: 42, CHAR_AMPERSAND: 38, CHAR_AT: 64, CHAR_BACKWARD_SLASH: 92, CHAR_CARRIAGE_RETURN: 13, CHAR_CIRCUMFLEX_ACCENT: 94, CHAR_COLON: 58, CHAR_COMMA: 44, CHAR_DOT: 46, CHAR_DOUBLE_QUOTE: 34, CHAR_EQUAL: 61, CHAR_EXCLAMATION_MARK: 33, CHAR_FORM_FEED: 12, CHAR_FORWARD_SLASH: 47, CHAR_GRAVE_ACCENT: 96, CHAR_HASH: 35, CHAR_HYPHEN_MINUS: 45, CHAR_LEFT_ANGLE_BRACKET: 60, CHAR_LEFT_CURLY_BRACE: 123, CHAR_LEFT_SQUARE_BRACKET: 91, CHAR_LINE_FEED: 10, CHAR_NO_BREAK_SPACE: 160, CHAR_PERCENT: 37, CHAR_PLUS: 43, CHAR_QUESTION_MARK: 63, CHAR_RIGHT_ANGLE_BRACKET: 62, CHAR_RIGHT_CURLY_BRACE: 125, CHAR_RIGHT_SQUARE_BRACKET: 93, CHAR_SEMICOLON: 59, CHAR_SINGLE_QUOTE: 39, CHAR_SPACE: 32, CHAR_TAB: 9, CHAR_UNDERSCORE: 95, CHAR_VERTICAL_LINE: 124, CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279, SEP: l.sep, extglobChars(E) {
        return { "!": { type: "negate", open: "(?:(?!(?:", close: `))${E.STAR})` }, "?": { type: "qmark", open: "(?:", close: ")?" }, "+": { type: "plus", open: "(?:", close: ")+" }, "*": { type: "star", open: "(?:", close: ")*" }, "@": { type: "at", open: "(?:", close: ")" } };
      }, globChars(E) {
        return E === !0 ? y : I;
      } };
    }, 754: (o, a, s) => {
      const l = s(356), i = s(513), { MAX_LENGTH: p, POSIX_REGEX_SOURCE: g, REGEX_NON_SPECIAL_CHARS: x, REGEX_SPECIAL_CHARS_BACKREF: v, REPLACEMENTS: c } = l, f = (A, w) => {
        if (typeof w.expandRange == "function")
          return w.expandRange(...A, w);
        A.sort();
        const d = `[${A.join("-")}]`;
        try {
          new RegExp(d);
        } catch {
          return A.map((C) => i.escapeRegex(C)).join("..");
        }
        return d;
      }, m = (A, w) => `Missing ${A}: "${w}" - use "\\\\${w}" to match literal characters`, h = (A, w) => {
        if (typeof A != "string")
          throw new TypeError("Expected a string");
        A = c[A] || A;
        const d = { ...w }, N = typeof d.maxLength == "number" ? Math.min(p, d.maxLength) : p;
        let C = A.length;
        if (C > N)
          throw new SyntaxError(`Input length: ${C}, exceeds maximum allowed length: ${N}`);
        const P = { type: "bos", value: "", output: d.prepend || "" }, _ = [P], b = d.capture ? "" : "?:", I = i.isWindows(w), y = l.globChars(I), R = l.extglobChars(y), { DOT_LITERAL: E, PLUS_LITERAL: T, SLASH_LITERAL: S, ONE_CHAR: H, DOTS_SLASH: q, NO_DOT: Q, NO_DOT_SLASH: L, NO_DOTS_SLASH: K, QMARK: j, QMARK_NO_DOT: J, STAR: X, START_ANCHOR: G } = y, B = (U) => `(${b}(?:(?!${G}${U.dot ? q : E}).)*?)`, te = d.dot ? "" : Q, se = d.dot ? j : J;
        let Z = d.bash === !0 ? B(d) : X;
        d.capture && (Z = `(${Z})`), typeof d.noext == "boolean" && (d.noextglob = d.noext);
        const M = { input: A, index: -1, start: 0, dot: d.dot === !0, consumed: "", output: "", prefix: "", backtrack: !1, negated: !1, brackets: 0, braces: 0, parens: 0, quotes: 0, globstar: !1, tokens: _ };
        A = i.removePrefix(A, M), C = A.length;
        const ce = [], oe = [], re = [];
        let O = P, k;
        const Y = () => M.index === C - 1, ie = M.peek = (U = 1) => A[M.index + U], we = M.advance = () => A[++M.index], fe = () => A.slice(M.index + 1), le = (U = "", F = 0) => {
          M.consumed += U, M.index += F;
        }, Re = (U) => {
          M.output += U.output != null ? U.output : U.value, le(U.value);
        }, be = () => {
          let U = 1;
          for (; ie() === "!" && (ie(2) !== "(" || ie(3) === "?"); )
            we(), M.start++, U++;
          return U % 2 === 0 ? !1 : (M.negated = !0, M.start++, !0);
        }, ee = (U) => {
          M[U]++, re.push(U);
        }, pe = (U) => {
          M[U]--, re.pop();
        }, z = (U) => {
          if (O.type === "globstar") {
            const F = M.braces > 0 && (U.type === "comma" || U.type === "brace"), D = U.extglob === !0 || ce.length && (U.type === "pipe" || U.type === "paren");
            U.type !== "slash" && U.type !== "paren" && !F && !D && (M.output = M.output.slice(0, -O.output.length), O.type = "star", O.value = "*", O.output = Z, M.output += O.output);
          }
          if (ce.length && U.type !== "paren" && !R[U.value] && (ce[ce.length - 1].inner += U.value), (U.value || U.output) && Re(U), O && O.type === "text" && U.type === "text") {
            O.value += U.value, O.output = (O.output || "") + U.value;
            return;
          }
          U.prev = O, _.push(U), O = U;
        }, ue = (U, F) => {
          const D = { ...R[F], conditions: 1, inner: "" };
          D.prev = O, D.parens = M.parens, D.output = M.output;
          const ae = (d.capture ? "(" : "") + D.open;
          ee("parens"), z({ type: U, value: F, output: M.output ? "" : H }), z({ type: "paren", extglob: !0, value: we(), output: ae }), ce.push(D);
        }, xe = (U) => {
          let F = U.close + (d.capture ? ")" : "");
          if (U.type === "negate") {
            let D = Z;
            U.inner && U.inner.length > 1 && U.inner.includes("/") && (D = B(d)), (D !== Z || Y() || /^\)+$/.test(fe())) && (F = U.close = `)$))${D}`), U.prev.type === "bos" && (M.negatedExtglob = !0);
          }
          z({ type: "paren", extglob: !0, value: k, output: F }), pe("parens");
        };
        if (d.fastpaths !== !1 && !/(^[*!]|[/()[\]{}"])/.test(A)) {
          let U = !1, F = A.replace(v, (D, ae, ge, _e, ye, lt) => _e === "\\" ? (U = !0, D) : _e === "?" ? ae ? ae + _e + (ye ? j.repeat(ye.length) : "") : lt === 0 ? se + (ye ? j.repeat(ye.length) : "") : j.repeat(ge.length) : _e === "." ? E.repeat(ge.length) : _e === "*" ? ae ? ae + _e + (ye ? Z : "") : Z : ae ? D : `\\${D}`);
          return U === !0 && (d.unescape === !0 ? F = F.replace(/\\/g, "") : F = F.replace(/\\+/g, (D) => D.length % 2 === 0 ? "\\\\" : D ? "\\" : "")), F === A && d.contains === !0 ? (M.output = A, M) : (M.output = i.wrapOutput(F, M, w), M);
        }
        for (; !Y(); ) {
          if (k = we(), k === "\0")
            continue;
          if (k === "\\") {
            const D = ie();
            if (D === "/" && d.bash !== !0 || D === "." || D === ";")
              continue;
            if (!D) {
              k += "\\", z({ type: "text", value: k });
              continue;
            }
            const ae = /^\\+/.exec(fe());
            let ge = 0;
            if (ae && ae[0].length > 2 && (ge = ae[0].length, M.index += ge, ge % 2 !== 0 && (k += "\\")), d.unescape === !0 ? k = we() || "" : k += we() || "", M.brackets === 0) {
              z({ type: "text", value: k });
              continue;
            }
          }
          if (M.brackets > 0 && (k !== "]" || O.value === "[" || O.value === "[^")) {
            if (d.posix !== !1 && k === ":") {
              const D = O.value.slice(1);
              if (D.includes("[") && (O.posix = !0, D.includes(":"))) {
                const ae = O.value.lastIndexOf("["), ge = O.value.slice(0, ae), _e = O.value.slice(ae + 2), ye = g[_e];
                if (ye) {
                  O.value = ge + ye, M.backtrack = !0, we(), !P.output && _.indexOf(O) === 1 && (P.output = H);
                  continue;
                }
              }
            }
            (k === "[" && ie() !== ":" || k === "-" && ie() === "]") && (k = `\\${k}`), k === "]" && (O.value === "[" || O.value === "[^") && (k = `\\${k}`), d.posix === !0 && k === "!" && O.value === "[" && (k = "^"), O.value += k, Re({ value: k });
            continue;
          }
          if (M.quotes === 1 && k !== '"') {
            k = i.escapeRegex(k), O.value += k, Re({ value: k });
            continue;
          }
          if (k === '"') {
            M.quotes = M.quotes === 1 ? 0 : 1, d.keepQuotes === !0 && z({ type: "text", value: k });
            continue;
          }
          if (k === "(") {
            ee("parens"), z({ type: "paren", value: k });
            continue;
          }
          if (k === ")") {
            if (M.parens === 0 && d.strictBrackets === !0)
              throw new SyntaxError(m("opening", "("));
            const D = ce[ce.length - 1];
            if (D && M.parens === D.parens + 1) {
              xe(ce.pop());
              continue;
            }
            z({ type: "paren", value: k, output: M.parens ? ")" : "\\)" }), pe("parens");
            continue;
          }
          if (k === "[") {
            if (d.nobracket === !0 || !fe().includes("]")) {
              if (d.nobracket !== !0 && d.strictBrackets === !0)
                throw new SyntaxError(m("closing", "]"));
              k = `\\${k}`;
            } else
              ee("brackets");
            z({ type: "bracket", value: k });
            continue;
          }
          if (k === "]") {
            if (d.nobracket === !0 || O && O.type === "bracket" && O.value.length === 1) {
              z({ type: "text", value: k, output: `\\${k}` });
              continue;
            }
            if (M.brackets === 0) {
              if (d.strictBrackets === !0)
                throw new SyntaxError(m("opening", "["));
              z({ type: "text", value: k, output: `\\${k}` });
              continue;
            }
            pe("brackets");
            const D = O.value.slice(1);
            if (O.posix !== !0 && D[0] === "^" && !D.includes("/") && (k = `/${k}`), O.value += k, Re({ value: k }), d.literalBrackets === !1 || i.hasRegexChars(D))
              continue;
            const ae = i.escapeRegex(O.value);
            if (M.output = M.output.slice(0, -O.value.length), d.literalBrackets === !0) {
              M.output += ae, O.value = ae;
              continue;
            }
            O.value = `(${b}${ae}|${O.value})`, M.output += O.value;
            continue;
          }
          if (k === "{" && d.nobrace !== !0) {
            ee("braces");
            const D = { type: "brace", value: k, output: "(", outputIndex: M.output.length, tokensIndex: M.tokens.length };
            oe.push(D), z(D);
            continue;
          }
          if (k === "}") {
            const D = oe[oe.length - 1];
            if (d.nobrace === !0 || !D) {
              z({ type: "text", value: k, output: k });
              continue;
            }
            let ae = ")";
            if (D.dots === !0) {
              const ge = _.slice(), _e = [];
              for (let ye = ge.length - 1; ye >= 0 && (_.pop(), ge[ye].type !== "brace"); ye--)
                ge[ye].type !== "dots" && _e.unshift(ge[ye].value);
              ae = f(_e, d), M.backtrack = !0;
            }
            if (D.comma !== !0 && D.dots !== !0) {
              const ge = M.output.slice(0, D.outputIndex), _e = M.tokens.slice(D.tokensIndex);
              D.value = D.output = "\\{", k = ae = "\\}", M.output = ge;
              for (const ye of _e)
                M.output += ye.output || ye.value;
            }
            z({ type: "brace", value: k, output: ae }), pe("braces"), oe.pop();
            continue;
          }
          if (k === "|") {
            ce.length > 0 && ce[ce.length - 1].conditions++, z({ type: "text", value: k });
            continue;
          }
          if (k === ",") {
            let D = k;
            const ae = oe[oe.length - 1];
            ae && re[re.length - 1] === "braces" && (ae.comma = !0, D = "|"), z({ type: "comma", value: k, output: D });
            continue;
          }
          if (k === "/") {
            if (O.type === "dot" && M.index === M.start + 1) {
              M.start = M.index + 1, M.consumed = "", M.output = "", _.pop(), O = P;
              continue;
            }
            z({ type: "slash", value: k, output: S });
            continue;
          }
          if (k === ".") {
            if (M.braces > 0 && O.type === "dot") {
              O.value === "." && (O.output = E);
              const D = oe[oe.length - 1];
              O.type = "dots", O.output += k, O.value += k, D.dots = !0;
              continue;
            }
            if (M.braces + M.parens === 0 && O.type !== "bos" && O.type !== "slash") {
              z({ type: "text", value: k, output: E });
              continue;
            }
            z({ type: "dot", value: k, output: E });
            continue;
          }
          if (k === "?") {
            if (!(O && O.value === "(") && d.noextglob !== !0 && ie() === "(" && ie(2) !== "?") {
              ue("qmark", k);
              continue;
            }
            if (O && O.type === "paren") {
              const ae = ie();
              let ge = k;
              if (ae === "<" && !i.supportsLookbehinds())
                throw new Error("Node.js v10 or higher is required for regex lookbehinds");
              (O.value === "(" && !/[!=<:]/.test(ae) || ae === "<" && !/<([!=]|\w+>)/.test(fe())) && (ge = `\\${k}`), z({ type: "text", value: k, output: ge });
              continue;
            }
            if (d.dot !== !0 && (O.type === "slash" || O.type === "bos")) {
              z({ type: "qmark", value: k, output: J });
              continue;
            }
            z({ type: "qmark", value: k, output: j });
            continue;
          }
          if (k === "!") {
            if (d.noextglob !== !0 && ie() === "(" && (ie(2) !== "?" || !/[!=<:]/.test(ie(3)))) {
              ue("negate", k);
              continue;
            }
            if (d.nonegate !== !0 && M.index === 0) {
              be();
              continue;
            }
          }
          if (k === "+") {
            if (d.noextglob !== !0 && ie() === "(" && ie(2) !== "?") {
              ue("plus", k);
              continue;
            }
            if (O && O.value === "(" || d.regex === !1) {
              z({ type: "plus", value: k, output: T });
              continue;
            }
            if (O && (O.type === "bracket" || O.type === "paren" || O.type === "brace") || M.parens > 0) {
              z({ type: "plus", value: k });
              continue;
            }
            z({ type: "plus", value: T });
            continue;
          }
          if (k === "@") {
            if (d.noextglob !== !0 && ie() === "(" && ie(2) !== "?") {
              z({ type: "at", extglob: !0, value: k, output: "" });
              continue;
            }
            z({ type: "text", value: k });
            continue;
          }
          if (k !== "*") {
            (k === "$" || k === "^") && (k = `\\${k}`);
            const D = x.exec(fe());
            D && (k += D[0], M.index += D[0].length), z({ type: "text", value: k });
            continue;
          }
          if (O && (O.type === "globstar" || O.star === !0)) {
            O.type = "star", O.star = !0, O.value += k, O.output = Z, M.backtrack = !0, M.globstar = !0, le(k);
            continue;
          }
          let U = fe();
          if (d.noextglob !== !0 && /^\([^?]/.test(U)) {
            ue("star", k);
            continue;
          }
          if (O.type === "star") {
            if (d.noglobstar === !0) {
              le(k);
              continue;
            }
            const D = O.prev, ae = D.prev, ge = D.type === "slash" || D.type === "bos", _e = ae && (ae.type === "star" || ae.type === "globstar");
            if (d.bash === !0 && (!ge || U[0] && U[0] !== "/")) {
              z({ type: "star", value: k, output: "" });
              continue;
            }
            const ye = M.braces > 0 && (D.type === "comma" || D.type === "brace"), lt = ce.length && (D.type === "pipe" || D.type === "paren");
            if (!ge && D.type !== "paren" && !ye && !lt) {
              z({ type: "star", value: k, output: "" });
              continue;
            }
            for (; U.slice(0, 3) === "/**"; ) {
              const De = A[M.index + 4];
              if (De && De !== "/")
                break;
              U = U.slice(3), le("/**", 3);
            }
            if (D.type === "bos" && Y()) {
              O.type = "globstar", O.value += k, O.output = B(d), M.output = O.output, M.globstar = !0, le(k);
              continue;
            }
            if (D.type === "slash" && D.prev.type !== "bos" && !_e && Y()) {
              M.output = M.output.slice(0, -(D.output + O.output).length), D.output = `(?:${D.output}`, O.type = "globstar", O.output = B(d) + (d.strictSlashes ? ")" : "|$)"), O.value += k, M.globstar = !0, M.output += D.output + O.output, le(k);
              continue;
            }
            if (D.type === "slash" && D.prev.type !== "bos" && U[0] === "/") {
              const De = U[1] !== void 0 ? "|$" : "";
              M.output = M.output.slice(0, -(D.output + O.output).length), D.output = `(?:${D.output}`, O.type = "globstar", O.output = `${B(d)}${S}|${S}${De})`, O.value += k, M.output += D.output + O.output, M.globstar = !0, le(k + we()), z({ type: "slash", value: "/", output: "" });
              continue;
            }
            if (D.type === "bos" && U[0] === "/") {
              O.type = "globstar", O.value += k, O.output = `(?:^|${S}|${B(d)}${S})`, M.output = O.output, M.globstar = !0, le(k + we()), z({ type: "slash", value: "/", output: "" });
              continue;
            }
            M.output = M.output.slice(0, -O.output.length), O.type = "globstar", O.output = B(d), O.value += k, M.output += O.output, M.globstar = !0, le(k);
            continue;
          }
          const F = { type: "star", value: k, output: Z };
          if (d.bash === !0) {
            F.output = ".*?", (O.type === "bos" || O.type === "slash") && (F.output = te + F.output), z(F);
            continue;
          }
          if (O && (O.type === "bracket" || O.type === "paren") && d.regex === !0) {
            F.output = k, z(F);
            continue;
          }
          (M.index === M.start || O.type === "slash" || O.type === "dot") && (O.type === "dot" ? (M.output += L, O.output += L) : d.dot === !0 ? (M.output += K, O.output += K) : (M.output += te, O.output += te), ie() !== "*" && (M.output += H, O.output += H)), z(F);
        }
        for (; M.brackets > 0; ) {
          if (d.strictBrackets === !0) throw new SyntaxError(m("closing", "]"));
          M.output = i.escapeLast(M.output, "["), pe("brackets");
        }
        for (; M.parens > 0; ) {
          if (d.strictBrackets === !0) throw new SyntaxError(m("closing", ")"));
          M.output = i.escapeLast(M.output, "("), pe("parens");
        }
        for (; M.braces > 0; ) {
          if (d.strictBrackets === !0) throw new SyntaxError(m("closing", "}"));
          M.output = i.escapeLast(M.output, "{"), pe("braces");
        }
        if (d.strictSlashes !== !0 && (O.type === "star" || O.type === "bracket") && z({ type: "maybe_slash", value: "", output: `${S}?` }), M.backtrack === !0) {
          M.output = "";
          for (const U of M.tokens)
            M.output += U.output != null ? U.output : U.value, U.suffix && (M.output += U.suffix);
        }
        return M;
      };
      h.fastpaths = (A, w) => {
        const d = { ...w }, N = typeof d.maxLength == "number" ? Math.min(p, d.maxLength) : p, C = A.length;
        if (C > N)
          throw new SyntaxError(`Input length: ${C}, exceeds maximum allowed length: ${N}`);
        A = c[A] || A;
        const P = i.isWindows(w), { DOT_LITERAL: _, SLASH_LITERAL: b, ONE_CHAR: I, DOTS_SLASH: y, NO_DOT: R, NO_DOTS: E, NO_DOTS_SLASH: T, STAR: S, START_ANCHOR: H } = l.globChars(P), q = d.dot ? E : R, Q = d.dot ? T : R, L = d.capture ? "" : "?:", K = { negated: !1, prefix: "" };
        let j = d.bash === !0 ? ".*?" : S;
        d.capture && (j = `(${j})`);
        const J = (te) => te.noglobstar === !0 ? j : `(${L}(?:(?!${H}${te.dot ? y : _}).)*?)`, X = (te) => {
          switch (te) {
            case "*":
              return `${q}${I}${j}`;
            case ".*":
              return `${_}${I}${j}`;
            case "*.*":
              return `${q}${j}${_}${I}${j}`;
            case "*/*":
              return `${q}${j}${b}${I}${Q}${j}`;
            case "**":
              return q + J(d);
            case "**/*":
              return `(?:${q}${J(d)}${b})?${Q}${I}${j}`;
            case "**/*.*":
              return `(?:${q}${J(d)}${b})?${Q}${j}${_}${I}${j}`;
            case "**/.*":
              return `(?:${q}${J(d)}${b})?${_}${I}${j}`;
            default: {
              const se = /^(.*?)\.(\w+)$/.exec(te);
              if (!se) return;
              const Z = X(se[1]);
              return Z ? Z + _ + se[2] : void 0;
            }
          }
        }, G = i.removePrefix(A, K);
        let B = X(G);
        return B && d.strictSlashes !== !0 && (B += `${b}?`), B;
      }, o.exports = h;
    }, 683: (o, a, s) => {
      const l = s(17), i = s(700), p = s(754), g = s(513), x = s(356), v = (f) => f && typeof f == "object" && !Array.isArray(f), c = (f, m, h = !1) => {
        if (Array.isArray(f)) {
          const b = f.map((y) => c(y, m, h));
          return (y) => {
            for (const R of b) {
              const E = R(y);
              if (E) return E;
            }
            return !1;
          };
        }
        const A = v(f) && f.tokens && f.input;
        if (f === "" || typeof f != "string" && !A)
          throw new TypeError("Expected pattern to be a non-empty string");
        const w = m || {}, d = g.isWindows(m), N = A ? c.compileRe(f, m) : c.makeRe(f, m, !1, !0), C = N.state;
        delete N.state;
        let P = () => !1;
        if (w.ignore) {
          const b = { ...m, ignore: null, onMatch: null, onResult: null };
          P = c(w.ignore, b, h);
        }
        const _ = (b, I = !1) => {
          const { isMatch: y, match: R, output: E } = c.test(b, N, m, { glob: f, posix: d }), T = { glob: f, state: C, regex: N, posix: d, input: b, output: E, match: R, isMatch: y };
          return typeof w.onResult == "function" && w.onResult(T), y === !1 ? (T.isMatch = !1, I ? T : !1) : P(b) ? (typeof w.onIgnore == "function" && w.onIgnore(T), T.isMatch = !1, I ? T : !1) : (typeof w.onMatch == "function" && w.onMatch(T), I ? T : !0);
        };
        return h && (_.state = C), _;
      };
      c.test = (f, m, h, { glob: A, posix: w } = {}) => {
        if (typeof f != "string")
          throw new TypeError("Expected input to be a string");
        if (f === "")
          return { isMatch: !1, output: "" };
        const d = h || {}, N = d.format || (w ? g.toPosixSlashes : null);
        let C = f === A, P = C && N ? N(f) : f;
        return C === !1 && (P = N ? N(f) : f, C = P === A), (C === !1 || d.capture === !0) && (d.matchBase === !0 || d.basename === !0 ? C = c.matchBase(f, m, h, w) : C = m.exec(P)), { isMatch: !!C, match: C, output: P };
      }, c.matchBase = (f, m, h, A = g.isWindows(h)) => (m instanceof RegExp ? m : c.makeRe(m, h)).test(l.basename(f)), c.isMatch = (f, m, h) => c(m, h)(f), c.parse = (f, m) => Array.isArray(f) ? f.map((h) => c.parse(h, m)) : p(f, { ...m, fastpaths: !1 }), c.scan = (f, m) => i(f, m), c.compileRe = (f, m, h = !1, A = !1) => {
        if (h === !0)
          return f.output;
        const w = m || {}, d = w.contains ? "" : "^", N = w.contains ? "" : "$";
        let C = `${d}(?:${f.output})${N}`;
        f && f.negated === !0 && (C = `^(?!${C}).*$`);
        const P = c.toRegex(C, m);
        return A === !0 && (P.state = f), P;
      }, c.makeRe = (f, m, h = !1, A = !1) => {
        if (!f || typeof f != "string")
          throw new TypeError("Expected a non-empty string");
        const w = m || {};
        let d = { negated: !1, fastpaths: !0 }, N = "", C;
        return f.startsWith("./") && (f = f.slice(2), N = d.prefix = "./"), w.fastpaths !== !1 && (f[0] === "." || f[0] === "*") && (C = p.fastpaths(f, m)), C === void 0 ? (d = p(f, m), d.prefix = N + (d.prefix || "")) : d.output = C, c.compileRe(d, m, h, A);
      }, c.toRegex = (f, m) => {
        try {
          const h = m || {};
          return new RegExp(f, h.flags || (h.nocase ? "i" : ""));
        } catch (h) {
          if (m && m.debug === !0) throw h;
          return /$^/;
        }
      }, c.constants = x, o.exports = c;
    }, 700: (o, a, s) => {
      const l = s(513), { CHAR_ASTERISK: i, CHAR_AT: p, CHAR_BACKWARD_SLASH: g, CHAR_COMMA: x, CHAR_DOT: v, CHAR_EXCLAMATION_MARK: c, CHAR_FORWARD_SLASH: f, CHAR_LEFT_CURLY_BRACE: m, CHAR_LEFT_PARENTHESES: h, CHAR_LEFT_SQUARE_BRACKET: A, CHAR_PLUS: w, CHAR_QUESTION_MARK: d, CHAR_RIGHT_CURLY_BRACE: N, CHAR_RIGHT_PARENTHESES: C, CHAR_RIGHT_SQUARE_BRACKET: P } = s(356), _ = (y) => y === f || y === g, b = (y) => {
        y.isPrefix !== !0 && (y.depth = y.isGlobstar ? 1 / 0 : 1);
      }, I = (y, R) => {
        const E = R || {}, T = y.length - 1, S = E.parts === !0 || E.scanToEnd === !0, H = [], q = [], Q = [];
        let L = y, K = -1, j = 0, J = 0, X = !1, G = !1, B = !1, te = !1, se = !1, Z = !1, M = !1, ce = !1, oe = !1, re = 0, O, k, Y = { value: "", depth: 0, isGlob: !1 };
        const ie = () => K >= T, we = () => L.charCodeAt(K + 1), fe = () => (O = k, L.charCodeAt(++K));
        for (; K < T; ) {
          k = fe();
          let pe;
          if (k === g) {
            M = Y.backslashes = !0, k = fe(), k === m && (Z = !0);
            continue;
          }
          if (Z === !0 || k === m) {
            for (re++; ie() !== !0 && (k = fe()); ) {
              if (k === g) {
                M = Y.backslashes = !0, fe();
                continue;
              }
              if (k === m) {
                re++;
                continue;
              }
              if (Z !== !0 && k === v && (k = fe()) === v) {
                if (X = Y.isBrace = !0, B = Y.isGlob = !0, oe = !0, S === !0)
                  continue;
                break;
              }
              if (Z !== !0 && k === x) {
                if (X = Y.isBrace = !0, B = Y.isGlob = !0, oe = !0, S === !0)
                  continue;
                break;
              }
              if (k === N && (re--, re === 0)) {
                Z = !1, X = Y.isBrace = !0, oe = !0;
                break;
              }
            }
            if (S === !0)
              continue;
            break;
          }
          if (k === f) {
            if (H.push(K), q.push(Y), Y = { value: "", depth: 0, isGlob: !1 }, oe === !0) continue;
            if (O === v && K === j + 1) {
              j += 2;
              continue;
            }
            J = K + 1;
            continue;
          }
          if (E.noext !== !0 && (k === w || k === p || k === i || k === d || k === c) === !0 && we() === h) {
            if (B = Y.isGlob = !0, te = Y.isExtglob = !0, oe = !0, S === !0) {
              for (; ie() !== !0 && (k = fe()); ) {
                if (k === g) {
                  M = Y.backslashes = !0, k = fe();
                  continue;
                }
                if (k === C) {
                  B = Y.isGlob = !0, oe = !0;
                  break;
                }
              }
              continue;
            }
            break;
          }
          if (k === i) {
            if (O === i && (se = Y.isGlobstar = !0), B = Y.isGlob = !0, oe = !0, S === !0)
              continue;
            break;
          }
          if (k === d) {
            if (B = Y.isGlob = !0, oe = !0, S === !0)
              continue;
            break;
          }
          if (k === A) {
            for (; ie() !== !0 && (pe = fe()); ) {
              if (pe === g) {
                M = Y.backslashes = !0, fe();
                continue;
              }
              if (pe === P) {
                G = Y.isBracket = !0, B = Y.isGlob = !0, oe = !0;
                break;
              }
            }
            if (S === !0)
              continue;
            break;
          }
          if (E.nonegate !== !0 && k === c && K === j) {
            ce = Y.negated = !0, j++;
            continue;
          }
          if (E.noparen !== !0 && k === h) {
            if (B = Y.isGlob = !0, S === !0) {
              for (; ie() !== !0 && (k = fe()); ) {
                if (k === h) {
                  M = Y.backslashes = !0, k = fe();
                  continue;
                }
                if (k === C) {
                  oe = !0;
                  break;
                }
              }
              continue;
            }
            break;
          }
          if (B === !0) {
            if (oe = !0, S === !0)
              continue;
            break;
          }
        }
        E.noext === !0 && (te = !1, B = !1);
        let le = L, Re = "", be = "";
        j > 0 && (Re = L.slice(0, j), L = L.slice(j), J -= j), le && B === !0 && J > 0 ? (le = L.slice(0, J), be = L.slice(J)) : B === !0 ? (le = "", be = L) : le = L, le && le !== "" && le !== "/" && le !== L && _(le.charCodeAt(le.length - 1)) && (le = le.slice(0, -1)), E.unescape === !0 && (be && (be = l.removeBackslashes(be)), le && M === !0 && (le = l.removeBackslashes(le)));
        const ee = { prefix: Re, input: y, start: j, base: le, glob: be, isBrace: X, isBracket: G, isGlob: B, isExtglob: te, isGlobstar: se, negated: ce };
        if (E.tokens === !0 && (ee.maxDepth = 0, _(k) || q.push(Y), ee.tokens = q), E.parts === !0 || E.tokens === !0) {
          let pe;
          for (let z = 0; z < H.length; z++) {
            const ue = pe ? pe + 1 : j, xe = H[z], U = y.slice(ue, xe);
            E.tokens && (z === 0 && j !== 0 ? (q[z].isPrefix = !0, q[z].value = Re) : q[z].value = U, b(q[z]), ee.maxDepth += q[z].depth), (z !== 0 || U !== "") && Q.push(U), pe = xe;
          }
          if (pe && pe + 1 < y.length) {
            const z = y.slice(pe + 1);
            Q.push(z), E.tokens && (q[q.length - 1].value = z, b(q[q.length - 1]), ee.maxDepth += q[q.length - 1].depth);
          }
          ee.slashes = H, ee.parts = Q;
        }
        return ee;
      };
      o.exports = I;
    }, 513: (o, a, s) => {
      const l = s(17), i = process.platform === "win32", { REGEX_BACKSLASH: p, REGEX_REMOVE_BACKSLASH: g, REGEX_SPECIAL_CHARS: x, REGEX_SPECIAL_CHARS_GLOBAL: v } = s(356);
      a.isObject = (c) => c !== null && typeof c == "object" && !Array.isArray(c), a.hasRegexChars = (c) => x.test(c), a.isRegexChar = (c) => c.length === 1 && a.hasRegexChars(c), a.escapeRegex = (c) => c.replace(v, "\\$1"), a.toPosixSlashes = (c) => c.replace(p, "/"), a.removeBackslashes = (c) => c.replace(g, (f) => f === "\\" ? "" : f), a.supportsLookbehinds = () => {
        const c = process.version.slice(1).split(".").map(Number);
        return c.length === 3 && c[0] >= 9 || c[0] === 8 && c[1] >= 10;
      }, a.isWindows = (c) => c && typeof c.windows == "boolean" ? c.windows : i === !0 || l.sep === "\\", a.escapeLast = (c, f, m) => {
        const h = c.lastIndexOf(f, m);
        return h === -1 ? c : c[h - 1] === "\\" ? a.escapeLast(c, f, h - 1) : `${c.slice(0, h)}\\${c.slice(h)}`;
      }, a.removePrefix = (c, f = {}) => {
        let m = c;
        return m.startsWith("./") && (m = m.slice(2), f.prefix = "./"), m;
      }, a.wrapOutput = (c, f = {}, m = {}) => {
        const h = m.contains ? "" : "^", A = m.contains ? "" : "$";
        let w = `${h}(?:${c})${A}`;
        return f.negated === !0 && (w = `(?:^(?!${w}).*$)`), w;
      };
    }, 492: (o, a, s) => {
      /*!
       * to-regex-range <https://github.com/micromatch/to-regex-range>
       *
       * Copyright (c) 2015-present, Jon Schlinkert.
       * Released under the MIT License.
       */
      const l = s(357), i = (_, b, I) => {
        if (l(_) === !1)
          throw new TypeError("toRegexRange: expected the first argument to be a number");
        if (b === void 0 || _ === b)
          return String(_);
        if (l(b) === !1)
          throw new TypeError("toRegexRange: expected the second argument to be a number.");
        let y = { relaxZeros: !0, ...I };
        typeof y.strictZeros == "boolean" && (y.relaxZeros = y.strictZeros === !1);
        let R = String(y.relaxZeros), E = String(y.shorthand), T = String(y.capture), S = String(y.wrap), H = _ + ":" + b + "=" + R + E + T + S;
        if (i.cache.hasOwnProperty(H))
          return i.cache[H].result;
        let q = Math.min(_, b), Q = Math.max(_, b);
        if (Math.abs(q - Q) === 1) {
          let X = _ + "|" + b;
          return y.capture ? `(${X})` : y.wrap === !1 ? X : `(?:${X})`;
        }
        let L = C(_) || C(b), K = { min: _, max: b, a: q, b: Q }, j = [], J = [];
        if (L && (K.isPadded = L, K.maxLen = String(K.max).length), q < 0) {
          let X = Q < 0 ? Math.abs(Q) : 1;
          J = v(X, Math.abs(q), K, y), q = K.a = 0;
        }
        return Q >= 0 && (j = v(q, Q, K, y)), K.negatives = J, K.positives = j, K.result = p(J, j), y.capture === !0 ? K.result = `(${K.result})` : y.wrap !== !1 && j.length + J.length > 1 && (K.result = `(?:${K.result})`), i.cache[H] = K, K.result;
      };
      function p(_, b, I) {
        let y = c(_, b, "-", !1) || [], R = c(b, _, "", !1) || [], E = c(_, b, "-?", !0) || [];
        return y.concat(E).concat(R).join("|");
      }
      function g(_, b) {
        let I = 1, y = 1, R = A(_, I), E = /* @__PURE__ */ new Set([b]);
        for (; _ <= R && R <= b; )
          E.add(R), I += 1, R = A(_, I);
        for (R = w(b + 1, y) - 1; _ < R && R <= b; )
          E.add(R), y += 1, R = w(b + 1, y) - 1;
        return E = [...E], E.sort(m), E;
      }
      function x(_, b, I) {
        if (_ === b)
          return { pattern: _, count: [], digits: 0 };
        let y = f(_, b), R = y.length, E = "", T = 0;
        for (let S = 0; S < R; S++) {
          let [H, q] = y[S];
          H === q ? E += H : H !== "0" || q !== "9" ? E += N(H, q) : T++;
        }
        return T && (E += I.shorthand === !0 ? "\\d" : "[0-9]"), { pattern: E, count: [T], digits: R };
      }
      function v(_, b, I, y) {
        let R = g(_, b), E = [], T = _, S;
        for (let H = 0; H < R.length; H++) {
          let q = R[H], Q = x(String(T), String(q), y), L = "";
          if (!I.isPadded && S && S.pattern === Q.pattern) {
            S.count.length > 1 && S.count.pop(), S.count.push(Q.count[0]), S.string = S.pattern + d(S.count), T = q + 1;
            continue;
          }
          I.isPadded && (L = P(q, I, y)), Q.string = L + Q.pattern + d(Q.count), E.push(Q), T = q + 1, S = Q;
        }
        return E;
      }
      function c(_, b, I, y, R) {
        let E = [];
        for (let T of _) {
          let { string: S } = T;
          !y && !h(b, "string", S) && E.push(I + S), y && h(b, "string", S) && E.push(I + S);
        }
        return E;
      }
      function f(_, b) {
        let I = [];
        for (let y = 0; y < _.length; y++) I.push([_[y], b[y]]);
        return I;
      }
      function m(_, b) {
        return _ > b ? 1 : b > _ ? -1 : 0;
      }
      function h(_, b, I) {
        return _.some((y) => y[b] === I);
      }
      function A(_, b) {
        return Number(String(_).slice(0, -b) + "9".repeat(b));
      }
      function w(_, b) {
        return _ - _ % Math.pow(10, b);
      }
      function d(_) {
        let [b = 0, I = ""] = _;
        return I || b > 1 ? `{${b + (I ? "," + I : "")}}` : "";
      }
      function N(_, b, I) {
        return `[${_}${b - _ === 1 ? "" : "-"}${b}]`;
      }
      function C(_) {
        return /^-?(0+)\d/.test(_);
      }
      function P(_, b, I) {
        if (!b.isPadded)
          return _;
        let y = Math.abs(b.maxLen - String(_).length), R = I.relaxZeros !== !1;
        switch (y) {
          case 0:
            return "";
          case 1:
            return R ? "0?" : "0";
          case 2:
            return R ? "0{0,2}" : "00";
          default:
            return R ? `0{0,${y}}` : `0{${y}}`;
        }
      }
      i.cache = {}, i.clearCache = () => i.cache = {}, o.exports = i;
    }, 17: (o) => {
      o.exports = Xt;
    }, 837: (o) => {
      o.exports = Xt;
    } }, t = {};
    function n(o) {
      var a = t[o];
      if (a !== void 0)
        return a.exports;
      var s = t[o] = { exports: {} }, l = !0;
      try {
        e[o](s, s.exports, n), l = !1;
      } finally {
        l && delete t[o];
      }
      return s.exports;
    }
    typeof n < "u" && (n.ab = __dirname + "/");
    var r = n(971);
    yt.exports = r;
  })()), yt.exports;
}
var yr;
function No() {
  return yr || (yr = 1, function(e) {
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
        return r;
      },
      hasMatch: function() {
        return o;
      }
    });
    const n = Eo();
    function r(a, s) {
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
      if (!(0, n.makeRe)(a.hostname).test(s.hostname))
        return !1;
      var l;
      return !!(0, n.makeRe)((l = a.pathname) != null ? l : "**").test(s.pathname);
    }
    function o(a, s, l) {
      return a.some((i) => l.hostname === i) || s.some((i) => r(i, l));
    }
  }(bt)), bt;
}
var vr;
function Nn() {
  return vr || (vr = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "default", {
      enumerable: !0,
      get: function() {
        return n;
      }
    });
    function t(r) {
      let { config: o, src: a, width: s, quality: l } = r;
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
          let p;
          try {
            p = new URL(a);
          } catch (g) {
            throw console.error(g), new Error('Failed to parse src "' + a + '" on `next/image`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)');
          }
          if (process.env.NODE_ENV !== "test" && // micromatch isn't compatible with edge runtime
          process.env.NEXT_RUNTIME !== "edge") {
            const { hasMatch: g } = No();
            if (!g(o.domains, o.remotePatterns, p))
              throw new Error("Invalid src prop (" + a + ') on `next/image`, hostname "' + p.hostname + '" is not configured under images in your `next.config.js`\nSee more info: https://nextjs.org/docs/messages/next-image-unconfigured-host');
          }
        }
      }
      return o.path + "?url=" + encodeURIComponent(a) + "&w=" + s + "&q=" + (l || 75) + (process.env.NEXT_DEPLOYMENT_ID ? "&dpl=" + process.env.NEXT_DEPLOYMENT_ID : "");
    }
    t.__next_img_default = !0;
    const n = t;
  }(gt)), gt;
}
(function(e, t) {
  "use client";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "Image", {
    enumerable: !0,
    get: function() {
      return w;
    }
  });
  const n = Ce, o = /* @__PURE__ */ ze._(he), a = /* @__PURE__ */ n._(Kn), s = /* @__PURE__ */ n._(wo()), l = ar, i = ot, p = _o(), g = He, x = En(), v = /* @__PURE__ */ n._(Nn()), c = process.env.__NEXT_IMAGE_OPTS;
  typeof window > "u" && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
  function f(d, N, C, P, _, b) {
    const I = d == null ? void 0 : d.src;
    if (!d || d["data-loaded-src"] === I)
      return;
    d["data-loaded-src"] = I, ("decode" in d ? d.decode() : Promise.resolve()).catch(() => {
    }).then(() => {
      if (!(!d.parentElement || !d.isConnected)) {
        if (N !== "empty" && _(!0), C != null && C.current) {
          const R = new Event("load");
          Object.defineProperty(R, "target", {
            writable: !1,
            value: d
          });
          let E = !1, T = !1;
          C.current({
            ...R,
            nativeEvent: R,
            currentTarget: d,
            target: d,
            isDefaultPrevented: () => E,
            isPropagationStopped: () => T,
            persist: () => {
            },
            preventDefault: () => {
              E = !0, R.preventDefault();
            },
            stopPropagation: () => {
              T = !0, R.stopPropagation();
            }
          });
        }
        if (P != null && P.current && P.current(d), process.env.NODE_ENV !== "production") {
          const R = new URL(I, "http://n").searchParams.get("url") || I;
          if (d.getAttribute("data-nimg") === "fill") {
            if (!b && (!d.getAttribute("sizes") || d.getAttribute("sizes") === "100vw") && d.getBoundingClientRect().width / window.innerWidth < 0.6 && (0, g.warnOnce)('Image with src "' + R + '" has "fill" but is missing "sizes" prop. Please add it to improve page performance. Read more: https://nextjs.org/docs/api-reference/next/image#sizes'), d.parentElement) {
              const { position: S } = window.getComputedStyle(d.parentElement), H = [
                "absolute",
                "fixed",
                "relative"
              ];
              H.includes(S) || (0, g.warnOnce)('Image with src "' + R + '" has "fill" and parent element with invalid "position". Provided "' + S + '" should be one of ' + H.map(String).join(",") + ".");
            }
            d.height === 0 && (0, g.warnOnce)('Image with src "' + R + '" has "fill" and a height value of 0. This is likely because the parent element of the image has not been styled to have a set height.');
          }
          const E = d.height.toString() !== d.getAttribute("height"), T = d.width.toString() !== d.getAttribute("width");
          (E && !T || !E && T) && (0, g.warnOnce)('Image with src "' + R + `" has either width or height modified, but not the other. If you use CSS to change the size of your image, also include the styles 'width: "auto"' or 'height: "auto"' to maintain the aspect ratio.`);
        }
      }
    });
  }
  function m(d) {
    const [N, C] = o.version.split(".", 2), P = parseInt(N, 10), _ = parseInt(C, 10);
    return P > 18 || P === 18 && _ >= 3 ? {
      fetchPriority: d
    } : {
      fetchpriority: d
    };
  }
  const h = /* @__PURE__ */ (0, o.forwardRef)((d, N) => {
    let { src: C, srcSet: P, sizes: _, height: b, width: I, decoding: y, className: R, style: E, fetchPriority: T, placeholder: S, loading: H, unoptimized: q, fill: Q, onLoadRef: L, onLoadingCompleteRef: K, setBlurComplete: j, setShowAltText: J, onLoad: X, onError: G, ...B } = d;
    return /* @__PURE__ */ o.default.createElement("img", {
      ...B,
      ...m(T),
      // It's intended to keep `loading` before `src` because React updates
      // props in order which causes Safari/Firefox to not lazy load properly.
      // See https://github.com/facebook/react/issues/25883
      loading: H,
      width: I,
      height: b,
      decoding: y,
      "data-nimg": Q ? "fill" : "1",
      className: R,
      style: E,
      // It's intended to keep `src` the last attribute because React updates
      // attributes in order. If we keep `src` the first one, Safari will
      // immediately start to fetch `src`, before `sizes` and `srcSet` are even
      // updated by React. That causes multiple unnecessary requests if `srcSet`
      // and `sizes` are defined.
      // This bug cannot be reproduced in Chrome or Firefox.
      sizes: _,
      srcSet: P,
      src: C,
      ref: (0, o.useCallback)((te) => {
        N && (typeof N == "function" ? N(te) : typeof N == "object" && (N.current = te)), te && (G && (te.src = te.src), process.env.NODE_ENV !== "production" && (C || console.error('Image is missing required "src" property:', te), te.getAttribute("alt") === null && console.error('Image is missing required "alt" property. Please add Alternative Text to describe the image for screen readers and search engines.')), te.complete && f(te, S, L, K, j, q));
      }, [
        C,
        S,
        L,
        K,
        j,
        G,
        q,
        N
      ]),
      onLoad: (te) => {
        const se = te.currentTarget;
        f(se, S, L, K, j, q);
      },
      onError: (te) => {
        J(!0), S !== "empty" && j(!0), G && G(te);
      }
    });
  });
  function A(d) {
    let { isAppRouter: N, imgAttributes: C } = d;
    const P = {
      as: "image",
      imageSrcSet: C.srcSet,
      imageSizes: C.sizes,
      crossOrigin: C.crossOrigin,
      referrerPolicy: C.referrerPolicy,
      ...m(C.fetchPriority)
    };
    return N && a.default.preload ? (a.default.preload(
      C.src,
      // @ts-expect-error TODO: upgrade to `@types/react-dom@18.3.x`
      P
    ), null) : /* @__PURE__ */ o.default.createElement(s.default, null, /* @__PURE__ */ o.default.createElement("link", {
      key: "__nimg-" + C.src + C.srcSet + C.sizes,
      rel: "preload",
      // Note how we omit the `href` attribute, as it would only be relevant
      // for browsers that do not support `imagesrcset`, and in those cases
      // it would cause the incorrect image to be preloaded.
      //
      // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
      href: C.srcSet ? void 0 : C.src,
      ...P
    }));
  }
  const w = /* @__PURE__ */ (0, o.forwardRef)((d, N) => {
    const P = !(0, o.useContext)(x.RouterContext), _ = (0, o.useContext)(p.ImageConfigContext), b = (0, o.useMemo)(() => {
      const K = c || _ || i.imageConfigDefault, j = [
        ...K.deviceSizes,
        ...K.imageSizes
      ].sort((X, G) => X - G), J = K.deviceSizes.sort((X, G) => X - G);
      return {
        ...K,
        allSizes: j,
        deviceSizes: J
      };
    }, [
      _
    ]), { onLoad: I, onLoadingComplete: y } = d, R = (0, o.useRef)(I);
    (0, o.useEffect)(() => {
      R.current = I;
    }, [
      I
    ]);
    const E = (0, o.useRef)(y);
    (0, o.useEffect)(() => {
      E.current = y;
    }, [
      y
    ]);
    const [T, S] = (0, o.useState)(!1), [H, q] = (0, o.useState)(!1), { props: Q, meta: L } = (0, l.getImgProps)(d, {
      defaultLoader: v.default,
      imgConf: b,
      blurComplete: T,
      showAltText: H
    });
    return /* @__PURE__ */ o.default.createElement(o.default.Fragment, null, /* @__PURE__ */ o.default.createElement(h, {
      ...Q,
      unoptimized: L.unoptimized,
      placeholder: L.placeholder,
      fill: L.fill,
      onLoadRef: R,
      onLoadingCompleteRef: E,
      setBlurComplete: S,
      setShowAltText: q,
      ref: N
    }), L.priority ? /* @__PURE__ */ o.default.createElement(A, {
      isAppRouter: P,
      imgAttributes: Q
    }) : null);
  });
  (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
})(Kt, Kt.exports);
var Ao = Kt.exports;
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(p, g) {
    for (var x in g) Object.defineProperty(p, x, {
      enumerable: !0,
      get: g[x]
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
  const n = Ce, r = ar, o = He, a = Ao, s = /* @__PURE__ */ n._(Nn()), l = (p) => {
    (0, o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");
    const { props: g } = (0, r.getImgProps)(p, {
      defaultLoader: s.default,
      // This is replaced by webpack define plugin
      imgConf: process.env.__NEXT_IMAGE_OPTS
    });
    for (const [x, v] of Object.entries(g))
      v === void 0 && delete g[x];
    return {
      props: g
    };
  }, i = a.Image;
})(_n);
var ko = _n;
const So = /* @__PURE__ */ wn(ko), Po = {
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
function Ue({
  size: e = "md",
  src: t,
  icon: n = /* @__PURE__ */ u(sr, {}),
  className: r = "bg-accent-500"
}) {
  const o = Po[e], a = [
    "rounded-full flex items-center justify-center",
    o.wrapper,
    r
  ].join(" ").trim();
  return /* @__PURE__ */ u("div", { className: a, children: t ? /* @__PURE__ */ u(So, { src: t, alt: "avatar", layout: "fill", className: "rounded-full object-cover" }) : he.cloneElement(n, {
    size: o.iconSize,
    className: "text-white"
  }) });
}
const xr = {
  accent: "bg-accent-500",
  green: "bg-green-500",
  red: "bg-red-500",
  yellow: "bg-yellow-500",
  gray: "bg-gray-500"
};
function wr({ variant: e = "accent", children: t, className: n = "" }) {
  const o = [
    "px-3 py-1 text-xs font-medium text-white rounded-full",
    xr[e] || xr.accent,
    n
  ].join(" ").trim();
  return /* @__PURE__ */ u("span", { className: o, children: t });
}
var Qt = { exports: {} }, Be = { exports: {} }, vt = {}, _r;
function An() {
  return _r || (_r = 1, function(e) {
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
        return n;
      },
      urlQueryToSearchParams: function() {
        return o;
      },
      assign: function() {
        return a;
      }
    });
    function n(s) {
      const l = {};
      return s.forEach((i, p) => {
        typeof l[p] > "u" ? l[p] = i : Array.isArray(l[p]) ? l[p].push(i) : l[p] = [
          l[p],
          i
        ];
      }), l;
    }
    function r(s) {
      return typeof s == "string" || typeof s == "number" && !isNaN(s) || typeof s == "boolean" ? String(s) : "";
    }
    function o(s) {
      const l = new URLSearchParams();
      return Object.entries(s).forEach((i) => {
        let [p, g] = i;
        Array.isArray(g) ? g.forEach((x) => l.append(p, r(x))) : l.set(p, r(g));
      }), l;
    }
    function a(s) {
      for (var l = arguments.length, i = new Array(l > 1 ? l - 1 : 0), p = 1; p < l; p++)
        i[p - 1] = arguments[p];
      return i.forEach((g) => {
        Array.from(g.keys()).forEach((x) => s.delete(x)), g.forEach((x, v) => s.append(v, x));
      }), s;
    }
  }(vt)), vt;
}
var xt = {}, Rr;
function kn() {
  return Rr || (Rr = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    function t(i, p) {
      for (var g in p) Object.defineProperty(i, g, {
        enumerable: !0,
        get: p[g]
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
    const r = /* @__PURE__ */ ze._(An()), o = /https?|ftp|gopher|file/;
    function a(i) {
      let { auth: p, hostname: g } = i, x = i.protocol || "", v = i.pathname || "", c = i.hash || "", f = i.query || "", m = !1;
      p = p ? encodeURIComponent(p).replace(/%3A/i, ":") + "@" : "", i.host ? m = p + i.host : g && (m = p + (~g.indexOf(":") ? "[" + g + "]" : g), i.port && (m += ":" + i.port)), f && typeof f == "object" && (f = String(r.urlQueryToSearchParams(f)));
      let h = i.search || f && "?" + f || "";
      return x && !x.endsWith(":") && (x += ":"), i.slashes || (!x || o.test(x)) && m !== !1 ? (m = "//" + (m || ""), v && v[0] !== "/" && (v = "/" + v)) : m || (m = ""), c && c[0] !== "#" && (c = "#" + c), h && h[0] !== "?" && (h = "?" + h), v = v.replace(/[?#]/g, encodeURIComponent), h = h.replace("#", "%23"), "" + x + m + v + h + c;
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
      return process.env.NODE_ENV === "development" && i !== null && typeof i == "object" && Object.keys(i).forEach((p) => {
        s.includes(p) || console.warn("Unknown key passed via urlObject into url.format: " + p);
      }), a(i);
    }
  }(xt)), xt;
}
var wt = {}, Cr;
function Oo() {
  return Cr || (Cr = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "omit", {
      enumerable: !0,
      get: function() {
        return t;
      }
    });
    function t(n, r) {
      const o = {};
      return Object.keys(n).forEach((a) => {
        r.includes(a) || (o[a] = n[a]);
      }), o;
    }
  }(wt)), wt;
}
var _t = {}, Er;
function st() {
  return Er || (Er = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    function t(N, C) {
      for (var P in C) Object.defineProperty(N, P, {
        enumerable: !0,
        get: C[P]
      });
    }
    t(e, {
      WEB_VITALS: function() {
        return n;
      },
      execOnce: function() {
        return r;
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
        return p;
      },
      normalizeRepeatedSlashes: function() {
        return g;
      },
      loadGetInitialProps: function() {
        return x;
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
        return m;
      },
      PageNotFoundError: function() {
        return h;
      },
      MissingStaticPage: function() {
        return A;
      },
      MiddlewareNotFoundError: function() {
        return w;
      },
      stringifyError: function() {
        return d;
      }
    });
    const n = [
      "CLS",
      "FCP",
      "FID",
      "INP",
      "LCP",
      "TTFB"
    ];
    function r(N) {
      let C = !1, P;
      return function() {
        for (var _ = arguments.length, b = new Array(_), I = 0; I < _; I++)
          b[I] = arguments[I];
        return C || (C = !0, P = N(...b)), P;
      };
    }
    const o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/, a = (N) => o.test(N);
    function s() {
      const { protocol: N, hostname: C, port: P } = window.location;
      return N + "//" + C + (P ? ":" + P : "");
    }
    function l() {
      const { href: N } = window.location, C = s();
      return N.substring(C.length);
    }
    function i(N) {
      return typeof N == "string" ? N : N.displayName || N.name || "Unknown";
    }
    function p(N) {
      return N.finished || N.headersSent;
    }
    function g(N) {
      const C = N.split("?");
      return C[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (C[1] ? "?" + C.slice(1).join("?") : "");
    }
    async function x(N, C) {
      if (process.env.NODE_ENV !== "production") {
        var P;
        if ((P = N.prototype) != null && P.getInitialProps) {
          const I = '"' + i(N) + '.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.';
          throw new Error(I);
        }
      }
      const _ = C.res || C.ctx && C.ctx.res;
      if (!N.getInitialProps)
        return C.ctx && C.Component ? {
          pageProps: await x(C.Component, C.ctx)
        } : {};
      const b = await N.getInitialProps(C);
      if (_ && p(_))
        return b;
      if (!b) {
        const I = '"' + i(N) + '.getInitialProps()" should resolve to an object. But found "' + b + '" instead.';
        throw new Error(I);
      }
      return process.env.NODE_ENV !== "production" && Object.keys(b).length === 0 && !C.ctx && console.warn("" + i(N) + " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps"), b;
    }
    const v = typeof performance < "u", c = v && [
      "mark",
      "measure",
      "getEntriesByName"
    ].every((N) => typeof performance[N] == "function");
    class f extends Error {
    }
    class m extends Error {
    }
    class h extends Error {
      constructor(C) {
        super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = "Cannot find module for page: " + C;
      }
    }
    class A extends Error {
      constructor(C, P) {
        super(), this.message = "Failed to load static file for page: " + C + " " + P;
      }
    }
    class w extends Error {
      constructor() {
        super(), this.code = "ENOENT", this.message = "Cannot find the middleware module";
      }
    }
    function d(N) {
      return JSON.stringify({
        message: N.message,
        stack: N.stack
      });
    }
  }(_t)), _t;
}
var Ge = { exports: {} }, Rt = {}, Nr;
function Sn() {
  return Nr || (Nr = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "removeTrailingSlash", {
      enumerable: !0,
      get: function() {
        return t;
      }
    });
    function t(n) {
      return n.replace(/\/$/, "") || "/";
    }
  }(Rt)), Rt;
}
var Ct = {}, Ar;
function ir() {
  return Ar || (Ar = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "parsePath", {
      enumerable: !0,
      get: function() {
        return t;
      }
    });
    function t(n) {
      const r = n.indexOf("#"), o = n.indexOf("?"), a = o > -1 && (r < 0 || o < r);
      return a || r > -1 ? {
        pathname: n.substring(0, a ? o : r),
        query: a ? n.substring(o, r > -1 ? r : void 0) : "",
        hash: r > -1 ? n.slice(r) : ""
      } : {
        pathname: n,
        query: "",
        hash: ""
      };
    }
  }(Ct)), Ct;
}
var kr;
function at() {
  return kr || (kr = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "normalizePathTrailingSlash", {
      enumerable: !0,
      get: function() {
        return o;
      }
    });
    const n = Sn(), r = ir(), o = (a) => {
      if (!a.startsWith("/") || process.env.__NEXT_MANUAL_TRAILING_SLASH)
        return a;
      const { pathname: s, query: l, hash: i } = (0, r.parsePath)(a);
      return process.env.__NEXT_TRAILING_SLASH ? /\.[^/]+\/?$/.test(s) ? "" + (0, n.removeTrailingSlash)(s) + l + i : s.endsWith("/") ? "" + s + l + i : s + "/" + l + i : "" + (0, n.removeTrailingSlash)(s) + l + i;
    };
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(Ge, Ge.exports)), Ge.exports;
}
var Et = {}, Fe = { exports: {} }, Nt = {}, Sr;
function Pn() {
  return Sr || (Sr = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "pathHasPrefix", {
      enumerable: !0,
      get: function() {
        return n;
      }
    });
    const t = ir();
    function n(r, o) {
      if (typeof r != "string")
        return !1;
      const { pathname: a } = (0, t.parsePath)(r);
      return a === o || a.startsWith(o + "/");
    }
  }(Nt)), Nt;
}
var Pr;
function To() {
  return Pr || (Pr = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "hasBasePath", {
      enumerable: !0,
      get: function() {
        return o;
      }
    });
    const n = Pn(), r = process.env.__NEXT_ROUTER_BASEPATH || "";
    function o(a) {
      return (0, n.pathHasPrefix)(a, r);
    }
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(Fe, Fe.exports)), Fe.exports;
}
var Or;
function On() {
  return Or || (Or = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "isLocalURL", {
      enumerable: !0,
      get: function() {
        return r;
      }
    });
    const t = st(), n = To();
    function r(o) {
      if (!(0, t.isAbsoluteUrl)(o)) return !0;
      try {
        const a = (0, t.getLocationOrigin)(), s = new URL(o, a);
        return s.origin === a && (0, n.hasBasePath)(s.pathname);
      } catch {
        return !1;
      }
    }
  }(Et)), Et;
}
var At = {}, kt = {}, Tr;
function Io() {
  return Tr || (Tr = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "getSortedRoutes", {
      enumerable: !0,
      get: function() {
        return n;
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
          let g = function(x, v) {
            if (x !== null && x !== v)
              throw new Error("You cannot use different slug names for the same dynamic path ('" + x + "' !== '" + v + "').");
            a.forEach((c) => {
              if (c === v)
                throw new Error('You cannot have the same slug name "' + v + '" repeat within a single dynamic path');
              if (c.replace(/\W/g, "") === l.replace(/\W/g, ""))
                throw new Error('You cannot have the slug names "' + c + '" and "' + v + '" differ only by non-word symbols within a single dynamic path');
            }), a.push(v);
          }, i = l.slice(1, -1), p = !1;
          if (i.startsWith("[") && i.endsWith("]") && (i = i.slice(1, -1), p = !0), i.startsWith("...") && (i = i.substring(3), s = !0), i.startsWith("[") || i.endsWith("]"))
            throw new Error("Segment names may not start or end with extra brackets ('" + i + "').");
          if (i.startsWith("."))
            throw new Error("Segment names may not start with erroneous periods ('" + i + "').");
          if (s)
            if (p) {
              if (this.restSlugName != null)
                throw new Error('You cannot use both an required and optional catch-all route at the same level ("[...' + this.restSlugName + ']" and "' + o[0] + '" ).');
              g(this.optionalRestSlugName, i), this.optionalRestSlugName = i, l = "[[...]]";
            } else {
              if (this.optionalRestSlugName != null)
                throw new Error('You cannot use both an optional and required catch-all route at the same level ("[[...' + this.optionalRestSlugName + ']]" and "' + o[0] + '").');
              g(this.restSlugName, i), this.restSlugName = i, l = "[...]";
            }
          else {
            if (p)
              throw new Error('Optional route parameters are not yet supported ("' + o[0] + '").');
            g(this.slugName, i), this.slugName = i, l = "[]";
          }
        }
        this.children.has(l) || this.children.set(l, new t()), this.children.get(l)._insert(o.slice(1), a, s);
      }
      constructor() {
        this.placeholder = !0, this.children = /* @__PURE__ */ new Map(), this.slugName = null, this.restSlugName = null, this.optionalRestSlugName = null;
      }
    }
    function n(r) {
      const o = new t();
      return r.forEach((a) => o.insert(a)), o.smoosh();
    }
  }(kt)), kt;
}
var St = {}, Ir;
function Mo() {
  return Ir || (Ir = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "isDynamicRoute", {
      enumerable: !0,
      get: function() {
        return n;
      }
    });
    const t = /\/\[[^/]+?\](?=\/|$)/;
    function n(r) {
      return t.test(r);
    }
  }(St)), St;
}
var Mr;
function Lo() {
  return Mr || (Mr = 1, function(e) {
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
        return n.getSortedRoutes;
      },
      isDynamicRoute: function() {
        return r.isDynamicRoute;
      }
    });
    const n = Io(), r = Mo();
  }(At)), At;
}
var Pt = {}, Ot = {}, Lr;
function $o() {
  return Lr || (Lr = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "getRouteMatcher", {
      enumerable: !0,
      get: function() {
        return n;
      }
    });
    const t = st();
    function n(r) {
      let { re: o, groups: a } = r;
      return (s) => {
        const l = o.exec(s);
        if (!l)
          return !1;
        const i = (g) => {
          try {
            return decodeURIComponent(g);
          } catch {
            throw new t.DecodeError("failed to decode param");
          }
        }, p = {};
        return Object.keys(a).forEach((g) => {
          const x = a[g], v = l[x.pos];
          v !== void 0 && (p[g] = ~v.indexOf("/") ? v.split("/").map((c) => i(c)) : x.repeat ? [
            i(v)
          ] : i(v));
        }), p;
      };
    }
  }(Ot)), Ot;
}
var Tt = {}, It = {}, Mt = {}, Lt = {}, $r;
function jo() {
  return $r || ($r = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "ensureLeadingSlash", {
      enumerable: !0,
      get: function() {
        return t;
      }
    });
    function t(n) {
      return n.startsWith("/") ? n : "/" + n;
    }
  }(Lt)), Lt;
}
var $t = {}, jr;
function zo() {
  return jr || (jr = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "isGroupSegment", {
      enumerable: !0,
      get: function() {
        return t;
      }
    });
    function t(n) {
      return n[0] === "(" && n.endsWith(")");
    }
  }($t)), $t;
}
var zr;
function Ho() {
  return zr || (zr = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    function t(i, p) {
      for (var g in p) Object.defineProperty(i, g, {
        enumerable: !0,
        get: p[g]
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
    const n = jo(), r = zo(), o = Xt;
    function a(i) {
      return (0, n.ensureLeadingSlash)(i.split("/").reduce((p, g, x, v) => !g || (0, r.isGroupSegment)(g) || g[0] === "@" || (g === "page" || g === "route") && x === v.length - 1 ? p : p + "/" + g, ""));
    }
    function s(i) {
      return i.replace(
        /\.rsc($|\?)/,
        // $1 ensures `?` is preserved
        "$1"
      );
    }
    function l(i) {
      const p = (0, o.parse)(i);
      let { pathname: g } = p;
      return g && g.startsWith("/_next/postponed") ? (g = g.substring(16) || "/", (0, o.format)({
        ...p,
        pathname: g
      })) : i;
    }
  }(Mt)), Mt;
}
var Hr;
function Do() {
  return Hr || (Hr = 1, function(e) {
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
        return r;
      },
      isInterceptionRouteAppPath: function() {
        return o;
      },
      extractInterceptionRouteInformation: function() {
        return a;
      }
    });
    const n = Ho(), r = [
      "(..)(..)",
      "(.)",
      "(..)",
      "(...)"
    ];
    function o(s) {
      return s.split("/").find((l) => r.find((i) => l.startsWith(i))) !== void 0;
    }
    function a(s) {
      let l, i, p;
      for (const g of s.split("/"))
        if (i = r.find((x) => g.startsWith(x)), i) {
          [l, p] = s.split(i, 2);
          break;
        }
      if (!l || !i || !p)
        throw new Error(`Invalid interception route: ${s}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`);
      switch (l = (0, n.normalizeAppPath)(l), i) {
        case "(.)":
          l === "/" ? p = `/${p}` : p = l + "/" + p;
          break;
        case "(..)":
          if (l === "/")
            throw new Error(`Invalid interception route: ${s}. Cannot use (..) marker at the root level, use (.) instead.`);
          p = l.split("/").slice(0, -1).concat(p).join("/");
          break;
        case "(...)":
          p = "/" + p;
          break;
        case "(..)(..)":
          const g = l.split("/");
          if (g.length <= 2)
            throw new Error(`Invalid interception route: ${s}. Cannot use (..)(..) marker at the root level or one level up.`);
          p = g.slice(0, -2).concat(p).join("/");
          break;
        default:
          throw new Error("Invariant: unexpected marker");
      }
      return {
        interceptingRoute: l,
        interceptedRoute: p
      };
    }
  }(It)), It;
}
var jt = {}, Dr;
function qo() {
  return Dr || (Dr = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "escapeStringRegexp", {
      enumerable: !0,
      get: function() {
        return r;
      }
    });
    const t = /[|\\{}()[\]^$+*?.-]/, n = /[|\\{}()[\]^$+*?.-]/g;
    function r(o) {
      return t.test(o) ? o.replace(n, "\\$&") : o;
    }
  }(jt)), jt;
}
var qr;
function Uo() {
  return qr || (qr = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    function t(m, h) {
      for (var A in h) Object.defineProperty(m, A, {
        enumerable: !0,
        get: h[A]
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
    const n = Do(), r = qo(), o = Sn(), a = "nxtP", s = "nxtI";
    function l(m) {
      const h = m.startsWith("[") && m.endsWith("]");
      h && (m = m.slice(1, -1));
      const A = m.startsWith("...");
      return A && (m = m.slice(3)), {
        key: m,
        repeat: A,
        optional: h
      };
    }
    function i(m) {
      const h = (0, o.removeTrailingSlash)(m).slice(1).split("/"), A = {};
      let w = 1;
      return {
        parameterizedRoute: h.map((d) => {
          const N = n.INTERCEPTION_ROUTE_MARKERS.find((P) => d.startsWith(P)), C = d.match(/\[((?:\[.*\])|.+)\]/);
          if (N && C) {
            const { key: P, optional: _, repeat: b } = l(C[1]);
            return A[P] = {
              pos: w++,
              repeat: b,
              optional: _
            }, "/" + (0, r.escapeStringRegexp)(N) + "([^/]+?)";
          } else if (C) {
            const { key: P, repeat: _, optional: b } = l(C[1]);
            return A[P] = {
              pos: w++,
              repeat: _,
              optional: b
            }, _ ? b ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)";
          } else
            return "/" + (0, r.escapeStringRegexp)(d);
        }).join(""),
        groups: A
      };
    }
    function p(m) {
      const { parameterizedRoute: h, groups: A } = i(m);
      return {
        re: new RegExp("^" + h + "(?:/)?$"),
        groups: A
      };
    }
    function g() {
      let m = 0;
      return () => {
        let h = "", A = ++m;
        for (; A > 0; )
          h += String.fromCharCode(97 + (A - 1) % 26), A = Math.floor((A - 1) / 26);
        return h;
      };
    }
    function x(m) {
      let { getSafeRouteKey: h, segment: A, routeKeys: w, keyPrefix: d } = m;
      const { key: N, optional: C, repeat: P } = l(A);
      let _ = N.replace(/\W/g, "");
      d && (_ = "" + d + _);
      let b = !1;
      return (_.length === 0 || _.length > 30) && (b = !0), isNaN(parseInt(_.slice(0, 1))) || (b = !0), b && (_ = h()), d ? w[_] = "" + d + N : w[_] = "" + N, P ? C ? "(?:/(?<" + _ + ">.+?))?" : "/(?<" + _ + ">.+?)" : "/(?<" + _ + ">[^/]+?)";
    }
    function v(m, h) {
      const A = (0, o.removeTrailingSlash)(m).slice(1).split("/"), w = g(), d = {};
      return {
        namedParameterizedRoute: A.map((N) => {
          const C = n.INTERCEPTION_ROUTE_MARKERS.some((_) => N.startsWith(_)), P = N.match(/\[((?:\[.*\])|.+)\]/);
          return C && P ? x({
            getSafeRouteKey: w,
            segment: P[1],
            routeKeys: d,
            keyPrefix: h ? s : void 0
          }) : P ? x({
            getSafeRouteKey: w,
            segment: P[1],
            routeKeys: d,
            keyPrefix: h ? a : void 0
          }) : "/" + (0, r.escapeStringRegexp)(N);
        }).join(""),
        routeKeys: d
      };
    }
    function c(m, h) {
      const A = v(m, h);
      return {
        ...p(m),
        namedRegex: "^" + A.namedParameterizedRoute + "(?:/)?$",
        routeKeys: A.routeKeys
      };
    }
    function f(m, h) {
      const { parameterizedRoute: A } = i(m), { catchAll: w = !0 } = h;
      if (A === "/")
        return {
          namedRegex: "^/" + (w ? ".*" : "") + "$"
        };
      const { namedParameterizedRoute: d } = v(m, !1);
      let N = w ? "(?:(/.*)?)" : "";
      return {
        namedRegex: "^" + d + N + "$"
      };
    }
  }(Tt)), Tt;
}
var Ur;
function Bo() {
  return Ur || (Ur = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "interpolateAs", {
      enumerable: !0,
      get: function() {
        return r;
      }
    });
    const t = $o(), n = Uo();
    function r(o, a, s) {
      let l = "";
      const i = (0, n.getRouteRegex)(o), p = i.groups, g = (
        // Try to match the dynamic route against the asPath
        (a !== o ? (0, t.getRouteMatcher)(i)(a) : "") || // Fall back to reading the values from the href
        // TODO: should this take priority; also need to change in the router.
        s
      );
      l = o;
      const x = Object.keys(p);
      return x.every((v) => {
        let c = g[v] || "";
        const { repeat: f, optional: m } = p[v];
        let h = "[" + (f ? "..." : "") + v + "]";
        return m && (h = (c ? "" : "/") + "[" + h + "]"), f && !Array.isArray(c) && (c = [
          c
        ]), (m || v in g) && // Interpolate group into data URL if present
        (l = l.replace(h, f ? c.map(
          // these values should be fully encoded instead of just
          // path delimiter escaped since they are being inserted
          // into the URL and we expect URL encoded segments
          // when parsing dynamic route params
          (A) => encodeURIComponent(A)
        ).join("/") : encodeURIComponent(c)) || "/");
      }) || (l = ""), {
        params: x,
        result: l
      };
    }
  }(Pt)), Pt;
}
var Br;
function Go() {
  return Br || (Br = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "resolveHref", {
      enumerable: !0,
      get: function() {
        return g;
      }
    });
    const n = An(), r = kn(), o = Oo(), a = st(), s = at(), l = On(), i = Lo(), p = Bo();
    function g(x, v, c) {
      let f, m = typeof v == "string" ? v : (0, r.formatWithValidation)(v);
      const h = m.match(/^[a-zA-Z]{1,}:\/\//), A = h ? m.slice(h[0].length) : m;
      if ((A.split("?", 1)[0] || "").match(/(\/\/|\\)/)) {
        console.error("Invalid href '" + m + "' passed to next/router in page: '" + x.pathname + "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");
        const d = (0, a.normalizeRepeatedSlashes)(A);
        m = (h ? h[0] : "") + d;
      }
      if (!(0, l.isLocalURL)(m))
        return c ? [
          m
        ] : m;
      try {
        f = new URL(m.startsWith("#") ? x.asPath : x.pathname, "http://n");
      } catch {
        f = new URL("/", "http://n");
      }
      try {
        const d = new URL(m, f);
        d.pathname = (0, s.normalizePathTrailingSlash)(d.pathname);
        let N = "";
        if ((0, i.isDynamicRoute)(d.pathname) && d.searchParams && c) {
          const P = (0, n.searchParamsToUrlQuery)(d.searchParams), { result: _, params: b } = (0, p.interpolateAs)(d.pathname, d.pathname, P);
          _ && (N = (0, r.formatWithValidation)({
            pathname: _,
            hash: d.hash,
            query: (0, o.omit)(P, b)
          }));
        }
        const C = d.origin === f.origin ? d.href.slice(d.origin.length) : d.href;
        return c ? [
          C,
          N || C
        ] : C;
      } catch {
        return c ? [
          m
        ] : m;
      }
    }
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(Be, Be.exports)), Be.exports;
}
var We = { exports: {} }, zt = {}, Ht = {}, Gr;
function Tn() {
  return Gr || (Gr = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "addPathPrefix", {
      enumerable: !0,
      get: function() {
        return n;
      }
    });
    const t = ir();
    function n(r, o) {
      if (!r.startsWith("/") || !o)
        return r;
      const { pathname: a, query: s, hash: l } = (0, t.parsePath)(r);
      return "" + o + a + s + l;
    }
  }(Ht)), Ht;
}
var Fr;
function Fo() {
  return Fr || (Fr = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "addLocale", {
      enumerable: !0,
      get: function() {
        return r;
      }
    });
    const t = Tn(), n = Pn();
    function r(o, a, s, l) {
      if (!a || a === s) return o;
      const i = o.toLowerCase();
      return !l && ((0, n.pathHasPrefix)(i, "/api") || (0, n.pathHasPrefix)(i, "/" + a.toLowerCase())) ? o : (0, t.addPathPrefix)(o, "/" + a);
    }
  }(zt)), zt;
}
var Wr;
function Wo() {
  return Wr || (Wr = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "addLocale", {
      enumerable: !0,
      get: function() {
        return r;
      }
    });
    const n = at(), r = function(o) {
      for (var a = arguments.length, s = new Array(a > 1 ? a - 1 : 0), l = 1; l < a; l++)
        s[l - 1] = arguments[l];
      return process.env.__NEXT_I18N_SUPPORT ? (0, n.normalizePathTrailingSlash)(Fo().addLocale(o, ...s)) : o;
    };
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(We, We.exports)), We.exports;
}
var Dt = {}, Vr;
function Vo() {
  return Vr || (Vr = 1, function(e) {
    "use client";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    function t(p, g) {
      for (var x in g) Object.defineProperty(p, x, {
        enumerable: !0,
        get: g[x]
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
    const r = /* @__PURE__ */ Ce._(he);
    var o;
    (function(p) {
      p.LAZY_INITIALIZED = "LAZYINITIALIZED", p.DATA_FETCH = "DATAFETCH", p.READY = "READY";
    })(o || (o = {}));
    const a = r.default.createContext(null), s = r.default.createContext(null), l = r.default.createContext(null), i = r.default.createContext(null);
    process.env.NODE_ENV !== "production" && (a.displayName = "AppRouterContext", s.displayName = "LayoutRouterContext", l.displayName = "GlobalLayoutRouterContext", i.displayName = "TemplateContext");
  }(Dt)), Dt;
}
var Ve = { exports: {} }, Ke = { exports: {} }, Kr;
function Ko() {
  return Kr || (Kr = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function n(a, s) {
      for (var l in s) Object.defineProperty(a, l, {
        enumerable: !0,
        get: s[l]
      });
    }
    n(t, {
      requestIdleCallback: function() {
        return r;
      },
      cancelIdleCallback: function() {
        return o;
      }
    });
    const r = typeof self < "u" && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(a) {
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
  }(Ke, Ke.exports)), Ke.exports;
}
var Xr;
function Xo() {
  return Xr || (Xr = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "useIntersection", {
      enumerable: !0,
      get: function() {
        return p;
      }
    });
    const n = he, r = Ko(), o = typeof IntersectionObserver == "function", a = /* @__PURE__ */ new Map(), s = [];
    function l(g) {
      const x = {
        root: g.root || null,
        margin: g.rootMargin || ""
      }, v = s.find((h) => h.root === x.root && h.margin === x.margin);
      let c;
      if (v && (c = a.get(v), c))
        return c;
      const f = /* @__PURE__ */ new Map(), m = new IntersectionObserver((h) => {
        h.forEach((A) => {
          const w = f.get(A.target), d = A.isIntersecting || A.intersectionRatio > 0;
          w && d && w(d);
        });
      }, g);
      return c = {
        id: x,
        observer: m,
        elements: f
      }, s.push(x), a.set(x, c), c;
    }
    function i(g, x, v) {
      const { id: c, observer: f, elements: m } = l(v);
      return m.set(g, x), f.observe(g), function() {
        if (m.delete(g), f.unobserve(g), m.size === 0) {
          f.disconnect(), a.delete(c);
          const A = s.findIndex((w) => w.root === c.root && w.margin === c.margin);
          A > -1 && s.splice(A, 1);
        }
      };
    }
    function p(g) {
      let { rootRef: x, rootMargin: v, disabled: c } = g;
      const f = c || !o, [m, h] = (0, n.useState)(!1), A = (0, n.useRef)(null), w = (0, n.useCallback)((N) => {
        A.current = N;
      }, []);
      (0, n.useEffect)(() => {
        if (o) {
          if (f || m) return;
          const N = A.current;
          if (N && N.tagName)
            return i(N, (P) => P && h(P), {
              root: x == null ? void 0 : x.current,
              rootMargin: v
            });
        } else if (!m) {
          const N = (0, r.requestIdleCallback)(() => h(!0));
          return () => (0, r.cancelIdleCallback)(N);
        }
      }, [
        f,
        v,
        x,
        m,
        A.current
      ]);
      const d = (0, n.useCallback)(() => {
        h(!1);
      }, []);
      return [
        w,
        m,
        d
      ];
    }
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(Ve, Ve.exports)), Ve.exports;
}
var Xe = { exports: {} }, Qe = { exports: {} }, qt = {}, Qr;
function Qo() {
  return Qr || (Qr = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "normalizeLocalePath", {
      enumerable: !0,
      get: function() {
        return t;
      }
    });
    function t(n, r) {
      let o;
      const a = n.split("/");
      return (r || []).some((s) => a[1] && a[1].toLowerCase() === s.toLowerCase() ? (o = s, a.splice(1, 1), n = a.join("/") || "/", !0) : !1), {
        pathname: n,
        detectedLocale: o
      };
    }
  }(qt)), qt;
}
var Zr;
function Zo() {
  return Zr || (Zr = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "normalizeLocalePath", {
      enumerable: !0,
      get: function() {
        return n;
      }
    });
    const n = (r, o) => process.env.__NEXT_I18N_SUPPORT ? Qo().normalizeLocalePath(r, o) : {
      pathname: r,
      detectedLocale: void 0
    };
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(Qe, Qe.exports)), Qe.exports;
}
var Ze = { exports: {} }, Ut = {}, Yr;
function Yo() {
  return Yr || (Yr = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "detectDomainLocale", {
      enumerable: !0,
      get: function() {
        return t;
      }
    });
    function t(n, r, o) {
      if (n) {
        o && (o = o.toLowerCase());
        for (const l of n) {
          var a, s;
          const i = (a = l.domain) == null ? void 0 : a.split(":", 1)[0].toLowerCase();
          if (r === i || o === l.defaultLocale.toLowerCase() || (s = l.locales) != null && s.some((p) => p.toLowerCase() === o))
            return l;
        }
      }
    }
  }(Ut)), Ut;
}
var Jr;
function Jo() {
  return Jr || (Jr = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "detectDomainLocale", {
      enumerable: !0,
      get: function() {
        return n;
      }
    });
    const n = function() {
      for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
        o[a] = arguments[a];
      if (process.env.__NEXT_I18N_SUPPORT)
        return Yo().detectDomainLocale(...o);
    };
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(Ze, Ze.exports)), Ze.exports;
}
var en;
function es() {
  return en || (en = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "getDomainLocale", {
      enumerable: !0,
      get: function() {
        return o;
      }
    });
    const n = at(), r = process.env.__NEXT_ROUTER_BASEPATH || "";
    function o(a, s, l, i) {
      if (process.env.__NEXT_I18N_SUPPORT) {
        const p = Zo().normalizeLocalePath, g = Jo().detectDomainLocale, x = s || p(a, l).detectedLocale, v = g(i, void 0, x);
        if (v) {
          const c = "http" + (v.http ? "" : "s") + "://", f = x === v.defaultLocale ? "" : "/" + x;
          return "" + c + v.domain + (0, n.normalizePathTrailingSlash)("" + r + f + a);
        }
        return !1;
      } else
        return !1;
    }
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(Xe, Xe.exports)), Xe.exports;
}
var Ye = { exports: {} }, tn;
function ts() {
  return tn || (tn = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "addBasePath", {
      enumerable: !0,
      get: function() {
        return a;
      }
    });
    const n = Tn(), r = at(), o = process.env.__NEXT_ROUTER_BASEPATH || "";
    function a(s, l) {
      return (0, r.normalizePathTrailingSlash)(process.env.__NEXT_MANUAL_CLIENT_BASE_PATH && !l ? s : (0, n.addPathPrefix)(s, o));
    }
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(Ye, Ye.exports)), Ye.exports;
}
var Je = { exports: {} }, rn;
function rs() {
  return rn || (rn = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function n(x, v) {
      for (var c in v) Object.defineProperty(x, c, {
        enumerable: !0,
        get: v[c]
      });
    }
    n(t, {
      PrefetchKind: function() {
        return g;
      },
      ACTION_REFRESH: function() {
        return r;
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
        return p;
      }
    });
    const r = "refresh", o = "navigate", a = "restore", s = "server-patch", l = "prefetch", i = "fast-refresh", p = "server-action";
    var g;
    (function(x) {
      x.AUTO = "auto", x.FULL = "full", x.TEMPORARY = "temporary";
    })(g || (g = {})), (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(Je, Je.exports)), Je.exports;
}
(function(e, t) {
  "use client";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "default", {
    enumerable: !0,
    get: function() {
      return C;
    }
  });
  const r = /* @__PURE__ */ Ce._(he), o = Go(), a = On(), s = kn(), l = st(), i = Wo(), p = En(), g = Vo(), x = Xo(), v = es(), c = ts(), f = rs(), m = /* @__PURE__ */ new Set();
  function h(P, _, b, I, y, R) {
    if (typeof window > "u" || !R && !(0, a.isLocalURL)(_))
      return;
    if (!I.bypassPrefetchedCheck) {
      const T = (
        // Let the link's locale prop override the default router locale.
        typeof I.locale < "u" ? I.locale : "locale" in P ? P.locale : void 0
      ), S = _ + "%" + b + "%" + T;
      if (m.has(S))
        return;
      m.add(S);
    }
    const E = R ? P.prefetch(_, y) : P.prefetch(_, b, I);
    Promise.resolve(E).catch((T) => {
      if (process.env.NODE_ENV !== "production")
        throw T;
    });
  }
  function A(P) {
    const b = P.currentTarget.getAttribute("target");
    return b && b !== "_self" || P.metaKey || P.ctrlKey || P.shiftKey || P.altKey || // triggers resource download
    P.nativeEvent && P.nativeEvent.which === 2;
  }
  function w(P, _, b, I, y, R, E, T, S, H) {
    const { nodeName: q } = P.currentTarget;
    if (q.toUpperCase() === "A" && (A(P) || // app-router supports external urls out of the box so it shouldn't short-circuit here as support for e.g. `replace` is added in the app-router.
    !S && !(0, a.isLocalURL)(b)))
      return;
    P.preventDefault();
    const L = () => {
      const K = E ?? !0;
      "beforePopState" in _ ? _[y ? "replace" : "push"](b, I, {
        shallow: R,
        locale: T,
        scroll: K
      }) : _[y ? "replace" : "push"](I || b, {
        forceOptimisticNavigation: !H,
        scroll: K
      });
    };
    S ? r.default.startTransition(L) : L();
  }
  function d(P) {
    return typeof P == "string" ? P : (0, s.formatUrl)(P);
  }
  const C = /* @__PURE__ */ r.default.forwardRef(function(_, b) {
    let I;
    const { href: y, as: R, children: E, prefetch: T = null, passHref: S, replace: H, shallow: q, scroll: Q, locale: L, onClick: K, onMouseEnter: j, onTouchStart: J, legacyBehavior: X = !1, ...G } = _;
    I = E, X && (typeof I == "string" || typeof I == "number") && (I = /* @__PURE__ */ r.default.createElement("a", null, I));
    const B = r.default.useContext(p.RouterContext), te = r.default.useContext(g.AppRouterContext), se = B ?? te, Z = !B, M = T !== !1, ce = T === null ? f.PrefetchKind.AUTO : f.PrefetchKind.FULL;
    if (process.env.NODE_ENV !== "production") {
      let ee = function(F) {
        return new Error("Failed prop type: The prop `" + F.key + "` expects a " + F.expected + " in `<Link>`, but got `" + F.actual + "` instead." + (typeof window < "u" ? `
Open your browser's console to view the Component stack trace.` : ""));
      };
      Object.keys({
        href: !0
      }).forEach((F) => {
        if (F === "href" && (_[F] == null || typeof _[F] != "string" && typeof _[F] != "object"))
          throw ee({
            key: F,
            expected: "`string` or `object`",
            actual: _[F] === null ? "null" : typeof _[F]
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
      }).forEach((F) => {
        const D = typeof _[F];
        if (F === "as") {
          if (_[F] && D !== "string" && D !== "object")
            throw ee({
              key: F,
              expected: "`string` or `object`",
              actual: D
            });
        } else if (F === "locale") {
          if (_[F] && D !== "string")
            throw ee({
              key: F,
              expected: "`string`",
              actual: D
            });
        } else if (F === "onClick" || F === "onMouseEnter" || F === "onTouchStart") {
          if (_[F] && D !== "function")
            throw ee({
              key: F,
              expected: "`function`",
              actual: D
            });
        } else if ((F === "replace" || F === "scroll" || F === "shallow" || F === "passHref" || F === "prefetch" || F === "legacyBehavior") && _[F] != null && D !== "boolean")
          throw ee({
            key: F,
            expected: "`boolean`",
            actual: D
          });
      });
      const U = r.default.useRef(!1);
      _.prefetch && !U.current && !Z && (U.current = !0, console.warn("Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated"));
    }
    if (process.env.NODE_ENV !== "production" && Z && !R) {
      let ee;
      if (typeof y == "string" ? ee = y : typeof y == "object" && typeof y.pathname == "string" && (ee = y.pathname), ee && ee.split("/").some((z) => z.startsWith("[") && z.endsWith("]")))
        throw new Error("Dynamic href `" + ee + "` found in <Link> while using the `/app` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href");
    }
    const { href: oe, as: re } = r.default.useMemo(() => {
      if (!B) {
        const z = d(y);
        return {
          href: z,
          as: R ? d(R) : z
        };
      }
      const [ee, pe] = (0, o.resolveHref)(B, y, !0);
      return {
        href: ee,
        as: R ? (0, o.resolveHref)(B, R) : pe || ee
      };
    }, [
      B,
      y,
      R
    ]), O = r.default.useRef(oe), k = r.default.useRef(re);
    let Y;
    if (X)
      if (process.env.NODE_ENV === "development") {
        K && console.warn('"onClick" was passed to <Link> with `href` of `' + y + '` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link'), j && console.warn('"onMouseEnter" was passed to <Link> with `href` of `' + y + '` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link');
        try {
          Y = r.default.Children.only(I);
        } catch {
          throw I ? new Error("Multiple children were passed to <Link> with `href` of `" + y + "` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children" + (typeof window < "u" ? ` 
Open your browser's console to view the Component stack trace.` : "")) : new Error("No children were passed to <Link> with `href` of `" + y + "` but one child is required https://nextjs.org/docs/messages/link-no-children");
        }
      } else
        Y = r.default.Children.only(I);
    else if (process.env.NODE_ENV === "development" && (I == null ? void 0 : I.type) === "a")
      throw new Error(`Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.
Learn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor`);
    const ie = X ? Y && typeof Y == "object" && Y.ref : b, [we, fe, le] = (0, x.useIntersection)({
      rootMargin: "200px"
    }), Re = r.default.useCallback((ee) => {
      (k.current !== re || O.current !== oe) && (le(), k.current = re, O.current = oe), we(ee), ie && (typeof ie == "function" ? ie(ee) : typeof ie == "object" && (ie.current = ee));
    }, [
      re,
      ie,
      oe,
      le,
      we
    ]);
    r.default.useEffect(() => {
      process.env.NODE_ENV === "production" && se && (!fe || !M || h(se, oe, re, {
        locale: L
      }, {
        kind: ce
      }, Z));
    }, [
      re,
      oe,
      fe,
      L,
      M,
      B == null ? void 0 : B.locale,
      se,
      Z,
      ce
    ]);
    const be = {
      ref: Re,
      onClick(ee) {
        if (process.env.NODE_ENV !== "production" && !ee)
          throw new Error('Component rendered inside next/link has to pass click event to "onClick" prop.');
        !X && typeof K == "function" && K(ee), X && Y.props && typeof Y.props.onClick == "function" && Y.props.onClick(ee), se && (ee.defaultPrevented || w(ee, se, oe, re, H, q, Q, L, Z, M));
      },
      onMouseEnter(ee) {
        !X && typeof j == "function" && j(ee), X && Y.props && typeof Y.props.onMouseEnter == "function" && Y.props.onMouseEnter(ee), se && ((!M || process.env.NODE_ENV === "development") && Z || h(se, oe, re, {
          locale: L,
          priority: !0,
          // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
          bypassPrefetchedCheck: !0
        }, {
          kind: ce
        }, Z));
      },
      onTouchStart(ee) {
        !X && typeof J == "function" && J(ee), X && Y.props && typeof Y.props.onTouchStart == "function" && Y.props.onTouchStart(ee), se && (!M && Z || h(se, oe, re, {
          locale: L,
          priority: !0,
          // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
          bypassPrefetchedCheck: !0
        }, {
          kind: ce
        }, Z));
      }
    };
    if ((0, l.isAbsoluteUrl)(re))
      be.href = re;
    else if (!X || S || Y.type === "a" && !("href" in Y.props)) {
      const ee = typeof L < "u" ? L : B == null ? void 0 : B.locale, pe = (B == null ? void 0 : B.isLocaleDomain) && (0, v.getDomainLocale)(re, ee, B == null ? void 0 : B.locales, B == null ? void 0 : B.domainLocales);
      be.href = pe || (0, c.addBasePath)((0, i.addLocale)(re, ee, B == null ? void 0 : B.defaultLocale));
    }
    return X ? /* @__PURE__ */ r.default.cloneElement(Y, be) : /* @__PURE__ */ r.default.createElement("a", {
      ...G,
      ...be
    }, I);
  });
  (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
})(Qt, Qt.exports);
var ns = Qt.exports, os = ns;
const ss = /* @__PURE__ */ wn(os);
function In({ href: e, variant: t = "standard", icon: n, children: r, className: o = "" }) {
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
  return /* @__PURE__ */ $(ss, { href: e, className: l, children: [
    n,
    r
  ] });
}
function ha({ items: e = [] }) {
  return /* @__PURE__ */ u("nav", { className: "flex items-center space-x-2 text-sm", "aria-label": "Breadcrumb", children: e.map((t, n) => /* @__PURE__ */ $("div", { className: "flex items-center", children: [
    n > 0 && /* @__PURE__ */ u(nr, { size: 16, className: "mx-2 text-gray-400" }),
    t.href ? /* @__PURE__ */ u(In, { href: t.href, children: t.label }) : /* @__PURE__ */ u("span", { className: "text-gray-600", children: t.label })
  ] }, n)) });
}
const it = he.forwardRef(
  ({
    children: e,
    variant: t = "primary",
    size: n = "medium",
    isLoading: r = !1,
    startIcon: o,
    endIcon: a,
    ...s
  }, l) => {
    const i = "btn-fluid", p = {
      primary: "",
      // Default style
      outline: "btn-outline",
      ghost: "btn-ghost"
    }, g = {
      small: "text-sm py-2 px-3",
      medium: "",
      // Default size
      large: "text-lg py-4 px-6"
    }, x = [
      i,
      p[t],
      g[n],
      s.className || ""
    ].join(" ").trim();
    return /* @__PURE__ */ $("button", { ref: l, className: x, disabled: r || s.disabled, ...s, children: [
      r && /* @__PURE__ */ u("span", { className: "animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" }),
      !r && /* @__PURE__ */ u("span", { className: "btn-icon", children: o }),
      e,
      !r && /* @__PURE__ */ u("span", { className: "btn-icon", children: a })
    ] });
  }
);
it.displayName = "Button";
const lr = "-", as = (e) => {
  const t = ls(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (s) => {
      const l = s.split(lr);
      return l[0] === "" && l.length !== 1 && l.shift(), Mn(l, t) || is(s);
    },
    getConflictingClassGroupIds: (s, l) => {
      const i = n[s] || [];
      return l && r[s] ? [...i, ...r[s]] : i;
    }
  };
}, Mn = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? Mn(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(lr);
  return (s = t.validators.find(({
    validator: l
  }) => l(a))) == null ? void 0 : s.classGroupId;
}, nn = /^\[(.+)\]$/, is = (e) => {
  if (nn.test(e)) {
    const t = nn.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, ls = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in n)
    Zt(n[o], r, o, t);
  return r;
}, Zt = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? t : on(t, o);
      a.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (cs(o)) {
        Zt(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([a, s]) => {
      Zt(s, on(t, a), n, r);
    });
  });
}, on = (e, t) => {
  let n = e;
  return t.split(lr).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, cs = (e) => e.isThemeGetter, us = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const o = (a, s) => {
    n.set(a, s), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let s = n.get(a);
      if (s !== void 0)
        return s;
      if ((s = r.get(a)) !== void 0)
        return o(a, s), s;
    },
    set(a, s) {
      n.has(a) ? n.set(a, s) : o(a, s);
    }
  };
}, Yt = "!", Jt = ":", ds = Jt.length, fs = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let r = (o) => {
    const a = [];
    let s = 0, l = 0, i = 0, p;
    for (let f = 0; f < o.length; f++) {
      let m = o[f];
      if (s === 0 && l === 0) {
        if (m === Jt) {
          a.push(o.slice(i, f)), i = f + ds;
          continue;
        }
        if (m === "/") {
          p = f;
          continue;
        }
      }
      m === "[" ? s++ : m === "]" ? s-- : m === "(" ? l++ : m === ")" && l--;
    }
    const g = a.length === 0 ? o : o.substring(i), x = ps(g), v = x !== g, c = p && p > i ? p - i : void 0;
    return {
      modifiers: a,
      hasImportantModifier: v,
      baseClassName: x,
      maybePostfixModifierPosition: c
    };
  };
  if (t) {
    const o = t + Jt, a = r;
    r = (s) => s.startsWith(o) ? a(s.substring(o.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: s,
      maybePostfixModifierPosition: void 0
    };
  }
  if (n) {
    const o = r;
    r = (a) => n({
      className: a,
      parseClassName: o
    });
  }
  return r;
}, ps = (e) => e.endsWith(Yt) ? e.substring(0, e.length - 1) : e.startsWith(Yt) ? e.substring(1) : e, hs = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((r) => [r, !0]));
  return (r) => {
    if (r.length <= 1)
      return r;
    const o = [];
    let a = [];
    return r.forEach((s) => {
      s[0] === "[" || t[s] ? (o.push(...a.sort(), s), a = []) : a.push(s);
    }), o.push(...a.sort()), o;
  };
}, ms = (e) => ({
  cache: us(e.cacheSize),
  parseClassName: fs(e),
  sortModifiers: hs(e),
  ...as(e)
}), gs = /\s+/, bs = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: a
  } = t, s = [], l = e.trim().split(gs);
  let i = "";
  for (let p = l.length - 1; p >= 0; p -= 1) {
    const g = l[p], {
      isExternal: x,
      modifiers: v,
      hasImportantModifier: c,
      baseClassName: f,
      maybePostfixModifierPosition: m
    } = n(g);
    if (x) {
      i = g + (i.length > 0 ? " " + i : i);
      continue;
    }
    let h = !!m, A = r(h ? f.substring(0, m) : f);
    if (!A) {
      if (!h) {
        i = g + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (A = r(f), !A) {
        i = g + (i.length > 0 ? " " + i : i);
        continue;
      }
      h = !1;
    }
    const w = a(v).join(":"), d = c ? w + Yt : w, N = d + A;
    if (s.includes(N))
      continue;
    s.push(N);
    const C = o(A, h);
    for (let P = 0; P < C.length; ++P) {
      const _ = C[P];
      s.push(d + _);
    }
    i = g + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function ys() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Ln(t)) && (r && (r += " "), r += n);
  return r;
}
const Ln = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Ln(e[r])) && (n && (n += " "), n += t);
  return n;
};
function vs(e, ...t) {
  let n, r, o, a = s;
  function s(i) {
    const p = t.reduce((g, x) => x(g), e());
    return n = ms(p), r = n.cache.get, o = n.cache.set, a = l, l(i);
  }
  function l(i) {
    const p = r(i);
    if (p)
      return p;
    const g = bs(i, n);
    return o(i, g), g;
  }
  return function() {
    return a(ys.apply(null, arguments));
  };
}
const ve = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, $n = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, jn = /^\((?:(\w[\w-]*):)?(.+)\)$/i, xs = /^\d+\/\d+$/, ws = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, _s = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Rs = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Cs = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Es = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Oe = (e) => xs.test(e), ne = (e) => !!e && !Number.isNaN(Number(e)), ke = (e) => !!e && Number.isInteger(Number(e)), Bt = (e) => e.endsWith("%") && ne(e.slice(0, -1)), Ee = (e) => ws.test(e), Ns = () => !0, As = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  _s.test(e) && !Rs.test(e)
), zn = () => !1, ks = (e) => Cs.test(e), Ss = (e) => Es.test(e), Ps = (e) => !W(e) && !V(e), Os = (e) => Le(e, qn, zn), W = (e) => $n.test(e), Se = (e) => Le(e, Un, As), Gt = (e) => Le(e, $s, ne), sn = (e) => Le(e, Hn, zn), Ts = (e) => Le(e, Dn, Ss), et = (e) => Le(e, Bn, ks), V = (e) => jn.test(e), je = (e) => $e(e, Un), Is = (e) => $e(e, js), an = (e) => $e(e, Hn), Ms = (e) => $e(e, qn), Ls = (e) => $e(e, Dn), tt = (e) => $e(e, Bn, !0), Le = (e, t, n) => {
  const r = $n.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, $e = (e, t, n = !1) => {
  const r = jn.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, Hn = (e) => e === "position" || e === "percentage", Dn = (e) => e === "image" || e === "url", qn = (e) => e === "length" || e === "size" || e === "bg-size", Un = (e) => e === "length", $s = (e) => e === "number", js = (e) => e === "family-name", Bn = (e) => e === "shadow", zs = () => {
  const e = ve("color"), t = ve("font"), n = ve("text"), r = ve("font-weight"), o = ve("tracking"), a = ve("leading"), s = ve("breakpoint"), l = ve("container"), i = ve("spacing"), p = ve("radius"), g = ve("shadow"), x = ve("inset-shadow"), v = ve("text-shadow"), c = ve("drop-shadow"), f = ve("blur"), m = ve("perspective"), h = ve("aspect"), A = ve("ease"), w = ve("animate"), d = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], N = () => [
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
  ], C = () => [...N(), V, W], P = () => ["auto", "hidden", "clip", "visible", "scroll"], _ = () => ["auto", "contain", "none"], b = () => [V, W, i], I = () => [Oe, "full", "auto", ...b()], y = () => [ke, "none", "subgrid", V, W], R = () => ["auto", {
    span: ["full", ke, V, W]
  }, ke, V, W], E = () => [ke, "auto", V, W], T = () => ["auto", "min", "max", "fr", V, W], S = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], H = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], q = () => ["auto", ...b()], Q = () => [Oe, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...b()], L = () => [e, V, W], K = () => [...N(), an, sn, {
    position: [V, W]
  }], j = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], J = () => ["auto", "cover", "contain", Ms, Os, {
    size: [V, W]
  }], X = () => [Bt, je, Se], G = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    p,
    V,
    W
  ], B = () => ["", ne, je, Se], te = () => ["solid", "dashed", "dotted", "double"], se = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Z = () => [ne, Bt, an, sn], M = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    f,
    V,
    W
  ], ce = () => ["none", ne, V, W], oe = () => ["none", ne, V, W], re = () => [ne, V, W], O = () => [Oe, "full", ...b()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Ee],
      breakpoint: [Ee],
      color: [Ns],
      container: [Ee],
      "drop-shadow": [Ee],
      ease: ["in", "out", "in-out"],
      font: [Ps],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Ee],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Ee],
      shadow: [Ee],
      spacing: ["px", ne],
      text: [Ee],
      "text-shadow": [Ee],
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
        aspect: ["auto", "square", Oe, W, V, h]
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
        columns: [ne, W, V, l]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": d()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": d()
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
        object: C()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: P()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": P()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": P()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: _()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": _()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": _()
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
        z: [ke, "auto", V, W]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Oe, "full", "auto", l, ...b()]
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
        flex: [ne, Oe, "auto", "initial", "none", W]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", ne, V, W]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", ne, V, W]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [ke, "first", "last", "none", V, W]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": y()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: R()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": E()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": E()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": y()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: R()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": E()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": E()
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
        gap: b()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": b()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": b()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...S(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...H(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...H()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...S()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...H(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...H(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": S()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...H(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...H()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: b()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: b()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: b()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: b()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: b()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: b()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: b()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: b()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: b()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: q()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: q()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: q()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: q()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: q()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: q()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: q()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: q()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: q()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": b()
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
        "space-y": b()
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
        size: Q()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [l, "screen", ...Q()]
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
          ...Q()
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
          ...Q()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...Q()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...Q()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...Q()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, je, Se]
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
        font: [r, V, Gt]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Bt, W]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Is, W, t]
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
        tracking: [o, V, W]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [ne, "none", V, Gt]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          a,
          ...b()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", V, W]
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
        list: ["disc", "decimal", "none", V, W]
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
        placeholder: L()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: L()
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
        decoration: [ne, "from-font", "auto", V, Se]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: L()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [ne, "auto", V, W]
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
        indent: b()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", V, W]
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
        content: ["none", V, W]
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
        bg: K()
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
        bg: J()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, ke, V, W],
          radial: ["", V, W],
          conic: [ke, V, W]
        }, Ls, Ts]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: L()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: X()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: X()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: X()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: L()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: L()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: L()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: G()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": G()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": G()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": G()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": G()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": G()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": G()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": G()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": G()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": G()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": G()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": G()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": G()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": G()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": G()
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
        border: L()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": L()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": L()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": L()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": L()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": L()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": L()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": L()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": L()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: L()
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
        "outline-offset": [ne, V, W]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", ne, je, Se]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: L()
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
          g,
          tt,
          et
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: L()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", x, tt, et]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": L()
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
        ring: L()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [ne, Se]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": L()
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
        "inset-ring": L()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", v, tt, et]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": L()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [ne, V, W]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...se(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": se()
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
        "mask-linear": [ne]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": Z()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": Z()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": L()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": L()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": Z()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": Z()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": L()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": L()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": Z()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": Z()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": L()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": L()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": Z()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": Z()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": L()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": L()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": Z()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": Z()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": L()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": L()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": Z()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": Z()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": L()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": L()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": Z()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": Z()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": L()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": L()
      }],
      "mask-image-radial": [{
        "mask-radial": [V, W]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": Z()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": Z()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": L()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": L()
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
        "mask-radial-at": N()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [ne]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": Z()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": Z()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": L()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": L()
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
        mask: K()
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
        mask: J()
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
        mask: ["none", V, W]
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
          V,
          W
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: M()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [ne, V, W]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [ne, V, W]
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
          tt,
          et
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": L()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", ne, V, W]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [ne, V, W]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", ne, V, W]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ne, V, W]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", ne, V, W]
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
          V,
          W
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": M()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [ne, V, W]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [ne, V, W]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", ne, V, W]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [ne, V, W]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", ne, V, W]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [ne, V, W]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ne, V, W]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", ne, V, W]
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
        "border-spacing": b()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": b()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": b()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", V, W]
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
        duration: [ne, "initial", V, W]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", A, V, W]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [ne, V, W]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", w, V, W]
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
        perspective: [m, V, W]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": C()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: ce()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": ce()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": ce()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": ce()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: oe()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": oe()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": oe()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": oe()
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
        skew: re()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": re()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": re()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [V, W, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: C()
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
        translate: O()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": O()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": O()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": O()
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
        accent: L()
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
        caret: L()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", V, W]
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
        "scroll-m": b()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": b()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": b()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": b()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": b()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": b()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": b()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": b()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": b()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": b()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": b()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": b()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": b()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": b()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": b()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": b()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": b()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": b()
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
        "will-change": ["auto", "scroll", "contents", "transform", V, W]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...L()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [ne, je, Se, Gt]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...L()]
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
}, Hs = /* @__PURE__ */ vs(zs), Ds = er(void 0), qs = Ds.Provider, Us = he.forwardRef((e, t) => {
  const {
    className: n,
    children: r,
    isPressable: o = !0,
    onPress: a,
    onPressStart: s,
    onPressEnd: l,
    onPressChange: i,
    onPressUp: p,
    ...g
  } = e, { pressProps: x, isPressed: v } = Xn({
    onPress: a,
    onPressStart: s,
    onPressEnd: l,
    onPressChange: i,
    onPressUp: p,
    isDisabled: !o,
    ref: t
  }), c = {}, f = Hs(
    "glass-card",
    o && "cursor-pointer hover:shadow-lg hover:transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200",
    v && "transform scale-[0.98] shadow-lg",
    n
  );
  return /* @__PURE__ */ u(qs, { value: c, children: /* @__PURE__ */ u("div", { ref: t, className: f, ...o ? x : {}, ...g, children: r }) });
});
Us.displayName = "Card";
const Bs = he.forwardRef(({ children: e, className: t, ...n }, r) => /* @__PURE__ */ u("div", { ref: r, className: `card-body ${t || ""}`, ...n, children: e }));
Bs.displayName = "CardBody";
const Gs = he.forwardRef(({ children: e, className: t, ...n }, r) => /* @__PURE__ */ u("p", { ref: r, className: `card-description ${t || ""}`, ...n, children: e }));
Gs.displayName = "CardDescription";
const Fs = he.forwardRef(({ children: e, className: t, ...n }, r) => /* @__PURE__ */ u("div", { ref: r, className: `card-footer ${t || ""}`, ...n, children: e }));
Fs.displayName = "CardFooter";
const Ws = he.forwardRef(({ children: e, className: t, ...n }, r) => /* @__PURE__ */ u("div", { ref: r, className: `card-header ${t || ""}`, ...n, children: e }));
Ws.displayName = "CardHeader";
const Vs = he.forwardRef(({ children: e, className: t, ...n }, r) => /* @__PURE__ */ u("h3", { ref: r, className: `card-title ${t || ""}`, ...n, children: e }));
Vs.displayName = "CardTitle";
function ln({ label: e, defaultChecked: t = !1, onChange: n, name: r }) {
  const [o, a] = me(t);
  return /* @__PURE__ */ $("label", { className: "flex items-center space-x-3 cursor-pointer", children: [
    /* @__PURE__ */ u(
      "input",
      {
        type: "checkbox",
        name: r,
        checked: o,
        onChange: (s) => {
          a(s.target.checked), n(s);
        },
        className: "sr-only"
      }
    ),
    /* @__PURE__ */ u(
      "div",
      {
        className: `w-5 h-5 rounded border-2 flex items-center justify-center ${o ? "bg-accent-500 border-accent-500" : "border-gray-300"}`,
        children: o && /* @__PURE__ */ u(rr, { size: 12, className: "text-white" })
      }
    ),
    e && /* @__PURE__ */ u("span", { className: "text-sm", children: e })
  ] });
}
const ma = ({ label: e, selected: t = !1, onClick: n, className: r = "" }) => {
  const l = `px-3 py-1 rounded-full text-sm border transition-colors cursor-pointer ${t ? "bg-accent-500 border-accent-500 text-white" : "bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200"} ${r}`;
  return /* @__PURE__ */ u(
    "button",
    {
      type: "button",
      className: l,
      onClick: n,
      children: e
    }
  );
};
function ga({ title: e, children: t }) {
  const [n, r] = me(!1);
  return /* @__PURE__ */ $("div", { className: "glass-surface rounded-lg overflow-hidden", children: [
    /* @__PURE__ */ $(
      "div",
      {
        className: "flex items-center justify-between p-4 cursor-pointer hover:bg-glass-light",
        onClick: () => r(!n),
        children: [
          /* @__PURE__ */ u("h4", { className: "font-medium", children: e }),
          /* @__PURE__ */ u(
            Me,
            {
              size: 16,
              className: `transform transition-transform ${n ? "rotate-180" : ""}`
            }
          )
        ]
      }
    ),
    n && /* @__PURE__ */ u("div", { className: "px-4 pb-4 bg-gray-50", children: /* @__PURE__ */ u("div", { className: "pt-4 border-t border-gray-200", children: t }) })
  ] });
}
function Ie({ icon: e, onClick: t, className: n = "" }) {
  return /* @__PURE__ */ u(
    "button",
    {
      onClick: t,
      className: `p-3 rounded-lg glass-surface hover:bg-accent-500 hover:text-white transition-colors ${n}`.trim(),
      children: e
    }
  );
}
const ba = ({ logo: e, title: t, navContent: n, children: r }) => {
  const [o, a] = me(!1);
  return /* @__PURE__ */ $("div", { className: "flex h-full", children: [
    /* @__PURE__ */ u(
      "div",
      {
        className: `glass-surface transition-all duration-300 border-r border-gray-200 dark:border-gray-700 ${o ? "w-20" : "w-64"}`,
        children: /* @__PURE__ */ $("div", { className: "flex flex-col h-full", children: [
          /* @__PURE__ */ $("div", { className: "relative", children: [
            /* @__PURE__ */ u("div", { className: "absolute top-3 right-3 z-10", children: /* @__PURE__ */ u(
              Ie,
              {
                onClick: () => a(!o),
                icon: o ? /* @__PURE__ */ u(yn, { size: 18 }) : /* @__PURE__ */ u(Ae, { size: 18 }),
                "aria-label": "Toggle sidebar"
              }
            ) }),
            /* @__PURE__ */ $(
              "div",
              {
                className: `flex flex-col items-center pt-12 pb-4 px-4 ${o ? "pb-6" : "pb-8"}`,
                children: [
                  e && /* @__PURE__ */ u("div", { className: "flex-shrink-0 mb-3", children: e }),
                  !o && t && /* @__PURE__ */ u("div", { className: "font-semibold text-lg text-center leading-tight px-2", children: t })
                ]
              }
            ),
            /* @__PURE__ */ u("div", { className: "mx-4 mb-4 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" })
          ] }),
          /* @__PURE__ */ u("div", { className: "flex-grow overflow-y-auto px-4 pb-4", children: typeof n == "function" ? n(o) : n })
        ] })
      }
    ),
    /* @__PURE__ */ u("div", { className: "flex-1 p-4", children: r })
  ] });
};
function ya({ size: e = "md", children: t }) {
  const n = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl"
  }, r = `
    ${n[e] || n.md}
    mx-auto 
    glass-surface 
    p-4 
    rounded 
    text-center
  `;
  return /* @__PURE__ */ u("div", { className: r.trim(), children: t });
}
function va({ children: e, items: t }) {
  const [n, r] = me({ visible: !1, x: 0, y: 0 }), o = Te((s) => {
    s.preventDefault(), r({ visible: !0, x: s.pageX, y: s.pageY });
  }, []), a = Te(() => {
    n.visible && r((s) => ({ ...s, visible: !1 }));
  }, [n.visible]);
  return Pe(() => (document.addEventListener("click", a), () => {
    document.removeEventListener("click", a);
  }), [a]), /* @__PURE__ */ $("div", { onContextMenu: o, children: [
    e,
    n.visible && /* @__PURE__ */ u(
      "div",
      {
        className: "fixed glass-surface rounded-lg shadow-lg z-50 py-1",
        style: { top: n.y, left: n.x },
        children: t.map((s, l) => s.separator ? /* @__PURE__ */ u("hr", { className: "my-1 border-gray-200" }, `sep-${l}`) : /* @__PURE__ */ $(
          "button",
          {
            onClick: s.onClick,
            className: "flex items-center w-full px-4 py-2 text-sm hover:bg-glass-light transition-colors",
            children: [
              s.icon && /* @__PURE__ */ u("span", { className: "mr-2", children: s.icon }),
              s.label
            ]
          },
          s.label
        ))
      }
    )
  ] });
}
function xa({ icon: e, name: t, email: n, role: r, status: o }) {
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
  return /* @__PURE__ */ $("div", { className: s.trim(), children: [
    /* @__PURE__ */ $("div", { className: "flex items-center gap-3 mb-3", children: [
      /* @__PURE__ */ u("div", { className: "w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center", children: e || /* @__PURE__ */ u(sr, { size: 20, className: "text-white" }) }),
      /* @__PURE__ */ $("div", { children: [
        /* @__PURE__ */ u("h4", { className: "font-medium", children: t }),
        /* @__PURE__ */ u("p", { className: "text-sm text-gray-600", children: n })
      ] })
    ] }),
    /* @__PURE__ */ $("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ u("span", { className: "text-sm text-gray-500", children: r }),
      /* @__PURE__ */ u("span", { className: l.trim(), children: o })
    ] })
  ] });
}
function wa({ isOpen: e, onClose: t, title: n, children: r }) {
  return e ? /* @__PURE__ */ $(fn, { children: [
    /* @__PURE__ */ u(
      "div",
      {
        className: "fixed inset-0 bg-black bg-opacity-50 z-40",
        onClick: t
      }
    ),
    /* @__PURE__ */ u("div", { className: "fixed right-0 top-0 h-full w-80 glass-surface z-50 animate-slide-in", children: /* @__PURE__ */ $("div", { className: "p-6", children: [
      /* @__PURE__ */ $("div", { className: "flex justify-between items-center mb-6", children: [
        /* @__PURE__ */ u("h4", { className: "text-lg font-semibold", children: n }),
        /* @__PURE__ */ u(
          "button",
          {
            onClick: t,
            className: "p-2 hover:bg-glass-light rounded-lg transition-colors",
            children: /* @__PURE__ */ u(Ae, { size: 20 })
          }
        )
      ] }),
      r
    ] }) })
  ] }) : null;
}
const Gn = er({
  isOpen: !1,
  setIsOpen: () => {
  },
  onClose: () => {
  }
}), Ks = Gn.Provider, cr = () => {
  const e = hn(Gn);
  if (!e)
    throw new Error("useDropdown must be used within a Dropdown component");
  return e;
};
function Ne({ children: e, className: t = "" }) {
  const [n, r] = me(!1), o = tr(null), a = Te((l) => {
    o.current && !o.current.contains(l.target) && r(!1);
  }, []);
  Pe(() => (document.addEventListener("mousedown", a), () => {
    document.removeEventListener("mousedown", a);
  }), [a]);
  const s = Te(() => {
    r(!1);
  }, []);
  return /* @__PURE__ */ u(Ks, { value: { isOpen: n, setIsOpen: r, onClose: s }, children: /* @__PURE__ */ u("div", { className: `relative inline-block ${t}`, ref: o, children: e }) });
}
function Xs({ children: e, asChild: t }) {
  const { isOpen: n, setIsOpen: r } = cr(), o = (a) => {
    a.preventDefault(), r(!n);
  };
  return t ? e ? he.cloneElement(e, {
    onClick: (a) => {
      o(a), e.props.onClick && e.props.onClick(a);
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
function Qs({ children: e, align: t = "left", className: n = "" }) {
  const { isOpen: r } = cr(), o = tr(null), [a, s] = me({}), l = t === "right" || t === "end" ? "right-0" : t === "center" ? "left-1/2 -translate-x-1/2" : "left-0";
  return Pe(() => {
    if (r && o.current) {
      const i = o.current.getBoundingClientRect(), p = window.innerWidth, g = window.innerHeight, x = {};
      if (i.right > p && (x.right = "0", x.left = "auto", t === "center" && (x.transform = "none")), i.bottom > g) {
        const v = i.bottom - g;
        x.maxHeight = `${i.height - v - 10}px`, x.overflowY = "auto";
      }
      s(x);
    } else r || s({});
  }, [r, t]), r ? /* @__PURE__ */ u(
    "div",
    {
      ref: o,
      className: `absolute ${l} mt-2 glass-surface rounded-lg shadow-lg z-10 ${n}`,
      style: a,
      children: /* @__PURE__ */ u("div", { className: "py-1", children: e })
    }
  ) : null;
}
function Zs({ children: e, onClick: t, className: n = "", asChild: r }) {
  const { onClose: o } = cr(), a = (s) => {
    t && t(s), o();
  };
  return r ? e ? he.cloneElement(e, {
    onClick: (s) => {
      a(s), e.props.onClick && e.props.onClick(s);
    },
    className: `flex items-center w-full px-4 py-2 text-sm transition-colors hover:bg-glass-light ${n} ${e.props.className || ""}`
  }) : null : /* @__PURE__ */ u(
    "button",
    {
      onClick: a,
      className: `flex items-center w-full px-4 py-2 text-sm transition-colors hover:bg-glass-light ${n}`,
      children: e
    }
  );
}
function Ys() {
  return /* @__PURE__ */ u("hr", { className: "my-1 border-gray-200" });
}
Ne.Trigger = Xs;
Ne.Menu = Qs;
Ne.Item = Zs;
Ne.Separator = Ys;
function _a({ icon: e, title: t, message: n, action: r }) {
  const o = he.isValidElement(e);
  return o || e && (e.type, { ...e.props }), /* @__PURE__ */ $("div", { className: "text-center py-12", children: [
    o ? he.cloneElement(e, {
      size: e.props.size || 48,
      className: `mx-auto text-gray-400 mb-4 ${e.props.className || ""}`.trim()
    }) : e ? he.createElement(e, { size: 48, className: "mx-auto text-gray-400 mb-4" }) : /* @__PURE__ */ u(Wt, { size: 48, className: "mx-auto text-gray-400 mb-4" }),
    /* @__PURE__ */ u("h4", { className: "text-lg font-medium text-gray-600 mb-2", children: t }),
    /* @__PURE__ */ u("p", { className: "text-gray-500 mb-4", children: n }),
    r && /* @__PURE__ */ $("button", { className: "btn-fluid", onClick: r.onClick, children: [
      r.icon || /* @__PURE__ */ u(ao, { size: 16 }),
      r.label
    ] })
  ] });
}
function Ra({ data: e, renderItem: t, renderExpandedContent: n }) {
  const [r, o] = me({}), a = (s) => {
    o((l) => ({
      ...l,
      [s]: !l[s]
    }));
  };
  return !e || e.length === 0 ? /* @__PURE__ */ u("p", { className: "text-center text-gray-500", children: "Aucune donnée à afficher." }) : /* @__PURE__ */ u("div", { className: "space-y-2", children: e.map((s) => /* @__PURE__ */ $(
    "div",
    {
      className: "glass-card-border overflow-hidden rounded-lg",
      children: [
        /* @__PURE__ */ $(
          "div",
          {
            className: "flex items-center justify-between p-4 cursor-pointer hover:bg-base-200/50",
            onClick: () => a(s.id),
            children: [
              /* @__PURE__ */ u("div", { className: "flex-grow", children: t(s) }),
              /* @__PURE__ */ u("div", { className: "ml-4", children: r[s.id] ? /* @__PURE__ */ u(bn, { size: 20, className: "text-gray-500" }) : /* @__PURE__ */ u(Me, { size: 20, className: "text-gray-500" }) })
            ]
          }
        ),
        r[s.id] && /* @__PURE__ */ u("div", { className: "px-4 pt-2 pb-4 bg-base-200/30 border-t border-base-300/50", children: n(s) })
      ]
    },
    s.id
  )) });
}
function Ca({ onFileSelect: e, label: t, acceptedTypes: n }) {
  return /* @__PURE__ */ $("div", { className: "border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-accent-500 transition-colors", children: [
    /* @__PURE__ */ u(fo, { size: 48, className: "mx-auto text-gray-400 mb-4" }),
    /* @__PURE__ */ u("p", { className: "text-gray-600 mb-2", children: t || "Glissez-déposez vos fichiers ici ou" }),
    /* @__PURE__ */ $("label", { className: "btn-fluid cursor-pointer", children: [
      "Parcourir les fichiers",
      /* @__PURE__ */ u("input", { type: "file", className: "hidden", onChange: (o) => {
        const a = o.target.files[0];
        a && e && e(a);
      } })
    ] }),
    n && /* @__PURE__ */ u("p", { className: "text-xs text-gray-500 mt-2", children: n })
  ] });
}
const Js = ({ title: e, links: t }) => /* @__PURE__ */ $("div", { children: [
  /* @__PURE__ */ u("h4", { className: "font-semibold text-base-content mb-4", children: e }),
  /* @__PURE__ */ u("ul", { className: "space-y-2", children: t.map((n) => /* @__PURE__ */ u("li", { children: /* @__PURE__ */ u(In, { href: n.href, className: "text-sm text-base-content/80 hover:text-primary transition-colors", children: n.text }) }, n.href + n.text)) })
] });
function Ea({ sections: e, socialLinks: t, copyrightText: n }) {
  return !e || !t || !n ? null : /* @__PURE__ */ u("footer", { className: "glass-surface p-8 rounded-lg w-full", children: /* @__PURE__ */ $("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ u("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8", children: e.map((r) => /* @__PURE__ */ u(Js, { title: r.title, links: r.links }, r.title)) }),
    /* @__PURE__ */ $("div", { className: "mt-8 pt-8 border-t border-base-300/50 flex flex-col sm:flex-row justify-between items-center", children: [
      /* @__PURE__ */ u("p", { className: "text-sm text-base-content/70", children: n }),
      /* @__PURE__ */ u("div", { className: "flex items-center gap-2 mt-4 sm:mt-0", children: t.map((r) => /* @__PURE__ */ u(Ie, { asChild: !0, "aria-label": r.label, variant: "ghost", children: /* @__PURE__ */ u("a", { href: r.href, target: "_blank", rel: "noopener noreferrer", children: r.icon }) }, r.label)) })
    ] })
  ] }) });
}
const cn = ({
  children: e,
  variant: t = "standard",
  className: n = ""
}) => {
  const r = {
    standard: {
      icon: /* @__PURE__ */ u(nt, { size: 12 }),
      color: "text-gray-500"
    },
    error: {
      icon: /* @__PURE__ */ u(rt, { size: 12 }),
      color: "text-red-500"
    },
    success: {
      icon: /* @__PURE__ */ u(rr, { size: 12 }),
      color: "text-green-500"
    }
  }, o = r[t] || r.standard;
  return /* @__PURE__ */ $("p", { className: `text-sm flex items-center gap-1 mt-1 ${o.color} ${n}`, children: [
    o.icon,
    e
  ] });
}, Fn = he.forwardRef(
  ({ label: e, name: t, startIcon: n, endIcon: r, className: o, error: a, helperText: s, ...l }, i) => {
    const p = [
      "input-fluid",
      n ? "pl-10" : "",
      r ? "pr-10" : "",
      a ? "border-red-500" : "",
      o
    ].join(" ").trim();
    return /* @__PURE__ */ $("div", { children: [
      e && /* @__PURE__ */ u("label", { htmlFor: t, className: "block text-sm font-medium mb-2", children: e }),
      /* @__PURE__ */ $("div", { className: "relative", children: [
        n && /* @__PURE__ */ u("div", { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400", children: he.cloneElement(n, { size: 16 }) }),
        /* @__PURE__ */ u("input", { ref: i, id: t, name: t, className: p, ...l }),
        r && /* @__PURE__ */ u("div", { className: "absolute right-3 top-1/2 transform -translate-y-1/2", children: r })
      ] }),
      a && /* @__PURE__ */ u(cn, { variant: "error", children: a }),
      s && !a && /* @__PURE__ */ u(cn, { variant: "info", children: s })
    ] });
  }
);
Fn.displayName = "Input";
function ea({
  currentPage: e,
  totalPages: t,
  onPageChange: n,
  totalResults: r,
  resultsPerPage: o = 10
}) {
  const a = (e - 1) * o + 1, s = Math.min(e * o, r), l = (p) => {
    p >= 1 && p <= t && n(p);
  };
  return /* @__PURE__ */ $("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ $("p", { className: "text-sm text-gray-600", children: [
      "Affichage ",
      a,
      " à ",
      s,
      " sur ",
      r,
      " résultats"
    ] }),
    /* @__PURE__ */ $("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ u(
        "button",
        {
          onClick: () => l(e - 1),
          disabled: e === 1,
          className: "p-2 rounded-lg hover:bg-glass-light transition-colors disabled:opacity-50",
          children: /* @__PURE__ */ u(Jn, { size: 16 })
        }
      ),
      (() => {
        var g;
        const p = [];
        for (let x = 1; x <= t; x++)
          x === 1 || x === t || x >= e - 1 && x <= e + 1 ? p.push(
            /* @__PURE__ */ u(
              "button",
              {
                onClick: () => l(x),
                className: `px-3 py-1 rounded-lg text-sm transition-colors ${e === x ? "bg-accent-500 text-white" : "hover:bg-glass-light"}`,
                children: x
              },
              x
            )
          ) : ((g = p[p.length - 1]) == null ? void 0 : g.key) !== "..." && p.push(/* @__PURE__ */ u("span", { className: "px-3 py-1", children: "..." }, "..."));
        return p;
      })(),
      /* @__PURE__ */ u(
        "button",
        {
          onClick: () => l(e + 1),
          disabled: e === t,
          className: "p-2 rounded-lg hover:bg-glass-light transition-colors disabled:opacity-50",
          children: /* @__PURE__ */ u(nr, { size: 16 })
        }
      )
    ] })
  ] });
}
const ta = [
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
], ra = (e) => {
  switch (e) {
    case "Admin":
      return "destructive";
    case "Moderator":
      return "warning";
    default:
      return "default";
  }
}, na = (e) => {
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
function Na({
  data: e = ta,
  columns: t = [
    { field: "name", header: "Nom", sortable: !0, searchable: !0 },
    { field: "email", header: "Email", searchable: !0 },
    { field: "role", header: "Rôle", renderCell: (i) => /* @__PURE__ */ u(wr, { variant: ra(i.role), children: i.role }) },
    { field: "status", header: "Statut", renderCell: (i) => /* @__PURE__ */ u(wr, { variant: na(i.status), children: i.status }) },
    { field: "date", header: "Date", sortable: !0 }
  ],
  actions: n = [
    { icon: /* @__PURE__ */ u(ro, { size: 16 }), label: "Voir", onClick: (i) => console.log("View", i) },
    { icon: /* @__PURE__ */ u(vn, { size: 16 }), label: "Modifier", onClick: (i) => console.log("Edit", i) },
    { icon: /* @__PURE__ */ u(xn, { size: 16, className: "text-red-600" }), label: "Supprimer", onClick: (i) => console.log("Delete", i) }
  ],
  title: r = "Table Interactive",
  itemsPerPage: o = 5,
  selectable: a = !0,
  onRowSelect: s,
  onRowClick: l
}) {
  const [i, p] = me(""), [g, x] = me("asc"), [v, c] = me(""), [f, m] = me([]), [h, A] = me(1), [w, d] = me(e);
  ct(() => {
    d(e);
  }, [e]);
  const N = (R) => {
    const E = i === R && g === "asc" ? "desc" : "asc";
    p(R), x(E), d(
      (T) => [...T].sort((S, H) => S[R] < H[R] ? E === "asc" ? -1 : 1 : S[R] > H[R] ? E === "asc" ? 1 : -1 : 0)
    );
  }, C = (R) => {
    const E = f.includes(R) ? f.filter((T) => T !== R) : [...f, R];
    if (m(E), s) {
      const T = w.filter((S) => E.includes(S.id));
      s(T);
    }
  }, P = (R) => {
    const E = R.target.checked ? y.map((T) => T.id) : [];
    if (m(E), s) {
      const T = w.filter((S) => E.includes(S.id));
      s(T);
    }
  }, _ = (R) => {
    A(R);
  }, b = ct(() => {
    if (!v) return w;
    const R = t.filter((E) => E.searchable).map((E) => E.field);
    return w.filter((E) => R.some(
      (T) => String(E[T]).toLowerCase().includes(v.toLowerCase())
    ));
  }, [w, v, t]), I = Math.ceil(b.length / o), y = ct(() => {
    const R = (h - 1) * o;
    return b.slice(R, R + o);
  }, [b, h, o]);
  return /* @__PURE__ */ $("section", { className: "glass-card", children: [
    r && /* @__PURE__ */ u("h3", { className: "text-xl font-semibold mb-6", children: r }),
    /* @__PURE__ */ $("div", { className: "flex flex-col sm:flex-row gap-4 mb-6", children: [
      /* @__PURE__ */ u("div", { className: "flex-1", children: /* @__PURE__ */ u(
        Fn,
        {
          type: "text",
          placeholder: "Rechercher...",
          value: v,
          onChange: (R) => c(R.target.value),
          startIcon: /* @__PURE__ */ u(Vt, { size: 20 })
        }
      ) }),
      /* @__PURE__ */ u(it, { variant: "ghost", startIcon: /* @__PURE__ */ u(io, { size: 16 }), children: "Filtrer" })
    ] }),
    /* @__PURE__ */ u("div", { className: "overflow-x-auto", children: /* @__PURE__ */ $("table", { className: "w-full", children: [
      /* @__PURE__ */ u("thead", { children: /* @__PURE__ */ $("tr", { className: "border-b border-gray-200", children: [
        a && /* @__PURE__ */ u("th", { className: "text-left p-3 w-10", children: /* @__PURE__ */ u(
          ln,
          {
            checked: y.length > 0 && y.every((R) => f.includes(R.id)),
            onChange: P
          }
        ) }),
        t.map((R) => /* @__PURE__ */ u(
          "th",
          {
            className: `text-left p-3 ${R.sortable ? "cursor-pointer hover:bg-gray-50" : ""}`,
            onClick: () => R.sortable && N(R.field),
            children: /* @__PURE__ */ $("div", { className: "flex items-center gap-2", children: [
              R.header,
              R.sortable && i === R.field && (g === "asc" ? /* @__PURE__ */ u(bn, { size: 16 }) : /* @__PURE__ */ u(Me, { size: 16 }))
            ] })
          },
          R.field
        )),
        n && n.length > 0 && /* @__PURE__ */ u("th", { className: "text-right p-3", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ u("tbody", { children: y.length === 0 ? /* @__PURE__ */ u("tr", { children: /* @__PURE__ */ u(
        "td",
        {
          colSpan: a ? t.length + (n.length > 0 ? 2 : 1) : t.length + (n.length > 0 ? 1 : 0),
          className: "p-6 text-center text-gray-500",
          children: "Aucun résultat trouvé"
        }
      ) }) : y.map((R) => /* @__PURE__ */ $(
        "tr",
        {
          className: `border-b border-gray-100 hover:bg-gray-50 ${l ? "cursor-pointer" : ""}`,
          onClick: () => l && l(R),
          children: [
            a && /* @__PURE__ */ u("td", { className: "p-3", onClick: (E) => E.stopPropagation(), children: /* @__PURE__ */ u(
              ln,
              {
                checked: f.includes(R.id),
                onChange: () => C(R.id)
              }
            ) }),
            t.map((E) => /* @__PURE__ */ u("td", { className: "p-3", children: E.renderCell ? E.renderCell(R) : /* @__PURE__ */ u("span", { className: E.field === "name" ? "font-medium" : "text-gray-600", children: R[E.field] }) }, `${R.id}-${E.field}`)),
            n && n.length > 0 && /* @__PURE__ */ u("td", { className: "p-3 text-right", onClick: (E) => E.stopPropagation(), children: /* @__PURE__ */ u("div", { className: "flex justify-end gap-1", children: n.map((E, T) => /* @__PURE__ */ u(
              Ie,
              {
                onClick: () => E.onClick(R),
                title: E.label,
                children: E.icon
              },
              T
            )) }) })
          ]
        },
        R.id
      )) })
    ] }) }),
    f.length > 0 && /* @__PURE__ */ u("div", { className: "mt-4 p-3 bg-blue-50 rounded-lg", children: /* @__PURE__ */ $("p", { className: "text-sm text-blue-700", children: [
      f.length,
      " élément(s) sélectionné(s)"
    ] }) }),
    b.length > o && /* @__PURE__ */ u("div", { className: "mt-6", children: /* @__PURE__ */ u(
      ea,
      {
        currentPage: h,
        totalPages: I,
        onPageChange: _,
        totalResults: b.length,
        resultsPerPage: o
      }
    ) })
  ] });
}
const Aa = ({
  children: e,
  variant: t = "standard",
  htmlFor: n,
  className: r = ""
}) => {
  const o = {
    standard: "text-foreground",
    required: "text-red-600",
    optional: "text-gray-500"
  }, a = t === "required" ? /* @__PURE__ */ $(fn, { children: [
    e,
    " ",
    /* @__PURE__ */ u("span", { className: "text-red-600", children: "*" })
  ] }) : e;
  return /* @__PURE__ */ u(
    "label",
    {
      htmlFor: n,
      className: `block text-sm font-medium mb-1 ${o[t]} ${r}`,
      children: a
    }
  );
};
function ka({ isOpen: e, onClose: t, title: n, children: r }) {
  return e ? /* @__PURE__ */ u("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", onClick: t, children: /* @__PURE__ */ $("div", { className: "modal-fluid show w-full max-w-md", onClick: (o) => o.stopPropagation(), children: [
    /* @__PURE__ */ $("div", { className: "flex justify-between items-center mb-4", children: [
      /* @__PURE__ */ u("h4", { className: "text-lg font-semibold", children: n }),
      /* @__PURE__ */ u(Ie, { icon: /* @__PURE__ */ u(Ae, { size: 20 }), onClick: t })
    ] }),
    /* @__PURE__ */ u("div", { children: r })
  ] }) }) : null;
}
function Sa({ type: e = "info", message: t, timestamp: n, onClose: r }) {
  const o = {
    info: /* @__PURE__ */ u(nt, { size: 20, className: "text-blue-500 mt-0.5" }),
    success: /* @__PURE__ */ u(or, { size: 20, className: "text-green-500 mt-0.5" }),
    warning: /* @__PURE__ */ u(rt, { size: 20, className: "text-yellow-500 mt-0.5" }),
    error: /* @__PURE__ */ u(Ae, { size: 20, className: "text-red-500 mt-0.5" })
  };
  return /* @__PURE__ */ u("div", { className: `max-w-sm w-full p-4 rounded-lg shadow-lg ${{
    info: "bg-blue-50 border border-blue-200",
    success: "bg-green-50 border border-green-200",
    warning: "bg-yellow-50 border border-yellow-200",
    error: "bg-red-50 border border-red-200"
  }[e]}`, children: /* @__PURE__ */ $("div", { className: "flex items-start gap-3", children: [
    o[e],
    /* @__PURE__ */ $("div", { className: "flex-1", children: [
      /* @__PURE__ */ u("p", { className: "text-sm font-medium", children: t }),
      n && /* @__PURE__ */ u("p", { className: "text-xs text-gray-500 mt-1", children: new Date(n).toLocaleTimeString() })
    ] }),
    /* @__PURE__ */ u("button", { onClick: r, className: "text-gray-400 hover:text-gray-600", children: /* @__PURE__ */ u(Ae, { size: 16 }) })
  ] }) });
}
function Pa({ value: e, label: t, showPercentage: n = !0 }) {
  const r = Math.max(0, Math.min(100, e));
  return /* @__PURE__ */ $("div", { children: [
    /* @__PURE__ */ $("div", { className: "flex justify-between mb-2", children: [
      t && /* @__PURE__ */ u("span", { className: "text-sm font-medium", children: t }),
      n && /* @__PURE__ */ $("span", { className: "text-sm text-gray-500", children: [
        r,
        "%"
      ] })
    ] }),
    /* @__PURE__ */ u(
      "div",
      {
        className: "progress-fluid",
        style: { "--progress-width": `${r}%` },
        role: "progressbar",
        "aria-valuenow": r,
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }
    )
  ] });
}
function Oa({ options: e, name: t, selectedValue: n, onChange: r }) {
  return /* @__PURE__ */ u("div", { className: "space-y-3", children: e.map((o) => /* @__PURE__ */ $("label", { className: "flex items-center space-x-3 cursor-pointer", children: [
    /* @__PURE__ */ $("div", { className: "relative", children: [
      /* @__PURE__ */ u(
        "input",
        {
          type: "radio",
          name: t,
          value: o.value,
          checked: n === o.value,
          onChange: (a) => r(a.target.value),
          className: "sr-only"
        }
      ),
      /* @__PURE__ */ u(
        "div",
        {
          className: `w-5 h-5 rounded-full border-2 glass-surface flex items-center justify-center transition-colors ${n === o.value ? "bg-accent-500 border-accent-500" : "border-gray-300"}`,
          children: n === o.value && /* @__PURE__ */ u("div", { className: "w-2 h-2 bg-white rounded-full" })
        }
      )
    ] }),
    /* @__PURE__ */ u("span", { className: "text-sm", children: o.label })
  ] }, o.value)) });
}
const Ta = ({ title: e, children: t, variant: n = "default", className: r = "" }) => {
  const o = "glass-surface rounded-lg", a = {
    default: "p-6",
    highlighted: "p-8 border-2 border-accent-500",
    gradient: "p-4 bg-gradient-to-r from-blue-50 to-purple-50"
  }, s = [
    o,
    a[n] || a.default,
    r
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ $("div", { className: s, children: [
    e && /* @__PURE__ */ u("h4", { className: "font-medium mb-2", children: e }),
    /* @__PURE__ */ u("p", { className: "text-sm text-gray-600", children: t })
  ] });
}, Ia = ({ label: e, options: t, value: n, onChange: r, placeholder: o, disabled: a = !1 }) => {
  const [s, l] = me(!1), i = tr(null), p = () => {
    a || l(!s);
  }, g = (c) => {
    r(c), l(!1);
  }, x = (c) => {
    i.current && !i.current.contains(c.target) && l(!1);
  };
  Pe(() => (document.addEventListener("mousedown", x), () => {
    document.removeEventListener("mousedown", x);
  }), []);
  const v = t.find((c) => c.value === n);
  return /* @__PURE__ */ $("div", { className: "relative w-full", ref: i, children: [
    e && /* @__PURE__ */ u("label", { className: "block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300", children: e }),
    /* @__PURE__ */ $("div", { className: "relative", children: [
      /* @__PURE__ */ $(
        "button",
        {
          type: "button",
          className: `input-fluid w-full text-left flex items-center justify-between ${a ? "bg-gray-100 dark:bg-gray-800 cursor-not-allowed" : ""}`,
          onClick: p,
          disabled: a,
          "aria-haspopup": "listbox",
          "aria-expanded": s,
          children: [
            /* @__PURE__ */ u("span", { className: v ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400", children: v ? v.label : o }),
            /* @__PURE__ */ u(Me, { size: 16, className: `transition-transform ${s ? "rotate-180" : ""}` })
          ]
        }
      ),
      s && /* @__PURE__ */ u("div", { className: "absolute top-full left-0 right-0 mt-1 glass-surface rounded-lg shadow-lg z-20 overflow-hidden", children: /* @__PURE__ */ u("div", { className: "py-1 max-h-60 overflow-y-auto", children: t.map((c) => /* @__PURE__ */ u(
        "button",
        {
          type: "button",
          className: "w-full text-left px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-glass-light dark:hover:bg-glass-dark-light transition-colors focus:outline-none focus:bg-glass-light dark:focus:bg-glass-dark-light",
          onClick: () => g(c.value),
          role: "option",
          "aria-selected": n === c.value,
          children: c.label
        },
        c.value
      )) }) })
    ] })
  ] });
};
function Wn({
  item: e,
  isActive: t,
  isCollapsed: n = !1,
  onClick: r,
  level: o = 0,
  activePath: a = [],
  wrapper: s
}) {
  const [l, i] = me(() => {
    const c = e.resource || e.id;
    return a.includes(c);
  }), p = e.children && e.children.length > 0, g = e.icon, x = e.name || e.label;
  e.resource || e.id;
  const v = Te((c) => {
    p && (c.preventDefault(), i(!l)), r && r(e);
  }, [p, l, e, r]);
  return /* @__PURE__ */ $("div", { className: "w-full", children: [
    /* @__PURE__ */ $(
      "button",
      {
        onClick: v,
        className: `nav-item w-full text-left ${p ? "justify-between" : ""}`,
        children: [
          /* @__PURE__ */ $("div", { className: "flex items-center gap-2", children: [
            g && /* @__PURE__ */ u(g, { size: 16 }),
            n ? "" : x
          ] }),
          p && /* @__PURE__ */ u(
            nr,
            {
              size: 16,
              className: `transform transition-transform ${l ? "rotate-90" : ""}`
            }
          )
        ]
      }
    ),
    p && l && !n && /* @__PURE__ */ u("div", { className: "ml-4 mt-1 space-y-1 border-l pl-2 border-primary-100 dark:border-primary-800", children: e.children.map((c) => {
      const f = c.id, m = /* @__PURE__ */ u(
        Wn,
        {
          item: c,
          isActive: a.includes(f),
          isCollapsed: n,
          onClick: r,
          level: o + 1,
          activePath: a,
          wrapper: s
        },
        f
      );
      if (s) {
        const h = s(m, c);
        return h && h.key !== void 0 && h.key !== null ? h : /* @__PURE__ */ u("div", { children: h }, f);
      } else
        return m;
    }) })
  ] });
}
function Ma({
  items: e = [],
  isCollapsed: t = !1,
  onNavigate: n,
  activePath: r = [],
  className: o = "",
  wrapper: a
}) {
  const s = Te((i) => {
    n && n(i);
  }, [n]), l = (i) => {
    const p = i.resource || i.id, g = /* @__PURE__ */ u(
      Wn,
      {
        item: i,
        isActive: r.includes(p),
        isCollapsed: t,
        onClick: s,
        activePath: r,
        wrapper: a
      },
      p
    );
    return a ? a(g, i) : g;
  };
  return /* @__PURE__ */ u("nav", { className: `space-y-1 ${o}`, children: e.map((i) => {
    const p = i.resource || i.id;
    return /* @__PURE__ */ u("div", { children: l(i) }, p);
  }) });
}
function La({ className: e, ...t }) {
  const r = ["animate-pulse rounded-md bg-gray-300 dark:bg-gray-700", e].filter(Boolean).join(" ");
  return /* @__PURE__ */ u(
    "div",
    {
      className: r,
      ...t
    }
  );
}
function $a({ message: e, time: t, onDismiss: n }) {
  return /* @__PURE__ */ $("div", { className: "flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg", children: [
    /* @__PURE__ */ $("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ u(gn, { size: 16, className: "text-blue-600" }),
      /* @__PURE__ */ $("div", { children: [
        /* @__PURE__ */ u("p", { className: "text-sm font-medium", children: e }),
        t && /* @__PURE__ */ $("p", { className: "text-xs text-gray-500", children: [
          "il y a ",
          t
        ] })
      ] })
    ] }),
    /* @__PURE__ */ u(
      "button",
      {
        onClick: n,
        className: "p-1 hover:bg-blue-100 rounded",
        children: /* @__PURE__ */ u(Ae, { size: 16 })
      }
    )
  ] });
}
const un = {
  sm: "h-4 w-4",
  md: "h-8 w-8",
  lg: "h-12 w-12"
}, dn = {
  sm: "h-1.5 w-1.5",
  md: "h-2 w-2",
  lg: "h-3 w-3"
};
function ja({ type: e = "spin", size: t = "md" }) {
  if (e === "dots") {
    const r = dn[t] || dn.md;
    return /* @__PURE__ */ $("div", { className: "flex space-x-1", children: [
      /* @__PURE__ */ u("div", { className: `${r} bg-accent-500 rounded-full animate-bounce` }),
      /* @__PURE__ */ u(
        "div",
        {
          className: `${r} bg-accent-500 rounded-full animate-bounce`,
          style: { animationDelay: "0.1s" }
        }
      ),
      /* @__PURE__ */ u(
        "div",
        {
          className: `${r} bg-accent-500 rounded-full animate-bounce`,
          style: { animationDelay: "0.2s" }
        }
      )
    ] });
  }
  const n = un[t] || un.md;
  return e === "pulse" ? /* @__PURE__ */ u("div", { className: `animate-pulse ${n} bg-accent-500 rounded-full` }) : /* @__PURE__ */ u(
    "div",
    {
      className: `animate-spin rounded-full ${n} border-4 border-accent-500 border-t-transparent`
    }
  );
}
const za = ({
  direction: e = "vertical",
  spacing: t = 4,
  children: n,
  className: r = "",
  as: o = "div",
  ...a
}) => {
  const s = "flex", l = e === "vertical" ? "flex-col" : "flex-row", i = `gap-${t}`, p = [
    s,
    l,
    i,
    r
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ u(o, { className: p, ...a, children: n });
};
function Ha({ title: e, value: t, change: n, trend: r }) {
  return /* @__PURE__ */ $("div", { className: "glass-surface p-4 rounded-lg", children: [
    /* @__PURE__ */ $("div", { className: "flex items-center justify-between mb-2", children: [
      /* @__PURE__ */ u("h4", { className: "text-sm font-medium text-gray-600", children: e }),
      r === "up" ? /* @__PURE__ */ u(uo, { size: 16, className: "text-green-500" }) : /* @__PURE__ */ u(co, { size: 16, className: "text-red-500" })
    ] }),
    /* @__PURE__ */ u("p", { className: "text-2xl font-bold mb-1", children: t }),
    /* @__PURE__ */ $(
      "p",
      {
        className: `text-sm ${r === "up" ? "text-green-600" : "text-red-600"}`,
        children: [
          n,
          " ce mois"
        ]
      }
    )
  ] });
}
function Da({ steps: e, currentStep: t }) {
  return /* @__PURE__ */ u("div", { className: "flex items-center", children: e.map((n, r) => /* @__PURE__ */ $("div", { className: "flex items-center", children: [
    /* @__PURE__ */ $("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ u(
        "div",
        {
          className: `flex items-center justify-center w-8 h-8 rounded-full border-2 transition-colors duration-300 ${t >= n.id ? "bg-accent-500 border-accent-500 text-white" : "border-gray-300 text-gray-400"}`,
          children: t > n.id ? /* @__PURE__ */ u(rr, { size: 16 }) : n.id
        }
      ),
      /* @__PURE__ */ $("div", { className: "mt-2 text-center", children: [
        /* @__PURE__ */ u("div", { className: "text-sm font-medium", children: n.title }),
        /* @__PURE__ */ u("div", { className: "text-xs text-gray-500", children: n.description })
      ] })
    ] }),
    r < e.length - 1 && /* @__PURE__ */ u(
      "div",
      {
        className: `flex-1 h-0.5 mx-4 transition-colors duration-300 ${t > n.id ? "bg-accent-500" : "bg-gray-300"}`
      }
    )
  ] }, n.id)) });
}
function qa({ tabs: e }) {
  var r;
  const [t, n] = me(e && e.length > 0 ? e[0].id : null);
  return !e || e.length === 0 ? null : /* @__PURE__ */ $("div", { children: [
    /* @__PURE__ */ u("div", { className: "border-b border-gray-200 mb-4", children: /* @__PURE__ */ u("nav", { className: "flex space-x-8", children: e.map((o) => /* @__PURE__ */ u(
      "button",
      {
        onClick: () => n(o.id),
        className: `py-2 px-1 border-b-2 font-medium text-sm transition-colors ${t === o.id ? "border-accent-500 text-accent-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`,
        children: o.label
      },
      o.id
    )) }) }),
    /* @__PURE__ */ u("div", { className: "py-4", children: (r = e.find((o) => o.id === t)) == null ? void 0 : r.content })
  ] });
}
function Ua({ label: e, name: t, value: n, onChange: r, placeholder: o, maxLength: a, ...s }) {
  return /* @__PURE__ */ $("div", { children: [
    e && /* @__PURE__ */ u("label", { htmlFor: t, className: "block text-sm font-medium mb-2", children: e }),
    /* @__PURE__ */ u(
      "textarea",
      {
        id: t,
        name: t,
        value: n,
        onChange: r,
        placeholder: o,
        className: "input-fluid min-h-[120px] resize-y",
        maxLength: a,
        ...s
      }
    ),
    a && /* @__PURE__ */ $("p", { className: "text-sm text-gray-500 mt-1", children: [
      n.length,
      "/",
      a,
      " caractères"
    ] })
  ] });
}
function oa(e = {}) {
  const [t, n] = me("light"), [r, o] = me(!1);
  Pe(() => {
    if (o(!0), e.mode === "auto") {
      const i = window.matchMedia("(prefers-color-scheme: dark)").matches;
      n(i ? "dark" : "light");
    } else
      n(e.mode || "light");
  }, [e.mode]);
  const a = () => {
    const i = t === "light" ? "dark" : "light";
    n(i), document.documentElement.setAttribute("data-theme", i);
  }, s = (i) => {
    const p = document.documentElement;
    Object.entries(i).forEach(([g, x]) => {
      const v = `--fg-${g.replace(/([A-Z])/g, "-$1").toLowerCase()}`;
      p.style.setProperty(v, x.toString());
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
    ].forEach((g) => {
      i.style.removeProperty(g);
    });
  };
  return Pe(() => {
    r && document.documentElement.setAttribute("data-theme", t);
  }, [t, r]), Pe(() => {
    e.config && r && s(e.config);
  }, [e.config, r]), {
    theme: t,
    toggleTheme: a,
    applyTheme: s,
    resetTheme: l,
    mounted: r
  };
}
const Vn = er();
function Ba({ children: e, mode: t = "auto", config: n }) {
  const r = oa({ mode: t, config: n });
  return /* @__PURE__ */ u(Vn.Provider, { value: r, children: e });
}
function sa() {
  const e = hn(Vn);
  if (!e)
    throw new Error("useThemeContext doit être utilisé dans un ThemeProvider");
  return e;
}
function Ga({ showLabel: e = !0 }) {
  const { theme: t, toggleTheme: n } = sa();
  return /* @__PURE__ */ u(
    it,
    {
      onClick: n,
      "aria-label": `Passer au mode ${t === "light" ? "sombre" : "clair"}`,
      startIcon: t === "light" ? /* @__PURE__ */ u(so, { size: 16 }) : /* @__PURE__ */ u(lo, { size: 16 }),
      children: e && (t === "light" ? "Mode sombre" : "Mode clair")
    }
  );
}
const aa = (e) => {
  switch (e) {
    case "user":
      return /* @__PURE__ */ u(sr, { size: 16, className: "text-white" });
    case "order":
      return /* @__PURE__ */ u(Wt, { size: 16, className: "text-white" });
    case "update":
      return /* @__PURE__ */ u(vn, { size: 16, className: "text-white" });
    case "delete":
      return /* @__PURE__ */ u(xn, { size: 16, className: "text-white" });
    default:
      return null;
  }
}, ia = (e) => {
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
function Fa({ items: e }) {
  return !e || e.length === 0 ? null : /* @__PURE__ */ u("div", { className: "space-y-4", children: e.map((t) => /* @__PURE__ */ $("div", { className: "flex items-start gap-4", children: [
    /* @__PURE__ */ u(
      "div",
      {
        className: `w-8 h-8 rounded-full flex items-center justify-center ${ia(t.type)}`,
        children: aa(t.type)
      }
    ),
    /* @__PURE__ */ $("div", { className: "flex-1", children: [
      /* @__PURE__ */ u("p", { className: "font-medium", children: t.title }),
      /* @__PURE__ */ $("p", { className: "text-sm text-gray-600", children: [
        "par ",
        t.user
      ] }),
      /* @__PURE__ */ $("p", { className: "text-xs text-gray-500 flex items-center gap-1", children: [
        /* @__PURE__ */ u(to, { size: 12 }),
        "il y a ",
        t.time
      ] })
    ] })
  ] }, t.id)) });
}
function Wa({ type: e = "info", message: t, onClose: n }) {
  const r = {
    info: /* @__PURE__ */ u(nt, { size: 20, className: "text-blue-500 mt-0.5" }),
    success: /* @__PURE__ */ u(or, { size: 20, className: "text-green-500 mt-0.5" }),
    warning: /* @__PURE__ */ u(rt, { size: 20, className: "text-yellow-500 mt-0.5" }),
    error: /* @__PURE__ */ u(Ae, { size: 20, className: "text-red-500 mt-0.5" })
  };
  return /* @__PURE__ */ u("div", { className: `fixed bottom-5 right-5 max-w-sm w-full p-4 rounded-lg shadow-lg animate-slide-in-bottom ${{
    info: "bg-blue-50 border border-blue-200",
    success: "bg-green-50 border border-green-200",
    warning: "bg-yellow-50 border border-yellow-200",
    error: "bg-red-50 border border-red-200"
  }[e]}`, children: /* @__PURE__ */ $("div", { className: "flex items-start gap-3", children: [
    r[e],
    /* @__PURE__ */ u("div", { className: "flex-1", children: /* @__PURE__ */ u("p", { className: "text-sm font-medium", children: t }) }),
    /* @__PURE__ */ u("button", { onClick: n, className: "text-gray-400 hover:text-gray-600", children: /* @__PURE__ */ u(Ae, { size: 16 }) })
  ] }) });
}
function Va({ label: e, checked: t, onChange: n }) {
  return /* @__PURE__ */ $("div", { className: "flex items-center justify-between", children: [
    e && /* @__PURE__ */ u("span", { className: "text-sm font-medium", children: e }),
    /* @__PURE__ */ u(
      "button",
      {
        onClick: n,
        className: `toggle-fluid ${t ? "active" : ""}`,
        children: /* @__PURE__ */ u("div", { className: "toggle-handle" })
      }
    )
  ] });
}
function Ka({
  logo: e,
  navItems: t = [],
  userDropdownItems: n = [],
  userAvatar: r,
  userName: o,
  notificationCount: a = 0,
  onSearch: s,
  onNavItemClick: l,
  showSearch: i = !0,
  showNotifications: p = !0
}) {
  const [g, x] = me(""), [v, c] = me(!1), [f, m] = me("");
  me(() => {
    t.length > 0 && !g && x(t[0].id);
  }, [t]);
  const h = (w) => {
    x(w.id), l && l(w);
  }, A = (w) => {
    m(w.target.value), s && s(w.target.value);
  };
  return /* @__PURE__ */ $("div", { className: "nav-fluid", children: [
    /* @__PURE__ */ $("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ $("div", { className: "flex items-center gap-6", children: [
        e && /* @__PURE__ */ u("div", { className: "font-bold text-lg", children: e }),
        /* @__PURE__ */ u("nav", { className: "hidden md:flex space-x-8", children: t.map((w) => /* @__PURE__ */ $(
          "button",
          {
            className: `flex items-center gap-2 text-sm font-medium ${g === w.id ? "text-accent-600" : "text-gray-600 hover:text-gray-800"}`,
            onClick: () => h(w),
            children: [
              w.icon && /* @__PURE__ */ u(w.icon, { size: 16 }),
              w.label
            ]
          },
          w.id
        )) })
      ] }),
      /* @__PURE__ */ $("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ $("div", { className: "hidden md:flex items-center gap-2", children: [
          i && /* @__PURE__ */ $("div", { className: "relative", children: [
            /* @__PURE__ */ u(
              "input",
              {
                type: "text",
                placeholder: "Rechercher...",
                className: "py-1 pl-10 pr-4 rounded-lg bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 w-64",
                value: f,
                onChange: A
              }
            ),
            /* @__PURE__ */ u(
              Vt,
              {
                size: 16,
                className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              }
            )
          ] }),
          p && /* @__PURE__ */ u(
            Ie,
            {
              icon: /* @__PURE__ */ u(gn, { size: 20 }),
              "aria-label": "Notifications",
              variant: "ghost",
              badge: a > 0 ? a : void 0
            }
          ),
          n.length > 0 && /* @__PURE__ */ $(Ne, { children: [
            /* @__PURE__ */ u(Ne.Trigger, { asChild: !0, children: /* @__PURE__ */ $(
              it,
              {
                variant: "ghost",
                className: "flex items-center gap-2",
                endIcon: /* @__PURE__ */ u(Me, { size: 16 }),
                children: [
                  r ? typeof r == "string" ? /* @__PURE__ */ u(
                    Ue,
                    {
                      src: r,
                      alt: o || "User",
                      size: "sm",
                      fallback: (o || "U").charAt(0)
                    }
                  ) : r : /* @__PURE__ */ u(
                    Ue,
                    {
                      size: "sm",
                      fallback: (o || "U").charAt(0)
                    }
                  ),
                  o && /* @__PURE__ */ u("span", { className: "font-medium", children: o })
                ]
              }
            ) }),
            /* @__PURE__ */ u(Ne.Menu, { children: n.map(
              (w, d) => w.isSeparator ? /* @__PURE__ */ u(Ne.Separator, {}, `sep-${d}`) : /* @__PURE__ */ $(
                Ne.Item,
                {
                  onClick: w.onClick,
                  className: w.isDanger ? "text-red-600 hover:text-red-700" : "",
                  children: [
                    w.icon,
                    w.label
                  ]
                },
                `${w.label}-${d}`
              )
            ) })
          ] })
        ] }),
        /* @__PURE__ */ u(
          Ie,
          {
            icon: v ? /* @__PURE__ */ u(Ae, { size: 24 }) : /* @__PURE__ */ u(yn, { size: 24 }),
            onClick: () => c(!v),
            className: "md:hidden",
            "aria-label": "Menu",
            variant: "ghost"
          }
        )
      ] })
    ] }),
    v && /* @__PURE__ */ u("div", { className: "md:hidden mt-4 py-4 border-t", children: /* @__PURE__ */ $("nav", { className: "flex flex-col space-y-4", children: [
      t.map((w) => /* @__PURE__ */ $(
        "button",
        {
          className: `flex items-center gap-2 text-sm font-medium ${g === w.id ? "text-accent-600" : "text-gray-600"}`,
          onClick: () => {
            h(w), c(!1);
          },
          children: [
            w.icon && /* @__PURE__ */ u(w.icon, { size: 18 }),
            w.label
          ]
        },
        w.id
      )),
      /* @__PURE__ */ $("div", { className: "pt-4 border-t", children: [
        i && /* @__PURE__ */ $("div", { className: "relative mb-4", children: [
          /* @__PURE__ */ u(
            "input",
            {
              type: "text",
              placeholder: "Rechercher...",
              className: "w-full py-2 pl-10 pr-4 rounded-lg bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500",
              value: f,
              onChange: A
            }
          ),
          /* @__PURE__ */ u(
            Vt,
            {
              size: 16,
              className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            }
          )
        ] }),
        o && /* @__PURE__ */ $("div", { className: "flex items-center gap-3 mb-2", children: [
          r ? typeof r == "string" ? /* @__PURE__ */ u(
            Ue,
            {
              src: r,
              alt: o,
              size: "sm",
              fallback: o.charAt(0)
            }
          ) : r : /* @__PURE__ */ u(
            Ue,
            {
              size: "sm",
              fallback: o.charAt(0)
            }
          ),
          /* @__PURE__ */ u("span", { className: "font-medium", children: o })
        ] }),
        n.filter((w) => !w.isSeparator).map((w, d) => /* @__PURE__ */ $(
          "button",
          {
            onClick: w.onClick,
            className: `flex items-center gap-2 text-sm font-medium py-2 w-full ${w.isDanger ? "text-red-600" : "text-gray-600"}`,
            children: [
              w.icon,
              w.label
            ]
          },
          `${w.label}-${d}`
        ))
      ] })
    ] }) })
  ] });
}
function Xa({ view: e, setView: t }) {
  return /* @__PURE__ */ $("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ u(
      "button",
      {
        onClick: () => t("grid"),
        className: `p-2 rounded-lg transition-colors ${e === "grid" ? "bg-accent-500 text-white" : "hover:bg-glass-light"}`,
        children: /* @__PURE__ */ u(no, { size: 16 })
      }
    ),
    /* @__PURE__ */ u(
      "button",
      {
        onClick: () => t("list"),
        className: `p-2 rounded-lg transition-colors ${e === "list" ? "bg-accent-500 text-white" : "hover:bg-glass-light"}`,
        children: /* @__PURE__ */ u(oo, { size: 16 })
      }
    )
  ] });
}
export {
  fa as Accordion,
  pa as Alert,
  Ue as Avatar,
  wr as Badge,
  ha as Breadcrumb,
  it as Button,
  Us as Card,
  Bs as CardBody,
  Gs as CardDescription,
  Fs as CardFooter,
  Ws as CardHeader,
  Vs as CardTitle,
  ln as Checkbox,
  ma as Chip,
  ga as Collapsible,
  ba as CollapsibleSidebar,
  ya as Container,
  va as ContextMenu,
  xa as DataCard,
  wa as Drawer,
  Ne as Dropdown,
  _a as EmptyState,
  Ra as ExpandableTable,
  Ca as FileUploader,
  Ea as Footer,
  cn as HelperText,
  Ie as IconButton,
  Fn as Input,
  Na as InteractiveTable,
  Aa as Label,
  In as Link,
  ka as Modal,
  Sa as Notification,
  ea as Pagination,
  Pa as ProgressBar,
  Oa as RadioGroup,
  Ta as SectionBox,
  Ia as Select,
  Wn as SidebarMenuItem,
  Ma as SidebarNavigation,
  La as Skeleton,
  $a as Snackbar,
  ja as Spinner,
  za as Stack,
  Ha as StatCard,
  Da as Stepper,
  qa as Tabs,
  Ua as Textarea,
  Ba as ThemeProvider,
  Ga as ThemeSwitcher,
  Fa as Timeline,
  Wa as Toast,
  Va as Toggle,
  Ka as TopNavigation,
  Xa as ViewModeSwitch
};

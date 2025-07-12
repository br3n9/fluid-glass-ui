import { jsxs as j, jsx as g, Fragment as Wr } from "react/jsx-runtime";
import be, { forwardRef as Pr, createElement as wt, useState as _e, useCallback as Et, useEffect as St, useRef as Kr } from "react";
import Vr from "react-dom";
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xr = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Tr = (...t) => t.filter((e, i, s) => !!e && s.indexOf(e) === i).join(" ");
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Qr = {
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
const Zr = Pr(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: i = 2,
    absoluteStrokeWidth: s,
    className: r = "",
    children: o,
    iconNode: n,
    ...l
  }, c) => wt(
    "svg",
    {
      ref: c,
      ...Qr,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: s ? Number(i) * 24 / Number(e) : i,
      className: Tr("lucide", r),
      ...l
    },
    [
      ...n.map(([h, b]) => wt(h, b)),
      ...Array.isArray(o) ? o : [o]
    ]
  )
);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ae = (t, e) => {
  const i = Pr(
    ({ className: s, ...r }, o) => wt(Zr, {
      ref: o,
      iconNode: e,
      className: Tr(`lucide-${Xr(t)}`, s),
      ...r
    })
  );
  return i.displayName = `${t}`, i;
};
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yr = ae("Bell", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }]
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lr = ae("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ot = ae("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jr = ae("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pt = ae("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const en = ae("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tt = ae("CircleAlert", [
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
const Lt = ae("CircleCheckBig", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tn = ae("CircleX", [
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
const rn = ae("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ir = ae("FileText", [
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
const nn = ae("Grid3x3", [
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
const on = ae("Heart", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ]
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const It = ae("Info", [
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
const sn = ae("List", [
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
const an = ae("Mail", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ln = ae("Menu", [
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
const un = ae("Moon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cn = ae("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fn = ae("SquarePen", [
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
const dn = ae("Star", [
  [
    "polygon",
    {
      points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
      key: "8f66p6"
    }
  ]
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pn = ae("Sun", [
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
const hn = ae("Trash2", [
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
const mn = ae("TrendingDown", [
  ["polyline", { points: "22 17 13.5 8.5 8.5 13.5 2 7", key: "1r2t7k" }],
  ["polyline", { points: "16 17 22 17 22 11", key: "11uiuu" }]
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gn = ae("TrendingUp", [
  ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
  ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }]
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yn = ae("Upload", [
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
const qe = ae("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xe = ae("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function xo({ title: t, children: e }) {
  const [i, s] = _e(!1);
  return /* @__PURE__ */ j("div", { className: "glass-surface rounded-lg overflow-hidden border border-white/10", children: [
    /* @__PURE__ */ j(
      "button",
      {
        onClick: () => s(!i),
        className: "w-full flex justify-between items-center p-4 text-left font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500",
        "aria-expanded": i,
        children: [
          /* @__PURE__ */ g("span", { children: t }),
          /* @__PURE__ */ g(
            Ot,
            {
              className: `transform transition-transform duration-300 ${i ? "rotate-180" : ""}`
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ g("div", { className: `transition-all duration-300 ease-in-out overflow-hidden ${i ? "max-h-screen" : "max-h-0"}`, children: /* @__PURE__ */ g("div", { className: "p-4 border-t border-white/10", children: e }) })
  ] });
}
const bn = {
  info: {
    icon: It,
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    iconColor: "text-blue-600",
    titleColor: "text-blue-900",
    textColor: "text-blue-700"
  },
  success: {
    icon: Lt,
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    iconColor: "text-green-600",
    titleColor: "text-green-900",
    textColor: "text-green-700"
  },
  warning: {
    icon: Tt,
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
    iconColor: "text-yellow-600",
    titleColor: "text-yellow-900",
    textColor: "text-yellow-700"
  },
  danger: {
    icon: tn,
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    iconColor: "text-red-600",
    titleColor: "text-red-900",
    textColor: "text-red-700"
  }
};
function Ro({ variant: t = "info", title: e, children: i }) {
  const s = bn[t], r = s.icon;
  return /* @__PURE__ */ j(
    "div",
    {
      className: `flex items-center gap-3 p-4 border rounded-lg ${s.bgColor} ${s.borderColor}`,
      children: [
        /* @__PURE__ */ g(r, { size: 20, className: s.iconColor }),
        /* @__PURE__ */ j("div", { children: [
          e && /* @__PURE__ */ g("p", { className: `font-medium ${s.titleColor}`, children: e }),
          /* @__PURE__ */ g("p", { className: `text-sm ${s.textColor}`, children: i })
        ] })
      ]
    }
  );
}
function kr(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function vn(t) {
  if (t.__esModule) return t;
  var e = t.default;
  if (typeof e == "function") {
    var i = function s() {
      return this instanceof s ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    i.prototype = e.prototype;
  } else i = {};
  return Object.defineProperty(i, "__esModule", { value: !0 }), Object.keys(t).forEach(function(s) {
    var r = Object.getOwnPropertyDescriptor(t, s);
    Object.defineProperty(i, s, r.get ? r : {
      enumerable: !0,
      get: function() {
        return t[s];
      }
    });
  }), i;
}
var Mr = {}, ve = {};
ve._ = ve._interop_require_default = _n;
function _n(t) {
  return t && t.__esModule ? t : { default: t };
}
var kt = {}, Ee = {};
(function(t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "warnOnce", {
    enumerable: !0,
    get: function() {
      return e;
    }
  });
  let e = (i) => {
  };
  if (process.env.NODE_ENV !== "production") {
    const i = /* @__PURE__ */ new Set();
    e = (s) => {
      i.has(s) || console.warn(s), i.add(s);
    };
  }
})(Ee);
var Hr = {};
(function(t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "getImageBlurSvg", {
    enumerable: !0,
    get: function() {
      return e;
    }
  });
  function e(i) {
    let { widthInt: s, heightInt: r, blurWidth: o, blurHeight: n, blurDataURL: l, objectFit: c } = i;
    const h = 20, b = o ? o * 40 : s, x = n ? n * 40 : r, _ = b && x ? "viewBox='0 0 " + b + " " + x + "'" : "", a = _ ? "none" : c === "contain" ? "xMidYMid" : c === "cover" ? "xMidYMid slice" : "none";
    return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + _ + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='" + h + "'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='" + h + "'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + a + "' style='filter: url(%23b);' href='" + l + "'/%3E%3C/svg%3E";
  }
})(Hr);
var ze = {};
(function(t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  function e(r, o) {
    for (var n in o) Object.defineProperty(r, n, {
      enumerable: !0,
      get: o[n]
    });
  }
  e(t, {
    VALID_LOADERS: function() {
      return i;
    },
    imageConfigDefault: function() {
      return s;
    }
  });
  const i = [
    "default",
    "imgix",
    "cloudinary",
    "akamai",
    "custom"
  ], s = {
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
})(ze);
(function(t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "getImgProps", {
    enumerable: !0,
    get: function() {
      return a;
    }
  });
  const e = Ee, i = Hr, s = ze, r = [
    "lazy",
    "eager",
    void 0
  ];
  function o(d) {
    return d.default !== void 0;
  }
  function n(d) {
    return d.src !== void 0;
  }
  function l(d) {
    return typeof d == "object" && (o(d) || n(d));
  }
  const c = /* @__PURE__ */ new Map();
  let h;
  function b(d) {
    return typeof d > "u" ? d : typeof d == "number" ? Number.isFinite(d) ? d : NaN : typeof d == "string" && /^[0-9]+$/.test(d) ? parseInt(d, 10) : NaN;
  }
  function x(d, p, f) {
    let { deviceSizes: E, allSizes: N } = d;
    if (f) {
      const R = /(^|\s)(1?\d?\d)vw/g, v = [];
      for (let O; O = R.exec(f); O)
        v.push(parseInt(O[2]));
      if (v.length) {
        const O = Math.min(...v) * 0.01;
        return {
          widths: N.filter((y) => y >= E[0] * O),
          kind: "w"
        };
      }
      return {
        widths: N,
        kind: "w"
      };
    }
    return typeof p != "number" ? {
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
            p,
            p * 2
            /*, width * 3*/
          ].map((R) => N.find((v) => v >= R) || N[N.length - 1])
        )
      ],
      kind: "x"
    };
  }
  function _(d) {
    let { config: p, src: f, unoptimized: E, width: N, quality: u, sizes: R, loader: v } = d;
    if (E)
      return {
        src: f,
        srcSet: void 0,
        sizes: void 0
      };
    const { widths: O, kind: y } = x(p, N, R), w = O.length - 1;
    return {
      sizes: !R && y === "w" ? "100vw" : R,
      srcSet: O.map((I, m) => v({
        config: p,
        src: f,
        quality: u,
        width: I
      }) + " " + (y === "w" ? I : m + 1) + y).join(", "),
      // It's intended to keep `src` the last attribute because React updates
      // attributes in order. If we keep `src` the first one, Safari will
      // immediately start to fetch `src`, before `sizes` and `srcSet` are even
      // updated by React. That causes multiple unnecessary requests if `srcSet`
      // and `sizes` are defined.
      // This bug cannot be reproduced in Chrome or Firefox.
      src: v({
        config: p,
        src: f,
        quality: u,
        width: O[w]
      })
    };
  }
  function a(d, p) {
    let { src: f, sizes: E, unoptimized: N = !1, priority: u = !1, loading: R, className: v, quality: O, width: y, height: w, fill: I = !1, style: m, onLoad: A, onLoadingComplete: P, placeholder: k = "empty", blurDataURL: S, fetchPriority: z, layout: D, objectFit: K, objectPosition: W, lazyBoundary: G, lazyRoot: M, ...Z } = d;
    const { imgConf: F, showAltText: V, blurComplete: U, defaultLoader: Y } = p;
    let te, J = F || s.imageConfigDefault;
    if ("allSizes" in J)
      te = J;
    else {
      const H = [
        ...J.deviceSizes,
        ...J.imageSizes
      ].sort((he, q) => he - q), se = J.deviceSizes.sort((he, q) => he - q);
      te = {
        ...J,
        allSizes: H,
        deviceSizes: se
      };
    }
    let L = Z.loader || Y;
    delete Z.loader, delete Z.srcSet;
    const ue = "__next_img_default" in L;
    if (ue) {
      if (te.loader === "custom")
        throw new Error('Image with src "' + f + `" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`);
    } else {
      const H = L;
      L = (se) => {
        const { config: he, ...q } = se;
        return H(q);
      };
    }
    if (D) {
      D === "fill" && (I = !0);
      const H = {
        intrinsic: {
          maxWidth: "100%",
          height: "auto"
        },
        responsive: {
          width: "100%",
          height: "auto"
        }
      }, se = {
        responsive: "100vw",
        fill: "100vw"
      }, he = H[D];
      he && (m = {
        ...m,
        ...he
      });
      const q = se[D];
      q && !E && (E = q);
    }
    let re = "", ee = b(y), T = b(w), C, X;
    if (l(f)) {
      const H = o(f) ? f.default : f;
      if (!H.src)
        throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(H));
      if (!H.height || !H.width)
        throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(H));
      if (C = H.blurWidth, X = H.blurHeight, S = S || H.blurDataURL, re = H.src, !I) {
        if (!ee && !T)
          ee = H.width, T = H.height;
        else if (ee && !T) {
          const se = ee / H.width;
          T = Math.round(H.height * se);
        } else if (!ee && T) {
          const se = T / H.height;
          ee = Math.round(H.width * se);
        }
      }
    }
    f = typeof f == "string" ? f : re;
    let oe = !u && (R === "lazy" || typeof R > "u");
    (!f || f.startsWith("data:") || f.startsWith("blob:")) && (N = !0, oe = !1), te.unoptimized && (N = !0), ue && f.endsWith(".svg") && !te.dangerouslyAllowSVG && (N = !0), u && (z = "high");
    const me = b(O);
    if (process.env.NODE_ENV !== "production") {
      if (te.output === "export" && ue && !N)
        throw new Error("Image Optimization using the default loader is not compatible with `{ output: 'export' }`.\n  Possible solutions:\n    - Remove `{ output: 'export' }` and run \"next start\" to run server mode including the Image Optimization API.\n    - Configure `{ images: { unoptimized: true } }` in `next.config.js` to disable the Image Optimization API.\n  Read more: https://nextjs.org/docs/messages/export-image-api");
      if (!f)
        N = !0;
      else if (I) {
        if (y)
          throw new Error('Image with src "' + f + '" has both "width" and "fill" properties. Only one should be used.');
        if (w)
          throw new Error('Image with src "' + f + '" has both "height" and "fill" properties. Only one should be used.');
        if (m != null && m.position && m.position !== "absolute")
          throw new Error('Image with src "' + f + '" has both "fill" and "style.position" properties. Images with "fill" always use position absolute - it cannot be modified.');
        if (m != null && m.width && m.width !== "100%")
          throw new Error('Image with src "' + f + '" has both "fill" and "style.width" properties. Images with "fill" always use width 100% - it cannot be modified.');
        if (m != null && m.height && m.height !== "100%")
          throw new Error('Image with src "' + f + '" has both "fill" and "style.height" properties. Images with "fill" always use height 100% - it cannot be modified.');
      } else {
        if (typeof ee > "u")
          throw new Error('Image with src "' + f + '" is missing required "width" property.');
        if (isNaN(ee))
          throw new Error('Image with src "' + f + '" has invalid "width" property. Expected a numeric value in pixels but received "' + y + '".');
        if (typeof T > "u")
          throw new Error('Image with src "' + f + '" is missing required "height" property.');
        if (isNaN(T))
          throw new Error('Image with src "' + f + '" has invalid "height" property. Expected a numeric value in pixels but received "' + w + '".');
      }
      if (!r.includes(R))
        throw new Error('Image with src "' + f + '" has invalid "loading" property. Provided "' + R + '" should be one of ' + r.map(String).join(",") + ".");
      if (u && R === "lazy")
        throw new Error('Image with src "' + f + `" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
      if (k !== "empty" && k !== "blur" && !k.startsWith("data:image/"))
        throw new Error('Image with src "' + f + '" has invalid "placeholder" property "' + k + '".');
      if (k !== "empty" && ee && T && ee * T < 1600 && (0, e.warnOnce)('Image with src "' + f + '" is smaller than 40x40. Consider removing the "placeholder" property to improve performance.'), k === "blur" && !S) {
        const H = [
          "jpeg",
          "png",
          "webp",
          "avif"
        ];
        throw new Error('Image with src "' + f + `" has "placeholder='blur'" property but is missing the "blurDataURL" property.
        Possible solutions:
          - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
          - Change the "src" property to a static import with one of the supported file types: ` + H.join(",") + ` (animated images not supported)
          - Remove the "placeholder" property, effectively no blur effect
        Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`);
      }
      if ("ref" in Z && (0, e.warnOnce)('Image with src "' + f + '" is using unsupported "ref" property. Consider using the "onLoad" property instead.'), !N && !ue) {
        const H = L({
          config: te,
          src: f,
          width: ee || 400,
          quality: me || 75
        });
        let se;
        try {
          se = new URL(H);
        } catch {
        }
        (H === f || se && se.pathname === f && !se.search) && (0, e.warnOnce)('Image with src "' + f + `" has a "loader" property that does not implement width. Please implement it or use the "unoptimized" property instead.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader-width`);
      }
      P && (0, e.warnOnce)('Image with src "' + f + '" is using deprecated "onLoadingComplete" property. Please use the "onLoad" property instead.');
      for (const [H, se] of Object.entries({
        layout: D,
        objectFit: K,
        objectPosition: W,
        lazyBoundary: G,
        lazyRoot: M
      }))
        se && (0, e.warnOnce)('Image with src "' + f + '" has legacy prop "' + H + `". Did you forget to run the codemod?
Read more: https://nextjs.org/docs/messages/next-image-upgrade-to-13`);
      if (typeof window < "u" && !h && window.PerformanceObserver) {
        h = new PerformanceObserver((H) => {
          for (const he of H.getEntries()) {
            var se;
            const q = (he == null || (se = he.element) == null ? void 0 : se.src) || "", B = c.get(q);
            B && !B.priority && B.placeholder === "empty" && !B.src.startsWith("data:") && !B.src.startsWith("blob:") && (0, e.warnOnce)('Image with src "' + B.src + `" was detected as the Largest Contentful Paint (LCP). Please add the "priority" property if this image is above the fold.
Read more: https://nextjs.org/docs/api-reference/next/image#priority`);
          }
        });
        try {
          h.observe({
            type: "largest-contentful-paint",
            buffered: !0
          });
        } catch (H) {
          console.error(H);
        }
      }
    }
    const le = Object.assign(I ? {
      position: "absolute",
      height: "100%",
      width: "100%",
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      objectFit: K,
      objectPosition: W
    } : {}, V ? {} : {
      color: "transparent"
    }, m), ie = !U && k !== "empty" ? k === "blur" ? 'url("data:image/svg+xml;charset=utf-8,' + (0, i.getImageBlurSvg)({
      widthInt: ee,
      heightInt: T,
      blurWidth: C,
      blurHeight: X,
      blurDataURL: S || "",
      objectFit: le.objectFit
    }) + '")' : 'url("' + k + '")' : null;
    let ye = ie ? {
      backgroundSize: le.objectFit || "cover",
      backgroundPosition: le.objectPosition || "50% 50%",
      backgroundRepeat: "no-repeat",
      backgroundImage: ie
    } : {};
    process.env.NODE_ENV === "development" && ye.backgroundImage && k === "blur" && S != null && S.startsWith("/") && (ye.backgroundImage = 'url("' + S + '")');
    const de = _({
      config: te,
      src: f,
      unoptimized: N,
      width: ee,
      quality: me,
      sizes: E,
      loader: L
    });
    if (process.env.NODE_ENV !== "production" && typeof window < "u") {
      let H;
      try {
        H = new URL(de.src);
      } catch {
        H = new URL(de.src, window.location.href);
      }
      c.set(H.href, {
        src: f,
        priority: u,
        placeholder: k
      });
    }
    return {
      props: {
        ...Z,
        loading: oe ? "lazy" : R,
        fetchPriority: z,
        width: ee,
        height: T,
        decoding: "async",
        className: v,
        style: {
          ...le,
          ...ye
        },
        sizes: de.sizes,
        srcSet: de.srcSet,
        src: de.src
      },
      meta: {
        unoptimized: N,
        priority: u,
        placeholder: k,
        fill: I
      }
    };
  }
})(kt);
var Ct = { exports: {} }, we = {};
function $r(t) {
  if (typeof WeakMap != "function") return null;
  var e = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap();
  return ($r = function(s) {
    return s ? i : e;
  })(t);
}
we._ = we._interop_require_wildcard = xn;
function xn(t, e) {
  if (!e && t && t.__esModule) return t;
  if (t === null || typeof t != "object" && typeof t != "function") return { default: t };
  var i = $r(e);
  if (i && i.has(t)) return i.get(t);
  var s = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in t)
    if (o !== "default" && Object.prototype.hasOwnProperty.call(t, o)) {
      var n = r ? Object.getOwnPropertyDescriptor(t, o) : null;
      n && (n.get || n.set) ? Object.defineProperty(s, o, n) : s[o] = t[o];
    }
  return s.default = t, i && i.set(t, s), s;
}
var Ne = { exports: {} }, Ge = {}, Ht;
function Rn() {
  return Ht || (Ht = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "default", {
      enumerable: !0,
      get: function() {
        return o;
      }
    });
    const e = be, i = typeof window > "u", s = i ? () => {
    } : e.useLayoutEffect, r = i ? () => {
    } : e.useEffect;
    function o(n) {
      const { headManager: l, reduceComponentsToState: c } = n;
      function h() {
        if (l && l.mountedInstances) {
          const x = e.Children.toArray(Array.from(l.mountedInstances).filter(Boolean));
          l.updateHead(c(x, n));
        }
      }
      if (i) {
        var b;
        l == null || (b = l.mountedInstances) == null || b.add(n.children), h();
      }
      return s(() => {
        var x;
        return l == null || (x = l.mountedInstances) == null || x.add(n.children), () => {
          var _;
          l == null || (_ = l.mountedInstances) == null || _.delete(n.children);
        };
      }), s(() => (l && (l._pendingUpdate = h), () => {
        l && (l._pendingUpdate = h);
      })), r(() => (l && l._pendingUpdate && (l._pendingUpdate(), l._pendingUpdate = null), () => {
        l && l._pendingUpdate && (l._pendingUpdate(), l._pendingUpdate = null);
      })), null;
    }
  }(Ge)), Ge;
}
var Fe = {}, $t;
function wn() {
  return $t || ($t = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "AmpStateContext", {
      enumerable: !0,
      get: function() {
        return s;
      }
    });
    const s = (/* @__PURE__ */ ve._(be)).default.createContext({});
    process.env.NODE_ENV !== "production" && (s.displayName = "AmpStateContext");
  }(Fe)), Fe;
}
var We = {}, jt;
function En() {
  return jt || (jt = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "HeadManagerContext", {
      enumerable: !0,
      get: function() {
        return s;
      }
    });
    const s = (/* @__PURE__ */ ve._(be)).default.createContext({});
    process.env.NODE_ENV !== "production" && (s.displayName = "HeadManagerContext");
  }(We)), We;
}
var Ke = {}, qt;
function Cn() {
  return qt || (qt = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "isInAmpMode", {
      enumerable: !0,
      get: function() {
        return e;
      }
    });
    function e(i) {
      let { ampFirst: s = !1, hybrid: r = !1, hasQuery: o = !1 } = i === void 0 ? {} : i;
      return s || r && o;
    }
  }(Ke)), Ke;
}
var zt;
function Nn() {
  return zt || (zt = 1, function(t, e) {
    "use client";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    function i(N, u) {
      for (var R in u) Object.defineProperty(N, R, {
        enumerable: !0,
        get: u[R]
      });
    }
    i(e, {
      defaultHead: function() {
        return x;
      },
      default: function() {
        return E;
      }
    });
    const s = ve, o = /* @__PURE__ */ we._(be), n = /* @__PURE__ */ s._(Rn()), l = wn(), c = En(), h = Cn(), b = Ee;
    function x(N) {
      N === void 0 && (N = !1);
      const u = [
        /* @__PURE__ */ o.default.createElement("meta", {
          charSet: "utf-8"
        })
      ];
      return N || u.push(/* @__PURE__ */ o.default.createElement("meta", {
        name: "viewport",
        content: "width=device-width"
      })), u;
    }
    function _(N, u) {
      return typeof u == "string" || typeof u == "number" ? N : u.type === o.default.Fragment ? N.concat(
        // @ts-expect-error @types/react does not remove fragments but this could also return ReactPortal[]
        o.default.Children.toArray(u.props.children).reduce(
          // @ts-expect-error @types/react does not remove fragments but this could also return ReactPortal[]
          (R, v) => typeof v == "string" || typeof v == "number" ? R : R.concat(v),
          []
        )
      ) : N.concat(u);
    }
    const a = [
      "name",
      "httpEquiv",
      "charSet",
      "itemProp"
    ];
    function d() {
      const N = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set(), R = /* @__PURE__ */ new Set(), v = {};
      return (O) => {
        let y = !0, w = !1;
        if (O.key && typeof O.key != "number" && O.key.indexOf("$") > 0) {
          w = !0;
          const I = O.key.slice(O.key.indexOf("$") + 1);
          N.has(I) ? y = !1 : N.add(I);
        }
        switch (O.type) {
          case "title":
          case "base":
            u.has(O.type) ? y = !1 : u.add(O.type);
            break;
          case "meta":
            for (let I = 0, m = a.length; I < m; I++) {
              const A = a[I];
              if (O.props.hasOwnProperty(A))
                if (A === "charSet")
                  R.has(A) ? y = !1 : R.add(A);
                else {
                  const P = O.props[A], k = v[A] || /* @__PURE__ */ new Set();
                  (A !== "name" || !w) && k.has(P) ? y = !1 : (k.add(P), v[A] = k);
                }
            }
            break;
        }
        return y;
      };
    }
    function p(N, u) {
      const { inAmpMode: R } = u;
      return N.reduce(_, []).reverse().concat(x(R).reverse()).filter(d()).reverse().map((v, O) => {
        const y = v.key || O;
        if (process.env.NODE_ENV !== "development" && process.env.__NEXT_OPTIMIZE_FONTS && !R && v.type === "link" && v.props.href && // TODO(prateekbh@): Replace this with const from `constants` when the tree shaking works.
        [
          "https://fonts.googleapis.com/css",
          "https://use.typekit.net/"
        ].some((w) => v.props.href.startsWith(w))) {
          const w = {
            ...v.props || {}
          };
          return w["data-href"] = w.href, w.href = void 0, w["data-optimized-fonts"] = !0, /* @__PURE__ */ o.default.cloneElement(v, w);
        }
        if (process.env.NODE_ENV === "development")
          if (v.type === "script" && v.props.type !== "application/ld+json") {
            const w = v.props.src ? '<script> tag with src="' + v.props.src + '"' : "inline <script>";
            (0, b.warnOnce)("Do not add <script> tags using next/head (see " + w + `). Use next/script instead. 
See more info here: https://nextjs.org/docs/messages/no-script-tags-in-head-component`);
          } else v.type === "link" && v.props.rel === "stylesheet" && (0, b.warnOnce)('Do not add stylesheets using next/head (see <link rel="stylesheet"> tag with href="' + v.props.href + `"). Use Document instead. 
See more info here: https://nextjs.org/docs/messages/no-stylesheets-in-head-component`);
        return /* @__PURE__ */ o.default.cloneElement(v, {
          key: y
        });
      });
    }
    function f(N) {
      let { children: u } = N;
      const R = (0, o.useContext)(l.AmpStateContext), v = (0, o.useContext)(c.HeadManagerContext);
      return /* @__PURE__ */ o.default.createElement(n.default, {
        reduceComponentsToState: p,
        headManager: v,
        inAmpMode: (0, h.isInAmpMode)(R)
      }, u);
    }
    const E = f;
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), t.exports = e.default);
  }(Ne, Ne.exports)), Ne.exports;
}
var Ve = {}, Dt;
function An() {
  return Dt || (Dt = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "ImageConfigContext", {
      enumerable: !0,
      get: function() {
        return r;
      }
    });
    const i = /* @__PURE__ */ ve._(be), s = ze, r = i.default.createContext(s.imageConfigDefault);
    process.env.NODE_ENV !== "production" && (r.displayName = "ImageConfigContext");
  }(Ve)), Ve;
}
var Xe = {}, Ut;
function jr() {
  return Ut || (Ut = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "RouterContext", {
      enumerable: !0,
      get: function() {
        return s;
      }
    });
    const s = (/* @__PURE__ */ ve._(be)).default.createContext(null);
    process.env.NODE_ENV !== "production" && (s.displayName = "RouterContext");
  }(Xe)), Xe;
}
var Qe = {}, Ze = {}, Ye = { exports: {} };
const Sn = {}, On = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sn
}, Symbol.toStringTag, { value: "Module" })), Nt = /* @__PURE__ */ vn(On);
var Bt;
function Pn() {
  return Bt || (Bt = 1, (() => {
    var t = { 333: (r, o, n) => {
      const l = n(137), c = n(179), h = n(13), b = n(719), x = (_, a = {}) => {
        let d = [];
        if (Array.isArray(_))
          for (let p of _) {
            let f = x.create(p, a);
            Array.isArray(f) ? d.push(...f) : d.push(f);
          }
        else
          d = [].concat(x.create(_, a));
        return a && a.expand === !0 && a.nodupes === !0 && (d = [...new Set(d)]), d;
      };
      x.parse = (_, a = {}) => b(_, a), x.stringify = (_, a = {}) => l(typeof _ == "string" ? x.parse(_, a) : _, a), x.compile = (_, a = {}) => (typeof _ == "string" && (_ = x.parse(_, a)), c(_, a)), x.expand = (_, a = {}) => {
        typeof _ == "string" && (_ = x.parse(_, a));
        let d = h(_, a);
        return a.noempty === !0 && (d = d.filter(Boolean)), a.nodupes === !0 && (d = [...new Set(d)]), d;
      }, x.create = (_, a = {}) => _ === "" || _.length < 3 ? [_] : a.expand !== !0 ? x.compile(_, a) : x.expand(_, a), r.exports = x;
    }, 179: (r, o, n) => {
      const l = n(783), c = n(617), h = (b, x = {}) => {
        let _ = (a, d = {}) => {
          let p = c.isInvalidBrace(d), f = a.invalid === !0 && x.escapeInvalid === !0, E = p === !0 || f === !0, N = x.escapeInvalid === !0 ? "\\" : "", u = "";
          if (a.isOpen === !0 || a.isClose === !0)
            return N + a.value;
          if (a.type === "open")
            return E ? N + a.value : "(";
          if (a.type === "close")
            return E ? N + a.value : ")";
          if (a.type === "comma")
            return a.prev.type === "comma" ? "" : E ? a.value : "|";
          if (a.value)
            return a.value;
          if (a.nodes && a.ranges > 0) {
            let R = c.reduce(a.nodes), v = l(...R, { ...x, wrap: !1, toRegex: !0 });
            if (v.length !== 0)
              return R.length > 1 && v.length > 1 ? `(${v})` : v;
          }
          if (a.nodes)
            for (let R of a.nodes)
              u += _(R, a);
          return u;
        };
        return _(b);
      };
      r.exports = h;
    }, 457: (r) => {
      r.exports = { MAX_LENGTH: 65536, CHAR_0: "0", CHAR_9: "9", CHAR_UPPERCASE_A: "A", CHAR_LOWERCASE_A: "a", CHAR_UPPERCASE_Z: "Z", CHAR_LOWERCASE_Z: "z", CHAR_LEFT_PARENTHESES: "(", CHAR_RIGHT_PARENTHESES: ")", CHAR_ASTERISK: "*", CHAR_AMPERSAND: "&", CHAR_AT: "@", CHAR_BACKSLASH: "\\", CHAR_BACKTICK: "`", CHAR_CARRIAGE_RETURN: "\r", CHAR_CIRCUMFLEX_ACCENT: "^", CHAR_COLON: ":", CHAR_COMMA: ",", CHAR_DOLLAR: "$", CHAR_DOT: ".", CHAR_DOUBLE_QUOTE: '"', CHAR_EQUAL: "=", CHAR_EXCLAMATION_MARK: "!", CHAR_FORM_FEED: "\f", CHAR_FORWARD_SLASH: "/", CHAR_HASH: "#", CHAR_HYPHEN_MINUS: "-", CHAR_LEFT_ANGLE_BRACKET: "<", CHAR_LEFT_CURLY_BRACE: "{", CHAR_LEFT_SQUARE_BRACKET: "[", CHAR_LINE_FEED: `
`, CHAR_NO_BREAK_SPACE: " ", CHAR_PERCENT: "%", CHAR_PLUS: "+", CHAR_QUESTION_MARK: "?", CHAR_RIGHT_ANGLE_BRACKET: ">", CHAR_RIGHT_CURLY_BRACE: "}", CHAR_RIGHT_SQUARE_BRACKET: "]", CHAR_SEMICOLON: ";", CHAR_SINGLE_QUOTE: "'", CHAR_SPACE: " ", CHAR_TAB: "	", CHAR_UNDERSCORE: "_", CHAR_VERTICAL_LINE: "|", CHAR_ZERO_WIDTH_NOBREAK_SPACE: "\uFEFF" };
    }, 13: (r, o, n) => {
      const l = n(783), c = n(137), h = n(617), b = (_ = "", a = "", d = !1) => {
        let p = [];
        if (_ = [].concat(_), a = [].concat(a), !a.length) return _;
        if (!_.length)
          return d ? h.flatten(a).map((f) => `{${f}}`) : a;
        for (let f of _)
          if (Array.isArray(f))
            for (let E of f)
              p.push(b(E, a, d));
          else
            for (let E of a)
              d === !0 && typeof E == "string" && (E = `{${E}}`), p.push(Array.isArray(E) ? b(f, E, d) : f + E);
        return h.flatten(p);
      }, x = (_, a = {}) => {
        let d = a.rangeLimit === void 0 ? 1e3 : a.rangeLimit, p = (f, E = {}) => {
          f.queue = [];
          let N = E, u = E.queue;
          for (; N.type !== "brace" && N.type !== "root" && N.parent; )
            N = N.parent, u = N.queue;
          if (f.invalid || f.dollar) {
            u.push(b(u.pop(), c(f, a)));
            return;
          }
          if (f.type === "brace" && f.invalid !== !0 && f.nodes.length === 2) {
            u.push(b(u.pop(), ["{}"]));
            return;
          }
          if (f.nodes && f.ranges > 0) {
            let y = h.reduce(f.nodes);
            if (h.exceedsLimit(...y, a.step, d))
              throw new RangeError("expanded array length exceeds range limit. Use options.rangeLimit to increase or disable the limit.");
            let w = l(...y, a);
            w.length === 0 && (w = c(f, a)), u.push(b(u.pop(), w)), f.nodes = [];
            return;
          }
          let R = h.encloseBrace(f), v = f.queue, O = f;
          for (; O.type !== "brace" && O.type !== "root" && O.parent; )
            O = O.parent, v = O.queue;
          for (let y = 0; y < f.nodes.length; y++) {
            let w = f.nodes[y];
            if (w.type === "comma" && f.type === "brace") {
              y === 1 && v.push(""), v.push("");
              continue;
            }
            if (w.type === "close") {
              u.push(b(u.pop(), v, R));
              continue;
            }
            if (w.value && w.type !== "open") {
              v.push(b(v.pop(), w.value));
              continue;
            }
            w.nodes && p(w, f);
          }
          return v;
        };
        return h.flatten(p(_));
      };
      r.exports = x;
    }, 719: (r, o, n) => {
      const l = n(137), { MAX_LENGTH: c, CHAR_BACKSLASH: h, CHAR_BACKTICK: b, CHAR_COMMA: x, CHAR_DOT: _, CHAR_LEFT_PARENTHESES: a, CHAR_RIGHT_PARENTHESES: d, CHAR_LEFT_CURLY_BRACE: p, CHAR_RIGHT_CURLY_BRACE: f, CHAR_LEFT_SQUARE_BRACKET: E, CHAR_RIGHT_SQUARE_BRACKET: N, CHAR_DOUBLE_QUOTE: u, CHAR_SINGLE_QUOTE: R, CHAR_NO_BREAK_SPACE: v, CHAR_ZERO_WIDTH_NOBREAK_SPACE: O } = n(457), y = (w, I = {}) => {
        if (typeof w != "string")
          throw new TypeError("Expected a string");
        let m = I || {}, A = typeof m.maxLength == "number" ? Math.min(c, m.maxLength) : c;
        if (w.length > A)
          throw new SyntaxError(`Input length (${w.length}), exceeds max characters (${A})`);
        let P = { type: "root", input: w, nodes: [] }, k = [P], S = P, z = P, D = 0, K = w.length, W = 0, G = 0, M;
        const Z = () => w[W++], F = (V) => {
          if (V.type === "text" && z.type === "dot" && (z.type = "text"), z && z.type === "text" && V.type === "text") {
            z.value += V.value;
            return;
          }
          return S.nodes.push(V), V.parent = S, V.prev = z, z = V, V;
        };
        for (F({ type: "bos" }); W < K; )
          if (S = k[k.length - 1], M = Z(), !(M === O || M === v)) {
            if (M === h) {
              F({ type: "text", value: (I.keepEscaping ? M : "") + Z() });
              continue;
            }
            if (M === N) {
              F({ type: "text", value: "\\" + M });
              continue;
            }
            if (M === E) {
              D++;
              let V;
              for (; W < K && (V = Z()); ) {
                if (M += V, V === E) {
                  D++;
                  continue;
                }
                if (V === h) {
                  M += Z();
                  continue;
                }
                if (V === N && (D--, D === 0))
                  break;
              }
              F({ type: "text", value: M });
              continue;
            }
            if (M === a) {
              S = F({ type: "paren", nodes: [] }), k.push(S), F({ type: "text", value: M });
              continue;
            }
            if (M === d) {
              if (S.type !== "paren") {
                F({ type: "text", value: M });
                continue;
              }
              S = k.pop(), F({ type: "text", value: M }), S = k[k.length - 1];
              continue;
            }
            if (M === u || M === R || M === b) {
              let V = M, U;
              for (I.keepQuotes !== !0 && (M = ""); W < K && (U = Z()); ) {
                if (U === h) {
                  M += U + Z();
                  continue;
                }
                if (U === V) {
                  I.keepQuotes === !0 && (M += U);
                  break;
                }
                M += U;
              }
              F({ type: "text", value: M });
              continue;
            }
            if (M === p) {
              G++;
              let U = { type: "brace", open: !0, close: !1, dollar: z.value && z.value.slice(-1) === "$" || S.dollar === !0, depth: G, commas: 0, ranges: 0, nodes: [] };
              S = F(U), k.push(S), F({ type: "open", value: M });
              continue;
            }
            if (M === f) {
              if (S.type !== "brace") {
                F({ type: "text", value: M });
                continue;
              }
              let V = "close";
              S = k.pop(), S.close = !0, F({ type: V, value: M }), G--, S = k[k.length - 1];
              continue;
            }
            if (M === x && G > 0) {
              if (S.ranges > 0) {
                S.ranges = 0;
                let V = S.nodes.shift();
                S.nodes = [V, { type: "text", value: l(S) }];
              }
              F({ type: "comma", value: M }), S.commas++;
              continue;
            }
            if (M === _ && G > 0 && S.commas === 0) {
              let V = S.nodes;
              if (G === 0 || V.length === 0) {
                F({ type: "text", value: M });
                continue;
              }
              if (z.type === "dot") {
                if (S.range = [], z.value += M, z.type = "range", S.nodes.length !== 3 && S.nodes.length !== 5) {
                  S.invalid = !0, S.ranges = 0, z.type = "text";
                  continue;
                }
                S.ranges++, S.args = [];
                continue;
              }
              if (z.type === "range") {
                V.pop();
                let U = V[V.length - 1];
                U.value += z.value + M, z = U, S.ranges--;
                continue;
              }
              F({ type: "dot", value: M });
              continue;
            }
            F({ type: "text", value: M });
          }
        do
          if (S = k.pop(), S.type !== "root") {
            S.nodes.forEach((Y) => {
              Y.nodes || (Y.type === "open" && (Y.isOpen = !0), Y.type === "close" && (Y.isClose = !0), Y.nodes || (Y.type = "text"), Y.invalid = !0);
            });
            let V = k[k.length - 1], U = V.nodes.indexOf(S);
            V.nodes.splice(U, 1, ...S.nodes);
          }
        while (k.length > 0);
        return F({ type: "eos" }), P;
      };
      r.exports = y;
    }, 137: (r, o, n) => {
      const l = n(617);
      r.exports = (c, h = {}) => {
        let b = (x, _ = {}) => {
          let a = h.escapeInvalid && l.isInvalidBrace(_), d = x.invalid === !0 && h.escapeInvalid === !0, p = "";
          if (x.value)
            return (a || d) && l.isOpenOrClose(x) ? "\\" + x.value : x.value;
          if (x.value)
            return x.value;
          if (x.nodes)
            for (let f of x.nodes)
              p += b(f);
          return p;
        };
        return b(c);
      };
    }, 617: (r, o) => {
      o.isInteger = (n) => typeof n == "number" ? Number.isInteger(n) : typeof n == "string" && n.trim() !== "" ? Number.isInteger(Number(n)) : !1, o.find = (n, l) => n.nodes.find((c) => c.type === l), o.exceedsLimit = (n, l, c = 1, h) => h === !1 || !o.isInteger(n) || !o.isInteger(l) ? !1 : (Number(l) - Number(n)) / Number(c) >= h, o.escapeNode = (n, l = 0, c) => {
        let h = n.nodes[l];
        h && (c && h.type === c || h.type === "open" || h.type === "close") && h.escaped !== !0 && (h.value = "\\" + h.value, h.escaped = !0);
      }, o.encloseBrace = (n) => n.type !== "brace" || n.commas >> 0 + n.ranges >> 0 ? !1 : (n.invalid = !0, !0), o.isInvalidBrace = (n) => n.type !== "brace" ? !1 : n.invalid === !0 || n.dollar ? !0 : !(n.commas >> 0 + n.ranges >> 0) || n.open !== !0 || n.close !== !0 ? (n.invalid = !0, !0) : !1, o.isOpenOrClose = (n) => n.type === "open" || n.type === "close" ? !0 : n.open === !0 || n.close === !0, o.reduce = (n) => n.reduce((l, c) => (c.type === "text" && l.push(c.value), c.type === "range" && (c.type = "text"), l), []), o.flatten = (...n) => {
        const l = [], c = (h) => {
          for (let b = 0; b < h.length; b++) {
            let x = h[b];
            Array.isArray(x) ? c(x) : x !== void 0 && l.push(x);
          }
          return l;
        };
        return c(n), l;
      };
    }, 783: (r, o, n) => {
      /*!
       * fill-range <https://github.com/jonschlinkert/fill-range>
       *
       * Copyright (c) 2014-present, Jon Schlinkert.
       * Licensed under the MIT License.
       */
      const l = n(837), c = n(492), h = (m) => m !== null && typeof m == "object" && !Array.isArray(m), b = (m) => (A) => m === !0 ? Number(A) : String(A), x = (m) => typeof m == "number" || typeof m == "string" && m !== "", _ = (m) => Number.isInteger(+m), a = (m) => {
        let A = `${m}`, P = -1;
        if (A[0] === "-" && (A = A.slice(1)), A === "0") return !1;
        for (; A[++P] === "0"; ) ;
        return P > 0;
      }, d = (m, A, P) => typeof m == "string" || typeof A == "string" ? !0 : P.stringify === !0, p = (m, A, P) => {
        if (A > 0) {
          let k = m[0] === "-" ? "-" : "";
          k && (m = m.slice(1)), m = k + m.padStart(k ? A - 1 : A, "0");
        }
        return P === !1 ? String(m) : m;
      }, f = (m, A) => {
        let P = m[0] === "-" ? "-" : "";
        for (P && (m = m.slice(1), A--); m.length < A; ) m = "0" + m;
        return P ? "-" + m : m;
      }, E = (m, A) => {
        m.negatives.sort((D, K) => D < K ? -1 : D > K ? 1 : 0), m.positives.sort((D, K) => D < K ? -1 : D > K ? 1 : 0);
        let P = A.capture ? "" : "?:", k = "", S = "", z;
        return m.positives.length && (k = m.positives.join("|")), m.negatives.length && (S = `-(${P}${m.negatives.join("|")})`), k && S ? z = `${k}|${S}` : z = k || S, A.wrap ? `(${P}${z})` : z;
      }, N = (m, A, P, k) => {
        if (P)
          return c(m, A, { wrap: !1, ...k });
        let S = String.fromCharCode(m);
        if (m === A) return S;
        let z = String.fromCharCode(A);
        return `[${S}-${z}]`;
      }, u = (m, A, P) => {
        if (Array.isArray(m)) {
          let k = P.wrap === !0, S = P.capture ? "" : "?:";
          return k ? `(${S}${m.join("|")})` : m.join("|");
        }
        return c(m, A, P);
      }, R = (...m) => new RangeError("Invalid range arguments: " + l.inspect(...m)), v = (m, A, P) => {
        if (P.strictRanges === !0) throw R([m, A]);
        return [];
      }, O = (m, A) => {
        if (A.strictRanges === !0)
          throw new TypeError(`Expected step "${m}" to be a number`);
        return [];
      }, y = (m, A, P = 1, k = {}) => {
        let S = Number(m), z = Number(A);
        if (!Number.isInteger(S) || !Number.isInteger(z)) {
          if (k.strictRanges === !0) throw R([m, A]);
          return [];
        }
        S === 0 && (S = 0), z === 0 && (z = 0);
        let D = S > z, K = String(m), W = String(A), G = String(P);
        P = Math.max(Math.abs(P), 1);
        let M = a(K) || a(W) || a(G), Z = M ? Math.max(K.length, W.length, G.length) : 0, F = M === !1 && d(m, A, k) === !1, V = k.transform || b(F);
        if (k.toRegex && P === 1)
          return N(f(m, Z), f(A, Z), !0, k);
        let U = { negatives: [], positives: [] }, Y = (L) => U[L < 0 ? "negatives" : "positives"].push(Math.abs(L)), te = [], J = 0;
        for (; D ? S >= z : S <= z; )
          k.toRegex === !0 && P > 1 ? Y(S) : te.push(p(V(S, J), Z, F)), S = D ? S - P : S + P, J++;
        return k.toRegex === !0 ? P > 1 ? E(U, k) : u(te, null, { wrap: !1, ...k }) : te;
      }, w = (m, A, P = 1, k = {}) => {
        if (!_(m) && m.length > 1 || !_(A) && A.length > 1)
          return v(m, A, k);
        let S = k.transform || ((F) => String.fromCharCode(F)), z = `${m}`.charCodeAt(0), D = `${A}`.charCodeAt(0), K = z > D, W = Math.min(z, D), G = Math.max(z, D);
        if (k.toRegex && P === 1)
          return N(W, G, !1, k);
        let M = [], Z = 0;
        for (; K ? z >= D : z <= D; )
          M.push(S(z, Z)), z = K ? z - P : z + P, Z++;
        return k.toRegex === !0 ? u(M, null, { wrap: !1, options: k }) : M;
      }, I = (m, A, P, k = {}) => {
        if (A == null && x(m))
          return [m];
        if (!x(m) || !x(A))
          return v(m, A, k);
        if (typeof P == "function")
          return I(m, A, 1, { transform: P });
        if (h(P))
          return I(m, A, 0, P);
        let S = { ...k };
        return S.capture === !0 && (S.wrap = !0), P = P || S.step || 1, _(P) ? _(m) && _(A) ? y(m, A, P, S) : w(m, A, Math.max(Math.abs(P), 1), S) : P != null && !h(P) ? O(P, S) : I(m, A, 1, P);
      };
      r.exports = I;
    }, 357: (r) => {
      /*!
       * is-number <https://github.com/jonschlinkert/is-number>
       *
       * Copyright (c) 2014-present, Jon Schlinkert.
       * Released under the MIT License.
       */
      r.exports = function(o) {
        return typeof o == "number" ? o - o === 0 : typeof o == "string" && o.trim() !== "" ? Number.isFinite ? Number.isFinite(+o) : isFinite(+o) : !1;
      };
    }, 971: (r, o, n) => {
      const l = n(837), c = n(333), h = n(251), b = n(513), x = (a) => a === "" || a === "./", _ = (a, d, p) => {
        d = [].concat(d), a = [].concat(a);
        let f = /* @__PURE__ */ new Set(), E = /* @__PURE__ */ new Set(), N = /* @__PURE__ */ new Set(), u = 0, R = (y) => {
          N.add(y.output), p && p.onResult && p.onResult(y);
        };
        for (let y = 0; y < d.length; y++) {
          let w = h(String(d[y]), { ...p, onResult: R }, !0), I = w.state.negated || w.state.negatedExtglob;
          I && u++;
          for (let m of a) {
            let A = w(m, !0);
            (I ? !A.isMatch : A.isMatch) && (I ? f.add(A.output) : (f.delete(A.output), E.add(A.output)));
          }
        }
        let O = (u === d.length ? [...N] : [...E]).filter((y) => !f.has(y));
        if (p && O.length === 0) {
          if (p.failglob === !0)
            throw new Error(`No matches found for "${d.join(", ")}"`);
          if (p.nonull === !0 || p.nullglob === !0)
            return p.unescape ? d.map((y) => y.replace(/\\/g, "")) : d;
        }
        return O;
      };
      _.match = _, _.matcher = (a, d) => h(a, d), _.isMatch = (a, d, p) => h(d, p)(a), _.any = _.isMatch, _.not = (a, d, p = {}) => {
        d = [].concat(d).map(String);
        let f = /* @__PURE__ */ new Set(), E = [], u = _(a, d, { ...p, onResult: (R) => {
          p.onResult && p.onResult(R), E.push(R.output);
        } });
        for (let R of E)
          u.includes(R) || f.add(R);
        return [...f];
      }, _.contains = (a, d, p) => {
        if (typeof a != "string")
          throw new TypeError(`Expected a string: "${l.inspect(a)}"`);
        if (Array.isArray(d))
          return d.some((f) => _.contains(a, f, p));
        if (typeof d == "string") {
          if (x(a) || x(d))
            return !1;
          if (a.includes(d) || a.startsWith("./") && a.slice(2).includes(d))
            return !0;
        }
        return _.isMatch(a, d, { ...p, contains: !0 });
      }, _.matchKeys = (a, d, p) => {
        if (!b.isObject(a))
          throw new TypeError("Expected the first argument to be an object");
        let f = _(Object.keys(a), d, p), E = {};
        for (let N of f) E[N] = a[N];
        return E;
      }, _.some = (a, d, p) => {
        let f = [].concat(a);
        for (let E of [].concat(d)) {
          let N = h(String(E), p);
          if (f.some((u) => N(u)))
            return !0;
        }
        return !1;
      }, _.every = (a, d, p) => {
        let f = [].concat(a);
        for (let E of [].concat(d)) {
          let N = h(String(E), p);
          if (!f.every((u) => N(u)))
            return !1;
        }
        return !0;
      }, _.all = (a, d, p) => {
        if (typeof a != "string")
          throw new TypeError(`Expected a string: "${l.inspect(a)}"`);
        return [].concat(d).every((f) => h(f, p)(a));
      }, _.capture = (a, d, p) => {
        let f = b.isWindows(p), N = h.makeRe(String(a), { ...p, capture: !0 }).exec(f ? b.toPosixSlashes(d) : d);
        if (N)
          return N.slice(1).map((u) => u === void 0 ? "" : u);
      }, _.makeRe = (...a) => h.makeRe(...a), _.scan = (...a) => h.scan(...a), _.parse = (a, d) => {
        let p = [];
        for (let f of [].concat(a || []))
          for (let E of c(String(f), d))
            p.push(h.parse(E, d));
        return p;
      }, _.braces = (a, d) => {
        if (typeof a != "string") throw new TypeError("Expected a string");
        return d && d.nobrace === !0 || !/\{.*\}/.test(a) ? [a] : c(a, d);
      }, _.braceExpand = (a, d) => {
        if (typeof a != "string") throw new TypeError("Expected a string");
        return _.braces(a, { ...d, expand: !0 });
      }, r.exports = _;
    }, 251: (r, o, n) => {
      r.exports = n(683);
    }, 356: (r, o, n) => {
      const l = n(17), c = "\\\\/", h = `[^${c}]`, b = "\\.", x = "\\+", _ = "\\?", a = "\\/", d = "(?=.)", p = "[^/]", f = `(?:${a}|$)`, E = `(?:^|${a})`, N = `${b}{1,2}${f}`, u = `(?!${b})`, R = `(?!${E}${N})`, v = `(?!${b}{0,1}${f})`, O = `(?!${N})`, y = `[^.${a}]`, w = `${p}*?`, I = { DOT_LITERAL: b, PLUS_LITERAL: x, QMARK_LITERAL: _, SLASH_LITERAL: a, ONE_CHAR: d, QMARK: p, END_ANCHOR: f, DOTS_SLASH: N, NO_DOT: u, NO_DOTS: R, NO_DOT_SLASH: v, NO_DOTS_SLASH: O, QMARK_NO_DOT: y, STAR: w, START_ANCHOR: E }, m = { ...I, SLASH_LITERAL: `[${c}]`, QMARK: h, STAR: `${h}*?`, DOTS_SLASH: `${b}{1,2}(?:[${c}]|$)`, NO_DOT: `(?!${b})`, NO_DOTS: `(?!(?:^|[${c}])${b}{1,2}(?:[${c}]|$))`, NO_DOT_SLASH: `(?!${b}{0,1}(?:[${c}]|$))`, NO_DOTS_SLASH: `(?!${b}{1,2}(?:[${c}]|$))`, QMARK_NO_DOT: `[^.${c}]`, START_ANCHOR: `(?:^|[${c}])`, END_ANCHOR: `(?:[${c}]|$)` }, A = { alnum: "a-zA-Z0-9", alpha: "a-zA-Z", ascii: "\\x00-\\x7F", blank: " \\t", cntrl: "\\x00-\\x1F\\x7F", digit: "0-9", graph: "\\x21-\\x7E", lower: "a-z", print: "\\x20-\\x7E ", punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~", space: " \\t\\r\\n\\v\\f", upper: "A-Z", word: "A-Za-z0-9_", xdigit: "A-Fa-f0-9" };
      r.exports = { MAX_LENGTH: 65536, POSIX_REGEX_SOURCE: A, REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g, REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/, REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/, REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g, REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g, REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g, REPLACEMENTS: { "***": "*", "**/**": "**", "**/**/**": "**" }, CHAR_0: 48, CHAR_9: 57, CHAR_UPPERCASE_A: 65, CHAR_LOWERCASE_A: 97, CHAR_UPPERCASE_Z: 90, CHAR_LOWERCASE_Z: 122, CHAR_LEFT_PARENTHESES: 40, CHAR_RIGHT_PARENTHESES: 41, CHAR_ASTERISK: 42, CHAR_AMPERSAND: 38, CHAR_AT: 64, CHAR_BACKWARD_SLASH: 92, CHAR_CARRIAGE_RETURN: 13, CHAR_CIRCUMFLEX_ACCENT: 94, CHAR_COLON: 58, CHAR_COMMA: 44, CHAR_DOT: 46, CHAR_DOUBLE_QUOTE: 34, CHAR_EQUAL: 61, CHAR_EXCLAMATION_MARK: 33, CHAR_FORM_FEED: 12, CHAR_FORWARD_SLASH: 47, CHAR_GRAVE_ACCENT: 96, CHAR_HASH: 35, CHAR_HYPHEN_MINUS: 45, CHAR_LEFT_ANGLE_BRACKET: 60, CHAR_LEFT_CURLY_BRACE: 123, CHAR_LEFT_SQUARE_BRACKET: 91, CHAR_LINE_FEED: 10, CHAR_NO_BREAK_SPACE: 160, CHAR_PERCENT: 37, CHAR_PLUS: 43, CHAR_QUESTION_MARK: 63, CHAR_RIGHT_ANGLE_BRACKET: 62, CHAR_RIGHT_CURLY_BRACE: 125, CHAR_RIGHT_SQUARE_BRACKET: 93, CHAR_SEMICOLON: 59, CHAR_SINGLE_QUOTE: 39, CHAR_SPACE: 32, CHAR_TAB: 9, CHAR_UNDERSCORE: 95, CHAR_VERTICAL_LINE: 124, CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279, SEP: l.sep, extglobChars(P) {
        return { "!": { type: "negate", open: "(?:(?!(?:", close: `))${P.STAR})` }, "?": { type: "qmark", open: "(?:", close: ")?" }, "+": { type: "plus", open: "(?:", close: ")+" }, "*": { type: "star", open: "(?:", close: ")*" }, "@": { type: "at", open: "(?:", close: ")" } };
      }, globChars(P) {
        return P === !0 ? m : I;
      } };
    }, 754: (r, o, n) => {
      const l = n(356), c = n(513), { MAX_LENGTH: h, POSIX_REGEX_SOURCE: b, REGEX_NON_SPECIAL_CHARS: x, REGEX_SPECIAL_CHARS_BACKREF: _, REPLACEMENTS: a } = l, d = (E, N) => {
        if (typeof N.expandRange == "function")
          return N.expandRange(...E, N);
        E.sort();
        const u = `[${E.join("-")}]`;
        try {
          new RegExp(u);
        } catch {
          return E.map((v) => c.escapeRegex(v)).join("..");
        }
        return u;
      }, p = (E, N) => `Missing ${E}: "${N}" - use "\\\\${N}" to match literal characters`, f = (E, N) => {
        if (typeof E != "string")
          throw new TypeError("Expected a string");
        E = a[E] || E;
        const u = { ...N }, R = typeof u.maxLength == "number" ? Math.min(h, u.maxLength) : h;
        let v = E.length;
        if (v > R)
          throw new SyntaxError(`Input length: ${v}, exceeds maximum allowed length: ${R}`);
        const O = { type: "bos", value: "", output: u.prepend || "" }, y = [O], w = u.capture ? "" : "?:", I = c.isWindows(N), m = l.globChars(I), A = l.extglobChars(m), { DOT_LITERAL: P, PLUS_LITERAL: k, SLASH_LITERAL: S, ONE_CHAR: z, DOTS_SLASH: D, NO_DOT: K, NO_DOT_SLASH: W, NO_DOTS_SLASH: G, QMARK: M, QMARK_NO_DOT: Z, STAR: F, START_ANCHOR: V } = m, U = (q) => `(${w}(?:(?!${V}${q.dot ? D : P}).)*?)`, Y = u.dot ? "" : K, te = u.dot ? M : Z;
        let J = u.bash === !0 ? U(u) : F;
        u.capture && (J = `(${J})`), typeof u.noext == "boolean" && (u.noextglob = u.noext);
        const L = { input: E, index: -1, start: 0, dot: u.dot === !0, consumed: "", output: "", prefix: "", backtrack: !1, negated: !1, brackets: 0, braces: 0, parens: 0, quotes: 0, globstar: !1, tokens: y };
        E = c.removePrefix(E, L), v = E.length;
        const ue = [], re = [], ee = [];
        let T = O, C;
        const X = () => L.index === v - 1, oe = L.peek = (q = 1) => E[L.index + q], me = L.advance = () => E[++L.index], le = () => E.slice(L.index + 1), ie = (q = "", B = 0) => {
          L.consumed += q, L.index += B;
        }, ye = (q) => {
          L.output += q.output != null ? q.output : q.value, ie(q.value);
        }, de = () => {
          let q = 1;
          for (; oe() === "!" && (oe(2) !== "(" || oe(3) === "?"); )
            me(), L.start++, q++;
          return q % 2 === 0 ? !1 : (L.negated = !0, L.start++, !0);
        }, Q = (q) => {
          L[q]++, ee.push(q);
        }, ce = (q) => {
          L[q]--, ee.pop();
        }, H = (q) => {
          if (T.type === "globstar") {
            const B = L.braces > 0 && (q.type === "comma" || q.type === "brace"), $ = q.extglob === !0 || ue.length && (q.type === "pipe" || q.type === "paren");
            q.type !== "slash" && q.type !== "paren" && !B && !$ && (L.output = L.output.slice(0, -T.output.length), T.type = "star", T.value = "*", T.output = J, L.output += T.output);
          }
          if (ue.length && q.type !== "paren" && !A[q.value] && (ue[ue.length - 1].inner += q.value), (q.value || q.output) && ye(q), T && T.type === "text" && q.type === "text") {
            T.value += q.value, T.output = (T.output || "") + q.value;
            return;
          }
          q.prev = T, y.push(q), T = q;
        }, se = (q, B) => {
          const $ = { ...A[B], conditions: 1, inner: "" };
          $.prev = T, $.parens = L.parens, $.output = L.output;
          const ne = (u.capture ? "(" : "") + $.open;
          Q("parens"), H({ type: q, value: B, output: L.output ? "" : z }), H({ type: "paren", extglob: !0, value: me(), output: ne }), ue.push($);
        }, he = (q) => {
          let B = q.close + (u.capture ? ")" : "");
          if (q.type === "negate") {
            let $ = J;
            q.inner && q.inner.length > 1 && q.inner.includes("/") && ($ = U(u)), ($ !== J || X() || /^\)+$/.test(le())) && (B = q.close = `)$))${$}`), q.prev.type === "bos" && (L.negatedExtglob = !0);
          }
          H({ type: "paren", extglob: !0, value: C, output: B }), ce("parens");
        };
        if (u.fastpaths !== !1 && !/(^[*!]|[/()[\]{}"])/.test(E)) {
          let q = !1, B = E.replace(_, ($, ne, fe, ge, pe, Be) => ge === "\\" ? (q = !0, $) : ge === "?" ? ne ? ne + ge + (pe ? M.repeat(pe.length) : "") : Be === 0 ? te + (pe ? M.repeat(pe.length) : "") : M.repeat(fe.length) : ge === "." ? P.repeat(fe.length) : ge === "*" ? ne ? ne + ge + (pe ? J : "") : J : ne ? $ : `\\${$}`);
          return q === !0 && (u.unescape === !0 ? B = B.replace(/\\/g, "") : B = B.replace(/\\+/g, ($) => $.length % 2 === 0 ? "\\\\" : $ ? "\\" : "")), B === E && u.contains === !0 ? (L.output = E, L) : (L.output = c.wrapOutput(B, L, N), L);
        }
        for (; !X(); ) {
          if (C = me(), C === "\0")
            continue;
          if (C === "\\") {
            const $ = oe();
            if ($ === "/" && u.bash !== !0 || $ === "." || $ === ";")
              continue;
            if (!$) {
              C += "\\", H({ type: "text", value: C });
              continue;
            }
            const ne = /^\\+/.exec(le());
            let fe = 0;
            if (ne && ne[0].length > 2 && (fe = ne[0].length, L.index += fe, fe % 2 !== 0 && (C += "\\")), u.unescape === !0 ? C = me() || "" : C += me() || "", L.brackets === 0) {
              H({ type: "text", value: C });
              continue;
            }
          }
          if (L.brackets > 0 && (C !== "]" || T.value === "[" || T.value === "[^")) {
            if (u.posix !== !1 && C === ":") {
              const $ = T.value.slice(1);
              if ($.includes("[") && (T.posix = !0, $.includes(":"))) {
                const ne = T.value.lastIndexOf("["), fe = T.value.slice(0, ne), ge = T.value.slice(ne + 2), pe = b[ge];
                if (pe) {
                  T.value = fe + pe, L.backtrack = !0, me(), !O.output && y.indexOf(T) === 1 && (O.output = z);
                  continue;
                }
              }
            }
            (C === "[" && oe() !== ":" || C === "-" && oe() === "]") && (C = `\\${C}`), C === "]" && (T.value === "[" || T.value === "[^") && (C = `\\${C}`), u.posix === !0 && C === "!" && T.value === "[" && (C = "^"), T.value += C, ye({ value: C });
            continue;
          }
          if (L.quotes === 1 && C !== '"') {
            C = c.escapeRegex(C), T.value += C, ye({ value: C });
            continue;
          }
          if (C === '"') {
            L.quotes = L.quotes === 1 ? 0 : 1, u.keepQuotes === !0 && H({ type: "text", value: C });
            continue;
          }
          if (C === "(") {
            Q("parens"), H({ type: "paren", value: C });
            continue;
          }
          if (C === ")") {
            if (L.parens === 0 && u.strictBrackets === !0)
              throw new SyntaxError(p("opening", "("));
            const $ = ue[ue.length - 1];
            if ($ && L.parens === $.parens + 1) {
              he(ue.pop());
              continue;
            }
            H({ type: "paren", value: C, output: L.parens ? ")" : "\\)" }), ce("parens");
            continue;
          }
          if (C === "[") {
            if (u.nobracket === !0 || !le().includes("]")) {
              if (u.nobracket !== !0 && u.strictBrackets === !0)
                throw new SyntaxError(p("closing", "]"));
              C = `\\${C}`;
            } else
              Q("brackets");
            H({ type: "bracket", value: C });
            continue;
          }
          if (C === "]") {
            if (u.nobracket === !0 || T && T.type === "bracket" && T.value.length === 1) {
              H({ type: "text", value: C, output: `\\${C}` });
              continue;
            }
            if (L.brackets === 0) {
              if (u.strictBrackets === !0)
                throw new SyntaxError(p("opening", "["));
              H({ type: "text", value: C, output: `\\${C}` });
              continue;
            }
            ce("brackets");
            const $ = T.value.slice(1);
            if (T.posix !== !0 && $[0] === "^" && !$.includes("/") && (C = `/${C}`), T.value += C, ye({ value: C }), u.literalBrackets === !1 || c.hasRegexChars($))
              continue;
            const ne = c.escapeRegex(T.value);
            if (L.output = L.output.slice(0, -T.value.length), u.literalBrackets === !0) {
              L.output += ne, T.value = ne;
              continue;
            }
            T.value = `(${w}${ne}|${T.value})`, L.output += T.value;
            continue;
          }
          if (C === "{" && u.nobrace !== !0) {
            Q("braces");
            const $ = { type: "brace", value: C, output: "(", outputIndex: L.output.length, tokensIndex: L.tokens.length };
            re.push($), H($);
            continue;
          }
          if (C === "}") {
            const $ = re[re.length - 1];
            if (u.nobrace === !0 || !$) {
              H({ type: "text", value: C, output: C });
              continue;
            }
            let ne = ")";
            if ($.dots === !0) {
              const fe = y.slice(), ge = [];
              for (let pe = fe.length - 1; pe >= 0 && (y.pop(), fe[pe].type !== "brace"); pe--)
                fe[pe].type !== "dots" && ge.unshift(fe[pe].value);
              ne = d(ge, u), L.backtrack = !0;
            }
            if ($.comma !== !0 && $.dots !== !0) {
              const fe = L.output.slice(0, $.outputIndex), ge = L.tokens.slice($.tokensIndex);
              $.value = $.output = "\\{", C = ne = "\\}", L.output = fe;
              for (const pe of ge)
                L.output += pe.output || pe.value;
            }
            H({ type: "brace", value: C, output: ne }), ce("braces"), re.pop();
            continue;
          }
          if (C === "|") {
            ue.length > 0 && ue[ue.length - 1].conditions++, H({ type: "text", value: C });
            continue;
          }
          if (C === ",") {
            let $ = C;
            const ne = re[re.length - 1];
            ne && ee[ee.length - 1] === "braces" && (ne.comma = !0, $ = "|"), H({ type: "comma", value: C, output: $ });
            continue;
          }
          if (C === "/") {
            if (T.type === "dot" && L.index === L.start + 1) {
              L.start = L.index + 1, L.consumed = "", L.output = "", y.pop(), T = O;
              continue;
            }
            H({ type: "slash", value: C, output: S });
            continue;
          }
          if (C === ".") {
            if (L.braces > 0 && T.type === "dot") {
              T.value === "." && (T.output = P);
              const $ = re[re.length - 1];
              T.type = "dots", T.output += C, T.value += C, $.dots = !0;
              continue;
            }
            if (L.braces + L.parens === 0 && T.type !== "bos" && T.type !== "slash") {
              H({ type: "text", value: C, output: P });
              continue;
            }
            H({ type: "dot", value: C, output: P });
            continue;
          }
          if (C === "?") {
            if (!(T && T.value === "(") && u.noextglob !== !0 && oe() === "(" && oe(2) !== "?") {
              se("qmark", C);
              continue;
            }
            if (T && T.type === "paren") {
              const ne = oe();
              let fe = C;
              if (ne === "<" && !c.supportsLookbehinds())
                throw new Error("Node.js v10 or higher is required for regex lookbehinds");
              (T.value === "(" && !/[!=<:]/.test(ne) || ne === "<" && !/<([!=]|\w+>)/.test(le())) && (fe = `\\${C}`), H({ type: "text", value: C, output: fe });
              continue;
            }
            if (u.dot !== !0 && (T.type === "slash" || T.type === "bos")) {
              H({ type: "qmark", value: C, output: Z });
              continue;
            }
            H({ type: "qmark", value: C, output: M });
            continue;
          }
          if (C === "!") {
            if (u.noextglob !== !0 && oe() === "(" && (oe(2) !== "?" || !/[!=<:]/.test(oe(3)))) {
              se("negate", C);
              continue;
            }
            if (u.nonegate !== !0 && L.index === 0) {
              de();
              continue;
            }
          }
          if (C === "+") {
            if (u.noextglob !== !0 && oe() === "(" && oe(2) !== "?") {
              se("plus", C);
              continue;
            }
            if (T && T.value === "(" || u.regex === !1) {
              H({ type: "plus", value: C, output: k });
              continue;
            }
            if (T && (T.type === "bracket" || T.type === "paren" || T.type === "brace") || L.parens > 0) {
              H({ type: "plus", value: C });
              continue;
            }
            H({ type: "plus", value: k });
            continue;
          }
          if (C === "@") {
            if (u.noextglob !== !0 && oe() === "(" && oe(2) !== "?") {
              H({ type: "at", extglob: !0, value: C, output: "" });
              continue;
            }
            H({ type: "text", value: C });
            continue;
          }
          if (C !== "*") {
            (C === "$" || C === "^") && (C = `\\${C}`);
            const $ = x.exec(le());
            $ && (C += $[0], L.index += $[0].length), H({ type: "text", value: C });
            continue;
          }
          if (T && (T.type === "globstar" || T.star === !0)) {
            T.type = "star", T.star = !0, T.value += C, T.output = J, L.backtrack = !0, L.globstar = !0, ie(C);
            continue;
          }
          let q = le();
          if (u.noextglob !== !0 && /^\([^?]/.test(q)) {
            se("star", C);
            continue;
          }
          if (T.type === "star") {
            if (u.noglobstar === !0) {
              ie(C);
              continue;
            }
            const $ = T.prev, ne = $.prev, fe = $.type === "slash" || $.type === "bos", ge = ne && (ne.type === "star" || ne.type === "globstar");
            if (u.bash === !0 && (!fe || q[0] && q[0] !== "/")) {
              H({ type: "star", value: C, output: "" });
              continue;
            }
            const pe = L.braces > 0 && ($.type === "comma" || $.type === "brace"), Be = ue.length && ($.type === "pipe" || $.type === "paren");
            if (!fe && $.type !== "paren" && !pe && !Be) {
              H({ type: "star", value: C, output: "" });
              continue;
            }
            for (; q.slice(0, 3) === "/**"; ) {
              const Ce = E[L.index + 4];
              if (Ce && Ce !== "/")
                break;
              q = q.slice(3), ie("/**", 3);
            }
            if ($.type === "bos" && X()) {
              T.type = "globstar", T.value += C, T.output = U(u), L.output = T.output, L.globstar = !0, ie(C);
              continue;
            }
            if ($.type === "slash" && $.prev.type !== "bos" && !ge && X()) {
              L.output = L.output.slice(0, -($.output + T.output).length), $.output = `(?:${$.output}`, T.type = "globstar", T.output = U(u) + (u.strictSlashes ? ")" : "|$)"), T.value += C, L.globstar = !0, L.output += $.output + T.output, ie(C);
              continue;
            }
            if ($.type === "slash" && $.prev.type !== "bos" && q[0] === "/") {
              const Ce = q[1] !== void 0 ? "|$" : "";
              L.output = L.output.slice(0, -($.output + T.output).length), $.output = `(?:${$.output}`, T.type = "globstar", T.output = `${U(u)}${S}|${S}${Ce})`, T.value += C, L.output += $.output + T.output, L.globstar = !0, ie(C + me()), H({ type: "slash", value: "/", output: "" });
              continue;
            }
            if ($.type === "bos" && q[0] === "/") {
              T.type = "globstar", T.value += C, T.output = `(?:^|${S}|${U(u)}${S})`, L.output = T.output, L.globstar = !0, ie(C + me()), H({ type: "slash", value: "/", output: "" });
              continue;
            }
            L.output = L.output.slice(0, -T.output.length), T.type = "globstar", T.output = U(u), T.value += C, L.output += T.output, L.globstar = !0, ie(C);
            continue;
          }
          const B = { type: "star", value: C, output: J };
          if (u.bash === !0) {
            B.output = ".*?", (T.type === "bos" || T.type === "slash") && (B.output = Y + B.output), H(B);
            continue;
          }
          if (T && (T.type === "bracket" || T.type === "paren") && u.regex === !0) {
            B.output = C, H(B);
            continue;
          }
          (L.index === L.start || T.type === "slash" || T.type === "dot") && (T.type === "dot" ? (L.output += W, T.output += W) : u.dot === !0 ? (L.output += G, T.output += G) : (L.output += Y, T.output += Y), oe() !== "*" && (L.output += z, T.output += z)), H(B);
        }
        for (; L.brackets > 0; ) {
          if (u.strictBrackets === !0) throw new SyntaxError(p("closing", "]"));
          L.output = c.escapeLast(L.output, "["), ce("brackets");
        }
        for (; L.parens > 0; ) {
          if (u.strictBrackets === !0) throw new SyntaxError(p("closing", ")"));
          L.output = c.escapeLast(L.output, "("), ce("parens");
        }
        for (; L.braces > 0; ) {
          if (u.strictBrackets === !0) throw new SyntaxError(p("closing", "}"));
          L.output = c.escapeLast(L.output, "{"), ce("braces");
        }
        if (u.strictSlashes !== !0 && (T.type === "star" || T.type === "bracket") && H({ type: "maybe_slash", value: "", output: `${S}?` }), L.backtrack === !0) {
          L.output = "";
          for (const q of L.tokens)
            L.output += q.output != null ? q.output : q.value, q.suffix && (L.output += q.suffix);
        }
        return L;
      };
      f.fastpaths = (E, N) => {
        const u = { ...N }, R = typeof u.maxLength == "number" ? Math.min(h, u.maxLength) : h, v = E.length;
        if (v > R)
          throw new SyntaxError(`Input length: ${v}, exceeds maximum allowed length: ${R}`);
        E = a[E] || E;
        const O = c.isWindows(N), { DOT_LITERAL: y, SLASH_LITERAL: w, ONE_CHAR: I, DOTS_SLASH: m, NO_DOT: A, NO_DOTS: P, NO_DOTS_SLASH: k, STAR: S, START_ANCHOR: z } = l.globChars(O), D = u.dot ? P : A, K = u.dot ? k : A, W = u.capture ? "" : "?:", G = { negated: !1, prefix: "" };
        let M = u.bash === !0 ? ".*?" : S;
        u.capture && (M = `(${M})`);
        const Z = (Y) => Y.noglobstar === !0 ? M : `(${W}(?:(?!${z}${Y.dot ? m : y}).)*?)`, F = (Y) => {
          switch (Y) {
            case "*":
              return `${D}${I}${M}`;
            case ".*":
              return `${y}${I}${M}`;
            case "*.*":
              return `${D}${M}${y}${I}${M}`;
            case "*/*":
              return `${D}${M}${w}${I}${K}${M}`;
            case "**":
              return D + Z(u);
            case "**/*":
              return `(?:${D}${Z(u)}${w})?${K}${I}${M}`;
            case "**/*.*":
              return `(?:${D}${Z(u)}${w})?${K}${M}${y}${I}${M}`;
            case "**/.*":
              return `(?:${D}${Z(u)}${w})?${y}${I}${M}`;
            default: {
              const te = /^(.*?)\.(\w+)$/.exec(Y);
              if (!te) return;
              const J = F(te[1]);
              return J ? J + y + te[2] : void 0;
            }
          }
        }, V = c.removePrefix(E, G);
        let U = F(V);
        return U && u.strictSlashes !== !0 && (U += `${w}?`), U;
      }, r.exports = f;
    }, 683: (r, o, n) => {
      const l = n(17), c = n(700), h = n(754), b = n(513), x = n(356), _ = (d) => d && typeof d == "object" && !Array.isArray(d), a = (d, p, f = !1) => {
        if (Array.isArray(d)) {
          const w = d.map((m) => a(m, p, f));
          return (m) => {
            for (const A of w) {
              const P = A(m);
              if (P) return P;
            }
            return !1;
          };
        }
        const E = _(d) && d.tokens && d.input;
        if (d === "" || typeof d != "string" && !E)
          throw new TypeError("Expected pattern to be a non-empty string");
        const N = p || {}, u = b.isWindows(p), R = E ? a.compileRe(d, p) : a.makeRe(d, p, !1, !0), v = R.state;
        delete R.state;
        let O = () => !1;
        if (N.ignore) {
          const w = { ...p, ignore: null, onMatch: null, onResult: null };
          O = a(N.ignore, w, f);
        }
        const y = (w, I = !1) => {
          const { isMatch: m, match: A, output: P } = a.test(w, R, p, { glob: d, posix: u }), k = { glob: d, state: v, regex: R, posix: u, input: w, output: P, match: A, isMatch: m };
          return typeof N.onResult == "function" && N.onResult(k), m === !1 ? (k.isMatch = !1, I ? k : !1) : O(w) ? (typeof N.onIgnore == "function" && N.onIgnore(k), k.isMatch = !1, I ? k : !1) : (typeof N.onMatch == "function" && N.onMatch(k), I ? k : !0);
        };
        return f && (y.state = v), y;
      };
      a.test = (d, p, f, { glob: E, posix: N } = {}) => {
        if (typeof d != "string")
          throw new TypeError("Expected input to be a string");
        if (d === "")
          return { isMatch: !1, output: "" };
        const u = f || {}, R = u.format || (N ? b.toPosixSlashes : null);
        let v = d === E, O = v && R ? R(d) : d;
        return v === !1 && (O = R ? R(d) : d, v = O === E), (v === !1 || u.capture === !0) && (u.matchBase === !0 || u.basename === !0 ? v = a.matchBase(d, p, f, N) : v = p.exec(O)), { isMatch: !!v, match: v, output: O };
      }, a.matchBase = (d, p, f, E = b.isWindows(f)) => (p instanceof RegExp ? p : a.makeRe(p, f)).test(l.basename(d)), a.isMatch = (d, p, f) => a(p, f)(d), a.parse = (d, p) => Array.isArray(d) ? d.map((f) => a.parse(f, p)) : h(d, { ...p, fastpaths: !1 }), a.scan = (d, p) => c(d, p), a.compileRe = (d, p, f = !1, E = !1) => {
        if (f === !0)
          return d.output;
        const N = p || {}, u = N.contains ? "" : "^", R = N.contains ? "" : "$";
        let v = `${u}(?:${d.output})${R}`;
        d && d.negated === !0 && (v = `^(?!${v}).*$`);
        const O = a.toRegex(v, p);
        return E === !0 && (O.state = d), O;
      }, a.makeRe = (d, p, f = !1, E = !1) => {
        if (!d || typeof d != "string")
          throw new TypeError("Expected a non-empty string");
        const N = p || {};
        let u = { negated: !1, fastpaths: !0 }, R = "", v;
        return d.startsWith("./") && (d = d.slice(2), R = u.prefix = "./"), N.fastpaths !== !1 && (d[0] === "." || d[0] === "*") && (v = h.fastpaths(d, p)), v === void 0 ? (u = h(d, p), u.prefix = R + (u.prefix || "")) : u.output = v, a.compileRe(u, p, f, E);
      }, a.toRegex = (d, p) => {
        try {
          const f = p || {};
          return new RegExp(d, f.flags || (f.nocase ? "i" : ""));
        } catch (f) {
          if (p && p.debug === !0) throw f;
          return /$^/;
        }
      }, a.constants = x, r.exports = a;
    }, 700: (r, o, n) => {
      const l = n(513), { CHAR_ASTERISK: c, CHAR_AT: h, CHAR_BACKWARD_SLASH: b, CHAR_COMMA: x, CHAR_DOT: _, CHAR_EXCLAMATION_MARK: a, CHAR_FORWARD_SLASH: d, CHAR_LEFT_CURLY_BRACE: p, CHAR_LEFT_PARENTHESES: f, CHAR_LEFT_SQUARE_BRACKET: E, CHAR_PLUS: N, CHAR_QUESTION_MARK: u, CHAR_RIGHT_CURLY_BRACE: R, CHAR_RIGHT_PARENTHESES: v, CHAR_RIGHT_SQUARE_BRACKET: O } = n(356), y = (m) => m === d || m === b, w = (m) => {
        m.isPrefix !== !0 && (m.depth = m.isGlobstar ? 1 / 0 : 1);
      }, I = (m, A) => {
        const P = A || {}, k = m.length - 1, S = P.parts === !0 || P.scanToEnd === !0, z = [], D = [], K = [];
        let W = m, G = -1, M = 0, Z = 0, F = !1, V = !1, U = !1, Y = !1, te = !1, J = !1, L = !1, ue = !1, re = !1, ee = 0, T, C, X = { value: "", depth: 0, isGlob: !1 };
        const oe = () => G >= k, me = () => W.charCodeAt(G + 1), le = () => (T = C, W.charCodeAt(++G));
        for (; G < k; ) {
          C = le();
          let ce;
          if (C === b) {
            L = X.backslashes = !0, C = le(), C === p && (J = !0);
            continue;
          }
          if (J === !0 || C === p) {
            for (ee++; oe() !== !0 && (C = le()); ) {
              if (C === b) {
                L = X.backslashes = !0, le();
                continue;
              }
              if (C === p) {
                ee++;
                continue;
              }
              if (J !== !0 && C === _ && (C = le()) === _) {
                if (F = X.isBrace = !0, U = X.isGlob = !0, re = !0, S === !0)
                  continue;
                break;
              }
              if (J !== !0 && C === x) {
                if (F = X.isBrace = !0, U = X.isGlob = !0, re = !0, S === !0)
                  continue;
                break;
              }
              if (C === R && (ee--, ee === 0)) {
                J = !1, F = X.isBrace = !0, re = !0;
                break;
              }
            }
            if (S === !0)
              continue;
            break;
          }
          if (C === d) {
            if (z.push(G), D.push(X), X = { value: "", depth: 0, isGlob: !1 }, re === !0) continue;
            if (T === _ && G === M + 1) {
              M += 2;
              continue;
            }
            Z = G + 1;
            continue;
          }
          if (P.noext !== !0 && (C === N || C === h || C === c || C === u || C === a) === !0 && me() === f) {
            if (U = X.isGlob = !0, Y = X.isExtglob = !0, re = !0, S === !0) {
              for (; oe() !== !0 && (C = le()); ) {
                if (C === b) {
                  L = X.backslashes = !0, C = le();
                  continue;
                }
                if (C === v) {
                  U = X.isGlob = !0, re = !0;
                  break;
                }
              }
              continue;
            }
            break;
          }
          if (C === c) {
            if (T === c && (te = X.isGlobstar = !0), U = X.isGlob = !0, re = !0, S === !0)
              continue;
            break;
          }
          if (C === u) {
            if (U = X.isGlob = !0, re = !0, S === !0)
              continue;
            break;
          }
          if (C === E) {
            for (; oe() !== !0 && (ce = le()); ) {
              if (ce === b) {
                L = X.backslashes = !0, le();
                continue;
              }
              if (ce === O) {
                V = X.isBracket = !0, U = X.isGlob = !0, re = !0;
                break;
              }
            }
            if (S === !0)
              continue;
            break;
          }
          if (P.nonegate !== !0 && C === a && G === M) {
            ue = X.negated = !0, M++;
            continue;
          }
          if (P.noparen !== !0 && C === f) {
            if (U = X.isGlob = !0, S === !0) {
              for (; oe() !== !0 && (C = le()); ) {
                if (C === f) {
                  L = X.backslashes = !0, C = le();
                  continue;
                }
                if (C === v) {
                  re = !0;
                  break;
                }
              }
              continue;
            }
            break;
          }
          if (U === !0) {
            if (re = !0, S === !0)
              continue;
            break;
          }
        }
        P.noext === !0 && (Y = !1, U = !1);
        let ie = W, ye = "", de = "";
        M > 0 && (ye = W.slice(0, M), W = W.slice(M), Z -= M), ie && U === !0 && Z > 0 ? (ie = W.slice(0, Z), de = W.slice(Z)) : U === !0 ? (ie = "", de = W) : ie = W, ie && ie !== "" && ie !== "/" && ie !== W && y(ie.charCodeAt(ie.length - 1)) && (ie = ie.slice(0, -1)), P.unescape === !0 && (de && (de = l.removeBackslashes(de)), ie && L === !0 && (ie = l.removeBackslashes(ie)));
        const Q = { prefix: ye, input: m, start: M, base: ie, glob: de, isBrace: F, isBracket: V, isGlob: U, isExtglob: Y, isGlobstar: te, negated: ue };
        if (P.tokens === !0 && (Q.maxDepth = 0, y(C) || D.push(X), Q.tokens = D), P.parts === !0 || P.tokens === !0) {
          let ce;
          for (let H = 0; H < z.length; H++) {
            const se = ce ? ce + 1 : M, he = z[H], q = m.slice(se, he);
            P.tokens && (H === 0 && M !== 0 ? (D[H].isPrefix = !0, D[H].value = ye) : D[H].value = q, w(D[H]), Q.maxDepth += D[H].depth), (H !== 0 || q !== "") && K.push(q), ce = he;
          }
          if (ce && ce + 1 < m.length) {
            const H = m.slice(ce + 1);
            K.push(H), P.tokens && (D[D.length - 1].value = H, w(D[D.length - 1]), Q.maxDepth += D[D.length - 1].depth);
          }
          Q.slashes = z, Q.parts = K;
        }
        return Q;
      };
      r.exports = I;
    }, 513: (r, o, n) => {
      const l = n(17), c = process.platform === "win32", { REGEX_BACKSLASH: h, REGEX_REMOVE_BACKSLASH: b, REGEX_SPECIAL_CHARS: x, REGEX_SPECIAL_CHARS_GLOBAL: _ } = n(356);
      o.isObject = (a) => a !== null && typeof a == "object" && !Array.isArray(a), o.hasRegexChars = (a) => x.test(a), o.isRegexChar = (a) => a.length === 1 && o.hasRegexChars(a), o.escapeRegex = (a) => a.replace(_, "\\$1"), o.toPosixSlashes = (a) => a.replace(h, "/"), o.removeBackslashes = (a) => a.replace(b, (d) => d === "\\" ? "" : d), o.supportsLookbehinds = () => {
        const a = process.version.slice(1).split(".").map(Number);
        return a.length === 3 && a[0] >= 9 || a[0] === 8 && a[1] >= 10;
      }, o.isWindows = (a) => a && typeof a.windows == "boolean" ? a.windows : c === !0 || l.sep === "\\", o.escapeLast = (a, d, p) => {
        const f = a.lastIndexOf(d, p);
        return f === -1 ? a : a[f - 1] === "\\" ? o.escapeLast(a, d, f - 1) : `${a.slice(0, f)}\\${a.slice(f)}`;
      }, o.removePrefix = (a, d = {}) => {
        let p = a;
        return p.startsWith("./") && (p = p.slice(2), d.prefix = "./"), p;
      }, o.wrapOutput = (a, d = {}, p = {}) => {
        const f = p.contains ? "" : "^", E = p.contains ? "" : "$";
        let N = `${f}(?:${a})${E}`;
        return d.negated === !0 && (N = `(?:^(?!${N}).*$)`), N;
      };
    }, 492: (r, o, n) => {
      /*!
       * to-regex-range <https://github.com/micromatch/to-regex-range>
       *
       * Copyright (c) 2015-present, Jon Schlinkert.
       * Released under the MIT License.
       */
      const l = n(357), c = (y, w, I) => {
        if (l(y) === !1)
          throw new TypeError("toRegexRange: expected the first argument to be a number");
        if (w === void 0 || y === w)
          return String(y);
        if (l(w) === !1)
          throw new TypeError("toRegexRange: expected the second argument to be a number.");
        let m = { relaxZeros: !0, ...I };
        typeof m.strictZeros == "boolean" && (m.relaxZeros = m.strictZeros === !1);
        let A = String(m.relaxZeros), P = String(m.shorthand), k = String(m.capture), S = String(m.wrap), z = y + ":" + w + "=" + A + P + k + S;
        if (c.cache.hasOwnProperty(z))
          return c.cache[z].result;
        let D = Math.min(y, w), K = Math.max(y, w);
        if (Math.abs(D - K) === 1) {
          let F = y + "|" + w;
          return m.capture ? `(${F})` : m.wrap === !1 ? F : `(?:${F})`;
        }
        let W = v(y) || v(w), G = { min: y, max: w, a: D, b: K }, M = [], Z = [];
        if (W && (G.isPadded = W, G.maxLen = String(G.max).length), D < 0) {
          let F = K < 0 ? Math.abs(K) : 1;
          Z = _(F, Math.abs(D), G, m), D = G.a = 0;
        }
        return K >= 0 && (M = _(D, K, G, m)), G.negatives = Z, G.positives = M, G.result = h(Z, M), m.capture === !0 ? G.result = `(${G.result})` : m.wrap !== !1 && M.length + Z.length > 1 && (G.result = `(?:${G.result})`), c.cache[z] = G, G.result;
      };
      function h(y, w, I) {
        let m = a(y, w, "-", !1) || [], A = a(w, y, "", !1) || [], P = a(y, w, "-?", !0) || [];
        return m.concat(P).concat(A).join("|");
      }
      function b(y, w) {
        let I = 1, m = 1, A = E(y, I), P = /* @__PURE__ */ new Set([w]);
        for (; y <= A && A <= w; )
          P.add(A), I += 1, A = E(y, I);
        for (A = N(w + 1, m) - 1; y < A && A <= w; )
          P.add(A), m += 1, A = N(w + 1, m) - 1;
        return P = [...P], P.sort(p), P;
      }
      function x(y, w, I) {
        if (y === w)
          return { pattern: y, count: [], digits: 0 };
        let m = d(y, w), A = m.length, P = "", k = 0;
        for (let S = 0; S < A; S++) {
          let [z, D] = m[S];
          z === D ? P += z : z !== "0" || D !== "9" ? P += R(z, D) : k++;
        }
        return k && (P += I.shorthand === !0 ? "\\d" : "[0-9]"), { pattern: P, count: [k], digits: A };
      }
      function _(y, w, I, m) {
        let A = b(y, w), P = [], k = y, S;
        for (let z = 0; z < A.length; z++) {
          let D = A[z], K = x(String(k), String(D), m), W = "";
          if (!I.isPadded && S && S.pattern === K.pattern) {
            S.count.length > 1 && S.count.pop(), S.count.push(K.count[0]), S.string = S.pattern + u(S.count), k = D + 1;
            continue;
          }
          I.isPadded && (W = O(D, I, m)), K.string = W + K.pattern + u(K.count), P.push(K), k = D + 1, S = K;
        }
        return P;
      }
      function a(y, w, I, m, A) {
        let P = [];
        for (let k of y) {
          let { string: S } = k;
          !m && !f(w, "string", S) && P.push(I + S), m && f(w, "string", S) && P.push(I + S);
        }
        return P;
      }
      function d(y, w) {
        let I = [];
        for (let m = 0; m < y.length; m++) I.push([y[m], w[m]]);
        return I;
      }
      function p(y, w) {
        return y > w ? 1 : w > y ? -1 : 0;
      }
      function f(y, w, I) {
        return y.some((m) => m[w] === I);
      }
      function E(y, w) {
        return Number(String(y).slice(0, -w) + "9".repeat(w));
      }
      function N(y, w) {
        return y - y % Math.pow(10, w);
      }
      function u(y) {
        let [w = 0, I = ""] = y;
        return I || w > 1 ? `{${w + (I ? "," + I : "")}}` : "";
      }
      function R(y, w, I) {
        return `[${y}${w - y === 1 ? "" : "-"}${w}]`;
      }
      function v(y) {
        return /^-?(0+)\d/.test(y);
      }
      function O(y, w, I) {
        if (!w.isPadded)
          return y;
        let m = Math.abs(w.maxLen - String(y).length), A = I.relaxZeros !== !1;
        switch (m) {
          case 0:
            return "";
          case 1:
            return A ? "0?" : "0";
          case 2:
            return A ? "0{0,2}" : "00";
          default:
            return A ? `0{0,${m}}` : `0{${m}}`;
        }
      }
      c.cache = {}, c.clearCache = () => c.cache = {}, r.exports = c;
    }, 17: (r) => {
      r.exports = Nt;
    }, 837: (r) => {
      r.exports = Nt;
    } }, e = {};
    function i(r) {
      var o = e[r];
      if (o !== void 0)
        return o.exports;
      var n = e[r] = { exports: {} }, l = !0;
      try {
        t[r](n, n.exports, i), l = !1;
      } finally {
        l && delete e[r];
      }
      return n.exports;
    }
    typeof i < "u" && (i.ab = __dirname + "/");
    var s = i(971);
    Ye.exports = s;
  })()), Ye.exports;
}
var Gt;
function Tn() {
  return Gt || (Gt = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function e(o, n) {
      for (var l in n) Object.defineProperty(o, l, {
        enumerable: !0,
        get: n[l]
      });
    }
    e(t, {
      matchRemotePattern: function() {
        return s;
      },
      hasMatch: function() {
        return r;
      }
    });
    const i = Pn();
    function s(o, n) {
      if (o.protocol !== void 0) {
        const c = n.protocol.slice(0, -1);
        if (o.protocol !== c)
          return !1;
      }
      if (o.port !== void 0 && o.port !== n.port)
        return !1;
      if (o.hostname === void 0)
        throw new Error(`Pattern should define hostname but found
` + JSON.stringify(o));
      if (!(0, i.makeRe)(o.hostname).test(n.hostname))
        return !1;
      var l;
      return !!(0, i.makeRe)((l = o.pathname) != null ? l : "**").test(n.pathname);
    }
    function r(o, n, l) {
      return o.some((c) => l.hostname === c) || n.some((c) => s(c, l));
    }
  }(Ze)), Ze;
}
var Ft;
function qr() {
  return Ft || (Ft = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "default", {
      enumerable: !0,
      get: function() {
        return i;
      }
    });
    function e(s) {
      let { config: r, src: o, width: n, quality: l } = s;
      if (process.env.NODE_ENV !== "production") {
        const c = [];
        if (o || c.push("src"), n || c.push("width"), c.length > 0)
          throw new Error("Next Image Optimization requires " + c.join(", ") + " to be provided. Make sure you pass them as props to the `next/image` component. Received: " + JSON.stringify({
            src: o,
            width: n,
            quality: l
          }));
        if (o.startsWith("//"))
          throw new Error('Failed to parse src "' + o + '" on `next/image`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)');
        if (!o.startsWith("/") && (r.domains || r.remotePatterns)) {
          let h;
          try {
            h = new URL(o);
          } catch (b) {
            throw console.error(b), new Error('Failed to parse src "' + o + '" on `next/image`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)');
          }
          if (process.env.NODE_ENV !== "test" && // micromatch isn't compatible with edge runtime
          process.env.NEXT_RUNTIME !== "edge") {
            const { hasMatch: b } = Tn();
            if (!b(r.domains, r.remotePatterns, h))
              throw new Error("Invalid src prop (" + o + ') on `next/image`, hostname "' + h.hostname + '" is not configured under images in your `next.config.js`\nSee more info: https://nextjs.org/docs/messages/next-image-unconfigured-host');
          }
        }
      }
      return r.path + "?url=" + encodeURIComponent(o) + "&w=" + n + "&q=" + (l || 75) + (process.env.NEXT_DEPLOYMENT_ID ? "&dpl=" + process.env.NEXT_DEPLOYMENT_ID : "");
    }
    e.__next_img_default = !0;
    const i = e;
  }(Qe)), Qe;
}
(function(t, e) {
  "use client";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "Image", {
    enumerable: !0,
    get: function() {
      return N;
    }
  });
  const i = ve, r = /* @__PURE__ */ we._(be), o = /* @__PURE__ */ i._(Vr), n = /* @__PURE__ */ i._(Nn()), l = kt, c = ze, h = An(), b = Ee, x = jr(), _ = /* @__PURE__ */ i._(qr()), a = process.env.__NEXT_IMAGE_OPTS;
  typeof window > "u" && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
  function d(u, R, v, O, y, w) {
    const I = u == null ? void 0 : u.src;
    if (!u || u["data-loaded-src"] === I)
      return;
    u["data-loaded-src"] = I, ("decode" in u ? u.decode() : Promise.resolve()).catch(() => {
    }).then(() => {
      if (!(!u.parentElement || !u.isConnected)) {
        if (R !== "empty" && y(!0), v != null && v.current) {
          const A = new Event("load");
          Object.defineProperty(A, "target", {
            writable: !1,
            value: u
          });
          let P = !1, k = !1;
          v.current({
            ...A,
            nativeEvent: A,
            currentTarget: u,
            target: u,
            isDefaultPrevented: () => P,
            isPropagationStopped: () => k,
            persist: () => {
            },
            preventDefault: () => {
              P = !0, A.preventDefault();
            },
            stopPropagation: () => {
              k = !0, A.stopPropagation();
            }
          });
        }
        if (O != null && O.current && O.current(u), process.env.NODE_ENV !== "production") {
          const A = new URL(I, "http://n").searchParams.get("url") || I;
          if (u.getAttribute("data-nimg") === "fill") {
            if (!w && (!u.getAttribute("sizes") || u.getAttribute("sizes") === "100vw") && u.getBoundingClientRect().width / window.innerWidth < 0.6 && (0, b.warnOnce)('Image with src "' + A + '" has "fill" but is missing "sizes" prop. Please add it to improve page performance. Read more: https://nextjs.org/docs/api-reference/next/image#sizes'), u.parentElement) {
              const { position: S } = window.getComputedStyle(u.parentElement), z = [
                "absolute",
                "fixed",
                "relative"
              ];
              z.includes(S) || (0, b.warnOnce)('Image with src "' + A + '" has "fill" and parent element with invalid "position". Provided "' + S + '" should be one of ' + z.map(String).join(",") + ".");
            }
            u.height === 0 && (0, b.warnOnce)('Image with src "' + A + '" has "fill" and a height value of 0. This is likely because the parent element of the image has not been styled to have a set height.');
          }
          const P = u.height.toString() !== u.getAttribute("height"), k = u.width.toString() !== u.getAttribute("width");
          (P && !k || !P && k) && (0, b.warnOnce)('Image with src "' + A + `" has either width or height modified, but not the other. If you use CSS to change the size of your image, also include the styles 'width: "auto"' or 'height: "auto"' to maintain the aspect ratio.`);
        }
      }
    });
  }
  function p(u) {
    const [R, v] = r.version.split(".", 2), O = parseInt(R, 10), y = parseInt(v, 10);
    return O > 18 || O === 18 && y >= 3 ? {
      fetchPriority: u
    } : {
      fetchpriority: u
    };
  }
  const f = /* @__PURE__ */ (0, r.forwardRef)((u, R) => {
    let { src: v, srcSet: O, sizes: y, height: w, width: I, decoding: m, className: A, style: P, fetchPriority: k, placeholder: S, loading: z, unoptimized: D, fill: K, onLoadRef: W, onLoadingCompleteRef: G, setBlurComplete: M, setShowAltText: Z, onLoad: F, onError: V, ...U } = u;
    return /* @__PURE__ */ r.default.createElement("img", {
      ...U,
      ...p(k),
      // It's intended to keep `loading` before `src` because React updates
      // props in order which causes Safari/Firefox to not lazy load properly.
      // See https://github.com/facebook/react/issues/25883
      loading: z,
      width: I,
      height: w,
      decoding: m,
      "data-nimg": K ? "fill" : "1",
      className: A,
      style: P,
      // It's intended to keep `src` the last attribute because React updates
      // attributes in order. If we keep `src` the first one, Safari will
      // immediately start to fetch `src`, before `sizes` and `srcSet` are even
      // updated by React. That causes multiple unnecessary requests if `srcSet`
      // and `sizes` are defined.
      // This bug cannot be reproduced in Chrome or Firefox.
      sizes: y,
      srcSet: O,
      src: v,
      ref: (0, r.useCallback)((Y) => {
        R && (typeof R == "function" ? R(Y) : typeof R == "object" && (R.current = Y)), Y && (V && (Y.src = Y.src), process.env.NODE_ENV !== "production" && (v || console.error('Image is missing required "src" property:', Y), Y.getAttribute("alt") === null && console.error('Image is missing required "alt" property. Please add Alternative Text to describe the image for screen readers and search engines.')), Y.complete && d(Y, S, W, G, M, D));
      }, [
        v,
        S,
        W,
        G,
        M,
        V,
        D,
        R
      ]),
      onLoad: (Y) => {
        const te = Y.currentTarget;
        d(te, S, W, G, M, D);
      },
      onError: (Y) => {
        Z(!0), S !== "empty" && M(!0), V && V(Y);
      }
    });
  });
  function E(u) {
    let { isAppRouter: R, imgAttributes: v } = u;
    const O = {
      as: "image",
      imageSrcSet: v.srcSet,
      imageSizes: v.sizes,
      crossOrigin: v.crossOrigin,
      referrerPolicy: v.referrerPolicy,
      ...p(v.fetchPriority)
    };
    return R && o.default.preload ? (o.default.preload(
      v.src,
      // @ts-expect-error TODO: upgrade to `@types/react-dom@18.3.x`
      O
    ), null) : /* @__PURE__ */ r.default.createElement(n.default, null, /* @__PURE__ */ r.default.createElement("link", {
      key: "__nimg-" + v.src + v.srcSet + v.sizes,
      rel: "preload",
      // Note how we omit the `href` attribute, as it would only be relevant
      // for browsers that do not support `imagesrcset`, and in those cases
      // it would cause the incorrect image to be preloaded.
      //
      // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
      href: v.srcSet ? void 0 : v.src,
      ...O
    }));
  }
  const N = /* @__PURE__ */ (0, r.forwardRef)((u, R) => {
    const O = !(0, r.useContext)(x.RouterContext), y = (0, r.useContext)(h.ImageConfigContext), w = (0, r.useMemo)(() => {
      const G = a || y || c.imageConfigDefault, M = [
        ...G.deviceSizes,
        ...G.imageSizes
      ].sort((F, V) => F - V), Z = G.deviceSizes.sort((F, V) => F - V);
      return {
        ...G,
        allSizes: M,
        deviceSizes: Z
      };
    }, [
      y
    ]), { onLoad: I, onLoadingComplete: m } = u, A = (0, r.useRef)(I);
    (0, r.useEffect)(() => {
      A.current = I;
    }, [
      I
    ]);
    const P = (0, r.useRef)(m);
    (0, r.useEffect)(() => {
      P.current = m;
    }, [
      m
    ]);
    const [k, S] = (0, r.useState)(!1), [z, D] = (0, r.useState)(!1), { props: K, meta: W } = (0, l.getImgProps)(u, {
      defaultLoader: _.default,
      imgConf: w,
      blurComplete: k,
      showAltText: z
    });
    return /* @__PURE__ */ r.default.createElement(r.default.Fragment, null, /* @__PURE__ */ r.default.createElement(f, {
      ...K,
      unoptimized: W.unoptimized,
      placeholder: W.placeholder,
      fill: W.fill,
      onLoadRef: A,
      onLoadingCompleteRef: P,
      setBlurComplete: S,
      setShowAltText: D,
      ref: R
    }), W.priority ? /* @__PURE__ */ r.default.createElement(E, {
      isAppRouter: O,
      imgAttributes: K
    }) : null);
  });
  (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), t.exports = e.default);
})(Ct, Ct.exports);
var Ln = Ct.exports;
(function(t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  function e(h, b) {
    for (var x in b) Object.defineProperty(h, x, {
      enumerable: !0,
      get: b[x]
    });
  }
  e(t, {
    unstable_getImgProps: function() {
      return l;
    },
    default: function() {
      return c;
    }
  });
  const i = ve, s = kt, r = Ee, o = Ln, n = /* @__PURE__ */ i._(qr()), l = (h) => {
    (0, r.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");
    const { props: b } = (0, s.getImgProps)(h, {
      defaultLoader: n.default,
      // This is replaced by webpack define plugin
      imgConf: process.env.__NEXT_IMAGE_OPTS
    });
    for (const [x, _] of Object.entries(b))
      _ === void 0 && delete b[x];
    return {
      props: b
    };
  }, c = o.Image;
})(Mr);
var In = Mr;
const kn = /* @__PURE__ */ kr(In), Mn = {
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
function wo({
  size: t = "md",
  src: e,
  icon: i = /* @__PURE__ */ g(qe, {}),
  className: s = "bg-accent-500"
}) {
  const r = Mn[t], o = [
    "rounded-full flex items-center justify-center",
    r.wrapper,
    s
  ].join(" ").trim();
  return /* @__PURE__ */ g("div", { className: o, children: e ? /* @__PURE__ */ g(kn, { src: e, alt: "avatar", layout: "fill", className: "rounded-full object-cover" }) : be.cloneElement(i, {
    size: r.iconSize,
    className: "text-white"
  }) });
}
const Wt = {
  accent: "bg-accent-500",
  green: "bg-green-500",
  red: "bg-red-500",
  yellow: "bg-yellow-500",
  gray: "bg-gray-500"
};
function Eo({ variant: t = "accent", children: e, className: i = "" }) {
  const r = [
    "px-3 py-1 text-xs font-medium text-white rounded-full",
    Wt[t] || Wt.accent,
    i
  ].join(" ").trim();
  return /* @__PURE__ */ g("span", { className: r, children: e });
}
function Co({ items: t = [] }) {
  return /* @__PURE__ */ g("nav", { className: "flex items-center space-x-2 text-sm", "aria-label": "Breadcrumb", children: t.map((e, i) => /* @__PURE__ */ j("div", { className: "flex items-center", children: [
    i > 0 && /* @__PURE__ */ g(Pt, { size: 16, className: "mx-2 text-gray-400" }),
    e.href ? /* @__PURE__ */ g(
      "a",
      {
        href: e.href,
        className: "text-accent-500 hover:text-accent-600 hover:underline",
        children: e.label
      }
    ) : /* @__PURE__ */ g("span", { className: "text-gray-600", children: e.label })
  ] }, i)) });
}
const je = be.forwardRef(
  ({
    children: t,
    variant: e = "primary",
    size: i = "medium",
    isLoading: s = !1,
    startContent: r,
    endContent: o,
    ...n
  }, l) => {
    const c = "btn-fluid", h = {
      primary: "",
      // Default style
      outline: "btn-outline",
      ghost: "btn-ghost"
    }, b = {
      small: "text-sm py-2 px-3",
      medium: "",
      // Default size
      large: "text-lg py-4 px-6"
    }, x = [
      c,
      h[e],
      b[i],
      n.className || ""
    ].join(" ").trim();
    return /* @__PURE__ */ j("button", { ref: l, className: x, disabled: s || n.disabled, ...n, children: [
      s && /* @__PURE__ */ g("div", { className: "animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" }),
      !s && r,
      t,
      !s && o
    ] });
  }
);
je.displayName = "Button";
function No({ label: t, checked: e, onChange: i, name: s }) {
  return /* @__PURE__ */ j("label", { className: "flex items-center space-x-3 cursor-pointer", children: [
    /* @__PURE__ */ j("div", { className: "relative", children: [
      /* @__PURE__ */ g(
        "input",
        {
          type: "checkbox",
          name: s,
          checked: e,
          onChange: i,
          className: "sr-only"
        }
      ),
      /* @__PURE__ */ g(
        "div",
        {
          className: `w-5 h-5 rounded border-2 glass-surface flex items-center justify-center transition-colors ${e ? "bg-accent-500 border-accent-500" : "border-gray-300"}`,
          children: e && /* @__PURE__ */ g(Lr, { size: 12, className: "text-white" })
        }
      )
    ] }),
    t && /* @__PURE__ */ g("span", { className: "text-sm", children: t })
  ] });
}
const Ao = ({ label: t, selected: e = !1, onClick: i, className: s = "" }) => {
  const l = `px-3 py-1 rounded-full text-sm border transition-colors cursor-pointer ${e ? "bg-accent-500 border-accent-500 text-white" : "bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200"} ${s}`;
  return /* @__PURE__ */ g(
    "button",
    {
      type: "button",
      className: l,
      onClick: i,
      children: t
    }
  );
};
function So({ title: t, children: e }) {
  const [i, s] = _e(!1);
  return /* @__PURE__ */ j("div", { className: "glass-surface rounded-lg overflow-hidden", children: [
    /* @__PURE__ */ j(
      "div",
      {
        className: "flex items-center justify-between p-4 cursor-pointer hover:bg-glass-light",
        onClick: () => s(!i),
        children: [
          /* @__PURE__ */ g("h4", { className: "font-medium", children: t }),
          /* @__PURE__ */ g(
            Ot,
            {
              size: 16,
              className: `transform transition-transform ${i ? "rotate-180" : ""}`
            }
          )
        ]
      }
    ),
    i && /* @__PURE__ */ g("div", { className: "px-4 pb-4 bg-gray-50", children: /* @__PURE__ */ g("div", { className: "pt-4 border-t border-gray-200", children: e }) })
  ] });
}
function Re({ icon: t, onClick: e, className: i = "" }) {
  return /* @__PURE__ */ g(
    "button",
    {
      onClick: e,
      className: `p-3 rounded-lg glass-surface hover:bg-accent-500 hover:text-white transition-colors ${i}`.trim(),
      children: t && /* @__PURE__ */ g(t, { size: 20 })
    }
  );
}
const Oo = ({ navContent: t, children: e }) => {
  const [i, s] = _e(!1);
  return /* @__PURE__ */ j("div", { className: "flex h-full", children: [
    /* @__PURE__ */ g(
      "div",
      {
        className: `glass-surface transition-all duration-300 border-r border-gray-200 dark:border-gray-700 ${i ? "w-20" : "w-64"}`,
        children: /* @__PURE__ */ j("div", { className: "p-4 flex flex-col h-full", children: [
          /* @__PURE__ */ g(
            Re,
            {
              onClick: () => s(!i),
              icon: i ? /* @__PURE__ */ g(ln, { size: 20 }) : /* @__PURE__ */ g(xe, { size: 20 }),
              "aria-label": "Toggle sidebar",
              className: "mb-4 self-end"
            }
          ),
          /* @__PURE__ */ g("div", { className: "flex-grow", children: t(i) })
        ] })
      }
    ),
    /* @__PURE__ */ g("div", { className: "flex-1 p-4", children: e })
  ] });
};
function Po({ size: t = "md", children: e }) {
  const i = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl"
  }, s = `
    ${i[t] || i.md}
    mx-auto 
    glass-surface 
    p-4 
    rounded 
    text-center
  `;
  return /* @__PURE__ */ g("div", { className: s.trim(), children: e });
}
function To({ children: t, items: e }) {
  const [i, s] = _e({ visible: !1, x: 0, y: 0 }), r = Et((n) => {
    n.preventDefault(), s({ visible: !0, x: n.pageX, y: n.pageY });
  }, []), o = Et(() => {
    i.visible && s((n) => ({ ...n, visible: !1 }));
  }, [i.visible]);
  return St(() => (document.addEventListener("click", o), () => {
    document.removeEventListener("click", o);
  }), [o]), /* @__PURE__ */ j("div", { onContextMenu: r, children: [
    t,
    i.visible && /* @__PURE__ */ g(
      "div",
      {
        className: "fixed glass-surface rounded-lg shadow-lg z-50 py-1",
        style: { top: i.y, left: i.x },
        children: e.map((n, l) => n.separator ? /* @__PURE__ */ g("hr", { className: "my-1 border-gray-200" }, `sep-${l}`) : /* @__PURE__ */ j(
          "button",
          {
            onClick: n.onClick,
            className: "flex items-center w-full px-4 py-2 text-sm hover:bg-glass-light transition-colors",
            children: [
              n.icon && /* @__PURE__ */ g("span", { className: "mr-2", children: n.icon }),
              n.label
            ]
          },
          n.label
        ))
      }
    )
  ] });
}
function Lo({ icon: t, name: e, email: i, role: s, status: r }) {
  const o = {
    Actif: "bg-green-100 text-green-700",
    Inactif: "bg-gray-100 text-gray-700"
  }, n = `
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
    ${o[r] || "bg-red-100 text-red-700"}
  `;
  return /* @__PURE__ */ j("div", { className: n.trim(), children: [
    /* @__PURE__ */ j("div", { className: "flex items-center gap-3 mb-3", children: [
      /* @__PURE__ */ g("div", { className: "w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center", children: t || /* @__PURE__ */ g(qe, { size: 20, className: "text-white" }) }),
      /* @__PURE__ */ j("div", { children: [
        /* @__PURE__ */ g("h4", { className: "font-medium", children: e }),
        /* @__PURE__ */ g("p", { className: "text-sm text-gray-600", children: i })
      ] })
    ] }),
    /* @__PURE__ */ j("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ g("span", { className: "text-sm text-gray-500", children: s }),
      /* @__PURE__ */ g("span", { className: l.trim(), children: r })
    ] })
  ] });
}
function Io({ isOpen: t, onClose: e, title: i, children: s }) {
  return t ? /* @__PURE__ */ j(Wr, { children: [
    /* @__PURE__ */ g(
      "div",
      {
        className: "fixed inset-0 bg-black bg-opacity-50 z-40",
        onClick: e
      }
    ),
    /* @__PURE__ */ g("div", { className: "fixed right-0 top-0 h-full w-80 glass-surface z-50 animate-slide-in", children: /* @__PURE__ */ j("div", { className: "p-6", children: [
      /* @__PURE__ */ j("div", { className: "flex justify-between items-center mb-6", children: [
        /* @__PURE__ */ g("h4", { className: "text-lg font-semibold", children: i }),
        /* @__PURE__ */ g(
          "button",
          {
            onClick: e,
            className: "p-2 hover:bg-glass-light rounded-lg transition-colors",
            children: /* @__PURE__ */ g(xe, { size: 20 })
          }
        )
      ] }),
      s
    ] }) })
  ] }) : null;
}
function ko({ trigger: t, items: e }) {
  const [i, s] = _e(!1), r = Kr(null), o = Et((l) => {
    r.current && !r.current.contains(l.target) && s(!1);
  }, []);
  St(() => (document.addEventListener("mousedown", o), () => {
    document.removeEventListener("mousedown", o);
  }), [o]);
  const n = (l) => {
    l && l(), s(!1);
  };
  return /* @__PURE__ */ j("div", { className: "relative inline-block", ref: r, children: [
    /* @__PURE__ */ g("div", { onClick: () => s(!i), children: t }),
    i && /* @__PURE__ */ g("div", { className: "absolute right-0 mt-2 w-48 glass-surface rounded-lg shadow-lg z-10", children: /* @__PURE__ */ g("div", { className: "py-1", children: e.map((l, c) => l.separator ? /* @__PURE__ */ g("hr", { className: "my-1 border-gray-200" }, `sep-${c}`) : /* @__PURE__ */ j(
      "button",
      {
        onClick: () => n(l.onClick),
        className: `flex items-center w-full px-4 py-2 text-sm transition-colors ${l.className || "hover:bg-glass-light"}`,
        children: [
          l.icon && /* @__PURE__ */ g("span", { className: "mr-2", children: l.icon }),
          l.label
        ]
      },
      l.label
    )) }) })
  ] });
}
function Mo({ icon: t, title: e, message: i, action: s }) {
  return /* @__PURE__ */ j("div", { className: "text-center py-12", children: [
    /* @__PURE__ */ g(t || Ir, { size: 48, className: "mx-auto text-gray-400 mb-4" }),
    /* @__PURE__ */ g("h4", { className: "text-lg font-medium text-gray-600 mb-2", children: e }),
    /* @__PURE__ */ g("p", { className: "text-gray-500 mb-4", children: i }),
    s && /* @__PURE__ */ j("button", { className: "btn-fluid", onClick: s.onClick, children: [
      s.icon || /* @__PURE__ */ g(cn, { size: 16 }),
      s.label
    ] })
  ] });
}
function Ho({ data: t }) {
  const [e, i] = _e({}), s = (r) => {
    i((o) => ({
      ...o,
      [r]: !o[r]
    }));
  };
  return !t || t.length === 0 ? null : /* @__PURE__ */ g("div", { className: "space-y-2", children: t.map((r) => /* @__PURE__ */ j(
    "div",
    {
      className: "border border-gray-200 rounded-lg overflow-hidden",
      children: [
        /* @__PURE__ */ j(
          "div",
          {
            className: "flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50",
            onClick: () => s(r.id),
            children: [
              /* @__PURE__ */ j("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ g("div", { className: "w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center", children: /* @__PURE__ */ g(qe, { size: 16, className: "text-white" }) }),
                /* @__PURE__ */ j("div", { children: [
                  /* @__PURE__ */ g("h4", { className: "font-medium", children: r.name }),
                  /* @__PURE__ */ g("p", { className: "text-sm text-gray-600", children: r.email })
                ] })
              ] }),
              /* @__PURE__ */ j("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ g(
                  "span",
                  {
                    className: `px-2 py-1 rounded-full text-xs ${r.status === "Actif" ? "bg-green-100 text-green-700" : r.status === "Inactif" ? "bg-gray-100 text-gray-700" : "bg-red-100 text-red-700"}`,
                    children: r.status
                  }
                ),
                e[r.id] ? /* @__PURE__ */ g(en, { size: 16 }) : /* @__PURE__ */ g(Ot, { size: 16 })
              ] })
            ]
          }
        ),
        e[r.id] && /* @__PURE__ */ g("div", { className: "px-4 pb-4 bg-gray-50", children: /* @__PURE__ */ j("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ j("div", { children: [
            /* @__PURE__ */ g("p", { className: "text-sm font-medium text-gray-600", children: "Rôle" }),
            /* @__PURE__ */ g("p", { className: "text-sm", children: r.role })
          ] }),
          /* @__PURE__ */ j("div", { children: [
            /* @__PURE__ */ g("p", { className: "text-sm font-medium text-gray-600", children: "Date d'inscription" }),
            /* @__PURE__ */ g("p", { className: "text-sm", children: r.date })
          ] }),
          /* @__PURE__ */ j("div", { children: [
            /* @__PURE__ */ g("p", { className: "text-sm font-medium text-gray-600", children: "Dernière connexion" }),
            /* @__PURE__ */ g("p", { className: "text-sm", children: "il y a 2 heures" })
          ] }),
          /* @__PURE__ */ j("div", { children: [
            /* @__PURE__ */ g("p", { className: "text-sm font-medium text-gray-600", children: "Permissions" }),
            /* @__PURE__ */ g("p", { className: "text-sm", children: "Lecture, Écriture" })
          ] })
        ] }) })
      ]
    },
    r.id
  )) });
}
function $o({ onFileSelect: t, label: e, acceptedTypes: i }) {
  return /* @__PURE__ */ j("div", { className: "border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-accent-500 transition-colors", children: [
    /* @__PURE__ */ g(yn, { size: 48, className: "mx-auto text-gray-400 mb-4" }),
    /* @__PURE__ */ g("p", { className: "text-gray-600 mb-2", children: e || "Glissez-déposez vos fichiers ici ou" }),
    /* @__PURE__ */ j("label", { className: "btn-fluid cursor-pointer", children: [
      "Parcourir les fichiers",
      /* @__PURE__ */ g("input", { type: "file", className: "hidden", onChange: (r) => {
        const o = r.target.files[0];
        o && t && t(o);
      } })
    ] }),
    i && /* @__PURE__ */ g("p", { className: "text-xs text-gray-500 mt-2", children: i })
  ] });
}
var At = { exports: {} }, Ae = { exports: {} }, Je = {}, Kt;
function zr() {
  return Kt || (Kt = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function e(n, l) {
      for (var c in l) Object.defineProperty(n, c, {
        enumerable: !0,
        get: l[c]
      });
    }
    e(t, {
      searchParamsToUrlQuery: function() {
        return i;
      },
      urlQueryToSearchParams: function() {
        return r;
      },
      assign: function() {
        return o;
      }
    });
    function i(n) {
      const l = {};
      return n.forEach((c, h) => {
        typeof l[h] > "u" ? l[h] = c : Array.isArray(l[h]) ? l[h].push(c) : l[h] = [
          l[h],
          c
        ];
      }), l;
    }
    function s(n) {
      return typeof n == "string" || typeof n == "number" && !isNaN(n) || typeof n == "boolean" ? String(n) : "";
    }
    function r(n) {
      const l = new URLSearchParams();
      return Object.entries(n).forEach((c) => {
        let [h, b] = c;
        Array.isArray(b) ? b.forEach((x) => l.append(h, s(x))) : l.set(h, s(b));
      }), l;
    }
    function o(n) {
      for (var l = arguments.length, c = new Array(l > 1 ? l - 1 : 0), h = 1; h < l; h++)
        c[h - 1] = arguments[h];
      return c.forEach((b) => {
        Array.from(b.keys()).forEach((x) => n.delete(x)), b.forEach((x, _) => n.append(_, x));
      }), n;
    }
  }(Je)), Je;
}
var et = {}, Vt;
function Dr() {
  return Vt || (Vt = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function e(c, h) {
      for (var b in h) Object.defineProperty(c, b, {
        enumerable: !0,
        get: h[b]
      });
    }
    e(t, {
      formatUrl: function() {
        return o;
      },
      urlObjectKeys: function() {
        return n;
      },
      formatWithValidation: function() {
        return l;
      }
    });
    const s = /* @__PURE__ */ we._(zr()), r = /https?|ftp|gopher|file/;
    function o(c) {
      let { auth: h, hostname: b } = c, x = c.protocol || "", _ = c.pathname || "", a = c.hash || "", d = c.query || "", p = !1;
      h = h ? encodeURIComponent(h).replace(/%3A/i, ":") + "@" : "", c.host ? p = h + c.host : b && (p = h + (~b.indexOf(":") ? "[" + b + "]" : b), c.port && (p += ":" + c.port)), d && typeof d == "object" && (d = String(s.urlQueryToSearchParams(d)));
      let f = c.search || d && "?" + d || "";
      return x && !x.endsWith(":") && (x += ":"), c.slashes || (!x || r.test(x)) && p !== !1 ? (p = "//" + (p || ""), _ && _[0] !== "/" && (_ = "/" + _)) : p || (p = ""), a && a[0] !== "#" && (a = "#" + a), f && f[0] !== "?" && (f = "?" + f), _ = _.replace(/[?#]/g, encodeURIComponent), f = f.replace("#", "%23"), "" + x + p + _ + f + a;
    }
    const n = [
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
    function l(c) {
      return process.env.NODE_ENV === "development" && c !== null && typeof c == "object" && Object.keys(c).forEach((h) => {
        n.includes(h) || console.warn("Unknown key passed via urlObject into url.format: " + h);
      }), o(c);
    }
  }(et)), et;
}
var tt = {}, Xt;
function Hn() {
  return Xt || (Xt = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "omit", {
      enumerable: !0,
      get: function() {
        return e;
      }
    });
    function e(i, s) {
      const r = {};
      return Object.keys(i).forEach((o) => {
        s.includes(o) || (r[o] = i[o]);
      }), r;
    }
  }(tt)), tt;
}
var rt = {}, Qt;
function De() {
  return Qt || (Qt = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function e(R, v) {
      for (var O in v) Object.defineProperty(R, O, {
        enumerable: !0,
        get: v[O]
      });
    }
    e(t, {
      WEB_VITALS: function() {
        return i;
      },
      execOnce: function() {
        return s;
      },
      isAbsoluteUrl: function() {
        return o;
      },
      getLocationOrigin: function() {
        return n;
      },
      getURL: function() {
        return l;
      },
      getDisplayName: function() {
        return c;
      },
      isResSent: function() {
        return h;
      },
      normalizeRepeatedSlashes: function() {
        return b;
      },
      loadGetInitialProps: function() {
        return x;
      },
      SP: function() {
        return _;
      },
      ST: function() {
        return a;
      },
      DecodeError: function() {
        return d;
      },
      NormalizeError: function() {
        return p;
      },
      PageNotFoundError: function() {
        return f;
      },
      MissingStaticPage: function() {
        return E;
      },
      MiddlewareNotFoundError: function() {
        return N;
      },
      stringifyError: function() {
        return u;
      }
    });
    const i = [
      "CLS",
      "FCP",
      "FID",
      "INP",
      "LCP",
      "TTFB"
    ];
    function s(R) {
      let v = !1, O;
      return function() {
        for (var y = arguments.length, w = new Array(y), I = 0; I < y; I++)
          w[I] = arguments[I];
        return v || (v = !0, O = R(...w)), O;
      };
    }
    const r = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/, o = (R) => r.test(R);
    function n() {
      const { protocol: R, hostname: v, port: O } = window.location;
      return R + "//" + v + (O ? ":" + O : "");
    }
    function l() {
      const { href: R } = window.location, v = n();
      return R.substring(v.length);
    }
    function c(R) {
      return typeof R == "string" ? R : R.displayName || R.name || "Unknown";
    }
    function h(R) {
      return R.finished || R.headersSent;
    }
    function b(R) {
      const v = R.split("?");
      return v[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (v[1] ? "?" + v.slice(1).join("?") : "");
    }
    async function x(R, v) {
      if (process.env.NODE_ENV !== "production") {
        var O;
        if ((O = R.prototype) != null && O.getInitialProps) {
          const I = '"' + c(R) + '.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.';
          throw new Error(I);
        }
      }
      const y = v.res || v.ctx && v.ctx.res;
      if (!R.getInitialProps)
        return v.ctx && v.Component ? {
          pageProps: await x(v.Component, v.ctx)
        } : {};
      const w = await R.getInitialProps(v);
      if (y && h(y))
        return w;
      if (!w) {
        const I = '"' + c(R) + '.getInitialProps()" should resolve to an object. But found "' + w + '" instead.';
        throw new Error(I);
      }
      return process.env.NODE_ENV !== "production" && Object.keys(w).length === 0 && !v.ctx && console.warn("" + c(R) + " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps"), w;
    }
    const _ = typeof performance < "u", a = _ && [
      "mark",
      "measure",
      "getEntriesByName"
    ].every((R) => typeof performance[R] == "function");
    class d extends Error {
    }
    class p extends Error {
    }
    class f extends Error {
      constructor(v) {
        super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = "Cannot find module for page: " + v;
      }
    }
    class E extends Error {
      constructor(v, O) {
        super(), this.message = "Failed to load static file for page: " + v + " " + O;
      }
    }
    class N extends Error {
      constructor() {
        super(), this.code = "ENOENT", this.message = "Cannot find the middleware module";
      }
    }
    function u(R) {
      return JSON.stringify({
        message: R.message,
        stack: R.stack
      });
    }
  }(rt)), rt;
}
var Se = { exports: {} }, nt = {}, Zt;
function Ur() {
  return Zt || (Zt = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "removeTrailingSlash", {
      enumerable: !0,
      get: function() {
        return e;
      }
    });
    function e(i) {
      return i.replace(/\/$/, "") || "/";
    }
  }(nt)), nt;
}
var ot = {}, Yt;
function Mt() {
  return Yt || (Yt = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "parsePath", {
      enumerable: !0,
      get: function() {
        return e;
      }
    });
    function e(i) {
      const s = i.indexOf("#"), r = i.indexOf("?"), o = r > -1 && (s < 0 || r < s);
      return o || s > -1 ? {
        pathname: i.substring(0, o ? r : s),
        query: o ? i.substring(r, s > -1 ? s : void 0) : "",
        hash: s > -1 ? i.slice(s) : ""
      } : {
        pathname: i,
        query: "",
        hash: ""
      };
    }
  }(ot)), ot;
}
var Jt;
function Ue() {
  return Jt || (Jt = 1, function(t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "normalizePathTrailingSlash", {
      enumerable: !0,
      get: function() {
        return r;
      }
    });
    const i = Ur(), s = Mt(), r = (o) => {
      if (!o.startsWith("/") || process.env.__NEXT_MANUAL_TRAILING_SLASH)
        return o;
      const { pathname: n, query: l, hash: c } = (0, s.parsePath)(o);
      return process.env.__NEXT_TRAILING_SLASH ? /\.[^/]+\/?$/.test(n) ? "" + (0, i.removeTrailingSlash)(n) + l + c : n.endsWith("/") ? "" + n + l + c : n + "/" + l + c : "" + (0, i.removeTrailingSlash)(n) + l + c;
    };
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), t.exports = e.default);
  }(Se, Se.exports)), Se.exports;
}
var it = {}, Oe = { exports: {} }, st = {}, er;
function Br() {
  return er || (er = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "pathHasPrefix", {
      enumerable: !0,
      get: function() {
        return i;
      }
    });
    const e = Mt();
    function i(s, r) {
      if (typeof s != "string")
        return !1;
      const { pathname: o } = (0, e.parsePath)(s);
      return o === r || o.startsWith(r + "/");
    }
  }(st)), st;
}
var tr;
function $n() {
  return tr || (tr = 1, function(t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "hasBasePath", {
      enumerable: !0,
      get: function() {
        return r;
      }
    });
    const i = Br(), s = process.env.__NEXT_ROUTER_BASEPATH || "";
    function r(o) {
      return (0, i.pathHasPrefix)(o, s);
    }
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), t.exports = e.default);
  }(Oe, Oe.exports)), Oe.exports;
}
var rr;
function Gr() {
  return rr || (rr = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "isLocalURL", {
      enumerable: !0,
      get: function() {
        return s;
      }
    });
    const e = De(), i = $n();
    function s(r) {
      if (!(0, e.isAbsoluteUrl)(r)) return !0;
      try {
        const o = (0, e.getLocationOrigin)(), n = new URL(r, o);
        return n.origin === o && (0, i.hasBasePath)(n.pathname);
      } catch {
        return !1;
      }
    }
  }(it)), it;
}
var at = {}, lt = {}, nr;
function jn() {
  return nr || (nr = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "getSortedRoutes", {
      enumerable: !0,
      get: function() {
        return i;
      }
    });
    class e {
      insert(r) {
        this._insert(r.split("/").filter(Boolean), [], !1);
      }
      smoosh() {
        return this._smoosh();
      }
      _smoosh(r) {
        r === void 0 && (r = "/");
        const o = [
          ...this.children.keys()
        ].sort();
        this.slugName !== null && o.splice(o.indexOf("[]"), 1), this.restSlugName !== null && o.splice(o.indexOf("[...]"), 1), this.optionalRestSlugName !== null && o.splice(o.indexOf("[[...]]"), 1);
        const n = o.map((l) => this.children.get(l)._smoosh("" + r + l + "/")).reduce((l, c) => [
          ...l,
          ...c
        ], []);
        if (this.slugName !== null && n.push(...this.children.get("[]")._smoosh(r + "[" + this.slugName + "]/")), !this.placeholder) {
          const l = r === "/" ? "/" : r.slice(0, -1);
          if (this.optionalRestSlugName != null)
            throw new Error('You cannot define a route with the same specificity as a optional catch-all route ("' + l + '" and "' + l + "[[..." + this.optionalRestSlugName + ']]").');
          n.unshift(l);
        }
        return this.restSlugName !== null && n.push(...this.children.get("[...]")._smoosh(r + "[..." + this.restSlugName + "]/")), this.optionalRestSlugName !== null && n.push(...this.children.get("[[...]]")._smoosh(r + "[[..." + this.optionalRestSlugName + "]]/")), n;
      }
      _insert(r, o, n) {
        if (r.length === 0) {
          this.placeholder = !1;
          return;
        }
        if (n)
          throw new Error("Catch-all must be the last part of the URL.");
        let l = r[0];
        if (l.startsWith("[") && l.endsWith("]")) {
          let b = function(x, _) {
            if (x !== null && x !== _)
              throw new Error("You cannot use different slug names for the same dynamic path ('" + x + "' !== '" + _ + "').");
            o.forEach((a) => {
              if (a === _)
                throw new Error('You cannot have the same slug name "' + _ + '" repeat within a single dynamic path');
              if (a.replace(/\W/g, "") === l.replace(/\W/g, ""))
                throw new Error('You cannot have the slug names "' + a + '" and "' + _ + '" differ only by non-word symbols within a single dynamic path');
            }), o.push(_);
          }, c = l.slice(1, -1), h = !1;
          if (c.startsWith("[") && c.endsWith("]") && (c = c.slice(1, -1), h = !0), c.startsWith("...") && (c = c.substring(3), n = !0), c.startsWith("[") || c.endsWith("]"))
            throw new Error("Segment names may not start or end with extra brackets ('" + c + "').");
          if (c.startsWith("."))
            throw new Error("Segment names may not start with erroneous periods ('" + c + "').");
          if (n)
            if (h) {
              if (this.restSlugName != null)
                throw new Error('You cannot use both an required and optional catch-all route at the same level ("[...' + this.restSlugName + ']" and "' + r[0] + '" ).');
              b(this.optionalRestSlugName, c), this.optionalRestSlugName = c, l = "[[...]]";
            } else {
              if (this.optionalRestSlugName != null)
                throw new Error('You cannot use both an optional and required catch-all route at the same level ("[[...' + this.optionalRestSlugName + ']]" and "' + r[0] + '").');
              b(this.restSlugName, c), this.restSlugName = c, l = "[...]";
            }
          else {
            if (h)
              throw new Error('Optional route parameters are not yet supported ("' + r[0] + '").');
            b(this.slugName, c), this.slugName = c, l = "[]";
          }
        }
        this.children.has(l) || this.children.set(l, new e()), this.children.get(l)._insert(r.slice(1), o, n);
      }
      constructor() {
        this.placeholder = !0, this.children = /* @__PURE__ */ new Map(), this.slugName = null, this.restSlugName = null, this.optionalRestSlugName = null;
      }
    }
    function i(s) {
      const r = new e();
      return s.forEach((o) => r.insert(o)), r.smoosh();
    }
  }(lt)), lt;
}
var ut = {}, or;
function qn() {
  return or || (or = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "isDynamicRoute", {
      enumerable: !0,
      get: function() {
        return i;
      }
    });
    const e = /\/\[[^/]+?\](?=\/|$)/;
    function i(s) {
      return e.test(s);
    }
  }(ut)), ut;
}
var ir;
function zn() {
  return ir || (ir = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function e(r, o) {
      for (var n in o) Object.defineProperty(r, n, {
        enumerable: !0,
        get: o[n]
      });
    }
    e(t, {
      getSortedRoutes: function() {
        return i.getSortedRoutes;
      },
      isDynamicRoute: function() {
        return s.isDynamicRoute;
      }
    });
    const i = jn(), s = qn();
  }(at)), at;
}
var ct = {}, ft = {}, sr;
function Dn() {
  return sr || (sr = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "getRouteMatcher", {
      enumerable: !0,
      get: function() {
        return i;
      }
    });
    const e = De();
    function i(s) {
      let { re: r, groups: o } = s;
      return (n) => {
        const l = r.exec(n);
        if (!l)
          return !1;
        const c = (b) => {
          try {
            return decodeURIComponent(b);
          } catch {
            throw new e.DecodeError("failed to decode param");
          }
        }, h = {};
        return Object.keys(o).forEach((b) => {
          const x = o[b], _ = l[x.pos];
          _ !== void 0 && (h[b] = ~_.indexOf("/") ? _.split("/").map((a) => c(a)) : x.repeat ? [
            c(_)
          ] : c(_));
        }), h;
      };
    }
  }(ft)), ft;
}
var dt = {}, pt = {}, ht = {}, mt = {}, ar;
function Un() {
  return ar || (ar = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "ensureLeadingSlash", {
      enumerable: !0,
      get: function() {
        return e;
      }
    });
    function e(i) {
      return i.startsWith("/") ? i : "/" + i;
    }
  }(mt)), mt;
}
var gt = {}, lr;
function Bn() {
  return lr || (lr = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "isGroupSegment", {
      enumerable: !0,
      get: function() {
        return e;
      }
    });
    function e(i) {
      return i[0] === "(" && i.endsWith(")");
    }
  }(gt)), gt;
}
var ur;
function Gn() {
  return ur || (ur = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function e(c, h) {
      for (var b in h) Object.defineProperty(c, b, {
        enumerable: !0,
        get: h[b]
      });
    }
    e(t, {
      normalizeAppPath: function() {
        return o;
      },
      normalizeRscURL: function() {
        return n;
      },
      normalizePostponedURL: function() {
        return l;
      }
    });
    const i = Un(), s = Bn(), r = Nt;
    function o(c) {
      return (0, i.ensureLeadingSlash)(c.split("/").reduce((h, b, x, _) => !b || (0, s.isGroupSegment)(b) || b[0] === "@" || (b === "page" || b === "route") && x === _.length - 1 ? h : h + "/" + b, ""));
    }
    function n(c) {
      return c.replace(
        /\.rsc($|\?)/,
        // $1 ensures `?` is preserved
        "$1"
      );
    }
    function l(c) {
      const h = (0, r.parse)(c);
      let { pathname: b } = h;
      return b && b.startsWith("/_next/postponed") ? (b = b.substring(16) || "/", (0, r.format)({
        ...h,
        pathname: b
      })) : c;
    }
  }(ht)), ht;
}
var cr;
function Fn() {
  return cr || (cr = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function e(n, l) {
      for (var c in l) Object.defineProperty(n, c, {
        enumerable: !0,
        get: l[c]
      });
    }
    e(t, {
      INTERCEPTION_ROUTE_MARKERS: function() {
        return s;
      },
      isInterceptionRouteAppPath: function() {
        return r;
      },
      extractInterceptionRouteInformation: function() {
        return o;
      }
    });
    const i = Gn(), s = [
      "(..)(..)",
      "(.)",
      "(..)",
      "(...)"
    ];
    function r(n) {
      return n.split("/").find((l) => s.find((c) => l.startsWith(c))) !== void 0;
    }
    function o(n) {
      let l, c, h;
      for (const b of n.split("/"))
        if (c = s.find((x) => b.startsWith(x)), c) {
          [l, h] = n.split(c, 2);
          break;
        }
      if (!l || !c || !h)
        throw new Error(`Invalid interception route: ${n}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`);
      switch (l = (0, i.normalizeAppPath)(l), c) {
        case "(.)":
          l === "/" ? h = `/${h}` : h = l + "/" + h;
          break;
        case "(..)":
          if (l === "/")
            throw new Error(`Invalid interception route: ${n}. Cannot use (..) marker at the root level, use (.) instead.`);
          h = l.split("/").slice(0, -1).concat(h).join("/");
          break;
        case "(...)":
          h = "/" + h;
          break;
        case "(..)(..)":
          const b = l.split("/");
          if (b.length <= 2)
            throw new Error(`Invalid interception route: ${n}. Cannot use (..)(..) marker at the root level or one level up.`);
          h = b.slice(0, -2).concat(h).join("/");
          break;
        default:
          throw new Error("Invariant: unexpected marker");
      }
      return {
        interceptingRoute: l,
        interceptedRoute: h
      };
    }
  }(pt)), pt;
}
var yt = {}, fr;
function Wn() {
  return fr || (fr = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "escapeStringRegexp", {
      enumerable: !0,
      get: function() {
        return s;
      }
    });
    const e = /[|\\{}()[\]^$+*?.-]/, i = /[|\\{}()[\]^$+*?.-]/g;
    function s(r) {
      return e.test(r) ? r.replace(i, "\\$&") : r;
    }
  }(yt)), yt;
}
var dr;
function Kn() {
  return dr || (dr = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function e(p, f) {
      for (var E in f) Object.defineProperty(p, E, {
        enumerable: !0,
        get: f[E]
      });
    }
    e(t, {
      getRouteRegex: function() {
        return h;
      },
      getNamedRouteRegex: function() {
        return a;
      },
      getNamedMiddlewareRegex: function() {
        return d;
      }
    });
    const i = Fn(), s = Wn(), r = Ur(), o = "nxtP", n = "nxtI";
    function l(p) {
      const f = p.startsWith("[") && p.endsWith("]");
      f && (p = p.slice(1, -1));
      const E = p.startsWith("...");
      return E && (p = p.slice(3)), {
        key: p,
        repeat: E,
        optional: f
      };
    }
    function c(p) {
      const f = (0, r.removeTrailingSlash)(p).slice(1).split("/"), E = {};
      let N = 1;
      return {
        parameterizedRoute: f.map((u) => {
          const R = i.INTERCEPTION_ROUTE_MARKERS.find((O) => u.startsWith(O)), v = u.match(/\[((?:\[.*\])|.+)\]/);
          if (R && v) {
            const { key: O, optional: y, repeat: w } = l(v[1]);
            return E[O] = {
              pos: N++,
              repeat: w,
              optional: y
            }, "/" + (0, s.escapeStringRegexp)(R) + "([^/]+?)";
          } else if (v) {
            const { key: O, repeat: y, optional: w } = l(v[1]);
            return E[O] = {
              pos: N++,
              repeat: y,
              optional: w
            }, y ? w ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)";
          } else
            return "/" + (0, s.escapeStringRegexp)(u);
        }).join(""),
        groups: E
      };
    }
    function h(p) {
      const { parameterizedRoute: f, groups: E } = c(p);
      return {
        re: new RegExp("^" + f + "(?:/)?$"),
        groups: E
      };
    }
    function b() {
      let p = 0;
      return () => {
        let f = "", E = ++p;
        for (; E > 0; )
          f += String.fromCharCode(97 + (E - 1) % 26), E = Math.floor((E - 1) / 26);
        return f;
      };
    }
    function x(p) {
      let { getSafeRouteKey: f, segment: E, routeKeys: N, keyPrefix: u } = p;
      const { key: R, optional: v, repeat: O } = l(E);
      let y = R.replace(/\W/g, "");
      u && (y = "" + u + y);
      let w = !1;
      return (y.length === 0 || y.length > 30) && (w = !0), isNaN(parseInt(y.slice(0, 1))) || (w = !0), w && (y = f()), u ? N[y] = "" + u + R : N[y] = "" + R, O ? v ? "(?:/(?<" + y + ">.+?))?" : "/(?<" + y + ">.+?)" : "/(?<" + y + ">[^/]+?)";
    }
    function _(p, f) {
      const E = (0, r.removeTrailingSlash)(p).slice(1).split("/"), N = b(), u = {};
      return {
        namedParameterizedRoute: E.map((R) => {
          const v = i.INTERCEPTION_ROUTE_MARKERS.some((y) => R.startsWith(y)), O = R.match(/\[((?:\[.*\])|.+)\]/);
          return v && O ? x({
            getSafeRouteKey: N,
            segment: O[1],
            routeKeys: u,
            keyPrefix: f ? n : void 0
          }) : O ? x({
            getSafeRouteKey: N,
            segment: O[1],
            routeKeys: u,
            keyPrefix: f ? o : void 0
          }) : "/" + (0, s.escapeStringRegexp)(R);
        }).join(""),
        routeKeys: u
      };
    }
    function a(p, f) {
      const E = _(p, f);
      return {
        ...h(p),
        namedRegex: "^" + E.namedParameterizedRoute + "(?:/)?$",
        routeKeys: E.routeKeys
      };
    }
    function d(p, f) {
      const { parameterizedRoute: E } = c(p), { catchAll: N = !0 } = f;
      if (E === "/")
        return {
          namedRegex: "^/" + (N ? ".*" : "") + "$"
        };
      const { namedParameterizedRoute: u } = _(p, !1);
      let R = N ? "(?:(/.*)?)" : "";
      return {
        namedRegex: "^" + u + R + "$"
      };
    }
  }(dt)), dt;
}
var pr;
function Vn() {
  return pr || (pr = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "interpolateAs", {
      enumerable: !0,
      get: function() {
        return s;
      }
    });
    const e = Dn(), i = Kn();
    function s(r, o, n) {
      let l = "";
      const c = (0, i.getRouteRegex)(r), h = c.groups, b = (
        // Try to match the dynamic route against the asPath
        (o !== r ? (0, e.getRouteMatcher)(c)(o) : "") || // Fall back to reading the values from the href
        // TODO: should this take priority; also need to change in the router.
        n
      );
      l = r;
      const x = Object.keys(h);
      return x.every((_) => {
        let a = b[_] || "";
        const { repeat: d, optional: p } = h[_];
        let f = "[" + (d ? "..." : "") + _ + "]";
        return p && (f = (a ? "" : "/") + "[" + f + "]"), d && !Array.isArray(a) && (a = [
          a
        ]), (p || _ in b) && // Interpolate group into data URL if present
        (l = l.replace(f, d ? a.map(
          // these values should be fully encoded instead of just
          // path delimiter escaped since they are being inserted
          // into the URL and we expect URL encoded segments
          // when parsing dynamic route params
          (E) => encodeURIComponent(E)
        ).join("/") : encodeURIComponent(a)) || "/");
      }) || (l = ""), {
        params: x,
        result: l
      };
    }
  }(ct)), ct;
}
var hr;
function Xn() {
  return hr || (hr = 1, function(t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "resolveHref", {
      enumerable: !0,
      get: function() {
        return b;
      }
    });
    const i = zr(), s = Dr(), r = Hn(), o = De(), n = Ue(), l = Gr(), c = zn(), h = Vn();
    function b(x, _, a) {
      let d, p = typeof _ == "string" ? _ : (0, s.formatWithValidation)(_);
      const f = p.match(/^[a-zA-Z]{1,}:\/\//), E = f ? p.slice(f[0].length) : p;
      if ((E.split("?", 1)[0] || "").match(/(\/\/|\\)/)) {
        console.error("Invalid href '" + p + "' passed to next/router in page: '" + x.pathname + "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");
        const u = (0, o.normalizeRepeatedSlashes)(E);
        p = (f ? f[0] : "") + u;
      }
      if (!(0, l.isLocalURL)(p))
        return a ? [
          p
        ] : p;
      try {
        d = new URL(p.startsWith("#") ? x.asPath : x.pathname, "http://n");
      } catch {
        d = new URL("/", "http://n");
      }
      try {
        const u = new URL(p, d);
        u.pathname = (0, n.normalizePathTrailingSlash)(u.pathname);
        let R = "";
        if ((0, c.isDynamicRoute)(u.pathname) && u.searchParams && a) {
          const O = (0, i.searchParamsToUrlQuery)(u.searchParams), { result: y, params: w } = (0, h.interpolateAs)(u.pathname, u.pathname, O);
          y && (R = (0, s.formatWithValidation)({
            pathname: y,
            hash: u.hash,
            query: (0, r.omit)(O, w)
          }));
        }
        const v = u.origin === d.origin ? u.href.slice(u.origin.length) : u.href;
        return a ? [
          v,
          R || v
        ] : v;
      } catch {
        return a ? [
          p
        ] : p;
      }
    }
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), t.exports = e.default);
  }(Ae, Ae.exports)), Ae.exports;
}
var Pe = { exports: {} }, bt = {}, vt = {}, mr;
function Fr() {
  return mr || (mr = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "addPathPrefix", {
      enumerable: !0,
      get: function() {
        return i;
      }
    });
    const e = Mt();
    function i(s, r) {
      if (!s.startsWith("/") || !r)
        return s;
      const { pathname: o, query: n, hash: l } = (0, e.parsePath)(s);
      return "" + r + o + n + l;
    }
  }(vt)), vt;
}
var gr;
function Qn() {
  return gr || (gr = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "addLocale", {
      enumerable: !0,
      get: function() {
        return s;
      }
    });
    const e = Fr(), i = Br();
    function s(r, o, n, l) {
      if (!o || o === n) return r;
      const c = r.toLowerCase();
      return !l && ((0, i.pathHasPrefix)(c, "/api") || (0, i.pathHasPrefix)(c, "/" + o.toLowerCase())) ? r : (0, e.addPathPrefix)(r, "/" + o);
    }
  }(bt)), bt;
}
var yr;
function Zn() {
  return yr || (yr = 1, function(t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "addLocale", {
      enumerable: !0,
      get: function() {
        return s;
      }
    });
    const i = Ue(), s = function(r) {
      for (var o = arguments.length, n = new Array(o > 1 ? o - 1 : 0), l = 1; l < o; l++)
        n[l - 1] = arguments[l];
      return process.env.__NEXT_I18N_SUPPORT ? (0, i.normalizePathTrailingSlash)(Qn().addLocale(r, ...n)) : r;
    };
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), t.exports = e.default);
  }(Pe, Pe.exports)), Pe.exports;
}
var _t = {}, br;
function Yn() {
  return br || (br = 1, function(t) {
    "use client";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function e(h, b) {
      for (var x in b) Object.defineProperty(h, x, {
        enumerable: !0,
        get: b[x]
      });
    }
    e(t, {
      CacheStates: function() {
        return r;
      },
      AppRouterContext: function() {
        return o;
      },
      LayoutRouterContext: function() {
        return n;
      },
      GlobalLayoutRouterContext: function() {
        return l;
      },
      TemplateContext: function() {
        return c;
      }
    });
    const s = /* @__PURE__ */ ve._(be);
    var r;
    (function(h) {
      h.LAZY_INITIALIZED = "LAZYINITIALIZED", h.DATA_FETCH = "DATAFETCH", h.READY = "READY";
    })(r || (r = {}));
    const o = s.default.createContext(null), n = s.default.createContext(null), l = s.default.createContext(null), c = s.default.createContext(null);
    process.env.NODE_ENV !== "production" && (o.displayName = "AppRouterContext", n.displayName = "LayoutRouterContext", l.displayName = "GlobalLayoutRouterContext", c.displayName = "TemplateContext");
  }(_t)), _t;
}
var Te = { exports: {} }, Le = { exports: {} }, vr;
function Jn() {
  return vr || (vr = 1, function(t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    function i(o, n) {
      for (var l in n) Object.defineProperty(o, l, {
        enumerable: !0,
        get: n[l]
      });
    }
    i(e, {
      requestIdleCallback: function() {
        return s;
      },
      cancelIdleCallback: function() {
        return r;
      }
    });
    const s = typeof self < "u" && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(o) {
      let n = Date.now();
      return self.setTimeout(function() {
        o({
          didTimeout: !1,
          timeRemaining: function() {
            return Math.max(0, 50 - (Date.now() - n));
          }
        });
      }, 1);
    }, r = typeof self < "u" && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(o) {
      return clearTimeout(o);
    };
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), t.exports = e.default);
  }(Le, Le.exports)), Le.exports;
}
var _r;
function eo() {
  return _r || (_r = 1, function(t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "useIntersection", {
      enumerable: !0,
      get: function() {
        return h;
      }
    });
    const i = be, s = Jn(), r = typeof IntersectionObserver == "function", o = /* @__PURE__ */ new Map(), n = [];
    function l(b) {
      const x = {
        root: b.root || null,
        margin: b.rootMargin || ""
      }, _ = n.find((f) => f.root === x.root && f.margin === x.margin);
      let a;
      if (_ && (a = o.get(_), a))
        return a;
      const d = /* @__PURE__ */ new Map(), p = new IntersectionObserver((f) => {
        f.forEach((E) => {
          const N = d.get(E.target), u = E.isIntersecting || E.intersectionRatio > 0;
          N && u && N(u);
        });
      }, b);
      return a = {
        id: x,
        observer: p,
        elements: d
      }, n.push(x), o.set(x, a), a;
    }
    function c(b, x, _) {
      const { id: a, observer: d, elements: p } = l(_);
      return p.set(b, x), d.observe(b), function() {
        if (p.delete(b), d.unobserve(b), p.size === 0) {
          d.disconnect(), o.delete(a);
          const E = n.findIndex((N) => N.root === a.root && N.margin === a.margin);
          E > -1 && n.splice(E, 1);
        }
      };
    }
    function h(b) {
      let { rootRef: x, rootMargin: _, disabled: a } = b;
      const d = a || !r, [p, f] = (0, i.useState)(!1), E = (0, i.useRef)(null), N = (0, i.useCallback)((R) => {
        E.current = R;
      }, []);
      (0, i.useEffect)(() => {
        if (r) {
          if (d || p) return;
          const R = E.current;
          if (R && R.tagName)
            return c(R, (O) => O && f(O), {
              root: x == null ? void 0 : x.current,
              rootMargin: _
            });
        } else if (!p) {
          const R = (0, s.requestIdleCallback)(() => f(!0));
          return () => (0, s.cancelIdleCallback)(R);
        }
      }, [
        d,
        _,
        x,
        p,
        E.current
      ]);
      const u = (0, i.useCallback)(() => {
        f(!1);
      }, []);
      return [
        N,
        p,
        u
      ];
    }
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), t.exports = e.default);
  }(Te, Te.exports)), Te.exports;
}
var Ie = { exports: {} }, ke = { exports: {} }, xt = {}, xr;
function to() {
  return xr || (xr = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "normalizeLocalePath", {
      enumerable: !0,
      get: function() {
        return e;
      }
    });
    function e(i, s) {
      let r;
      const o = i.split("/");
      return (s || []).some((n) => o[1] && o[1].toLowerCase() === n.toLowerCase() ? (r = n, o.splice(1, 1), i = o.join("/") || "/", !0) : !1), {
        pathname: i,
        detectedLocale: r
      };
    }
  }(xt)), xt;
}
var Rr;
function ro() {
  return Rr || (Rr = 1, function(t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "normalizeLocalePath", {
      enumerable: !0,
      get: function() {
        return i;
      }
    });
    const i = (s, r) => process.env.__NEXT_I18N_SUPPORT ? to().normalizeLocalePath(s, r) : {
      pathname: s,
      detectedLocale: void 0
    };
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), t.exports = e.default);
  }(ke, ke.exports)), ke.exports;
}
var Me = { exports: {} }, Rt = {}, wr;
function no() {
  return wr || (wr = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "detectDomainLocale", {
      enumerable: !0,
      get: function() {
        return e;
      }
    });
    function e(i, s, r) {
      if (i) {
        r && (r = r.toLowerCase());
        for (const l of i) {
          var o, n;
          const c = (o = l.domain) == null ? void 0 : o.split(":", 1)[0].toLowerCase();
          if (s === c || r === l.defaultLocale.toLowerCase() || (n = l.locales) != null && n.some((h) => h.toLowerCase() === r))
            return l;
        }
      }
    }
  }(Rt)), Rt;
}
var Er;
function oo() {
  return Er || (Er = 1, function(t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "detectDomainLocale", {
      enumerable: !0,
      get: function() {
        return i;
      }
    });
    const i = function() {
      for (var s = arguments.length, r = new Array(s), o = 0; o < s; o++)
        r[o] = arguments[o];
      if (process.env.__NEXT_I18N_SUPPORT)
        return no().detectDomainLocale(...r);
    };
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), t.exports = e.default);
  }(Me, Me.exports)), Me.exports;
}
var Cr;
function io() {
  return Cr || (Cr = 1, function(t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "getDomainLocale", {
      enumerable: !0,
      get: function() {
        return r;
      }
    });
    const i = Ue(), s = process.env.__NEXT_ROUTER_BASEPATH || "";
    function r(o, n, l, c) {
      if (process.env.__NEXT_I18N_SUPPORT) {
        const h = ro().normalizeLocalePath, b = oo().detectDomainLocale, x = n || h(o, l).detectedLocale, _ = b(c, void 0, x);
        if (_) {
          const a = "http" + (_.http ? "" : "s") + "://", d = x === _.defaultLocale ? "" : "/" + x;
          return "" + a + _.domain + (0, i.normalizePathTrailingSlash)("" + s + d + o);
        }
        return !1;
      } else
        return !1;
    }
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), t.exports = e.default);
  }(Ie, Ie.exports)), Ie.exports;
}
var He = { exports: {} }, Nr;
function so() {
  return Nr || (Nr = 1, function(t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "addBasePath", {
      enumerable: !0,
      get: function() {
        return o;
      }
    });
    const i = Fr(), s = Ue(), r = process.env.__NEXT_ROUTER_BASEPATH || "";
    function o(n, l) {
      return (0, s.normalizePathTrailingSlash)(process.env.__NEXT_MANUAL_CLIENT_BASE_PATH && !l ? n : (0, i.addPathPrefix)(n, r));
    }
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), t.exports = e.default);
  }(He, He.exports)), He.exports;
}
var $e = { exports: {} }, Ar;
function ao() {
  return Ar || (Ar = 1, function(t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    function i(x, _) {
      for (var a in _) Object.defineProperty(x, a, {
        enumerable: !0,
        get: _[a]
      });
    }
    i(e, {
      PrefetchKind: function() {
        return b;
      },
      ACTION_REFRESH: function() {
        return s;
      },
      ACTION_NAVIGATE: function() {
        return r;
      },
      ACTION_RESTORE: function() {
        return o;
      },
      ACTION_SERVER_PATCH: function() {
        return n;
      },
      ACTION_PREFETCH: function() {
        return l;
      },
      ACTION_FAST_REFRESH: function() {
        return c;
      },
      ACTION_SERVER_ACTION: function() {
        return h;
      }
    });
    const s = "refresh", r = "navigate", o = "restore", n = "server-patch", l = "prefetch", c = "fast-refresh", h = "server-action";
    var b;
    (function(x) {
      x.AUTO = "auto", x.FULL = "full", x.TEMPORARY = "temporary";
    })(b || (b = {})), (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), t.exports = e.default);
  }($e, $e.exports)), $e.exports;
}
(function(t, e) {
  "use client";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return v;
    }
  });
  const s = /* @__PURE__ */ ve._(be), r = Xn(), o = Gr(), n = Dr(), l = De(), c = Zn(), h = jr(), b = Yn(), x = eo(), _ = io(), a = so(), d = ao(), p = /* @__PURE__ */ new Set();
  function f(O, y, w, I, m, A) {
    if (typeof window > "u" || !A && !(0, o.isLocalURL)(y))
      return;
    if (!I.bypassPrefetchedCheck) {
      const k = (
        // Let the link's locale prop override the default router locale.
        typeof I.locale < "u" ? I.locale : "locale" in O ? O.locale : void 0
      ), S = y + "%" + w + "%" + k;
      if (p.has(S))
        return;
      p.add(S);
    }
    const P = A ? O.prefetch(y, m) : O.prefetch(y, w, I);
    Promise.resolve(P).catch((k) => {
      if (process.env.NODE_ENV !== "production")
        throw k;
    });
  }
  function E(O) {
    const w = O.currentTarget.getAttribute("target");
    return w && w !== "_self" || O.metaKey || O.ctrlKey || O.shiftKey || O.altKey || // triggers resource download
    O.nativeEvent && O.nativeEvent.which === 2;
  }
  function N(O, y, w, I, m, A, P, k, S, z) {
    const { nodeName: D } = O.currentTarget;
    if (D.toUpperCase() === "A" && (E(O) || // app-router supports external urls out of the box so it shouldn't short-circuit here as support for e.g. `replace` is added in the app-router.
    !S && !(0, o.isLocalURL)(w)))
      return;
    O.preventDefault();
    const W = () => {
      const G = P ?? !0;
      "beforePopState" in y ? y[m ? "replace" : "push"](w, I, {
        shallow: A,
        locale: k,
        scroll: G
      }) : y[m ? "replace" : "push"](I || w, {
        forceOptimisticNavigation: !z,
        scroll: G
      });
    };
    S ? s.default.startTransition(W) : W();
  }
  function u(O) {
    return typeof O == "string" ? O : (0, n.formatUrl)(O);
  }
  const v = /* @__PURE__ */ s.default.forwardRef(function(y, w) {
    let I;
    const { href: m, as: A, children: P, prefetch: k = null, passHref: S, replace: z, shallow: D, scroll: K, locale: W, onClick: G, onMouseEnter: M, onTouchStart: Z, legacyBehavior: F = !1, ...V } = y;
    I = P, F && (typeof I == "string" || typeof I == "number") && (I = /* @__PURE__ */ s.default.createElement("a", null, I));
    const U = s.default.useContext(h.RouterContext), Y = s.default.useContext(b.AppRouterContext), te = U ?? Y, J = !U, L = k !== !1, ue = k === null ? d.PrefetchKind.AUTO : d.PrefetchKind.FULL;
    if (process.env.NODE_ENV !== "production") {
      let Q = function(B) {
        return new Error("Failed prop type: The prop `" + B.key + "` expects a " + B.expected + " in `<Link>`, but got `" + B.actual + "` instead." + (typeof window < "u" ? `
Open your browser's console to view the Component stack trace.` : ""));
      };
      Object.keys({
        href: !0
      }).forEach((B) => {
        if (B === "href" && (y[B] == null || typeof y[B] != "string" && typeof y[B] != "object"))
          throw Q({
            key: B,
            expected: "`string` or `object`",
            actual: y[B] === null ? "null" : typeof y[B]
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
      }).forEach((B) => {
        const $ = typeof y[B];
        if (B === "as") {
          if (y[B] && $ !== "string" && $ !== "object")
            throw Q({
              key: B,
              expected: "`string` or `object`",
              actual: $
            });
        } else if (B === "locale") {
          if (y[B] && $ !== "string")
            throw Q({
              key: B,
              expected: "`string`",
              actual: $
            });
        } else if (B === "onClick" || B === "onMouseEnter" || B === "onTouchStart") {
          if (y[B] && $ !== "function")
            throw Q({
              key: B,
              expected: "`function`",
              actual: $
            });
        } else if ((B === "replace" || B === "scroll" || B === "shallow" || B === "passHref" || B === "prefetch" || B === "legacyBehavior") && y[B] != null && $ !== "boolean")
          throw Q({
            key: B,
            expected: "`boolean`",
            actual: $
          });
      });
      const q = s.default.useRef(!1);
      y.prefetch && !q.current && !J && (q.current = !0, console.warn("Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated"));
    }
    if (process.env.NODE_ENV !== "production" && J && !A) {
      let Q;
      if (typeof m == "string" ? Q = m : typeof m == "object" && typeof m.pathname == "string" && (Q = m.pathname), Q && Q.split("/").some((H) => H.startsWith("[") && H.endsWith("]")))
        throw new Error("Dynamic href `" + Q + "` found in <Link> while using the `/app` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href");
    }
    const { href: re, as: ee } = s.default.useMemo(() => {
      if (!U) {
        const H = u(m);
        return {
          href: H,
          as: A ? u(A) : H
        };
      }
      const [Q, ce] = (0, r.resolveHref)(U, m, !0);
      return {
        href: Q,
        as: A ? (0, r.resolveHref)(U, A) : ce || Q
      };
    }, [
      U,
      m,
      A
    ]), T = s.default.useRef(re), C = s.default.useRef(ee);
    let X;
    if (F)
      if (process.env.NODE_ENV === "development") {
        G && console.warn('"onClick" was passed to <Link> with `href` of `' + m + '` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link'), M && console.warn('"onMouseEnter" was passed to <Link> with `href` of `' + m + '` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link');
        try {
          X = s.default.Children.only(I);
        } catch {
          throw I ? new Error("Multiple children were passed to <Link> with `href` of `" + m + "` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children" + (typeof window < "u" ? ` 
Open your browser's console to view the Component stack trace.` : "")) : new Error("No children were passed to <Link> with `href` of `" + m + "` but one child is required https://nextjs.org/docs/messages/link-no-children");
        }
      } else
        X = s.default.Children.only(I);
    else if (process.env.NODE_ENV === "development" && (I == null ? void 0 : I.type) === "a")
      throw new Error(`Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.
Learn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor`);
    const oe = F ? X && typeof X == "object" && X.ref : w, [me, le, ie] = (0, x.useIntersection)({
      rootMargin: "200px"
    }), ye = s.default.useCallback((Q) => {
      (C.current !== ee || T.current !== re) && (ie(), C.current = ee, T.current = re), me(Q), oe && (typeof oe == "function" ? oe(Q) : typeof oe == "object" && (oe.current = Q));
    }, [
      ee,
      oe,
      re,
      ie,
      me
    ]);
    s.default.useEffect(() => {
      process.env.NODE_ENV === "production" && te && (!le || !L || f(te, re, ee, {
        locale: W
      }, {
        kind: ue
      }, J));
    }, [
      ee,
      re,
      le,
      W,
      L,
      U == null ? void 0 : U.locale,
      te,
      J,
      ue
    ]);
    const de = {
      ref: ye,
      onClick(Q) {
        if (process.env.NODE_ENV !== "production" && !Q)
          throw new Error('Component rendered inside next/link has to pass click event to "onClick" prop.');
        !F && typeof G == "function" && G(Q), F && X.props && typeof X.props.onClick == "function" && X.props.onClick(Q), te && (Q.defaultPrevented || N(Q, te, re, ee, z, D, K, W, J, L));
      },
      onMouseEnter(Q) {
        !F && typeof M == "function" && M(Q), F && X.props && typeof X.props.onMouseEnter == "function" && X.props.onMouseEnter(Q), te && ((!L || process.env.NODE_ENV === "development") && J || f(te, re, ee, {
          locale: W,
          priority: !0,
          // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
          bypassPrefetchedCheck: !0
        }, {
          kind: ue
        }, J));
      },
      onTouchStart(Q) {
        !F && typeof Z == "function" && Z(Q), F && X.props && typeof X.props.onTouchStart == "function" && X.props.onTouchStart(Q), te && (!L && J || f(te, re, ee, {
          locale: W,
          priority: !0,
          // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
          bypassPrefetchedCheck: !0
        }, {
          kind: ue
        }, J));
      }
    };
    if ((0, l.isAbsoluteUrl)(ee))
      de.href = ee;
    else if (!F || S || X.type === "a" && !("href" in X.props)) {
      const Q = typeof W < "u" ? W : U == null ? void 0 : U.locale, ce = (U == null ? void 0 : U.isLocaleDomain) && (0, _.getDomainLocale)(ee, Q, U == null ? void 0 : U.locales, U == null ? void 0 : U.domainLocales);
      de.href = ce || (0, a.addBasePath)((0, c.addLocale)(ee, Q, U == null ? void 0 : U.defaultLocale));
    }
    return F ? /* @__PURE__ */ s.default.cloneElement(X, de) : /* @__PURE__ */ s.default.createElement("a", {
      ...V,
      ...de
    }, I);
  });
  (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), t.exports = e.default);
})(At, At.exports);
var lo = At.exports, uo = lo;
const co = /* @__PURE__ */ kr(uo);
function fo({ href: t, variant: e = "standard", icon: i, children: s, className: r = "" }) {
  const o = "hover:underline", n = {
    standard: "text-accent-500 hover:text-accent-600",
    discreet: "text-gray-600 hover:text-gray-800",
    danger: "text-red-500 hover:text-red-600",
    icon: "flex items-center gap-2 p-2 rounded-lg hover:bg-glass-light transition-colors"
  }, l = [
    e === "icon" ? "" : o,
    n[e] || n.standard,
    r
  ].join(" ").trim();
  return /* @__PURE__ */ j(co, { href: t, className: l, children: [
    i && /* @__PURE__ */ g(i, { size: 16 }),
    s
  ] });
}
const po = ({ title: t, links: e }) => /* @__PURE__ */ j("div", { children: [
  /* @__PURE__ */ g("h4", { className: "font-medium mb-3", children: t }),
  /* @__PURE__ */ g("ul", { className: "space-y-2 text-sm", children: e.map((i) => /* @__PURE__ */ g("li", { children: /* @__PURE__ */ g(fo, { href: i.href, className: "text-gray-600 hover:text-gray-800", children: i.text }) }, i.text)) })
] }), ho = [
  {
    title: "Produit",
    links: [
      { text: "Fonctionnalités", href: "#" },
      { text: "Tarifs", href: "#" },
      { text: "Documentation", href: "#" }
    ]
  },
  {
    title: "Support",
    links: [
      { text: "Centre d'aide", href: "#" },
      { text: "Contact", href: "#" },
      { text: "Communauté", href: "#" }
    ]
  },
  {
    title: "Entreprise",
    links: [
      { text: "À propos", href: "#" },
      { text: "Carrières", href: "#" },
      { text: "Presse", href: "#" }
    ]
  },
  {
    title: "Légal",
    links: [
      { text: "Confidentialité", href: "#" },
      { text: "Conditions", href: "#" },
      { text: "Cookies", href: "#" }
    ]
  }
];
function jo() {
  return /* @__PURE__ */ j("section", { className: "glass-card", children: [
    /* @__PURE__ */ g("h3", { className: "text-xl font-semibold mb-6", children: "Pied de Page" }),
    /* @__PURE__ */ j("div", { className: "glass-surface p-6 rounded-lg", children: [
      /* @__PURE__ */ g("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-6", children: ho.map((t) => /* @__PURE__ */ g(po, { title: t.title, links: t.links }, t.title)) }),
      /* @__PURE__ */ j("div", { className: "mt-6 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center", children: [
        /* @__PURE__ */ g("p", { className: "text-sm text-gray-600", children: "© 2024 Fluid Glass Design. Tous droits réservés." }),
        /* @__PURE__ */ j("div", { className: "flex items-center gap-4 mt-4 sm:mt-0", children: [
          /* @__PURE__ */ g(Re, { children: /* @__PURE__ */ g(on, { size: 16 }) }),
          /* @__PURE__ */ g(Re, { children: /* @__PURE__ */ g(dn, { size: 16 }) }),
          /* @__PURE__ */ g(Re, { children: /* @__PURE__ */ g(an, { size: 16 }) })
        ] })
      ] })
    ] })
  ] });
}
const mo = be.forwardRef(
  ({ label: t, name: e, startIcon: i, endIcon: s, className: r, error: o, helperText: n, ...l }, c) => {
    const h = [
      "input-fluid",
      i ? "pl-10" : "",
      s ? "pr-10" : "",
      o ? "border-red-500" : "",
      r
    ].join(" ").trim();
    return /* @__PURE__ */ j("div", { children: [
      t && /* @__PURE__ */ g("label", { htmlFor: e, className: "block text-sm font-medium mb-2", children: t }),
      /* @__PURE__ */ j("div", { className: "relative", children: [
        i && /* @__PURE__ */ g("div", { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400", children: be.cloneElement(i, { size: 16 }) }),
        /* @__PURE__ */ g("input", { ref: c, id: e, name: e, className: h, ...l }),
        s && /* @__PURE__ */ g("div", { className: "absolute right-3 top-1/2 transform -translate-y-1/2", children: s })
      ] }),
      o && /* @__PURE__ */ g("p", { className: "text-red-500 text-sm mt-1 flex items-center gap-1", children: o }),
      n && !o && /* @__PURE__ */ g("p", { className: "text-sm text-gray-500 mt-1 flex items-center gap-1", children: n })
    ] });
  }
);
mo.displayName = "Input";
function qo({ isOpen: t, onClose: e, title: i, children: s }) {
  return t ? /* @__PURE__ */ g("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", onClick: e, children: /* @__PURE__ */ j("div", { className: "modal-fluid show w-full max-w-md", onClick: (r) => r.stopPropagation(), children: [
    /* @__PURE__ */ j("div", { className: "flex justify-between items-center mb-4", children: [
      /* @__PURE__ */ g("h4", { className: "text-lg font-semibold", children: i }),
      /* @__PURE__ */ g(Re, { icon: xe, onClick: e })
    ] }),
    /* @__PURE__ */ g("div", { children: s })
  ] }) }) : null;
}
function zo({ type: t = "info", message: e, timestamp: i, onClose: s }) {
  const r = {
    info: /* @__PURE__ */ g(It, { size: 20, className: "text-blue-500 mt-0.5" }),
    success: /* @__PURE__ */ g(Lt, { size: 20, className: "text-green-500 mt-0.5" }),
    warning: /* @__PURE__ */ g(Tt, { size: 20, className: "text-yellow-500 mt-0.5" }),
    error: /* @__PURE__ */ g(xe, { size: 20, className: "text-red-500 mt-0.5" })
  };
  return /* @__PURE__ */ g("div", { className: `max-w-sm w-full p-4 rounded-lg shadow-lg ${{
    info: "bg-blue-50 border border-blue-200",
    success: "bg-green-50 border border-green-200",
    warning: "bg-yellow-50 border border-yellow-200",
    error: "bg-red-50 border border-red-200"
  }[t]}`, children: /* @__PURE__ */ j("div", { className: "flex items-start gap-3", children: [
    r[t],
    /* @__PURE__ */ j("div", { className: "flex-1", children: [
      /* @__PURE__ */ g("p", { className: "text-sm font-medium", children: e }),
      i && /* @__PURE__ */ g("p", { className: "text-xs text-gray-500 mt-1", children: new Date(i).toLocaleTimeString() })
    ] }),
    /* @__PURE__ */ g("button", { onClick: s, className: "text-gray-400 hover:text-gray-600", children: /* @__PURE__ */ g(xe, { size: 16 }) })
  ] }) });
}
function Do({
  currentPage: t,
  totalPages: e,
  onPageChange: i,
  totalResults: s,
  resultsPerPage: r = 10
}) {
  const o = (t - 1) * r + 1, n = Math.min(t * r, s), l = (h) => {
    h >= 1 && h <= e && i(h);
  };
  return /* @__PURE__ */ j("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ j("p", { className: "text-sm text-gray-600", children: [
      "Affichage ",
      o,
      " à ",
      n,
      " sur ",
      s,
      " résultats"
    ] }),
    /* @__PURE__ */ j("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ g(
        "button",
        {
          onClick: () => l(t - 1),
          disabled: t === 1,
          className: "p-2 rounded-lg hover:bg-glass-light transition-colors disabled:opacity-50",
          children: /* @__PURE__ */ g(Jr, { size: 16 })
        }
      ),
      (() => {
        var b;
        const h = [];
        for (let x = 1; x <= e; x++)
          x === 1 || x === e || x >= t - 1 && x <= t + 1 ? h.push(
            /* @__PURE__ */ g(
              "button",
              {
                onClick: () => l(x),
                className: `px-3 py-1 rounded-lg text-sm transition-colors ${t === x ? "bg-accent-500 text-white" : "hover:bg-glass-light"}`,
                children: x
              },
              x
            )
          ) : ((b = h[h.length - 1]) == null ? void 0 : b.key) !== "..." && h.push(/* @__PURE__ */ g("span", { className: "px-3 py-1", children: "..." }, "..."));
        return h;
      })(),
      /* @__PURE__ */ g(
        "button",
        {
          onClick: () => l(t + 1),
          disabled: t === e,
          className: "p-2 rounded-lg hover:bg-glass-light transition-colors disabled:opacity-50",
          children: /* @__PURE__ */ g(Pt, { size: 16 })
        }
      )
    ] })
  ] });
}
function Uo({ value: t, label: e, showPercentage: i = !0 }) {
  const s = Math.max(0, Math.min(100, t));
  return /* @__PURE__ */ j("div", { children: [
    /* @__PURE__ */ j("div", { className: "flex justify-between mb-2", children: [
      e && /* @__PURE__ */ g("span", { className: "text-sm font-medium", children: e }),
      i && /* @__PURE__ */ j("span", { className: "text-sm text-gray-500", children: [
        s,
        "%"
      ] })
    ] }),
    /* @__PURE__ */ g(
      "div",
      {
        className: "progress-fluid",
        style: { "--progress-width": `${s}%` },
        role: "progressbar",
        "aria-valuenow": s,
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }
    )
  ] });
}
function Bo({ options: t, name: e, selectedValue: i, onChange: s }) {
  return /* @__PURE__ */ g("div", { className: "space-y-3", children: t.map((r) => /* @__PURE__ */ j("label", { className: "flex items-center space-x-3 cursor-pointer", children: [
    /* @__PURE__ */ j("div", { className: "relative", children: [
      /* @__PURE__ */ g(
        "input",
        {
          type: "radio",
          name: e,
          value: r.value,
          checked: i === r.value,
          onChange: (o) => s(o.target.value),
          className: "sr-only"
        }
      ),
      /* @__PURE__ */ g(
        "div",
        {
          className: `w-5 h-5 rounded-full border-2 glass-surface flex items-center justify-center transition-colors ${i === r.value ? "bg-accent-500 border-accent-500" : "border-gray-300"}`,
          children: i === r.value && /* @__PURE__ */ g("div", { className: "w-2 h-2 bg-white rounded-full" })
        }
      )
    ] }),
    /* @__PURE__ */ g("span", { className: "text-sm", children: r.label })
  ] }, r.value)) });
}
const Go = ({ title: t, children: e, variant: i = "default", className: s = "" }) => {
  const r = "glass-surface rounded-lg", o = {
    default: "p-6",
    highlighted: "p-8 border-2 border-accent-500",
    gradient: "p-4 bg-gradient-to-r from-blue-50 to-purple-50"
  }, n = [
    r,
    o[i] || o.default,
    s
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ j("div", { className: n, children: [
    t && /* @__PURE__ */ g("h4", { className: "font-medium mb-2", children: t }),
    /* @__PURE__ */ g("p", { className: "text-sm text-gray-600", children: e })
  ] });
};
function Fo({ item: t, isActive: e, onClick: i, onSubItemClick: s }) {
  const [r, o] = _e(!1), n = t.children && t.children.length > 0;
  return /* @__PURE__ */ j("div", { children: [
    /* @__PURE__ */ g(
      je,
      {
        variant: e ? "subtle" : "ghost",
        onClick: () => {
          n && o(!r), i(t.id);
        },
        startIcon: /* @__PURE__ */ g(t.icon, { size: 16 }),
        endIcon: n && /* @__PURE__ */ g(Pt, { size: 16, className: `transform transition-transform ${r ? "rotate-90" : ""}` }),
        className: "w-full justify-between",
        children: t.label
      }
    ),
    n && r && /* @__PURE__ */ g("div", { className: "ml-6 mt-1 space-y-1", children: t.children.map((c) => /* @__PURE__ */ g(
      je,
      {
        variant: "ghost",
        onClick: () => s(c.id),
        className: "w-full justify-start text-sm",
        children: c.label
      },
      c.id
    )) })
  ] });
}
function Wo({ count: t = 3 }) {
  return /* @__PURE__ */ g("div", { className: "space-y-4", children: Array.from({ length: t }).map((e, i) => /* @__PURE__ */ j(
    "div",
    {
      className: "flex items-center gap-4 p-4 glass-surface rounded-lg",
      children: [
        /* @__PURE__ */ g("div", { className: "w-12 h-12 bg-gray-200 rounded-full animate-pulse" }),
        /* @__PURE__ */ j("div", { className: "flex-1 space-y-2", children: [
          /* @__PURE__ */ g("div", { className: "h-4 bg-gray-200 rounded animate-pulse" }),
          /* @__PURE__ */ g("div", { className: "h-3 bg-gray-200 rounded w-2/3 animate-pulse" })
        ] })
      ]
    },
    i
  )) });
}
function Ko({ message: t, time: e, onDismiss: i }) {
  return /* @__PURE__ */ j("div", { className: "flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg", children: [
    /* @__PURE__ */ j("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ g(Yr, { size: 16, className: "text-blue-600" }),
      /* @__PURE__ */ j("div", { children: [
        /* @__PURE__ */ g("p", { className: "text-sm font-medium", children: t }),
        e && /* @__PURE__ */ j("p", { className: "text-xs text-gray-500", children: [
          "il y a ",
          e
        ] })
      ] })
    ] }),
    /* @__PURE__ */ g(
      "button",
      {
        onClick: i,
        className: "p-1 hover:bg-blue-100 rounded",
        children: /* @__PURE__ */ g(xe, { size: 16 })
      }
    )
  ] });
}
const Sr = {
  sm: "h-4 w-4",
  md: "h-8 w-8",
  lg: "h-12 w-12"
}, Or = {
  sm: "h-1.5 w-1.5",
  md: "h-2 w-2",
  lg: "h-3 w-3"
};
function Vo({ type: t = "spin", size: e = "md" }) {
  if (t === "dots") {
    const s = Or[e] || Or.md;
    return /* @__PURE__ */ j("div", { className: "flex space-x-1", children: [
      /* @__PURE__ */ g("div", { className: `${s} bg-accent-500 rounded-full animate-bounce` }),
      /* @__PURE__ */ g(
        "div",
        {
          className: `${s} bg-accent-500 rounded-full animate-bounce`,
          style: { animationDelay: "0.1s" }
        }
      ),
      /* @__PURE__ */ g(
        "div",
        {
          className: `${s} bg-accent-500 rounded-full animate-bounce`,
          style: { animationDelay: "0.2s" }
        }
      )
    ] });
  }
  const i = Sr[e] || Sr.md;
  return t === "pulse" ? /* @__PURE__ */ g("div", { className: `animate-pulse ${i} bg-accent-500 rounded-full` }) : /* @__PURE__ */ g(
    "div",
    {
      className: `animate-spin rounded-full ${i} border-4 border-accent-500 border-t-transparent`
    }
  );
}
const Xo = ({
  direction: t = "vertical",
  spacing: e = 4,
  children: i,
  className: s = "",
  as: r = "div",
  ...o
}) => {
  const n = "flex", l = t === "vertical" ? "flex-col" : "flex-row", c = `gap-${e}`, h = [
    n,
    l,
    c,
    s
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ g(r, { className: h, ...o, children: i });
};
function Qo({ title: t, value: e, change: i, trend: s }) {
  return /* @__PURE__ */ j("div", { className: "glass-surface p-4 rounded-lg", children: [
    /* @__PURE__ */ j("div", { className: "flex items-center justify-between mb-2", children: [
      /* @__PURE__ */ g("h4", { className: "text-sm font-medium text-gray-600", children: t }),
      s === "up" ? /* @__PURE__ */ g(gn, { size: 16, className: "text-green-500" }) : /* @__PURE__ */ g(mn, { size: 16, className: "text-red-500" })
    ] }),
    /* @__PURE__ */ g("p", { className: "text-2xl font-bold mb-1", children: e }),
    /* @__PURE__ */ j(
      "p",
      {
        className: `text-sm ${s === "up" ? "text-green-600" : "text-red-600"}`,
        children: [
          i,
          " ce mois"
        ]
      }
    )
  ] });
}
function Zo({ steps: t, currentStep: e }) {
  return /* @__PURE__ */ g("div", { className: "flex items-center", children: t.map((i, s) => /* @__PURE__ */ j("div", { className: "flex items-center", children: [
    /* @__PURE__ */ j("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ g(
        "div",
        {
          className: `flex items-center justify-center w-8 h-8 rounded-full border-2 transition-colors duration-300 ${e >= i.id ? "bg-accent-500 border-accent-500 text-white" : "border-gray-300 text-gray-400"}`,
          children: e > i.id ? /* @__PURE__ */ g(Lr, { size: 16 }) : i.id
        }
      ),
      /* @__PURE__ */ j("div", { className: "mt-2 text-center", children: [
        /* @__PURE__ */ g("div", { className: "text-sm font-medium", children: i.title }),
        /* @__PURE__ */ g("div", { className: "text-xs text-gray-500", children: i.description })
      ] })
    ] }),
    s < t.length - 1 && /* @__PURE__ */ g(
      "div",
      {
        className: `flex-1 h-0.5 mx-4 transition-colors duration-300 ${e > i.id ? "bg-accent-500" : "bg-gray-300"}`
      }
    )
  ] }, i.id)) });
}
function Yo({ tabs: t }) {
  var s;
  const [e, i] = _e(t && t.length > 0 ? t[0].id : null);
  return !t || t.length === 0 ? null : /* @__PURE__ */ j("div", { children: [
    /* @__PURE__ */ g("div", { className: "border-b border-gray-200 mb-4", children: /* @__PURE__ */ g("nav", { className: "flex space-x-8", children: t.map((r) => /* @__PURE__ */ g(
      "button",
      {
        onClick: () => i(r.id),
        className: `py-2 px-1 border-b-2 font-medium text-sm transition-colors ${e === r.id ? "border-accent-500 text-accent-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`,
        children: r.label
      },
      r.id
    )) }) }),
    /* @__PURE__ */ g("div", { className: "py-4", children: (s = t.find((r) => r.id === e)) == null ? void 0 : s.content })
  ] });
}
function Jo({ label: t, name: e, value: i, onChange: s, placeholder: r, maxLength: o, ...n }) {
  return /* @__PURE__ */ j("div", { children: [
    t && /* @__PURE__ */ g("label", { htmlFor: e, className: "block text-sm font-medium mb-2", children: t }),
    /* @__PURE__ */ g(
      "textarea",
      {
        id: e,
        name: e,
        value: i,
        onChange: s,
        placeholder: r,
        className: "input-fluid min-h-[120px] resize-y",
        maxLength: o,
        ...n
      }
    ),
    o && /* @__PURE__ */ j("p", { className: "text-sm text-gray-500 mt-1", children: [
      i.length,
      "/",
      o,
      " caractères"
    ] })
  ] });
}
function ei() {
  const [t, e] = _e("light");
  return St(() => {
    const s = localStorage.getItem("theme") || "light";
    e(s), s === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
  }, []), /* @__PURE__ */ j("div", { className: "flex items-center gap-4", children: [
    /* @__PURE__ */ j(
      je,
      {
        onClick: () => {
          const s = t === "light" ? "dark" : "light";
          e(s), localStorage.setItem("theme", s), s === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
        },
        startIcon: t === "light" ? /* @__PURE__ */ g(un, { size: 16 }) : /* @__PURE__ */ g(pn, { size: 16 }),
        children: [
          "Basculer vers ",
          t === "light" ? "sombre" : "clair"
        ]
      }
    ),
    /* @__PURE__ */ j("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ g(
        "div",
        {
          className: `w-6 h-6 rounded-full transition-colors ${t === "light" ? "bg-yellow-400" : "bg-blue-600"}`
        }
      ),
      /* @__PURE__ */ j("span", { className: "text-sm capitalize", children: [
        "Mode ",
        t
      ] })
    ] })
  ] });
}
const go = (t) => {
  switch (t) {
    case "user":
      return /* @__PURE__ */ g(qe, { size: 16, className: "text-white" });
    case "order":
      return /* @__PURE__ */ g(Ir, { size: 16, className: "text-white" });
    case "update":
      return /* @__PURE__ */ g(fn, { size: 16, className: "text-white" });
    case "delete":
      return /* @__PURE__ */ g(hn, { size: 16, className: "text-white" });
    default:
      return null;
  }
}, yo = (t) => {
  switch (t) {
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
function ti({ items: t }) {
  return !t || t.length === 0 ? null : /* @__PURE__ */ g("div", { className: "space-y-4", children: t.map((e) => /* @__PURE__ */ j("div", { className: "flex items-start gap-4", children: [
    /* @__PURE__ */ g(
      "div",
      {
        className: `w-8 h-8 rounded-full flex items-center justify-center ${yo(e.type)}`,
        children: go(e.type)
      }
    ),
    /* @__PURE__ */ j("div", { className: "flex-1", children: [
      /* @__PURE__ */ g("p", { className: "font-medium", children: e.title }),
      /* @__PURE__ */ j("p", { className: "text-sm text-gray-600", children: [
        "par ",
        e.user
      ] }),
      /* @__PURE__ */ j("p", { className: "text-xs text-gray-500 flex items-center gap-1", children: [
        /* @__PURE__ */ g(rn, { size: 12 }),
        "il y a ",
        e.time
      ] })
    ] })
  ] }, e.id)) });
}
function ri({ type: t = "info", message: e, onClose: i }) {
  const s = {
    info: /* @__PURE__ */ g(It, { size: 20, className: "text-blue-500 mt-0.5" }),
    success: /* @__PURE__ */ g(Lt, { size: 20, className: "text-green-500 mt-0.5" }),
    warning: /* @__PURE__ */ g(Tt, { size: 20, className: "text-yellow-500 mt-0.5" }),
    error: /* @__PURE__ */ g(xe, { size: 20, className: "text-red-500 mt-0.5" })
  };
  return /* @__PURE__ */ g("div", { className: `fixed bottom-5 right-5 max-w-sm w-full p-4 rounded-lg shadow-lg animate-slide-in-bottom ${{
    info: "bg-blue-50 border border-blue-200",
    success: "bg-green-50 border border-green-200",
    warning: "bg-yellow-50 border border-yellow-200",
    error: "bg-red-50 border border-red-200"
  }[t]}`, children: /* @__PURE__ */ j("div", { className: "flex items-start gap-3", children: [
    s[t],
    /* @__PURE__ */ g("div", { className: "flex-1", children: /* @__PURE__ */ g("p", { className: "text-sm font-medium", children: e }) }),
    /* @__PURE__ */ g("button", { onClick: i, className: "text-gray-400 hover:text-gray-600", children: /* @__PURE__ */ g(xe, { size: 16 }) })
  ] }) });
}
function ni({ label: t, checked: e, onChange: i }) {
  return /* @__PURE__ */ j("div", { className: "flex items-center justify-between", children: [
    t && /* @__PURE__ */ g("span", { className: "text-sm font-medium", children: t }),
    /* @__PURE__ */ g(
      "button",
      {
        onClick: i,
        className: `toggle-fluid ${e ? "active" : ""}`,
        children: /* @__PURE__ */ g("div", { className: "toggle-handle" })
      }
    )
  ] });
}
function oi({ view: t, setView: e }) {
  return /* @__PURE__ */ j("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ g(
      "button",
      {
        onClick: () => e("grid"),
        className: `p-2 rounded-lg transition-colors ${t === "grid" ? "bg-accent-500 text-white" : "hover:bg-glass-light"}`,
        children: /* @__PURE__ */ g(nn, { size: 16 })
      }
    ),
    /* @__PURE__ */ g(
      "button",
      {
        onClick: () => e("list"),
        className: `p-2 rounded-lg transition-colors ${t === "list" ? "bg-accent-500 text-white" : "hover:bg-glass-light"}`,
        children: /* @__PURE__ */ g(sn, { size: 16 })
      }
    )
  ] });
}
export {
  xo as Accordion,
  Ro as Alert,
  wo as Avatar,
  Eo as Badge,
  Co as Breadcrumb,
  je as Button,
  No as Checkbox,
  Ao as Chip,
  So as Collapsible,
  Oo as CollapsibleSidebar,
  Po as Container,
  To as ContextMenu,
  Lo as DataCard,
  Io as Drawer,
  ko as Dropdown,
  Mo as EmptyState,
  Ho as ExpandableTableComponent,
  $o as FileUploader,
  jo as Footer,
  Re as IconButton,
  mo as Input,
  fo as Link,
  qo as Modal,
  zo as Notification,
  Do as Pagination,
  Uo as ProgressBar,
  Bo as RadioGroup,
  Go as SectionBox,
  Fo as SidebarMenuItem,
  Wo as Skeleton,
  Ko as Snackbar,
  Vo as Spinner,
  Xo as StackComponent,
  Qo as StatCard,
  Zo as Stepper,
  Yo as Tabs,
  Jo as Textarea,
  ei as ThemeSwitcher,
  ti as TimelineComponent,
  ri as Toast,
  ni as Toggle,
  oi as ViewModeSwitch
};

"use client";
import { jsxs as u, jsx as o, Fragment as Bt } from "react/jsx-runtime";
import J, { forwardRef as Dt, createElement as Qe, useState as D, createContext as He, useCallback as de, useEffect as oe, useRef as ne, useContext as dt, useMemo as Ne } from "react";
import { usePress as $r } from "@react-aria/interactions";
import { createPortal as Mr } from "react-dom";
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sr = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ar = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (r, t, s) => s ? s.toUpperCase() : t.toLowerCase()
), xt = (e) => {
  const r = Ar(e);
  return r.charAt(0).toUpperCase() + r.slice(1);
}, Ot = (...e) => e.filter((r, t, s) => !!r && r.trim() !== "" && s.indexOf(r) === t).join(" ").trim(), Tr = (e) => {
  for (const r in e)
    if (r.startsWith("aria-") || r === "role" || r === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ir = {
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
const jr = Dt(
  ({
    color: e = "currentColor",
    size: r = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: s,
    className: n = "",
    children: a,
    iconNode: l,
    ...d
  }, i) => Qe(
    "svg",
    {
      ref: i,
      ...Ir,
      width: r,
      height: r,
      stroke: e,
      strokeWidth: s ? Number(t) * 24 / Number(r) : t,
      className: Ot("lucide", n),
      ...!a && !Tr(d) && { "aria-hidden": "true" },
      ...d
    },
    [
      ...l.map(([f, c]) => Qe(f, c)),
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
const H = (e, r) => {
  const t = Dt(
    ({ className: s, ...n }, a) => Qe(jr, {
      ref: a,
      iconNode: r,
      className: Ot(
        `lucide-${Sr(xt(e))}`,
        `lucide-${e}`,
        s
      ),
      ...n
    })
  );
  return t.displayName = xt(e), t;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rr = [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
], Er = H("arrow-up-down", Rr);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pr = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
], Ft = H("bell", Pr);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _r = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], ut = H("check", _r);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lr = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], ze = H("chevron-down", Lr);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gr = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Vr = H("chevron-left", Gr);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Br = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], mt = H("chevron-right", Br);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dr = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], Ut = H("chevron-up", Dr);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Or = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], Ce = H("circle-alert", Or);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fr = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], pt = H("circle-check-big", Fr);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ur = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
], Hr = H("circle-x", Ur);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qr = [
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], Wr = H("clock", qr);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zr = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
], Kr = H("download", Zr);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jr = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Xr = H("eye", Jr);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qr = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], Ye = H("file-text", Qr);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yr = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }]
], es = H("file", Yr);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ts = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
], rs = H("grid-3x3", ts);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ss = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
], qe = H("info", ss);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const os = [
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 18h.01", key: "1tta3j" }],
  ["path", { d: "M3 6h.01", key: "1rqtza" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 18h13", key: "1lx6n3" }],
  ["path", { d: "M8 6h13", key: "ik3vkj" }]
], ns = H("list", os);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const as = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], et = H("loader-circle", as);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ls = [
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 18h16", key: "19g7jn" }],
  ["path", { d: "M4 6h16", key: "1o0s65" }]
], Ht = H("menu", ls);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const is = [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
], yt = H("moon", is);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cs = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], ds = H("plus", cs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const us = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], Ue = H("search", us);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ms = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  [
    "path",
    {
      d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
      key: "ohrbg2"
    }
  ]
], ps = H("square-pen", ms);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fs = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
], vt = H("sun", fs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hs = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
], gs = H("trash-2", hs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bs = [
  ["path", { d: "M16 17h6v-6", key: "t6n2it" }],
  ["path", { d: "m22 17-8.5-8.5-5 5L2 7", key: "x473p" }]
], xs = H("trending-down", bs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ys = [
  ["path", { d: "M16 7h6v6", key: "box55l" }],
  ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
], vs = H("trending-up", ys);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ws = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
], qt = H("upload", ws);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ks = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], Wt = H("user", ks);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ns = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], ue = H("x", Ns);
function On({ title: e, children: r }) {
  const [t, s] = D(!1);
  return /* @__PURE__ */ u("div", { className: "glass-surface rounded-lg overflow-hidden border border-white/10", children: [
    /* @__PURE__ */ u(
      "button",
      {
        onClick: () => s(!t),
        className: "w-full flex justify-between items-center p-4 text-left font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500",
        "aria-expanded": t,
        children: [
          /* @__PURE__ */ o("span", { children: e }),
          /* @__PURE__ */ o(
            ze,
            {
              className: `transform transition-transform duration-300 ${t ? "rotate-180" : ""}`
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ o("div", { className: `transition-all duration-300 ease-in-out overflow-hidden ${t ? "max-h-screen" : "max-h-0"}`, children: /* @__PURE__ */ o("div", { className: "p-4 border-t border-white/10", children: r }) })
  ] });
}
const wt = {
  info: {
    icon: qe,
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    iconColor: "text-blue-600",
    titleColor: "text-blue-900",
    textColor: "text-blue-700"
  },
  success: {
    icon: pt,
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    iconColor: "text-green-600",
    titleColor: "text-green-900",
    textColor: "text-green-700"
  },
  warning: {
    icon: Ce,
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
    iconColor: "text-yellow-600",
    titleColor: "text-yellow-900",
    textColor: "text-yellow-700"
  },
  danger: {
    icon: Hr,
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    iconColor: "text-red-600",
    titleColor: "text-red-900",
    textColor: "text-red-700"
  }
};
function Fn({ variant: e = "info", title: r, children: t }) {
  const s = wt[e] ?? wt.info, n = s.icon;
  return /* @__PURE__ */ u(
    "div",
    {
      className: `flex items-center gap-3 p-4 border rounded-lg ${s.bgColor} ${s.borderColor}`,
      children: [
        /* @__PURE__ */ o(n, { size: 20, className: s.iconColor }),
        /* @__PURE__ */ u("div", { children: [
          r && /* @__PURE__ */ o("p", { className: `font-medium ${s.titleColor}`, children: r }),
          /* @__PURE__ */ o("p", { className: `text-sm ${s.textColor}`, children: t })
        ] })
      ]
    }
  );
}
const Cs = {
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
function Ge({
  size: e = "md",
  src: r,
  icon: t = /* @__PURE__ */ o(Wt, {}),
  className: s = "bg-accent-500"
}) {
  const n = Cs[e], a = [
    "rounded-full flex items-center justify-center",
    n.wrapper,
    s
  ].join(" ").trim();
  return /* @__PURE__ */ o("div", { className: a, children: r ? /* @__PURE__ */ o(
    "img",
    {
      src: r,
      alt: "avatar",
      className: "w-full h-full rounded-full object-cover",
      onError: (l) => {
        l.target.style.display = "none";
      }
    }
  ) : J.cloneElement(t, {
    size: n.iconSize,
    className: "text-white"
  }) });
}
const kt = {
  accent: "bg-accent-500",
  green: "bg-green-500",
  red: "bg-red-500",
  yellow: "bg-yellow-500",
  gray: "bg-gray-500"
};
function Nt({ variant: e = "accent", children: r, className: t = "" }) {
  const n = [
    "px-3 py-1 text-xs font-medium text-white rounded-full",
    kt[e] || kt.accent,
    t
  ].join(" ").trim();
  return /* @__PURE__ */ o("span", { className: n, children: r });
}
const Zt = ({
  href: e,
  variant: r = "standard",
  icon: t,
  children: s,
  className: n = "",
  ...a
}) => {
  const l = "hover:underline", d = {
    standard: "text-accent-500 hover:text-accent-600",
    discreet: "text-gray-600 hover:text-gray-800",
    danger: "text-red-500 hover:text-red-600",
    icon: "flex items-center gap-2 p-2 rounded-lg hover:bg-glass-light transition-colors"
  }, i = [
    r === "icon" ? "" : l,
    d[r] || d.standard,
    n
  ].join(" ").trim(), f = (e == null ? void 0 : e.startsWith("http")) || (e == null ? void 0 : e.startsWith("mailto:")) || (e == null ? void 0 : e.startsWith("tel:"));
  if (typeof window < "u" && window.next && window.next.Link) {
    const c = window.next.Link;
    return /* @__PURE__ */ u(c, { href: e, className: i, ...a, children: [
      t,
      s
    ] });
  }
  return /* @__PURE__ */ u(
    "a",
    {
      href: e,
      className: i,
      target: f ? "_blank" : void 0,
      rel: f ? "noopener noreferrer" : void 0,
      ...a,
      children: [
        t,
        s
      ]
    }
  );
};
function Un({ items: e = [] }) {
  return /* @__PURE__ */ o("nav", { className: "flex items-center space-x-2 text-sm", "aria-label": "Breadcrumb", children: e.map((r, t) => /* @__PURE__ */ u("div", { className: "flex items-center", children: [
    t > 0 && /* @__PURE__ */ o(mt, { size: 16, className: "mx-2 text-gray-400" }),
    r.href ? /* @__PURE__ */ o(Zt, { href: r.href, children: r.label }) : /* @__PURE__ */ o("span", { className: "text-gray-600", children: r.label })
  ] }, t)) });
}
const zs = {
  primary: "",
  // Default style
  outline: "btn-outline",
  ghost: "btn-ghost"
}, $s = {
  small: "text-sm py-2 px-3",
  medium: "",
  // Default size
  large: "text-lg py-4 px-6"
}, ve = J.forwardRef(
  ({
    children: e,
    variant: r = "primary",
    size: t = "medium",
    loading: s = !1,
    // API unifiée sur 'loading' uniquement
    startIcon: n,
    endIcon: a,
    disabled: l = !1,
    className: d = "",
    ...i
  }, f) => {
    const g = [
      "btn-fluid",
      zs[r],
      $s[t],
      d
    ].filter(Boolean).join(" ").trim();
    return /* @__PURE__ */ u(
      "button",
      {
        ref: f,
        className: g,
        disabled: s || l,
        "aria-label": s ? "Chargement en cours..." : void 0,
        ...i,
        children: [
          s && /* @__PURE__ */ o(
            "span",
            {
              className: "animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent",
              "aria-hidden": "true"
            }
          ),
          !s && n && /* @__PURE__ */ o("span", { className: "btn-icon", "aria-hidden": "true", children: n }),
          /* @__PURE__ */ o("span", { children: e }),
          !s && a && /* @__PURE__ */ o("span", { className: "btn-icon", "aria-hidden": "true", children: a })
        ]
      }
    );
  }
);
ve.displayName = "Button";
const ft = "-", Ms = (e) => {
  const r = As(e), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: s
  } = e;
  return {
    getClassGroupId: (l) => {
      const d = l.split(ft);
      return d[0] === "" && d.length !== 1 && d.shift(), Kt(d, r) || Ss(l);
    },
    getConflictingClassGroupIds: (l, d) => {
      const i = t[l] || [];
      return d && s[l] ? [...i, ...s[l]] : i;
    }
  };
}, Kt = (e, r) => {
  var l;
  if (e.length === 0)
    return r.classGroupId;
  const t = e[0], s = r.nextPart.get(t), n = s ? Kt(e.slice(1), s) : void 0;
  if (n)
    return n;
  if (r.validators.length === 0)
    return;
  const a = e.join(ft);
  return (l = r.validators.find(({
    validator: d
  }) => d(a))) == null ? void 0 : l.classGroupId;
}, Ct = /^\[(.+)\]$/, Ss = (e) => {
  if (Ct.test(e)) {
    const r = Ct.exec(e)[1], t = r == null ? void 0 : r.substring(0, r.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}, As = (e) => {
  const {
    theme: r,
    classGroups: t
  } = e, s = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const n in t)
    tt(t[n], s, n, r);
  return s;
}, tt = (e, r, t, s) => {
  e.forEach((n) => {
    if (typeof n == "string") {
      const a = n === "" ? r : zt(r, n);
      a.classGroupId = t;
      return;
    }
    if (typeof n == "function") {
      if (Ts(n)) {
        tt(n(s), r, t, s);
        return;
      }
      r.validators.push({
        validator: n,
        classGroupId: t
      });
      return;
    }
    Object.entries(n).forEach(([a, l]) => {
      tt(l, zt(r, a), t, s);
    });
  });
}, zt = (e, r) => {
  let t = e;
  return r.split(ft).forEach((s) => {
    t.nextPart.has(s) || t.nextPart.set(s, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(s);
  }), t;
}, Ts = (e) => e.isThemeGetter, Is = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let r = 0, t = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
  const n = (a, l) => {
    t.set(a, l), r++, r > e && (r = 0, s = t, t = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let l = t.get(a);
      if (l !== void 0)
        return l;
      if ((l = s.get(a)) !== void 0)
        return n(a, l), l;
    },
    set(a, l) {
      t.has(a) ? t.set(a, l) : n(a, l);
    }
  };
}, rt = "!", st = ":", js = st.length, Rs = (e) => {
  const {
    prefix: r,
    experimentalParseClassName: t
  } = e;
  let s = (n) => {
    const a = [];
    let l = 0, d = 0, i = 0, f;
    for (let x = 0; x < n.length; x++) {
      let I = n[x];
      if (l === 0 && d === 0) {
        if (I === st) {
          a.push(n.slice(i, x)), i = x + js;
          continue;
        }
        if (I === "/") {
          f = x;
          continue;
        }
      }
      I === "[" ? l++ : I === "]" ? l-- : I === "(" ? d++ : I === ")" && d--;
    }
    const c = a.length === 0 ? n : n.substring(i), g = Es(c), $ = g !== c, w = f && f > i ? f - i : void 0;
    return {
      modifiers: a,
      hasImportantModifier: $,
      baseClassName: g,
      maybePostfixModifierPosition: w
    };
  };
  if (r) {
    const n = r + st, a = s;
    s = (l) => l.startsWith(n) ? a(l.substring(n.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: l,
      maybePostfixModifierPosition: void 0
    };
  }
  if (t) {
    const n = s;
    s = (a) => t({
      className: a,
      parseClassName: n
    });
  }
  return s;
}, Es = (e) => e.endsWith(rt) ? e.substring(0, e.length - 1) : e.startsWith(rt) ? e.substring(1) : e, Ps = (e) => {
  const r = Object.fromEntries(e.orderSensitiveModifiers.map((s) => [s, !0]));
  return (s) => {
    if (s.length <= 1)
      return s;
    const n = [];
    let a = [];
    return s.forEach((l) => {
      l[0] === "[" || r[l] ? (n.push(...a.sort(), l), a = []) : a.push(l);
    }), n.push(...a.sort()), n;
  };
}, _s = (e) => ({
  cache: Is(e.cacheSize),
  parseClassName: Rs(e),
  sortModifiers: Ps(e),
  ...Ms(e)
}), Ls = /\s+/, Gs = (e, r) => {
  const {
    parseClassName: t,
    getClassGroupId: s,
    getConflictingClassGroupIds: n,
    sortModifiers: a
  } = r, l = [], d = e.trim().split(Ls);
  let i = "";
  for (let f = d.length - 1; f >= 0; f -= 1) {
    const c = d[f], {
      isExternal: g,
      modifiers: $,
      hasImportantModifier: w,
      baseClassName: x,
      maybePostfixModifierPosition: I
    } = t(c);
    if (g) {
      i = c + (i.length > 0 ? " " + i : i);
      continue;
    }
    let j = !!I, E = s(j ? x.substring(0, I) : x);
    if (!E) {
      if (!j) {
        i = c + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (E = s(x), !E) {
        i = c + (i.length > 0 ? " " + i : i);
        continue;
      }
      j = !1;
    }
    const P = a($).join(":"), F = w ? P + rt : P, B = F + E;
    if (l.includes(B))
      continue;
    l.push(B);
    const U = n(E, j);
    for (let p = 0; p < U.length; ++p) {
      const L = U[p];
      l.push(F + L);
    }
    i = c + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function Vs() {
  let e = 0, r, t, s = "";
  for (; e < arguments.length; )
    (r = arguments[e++]) && (t = Jt(r)) && (s && (s += " "), s += t);
  return s;
}
const Jt = (e) => {
  if (typeof e == "string")
    return e;
  let r, t = "";
  for (let s = 0; s < e.length; s++)
    e[s] && (r = Jt(e[s])) && (t && (t += " "), t += r);
  return t;
};
function Bs(e, ...r) {
  let t, s, n, a = l;
  function l(i) {
    const f = r.reduce((c, g) => g(c), e());
    return t = _s(f), s = t.cache.get, n = t.cache.set, a = d, d(i);
  }
  function d(i) {
    const f = s(i);
    if (f)
      return f;
    const c = Gs(i, t);
    return n(i, c), c;
  }
  return function() {
    return a(Vs.apply(null, arguments));
  };
}
const Q = (e) => {
  const r = (t) => t[e] || [];
  return r.isThemeGetter = !0, r;
}, Xt = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Qt = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Ds = /^\d+\/\d+$/, Os = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Fs = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Us = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Hs = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, qs = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, we = (e) => Ds.test(e), V = (e) => !!e && !Number.isNaN(Number(e)), pe = (e) => !!e && Number.isInteger(Number(e)), Ze = (e) => e.endsWith("%") && V(e.slice(0, -1)), le = (e) => Os.test(e), Ws = () => !0, Zs = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Fs.test(e) && !Us.test(e)
), Yt = () => !1, Ks = (e) => Hs.test(e), Js = (e) => qs.test(e), Xs = (e) => !C(e) && !z(e), Qs = (e) => $e(e, rr, Yt), C = (e) => Xt.test(e), ge = (e) => $e(e, sr, Zs), Ke = (e) => $e(e, so, V), $t = (e) => $e(e, er, Yt), Ys = (e) => $e(e, tr, Js), Ve = (e) => $e(e, or, Ks), z = (e) => Qt.test(e), Ie = (e) => Me(e, sr), eo = (e) => Me(e, oo), Mt = (e) => Me(e, er), to = (e) => Me(e, rr), ro = (e) => Me(e, tr), Be = (e) => Me(e, or, !0), $e = (e, r, t) => {
  const s = Xt.exec(e);
  return s ? s[1] ? r(s[1]) : t(s[2]) : !1;
}, Me = (e, r, t = !1) => {
  const s = Qt.exec(e);
  return s ? s[1] ? r(s[1]) : t : !1;
}, er = (e) => e === "position" || e === "percentage", tr = (e) => e === "image" || e === "url", rr = (e) => e === "length" || e === "size" || e === "bg-size", sr = (e) => e === "length", so = (e) => e === "number", oo = (e) => e === "family-name", or = (e) => e === "shadow", no = () => {
  const e = Q("color"), r = Q("font"), t = Q("text"), s = Q("font-weight"), n = Q("tracking"), a = Q("leading"), l = Q("breakpoint"), d = Q("container"), i = Q("spacing"), f = Q("radius"), c = Q("shadow"), g = Q("inset-shadow"), $ = Q("text-shadow"), w = Q("drop-shadow"), x = Q("blur"), I = Q("perspective"), j = Q("aspect"), E = Q("ease"), P = Q("animate"), F = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], B = () => [
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
  ], U = () => [...B(), z, C], p = () => ["auto", "hidden", "clip", "visible", "scroll"], L = () => ["auto", "contain", "none"], M = () => [z, C, i], Z = () => [we, "full", "auto", ...M()], ee = () => [pe, "none", "subgrid", z, C], re = () => ["auto", {
    span: ["full", pe, z, C]
  }, pe, z, C], b = () => [pe, "auto", z, C], y = () => ["auto", "min", "max", "fr", z, C], k = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], T = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], v = () => ["auto", ...M()], h = () => [we, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...M()], m = () => [e, z, C], N = () => [...B(), Mt, $t, {
    position: [z, C]
  }], G = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], X = () => ["auto", "cover", "contain", to, Qs, {
    size: [z, C]
  }], K = () => [Ze, Ie, ge], q = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    f,
    z,
    C
  ], W = () => ["", V, Ie, ge], te = () => ["solid", "dashed", "dotted", "double"], _ = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], R = () => [V, Ze, Mt, $t], ae = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    x,
    z,
    C
  ], Pe = () => ["none", V, z, C], _e = () => ["none", V, z, C], We = () => [V, z, C], Le = () => [we, "full", ...M()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [le],
      breakpoint: [le],
      color: [Ws],
      container: [le],
      "drop-shadow": [le],
      ease: ["in", "out", "in-out"],
      font: [Xs],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [le],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [le],
      shadow: [le],
      spacing: ["px", V],
      text: [le],
      "text-shadow": [le],
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
        aspect: ["auto", "square", we, C, z, j]
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
        columns: [V, C, z, d]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": F()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": F()
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
        object: U()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: p()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": p()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": p()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: L()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": L()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": L()
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
        inset: Z()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": Z()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": Z()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: Z()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: Z()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: Z()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: Z()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: Z()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: Z()
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
        z: [pe, "auto", z, C]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [we, "full", "auto", d, ...M()]
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
        flex: [V, we, "auto", "initial", "none", C]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", V, z, C]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", V, z, C]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [pe, "first", "last", "none", z, C]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": ee()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: re()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": b()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": b()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": ee()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: re()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": b()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": b()
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
        "auto-cols": y()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": y()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: M()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": M()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": M()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...k(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...T(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...T()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...k()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...T(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...T(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": k()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...T(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...T()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: M()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: M()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: M()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: M()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: M()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: M()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: M()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: M()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: M()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: v()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: v()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: v()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: v()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: v()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: v()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: v()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: v()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: v()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": M()
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
        "space-y": M()
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
        size: h()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [d, "screen", ...h()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          d,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...h()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          d,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [l]
          },
          ...h()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...h()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...h()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...h()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", t, Ie, ge]
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
        font: [s, z, Ke]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Ze, C]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [eo, C, r]
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
        tracking: [n, z, C]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [V, "none", z, Ke]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          a,
          ...M()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", z, C]
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
        list: ["disc", "decimal", "none", z, C]
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
        placeholder: m()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: m()
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
        decoration: [V, "from-font", "auto", z, ge]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: m()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [V, "auto", z, C]
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
        indent: M()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", z, C]
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
        content: ["none", z, C]
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
        bg: N()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: G()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: X()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, pe, z, C],
          radial: ["", z, C],
          conic: [pe, z, C]
        }, ro, Ys]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: m()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: K()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: K()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: K()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: m()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: m()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: m()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: q()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": q()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": q()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": q()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": q()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": q()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": q()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": q()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": q()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": q()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": q()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": q()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": q()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": q()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": q()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: W()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": W()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": W()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": W()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": W()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": W()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": W()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": W()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": W()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": W()
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
        "divide-y": W()
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
        border: m()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": m()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": m()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": m()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": m()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": m()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": m()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": m()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": m()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: m()
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
        "outline-offset": [V, z, C]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", V, Ie, ge]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: m()
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
          c,
          Be,
          Ve
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: m()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", g, Be, Ve]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": m()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: W()
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
        ring: m()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [V, ge]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": m()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": W()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": m()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", $, Be, Ve]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": m()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [V, z, C]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [..._(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": _()
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
        "mask-linear": [V]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": R()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": R()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": m()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": m()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": R()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": R()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": m()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": m()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": R()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": R()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": m()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": m()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": R()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": R()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": m()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": m()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": R()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": R()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": m()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": m()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": R()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": R()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": m()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": m()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": R()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": R()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": m()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": m()
      }],
      "mask-image-radial": [{
        "mask-radial": [z, C]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": R()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": R()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": m()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": m()
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
        "mask-radial-at": B()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [V]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": R()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": R()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": m()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": m()
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
        mask: N()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: G()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: X()
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
        mask: ["none", z, C]
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
          z,
          C
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: ae()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [V, z, C]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [V, z, C]
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
          w,
          Be,
          Ve
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": m()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", V, z, C]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [V, z, C]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", V, z, C]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [V, z, C]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", V, z, C]
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
          z,
          C
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": ae()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [V, z, C]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [V, z, C]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", V, z, C]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [V, z, C]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", V, z, C]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [V, z, C]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [V, z, C]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", V, z, C]
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
        "border-spacing": M()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": M()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": M()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", z, C]
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
        duration: [V, "initial", z, C]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", E, z, C]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [V, z, C]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", P, z, C]
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
        perspective: [I, z, C]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": U()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: Pe()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Pe()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Pe()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Pe()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: _e()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": _e()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": _e()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": _e()
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
        skew: We()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": We()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": We()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [z, C, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: U()
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
        translate: Le()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Le()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Le()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Le()
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
        accent: m()
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
        caret: m()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", z, C]
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
        "scroll-m": M()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": M()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": M()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": M()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": M()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": M()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": M()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": M()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": M()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": M()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": M()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": M()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": M()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": M()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": M()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": M()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": M()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": M()
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
        "will-change": ["auto", "scroll", "contents", "transform", z, C]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...m()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [V, Ie, ge, Ke]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...m()]
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
}, ao = /* @__PURE__ */ Bs(no), lo = He(void 0), io = lo.Provider, co = J.forwardRef((e, r) => {
  const {
    className: t,
    children: s,
    isPressable: n = !1,
    onPress: a,
    onPressStart: l,
    onPressEnd: d,
    onPressChange: i,
    onPressUp: f,
    ...c
  } = e, { pressProps: g, isPressed: $ } = $r({
    onPress: a,
    onPressStart: l,
    onPressEnd: d,
    onPressChange: i,
    onPressUp: f,
    isDisabled: !n,
    ref: r
  }), w = {}, x = ao(
    "glass-card",
    n && "cursor-pointer hover:shadow-lg hover:transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200",
    $ && "transform scale-[0.98] shadow-lg",
    t
  );
  return /* @__PURE__ */ o(io, { value: w, children: /* @__PURE__ */ o("div", { ref: r, className: x, ...n ? g : {}, ...c, children: s }) });
});
co.displayName = "Card";
const uo = J.forwardRef(({ children: e, className: r, ...t }, s) => /* @__PURE__ */ o("div", { ref: s, className: `card-body ${r || ""}`, ...t, children: e }));
uo.displayName = "CardBody";
const mo = J.forwardRef(({ children: e, className: r, ...t }, s) => /* @__PURE__ */ o("p", { ref: s, className: `card-description ${r || ""}`, ...t, children: e }));
mo.displayName = "CardDescription";
const po = J.forwardRef(({ children: e, className: r, ...t }, s) => /* @__PURE__ */ o("div", { ref: s, className: `card-footer ${r || ""}`, ...t, children: e }));
po.displayName = "CardFooter";
const fo = J.forwardRef(({ children: e, className: r, ...t }, s) => /* @__PURE__ */ o("div", { ref: s, className: `card-header ${r || ""}`, ...t, children: e }));
fo.displayName = "CardHeader";
const ho = J.forwardRef(({ children: e, className: r, ...t }, s) => /* @__PURE__ */ o("h3", { ref: s, className: `card-title ${r || ""}`, ...t, children: e }));
ho.displayName = "CardTitle";
function St({ label: e, defaultChecked: r = !1, onChange: t, name: s }) {
  const [n, a] = D(r);
  return /* @__PURE__ */ u("label", { className: "flex items-center space-x-3 cursor-pointer", children: [
    /* @__PURE__ */ o(
      "input",
      {
        type: "checkbox",
        name: s,
        checked: n,
        onChange: (l) => {
          a(l.target.checked), t(l);
        },
        className: "sr-only"
      }
    ),
    /* @__PURE__ */ o(
      "div",
      {
        className: `w-5 h-5 rounded border-2 flex items-center justify-center ${n ? "bg-accent-500 border-accent-500" : "border-gray-300"}`,
        children: n && /* @__PURE__ */ o(ut, { size: 12, className: "text-white" })
      }
    ),
    e && /* @__PURE__ */ o("span", { className: "text-sm", children: e })
  ] });
}
const Hn = ({ label: e, selected: r = !1, onClick: t, className: s = "" }) => {
  const d = `px-3 py-1 rounded-full text-sm border transition-colors cursor-pointer ${r ? "bg-accent-500 border-accent-500 text-white" : "bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200"} ${s}`;
  return /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      className: d,
      onClick: t,
      children: e
    }
  );
};
function qn({ title: e, children: r }) {
  const [t, s] = D(!1);
  return /* @__PURE__ */ u("div", { className: "glass-surface rounded-lg overflow-hidden", children: [
    /* @__PURE__ */ u(
      "div",
      {
        className: "flex items-center justify-between p-4 cursor-pointer hover:bg-glass-light",
        onClick: () => s(!t),
        children: [
          /* @__PURE__ */ o("h4", { className: "font-medium", children: e }),
          /* @__PURE__ */ o(
            ze,
            {
              size: 16,
              className: `transform transition-transform ${t ? "rotate-180" : ""}`
            }
          )
        ]
      }
    ),
    t && /* @__PURE__ */ o("div", { className: "px-4 pb-4 bg-gray-50", children: /* @__PURE__ */ o("div", { className: "pt-4 border-t border-gray-200", children: r }) })
  ] });
}
function he({ icon: e, onClick: r, className: t = "" }) {
  return /* @__PURE__ */ o(
    "button",
    {
      onClick: r,
      className: `p-3 rounded-lg glass-surface hover:bg-accent-500 hover:text-white transition-colors ${t}`.trim(),
      children: e
    }
  );
}
const Wn = ({ logo: e, title: r, header: t, navContent: s, children: n }) => {
  const [a, l] = D(!1);
  return /* @__PURE__ */ u("div", { className: "flex h-full", children: [
    /* @__PURE__ */ o(
      "div",
      {
        className: `glass-surface transition-all duration-300 border-r border-gray-200 dark:border-gray-700 ${a ? "w-20" : "w-64"}`,
        children: /* @__PURE__ */ u("div", { className: "flex flex-col h-full", children: [
          /* @__PURE__ */ u("div", { className: "relative", children: [
            /* @__PURE__ */ o("div", { className: "absolute top-3 right-3 z-10", children: /* @__PURE__ */ o(
              he,
              {
                onClick: () => l(!a),
                icon: a ? /* @__PURE__ */ o(Ht, { size: 18 }) : /* @__PURE__ */ o(ue, { size: 18 }),
                "aria-label": "Toggle sidebar"
              }
            ) }),
            t,
            e || r && /* @__PURE__ */ u(
              "div",
              {
                className: `flex flex-col items-center pt-12 pb-4 px-4 ${a ? "pb-6" : "pb-8"}`,
                children: [
                  e && /* @__PURE__ */ o("div", { className: "flex-shrink-0 mb-3", children: e }),
                  !a && r && /* @__PURE__ */ o("div", { className: "font-semibold text-lg text-center leading-tight px-2", children: r })
                ]
              }
            ),
            /* @__PURE__ */ o("div", { className: "mx-4 mb-4 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" })
          ] }),
          /* @__PURE__ */ o("div", { className: "flex-grow overflow-y-auto px-4 pb-4", children: typeof s == "function" ? s(a) : s })
        ] })
      }
    ),
    /* @__PURE__ */ o("div", { className: "flex-1 p-4", children: n })
  ] });
};
function Zn({ size: e = "md", children: r }) {
  const t = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl"
  }, s = `
    ${t[e] || t.md}
    mx-auto 
    glass-surface 
    p-4 
    rounded 
    text-center
  `;
  return /* @__PURE__ */ o("div", { className: s.trim(), children: r });
}
function Kn({ children: e, items: r }) {
  const [t, s] = D({ visible: !1, x: 0, y: 0 }), n = de((l) => {
    l.preventDefault(), s({ visible: !0, x: l.pageX, y: l.pageY });
  }, []), a = de(() => {
    t.visible && s((l) => ({ ...l, visible: !1 }));
  }, [t.visible]);
  return oe(() => (document.addEventListener("click", a), () => {
    document.removeEventListener("click", a);
  }), [a]), /* @__PURE__ */ u("div", { onContextMenu: n, children: [
    e,
    t.visible && /* @__PURE__ */ o(
      "div",
      {
        className: "fixed glass-surface rounded-lg shadow-lg z-50 py-1",
        style: { top: t.y, left: t.x },
        children: r.map((l, d) => l.separator ? /* @__PURE__ */ o("hr", { className: "my-1 border-gray-200" }, `sep-${d}`) : /* @__PURE__ */ u(
          "button",
          {
            onClick: l.onClick,
            className: "flex items-center w-full px-4 py-2 text-sm hover:bg-glass-light transition-colors",
            children: [
              l.icon && /* @__PURE__ */ o("span", { className: "mr-2", children: l.icon }),
              l.label
            ]
          },
          l.label
        ))
      }
    )
  ] });
}
function Jn({ label: e, value: r, icon: t, className: s = "" }) {
  const a = ["flex justify-between items-center py-2 px-3 rounded-md bg-muted/50", s].filter(Boolean).join(" ").trim();
  return /* @__PURE__ */ u("div", { className: a, children: [
    /* @__PURE__ */ u("div", { className: "flex items-center gap-2", children: [
      t && /* @__PURE__ */ o("span", { className: "text-muted-foreground", "aria-hidden": "true", children: t }),
      /* @__PURE__ */ o("span", { className: "text-sm font-medium text-muted-foreground", children: e })
    ] }),
    /* @__PURE__ */ o("div", { className: "text-sm font-semibold text-foreground", children: r })
  ] });
}
const At = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-2xl",
  xl: "max-w-4xl",
  "2xl": "max-w-6xl"
};
function go({
  isOpen: e,
  onClose: r,
  title: t,
  children: s,
  size: n = "md"
}) {
  const a = ne(null), l = ne(null);
  if (oe(() => {
    var i, f;
    e ? (l.current = document.activeElement, (i = a.current) == null || i.focus()) : (f = l.current) == null || f.focus();
  }, [e]), oe(() => {
    const i = (f) => {
      f.key === "Escape" && r();
    };
    return e && (document.addEventListener("keydown", i), document.body.style.overflow = "hidden"), () => {
      document.removeEventListener("keydown", i), document.body.style.overflow = "unset";
    };
  }, [e, r]), !e) return null;
  const d = At[n] || At.md;
  return /* @__PURE__ */ o(
    "div",
    {
      className: "fixed inset-0 flex items-center justify-center z-50 p-4",
      style: { background: "var(--fg-overlay-medium)" },
      onClick: r,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "modal-title",
      children: /* @__PURE__ */ u(
        "div",
        {
          ref: a,
          className: `modal-fluid show w-full ${d} max-h-[90vh] overflow-hidden`,
          onClick: (i) => i.stopPropagation(),
          tabIndex: -1,
          role: "document",
          children: [
            /* @__PURE__ */ u("div", { className: "flex justify-between items-center mb-4 absolute top-[20px] right-[25px]", children: [
              /* @__PURE__ */ o("h4", { id: "modal-title", className: "text-lg font-semibold", children: t }),
              /* @__PURE__ */ o(
                he,
                {
                  icon: /* @__PURE__ */ o(ue, { size: 20 }),
                  onClick: r,
                  "aria-label": "Fermer la modal"
                }
              )
            ] }),
            /* @__PURE__ */ o("div", { children: s })
          ]
        }
      )
    }
  );
}
const nr = ({
  title: e,
  children: r,
  className: t = "",
  variant: s = "default"
  // default, compact, spacious
}) => {
  const n = "flex-shrink-0 flex justify-between items-center border-b border-border bg-background", a = {
    default: "pb-4 pt-2 px-4",
    compact: "pb-2 pt-1 px-3",
    spacious: "pb-6 pt-4 px-6"
  }, l = [
    n,
    a[s] || a.default,
    t
  ].filter(Boolean).join(" ").trim();
  return /* @__PURE__ */ o("div", { className: l, children: /* @__PURE__ */ u("div", { className: "flex-1", children: [
    e && /* @__PURE__ */ o(
      "h4",
      {
        id: "modal-title",
        className: "text-lg font-semibold text-foreground",
        style: { color: "var(--fg-text-primary)" },
        children: e
      }
    ),
    r
  ] }) });
};
nr.displayName = "ModalHeader";
const ar = ({
  children: e,
  className: r = "",
  variant: t = "default",
  // default, compact, spacious
  scrollable: s = !0
}) => {
  const n = "flex-1 bg-background", a = {
    default: "py-4 px-4",
    compact: "py-2 px-3",
    spacious: "py-6 px-6"
  }, l = s ? "overflow-y-auto max-h-[60vh]" : "overflow-visible", d = [
    n,
    a[t] || a.default,
    l,
    r
  ].filter(Boolean).join(" ").trim();
  return /* @__PURE__ */ o("div", { className: d, children: e });
};
ar.displayName = "ModalBody";
function Xn({
  label: e = "Documents",
  acceptedTypes: r = ".pdf,.doc,.docx,.jpg,.jpeg,.png",
  maxFileSize: t = 10 * 1024 * 1024,
  // 10MB par défaut
  multiple: s = !0,
  files: n = [],
  onFilesChange: a,
  onFileRemove: l,
  onFilePreview: d,
  disabled: i = !1,
  error: f = null,
  helperText: c = null,
  required: g = !1
}) {
  var re;
  const [$, w] = D(!1), [x, I] = D(null), [j, E] = D(!1), P = (b) => {
    b.preventDefault(), b.stopPropagation(), b.type === "dragenter" || b.type === "dragover" ? w(!0) : b.type === "dragleave" && w(!1);
  }, F = (b) => {
    if (b.preventDefault(), b.stopPropagation(), w(!1), i) return;
    const y = Array.from(b.dataTransfer.files);
    U(y);
  }, B = (b) => {
    const y = Array.from(b.target.files);
    U(y), b.target.value = "";
  }, U = (b) => {
    const y = [], k = [];
    b.forEach((T) => {
      if (T.size > t) {
        k.push(`${T.name}: Fichier trop volumineux (max ${M(t)})`);
        return;
      }
      const v = `.${T.name.split(".").pop().toLowerCase()}`;
      if (r && !r.includes(v)) {
        k.push(`${T.name}: Type de fichier non supporté`);
        return;
      }
      y.push(T);
    }), k.length > 0 && console.warn("Erreurs de validation:", k), y.length > 0 && a && a(s ? [...n, ...y] : [y[0]]);
  }, p = (b) => {
    if (l)
      l(b);
    else if (a) {
      const y = n.filter((k, T) => T !== b);
      a(y);
    }
  }, L = (b, y) => {
    I({ file: b, index: y }), E(!0), d && d(b, y);
  }, M = (b) => {
    if (b === 0) return "0 Bytes";
    const y = 1024, k = ["Bytes", "KB", "MB", "GB"], T = Math.floor(Math.log(b) / Math.log(y));
    return parseFloat((b / Math.pow(y, T)).toFixed(2)) + " " + k[T];
  }, Z = (b) => {
    const y = b.split(".").pop().toLowerCase();
    return ["jpg", "jpeg", "png", "gif", "webp"].includes(y) ? "🖼️" : ["pdf"].includes(y) ? "📄" : ["doc", "docx"].includes(y) ? "📝" : "📎";
  }, ee = (b) => {
    const y = b.split(".").pop().toLowerCase();
    return ["jpg", "jpeg", "png", "gif", "webp", "pdf"].includes(y);
  };
  return /* @__PURE__ */ u("div", { className: "space-y-4", children: [
    e && /* @__PURE__ */ u("label", { className: "block text-sm font-medium text-gray-700", children: [
      e,
      g && /* @__PURE__ */ o("span", { className: "text-red-500 ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ u(
      "div",
      {
        className: `
          relative border-2 border-dashed rounded-lg p-6 text-center transition-all duration-200
          ${$ ? "border-primary-500 bg-primary-50" : "border-gray-300 hover:border-primary-400"}
          ${i ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
          ${f ? "border-red-300 bg-red-50" : ""}
        `,
        onDragEnter: P,
        onDragLeave: P,
        onDragOver: P,
        onDrop: F,
        children: [
          /* @__PURE__ */ o(
            "input",
            {
              type: "file",
              multiple: s,
              accept: r,
              onChange: B,
              disabled: i,
              className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            }
          ),
          /* @__PURE__ */ o(
            qt,
            {
              size: 48,
              className: `mx-auto mb-4 ${$ ? "text-primary-500" : "text-gray-400"}`
            }
          ),
          /* @__PURE__ */ o("p", { className: "text-gray-600 mb-2", children: $ ? "Déposez vos fichiers ici..." : "Glissez-déposez vos fichiers ici ou cliquez pour parcourir" }),
          /* @__PURE__ */ o(
            ve,
            {
              type: "button",
              variant: "outline",
              size: "sm",
              disabled: i,
              onClick: (b) => b.stopPropagation(),
              children: "Parcourir les fichiers"
            }
          ),
          r && /* @__PURE__ */ u("p", { className: "text-xs text-gray-500 mt-2", children: [
            "Types acceptés: ",
            r
          ] }),
          t && /* @__PURE__ */ u("p", { className: "text-xs text-gray-500", children: [
            "Taille max: ",
            M(t)
          ] })
        ]
      }
    ),
    c && !f && /* @__PURE__ */ o("p", { className: "text-sm text-gray-500", children: c }),
    f && /* @__PURE__ */ u("div", { className: "flex items-center text-sm text-red-600", children: [
      /* @__PURE__ */ o(Ce, { size: 16, className: "mr-1" }),
      f
    ] }),
    n && n.length > 0 && /* @__PURE__ */ u("div", { className: "space-y-2", children: [
      /* @__PURE__ */ u("h4", { className: "text-sm font-medium text-gray-700", children: [
        "Fichiers sélectionnés (",
        n.length,
        ")"
      ] }),
      /* @__PURE__ */ o("div", { className: "space-y-2", children: n.map((b, y) => /* @__PURE__ */ u(
        "div",
        {
          className: "flex items-center justify-between p-3 bg-gray-50 rounded-lg border",
          children: [
            /* @__PURE__ */ u("div", { className: "flex items-center space-x-3 flex-1 min-w-0", children: [
              /* @__PURE__ */ o("span", { className: "text-lg", children: Z(b.name) }),
              /* @__PURE__ */ u("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ o("p", { className: "text-sm font-medium text-gray-900 truncate", children: b.name }),
                /* @__PURE__ */ o("p", { className: "text-xs text-gray-500", children: M(b.size) })
              ] })
            ] }),
            /* @__PURE__ */ u("div", { className: "flex items-center space-x-2", children: [
              ee(b.name) && /* @__PURE__ */ o(
                ve,
                {
                  type: "button",
                  variant: "ghost",
                  size: "sm",
                  startIcon: /* @__PURE__ */ o(Xr, { size: 16 }),
                  onClick: () => L(b, y),
                  children: "Aperçu"
                }
              ),
              /* @__PURE__ */ o(
                ve,
                {
                  type: "button",
                  variant: "ghost",
                  size: "sm",
                  startIcon: /* @__PURE__ */ o(ue, { size: 16 }),
                  onClick: () => p(y),
                  className: "text-red-600 hover:text-red-700",
                  children: "Supprimer"
                }
              )
            ] })
          ]
        },
        y
      )) })
    ] }),
    /* @__PURE__ */ u(
      go,
      {
        isOpen: j,
        onClose: () => E(!1),
        title: "Aperçu du document",
        children: [
          /* @__PURE__ */ o(nr, { children: /* @__PURE__ */ u("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ o("h3", { className: "text-lg font-semibold", children: (re = x == null ? void 0 : x.file) == null ? void 0 : re.name }),
            /* @__PURE__ */ o(
              ve,
              {
                variant: "ghost",
                size: "sm",
                startIcon: /* @__PURE__ */ o(Kr, { size: 16 }),
                onClick: () => {
                  const b = URL.createObjectURL(x.file), y = document.createElement("a");
                  y.href = b, y.download = x.file.name, y.click(), URL.revokeObjectURL(b);
                },
                children: "Télécharger"
              }
            )
          ] }) }),
          /* @__PURE__ */ o(ar, { children: x && /* @__PURE__ */ o("div", { className: "max-h-96 overflow-auto", children: x.file.type.startsWith("image/") ? /* @__PURE__ */ o(
            "img",
            {
              src: URL.createObjectURL(x.file),
              alt: x.file.name,
              className: "max-w-full h-auto rounded-lg"
            }
          ) : x.file.type === "application/pdf" ? /* @__PURE__ */ o(
            "embed",
            {
              src: URL.createObjectURL(x.file),
              type: "application/pdf",
              width: "100%",
              height: "400px",
              className: "rounded-lg"
            }
          ) : /* @__PURE__ */ u("div", { className: "text-center py-8", children: [
            /* @__PURE__ */ o(es, { size: 48, className: "mx-auto text-gray-400 mb-4" }),
            /* @__PURE__ */ o("p", { className: "text-gray-600", children: "Aperçu non disponible pour ce type de fichier" })
          ] }) }) })
        ]
      }
    )
  ] });
}
function Qn({ isOpen: e, onClose: r, title: t, children: s }) {
  return e ? /* @__PURE__ */ u(Bt, { children: [
    /* @__PURE__ */ o(
      "div",
      {
        className: "fixed inset-0 bg-black bg-opacity-50 z-40",
        onClick: r
      }
    ),
    /* @__PURE__ */ o("div", { className: "fixed right-0 top-0 h-full w-80 glass-surface z-50 animate-slide-in", children: /* @__PURE__ */ u("div", { className: "p-6", children: [
      /* @__PURE__ */ u("div", { className: "flex justify-between items-center mb-6", children: [
        /* @__PURE__ */ o("h4", { className: "text-lg font-semibold", children: t }),
        /* @__PURE__ */ o(
          "button",
          {
            onClick: r,
            className: "p-2 hover:bg-glass-light rounded-lg transition-colors",
            children: /* @__PURE__ */ o(ue, { size: 20 })
          }
        )
      ] }),
      s
    ] }) })
  ] }) : null;
}
function bo(e = "portal-root") {
  const [r, t] = D(null);
  return oe(() => {
    let s = document.getElementById(e), n = !1;
    return s || (n = !0, s = document.createElement("div"), s.id = e, s.style.position = "relative", s.style.zIndex = "9999", document.body.appendChild(s)), t(s), () => {
      n && s.parentNode && s.parentNode.removeChild(s);
    };
  }, [e]), r;
}
function xo({ children: e, id: r = "portal-root" }) {
  const t = bo(r);
  return t ? Mr(e, t) : null;
}
const lr = He({
  isOpen: !1,
  setIsOpen: () => {
  },
  onClose: () => {
  }
}), yo = lr.Provider, ht = () => {
  const e = dt(lr);
  if (!e)
    throw new Error("useDropdown must be used within a Dropdown component");
  return e;
};
function ce({ children: e, className: r = "" }) {
  const [t, s] = D(!1), n = ne(null), a = de((d) => {
    n.current && !n.current.contains(d.target) && s(!1);
  }, []);
  oe(() => (document.addEventListener("mousedown", a), () => {
    document.removeEventListener("mousedown", a);
  }), [a]);
  const l = de(() => {
    s(!1);
  }, []);
  return /* @__PURE__ */ o(yo, { value: { isOpen: t, setIsOpen: s, onClose: l }, children: /* @__PURE__ */ o("div", { className: `relative inline-block ${r}`, ref: n, children: e }) });
}
function vo({ children: e, asChild: r }) {
  const { isOpen: t, setIsOpen: s } = ht(), n = (a) => {
    a.preventDefault(), s(!t);
  };
  return r ? e ? J.cloneElement(e, {
    onClick: (a) => {
      n(a), e.props.onClick && e.props.onClick(a);
    }
  }) : null : /* @__PURE__ */ o(
    "button",
    {
      onClick: n,
      className: "inline-flex items-center justify-center",
      children: e
    }
  );
}
function wo({ children: e, align: r = "left", className: t = "" }) {
  const { isOpen: s } = ht(), n = ne(null);
  ne(null);
  const [a, l] = D({}), [d, i] = D(!1), f = r === "right" || r === "end" ? "right-0" : r === "center" ? "left-1/2 -translate-x-1/2" : "left-0";
  if (oe(() => {
    if (s && n.current) {
      const g = n.current.closest(".relative"), $ = (g == null ? void 0 : g.querySelector("button")) || (g == null ? void 0 : g.querySelector('[role="button"]'));
      if ($) {
        $.getBoundingClientRect();
        const w = n.current.getBoundingClientRect(), x = window.innerWidth, I = window.innerHeight;
        g == null || g.closest(
          "td, th, .overflow-hidden, .overflow-x-hidden"
        );
        {
          i(!1);
          const j = { zIndex: 50 };
          if (w.right > x && (j.right = "0", j.left = "auto", r === "center" && (j.transform = "none")), w.bottom > I) {
            const E = w.bottom - I;
            j.maxHeight = `${w.height - E - 10}px`, j.overflowY = "auto";
          }
          l(j);
        }
      }
    } else s || (l({}), i(!1));
  }, [s, r]), !s) return null;
  const c = /* @__PURE__ */ o("div", { className: "py-1", children: e });
  return d ? /* @__PURE__ */ o(xo, { id: "dropdown-portal", children: /* @__PURE__ */ o(
    "div",
    {
      ref: n,
      className: `dropdown-menu-portal glass-surface rounded-lg shadow-lg ${t}`,
      style: a,
      children: c
    }
  ) }) : /* @__PURE__ */ o(
    "div",
    {
      ref: n,
      className: `dropdown-menu absolute ${f} mt-2 glass-surface rounded-lg shadow-lg ${t}`,
      style: a,
      children: c
    }
  );
}
function ko({ children: e, onClick: r, className: t = "", asChild: s }) {
  const { onClose: n } = ht(), a = (l) => {
    setTimeout(() => n(), 150), r && r(l);
  };
  return s ? e ? J.cloneElement(e, {
    onClick: (l) => {
      e.props.onClick && e.props.onClick(l), setTimeout(() => n(), 150);
    },
    className: `flex items-center w-full px-4 py-2 text-sm transition-colors hover:bg-glass-light ${t} ${e.props.className || ""}`
  }) : null : /* @__PURE__ */ o(
    "button",
    {
      onClick: a,
      className: `flex items-center w-full px-4 py-2 text-sm transition-colors hover:bg-glass-light ${t}`,
      children: e
    }
  );
}
function No() {
  return /* @__PURE__ */ o("hr", { className: "my-1 border-gray-200" });
}
ce.Trigger = vo;
ce.Menu = wo;
ce.Item = ko;
ce.Separator = No;
function Yn({ icon: e, title: r, message: t, action: s }) {
  const n = J.isValidElement(e);
  return n || e && (e.type, { ...e.props }), /* @__PURE__ */ u("div", { className: "text-center py-12", children: [
    n ? J.cloneElement(e, {
      size: e.props.size || 48,
      className: `mx-auto text-gray-400 mb-4 ${e.props.className || ""}`.trim()
    }) : e ? J.createElement(e, { size: 48, className: "mx-auto text-gray-400 mb-4" }) : /* @__PURE__ */ o(Ye, { size: 48, className: "mx-auto text-gray-400 mb-4" }),
    /* @__PURE__ */ o("h4", { className: "text-lg font-medium text-gray-600 mb-2", children: r }),
    /* @__PURE__ */ o("p", { className: "text-gray-500 mb-4", children: t }),
    s && /* @__PURE__ */ u("button", { className: "btn-fluid", onClick: s.onClick, children: [
      s.icon || /* @__PURE__ */ o(ds, { size: 16 }),
      s.label
    ] })
  ] });
}
function ea({ data: e, renderItem: r, renderExpandedContent: t }) {
  const [s, n] = D({}), a = (l) => {
    n((d) => ({
      ...d,
      [l]: !d[l]
    }));
  };
  return !e || e.length === 0 ? /* @__PURE__ */ o("p", { className: "text-center text-gray-500", children: "Aucune donnée à afficher." }) : /* @__PURE__ */ o("div", { className: "space-y-2", children: e.map((l) => /* @__PURE__ */ u(
    "div",
    {
      className: "glass-card-border overflow-hidden rounded-lg",
      children: [
        /* @__PURE__ */ u(
          "div",
          {
            className: "flex items-center justify-between p-4 cursor-pointer hover:bg-base-200/50",
            onClick: () => a(l.id),
            children: [
              /* @__PURE__ */ o("div", { className: "flex-grow", children: r(l) }),
              /* @__PURE__ */ o("div", { className: "ml-4", children: s[l.id] ? /* @__PURE__ */ o(Ut, { size: 20, className: "text-gray-500" }) : /* @__PURE__ */ o(ze, { size: 20, className: "text-gray-500" }) })
            ]
          }
        ),
        s[l.id] && /* @__PURE__ */ o("div", { className: "px-4 pt-2 pb-4 bg-base-200/30 border-t border-base-300/50", children: t(l) })
      ]
    },
    l.id
  )) });
}
function ta({ onFileSelect: e, label: r, acceptedTypes: t }) {
  return /* @__PURE__ */ u("div", { className: "border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-accent-500 transition-colors", children: [
    /* @__PURE__ */ o(qt, { size: 48, className: "mx-auto text-gray-400 mb-4" }),
    /* @__PURE__ */ o("p", { className: "text-gray-600 mb-2", children: r || "Glissez-déposez vos fichiers ici ou" }),
    /* @__PURE__ */ u("label", { className: "btn-fluid cursor-pointer", children: [
      "Parcourir les fichiers",
      /* @__PURE__ */ o("input", { type: "file", className: "hidden", onChange: (n) => {
        const a = n.target.files[0];
        a && e && e(a);
      } })
    ] }),
    t && /* @__PURE__ */ o("p", { className: "text-xs text-gray-500 mt-2", children: t })
  ] });
}
const Co = ({ title: e, links: r }) => /* @__PURE__ */ u("div", { children: [
  /* @__PURE__ */ o("h4", { className: "font-semibold text-base-content mb-4", children: e }),
  /* @__PURE__ */ o("ul", { className: "space-y-2", children: r.map((t) => /* @__PURE__ */ o("li", { children: /* @__PURE__ */ o(Zt, { href: t.href, className: "text-sm text-base-content/80 hover:text-primary transition-colors", children: t.text }) }, t.href + t.text)) })
] });
function ra({ sections: e, socialLinks: r, copyrightText: t }) {
  return !e || !r || !t ? null : /* @__PURE__ */ o("footer", { className: "glass-surface p-8 rounded-lg w-full", children: /* @__PURE__ */ u("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ o("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8", children: e.map((s) => /* @__PURE__ */ o(Co, { title: s.title, links: s.links }, s.title)) }),
    /* @__PURE__ */ u("div", { className: "mt-8 pt-8 border-t border-base-300/50 flex flex-col sm:flex-row justify-between items-center", children: [
      /* @__PURE__ */ o("p", { className: "text-sm text-base-content/70", children: t }),
      /* @__PURE__ */ o("div", { className: "flex items-center gap-2 mt-4 sm:mt-0", children: r.map((s) => /* @__PURE__ */ o(he, { asChild: !0, "aria-label": s.label, variant: "ghost", children: /* @__PURE__ */ o("a", { href: s.href, target: "_blank", rel: "noopener noreferrer", children: s.icon }) }, s.label)) })
    ] })
  ] }) });
}
const Tt = ({
  children: e,
  variant: r = "standard",
  className: t = ""
}) => {
  const s = {
    standard: {
      icon: /* @__PURE__ */ o(qe, { size: 12 }),
      color: "text-gray-500"
    },
    error: {
      icon: /* @__PURE__ */ o(Ce, { size: 12 }),
      color: "text-red-500"
    },
    success: {
      icon: /* @__PURE__ */ o(ut, { size: 12 }),
      color: "text-green-500"
    }
  }, n = s[r] || s.standard;
  return /* @__PURE__ */ u("p", { className: `text-sm flex items-center gap-1 mt-1 ${n.color} ${t}`, children: [
    n.icon,
    e
  ] });
}, ir = J.forwardRef(
  ({ label: e, name: r, startIcon: t, endIcon: s, className: n, error: a, helperText: l, ...d }, i) => {
    const f = [
      "input-fluid",
      t ? "pl-10" : "",
      s ? "pr-10" : "",
      a ? "border-red-500" : "",
      n
    ].join(" ").trim();
    return /* @__PURE__ */ u("div", { children: [
      e && /* @__PURE__ */ o("label", { htmlFor: r, className: "block text-sm font-medium mb-2", children: e }),
      /* @__PURE__ */ u("div", { className: "relative", children: [
        t && /* @__PURE__ */ o("div", { className: "absolute left-3 top-1/2 transform -translate-y-1/2", style: { color: "var(--fg-icon-primary)" }, children: J.cloneElement(t, { size: 16 }) }),
        /* @__PURE__ */ o("input", { ref: i, id: r, name: r, className: f, ...d }),
        s && /* @__PURE__ */ o("div", { className: "absolute right-3 top-1/2 transform -translate-y-1/2", children: s })
      ] }),
      a && /* @__PURE__ */ o(Tt, { variant: "error", children: a }),
      l && !a && /* @__PURE__ */ o(Tt, { variant: "info", children: l })
    ] });
  }
);
ir.displayName = "Input";
function zo({
  currentPage: e,
  totalPages: r,
  onPageChange: t,
  totalResults: s,
  resultsPerPage: n = 10
}) {
  const a = (e - 1) * n + 1, l = Math.min(e * n, s), d = (f) => {
    f >= 1 && f <= r && t(f);
  };
  return /* @__PURE__ */ u("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ u("p", { className: "text-sm text-gray-600", children: [
      "Affichage ",
      a,
      " à ",
      l,
      " sur ",
      s,
      " résultats"
    ] }),
    /* @__PURE__ */ u("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ o(
        "button",
        {
          onClick: () => d(e - 1),
          disabled: e === 1,
          className: "p-2 rounded-lg hover:bg-glass-light transition-colors disabled:opacity-50",
          children: /* @__PURE__ */ o(Vr, { size: 16 })
        }
      ),
      (() => {
        var c;
        const f = [];
        for (let g = 1; g <= r; g++)
          g === 1 || g === r || g >= e - 1 && g <= e + 1 ? f.push(
            /* @__PURE__ */ o(
              "button",
              {
                onClick: () => d(g),
                className: `px-3 py-1 rounded-lg text-sm transition-colors ${e === g ? "bg-accent-500 text-white" : "hover:bg-glass-light"}`,
                children: g
              },
              g
            )
          ) : ((c = f[f.length - 1]) == null ? void 0 : c.key) !== "..." && f.push(/* @__PURE__ */ o("span", { className: "px-3 py-1", children: "..." }, "..."));
        return f;
      })(),
      /* @__PURE__ */ o(
        "button",
        {
          onClick: () => d(e + 1),
          disabled: e === r,
          className: "p-2 rounded-lg hover:bg-glass-light transition-colors disabled:opacity-50",
          children: /* @__PURE__ */ o(mt, { size: 16 })
        }
      )
    ] })
  ] });
}
const $o = ({
  label: e,
  options: r = [],
  value: t,
  onChange: s,
  placeholder: n = "Sélectionner...",
  disabled: a = !1,
  // Nouvelles props pour les fonctionnalités avancées
  searchable: l = !1,
  sortable: d = !1,
  sortOrder: i = "asc",
  // 'asc' | 'desc'
  onSortChange: f,
  loadOptions: c,
  // Fonction pour le chargement dynamique: (searchTerm, page) => Promise<options[]> | null
  searchPlaceholder: g = "Rechercher...",
  maxHeight: $ = 240,
  error: w,
  helperText: x
}) => {
  const [I, j] = D(!1), [E, P] = D(""), [F, B] = D(r), [U, p] = D(!1), [L, M] = D(!0), [Z, ee] = D(1), re = ne(null), b = ne(null), y = ne(null), k = ne(null);
  oe(() => {
    c || B(r || []);
  }, [r, c]), oe(() => {
    c && (async () => {
      p(!0);
      try {
        const R = await c("", 1);
        R && R.length > 0 ? (B(R), M(R.length > 0), ee(1)) : (B([]), M(!1));
      } catch (R) {
        console.error("Erreur lors du chargement initial:", R), B([]), M(!1);
      } finally {
        p(!1);
      }
    })();
  }, [c]);
  const T = () => {
    a || (j(!I), !I && l && setTimeout(() => {
      var _;
      (_ = b.current) == null || _.focus();
    }, 100));
  }, v = (_) => {
    s(_), j(!1), P("");
  }, h = (_) => {
    re.current && !re.current.contains(_.target) && (j(!1), P(""));
  }, m = de(async (_) => {
    if (c) {
      p(!0), ee(1);
      try {
        const R = await c(_, 1);
        R === null ? (B([]), M(!1)) : (B(R), M(R.length > 0));
      } catch (R) {
        console.error("Erreur lors de la recherche:", R), B([]), M(!1);
      } finally {
        p(!1);
      }
    }
  }, [c]), N = () => {
    d && f && f(i === "asc" ? "desc" : "asc");
  }, G = Ne(() => !l || c || !E ? F : F.filter(
    (_) => _.label.toLowerCase().includes(E.toLowerCase())
  ), [F, E, l]), X = Ne(() => !d || f ? G : [...G].sort((_, R) => {
    const ae = _.label.localeCompare(R.label);
    return i === "asc" ? ae : -ae;
  }), [G, d, i, f]), K = de(async () => {
    if (!(!L || !c)) {
      p(!0);
      try {
        const _ = Z + 1, R = await c(E, _);
        R === null || R.length === 0 ? M(!1) : (B((ae) => [...ae, ...R]), ee(_));
      } catch (_) {
        console.error("Erreur lors du chargement:", _), M(!1);
      } finally {
        p(!1);
      }
    }
  }, [L, c, Z, E]), q = ne(K);
  q.current = K;
  const W = de((_) => {
    U || (k.current && k.current.disconnect(), k.current = new IntersectionObserver((R) => {
      R[0].isIntersecting && L && c && q.current();
    }), _ && k.current.observe(_));
  }, [U, L, c]);
  oe(() => (document.addEventListener("mousedown", h), () => {
    document.removeEventListener("mousedown", h), k.current && k.current.disconnect();
  }), []);
  const te = F.find((_) => _.value === t);
  return /* @__PURE__ */ u("div", { className: "relative w-full", ref: re, children: [
    e && /* @__PURE__ */ o("label", { className: "block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300", children: e }),
    /* @__PURE__ */ u("div", { className: "relative", children: [
      /* @__PURE__ */ u(
        "button",
        {
          type: "button",
          className: `input-fluid w-full text-left flex items-center justify-between ${a ? "bg-gray-100 dark:bg-gray-800 cursor-not-allowed" : ""} ${w ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}`,
          onClick: T,
          disabled: a,
          "aria-haspopup": "listbox",
          "aria-expanded": I,
          children: [
            /* @__PURE__ */ o("span", { className: te ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400", children: te ? te.label : n }),
            /* @__PURE__ */ o(ze, { size: 16, className: `transition-transform ${I ? "rotate-180" : ""}` })
          ]
        }
      ),
      I && /* @__PURE__ */ u("div", { className: "absolute top-full left-0 right-0 mt-1 glass-surface rounded-lg shadow-lg z-50 overflow-hidden", children: [
        (l || d) && /* @__PURE__ */ o("div", { className: "p-2 border-b border-gray-200 dark:border-gray-700", children: /* @__PURE__ */ u("div", { className: "flex gap-2", children: [
          l && /* @__PURE__ */ u("div", { className: "flex-1 relative", children: [
            /* @__PURE__ */ o(Ue, { size: 16, className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" }),
            /* @__PURE__ */ o(
              "input",
              {
                ref: b,
                type: "text",
                value: E,
                onChange: (_) => {
                  P(_.target.value), m(_.target.value);
                },
                placeholder: g,
                className: "w-full pl-9 pr-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              }
            )
          ] }),
          d && /* @__PURE__ */ u(
            "button",
            {
              type: "button",
              onClick: N,
              className: "px-3 py-2 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition-colors flex items-center gap-1",
              title: `Trier par ordre ${i === "asc" ? "décroissant" : "croissant"}`,
              children: [
                /* @__PURE__ */ o(Er, { size: 14 }),
                i === "asc" ? "A-Z" : "Z-A"
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ u(
          "div",
          {
            ref: y,
            className: "py-1 overflow-y-auto",
            style: { maxHeight: `${$}px` },
            children: [
              U && X.length === 0 ? /* @__PURE__ */ u("div", { className: "flex items-center justify-center py-4", children: [
                /* @__PURE__ */ o(et, { size: 16, className: "animate-spin mr-2" }),
                /* @__PURE__ */ o("span", { className: "text-sm text-gray-500", children: "Chargement..." })
              ] }) : X.length === 0 ? /* @__PURE__ */ o("div", { className: "px-4 py-3 text-sm text-gray-500 text-center", children: E ? "Aucun résultat trouvé" : "Aucune option disponible" }) : X.map((_, R) => {
                const ae = R === X.length - 1;
                return /* @__PURE__ */ o(
                  "button",
                  {
                    ref: ae && L && c ? W : null,
                    type: "button",
                    className: "w-full text-left px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-glass-light dark:hover:bg-glass-dark-light transition-colors focus:outline-none focus:bg-glass-light dark:focus:bg-glass-dark-light",
                    onClick: () => v(_.value),
                    role: "option",
                    "aria-selected": t === _.value,
                    children: _.label
                  },
                  _.value
                );
              }),
              U && L && c && /* @__PURE__ */ u("div", { className: "flex items-center justify-center py-2", children: [
                /* @__PURE__ */ o(et, { size: 14, className: "animate-spin mr-2" }),
                /* @__PURE__ */ o("span", { className: "text-xs text-gray-500", children: "Chargement..." })
              ] })
            ]
          }
        )
      ] })
    ] }),
    (w || x) && /* @__PURE__ */ o("p", { className: `mt-1 text-sm ${w ? "text-red-600 dark:text-red-400" : "text-gray-500 dark:text-gray-400"}`, children: w || x })
  ] });
};
function sa({
  data: e = [],
  columns: r = [],
  actions: t = [],
  title: s = "Table Interactive",
  itemsPerPage: n = 5,
  selectable: a = !0,
  onRowSelect: l,
  onRowClick: d,
  customFilters: i = null,
  filterConfig: f = [],
  onFilterChange: c
}) {
  const [g, $] = D(""), [w, x] = D("asc"), [I, j] = D(""), [E, P] = D([]), [F, B] = D(1), [U, p] = D(e), [L, M] = D({});
  Ne(() => {
    p(e);
  }, [e]);
  const Z = (h) => {
    const m = g === h && w === "asc" ? "desc" : "asc";
    $(h), x(m), p(
      (N) => [...N].sort((G, X) => G[h] < X[h] ? m === "asc" ? -1 : 1 : G[h] > X[h] ? m === "asc" ? 1 : -1 : 0)
    );
  }, ee = (h) => {
    const m = E.includes(h) ? E.filter((N) => N !== h) : [...E, h];
    if (P(m), l) {
      const N = U.filter(
        (G) => m.includes(G.id)
      );
      l(N);
    }
  }, re = (h) => {
    const m = h.target.checked ? v.map((N) => N.id) : [];
    if (P(m), l) {
      const N = U.filter(
        (G) => m.includes(G.id)
      );
      l(N);
    }
  }, b = (h) => {
    B(h);
  }, y = (h, m) => {
    const N = { ...L, [h]: m };
    M(N), c && c(N);
  }, k = Ne(() => {
    let h = U;
    if (I) {
      const m = r.filter((N) => N.searchable).map((N) => N.field);
      h = h.filter((N) => m.some(
        (G) => String(N[G]).toLowerCase().includes(I.toLowerCase())
      ));
    }
    return Object.entries(L).forEach(([m, N]) => {
      N != null && N !== "" && (h = h.filter((G) => Array.isArray(N) ? N.length === 0 || N.includes(G[m]) : G[m] === N));
    }), h;
  }, [U, I, r, L]), T = Math.ceil(k.length / n), v = Ne(() => {
    const h = (F - 1) * n;
    return k.slice(h, h + n);
  }, [k, F, n]);
  return /* @__PURE__ */ u("section", { className: "glass-card", children: [
    s && /* @__PURE__ */ o("h3", { className: "text-xl font-semibold mb-6", children: s }),
    /* @__PURE__ */ o("div", { className: "mb-6", children: /* @__PURE__ */ u("div", { className: "flex flex-col md:flex-row gap-4 mb-4 items-end", children: [
      /* @__PURE__ */ o("div", { className: "flex-1", children: /* @__PURE__ */ o(
        ir,
        {
          type: "text",
          placeholder: "Rechercher...",
          value: I,
          onChange: (h) => j(h.target.value),
          startIcon: /* @__PURE__ */ o(Ue, { size: 20 })
        }
      ) }),
      f && f.length > 0 && /* @__PURE__ */ o("div", { className: "flex flex-wrap gap-2 items-center", children: f.map((h) => /* @__PURE__ */ o("div", { className: "min-w-[150px]", children: /* @__PURE__ */ o(
        $o,
        {
          label: h.label,
          options: h.options,
          value: L[h.field] || "",
          onChange: (m) => y(h.field, m),
          placeholder: h.placeholder || `Sélectionner ${h.label}`
        }
      ) }, h.field)) }),
      i && /* @__PURE__ */ o("div", { className: "flex items-center", children: i })
    ] }) }),
    /* @__PURE__ */ o("div", { className: "overflow-x-auto", children: /* @__PURE__ */ u("table", { className: "w-full", children: [
      /* @__PURE__ */ o("thead", { children: /* @__PURE__ */ u("tr", { className: "border-b border-gray-200", children: [
        a && /* @__PURE__ */ o("th", { className: "text-left p-3 w-10", children: /* @__PURE__ */ o(
          St,
          {
            checked: v.length > 0 && v.every(
              (h) => E.includes(h.id)
            ),
            onChange: re
          }
        ) }),
        r.map((h) => /* @__PURE__ */ o(
          "th",
          {
            className: `text-left p-3 ${h.sortable ? "cursor-pointer hover:bg-gray-50" : ""}`,
            onClick: () => h.sortable && Z(h.field),
            children: /* @__PURE__ */ u("div", { className: "flex items-center gap-2", children: [
              h.header,
              h.sortable && g === h.field && (w === "asc" ? /* @__PURE__ */ o(Ut, { size: 16 }) : /* @__PURE__ */ o(ze, { size: 16 }))
            ] })
          },
          h.field
        )),
        t && t.length > 0 && /* @__PURE__ */ o("th", { className: "text-right p-3", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ o("tbody", { children: v.length === 0 ? /* @__PURE__ */ o("tr", { children: /* @__PURE__ */ o(
        "td",
        {
          colSpan: a ? r.length + (t.length > 0 ? 2 : 1) : r.length + (t.length > 0 ? 1 : 0),
          className: "p-6 text-center text-gray-500",
          children: "Aucune donnée disponible"
        }
      ) }) : v.map((h) => /* @__PURE__ */ u(
        "tr",
        {
          className: `border-b border-gray-100 hover:bg-gray-50 ${d ? "cursor-pointer" : ""}`,
          onClick: () => d && d(h),
          children: [
            a && /* @__PURE__ */ o("td", { className: "p-3", onClick: (m) => m.stopPropagation(), children: /* @__PURE__ */ o(
              St,
              {
                checked: E.includes(h.id),
                onChange: () => ee(h.id)
              }
            ) }),
            r.map((m) => /* @__PURE__ */ o("td", { className: "p-3", children: m.renderCell ? m.renderCell(h) : /* @__PURE__ */ o("span", { className: "text-gray-600", children: h[m.field] }) }, `${h.id}-${m.field}`)),
            t && t.length > 0 && /* @__PURE__ */ o(
              "td",
              {
                className: "p-3 text-right",
                onClick: (m) => m.stopPropagation(),
                children: /* @__PURE__ */ o("div", { className: "flex justify-end gap-1", children: t.map((m, N) => /* @__PURE__ */ o(
                  he,
                  {
                    onClick: () => m.onClick(h),
                    title: m.label,
                    children: m.icon
                  },
                  N
                )) })
              }
            )
          ]
        },
        h.id
      )) })
    ] }) }),
    E.length > 0 && /* @__PURE__ */ o("div", { className: "mt-4 p-3 bg-blue-50 rounded-lg", children: /* @__PURE__ */ u("p", { className: "text-sm text-blue-700", children: [
      E.length,
      " élément",
      E.length > 1 ? "s" : "",
      " ",
      "sélectionné",
      E.length > 1 ? "s" : ""
    ] }) }),
    k.length > n && /* @__PURE__ */ o("div", { className: "mt-6", children: /* @__PURE__ */ o(
      zo,
      {
        currentPage: F,
        totalPages: T,
        onPageChange: b,
        totalResults: k.length,
        resultsPerPage: n
      }
    ) })
  ] });
}
const oa = ({
  children: e,
  variant: r = "standard",
  htmlFor: t,
  className: s = ""
}) => {
  const n = {
    standard: "text-foreground",
    required: "text-red-600",
    optional: "text-gray-500"
  }, a = r === "required" ? /* @__PURE__ */ u(Bt, { children: [
    e,
    " ",
    /* @__PURE__ */ o("span", { className: "text-red-600", children: "*" })
  ] }) : e;
  return /* @__PURE__ */ o(
    "label",
    {
      htmlFor: t,
      className: `block text-sm font-medium mb-1 ${n[r]} ${s}`,
      children: a
    }
  );
}, Mo = ({
  children: e,
  className: r = "",
  variant: t = "default"
  // default, compact, spacious
}) => {
  const s = "flex-shrink-0 flex justify-end gap-3 border-t border-border bg-background", n = {
    default: "pt-4 pb-2 px-4",
    compact: "pt-2 pb-1 px-3",
    spacious: "pt-6 pb-4 px-6"
  }, a = [
    s,
    n[t] || n.default,
    r
  ].filter(Boolean).join(" ").trim();
  return /* @__PURE__ */ o("div", { className: a, children: e });
};
Mo.displayName = "ModalFooter";
const na = (e = "80vh") => Ne(() => ({
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
function aa({ type: e = "info", message: r, timestamp: t, onClose: s }) {
  const n = {
    info: /* @__PURE__ */ o(qe, { size: 20, className: "text-blue-500 mt-0.5" }),
    success: /* @__PURE__ */ o(pt, { size: 20, className: "text-green-500 mt-0.5" }),
    warning: /* @__PURE__ */ o(Ce, { size: 20, className: "text-yellow-500 mt-0.5" }),
    error: /* @__PURE__ */ o(ue, { size: 20, className: "text-red-500 mt-0.5" })
  };
  return /* @__PURE__ */ o("div", { className: `max-w-sm w-full p-4 rounded-lg shadow-lg ${{
    info: "bg-blue-50 border border-blue-200",
    success: "bg-green-50 border border-green-200",
    warning: "bg-yellow-50 border border-yellow-200",
    error: "bg-red-50 border border-red-200"
  }[e]}`, children: /* @__PURE__ */ u("div", { className: "flex items-start gap-3", children: [
    n[e],
    /* @__PURE__ */ u("div", { className: "flex-1", children: [
      /* @__PURE__ */ o("p", { className: "text-sm font-medium", children: r }),
      t && /* @__PURE__ */ o("p", { className: "text-xs text-gray-500 mt-1", children: new Date(t).toLocaleTimeString() })
    ] }),
    /* @__PURE__ */ o("button", { onClick: s, className: "text-gray-400 hover:text-gray-600", children: /* @__PURE__ */ o(ue, { size: 16 }) })
  ] }) });
}
function la({ value: e, label: r, showPercentage: t = !0 }) {
  const s = Math.max(0, Math.min(100, e));
  return /* @__PURE__ */ u("div", { children: [
    /* @__PURE__ */ u("div", { className: "flex justify-between mb-2", children: [
      r && /* @__PURE__ */ o("span", { className: "text-sm font-medium", children: r }),
      t && /* @__PURE__ */ u("span", { className: "text-sm text-gray-500", children: [
        s,
        "%"
      ] })
    ] }),
    /* @__PURE__ */ o(
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
function ia({ options: e, name: r, selectedValue: t, onChange: s }) {
  return /* @__PURE__ */ o("div", { className: "space-y-3", children: e.map((n) => /* @__PURE__ */ u("label", { className: "flex items-center space-x-3 cursor-pointer", children: [
    /* @__PURE__ */ u("div", { className: "relative", children: [
      /* @__PURE__ */ o(
        "input",
        {
          type: "radio",
          name: r,
          value: n.value,
          checked: t === n.value,
          onChange: (a) => s(a.target.value),
          className: "sr-only"
        }
      ),
      /* @__PURE__ */ o(
        "div",
        {
          className: `w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${t === n.value ? "bg-accent-500 border-accent-500" : "border-gray-300 bg-white"}`,
          children: t === n.value && /* @__PURE__ */ o("div", { className: "w-2.5 h-2.5 bg-white rounded-full transition-all duration-200" })
        }
      )
    ] }),
    /* @__PURE__ */ o("span", { className: "text-sm", children: n.label })
  ] }, n.value)) });
}
const ca = ({ title: e, children: r, variant: t = "default", className: s = "" }) => {
  const n = "glass-surface rounded-lg", a = {
    default: "p-6",
    highlighted: "p-8 border-2 border-accent-500",
    gradient: "p-4 bg-gradient-to-r from-blue-50 to-purple-50"
  }, l = [
    n,
    a[t] || a.default,
    s
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ u("div", { className: l, children: [
    e && /* @__PURE__ */ o("h4", { className: "font-medium mb-2", children: e }),
    /* @__PURE__ */ o("p", { className: "text-sm text-gray-600", children: r })
  ] });
};
function cr({
  item: e,
  isActive: r,
  isCollapsed: t = !1,
  onClick: s,
  level: n = 0,
  activePath: a = [],
  wrapper: l
}) {
  const [d, i] = D(() => {
    const w = e.resource || e.id;
    return a.includes(w);
  }), f = e.children && e.children.length > 0, c = e.icon, g = e.name || e.label;
  e.resource || e.id;
  const $ = de((w) => {
    f && (w.preventDefault(), i(!d)), s && s(e);
  }, [f, d, e, s]);
  return /* @__PURE__ */ u("div", { className: "w-full", children: [
    /* @__PURE__ */ u(
      "button",
      {
        onClick: $,
        className: `nav-item w-full text-left ${f ? "justify-between" : ""}`,
        children: [
          /* @__PURE__ */ u("div", { className: "flex items-center gap-2", children: [
            c && /* @__PURE__ */ o("div", { className: "flex h-6 w-6 items-center justify-center", children: /* @__PURE__ */ o(c, { size: 16 }) }),
            t ? "" : g
          ] }),
          f && /* @__PURE__ */ o(
            mt,
            {
              size: 16,
              className: `transform transition-transform ${d ? "rotate-90" : ""}`
            }
          )
        ]
      }
    ),
    f && d && !t && /* @__PURE__ */ o("div", { className: "ml-4 mt-1 space-y-1 border-l pl-2 border-primary-100 dark:border-primary-800", children: e.children.map((w) => {
      const x = w.id, I = /* @__PURE__ */ o(
        cr,
        {
          item: w,
          isActive: a.includes(x),
          isCollapsed: t,
          onClick: s,
          level: n + 1,
          activePath: a,
          wrapper: l
        },
        x
      );
      if (l) {
        const j = l(I, w);
        return j && j.key !== void 0 && j.key !== null ? j : /* @__PURE__ */ o("div", { children: j }, x);
      } else
        return I;
    }) })
  ] });
}
function da({
  items: e = [],
  isCollapsed: r = !1,
  onNavigate: t,
  activePath: s = [],
  className: n = "",
  wrapper: a
}) {
  const l = de((i) => {
    t && t(i);
  }, [t]), d = (i) => {
    const f = i.resource || i.id, c = /* @__PURE__ */ o(
      cr,
      {
        item: i,
        isActive: s.includes(f),
        isCollapsed: r,
        onClick: l,
        activePath: s,
        wrapper: a
      },
      f
    );
    return a ? a(c, i) : c;
  };
  return /* @__PURE__ */ o("nav", { className: `space-y-1 ${n}`, children: e.map((i) => {
    const f = i.resource || i.id;
    return /* @__PURE__ */ o("div", { children: d(i) }, f);
  }) });
}
function ua({ className: e, ...r }) {
  const s = ["animate-pulse rounded-md bg-gray-300 dark:bg-gray-700", e].filter(Boolean).join(" ");
  return /* @__PURE__ */ o(
    "div",
    {
      className: s,
      ...r
    }
  );
}
function ma({ message: e, time: r, onDismiss: t }) {
  return /* @__PURE__ */ u("div", { className: "flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg", children: [
    /* @__PURE__ */ u("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ o(Ft, { size: 16, className: "text-blue-600" }),
      /* @__PURE__ */ u("div", { children: [
        /* @__PURE__ */ o("p", { className: "text-sm font-medium", children: e }),
        r && /* @__PURE__ */ u("p", { className: "text-xs text-gray-500", children: [
          "il y a ",
          r
        ] })
      ] })
    ] }),
    /* @__PURE__ */ o(
      "button",
      {
        onClick: t,
        className: "p-1 hover:bg-blue-100 rounded",
        children: /* @__PURE__ */ o(ue, { size: 16 })
      }
    )
  ] });
}
const It = {
  sm: "h-4 w-4",
  md: "h-8 w-8",
  lg: "h-12 w-12"
}, jt = {
  sm: "h-1.5 w-1.5",
  md: "h-2 w-2",
  lg: "h-3 w-3"
};
function pa({ type: e = "spin", size: r = "md" }) {
  if (e === "dots") {
    const s = jt[r] || jt.md;
    return /* @__PURE__ */ u("div", { className: "flex space-x-1", children: [
      /* @__PURE__ */ o("div", { className: `${s} bg-accent-500 rounded-full animate-bounce` }),
      /* @__PURE__ */ o(
        "div",
        {
          className: `${s} bg-accent-500 rounded-full animate-bounce`,
          style: { animationDelay: "0.1s" }
        }
      ),
      /* @__PURE__ */ o(
        "div",
        {
          className: `${s} bg-accent-500 rounded-full animate-bounce`,
          style: { animationDelay: "0.2s" }
        }
      )
    ] });
  }
  const t = It[r] || It.md;
  return e === "pulse" ? /* @__PURE__ */ o("div", { className: `animate-pulse ${t} bg-accent-500 rounded-full` }) : /* @__PURE__ */ o(
    "div",
    {
      className: `animate-spin rounded-full ${t} border-4 border-accent-500 border-t-transparent`
    }
  );
}
const fa = ({
  direction: e = "vertical",
  spacing: r = 4,
  children: t,
  className: s = "",
  as: n = "div",
  ...a
}) => {
  const l = "flex", d = e === "vertical" ? "flex-col" : "flex-row", i = `gap-${r}`, f = [
    l,
    d,
    i,
    s
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ o(n, { className: f, ...a, children: t });
};
function ha({ title: e, value: r, change: t, trend: s }) {
  return /* @__PURE__ */ u("div", { className: "glass-surface p-4 rounded-lg", children: [
    /* @__PURE__ */ u("div", { className: "flex items-center justify-between mb-2", children: [
      /* @__PURE__ */ o("h4", { className: "text-sm font-medium text-gray-600", children: e }),
      s === "up" ? /* @__PURE__ */ o(vs, { size: 16, className: "text-green-500" }) : /* @__PURE__ */ o(xs, { size: 16, className: "text-red-500" })
    ] }),
    /* @__PURE__ */ o("p", { className: "text-2xl font-bold mb-1", children: r }),
    /* @__PURE__ */ u(
      "p",
      {
        className: `text-sm ${s === "up" ? "text-green-600" : "text-red-600"}`,
        children: [
          t,
          " ce mois"
        ]
      }
    )
  ] });
}
function ga({ steps: e, currentStep: r }) {
  return /* @__PURE__ */ o("div", { className: "flex items-center mb-6", children: e.map((t, s) => /* @__PURE__ */ u("div", { className: "flex items-center", children: [
    /* @__PURE__ */ o(
      "div",
      {
        className: `flex items-center justify-center w-8 h-8 rounded-full border-2 ${r >= t.id ? "bg-accent-500 border-accent-500 text-white" : "border-gray-300 text-gray-400"}`,
        children: r > t.id ? /* @__PURE__ */ o(ut, { size: 16 }) : t.id
      }
    ),
    /* @__PURE__ */ u("div", { className: "ml-2 mr-4", children: [
      /* @__PURE__ */ o("div", { className: "text-sm font-medium", children: t.title }),
      /* @__PURE__ */ o("div", { className: "text-xs text-gray-500", children: t.description })
    ] }),
    s < e.length - 1 && /* @__PURE__ */ o(
      "div",
      {
        className: `w-16 h-0.5 ${r > t.id ? "bg-accent-500" : "bg-gray-300"}`
      }
    )
  ] }, t.id)) });
}
var Rt = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, se = (e) => !e || typeof e != "object" || Object.keys(e).length === 0, So = (e, r) => JSON.stringify(e) === JSON.stringify(r);
function dr(e, r) {
  e.forEach(function(t) {
    Array.isArray(t) ? dr(t, r) : r.push(t);
  });
}
function ur(e) {
  let r = [];
  return dr(e, r), r;
}
var mr = (...e) => ur(e).filter(Boolean), pr = (e, r) => {
  let t = {}, s = Object.keys(e), n = Object.keys(r);
  for (let a of s) if (n.includes(a)) {
    let l = e[a], d = r[a];
    Array.isArray(l) || Array.isArray(d) ? t[a] = mr(d, l) : typeof l == "object" && typeof d == "object" ? t[a] = pr(l, d) : t[a] = d + " " + l;
  } else t[a] = e[a];
  for (let a of n) s.includes(a) || (t[a] = r[a]);
  return t;
}, Et = (e) => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim();
const gt = "-", Ao = (e) => {
  const r = Io(e), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: s
  } = e;
  return {
    getClassGroupId: (l) => {
      const d = l.split(gt);
      return d[0] === "" && d.length !== 1 && d.shift(), fr(d, r) || To(l);
    },
    getConflictingClassGroupIds: (l, d) => {
      const i = t[l] || [];
      return d && s[l] ? [...i, ...s[l]] : i;
    }
  };
}, fr = (e, r) => {
  var l;
  if (e.length === 0)
    return r.classGroupId;
  const t = e[0], s = r.nextPart.get(t), n = s ? fr(e.slice(1), s) : void 0;
  if (n)
    return n;
  if (r.validators.length === 0)
    return;
  const a = e.join(gt);
  return (l = r.validators.find(({
    validator: d
  }) => d(a))) == null ? void 0 : l.classGroupId;
}, Pt = /^\[(.+)\]$/, To = (e) => {
  if (Pt.test(e)) {
    const r = Pt.exec(e)[1], t = r == null ? void 0 : r.substring(0, r.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}, Io = (e) => {
  const {
    theme: r,
    classGroups: t
  } = e, s = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const n in t)
    ot(t[n], s, n, r);
  return s;
}, ot = (e, r, t, s) => {
  e.forEach((n) => {
    if (typeof n == "string") {
      const a = n === "" ? r : _t(r, n);
      a.classGroupId = t;
      return;
    }
    if (typeof n == "function") {
      if (jo(n)) {
        ot(n(s), r, t, s);
        return;
      }
      r.validators.push({
        validator: n,
        classGroupId: t
      });
      return;
    }
    Object.entries(n).forEach(([a, l]) => {
      ot(l, _t(r, a), t, s);
    });
  });
}, _t = (e, r) => {
  let t = e;
  return r.split(gt).forEach((s) => {
    t.nextPart.has(s) || t.nextPart.set(s, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(s);
  }), t;
}, jo = (e) => e.isThemeGetter, Ro = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let r = 0, t = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
  const n = (a, l) => {
    t.set(a, l), r++, r > e && (r = 0, s = t, t = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let l = t.get(a);
      if (l !== void 0)
        return l;
      if ((l = s.get(a)) !== void 0)
        return n(a, l), l;
    },
    set(a, l) {
      t.has(a) ? t.set(a, l) : n(a, l);
    }
  };
}, nt = "!", at = ":", Eo = at.length, Po = (e) => {
  const {
    prefix: r,
    experimentalParseClassName: t
  } = e;
  let s = (n) => {
    const a = [];
    let l = 0, d = 0, i = 0, f;
    for (let x = 0; x < n.length; x++) {
      let I = n[x];
      if (l === 0 && d === 0) {
        if (I === at) {
          a.push(n.slice(i, x)), i = x + Eo;
          continue;
        }
        if (I === "/") {
          f = x;
          continue;
        }
      }
      I === "[" ? l++ : I === "]" ? l-- : I === "(" ? d++ : I === ")" && d--;
    }
    const c = a.length === 0 ? n : n.substring(i), g = _o(c), $ = g !== c, w = f && f > i ? f - i : void 0;
    return {
      modifiers: a,
      hasImportantModifier: $,
      baseClassName: g,
      maybePostfixModifierPosition: w
    };
  };
  if (r) {
    const n = r + at, a = s;
    s = (l) => l.startsWith(n) ? a(l.substring(n.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: l,
      maybePostfixModifierPosition: void 0
    };
  }
  if (t) {
    const n = s;
    s = (a) => t({
      className: a,
      parseClassName: n
    });
  }
  return s;
}, _o = (e) => e.endsWith(nt) ? e.substring(0, e.length - 1) : e.startsWith(nt) ? e.substring(1) : e, Lo = (e) => {
  const r = Object.fromEntries(e.orderSensitiveModifiers.map((s) => [s, !0]));
  return (s) => {
    if (s.length <= 1)
      return s;
    const n = [];
    let a = [];
    return s.forEach((l) => {
      l[0] === "[" || r[l] ? (n.push(...a.sort(), l), a = []) : a.push(l);
    }), n.push(...a.sort()), n;
  };
}, Go = (e) => ({
  cache: Ro(e.cacheSize),
  parseClassName: Po(e),
  sortModifiers: Lo(e),
  ...Ao(e)
}), Vo = /\s+/, Bo = (e, r) => {
  const {
    parseClassName: t,
    getClassGroupId: s,
    getConflictingClassGroupIds: n,
    sortModifiers: a
  } = r, l = [], d = e.trim().split(Vo);
  let i = "";
  for (let f = d.length - 1; f >= 0; f -= 1) {
    const c = d[f], {
      isExternal: g,
      modifiers: $,
      hasImportantModifier: w,
      baseClassName: x,
      maybePostfixModifierPosition: I
    } = t(c);
    if (g) {
      i = c + (i.length > 0 ? " " + i : i);
      continue;
    }
    let j = !!I, E = s(j ? x.substring(0, I) : x);
    if (!E) {
      if (!j) {
        i = c + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (E = s(x), !E) {
        i = c + (i.length > 0 ? " " + i : i);
        continue;
      }
      j = !1;
    }
    const P = a($).join(":"), F = w ? P + nt : P, B = F + E;
    if (l.includes(B))
      continue;
    l.push(B);
    const U = n(E, j);
    for (let p = 0; p < U.length; ++p) {
      const L = U[p];
      l.push(F + L);
    }
    i = c + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function Do() {
  let e = 0, r, t, s = "";
  for (; e < arguments.length; )
    (r = arguments[e++]) && (t = hr(r)) && (s && (s += " "), s += t);
  return s;
}
const hr = (e) => {
  if (typeof e == "string")
    return e;
  let r, t = "";
  for (let s = 0; s < e.length; s++)
    e[s] && (r = hr(e[s])) && (t && (t += " "), t += r);
  return t;
};
function lt(e, ...r) {
  let t, s, n, a = l;
  function l(i) {
    const f = r.reduce((c, g) => g(c), e());
    return t = Go(f), s = t.cache.get, n = t.cache.set, a = d, d(i);
  }
  function d(i) {
    const f = s(i);
    if (f)
      return f;
    const c = Bo(i, t);
    return n(i, c), c;
  }
  return function() {
    return a(Do.apply(null, arguments));
  };
}
const Y = (e) => {
  const r = (t) => t[e] || [];
  return r.isThemeGetter = !0, r;
}, gr = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, br = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Oo = /^\d+\/\d+$/, Fo = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Uo = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ho = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, qo = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Wo = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ke = (e) => Oo.test(e), O = (e) => !!e && !Number.isNaN(Number(e)), be = (e) => !!e && Number.isInteger(Number(e)), Lt = (e) => e.endsWith("%") && O(e.slice(0, -1)), fe = (e) => Fo.test(e), Zo = () => !0, Ko = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Uo.test(e) && !Ho.test(e)
), bt = () => !1, Jo = (e) => qo.test(e), Xo = (e) => Wo.test(e), Qo = (e) => !S(e) && !A(e), Yo = (e) => Se(e, vr, bt), S = (e) => gr.test(e), xe = (e) => Se(e, wr, Ko), Je = (e) => Se(e, un, O), en = (e) => Se(e, xr, bt), tn = (e) => Se(e, yr, Xo), rn = (e) => Se(e, bt, Jo), A = (e) => br.test(e), De = (e) => Ae(e, wr), sn = (e) => Ae(e, mn), on = (e) => Ae(e, xr), nn = (e) => Ae(e, vr), an = (e) => Ae(e, yr), ln = (e) => Ae(e, pn, !0), Se = (e, r, t) => {
  const s = gr.exec(e);
  return s ? s[1] ? r(s[1]) : t(s[2]) : !1;
}, Ae = (e, r, t = !1) => {
  const s = br.exec(e);
  return s ? s[1] ? r(s[1]) : t : !1;
}, xr = (e) => e === "position", cn = /* @__PURE__ */ new Set(["image", "url"]), yr = (e) => cn.has(e), dn = /* @__PURE__ */ new Set(["length", "size", "percentage"]), vr = (e) => dn.has(e), wr = (e) => e === "length", un = (e) => e === "number", mn = (e) => e === "family-name", pn = (e) => e === "shadow", it = () => {
  const e = Y("color"), r = Y("font"), t = Y("text"), s = Y("font-weight"), n = Y("tracking"), a = Y("leading"), l = Y("breakpoint"), d = Y("container"), i = Y("spacing"), f = Y("radius"), c = Y("shadow"), g = Y("inset-shadow"), $ = Y("drop-shadow"), w = Y("blur"), x = Y("perspective"), I = Y("aspect"), j = Y("ease"), E = Y("animate"), P = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], F = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], B = () => ["auto", "hidden", "clip", "visible", "scroll"], U = () => ["auto", "contain", "none"], p = () => [A, S, i], L = () => [ke, "full", "auto", ...p()], M = () => [be, "none", "subgrid", A, S], Z = () => ["auto", {
    span: ["full", be, A, S]
  }, A, S], ee = () => [be, "auto", A, S], re = () => ["auto", "min", "max", "fr", A, S], b = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline"], y = () => ["start", "end", "center", "stretch"], k = () => ["auto", ...p()], T = () => [ke, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...p()], v = () => [e, A, S], h = () => [Lt, xe], m = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    f,
    A,
    S
  ], N = () => ["", O, De, xe], G = () => ["solid", "dashed", "dotted", "double"], X = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], K = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    w,
    A,
    S
  ], q = () => ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", A, S], W = () => ["none", O, A, S], te = () => ["none", O, A, S], _ = () => [O, A, S], R = () => [ke, "full", ...p()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [fe],
      breakpoint: [fe],
      color: [Zo],
      container: [fe],
      "drop-shadow": [fe],
      ease: ["in", "out", "in-out"],
      font: [Qo],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [fe],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [fe],
      shadow: [fe],
      spacing: ["px", O],
      text: [fe],
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
        aspect: ["auto", "square", ke, S, A, I]
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
        columns: [O, S, A, d]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": P()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": P()
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
        object: [...F(), S, A]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: B()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": B()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": B()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: U()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": U()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": U()
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
        inset: L()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": L()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": L()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: L()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: L()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: L()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: L()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: L()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: L()
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
        z: [be, "auto", A, S]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [ke, "full", "auto", d, ...p()]
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
        flex: [O, ke, "auto", "initial", "none", S]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", O, A, S]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", O, A, S]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [be, "first", "last", "none", A, S]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": M()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: Z()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": ee()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": ee()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": M()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: Z()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": ee()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": ee()
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
        "auto-cols": re()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": re()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: p()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": p()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": p()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...b(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...y(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...y()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...b()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...y(), "baseline"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...y(), "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": b()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...y(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...y()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: p()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: p()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: p()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: p()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: p()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: p()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: p()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: p()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: p()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: k()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: k()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: k()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: k()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: k()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: k()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: k()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: k()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: k()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": p()
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
        "space-y": p()
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
        size: T()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [d, "screen", ...T()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          d,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...T()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          d,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [l]
          },
          ...T()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", ...T()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "none", ...T()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", ...T()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", t, De, xe]
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
        font: [s, A, Je]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Lt, S]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [sn, S, r]
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
        tracking: [n, A, S]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [O, "none", A, Je]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          a,
          ...p()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", A, S]
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
        list: ["disc", "decimal", "none", A, S]
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
        placeholder: v()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: v()
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
        decoration: [...G(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [O, "from-font", "auto", A, xe]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: v()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [O, "auto", A, S]
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
        indent: p()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", A, S]
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
        content: ["none", A, S]
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
        bg: [...F(), on, en]
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
        bg: ["auto", "cover", "contain", nn, Yo]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, be, A, S],
          radial: ["", A, S],
          conic: [be, A, S]
        }, an, tn]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: v()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: h()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: h()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: h()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: v()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: v()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: v()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: m()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": m()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": m()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": m()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": m()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": m()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": m()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": m()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": m()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": m()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": m()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": m()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": m()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": m()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": m()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: N()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": N()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": N()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": N()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": N()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": N()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": N()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": N()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": N()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": N()
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
        "divide-y": N()
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
        border: [...G(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...G(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: v()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": v()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": v()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": v()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": v()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": v()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": v()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": v()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": v()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: v()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...G(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [O, A, S]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", O, De, xe]
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
          c,
          ln,
          rn
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: v()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", A, S, g]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": v()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: N()
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
        ring: v()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [O, xe]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": v()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": N()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": v()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [O, A, S]
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
          A,
          S
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: K()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [O, A, S]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [O, A, S]
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
          $,
          A,
          S
        ]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", O, A, S]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [O, A, S]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", O, A, S]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [O, A, S]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", O, A, S]
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
          A,
          S
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": K()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [O, A, S]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [O, A, S]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", O, A, S]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [O, A, S]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", O, A, S]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [O, A, S]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [O, A, S]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", O, A, S]
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
        "border-spacing": p()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": p()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": p()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", A, S]
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
        duration: [O, "initial", A, S]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", j, A, S]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [O, A, S]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", E, A, S]
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
        perspective: [x, A, S]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": q()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: W()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": W()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": W()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": W()
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
        skew: _()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": _()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": _()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [A, S, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: q()
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
        translate: R()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": R()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": R()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": R()
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
        accent: v()
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
        caret: v()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", A, S]
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
        "scroll-m": p()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": p()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": p()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": p()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": p()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": p()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": p()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": p()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": p()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": p()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": p()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": p()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": p()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": p()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": p()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": p()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": p()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": p()
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
        "will-change": ["auto", "scroll", "contents", "transform", A, S]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...v()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [O, De, xe, Je]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...v()]
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
}, fn = (e, {
  cacheSize: r,
  prefix: t,
  experimentalParseClassName: s,
  extend: n = {},
  override: a = {}
}) => (Re(e, "cacheSize", r), Re(e, "prefix", t), Re(e, "experimentalParseClassName", s), Oe(e.theme, a.theme), Oe(e.classGroups, a.classGroups), Oe(e.conflictingClassGroups, a.conflictingClassGroups), Oe(e.conflictingClassGroupModifiers, a.conflictingClassGroupModifiers), Re(e, "orderSensitiveModifiers", a.orderSensitiveModifiers), Fe(e.theme, n.theme), Fe(e.classGroups, n.classGroups), Fe(e.conflictingClassGroups, n.conflictingClassGroups), Fe(e.conflictingClassGroupModifiers, n.conflictingClassGroupModifiers), kr(e, n, "orderSensitiveModifiers"), e), Re = (e, r, t) => {
  t !== void 0 && (e[r] = t);
}, Oe = (e, r) => {
  if (r)
    for (const t in r)
      Re(e, t, r[t]);
}, Fe = (e, r) => {
  if (r)
    for (const t in r)
      kr(e, r, t);
}, kr = (e, r, t) => {
  const s = r[t];
  s !== void 0 && (e[t] = e[t] ? e[t].concat(s) : s);
}, hn = (e, ...r) => typeof e == "function" ? lt(it, e, ...r) : lt(() => fn(it(), e), ...r), gn = /* @__PURE__ */ lt(it);
var bn = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, Nr = (e) => e || void 0, Ee = (...e) => Nr(ur(e).filter(Boolean).join(" ")), Xe = null, ie = {}, ct = !1, je = (...e) => (r) => r.twMerge ? ((!Xe || ct) && (ct = !1, Xe = se(ie) ? gn : hn({ ...ie, extend: { theme: ie.theme, classGroups: ie.classGroups, conflictingClassGroupModifiers: ie.conflictingClassGroupModifiers, conflictingClassGroups: ie.conflictingClassGroups, ...ie.extend } })), Nr(Xe(Ee(e)))) : Ee(e), Gt = (e, r) => {
  for (let t in r) e.hasOwnProperty(t) ? e[t] = Ee(e[t], r[t]) : e[t] = r[t];
  return e;
}, Te = (e, r) => {
  let { extend: t = null, slots: s = {}, variants: n = {}, compoundVariants: a = [], compoundSlots: l = [], defaultVariants: d = {} } = e, i = { ...bn, ...r }, f = t != null && t.base ? Ee(t.base, e == null ? void 0 : e.base) : e == null ? void 0 : e.base, c = t != null && t.variants && !se(t.variants) ? pr(n, t.variants) : n, g = t != null && t.defaultVariants && !se(t.defaultVariants) ? { ...t.defaultVariants, ...d } : d;
  !se(i.twMergeConfig) && !So(i.twMergeConfig, ie) && (ct = !0, ie = i.twMergeConfig);
  let $ = se(t == null ? void 0 : t.slots), w = se(s) ? {} : { base: Ee(e == null ? void 0 : e.base, $ && (t == null ? void 0 : t.base)), ...s }, x = $ ? w : Gt({ ...t == null ? void 0 : t.slots }, se(w) ? { base: e == null ? void 0 : e.base } : w), I = se(t == null ? void 0 : t.compoundVariants) ? a : mr(t == null ? void 0 : t.compoundVariants, a), j = (P) => {
    if (se(c) && se(s) && $) return je(f, P == null ? void 0 : P.class, P == null ? void 0 : P.className)(i);
    if (I && !Array.isArray(I)) throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof I}`);
    if (l && !Array.isArray(l)) throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof l}`);
    let F = (b, y, k = [], T) => {
      let v = k;
      if (typeof y == "string") v = v.concat(Et(y).split(" ").map((h) => `${b}:${h}`));
      else if (Array.isArray(y)) v = v.concat(y.reduce((h, m) => h.concat(`${b}:${m}`), []));
      else if (typeof y == "object" && typeof T == "string") {
        for (let h in y) if (y.hasOwnProperty(h) && h === T) {
          let m = y[h];
          if (m && typeof m == "string") {
            let N = Et(m);
            v[T] ? v[T] = v[T].concat(N.split(" ").map((G) => `${b}:${G}`)) : v[T] = N.split(" ").map((G) => `${b}:${G}`);
          } else Array.isArray(m) && m.length > 0 && (v[T] = m.reduce((N, G) => N.concat(`${b}:${G}`), []));
        }
      }
      return v;
    }, B = (b, y = c, k = null, T = null) => {
      var v;
      let h = y[b];
      if (!h || se(h)) return null;
      let m = (v = T == null ? void 0 : T[b]) != null ? v : P == null ? void 0 : P[b];
      if (m === null) return null;
      let N = Rt(m), G = Array.isArray(i.responsiveVariants) && i.responsiveVariants.length > 0 || i.responsiveVariants === !0, X = g == null ? void 0 : g[b], K = [];
      if (typeof N == "object" && G) for (let [te, _] of Object.entries(N)) {
        let R = h[_];
        if (te === "initial") {
          X = _;
          continue;
        }
        Array.isArray(i.responsiveVariants) && !i.responsiveVariants.includes(te) || (K = F(te, R, K, k));
      }
      let q = N != null && typeof N != "object" ? N : Rt(X), W = h[q || "false"];
      return typeof K == "object" && typeof k == "string" && K[k] ? Gt(K, W) : K.length > 0 ? (K.push(W), k === "base" ? K.join(" ") : K) : W;
    }, U = () => c ? Object.keys(c).map((b) => B(b, c)) : null, p = (b, y) => {
      if (!c || typeof c != "object") return null;
      let k = new Array();
      for (let T in c) {
        let v = B(T, c, b, y), h = b === "base" && typeof v == "string" ? v : v && v[b];
        h && (k[k.length] = h);
      }
      return k;
    }, L = {};
    for (let b in P) P[b] !== void 0 && (L[b] = P[b]);
    let M = (b, y) => {
      var k;
      let T = typeof (P == null ? void 0 : P[b]) == "object" ? { [b]: (k = P[b]) == null ? void 0 : k.initial } : {};
      return { ...g, ...L, ...T, ...y };
    }, Z = (b = [], y) => {
      let k = [];
      for (let { class: T, className: v, ...h } of b) {
        let m = !0;
        for (let [N, G] of Object.entries(h)) {
          let X = M(N, y)[N];
          if (Array.isArray(G)) {
            if (!G.includes(X)) {
              m = !1;
              break;
            }
          } else {
            let K = (q) => q == null || q === !1;
            if (K(G) && K(X)) continue;
            if (X !== G) {
              m = !1;
              break;
            }
          }
        }
        m && (T && k.push(T), v && k.push(v));
      }
      return k;
    }, ee = (b) => {
      let y = Z(I, b);
      if (!Array.isArray(y)) return y;
      let k = {};
      for (let T of y) if (typeof T == "string" && (k.base = je(k.base, T)(i)), typeof T == "object") for (let [v, h] of Object.entries(T)) k[v] = je(k[v], h)(i);
      return k;
    }, re = (b) => {
      if (l.length < 1) return null;
      let y = {};
      for (let { slots: k = [], class: T, className: v, ...h } of l) {
        if (!se(h)) {
          let m = !0;
          for (let N of Object.keys(h)) {
            let G = M(N, b)[N];
            if (G === void 0 || (Array.isArray(h[N]) ? !h[N].includes(G) : h[N] !== G)) {
              m = !1;
              break;
            }
          }
          if (!m) continue;
        }
        for (let m of k) y[m] = y[m] || [], y[m].push([T, v]);
      }
      return y;
    };
    if (!se(s) || !$) {
      let b = {};
      if (typeof x == "object" && !se(x)) for (let y of Object.keys(x)) b[y] = (k) => {
        var T, v;
        return je(x[y], p(y, k), ((T = ee(k)) != null ? T : [])[y], ((v = re(k)) != null ? v : [])[y], k == null ? void 0 : k.class, k == null ? void 0 : k.className)(i);
      };
      return b;
    }
    return je(f, U(), Z(I), P == null ? void 0 : P.class, P == null ? void 0 : P.className)(i);
  }, E = () => {
    if (!(!c || typeof c != "object")) return Object.keys(c);
  };
  return j.variantKeys = E(), j.extend = t, j.base = f, j.slots = x, j.variants = c, j.defaultVariants = g, j.compoundSlots = l, j.compoundVariants = I, j;
};
const xn = Te({
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
}), yn = J.forwardRef(({ children: e, isCompact: r, className: t, ...s }, n) => {
  const { wrapper: a, table: l } = xn({ isCompact: r });
  return /* @__PURE__ */ o("div", { className: a({ class: t }), children: /* @__PURE__ */ o("table", { ref: n, className: l(), ...s, children: e }) });
});
yn.displayName = "Table";
const vn = Te({
  slots: {
    base: "group/tbody"
  }
}), wn = J.forwardRef(({ children: e, className: r, ...t }, s) => {
  const { base: n } = vn();
  return /* @__PURE__ */ o("tbody", { ref: s, className: n({ class: r }), ...t, children: e });
});
wn.displayName = "TableBody";
const kn = Te({
  slots: {
    base: "group/td p-4"
  }
}), Nn = J.forwardRef(({ children: e, className: r, ...t }, s) => {
  const { base: n } = kn();
  return /* @__PURE__ */ o("td", { ref: s, className: n({ class: r }), ...t, children: e });
});
Nn.displayName = "TableCell";
const Cn = Te({
  slots: {
    base: "group/th p-4 text-left text-sm font-semibold text-base-content/80 bg-base-200/50"
  }
}), zn = J.forwardRef(({ children: e, className: r, ...t }, s) => {
  const { base: n } = Cn();
  return /* @__PURE__ */ o("th", { ref: s, className: n({ class: r }), ...t, children: e });
});
zn.displayName = "TableColumn";
const $n = Te({
  slots: {
    base: "group/thead"
  }
}), Mn = J.forwardRef(({ children: e, className: r, ...t }, s) => {
  const { base: n } = $n();
  return /* @__PURE__ */ o("thead", { ref: s, className: n({ class: r }), ...t, children: e });
});
Mn.displayName = "TableHeader";
const Sn = Te({
  slots: {
    base: "group/tr border-b border-base-200 last:border-b-0 hover:bg-base-200/50"
  }
}), An = J.forwardRef(({ children: e, className: r, ...t }, s) => {
  const { base: n } = Sn();
  return /* @__PURE__ */ o("tr", { ref: s, className: n({ class: r }), ...t, children: e });
});
An.displayName = "TableRow";
function ba({ tabs: e }) {
  var s;
  const [r, t] = D(e && e.length > 0 ? e[0].id : null);
  return !e || e.length === 0 ? null : /* @__PURE__ */ u("div", { children: [
    /* @__PURE__ */ o("div", { className: "border-b border-gray-200 mb-4", children: /* @__PURE__ */ o("nav", { className: "flex space-x-8", children: e.map((n) => /* @__PURE__ */ o(
      "button",
      {
        onClick: () => t(n.id),
        className: `py-2 px-1 border-b-2 font-medium text-sm transition-colors ${r === n.id ? "border-accent-500 text-accent-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`,
        children: n.label
      },
      n.id
    )) }) }),
    /* @__PURE__ */ o("div", { className: "py-4", children: (s = e.find((n) => n.id === r)) == null ? void 0 : s.content })
  ] });
}
function xa({ label: e, name: r, value: t, onChange: s, placeholder: n, maxLength: a, className: l, ...d }) {
  return /* @__PURE__ */ u("div", { children: [
    e && /* @__PURE__ */ o("label", { htmlFor: r, className: "block text-sm font-medium mb-2", children: e }),
    /* @__PURE__ */ o(
      "textarea",
      {
        id: r,
        name: r,
        value: t,
        onChange: s,
        placeholder: n,
        className: `input-fluid min-h-[120px] resize-y ${l || ""}`,
        maxLength: a,
        ...d
      }
    ),
    a && /* @__PURE__ */ u("p", { className: "text-sm text-gray-500 mt-1", children: [
      t.length,
      "/",
      a,
      " caractères"
    ] })
  ] });
}
const ye = "fluid-glass-theme";
function Tn(e = {}) {
  const [r, t] = D("light"), [s, n] = D(!1);
  oe(() => {
    n(!0);
    const c = localStorage.getItem(ye);
    if (c && (c === "light" || c === "dark"))
      t(c);
    else if (e.mode === "auto") {
      const $ = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      t($), localStorage.setItem(ye, $);
    } else {
      const g = e.mode || "light";
      t(g), localStorage.setItem(ye, g);
    }
  }, [e.mode]);
  const a = () => {
    const c = r === "light" ? "dark" : "light";
    t(c), document.documentElement.setAttribute("data-theme", c), localStorage.setItem(ye, c);
  }, l = (c) => {
    (c === "light" || c === "dark") && (t(c), document.documentElement.setAttribute("data-theme", c), localStorage.setItem(ye, c));
  }, d = () => {
    if (localStorage.removeItem(ye), e.mode === "auto") {
      const g = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      t(g), document.documentElement.setAttribute("data-theme", g);
    }
  }, i = (c) => {
    const g = document.documentElement;
    Object.entries(c).forEach(([$, w]) => {
      const x = `--fg-${$.replace(/([A-Z])/g, "-$1").toLowerCase()}`;
      g.style.setProperty(x, w.toString());
    });
  }, f = () => {
    const c = document.documentElement;
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
    ].forEach(($) => {
      c.style.removeProperty($);
    });
  };
  return oe(() => {
    s && document.documentElement.setAttribute("data-theme", r);
  }, [r, s]), oe(() => {
    e.config && s && i(e.config);
  }, [e.config, s]), oe(() => {
    if (e.mode === "auto" && s) {
      const c = window.matchMedia("(prefers-color-scheme: dark)"), g = ($) => {
        if (!localStorage.getItem(ye)) {
          const x = $.matches ? "dark" : "light";
          t(x), document.documentElement.setAttribute("data-theme", x);
        }
      };
      return c.addEventListener("change", g), () => {
        c.removeEventListener("change", g);
      };
    }
  }, [e.mode, s]), {
    theme: r,
    toggleTheme: a,
    setTheme: l,
    clearSavedTheme: d,
    applyTheme: i,
    resetTheme: f,
    mounted: s
  };
}
const Cr = He();
function ya({ children: e, mode: r = "auto", config: t }) {
  const s = Tn({ mode: r, config: t });
  return /* @__PURE__ */ o(Cr.Provider, { value: s, children: e });
}
function In() {
  const e = dt(Cr);
  if (!e)
    throw new Error("useThemeContext doit être utilisé dans un ThemeProvider");
  return e;
}
function Vt({ showLabel: e = !0 }) {
  const { theme: r, toggleTheme: t } = In();
  return e ? /* @__PURE__ */ o(
    ve,
    {
      onClick: t,
      "aria-label": `Passer au mode ${r === "light" ? "sombre" : "clair"}`,
      startIcon: r === "light" ? /* @__PURE__ */ o(yt, { size: 16 }) : /* @__PURE__ */ o(vt, { size: 16 }),
      children: e && (r === "light" ? "Mode sombre" : "Mode clair")
    }
  ) : /* @__PURE__ */ o(
    he,
    {
      onClick: t,
      "aria-label": `Passer au mode ${r === "light" ? "sombre" : "clair"}`,
      icon: r === "light" ? /* @__PURE__ */ o(yt, { size: 16 }) : /* @__PURE__ */ o(vt, { size: 16 })
    }
  );
}
const jn = (e) => {
  switch (e) {
    case "user":
      return /* @__PURE__ */ o(Wt, { size: 16, className: "text-white" });
    case "order":
      return /* @__PURE__ */ o(Ye, { size: 16, className: "text-white" });
    case "update":
      return /* @__PURE__ */ o(ps, { size: 16, className: "text-white" });
    case "delete":
      return /* @__PURE__ */ o(gs, { size: 16, className: "text-white" });
    default:
      return null;
  }
}, Rn = (e) => {
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
function va({ items: e }) {
  return !e || e.length === 0 ? null : /* @__PURE__ */ o("div", { className: "space-y-4", children: e.map((r) => /* @__PURE__ */ u("div", { className: "flex items-start gap-4", children: [
    /* @__PURE__ */ o(
      "div",
      {
        className: `w-8 h-8 rounded-full flex items-center justify-center ${Rn(r.type)}`,
        children: jn(r.type)
      }
    ),
    /* @__PURE__ */ u("div", { className: "flex-1", children: [
      /* @__PURE__ */ o("p", { className: "font-medium", children: r.title }),
      /* @__PURE__ */ u("p", { className: "text-sm text-gray-600", children: [
        "par ",
        r.user
      ] }),
      /* @__PURE__ */ u("p", { className: "text-xs text-gray-500 flex items-center gap-1", children: [
        /* @__PURE__ */ o(Wr, { size: 12 }),
        "il y a ",
        r.time
      ] })
    ] })
  ] }, r.id)) });
}
const zr = He(null), En = {
  "top-right": "top-5 right-5",
  "top-left": "top-5 left-5",
  "top-center": "top-5 left-1/2 -translate-x-1/2",
  "bottom-right": "bottom-5 right-5",
  "bottom-left": "bottom-5 left-5",
  "bottom-center": "bottom-5 left-1/2 -translate-x-1/2"
}, Pn = {
  "top-right": "animate-slide-in-right",
  "top-left": "animate-slide-in-left",
  "top-center": "animate-slide-in-top",
  "bottom-right": "animate-slide-in-right",
  "bottom-left": "animate-slide-in-left",
  "bottom-center": "animate-slide-in-bottom"
};
function wa({ children: e }) {
  const [r, t] = D([]), s = (c) => {
    const g = Date.now().toString(), $ = { id: g, ...c };
    return t((w) => [...w, $]), g;
  }, n = (c, g) => {
    t(($) => {
      const w = $.find((x) => x.id === c);
      return w && w.onClose && w.onClose(g || !0), $.filter((x) => x.id !== c);
    });
  }, a = (c, g) => (t(
    ($) => $.map(
      (w) => w.id === c ? { ...w, ...g } : w
    )
  ), c), f = {
    toasts: r,
    addToast: s,
    removeToast: n,
    updateToast: a,
    loading: (c, g = {}) => s({
      type: "loading",
      message: c,
      autoClose: !1,
      ...g
    }),
    promise: (c, g) => {
      var E;
      const { pending: $, success: w, error: x } = g, I = s({
        type: "loading",
        message: typeof $ == "string" ? $ : ((E = $ == null ? void 0 : $.render) == null ? void 0 : E.call($)) || "Chargement...",
        autoClose: !1,
        ...typeof $ == "object" ? $ : {}
      }), j = Promise.resolve(typeof c == "function" ? c() : c);
      return j.then((P) => {
        var B;
        const F = typeof w == "string" ? w : ((B = w == null ? void 0 : w.render) == null ? void 0 : B.call(w, { data: P })) || "Succès";
        return a(I, {
          type: "success",
          message: F,
          autoClose: 5e3,
          ...typeof w == "object" ? w : {}
        }), P;
      }).catch((P) => {
        var B;
        const F = typeof x == "string" ? x : ((B = x == null ? void 0 : x.render) == null ? void 0 : B.call(x, { data: P })) || "Une erreur est survenue";
        return a(I, {
          type: "error",
          message: F,
          autoClose: 5e3,
          ...typeof x == "object" ? x : {}
        }), Promise.reject(P);
      }), j;
    },
    dismissAll: () => {
      r.forEach((c) => {
        c.onClose && c.onClose("dismissed");
      }), t([]);
    },
    // Méthodes pour chaque type de toast
    info: (c, g = {}) => s({ type: "info", message: c, autoClose: 5e3, ...g }),
    success: (c, g = {}) => s({ type: "success", message: c, autoClose: 5e3, ...g }),
    warning: (c, g = {}) => s({ type: "warning", message: c, autoClose: 5e3, ...g }),
    error: (c, g = {}) => s({ type: "error", message: c, autoClose: 5e3, ...g })
  };
  return /* @__PURE__ */ u(zr.Provider, { value: f, children: [
    e,
    /* @__PURE__ */ o(Ln, {})
  ] });
}
function _n() {
  const e = dt(zr);
  if (!e)
    throw new Error("useToast doit être utilisé à l'intérieur d'un ToastProvider");
  return e;
}
function Ln() {
  const { toasts: e, removeToast: r } = _n(), t = e.reduce((s, n) => {
    const a = n.position || "bottom-right";
    return s[a] || (s[a] = []), s[a].push(n), s;
  }, {});
  return Object.entries(t).map(([s, n]) => /* @__PURE__ */ o("div", { className: `fixed z-50 flex flex-col gap-2 ${En[s]}`, children: n.map((a) => /* @__PURE__ */ o(me, { ...a, onClose: (l) => r(a.id, l) }, a.id)) }, s));
}
function me({
  id: e,
  type: r = "info",
  message: t,
  onClose: s,
  autoClose: n = 5e3,
  position: a = "bottom-right",
  onOpen: l,
  isLoading: d = !1
}) {
  const i = ne(null), [f, c] = D(!0), g = {
    info: /* @__PURE__ */ o(qe, { size: 20, className: "text-blue-500 mt-0.5" }),
    success: /* @__PURE__ */ o(pt, { size: 20, className: "text-green-500 mt-0.5" }),
    warning: /* @__PURE__ */ o(Ce, { size: 20, className: "text-yellow-500 mt-0.5" }),
    error: /* @__PURE__ */ o(Ce, { size: 20, className: "text-red-500 mt-0.5" }),
    loading: /* @__PURE__ */ o(et, { size: 20, className: "text-blue-500 mt-0.5 animate-spin" })
  }, $ = {
    info: "bg-blue-50 border border-blue-200",
    success: "bg-green-50 border border-green-200",
    warning: "bg-yellow-50 border border-yellow-200",
    error: "bg-red-50 border border-red-200",
    loading: "bg-blue-50 border border-blue-200"
  };
  oe(() => (l && l(), n !== !1 && !d && (i.current = setTimeout(() => {
    c(!1), setTimeout(() => s("timeout"), 300);
  }, n)), () => {
    i.current && clearTimeout(i.current);
  }), [n, s, l, d]);
  const w = () => {
    c(!1), i.current && clearTimeout(i.current), setTimeout(() => s("dismissed"), 300);
  }, x = f ? "opacity-100" : "opacity-0 translate-x-2";
  return /* @__PURE__ */ u(
    "div",
    {
      className: `max-w-sm w-full p-4 rounded-lg shadow-lg transition-all duration-300 ${$[r]} ${Pn[a]} ${x}`,
      children: [
        /* @__PURE__ */ u("div", { className: "flex items-start gap-3", children: [
          g[r],
          /* @__PURE__ */ o("div", { className: "flex-1", children: /* @__PURE__ */ o("p", { className: "text-sm font-medium", children: t }) }),
          r !== "loading" && /* @__PURE__ */ o("button", { onClick: w, className: "text-gray-400 hover:text-gray-600", children: /* @__PURE__ */ o(ue, { size: 16 }) })
        ] }),
        n !== !1 && r !== "loading" && /* @__PURE__ */ o("div", { className: "mt-2 w-full bg-gray-200 rounded-full h-1 overflow-hidden", children: /* @__PURE__ */ o(
          "div",
          {
            className: `h-full ${r === "info" ? "bg-blue-500" : r === "success" ? "bg-green-500" : r === "warning" ? "bg-yellow-500" : "bg-red-500"}`,
            style: {
              width: "100%",
              animation: `shrink ${n}ms linear forwards`
            }
          }
        ) })
      ]
    }
  );
}
me.info = (e, r) => (console.warn("Toast.info() est déprécié. Utilisez useToast().info() à la place."), null);
me.success = (e, r) => (console.warn("Toast.success() est déprécié. Utilisez useToast().success() à la place."), null);
me.warning = (e, r) => (console.warn("Toast.warning() est déprécié. Utilisez useToast().warning() à la place."), null);
me.error = (e, r) => (console.warn("Toast.error() est déprécié. Utilisez useToast().error() à la place."), null);
me.loading = (e, r) => (console.warn("Toast.loading() est déprécié. Utilisez useToast().loading() à la place."), null);
me.promise = (e, r) => (console.warn("Toast.promise() est déprécié. Utilisez useToast().promise() à la place."), e);
me.dismiss = (e) => {
  console.warn("Toast.dismiss() est déprécié. Utilisez useToast().removeToast() à la place.");
};
me.dismissAll = () => {
  console.warn("Toast.dismissAll() est déprécié. Utilisez useToast().dismissAll() à la place.");
};
function ka({ label: e, checked: r, onChange: t }) {
  const [s, n] = D(r || !1);
  return /* @__PURE__ */ u("div", { className: "flex items-center justify-between", children: [
    e && /* @__PURE__ */ o("span", { className: "text-sm font-medium", children: e }),
    /* @__PURE__ */ o(
      "button",
      {
        onClick: () => {
          n(!s), t(!s);
        },
        className: `toggle-fluid ${s ? "active" : ""}`,
        children: /* @__PURE__ */ o("div", { className: "toggle-handle" })
      }
    )
  ] });
}
function Na({
  logo: e,
  navItems: r = [],
  userDropdownItems: t = [],
  userAvatar: s,
  userName: n,
  notificationCount: a = 0,
  onSearch: l,
  onNavItemClick: d,
  onNotificationClick: i,
  customActions: f = [],
  showSearch: c = !0,
  showNotifications: g = !0,
  showThemeSwitcher: $ = !0,
  showThemeSwitcherLabel: w = !1
}) {
  const [x, I] = D(""), [j, E] = D(!1), [P, F] = D("");
  D(() => {
    r.length > 0 && !x && I(r[0].id);
  }, [r]);
  const B = (p) => {
    I(p.id), d && d(p);
  }, U = (p) => {
    F(p.target.value), l && l(p.target.value);
  };
  return /* @__PURE__ */ u("div", { className: "nav-fluid", children: [
    /* @__PURE__ */ u("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ u("div", { className: "flex items-center gap-6", children: [
        e && /* @__PURE__ */ o("div", { className: "font-bold text-lg", children: e }),
        /* @__PURE__ */ o("nav", { className: "hidden md:flex space-x-8", children: r.map((p) => /* @__PURE__ */ u(
          "button",
          {
            className: `flex items-center gap-2 text-sm font-medium ${x === p.id ? "text-accent-600" : "text-gray-600 hover:text-gray-800"}`,
            onClick: () => B(p),
            children: [
              p.icon && /* @__PURE__ */ o(p.icon, { size: 16 }),
              p.label
            ]
          },
          p.id
        )) })
      ] }),
      /* @__PURE__ */ u("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ u("div", { className: "hidden md:flex items-center gap-2", children: [
          f.map((p, L) => /* @__PURE__ */ u("div", { className: "relative", children: [
            /* @__PURE__ */ o(
              he,
              {
                icon: p.icon,
                "aria-label": p.label,
                variant: p.variant || "ghost",
                onClick: p.onClick,
                className: p.className
              }
            ),
            p.badge && /* @__PURE__ */ o(
              Nt,
              {
                variant: p.badgeVariant || "red",
                className: "absolute -top-1 -right-1 min-w-[18px] h-[18px] flex items-center justify-center text-[10px] px-1 py-0",
                children: p.badge > 99 ? "99+" : p.badge
              }
            )
          ] }, p.key || L)),
          c && /* @__PURE__ */ u("div", { className: "relative", children: [
            /* @__PURE__ */ o(
              "input",
              {
                type: "text",
                placeholder: "Rechercher...",
                className: "py-1 pl-10 pr-4 rounded-lg bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 w-64",
                value: P,
                onChange: U
              }
            ),
            /* @__PURE__ */ o(
              Ue,
              {
                size: 16,
                className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              }
            )
          ] }),
          $ && /* @__PURE__ */ o(Vt, { showLabel: w }),
          g && /* @__PURE__ */ u("div", { className: "relative", children: [
            /* @__PURE__ */ o(
              he,
              {
                icon: /* @__PURE__ */ o(Ft, { size: 16 }),
                "aria-label": "Notifications",
                variant: "ghost",
                onClick: i
              }
            ),
            a > 0 && /* @__PURE__ */ o(
              Nt,
              {
                variant: "red",
                className: "absolute -top-1 -right-1 min-w-[18px] h-[18px] flex items-center justify-center text-[10px] px-1 py-0",
                children: a > 99 ? "99+" : a
              }
            )
          ] }),
          t.length > 0 && /* @__PURE__ */ u(ce, { children: [
            /* @__PURE__ */ o(ce.Trigger, { asChild: !0, children: /* @__PURE__ */ u(
              ve,
              {
                variant: "ghost",
                className: "flex items-center gap-2",
                endIcon: /* @__PURE__ */ o(ze, { size: 16 }),
                children: [
                  s ? typeof s == "string" ? /* @__PURE__ */ o(
                    Ge,
                    {
                      src: s,
                      alt: n || "User",
                      size: "sm",
                      fallback: (n || "U").charAt(0)
                    }
                  ) : s : /* @__PURE__ */ o(
                    Ge,
                    {
                      size: "sm",
                      fallback: (n || "U").charAt(0)
                    }
                  ),
                  n && /* @__PURE__ */ o("span", { className: "font-medium", children: n })
                ]
              }
            ) }),
            /* @__PURE__ */ o(ce.Menu, { children: t.map(
              (p, L) => p.isSeparator ? /* @__PURE__ */ o(ce.Separator, {}, `sep-${L}`) : /* @__PURE__ */ u(
                ce.Item,
                {
                  onClick: p.onClick,
                  className: p.isDanger ? "text-red-600 hover:text-red-700" : "",
                  children: [
                    p.icon,
                    p.label
                  ]
                },
                `${p.label}-${L}`
              )
            ) })
          ] })
        ] }),
        /* @__PURE__ */ o(
          he,
          {
            icon: j ? /* @__PURE__ */ o(ue, { size: 24 }) : /* @__PURE__ */ o(Ht, { size: 24 }),
            onClick: () => E(!j),
            className: "md:hidden",
            "aria-label": "Menu",
            variant: "ghost"
          }
        )
      ] })
    ] }),
    j && /* @__PURE__ */ o("div", { className: "md:hidden mt-4 py-4 border-t", children: /* @__PURE__ */ u("nav", { className: "flex flex-col space-y-4", children: [
      r.map((p) => /* @__PURE__ */ u(
        "button",
        {
          className: `flex items-center gap-2 text-sm font-medium ${x === p.id ? "text-accent-600" : "text-gray-600"}`,
          onClick: () => {
            B(p), E(!1);
          },
          children: [
            p.icon && /* @__PURE__ */ o(p.icon, { size: 18 }),
            p.label
          ]
        },
        p.id
      )),
      /* @__PURE__ */ u("div", { className: "pt-4 border-t", children: [
        c && /* @__PURE__ */ u("div", { className: "relative mb-4", children: [
          /* @__PURE__ */ o(
            "input",
            {
              type: "text",
              placeholder: "Rechercher...",
              className: "w-full py-2 pl-10 pr-4 rounded-lg bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500",
              value: P,
              onChange: U
            }
          ),
          /* @__PURE__ */ o(
            Ue,
            {
              size: 16,
              className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            }
          )
        ] }),
        $ && /* @__PURE__ */ o("div", { className: "mb-4", children: /* @__PURE__ */ o(Vt, { showLabel: !0 }) }),
        n && /* @__PURE__ */ u("div", { className: "flex items-center gap-3 mb-2", children: [
          s ? typeof s == "string" ? /* @__PURE__ */ o(
            Ge,
            {
              src: s,
              alt: n,
              size: "sm",
              fallback: n.charAt(0)
            }
          ) : s : /* @__PURE__ */ o(Ge, { size: "sm", fallback: n.charAt(0) }),
          /* @__PURE__ */ o("span", { className: "font-medium", children: n })
        ] }),
        t.filter((p) => !p.isSeparator).map((p, L) => /* @__PURE__ */ u(
          "button",
          {
            onClick: p.onClick,
            className: `flex items-center gap-2 text-sm font-medium py-2 w-full ${p.isDanger ? "text-red-600" : "text-gray-600"}`,
            children: [
              p.icon,
              p.label
            ]
          },
          `${p.label}-${L}`
        ))
      ] })
    ] }) })
  ] });
}
function Ca({ view: e, setView: r }) {
  return /* @__PURE__ */ u("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ o(
      "button",
      {
        onClick: () => r("grid"),
        className: `p-2 rounded-lg transition-colors ${e === "grid" ? "bg-accent-500 text-white" : "hover:bg-glass-light"}`,
        children: /* @__PURE__ */ o(rs, { size: 16 })
      }
    ),
    /* @__PURE__ */ o(
      "button",
      {
        onClick: () => r("list"),
        className: `p-2 rounded-lg transition-colors ${e === "list" ? "bg-accent-500 text-white" : "hover:bg-glass-light"}`,
        children: /* @__PURE__ */ o(ns, { size: 16 })
      }
    )
  ] });
}
export {
  On as Accordion,
  Fn as Alert,
  Ge as Avatar,
  Nt as Badge,
  Un as Breadcrumb,
  ve as Button,
  co as Card,
  uo as CardBody,
  mo as CardDescription,
  po as CardFooter,
  fo as CardHeader,
  ho as CardTitle,
  St as Checkbox,
  Hn as Chip,
  qn as Collapsible,
  Wn as CollapsibleSidebar,
  Zn as Container,
  Kn as ContextMenu,
  Jn as DataCard,
  Xn as DocumentUploader,
  Qn as Drawer,
  ce as Dropdown,
  Yn as EmptyState,
  ea as ExpandableTable,
  ta as FileUploader,
  ra as Footer,
  Tt as HelperText,
  he as IconButton,
  ir as Input,
  sa as InteractiveTable,
  oa as Label,
  Zt as Link,
  go as Modal,
  ar as ModalBody,
  Mo as ModalFooter,
  nr as ModalHeader,
  aa as Notification,
  zo as Pagination,
  la as ProgressBar,
  ia as RadioGroup,
  ca as SectionBox,
  $o as Select,
  cr as SidebarMenuItem,
  da as SidebarNavigation,
  ua as Skeleton,
  ma as Snackbar,
  pa as Spinner,
  fa as Stack,
  ha as StatCard,
  ga as Stepper,
  yn as Table,
  wn as TableBody,
  Nn as TableCell,
  zn as TableColumn,
  Mn as TableHeader,
  An as TableRow,
  ba as Tabs,
  xa as Textarea,
  ya as ThemeProvider,
  Vt as ThemeSwitcher,
  va as Timeline,
  me as Toast,
  wa as ToastProvider,
  ka as Toggle,
  Na as TopNavigation,
  Ca as ViewModeSwitch,
  na as useModalLayout,
  _n as useToast
};

"use client";
import { jsx as o, jsxs as u, Fragment as dt } from "react/jsx-runtime";
import Q, { forwardRef as Ft, createElement as Je, useState as O, createContext as qe, useCallback as fe, useEffect as ne, useRef as ce, useContext as ut, useMemo as Me } from "react";
import { usePress as Ir } from "@react-aria/interactions";
import { createPortal as Ut } from "react-dom";
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jr = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Rr = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (r, t, s) => s ? s.toUpperCase() : t.toLowerCase()
), yt = (e) => {
  const r = Rr(e);
  return r.charAt(0).toUpperCase() + r.slice(1);
}, Ht = (...e) => e.filter((r, t, s) => !!r && r.trim() !== "" && s.indexOf(r) === t).join(" ").trim(), Er = (e) => {
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
var Pr = {
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
const _r = Ft(
  ({
    color: e = "currentColor",
    size: r = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: s,
    className: n = "",
    children: a,
    iconNode: l,
    ...d
  }, i) => Je(
    "svg",
    {
      ref: i,
      ...Pr,
      width: r,
      height: r,
      stroke: e,
      strokeWidth: s ? Number(t) * 24 / Number(r) : t,
      className: Ht("lucide", n),
      ...!a && !Er(d) && { "aria-hidden": "true" },
      ...d
    },
    [
      ...l.map(([p, c]) => Je(p, c)),
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
  const t = Ft(
    ({ className: s, ...n }, a) => Je(_r, {
      ref: a,
      iconNode: r,
      className: Ht(
        `lucide-${jr(yt(e))}`,
        `lucide-${e}`,
        s
      ),
      ...n
    })
  );
  return t.displayName = yt(e), t;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lr = [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
], Gr = H("arrow-up-down", Lr);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vr = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
], qt = H("bell", Vr);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Or = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], mt = H("check", Or);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Br = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Ae = H("chevron-down", Br);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dr = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Fr = H("chevron-left", Dr);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ur = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], pt = H("chevron-right", Ur);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hr = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], Wt = H("chevron-up", Hr);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qr = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], Se = H("circle-alert", qr);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wr = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], ft = H("circle-check-big", Wr);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zr = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
], Xr = H("circle-x", Zr);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kr = [
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], Yr = H("clock", Kr);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jr = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
], Qr = H("download", Jr);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const es = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], ts = H("eye", es);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rs = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], Qe = H("file-text", rs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ss = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }]
], os = H("file", ss);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ns = [
  [
    "path",
    {
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
], as = H("funnel", ns);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ls = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
], is = H("grid-3x3", ls);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cs = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
], We = H("info", cs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ds = [
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 18h.01", key: "1tta3j" }],
  ["path", { d: "M3 6h.01", key: "1rqtza" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 18h13", key: "1lx6n3" }],
  ["path", { d: "M8 6h13", key: "ik3vkj" }]
], us = H("list", ds);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ms = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], et = H("loader-circle", ms);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ps = [
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 18h16", key: "19g7jn" }],
  ["path", { d: "M4 6h16", key: "1o0s65" }]
], Zt = H("menu", ps);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fs = [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
], vt = H("moon", fs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hs = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], gs = H("plus", hs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bs = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], He = H("search", bs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xs = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  [
    "path",
    {
      d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
      key: "ohrbg2"
    }
  ]
], ys = H("square-pen", xs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vs = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
], wt = H("sun", vs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ws = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
], ks = H("trash-2", ws);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ns = [
  ["path", { d: "M16 17h6v-6", key: "t6n2it" }],
  ["path", { d: "m22 17-8.5-8.5-5 5L2 7", key: "x473p" }]
], Cs = H("trending-down", Ns);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zs = [
  ["path", { d: "M16 7h6v6", key: "box55l" }],
  ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
], $s = H("trending-up", zs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ms = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
], Xt = H("upload", Ms);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ss = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], Kt = H("user", Ss);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const As = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], he = H("x", As);
function Ts({ title: e, trigger: r, children: t, isOpen: s, onToggle: n }) {
  return /* @__PURE__ */ u("div", { className: "glass-surface rounded-lg overflow-hidden border border-white/10", children: [
    /* @__PURE__ */ u(
      "button",
      {
        onClick: n,
        className: "w-full flex justify-between items-center p-4 text-left font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500",
        "aria-expanded": s,
        children: [
          /* @__PURE__ */ o("div", { className: "flex-1 min-w-0 pr-4", children: r || e }),
          /* @__PURE__ */ o(
            Ae,
            {
              className: `transform transition-transform duration-300 flex-shrink-0 ${s ? "rotate-180" : ""}`
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ o(
      "div",
      {
        className: `transition-all duration-300 ease-in-out overflow-hidden ${s ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`,
        children: /* @__PURE__ */ o("div", { className: "p-4 border-t border-white/10", children: t })
      }
    )
  ] });
}
function qn({
  title: e,
  children: r,
  items: t,
  type: s = "single",
  className: n = ""
}) {
  return t && Array.isArray(t) ? /* @__PURE__ */ o("div", { className: n, children: t.map((a, l) => /* @__PURE__ */ o("div", { className: "mb-2 last:mb-0", children: /* @__PURE__ */ o(kt, { title: a.title, trigger: a.trigger, children: a.content }) }, a.id || l)) }) : /* @__PURE__ */ o("div", { className: n, children: /* @__PURE__ */ o(kt, { title: e, children: r }) });
}
function kt({ title: e, trigger: r, children: t }) {
  const [s, n] = O(!1);
  return /* @__PURE__ */ o(
    Ts,
    {
      title: e,
      trigger: r,
      isOpen: s,
      onToggle: () => n(!s),
      children: t
    }
  );
}
const Nt = {
  info: {
    icon: We,
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    iconColor: "text-blue-600",
    titleColor: "text-blue-900",
    textColor: "text-blue-700"
  },
  success: {
    icon: ft,
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    iconColor: "text-green-600",
    titleColor: "text-green-900",
    textColor: "text-green-700"
  },
  warning: {
    icon: Se,
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
    iconColor: "text-yellow-600",
    titleColor: "text-yellow-900",
    textColor: "text-yellow-700"
  },
  danger: {
    icon: Xr,
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    iconColor: "text-red-600",
    titleColor: "text-red-900",
    textColor: "text-red-700"
  }
};
function Wn({ variant: e = "info", title: r, children: t }) {
  const s = Nt[e] ?? Nt.info, n = s.icon;
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
const Is = {
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
function Ve({
  size: e = "md",
  src: r,
  icon: t = /* @__PURE__ */ o(Kt, {}),
  className: s = "bg-accent-500"
}) {
  const n = Is[e], a = [
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
  ) : Q.cloneElement(t, {
    size: n.iconSize,
    className: "text-white"
  }) });
}
const Ct = {
  accent: "bg-accent-500",
  green: "bg-green-500",
  red: "bg-red-500",
  yellow: "bg-yellow-500",
  gray: "bg-gray-500"
};
function zt({ variant: e = "accent", children: r, className: t = "" }) {
  const n = [
    "px-3 py-1 text-xs font-medium text-white rounded-full",
    Ct[e] || Ct.accent,
    t
  ].join(" ").trim();
  return /* @__PURE__ */ o("span", { className: n, children: r });
}
const Yt = ({
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
  ].join(" ").trim(), p = (e == null ? void 0 : e.startsWith("http")) || (e == null ? void 0 : e.startsWith("mailto:")) || (e == null ? void 0 : e.startsWith("tel:"));
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
      target: p ? "_blank" : void 0,
      rel: p ? "noopener noreferrer" : void 0,
      ...a,
      children: [
        t,
        s
      ]
    }
  );
};
function Zn({ items: e = [] }) {
  return /* @__PURE__ */ o("nav", { className: "flex items-center space-x-2 text-sm", "aria-label": "Breadcrumb", children: e.map((r, t) => /* @__PURE__ */ u("div", { className: "flex items-center", children: [
    t > 0 && /* @__PURE__ */ o(pt, { size: 16, className: "mx-2 text-gray-400" }),
    r.href ? /* @__PURE__ */ o(Yt, { href: r.href, children: r.label }) : /* @__PURE__ */ o("span", { className: "text-gray-600", children: r.label })
  ] }, t)) });
}
const js = {
  primary: "",
  // Default style
  outline: "btn-outline",
  ghost: "btn-ghost"
}, Rs = {
  small: "text-sm py-2 px-3",
  medium: "",
  // Default size
  large: "text-lg py-4 px-6"
}, de = Q.forwardRef(
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
  }, p) => {
    const f = [
      "btn-fluid",
      js[r],
      Rs[t],
      d
    ].filter(Boolean).join(" ").trim();
    return /* @__PURE__ */ u(
      "button",
      {
        ref: p,
        className: f,
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
de.displayName = "Button";
const ht = "-", Es = (e) => {
  const r = _s(e), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: s
  } = e;
  return {
    getClassGroupId: (l) => {
      const d = l.split(ht);
      return d[0] === "" && d.length !== 1 && d.shift(), Jt(d, r) || Ps(l);
    },
    getConflictingClassGroupIds: (l, d) => {
      const i = t[l] || [];
      return d && s[l] ? [...i, ...s[l]] : i;
    }
  };
}, Jt = (e, r) => {
  var l;
  if (e.length === 0)
    return r.classGroupId;
  const t = e[0], s = r.nextPart.get(t), n = s ? Jt(e.slice(1), s) : void 0;
  if (n)
    return n;
  if (r.validators.length === 0)
    return;
  const a = e.join(ht);
  return (l = r.validators.find(({
    validator: d
  }) => d(a))) == null ? void 0 : l.classGroupId;
}, $t = /^\[(.+)\]$/, Ps = (e) => {
  if ($t.test(e)) {
    const r = $t.exec(e)[1], t = r == null ? void 0 : r.substring(0, r.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}, _s = (e) => {
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
      const a = n === "" ? r : Mt(r, n);
      a.classGroupId = t;
      return;
    }
    if (typeof n == "function") {
      if (Ls(n)) {
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
      tt(l, Mt(r, a), t, s);
    });
  });
}, Mt = (e, r) => {
  let t = e;
  return r.split(ht).forEach((s) => {
    t.nextPart.has(s) || t.nextPart.set(s, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(s);
  }), t;
}, Ls = (e) => e.isThemeGetter, Gs = (e) => {
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
}, rt = "!", st = ":", Vs = st.length, Os = (e) => {
  const {
    prefix: r,
    experimentalParseClassName: t
  } = e;
  let s = (n) => {
    const a = [];
    let l = 0, d = 0, i = 0, p;
    for (let x = 0; x < n.length; x++) {
      let T = n[x];
      if (l === 0 && d === 0) {
        if (T === st) {
          a.push(n.slice(i, x)), i = x + Vs;
          continue;
        }
        if (T === "/") {
          p = x;
          continue;
        }
      }
      T === "[" ? l++ : T === "]" ? l-- : T === "(" ? d++ : T === ")" && d--;
    }
    const c = a.length === 0 ? n : n.substring(i), f = Bs(c), w = f !== c, k = p && p > i ? p - i : void 0;
    return {
      modifiers: a,
      hasImportantModifier: w,
      baseClassName: f,
      maybePostfixModifierPosition: k
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
}, Bs = (e) => e.endsWith(rt) ? e.substring(0, e.length - 1) : e.startsWith(rt) ? e.substring(1) : e, Ds = (e) => {
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
}, Fs = (e) => ({
  cache: Gs(e.cacheSize),
  parseClassName: Os(e),
  sortModifiers: Ds(e),
  ...Es(e)
}), Us = /\s+/, Hs = (e, r) => {
  const {
    parseClassName: t,
    getClassGroupId: s,
    getConflictingClassGroupIds: n,
    sortModifiers: a
  } = r, l = [], d = e.trim().split(Us);
  let i = "";
  for (let p = d.length - 1; p >= 0; p -= 1) {
    const c = d[p], {
      isExternal: f,
      modifiers: w,
      hasImportantModifier: k,
      baseClassName: x,
      maybePostfixModifierPosition: T
    } = t(c);
    if (f) {
      i = c + (i.length > 0 ? " " + i : i);
      continue;
    }
    let j = !!T, R = s(j ? x.substring(0, T) : x);
    if (!R) {
      if (!j) {
        i = c + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (R = s(x), !R) {
        i = c + (i.length > 0 ? " " + i : i);
        continue;
      }
      j = !1;
    }
    const E = a(w).join(":"), q = k ? E + rt : E, D = q + R;
    if (l.includes(D))
      continue;
    l.push(D);
    const W = n(R, j);
    for (let m = 0; m < W.length; ++m) {
      const L = W[m];
      l.push(q + L);
    }
    i = c + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function qs() {
  let e = 0, r, t, s = "";
  for (; e < arguments.length; )
    (r = arguments[e++]) && (t = Qt(r)) && (s && (s += " "), s += t);
  return s;
}
const Qt = (e) => {
  if (typeof e == "string")
    return e;
  let r, t = "";
  for (let s = 0; s < e.length; s++)
    e[s] && (r = Qt(e[s])) && (t && (t += " "), t += r);
  return t;
};
function Ws(e, ...r) {
  let t, s, n, a = l;
  function l(i) {
    const p = r.reduce((c, f) => f(c), e());
    return t = Fs(p), s = t.cache.get, n = t.cache.set, a = d, d(i);
  }
  function d(i) {
    const p = s(i);
    if (p)
      return p;
    const c = Hs(i, t);
    return n(i, c), c;
  }
  return function() {
    return a(qs.apply(null, arguments));
  };
}
const te = (e) => {
  const r = (t) => t[e] || [];
  return r.isThemeGetter = !0, r;
}, er = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, tr = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Zs = /^\d+\/\d+$/, Xs = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ks = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ys = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Js = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Qs = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ze = (e) => Zs.test(e), B = (e) => !!e && !Number.isNaN(Number(e)), be = (e) => !!e && Number.isInteger(Number(e)), Ze = (e) => e.endsWith("%") && B(e.slice(0, -1)), ue = (e) => Xs.test(e), eo = () => !0, to = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Ks.test(e) && !Ys.test(e)
), rr = () => !1, ro = (e) => Js.test(e), so = (e) => Qs.test(e), oo = (e) => !C(e) && !z(e), no = (e) => Te(e, nr, rr), C = (e) => er.test(e), ve = (e) => Te(e, ar, to), Xe = (e) => Te(e, uo, B), St = (e) => Te(e, sr, rr), ao = (e) => Te(e, or, so), Oe = (e) => Te(e, lr, ro), z = (e) => tr.test(e), Pe = (e) => Ie(e, ar), lo = (e) => Ie(e, mo), At = (e) => Ie(e, sr), io = (e) => Ie(e, nr), co = (e) => Ie(e, or), Be = (e) => Ie(e, lr, !0), Te = (e, r, t) => {
  const s = er.exec(e);
  return s ? s[1] ? r(s[1]) : t(s[2]) : !1;
}, Ie = (e, r, t = !1) => {
  const s = tr.exec(e);
  return s ? s[1] ? r(s[1]) : t : !1;
}, sr = (e) => e === "position" || e === "percentage", or = (e) => e === "image" || e === "url", nr = (e) => e === "length" || e === "size" || e === "bg-size", ar = (e) => e === "length", uo = (e) => e === "number", mo = (e) => e === "family-name", lr = (e) => e === "shadow", po = () => {
  const e = te("color"), r = te("font"), t = te("text"), s = te("font-weight"), n = te("tracking"), a = te("leading"), l = te("breakpoint"), d = te("container"), i = te("spacing"), p = te("radius"), c = te("shadow"), f = te("inset-shadow"), w = te("text-shadow"), k = te("drop-shadow"), x = te("blur"), T = te("perspective"), j = te("aspect"), R = te("ease"), E = te("animate"), q = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], D = () => [
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
  ], W = () => [...D(), z, C], m = () => ["auto", "hidden", "clip", "visible", "scroll"], L = () => ["auto", "contain", "none"], N = () => [z, C, i], J = () => [ze, "full", "auto", ...N()], ee = () => [be, "none", "subgrid", z, C], ae = () => ["auto", {
    span: ["full", be, z, C]
  }, be, z, C], g = () => [be, "auto", z, C], y = () => ["auto", "min", "max", "fr", z, C], S = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], A = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], v = () => ["auto", ...N()], P = () => [ze, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...N()], h = () => [e, z, C], V = () => [...D(), At, St, {
    position: [z, C]
  }], X = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], oe = () => ["auto", "cover", "contain", io, no, {
    size: [z, C]
  }], Y = () => [Ze, Pe, ve], Z = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    p,
    z,
    C
  ], K = () => ["", B, Pe, ve], b = () => ["solid", "dashed", "dotted", "double"], G = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], I = () => [B, Ze, At, St], re = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    x,
    z,
    C
  ], _ = () => ["none", B, z, C], U = () => ["none", B, z, C], le = () => [B, z, C], Ce = () => [ze, "full", ...N()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [ue],
      breakpoint: [ue],
      color: [eo],
      container: [ue],
      "drop-shadow": [ue],
      ease: ["in", "out", "in-out"],
      font: [oo],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [ue],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [ue],
      shadow: [ue],
      spacing: ["px", B],
      text: [ue],
      "text-shadow": [ue],
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
        aspect: ["auto", "square", ze, C, z, j]
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
        columns: [B, C, z, d]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": q()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": q()
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
        object: W()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: m()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": m()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": m()
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
        inset: J()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": J()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": J()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: J()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: J()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: J()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: J()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: J()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: J()
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
        z: [be, "auto", z, C]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [ze, "full", "auto", d, ...N()]
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
        flex: [B, ze, "auto", "initial", "none", C]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", B, z, C]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", B, z, C]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [be, "first", "last", "none", z, C]
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
        col: ae()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": g()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": g()
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
        row: ae()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": g()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": g()
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
        justify: [...S(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...A(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...A()]
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
        items: [...A(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...A(), {
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
        "place-items": [...A(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...A()]
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
        size: P()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [d, "screen", ...P()]
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
          ...P()
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
          ...P()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...P()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...P()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...P()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", t, Pe, ve]
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
        font: [s, z, Xe]
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
        font: [lo, C, r]
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
        "line-clamp": [B, "none", z, Xe]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          a,
          ...N()
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
        placeholder: h()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: h()
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
        decoration: [...b(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [B, "from-font", "auto", z, ve]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: h()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [B, "auto", z, C]
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
        bg: V()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: X()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: oe()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, be, z, C],
          radial: ["", z, C],
          conic: [be, z, C]
        }, co, ao]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: h()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: Y()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: Y()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: Y()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: h()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: h()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: h()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: Z()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": Z()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": Z()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": Z()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": Z()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": Z()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": Z()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": Z()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": Z()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": Z()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": Z()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": Z()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": Z()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": Z()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": Z()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: K()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": K()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": K()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": K()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": K()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": K()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": K()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": K()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": K()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": K()
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
        "divide-y": K()
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
        border: [...b(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...b(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: h()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": h()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": h()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": h()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": h()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": h()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": h()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": h()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": h()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: h()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...b(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [B, z, C]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", B, Pe, ve]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: h()
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
          Oe
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: h()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", f, Be, Oe]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": h()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: K()
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
        ring: h()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [B, ve]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": h()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": K()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": h()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", w, Be, Oe]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": h()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [B, z, C]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...G(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": G()
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
        "mask-linear": [B]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": I()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": I()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": h()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": h()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": I()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": I()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": h()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": h()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": I()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": I()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": h()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": h()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": I()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": I()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": h()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": h()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": I()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": I()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": h()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": h()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": I()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": I()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": h()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": h()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": I()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": I()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": h()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": h()
      }],
      "mask-image-radial": [{
        "mask-radial": [z, C]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": I()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": I()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": h()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": h()
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
        "mask-radial-at": D()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [B]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": I()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": I()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": h()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": h()
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
        mask: V()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: X()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: oe()
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
        blur: re()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [B, z, C]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [B, z, C]
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
          k,
          Be,
          Oe
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": h()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", B, z, C]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [B, z, C]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", B, z, C]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [B, z, C]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", B, z, C]
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
        "backdrop-blur": re()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [B, z, C]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [B, z, C]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", B, z, C]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [B, z, C]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", B, z, C]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [B, z, C]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [B, z, C]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", B, z, C]
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
        duration: [B, "initial", z, C]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", R, z, C]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [B, z, C]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", E, z, C]
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
        perspective: [T, z, C]
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
        rotate: _()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": _()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": _()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": _()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: U()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": U()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": U()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": U()
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
        skew: le()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": le()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": le()
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
        translate: Ce()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Ce()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Ce()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Ce()
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
        accent: h()
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
        caret: h()
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
        fill: ["none", ...h()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [B, Pe, ve, Xe]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...h()]
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
}, fo = /* @__PURE__ */ Ws(po), ho = qe(void 0), go = ho.Provider, bo = Q.forwardRef((e, r) => {
  const {
    className: t,
    children: s,
    isPressable: n = !1,
    onPress: a,
    onPressStart: l,
    onPressEnd: d,
    onPressChange: i,
    onPressUp: p,
    ...c
  } = e, { pressProps: f, isPressed: w } = Ir({
    onPress: a,
    onPressStart: l,
    onPressEnd: d,
    onPressChange: i,
    onPressUp: p,
    isDisabled: !n,
    ref: r
  }), k = {}, x = fo(
    "glass-card",
    n && "cursor-pointer hover:shadow-lg hover:transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200",
    w && "transform scale-[0.98] shadow-lg",
    t
  );
  return /* @__PURE__ */ o(go, { value: k, children: /* @__PURE__ */ o("div", { ref: r, className: x, ...n ? f : {}, ...c, children: s }) });
});
bo.displayName = "Card";
const xo = Q.forwardRef(({ children: e, className: r, ...t }, s) => /* @__PURE__ */ o("div", { ref: s, className: `card-body ${r || ""}`, ...t, children: e }));
xo.displayName = "CardBody";
const yo = Q.forwardRef(({ children: e, className: r, ...t }, s) => /* @__PURE__ */ o("p", { ref: s, className: `card-description ${r || ""}`, ...t, children: e }));
yo.displayName = "CardDescription";
const vo = Q.forwardRef(({ children: e, className: r, ...t }, s) => /* @__PURE__ */ o("div", { ref: s, className: `card-footer ${r || ""}`, ...t, children: e }));
vo.displayName = "CardFooter";
const wo = Q.forwardRef(({ children: e, className: r, ...t }, s) => /* @__PURE__ */ o("div", { ref: s, className: `card-header ${r || ""}`, ...t, children: e }));
wo.displayName = "CardHeader";
const ko = Q.forwardRef(({ children: e, className: r, ...t }, s) => /* @__PURE__ */ o("h3", { ref: s, className: `card-title ${r || ""}`, ...t, children: e }));
ko.displayName = "CardTitle";
function Tt({
  label: e,
  checked: r,
  defaultChecked: t = !1,
  onChange: s,
  name: n
}) {
  const [a, l] = O(t), d = r !== void 0, i = d ? r : a;
  return /* @__PURE__ */ u("label", { className: "flex items-center space-x-3 cursor-pointer", children: [
    /* @__PURE__ */ o(
      "input",
      {
        type: "checkbox",
        name: n,
        checked: i,
        onChange: (p) => {
          d || l(p.target.checked), s && s(p);
        },
        className: "sr-only"
      }
    ),
    /* @__PURE__ */ o(
      "div",
      {
        className: `w-5 h-5 rounded border-2 flex items-center justify-center ${i ? "bg-accent-500 border-accent-500" : "border-gray-300"}`,
        children: i && /* @__PURE__ */ o(mt, { size: 12, className: "text-white" })
      }
    ),
    e && /* @__PURE__ */ o("span", { className: "text-sm", children: e })
  ] });
}
const Xn = ({ label: e, selected: r = !1, onClick: t, className: s = "" }) => {
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
function Kn({ title: e, children: r }) {
  const [t, s] = O(!1);
  return /* @__PURE__ */ u("div", { className: "glass-surface rounded-lg overflow-hidden", children: [
    /* @__PURE__ */ u(
      "div",
      {
        className: "flex items-center justify-between p-4 cursor-pointer hover:bg-glass-light",
        onClick: () => s(!t),
        children: [
          /* @__PURE__ */ o("h4", { className: "font-medium", children: e }),
          /* @__PURE__ */ o(
            Ae,
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
function ye({
  icon: e,
  onClick: r,
  className: t = "",
  ...s
}) {
  return /* @__PURE__ */ o(
    "button",
    {
      onClick: r,
      className: `p-3 rounded-lg glass-surface hover:bg-accent-500 hover:text-white transition-colors ${t}`.trim(),
      ...s,
      children: e
    }
  );
}
const Yn = ({ logo: e, title: r, header: t, navContent: s, children: n }) => {
  const [a, l] = O(!1);
  return /* @__PURE__ */ u("div", { className: "flex h-full", children: [
    /* @__PURE__ */ o(
      "div",
      {
        className: `glass-surface transition-all duration-300 border-r border-gray-200 dark:border-gray-700 ${a ? "w-20" : "w-64"}`,
        children: /* @__PURE__ */ u("div", { className: "flex flex-col h-full", children: [
          /* @__PURE__ */ u("div", { className: "relative", children: [
            /* @__PURE__ */ o("div", { className: "absolute top-3 right-3 z-10", children: /* @__PURE__ */ o(
              ye,
              {
                onClick: () => l(!a),
                icon: a ? /* @__PURE__ */ o(Zt, { size: 18 }) : /* @__PURE__ */ o(he, { size: 18 }),
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
function Jn({ size: e = "md", children: r }) {
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
function Qn({ children: e, items: r }) {
  const [t, s] = O({ visible: !1, x: 0, y: 0 }), n = fe((l) => {
    l.preventDefault(), s({ visible: !0, x: l.pageX, y: l.pageY });
  }, []), a = fe(() => {
    t.visible && s((l) => ({ ...l, visible: !1 }));
  }, [t.visible]);
  return ne(() => (document.addEventListener("click", a), () => {
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
function ea({ label: e, value: r, icon: t, className: s = "" }) {
  const a = ["flex justify-between items-center py-2 px-3 rounded-md bg-muted/50", s].filter(Boolean).join(" ").trim();
  return /* @__PURE__ */ u("div", { className: a, children: [
    /* @__PURE__ */ u("div", { className: "flex items-center gap-2", children: [
      t && /* @__PURE__ */ o("span", { className: "text-muted-foreground", "aria-hidden": "true", children: t }),
      /* @__PURE__ */ o("span", { className: "text-sm font-medium text-muted-foreground", children: e })
    ] }),
    /* @__PURE__ */ o("div", { className: "text-sm font-semibold text-foreground", children: r })
  ] });
}
const It = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-2xl",
  xl: "max-w-4xl",
  "2xl": "max-w-6xl"
};
function ir({
  isOpen: e,
  onClose: r,
  title: t,
  children: s,
  size: n = "md"
}) {
  const a = ce(null), l = ce(null);
  ne(() => {
    var f, w;
    e ? (l.current = document.activeElement, (f = a.current) == null || f.focus()) : (w = l.current) == null || w.focus();
  }, [e]), ne(() => {
    const f = (w) => {
      w.key === "Escape" && r();
    };
    return e && (document.addEventListener("keydown", f), document.body.style.overflow = "hidden"), () => {
      document.removeEventListener("keydown", f), document.body.style.overflow = "unset";
    };
  }, [e, r]);
  const [d, i] = O(!1);
  if (ne(() => (i(!0), () => i(!1)), []), !e || !d) return null;
  const p = It[n] || It.md, c = /* @__PURE__ */ o(
    "div",
    {
      className: "fixed inset-0 flex items-center justify-center p-4",
      style: {
        background: "var(--fg-overlay-medium)",
        zIndex: 9999
      },
      onClick: r,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "modal-title",
      children: /* @__PURE__ */ u(
        "div",
        {
          ref: a,
          className: `modal-fluid show w-full ${p} max-h-[90vh] overflow-hidden`,
          onClick: (f) => f.stopPropagation(),
          tabIndex: -1,
          role: "document",
          children: [
            /* @__PURE__ */ u("div", { className: "flex justify-between items-center mb-4 absolute top-[20px] right-[25px]", children: [
              /* @__PURE__ */ o("h4", { id: "modal-title", className: "text-lg font-semibold", children: t }),
              /* @__PURE__ */ o(
                ye,
                {
                  icon: /* @__PURE__ */ o(he, { size: 20 }),
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
  return Ut(c, document.body);
}
const cr = ({
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
cr.displayName = "ModalHeader";
const dr = ({
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
dr.displayName = "ModalBody";
function ta({
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
  error: p = null,
  helperText: c = null,
  required: f = !1
}) {
  var ae;
  const [w, k] = O(!1), [x, T] = O(null), [j, R] = O(!1), E = (g) => {
    g.preventDefault(), g.stopPropagation(), g.type === "dragenter" || g.type === "dragover" ? k(!0) : g.type === "dragleave" && k(!1);
  }, q = (g) => {
    if (g.preventDefault(), g.stopPropagation(), k(!1), i) return;
    const y = Array.from(g.dataTransfer.files);
    W(y);
  }, D = (g) => {
    const y = Array.from(g.target.files);
    W(y), g.target.value = "";
  }, W = (g) => {
    const y = [], S = [];
    g.forEach((A) => {
      if (A.size > t) {
        S.push(`${A.name}: Fichier trop volumineux (max ${N(t)})`);
        return;
      }
      const v = `.${A.name.split(".").pop().toLowerCase()}`;
      if (r && !r.includes(v)) {
        S.push(`${A.name}: Type de fichier non supporté`);
        return;
      }
      y.push(A);
    }), S.length > 0 && console.warn("Erreurs de validation:", S), y.length > 0 && a && a(s ? [...n, ...y] : [y[0]]);
  }, m = (g) => {
    if (l)
      l(g);
    else if (a) {
      const y = n.filter((S, A) => A !== g);
      a(y);
    }
  }, L = (g, y) => {
    T({ file: g, index: y }), R(!0), d && d(g, y);
  }, N = (g) => {
    if (g === 0) return "0 Bytes";
    const y = 1024, S = ["Bytes", "KB", "MB", "GB"], A = Math.floor(Math.log(g) / Math.log(y));
    return parseFloat((g / Math.pow(y, A)).toFixed(2)) + " " + S[A];
  }, J = (g) => {
    const y = g.split(".").pop().toLowerCase();
    return ["jpg", "jpeg", "png", "gif", "webp"].includes(y) ? "🖼️" : ["pdf"].includes(y) ? "📄" : ["doc", "docx"].includes(y) ? "📝" : "📎";
  }, ee = (g) => {
    const y = g.split(".").pop().toLowerCase();
    return ["jpg", "jpeg", "png", "gif", "webp", "pdf"].includes(y);
  };
  return /* @__PURE__ */ u("div", { className: "space-y-4", children: [
    e && /* @__PURE__ */ u("label", { className: "block text-sm font-medium text-gray-700", children: [
      e,
      f && /* @__PURE__ */ o("span", { className: "text-red-500 ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ u(
      "div",
      {
        className: `
          relative border-2 border-dashed rounded-lg p-6 text-center transition-all duration-200
          ${w ? "border-primary-500 bg-primary-50" : "border-gray-300 hover:border-primary-400"}
          ${i ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
          ${p ? "border-red-300 bg-red-50" : ""}
        `,
        onDragEnter: E,
        onDragLeave: E,
        onDragOver: E,
        onDrop: q,
        children: [
          /* @__PURE__ */ o(
            "input",
            {
              type: "file",
              multiple: s,
              accept: r,
              onChange: D,
              disabled: i,
              className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            }
          ),
          /* @__PURE__ */ o(
            Xt,
            {
              size: 48,
              className: `mx-auto mb-4 ${w ? "text-primary-500" : "text-gray-400"}`
            }
          ),
          /* @__PURE__ */ o("p", { className: "text-gray-600 mb-2", children: w ? "Déposez vos fichiers ici..." : "Glissez-déposez vos fichiers ici ou cliquez pour parcourir" }),
          /* @__PURE__ */ o(
            de,
            {
              type: "button",
              variant: "outline",
              size: "sm",
              disabled: i,
              onClick: (g) => g.stopPropagation(),
              children: "Parcourir les fichiers"
            }
          ),
          r && /* @__PURE__ */ u("p", { className: "text-xs text-gray-500 mt-2", children: [
            "Types acceptés: ",
            r
          ] }),
          t && /* @__PURE__ */ u("p", { className: "text-xs text-gray-500", children: [
            "Taille max: ",
            N(t)
          ] })
        ]
      }
    ),
    c && !p && /* @__PURE__ */ o("p", { className: "text-sm text-gray-500", children: c }),
    p && /* @__PURE__ */ u("div", { className: "flex items-center text-sm text-red-600", children: [
      /* @__PURE__ */ o(Se, { size: 16, className: "mr-1" }),
      p
    ] }),
    n && n.length > 0 && /* @__PURE__ */ u("div", { className: "space-y-2", children: [
      /* @__PURE__ */ u("h4", { className: "text-sm font-medium text-gray-700", children: [
        "Fichiers sélectionnés (",
        n.length,
        ")"
      ] }),
      /* @__PURE__ */ o("div", { className: "space-y-2", children: n.map((g, y) => /* @__PURE__ */ u(
        "div",
        {
          className: "flex items-center justify-between p-3 bg-gray-50 rounded-lg border",
          children: [
            /* @__PURE__ */ u("div", { className: "flex items-center space-x-3 flex-1 min-w-0", children: [
              /* @__PURE__ */ o("span", { className: "text-lg", children: J(g.name) }),
              /* @__PURE__ */ u("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ o("p", { className: "text-sm font-medium text-gray-900 truncate", children: g.name }),
                /* @__PURE__ */ o("p", { className: "text-xs text-gray-500", children: N(g.size) })
              ] })
            ] }),
            /* @__PURE__ */ u("div", { className: "flex items-center space-x-2", children: [
              ee(g.name) && /* @__PURE__ */ o(
                de,
                {
                  type: "button",
                  variant: "ghost",
                  size: "sm",
                  startIcon: /* @__PURE__ */ o(ts, { size: 16 }),
                  onClick: () => L(g, y),
                  children: "Aperçu"
                }
              ),
              /* @__PURE__ */ o(
                de,
                {
                  type: "button",
                  variant: "ghost",
                  size: "sm",
                  startIcon: /* @__PURE__ */ o(he, { size: 16 }),
                  onClick: () => m(y),
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
      ir,
      {
        isOpen: j,
        onClose: () => R(!1),
        title: "Aperçu du document",
        children: [
          /* @__PURE__ */ o(cr, { children: /* @__PURE__ */ u("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ o("h3", { className: "text-lg font-semibold", children: (ae = x == null ? void 0 : x.file) == null ? void 0 : ae.name }),
            /* @__PURE__ */ o(
              de,
              {
                variant: "ghost",
                size: "sm",
                startIcon: /* @__PURE__ */ o(Qr, { size: 16 }),
                onClick: () => {
                  const g = URL.createObjectURL(x.file), y = document.createElement("a");
                  y.href = g, y.download = x.file.name, y.click(), URL.revokeObjectURL(g);
                },
                children: "Télécharger"
              }
            )
          ] }) }),
          /* @__PURE__ */ o(dr, { children: x && /* @__PURE__ */ o("div", { className: "max-h-96 overflow-auto", children: x.file.type.startsWith("image/") ? /* @__PURE__ */ o(
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
            /* @__PURE__ */ o(os, { size: 48, className: "mx-auto text-gray-400 mb-4" }),
            /* @__PURE__ */ o("p", { className: "text-gray-600", children: "Aperçu non disponible pour ce type de fichier" })
          ] }) }) })
        ]
      }
    )
  ] });
}
function ra({ isOpen: e, onClose: r, title: t, children: s }) {
  return e ? /* @__PURE__ */ u(dt, { children: [
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
            children: /* @__PURE__ */ o(he, { size: 20 })
          }
        )
      ] }),
      s
    ] }) })
  ] }) : null;
}
function No(e = "portal-root") {
  const [r, t] = O(null);
  return ne(() => {
    let s = document.getElementById(e), n = !1;
    return s || (n = !0, s = document.createElement("div"), s.id = e, document.body.appendChild(s)), s.style.position = "absolute", s.style.top = "0", s.style.left = "0", s.style.width = "100%", s.style.zIndex = "9999", s.style.pointerEvents = "none", t(s), () => {
      n && s.parentNode && s.parentNode.removeChild(s);
    };
  }, [e]), r;
}
function ur({ children: e, id: r = "portal-root" }) {
  const t = No(r);
  return t ? Ut(e, t) : null;
}
const mr = qe({
  isOpen: !1,
  setIsOpen: () => {
  },
  onClose: () => {
  }
}), Co = mr.Provider, gt = () => {
  const e = ut(mr);
  if (!e)
    throw new Error("useDropdown must be used within a Dropdown component");
  return e;
};
function pe({ children: e, className: r = "" }) {
  const [t, s] = O(!1), n = ce(null), a = fe((d) => {
    n.current && !n.current.contains(d.target) && s(!1);
  }, []);
  ne(() => (document.addEventListener("mousedown", a), () => {
    document.removeEventListener("mousedown", a);
  }), [a]);
  const l = fe(() => {
    s(!1);
  }, []);
  return /* @__PURE__ */ o(Co, { value: { isOpen: t, setIsOpen: s, onClose: l }, children: /* @__PURE__ */ o("div", { className: `relative inline-block ${r}`, ref: n, children: e }) });
}
function zo({ children: e, asChild: r }) {
  const { isOpen: t, setIsOpen: s } = gt(), n = (a) => {
    a.preventDefault(), s(!t);
  };
  return r ? e ? Q.cloneElement(e, {
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
function $o({ children: e, align: r = "left", className: t = "" }) {
  const { isOpen: s } = gt(), n = ce(null);
  ce(null);
  const [a, l] = O({}), [d, i] = O(!1), p = r === "right" || r === "end" ? "right-0" : r === "center" ? "left-1/2 -translate-x-1/2" : "left-0";
  if (ne(() => {
    if (s && n.current) {
      const f = n.current.closest(".relative"), w = (f == null ? void 0 : f.querySelector("button")) || (f == null ? void 0 : f.querySelector('[role="button"]'));
      if (w) {
        w.getBoundingClientRect();
        const k = n.current.getBoundingClientRect(), x = window.innerWidth, T = window.innerHeight;
        f == null || f.closest(
          "td, th, .overflow-hidden, .overflow-x-hidden"
        );
        {
          i(!1);
          const j = { zIndex: 50 };
          if (k.right > x && (j.right = "0", j.left = "auto", r === "center" && (j.transform = "none")), k.bottom > T) {
            const R = k.bottom - T;
            j.maxHeight = `${k.height - R - 10}px`, j.overflowY = "auto";
          }
          l(j);
        }
      }
    } else s || (l({}), i(!1));
  }, [s, r]), !s) return null;
  const c = /* @__PURE__ */ o("div", { className: "py-1", children: e });
  return d ? /* @__PURE__ */ o(ur, { id: "dropdown-portal", children: /* @__PURE__ */ o(
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
      className: `dropdown-menu absolute ${p} mt-2 glass-surface rounded-lg shadow-lg ${t}`,
      style: a,
      children: c
    }
  );
}
function Mo({ children: e, onClick: r, className: t = "", asChild: s }) {
  const { onClose: n } = gt(), a = (l) => {
    setTimeout(() => n(), 150), r && r(l);
  };
  return s ? e ? Q.cloneElement(e, {
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
function So() {
  return /* @__PURE__ */ o("hr", { className: "my-1 border-gray-200" });
}
pe.Trigger = zo;
pe.Menu = $o;
pe.Item = Mo;
pe.Separator = So;
function sa({ icon: e, title: r, message: t, action: s }) {
  const n = Q.isValidElement(e);
  return n || e && (e.type, { ...e.props }), /* @__PURE__ */ u("div", { className: "text-center py-12", children: [
    n ? Q.cloneElement(e, {
      size: e.props.size || 48,
      className: `mx-auto text-gray-400 mb-4 ${e.props.className || ""}`.trim()
    }) : e ? Q.createElement(e, { size: 48, className: "mx-auto text-gray-400 mb-4" }) : /* @__PURE__ */ o(Qe, { size: 48, className: "mx-auto text-gray-400 mb-4" }),
    /* @__PURE__ */ o("h4", { className: "text-lg font-medium text-gray-600 mb-2", children: r }),
    /* @__PURE__ */ o("p", { className: "text-gray-500 mb-4", children: t }),
    s && /* @__PURE__ */ u("button", { className: "btn-fluid", onClick: s.onClick, children: [
      s.icon || /* @__PURE__ */ o(gs, { size: 16 }),
      s.label
    ] })
  ] });
}
function oa({ data: e, renderItem: r, renderExpandedContent: t }) {
  const [s, n] = O({}), a = (l) => {
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
              /* @__PURE__ */ o("div", { className: "ml-4", children: s[l.id] ? /* @__PURE__ */ o(Wt, { size: 20, className: "text-gray-500" }) : /* @__PURE__ */ o(Ae, { size: 20, className: "text-gray-500" }) })
            ]
          }
        ),
        s[l.id] && /* @__PURE__ */ o("div", { className: "px-4 pt-2 pb-4 bg-base-200/30 border-t border-base-300/50", children: t(l) })
      ]
    },
    l.id
  )) });
}
function na({
  onFileSelect: e,
  label: r,
  acceptedTypes: t,
  accept: s,
  helperText: n,
  multiple: a = !1
}) {
  return /* @__PURE__ */ u("div", { className: "border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-accent-500 transition-colors", children: [
    /* @__PURE__ */ o(Xt, { size: 48, className: "mx-auto text-gray-400 mb-4" }),
    /* @__PURE__ */ o("p", { className: "text-gray-600 mb-2", children: r || "Glissez-déposez vos fichiers ici ou" }),
    /* @__PURE__ */ u("label", { className: "btn-fluid cursor-pointer", children: [
      "Parcourir les fichiers",
      /* @__PURE__ */ o(
        "input",
        {
          type: "file",
          className: "hidden",
          onChange: (d) => {
            const i = Array.from(d.target.files || []);
            if (!(!e || i.length === 0)) {
              if (a) {
                e(i);
                return;
              }
              e(i[0]);
            }
          },
          multiple: a,
          accept: s
        }
      )
    ] }),
    n && /* @__PURE__ */ o("p", { className: "text-xs text-gray-500 mt-2", children: n }),
    !n && t && /* @__PURE__ */ o("p", { className: "text-xs text-gray-500 mt-2", children: t })
  ] });
}
const Ao = ({ title: e, links: r }) => /* @__PURE__ */ u("div", { children: [
  /* @__PURE__ */ o("h4", { className: "font-semibold text-base-content mb-4", children: e }),
  /* @__PURE__ */ o("ul", { className: "space-y-2", children: r.map((t) => /* @__PURE__ */ o("li", { children: /* @__PURE__ */ o(Yt, { href: t.href, className: "text-sm text-base-content/80 hover:text-primary transition-colors", children: t.text }) }, t.href + t.text)) })
] });
function aa({ sections: e, socialLinks: r, copyrightText: t }) {
  return !e || !r || !t ? null : /* @__PURE__ */ o("footer", { className: "glass-surface p-8 rounded-lg w-full", children: /* @__PURE__ */ u("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ o("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8", children: e.map((s) => /* @__PURE__ */ o(Ao, { title: s.title, links: s.links }, s.title)) }),
    /* @__PURE__ */ u("div", { className: "mt-8 pt-8 border-t border-base-300/50 flex flex-col sm:flex-row justify-between items-center", children: [
      /* @__PURE__ */ o("p", { className: "text-sm text-base-content/70", children: t }),
      /* @__PURE__ */ o("div", { className: "flex items-center gap-2 mt-4 sm:mt-0", children: r.map((s) => /* @__PURE__ */ o(ye, { asChild: !0, "aria-label": s.label, variant: "ghost", children: /* @__PURE__ */ o("a", { href: s.href, target: "_blank", rel: "noopener noreferrer", children: s.icon }) }, s.label)) })
    ] })
  ] }) });
}
const jt = ({
  children: e,
  variant: r = "standard",
  className: t = ""
}) => {
  const s = {
    standard: {
      icon: /* @__PURE__ */ o(We, { size: 12 }),
      color: "text-gray-500"
    },
    error: {
      icon: /* @__PURE__ */ o(Se, { size: 12 }),
      color: "text-red-500"
    },
    success: {
      icon: /* @__PURE__ */ o(mt, { size: 12 }),
      color: "text-green-500"
    }
  }, n = s[r] || s.standard;
  return /* @__PURE__ */ u("p", { className: `text-sm flex items-center gap-1 mt-1 ${n.color} ${t}`, children: [
    n.icon,
    e
  ] });
}, pr = Q.forwardRef(
  ({ label: e, name: r, startIcon: t, endIcon: s, className: n, error: a, helperText: l, ...d }, i) => {
    const p = [
      "input-fluid",
      t ? "pl-10" : "",
      s ? "pr-10" : "",
      a ? "border-red-500" : "",
      n
    ].join(" ").trim();
    return /* @__PURE__ */ u("div", { children: [
      e && /* @__PURE__ */ o("label", { htmlFor: r, className: "block text-sm font-medium mb-2", children: e }),
      /* @__PURE__ */ u("div", { className: "relative", children: [
        t && /* @__PURE__ */ o("div", { className: "absolute left-3 top-1/2 transform -translate-y-1/2", style: { color: "var(--fg-icon-primary)" }, children: Q.cloneElement(t, { size: 16 }) }),
        /* @__PURE__ */ o("input", { ref: i, id: r, name: r, className: p, ...d }),
        s && /* @__PURE__ */ o("div", { className: "absolute right-3 top-1/2 transform -translate-y-1/2", children: s })
      ] }),
      a && /* @__PURE__ */ o(jt, { variant: "error", children: a }),
      l && !a && /* @__PURE__ */ o(jt, { variant: "info", children: l })
    ] });
  }
);
pr.displayName = "Input";
function To({
  currentPage: e,
  totalPages: r,
  onPageChange: t,
  totalResults: s,
  resultsPerPage: n = 10
}) {
  const a = (e - 1) * n + 1, l = Math.min(e * n, s), d = (p) => {
    p >= 1 && p <= r && t(p);
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
          children: /* @__PURE__ */ o(Fr, { size: 16 })
        }
      ),
      (() => {
        var c;
        const p = [];
        for (let f = 1; f <= r; f++)
          f === 1 || f === r || f >= e - 1 && f <= e + 1 ? p.push(
            /* @__PURE__ */ o(
              "button",
              {
                onClick: () => d(f),
                className: `px-3 py-1 rounded-lg text-sm transition-colors ${e === f ? "bg-accent-500 text-white" : "hover:bg-glass-light"}`,
                children: f
              },
              f
            )
          ) : ((c = p[p.length - 1]) == null ? void 0 : c.key) !== "..." && p.push(/* @__PURE__ */ o("span", { className: "px-3 py-1", children: "..." }, "..."));
        return p;
      })(),
      /* @__PURE__ */ o(
        "button",
        {
          onClick: () => d(e + 1),
          disabled: e === r,
          className: "p-2 rounded-lg hover:bg-glass-light transition-colors disabled:opacity-50",
          children: /* @__PURE__ */ o(pt, { size: 16 })
        }
      )
    ] })
  ] });
}
const Rt = ({
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
  onSortChange: p,
  loadOptions: c,
  // Fonction pour le chargement dynamique: (searchTerm, page) => Promise<options[]> | null
  searchPlaceholder: f = "Rechercher...",
  maxHeight: w = 240,
  error: k,
  helperText: x
}) => {
  const [T, j] = O(!1), [R, E] = O(""), [q, D] = O(r), [W, m] = O(!1), [L, N] = O(!0), [J, ee] = O(1), [ae, g] = O({}), y = ce(null), S = ce(null), A = ce(null), v = ce(null), P = ce(null);
  ne(() => {
    c || D(r || []);
  }, [r, c]), ne(() => {
    c && (async () => {
      m(!0);
      try {
        const U = await c("", 1);
        U && U.length > 0 ? (D(U), N(U.length > 0), ee(1)) : (D([]), N(!1));
      } catch (U) {
        console.error("Erreur lors du chargement initial:", U), D([]), N(!1);
      } finally {
        m(!1);
      }
    })();
  }, [c]), ne(() => {
    if (T && y.current) {
      const _ = () => {
        const U = y.current.getBoundingClientRect(), le = window.scrollX || window.pageXOffset, Ce = window.scrollY || window.pageYOffset;
        g({
          position: "absolute",
          top: `${U.bottom + Ce + 4}px`,
          left: `${U.left + le}px`,
          width: `${U.width}px`,
          zIndex: 9999,
          maxHeight: `${w + 100}px`,
          // Marge pour la recherche/tri
          pointerEvents: "auto"
          // Re-enable clicks
        });
      };
      return _(), window.addEventListener("resize", _), window.addEventListener("scroll", _, !0), () => {
        window.removeEventListener("resize", _), window.removeEventListener("scroll", _, !0);
      };
    }
  }, [T, w]);
  const h = () => {
    a || (j(!T), !T && l && setTimeout(() => {
      var _;
      (_ = S.current) == null || _.focus();
    }, 100));
  }, V = (_) => {
    s(_), j(!1), E("");
  }, X = (_) => {
    const U = y.current && !y.current.contains(_.target), le = P.current && !P.current.contains(_.target);
    U && le && (j(!1), E(""));
  }, oe = fe(
    async (_) => {
      if (c) {
        m(!0), ee(1);
        try {
          const U = await c(_, 1);
          U === null ? (D([]), N(!1)) : (D(U), N(U.length > 0));
        } catch (U) {
          console.error("Erreur lors de la recherche:", U), D([]), N(!1);
        } finally {
          m(!1);
        }
      }
    },
    [c]
  ), Y = () => {
    d && p && p(i === "asc" ? "desc" : "asc");
  }, Z = Me(() => !l || c || !R ? q : q.filter(
    (_) => _.label.toLowerCase().includes(R.toLowerCase())
  ), [q, R, l]), K = Me(() => !d || p ? Z : [...Z].sort((_, U) => {
    const le = _.label.localeCompare(U.label);
    return i === "asc" ? le : -le;
  }), [Z, d, i, p]), b = fe(async () => {
    if (!(!L || !c)) {
      m(!0);
      try {
        const _ = J + 1, U = await c(R, _);
        U === null || U.length === 0 ? N(!1) : (D((le) => [...le, ...U]), ee(_));
      } catch (_) {
        console.error("Erreur lors du chargement:", _), N(!1);
      } finally {
        m(!1);
      }
    }
  }, [L, c, J, R]), G = ce(b);
  G.current = b;
  const I = fe(
    (_) => {
      W || (v.current && v.current.disconnect(), v.current = new IntersectionObserver((U) => {
        U[0].isIntersecting && L && c && G.current();
      }), _ && v.current.observe(_));
    },
    [W, L, c]
  );
  ne(() => (document.addEventListener("mousedown", X), () => {
    document.removeEventListener("mousedown", X), v.current && v.current.disconnect();
  }), []);
  const re = q.find(
    (_) => _.value === t
  );
  return /* @__PURE__ */ u("div", { className: "relative w-full", ref: y, children: [
    e && /* @__PURE__ */ o("label", { className: "block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300", children: e }),
    /* @__PURE__ */ u("div", { className: "relative", children: [
      /* @__PURE__ */ u(
        "button",
        {
          type: "button",
          className: `input-fluid w-full text-left flex items-center justify-between ${a ? "bg-gray-100 dark:bg-gray-800 cursor-not-allowed" : ""} ${k ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}`,
          onClick: h,
          disabled: a,
          "aria-haspopup": "listbox",
          "aria-expanded": T,
          children: [
            /* @__PURE__ */ o(
              "span",
              {
                className: `block truncate mr-2 ${re ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"}`,
                children: re ? re.label : n
              }
            ),
            /* @__PURE__ */ o(
              Ae,
              {
                size: 16,
                className: `transition-transform flex-shrink-0 ${T ? "rotate-180" : ""}`
              }
            )
          ]
        }
      ),
      T && /* @__PURE__ */ o(ur, { id: "fluid-select-portal", children: /* @__PURE__ */ u(
        "div",
        {
          ref: P,
          className: "glass-surface rounded-lg shadow-lg overflow-hidden",
          style: ae,
          children: [
            (l || d) && /* @__PURE__ */ o("div", { className: "p-2 border-b border-gray-200 dark:border-gray-700", children: /* @__PURE__ */ u("div", { className: "flex gap-2", children: [
              l && /* @__PURE__ */ u("div", { className: "flex-1 relative", children: [
                /* @__PURE__ */ o(
                  He,
                  {
                    size: 16,
                    className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  }
                ),
                /* @__PURE__ */ o(
                  "input",
                  {
                    ref: S,
                    type: "text",
                    value: R,
                    onChange: (_) => {
                      E(_.target.value), oe(_.target.value);
                    },
                    placeholder: f,
                    className: "w-full pl-9 pr-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  }
                )
              ] }),
              d && /* @__PURE__ */ u(
                "button",
                {
                  type: "button",
                  onClick: Y,
                  className: "px-3 py-2 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition-colors flex items-center gap-1",
                  title: `Trier par ordre ${i === "asc" ? "décroissant" : "croissant"}`,
                  children: [
                    /* @__PURE__ */ o(Gr, { size: 14 }),
                    i === "asc" ? "A-Z" : "Z-A"
                  ]
                }
              )
            ] }) }),
            /* @__PURE__ */ u(
              "div",
              {
                ref: A,
                className: "py-1 overflow-y-auto",
                style: { maxHeight: `${w}px` },
                children: [
                  W && K.length === 0 ? /* @__PURE__ */ u("div", { className: "flex items-center justify-center py-4", children: [
                    /* @__PURE__ */ o(et, { size: 16, className: "animate-spin mr-2" }),
                    /* @__PURE__ */ o("span", { className: "text-sm text-gray-500", children: "Chargement..." })
                  ] }) : K.length === 0 ? /* @__PURE__ */ o("div", { className: "px-4 py-3 text-sm text-gray-500 text-center", children: R ? "Aucun résultat trouvé" : "Aucune option disponible" }) : K.map((_, U) => {
                    const le = U === K.length - 1;
                    return /* @__PURE__ */ o(
                      "button",
                      {
                        ref: le && L && c ? I : null,
                        type: "button",
                        className: "w-full text-left px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-glass-light dark:hover:bg-glass-dark-light transition-colors focus:outline-none focus:bg-glass-light dark:focus:bg-glass-dark-light",
                        onClick: () => V(_.value),
                        role: "option",
                        "aria-selected": t === _.value,
                        children: _.label
                      },
                      _.value
                    );
                  }),
                  W && L && c && /* @__PURE__ */ u("div", { className: "flex items-center justify-center py-2", children: [
                    /* @__PURE__ */ o(et, { size: 14, className: "animate-spin mr-2" }),
                    /* @__PURE__ */ o("span", { className: "text-xs text-gray-500", children: "Chargement..." })
                  ] })
                ]
              }
            )
          ]
        }
      ) })
    ] }),
    (k || x) && /* @__PURE__ */ o(
      "p",
      {
        className: `mt-1 text-sm ${k ? "text-red-600 dark:text-red-400" : "text-gray-500 dark:text-gray-400"}`,
        children: k || x
      }
    )
  ] });
};
function la({
  data: e = [],
  columns: r = [],
  actions: t = [],
  title: s = "Table Interactive",
  itemsPerPage: n = 5,
  selectable: a = !0,
  onRowSelect: l,
  onRowClick: d,
  customFilters: i = null,
  filterConfig: p = [],
  onFilterChange: c
}) {
  const [f, w] = O(""), [k, x] = O("asc"), [T, j] = O(""), [R, E] = O([]), [q, D] = O(1), [W, m] = O(e), [L, N] = O({}), [J, ee] = O(!1);
  Me(() => {
    m(e);
  }, [e]);
  const ae = (b) => {
    const G = f === b && k === "asc" ? "desc" : "asc";
    w(b), x(G), m(
      (I) => [...I].sort((re, _) => re[b] < _[b] ? G === "asc" ? -1 : 1 : re[b] > _[b] ? G === "asc" ? 1 : -1 : 0)
    );
  }, g = (b) => {
    const G = R.includes(b) ? R.filter((I) => I !== b) : [...R, b];
    if (E(G), l) {
      const I = W.filter(
        (re) => G.includes(re.id)
      );
      l(I);
    }
  }, y = (b) => {
    const G = b.target.checked ? V.map((I) => I.id) : [];
    if (E(G), l) {
      const I = W.filter(
        (re) => G.includes(re.id)
      );
      l(I);
    }
  }, S = (b) => {
    D(b);
  }, A = (b, G) => {
    const I = { ...L, [b]: G };
    N(I), c && c(I);
  }, v = () => {
    N({}), c && c({});
  }, P = Me(() => {
    let b = W;
    if (T) {
      const G = r.filter((I) => I.searchable).map((I) => I.field);
      b = b.filter((I) => G.some(
        (re) => String(I[re]).toLowerCase().includes(T.toLowerCase())
      ));
    }
    return Object.entries(L).forEach(([G, I]) => {
      I != null && I !== "" && (b = b.filter((re) => Array.isArray(I) ? I.length === 0 || I.includes(re[G]) : re[G] === I));
    }), b;
  }, [W, T, r, L]), h = Math.ceil(P.length / n), V = Me(() => {
    const b = (q - 1) * n;
    return P.slice(b, b + n);
  }, [P, q, n]), X = p && p.length > 0 || i, oe = (p == null ? void 0 : p.length) || 0, Y = !!i, Z = oe > 0 && oe <= 2 && !Y, K = X && !Z;
  return /* @__PURE__ */ u("section", { className: "glass-card", children: [
    s && /* @__PURE__ */ o("h3", { className: "text-xl font-semibold mb-6", children: s }),
    /* @__PURE__ */ u("div", { className: "mb-6 flex flex-wrap items-end gap-4", children: [
      /* @__PURE__ */ o(
        "div",
        {
          className: "flex-1 min-w-[200px] w-full",
          children: /* @__PURE__ */ o(
            pr,
            {
              type: "text",
              placeholder: "Rechercher...",
              value: T,
              onChange: (b) => j(b.target.value),
              startIcon: /* @__PURE__ */ o(He, { size: 20 }),
              className: "w-full"
            }
          )
        }
      ),
      Z && p.map((b) => /* @__PURE__ */ o("div", { className: "w-48 min-w-[150px]", children: /* @__PURE__ */ o(
        Rt,
        {
          options: b.options,
          value: L[b.field] || "",
          onChange: (G) => A(b.field, G),
          placeholder: b.placeholder || b.label
        }
      ) }, b.field)),
      K && /* @__PURE__ */ u(dt, { children: [
        /* @__PURE__ */ u(
          de,
          {
            variant: "outline",
            startIcon: /* @__PURE__ */ o(as, { size: 16 }),
            className: "whitespace-nowrap",
            onClick: () => ee(!0),
            children: [
              "Filtres",
              Object.keys(L).filter((b) => L[b]).length > 0 && /* @__PURE__ */ o("span", { className: "ml-1.5 px-1.5 py-0.5 text-xs bg-primary-100 text-primary-700 rounded-full", children: Object.keys(L).filter((b) => L[b]).length })
            ]
          }
        ),
        /* @__PURE__ */ o(
          ir,
          {
            isOpen: J,
            onClose: () => ee(!1),
            title: "Filtres disponibles",
            size: "lg",
            children: /* @__PURE__ */ u("div", { className: "pt-6 pb-2", children: [
              /* @__PURE__ */ u("div", { className: "p-1 space-y-6", children: [
                p && p.length > 0 && /* @__PURE__ */ o("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: p.map((b) => /* @__PURE__ */ o("div", { children: /* @__PURE__ */ o(
                  Rt,
                  {
                    label: b.label,
                    options: b.options,
                    value: L[b.field] || "",
                    onChange: (G) => A(b.field, G),
                    placeholder: b.placeholder || `Sélectionner ${b.label}`
                  }
                ) }, b.field)) }),
                p && p.length > 0 && i && /* @__PURE__ */ o("div", { className: "border-t border-gray-100 my-2" }),
                i && /* @__PURE__ */ o("div", { className: "custom-filters-container", children: i })
              ] }),
              /* @__PURE__ */ u("div", { className: "mt-8 flex justify-end gap-3 pt-4 border-t border-gray-100", children: [
                /* @__PURE__ */ o(de, { variant: "ghost", onClick: v, children: "Réinitialiser" }),
                /* @__PURE__ */ o(de, { onClick: () => ee(!1), children: "Voir les résultats" })
              ] })
            ] })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ o("div", { className: "overflow-x-auto", children: /* @__PURE__ */ u("table", { className: "w-full", children: [
      /* @__PURE__ */ o("thead", { children: /* @__PURE__ */ u("tr", { className: "border-b border-gray-200", children: [
        a && /* @__PURE__ */ o("th", { className: "text-left p-3 w-10", children: /* @__PURE__ */ o(
          Tt,
          {
            checked: V.length > 0 && V.every(
              (b) => R.includes(b.id)
            ),
            onChange: y
          }
        ) }),
        r.map((b) => /* @__PURE__ */ o(
          "th",
          {
            className: `text-left p-3 ${b.sortable ? "cursor-pointer hover:bg-gray-50" : ""}`,
            onClick: () => b.sortable && ae(b.field),
            children: /* @__PURE__ */ u("div", { className: "flex items-center gap-2", children: [
              b.header,
              b.sortable && f === b.field && (k === "asc" ? /* @__PURE__ */ o(Wt, { size: 16 }) : /* @__PURE__ */ o(Ae, { size: 16 }))
            ] })
          },
          b.field
        )),
        t && t.length > 0 && /* @__PURE__ */ o("th", { className: "text-right p-3", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ o("tbody", { children: V.length === 0 ? /* @__PURE__ */ o("tr", { children: /* @__PURE__ */ o(
        "td",
        {
          colSpan: a ? r.length + (t.length > 0 ? 2 : 1) : r.length + (t.length > 0 ? 1 : 0),
          className: "p-6 text-center text-gray-500",
          children: "Aucune donnée disponible"
        }
      ) }) : V.map((b) => /* @__PURE__ */ u(
        "tr",
        {
          className: `border-b border-gray-100 hover:bg-gray-50 ${d ? "cursor-pointer" : ""}`,
          onClick: () => d && d(b),
          children: [
            a && /* @__PURE__ */ o("td", { className: "p-3", onClick: (G) => G.stopPropagation(), children: /* @__PURE__ */ o(
              Tt,
              {
                checked: R.includes(b.id),
                onChange: () => g(b.id)
              }
            ) }),
            r.map((G) => /* @__PURE__ */ o("td", { className: "p-3", children: G.renderCell ? G.renderCell(b) : /* @__PURE__ */ o("span", { className: "text-gray-600", children: b[G.field] }) }, `${b.id}-${G.field}`)),
            t && t.length > 0 && /* @__PURE__ */ o(
              "td",
              {
                className: "p-3 text-right",
                onClick: (G) => G.stopPropagation(),
                children: /* @__PURE__ */ o("div", { className: "flex justify-end gap-1", children: t.map((G, I) => /* @__PURE__ */ o(
                  ye,
                  {
                    onClick: () => G.onClick(b),
                    title: G.label,
                    icon: G.icon
                  },
                  I
                )) })
              }
            )
          ]
        },
        b.id
      )) })
    ] }) }),
    R.length > 0 && /* @__PURE__ */ o("div", { className: "mt-4 p-3 bg-blue-50 rounded-lg", children: /* @__PURE__ */ u("p", { className: "text-sm text-blue-700", children: [
      R.length,
      " élément",
      R.length > 1 ? "s" : "",
      " ",
      "sélectionné",
      R.length > 1 ? "s" : ""
    ] }) }),
    P.length > n && /* @__PURE__ */ o("div", { className: "mt-6", children: /* @__PURE__ */ o(
      To,
      {
        currentPage: q,
        totalPages: h,
        onPageChange: S,
        totalResults: P.length,
        resultsPerPage: n
      }
    ) })
  ] });
}
const ia = ({
  children: e,
  variant: r = "standard",
  htmlFor: t,
  className: s = ""
}) => {
  const n = {
    standard: "text-foreground",
    required: "text-red-600",
    optional: "text-gray-500"
  }, a = r === "required" ? /* @__PURE__ */ u(dt, { children: [
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
}, Io = ({
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
Io.displayName = "ModalFooter";
const ca = (e = "80vh") => Me(() => ({
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
function da({ type: e = "info", message: r, timestamp: t, onClose: s }) {
  const n = {
    info: /* @__PURE__ */ o(We, { size: 20, className: "text-blue-500 mt-0.5" }),
    success: /* @__PURE__ */ o(ft, { size: 20, className: "text-green-500 mt-0.5" }),
    warning: /* @__PURE__ */ o(Se, { size: 20, className: "text-yellow-500 mt-0.5" }),
    error: /* @__PURE__ */ o(he, { size: 20, className: "text-red-500 mt-0.5" })
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
    /* @__PURE__ */ o("button", { onClick: s, className: "text-gray-400 hover:text-gray-600", children: /* @__PURE__ */ o(he, { size: 16 }) })
  ] }) });
}
function ua({ value: e, label: r, showPercentage: t = !0 }) {
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
function ma({ options: e, name: r, selectedValue: t, onChange: s }) {
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
const pa = ({ title: e, children: r, variant: t = "default", className: s = "" }) => {
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
function fr({
  item: e,
  isActive: r,
  isCollapsed: t = !1,
  onClick: s,
  level: n = 0,
  activePath: a = [],
  wrapper: l
}) {
  const [d, i] = O(() => {
    const k = e.resource || e.id;
    return a.includes(k);
  }), p = e.children && e.children.length > 0, c = e.icon, f = e.name || e.label;
  e.resource || e.id;
  const w = fe((k) => {
    p && (k.preventDefault(), i(!d)), s && s(e);
  }, [p, d, e, s]);
  return /* @__PURE__ */ u("div", { className: "w-full", children: [
    /* @__PURE__ */ u(
      "button",
      {
        onClick: w,
        className: `nav-item w-full text-left ${p ? "justify-between" : ""}`,
        children: [
          /* @__PURE__ */ u("div", { className: "flex items-center gap-2", children: [
            c && /* @__PURE__ */ o("div", { className: "flex h-6 w-6 items-center justify-center", children: /* @__PURE__ */ o(c, { size: 16 }) }),
            t ? "" : f
          ] }),
          p && /* @__PURE__ */ o(
            pt,
            {
              size: 16,
              className: `transform transition-transform ${d ? "rotate-90" : ""}`
            }
          )
        ]
      }
    ),
    p && d && !t && /* @__PURE__ */ o("div", { className: "ml-4 mt-1 space-y-1 border-l pl-2 border-primary-100 dark:border-primary-800", children: e.children.map((k) => {
      const x = k.id, T = /* @__PURE__ */ o(
        fr,
        {
          item: k,
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
        const j = l(T, k);
        return j && j.key !== void 0 && j.key !== null ? j : /* @__PURE__ */ o("div", { children: j }, x);
      } else
        return T;
    }) })
  ] });
}
function fa({
  items: e = [],
  isCollapsed: r = !1,
  onNavigate: t,
  activePath: s = [],
  className: n = "",
  wrapper: a
}) {
  const l = fe((i) => {
    t && t(i);
  }, [t]), d = (i) => {
    const p = i.resource || i.id, c = /* @__PURE__ */ o(
      fr,
      {
        item: i,
        isActive: s.includes(p),
        isCollapsed: r,
        onClick: l,
        activePath: s,
        wrapper: a
      },
      p
    );
    return a ? a(c, i) : c;
  };
  return /* @__PURE__ */ o("nav", { className: `space-y-1 ${n}`, children: e.map((i) => {
    const p = i.resource || i.id;
    return /* @__PURE__ */ o("div", { children: d(i) }, p);
  }) });
}
function ha({ className: e, ...r }) {
  const s = ["animate-pulse rounded-md bg-gray-300 dark:bg-gray-700", e].filter(Boolean).join(" ");
  return /* @__PURE__ */ o(
    "div",
    {
      className: s,
      ...r
    }
  );
}
function ga({ message: e, time: r, onDismiss: t }) {
  return /* @__PURE__ */ u("div", { className: "flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg", children: [
    /* @__PURE__ */ u("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ o(qt, { size: 16, className: "text-blue-600" }),
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
        children: /* @__PURE__ */ o(he, { size: 16 })
      }
    )
  ] });
}
const Et = {
  sm: "h-4 w-4",
  md: "h-8 w-8",
  lg: "h-12 w-12"
}, Pt = {
  sm: "h-1.5 w-1.5",
  md: "h-2 w-2",
  lg: "h-3 w-3"
};
function ba({ type: e = "spin", size: r = "md" }) {
  if (e === "dots") {
    const s = Pt[r] || Pt.md;
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
  const t = Et[r] || Et.md;
  return e === "pulse" ? /* @__PURE__ */ o("div", { className: `animate-pulse ${t} bg-accent-500 rounded-full` }) : /* @__PURE__ */ o(
    "div",
    {
      className: `animate-spin rounded-full ${t} border-4 border-accent-500 border-t-transparent`
    }
  );
}
const xa = ({
  direction: e = "vertical",
  spacing: r = 4,
  children: t,
  className: s = "",
  as: n = "div",
  ...a
}) => {
  const l = "flex", d = e === "vertical" ? "flex-col" : "flex-row", i = `gap-${r}`, p = [
    l,
    d,
    i,
    s
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ o(n, { className: p, ...a, children: t });
};
function ya({
  title: e,
  value: r,
  change: t,
  trend: s,
  icon: n,
  variant: a = "default"
}) {
  const d = ((i) => {
    switch (i) {
      case "warning":
        return "bg-orange-100 text-orange-600";
      case "error":
        return "bg-red-100 text-red-600";
      case "success":
        return "bg-green-100 text-green-600";
      case "info":
        return "bg-sky-100 text-sky-600";
      default:
        return "bg-blue-100 text-blue-600";
    }
  })(a);
  return /* @__PURE__ */ u("div", { className: "glass-surface p-5 rounded-xl transition-all duration-200 hover:shadow-md", children: [
    /* @__PURE__ */ u("div", { className: "flex justify-between items-start", children: [
      /* @__PURE__ */ u("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ o("h4", { className: "text-sm font-medium text-gray-500", children: e }),
        /* @__PURE__ */ o("div", { className: "text-2xl font-bold text-gray-800 tracking-tight", children: r })
      ] }),
      n && /* @__PURE__ */ o(
        "div",
        {
          className: `p-3 rounded-xl ${d} flex items-center justify-center shadow-sm`,
          children: /* @__PURE__ */ o(n, { size: 20, strokeWidth: 2 })
        }
      )
    ] }),
    (t || s) && /* @__PURE__ */ u("div", { className: "flex items-center gap-2 mt-3", children: [
      s === "up" && /* @__PURE__ */ o($s, { size: 16, className: "text-green-500" }),
      s === "down" && /* @__PURE__ */ o(Cs, { size: 16, className: "text-red-500" }),
      t && /* @__PURE__ */ o(
        "span",
        {
          className: `text-sm font-medium ${s === "up" ? "text-green-600" : s === "down" ? "text-red-600" : "text-gray-600"}`,
          children: t
        }
      )
    ] })
  ] });
}
function va({ steps: e, currentStep: r }) {
  return /* @__PURE__ */ o("div", { className: "flex items-center mb-6", children: e.map((t, s) => /* @__PURE__ */ u("div", { className: "flex items-center", children: [
    /* @__PURE__ */ o(
      "div",
      {
        className: `flex items-center justify-center w-8 h-8 rounded-full border-2 ${r >= t.id ? "bg-accent-500 border-accent-500 text-white" : "border-gray-300 text-gray-400"}`,
        children: r > t.id ? /* @__PURE__ */ o(mt, { size: 16 }) : t.id
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
var _t = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, ie = (e) => !e || typeof e != "object" || Object.keys(e).length === 0, jo = (e, r) => JSON.stringify(e) === JSON.stringify(r);
function hr(e, r) {
  e.forEach(function(t) {
    Array.isArray(t) ? hr(t, r) : r.push(t);
  });
}
function gr(e) {
  let r = [];
  return hr(e, r), r;
}
var br = (...e) => gr(e).filter(Boolean), xr = (e, r) => {
  let t = {}, s = Object.keys(e), n = Object.keys(r);
  for (let a of s) if (n.includes(a)) {
    let l = e[a], d = r[a];
    Array.isArray(l) || Array.isArray(d) ? t[a] = br(d, l) : typeof l == "object" && typeof d == "object" ? t[a] = xr(l, d) : t[a] = d + " " + l;
  } else t[a] = e[a];
  for (let a of n) s.includes(a) || (t[a] = r[a]);
  return t;
}, Lt = (e) => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim();
const bt = "-", Ro = (e) => {
  const r = Po(e), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: s
  } = e;
  return {
    getClassGroupId: (l) => {
      const d = l.split(bt);
      return d[0] === "" && d.length !== 1 && d.shift(), yr(d, r) || Eo(l);
    },
    getConflictingClassGroupIds: (l, d) => {
      const i = t[l] || [];
      return d && s[l] ? [...i, ...s[l]] : i;
    }
  };
}, yr = (e, r) => {
  var l;
  if (e.length === 0)
    return r.classGroupId;
  const t = e[0], s = r.nextPart.get(t), n = s ? yr(e.slice(1), s) : void 0;
  if (n)
    return n;
  if (r.validators.length === 0)
    return;
  const a = e.join(bt);
  return (l = r.validators.find(({
    validator: d
  }) => d(a))) == null ? void 0 : l.classGroupId;
}, Gt = /^\[(.+)\]$/, Eo = (e) => {
  if (Gt.test(e)) {
    const r = Gt.exec(e)[1], t = r == null ? void 0 : r.substring(0, r.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}, Po = (e) => {
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
      const a = n === "" ? r : Vt(r, n);
      a.classGroupId = t;
      return;
    }
    if (typeof n == "function") {
      if (_o(n)) {
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
      ot(l, Vt(r, a), t, s);
    });
  });
}, Vt = (e, r) => {
  let t = e;
  return r.split(bt).forEach((s) => {
    t.nextPart.has(s) || t.nextPart.set(s, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(s);
  }), t;
}, _o = (e) => e.isThemeGetter, Lo = (e) => {
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
}, nt = "!", at = ":", Go = at.length, Vo = (e) => {
  const {
    prefix: r,
    experimentalParseClassName: t
  } = e;
  let s = (n) => {
    const a = [];
    let l = 0, d = 0, i = 0, p;
    for (let x = 0; x < n.length; x++) {
      let T = n[x];
      if (l === 0 && d === 0) {
        if (T === at) {
          a.push(n.slice(i, x)), i = x + Go;
          continue;
        }
        if (T === "/") {
          p = x;
          continue;
        }
      }
      T === "[" ? l++ : T === "]" ? l-- : T === "(" ? d++ : T === ")" && d--;
    }
    const c = a.length === 0 ? n : n.substring(i), f = Oo(c), w = f !== c, k = p && p > i ? p - i : void 0;
    return {
      modifiers: a,
      hasImportantModifier: w,
      baseClassName: f,
      maybePostfixModifierPosition: k
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
}, Oo = (e) => e.endsWith(nt) ? e.substring(0, e.length - 1) : e.startsWith(nt) ? e.substring(1) : e, Bo = (e) => {
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
}, Do = (e) => ({
  cache: Lo(e.cacheSize),
  parseClassName: Vo(e),
  sortModifiers: Bo(e),
  ...Ro(e)
}), Fo = /\s+/, Uo = (e, r) => {
  const {
    parseClassName: t,
    getClassGroupId: s,
    getConflictingClassGroupIds: n,
    sortModifiers: a
  } = r, l = [], d = e.trim().split(Fo);
  let i = "";
  for (let p = d.length - 1; p >= 0; p -= 1) {
    const c = d[p], {
      isExternal: f,
      modifiers: w,
      hasImportantModifier: k,
      baseClassName: x,
      maybePostfixModifierPosition: T
    } = t(c);
    if (f) {
      i = c + (i.length > 0 ? " " + i : i);
      continue;
    }
    let j = !!T, R = s(j ? x.substring(0, T) : x);
    if (!R) {
      if (!j) {
        i = c + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (R = s(x), !R) {
        i = c + (i.length > 0 ? " " + i : i);
        continue;
      }
      j = !1;
    }
    const E = a(w).join(":"), q = k ? E + nt : E, D = q + R;
    if (l.includes(D))
      continue;
    l.push(D);
    const W = n(R, j);
    for (let m = 0; m < W.length; ++m) {
      const L = W[m];
      l.push(q + L);
    }
    i = c + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function Ho() {
  let e = 0, r, t, s = "";
  for (; e < arguments.length; )
    (r = arguments[e++]) && (t = vr(r)) && (s && (s += " "), s += t);
  return s;
}
const vr = (e) => {
  if (typeof e == "string")
    return e;
  let r, t = "";
  for (let s = 0; s < e.length; s++)
    e[s] && (r = vr(e[s])) && (t && (t += " "), t += r);
  return t;
};
function lt(e, ...r) {
  let t, s, n, a = l;
  function l(i) {
    const p = r.reduce((c, f) => f(c), e());
    return t = Do(p), s = t.cache.get, n = t.cache.set, a = d, d(i);
  }
  function d(i) {
    const p = s(i);
    if (p)
      return p;
    const c = Uo(i, t);
    return n(i, c), c;
  }
  return function() {
    return a(Ho.apply(null, arguments));
  };
}
const se = (e) => {
  const r = (t) => t[e] || [];
  return r.isThemeGetter = !0, r;
}, wr = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, kr = /^\((?:(\w[\w-]*):)?(.+)\)$/i, qo = /^\d+\/\d+$/, Wo = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Zo = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Xo = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Ko = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Yo = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, $e = (e) => qo.test(e), F = (e) => !!e && !Number.isNaN(Number(e)), we = (e) => !!e && Number.isInteger(Number(e)), Ot = (e) => e.endsWith("%") && F(e.slice(0, -1)), xe = (e) => Wo.test(e), Jo = () => !0, Qo = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Zo.test(e) && !Xo.test(e)
), xt = () => !1, en = (e) => Ko.test(e), tn = (e) => Yo.test(e), rn = (e) => !$(e) && !M(e), sn = (e) => je(e, zr, xt), $ = (e) => wr.test(e), ke = (e) => je(e, $r, Qo), Ke = (e) => je(e, hn, F), on = (e) => je(e, Nr, xt), nn = (e) => je(e, Cr, tn), an = (e) => je(e, xt, en), M = (e) => kr.test(e), De = (e) => Re(e, $r), ln = (e) => Re(e, gn), cn = (e) => Re(e, Nr), dn = (e) => Re(e, zr), un = (e) => Re(e, Cr), mn = (e) => Re(e, bn, !0), je = (e, r, t) => {
  const s = wr.exec(e);
  return s ? s[1] ? r(s[1]) : t(s[2]) : !1;
}, Re = (e, r, t = !1) => {
  const s = kr.exec(e);
  return s ? s[1] ? r(s[1]) : t : !1;
}, Nr = (e) => e === "position", pn = /* @__PURE__ */ new Set(["image", "url"]), Cr = (e) => pn.has(e), fn = /* @__PURE__ */ new Set(["length", "size", "percentage"]), zr = (e) => fn.has(e), $r = (e) => e === "length", hn = (e) => e === "number", gn = (e) => e === "family-name", bn = (e) => e === "shadow", it = () => {
  const e = se("color"), r = se("font"), t = se("text"), s = se("font-weight"), n = se("tracking"), a = se("leading"), l = se("breakpoint"), d = se("container"), i = se("spacing"), p = se("radius"), c = se("shadow"), f = se("inset-shadow"), w = se("drop-shadow"), k = se("blur"), x = se("perspective"), T = se("aspect"), j = se("ease"), R = se("animate"), E = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], q = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], D = () => ["auto", "hidden", "clip", "visible", "scroll"], W = () => ["auto", "contain", "none"], m = () => [M, $, i], L = () => [$e, "full", "auto", ...m()], N = () => [we, "none", "subgrid", M, $], J = () => ["auto", {
    span: ["full", we, M, $]
  }, M, $], ee = () => [we, "auto", M, $], ae = () => ["auto", "min", "max", "fr", M, $], g = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline"], y = () => ["start", "end", "center", "stretch"], S = () => ["auto", ...m()], A = () => [$e, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...m()], v = () => [e, M, $], P = () => [Ot, ke], h = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    p,
    M,
    $
  ], V = () => ["", F, De, ke], X = () => ["solid", "dashed", "dotted", "double"], oe = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Y = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    k,
    M,
    $
  ], Z = () => ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", M, $], K = () => ["none", F, M, $], b = () => ["none", F, M, $], G = () => [F, M, $], I = () => [$e, "full", ...m()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [xe],
      breakpoint: [xe],
      color: [Jo],
      container: [xe],
      "drop-shadow": [xe],
      ease: ["in", "out", "in-out"],
      font: [rn],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [xe],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [xe],
      shadow: [xe],
      spacing: ["px", F],
      text: [xe],
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
        aspect: ["auto", "square", $e, $, M, T]
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
        columns: [F, $, M, d]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": E()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": E()
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
        object: [...q(), $, M]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: D()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": D()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": D()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: W()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": W()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": W()
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
        z: [we, "auto", M, $]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [$e, "full", "auto", d, ...m()]
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
        flex: [F, $e, "auto", "initial", "none", $]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", F, M, $]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", F, M, $]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [we, "first", "last", "none", M, $]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": N()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: J()
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
        "grid-rows": N()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: J()
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
        "auto-cols": ae()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ae()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: m()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": m()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": m()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...g(), "normal"]
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
        content: ["normal", ...g()]
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
        "place-content": g()
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
        p: m()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: m()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: m()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: m()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: m()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: m()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: m()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: m()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: m()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: S()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: S()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: S()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: S()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: S()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: S()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: S()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: S()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: S()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": m()
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
        "space-y": m()
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
        size: A()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [d, "screen", ...A()]
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
          ...A()
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
          ...A()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", ...A()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "none", ...A()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", ...A()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", t, De, ke]
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
        font: [s, M, Ke]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Ot, $]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ln, $, r]
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
        tracking: [n, M, $]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [F, "none", M, Ke]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          a,
          ...m()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", M, $]
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
        list: ["disc", "decimal", "none", M, $]
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
        decoration: [...X(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [F, "from-font", "auto", M, ke]
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
        "underline-offset": [F, "auto", M, $]
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
        indent: m()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", M, $]
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
        content: ["none", M, $]
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
        bg: [...q(), cn, on]
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
        bg: ["auto", "cover", "contain", dn, sn]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, we, M, $],
          radial: ["", M, $],
          conic: [we, M, $]
        }, un, nn]
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
        from: P()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: P()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: P()
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
        rounded: h()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": h()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": h()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": h()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": h()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": h()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": h()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": h()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": h()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": h()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": h()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": h()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": h()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": h()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": h()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: V()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": V()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": V()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": V()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": V()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": V()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": V()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": V()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": V()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": V()
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
        "divide-y": V()
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
        border: [...X(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...X(), "hidden", "none"]
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
        outline: [...X(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [F, M, $]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", F, De, ke]
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
          mn,
          an
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
        "inset-shadow": ["none", M, $, f]
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
        ring: V()
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
        "ring-offset": [F, ke]
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
        "inset-ring": V()
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
        opacity: [F, M, $]
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
          M,
          $
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: Y()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [F, M, $]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [F, M, $]
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
          M,
          $
        ]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", F, M, $]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [F, M, $]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", F, M, $]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [F, M, $]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", F, M, $]
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
          M,
          $
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": Y()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [F, M, $]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [F, M, $]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", F, M, $]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [F, M, $]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", F, M, $]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [F, M, $]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [F, M, $]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", F, M, $]
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
        "border-spacing": m()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": m()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": m()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", M, $]
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
        duration: [F, "initial", M, $]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", j, M, $]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [F, M, $]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", R, M, $]
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
        perspective: [x, M, $]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": Z()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: K()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": K()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": K()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": K()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: b()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": b()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": b()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": b()
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
        skew: G()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": G()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": G()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [M, $, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: Z()
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
        translate: I()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": I()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": I()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": I()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", M, $]
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
        "scroll-m": m()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": m()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": m()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": m()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": m()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": m()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": m()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": m()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": m()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": m()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": m()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": m()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": m()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": m()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": m()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": m()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": m()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": m()
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
        "will-change": ["auto", "scroll", "contents", "transform", M, $]
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
        stroke: [F, De, ke, Ke]
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
}, xn = (e, {
  cacheSize: r,
  prefix: t,
  experimentalParseClassName: s,
  extend: n = {},
  override: a = {}
}) => (Le(e, "cacheSize", r), Le(e, "prefix", t), Le(e, "experimentalParseClassName", s), Fe(e.theme, a.theme), Fe(e.classGroups, a.classGroups), Fe(e.conflictingClassGroups, a.conflictingClassGroups), Fe(e.conflictingClassGroupModifiers, a.conflictingClassGroupModifiers), Le(e, "orderSensitiveModifiers", a.orderSensitiveModifiers), Ue(e.theme, n.theme), Ue(e.classGroups, n.classGroups), Ue(e.conflictingClassGroups, n.conflictingClassGroups), Ue(e.conflictingClassGroupModifiers, n.conflictingClassGroupModifiers), Mr(e, n, "orderSensitiveModifiers"), e), Le = (e, r, t) => {
  t !== void 0 && (e[r] = t);
}, Fe = (e, r) => {
  if (r)
    for (const t in r)
      Le(e, t, r[t]);
}, Ue = (e, r) => {
  if (r)
    for (const t in r)
      Mr(e, r, t);
}, Mr = (e, r, t) => {
  const s = r[t];
  s !== void 0 && (e[t] = e[t] ? e[t].concat(s) : s);
}, yn = (e, ...r) => typeof e == "function" ? lt(it, e, ...r) : lt(() => xn(it(), e), ...r), vn = /* @__PURE__ */ lt(it);
var wn = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, Sr = (e) => e || void 0, Ge = (...e) => Sr(gr(e).filter(Boolean).join(" ")), Ye = null, me = {}, ct = !1, _e = (...e) => (r) => r.twMerge ? ((!Ye || ct) && (ct = !1, Ye = ie(me) ? vn : yn({ ...me, extend: { theme: me.theme, classGroups: me.classGroups, conflictingClassGroupModifiers: me.conflictingClassGroupModifiers, conflictingClassGroups: me.conflictingClassGroups, ...me.extend } })), Sr(Ye(Ge(e)))) : Ge(e), Bt = (e, r) => {
  for (let t in r) e.hasOwnProperty(t) ? e[t] = Ge(e[t], r[t]) : e[t] = r[t];
  return e;
}, Ee = (e, r) => {
  let { extend: t = null, slots: s = {}, variants: n = {}, compoundVariants: a = [], compoundSlots: l = [], defaultVariants: d = {} } = e, i = { ...wn, ...r }, p = t != null && t.base ? Ge(t.base, e == null ? void 0 : e.base) : e == null ? void 0 : e.base, c = t != null && t.variants && !ie(t.variants) ? xr(n, t.variants) : n, f = t != null && t.defaultVariants && !ie(t.defaultVariants) ? { ...t.defaultVariants, ...d } : d;
  !ie(i.twMergeConfig) && !jo(i.twMergeConfig, me) && (ct = !0, me = i.twMergeConfig);
  let w = ie(t == null ? void 0 : t.slots), k = ie(s) ? {} : { base: Ge(e == null ? void 0 : e.base, w && (t == null ? void 0 : t.base)), ...s }, x = w ? k : Bt({ ...t == null ? void 0 : t.slots }, ie(k) ? { base: e == null ? void 0 : e.base } : k), T = ie(t == null ? void 0 : t.compoundVariants) ? a : br(t == null ? void 0 : t.compoundVariants, a), j = (E) => {
    if (ie(c) && ie(s) && w) return _e(p, E == null ? void 0 : E.class, E == null ? void 0 : E.className)(i);
    if (T && !Array.isArray(T)) throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof T}`);
    if (l && !Array.isArray(l)) throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof l}`);
    let q = (g, y, S = [], A) => {
      let v = S;
      if (typeof y == "string") v = v.concat(Lt(y).split(" ").map((P) => `${g}:${P}`));
      else if (Array.isArray(y)) v = v.concat(y.reduce((P, h) => P.concat(`${g}:${h}`), []));
      else if (typeof y == "object" && typeof A == "string") {
        for (let P in y) if (y.hasOwnProperty(P) && P === A) {
          let h = y[P];
          if (h && typeof h == "string") {
            let V = Lt(h);
            v[A] ? v[A] = v[A].concat(V.split(" ").map((X) => `${g}:${X}`)) : v[A] = V.split(" ").map((X) => `${g}:${X}`);
          } else Array.isArray(h) && h.length > 0 && (v[A] = h.reduce((V, X) => V.concat(`${g}:${X}`), []));
        }
      }
      return v;
    }, D = (g, y = c, S = null, A = null) => {
      var v;
      let P = y[g];
      if (!P || ie(P)) return null;
      let h = (v = A == null ? void 0 : A[g]) != null ? v : E == null ? void 0 : E[g];
      if (h === null) return null;
      let V = _t(h), X = Array.isArray(i.responsiveVariants) && i.responsiveVariants.length > 0 || i.responsiveVariants === !0, oe = f == null ? void 0 : f[g], Y = [];
      if (typeof V == "object" && X) for (let [b, G] of Object.entries(V)) {
        let I = P[G];
        if (b === "initial") {
          oe = G;
          continue;
        }
        Array.isArray(i.responsiveVariants) && !i.responsiveVariants.includes(b) || (Y = q(b, I, Y, S));
      }
      let Z = V != null && typeof V != "object" ? V : _t(oe), K = P[Z || "false"];
      return typeof Y == "object" && typeof S == "string" && Y[S] ? Bt(Y, K) : Y.length > 0 ? (Y.push(K), S === "base" ? Y.join(" ") : Y) : K;
    }, W = () => c ? Object.keys(c).map((g) => D(g, c)) : null, m = (g, y) => {
      if (!c || typeof c != "object") return null;
      let S = new Array();
      for (let A in c) {
        let v = D(A, c, g, y), P = g === "base" && typeof v == "string" ? v : v && v[g];
        P && (S[S.length] = P);
      }
      return S;
    }, L = {};
    for (let g in E) E[g] !== void 0 && (L[g] = E[g]);
    let N = (g, y) => {
      var S;
      let A = typeof (E == null ? void 0 : E[g]) == "object" ? { [g]: (S = E[g]) == null ? void 0 : S.initial } : {};
      return { ...f, ...L, ...A, ...y };
    }, J = (g = [], y) => {
      let S = [];
      for (let { class: A, className: v, ...P } of g) {
        let h = !0;
        for (let [V, X] of Object.entries(P)) {
          let oe = N(V, y)[V];
          if (Array.isArray(X)) {
            if (!X.includes(oe)) {
              h = !1;
              break;
            }
          } else {
            let Y = (Z) => Z == null || Z === !1;
            if (Y(X) && Y(oe)) continue;
            if (oe !== X) {
              h = !1;
              break;
            }
          }
        }
        h && (A && S.push(A), v && S.push(v));
      }
      return S;
    }, ee = (g) => {
      let y = J(T, g);
      if (!Array.isArray(y)) return y;
      let S = {};
      for (let A of y) if (typeof A == "string" && (S.base = _e(S.base, A)(i)), typeof A == "object") for (let [v, P] of Object.entries(A)) S[v] = _e(S[v], P)(i);
      return S;
    }, ae = (g) => {
      if (l.length < 1) return null;
      let y = {};
      for (let { slots: S = [], class: A, className: v, ...P } of l) {
        if (!ie(P)) {
          let h = !0;
          for (let V of Object.keys(P)) {
            let X = N(V, g)[V];
            if (X === void 0 || (Array.isArray(P[V]) ? !P[V].includes(X) : P[V] !== X)) {
              h = !1;
              break;
            }
          }
          if (!h) continue;
        }
        for (let h of S) y[h] = y[h] || [], y[h].push([A, v]);
      }
      return y;
    };
    if (!ie(s) || !w) {
      let g = {};
      if (typeof x == "object" && !ie(x)) for (let y of Object.keys(x)) g[y] = (S) => {
        var A, v;
        return _e(x[y], m(y, S), ((A = ee(S)) != null ? A : [])[y], ((v = ae(S)) != null ? v : [])[y], S == null ? void 0 : S.class, S == null ? void 0 : S.className)(i);
      };
      return g;
    }
    return _e(p, W(), J(T), E == null ? void 0 : E.class, E == null ? void 0 : E.className)(i);
  }, R = () => {
    if (!(!c || typeof c != "object")) return Object.keys(c);
  };
  return j.variantKeys = R(), j.extend = t, j.base = p, j.slots = x, j.variants = c, j.defaultVariants = f, j.compoundSlots = l, j.compoundVariants = T, j;
};
const kn = Ee({
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
}), Nn = Q.forwardRef(({ children: e, isCompact: r, className: t, ...s }, n) => {
  const { wrapper: a, table: l } = kn({ isCompact: r });
  return /* @__PURE__ */ o("div", { className: a({ class: t }), children: /* @__PURE__ */ o("table", { ref: n, className: l(), ...s, children: e }) });
});
Nn.displayName = "Table";
const Cn = Ee({
  slots: {
    base: "group/tbody"
  }
}), zn = Q.forwardRef(({ children: e, className: r, ...t }, s) => {
  const { base: n } = Cn();
  return /* @__PURE__ */ o("tbody", { ref: s, className: n({ class: r }), ...t, children: e });
});
zn.displayName = "TableBody";
const $n = Ee({
  slots: {
    base: "group/td p-4"
  }
}), Mn = Q.forwardRef(({ children: e, className: r, ...t }, s) => {
  const { base: n } = $n();
  return /* @__PURE__ */ o("td", { ref: s, className: n({ class: r }), ...t, children: e });
});
Mn.displayName = "TableCell";
const Sn = Ee({
  slots: {
    base: "group/th p-4 text-left text-sm font-semibold text-base-content/80 bg-base-200/50"
  }
}), An = Q.forwardRef(({ children: e, className: r, ...t }, s) => {
  const { base: n } = Sn();
  return /* @__PURE__ */ o("th", { ref: s, className: n({ class: r }), ...t, children: e });
});
An.displayName = "TableColumn";
const Tn = Ee({
  slots: {
    base: "group/thead"
  }
}), In = Q.forwardRef(({ children: e, className: r, ...t }, s) => {
  const { base: n } = Tn();
  return /* @__PURE__ */ o("thead", { ref: s, className: n({ class: r }), ...t, children: e });
});
In.displayName = "TableHeader";
const jn = Ee({
  slots: {
    base: "group/tr border-b border-base-200 last:border-b-0 hover:bg-base-200/50"
  }
}), Rn = Q.forwardRef(({ children: e, className: r, ...t }, s) => {
  const { base: n } = jn();
  return /* @__PURE__ */ o("tr", { ref: s, className: n({ class: r }), ...t, children: e });
});
Rn.displayName = "TableRow";
function wa({ tabs: e }) {
  var s;
  const [r, t] = O(e && e.length > 0 ? e[0].id : null);
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
function ka({ label: e, name: r, value: t, onChange: s, placeholder: n, maxLength: a, className: l, ...d }) {
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
const Ne = "fluid-glass-theme";
function En(e = {}) {
  const [r, t] = O("light"), [s, n] = O(!1);
  ne(() => {
    n(!0);
    const c = localStorage.getItem(Ne);
    if (c && (c === "light" || c === "dark"))
      t(c);
    else if (e.mode === "auto") {
      const w = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      t(w), localStorage.setItem(Ne, w);
    } else {
      const f = e.mode || "light";
      t(f), localStorage.setItem(Ne, f);
    }
  }, [e.mode]);
  const a = () => {
    const c = r === "light" ? "dark" : "light";
    t(c), document.documentElement.setAttribute("data-theme", c), localStorage.setItem(Ne, c);
  }, l = (c) => {
    (c === "light" || c === "dark") && (t(c), document.documentElement.setAttribute("data-theme", c), localStorage.setItem(Ne, c));
  }, d = () => {
    if (localStorage.removeItem(Ne), e.mode === "auto") {
      const f = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      t(f), document.documentElement.setAttribute("data-theme", f);
    }
  }, i = (c) => {
    const f = document.documentElement;
    Object.entries(c).forEach(([w, k]) => {
      const x = `--fg-${w.replace(/([A-Z])/g, "-$1").toLowerCase()}`;
      f.style.setProperty(x, k.toString());
    });
  }, p = () => {
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
    ].forEach((w) => {
      c.style.removeProperty(w);
    });
  };
  return ne(() => {
    s && document.documentElement.setAttribute("data-theme", r);
  }, [r, s]), ne(() => {
    e.config && s && i(e.config);
  }, [e.config, s]), ne(() => {
    if (e.mode === "auto" && s) {
      const c = window.matchMedia("(prefers-color-scheme: dark)"), f = (w) => {
        if (!localStorage.getItem(Ne)) {
          const x = w.matches ? "dark" : "light";
          t(x), document.documentElement.setAttribute("data-theme", x);
        }
      };
      return c.addEventListener("change", f), () => {
        c.removeEventListener("change", f);
      };
    }
  }, [e.mode, s]), {
    theme: r,
    toggleTheme: a,
    setTheme: l,
    clearSavedTheme: d,
    applyTheme: i,
    resetTheme: p,
    mounted: s
  };
}
const Ar = qe();
function Na({ children: e, mode: r = "auto", config: t }) {
  const s = En({ mode: r, config: t });
  return /* @__PURE__ */ o(Ar.Provider, { value: s, children: e });
}
function Pn() {
  const e = ut(Ar);
  if (!e)
    throw new Error("useThemeContext doit être utilisé dans un ThemeProvider");
  return e;
}
function Dt({ showLabel: e = !0 }) {
  const { theme: r, toggleTheme: t } = Pn();
  return e ? /* @__PURE__ */ o(
    de,
    {
      onClick: t,
      "aria-label": `Passer au mode ${r === "light" ? "sombre" : "clair"}`,
      startIcon: r === "light" ? /* @__PURE__ */ o(vt, { size: 16 }) : /* @__PURE__ */ o(wt, { size: 16 }),
      children: e && (r === "light" ? "Mode sombre" : "Mode clair")
    }
  ) : /* @__PURE__ */ o(
    ye,
    {
      onClick: t,
      "aria-label": `Passer au mode ${r === "light" ? "sombre" : "clair"}`,
      icon: r === "light" ? /* @__PURE__ */ o(vt, { size: 16 }) : /* @__PURE__ */ o(wt, { size: 16 })
    }
  );
}
const _n = (e) => {
  switch (e) {
    case "user":
      return /* @__PURE__ */ o(Kt, { size: 16, className: "text-white" });
    case "order":
      return /* @__PURE__ */ o(Qe, { size: 16, className: "text-white" });
    case "update":
      return /* @__PURE__ */ o(ys, { size: 16, className: "text-white" });
    case "delete":
      return /* @__PURE__ */ o(ks, { size: 16, className: "text-white" });
    default:
      return null;
  }
}, Ln = (e) => {
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
function Ca({ items: e }) {
  return !e || e.length === 0 ? null : /* @__PURE__ */ o("div", { className: "space-y-4", children: e.map((r) => /* @__PURE__ */ u("div", { className: "flex items-start gap-4", children: [
    /* @__PURE__ */ o(
      "div",
      {
        className: `w-8 h-8 rounded-full flex items-center justify-center ${Ln(r.type)}`,
        children: _n(r.type)
      }
    ),
    /* @__PURE__ */ u("div", { className: "flex-1", children: [
      /* @__PURE__ */ o("p", { className: "font-medium", children: r.title }),
      /* @__PURE__ */ u("p", { className: "text-sm text-gray-600", children: [
        "par ",
        r.user
      ] }),
      /* @__PURE__ */ u("p", { className: "text-xs text-gray-500 flex items-center gap-1", children: [
        /* @__PURE__ */ o(Yr, { size: 12 }),
        "il y a ",
        r.time
      ] })
    ] })
  ] }, r.id)) });
}
const Tr = qe(null), Gn = {
  "top-right": "top-5 right-5",
  "top-left": "top-5 left-5",
  "top-center": "top-5 left-1/2 -translate-x-1/2",
  "bottom-right": "bottom-5 right-5",
  "bottom-left": "bottom-5 left-5",
  "bottom-center": "bottom-5 left-1/2 -translate-x-1/2"
}, Vn = {
  "top-right": "animate-slide-in-right",
  "top-left": "animate-slide-in-left",
  "top-center": "animate-slide-in-top",
  "bottom-right": "animate-slide-in-right",
  "bottom-left": "animate-slide-in-left",
  "bottom-center": "animate-slide-in-bottom"
};
function za({ children: e }) {
  const [r, t] = O([]), s = (c) => {
    const f = Date.now().toString(), w = { id: f, ...c };
    return t((k) => [...k, w]), f;
  }, n = (c, f) => {
    t((w) => {
      const k = w.find((x) => x.id === c);
      return k && k.onClose && k.onClose(f || !0), w.filter((x) => x.id !== c);
    });
  }, a = (c, f) => (t(
    (w) => w.map(
      (k) => k.id === c ? { ...k, ...f } : k
    )
  ), c), p = {
    toasts: r,
    addToast: s,
    removeToast: n,
    updateToast: a,
    loading: (c, f = {}) => s({
      type: "loading",
      message: c,
      autoClose: !1,
      ...f
    }),
    promise: (c, f) => {
      var R;
      const { pending: w, success: k, error: x } = f, T = s({
        type: "loading",
        message: typeof w == "string" ? w : ((R = w == null ? void 0 : w.render) == null ? void 0 : R.call(w)) || "Chargement...",
        autoClose: !1,
        ...typeof w == "object" ? w : {}
      }), j = Promise.resolve(typeof c == "function" ? c() : c);
      return j.then((E) => {
        var D;
        const q = typeof k == "string" ? k : ((D = k == null ? void 0 : k.render) == null ? void 0 : D.call(k, { data: E })) || "Succès";
        return a(T, {
          type: "success",
          message: q,
          autoClose: 5e3,
          ...typeof k == "object" ? k : {}
        }), E;
      }).catch((E) => {
        var D;
        const q = typeof x == "string" ? x : ((D = x == null ? void 0 : x.render) == null ? void 0 : D.call(x, { data: E })) || "Une erreur est survenue";
        return a(T, {
          type: "error",
          message: q,
          autoClose: 5e3,
          ...typeof x == "object" ? x : {}
        }), Promise.reject(E);
      }), j;
    },
    dismissAll: () => {
      r.forEach((c) => {
        c.onClose && c.onClose("dismissed");
      }), t([]);
    },
    // Méthodes pour chaque type de toast
    info: (c, f = {}) => s({ type: "info", message: c, autoClose: 5e3, ...f }),
    success: (c, f = {}) => s({ type: "success", message: c, autoClose: 5e3, ...f }),
    warning: (c, f = {}) => s({ type: "warning", message: c, autoClose: 5e3, ...f }),
    error: (c, f = {}) => s({ type: "error", message: c, autoClose: 5e3, ...f })
  };
  return /* @__PURE__ */ u(Tr.Provider, { value: p, children: [
    e,
    /* @__PURE__ */ o(Bn, {})
  ] });
}
function On() {
  const e = ut(Tr);
  if (!e)
    throw new Error("useToast doit être utilisé à l'intérieur d'un ToastProvider");
  return e;
}
function Bn() {
  const { toasts: e, removeToast: r } = On(), t = e.reduce((s, n) => {
    const a = n.position || "bottom-right";
    return s[a] || (s[a] = []), s[a].push(n), s;
  }, {});
  return Object.entries(t).map(([s, n]) => /* @__PURE__ */ o("div", { className: `fixed z-50 flex flex-col gap-2 ${Gn[s]}`, children: n.map((a) => /* @__PURE__ */ o(ge, { ...a, onClose: (l) => r(a.id, l) }, a.id)) }, s));
}
function ge({
  id: e,
  type: r = "info",
  message: t,
  onClose: s,
  autoClose: n = 5e3,
  position: a = "bottom-right",
  onOpen: l,
  isLoading: d = !1
}) {
  const i = ce(null), [p, c] = O(!0), f = {
    info: /* @__PURE__ */ o(We, { size: 20, className: "text-blue-500 mt-0.5" }),
    success: /* @__PURE__ */ o(ft, { size: 20, className: "text-green-500 mt-0.5" }),
    warning: /* @__PURE__ */ o(Se, { size: 20, className: "text-yellow-500 mt-0.5" }),
    error: /* @__PURE__ */ o(Se, { size: 20, className: "text-red-500 mt-0.5" }),
    loading: /* @__PURE__ */ o(et, { size: 20, className: "text-blue-500 mt-0.5 animate-spin" })
  }, w = {
    info: "bg-blue-50 border border-blue-200",
    success: "bg-green-50 border border-green-200",
    warning: "bg-yellow-50 border border-yellow-200",
    error: "bg-red-50 border border-red-200",
    loading: "bg-blue-50 border border-blue-200"
  };
  ne(() => (l && l(), n !== !1 && !d && (i.current = setTimeout(() => {
    c(!1), setTimeout(() => s("timeout"), 300);
  }, n)), () => {
    i.current && clearTimeout(i.current);
  }), [n, s, l, d]);
  const k = () => {
    c(!1), i.current && clearTimeout(i.current), setTimeout(() => s("dismissed"), 300);
  }, x = p ? "opacity-100" : "opacity-0 translate-x-2";
  return /* @__PURE__ */ u(
    "div",
    {
      className: `max-w-sm w-full p-4 rounded-lg shadow-lg transition-all duration-300 ${w[r]} ${Vn[a]} ${x}`,
      children: [
        /* @__PURE__ */ u("div", { className: "flex items-start gap-3", children: [
          f[r],
          /* @__PURE__ */ o("div", { className: "flex-1", children: /* @__PURE__ */ o("p", { className: "text-sm font-medium", children: t }) }),
          r !== "loading" && /* @__PURE__ */ o("button", { onClick: k, className: "text-gray-400 hover:text-gray-600", children: /* @__PURE__ */ o(he, { size: 16 }) })
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
ge.info = (e, r) => (console.warn("Toast.info() est déprécié. Utilisez useToast().info() à la place."), null);
ge.success = (e, r) => (console.warn("Toast.success() est déprécié. Utilisez useToast().success() à la place."), null);
ge.warning = (e, r) => (console.warn("Toast.warning() est déprécié. Utilisez useToast().warning() à la place."), null);
ge.error = (e, r) => (console.warn("Toast.error() est déprécié. Utilisez useToast().error() à la place."), null);
ge.loading = (e, r) => (console.warn("Toast.loading() est déprécié. Utilisez useToast().loading() à la place."), null);
ge.promise = (e, r) => (console.warn("Toast.promise() est déprécié. Utilisez useToast().promise() à la place."), e);
ge.dismiss = (e) => {
  console.warn("Toast.dismiss() est déprécié. Utilisez useToast().removeToast() à la place.");
};
ge.dismissAll = () => {
  console.warn("Toast.dismissAll() est déprécié. Utilisez useToast().dismissAll() à la place.");
};
function $a({ label: e, checked: r, onChange: t }) {
  const [s, n] = O(r || !1);
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
function Ma({
  logo: e,
  navItems: r = [],
  userDropdownItems: t = [],
  userAvatar: s,
  userName: n,
  notificationCount: a = 0,
  onSearch: l,
  onNavItemClick: d,
  onNotificationClick: i,
  customActions: p = [],
  showSearch: c = !0,
  showNotifications: f = !0,
  showThemeSwitcher: w = !0,
  showThemeSwitcherLabel: k = !1
}) {
  const [x, T] = O(""), [j, R] = O(!1), [E, q] = O("");
  O(() => {
    r.length > 0 && !x && T(r[0].id);
  }, [r]);
  const D = (m) => {
    T(m.id), d && d(m);
  }, W = (m) => {
    q(m.target.value), l && l(m.target.value);
  };
  return /* @__PURE__ */ u("div", { className: "nav-fluid", children: [
    /* @__PURE__ */ u("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ u("div", { className: "flex items-center gap-6", children: [
        e && /* @__PURE__ */ o("div", { className: "font-bold text-lg", children: e }),
        /* @__PURE__ */ o("nav", { className: "hidden md:flex space-x-8", children: r.map((m) => /* @__PURE__ */ u(
          "button",
          {
            className: `flex items-center gap-2 text-sm font-medium ${x === m.id ? "text-accent-600" : "text-gray-600 hover:text-gray-800"}`,
            onClick: () => D(m),
            children: [
              m.icon && /* @__PURE__ */ o(m.icon, { size: 16 }),
              m.label
            ]
          },
          m.id
        )) })
      ] }),
      /* @__PURE__ */ u("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ u("div", { className: "hidden md:flex items-center gap-2", children: [
          p.map((m, L) => /* @__PURE__ */ u("div", { className: "relative", children: [
            /* @__PURE__ */ o(
              ye,
              {
                icon: m.icon,
                "aria-label": m.label,
                variant: m.variant || "ghost",
                onClick: m.onClick,
                className: m.className
              }
            ),
            m.badge && /* @__PURE__ */ o(
              zt,
              {
                variant: m.badgeVariant || "red",
                className: "absolute -top-1 -right-1 min-w-[18px] h-[18px] flex items-center justify-center text-[10px] px-1 py-0",
                children: m.badge > 99 ? "99+" : m.badge
              }
            )
          ] }, m.key || L)),
          c && /* @__PURE__ */ u("div", { className: "relative", children: [
            /* @__PURE__ */ o(
              "input",
              {
                type: "text",
                placeholder: "Rechercher...",
                className: "py-1 pl-10 pr-4 rounded-lg bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 w-64",
                value: E,
                onChange: W
              }
            ),
            /* @__PURE__ */ o(
              He,
              {
                size: 16,
                className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              }
            )
          ] }),
          w && /* @__PURE__ */ o(Dt, { showLabel: k }),
          f && /* @__PURE__ */ u("div", { className: "relative", children: [
            /* @__PURE__ */ o(
              ye,
              {
                icon: /* @__PURE__ */ o(qt, { size: 16 }),
                "aria-label": "Notifications",
                variant: "ghost",
                onClick: i
              }
            ),
            a > 0 && /* @__PURE__ */ o(
              zt,
              {
                variant: "red",
                className: "absolute -top-1 -right-1 min-w-[18px] h-[18px] flex items-center justify-center text-[10px] px-1 py-0",
                children: a > 99 ? "99+" : a
              }
            )
          ] }),
          t.length > 0 && /* @__PURE__ */ u(pe, { children: [
            /* @__PURE__ */ o(pe.Trigger, { asChild: !0, children: /* @__PURE__ */ u(
              de,
              {
                variant: "ghost",
                className: "flex items-center gap-2",
                endIcon: /* @__PURE__ */ o(Ae, { size: 16 }),
                children: [
                  s ? typeof s == "string" ? /* @__PURE__ */ o(
                    Ve,
                    {
                      src: s,
                      alt: n || "User",
                      size: "sm",
                      fallback: (n || "U").charAt(0)
                    }
                  ) : s : /* @__PURE__ */ o(
                    Ve,
                    {
                      size: "sm",
                      fallback: (n || "U").charAt(0)
                    }
                  ),
                  n && /* @__PURE__ */ o("span", { className: "font-medium", children: n })
                ]
              }
            ) }),
            /* @__PURE__ */ o(pe.Menu, { children: t.map(
              (m, L) => m.isSeparator ? /* @__PURE__ */ o(pe.Separator, {}, `sep-${L}`) : /* @__PURE__ */ u(
                pe.Item,
                {
                  onClick: m.onClick,
                  className: m.isDanger ? "text-red-600 hover:text-red-700" : "",
                  children: [
                    m.icon,
                    m.label
                  ]
                },
                `${m.label}-${L}`
              )
            ) })
          ] })
        ] }),
        /* @__PURE__ */ o(
          ye,
          {
            icon: j ? /* @__PURE__ */ o(he, { size: 24 }) : /* @__PURE__ */ o(Zt, { size: 24 }),
            onClick: () => R(!j),
            className: "md:hidden",
            "aria-label": "Menu",
            variant: "ghost"
          }
        )
      ] })
    ] }),
    j && /* @__PURE__ */ o("div", { className: "md:hidden mt-4 py-4 border-t", children: /* @__PURE__ */ u("nav", { className: "flex flex-col space-y-4", children: [
      r.map((m) => /* @__PURE__ */ u(
        "button",
        {
          className: `flex items-center gap-2 text-sm font-medium ${x === m.id ? "text-accent-600" : "text-gray-600"}`,
          onClick: () => {
            D(m), R(!1);
          },
          children: [
            m.icon && /* @__PURE__ */ o(m.icon, { size: 18 }),
            m.label
          ]
        },
        m.id
      )),
      /* @__PURE__ */ u("div", { className: "pt-4 border-t", children: [
        c && /* @__PURE__ */ u("div", { className: "relative mb-4", children: [
          /* @__PURE__ */ o(
            "input",
            {
              type: "text",
              placeholder: "Rechercher...",
              className: "w-full py-2 pl-10 pr-4 rounded-lg bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500",
              value: E,
              onChange: W
            }
          ),
          /* @__PURE__ */ o(
            He,
            {
              size: 16,
              className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            }
          )
        ] }),
        w && /* @__PURE__ */ o("div", { className: "mb-4", children: /* @__PURE__ */ o(Dt, { showLabel: !0 }) }),
        n && /* @__PURE__ */ u("div", { className: "flex items-center gap-3 mb-2", children: [
          s ? typeof s == "string" ? /* @__PURE__ */ o(
            Ve,
            {
              src: s,
              alt: n,
              size: "sm",
              fallback: n.charAt(0)
            }
          ) : s : /* @__PURE__ */ o(Ve, { size: "sm", fallback: n.charAt(0) }),
          /* @__PURE__ */ o("span", { className: "font-medium", children: n })
        ] }),
        t.filter((m) => !m.isSeparator).map((m, L) => /* @__PURE__ */ u(
          "button",
          {
            onClick: m.onClick,
            className: `flex items-center gap-2 text-sm font-medium py-2 w-full ${m.isDanger ? "text-red-600" : "text-gray-600"}`,
            children: [
              m.icon,
              m.label
            ]
          },
          `${m.label}-${L}`
        ))
      ] })
    ] }) })
  ] });
}
function Sa({ view: e, setView: r }) {
  return /* @__PURE__ */ u("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ o(
      "button",
      {
        onClick: () => r("grid"),
        className: `p-2 rounded-lg transition-colors ${e === "grid" ? "bg-accent-500 text-white" : "hover:bg-glass-light"}`,
        children: /* @__PURE__ */ o(is, { size: 16 })
      }
    ),
    /* @__PURE__ */ o(
      "button",
      {
        onClick: () => r("list"),
        className: `p-2 rounded-lg transition-colors ${e === "list" ? "bg-accent-500 text-white" : "hover:bg-glass-light"}`,
        children: /* @__PURE__ */ o(us, { size: 16 })
      }
    )
  ] });
}
export {
  qn as Accordion,
  Wn as Alert,
  Ve as Avatar,
  zt as Badge,
  Zn as Breadcrumb,
  de as Button,
  bo as Card,
  xo as CardBody,
  yo as CardDescription,
  vo as CardFooter,
  wo as CardHeader,
  ko as CardTitle,
  Tt as Checkbox,
  Xn as Chip,
  Kn as Collapsible,
  Yn as CollapsibleSidebar,
  Jn as Container,
  Qn as ContextMenu,
  ea as DataCard,
  ta as DocumentUploader,
  ra as Drawer,
  pe as Dropdown,
  sa as EmptyState,
  oa as ExpandableTable,
  na as FileUploader,
  aa as Footer,
  jt as HelperText,
  ye as IconButton,
  pr as Input,
  la as InteractiveTable,
  ia as Label,
  Yt as Link,
  ir as Modal,
  dr as ModalBody,
  Io as ModalFooter,
  cr as ModalHeader,
  da as Notification,
  To as Pagination,
  ua as ProgressBar,
  ma as RadioGroup,
  pa as SectionBox,
  Rt as Select,
  fr as SidebarMenuItem,
  fa as SidebarNavigation,
  ha as Skeleton,
  ga as Snackbar,
  ba as Spinner,
  xa as Stack,
  ya as StatCard,
  va as Stepper,
  Nn as Table,
  zn as TableBody,
  Mn as TableCell,
  An as TableColumn,
  In as TableHeader,
  Rn as TableRow,
  wa as Tabs,
  ka as Textarea,
  Na as ThemeProvider,
  Dt as ThemeSwitcher,
  Ca as Timeline,
  ge as Toast,
  za as ToastProvider,
  $a as Toggle,
  Ma as TopNavigation,
  Sa as ViewModeSwitch,
  ca as useModalLayout,
  On as useToast
};

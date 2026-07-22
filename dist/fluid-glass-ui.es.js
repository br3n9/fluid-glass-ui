"use client";
import { jsx as o, jsxs as d, Fragment as xt } from "react/jsx-runtime";
import ee, { forwardRef as Xt, createElement as nt, useState as G, createContext as Je, useCallback as ye, useEffect as ie, useRef as me, useContext as yt, useMemo as je } from "react";
import { usePress as Gr } from "@react-aria/interactions";
import { createPortal as Jt } from "react-dom";
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vr = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Or = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (r, t, s) => s ? s.toUpperCase() : t.toLowerCase()
), Mt = (e) => {
  const r = Or(e);
  return r.charAt(0).toUpperCase() + r.slice(1);
}, Yt = (...e) => e.filter((r, t, s) => !!r && r.trim() !== "" && s.indexOf(r) === t).join(" ").trim(), Br = (e) => {
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
var Dr = {
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
const Fr = Xt(
  ({
    color: e = "currentColor",
    size: r = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: s,
    className: n = "",
    children: a,
    iconNode: l,
    ...u
  }, i) => nt(
    "svg",
    {
      ref: i,
      ...Dr,
      width: r,
      height: r,
      stroke: e,
      strokeWidth: s ? Number(t) * 24 / Number(r) : t,
      className: Yt("lucide", n),
      ...!a && !Br(u) && { "aria-hidden": "true" },
      ...u
    },
    [
      ...l.map(([p, c]) => nt(p, c)),
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
const U = (e, r) => {
  const t = Xt(
    ({ className: s, ...n }, a) => nt(Fr, {
      ref: a,
      iconNode: r,
      className: Yt(
        `lucide-${Vr(Mt(e))}`,
        `lucide-${e}`,
        s
      ),
      ...n
    })
  );
  return t.displayName = Mt(e), t;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ur = [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
], Wr = U("arrow-up-down", Ur);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qr = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
], at = U("bell", qr);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hr = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], vt = U("check", Hr);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zr = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Ee = U("chevron-down", Zr);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kr = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Xr = U("chevron-left", Kr);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jr = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], wt = U("chevron-right", Jr);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yr = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], Qt = U("chevron-up", Yr);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qr = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], Re = U("circle-alert", Qr);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const es = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], kt = U("circle-check-big", es);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ts = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
], rs = U("circle-x", ts);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ss = [
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], os = U("clock", ss);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ns = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
], as = U("download", ns);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ls = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], is = U("eye", ls);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cs = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], lt = U("file-text", cs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ds = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }]
], us = U("file", ds);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ms = [
  [
    "path",
    {
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
], ps = U("funnel", ms);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fs = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
], hs = U("grid-3x3", fs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gs = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
], Ye = U("info", gs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bs = [
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 18h.01", key: "1tta3j" }],
  ["path", { d: "M3 6h.01", key: "1rqtza" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 18h13", key: "1lx6n3" }],
  ["path", { d: "M8 6h13", key: "ik3vkj" }]
], xs = U("list", bs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ys = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], it = U("loader-circle", ys);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vs = [
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 18h16", key: "19g7jn" }],
  ["path", { d: "M4 6h16", key: "1o0s65" }]
], er = U("menu", vs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ws = [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
], St = U("moon", ws);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ks = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Ns = U("plus", ks);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cs = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], Xe = U("search", Cs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zs = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  [
    "path",
    {
      d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
      key: "ohrbg2"
    }
  ]
], $s = U("square-pen", zs);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ms = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
], At = U("sun", Ms);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ss = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
], As = U("trash-2", Ss);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ts = [
  ["path", { d: "M16 17h6v-6", key: "t6n2it" }],
  ["path", { d: "m22 17-8.5-8.5-5 5L2 7", key: "x473p" }]
], Is = U("trending-down", Ts);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const js = [
  ["path", { d: "M16 7h6v6", key: "box55l" }],
  ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
], Rs = U("trending-up", js);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Es = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
], tr = U("upload", Es);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ps = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], rr = U("user", Ps);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _s = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], ve = U("x", _s);
function Ls({ title: e, trigger: r, children: t, isOpen: s, onToggle: n }) {
  return /* @__PURE__ */ d("div", { className: "glass-surface rounded-lg overflow-hidden border border-white/10", children: [
    /* @__PURE__ */ d(
      "button",
      {
        onClick: n,
        className: "w-full flex justify-between items-center p-4 text-left font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500",
        "aria-expanded": s,
        children: [
          /* @__PURE__ */ o("div", { className: "flex-1 min-w-0 pr-4", children: r || e }),
          /* @__PURE__ */ o(
            Ee,
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
function Qn({
  title: e,
  children: r,
  items: t,
  type: s = "single",
  className: n = ""
}) {
  return t && Array.isArray(t) ? /* @__PURE__ */ o("div", { className: n, children: t.map((a, l) => /* @__PURE__ */ o("div", { className: "mb-2 last:mb-0", children: /* @__PURE__ */ o(Tt, { title: a.title, trigger: a.trigger, children: a.content }) }, a.id || l)) }) : /* @__PURE__ */ o("div", { className: n, children: /* @__PURE__ */ o(Tt, { title: e, children: r }) });
}
function Tt({ title: e, trigger: r, children: t }) {
  const [s, n] = G(!1);
  return /* @__PURE__ */ o(
    Ls,
    {
      title: e,
      trigger: r,
      isOpen: s,
      onToggle: () => n(!s),
      children: t
    }
  );
}
const It = {
  info: {
    icon: Ye,
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    iconColor: "text-blue-600",
    titleColor: "text-blue-900",
    textColor: "text-blue-700"
  },
  success: {
    icon: kt,
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    iconColor: "text-green-600",
    titleColor: "text-green-900",
    textColor: "text-green-700"
  },
  warning: {
    icon: Re,
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
    iconColor: "text-yellow-600",
    titleColor: "text-yellow-900",
    textColor: "text-yellow-700"
  },
  danger: {
    icon: rs,
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    iconColor: "text-red-600",
    titleColor: "text-red-900",
    textColor: "text-red-700"
  }
};
function ea({ variant: e = "info", title: r, children: t }) {
  const s = It[e] ?? It.info, n = s.icon;
  return /* @__PURE__ */ d(
    "div",
    {
      className: `flex items-center gap-3 p-4 border rounded-lg ${s.bgColor} ${s.borderColor}`,
      children: [
        /* @__PURE__ */ o(n, { size: 20, className: s.iconColor }),
        /* @__PURE__ */ d("div", { children: [
          r && /* @__PURE__ */ o("p", { className: `font-medium ${s.titleColor}`, children: r }),
          /* @__PURE__ */ o("p", { className: `text-sm ${s.textColor}`, children: t })
        ] })
      ]
    }
  );
}
const Gs = {
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
  src: r,
  icon: t = /* @__PURE__ */ o(rr, {}),
  className: s = "bg-accent-500"
}) {
  const n = Gs[e], a = [
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
  ) : ee.cloneElement(t, {
    size: n.iconSize,
    className: "text-white"
  }) });
}
const jt = {
  accent: "bg-accent-500",
  green: "bg-green-500",
  red: "bg-red-500",
  yellow: "bg-yellow-500",
  gray: "bg-gray-500"
};
function et({ variant: e = "accent", children: r, className: t = "" }) {
  const n = [
    "px-3 py-1 text-xs font-medium text-white rounded-full",
    jt[e] || jt.accent,
    t
  ].join(" ").trim();
  return /* @__PURE__ */ o("span", { className: n, children: r });
}
const sr = ({
  href: e,
  variant: r = "standard",
  icon: t,
  children: s,
  className: n = "",
  ...a
}) => {
  const l = "hover:underline", u = {
    standard: "text-accent-500 hover:text-accent-600",
    discreet: "text-gray-600 hover:text-gray-800",
    danger: "text-red-500 hover:text-red-600",
    icon: "flex items-center gap-2 p-2 rounded-lg hover:bg-glass-light transition-colors"
  }, i = [
    r === "icon" ? "" : l,
    u[r] || u.standard,
    n
  ].join(" ").trim(), p = (e == null ? void 0 : e.startsWith("http")) || (e == null ? void 0 : e.startsWith("mailto:")) || (e == null ? void 0 : e.startsWith("tel:"));
  if (typeof window < "u" && window.next && window.next.Link) {
    const c = window.next.Link;
    return /* @__PURE__ */ d(c, { href: e, className: i, ...a, children: [
      t,
      s
    ] });
  }
  return /* @__PURE__ */ d(
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
function ta({ items: e = [] }) {
  return /* @__PURE__ */ o("nav", { className: "flex items-center space-x-2 text-sm", "aria-label": "Breadcrumb", children: e.map((r, t) => /* @__PURE__ */ d("div", { className: "flex items-center", children: [
    t > 0 && /* @__PURE__ */ o(wt, { size: 16, className: "mx-2 text-gray-400" }),
    r.href ? /* @__PURE__ */ o(sr, { href: r.href, children: r.label }) : /* @__PURE__ */ o("span", { className: "text-gray-600", children: r.label })
  ] }, t)) });
}
const Vs = {
  primary: "",
  // Default style
  outline: "btn-outline",
  ghost: "btn-ghost"
}, Os = {
  small: "text-sm py-2 px-3",
  medium: "",
  // Default size
  large: "text-lg py-4 px-6"
}, fe = ee.forwardRef(
  ({
    children: e,
    variant: r = "primary",
    size: t = "medium",
    loading: s = !1,
    // API unifiée sur 'loading' uniquement
    startIcon: n,
    endIcon: a,
    disabled: l = !1,
    className: u = "",
    ...i
  }, p) => {
    const m = [
      "btn-fluid",
      Vs[r],
      Os[t],
      u
    ].filter(Boolean).join(" ").trim();
    return /* @__PURE__ */ d(
      "button",
      {
        ref: p,
        className: m,
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
fe.displayName = "Button";
const Nt = "-", Bs = (e) => {
  const r = Fs(e), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: s
  } = e;
  return {
    getClassGroupId: (l) => {
      const u = l.split(Nt);
      return u[0] === "" && u.length !== 1 && u.shift(), or(u, r) || Ds(l);
    },
    getConflictingClassGroupIds: (l, u) => {
      const i = t[l] || [];
      return u && s[l] ? [...i, ...s[l]] : i;
    }
  };
}, or = (e, r) => {
  var l;
  if (e.length === 0)
    return r.classGroupId;
  const t = e[0], s = r.nextPart.get(t), n = s ? or(e.slice(1), s) : void 0;
  if (n)
    return n;
  if (r.validators.length === 0)
    return;
  const a = e.join(Nt);
  return (l = r.validators.find(({
    validator: u
  }) => u(a))) == null ? void 0 : l.classGroupId;
}, Rt = /^\[(.+)\]$/, Ds = (e) => {
  if (Rt.test(e)) {
    const r = Rt.exec(e)[1], t = r == null ? void 0 : r.substring(0, r.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}, Fs = (e) => {
  const {
    theme: r,
    classGroups: t
  } = e, s = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const n in t)
    ct(t[n], s, n, r);
  return s;
}, ct = (e, r, t, s) => {
  e.forEach((n) => {
    if (typeof n == "string") {
      const a = n === "" ? r : Et(r, n);
      a.classGroupId = t;
      return;
    }
    if (typeof n == "function") {
      if (Us(n)) {
        ct(n(s), r, t, s);
        return;
      }
      r.validators.push({
        validator: n,
        classGroupId: t
      });
      return;
    }
    Object.entries(n).forEach(([a, l]) => {
      ct(l, Et(r, a), t, s);
    });
  });
}, Et = (e, r) => {
  let t = e;
  return r.split(Nt).forEach((s) => {
    t.nextPart.has(s) || t.nextPart.set(s, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(s);
  }), t;
}, Us = (e) => e.isThemeGetter, Ws = (e) => {
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
}, dt = "!", ut = ":", qs = ut.length, Hs = (e) => {
  const {
    prefix: r,
    experimentalParseClassName: t
  } = e;
  let s = (n) => {
    const a = [];
    let l = 0, u = 0, i = 0, p;
    for (let g = 0; g < n.length; g++) {
      let I = n[g];
      if (l === 0 && u === 0) {
        if (I === ut) {
          a.push(n.slice(i, g)), i = g + qs;
          continue;
        }
        if (I === "/") {
          p = g;
          continue;
        }
      }
      I === "[" ? l++ : I === "]" ? l-- : I === "(" ? u++ : I === ")" && u--;
    }
    const c = a.length === 0 ? n : n.substring(i), m = Zs(c), k = m !== c, w = p && p > i ? p - i : void 0;
    return {
      modifiers: a,
      hasImportantModifier: k,
      baseClassName: m,
      maybePostfixModifierPosition: w
    };
  };
  if (r) {
    const n = r + ut, a = s;
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
}, Zs = (e) => e.endsWith(dt) ? e.substring(0, e.length - 1) : e.startsWith(dt) ? e.substring(1) : e, Ks = (e) => {
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
}, Xs = (e) => ({
  cache: Ws(e.cacheSize),
  parseClassName: Hs(e),
  sortModifiers: Ks(e),
  ...Bs(e)
}), Js = /\s+/, Ys = (e, r) => {
  const {
    parseClassName: t,
    getClassGroupId: s,
    getConflictingClassGroupIds: n,
    sortModifiers: a
  } = r, l = [], u = e.trim().split(Js);
  let i = "";
  for (let p = u.length - 1; p >= 0; p -= 1) {
    const c = u[p], {
      isExternal: m,
      modifiers: k,
      hasImportantModifier: w,
      baseClassName: g,
      maybePostfixModifierPosition: I
    } = t(c);
    if (m) {
      i = c + (i.length > 0 ? " " + i : i);
      continue;
    }
    let j = !!I, _ = s(j ? g.substring(0, I) : g);
    if (!_) {
      if (!j) {
        i = c + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (_ = s(g), !_) {
        i = c + (i.length > 0 ? " " + i : i);
        continue;
      }
      j = !1;
    }
    const E = a(k).join(":"), q = w ? E + dt : E, O = q + _;
    if (l.includes(O))
      continue;
    l.push(O);
    const X = n(_, j);
    for (let N = 0; N < X.length; ++N) {
      const y = X[N];
      l.push(q + y);
    }
    i = c + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function Qs() {
  let e = 0, r, t, s = "";
  for (; e < arguments.length; )
    (r = arguments[e++]) && (t = nr(r)) && (s && (s += " "), s += t);
  return s;
}
const nr = (e) => {
  if (typeof e == "string")
    return e;
  let r, t = "";
  for (let s = 0; s < e.length; s++)
    e[s] && (r = nr(e[s])) && (t && (t += " "), t += r);
  return t;
};
function eo(e, ...r) {
  let t, s, n, a = l;
  function l(i) {
    const p = r.reduce((c, m) => m(c), e());
    return t = Xs(p), s = t.cache.get, n = t.cache.set, a = u, u(i);
  }
  function u(i) {
    const p = s(i);
    if (p)
      return p;
    const c = Ys(i, t);
    return n(i, c), c;
  }
  return function() {
    return a(Qs.apply(null, arguments));
  };
}
const re = (e) => {
  const r = (t) => t[e] || [];
  return r.isThemeGetter = !0, r;
}, ar = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, lr = /^\((?:(\w[\w-]*):)?(.+)\)$/i, to = /^\d+\/\d+$/, ro = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, so = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, oo = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, no = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ao = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Te = (e) => to.test(e), V = (e) => !!e && !Number.isNaN(Number(e)), Ne = (e) => !!e && Number.isInteger(Number(e)), tt = (e) => e.endsWith("%") && V(e.slice(0, -1)), ge = (e) => ro.test(e), lo = () => !0, io = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  so.test(e) && !oo.test(e)
), ir = () => !1, co = (e) => no.test(e), uo = (e) => ao.test(e), mo = (e) => !$(e) && !M(e), po = (e) => Pe(e, ur, ir), $ = (e) => ar.test(e), ze = (e) => Pe(e, mr, io), rt = (e) => Pe(e, xo, V), Pt = (e) => Pe(e, cr, ir), fo = (e) => Pe(e, dr, uo), We = (e) => Pe(e, pr, co), M = (e) => lr.test(e), Oe = (e) => _e(e, mr), ho = (e) => _e(e, yo), _t = (e) => _e(e, cr), go = (e) => _e(e, ur), bo = (e) => _e(e, dr), qe = (e) => _e(e, pr, !0), Pe = (e, r, t) => {
  const s = ar.exec(e);
  return s ? s[1] ? r(s[1]) : t(s[2]) : !1;
}, _e = (e, r, t = !1) => {
  const s = lr.exec(e);
  return s ? s[1] ? r(s[1]) : t : !1;
}, cr = (e) => e === "position" || e === "percentage", dr = (e) => e === "image" || e === "url", ur = (e) => e === "length" || e === "size" || e === "bg-size", mr = (e) => e === "length", xo = (e) => e === "number", yo = (e) => e === "family-name", pr = (e) => e === "shadow", vo = () => {
  const e = re("color"), r = re("font"), t = re("text"), s = re("font-weight"), n = re("tracking"), a = re("leading"), l = re("breakpoint"), u = re("container"), i = re("spacing"), p = re("radius"), c = re("shadow"), m = re("inset-shadow"), k = re("text-shadow"), w = re("drop-shadow"), g = re("blur"), I = re("perspective"), j = re("aspect"), _ = re("ease"), E = re("animate"), q = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], O = () => [
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
  ], X = () => [...O(), M, $], N = () => ["auto", "hidden", "clip", "visible", "scroll"], y = () => ["auto", "contain", "none"], x = () => [M, $, i], Y = () => [Te, "full", "auto", ...x()], ne = () => [Ne, "none", "subgrid", M, $], ce = () => ["auto", {
    span: ["full", Ne, M, $]
  }, Ne, M, $], f = () => [Ne, "auto", M, $], b = () => ["auto", "min", "max", "fr", M, $], C = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], T = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], v = () => ["auto", ...x()], P = () => [Te, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...x()], h = () => [e, M, $], L = () => [...O(), _t, Pt, {
    position: [M, $]
  }], Z = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], le = () => ["auto", "cover", "contain", go, po, {
    size: [M, $]
  }], Q = () => [tt, Oe, ze], H = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    p,
    M,
    $
  ], K = () => ["", V, Oe, ze], te = () => ["solid", "dashed", "dotted", "double"], se = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], W = () => [V, tt, _t, Pt], he = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    g,
    M,
    $
  ], R = () => ["none", V, M, $], F = () => ["none", V, M, $], ae = () => [V, M, $], ke = () => [Te, "full", ...x()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [ge],
      breakpoint: [ge],
      color: [lo],
      container: [ge],
      "drop-shadow": [ge],
      ease: ["in", "out", "in-out"],
      font: [mo],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [ge],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [ge],
      shadow: [ge],
      spacing: ["px", V],
      text: [ge],
      "text-shadow": [ge],
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
        aspect: ["auto", "square", Te, $, M, j]
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
        columns: [V, $, M, u]
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
        object: X()
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
        overscroll: y()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": y()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": y()
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
        inset: Y()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": Y()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": Y()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: Y()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: Y()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: Y()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: Y()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: Y()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: Y()
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
        z: [Ne, "auto", M, $]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Te, "full", "auto", u, ...x()]
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
        flex: [V, Te, "auto", "initial", "none", $]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", V, M, $]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", V, M, $]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Ne, "first", "last", "none", M, $]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": ne()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ce()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": f()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": f()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": ne()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ce()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": f()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": f()
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
        "auto-cols": b()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": b()
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
        justify: [...C(), "normal"]
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
        content: ["normal", ...C()]
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
        "place-content": C()
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
        size: P()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [u, "screen", ...P()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          u,
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
          u,
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
        text: ["base", t, Oe, ze]
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
        font: [s, M, rt]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", tt, $]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ho, $, r]
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
        "line-clamp": [V, "none", M, rt]
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
        decoration: [...te(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [V, "from-font", "auto", M, ze]
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
        "underline-offset": [V, "auto", M, $]
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
        bg: L()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: Z()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: le()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Ne, M, $],
          radial: ["", M, $],
          conic: [Ne, M, $]
        }, bo, fo]
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
        from: Q()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: Q()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: Q()
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
        rounded: H()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": H()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": H()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": H()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": H()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": H()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": H()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": H()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": H()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": H()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": H()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": H()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": H()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": H()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": H()
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
        outline: [...te(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [V, M, $]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", V, Oe, ze]
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
          qe,
          We
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
        "inset-shadow": ["none", m, qe, We]
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
        "ring-offset": [V, ze]
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
        "text-shadow": ["none", k, qe, We]
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
        opacity: [V, M, $]
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
        "mask-linear": [V]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": W()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": W()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": h()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": h()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": W()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": W()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": h()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": h()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": W()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": W()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": h()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": h()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": W()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": W()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": h()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": h()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": W()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": W()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": h()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": h()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": W()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": W()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": h()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": h()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": W()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": W()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": h()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": h()
      }],
      "mask-image-radial": [{
        "mask-radial": [M, $]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": W()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": W()
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
        "mask-radial-at": O()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [V]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": W()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": W()
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
        mask: L()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: Z()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: le()
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
        mask: ["none", M, $]
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
        blur: he()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [V, M, $]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [V, M, $]
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
          qe,
          We
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
        grayscale: ["", V, M, $]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [V, M, $]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", V, M, $]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [V, M, $]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", V, M, $]
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
        "backdrop-blur": he()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [V, M, $]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [V, M, $]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", V, M, $]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [V, M, $]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", V, M, $]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [V, M, $]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [V, M, $]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", V, M, $]
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
        duration: [V, "initial", M, $]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", _, M, $]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [V, M, $]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", E, M, $]
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
        perspective: [I, M, $]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": X()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: R()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": R()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": R()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": R()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: F()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": F()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": F()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": F()
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
        skew: ae()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": ae()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": ae()
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
        origin: X()
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
        translate: ke()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": ke()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": ke()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": ke()
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
        fill: ["none", ...h()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [V, Oe, ze, rt]
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
}, wo = /* @__PURE__ */ eo(vo), ko = Je(void 0), No = ko.Provider, Co = ee.forwardRef((e, r) => {
  const {
    className: t,
    children: s,
    isPressable: n = !1,
    onPress: a,
    onPressStart: l,
    onPressEnd: u,
    onPressChange: i,
    onPressUp: p,
    ...c
  } = e, { pressProps: m, isPressed: k } = Gr({
    onPress: a,
    onPressStart: l,
    onPressEnd: u,
    onPressChange: i,
    onPressUp: p,
    isDisabled: !n,
    ref: r
  }), w = {}, g = wo(
    "glass-card",
    n && "cursor-pointer hover:shadow-lg hover:transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200",
    k && "transform scale-[0.98] shadow-lg",
    t
  );
  return /* @__PURE__ */ o(No, { value: w, children: /* @__PURE__ */ o("div", { ref: r, className: g, ...n ? m : {}, ...c, children: s }) });
});
Co.displayName = "Card";
const zo = ee.forwardRef(({ children: e, className: r, ...t }, s) => /* @__PURE__ */ o("div", { ref: s, className: `card-body ${r || ""}`, ...t, children: e }));
zo.displayName = "CardBody";
const $o = ee.forwardRef(({ children: e, className: r, ...t }, s) => /* @__PURE__ */ o("p", { ref: s, className: `card-description ${r || ""}`, ...t, children: e }));
$o.displayName = "CardDescription";
const Mo = ee.forwardRef(({ children: e, className: r, ...t }, s) => /* @__PURE__ */ o("div", { ref: s, className: `card-footer ${r || ""}`, ...t, children: e }));
Mo.displayName = "CardFooter";
const So = ee.forwardRef(({ children: e, className: r, ...t }, s) => /* @__PURE__ */ o("div", { ref: s, className: `card-header ${r || ""}`, ...t, children: e }));
So.displayName = "CardHeader";
const Ao = ee.forwardRef(({ children: e, className: r, ...t }, s) => /* @__PURE__ */ o("h3", { ref: s, className: `card-title ${r || ""}`, ...t, children: e }));
Ao.displayName = "CardTitle";
function Lt({
  label: e,
  checked: r,
  defaultChecked: t = !1,
  onChange: s,
  name: n
}) {
  const [a, l] = G(t), u = r !== void 0, i = u ? r : a, p = ee.useRef(null), c = (m) => {
    m.preventDefault(), m.stopPropagation();
    const k = !i;
    u || l(k), s && s({
      target: { name: n, checked: k, type: "checkbox" },
      currentTarget: { name: n, checked: k, type: "checkbox" },
      preventDefault: () => {
      },
      stopPropagation: () => {
      }
    });
  };
  return /* @__PURE__ */ d(
    "div",
    {
      className: "flex items-center space-x-3 cursor-pointer",
      onClick: c,
      role: "checkbox",
      "aria-checked": i,
      tabIndex: 0,
      onKeyDown: (m) => {
        (m.key === " " || m.key === "Enter") && c(m);
      },
      children: [
        /* @__PURE__ */ o(
          "input",
          {
            ref: p,
            type: "checkbox",
            name: n,
            checked: i,
            onChange: () => {
            },
            className: "sr-only",
            tabIndex: -1,
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ o(
          "div",
          {
            className: `w-5 h-5 rounded border-2 flex items-center justify-center ${i ? "bg-accent-500 border-accent-500" : "border-gray-300"}`,
            children: i && /* @__PURE__ */ o(vt, { size: 12, className: "text-white" })
          }
        ),
        e && /* @__PURE__ */ o("span", { className: "text-sm", children: e })
      ]
    }
  );
}
const ra = ({ label: e, selected: r = !1, onClick: t, className: s = "" }) => {
  const u = `px-3 py-1 rounded-full text-sm border transition-colors cursor-pointer ${r ? "bg-accent-500 border-accent-500 text-white" : "bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200"} ${s}`;
  return /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      className: u,
      onClick: t,
      children: e
    }
  );
};
function sa({ title: e, children: r }) {
  const [t, s] = G(!1);
  return /* @__PURE__ */ d("div", { className: "glass-surface rounded-lg overflow-hidden", children: [
    /* @__PURE__ */ d(
      "div",
      {
        className: "flex items-center justify-between p-4 cursor-pointer hover:bg-glass-light",
        onClick: () => s(!t),
        children: [
          /* @__PURE__ */ o("h4", { className: "font-medium", children: e }),
          /* @__PURE__ */ o(
            Ee,
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
function xe({
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
const oa = ({ logo: e, title: r, header: t, navContent: s, children: n }) => {
  const [a, l] = G(!1);
  return /* @__PURE__ */ d("div", { className: "flex h-full", children: [
    /* @__PURE__ */ o(
      "div",
      {
        className: `glass-surface transition-all duration-300 border-r border-gray-200 dark:border-gray-700 ${a ? "w-20" : "w-64"}`,
        children: /* @__PURE__ */ d("div", { className: "flex flex-col h-full", children: [
          /* @__PURE__ */ d("div", { className: "relative", children: [
            /* @__PURE__ */ o("div", { className: "absolute top-3 right-3 z-10", children: /* @__PURE__ */ o(
              xe,
              {
                onClick: () => l(!a),
                icon: a ? /* @__PURE__ */ o(er, { size: 18 }) : /* @__PURE__ */ o(ve, { size: 18 }),
                "aria-label": "Toggle sidebar"
              }
            ) }),
            t,
            e || r && /* @__PURE__ */ d(
              "div",
              {
                className: `flex flex-col items-center pt-12 pb-3 px-3 ${a ? "pb-5" : "pb-6"}`,
                children: [
                  e && /* @__PURE__ */ o("div", { className: "flex-shrink-0 mb-3", children: e }),
                  !a && r && /* @__PURE__ */ o("div", { className: "font-semibold text-lg text-center leading-tight px-2", children: r })
                ]
              }
            ),
            /* @__PURE__ */ o("div", { className: "mx-3 mb-3 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" })
          ] }),
          /* @__PURE__ */ o("div", { className: "flex-grow overflow-y-auto overflow-x-hidden px-3 pb-3", children: typeof s == "function" ? s(a) : s })
        ] })
      }
    ),
    /* @__PURE__ */ o("div", { className: "flex-1 p-4", children: n })
  ] });
};
function na({ size: e = "md", children: r }) {
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
function aa({ children: e, items: r }) {
  const [t, s] = G({ visible: !1, x: 0, y: 0 }), n = ye((l) => {
    l.preventDefault(), s({ visible: !0, x: l.pageX, y: l.pageY });
  }, []), a = ye(() => {
    t.visible && s((l) => ({ ...l, visible: !1 }));
  }, [t.visible]);
  return ie(() => (document.addEventListener("click", a), () => {
    document.removeEventListener("click", a);
  }), [a]), /* @__PURE__ */ d("div", { onContextMenu: n, children: [
    e,
    t.visible && /* @__PURE__ */ o(
      "div",
      {
        className: "fixed glass-surface rounded-lg shadow-lg z-50 py-1",
        style: { top: t.y, left: t.x },
        children: r.map((l, u) => l.separator ? /* @__PURE__ */ o("hr", { className: "my-1 border-gray-200" }, `sep-${u}`) : /* @__PURE__ */ d(
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
function la({ label: e, value: r, icon: t, className: s = "" }) {
  const a = ["flex justify-between items-center py-2 px-3 rounded-md bg-muted/50", s].filter(Boolean).join(" ").trim();
  return /* @__PURE__ */ d("div", { className: a, children: [
    /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
      t && /* @__PURE__ */ o("span", { className: "text-muted-foreground", "aria-hidden": "true", children: t }),
      /* @__PURE__ */ o("span", { className: "text-sm font-medium text-muted-foreground", children: e })
    ] }),
    /* @__PURE__ */ o("div", { className: "text-sm font-semibold text-foreground", children: r })
  ] });
}
const Gt = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-2xl",
  xl: "max-w-4xl",
  "2xl": "max-w-6xl"
};
function fr({
  isOpen: e,
  onClose: r,
  title: t,
  children: s,
  size: n = "md"
}) {
  const a = me(null), l = me(null);
  ie(() => {
    var m, k;
    e ? (l.current = document.activeElement, (m = a.current) == null || m.focus()) : (k = l.current) == null || k.focus();
  }, [e]), ie(() => {
    const m = (k) => {
      k.key === "Escape" && r();
    };
    return e && (document.addEventListener("keydown", m), document.body.style.overflow = "hidden"), () => {
      document.removeEventListener("keydown", m), document.body.style.overflow = "unset";
    };
  }, [e, r]);
  const [u, i] = G(!1);
  if (ie(() => (i(!0), () => i(!1)), []), !e || !u) return null;
  const p = Gt[n] || Gt.md, c = /* @__PURE__ */ o(
    "div",
    {
      className: "fixed inset-0 flex items-center justify-center p-4",
      style: {
        background: "var(--fg-overlay-medium)",
        zIndex: 9999
      },
      onClick: (m) => {
        m.target === m.currentTarget && r();
      },
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "modal-title",
      children: /* @__PURE__ */ d(
        "div",
        {
          ref: a,
          className: `modal-fluid show w-full ${p} max-h-[90vh] overflow-hidden`,
          onClick: (m) => m.stopPropagation(),
          tabIndex: -1,
          role: "document",
          children: [
            /* @__PURE__ */ d("div", { className: "flex justify-between items-center mb-4 absolute top-[20px] right-[25px]", children: [
              /* @__PURE__ */ o("h4", { id: "modal-title", className: "text-lg font-semibold", children: t }),
              /* @__PURE__ */ o(
                xe,
                {
                  icon: /* @__PURE__ */ o(ve, { size: 20 }),
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
  return Jt(c, document.body);
}
const hr = ({
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
  return /* @__PURE__ */ o("div", { className: l, children: /* @__PURE__ */ d("div", { className: "flex-1", children: [
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
hr.displayName = "ModalHeader";
const gr = ({
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
  }, l = s ? "overflow-y-auto max-h-[60vh]" : "overflow-visible", u = [
    n,
    a[t] || a.default,
    l,
    r
  ].filter(Boolean).join(" ").trim();
  return /* @__PURE__ */ o("div", { className: u, children: e });
};
gr.displayName = "ModalBody";
function ia({
  label: e = "Documents",
  acceptedTypes: r = ".pdf,.doc,.docx,.jpg,.jpeg,.png",
  maxFileSize: t = 10 * 1024 * 1024,
  // 10MB par défaut
  multiple: s = !0,
  files: n = [],
  onFilesChange: a,
  onFileRemove: l,
  onFilePreview: u,
  disabled: i = !1,
  error: p = null,
  helperText: c = null,
  required: m = !1
}) {
  var ce;
  const [k, w] = G(!1), [g, I] = G(null), [j, _] = G(!1), E = (f) => {
    f.preventDefault(), f.stopPropagation(), f.type === "dragenter" || f.type === "dragover" ? w(!0) : f.type === "dragleave" && w(!1);
  }, q = (f) => {
    if (f.preventDefault(), f.stopPropagation(), w(!1), i) return;
    const b = Array.from(f.dataTransfer.files);
    X(b);
  }, O = (f) => {
    const b = Array.from(f.target.files);
    X(b), f.target.value = "";
  }, X = (f) => {
    const b = [], C = [];
    f.forEach((T) => {
      if (T.size > t) {
        C.push(`${T.name}: Fichier trop volumineux (max ${x(t)})`);
        return;
      }
      const v = `.${T.name.split(".").pop().toLowerCase()}`;
      if (r && !r.includes(v)) {
        C.push(`${T.name}: Type de fichier non supporté`);
        return;
      }
      b.push(T);
    }), C.length > 0 && console.warn("Erreurs de validation:", C), b.length > 0 && a && a(s ? [...n, ...b] : [b[0]]);
  }, N = (f) => {
    if (l)
      l(f);
    else if (a) {
      const b = n.filter((C, T) => T !== f);
      a(b);
    }
  }, y = (f, b) => {
    I({ file: f, index: b }), _(!0), u && u(f, b);
  }, x = (f) => {
    if (f === 0) return "0 Bytes";
    const b = 1024, C = ["Bytes", "KB", "MB", "GB"], T = Math.floor(Math.log(f) / Math.log(b));
    return parseFloat((f / Math.pow(b, T)).toFixed(2)) + " " + C[T];
  }, Y = (f) => {
    const b = f.split(".").pop().toLowerCase();
    return ["jpg", "jpeg", "png", "gif", "webp"].includes(b) ? "🖼️" : ["pdf"].includes(b) ? "📄" : ["doc", "docx"].includes(b) ? "📝" : "📎";
  }, ne = (f) => {
    const b = f.split(".").pop().toLowerCase();
    return ["jpg", "jpeg", "png", "gif", "webp", "pdf"].includes(b);
  };
  return /* @__PURE__ */ d("div", { className: "space-y-4", children: [
    e && /* @__PURE__ */ d("label", { className: "block text-sm font-medium text-gray-700", children: [
      e,
      m && /* @__PURE__ */ o("span", { className: "text-red-500 ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ d(
      "div",
      {
        className: `
          relative border-2 border-dashed rounded-lg p-6 text-center transition-all duration-200
          ${k ? "border-primary-500 bg-primary-50" : "border-gray-300 hover:border-primary-400"}
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
              onChange: O,
              disabled: i,
              className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            }
          ),
          /* @__PURE__ */ o(
            tr,
            {
              size: 48,
              className: `mx-auto mb-4 ${k ? "text-primary-500" : "text-gray-400"}`
            }
          ),
          /* @__PURE__ */ o("p", { className: "text-gray-600 mb-2", children: k ? "Déposez vos fichiers ici..." : "Glissez-déposez vos fichiers ici ou cliquez pour parcourir" }),
          /* @__PURE__ */ o(
            fe,
            {
              type: "button",
              variant: "outline",
              size: "sm",
              disabled: i,
              onClick: (f) => f.stopPropagation(),
              children: "Parcourir les fichiers"
            }
          ),
          r && /* @__PURE__ */ d("p", { className: "text-xs text-gray-500 mt-2", children: [
            "Types acceptés: ",
            r
          ] }),
          t && /* @__PURE__ */ d("p", { className: "text-xs text-gray-500", children: [
            "Taille max: ",
            x(t)
          ] })
        ]
      }
    ),
    c && !p && /* @__PURE__ */ o("p", { className: "text-sm text-gray-500", children: c }),
    p && /* @__PURE__ */ d("div", { className: "flex items-center text-sm text-red-600", children: [
      /* @__PURE__ */ o(Re, { size: 16, className: "mr-1" }),
      p
    ] }),
    n && n.length > 0 && /* @__PURE__ */ d("div", { className: "space-y-2", children: [
      /* @__PURE__ */ d("h4", { className: "text-sm font-medium text-gray-700", children: [
        "Fichiers sélectionnés (",
        n.length,
        ")"
      ] }),
      /* @__PURE__ */ o("div", { className: "space-y-2", children: n.map((f, b) => /* @__PURE__ */ d(
        "div",
        {
          className: "flex items-center justify-between p-3 bg-gray-50 rounded-lg border",
          children: [
            /* @__PURE__ */ d("div", { className: "flex items-center space-x-3 flex-1 min-w-0", children: [
              /* @__PURE__ */ o("span", { className: "text-lg", children: Y(f.name) }),
              /* @__PURE__ */ d("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ o("p", { className: "text-sm font-medium text-gray-900 truncate", children: f.name }),
                /* @__PURE__ */ o("p", { className: "text-xs text-gray-500", children: x(f.size) })
              ] })
            ] }),
            /* @__PURE__ */ d("div", { className: "flex items-center space-x-2", children: [
              ne(f.name) && /* @__PURE__ */ o(
                fe,
                {
                  type: "button",
                  variant: "ghost",
                  size: "sm",
                  startIcon: /* @__PURE__ */ o(is, { size: 16 }),
                  onClick: () => y(f, b),
                  children: "Aperçu"
                }
              ),
              /* @__PURE__ */ o(
                fe,
                {
                  type: "button",
                  variant: "ghost",
                  size: "sm",
                  startIcon: /* @__PURE__ */ o(ve, { size: 16 }),
                  onClick: () => N(b),
                  className: "text-red-600 hover:text-red-700",
                  children: "Supprimer"
                }
              )
            ] })
          ]
        },
        b
      )) })
    ] }),
    /* @__PURE__ */ d(
      fr,
      {
        isOpen: j,
        onClose: () => _(!1),
        title: "Aperçu du document",
        children: [
          /* @__PURE__ */ o(hr, { children: /* @__PURE__ */ d("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ o("h3", { className: "text-lg font-semibold", children: (ce = g == null ? void 0 : g.file) == null ? void 0 : ce.name }),
            /* @__PURE__ */ o(
              fe,
              {
                variant: "ghost",
                size: "sm",
                startIcon: /* @__PURE__ */ o(as, { size: 16 }),
                onClick: () => {
                  const f = URL.createObjectURL(g.file), b = document.createElement("a");
                  b.href = f, b.download = g.file.name, b.click(), URL.revokeObjectURL(f);
                },
                children: "Télécharger"
              }
            )
          ] }) }),
          /* @__PURE__ */ o(gr, { children: g && /* @__PURE__ */ o("div", { className: "max-h-96 overflow-auto", children: g.file.type.startsWith("image/") ? /* @__PURE__ */ o(
            "img",
            {
              src: URL.createObjectURL(g.file),
              alt: g.file.name,
              className: "max-w-full h-auto rounded-lg"
            }
          ) : g.file.type === "application/pdf" ? /* @__PURE__ */ o(
            "embed",
            {
              src: URL.createObjectURL(g.file),
              type: "application/pdf",
              width: "100%",
              height: "400px",
              className: "rounded-lg"
            }
          ) : /* @__PURE__ */ d("div", { className: "text-center py-8", children: [
            /* @__PURE__ */ o(us, { size: 48, className: "mx-auto text-gray-400 mb-4" }),
            /* @__PURE__ */ o("p", { className: "text-gray-600", children: "Aperçu non disponible pour ce type de fichier" })
          ] }) }) })
        ]
      }
    )
  ] });
}
function ca({ isOpen: e, onClose: r, title: t, children: s }) {
  return e ? /* @__PURE__ */ d(xt, { children: [
    /* @__PURE__ */ o(
      "div",
      {
        className: "fixed inset-0 bg-black bg-opacity-50 z-40",
        onClick: r
      }
    ),
    /* @__PURE__ */ o("div", { className: "fixed right-0 top-0 h-full w-80 glass-surface z-50 animate-slide-in", children: /* @__PURE__ */ d("div", { className: "p-6", children: [
      /* @__PURE__ */ d("div", { className: "flex justify-between items-center mb-6", children: [
        /* @__PURE__ */ o("h4", { className: "text-lg font-semibold", children: t }),
        /* @__PURE__ */ o(
          "button",
          {
            onClick: r,
            className: "p-2 hover:bg-glass-light rounded-lg transition-colors",
            children: /* @__PURE__ */ o(ve, { size: 20 })
          }
        )
      ] }),
      s
    ] }) })
  ] }) : null;
}
function To(e = "portal-root") {
  const [r, t] = G(null);
  return ie(() => {
    let s = document.getElementById(e), n = !1;
    return s || (n = !0, s = document.createElement("div"), s.id = e, document.body.appendChild(s)), s.style.position = "absolute", s.style.top = "0", s.style.left = "0", s.style.width = "100%", s.style.zIndex = "9999", s.style.pointerEvents = "none", t(s), () => {
      n && s.parentNode && s.parentNode.removeChild(s);
    };
  }, [e]), r;
}
function br({ children: e, id: r = "portal-root" }) {
  const t = To(r);
  return t ? Jt(e, t) : null;
}
const xr = Je({
  isOpen: !1,
  setIsOpen: () => {
  },
  onClose: () => {
  }
}), Io = xr.Provider, Ct = () => {
  const e = yt(xr);
  if (!e)
    throw new Error("useDropdown must be used within a Dropdown component");
  return e;
};
function ue({ children: e, className: r = "" }) {
  const [t, s] = G(!1), n = me(null), a = ye((u) => {
    var p, c;
    !!!((c = (p = u.target) == null ? void 0 : p.closest) != null && c.call(
      p,
      ".dropdown-menu-portal"
    )) && n.current && !n.current.contains(u.target) && s(!1);
  }, []);
  ie(() => (document.addEventListener("mousedown", a), () => {
    document.removeEventListener("mousedown", a);
  }), [a]);
  const l = ye(() => {
    s(!1);
  }, []);
  return /* @__PURE__ */ o(Io, { value: { isOpen: t, setIsOpen: s, onClose: l }, children: /* @__PURE__ */ o("div", { className: `relative inline-block ${r}`, ref: n, children: e }) });
}
function jo({ children: e, asChild: r }) {
  const { isOpen: t, setIsOpen: s } = Ct(), n = (a) => {
    a.preventDefault(), s(!t);
  };
  return r ? e ? ee.cloneElement(e, {
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
function Ro({ children: e, align: r = "left", className: t = "" }) {
  const { isOpen: s } = Ct(), n = me(null);
  me(null);
  const [a, l] = G({}), [u, i] = G(!1), p = r === "right" || r === "end" ? "right-0" : r === "center" ? "left-1/2 -translate-x-1/2" : "left-0";
  if (ie(() => {
    if (s && n.current) {
      const m = n.current.closest(".relative"), k = (m == null ? void 0 : m.querySelector("button")) || (m == null ? void 0 : m.querySelector('[role="button"]'));
      if (k) {
        const w = k.getBoundingClientRect();
        n.current.getBoundingClientRect();
        const g = window.innerWidth, I = window.innerHeight;
        m == null || m.closest(
          "td, th, .overflow-hidden, .overflow-x-hidden"
        );
        {
          i(!0);
          const j = {
            position: "fixed",
            top: `${w.bottom + 8}px`,
            left: r === "right" || r === "end" ? `${w.right - 200}px` : r === "center" ? `${w.left + w.width / 2 - 100}px` : `${w.left}px`,
            zIndex: 9999,
            // Z-index très élevé pour être au-dessus de tout
            minWidth: "200px"
          }, _ = 200;
          parseInt(j.left) + _ > g && (j.left = `${g - _ - 10}px`), parseInt(j.left) < 10 && (j.left = "10px"), w.bottom + 200 > I && (j.top = `${w.top - 8}px`, j.transform = "translateY(-100%)"), l(j);
        }
      }
    } else s || (l({}), i(!1));
  }, [s, r]), !s) return null;
  const c = /* @__PURE__ */ o("div", { className: "py-1", children: e });
  return u ? /* @__PURE__ */ o(br, { id: "dropdown-portal", children: /* @__PURE__ */ o(
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
function Eo({ children: e, onClick: r, className: t = "", asChild: s }) {
  const { onClose: n } = Ct(), a = (l) => {
    setTimeout(() => n(), 150), r && r(l);
  };
  return s ? e ? ee.cloneElement(e, {
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
function Po() {
  return /* @__PURE__ */ o("hr", { className: "my-1 border-gray-200" });
}
ue.Trigger = jo;
ue.Menu = Ro;
ue.Item = Eo;
ue.Separator = Po;
function da({ icon: e, title: r, message: t, action: s }) {
  const n = ee.isValidElement(e);
  return n || e && (e.type, { ...e.props }), /* @__PURE__ */ d("div", { className: "text-center py-12", children: [
    n ? ee.cloneElement(e, {
      size: e.props.size || 48,
      className: `mx-auto text-gray-400 mb-4 ${e.props.className || ""}`.trim()
    }) : e ? ee.createElement(e, { size: 48, className: "mx-auto text-gray-400 mb-4" }) : /* @__PURE__ */ o(lt, { size: 48, className: "mx-auto text-gray-400 mb-4" }),
    /* @__PURE__ */ o("h4", { className: "text-lg font-medium text-gray-600 mb-2", children: r }),
    /* @__PURE__ */ o("p", { className: "text-gray-500 mb-4", children: t }),
    s && /* @__PURE__ */ d("button", { className: "btn-fluid", onClick: s.onClick, children: [
      s.icon || /* @__PURE__ */ o(Ns, { size: 16 }),
      s.label
    ] })
  ] });
}
function ua({ data: e, renderItem: r, renderExpandedContent: t }) {
  const [s, n] = G({}), a = (l) => {
    n((u) => ({
      ...u,
      [l]: !u[l]
    }));
  };
  return !e || e.length === 0 ? /* @__PURE__ */ o("p", { className: "text-center text-gray-500", children: "Aucune donnée à afficher." }) : /* @__PURE__ */ o("div", { className: "space-y-2", children: e.map((l) => /* @__PURE__ */ d(
    "div",
    {
      className: "glass-card-border overflow-hidden rounded-lg",
      children: [
        /* @__PURE__ */ d(
          "div",
          {
            className: "flex items-center justify-between p-4 cursor-pointer hover:bg-base-200/50",
            onClick: () => a(l.id),
            children: [
              /* @__PURE__ */ o("div", { className: "flex-grow", children: r(l) }),
              /* @__PURE__ */ o("div", { className: "ml-4", children: s[l.id] ? /* @__PURE__ */ o(Qt, { size: 20, className: "text-gray-500" }) : /* @__PURE__ */ o(Ee, { size: 20, className: "text-gray-500" }) })
            ]
          }
        ),
        s[l.id] && /* @__PURE__ */ o("div", { className: "px-4 pt-2 pb-4 bg-base-200/30 border-t border-base-300/50", children: t(l) })
      ]
    },
    l.id
  )) });
}
function ma({
  onFileSelect: e,
  label: r,
  acceptedTypes: t,
  accept: s,
  helperText: n,
  multiple: a = !1
}) {
  return /* @__PURE__ */ d("div", { className: "border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-accent-500 transition-colors", children: [
    /* @__PURE__ */ o(tr, { size: 48, className: "mx-auto text-gray-400 mb-4" }),
    /* @__PURE__ */ o("p", { className: "text-gray-600 mb-2", children: r || "Glissez-déposez vos fichiers ici ou" }),
    /* @__PURE__ */ d("label", { className: "btn-fluid cursor-pointer", children: [
      "Parcourir les fichiers",
      /* @__PURE__ */ o(
        "input",
        {
          type: "file",
          className: "hidden",
          onChange: (u) => {
            const i = Array.from(u.target.files || []);
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
const _o = ({ title: e, links: r }) => /* @__PURE__ */ d("div", { children: [
  /* @__PURE__ */ o("h4", { className: "font-semibold text-base-content mb-4", children: e }),
  /* @__PURE__ */ o("ul", { className: "space-y-2", children: r.map((t) => /* @__PURE__ */ o("li", { children: /* @__PURE__ */ o(sr, { href: t.href, className: "text-sm text-base-content/80 hover:text-primary transition-colors", children: t.text }) }, t.href + t.text)) })
] });
function pa({ sections: e, socialLinks: r, copyrightText: t }) {
  return !e || !r || !t ? null : /* @__PURE__ */ o("footer", { className: "glass-surface p-8 rounded-lg w-full", children: /* @__PURE__ */ d("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ o("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8", children: e.map((s) => /* @__PURE__ */ o(_o, { title: s.title, links: s.links }, s.title)) }),
    /* @__PURE__ */ d("div", { className: "mt-8 pt-8 border-t border-base-300/50 flex flex-col sm:flex-row justify-between items-center", children: [
      /* @__PURE__ */ o("p", { className: "text-sm text-base-content/70", children: t }),
      /* @__PURE__ */ o("div", { className: "flex items-center gap-2 mt-4 sm:mt-0", children: r.map((s) => /* @__PURE__ */ o(xe, { asChild: !0, "aria-label": s.label, variant: "ghost", children: /* @__PURE__ */ o("a", { href: s.href, target: "_blank", rel: "noopener noreferrer", children: s.icon }) }, s.label)) })
    ] })
  ] }) });
}
const Vt = ({
  children: e,
  variant: r = "standard",
  className: t = ""
}) => {
  const s = {
    standard: {
      icon: /* @__PURE__ */ o(Ye, { size: 12 }),
      color: "text-gray-500"
    },
    error: {
      icon: /* @__PURE__ */ o(Re, { size: 12 }),
      color: "text-red-500"
    },
    success: {
      icon: /* @__PURE__ */ o(vt, { size: 12 }),
      color: "text-green-500"
    }
  }, n = s[r] || s.standard;
  return /* @__PURE__ */ d("p", { className: `text-sm flex items-center gap-1 mt-1 ${n.color} ${t}`, children: [
    n.icon,
    e
  ] });
}, yr = ee.forwardRef(
  ({ label: e, name: r, startIcon: t, endIcon: s, className: n, error: a, helperText: l, ...u }, i) => {
    const p = [
      "input-fluid",
      t ? "pl-10" : "",
      s ? "pr-10" : "",
      a ? "border-red-500" : "",
      n
    ].join(" ").trim();
    return /* @__PURE__ */ d("div", { children: [
      e && /* @__PURE__ */ o("label", { htmlFor: r, className: "block text-sm font-medium mb-2", children: e }),
      /* @__PURE__ */ d("div", { className: "relative", children: [
        t && /* @__PURE__ */ o("div", { className: "absolute left-3 top-1/2 transform -translate-y-1/2", style: { color: "var(--fg-icon-primary)" }, children: ee.cloneElement(t, { size: 16 }) }),
        /* @__PURE__ */ o("input", { ref: i, id: r, name: r, className: p, ...u }),
        s && /* @__PURE__ */ o("div", { className: "absolute right-3 top-1/2 transform -translate-y-1/2", children: s })
      ] }),
      a && /* @__PURE__ */ o(Vt, { variant: "error", children: a }),
      l && !a && /* @__PURE__ */ o(Vt, { variant: "info", children: l })
    ] });
  }
);
yr.displayName = "Input";
function Lo({
  currentPage: e,
  totalPages: r,
  onPageChange: t,
  totalResults: s,
  resultsPerPage: n = 10
}) {
  const a = (e - 1) * n + 1, l = Math.min(e * n, s), u = (p) => {
    p >= 1 && p <= r && t(p);
  };
  return /* @__PURE__ */ d("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ d("p", { className: "text-sm text-gray-600", children: [
      "Affichage ",
      a,
      " à ",
      l,
      " sur ",
      s,
      " résultats"
    ] }),
    /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ o(
        "button",
        {
          onClick: () => u(e - 1),
          disabled: e === 1,
          className: "p-2 rounded-lg hover:bg-glass-light transition-colors disabled:opacity-50",
          children: /* @__PURE__ */ o(Xr, { size: 16 })
        }
      ),
      (() => {
        var c;
        const p = [];
        for (let m = 1; m <= r; m++)
          m === 1 || m === r || m >= e - 1 && m <= e + 1 ? p.push(
            /* @__PURE__ */ o(
              "button",
              {
                onClick: () => u(m),
                className: `px-3 py-1 rounded-lg text-sm transition-colors ${e === m ? "bg-accent-500 text-white" : "hover:bg-glass-light"}`,
                children: m
              },
              m
            )
          ) : ((c = p[p.length - 1]) == null ? void 0 : c.key) !== "..." && p.push(/* @__PURE__ */ o("span", { className: "px-3 py-1", children: "..." }, "..."));
        return p;
      })(),
      /* @__PURE__ */ o(
        "button",
        {
          onClick: () => u(e + 1),
          disabled: e === r,
          className: "p-2 rounded-lg hover:bg-glass-light transition-colors disabled:opacity-50",
          children: /* @__PURE__ */ o(wt, { size: 16 })
        }
      )
    ] })
  ] });
}
const Ot = ({
  label: e,
  options: r = [],
  value: t,
  onChange: s,
  placeholder: n = "Sélectionner...",
  disabled: a = !1,
  // Nouvelles props pour les fonctionnalités avancées
  searchable: l = !1,
  sortable: u = !1,
  sortOrder: i = "asc",
  // 'asc' | 'desc'
  onSortChange: p,
  loadOptions: c,
  // Fonction pour le chargement dynamique: (searchTerm, page) => Promise<options[]> | null
  searchPlaceholder: m = "Rechercher...",
  maxHeight: k = 240,
  error: w,
  helperText: g
}) => {
  const [I, j] = G(!1), [_, E] = G(""), [q, O] = G(r), [X, N] = G(!1), [y, x] = G(!0), [Y, ne] = G(1), [ce, f] = G({}), b = me(null), C = me(null), T = me(null), v = me(null), P = me(null);
  ie(() => {
    c || O(r || []);
  }, [r, c]), ie(() => {
    c && (async () => {
      N(!0);
      try {
        const F = await c("", 1);
        F && F.length > 0 ? (O(F), x(F.length > 0), ne(1)) : (O([]), x(!1));
      } catch (F) {
        console.error("Erreur lors du chargement initial:", F), O([]), x(!1);
      } finally {
        N(!1);
      }
    })();
  }, [c]), ie(() => {
    if (I && b.current) {
      const R = () => {
        const F = b.current.getBoundingClientRect(), ae = window.scrollX || window.pageXOffset, ke = window.scrollY || window.pageYOffset;
        f({
          position: "absolute",
          top: `${F.bottom + ke + 4}px`,
          left: `${F.left + ae}px`,
          width: `${F.width}px`,
          zIndex: 9999,
          maxHeight: `${k + 100}px`,
          // Marge pour la recherche/tri
          pointerEvents: "auto"
          // Re-enable clicks
        });
      };
      return R(), window.addEventListener("resize", R), window.addEventListener("scroll", R, !0), () => {
        window.removeEventListener("resize", R), window.removeEventListener("scroll", R, !0);
      };
    }
  }, [I, k]);
  const h = () => {
    a || (j(!I), !I && l && setTimeout(() => {
      var R;
      (R = C.current) == null || R.focus();
    }, 100));
  }, L = (R) => {
    s(R), j(!1), E("");
  }, Z = (R) => {
    const F = b.current && !b.current.contains(R.target), ae = P.current && !P.current.contains(R.target);
    F && ae && (j(!1), E(""));
  }, le = ye(
    async (R) => {
      if (c) {
        N(!0), ne(1);
        try {
          const F = await c(R, 1);
          F === null ? (O([]), x(!1)) : (O(F), x(F.length > 0));
        } catch (F) {
          console.error("Erreur lors de la recherche:", F), O([]), x(!1);
        } finally {
          N(!1);
        }
      }
    },
    [c]
  ), Q = () => {
    u && p && p(i === "asc" ? "desc" : "asc");
  }, H = je(() => !l || c || !_ ? q : q.filter(
    (R) => R.label.toLowerCase().includes(_.toLowerCase())
  ), [q, _, l]), K = je(() => !u || p ? H : [...H].sort((R, F) => {
    const ae = R.label.localeCompare(F.label);
    return i === "asc" ? ae : -ae;
  }), [H, u, i, p]), te = ye(async () => {
    if (!(!y || !c)) {
      N(!0);
      try {
        const R = Y + 1, F = await c(_, R);
        F === null || F.length === 0 ? x(!1) : (O((ae) => [...ae, ...F]), ne(R));
      } catch (R) {
        console.error("Erreur lors du chargement:", R), x(!1);
      } finally {
        N(!1);
      }
    }
  }, [y, c, Y, _]), se = me(te);
  se.current = te;
  const W = ye(
    (R) => {
      X || (v.current && v.current.disconnect(), v.current = new IntersectionObserver((F) => {
        F[0].isIntersecting && y && c && se.current();
      }), R && v.current.observe(R));
    },
    [X, y, c]
  );
  ie(() => (document.addEventListener("mousedown", Z), () => {
    document.removeEventListener("mousedown", Z), v.current && v.current.disconnect();
  }), []);
  const he = q.find(
    (R) => R.value === t
  );
  return /* @__PURE__ */ d("div", { className: "relative w-full", ref: b, children: [
    e && /* @__PURE__ */ o("label", { className: "block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300", children: e }),
    /* @__PURE__ */ d("div", { className: "relative", children: [
      /* @__PURE__ */ d(
        "button",
        {
          type: "button",
          className: `input-fluid w-full text-left flex items-center justify-between ${a ? "bg-gray-100 dark:bg-gray-800 cursor-not-allowed" : ""} ${w ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}`,
          onClick: h,
          disabled: a,
          "aria-haspopup": "listbox",
          "aria-expanded": I,
          children: [
            /* @__PURE__ */ o(
              "span",
              {
                className: `block truncate mr-2 ${he ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"}`,
                children: he ? he.label : n
              }
            ),
            /* @__PURE__ */ o(
              Ee,
              {
                size: 16,
                className: `transition-transform flex-shrink-0 ${I ? "rotate-180" : ""}`
              }
            )
          ]
        }
      ),
      I && /* @__PURE__ */ o(br, { id: "fluid-select-portal", children: /* @__PURE__ */ d(
        "div",
        {
          ref: P,
          className: "glass-surface rounded-lg shadow-lg overflow-hidden",
          style: ce,
          children: [
            (l || u) && /* @__PURE__ */ o("div", { className: "p-2 border-b border-gray-200 dark:border-gray-700", children: /* @__PURE__ */ d("div", { className: "flex gap-2", children: [
              l && /* @__PURE__ */ d("div", { className: "flex-1 relative", children: [
                /* @__PURE__ */ o(
                  Xe,
                  {
                    size: 16,
                    className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  }
                ),
                /* @__PURE__ */ o(
                  "input",
                  {
                    ref: C,
                    type: "text",
                    value: _,
                    onChange: (R) => {
                      E(R.target.value), le(R.target.value);
                    },
                    placeholder: m,
                    className: "w-full pl-9 pr-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  }
                )
              ] }),
              u && /* @__PURE__ */ d(
                "button",
                {
                  type: "button",
                  onClick: Q,
                  className: "px-3 py-2 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition-colors flex items-center gap-1",
                  title: `Trier par ordre ${i === "asc" ? "décroissant" : "croissant"}`,
                  children: [
                    /* @__PURE__ */ o(Wr, { size: 14 }),
                    i === "asc" ? "A-Z" : "Z-A"
                  ]
                }
              )
            ] }) }),
            /* @__PURE__ */ d(
              "div",
              {
                ref: T,
                className: "py-1 overflow-y-auto",
                style: { maxHeight: `${k}px` },
                children: [
                  X && K.length === 0 ? /* @__PURE__ */ d("div", { className: "flex items-center justify-center py-4", children: [
                    /* @__PURE__ */ o(it, { size: 16, className: "animate-spin mr-2" }),
                    /* @__PURE__ */ o("span", { className: "text-sm text-gray-500", children: "Chargement..." })
                  ] }) : K.length === 0 ? /* @__PURE__ */ o("div", { className: "px-4 py-3 text-sm text-gray-500 text-center", children: _ ? "Aucun résultat trouvé" : "Aucune option disponible" }) : K.map((R, F) => {
                    const ae = F === K.length - 1;
                    return /* @__PURE__ */ o(
                      "button",
                      {
                        ref: ae && y && c ? W : null,
                        type: "button",
                        className: "w-full text-left px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-glass-light dark:hover:bg-glass-dark-light transition-colors focus:outline-none focus:bg-glass-light dark:focus:bg-glass-dark-light",
                        onClick: () => L(R.value),
                        role: "option",
                        "aria-selected": t === R.value,
                        children: R.label
                      },
                      R.value
                    );
                  }),
                  X && y && c && /* @__PURE__ */ d("div", { className: "flex items-center justify-center py-2", children: [
                    /* @__PURE__ */ o(it, { size: 14, className: "animate-spin mr-2" }),
                    /* @__PURE__ */ o("span", { className: "text-xs text-gray-500", children: "Chargement..." })
                  ] })
                ]
              }
            )
          ]
        }
      ) })
    ] }),
    (w || g) && /* @__PURE__ */ o(
      "p",
      {
        className: `mt-1 text-sm ${w ? "text-red-600 dark:text-red-400" : "text-gray-500 dark:text-gray-400"}`,
        children: w || g
      }
    )
  ] });
};
function fa({
  data: e = [],
  columns: r = [],
  actions: t = [],
  title: s = "Table Interactive",
  itemsPerPage: n = 5,
  selectable: a = !0,
  onRowSelect: l,
  onRowClick: u,
  customFilters: i = null,
  filterConfig: p = [],
  onFilterChange: c,
  // Props pour la gestion externe (pagination/recherche serveur)
  externalSearch: m = !1,
  searchValue: k = "",
  onSearchChange: w = null,
  externalPagination: g = !1,
  totalItems: I = null,
  currentPageExternal: j = 1,
  onPageChangeExternal: _ = null
}) {
  const [E, q] = G(""), [O, X] = G("asc"), [N, y] = G(""), [x, Y] = G([]), [ne, ce] = G(1), [f, b] = G(e), [C, T] = G({}), [v, P] = G(!1);
  je(() => {
    b(e);
  }, [e]);
  const h = (z) => {
    const B = E === z && O === "asc" ? "desc" : "asc";
    q(z), X(B), b(
      (J) => [...J].sort((pe, Ae) => pe[z] < Ae[z] ? B === "asc" ? -1 : 1 : pe[z] > Ae[z] ? B === "asc" ? 1 : -1 : 0)
    );
  }, L = (z) => {
    const B = x.includes(z) ? x.filter((J) => J !== z) : [...x, z];
    if (Y(B), l) {
      const J = f.filter(
        (pe) => B.includes(pe.id)
      );
      l(J);
    }
  }, Z = (z) => {
    const B = z.target.checked ? R.map((J) => J.id) : [];
    if (Y(B), l) {
      const J = f.filter(
        (pe) => B.includes(pe.id)
      );
      l(J);
    }
  }, le = (z) => {
    g && _ ? _(z) : ce(z);
  }, Q = (z) => {
    const B = z.target.value;
    m && w ? w(B) : (y(B), ce(1));
  }, H = (z, B) => {
    const J = { ...C, [z]: B };
    T(J), c && c(J);
  }, K = () => {
    T({}), c && c({});
  }, te = je(() => {
    if (m) return f;
    let z = f;
    if (N) {
      const B = r.filter((J) => J.searchable).map((J) => J.field);
      z = z.filter((J) => B.some((pe) => {
        const Ae = J[pe];
        return Ae == null ? !1 : String(Ae).toLowerCase().includes(N.toLowerCase());
      }));
    }
    return Object.entries(C).forEach(([B, J]) => {
      J != null && J !== "" && (z = z.filter((pe) => Array.isArray(J) ? J.length === 0 || J.includes(pe[B]) : pe[B] === J));
    }), z;
  }, [f, N, r, C, m]), se = g ? I ?? f.length : te.length, W = g ? j : ne, he = Math.ceil(se / n), R = je(() => {
    if (g) return f;
    const z = (W - 1) * n;
    return te.slice(z, z + n);
  }, [
    te,
    W,
    n,
    g,
    f
  ]), F = p && p.length > 0 || i, ae = (p == null ? void 0 : p.length) || 0, ke = !!i, Qe = ae > 0 && ae <= 2 && !ke, Lr = F && !Qe;
  return /* @__PURE__ */ d("section", { className: "glass-card", children: [
    s && /* @__PURE__ */ o("h3", { className: "text-xl font-semibold mb-6", children: s }),
    /* @__PURE__ */ d("div", { className: "mb-6 flex flex-wrap items-end gap-4", children: [
      /* @__PURE__ */ o(
        "div",
        {
          className: "flex-1 min-w-[200px] w-full",
          children: /* @__PURE__ */ o(
            yr,
            {
              type: "text",
              placeholder: "Rechercher...",
              value: m ? k : N,
              onChange: Q,
              startIcon: /* @__PURE__ */ o(Xe, { size: 20 }),
              className: "w-full"
            }
          )
        }
      ),
      Qe && p.map((z) => /* @__PURE__ */ o("div", { className: "w-48 min-w-[150px]", children: /* @__PURE__ */ o(
        Ot,
        {
          options: z.options,
          value: C[z.field] || "",
          onChange: (B) => H(z.field, B),
          placeholder: z.placeholder || z.label
        }
      ) }, z.field)),
      Lr && /* @__PURE__ */ d(xt, { children: [
        /* @__PURE__ */ d(
          fe,
          {
            variant: "outline",
            startIcon: /* @__PURE__ */ o(ps, { size: 16 }),
            className: "whitespace-nowrap",
            onClick: () => P(!0),
            children: [
              "Filtres",
              Object.keys(C).filter((z) => C[z]).length > 0 && /* @__PURE__ */ o("span", { className: "ml-1.5 px-1.5 py-0.5 text-xs bg-primary-100 text-primary-700 rounded-full", children: Object.keys(C).filter((z) => C[z]).length })
            ]
          }
        ),
        /* @__PURE__ */ o(
          fr,
          {
            isOpen: v,
            onClose: () => P(!1),
            title: "Filtres disponibles",
            size: "lg",
            children: /* @__PURE__ */ d("div", { className: "pt-6 pb-2", children: [
              /* @__PURE__ */ d("div", { className: "p-1 space-y-6", children: [
                p && p.length > 0 && /* @__PURE__ */ o("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: p.map((z) => /* @__PURE__ */ o("div", { children: /* @__PURE__ */ o(
                  Ot,
                  {
                    label: z.label,
                    options: z.options,
                    value: C[z.field] || "",
                    onChange: (B) => H(z.field, B),
                    placeholder: z.placeholder || `Sélectionner ${z.label}`
                  }
                ) }, z.field)) }),
                p && p.length > 0 && i && /* @__PURE__ */ o("div", { className: "border-t border-gray-100 my-2" }),
                i && /* @__PURE__ */ o("div", { className: "custom-filters-container", children: i })
              ] }),
              /* @__PURE__ */ d("div", { className: "mt-8 flex justify-end gap-3 pt-4 border-t border-gray-100", children: [
                /* @__PURE__ */ o(fe, { variant: "ghost", onClick: K, children: "Réinitialiser" }),
                /* @__PURE__ */ o(fe, { onClick: () => P(!1), children: "Voir les résultats" })
              ] })
            ] })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ o("div", { className: "overflow-x-auto", children: /* @__PURE__ */ d("table", { className: "w-full", children: [
      /* @__PURE__ */ o("thead", { children: /* @__PURE__ */ d("tr", { className: "border-b border-gray-200", children: [
        a && /* @__PURE__ */ o("th", { className: "text-left p-3 w-10", children: /* @__PURE__ */ o(
          Lt,
          {
            checked: R.length > 0 && R.every(
              (z) => x.includes(z.id)
            ),
            onChange: Z
          }
        ) }),
        r.map((z) => /* @__PURE__ */ o(
          "th",
          {
            className: `text-left p-3 ${z.sortable ? "cursor-pointer hover:bg-gray-50" : ""}`,
            onClick: () => z.sortable && h(z.field),
            children: /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
              z.header,
              z.sortable && E === z.field && (O === "asc" ? /* @__PURE__ */ o(Qt, { size: 16 }) : /* @__PURE__ */ o(Ee, { size: 16 }))
            ] })
          },
          z.field
        )),
        t && t.length > 0 && /* @__PURE__ */ o("th", { className: "text-right p-3", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ o("tbody", { children: R.length === 0 ? /* @__PURE__ */ o("tr", { children: /* @__PURE__ */ o(
        "td",
        {
          colSpan: a ? r.length + (t.length > 0 ? 2 : 1) : r.length + (t.length > 0 ? 1 : 0),
          className: "p-6 text-center text-gray-500",
          children: "Aucune donnée disponible"
        }
      ) }) : R.map((z) => /* @__PURE__ */ d(
        "tr",
        {
          className: `border-b border-gray-100 hover:bg-gray-50 ${u ? "cursor-pointer" : ""}`,
          onClick: () => u && u(z),
          children: [
            a && /* @__PURE__ */ o("td", { className: "p-3", onClick: (B) => B.stopPropagation(), children: /* @__PURE__ */ o(
              Lt,
              {
                checked: x.includes(z.id),
                onChange: () => L(z.id)
              }
            ) }),
            r.map((B) => /* @__PURE__ */ o("td", { className: "p-3", children: B.renderCell ? B.renderCell(z) : /* @__PURE__ */ o("span", { className: "text-gray-600", children: z[B.field] }) }, `${z.id}-${B.field}`)),
            t && t.length > 0 && /* @__PURE__ */ o(
              "td",
              {
                className: "p-3 text-right",
                onClick: (B) => B.stopPropagation(),
                children: /* @__PURE__ */ o("div", { className: "flex justify-end gap-1", children: t.map((B, J) => /* @__PURE__ */ o(
                  xe,
                  {
                    onClick: () => B.onClick(z),
                    title: B.label,
                    icon: B.icon
                  },
                  J
                )) })
              }
            )
          ]
        },
        z.id
      )) })
    ] }) }),
    x.length > 0 && /* @__PURE__ */ o("div", { className: "mt-4 p-3 bg-blue-50 rounded-lg", children: /* @__PURE__ */ d("p", { className: "text-sm text-blue-700", children: [
      x.length,
      " élément",
      x.length > 1 ? "s" : "",
      " ",
      "sélectionné",
      x.length > 1 ? "s" : ""
    ] }) }),
    /* @__PURE__ */ o("div", { className: "mt-6", children: se > 0 && (he > 1 ? /* @__PURE__ */ o(
      Lo,
      {
        currentPage: W,
        totalPages: he,
        onPageChange: le,
        totalResults: se,
        resultsPerPage: n
      }
    ) : /* @__PURE__ */ o("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ d("p", { className: "text-sm text-gray-600", children: [
      se,
      " résultat",
      se > 1 ? "s" : ""
    ] }) })) })
  ] });
}
const ha = ({
  children: e,
  variant: r = "standard",
  htmlFor: t,
  className: s = ""
}) => {
  const n = {
    standard: "text-foreground",
    required: "text-red-600",
    optional: "text-gray-500"
  }, a = r === "required" ? /* @__PURE__ */ d(xt, { children: [
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
}, Go = ({
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
Go.displayName = "ModalFooter";
const ga = (e = "80vh") => je(() => ({
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
function ba({ type: e = "info", message: r, timestamp: t, onClose: s }) {
  const n = {
    info: /* @__PURE__ */ o(Ye, { size: 20, className: "text-blue-500 mt-0.5" }),
    success: /* @__PURE__ */ o(kt, { size: 20, className: "text-green-500 mt-0.5" }),
    warning: /* @__PURE__ */ o(Re, { size: 20, className: "text-yellow-500 mt-0.5" }),
    error: /* @__PURE__ */ o(ve, { size: 20, className: "text-red-500 mt-0.5" })
  };
  return /* @__PURE__ */ o("div", { className: `max-w-sm w-full p-4 rounded-lg shadow-lg ${{
    info: "bg-blue-50 border border-blue-200",
    success: "bg-green-50 border border-green-200",
    warning: "bg-yellow-50 border border-yellow-200",
    error: "bg-red-50 border border-red-200"
  }[e]}`, children: /* @__PURE__ */ d("div", { className: "flex items-start gap-3", children: [
    n[e],
    /* @__PURE__ */ d("div", { className: "flex-1", children: [
      /* @__PURE__ */ o("p", { className: "text-sm font-medium", children: r }),
      t && /* @__PURE__ */ o("p", { className: "text-xs text-gray-500 mt-1", children: new Date(t).toLocaleTimeString() })
    ] }),
    /* @__PURE__ */ o("button", { onClick: s, className: "text-gray-400 hover:text-gray-600", children: /* @__PURE__ */ o(ve, { size: 16 }) })
  ] }) });
}
function xa({ value: e, label: r, showPercentage: t = !0 }) {
  const s = Math.max(0, Math.min(100, e));
  return /* @__PURE__ */ d("div", { children: [
    /* @__PURE__ */ d("div", { className: "flex justify-between mb-2", children: [
      r && /* @__PURE__ */ o("span", { className: "text-sm font-medium", children: r }),
      t && /* @__PURE__ */ d("span", { className: "text-sm text-gray-500", children: [
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
function ya({ options: e, name: r, selectedValue: t, onChange: s }) {
  return /* @__PURE__ */ o("div", { className: "space-y-3", children: e.map((n) => /* @__PURE__ */ d("label", { className: "flex items-center space-x-3 cursor-pointer", children: [
    /* @__PURE__ */ d("div", { className: "relative", children: [
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
const va = ({ title: e, children: r, variant: t = "default", className: s = "" }) => {
  const n = "glass-surface rounded-lg", a = {
    default: "p-6",
    highlighted: "p-8 border-2 border-accent-500",
    gradient: "p-4 bg-gradient-to-r from-blue-50 to-purple-50"
  }, l = [
    n,
    a[t] || a.default,
    s
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ d("div", { className: l, children: [
    e && /* @__PURE__ */ o("h4", { className: "font-medium mb-2", children: e }),
    /* @__PURE__ */ o("p", { className: "text-sm text-gray-600", children: r })
  ] });
};
function vr({
  item: e,
  isActive: r,
  isCollapsed: t = !1,
  onClick: s,
  level: n = 0,
  activePath: a = [],
  wrapper: l
}) {
  const [u, i] = G(() => {
    const w = e.resource || e.id;
    return a.includes(w);
  }), p = e.children && e.children.length > 0, c = e.icon, m = e.name || e.label;
  e.resource || e.id;
  const k = ye((w) => {
    p && (w.preventDefault(), i(!u)), s && s(e);
  }, [p, u, e, s]);
  return /* @__PURE__ */ d("div", { className: "w-full", children: [
    /* @__PURE__ */ d(
      "button",
      {
        onClick: k,
        className: `nav-item w-full text-left ${p ? "justify-between" : ""}`,
        children: [
          /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
            c && /* @__PURE__ */ o("div", { className: "flex h-6 w-6 items-center justify-center", children: /* @__PURE__ */ o(c, { size: 16 }) }),
            t ? "" : m
          ] }),
          p && /* @__PURE__ */ o(
            wt,
            {
              size: 16,
              className: `transform transition-transform ${u ? "rotate-90" : ""}`
            }
          )
        ]
      }
    ),
    p && u && !t && /* @__PURE__ */ o("div", { className: "ml-4 mt-1 space-y-1 border-l pl-2 border-primary-100 dark:border-primary-800", children: e.children.map((w) => {
      const g = w.id, I = /* @__PURE__ */ o(
        vr,
        {
          item: w,
          isActive: a.includes(g),
          isCollapsed: t,
          onClick: s,
          level: n + 1,
          activePath: a,
          wrapper: l
        },
        g
      );
      if (l) {
        const j = l(I, w);
        return j && j.key !== void 0 && j.key !== null ? j : /* @__PURE__ */ o("div", { children: j }, g);
      } else
        return I;
    }) })
  ] });
}
function wa({
  items: e = [],
  isCollapsed: r = !1,
  onNavigate: t,
  activePath: s = [],
  className: n = "",
  wrapper: a
}) {
  const l = ye((i) => {
    t && t(i);
  }, [t]), u = (i) => {
    const p = i.resource || i.id, c = /* @__PURE__ */ o(
      vr,
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
    return /* @__PURE__ */ o("div", { children: u(i) }, p);
  }) });
}
function ka({ className: e, ...r }) {
  const s = ["animate-pulse rounded-md bg-gray-300 dark:bg-gray-700", e].filter(Boolean).join(" ");
  return /* @__PURE__ */ o(
    "div",
    {
      className: s,
      ...r
    }
  );
}
function Na({ message: e, time: r, onDismiss: t }) {
  return /* @__PURE__ */ d("div", { className: "flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg", children: [
    /* @__PURE__ */ d("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ o(at, { size: 16, className: "text-blue-600" }),
      /* @__PURE__ */ d("div", { children: [
        /* @__PURE__ */ o("p", { className: "text-sm font-medium", children: e }),
        r && /* @__PURE__ */ d("p", { className: "text-xs text-gray-500", children: [
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
        children: /* @__PURE__ */ o(ve, { size: 16 })
      }
    )
  ] });
}
const Bt = {
  sm: "h-4 w-4",
  md: "h-8 w-8",
  lg: "h-12 w-12"
}, Dt = {
  sm: "h-1.5 w-1.5",
  md: "h-2 w-2",
  lg: "h-3 w-3"
};
function Ca({ type: e = "spin", size: r = "md" }) {
  if (e === "dots") {
    const s = Dt[r] || Dt.md;
    return /* @__PURE__ */ d("div", { className: "flex space-x-1", children: [
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
  const t = Bt[r] || Bt.md;
  return e === "pulse" ? /* @__PURE__ */ o("div", { className: `animate-pulse ${t} bg-accent-500 rounded-full` }) : /* @__PURE__ */ o(
    "div",
    {
      className: `animate-spin rounded-full ${t} border-4 border-accent-500 border-t-transparent`
    }
  );
}
const za = ({
  direction: e = "vertical",
  spacing: r = 4,
  children: t,
  className: s = "",
  as: n = "div",
  ...a
}) => {
  const l = "flex", u = e === "vertical" ? "flex-col" : "flex-row", i = `gap-${r}`, p = [
    l,
    u,
    i,
    s
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ o(n, { className: p, ...a, children: t });
};
function $a({
  title: e,
  value: r,
  change: t,
  trend: s,
  icon: n,
  variant: a = "default"
}) {
  const u = ((i) => {
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
  return /* @__PURE__ */ d("div", { className: "glass-surface p-5 rounded-xl transition-all duration-200 hover:shadow-md", children: [
    /* @__PURE__ */ d("div", { className: "flex justify-between items-start", children: [
      /* @__PURE__ */ d("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ o("h4", { className: "text-sm font-medium text-gray-500", children: e }),
        /* @__PURE__ */ o("div", { className: "text-2xl font-bold text-gray-800 tracking-tight", children: r })
      ] }),
      n && /* @__PURE__ */ o(
        "div",
        {
          className: `p-3 rounded-xl ${u} flex items-center justify-center shadow-sm`,
          children: /* @__PURE__ */ o(n, { size: 20, strokeWidth: 2 })
        }
      )
    ] }),
    (t || s) && /* @__PURE__ */ d("div", { className: "flex items-center gap-2 mt-3", children: [
      s === "up" && /* @__PURE__ */ o(Rs, { size: 16, className: "text-green-500" }),
      s === "down" && /* @__PURE__ */ o(Is, { size: 16, className: "text-red-500" }),
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
function Ma({ steps: e, currentStep: r }) {
  return /* @__PURE__ */ o("div", { className: "flex items-center mb-6", children: e.map((t, s) => /* @__PURE__ */ d("div", { className: "flex items-center", children: [
    /* @__PURE__ */ o(
      "div",
      {
        className: `flex items-center justify-center w-8 h-8 rounded-full border-2 ${r >= t.id ? "bg-accent-500 border-accent-500 text-white" : "border-gray-300 text-gray-400"}`,
        children: r > t.id ? /* @__PURE__ */ o(vt, { size: 16 }) : t.id
      }
    ),
    /* @__PURE__ */ d("div", { className: "ml-2 mr-4", children: [
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
var Ft = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, de = (e) => !e || typeof e != "object" || Object.keys(e).length === 0, Vo = (e, r) => JSON.stringify(e) === JSON.stringify(r);
function wr(e, r) {
  e.forEach(function(t) {
    Array.isArray(t) ? wr(t, r) : r.push(t);
  });
}
function kr(e) {
  let r = [];
  return wr(e, r), r;
}
var Nr = (...e) => kr(e).filter(Boolean), Cr = (e, r) => {
  let t = {}, s = Object.keys(e), n = Object.keys(r);
  for (let a of s) if (n.includes(a)) {
    let l = e[a], u = r[a];
    Array.isArray(l) || Array.isArray(u) ? t[a] = Nr(u, l) : typeof l == "object" && typeof u == "object" ? t[a] = Cr(l, u) : t[a] = u + " " + l;
  } else t[a] = e[a];
  for (let a of n) s.includes(a) || (t[a] = r[a]);
  return t;
}, Ut = (e) => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim();
const zt = "-", Oo = (e) => {
  const r = Do(e), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: s
  } = e;
  return {
    getClassGroupId: (l) => {
      const u = l.split(zt);
      return u[0] === "" && u.length !== 1 && u.shift(), zr(u, r) || Bo(l);
    },
    getConflictingClassGroupIds: (l, u) => {
      const i = t[l] || [];
      return u && s[l] ? [...i, ...s[l]] : i;
    }
  };
}, zr = (e, r) => {
  var l;
  if (e.length === 0)
    return r.classGroupId;
  const t = e[0], s = r.nextPart.get(t), n = s ? zr(e.slice(1), s) : void 0;
  if (n)
    return n;
  if (r.validators.length === 0)
    return;
  const a = e.join(zt);
  return (l = r.validators.find(({
    validator: u
  }) => u(a))) == null ? void 0 : l.classGroupId;
}, Wt = /^\[(.+)\]$/, Bo = (e) => {
  if (Wt.test(e)) {
    const r = Wt.exec(e)[1], t = r == null ? void 0 : r.substring(0, r.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}, Do = (e) => {
  const {
    theme: r,
    classGroups: t
  } = e, s = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const n in t)
    mt(t[n], s, n, r);
  return s;
}, mt = (e, r, t, s) => {
  e.forEach((n) => {
    if (typeof n == "string") {
      const a = n === "" ? r : qt(r, n);
      a.classGroupId = t;
      return;
    }
    if (typeof n == "function") {
      if (Fo(n)) {
        mt(n(s), r, t, s);
        return;
      }
      r.validators.push({
        validator: n,
        classGroupId: t
      });
      return;
    }
    Object.entries(n).forEach(([a, l]) => {
      mt(l, qt(r, a), t, s);
    });
  });
}, qt = (e, r) => {
  let t = e;
  return r.split(zt).forEach((s) => {
    t.nextPart.has(s) || t.nextPart.set(s, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(s);
  }), t;
}, Fo = (e) => e.isThemeGetter, Uo = (e) => {
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
}, pt = "!", ft = ":", Wo = ft.length, qo = (e) => {
  const {
    prefix: r,
    experimentalParseClassName: t
  } = e;
  let s = (n) => {
    const a = [];
    let l = 0, u = 0, i = 0, p;
    for (let g = 0; g < n.length; g++) {
      let I = n[g];
      if (l === 0 && u === 0) {
        if (I === ft) {
          a.push(n.slice(i, g)), i = g + Wo;
          continue;
        }
        if (I === "/") {
          p = g;
          continue;
        }
      }
      I === "[" ? l++ : I === "]" ? l-- : I === "(" ? u++ : I === ")" && u--;
    }
    const c = a.length === 0 ? n : n.substring(i), m = Ho(c), k = m !== c, w = p && p > i ? p - i : void 0;
    return {
      modifiers: a,
      hasImportantModifier: k,
      baseClassName: m,
      maybePostfixModifierPosition: w
    };
  };
  if (r) {
    const n = r + ft, a = s;
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
}, Ho = (e) => e.endsWith(pt) ? e.substring(0, e.length - 1) : e.startsWith(pt) ? e.substring(1) : e, Zo = (e) => {
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
}, Ko = (e) => ({
  cache: Uo(e.cacheSize),
  parseClassName: qo(e),
  sortModifiers: Zo(e),
  ...Oo(e)
}), Xo = /\s+/, Jo = (e, r) => {
  const {
    parseClassName: t,
    getClassGroupId: s,
    getConflictingClassGroupIds: n,
    sortModifiers: a
  } = r, l = [], u = e.trim().split(Xo);
  let i = "";
  for (let p = u.length - 1; p >= 0; p -= 1) {
    const c = u[p], {
      isExternal: m,
      modifiers: k,
      hasImportantModifier: w,
      baseClassName: g,
      maybePostfixModifierPosition: I
    } = t(c);
    if (m) {
      i = c + (i.length > 0 ? " " + i : i);
      continue;
    }
    let j = !!I, _ = s(j ? g.substring(0, I) : g);
    if (!_) {
      if (!j) {
        i = c + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (_ = s(g), !_) {
        i = c + (i.length > 0 ? " " + i : i);
        continue;
      }
      j = !1;
    }
    const E = a(k).join(":"), q = w ? E + pt : E, O = q + _;
    if (l.includes(O))
      continue;
    l.push(O);
    const X = n(_, j);
    for (let N = 0; N < X.length; ++N) {
      const y = X[N];
      l.push(q + y);
    }
    i = c + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function Yo() {
  let e = 0, r, t, s = "";
  for (; e < arguments.length; )
    (r = arguments[e++]) && (t = $r(r)) && (s && (s += " "), s += t);
  return s;
}
const $r = (e) => {
  if (typeof e == "string")
    return e;
  let r, t = "";
  for (let s = 0; s < e.length; s++)
    e[s] && (r = $r(e[s])) && (t && (t += " "), t += r);
  return t;
};
function ht(e, ...r) {
  let t, s, n, a = l;
  function l(i) {
    const p = r.reduce((c, m) => m(c), e());
    return t = Ko(p), s = t.cache.get, n = t.cache.set, a = u, u(i);
  }
  function u(i) {
    const p = s(i);
    if (p)
      return p;
    const c = Jo(i, t);
    return n(i, c), c;
  }
  return function() {
    return a(Yo.apply(null, arguments));
  };
}
const oe = (e) => {
  const r = (t) => t[e] || [];
  return r.isThemeGetter = !0, r;
}, Mr = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Sr = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Qo = /^\d+\/\d+$/, en = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, tn = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, rn = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, sn = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, on = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ie = (e) => Qo.test(e), D = (e) => !!e && !Number.isNaN(Number(e)), $e = (e) => !!e && Number.isInteger(Number(e)), Ht = (e) => e.endsWith("%") && D(e.slice(0, -1)), Ce = (e) => en.test(e), nn = () => !0, an = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  tn.test(e) && !rn.test(e)
), $t = () => !1, ln = (e) => sn.test(e), cn = (e) => on.test(e), dn = (e) => !S(e) && !A(e), un = (e) => Le(e, Ir, $t), S = (e) => Mr.test(e), Me = (e) => Le(e, jr, an), st = (e) => Le(e, kn, D), mn = (e) => Le(e, Ar, $t), pn = (e) => Le(e, Tr, cn), fn = (e) => Le(e, $t, ln), A = (e) => Sr.test(e), He = (e) => Ge(e, jr), hn = (e) => Ge(e, Nn), gn = (e) => Ge(e, Ar), bn = (e) => Ge(e, Ir), xn = (e) => Ge(e, Tr), yn = (e) => Ge(e, Cn, !0), Le = (e, r, t) => {
  const s = Mr.exec(e);
  return s ? s[1] ? r(s[1]) : t(s[2]) : !1;
}, Ge = (e, r, t = !1) => {
  const s = Sr.exec(e);
  return s ? s[1] ? r(s[1]) : t : !1;
}, Ar = (e) => e === "position", vn = /* @__PURE__ */ new Set(["image", "url"]), Tr = (e) => vn.has(e), wn = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Ir = (e) => wn.has(e), jr = (e) => e === "length", kn = (e) => e === "number", Nn = (e) => e === "family-name", Cn = (e) => e === "shadow", gt = () => {
  const e = oe("color"), r = oe("font"), t = oe("text"), s = oe("font-weight"), n = oe("tracking"), a = oe("leading"), l = oe("breakpoint"), u = oe("container"), i = oe("spacing"), p = oe("radius"), c = oe("shadow"), m = oe("inset-shadow"), k = oe("drop-shadow"), w = oe("blur"), g = oe("perspective"), I = oe("aspect"), j = oe("ease"), _ = oe("animate"), E = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], q = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], O = () => ["auto", "hidden", "clip", "visible", "scroll"], X = () => ["auto", "contain", "none"], N = () => [A, S, i], y = () => [Ie, "full", "auto", ...N()], x = () => [$e, "none", "subgrid", A, S], Y = () => ["auto", {
    span: ["full", $e, A, S]
  }, A, S], ne = () => [$e, "auto", A, S], ce = () => ["auto", "min", "max", "fr", A, S], f = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline"], b = () => ["start", "end", "center", "stretch"], C = () => ["auto", ...N()], T = () => [Ie, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...N()], v = () => [e, A, S], P = () => [Ht, Me], h = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    p,
    A,
    S
  ], L = () => ["", D, He, Me], Z = () => ["solid", "dashed", "dotted", "double"], le = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Q = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    w,
    A,
    S
  ], H = () => ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", A, S], K = () => ["none", D, A, S], te = () => ["none", D, A, S], se = () => [D, A, S], W = () => [Ie, "full", ...N()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Ce],
      breakpoint: [Ce],
      color: [nn],
      container: [Ce],
      "drop-shadow": [Ce],
      ease: ["in", "out", "in-out"],
      font: [dn],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Ce],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Ce],
      shadow: [Ce],
      spacing: ["px", D],
      text: [Ce],
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
        aspect: ["auto", "square", Ie, S, A, I]
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
        columns: [D, S, A, u]
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
        object: [...q(), S, A]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: O()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": O()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": O()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: X()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": X()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": X()
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
        inset: y()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": y()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": y()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: y()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: y()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: y()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: y()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: y()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: y()
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
        z: [$e, "auto", A, S]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Ie, "full", "auto", u, ...N()]
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
        flex: [D, Ie, "auto", "initial", "none", S]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", D, A, S]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", D, A, S]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [$e, "first", "last", "none", A, S]
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
        col: Y()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": ne()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": ne()
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
        row: Y()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": ne()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": ne()
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
        "auto-cols": ce()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ce()
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
        justify: [...f(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...b(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...b()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...f()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...b(), "baseline"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...b(), "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": f()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...b(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...b()]
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
        size: T()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [u, "screen", ...T()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          u,
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
          u,
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
        text: ["base", t, He, Me]
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
        font: [s, A, st]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Ht, S]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [hn, S, r]
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
        "line-clamp": [D, "none", A, st]
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
        decoration: [...Z(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [D, "from-font", "auto", A, Me]
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
        "underline-offset": [D, "auto", A, S]
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
        bg: [...q(), gn, mn]
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
        bg: ["auto", "cover", "contain", bn, un]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, $e, A, S],
          radial: ["", A, S],
          conic: [$e, A, S]
        }, xn, pn]
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
        border: L()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": L()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": L()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": L()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": L()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": L()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": L()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": L()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": L()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": L()
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
        "divide-y": L()
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
        border: [...Z(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...Z(), "hidden", "none"]
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
        outline: [...Z(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [D, A, S]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", D, He, Me]
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
          yn,
          fn
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
        "inset-shadow": ["none", A, S, m]
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
        ring: L()
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
        "ring-offset": [D, Me]
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
        "inset-ring": L()
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
        opacity: [D, A, S]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...le(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": le()
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
        blur: Q()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [D, A, S]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [D, A, S]
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
          A,
          S
        ]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", D, A, S]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [D, A, S]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", D, A, S]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [D, A, S]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", D, A, S]
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
        "backdrop-blur": Q()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [D, A, S]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [D, A, S]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", D, A, S]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [D, A, S]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", D, A, S]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [D, A, S]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [D, A, S]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", D, A, S]
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
        duration: [D, "initial", A, S]
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
        delay: [D, A, S]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", _, A, S]
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
        perspective: [g, A, S]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": H()
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
        transform: [A, S, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: H()
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
        translate: W()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": W()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": W()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": W()
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
        stroke: [D, He, Me, st]
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
}, zn = (e, {
  cacheSize: r,
  prefix: t,
  experimentalParseClassName: s,
  extend: n = {},
  override: a = {}
}) => (De(e, "cacheSize", r), De(e, "prefix", t), De(e, "experimentalParseClassName", s), Ze(e.theme, a.theme), Ze(e.classGroups, a.classGroups), Ze(e.conflictingClassGroups, a.conflictingClassGroups), Ze(e.conflictingClassGroupModifiers, a.conflictingClassGroupModifiers), De(e, "orderSensitiveModifiers", a.orderSensitiveModifiers), Ke(e.theme, n.theme), Ke(e.classGroups, n.classGroups), Ke(e.conflictingClassGroups, n.conflictingClassGroups), Ke(e.conflictingClassGroupModifiers, n.conflictingClassGroupModifiers), Rr(e, n, "orderSensitiveModifiers"), e), De = (e, r, t) => {
  t !== void 0 && (e[r] = t);
}, Ze = (e, r) => {
  if (r)
    for (const t in r)
      De(e, t, r[t]);
}, Ke = (e, r) => {
  if (r)
    for (const t in r)
      Rr(e, r, t);
}, Rr = (e, r, t) => {
  const s = r[t];
  s !== void 0 && (e[t] = e[t] ? e[t].concat(s) : s);
}, $n = (e, ...r) => typeof e == "function" ? ht(gt, e, ...r) : ht(() => zn(gt(), e), ...r), Mn = /* @__PURE__ */ ht(gt);
var Sn = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, Er = (e) => e || void 0, Fe = (...e) => Er(kr(e).filter(Boolean).join(" ")), ot = null, be = {}, bt = !1, Be = (...e) => (r) => r.twMerge ? ((!ot || bt) && (bt = !1, ot = de(be) ? Mn : $n({ ...be, extend: { theme: be.theme, classGroups: be.classGroups, conflictingClassGroupModifiers: be.conflictingClassGroupModifiers, conflictingClassGroups: be.conflictingClassGroups, ...be.extend } })), Er(ot(Fe(e)))) : Fe(e), Zt = (e, r) => {
  for (let t in r) e.hasOwnProperty(t) ? e[t] = Fe(e[t], r[t]) : e[t] = r[t];
  return e;
}, Ve = (e, r) => {
  let { extend: t = null, slots: s = {}, variants: n = {}, compoundVariants: a = [], compoundSlots: l = [], defaultVariants: u = {} } = e, i = { ...Sn, ...r }, p = t != null && t.base ? Fe(t.base, e == null ? void 0 : e.base) : e == null ? void 0 : e.base, c = t != null && t.variants && !de(t.variants) ? Cr(n, t.variants) : n, m = t != null && t.defaultVariants && !de(t.defaultVariants) ? { ...t.defaultVariants, ...u } : u;
  !de(i.twMergeConfig) && !Vo(i.twMergeConfig, be) && (bt = !0, be = i.twMergeConfig);
  let k = de(t == null ? void 0 : t.slots), w = de(s) ? {} : { base: Fe(e == null ? void 0 : e.base, k && (t == null ? void 0 : t.base)), ...s }, g = k ? w : Zt({ ...t == null ? void 0 : t.slots }, de(w) ? { base: e == null ? void 0 : e.base } : w), I = de(t == null ? void 0 : t.compoundVariants) ? a : Nr(t == null ? void 0 : t.compoundVariants, a), j = (E) => {
    if (de(c) && de(s) && k) return Be(p, E == null ? void 0 : E.class, E == null ? void 0 : E.className)(i);
    if (I && !Array.isArray(I)) throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof I}`);
    if (l && !Array.isArray(l)) throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof l}`);
    let q = (f, b, C = [], T) => {
      let v = C;
      if (typeof b == "string") v = v.concat(Ut(b).split(" ").map((P) => `${f}:${P}`));
      else if (Array.isArray(b)) v = v.concat(b.reduce((P, h) => P.concat(`${f}:${h}`), []));
      else if (typeof b == "object" && typeof T == "string") {
        for (let P in b) if (b.hasOwnProperty(P) && P === T) {
          let h = b[P];
          if (h && typeof h == "string") {
            let L = Ut(h);
            v[T] ? v[T] = v[T].concat(L.split(" ").map((Z) => `${f}:${Z}`)) : v[T] = L.split(" ").map((Z) => `${f}:${Z}`);
          } else Array.isArray(h) && h.length > 0 && (v[T] = h.reduce((L, Z) => L.concat(`${f}:${Z}`), []));
        }
      }
      return v;
    }, O = (f, b = c, C = null, T = null) => {
      var v;
      let P = b[f];
      if (!P || de(P)) return null;
      let h = (v = T == null ? void 0 : T[f]) != null ? v : E == null ? void 0 : E[f];
      if (h === null) return null;
      let L = Ft(h), Z = Array.isArray(i.responsiveVariants) && i.responsiveVariants.length > 0 || i.responsiveVariants === !0, le = m == null ? void 0 : m[f], Q = [];
      if (typeof L == "object" && Z) for (let [te, se] of Object.entries(L)) {
        let W = P[se];
        if (te === "initial") {
          le = se;
          continue;
        }
        Array.isArray(i.responsiveVariants) && !i.responsiveVariants.includes(te) || (Q = q(te, W, Q, C));
      }
      let H = L != null && typeof L != "object" ? L : Ft(le), K = P[H || "false"];
      return typeof Q == "object" && typeof C == "string" && Q[C] ? Zt(Q, K) : Q.length > 0 ? (Q.push(K), C === "base" ? Q.join(" ") : Q) : K;
    }, X = () => c ? Object.keys(c).map((f) => O(f, c)) : null, N = (f, b) => {
      if (!c || typeof c != "object") return null;
      let C = new Array();
      for (let T in c) {
        let v = O(T, c, f, b), P = f === "base" && typeof v == "string" ? v : v && v[f];
        P && (C[C.length] = P);
      }
      return C;
    }, y = {};
    for (let f in E) E[f] !== void 0 && (y[f] = E[f]);
    let x = (f, b) => {
      var C;
      let T = typeof (E == null ? void 0 : E[f]) == "object" ? { [f]: (C = E[f]) == null ? void 0 : C.initial } : {};
      return { ...m, ...y, ...T, ...b };
    }, Y = (f = [], b) => {
      let C = [];
      for (let { class: T, className: v, ...P } of f) {
        let h = !0;
        for (let [L, Z] of Object.entries(P)) {
          let le = x(L, b)[L];
          if (Array.isArray(Z)) {
            if (!Z.includes(le)) {
              h = !1;
              break;
            }
          } else {
            let Q = (H) => H == null || H === !1;
            if (Q(Z) && Q(le)) continue;
            if (le !== Z) {
              h = !1;
              break;
            }
          }
        }
        h && (T && C.push(T), v && C.push(v));
      }
      return C;
    }, ne = (f) => {
      let b = Y(I, f);
      if (!Array.isArray(b)) return b;
      let C = {};
      for (let T of b) if (typeof T == "string" && (C.base = Be(C.base, T)(i)), typeof T == "object") for (let [v, P] of Object.entries(T)) C[v] = Be(C[v], P)(i);
      return C;
    }, ce = (f) => {
      if (l.length < 1) return null;
      let b = {};
      for (let { slots: C = [], class: T, className: v, ...P } of l) {
        if (!de(P)) {
          let h = !0;
          for (let L of Object.keys(P)) {
            let Z = x(L, f)[L];
            if (Z === void 0 || (Array.isArray(P[L]) ? !P[L].includes(Z) : P[L] !== Z)) {
              h = !1;
              break;
            }
          }
          if (!h) continue;
        }
        for (let h of C) b[h] = b[h] || [], b[h].push([T, v]);
      }
      return b;
    };
    if (!de(s) || !k) {
      let f = {};
      if (typeof g == "object" && !de(g)) for (let b of Object.keys(g)) f[b] = (C) => {
        var T, v;
        return Be(g[b], N(b, C), ((T = ne(C)) != null ? T : [])[b], ((v = ce(C)) != null ? v : [])[b], C == null ? void 0 : C.class, C == null ? void 0 : C.className)(i);
      };
      return f;
    }
    return Be(p, X(), Y(I), E == null ? void 0 : E.class, E == null ? void 0 : E.className)(i);
  }, _ = () => {
    if (!(!c || typeof c != "object")) return Object.keys(c);
  };
  return j.variantKeys = _(), j.extend = t, j.base = p, j.slots = g, j.variants = c, j.defaultVariants = m, j.compoundSlots = l, j.compoundVariants = I, j;
};
const An = Ve({
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
}), Tn = ee.forwardRef(({ children: e, isCompact: r, className: t, ...s }, n) => {
  const { wrapper: a, table: l } = An({ isCompact: r });
  return /* @__PURE__ */ o("div", { className: a({ class: t }), children: /* @__PURE__ */ o("table", { ref: n, className: l(), ...s, children: e }) });
});
Tn.displayName = "Table";
const In = Ve({
  slots: {
    base: "group/tbody"
  }
}), jn = ee.forwardRef(({ children: e, className: r, ...t }, s) => {
  const { base: n } = In();
  return /* @__PURE__ */ o("tbody", { ref: s, className: n({ class: r }), ...t, children: e });
});
jn.displayName = "TableBody";
const Rn = Ve({
  slots: {
    base: "group/td p-4"
  }
}), En = ee.forwardRef(({ children: e, className: r, ...t }, s) => {
  const { base: n } = Rn();
  return /* @__PURE__ */ o("td", { ref: s, className: n({ class: r }), ...t, children: e });
});
En.displayName = "TableCell";
const Pn = Ve({
  slots: {
    base: "group/th p-4 text-left text-sm font-semibold text-base-content/80 bg-base-200/50"
  }
}), _n = ee.forwardRef(({ children: e, className: r, ...t }, s) => {
  const { base: n } = Pn();
  return /* @__PURE__ */ o("th", { ref: s, className: n({ class: r }), ...t, children: e });
});
_n.displayName = "TableColumn";
const Ln = Ve({
  slots: {
    base: "group/thead"
  }
}), Gn = ee.forwardRef(({ children: e, className: r, ...t }, s) => {
  const { base: n } = Ln();
  return /* @__PURE__ */ o("thead", { ref: s, className: n({ class: r }), ...t, children: e });
});
Gn.displayName = "TableHeader";
const Vn = Ve({
  slots: {
    base: "group/tr border-b border-base-200 last:border-b-0 hover:bg-base-200/50"
  }
}), On = ee.forwardRef(({ children: e, className: r, ...t }, s) => {
  const { base: n } = Vn();
  return /* @__PURE__ */ o("tr", { ref: s, className: n({ class: r }), ...t, children: e });
});
On.displayName = "TableRow";
function Sa({ tabs: e }) {
  var s;
  const [r, t] = G(e && e.length > 0 ? e[0].id : null);
  return !e || e.length === 0 ? null : /* @__PURE__ */ d("div", { children: [
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
function Aa({ label: e, name: r, value: t, onChange: s, placeholder: n, maxLength: a, className: l, ...u }) {
  return /* @__PURE__ */ d("div", { children: [
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
        ...u
      }
    ),
    a && /* @__PURE__ */ d("p", { className: "text-sm text-gray-500 mt-1", children: [
      t.length,
      "/",
      a,
      " caractères"
    ] })
  ] });
}
const Se = "fluid-glass-theme";
function Bn(e = {}) {
  const [r, t] = G("light"), [s, n] = G(!1);
  ie(() => {
    n(!0);
    const c = localStorage.getItem(Se);
    if (c && (c === "light" || c === "dark"))
      t(c);
    else if (e.mode === "auto") {
      const k = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      t(k), localStorage.setItem(Se, k);
    } else {
      const m = e.mode || "light";
      t(m), localStorage.setItem(Se, m);
    }
  }, [e.mode]);
  const a = () => {
    const c = r === "light" ? "dark" : "light";
    t(c), document.documentElement.setAttribute("data-theme", c), localStorage.setItem(Se, c);
  }, l = (c) => {
    (c === "light" || c === "dark") && (t(c), document.documentElement.setAttribute("data-theme", c), localStorage.setItem(Se, c));
  }, u = () => {
    if (localStorage.removeItem(Se), e.mode === "auto") {
      const m = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      t(m), document.documentElement.setAttribute("data-theme", m);
    }
  }, i = (c) => {
    const m = document.documentElement;
    Object.entries(c).forEach(([k, w]) => {
      const g = `--fg-${k.replace(/([A-Z])/g, "-$1").toLowerCase()}`;
      m.style.setProperty(g, w.toString());
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
    ].forEach((k) => {
      c.style.removeProperty(k);
    });
  };
  return ie(() => {
    s && document.documentElement.setAttribute("data-theme", r);
  }, [r, s]), ie(() => {
    e.config && s && i(e.config);
  }, [e.config, s]), ie(() => {
    if (e.mode === "auto" && s) {
      const c = window.matchMedia("(prefers-color-scheme: dark)"), m = (k) => {
        if (!localStorage.getItem(Se)) {
          const g = k.matches ? "dark" : "light";
          t(g), document.documentElement.setAttribute("data-theme", g);
        }
      };
      return c.addEventListener("change", m), () => {
        c.removeEventListener("change", m);
      };
    }
  }, [e.mode, s]), {
    theme: r,
    toggleTheme: a,
    setTheme: l,
    clearSavedTheme: u,
    applyTheme: i,
    resetTheme: p,
    mounted: s
  };
}
const Pr = Je();
function Ta({ children: e, mode: r = "auto", config: t }) {
  const s = Bn({ mode: r, config: t });
  return /* @__PURE__ */ o(Pr.Provider, { value: s, children: e });
}
function Dn() {
  const e = yt(Pr);
  if (!e)
    throw new Error("useThemeContext doit être utilisé dans un ThemeProvider");
  return e;
}
function Kt({ showLabel: e = !0 }) {
  const { theme: r, toggleTheme: t } = Dn();
  return e ? /* @__PURE__ */ o(
    fe,
    {
      onClick: t,
      "aria-label": `Passer au mode ${r === "light" ? "sombre" : "clair"}`,
      startIcon: r === "light" ? /* @__PURE__ */ o(St, { size: 16 }) : /* @__PURE__ */ o(At, { size: 16 }),
      children: e && (r === "light" ? "Mode sombre" : "Mode clair")
    }
  ) : /* @__PURE__ */ o(
    xe,
    {
      onClick: t,
      "aria-label": `Passer au mode ${r === "light" ? "sombre" : "clair"}`,
      icon: r === "light" ? /* @__PURE__ */ o(St, { size: 16 }) : /* @__PURE__ */ o(At, { size: 16 })
    }
  );
}
const Fn = (e) => {
  switch (e) {
    case "user":
      return /* @__PURE__ */ o(rr, { size: 16, className: "text-white" });
    case "order":
      return /* @__PURE__ */ o(lt, { size: 16, className: "text-white" });
    case "update":
      return /* @__PURE__ */ o($s, { size: 16, className: "text-white" });
    case "delete":
      return /* @__PURE__ */ o(As, { size: 16, className: "text-white" });
    default:
      return null;
  }
}, Un = (e) => {
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
function Ia({ items: e }) {
  return !e || e.length === 0 ? null : /* @__PURE__ */ o("div", { className: "space-y-4", children: e.map((r) => /* @__PURE__ */ d("div", { className: "flex items-start gap-4", children: [
    /* @__PURE__ */ o(
      "div",
      {
        className: `w-8 h-8 rounded-full flex items-center justify-center ${Un(r.type)}`,
        children: Fn(r.type)
      }
    ),
    /* @__PURE__ */ d("div", { className: "flex-1", children: [
      /* @__PURE__ */ o("p", { className: "font-medium", children: r.title }),
      /* @__PURE__ */ d("p", { className: "text-sm text-gray-600", children: [
        "par ",
        r.user
      ] }),
      /* @__PURE__ */ d("p", { className: "text-xs text-gray-500 flex items-center gap-1", children: [
        /* @__PURE__ */ o(os, { size: 12 }),
        "il y a ",
        r.time
      ] })
    ] })
  ] }, r.id)) });
}
const _r = Je(null), Wn = {
  "top-right": "top-5 right-5",
  "top-left": "top-5 left-5",
  "top-center": "top-5 left-1/2 -translate-x-1/2",
  "bottom-right": "bottom-5 right-5",
  "bottom-left": "bottom-5 left-5",
  "bottom-center": "bottom-5 left-1/2 -translate-x-1/2"
}, qn = {
  "top-right": "animate-slide-in-right",
  "top-left": "animate-slide-in-left",
  "top-center": "animate-slide-in-top",
  "bottom-right": "animate-slide-in-right",
  "bottom-left": "animate-slide-in-left",
  "bottom-center": "animate-slide-in-bottom"
};
function ja({ children: e }) {
  const [r, t] = G([]), s = (c) => {
    const m = Date.now().toString(), k = { id: m, ...c };
    return t((w) => [...w, k]), m;
  }, n = (c, m) => {
    t((k) => {
      const w = k.find((g) => g.id === c);
      return w && w.onClose && w.onClose(m || !0), k.filter((g) => g.id !== c);
    });
  }, a = (c, m) => (t(
    (k) => k.map(
      (w) => w.id === c ? { ...w, ...m } : w
    )
  ), c), p = {
    toasts: r,
    addToast: s,
    removeToast: n,
    updateToast: a,
    loading: (c, m = {}) => s({
      type: "loading",
      message: c,
      autoClose: !1,
      ...m
    }),
    promise: (c, m) => {
      var _;
      const { pending: k, success: w, error: g } = m, I = s({
        type: "loading",
        message: typeof k == "string" ? k : ((_ = k == null ? void 0 : k.render) == null ? void 0 : _.call(k)) || "Chargement...",
        autoClose: !1,
        ...typeof k == "object" ? k : {}
      }), j = Promise.resolve(typeof c == "function" ? c() : c);
      return j.then((E) => {
        var O;
        const q = typeof w == "string" ? w : ((O = w == null ? void 0 : w.render) == null ? void 0 : O.call(w, { data: E })) || "Succès";
        return a(I, {
          type: "success",
          message: q,
          autoClose: 5e3,
          ...typeof w == "object" ? w : {}
        }), E;
      }).catch((E) => {
        var O;
        const q = typeof g == "string" ? g : ((O = g == null ? void 0 : g.render) == null ? void 0 : O.call(g, { data: E })) || "Une erreur est survenue";
        return a(I, {
          type: "error",
          message: q,
          autoClose: 5e3,
          ...typeof g == "object" ? g : {}
        }), Promise.reject(E);
      }), j;
    },
    dismissAll: () => {
      r.forEach((c) => {
        c.onClose && c.onClose("dismissed");
      }), t([]);
    },
    // Méthodes pour chaque type de toast
    info: (c, m = {}) => s({ type: "info", message: c, autoClose: 5e3, ...m }),
    success: (c, m = {}) => s({ type: "success", message: c, autoClose: 5e3, ...m }),
    warning: (c, m = {}) => s({ type: "warning", message: c, autoClose: 5e3, ...m }),
    error: (c, m = {}) => s({ type: "error", message: c, autoClose: 5e3, ...m })
  };
  return /* @__PURE__ */ d(_r.Provider, { value: p, children: [
    e,
    /* @__PURE__ */ o(Zn, {})
  ] });
}
function Hn() {
  const e = yt(_r);
  if (!e)
    throw new Error("useToast doit être utilisé à l'intérieur d'un ToastProvider");
  return e;
}
function Zn() {
  const { toasts: e, removeToast: r } = Hn(), t = e.reduce((s, n) => {
    const a = n.position || "bottom-right";
    return s[a] || (s[a] = []), s[a].push(n), s;
  }, {});
  return Object.entries(t).map(([s, n]) => /* @__PURE__ */ o("div", { className: `fixed z-50 flex flex-col gap-2 ${Wn[s]}`, children: n.map((a) => /* @__PURE__ */ o(we, { ...a, onClose: (l) => r(a.id, l) }, a.id)) }, s));
}
function we({
  id: e,
  type: r = "info",
  message: t,
  onClose: s,
  autoClose: n = 5e3,
  position: a = "bottom-right",
  onOpen: l,
  isLoading: u = !1
}) {
  const i = me(null), [p, c] = G(!0), m = {
    info: /* @__PURE__ */ o(Ye, { size: 20, className: "text-blue-500 mt-0.5" }),
    success: /* @__PURE__ */ o(kt, { size: 20, className: "text-green-500 mt-0.5" }),
    warning: /* @__PURE__ */ o(Re, { size: 20, className: "text-yellow-500 mt-0.5" }),
    error: /* @__PURE__ */ o(Re, { size: 20, className: "text-red-500 mt-0.5" }),
    loading: /* @__PURE__ */ o(it, { size: 20, className: "text-blue-500 mt-0.5 animate-spin" })
  }, k = {
    info: "bg-blue-50 border border-blue-200",
    success: "bg-green-50 border border-green-200",
    warning: "bg-yellow-50 border border-yellow-200",
    error: "bg-red-50 border border-red-200",
    loading: "bg-blue-50 border border-blue-200"
  };
  ie(() => (l && l(), n !== !1 && !u && (i.current = setTimeout(() => {
    c(!1), setTimeout(() => s("timeout"), 300);
  }, n)), () => {
    i.current && clearTimeout(i.current);
  }), [n, s, l, u]);
  const w = () => {
    c(!1), i.current && clearTimeout(i.current), setTimeout(() => s("dismissed"), 300);
  }, g = p ? "opacity-100" : "opacity-0 translate-x-2";
  return /* @__PURE__ */ d(
    "div",
    {
      className: `max-w-sm w-full p-4 rounded-lg shadow-lg transition-all duration-300 ${k[r]} ${qn[a]} ${g}`,
      children: [
        /* @__PURE__ */ d("div", { className: "flex items-start gap-3", children: [
          m[r],
          /* @__PURE__ */ o("div", { className: "flex-1", children: /* @__PURE__ */ o("p", { className: "text-sm font-medium", children: t }) }),
          r !== "loading" && /* @__PURE__ */ o("button", { onClick: w, className: "text-gray-400 hover:text-gray-600", children: /* @__PURE__ */ o(ve, { size: 16 }) })
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
we.info = (e, r) => (console.warn("Toast.info() est déprécié. Utilisez useToast().info() à la place."), null);
we.success = (e, r) => (console.warn("Toast.success() est déprécié. Utilisez useToast().success() à la place."), null);
we.warning = (e, r) => (console.warn("Toast.warning() est déprécié. Utilisez useToast().warning() à la place."), null);
we.error = (e, r) => (console.warn("Toast.error() est déprécié. Utilisez useToast().error() à la place."), null);
we.loading = (e, r) => (console.warn("Toast.loading() est déprécié. Utilisez useToast().loading() à la place."), null);
we.promise = (e, r) => (console.warn("Toast.promise() est déprécié. Utilisez useToast().promise() à la place."), e);
we.dismiss = (e) => {
  console.warn("Toast.dismiss() est déprécié. Utilisez useToast().removeToast() à la place.");
};
we.dismissAll = () => {
  console.warn("Toast.dismissAll() est déprécié. Utilisez useToast().dismissAll() à la place.");
};
function Ra({ label: e, checked: r, onChange: t }) {
  const [s, n] = G(r || !1);
  return /* @__PURE__ */ d("div", { className: "flex items-center justify-between", children: [
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
function Ea({
  logo: e,
  navItems: r = [],
  userDropdownItems: t = [],
  userAvatar: s,
  userName: n,
  notificationCount: a = 0,
  onSearch: l,
  onNavItemClick: u,
  onNotificationClick: i,
  notificationDropdownContent: p,
  customActions: c = [],
  showSearch: m = !0,
  showNotifications: k = !0,
  showThemeSwitcher: w = !0,
  showThemeSwitcherLabel: g = !1
}) {
  const [I, j] = G(""), [_, E] = G(!1), [q, O] = G("");
  G(() => {
    r.length > 0 && !I && j(r[0].id);
  }, [r]);
  const X = (y) => {
    j(y.id), u && u(y);
  }, N = (y) => {
    O(y.target.value), l && l(y.target.value);
  };
  return /* @__PURE__ */ d("div", { className: "nav-fluid", children: [
    /* @__PURE__ */ d("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ d("div", { className: "flex items-center gap-6", children: [
        e && /* @__PURE__ */ o("div", { className: "font-bold text-lg", children: e }),
        /* @__PURE__ */ o("nav", { className: "hidden md:flex space-x-8", children: r.map((y) => /* @__PURE__ */ d(
          "button",
          {
            className: `flex items-center gap-2 text-sm font-medium ${I === y.id ? "text-accent-600" : "text-gray-600 hover:text-gray-800"}`,
            onClick: () => X(y),
            children: [
              y.icon && /* @__PURE__ */ o(y.icon, { size: 16 }),
              y.label
            ]
          },
          y.id
        )) })
      ] }),
      /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ d("div", { className: "hidden md:flex items-center gap-2", children: [
          c.map((y, x) => /* @__PURE__ */ d("div", { className: "relative", children: [
            /* @__PURE__ */ o(
              xe,
              {
                icon: y.icon,
                "aria-label": y.label,
                variant: y.variant || "ghost",
                onClick: y.onClick,
                className: y.className
              }
            ),
            y.badge && /* @__PURE__ */ o(
              et,
              {
                variant: y.badgeVariant || "red",
                className: "absolute -top-1 -right-1 min-w-[18px] h-[18px] flex items-center justify-center text-[10px] px-1 py-0",
                children: y.badge > 99 ? "99+" : y.badge
              }
            )
          ] }, y.key || x)),
          m && /* @__PURE__ */ d("div", { className: "relative", children: [
            /* @__PURE__ */ o(
              "input",
              {
                type: "text",
                placeholder: "Rechercher...",
                className: "py-1 pl-10 pr-4 rounded-lg bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 w-64",
                value: q,
                onChange: N
              }
            ),
            /* @__PURE__ */ o(
              Xe,
              {
                size: 16,
                className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              }
            )
          ] }),
          w && /* @__PURE__ */ o(Kt, { showLabel: g }),
          k && (p ? /* @__PURE__ */ d(ue, { children: [
            /* @__PURE__ */ o(ue.Trigger, { children: /* @__PURE__ */ d("div", { className: "relative cursor-pointer", children: [
              /* @__PURE__ */ o(
                xe,
                {
                  icon: /* @__PURE__ */ o(at, { size: 16 }),
                  "aria-label": "Notifications",
                  variant: "ghost"
                }
              ),
              a > 0 && /* @__PURE__ */ o(
                et,
                {
                  variant: "red",
                  className: "absolute -top-1 -right-1 min-w-[18px] h-[18px] flex items-center justify-center text-[10px] px-1 py-0 pointer-events-none",
                  children: a > 99 ? "99+" : a
                }
              )
            ] }) }),
            /* @__PURE__ */ o(
              ue.Menu,
              {
                align: "right",
                className: "w-96 max-h-[480px] overflow-hidden p-0",
                children: p
              }
            )
          ] }) : /* @__PURE__ */ d("div", { className: "relative", children: [
            /* @__PURE__ */ o(
              xe,
              {
                icon: /* @__PURE__ */ o(at, { size: 16 }),
                "aria-label": "Notifications",
                variant: "ghost",
                onClick: i
              }
            ),
            a > 0 && /* @__PURE__ */ o(
              et,
              {
                variant: "red",
                className: "absolute -top-1 -right-1 min-w-[18px] h-[18px] flex items-center justify-center text-[10px] px-1 py-0",
                children: a > 99 ? "99+" : a
              }
            )
          ] })),
          t.length > 0 && /* @__PURE__ */ d(ue, { children: [
            /* @__PURE__ */ o(ue.Trigger, { asChild: !0, children: /* @__PURE__ */ o(
              fe,
              {
                variant: "ghost",
                className: "flex items-center gap-2",
                endIcon: /* @__PURE__ */ o(Ee, { size: 16 }),
                children: /* @__PURE__ */ d("span", { className: "flex items-center gap-2", children: [
                  s ? typeof s == "string" ? /* @__PURE__ */ o(
                    Ue,
                    {
                      src: s,
                      alt: n || "User",
                      size: "sm",
                      fallback: (n || "U").charAt(0)
                    }
                  ) : s : /* @__PURE__ */ o(
                    Ue,
                    {
                      size: "sm",
                      fallback: (n || "U").charAt(0)
                    }
                  ),
                  n && /* @__PURE__ */ o("span", { className: "font-medium", children: n })
                ] })
              }
            ) }),
            /* @__PURE__ */ o(ue.Menu, { children: t.map(
              (y, x) => y.isSeparator ? /* @__PURE__ */ o(ue.Separator, {}, `sep-${x}`) : /* @__PURE__ */ d(
                ue.Item,
                {
                  onClick: y.onClick,
                  className: y.isDanger ? "text-red-600 hover:text-red-700" : "",
                  children: [
                    y.icon,
                    y.label
                  ]
                },
                `${y.label}-${x}`
              )
            ) })
          ] })
        ] }),
        /* @__PURE__ */ o(
          xe,
          {
            icon: _ ? /* @__PURE__ */ o(ve, { size: 24 }) : /* @__PURE__ */ o(er, { size: 24 }),
            onClick: () => E(!_),
            className: "md:hidden",
            "aria-label": "Menu",
            variant: "ghost"
          }
        )
      ] })
    ] }),
    _ && /* @__PURE__ */ o("div", { className: "md:hidden mt-4 py-4 border-t", children: /* @__PURE__ */ d("nav", { className: "flex flex-col space-y-4", children: [
      r.map((y) => /* @__PURE__ */ d(
        "button",
        {
          className: `flex items-center gap-2 text-sm font-medium ${I === y.id ? "text-accent-600" : "text-gray-600"}`,
          onClick: () => {
            X(y), E(!1);
          },
          children: [
            y.icon && /* @__PURE__ */ o(y.icon, { size: 18 }),
            y.label
          ]
        },
        y.id
      )),
      /* @__PURE__ */ d("div", { className: "pt-4 border-t", children: [
        m && /* @__PURE__ */ d("div", { className: "relative mb-4", children: [
          /* @__PURE__ */ o(
            "input",
            {
              type: "text",
              placeholder: "Rechercher...",
              className: "w-full py-2 pl-10 pr-4 rounded-lg bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500",
              value: q,
              onChange: N
            }
          ),
          /* @__PURE__ */ o(
            Xe,
            {
              size: 16,
              className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            }
          )
        ] }),
        w && /* @__PURE__ */ o("div", { className: "mb-4", children: /* @__PURE__ */ o(Kt, { showLabel: !0 }) }),
        n && /* @__PURE__ */ d("div", { className: "flex items-center gap-3 mb-2", children: [
          s ? typeof s == "string" ? /* @__PURE__ */ o(
            Ue,
            {
              src: s,
              alt: n,
              size: "sm",
              fallback: n.charAt(0)
            }
          ) : s : /* @__PURE__ */ o(Ue, { size: "sm", fallback: n.charAt(0) }),
          /* @__PURE__ */ o("span", { className: "font-medium", children: n })
        ] }),
        t.filter((y) => !y.isSeparator).map((y, x) => /* @__PURE__ */ d(
          "button",
          {
            onClick: y.onClick,
            className: `flex items-center gap-2 text-sm font-medium py-2 w-full ${y.isDanger ? "text-red-600" : "text-gray-600"}`,
            children: [
              y.icon,
              y.label
            ]
          },
          `${y.label}-${x}`
        ))
      ] })
    ] }) })
  ] });
}
function Pa({ view: e, setView: r }) {
  return /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ o(
      "button",
      {
        onClick: () => r("grid"),
        className: `p-2 rounded-lg transition-colors ${e === "grid" ? "bg-accent-500 text-white" : "hover:bg-glass-light"}`,
        children: /* @__PURE__ */ o(hs, { size: 16 })
      }
    ),
    /* @__PURE__ */ o(
      "button",
      {
        onClick: () => r("list"),
        className: `p-2 rounded-lg transition-colors ${e === "list" ? "bg-accent-500 text-white" : "hover:bg-glass-light"}`,
        children: /* @__PURE__ */ o(xs, { size: 16 })
      }
    )
  ] });
}
export {
  Qn as Accordion,
  ea as Alert,
  Ue as Avatar,
  et as Badge,
  ta as Breadcrumb,
  fe as Button,
  Co as Card,
  zo as CardBody,
  $o as CardDescription,
  Mo as CardFooter,
  So as CardHeader,
  Ao as CardTitle,
  Lt as Checkbox,
  ra as Chip,
  sa as Collapsible,
  oa as CollapsibleSidebar,
  na as Container,
  aa as ContextMenu,
  la as DataCard,
  ia as DocumentUploader,
  ca as Drawer,
  ue as Dropdown,
  da as EmptyState,
  ua as ExpandableTable,
  ma as FileUploader,
  pa as Footer,
  Vt as HelperText,
  xe as IconButton,
  yr as Input,
  fa as InteractiveTable,
  ha as Label,
  sr as Link,
  fr as Modal,
  gr as ModalBody,
  Go as ModalFooter,
  hr as ModalHeader,
  ba as Notification,
  Lo as Pagination,
  xa as ProgressBar,
  ya as RadioGroup,
  va as SectionBox,
  Ot as Select,
  vr as SidebarMenuItem,
  wa as SidebarNavigation,
  ka as Skeleton,
  Na as Snackbar,
  Ca as Spinner,
  za as Stack,
  $a as StatCard,
  Ma as Stepper,
  Tn as Table,
  jn as TableBody,
  En as TableCell,
  _n as TableColumn,
  Gn as TableHeader,
  On as TableRow,
  Sa as Tabs,
  Aa as Textarea,
  Ta as ThemeProvider,
  Kt as ThemeSwitcher,
  Ia as Timeline,
  we as Toast,
  ja as ToastProvider,
  Ra as Toggle,
  Ea as TopNavigation,
  Pa as ViewModeSwitch,
  ga as useModalLayout,
  Hn as useToast
};

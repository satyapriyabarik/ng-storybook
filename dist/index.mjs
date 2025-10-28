import y, { forwardRef as Ue, useState as L, createContext as me, useRef as pe, useEffect as ge, useContext as fe, isValidElement as He, useCallback as ce } from "react";
import "react-dom";
var W = { exports: {} }, B = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _e;
function Je() {
  if (_e) return B;
  _e = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function o(n, a, c) {
    var d = null;
    if (c !== void 0 && (d = "" + c), a.key !== void 0 && (d = "" + a.key), "key" in a) {
      c = {};
      for (var l in a)
        l !== "key" && (c[l] = a[l]);
    } else c = a;
    return a = c.ref, {
      $$typeof: e,
      type: n,
      key: d,
      ref: a !== void 0 ? a : null,
      props: c
    };
  }
  return B.Fragment = t, B.jsx = o, B.jsxs = o, B;
}
var z = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ie;
function Xe() {
  return ie || (ie = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(s) {
      if (s == null) return null;
      if (typeof s == "function")
        return s.$$typeof === We ? null : s.displayName || s.name || null;
      if (typeof s == "string") return s;
      switch (s) {
        case U:
          return "Fragment";
        case Oe:
          return "Profiler";
        case Pe:
          return "StrictMode";
        case Le:
          return "Suspense";
        case De:
          return "SuspenseList";
        case Ye:
          return "Activity";
      }
      if (typeof s == "object")
        switch (typeof s.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), s.$$typeof) {
          case Ae:
            return "Portal";
          case ze:
            return s.displayName || "Context";
          case Be:
            return (s._context.displayName || "Context") + ".Consumer";
          case Fe:
            var i = s.render;
            return s = s.displayName, s || (s = i.displayName || i.name || "", s = s !== "" ? "ForwardRef(" + s + ")" : "ForwardRef"), s;
          case qe:
            return i = s.displayName || null, i !== null ? i : e(s.type) || "Memo";
          case H:
            i = s._payload, s = s._init;
            try {
              return e(s(i));
            } catch {
            }
        }
      return null;
    }
    function t(s) {
      return "" + s;
    }
    function o(s) {
      try {
        t(s);
        var i = !1;
      } catch {
        i = !0;
      }
      if (i) {
        i = console;
        var m = i.error, g = typeof Symbol == "function" && Symbol.toStringTag && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return m.call(
          i,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          g
        ), t(s);
      }
    }
    function n(s) {
      if (s === U) return "<>";
      if (typeof s == "object" && s !== null && s.$$typeof === H)
        return "<...>";
      try {
        var i = e(s);
        return i ? "<" + i + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var s = J.A;
      return s === null ? null : s.getOwner();
    }
    function c() {
      return Error("react-stack-top-frame");
    }
    function d(s) {
      if (oe.call(s, "key")) {
        var i = Object.getOwnPropertyDescriptor(s, "key").get;
        if (i && i.isReactWarning) return !1;
      }
      return s.key !== void 0;
    }
    function l(s, i) {
      function m() {
        se || (se = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          i
        ));
      }
      m.isReactWarning = !0, Object.defineProperty(s, "key", {
        get: m,
        configurable: !0
      });
    }
    function _() {
      var s = e(this.type);
      return re[s] || (re[s] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), s = this.props.ref, s !== void 0 ? s : null;
    }
    function u(s, i, m, g, Y, Z) {
      var f = m.ref;
      return s = {
        $$typeof: te,
        type: s,
        key: i,
        props: m,
        _owner: g
      }, (f !== void 0 ? f : null) !== null ? Object.defineProperty(s, "ref", {
        enumerable: !1,
        get: _
      }) : Object.defineProperty(s, "ref", { enumerable: !1, value: null }), s._store = {}, Object.defineProperty(s._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(s, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(s, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Y
      }), Object.defineProperty(s, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Z
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    }
    function h(s, i, m, g, Y, Z) {
      var f = i.children;
      if (f !== void 0)
        if (g)
          if (Me(f)) {
            for (g = 0; g < f.length; g++)
              p(f[g]);
            Object.freeze && Object.freeze(f);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(f);
      if (oe.call(i, "key")) {
        f = e(s);
        var G = Object.keys(i).filter(function(Ve) {
          return Ve !== "key";
        });
        g = 0 < G.length ? "{key: someKey, " + G.join(": ..., ") + ": ...}" : "{key: someKey}", le[f + g] || (G = 0 < G.length ? "{" + G.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          g,
          f,
          G,
          f
        ), le[f + g] = !0);
      }
      if (f = null, m !== void 0 && (o(m), f = "" + m), d(i) && (o(i.key), f = "" + i.key), "key" in i) {
        m = {};
        for (var Q in i)
          Q !== "key" && (m[Q] = i[Q]);
      } else m = i;
      return f && l(
        m,
        typeof s == "function" ? s.displayName || s.name || "Unknown" : s
      ), u(
        s,
        f,
        m,
        a(),
        Y,
        Z
      );
    }
    function p(s) {
      $(s) ? s._store && (s._store.validated = 1) : typeof s == "object" && s !== null && s.$$typeof === H && (s._payload.status === "fulfilled" ? $(s._payload.value) && s._payload.value._store && (s._payload.value._store.validated = 1) : s._store && (s._store.validated = 1));
    }
    function $(s) {
      return typeof s == "object" && s !== null && s.$$typeof === te;
    }
    var I = y, te = Symbol.for("react.transitional.element"), Ae = Symbol.for("react.portal"), U = Symbol.for("react.fragment"), Pe = Symbol.for("react.strict_mode"), Oe = Symbol.for("react.profiler"), Be = Symbol.for("react.consumer"), ze = Symbol.for("react.context"), Fe = Symbol.for("react.forward_ref"), Le = Symbol.for("react.suspense"), De = Symbol.for("react.suspense_list"), qe = Symbol.for("react.memo"), H = Symbol.for("react.lazy"), Ye = Symbol.for("react.activity"), We = Symbol.for("react.client.reference"), J = I.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, oe = Object.prototype.hasOwnProperty, Me = Array.isArray, X = console.createTask ? console.createTask : function() {
      return null;
    };
    I = {
      react_stack_bottom_frame: function(s) {
        return s();
      }
    };
    var se, re = {}, ne = I.react_stack_bottom_frame.bind(
      I,
      c
    )(), ae = X(n(c)), le = {};
    z.Fragment = U, z.jsx = function(s, i, m) {
      var g = 1e4 > J.recentlyCreatedOwnerStacks++;
      return h(
        s,
        i,
        m,
        !1,
        g ? Error("react-stack-top-frame") : ne,
        g ? X(n(s)) : ae
      );
    }, z.jsxs = function(s, i, m) {
      var g = 1e4 > J.recentlyCreatedOwnerStacks++;
      return h(
        s,
        i,
        m,
        !0,
        g ? Error("react-stack-top-frame") : ne,
        g ? X(n(s)) : ae
      );
    };
  })()), z;
}
var de;
function Ze() {
  return de || (de = 1, process.env.NODE_ENV === "production" ? W.exports = Je() : W.exports = Xe()), W.exports;
}
var r = Ze();
const Qe = "_button_1vcgi_1", Ke = "_primary_1vcgi_9", et = "_secondary_1vcgi_18", tt = "_success_1vcgi_27", ot = "_danger_1vcgi_36", st = "_sm_1vcgi_45", rt = "_md_1vcgi_50", nt = "_lg_1vcgi_55", at = "_disabled_1vcgi_60", M = {
  button: Qe,
  primary: Ke,
  secondary: et,
  success: tt,
  danger: ot,
  sm: st,
  md: rt,
  lg: nt,
  disabled: at
}, ms = ({
  children: e,
  variant: t = "primary",
  size: o = "md",
  disabled: n = !1,
  mr: a = "",
  ml: c = "",
  mt: d = "",
  mb: l = "",
  ..._
}) => /* @__PURE__ */ r.jsx(
  "button",
  {
    className: `${M.button} ${M[t]} ${M[o]} ${n ? M.disabled : ""}`,
    style: {
      marginRight: a,
      marginLeft: c,
      marginTop: d,
      marginBottom: l
    },
    disabled: n,
    ..._,
    children: e
  }
), lt = ({
  src: e,
  alt: t = "",
  width: o,
  height: n,
  fill: a,
  style: c,
  ...d
}) => {
  const l = a ? {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover"
    // ✅ cast to valid enum type
  } : {};
  return /* @__PURE__ */ r.jsx(
    "img",
    {
      src: typeof e == "string" ? e : e.src,
      alt: t,
      width: o,
      height: n,
      style: { ...c, ...l },
      ...d
    }
  );
};
function xe(e) {
  var t, o, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (o = xe(e[t])) && (n && (n += " "), n += o);
  } else for (o in e) e[o] && (n && (n += " "), n += o);
  return n;
}
function C() {
  for (var e, t, o = 0, n = "", a = arguments.length; o < a; o++) (e = arguments[o]) && (t = xe(e)) && (n && (n += " "), n += t);
  return n;
}
const ct = "_card_zxwhi_1", _t = "_cardHeader_zxwhi_13", it = "_cardBody_zxwhi_20", dt = "_cardFooter_zxwhi_25", ut = "_cardTitle_zxwhi_33", mt = "_cardText_zxwhi_45", pt = "_cardImageWrapper_zxwhi_51", gt = "_cardImage_zxwhi_51", j = {
  card: ct,
  cardHeader: _t,
  cardBody: it,
  cardFooter: dt,
  cardTitle: ut,
  cardText: mt,
  cardImageWrapper: pt,
  cardImage: gt
}, be = Ue(
  ({ children: e, className: t = "", ...o }, n) => /* @__PURE__ */ r.jsx("div", { ref: n, className: C(j.card, t), ...o, children: e })
);
be.displayName = "Card";
const ve = ({ children: e, className: t = "", ...o }) => /* @__PURE__ */ r.jsx("div", { className: C(j.cardHeader, t), ...o, children: e });
ve.displayName = "Card.Header";
const je = ({ children: e, className: t = "", ...o }) => /* @__PURE__ */ r.jsx("div", { className: C(j.cardBody, t), ...o, children: e });
je.displayName = "Card.Body";
const ye = ({ children: e, className: t = "", ...o }) => /* @__PURE__ */ r.jsx("div", { className: C(j.cardFooter, t), ...o, children: e });
ye.displayName = "Card.Footer";
const he = ({
  children: e,
  className: t = "",
  as: o = "h3",
  ...n
}) => /* @__PURE__ */ r.jsx(o, { className: C(j.cardTitle, t), ...n, children: e });
he.displayName = "Card.Title";
const $e = ({ children: e, className: t = "", ...o }) => /* @__PURE__ */ r.jsx("p", { className: C(j.cardText, t), ...o, children: e });
$e.displayName = "Card.Text";
const Ne = ({
  variant: e,
  className: t = "",
  alt: o,
  fill: n,
  width: a,
  height: c,
  style: d,
  ...l
}) => {
  let _ = "";
  switch (e) {
    case "top":
      _ = j.top;
      break;
    case "bottom":
      _ = j.bottom;
      break;
    case "rounded":
      _ = j.rounded;
      break;
    case "circle":
      _ = j.circle;
      break;
  }
  const u = !!n;
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      className: C(j.cardImageWrapper, _, t),
      style: {
        position: "relative",
        width: "100%",
        height: c ? `${c}px` : "250px",
        overflow: "hidden",
        borderRadius: "inherit"
      },
      children: /* @__PURE__ */ r.jsx(
        lt,
        {
          alt: o,
          fill: u,
          width: u ? void 0 : a,
          height: u ? void 0 : c,
          className: C(j.cardImage),
          style: { objectFit: "cover", ...d },
          ...l
        }
      )
    }
  );
};
Ne.displayName = "Card.Img";
const ps = Object.assign(be, {
  Header: ve,
  Body: je,
  Footer: ye,
  Title: he,
  Text: $e,
  Img: Ne
}), we = ({
  href: e,
  children: t,
  ...o
}) => /* @__PURE__ */ r.jsx("a", { href: e, ...o, children: t }), ft = "_navbar_om48y_3", xt = "_brand_om48y_23", bt = "_toggle_om48y_43", vt = "_bar_om48y_65", jt = "_collapse_om48y_79", yt = "_show_om48y_95", ht = "_nav_om48y_3", $t = "_navLink_om48y_123", Nt = "_active_om48y_163", b = {
  navbar: ft,
  brand: xt,
  toggle: bt,
  bar: vt,
  collapse: jt,
  show: yt,
  nav: ht,
  navLink: $t,
  active: Nt,
  "bg-light": "_bg-light_om48y_209",
  "bg-dark": "_bg-dark_om48y_219",
  "bg-primary": "_bg-primary_om48y_229",
  "bg-secondary": "_bg-secondary_om48y_239",
  "bg-success": "_bg-success_om48y_249",
  "bg-danger": "_bg-danger_om48y_259",
  "bg-warning": "_bg-warning_om48y_269",
  "bg-info": "_bg-info_om48y_279",
  "bg-transparent": "_bg-transparent_om48y_289",
  "navbar-dark": "_navbar-dark_om48y_301",
  "navbar-light": "_navbar-light_om48y_309",
  "expand-sm": "_expand-sm_om48y_321",
  "expand-md": "_expand-md_om48y_323",
  "expand-lg": "_expand-lg_om48y_325",
  "expand-xl": "_expand-xl_om48y_327",
  "expand-xxl": "_expand-xxl_om48y_329"
};
function ue(e, t) {
  return y.isValidElement(e) && typeof e.type == "function" && e.type.displayName === t;
}
const D = ({
  bg: e = "light",
  variant: t = "light",
  expand: o = "lg",
  children: n,
  className: a = ""
}) => {
  const [c, d] = L(!1);
  return /* @__PURE__ */ r.jsx(
    "nav",
    {
      className: `${b.navbar} ${b[`bg-${e}`]} ${b[`navbar-${t}`]} ${b[`expand-${o}`]} ${a}`,
      children: y.Children.map(n, (l) => y.isValidElement(l) ? ue(l, "NavBar.Toggle") ? y.cloneElement(l, {
        onClick: () => d((_) => !_)
      }) : ue(l, "NavBar.Collapse") ? y.cloneElement(l, {
        show: c
      }) : l : l)
    }
  );
};
D.displayName = "NavBar";
const Te = ({ href: e = "/", children: t }) => /* @__PURE__ */ r.jsx(
  we,
  {
    href: e,
    className: `${b.brand} d-flex align-items-center text-decoration-none`,
    children: t
  }
);
Te.displayName = "NavBar.Brand";
const Ee = ({ ariaControls: e, onClick: t }) => /* @__PURE__ */ r.jsxs(
  "button",
  {
    type: "button",
    className: b.toggle,
    "aria-controls": e,
    "aria-label": "Toggle navigation",
    onClick: t,
    children: [
      /* @__PURE__ */ r.jsx("span", { className: b.bar }),
      /* @__PURE__ */ r.jsx("span", { className: b.bar }),
      /* @__PURE__ */ r.jsx("span", { className: b.bar })
    ]
  }
);
Ee.displayName = "NavBar.Toggle";
const Ce = ({ id: e, children: t, show: o = !1 }) => /* @__PURE__ */ r.jsx("div", { id: e, className: `${b.collapse} ${o ? b.show : ""}`, children: t });
Ce.displayName = "NavBar.Collapse";
const ee = ({ children: e, className: t = "" }) => /* @__PURE__ */ r.jsx("ul", { className: `${b.nav} ${t}`, children: e }), wt = ({ href: e, children: t, active: o = !1 }) => /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsx(we, { href: e, className: `${b.navLink} ${o ? b.active : ""}`, children: t }) });
ee.Link = wt;
ee.displayName = "NavBar.Nav";
D.Brand = Te;
D.Toggle = Ee;
D.Collapse = Ce;
D.Nav = ee;
const Tt = "_form_ujlhb_1", Et = "_formGroup_ujlhb_13", Ct = "_label_ujlhb_25", kt = "_input_ujlhb_35", Rt = "_textarea_ujlhb_37", It = "_select_ujlhb_39", T = {
  form: Tt,
  formGroup: Et,
  label: Ct,
  input: kt,
  textarea: Rt,
  select: It
}, v = ({ children: e, className: t = "", ...o }) => /* @__PURE__ */ r.jsx("form", { className: `${T.form} ${t}`, ...o, children: e });
v.Group = ({ children: e, className: t = "", ...o }) => /* @__PURE__ */ r.jsx("div", { className: `${T.formGroup} ${t}`, ...o, children: e });
v.Group.displayName = "Form.Group";
v.Label = ({ children: e, htmlFor: t, className: o = "", ...n }) => /* @__PURE__ */ r.jsx("label", { htmlFor: t, className: `${T.label} ${o}`, ...n, children: e });
v.Label.displayName = "Form.Label";
v.Input = ({ className: e = "", ...t }) => /* @__PURE__ */ r.jsx("input", { className: `${T.input} ${e}`, ...t });
v.Input.displayName = "Form.Input";
v.TextArea = ({ className: e = "", ...t }) => /* @__PURE__ */ r.jsx("textarea", { className: `${T.textarea} ${e}`, ...t });
v.TextArea.displayName = "Form.TextArea";
v.Select = ({ className: e = "", ...t }) => /* @__PURE__ */ r.jsx("select", { className: `${T.select} ${e}`, ...t });
v.Select.displayName = "Form.Select";
v.Control = ({ as: e = "input", className: t = "", ...o }) => {
  switch (e) {
    case "textarea":
      return /* @__PURE__ */ r.jsx("textarea", { className: `${T.textarea} ${t}`, ...o });
    case "select":
      return /* @__PURE__ */ r.jsx("select", { className: `${T.select} ${t}`, ...o });
    case "input":
    default:
      return /* @__PURE__ */ r.jsx("input", { className: `${T.input} ${t}`, ...o });
  }
};
v.Control.displayName = "Form.Control";
const Gt = "_inputGroup_lxf65_1", St = "_inputGroupText_lxf65_71", At = "_inputGroupPrepend_lxf65_105", Pt = "_inputGroupAppend_lxf65_107", Ot = "_inputGroupButton_lxf65_117", O = {
  inputGroup: Gt,
  "dropdown-toggle": "_dropdown-toggle_lxf65_15",
  "dropdown-menu": "_dropdown-menu_lxf65_15",
  inputGroupText: St,
  inputGroupPrepend: At,
  inputGroupAppend: Pt,
  inputGroupButton: Ot,
  "inputGroup-sm": "_inputGroup-sm_lxf65_127",
  "inputGroup-lg": "_inputGroup-lg_lxf65_143"
}, N = ({ children: e, className: t = "", size: o = "md", ...n }) => {
  const a = [
    O.inputGroup,
    O[`inputGroup-${o}`] || "",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsx("div", { className: a, ...n, children: e });
};
N.Text = ({ children: e, className: t = "", ...o }) => /* @__PURE__ */ r.jsx("span", { className: `${O.inputGroupText} ${t}`, ...o, children: e });
N.Text.displayName = "InputGroup.Text";
N.Prepend = ({ children: e, className: t = "", ...o }) => /* @__PURE__ */ r.jsx("div", { className: `${O.inputGroupPrepend} ${t}`, ...o, children: e });
N.Prepend.displayName = "InputGroup.Prepend";
N.Append = ({ children: e, className: t = "", ...o }) => /* @__PURE__ */ r.jsx("div", { className: `${O.inputGroupAppend} ${t}`, ...o, children: e });
N.Append.displayName = "InputGroup.Append";
N.Button = ({ children: e, className: t = "", ...o }) => /* @__PURE__ */ r.jsx("div", { className: `${O.inputGroupButton} ${t}`, ...o, children: e });
N.Button.displayName = "InputGroup.Button";
const Bt = "_dropdown_1b4le_3", zt = "_toggle_1b4le_15", Ft = "_menu_1b4le_113", Lt = "_show_1b4le_151", Dt = "_fadeIn_1b4le_1", qt = "_end_1b4le_163", Yt = "_item_1b4le_175", Wt = "_divider_1b4le_235", E = {
  dropdown: Bt,
  toggle: zt,
  "outline-light": "_outline-light_1b4le_87",
  menu: Ft,
  show: Lt,
  fadeIn: Dt,
  end: qt,
  item: Yt,
  divider: Wt
}, ke = me(void 0), Re = () => {
  const e = fe(ke);
  if (!e)
    throw new Error("Dropdown.Toggle, Dropdown.Menu, and Dropdown.Item must be used within a <Dropdown>");
  return e;
}, V = ({ align: e = "start", children: t, className: o = "" }) => {
  const [n, a] = L(!1), c = pe(null), d = () => a((_) => !_), l = () => a(!1);
  return ge(() => {
    const _ = (u) => {
      c.current && !c.current.contains(u.target) && l();
    };
    return document.addEventListener("mousedown", _), () => document.removeEventListener("mousedown", _);
  }, []), /* @__PURE__ */ r.jsx(ke.Provider, { value: { show: n, toggle: d, align: e }, children: /* @__PURE__ */ r.jsx("div", { className: `${E.dropdown} ${o}`, ref: c, children: t }) });
}, Mt = ({
  variant: e = "primary",
  id: t,
  children: o,
  className: n = "",
  ...a
}) => {
  const { toggle: c } = Re();
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      id: t,
      type: "button",
      className: `${E.toggle} ${E[e] || ""} ${n}`,
      onClick: c,
      ...a,
      children: o
    }
  );
}, Vt = ({
  children: e,
  className: t = "",
  ...o
}) => {
  const { show: n, align: a } = Re();
  return /* @__PURE__ */ r.jsx(
    "ul",
    {
      className: `${E.menu} ${n ? E.show : ""} ${a === "end" ? E.end : ""} ${t}`,
      ...o,
      children: e
    }
  );
}, Ut = ({
  href: e,
  onClick: t,
  children: o,
  className: n = "",
  ...a
}) => /* @__PURE__ */ r.jsx("li", { children: e ? /* @__PURE__ */ r.jsx("a", { href: e, className: `${E.item} ${n}`, ...a, children: o }) : /* @__PURE__ */ r.jsx(
  "button",
  {
    type: "button",
    onClick: t,
    className: `${E.item} ${n}`,
    ...a,
    children: o
  }
) }), Ht = () => /* @__PURE__ */ r.jsx("li", { className: E.divider, role: "separator" });
V.Toggle = Mt;
V.Menu = Vt;
V.Item = Ut;
V.Divider = Ht;
const Jt = "_alert_13bqy_1", Xt = "_heading_13bqy_17", Zt = "_message_13bqy_29", Qt = "_primary_13bqy_39", Kt = "_secondary_13bqy_51", eo = "_success_13bqy_63", to = "_danger_13bqy_75", oo = "_warning_13bqy_87", so = "_info_13bqy_99", ro = "_light_13bqy_111", no = "_dark_13bqy_123", ao = "_dismissible_13bqy_137", lo = "_closeBtn_13bqy_145", S = {
  alert: Jt,
  heading: Xt,
  message: Zt,
  primary: Qt,
  secondary: Kt,
  success: eo,
  danger: to,
  warning: oo,
  info: so,
  light: ro,
  dark: no,
  dismissible: ao,
  closeBtn: lo
}, gs = ({
  variant: e = "primary",
  dismissible: t = !1,
  onClose: o,
  heading: n,
  children: a,
  className: c = "",
  ...d
}) => {
  const [l, _] = L(!0);
  if (!l) return null;
  const u = () => {
    _(!1), o == null || o();
  };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `${S.alert} ${S[e]} ${t ? S.dismissible : ""} ${c}`,
      role: "alert",
      ...d,
      children: [
        n && /* @__PURE__ */ r.jsx("h4", { className: S.heading, children: n }),
        /* @__PURE__ */ r.jsx("div", { className: S.message, children: a }),
        t && /* @__PURE__ */ r.jsx(
          "button",
          {
            type: "button",
            className: S.closeBtn,
            "aria-label": "Close",
            onClick: u,
            children: /* @__PURE__ */ r.jsx("span", { "aria-hidden": "true", children: "×" })
          }
        )
      ]
    }
  );
}, co = "_spinner_158ug_1", _o = "_border_158ug_11", io = "_grow_158ug_29", uo = "_sm_158ug_47", mo = "_lg_158ug_59", po = "_primary_158ug_73", go = "_secondary_158ug_81", fo = "_success_158ug_89", xo = "_danger_158ug_97", bo = "_warning_158ug_105", vo = "_info_158ug_113", jo = "_light_158ug_121", yo = "_dark_158ug_129", A = {
  spinner: co,
  border: _o,
  "spinner-border": "_spinner-border_158ug_1",
  grow: io,
  "spinner-grow": "_spinner-grow_158ug_1",
  sm: uo,
  lg: mo,
  primary: po,
  secondary: go,
  success: fo,
  danger: xo,
  warning: bo,
  info: vo,
  light: jo,
  dark: yo,
  "visually-hidden": "_visually-hidden_158ug_185"
}, fs = ({
  animation: e = "border",
  variant: t = "primary",
  size: o,
  as: n = "div",
  role: a = "status",
  label: c,
  className: d = "",
  ...l
}) => {
  const _ = [
    A.spinner,
    e === "grow" ? A.grow : A.border,
    A[t],
    o === "sm" ? A.sm : "",
    o === "lg" ? A.lg : "",
    d
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsx(n, { className: _, role: a, ...l, children: c ? /* @__PURE__ */ r.jsx("span", { className: "visually-hidden", children: c }) : null });
}, ho = "_badge_ovldc_1", $o = "_sm_ovldc_31", No = "_lg_ovldc_43", wo = "_pill_ovldc_57", To = "_dot_ovldc_71", P = {
  badge: ho,
  sm: $o,
  lg: No,
  pill: wo,
  dot: To,
  "badge-primary": "_badge-primary_ovldc_89",
  "badge-secondary": "_badge-secondary_ovldc_99",
  "badge-success": "_badge-success_ovldc_109",
  "badge-danger": "_badge-danger_ovldc_119",
  "badge-warning": "_badge-warning_ovldc_129",
  "badge-info": "_badge-info_ovldc_139",
  "badge-light": "_badge-light_ovldc_149",
  "badge-dark": "_badge-dark_ovldc_159"
}, xs = ({
  children: e,
  variant: t = "primary",
  bg: o,
  pill: n = !1,
  size: a = "md",
  className: c = "",
  title: d,
  count: l,
  dot: _ = !1,
  ...u
}) => {
  const h = o ?? t, p = [
    P.badge,
    P[`badge-${h}`],
    n ? P.pill : "",
    a === "sm" ? P.sm : a === "lg" ? P.lg : "",
    _ ? P.dot : "",
    c
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsx(
    "span",
    {
      className: p,
      title: d,
      "aria-label": typeof l < "u" ? `${l}` : void 0,
      ...u,
      children: _ ? null : typeof l < "u" ? l : e
    }
  );
}, Eo = "_toastContainer_33tzd_1", Co = "_toast_33tzd_1", ko = "_success_33tzd_121", Ro = "_error_33tzd_129", Io = "_info_33tzd_137", Go = "_loading_33tzd_145", So = "_icon_33tzd_153", F = {
  toastContainer: Eo,
  "top-left": "_top-left_33tzd_17",
  "top-center": "_top-center_33tzd_29",
  "top-right": "_top-right_33tzd_43",
  "bottom-left": "_bottom-left_33tzd_55",
  "bottom-center": "_bottom-center_33tzd_67",
  "bottom-right": "_bottom-right_33tzd_81",
  toast: Co,
  success: ko,
  error: Ro,
  info: Io,
  loading: Go,
  icon: So
}, Ie = me(void 0);
let Ao = 0;
const bs = ({
  children: e,
  position: t = "top-right"
}) => {
  const [o, n] = L([]), a = (l, _ = "info", u = 3e3, h) => {
    const p = Ao++, $ = h || t;
    return n((I) => [...I, { id: p, message: l, type: _, position: $ }]), _ !== "loading" && setTimeout(() => c(p), u), p;
  }, c = (l) => {
    n((_) => _.filter((u) => u.id !== l));
  }, d = {
    "top-left": [],
    "top-center": [],
    "top-right": [],
    "bottom-left": [],
    "bottom-center": [],
    "bottom-right": []
  };
  return o.forEach((l) => d[l.position].push(l)), /* @__PURE__ */ r.jsxs(Ie.Provider, { value: { addToast: a, removeToast: c }, children: [
    e,
    Object.entries(d).map(
      ([l, _]) => _.length > 0 ? /* @__PURE__ */ r.jsx("div", { className: `${F.toastContainer} ${F[l]}`, children: _.map((u) => /* @__PURE__ */ r.jsxs("div", { className: `${F.toast} ${F[u.type]}`, children: [
        /* @__PURE__ */ r.jsx("span", { className: F.icon, children: Po(u.type) }),
        u.message
      ] }, u.id)) }, l) : null
    )
  ] });
}, vs = () => {
  const e = fe(Ie);
  if (!e) throw new Error("useToast must be used within ToastProvider");
  return e;
}, Po = (e) => {
  switch (e) {
    case "success":
      return "✔️";
    case "error":
      return "❌";
    case "info":
      return "ℹ️";
    case "loading":
      return "⏳";
    default:
      return null;
  }
}, Oo = "_responsive_seov6_3", Bo = "_table_seov6_127", zo = "_bordered_seov6_167", Fo = "_hover_seov6_189", Lo = "_striped_seov6_199", k = {
  responsive: Oo,
  "responsive-sm": "_responsive-sm_seov6_17",
  "responsive-md": "_responsive-md_seov6_39",
  "responsive-lg": "_responsive-lg_seov6_61",
  "responsive-xl": "_responsive-xl_seov6_83",
  "responsive-xxl": "_responsive-xxl_seov6_105",
  table: Bo,
  bordered: zo,
  hover: Fo,
  striped: Lo,
  "size-sm": "_size-sm_seov6_209",
  "size-md": "_size-md_seov6_221",
  "size-lg": "_size-lg_seov6_233",
  "variant-light": "_variant-light_seov6_247",
  "variant-dark": "_variant-dark_seov6_259"
}, js = ({
  bordered: e = !1,
  hover: t = !1,
  striped: o = !1,
  size: n = "md",
  variant: a = "light",
  responsive: c = !1,
  className: d,
  children: l,
  ..._
}) => {
  const u = C(
    k.table,
    {
      [k.bordered]: e,
      [k.hover]: t,
      [k.striped]: o,
      [k[`size-${n}`]]: n,
      [k[`variant-${a}`]]: a
    },
    d
  ), h = ({ children: p }) => c ? typeof c == "boolean" ? /* @__PURE__ */ r.jsx("div", { className: k.responsive, children: p }) : /* @__PURE__ */ r.jsx("div", { className: k[`responsive-${c}`], children: p }) : /* @__PURE__ */ r.jsx(r.Fragment, { children: p });
  return /* @__PURE__ */ r.jsx(h, { children: /* @__PURE__ */ r.jsx("table", { role: "table", className: u, ..._, children: l }) });
}, Do = "_listGroup_10jzp_1", qo = "_flush_10jzp_21", Yo = "_listGroupItem_10jzp_29", Wo = "_active_10jzp_49", Mo = "_disabled_10jzp_59", Vo = "_action_10jzp_69", Uo = "_empty_10jzp_85", R = {
  listGroup: Do,
  flush: qo,
  listGroupItem: Yo,
  active: Wo,
  disabled: Mo,
  action: Vo,
  empty: Uo
}, Ge = ({
  children: e,
  className: t = "",
  flush: o = !1,
  emptyMessage: n = "No results found.",
  ...a
}) => {
  const c = y.Children.count(e) > 0 && y.Children.toArray(e).some(He);
  return /* @__PURE__ */ r.jsx(
    "ul",
    {
      className: `${R.listGroup} ${o ? R.flush : ""} ${t}`,
      ...a,
      children: c ? e : /* @__PURE__ */ r.jsx("li", { className: `${R.listGroupItem} ${R.empty}`, children: n })
    }
  );
};
Ge.Item = ({
  children: e,
  className: t = "",
  active: o = !1,
  disabled: n = !1,
  action: a = !1,
  as: c = "li",
  href: d,
  ...l
}) => {
  const _ = [
    R.listGroupItem,
    o ? R.active : "",
    n ? R.disabled : "",
    a ? R.action : "",
    t
  ].filter(Boolean).join(" ");
  return c === "Link" ? /* @__PURE__ */ r.jsx("a", { href: d, className: _, ...l, children: e }) : c === "button" ? /* @__PURE__ */ r.jsx("button", { className: _, disabled: n, ...l, children: e }) : /* @__PURE__ */ r.jsx("li", { className: _, ...l, children: e });
};
Ge.Item.displayName = "ListGroup.Item";
const Ho = "_container_d1n5j_3", Jo = "_fluid_d1n5j_21", Xo = "_row_d1n5j_35", Zo = "_col_d1n5j_51", w = {
  container: Ho,
  fluid: Jo,
  row: Xo,
  col: Zo,
  "col-xs-1": "_col-xs-1_d1n5j_65",
  "col-xs-2": "_col-xs-2_d1n5j_75",
  "col-xs-3": "_col-xs-3_d1n5j_85",
  "col-xs-4": "_col-xs-4_d1n5j_95",
  "col-xs-5": "_col-xs-5_d1n5j_105",
  "col-xs-6": "_col-xs-6_d1n5j_115",
  "col-xs-7": "_col-xs-7_d1n5j_125",
  "col-xs-8": "_col-xs-8_d1n5j_135",
  "col-xs-9": "_col-xs-9_d1n5j_145",
  "col-xs-10": "_col-xs-10_d1n5j_155",
  "col-xs-11": "_col-xs-11_d1n5j_165",
  "col-xs-12": "_col-xs-12_d1n5j_175",
  "col-sm-1": "_col-sm-1_d1n5j_189",
  "col-sm-2": "_col-sm-2_d1n5j_199",
  "col-sm-3": "_col-sm-3_d1n5j_209",
  "col-sm-4": "_col-sm-4_d1n5j_219",
  "col-sm-5": "_col-sm-5_d1n5j_229",
  "col-sm-6": "_col-sm-6_d1n5j_239",
  "col-sm-7": "_col-sm-7_d1n5j_249",
  "col-sm-8": "_col-sm-8_d1n5j_259",
  "col-sm-9": "_col-sm-9_d1n5j_269",
  "col-sm-10": "_col-sm-10_d1n5j_279",
  "col-sm-11": "_col-sm-11_d1n5j_289",
  "col-sm-12": "_col-sm-12_d1n5j_299",
  "col-md-1": "_col-md-1_d1n5j_313",
  "col-md-2": "_col-md-2_d1n5j_323",
  "col-md-3": "_col-md-3_d1n5j_333",
  "col-md-4": "_col-md-4_d1n5j_343",
  "col-md-5": "_col-md-5_d1n5j_353",
  "col-md-6": "_col-md-6_d1n5j_363",
  "col-md-7": "_col-md-7_d1n5j_373",
  "col-md-8": "_col-md-8_d1n5j_383",
  "col-md-9": "_col-md-9_d1n5j_393",
  "col-md-10": "_col-md-10_d1n5j_403",
  "col-md-11": "_col-md-11_d1n5j_413",
  "col-md-12": "_col-md-12_d1n5j_423",
  "col-lg-1": "_col-lg-1_d1n5j_437",
  "col-lg-2": "_col-lg-2_d1n5j_447",
  "col-lg-3": "_col-lg-3_d1n5j_457",
  "col-lg-4": "_col-lg-4_d1n5j_467",
  "col-lg-5": "_col-lg-5_d1n5j_477",
  "col-lg-6": "_col-lg-6_d1n5j_487",
  "col-lg-7": "_col-lg-7_d1n5j_497",
  "col-lg-8": "_col-lg-8_d1n5j_507",
  "col-lg-9": "_col-lg-9_d1n5j_517",
  "col-lg-10": "_col-lg-10_d1n5j_527",
  "col-lg-11": "_col-lg-11_d1n5j_537",
  "col-lg-12": "_col-lg-12_d1n5j_547",
  "col-xl-1": "_col-xl-1_d1n5j_561",
  "col-xl-2": "_col-xl-2_d1n5j_571",
  "col-xl-3": "_col-xl-3_d1n5j_581",
  "col-xl-4": "_col-xl-4_d1n5j_591",
  "col-xl-5": "_col-xl-5_d1n5j_601",
  "col-xl-6": "_col-xl-6_d1n5j_611",
  "col-xl-7": "_col-xl-7_d1n5j_621",
  "col-xl-8": "_col-xl-8_d1n5j_631",
  "col-xl-9": "_col-xl-9_d1n5j_641",
  "col-xl-10": "_col-xl-10_d1n5j_651",
  "col-xl-11": "_col-xl-11_d1n5j_661",
  "col-xl-12": "_col-xl-12_d1n5j_671",
  "gap-0": "_gap-0_d1n5j_683",
  "gap-1": "_gap-1_d1n5j_691",
  "gap-2": "_gap-2_d1n5j_699",
  "gap-3": "_gap-3_d1n5j_707",
  "gap-4": "_gap-4_d1n5j_715",
  "gap-5": "_gap-5_d1n5j_723"
}, Qo = ({
  children: e,
  fluid: t = !1,
  className: o = "",
  ...n
}) => /* @__PURE__ */ r.jsx("div", { className: `${t ? w.fluid : w.container} ${o}`, ...n, children: e });
Qo.displayName = "Grid.Container";
const Se = ({ children: e, className: t = "", gap: o = 1, ...n }) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: `${w.row} ${t}`,
    style: { gap: `${o}rem` },
    ...n,
    children: e
  }
);
Se.displayName = "Grid.Row";
const K = ({ children: e, className: t = "", xs: o, sm: n, md: a, lg: c, xl: d, ...l }) => {
  const _ = [
    o ? `${w[`col-xs-${o}`]}` : "",
    n ? `${w[`col-sm-${n}`]}` : "",
    a ? `${w[`col-md-${a}`]}` : "",
    c ? `${w[`col-lg-${c}`]}` : "",
    d ? `${w[`col-xl-${d}`]}` : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsx("div", { className: `${w.col} ${_} ${t}`, ...l, children: e });
};
K.displayName = "Grid.Col";
const Ko = "_carousel_a5ffy_1", es = "_carouselInner_a5ffy_13", ts = "_fade_a5ffy_25", os = "_carouselItem_a5ffy_35", ss = "_active_a5ffy_55", rs = "_carouselItemContent_a5ffy_65", ns = "_control_a5ffy_75", as = "_prev_a5ffy_113", ls = "_next_a5ffy_121", cs = "_indicators_a5ffy_131", _s = "_indicator_a5ffy_131", is = "_carouselCaption_a5ffy_183", x = {
  carousel: Ko,
  carouselInner: es,
  fade: ts,
  carouselItem: os,
  active: ss,
  carouselItemContent: rs,
  control: ns,
  prev: as,
  next: ls,
  indicators: cs,
  indicator: _s,
  carouselCaption: is
}, q = ({ children: e, interval: t = 5e3, fade: o = !1, className: n = "", ...a }) => {
  const [c, d] = L(0), l = y.Children.count(e), _ = pe(null), u = ce(() => {
    d((p) => (p + 1) % l);
  }, [l]), h = ce(() => {
    d((p) => (p - 1 + l) % l);
  }, [l]);
  return ge(() => {
    if (t > 0)
      return _.current = setInterval(u, t), () => {
        _.current && clearInterval(_.current);
      };
  }, [t, u]), /* @__PURE__ */ r.jsxs("div", { className: `${x.carousel} ${n}`, ...a, children: [
    /* @__PURE__ */ r.jsx("div", { className: `${x.carouselInner} ${o ? x.fade : ""}`, children: y.Children.map(e, (p, $) => /* @__PURE__ */ r.jsx(
      "div",
      {
        className: `${x.carouselItem} ${$ === c ? x.active : ""}`,
        children: p
      }
    )) }),
    /* @__PURE__ */ r.jsx("button", { className: `${x.control} ${x.prev}`, onClick: h, "aria-label": "Previous Slide", children: "❮" }),
    /* @__PURE__ */ r.jsx("button", { className: `${x.control} ${x.next}`, onClick: u, "aria-label": "Next Slide", children: "❯" }),
    /* @__PURE__ */ r.jsx("div", { className: x.indicators, children: y.Children.map(e, (p, $) => /* @__PURE__ */ r.jsx(
      "button",
      {
        className: `${x.indicator} ${$ === c ? x.active : ""}`,
        onClick: () => d($),
        "aria-label": `Go to slide ${$ + 1}`
      }
    )) })
  ] });
};
q.displayName = "Carousel";
q.Item = ({ children: e, className: t = "", ...o }) => /* @__PURE__ */ r.jsx("div", { className: `${x.carouselItemContent} ${t}`, ...o, children: e });
q.Item.displayName = "Carousel.Item";
q.Caption = ({ children: e, className: t = "", ...o }) => /* @__PURE__ */ r.jsx("div", { className: `${x.carouselCaption} ${t}`, ...o, children: e });
q.Caption.displayName = "Carousel.Caption";
function ys({
  search: e,
  setSearch: t,
  sortBy: o,
  setSortBy: n
}) {
  return /* @__PURE__ */ r.jsxs(Se, { className: "mb-4 justify-content-center", gap: 0, children: [
    /* @__PURE__ */ r.jsx(K, { md: 4, className: "mb-2", children: /* @__PURE__ */ r.jsxs(N, { children: [
      /* @__PURE__ */ r.jsx(N.Text, { children: "🔍" }),
      /* @__PURE__ */ r.jsx(
        v.Control,
        {
          type: "text",
          placeholder: "Search by name...",
          value: e,
          onChange: (a) => t(a.target.value),
          id: "search-featured"
        }
      )
    ] }) }),
    /* @__PURE__ */ r.jsx(K, { md: 2, className: "mb-2", children: /* @__PURE__ */ r.jsxs(v.Select, { value: o, onChange: (a) => n(a.target.value), "aria-label": "Sort products", id: "sort-featured", className: "py-2 text-secondary", children: [
      /* @__PURE__ */ r.jsx("option", { value: "", children: "Sort by..." }),
      /* @__PURE__ */ r.jsx("option", { value: "name", children: "Name (A-Z)" }),
      /* @__PURE__ */ r.jsx("option", { value: "price", children: "Price (Low-High)" })
    ] }) })
  ] });
}
export {
  gs as Alert,
  xs as Badge,
  ms as Button,
  ps as Card,
  q as Carousel,
  K as Col,
  Qo as Container,
  V as Dropdown,
  v as Form,
  N as InputGroup,
  Ge as ListGroup,
  D as NavBar,
  Se as Row,
  ys as SearchSortBar,
  fs as Spinner,
  js as Table,
  bs as ToastProvider,
  vs as useToast
};
//# sourceMappingURL=index.mjs.map

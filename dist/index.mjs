import x, { forwardRef as rt, useEffect as le, useState as Y, createContext as Ne, useRef as we, useContext as nt, isValidElement as ot, useCallback as xe } from "react";
import st from "react-dom";
var U = { exports: {} }, D = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ve;
function at() {
  if (ve) return D;
  ve = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(o, a, l) {
    var _ = null;
    if (l !== void 0 && (_ = "" + l), a.key !== void 0 && (_ = "" + a.key), "key" in a) {
      l = {};
      for (var c in a)
        c !== "key" && (l[c] = a[c]);
    } else l = a;
    return a = l.ref, {
      $$typeof: e,
      type: o,
      key: _,
      ref: a !== void 0 ? a : null,
      props: l
    };
  }
  return D.Fragment = t, D.jsx = r, D.jsxs = r, D;
}
var M = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var be;
function lt() {
  return be || (be = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(s) {
      if (s == null) return null;
      if (typeof s == "function")
        return s.$$typeof === Ke ? null : s.displayName || s.name || null;
      if (typeof s == "string") return s;
      switch (s) {
        case te:
          return "Fragment";
        case We:
          return "Profiler";
        case Ye:
          return "StrictMode";
        case Je:
          return "Suspense";
        case Xe:
          return "SuspenseList";
        case Qe:
          return "Activity";
      }
      if (typeof s == "object")
        switch (typeof s.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), s.$$typeof) {
          case qe:
            return "Portal";
          case Ve:
            return s.displayName || "Context";
          case He:
            return (s._context.displayName || "Context") + ".Consumer";
          case Ue:
            var d = s.render;
            return s = s.displayName, s || (s = d.displayName || d.name || "", s = s !== "" ? "ForwardRef(" + s + ")" : "ForwardRef"), s;
          case Ze:
            return d = s.displayName || null, d !== null ? d : e(s.type) || "Memo";
          case re:
            d = s._payload, s = s._init;
            try {
              return e(s(d));
            } catch {
            }
        }
      return null;
    }
    function t(s) {
      return "" + s;
    }
    function r(s) {
      try {
        t(s);
        var d = !1;
      } catch {
        d = !0;
      }
      if (d) {
        d = console;
        var m = d.error, f = typeof Symbol == "function" && Symbol.toStringTag && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return m.call(
          d,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          f
        ), t(s);
      }
    }
    function o(s) {
      if (s === te) return "<>";
      if (typeof s == "object" && s !== null && s.$$typeof === re)
        return "<...>";
      try {
        var d = e(s);
        return d ? "<" + d + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var s = ne.A;
      return s === null ? null : s.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function _(s) {
      if (de.call(s, "key")) {
        var d = Object.getOwnPropertyDescriptor(s, "key").get;
        if (d && d.isReactWarning) return !1;
      }
      return s.key !== void 0;
    }
    function c(s, d) {
      function m() {
        ue || (ue = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          d
        ));
      }
      m.isReactWarning = !0, Object.defineProperty(s, "key", {
        get: m,
        configurable: !0
      });
    }
    function i() {
      var s = e(this.type);
      return me[s] || (me[s] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), s = this.props.ref, s !== void 0 ? s : null;
    }
    function u(s, d, m, f, V, se) {
      var g = m.ref;
      return s = {
        $$typeof: _e,
        type: s,
        key: d,
        props: m,
        _owner: f
      }, (g !== void 0 ? g : null) !== null ? Object.defineProperty(s, "ref", {
        enumerable: !1,
        get: i
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
        value: V
      }), Object.defineProperty(s, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: se
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    }
    function $(s, d, m, f, V, se) {
      var g = d.children;
      if (g !== void 0)
        if (f)
          if (et(g)) {
            for (f = 0; f < g.length; f++)
              p(g[f]);
            Object.freeze && Object.freeze(g);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(g);
      if (de.call(d, "key")) {
        g = e(s);
        var R = Object.keys(d).filter(function(tt) {
          return tt !== "key";
        });
        f = 0 < R.length ? "{key: someKey, " + R.join(": ..., ") + ": ...}" : "{key: someKey}", ge[g + f] || (R = 0 < R.length ? "{" + R.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          f,
          g,
          R,
          g
        ), ge[g + f] = !0);
      }
      if (g = null, m !== void 0 && (r(m), g = "" + m), _(d) && (r(d.key), g = "" + d.key), "key" in d) {
        m = {};
        for (var ae in d)
          ae !== "key" && (m[ae] = d[ae]);
      } else m = d;
      return g && c(
        m,
        typeof s == "function" ? s.displayName || s.name || "Unknown" : s
      ), u(
        s,
        g,
        m,
        a(),
        V,
        se
      );
    }
    function p(s) {
      N(s) ? s._store && (s._store.validated = 1) : typeof s == "object" && s !== null && s.$$typeof === re && (s._payload.status === "fulfilled" ? N(s._payload.value) && s._payload.value._store && (s._payload.value._store.validated = 1) : s._store && (s._store.validated = 1));
    }
    function N(s) {
      return typeof s == "object" && s !== null && s.$$typeof === _e;
    }
    var O = x, _e = Symbol.for("react.transitional.element"), qe = Symbol.for("react.portal"), te = Symbol.for("react.fragment"), Ye = Symbol.for("react.strict_mode"), We = Symbol.for("react.profiler"), He = Symbol.for("react.consumer"), Ve = Symbol.for("react.context"), Ue = Symbol.for("react.forward_ref"), Je = Symbol.for("react.suspense"), Xe = Symbol.for("react.suspense_list"), Ze = Symbol.for("react.memo"), re = Symbol.for("react.lazy"), Qe = Symbol.for("react.activity"), Ke = Symbol.for("react.client.reference"), ne = O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, de = Object.prototype.hasOwnProperty, et = Array.isArray, oe = console.createTask ? console.createTask : function() {
      return null;
    };
    O = {
      react_stack_bottom_frame: function(s) {
        return s();
      }
    };
    var ue, me = {}, pe = O.react_stack_bottom_frame.bind(
      O,
      l
    )(), fe = oe(o(l)), ge = {};
    M.Fragment = te, M.jsx = function(s, d, m) {
      var f = 1e4 > ne.recentlyCreatedOwnerStacks++;
      return $(
        s,
        d,
        m,
        !1,
        f ? Error("react-stack-top-frame") : pe,
        f ? oe(o(s)) : fe
      );
    }, M.jsxs = function(s, d, m) {
      var f = 1e4 > ne.recentlyCreatedOwnerStacks++;
      return $(
        s,
        d,
        m,
        !0,
        f ? Error("react-stack-top-frame") : pe,
        f ? oe(o(s)) : fe
      );
    };
  })()), M;
}
var je;
function ct() {
  return je || (je = 1, process.env.NODE_ENV === "production" ? U.exports = at() : U.exports = lt()), U.exports;
}
var n = ct();
const it = "_button_1vcgi_1", _t = "_primary_1vcgi_9", dt = "_secondary_1vcgi_18", ut = "_success_1vcgi_27", mt = "_danger_1vcgi_36", pt = "_sm_1vcgi_45", ft = "_md_1vcgi_50", gt = "_lg_1vcgi_55", xt = "_disabled_1vcgi_60", J = {
  button: it,
  primary: _t,
  secondary: dt,
  success: ut,
  danger: mt,
  sm: pt,
  md: ft,
  lg: gt,
  disabled: xt
}, vt = ({
  children: e,
  variant: t = "primary",
  size: r = "md",
  disabled: o = !1,
  mr: a = "",
  ml: l = "",
  mt: _ = "",
  mb: c = "",
  ...i
}) => /* @__PURE__ */ n.jsx(
  "button",
  {
    className: `${J.button} ${J[t]} ${J[r]} ${o ? J.disabled : ""}`,
    style: {
      marginRight: a,
      marginLeft: l,
      marginTop: _,
      marginBottom: c
    },
    disabled: o,
    ...i,
    children: e
  }
), bt = ({
  src: e,
  alt: t = "",
  width: r,
  height: o,
  fill: a,
  style: l,
  ..._
}) => {
  const c = a ? {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover"
    // ✅ cast to valid enum type
  } : {};
  return /* @__PURE__ */ n.jsx(
    "img",
    {
      src: typeof e == "string" ? e : e.src,
      alt: t,
      width: r,
      height: o,
      style: { ...l, ...c },
      ..._
    }
  );
};
function ke(e) {
  var t, r, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (r = ke(e[t])) && (o && (o += " "), o += r);
  } else for (r in e) e[r] && (o && (o += " "), o += r);
  return o;
}
function E() {
  for (var e, t, r = 0, o = "", a = arguments.length; r < a; r++) (e = arguments[r]) && (t = ke(e)) && (o && (o += " "), o += t);
  return o;
}
const jt = "_card_zxwhi_1", yt = "_cardHeader_zxwhi_13", ht = "_cardBody_zxwhi_20", $t = "_cardFooter_zxwhi_25", Nt = "_cardTitle_zxwhi_33", wt = "_cardText_zxwhi_45", kt = "_cardImageWrapper_zxwhi_51", Tt = "_cardImage_zxwhi_51", h = {
  card: jt,
  cardHeader: yt,
  cardBody: ht,
  cardFooter: $t,
  cardTitle: Nt,
  cardText: wt,
  cardImageWrapper: kt,
  cardImage: Tt
}, Te = rt(
  ({ children: e, className: t = "", ...r }, o) => /* @__PURE__ */ n.jsx("div", { ref: o, className: E(h.card, t), ...r, children: e })
);
Te.displayName = "Card";
const Ce = ({ children: e, className: t = "", ...r }) => /* @__PURE__ */ n.jsx("div", { className: E(h.cardHeader, t), ...r, children: e });
Ce.displayName = "Card.Header";
const Ee = ({ children: e, className: t = "", ...r }) => /* @__PURE__ */ n.jsx("div", { className: E(h.cardBody, t), ...r, children: e });
Ee.displayName = "Card.Body";
const Se = ({ children: e, className: t = "", ...r }) => /* @__PURE__ */ n.jsx("div", { className: E(h.cardFooter, t), ...r, children: e });
Se.displayName = "Card.Footer";
const Ie = ({
  children: e,
  className: t = "",
  as: r = "h3",
  ...o
}) => /* @__PURE__ */ n.jsx(r, { className: E(h.cardTitle, t), ...o, children: e });
Ie.displayName = "Card.Title";
const Pe = ({ children: e, className: t = "", ...r }) => /* @__PURE__ */ n.jsx("p", { className: E(h.cardText, t), ...r, children: e });
Pe.displayName = "Card.Text";
const Oe = ({
  variant: e,
  className: t = "",
  alt: r,
  fill: o,
  width: a,
  height: l,
  style: _,
  ...c
}) => {
  let i = "";
  switch (e) {
    case "top":
      i = h.top;
      break;
    case "bottom":
      i = h.bottom;
      break;
    case "rounded":
      i = h.rounded;
      break;
    case "circle":
      i = h.circle;
      break;
  }
  const u = !!o;
  return /* @__PURE__ */ n.jsx(
    "div",
    {
      className: E(h.cardImageWrapper, i, t),
      style: {
        position: "relative",
        width: "100%",
        height: l ? `${l}px` : "250px",
        overflow: "hidden",
        borderRadius: "inherit"
      },
      children: /* @__PURE__ */ n.jsx(
        bt,
        {
          alt: r,
          fill: u,
          width: u ? void 0 : a,
          height: u ? void 0 : l,
          className: E(h.cardImage),
          style: { objectFit: "cover", ..._ },
          ...c
        }
      )
    }
  );
};
Oe.displayName = "Card.Img";
const P = Object.assign(Te, {
  Header: Ce,
  Body: Ee,
  Footer: Se,
  Title: Ie,
  Text: Pe,
  Img: Oe
}), Ct = "_modalBackdrop_8wtvg_1", Et = "_modalContent_8wtvg_27", St = "_modalHeader_8wtvg_53", It = "_closeBtn_8wtvg_69", Pt = "_modalBody_8wtvg_85", Ot = "_modalFooter_8wtvg_95", A = {
  modalBackdrop: Ct,
  modalContent: Et,
  modalHeader: St,
  closeBtn: It,
  modalBody: Pt,
  modalFooter: Ot
}, Kn = ({ show: e, onClose: t, title: r, children: o, footer: a }) => (le(() => {
  const l = (_) => {
    _.key === "Escape" && t();
  };
  return document.addEventListener("keydown", l), () => document.removeEventListener("keydown", l);
}, [t]), e ? st.createPortal(
  /* @__PURE__ */ n.jsx("div", { className: A.modalBackdrop, onClick: t, children: /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: A.modalContent,
      onClick: (l) => l.stopPropagation(),
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: A.modalHeader, children: [
          /* @__PURE__ */ n.jsx("h5", { children: r }),
          /* @__PURE__ */ n.jsx("button", { className: A.closeBtn, onClick: t, children: "×" })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: A.modalBody, children: o }),
        a && /* @__PURE__ */ n.jsx("div", { className: A.modalFooter, children: a })
      ]
    }
  ) }),
  document.body
) : null), ce = ({
  href: e,
  children: t,
  ...r
}) => /* @__PURE__ */ n.jsx("a", { href: e, ...r, children: t }), Rt = "_navbar_om48y_3", At = "_brand_om48y_23", Bt = "_toggle_om48y_43", Gt = "_bar_om48y_65", zt = "_collapse_om48y_79", Lt = "_show_om48y_95", Ft = "_nav_om48y_3", Dt = "_navLink_om48y_123", Mt = "_active_om48y_163", b = {
  navbar: Rt,
  brand: At,
  toggle: Bt,
  bar: Gt,
  collapse: zt,
  show: Lt,
  nav: Ft,
  navLink: Dt,
  active: Mt,
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
function ye(e, t) {
  return x.isValidElement(e) && typeof e.type == "function" && e.type.displayName === t;
}
const W = ({
  bg: e = "light",
  variant: t = "light",
  expand: r = "lg",
  children: o,
  className: a = ""
}) => {
  const [l, _] = Y(!1);
  return /* @__PURE__ */ n.jsx(
    "nav",
    {
      className: `${b.navbar} ${b[`bg-${e}`]} ${b[`navbar-${t}`]} ${b[`expand-${r}`]} ${a}`,
      children: x.Children.map(o, (c) => x.isValidElement(c) ? ye(c, "NavBar.Toggle") ? x.cloneElement(c, {
        onClick: () => _((i) => !i)
      }) : ye(c, "NavBar.Collapse") ? x.cloneElement(c, {
        show: l
      }) : c : c)
    }
  );
};
W.displayName = "NavBar";
const Re = ({ href: e = "/", children: t }) => /* @__PURE__ */ n.jsx(
  ce,
  {
    href: e,
    className: `${b.brand} d-flex align-items-center text-decoration-none`,
    children: t
  }
);
Re.displayName = "NavBar.Brand";
const Ae = ({ ariaControls: e, onClick: t }) => /* @__PURE__ */ n.jsxs(
  "button",
  {
    type: "button",
    className: b.toggle,
    "aria-controls": e,
    "aria-label": "Toggle navigation",
    onClick: t,
    children: [
      /* @__PURE__ */ n.jsx("span", { className: b.bar }),
      /* @__PURE__ */ n.jsx("span", { className: b.bar }),
      /* @__PURE__ */ n.jsx("span", { className: b.bar })
    ]
  }
);
Ae.displayName = "NavBar.Toggle";
const Be = ({ id: e, children: t, show: r = !1 }) => /* @__PURE__ */ n.jsx("div", { id: e, className: `${b.collapse} ${r ? b.show : ""}`, children: t });
Be.displayName = "NavBar.Collapse";
const ie = ({ children: e, className: t = "" }) => /* @__PURE__ */ n.jsx("ul", { className: `${b.nav} ${t}`, children: e }), qt = ({ href: e, children: t, active: r = !1 }) => /* @__PURE__ */ n.jsx("li", { children: /* @__PURE__ */ n.jsx(ce, { href: e, className: `${b.navLink} ${r ? b.active : ""}`, children: t }) });
ie.Link = qt;
ie.displayName = "NavBar.Nav";
W.Brand = Re;
W.Toggle = Ae;
W.Collapse = Be;
W.Nav = ie;
const Yt = "_form_ujlhb_1", Wt = "_formGroup_ujlhb_13", Ht = "_label_ujlhb_25", Vt = "_input_ujlhb_35", Ut = "_textarea_ujlhb_37", Jt = "_select_ujlhb_39", T = {
  form: Yt,
  formGroup: Wt,
  label: Ht,
  input: Vt,
  textarea: Ut,
  select: Jt
}, j = ({ children: e, className: t = "", ...r }) => /* @__PURE__ */ n.jsx("form", { className: `${T.form} ${t}`, ...r, children: e });
j.Group = ({ children: e, className: t = "", ...r }) => /* @__PURE__ */ n.jsx("div", { className: `${T.formGroup} ${t}`, ...r, children: e });
j.Group.displayName = "Form.Group";
j.Label = ({ children: e, htmlFor: t, className: r = "", ...o }) => /* @__PURE__ */ n.jsx("label", { htmlFor: t, className: `${T.label} ${r}`, ...o, children: e });
j.Label.displayName = "Form.Label";
j.Input = ({ className: e = "", ...t }) => /* @__PURE__ */ n.jsx("input", { className: `${T.input} ${e}`, ...t });
j.Input.displayName = "Form.Input";
j.TextArea = ({ className: e = "", ...t }) => /* @__PURE__ */ n.jsx("textarea", { className: `${T.textarea} ${e}`, ...t });
j.TextArea.displayName = "Form.TextArea";
j.Select = ({ className: e = "", ...t }) => /* @__PURE__ */ n.jsx("select", { className: `${T.select} ${e}`, ...t });
j.Select.displayName = "Form.Select";
j.Control = ({ as: e = "input", className: t = "", ...r }) => {
  switch (e) {
    case "textarea":
      return /* @__PURE__ */ n.jsx("textarea", { className: `${T.textarea} ${t}`, ...r });
    case "select":
      return /* @__PURE__ */ n.jsx("select", { className: `${T.select} ${t}`, ...r });
    case "input":
    default:
      return /* @__PURE__ */ n.jsx("input", { className: `${T.input} ${t}`, ...r });
  }
};
j.Control.displayName = "Form.Control";
const Xt = "_inputGroup_lxf65_1", Zt = "_inputGroupText_lxf65_71", Qt = "_inputGroupPrepend_lxf65_105", Kt = "_inputGroupAppend_lxf65_107", er = "_inputGroupButton_lxf65_117", L = {
  inputGroup: Xt,
  "dropdown-toggle": "_dropdown-toggle_lxf65_15",
  "dropdown-menu": "_dropdown-menu_lxf65_15",
  inputGroupText: Zt,
  inputGroupPrepend: Qt,
  inputGroupAppend: Kt,
  inputGroupButton: er,
  "inputGroup-sm": "_inputGroup-sm_lxf65_127",
  "inputGroup-lg": "_inputGroup-lg_lxf65_143"
}, w = ({ children: e, className: t = "", size: r = "md", ...o }) => {
  const a = [
    L.inputGroup,
    L[`inputGroup-${r}`] || "",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx("div", { className: a, ...o, children: e });
};
w.Text = ({ children: e, className: t = "", ...r }) => /* @__PURE__ */ n.jsx("span", { className: `${L.inputGroupText} ${t}`, ...r, children: e });
w.Text.displayName = "InputGroup.Text";
w.Prepend = ({ children: e, className: t = "", ...r }) => /* @__PURE__ */ n.jsx("div", { className: `${L.inputGroupPrepend} ${t}`, ...r, children: e });
w.Prepend.displayName = "InputGroup.Prepend";
w.Append = ({ children: e, className: t = "", ...r }) => /* @__PURE__ */ n.jsx("div", { className: `${L.inputGroupAppend} ${t}`, ...r, children: e });
w.Append.displayName = "InputGroup.Append";
w.Button = ({ children: e, className: t = "", ...r }) => /* @__PURE__ */ n.jsx("div", { className: `${L.inputGroupButton} ${t}`, ...r, children: e });
w.Button.displayName = "InputGroup.Button";
const tr = "_dropdown_1b4le_3", rr = "_toggle_1b4le_15", nr = "_menu_1b4le_113", or = "_show_1b4le_151", sr = "_fadeIn_1b4le_1", ar = "_end_1b4le_163", lr = "_item_1b4le_175", cr = "_divider_1b4le_235", C = {
  dropdown: tr,
  toggle: rr,
  "outline-light": "_outline-light_1b4le_87",
  menu: nr,
  show: or,
  fadeIn: sr,
  end: ar,
  item: lr,
  divider: cr
}, Ge = Ne(void 0), ze = () => {
  const e = nt(Ge);
  if (!e)
    throw new Error("Dropdown.Toggle, Dropdown.Menu, and Dropdown.Item must be used within a <Dropdown>");
  return e;
}, Q = ({ align: e = "start", children: t, className: r = "" }) => {
  const [o, a] = Y(!1), l = we(null), _ = () => a((i) => !i), c = () => a(!1);
  return le(() => {
    const i = (u) => {
      l.current && !l.current.contains(u.target) && c();
    };
    return document.addEventListener("mousedown", i), () => document.removeEventListener("mousedown", i);
  }, []), /* @__PURE__ */ n.jsx(Ge.Provider, { value: { show: o, toggle: _, align: e }, children: /* @__PURE__ */ n.jsx("div", { className: `${C.dropdown} ${r}`, ref: l, children: t }) });
}, ir = ({
  variant: e = "primary",
  id: t,
  children: r,
  className: o = "",
  ...a
}) => {
  const { toggle: l } = ze();
  return /* @__PURE__ */ n.jsx(
    "button",
    {
      id: t,
      type: "button",
      className: `${C.toggle} ${C[e] || ""} ${o}`,
      onClick: l,
      ...a,
      children: r
    }
  );
}, _r = ({
  children: e,
  className: t = "",
  ...r
}) => {
  const { show: o, align: a } = ze();
  return /* @__PURE__ */ n.jsx(
    "ul",
    {
      className: `${C.menu} ${o ? C.show : ""} ${a === "end" ? C.end : ""} ${t}`,
      ...r,
      children: e
    }
  );
}, dr = ({
  href: e,
  onClick: t,
  children: r,
  className: o = "",
  ...a
}) => /* @__PURE__ */ n.jsx("li", { children: e ? /* @__PURE__ */ n.jsx("a", { href: e, className: `${C.item} ${o}`, ...a, children: r }) : /* @__PURE__ */ n.jsx(
  "button",
  {
    type: "button",
    onClick: t,
    className: `${C.item} ${o}`,
    ...a,
    children: r
  }
) }), ur = () => /* @__PURE__ */ n.jsx("li", { className: C.divider, role: "separator" });
Q.Toggle = ir;
Q.Menu = _r;
Q.Item = dr;
Q.Divider = ur;
const mr = "_alert_13bqy_1", pr = "_heading_13bqy_17", fr = "_message_13bqy_29", gr = "_primary_13bqy_39", xr = "_secondary_13bqy_51", vr = "_success_13bqy_63", br = "_danger_13bqy_75", jr = "_warning_13bqy_87", yr = "_info_13bqy_99", hr = "_light_13bqy_111", $r = "_dark_13bqy_123", Nr = "_dismissible_13bqy_137", wr = "_closeBtn_13bqy_145", B = {
  alert: mr,
  heading: pr,
  message: fr,
  primary: gr,
  secondary: xr,
  success: vr,
  danger: br,
  warning: jr,
  info: yr,
  light: hr,
  dark: $r,
  dismissible: Nr,
  closeBtn: wr
}, eo = ({
  variant: e = "primary",
  dismissible: t = !1,
  onClose: r,
  heading: o,
  children: a,
  className: l = "",
  ..._
}) => {
  const [c, i] = Y(!0);
  if (!c) return null;
  const u = () => {
    i(!1), r == null || r();
  };
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `${B.alert} ${B[e]} ${t ? B.dismissible : ""} ${l}`,
      role: "alert",
      ..._,
      children: [
        o && /* @__PURE__ */ n.jsx("h4", { className: B.heading, children: o }),
        /* @__PURE__ */ n.jsx("div", { className: B.message, children: a }),
        t && /* @__PURE__ */ n.jsx(
          "button",
          {
            type: "button",
            className: B.closeBtn,
            "aria-label": "Close",
            onClick: u,
            children: /* @__PURE__ */ n.jsx("span", { "aria-hidden": "true", children: "×" })
          }
        )
      ]
    }
  );
}, kr = "_spinner_158ug_1", Tr = "_border_158ug_11", Cr = "_grow_158ug_29", Er = "_sm_158ug_47", Sr = "_lg_158ug_59", Ir = "_primary_158ug_73", Pr = "_secondary_158ug_81", Or = "_success_158ug_89", Rr = "_danger_158ug_97", Ar = "_warning_158ug_105", Br = "_info_158ug_113", Gr = "_light_158ug_121", zr = "_dark_158ug_129", G = {
  spinner: kr,
  border: Tr,
  "spinner-border": "_spinner-border_158ug_1",
  grow: Cr,
  "spinner-grow": "_spinner-grow_158ug_1",
  sm: Er,
  lg: Sr,
  primary: Ir,
  secondary: Pr,
  success: Or,
  danger: Rr,
  warning: Ar,
  info: Br,
  light: Gr,
  dark: zr,
  "visually-hidden": "_visually-hidden_158ug_185"
}, to = ({
  animation: e = "border",
  variant: t = "primary",
  size: r,
  as: o = "div",
  role: a = "status",
  label: l,
  className: _ = "",
  ...c
}) => {
  const i = [
    G.spinner,
    e === "grow" ? G.grow : G.border,
    G[t],
    r === "sm" ? G.sm : "",
    r === "lg" ? G.lg : "",
    _
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx(o, { className: i, role: a, ...c, children: l ? /* @__PURE__ */ n.jsx("span", { className: "visually-hidden", children: l }) : null });
}, Lr = "_badge_ovldc_1", Fr = "_sm_ovldc_31", Dr = "_lg_ovldc_43", Mr = "_pill_ovldc_57", qr = "_dot_ovldc_71", z = {
  badge: Lr,
  sm: Fr,
  lg: Dr,
  pill: Mr,
  dot: qr,
  "badge-primary": "_badge-primary_ovldc_89",
  "badge-secondary": "_badge-secondary_ovldc_99",
  "badge-success": "_badge-success_ovldc_109",
  "badge-danger": "_badge-danger_ovldc_119",
  "badge-warning": "_badge-warning_ovldc_129",
  "badge-info": "_badge-info_ovldc_139",
  "badge-light": "_badge-light_ovldc_149",
  "badge-dark": "_badge-dark_ovldc_159"
}, ro = ({
  children: e,
  variant: t = "primary",
  bg: r,
  pill: o = !1,
  size: a = "md",
  className: l = "",
  title: _,
  count: c,
  dot: i = !1,
  ...u
}) => {
  const $ = r ?? t, p = [
    z.badge,
    z[`badge-${$}`],
    o ? z.pill : "",
    a === "sm" ? z.sm : a === "lg" ? z.lg : "",
    i ? z.dot : "",
    l
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx(
    "span",
    {
      className: p,
      title: _,
      "aria-label": typeof c < "u" ? `${c}` : void 0,
      ...u,
      children: i ? null : typeof c < "u" ? c : e
    }
  );
}, Yr = "_toastContainer_33tzd_1", Wr = "_toast_33tzd_1", Hr = "_success_33tzd_121", Vr = "_error_33tzd_129", Ur = "_info_33tzd_137", Jr = "_loading_33tzd_145", Xr = "_icon_33tzd_153", q = {
  toastContainer: Yr,
  "top-left": "_top-left_33tzd_17",
  "top-center": "_top-center_33tzd_29",
  "top-right": "_top-right_33tzd_43",
  "bottom-left": "_bottom-left_33tzd_55",
  "bottom-center": "_bottom-center_33tzd_67",
  "bottom-right": "_bottom-right_33tzd_81",
  toast: Wr,
  success: Hr,
  error: Vr,
  info: Ur,
  loading: Jr,
  icon: Xr
}, Zr = Ne(void 0);
let Qr = 0;
const no = ({
  children: e,
  position: t = "top-right"
}) => {
  const [r, o] = Y([]), a = (c, i = "info", u = 3e3, $) => {
    const p = Qr++, N = $ || t;
    return o((O) => [...O, { id: p, message: c, type: i, position: N }]), i !== "loading" && setTimeout(() => l(p), u), p;
  }, l = (c) => {
    o((i) => i.filter((u) => u.id !== c));
  }, _ = {
    "top-left": [],
    "top-center": [],
    "top-right": [],
    "bottom-left": [],
    "bottom-center": [],
    "bottom-right": []
  };
  return r.forEach((c) => _[c.position].push(c)), /* @__PURE__ */ n.jsxs(Zr.Provider, { value: { addToast: a, removeToast: l }, children: [
    e,
    Object.entries(_).map(
      ([c, i]) => i.length > 0 ? /* @__PURE__ */ n.jsx("div", { className: `${q.toastContainer} ${q[c]}`, children: i.map((u) => /* @__PURE__ */ n.jsxs("div", { className: `${q.toast} ${q[u.type]}`, children: [
        /* @__PURE__ */ n.jsx("span", { className: q.icon, children: Kr(u.type) }),
        u.message
      ] }, u.id)) }, c) : null
    )
  ] });
}, Kr = (e) => {
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
}, en = "_responsive_seov6_3", tn = "_table_seov6_127", rn = "_bordered_seov6_167", nn = "_hover_seov6_189", on = "_striped_seov6_199", S = {
  responsive: en,
  "responsive-sm": "_responsive-sm_seov6_17",
  "responsive-md": "_responsive-md_seov6_39",
  "responsive-lg": "_responsive-lg_seov6_61",
  "responsive-xl": "_responsive-xl_seov6_83",
  "responsive-xxl": "_responsive-xxl_seov6_105",
  table: tn,
  bordered: rn,
  hover: nn,
  striped: on,
  "size-sm": "_size-sm_seov6_209",
  "size-md": "_size-md_seov6_221",
  "size-lg": "_size-lg_seov6_233",
  "variant-light": "_variant-light_seov6_247",
  "variant-dark": "_variant-dark_seov6_259"
}, oo = ({
  bordered: e = !1,
  hover: t = !1,
  striped: r = !1,
  size: o = "md",
  variant: a = "light",
  responsive: l = !1,
  className: _,
  children: c,
  ...i
}) => {
  const u = E(
    S.table,
    {
      [S.bordered]: e,
      [S.hover]: t,
      [S.striped]: r,
      [S[`size-${o}`]]: o,
      [S[`variant-${a}`]]: a
    },
    _
  ), $ = ({ children: p }) => l ? typeof l == "boolean" ? /* @__PURE__ */ n.jsx("div", { className: S.responsive, children: p }) : /* @__PURE__ */ n.jsx("div", { className: S[`responsive-${l}`], children: p }) : /* @__PURE__ */ n.jsx(n.Fragment, { children: p });
  return /* @__PURE__ */ n.jsx($, { children: /* @__PURE__ */ n.jsx("table", { role: "table", className: u, ...i, children: c }) });
}, sn = "_listGroup_10jzp_1", an = "_flush_10jzp_21", ln = "_listGroupItem_10jzp_29", cn = "_active_10jzp_49", _n = "_disabled_10jzp_59", dn = "_action_10jzp_69", un = "_empty_10jzp_85", I = {
  listGroup: sn,
  flush: an,
  listGroupItem: ln,
  active: cn,
  disabled: _n,
  action: dn,
  empty: un
}, Le = ({
  children: e,
  className: t = "",
  flush: r = !1,
  emptyMessage: o = "No results found.",
  ...a
}) => {
  const l = x.Children.count(e) > 0 && x.Children.toArray(e).some(ot);
  return /* @__PURE__ */ n.jsx(
    "ul",
    {
      className: `${I.listGroup} ${r ? I.flush : ""} ${t}`,
      ...a,
      children: l ? e : /* @__PURE__ */ n.jsx("li", { className: `${I.listGroupItem} ${I.empty}`, children: o })
    }
  );
};
Le.Item = ({
  children: e,
  className: t = "",
  active: r = !1,
  disabled: o = !1,
  action: a = !1,
  as: l = "li",
  href: _,
  ...c
}) => {
  const i = [
    I.listGroupItem,
    r ? I.active : "",
    o ? I.disabled : "",
    a ? I.action : "",
    t
  ].filter(Boolean).join(" ");
  return l === "Link" ? /* @__PURE__ */ n.jsx("a", { href: _, className: i, ...c, children: e }) : l === "button" ? /* @__PURE__ */ n.jsx("button", { className: i, disabled: o, ...c, children: e }) : /* @__PURE__ */ n.jsx("li", { className: i, ...c, children: e });
};
Le.Item.displayName = "ListGroup.Item";
const mn = "_container_d1n5j_3", pn = "_fluid_d1n5j_21", fn = "_row_d1n5j_35", gn = "_col_d1n5j_51", k = {
  container: mn,
  fluid: pn,
  row: fn,
  col: gn,
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
}, Fe = ({
  children: e,
  fluid: t = !1,
  className: r = "",
  ...o
}) => /* @__PURE__ */ n.jsx("div", { className: `${t ? k.fluid : k.container} ${r}`, ...o, children: e });
Fe.displayName = "Grid.Container";
const K = ({ children: e, className: t = "", gap: r = 1, ...o }) => /* @__PURE__ */ n.jsx(
  "div",
  {
    className: `${k.row} ${t}`,
    style: { gap: `${r}rem` },
    ...o,
    children: e
  }
);
K.displayName = "Grid.Row";
const F = ({ children: e, className: t = "", xs: r, sm: o, md: a, lg: l, xl: _, ...c }) => {
  const i = [
    r ? `${k[`col-xs-${r}`]}` : "",
    o ? `${k[`col-sm-${o}`]}` : "",
    a ? `${k[`col-md-${a}`]}` : "",
    l ? `${k[`col-lg-${l}`]}` : "",
    _ ? `${k[`col-xl-${_}`]}` : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx("div", { className: `${k.col} ${i} ${t}`, ...c, children: e });
};
F.displayName = "Grid.Col";
const so = { Container: Fe, Row: K, Col: F }, xn = "_carousel_a5ffy_1", vn = "_carouselInner_a5ffy_13", bn = "_fade_a5ffy_25", jn = "_carouselItem_a5ffy_35", yn = "_active_a5ffy_55", hn = "_carouselItemContent_a5ffy_65", $n = "_control_a5ffy_75", Nn = "_prev_a5ffy_113", wn = "_next_a5ffy_121", kn = "_indicators_a5ffy_131", Tn = "_indicator_a5ffy_131", Cn = "_carouselCaption_a5ffy_183", v = {
  carousel: xn,
  carouselInner: vn,
  fade: bn,
  carouselItem: jn,
  active: yn,
  carouselItemContent: hn,
  control: $n,
  prev: Nn,
  next: wn,
  indicators: kn,
  indicator: Tn,
  carouselCaption: Cn
}, H = ({ children: e, interval: t = 5e3, fade: r = !1, className: o = "", ...a }) => {
  const [l, _] = Y(0), c = x.Children.count(e), i = we(null), u = xe(() => {
    _((p) => (p + 1) % c);
  }, [c]), $ = xe(() => {
    _((p) => (p - 1 + c) % c);
  }, [c]);
  return le(() => {
    if (t > 0)
      return i.current = setInterval(u, t), () => {
        i.current && clearInterval(i.current);
      };
  }, [t, u]), /* @__PURE__ */ n.jsxs("div", { className: `${v.carousel} ${o}`, ...a, children: [
    /* @__PURE__ */ n.jsx("div", { className: `${v.carouselInner} ${r ? v.fade : ""}`, children: x.Children.map(e, (p, N) => /* @__PURE__ */ n.jsx(
      "div",
      {
        className: `${v.carouselItem} ${N === l ? v.active : ""}`,
        children: p
      }
    )) }),
    /* @__PURE__ */ n.jsx("button", { className: `${v.control} ${v.prev}`, onClick: $, "aria-label": "Previous Slide", children: "❮" }),
    /* @__PURE__ */ n.jsx("button", { className: `${v.control} ${v.next}`, onClick: u, "aria-label": "Next Slide", children: "❯" }),
    /* @__PURE__ */ n.jsx("div", { className: v.indicators, children: x.Children.map(e, (p, N) => /* @__PURE__ */ n.jsx(
      "button",
      {
        className: `${v.indicator} ${N === l ? v.active : ""}`,
        onClick: () => _(N),
        "aria-label": `Go to slide ${N + 1}`
      }
    )) })
  ] });
};
H.displayName = "Carousel";
H.Item = ({ children: e, className: t = "", ...r }) => /* @__PURE__ */ n.jsx("div", { className: `${v.carouselItemContent} ${t}`, ...r, children: e });
H.Item.displayName = "Carousel.Item";
H.Caption = ({ children: e, className: t = "", ...r }) => /* @__PURE__ */ n.jsx("div", { className: `${v.carouselCaption} ${t}`, ...r, children: e });
H.Caption.displayName = "Carousel.Caption";
const En = "_skeleton_1uj23_1", Sn = "_skeletonCard_1uj23_129", In = "_skeletonImgSm_1uj23_147", Pn = "_skeletonTitleSm_1uj23_161", On = "_skeletonTextSm_1uj23_173", Rn = "_skeletonPriceSm_1uj23_185", An = "_skeletonBtnSm_1uj23_197", Bn = "_fadeIn_1uj23_213", y = {
  skeleton: En,
  skeletonCard: Sn,
  skeletonImgSm: In,
  skeletonTitleSm: Pn,
  skeletonTextSm: On,
  skeletonPriceSm: Rn,
  skeletonBtnSm: An,
  fadeIn: Bn
};
var De = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, he = x.createContext && /* @__PURE__ */ x.createContext(De), Gn = ["attr", "size", "title"];
function zn(e, t) {
  if (e == null) return {};
  var r = Ln(e, t), o, a;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (a = 0; a < l.length; a++)
      o = l[a], !(t.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(e, o) && (r[o] = e[o]);
  }
  return r;
}
function Ln(e, t) {
  if (e == null) return {};
  var r = {};
  for (var o in e)
    if (Object.prototype.hasOwnProperty.call(e, o)) {
      if (t.indexOf(o) >= 0) continue;
      r[o] = e[o];
    }
  return r;
}
function X() {
  return X = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, X.apply(this, arguments);
}
function $e(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, o);
  }
  return r;
}
function Z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $e(Object(r), !0).forEach(function(o) {
      Fn(e, o, r[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $e(Object(r)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(r, o));
    });
  }
  return e;
}
function Fn(e, t, r) {
  return t = Dn(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Dn(e) {
  var t = Mn(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Mn(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var o = r.call(e, t);
    if (typeof o != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Me(e) {
  return e && e.map((t, r) => /* @__PURE__ */ x.createElement(t.tag, Z({
    key: r
  }, t.attr), Me(t.child)));
}
function ee(e) {
  return (t) => /* @__PURE__ */ x.createElement(qn, X({
    attr: Z({}, e.attr)
  }, t), Me(e.child));
}
function qn(e) {
  var t = (r) => {
    var {
      attr: o,
      size: a,
      title: l
    } = e, _ = zn(e, Gn), c = a || r.size || "1em", i;
    return r.className && (i = r.className), e.className && (i = (i ? i + " " : "") + e.className), /* @__PURE__ */ x.createElement("svg", X({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, o, _, {
      className: i,
      style: Z(Z({
        color: e.color || r.color
      }, r.style), e.style),
      height: c,
      width: c,
      xmlns: "http://www.w3.org/2000/svg"
    }), l && /* @__PURE__ */ x.createElement("title", null, l), e.children);
  };
  return he !== void 0 ? /* @__PURE__ */ x.createElement(he.Consumer, null, (r) => t(r)) : t(De);
}
function Yn(e) {
  return ee({ attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20l44 0 0 44c0 11 9 20 20 20s20-9 20-20l0-44 44 0c11 0 20-9 20-20s-9-20-20-20l-44 0 0-44c0-11-9-20-20-20s-20 9-20 20l0 44-44 0c-11 0-20 9-20 20z" }, child: [] }] })(e);
}
function Wn(e) {
  return ee({ attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" }, child: [] }] })(e);
}
function Hn(e) {
  return ee({ attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z" }, child: [] }] })(e);
}
function Vn(e) {
  return ee({ attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { fill: "#D9D9D9", d: "M512.5 190.4l-94.4 191.3-211.2 30.7 152.8 149-36.1 210.3 188.9-99.3 188.9 99.2-36.1-210.3 152.8-148.9-211.2-30.7z" }, child: [] }, { tag: "path", attr: { d: "M908.6 352.8l-253.9-36.9L541.2 85.8c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L370.3 315.9l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1L239 839.4a31.95 31.95 0 0 0 46.4 33.7l227.1-119.4 227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM665.3 561.3l36.1 210.3-188.9-99.2-188.9 99.3 36.1-210.3-152.8-149 211.2-30.7 94.4-191.3 94.4 191.3 211.2 30.7-152.8 148.9z" }, child: [] }] })(e);
}
function Un({ rating: e, max: t = 5 }) {
  const r = Math.floor(e), o = e % 1 >= 0.5, a = t - r - (o ? 1 : 0);
  return /* @__PURE__ */ n.jsxs("div", { style: { display: "flex", gap: "2px", color: "#f5c518" }, children: [
    Array.from({ length: r }, (l, _) => /* @__PURE__ */ n.jsx(Wn, {}, `full-${_}`)),
    o && /* @__PURE__ */ n.jsx(Vn, {}, "half"),
    Array.from({ length: a }, (l, _) => /* @__PURE__ */ n.jsx(Hn, {}, `empty-${_}`))
  ] });
}
const Jn = "_productCard_2309b_1", Xn = {
  productCard: Jn
};
function ao({
  products: e,
  isLoading: t = !1,
  skeletonCount: r = 8
}) {
  return !e.length && !t ? /* @__PURE__ */ n.jsx("p", { className: "text-center text-muted", children: "No products found." }) : /* @__PURE__ */ n.jsx(K, { className: "g-4 justify-content-center", children: t ? Array.from({ length: r }).map((o, a) => /* @__PURE__ */ n.jsx(
    F,
    {
      xs: 12,
      sm: 6,
      md: 4,
      lg: 3,
      xl: 3,
      className: "product-col mb-4",
      children: /* @__PURE__ */ n.jsxs("div", { className: y.skeletonCard, children: [
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: `${y.skeleton} ${y.skeletonImgSm}`
          }
        ),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: `${y.skeleton} ${y.skeletonTitleSm}`
          }
        ),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: `${y.skeleton} ${y.skeletonTextSm}`
          }
        ),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: `${y.skeleton} ${y.skeletonPriceSm}`
          }
        ),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: `${y.skeleton} ${y.skeletonBtnSm}`
          }
        )
      ] })
    },
    `skeleton-${a}`
  )) : e.map((o, a) => {
    var l;
    return /* @__PURE__ */ n.jsx(
      F,
      {
        xs: 12,
        sm: 6,
        md: 4,
        lg: 3,
        xl: 3,
        className: `product-col mb-4 ${y.fadeIn}`,
        style: { animationDelay: `${a * 0.05}s` },
        children: /* @__PURE__ */ n.jsxs(P, { className: `h-100 shadow-lg border-1 hover-zoom ${Xn.productCard}`, children: [
          /* @__PURE__ */ n.jsx(ce, { href: `/productDetails/${o.id}`, children: /* @__PURE__ */ n.jsx(
            P.Img,
            {
              variant: "top",
              src: o.image,
              alt: o.name,
              className: "p-2 rounded",
              fill: !0
            }
          ) }),
          /* @__PURE__ */ n.jsxs(P.Body, { className: "text-center", children: [
            /* @__PURE__ */ n.jsx(P.Title, { className: "fs-5 text-dark", children: o.name }),
            /* @__PURE__ */ n.jsx(P.Text, { className: "text-muted small mb-1", children: o.category }),
            /* @__PURE__ */ n.jsxs(P.Text, { className: "fw-bold text-success fs-6 mb-2", children: [
              "₹",
              o.price ?? "—"
            ] }),
            /* @__PURE__ */ n.jsx("div", { style: { paddingLeft: "30%" }, children: /* @__PURE__ */ n.jsx(
              Un,
              {
                rating: ((l = o.reviews[0]) == null ? void 0 : l.rating) ?? 0,
                max: 5
              }
            ) })
          ] }),
          /* @__PURE__ */ n.jsx(P.Footer, { className: "bg-white border-0 text-center", children: /* @__PURE__ */ n.jsxs(vt, { variant: "success", size: "sm", children: [
            " ",
            /* @__PURE__ */ n.jsx(Yn, {}),
            "Add to Cart"
          ] }) })
        ] })
      },
      o.id
    );
  }) });
}
function lo({
  search: e,
  setSearch: t,
  sortBy: r,
  setSortBy: o
}) {
  return /* @__PURE__ */ n.jsxs(K, { className: "mb-4 justify-content-center", gap: 0, children: [
    /* @__PURE__ */ n.jsx(F, { md: 4, className: "mb-2", children: /* @__PURE__ */ n.jsxs(w, { children: [
      /* @__PURE__ */ n.jsx(w.Text, { children: "🔍" }),
      /* @__PURE__ */ n.jsx(
        j.Control,
        {
          type: "text",
          placeholder: "Search by name...",
          value: e,
          onChange: (a) => t(a.target.value),
          id: "search-featured"
        }
      )
    ] }) }),
    /* @__PURE__ */ n.jsx(F, { md: 2, className: "mb-2", children: /* @__PURE__ */ n.jsxs(j.Select, { value: r, onChange: (a) => o(a.target.value), "aria-label": "Sort products", id: "sort-featured", className: "py-2 text-secondary", children: [
      /* @__PURE__ */ n.jsx("option", { value: "", children: "Sort by..." }),
      /* @__PURE__ */ n.jsx("option", { value: "name", children: "Name (A-Z)" }),
      /* @__PURE__ */ n.jsx("option", { value: "price", children: "Price (Low-High)" })
    ] }) })
  ] });
}
export {
  eo as Alert,
  ro as Badge,
  vt as Button,
  P as Card,
  H as Carousel,
  F as Col,
  so as Container,
  Q as Dropdown,
  j as Form,
  w as InputGroup,
  Le as ListGroup,
  Kn as Modal,
  W as NavBar,
  ao as ProductGrid,
  Un as Rating,
  K as Row,
  lo as SearchSortBar,
  to as Spinner,
  oo as Table,
  no as ToastProvider
};
//# sourceMappingURL=index.mjs.map

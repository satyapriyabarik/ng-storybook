import v, { forwardRef as lt, useEffect as Y, useState as k, createContext as Re, useRef as xe, useContext as Ae, isValidElement as ct, useCallback as ke } from "react";
import it from "react-dom";
var se = { exports: {} }, J = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function dt() {
  if (Te) return J;
  Te = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, a, l) {
    var d = null;
    if (l !== void 0 && (d = "" + l), a.key !== void 0 && (d = "" + a.key), "key" in a) {
      l = {};
      for (var c in a)
        c !== "key" && (l[c] = a[c]);
    } else l = a;
    return a = l.ref, {
      $$typeof: e,
      type: r,
      key: d,
      ref: a !== void 0 ? a : null,
      props: l
    };
  }
  return J.Fragment = t, J.jsx = n, J.jsxs = n, J;
}
var X = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function _t() {
  return Ce || (Ce = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(o) {
      if (o == null) return null;
      if (typeof o == "function")
        return o.$$typeof === rt ? null : o.displayName || o.name || null;
      if (typeof o == "string") return o;
      switch (o) {
        case B:
          return "Fragment";
        case f:
          return "Profiler";
        case ie:
          return "StrictMode";
        case _e:
          return "Suspense";
        case tt:
          return "SuspenseList";
        case st:
          return "Activity";
      }
      if (typeof o == "object")
        switch (typeof o.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), o.$$typeof) {
          case A:
            return "Portal";
          case z:
            return o.displayName || "Context";
          case U:
            return (o._context.displayName || "Context") + ".Consumer";
          case de:
            var _ = o.render;
            return o = o.displayName, o || (o = _.displayName || _.name || "", o = o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef"), o;
          case nt:
            return _ = o.displayName || null, _ !== null ? _ : e(o.type) || "Memo";
          case ue:
            _ = o._payload, o = o._init;
            try {
              return e(o(_));
            } catch {
            }
        }
      return null;
    }
    function t(o) {
      return "" + o;
    }
    function n(o) {
      try {
        t(o);
        var _ = !1;
      } catch {
        _ = !0;
      }
      if (_) {
        _ = console;
        var p = _.error, g = typeof Symbol == "function" && Symbol.toStringTag && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return p.call(
          _,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          g
        ), t(o);
      }
    }
    function r(o) {
      if (o === B) return "<>";
      if (typeof o == "object" && o !== null && o.$$typeof === ue)
        return "<...>";
      try {
        var _ = e(o);
        return _ ? "<" + _ + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var o = me.A;
      return o === null ? null : o.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function d(o) {
      if (je.call(o, "key")) {
        var _ = Object.getOwnPropertyDescriptor(o, "key").get;
        if (_ && _.isReactWarning) return !1;
      }
      return o.key !== void 0;
    }
    function c(o, _) {
      function p() {
        ye || (ye = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          _
        ));
      }
      p.isReactWarning = !0, Object.defineProperty(o, "key", {
        get: p,
        configurable: !0
      });
    }
    function i() {
      var o = e(this.type);
      return he[o] || (he[o] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), o = this.props.ref, o !== void 0 ? o : null;
    }
    function u(o, _, p, g, ne, fe) {
      var x = p.ref;
      return o = {
        $$typeof: te,
        type: o,
        key: _,
        props: p,
        _owner: g
      }, (x !== void 0 ? x : null) !== null ? Object.defineProperty(o, "ref", {
        enumerable: !1,
        get: i
      }) : Object.defineProperty(o, "ref", { enumerable: !1, value: null }), o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(o, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(o, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ne
      }), Object.defineProperty(o, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: fe
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    }
    function $(o, _, p, g, ne, fe) {
      var x = _.children;
      if (x !== void 0)
        if (g)
          if (ot(x)) {
            for (g = 0; g < x.length; g++)
              m(x[g]);
            Object.freeze && Object.freeze(x);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(x);
      if (je.call(_, "key")) {
        x = e(o);
        var L = Object.keys(_).filter(function(at) {
          return at !== "key";
        });
        g = 0 < L.length ? "{key: someKey, " + L.join(": ..., ") + ": ...}" : "{key: someKey}", we[x + g] || (L = 0 < L.length ? "{" + L.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          g,
          x,
          L,
          x
        ), we[x + g] = !0);
      }
      if (x = null, p !== void 0 && (n(p), x = "" + p), d(_) && (n(_.key), x = "" + _.key), "key" in _) {
        p = {};
        for (var ge in _)
          ge !== "key" && (p[ge] = _[ge]);
      } else p = _;
      return x && c(
        p,
        typeof o == "function" ? o.displayName || o.name || "Unknown" : o
      ), u(
        o,
        x,
        p,
        a(),
        ne,
        fe
      );
    }
    function m(o) {
      j(o) ? o._store && (o._store.validated = 1) : typeof o == "object" && o !== null && o.$$typeof === ue && (o._payload.status === "fulfilled" ? j(o._payload.value) && o._payload.value._store && (o._payload.value._store.validated = 1) : o._store && (o._store.validated = 1));
    }
    function j(o) {
      return typeof o == "object" && o !== null && o.$$typeof === te;
    }
    var C = v, te = Symbol.for("react.transitional.element"), A = Symbol.for("react.portal"), B = Symbol.for("react.fragment"), ie = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), U = Symbol.for("react.consumer"), z = Symbol.for("react.context"), de = Symbol.for("react.forward_ref"), _e = Symbol.for("react.suspense"), tt = Symbol.for("react.suspense_list"), nt = Symbol.for("react.memo"), ue = Symbol.for("react.lazy"), st = Symbol.for("react.activity"), rt = Symbol.for("react.client.reference"), me = C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, je = Object.prototype.hasOwnProperty, ot = Array.isArray, pe = console.createTask ? console.createTask : function() {
      return null;
    };
    C = {
      react_stack_bottom_frame: function(o) {
        return o();
      }
    };
    var ye, he = {}, $e = C.react_stack_bottom_frame.bind(
      C,
      l
    )(), Ne = pe(r(l)), we = {};
    X.Fragment = B, X.jsx = function(o, _, p) {
      var g = 1e4 > me.recentlyCreatedOwnerStacks++;
      return $(
        o,
        _,
        p,
        !1,
        g ? Error("react-stack-top-frame") : $e,
        g ? pe(r(o)) : Ne
      );
    }, X.jsxs = function(o, _, p) {
      var g = 1e4 > me.recentlyCreatedOwnerStacks++;
      return $(
        o,
        _,
        p,
        !0,
        g ? Error("react-stack-top-frame") : $e,
        g ? pe(r(o)) : Ne
      );
    };
  })()), X;
}
var Ee;
function ut() {
  return Ee || (Ee = 1, process.env.NODE_ENV === "production" ? se.exports = dt() : se.exports = _t()), se.exports;
}
var s = ut();
const mt = "_button_1vcgi_1", pt = "_primary_1vcgi_9", ft = "_secondary_1vcgi_18", gt = "_success_1vcgi_27", xt = "_danger_1vcgi_36", vt = "_sm_1vcgi_45", bt = "_md_1vcgi_50", jt = "_lg_1vcgi_55", yt = "_disabled_1vcgi_60", re = {
  button: mt,
  primary: pt,
  secondary: ft,
  success: gt,
  danger: xt,
  sm: vt,
  md: bt,
  lg: jt,
  disabled: yt
}, Be = ({
  children: e,
  variant: t = "primary",
  size: n = "md",
  disabled: r = !1,
  mr: a = "",
  ml: l = "",
  mt: d = "",
  mb: c = "",
  ...i
}) => /* @__PURE__ */ s.jsx(
  "button",
  {
    className: `${re.button} ${re[t]} ${re[n]} ${r ? re.disabled : ""}`,
    style: {
      marginRight: a,
      marginLeft: l,
      marginTop: d,
      marginBottom: c
    },
    disabled: r,
    ...i,
    children: e
  }
), ht = ({
  src: e,
  alt: t = "",
  width: n,
  height: r,
  fill: a,
  style: l,
  ...d
}) => {
  const c = a ? {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover"
    // ✅ cast to valid enum type
  } : {};
  return /* @__PURE__ */ s.jsx(
    "img",
    {
      src: typeof e == "string" ? e : e.src,
      alt: t,
      width: n,
      height: r,
      style: { ...l, ...c },
      ...d
    }
  );
};
function Ge(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (n = Ge(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function P() {
  for (var e, t, n = 0, r = "", a = arguments.length; n < a; n++) (e = arguments[n]) && (t = Ge(e)) && (r && (r += " "), r += t);
  return r;
}
const $t = "_card_zxwhi_1", Nt = "_cardHeader_zxwhi_13", wt = "_cardBody_zxwhi_20", kt = "_cardFooter_zxwhi_25", Tt = "_cardTitle_zxwhi_33", Ct = "_cardText_zxwhi_45", Et = "_cardImageWrapper_zxwhi_51", St = "_cardImage_zxwhi_51", w = {
  card: $t,
  cardHeader: Nt,
  cardBody: wt,
  cardFooter: kt,
  cardTitle: Tt,
  cardText: Ct,
  cardImageWrapper: Et,
  cardImage: St
}, ze = lt(
  ({ children: e, className: t = "", ...n }, r) => /* @__PURE__ */ s.jsx("div", { ref: r, className: P(w.card, t), ...n, children: e })
);
ze.displayName = "Card";
const Le = ({ children: e, className: t = "", ...n }) => /* @__PURE__ */ s.jsx("div", { className: P(w.cardHeader, t), ...n, children: e });
Le.displayName = "Card.Header";
const De = ({ children: e, className: t = "", ...n }) => /* @__PURE__ */ s.jsx("div", { className: P(w.cardBody, t), ...n, children: e });
De.displayName = "Card.Body";
const Fe = ({ children: e, className: t = "", ...n }) => /* @__PURE__ */ s.jsx("div", { className: P(w.cardFooter, t), ...n, children: e });
Fe.displayName = "Card.Footer";
const Me = ({
  children: e,
  className: t = "",
  as: n = "h3",
  ...r
}) => /* @__PURE__ */ s.jsx(n, { className: P(w.cardTitle, t), ...r, children: e });
Me.displayName = "Card.Title";
const qe = ({ children: e, className: t = "", ...n }) => /* @__PURE__ */ s.jsx("p", { className: P(w.cardText, t), ...n, children: e });
qe.displayName = "Card.Text";
const We = ({
  variant: e,
  className: t = "",
  alt: n,
  fill: r,
  width: a,
  height: l,
  style: d,
  ...c
}) => {
  let i = "";
  switch (e) {
    case "top":
      i = w.top;
      break;
    case "bottom":
      i = w.bottom;
      break;
    case "rounded":
      i = w.rounded;
      break;
    case "circle":
      i = w.circle;
      break;
  }
  const u = !!r;
  return /* @__PURE__ */ s.jsx(
    "div",
    {
      className: P(w.cardImageWrapper, i, t),
      style: {
        position: "relative",
        width: "100%",
        height: l ? `${l}px` : "250px",
        overflow: "hidden",
        borderRadius: "inherit"
      },
      children: /* @__PURE__ */ s.jsx(
        ht,
        {
          alt: n,
          fill: u,
          width: u ? void 0 : a,
          height: u ? void 0 : l,
          className: P(w.cardImage),
          style: { objectFit: "cover", ...d },
          ...c
        }
      )
    }
  );
};
We.displayName = "Card.Img";
const G = Object.assign(ze, {
  Header: Le,
  Body: De,
  Footer: Fe,
  Title: Me,
  Text: qe,
  Img: We
}), It = "_modalBackdrop_8wtvg_1", Pt = "_modalContent_8wtvg_27", Ot = "_modalHeader_8wtvg_53", Rt = "_closeBtn_8wtvg_69", At = "_modalBody_8wtvg_85", Bt = "_modalFooter_8wtvg_95", D = {
  modalBackdrop: It,
  modalContent: Pt,
  modalHeader: Ot,
  closeBtn: Rt,
  modalBody: At,
  modalFooter: Bt
}, or = ({ show: e, onClose: t, title: n, children: r, footer: a }) => (Y(() => {
  const l = (d) => {
    d.key === "Escape" && t();
  };
  return document.addEventListener("keydown", l), () => document.removeEventListener("keydown", l);
}, [t]), e ? it.createPortal(
  /* @__PURE__ */ s.jsx("div", { className: D.modalBackdrop, onClick: t, children: /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: D.modalContent,
      onClick: (l) => l.stopPropagation(),
      children: [
        /* @__PURE__ */ s.jsxs("div", { className: D.modalHeader, children: [
          /* @__PURE__ */ s.jsx("h5", { children: n }),
          /* @__PURE__ */ s.jsx("button", { className: D.closeBtn, onClick: t, children: "×" })
        ] }),
        /* @__PURE__ */ s.jsx("div", { className: D.modalBody, children: r }),
        a && /* @__PURE__ */ s.jsx("div", { className: D.modalFooter, children: a })
      ]
    }
  ) }),
  document.body
) : null), ve = ({
  href: e,
  children: t,
  ...n
}) => /* @__PURE__ */ s.jsx("a", { href: e, ...n, children: t }), Gt = "_navbar_om48y_3", zt = "_brand_om48y_23", Lt = "_toggle_om48y_43", Dt = "_bar_om48y_65", Ft = "_collapse_om48y_79", Mt = "_show_om48y_95", qt = "_nav_om48y_3", Wt = "_navLink_om48y_123", Yt = "_active_om48y_163", h = {
  navbar: Gt,
  brand: zt,
  toggle: Lt,
  bar: Dt,
  collapse: Ft,
  show: Mt,
  nav: qt,
  navLink: Wt,
  active: Yt,
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
function Se(e, t) {
  return v.isValidElement(e) && typeof e.type == "function" && e.type.displayName === t;
}
const Q = ({
  bg: e = "light",
  variant: t = "light",
  expand: n = "lg",
  children: r,
  className: a = ""
}) => {
  const [l, d] = k(!1);
  return /* @__PURE__ */ s.jsx(
    "nav",
    {
      className: `${h.navbar} ${h[`bg-${e}`]} ${h[`navbar-${t}`]} ${h[`expand-${n}`]} ${a}`,
      children: v.Children.map(r, (c) => v.isValidElement(c) ? Se(c, "NavBar.Toggle") ? v.cloneElement(c, {
        onClick: () => d((i) => !i)
      }) : Se(c, "NavBar.Collapse") ? v.cloneElement(c, {
        show: l
      }) : c : c)
    }
  );
};
Q.displayName = "NavBar";
const Ye = ({ href: e = "/", children: t }) => /* @__PURE__ */ s.jsx(
  ve,
  {
    href: e,
    className: `${h.brand} d-flex align-items-center text-decoration-none`,
    children: t
  }
);
Ye.displayName = "NavBar.Brand";
const He = ({ ariaControls: e, onClick: t }) => /* @__PURE__ */ s.jsxs(
  "button",
  {
    type: "button",
    className: h.toggle,
    "aria-controls": e,
    "aria-label": "Toggle navigation",
    onClick: t,
    children: [
      /* @__PURE__ */ s.jsx("span", { className: h.bar }),
      /* @__PURE__ */ s.jsx("span", { className: h.bar }),
      /* @__PURE__ */ s.jsx("span", { className: h.bar })
    ]
  }
);
He.displayName = "NavBar.Toggle";
const Ve = ({ id: e, children: t, show: n = !1 }) => /* @__PURE__ */ s.jsx("div", { id: e, className: `${h.collapse} ${n ? h.show : ""}`, children: t });
Ve.displayName = "NavBar.Collapse";
const be = ({ children: e, className: t = "" }) => /* @__PURE__ */ s.jsx("ul", { className: `${h.nav} ${t}`, children: e }), Ht = ({ href: e, children: t, active: n = !1 }) => /* @__PURE__ */ s.jsx("li", { children: /* @__PURE__ */ s.jsx(ve, { href: e, className: `${h.navLink} ${n ? h.active : ""}`, children: t }) });
be.Link = Ht;
be.displayName = "NavBar.Nav";
Q.Brand = Ye;
Q.Toggle = He;
Q.Collapse = Ve;
Q.Nav = be;
const Vt = "_form_ujlhb_1", Ut = "_formGroup_ujlhb_13", Jt = "_label_ujlhb_25", Xt = "_input_ujlhb_35", Zt = "_textarea_ujlhb_37", Qt = "_select_ujlhb_39", S = {
  form: Vt,
  formGroup: Ut,
  label: Jt,
  input: Xt,
  textarea: Zt,
  select: Qt
}, b = ({ children: e, className: t = "", ...n }) => /* @__PURE__ */ s.jsx("form", { className: `${S.form} ${t}`, ...n, children: e });
b.Group = ({ children: e, className: t = "", ...n }) => /* @__PURE__ */ s.jsx("div", { className: `${S.formGroup} ${t}`, ...n, children: e });
b.Group.displayName = "Form.Group";
b.Label = ({ children: e, htmlFor: t, className: n = "", ...r }) => /* @__PURE__ */ s.jsx("label", { htmlFor: t, className: `${S.label} ${n}`, ...r, children: e });
b.Label.displayName = "Form.Label";
b.Input = ({ className: e = "", ...t }) => /* @__PURE__ */ s.jsx("input", { className: `${S.input} ${e}`, ...t });
b.Input.displayName = "Form.Input";
b.TextArea = ({ className: e = "", ...t }) => /* @__PURE__ */ s.jsx("textarea", { className: `${S.textarea} ${e}`, ...t });
b.TextArea.displayName = "Form.TextArea";
b.Select = ({ className: e = "", ...t }) => /* @__PURE__ */ s.jsx("select", { className: `${S.select} ${e}`, ...t });
b.Select.displayName = "Form.Select";
b.Control = ({ as: e = "input", className: t = "", ...n }) => {
  switch (e) {
    case "textarea":
      return /* @__PURE__ */ s.jsx("textarea", { className: `${S.textarea} ${t}`, ...n });
    case "select":
      return /* @__PURE__ */ s.jsx("select", { className: `${S.select} ${t}`, ...n });
    case "input":
    default:
      return /* @__PURE__ */ s.jsx("input", { className: `${S.input} ${t}`, ...n });
  }
};
b.Control.displayName = "Form.Control";
const Kt = "_inputGroup_lxf65_1", en = "_inputGroupText_lxf65_71", tn = "_inputGroupPrepend_lxf65_105", nn = "_inputGroupAppend_lxf65_107", sn = "_inputGroupButton_lxf65_117", H = {
  inputGroup: Kt,
  "dropdown-toggle": "_dropdown-toggle_lxf65_15",
  "dropdown-menu": "_dropdown-menu_lxf65_15",
  inputGroupText: en,
  inputGroupPrepend: tn,
  inputGroupAppend: nn,
  inputGroupButton: sn,
  "inputGroup-sm": "_inputGroup-sm_lxf65_127",
  "inputGroup-lg": "_inputGroup-lg_lxf65_143"
}, T = ({ children: e, className: t = "", size: n = "md", ...r }) => {
  const a = [
    H.inputGroup,
    H[`inputGroup-${n}`] || "",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ s.jsx("div", { className: a, ...r, children: e });
};
T.Text = ({ children: e, className: t = "", ...n }) => /* @__PURE__ */ s.jsx("span", { className: `${H.inputGroupText} ${t}`, ...n, children: e });
T.Text.displayName = "InputGroup.Text";
T.Prepend = ({ children: e, className: t = "", ...n }) => /* @__PURE__ */ s.jsx("div", { className: `${H.inputGroupPrepend} ${t}`, ...n, children: e });
T.Prepend.displayName = "InputGroup.Prepend";
T.Append = ({ children: e, className: t = "", ...n }) => /* @__PURE__ */ s.jsx("div", { className: `${H.inputGroupAppend} ${t}`, ...n, children: e });
T.Append.displayName = "InputGroup.Append";
T.Button = ({ children: e, className: t = "", ...n }) => /* @__PURE__ */ s.jsx("div", { className: `${H.inputGroupButton} ${t}`, ...n, children: e });
T.Button.displayName = "InputGroup.Button";
const rn = "_dropdown_1b4le_3", on = "_toggle_1b4le_15", an = "_menu_1b4le_113", ln = "_show_1b4le_151", cn = "_fadeIn_1b4le_1", dn = "_end_1b4le_163", _n = "_item_1b4le_175", un = "_divider_1b4le_235", I = {
  dropdown: rn,
  toggle: on,
  "outline-light": "_outline-light_1b4le_87",
  menu: an,
  show: ln,
  fadeIn: cn,
  end: dn,
  item: _n,
  divider: un
}, Ue = Re(void 0), Je = () => {
  const e = Ae(Ue);
  if (!e)
    throw new Error("Dropdown.Toggle, Dropdown.Menu, and Dropdown.Item must be used within a <Dropdown>");
  return e;
}, le = ({ align: e = "start", children: t, className: n = "" }) => {
  const [r, a] = k(!1), l = xe(null), d = () => a((i) => !i), c = () => a(!1);
  return Y(() => {
    const i = (u) => {
      l.current && !l.current.contains(u.target) && c();
    };
    return document.addEventListener("mousedown", i), () => document.removeEventListener("mousedown", i);
  }, []), /* @__PURE__ */ s.jsx(Ue.Provider, { value: { show: r, toggle: d, align: e }, children: /* @__PURE__ */ s.jsx("div", { className: `${I.dropdown} ${n}`, ref: l, children: t }) });
}, mn = ({
  variant: e = "primary",
  id: t,
  children: n,
  className: r = "",
  ...a
}) => {
  const { toggle: l } = Je();
  return /* @__PURE__ */ s.jsx(
    "button",
    {
      id: t,
      type: "button",
      className: `${I.toggle} ${I[e] || ""} ${r}`,
      onClick: l,
      ...a,
      children: n
    }
  );
}, pn = ({
  children: e,
  className: t = "",
  ...n
}) => {
  const { show: r, align: a } = Je();
  return /* @__PURE__ */ s.jsx(
    "ul",
    {
      className: `${I.menu} ${r ? I.show : ""} ${a === "end" ? I.end : ""} ${t}`,
      ...n,
      children: e
    }
  );
}, fn = ({
  href: e,
  onClick: t,
  children: n,
  className: r = "",
  ...a
}) => /* @__PURE__ */ s.jsx("li", { children: e ? /* @__PURE__ */ s.jsx("a", { href: e, className: `${I.item} ${r}`, ...a, children: n }) : /* @__PURE__ */ s.jsx(
  "button",
  {
    type: "button",
    onClick: t,
    className: `${I.item} ${r}`,
    ...a,
    children: n
  }
) }), gn = () => /* @__PURE__ */ s.jsx("li", { className: I.divider, role: "separator" });
le.Toggle = mn;
le.Menu = pn;
le.Item = fn;
le.Divider = gn;
const xn = "_alert_13bqy_1", vn = "_heading_13bqy_17", bn = "_message_13bqy_29", jn = "_primary_13bqy_39", yn = "_secondary_13bqy_51", hn = "_success_13bqy_63", $n = "_danger_13bqy_75", Nn = "_warning_13bqy_87", wn = "_info_13bqy_99", kn = "_light_13bqy_111", Tn = "_dark_13bqy_123", Cn = "_dismissible_13bqy_137", En = "_closeBtn_13bqy_145", F = {
  alert: xn,
  heading: vn,
  message: bn,
  primary: jn,
  secondary: yn,
  success: hn,
  danger: $n,
  warning: Nn,
  info: wn,
  light: kn,
  dark: Tn,
  dismissible: Cn,
  closeBtn: En
}, ar = ({
  variant: e = "primary",
  dismissible: t = !1,
  onClose: n,
  heading: r,
  children: a,
  className: l = "",
  ...d
}) => {
  const [c, i] = k(!0);
  if (!c) return null;
  const u = () => {
    i(!1), n == null || n();
  };
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `${F.alert} ${F[e]} ${t ? F.dismissible : ""} ${l}`,
      role: "alert",
      ...d,
      children: [
        r && /* @__PURE__ */ s.jsx("h4", { className: F.heading, children: r }),
        /* @__PURE__ */ s.jsx("div", { className: F.message, children: a }),
        t && /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "button",
            className: F.closeBtn,
            "aria-label": "Close",
            onClick: u,
            children: /* @__PURE__ */ s.jsx("span", { "aria-hidden": "true", children: "×" })
          }
        )
      ]
    }
  );
}, Sn = "_spinner_158ug_1", In = "_border_158ug_11", Pn = "_grow_158ug_29", On = "_sm_158ug_47", Rn = "_lg_158ug_59", An = "_primary_158ug_73", Bn = "_secondary_158ug_81", Gn = "_success_158ug_89", zn = "_danger_158ug_97", Ln = "_warning_158ug_105", Dn = "_info_158ug_113", Fn = "_light_158ug_121", Mn = "_dark_158ug_129", M = {
  spinner: Sn,
  border: In,
  "spinner-border": "_spinner-border_158ug_1",
  grow: Pn,
  "spinner-grow": "_spinner-grow_158ug_1",
  sm: On,
  lg: Rn,
  primary: An,
  secondary: Bn,
  success: Gn,
  danger: zn,
  warning: Ln,
  info: Dn,
  light: Fn,
  dark: Mn,
  "visually-hidden": "_visually-hidden_158ug_185"
}, qn = ({
  animation: e = "border",
  variant: t = "primary",
  size: n,
  as: r = "div",
  role: a = "status",
  label: l,
  className: d = "",
  ...c
}) => {
  const i = [
    M.spinner,
    e === "grow" ? M.grow : M.border,
    M[t],
    n === "sm" ? M.sm : "",
    n === "lg" ? M.lg : "",
    d
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ s.jsx(r, { className: i, role: a, ...c, children: l ? /* @__PURE__ */ s.jsx("span", { className: "visually-hidden", children: l }) : null });
}, Wn = "_badge_ovldc_1", Yn = "_sm_ovldc_31", Hn = "_lg_ovldc_43", Vn = "_pill_ovldc_57", Un = "_dot_ovldc_71", q = {
  badge: Wn,
  sm: Yn,
  lg: Hn,
  pill: Vn,
  dot: Un,
  "badge-primary": "_badge-primary_ovldc_89",
  "badge-secondary": "_badge-secondary_ovldc_99",
  "badge-success": "_badge-success_ovldc_109",
  "badge-danger": "_badge-danger_ovldc_119",
  "badge-warning": "_badge-warning_ovldc_129",
  "badge-info": "_badge-info_ovldc_139",
  "badge-light": "_badge-light_ovldc_149",
  "badge-dark": "_badge-dark_ovldc_159"
}, lr = ({
  children: e,
  variant: t = "primary",
  bg: n,
  pill: r = !1,
  size: a = "md",
  className: l = "",
  title: d,
  count: c,
  dot: i = !1,
  ...u
}) => {
  const $ = n ?? t, m = [
    q.badge,
    q[`badge-${$}`],
    r ? q.pill : "",
    a === "sm" ? q.sm : a === "lg" ? q.lg : "",
    i ? q.dot : "",
    l
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ s.jsx(
    "span",
    {
      className: m,
      title: d,
      "aria-label": typeof c < "u" ? `${c}` : void 0,
      ...u,
      children: i ? null : typeof c < "u" ? c : e
    }
  );
}, Jn = "_toastContainer_33tzd_1", Xn = "_toast_33tzd_1", Zn = "_success_33tzd_121", Qn = "_error_33tzd_129", Kn = "_info_33tzd_137", es = "_loading_33tzd_145", ts = "_icon_33tzd_153", Z = {
  toastContainer: Jn,
  "top-left": "_top-left_33tzd_17",
  "top-center": "_top-center_33tzd_29",
  "top-right": "_top-right_33tzd_43",
  "bottom-left": "_bottom-left_33tzd_55",
  "bottom-center": "_bottom-center_33tzd_67",
  "bottom-right": "_bottom-right_33tzd_81",
  toast: Xn,
  success: Zn,
  error: Qn,
  info: Kn,
  loading: es,
  icon: ts
}, Xe = Re(void 0);
let ns = 0;
const cr = ({
  children: e,
  position: t = "top-right"
}) => {
  const [n, r] = k([]), a = (c, i = "info", u = 3e3, $) => {
    const m = ns++, j = $ || t;
    return r((C) => [...C, { id: m, message: c, type: i, position: j }]), i !== "loading" && setTimeout(() => l(m), u), m;
  }, l = (c) => {
    r((i) => i.filter((u) => u.id !== c));
  }, d = {
    "top-left": [],
    "top-center": [],
    "top-right": [],
    "bottom-left": [],
    "bottom-center": [],
    "bottom-right": []
  };
  return n.forEach((c) => d[c.position].push(c)), /* @__PURE__ */ s.jsxs(Xe.Provider, { value: { addToast: a, removeToast: l }, children: [
    e,
    Object.entries(d).map(
      ([c, i]) => i.length > 0 ? /* @__PURE__ */ s.jsx("div", { className: `${Z.toastContainer} ${Z[c]}`, children: i.map((u) => /* @__PURE__ */ s.jsxs("div", { className: `${Z.toast} ${Z[u.type]}`, children: [
        /* @__PURE__ */ s.jsx("span", { className: Z.icon, children: ss(u.type) }),
        u.message
      ] }, u.id)) }, c) : null
    )
  ] });
}, ir = () => {
  const e = Ae(Xe);
  if (!e) throw new Error("useToast must be used within ToastProvider");
  return e;
}, ss = (e) => {
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
}, rs = "_responsive_seov6_3", os = "_table_seov6_127", as = "_bordered_seov6_167", ls = "_hover_seov6_189", cs = "_striped_seov6_199", O = {
  responsive: rs,
  "responsive-sm": "_responsive-sm_seov6_17",
  "responsive-md": "_responsive-md_seov6_39",
  "responsive-lg": "_responsive-lg_seov6_61",
  "responsive-xl": "_responsive-xl_seov6_83",
  "responsive-xxl": "_responsive-xxl_seov6_105",
  table: os,
  bordered: as,
  hover: ls,
  striped: cs,
  "size-sm": "_size-sm_seov6_209",
  "size-md": "_size-md_seov6_221",
  "size-lg": "_size-lg_seov6_233",
  "variant-light": "_variant-light_seov6_247",
  "variant-dark": "_variant-dark_seov6_259"
}, dr = ({
  bordered: e = !1,
  hover: t = !1,
  striped: n = !1,
  size: r = "md",
  variant: a = "light",
  responsive: l = !1,
  className: d,
  children: c,
  ...i
}) => {
  const u = P(
    O.table,
    {
      [O.bordered]: e,
      [O.hover]: t,
      [O.striped]: n,
      [O[`size-${r}`]]: r,
      [O[`variant-${a}`]]: a
    },
    d
  ), $ = ({ children: m }) => l ? typeof l == "boolean" ? /* @__PURE__ */ s.jsx("div", { className: O.responsive, children: m }) : /* @__PURE__ */ s.jsx("div", { className: O[`responsive-${l}`], children: m }) : /* @__PURE__ */ s.jsx(s.Fragment, { children: m });
  return /* @__PURE__ */ s.jsx($, { children: /* @__PURE__ */ s.jsx("table", { role: "table", className: u, ...i, children: c }) });
}, is = "_listGroup_10jzp_1", ds = "_flush_10jzp_21", _s = "_listGroupItem_10jzp_29", us = "_active_10jzp_49", ms = "_disabled_10jzp_59", ps = "_action_10jzp_69", fs = "_empty_10jzp_85", R = {
  listGroup: is,
  flush: ds,
  listGroupItem: _s,
  active: us,
  disabled: ms,
  action: ps,
  empty: fs
}, W = ({
  children: e,
  className: t = "",
  flush: n = !1,
  emptyMessage: r = "No results found.",
  ...a
}) => {
  const l = v.Children.count(e) > 0 && v.Children.toArray(e).some(ct);
  return /* @__PURE__ */ s.jsx(
    "ul",
    {
      className: `${R.listGroup} ${n ? R.flush : ""} ${t}`,
      ...a,
      children: l ? e : /* @__PURE__ */ s.jsx("li", { className: `${R.listGroupItem} ${R.empty}`, children: r })
    }
  );
};
W.Item = ({
  children: e,
  className: t = "",
  active: n = !1,
  disabled: r = !1,
  action: a = !1,
  as: l = "li",
  href: d,
  ...c
}) => {
  const i = [
    R.listGroupItem,
    n ? R.active : "",
    r ? R.disabled : "",
    a ? R.action : "",
    t
  ].filter(Boolean).join(" ");
  return l === "Link" ? /* @__PURE__ */ s.jsx("a", { href: d, className: i, ...c, children: e }) : l === "button" ? /* @__PURE__ */ s.jsx("button", { className: i, disabled: r, ...c, children: e }) : /* @__PURE__ */ s.jsx("li", { className: i, ...c, children: e });
};
W.Item.displayName = "ListGroup.Item";
const gs = "_container_d1n5j_3", xs = "_fluid_d1n5j_21", vs = "_row_d1n5j_35", bs = "_col_d1n5j_51", E = {
  container: gs,
  fluid: xs,
  row: vs,
  col: bs,
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
}, Ze = ({
  children: e,
  fluid: t = !1,
  className: n = "",
  ...r
}) => /* @__PURE__ */ s.jsx(
  "div",
  {
    className: `${t ? E.fluid : E.container} ${n}`,
    ...r,
    children: e
  }
);
Ze.displayName = "Grid";
const ce = ({
  children: e,
  className: t = "",
  gap: n = 1,
  ...r
}) => /* @__PURE__ */ s.jsx(
  "div",
  {
    className: `${E.row} ${t}`,
    style: { gap: `${n}rem` },
    ...r,
    children: e
  }
);
ce.displayName = "Grid.Row";
const V = ({
  children: e,
  className: t = "",
  xs: n,
  sm: r,
  md: a,
  lg: l,
  xl: d,
  ...c
}) => {
  const i = [
    n && E[`col-xs-${n}`],
    r && E[`col-sm-${r}`],
    a && E[`col-md-${a}`],
    l && E[`col-lg-${l}`],
    d && E[`col-xl-${d}`]
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ s.jsx(
    "div",
    {
      className: `${E.col} ${i} ${t}`,
      ...c,
      children: e
    }
  );
};
V.displayName = "Grid.Col";
const Qe = Ze;
Qe.Row = ce;
Qe.Col = V;
const js = "_carousel_a5ffy_1", ys = "_carouselInner_a5ffy_13", hs = "_fade_a5ffy_25", $s = "_carouselItem_a5ffy_35", Ns = "_active_a5ffy_55", ws = "_carouselItemContent_a5ffy_65", ks = "_control_a5ffy_75", Ts = "_prev_a5ffy_113", Cs = "_next_a5ffy_121", Es = "_indicators_a5ffy_131", Ss = "_indicator_a5ffy_131", Is = "_carouselCaption_a5ffy_183", y = {
  carousel: js,
  carouselInner: ys,
  fade: hs,
  carouselItem: $s,
  active: Ns,
  carouselItemContent: ws,
  control: ks,
  prev: Ts,
  next: Cs,
  indicators: Es,
  indicator: Ss,
  carouselCaption: Is
}, K = ({ children: e, interval: t = 5e3, fade: n = !1, className: r = "", ...a }) => {
  const [l, d] = k(0), c = v.Children.count(e), i = xe(null), u = ke(() => {
    d((m) => (m + 1) % c);
  }, [c]), $ = ke(() => {
    d((m) => (m - 1 + c) % c);
  }, [c]);
  return Y(() => {
    if (t > 0)
      return i.current = setInterval(u, t), () => {
        i.current && clearInterval(i.current);
      };
  }, [t, u]), /* @__PURE__ */ s.jsxs("div", { className: `${y.carousel} ${r}`, ...a, children: [
    /* @__PURE__ */ s.jsx("div", { className: `${y.carouselInner} ${n ? y.fade : ""}`, children: v.Children.map(e, (m, j) => /* @__PURE__ */ s.jsx(
      "div",
      {
        className: `${y.carouselItem} ${j === l ? y.active : ""}`,
        children: m
      }
    )) }),
    /* @__PURE__ */ s.jsx("button", { className: `${y.control} ${y.prev}`, onClick: $, "aria-label": "Previous Slide", children: "❮" }),
    /* @__PURE__ */ s.jsx("button", { className: `${y.control} ${y.next}`, onClick: u, "aria-label": "Next Slide", children: "❯" }),
    /* @__PURE__ */ s.jsx("div", { className: y.indicators, children: v.Children.map(e, (m, j) => /* @__PURE__ */ s.jsx(
      "button",
      {
        className: `${y.indicator} ${j === l ? y.active : ""}`,
        onClick: () => d(j),
        "aria-label": `Go to slide ${j + 1}`
      }
    )) })
  ] });
};
K.displayName = "Carousel";
K.Item = ({ children: e, className: t = "", ...n }) => /* @__PURE__ */ s.jsx("div", { className: `${y.carouselItemContent} ${t}`, ...n, children: e });
K.Item.displayName = "Carousel.Item";
K.Caption = ({ children: e, className: t = "", ...n }) => /* @__PURE__ */ s.jsx("div", { className: `${y.carouselCaption} ${t}`, ...n, children: e });
K.Caption.displayName = "Carousel.Caption";
const Ps = "_skeleton_1uj23_1", Os = "_skeletonCard_1uj23_129", Rs = "_skeletonImgSm_1uj23_147", As = "_skeletonTitleSm_1uj23_161", Bs = "_skeletonTextSm_1uj23_173", Gs = "_skeletonPriceSm_1uj23_185", zs = "_skeletonBtnSm_1uj23_197", Ls = "_fadeIn_1uj23_213", N = {
  skeleton: Ps,
  skeletonCard: Os,
  skeletonImgSm: Rs,
  skeletonTitleSm: As,
  skeletonTextSm: Bs,
  skeletonPriceSm: Gs,
  skeletonBtnSm: zs,
  fadeIn: Ls
};
var Ke = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Ie = v.createContext && /* @__PURE__ */ v.createContext(Ke), Ds = ["attr", "size", "title"];
function Fs(e, t) {
  if (e == null) return {};
  var n = Ms(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (a = 0; a < l.length; a++)
      r = l[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Ms(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function oe() {
  return oe = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, oe.apply(this, arguments);
}
function Pe(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ae(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pe(Object(n), !0).forEach(function(r) {
      qs(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Pe(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function qs(e, t, n) {
  return t = Ws(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Ws(e) {
  var t = Ys(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Ys(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function et(e) {
  return e && e.map((t, n) => /* @__PURE__ */ v.createElement(t.tag, ae({
    key: n
  }, t.attr), et(t.child)));
}
function ee(e) {
  return (t) => /* @__PURE__ */ v.createElement(Hs, oe({
    attr: ae({}, e.attr)
  }, t), et(e.child));
}
function Hs(e) {
  var t = (n) => {
    var {
      attr: r,
      size: a,
      title: l
    } = e, d = Fs(e, Ds), c = a || n.size || "1em", i;
    return n.className && (i = n.className), e.className && (i = (i ? i + " " : "") + e.className), /* @__PURE__ */ v.createElement("svg", oe({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, r, d, {
      className: i,
      style: ae(ae({
        color: e.color || n.color
      }, n.style), e.style),
      height: c,
      width: c,
      xmlns: "http://www.w3.org/2000/svg"
    }), l && /* @__PURE__ */ v.createElement("title", null, l), e.children);
  };
  return Ie !== void 0 ? /* @__PURE__ */ v.createElement(Ie.Consumer, null, (n) => t(n)) : t(Ke);
}
function Vs(e) {
  return ee({ attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20l44 0 0 44c0 11 9 20 20 20s20-9 20-20l0-44 44 0c11 0 20-9 20-20s-9-20-20-20l-44 0 0-44c0-11-9-20-20-20s-20 9-20 20l0 44-44 0c-11 0-20 9-20 20z" }, child: [] }] })(e);
}
function Us(e) {
  return ee({ attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" }, child: [] }] })(e);
}
function Js(e) {
  return ee({ attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z" }, child: [] }] })(e);
}
function Xs(e) {
  return ee({ attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { fill: "#D9D9D9", d: "M512.5 190.4l-94.4 191.3-211.2 30.7 152.8 149-36.1 210.3 188.9-99.3 188.9 99.2-36.1-210.3 152.8-148.9-211.2-30.7z" }, child: [] }, { tag: "path", attr: { d: "M908.6 352.8l-253.9-36.9L541.2 85.8c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L370.3 315.9l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1L239 839.4a31.95 31.95 0 0 0 46.4 33.7l227.1-119.4 227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM665.3 561.3l36.1 210.3-188.9-99.2-188.9 99.3 36.1-210.3-152.8-149 211.2-30.7 94.4-191.3 94.4 191.3 211.2 30.7-152.8 148.9z" }, child: [] }] })(e);
}
function Zs({ rating: e, max: t = 5 }) {
  const n = Math.floor(e), r = e % 1 >= 0.5, a = t - n - (r ? 1 : 0);
  return /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", gap: "2px", color: "#f5c518" }, children: [
    Array.from({ length: n }, (l, d) => /* @__PURE__ */ s.jsx(Us, {}, `full-${d}`)),
    r && /* @__PURE__ */ s.jsx(Xs, {}, "half"),
    Array.from({ length: a }, (l, d) => /* @__PURE__ */ s.jsx(Js, {}, `empty-${d}`))
  ] });
}
const Qs = "_productCard_2309b_1", Ks = {
  productCard: Qs
};
function _r({
  products: e,
  isLoading: t = !1,
  skeletonCount: n = 8,
  renderAddToCart: r
}) {
  return !e.length && !t ? /* @__PURE__ */ s.jsx("p", { className: "text-center text-muted", children: "No products found." }) : /* @__PURE__ */ s.jsx(ce, { className: "g-4 justify-content-center", children: t ? Array.from({ length: n }).map((a, l) => /* @__PURE__ */ s.jsx(
    V,
    {
      xs: 12,
      sm: 6,
      md: 4,
      lg: 3,
      xl: 3,
      className: "product-col mb-4",
      children: /* @__PURE__ */ s.jsxs("div", { className: N.skeletonCard, children: [
        /* @__PURE__ */ s.jsx("div", { className: `${N.skeleton} ${N.skeletonImgSm}` }),
        /* @__PURE__ */ s.jsx("div", { className: `${N.skeleton} ${N.skeletonTitleSm}` }),
        /* @__PURE__ */ s.jsx("div", { className: `${N.skeleton} ${N.skeletonTextSm}` }),
        /* @__PURE__ */ s.jsx("div", { className: `${N.skeleton} ${N.skeletonPriceSm}` }),
        /* @__PURE__ */ s.jsx("div", { className: `${N.skeleton} ${N.skeletonBtnSm}` })
      ] })
    },
    `skeleton-${l}`
  )) : e.map((a, l) => {
    var d;
    return /* @__PURE__ */ s.jsx(
      V,
      {
        xs: 12,
        sm: 6,
        md: 4,
        lg: 3,
        xl: 3,
        className: `product-col mb-4 ${N.fadeIn}`,
        style: { animationDelay: `${l * 0.05}s` },
        children: /* @__PURE__ */ s.jsxs(
          G,
          {
            className: `h-100 shadow-lg border-1 hover-zoom ${Ks.productCard}`,
            children: [
              /* @__PURE__ */ s.jsx(ve, { href: `/productDetails/${a.id}`, children: /* @__PURE__ */ s.jsx(
                G.Img,
                {
                  variant: "top",
                  src: a.image,
                  alt: a.name,
                  className: "p-2 rounded",
                  fill: !0
                }
              ) }),
              /* @__PURE__ */ s.jsxs(G.Body, { className: "text-center", children: [
                /* @__PURE__ */ s.jsx(G.Title, { className: "fs-5 text-dark", children: a.name }),
                /* @__PURE__ */ s.jsx(G.Text, { className: "text-muted small mb-1", children: a.category }),
                /* @__PURE__ */ s.jsxs(G.Text, { className: "fw-bold text-success fs-6 mb-2", children: [
                  "₹",
                  a.price ?? "—"
                ] }),
                /* @__PURE__ */ s.jsx("div", { style: { paddingLeft: "30%" }, children: /* @__PURE__ */ s.jsx(Zs, { rating: ((d = a.reviews[0]) == null ? void 0 : d.rating) ?? 0, max: 5 }) })
              ] }),
              /* @__PURE__ */ s.jsx(G.Footer, { className: "bg-white border-0 text-center", children: r ? r(a) : /* @__PURE__ */ s.jsxs(Be, { variant: "success", size: "sm", children: [
                /* @__PURE__ */ s.jsx(Vs, { className: "me-2" }),
                " Add to Cart"
              ] }) })
            ]
          }
        )
      },
      a.id
    );
  }) });
}
function ur({
  search: e,
  setSearch: t,
  sortBy: n,
  setSortBy: r
}) {
  return /* @__PURE__ */ s.jsxs(ce, { className: "mb-4 justify-content-center", gap: 0, children: [
    /* @__PURE__ */ s.jsx(V, { md: 4, className: "mb-2", children: /* @__PURE__ */ s.jsxs(T, { children: [
      /* @__PURE__ */ s.jsx(T.Text, { children: "🔍" }),
      /* @__PURE__ */ s.jsx(
        b.Control,
        {
          type: "text",
          placeholder: "Search by name...",
          value: e,
          onChange: (a) => t(a.target.value),
          id: "search-featured"
        }
      )
    ] }) }),
    /* @__PURE__ */ s.jsx(V, { md: 2, className: "mb-2", children: /* @__PURE__ */ s.jsxs(b.Select, { value: n, onChange: (a) => r(a.target.value), "aria-label": "Sort products", id: "sort-featured", className: "py-2 text-secondary", children: [
      /* @__PURE__ */ s.jsx("option", { value: "", children: "Sort by..." }),
      /* @__PURE__ */ s.jsx("option", { value: "name", children: "Name (A-Z)" }),
      /* @__PURE__ */ s.jsx("option", { value: "price", children: "Price (Low-High)" })
    ] }) })
  ] });
}
function er(e) {
  return ee({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" }, child: [] }] })(e);
}
function mr({
  onSearch: e,
  onFetchResults: t,
  placeholder: n = "Search...",
  categories: r
}) {
  const [a, l] = k(""), [d, c] = k("All"), [i, u] = k([]), [$, m] = k(["All"]), [j, C] = k(!1), [te, A] = k(!1), B = xe(null);
  Y(() => {
    r && r.length > 0 && m(["All", ...r.filter((f) => f !== "All")]);
  }, [r]), Y(() => {
    if (!t || !a.trim()) {
      u([]), A(!1);
      return;
    }
    C(!0);
    const U = setTimeout(async () => {
      try {
        const z = await t(a, d);
        if (u(z.slice(0, 5)), !r || r.length === 0) {
          const de = Array.from(new Set(z.map((_e) => _e.category)));
          m(["All", ...de]);
        }
        A(!0);
      } catch (z) {
        console.error("Error fetching results:", z);
      } finally {
        C(!1);
      }
    }, 300);
    return () => clearTimeout(U);
  }, [a, d, t]), Y(() => {
    const f = (U) => {
      B.current && !B.current.contains(U.target) && A(!1);
    };
    return document.addEventListener("mousedown", f), () => document.removeEventListener("mousedown", f);
  }, []);
  const ie = (f) => {
    f.preventDefault(), e(a, d), A(!1);
  };
  return /* @__PURE__ */ s.jsxs("div", { className: "position-relative", ref: B, style: { minWidth: "400px" }, children: [
    /* @__PURE__ */ s.jsx(b, { onSubmit: ie, children: /* @__PURE__ */ s.jsxs(T, { children: [
      /* @__PURE__ */ s.jsx(
        b.Select,
        {
          style: { maxWidth: "120px" },
          value: d,
          onChange: (f) => c(f.target.value),
          children: $.map((f) => /* @__PURE__ */ s.jsx("option", { children: f }, f))
        }
      ),
      /* @__PURE__ */ s.jsx(
        b.Control,
        {
          type: "text",
          placeholder: n,
          value: a,
          onChange: (f) => l(f.target.value),
          onFocus: () => a && i.length > 0 && A(!0)
        }
      ),
      /* @__PURE__ */ s.jsx(Be, { type: "submit", variant: "success", "aria-label": "Search", children: /* @__PURE__ */ s.jsx(er, {}) })
    ] }) }),
    te && /* @__PURE__ */ s.jsxs(
      W,
      {
        className: "position-absolute w-100 shadow-sm bg-white",
        style: { zIndex: 1e3 },
        children: [
          j && /* @__PURE__ */ s.jsxs(W.Item, { className: "text-center", children: [
            /* @__PURE__ */ s.jsx(qn, { animation: "border", size: "sm" }),
            " Loading..."
          ] }),
          !j && i.length === 0 && /* @__PURE__ */ s.jsx(W.Item, { className: "text-center text-muted", children: "No results" }),
          !j && i.map((f) => /* @__PURE__ */ s.jsxs(
            W.Item,
            {
              action: !0,
              as: "Link",
              href: `/productDetails/${f.id}`,
              style: { color: "green" },
              children: [
                f.name,
                " ",
                /* @__PURE__ */ s.jsxs("span", { className: "text-muted small", children: [
                  "(",
                  f.category,
                  ")"
                ] })
              ]
            },
            f.id
          ))
        ]
      }
    )
  ] });
}
const tr = "_container_1ilp9_1", nr = "_fluid_1ilp9_21", Oe = {
  container: tr,
  fluid: nr
}, pr = ({
  children: e,
  fluid: t = !1,
  className: n = "",
  ...r
}) => /* @__PURE__ */ s.jsx(
  "div",
  {
    className: `${t ? Oe.fluid : Oe.container} ${n}`,
    ...r,
    children: e
  }
);
export {
  ar as Alert,
  lr as Badge,
  Be as Button,
  G as Card,
  K as Carousel,
  V as Col,
  pr as Container,
  le as Dropdown,
  b as Form,
  Qe as Grid,
  T as InputGroup,
  W as ListGroup,
  or as Modal,
  Q as NavBar,
  _r as ProductGrid,
  Zs as Rating,
  ce as Row,
  mr as SearchBox,
  ur as SearchSortBar,
  qn as Spinner,
  dr as Table,
  cr as ToastProvider,
  ir as useToast
};
//# sourceMappingURL=index.mjs.map

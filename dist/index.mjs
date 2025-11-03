import v, { forwardRef as nt, useEffect as J, useState as C, createContext as Te, useRef as ue, useContext as st, isValidElement as ot, useCallback as ye } from "react";
import at from "react-dom";
var te = { exports: {} }, H = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var he;
function lt() {
  if (he) return H;
  he = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(s, a, l) {
    var d = null;
    if (l !== void 0 && (d = "" + l), a.key !== void 0 && (d = "" + a.key), "key" in a) {
      l = {};
      for (var c in a)
        c !== "key" && (l[c] = a[c]);
    } else l = a;
    return a = l.ref, {
      $$typeof: e,
      type: s,
      key: d,
      ref: a !== void 0 ? a : null,
      props: l
    };
  }
  return H.Fragment = t, H.jsx = r, H.jsxs = r, H;
}
var V = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $e;
function ct() {
  return $e || ($e = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(o) {
      if (o == null) return null;
      if (typeof o == "function")
        return o.$$typeof === et ? null : o.displayName || o.name || null;
      if (typeof o == "string") return o;
      switch (o) {
        case O:
          return "Fragment";
        case He:
          return "Profiler";
        case Y:
          return "StrictMode";
        case Xe:
          return "Suspense";
        case Ze:
          return "SuspenseList";
        case Ke:
          return "Activity";
      }
      if (typeof o == "object")
        switch (typeof o.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), o.$$typeof) {
          case K:
            return "Portal";
          case Ue:
            return o.displayName || "Context";
          case Ve:
            return (o._context.displayName || "Context") + ".Consumer";
          case Je:
            var _ = o.render;
            return o = o.displayName, o || (o = _.displayName || _.name || "", o = o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef"), o;
          case Qe:
            return _ = o.displayName || null, _ !== null ? _ : e(o.type) || "Memo";
          case le:
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
    function r(o) {
      try {
        t(o);
        var _ = !1;
      } catch {
        _ = !0;
      }
      if (_) {
        _ = console;
        var p = _.error, f = typeof Symbol == "function" && Symbol.toStringTag && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return p.call(
          _,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          f
        ), t(o);
      }
    }
    function s(o) {
      if (o === O) return "<>";
      if (typeof o == "object" && o !== null && o.$$typeof === le)
        return "<...>";
      try {
        var _ = e(o);
        return _ ? "<" + _ + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var o = ce.A;
      return o === null ? null : o.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function d(o) {
      if (ge.call(o, "key")) {
        var _ = Object.getOwnPropertyDescriptor(o, "key").get;
        if (_ && _.isReactWarning) return !1;
      }
      return o.key !== void 0;
    }
    function c(o, _) {
      function p() {
        fe || (fe = !0, console.error(
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
      return xe[o] || (xe[o] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), o = this.props.ref, o !== void 0 ? o : null;
    }
    function u(o, _, p, f, ee, de) {
      var x = p.ref;
      return o = {
        $$typeof: B,
        type: o,
        key: _,
        props: p,
        _owner: f
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
        value: ee
      }), Object.defineProperty(o, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: de
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    }
    function j(o, _, p, f, ee, de) {
      var x = _.children;
      if (x !== void 0)
        if (f)
          if (tt(x)) {
            for (f = 0; f < x.length; f++)
              m(x[f]);
            Object.freeze && Object.freeze(x);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(x);
      if (ge.call(_, "key")) {
        x = e(o);
        var G = Object.keys(_).filter(function(rt) {
          return rt !== "key";
        });
        f = 0 < G.length ? "{key: someKey, " + G.join(": ..., ") + ": ...}" : "{key: someKey}", je[x + f] || (G = 0 < G.length ? "{" + G.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          f,
          x,
          G,
          x
        ), je[x + f] = !0);
      }
      if (x = null, p !== void 0 && (r(p), x = "" + p), d(_) && (r(_.key), x = "" + _.key), "key" in _) {
        p = {};
        for (var _e in _)
          _e !== "key" && (p[_e] = _[_e]);
      } else p = _;
      return x && c(
        p,
        typeof o == "function" ? o.displayName || o.name || "Unknown" : o
      ), u(
        o,
        x,
        p,
        a(),
        ee,
        de
      );
    }
    function m(o) {
      $(o) ? o._store && (o._store.validated = 1) : typeof o == "object" && o !== null && o.$$typeof === le && (o._payload.status === "fulfilled" ? $(o._payload.value) && o._payload.value._store && (o._payload.value._store.validated = 1) : o._store && (o._store.validated = 1));
    }
    function $(o) {
      return typeof o == "object" && o !== null && o.$$typeof === B;
    }
    var g = v, B = Symbol.for("react.transitional.element"), K = Symbol.for("react.portal"), O = Symbol.for("react.fragment"), Y = Symbol.for("react.strict_mode"), He = Symbol.for("react.profiler"), Ve = Symbol.for("react.consumer"), Ue = Symbol.for("react.context"), Je = Symbol.for("react.forward_ref"), Xe = Symbol.for("react.suspense"), Ze = Symbol.for("react.suspense_list"), Qe = Symbol.for("react.memo"), le = Symbol.for("react.lazy"), Ke = Symbol.for("react.activity"), et = Symbol.for("react.client.reference"), ce = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ge = Object.prototype.hasOwnProperty, tt = Array.isArray, ie = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(o) {
        return o();
      }
    };
    var fe, xe = {}, ve = g.react_stack_bottom_frame.bind(
      g,
      l
    )(), be = ie(s(l)), je = {};
    V.Fragment = O, V.jsx = function(o, _, p) {
      var f = 1e4 > ce.recentlyCreatedOwnerStacks++;
      return j(
        o,
        _,
        p,
        !1,
        f ? Error("react-stack-top-frame") : ve,
        f ? ie(s(o)) : be
      );
    }, V.jsxs = function(o, _, p) {
      var f = 1e4 > ce.recentlyCreatedOwnerStacks++;
      return j(
        o,
        _,
        p,
        !0,
        f ? Error("react-stack-top-frame") : ve,
        f ? ie(s(o)) : be
      );
    };
  })()), V;
}
var Ne;
function it() {
  return Ne || (Ne = 1, process.env.NODE_ENV === "production" ? te.exports = lt() : te.exports = ct()), te.exports;
}
var n = it();
const dt = "_button_1vcgi_1", _t = "_primary_1vcgi_9", ut = "_secondary_1vcgi_18", mt = "_success_1vcgi_27", pt = "_danger_1vcgi_36", gt = "_sm_1vcgi_45", ft = "_md_1vcgi_50", xt = "_lg_1vcgi_55", vt = "_disabled_1vcgi_60", re = {
  button: dt,
  primary: _t,
  secondary: ut,
  success: mt,
  danger: pt,
  sm: gt,
  md: ft,
  lg: xt,
  disabled: vt
}, Se = ({
  children: e,
  variant: t = "primary",
  size: r = "md",
  disabled: s = !1,
  mr: a = "",
  ml: l = "",
  mt: d = "",
  mb: c = "",
  ...i
}) => /* @__PURE__ */ n.jsx(
  "button",
  {
    className: `${re.button} ${re[t]} ${re[r]} ${s ? re.disabled : ""}`,
    style: {
      marginRight: a,
      marginLeft: l,
      marginTop: d,
      marginBottom: c
    },
    disabled: s,
    ...i,
    children: e
  }
), bt = ({
  src: e,
  alt: t = "",
  width: r,
  height: s,
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
  return /* @__PURE__ */ n.jsx(
    "img",
    {
      src: typeof e == "string" ? e : e.src,
      alt: t,
      width: r,
      height: s,
      style: { ...l, ...c },
      ...d
    }
  );
};
function Ee(e) {
  var t, r, s = "";
  if (typeof e == "string" || typeof e == "number") s += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (r = Ee(e[t])) && (s && (s += " "), s += r);
  } else for (r in e) e[r] && (s && (s += " "), s += r);
  return s;
}
function I() {
  for (var e, t, r = 0, s = "", a = arguments.length; r < a; r++) (e = arguments[r]) && (t = Ee(e)) && (s && (s += " "), s += t);
  return s;
}
const jt = "_card_zxwhi_1", yt = "_cardHeader_zxwhi_13", ht = "_cardBody_zxwhi_20", $t = "_cardFooter_zxwhi_25", Nt = "_cardTitle_zxwhi_33", wt = "_cardText_zxwhi_45", kt = "_cardImageWrapper_zxwhi_51", Ct = "_cardImage_zxwhi_51", w = {
  card: jt,
  cardHeader: yt,
  cardBody: ht,
  cardFooter: $t,
  cardTitle: Nt,
  cardText: wt,
  cardImageWrapper: kt,
  cardImage: Ct
}, Ie = nt(
  ({ children: e, className: t = "", ...r }, s) => /* @__PURE__ */ n.jsx("div", { ref: s, className: I(w.card, t), ...r, children: e })
);
Ie.displayName = "Card";
const Pe = ({ children: e, className: t = "", ...r }) => /* @__PURE__ */ n.jsx("div", { className: I(w.cardHeader, t), ...r, children: e });
Pe.displayName = "Card.Header";
const Re = ({ children: e, className: t = "", ...r }) => /* @__PURE__ */ n.jsx("div", { className: I(w.cardBody, t), ...r, children: e });
Re.displayName = "Card.Body";
const Oe = ({ children: e, className: t = "", ...r }) => /* @__PURE__ */ n.jsx("div", { className: I(w.cardFooter, t), ...r, children: e });
Oe.displayName = "Card.Footer";
const Ae = ({
  children: e,
  className: t = "",
  as: r = "h3",
  ...s
}) => /* @__PURE__ */ n.jsx(r, { className: I(w.cardTitle, t), ...s, children: e });
Ae.displayName = "Card.Title";
const Be = ({ children: e, className: t = "", ...r }) => /* @__PURE__ */ n.jsx("p", { className: I(w.cardText, t), ...r, children: e });
Be.displayName = "Card.Text";
const Ge = ({
  variant: e,
  className: t = "",
  alt: r,
  fill: s,
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
  const u = !!s;
  return /* @__PURE__ */ n.jsx(
    "div",
    {
      className: I(w.cardImageWrapper, i, t),
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
          className: I(w.cardImage),
          style: { objectFit: "cover", ...d },
          ...c
        }
      )
    }
  );
};
Ge.displayName = "Card.Img";
const A = Object.assign(Ie, {
  Header: Pe,
  Body: Re,
  Footer: Oe,
  Title: Ae,
  Text: Be,
  Img: Ge
}), Tt = "_modalBackdrop_8wtvg_1", St = "_modalContent_8wtvg_27", Et = "_modalHeader_8wtvg_53", It = "_closeBtn_8wtvg_69", Pt = "_modalBody_8wtvg_85", Rt = "_modalFooter_8wtvg_95", z = {
  modalBackdrop: Tt,
  modalContent: St,
  modalHeader: Et,
  closeBtn: It,
  modalBody: Pt,
  modalFooter: Rt
}, rs = ({ show: e, onClose: t, title: r, children: s, footer: a }) => (J(() => {
  const l = (d) => {
    d.key === "Escape" && t();
  };
  return document.addEventListener("keydown", l), () => document.removeEventListener("keydown", l);
}, [t]), e ? at.createPortal(
  /* @__PURE__ */ n.jsx("div", { className: z.modalBackdrop, onClick: t, children: /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: z.modalContent,
      onClick: (l) => l.stopPropagation(),
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: z.modalHeader, children: [
          /* @__PURE__ */ n.jsx("h5", { children: r }),
          /* @__PURE__ */ n.jsx("button", { className: z.closeBtn, onClick: t, children: "×" })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: z.modalBody, children: s }),
        a && /* @__PURE__ */ n.jsx("div", { className: z.modalFooter, children: a })
      ]
    }
  ) }),
  document.body
) : null), me = ({
  href: e,
  children: t,
  ...r
}) => /* @__PURE__ */ n.jsx("a", { href: e, ...r, children: t }), Ot = "_navbar_om48y_3", At = "_brand_om48y_23", Bt = "_toggle_om48y_43", Gt = "_bar_om48y_65", zt = "_collapse_om48y_79", Lt = "_show_om48y_95", Ft = "_nav_om48y_3", Dt = "_navLink_om48y_123", Mt = "_active_om48y_163", h = {
  navbar: Ot,
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
function we(e, t) {
  return v.isValidElement(e) && typeof e.type == "function" && e.type.displayName === t;
}
const X = ({
  bg: e = "light",
  variant: t = "light",
  expand: r = "lg",
  children: s,
  className: a = ""
}) => {
  const [l, d] = C(!1);
  return /* @__PURE__ */ n.jsx(
    "nav",
    {
      className: `${h.navbar} ${h[`bg-${e}`]} ${h[`navbar-${t}`]} ${h[`expand-${r}`]} ${a}`,
      children: v.Children.map(s, (c) => v.isValidElement(c) ? we(c, "NavBar.Toggle") ? v.cloneElement(c, {
        onClick: () => d((i) => !i)
      }) : we(c, "NavBar.Collapse") ? v.cloneElement(c, {
        show: l
      }) : c : c)
    }
  );
};
X.displayName = "NavBar";
const ze = ({ href: e = "/", children: t }) => /* @__PURE__ */ n.jsx(
  me,
  {
    href: e,
    className: `${h.brand} d-flex align-items-center text-decoration-none`,
    children: t
  }
);
ze.displayName = "NavBar.Brand";
const Le = ({ ariaControls: e, onClick: t }) => /* @__PURE__ */ n.jsxs(
  "button",
  {
    type: "button",
    className: h.toggle,
    "aria-controls": e,
    "aria-label": "Toggle navigation",
    onClick: t,
    children: [
      /* @__PURE__ */ n.jsx("span", { className: h.bar }),
      /* @__PURE__ */ n.jsx("span", { className: h.bar }),
      /* @__PURE__ */ n.jsx("span", { className: h.bar })
    ]
  }
);
Le.displayName = "NavBar.Toggle";
const Fe = ({ id: e, children: t, show: r = !1 }) => /* @__PURE__ */ n.jsx("div", { id: e, className: `${h.collapse} ${r ? h.show : ""}`, children: t });
Fe.displayName = "NavBar.Collapse";
const pe = ({ children: e, className: t = "" }) => /* @__PURE__ */ n.jsx("ul", { className: `${h.nav} ${t}`, children: e }), qt = ({ href: e, children: t, active: r = !1 }) => /* @__PURE__ */ n.jsx("li", { children: /* @__PURE__ */ n.jsx(me, { href: e, className: `${h.navLink} ${r ? h.active : ""}`, children: t }) });
pe.Link = qt;
pe.displayName = "NavBar.Nav";
X.Brand = ze;
X.Toggle = Le;
X.Collapse = Fe;
X.Nav = pe;
const Wt = "_form_ujlhb_1", Yt = "_formGroup_ujlhb_13", Ht = "_label_ujlhb_25", Vt = "_input_ujlhb_35", Ut = "_textarea_ujlhb_37", Jt = "_select_ujlhb_39", S = {
  form: Wt,
  formGroup: Yt,
  label: Ht,
  input: Vt,
  textarea: Ut,
  select: Jt
}, b = ({ children: e, className: t = "", ...r }) => /* @__PURE__ */ n.jsx("form", { className: `${S.form} ${t}`, ...r, children: e });
b.Group = ({ children: e, className: t = "", ...r }) => /* @__PURE__ */ n.jsx("div", { className: `${S.formGroup} ${t}`, ...r, children: e });
b.Group.displayName = "Form.Group";
b.Label = ({ children: e, htmlFor: t, className: r = "", ...s }) => /* @__PURE__ */ n.jsx("label", { htmlFor: t, className: `${S.label} ${r}`, ...s, children: e });
b.Label.displayName = "Form.Label";
b.Input = ({ className: e = "", ...t }) => /* @__PURE__ */ n.jsx("input", { className: `${S.input} ${e}`, ...t });
b.Input.displayName = "Form.Input";
b.TextArea = ({ className: e = "", ...t }) => /* @__PURE__ */ n.jsx("textarea", { className: `${S.textarea} ${e}`, ...t });
b.TextArea.displayName = "Form.TextArea";
b.Select = ({ className: e = "", ...t }) => /* @__PURE__ */ n.jsx("select", { className: `${S.select} ${e}`, ...t });
b.Select.displayName = "Form.Select";
b.Control = ({ as: e = "input", className: t = "", ...r }) => {
  switch (e) {
    case "textarea":
      return /* @__PURE__ */ n.jsx("textarea", { className: `${S.textarea} ${t}`, ...r });
    case "select":
      return /* @__PURE__ */ n.jsx("select", { className: `${S.select} ${t}`, ...r });
    case "input":
    default:
      return /* @__PURE__ */ n.jsx("input", { className: `${S.input} ${t}`, ...r });
  }
};
b.Control.displayName = "Form.Control";
const Xt = "_inputGroup_lxf65_1", Zt = "_inputGroupText_lxf65_71", Qt = "_inputGroupPrepend_lxf65_105", Kt = "_inputGroupAppend_lxf65_107", er = "_inputGroupButton_lxf65_117", q = {
  inputGroup: Xt,
  "dropdown-toggle": "_dropdown-toggle_lxf65_15",
  "dropdown-menu": "_dropdown-menu_lxf65_15",
  inputGroupText: Zt,
  inputGroupPrepend: Qt,
  inputGroupAppend: Kt,
  inputGroupButton: er,
  "inputGroup-sm": "_inputGroup-sm_lxf65_127",
  "inputGroup-lg": "_inputGroup-lg_lxf65_143"
}, k = ({ children: e, className: t = "", size: r = "md", ...s }) => {
  const a = [
    q.inputGroup,
    q[`inputGroup-${r}`] || "",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx("div", { className: a, ...s, children: e });
};
k.Text = ({ children: e, className: t = "", ...r }) => /* @__PURE__ */ n.jsx("span", { className: `${q.inputGroupText} ${t}`, ...r, children: e });
k.Text.displayName = "InputGroup.Text";
k.Prepend = ({ children: e, className: t = "", ...r }) => /* @__PURE__ */ n.jsx("div", { className: `${q.inputGroupPrepend} ${t}`, ...r, children: e });
k.Prepend.displayName = "InputGroup.Prepend";
k.Append = ({ children: e, className: t = "", ...r }) => /* @__PURE__ */ n.jsx("div", { className: `${q.inputGroupAppend} ${t}`, ...r, children: e });
k.Append.displayName = "InputGroup.Append";
k.Button = ({ children: e, className: t = "", ...r }) => /* @__PURE__ */ n.jsx("div", { className: `${q.inputGroupButton} ${t}`, ...r, children: e });
k.Button.displayName = "InputGroup.Button";
const tr = "_dropdown_1b4le_3", rr = "_toggle_1b4le_15", nr = "_menu_1b4le_113", sr = "_show_1b4le_151", or = "_fadeIn_1b4le_1", ar = "_end_1b4le_163", lr = "_item_1b4le_175", cr = "_divider_1b4le_235", E = {
  dropdown: tr,
  toggle: rr,
  "outline-light": "_outline-light_1b4le_87",
  menu: nr,
  show: sr,
  fadeIn: or,
  end: ar,
  item: lr,
  divider: cr
}, De = Te(void 0), Me = () => {
  const e = st(De);
  if (!e)
    throw new Error("Dropdown.Toggle, Dropdown.Menu, and Dropdown.Item must be used within a <Dropdown>");
  return e;
}, oe = ({ align: e = "start", children: t, className: r = "" }) => {
  const [s, a] = C(!1), l = ue(null), d = () => a((i) => !i), c = () => a(!1);
  return J(() => {
    const i = (u) => {
      l.current && !l.current.contains(u.target) && c();
    };
    return document.addEventListener("mousedown", i), () => document.removeEventListener("mousedown", i);
  }, []), /* @__PURE__ */ n.jsx(De.Provider, { value: { show: s, toggle: d, align: e }, children: /* @__PURE__ */ n.jsx("div", { className: `${E.dropdown} ${r}`, ref: l, children: t }) });
}, ir = ({
  variant: e = "primary",
  id: t,
  children: r,
  className: s = "",
  ...a
}) => {
  const { toggle: l } = Me();
  return /* @__PURE__ */ n.jsx(
    "button",
    {
      id: t,
      type: "button",
      className: `${E.toggle} ${E[e] || ""} ${s}`,
      onClick: l,
      ...a,
      children: r
    }
  );
}, dr = ({
  children: e,
  className: t = "",
  ...r
}) => {
  const { show: s, align: a } = Me();
  return /* @__PURE__ */ n.jsx(
    "ul",
    {
      className: `${E.menu} ${s ? E.show : ""} ${a === "end" ? E.end : ""} ${t}`,
      ...r,
      children: e
    }
  );
}, _r = ({
  href: e,
  onClick: t,
  children: r,
  className: s = "",
  ...a
}) => /* @__PURE__ */ n.jsx("li", { children: e ? /* @__PURE__ */ n.jsx("a", { href: e, className: `${E.item} ${s}`, ...a, children: r }) : /* @__PURE__ */ n.jsx(
  "button",
  {
    type: "button",
    onClick: t,
    className: `${E.item} ${s}`,
    ...a,
    children: r
  }
) }), ur = () => /* @__PURE__ */ n.jsx("li", { className: E.divider, role: "separator" });
oe.Toggle = ir;
oe.Menu = dr;
oe.Item = _r;
oe.Divider = ur;
const mr = "_alert_13bqy_1", pr = "_heading_13bqy_17", gr = "_message_13bqy_29", fr = "_primary_13bqy_39", xr = "_secondary_13bqy_51", vr = "_success_13bqy_63", br = "_danger_13bqy_75", jr = "_warning_13bqy_87", yr = "_info_13bqy_99", hr = "_light_13bqy_111", $r = "_dark_13bqy_123", Nr = "_dismissible_13bqy_137", wr = "_closeBtn_13bqy_145", L = {
  alert: mr,
  heading: pr,
  message: gr,
  primary: fr,
  secondary: xr,
  success: vr,
  danger: br,
  warning: jr,
  info: yr,
  light: hr,
  dark: $r,
  dismissible: Nr,
  closeBtn: wr
}, ns = ({
  variant: e = "primary",
  dismissible: t = !1,
  onClose: r,
  heading: s,
  children: a,
  className: l = "",
  ...d
}) => {
  const [c, i] = C(!0);
  if (!c) return null;
  const u = () => {
    i(!1), r == null || r();
  };
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `${L.alert} ${L[e]} ${t ? L.dismissible : ""} ${l}`,
      role: "alert",
      ...d,
      children: [
        s && /* @__PURE__ */ n.jsx("h4", { className: L.heading, children: s }),
        /* @__PURE__ */ n.jsx("div", { className: L.message, children: a }),
        t && /* @__PURE__ */ n.jsx(
          "button",
          {
            type: "button",
            className: L.closeBtn,
            "aria-label": "Close",
            onClick: u,
            children: /* @__PURE__ */ n.jsx("span", { "aria-hidden": "true", children: "×" })
          }
        )
      ]
    }
  );
}, kr = "_spinner_158ug_1", Cr = "_border_158ug_11", Tr = "_grow_158ug_29", Sr = "_sm_158ug_47", Er = "_lg_158ug_59", Ir = "_primary_158ug_73", Pr = "_secondary_158ug_81", Rr = "_success_158ug_89", Or = "_danger_158ug_97", Ar = "_warning_158ug_105", Br = "_info_158ug_113", Gr = "_light_158ug_121", zr = "_dark_158ug_129", F = {
  spinner: kr,
  border: Cr,
  "spinner-border": "_spinner-border_158ug_1",
  grow: Tr,
  "spinner-grow": "_spinner-grow_158ug_1",
  sm: Sr,
  lg: Er,
  primary: Ir,
  secondary: Pr,
  success: Rr,
  danger: Or,
  warning: Ar,
  info: Br,
  light: Gr,
  dark: zr,
  "visually-hidden": "_visually-hidden_158ug_185"
}, Lr = ({
  animation: e = "border",
  variant: t = "primary",
  size: r,
  as: s = "div",
  role: a = "status",
  label: l,
  className: d = "",
  ...c
}) => {
  const i = [
    F.spinner,
    e === "grow" ? F.grow : F.border,
    F[t],
    r === "sm" ? F.sm : "",
    r === "lg" ? F.lg : "",
    d
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx(s, { className: i, role: a, ...c, children: l ? /* @__PURE__ */ n.jsx("span", { className: "visually-hidden", children: l }) : null });
}, Fr = "_badge_ovldc_1", Dr = "_sm_ovldc_31", Mr = "_lg_ovldc_43", qr = "_pill_ovldc_57", Wr = "_dot_ovldc_71", D = {
  badge: Fr,
  sm: Dr,
  lg: Mr,
  pill: qr,
  dot: Wr,
  "badge-primary": "_badge-primary_ovldc_89",
  "badge-secondary": "_badge-secondary_ovldc_99",
  "badge-success": "_badge-success_ovldc_109",
  "badge-danger": "_badge-danger_ovldc_119",
  "badge-warning": "_badge-warning_ovldc_129",
  "badge-info": "_badge-info_ovldc_139",
  "badge-light": "_badge-light_ovldc_149",
  "badge-dark": "_badge-dark_ovldc_159"
}, ss = ({
  children: e,
  variant: t = "primary",
  bg: r,
  pill: s = !1,
  size: a = "md",
  className: l = "",
  title: d,
  count: c,
  dot: i = !1,
  ...u
}) => {
  const j = r ?? t, m = [
    D.badge,
    D[`badge-${j}`],
    s ? D.pill : "",
    a === "sm" ? D.sm : a === "lg" ? D.lg : "",
    i ? D.dot : "",
    l
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx(
    "span",
    {
      className: m,
      title: d,
      "aria-label": typeof c < "u" ? `${c}` : void 0,
      ...u,
      children: i ? null : typeof c < "u" ? c : e
    }
  );
}, Yr = "_toastContainer_33tzd_1", Hr = "_toast_33tzd_1", Vr = "_success_33tzd_121", Ur = "_error_33tzd_129", Jr = "_info_33tzd_137", Xr = "_loading_33tzd_145", Zr = "_icon_33tzd_153", U = {
  toastContainer: Yr,
  "top-left": "_top-left_33tzd_17",
  "top-center": "_top-center_33tzd_29",
  "top-right": "_top-right_33tzd_43",
  "bottom-left": "_bottom-left_33tzd_55",
  "bottom-center": "_bottom-center_33tzd_67",
  "bottom-right": "_bottom-right_33tzd_81",
  toast: Hr,
  success: Vr,
  error: Ur,
  info: Jr,
  loading: Xr,
  icon: Zr
}, Qr = Te(void 0);
let Kr = 0;
const os = ({
  children: e,
  position: t = "top-right"
}) => {
  const [r, s] = C([]), a = (c, i = "info", u = 3e3, j) => {
    const m = Kr++, $ = j || t;
    return s((g) => [...g, { id: m, message: c, type: i, position: $ }]), i !== "loading" && setTimeout(() => l(m), u), m;
  }, l = (c) => {
    s((i) => i.filter((u) => u.id !== c));
  }, d = {
    "top-left": [],
    "top-center": [],
    "top-right": [],
    "bottom-left": [],
    "bottom-center": [],
    "bottom-right": []
  };
  return r.forEach((c) => d[c.position].push(c)), /* @__PURE__ */ n.jsxs(Qr.Provider, { value: { addToast: a, removeToast: l }, children: [
    e,
    Object.entries(d).map(
      ([c, i]) => i.length > 0 ? /* @__PURE__ */ n.jsx("div", { className: `${U.toastContainer} ${U[c]}`, children: i.map((u) => /* @__PURE__ */ n.jsxs("div", { className: `${U.toast} ${U[u.type]}`, children: [
        /* @__PURE__ */ n.jsx("span", { className: U.icon, children: en(u.type) }),
        u.message
      ] }, u.id)) }, c) : null
    )
  ] });
}, en = (e) => {
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
}, tn = "_responsive_seov6_3", rn = "_table_seov6_127", nn = "_bordered_seov6_167", sn = "_hover_seov6_189", on = "_striped_seov6_199", P = {
  responsive: tn,
  "responsive-sm": "_responsive-sm_seov6_17",
  "responsive-md": "_responsive-md_seov6_39",
  "responsive-lg": "_responsive-lg_seov6_61",
  "responsive-xl": "_responsive-xl_seov6_83",
  "responsive-xxl": "_responsive-xxl_seov6_105",
  table: rn,
  bordered: nn,
  hover: sn,
  striped: on,
  "size-sm": "_size-sm_seov6_209",
  "size-md": "_size-md_seov6_221",
  "size-lg": "_size-lg_seov6_233",
  "variant-light": "_variant-light_seov6_247",
  "variant-dark": "_variant-dark_seov6_259"
}, as = ({
  bordered: e = !1,
  hover: t = !1,
  striped: r = !1,
  size: s = "md",
  variant: a = "light",
  responsive: l = !1,
  className: d,
  children: c,
  ...i
}) => {
  const u = I(
    P.table,
    {
      [P.bordered]: e,
      [P.hover]: t,
      [P.striped]: r,
      [P[`size-${s}`]]: s,
      [P[`variant-${a}`]]: a
    },
    d
  ), j = ({ children: m }) => l ? typeof l == "boolean" ? /* @__PURE__ */ n.jsx("div", { className: P.responsive, children: m }) : /* @__PURE__ */ n.jsx("div", { className: P[`responsive-${l}`], children: m }) : /* @__PURE__ */ n.jsx(n.Fragment, { children: m });
  return /* @__PURE__ */ n.jsx(j, { children: /* @__PURE__ */ n.jsx("table", { role: "table", className: u, ...i, children: c }) });
}, an = "_listGroup_10jzp_1", ln = "_flush_10jzp_21", cn = "_listGroupItem_10jzp_29", dn = "_active_10jzp_49", _n = "_disabled_10jzp_59", un = "_action_10jzp_69", mn = "_empty_10jzp_85", R = {
  listGroup: an,
  flush: ln,
  listGroupItem: cn,
  active: dn,
  disabled: _n,
  action: un,
  empty: mn
}, M = ({
  children: e,
  className: t = "",
  flush: r = !1,
  emptyMessage: s = "No results found.",
  ...a
}) => {
  const l = v.Children.count(e) > 0 && v.Children.toArray(e).some(ot);
  return /* @__PURE__ */ n.jsx(
    "ul",
    {
      className: `${R.listGroup} ${r ? R.flush : ""} ${t}`,
      ...a,
      children: l ? e : /* @__PURE__ */ n.jsx("li", { className: `${R.listGroupItem} ${R.empty}`, children: s })
    }
  );
};
M.Item = ({
  children: e,
  className: t = "",
  active: r = !1,
  disabled: s = !1,
  action: a = !1,
  as: l = "li",
  href: d,
  ...c
}) => {
  const i = [
    R.listGroupItem,
    r ? R.active : "",
    s ? R.disabled : "",
    a ? R.action : "",
    t
  ].filter(Boolean).join(" ");
  return l === "Link" ? /* @__PURE__ */ n.jsx("a", { href: d, className: i, ...c, children: e }) : l === "button" ? /* @__PURE__ */ n.jsx("button", { className: i, disabled: s, ...c, children: e }) : /* @__PURE__ */ n.jsx("li", { className: i, ...c, children: e });
};
M.Item.displayName = "ListGroup.Item";
const pn = "_container_d1n5j_3", gn = "_fluid_d1n5j_21", fn = "_row_d1n5j_35", xn = "_col_d1n5j_51", T = {
  container: pn,
  fluid: gn,
  row: fn,
  col: xn,
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
}, qe = ({
  children: e,
  fluid: t = !1,
  className: r = "",
  ...s
}) => /* @__PURE__ */ n.jsx("div", { className: `${t ? T.fluid : T.container} ${r}`, ...s, children: e });
qe.displayName = "Grid.Container";
const ae = ({ children: e, className: t = "", gap: r = 1, ...s }) => /* @__PURE__ */ n.jsx(
  "div",
  {
    className: `${T.row} ${t}`,
    style: { gap: `${r}rem` },
    ...s,
    children: e
  }
);
ae.displayName = "Grid.Row";
const W = ({ children: e, className: t = "", xs: r, sm: s, md: a, lg: l, xl: d, ...c }) => {
  const i = [
    r ? `${T[`col-xs-${r}`]}` : "",
    s ? `${T[`col-sm-${s}`]}` : "",
    a ? `${T[`col-md-${a}`]}` : "",
    l ? `${T[`col-lg-${l}`]}` : "",
    d ? `${T[`col-xl-${d}`]}` : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx("div", { className: `${T.col} ${i} ${t}`, ...c, children: e });
};
W.displayName = "Grid.Col";
const ls = { Container: qe, Row: ae, Col: W }, vn = "_carousel_a5ffy_1", bn = "_carouselInner_a5ffy_13", jn = "_fade_a5ffy_25", yn = "_carouselItem_a5ffy_35", hn = "_active_a5ffy_55", $n = "_carouselItemContent_a5ffy_65", Nn = "_control_a5ffy_75", wn = "_prev_a5ffy_113", kn = "_next_a5ffy_121", Cn = "_indicators_a5ffy_131", Tn = "_indicator_a5ffy_131", Sn = "_carouselCaption_a5ffy_183", y = {
  carousel: vn,
  carouselInner: bn,
  fade: jn,
  carouselItem: yn,
  active: hn,
  carouselItemContent: $n,
  control: Nn,
  prev: wn,
  next: kn,
  indicators: Cn,
  indicator: Tn,
  carouselCaption: Sn
}, Z = ({ children: e, interval: t = 5e3, fade: r = !1, className: s = "", ...a }) => {
  const [l, d] = C(0), c = v.Children.count(e), i = ue(null), u = ye(() => {
    d((m) => (m + 1) % c);
  }, [c]), j = ye(() => {
    d((m) => (m - 1 + c) % c);
  }, [c]);
  return J(() => {
    if (t > 0)
      return i.current = setInterval(u, t), () => {
        i.current && clearInterval(i.current);
      };
  }, [t, u]), /* @__PURE__ */ n.jsxs("div", { className: `${y.carousel} ${s}`, ...a, children: [
    /* @__PURE__ */ n.jsx("div", { className: `${y.carouselInner} ${r ? y.fade : ""}`, children: v.Children.map(e, (m, $) => /* @__PURE__ */ n.jsx(
      "div",
      {
        className: `${y.carouselItem} ${$ === l ? y.active : ""}`,
        children: m
      }
    )) }),
    /* @__PURE__ */ n.jsx("button", { className: `${y.control} ${y.prev}`, onClick: j, "aria-label": "Previous Slide", children: "❮" }),
    /* @__PURE__ */ n.jsx("button", { className: `${y.control} ${y.next}`, onClick: u, "aria-label": "Next Slide", children: "❯" }),
    /* @__PURE__ */ n.jsx("div", { className: y.indicators, children: v.Children.map(e, (m, $) => /* @__PURE__ */ n.jsx(
      "button",
      {
        className: `${y.indicator} ${$ === l ? y.active : ""}`,
        onClick: () => d($),
        "aria-label": `Go to slide ${$ + 1}`
      }
    )) })
  ] });
};
Z.displayName = "Carousel";
Z.Item = ({ children: e, className: t = "", ...r }) => /* @__PURE__ */ n.jsx("div", { className: `${y.carouselItemContent} ${t}`, ...r, children: e });
Z.Item.displayName = "Carousel.Item";
Z.Caption = ({ children: e, className: t = "", ...r }) => /* @__PURE__ */ n.jsx("div", { className: `${y.carouselCaption} ${t}`, ...r, children: e });
Z.Caption.displayName = "Carousel.Caption";
const En = "_skeleton_1uj23_1", In = "_skeletonCard_1uj23_129", Pn = "_skeletonImgSm_1uj23_147", Rn = "_skeletonTitleSm_1uj23_161", On = "_skeletonTextSm_1uj23_173", An = "_skeletonPriceSm_1uj23_185", Bn = "_skeletonBtnSm_1uj23_197", Gn = "_fadeIn_1uj23_213", N = {
  skeleton: En,
  skeletonCard: In,
  skeletonImgSm: Pn,
  skeletonTitleSm: Rn,
  skeletonTextSm: On,
  skeletonPriceSm: An,
  skeletonBtnSm: Bn,
  fadeIn: Gn
};
var We = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, ke = v.createContext && /* @__PURE__ */ v.createContext(We), zn = ["attr", "size", "title"];
function Ln(e, t) {
  if (e == null) return {};
  var r = Fn(e, t), s, a;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (a = 0; a < l.length; a++)
      s = l[a], !(t.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(e, s) && (r[s] = e[s]);
  }
  return r;
}
function Fn(e, t) {
  if (e == null) return {};
  var r = {};
  for (var s in e)
    if (Object.prototype.hasOwnProperty.call(e, s)) {
      if (t.indexOf(s) >= 0) continue;
      r[s] = e[s];
    }
  return r;
}
function ne() {
  return ne = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var s in r)
        Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  }, ne.apply(this, arguments);
}
function Ce(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    t && (s = s.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, s);
  }
  return r;
}
function se(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ce(Object(r), !0).forEach(function(s) {
      Dn(e, s, r[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ce(Object(r)).forEach(function(s) {
      Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(r, s));
    });
  }
  return e;
}
function Dn(e, t, r) {
  return t = Mn(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Mn(e) {
  var t = qn(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function qn(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var s = r.call(e, t);
    if (typeof s != "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ye(e) {
  return e && e.map((t, r) => /* @__PURE__ */ v.createElement(t.tag, se({
    key: r
  }, t.attr), Ye(t.child)));
}
function Q(e) {
  return (t) => /* @__PURE__ */ v.createElement(Wn, ne({
    attr: se({}, e.attr)
  }, t), Ye(e.child));
}
function Wn(e) {
  var t = (r) => {
    var {
      attr: s,
      size: a,
      title: l
    } = e, d = Ln(e, zn), c = a || r.size || "1em", i;
    return r.className && (i = r.className), e.className && (i = (i ? i + " " : "") + e.className), /* @__PURE__ */ v.createElement("svg", ne({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, s, d, {
      className: i,
      style: se(se({
        color: e.color || r.color
      }, r.style), e.style),
      height: c,
      width: c,
      xmlns: "http://www.w3.org/2000/svg"
    }), l && /* @__PURE__ */ v.createElement("title", null, l), e.children);
  };
  return ke !== void 0 ? /* @__PURE__ */ v.createElement(ke.Consumer, null, (r) => t(r)) : t(We);
}
function Yn(e) {
  return Q({ attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20l44 0 0 44c0 11 9 20 20 20s20-9 20-20l0-44 44 0c11 0 20-9 20-20s-9-20-20-20l-44 0 0-44c0-11-9-20-20-20s-20 9-20 20l0 44-44 0c-11 0-20 9-20 20z" }, child: [] }] })(e);
}
function Hn(e) {
  return Q({ attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" }, child: [] }] })(e);
}
function Vn(e) {
  return Q({ attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z" }, child: [] }] })(e);
}
function Un(e) {
  return Q({ attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { fill: "#D9D9D9", d: "M512.5 190.4l-94.4 191.3-211.2 30.7 152.8 149-36.1 210.3 188.9-99.3 188.9 99.2-36.1-210.3 152.8-148.9-211.2-30.7z" }, child: [] }, { tag: "path", attr: { d: "M908.6 352.8l-253.9-36.9L541.2 85.8c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L370.3 315.9l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1L239 839.4a31.95 31.95 0 0 0 46.4 33.7l227.1-119.4 227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM665.3 561.3l36.1 210.3-188.9-99.2-188.9 99.3 36.1-210.3-152.8-149 211.2-30.7 94.4-191.3 94.4 191.3 211.2 30.7-152.8 148.9z" }, child: [] }] })(e);
}
function Jn({ rating: e, max: t = 5 }) {
  const r = Math.floor(e), s = e % 1 >= 0.5, a = t - r - (s ? 1 : 0);
  return /* @__PURE__ */ n.jsxs("div", { style: { display: "flex", gap: "2px", color: "#f5c518" }, children: [
    Array.from({ length: r }, (l, d) => /* @__PURE__ */ n.jsx(Hn, {}, `full-${d}`)),
    s && /* @__PURE__ */ n.jsx(Un, {}, "half"),
    Array.from({ length: a }, (l, d) => /* @__PURE__ */ n.jsx(Vn, {}, `empty-${d}`))
  ] });
}
const Xn = "_productCard_2309b_1", Zn = {
  productCard: Xn
};
function cs({
  products: e,
  isLoading: t = !1,
  skeletonCount: r = 8
}) {
  return !e.length && !t ? /* @__PURE__ */ n.jsx("p", { className: "text-center text-muted", children: "No products found." }) : /* @__PURE__ */ n.jsx(ae, { className: "g-4 justify-content-center", children: t ? Array.from({ length: r }).map((s, a) => /* @__PURE__ */ n.jsx(
    W,
    {
      xs: 12,
      sm: 6,
      md: 4,
      lg: 3,
      xl: 3,
      className: "product-col mb-4",
      children: /* @__PURE__ */ n.jsxs("div", { className: N.skeletonCard, children: [
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: `${N.skeleton} ${N.skeletonImgSm}`
          }
        ),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: `${N.skeleton} ${N.skeletonTitleSm}`
          }
        ),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: `${N.skeleton} ${N.skeletonTextSm}`
          }
        ),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: `${N.skeleton} ${N.skeletonPriceSm}`
          }
        ),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: `${N.skeleton} ${N.skeletonBtnSm}`
          }
        )
      ] })
    },
    `skeleton-${a}`
  )) : e.map((s, a) => {
    var l;
    return /* @__PURE__ */ n.jsx(
      W,
      {
        xs: 12,
        sm: 6,
        md: 4,
        lg: 3,
        xl: 3,
        className: `product-col mb-4 ${N.fadeIn}`,
        style: { animationDelay: `${a * 0.05}s` },
        children: /* @__PURE__ */ n.jsxs(A, { className: `h-100 shadow-lg border-1 hover-zoom ${Zn.productCard}`, children: [
          /* @__PURE__ */ n.jsx(me, { href: `/productDetails/${s.id}`, children: /* @__PURE__ */ n.jsx(
            A.Img,
            {
              variant: "top",
              src: s.image,
              alt: s.name,
              className: "p-2 rounded",
              fill: !0
            }
          ) }),
          /* @__PURE__ */ n.jsxs(A.Body, { className: "text-center", children: [
            /* @__PURE__ */ n.jsx(A.Title, { className: "fs-5 text-dark", children: s.name }),
            /* @__PURE__ */ n.jsx(A.Text, { className: "text-muted small mb-1", children: s.category }),
            /* @__PURE__ */ n.jsxs(A.Text, { className: "fw-bold text-success fs-6 mb-2", children: [
              "₹",
              s.price ?? "—"
            ] }),
            /* @__PURE__ */ n.jsx("div", { style: { paddingLeft: "30%" }, children: /* @__PURE__ */ n.jsx(
              Jn,
              {
                rating: ((l = s.reviews[0]) == null ? void 0 : l.rating) ?? 0,
                max: 5
              }
            ) })
          ] }),
          /* @__PURE__ */ n.jsx(A.Footer, { className: "bg-white border-0 text-center", children: /* @__PURE__ */ n.jsxs(Se, { variant: "success", size: "sm", children: [
            " ",
            /* @__PURE__ */ n.jsx(Yn, {}),
            "Add to Cart"
          ] }) })
        ] })
      },
      s.id
    );
  }) });
}
function is({
  search: e,
  setSearch: t,
  sortBy: r,
  setSortBy: s
}) {
  return /* @__PURE__ */ n.jsxs(ae, { className: "mb-4 justify-content-center", gap: 0, children: [
    /* @__PURE__ */ n.jsx(W, { md: 4, className: "mb-2", children: /* @__PURE__ */ n.jsxs(k, { children: [
      /* @__PURE__ */ n.jsx(k.Text, { children: "🔍" }),
      /* @__PURE__ */ n.jsx(
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
    /* @__PURE__ */ n.jsx(W, { md: 2, className: "mb-2", children: /* @__PURE__ */ n.jsxs(b.Select, { value: r, onChange: (a) => s(a.target.value), "aria-label": "Sort products", id: "sort-featured", className: "py-2 text-secondary", children: [
      /* @__PURE__ */ n.jsx("option", { value: "", children: "Sort by..." }),
      /* @__PURE__ */ n.jsx("option", { value: "name", children: "Name (A-Z)" }),
      /* @__PURE__ */ n.jsx("option", { value: "price", children: "Price (Low-High)" })
    ] }) })
  ] });
}
async function Qn({ page: e = 1, limit: t = 50 } = {}) {
  const r = [
    { id: 1, name: "Aloe Vera", category: "Succulent", price: 10, image: "", description: "", care: "", reviews: [] },
    { id: 2, name: "Lavender", category: "Herb", price: 15, image: "", description: "", care: "", reviews: [] },
    { id: 3, name: "Rose", category: "Flower", price: 20, image: "", description: "", care: "", reviews: [] },
    { id: 4, name: "Basil", category: "Herb", price: 8, image: "", description: "", care: "", reviews: [] },
    { id: 5, name: "Cactus", category: "Succulent", price: 12, image: "", description: "", care: "", reviews: [] }
  ];
  return new Promise((s) => setTimeout(() => s(r), 300));
}
function Kn(e) {
  return Q({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" }, child: [] }] })(e);
}
function ds({ onSearch: e }) {
  const [t, r] = C(""), [s, a] = C("All"), [l, d] = C([]), [c, i] = C(!1), [u, j] = C(!1), m = ue(null);
  J(() => {
    if (!t.trim()) {
      d([]), j(!1);
      return;
    }
    i(!0);
    const B = setTimeout(async () => {
      try {
        let O = (await Qn({ page: 1, limit: 50 })).filter(
          (Y) => Y.name.toLowerCase().includes(t.toLowerCase())
        );
        s !== "All" && (O = O.filter((Y) => Y.category === s)), d(O.slice(0, 5)), j(!0);
      } catch (K) {
        console.error(K);
      } finally {
        i(!1);
      }
    }, 300);
    return () => clearTimeout(B);
  }, [t, s]), J(() => {
    const g = (B) => {
      m.current && !m.current.contains(B.target) && j(!1);
    };
    return document.addEventListener("mousedown", g), () => document.removeEventListener("mousedown", g);
  }, []);
  const $ = (g) => {
    g.preventDefault(), e(t, s), j(!1);
  };
  return /* @__PURE__ */ n.jsxs("div", { className: "position-relative", ref: m, style: { minWidth: "400px" }, children: [
    /* @__PURE__ */ n.jsx(b, { onSubmit: $, children: /* @__PURE__ */ n.jsxs(k, { children: [
      /* @__PURE__ */ n.jsxs(
        b.Select,
        {
          style: { maxWidth: "120px" },
          value: s,
          onChange: (g) => a(g.target.value),
          "aria-label": "Search term",
          children: [
            /* @__PURE__ */ n.jsx("option", { children: "All" }),
            /* @__PURE__ */ n.jsx("option", { children: "Flower" }),
            /* @__PURE__ */ n.jsx("option", { children: "Succulent" }),
            /* @__PURE__ */ n.jsx("option", { children: "Herb" })
          ]
        }
      ),
      /* @__PURE__ */ n.jsx(
        b.Control,
        {
          type: "text",
          placeholder: "Search...",
          value: t,
          onChange: (g) => r(g.target.value),
          onFocus: () => t && l.length > 0 && j(!0)
        }
      ),
      /* @__PURE__ */ n.jsx(Se, { type: "submit", variant: "success", "aria-label": "Search", children: /* @__PURE__ */ n.jsx(Kn, {}) })
    ] }) }),
    u && /* @__PURE__ */ n.jsxs(
      M,
      {
        className: "position-absolute w-100 shadow-sm bg-white",
        style: { zIndex: 1e3 },
        children: [
          c && /* @__PURE__ */ n.jsxs(M.Item, { className: "text-center", children: [
            /* @__PURE__ */ n.jsx(Lr, { animation: "border", size: "sm" }),
            " Loading..."
          ] }),
          !c && l.length === 0 && /* @__PURE__ */ n.jsx(M.Item, { className: "text-center text-muted", children: "No results" }),
          !c && l.map((g) => /* @__PURE__ */ n.jsxs(
            M.Item,
            {
              action: !0,
              as: "Link",
              href: `/productDetails/${g.id}`,
              style: { color: "green" },
              children: [
                g.name,
                " ",
                /* @__PURE__ */ n.jsxs("span", { className: "text-muted small", children: [
                  "(",
                  g.category,
                  ")"
                ] })
              ]
            },
            g.id
          ))
        ]
      }
    )
  ] });
}
export {
  ns as Alert,
  ss as Badge,
  Se as Button,
  A as Card,
  Z as Carousel,
  W as Col,
  ls as Container,
  oe as Dropdown,
  b as Form,
  k as InputGroup,
  M as ListGroup,
  rs as Modal,
  X as NavBar,
  cs as ProductGrid,
  Jn as Rating,
  ae as Row,
  ds as SearchBox,
  is as SearchSortBar,
  Lr as Spinner,
  as as Table,
  os as ToastProvider
};
//# sourceMappingURL=index.mjs.map

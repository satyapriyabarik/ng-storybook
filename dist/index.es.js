import y, { forwardRef as Ho, useState as O, createContext as po, useRef as go, useEffect as bo, useContext as xo, isValidElement as Uo, useCallback as co } from "react";
import Jo from "next/image";
import "react-dom";
import fo from "next/link";
var q = { exports: {} }, P = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _o;
function Zo() {
  if (_o) return P;
  _o = 1;
  var o = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function s(r, l, c) {
    var i = null;
    if (c !== void 0 && (i = "" + c), l.key !== void 0 && (i = "" + l.key), "key" in l) {
      c = {};
      for (var a in l)
        a !== "key" && (c[a] = l[a]);
    } else c = l;
    return l = c.ref, {
      $$typeof: o,
      type: r,
      key: i,
      ref: l !== void 0 ? l : null,
      props: c
    };
  }
  return P.Fragment = e, P.jsx = s, P.jsxs = s, P;
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
var io;
function Qo() {
  return io || (io = 1, process.env.NODE_ENV !== "production" && (function() {
    function o(n) {
      if (n == null) return null;
      if (typeof n == "function")
        return n.$$typeof === Wo ? null : n.displayName || n.name || null;
      if (typeof n == "string") return n;
      switch (n) {
        case V:
          return "Fragment";
        case Po:
          return "Profiler";
        case Ao:
          return "StrictMode";
        case Bo:
          return "Suspense";
        case Do:
          return "SuspenseList";
        case qo:
          return "Activity";
      }
      if (typeof n == "object")
        switch (typeof n.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), n.$$typeof) {
          case Xo:
            return "Portal";
          case Mo:
            return n.displayName || "Context";
          case zo:
            return (n._context.displayName || "Context") + ".Consumer";
          case Oo:
            var d = n.render;
            return n = n.displayName, n || (n = d.displayName || d.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
          case Fo:
            return d = n.displayName || null, d !== null ? d : o(n.type) || "Memo";
          case H:
            d = n._payload, n = n._init;
            try {
              return o(n(d));
            } catch {
            }
        }
      return null;
    }
    function e(n) {
      return "" + n;
    }
    function s(n) {
      try {
        e(n);
        var d = !1;
      } catch {
        d = !0;
      }
      if (d) {
        d = console;
        var m = d.error, g = typeof Symbol == "function" && Symbol.toStringTag && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return m.call(
          d,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          g
        ), e(n);
      }
    }
    function r(n) {
      if (n === V) return "<>";
      if (typeof n == "object" && n !== null && n.$$typeof === H)
        return "<...>";
      try {
        var d = o(n);
        return d ? "<" + d + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function l() {
      var n = U.A;
      return n === null ? null : n.getOwner();
    }
    function c() {
      return Error("react-stack-top-frame");
    }
    function i(n) {
      if (no.call(n, "key")) {
        var d = Object.getOwnPropertyDescriptor(n, "key").get;
        if (d && d.isReactWarning) return !1;
      }
      return n.key !== void 0;
    }
    function a(n, d) {
      function m() {
        so || (so = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          d
        ));
      }
      m.isReactWarning = !0, Object.defineProperty(n, "key", {
        get: m,
        configurable: !0
      });
    }
    function _() {
      var n = o(this.type);
      return to[n] || (to[n] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), n = this.props.ref, n !== void 0 ? n : null;
    }
    function u(n, d, m, g, F, Z) {
      var b = m.ref;
      return n = {
        $$typeof: eo,
        type: n,
        key: d,
        props: m,
        _owner: g
      }, (b !== void 0 ? b : null) !== null ? Object.defineProperty(n, "ref", {
        enumerable: !1,
        get: _
      }) : Object.defineProperty(n, "ref", { enumerable: !1, value: null }), n._store = {}, Object.defineProperty(n._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(n, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(n, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: F
      }), Object.defineProperty(n, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Z
      }), Object.freeze && (Object.freeze(n.props), Object.freeze(n)), n;
    }
    function h(n, d, m, g, F, Z) {
      var b = d.children;
      if (b !== void 0)
        if (g)
          if (Yo(b)) {
            for (g = 0; g < b.length; g++)
              p(b[g]);
            Object.freeze && Object.freeze(b);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(b);
      if (no.call(d, "key")) {
        b = o(n);
        var L = Object.keys(d).filter(function(Vo) {
          return Vo !== "key";
        });
        g = 0 < L.length ? "{key: someKey, " + L.join(": ..., ") + ": ...}" : "{key: someKey}", ao[b + g] || (L = 0 < L.length ? "{" + L.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          g,
          b,
          L,
          b
        ), ao[b + g] = !0);
      }
      if (b = null, m !== void 0 && (s(m), b = "" + m), i(d) && (s(d.key), b = "" + d.key), "key" in d) {
        m = {};
        for (var Q in d)
          Q !== "key" && (m[Q] = d[Q]);
      } else m = d;
      return b && a(
        m,
        typeof n == "function" ? n.displayName || n.name || "Unknown" : n
      ), u(
        n,
        b,
        m,
        l(),
        F,
        Z
      );
    }
    function p(n) {
      $(n) ? n._store && (n._store.validated = 1) : typeof n == "object" && n !== null && n.$$typeof === H && (n._payload.status === "fulfilled" ? $(n._payload.value) && n._payload.value._store && (n._payload.value._store.validated = 1) : n._store && (n._store.validated = 1));
    }
    function $(n) {
      return typeof n == "object" && n !== null && n.$$typeof === eo;
    }
    var R = y, eo = Symbol.for("react.transitional.element"), Xo = Symbol.for("react.portal"), V = Symbol.for("react.fragment"), Ao = Symbol.for("react.strict_mode"), Po = Symbol.for("react.profiler"), zo = Symbol.for("react.consumer"), Mo = Symbol.for("react.context"), Oo = Symbol.for("react.forward_ref"), Bo = Symbol.for("react.suspense"), Do = Symbol.for("react.suspense_list"), Fo = Symbol.for("react.memo"), H = Symbol.for("react.lazy"), qo = Symbol.for("react.activity"), Wo = Symbol.for("react.client.reference"), U = R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, no = Object.prototype.hasOwnProperty, Yo = Array.isArray, J = console.createTask ? console.createTask : function() {
      return null;
    };
    R = {
      react_stack_bottom_frame: function(n) {
        return n();
      }
    };
    var so, to = {}, ro = R.react_stack_bottom_frame.bind(
      R,
      c
    )(), lo = J(r(c)), ao = {};
    z.Fragment = V, z.jsx = function(n, d, m) {
      var g = 1e4 > U.recentlyCreatedOwnerStacks++;
      return h(
        n,
        d,
        m,
        !1,
        g ? Error("react-stack-top-frame") : ro,
        g ? J(r(n)) : lo
      );
    }, z.jsxs = function(n, d, m) {
      var g = 1e4 > U.recentlyCreatedOwnerStacks++;
      return h(
        n,
        d,
        m,
        !0,
        g ? Error("react-stack-top-frame") : ro,
        g ? J(r(n)) : lo
      );
    };
  })()), z;
}
var uo;
function Ko() {
  return uo || (uo = 1, process.env.NODE_ENV === "production" ? q.exports = Zo() : q.exports = Qo()), q.exports;
}
var t = Ko();
const oe = "_button_1vcgi_1", ee = "_primary_1vcgi_9", ne = "_secondary_1vcgi_18", se = "_success_1vcgi_27", te = "_danger_1vcgi_36", re = "_sm_1vcgi_45", le = "_md_1vcgi_50", ae = "_lg_1vcgi_55", ce = "_disabled_1vcgi_60", W = {
  button: oe,
  primary: ee,
  secondary: ne,
  success: se,
  danger: te,
  sm: re,
  md: le,
  lg: ae,
  disabled: ce
}, hr = ({
  children: o,
  variant: e = "primary",
  size: s = "md",
  disabled: r = !1,
  mr: l = "",
  ml: c = "",
  mt: i = "",
  mb: a = "",
  ..._
}) => /* @__PURE__ */ t.jsx(
  "button",
  {
    className: `${W.button} ${W[e]} ${W[s]} ${r ? W.disabled : ""}`,
    style: {
      marginRight: l,
      marginLeft: c,
      marginTop: i,
      marginBottom: a
    },
    disabled: r,
    ..._,
    children: o
  }
);
function vo(o) {
  var e, s, r = "";
  if (typeof o == "string" || typeof o == "number") r += o;
  else if (typeof o == "object") if (Array.isArray(o)) {
    var l = o.length;
    for (e = 0; e < l; e++) o[e] && (s = vo(o[e])) && (r && (r += " "), r += s);
  } else for (s in o) o[s] && (r && (r += " "), r += s);
  return r;
}
function k() {
  for (var o, e, s = 0, r = "", l = arguments.length; s < l; s++) (o = arguments[s]) && (e = vo(o)) && (r && (r += " "), r += e);
  return r;
}
const _e = "_card_zxwhi_1", de = "_cardHeader_zxwhi_13", ie = "_cardBody_zxwhi_20", ue = "_cardFooter_zxwhi_25", me = "_cardTitle_zxwhi_33", pe = "_cardText_zxwhi_45", ge = "_cardImageWrapper_zxwhi_51", be = "_cardImage_zxwhi_51", j = {
  card: _e,
  cardHeader: de,
  cardBody: ie,
  cardFooter: ue,
  cardTitle: me,
  cardText: pe,
  cardImageWrapper: ge,
  cardImage: be
}, jo = Ho(
  ({ children: o, className: e = "", ...s }, r) => /* @__PURE__ */ t.jsx("div", { ref: r, className: k(j.card, e), ...s, children: o })
);
jo.displayName = "Card";
const yo = ({ children: o, className: e = "", ...s }) => /* @__PURE__ */ t.jsx("div", { className: k(j.cardHeader, e), ...s, children: o });
yo.displayName = "Card.Header";
const ho = ({ children: o, className: e = "", ...s }) => /* @__PURE__ */ t.jsx("div", { className: k(j.cardBody, e), ...s, children: o });
ho.displayName = "Card.Body";
const $o = ({ children: o, className: e = "", ...s }) => /* @__PURE__ */ t.jsx("div", { className: k(j.cardFooter, e), ...s, children: o });
$o.displayName = "Card.Footer";
const No = ({
  children: o,
  className: e = "",
  as: s = "h3",
  ...r
}) => /* @__PURE__ */ t.jsx(s, { className: k(j.cardTitle, e), ...r, children: o });
No.displayName = "Card.Title";
const wo = ({ children: o, className: e = "", ...s }) => /* @__PURE__ */ t.jsx("p", { className: k(j.cardText, e), ...s, children: o });
wo.displayName = "Card.Text";
const To = ({
  variant: o,
  className: e = "",
  alt: s,
  fill: r,
  width: l,
  height: c,
  style: i,
  ...a
}) => {
  let _ = "";
  switch (o) {
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
  const u = !!r;
  return /* @__PURE__ */ t.jsx(
    "div",
    {
      className: k(j.cardImageWrapper, _, e),
      style: {
        position: "relative",
        width: "100%",
        height: c ? `${c}px` : "250px",
        overflow: "hidden",
        borderRadius: "inherit"
      },
      children: /* @__PURE__ */ t.jsx(
        Jo,
        {
          alt: s,
          fill: u,
          width: u ? void 0 : l,
          height: u ? void 0 : c,
          className: k(j.cardImage),
          style: { objectFit: "cover", ...i },
          ...a
        }
      )
    }
  );
};
To.displayName = "Card.Img";
const $r = Object.assign(jo, {
  Header: yo,
  Body: ho,
  Footer: $o,
  Title: No,
  Text: wo,
  Img: To
}), xe = "_navbar_om48y_3", fe = "_brand_om48y_23", ve = "_toggle_om48y_43", je = "_bar_om48y_65", ye = "_collapse_om48y_79", he = "_show_om48y_95", $e = "_nav_om48y_3", Ne = "_navLink_om48y_123", we = "_active_om48y_163", Te = "_bg-light_om48y_209", Se = "_bg-dark_om48y_219", ke = "_bg-primary_om48y_229", Ce = "_bg-secondary_om48y_239", Ee = "_bg-success_om48y_249", Re = "_bg-danger_om48y_259", Le = "_bg-warning_om48y_269", Ie = "_bg-info_om48y_279", Ge = "_bg-transparent_om48y_289", Xe = "_navbar-dark_om48y_301", Ae = "_navbar-light_om48y_309", Pe = "_expand-sm_om48y_321", ze = "_expand-md_om48y_323", Me = "_expand-lg_om48y_325", Oe = "_expand-xl_om48y_327", Be = "_expand-xxl_om48y_329", f = {
  navbar: xe,
  brand: fe,
  toggle: ve,
  bar: je,
  collapse: ye,
  show: he,
  nav: $e,
  navLink: Ne,
  active: we,
  "bg-light": "_bg-light_om48y_209",
  bgLight: Te,
  "bg-dark": "_bg-dark_om48y_219",
  bgDark: Se,
  "bg-primary": "_bg-primary_om48y_229",
  bgPrimary: ke,
  "bg-secondary": "_bg-secondary_om48y_239",
  bgSecondary: Ce,
  "bg-success": "_bg-success_om48y_249",
  bgSuccess: Ee,
  "bg-danger": "_bg-danger_om48y_259",
  bgDanger: Re,
  "bg-warning": "_bg-warning_om48y_269",
  bgWarning: Le,
  "bg-info": "_bg-info_om48y_279",
  bgInfo: Ie,
  "bg-transparent": "_bg-transparent_om48y_289",
  bgTransparent: Ge,
  "navbar-dark": "_navbar-dark_om48y_301",
  navbarDark: Xe,
  "navbar-light": "_navbar-light_om48y_309",
  navbarLight: Ae,
  "expand-sm": "_expand-sm_om48y_321",
  expandSm: Pe,
  "expand-md": "_expand-md_om48y_323",
  expandMd: ze,
  "expand-lg": "_expand-lg_om48y_325",
  expandLg: Me,
  "expand-xl": "_expand-xl_om48y_327",
  expandXl: Oe,
  "expand-xxl": "_expand-xxl_om48y_329",
  expandXxl: Be
};
function mo(o, e) {
  return y.isValidElement(o) && typeof o.type == "function" && o.type.displayName === e;
}
const B = ({
  bg: o = "light",
  variant: e = "light",
  expand: s = "lg",
  children: r,
  className: l = ""
}) => {
  const [c, i] = O(!1);
  return /* @__PURE__ */ t.jsx(
    "nav",
    {
      className: `${f.navbar} ${f[`bg-${o}`]} ${f[`navbar-${e}`]} ${f[`expand-${s}`]} ${l}`,
      children: y.Children.map(r, (a) => y.isValidElement(a) ? mo(a, "NavBar.Toggle") ? y.cloneElement(a, {
        onClick: () => i((_) => !_)
      }) : mo(a, "NavBar.Collapse") ? y.cloneElement(a, {
        show: c
      }) : a : a)
    }
  );
};
B.displayName = "NavBar";
const So = ({ href: o = "/", children: e }) => /* @__PURE__ */ t.jsx(
  fo,
  {
    href: o,
    className: `${f.brand} d-flex align-items-center text-decoration-none`,
    children: e
  }
);
So.displayName = "NavBar.Brand";
const ko = ({ ariaControls: o, onClick: e }) => /* @__PURE__ */ t.jsxs(
  "button",
  {
    type: "button",
    className: f.toggle,
    "aria-controls": o,
    "aria-label": "Toggle navigation",
    onClick: e,
    children: [
      /* @__PURE__ */ t.jsx("span", { className: f.bar }),
      /* @__PURE__ */ t.jsx("span", { className: f.bar }),
      /* @__PURE__ */ t.jsx("span", { className: f.bar })
    ]
  }
);
ko.displayName = "NavBar.Toggle";
const Co = ({ id: o, children: e, show: s = !1 }) => /* @__PURE__ */ t.jsx("div", { id: o, className: `${f.collapse} ${s ? f.show : ""}`, children: e });
Co.displayName = "NavBar.Collapse";
const oo = ({ children: o, className: e = "" }) => /* @__PURE__ */ t.jsx("ul", { className: `${f.nav} ${e}`, children: o }), De = ({ href: o, children: e, active: s = !1 }) => /* @__PURE__ */ t.jsx("li", { children: /* @__PURE__ */ t.jsx(fo, { href: o, className: `${f.navLink} ${s ? f.active : ""}`, children: e }) });
oo.Link = De;
oo.displayName = "NavBar.Nav";
B.Brand = So;
B.Toggle = ko;
B.Collapse = Co;
B.Nav = oo;
const Fe = "_form_ujlhb_1", qe = "_formGroup_ujlhb_13", We = "_label_ujlhb_25", Ye = "_input_ujlhb_35", Ve = "_textarea_ujlhb_37", He = "_select_ujlhb_39", T = {
  form: Fe,
  formGroup: qe,
  label: We,
  input: Ye,
  textarea: Ve,
  select: He
}, v = ({ children: o, className: e = "", ...s }) => /* @__PURE__ */ t.jsx("form", { className: `${T.form} ${e}`, ...s, children: o });
v.Group = ({ children: o, className: e = "", ...s }) => /* @__PURE__ */ t.jsx("div", { className: `${T.formGroup} ${e}`, ...s, children: o });
v.Group.displayName = "Form.Group";
v.Label = ({ children: o, htmlFor: e, className: s = "", ...r }) => /* @__PURE__ */ t.jsx("label", { htmlFor: e, className: `${T.label} ${s}`, ...r, children: o });
v.Label.displayName = "Form.Label";
v.Input = ({ className: o = "", ...e }) => /* @__PURE__ */ t.jsx("input", { className: `${T.input} ${o}`, ...e });
v.Input.displayName = "Form.Input";
v.TextArea = ({ className: o = "", ...e }) => /* @__PURE__ */ t.jsx("textarea", { className: `${T.textarea} ${o}`, ...e });
v.TextArea.displayName = "Form.TextArea";
v.Select = ({ className: o = "", ...e }) => /* @__PURE__ */ t.jsx("select", { className: `${T.select} ${o}`, ...e });
v.Select.displayName = "Form.Select";
v.Control = ({ as: o = "input", className: e = "", ...s }) => {
  switch (o) {
    case "textarea":
      return /* @__PURE__ */ t.jsx("textarea", { className: `${T.textarea} ${e}`, ...s });
    case "select":
      return /* @__PURE__ */ t.jsx("select", { className: `${T.select} ${e}`, ...s });
    case "input":
    default:
      return /* @__PURE__ */ t.jsx("input", { className: `${T.input} ${e}`, ...s });
  }
};
v.Control.displayName = "Form.Control";
const Ue = "_inputGroup_lxf65_1", Je = "_dropdown-toggle_lxf65_15", Ze = "_dropdown-menu_lxf65_15", Qe = "_inputGroupText_lxf65_71", Ke = "_inputGroupPrepend_lxf65_105", on = "_inputGroupAppend_lxf65_107", en = "_inputGroupButton_lxf65_117", nn = "_inputGroup-sm_lxf65_127", sn = "_inputGroup-lg_lxf65_143", A = {
  inputGroup: Ue,
  "dropdown-toggle": "_dropdown-toggle_lxf65_15",
  dropdownToggle: Je,
  "dropdown-menu": "_dropdown-menu_lxf65_15",
  dropdownMenu: Ze,
  inputGroupText: Qe,
  inputGroupPrepend: Ke,
  inputGroupAppend: on,
  inputGroupButton: en,
  "inputGroup-sm": "_inputGroup-sm_lxf65_127",
  inputGroupSm: nn,
  "inputGroup-lg": "_inputGroup-lg_lxf65_143",
  inputGroupLg: sn
}, N = ({ children: o, className: e = "", size: s = "md", ...r }) => {
  const l = [
    A.inputGroup,
    A[`inputGroup-${s}`] || "",
    e
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ t.jsx("div", { className: l, ...r, children: o });
};
N.Text = ({ children: o, className: e = "", ...s }) => /* @__PURE__ */ t.jsx("span", { className: `${A.inputGroupText} ${e}`, ...s, children: o });
N.Text.displayName = "InputGroup.Text";
N.Prepend = ({ children: o, className: e = "", ...s }) => /* @__PURE__ */ t.jsx("div", { className: `${A.inputGroupPrepend} ${e}`, ...s, children: o });
N.Prepend.displayName = "InputGroup.Prepend";
N.Append = ({ children: o, className: e = "", ...s }) => /* @__PURE__ */ t.jsx("div", { className: `${A.inputGroupAppend} ${e}`, ...s, children: o });
N.Append.displayName = "InputGroup.Append";
N.Button = ({ children: o, className: e = "", ...s }) => /* @__PURE__ */ t.jsx("div", { className: `${A.inputGroupButton} ${e}`, ...s, children: o });
N.Button.displayName = "InputGroup.Button";
const tn = "_dropdown_1b4le_3", rn = "_toggle_1b4le_15", ln = "_outline-light_1b4le_87", an = "_menu_1b4le_113", cn = "_show_1b4le_151", _n = "_fadeIn_1b4le_1", dn = "_end_1b4le_163", un = "_item_1b4le_175", mn = "_divider_1b4le_235", S = {
  dropdown: tn,
  toggle: rn,
  "outline-light": "_outline-light_1b4le_87",
  outlineLight: ln,
  menu: an,
  show: cn,
  fadeIn: _n,
  end: dn,
  item: un,
  divider: mn
}, Eo = po(void 0), Ro = () => {
  const o = xo(Eo);
  if (!o)
    throw new Error("Dropdown.Toggle, Dropdown.Menu, and Dropdown.Item must be used within a <Dropdown>");
  return o;
}, Y = ({ align: o = "start", children: e, className: s = "" }) => {
  const [r, l] = O(!1), c = go(null), i = () => l((_) => !_), a = () => l(!1);
  return bo(() => {
    const _ = (u) => {
      c.current && !c.current.contains(u.target) && a();
    };
    return document.addEventListener("mousedown", _), () => document.removeEventListener("mousedown", _);
  }, []), /* @__PURE__ */ t.jsx(Eo.Provider, { value: { show: r, toggle: i, align: o }, children: /* @__PURE__ */ t.jsx("div", { className: `${S.dropdown} ${s}`, ref: c, children: e }) });
}, pn = ({
  variant: o = "primary",
  id: e,
  children: s,
  className: r = "",
  ...l
}) => {
  const { toggle: c } = Ro();
  return /* @__PURE__ */ t.jsx(
    "button",
    {
      id: e,
      type: "button",
      className: `${S.toggle} ${S[o] || ""} ${r}`,
      onClick: c,
      ...l,
      children: s
    }
  );
}, gn = ({
  children: o,
  className: e = "",
  ...s
}) => {
  const { show: r, align: l } = Ro();
  return /* @__PURE__ */ t.jsx(
    "ul",
    {
      className: `${S.menu} ${r ? S.show : ""} ${l === "end" ? S.end : ""} ${e}`,
      ...s,
      children: o
    }
  );
}, bn = ({
  href: o,
  onClick: e,
  children: s,
  className: r = "",
  ...l
}) => /* @__PURE__ */ t.jsx("li", { children: o ? /* @__PURE__ */ t.jsx("a", { href: o, className: `${S.item} ${r}`, ...l, children: s }) : /* @__PURE__ */ t.jsx(
  "button",
  {
    type: "button",
    onClick: e,
    className: `${S.item} ${r}`,
    ...l,
    children: s
  }
) }), xn = () => /* @__PURE__ */ t.jsx("li", { className: S.divider, role: "separator" });
Y.Toggle = pn;
Y.Menu = gn;
Y.Item = bn;
Y.Divider = xn;
const fn = "_alert_13bqy_1", vn = "_heading_13bqy_17", jn = "_message_13bqy_29", yn = "_primary_13bqy_39", hn = "_secondary_13bqy_51", $n = "_success_13bqy_63", Nn = "_danger_13bqy_75", wn = "_warning_13bqy_87", Tn = "_info_13bqy_99", Sn = "_light_13bqy_111", kn = "_dark_13bqy_123", Cn = "_dismissible_13bqy_137", En = "_closeBtn_13bqy_145", I = {
  alert: fn,
  heading: vn,
  message: jn,
  primary: yn,
  secondary: hn,
  success: $n,
  danger: Nn,
  warning: wn,
  info: Tn,
  light: Sn,
  dark: kn,
  dismissible: Cn,
  closeBtn: En
}, Nr = ({
  variant: o = "primary",
  dismissible: e = !1,
  onClose: s,
  heading: r,
  children: l,
  className: c = "",
  ...i
}) => {
  const [a, _] = O(!0);
  if (!a) return null;
  const u = () => {
    _(!1), s?.();
  };
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: `${I.alert} ${I[o]} ${e ? I.dismissible : ""} ${c}`,
      role: "alert",
      ...i,
      children: [
        r && /* @__PURE__ */ t.jsx("h4", { className: I.heading, children: r }),
        /* @__PURE__ */ t.jsx("div", { className: I.message, children: l }),
        e && /* @__PURE__ */ t.jsx(
          "button",
          {
            type: "button",
            className: I.closeBtn,
            "aria-label": "Close",
            onClick: u,
            children: /* @__PURE__ */ t.jsx("span", { "aria-hidden": "true", children: "×" })
          }
        )
      ]
    }
  );
}, Rn = "_spinner_158ug_1", Ln = "_border_158ug_11", In = "_spinner-border_158ug_1", Gn = "_grow_158ug_29", Xn = "_spinner-grow_158ug_1", An = "_sm_158ug_47", Pn = "_lg_158ug_59", zn = "_primary_158ug_73", Mn = "_secondary_158ug_81", On = "_success_158ug_89", Bn = "_danger_158ug_97", Dn = "_warning_158ug_105", Fn = "_info_158ug_113", qn = "_light_158ug_121", Wn = "_dark_158ug_129", Yn = "_visually-hidden_158ug_185", G = {
  spinner: Rn,
  border: Ln,
  "spinner-border": "_spinner-border_158ug_1",
  spinnerBorder: In,
  grow: Gn,
  "spinner-grow": "_spinner-grow_158ug_1",
  spinnerGrow: Xn,
  sm: An,
  lg: Pn,
  primary: zn,
  secondary: Mn,
  success: On,
  danger: Bn,
  warning: Dn,
  info: Fn,
  light: qn,
  dark: Wn,
  "visually-hidden": "_visually-hidden_158ug_185",
  visuallyHidden: Yn
}, wr = ({
  animation: o = "border",
  variant: e = "primary",
  size: s,
  as: r = "div",
  role: l = "status",
  label: c,
  className: i = "",
  ...a
}) => {
  const _ = [
    G.spinner,
    o === "grow" ? G.grow : G.border,
    G[e],
    s === "sm" ? G.sm : "",
    s === "lg" ? G.lg : "",
    i
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ t.jsx(r, { className: _, role: l, ...a, children: c ? /* @__PURE__ */ t.jsx("span", { className: "visually-hidden", children: c }) : null });
}, Vn = "_badge_ovldc_1", Hn = "_sm_ovldc_31", Un = "_lg_ovldc_43", Jn = "_pill_ovldc_57", Zn = "_dot_ovldc_71", Qn = "_badge-primary_ovldc_89", Kn = "_badge-secondary_ovldc_99", os = "_badge-success_ovldc_109", es = "_badge-danger_ovldc_119", ns = "_badge-warning_ovldc_129", ss = "_badge-info_ovldc_139", ts = "_badge-light_ovldc_149", rs = "_badge-dark_ovldc_159", X = {
  badge: Vn,
  sm: Hn,
  lg: Un,
  pill: Jn,
  dot: Zn,
  "badge-primary": "_badge-primary_ovldc_89",
  badgePrimary: Qn,
  "badge-secondary": "_badge-secondary_ovldc_99",
  badgeSecondary: Kn,
  "badge-success": "_badge-success_ovldc_109",
  badgeSuccess: os,
  "badge-danger": "_badge-danger_ovldc_119",
  badgeDanger: es,
  "badge-warning": "_badge-warning_ovldc_129",
  badgeWarning: ns,
  "badge-info": "_badge-info_ovldc_139",
  badgeInfo: ss,
  "badge-light": "_badge-light_ovldc_149",
  badgeLight: ts,
  "badge-dark": "_badge-dark_ovldc_159",
  badgeDark: rs
}, Tr = ({
  children: o,
  variant: e = "primary",
  bg: s,
  pill: r = !1,
  size: l = "md",
  className: c = "",
  title: i,
  count: a,
  dot: _ = !1,
  ...u
}) => {
  const h = s ?? e, p = [
    X.badge,
    X[`badge-${h}`],
    r ? X.pill : "",
    l === "sm" ? X.sm : l === "lg" ? X.lg : "",
    _ ? X.dot : "",
    c
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ t.jsx(
    "span",
    {
      className: p,
      title: i,
      "aria-label": typeof a < "u" ? `${a}` : void 0,
      ...u,
      children: _ ? null : typeof a < "u" ? a : o
    }
  );
}, ls = "_toastContainer_33tzd_1", as = "_top-left_33tzd_17", cs = "_top-center_33tzd_29", _s = "_top-right_33tzd_43", ds = "_bottom-left_33tzd_55", is = "_bottom-center_33tzd_67", us = "_bottom-right_33tzd_81", ms = "_toast_33tzd_1", ps = "_success_33tzd_121", gs = "_error_33tzd_129", bs = "_info_33tzd_137", xs = "_loading_33tzd_145", fs = "_icon_33tzd_153", M = {
  toastContainer: ls,
  "top-left": "_top-left_33tzd_17",
  topLeft: as,
  "top-center": "_top-center_33tzd_29",
  topCenter: cs,
  "top-right": "_top-right_33tzd_43",
  topRight: _s,
  "bottom-left": "_bottom-left_33tzd_55",
  bottomLeft: ds,
  "bottom-center": "_bottom-center_33tzd_67",
  bottomCenter: is,
  "bottom-right": "_bottom-right_33tzd_81",
  bottomRight: us,
  toast: ms,
  success: ps,
  error: gs,
  info: bs,
  loading: xs,
  icon: fs
}, Lo = po(void 0);
let vs = 0;
const Sr = ({
  children: o,
  position: e = "top-right"
}) => {
  const [s, r] = O([]), l = (a, _ = "info", u = 3e3, h) => {
    const p = vs++, $ = h || e;
    return r((R) => [...R, { id: p, message: a, type: _, position: $ }]), _ !== "loading" && setTimeout(() => c(p), u), p;
  }, c = (a) => {
    r((_) => _.filter((u) => u.id !== a));
  }, i = {
    "top-left": [],
    "top-center": [],
    "top-right": [],
    "bottom-left": [],
    "bottom-center": [],
    "bottom-right": []
  };
  return s.forEach((a) => i[a.position].push(a)), /* @__PURE__ */ t.jsxs(Lo.Provider, { value: { addToast: l, removeToast: c }, children: [
    o,
    Object.entries(i).map(
      ([a, _]) => _.length > 0 ? /* @__PURE__ */ t.jsx("div", { className: `${M.toastContainer} ${M[a]}`, children: _.map((u) => /* @__PURE__ */ t.jsxs("div", { className: `${M.toast} ${M[u.type]}`, children: [
        /* @__PURE__ */ t.jsx("span", { className: M.icon, children: js(u.type) }),
        u.message
      ] }, u.id)) }, a) : null
    )
  ] });
}, kr = () => {
  const o = xo(Lo);
  if (!o) throw new Error("useToast must be used within ToastProvider");
  return o;
}, js = (o) => {
  switch (o) {
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
}, ys = "_responsive_seov6_3", hs = "_responsive-sm_seov6_17", $s = "_responsive-md_seov6_39", Ns = "_responsive-lg_seov6_61", ws = "_responsive-xl_seov6_83", Ts = "_responsive-xxl_seov6_105", Ss = "_table_seov6_127", ks = "_bordered_seov6_167", Cs = "_hover_seov6_189", Es = "_striped_seov6_199", Rs = "_size-sm_seov6_209", Ls = "_size-md_seov6_221", Is = "_size-lg_seov6_233", Gs = "_variant-light_seov6_247", Xs = "_variant-dark_seov6_259", C = {
  responsive: ys,
  "responsive-sm": "_responsive-sm_seov6_17",
  responsiveSm: hs,
  "responsive-md": "_responsive-md_seov6_39",
  responsiveMd: $s,
  "responsive-lg": "_responsive-lg_seov6_61",
  responsiveLg: Ns,
  "responsive-xl": "_responsive-xl_seov6_83",
  responsiveXl: ws,
  "responsive-xxl": "_responsive-xxl_seov6_105",
  responsiveXxl: Ts,
  table: Ss,
  bordered: ks,
  hover: Cs,
  striped: Es,
  "size-sm": "_size-sm_seov6_209",
  sizeSm: Rs,
  "size-md": "_size-md_seov6_221",
  sizeMd: Ls,
  "size-lg": "_size-lg_seov6_233",
  sizeLg: Is,
  "variant-light": "_variant-light_seov6_247",
  variantLight: Gs,
  "variant-dark": "_variant-dark_seov6_259",
  variantDark: Xs
}, Cr = ({
  bordered: o = !1,
  hover: e = !1,
  striped: s = !1,
  size: r = "md",
  variant: l = "light",
  responsive: c = !1,
  className: i,
  children: a,
  ..._
}) => {
  const u = k(
    C.table,
    {
      [C.bordered]: o,
      [C.hover]: e,
      [C.striped]: s,
      [C[`size-${r}`]]: r,
      [C[`variant-${l}`]]: l
    },
    i
  ), h = ({ children: p }) => c ? typeof c == "boolean" ? /* @__PURE__ */ t.jsx("div", { className: C.responsive, children: p }) : /* @__PURE__ */ t.jsx("div", { className: C[`responsive-${c}`], children: p }) : /* @__PURE__ */ t.jsx(t.Fragment, { children: p });
  return /* @__PURE__ */ t.jsx(h, { children: /* @__PURE__ */ t.jsx("table", { role: "table", className: u, ..._, children: a }) });
}, As = "_listGroup_10jzp_1", Ps = "_flush_10jzp_21", zs = "_listGroupItem_10jzp_29", Ms = "_active_10jzp_49", Os = "_disabled_10jzp_59", Bs = "_action_10jzp_69", Ds = "_empty_10jzp_85", E = {
  listGroup: As,
  flush: Ps,
  listGroupItem: zs,
  active: Ms,
  disabled: Os,
  action: Bs,
  empty: Ds
}, Io = ({
  children: o,
  className: e = "",
  flush: s = !1,
  emptyMessage: r = "No results found.",
  ...l
}) => {
  const c = y.Children.count(o) > 0 && y.Children.toArray(o).some(Uo);
  return /* @__PURE__ */ t.jsx(
    "ul",
    {
      className: `${E.listGroup} ${s ? E.flush : ""} ${e}`,
      ...l,
      children: c ? o : /* @__PURE__ */ t.jsx("li", { className: `${E.listGroupItem} ${E.empty}`, children: r })
    }
  );
};
Io.Item = ({
  children: o,
  className: e = "",
  active: s = !1,
  disabled: r = !1,
  action: l = !1,
  as: c = "li",
  href: i,
  ...a
}) => {
  const _ = [
    E.listGroupItem,
    s ? E.active : "",
    r ? E.disabled : "",
    l ? E.action : "",
    e
  ].filter(Boolean).join(" ");
  return c === "Link" ? /* @__PURE__ */ t.jsx("a", { href: i, className: _, ...a, children: o }) : c === "button" ? /* @__PURE__ */ t.jsx("button", { className: _, disabled: r, ...a, children: o }) : /* @__PURE__ */ t.jsx("li", { className: _, ...a, children: o });
};
Io.Item.displayName = "ListGroup.Item";
const Fs = "_container_d1n5j_3", qs = "_fluid_d1n5j_21", Ws = "_row_d1n5j_35", Ys = "_col_d1n5j_51", Vs = "_col-xs-1_d1n5j_65", Hs = "_col-xs-2_d1n5j_75", Us = "_col-xs-3_d1n5j_85", Js = "_col-xs-4_d1n5j_95", Zs = "_col-xs-5_d1n5j_105", Qs = "_col-xs-6_d1n5j_115", Ks = "_col-xs-7_d1n5j_125", ot = "_col-xs-8_d1n5j_135", et = "_col-xs-9_d1n5j_145", nt = "_col-xs-10_d1n5j_155", st = "_col-xs-11_d1n5j_165", tt = "_col-xs-12_d1n5j_175", rt = "_col-sm-1_d1n5j_189", lt = "_col-sm-2_d1n5j_199", at = "_col-sm-3_d1n5j_209", ct = "_col-sm-4_d1n5j_219", _t = "_col-sm-5_d1n5j_229", dt = "_col-sm-6_d1n5j_239", it = "_col-sm-7_d1n5j_249", ut = "_col-sm-8_d1n5j_259", mt = "_col-sm-9_d1n5j_269", pt = "_col-sm-10_d1n5j_279", gt = "_col-sm-11_d1n5j_289", bt = "_col-sm-12_d1n5j_299", xt = "_col-md-1_d1n5j_313", ft = "_col-md-2_d1n5j_323", vt = "_col-md-3_d1n5j_333", jt = "_col-md-4_d1n5j_343", yt = "_col-md-5_d1n5j_353", ht = "_col-md-6_d1n5j_363", $t = "_col-md-7_d1n5j_373", Nt = "_col-md-8_d1n5j_383", wt = "_col-md-9_d1n5j_393", Tt = "_col-md-10_d1n5j_403", St = "_col-md-11_d1n5j_413", kt = "_col-md-12_d1n5j_423", Ct = "_col-lg-1_d1n5j_437", Et = "_col-lg-2_d1n5j_447", Rt = "_col-lg-3_d1n5j_457", Lt = "_col-lg-4_d1n5j_467", It = "_col-lg-5_d1n5j_477", Gt = "_col-lg-6_d1n5j_487", Xt = "_col-lg-7_d1n5j_497", At = "_col-lg-8_d1n5j_507", Pt = "_col-lg-9_d1n5j_517", zt = "_col-lg-10_d1n5j_527", Mt = "_col-lg-11_d1n5j_537", Ot = "_col-lg-12_d1n5j_547", Bt = "_col-xl-1_d1n5j_561", Dt = "_col-xl-2_d1n5j_571", Ft = "_col-xl-3_d1n5j_581", qt = "_col-xl-4_d1n5j_591", Wt = "_col-xl-5_d1n5j_601", Yt = "_col-xl-6_d1n5j_611", Vt = "_col-xl-7_d1n5j_621", Ht = "_col-xl-8_d1n5j_631", Ut = "_col-xl-9_d1n5j_641", Jt = "_col-xl-10_d1n5j_651", Zt = "_col-xl-11_d1n5j_661", Qt = "_col-xl-12_d1n5j_671", Kt = "_gap-0_d1n5j_683", or = "_gap-1_d1n5j_691", er = "_gap-2_d1n5j_699", nr = "_gap-3_d1n5j_707", sr = "_gap-4_d1n5j_715", tr = "_gap-5_d1n5j_723", w = {
  container: Fs,
  fluid: qs,
  row: Ws,
  col: Ys,
  "col-xs-1": "_col-xs-1_d1n5j_65",
  colXs1: Vs,
  "col-xs-2": "_col-xs-2_d1n5j_75",
  colXs2: Hs,
  "col-xs-3": "_col-xs-3_d1n5j_85",
  colXs3: Us,
  "col-xs-4": "_col-xs-4_d1n5j_95",
  colXs4: Js,
  "col-xs-5": "_col-xs-5_d1n5j_105",
  colXs5: Zs,
  "col-xs-6": "_col-xs-6_d1n5j_115",
  colXs6: Qs,
  "col-xs-7": "_col-xs-7_d1n5j_125",
  colXs7: Ks,
  "col-xs-8": "_col-xs-8_d1n5j_135",
  colXs8: ot,
  "col-xs-9": "_col-xs-9_d1n5j_145",
  colXs9: et,
  "col-xs-10": "_col-xs-10_d1n5j_155",
  colXs10: nt,
  "col-xs-11": "_col-xs-11_d1n5j_165",
  colXs11: st,
  "col-xs-12": "_col-xs-12_d1n5j_175",
  colXs12: tt,
  "col-sm-1": "_col-sm-1_d1n5j_189",
  colSm1: rt,
  "col-sm-2": "_col-sm-2_d1n5j_199",
  colSm2: lt,
  "col-sm-3": "_col-sm-3_d1n5j_209",
  colSm3: at,
  "col-sm-4": "_col-sm-4_d1n5j_219",
  colSm4: ct,
  "col-sm-5": "_col-sm-5_d1n5j_229",
  colSm5: _t,
  "col-sm-6": "_col-sm-6_d1n5j_239",
  colSm6: dt,
  "col-sm-7": "_col-sm-7_d1n5j_249",
  colSm7: it,
  "col-sm-8": "_col-sm-8_d1n5j_259",
  colSm8: ut,
  "col-sm-9": "_col-sm-9_d1n5j_269",
  colSm9: mt,
  "col-sm-10": "_col-sm-10_d1n5j_279",
  colSm10: pt,
  "col-sm-11": "_col-sm-11_d1n5j_289",
  colSm11: gt,
  "col-sm-12": "_col-sm-12_d1n5j_299",
  colSm12: bt,
  "col-md-1": "_col-md-1_d1n5j_313",
  colMd1: xt,
  "col-md-2": "_col-md-2_d1n5j_323",
  colMd2: ft,
  "col-md-3": "_col-md-3_d1n5j_333",
  colMd3: vt,
  "col-md-4": "_col-md-4_d1n5j_343",
  colMd4: jt,
  "col-md-5": "_col-md-5_d1n5j_353",
  colMd5: yt,
  "col-md-6": "_col-md-6_d1n5j_363",
  colMd6: ht,
  "col-md-7": "_col-md-7_d1n5j_373",
  colMd7: $t,
  "col-md-8": "_col-md-8_d1n5j_383",
  colMd8: Nt,
  "col-md-9": "_col-md-9_d1n5j_393",
  colMd9: wt,
  "col-md-10": "_col-md-10_d1n5j_403",
  colMd10: Tt,
  "col-md-11": "_col-md-11_d1n5j_413",
  colMd11: St,
  "col-md-12": "_col-md-12_d1n5j_423",
  colMd12: kt,
  "col-lg-1": "_col-lg-1_d1n5j_437",
  colLg1: Ct,
  "col-lg-2": "_col-lg-2_d1n5j_447",
  colLg2: Et,
  "col-lg-3": "_col-lg-3_d1n5j_457",
  colLg3: Rt,
  "col-lg-4": "_col-lg-4_d1n5j_467",
  colLg4: Lt,
  "col-lg-5": "_col-lg-5_d1n5j_477",
  colLg5: It,
  "col-lg-6": "_col-lg-6_d1n5j_487",
  colLg6: Gt,
  "col-lg-7": "_col-lg-7_d1n5j_497",
  colLg7: Xt,
  "col-lg-8": "_col-lg-8_d1n5j_507",
  colLg8: At,
  "col-lg-9": "_col-lg-9_d1n5j_517",
  colLg9: Pt,
  "col-lg-10": "_col-lg-10_d1n5j_527",
  colLg10: zt,
  "col-lg-11": "_col-lg-11_d1n5j_537",
  colLg11: Mt,
  "col-lg-12": "_col-lg-12_d1n5j_547",
  colLg12: Ot,
  "col-xl-1": "_col-xl-1_d1n5j_561",
  colXl1: Bt,
  "col-xl-2": "_col-xl-2_d1n5j_571",
  colXl2: Dt,
  "col-xl-3": "_col-xl-3_d1n5j_581",
  colXl3: Ft,
  "col-xl-4": "_col-xl-4_d1n5j_591",
  colXl4: qt,
  "col-xl-5": "_col-xl-5_d1n5j_601",
  colXl5: Wt,
  "col-xl-6": "_col-xl-6_d1n5j_611",
  colXl6: Yt,
  "col-xl-7": "_col-xl-7_d1n5j_621",
  colXl7: Vt,
  "col-xl-8": "_col-xl-8_d1n5j_631",
  colXl8: Ht,
  "col-xl-9": "_col-xl-9_d1n5j_641",
  colXl9: Ut,
  "col-xl-10": "_col-xl-10_d1n5j_651",
  colXl10: Jt,
  "col-xl-11": "_col-xl-11_d1n5j_661",
  colXl11: Zt,
  "col-xl-12": "_col-xl-12_d1n5j_671",
  colXl12: Qt,
  "gap-0": "_gap-0_d1n5j_683",
  gap0: Kt,
  "gap-1": "_gap-1_d1n5j_691",
  gap1: or,
  "gap-2": "_gap-2_d1n5j_699",
  gap2: er,
  "gap-3": "_gap-3_d1n5j_707",
  gap3: nr,
  "gap-4": "_gap-4_d1n5j_715",
  gap4: sr,
  "gap-5": "_gap-5_d1n5j_723",
  gap5: tr
}, rr = ({
  children: o,
  fluid: e = !1,
  className: s = "",
  ...r
}) => /* @__PURE__ */ t.jsx("div", { className: `${e ? w.fluid : w.container} ${s}`, ...r, children: o });
rr.displayName = "Grid.Container";
const Go = ({ children: o, className: e = "", gap: s = 1, ...r }) => /* @__PURE__ */ t.jsx(
  "div",
  {
    className: `${w.row} ${e}`,
    style: { gap: `${s}rem` },
    ...r,
    children: o
  }
);
Go.displayName = "Grid.Row";
const K = ({ children: o, className: e = "", xs: s, sm: r, md: l, lg: c, xl: i, ...a }) => {
  const _ = [
    s ? `${w[`col-xs-${s}`]}` : "",
    r ? `${w[`col-sm-${r}`]}` : "",
    l ? `${w[`col-md-${l}`]}` : "",
    c ? `${w[`col-lg-${c}`]}` : "",
    i ? `${w[`col-xl-${i}`]}` : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ t.jsx("div", { className: `${w.col} ${_} ${e}`, ...a, children: o });
};
K.displayName = "Grid.Col";
const lr = "_carousel_a5ffy_1", ar = "_carouselInner_a5ffy_13", cr = "_fade_a5ffy_25", _r = "_carouselItem_a5ffy_35", dr = "_active_a5ffy_55", ir = "_carouselItemContent_a5ffy_65", ur = "_control_a5ffy_75", mr = "_prev_a5ffy_113", pr = "_next_a5ffy_121", gr = "_indicators_a5ffy_131", br = "_indicator_a5ffy_131", xr = "_carouselCaption_a5ffy_183", x = {
  carousel: lr,
  carouselInner: ar,
  fade: cr,
  carouselItem: _r,
  active: dr,
  carouselItemContent: ir,
  control: ur,
  prev: mr,
  next: pr,
  indicators: gr,
  indicator: br,
  carouselCaption: xr
}, D = ({ children: o, interval: e = 5e3, fade: s = !1, className: r = "", ...l }) => {
  const [c, i] = O(0), a = y.Children.count(o), _ = go(null), u = co(() => {
    i((p) => (p + 1) % a);
  }, [a]), h = co(() => {
    i((p) => (p - 1 + a) % a);
  }, [a]);
  return bo(() => {
    if (e > 0)
      return _.current = setInterval(u, e), () => {
        _.current && clearInterval(_.current);
      };
  }, [e, u]), /* @__PURE__ */ t.jsxs("div", { className: `${x.carousel} ${r}`, ...l, children: [
    /* @__PURE__ */ t.jsx("div", { className: `${x.carouselInner} ${s ? x.fade : ""}`, children: y.Children.map(o, (p, $) => /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `${x.carouselItem} ${$ === c ? x.active : ""}`,
        children: p
      }
    )) }),
    /* @__PURE__ */ t.jsx("button", { className: `${x.control} ${x.prev}`, onClick: h, "aria-label": "Previous Slide", children: "❮" }),
    /* @__PURE__ */ t.jsx("button", { className: `${x.control} ${x.next}`, onClick: u, "aria-label": "Next Slide", children: "❯" }),
    /* @__PURE__ */ t.jsx("div", { className: x.indicators, children: y.Children.map(o, (p, $) => /* @__PURE__ */ t.jsx(
      "button",
      {
        className: `${x.indicator} ${$ === c ? x.active : ""}`,
        onClick: () => i($),
        "aria-label": `Go to slide ${$ + 1}`
      }
    )) })
  ] });
};
D.displayName = "Carousel";
D.Item = ({ children: o, className: e = "", ...s }) => /* @__PURE__ */ t.jsx("div", { className: `${x.carouselItemContent} ${e}`, ...s, children: o });
D.Item.displayName = "Carousel.Item";
D.Caption = ({ children: o, className: e = "", ...s }) => /* @__PURE__ */ t.jsx("div", { className: `${x.carouselCaption} ${e}`, ...s, children: o });
D.Caption.displayName = "Carousel.Caption";
function Er({
  search: o,
  setSearch: e,
  sortBy: s,
  setSortBy: r
}) {
  return /* @__PURE__ */ t.jsxs(Go, { className: "mb-4 justify-content-center", gap: 0, children: [
    /* @__PURE__ */ t.jsx(K, { md: 4, className: "mb-2", children: /* @__PURE__ */ t.jsxs(N, { children: [
      /* @__PURE__ */ t.jsx(N.Text, { children: "🔍" }),
      /* @__PURE__ */ t.jsx(
        v.Control,
        {
          type: "text",
          placeholder: "Search by name...",
          value: o,
          onChange: (l) => e(l.target.value),
          id: "search-featured"
        }
      )
    ] }) }),
    /* @__PURE__ */ t.jsx(K, { md: 2, className: "mb-2", children: /* @__PURE__ */ t.jsxs(v.Select, { value: s, onChange: (l) => r(l.target.value), "aria-label": "Sort products", id: "sort-featured", className: "py-2 text-secondary", children: [
      /* @__PURE__ */ t.jsx("option", { value: "", children: "Sort by..." }),
      /* @__PURE__ */ t.jsx("option", { value: "name", children: "Name (A-Z)" }),
      /* @__PURE__ */ t.jsx("option", { value: "price", children: "Price (Low-High)" })
    ] }) })
  ] });
}
export {
  Nr as Alert,
  Tr as Badge,
  hr as Button,
  $r as Card,
  D as Carousel,
  K as Col,
  rr as Container,
  Y as Dropdown,
  v as Form,
  N as InputGroup,
  Io as ListGroup,
  B as NavBar,
  Go as Row,
  Er as SearchSortBar,
  wr as Spinner,
  Cr as Table,
  Sr as ToastProvider,
  kr as useToast
};
//# sourceMappingURL=index.es.js.map

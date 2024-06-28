import { R as T, j as p, r as wt, B as xe } from "./index-DSiRzrbg.js";
import { u as Oe } from "./useMutation-CqTlZdcE.js";
import { r as ne, I as Vt, a as mt } from "./index-C0teDyxI.js";
import { c as pt } from "./clsx-B-dksMZM.js";
import { c as it } from "./chunk-DEQZ7DVA-L72d_YGu.js";
var he = (e) => e.type === "checkbox",
  ue = (e) => e instanceof Date,
  I = (e) => e == null;
const at = (e) => typeof e == "object";
var E = (e) => !I(e) && !Array.isArray(e) && at(e) && !ue(e),
  At = (e) =>
    E(e) && e.target ? (he(e.target) ? e.target.checked : e.target.value) : e,
  Ft = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
  Dt = (e, s) => e.has(Ft(s)),
  kt = (e) => {
    const s = e.constructor && e.constructor.prototype;
    return E(s) && s.hasOwnProperty("isPrototypeOf");
  },
  Re =
    typeof window < "u" &&
    typeof window.HTMLElement < "u" &&
    typeof document < "u";
function U(e) {
  let s;
  const t = Array.isArray(e);
  if (e instanceof Date) s = new Date(e);
  else if (e instanceof Set) s = new Set(e);
  else if (!(Re && (e instanceof Blob || e instanceof FileList)) && (t || E(e)))
    if (((s = t ? [] : {}), !t && !kt(e))) s = e;
    else for (const n in e) e.hasOwnProperty(n) && (s[n] = U(e[n]));
  else return e;
  return s;
}
var ge = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
  A = (e) => e === void 0,
  d = (e, s, t) => {
    if (!s || !E(e)) return t;
    const n = ge(s.split(/[,[\].]+?/)).reduce((u, l) => (I(u) ? u : u[l]), e);
    return A(n) || n === e ? (A(e[s]) ? t : e[s]) : n;
  },
  J = (e) => typeof e == "boolean";
const Ge = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
  q = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all",
  },
  G = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate",
  };
T.createContext(null);
var Et = (e, s, t, n = !0) => {
    const u = { defaultValues: s._defaultValues };
    for (const l in e)
      Object.defineProperty(u, l, {
        get: () => {
          const y = l;
          return (
            s._proxyFormState[y] !== q.all &&
              (s._proxyFormState[y] = !n || q.all),
            e[y]
          );
        },
      });
    return u;
  },
  N = (e) => E(e) && !Object.keys(e).length,
  St = (e, s, t, n) => {
    t(e);
    const { name: u, ...l } = e;
    return (
      N(l) ||
      Object.keys(l).length >= Object.keys(s).length ||
      Object.keys(l).find((y) => s[y] === q.all)
    );
  },
  Se = (e) => (Array.isArray(e) ? e : [e]);
function Lt(e) {
  const s = T.useRef(e);
  (s.current = e),
    T.useEffect(() => {
      const t =
        !e.disabled &&
        s.current.subject &&
        s.current.subject.subscribe({ next: s.current.next });
      return () => {
        t && t.unsubscribe();
      };
    }, [e.disabled]);
}
var $ = (e) => typeof e == "string",
  Ct = (e, s, t, n, u) =>
    $(e)
      ? (n && s.watch.add(e), d(t, e, u))
      : Array.isArray(e)
      ? e.map((l) => (n && s.watch.add(l), d(t, l)))
      : (n && (s.watchAll = !0), t),
  Te = (e) => /^\w*$/.test(e),
  nt = (e) => ge(e.replace(/["|']|\]/g, "").split(/\.|\[/)),
  V = (e, s, t) => {
    let n = -1;
    const u = Te(s) ? [s] : nt(s),
      l = u.length,
      y = l - 1;
    for (; ++n < l; ) {
      const g = u[n];
      let O = t;
      if (n !== y) {
        const j = e[g];
        O = E(j) || Array.isArray(j) ? j : isNaN(+u[n + 1]) ? {} : [];
      }
      (e[g] = O), (e = e[g]);
    }
    return e;
  },
  It = (e, s, t, n, u) =>
    s
      ? {
          ...t[e],
          types: { ...(t[e] && t[e].types ? t[e].types : {}), [n]: u || !0 },
        }
      : {},
  Je = (e) => ({
    isOnSubmit: !e || e === q.onSubmit,
    isOnBlur: e === q.onBlur,
    isOnChange: e === q.onChange,
    isOnAll: e === q.all,
    isOnTouch: e === q.onTouched,
  }),
  Qe = (e, s, t) =>
    !t &&
    (s.watchAll ||
      s.watch.has(e) ||
      [...s.watch].some(
        (n) => e.startsWith(n) && /^\.\w+/.test(e.slice(n.length))
      ));
const ye = (e, s, t, n) => {
  for (const u of t || Object.keys(e)) {
    const l = d(e, u);
    if (l) {
      const { _f: y, ...g } = l;
      if (y) {
        if (y.refs && y.refs[0] && s(y.refs[0], u) && !n) break;
        if (y.ref && s(y.ref, y.name) && !n) break;
        ye(g, s);
      } else E(g) && ye(g, s);
    }
  }
};
var Ot = (e, s, t) => {
    const n = ge(d(e, t));
    return V(n, "root", s[t]), V(e, t, n), e;
  },
  Ne = (e) => e.type === "file",
  Q = (e) => typeof e == "function",
  Ve = (e) => {
    if (!Re) return !1;
    const s = e ? e.ownerDocument : 0;
    return (
      e instanceof
      (s && s.defaultView ? s.defaultView.HTMLElement : HTMLElement)
    );
  },
  we = (e) => $(e),
  Pe = (e) => e.type === "radio",
  me = (e) => e instanceof RegExp;
const Xe = { value: !1, isValid: !1 },
  Ye = { value: !0, isValid: !0 };
var lt = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const s = e
        .filter((t) => t && t.checked && !t.disabled)
        .map((t) => t.value);
      return { value: s, isValid: !!s.length };
    }
    return e[0].checked && !e[0].disabled
      ? e[0].attributes && !A(e[0].attributes.value)
        ? A(e[0].value) || e[0].value === ""
          ? Ye
          : { value: e[0].value, isValid: !0 }
        : Ye
      : Xe;
  }
  return Xe;
};
const et = { isValid: !1, value: null };
var ut = (e) =>
  Array.isArray(e)
    ? e.reduce(
        (s, t) =>
          t && t.checked && !t.disabled ? { isValid: !0, value: t.value } : s,
        et
      )
    : et;
function tt(e, s, t = "validate") {
  if (we(e) || (Array.isArray(e) && e.every(we)) || (J(e) && !e))
    return { type: t, message: we(e) ? e : "", ref: s };
}
var le = (e) => (E(e) && !me(e) ? e : { value: e, message: "" }),
  rt = async (e, s, t, n, u) => {
    const {
        ref: l,
        refs: y,
        required: g,
        maxLength: O,
        minLength: j,
        min: m,
        max: v,
        pattern: X,
        validate: W,
        name: C,
        valueAsNumber: Y,
        mount: H,
        disabled: Z,
      } = e._f,
      x = d(s, C);
    if (!H || Z) return {};
    const K = y ? y[0] : l,
      z = (_) => {
        n &&
          K.reportValidity &&
          (K.setCustomValidity(J(_) ? "" : _ || ""), K.reportValidity());
      },
      F = {},
      se = Pe(l),
      ve = he(l),
      ee = se || ve,
      ie =
        ((Y || Ne(l)) && A(l.value) && A(x)) ||
        (Ve(l) && l.value === "") ||
        x === "" ||
        (Array.isArray(x) && !x.length),
      P = It.bind(null, C, t, F),
      _e = (_, b, D, L = G.maxLength, B = G.minLength) => {
        const M = _ ? b : D;
        F[C] = { type: _ ? L : B, message: M, ref: l, ...P(_ ? L : B, M) };
      };
    if (
      u
        ? !Array.isArray(x) || !x.length
        : g &&
          ((!ee && (ie || I(x))) ||
            (J(x) && !x) ||
            (ve && !lt(y).isValid) ||
            (se && !ut(y).isValid))
    ) {
      const { value: _, message: b } = we(g)
        ? { value: !!g, message: g }
        : le(g);
      if (
        _ &&
        ((F[C] = { type: G.required, message: b, ref: K, ...P(G.required, b) }),
        !t)
      )
        return z(b), F;
    }
    if (!ie && (!I(m) || !I(v))) {
      let _, b;
      const D = le(v),
        L = le(m);
      if (!I(x) && !isNaN(x)) {
        const B = l.valueAsNumber || (x && +x);
        I(D.value) || (_ = B > D.value), I(L.value) || (b = B < L.value);
      } else {
        const B = l.valueAsDate || new Date(x),
          M = (fe) => new Date(new Date().toDateString() + " " + fe),
          oe = l.type == "time",
          ce = l.type == "week";
        $(D.value) &&
          x &&
          (_ = oe
            ? M(x) > M(D.value)
            : ce
            ? x > D.value
            : B > new Date(D.value)),
          $(L.value) &&
            x &&
            (b = oe
              ? M(x) < M(L.value)
              : ce
              ? x < L.value
              : B < new Date(L.value));
      }
      if ((_ || b) && (_e(!!_, D.message, L.message, G.max, G.min), !t))
        return z(F[C].message), F;
    }
    if ((O || j) && !ie && ($(x) || (u && Array.isArray(x)))) {
      const _ = le(O),
        b = le(j),
        D = !I(_.value) && x.length > +_.value,
        L = !I(b.value) && x.length < +b.value;
      if ((D || L) && (_e(D, _.message, b.message), !t))
        return z(F[C].message), F;
    }
    if (X && !ie && $(x)) {
      const { value: _, message: b } = le(X);
      if (
        me(_) &&
        !x.match(_) &&
        ((F[C] = { type: G.pattern, message: b, ref: l, ...P(G.pattern, b) }),
        !t)
      )
        return z(b), F;
    }
    if (W) {
      if (Q(W)) {
        const _ = await W(x, s),
          b = tt(_, K);
        if (b && ((F[C] = { ...b, ...P(G.validate, b.message) }), !t))
          return z(b.message), F;
      } else if (E(W)) {
        let _ = {};
        for (const b in W) {
          if (!N(_) && !t) break;
          const D = tt(await W[b](x, s), K, b);
          D &&
            ((_ = { ...D, ...P(b, D.message) }), z(D.message), t && (F[C] = _));
        }
        if (!N(_) && ((F[C] = { ref: K, ..._ }), !t)) return F;
      }
    }
    return z(!0), F;
  };
function Rt(e, s) {
  const t = s.slice(0, -1).length;
  let n = 0;
  for (; n < t; ) e = A(e) ? n++ : e[s[n++]];
  return e;
}
function Tt(e) {
  for (const s in e) if (e.hasOwnProperty(s) && !A(e[s])) return !1;
  return !0;
}
function k(e, s) {
  const t = Array.isArray(s) ? s : Te(s) ? [s] : nt(s),
    n = t.length === 1 ? e : Rt(e, t),
    u = t.length - 1,
    l = t[u];
  return (
    n && delete n[l],
    u !== 0 &&
      ((E(n) && N(n)) || (Array.isArray(n) && Tt(n))) &&
      k(e, t.slice(0, -1)),
    e
  );
}
var Le = () => {
    let e = [];
    return {
      get observers() {
        return e;
      },
      next: (u) => {
        for (const l of e) l.next && l.next(u);
      },
      subscribe: (u) => (
        e.push(u),
        {
          unsubscribe: () => {
            e = e.filter((l) => l !== u);
          },
        }
      ),
      unsubscribe: () => {
        e = [];
      },
    };
  },
  pe = (e) => I(e) || !at(e);
function re(e, s) {
  if (pe(e) || pe(s)) return e === s;
  if (ue(e) && ue(s)) return e.getTime() === s.getTime();
  const t = Object.keys(e),
    n = Object.keys(s);
  if (t.length !== n.length) return !1;
  for (const u of t) {
    const l = e[u];
    if (!n.includes(u)) return !1;
    if (u !== "ref") {
      const y = s[u];
      if (
        (ue(l) && ue(y)) ||
        (E(l) && E(y)) ||
        (Array.isArray(l) && Array.isArray(y))
          ? !re(l, y)
          : l !== y
      )
        return !1;
    }
  }
  return !0;
}
var ot = (e) => e.type === "select-multiple",
  Nt = (e) => Pe(e) || he(e),
  Ce = (e) => Ve(e) && e.isConnected,
  ct = (e) => {
    for (const s in e) if (Q(e[s])) return !0;
    return !1;
  };
function Ae(e, s = {}) {
  const t = Array.isArray(e);
  if (E(e) || t)
    for (const n in e)
      Array.isArray(e[n]) || (E(e[n]) && !ct(e[n]))
        ? ((s[n] = Array.isArray(e[n]) ? [] : {}), Ae(e[n], s[n]))
        : I(e[n]) || (s[n] = !0);
  return s;
}
function ft(e, s, t) {
  const n = Array.isArray(e);
  if (E(e) || n)
    for (const u in e)
      Array.isArray(e[u]) || (E(e[u]) && !ct(e[u]))
        ? A(s) || pe(t[u])
          ? (t[u] = Array.isArray(e[u]) ? Ae(e[u], []) : { ...Ae(e[u]) })
          : ft(e[u], I(s) ? {} : s[u], t[u])
        : (t[u] = !re(e[u], s[u]));
  return t;
}
var be = (e, s) => ft(e, s, Ae(s)),
  dt = (e, { valueAsNumber: s, valueAsDate: t, setValueAs: n }) =>
    A(e)
      ? e
      : s
      ? e === ""
        ? NaN
        : e && +e
      : t && $(e)
      ? new Date(e)
      : n
      ? n(e)
      : e;
function Ie(e) {
  const s = e.ref;
  if (!(e.refs ? e.refs.every((t) => t.disabled) : s.disabled))
    return Ne(s)
      ? s.files
      : Pe(s)
      ? ut(e.refs).value
      : ot(s)
      ? [...s.selectedOptions].map(({ value: t }) => t)
      : he(s)
      ? lt(e.refs).value
      : dt(A(s.value) ? e.ref.value : s.value, e);
}
var Pt = (e, s, t, n) => {
    const u = {};
    for (const l of e) {
      const y = d(s, l);
      y && V(u, l, y._f);
    }
    return {
      criteriaMode: t,
      names: [...e],
      fields: u,
      shouldUseNativeValidation: n,
    };
  },
  de = (e) =>
    A(e)
      ? e
      : me(e)
      ? e.source
      : E(e)
      ? me(e.value)
        ? e.value.source
        : e.value
      : e,
  Mt = (e) =>
    e.mount &&
    (e.required ||
      e.min ||
      e.max ||
      e.maxLength ||
      e.minLength ||
      e.pattern ||
      e.validate);
function st(e, s, t) {
  const n = d(e, t);
  if (n || Te(t)) return { error: n, name: t };
  const u = t.split(".");
  for (; u.length; ) {
    const l = u.join("."),
      y = d(s, l),
      g = d(e, l);
    if (y && !Array.isArray(y) && t !== l) return { name: t };
    if (g && g.type) return { name: l, error: g };
    u.pop();
  }
  return { name: t };
}
var Ut = (e, s, t, n, u) =>
    u.isOnAll
      ? !1
      : !t && u.isOnTouch
      ? !(s || e)
      : (t ? n.isOnBlur : u.isOnBlur)
      ? !e
      : (t ? n.isOnChange : u.isOnChange)
      ? e
      : !0,
  jt = (e, s) => !ge(d(e, s)).length && k(e, s);
const Bt = {
  mode: q.onSubmit,
  reValidateMode: q.onChange,
  shouldFocusError: !0,
};
function qt(e = {}) {
  let s = { ...Bt, ...e },
    t = {
      submitCount: 0,
      isDirty: !1,
      isLoading: Q(s.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: s.errors || {},
      disabled: s.disabled || !1,
    },
    n = {},
    u =
      E(s.defaultValues) || E(s.values)
        ? U(s.defaultValues || s.values) || {}
        : {},
    l = s.shouldUnregister ? {} : U(u),
    y = { action: !1, mount: !1, watch: !1 },
    g = {
      mount: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    O,
    j = 0;
  const m = {
      isDirty: !1,
      dirtyFields: !1,
      validatingFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    },
    v = { values: Le(), array: Le(), state: Le() },
    X = Je(s.mode),
    W = Je(s.reValidateMode),
    C = s.criteriaMode === q.all,
    Y = (r) => (i) => {
      clearTimeout(j), (j = setTimeout(r, i));
    },
    H = async (r) => {
      if (m.isValid || r) {
        const i = s.resolver ? N((await ee()).errors) : await P(n, !0);
        i !== t.isValid && v.state.next({ isValid: i });
      }
    },
    Z = (r, i) => {
      (m.isValidating || m.validatingFields) &&
        ((r || Array.from(g.mount)).forEach((a) => {
          a && (i ? V(t.validatingFields, a, i) : k(t.validatingFields, a));
        }),
        v.state.next({
          validatingFields: t.validatingFields,
          isValidating: !N(t.validatingFields),
        }));
    },
    x = (r, i = [], a, f, c = !0, o = !0) => {
      if (f && a) {
        if (((y.action = !0), o && Array.isArray(d(n, r)))) {
          const h = a(d(n, r), f.argA, f.argB);
          c && V(n, r, h);
        }
        if (o && Array.isArray(d(t.errors, r))) {
          const h = a(d(t.errors, r), f.argA, f.argB);
          c && V(t.errors, r, h), jt(t.errors, r);
        }
        if (m.touchedFields && o && Array.isArray(d(t.touchedFields, r))) {
          const h = a(d(t.touchedFields, r), f.argA, f.argB);
          c && V(t.touchedFields, r, h);
        }
        m.dirtyFields && (t.dirtyFields = be(u, l)),
          v.state.next({
            name: r,
            isDirty: _(r, i),
            dirtyFields: t.dirtyFields,
            errors: t.errors,
            isValid: t.isValid,
          });
      } else V(l, r, i);
    },
    K = (r, i) => {
      V(t.errors, r, i), v.state.next({ errors: t.errors });
    },
    z = (r) => {
      (t.errors = r), v.state.next({ errors: t.errors, isValid: !1 });
    },
    F = (r, i, a, f) => {
      const c = d(n, r);
      if (c) {
        const o = d(l, r, A(a) ? d(u, r) : a);
        A(o) || (f && f.defaultChecked) || i
          ? V(l, r, i ? o : Ie(c._f))
          : L(r, o),
          y.mount && H();
      }
    },
    se = (r, i, a, f, c) => {
      let o = !1,
        h = !1;
      const w = { name: r },
        S = !!(d(n, r) && d(n, r)._f.disabled);
      if (!a || f) {
        m.isDirty &&
          ((h = t.isDirty),
          (t.isDirty = w.isDirty = _()),
          (o = h !== w.isDirty));
        const R = S || re(d(u, r), i);
        (h = !!(!S && d(t.dirtyFields, r))),
          R || S ? k(t.dirtyFields, r) : V(t.dirtyFields, r, !0),
          (w.dirtyFields = t.dirtyFields),
          (o = o || (m.dirtyFields && h !== !R));
      }
      if (a) {
        const R = d(t.touchedFields, r);
        R ||
          (V(t.touchedFields, r, a),
          (w.touchedFields = t.touchedFields),
          (o = o || (m.touchedFields && R !== a)));
      }
      return o && c && v.state.next(w), o ? w : {};
    },
    ve = (r, i, a, f) => {
      const c = d(t.errors, r),
        o = m.isValid && J(i) && t.isValid !== i;
      if (
        (e.delayError && a
          ? ((O = Y(() => K(r, a))), O(e.delayError))
          : (clearTimeout(j),
            (O = null),
            a ? V(t.errors, r, a) : k(t.errors, r)),
        (a ? !re(c, a) : c) || !N(f) || o)
      ) {
        const h = {
          ...f,
          ...(o && J(i) ? { isValid: i } : {}),
          errors: t.errors,
          name: r,
        };
        (t = { ...t, ...h }), v.state.next(h);
      }
    },
    ee = async (r) => {
      Z(r, !0);
      const i = await s.resolver(
        l,
        s.context,
        Pt(r || g.mount, n, s.criteriaMode, s.shouldUseNativeValidation)
      );
      return Z(r), i;
    },
    ie = async (r) => {
      const { errors: i } = await ee(r);
      if (r)
        for (const a of r) {
          const f = d(i, a);
          f ? V(t.errors, a, f) : k(t.errors, a);
        }
      else t.errors = i;
      return i;
    },
    P = async (r, i, a = { valid: !0 }) => {
      for (const f in r) {
        const c = r[f];
        if (c) {
          const { _f: o, ...h } = c;
          if (o) {
            const w = g.array.has(o.name);
            Z([f], !0);
            const S = await rt(c, l, C, s.shouldUseNativeValidation && !i, w);
            if ((Z([f]), S[o.name] && ((a.valid = !1), i))) break;
            !i &&
              (d(S, o.name)
                ? w
                  ? Ot(t.errors, S, o.name)
                  : V(t.errors, o.name, S[o.name])
                : k(t.errors, o.name));
          }
          h && (await P(h, i, a));
        }
      }
      return a.valid;
    },
    _e = () => {
      for (const r of g.unMount) {
        const i = d(n, r);
        i &&
          (i._f.refs ? i._f.refs.every((a) => !Ce(a)) : !Ce(i._f.ref)) &&
          Fe(r);
      }
      g.unMount = new Set();
    },
    _ = (r, i) => (r && i && V(l, r, i), !re(Ue(), u)),
    b = (r, i, a) =>
      Ct(r, g, { ...(y.mount ? l : A(i) ? u : $(r) ? { [r]: i } : i) }, a, i),
    D = (r) => ge(d(y.mount ? l : u, r, e.shouldUnregister ? d(u, r, []) : [])),
    L = (r, i, a = {}) => {
      const f = d(n, r);
      let c = i;
      if (f) {
        const o = f._f;
        o &&
          (!o.disabled && V(l, r, dt(i, o)),
          (c = Ve(o.ref) && I(i) ? "" : i),
          ot(o.ref)
            ? [...o.ref.options].forEach(
                (h) => (h.selected = c.includes(h.value))
              )
            : o.refs
            ? he(o.ref)
              ? o.refs.length > 1
                ? o.refs.forEach(
                    (h) =>
                      (!h.defaultChecked || !h.disabled) &&
                      (h.checked = Array.isArray(c)
                        ? !!c.find((w) => w === h.value)
                        : c === h.value)
                  )
                : o.refs[0] && (o.refs[0].checked = !!c)
              : o.refs.forEach((h) => (h.checked = h.value === c))
            : Ne(o.ref)
            ? (o.ref.value = "")
            : ((o.ref.value = c),
              o.ref.type || v.values.next({ name: r, values: { ...l } })));
      }
      (a.shouldDirty || a.shouldTouch) &&
        se(r, c, a.shouldTouch, a.shouldDirty, !0),
        a.shouldValidate && fe(r);
    },
    B = (r, i, a) => {
      for (const f in i) {
        const c = i[f],
          o = `${r}.${f}`,
          h = d(n, o);
        (g.array.has(r) || !pe(c) || (h && !h._f)) && !ue(c)
          ? B(o, c, a)
          : L(o, c, a);
      }
    },
    M = (r, i, a = {}) => {
      const f = d(n, r),
        c = g.array.has(r),
        o = U(i);
      V(l, r, o),
        c
          ? (v.array.next({ name: r, values: { ...l } }),
            (m.isDirty || m.dirtyFields) &&
              a.shouldDirty &&
              v.state.next({
                name: r,
                dirtyFields: be(u, l),
                isDirty: _(r, o),
              }))
          : f && !f._f && !I(o)
          ? B(r, o, a)
          : L(r, o, a),
        Qe(r, g) && v.state.next({ ...t }),
        v.values.next({ name: y.mount ? r : void 0, values: { ...l } });
    },
    oe = async (r) => {
      y.mount = !0;
      const i = r.target;
      let a = i.name,
        f = !0;
      const c = d(n, a),
        o = () => (i.type ? Ie(c._f) : At(r)),
        h = (w) => {
          f = Number.isNaN(w) || w === d(l, a, w);
        };
      if (c) {
        let w, S;
        const R = o(),
          ae = r.type === Ge.BLUR || r.type === Ge.FOCUS_OUT,
          _t =
            (!Mt(c._f) && !s.resolver && !d(t.errors, a) && !c._f.deps) ||
            Ut(ae, d(t.touchedFields, a), t.isSubmitted, W, X),
          ke = Qe(a, g, ae);
        V(l, a, R),
          ae
            ? (c._f.onBlur && c._f.onBlur(r), O && O(0))
            : c._f.onChange && c._f.onChange(r);
        const Ee = se(a, R, ae, !1),
          xt = !N(Ee) || ke;
        if (
          (!ae && v.values.next({ name: a, type: r.type, values: { ...l } }),
          _t)
        )
          return (
            m.isValid && H(), xt && v.state.next({ name: a, ...(ke ? {} : Ee) })
          );
        if ((!ae && ke && v.state.next({ ...t }), s.resolver)) {
          const { errors: Ke } = await ee([a]);
          if ((h(R), f)) {
            const bt = st(t.errors, n, a),
              ze = st(Ke, n, bt.name || a);
            (w = ze.error), (a = ze.name), (S = N(Ke));
          }
        } else
          Z([a], !0),
            (w = (await rt(c, l, C, s.shouldUseNativeValidation))[a]),
            Z([a]),
            h(R),
            f && (w ? (S = !1) : m.isValid && (S = await P(n, !0)));
        f && (c._f.deps && fe(c._f.deps), ve(a, S, w, Ee));
      }
    },
    ce = (r, i) => {
      if (d(t.errors, i) && r.focus) return r.focus(), 1;
    },
    fe = async (r, i = {}) => {
      let a, f;
      const c = Se(r);
      if (s.resolver) {
        const o = await ie(A(r) ? r : c);
        (a = N(o)), (f = r ? !c.some((h) => d(o, h)) : a);
      } else
        r
          ? ((f = (
              await Promise.all(
                c.map(async (o) => {
                  const h = d(n, o);
                  return await P(h && h._f ? { [o]: h } : h);
                })
              )
            ).every(Boolean)),
            !(!f && !t.isValid) && H())
          : (f = a = await P(n));
      return (
        v.state.next({
          ...(!$(r) || (m.isValid && a !== t.isValid) ? {} : { name: r }),
          ...(s.resolver || !r ? { isValid: a } : {}),
          errors: t.errors,
        }),
        i.shouldFocus && !f && ye(n, ce, r ? c : g.mount),
        f
      );
    },
    Ue = (r) => {
      const i = { ...(y.mount ? l : u) };
      return A(r) ? i : $(r) ? d(i, r) : r.map((a) => d(i, a));
    },
    je = (r, i) => ({
      invalid: !!d((i || t).errors, r),
      isDirty: !!d((i || t).dirtyFields, r),
      isTouched: !!d((i || t).touchedFields, r),
      isValidating: !!d((i || t).validatingFields, r),
      error: d((i || t).errors, r),
    }),
    yt = (r) => {
      r && Se(r).forEach((i) => k(t.errors, i)),
        v.state.next({ errors: r ? t.errors : {} });
    },
    Be = (r, i, a) => {
      const f = (d(n, r, { _f: {} })._f || {}).ref;
      V(t.errors, r, { ...i, ref: f }),
        v.state.next({ name: r, errors: t.errors, isValid: !1 }),
        a && a.shouldFocus && f && f.focus && f.focus();
    },
    ht = (r, i) =>
      Q(r)
        ? v.values.subscribe({ next: (a) => r(b(void 0, i), a) })
        : b(r, i, !0),
    Fe = (r, i = {}) => {
      for (const a of r ? Se(r) : g.mount)
        g.mount.delete(a),
          g.array.delete(a),
          i.keepValue || (k(n, a), k(l, a)),
          !i.keepError && k(t.errors, a),
          !i.keepDirty && k(t.dirtyFields, a),
          !i.keepTouched && k(t.touchedFields, a),
          !i.keepIsValidating && k(t.validatingFields, a),
          !s.shouldUnregister && !i.keepDefaultValue && k(u, a);
      v.values.next({ values: { ...l } }),
        v.state.next({ ...t, ...(i.keepDirty ? { isDirty: _() } : {}) }),
        !i.keepIsValid && H();
    },
    qe = ({ disabled: r, name: i, field: a, fields: f, value: c }) => {
      if (J(r)) {
        const o = r ? void 0 : A(c) ? Ie(a ? a._f : d(f, i)._f) : c;
        V(l, i, o), se(i, o, !1, !1, !0);
      }
    },
    De = (r, i = {}) => {
      let a = d(n, r);
      const f = J(i.disabled);
      return (
        V(n, r, {
          ...(a || {}),
          _f: {
            ...(a && a._f ? a._f : { ref: { name: r } }),
            name: r,
            mount: !0,
            ...i,
          },
        }),
        g.mount.add(r),
        a
          ? qe({ field: a, disabled: i.disabled, name: r, value: i.value })
          : F(r, !0, i.value),
        {
          ...(f ? { disabled: i.disabled } : {}),
          ...(s.progressive
            ? {
                required: !!i.required,
                min: de(i.min),
                max: de(i.max),
                minLength: de(i.minLength),
                maxLength: de(i.maxLength),
                pattern: de(i.pattern),
              }
            : {}),
          name: r,
          onChange: oe,
          onBlur: oe,
          ref: (c) => {
            if (c) {
              De(r, i), (a = d(n, r));
              const o =
                  (A(c.value) &&
                    c.querySelectorAll &&
                    c.querySelectorAll("input,select,textarea")[0]) ||
                  c,
                h = Nt(o),
                w = a._f.refs || [];
              if (h ? w.find((S) => S === o) : o === a._f.ref) return;
              V(n, r, {
                _f: {
                  ...a._f,
                  ...(h
                    ? {
                        refs: [
                          ...w.filter(Ce),
                          o,
                          ...(Array.isArray(d(u, r)) ? [{}] : []),
                        ],
                        ref: { type: o.type, name: r },
                      }
                    : { ref: o }),
                },
              }),
                F(r, !1, void 0, o);
            } else
              (a = d(n, r, {})),
                a._f && (a._f.mount = !1),
                (s.shouldUnregister || i.shouldUnregister) &&
                  !(Dt(g.array, r) && y.action) &&
                  g.unMount.add(r);
          },
        }
      );
    },
    We = () => s.shouldFocusError && ye(n, ce, g.mount),
    gt = (r) => {
      J(r) &&
        (v.state.next({ disabled: r }),
        ye(
          n,
          (i, a) => {
            let f = r;
            const c = d(n, a);
            c && J(c._f.disabled) && (f || (f = c._f.disabled)),
              (i.disabled = f);
          },
          0,
          !1
        ));
    },
    He = (r, i) => async (a) => {
      let f;
      a && (a.preventDefault && a.preventDefault(), a.persist && a.persist());
      let c = U(l);
      if ((v.state.next({ isSubmitting: !0 }), s.resolver)) {
        const { errors: o, values: h } = await ee();
        (t.errors = o), (c = h);
      } else await P(n);
      if ((k(t.errors, "root"), N(t.errors))) {
        v.state.next({ errors: {} });
        try {
          await r(c, a);
        } catch (o) {
          f = o;
        }
      } else i && (await i({ ...t.errors }, a)), We(), setTimeout(We);
      if (
        (v.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: N(t.errors) && !f,
          submitCount: t.submitCount + 1,
          errors: t.errors,
        }),
        f)
      )
        throw f;
    },
    vt = (r, i = {}) => {
      d(n, r) &&
        (A(i.defaultValue)
          ? M(r, U(d(u, r)))
          : (M(r, i.defaultValue), V(u, r, U(i.defaultValue))),
        i.keepTouched || k(t.touchedFields, r),
        i.keepDirty ||
          (k(t.dirtyFields, r),
          (t.isDirty = i.defaultValue ? _(r, U(d(u, r))) : _())),
        i.keepError || (k(t.errors, r), m.isValid && H()),
        v.state.next({ ...t }));
    },
    Ze = (r, i = {}) => {
      const a = r ? U(r) : u,
        f = U(a),
        c = N(r),
        o = c ? u : f;
      if ((i.keepDefaultValues || (u = a), !i.keepValues)) {
        if (i.keepDirtyValues)
          for (const h of g.mount)
            d(t.dirtyFields, h) ? V(o, h, d(l, h)) : M(h, d(o, h));
        else {
          if (Re && A(r))
            for (const h of g.mount) {
              const w = d(n, h);
              if (w && w._f) {
                const S = Array.isArray(w._f.refs) ? w._f.refs[0] : w._f.ref;
                if (Ve(S)) {
                  const R = S.closest("form");
                  if (R) {
                    R.reset();
                    break;
                  }
                }
              }
            }
          n = {};
        }
        (l = e.shouldUnregister ? (i.keepDefaultValues ? U(u) : {}) : U(o)),
          v.array.next({ values: { ...o } }),
          v.values.next({ values: { ...o } });
      }
      (g = {
        mount: i.keepDirtyValues ? g.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: "",
      }),
        (y.mount = !m.isValid || !!i.keepIsValid || !!i.keepDirtyValues),
        (y.watch = !!e.shouldUnregister),
        v.state.next({
          submitCount: i.keepSubmitCount ? t.submitCount : 0,
          isDirty: c
            ? !1
            : i.keepDirty
            ? t.isDirty
            : !!(i.keepDefaultValues && !re(r, u)),
          isSubmitted: i.keepIsSubmitted ? t.isSubmitted : !1,
          dirtyFields: c
            ? []
            : i.keepDirtyValues
            ? i.keepDefaultValues && l
              ? be(u, l)
              : t.dirtyFields
            : i.keepDefaultValues && r
            ? be(u, r)
            : {},
          touchedFields: i.keepTouched ? t.touchedFields : {},
          errors: i.keepErrors ? t.errors : {},
          isSubmitSuccessful: i.keepIsSubmitSuccessful
            ? t.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
        });
    },
    $e = (r, i) => Ze(Q(r) ? r(l) : r, i);
  return {
    control: {
      register: De,
      unregister: Fe,
      getFieldState: je,
      handleSubmit: He,
      setError: Be,
      _executeSchema: ee,
      _getWatch: b,
      _getDirty: _,
      _updateValid: H,
      _removeUnmounted: _e,
      _updateFieldArray: x,
      _updateDisabledField: qe,
      _getFieldArray: D,
      _reset: Ze,
      _resetDefaultValues: () =>
        Q(s.defaultValues) &&
        s.defaultValues().then((r) => {
          $e(r, s.resetOptions), v.state.next({ isLoading: !1 });
        }),
      _updateFormState: (r) => {
        t = { ...t, ...r };
      },
      _disableForm: gt,
      _subjects: v,
      _proxyFormState: m,
      _setErrors: z,
      get _fields() {
        return n;
      },
      get _formValues() {
        return l;
      },
      get _state() {
        return y;
      },
      set _state(r) {
        y = r;
      },
      get _defaultValues() {
        return u;
      },
      get _names() {
        return g;
      },
      set _names(r) {
        g = r;
      },
      get _formState() {
        return t;
      },
      set _formState(r) {
        t = r;
      },
      get _options() {
        return s;
      },
      set _options(r) {
        s = { ...s, ...r };
      },
    },
    trigger: fe,
    register: De,
    handleSubmit: He,
    watch: ht,
    setValue: M,
    getValues: Ue,
    reset: $e,
    resetField: vt,
    clearErrors: yt,
    unregister: Fe,
    setError: Be,
    setFocus: (r, i = {}) => {
      const a = d(n, r),
        f = a && a._f;
      if (f) {
        const c = f.refs ? f.refs[0] : f.ref;
        c.focus && (c.focus(), i.shouldSelect && c.select());
      }
    },
    getFieldState: je,
  };
}
function ur(e = {}) {
  const s = T.useRef(),
    t = T.useRef(),
    [n, u] = T.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: Q(e.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
      errors: e.errors || {},
      disabled: e.disabled || !1,
      defaultValues: Q(e.defaultValues) ? void 0 : e.defaultValues,
    });
  s.current || (s.current = { ...qt(e), formState: n });
  const l = s.current.control;
  return (
    (l._options = e),
    Lt({
      subject: l._subjects.state,
      next: (y) => {
        St(y, l._proxyFormState, l._updateFormState) && u({ ...l._formState });
      },
    }),
    T.useEffect(() => l._disableForm(e.disabled), [l, e.disabled]),
    T.useEffect(() => {
      if (l._proxyFormState.isDirty) {
        const y = l._getDirty();
        y !== n.isDirty && l._subjects.state.next({ isDirty: y });
      }
    }, [l, n.isDirty]),
    T.useEffect(() => {
      e.values && !re(e.values, t.current)
        ? (l._reset(e.values, l._options.resetOptions),
          (t.current = e.values),
          u((y) => ({ ...y })))
        : l._resetDefaultValues();
    }, [e.values, l]),
    T.useEffect(() => {
      e.errors && l._setErrors(e.errors);
    }, [e.errors, l]),
    T.useEffect(() => {
      l._state.mount || (l._updateValid(), (l._state.mount = !0)),
        l._state.watch &&
          ((l._state.watch = !1), l._subjects.state.next({ ...l._formState })),
        l._removeUnmounted();
    }),
    T.useEffect(() => {
      e.shouldUnregister && l._subjects.values.next({ values: l._getWatch() });
    }, [e.shouldUnregister, l]),
    (s.current.formState = Et(n, l)),
    s.current
  );
}
const Wt = (e) => {
    const t = e.split(".")[1];
    return JSON.parse(atob(t)).restaurant_id;
  },
  Me = {
    login: (e) => ne.post("auth/admin/login ", e),
    register: (e) => ne.post("auth/register", e),
    checkEmail: (e) => ne.post("auth/checkEmail", e),
    checkCode: (e) => ne.post("auth/checkCode", e),
    restorePassword: (e) => ne.post("auth/restorePassword", e),
    updatePassword: (e) => ne.post("auth/updatePassword", e),
  },
  or = () =>
    Oe({
      mutationFn: (e) => Me.login(e),
      onSuccess: ({
        data: {
          Data: { refresh_token: e, acces_token: s },
        },
      }) => {
        localStorage.setItem("acces_token", s),
          localStorage.setItem("refresh_token", e),
          localStorage.setItem("restaurant_id", Wt(s));
      },
    }),
  cr = () => Oe({ mutationFn: (e) => Me.checkCode(e) }),
  fr = () => Oe({ mutationFn: (e) => Me.updatePassword(e) }),
  Ht = "_wrapper_dn310_1",
  Zt = "_inputWrapper_dn310_7",
  $t = "_label_dn310_17",
  Kt = "_input_dn310_7",
  zt = "_error_dn310_45",
  Gt = "_required_dn310_56",
  Jt = "_btnEye_dn310_61",
  te = {
    wrapper: Ht,
    inputWrapper: Zt,
    label: $t,
    input: Kt,
    error: zt,
    required: Gt,
    btnEye: Jt,
  },
  Qt =
    "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='16'%20height='16'%20rx='8'%20fill='%23F76659'/%3e%3cg%20clipPath='url(%23clip0_762_114)'%3e%3cpath%20d='M11.5%205.205L10.795%204.5L8%207.295L5.205%204.5L4.5%205.205L7.295%208L4.5%2010.795L5.205%2011.5L8%208.705L10.795%2011.5L11.5%2010.795L8.705%208L11.5%205.205Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_762_114'%3e%3crect%20width='12'%20height='12'%20fill='white'%20transform='translate(2%202)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
var Xt = it({
    displayName: "ViewOffIcon",
    path: p.jsxs("g", {
      fill: "currentColor",
      children: [
        p.jsx("path", {
          d: "M23.2,10.549a20.954,20.954,0,0,0-4.3-3.6l4-3.995a1,1,0,1,0-1.414-1.414l-.018.018a.737.737,0,0,1-.173.291l-19.5,19.5c-.008.007-.018.009-.026.017a1,1,0,0,0,1.631,1.088l4.146-4.146a11.26,11.26,0,0,0,4.31.939h.3c4.256,0,8.489-2.984,11.051-5.8A2.171,2.171,0,0,0,23.2,10.549ZM16.313,13.27a4.581,4.581,0,0,1-3,3.028,4.3,4.3,0,0,1-3.1-.19.253.253,0,0,1-.068-.407l5.56-5.559a.252.252,0,0,1,.407.067A4.3,4.3,0,0,1,16.313,13.27Z",
        }),
        p.jsx("path", {
          d: "M7.615,13.4a.244.244,0,0,0,.061-.24A4.315,4.315,0,0,1,7.5,12,4.5,4.5,0,0,1,12,7.5a4.276,4.276,0,0,1,1.16.173.244.244,0,0,0,.24-.062l1.941-1.942a.254.254,0,0,0-.1-.421A10.413,10.413,0,0,0,12,4.75C7.7,4.692,3.4,7.7.813,10.549a2.15,2.15,0,0,0-.007,2.9,21.209,21.209,0,0,0,3.438,3.03.256.256,0,0,0,.326-.029Z",
        }),
      ],
    }),
  }),
  Yt = it({
    displayName: "ViewIcon",
    path: p.jsxs("g", {
      fill: "currentColor",
      children: [
        p.jsx("path", {
          d: "M23.432,10.524C20.787,7.614,16.4,4.538,12,4.6,7.6,4.537,3.213,7.615.568,10.524a2.211,2.211,0,0,0,0,2.948C3.182,16.351,7.507,19.4,11.839,19.4h.308c4.347,0,8.671-3.049,11.288-5.929A2.21,2.21,0,0,0,23.432,10.524ZM7.4,12A4.6,4.6,0,1,1,12,16.6,4.6,4.6,0,0,1,7.4,12Z",
        }),
        p.jsx("circle", { cx: "12", cy: "12", r: "2" }),
      ],
    }),
  });
const dr = T.forwardRef(
  (
    {
      name: e,
      maxLength: s,
      error: t,
      minLength: n,
      required: u,
      alt: l,
      src: y,
      register: g = () => {},
      placeholder: O,
      type: j,
      label: m,
      id: v,
      ...X
    },
    W
  ) => {
    const { ...C } = X,
      [Y, H] = wt.useState(!1),
      Z = () => H(!Y);
    return p.jsxs(xe, {
      className: te.wrapper,
      children: [
        p.jsxs(xe, {
          display: "flex",
          flexDirection: "column",
          children: [
            p.jsxs("label", {
              className: te.label,
              htmlFor: v,
              children: [
                m,
                p.jsx("span", { className: te.required, children: "*" }),
              ],
            }),
            p.jsx(xe, {
              className: te.inputWrapper,
              children: p.jsxs(Vt, {
                display: "flex",
                alignItems: "center",
                size: "md",
                children: [
                  p.jsx("img", { src: y, alt: l, width: 24, height: 24 }),
                  p.jsx("input", {
                    className: pt(te.input, {
                      [te.error]: !!(t != null && t.message),
                    }),
                    ...C,
                    ref: W,
                    ...g(e),
                    ...X,
                    type: Y ? "text" : "password",
                    id: v,
                    maxLength: s || 20,
                    minLength: n || 4,
                    placeholder: O,
                    required: u,
                  }),
                  p.jsx(mt, {
                    children: p.jsx("button", {
                      className: te.btnEye,
                      type: "button",
                      onClick: Z,
                      children: Y ? p.jsx(Yt, {}) : p.jsx(Xt, {}),
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
        (t == null ? void 0 : t.message) &&
          p.jsxs(xe, {
            display: "flex",
            alignItems: "center",
            marginTop: "8px",
            children: [
              p.jsx("img", { src: Qt, alt: "error", width: 16, height: 16 }),
              p.jsx("p", {
                style: { color: "red", marginLeft: "8px" },
                children: t == null ? void 0 : t.message,
              }),
            ],
          }),
      ],
    });
  }
);
export { dr as A, Qt as E, or as a, cr as b, fr as c, ur as u };

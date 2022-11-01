function m() {
}
function T(t) {
  return t();
}
function M() {
  return /* @__PURE__ */ Object.create(null);
}
function _(t) {
  t.forEach(T);
}
function j(t) {
  return typeof t == "function";
}
function z(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function D(t) {
  return Object.keys(t).length === 0;
}
function s(t, e) {
  t.appendChild(e);
}
function P(t, e, n) {
  t.insertBefore(e, n || null);
}
function V(t) {
  t.parentNode.removeChild(t);
}
function $(t) {
  return document.createElement(t);
}
function p(t) {
  return document.createTextNode(t);
}
function H() {
  return p(" ");
}
function v(t, e, n, o) {
  return t.addEventListener(e, n, o), () => t.removeEventListener(e, n, o);
}
function N(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function F(t) {
  return Array.from(t.childNodes);
}
function O(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function G(t) {
  const e = {};
  for (const n of t)
    e[n.name] = n.value;
  return e;
}
let I;
function x(t) {
  I = t;
}
const y = [], R = [], w = [], B = [], J = Promise.resolve();
let A = !1;
function K() {
  A || (A = !0, J.then(C));
}
function S(t) {
  w.push(t);
}
const L = /* @__PURE__ */ new Set();
let E = 0;
function C() {
  const t = I;
  do {
    for (; E < y.length; ) {
      const e = y[E];
      E++, x(e), Q(e.$$);
    }
    for (x(null), y.length = 0, E = 0; R.length; )
      R.pop()();
    for (let e = 0; e < w.length; e += 1) {
      const n = w[e];
      L.has(n) || (L.add(n), n());
    }
    w.length = 0;
  } while (y.length);
  for (; B.length; )
    B.pop()();
  A = !1, L.clear(), x(t);
}
function Q(t) {
  if (t.fragment !== null) {
    t.update(), _(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(S);
  }
}
const U = /* @__PURE__ */ new Set();
function W(t, e) {
  t && t.i && (U.delete(t), t.i(e));
}
function X(t, e, n, o) {
  const { fragment: i, after_update: u } = t.$$;
  i && i.m(e, n), o || S(() => {
    const c = t.$$.on_mount.map(T).filter(j);
    t.$$.on_destroy ? t.$$.on_destroy.push(...c) : _(c), t.$$.on_mount = [];
  }), u.forEach(S);
}
function Y(t, e) {
  const n = t.$$;
  n.fragment !== null && (_(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Z(t, e) {
  t.$$.dirty[0] === -1 && (y.push(t), K(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function tt(t, e, n, o, i, u, c, a = [-1]) {
  const d = I;
  x(t);
  const r = t.$$ = {
    fragment: null,
    ctx: [],
    props: u,
    update: m,
    not_equal: i,
    bound: M(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (d ? d.$$.context : [])),
    callbacks: M(),
    dirty: a,
    skip_bound: !1,
    root: e.target || d.$$.root
  };
  c && c(r.root);
  let g = !1;
  if (r.ctx = n ? n(t, e.props || {}, (l, h, ...b) => {
    const f = b.length ? b[0] : h;
    return r.ctx && i(r.ctx[l], r.ctx[l] = f) && (!r.skip_bound && r.bound[l] && r.bound[l](f), g && Z(t, l)), h;
  }) : [], r.update(), g = !0, _(r.before_update), r.fragment = o ? o(r.ctx) : !1, e.target) {
    if (e.hydrate) {
      const l = F(e.target);
      r.fragment && r.fragment.l(l), l.forEach(V);
    } else
      r.fragment && r.fragment.c();
    e.intro && W(t.$$.fragment), X(t, e.target, e.anchor, e.customElement), C();
  }
  x(d);
}
let q;
typeof HTMLElement == "function" && (q = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: t } = this.$$;
    this.$$.on_disconnect = t.map(T).filter(j);
    for (const e in this.$$.slotted)
      this.appendChild(this.$$.slotted[e]);
  }
  attributeChangedCallback(t, e, n) {
    this[t] = n;
  }
  disconnectedCallback() {
    _(this.$$.on_disconnect);
  }
  $destroy() {
    Y(this, 1), this.$destroy = m;
  }
  $on(t, e) {
    if (!j(e))
      return m;
    const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return n.push(e), () => {
      const o = n.indexOf(e);
      o !== -1 && n.splice(o, 1);
    };
  }
  $set(t) {
    this.$$set && !D(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
});
function et(t) {
  let e, n, o, i, u, c, a, d, r, g, l, h, b;
  return {
    c() {
      e = $("div"), n = $("div"), o = $("p"), i = p("Color (in svelte): "), u = p(t[0]), c = H(), a = $("button"), a.textContent = "Increment", d = H(), r = $("p"), g = p("Count is "), l = p(t[1]), this.c = m, N(n, "class", "box"), N(e, "class", "box");
    },
    m(f, k) {
      P(f, e, k), s(e, n), s(n, o), s(o, i), s(o, u), s(n, c), s(n, a), s(n, d), s(n, r), s(r, g), s(r, l), h || (b = [
        v(a, "click", t[2]),
        v(a, "increment", nt),
        v(n, "increment", rt),
        v(e, "increment", ot)
      ], h = !0);
    },
    p(f, [k]) {
      k & 1 && O(u, f[0]), k & 2 && O(l, f[1]);
    },
    i: m,
    o: m,
    d(f) {
      f && V(e), h = !1, _(b);
    }
  };
}
function nt(t) {
  console.debug("handle increment in self", { e: t });
}
function rt(t) {
  console.debug("handle increment in local", { e: t });
}
function ot(t) {
  console.debug("handle increment in local 2", { e: t });
}
function ct(t, e, n) {
  let { color: o = "blue" } = e, i = 0;
  const u = (c) => {
    n(1, i += 1);
    const a = new CustomEvent(
      "increment",
      {
        detail: { count: i },
        bubbles: !0,
        composed: !0
      }
    );
    c.target.dispatchEvent(a);
  };
  return t.$$set = (c) => {
    "color" in c && n(0, o = c.color);
  }, [o, i, u];
}
class it extends q {
  constructor(e) {
    super(), this.shadowRoot.innerHTML = "<style>.box{border:solid 1px;padding:1rem}</style>", tt(
      this,
      {
        target: this.shadowRoot,
        props: G(this.attributes),
        customElement: !0
      },
      ct,
      et,
      z,
      { color: 0 },
      null
    ), e && (e.target && P(e.target, this, e.anchor), e.props && (this.$set(e.props), C()));
  }
  static get observedAttributes() {
    return ["color"];
  }
  get color() {
    return this.$$.ctx[0];
  }
  set color(e) {
    this.$$set({ color: e }), C();
  }
}
customElements.define("my-counter", it);

var uo;
function p(e, t, n) {
  function o(A, a) {
    if (A._zod || Object.defineProperty(A, "_zod", {
      value: {
        def: a,
        constr: s,
        traits: /* @__PURE__ */ new Set()
      },
      enumerable: !1
    }), A._zod.traits.has(e))
      return;
    A._zod.traits.add(e), t(A, a);
    const c = s.prototype, g = Object.keys(c);
    for (let u = 0; u < g.length; u++) {
      const l = g[u];
      l in A || (A[l] = c[l].bind(A));
    }
  }
  const r = n?.Parent ?? Object;
  class i extends r {
  }
  Object.defineProperty(i, "name", { value: e });
  function s(A) {
    var a;
    const c = n?.Parent ? new i() : this;
    o(c, A), (a = c._zod).deferred ?? (a.deferred = []);
    for (const g of c._zod.deferred)
      g();
    return c;
  }
  return Object.defineProperty(s, "init", { value: o }), Object.defineProperty(s, Symbol.hasInstance, {
    value: (A) => n?.Parent && A instanceof n.Parent ? !0 : A?._zod?.traits?.has(e)
  }), Object.defineProperty(s, "name", { value: e }), s;
}
class Je extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class _r extends Error {
  constructor(t) {
    super(`Encountered unidirectional transform during encode: ${t}`), this.name = "ZodEncodeError";
  }
}
(uo = globalThis).__zod_globalConfig ?? (uo.__zod_globalConfig = {});
const Hn = globalThis.__zod_globalConfig;
function Be(e) {
  return Hn;
}
function Qr(e) {
  const t = Object.values(e).filter((o) => typeof o == "number");
  return Object.entries(e).filter(([o, r]) => t.indexOf(+o) === -1).map(([o, r]) => r);
}
function Dn(e, t) {
  return typeof t == "bigint" ? t.toString() : t;
}
function en(e) {
  return {
    get value() {
      {
        const t = e();
        return Object.defineProperty(this, "value", { value: t }), t;
      }
    }
  };
}
function Kn(e) {
  return e == null;
}
function jn(e) {
  const t = e.startsWith("^") ? 1 : 0, n = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, n);
}
function Ci(e, t) {
  const n = e / t, o = Math.round(n), r = Number.EPSILON * Math.max(Math.abs(n), 1);
  return Math.abs(n - o) < r ? 0 : n - o;
}
const lo = /* @__PURE__ */ Symbol("evaluating");
function x(e, t, n) {
  let o;
  Object.defineProperty(e, t, {
    get() {
      if (o !== lo)
        return o === void 0 && (o = lo, o = n()), o;
    },
    set(r) {
      Object.defineProperty(e, t, {
        value: r
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function ze(e, t, n) {
  Object.defineProperty(e, t, {
    value: n,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function De(...e) {
  const t = {};
  for (const n of e) {
    const o = Object.getOwnPropertyDescriptors(n);
    Object.assign(t, o);
  }
  return Object.defineProperties({}, t);
}
function fo(e) {
  return JSON.stringify(e);
}
function yi(e) {
  return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const br = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function Bt(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const vi = /* @__PURE__ */ en(() => {
  if (Hn.jitless || typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const e = Function;
    return new e(""), !0;
  } catch {
    return !1;
  }
});
function et(e) {
  if (Bt(e) === !1)
    return !1;
  const t = e.constructor;
  if (t === void 0 || typeof t != "function")
    return !0;
  const n = t.prototype;
  return !(Bt(n) === !1 || Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") === !1);
}
function xr(e) {
  return et(e) ? { ...e } : Array.isArray(e) ? [...e] : e instanceof Map ? new Map(e) : e instanceof Set ? new Set(e) : e;
}
const _i = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function tt(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Se(e, t, n) {
  const o = new e._zod.constr(t ?? e._zod.def);
  return (!t || n?.parent) && (o._zod.parent = e), o;
}
function I(e) {
  const t = e;
  if (!t)
    return {};
  if (typeof t == "string")
    return { error: () => t };
  if (t?.message !== void 0) {
    if (t?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    t.error = t.message;
  }
  return delete t.message, typeof t.error == "string" ? { ...t, error: () => t.error } : t;
}
function Qi(e) {
  return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
const bi = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function xi(e, t) {
  const n = e._zod.def, o = n.checks;
  if (o && o.length > 0)
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  const i = De(e._zod.def, {
    get shape() {
      const s = {};
      for (const A in t) {
        if (!(A in n.shape))
          throw new Error(`Unrecognized key: "${A}"`);
        t[A] && (s[A] = n.shape[A]);
      }
      return ze(this, "shape", s), s;
    },
    checks: []
  });
  return Se(e, i);
}
function Di(e, t) {
  const n = e._zod.def, o = n.checks;
  if (o && o.length > 0)
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  const i = De(e._zod.def, {
    get shape() {
      const s = { ...e._zod.def.shape };
      for (const A in t) {
        if (!(A in n.shape))
          throw new Error(`Unrecognized key: "${A}"`);
        t[A] && delete s[A];
      }
      return ze(this, "shape", s), s;
    },
    checks: []
  });
  return Se(e, i);
}
function Si(e, t) {
  if (!et(t))
    throw new Error("Invalid input to extend: expected a plain object");
  const n = e._zod.def.checks;
  if (n && n.length > 0) {
    const i = e._zod.def.shape;
    for (const s in t)
      if (Object.getOwnPropertyDescriptor(i, s) !== void 0)
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  const r = De(e._zod.def, {
    get shape() {
      const i = { ...e._zod.def.shape, ...t };
      return ze(this, "shape", i), i;
    }
  });
  return Se(e, r);
}
function Ri(e, t) {
  if (!et(t))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const n = De(e._zod.def, {
    get shape() {
      const o = { ...e._zod.def.shape, ...t };
      return ze(this, "shape", o), o;
    }
  });
  return Se(e, n);
}
function ki(e, t) {
  if (e._zod.def.checks?.length)
    throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
  const n = De(e._zod.def, {
    get shape() {
      const o = { ...e._zod.def.shape, ...t._zod.def.shape };
      return ze(this, "shape", o), o;
    },
    get catchall() {
      return t._zod.def.catchall;
    },
    checks: t._zod.def.checks ?? []
  });
  return Se(e, n);
}
function Ti(e, t, n) {
  const r = t._zod.def.checks;
  if (r && r.length > 0)
    throw new Error(".partial() cannot be used on object schemas containing refinements");
  const s = De(t._zod.def, {
    get shape() {
      const A = t._zod.def.shape, a = { ...A };
      if (n)
        for (const c in n) {
          if (!(c in A))
            throw new Error(`Unrecognized key: "${c}"`);
          n[c] && (a[c] = e ? new e({
            type: "optional",
            innerType: A[c]
          }) : A[c]);
        }
      else
        for (const c in A)
          a[c] = e ? new e({
            type: "optional",
            innerType: A[c]
          }) : A[c];
      return ze(this, "shape", a), a;
    },
    checks: []
  });
  return Se(t, s);
}
function Oi(e, t, n) {
  const o = De(t._zod.def, {
    get shape() {
      const r = t._zod.def.shape, i = { ...r };
      if (n)
        for (const s in n) {
          if (!(s in i))
            throw new Error(`Unrecognized key: "${s}"`);
          n[s] && (i[s] = new e({
            type: "nonoptional",
            innerType: r[s]
          }));
        }
      else
        for (const s in r)
          i[s] = new e({
            type: "nonoptional",
            innerType: r[s]
          });
      return ze(this, "shape", i), i;
    }
  });
  return Se(t, o);
}
function je(e, t = 0) {
  if (e.aborted === !0)
    return !0;
  for (let n = t; n < e.issues.length; n++)
    if (e.issues[n]?.continue !== !0)
      return !0;
  return !1;
}
function Yi(e, t = 0) {
  if (e.aborted === !0)
    return !0;
  for (let n = t; n < e.issues.length; n++)
    if (e.issues[n]?.continue === !1)
      return !0;
  return !1;
}
function Qe(e, t) {
  return t.map((n) => {
    var o;
    return (o = n).path ?? (o.path = []), n.path.unshift(e), n;
  });
}
function Yt(e) {
  return typeof e == "string" ? e : e?.message;
}
function Ie(e, t, n) {
  const o = e.message ? e.message : Yt(e.inst?._zod.def?.error?.(e)) ?? Yt(t?.error?.(e)) ?? Yt(n.customError?.(e)) ?? Yt(n.localeError?.(e)) ?? "Invalid input", { inst: r, continue: i, input: s, ...A } = e;
  return A.path ?? (A.path = []), A.message = o, t?.reportInput && (A.input = s), A;
}
function Zn(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function It(...e) {
  const [t, n, o] = e;
  return typeof t == "string" ? {
    message: t,
    code: "custom",
    input: n,
    inst: o
  } : { ...t };
}
const Dr = (e, t) => {
  e.name = "$ZodError", Object.defineProperty(e, "_zod", {
    value: e._zod,
    enumerable: !1
  }), Object.defineProperty(e, "issues", {
    value: t,
    enumerable: !1
  }), e.message = JSON.stringify(t, Dn, 2), Object.defineProperty(e, "toString", {
    value: () => e.message,
    enumerable: !1
  });
}, Sr = p("$ZodError", Dr), Rr = p("$ZodError", Dr, { Parent: Error });
function Fi(e, t = (n) => n.message) {
  const n = {}, o = [];
  for (const r of e.issues)
    r.path.length > 0 ? (n[r.path[0]] = n[r.path[0]] || [], n[r.path[0]].push(t(r))) : o.push(t(r));
  return { formErrors: o, fieldErrors: n };
}
function Mi(e, t = (n) => n.message) {
  const n = { _errors: [] }, o = (r, i = []) => {
    for (const s of r.issues)
      if (s.code === "invalid_union" && s.errors.length)
        s.errors.map((A) => o({ issues: A }, [...i, ...s.path]));
      else if (s.code === "invalid_key")
        o({ issues: s.issues }, [...i, ...s.path]);
      else if (s.code === "invalid_element")
        o({ issues: s.issues }, [...i, ...s.path]);
      else {
        const A = [...i, ...s.path];
        if (A.length === 0)
          n._errors.push(t(s));
        else {
          let a = n, c = 0;
          for (; c < A.length; ) {
            const g = A[c];
            c === A.length - 1 ? (a[g] = a[g] || { _errors: [] }, a[g]._errors.push(t(s))) : a[g] = a[g] || { _errors: [] }, a = a[g], c++;
          }
        }
      }
  };
  return o(e), n;
}
const Wn = (e) => (t, n, o, r) => {
  const i = o ? { ...o, async: !1 } : { async: !1 }, s = t._zod.run({ value: n, issues: [] }, i);
  if (s instanceof Promise)
    throw new Je();
  if (s.issues.length) {
    const A = new (r?.Err ?? e)(s.issues.map((a) => Ie(a, i, Be())));
    throw br(A, r?.callee), A;
  }
  return s.value;
}, Jn = (e) => async (t, n, o, r) => {
  const i = o ? { ...o, async: !0 } : { async: !0 };
  let s = t._zod.run({ value: n, issues: [] }, i);
  if (s instanceof Promise && (s = await s), s.issues.length) {
    const A = new (r?.Err ?? e)(s.issues.map((a) => Ie(a, i, Be())));
    throw br(A, r?.callee), A;
  }
  return s.value;
}, tn = (e) => (t, n, o) => {
  const r = o ? { ...o, async: !1 } : { async: !1 }, i = t._zod.run({ value: n, issues: [] }, r);
  if (i instanceof Promise)
    throw new Je();
  return i.issues.length ? {
    success: !1,
    error: new (e ?? Sr)(i.issues.map((s) => Ie(s, r, Be())))
  } : { success: !0, data: i.value };
}, Ni = /* @__PURE__ */ tn(Rr), nn = (e) => async (t, n, o) => {
  const r = o ? { ...o, async: !0 } : { async: !0 };
  let i = t._zod.run({ value: n, issues: [] }, r);
  return i instanceof Promise && (i = await i), i.issues.length ? {
    success: !1,
    error: new e(i.issues.map((s) => Ie(s, r, Be())))
  } : { success: !0, data: i.value };
}, zi = /* @__PURE__ */ nn(Rr), Gi = (e) => (t, n, o) => {
  const r = o ? { ...o, direction: "backward" } : { direction: "backward" };
  return Wn(e)(t, n, r);
}, Ui = (e) => (t, n, o) => Wn(e)(t, n, o), Li = (e) => async (t, n, o) => {
  const r = o ? { ...o, direction: "backward" } : { direction: "backward" };
  return Jn(e)(t, n, r);
}, Pi = (e) => async (t, n, o) => Jn(e)(t, n, o), Hi = (e) => (t, n, o) => {
  const r = o ? { ...o, direction: "backward" } : { direction: "backward" };
  return tn(e)(t, n, r);
}, Ki = (e) => (t, n, o) => tn(e)(t, n, o), ji = (e) => async (t, n, o) => {
  const r = o ? { ...o, direction: "backward" } : { direction: "backward" };
  return nn(e)(t, n, r);
}, Zi = (e) => async (t, n, o) => nn(e)(t, n, o), Wi = /^[cC][0-9a-z]{6,}$/, Ji = /^[0-9a-z]+$/, qi = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, Vi = /^[0-9a-vA-V]{20}$/, $i = /^[A-Za-z0-9]{27}$/, Xi = /^[a-zA-Z0-9_-]{21}$/, eA = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, tA = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, po = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, nA = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, oA = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function rA() {
  return new RegExp(oA, "u");
}
const sA = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, iA = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, AA = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, aA = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, cA = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, kr = /^[A-Za-z0-9_-]*$/, gA = /^https?$/, uA = /^\+[1-9]\d{6,14}$/, Tr = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", lA = /* @__PURE__ */ new RegExp(`^${Tr}$`);
function Or(e) {
  const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function dA(e) {
  return new RegExp(`^${Or(e)}$`);
}
function fA(e) {
  const t = Or({ precision: e.precision }), n = ["Z"];
  e.local && n.push(""), e.offset && n.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const o = `${t}(?:${n.join("|")})`;
  return new RegExp(`^${Tr}T(?:${o})$`);
}
const pA = (e) => {
  const t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${t}$`);
}, mA = /^-?\d+n?$/, hA = /^-?\d+$/, Yr = /^-?\d+(?:\.\d+)?$/, EA = /^(?:true|false)$/i, BA = /^null$/i, IA = /^[^A-Z]*$/, wA = /^[^a-z]*$/, V = /* @__PURE__ */ p("$ZodCheck", (e, t) => {
  var n;
  e._zod ?? (e._zod = {}), e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
}), Fr = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, Mr = /* @__PURE__ */ p("$ZodCheckLessThan", (e, t) => {
  V.init(e, t);
  const n = Fr[typeof t.value];
  e._zod.onattach.push((o) => {
    const r = o._zod.bag, i = (t.inclusive ? r.maximum : r.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    t.value < i && (t.inclusive ? r.maximum = t.value : r.exclusiveMaximum = t.value);
  }), e._zod.check = (o) => {
    (t.inclusive ? o.value <= t.value : o.value < t.value) || o.issues.push({
      origin: n,
      code: "too_big",
      maximum: typeof t.value == "object" ? t.value.getTime() : t.value,
      input: o.value,
      inclusive: t.inclusive,
      inst: e,
      continue: !t.abort
    });
  };
}), Nr = /* @__PURE__ */ p("$ZodCheckGreaterThan", (e, t) => {
  V.init(e, t);
  const n = Fr[typeof t.value];
  e._zod.onattach.push((o) => {
    const r = o._zod.bag, i = (t.inclusive ? r.minimum : r.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    t.value > i && (t.inclusive ? r.minimum = t.value : r.exclusiveMinimum = t.value);
  }), e._zod.check = (o) => {
    (t.inclusive ? o.value >= t.value : o.value > t.value) || o.issues.push({
      origin: n,
      code: "too_small",
      minimum: typeof t.value == "object" ? t.value.getTime() : t.value,
      input: o.value,
      inclusive: t.inclusive,
      inst: e,
      continue: !t.abort
    });
  };
}), CA = /* @__PURE__ */ p("$ZodCheckMultipleOf", (e, t) => {
  V.init(e, t), e._zod.onattach.push((n) => {
    var o;
    (o = n._zod.bag).multipleOf ?? (o.multipleOf = t.value);
  }), e._zod.check = (n) => {
    if (typeof n.value != typeof t.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof n.value == "bigint" ? n.value % t.value === BigInt(0) : Ci(n.value, t.value) === 0) || n.issues.push({
      origin: typeof n.value,
      code: "not_multiple_of",
      divisor: t.value,
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), yA = /* @__PURE__ */ p("$ZodCheckNumberFormat", (e, t) => {
  V.init(e, t), t.format = t.format || "float64";
  const n = t.format?.includes("int"), o = n ? "int" : "number", [r, i] = bi[t.format];
  e._zod.onattach.push((s) => {
    const A = s._zod.bag;
    A.format = t.format, A.minimum = r, A.maximum = i, n && (A.pattern = hA);
  }), e._zod.check = (s) => {
    const A = s.value;
    if (n) {
      if (!Number.isInteger(A)) {
        s.issues.push({
          expected: o,
          format: t.format,
          code: "invalid_type",
          continue: !1,
          input: A,
          inst: e
        });
        return;
      }
      if (!Number.isSafeInteger(A)) {
        A > 0 ? s.issues.push({
          input: A,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: o,
          inclusive: !0,
          continue: !t.abort
        }) : s.issues.push({
          input: A,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: o,
          inclusive: !0,
          continue: !t.abort
        });
        return;
      }
    }
    A < r && s.issues.push({
      origin: "number",
      input: A,
      code: "too_small",
      minimum: r,
      inclusive: !0,
      inst: e,
      continue: !t.abort
    }), A > i && s.issues.push({
      origin: "number",
      input: A,
      code: "too_big",
      maximum: i,
      inclusive: !0,
      inst: e,
      continue: !t.abort
    });
  };
}), vA = /* @__PURE__ */ p("$ZodCheckMaxLength", (e, t) => {
  var n;
  V.init(e, t), (n = e._zod.def).when ?? (n.when = (o) => {
    const r = o.value;
    return !Kn(r) && r.length !== void 0;
  }), e._zod.onattach.push((o) => {
    const r = o._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    t.maximum < r && (o._zod.bag.maximum = t.maximum);
  }), e._zod.check = (o) => {
    const r = o.value;
    if (r.length <= t.maximum)
      return;
    const s = Zn(r);
    o.issues.push({
      origin: s,
      code: "too_big",
      maximum: t.maximum,
      inclusive: !0,
      input: r,
      inst: e,
      continue: !t.abort
    });
  };
}), _A = /* @__PURE__ */ p("$ZodCheckMinLength", (e, t) => {
  var n;
  V.init(e, t), (n = e._zod.def).when ?? (n.when = (o) => {
    const r = o.value;
    return !Kn(r) && r.length !== void 0;
  }), e._zod.onattach.push((o) => {
    const r = o._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    t.minimum > r && (o._zod.bag.minimum = t.minimum);
  }), e._zod.check = (o) => {
    const r = o.value;
    if (r.length >= t.minimum)
      return;
    const s = Zn(r);
    o.issues.push({
      origin: s,
      code: "too_small",
      minimum: t.minimum,
      inclusive: !0,
      input: r,
      inst: e,
      continue: !t.abort
    });
  };
}), QA = /* @__PURE__ */ p("$ZodCheckLengthEquals", (e, t) => {
  var n;
  V.init(e, t), (n = e._zod.def).when ?? (n.when = (o) => {
    const r = o.value;
    return !Kn(r) && r.length !== void 0;
  }), e._zod.onattach.push((o) => {
    const r = o._zod.bag;
    r.minimum = t.length, r.maximum = t.length, r.length = t.length;
  }), e._zod.check = (o) => {
    const r = o.value, i = r.length;
    if (i === t.length)
      return;
    const s = Zn(r), A = i > t.length;
    o.issues.push({
      origin: s,
      ...A ? { code: "too_big", maximum: t.length } : { code: "too_small", minimum: t.length },
      inclusive: !0,
      exact: !0,
      input: o.value,
      inst: e,
      continue: !t.abort
    });
  };
}), on = /* @__PURE__ */ p("$ZodCheckStringFormat", (e, t) => {
  var n, o;
  V.init(e, t), e._zod.onattach.push((r) => {
    const i = r._zod.bag;
    i.format = t.format, t.pattern && (i.patterns ?? (i.patterns = /* @__PURE__ */ new Set()), i.patterns.add(t.pattern));
  }), t.pattern ? (n = e._zod).check ?? (n.check = (r) => {
    t.pattern.lastIndex = 0, !t.pattern.test(r.value) && r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: t.format,
      input: r.value,
      ...t.pattern ? { pattern: t.pattern.toString() } : {},
      inst: e,
      continue: !t.abort
    });
  }) : (o = e._zod).check ?? (o.check = () => {
  });
}), bA = /* @__PURE__ */ p("$ZodCheckRegex", (e, t) => {
  on.init(e, t), e._zod.check = (n) => {
    t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: n.value,
      pattern: t.pattern.toString(),
      inst: e,
      continue: !t.abort
    });
  };
}), xA = /* @__PURE__ */ p("$ZodCheckLowerCase", (e, t) => {
  t.pattern ?? (t.pattern = IA), on.init(e, t);
}), DA = /* @__PURE__ */ p("$ZodCheckUpperCase", (e, t) => {
  t.pattern ?? (t.pattern = wA), on.init(e, t);
}), SA = /* @__PURE__ */ p("$ZodCheckIncludes", (e, t) => {
  V.init(e, t);
  const n = tt(t.includes), o = new RegExp(typeof t.position == "number" ? `^.{${t.position}}${n}` : n);
  t.pattern = o, e._zod.onattach.push((r) => {
    const i = r._zod.bag;
    i.patterns ?? (i.patterns = /* @__PURE__ */ new Set()), i.patterns.add(o);
  }), e._zod.check = (r) => {
    r.value.includes(t.includes, t.position) || r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: t.includes,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), RA = /* @__PURE__ */ p("$ZodCheckStartsWith", (e, t) => {
  V.init(e, t);
  const n = new RegExp(`^${tt(t.prefix)}.*`);
  t.pattern ?? (t.pattern = n), e._zod.onattach.push((o) => {
    const r = o._zod.bag;
    r.patterns ?? (r.patterns = /* @__PURE__ */ new Set()), r.patterns.add(n);
  }), e._zod.check = (o) => {
    o.value.startsWith(t.prefix) || o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: t.prefix,
      input: o.value,
      inst: e,
      continue: !t.abort
    });
  };
}), kA = /* @__PURE__ */ p("$ZodCheckEndsWith", (e, t) => {
  V.init(e, t);
  const n = new RegExp(`.*${tt(t.suffix)}$`);
  t.pattern ?? (t.pattern = n), e._zod.onattach.push((o) => {
    const r = o._zod.bag;
    r.patterns ?? (r.patterns = /* @__PURE__ */ new Set()), r.patterns.add(n);
  }), e._zod.check = (o) => {
    o.value.endsWith(t.suffix) || o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: t.suffix,
      input: o.value,
      inst: e,
      continue: !t.abort
    });
  };
}), TA = /* @__PURE__ */ p("$ZodCheckOverwrite", (e, t) => {
  V.init(e, t), e._zod.check = (n) => {
    n.value = t.tx(n.value);
  };
});
class OA {
  constructor(t = []) {
    this.content = [], this.indent = 0, this && (this.args = t);
  }
  indented(t) {
    this.indent += 1, t(this), this.indent -= 1;
  }
  write(t) {
    if (typeof t == "function") {
      t(this, { execution: "sync" }), t(this, { execution: "async" });
      return;
    }
    const o = t.split(`
`).filter((s) => s), r = Math.min(...o.map((s) => s.length - s.trimStart().length)), i = o.map((s) => s.slice(r)).map((s) => " ".repeat(this.indent * 2) + s);
    for (const s of i)
      this.content.push(s);
  }
  compile() {
    const t = Function, n = this?.args, r = [...(this?.content ?? [""]).map((i) => `  ${i}`)];
    return new t(...n, r.join(`
`));
  }
}
const YA = {
  major: 4,
  minor: 4,
  patch: 3
}, k = /* @__PURE__ */ p("$ZodType", (e, t) => {
  var n;
  e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = YA;
  const o = [...e._zod.def.checks ?? []];
  e._zod.traits.has("$ZodCheck") && o.unshift(e);
  for (const r of o)
    for (const i of r._zod.onattach)
      i(e);
  if (o.length === 0)
    (n = e._zod).deferred ?? (n.deferred = []), e._zod.deferred?.push(() => {
      e._zod.run = e._zod.parse;
    });
  else {
    const r = (s, A, a) => {
      let c = je(s), g;
      for (const u of A) {
        if (u._zod.def.when) {
          if (Yi(s) || !u._zod.def.when(s))
            continue;
        } else if (c)
          continue;
        const l = s.issues.length, d = u._zod.check(s);
        if (d instanceof Promise && a?.async === !1)
          throw new Je();
        if (g || d instanceof Promise)
          g = (g ?? Promise.resolve()).then(async () => {
            await d, s.issues.length !== l && (c || (c = je(s, l)));
          });
        else {
          if (s.issues.length === l)
            continue;
          c || (c = je(s, l));
        }
      }
      return g ? g.then(() => s) : s;
    }, i = (s, A, a) => {
      if (je(s))
        return s.aborted = !0, s;
      const c = r(A, o, a);
      if (c instanceof Promise) {
        if (a.async === !1)
          throw new Je();
        return c.then((g) => e._zod.parse(g, a));
      }
      return e._zod.parse(c, a);
    };
    e._zod.run = (s, A) => {
      if (A.skipChecks)
        return e._zod.parse(s, A);
      if (A.direction === "backward") {
        const c = e._zod.parse({ value: s.value, issues: [] }, { ...A, skipChecks: !0 });
        return c instanceof Promise ? c.then((g) => i(g, s, A)) : i(c, s, A);
      }
      const a = e._zod.parse(s, A);
      if (a instanceof Promise) {
        if (A.async === !1)
          throw new Je();
        return a.then((c) => r(c, o, A));
      }
      return r(a, o, A);
    };
  }
  x(e, "~standard", () => ({
    validate: (r) => {
      try {
        const i = Ni(e, r);
        return i.success ? { value: i.data } : { issues: i.error?.issues };
      } catch {
        return zi(e, r).then((s) => s.success ? { value: s.data } : { issues: s.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  }));
}), qn = /* @__PURE__ */ p("$ZodString", (e, t) => {
  k.init(e, t), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? pA(e._zod.bag), e._zod.parse = (n, o) => {
    if (t.coerce)
      try {
        n.value = String(n.value);
      } catch {
      }
    return typeof n.value == "string" || n.issues.push({
      expected: "string",
      code: "invalid_type",
      input: n.value,
      inst: e
    }), n;
  };
}), F = /* @__PURE__ */ p("$ZodStringFormat", (e, t) => {
  on.init(e, t), qn.init(e, t);
}), FA = /* @__PURE__ */ p("$ZodGUID", (e, t) => {
  t.pattern ?? (t.pattern = tA), F.init(e, t);
}), MA = /* @__PURE__ */ p("$ZodUUID", (e, t) => {
  if (t.version) {
    const o = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[t.version];
    if (o === void 0)
      throw new Error(`Invalid UUID version: "${t.version}"`);
    t.pattern ?? (t.pattern = po(o));
  } else
    t.pattern ?? (t.pattern = po());
  F.init(e, t);
}), NA = /* @__PURE__ */ p("$ZodEmail", (e, t) => {
  t.pattern ?? (t.pattern = nA), F.init(e, t);
}), zA = /* @__PURE__ */ p("$ZodURL", (e, t) => {
  F.init(e, t), e._zod.check = (n) => {
    try {
      const o = n.value.trim();
      if (!t.normalize && t.protocol?.source === gA.source && !/^https?:\/\//i.test(o)) {
        n.issues.push({
          code: "invalid_format",
          format: "url",
          note: "Invalid URL format",
          input: n.value,
          inst: e,
          continue: !t.abort
        });
        return;
      }
      const r = new URL(o);
      t.hostname && (t.hostname.lastIndex = 0, t.hostname.test(r.hostname) || n.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: t.hostname.source,
        input: n.value,
        inst: e,
        continue: !t.abort
      })), t.protocol && (t.protocol.lastIndex = 0, t.protocol.test(r.protocol.endsWith(":") ? r.protocol.slice(0, -1) : r.protocol) || n.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: t.protocol.source,
        input: n.value,
        inst: e,
        continue: !t.abort
      })), t.normalize ? n.value = r.href : n.value = o;
      return;
    } catch {
      n.issues.push({
        code: "invalid_format",
        format: "url",
        input: n.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
}), GA = /* @__PURE__ */ p("$ZodEmoji", (e, t) => {
  t.pattern ?? (t.pattern = rA()), F.init(e, t);
}), UA = /* @__PURE__ */ p("$ZodNanoID", (e, t) => {
  t.pattern ?? (t.pattern = Xi), F.init(e, t);
}), LA = /* @__PURE__ */ p("$ZodCUID", (e, t) => {
  t.pattern ?? (t.pattern = Wi), F.init(e, t);
}), PA = /* @__PURE__ */ p("$ZodCUID2", (e, t) => {
  t.pattern ?? (t.pattern = Ji), F.init(e, t);
}), HA = /* @__PURE__ */ p("$ZodULID", (e, t) => {
  t.pattern ?? (t.pattern = qi), F.init(e, t);
}), KA = /* @__PURE__ */ p("$ZodXID", (e, t) => {
  t.pattern ?? (t.pattern = Vi), F.init(e, t);
}), jA = /* @__PURE__ */ p("$ZodKSUID", (e, t) => {
  t.pattern ?? (t.pattern = $i), F.init(e, t);
}), ZA = /* @__PURE__ */ p("$ZodISODateTime", (e, t) => {
  t.pattern ?? (t.pattern = fA(t)), F.init(e, t);
}), WA = /* @__PURE__ */ p("$ZodISODate", (e, t) => {
  t.pattern ?? (t.pattern = lA), F.init(e, t);
}), JA = /* @__PURE__ */ p("$ZodISOTime", (e, t) => {
  t.pattern ?? (t.pattern = dA(t)), F.init(e, t);
}), qA = /* @__PURE__ */ p("$ZodISODuration", (e, t) => {
  t.pattern ?? (t.pattern = eA), F.init(e, t);
}), VA = /* @__PURE__ */ p("$ZodIPv4", (e, t) => {
  t.pattern ?? (t.pattern = sA), F.init(e, t), e._zod.bag.format = "ipv4";
}), $A = /* @__PURE__ */ p("$ZodIPv6", (e, t) => {
  t.pattern ?? (t.pattern = iA), F.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (n) => {
    try {
      new URL(`http://[${n.value}]`);
    } catch {
      n.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: n.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
}), XA = /* @__PURE__ */ p("$ZodCIDRv4", (e, t) => {
  t.pattern ?? (t.pattern = AA), F.init(e, t);
}), ea = /* @__PURE__ */ p("$ZodCIDRv6", (e, t) => {
  t.pattern ?? (t.pattern = aA), F.init(e, t), e._zod.check = (n) => {
    const o = n.value.split("/");
    try {
      if (o.length !== 2)
        throw new Error();
      const [r, i] = o;
      if (!i)
        throw new Error();
      const s = Number(i);
      if (`${s}` !== i)
        throw new Error();
      if (s < 0 || s > 128)
        throw new Error();
      new URL(`http://[${r}]`);
    } catch {
      n.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: n.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
});
function zr(e) {
  if (e === "")
    return !0;
  if (/\s/.test(e) || e.length % 4 !== 0)
    return !1;
  try {
    return atob(e), !0;
  } catch {
    return !1;
  }
}
const ta = /* @__PURE__ */ p("$ZodBase64", (e, t) => {
  t.pattern ?? (t.pattern = cA), F.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (n) => {
    zr(n.value) || n.issues.push({
      code: "invalid_format",
      format: "base64",
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
});
function na(e) {
  if (!kr.test(e))
    return !1;
  const t = e.replace(/[-_]/g, (o) => o === "-" ? "+" : "/"), n = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return zr(n);
}
const oa = /* @__PURE__ */ p("$ZodBase64URL", (e, t) => {
  t.pattern ?? (t.pattern = kr), F.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (n) => {
    na(n.value) || n.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), ra = /* @__PURE__ */ p("$ZodE164", (e, t) => {
  t.pattern ?? (t.pattern = uA), F.init(e, t);
});
function sa(e, t = null) {
  try {
    const n = e.split(".");
    if (n.length !== 3)
      return !1;
    const [o] = n;
    if (!o)
      return !1;
    const r = JSON.parse(atob(o));
    return !("typ" in r && r?.typ !== "JWT" || !r.alg || t && (!("alg" in r) || r.alg !== t));
  } catch {
    return !1;
  }
}
const ia = /* @__PURE__ */ p("$ZodJWT", (e, t) => {
  F.init(e, t), e._zod.check = (n) => {
    sa(n.value, t.alg) || n.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Gr = /* @__PURE__ */ p("$ZodNumber", (e, t) => {
  k.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? Yr, e._zod.parse = (n, o) => {
    if (t.coerce)
      try {
        n.value = Number(n.value);
      } catch {
      }
    const r = n.value;
    if (typeof r == "number" && !Number.isNaN(r) && Number.isFinite(r))
      return n;
    const i = typeof r == "number" ? Number.isNaN(r) ? "NaN" : Number.isFinite(r) ? void 0 : "Infinity" : void 0;
    return n.issues.push({
      expected: "number",
      code: "invalid_type",
      input: r,
      inst: e,
      ...i ? { received: i } : {}
    }), n;
  };
}), Aa = /* @__PURE__ */ p("$ZodNumberFormat", (e, t) => {
  yA.init(e, t), Gr.init(e, t);
}), aa = /* @__PURE__ */ p("$ZodBoolean", (e, t) => {
  k.init(e, t), e._zod.pattern = EA, e._zod.parse = (n, o) => {
    if (t.coerce)
      try {
        n.value = !!n.value;
      } catch {
      }
    const r = n.value;
    return typeof r == "boolean" || n.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input: r,
      inst: e
    }), n;
  };
}), ca = /* @__PURE__ */ p("$ZodBigInt", (e, t) => {
  k.init(e, t), e._zod.pattern = mA, e._zod.parse = (n, o) => {
    if (t.coerce)
      try {
        n.value = BigInt(n.value);
      } catch {
      }
    return typeof n.value == "bigint" || n.issues.push({
      expected: "bigint",
      code: "invalid_type",
      input: n.value,
      inst: e
    }), n;
  };
}), ga = /* @__PURE__ */ p("$ZodNull", (e, t) => {
  k.init(e, t), e._zod.pattern = BA, e._zod.values = /* @__PURE__ */ new Set([null]), e._zod.parse = (n, o) => {
    const r = n.value;
    return r === null || n.issues.push({
      expected: "null",
      code: "invalid_type",
      input: r,
      inst: e
    }), n;
  };
}), ua = /* @__PURE__ */ p("$ZodUnknown", (e, t) => {
  k.init(e, t), e._zod.parse = (n) => n;
}), la = /* @__PURE__ */ p("$ZodNever", (e, t) => {
  k.init(e, t), e._zod.parse = (n, o) => (n.issues.push({
    expected: "never",
    code: "invalid_type",
    input: n.value,
    inst: e
  }), n);
});
function mo(e, t, n) {
  e.issues.length && t.issues.push(...Qe(n, e.issues)), t.value[n] = e.value;
}
const da = /* @__PURE__ */ p("$ZodArray", (e, t) => {
  k.init(e, t), e._zod.parse = (n, o) => {
    const r = n.value;
    if (!Array.isArray(r))
      return n.issues.push({
        expected: "array",
        code: "invalid_type",
        input: r,
        inst: e
      }), n;
    n.value = Array(r.length);
    const i = [];
    for (let s = 0; s < r.length; s++) {
      const A = r[s], a = t.element._zod.run({
        value: A,
        issues: []
      }, o);
      a instanceof Promise ? i.push(a.then((c) => mo(c, n, s))) : mo(a, n, s);
    }
    return i.length ? Promise.all(i).then(() => n) : n;
  };
});
function Pt(e, t, n, o, r, i) {
  const s = n in o;
  if (e.issues.length) {
    if (r && i && !s)
      return;
    t.issues.push(...Qe(n, e.issues));
  }
  if (!s && !r) {
    e.issues.length || t.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: void 0,
      path: [n]
    });
    return;
  }
  e.value === void 0 ? s && (t.value[n] = void 0) : t.value[n] = e.value;
}
function Ur(e) {
  const t = Object.keys(e.shape);
  for (const o of t)
    if (!e.shape?.[o]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${o}": expected a Zod schema`);
  const n = Qi(e.shape);
  return {
    ...e,
    keys: t,
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(n)
  };
}
function Lr(e, t, n, o, r, i) {
  const s = [], A = r.keySet, a = r.catchall._zod, c = a.def.type, g = a.optin === "optional", u = a.optout === "optional";
  for (const l in t) {
    if (l === "__proto__" || A.has(l))
      continue;
    if (c === "never") {
      s.push(l);
      continue;
    }
    const d = a.run({ value: t[l], issues: [] }, o);
    d instanceof Promise ? e.push(d.then((f) => Pt(f, n, l, t, g, u))) : Pt(d, n, l, t, g, u);
  }
  return s.length && n.issues.push({
    code: "unrecognized_keys",
    keys: s,
    input: t,
    inst: i
  }), e.length ? Promise.all(e).then(() => n) : n;
}
const fa = /* @__PURE__ */ p("$ZodObject", (e, t) => {
  if (k.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
    const A = t.shape;
    Object.defineProperty(t, "shape", {
      get: () => {
        const a = { ...A };
        return Object.defineProperty(t, "shape", {
          value: a
        }), a;
      }
    });
  }
  const o = en(() => Ur(t));
  x(e._zod, "propValues", () => {
    const A = t.shape, a = {};
    for (const c in A) {
      const g = A[c]._zod;
      if (g.values) {
        a[c] ?? (a[c] = /* @__PURE__ */ new Set());
        for (const u of g.values)
          a[c].add(u);
      }
    }
    return a;
  });
  const r = Bt, i = t.catchall;
  let s;
  e._zod.parse = (A, a) => {
    s ?? (s = o.value);
    const c = A.value;
    if (!r(c))
      return A.issues.push({
        expected: "object",
        code: "invalid_type",
        input: c,
        inst: e
      }), A;
    A.value = {};
    const g = [], u = s.shape;
    for (const l of s.keys) {
      const d = u[l], f = d._zod.optin === "optional", E = d._zod.optout === "optional", m = d._zod.run({ value: c[l], issues: [] }, a);
      m instanceof Promise ? g.push(m.then((C) => Pt(C, A, l, c, f, E))) : Pt(m, A, l, c, f, E);
    }
    return i ? Lr(g, c, A, a, o.value, e) : g.length ? Promise.all(g).then(() => A) : A;
  };
}), pa = /* @__PURE__ */ p("$ZodObjectJIT", (e, t) => {
  fa.init(e, t);
  const n = e._zod.parse, o = en(() => Ur(t)), r = (l) => {
    const d = new OA(["shape", "payload", "ctx"]), f = o.value, E = (w) => {
      const v = fo(w);
      return `shape[${v}]._zod.run({ value: input[${v}], issues: [] }, ctx)`;
    };
    d.write("const input = payload.value;");
    const m = /* @__PURE__ */ Object.create(null);
    let C = 0;
    for (const w of f.keys)
      m[w] = `key_${C++}`;
    d.write("const newResult = {};");
    for (const w of f.keys) {
      const v = m[w], R = fo(w), K = l[w], Ae = K?._zod?.optin === "optional", $ = K?._zod?.optout === "optional";
      d.write(`const ${v} = ${E(w)};`), Ae && $ ? d.write(`
        if (${v}.issues.length) {
          if (${R} in input) {
            payload.issues = payload.issues.concat(${v}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${R}, ...iss.path] : [${R}]
            })));
          }
        }
        
        if (${v}.value === undefined) {
          if (${R} in input) {
            newResult[${R}] = undefined;
          }
        } else {
          newResult[${R}] = ${v}.value;
        }
        
      `) : Ae ? d.write(`
        if (${v}.issues.length) {
          payload.issues = payload.issues.concat(${v}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${R}, ...iss.path] : [${R}]
          })));
        }
        
        if (${v}.value === undefined) {
          if (${R} in input) {
            newResult[${R}] = undefined;
          }
        } else {
          newResult[${R}] = ${v}.value;
        }
        
      `) : d.write(`
        const ${v}_present = ${R} in input;
        if (${v}.issues.length) {
          payload.issues = payload.issues.concat(${v}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${R}, ...iss.path] : [${R}]
          })));
        }
        if (!${v}_present && !${v}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${R}]
          });
        }

        if (${v}_present) {
          if (${v}.value === undefined) {
            newResult[${R}] = undefined;
          } else {
            newResult[${R}] = ${v}.value;
          }
        }

      `);
    }
    d.write("payload.value = newResult;"), d.write("return payload;");
    const y = d.compile();
    return (w, v) => y(l, w, v);
  };
  let i;
  const s = Bt, A = !Hn.jitless, c = A && vi.value, g = t.catchall;
  let u;
  e._zod.parse = (l, d) => {
    u ?? (u = o.value);
    const f = l.value;
    return s(f) ? A && c && d?.async === !1 && d.jitless !== !0 ? (i || (i = r(t.shape)), l = i(l, d), g ? Lr([], f, l, d, u, e) : l) : n(l, d) : (l.issues.push({
      expected: "object",
      code: "invalid_type",
      input: f,
      inst: e
    }), l);
  };
});
function ho(e, t, n, o) {
  for (const i of e)
    if (i.issues.length === 0)
      return t.value = i.value, t;
  const r = e.filter((i) => !je(i));
  return r.length === 1 ? (t.value = r[0].value, r[0]) : (t.issues.push({
    code: "invalid_union",
    input: t.value,
    inst: n,
    errors: e.map((i) => i.issues.map((s) => Ie(s, o, Be())))
  }), t);
}
const Pr = /* @__PURE__ */ p("$ZodUnion", (e, t) => {
  k.init(e, t), x(e._zod, "optin", () => t.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0), x(e._zod, "optout", () => t.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0), x(e._zod, "values", () => {
    if (t.options.every((o) => o._zod.values))
      return new Set(t.options.flatMap((o) => Array.from(o._zod.values)));
  }), x(e._zod, "pattern", () => {
    if (t.options.every((o) => o._zod.pattern)) {
      const o = t.options.map((r) => r._zod.pattern);
      return new RegExp(`^(${o.map((r) => jn(r.source)).join("|")})$`);
    }
  });
  const n = t.options.length === 1 ? t.options[0]._zod.run : null;
  e._zod.parse = (o, r) => {
    if (n)
      return n(o, r);
    let i = !1;
    const s = [];
    for (const A of t.options) {
      const a = A._zod.run({
        value: o.value,
        issues: []
      }, r);
      if (a instanceof Promise)
        s.push(a), i = !0;
      else {
        if (a.issues.length === 0)
          return a;
        s.push(a);
      }
    }
    return i ? Promise.all(s).then((A) => ho(A, o, e, r)) : ho(s, o, e, r);
  };
}), ma = /* @__PURE__ */ p("$ZodDiscriminatedUnion", (e, t) => {
  t.inclusive = !1, Pr.init(e, t);
  const n = e._zod.parse;
  x(e._zod, "propValues", () => {
    const r = {};
    for (const i of t.options) {
      const s = i._zod.propValues;
      if (!s || Object.keys(s).length === 0)
        throw new Error(`Invalid discriminated union option at index "${t.options.indexOf(i)}"`);
      for (const [A, a] of Object.entries(s)) {
        r[A] || (r[A] = /* @__PURE__ */ new Set());
        for (const c of a)
          r[A].add(c);
      }
    }
    return r;
  });
  const o = en(() => {
    const r = t.options, i = /* @__PURE__ */ new Map();
    for (const s of r) {
      const A = s._zod.propValues?.[t.discriminator];
      if (!A || A.size === 0)
        throw new Error(`Invalid discriminated union option at index "${t.options.indexOf(s)}"`);
      for (const a of A) {
        if (i.has(a))
          throw new Error(`Duplicate discriminator value "${String(a)}"`);
        i.set(a, s);
      }
    }
    return i;
  });
  e._zod.parse = (r, i) => {
    const s = r.value;
    if (!Bt(s))
      return r.issues.push({
        code: "invalid_type",
        expected: "object",
        input: s,
        inst: e
      }), r;
    const A = o.value.get(s?.[t.discriminator]);
    return A ? A._zod.run(r, i) : t.unionFallback || i.direction === "backward" ? n(r, i) : (r.issues.push({
      code: "invalid_union",
      errors: [],
      note: "No matching discriminator",
      discriminator: t.discriminator,
      options: Array.from(o.value.keys()),
      input: s,
      path: [t.discriminator],
      inst: e
    }), r);
  };
}), ha = /* @__PURE__ */ p("$ZodIntersection", (e, t) => {
  k.init(e, t), e._zod.parse = (n, o) => {
    const r = n.value, i = t.left._zod.run({ value: r, issues: [] }, o), s = t.right._zod.run({ value: r, issues: [] }, o);
    return i instanceof Promise || s instanceof Promise ? Promise.all([i, s]).then(([a, c]) => Eo(n, a, c)) : Eo(n, i, s);
  };
});
function Sn(e, t) {
  if (e === t)
    return { valid: !0, data: e };
  if (e instanceof Date && t instanceof Date && +e == +t)
    return { valid: !0, data: e };
  if (et(e) && et(t)) {
    const n = Object.keys(t), o = Object.keys(e).filter((i) => n.indexOf(i) !== -1), r = { ...e, ...t };
    for (const i of o) {
      const s = Sn(e[i], t[i]);
      if (!s.valid)
        return {
          valid: !1,
          mergeErrorPath: [i, ...s.mergeErrorPath]
        };
      r[i] = s.data;
    }
    return { valid: !0, data: r };
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length)
      return { valid: !1, mergeErrorPath: [] };
    const n = [];
    for (let o = 0; o < e.length; o++) {
      const r = e[o], i = t[o], s = Sn(r, i);
      if (!s.valid)
        return {
          valid: !1,
          mergeErrorPath: [o, ...s.mergeErrorPath]
        };
      n.push(s.data);
    }
    return { valid: !0, data: n };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function Eo(e, t, n) {
  const o = /* @__PURE__ */ new Map();
  let r;
  for (const A of t.issues)
    if (A.code === "unrecognized_keys") {
      r ?? (r = A);
      for (const a of A.keys)
        o.has(a) || o.set(a, {}), o.get(a).l = !0;
    } else
      e.issues.push(A);
  for (const A of n.issues)
    if (A.code === "unrecognized_keys")
      for (const a of A.keys)
        o.has(a) || o.set(a, {}), o.get(a).r = !0;
    else
      e.issues.push(A);
  const i = [...o].filter(([, A]) => A.l && A.r).map(([A]) => A);
  if (i.length && r && e.issues.push({ ...r, keys: i }), je(e))
    return e;
  const s = Sn(t.value, n.value);
  if (!s.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(s.mergeErrorPath)}`);
  return e.value = s.data, e;
}
const Ea = /* @__PURE__ */ p("$ZodTuple", (e, t) => {
  k.init(e, t);
  const n = t.items;
  e._zod.parse = (o, r) => {
    const i = o.value;
    if (!Array.isArray(i))
      return o.issues.push({
        input: i,
        inst: e,
        expected: "tuple",
        code: "invalid_type"
      }), o;
    o.value = [];
    const s = [], A = Bo(n, "optin"), a = Bo(n, "optout");
    if (!t.rest) {
      if (i.length < A)
        return o.issues.push({
          code: "too_small",
          minimum: A,
          inclusive: !0,
          input: i,
          inst: e,
          origin: "array"
        }), o;
      i.length > n.length && o.issues.push({
        code: "too_big",
        maximum: n.length,
        inclusive: !0,
        input: i,
        inst: e,
        origin: "array"
      });
    }
    const c = new Array(n.length);
    for (let g = 0; g < n.length; g++) {
      const u = n[g]._zod.run({ value: i[g], issues: [] }, r);
      u instanceof Promise ? s.push(u.then((l) => {
        c[g] = l;
      })) : c[g] = u;
    }
    if (t.rest) {
      let g = n.length - 1;
      const u = i.slice(n.length);
      for (const l of u) {
        g++;
        const d = t.rest._zod.run({ value: l, issues: [] }, r);
        d instanceof Promise ? s.push(d.then((f) => Io(f, o, g))) : Io(d, o, g);
      }
    }
    return s.length ? Promise.all(s).then(() => wo(c, o, n, i, a)) : wo(c, o, n, i, a);
  };
});
function Bo(e, t) {
  for (let n = e.length - 1; n >= 0; n--)
    if (e[n]._zod[t] !== "optional")
      return n + 1;
  return 0;
}
function Io(e, t, n) {
  e.issues.length && t.issues.push(...Qe(n, e.issues)), t.value[n] = e.value;
}
function wo(e, t, n, o, r) {
  for (let i = 0; i < n.length; i++) {
    const s = e[i], A = i < o.length;
    if (s.issues.length) {
      if (!A && i >= r) {
        t.value.length = i;
        break;
      }
      t.issues.push(...Qe(i, s.issues));
    }
    t.value[i] = s.value;
  }
  for (let i = t.value.length - 1; i >= o.length && (n[i]._zod.optout === "optional" && t.value[i] === void 0); i--)
    t.value.length = i;
  return t;
}
const Ba = /* @__PURE__ */ p("$ZodRecord", (e, t) => {
  k.init(e, t), e._zod.parse = (n, o) => {
    const r = n.value;
    if (!et(r))
      return n.issues.push({
        expected: "record",
        code: "invalid_type",
        input: r,
        inst: e
      }), n;
    const i = [], s = t.keyType._zod.values;
    if (s) {
      n.value = {};
      const A = /* @__PURE__ */ new Set();
      for (const c of s)
        if (typeof c == "string" || typeof c == "number" || typeof c == "symbol") {
          A.add(typeof c == "number" ? c.toString() : c);
          const g = t.keyType._zod.run({ value: c, issues: [] }, o);
          if (g instanceof Promise)
            throw new Error("Async schemas not supported in object keys currently");
          if (g.issues.length) {
            n.issues.push({
              code: "invalid_key",
              origin: "record",
              issues: g.issues.map((d) => Ie(d, o, Be())),
              input: c,
              path: [c],
              inst: e
            });
            continue;
          }
          const u = g.value, l = t.valueType._zod.run({ value: r[c], issues: [] }, o);
          l instanceof Promise ? i.push(l.then((d) => {
            d.issues.length && n.issues.push(...Qe(c, d.issues)), n.value[u] = d.value;
          })) : (l.issues.length && n.issues.push(...Qe(c, l.issues)), n.value[u] = l.value);
        }
      let a;
      for (const c in r)
        A.has(c) || (a = a ?? [], a.push(c));
      a && a.length > 0 && n.issues.push({
        code: "unrecognized_keys",
        input: r,
        inst: e,
        keys: a
      });
    } else {
      n.value = {};
      for (const A of Reflect.ownKeys(r)) {
        if (A === "__proto__" || !Object.prototype.propertyIsEnumerable.call(r, A))
          continue;
        let a = t.keyType._zod.run({ value: A, issues: [] }, o);
        if (a instanceof Promise)
          throw new Error("Async schemas not supported in object keys currently");
        if (typeof A == "string" && Yr.test(A) && a.issues.length) {
          const u = t.keyType._zod.run({ value: Number(A), issues: [] }, o);
          if (u instanceof Promise)
            throw new Error("Async schemas not supported in object keys currently");
          u.issues.length === 0 && (a = u);
        }
        if (a.issues.length) {
          t.mode === "loose" ? n.value[A] = r[A] : n.issues.push({
            code: "invalid_key",
            origin: "record",
            issues: a.issues.map((u) => Ie(u, o, Be())),
            input: A,
            path: [A],
            inst: e
          });
          continue;
        }
        const g = t.valueType._zod.run({ value: r[A], issues: [] }, o);
        g instanceof Promise ? i.push(g.then((u) => {
          u.issues.length && n.issues.push(...Qe(A, u.issues)), n.value[a.value] = u.value;
        })) : (g.issues.length && n.issues.push(...Qe(A, g.issues)), n.value[a.value] = g.value);
      }
    }
    return i.length ? Promise.all(i).then(() => n) : n;
  };
}), Ia = /* @__PURE__ */ p("$ZodEnum", (e, t) => {
  k.init(e, t);
  const n = Qr(t.entries), o = new Set(n);
  e._zod.values = o, e._zod.pattern = new RegExp(`^(${n.filter((r) => _i.has(typeof r)).map((r) => typeof r == "string" ? tt(r) : r.toString()).join("|")})$`), e._zod.parse = (r, i) => {
    const s = r.value;
    return o.has(s) || r.issues.push({
      code: "invalid_value",
      values: n,
      input: s,
      inst: e
    }), r;
  };
}), wa = /* @__PURE__ */ p("$ZodLiteral", (e, t) => {
  if (k.init(e, t), t.values.length === 0)
    throw new Error("Cannot create literal schema with no valid values");
  const n = new Set(t.values);
  e._zod.values = n, e._zod.pattern = new RegExp(`^(${t.values.map((o) => typeof o == "string" ? tt(o) : o ? tt(o.toString()) : String(o)).join("|")})$`), e._zod.parse = (o, r) => {
    const i = o.value;
    return n.has(i) || o.issues.push({
      code: "invalid_value",
      values: t.values,
      input: i,
      inst: e
    }), o;
  };
}), Ca = /* @__PURE__ */ p("$ZodTransform", (e, t) => {
  k.init(e, t), e._zod.optin = "optional", e._zod.parse = (n, o) => {
    if (o.direction === "backward")
      throw new _r(e.constructor.name);
    const r = t.transform(n.value, n);
    if (o.async)
      return (r instanceof Promise ? r : Promise.resolve(r)).then((s) => (n.value = s, n.fallback = !0, n));
    if (r instanceof Promise)
      throw new Je();
    return n.value = r, n.fallback = !0, n;
  };
});
function Co(e, t) {
  return t === void 0 && (e.issues.length || e.fallback) ? { issues: [], value: void 0 } : e;
}
const Hr = /* @__PURE__ */ p("$ZodOptional", (e, t) => {
  k.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", x(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), x(e._zod, "pattern", () => {
    const n = t.innerType._zod.pattern;
    return n ? new RegExp(`^(${jn(n.source)})?$`) : void 0;
  }), e._zod.parse = (n, o) => {
    if (t.innerType._zod.optin === "optional") {
      const r = n.value, i = t.innerType._zod.run(n, o);
      return i instanceof Promise ? i.then((s) => Co(s, r)) : Co(i, r);
    }
    return n.value === void 0 ? n : t.innerType._zod.run(n, o);
  };
}), ya = /* @__PURE__ */ p("$ZodExactOptional", (e, t) => {
  Hr.init(e, t), x(e._zod, "values", () => t.innerType._zod.values), x(e._zod, "pattern", () => t.innerType._zod.pattern), e._zod.parse = (n, o) => t.innerType._zod.run(n, o);
}), va = /* @__PURE__ */ p("$ZodNullable", (e, t) => {
  k.init(e, t), x(e._zod, "optin", () => t.innerType._zod.optin), x(e._zod, "optout", () => t.innerType._zod.optout), x(e._zod, "pattern", () => {
    const n = t.innerType._zod.pattern;
    return n ? new RegExp(`^(${jn(n.source)}|null)$`) : void 0;
  }), x(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (n, o) => n.value === null ? n : t.innerType._zod.run(n, o);
}), _a = /* @__PURE__ */ p("$ZodDefault", (e, t) => {
  k.init(e, t), e._zod.optin = "optional", x(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, o) => {
    if (o.direction === "backward")
      return t.innerType._zod.run(n, o);
    if (n.value === void 0)
      return n.value = t.defaultValue, n;
    const r = t.innerType._zod.run(n, o);
    return r instanceof Promise ? r.then((i) => yo(i, t)) : yo(r, t);
  };
});
function yo(e, t) {
  return e.value === void 0 && (e.value = t.defaultValue), e;
}
const Qa = /* @__PURE__ */ p("$ZodPrefault", (e, t) => {
  k.init(e, t), e._zod.optin = "optional", x(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, o) => (o.direction === "backward" || n.value === void 0 && (n.value = t.defaultValue), t.innerType._zod.run(n, o));
}), ba = /* @__PURE__ */ p("$ZodNonOptional", (e, t) => {
  k.init(e, t), x(e._zod, "values", () => {
    const n = t.innerType._zod.values;
    return n ? new Set([...n].filter((o) => o !== void 0)) : void 0;
  }), e._zod.parse = (n, o) => {
    const r = t.innerType._zod.run(n, o);
    return r instanceof Promise ? r.then((i) => vo(i, e)) : vo(r, e);
  };
});
function vo(e, t) {
  return !e.issues.length && e.value === void 0 && e.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: e.value,
    inst: t
  }), e;
}
const xa = /* @__PURE__ */ p("$ZodCatch", (e, t) => {
  k.init(e, t), e._zod.optin = "optional", x(e._zod, "optout", () => t.innerType._zod.optout), x(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, o) => {
    if (o.direction === "backward")
      return t.innerType._zod.run(n, o);
    const r = t.innerType._zod.run(n, o);
    return r instanceof Promise ? r.then((i) => (n.value = i.value, i.issues.length && (n.value = t.catchValue({
      ...n,
      error: {
        issues: i.issues.map((s) => Ie(s, o, Be()))
      },
      input: n.value
    }), n.issues = [], n.fallback = !0), n)) : (n.value = r.value, r.issues.length && (n.value = t.catchValue({
      ...n,
      error: {
        issues: r.issues.map((i) => Ie(i, o, Be()))
      },
      input: n.value
    }), n.issues = [], n.fallback = !0), n);
  };
}), Da = /* @__PURE__ */ p("$ZodPipe", (e, t) => {
  k.init(e, t), x(e._zod, "values", () => t.in._zod.values), x(e._zod, "optin", () => t.in._zod.optin), x(e._zod, "optout", () => t.out._zod.optout), x(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (n, o) => {
    if (o.direction === "backward") {
      const i = t.out._zod.run(n, o);
      return i instanceof Promise ? i.then((s) => Ft(s, t.in, o)) : Ft(i, t.in, o);
    }
    const r = t.in._zod.run(n, o);
    return r instanceof Promise ? r.then((i) => Ft(i, t.out, o)) : Ft(r, t.out, o);
  };
});
function Ft(e, t, n) {
  return e.issues.length ? (e.aborted = !0, e) : t._zod.run({ value: e.value, issues: e.issues, fallback: e.fallback }, n);
}
const Sa = /* @__PURE__ */ p("$ZodReadonly", (e, t) => {
  k.init(e, t), x(e._zod, "propValues", () => t.innerType._zod.propValues), x(e._zod, "values", () => t.innerType._zod.values), x(e._zod, "optin", () => t.innerType?._zod?.optin), x(e._zod, "optout", () => t.innerType?._zod?.optout), e._zod.parse = (n, o) => {
    if (o.direction === "backward")
      return t.innerType._zod.run(n, o);
    const r = t.innerType._zod.run(n, o);
    return r instanceof Promise ? r.then(_o) : _o(r);
  };
});
function _o(e) {
  return e.value = Object.freeze(e.value), e;
}
const Ra = /* @__PURE__ */ p("$ZodLazy", (e, t) => {
  k.init(e, t), x(e._zod, "innerType", () => {
    const n = t;
    return n._cachedInner || (n._cachedInner = t.getter()), n._cachedInner;
  }), x(e._zod, "pattern", () => e._zod.innerType?._zod?.pattern), x(e._zod, "propValues", () => e._zod.innerType?._zod?.propValues), x(e._zod, "optin", () => e._zod.innerType?._zod?.optin ?? void 0), x(e._zod, "optout", () => e._zod.innerType?._zod?.optout ?? void 0), e._zod.parse = (n, o) => e._zod.innerType._zod.run(n, o);
}), ka = /* @__PURE__ */ p("$ZodCustom", (e, t) => {
  V.init(e, t), k.init(e, t), e._zod.parse = (n, o) => n, e._zod.check = (n) => {
    const o = n.value, r = t.fn(o);
    if (r instanceof Promise)
      return r.then((i) => Qo(i, n, o, e));
    Qo(r, n, o, e);
  };
});
function Qo(e, t, n, o) {
  if (!e) {
    const r = {
      code: "custom",
      input: n,
      inst: o,
      // incorporates params.error into issue reporting
      path: [...o._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !o._zod.def.abort
      // params: inst._zod.def.params,
    };
    o._zod.def.params && (r.params = o._zod.def.params), t.issues.push(It(r));
  }
}
var bo;
class Ta {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(t, ...n) {
    const o = n[0];
    return this._map.set(t, o), o && typeof o == "object" && "id" in o && this._idmap.set(o.id, t), this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(t) {
    const n = this._map.get(t);
    return n && typeof n == "object" && "id" in n && this._idmap.delete(n.id), this._map.delete(t), this;
  }
  get(t) {
    const n = t._zod.parent;
    if (n) {
      const o = { ...this.get(n) ?? {} };
      delete o.id;
      const r = { ...o, ...this._map.get(t) };
      return Object.keys(r).length ? r : void 0;
    }
    return this._map.get(t);
  }
  has(t) {
    return this._map.has(t);
  }
}
function Oa() {
  return new Ta();
}
(bo = globalThis).__zod_globalRegistry ?? (bo.__zod_globalRegistry = Oa());
const pt = globalThis.__zod_globalRegistry;
// @__NO_SIDE_EFFECTS__
function Ya(e, t) {
  return new e({
    type: "string",
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Fa(e, t) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function xo(e, t) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ma(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Na(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function za(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ga(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Kr(e, t) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ua(e, t) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function La(e, t) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Pa(e, t) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ha(e, t) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ka(e, t) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function ja(e, t) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Za(e, t) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Wa(e, t) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ja(e, t) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function qa(e, t) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Va(e, t) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function $a(e, t) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Xa(e, t) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function ec(e, t) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function tc(e, t) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function nc(e, t) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function oc(e, t) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function rc(e, t) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function sc(e, t) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function ic(e, t) {
  return new e({
    type: "number",
    checks: [],
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ac(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function ac(e, t) {
  return new e({
    type: "boolean",
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function cc(e, t) {
  return new e({
    type: "bigint",
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function gc(e, t) {
  return new e({
    type: "null",
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function uc(e) {
  return new e({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function lc(e, t) {
  return new e({
    type: "never",
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ht(e, t) {
  return new Mr({
    check: "less_than",
    ...I(t),
    value: e,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function qe(e, t) {
  return new Mr({
    check: "less_than",
    ...I(t),
    value: e,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function Kt(e, t) {
  return new Nr({
    check: "greater_than",
    ...I(t),
    value: e,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function _e(e, t) {
  return new Nr({
    check: "greater_than",
    ...I(t),
    value: e,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function Rn(e, t) {
  return new CA({
    check: "multiple_of",
    ...I(t),
    value: e
  });
}
// @__NO_SIDE_EFFECTS__
function jr(e, t) {
  return new vA({
    check: "max_length",
    ...I(t),
    maximum: e
  });
}
// @__NO_SIDE_EFFECTS__
function jt(e, t) {
  return new _A({
    check: "min_length",
    ...I(t),
    minimum: e
  });
}
// @__NO_SIDE_EFFECTS__
function Zr(e, t) {
  return new QA({
    check: "length_equals",
    ...I(t),
    length: e
  });
}
// @__NO_SIDE_EFFECTS__
function dc(e, t) {
  return new bA({
    check: "string_format",
    format: "regex",
    ...I(t),
    pattern: e
  });
}
// @__NO_SIDE_EFFECTS__
function fc(e) {
  return new xA({
    check: "string_format",
    format: "lowercase",
    ...I(e)
  });
}
// @__NO_SIDE_EFFECTS__
function pc(e) {
  return new DA({
    check: "string_format",
    format: "uppercase",
    ...I(e)
  });
}
// @__NO_SIDE_EFFECTS__
function mc(e, t) {
  return new SA({
    check: "string_format",
    format: "includes",
    ...I(t),
    includes: e
  });
}
// @__NO_SIDE_EFFECTS__
function hc(e, t) {
  return new RA({
    check: "string_format",
    format: "starts_with",
    ...I(t),
    prefix: e
  });
}
// @__NO_SIDE_EFFECTS__
function Ec(e, t) {
  return new kA({
    check: "string_format",
    format: "ends_with",
    ...I(t),
    suffix: e
  });
}
// @__NO_SIDE_EFFECTS__
function rt(e) {
  return new TA({
    check: "overwrite",
    tx: e
  });
}
// @__NO_SIDE_EFFECTS__
function Bc(e) {
  return /* @__PURE__ */ rt((t) => t.normalize(e));
}
// @__NO_SIDE_EFFECTS__
function Ic() {
  return /* @__PURE__ */ rt((e) => e.trim());
}
// @__NO_SIDE_EFFECTS__
function wc() {
  return /* @__PURE__ */ rt((e) => e.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function Cc() {
  return /* @__PURE__ */ rt((e) => e.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function yc() {
  return /* @__PURE__ */ rt((e) => yi(e));
}
// @__NO_SIDE_EFFECTS__
function vc(e, t, n) {
  return new e({
    type: "array",
    element: t,
    // get element() {
    //   return element;
    // },
    ...I(n)
  });
}
// @__NO_SIDE_EFFECTS__
function _c(e, t, n) {
  return new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...I(n)
  });
}
// @__NO_SIDE_EFFECTS__
function Qc(e, t) {
  const n = /* @__PURE__ */ bc((o) => (o.addIssue = (r) => {
    if (typeof r == "string")
      o.issues.push(It(r, o.value, n._zod.def));
    else {
      const i = r;
      i.fatal && (i.continue = !1), i.code ?? (i.code = "custom"), i.input ?? (i.input = o.value), i.inst ?? (i.inst = n), i.continue ?? (i.continue = !n._zod.def.abort), o.issues.push(It(i));
    }
  }, e(o.value, o)), t);
  return n;
}
// @__NO_SIDE_EFFECTS__
function bc(e, t) {
  const n = new V({
    check: "custom",
    ...I(t)
  });
  return n._zod.check = e, n;
}
function Wr(e) {
  let t = e?.target ?? "draft-2020-12";
  return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
    processors: e.processors ?? {},
    metadataRegistry: e?.metadata ?? pt,
    target: t,
    unrepresentable: e?.unrepresentable ?? "throw",
    override: e?.override ?? (() => {
    }),
    io: e?.io ?? "output",
    counter: 0,
    seen: /* @__PURE__ */ new Map(),
    cycles: e?.cycles ?? "ref",
    reused: e?.reused ?? "inline",
    external: e?.external ?? void 0
  };
}
function N(e, t, n = { path: [], schemaPath: [] }) {
  var o;
  const r = e._zod.def, i = t.seen.get(e);
  if (i)
    return i.count++, n.schemaPath.includes(e) && (i.cycle = n.path), i.schema;
  const s = { schema: {}, count: 1, cycle: void 0, path: n.path };
  t.seen.set(e, s);
  const A = e._zod.toJSONSchema?.();
  if (A)
    s.schema = A;
  else {
    const g = {
      ...n,
      schemaPath: [...n.schemaPath, e],
      path: n.path
    };
    if (e._zod.processJSONSchema)
      e._zod.processJSONSchema(t, s.schema, g);
    else {
      const l = s.schema, d = t.processors[r.type];
      if (!d)
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${r.type}`);
      d(e, t, l, g);
    }
    const u = e._zod.parent;
    u && (s.ref || (s.ref = u), N(u, t, g), t.seen.get(u).isParent = !0);
  }
  const a = t.metadataRegistry.get(e);
  return a && Object.assign(s.schema, a), t.io === "input" && Z(e) && (delete s.schema.examples, delete s.schema.default), t.io === "input" && "_prefault" in s.schema && ((o = s.schema).default ?? (o.default = s.schema._prefault)), delete s.schema._prefault, t.seen.get(e).schema;
}
function Jr(e, t) {
  const n = e.seen.get(t);
  if (!n)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const o = /* @__PURE__ */ new Map();
  for (const s of e.seen.entries()) {
    const A = e.metadataRegistry.get(s[0])?.id;
    if (A) {
      const a = o.get(A);
      if (a && a !== s[0])
        throw new Error(`Duplicate schema id "${A}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      o.set(A, s[0]);
    }
  }
  const r = (s) => {
    const A = e.target === "draft-2020-12" ? "$defs" : "definitions";
    if (e.external) {
      const u = e.external.registry.get(s[0])?.id, l = e.external.uri ?? ((f) => f);
      if (u)
        return { ref: l(u) };
      const d = s[1].defId ?? s[1].schema.id ?? `schema${e.counter++}`;
      return s[1].defId = d, { defId: d, ref: `${l("__shared")}#/${A}/${d}` };
    }
    if (s[1] === n)
      return { ref: "#" };
    const c = `#/${A}/`, g = s[1].schema.id ?? `__schema${e.counter++}`;
    return { defId: g, ref: c + g };
  }, i = (s) => {
    if (s[1].schema.$ref)
      return;
    const A = s[1], { ref: a, defId: c } = r(s);
    A.def = { ...A.schema }, c && (A.defId = c);
    const g = A.schema;
    for (const u in g)
      delete g[u];
    g.$ref = a;
  };
  if (e.cycles === "throw")
    for (const s of e.seen.entries()) {
      const A = s[1];
      if (A.cycle)
        throw new Error(`Cycle detected: #/${A.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
  for (const s of e.seen.entries()) {
    const A = s[1];
    if (t === s[0]) {
      i(s);
      continue;
    }
    if (e.external) {
      const c = e.external.registry.get(s[0])?.id;
      if (t !== s[0] && c) {
        i(s);
        continue;
      }
    }
    if (e.metadataRegistry.get(s[0])?.id) {
      i(s);
      continue;
    }
    if (A.cycle) {
      i(s);
      continue;
    }
    if (A.count > 1 && e.reused === "ref") {
      i(s);
      continue;
    }
  }
}
function qr(e, t) {
  const n = e.seen.get(t);
  if (!n)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const o = (A) => {
    const a = e.seen.get(A);
    if (a.ref === null)
      return;
    const c = a.def ?? a.schema, g = { ...c }, u = a.ref;
    if (a.ref = null, u) {
      o(u);
      const d = e.seen.get(u), f = d.schema;
      if (f.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (c.allOf = c.allOf ?? [], c.allOf.push(f)) : Object.assign(c, f), Object.assign(c, g), A._zod.parent === u)
        for (const m in c)
          m === "$ref" || m === "allOf" || m in g || delete c[m];
      if (f.$ref && d.def)
        for (const m in c)
          m === "$ref" || m === "allOf" || m in d.def && JSON.stringify(c[m]) === JSON.stringify(d.def[m]) && delete c[m];
    }
    const l = A._zod.parent;
    if (l && l !== u) {
      o(l);
      const d = e.seen.get(l);
      if (d?.schema.$ref && (c.$ref = d.schema.$ref, d.def))
        for (const f in c)
          f === "$ref" || f === "allOf" || f in d.def && JSON.stringify(c[f]) === JSON.stringify(d.def[f]) && delete c[f];
    }
    e.override({
      zodSchema: A,
      jsonSchema: c,
      path: a.path ?? []
    });
  };
  for (const A of [...e.seen.entries()].reverse())
    o(A[0]);
  const r = {};
  if (e.target === "draft-2020-12" ? r.$schema = "https://json-schema.org/draft/2020-12/schema" : e.target === "draft-07" ? r.$schema = "http://json-schema.org/draft-07/schema#" : e.target === "draft-04" ? r.$schema = "http://json-schema.org/draft-04/schema#" : e.target, e.external?.uri) {
    const A = e.external.registry.get(t)?.id;
    if (!A)
      throw new Error("Schema is missing an `id` property");
    r.$id = e.external.uri(A);
  }
  Object.assign(r, n.def ?? n.schema);
  const i = e.metadataRegistry.get(t)?.id;
  i !== void 0 && r.id === i && delete r.id;
  const s = e.external?.defs ?? {};
  for (const A of e.seen.entries()) {
    const a = A[1];
    a.def && a.defId && (a.def.id === a.defId && delete a.def.id, s[a.defId] = a.def);
  }
  e.external || Object.keys(s).length > 0 && (e.target === "draft-2020-12" ? r.$defs = s : r.definitions = s);
  try {
    const A = JSON.parse(JSON.stringify(r));
    return Object.defineProperty(A, "~standard", {
      value: {
        ...t["~standard"],
        jsonSchema: {
          input: Zt(t, "input", e.processors),
          output: Zt(t, "output", e.processors)
        }
      },
      enumerable: !1,
      writable: !1
    }), A;
  } catch {
    throw new Error("Error converting schema to JSON.");
  }
}
function Z(e, t) {
  const n = t ?? { seen: /* @__PURE__ */ new Set() };
  if (n.seen.has(e))
    return !1;
  n.seen.add(e);
  const o = e._zod.def;
  if (o.type === "transform")
    return !0;
  if (o.type === "array")
    return Z(o.element, n);
  if (o.type === "set")
    return Z(o.valueType, n);
  if (o.type === "lazy")
    return Z(o.getter(), n);
  if (o.type === "promise" || o.type === "optional" || o.type === "nonoptional" || o.type === "nullable" || o.type === "readonly" || o.type === "default" || o.type === "prefault")
    return Z(o.innerType, n);
  if (o.type === "intersection")
    return Z(o.left, n) || Z(o.right, n);
  if (o.type === "record" || o.type === "map")
    return Z(o.keyType, n) || Z(o.valueType, n);
  if (o.type === "pipe")
    return e._zod.traits.has("$ZodCodec") ? !0 : Z(o.in, n) || Z(o.out, n);
  if (o.type === "object") {
    for (const r in o.shape)
      if (Z(o.shape[r], n))
        return !0;
    return !1;
  }
  if (o.type === "union") {
    for (const r of o.options)
      if (Z(r, n))
        return !0;
    return !1;
  }
  if (o.type === "tuple") {
    for (const r of o.items)
      if (Z(r, n))
        return !0;
    return !!(o.rest && Z(o.rest, n));
  }
  return !1;
}
const xc = (e, t = {}) => (n) => {
  const o = Wr({ ...n, processors: t });
  return N(e, o), Jr(o, e), qr(o, e);
}, Zt = (e, t, n = {}) => (o) => {
  const { libraryOptions: r, target: i } = o ?? {}, s = Wr({ ...r ?? {}, target: i, io: t, processors: n });
  return N(e, s), Jr(s, e), qr(s, e);
}, Dc = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
  // do not set
}, Sc = (e, t, n, o) => {
  const r = n;
  r.type = "string";
  const { minimum: i, maximum: s, format: A, patterns: a, contentEncoding: c } = e._zod.bag;
  if (typeof i == "number" && (r.minLength = i), typeof s == "number" && (r.maxLength = s), A && (r.format = Dc[A] ?? A, r.format === "" && delete r.format, A === "time" && delete r.format), c && (r.contentEncoding = c), a && a.size > 0) {
    const g = [...a];
    g.length === 1 ? r.pattern = g[0].source : g.length > 1 && (r.allOf = [
      ...g.map((u) => ({
        ...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? { type: "string" } : {},
        pattern: u.source
      }))
    ]);
  }
}, Rc = (e, t, n, o) => {
  const r = n, { minimum: i, maximum: s, format: A, multipleOf: a, exclusiveMaximum: c, exclusiveMinimum: g } = e._zod.bag;
  typeof A == "string" && A.includes("int") ? r.type = "integer" : r.type = "number";
  const u = typeof g == "number" && g >= (i ?? Number.NEGATIVE_INFINITY), l = typeof c == "number" && c <= (s ?? Number.POSITIVE_INFINITY), d = t.target === "draft-04" || t.target === "openapi-3.0";
  u ? d ? (r.minimum = g, r.exclusiveMinimum = !0) : r.exclusiveMinimum = g : typeof i == "number" && (r.minimum = i), l ? d ? (r.maximum = c, r.exclusiveMaximum = !0) : r.exclusiveMaximum = c : typeof s == "number" && (r.maximum = s), typeof a == "number" && (r.multipleOf = a);
}, kc = (e, t, n, o) => {
  n.type = "boolean";
}, Tc = (e, t, n, o) => {
  if (t.unrepresentable === "throw")
    throw new Error("BigInt cannot be represented in JSON Schema");
}, Oc = (e, t, n, o) => {
  t.target === "openapi-3.0" ? (n.type = "string", n.nullable = !0, n.enum = [null]) : n.type = "null";
}, Yc = (e, t, n, o) => {
  n.not = {};
}, Fc = (e, t, n, o) => {
}, Mc = (e, t, n, o) => {
  const r = e._zod.def, i = Qr(r.entries);
  i.every((s) => typeof s == "number") && (n.type = "number"), i.every((s) => typeof s == "string") && (n.type = "string"), n.enum = i;
}, Nc = (e, t, n, o) => {
  const r = e._zod.def, i = [];
  for (const s of r.values)
    if (s === void 0) {
      if (t.unrepresentable === "throw")
        throw new Error("Literal `undefined` cannot be represented in JSON Schema");
    } else if (typeof s == "bigint") {
      if (t.unrepresentable === "throw")
        throw new Error("BigInt literals cannot be represented in JSON Schema");
      i.push(Number(s));
    } else
      i.push(s);
  if (i.length !== 0) if (i.length === 1) {
    const s = i[0];
    n.type = s === null ? "null" : typeof s, t.target === "draft-04" || t.target === "openapi-3.0" ? n.enum = [s] : n.const = s;
  } else
    i.every((s) => typeof s == "number") && (n.type = "number"), i.every((s) => typeof s == "string") && (n.type = "string"), i.every((s) => typeof s == "boolean") && (n.type = "boolean"), i.every((s) => s === null) && (n.type = "null"), n.enum = i;
}, zc = (e, t, n, o) => {
  if (t.unrepresentable === "throw")
    throw new Error("Custom types cannot be represented in JSON Schema");
}, Gc = (e, t, n, o) => {
  if (t.unrepresentable === "throw")
    throw new Error("Transforms cannot be represented in JSON Schema");
}, Uc = (e, t, n, o) => {
  const r = n, i = e._zod.def, { minimum: s, maximum: A } = e._zod.bag;
  typeof s == "number" && (r.minItems = s), typeof A == "number" && (r.maxItems = A), r.type = "array", r.items = N(i.element, t, {
    ...o,
    path: [...o.path, "items"]
  });
}, Lc = (e, t, n, o) => {
  const r = n, i = e._zod.def;
  r.type = "object", r.properties = {};
  const s = i.shape;
  for (const c in s)
    r.properties[c] = N(s[c], t, {
      ...o,
      path: [...o.path, "properties", c]
    });
  const A = new Set(Object.keys(s)), a = new Set([...A].filter((c) => {
    const g = i.shape[c]._zod;
    return t.io === "input" ? g.optin === void 0 : g.optout === void 0;
  }));
  a.size > 0 && (r.required = Array.from(a)), i.catchall?._zod.def.type === "never" ? r.additionalProperties = !1 : i.catchall ? i.catchall && (r.additionalProperties = N(i.catchall, t, {
    ...o,
    path: [...o.path, "additionalProperties"]
  })) : t.io === "output" && (r.additionalProperties = !1);
}, Pc = (e, t, n, o) => {
  const r = e._zod.def, i = r.inclusive === !1, s = r.options.map((A, a) => N(A, t, {
    ...o,
    path: [...o.path, i ? "oneOf" : "anyOf", a]
  }));
  i ? n.oneOf = s : n.anyOf = s;
}, Hc = (e, t, n, o) => {
  const r = e._zod.def, i = N(r.left, t, {
    ...o,
    path: [...o.path, "allOf", 0]
  }), s = N(r.right, t, {
    ...o,
    path: [...o.path, "allOf", 1]
  }), A = (c) => "allOf" in c && Object.keys(c).length === 1, a = [
    ...A(i) ? i.allOf : [i],
    ...A(s) ? s.allOf : [s]
  ];
  n.allOf = a;
}, Kc = (e, t, n, o) => {
  const r = n, i = e._zod.def;
  r.type = "array";
  const s = t.target === "draft-2020-12" ? "prefixItems" : "items", A = t.target === "draft-2020-12" || t.target === "openapi-3.0" ? "items" : "additionalItems", a = i.items.map((l, d) => N(l, t, {
    ...o,
    path: [...o.path, s, d]
  })), c = i.rest ? N(i.rest, t, {
    ...o,
    path: [...o.path, A, ...t.target === "openapi-3.0" ? [i.items.length] : []]
  }) : null;
  t.target === "draft-2020-12" ? (r.prefixItems = a, c && (r.items = c)) : t.target === "openapi-3.0" ? (r.items = {
    anyOf: a
  }, c && r.items.anyOf.push(c), r.minItems = a.length, c || (r.maxItems = a.length)) : (r.items = a, c && (r.additionalItems = c));
  const { minimum: g, maximum: u } = e._zod.bag;
  typeof g == "number" && (r.minItems = g), typeof u == "number" && (r.maxItems = u);
}, jc = (e, t, n, o) => {
  const r = n, i = e._zod.def;
  r.type = "object";
  const s = i.keyType, a = s._zod.bag?.patterns;
  if (i.mode === "loose" && a && a.size > 0) {
    const g = N(i.valueType, t, {
      ...o,
      path: [...o.path, "patternProperties", "*"]
    });
    r.patternProperties = {};
    for (const u of a)
      r.patternProperties[u.source] = g;
  } else
    (t.target === "draft-07" || t.target === "draft-2020-12") && (r.propertyNames = N(i.keyType, t, {
      ...o,
      path: [...o.path, "propertyNames"]
    })), r.additionalProperties = N(i.valueType, t, {
      ...o,
      path: [...o.path, "additionalProperties"]
    });
  const c = s._zod.values;
  if (c) {
    const g = [...c].filter((u) => typeof u == "string" || typeof u == "number");
    g.length > 0 && (r.required = g);
  }
}, Zc = (e, t, n, o) => {
  const r = e._zod.def, i = N(r.innerType, t, o), s = t.seen.get(e);
  t.target === "openapi-3.0" ? (s.ref = r.innerType, n.nullable = !0) : n.anyOf = [i, { type: "null" }];
}, Wc = (e, t, n, o) => {
  const r = e._zod.def;
  N(r.innerType, t, o);
  const i = t.seen.get(e);
  i.ref = r.innerType;
}, Jc = (e, t, n, o) => {
  const r = e._zod.def;
  N(r.innerType, t, o);
  const i = t.seen.get(e);
  i.ref = r.innerType, n.default = JSON.parse(JSON.stringify(r.defaultValue));
}, qc = (e, t, n, o) => {
  const r = e._zod.def;
  N(r.innerType, t, o);
  const i = t.seen.get(e);
  i.ref = r.innerType, t.io === "input" && (n._prefault = JSON.parse(JSON.stringify(r.defaultValue)));
}, Vc = (e, t, n, o) => {
  const r = e._zod.def;
  N(r.innerType, t, o);
  const i = t.seen.get(e);
  i.ref = r.innerType;
  let s;
  try {
    s = r.catchValue(void 0);
  } catch {
    throw new Error("Dynamic catch values are not supported in JSON Schema");
  }
  n.default = s;
}, $c = (e, t, n, o) => {
  const r = e._zod.def, i = r.in._zod.traits.has("$ZodTransform"), s = t.io === "input" ? i ? r.out : r.in : r.out;
  N(s, t, o);
  const A = t.seen.get(e);
  A.ref = s;
}, Xc = (e, t, n, o) => {
  const r = e._zod.def;
  N(r.innerType, t, o);
  const i = t.seen.get(e);
  i.ref = r.innerType, n.readOnly = !0;
}, Vr = (e, t, n, o) => {
  const r = e._zod.def;
  N(r.innerType, t, o);
  const i = t.seen.get(e);
  i.ref = r.innerType;
}, eg = (e, t, n, o) => {
  const r = e._zod.innerType;
  N(r, t, o);
  const i = t.seen.get(e);
  i.ref = r;
}, tg = /* @__PURE__ */ p("ZodISODateTime", (e, t) => {
  ZA.init(e, t), z.init(e, t);
});
function $r(e) {
  return /* @__PURE__ */ nc(tg, e);
}
const ng = /* @__PURE__ */ p("ZodISODate", (e, t) => {
  WA.init(e, t), z.init(e, t);
});
function og(e) {
  return /* @__PURE__ */ oc(ng, e);
}
const rg = /* @__PURE__ */ p("ZodISOTime", (e, t) => {
  JA.init(e, t), z.init(e, t);
});
function sg(e) {
  return /* @__PURE__ */ rc(rg, e);
}
const ig = /* @__PURE__ */ p("ZodISODuration", (e, t) => {
  qA.init(e, t), z.init(e, t);
});
function Ag(e) {
  return /* @__PURE__ */ sc(ig, e);
}
const ag = (e, t) => {
  Sr.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
    format: {
      value: (n) => Mi(e, n)
      // enumerable: false,
    },
    flatten: {
      value: (n) => Fi(e, n)
      // enumerable: false,
    },
    addIssue: {
      value: (n) => {
        e.issues.push(n), e.message = JSON.stringify(e.issues, Dn, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (n) => {
        e.issues.push(...n), e.message = JSON.stringify(e.issues, Dn, 2);
      }
      // enumerable: false,
    },
    isEmpty: {
      get() {
        return e.issues.length === 0;
      }
      // enumerable: false,
    }
  });
}, ie = /* @__PURE__ */ p("ZodError", ag, {
  Parent: Error
}), cg = /* @__PURE__ */ Wn(ie), gg = /* @__PURE__ */ Jn(ie), ug = /* @__PURE__ */ tn(ie), lg = /* @__PURE__ */ nn(ie), dg = /* @__PURE__ */ Gi(ie), fg = /* @__PURE__ */ Ui(ie), pg = /* @__PURE__ */ Li(ie), mg = /* @__PURE__ */ Pi(ie), hg = /* @__PURE__ */ Hi(ie), Eg = /* @__PURE__ */ Ki(ie), Bg = /* @__PURE__ */ ji(ie), Ig = /* @__PURE__ */ Zi(ie), Do = /* @__PURE__ */ new WeakMap();
function Qt(e, t, n) {
  const o = Object.getPrototypeOf(e);
  let r = Do.get(o);
  if (r || (r = /* @__PURE__ */ new Set(), Do.set(o, r)), !r.has(t)) {
    r.add(t);
    for (const i in n) {
      const s = n[i];
      Object.defineProperty(o, i, {
        configurable: !0,
        enumerable: !1,
        get() {
          const A = s.bind(this);
          return Object.defineProperty(this, i, {
            configurable: !0,
            writable: !0,
            enumerable: !0,
            value: A
          }), A;
        },
        set(A) {
          Object.defineProperty(this, i, {
            configurable: !0,
            writable: !0,
            enumerable: !0,
            value: A
          });
        }
      });
    }
  }
}
const T = /* @__PURE__ */ p("ZodType", (e, t) => (k.init(e, t), Object.assign(e["~standard"], {
  jsonSchema: {
    input: Zt(e, "input"),
    output: Zt(e, "output")
  }
}), e.toJSONSchema = xc(e, {}), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.parse = (n, o) => cg(e, n, o, { callee: e.parse }), e.safeParse = (n, o) => ug(e, n, o), e.parseAsync = async (n, o) => gg(e, n, o, { callee: e.parseAsync }), e.safeParseAsync = async (n, o) => lg(e, n, o), e.spa = e.safeParseAsync, e.encode = (n, o) => dg(e, n, o), e.decode = (n, o) => fg(e, n, o), e.encodeAsync = async (n, o) => pg(e, n, o), e.decodeAsync = async (n, o) => mg(e, n, o), e.safeEncode = (n, o) => hg(e, n, o), e.safeDecode = (n, o) => Eg(e, n, o), e.safeEncodeAsync = async (n, o) => Bg(e, n, o), e.safeDecodeAsync = async (n, o) => Ig(e, n, o), Qt(e, "ZodType", {
  check(...n) {
    const o = this.def;
    return this.clone(De(o, {
      checks: [
        ...o.checks ?? [],
        ...n.map((r) => typeof r == "function" ? { _zod: { check: r, def: { check: "custom" }, onattach: [] } } : r)
      ]
    }), { parent: !0 });
  },
  with(...n) {
    return this.check(...n);
  },
  clone(n, o) {
    return Se(this, n, o);
  },
  brand() {
    return this;
  },
  register(n, o) {
    return n.add(this, o), this;
  },
  refine(n, o) {
    return this.check(mu(n, o));
  },
  superRefine(n, o) {
    return this.check(hu(n, o));
  },
  overwrite(n) {
    return this.check(/* @__PURE__ */ rt(n));
  },
  optional() {
    return To(this);
  },
  exactOptional() {
    return nu(this);
  },
  nullable() {
    return Oo(this);
  },
  nullish() {
    return To(Oo(this));
  },
  nonoptional(n) {
    return au(this, n);
  },
  array() {
    return D(this);
  },
  or(n) {
    return j([this, n]);
  },
  and(n) {
    return qg(this, n);
  },
  transform(n) {
    return Yo(this, eu(n));
  },
  default(n) {
    return su(this, n);
  },
  prefault(n) {
    return Au(this, n);
  },
  catch(n) {
    return gu(this, n);
  },
  pipe(n) {
    return Yo(this, n);
  },
  readonly() {
    return du(this);
  },
  describe(n) {
    const o = this.clone();
    return pt.add(o, { description: n }), o;
  },
  meta(...n) {
    if (n.length === 0)
      return pt.get(this);
    const o = this.clone();
    return pt.add(o, n[0]), o;
  },
  isOptional() {
    return this.safeParse(void 0).success;
  },
  isNullable() {
    return this.safeParse(null).success;
  },
  apply(n) {
    return n(this);
  }
}), Object.defineProperty(e, "description", {
  get() {
    return pt.get(e)?.description;
  },
  configurable: !0
}), e)), Xr = /* @__PURE__ */ p("_ZodString", (e, t) => {
  qn.init(e, t), T.init(e, t), e._zod.processJSONSchema = (o, r, i) => Sc(e, o, r);
  const n = e._zod.bag;
  e.format = n.format ?? null, e.minLength = n.minimum ?? null, e.maxLength = n.maximum ?? null, Qt(e, "_ZodString", {
    regex(...o) {
      return this.check(/* @__PURE__ */ dc(...o));
    },
    includes(...o) {
      return this.check(/* @__PURE__ */ mc(...o));
    },
    startsWith(...o) {
      return this.check(/* @__PURE__ */ hc(...o));
    },
    endsWith(...o) {
      return this.check(/* @__PURE__ */ Ec(...o));
    },
    min(...o) {
      return this.check(/* @__PURE__ */ jt(...o));
    },
    max(...o) {
      return this.check(/* @__PURE__ */ jr(...o));
    },
    length(...o) {
      return this.check(/* @__PURE__ */ Zr(...o));
    },
    nonempty(...o) {
      return this.check(/* @__PURE__ */ jt(1, ...o));
    },
    lowercase(o) {
      return this.check(/* @__PURE__ */ fc(o));
    },
    uppercase(o) {
      return this.check(/* @__PURE__ */ pc(o));
    },
    trim() {
      return this.check(/* @__PURE__ */ Ic());
    },
    normalize(...o) {
      return this.check(/* @__PURE__ */ Bc(...o));
    },
    toLowerCase() {
      return this.check(/* @__PURE__ */ wc());
    },
    toUpperCase() {
      return this.check(/* @__PURE__ */ Cc());
    },
    slugify() {
      return this.check(/* @__PURE__ */ yc());
    }
  });
}), wg = /* @__PURE__ */ p("ZodString", (e, t) => {
  qn.init(e, t), Xr.init(e, t), e.email = (n) => e.check(/* @__PURE__ */ Fa(Cg, n)), e.url = (n) => e.check(/* @__PURE__ */ Kr(es, n)), e.jwt = (n) => e.check(/* @__PURE__ */ tc(Ng, n)), e.emoji = (n) => e.check(/* @__PURE__ */ Ua(vg, n)), e.guid = (n) => e.check(/* @__PURE__ */ xo(So, n)), e.uuid = (n) => e.check(/* @__PURE__ */ Ma(Mt, n)), e.uuidv4 = (n) => e.check(/* @__PURE__ */ Na(Mt, n)), e.uuidv6 = (n) => e.check(/* @__PURE__ */ za(Mt, n)), e.uuidv7 = (n) => e.check(/* @__PURE__ */ Ga(Mt, n)), e.nanoid = (n) => e.check(/* @__PURE__ */ La(_g, n)), e.guid = (n) => e.check(/* @__PURE__ */ xo(So, n)), e.cuid = (n) => e.check(/* @__PURE__ */ Pa(Qg, n)), e.cuid2 = (n) => e.check(/* @__PURE__ */ Ha(bg, n)), e.ulid = (n) => e.check(/* @__PURE__ */ Ka(xg, n)), e.base64 = (n) => e.check(/* @__PURE__ */ $a(Yg, n)), e.base64url = (n) => e.check(/* @__PURE__ */ Xa(Fg, n)), e.xid = (n) => e.check(/* @__PURE__ */ ja(Dg, n)), e.ksuid = (n) => e.check(/* @__PURE__ */ Za(Sg, n)), e.ipv4 = (n) => e.check(/* @__PURE__ */ Wa(Rg, n)), e.ipv6 = (n) => e.check(/* @__PURE__ */ Ja(kg, n)), e.cidrv4 = (n) => e.check(/* @__PURE__ */ qa(Tg, n)), e.cidrv6 = (n) => e.check(/* @__PURE__ */ Va(Og, n)), e.e164 = (n) => e.check(/* @__PURE__ */ ec(Mg, n)), e.datetime = (n) => e.check($r(n)), e.date = (n) => e.check(og(n)), e.time = (n) => e.check(sg(n)), e.duration = (n) => e.check(Ag(n));
});
function h(e) {
  return /* @__PURE__ */ Ya(wg, e);
}
const z = /* @__PURE__ */ p("ZodStringFormat", (e, t) => {
  F.init(e, t), Xr.init(e, t);
}), Cg = /* @__PURE__ */ p("ZodEmail", (e, t) => {
  NA.init(e, t), z.init(e, t);
}), So = /* @__PURE__ */ p("ZodGUID", (e, t) => {
  FA.init(e, t), z.init(e, t);
}), Mt = /* @__PURE__ */ p("ZodUUID", (e, t) => {
  MA.init(e, t), z.init(e, t);
}), es = /* @__PURE__ */ p("ZodURL", (e, t) => {
  zA.init(e, t), z.init(e, t);
});
function yg(e) {
  return /* @__PURE__ */ Kr(es, e);
}
const vg = /* @__PURE__ */ p("ZodEmoji", (e, t) => {
  GA.init(e, t), z.init(e, t);
}), _g = /* @__PURE__ */ p("ZodNanoID", (e, t) => {
  UA.init(e, t), z.init(e, t);
}), Qg = /* @__PURE__ */ p("ZodCUID", (e, t) => {
  LA.init(e, t), z.init(e, t);
}), bg = /* @__PURE__ */ p("ZodCUID2", (e, t) => {
  PA.init(e, t), z.init(e, t);
}), xg = /* @__PURE__ */ p("ZodULID", (e, t) => {
  HA.init(e, t), z.init(e, t);
}), Dg = /* @__PURE__ */ p("ZodXID", (e, t) => {
  KA.init(e, t), z.init(e, t);
}), Sg = /* @__PURE__ */ p("ZodKSUID", (e, t) => {
  jA.init(e, t), z.init(e, t);
}), Rg = /* @__PURE__ */ p("ZodIPv4", (e, t) => {
  VA.init(e, t), z.init(e, t);
}), kg = /* @__PURE__ */ p("ZodIPv6", (e, t) => {
  $A.init(e, t), z.init(e, t);
}), Tg = /* @__PURE__ */ p("ZodCIDRv4", (e, t) => {
  XA.init(e, t), z.init(e, t);
}), Og = /* @__PURE__ */ p("ZodCIDRv6", (e, t) => {
  ea.init(e, t), z.init(e, t);
}), Yg = /* @__PURE__ */ p("ZodBase64", (e, t) => {
  ta.init(e, t), z.init(e, t);
}), Fg = /* @__PURE__ */ p("ZodBase64URL", (e, t) => {
  oa.init(e, t), z.init(e, t);
}), Mg = /* @__PURE__ */ p("ZodE164", (e, t) => {
  ra.init(e, t), z.init(e, t);
}), Ng = /* @__PURE__ */ p("ZodJWT", (e, t) => {
  ia.init(e, t), z.init(e, t);
}), ts = /* @__PURE__ */ p("ZodNumber", (e, t) => {
  Gr.init(e, t), T.init(e, t), e._zod.processJSONSchema = (o, r, i) => Rc(e, o, r), Qt(e, "ZodNumber", {
    gt(o, r) {
      return this.check(/* @__PURE__ */ Kt(o, r));
    },
    gte(o, r) {
      return this.check(/* @__PURE__ */ _e(o, r));
    },
    min(o, r) {
      return this.check(/* @__PURE__ */ _e(o, r));
    },
    lt(o, r) {
      return this.check(/* @__PURE__ */ Ht(o, r));
    },
    lte(o, r) {
      return this.check(/* @__PURE__ */ qe(o, r));
    },
    max(o, r) {
      return this.check(/* @__PURE__ */ qe(o, r));
    },
    int(o) {
      return this.check(Ro(o));
    },
    safe(o) {
      return this.check(Ro(o));
    },
    positive(o) {
      return this.check(/* @__PURE__ */ Kt(0, o));
    },
    nonnegative(o) {
      return this.check(/* @__PURE__ */ _e(0, o));
    },
    negative(o) {
      return this.check(/* @__PURE__ */ Ht(0, o));
    },
    nonpositive(o) {
      return this.check(/* @__PURE__ */ qe(0, o));
    },
    multipleOf(o, r) {
      return this.check(/* @__PURE__ */ Rn(o, r));
    },
    step(o, r) {
      return this.check(/* @__PURE__ */ Rn(o, r));
    },
    finite() {
      return this;
    }
  });
  const n = e._zod.bag;
  e.minValue = Math.max(n.minimum ?? Number.NEGATIVE_INFINITY, n.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(n.maximum ?? Number.POSITIVE_INFINITY, n.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (n.format ?? "").includes("int") || Number.isSafeInteger(n.multipleOf ?? 0.5), e.isFinite = !0, e.format = n.format ?? null;
});
function _(e) {
  return /* @__PURE__ */ ic(ts, e);
}
const zg = /* @__PURE__ */ p("ZodNumberFormat", (e, t) => {
  Aa.init(e, t), ts.init(e, t);
});
function Ro(e) {
  return /* @__PURE__ */ Ac(zg, e);
}
const Gg = /* @__PURE__ */ p("ZodBoolean", (e, t) => {
  aa.init(e, t), T.init(e, t), e._zod.processJSONSchema = (n, o, r) => kc(e, n, o);
});
function rn(e) {
  return /* @__PURE__ */ ac(Gg, e);
}
const Ug = /* @__PURE__ */ p("ZodBigInt", (e, t) => {
  ca.init(e, t), T.init(e, t), e._zod.processJSONSchema = (o, r, i) => Tc(e, o), e.gte = (o, r) => e.check(/* @__PURE__ */ _e(o, r)), e.min = (o, r) => e.check(/* @__PURE__ */ _e(o, r)), e.gt = (o, r) => e.check(/* @__PURE__ */ Kt(o, r)), e.gte = (o, r) => e.check(/* @__PURE__ */ _e(o, r)), e.min = (o, r) => e.check(/* @__PURE__ */ _e(o, r)), e.lt = (o, r) => e.check(/* @__PURE__ */ Ht(o, r)), e.lte = (o, r) => e.check(/* @__PURE__ */ qe(o, r)), e.max = (o, r) => e.check(/* @__PURE__ */ qe(o, r)), e.positive = (o) => e.check(/* @__PURE__ */ Kt(BigInt(0), o)), e.negative = (o) => e.check(/* @__PURE__ */ Ht(BigInt(0), o)), e.nonpositive = (o) => e.check(/* @__PURE__ */ qe(BigInt(0), o)), e.nonnegative = (o) => e.check(/* @__PURE__ */ _e(BigInt(0), o)), e.multipleOf = (o, r) => e.check(/* @__PURE__ */ Rn(o, r));
  const n = e._zod.bag;
  e.minValue = n.minimum ?? null, e.maxValue = n.maximum ?? null, e.format = n.format ?? null;
});
function Lg(e) {
  return /* @__PURE__ */ cc(Ug, e);
}
const Pg = /* @__PURE__ */ p("ZodNull", (e, t) => {
  ga.init(e, t), T.init(e, t), e._zod.processJSONSchema = (n, o, r) => Oc(e, n, o);
});
function ns(e) {
  return /* @__PURE__ */ gc(Pg, e);
}
const Hg = /* @__PURE__ */ p("ZodUnknown", (e, t) => {
  ua.init(e, t), T.init(e, t), e._zod.processJSONSchema = (n, o, r) => Fc();
});
function Me() {
  return /* @__PURE__ */ uc(Hg);
}
const Kg = /* @__PURE__ */ p("ZodNever", (e, t) => {
  la.init(e, t), T.init(e, t), e._zod.processJSONSchema = (n, o, r) => Yc(e, n, o);
});
function os(e) {
  return /* @__PURE__ */ lc(Kg, e);
}
const jg = /* @__PURE__ */ p("ZodArray", (e, t) => {
  da.init(e, t), T.init(e, t), e._zod.processJSONSchema = (n, o, r) => Uc(e, n, o, r), e.element = t.element, Qt(e, "ZodArray", {
    min(n, o) {
      return this.check(/* @__PURE__ */ jt(n, o));
    },
    nonempty(n) {
      return this.check(/* @__PURE__ */ jt(1, n));
    },
    max(n, o) {
      return this.check(/* @__PURE__ */ jr(n, o));
    },
    length(n, o) {
      return this.check(/* @__PURE__ */ Zr(n, o));
    },
    unwrap() {
      return this.element;
    }
  });
});
function D(e, t) {
  return /* @__PURE__ */ vc(jg, e, t);
}
const rs = /* @__PURE__ */ p("ZodObject", (e, t) => {
  pa.init(e, t), T.init(e, t), e._zod.processJSONSchema = (n, o, r) => Lc(e, n, o, r), x(e, "shape", () => t.shape), Qt(e, "ZodObject", {
    keyof() {
      return ge(Object.keys(this._zod.def.shape));
    },
    catchall(n) {
      return this.clone({ ...this._zod.def, catchall: n });
    },
    passthrough() {
      return this.clone({ ...this._zod.def, catchall: Me() });
    },
    loose() {
      return this.clone({ ...this._zod.def, catchall: Me() });
    },
    strict() {
      return this.clone({ ...this._zod.def, catchall: os() });
    },
    strip() {
      return this.clone({ ...this._zod.def, catchall: void 0 });
    },
    extend(n) {
      return Si(this, n);
    },
    safeExtend(n) {
      return Ri(this, n);
    },
    merge(n) {
      return ki(this, n);
    },
    pick(n) {
      return xi(this, n);
    },
    omit(n) {
      return Di(this, n);
    },
    partial(...n) {
      return Ti(is, this, n[0]);
    },
    required(...n) {
      return Oi(As, this, n[0]);
    }
  });
});
function Zg(e, t) {
  const n = {
    type: "object",
    shape: e ?? {},
    ...I(t)
  };
  return new rs(n);
}
function B(e, t) {
  return new rs({
    type: "object",
    shape: e,
    catchall: os(),
    ...I(t)
  });
}
const ss = /* @__PURE__ */ p("ZodUnion", (e, t) => {
  Pr.init(e, t), T.init(e, t), e._zod.processJSONSchema = (n, o, r) => Pc(e, n, o, r), e.options = t.options;
});
function j(e, t) {
  return new ss({
    type: "union",
    options: e,
    ...I(t)
  });
}
const Wg = /* @__PURE__ */ p("ZodDiscriminatedUnion", (e, t) => {
  ss.init(e, t), ma.init(e, t);
});
function st(e, t, n) {
  return new Wg({
    type: "union",
    options: t,
    discriminator: e,
    ...I(n)
  });
}
const Jg = /* @__PURE__ */ p("ZodIntersection", (e, t) => {
  ha.init(e, t), T.init(e, t), e._zod.processJSONSchema = (n, o, r) => Hc(e, n, o, r);
});
function qg(e, t) {
  return new Jg({
    type: "intersection",
    left: e,
    right: t
  });
}
const Vg = /* @__PURE__ */ p("ZodTuple", (e, t) => {
  Ea.init(e, t), T.init(e, t), e._zod.processJSONSchema = (n, o, r) => Kc(e, n, o, r), e.rest = (n) => e.clone({
    ...e._zod.def,
    rest: n
  });
});
function Ve(e, t, n) {
  const o = t instanceof k, r = o ? n : t, i = o ? t : null;
  return new Vg({
    type: "tuple",
    items: e,
    rest: i,
    ...I(r)
  });
}
const ko = /* @__PURE__ */ p("ZodRecord", (e, t) => {
  Ba.init(e, t), T.init(e, t), e._zod.processJSONSchema = (n, o, r) => jc(e, n, o, r), e.keyType = t.keyType, e.valueType = t.valueType;
});
function Vn(e, t, n) {
  return !t || !t._zod ? new ko({
    type: "record",
    keyType: h(),
    valueType: e,
    ...I(t)
  }) : new ko({
    type: "record",
    keyType: e,
    valueType: t,
    ...I(n)
  });
}
const kn = /* @__PURE__ */ p("ZodEnum", (e, t) => {
  Ia.init(e, t), T.init(e, t), e._zod.processJSONSchema = (o, r, i) => Mc(e, o, r), e.enum = t.entries, e.options = Object.values(t.entries);
  const n = new Set(Object.keys(t.entries));
  e.extract = (o, r) => {
    const i = {};
    for (const s of o)
      if (n.has(s))
        i[s] = t.entries[s];
      else
        throw new Error(`Key ${s} not found in enum`);
    return new kn({
      ...t,
      checks: [],
      ...I(r),
      entries: i
    });
  }, e.exclude = (o, r) => {
    const i = { ...t.entries };
    for (const s of o)
      if (n.has(s))
        delete i[s];
      else
        throw new Error(`Key ${s} not found in enum`);
    return new kn({
      ...t,
      checks: [],
      ...I(r),
      entries: i
    });
  };
});
function ge(e, t) {
  const n = Array.isArray(e) ? Object.fromEntries(e.map((o) => [o, o])) : e;
  return new kn({
    type: "enum",
    entries: n,
    ...I(t)
  });
}
const $g = /* @__PURE__ */ p("ZodLiteral", (e, t) => {
  wa.init(e, t), T.init(e, t), e._zod.processJSONSchema = (n, o, r) => Nc(e, n, o), e.values = new Set(t.values), Object.defineProperty(e, "value", {
    get() {
      if (t.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return t.values[0];
    }
  });
});
function Q(e, t) {
  return new $g({
    type: "literal",
    values: Array.isArray(e) ? e : [e],
    ...I(t)
  });
}
const Xg = /* @__PURE__ */ p("ZodTransform", (e, t) => {
  Ca.init(e, t), T.init(e, t), e._zod.processJSONSchema = (n, o, r) => Gc(e, n), e._zod.parse = (n, o) => {
    if (o.direction === "backward")
      throw new _r(e.constructor.name);
    n.addIssue = (i) => {
      if (typeof i == "string")
        n.issues.push(It(i, n.value, t));
      else {
        const s = i;
        s.fatal && (s.continue = !1), s.code ?? (s.code = "custom"), s.input ?? (s.input = n.value), s.inst ?? (s.inst = e), n.issues.push(It(s));
      }
    };
    const r = t.transform(n.value, n);
    return r instanceof Promise ? r.then((i) => (n.value = i, n.fallback = !0, n)) : (n.value = r, n.fallback = !0, n);
  };
});
function eu(e) {
  return new Xg({
    type: "transform",
    transform: e
  });
}
const is = /* @__PURE__ */ p("ZodOptional", (e, t) => {
  Hr.init(e, t), T.init(e, t), e._zod.processJSONSchema = (n, o, r) => Vr(e, n, o, r), e.unwrap = () => e._zod.def.innerType;
});
function To(e) {
  return new is({
    type: "optional",
    innerType: e
  });
}
const tu = /* @__PURE__ */ p("ZodExactOptional", (e, t) => {
  ya.init(e, t), T.init(e, t), e._zod.processJSONSchema = (n, o, r) => Vr(e, n, o, r), e.unwrap = () => e._zod.def.innerType;
});
function nu(e) {
  return new tu({
    type: "optional",
    innerType: e
  });
}
const ou = /* @__PURE__ */ p("ZodNullable", (e, t) => {
  va.init(e, t), T.init(e, t), e._zod.processJSONSchema = (n, o, r) => Zc(e, n, o, r), e.unwrap = () => e._zod.def.innerType;
});
function Oo(e) {
  return new ou({
    type: "nullable",
    innerType: e
  });
}
const ru = /* @__PURE__ */ p("ZodDefault", (e, t) => {
  _a.init(e, t), T.init(e, t), e._zod.processJSONSchema = (n, o, r) => Jc(e, n, o, r), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function su(e, t) {
  return new ru({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : xr(t);
    }
  });
}
const iu = /* @__PURE__ */ p("ZodPrefault", (e, t) => {
  Qa.init(e, t), T.init(e, t), e._zod.processJSONSchema = (n, o, r) => qc(e, n, o, r), e.unwrap = () => e._zod.def.innerType;
});
function Au(e, t) {
  return new iu({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : xr(t);
    }
  });
}
const As = /* @__PURE__ */ p("ZodNonOptional", (e, t) => {
  ba.init(e, t), T.init(e, t), e._zod.processJSONSchema = (n, o, r) => Wc(e, n, o, r), e.unwrap = () => e._zod.def.innerType;
});
function au(e, t) {
  return new As({
    type: "nonoptional",
    innerType: e,
    ...I(t)
  });
}
const cu = /* @__PURE__ */ p("ZodCatch", (e, t) => {
  xa.init(e, t), T.init(e, t), e._zod.processJSONSchema = (n, o, r) => Vc(e, n, o, r), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function gu(e, t) {
  return new cu({
    type: "catch",
    innerType: e,
    catchValue: typeof t == "function" ? t : () => t
  });
}
const uu = /* @__PURE__ */ p("ZodPipe", (e, t) => {
  Da.init(e, t), T.init(e, t), e._zod.processJSONSchema = (n, o, r) => $c(e, n, o, r), e.in = t.in, e.out = t.out;
});
function Yo(e, t) {
  return new uu({
    type: "pipe",
    in: e,
    out: t
    // ...util.normalizeParams(params),
  });
}
const lu = /* @__PURE__ */ p("ZodReadonly", (e, t) => {
  Sa.init(e, t), T.init(e, t), e._zod.processJSONSchema = (n, o, r) => Xc(e, n, o, r), e.unwrap = () => e._zod.def.innerType;
});
function du(e) {
  return new lu({
    type: "readonly",
    innerType: e
  });
}
const fu = /* @__PURE__ */ p("ZodLazy", (e, t) => {
  Ra.init(e, t), T.init(e, t), e._zod.processJSONSchema = (n, o, r) => eg(e, n, o, r), e.unwrap = () => e._zod.def.getter();
});
function pu(e) {
  return new fu({
    type: "lazy",
    getter: e
  });
}
const as = /* @__PURE__ */ p("ZodCustom", (e, t) => {
  ka.init(e, t), T.init(e, t), e._zod.processJSONSchema = (n, o, r) => zc(e, n);
});
function mu(e, t = {}) {
  return /* @__PURE__ */ _c(as, e, t);
}
function hu(e, t) {
  return /* @__PURE__ */ Qc(e, t);
}
function $n(e, t = {}) {
  const n = new as({
    type: "custom",
    check: "custom",
    fn: (o) => o instanceof e,
    abort: !0,
    ...I(t)
  });
  return n._zod.bag.Class = e, n._zod.check = (o) => {
    o.value instanceof e || o.issues.push({
      code: "invalid_type",
      expected: e.name,
      input: o.value,
      inst: n,
      path: [...n._zod.def.path ?? []]
    });
  }, n;
}
const re = 1, J = 4 * 1024 * 1024, cs = 9e3, Eu = J, wt = J * 2, gs = 128, us = 4e3, Re = h().min(1).max(128).regex(/^[a-z0-9]+(?:[._-][a-z0-9]+)*$/u), q = h().min(1).max(256), Bu = B({
  id: Re,
  extensions: D(h().regex(/^[a-z0-9]+$/u)).min(1).max(16),
  indexVersion: _().int().positive(),
  materialization: ge(["sql", "database"])
});
B({
  id: Re,
  protocolVersion: Q(re),
  pluginVersion: h().min(1).max(64),
  builtAt: $r().optional(),
  contributions: B({
    dictionaryFormats: D(Bu).min(1).max(16)
  })
});
const Iu = B({
  handle: q,
  name: h().min(1).max(512),
  size: _().int().nonnegative()
}), it = {
  kind: Q("request"),
  protocolVersion: Q(re),
  requestId: h().min(1).max(256)
}, wu = B({
  ...it,
  operation: Q("probe"),
  payload: B({
    sources: D(Iu).min(1).max(16)
  })
}), Cu = B({
  ...it,
  operation: Q("inspect"),
  payload: B({
    sourceHandle: q
  })
}), yu = B({
  ...it,
  operation: Q("buildIndex"),
  payload: B({
    dictionaryId: Re,
    sourceHandle: q,
    databaseHandle: q,
    sourceFormatVersion: _().int().positive()
  })
}), vu = B({
  ...it,
  operation: Q("verifyIndex"),
  payload: B({
    dictionaryId: Re,
    databaseHandle: q
  })
}), _u = B({
  ...it,
  operation: Q("lookup"),
  payload: B({
    dictionaryId: Re,
    databaseHandle: q,
    query: h().min(1).max(512),
    language: h().min(2).max(35).optional()
  })
}), Qu = B({
  ...it,
  operation: Q("readResource"),
  payload: B({
    dictionaryId: Re,
    sourceHandle: q,
    databaseHandle: q,
    resourceRef: h().min(1).max(512)
  })
}), bu = st("operation", [
  wu,
  Cu,
  yu,
  vu,
  _u,
  Qu
]), xu = B({
  type: Q("text"),
  value: h().max(1e5)
}), Du = B({
  type: Q("lineBreak")
}), Su = ge([
  "p",
  "span",
  "div",
  "ruby",
  "rt",
  "rp",
  "table",
  "thead",
  "tbody",
  "tfoot",
  "tr",
  "td",
  "th",
  "ol",
  "ul",
  "li",
  "details",
  "summary"
]), Ru = B({
  fontStyle: ge(["normal", "italic"]).optional(),
  fontWeight: ge(["normal", "bold"]).optional(),
  textDecorationLine: ge(["none", "underline", "line-through"]).optional(),
  verticalAlign: ge(["baseline", "sub", "super", "text-top", "text-bottom", "middle"]).optional(),
  textAlign: ge(["start", "end", "left", "right", "center"]).optional()
}), ku = B({
  type: Q("lookup"),
  word: h().min(1).max(512)
}), Tu = B({
  type: Q("external"),
  url: yg()
}).refine(({ url: e }) => {
  const t = new URL(e).protocol;
  return t === "https:" || t === "http:";
}, "Only HTTP(S) dictionary links are allowed"), Ou = B({
  type: Q("image"),
  resourceRef: h().min(1).max(512),
  alt: h().max(2e3).optional(),
  title: h().max(2e3).optional(),
  width: _().positive().max(8192).optional(),
  height: _().positive().max(8192).optional(),
  sizeUnits: ge(["px", "em"]).optional(),
  imageRendering: ge(["auto", "pixelated", "crisp-edges"]).optional(),
  appearance: ge(["auto", "monochrome"]).optional()
}), Yu = B({
  type: Q("link"),
  label: h().min(1).max(4e3),
  target: st("type", [ku, Tu])
}), Xn = pu(
  () => st("type", [
    xu,
    Du,
    Ou,
    Yu,
    B({
      type: Q("element"),
      tag: Su,
      children: D(Xn).max(2e3),
      title: h().max(2e3).optional(),
      open: rn().optional(),
      lang: h().min(2).max(35).optional(),
      colSpan: _().int().min(1).max(100).optional(),
      rowSpan: _().int().min(1).max(100).optional(),
      style: Ru.optional()
    })
  ])
), ls = B({
  name: h().min(1).max(256),
  category: h().max(256).optional(),
  notes: h().max(4e3).optional(),
  score: _().optional()
}), Tn = B({
  value: j([_(), h().max(512)]),
  displayValue: h().max(512).optional()
}), ds = B({
  position: j([_().int().nonnegative(), h().regex(/^[HL]+$/u)]),
  nasal: j([_().int().nonnegative(), D(_().int().nonnegative())]).optional(),
  devoice: j([_().int().nonnegative(), D(_().int().nonnegative())]).optional(),
  tags: D(h().max(256)).max(64).optional()
}), fs = B({
  value: h().min(1).max(2e3),
  tags: D(h().max(256)).max(64).optional()
}), ps = B({
  expression: h().min(1).max(512),
  reading: h().max(512),
  rules: D(h().max(128)).max(64).optional(),
  score: _().optional(),
  deinflection: D(h().max(256)).max(32).optional(),
  tags: D(ls).max(128).optional(),
  frequencies: D(Tn).max(128).optional(),
  pitches: D(ds).max(128).optional(),
  ipa: D(fs).max(128).optional(),
  definitions: D(Xn).max(2e3)
}), Fu = B({
  entries: D(ps).max(128)
}), nt = 16, Ct = 1024, Mu = (e) => {
  let t = 0;
  const n = (o, r) => {
    if (r > nt)
      throw new Error(`Dictionary document exceeds maximum depth ${nt}`);
    if (t += 1, t > Ct)
      throw new Error(`Dictionary document exceeds maximum nodes ${Ct}`);
    if (o.type === "element")
      for (const i of o.children) n(i, r + 1);
  };
  for (const o of e.entries)
    for (const r of o.definitions) n(r, 1);
}, On = (e) => {
  const t = Fu.parse(e);
  return Mu(t), t;
}, Nu = B({
  matches: D(
    B({
      sourceHandle: q,
      formatId: Re,
      confidence: _().min(0).max(1)
    })
  ).max(16)
}), zu = B({
  formatId: Re,
  sourceFormatVersion: _().int().positive(),
  title: h().min(1).max(1024),
  revision: h().max(1024).optional(),
  language: h().min(2).max(35).optional(),
  sequenced: rn().optional()
}), Gu = B({
  indexVersion: _().int().positive(),
  entries: _().int().nonnegative(),
  resources: _().int().nonnegative()
}), Uu = B({
  indexVersion: _().int().positive(),
  entries: _().int().nonnegative(),
  title: h().min(1).max(1024).optional()
}), Lu = $n(Uint8Array).refine(
  (e) => e.byteLength <= J,
  "Dictionary resource exceeds the protocol byte limit"
), Pu = h().min(3).max(255).regex(/^[a-z0-9!#$&^_.+-]+\/[a-z0-9!#$&^_.+-]+$/iu), Hu = B({
  mimeType: Pu,
  bytes: Lu
}), Ku = (e, t) => {
  let n;
  switch (e) {
    case "probe":
      n = Nu.parse(t);
      break;
    case "inspect":
      n = zu.parse(t);
      break;
    case "buildIndex":
      n = Gu.parse(t);
      break;
    case "verifyIndex":
      n = Uu.parse(t);
      break;
    case "lookup":
      n = On(t);
      break;
    case "readResource":
      n = Hu.parse(t);
      break;
  }
  return n;
}, ln = (e, t) => ({
  code: (typeof e == "string" ? e : String(e)).slice(0, gs) || "UNKNOWN_ERROR",
  message: (typeof t == "string" ? t : String(t)).slice(
    0,
    us
  ) || "Plugin operation failed"
}), ms = B({
  code: h().min(1).max(gs),
  message: h().min(1).max(us)
}), hs = {
  kind: Q("response"),
  protocolVersion: Q(re),
  requestId: h().min(1).max(256)
}, ju = B({
  ...hs,
  ok: Q(!0),
  result: Me()
}), Zu = B({
  ...hs,
  ok: Q(!1),
  error: ms
}), Wu = st("ok", [
  ju,
  Zu
]), Ju = B({
  kind: Q("cancel"),
  protocolVersion: Q(re),
  requestId: h().min(1).max(256)
}), qu = j([
  h(),
  _().finite(),
  Lg(),
  rn(),
  ns(),
  $n(Uint8Array)
]), bt = (e) => {
  if (e === null) return 0;
  if (typeof e == "string") return new TextEncoder().encode(e).byteLength;
  if (typeof e == "number") return 8;
  if (typeof e == "bigint") {
    const t = e === 0n ? 1 : e.toString(2).replace("-", "").length;
    return Math.ceil(t / 8);
  }
  if (typeof e == "boolean") return 1;
  if (e instanceof Uint8Array) return e.byteLength;
  throw new TypeError("Unsupported SQL parameter type");
}, Vu = qu.superRefine((e, t) => {
  bt(e) > Eu && t.addIssue({ code: "custom", message: "SQL parameter cell size limit exceeded" });
}), eo = D(Vu).max(cs).superRefine((e, t) => {
  e.reduce((n, o) => n + bt(o), 0) > wt && t.addIssue({ code: "custom", message: "SQL parameter payload size limit exceeded" });
}).optional(), xt = {
  kind: Q("host-call"),
  protocolVersion: Q(re),
  requestId: h().min(1).max(256),
  callId: h().min(1).max(256)
}, $u = B({
  ...xt,
  capability: Q("source.stat"),
  payload: B({ handle: q })
}), Xu = B({
  ...xt,
  capability: Q("source.readRange"),
  payload: B({
    handle: q,
    offset: _().int().nonnegative(),
    length: _().int().nonnegative()
  })
}), el = B({
  ...xt,
  capability: Q("sql.execute"),
  payload: B({
    handle: q,
    sql: h().min(1).max(65536),
    params: eo
  })
}), tl = B({
  ...xt,
  capability: Q("sql.select"),
  payload: B({
    handle: q,
    sql: h().min(1).max(65536),
    params: eo,
    maxRows: _().int().min(1).max(1e3)
  })
}), nl = B({
  sql: h().min(1).max(65536),
  params: eo
}), ol = D(nl).min(1).max(64).superRefine((e, t) => {
  e.reduce(
    (o, r) => o + (r.params ?? []).reduce(
      (i, s) => i + bt(s),
      0
    ),
    0
  ) > wt && t.addIssue({
    code: "custom",
    message: "SQL transaction parameter size limit exceeded"
  });
}), rl = B({
  ...xt,
  capability: Q("sql.transaction"),
  payload: B({
    handle: q,
    statements: ol
  })
}), sl = st("capability", [
  $u,
  Xu,
  el,
  tl,
  rl
]), il = B({
  kind: Q("progress"),
  protocolVersion: Q(re),
  requestId: h().min(1).max(256),
  stage: h().min(1).max(128),
  completed: _().nonnegative(),
  total: _().nonnegative().optional()
}), Es = {
  kind: Q("host-result"),
  protocolVersion: Q(re),
  requestId: h().min(1).max(256),
  callId: h().min(1).max(256)
}, Al = B({
  ...Es,
  ok: Q(!0),
  result: Me()
}), al = B({
  ...Es,
  ok: Q(!1),
  error: ms
}), cl = st("ok", [
  Al,
  al
]), gl = j([
  bu,
  Ju,
  cl
]), ul = j([
  Wu,
  sl,
  il
]);
class Wt extends Error {
  constructor(t, n) {
    super(t), this.code = n, this.name = "WorkerHostCallError";
  }
  code;
}
const Fo = (e) => e instanceof Wt ? ln(e.code, e.message) : e instanceof DOMException && e.name === "AbortError" ? ln("ABORTED", e.message || "Plugin operation aborted") : ln(
  "PLUGIN_OPERATION_FAILED",
  e instanceof Error ? e.message : String(e)
), Le = (e) => {
  throw new Wt(
    `Plugin operation is unavailable: ${e}`,
    "OPERATION_UNAVAILABLE"
  );
}, ll = (e, t, n) => {
  switch (t.operation) {
    case "probe":
      return e.probe?.(t.payload, n) ?? Le(t.operation);
    case "inspect":
      return e.inspect?.(t.payload, n) ?? Le(t.operation);
    case "buildIndex":
      return e.buildIndex?.(t.payload, n) ?? Le(t.operation);
    case "verifyIndex":
      return e.verifyIndex?.(t.payload, n) ?? Le(t.operation);
    case "lookup":
      return e.lookup?.(t.payload, n) ?? Le(t.operation);
    case "readResource":
      return e.readResource?.(t.payload, n) ?? Le(t.operation);
  }
}, dl = (e, t) => {
  let n = 0;
  const o = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), i = (c) => {
    for (const [g, u] of r)
      u.requestId === c && (r.delete(g), u.reject(new DOMException("Plugin operation aborted", "AbortError")));
  }, s = (c) => e.postMessage(ul.parse(c)), A = (c, g) => ({
    signal: g.signal,
    call: (u, l) => {
      if (g.signal.aborted)
        return Promise.reject(new DOMException("Aborted", "AbortError"));
      const d = `plugin-host-call-${++n}`;
      return new Promise((f, E) => {
        r.set(d, { requestId: c, resolve: f, reject: E }), s({
          kind: "host-call",
          protocolVersion: re,
          requestId: c,
          callId: d,
          capability: u,
          payload: l
        });
      });
    },
    progress: (u, l, d) => {
      g.signal.aborted || s({
        kind: "progress",
        protocolVersion: re,
        requestId: c,
        stage: u,
        completed: l,
        ...d === void 0 ? {} : { total: d }
      });
    }
  }), a = (c) => {
    if (o.has(c.requestId)) return;
    const g = new AbortController(), u = { controller: g };
    o.set(c.requestId, u);
    const l = A(c.requestId, g);
    ll(t, c, l).then(
      (d) => {
        if (!(o.get(c.requestId) !== u || g.signal.aborted)) {
          o.delete(c.requestId), i(c.requestId);
          try {
            const f = Ku(c.operation, d);
            s({
              kind: "response",
              protocolVersion: re,
              requestId: c.requestId,
              ok: !0,
              result: f
            });
          } catch (f) {
            s({
              kind: "response",
              protocolVersion: re,
              requestId: c.requestId,
              ok: !1,
              error: Fo(f)
            });
          }
        }
      },
      (d) => {
        o.get(c.requestId) !== u || g.signal.aborted || (o.delete(c.requestId), i(c.requestId), s({
          kind: "response",
          protocolVersion: re,
          requestId: c.requestId,
          ok: !1,
          error: Fo(d)
        }));
      }
    );
  };
  e.onmessage = (c) => {
    const g = gl.safeParse(c.data);
    if (!g.success) {
      const d = c.data;
      if (typeof d != "object" || d === null) return;
      const f = d;
      if (f.kind !== "host-result" || typeof f.requestId != "string" || typeof f.callId != "string")
        return;
      const E = r.get(f.callId);
      if (!E || E.requestId !== f.requestId) return;
      r.delete(f.callId), E.reject(
        new Wt("Plugin host returned an invalid result", "INVALID_HOST_RESULT")
      );
      return;
    }
    const u = g.data;
    if (u.kind === "request") {
      a(u);
      return;
    }
    if (u.kind === "cancel") {
      const d = o.get(u.requestId);
      if (!d) return;
      o.delete(u.requestId), d.controller.abort(), i(u.requestId);
      return;
    }
    const l = r.get(u.callId);
    !l || l.requestId !== u.requestId || (r.delete(u.callId), u.ok ? l.resolve(u.result) : l.reject(new Wt(u.error.message, u.error.code)));
  };
}, Bs = (e) => typeof e == "object" && e !== null && !Array.isArray(e), Ee = (e, t) => {
  if (e !== void 0) {
    if (typeof e != "string") throw new Error(`Invalid Yomitan ${t}`);
    return e;
  }
}, Ze = (e, t) => {
  if (e !== void 0) {
    if (typeof e != "number" || !Number.isFinite(e) || e <= 0)
      throw new Error(`Invalid Yomitan ${t}`);
    return e;
  }
}, to = (e) => {
  if (typeof e != "string" || e.length === 0 || e.length > 512)
    throw new Error("Invalid Yomitan resource path");
  if (e.startsWith("/") || e.includes("\\") || e.includes("\0") || e.split("/").some((t) => t === ".." || t === ".") || /^[a-z][a-z0-9+.-]*:/iu.test(e))
    throw new Error("Unsafe Yomitan resource path");
  return e;
}, Te = (e, t) => {
  if (t > nt)
    throw new Error(`Yomitan content exceeds maximum depth ${nt}`);
  if (e.nodes += 1, e.nodes > Ct)
    throw new Error(`Yomitan content exceeds maximum nodes ${Ct}`);
}, Mo = (e) => {
  const t = to(e.path), n = Ee(e.imageRendering, "imageRendering"), o = Ee(e.appearance, "appearance"), r = Ee(e.sizeUnits, "sizeUnits");
  if (n !== void 0 && n !== "auto" && n !== "pixelated" && n !== "crisp-edges")
    throw new Error("Invalid Yomitan imageRendering");
  if (o !== void 0 && o !== "auto" && o !== "monochrome")
    throw new Error("Invalid Yomitan appearance");
  if (r !== void 0 && r !== "px" && r !== "em")
    throw new Error("Invalid Yomitan sizeUnits");
  return {
    type: "image",
    resourceRef: t,
    ...Ee(e.alt, "image alt") === void 0 ? {} : { alt: Ee(e.alt, "image alt") },
    ...Ee(e.title, "image title") === void 0 ? {} : { title: Ee(e.title, "image title") },
    ...Ze(e.width, "image width") === void 0 ? {} : { width: Ze(e.width, "image width") },
    ...Ze(e.height, "image height") === void 0 ? {} : { height: Ze(e.height, "image height") },
    ...r === void 0 ? {} : { sizeUnits: r },
    ...n === void 0 ? e.pixelated === !0 ? { imageRendering: "pixelated" } : {} : { imageRendering: n },
    ...o === void 0 ? {} : { appearance: o }
  };
}, fl = (e) => {
  if (!Bs(e)) return {};
  const t = {};
  return (e.fontStyle === "normal" || e.fontStyle === "italic") && (t.fontStyle = e.fontStyle), (e.fontWeight === "normal" || e.fontWeight === "bold") && (t.fontWeight = e.fontWeight), (e.textDecorationLine === "none" || e.textDecorationLine === "underline" || e.textDecorationLine === "line-through") && (t.textDecorationLine = e.textDecorationLine), (e.verticalAlign === "baseline" || e.verticalAlign === "sub" || e.verticalAlign === "super" || e.verticalAlign === "text-top" || e.verticalAlign === "text-bottom" || e.verticalAlign === "middle") && (t.verticalAlign = e.verticalAlign), (e.textAlign === "start" || e.textAlign === "end" || e.textAlign === "left" || e.textAlign === "right" || e.textAlign === "center") && (t.textAlign = e.textAlign), t;
}, pl = (e) => {
  const t = [], n = (o) => {
    o.type === "text" ? t.push(o.value) : o.type === "lineBreak" ? t.push(" ") : o.type === "link" ? t.push(o.label) : o.type === "image" ? o.alt && t.push(o.alt) : o.children.forEach(n);
  };
  return e.forEach(n), t.join("").trim();
}, ml = (e, t) => {
  const n = e.slice(1), o = new URLSearchParams(n), i = (o.get("query") ?? o.get("term") ?? decodeURIComponent(n)).trim() || t?.trim() || "";
  if (!i.trim() || i.length > 512) throw new Error("Invalid Yomitan internal link");
  return i.trim();
}, Ke = (e, t, n) => {
  if (t > nt)
    throw new Error(`Yomitan content exceeds maximum depth ${nt}`);
  if (typeof e == "string")
    return Te(n, t), [{ type: "text", value: e }];
  if (Array.isArray(e))
    return e.length === 2 && typeof e[0] == "string" && Array.isArray(e[1]) && e[1].every((u) => typeof u == "string") ? (Te(n, t), [{ type: "text", value: e[0] }]) : e.flatMap((u) => Ke(u, t, n));
  if (!Bs(e)) throw new Error("Invalid Yomitan structured content");
  if (e.type === "text")
    return Ke(e.text, t, n);
  if (e.type === "image")
    return Te(n, t), [Mo(e)];
  if (e.type === "structured-content")
    return Ke(e.content, t, n);
  const o = e.tag;
  if (o === "br")
    return Te(n, t), [{ type: "lineBreak" }];
  if (o === "img")
    return Te(n, t), [Mo(e)];
  if (o === "a") {
    const u = e.href;
    if (typeof u != "string") throw new Error("Invalid Yomitan link");
    const l = Ke(e.content ?? "", t + 1, n), d = pl(l) || u;
    if (Te(n, t), u.startsWith("?"))
      return [
        {
          type: "link",
          label: d,
          target: { type: "lookup", word: ml(u, n.currentHeadword) }
        }
      ];
    let f;
    try {
      f = new URL(u);
    } catch {
      throw new Error("Invalid Yomitan external link");
    }
    if (f.protocol !== "http:" && f.protocol !== "https:")
      throw new Error("Unsafe Yomitan external link");
    return [{ type: "link", label: d, target: { type: "external", url: f.href } }];
  }
  if (typeof o != "string" || ![
    "p",
    "span",
    "div",
    "ruby",
    "rt",
    "rp",
    "table",
    "thead",
    "tbody",
    "tfoot",
    "tr",
    "td",
    "th",
    "ol",
    "ul",
    "li",
    "details",
    "summary"
  ].includes(o))
    throw new Error(`Unsupported Yomitan content tag: ${String(o)}`);
  const i = Ke(e.content ?? [], t + 1, n);
  Te(n, t);
  const s = fl(e.style), A = Ee(e.title, "element title"), a = Ee(e.lang, "element language"), c = Ze(e.colSpan, "column span"), g = Ze(e.rowSpan, "row span");
  return [
    {
      type: "element",
      tag: o,
      children: i,
      ...A === void 0 ? {} : { title: A },
      ...e.open === !0 ? { open: !0 } : {},
      ...a === void 0 ? {} : { lang: a },
      ...c === void 0 ? {} : { colSpan: c },
      ...g === void 0 ? {} : { rowSpan: g },
      ...Object.keys(s).length === 0 ? {} : { style: s }
    }
  ];
}, Is = (e, t) => {
  const n = {
    nodes: 0,
    ...t === void 0 ? {} : { currentHeadword: t }
  };
  return e.flatMap((o) => Ke(o, 1, n));
}, hl = (e) => {
  const t = /* @__PURE__ */ new Set(), n = (o) => {
    o.type === "image" ? t.add(o.resourceRef) : o.type === "element" && o.children.forEach(n);
  };
  return e.forEach(n), [...t];
}, Fe = 4294967295, le = 65535, Yn = 255, El = 8, No = 9, Bl = 0, Il = 99, wl = 67324752, ws = 134695760, Cl = ws, zo = 33639248, yl = 101010256, Go = 101075792, vl = 117853008, Pe = 22, dn = 20, fn = 56, _l = 12, Ql = 20, Uo = 4, bl = 1, xl = 39169, Dl = 10, Sl = 1, Rl = 21589, kl = 28789, Tl = 25461, Ol = 6534, Yl = 30837, Fl = 30805, Lo = 1, Ml = 6, Po = 8, Ho = 2048, Nl = 16, zl = 1, Gl = 2, Ul = 4, Ll = 32, Ko = 61440, pn = 16384, mn = 73, Pl = 420, Hl = 2048, Kl = 1024, jl = 512, Zl = "/", hn = 30, Wl = 10, Jl = 14, ql = 18, S = void 0, jo = 1 / 0, xe = "undefined", ke = "function", Vl = 64;
let Cs = 2;
try {
  typeof navigator != xe && navigator.hardwareConcurrency && (Cs = navigator.hardwareConcurrency);
} catch {
}
const $l = {
  workerURI: "./core/web-worker-wasm.js",
  wasmURI: "./core/streams/zlib-wasm/zlib-streams.wasm",
  chunkSize: 64 * 1024,
  maxWorkers: Cs,
  terminateWorkerTimeout: 5e3,
  useWebWorkers: !0,
  useCompressionStream: !0,
  CompressionStream: typeof CompressionStream != xe && CompressionStream,
  DecompressionStream: typeof DecompressionStream != xe && DecompressionStream
}, ys = Object.assign({}, $l);
function Xl() {
  return ys;
}
function ed(e) {
  return Math.max(e.chunkSize, Vl);
}
function sn(e) {
  const {
    baseURI: t,
    chunkSize: n,
    maxWorkers: o,
    terminateWorkerTimeout: r,
    useCompressionStream: i,
    useWebWorkers: s,
    CompressionStream: A,
    DecompressionStream: a,
    CompressionStreamZlib: c,
    DecompressionStreamZlib: g,
    workerURI: u,
    wasmURI: l
  } = e;
  oe("baseURI", t), oe("wasmURI", l), oe("workerURI", u), oe("chunkSize", n), oe("maxWorkers", o), oe("terminateWorkerTimeout", r), oe("useCompressionStream", i), oe("useWebWorkers", s), oe("CompressionStream", A), oe("DecompressionStream", a), oe("CompressionStreamZlib", c), oe("DecompressionStreamZlib", g);
}
function oe(e, t) {
  t !== S && (ys[e] = t);
}
function td(e) {
  const t = `(t=>{"function"==typeof define&&define.amd?define(t):t()})(function(){"use strict";const{Array:t,Object:e,Number:n,Math:s,Error:r,Uint8Array:o,Uint16Array:i,Uint32Array:c,Int32Array:a,Map:h,DataView:f,Promise:l,TextEncoder:u,crypto:w,postMessage:p,TransformStream:d,ReadableStream:y,WritableStream:m,CompressionStream:g,DecompressionStream:S}=self,b=void 0,v="undefined",k="function",z=[];for(let t=0;256>t;t++){let e=t;for(let t=0;8>t;t++)1&e?e=e>>>1^3988292384:e>>>=1;z[t]=e}class C{constructor(t){this.t=t||-1}append(t){let e=0|this.t;for(let n=0,s=0|t.length;s>n;n++)e=e>>>8^z[255&(e^t[n])];this.t=e}get(){return~this.t}}class A extends d{constructor(){let t;const e=new C;super({transform(t,n){e.append(t),n.enqueue(t)},flush(){const n=new o(4);new f(n.buffer).setUint32(0,e.get()),t.value=n}}),t=this}}const x={concat(t,e){if(0===t.length||0===e.length)return t.concat(e);const n=t[t.length-1],s=x.o(n);return 32===s?t.concat(e):x.i(e,s,0|n,t.slice(0,t.length-1))},h(t){const e=t.length;if(0===e)return 0;const n=t[e-1];return 32*(e-1)+x.o(n)},l(t,e){if(32*t.length<e)return t;const n=(t=t.slice(0,s.ceil(e/32))).length;return e&=31,n>0&&e&&(t[n-1]=x.u(e,t[n-1]&2147483648>>e-1,1)),t},u:(t,e,n)=>32===t?e:(n?0|e:e<<32-t)+1099511627776*t,o:t=>s.round(t/1099511627776)||32,i(t,e,n,s){for(void 0===s&&(s=[]);e>=32;e-=32)s.push(n),n=0;if(0===e)return s.concat(t);for(let r=0;r<t.length;r++)s.push(n|t[r]>>>e),n=t[r]<<32-e;const r=t.length?t[t.length-1]:0,o=x.o(r);return s.push(x.u(e+o&31,e+o>32?n:s.pop(),1)),s}},I={bytes:{p(t){const e=x.h(t)/8,n=new o(e);let s;for(let r=0;e>r;r++)3&r||(s=t[r/4]),n[r]=s>>>24,s<<=8;return n},m(t){const e=[];let n,s=0;for(n=0;n<t.length;n++)s=s<<8|t[n],3&~n||(e.push(s),s=0);return 3&n&&e.push(x.u(8*(3&n),s)),e}}},R=class{constructor(t){const e=this;e.blockSize=512,e.S=[1732584193,4023233417,2562383102,271733878,3285377520],e.v=[1518500249,1859775393,2400959708,3395469782],t?(e.k=t.k.slice(0),e.C=t.C.slice(0),e.A=t.A):e.reset()}reset(){const t=this;return t.k=t.S.slice(0),t.C=[],t.A=0,t}update(t){const e=this;"string"==typeof t&&(t=I.I.m(t));const n=e.C=x.concat(e.C,t),s=e.A,o=e.A=s+x.h(t);if(o>9007199254740991)throw new r("Cannot hash more than 2^53 - 1 bits");const i=new c(n);let a=0;for(let t=e.blockSize+s-(e.blockSize+s&e.blockSize-1);o>=t;t+=e.blockSize)e.R(i.subarray(16*a,16*(a+1))),a+=1;return n.splice(0,16*a),e}P(){const t=this;let e=t.C;const n=t.k;e=x.concat(e,[x.u(1,1)]);for(let t=e.length+2;15&t;t++)e.push(0);for(e.push(s.floor(t.A/4294967296)),e.push(0|t.A);e.length;)t.R(e.splice(0,16));return t.reset(),n}U(t,e,n,s){return t>19?t>39?t>59?t>79?void 0:e^n^s:e&n|e&s|n&s:e^n^s:e&n|~e&s}V(t,e){return e<<t|e>>>32-t}R(e){const n=this,r=n.k,o=t(80);for(let t=0;16>t;t++)o[t]=e[t];let i=r[0],c=r[1],a=r[2],h=r[3],f=r[4];for(let t=0;79>=t;t++){16>t||(o[t]=n.V(1,o[t-3]^o[t-8]^o[t-14]^o[t-16]));const e=n.V(5,i)+n.U(t,c,a,h)+f+o[t]+n.v[s.floor(t/20)]|0;f=h,h=a,a=n.V(30,c),c=i,i=e}r[0]=r[0]+i|0,r[1]=r[1]+c|0,r[2]=r[2]+a|0,r[3]=r[3]+h|0,r[4]=r[4]+f|0}},P={getRandomValues(t){const e=new c(t.buffer),n=t=>{let e=987654321;const n=4294967295;return()=>(e=36969*(65535&e)+(e>>16)&n,(((e<<16)+(t=18e3*(65535&t)+(t>>16)&n)&n)/4294967296+.5)*(s.random()>.5?1:-1))};for(let r,o=0;o<t.length;o+=4){const t=n(4294967296*(r||s.random()));r=987654071*t(),e[o/4]=4294967296*t()|0}return t}},U={importKey:t=>new U.M(I.bytes.m(t)),_(t,e,n,s){if(n=n||1e4,0>s||0>n)throw new r("invalid params to pbkdf2");const o=1+(s>>5)<<2;let i,c,a,h,l;const u=new ArrayBuffer(o),w=new f(u);let p=0;const d=x;for(e=I.bytes.m(e),l=1;(o||1)>p;l++){for(i=c=t.encrypt(d.concat(e,[l])),a=1;n>a;a++)for(c=t.encrypt(c),h=0;h<c.length;h++)i[h]^=c[h];for(a=0;(o||1)>p&&a<i.length;a++)w.setInt32(p,i[a]),p+=4}return u.slice(0,s/8)},M:class{constructor(t){const e=this,n=e.B=R,s=[[],[]];e.D=[new n,new n];const r=e.D[0].blockSize/32;t.length>r&&(t=(new n).update(t).P());for(let e=0;r>e;e++)s[0][e]=909522486^t[e],s[1][e]=1549556828^t[e];e.D[0].update(s[0]),e.D[1].update(s[1]),e.W=new n(e.D[0])}reset(){const t=this;t.W=new t.B(t.D[0]),t.K=!1}update(t){this.K=!0,this.W.update(t)}digest(){const t=this,e=t.W.P(),n=new t.B(t.D[1]).update(e).P();return t.reset(),n}encrypt(t){if(this.K)throw new r("encrypt on already updated hmac called!");return this.update(t),this.digest(t)}}},V=typeof w!=v&&typeof w.getRandomValues==k,M="Invalid password",_="Invalid signature",B="zipjs-abort-check-password";function D(t){return V?w.getRandomValues(t):P.getRandomValues(t)}const W=16,K={name:"PBKDF2"},E=e.assign({hash:{name:"HMAC"}},K),L=e.assign({iterations:1e3,hash:{name:"SHA-1"}},K),O=["deriveBits"],T=[8,12,16],j=[16,24,32],H=10,Z=[0,0,0,0],F=typeof w!=v,N=F&&w.subtle,q=F&&typeof N!=v,G=I.bytes,J=class{constructor(t){const e=this;e.L=[[[],[],[],[],[]],[[],[],[],[],[]]],e.L[0][0][0]||e.O();const n=e.L[0][4],s=e.L[1],o=t.length;let i,c,a,h=1;if(4!==o&&6!==o&&8!==o)throw new r("invalid aes key size");for(e.v=[c=t.slice(0),a=[]],i=o;4*o+28>i;i++){let t=c[i-1];(i%o===0||8===o&&i%o===4)&&(t=n[t>>>24]<<24^n[t>>16&255]<<16^n[t>>8&255]<<8^n[255&t],i%o===0&&(t=t<<8^t>>>24^h<<24,h=h<<1^283*(h>>7))),c[i]=c[i-o]^t}for(let t=0;i;t++,i--){const e=c[3&t?i:i-4];a[t]=4>=i||4>t?e:s[0][n[e>>>24]]^s[1][n[e>>16&255]]^s[2][n[e>>8&255]]^s[3][n[255&e]]}}encrypt(t){return this.T(t,0)}decrypt(t){return this.T(t,1)}O(){const t=this.L[0],e=this.L[1],n=t[4],s=e[4],r=[],o=[];let i,c,a,h;for(let t=0;256>t;t++)o[(r[t]=t<<1^283*(t>>7))^t]=t;for(let f=i=0;!n[f];f^=c||1,i=o[i]||1){let o=i^i<<1^i<<2^i<<3^i<<4;o=o>>8^255&o^99,n[f]=o,s[o]=f,h=r[a=r[c=r[f]]];let l=16843009*h^65537*a^257*c^16843008*f,u=257*r[o]^16843008*o;for(let n=0;4>n;n++)t[n][f]=u=u<<24^u>>>8,e[n][o]=l=l<<24^l>>>8}for(let n=0;5>n;n++)t[n]=t[n].slice(0),e[n]=e[n].slice(0)}T(t,e){if(4!==t.length)throw new r("invalid aes block size");const n=this.v[e],s=n.length/4-2,o=[0,0,0,0],i=this.L[e],c=i[0],a=i[1],h=i[2],f=i[3],l=i[4];let u,w,p,d=t[0]^n[0],y=t[e?3:1]^n[1],m=t[2]^n[2],g=t[e?1:3]^n[3],S=4;for(let t=0;s>t;t++)u=c[d>>>24]^a[y>>16&255]^h[m>>8&255]^f[255&g]^n[S],w=c[y>>>24]^a[m>>16&255]^h[g>>8&255]^f[255&d]^n[S+1],p=c[m>>>24]^a[g>>16&255]^h[d>>8&255]^f[255&y]^n[S+2],g=c[g>>>24]^a[d>>16&255]^h[y>>8&255]^f[255&m]^n[S+3],S+=4,d=u,y=w,m=p;for(let t=0;4>t;t++)o[e?3&-t:t]=l[d>>>24]<<24^l[y>>16&255]<<16^l[m>>8&255]<<8^l[255&g]^n[S++],u=d,d=y,y=m,m=g,g=u;return o}},Q=class{constructor(t,e){this.j=t,this.H=e,this.Z=e}reset(){this.Z=this.H}update(t){return this.F(this.j,t,this.Z)}N(t){if(255&~(t>>24))t+=1<<24;else{let e=t>>16&255,n=t>>8&255,s=255&t;255===e?(e=0,255===n?(n=0,255===s?s=0:++s):++n):++e,t=0,t+=e<<16,t+=n<<8,t+=s}return t}q(t){0===(t[0]=this.N(t[0]))&&(t[1]=this.N(t[1]))}F(t,e,n){let s;if(!(s=e.length))return[];const r=x.h(e);for(let r=0;s>r;r+=4){this.q(n);const s=t.encrypt(n);e[r]^=s[0],e[r+1]^=s[1],e[r+2]^=s[2],e[r+3]^=s[3]}return x.l(e,r)}},X=U.M;let Y=F&&q&&typeof N.importKey==k,$=F&&q&&typeof N.deriveBits==k;class tt extends d{constructor({password:t,rawPassword:n,signed:s,encryptionStrength:i,checkPasswordOnly:c}){super({start(){e.assign(this,{ready:new l(t=>this.G=t),password:rt(t,n),signed:s,J:i-1,pending:new o})},async transform(t,e){const n=this,{password:s,J:i,G:a,ready:h}=n;s?(await(async(t,e,n,s)=>{const o=await st(t,e,n,it(s,0,T[e])),i=it(s,T[e]);if(o[0]!=i[0]||o[1]!=i[1])throw new r(M)})(n,i,s,it(t,0,T[i]+2)),t=it(t,T[i]+2),c?e.error(new r(B)):a()):await h;const f=new o(t.length-H-(t.length-H)%W);e.enqueue(nt(n,t,f,0,H,!0))},async flush(t){const{signed:e,X:n,Y:s,pending:i,ready:c}=this;if(s&&n){await c;const a=it(i,0,i.length-H),h=it(i,i.length-H);let f=new o;if(a.length){const t=at(G,a);s.update(t);const e=n.update(t);f=ct(G,e)}if(e){const t=it(ct(G,s.digest()),0,H);for(let e=0;H>e;e++)if(t[e]!=h[e])throw new r(_)}t.enqueue(f)}}})}}class et extends d{constructor({password:t,rawPassword:n,encryptionStrength:s}){let r;super({start(){e.assign(this,{ready:new l(t=>this.G=t),password:rt(t,n),J:s-1,pending:new o})},async transform(t,e){const n=this,{password:s,J:r,G:i,ready:c}=n;let a=new o;s?(a=await(async(t,e,n)=>{const s=D(new o(T[e]));return ot(s,await st(t,e,n,s))})(n,r,s),i()):await c;const h=new o(a.length+t.length-t.length%W);h.set(a,0),e.enqueue(nt(n,t,h,a.length,0))},async flush(t){const{X:e,Y:n,pending:s,ready:i}=this;if(n&&e){await i;let c=new o;if(s.length){const t=e.update(at(G,s));n.update(t),c=ct(G,t)}r.signature=ct(G,n.digest()).slice(0,H),t.enqueue(ot(c,r.signature))}}}),r=this}}function nt(t,e,n,s,r,i){const{X:c,Y:a,pending:h}=t,f=e.length-r;let l;for(h.length&&(e=ot(h,e),n=((t,e)=>{if(e&&e>t.length){const n=t;(t=new o(e)).set(n,0)}return t})(n,f-f%W)),l=0;f-W>=l;l+=W){const t=at(G,it(e,l,l+W));i&&a.update(t);const r=c.update(t);i||a.update(r),n.set(ct(G,r),l+s)}return t.pending=it(e,l),n}async function st(n,s,r,i){n.password=null;const c=await(async(t,e,n,s,r)=>{if(!Y)return U.importKey(e);try{return await N.importKey("raw",e,n,!1,r)}catch{return Y=!1,U.importKey(e)}})(0,r,E,0,O),a=await(async(t,e,n)=>{if(!$)return U._(e,t.salt,L.iterations,n);try{return await N.deriveBits(t,e,n)}catch{return $=!1,U._(e,t.salt,L.iterations,n)}})(e.assign({salt:i},L),c,8*(2*j[s]+2)),h=new o(a),f=at(G,it(h,0,j[s])),l=at(G,it(h,j[s],2*j[s])),u=it(h,2*j[s]);return e.assign(n,{keys:{key:f,$:l,passwordVerification:u},X:new Q(new J(f),t.from(Z)),Y:new X(l)}),u}function rt(t,e){return e===b?(t=>{if(typeof u==v){const e=new o((t=unescape(encodeURIComponent(t))).length);for(let n=0;n<e.length;n++)e[n]=t.charCodeAt(n);return e}return(new u).encode(t)})(t):e}function ot(t,e){let n=t;return t.length+e.length&&(n=new o(t.length+e.length),n.set(t,0),n.set(e,t.length)),n}function it(t,e,n){return t.subarray(e,n)}function ct(t,e){return t.p(e)}function at(t,e){return t.m(e)}class ht extends d{constructor({password:t,passwordVerification:n,checkPasswordOnly:s}){super({start(){e.assign(this,{password:t,passwordVerification:n}),wt(this,t)},transform(t,e){const n=this;if(n.password){const e=lt(n,t.subarray(0,12));if(n.password=null,e.at(-1)!=n.passwordVerification)throw new r(M);t=t.subarray(12)}s?e.error(new r(B)):e.enqueue(lt(n,t))}})}}class ft extends d{constructor({password:t,passwordVerification:n}){super({start(){e.assign(this,{password:t,passwordVerification:n}),wt(this,t)},transform(t,e){const n=this;let s,r;if(n.password){n.password=null;const e=D(new o(12));e[11]=n.passwordVerification,s=new o(t.length+e.length),s.set(ut(n,e),0),r=12}else s=new o(t.length),r=0;s.set(ut(n,t),r),e.enqueue(s)}})}}function lt(t,e){const n=new o(e.length);for(let s=0;s<e.length;s++)n[s]=dt(t)^e[s],pt(t,n[s]);return n}function ut(t,e){const n=new o(e.length);for(let s=0;s<e.length;s++)n[s]=dt(t)^e[s],pt(t,e[s]);return n}function wt(t,n){const s=[305419896,591751049,878082192];e.assign(t,{keys:s,tt:new C(s[0]),et:new C(s[2])});for(let e=0;e<n.length;e++)pt(t,n.charCodeAt(e))}function pt(t,e){let[n,r,o]=t.keys;t.tt.append([e]),n=~t.tt.get(),r=mt(s.imul(mt(r+yt(n)),134775813)+1),t.et.append([r>>>24]),o=~t.et.get(),t.keys=[n,r,o]}function dt(t){const e=2|t.keys[2];return yt(s.imul(e,1^e)>>>8)}function yt(t){return 255&t}function mt(t){return 4294967295&t}class gt extends d{constructor(t,{chunkSize:e,nt:n,CompressionStream:s}){super({});const{compressed:r,encrypted:o,useCompressionStream:i,zipCrypto:c,signed:a,level:h}=t,l=this;let u,w,p=super.readable;o&&!c||!a||(u=new A,p=kt(p,u)),r&&(p=vt(p,i,{level:h,chunkSize:e},s,n,s)),o&&(c?p=kt(p,new ft(t)):(w=new et(t),p=kt(p,w))),bt(l,p,()=>{let t;o&&!c&&(t=w.signature),o&&!c||!a||(t=new f(u.value.buffer).getUint32(0)),l.signature=t})}}class St extends d{constructor(t,{chunkSize:e,st:n,DecompressionStream:s}){super({});const{zipCrypto:o,encrypted:i,signed:c,signature:a,compressed:h,useCompressionStream:l,rt:u}=t;let w,p,d=super.readable;i&&(o?d=kt(d,new ht(t)):(p=new tt(t),d=kt(d,p))),h&&(d=vt(d,l,{chunkSize:e,rt:u},s,n,s)),i&&!o||!c||(w=new A,d=kt(d,w)),bt(this,d,()=>{if((!i||o)&&c){const t=new f(w.value.buffer);if(a!=t.getUint32(0,!1))throw new r(_)}})}}function bt(t,n,s){n=kt(n,new d({flush:s})),e.defineProperty(t,"readable",{get:()=>n})}function vt(t,e,n,s,r,o){const i=e&&s?s:r||o,c=n.rt?"deflate64-raw":"deflate-raw";try{t=kt(t,new i(c,n))}catch(s){if(!e)throw s;if(r)t=kt(t,new r(c,n));else{if(!o)throw s;t=kt(t,new o(c,n))}}return t}function kt(t,e){return t.pipeThrough(e)}const zt="data",Ct="close";class At extends d{constructor(t,n){super({});const s=this,{codecType:o}=t;let i;o.startsWith("deflate")?i=gt:o.startsWith("inflate")&&(i=St),s.outputSize=0;let c=0;const a=new i(t,n),h=super.readable,f=new d({transform(t,e){t&&t.length&&(c+=t.length,e.enqueue(t))},flush(){e.assign(s,{inputSize:c})}}),l=new d({transform(e,n){if(e&&e.length&&(n.enqueue(e),s.outputSize+=e.length,t.outputSize!==b&&s.outputSize>t.outputSize))throw new r("Invalid uncompressed size")},flush(){const{signature:t}=a;e.assign(s,{signature:t,inputSize:c})}});e.defineProperty(s,"readable",{get:()=>h.pipeThrough(f).pipeThrough(a).pipeThrough(l)})}}class xt extends d{constructor(t){let e;super({transform:function n(s,r){if(e){const t=new o(e.length+s.length);t.set(e),t.set(s,e.length),s=t,e=null}s.length>t?(r.enqueue(s.slice(0,t)),n(s.slice(t),r)):e=s},flush(t){e&&e.length&&t.enqueue(e)}})}}const It=new h,Rt=new h;let Pt,Ut,Vt,Mt,_t,Bt=0;async function Dt(t){try{const{options:e,config:s}=t;if(!e.useCompressionStream)try{await self.initModule(t.config)}catch{e.useCompressionStream=!0}s.CompressionStream=self.CompressionStream,s.DecompressionStream=self.DecompressionStream;const r={highWaterMark:1},o=t.readable||new y({async pull(t){const e=new l(t=>It.set(Bt,t));Wt({type:"pull",messageId:Bt}),Bt=(Bt+1)%n.MAX_SAFE_INTEGER;const{value:s,done:r}=await e;t.enqueue(s),r&&t.close()}},r),i=t.writable||new m({async write(t){let e;const s=new l(t=>e=t);Rt.set(Bt,e),Wt({type:zt,value:t,messageId:Bt}),Bt=(Bt+1)%n.MAX_SAFE_INTEGER,await s}},r),c=new At(e,s);Pt=new AbortController;const{signal:a}=Pt;await o.pipeThrough(c).pipeThrough(new xt(s.chunkSize)).pipeTo(i,{signal:a,preventClose:!0,preventAbort:!0}),await i.getWriter().close();const{signature:h,inputSize:f,outputSize:u}=c;Wt({type:Ct,result:{signature:h,inputSize:f,outputSize:u}})}catch(t){t.outputSize=0,Kt(t)}}function Wt(t){let{value:e}=t;if(e)if(e.length)try{e=new o(e),t.value=e.buffer,p(t,[t.value])}catch{p(t)}else p(t);else p(t)}function Kt(t=new r("Unknown error")){const{message:e,stack:n,code:s,name:o,outputSize:i}=t;p({error:{message:e,stack:n,code:s,name:o,outputSize:i}})}function Et(t,e,n={}){const i="number"==typeof n.level?n.level:-1,c="number"==typeof n.ot?n.ot:65536,a="number"==typeof n.it?n.it:65536;return new d({start(){let n;if(this.ct=Vt(c),this.in=Vt(a),this.it=a,this.ht=new o(c),t?(this.ft=Ut.deflate_process,this.lt=Ut.deflate_last_consumed,this.ut=Ut.deflate_end,this.wt=Ut.deflate_new(),n="gzip"===e?Ut.deflate_init_gzip(this.wt,i):"deflate-raw"===e?Ut.deflate_init_raw(this.wt,i):Ut.deflate_init(this.wt,i)):"deflate64-raw"===e?(this.ft=Ut.inflate9_process,this.lt=Ut.inflate9_last_consumed,this.ut=Ut.inflate9_end,this.wt=Ut.inflate9_new(),n=Ut.inflate9_init_raw(this.wt)):(this.ft=Ut.inflate_process,this.lt=Ut.inflate_last_consumed,this.ut=Ut.inflate_end,this.wt=Ut.inflate_new(),n="deflate-raw"===e?Ut.inflate_init_raw(this.wt):"gzip"===e?Ut.inflate_init_gzip(this.wt):Ut.inflate_init(this.wt)),0!==n)throw new r("init failed:"+n)},transform(e,n){try{const i=e,a=new o(_t.buffer),h=this.ft,f=this.lt,l=this.ct,u=this.ht;let w=0;for(;w<i.length;){const e=s.min(i.length-w,32768);this.in&&this.it>=e||(this.in&&Mt&&Mt(this.in),this.in=Vt(e),this.it=e),a.set(i.subarray(w,w+e),this.in);const o=h(this.wt,this.in,e,l,c,0),p=16777215&o;if(p&&(u.set(a.subarray(l,l+p),0),n.enqueue(u.slice(0,p))),!t){const t=o>>24&255,e=128&t?t-256:t;if(0>e)throw new r("process error:"+e)}const d=f(this.wt);if(0===d)break;w+=d}}catch(t){this.ut&&this.wt&&this.ut(this.wt),this.in&&Mt&&Mt(this.in),this.ct&&Mt&&Mt(this.ct),n.error(t)}},flush(e){try{const n=new o(_t.buffer),s=this.ft,i=this.ct,a=this.ht;for(;;){const o=s(this.wt,0,0,i,c,4),h=16777215&o,f=o>>24&255;if(!t){const t=128&f?f-256:f;if(0>t)throw new r("process error:"+t)}if(h&&(a.set(n.subarray(i,i+h),0),e.enqueue(a.slice(0,h))),1===f||0===h)break}}catch(t){e.error(t)}finally{if(this.ut&&this.wt){const t=this.ut(this.wt);0!==t&&e.error(new r("end error:"+t))}this.in&&Mt&&Mt(this.in),this.ct&&Mt&&Mt(this.ct)}}})}addEventListener("message",({data:t})=>{const{type:e,messageId:n,value:s,done:r}=t;try{if("start"==e&&Dt(t),e==zt){const t=It.get(n);It.delete(n),t({value:new o(s),done:r})}if("ack"==e){const t=Rt.get(n);Rt.delete(n),t()}e==Ct&&Pt.abort()}catch(t){Kt(t)}});class Lt{constructor(t="deflate",e){return Et(!0,t,e)}}class Ot{constructor(t="deflate",e){return Et(!1,t,e)}}let Tt=!1;self.initModule=async t=>{try{const e=await(async(t,{baseURI:e})=>{if(!Tt){let n,s;try{try{s=new URL(t,e)}catch{}const r=await fetch(s);n=await r.arrayBuffer()}catch(e){if(!t.startsWith("data:application/wasm;base64,"))throw e;n=(t=>{const e=t.split(",")[1],n=atob(e),s=n.length,r=new o(s);for(let t=0;s>t;++t)r[t]=n.charCodeAt(t);return r.buffer})(t)}(t=>{if(Ut=t,({malloc:Vt,free:Mt,memory:_t}=Ut),"function"!=typeof Vt||"function"!=typeof Mt||!_t)throw Ut=Vt=Mt=_t=null,new r("Invalid WASM module")})((await WebAssembly.instantiate(n)).instance.exports),Tt=!0}})(t.wasmURI,t);return t.nt=Lt,t.st=Ot,e}catch{}}});
`;
  e({ workerURI: (n) => {
    const o = "text/javascript";
    if (n) {
      const r = new Blob([t], { type: o });
      return URL.createObjectURL(r);
    }
    return "data:" + o + "," + encodeURIComponent(t);
  } });
}
const vs = [];
for (let e = 0; e < 256; e++) {
  let t = e;
  for (let n = 0; n < 8; n++)
    t & 1 ? t = t >>> 1 ^ 3988292384 : t = t >>> 1;
  vs[e] = t;
}
class Jt {
  constructor(t) {
    this.crc = t || -1;
  }
  append(t) {
    let n = this.crc | 0;
    for (let o = 0, r = t.length | 0; o < r; o++)
      n = n >>> 8 ^ vs[(n ^ t[o]) & 255];
    this.crc = n;
  }
  get() {
    return ~this.crc;
  }
}
class _s extends TransformStream {
  constructor() {
    let t;
    const n = new Jt();
    super({
      transform(o, r) {
        n.append(o), r.enqueue(o);
      },
      flush() {
        const o = new Uint8Array(4);
        new DataView(o.buffer).setUint32(0, n.get()), t.value = o;
      }
    }), t = this;
  }
}
function nd(e) {
  if (typeof TextEncoder == xe) {
    e = unescape(encodeURIComponent(e));
    const t = new Uint8Array(e.length);
    for (let n = 0; n < t.length; n++)
      t[n] = e.charCodeAt(n);
    return t;
  } else
    return new TextEncoder().encode(e);
}
const W = {
  /**
   * Concatenate two bit arrays.
   * @param {bitArray} a1 The first array.
   * @param {bitArray} a2 The second array.
   * @return {bitArray} The concatenation of a1 and a2.
   */
  concat(e, t) {
    if (e.length === 0 || t.length === 0)
      return e.concat(t);
    const n = e[e.length - 1], o = W.getPartial(n);
    return o === 32 ? e.concat(t) : W._shiftRight(t, o, n | 0, e.slice(0, e.length - 1));
  },
  /**
   * Find the length of an array of bits.
   * @param {bitArray} a The array.
   * @return {Number} The length of a, in bits.
   */
  bitLength(e) {
    const t = e.length;
    if (t === 0)
      return 0;
    const n = e[t - 1];
    return (t - 1) * 32 + W.getPartial(n);
  },
  /**
   * Truncate an array.
   * @param {bitArray} a The array.
   * @param {Number} len The length to truncate to, in bits.
   * @return {bitArray} A new array, truncated to len bits.
   */
  clamp(e, t) {
    if (e.length * 32 < t)
      return e;
    e = e.slice(0, Math.ceil(t / 32));
    const n = e.length;
    return t = t & 31, n > 0 && t && (e[n - 1] = W.partial(t, e[n - 1] & 2147483648 >> t - 1, 1)), e;
  },
  /**
   * Make a partial word for a bit array.
   * @param {Number} len The number of bits in the word.
   * @param {Number} x The bits.
   * @param {Number} [_end=0] Pass 1 if x has already been shifted to the high side.
   * @return {Number} The partial word.
   */
  partial(e, t, n) {
    return e === 32 ? t : (n ? t | 0 : t << 32 - e) + e * 1099511627776;
  },
  /**
   * Get the number of bits used by a partial word.
   * @param {Number} x The partial word.
   * @return {Number} The number of bits used by the partial word.
   */
  getPartial(e) {
    return Math.round(e / 1099511627776) || 32;
  },
  /** Shift an array right.
   * @param {bitArray} a The array to shift.
   * @param {Number} shift The number of bits to shift.
   * @param {Number} [carry=0] A byte to carry in
   * @param {bitArray} [out=[]] An array to prepend to the output.
   * @private
   */
  _shiftRight(e, t, n, o) {
    for (o === void 0 && (o = []); t >= 32; t -= 32)
      o.push(n), n = 0;
    if (t === 0)
      return o.concat(e);
    for (let s = 0; s < e.length; s++)
      o.push(n | e[s] >>> t), n = e[s] << 32 - t;
    const r = e.length ? e[e.length - 1] : 0, i = W.getPartial(r);
    return o.push(W.partial(t + i & 31, t + i > 32 ? n : o.pop(), 1)), o;
  }
}, qt = {
  bytes: {
    /** Convert from a bitArray to an array of bytes. */
    fromBits(e) {
      const n = W.bitLength(e) / 8, o = new Uint8Array(n);
      let r;
      for (let i = 0; i < n; i++)
        (i & 3) === 0 && (r = e[i / 4]), o[i] = r >>> 24, r <<= 8;
      return o;
    },
    /** Convert from an array of bytes to a bitArray. */
    toBits(e) {
      const t = [];
      let n, o = 0;
      for (n = 0; n < e.length; n++)
        o = o << 8 | e[n], (n & 3) === 3 && (t.push(o), o = 0);
      return n & 3 && t.push(W.partial(8 * (n & 3), o)), t;
    }
  }
}, Qs = {};
Qs.sha1 = class {
  constructor(e) {
    const t = this;
    t.blockSize = 512, t._init = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], t._key = [1518500249, 1859775393, 2400959708, 3395469782], e ? (t._h = e._h.slice(0), t._buffer = e._buffer.slice(0), t._length = e._length) : t.reset();
  }
  /**
   * Reset the hash state.
   * @return this
   */
  reset() {
    const e = this;
    return e._h = e._init.slice(0), e._buffer = [], e._length = 0, e;
  }
  /**
   * Input several words to the hash.
   * @param {bitArray|String} data the data to hash.
   * @return this
   */
  update(e) {
    const t = this;
    typeof e == "string" && (e = qt.utf8String.toBits(e));
    const n = t._buffer = W.concat(t._buffer, e), o = t._length, r = t._length = o + W.bitLength(e);
    if (r > 9007199254740991)
      throw new Error("Cannot hash more than 2^53 - 1 bits");
    const i = new Uint32Array(n);
    let s = 0;
    for (let A = t.blockSize + o - (t.blockSize + o & t.blockSize - 1); A <= r; A += t.blockSize)
      t._block(i.subarray(16 * s, 16 * (s + 1))), s += 1;
    return n.splice(0, 16 * s), t;
  }
  /**
   * Complete hashing and output the hash value.
   * @return {bitArray} The hash value, an array of 5 big-endian words. TODO
   */
  finalize() {
    const e = this;
    let t = e._buffer;
    const n = e._h;
    t = W.concat(t, [W.partial(1, 1)]);
    for (let o = t.length + 2; o & 15; o++)
      t.push(0);
    for (t.push(Math.floor(e._length / 4294967296)), t.push(e._length | 0); t.length; )
      e._block(t.splice(0, 16));
    return e.reset(), n;
  }
  /**
   * The SHA-1 logical functions f(0), f(1), ..., f(79).
   * @private
   */
  _f(e, t, n, o) {
    if (e <= 19)
      return t & n | ~t & o;
    if (e <= 39)
      return t ^ n ^ o;
    if (e <= 59)
      return t & n | t & o | n & o;
    if (e <= 79)
      return t ^ n ^ o;
  }
  /**
   * Circular left-shift operator.
   * @private
   */
  _S(e, t) {
    return t << e | t >>> 32 - e;
  }
  /**
   * Perform one cycle of SHA-1.
   * @param {Uint32Array|bitArray} words one block of words.
   * @private
   */
  _block(e) {
    const t = this, n = t._h, o = Array(80);
    for (let c = 0; c < 16; c++)
      o[c] = e[c];
    let r = n[0], i = n[1], s = n[2], A = n[3], a = n[4];
    for (let c = 0; c <= 79; c++) {
      c >= 16 && (o[c] = t._S(1, o[c - 3] ^ o[c - 8] ^ o[c - 14] ^ o[c - 16]));
      const g = t._S(5, r) + t._f(c, i, s, A) + a + o[c] + t._key[Math.floor(c / 20)] | 0;
      a = A, A = s, s = t._S(30, i), i = r, r = g;
    }
    n[0] = n[0] + r | 0, n[1] = n[1] + i | 0, n[2] = n[2] + s | 0, n[3] = n[3] + A | 0, n[4] = n[4] + a | 0;
  }
};
const bs = {};
bs.aes = class {
  constructor(e) {
    const t = this;
    t._tables = [[[], [], [], [], []], [[], [], [], [], []]], t._tables[0][0][0] || t._precompute();
    const n = t._tables[0][4], o = t._tables[1], r = e.length;
    let i, s, A, a = 1;
    if (r !== 4 && r !== 6 && r !== 8)
      throw new Error("invalid aes key size");
    for (t._key = [s = e.slice(0), A = []], i = r; i < 4 * r + 28; i++) {
      let c = s[i - 1];
      (i % r === 0 || r === 8 && i % r === 4) && (c = n[c >>> 24] << 24 ^ n[c >> 16 & 255] << 16 ^ n[c >> 8 & 255] << 8 ^ n[c & 255], i % r === 0 && (c = c << 8 ^ c >>> 24 ^ a << 24, a = a << 1 ^ (a >> 7) * 283)), s[i] = s[i - r] ^ c;
    }
    for (let c = 0; i; c++, i--) {
      const g = s[c & 3 ? i : i - 4];
      i <= 4 || c < 4 ? A[c] = g : A[c] = o[0][n[g >>> 24]] ^ o[1][n[g >> 16 & 255]] ^ o[2][n[g >> 8 & 255]] ^ o[3][n[g & 255]];
    }
  }
  // public
  /* Something like this might appear here eventually
  name: "AES",
  blockSize: 4,
  keySizes: [4,6,8],
  */
  /**
   * Encrypt an array of 4 big-endian words.
   * @param {Array} data The plaintext.
   * @return {Array} The ciphertext.
   */
  encrypt(e) {
    return this._crypt(e, 0);
  }
  /**
   * Decrypt an array of 4 big-endian words.
   * @param {Array} data The ciphertext.
   * @return {Array} The plaintext.
   */
  decrypt(e) {
    return this._crypt(e, 1);
  }
  /**
   * Expand the S-box tables.
   *
   * @private
   */
  _precompute() {
    const e = this._tables[0], t = this._tables[1], n = e[4], o = t[4], r = [], i = [];
    let s, A, a, c;
    for (let g = 0; g < 256; g++)
      i[(r[g] = g << 1 ^ (g >> 7) * 283) ^ g] = g;
    for (let g = s = 0; !n[g]; g ^= A || 1, s = i[s] || 1) {
      let u = s ^ s << 1 ^ s << 2 ^ s << 3 ^ s << 4;
      u = u >> 8 ^ u & 255 ^ 99, n[g] = u, o[u] = g, c = r[a = r[A = r[g]]];
      let l = c * 16843009 ^ a * 65537 ^ A * 257 ^ g * 16843008, d = r[u] * 257 ^ u * 16843008;
      for (let f = 0; f < 4; f++)
        e[f][g] = d = d << 24 ^ d >>> 8, t[f][u] = l = l << 24 ^ l >>> 8;
    }
    for (let g = 0; g < 5; g++)
      e[g] = e[g].slice(0), t[g] = t[g].slice(0);
  }
  /**
   * Encryption and decryption core.
   * @param {Array} input Four words to be encrypted or decrypted.
   * @param dir The direction, 0 for encrypt and 1 for decrypt.
   * @return {Array} The four encrypted or decrypted words.
   * @private
   */
  _crypt(e, t) {
    if (e.length !== 4)
      throw new Error("invalid aes block size");
    const n = this._key[t], o = n.length / 4 - 2, r = [0, 0, 0, 0], i = this._tables[t], s = i[0], A = i[1], a = i[2], c = i[3], g = i[4];
    let u = e[0] ^ n[0], l = e[t ? 3 : 1] ^ n[1], d = e[2] ^ n[2], f = e[t ? 1 : 3] ^ n[3], E = 4, m, C, y;
    for (let w = 0; w < o; w++)
      m = s[u >>> 24] ^ A[l >> 16 & 255] ^ a[d >> 8 & 255] ^ c[f & 255] ^ n[E], C = s[l >>> 24] ^ A[d >> 16 & 255] ^ a[f >> 8 & 255] ^ c[u & 255] ^ n[E + 1], y = s[d >>> 24] ^ A[f >> 16 & 255] ^ a[u >> 8 & 255] ^ c[l & 255] ^ n[E + 2], f = s[f >>> 24] ^ A[u >> 16 & 255] ^ a[l >> 8 & 255] ^ c[d & 255] ^ n[E + 3], E += 4, u = m, l = C, d = y;
    for (let w = 0; w < 4; w++)
      r[t ? 3 & -w : w] = g[u >>> 24] << 24 ^ g[l >> 16 & 255] << 16 ^ g[d >> 8 & 255] << 8 ^ g[f & 255] ^ n[E++], m = u, u = l, l = d, d = f, f = m;
    return r;
  }
};
const od = {
  /** 
   * Generate random words with pure js, cryptographically not as strong & safe as native implementation.
   * @param {TypedArray} typedArray The array to fill.
   * @return {TypedArray} The random values.
   */
  getRandomValues(e) {
    const t = new Uint32Array(e.buffer), n = (o) => {
      let r = 987654321;
      const i = 4294967295;
      return function() {
        return r = 36969 * (r & 65535) + (r >> 16) & i, o = 18e3 * (o & 65535) + (o >> 16) & i, (((r << 16) + o & i) / 4294967296 + 0.5) * (Math.random() > 0.5 ? 1 : -1);
      };
    };
    for (let o = 0, r; o < e.length; o += 4) {
      const i = n((r || Math.random()) * 4294967296);
      r = i() * 987654071, t[o / 4] = i() * 4294967296 | 0;
    }
    return e;
  }
}, xs = {};
xs.ctrGladman = class {
  constructor(e, t) {
    this._prf = e, this._initIv = t, this._iv = t;
  }
  reset() {
    this._iv = this._initIv;
  }
  /** Input some data to calculate.
   * @param {bitArray} data the data to process, it must be intergral multiple of 128 bits unless it's the last.
   */
  update(e) {
    return this.calculate(this._prf, e, this._iv);
  }
  incWord(e) {
    if ((e >> 24 & 255) === 255) {
      let t = e >> 16 & 255, n = e >> 8 & 255, o = e & 255;
      t === 255 ? (t = 0, n === 255 ? (n = 0, o === 255 ? o = 0 : ++o) : ++n) : ++t, e = 0, e += t << 16, e += n << 8, e += o;
    } else
      e += 1 << 24;
    return e;
  }
  incCounter(e) {
    (e[0] = this.incWord(e[0])) === 0 && (e[1] = this.incWord(e[1]));
  }
  calculate(e, t, n) {
    let o;
    if (!(o = t.length))
      return [];
    const r = W.bitLength(t);
    for (let i = 0; i < o; i += 4) {
      this.incCounter(n);
      const s = e.encrypt(n);
      t[i] ^= s[0], t[i + 1] ^= s[1], t[i + 2] ^= s[2], t[i + 3] ^= s[3];
    }
    return W.clamp(t, r);
  }
};
const Ne = {
  importKey(e) {
    return new Ne.hmacSha1(qt.bytes.toBits(e));
  },
  pbkdf2(e, t, n, o) {
    if (n = n || 1e4, o < 0 || n < 0)
      throw new Error("invalid params to pbkdf2");
    const r = (o >> 5) + 1 << 2;
    let i, s, A, a, c;
    const g = new ArrayBuffer(r), u = new DataView(g);
    let l = 0;
    const d = W;
    for (t = qt.bytes.toBits(t), c = 1; l < (r || 1); c++) {
      for (i = s = e.encrypt(d.concat(t, [c])), A = 1; A < n; A++)
        for (s = e.encrypt(s), a = 0; a < s.length; a++)
          i[a] ^= s[a];
      for (A = 0; l < (r || 1) && A < i.length; A++)
        u.setInt32(l, i[A]), l += 4;
    }
    return g.slice(0, o / 8);
  }
};
Ne.hmacSha1 = class {
  constructor(e) {
    const t = this, n = t._hash = Qs.sha1, o = [[], []];
    t._baseHash = [new n(), new n()];
    const r = t._baseHash[0].blockSize / 32;
    e.length > r && (e = new n().update(e).finalize());
    for (let i = 0; i < r; i++)
      o[0][i] = e[i] ^ 909522486, o[1][i] = e[i] ^ 1549556828;
    t._baseHash[0].update(o[0]), t._baseHash[1].update(o[1]), t._resultHash = new n(t._baseHash[0]);
  }
  reset() {
    const e = this;
    e._resultHash = new e._hash(e._baseHash[0]), e._updated = !1;
  }
  update(e) {
    const t = this;
    t._updated = !0, t._resultHash.update(e);
  }
  digest() {
    const e = this, t = e._resultHash.finalize(), n = new e._hash(e._baseHash[1]).update(t).finalize();
    return e.reset(), n;
  }
  encrypt(e) {
    if (this._updated)
      throw new Error("encrypt on already updated hmac called!");
    return this.update(e), this.digest(e);
  }
};
const rd = typeof crypto != xe && typeof crypto.getRandomValues == ke, Ds = "Invalid password", Ss = "Invalid signature", no = "zipjs-abort-check-password";
function Rs(e) {
  return rd ? crypto.getRandomValues(e) : od.getRandomValues(e);
}
const We = 16, sd = "raw", ks = { name: "PBKDF2" }, id = { name: "HMAC" }, Ad = "SHA-1", ad = Object.assign({ hash: id }, ks), Fn = Object.assign({ iterations: 1e3, hash: { name: Ad } }, ks), cd = ["deriveBits"], yt = [8, 12, 16], ft = [16, 24, 32], ve = 10, gd = [0, 0, 0, 0], An = typeof crypto != xe, Dt = An && crypto.subtle, Ts = An && typeof Dt != xe, de = qt.bytes, ud = bs.aes, ld = xs.ctrGladman, dd = Ne.hmacSha1;
let Zo = An && Ts && typeof Dt.importKey == ke, Wo = An && Ts && typeof Dt.deriveBits == ke;
class fd extends TransformStream {
  constructor({ password: t, rawPassword: n, signed: o, encryptionStrength: r, checkPasswordOnly: i }) {
    super({
      start() {
        Object.assign(this, {
          ready: new Promise((s) => this.resolveReady = s),
          password: Fs(t, n),
          signed: o,
          strength: r - 1,
          pending: new Uint8Array()
        });
      },
      async transform(s, A) {
        const a = this, {
          password: c,
          strength: g,
          resolveReady: u,
          ready: l
        } = a;
        c ? (await md(a, g, c, se(s, 0, yt[g] + 2)), s = se(s, yt[g] + 2), i ? A.error(new Error(no)) : u()) : await l;
        const d = new Uint8Array(s.length - ve - (s.length - ve) % We);
        A.enqueue(Os(a, s, d, 0, ve, !0));
      },
      async flush(s) {
        const {
          signed: A,
          ctr: a,
          hmac: c,
          pending: g,
          ready: u
        } = this;
        if (c && a) {
          await u;
          const l = se(g, 0, g.length - ve), d = se(g, g.length - ve);
          let f = new Uint8Array();
          if (l.length) {
            const E = _t(de, l);
            c.update(E);
            const m = a.update(E);
            f = vt(de, m);
          }
          if (A) {
            const E = se(vt(de, c.digest()), 0, ve);
            for (let m = 0; m < ve; m++)
              if (E[m] != d[m])
                throw new Error(Ss);
          }
          s.enqueue(f);
        }
      }
    });
  }
}
class pd extends TransformStream {
  constructor({ password: t, rawPassword: n, encryptionStrength: o }) {
    let r;
    super({
      start() {
        Object.assign(this, {
          ready: new Promise((i) => this.resolveReady = i),
          password: Fs(t, n),
          strength: o - 1,
          pending: new Uint8Array()
        });
      },
      async transform(i, s) {
        const A = this, {
          password: a,
          strength: c,
          resolveReady: g,
          ready: u
        } = A;
        let l = new Uint8Array();
        a ? (l = await hd(A, c, a), g()) : await u;
        const d = new Uint8Array(l.length + i.length - i.length % We);
        d.set(l, 0), s.enqueue(Os(A, i, d, l.length, 0));
      },
      async flush(i) {
        const {
          ctr: s,
          hmac: A,
          pending: a,
          ready: c
        } = this;
        if (A && s) {
          await c;
          let g = new Uint8Array();
          if (a.length) {
            const u = s.update(_t(de, a));
            A.update(u), g = vt(de, u);
          }
          r.signature = vt(de, A.digest()).slice(0, ve), i.enqueue(oo(g, r.signature));
        }
      }
    }), r = this;
  }
}
function Os(e, t, n, o, r, i) {
  const {
    ctr: s,
    hmac: A,
    pending: a
  } = e, c = t.length - r;
  a.length && (t = oo(a, t), n = Id(n, c - c % We));
  let g;
  for (g = 0; g <= c - We; g += We) {
    const u = _t(de, se(t, g, g + We));
    i && A.update(u);
    const l = s.update(u);
    i || A.update(l), n.set(vt(de, l), g + o);
  }
  return e.pending = se(t, g), n;
}
async function md(e, t, n, o) {
  const r = await Ys(e, t, n, se(o, 0, yt[t])), i = se(o, yt[t]);
  if (r[0] != i[0] || r[1] != i[1])
    throw new Error(Ds);
}
async function hd(e, t, n) {
  const o = Rs(new Uint8Array(yt[t])), r = await Ys(e, t, n, o);
  return oo(o, r);
}
async function Ys(e, t, n, o) {
  e.password = null;
  const r = await Ed(sd, n, ad, !1, cd), i = await Bd(Object.assign({ salt: o }, Fn), r, 8 * (ft[t] * 2 + 2)), s = new Uint8Array(i), A = _t(de, se(s, 0, ft[t])), a = _t(de, se(s, ft[t], ft[t] * 2)), c = se(s, ft[t] * 2);
  return Object.assign(e, {
    keys: {
      key: A,
      authentication: a,
      passwordVerification: c
    },
    ctr: new ld(new ud(A), Array.from(gd)),
    hmac: new dd(a)
  }), c;
}
async function Ed(e, t, n, o, r) {
  if (Zo)
    try {
      return await Dt.importKey(e, t, n, o, r);
    } catch {
      return Zo = !1, Ne.importKey(t);
    }
  else
    return Ne.importKey(t);
}
async function Bd(e, t, n) {
  if (Wo)
    try {
      return await Dt.deriveBits(e, t, n);
    } catch {
      return Wo = !1, Ne.pbkdf2(t, e.salt, Fn.iterations, n);
    }
  else
    return Ne.pbkdf2(t, e.salt, Fn.iterations, n);
}
function Fs(e, t) {
  return t === S ? nd(e) : t;
}
function oo(e, t) {
  let n = e;
  return e.length + t.length && (n = new Uint8Array(e.length + t.length), n.set(e, 0), n.set(t, e.length)), n;
}
function Id(e, t) {
  if (t && t > e.length) {
    const n = e;
    e = new Uint8Array(t), e.set(n, 0);
  }
  return e;
}
function se(e, t, n) {
  return e.subarray(t, n);
}
function vt(e, t) {
  return e.fromBits(t);
}
function _t(e, t) {
  return e.toBits(t);
}
const mt = 12;
class wd extends TransformStream {
  constructor({ password: t, passwordVerification: n, checkPasswordOnly: o }) {
    super({
      start() {
        Object.assign(this, {
          password: t,
          passwordVerification: n
        }), Ms(this, t);
      },
      transform(r, i) {
        const s = this;
        if (s.password) {
          const A = Jo(s, r.subarray(0, mt));
          if (s.password = null, A.at(-1) != s.passwordVerification)
            throw new Error(Ds);
          r = r.subarray(mt);
        }
        o ? i.error(new Error(no)) : i.enqueue(Jo(s, r));
      }
    });
  }
}
class Cd extends TransformStream {
  constructor({ password: t, passwordVerification: n }) {
    super({
      start() {
        Object.assign(this, {
          password: t,
          passwordVerification: n
        }), Ms(this, t);
      },
      transform(o, r) {
        const i = this;
        let s, A;
        if (i.password) {
          i.password = null;
          const a = Rs(new Uint8Array(mt));
          a[mt - 1] = i.passwordVerification, s = new Uint8Array(o.length + a.length), s.set(qo(i, a), 0), A = mt;
        } else
          s = new Uint8Array(o.length), A = 0;
        s.set(qo(i, o), A), r.enqueue(s);
      }
    });
  }
}
function Jo(e, t) {
  const n = new Uint8Array(t.length);
  for (let o = 0; o < t.length; o++)
    n[o] = Ns(e) ^ t[o], ro(e, n[o]);
  return n;
}
function qo(e, t) {
  const n = new Uint8Array(t.length);
  for (let o = 0; o < t.length; o++)
    n[o] = Ns(e) ^ t[o], ro(e, t[o]);
  return n;
}
function Ms(e, t) {
  const n = [305419896, 591751049, 878082192];
  Object.assign(e, {
    keys: n,
    crcKey0: new Jt(n[0]),
    crcKey2: new Jt(n[2])
  });
  for (let o = 0; o < t.length; o++)
    ro(e, t.charCodeAt(o));
}
function ro(e, t) {
  let [n, o, r] = e.keys;
  e.crcKey0.append([t]), n = ~e.crcKey0.get(), o = Vo(Math.imul(Vo(o + zs(n)), 134775813) + 1), e.crcKey2.append([o >>> 24]), r = ~e.crcKey2.get(), e.keys = [n, o, r];
}
function Ns(e) {
  const t = e.keys[2] | 2;
  return zs(Math.imul(t, t ^ 1) >>> 8);
}
function zs(e) {
  return e & 255;
}
function Vo(e) {
  return e & 4294967295;
}
const Gs = "Invalid uncompressed size", yd = "deflate-raw", vd = "deflate64-raw";
class _d extends TransformStream {
  constructor(t, { chunkSize: n, CompressionStreamZlib: o, CompressionStream: r }) {
    super({});
    const { compressed: i, encrypted: s, useCompressionStream: A, zipCrypto: a, signed: c, level: g } = t, u = this;
    let l, d, f = super.readable;
    (!s || a) && c && (l = new _s(), f = fe(f, l)), i && (f = Ls(f, A, { level: g, chunkSize: n }, r, o, r)), s && (a ? f = fe(f, new Cd(t)) : (d = new pd(t), f = fe(f, d))), Us(u, f, () => {
      let E;
      s && !a && (E = d.signature), (!s || a) && c && (E = new DataView(l.value.buffer).getUint32(0)), u.signature = E;
    });
  }
}
class Qd extends TransformStream {
  constructor(t, { chunkSize: n, DecompressionStreamZlib: o, DecompressionStream: r }) {
    super({});
    const { zipCrypto: i, encrypted: s, signed: A, signature: a, compressed: c, useCompressionStream: g, deflate64: u } = t;
    let l, d, f = super.readable;
    s && (i ? f = fe(f, new wd(t)) : (d = new fd(t), f = fe(f, d))), c && (f = Ls(f, g, { chunkSize: n, deflate64: u }, r, o, r)), (!s || i) && A && (l = new _s(), f = fe(f, l)), Us(this, f, () => {
      if ((!s || i) && A) {
        const E = new DataView(l.value.buffer);
        if (a != E.getUint32(0, !1))
          throw new Error(Ss);
      }
    });
  }
}
function Us(e, t, n) {
  t = fe(t, new TransformStream({ flush: n })), Object.defineProperty(e, "readable", {
    get() {
      return t;
    }
  });
}
function Ls(e, t, n, o, r, i) {
  const s = t && o ? o : r || i, A = n.deflate64 ? vd : yd;
  try {
    e = fe(e, new s(A, n));
  } catch (a) {
    if (t)
      if (r)
        e = fe(e, new r(A, n));
      else if (i)
        e = fe(e, new i(A, n));
      else
        throw a;
    else
      throw a;
  }
  return e;
}
function fe(e, t) {
  return e.pipeThrough(t);
}
const bd = "message", xd = "start", Dd = "pull", $o = "data", Sd = "ack", Xo = "close", Rd = "deflate", Ps = "inflate";
class kd extends TransformStream {
  constructor(t, n) {
    super({});
    const o = this, { codecType: r } = t;
    let i;
    r.startsWith(Rd) ? i = _d : r.startsWith(Ps) && (i = Qd), o.outputSize = 0;
    let s = 0;
    const A = new i(t, n), a = super.readable, c = new TransformStream({
      transform(u, l) {
        u && u.length && (s += u.length, l.enqueue(u));
      },
      flush() {
        Object.assign(o, {
          inputSize: s
        });
      }
    }), g = new TransformStream({
      transform(u, l) {
        if (u && u.length && (l.enqueue(u), o.outputSize += u.length, t.outputSize !== S && o.outputSize > t.outputSize))
          throw new Error(Gs);
      },
      flush() {
        const { signature: u } = A;
        Object.assign(o, {
          signature: u,
          inputSize: s
        });
      }
    });
    Object.defineProperty(o, "readable", {
      get() {
        return a.pipeThrough(c).pipeThrough(A).pipeThrough(g);
      }
    });
  }
}
class Td extends TransformStream {
  constructor(t) {
    let n;
    super({
      transform: o,
      flush(r) {
        n && n.length && r.enqueue(n);
      }
    });
    function o(r, i) {
      if (n) {
        const s = new Uint8Array(n.length + r.length);
        s.set(n), s.set(r, n.length), r = s, n = null;
      }
      r.length > t ? (i.enqueue(r.slice(0, t)), o(r.slice(t), i)) : n = r;
    }
  }
}
const er = { type: "module" };
let zt, En, tr, Mn = !0;
try {
  Mn = typeof structuredClone == ke && structuredClone(new DOMException("", "AbortError")).code !== S;
} catch {
}
let Hs = () => {
};
function Od({ initModule: e }) {
  Hs = e;
}
class Bn {
  constructor(t, { readable: n, writable: o }, { options: r, config: i, streamOptions: s, useWebWorkers: A, transferStreams: a, workerURI: c }, g) {
    const { signal: u } = s;
    return Object.assign(t, {
      busy: !0,
      readable: n.pipeThrough(new Td(i.chunkSize)).pipeThrough(new Yd(s), { signal: u }),
      writable: o,
      options: Object.assign({}, r),
      workerURI: c,
      transferStreams: a,
      terminate() {
        return new Promise((l) => {
          const { worker: d, busy: f } = t;
          d ? (f ? t.resolveTerminated = l : (d.terminate(), l()), t.interface = null) : l();
        });
      },
      onTaskFinished() {
        const { resolveTerminated: l } = t;
        l && (t.resolveTerminated = null, t.terminated = !0, t.worker.terminate(), l()), t.busy = !1, g(t);
      }
    }), zt === S && (zt = typeof Worker != xe), (A && zt ? Fd : Ks)(t, i);
  }
}
class Yd extends TransformStream {
  constructor({ onstart: t, onprogress: n, size: o, onend: r }) {
    let i = 0;
    super({
      async start() {
        t && await In(t, o);
      },
      async transform(s, A) {
        i += s.length, n && await In(n, i, o), A.enqueue(s);
      },
      async flush() {
        r && await In(r, i);
      }
    });
  }
}
async function In(e, ...t) {
  try {
    await e(...t);
  } catch {
  }
}
function Ks(e, t) {
  return {
    run: () => Md(e, t)
  };
}
function Fd(e, t) {
  const { baseURI: n, chunkSize: o } = t;
  let { wasmURI: r } = t;
  if (!e.interface) {
    typeof r == ke && (r = r());
    let i;
    try {
      i = Gt(e.workerURI, n, e);
    } catch {
      return zt = !1, Ks(e, t);
    }
    Object.assign(e, {
      worker: i,
      interface: {
        run: () => Nd(e, { chunkSize: o, wasmURI: r, baseURI: n })
      }
    });
  }
  return e.interface;
}
async function Md({ options: e, readable: t, writable: n, onTaskFinished: o }, r) {
  let i;
  try {
    if (!e.useCompressionStream)
      try {
        await Hs(r);
      } catch {
        e.useCompressionStream = !0;
      }
    i = new kd(e, r), await t.pipeThrough(i).pipeTo(n, { preventClose: !0, preventAbort: !0 });
    const {
      signature: s,
      inputSize: A,
      outputSize: a
    } = i;
    return {
      signature: s,
      inputSize: A,
      outputSize: a
    };
  } catch (s) {
    throw i && (s.outputSize = i.outputSize), s;
  } finally {
    o();
  }
}
async function Nd(e, t) {
  let n, o;
  const r = new Promise((u, l) => {
    n = u, o = l;
  });
  Object.assign(e, {
    reader: null,
    writer: null,
    resolveResult: n,
    rejectResult: o,
    result: r
  });
  const { readable: i, options: s } = e, { writable: A, closed: a } = zd(e.writable), c = Ut({
    type: xd,
    options: s,
    config: t,
    readable: i,
    writable: A
  }, e);
  c || Object.assign(e, {
    reader: i.getReader(),
    writer: A.getWriter()
  });
  const g = await r;
  return c || await A.getWriter().close(), await a, g;
}
function zd(e) {
  const { writable: t, readable: n } = new TransformStream(), o = n.pipeTo(e, { preventClose: !0 });
  return { writable: t, closed: o };
}
function Gt(e, t, n, o, r = !0) {
  let i, s, A;
  if (En === S) {
    const a = typeof e == ke;
    a ? s = e(r) : s = e;
    const c = s.startsWith("data:"), g = s.startsWith("blob:");
    if (c || g) {
      o === S && (o = !1), o && (A = er);
      try {
        i = new Worker(s, A);
      } catch (u) {
        if (g)
          try {
            URL.revokeObjectURL(s);
          } catch {
          }
        if (a && g)
          return Gt(e, t, n, o, !1);
        if (o)
          throw u;
        return Gt(e, t, n, !0, !1);
      }
    } else {
      o === S && (o = !0), o && (A = er);
      try {
        s = new URL(s, t);
      } catch {
      }
      try {
        i = new Worker(s, A);
      } catch (u) {
        if (o)
          throw u;
        return Gt(e, t, n, !1, r);
      }
    }
    En = s, tr = A;
  } else
    i = new Worker(En, tr);
  return i.addEventListener(bd, (a) => Gd(a, n)), i;
}
function Ut(e, { worker: t, writer: n, onTaskFinished: o, transferStreams: r }) {
  try {
    const { value: i, readable: s, writable: A } = e, a = [];
    if (i && (e.value = i, a.push(e.value.buffer)), r && Mn ? (s && a.push(s), A && a.push(A)) : e.readable = e.writable = null, a.length)
      try {
        return t.postMessage(e, a), !0;
      } catch {
        Mn = !1, e.readable = e.writable = null, t.postMessage(e);
      }
    else
      t.postMessage(e);
  } catch (i) {
    throw n && n.releaseLock(), o(), i;
  }
}
async function Gd({ data: e }, t) {
  const { type: n, value: o, messageId: r, result: i, error: s } = e, { reader: A, writer: a, resolveResult: c, rejectResult: g, onTaskFinished: u } = t;
  try {
    if (s) {
      const { message: d, stack: f, code: E, name: m, outputSize: C } = s, y = new Error(d);
      Object.assign(y, { stack: f, code: E, name: m, outputSize: C }), l(y);
    } else {
      if (n == Dd) {
        const { value: d, done: f } = await A.read();
        Ut({ type: $o, value: d, done: f, messageId: r }, t);
      }
      n == $o && (await a.ready, await a.write(new Uint8Array(o)), Ut({ type: Sd, messageId: r }, t)), n == Xo && l(null, i);
    }
  } catch (d) {
    Ut({ type: Xo, messageId: r }, t), l(d);
  }
  function l(d, f) {
    d ? g(d) : c(f), a && a.releaseLock(), u();
  }
}
let Ye = [];
const wn = [];
let nr = 0;
async function Ud(e, t) {
  const { options: n, config: o } = t, { transferStreams: r, useWebWorkers: i, useCompressionStream: s, compressed: A, signed: a, encrypted: c } = n, { workerURI: g, maxWorkers: u } = o;
  t.transferStreams = r || r === S;
  const l = !A && !a && !c && !t.transferStreams;
  return t.useWebWorkers = !l && (i || i === S && o.useWebWorkers), t.workerURI = t.useWebWorkers && g ? g : S, n.useCompressionStream = s || s === S && o.useCompressionStream, (await d()).run();
  async function d() {
    const E = Ye.find((m) => !m.busy);
    if (E)
      return or(E), new Bn(E, e, t, f);
    if (Ye.length < u) {
      const m = { indexWorker: nr };
      return nr++, Ye.push(m), new Bn(m, e, t, f);
    } else
      return new Promise((m) => wn.push({ resolve: m, stream: e, workerOptions: t }));
  }
  function f(E) {
    if (wn.length) {
      const [{ resolve: m, stream: C, workerOptions: y }] = wn.splice(0, 1);
      m(new Bn(E, C, y, f));
    } else E.worker ? (or(E), Ld(E, t)) : Ye = Ye.filter((m) => m != E);
  }
}
function Ld(e, t) {
  const { config: n } = t, { terminateWorkerTimeout: o } = n;
  Number.isFinite(o) && o >= 0 && (e.terminated ? e.terminated = !1 : e.terminateTimeout = setTimeout(async () => {
    Ye = Ye.filter((r) => r != e);
    try {
      await e.terminate();
    } catch {
    }
  }, o));
}
function or(e) {
  const { terminateTimeout: t } = e;
  t && (clearTimeout(t), e.terminateTimeout = null);
}
const Pd = "Writer iterator completed too soon", Hd = "Writer not initialized", Kd = "Content-Type", jd = 64 * 1024, Zd = 256 * 1024, so = "writable";
class an {
  constructor() {
    this.size = 0;
  }
  init() {
    this.initialized = !0;
  }
}
class io extends an {
  get readable() {
    const t = this, { chunkSize: n = jd } = t, o = new ReadableStream({
      start() {
        this.chunkOffset = 0;
      },
      async pull(r) {
        const { offset: i = 0, size: s, diskNumberStart: A } = o, { chunkOffset: a } = this, c = s === S ? n : Math.min(n, s - a), g = await H(t, i + a, c, A);
        r.enqueue(g), a + n > s || s === S && !g.length && c ? r.close() : this.chunkOffset += n;
      }
    });
    return o;
  }
}
class Wd extends an {
  constructor() {
    super();
    const t = this, n = new WritableStream({
      write(o) {
        if (!t.initialized)
          throw new Error(Hd);
        return t.writeUint8Array(o);
      }
    });
    Object.defineProperty(t, so, {
      get() {
        return n;
      }
    });
  }
  writeUint8Array() {
  }
}
class Jd extends io {
  constructor(t) {
    super(), Object.assign(this, {
      blob: t,
      size: t.size
    });
  }
  async readUint8Array(t, n) {
    const o = this, r = t + n;
    let s = await (t || r < o.size ? o.blob.slice(t, r) : o.blob).arrayBuffer();
    return s.byteLength > n && (s = s.slice(t, r)), new Uint8Array(s);
  }
}
class qd extends an {
  constructor(t) {
    super();
    const n = this, o = new TransformStream(), r = [];
    t && r.push([Kd, t]), Object.defineProperty(n, so, {
      get() {
        return o.writable;
      }
    }), n.blob = new Response(o.readable, { headers: r }).blob();
  }
  getData() {
    return this.blob;
  }
}
class Vd extends qd {
  constructor(t) {
    super(t), Object.assign(this, {
      encoding: t,
      utf8: !t || t.toLowerCase() == "utf-8"
    });
  }
  async getData() {
    const {
      encoding: t,
      utf8: n
    } = this, o = await super.getData();
    if (o.text && n)
      return o.text();
    {
      const r = new FileReader();
      return new Promise((i, s) => {
        Object.assign(r, {
          onload: ({ target: A }) => i(A.result),
          onerror: () => s(r.error)
        }), r.readAsText(o, t);
      });
    }
  }
}
class $d extends Wd {
  constructor(t) {
    super(), this.defaultBufferSize = t || Zd;
  }
  init(t = 0) {
    Object.assign(this, {
      offset: 0,
      array: new Uint8Array(t > 0 ? t : this.defaultBufferSize)
    }), super.init();
  }
  writeUint8Array(t) {
    const n = this, o = n.offset + t.length;
    if (o > n.array.length) {
      let r = n.array.length ? n.array.length * 2 : n.defaultBufferSize;
      for (; r < o; )
        r *= 2;
      const i = n.array;
      n.array = new Uint8Array(r), n.array.set(i);
    }
    n.array.set(t, n.offset), n.offset += t.length;
  }
  getData() {
    return this.offset === this.array.length ? this.array : this.array.slice(0, this.offset);
  }
}
class Xd extends io {
  constructor(t) {
    super(), this.readers = t;
  }
  async init() {
    const t = this, { readers: n } = t;
    t.lastDiskNumber = 0, t.lastDiskOffset = 0, await Promise.all(n.map(async (o, r) => {
      await o.init(), r != n.length - 1 && (t.lastDiskOffset += o.size), t.size += o.size;
    })), super.init();
  }
  async readUint8Array(t, n, o = 0) {
    const r = this, { readers: i } = this;
    let s, A = o;
    A == -1 && (A = i.length - 1);
    let a = t;
    for (; i[A] && a >= i[A].size; )
      a -= i[A].size, A++;
    const c = i[A];
    if (c) {
      const g = c.size;
      if (a + n <= g)
        s = await H(c, a, n);
      else {
        const u = g - a;
        s = new Uint8Array(n);
        const l = await H(c, a, u);
        s.set(l, 0);
        const d = await r.readUint8Array(t + u, n - u, o);
        s.set(d, u), l.length + d.length < n && (s = s.subarray(0, l.length + d.length));
      }
    } else
      s = new Uint8Array();
    return r.lastDiskNumber = Math.max(A, r.lastDiskNumber), s;
  }
}
class rr extends an {
  constructor(t, n = 4294967295) {
    super();
    const o = this;
    Object.assign(o, {
      diskNumber: 0,
      diskOffset: 0,
      size: 0,
      maxSize: n,
      availableSize: n
    });
    let r, i, s;
    const A = new WritableStream({
      async write(g) {
        const { availableSize: u } = o;
        if (s)
          g.length >= u ? (await a(g.subarray(0, u)), await c(), o.diskOffset += r.size, o.diskNumber++, s = null, await this.write(g.subarray(u))) : await a(g);
        else {
          const { value: l, done: d } = await t.next();
          if (d && !l)
            throw new Error(Pd);
          r = l, r.size = 0, r.maxSize && (o.maxSize = r.maxSize), o.availableSize = o.maxSize, await Vt(r), i = l.writable, s = i.getWriter(), await this.write(g);
        }
      },
      async close() {
        await s.ready, await c();
      }
    });
    Object.defineProperty(o, so, {
      get() {
        return A;
      }
    });
    async function a(g) {
      const u = g.length;
      u && (await s.ready, await s.write(g), r.size += u, o.size += u, o.availableSize -= u);
    }
    async function c() {
      await s.close();
    }
  }
}
class ef {
  constructor(t) {
    return Array.isArray(t) && (t = new Xd(t)), t instanceof ReadableStream && (t = {
      readable: t
    }), t;
  }
}
class tf {
  constructor(t) {
    return t.writable === S && typeof t.next == ke && (t = new rr(t)), t instanceof WritableStream && (t = {
      writable: t
    }), t.size === S && (t.size = 0), t instanceof rr || Object.assign(t, {
      diskNumber: 0,
      diskOffset: 0,
      availableSize: jo,
      maxSize: jo
    }), t;
  }
}
async function Vt(e, t) {
  if (e.init && !e.initialized)
    await e.init(t);
  else
    return Promise.resolve();
}
function H(e, t, n, o) {
  return e.readUint8Array(t, n, o);
}
const js = "\0☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼ !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~⌂ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ".split(""), nf = js.length == 256;
function of(e) {
  if (nf) {
    let t = "";
    for (let n = 0; n < e.length; n++)
      t += js[e[n]];
    return t;
  } else
    return new TextDecoder().decode(e);
}
function Lt(e, t) {
  return t && t.trim().toLowerCase() == "cp437" ? of(e) : new TextDecoder(t).decode(e);
}
const Zs = "filename", Ws = "rawFilename", Js = "comment", qs = "rawComment", Vs = "uncompressedSize", $s = "compressedSize", Xs = "offset", ei = "diskNumberStart", Nn = "lastModDate", zn = "rawLastModDate", ti = "lastAccessDate", rf = "rawLastAccessDate", ni = "creationDate", oi = "rawCreationDate", sf = "internalFileAttributes", Af = "externalFileAttributes", af = "msdosAttributesRaw", cf = "msdosAttributes", gf = "msDosCompatible", uf = "zip64", lf = "encrypted", df = "version", ff = "versionMadeBy", pf = "zipCrypto", mf = "directory", hf = "executable", Ef = "compressionMethod", Bf = "signature", If = "extraField", wf = "extraFieldInfoZip", Cf = "extraFieldUnix", yf = "uid", vf = "gid", _f = "unixMode", Qf = "setuid", bf = "setgid", xf = "sticky", Df = "bitFlag", Sf = "filenameUTF8", Rf = "commentUTF8", kf = "rawExtraField", Tf = "extraFieldZip64", Of = "extraFieldUnicodePath", Yf = "extraFieldUnicodeComment", Ff = "extraFieldAES", Mf = "extraFieldNTFS", Nf = "extraFieldExtendedTimestamp", zf = [
  Zs,
  Ws,
  Vs,
  $s,
  Nn,
  zn,
  Js,
  qs,
  ti,
  ni,
  oi,
  Xs,
  ei,
  sf,
  Af,
  af,
  cf,
  gf,
  uf,
  lf,
  df,
  ff,
  pf,
  mf,
  hf,
  Ef,
  Bf,
  If,
  Cf,
  wf,
  yf,
  vf,
  _f,
  Qf,
  bf,
  xf,
  Df,
  Sf,
  Rf,
  kf,
  Tf,
  Of,
  Yf,
  Ff,
  Mf,
  Nf
];
class sr {
  constructor(t) {
    zf.forEach((n) => this[n] = t[n]);
  }
}
const Gf = "filenameEncoding", Uf = "commentEncoding", Lf = "decodeText", Pf = "extractPrependedData", Hf = "extractAppendedData", Kf = "password", jf = "rawPassword", Zf = "passThrough", Wf = "signal", Jf = "checkPasswordOnly", qf = "checkOverlappingEntryOnly", Vf = "checkOverlappingEntry", $f = "checkSignature", Xf = "useWebWorkers", ep = "useCompressionStream", tp = "transferStreams", np = "preventClose", Cn = "File format is not recognized", op = "End of central directory not found", rp = "End of Zip64 central directory locator not found", sp = "Central directory header not found", ip = "Local file header not found", Ap = "Zip64 extra field not found", ap = "File contains encrypted entry", cp = "Encryption method not supported", ir = "Compression method not supported", Ar = "Split zip file", gp = "Overlapping entry found", ar = "utf-8", up = "UTF8", cr = "cp437", lp = [
  [Vs, Fe],
  [$s, Fe],
  [Xs, Fe],
  [ei, le]
], dp = {
  [le]: {
    getValue: O,
    bytes: 4
  },
  [Fe]: {
    getValue: $e,
    bytes: 8
  }
};
class fp {
  constructor(t, n = {}) {
    Object.assign(this, {
      reader: new ef(t),
      options: n,
      config: Xl(),
      readRanges: []
    });
  }
  async *getEntriesGenerator(t = {}) {
    const n = this;
    let { reader: o } = n;
    const { config: r } = n;
    if (await Vt(o), (o.size === S || !o.readUint8Array) && (o = new Jd(await new Response(o.readable).blob()), await Vt(o)), o.size < Pe)
      throw new Error(Cn);
    o.chunkSize = ed(r);
    const i = await wp(o, yl, o.size, Pe, le * 16);
    if (!i) {
      const X = await H(o, 0, 4), b = Y(X);
      throw O(b) == ws ? new Error(Ar) : new Error(op);
    }
    const s = Y(i);
    let A = O(s, 12), a = O(s, 16);
    const c = i.offset, g = L(s, 20), u = c + Pe + g;
    let l = L(s, 4);
    const d = o.lastDiskNumber || 0;
    let f = L(s, 6), E = L(s, 8), m = 0, C = 0;
    if (a == Fe || A == Fe || E == le || f == le) {
      const X = await H(o, i.offset - dn, dn), b = Y(X);
      if (O(b, 0) == vl) {
        a = $e(b, 8);
        let we = await H(o, a, fn, -1), ee = Y(we);
        const ae = i.offset - dn - fn;
        if (O(ee, 0) != Go && a != ae) {
          const pe = a;
          a = ae, a > pe && (m = a - pe), we = await H(o, a, fn, -1), ee = Y(we);
        }
        if (O(ee, 0) != Go)
          throw new Error(rp);
        l == le && (l = O(ee, 16)), f == le && (f = O(ee, 20)), E == le && (E = $e(ee, 32)), A == Fe && (A = $e(ee, 40)), a -= A;
      }
    }
    if (a >= o.size && (m = o.size - a - A - Pe, a = o.size - A - Pe), d != l)
      throw new Error(Ar);
    if (a < 0)
      throw new Error(Cn);
    let y = 0, w = await H(o, a, A, f), v = Y(w);
    if (A) {
      const X = i.offset - A;
      if (O(v, y) != zo && a != X) {
        const b = a;
        a = X, a > b && (m += a - b), w = await H(o, a, A, f), v = Y(w);
      }
    }
    const R = i.offset - a - (o.lastDiskOffset || 0);
    if (A != R && R >= 0 && (A = R, w = await H(o, a, A, f), v = Y(w)), a < 0 || a >= o.size)
      throw new Error(Cn);
    const K = P(n, t, Gf), Ae = P(n, t, Uf);
    for (let X = 0; X < E; X++) {
      const b = new pp(o, r, n.options);
      if (O(v, y) != zo)
        throw new Error(sp);
      ri(b, v, y + 6);
      const we = !!b.bitFlag.languageEncodingFlag, ee = y + 46, ae = ee + b.filenameLength, pe = ae + b.extraFieldLength, Ge = L(v, y + 4), at = Ge >> 8 == 0, cn = Ge >> 8 == 3, Ce = w.subarray(ee, ae), ct = L(v, y + 32), Ue = pe + ct, gt = w.subarray(pe, Ue), St = we, Rt = we, ut = O(v, y + 38), me = ut & Yn, kt = {
        readOnly: !!(me & zl),
        hidden: !!(me & Gl),
        system: !!(me & Ul),
        directory: !!(me & Nl),
        archive: !!(me & Ll)
      }, he = O(v, y + 42) + m, ce = P(n, t, Lf) || Lt, ao = St ? ar : K || cr, co = Rt ? ar : Ae || cr;
      let Tt = ce(Ce, ao);
      Tt === S && (Tt = Lt(Ce, ao));
      let gn = ce(gt, co);
      gn === S && (gn = Lt(gt, co)), Object.assign(b, {
        versionMadeBy: Ge,
        msDosCompatible: at,
        compressedSize: 0,
        uncompressedSize: 0,
        commentLength: ct,
        offset: he,
        diskNumberStart: L(v, y + 34),
        internalFileAttributes: L(v, y + 36),
        externalFileAttributes: ut,
        msdosAttributesRaw: me,
        msdosAttributes: kt,
        rawFilename: Ce,
        filenameUTF8: St,
        commentUTF8: Rt,
        rawExtraField: w.subarray(ae, pe),
        rawComment: gt,
        filename: Tt,
        comment: gn
      }), C = Math.max(he, C), si(b, b, v, y + 6);
      const lt = b.externalFileAttributes >> 16 & le;
      b.unixMode === S && (lt & (Pl | mn | pn)) != 0 && (b.unixMode = lt);
      const pi = !!(b.unixMode & Hl), mi = !!(b.unixMode & Kl), hi = !!(b.unixMode & jl), Ei = b.unixMode !== S ? (b.unixMode & mn) != 0 : cn && (lt & mn) != 0, Bi = b.unixMode !== S && (b.unixMode & Ko) == pn, Ii = (lt & Ko) == pn;
      Object.assign(b, {
        setuid: pi,
        setgid: mi,
        sticky: hi,
        unixExternalUpper: lt,
        internalFileAttribute: b.internalFileAttributes,
        externalFileAttribute: b.externalFileAttributes,
        executable: Ei,
        directory: Bi || Ii || at && kt.directory || Tt.endsWith(Zl) && !b.uncompressedSize,
        zipCrypto: b.encrypted && !b.extraFieldAES
      });
      const dt = new sr(b);
      dt.getData = (un, Ot) => b.getData(un, dt, n.readRanges, Ot), dt.arrayBuffer = async (un) => {
        const Ot = new TransformStream(), [wi] = await Promise.all([
          new Response(Ot.readable).arrayBuffer(),
          b.getData(Ot, dt, n.readRanges, un)
        ]);
        return wi;
      }, y = Ue;
      const { onprogress: go } = t;
      if (go)
        try {
          await go(X + 1, E, new sr(b));
        } catch {
        }
      yield dt;
    }
    const $ = P(n, t, Pf), At = P(n, t, Hf);
    return $ && (n.prependedData = C > 0 ? await H(o, 0, C) : new Uint8Array()), n.comment = g ? await H(o, c + Pe, g) : new Uint8Array(), At && (n.appendedData = u < o.size ? await H(o, u, o.size - u) : new Uint8Array()), !0;
  }
  async getEntries(t = {}) {
    const n = [];
    for await (const o of this.getEntriesGenerator(t))
      n.push(o);
    return n;
  }
  async close() {
  }
}
class pp {
  constructor(t, n, o) {
    Object.assign(this, {
      reader: t,
      config: n,
      options: o
    });
  }
  async getData(t, n, o, r = {}) {
    const i = this, {
      reader: s,
      offset: A,
      diskNumberStart: a,
      extraFieldAES: c,
      extraFieldZip64: g,
      compressionMethod: u,
      config: l,
      bitFlag: d,
      signature: f,
      rawLastModDate: E,
      uncompressedSize: m,
      compressedSize: C
    } = i, {
      dataDescriptor: y
    } = d, w = n.localDirectory = {}, v = await H(s, A, hn, a), R = Y(v);
    let K = P(i, r, Kf), Ae = P(i, r, jf);
    const $ = P(i, r, Zf);
    if (K = K && K.length && K, Ae = Ae && Ae.length && Ae, c && c.originalCompressionMethod != Il)
      throw new Error(ir);
    if (u != Bl && u != El && u != No && !$)
      throw new Error(ir);
    if (O(R, 0) != wl)
      throw new Error(ip);
    ri(w, R, 4);
    const {
      extraFieldLength: At,
      filenameLength: X,
      lastAccessDate: b,
      creationDate: we
    } = w;
    w.rawExtraField = At ? await H(s, A + hn + X, At, a) : new Uint8Array(), si(i, w, R, 4, !0), Object.assign(n, { lastAccessDate: b, creationDate: we });
    const ee = i.encrypted && w.encrypted && !$, ae = ee && !c;
    if ($ || (n.zipCrypto = ae), ee) {
      if (!ae && c.strength === S)
        throw new Error(cp);
      if (!K && !Ae)
        throw new Error(ap);
    }
    const pe = A + hn + X + At, Ge = C, at = s.readable;
    Object.assign(at, {
      diskNumberStart: a,
      offset: pe,
      size: Ge
    });
    const cn = P(i, r, Wf), Ce = P(i, r, Jf);
    let ct = P(i, r, Vf);
    const Ue = P(i, r, qf);
    Ue && (ct = !0);
    const { onstart: gt, onprogress: St, onend: Rt } = r, ut = u == No;
    let me = P(i, r, ep);
    ut && (me = !1);
    const kt = {
      options: {
        codecType: Ps,
        password: K,
        rawPassword: Ae,
        zipCrypto: ae,
        encryptionStrength: c && c.strength,
        signed: P(i, r, $f) && !$,
        passwordVerification: ae && (y ? E >>> 8 & Yn : f >>> 24 & Yn),
        outputSize: $ ? C : m,
        signature: f,
        compressed: u != 0 && !$,
        encrypted: i.encrypted && !$,
        useWebWorkers: P(i, r, Xf),
        useCompressionStream: me,
        transferStreams: P(i, r, tp),
        deflate64: ut,
        checkPasswordOnly: Ce
      },
      config: l,
      streamOptions: { signal: cn, size: Ge, onstart: gt, onprogress: St, onend: Rt }
    };
    ct && await Ip({
      reader: s,
      fileEntry: n,
      offset: A,
      diskNumberStart: a,
      signature: f,
      compressedSize: C,
      uncompressedSize: m,
      dataOffset: pe,
      dataDescriptor: y || w.bitFlag.dataDescriptor,
      extraFieldZip64: g || w.extraFieldZip64,
      readRanges: o
    });
    let he;
    try {
      if (!Ue) {
        Ce && (t = new WritableStream()), t = new tf(t), await Vt(t, $ ? C : m), { writable: he } = t;
        const { outputSize: ce } = await Ud({ readable: at, writable: he }, kt);
        if (t.size += ce, ce != ($ ? C : m))
          throw new Error(Gs);
      }
    } catch (ce) {
      if (ce.outputSize !== S && (t.size += ce.outputSize), !Ce || ce.message != no)
        throw ce;
    } finally {
      !P(i, r, np) && he && !he.locked && await he.getWriter().close();
    }
    return Ce || Ue ? S : t.getData ? t.getData() : he;
  }
}
function ri(e, t, n) {
  const o = e.rawBitFlag = L(t, n + 2), r = (o & Lo) == Lo, i = O(t, n + 6);
  Object.assign(e, {
    encrypted: r,
    version: L(t, n),
    bitFlag: {
      level: (o & Ml) >> 1,
      dataDescriptor: (o & Po) == Po,
      languageEncodingFlag: (o & Ho) == Ho
    },
    rawLastModDate: i,
    lastModDate: Cp(i),
    filenameLength: L(t, n + 22),
    extraFieldLength: L(t, n + 24)
  });
}
function si(e, t, n, o, r) {
  const { rawExtraField: i } = t, s = t.extraField = /* @__PURE__ */ new Map(), A = Y(new Uint8Array(i));
  let a = 0;
  try {
    for (; a < i.length; ) {
      const y = L(A, a), w = L(A, a + 2);
      s.set(y, {
        type: y,
        data: i.slice(a + 4, a + 4 + w)
      }), a += 4 + w;
    }
  } catch {
  }
  const c = L(n, o + 4);
  Object.assign(t, {
    signature: O(n, o + Wl),
    compressedSize: O(n, o + Jl),
    uncompressedSize: O(n, o + ql)
  });
  const g = s.get(bl);
  g && (mp(g, t), t.extraFieldZip64 = g);
  const u = s.get(kl);
  u && (gr(u, Zs, Ws, t, e), t.extraFieldUnicodePath = u);
  const l = s.get(Tl);
  l && (gr(l, Js, qs, t, e), t.extraFieldUnicodeComment = l);
  const d = s.get(xl);
  d ? (hp(d, t, c), t.extraFieldAES = d) : t.compressionMethod = c;
  const f = s.get(Dl);
  f && (Ep(f, t), t.extraFieldNTFS = f);
  const E = s.get(Fl);
  if (E)
    ur(E, t, !1), t.extraFieldUnix = E;
  else {
    const y = s.get(Yl);
    y && (ur(y, t, !0), t.extraFieldInfoZip = y);
  }
  const m = s.get(Rl);
  m && (Bp(m, t, r), t.extraFieldExtendedTimestamp = m);
  const C = s.get(Ol);
  C && (t.extraFieldUSDZ = C);
}
function mp(e, t) {
  t.zip64 = !0;
  const n = Y(e.data), o = lp.filter(([r, i]) => t[r] == i);
  for (let r = 0, i = 0; r < o.length; r++) {
    const [s, A] = o[r];
    if (t[s] == A) {
      const a = dp[A];
      t[s] = e[s] = a.getValue(n, i), i += a.bytes;
    } else if (e[s])
      throw new Error(Ap);
  }
}
function gr(e, t, n, o, r) {
  const i = Y(e.data), s = new Jt();
  s.append(r[n]);
  const A = Y(new Uint8Array(4));
  A.setUint32(0, s.get(), !0);
  const a = O(i, 1);
  Object.assign(e, {
    version: be(i, 0),
    [t]: Lt(e.data.subarray(5)),
    valid: !r.bitFlag.languageEncodingFlag && a == O(A, 0)
  }), e.valid && (o[t] = e[t], o[t + up] = !0);
}
function hp(e, t, n) {
  const o = Y(e.data), r = be(o, 4);
  Object.assign(e, {
    vendorVersion: be(o, 0),
    vendorId: be(o, 2),
    strength: r,
    originalCompressionMethod: n,
    compressionMethod: L(o, 5)
  }), t.compressionMethod = e.compressionMethod;
}
function Ep(e, t) {
  const n = Y(e.data);
  let o = 4, r;
  try {
    for (; o < e.data.length && !r; ) {
      const i = L(n, o), s = L(n, o + 2);
      i == Sl && (r = e.data.slice(o + 4, o + 4 + s)), o += 4 + s;
    }
  } catch {
  }
  try {
    if (r && r.length == 24) {
      const i = Y(r), s = i.getBigUint64(0, !0), A = i.getBigUint64(8, !0), a = i.getBigUint64(16, !0);
      Object.assign(e, {
        rawLastModDate: s,
        rawLastAccessDate: A,
        rawCreationDate: a
      });
      const c = yn(s), g = yn(A), u = yn(a), l = { lastModDate: c, lastAccessDate: g, creationDate: u };
      Object.assign(e, l), Object.assign(t, l);
    }
  } catch {
  }
}
function ur(e, t, n) {
  try {
    const o = Y(new Uint8Array(e.data));
    let r = 0;
    const i = be(o, r++), s = be(o, r++), A = e.data.subarray(r, r + s);
    r += s;
    const a = lr(A), c = be(o, r++), g = e.data.subarray(r, r + c);
    r += c;
    const u = lr(g);
    let l = S;
    if (!n && r + 2 <= e.data.length) {
      const d = e.data;
      l = new DataView(d.buffer, d.byteOffset + r, 2).getUint16(0, !0);
    }
    Object.assign(e, { version: i, uid: a, gid: u, unixMode: l }), a !== S && (t.uid = a), u !== S && (t.gid = u), l !== S && (t.unixMode = l);
  } catch {
  }
}
function lr(e) {
  const t = new Uint8Array(4);
  return t.set(e, 0), new DataView(t.buffer, t.byteOffset, 4).getUint32(0, !0);
}
function Bp(e, t, n) {
  const o = Y(e.data), r = be(o, 0), i = [], s = [];
  n ? ((r & 1) == 1 && (i.push(Nn), s.push(zn)), (r & 2) == 2 && (i.push(ti), s.push(rf)), (r & 4) == 4 && (i.push(ni), s.push(oi))) : e.data.length >= 5 && (i.push(Nn), s.push(zn));
  let A = 1;
  i.forEach((a, c) => {
    if (e.data.length >= A + 4) {
      const g = O(o, A);
      t[a] = e[a] = new Date(g * 1e3);
      const u = s[c];
      e[u] = g;
    }
    A += 4;
  });
}
async function Ip({
  reader: e,
  fileEntry: t,
  offset: n,
  diskNumberStart: o,
  signature: r,
  compressedSize: i,
  uncompressedSize: s,
  dataOffset: A,
  dataDescriptor: a,
  extraFieldZip64: c,
  readRanges: g
}) {
  let u = 0;
  if (o)
    for (let f = 0; f < o; f++) {
      const E = e.readers[f];
      u += E.size;
    }
  let l = 0;
  if (a && (c ? l = Ql : l = _l), l) {
    const f = await H(e, A + i, l + Uo, o);
    if (O(Y(f), 0) == Cl) {
      const m = O(Y(f), 4);
      let C, y;
      c ? (C = $e(Y(f), 8), y = $e(Y(f), 16)) : (C = O(Y(f), 8), y = O(Y(f), 12)), (t.encrypted && !t.zipCrypto || m == r) && C == i && y == s && (l += Uo);
    }
  }
  const d = {
    start: u + n,
    end: u + A + i + l,
    fileEntry: t
  };
  for (const f of g)
    if (f.fileEntry != t && d.start >= f.start && d.start < f.end) {
      const E = new Error(gp);
      throw E.overlappingEntry = f.fileEntry, E;
    }
  g.push(d);
}
async function wp(e, t, n, o, r) {
  const i = new Uint8Array(4), s = Y(i);
  yp(s, 0, t);
  const A = o + r;
  return await a(o) || await a(Math.min(A, n));
  async function a(c) {
    const g = n - c, u = await H(e, g, c);
    for (let l = u.length - o; l >= 0; l--)
      if (u[l] == i[0] && u[l + 1] == i[1] && u[l + 2] == i[2] && u[l + 3] == i[3])
        return {
          offset: g + l,
          buffer: u.slice(l, l + o).buffer
        };
  }
}
function P(e, t, n) {
  return t[n] === S ? e.options[n] : t[n];
}
function Cp(e) {
  const t = (e & 4294901760) >> 16, n = e & le;
  try {
    return new Date(1980 + ((t & 65024) >> 9), ((t & 480) >> 5) - 1, t & 31, (n & 63488) >> 11, (n & 2016) >> 5, (n & 31) * 2, 0);
  } catch {
  }
}
function yn(e) {
  return new Date(Number(e / BigInt(1e4) - BigInt(116444736e5)));
}
function be(e, t) {
  return e.getUint8(t);
}
function L(e, t) {
  return e.getUint16(t, !0);
}
function O(e, t) {
  return e.getUint32(t, !0);
}
function $e(e, t) {
  return Number(e.getBigUint64(t, !0));
}
function yp(e, t, n) {
  e.setUint32(t, n, !0);
}
function Y(e) {
  return new DataView(e.buffer);
}
try {
  sn({ baseURI: import.meta.url });
} catch {
}
const te = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function vp(e) {
  let t;
  e({ wasmURI: () => (t || (t = "data:application/wasm;base64," + ((n) => {
    n = ((s) => {
      const A = (s = (s + "").replace(/[^A-Za-z0-9+/=]/g, "")).length, a = [];
      for (let c = 0; A > c; c += 4) {
        const g = te.indexOf(s[c]) << 18 | te.indexOf(s[c + 1]) << 12 | (63 & te.indexOf(s[c + 2])) << 6 | 63 & te.indexOf(s[c + 3]);
        a.push(g >> 16 & 255), s[c + 2] !== "=" && a.push(g >> 8 & 255), s[c + 3] !== "=" && a.push(255 & g);
      }
      return new Uint8Array(a);
    })(n);
    let o = new Uint8Array(1024), r = 0;
    for (let s = 0; s < n.length; ) {
      const A = n[s++];
      if (128 & A) {
        const a = 3 + (127 & A), c = n[s++] << 8 | n[s++], g = r - c;
        i(r + a);
        for (let u = 0; a > u; u++) o[r++] = o[g + u];
      } else {
        const a = A;
        i(r + a);
        for (let c = 0; a > c && s < n.length; c++) o[r++] = n[s++];
      }
    }
    return ((s) => {
      let A = "";
      const a = s.length;
      let c = 0;
      for (; a > c + 2; c += 3) {
        const u = s[c] << 16 | s[c + 1] << 8 | s[c + 2];
        A += te[u >> 18 & 63] + te[u >> 12 & 63] + te[u >> 6 & 63] + te[63 & u];
      }
      const g = a - c;
      if (g === 1) {
        const u = s[c] << 16;
        A += te[u >> 18 & 63] + te[u >> 12 & 63] + "==";
      } else if (g === 2) {
        const u = s[c] << 16 | s[c + 1] << 8;
        A += te[u >> 18 & 63] + te[u >> 12 & 63] + te[u >> 6 & 63] + "=";
      }
      return A;
    })(new Uint8Array(o.buffer.slice(0, r)));
    function i(s) {
      if (o.length < s) {
        let A = 2 * o.length;
        for (; s > A; ) A *= 2;
        const a = new Uint8Array(A);
        a.set(o.subarray(0, r)), o = a;
      }
    }
  })("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BAGZgAAEAVmAAAQB2YAABAE5gAAEAbmAAAQBeYAABAH5gAAEAQWAAAQBhYAABAFFgAAEAcWAAAQBJYAABAGlgAAEAWWAAAQB5YAABAEVgAAEAZWAAAQBVYAABAHVgAAEATWAAAQBtYAABAF1gAAEAfWAAAQBDYAABAGNgAAEAU2AAAQBzYAABIARMwIArYAABAFtgAAEAe2AAAQBHYAABAGdgAAEAV2AAAQB3YAABAE9gAAEAb2AAAQBfYAABAH9gAAEAROAAMIFEwEJAJOAAAgBk4AACAFTgAAIAVOAAAgB04AACAHTgAAIATOAAAgBM4AACAGzgAAIAbOAAAgBc4AACAFzgAAIAfOAAAgB84AACAELgAAIgBDagAQCgAAEgAAIAUuAAAgBS4AACAHLgAAIAcuAAAgBK4AACAErgAAIAauAAAgBq4AACAFrgAAIAWuAAAgB64AACAHrgAAIARuAAAgBG4AACAGbgAAIAZuAAAgBW4AACAFbgAAIAduAAAgB24AACAE7gAAIATuAAAgBu4AACAG7gAAIAXuAAAgBe4AACAH7gAAIAfuAAAiBA7YBB4AACAGHgAAIAYeAAAgBR4AACAFHgAAIAceAAAgBx4AACAEngAAIASeAAAgBp4AACAGngAAIAWeAAAgBZ4AACAHngAAIAeeAAAgBF4AACAEXgAAIAZeAAAgBl4AACAFXgAAIAVeAAAgB14AACAHXgAAIATeAAAgBN4AACAG3gAAIAbeAAAgBd4AACAF3gAAIAfeAAAgB94AACAEPgAAIAQ+AAAgBj4AACAGPgAAIAU+AAAgBT4AACAHPgAAIAc+AAAgBL4AACAEvgAAIAa+AAAgBr4AACAFvgAAIAW+AAAgB74AACAHvgAAIAR+AAAgBH4AACAGfgAAIAZ+AAAgBX4AACAFfgAAIAd+AAAgB34AACAE/gAAIAT+AAAgBv4AACAG/gAAIAX+AAAgBf4AACAH/gAAIAf+AAAiBBAoBQIAABAEggAAEAWCAAAQBEIAABAFQgAAEATCAAAQBcIIFVgMHAEiAAAQBKIAABAFogAAEARiAAAQBWIAABAE4gAAEAXiAAAQBBIAABAFEgAAEASSAAAQBZIAABAEUgAAEAVSAAAQBNIAABAF0gAAEAQOAAEIBg4AABAFDgAAEAcOAAAQBI4AABAGjgAAEAWOAAAQB44AABIC+K4AAdIECxgEFgABcAQWCBUoBFIAABAEMgAAEARyAAASAvlaABEQBBYIGBAEaggXqAQWAA9QBBYADuAEFgAOcgE92gAAEARGAAAQBCYAABAEZgAAEgQACARWAAAQBDYAABAEdgAAEgL59gAKkgQZAAQWAAiyBBaYBBYABtAEFgD3fAxsLTYMfuYcABIC+rooABIEHUYkABAEEjAAEAQWKAAQEQbAcC4C9CosAS40AO4UALwEGhAAEgQWIgQAEgQEKgQAEgQGSgQAEgIS2ggAEAQuEAAQBDIQABIAF24FHeQTgHQsjhQBfhQXLAhARgAVtBgcJBgoFC4A6uAQNAg4BgAclBJQeC2mFAJCFAIiFAICFAHiBAGiBAFyBBh8BEIAABAEUgAAEARiAAAQBHIAABAEggAAEASiAAAQBMIAABAE4gAAEAUCAAAQBUIAABIEGvQFwgAAEAYCAAAQBoIAABAHAgAAEAeCAAG8DHwtyjQBvgQBrgQBngQBjgQBfgQBbgQBXgQBTgQBPgQBLgQBHgQBDgQE8AYCvAEGAUc0CC22BAMcBBIAAAgEIgAAEgQEzgQJLARCAAA6DAAyBnqyAqmuEACSBB3OBAE8BCIAACIEAGIUADIEIt4MADAEggQCUgDKEgQBrAYCBCC8BBIMADIA/SAoBABAMAEGRIQv/gCUfgMDAgIKxBQgJCQoKgEk3gAABAQ2AAAEBDoAAAQEPgAABARCEAAEBEYQAAQEShAABAROEAAEBFIwAAQEVjAABARaMAAEBF4wAAQEYnAABARmcAAEBGpwAAQEbmwABARyBffsEBAQFBYHB1QEHgAABAQiEAAGAXSqCAAEBCowAAYAnsooAAYEBMJkAAYEBTJkAAYEBaLkAAYEBpLkAAYIDdYABzoUBvI0BqJ0BkLwBgAIbHLwAAQEdvAABgA9PgH05A9AqAQ==")), t) });
}
let G, Xe, ne, ht;
function _p(e) {
  if (G = e, { malloc: Xe, free: ne, memory: ht } = G, typeof Xe != "function" || typeof ne != "function" || !ht)
    throw G = Xe = ne = ht = null, new Error("Invalid WASM module");
}
function ii(e, t, n = {}) {
  const o = typeof n.level == "number" ? n.level : -1, r = typeof n.outBuffer == "number" ? n.outBuffer : 64 * 1024, i = typeof n.inBufferSize == "number" ? n.inBufferSize : 64 * 1024;
  return new TransformStream({
    start() {
      let s;
      if (this.out = Xe(r), this.in = Xe(i), this.inBufferSize = i, this._scratch = new Uint8Array(r), e ? (this._process = G.deflate_process, this._last_consumed = G.deflate_last_consumed, this._end = G.deflate_end, this.streamHandle = G.deflate_new(), t === "gzip" ? s = G.deflate_init_gzip(this.streamHandle, o) : t === "deflate-raw" ? s = G.deflate_init_raw(this.streamHandle, o) : s = G.deflate_init(this.streamHandle, o)) : t === "deflate64-raw" ? (this._process = G.inflate9_process, this._last_consumed = G.inflate9_last_consumed, this._end = G.inflate9_end, this.streamHandle = G.inflate9_new(), s = G.inflate9_init_raw(this.streamHandle)) : (this._process = G.inflate_process, this._last_consumed = G.inflate_last_consumed, this._end = G.inflate_end, this.streamHandle = G.inflate_new(), t === "deflate-raw" ? s = G.inflate_init_raw(this.streamHandle) : t === "gzip" ? s = G.inflate_init_gzip(this.streamHandle) : s = G.inflate_init(this.streamHandle)), s !== 0)
        throw new Error("init failed:" + s);
    },
    transform(s, A) {
      try {
        const a = s, c = new Uint8Array(ht.buffer), g = this._process, u = this._last_consumed, l = this.out, d = this._scratch;
        let f = 0;
        for (; f < a.length; ) {
          const E = Math.min(a.length - f, 32768);
          (!this.in || this.inBufferSize < E) && (this.in && ne && ne(this.in), this.in = Xe(E), this.inBufferSize = E), c.set(a.subarray(f, f + E), this.in);
          const m = g(this.streamHandle, this.in, E, l, r, 0), C = m & 16777215;
          if (C && (d.set(c.subarray(l, l + C), 0), A.enqueue(d.slice(0, C))), !e) {
            const w = m >> 24 & 255, v = w & 128 ? w - 256 : w;
            if (v < 0)
              throw new Error("process error:" + v);
          }
          const y = u(this.streamHandle);
          if (y === 0)
            break;
          f += y;
        }
      } catch (a) {
        this._end && this.streamHandle && this._end(this.streamHandle), this.in && ne && ne(this.in), this.out && ne && ne(this.out), A.error(a);
      }
    },
    flush(s) {
      try {
        const A = new Uint8Array(ht.buffer), a = this._process, c = this.out, g = this._scratch;
        for (; ; ) {
          const u = a(this.streamHandle, 0, 0, c, r, 4), l = u & 16777215, d = u >> 24 & 255;
          if (!e) {
            const f = d & 128 ? d - 256 : d;
            if (f < 0)
              throw new Error("process error:" + f);
          }
          if (l && (g.set(A.subarray(c, c + l), 0), s.enqueue(g.slice(0, l))), d === 1 || l === 0)
            break;
        }
      } catch (A) {
        s.error(A);
      } finally {
        if (this._end && this.streamHandle) {
          const A = this._end(this.streamHandle);
          A !== 0 && s.error(new Error("end error:" + A));
        }
        this.in && ne && ne(this.in), this.out && ne && ne(this.out);
      }
    }
  });
}
class Qp {
  constructor(t = "deflate", n) {
    return ii(!0, t, n);
  }
}
class bp {
  constructor(t = "deflate", n) {
    return ii(!1, t, n);
  }
}
let dr = !1;
async function xp(e, { baseURI: t }) {
  if (!dr) {
    let n, o;
    try {
      try {
        o = new URL(e, t);
      } catch {
      }
      n = await (await fetch(o)).arrayBuffer();
    } catch (i) {
      if (e.startsWith("data:application/wasm;base64,"))
        n = Dp(e);
      else
        throw i;
    }
    const r = await WebAssembly.instantiate(n);
    _p(r.instance.exports), dr = !0;
  }
}
function Dp(e) {
  const t = e.split(",")[1], n = atob(t), o = n.length, r = new Uint8Array(o);
  for (let i = 0; i < o; ++i)
    r[i] = n.charCodeAt(i);
  return r.buffer;
}
let vn;
vp(sn);
Od({
  initModule: (e) => {
    if (!vn) {
      let { wasmURI: t } = e;
      typeof t == ke && (t = t()), vn = xp(t, e);
    }
    return vn;
  }
});
sn({
  CompressionStreamZlib: Qp,
  DecompressionStreamZlib: bp
});
const _n = {
  application: {
    "andrew-inset": "ez",
    annodex: "anx",
    "atom+xml": "atom",
    "atomcat+xml": "atomcat",
    "atomserv+xml": "atomsrv",
    bbolin: "lin",
    "cu-seeme": "cu",
    "davmount+xml": "davmount",
    dsptype: "tsp",
    ecmascript: [
      "es",
      "ecma"
    ],
    futuresplash: "spl",
    hta: "hta",
    "java-archive": "jar",
    "java-serialized-object": "ser",
    "java-vm": "class",
    m3g: "m3g",
    "mac-binhex40": "hqx",
    mathematica: [
      "nb",
      "ma",
      "mb"
    ],
    msaccess: "mdb",
    msword: [
      "doc",
      "dot",
      "wiz"
    ],
    mxf: "mxf",
    oda: "oda",
    ogg: "ogx",
    pdf: "pdf",
    "pgp-keys": "key",
    "pgp-signature": [
      "asc",
      "sig"
    ],
    "pics-rules": "prf",
    postscript: [
      "ps",
      "ai",
      "eps",
      "epsi",
      "epsf",
      "eps2",
      "eps3"
    ],
    rar: "rar",
    "rdf+xml": "rdf",
    "rss+xml": "rss",
    rtf: "rtf",
    "xhtml+xml": [
      "xhtml",
      "xht"
    ],
    xml: [
      "xml",
      "xsl",
      "xsd",
      "xpdl"
    ],
    "xspf+xml": "xspf",
    zip: "zip",
    "vnd.android.package-archive": "apk",
    "vnd.cinderella": "cdy",
    "vnd.google-earth.kml+xml": "kml",
    "vnd.google-earth.kmz": "kmz",
    "vnd.mozilla.xul+xml": "xul",
    "vnd.ms-excel": [
      "xls",
      "xlb",
      "xlt",
      "xlm",
      "xla",
      "xlc",
      "xlw"
    ],
    "vnd.ms-pki.seccat": "cat",
    "vnd.ms-pki.stl": "stl",
    "vnd.ms-powerpoint": [
      "ppt",
      "pps",
      "pot",
      "ppa",
      "pwz"
    ],
    "vnd.oasis.opendocument.chart": "odc",
    "vnd.oasis.opendocument.database": "odb",
    "vnd.oasis.opendocument.formula": "odf",
    "vnd.oasis.opendocument.graphics": "odg",
    "vnd.oasis.opendocument.graphics-template": "otg",
    "vnd.oasis.opendocument.image": "odi",
    "vnd.oasis.opendocument.presentation": "odp",
    "vnd.oasis.opendocument.presentation-template": "otp",
    "vnd.oasis.opendocument.spreadsheet": "ods",
    "vnd.oasis.opendocument.spreadsheet-template": "ots",
    "vnd.oasis.opendocument.text": "odt",
    "vnd.oasis.opendocument.text-master": [
      "odm",
      "otm"
    ],
    "vnd.oasis.opendocument.text-template": "ott",
    "vnd.oasis.opendocument.text-web": "oth",
    "vnd.openxmlformats-officedocument.spreadsheetml.sheet": "xlsx",
    "vnd.openxmlformats-officedocument.spreadsheetml.template": "xltx",
    "vnd.openxmlformats-officedocument.presentationml.presentation": "pptx",
    "vnd.openxmlformats-officedocument.presentationml.slideshow": "ppsx",
    "vnd.openxmlformats-officedocument.presentationml.template": "potx",
    "vnd.openxmlformats-officedocument.wordprocessingml.document": "docx",
    "vnd.openxmlformats-officedocument.wordprocessingml.template": "dotx",
    "vnd.smaf": "mmf",
    "vnd.stardivision.calc": "sdc",
    "vnd.stardivision.chart": "sds",
    "vnd.stardivision.draw": "sda",
    "vnd.stardivision.impress": "sdd",
    "vnd.stardivision.math": [
      "sdf",
      "smf"
    ],
    "vnd.stardivision.writer": [
      "sdw",
      "vor"
    ],
    "vnd.stardivision.writer-global": "sgl",
    "vnd.sun.xml.calc": "sxc",
    "vnd.sun.xml.calc.template": "stc",
    "vnd.sun.xml.draw": "sxd",
    "vnd.sun.xml.draw.template": "std",
    "vnd.sun.xml.impress": "sxi",
    "vnd.sun.xml.impress.template": "sti",
    "vnd.sun.xml.math": "sxm",
    "vnd.sun.xml.writer": "sxw",
    "vnd.sun.xml.writer.global": "sxg",
    "vnd.sun.xml.writer.template": "stw",
    "vnd.symbian.install": [
      "sis",
      "sisx"
    ],
    "vnd.visio": [
      "vsd",
      "vst",
      "vss",
      "vsw",
      "vsdx",
      "vssx",
      "vstx",
      "vssm",
      "vstm"
    ],
    "vnd.wap.wbxml": "wbxml",
    "vnd.wap.wmlc": "wmlc",
    "vnd.wap.wmlscriptc": "wmlsc",
    "vnd.wordperfect": "wpd",
    "vnd.wordperfect5.1": "wp5",
    "x-123": "wk",
    "x-7z-compressed": "7z",
    "x-abiword": "abw",
    "x-apple-diskimage": "dmg",
    "x-bcpio": "bcpio",
    "x-bittorrent": "torrent",
    "x-cbr": [
      "cbr",
      "cba",
      "cbt",
      "cb7"
    ],
    "x-cbz": "cbz",
    "x-cdf": [
      "cdf",
      "cda"
    ],
    "x-cdlink": "vcd",
    "x-chess-pgn": "pgn",
    "x-cpio": "cpio",
    "x-csh": "csh",
    "x-director": [
      "dir",
      "dxr",
      "cst",
      "cct",
      "cxt",
      "w3d",
      "fgd",
      "swa"
    ],
    "x-dms": "dms",
    "x-doom": "wad",
    "x-dvi": "dvi",
    "x-httpd-eruby": "rhtml",
    "x-font": "pcf.Z",
    "x-freemind": "mm",
    "x-gnumeric": "gnumeric",
    "x-go-sgf": "sgf",
    "x-graphing-calculator": "gcf",
    "x-gtar": [
      "gtar",
      "taz"
    ],
    "x-hdf": "hdf",
    "x-httpd-php": [
      "phtml",
      "pht",
      "php"
    ],
    "x-httpd-php-source": "phps",
    "x-httpd-php3": "php3",
    "x-httpd-php3-preprocessed": "php3p",
    "x-httpd-php4": "php4",
    "x-httpd-php5": "php5",
    "x-ica": "ica",
    "x-info": "info",
    "x-internet-signup": [
      "ins",
      "isp"
    ],
    "x-iphone": "iii",
    "x-iso9660-image": "iso",
    "x-java-jnlp-file": "jnlp",
    "x-jmol": "jmz",
    "x-killustrator": "kil",
    "x-latex": "latex",
    "x-lyx": "lyx",
    "x-lzx": "lzx",
    "x-maker": [
      "frm",
      "fb",
      "fbdoc"
    ],
    "x-ms-wmd": "wmd",
    "x-msdos-program": [
      "com",
      "exe",
      "bat",
      "dll"
    ],
    "x-netcdf": [
      "nc"
    ],
    "x-ns-proxy-autoconfig": [
      "pac",
      "dat"
    ],
    "x-nwc": "nwc",
    "x-object": "o",
    "x-oz-application": "oza",
    "x-pkcs7-certreqresp": "p7r",
    "x-python-code": [
      "pyc",
      "pyo"
    ],
    "x-qgis": [
      "qgs",
      "shp",
      "shx"
    ],
    "x-quicktimeplayer": "qtl",
    "x-redhat-package-manager": [
      "rpm",
      "rpa"
    ],
    "x-ruby": "rb",
    "x-sh": "sh",
    "x-shar": "shar",
    "x-shockwave-flash": [
      "swf",
      "swfl"
    ],
    "x-silverlight": "scr",
    "x-stuffit": "sit",
    "x-sv4cpio": "sv4cpio",
    "x-sv4crc": "sv4crc",
    "x-tar": "tar",
    "x-tex-gf": "gf",
    "x-tex-pk": "pk",
    "x-texinfo": [
      "texinfo",
      "texi"
    ],
    "x-trash": [
      "~",
      "%",
      "bak",
      "old",
      "sik"
    ],
    "x-ustar": "ustar",
    "x-wais-source": "src",
    "x-wingz": "wz",
    "x-x509-ca-cert": [
      "crt",
      "der",
      "cer"
    ],
    "x-xcf": "xcf",
    "x-xfig": "fig",
    "x-xpinstall": "xpi",
    applixware: "aw",
    "atomsvc+xml": "atomsvc",
    "ccxml+xml": "ccxml",
    "cdmi-capability": "cdmia",
    "cdmi-container": "cdmic",
    "cdmi-domain": "cdmid",
    "cdmi-object": "cdmio",
    "cdmi-queue": "cdmiq",
    "docbook+xml": "dbk",
    "dssc+der": "dssc",
    "dssc+xml": "xdssc",
    "emma+xml": "emma",
    "epub+zip": "epub",
    exi: "exi",
    "font-tdpfr": "pfr",
    "gml+xml": "gml",
    "gpx+xml": "gpx",
    gxf: "gxf",
    hyperstudio: "stk",
    "inkml+xml": [
      "ink",
      "inkml"
    ],
    ipfix: "ipfix",
    "jsonml+json": "jsonml",
    "lost+xml": "lostxml",
    "mads+xml": "mads",
    marc: "mrc",
    "marcxml+xml": "mrcx",
    "mathml+xml": [
      "mathml",
      "mml"
    ],
    mbox: "mbox",
    "mediaservercontrol+xml": "mscml",
    "metalink+xml": "metalink",
    "metalink4+xml": "meta4",
    "mets+xml": "mets",
    "mods+xml": "mods",
    mp21: [
      "m21",
      "mp21"
    ],
    mp4: "mp4s",
    "oebps-package+xml": "opf",
    "omdoc+xml": "omdoc",
    onenote: [
      "onetoc",
      "onetoc2",
      "onetmp",
      "onepkg"
    ],
    oxps: "oxps",
    "patch-ops-error+xml": "xer",
    "pgp-encrypted": "pgp",
    pkcs10: "p10",
    "pkcs7-mime": [
      "p7m",
      "p7c"
    ],
    "pkcs7-signature": "p7s",
    pkcs8: "p8",
    "pkix-attr-cert": "ac",
    "pkix-crl": "crl",
    "pkix-pkipath": "pkipath",
    pkixcmp: "pki",
    "pls+xml": "pls",
    "prs.cww": "cww",
    "pskc+xml": "pskcxml",
    "reginfo+xml": "rif",
    "relax-ng-compact-syntax": "rnc",
    "resource-lists+xml": "rl",
    "resource-lists-diff+xml": "rld",
    "rls-services+xml": "rs",
    "rpki-ghostbusters": "gbr",
    "rpki-manifest": "mft",
    "rpki-roa": "roa",
    "rsd+xml": "rsd",
    "sbml+xml": "sbml",
    "scvp-cv-request": "scq",
    "scvp-cv-response": "scs",
    "scvp-vp-request": "spq",
    "scvp-vp-response": "spp",
    sdp: "sdp",
    "set-payment-initiation": "setpay",
    "set-registration-initiation": "setreg",
    "shf+xml": "shf",
    "sparql-query": "rq",
    "sparql-results+xml": "srx",
    srgs: "gram",
    "srgs+xml": "grxml",
    "sru+xml": "sru",
    "ssdl+xml": "ssdl",
    "ssml+xml": "ssml",
    "tei+xml": [
      "tei",
      "teicorpus"
    ],
    "thraud+xml": "tfi",
    "timestamped-data": "tsd",
    "vnd.3gpp.pic-bw-large": "plb",
    "vnd.3gpp.pic-bw-small": "psb",
    "vnd.3gpp.pic-bw-var": "pvb",
    "vnd.3gpp2.tcap": "tcap",
    "vnd.3m.post-it-notes": "pwn",
    "vnd.accpac.simply.aso": "aso",
    "vnd.accpac.simply.imp": "imp",
    "vnd.acucobol": "acu",
    "vnd.acucorp": [
      "atc",
      "acutc"
    ],
    "vnd.adobe.air-application-installer-package+zip": "air",
    "vnd.adobe.formscentral.fcdt": "fcdt",
    "vnd.adobe.fxp": [
      "fxp",
      "fxpl"
    ],
    "vnd.adobe.xdp+xml": "xdp",
    "vnd.adobe.xfdf": "xfdf",
    "vnd.ahead.space": "ahead",
    "vnd.airzip.filesecure.azf": "azf",
    "vnd.airzip.filesecure.azs": "azs",
    "vnd.amazon.ebook": "azw",
    "vnd.americandynamics.acc": "acc",
    "vnd.amiga.ami": "ami",
    "vnd.anser-web-certificate-issue-initiation": "cii",
    "vnd.anser-web-funds-transfer-initiation": "fti",
    "vnd.antix.game-component": "atx",
    "vnd.apple.installer+xml": "mpkg",
    "vnd.apple.mpegurl": "m3u8",
    "vnd.aristanetworks.swi": "swi",
    "vnd.astraea-software.iota": "iota",
    "vnd.audiograph": "aep",
    "vnd.blueice.multipass": "mpm",
    "vnd.bmi": "bmi",
    "vnd.businessobjects": "rep",
    "vnd.chemdraw+xml": "cdxml",
    "vnd.chipnuts.karaoke-mmd": "mmd",
    "vnd.claymore": "cla",
    "vnd.cloanto.rp9": "rp9",
    "vnd.clonk.c4group": [
      "c4g",
      "c4d",
      "c4f",
      "c4p",
      "c4u"
    ],
    "vnd.cluetrust.cartomobile-config": "c11amc",
    "vnd.cluetrust.cartomobile-config-pkg": "c11amz",
    "vnd.commonspace": "csp",
    "vnd.contact.cmsg": "cdbcmsg",
    "vnd.cosmocaller": "cmc",
    "vnd.crick.clicker": "clkx",
    "vnd.crick.clicker.keyboard": "clkk",
    "vnd.crick.clicker.palette": "clkp",
    "vnd.crick.clicker.template": "clkt",
    "vnd.crick.clicker.wordbank": "clkw",
    "vnd.criticaltools.wbs+xml": "wbs",
    "vnd.ctc-posml": "pml",
    "vnd.cups-ppd": "ppd",
    "vnd.curl.car": "car",
    "vnd.curl.pcurl": "pcurl",
    "vnd.dart": "dart",
    "vnd.data-vision.rdz": "rdz",
    "vnd.dece.data": [
      "uvf",
      "uvvf",
      "uvd",
      "uvvd"
    ],
    "vnd.dece.ttml+xml": [
      "uvt",
      "uvvt"
    ],
    "vnd.dece.unspecified": [
      "uvx",
      "uvvx"
    ],
    "vnd.dece.zip": [
      "uvz",
      "uvvz"
    ],
    "vnd.denovo.fcselayout-link": "fe_launch",
    "vnd.dna": "dna",
    "vnd.dolby.mlp": "mlp",
    "vnd.dpgraph": "dpg",
    "vnd.dreamfactory": "dfac",
    "vnd.ds-keypoint": "kpxx",
    "vnd.dvb.ait": "ait",
    "vnd.dvb.service": "svc",
    "vnd.dynageo": "geo",
    "vnd.ecowin.chart": "mag",
    "vnd.enliven": "nml",
    "vnd.epson.esf": "esf",
    "vnd.epson.msf": "msf",
    "vnd.epson.quickanime": "qam",
    "vnd.epson.salt": "slt",
    "vnd.epson.ssf": "ssf",
    "vnd.eszigno3+xml": [
      "es3",
      "et3"
    ],
    "vnd.ezpix-album": "ez2",
    "vnd.ezpix-package": "ez3",
    "vnd.fdf": "fdf",
    "vnd.fdsn.mseed": "mseed",
    "vnd.fdsn.seed": [
      "seed",
      "dataless"
    ],
    "vnd.flographit": "gph",
    "vnd.fluxtime.clip": "ftc",
    "vnd.framemaker": [
      "fm",
      "frame",
      "maker",
      "book"
    ],
    "vnd.frogans.fnc": "fnc",
    "vnd.frogans.ltf": "ltf",
    "vnd.fsc.weblaunch": "fsc",
    "vnd.fujitsu.oasys": "oas",
    "vnd.fujitsu.oasys2": "oa2",
    "vnd.fujitsu.oasys3": "oa3",
    "vnd.fujitsu.oasysgp": "fg5",
    "vnd.fujitsu.oasysprs": "bh2",
    "vnd.fujixerox.ddd": "ddd",
    "vnd.fujixerox.docuworks": "xdw",
    "vnd.fujixerox.docuworks.binder": "xbd",
    "vnd.fuzzysheet": "fzs",
    "vnd.genomatix.tuxedo": "txd",
    "vnd.geogebra.file": "ggb",
    "vnd.geogebra.tool": "ggt",
    "vnd.geometry-explorer": [
      "gex",
      "gre"
    ],
    "vnd.geonext": "gxt",
    "vnd.geoplan": "g2w",
    "vnd.geospace": "g3w",
    "vnd.gmx": "gmx",
    "vnd.grafeq": [
      "gqf",
      "gqs"
    ],
    "vnd.groove-account": "gac",
    "vnd.groove-help": "ghf",
    "vnd.groove-identity-message": "gim",
    "vnd.groove-injector": "grv",
    "vnd.groove-tool-message": "gtm",
    "vnd.groove-tool-template": "tpl",
    "vnd.groove-vcard": "vcg",
    "vnd.hal+xml": "hal",
    "vnd.handheld-entertainment+xml": "zmm",
    "vnd.hbci": "hbci",
    "vnd.hhe.lesson-player": "les",
    "vnd.hp-hpgl": "hpgl",
    "vnd.hp-hpid": "hpid",
    "vnd.hp-hps": "hps",
    "vnd.hp-jlyt": "jlt",
    "vnd.hp-pcl": "pcl",
    "vnd.hp-pclxl": "pclxl",
    "vnd.hydrostatix.sof-data": "sfd-hdstx",
    "vnd.ibm.minipay": "mpy",
    "vnd.ibm.modcap": [
      "afp",
      "listafp",
      "list3820"
    ],
    "vnd.ibm.rights-management": "irm",
    "vnd.ibm.secure-container": "sc",
    "vnd.iccprofile": [
      "icc",
      "icm"
    ],
    "vnd.igloader": "igl",
    "vnd.immervision-ivp": "ivp",
    "vnd.immervision-ivu": "ivu",
    "vnd.insors.igm": "igm",
    "vnd.intercon.formnet": [
      "xpw",
      "xpx"
    ],
    "vnd.intergeo": "i2g",
    "vnd.intu.qbo": "qbo",
    "vnd.intu.qfx": "qfx",
    "vnd.ipunplugged.rcprofile": "rcprofile",
    "vnd.irepository.package+xml": "irp",
    "vnd.is-xpr": "xpr",
    "vnd.isac.fcs": "fcs",
    "vnd.jam": "jam",
    "vnd.jcp.javame.midlet-rms": "rms",
    "vnd.jisp": "jisp",
    "vnd.joost.joda-archive": "joda",
    "vnd.kahootz": [
      "ktz",
      "ktr"
    ],
    "vnd.kde.karbon": "karbon",
    "vnd.kde.kchart": "chrt",
    "vnd.kde.kformula": "kfo",
    "vnd.kde.kivio": "flw",
    "vnd.kde.kontour": "kon",
    "vnd.kde.kpresenter": [
      "kpr",
      "kpt"
    ],
    "vnd.kde.kspread": "ksp",
    "vnd.kde.kword": [
      "kwd",
      "kwt"
    ],
    "vnd.kenameaapp": "htke",
    "vnd.kidspiration": "kia",
    "vnd.kinar": [
      "kne",
      "knp"
    ],
    "vnd.koan": [
      "skp",
      "skd",
      "skt",
      "skm"
    ],
    "vnd.kodak-descriptor": "sse",
    "vnd.las.las+xml": "lasxml",
    "vnd.llamagraphics.life-balance.desktop": "lbd",
    "vnd.llamagraphics.life-balance.exchange+xml": "lbe",
    "vnd.lotus-1-2-3": "123",
    "vnd.lotus-approach": "apr",
    "vnd.lotus-freelance": "pre",
    "vnd.lotus-notes": "nsf",
    "vnd.lotus-organizer": "org",
    "vnd.lotus-screencam": "scm",
    "vnd.lotus-wordpro": "lwp",
    "vnd.macports.portpkg": "portpkg",
    "vnd.mcd": "mcd",
    "vnd.medcalcdata": "mc1",
    "vnd.mediastation.cdkey": "cdkey",
    "vnd.mfer": "mwf",
    "vnd.mfmp": "mfm",
    "vnd.micrografx.flo": "flo",
    "vnd.micrografx.igx": "igx",
    "vnd.mif": "mif",
    "vnd.mobius.daf": "daf",
    "vnd.mobius.dis": "dis",
    "vnd.mobius.mbk": "mbk",
    "vnd.mobius.mqy": "mqy",
    "vnd.mobius.msl": "msl",
    "vnd.mobius.plc": "plc",
    "vnd.mobius.txf": "txf",
    "vnd.mophun.application": "mpn",
    "vnd.mophun.certificate": "mpc",
    "vnd.ms-artgalry": "cil",
    "vnd.ms-cab-compressed": "cab",
    "vnd.ms-excel.addin.macroenabled.12": "xlam",
    "vnd.ms-excel.sheet.binary.macroenabled.12": "xlsb",
    "vnd.ms-excel.sheet.macroenabled.12": "xlsm",
    "vnd.ms-excel.template.macroenabled.12": "xltm",
    "vnd.ms-fontobject": "eot",
    "vnd.ms-htmlhelp": "chm",
    "vnd.ms-ims": "ims",
    "vnd.ms-lrm": "lrm",
    "vnd.ms-officetheme": "thmx",
    "vnd.ms-powerpoint.addin.macroenabled.12": "ppam",
    "vnd.ms-powerpoint.presentation.macroenabled.12": "pptm",
    "vnd.ms-powerpoint.slide.macroenabled.12": "sldm",
    "vnd.ms-powerpoint.slideshow.macroenabled.12": "ppsm",
    "vnd.ms-powerpoint.template.macroenabled.12": "potm",
    "vnd.ms-project": [
      "mpp",
      "mpt"
    ],
    "vnd.ms-word.document.macroenabled.12": "docm",
    "vnd.ms-word.template.macroenabled.12": "dotm",
    "vnd.ms-works": [
      "wps",
      "wks",
      "wcm",
      "wdb"
    ],
    "vnd.ms-wpl": "wpl",
    "vnd.ms-xpsdocument": "xps",
    "vnd.mseq": "mseq",
    "vnd.musician": "mus",
    "vnd.muvee.style": "msty",
    "vnd.mynfc": "taglet",
    "vnd.neurolanguage.nlu": "nlu",
    "vnd.nitf": [
      "ntf",
      "nitf"
    ],
    "vnd.noblenet-directory": "nnd",
    "vnd.noblenet-sealer": "nns",
    "vnd.noblenet-web": "nnw",
    "vnd.nokia.n-gage.data": "ngdat",
    "vnd.nokia.n-gage.symbian.install": "n-gage",
    "vnd.nokia.radio-preset": "rpst",
    "vnd.nokia.radio-presets": "rpss",
    "vnd.novadigm.edm": "edm",
    "vnd.novadigm.edx": "edx",
    "vnd.novadigm.ext": "ext",
    "vnd.oasis.opendocument.chart-template": "otc",
    "vnd.oasis.opendocument.formula-template": "odft",
    "vnd.oasis.opendocument.image-template": "oti",
    "vnd.olpc-sugar": "xo",
    "vnd.oma.dd2+xml": "dd2",
    "vnd.openofficeorg.extension": "oxt",
    "vnd.openxmlformats-officedocument.presentationml.slide": "sldx",
    "vnd.osgeo.mapguide.package": "mgp",
    "vnd.osgi.dp": "dp",
    "vnd.osgi.subsystem": "esa",
    "vnd.palm": [
      "pdb",
      "pqa",
      "oprc"
    ],
    "vnd.pawaafile": "paw",
    "vnd.pg.format": "str",
    "vnd.pg.osasli": "ei6",
    "vnd.picsel": "efif",
    "vnd.pmi.widget": "wg",
    "vnd.pocketlearn": "plf",
    "vnd.powerbuilder6": "pbd",
    "vnd.previewsystems.box": "box",
    "vnd.proteus.magazine": "mgz",
    "vnd.publishare-delta-tree": "qps",
    "vnd.pvi.ptid1": "ptid",
    "vnd.quark.quarkxpress": [
      "qxd",
      "qxt",
      "qwd",
      "qwt",
      "qxl",
      "qxb"
    ],
    "vnd.realvnc.bed": "bed",
    "vnd.recordare.musicxml": "mxl",
    "vnd.recordare.musicxml+xml": "musicxml",
    "vnd.rig.cryptonote": "cryptonote",
    "vnd.rn-realmedia": "rm",
    "vnd.rn-realmedia-vbr": "rmvb",
    "vnd.route66.link66+xml": "link66",
    "vnd.sailingtracker.track": "st",
    "vnd.seemail": "see",
    "vnd.sema": "sema",
    "vnd.semd": "semd",
    "vnd.semf": "semf",
    "vnd.shana.informed.formdata": "ifm",
    "vnd.shana.informed.formtemplate": "itp",
    "vnd.shana.informed.interchange": "iif",
    "vnd.shana.informed.package": "ipk",
    "vnd.simtech-mindmapper": [
      "twd",
      "twds"
    ],
    "vnd.smart.teacher": "teacher",
    "vnd.solent.sdkm+xml": [
      "sdkm",
      "sdkd"
    ],
    "vnd.spotfire.dxp": "dxp",
    "vnd.spotfire.sfs": "sfs",
    "vnd.stepmania.package": "smzip",
    "vnd.stepmania.stepchart": "sm",
    "vnd.sus-calendar": [
      "sus",
      "susp"
    ],
    "vnd.svd": "svd",
    "vnd.syncml+xml": "xsm",
    "vnd.syncml.dm+wbxml": "bdm",
    "vnd.syncml.dm+xml": "xdm",
    "vnd.tao.intent-module-archive": "tao",
    "vnd.tcpdump.pcap": [
      "pcap",
      "cap",
      "dmp"
    ],
    "vnd.tmobile-livetv": "tmo",
    "vnd.trid.tpt": "tpt",
    "vnd.triscape.mxs": "mxs",
    "vnd.trueapp": "tra",
    "vnd.ufdl": [
      "ufd",
      "ufdl"
    ],
    "vnd.uiq.theme": "utz",
    "vnd.umajin": "umj",
    "vnd.unity": "unityweb",
    "vnd.uoml+xml": "uoml",
    "vnd.vcx": "vcx",
    "vnd.visionary": "vis",
    "vnd.vsf": "vsf",
    "vnd.webturbo": "wtb",
    "vnd.wolfram.player": "nbp",
    "vnd.wqd": "wqd",
    "vnd.wt.stf": "stf",
    "vnd.xara": "xar",
    "vnd.xfdl": "xfdl",
    "vnd.yamaha.hv-dic": "hvd",
    "vnd.yamaha.hv-script": "hvs",
    "vnd.yamaha.hv-voice": "hvp",
    "vnd.yamaha.openscoreformat": "osf",
    "vnd.yamaha.openscoreformat.osfpvg+xml": "osfpvg",
    "vnd.yamaha.smaf-audio": "saf",
    "vnd.yamaha.smaf-phrase": "spf",
    "vnd.yellowriver-custom-menu": "cmp",
    "vnd.zul": [
      "zir",
      "zirz"
    ],
    "vnd.zzazz.deck+xml": "zaz",
    "voicexml+xml": "vxml",
    widget: "wgt",
    winhlp: "hlp",
    "wsdl+xml": "wsdl",
    "wspolicy+xml": "wspolicy",
    "x-ace-compressed": "ace",
    "x-authorware-bin": [
      "aab",
      "x32",
      "u32",
      "vox"
    ],
    "x-authorware-map": "aam",
    "x-authorware-seg": "aas",
    "x-blorb": [
      "blb",
      "blorb"
    ],
    "x-bzip": "bz",
    "x-bzip2": [
      "bz2",
      "boz"
    ],
    "x-cfs-compressed": "cfs",
    "x-chat": "chat",
    "x-conference": "nsc",
    "x-dgc-compressed": "dgc",
    "x-dtbncx+xml": "ncx",
    "x-dtbook+xml": "dtb",
    "x-dtbresource+xml": "res",
    "x-eva": "eva",
    "x-font-bdf": "bdf",
    "x-font-ghostscript": "gsf",
    "x-font-linux-psf": "psf",
    "x-font-pcf": "pcf",
    "x-font-snf": "snf",
    "x-font-ttf": [
      "ttf",
      "ttc"
    ],
    "x-font-type1": [
      "pfa",
      "pfb",
      "pfm",
      "afm"
    ],
    "x-freearc": "arc",
    "x-gca-compressed": "gca",
    "x-glulx": "ulx",
    "x-gramps-xml": "gramps",
    "x-install-instructions": "install",
    "x-lzh-compressed": [
      "lzh",
      "lha"
    ],
    "x-mie": "mie",
    "x-mobipocket-ebook": [
      "prc",
      "mobi"
    ],
    "x-ms-application": "application",
    "x-ms-shortcut": "lnk",
    "x-ms-xbap": "xbap",
    "x-msbinder": "obd",
    "x-mscardfile": "crd",
    "x-msclip": "clp",
    "application/x-ms-installer": "msi",
    "x-msmediaview": [
      "mvb",
      "m13",
      "m14"
    ],
    "x-msmetafile": [
      "wmf",
      "wmz",
      "emf",
      "emz"
    ],
    "x-msmoney": "mny",
    "x-mspublisher": "pub",
    "x-msschedule": "scd",
    "x-msterminal": "trm",
    "x-mswrite": "wri",
    "x-nzb": "nzb",
    "x-pkcs12": [
      "p12",
      "pfx"
    ],
    "x-pkcs7-certificates": [
      "p7b",
      "spc"
    ],
    "x-research-info-systems": "ris",
    "x-silverlight-app": "xap",
    "x-sql": "sql",
    "x-stuffitx": "sitx",
    "x-subrip": "srt",
    "x-t3vm-image": "t3",
    "x-tex-tfm": "tfm",
    "x-tgif": "obj",
    "x-xliff+xml": "xlf",
    "x-xz": "xz",
    "x-zmachine": [
      "z1",
      "z2",
      "z3",
      "z4",
      "z5",
      "z6",
      "z7",
      "z8"
    ],
    "xaml+xml": "xaml",
    "xcap-diff+xml": "xdf",
    "xenc+xml": "xenc",
    "xml-dtd": "dtd",
    "xop+xml": "xop",
    "xproc+xml": "xpl",
    "xslt+xml": "xslt",
    "xv+xml": [
      "mxml",
      "xhvml",
      "xvml",
      "xvm"
    ],
    yang: "yang",
    "yin+xml": "yin",
    envoy: "evy",
    fractals: "fif",
    "internet-property-stream": "acx",
    olescript: "axs",
    "vnd.ms-outlook": "msg",
    "vnd.ms-pkicertstore": "sst",
    "x-compress": "z",
    "x-perfmon": [
      "pma",
      "pmc",
      "pmr",
      "pmw"
    ],
    "ynd.ms-pkipko": "pko",
    gzip: [
      "gz",
      "tgz"
    ],
    "smil+xml": [
      "smi",
      "smil"
    ],
    "vnd.debian.binary-package": [
      "deb",
      "udeb"
    ],
    "vnd.hzn-3d-crossword": "x3d",
    "vnd.sqlite3": [
      "db",
      "sqlite",
      "sqlite3",
      "db-wal",
      "sqlite-wal",
      "db-shm",
      "sqlite-shm"
    ],
    "vnd.wap.sic": "sic",
    "vnd.wap.slc": "slc",
    "x-krita": [
      "kra",
      "krz"
    ],
    "x-perl": [
      "pm",
      "pl"
    ],
    yaml: [
      "yaml",
      "yml"
    ]
  },
  audio: {
    amr: "amr",
    "amr-wb": "awb",
    annodex: "axa",
    basic: [
      "au",
      "snd"
    ],
    flac: "flac",
    midi: [
      "mid",
      "midi",
      "kar",
      "rmi"
    ],
    mpeg: [
      "mpga",
      "mpega",
      "mp3",
      "m4a",
      "mp2a",
      "m2a",
      "m3a"
    ],
    mpegurl: "m3u",
    ogg: [
      "oga",
      "ogg",
      "spx"
    ],
    "prs.sid": "sid",
    "x-aiff": "aifc",
    "x-gsm": "gsm",
    "x-ms-wma": "wma",
    "x-ms-wax": "wax",
    "x-pn-realaudio": "ram",
    "x-realaudio": "ra",
    "x-sd2": "sd2",
    adpcm: "adp",
    mp4: "mp4a",
    s3m: "s3m",
    silk: "sil",
    "vnd.dece.audio": [
      "uva",
      "uvva"
    ],
    "vnd.digital-winds": "eol",
    "vnd.dra": "dra",
    "vnd.dts": "dts",
    "vnd.dts.hd": "dtshd",
    "vnd.lucent.voice": "lvp",
    "vnd.ms-playready.media.pya": "pya",
    "vnd.nuera.ecelp4800": "ecelp4800",
    "vnd.nuera.ecelp7470": "ecelp7470",
    "vnd.nuera.ecelp9600": "ecelp9600",
    "vnd.rip": "rip",
    webm: "weba",
    "x-caf": "caf",
    "x-matroska": "mka",
    "x-pn-realaudio-plugin": "rmp",
    xm: "xm",
    aac: "aac",
    aiff: [
      "aiff",
      "aif",
      "aff"
    ],
    opus: "opus",
    wav: "wav"
  },
  chemical: {
    "x-alchemy": "alc",
    "x-cache": [
      "cac",
      "cache"
    ],
    "x-cache-csf": "csf",
    "x-cactvs-binary": [
      "cbin",
      "cascii",
      "ctab"
    ],
    "x-cdx": "cdx",
    "x-chem3d": "c3d",
    "x-cif": "cif",
    "x-cmdf": "cmdf",
    "x-cml": "cml",
    "x-compass": "cpa",
    "x-crossfire": "bsd",
    "x-csml": [
      "csml",
      "csm"
    ],
    "x-ctx": "ctx",
    "x-cxf": [
      "cxf",
      "cef"
    ],
    "x-embl-dl-nucleotide": [
      "emb",
      "embl"
    ],
    "x-gamess-input": [
      "inp",
      "gam",
      "gamin"
    ],
    "x-gaussian-checkpoint": [
      "fch",
      "fchk"
    ],
    "x-gaussian-cube": "cub",
    "x-gaussian-input": [
      "gau",
      "gjc",
      "gjf"
    ],
    "x-gaussian-log": "gal",
    "x-gcg8-sequence": "gcg",
    "x-genbank": "gen",
    "x-hin": "hin",
    "x-isostar": [
      "istr",
      "ist"
    ],
    "x-jcamp-dx": [
      "jdx",
      "dx"
    ],
    "x-kinemage": "kin",
    "x-macmolecule": "mcm",
    "x-macromodel-input": "mmod",
    "x-mdl-molfile": "mol",
    "x-mdl-rdfile": "rd",
    "x-mdl-rxnfile": "rxn",
    "x-mdl-sdfile": "sd",
    "x-mdl-tgf": "tgf",
    "x-mmcif": "mcif",
    "x-mol2": "mol2",
    "x-molconn-Z": "b",
    "x-mopac-graph": "gpt",
    "x-mopac-input": [
      "mop",
      "mopcrt",
      "zmt"
    ],
    "x-mopac-out": "moo",
    "x-ncbi-asn1": "asn",
    "x-ncbi-asn1-ascii": [
      "prt",
      "ent"
    ],
    "x-ncbi-asn1-binary": "val",
    "x-rosdal": "ros",
    "x-swissprot": "sw",
    "x-vamas-iso14976": "vms",
    "x-vmd": "vmd",
    "x-xtel": "xtel",
    "x-xyz": "xyz"
  },
  font: {
    otf: "otf",
    woff: "woff",
    woff2: "woff2"
  },
  image: {
    gif: "gif",
    ief: "ief",
    jpeg: [
      "jpeg",
      "jpg",
      "jpe",
      "jfif",
      "jfif-tbnl",
      "jif"
    ],
    pcx: "pcx",
    png: "png",
    "svg+xml": [
      "svg",
      "svgz"
    ],
    tiff: [
      "tiff",
      "tif"
    ],
    "vnd.djvu": [
      "djvu",
      "djv"
    ],
    "vnd.wap.wbmp": "wbmp",
    "x-canon-cr2": "cr2",
    "x-canon-crw": "crw",
    "x-cmu-raster": "ras",
    "x-coreldraw": "cdr",
    "x-coreldrawpattern": "pat",
    "x-coreldrawtemplate": "cdt",
    "x-corelphotopaint": "cpt",
    "x-epson-erf": "erf",
    "x-icon": "ico",
    "x-jg": "art",
    "x-jng": "jng",
    "x-nikon-nef": "nef",
    "x-olympus-orf": "orf",
    "x-portable-anymap": "pnm",
    "x-portable-bitmap": "pbm",
    "x-portable-graymap": "pgm",
    "x-portable-pixmap": "ppm",
    "x-rgb": "rgb",
    "x-xbitmap": "xbm",
    "x-xpixmap": "xpm",
    "x-xwindowdump": "xwd",
    bmp: "bmp",
    cgm: "cgm",
    g3fax: "g3",
    ktx: "ktx",
    "prs.btif": "btif",
    sgi: "sgi",
    "vnd.dece.graphic": [
      "uvi",
      "uvvi",
      "uvg",
      "uvvg"
    ],
    "vnd.dwg": "dwg",
    "vnd.dxf": "dxf",
    "vnd.fastbidsheet": "fbs",
    "vnd.fpx": "fpx",
    "vnd.fst": "fst",
    "vnd.fujixerox.edmics-mmr": "mmr",
    "vnd.fujixerox.edmics-rlc": "rlc",
    "vnd.ms-modi": "mdi",
    "vnd.ms-photo": "wdp",
    "vnd.net-fpx": "npx",
    "vnd.xiff": "xif",
    webp: "webp",
    "x-3ds": "3ds",
    "x-cmx": "cmx",
    "x-freehand": [
      "fh",
      "fhc",
      "fh4",
      "fh5",
      "fh7"
    ],
    "x-pict": [
      "pic",
      "pct"
    ],
    "x-tga": "tga",
    "cis-cod": "cod",
    avif: "avifs",
    heic: [
      "heif",
      "heic"
    ],
    pjpeg: [
      "pjpg"
    ],
    "vnd.adobe.photoshop": "psd",
    "x-adobe-dng": "dng",
    "x-fuji-raf": "raf",
    "x-icns": "icns",
    "x-kodak-dcr": "dcr",
    "x-kodak-k25": "k25",
    "x-kodak-kdc": "kdc",
    "x-minolta-mrw": "mrw",
    "x-panasonic-raw": [
      "raw",
      "rw2",
      "rwl"
    ],
    "x-pentax-pef": [
      "pef",
      "ptx"
    ],
    "x-sigma-x3f": "x3f",
    "x-sony-arw": "arw",
    "x-sony-sr2": "sr2",
    "x-sony-srf": "srf"
  },
  message: {
    rfc822: [
      "eml",
      "mime",
      "mht",
      "mhtml",
      "nws"
    ]
  },
  model: {
    iges: [
      "igs",
      "iges"
    ],
    mesh: [
      "msh",
      "mesh",
      "silo"
    ],
    vrml: [
      "wrl",
      "vrml"
    ],
    "x3d+vrml": [
      "x3dv",
      "x3dvz"
    ],
    "x3d+xml": "x3dz",
    "x3d+binary": [
      "x3db",
      "x3dbz"
    ],
    "vnd.collada+xml": "dae",
    "vnd.dwf": "dwf",
    "vnd.gdl": "gdl",
    "vnd.gtw": "gtw",
    "vnd.mts": "mts",
    "vnd.usdz+zip": "usdz",
    "vnd.vtu": "vtu"
  },
  text: {
    "cache-manifest": [
      "manifest",
      "appcache"
    ],
    calendar: [
      "ics",
      "icz",
      "ifb"
    ],
    css: "css",
    csv: "csv",
    h323: "323",
    html: [
      "html",
      "htm",
      "shtml",
      "stm"
    ],
    iuls: "uls",
    plain: [
      "txt",
      "text",
      "brf",
      "conf",
      "def",
      "list",
      "log",
      "in",
      "bas",
      "diff",
      "ksh"
    ],
    richtext: "rtx",
    scriptlet: [
      "sct",
      "wsc"
    ],
    texmacs: "tm",
    "tab-separated-values": "tsv",
    "vnd.sun.j2me.app-descriptor": "jad",
    "vnd.wap.wml": "wml",
    "vnd.wap.wmlscript": "wmls",
    "x-bibtex": "bib",
    "x-boo": "boo",
    "x-c++hdr": [
      "h++",
      "hpp",
      "hxx",
      "hh"
    ],
    "x-c++src": [
      "c++",
      "cpp",
      "cxx",
      "cc"
    ],
    "x-component": "htc",
    "x-dsrc": "d",
    "x-diff": "patch",
    "x-haskell": "hs",
    "x-java": "java",
    "x-literate-haskell": "lhs",
    "x-moc": "moc",
    "x-pascal": [
      "p",
      "pas",
      "pp",
      "inc"
    ],
    "x-pcs-gcd": "gcd",
    "x-python": "py",
    "x-scala": "scala",
    "x-setext": "etx",
    "x-tcl": [
      "tcl",
      "tk"
    ],
    "x-tex": [
      "tex",
      "ltx",
      "sty",
      "cls"
    ],
    "x-vcalendar": "vcs",
    "x-vcard": "vcf",
    n3: "n3",
    "prs.lines.tag": "dsc",
    sgml: [
      "sgml",
      "sgm"
    ],
    troff: [
      "t",
      "tr",
      "roff",
      "man",
      "me",
      "ms"
    ],
    turtle: "ttl",
    "uri-list": [
      "uri",
      "uris",
      "urls"
    ],
    vcard: "vcard",
    "vnd.curl": "curl",
    "vnd.curl.dcurl": "dcurl",
    "vnd.curl.scurl": "scurl",
    "vnd.curl.mcurl": "mcurl",
    "vnd.dvb.subtitle": "sub",
    "vnd.fly": "fly",
    "vnd.fmi.flexstor": "flx",
    "vnd.graphviz": "gv",
    "vnd.in3d.3dml": "3dml",
    "vnd.in3d.spot": "spot",
    "x-asm": [
      "s",
      "asm"
    ],
    "x-c": [
      "c",
      "h",
      "dic"
    ],
    "x-fortran": [
      "f",
      "for",
      "f77",
      "f90"
    ],
    "x-opml": "opml",
    "x-nfo": "nfo",
    "x-sfv": "sfv",
    "x-uuencode": "uu",
    webviewhtml: "htt",
    javascript: "js",
    json: "json",
    markdown: [
      "md",
      "markdown",
      "mdown",
      "markdn"
    ],
    "vnd.wap.si": "si",
    "vnd.wap.sl": "sl"
  },
  video: {
    avif: "avif",
    "3gpp": "3gp",
    annodex: "axv",
    dl: "dl",
    dv: [
      "dif",
      "dv"
    ],
    fli: "fli",
    gl: "gl",
    mpeg: [
      "mpeg",
      "mpg",
      "mpe",
      "m1v",
      "m2v",
      "mp2",
      "mpa",
      "mpv2"
    ],
    mp4: [
      "mp4",
      "mp4v",
      "mpg4"
    ],
    quicktime: [
      "qt",
      "mov"
    ],
    ogg: "ogv",
    "vnd.mpegurl": [
      "mxu",
      "m4u"
    ],
    "x-flv": "flv",
    "x-la-asf": [
      "lsf",
      "lsx"
    ],
    "x-mng": "mng",
    "x-ms-asf": [
      "asf",
      "asx",
      "asr"
    ],
    "x-ms-wm": "wm",
    "x-ms-wmv": "wmv",
    "x-ms-wmx": "wmx",
    "x-ms-wvx": "wvx",
    "x-msvideo": "avi",
    "x-sgi-movie": "movie",
    "x-matroska": [
      "mpv",
      "mkv",
      "mk3d",
      "mks"
    ],
    "3gpp2": "3g2",
    h261: "h261",
    h263: "h263",
    h264: "h264",
    jpeg: "jpgv",
    jpm: [
      "jpm",
      "jpgm"
    ],
    mj2: [
      "mj2",
      "mjp2"
    ],
    "vnd.dece.hd": [
      "uvh",
      "uvvh"
    ],
    "vnd.dece.mobile": [
      "uvm",
      "uvvm"
    ],
    "vnd.dece.pd": [
      "uvp",
      "uvvp"
    ],
    "vnd.dece.sd": [
      "uvs",
      "uvvs"
    ],
    "vnd.dece.video": [
      "uvv",
      "uvvv"
    ],
    "vnd.dvb.file": "dvb",
    "vnd.fvt": "fvt",
    "vnd.ms-playready.media.pyv": "pyv",
    "vnd.uvvu.mp4": [
      "uvu",
      "uvvu"
    ],
    "vnd.vivo": "viv",
    webm: "webm",
    "x-f4v": "f4v",
    "x-m4v": "m4v",
    "x-ms-vob": "vob",
    "x-smv": "smv",
    mp2t: "ts"
  },
  "x-conference": {
    "x-cooltalk": "ice"
  },
  "x-world": {
    "x-vrml": [
      "vrm",
      "flr",
      "wrz",
      "xaf",
      "xof"
    ]
  }
};
(() => {
  const e = {};
  for (const t of Object.keys(_n))
    for (const n of Object.keys(_n[t])) {
      const o = _n[t][n];
      if (typeof o == "string")
        e[o] = t + "/" + n;
      else
        for (let r = 0; r < o.length; r++)
          e[o[r]] = t + "/" + n;
    }
  return e;
})();
td(sn);
const Sp = 2e4, Gn = 64 * 1024 * 1024, Rp = 1024 * 1024 * 1024;
class kp extends io {
  constructor(t, n) {
    super(t), this.handle = t, this.host = n;
  }
  handle;
  host;
  async init() {
    await super.init?.(), this.size = (await this.host.stat(this.handle)).size;
  }
  async readUint8Array(t, n) {
    if (this.host.signal.aborted) throw new DOMException("Yomitan operation aborted", "AbortError");
    return (await this.host.readRange(this.handle, t, n)).bytes;
  }
}
const Tp = (e) => !e.directory;
class Op {
  constructor(t, n) {
    this.reader = t, this.entries = n, this.byName = new Map(n.map((o) => [o.filename, o]));
  }
  reader;
  entries;
  byName;
  has(t) {
    return this.byName.has(t);
  }
  list(t) {
    return t ? this.entries.filter((n) => t.test(n.filename)) : [...this.entries];
  }
  require(t, n) {
    const o = to(t), r = this.byName.get(o);
    if (!r) throw new Error(`Yomitan archive resource not found: ${o}`);
    if (r.uncompressedSize > Math.min(n, Gn))
      throw new Error(`Yomitan archive entry exceeds size limit: ${o}`);
    return r;
  }
  async readJson(t, n = Gn) {
    const r = await this.require(t, n).getData(new Vd("utf-8"), {
      checkSignature: !0,
      useWebWorkers: !1
    });
    return JSON.parse(r);
  }
  async readBytes(t, n = J) {
    return this.require(t, n).getData(new $d(), {
      checkSignature: !0,
      useWebWorkers: !1
    });
  }
  async close() {
    await this.reader.close();
  }
}
const Ao = async (e, t) => {
  const n = new fp(new kp(t, e), {
    useWebWorkers: !1,
    checkSignature: !0,
    signal: e.signal
  });
  try {
    const o = await n.getEntries();
    if (o.length > Sp)
      throw new Error("Yomitan archive has too many entries");
    const r = o.filter(Tp);
    let i = 0;
    const s = /* @__PURE__ */ new Set();
    for (const A of r) {
      if (to(A.filename), A.encrypted) throw new Error("Encrypted Yomitan archives are not supported");
      if (s.has(A.filename))
        throw new Error(`Duplicate Yomitan archive entry: ${A.filename}`);
      if (s.add(A.filename), A.uncompressedSize > Gn)
        throw new Error(`Yomitan archive entry exceeds size limit: ${A.filename}`);
      if (i += A.uncompressedSize, i > Rp)
        throw new Error("Yomitan archive exceeds the uncompressed size limit");
    }
    return new Op(n, r);
  } catch (o) {
    throw await n.close().catch(() => {
    }), o;
  }
}, Yp = Zg({
  title: h().min(1).max(1024),
  revision: j([h(), _()]).optional(),
  format: _().int().optional(),
  version: _().int().optional(),
  sequenced: rn().optional(),
  tagMeta: Vn(h(), Me()).optional()
}), Ai = (e) => {
  const t = Yp.parse(e), n = t.format ?? t.version;
  if (n !== 1 && n !== 2 && n !== 3)
    throw new Error(`Unsupported Yomitan dictionary format: ${String(n)}`);
  return {
    title: t.title,
    sourceFormatVersion: n,
    ...t.revision === void 0 ? {} : { revision: String(t.revision) },
    ...t.sequenced === void 0 ? {} : { sequenced: t.sequenced },
    ...t.tagMeta === void 0 ? {} : { tagMeta: t.tagMeta }
  };
}, Fp = j([
  h().max(1e5),
  Vn(h(), Me()),
  Ve([h().max(1e5), D(h().max(256)).max(32)])
]), ai = D(
  Ve([
    h().min(1).max(512),
    h().max(512),
    j([h().max(4e3), ns()]),
    h().max(4e3),
    _().finite(),
    D(Fp).max(2e3),
    _().int(),
    h().max(4e3)
  ])
).max(1e5), Mp = D(
  Ve([
    h().min(1).max(256),
    h().max(256),
    _().finite(),
    h().max(4e3),
    _().finite()
  ])
).max(1e5), fr = j([
  h().max(512),
  _().finite(),
  B({
    value: _().finite(),
    displayValue: h().max(512).optional()
  })
]), Np = j([
  fr,
  B({
    reading: h().max(512),
    frequency: fr
  })
]), zp = j([_().int().nonnegative(), h().regex(/^[HL]+$/u)]), pr = j([
  _().int().nonnegative(),
  D(_().int().nonnegative()).max(128)
]), Gp = B({
  reading: h().max(512),
  pitches: D(
    B({
      position: zp,
      nasal: pr.optional(),
      devoice: pr.optional(),
      tags: D(h().max(256)).max(64).optional()
    })
  ).max(128)
}), Up = B({
  reading: h().max(512),
  transcriptions: D(
    B({
      ipa: h().min(1).max(2e3),
      tags: D(h().max(256)).max(64).optional()
    })
  ).max(128)
}), Lp = D(
  j([
    Ve([h().min(1).max(512), Q("freq"), Np]),
    Ve([h().min(1).max(512), Q("pitch"), Gp]),
    Ve([h().min(1).max(512), Q("ipa"), Up])
  ])
).max(1e5), ue = (e) => e?.trim() ? e.trim().split(/\s+/u) : [], Un = 2, Pp = 1380206932, Hp = 1, Kp = new TextEncoder().encode("SQLite format 3\0"), jp = /^term_bank_(\d+)\.json$/u, Zp = /^tag_bank_(\d+)\.json$/u, Wp = /^term_meta_bank_(\d+)\.json$/u, Ln = (e) => {
  const t = e.match(/_(\d+)\.json$/u);
  return t ? Number(t[1]) : Number.MAX_SAFE_INTEGER;
}, Jp = (e) => {
  const t = Ln(e);
  if (!Number.isSafeInteger(t) || t < 1)
    throw new Error(`Invalid Yomitan term bank order: ${e}`);
  return t;
}, mr = (e, t) => Ln(e.filename) - Ln(t.filename) || e.filename.localeCompare(t.filename), ci = (e) => {
  const t = e.toLowerCase();
  if (t.endsWith(".png")) return "image/png";
  if (t.endsWith(".jpg") || t.endsWith(".jpeg")) return "image/jpeg";
  if (t.endsWith(".gif")) return "image/gif";
  if (t.endsWith(".webp")) return "image/webp";
  if (t.endsWith(".avif")) return "image/avif";
  if (t.endsWith(".svg")) return "image/svg+xml";
  const n = t.match(/\.([a-z0-9][a-z0-9+.-]*)$/u)?.[1];
  return n ? `image/${n}` : "application/octet-stream";
}, hr = (e) => {
  const t = new Uint8Array(e.byteLength);
  return t.set(e), t;
}, qp = () => [
  { sql: "CREATE TABLE meta (key TEXT PRIMARY KEY, value TEXT NOT NULL)", params: [] },
  {
    sql: "CREATE TABLE terms (id INTEGER PRIMARY KEY AUTOINCREMENT, expression TEXT NOT NULL, reading TEXT NOT NULL, definition_tags TEXT NOT NULL, rules TEXT NOT NULL, score REAL NOT NULL, glossary_json BLOB, sequence INTEGER NOT NULL, term_tags TEXT NOT NULL, bank_order INTEGER NOT NULL, entry_index INTEGER)",
    params: []
  },
  {
    sql: "CREATE TABLE tags (name TEXT PRIMARY KEY, category TEXT NOT NULL, sort_order REAL NOT NULL, notes TEXT NOT NULL, score REAL NOT NULL)",
    params: []
  },
  {
    sql: "CREATE TABLE term_meta (id INTEGER PRIMARY KEY AUTOINCREMENT, expression TEXT NOT NULL, mode TEXT NOT NULL, reading TEXT NOT NULL, payload_json TEXT NOT NULL)",
    params: []
  },
  {
    sql: "CREATE TABLE resources (key TEXT PRIMARY KEY, archive_path TEXT NOT NULL, media_kind TEXT NOT NULL, data BLOB)",
    params: []
  },
  {
    sql: "CREATE TABLE term_banks (bank_order INTEGER PRIMARY KEY, data BLOB NOT NULL)",
    params: []
  }
], Vp = (e, t, n) => ({
  sql: `INSERT OR REPLACE INTO ${e} (${t.join(", ")}) VALUES ${n.map(() => `(${t.map(() => "?").join(", ")})`).join(", ")}`,
  params: n.flat()
}), Er = (e) => (e.params ?? []).reduce((t, n) => t + bt(n), 0), Br = async (e, t, n) => {
  n.length !== 0 && await e.transaction(t, n.splice(0));
}, $p = async (e, t, n, o) => {
  const r = Er(o);
  if (r > wt)
    throw new Error("Yomitan SQL statement exceeds parameter byte limit");
  const i = n.reduce(
    (s, A) => s + Er(A),
    0
  );
  (n.length === 16 || i + r > wt) && await Br(e, t, n), n.push(o), n.length === 16 && await Br(e, t, n);
}, Oe = async (e, t, n, o, r, i) => {
  const s = Math.max(1, Math.floor(cs / r.length));
  let A = [], a = 0;
  const c = async () => {
    A.length !== 0 && (await $p(
      e,
      t,
      n,
      Vp(o, r, A)
    ), A = [], a = 0);
  };
  for (const g of i) {
    const u = g.reduce((l, d) => l + bt(d), 0);
    A.length > 0 && (A.length === s || a + u > wt) && await c(), A.push(g), a += u;
  }
  await c();
}, gi = async (e, t) => {
  const n = await Ao(e, t);
  try {
    if (!n.has("index.json")) throw new Error("Yomitan index.json is missing");
    return Ai(await n.readJson("index.json", 2 * 1024 * 1024));
  } finally {
    await n.close();
  }
}, ui = async (e, t) => {
  if ((await e.stat(t)).size < 100) return;
  const { bytes: o } = await e.readRange(t, 0, 100);
  if (o.byteLength < 100 || Kp.some((s, A) => o[A] !== s)) return;
  const r = (s) => (o[s] << 24 | o[s + 1] << 16 | o[s + 2] << 8 | o[s + 3]) >>> 0;
  if (r(68) !== Pp) return;
  const i = r(60);
  return i === Hp ? i : void 0;
}, Xp = async (e, t) => {
  try {
    return await ui(e, t) !== void 0 ? {
      matches: [{ sourceHandle: t, formatId: "yomitan-indexed", confidence: 1 }]
    } : (await gi(e, t), {
      matches: [{ sourceHandle: t, formatId: "yomitan", confidence: 1 }]
    });
  } catch {
    return { matches: [] };
  }
}, em = async (e, t) => {
  const n = await ui(e, t);
  if (n !== void 0) {
    const { name: r } = await e.stat(t);
    return {
      formatId: "yomitan-indexed",
      sourceFormatVersion: n,
      title: r.replace(/\.rdict$/iu, "") || r
    };
  }
  const o = await gi(e, t);
  return {
    formatId: "yomitan",
    sourceFormatVersion: o.sourceFormatVersion,
    title: o.title,
    ...o.revision === void 0 ? {} : { revision: o.revision },
    ...o.sequenced === void 0 ? {} : { sequenced: o.sequenced }
  };
}, tm = (e, t, n) => {
  const o = [], r = /* @__PURE__ */ new Set();
  for (let i = 0; i < e.length; i += 1) {
    const s = e[i], [A, a, c, g, u, l, d, f] = s, E = a || A, m = ue(g), C = [
      .../* @__PURE__ */ new Set([...ue(c), ...ue(f)])
    ].slice(0, 128), y = Is(l, A);
    ps.parse({
      expression: A,
      reading: E,
      rules: m,
      score: u,
      tags: C.map((w) => ({ name: w })),
      definitions: y
    }), hl(y).forEach((w) => r.add(w)), o.push([
      A,
      E,
      ue(c).join(" "),
      m.join(" "),
      u,
      n === "expanded" ? JSON.stringify(y) : null,
      d,
      ue(f).join(" "),
      t,
      n === "banked" ? i : null
    ]);
  }
  return { rows: o, resourceRefs: [...r] };
}, nm = async (e) => {
  const t = new Response(JSON.stringify(e)).body;
  if (!t) throw new Error("Failed to encode portable Yomitan term bank");
  const n = t.pipeThrough(new CompressionStream("gzip"));
  return new Uint8Array(await new Response(n).arrayBuffer());
}, om = (e) => e.map(([t, n, o, r, i]) => [t, n, o, r, i]), li = (e) => typeof e == "object" && e !== null && !Array.isArray(e), rm = (e) => {
  const [t, n, o] = e;
  return n === "freq" ? li(o) && "reading" in o && "frequency" in o ? [t, n, String(o.reading), JSON.stringify(o.frequency)] : [t, n, "", JSON.stringify(o)] : n === "pitch" ? [t, n, o.reading, JSON.stringify(o.pitches)] : [t, n, o.reading, JSON.stringify(o.transcriptions)];
}, sm = (e) => {
  if (!e.tagMeta) return [];
  const t = [];
  for (const [n, o] of Object.entries(e.tagMeta))
    li(o) && t.push([
      n,
      typeof o.category == "string" ? o.category : "",
      typeof o.order == "number" ? o.order : 0,
      typeof o.notes == "string" ? o.notes : "",
      typeof o.score == "number" ? o.score : 0
    ]);
  return t;
}, im = async (e, t, n = {}) => {
  const o = n.storage ?? "expanded", r = await Ao(e, t.sourceHandle);
  try {
    const i = Ai(await r.readJson("index.json", 2097152));
    if (i.sourceFormatVersion !== t.sourceFormatVersion)
      throw new Error("Yomitan source format changed after inspection");
    await e.transaction(t.databaseHandle, qp());
    const s = [];
    await Oe(
      e,
      t.databaseHandle,
      s,
      "meta",
      ["key", "value"],
      [
        ["index_version", String(Un)],
        ["source_format_version", String(i.sourceFormatVersion)],
        ["title", i.title],
        ["revision", i.revision ?? ""],
        ["storage_format", o === "banked" ? "banked-gzip-v1" : "expanded-v1"]
      ]
    );
    const A = r.list(jp).map((m) => ({ ...m, order: Jp(m.filename) })).sort(
      (m, C) => m.order - C.order || m.filename.localeCompare(C.filename)
    ), a = r.list(Zp).sort(mr), c = r.list(Wp).sort(mr);
    if (A.length === 0) throw new Error("Yomitan dictionary has no term banks");
    for (let m = 1; m < A.length; m += 1)
      if (A[m - 1].order === A[m].order)
        throw new Error(`Duplicate Yomitan term bank order: ${A[m].order}`);
    const g = [...a, ...A, ...c];
    let u = 0, l = 0;
    const d = /* @__PURE__ */ new Set(), f = sm(i);
    f.length > 0 && await Oe(
      e,
      t.databaseHandle,
      s,
      "tags",
      ["name", "category", "sort_order", "notes", "score"],
      f
    );
    for (const m of a) {
      if (e.signal.aborted) throw new DOMException("Yomitan import aborted", "AbortError");
      const C = Mp.parse(await r.readJson(m.filename));
      await Oe(
        e,
        t.databaseHandle,
        s,
        "tags",
        ["name", "category", "sort_order", "notes", "score"],
        om(C)
      ), e.progress("indexing", ++u, g.length);
    }
    for (const m of A) {
      if (e.signal.aborted) throw new DOMException("Yomitan import aborted", "AbortError");
      const C = ai.parse(await r.readJson(m.filename)), y = m.order, w = tm(C, y, o);
      if (w.resourceRefs.forEach((v) => d.add(v)), await Oe(
        e,
        t.databaseHandle,
        s,
        "terms",
        [
          "expression",
          "reading",
          "definition_tags",
          "rules",
          "score",
          "glossary_json",
          "sequence",
          "term_tags",
          "bank_order",
          "entry_index"
        ],
        w.rows
      ), o === "banked") {
        const v = await nm(C);
        if (v.byteLength > J)
          throw new Error(`Portable Yomitan term bank exceeds size limit: ${m.filename}`);
        await Oe(
          e,
          t.databaseHandle,
          s,
          "term_banks",
          ["bank_order", "data"],
          [[y, v]]
        );
      }
      l += C.length, e.progress("indexing", ++u, g.length);
    }
    for (const m of c) {
      if (e.signal.aborted) throw new DOMException("Yomitan import aborted", "AbortError");
      const C = Lp.parse(await r.readJson(m.filename));
      await Oe(
        e,
        t.databaseHandle,
        s,
        "term_meta",
        ["expression", "mode", "reading", "payload_json"],
        C.map(rm)
      ), e.progress("indexing", ++u, g.length);
    }
    const E = [];
    for (const m of d) {
      const C = r.entries.find((w) => w.filename === m), y = ci(m);
      if (!C) throw new Error(`Referenced Yomitan resource is missing: ${m}`);
      if (C.uncompressedSize > J)
        throw new Error(`Yomitan resource exceeds size limit: ${m}`);
      E.push([
        m,
        m,
        y,
        o === "banked" ? await r.readBytes(m) : null
      ]);
    }
    return E.length > 0 && await Oe(
      e,
      t.databaseHandle,
      s,
      "resources",
      ["key", "archive_path", "media_kind", "data"],
      E
    ), s.length > 0 && await e.transaction(t.databaseHandle, s), await e.transaction(t.databaseHandle, [
      {
        sql: "CREATE INDEX terms_expression_idx ON terms(expression, score DESC)",
        params: []
      },
      { sql: "CREATE INDEX terms_reading_idx ON terms(reading, score DESC)", params: [] },
      {
        sql: "CREATE INDEX term_meta_expression_idx ON term_meta(expression, reading, mode)",
        params: []
      }
    ]), { indexVersion: Un, entries: l, resources: E.length };
  } finally {
    await r.close();
  }
}, Qn = (e, t) => e[0]?.[t], Nt = [
  "meta",
  "terms",
  "tags",
  "term_meta",
  "resources",
  "term_banks"
], Am = async (e, t) => {
  try {
    const a = await e.select(
      t,
      `SELECT name, type, sql FROM main.sqlite_schema WHERE name IN (${Nt.map(() => "?").join(", ")})`,
      [...Nt],
      Nt.length
    ), c = new Map(
      a.rows.map((g) => [g.name, { type: g.type, sql: g.sql }])
    );
    if (Nt.some((g) => {
      const u = c.get(g);
      return u?.type !== "table" || typeof u.sql != "string" || !/^\s*CREATE\s+TABLE\b/iu.test(u.sql);
    }))
      throw new Error("Required portable index table is missing or unsafe");
    for (const g of ["terms", "term_meta"])
      if ((await e.select(
        t,
        `SELECT name FROM pragma_table_info('${g}') WHERE lower(name) IN ('rowid', '_rowid_', 'oid') LIMIT 1`,
        [],
        1
      )).rows.length > 0)
        throw new Error("Portable index table shadows SQLite row identity");
    for (const g of [
      "SELECT key, value FROM main.meta LIMIT 0",
      "SELECT _rowid_, id, expression, reading, definition_tags, rules, score, glossary_json, sequence, term_tags, bank_order, entry_index FROM main.terms LIMIT 0",
      "SELECT name, category, sort_order, notes, score FROM main.tags LIMIT 0",
      "SELECT _rowid_, id, expression, mode, reading, payload_json FROM main.term_meta LIMIT 0",
      "SELECT key, archive_path, media_kind, data FROM main.resources LIMIT 0",
      "SELECT bank_order, data FROM main.term_banks LIMIT 0"
    ])
      await e.select(t, g, [], 1);
  } catch {
    throw new Error("Invalid portable Yomitan index schema");
  }
  const n = await e.select(
    t,
    "SELECT value FROM main.meta WHERE key = 'index_version'",
    [],
    1
  ), o = Number(Qn(n.rows, "value"));
  if (o !== Un)
    throw new Error(`Yomitan index version mismatch: ${String(o)}`);
  const r = await e.select(
    t,
    "SELECT COUNT(*) AS count FROM main.terms",
    [],
    1
  ), i = Number(Qn(r.rows, "count"));
  if (!Number.isSafeInteger(i) || i < 1) throw new Error("Yomitan index is empty");
  const s = await e.select(
    t,
    "SELECT value FROM main.meta WHERE key = 'title'",
    [],
    1
  ), A = Qn(s.rows, "value");
  return { indexVersion: o, entries: i, ...typeof A == "string" ? { title: A } : {} };
}, am = async (e, t) => {
  const o = (await e.select(
    t.databaseHandle,
    "SELECT archive_path, media_kind, length(data) AS data_size FROM resources WHERE key = ?",
    [t.resourceRef],
    1
  )).rows[0], r = o?.archive_path, i = o?.media_kind;
  if (typeof r != "string" || typeof i != "string")
    throw new Error(`Yomitan resource not found: ${t.resourceRef}`);
  const s = ci(r);
  if (s !== i) throw new Error("Invalid Yomitan resource metadata");
  const A = o?.data_size;
  if (A != null) {
    const c = Number(A);
    if (!Number.isSafeInteger(c) || c < 0 || c > J)
      throw new Error(`Yomitan resource exceeds size limit: ${t.resourceRef}`);
    const u = (await e.select(
      t.databaseHandle,
      "SELECT data FROM resources WHERE key = ?",
      [t.resourceRef],
      1
    )).rows[0]?.data;
    let l;
    if (u instanceof Uint8Array) l = u;
    else if (ArrayBuffer.isView(u))
      l = new Uint8Array(u.buffer, u.byteOffset, u.byteLength);
    else if (u instanceof ArrayBuffer) l = new Uint8Array(u);
    else if (Array.isArray(u) && u.length <= J && u.every((d) => Number.isInteger(d) && d >= 0 && d <= 255))
      l = Uint8Array.from(u);
    else throw new Error(`Invalid Yomitan resource data: ${t.resourceRef}`);
    if (l.byteLength !== c || l.byteLength > J)
      throw new Error(`Yomitan resource exceeds size limit: ${t.resourceRef}`);
    return { mimeType: s, bytes: hr(l) };
  }
  const a = await Ao(e, t.sourceHandle);
  try {
    return { mimeType: s, bytes: hr(await a.readBytes(r)) };
  } finally {
    await a.close();
  }
}, cm = 3, Ir = 64, gm = {
  い: "う",
  き: "く",
  ぎ: "ぐ",
  し: "す",
  ち: "つ",
  に: "ぬ",
  び: "ぶ",
  み: "む",
  り: "る"
}, wr = {
  わ: "う",
  か: "く",
  が: "ぐ",
  さ: "す",
  た: "つ",
  な: "ぬ",
  ば: "ぶ",
  ま: "む",
  ら: "る"
}, um = {
  え: "う",
  け: "く",
  げ: "ぐ",
  せ: "す",
  て: "つ",
  ね: "ぬ",
  べ: "ぶ",
  め: "む",
  れ: "る"
}, Pn = (e, t) => {
  const n = [...e], o = n.at(-1);
  if (!(!o || !t[o]))
    return n[n.length - 1] = t[o], n.join("");
}, Cr = (e, t, n) => {
  if (!e) return [];
  const o = [{ term: `${e}る`, rule: "v1", reason: n }], r = Pn(e, t);
  return r && o.push({ term: r, rule: "v5", reason: n }), e.endsWith("し") && o.push({ term: `${e.slice(0, -1)}する`, rule: "vs", reason: n }), e === "き" && o.push({ term: "くる", rule: "vk", reason: n }), e === "来" && o.push({ term: "来る", rule: "vk", reason: n }), o;
}, ye = (e, t, n, o, r) => e.endsWith(t) && e.length > t.length ? [{ term: `${e.slice(0, -t.length)}${n}`, rule: o, reason: r }] : [], lm = (e) => {
  const t = [], n = [
    ["ませんでした", "polite negative past"],
    ["ません", "polite negative"],
    ["ました", "polite past"],
    ["ます", "polite"],
    ["ましょう", "volitional"]
  ];
  for (const [i, s] of n)
    e.endsWith(i) && e.length > i.length && t.push(...Cr(e.slice(0, -i.length), gm, s));
  for (const [i, s] of [
    ["なかった", "negative past"],
    ["ない", "negative"]
  ])
    e.endsWith(i) && e.length > i.length && t.push(...Cr(e.slice(0, -i.length), wr, s));
  const o = [
    ["った", "う"],
    ["った", "つ"],
    ["った", "る"],
    ["んだ", "む"],
    ["んだ", "ぶ"],
    ["んだ", "ぬ"],
    ["いた", "く"],
    ["いだ", "ぐ"],
    ["した", "す"]
  ];
  for (const [i, s] of o)
    t.push(...ye(e, i, s, "v5", "past"));
  const r = [
    ["って", "う"],
    ["って", "つ"],
    ["って", "る"],
    ["んで", "む"],
    ["んで", "ぶ"],
    ["んで", "ぬ"],
    ["いて", "く"],
    ["いで", "ぐ"],
    ["して", "す"]
  ];
  for (const [i, s] of r)
    t.push(...ye(e, i, s, "v5", "te-form"));
  if (t.push(...ye(e, "た", "る", "v1", "past")), t.push(...ye(e, "て", "る", "v1", "te-form")), e.endsWith("られる") && e.length > 3 && t.push({ term: `${e.slice(0, -3)}る`, rule: "v1", reason: "potential or passive" }), e.endsWith("れる") && e.length > 2) {
    const i = e.slice(0, -2), s = Pn(i, wr);
    s && t.push({ term: s, rule: "v5", reason: "potential or passive" });
  }
  if (e.endsWith("る") && e.length > 1) {
    const i = Pn(e.slice(0, -1), um);
    i && t.push({ term: i, rule: "v5", reason: "potential" });
  }
  return t.push(...ye(e, "くなかった", "い", "adj-i", "negative past")), t.push(...ye(e, "くない", "い", "adj-i", "negative")), t.push(...ye(e, "かった", "い", "adj-i", "past")), t.push(...ye(e, "くて", "い", "adj-i", "te-form")), t;
}, dm = (e) => {
  const t = { term: e, rules: [], reasons: [] }, n = [t], o = /* @__PURE__ */ new Set([`${e}:`]), r = [
    { candidate: t, depth: 0 }
  ];
  for (; r.length > 0 && n.length < Ir; ) {
    const i = r.shift();
    if (!(i.depth >= cm))
      for (const s of lm(i.candidate.term)) {
        const A = {
          term: s.term,
          rules: [s.rule],
          reasons: [...i.candidate.reasons, s.reason]
        }, a = `${A.term}:${A.rules.join(",")}`;
        if (!o.has(a)) {
          if (o.add(a), n.push(A), n.length >= Ir) break;
          r.push({ candidate: A, depth: i.depth + 1 });
        }
      }
  }
  return n;
}, fm = 256, pm = 64 * 1024 * 1024, $t = 512 * 4, bn = 256 * 4, Et = 4e3 * 4, mm = 256;
class Xt extends Error {
}
const M = (e, t) => {
  const n = e[t];
  if (typeof n != "string") throw new Error(`Invalid Yomitan index field: ${t}`);
  return n;
}, U = (e, t) => {
  const n = Number(e[t]);
  if (!Number.isFinite(n)) throw new Error(`Invalid Yomitan index field: ${t}`);
  return n;
}, hm = (e, t, n) => {
  const o = e[t];
  let r;
  if (o instanceof Uint8Array) r = o;
  else if (ArrayBuffer.isView(o))
    r = new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
  else if (o instanceof ArrayBuffer) r = new Uint8Array(o);
  else if (Array.isArray(o) && o.length <= n && o.every((s) => Number.isInteger(s) && s >= 0 && s <= 255))
    r = Uint8Array.from(o);
  else throw new Error(`Invalid Yomitan index field: ${t}`);
  if (r.byteLength > n)
    throw new Xt(`Yomitan ${t} exceeds size limit`);
  const i = new Uint8Array(r.byteLength);
  return i.set(r), i;
}, Em = async (e, t, n) => {
  const o = e.getReader(), r = new TextDecoder(), i = [];
  try {
    for (; ; ) {
      if (n.aborted)
        throw await o.cancel().catch(() => {
        }), new DOMException("Yomitan operation aborted", "AbortError");
      const { value: s, done: A } = await o.read();
      if (A) break;
      if (t.bytesRead += s.byteLength, t.bytesRead > t.maxBytes)
        throw await o.cancel().catch(() => {
        }), new Xt(
          "Portable Yomitan term banks exceed aggregate decompressed size limit"
        );
      i.push(r.decode(s, { stream: !0 }));
    }
    return i.push(r.decode()), i.join("");
  } finally {
    o.releaseLock();
  }
}, ot = (e) => Array.from({ length: e }, () => "?").join(", "), yr = (e) => {
  const t = e.portable_rowid;
  if (typeof t == "bigint" || typeof t == "number" && Number.isSafeInteger(t)) return t;
  throw new Error("Invalid portable Yomitan row id");
}, vr = (e) => `${typeof e}:${String(e)}`, di = async (e, t, n, o) => {
  const r = [];
  for (const a of n)
    if (!Object.hasOwn(a, o.column))
      try {
        const c = yr(a), g = U(a, o.sizeKey);
        if (!Number.isSafeInteger(g) || g < 0 || g > J) continue;
        r.push({ row: a, rowId: c, size: g });
      } catch {
      }
  const i = async (a) => {
    if (a.length === 0) return;
    const c = new Map(a.map((u) => [vr(u.rowId), u])), g = await e.select(
      t,
      `SELECT _rowid_ AS portable_rowid, ${o.column} FROM ${o.table} WHERE _rowid_ IN (${ot(a.length)}) AND typeof(${o.column}) = 'text' AND length(CAST(${o.column} AS BLOB)) <= ?`,
      [...a.map(({ rowId: u }) => u), J],
      a.length
    );
    for (const u of g.rows)
      try {
        const l = c.get(vr(yr(u))), d = M(u, o.column);
        if (!l || new TextEncoder().encode(d).byteLength !== l.size) continue;
        l.row[o.column] = d;
      } catch {
      }
  };
  let s = [], A = 0;
  for (const a of r)
    (s.length >= mm || s.length > 0 && A + a.size > J) && (await i(s), s = [], A = 0), s.push(a), A += a.size;
  await i(s);
}, Bm = (e, t) => {
  const n = M(e, "expression"), o = M(e, "reading"), r = new Set(ue(M(e, "rules")));
  for (let i = 0; i < t.length; i += 1) {
    const s = t[i];
    if (!(s.term !== n && s.term !== o) && !(s.rules.length > 0 && !s.rules.some((A) => r.has(A))))
      return { candidate: s, rank: i };
  }
}, Im = async (e, t, n) => {
  const o = [
    ...new Set(
      n.filter(({ row: c }) => c.glossary_json === null).map(({ row: c }) => U(c, "bank_order"))
    )
  ];
  if (o.length === 0) return /* @__PURE__ */ new Map();
  const r = (await e.select(
    t,
    `SELECT bank_order, MAX(length(data)) AS data_size FROM term_banks WHERE bank_order IN (${ot(o.length)}) GROUP BY bank_order HAVING COUNT(*) = 1`,
    o,
    o.length
  )).rows, i = /* @__PURE__ */ new Map();
  for (const c of r)
    try {
      const g = U(c, "bank_order"), u = U(c, "data_size");
      Number.isSafeInteger(g) && Number.isSafeInteger(u) && u >= 0 && i.set(g, u);
    } catch {
    }
  const s = {
    bytesRead: 0,
    maxBytes: pm
  }, A = /* @__PURE__ */ new Map();
  for (const c of o) {
    const g = i.get(c);
    if (g !== void 0) {
      if (g > J)
        throw new Xt(`Portable Yomitan term bank exceeds size limit: ${c}`);
      try {
        const u = (await e.select(
          t,
          "SELECT data FROM term_banks WHERE bank_order = ?",
          [c],
          1
        )).rows, l = hm(u[0] ?? {}, "data", J);
        if (l.byteLength !== g) continue;
        const d = new Response(l.buffer).body.pipeThrough(new DecompressionStream("gzip"));
        A.set(
          c,
          ai.parse(
            JSON.parse(await Em(d, s, e.signal))
          )
        );
      } catch (u) {
        if (e.signal.aborted || u instanceof Xt || u instanceof Error && u.name === "AbortError")
          throw u;
      }
    }
  }
  const a = /* @__PURE__ */ new Map();
  for (const { row: c } of n)
    if (c.glossary_json === null)
      try {
        const g = A.get(U(c, "bank_order")), u = U(c, "entry_index"), l = g?.[u];
        if (!l) throw new Error("Portable Yomitan term bank entry is missing");
        if (l[0] !== M(c, "expression") || (l[1] || l[0]) !== M(c, "reading"))
          throw new Error("Portable Yomitan term bank entry does not match its index");
        const d = Is(l[5], l[0]), f = Xn.array().safeParse(d);
        f.success && a.set(c, f.data);
      } catch {
      }
  return a;
}, wm = async (e, t, n) => {
  const o = /* @__PURE__ */ new Set();
  for (const { row: a } of n)
    ue(M(a, "definition_tags")).forEach((c) => o.add(c)), ue(M(a, "term_tags")).forEach((c) => o.add(c));
  if (o.size === 0) return { values: /* @__PURE__ */ new Map(), invalidNames: /* @__PURE__ */ new Set() };
  const r = [...o].slice(0, fm), i = await e.select(
    t,
    `SELECT name, CASE WHEN typeof(category) = 'text' AND length(CAST(category AS BLOB)) <= ${bn} THEN category END AS category, CASE WHEN typeof(notes) = 'text' AND length(CAST(notes AS BLOB)) <= ${Et} THEN notes END AS notes, CASE WHEN typeof(score) IN ('integer', 'real') THEN score END AS score, CASE WHEN typeof(category) = 'text' AND length(CAST(category AS BLOB)) <= ${bn} AND typeof(notes) = 'text' AND length(CAST(notes AS BLOB)) <= ${Et} AND typeof(score) IN ('integer', 'real') THEN 1 ELSE 0 END AS portable_valid FROM tags WHERE name IN (${ot(r.length)}) AND typeof(name) = 'text' AND length(CAST(name AS BLOB)) <= ${bn} ORDER BY name ASC LIMIT 256`,
    r,
    256
  ), s = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Set();
  for (const a of i.rows) {
    const c = a.name;
    try {
      const g = M(a, "name");
      if (Object.hasOwn(a, "portable_valid") && U(a, "portable_valid") !== 1)
        throw new Error("Invalid portable Yomitan tag row");
      const u = M(a, "category"), l = M(a, "notes"), d = U(a, "score"), f = ls.safeParse({
        name: g,
        ...u ? { category: u } : {},
        ...l ? { notes: l } : {},
        ...Number.isFinite(d) ? { score: d } : {}
      });
      f.success ? (s.set(g, f.data), A.delete(g)) : s.has(g) || A.add(g);
    } catch {
      typeof c == "string" && !s.has(c) && A.add(c);
    }
  }
  return { values: s, invalidNames: A };
}, xn = (e) => typeof e == "object" && e !== null && !Array.isArray(e), Cm = async (e, t, n) => {
  const o = [...new Set(n.map(({ row: i }) => M(i, "expression")))];
  if (o.length === 0) return [];
  const r = (await e.select(
    t,
    `SELECT _rowid_ AS portable_rowid, expression, mode, reading, length(CAST(payload_json AS BLOB)) AS payload_size FROM term_meta WHERE expression IN (${ot(o.length)}) AND typeof(id) IN ('integer', 'real') AND typeof(expression) = 'text' AND length(CAST(expression AS BLOB)) <= ${$t} AND mode IN ('freq', 'pitch', 'ipa') AND typeof(reading) = 'text' AND length(CAST(reading AS BLOB)) <= ${$t} AND typeof(payload_json) = 'text' ORDER BY id ASC LIMIT 1000`,
    o,
    1e3
  )).rows;
  return await di(e, t, r, {
    table: "term_meta",
    column: "payload_json",
    sizeKey: "payload_size"
  }), r;
}, ym = (e, t, n) => {
  const o = [], r = [], i = [];
  for (const s of e)
    try {
      if (M(s, "expression") !== t) continue;
      const A = M(s, "reading");
      if (A && A !== n) continue;
      const a = M(s, "mode"), c = JSON.parse(M(s, "payload_json"));
      if (a === "freq") {
        if (typeof c == "number" || typeof c == "string") {
          const g = Tn.safeParse({ value: c });
          g.success && o.push(g.data);
        } else if (xn(c)) {
          const g = Tn.safeParse({
            value: c.value,
            ..."displayValue" in c ? { displayValue: c.displayValue } : {}
          });
          g.success && o.push(g.data);
        }
      } else if (a === "pitch" && Array.isArray(c))
        for (const g of c) {
          if (!xn(g)) continue;
          const u = ds.safeParse({
            position: g.position,
            ..."nasal" in g ? { nasal: g.nasal } : {},
            ..."devoice" in g ? { devoice: g.devoice } : {},
            ..."tags" in g ? { tags: g.tags } : {}
          });
          u.success && r.push(u.data);
        }
      else if (a === "ipa" && Array.isArray(c))
        for (const g of c) {
          if (!xn(g)) continue;
          const u = fs.safeParse({
            value: g.ipa,
            ..."tags" in g ? { tags: g.tags } : {}
          });
          u.success && i.push(u.data);
        }
    } catch {
    }
  return {
    ...o.length === 0 ? {} : { frequencies: o.slice(0, 128) },
    ...r.length === 0 ? {} : { pitches: r.slice(0, 128) },
    ...i.length === 0 ? {} : { ipa: i.slice(0, 128) }
  };
}, vm = (e) => {
  let t = 0;
  const n = (o) => {
    t += 1, o.type === "element" && o.children.forEach(n);
  };
  return e.forEach(n), t;
}, _m = async (e, t) => {
  const n = dm(t.query), o = n.map((l) => l.term), r = await e.select(
    t.databaseHandle,
    `SELECT _rowid_ AS portable_rowid, id, expression, reading, definition_tags, rules, score, glossary_json IS NULL AS glossary_is_banked, length(CAST(glossary_json AS BLOB)) AS glossary_size, term_tags, bank_order, entry_index FROM terms WHERE (expression IN (${ot(o.length)}) OR reading IN (${ot(o.length)})) AND typeof(id) IN ('integer', 'real') AND typeof(expression) = 'text' AND length(CAST(expression AS BLOB)) <= ${$t} AND typeof(reading) = 'text' AND length(CAST(reading AS BLOB)) <= ${$t} AND typeof(definition_tags) = 'text' AND length(CAST(definition_tags AS BLOB)) <= ${Et} AND typeof(rules) = 'text' AND length(CAST(rules AS BLOB)) <= ${Et} AND typeof(score) IN ('integer', 'real') AND (glossary_json IS NULL OR typeof(glossary_json) = 'text') AND typeof(term_tags) = 'text' AND length(CAST(term_tags AS BLOB)) <= ${Et} AND typeof(bank_order) IN ('integer', 'real') AND (entry_index IS NULL OR typeof(entry_index) IN ('integer', 'real')) ORDER BY score DESC, bank_order ASC LIMIT 128`,
    [...o, ...o],
    128
  ), i = [];
  for (const l of r.rows)
    try {
      const d = Bm(l, n);
      if (!d) continue;
      M(l, "definition_tags"), M(l, "term_tags"), U(l, "id"), U(l, "score"), U(l, "bank_order"), U(l, "entry_index"), i.push({ row: l, ...d });
    } catch {
    }
  i.sort(
    (l, d) => l.rank - d.rank || U(d.row, "score") - U(l.row, "score") || U(l.row, "bank_order") - U(d.row, "bank_order")
  );
  const s = i.slice(0, 128);
  for (const { row: l } of s)
    if (!Object.hasOwn(l, "glossary_json"))
      try {
        U(l, "glossary_is_banked") === 1 && (l.glossary_json = null);
      } catch {
      }
  await di(
    e,
    t.databaseHandle,
    s.map(({ row: l }) => l),
    { table: "terms", column: "glossary_json", sizeKey: "glossary_size" }
  );
  const [A, a, c] = await Promise.all([
    wm(e, t.databaseHandle, s),
    Cm(e, t.databaseHandle, s),
    Im(e, t.databaseHandle, s)
  ]), g = [];
  let u = 0;
  for (const { row: l, candidate: d } of s)
    try {
      const f = M(l, "expression"), E = M(l, "reading"), m = l.glossary_json, C = typeof m == "string" ? JSON.parse(m) : c.get(l), y = [
        ...ue(M(l, "definition_tags")),
        ...ue(M(l, "term_tags"))
      ], w = [...new Set(y)].filter((K) => !A.invalidNames.has(K)).slice(0, 128).map((K) => A.values.get(K) ?? { name: K }), [v] = On({
        entries: [
          {
            expression: f,
            reading: E,
            rules: ue(M(l, "rules")),
            score: U(l, "score"),
            ...d.reasons.length === 0 ? {} : { deinflection: d.reasons },
            ...w.length === 0 ? {} : { tags: w },
            ...ym(a, f, E),
            definitions: C
          }
        ]
      }).entries;
      if (!v) continue;
      const R = vm(v.definitions);
      if (u + R > Ct) continue;
      u += R, g.push(v);
    } catch {
    }
  return On({ entries: g });
}, Qm = B({
  name: h(),
  size: _().int().nonnegative(),
  type: h().optional(),
  lastModified: _().optional()
}), bm = B({ bytes: $n(Uint8Array) }), fi = B({
  rowsAffected: _(),
  lastInsertId: _()
}), xm = B({
  rows: D(Vn(h(), Me()))
}), Dm = B({
  results: D(fi)
}), He = (e) => ({
  signal: e.signal,
  stat: async (t) => Qm.parse(await e.call("source.stat", { handle: t })),
  readRange: async (t, n, o) => bm.parse(await e.call("source.readRange", { handle: t, offset: n, length: o })),
  execute: async (t, n, o = []) => fi.parse(await e.call("sql.execute", { handle: t, sql: n, params: o })),
  select: async (t, n, o = [], r = 1e3) => xm.parse(await e.call("sql.select", { handle: t, sql: n, params: o, maxRows: r })),
  transaction: async (t, n) => Dm.parse(await e.call("sql.transaction", { handle: t, statements: n })),
  progress: (t, n, o) => e.progress(t, n, o)
}), Sm = {
  probe: async (e, t) => {
    const n = He(t), o = [];
    for (const r of e.sources)
      o.push(...(await Xp(n, r.handle)).matches);
    return { matches: o };
  },
  inspect: (e, t) => em(He(t), e.sourceHandle),
  buildIndex: (e, t) => im(He(t), e),
  verifyIndex: (e, t) => Am(He(t), e.databaseHandle),
  lookup: (e, t) => _m(He(t), e),
  readResource: (e, t) => am(He(t), e)
}, Rm = self;
dl(Rm, Sm);

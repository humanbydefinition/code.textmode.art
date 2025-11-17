var Yt = Object.defineProperty;
var jt = (n, t, e) => t in n ? Yt(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var a = (n, t, e) => jt(n, typeof t != "symbol" ? t + "" : t, e);
class U extends Error {
  constructor(t, e = {}) {
    super(U.i(t, e)), this.name = "TextmodeError";
  }
  static i(t, e) {
    return `${t}${e && Object.keys(e).length > 0 ? `

📋 Context:` + Object.entries(e).map(([i, s]) => `
  - ${i}: ${U.o(s)}`).join("") : ""}

${"↓".repeat(24)}
`;
  }
  static o(t) {
    if (t === null) return "null";
    if (t === void 0) return "undefined";
    if (typeof t == "string") return `"${t}"`;
    if (typeof t == "number" || typeof t == "boolean") return t + "";
    if (Array.isArray(t)) return t.length === 0 ? "[]" : t.length <= 5 ? `[${t.map((e) => U.o(e)).join(", ")}]` : `[${t.slice(0, 3).map((e) => U.o(e)).join(", ")}, ... +${t.length - 3} more]`;
    if (typeof t == "object") {
      const e = Object.keys(t);
      return e.length === 0 ? "{}" : e.length <= 3 ? `{ ${e.map((i) => `${i}: ${U.o(t[i])}`).join(", ")} }` : `{ ${e.slice(0, 2).map((i) => `${i}: ${U.o(t[i])}`).join(", ")}, ... +${e.length - 2} more }`;
    }
    return t + "";
  }
}
var _t = ((n) => (n[n.SILENT = 0] = "SILENT", n[n.WARNING = 1] = "WARNING", n[n.ERROR = 2] = "ERROR", n[n.THROW = 3] = "THROW", n))(_t || {});
const B = class B {
  constructor() {
    a(this, "l", { globalLevel: 3 });
  }
  static u() {
    return B.h || (B.h = new B()), B.h;
  }
  v(t, e) {
    const i = "%c[textmode.js] Oops! (╯°□°)╯︵ Something went wrong in your code.", s = "color: #f44336; font-weight: bold; background: #ffebee; padding: 2px 6px; border-radius: 3px;";
    switch (this.l.globalLevel) {
      case 0:
        return !1;
      case 1:
        return console.group(i, s), console.warn(U.i(t, e)), console.groupEnd(), !1;
      case 2:
        return console.group(i, s), console.error(U.i(t, e)), console.groupEnd(), !1;
      default:
        throw new U(t, e);
    }
  }
  m(t, e, i) {
    return !!t || (this.v(e, i), !1);
  }
  _(t) {
    this.l.globalLevel = t;
  }
};
a(B, "h", null);
let ut = B;
const V = ut.u();
class q {
  constructor(t, e, i) {
    a(this, "A");
    a(this, "C");
    a(this, "M", /* @__PURE__ */ new Map());
    a(this, "F", /* @__PURE__ */ new Map());
    a(this, "$", 0);
    this.A = t, this.C = this.U(e, i), this.P();
  }
  P() {
    const t = this.A.getProgramParameter(this.C, this.A.ACTIVE_UNIFORMS);
    for (let e = 0; e < t; e++) {
      const i = this.A.getActiveUniform(this.C, e);
      if (i) {
        const s = i.name.replace(/\[0\]$/, ""), r = this.A.getUniformLocation(this.C, s);
        r && (this.M.set(s, r), this.F.set(s, { type: i.type, size: i.size }));
      }
    }
  }
  U(t, e) {
    const i = this.R(this.A.VERTEX_SHADER, t), s = this.R(this.A.FRAGMENT_SHADER, e), r = this.A.createProgram();
    if (this.A.attachShader(r, i), this.A.attachShader(r, s), this.A.linkProgram(r), !this.A.getProgramParameter(r, this.A.LINK_STATUS)) {
      const h = this.A.getProgramInfoLog(r);
      throw Error("Shader program link error: " + h);
    }
    return this.A.deleteShader(i), this.A.deleteShader(s), r;
  }
  R(t, e) {
    const i = this.A.createShader(t);
    if (this.A.shaderSource(i, e), this.A.compileShader(i), !this.A.getShaderParameter(i, this.A.COMPILE_STATUS)) {
      const s = this.A.getShaderInfoLog(i);
      throw this.A.deleteShader(i), Error("Shader compilation error: " + s);
    }
    return i;
  }
  S() {
    this.A.useProgram(this.C), this.k();
  }
  k() {
    this.$ = 0;
  }
  I(t) {
    for (const e in t) this.O(e, t[e]);
  }
  O(t, e) {
    var c, l;
    const i = this.M.get(t);
    if (!i) return;
    const s = this.F.get(t);
    if (!s) return;
    const { type: r, size: h } = s, o = this.A;
    if (e instanceof WebGLTexture) {
      const u = this.$++;
      return o.uniform1i(i, u), o.activeTexture(o.TEXTURE0 + u), void o.bindTexture(o.TEXTURE_2D, e);
    }
    if (e instanceof it) {
      const u = this.$++;
      return o.uniform1i(i, u), o.activeTexture(o.TEXTURE0 + u), void o.bindTexture(o.TEXTURE_2D, e.textures[0]);
    }
    if (typeof e == "number") return void (r === o.INT || r === o.BOOL ? o.uniform1i(i, e) : o.uniform1f(i, e));
    if (typeof e == "boolean") return void o.uniform1i(i, e ? 1 : 0);
    if (Array.isArray(e[0])) {
      const u = e.flat(), f = { [o.FLOAT_VEC2]: () => o.uniform2fv(i, u), [o.FLOAT_VEC3]: () => o.uniform3fv(i, u), [o.FLOAT_VEC4]: () => o.uniform4fv(i, u) };
      (c = f[r]) == null || c.call(f);
    } else {
      const u = e, f = { [o.FLOAT]: () => h > 1 ? o.uniform1fv(i, u) : o.uniform1f(i, u[0]), [o.FLOAT_VEC2]: () => o.uniform2fv(i, u), [o.FLOAT_VEC3]: () => o.uniform3fv(i, u), [o.FLOAT_VEC4]: () => o.uniform4fv(i, u), [o.INT]: () => h > 1 ? o.uniform1iv(i, u) : o.uniform1i(i, u[0]), [o.INT_VEC2]: () => o.uniform2iv(i, u), [o.INT_VEC3]: () => o.uniform3iv(i, u), [o.INT_VEC4]: () => o.uniform4iv(i, u), [o.BOOL]: () => o.uniform1iv(i, u), [o.FLOAT_MAT2]: () => o.uniformMatrix2fv(i, !1, u), [o.FLOAT_MAT3]: () => o.uniformMatrix3fv(i, !1, u), [o.FLOAT_MAT4]: () => o.uniformMatrix4fv(i, !1, u) };
      (l = f[r]) == null || l.call(f);
    }
  }
  get L() {
    return this.C;
  }
  D() {
    this.A.deleteProgram(this.C);
  }
}
function vt(n, t, e, i) {
  return 180 * Math.atan2(i - t, e - n) / Math.PI;
}
function H(n, t, e, i) {
  return Math.hypot(e - n, i - t);
}
function Tt(n) {
  return (n % 360 + 360) % 360 / 360;
}
function bt(n, t, e) {
  n.bindTexture(n.TEXTURE_2D, t), n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, 1), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, e), n.bindTexture(n.TEXTURE_2D, null);
}
function et(n, t, e, i, s) {
  n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, t), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, e), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, i), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, s);
}
function ft(n, t, e, i, s, r = 0, h = WebGL2RenderingContext.FLOAT, o = !1) {
  n.enableVertexAttribArray(t), n.vertexAttribPointer(t, e, h, o, i, s), n.vertexAttribDivisor(t, r);
}
function xt(n, t, e, i, s) {
  n.bindBuffer(t, e), n.bufferData(t, i, s), n.bindBuffer(t, null);
}
const st = `#version 300 es
in vec2 A0;in vec2 A1;in vec2 A2;in vec2 A3;in vec3 A4;in vec4 A5;in vec4 A6;in vec4 A7;in vec3 A8;in vec3 A9;in vec4 Aa;in vec4 Ab;in vec3 Ac;uniform vec2 Ut;uniform float Uu;uniform float Uv;out vec2 v_uv;out vec3 v_glyphIndex;out vec4 v_glyphColor;out vec4 v_cellColor;out vec4 v_glyphFlags;out vec3 v_worldPosition;out vec3 v_normal;out float v_geometryType;const float A=6.28318530718f;const int B=2;const int C=3;const int D=4;vec2 E(float F,vec2 G,vec2 H,vec2 I,vec2 J){float K=1.0f-F;float L=K*K;float M=L*K;float N=F*F;float O=N*F;return M*G+3.0f*L*F*H+3.0f*K*N*I+O*J;}vec2 P(float F,vec2 G,vec2 H,vec2 I,vec2 J){float K=1.0f-F;float L=K*K;float N=F*F;return-3.0f*L*G+3.0f*(L-2.0f*K*F)*H+3.0f*(2.0f*K*F-N)*I+3.0f*N*J;}vec3 Q(vec3 R,float S){float T=cos(S);float U=sin(S);return vec3(R.x,R.y*T-R.z*U,R.y*U+R.z*T);}vec3 V(vec3 R,float S){float T=cos(S);float U=sin(S);return vec3(R.x*T+R.z*U,R.y,-R.x*U+R.z*T);}vec3 W(vec3 R,float S){float T=cos(S);float U=sin(S);return vec3(R.x*T-R.y*U,R.x*U+R.y*T,R.z);}vec3 X(vec3 R,vec3 Y){vec3 Z=R;if(Y.z!=0.0f){Z=W(Z,Y.z);}if(Y.y!=0.0f){Z=V(Z,Y.y);}if(Y.x!=0.0f){Z=Q(Z,Y.x);}return Z;}void main(){v_uv=A1;v_glyphIndex=A4;v_glyphColor=A5;v_cellColor=A6;v_glyphFlags=A7;vec4 a=Aa;vec4 b=Ab;vec2 c=A3;vec2 d=A2;float e=Ac.x;float f=Ac.y;int g=int(Ac.z);vec2 h=d;vec2 i=h+c*0.5f;float j=f+e*0.5f;vec3 k=vec3(i,j);vec3 l;if(g==D){float F=clamp(A0.x,0.0f,1.0f);vec2 G=b.xy;vec2 H=a.xy;vec2 I=a.zw;vec2 J=b.zw;vec2 m=E(F,G,H,I,J);vec2 n=P(F,G,H,I,J);float o=length(n);vec2 p=o>0.0f?n/o:vec2(1.0f,0.0f);vec2 q=vec2(-p.y,p.x);vec2 r=m;vec2 s=r+q*A0.y*c.y;l=vec3(s,f);}else if(g==C){float t=mod(a.x,A);if(t<0.0f){t+=A;}float u=mod(a.y,A);if(u<0.0f){u+=A;}float v=t-u;if(v<=0.0f){v+=A;}float S=t-A0.x*v;vec2 w=vec2(cos(S),sin(S))*A0.y;vec2 s=w*c+h;l=vec3(s,f);}else if(g==B){vec2 s=A0.xy*c+h;l=vec3(s,f);}vec3 x=X(l,A9);vec3 y=x+A8;vec3 z=vec3(0.0f,0.0f,1.0f);v_worldPosition=y;v_normal=z;v_geometryType=float(g);vec2 AA=(y.xy/Ut)*2.0f;AA.y=-AA.y;float AB=y.z/Ut.y;float AC=clamp(-AB*Uu,-0.99f,0.99f);if(Uv>0.5f){gl_Position=vec4(AA,AC,1.0f);}else{float AD=0.5f;float AE=1.0f/(1.0f-AB*AD);AA*=AE;gl_Position=vec4(AA,AC,1.0f);}}`, O = class O {
  constructor(t, e, i = e, s = 1, r = {}, h) {
    a(this, "H");
    a(this, "G");
    a(this, "l");
    a(this, "A");
    a(this, "N");
    a(this, "X", []);
    a(this, "Y", null);
    a(this, "K");
    a(this, "j");
    a(this, "Z", null);
    a(this, "W", /* @__PURE__ */ new Map());
    var o;
    this.H = e, this.G = i, this.A = t, this.K = (o = 8, Math.min(Math.max(s, 1), o)), this.j = h, this.l = { filter: "nearest", wrap: "clamp", format: "rgba", type: "unsigned_byte", depth: !0, ...r }, O.q || (O.q = new q(t, st, `#version 300 es
precision highp float;in vec2 v_uv;uniform sampler2D Uc;uniform sampler2D Ud;uniform sampler2D Ue;uniform vec2 Uf;layout(location=0)out vec4 o_character;layout(location=1)out vec4 o_primaryColor;layout(location=2)out vec4 o_secondaryColor;void main(){vec2 A=vec2(v_uv.x,1.-v_uv.y);vec2 B=A*Uf;vec2 C=(floor(B)+0.5f)/Uf;vec4 D=texture(Uc,C);vec4 E=texture(Ud,C);if(E.a==0.){discard;}vec4 F=texture(Ue,C);o_character=D;o_primaryColor=E;o_secondaryColor=F;}`));
    const c = t.getParameter(t.MAX_DRAW_BUFFERS), l = t.getParameter(t.MAX_COLOR_ATTACHMENTS);
    this.K = Math.min(this.K, c, l), this.N = t.createFramebuffer(), this.V(), this.J(), this.l.depth && this.tt();
  }
  V() {
    const t = this.A, e = this.l.filter === "linear" ? t.LINEAR : t.NEAREST, i = this.l.wrap === "repeat" ? t.REPEAT : t.CLAMP_TO_EDGE, s = this.l.type === "float" ? t.FLOAT : t.UNSIGNED_BYTE, r = s === t.FLOAT ? t.RGBA32F : t.RGBA8, h = t.RGBA;
    for (let o = 0; o < this.K; o++) {
      const c = t.createTexture();
      t.bindTexture(t.TEXTURE_2D, c), et(t, e, e, i, i), t.texImage2D(t.TEXTURE_2D, 0, r, this.H, this.G, 0, h, s, null), this.X.push(c);
    }
    t.bindTexture(t.TEXTURE_2D, null);
  }
  J() {
    const t = this.A;
    if (t.bindFramebuffer(t.FRAMEBUFFER, this.N), this.K === 1) t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, this.X[0], 0);
    else {
      const e = [];
      for (let i = 0; i < this.K; i++) {
        const s = t.COLOR_ATTACHMENT0 + i;
        t.framebufferTexture2D(t.FRAMEBUFFER, s, t.TEXTURE_2D, this.X[i], 0), e.push(s);
      }
      t.drawBuffers(e);
    }
    t.bindFramebuffer(t.FRAMEBUFFER, null);
  }
  tt() {
    const t = this.A;
    this.Y = t.createRenderbuffer(), t.bindRenderbuffer(t.RENDERBUFFER, this.Y), t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_COMPONENT24, this.H, this.G), t.bindFramebuffer(t.FRAMEBUFFER, this.N), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.RENDERBUFFER, this.Y), t.bindFramebuffer(t.FRAMEBUFFER, null), t.bindRenderbuffer(t.RENDERBUFFER, null);
  }
  st(t) {
    bt(this.A, this.X[0], t);
  }
  resize(t, e) {
    this.H = t, this.G = e, this.W.clear();
    const i = this.A, s = this.l.type === "float" ? i.FLOAT : i.UNSIGNED_BYTE, r = s === i.FLOAT ? i.RGBA32F : i.RGBA8, h = i.RGBA;
    for (const o of this.X) i.bindTexture(i.TEXTURE_2D, o), i.texImage2D(i.TEXTURE_2D, 0, r, this.H, this.G, 0, h, s, null);
    i.bindTexture(i.TEXTURE_2D, null), this.Y && (i.bindRenderbuffer(i.RENDERBUFFER, this.Y), i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_COMPONENT24, this.H, this.G), i.bindRenderbuffer(i.RENDERBUFFER, null));
  }
  readPixels(t) {
    const e = this.W.get(t);
    if (e) return e;
    const i = this.A, s = this.H, r = this.G, h = new Uint8Array(s * r * 4), o = i.getParameter(i.READ_FRAMEBUFFER_BINDING);
    i.bindFramebuffer(i.READ_FRAMEBUFFER, this.N), i.readBuffer(i.COLOR_ATTACHMENT0 + t), i.readPixels(0, 0, s, r, i.RGBA, i.UNSIGNED_BYTE, h), i.bindFramebuffer(i.READ_FRAMEBUFFER, o);
    const c = 4 * s, l = new Uint8Array(h.length);
    for (let u = 0; u < r; u++) {
      const f = (r - 1 - u) * c, g = u * c;
      l.set(h.subarray(f, f + c), g);
    }
    return this.W.set(t, l), l;
  }
  begin() {
    const t = this.A;
    this.W.clear(), this.j.et(), this.j.it(this.N, this.H, this.G), this.l.depth && t.clear(t.DEPTH_BUFFER_BIT), this.j.state.rt();
  }
  end() {
    this.j.state.nt(), this.j.ot();
    const t = this.j.ht();
    this.j.it(t.framebuffer, t.viewport[2], t.viewport[3]);
  }
  ct() {
    return this.Z || this.lt(), this.Z;
  }
  lt() {
    if (!this.j) return;
    const t = { Uc: this.X[0], Ud: this.X[1], Ue: this.X[2], Uf: [this.H, this.G] }, e = O.q;
    this.Z = this.j.ft.ut(e, t, !0);
  }
  D() {
    const t = this.A;
    t.deleteFramebuffer(this.N);
    for (const e of this.X) t.deleteTexture(e);
    this.Y && t.deleteRenderbuffer(this.Y);
  }
  get width() {
    return this.H;
  }
  get height() {
    return this.G;
  }
  get textures() {
    return this.X;
  }
  get attachmentCount() {
    return this.K;
  }
};
a(O, "q", null);
let it = O;
const Rt = /* @__PURE__ */ new WeakMap();
function ot(n, t) {
  Rt.set(n, t);
}
function Pt(n) {
  return Rt.get(n);
}
function G(n, t, e, i, s = 255) {
  n[0] = t / 255, n[1] = (e ?? t) / 255, n[2] = (i ?? t) / 255, n[3] = s / 255;
}
class nt {
  constructor() {
    a(this, "dt", 1);
    a(this, "gt", 0);
    a(this, "vt", 0);
    a(this, "_t", 0);
    a(this, "At", 0);
    a(this, "yt", 0);
    a(this, "wt", 0);
    a(this, "bt", [0, 0, 0]);
    a(this, "Ct", [1, 1, 1, 1]);
    a(this, "Mt", [0, 0, 0, 1]);
    a(this, "xt", !1);
    a(this, "Ft", !1);
    a(this, "$t", !1);
    a(this, "Tt", 0);
    a(this, "Pt", [0, 0, 0, 1]);
    a(this, "Et", !1);
    a(this, "Rt", []);
    a(this, "St", []);
  }
  static kt() {
    return { zt: 1, It: 0, Ot: 0, Lt: 0, At: 0, yt: 0, wt: 0, Tt: 0, Dt: !1, Bt: !1, $t: !1, Et: !1, Ht: [0, 0, 0], Gt: [1, 1, 1, 1], Nt: [0, 0, 0, 1] };
  }
  Xt(t) {
    t.zt = this.dt, t.It = this.gt, t.Ot = this.vt, t.Lt = this._t, t.At = this.At, t.yt = this.yt, t.wt = this.wt, t.Dt = this.xt, t.Bt = this.Ft, t.$t = this.$t, t.Tt = this.Tt, t.Et = this.Et, t.Ht[0] = this.bt[0], t.Ht[1] = this.bt[1], t.Ht[2] = this.bt[2], t.Gt[0] = this.Ct[0], t.Gt[1] = this.Ct[1], t.Gt[2] = this.Ct[2], t.Gt[3] = this.Ct[3], t.Nt[0] = this.Mt[0], t.Nt[1] = this.Mt[1], t.Nt[2] = this.Mt[2], t.Nt[3] = this.Mt[3];
  }
  Yt(t) {
    this.dt = t.zt, this.gt = t.It, this.vt = t.Ot, this._t = t.Lt, this.At = t.At, this.yt = t.yt, this.wt = t.wt, this.xt = t.Dt, this.Ft = t.Bt, this.$t = t.$t, this.Tt = t.Tt, this.Et = t.Et, this.bt[0] = t.Ht[0], this.bt[1] = t.Ht[1], this.bt[2] = t.Ht[2], this.Ct[0] = t.Gt[0], this.Ct[1] = t.Gt[1], this.Ct[2] = t.Gt[2], this.Ct[3] = t.Gt[3], this.Mt[0] = t.Nt[0], this.Mt[1] = t.Nt[1], this.Mt[2] = t.Nt[2], this.Mt[3] = t.Nt[3];
  }
  rt() {
    let t = this.St.pop();
    t || (t = nt.kt()), this.Xt(t), this.Rt.push(t);
  }
  nt() {
    const t = this.Rt.pop();
    t ? (this.Yt(t), this.St.push(t)) : console.warn("pop() called without matching push()");
  }
  Kt(t) {
    this.Xt(t);
  }
  jt(t) {
    this.dt = Math.abs(t);
  }
  Zt() {
    this.gt = 0, this.vt = 0, this._t = 0, this.At = 0, this.yt = 0, this.wt = 0, this.Et = !1;
  }
  Wt(t) {
    t !== 0 && (this.At += t * Math.PI / 180);
  }
  qt(t) {
    t !== 0 && (this.yt += t * Math.PI / 180);
  }
  Vt(t) {
    t !== 0 && (this.wt += t * Math.PI / 180);
  }
  Qt(t = 0, e = 0, i = 0) {
    t === 0 && e === 0 && i === 0 || (this.gt += t, this.vt += e, this._t += i);
  }
  Jt(t) {
    this.Qt(t, 0, 0);
  }
  ts(t) {
    this.Qt(0, t, 0);
  }
  ss(t) {
    this.Qt(0, 0, t);
  }
  es(t) {
    this.bt[0] = t[0], this.bt[1] = t[1], this.bt[2] = t[2];
  }
  rs(t, e, i, s = 255) {
    G(this.Ct, t, e, i, s);
  }
  ns(t, e, i, s = 255) {
    G(this.Mt, t, e, i, s);
  }
  hs(t) {
    this.xt = t;
  }
  cs(t) {
    this.Ft = t;
  }
  ls(t) {
    this.$t = t;
  }
  us(t) {
    this.Tt = Tt(t);
  }
  fs(t, e, i, s) {
    G(this.Pt, t, e, i, s);
  }
  ds(t) {
    this.Et = t;
  }
  get canvasBackgroundColor() {
    return this.Pt;
  }
  get useOrtho() {
    return this.Et;
  }
  get rotationX() {
    return this.At;
  }
  get rotationY() {
    return this.yt;
  }
  get rotationZ() {
    return this.wt;
  }
}
const dt = new Float32Array([-0.5, -0.5, 0, 0, 0.5, -0.5, 1, 0, -0.5, 0.5, 0, 1, -0.5, 0.5, 0, 1, 0.5, -0.5, 1, 0, 0.5, 0.5, 1, 1]), _ = { ps: 16, gs: WebGL2RenderingContext.TRIANGLES, vs: { _s: { size: 2, offset: 0 }, As: { size: 2, offset: 8 } } };
class Ht {
  constructor(t) {
    a(this, "A");
    a(this, "ws");
    a(this, "bs");
    this.A = t, this.ws = t.createBuffer(), this.bs = new Float32Array(dt.length);
  }
  Cs(t, e, i, s) {
    const r = this.A, h = Pt(this.A), o = h[2], c = h[3], l = t / o * 2 - 1, u = (t + i) / o * 2 - 1, f = 1 - (e + s) / c * 2, g = 1 - e / c * 2, A = dt, p = this.bs;
    for (let d = 0; d < A.length; d += 4) {
      const v = A[d], m = A[d + 1], E = A[d + 2], y = A[d + 3], T = l + (v + 0.5) * (u - l), w = f + (m + 0.5) * (g - f);
      p[d] = T, p[d + 1] = w, p[d + 2] = E, p[d + 3] = y;
    }
    r.bindBuffer(r.ARRAY_BUFFER, this.ws), r.bufferData(r.ARRAY_BUFFER, p, r.DYNAMIC_DRAW), r.enableVertexAttribArray(0), r.vertexAttribPointer(0, 2, r.FLOAT, !1, 16, 0), r.drawArrays(r.TRIANGLES, 0, 6), r.disableVertexAttribArray(0), r.bindBuffer(r.ARRAY_BUFFER, null);
  }
  D() {
    this.A.deleteBuffer(this.ws);
  }
}
var b = ((n) => (n.RECTANGLE = "rectangle", n.LINE = "line", n.ELLIPSE = "ellipse", n.ARC = "arc", n.TRIANGLE = "triangle", n.BEZIER_CURVE = "bezier_curve", n))(b || {});
const kt = { rectangle: 2, line: 2, ellipse: 2, triangle: 2, arc: 3, bezier_curve: 4 };
class Kt {
  constructor(t) {
    a(this, "A");
    a(this, "Ms", /* @__PURE__ */ new Map());
    this.A = t;
  }
  Fs(t, e, i, s) {
    const r = this.A;
    let h = this.Ms.get(t);
    h || (h = /* @__PURE__ */ new Map(), this.Ms.set(t, h));
    let o = h.get(e) || null;
    if (!o) {
      o = r.createVertexArray(), h.set(e, o), r.bindVertexArray(o), r.bindBuffer(r.ARRAY_BUFFER, s);
      const c = r.getAttribLocation(t, "A0");
      c !== -1 && ft(r, c, i.vs._s.size, i.ps, i.vs._s.offset, 0, r.FLOAT, !1);
      const l = r.getAttribLocation(t, "A1");
      l !== -1 && ft(r, l, i.vs.As.size, i.ps, i.vs.As.offset, 0, r.FLOAT, !1);
    }
    r.bindVertexArray(o);
  }
  $s() {
    this.A.bindVertexArray(null);
  }
  D() {
    for (const [, t] of this.Ms) for (const [, e] of t) e && this.A.deleteVertexArray(e);
  }
}
const L = class L {
  static Ts(t, e, i = 0) {
    const s = e || new Float32Array(L.FLOATS_PER_INSTANCE);
    let r = i;
    s[r++] = t._s[0], s[r++] = t._s[1], s[r++] = t.Ps[0], s[r++] = t.Ps[1], s[r++] = t.Ht[0], s[r++] = t.Ht[1], s[r++] = t.Ht[2], s[r++] = t.Gt[0], s[r++] = t.Gt[1], s[r++] = t.Gt[2], s[r++] = t.Gt[3], s[r++] = t.Nt[0], s[r++] = t.Nt[1], s[r++] = t.Nt[2], s[r++] = t.Nt[3], s[r++] = t.Es[0], s[r++] = t.Es[1], s[r++] = t.Es[2], s[r++] = t.Tt;
    const h = t.Rs;
    s[r++] = (h == null ? void 0 : h[0]) ?? 0, s[r++] = (h == null ? void 0 : h[1]) ?? 0, s[r++] = (h == null ? void 0 : h[2]) ?? 0;
    const o = t.Ss;
    s[r++] = (o == null ? void 0 : o[0]) ?? 0, s[r++] = (o == null ? void 0 : o[1]) ?? 0, s[r++] = (o == null ? void 0 : o[2]) ?? 0;
    const c = t.ks, l = t.zs, u = t.Is, f = t.Os, g = t.Ls, A = !(!l || !u);
    return A ? (s[r++] = (f == null ? void 0 : f[0]) ?? 0, s[r++] = (f == null ? void 0 : f[1]) ?? 0, s[r++] = (g == null ? void 0 : g[0]) ?? 0, s[r++] = (g == null ? void 0 : g[1]) ?? 0, s[r++] = l[0], s[r++] = l[1], s[r++] = u[0], s[r++] = u[1]) : !A && !!c ? (s[r++] = c[0], s[r++] = c[1], s[r++] = 0, s[r++] = 0, s[r++] = 0, s[r++] = 0, s[r++] = 0, s[r++] = 0) : (s[r++] = 0, s[r++] = 0, s[r++] = 0, s[r++] = 0, s[r++] = 0, s[r++] = 0, s[r++] = 0, s[r++] = 0), s[r++] = t.Ds ?? 0, s[r++] = t.Bs ?? 0, s[r++] = t.Hs ?? 0, s;
  }
  static Gs(t, e) {
    const i = t.length * L.FLOATS_PER_INSTANCE, s = e || new Float32Array(i);
    for (let r = 0; r < t.length; r++) {
      const h = r * L.FLOATS_PER_INSTANCE;
      L.Ts(t[r], s, h);
    }
    return s;
  }
};
a(L, "BYTES_PER_INSTANCE", 144), a(L, "FLOATS_PER_INSTANCE", 36);
let D = L;
const M = class M {
};
a(M, "STRIDE", D.BYTES_PER_INSTANCE), a(M, "ATTRIBUTES", { A2: { location: -1, size: 2, type: WebGL2RenderingContext.FLOAT, normalized: !1, stride: M.STRIDE, offset: 0, divisor: 1 }, A3: { location: -1, size: 2, type: WebGL2RenderingContext.FLOAT, normalized: !1, stride: M.STRIDE, offset: 8, divisor: 1 }, A4: { location: -1, size: 3, type: WebGL2RenderingContext.FLOAT, normalized: !1, stride: M.STRIDE, offset: 16, divisor: 1 }, A5: { location: -1, size: 4, type: WebGL2RenderingContext.FLOAT, normalized: !1, stride: M.STRIDE, offset: 28, divisor: 1 }, A6: { location: -1, size: 4, type: WebGL2RenderingContext.FLOAT, normalized: !1, stride: M.STRIDE, offset: 44, divisor: 1 }, A7: { location: -1, size: 4, type: WebGL2RenderingContext.FLOAT, normalized: !1, stride: M.STRIDE, offset: 60, divisor: 1 }, A8: { location: -1, size: 3, type: WebGL2RenderingContext.FLOAT, normalized: !1, stride: M.STRIDE, offset: 76, divisor: 1 }, A9: { location: -1, size: 3, type: WebGL2RenderingContext.FLOAT, normalized: !1, stride: M.STRIDE, offset: 88, divisor: 1 }, Aa: { location: -1, size: 4, type: WebGL2RenderingContext.FLOAT, normalized: !1, stride: M.STRIDE, offset: 100, divisor: 1 }, Ab: { location: -1, size: 4, type: WebGL2RenderingContext.FLOAT, normalized: !1, stride: M.STRIDE, offset: 116, divisor: 1 }, Ac: { location: -1, size: 3, type: WebGL2RenderingContext.FLOAT, normalized: !1, stride: M.STRIDE, offset: 132, divisor: 1 } });
let Z = M;
class Wt {
  constructor(t = 1e3, e = 1.5) {
    a(this, "Ns");
    a(this, "Xs");
    a(this, "Ys");
    a(this, "Ks", 0);
    a(this, "js", 0);
    this.Xs = t, this.Ys = e;
    const i = t * D.FLOATS_PER_INSTANCE;
    this.Ns = new Float32Array(i);
  }
  Zs(t) {
    if (t <= this.Xs) return;
    const e = Math.ceil(t * this.Ys), i = this.Xs;
    this.Xs = e;
    const s = e * D.FLOATS_PER_INSTANCE, r = new Float32Array(s), h = i * D.FLOATS_PER_INSTANCE;
    r.set(this.Ns.subarray(0, Math.min(h, this.Ks))), this.Ns = r;
  }
  Ws() {
    return { buffer: this.Ns, offset: this.Ks };
  }
  qs(t) {
    this.Ks += t, this.js++;
  }
  Vs() {
    this.Ks = 0, this.js = 0;
  }
  Qs(t = 0, e) {
    return this.Ns.subarray(t, e ?? this.Ks);
  }
  get Js() {
    return this.js;
  }
  get te() {
    return this.Xs;
  }
  get se() {
    return this.Ks;
  }
  get ee() {
    return this.js === 0;
  }
}
class Zt {
  constructor(t) {
    a(this, "Ns");
    this.Ns = t;
  }
  ie(t) {
    this.Ns.Zs(this.Ns.Js + 1);
    const { buffer: e, offset: i } = this.Ns.Ws();
    e[i + 0] = t.x, e[i + 1] = t.y, e[i + 2] = t.width, e[i + 3] = t.height, e[i + 4] = t.char0, e[i + 5] = t.char1, e[i + 6] = t.char2, e[i + 7] = t.r1, e[i + 8] = t.g1, e[i + 9] = t.b1, e[i + 10] = t.a1, e[i + 11] = t.r2, e[i + 12] = t.g2, e[i + 13] = t.b2, e[i + 14] = t.a2, e[i + 15] = t.invert, e[i + 16] = t.flipX, e[i + 17] = t.flipY, e[i + 18] = t.charRot, e[i + 19] = t.translationX, e[i + 20] = t.translationY, e[i + 21] = t.translationZ, e[i + 22] = t.rotationX, e[i + 23] = t.rotationY, e[i + 24] = t.rotationZ;
    const s = t.curveParams0, r = t.curveParams1;
    return e[i + 25] = s[0], e[i + 26] = s[1], e[i + 27] = s[2], e[i + 28] = s[3], e[i + 29] = r[0], e[i + 30] = r[1], e[i + 31] = r[2], e[i + 32] = r[3], e[i + 33] = t.depth, e[i + 34] = t.baseZ, e[i + 35] = t.geometryType, this.Ns.qs(D.FLOATS_PER_INSTANCE), this.Ns.Js - 1;
  }
  get Js() {
    return this.Ns.Js;
  }
}
class Vt {
  constructor(t, e = 1e3) {
    a(this, "A");
    a(this, "re", null);
    a(this, "ne", 0);
    a(this, "oe", /* @__PURE__ */ new Map());
    this.A = t, this.he(e);
  }
  he(t) {
    const e = this.A;
    this.re && e.deleteBuffer(this.re), this.re = e.createBuffer();
    const i = t * D.BYTES_PER_INSTANCE;
    xt(e, e.ARRAY_BUFFER, this.re, i, e.DYNAMIC_DRAW), this.ne = t;
  }
  ae(t) {
    this.he(t);
  }
  get te() {
    return this.ne;
  }
  ce(t, e) {
    if (e === 0) return;
    const i = this.A;
    i.bindBuffer(i.ARRAY_BUFFER, this.re);
    const s = e * D.FLOATS_PER_INSTANCE;
    i.bufferSubData(i.ARRAY_BUFFER, 0, t, 0, s);
  }
  le(t) {
    let e = this.oe.get(t);
    if (!e) {
      e = /* @__PURE__ */ new Map();
      const i = this.A;
      for (const s in Z.ATTRIBUTES) {
        const r = i.getAttribLocation(t, s);
        r !== -1 && e.set(s, r);
      }
      this.oe.set(t, e);
    }
    return e;
  }
  ue(t) {
    const e = this.A, i = t.L, s = this.le(i);
    for (const [r, h] of s) {
      const o = Z.ATTRIBUTES[r];
      o && ft(e, h, o.size, o.stride, o.offset, o.divisor, o.type, o.normalized);
    }
  }
  fe(t) {
    const e = this.A, i = this.le(t.L);
    for (const [s, r] of i)
      Z.ATTRIBUTES[s] && (e.disableVertexAttribArray(r), e.vertexAttribDivisor(r, 0));
  }
  D() {
    this.re && (this.A.deleteBuffer(this.re), this.re = null), this.oe.clear();
  }
}
class qt {
  constructor(t, e = 1e3, i = 1.5) {
    a(this, "A");
    a(this, "Ns");
    a(this, "de");
    a(this, "pe");
    this.A = t, this.Ns = new Wt(e, i), this.de = new Zt(this.Ns), this.pe = new Vt(t, e);
  }
  ge(t) {
    var s, r, h, o, c, l, u, f, g, A;
    const e = [0, 0, 0, 0], i = [0, 0, 0, 0];
    return t.zs && t.Is ? (e[0] = ((s = t.Os) == null ? void 0 : s[0]) ?? 0, e[1] = ((r = t.Os) == null ? void 0 : r[1]) ?? 0, e[2] = ((h = t.Ls) == null ? void 0 : h[0]) ?? 0, e[3] = ((o = t.Ls) == null ? void 0 : o[1]) ?? 0, i[0] = t.zs[0], i[1] = t.zs[1], i[2] = t.Is[0], i[3] = t.Is[1]) : t.ks && (e[0] = t.ks[0], e[1] = t.ks[1]), this.ie({ x: t._s[0], y: t._s[1], width: t.Ps[0], height: t.Ps[1], char0: t.Ht[0], char1: t.Ht[1], char2: t.Ht[2], r1: t.Gt[0], g1: t.Gt[1], b1: t.Gt[2], a1: t.Gt[3], r2: t.Nt[0], g2: t.Nt[1], b2: t.Nt[2], a2: t.Nt[3], invert: t.Es[0], flipX: t.Es[1], flipY: t.Es[2], charRot: t.Tt, translationX: ((c = t.Rs) == null ? void 0 : c[0]) ?? 0, translationY: ((l = t.Rs) == null ? void 0 : l[1]) ?? 0, translationZ: ((u = t.Rs) == null ? void 0 : u[2]) ?? 0, rotationX: ((f = t.Ss) == null ? void 0 : f[0]) ?? 0, rotationY: ((g = t.Ss) == null ? void 0 : g[1]) ?? 0, rotationZ: ((A = t.Ss) == null ? void 0 : A[2]) ?? 0, curveParams0: e, curveParams1: i, depth: t.Ds || 0, baseZ: t.Bs || 0, geometryType: t.Hs || 0 });
  }
  ie(t) {
    const e = this.de.ie(t);
    return this.Ns.te > this.pe.te && this.pe.ae(this.Ns.te), e;
  }
  get ve() {
    return this.Ns.Js;
  }
  get ee() {
    return this.Ns.ee;
  }
  me() {
    this.Ns.Vs();
  }
  ue(t) {
    const e = this.Ns.Js;
    if (e === 0) return;
    const i = this.Ns.Qs();
    this.pe.ce(i, e), this.pe.ue(t);
  }
  fe(t) {
    this.pe.fe(t);
  }
  Cs(t, e) {
    const i = this.Ns.Js;
    i !== 0 && this.A.drawArraysInstanced(t, 0, e, i);
  }
  D() {
    this.pe.D();
  }
}
class S {
  constructor(t, e, i, s) {
    a(this, "A");
    a(this, "_e");
    a(this, "Ae");
    a(this, "ye");
    a(this, "we", null);
    this.A = t, this._e = e, this.Ae = i, this.ye = s;
    const r = this.A.createBuffer();
    xt(this.A, this.A.ARRAY_BUFFER, r, this.ye.be, this.A.STATIC_DRAW), this.we = r;
  }
  get type() {
    return this.Ae;
  }
  get unitGeometry() {
    return this.ye;
  }
  get unitBuffer() {
    return this.we;
  }
  get batch() {
    return this._e;
  }
  Ce() {
    this._e.me();
  }
  Me() {
    return !this._e.ee;
  }
  D() {
    this._e.D(), this.A.deleteBuffer(this.we);
  }
  xe(t, e, i) {
    return this._e.ge(t);
  }
  Fe(t, e, i, s, r, h) {
    const o = r.It ?? 0, c = r.Ot ?? 0, l = r.Lt ?? 0, u = r.At ?? 0, f = r.yt ?? 0, g = r.wt ?? 0, A = [0, 0, 0, 0], p = [0, 0, 0, 0];
    h && (h.bezStartX !== void 0 && h.bezStartY !== void 0 && h.bezEndX !== void 0 && h.bezEndY !== void 0 ? (A[0] = h.cp1x ?? 0, A[1] = h.cp1y ?? 0, A[2] = h.cp2x ?? 0, A[3] = h.cp2y ?? 0, p[0] = h.bezStartX ?? 0, p[1] = h.bezStartY ?? 0, p[2] = h.bezEndX ?? 0, p[3] = h.bezEndY ?? 0) : h.arcStart === void 0 && h.arcStop === void 0 || (A[0] = h.arcStart ?? 0, A[1] = h.arcStop ?? 0));
    const d = { x: t, y: e, width: i, height: s, char0: r.Ht[0], char1: r.Ht[1], char2: r.Ht[2], r1: r.Gt[0], g1: r.Gt[1], b1: r.Gt[2], a1: r.Gt[3], r2: r.Nt[0], g2: r.Nt[1], b2: r.Nt[2], a2: r.Nt[3], invert: r.$t ? 1 : 0, flipX: r.Dt ? 1 : 0, flipY: r.Bt ? 1 : 0, charRot: r.Tt, translationX: o, translationY: c, translationZ: l, rotationX: u, rotationY: f, rotationZ: g, curveParams0: A, curveParams1: p, depth: (h == null ? void 0 : h.depth) ?? 0, baseZ: (h == null ? void 0 : h.baseZ) ?? 0, geometryType: kt[this.Ae] ?? 0 };
    return this._e.ie(d);
  }
}
const Qt = { be: dt, $e: 6, ..._ }, Jt = { be: new Float32Array([0, -0.5, 0, 0, 1, -0.5, 1, 0, 0, 0.5, 0, 1, 0, 0.5, 0, 1, 1, -0.5, 1, 0, 1, 0.5, 1, 1]), $e: 6, ..._ }, $t = { be: function(n = 32) {
  const t = [], e = 2 * Math.PI / n;
  for (let i = 0; i < n; i++) {
    const s = i * e, r = (i + 1) % n * e, h = Math.cos(s), o = Math.sin(s), c = 0.5 * (h + 1), l = 0.5 * (o + 1), u = Math.cos(r), f = Math.sin(r), g = 0.5 * (u + 1), A = 0.5 * (f + 1);
    t.push(0, 0, 0.5, 0.5, h, o, c, l, u, f, g, A);
  }
  return new Float32Array(t);
}(32), $e: 96, ..._ };
let te = { be: function(n) {
  const t = [];
  for (let e = 0; e < n; e++) {
    const i = e / n, s = (e + 1) / n;
    t.push(i, 0, i, 0, i, 1, i, 1, s, 1, s, 1);
  }
  return new Float32Array(t);
}(32), $e: 96, ..._ };
const ee = { be: new Float32Array([0, 0, 0, 0, 1, 0, 1, 0, 0.5, 1, 0.5, 1]), $e: 3, ..._ }, ie = { be: function(n = 16) {
  const t = [];
  for (let e = 0; e < n; e++) {
    const i = e / n, s = (e + 1) / n;
    t.push(i, -0.5, i, 0, s, -0.5, s, 0, i, 0.5, i, 1, i, 0.5, i, 1, s, -0.5, s, 0, s, 0.5, s, 1);
  }
  return new Float32Array(t);
}(16), $e: 96, ..._ }, re = { [b.RECTANGLE]: class extends S {
  constructor(n, t) {
    super(n, t, b.RECTANGLE, Qt);
  }
  ge(n, t) {
    return this.Fe(0, 0, n.width, n.height, t);
  }
}, [b.LINE]: class extends S {
  constructor(n, t) {
    super(n, t, b.LINE, Jt);
  }
  ge(n, t) {
    const e = n.x2 - n.x1, i = n.y2 - n.y1, s = Math.hypot(e, i), r = Math.atan2(i, e), h = t.zt || 1, o = n.x1 + e / 2 - s / 2, c = n.y1 + i / 2, l = { ...t, wt: (t.wt || 0) + r };
    return this.Fe(o, c, s, h, l);
  }
}, [b.ELLIPSE]: class extends S {
  constructor(n, t) {
    super(n, t, b.ELLIPSE, $t);
  }
  ge(n, t) {
    return this.Fe(0, 0, n.width, n.height, t);
  }
}, [b.ARC]: class extends S {
  constructor(n, t) {
    super(n, t, b.ARC, te);
  }
  ge(n, t) {
    const e = n.start * Math.PI / 180, i = n.stop * Math.PI / 180;
    return this.Fe(0, 0, n.width, n.height, t, { arcStart: e, arcStop: i });
  }
}, [b.TRIANGLE]: class extends S {
  constructor(n, t) {
    super(n, t, b.TRIANGLE, ee);
  }
  ge(n, t) {
    const e = Math.min(n.x1, n.x2, n.x3), i = Math.max(n.x1, n.x2, n.x3), s = Math.min(n.y1, n.y2, n.y3), r = i - e, h = Math.max(n.y1, n.y2, n.y3) - s;
    return this.Fe(e, s, r, h, t);
  }
}, [b.BEZIER_CURVE]: class extends S {
  constructor(n, t) {
    super(n, t, b.BEZIER_CURVE, ie);
  }
  ge(n, t) {
    return this.Fe(0, 0, 1, t.zt || 1, t, { cp1x: n.cp1x, cp1y: n.cp1y, cp2x: n.cp2x, cp2y: n.cp2y, bezStartX: n.x1, bezStartY: n.y1, bezEndX: n.x2, bezEndY: n.y2 });
  }
} };
class se {
  constructor(t) {
    a(this, "A");
    a(this, "Te");
    a(this, "Pe");
    this.A = t, this.Pe = new Kt(t), this.Te = /* @__PURE__ */ new Map();
    for (const e of Object.values(b)) {
      const i = new qt(t), s = new re[e](t, i);
      this.Te.set(e, s);
    }
  }
  Ee(t) {
    const e = this.Re(t);
    for (const i of e) this.Se(i);
  }
  Re(t) {
    const e = [];
    let i = null, s = null, r = null;
    for (const h of t) s !== h.material || r !== h.type ? (i && i.length > 0 && e.push({ material: s, type: r, commands: i }), i = [h], s = h.material, r = h.type) : i.push(h);
    return i && i.length > 0 && e.push({ material: s, type: r, commands: i }), e;
  }
  Se(t) {
    const { material: e, type: i, commands: s } = t, r = this.Te.get(i);
    e.shader.S(), e.shader.I(e.uniforms);
    const h = Pt(this.A), o = s.length > 0 && s[0].state.Et;
    e.shader.I({ Us: h[2] / h[3], Ut: [h[2], h[3]], Uu: 1, Uv: o ? 1 : 0 }), r.Ce();
    for (const c of s) r.ge(c.params, c.state);
    if (r.Me()) {
      const c = r.unitGeometry, l = r.unitBuffer;
      try {
        this.Pe.Fs(e.shader.L, i + "", c, l), r.batch.ue(e.shader), r.batch.Cs(c.gs, c.$e);
      } finally {
        r.batch.fe(e.shader), this.Pe.$s(), r.Ce();
      }
    }
  }
  D() {
    for (const t of this.Te.values()) t.D();
    this.Te.clear(), this.Pe.D();
  }
}
function Ft(n) {
  let t = 0;
  for (let e = 0; e < n.length; e++)
    t = (t << 5) - t + n.charCodeAt(e), t &= t;
  return t;
}
function yt(n) {
  return Ft(n + "");
}
function k(n, t) {
  return (n << 5) - n + t;
}
class ne {
  constructor(t) {
    a(this, "A");
    a(this, "ke", 0);
    a(this, "ze");
    a(this, "Ie");
    a(this, "Oe", /* @__PURE__ */ new Map());
    this.A = t, this.ze = new q(t, st, `#version 300 es
precision highp float;in vec3 v_glyphIndex;in vec4 v_glyphColor;in vec4 v_cellColor;in vec4 v_glyphFlags;layout(location=0)out vec4 o_character;layout(location=1)out vec4 o_primaryColor;layout(location=2)out vec4 o_secondaryColor;void main(){int A=int(v_glyphFlags.r>0.5?1:0);int B=int(v_glyphFlags.g>0.5?1:0);int C=int(v_glyphFlags.b>0.5?1:0);float D=float(A|(B<<1)|(C<<2))/255.;o_character=vec4(v_glyphIndex.xy,D,clamp(v_glyphFlags.a,0.,1.));o_primaryColor=vec4(v_glyphColor.rgb,v_glyphColor.a);o_secondaryColor=vec4(v_cellColor.rgb,v_cellColor.a);}`), this.Ie = { id: this.ke++, shader: this.ze, uniforms: Object.freeze({}), hash: this.Le(this.ze, {}), isBuiltIn: !0 };
  }
  get De() {
    return this.Ie;
  }
  ut(t, e = {}, i = !1) {
    const s = this.Le(t, e), r = this.Oe.get(s);
    if (r) return r;
    const h = { id: this.ke++, shader: t, uniforms: Object.freeze({ ...e }), hash: s, isBuiltIn: i };
    return this.Oe.set(s, h), h;
  }
  Be(t, e = {}) {
    return { id: this.ke++, shader: t, uniforms: Object.freeze({ ...e }), hash: 0, isBuiltIn: !1 };
  }
  Le(t, e) {
    const i = yt(t.L), s = function(r, h) {
      let o = 0;
      const c = Object.keys(r).sort();
      for (const l of c) o = k(o, Ft(l)), o = k(o, h(r[l]));
      return o;
    }(e, this.He.bind(this));
    return k(i, s);
  }
  He(t) {
    return typeof t == "number" || typeof t == "boolean" ? function(e) {
      return typeof e == "boolean" ? e ? 1 : 0 : Math.floor(e);
    }(t) : Array.isArray(t) ? function(e) {
      let i = 0;
      const s = Array.isArray(e[0]) ? e.flat() : e;
      for (const r of s) i = k(i, typeof r == "number" ? r : 0);
      return i;
    }(t) : t instanceof Float32Array || t instanceof Int32Array ? function(e) {
      let i = 0;
      const s = Math.min(e.length, 16);
      for (let r = 0; r < s; r++) i = k(i, e[r]);
      return i;
    }(t) : t instanceof WebGLTexture ? yt(t) : 0;
  }
  D() {
    this.ze != this.ze && this.ze.D(), this.ze.D(), this.Oe.clear();
  }
}
class he {
  constructor() {
    a(this, "Ge", []);
    a(this, "Ne", 1);
    a(this, "Ps", 0);
  }
  Xe(t, e) {
    if (this.Ps >= this.Ge.length) {
      const s = { id: this.Ne++, type: t, params: {}, state: nt.kt(), material: e };
      this.Ge.push(s);
    }
    const i = this.Ge[this.Ps];
    return i.id = this.Ne++, i.type = t, i.material = e, this.Ps++, i;
  }
  Ye(t, e, i) {
    const s = this.Xe(b.RECTANGLE, i), r = s.params;
    return r.width = t.width, r.height = t.height, e.Kt(s.state), s.id;
  }
  Ke(t, e, i) {
    const s = this.Xe(b.LINE, i), r = s.params;
    return r.x1 = t.x1, r.y1 = t.y1, r.x2 = t.x2, r.y2 = t.y2, r.thickness = t.thickness, e.Kt(s.state), s.id;
  }
  je(t, e, i) {
    const s = this.Xe(b.ELLIPSE, i), r = s.params;
    return r.width = t.width, r.height = t.height, r.startAngle = t.startAngle, r.endAngle = t.endAngle, r.segments = t.segments, e.Kt(s.state), s.id;
  }
  Ze(t, e, i) {
    const s = this.Xe(b.ARC, i), r = s.params;
    return r.width = t.width, r.height = t.height, r.start = t.start, r.stop = t.stop, e.Kt(s.state), s.id;
  }
  We(t, e, i) {
    const s = this.Xe(b.TRIANGLE, i), r = s.params;
    return r.x1 = t.x1, r.y1 = t.y1, r.x2 = t.x2, r.y2 = t.y2, r.x3 = t.x3, r.y3 = t.y3, e.Kt(s.state), s.id;
  }
  qe(t, e, i) {
    const s = this.Xe(b.BEZIER_CURVE, i), r = s.params;
    return r.x1 = t.x1, r.y1 = t.y1, r.cp1x = t.cp1x, r.cp1y = t.cp1y, r.cp2x = t.cp2x, r.cp2y = t.cp2y, r.x2 = t.x2, r.y2 = t.y2, r.thickness = t.thickness, r.segments = t.segments, e.Kt(s.state), s.id;
  }
  me() {
    this.Ps = 0;
  }
  [Symbol.iterator]() {
    let t = 0;
    const e = this.Ps, i = this.Ge;
    return { next: () => t < e ? { value: i[t++], done: !1 } : { value: void 0, done: !0 } };
  }
}
class oe {
  constructor(t) {
    a(this, "A");
    a(this, "Ve", null);
    a(this, "Qe");
    a(this, "ft");
    a(this, "Je");
    a(this, "ti");
    a(this, "si");
    a(this, "ei", null);
    a(this, "ii", {});
    a(this, "ri", []);
    a(this, "ni", []);
    a(this, "oi", null);
    a(this, "hi", [0, 0, 0, 0]);
    this.A = t, t.enable(t.DEPTH_TEST), t.depthFunc(t.LEQUAL), t.clearDepth(1), t.depthMask(!0), t.disable(t.CULL_FACE), this.Je = new nt(), this.ft = new ne(t), this.ti = new he(), this.Qe = new se(t), this.si = new Ht(t);
    const e = [0, 0, t.canvas.width, t.canvas.height];
    ot(t, e), this.ri.push(null), this.ni.push(e), this.oi = null, this.hi = e;
  }
  et() {
    this.ri.push(this.oi), this.ni.push([...this.hi]);
  }
  ht() {
    return { framebuffer: this.ri.pop() ?? null, viewport: this.ni.pop() ?? [0, 0, this.A.canvas.width, this.A.canvas.height] };
  }
  it(t, e, i) {
    const s = this.A;
    this.oi !== t && (s.bindFramebuffer(s.FRAMEBUFFER, t), this.oi = t);
    const r = [0, 0, e, i];
    this.hi[0] === r[0] && this.hi[1] === r[1] && this.hi[2] === r[2] && this.hi[3] === r[3] || (s.viewport(...r), ot(s, r), this.hi = r);
  }
  ai(t) {
    this.Ve !== t && (this.Ve = t, t.S());
  }
  ci(t, e) {
    return new q(this.A, t, e);
  }
  li(t) {
    this.ei = t, t && (this.ii = {});
  }
  O(t, e) {
    this.ii[t] = e;
  }
  ui(t) {
    Object.assign(this.ii, t);
  }
  fi(t) {
    return new q(this.A, st, t);
  }
  di(t, e, i) {
    this.ti.Ye({ width: e ?? t.width, height: i ?? t.height }, this.Je, t.ct());
  }
  pi(t, e, i, s) {
    this.si.Cs(t, e, i, s);
  }
  gi(t, e) {
    if (this.ei) {
      const i = this.ft.Be(this.ei, this.ii);
      this.ti.Ye({ width: t, height: e }, this.Je, i), this.ei = null, this.ii = {};
    } else this.ti.Ye({ width: t, height: e }, this.Je, this.ft.De);
  }
  mi(t, e, i, s) {
    this.ti.Ke({ x1: t, y1: e, x2: i, y2: s }, this.Je, this.ft.De);
  }
  _i(t, e) {
    this.ti.je({ width: t, height: e }, this.Je, this.ft.De);
  }
  Ai(t, e, i, s, r, h) {
    this.ti.We({ x1: t, y1: e, x2: i, y2: s, x3: r, y3: h }, this.Je, this.ft.De);
  }
  yi(t, e, i, s, r, h, o, c) {
    this.ti.qe({ x1: t, y1: e, cp1x: i, cp1y: s, cp2x: r, cp2y: h, x2: o, y2: c }, this.Je, this.ft.De);
  }
  wi(t, e, i, s) {
    this.ti.Ze({ width: t, height: e, start: i, stop: s }, this.Je, this.ft.De);
  }
  bi(t, e, i = 1, s = {}) {
    return new it(this.A, t, e, i, s, this);
  }
  Ci(t, e = t, i = t, s = 255) {
    this.Je.fs(t, e ?? t, i ?? t, s);
    const [r, h, o, c] = this.Je.canvasBackgroundColor;
    this.me(r, h, o, c);
  }
  me(t = 0, e = 0, i = 0, s = 0) {
    this.A.clearColor(t, e, i, s), this.A.clear(this.A.COLOR_BUFFER_BIT);
  }
  Mi() {
    const t = [0, 0, this.A.canvas.width, this.A.canvas.height];
    this.A.viewport(...t), ot(this.A, t), this.hi = t, this.ni.length > 0 && (this.ni[0] = t);
  }
  ot() {
    const t = this.ti;
    this.Qe.Ee(t), t.me();
  }
  D() {
    this.ft.D(), this.Qe.D(), this.si.D();
  }
  get context() {
    return this.A;
  }
  get state() {
    return this.Je;
  }
}
const P = { readShort: (n, t) => (P.t.uint16[0] = n[t] << 8 | n[t + 1], P.t.int16[0]), readUshort: (n, t) => n[t] << 8 | n[t + 1], readUshorts(n, t, e) {
  const i = [];
  for (let s = 0; s < e; s++) i.push(P.readUshort(n, t + 2 * s));
  return i;
}, readUint(n, t) {
  const e = P.t.uint8;
  return e[3] = n[t], e[2] = n[t + 1], e[1] = n[t + 2], e[0] = n[t + 3], P.t.uint32[0];
}, readASCII(n, t, e) {
  let i = "";
  for (let s = 0; s < e; s++) i += String.fromCharCode(n[t + s]);
  return i;
}, t: (() => {
  const n = new ArrayBuffer(8);
  return { uint8: new Uint8Array(n), int16: new Int16Array(n), uint16: new Uint16Array(n), uint32: new Uint32Array(n) };
})() };
function J(n) {
  return n + 3 & -4;
}
function $(n, t, e) {
  n[t] = e >>> 8 & 255, n[t + 1] = 255 & e;
}
function z(n, t, e) {
  n[t] = e >>> 24 & 255, n[t + 1] = e >>> 16 & 255, n[t + 2] = e >>> 8 & 255, n[t + 3] = 255 & e;
}
function ae(n, t, e) {
  for (let i = 0; i < e.length; i++) n[t + i] = 255 & e.charCodeAt(i);
}
function at(n, t, e) {
  const i = t + e;
  let s = 0;
  const r = P.t;
  for (let h = t; h < i; h += 4) r.uint8[3] = n[h] || 0, r.uint8[2] = n[h + 1] || 0, r.uint8[1] = n[h + 2] || 0, r.uint8[0] = n[h + 3] || 0, s = s + (r.uint32[0] >>> 0) >>> 0;
  return s >>> 0;
}
class ce {
  constructor(t) {
    a(this, "b");
    a(this, "p", 0);
    a(this, "bitbuf", 0);
    a(this, "bitcnt", 0);
    this.b = t;
  }
  readBits(t) {
    for (; this.bitcnt < t; ) {
      const i = this.b[this.p++] || 0;
      this.bitbuf |= i << this.bitcnt, this.bitcnt += 8;
    }
    const e = this.bitbuf & (1 << t) - 1;
    return this.bitbuf >>>= t, this.bitcnt -= t, e;
  }
  alignToByte() {
    this.bitbuf = 0, this.bitcnt = 0;
  }
  get offset() {
    return this.p;
  }
}
function K(n) {
  let t = 32, e = 0;
  for (const o of n) o && (o < t && (t = o), o > e && (e = o));
  if (e === 0) return { min: 0, max: 0, table: /* @__PURE__ */ new Map() };
  const i = new Uint32Array(e + 1);
  for (const o of n) o && i[o]++;
  const s = new Uint32Array(e + 1);
  let r = 0;
  i[0] = 0;
  for (let o = 1; o <= e; o++) r = r + i[o - 1] << 1, s[o] = r;
  const h = /* @__PURE__ */ new Map();
  for (let o = 0; o < n.length; o++) {
    const c = n[o];
    if (!c) continue;
    const l = s[c]++;
    let u = h.get(c);
    u || (u = [], h.set(c, u)), u[le(l, c)] = o;
  }
  return { min: t, max: e, table: h };
}
function ct(n, t) {
  let e = 0;
  for (let i = 1; i <= t.max; i++) {
    e |= n.readBits(1) << i - 1;
    const s = t.table.get(i);
    if (s && e < s.length) {
      const r = s[e];
      if (r !== void 0) return r;
    }
  }
  throw Error("Invalid Huffman code");
}
function le(n, t) {
  let e = 0;
  for (let i = 0; i < t; i++) e = e << 1 | 1 & n, n >>>= 1;
  return e >>> 0;
}
function ue(n) {
  if (n.length < 2) throw Error("ZLIB data too short");
  const t = n[0], e = n[1];
  if ((15 & t) != 8) throw Error("Unsupported ZLIB compression method");
  if (((t << 8) + e) % 31 != 0) throw Error("Bad ZLIB header check");
  let i = 2;
  32 & e && (i += 4);
  const s = [];
  return function(r, h) {
    const o = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258], c = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], l = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577], u = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
    let f = 0;
    for (; !f; ) {
      f = r.readBits(1);
      const g = r.readBits(2);
      if (g === 0) {
        r.alignToByte();
        const A = r.readBits(16);
        if ((65535 & (65535 ^ A)) !== r.readBits(16)) throw Error("DEFLATE uncompressed LEN/NLEN mismatch");
        for (let p = 0; p < A; p++) h.push(r.readBits(8));
      } else {
        if (g !== 1 && g !== 2) throw Error("Unsupported DEFLATE type");
        {
          let A, p;
          if (g === 1) {
            const d = Array(288).fill(0);
            for (let v = 0; v <= 143; v++) d[v] = 8;
            for (let v = 144; v <= 255; v++) d[v] = 9;
            for (let v = 256; v <= 279; v++) d[v] = 7;
            for (let v = 280; v <= 287; v++) d[v] = 8;
            A = K(d), p = K(Array(32).fill(5));
          } else {
            const d = r.readBits(5) + 257, v = r.readBits(5) + 1, m = r.readBits(4) + 4, E = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], y = Array(19).fill(0);
            for (let R = 0; R < m; R++) y[E[R]] = r.readBits(3);
            const T = K(y), w = [];
            for (; w.length < d + v; ) {
              const R = ct(r, T);
              if (R <= 15) w.push(R);
              else if (R === 16) {
                const I = r.readBits(2) + 3, C = w[w.length - 1] || 0;
                for (let Q = 0; Q < I; Q++) w.push(C);
              } else if (R === 17) {
                const I = r.readBits(3) + 3;
                for (let C = 0; C < I; C++) w.push(0);
              } else {
                if (R !== 18) throw Error("Invalid code length symbol");
                {
                  const I = r.readBits(7) + 11;
                  for (let C = 0; C < I; C++) w.push(0);
                }
              }
            }
            const x = w.slice(0, d), N = w.slice(d, d + v);
            A = K(x), p = K(N);
          }
          for (; ; ) {
            const d = ct(r, A);
            if (d < 256) h.push(d);
            else {
              if (d === 256) break;
              if (d > 256 && d < 286) {
                const v = d - 257;
                let m = o[v];
                const E = c[v];
                E && (m += r.readBits(E));
                const y = ct(r, p);
                if (y >= 30) throw Error("Invalid distance symbol");
                let T = l[y];
                const w = u[y];
                w && (T += r.readBits(w));
                const x = h.length - T;
                if (x < 0) throw Error("Invalid distance");
                for (let N = 0; N < m; N++) h.push(h[x + N] || 0);
              } else if (d === 286 || d === 287) throw Error("Reserved length symbol");
            }
          }
        }
      }
    }
  }(new ce(n.subarray(i)), s), new Uint8Array(s);
}
function fe(n) {
  const t = P, e = new Uint8Array(n);
  if (t.readASCII(e, 0, 4) !== "wOFF") throw Error("Invalid WOFF signature");
  const i = t.readUint(e, 4), s = t.readUshort(e, 12), r = t.readUint(e, 16), h = [];
  let o = 44;
  for (let m = 0; m < s; m++) {
    const E = t.readASCII(e, o, 4), y = t.readUint(e, o + 4), T = t.readUint(e, o + 8), w = t.readUint(e, o + 12), x = t.readUint(e, o + 16);
    h.push({ tag: E, offset: y, compLength: T, origLength: w, checksum: x }), o += 20;
  }
  for (const m of h) {
    const E = new Uint8Array(e.buffer, m.offset, m.compLength);
    if (m.compLength === m.origLength) m.data = new Uint8Array(E);
    else if (m.data = ue(E), m.data.length !== m.origLength) if (m.data.length < m.origLength) {
      const y = new Uint8Array(m.origLength);
      y.set(m.data), m.data = y;
    } else m.data = m.data.subarray(0, m.origLength);
  }
  const c = s;
  let l = 1, u = 0;
  for (; l << 1 <= c; ) l <<= 1, u++;
  const f = 16 * l, g = 16 * c - f;
  let A = 12 + 16 * c;
  const p = {};
  for (const m of h) p[m.tag] = A, A = J(A + m.data.length);
  const d = new Uint8Array(Math.max(r || 0, A));
  z(d, 0, i), $(d, 4, c), $(d, 6, f), $(d, 8, u), $(d, 10, g);
  let v = 12;
  for (const m of h) {
    ae(d, v, m.tag), v += 4;
    let E = m.data;
    if (m.tag === "head" && E.length >= 12) {
      const y = new Uint8Array(E);
      z(y, 8, 0), z(d, v, at(y, 0, J(y.length))), v += 4;
    } else
      z(d, v, at(E, 0, J(E.length))), v += 4;
    z(d, v, p[m.tag]), v += 4, z(d, v, m.data.length), v += 4;
  }
  for (const m of h) {
    const E = p[m.tag];
    d.set(m.data, E);
  }
  if (h.find((m) => m.tag === "head")) {
    const m = p.head, E = function(y, T) {
      const w = T + 8, x = [y[w], y[w + 1], y[w + 2], y[w + 3]];
      z(y, w, 0);
      const N = 2981146554 - (at(y, 0, J(y.length)) >>> 0) >>> 0;
      return y[w] = x[0], y[w + 1] = x[1], y[w + 2] = x[2], y[w + 3] = x[3], N >>> 0;
    }(d, m);
    z(d, m + 8, E);
  }
  return d.buffer;
}
const de = { parseTab(n, t, e) {
  const i = { tables: [], ids: {}, off: t };
  n = new Uint8Array(n.buffer, t, e), t = 0;
  const s = P, r = s.readUshort, h = r(n, t += 2);
  t += 2;
  const o = [];
  for (let c = 0; c < h; c++) {
    const l = r(n, t), u = r(n, t += 2);
    t += 2;
    const f = s.readUint(n, t);
    t += 4;
    const g = `p${l}e${u}`;
    let A = o.indexOf(f);
    if (A === -1) {
      let p;
      A = i.tables.length, o.push(f);
      const d = r(n, f);
      p = d === 4 ? this.parse4(n, f) : d === 12 ? this.parse12(n, f) : { format: d }, i.tables.push(p);
    }
    i.ids[g] = A;
  }
  return i;
}, parse4(n, t) {
  const e = P, i = e.readUshort, s = e.readUshorts, r = t, h = i(n, t += 2);
  t += 2;
  const o = i(n, t += 2) >>> 1, c = { format: 4, searchRange: i(n, t += 2), entrySelector: 0, rangeShift: 0, endCount: [], startCount: [], idDelta: [], idRangeOffset: [], glyphIdArray: [] };
  t += 2, c.entrySelector = i(n, t), t += 2, c.rangeShift = i(n, t), t += 2, c.endCount = s(n, t, o), t += 2 * o, t += 2, c.startCount = s(n, t, o), t += 2 * o;
  for (let l = 0; l < o; l++) c.idDelta.push(e.readShort(n, t)), t += 2;
  return c.idRangeOffset = s(n, t, o), t += 2 * o, c.glyphIdArray = s(n, t, r + h - t >> 1), c;
}, parse12(n, t) {
  const e = P.readUint;
  e(n, t += 4), e(n, t += 4);
  const i = e(n, t += 4);
  t += 4;
  const s = new Uint32Array(3 * i);
  for (let r = 0; r < 3 * i; r += 3) s[r] = e(n, t + (r << 2)), s[r + 1] = e(n, t + (r << 2) + 4), s[r + 2] = e(n, t + (r << 2) + 8);
  return { format: 12, groups: s };
} }, ge = { parseTab(n, t, e) {
  const i = P;
  t += 18;
  const s = i.readUshort(n, t);
  t += 2, t += 16;
  const r = i.readShort(n, t);
  t += 2;
  const h = i.readShort(n, t);
  t += 2;
  const o = i.readShort(n, t);
  t += 2;
  const c = i.readShort(n, t);
  return t += 2, t += 6, { unitsPerEm: s, xMin: r, yMin: h, xMax: o, yMax: c, indexToLocFormat: i.readShort(n, t) };
} }, Ae = { parseTab(n, t, e) {
  const i = P;
  t += 4;
  const s = ["ascender", "descender", "lineGap", "advanceWidthMax", "minLeftSideBearing", "minRightSideBearing", "xMaxExtent", "caretSlopeRise", "caretSlopeRun", "caretOffset", "res0", "res1", "res2", "res3", "metricDataFormat", "numberOfHMetrics"], r = {};
  for (let h = 0; h < s.length; h++) {
    const o = s[h], c = o === "advanceWidthMax" || o === "numberOfHMetrics" ? i.readUshort : i.readShort;
    r[o] = c(n, t + 2 * h);
  }
  return r;
} }, pe = { parseTab(n, t, e, i) {
  const s = P, r = [], h = [], o = i.maxp.numGlyphs, c = i.hhea.numberOfHMetrics;
  let l = 0, u = 0, f = 0;
  for (; f < c; ) l = s.readUshort(n, t + (f << 2)), u = s.readShort(n, t + (f << 2) + 2), r.push(l), h.push(u), f++;
  for (; f < o; ) r.push(l), h.push(u), f++;
  return { aWidth: r, lsBearing: h };
} }, Et = { cmap: de, head: ge, hhea: Ae, maxp: { parseTab(n, t, e) {
  const i = P;
  return i.readUint(n, t), t += 4, { numGlyphs: i.readUshort(n, t) };
} }, hmtx: pe, loca: { parseTab(n, t, e, i) {
  const s = P, r = [], h = i.head.indexToLocFormat, o = i.maxp.numGlyphs + 1;
  if (h === 0) for (let c = 0; c < o; c++) r.push(s.readUshort(n, t + (c << 1)) << 1);
  else if (h === 1) for (let c = 0; c < o; c++) r.push(s.readUint(n, t + (c << 2)));
  return r;
} }, glyf: { parseTab(n, t, e, i) {
  const s = [], r = i.maxp.numGlyphs;
  for (let h = 0; h < r; h++) s.push(null);
  return s;
}, xi(n, t) {
  const e = P, i = n.Fi, s = n.loca;
  if (s[t] === s[t + 1]) return null;
  const r = Y.findTable(i, "glyf", n.$i);
  if (!r) return null;
  let h = r[0] + s[t];
  const o = {};
  if (o.noc = e.readShort(i, h), h += 2, o.xMin = e.readShort(i, h), h += 2, o.yMin = e.readShort(i, h), h += 2, o.xMax = e.readShort(i, h), h += 2, o.yMax = e.readShort(i, h), h += 2, o.xMin >= o.xMax || o.yMin >= o.yMax) return null;
  if (o.noc > 0) {
    o.endPts = [];
    for (let g = 0; g < o.noc; g++) o.endPts.push(e.readUshort(i, h)), h += 2;
    const c = e.readUshort(i, h);
    if (h += 2, i.length - h < c) return null;
    h += c;
    const l = o.endPts[o.noc - 1] + 1;
    o.flags = [];
    for (let g = 0; g < l; g++) {
      const A = i[h];
      if (h++, o.flags.push(A), 8 & A) {
        const p = i[h];
        h++;
        for (let d = 0; d < p; d++) o.flags.push(A), g++;
      }
    }
    o.xs = [];
    for (let g = 0; g < l; g++) {
      const A = o.flags[g], p = !!(16 & A);
      2 & A ? (o.xs.push(p ? i[h] : -i[h]), h++) : p ? o.xs.push(0) : (o.xs.push(e.readShort(i, h)), h += 2);
    }
    o.ys = [];
    for (let g = 0; g < l; g++) {
      const A = o.flags[g], p = !!(32 & A);
      4 & A ? (o.ys.push(p ? i[h] : -i[h]), h++) : p ? o.ys.push(0) : (o.ys.push(e.readShort(i, h)), h += 2);
    }
    let u = 0, f = 0;
    for (let g = 0; g < l; g++) u += o.xs[g], f += o.ys[g], o.xs[g] = u, o.ys[g] = f;
  } else o.parts = [], o.endPts = [], o.flags = [], o.xs = [], o.ys = [];
  return o;
} } }, Y = { parse(n) {
  const t = new Uint8Array(n);
  P.readASCII(t, 0, 4) === "wOFF" && (n = fe(n));
  const e = new Uint8Array(n), i = Et, s = {}, r = { Fi: e, Ti: 0, $i: 0 };
  for (const h in i) {
    const o = h, c = Y.findTable(e, o, 0);
    if (c) {
      const [l, u] = c;
      let f = s[l];
      f == null && (f = i[o].parseTab(e, l, u, r), s[l] = f), r[o] = f;
    }
  }
  return [r];
}, findTable(n, t, e) {
  const i = P, s = i.readUshort(n, e + 4);
  let r = e + 12;
  for (let h = 0; h < s; h++) {
    const o = i.readASCII(n, r, 4);
    i.readUint(n, r + 4);
    const c = i.readUint(n, r + 8), l = i.readUint(n, r + 12);
    if (o === t) return [c, l];
    r += 16;
  }
  return null;
}, T: Et, B: P };
class me {
  Pi(t) {
    var i;
    const e = [];
    return (i = t.cmap) != null && i.tables ? (t.cmap.tables.forEach((s) => {
      if (s.format === 4) {
        const r = this.Ei(s);
        e.push(...r);
      } else if (s.format === 12) {
        const r = this.Ri(s);
        e.push(...r);
      }
    }), [...new Set(e)]) : [];
  }
  Ei(t) {
    const e = [];
    if (!(t.startCount && t.endCount && t.idRangeOffset && t.idDelta)) return e;
    for (let i = 0; i < t.startCount.length; i++) {
      const s = t.startCount[i], r = t.endCount[i];
      if (s !== 65535 || r !== 65535) {
        for (let h = s; h <= r; h++)
          if (this.Si(t, h, i) > 0) try {
            const o = String.fromCodePoint(h);
            e.push(o);
          } catch {
          }
      }
    }
    return e;
  }
  Ri(t) {
    const e = [];
    if (!t.groups) return e;
    for (let i = 0; i < t.groups.length; i += 3) {
      const s = t.groups[i], r = t.groups[i + 1], h = t.groups[i + 2];
      for (let o = s; o <= r; o++)
        if (h + (o - s) > 0) try {
          const c = String.fromCodePoint(o);
          e.push(c);
        } catch {
        }
    }
    return e;
  }
  Si(t, e, i) {
    if (t.idRangeOffset[i] === 0) return e + t.idDelta[i] & 65535;
    {
      const s = t.idRangeOffset[i] / 2 + (e - t.startCount[i]) - (t.startCount.length - i);
      if (s >= 0 && t.glyphIdArray && s < t.glyphIdArray.length) {
        const r = t.glyphIdArray[s];
        if (r !== 0) return r + t.idDelta[i] & 65535;
      }
    }
    return 0;
  }
}
class At {
  constructor() {
    a(this, "ki", /* @__PURE__ */ new Map());
    a(this, "zi", /* @__PURE__ */ new Map());
  }
  Ii(t, e) {
    const i = `${this.Oi(t)}_${e}`;
    if (this.ki.has(i)) return this.ki.get(i);
    const s = t.cmap;
    if (!s || !s.tables) return this.ki.set(i, 0), 0;
    let r = 0;
    for (const h of s.tables) if (h.format === 4 ? r = this.Li(e, h) : h.format === 12 && (r = this.Di(e, h)), r > 0) break;
    return this.ki.set(i, r), r;
  }
  Bi(t, e) {
    const i = e.codePointAt(0);
    return i === void 0 ? 0 : this.Ii(t, i);
  }
  Hi(t, e) {
    const i = t.hmtx;
    return i && i.aWidth && i.aWidth.length !== 0 ? e < i.aWidth.length ? i.aWidth[e] : i.aWidth[i.aWidth.length - 1] : 0;
  }
  Gi(t, e) {
    const i = e / t.head.unitsPerEm, s = t.hhea.ascender * i, r = t.hhea.descender * i, h = t.hhea.lineGap * i;
    return { ascender: s, descender: r, lineGap: h, lineHeight: s - r + h, unitsPerEm: t.head.unitsPerEm, scale: i };
  }
  Ni() {
    this.ki.clear(), this.zi.clear();
  }
  Oi(t) {
    return `${t.$i}_${t.Fi.length}`;
  }
  Li(t, e) {
    const i = e.endCount.length;
    let s = -1;
    for (let r = 0; r < i; r++) if (t <= e.endCount[r]) {
      s = r;
      break;
    }
    if (s === -1 || t < e.startCount[s]) return 0;
    if (e.idRangeOffset[s] === 0) return t + e.idDelta[s] & 65535;
    {
      const r = e.idRangeOffset[s] / 2 + (t - e.startCount[s]) - (i - s);
      if (r >= 0 && r < e.glyphIdArray.length) {
        const h = e.glyphIdArray[r];
        return h === 0 ? 0 : h + e.idDelta[s] & 65535;
      }
    }
    return 0;
  }
  Di(t, e) {
    const i = e.groups.length / 3;
    for (let s = 0; s < i; s++) {
      const r = e.groups[3 * s], h = e.groups[3 * s + 1], o = e.groups[3 * s + 2];
      if (t >= r && t <= h) return o + (t - r);
    }
    return 0;
  }
}
class ve {
  constructor(t) {
    a(this, "Xi");
    a(this, "Yi");
    a(this, "j");
    a(this, "Ki");
    this.j = t, this.Ki = new At(), this.Xi = document.createElement("canvas"), this.Yi = this.Xi.getContext("2d", { willReadFrequently: !0, alpha: !0 });
  }
  ji(t, e, i, s) {
    const r = t.length, h = Math.ceil(Math.sqrt(r)), o = Math.ceil(r / h), c = e.width * h, l = e.height * o;
    this.Zi(c, l), this.Wi(t, e, h, i, s);
    const u = this.j.bi(c, l, 1, { filter: "nearest" });
    return u.st(this.Xi), { framebuffer: u, columns: h, rows: o };
  }
  Zi(t, e) {
    this.Xi.width = t, this.Xi.height = e, this.Xi.style.width = t + "px", this.Xi.style.height = e + "px", this.Yi.imageSmoothingEnabled = !1, this.Xi.style.imageRendering = "pixelated", this.Yi.clearRect(0, 0, t, e), this.Yi.textBaseline = "top", this.Yi.textAlign = "left", this.Yi.fillStyle = "white";
  }
  Wi(t, e, i, s, r) {
    const h = s / r.head.unitsPerEm;
    for (let o = 0; o < t.length; o++) {
      const c = o % i, l = Math.floor(o / i), u = t[o].character, f = this.qi(r, u);
      if (!f) continue;
      const g = u.codePointAt(0) || 0, A = this.Ki.Ii(r, g), p = this.Ki.Hi(r, A) * h, d = c * e.width, v = l * e.height, m = d + 0.5 * e.width, E = v + 0.5 * e.height, y = Math.round(m - 0.5 * e.width), T = Math.round(E - 0.5 * s), w = y + 0.5 * (e.width - p), x = T + r.hhea.ascender * h;
      this.Vi(f, w, x, h);
    }
  }
  qi(t, e) {
    const i = e.codePointAt(0) || 0, s = this.Ki.Ii(t, i);
    return s === 0 ? null : Y.T.glyf.xi(t, s);
  }
  Vi(t, e, i, s) {
    if (!t || !t.xs || t.noc === 0) return;
    let { xs: r, ys: h, endPts: o, flags: c } = t;
    if (!(r && h && o && c)) return;
    this.Yi.beginPath();
    let l = 0;
    for (let u = 0; u < o.length; u++) {
      const f = o[u];
      if (!(f < l)) {
        if (f >= l) {
          const g = e + r[l] * s, A = i - h[l] * s;
          this.Yi.moveTo(g, A);
          let p = l + 1;
          for (; p <= f; )
            if (1 & c[p]) {
              const d = e + r[p] * s, v = i - h[p] * s;
              this.Yi.lineTo(d, v), p++;
            } else {
              const d = e + r[p] * s, v = i - h[p] * s;
              if (p + 1 > f) {
                const E = e + r[l] * s, y = i - h[l] * s;
                if (1 & c[l]) this.Yi.quadraticCurveTo(d, v, E, y);
                else {
                  const T = (d + E) / 2, w = (v + y) / 2;
                  this.Yi.quadraticCurveTo(d, v, T, w);
                }
                break;
              }
              const m = p + 1;
              if (1 & c[m]) {
                const E = e + r[m] * s, y = i - h[m] * s;
                this.Yi.quadraticCurveTo(d, v, E, y), p = m + 1;
              } else {
                const E = (d + (e + r[m] * s)) / 2, y = (v + (i - h[m] * s)) / 2;
                this.Yi.quadraticCurveTo(d, v, E, y), p = m;
              }
            }
          this.Yi.closePath();
        }
        l = f + 1;
      }
    }
    this.Yi.fill();
  }
}
class ye {
  constructor() {
    a(this, "Qi");
    this.Qi = new At();
  }
  Ji(t, e, i) {
    let s = 0;
    const r = this.Qi.Gi(i, e), h = r.lineHeight;
    for (const o of t) {
      const c = this.Qi.Bi(i, o);
      if (c === 0) continue;
      const l = this.Qi.Hi(i, c) * r.scale;
      s = Math.max(s, l);
    }
    return { width: Math.ceil(s), height: Math.ceil(h) };
  }
  Ni() {
    this.Qi.Ni();
  }
}
class Ee {
  constructor() {
    a(this, "Ki");
    this.Ki = new At();
  }
  createCharacterObjects(t, e) {
    return t.map((i, s) => {
      const r = i.codePointAt(0) || 0, h = this.tr(s);
      let o = 0;
      if (e.hmtx && e.hmtx.aWidth) {
        const c = this.Ki.Ii(e, r);
        c > 0 && e.hmtx.aWidth[c] !== void 0 && (o = e.hmtx.aWidth[c]);
      }
      return { character: i, unicode: r, color: h, advanceWidth: o };
    });
  }
  tr(t) {
    return [t % 256 / 255, Math.floor(t / 256) % 256 / 255, 0];
  }
  sr(t, e) {
    if (!V.m(typeof t == "string", "Character must be a string.", { method: "getCharacterColor", providedValue: t })) return [0, 0, 0];
    const i = e.find((s) => s.character === t);
    return i ? i.color : [0, 0, 0];
  }
  er(t, e) {
    return V.m(typeof t == "string" && t.length > 0, "Characters must be a string with at least one character.", { method: "getCharacterColors", providedValue: t }) ? Array.from(t).map((i) => this.sr(i, e) || [0, 0, 0]) : [[0, 0, 0]];
  }
}
class pt {
  constructor(t, e = 16) {
    a(this, "ir");
    a(this, "rr", []);
    a(this, "nr");
    a(this, "hr", 16);
    a(this, "ar", 0);
    a(this, "cr", 0);
    a(this, "lr", { width: 0, height: 0 });
    a(this, "ur");
    a(this, "dr", /* @__PURE__ */ new Map());
    a(this, "pr");
    a(this, "gr");
    a(this, "vr");
    a(this, "mr");
    this.hr = e, this.pr = new me(), this.gr = new ve(t), this.vr = new ye(), this.mr = new Ee();
  }
  async _r(t) {
    let e;
    if (t) {
      const i = await fetch(t);
      if (!i.ok) throw new U(`Failed to load font file: ${i.status} ${i.statusText}`);
      e = await i.arrayBuffer();
    } else
      e = await (await fetch("data:font/woff;base64,d09GRgABAAAAABbwAAoAAAAAfywAAQABAAAAAAAAAAAAAAAAAAAAAAAAAABjbWFwAAAA9AAAAbsAAAkgIO8lSWdseWYAAAKwAAAOfgAAaLS4ctN0aGVhZAAAETAAAAAsAAAAOCi8/PVoaGVhAAARXAAAABkAAAAkCwEFAmhtdHgAABF4AAAAhQAABAQEAIOAbG9jYQAAEgAAAAKUAAAECAAy54BtYXhwAAAUlAAAABgAAAAgASIAgm5hbWUAABSsAAAB5wAAA6RWz85KT1MvMgAAFpQAAABFAAAAYM+QEyRwb3N0AAAW3AAAABQAAAAgAGkANHja7dRPSFRRFMfx38wdXblw4cJC7M0bz60gWlULGUFctWgR0UIQQkmDyn27kpAQaaEO2jhWJuafiQFtcDJtSqGhiFZtot5x3jzEVQQhlRJcOb0khiRc1+J94R64uw8cOADCAJT/avwZAiIpRCK3/P999KAS9biOSUxhBhlksYjnWMFrvME7vMca1vEF37ANAwkNqYRKqkk1rdLqscqpVVVQryzbils3rJnocHTWPmgfso/ap+0OuysWjlXHogQKUxVVUw3VUh010DE6QXHqph7qpT66TQmaoAxlaZnyVKC39FHHdbNu0e36or6kr4r4TgsTu75HmEcOy76vUPaVsIFNbOHHX74F3/fyD9+A7ztg1//2de76rH18Z8u+AXqwx/dBN5Z9XfqKiKzLqqzIC8nLkixKThZkXuZkVh7KuNyTuzImKRmVO1KxU7ETMtvmu/lqPptPxjOuKXo3vcveYQ+l2lKlO+Im3H632z3vnis+KaaLKc7zM87yHGc4zdM8zkke5H6+xp3cwRe4jVv5DLdwE5/ik3ycj3Cdk3eWnKfOmDPqJJ3hX9sOCvpPC65QcIWCgv5pPwGY9ak7AHja3V07ryQ5FT62axjQaDWsVmiCFQJpA4QINiAgICDYgICAgICAgICAgICAgIAA//AuF9Xlsn2etqv67iIY6apv3+6yj31e33nYA95FiD4uAAHeA7jyLzoA2Paf/Lp/Dun5W8x/Be/AxyCfO79fnj+e25/ZZzlewcM+3wIhwpfwE/Sc9e8YDyLU1ycF5XUD+to+L98O/An8VKQj0lnOtYdM776OJ71fTVC8//N1rLKDGsXl863OjSl5/iyIUu0HjJ+d+uO3rX3rXd33d/DjfR0/h6/n1iK5kWf36Hf2AxpVa6zU7ZLTnt3Q3wN7+tK6MVcBjUP/3vj56diHuT3YxVbKSvl9FdJHeFE4jfmJn2DSSOS9fuJ27SH7umuoL3oLWGOLxh3f2b8bnn/5Ql8n5SEYFD33q/0lKXxwjQfDOZtGgyEz+W8X5txl2zVb9MXO2S8HfD3ncbHousP6WPV2i/R7C+c06HK5ye/lfdl3Bj5Q2qitaLYhgLQWZY+fr/65A9Ly1r10jI783HOffJWZJ6ee8uuB0nmMXeSqWvRz5Dx/tiWf7H0OF+1DuK7vhy4ffP8An/doofqbQNXTqmlNT1c0v4/Eqpy29eBMLHty0PKZoCMW6VqRlDXNwvbD4RW2MYfyjNdXV3LaJuEdKgXcHvX2nHiz27RxHmC9w/qn0AbS+mJbSeX8pO1zlbbogPK7zJxAs3iFtrV8W/LHsHVZvxJ6Rlt7gum1nvjpnHNO4gFJqaoBWOKFVwKqAangorb2j5KKvG5N31O1ownZdhcZH7FuT9nznoxRv4ylrbfvzA9D88GO8uGDtgN0/1O09ntFlv3YhbIf/ml3/dPGqvi6rCMw6jNd53PM07BnK2eCJXmnzxrruI8ObOuxmZ/dxbd5nS77U7I/xaMdLm5/DXzuLLcwXlOLIVQ0an722pou6raGnpp/QYiwR0V5nwDL0Gk/f2TSUalIGOkSvfNAcVNCesV9a2q675FtsVAk4c5GPEfZT27XVqT9PmpxXtVn0577KO3MGrkXs+xKkHZk6EMUS440uO01t+Ark8yGYYjtsleqoPQksLuF0kOd/7TtbZ3XvNalNRNLqK+90fEDTAfy1FWWOBcT9fkTmrExe+viDNccYF+JqHeIbyBtlYxhStbmSc8DSX9/rICoXkkGSMfEJR7QsYAjNlhgn6iNS7T0AtakNnvaJ+W1TeQdeIxHaHtXaMtU+GP3CL5v+2RqHfc5JC6k9DJ6HhFaHHfu9Lc1Z5HlB5JWNOc8NupiUSlpa/7NIx0W0Ra10YcOVWnDfqhodmgI1CM5nrJS1DYKlMmyeAmoZaLrQnmNSRxAV7qZ0u0sr2Q8WbzUrRivE200nZ+x371Yj+idQH+bsOAFD16woZXuheBJI85UYyA+Ht17bJsTKLHHG+tuQpJX/AGX4eu2lq+vh8gQPgaLUpk1h7fcb1SJ4LEnGb+rdUHRHw96riVV36L5EgdqHNByqCTy82hnkrSSk3k5KTNWnJZ/buTlOvQngiceAkd4OHPz0K+tdOmGUYwJht2kcuBEntSRPOmZfyc40tFqD40IQeb2goGZvKIVzW4G5DMcQ4qOY3zVRzpmo1sMg+U1VemumtLofjFeCcxqJIUnM2vJuQeCHiOOwx4ss7pF6u+PtXxmZApbjCti22JtA+hVxUw7z6Xs2sSzMkeklSLPfwalYkjjt/0bHye4gKkXeaig5MpILVRiAd1vCrtP5Aj5uaN2PF1zxrE7koOgaY2PPL9FkccCKlprUZGr+zr0tw56iCvwGBTs+MFFxVbWeTaCQTj2WCBM1NnoWNxOBpBZU8f00hPsFDr+15wPevNsJG4IN+OGwKyWzKnW8S/GDUHZOd+44SsvbDvCuhYUTQSaQSFeWtoR4Xc833VimVzRvgm58QwZFQTthQ+awgQTeuVI7gLrF638Yixi+ot4RVZ5niDPFxBediyXNj++jUWDgkU3Zc96fDKwv4iiylyA4nalMkLX9C1hf24DNNkZyNDkflOPF4BqwdYbv1vLG9VX03W96PVKiCq+A01i5utY2d9YfSMP0qvQ7eFQUHSKvNfpCl21nqNafqf1UQksqfVe1PEPPNiJpY81iZoP119ZTUHojdpseMYqec5zr/2Jgo695rmycZWzSgOpXzMpbFrHu1Zmq/xA8pX3cgEQZU1/YzaexuQbXIoxF9THdaEzz9VaE5fgNVIPR/sIS8fQyipam9JXqHdOtPEIRllqzP7Ewh9063Z2IYH+GiLNUPFXJIcEM4RYc7bEkjwQL4/1fx+aHL8/62Of5vo3y+p92QX2fh18zrNFcPX9sfZAdBDZu8vxCM4clX31Qr9RrLPkDDDau8v8LZRar2N8lSOj1NGsLJeBZam1TIuwpzwepL3CJAvyANsPnj3BAzsD3a5X6ydEaZUSs50b7g2JrYcyG2lRL+xl+jD+Gfod33w82P0FTuYREa3c70CRS82XCtxIueJHXuIMB6tMt+x7lf7m5U4tyK9L3smuLrxqDxYPI30rYzk2h2NzgPXqAvPrQdqUxvdWF2zVwDrHCq0RoI0Hcrzcn9D8BMxYEMszZBzooqa/jsTxSeTthXTm9FC2n+pYEh8uVqyL9436quMD6pnK7njZM6msy4uYsunVquBSi4clVn8gblYc96TFyF04ll2oqCB300cDIbPxrZoqXZ1DHWvNh2irrNxstSaZYa2VB333tOr9mRcx7ETmXKmSFz6GkidstKjZFE8qIX26eG8KoS/b9uij9GFOiwFIVj5NyErT8rZGstdmD4lc4/xaNevd1uwOPCLX7Ems2TTc81MrUVmzyqdOr1v1PCPat9jmQfUYJEEbzNCSse4DevSYCIXal+bDCC3I2+EeTFKd7ltnFNN0sGLIfRcGfSWKD0BPANWTQIqcNtsaAON/1A/BeywPGhybs2ZEA1sH9FbgDMpTQx5L5k4fN/RR8lBHvif2ftB7oa8isVdrdWDxp/Hp6N8MsdUgqdS0M12EZrhC7TpJZZLZOZelRdeDUyffq3s6xPhztK4Xd9h6f4pIieNu4lI/jEN1XEMjbafK6lry/jkOYedyVMyp2vaHGlM8zBjCkdi28NdrNldgLa/a0orYtN6OwoMh7vPAsxb9eNTDrOdJBWuXsb6En8Evb5yTrJw1Y1XTHnmCFNtPkhHnuN+8QwHGi3JUJf4zeaTJsBpFdnik5V4fZq510ifEHMf7M55f2fteR1DJ73gzf4vyO42Or3Z5mZcWdlY6wb3sRvd0olKfGeaCWm5yGEtDwzLH6yPS95wmcVb2BBrYzig5tGb7Bvb5fkyfvW2nRhlxF3cyz8qGOF//eVLXq7P4oQTop9UASTKPr91h1zu5wu753DbqtXUO8pOT6wzdnQfWn2X3Csr5ktxP4FUmlBHHPThBO0mQ6wTFVxbM5mPCeXWP7ha4YDf8BdvAeaGd/XntlgHlW2eMFAR2CBPYAQzPrGeVy1ieYCOQdtpXGZyss4F2rkr5W8tJh06NTd/HGi+1vbiPN6JTeSfP5k0ihAhRQwgad9wQ1dhoKAntU87DfZy/K8SuEsPg82VQRU5xUGU+ZVrp8SMYtOHiwFC+Z1jLG2dqRuhAw01cZ2qeXBk/ROjaAS1TIuKHVp+Fi5YMrHqqahlY3YbJ0E/N2uUTq/0Cvt717Vfwa/gNfAO/hd/B7+EP8Ef4E/wZ/gJ/hb/B3+Ef8E/4F/z7nla+5T+Afp1wHdQRH/F/+/lF6VrSbuP4v/18VHMVmm7q6TX/Czha0mxJrf+YyNyOfRcYeKSap3+b8UufB8GnJSdec6Iu+toF6nHkaeZxvJ5h4PVgj3ILMz5teArdxnr8/PPoCXqiuvR91zoh2pvS8b0SqUD1FLPubHPaK9Q5lU+GzwI3PgfCOsB9NORgqm5OqfVxLMd1L9+A/s2s+0/0a93MTd3NNRHapruGQLnhZTSzpBMuYFNaz7N5RffPo/MnV2zac3wfRX6Vng0As1cTmE5M38U0eS+H0rvZxXtg6460jlQTZ3Snxw+pO9TKz+mOB5vffTs6umGj+UjMb3/QKfndvlP47UsVAO9Drzo11h+T/rF09Po0st98jHsKh31Ruj2UnbYWLuEd/pM9wOwpZ+KqccfWNZsc4F6c3jtf2ou7Ca6akqXRPThzsadua+/4hq7vgmn6uqux6bXw6AjnLMJbXMM5Ixwi8mR2rc3AOfg2nrs4zZlnDFaChbCtk/bwilwMfBxc0iMYy0MX40x2o/ft9D2Znn9Kl+3MO90HUb747jnzjpyCKVeTuij6DllsctyiUzXN0dgE9We1yK54WBffFqtew9TXpbYfy7dILWH/SXxmqeg4zlvRsZfIbuFnic0SHfRtfj4vsaVq532jl/QpYBykzpe/jec7n1uOmhuETi2xzM5vfy01xQC0vkp6PiKpDd07x6qcUc719K0A1YZjpvLivftqNpzxV/tDtXPTWFrbaowzXj+czsG+nmMt/bQspzj7fnvxeeuG4O/s/Xe412VW3+5VuPT+EV97/r++14Gc3ZvQRHrXMz91IrWHZ4FnK7WOVGjJPfAO3R0BczdLKuevQd5LPVsXd/X8PK6Ll2jK0/NM7P4V1PuI51FvsEMV+KhV4T2+22IQF85a0FlLWXs/IHTOX1B5CGCeEDh6V2ZiTK+eee/dnNjOa2xXz2zndd7sq+XYEZ/Gx/exoK5PoOceWNdnef9W9KCT9EYXqkrPxuhC9GA7faMXpHef1smLTDe1qaDY1N4ozLI4fqsHlwpf+3Cu9F1E/Z4AajG3V8430/6bCdq8QQs9b4OqJyQa1+6BACWaTPI8zrROa//7QGJ19U4tHeTTtePNqu3PnVhXJFSjzZFz4eo3Ndqidi/O6J5Z7X+VsS3cYki51T35Iv+merFeuGe69cbJM3Jq1Fn4kUA5rze4o9CRs22iy5jMsYLMS8g5/wOjbDW/AAB42mNgZGBgAOIzT9tXxvPbfGVgYGEAgZokCXVkmgUizsHABFLNwAAACJYG1HjaY2BkYGBhAAEIyc7AwMiAAhgZAQHPABQAAAB42r1TwRaAIAgD88P59PRA0hxUlw578mBDQOwi0i+oDUzb7nC/xyKH8SuwHH/jSx83jnE745c1RO44G9E1WTE14AQtYvKO6PN6BXRW5EONgCazSS4VXiere+sp7F7cQeSp7Pe2YkaxN7fVFhg/8z/1hfnfaBXnZ8k7wNzp/y13+wRWwErCAAAAeNpl0ylUVVEUBuCtoiKgoiIzAjIIMj9mZBZYMsmMjwcuBhEIBoPBYDAYDAaDwWA0GAwGgsFgMBgMBoPBYDAYDAaDweBnlrX+9e6955x/2oeI//664HbEgTL4HnHwZ8Sh1/AlIm0W3kUc3oN9+BFxJBva4E3E0SvwLCIdR/qniGO98Coiw3vG04hMv5n/fj9GZBUD3iz8xx9FnMiBJxEn0+E+/IrIppNt/VQzvITfEadH4HnEmUG4BV8jchaBn7NZgCMXdy7uXGfzeMjjKZ/PfBwF9hTYU/AhotC5QtpFtIt4K7oLnyOK6RXTKP4TUcJDCe5zNXAHcJTiKOWxlEZZPeAo00U5b+XyltM9vw24KvBWyFzpTOWLiCr5qu6BPdV0qx+Cni+sAc4a3mvw1nqu/RZxsRJkrEsDWeo2wAzq8dY/iGgwpwbfGvTdaA6NOmnUb5PnpiTY00S3SXfN/DU/BustdFrMq8VagqcE/YReEjK3+t4qayuPbTTbdNH2PqJdL+06a5e33VoHjg7vHdY7cXTK2ekedPHWha+b5279ddPo1ndPPuDrkbkH3yX5e/XXy3OvzH34+sy132+//P14B/AO6GuA3qBOB3U6hH/It2Haw2Y2rI9hHV6WdcSsR6eAl1GZx3Qwpr9xcxv3PqGDCbyTvE3KM+muT+lwypkpe6bNaZqfaX6v8j7D8wyNGbwzbyNmdTMrzxxfc9bndDFn5vM8zds37x4smMeCHhf5WTKHJb0uuc/L/C7bs4zrGr2kO5m0ntRZkv8VfazIkvI9RSelg5ReUrKvOrvqHq7p4Lr5retx3fcN/5Mb+Dfs25RpE/8mji0etqzfwLHteZufmzrZobfj/K5ednna0/fe/l+Pca7seNpjYGRgYGRkaGBQYAABJgY0AAAP+ACmeNp1ksFO20AQhv8NgRJaUApSy61LDxVc4uAjNxoJReoNKdCrYy8hZb1rrTcIuPMKfaY+QM899RH6AP3tDJEKqlcefzvzz/xrywD21ScoLK9N3ktW5E3hDl6hL7zG7HvhLrMfhNfxGonwBjUnwj2uz8JbzH4R3sZbPArvIMV34T28wQ+6qG6Puz5+Civyb+EOO/4Ir6GvOsJdaLUrvI53KhXeoGYs3MOu+iq8hai+CW/jo/olvIOiA+E97HeKw/xIp8M0nYQ6O/MunpvZwmbhafv01JK/MKGee6ePB8N/JCFzN6dO+8o4bee5cbnRM+NMyKyuFqHytdHR3MXSF0ZfNQOn93rVORoNm4l64ua3NMjsdYxVfZIkeTBZZC73ZeldPfBhllSLKR0KX2ZzlzyY4BO2JmNjrdeXPtjiAIfIcQTNbz/knWKCgBoZzuDhEHEOgxkWsMyFF9Xne/1Mf8Fdo5i3dY1jDOjz/ymB0eEGp63ao2J/Q5YT8pabqOnQsGn1lvuKjoHRc05Tj4x3jCUzRZu5Wp1winvGl54jruHqjI3C0fVW3qDxuWZ/pEvNPzjhylkxrETR5fQoW09HzYDPwJMm7emm8g5Fq8nIjpWHdronLV0TjJmxXJ4nuGwnWPYcAH8BoeumrAB42mNgYmFgnMDAysDCxMDEAAIQGoiNGc6A+CwMENDAwNDNwFDwGMpliHT00WNwYFBQy4aogJCMgSCSGcJTYGAAAEBYBpIAAAB42mNgZoCANAZjIMnIgAYADecAng==")).arrayBuffer();
    await this.Ar(e), this.ir = Y.parse(e)[0], await this.yr();
  }
  wr(t) {
    if (t === void 0) return this.hr;
    this.hr = t, this.lr = this.vr.Ji(this.rr.map((i) => i.character), this.hr, this.ir);
    const e = this.gr.ji(this.rr, this.lr, this.hr, this.ir);
    this.nr = e.framebuffer, this.ar = e.columns, this.cr = e.rows;
  }
  async br(t) {
    try {
      const e = await fetch(t);
      if (!e.ok) throw new U(`Failed to load font file: ${e.status} ${e.statusText}`);
      const i = await e.arrayBuffer();
      await this.Ar(i);
      const s = Y.parse(i);
      if (!s || s.length === 0) throw Error("Failed to parse font file");
      this.ir = s[0], await this.yr();
    } catch (e) {
      throw new U("Failed to load font: " + (e instanceof Error ? e.message : "Unknown error"), e);
    }
  }
  async Ar(t) {
    const e = Date.now();
    this.ur = new FontFace("CustomFont_" + e, t), await this.ur.load(), document.fonts.add(this.ur);
  }
  async yr() {
    const t = this.pr.Pi(this.ir);
    this.dr.clear(), this.rr = this.mr.createCharacterObjects(t, this.ir), this.lr = this.vr.Ji(t, this.hr, this.ir);
    const e = this.gr.ji(this.rr, this.lr, this.hr, this.ir);
    this.nr = e.framebuffer, this.ar = e.columns, this.cr = e.rows;
  }
  sr(t) {
    return this.mr.sr(t, this.rr);
  }
  er(t) {
    return this.mr.er(t, this.rr);
  }
  getGlyphData(t) {
    if (!Number.isFinite(t)) return null;
    const e = this.dr.get(t);
    if (e !== void 0) return e;
    const i = this.Cr(t);
    if (i < 0) return this.dr.set(t, null), null;
    const s = this.ir.glyf;
    if (!s) return this.dr.set(t, null), null;
    let r = s[i] ?? null;
    return r == null && (r = Y.T.glyf.xi(this.ir, i) ?? null, s[i] = r), this.dr.set(t, r), r;
  }
  Cr(t) {
    const e = this.ir.cmap;
    for (const i of e.tables) if (i.format === 4) {
      const s = i;
      for (let r = 0; r < s.startCount.length; r++) if (t >= s.startCount[r] && t <= s.endCount[r]) {
        if (s.idRangeOffset[r] === 0) return t + s.idDelta[r] & 65535;
        {
          const h = s.idRangeOffset[r] / 2 + (t - s.startCount[r]) - (s.startCount.length - r);
          if (h >= 0 && h < s.glyphIdArray.length) {
            const o = s.glyphIdArray[h];
            if (o !== 0) return o + s.idDelta[r] & 65535;
          }
        }
      }
    } else if (i.format === 12) {
      const s = i;
      for (let r = 0; r < s.groups.length; r += 3) {
        const h = s.groups[r], o = s.groups[r + 1], c = s.groups[r + 2];
        if (t >= h && t <= o) return c + (t - h);
      }
    }
    return 0;
  }
  D() {
    this.nr.D(), document.fonts.delete(this.ur);
  }
  get fontFramebuffer() {
    return this.nr;
  }
  get characters() {
    return this.rr;
  }
  get textureColumns() {
    return this.ar;
  }
  get textureRows() {
    return this.cr;
  }
  get maxGlyphDimensions() {
    return this.lr;
  }
  get fontSize() {
    return this.hr;
  }
  get font() {
    return this.ir;
  }
}
class Ct {
  constructor(t, e, i) {
    a(this, "Mr");
    a(this, "Fr");
    a(this, "H");
    a(this, "G");
    a(this, "$r");
    a(this, "Tr");
    a(this, "Pr");
    a(this, "Er");
    a(this, "Rr");
    this.Pr = t, this.Er = e, this.Rr = i, this.Vs();
  }
  Vs() {
    this.Mr = Math.floor(this.Pr.width / this.Er), this.Fr = Math.floor(this.Pr.height / this.Rr), this.H = this.Mr * this.Er, this.G = this.Fr * this.Rr, this.$r = Math.floor((this.Pr.width - this.H) / 2), this.Tr = Math.floor((this.Pr.height - this.G) / 2);
  }
  Sr(t, e) {
    this.Er = t, this.Rr = e, this.Vs();
  }
  get cellWidth() {
    return this.Er;
  }
  get cellHeight() {
    return this.Rr;
  }
  get cols() {
    return this.Mr;
  }
  get rows() {
    return this.Fr;
  }
  get width() {
    return this.H;
  }
  get height() {
    return this.G;
  }
  get offsetX() {
    return this.$r;
  }
  get offsetY() {
    return this.Tr;
  }
}
const we = /^#([0-9a-f]{3,8})$/i, Te = /^rgba?\(([^)]+)\)$/i;
function lt(n) {
  return Number.isNaN(n) ? 0 : Math.max(0, Math.min(255, n));
}
function be(n) {
  if (!n) return null;
  const t = n.trim().toLowerCase();
  if (!t || t === "transparent") return null;
  let e = null;
  return t.startsWith("#") ? e = function(i) {
    const s = we.exec(i.trim());
    if (!s) return null;
    const r = s[1];
    return r.length === 3 ? [parseInt(r[0] + r[0], 16), parseInt(r[1] + r[1], 16), parseInt(r[2] + r[2], 16), 255] : r.length === 4 ? [parseInt(r[0] + r[0], 16), parseInt(r[1] + r[1], 16), parseInt(r[2] + r[2], 16), parseInt(r[3] + r[3], 16)] : r.length === 6 || r.length === 8 ? [parseInt(r.slice(0, 2), 16), parseInt(r.slice(2, 4), 16), parseInt(r.slice(4, 6), 16), r.length === 8 ? parseInt(r.slice(6, 8), 16) : 255] : null;
  }(t) : t.startsWith("rgb") && (e = function(i) {
    const s = Te.exec(i.trim());
    if (!s) return null;
    const r = s[1].split(",").map((u) => u.trim());
    if (r.length < 3) return null;
    const h = lt(parseFloat(r[0])), o = lt(parseFloat(r[1])), c = lt(parseFloat(r[2])), l = r[3] !== void 0 ? 255 * Math.max(0, Math.min(1, parseFloat(r[3]))) : 255;
    return [h, o, c, Math.round(l)];
  }(t)), e ? e[3] === 0 ? null : e : null;
}
class xe {
  constructor(t = {}) {
    a(this, "Pr");
    a(this, "kr", null);
    a(this, "zr", !1);
    a(this, "Ir");
    this.zr = t.overlay ?? !1, this.zr && t.canvas ? (this.kr = t.canvas, this.Pr = this.Or(), this.Ir = !0, this.Lr()) : t.canvas ? (this.Pr = t.canvas, this.Ir = !1) : (this.Pr = this.Dr(t.width, t.height), this.Ir = !0), this.Pr.style.imageRendering = "pixelated";
  }
  Dr(t, e) {
    const i = document.createElement("canvas");
    return i.className = "textmodeCanvas", i.style.imageRendering = "pixelated", i.width = t || 800, i.height = e || 600, document.body.appendChild(i), i;
  }
  Or() {
    const t = document.createElement("canvas");
    t.className = "textmodeCanvas", t.style.imageRendering = "pixelated";
    const e = this.kr.getBoundingClientRect();
    let i = Math.round(e.width), s = Math.round(e.height);
    if (this.kr instanceof HTMLVideoElement) {
      const o = this.kr;
      (i === 0 || s === 0) && o.videoWidth > 0 && o.videoHeight > 0 && (i = o.videoWidth, s = o.videoHeight);
    }
    t.width = i, t.height = s, t.style.position = "absolute", t.style.pointerEvents = "none";
    const r = window.getComputedStyle(this.kr);
    let h = parseInt(r.zIndex || "0", 10);
    return isNaN(h) && (h = 0), t.style.zIndex = "" + (h + 1), t;
  }
  Lr() {
    var t;
    this.Br(), (t = this.kr.parentNode) == null || t.insertBefore(this.Pr, this.kr.nextSibling);
  }
  Hr() {
    const t = [];
    return this.zr && this.kr instanceof HTMLElement && (t.push(this.kr), this.kr.parentElement && t.push(this.kr.parentElement)), this.Pr.parentElement && t.push(this.Pr.parentElement), t.push(this.Pr), t.push(document.body), t.push(document.documentElement), t;
  }
  Gr() {
    const t = this.Hr();
    for (const e of t) {
      if (!e) continue;
      const i = be(window.getComputedStyle(e).backgroundColor);
      if (i) return i;
    }
    return [255, 255, 255, 255];
  }
  Br() {
    if (!this.kr) return;
    const t = this.kr.getBoundingClientRect();
    let e = this.kr.offsetParent;
    if (e && e !== document.body) {
      const i = e.getBoundingClientRect();
      this.Pr.style.top = t.top - i.top + "px", this.Pr.style.left = t.left - i.left + "px";
    } else this.Pr.style.top = t.top + window.scrollY + "px", this.Pr.style.left = t.left + window.scrollX + "px";
  }
  Nr(t, e) {
    if (this.zr) {
      const i = this.kr.getBoundingClientRect();
      this.Pr.width = Math.round(i.width), this.Pr.height = Math.round(i.height), this.Br();
    } else this.Pr.width = t ?? this.Pr.width, this.Pr.height = e ?? this.Pr.height;
  }
  Xr() {
    const t = this.Pr.getContext("webgl2", { alpha: !0, premultipliedAlpha: !1, preserveDrawingBuffer: !0, antialias: !1, depth: !0, stencil: !1, powerPreference: "high-performance" });
    if (!t) throw new U("`textmode.js` requires WebGL2 support.");
    return t;
  }
  D() {
    const t = this.Pr.getContext("webgl") || this.Pr.getContext("webgl2");
    if (t) {
      const e = t.getExtension("WEBGL_lose_context");
      e == null || e.loseContext();
    }
    this.Ir && this.Pr.parentNode && this.Pr.parentNode.removeChild(this.Pr);
  }
  get canvas() {
    return this.Pr;
  }
  get targetCanvas() {
    return this.kr;
  }
  get width() {
    return this.Pr.width;
  }
  get height() {
    return this.Pr.height;
  }
}
const Re = /^#|0x/gi;
function W(n) {
  return Number.isNaN(n) || !Number.isFinite(n) || n <= 0 ? 0 : n >= 255 ? 255 : Math.round(n);
}
function tt(n) {
  return W(parseInt(n, 16));
}
class F {
  constructor(t, e, i, s, r) {
    a(this, "Yr");
    a(this, "Kr");
    a(this, "Ht");
    a(this, "r");
    a(this, "g");
    a(this, "b");
    a(this, "a");
    this.r = W(t), this.g = W(e), this.b = W(i), this.a = W(s), this.Yr = [this.r, this.g, this.b, this.a], this.Kr = [this.r / 255, this.g / 255, this.b / 255, this.a / 255], this.Ht = r ? [...r] : void 0;
  }
  static jr(t, e, i, s = 255) {
    return new F(t, e, i, s);
  }
  static Zr(t, e = 255) {
    return new F(t, t, t, e);
  }
  static Wr(t) {
    const [e, i, s, r] = function(h) {
      const o = h.replace(Re, ""), c = (l = o).length === 3 || l.length === 4 ? l.split("").map((u) => u + u).join("") : l;
      var l;
      if (c.length !== 6 && c.length !== 8) throw Error("Invalid hex color: " + h);
      return [tt(c.slice(0, 2)), tt(c.slice(2, 4)), tt(c.slice(4, 6)), c.length === 8 ? tt(c.slice(6, 8)) : 255];
    }(t);
    return new F(e, i, s, r);
  }
  static qr(t) {
    const [e, i, s] = t;
    return new F(255 * e, 255 * i, 255 * s, 255, t);
  }
  get rgb() {
    return [this.r, this.g, this.b];
  }
  get rgba() {
    return [...this.Yr];
  }
  get normalized() {
    return [...this.Kr];
  }
  get character() {
    return this.Ht ? [...this.Ht] : void 0;
  }
  static Vr(t) {
    return t instanceof F;
  }
}
const X = class X {
  constructor(t, e, i, s, r, h, o) {
    a(this, "A");
    a(this, "j");
    a(this, "Qr");
    a(this, "Jr");
    a(this, "tn");
    a(this, "H");
    a(this, "G");
    a(this, "Z", null);
    a(this, "$t", 0);
    a(this, "Dt", 0);
    a(this, "Bt", 0);
    a(this, "Tt", 0);
    a(this, "sn", "sampled");
    a(this, "en", "fixed");
    a(this, "Gt", [1, 1, 1, 1]);
    a(this, "Nt", [0, 0, 0, 1]);
    a(this, "rn", [0, 0, 0, 1]);
    a(this, "nn", [[0.1, 0, 0]]);
    a(this, "hn");
    this.A = t, this.j = e, this.Qr = i, this.Jr = s, this.tn = r, this.H = h, this.G = o;
  }
  D() {
    this.A.deleteTexture(this.Qr);
  }
  invert(t = !0) {
    return this.$t = t ? 1 : 0, this.Z = null, this;
  }
  flipX(t = !0) {
    return this.Dt = t ? 1 : 0, this.Z = null, this;
  }
  flipY(t = !0) {
    return this.Bt = t ? 1 : 0, this.Z = null, this;
  }
  charRotation(t) {
    return this.Tt = Tt(t), this.Z = null, this;
  }
  charColorMode(t) {
    return this.sn = t, this.Z = null, this;
  }
  cellColorMode(t) {
    return this.en = t, this.Z = null, this;
  }
  charColor(t, e, i, s) {
    return this.cn(this.Gt, t, e, i, s), this.Z = null, this;
  }
  cellColor(t, e, i, s) {
    return this.cn(this.Nt, t, e, i, s), this.Z = null, this;
  }
  background(t, e, i, s) {
    return this.cn(this.rn, t, e, i, s), this.Z = null, this;
  }
  characters(t) {
    if (!this.hn) throw Error("Glyph color resolver not initialized");
    const e = this.hn(t).filter((i) => Array.isArray(i)).slice(0, 64);
    return this.nn = e, this.Z = null, this;
  }
  get texture() {
    return this.Qr;
  }
  get width() {
    return this.H;
  }
  get height() {
    return this.G;
  }
  get originalWidth() {
    return this.Jr;
  }
  get originalHeight() {
    return this.tn;
  }
  ct() {
    return this.Z || this.lt(), this.Z;
  }
  ln() {
  }
  lt() {
    this.ln();
    const t = this.un(), e = this.fn();
    this.Z = this.j.ft.Be(t, e);
  }
  cn(t, e, i, s, r) {
    if (F.Vr(e)) G(t, e.r, e.g, e.b, e.a);
    else {
      if (typeof e == "string") {
        const h = F.Wr(e);
        return void G(t, h.r, h.g, h.b, h.a);
      }
      G(t, e, i, s, r);
    }
  }
  un() {
    return X.an || (X.an = new q(this.A, st, `#version 300 es
precision highp float;in vec2 v_uv;uniform sampler2D Ug;uniform bool Uh;uniform bool Ui;uniform bool Uj;uniform float Uk;uniform bool Ul;uniform vec4 Um;uniform bool Un;uniform vec4 Uo;uniform vec4 Up;uniform int Uq;uniform vec3 Ur[64];layout(location=0)out vec4 o_character;layout(location=1)out vec4 o_primaryColor;layout(location=2)out vec4 o_secondaryColor;float A(vec3 B){return dot(B,vec3(0.299f,0.587f,0.114f));}void main(){vec2 C=vec2(v_uv.x,1.0f-v_uv.y);vec4 D=texture(Ug,C);float E=A(D.rgb);vec2 F=vec2(0.);if(Uq>0){float G=float(Uq);float H=clamp(E*(G-1.0f),0.0f,G-1.0f);int I=int(floor(H+0.5f));vec3 J=Ur[I];F=J.xy;}else{F=vec2(E,0.0f);}vec4 K=Ul?Um:D;vec4 L=Un?Uo:D;if(D.a<0.01f){K=Up;L=Up;}else{}o_primaryColor=vec4(K.rgb,K.a);o_secondaryColor=vec4(L.rgb,L.a);int M=int(Uh?1:0);int N=int(Ui?1:0);int O=int(Uj?1:0);float P=float(M|(N<<1)|(O<<2))/255.;o_character=vec4(F,P,clamp(Uk,0.0f,1.0f));}`)), X.an;
  }
  fn() {
    return { Ug: this.dn(), Uh: !!this.$t, Ui: !!this.Dt, Uj: !!this.Bt, Uk: this.Tt, Ul: this.sn === "fixed", Um: this.Gt, Un: this.en === "fixed", Uo: this.Nt, Up: this.rn, Uq: this.nn.length, Ur: this.nn };
  }
};
a(X, "an", null);
let rt = X;
class j extends rt {
  constructor(t, e, i, s, r, h, o) {
    const c = Math.min(h / s, o / r);
    super(t, e, i, s, r, Math.max(1, Math.floor(s * c)), Math.max(1, Math.floor(r * c)));
  }
  static pn(t, e, i, s, r) {
    const h = t.context, o = h.createTexture();
    h.bindTexture(h.TEXTURE_2D, o), h.pixelStorei(h.UNPACK_FLIP_Y_WEBGL, 1), et(h, h.NEAREST, h.NEAREST, h.CLAMP_TO_EDGE, h.CLAMP_TO_EDGE), h.texImage2D(h.TEXTURE_2D, 0, h.RGBA, h.RGBA, h.UNSIGNED_BYTE, e), h.bindTexture(h.TEXTURE_2D, null);
    const c = e.naturalWidth ?? e.width ?? e.videoWidth ?? 0, l = e.naturalHeight ?? e.height ?? e.videoHeight ?? 0, u = new j(h, t, o, c, l, i, s);
    return u.hn = r, u;
  }
  dn() {
    return this.Qr;
  }
}
class Mt {
  constructor(t = 60) {
    a(this, "gn");
    a(this, "vn", null);
    a(this, "mn", 0);
    a(this, "_n", !0);
    a(this, "An", 0);
    a(this, "yn", 0);
    a(this, "wn", []);
    a(this, "bn", 10);
    a(this, "Cn", 0);
    this.gn = 1e3 / t;
  }
  Mn(t) {
    if (!this._n) return;
    this.mn = performance.now();
    const e = (i) => {
      if (!this._n) return void (this.vn = null);
      const s = i - this.mn;
      s >= this.gn && (t(), this.mn = i - s % this.gn), this._n && (this.vn = requestAnimationFrame(e));
    };
    this.vn = requestAnimationFrame(e);
  }
  xn() {
    this.vn && (cancelAnimationFrame(this.vn), this.vn = null);
  }
  Fn() {
    this._n && (this._n = !1, this.xn());
  }
  $n(t) {
    this._n || (this._n = !0, this.Mn(t));
  }
  Tn(t, e) {
    if (t === void 0) return this.An;
    this.gn = 1e3 / t, this._n && e && (this.xn(), this.Mn(e));
  }
  Pn() {
    const t = performance.now();
    if (this.yn > 0) {
      const e = t - this.yn;
      this.wn.push(e), this.wn.length > this.bn && this.wn.shift();
      const i = this.wn.reduce((s, r) => s + r, 0) / this.wn.length;
      this.An = 1e3 / i;
    }
    this.yn = t;
  }
  get En() {
    return this._n;
  }
  get Rn() {
    return this.An;
  }
  get Sn() {
    return this.Cn;
  }
  set Sn(t) {
    this.Cn = t;
  }
  kn() {
    this.Cn++;
  }
}
class Nt {
  constructor(t) {
    a(this, "Pr");
    a(this, "zn");
    a(this, "In", { x: -1, y: -1 });
    a(this, "On", { x: -1, y: -1 });
    a(this, "Ln", null);
    a(this, "Dn", 0);
    a(this, "Bn");
    a(this, "Hn");
    a(this, "Gn");
    a(this, "Nn");
    a(this, "Xn");
    a(this, "Yn");
    a(this, "Kn", !1);
    a(this, "jn");
    a(this, "Zn");
    a(this, "Wn");
    a(this, "qn");
    a(this, "Vn");
    this.Pr = t;
  }
  Qn(t) {
    const e = performance.now() + Math.max(0, t);
    e > this.Dn && (this.Dn = e);
  }
  Jn() {
    return performance.now() < this.Dn;
  }
  so(t) {
    const e = this.Pr.canvas;
    e.style.cursor = t == null || t === "" ? "" : t;
  }
  _r(t) {
    this.zn = t, this.eo();
  }
  io() {
    if (this.Kn) return;
    const t = this.Pr.canvas;
    this.Bn = (e) => {
      this.ro(e), this.no(e);
    }, this.Hn = () => {
      this.On = { ...this.In }, this.In.x = -1, this.In.y = -1, this.Ln = null;
    }, this.Gn = (e) => {
      this.ro(e), this.oo(e);
    }, this.Nn = (e) => {
      this.ro(e), this.ho(e);
    }, this.Xn = (e) => {
      this.ro(e), this.ao(e);
    }, this.Yn = (e) => {
      this.ro(e), this.co(e);
    }, t.addEventListener("mousemove", this.Bn, { passive: !0 }), t.addEventListener("mouseleave", this.Hn, { passive: !0 }), t.addEventListener("mousedown", this.Gn, { passive: !0 }), t.addEventListener("mouseup", this.Nn, { passive: !0 }), t.addEventListener("click", this.Xn, { passive: !0 }), t.addEventListener("wheel", this.Yn, { passive: !1 }), this.Kn = !0;
  }
  lo() {
    if (!this.Kn) return;
    const t = this.Pr.canvas;
    t.removeEventListener("mousemove", this.Bn), t.removeEventListener("mouseleave", this.Hn), t.removeEventListener("mousedown", this.Gn), t.removeEventListener("mouseup", this.Nn), t.removeEventListener("click", this.Xn), t.removeEventListener("wheel", this.Yn), this.Kn = !1;
  }
  eo() {
    if (this.Kn) try {
      if (this.Ln) {
        const t = new MouseEvent("mousemove", { clientX: this.Ln.x, clientY: this.Ln.y, bubbles: !1, cancelable: !1 });
        this.ro(t);
      } else this.In.x !== -1 && this.In.y !== -1 && (this.In.x >= this.zn.cols || this.In.y >= this.zn.rows) && (this.In.x = -1, this.In.y = -1);
    } catch {
      this.In.x = -1, this.In.y = -1;
    }
  }
  uo(t) {
    this.jn = t;
  }
  fo(t) {
    this.Zn = t;
  }
  do(t) {
    this.Wn = t;
  }
  po(t) {
    this.qn = t;
  }
  vo(t) {
    this.Vn = t;
  }
  mo() {
    return { x: this.In.x, y: this.In.y };
  }
  no(t) {
    if (this.qn && !this.Jn()) {
      const e = { position: { ...this.In }, previousPosition: { ...this.On }, originalEvent: t };
      this.qn(e);
    }
  }
  oo(t) {
    if (this.Zn && !this.Jn()) {
      const e = { position: { ...this.In }, previousPosition: { ...this.On }, button: t.button, originalEvent: t };
      this.Zn(e);
    }
  }
  ho(t) {
    if (this.Wn && !this.Jn()) {
      const e = { position: { ...this.In }, previousPosition: { ...this.On }, button: t.button, originalEvent: t };
      this.Wn(e);
    }
  }
  ao(t) {
    if (this.jn && !this.Jn()) {
      const e = { position: { ...this.In }, previousPosition: { ...this.On }, button: t.button, originalEvent: t };
      this.jn(e);
    }
  }
  co(t) {
    if (this.Vn && !this.Jn()) {
      const e = { position: { ...this.In }, previousPosition: { ...this.On }, delta: { x: t.deltaX, y: t.deltaY }, originalEvent: t };
      this.Vn(e);
    }
  }
  ro(t) {
    const e = this.Pr.canvas;
    this.On = { ...this.In }, this.Ln = { x: t.clientX, y: t.clientY };
    const i = e.getBoundingClientRect(), s = t.clientX - i.left, r = t.clientY - i.top, h = e.width / i.width, o = r * (e.height / i.height), c = s * h - this.zn.offsetX, l = o - this.zn.offsetY, u = Math.floor(c / this.zn.cellWidth), f = Math.floor(l / this.zn.cellHeight);
    u >= 0 && u < this.zn.cols && f >= 0 && f < this.zn.rows ? (this.In.x = u, this.In.y = f) : (this.In.x = -1, this.In.y = -1);
  }
}
const Pe = Object.freeze(Object.defineProperty({ __proto__: null, MouseManager: Nt }, Symbol.toStringTag, { value: "Module" }));
class Ut {
  constructor() {
    a(this, "_o", /* @__PURE__ */ new Map());
    a(this, "Ao", null);
    a(this, "yo", null);
    a(this, "wo");
    a(this, "bo");
    a(this, "Kn", !1);
    a(this, "Co");
    a(this, "Mo");
    a(this, "xo", { ArrowUp: "UP_ARROW", ArrowDown: "DOWN_ARROW", ArrowLeft: "LEFT_ARROW", ArrowRight: "RIGHT_ARROW", F1: "F1", F2: "F2", F3: "F3", F4: "F4", F5: "F5", F6: "F6", F7: "F7", F8: "F8", F9: "F9", F10: "F10", F11: "F11", F12: "F12", Enter: "ENTER", Return: "RETURN", Tab: "TAB", Escape: "ESCAPE", Backspace: "BACKSPACE", Delete: "DELETE", Insert: "INSERT", Home: "HOME", End: "END", PageUp: "PAGE_UP", PageDown: "PAGE_DOWN", Shift: "SHIFT", Control: "CONTROL", Alt: "ALT", Meta: "META", " ": "SPACE" });
  }
  io() {
    this.Kn || (this.wo = (t) => {
      this.Fo(t);
    }, this.bo = (t) => {
      this.$o(t);
    }, window.addEventListener("keydown", this.wo, { passive: !1 }), window.addEventListener("keyup", this.bo, { passive: !1 }), this.Kn = !0);
  }
  lo() {
    this.Kn && (window.removeEventListener("keydown", this.wo), window.removeEventListener("keyup", this.bo), this.Kn = !1, this._o.clear(), this.Ao = null, this.yo = null);
  }
  fo(t) {
    this.Co = t;
  }
  do(t) {
    this.Mo = t;
  }
  To(t) {
    const e = this.Po(t), i = this._o.get(t) || this._o.get(e);
    return (i == null ? void 0 : i.isPressed) || !1;
  }
  Eo() {
    return this.Ao;
  }
  Ro() {
    return this.yo;
  }
  So() {
    const t = [];
    for (const [e, i] of this._o) i.isPressed && t.push(e);
    return t;
  }
  ko() {
    return { ctrl: this.To("Control"), shift: this.To("Shift"), alt: this.To("Alt"), meta: this.To("Meta") };
  }
  zo() {
    this._o.clear(), this.Ao = null, this.yo = null;
  }
  Fo(t) {
    const e = t.key, i = Date.now();
    this._o.has(e) || this._o.set(e, { isPressed: !1, lastPressTime: 0, lastReleaseTime: 0 });
    const s = this._o.get(e);
    if (!s.isPressed && (s.isPressed = !0, s.lastPressTime = i, this.Ao = e, this.Co)) {
      const r = { key: e, keyCode: t.keyCode, ctrlKey: t.ctrlKey, shiftKey: t.shiftKey, altKey: t.altKey, metaKey: t.metaKey, isPressed: !0, originalEvent: t };
      this.Co(r);
    }
  }
  $o(t) {
    const e = t.key, i = Date.now();
    this._o.has(e) || this._o.set(e, { isPressed: !1, lastPressTime: 0, lastReleaseTime: 0 });
    const s = this._o.get(e);
    if (s.isPressed = !1, s.lastReleaseTime = i, this.yo = e, this.Mo) {
      const r = { key: e, keyCode: t.keyCode, ctrlKey: t.ctrlKey, shiftKey: t.shiftKey, altKey: t.altKey, metaKey: t.metaKey, isPressed: !1, originalEvent: t };
      this.Mo(r);
    }
  }
  Po(t) {
    return this.xo[t] || t.toLowerCase();
  }
}
const Fe = Object.freeze(Object.defineProperty({ __proto__: null, KeyboardManager: Ut }, Symbol.toStringTag, { value: "Module" }));
class It {
  constructor(t, e) {
    a(this, "Pr");
    a(this, "Io");
    a(this, "zn");
    a(this, "Oo", /* @__PURE__ */ new Map());
    a(this, "Lo", /* @__PURE__ */ new Map());
    a(this, "Do", /* @__PURE__ */ new Map());
    a(this, "Bo", null);
    a(this, "Ho");
    a(this, "Go");
    a(this, "No");
    a(this, "Xo");
    a(this, "Yo");
    a(this, "Ko");
    a(this, "Kn", !1);
    a(this, "jo");
    a(this, "Zo");
    a(this, "Wo");
    a(this, "qo");
    a(this, "Vo");
    a(this, "Qo");
    a(this, "Jo");
    a(this, "th");
    a(this, "sh");
    a(this, "eh");
    a(this, "ih", 320);
    a(this, "rh", 350);
    a(this, "nh", 10);
    a(this, "oh", 550);
    a(this, "hh", 14);
    a(this, "ah", 48);
    a(this, "uh", 650);
    a(this, "fh", 0.02);
    a(this, "dh", 2);
    a(this, "ph", 600);
    a(this, "gh", 0);
    a(this, "mh", null);
    this.Pr = t, this.Io = e;
    const i = this.Pr.canvas;
    this.Ho = i.style.touchAction, this.Go = i.style.userSelect, i.style.touchAction || (i.style.touchAction = "none"), i.style.userSelect || (i.style.userSelect = "none");
  }
  _r(t) {
    this.zn = t, this.eo();
  }
  io() {
    if (this.Kn) return;
    const t = this.Pr.canvas;
    this.No = (e) => {
      this._h(e);
    }, this.Xo = (e) => {
      this.Ah(e);
    }, this.Yo = (e) => {
      this.yh(e);
    }, this.Ko = (e) => {
      this.wh(e);
    }, t.addEventListener("touchstart", this.No, { passive: !1 }), t.addEventListener("touchmove", this.Xo, { passive: !1 }), t.addEventListener("touchend", this.Yo, { passive: !1 }), t.addEventListener("touchcancel", this.Ko, { passive: !1 }), this.Kn = !0;
  }
  lo() {
    if (!this.Kn) return;
    const t = this.Pr.canvas;
    t.removeEventListener("touchstart", this.No), t.removeEventListener("touchmove", this.Xo), t.removeEventListener("touchend", this.Yo), t.removeEventListener("touchcancel", this.Ko), this.Kn = !1, this.Bo = null, this.Oo.clear(), this.Lo.clear(), this.Do.forEach((e) => {
      e.longPressTimer !== null && window.clearTimeout(e.longPressTimer);
    }), this.Do.clear(), this.mh = null, this.gh = 0, t.style.touchAction = this.Ho, t.style.userSelect = this.Go;
  }
  eo() {
    if (!this.zn || this.Oo.size === 0) return;
    const t = /* @__PURE__ */ new Map();
    for (const e of this.Oo.values()) {
      const i = this.bh(e.clientX, e.clientY, e.id, e);
      t.set(e.id, i);
    }
    this.Oo = t;
  }
  Ch() {
    return Array.from(this.Oo.values()).map((t) => ({ ...t }));
  }
  Mh(t) {
    this.jo = t;
  }
  po(t) {
    this.Zo = t;
  }
  xh(t) {
    this.Wo = t;
  }
  Fh(t) {
    this.qo = t;
  }
  $h(t) {
    this.Vo = t;
  }
  Th(t) {
    this.Qo = t;
  }
  Ph(t) {
    this.Jo = t;
  }
  Eh(t) {
    this.th = t;
  }
  Rh(t) {
    this.sh = t;
  }
  Sh(t) {
    this.eh = t;
  }
  _h(t) {
    var s;
    if (!this.zn) return;
    t.preventDefault(), (s = this.Io) == null || s.Qn(this.ph);
    const e = performance.now(), i = this.kh(t.changedTouches);
    for (const r of i) {
      const h = this.Oo.get(r.id);
      h && this.Lo.set(r.id, this.zh(h)), this.Oo.set(r.id, r);
      const o = { id: r.id, startPosition: r, lastPosition: r, startTime: e, lastTime: e, longPressTimer: null, longPressFired: !1 };
      this.Jo && (o.longPressTimer = window.setTimeout(() => {
        const c = this.Oo.get(r.id);
        c && (o.longPressFired = !0, this.Jo({ touch: this.zh(c), duration: performance.now() - o.startTime, originalEvent: t }));
      }, this.oh)), this.Do.set(r.id, o), this.jo && this.jo(this.Ih(r, t, void 0, e));
    }
    this.Oo.size === 2 && this.Oh();
  }
  Ah(t) {
    var s;
    if (!this.zn) return;
    t.preventDefault(), (s = this.Io) == null || s.Qn(this.ph);
    const e = performance.now(), i = this.kh(t.changedTouches);
    for (const r of i) {
      const h = this.Oo.get(r.id), o = h ? this.zh(h) : void 0;
      o && this.Lo.set(r.id, o), this.Oo.set(r.id, r);
      const c = this.Do.get(r.id);
      c && (c.lastPosition = r, c.lastTime = e, o) && H(o.clientX, o.clientY, r.clientX, r.clientY) > this.hh && c.longPressTimer !== null && (window.clearTimeout(c.longPressTimer), c.longPressTimer = null), this.Zo && this.Zo(this.Ih(r, t, o, e));
    }
    this.Oo.size === 2 ? this.Lh(t) : this.Bo = null;
  }
  yh(t) {
    if (!this.zn) return;
    t.preventDefault();
    const e = performance.now(), i = this.kh(t.changedTouches);
    for (const s of i) {
      const r = this.Oo.get(s.id), h = r ? this.zh(r) : void 0, o = this.Do.get(s.id);
      o && o.longPressTimer !== null && (window.clearTimeout(o.longPressTimer), o.longPressTimer = null), this.Wo && this.Wo(this.Ih(s, t, h, e)), o && this.Dh(o, t), this.Do.delete(s.id), this.Lo.delete(s.id), this.Oo.delete(s.id);
    }
    this.Oo.size < 2 && (this.Bo = null);
  }
  wh(t) {
    if (!this.zn) return;
    t.preventDefault();
    const e = performance.now(), i = this.kh(t.changedTouches);
    for (const s of i) {
      const r = this.Oo.get(s.id), h = r ? this.zh(r) : void 0, o = this.Do.get(s.id);
      o && o.longPressTimer !== null && (window.clearTimeout(o.longPressTimer), o.longPressTimer = null), this.qo && this.qo(this.Ih(s, t, h, e)), this.Do.delete(s.id), this.Lo.delete(s.id), this.Oo.delete(s.id);
    }
    this.Oo.size < 2 && (this.Bo = null);
  }
  kh(t) {
    const e = [];
    for (let i = 0; i < t.length; i += 1) {
      const s = t.item(i);
      s && e.push(this.Bh(s));
    }
    return e;
  }
  Bh(t) {
    return this.bh(t.clientX, t.clientY, t.identifier, { id: t.identifier, x: -1, y: -1, clientX: t.clientX, clientY: t.clientY, pressure: t.force, radiusX: t.radiusX, radiusY: t.radiusY, rotationAngle: t.rotationAngle });
  }
  bh(t, e, i, s) {
    const r = this.Pr.canvas, h = r.getBoundingClientRect(), o = t - h.left, c = e - h.top, l = r.width / h.width, u = c * (r.height / h.height), f = o * l - this.zn.offsetX, g = u - this.zn.offsetY, A = Math.floor(f / this.zn.cellWidth), p = Math.floor(g / this.zn.cellHeight), d = A >= 0 && A < this.zn.cols && p >= 0 && p < this.zn.rows;
    return { id: i, x: d ? A : -1, y: d ? p : -1, clientX: t, clientY: e, pressure: s.pressure, radiusX: s.radiusX, radiusY: s.radiusY, rotationAngle: s.rotationAngle };
  }
  Ih(t, e, i, s) {
    const r = this.Do.get(t.id), h = Array.from(this.Lo.values()).map((l) => this.zh(l)), o = Array.from(this.Oo.values()).map((l) => this.zh(l)), c = this.kh(e.changedTouches);
    return { touch: this.zh(t), previousTouch: i ? this.zh(i) : void 0, touches: o, previousTouches: h, changedTouches: c, deltaTime: r ? s - r.lastTime : 0, originalEvent: e };
  }
  Oh() {
    if (this.Oo.size !== 2) return void (this.Bo = null);
    const t = Array.from(this.Oo.values()), [e, i] = t, s = H(e.x, e.y, i.x, i.y), r = vt(e.clientX, e.clientY, i.clientX, i.clientY);
    this.Bo = { ids: [e.id, i.id], initialDistance: Math.max(s, 1e-4), initialAngle: r, lastScale: 1, lastRotation: 0 };
  }
  Lh(t) {
    if (this.Bo || this.Oh(), !this.Bo) return;
    const [e, i] = this.Bo.ids, s = this.Oo.get(e), r = this.Oo.get(i);
    if (!s || !r) return;
    const h = H(s.x, s.y, r.x, r.y) / this.Bo.initialDistance, o = h - this.Bo.lastScale;
    this.sh && Math.abs(o) > this.fh && (this.sh({ touches: [this.zh(s), this.zh(r)], scale: h, deltaScale: o, center: this.Hh(s, r), originalEvent: t }), this.Bo.lastScale = h);
    let c = vt(s.clientX, s.clientY, r.clientX, r.clientY) - this.Bo.initialAngle;
    c = (c + 180) % 360 - 180;
    const l = c - this.Bo.lastRotation;
    this.eh && Math.abs(l) > this.dh && (this.eh({ touches: [this.zh(s), this.zh(r)], rotation: c, deltaRotation: l, center: this.Hh(s, r), originalEvent: t }), this.Bo.lastRotation = c);
  }
  Hh(t, e) {
    const i = (t.clientX + e.clientX) / 2, s = (t.clientY + e.clientY) / 2, r = this.bh(i, s, -1, { id: -1, x: -1, y: -1, clientX: i, clientY: s });
    return { x: r.x, y: r.y };
  }
  Dh(t, e) {
    const i = performance.now(), s = i - t.startTime, r = H(t.startPosition.clientX, t.startPosition.clientY, t.lastPosition.clientX, t.lastPosition.clientY);
    if (!t.longPressFired && s <= this.ih && r <= this.nh)
      this.Gh(t.lastPosition, i) && this.Qo ? this.Qo({ touch: this.zh(t.lastPosition), taps: 2, originalEvent: e }) : this.Vo && this.Vo({ touch: this.zh(t.lastPosition), taps: 1, originalEvent: e });
    else if (!t.longPressFired && s <= this.uh && r >= this.ah) {
      const h = { x: t.lastPosition.clientX - t.startPosition.clientX, y: t.lastPosition.clientY - t.startPosition.clientY }, o = Math.max(Math.hypot(h.x, h.y), 1e-4), c = { x: h.x / o, y: h.y / o }, l = { x: h.x / s, y: h.y / s };
      this.th && this.th({ touch: this.zh(t.lastPosition), direction: c, distance: o, velocity: l, originalEvent: e });
    }
    this.gh = i, this.mh = this.zh(t.lastPosition);
  }
  Gh(t, e) {
    return !this.mh || e - this.gh > this.rh ? !1 : H(t.clientX, t.clientY, this.mh.clientX, this.mh.clientY) <= this.nh;
  }
  zh(t) {
    return { ...t };
  }
}
const Ce = Object.freeze(Object.defineProperty({ __proto__: null, TouchManager: It }, Symbol.toStringTag, { value: "Module" }));
class ht extends rt {
  constructor(e, i, s, r, h, o, c, l) {
    const u = h / o;
    let f, g;
    u > 1 ? (f = c, g = Math.round(c / u)) : (g = l, f = Math.round(l * u));
    super(e, i, s, h, o, f, g);
    a(this, "Nh");
    a(this, "Xh", !1);
    a(this, "Yh", []);
    a(this, "An", null);
    a(this, "Kh", 0);
    a(this, "jh", 0);
    a(this, "Zh", -1);
    this.Nh = r;
  }
  D() {
    super.D();
    for (const e of this.Yh) this.A.deleteTexture(e);
    this.Yh = [], this.Nh.pause(), this.Nh.src = "", this.Nh.load();
  }
  Wh() {
    if (!this.Xh && this.Nh.readyState >= this.Nh.HAVE_CURRENT_DATA) {
      const e = this.A;
      e.bindTexture(e.TEXTURE_2D, this.Qr), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, this.Nh), e.bindTexture(e.TEXTURE_2D, null);
    }
  }
  dn() {
    if (this.Xh && this.Yh.length > 0) {
      const e = this.jh % this.Yh.length;
      return this.Yh[e];
    }
    return this.Qr;
  }
  ct() {
    return this.Z = null, super.ct();
  }
  ln() {
    this.Wh();
  }
  async qh(e, i) {
    var s;
    try {
      if (e <= 0) throw Error("Video preload requires a frameRate greater than 0.");
      const r = this.Nh.duration;
      if (!isFinite(r) || r <= 0) throw Error("Video duration is invalid, cannot preload frames.");
      const h = Math.max(1, Math.ceil(r * e));
      if (this.Vh(e, h), await this.Qh(e, i)) return void this.Jh("captureStream", i);
      await this.ta(e, i), this.Jh("seeking", i);
    } catch (r) {
      const h = r instanceof Error ? r : Error(r + "");
      throw (s = i == null ? void 0 : i.onError) == null || s.call(i, h), h;
    }
  }
  Vh(e, i) {
    this.An = e, this.Kh = i, this.Yh = [], this.Xh = !1, this.jh = 0, this.Zh = -1;
  }
  Jh(e, i) {
    var s;
    if (this.Yh.length === 0) throw Error(`Video preload via ${e} completed but produced 0 frames.`);
    this.Kh = this.Yh.length, this.Xh = !0, this.jh = 0, this.Zh = -1, this.Nh.pause(), this.Nh.currentTime = 0, i != null && i.onProgress && i.onProgress({ percent: 100, loadedFrames: this.Kh, totalFrames: this.Kh, strategy: e }), (s = i == null ? void 0 : i.onComplete) == null || s.call(i, { totalFrames: this.Kh, strategy: e });
  }
  sa(e) {
    const i = this.A, s = i.createTexture();
    return i.bindTexture(i.TEXTURE_2D, s), i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, 1), et(i, i.LINEAR, i.LINEAR, i.CLAMP_TO_EDGE, i.CLAMP_TO_EDGE), i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, i.RGBA, i.UNSIGNED_BYTE, e), i.bindTexture(i.TEXTURE_2D, null), s;
  }
  ea(e, i) {
    if (!(i != null && i.onProgress) || this.Kh === 0) return;
    const s = Math.min(99, Math.floor(this.Yh.length / this.Kh * 100)), r = 10 * Math.floor(s / 10);
    r > this.Zh && (this.Zh = r, i.onProgress({ percent: s, loadedFrames: this.Yh.length, totalFrames: this.Kh, strategy: e }));
  }
  async Qh(e, i) {
    const s = globalThis, r = s == null ? void 0 : s.MediaStreamTrackProcessor, h = this.Nh.captureStream;
    if (typeof r != "function" || typeof h != "function") return !1;
    let o, c = null;
    try {
      const l = h.call(this.Nh);
      if (o = l.getVideoTracks()[0], !o) return l.getTracks().forEach((g) => g.stop()), !1;
      if (c = new r({ track: o }).readable.getReader(), this.Nh.currentTime = 0, this.Nh.muted = !0, await this.Nh.play().catch(() => {
      }), this.Nh.paused) return !1;
      const u = 1e6 / e;
      let f = 0;
      for (; this.Yh.length < this.Kh; ) {
        const g = await c.read();
        if (g.done) break;
        const A = g.value;
        if (A) try {
          const p = typeof A.timestamp == "number" ? A.timestamp : f;
          (this.Yh.length === 0 || p >= f) && (this.Yh.push(this.sa(A)), f = p + u, this.ea("captureStream", i));
        } finally {
          A.close();
        }
      }
      return c.releaseLock(), o.stop(), c = null, o = void 0, this.Nh.pause(), this.Nh.currentTime = 0, this.Yh.length !== 0;
    } catch {
      return this.Yh = [], this.Zh = -1, !1;
    } finally {
      if (c) try {
        await c.cancel();
      } catch {
      }
      o && o.stop(), this.Nh.pause(), this.Nh.currentTime = 0;
    }
  }
  async ta(e, i) {
    const s = 1 / e, r = this.Kh, h = this.Nh;
    h.pause();
    for (let o = 0; o < r; o++) {
      const c = Math.min(h.duration, o * s);
      await this.ia(c), this.Yh.push(this.sa(h)), this.ea("seeking", i);
    }
    h.currentTime = 0;
  }
  ia(e) {
    return new Promise((i, s) => {
      const r = this.Nh, h = () => {
        r.removeEventListener("seeked", o), r.removeEventListener("error", c);
      }, o = () => {
        h(), i();
      }, c = () => {
        h(), s(Error("Video seek failed while preloading frames."));
      };
      r.addEventListener("seeked", o, { once: !0 }), r.addEventListener("error", c, { once: !0 });
      const l = isFinite(r.duration) ? r.duration : e, u = Math.min(Math.max(e, 0), l);
      if (Math.abs(r.currentTime - u) < 1e-4) return h(), void i();
      r.currentTime = u;
    });
  }
  frame(e) {
    return this.Xh && e !== void 0 && this.Kh > 0 && (this.jh = (e % this.Kh + this.Kh) % this.Kh, this.Z = null), this;
  }
  static async pn(e, i, s, r, h, o) {
    const c = e.context, l = o == null ? void 0 : o.frameRate;
    let u;
    typeof i == "string" ? (u = document.createElement("video"), u.crossOrigin = "anonymous", u.loop = !0, u.muted = !0, u.playsInline = !0, await new Promise((d, v) => {
      u.addEventListener("loadedmetadata", () => d(), { once: !0 }), u.addEventListener("error", (m) => {
        var y;
        const E = m.target;
        v(Error("Failed to load video: " + (((y = E.error) == null ? void 0 : y.message) || "Unknown error")));
      }, { once: !0 }), u.src = i;
    })) : (u = i, u.readyState < u.HAVE_METADATA && await new Promise((d, v) => {
      u.addEventListener("loadedmetadata", () => d(), { once: !0 }), u.addEventListener("error", (m) => {
        var E;
        return v(Error("Video error: " + ((E = m.target.error) == null ? void 0 : E.message)));
      }, { once: !0 });
    }));
    const f = c.createTexture();
    c.bindTexture(c.TEXTURE_2D, f), c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL, 1), et(c, c.LINEAR, c.LINEAR, c.CLAMP_TO_EDGE, c.CLAMP_TO_EDGE), c.texImage2D(c.TEXTURE_2D, 0, c.RGBA, c.RGBA, c.UNSIGNED_BYTE, u), c.bindTexture(c.TEXTURE_2D, null);
    const g = u.videoWidth, A = u.videoHeight, p = new ht(c, e, f, u, g, A, s, r);
    return p.hn = h, l && l > 0 && await p.qh(l, o), p;
  }
  async play() {
    await this.Nh.play();
  }
  pause() {
    this.Nh.pause();
  }
  stop() {
    this.Nh.pause(), this.Nh.currentTime = 0;
  }
  speed(e) {
    return this.Nh.playbackRate = e, this;
  }
  loop(e = !0) {
    return this.Nh.loop = e, this;
  }
  time(e) {
    return this.Nh.currentTime = e, this;
  }
  volume(e) {
    return this.Nh.volume = Math.max(0, Math.min(1, e)), this;
  }
  get texture() {
    return this.Qr;
  }
  get width() {
    return this.H;
  }
  get height() {
    return this.G;
  }
  get originalWidth() {
    return this.Jr;
  }
  get originalHeight() {
    return this.tn;
  }
  get videoElement() {
    return this.Nh;
  }
  get currentTime() {
    return this.Nh.currentTime;
  }
  get duration() {
    return this.Nh.duration;
  }
  get isPlaying() {
    return !this.Nh.paused && !this.Nh.ended;
  }
  get isPreloaded() {
    return this.Xh;
  }
  get totalFrames() {
    return this.Kh;
  }
  get preloadFrameRate() {
    return this.An;
  }
  get currentFrameIndex() {
    return this.jh;
  }
}
const Me = (n) => class extends n {
  ra(t, e, i, s) {
    if (F.Vr(t)) return t;
    if (typeof t == "number" || typeof t == "string") return this.color(t, e, i, s);
    throw Error("Unsupported color input passed to color-capable method.");
  }
  rotate(t = 0, e = 0, i = 0) {
    this.j.state.Wt(t), this.j.state.qt(e), this.j.state.Vt(i);
  }
  rotateX(t) {
    this.j.state.Wt(t);
  }
  rotateY(t) {
    this.j.state.qt(t);
  }
  rotateZ(t) {
    this.j.state.Vt(t);
  }
  translate(t = 0, e = 0, i = 0) {
    this.j.state.Qt(t, e, i);
  }
  translateX(t) {
    this.j.state.Qt(t, 0, 0);
  }
  translateY(t) {
    this.j.state.Qt(0, t, 0);
  }
  translateZ(t) {
    this.j.state.Qt(0, 0, t);
  }
  push() {
    this.j.state.rt();
  }
  pop() {
    this.j.state.nt();
  }
  color(t, e, i, s) {
    if (F.Vr(t)) return t;
    if (typeof t == "string") {
      const r = Array.from(t);
      if (r.length === 1) {
        const h = r[0], o = this.ir.sr(h);
        return F.qr(o);
      }
      return F.Wr(t);
    }
    if (typeof t == "number") return typeof e == "number" && typeof i == "number" ? F.jr(t, e, i, s ?? 255) : typeof e == "number" && i === void 0 ? F.Zr(t, e) : F.Zr(t, s ?? 255);
    throw Error("Unsupported color input passed to color().");
  }
  rect(t = 1, e = 1) {
    this.j.gi(t, e);
  }
  point() {
    this.j.gi(1, 1);
  }
  line(t, e, i, s) {
    this.j.mi(t, e, i, s);
  }
  lineWeight(t) {
    this.j.state.jt(t);
  }
  background(t, e, i, s = 255) {
    const r = this.ra(t, e, i, s);
    this.j.Ci(r.r, r.g, r.b, r.a);
  }
  char(t) {
    if (F.Vr(t)) {
      const i = t.character;
      return void (i && this.j.state.es(i));
    }
    const e = Array.from(t);
    if (e.length === 0) throw Error("char() requires at least one character.");
    this.j.state.es(this.ir.sr(e[0]));
  }
  charColor(t, e, i, s) {
    const r = this.ra(t, e, i, s);
    this.j.state.rs(r.r, r.g, r.b, r.a);
  }
  cellColor(t, e, i, s) {
    const r = this.ra(t, e, i, s);
    this.j.state.ns(r.r, r.g, r.b, r.a);
  }
  flipX(t) {
    this.j.state.hs(t);
  }
  flipY(t) {
    this.j.state.cs(t);
  }
  charRotation(t) {
    this.j.state.us(t);
  }
  invert(t) {
    this.j.state.ls(t);
  }
  clear() {
    this.j.Ci(0, 0, 0, 0);
  }
  ellipse(t, e) {
    this.j._i(t / 2, e / 2);
  }
  triangle(t, e, i, s, r, h) {
    this.j.Ai(t, e, i, s, r, h);
  }
  bezierCurve(t, e, i, s, r, h, o, c) {
    this.j.yi(t, e, i, s, r, h, o, c);
  }
  arc(t, e, i, s) {
    this.j.wi(t / 2, e / 2, i, s);
  }
  shader(t) {
    this.j.li(t);
  }
  setUniform(t, e) {
    this.j.O(t, e);
  }
  setUniforms(t) {
    this.j.ui(t);
  }
  async createFilterShader(t) {
    if (typeof t == "string" && (t.includes("/") || t.startsWith("./") || t.startsWith("../") || t.endsWith(".frag") || t.endsWith(".glsl"))) {
      const e = await fetch(t);
      if (!e.ok) throw Error(`Failed to load shader from ${t}: ${e.statusText}`);
      const i = await e.text();
      return this.j.fi(i);
    }
    return this.j.fi(t);
  }
  createFramebuffer(t) {
    return this.j.bi(t.width ?? this.grid.cols, t.height ?? this.grid.rows, 3);
  }
  image(t, e, i) {
    this.j.di(t, e, i);
  }
  ortho() {
    this.j.state.ds(!0);
  }
  async loadImage(t) {
    if (typeof t != "string") return j.pn(this.j, t, this.zn.cols, this.zn.rows, (s) => this.ir.er(s));
    const e = t, i = await new Promise((s, r) => {
      const h = new Image();
      h.crossOrigin = "anonymous", h.onload = () => s(h), h.onerror = (o) => r(o), h.src = e;
    });
    return j.pn(this.j, i, this.zn.cols, this.zn.rows, (s) => this.ir.er(s));
  }
  async loadVideo(t, e) {
    return ht.pn(this.j, t, this.zn.cols, this.zn.rows, (i) => this.ir.er(i), e);
  }
}, Ne = (n) => class extends n {
  async loadFont(t) {
    return this.ir.br(t).then(() => {
      const e = this.ir.maxGlyphDimensions;
      this.zn.Sr(e.width, e.height), this.na.resize(this.zn.cols, this.zn.rows), this.j.Mi(), this.Io.eo(), this.oa.eo();
    });
  }
  fontSize(t) {
    if (!V.m(typeof t == "number" && t > 0, "Font size must be a positive number greater than 0.", { method: "fontSize", providedValue: t }) || this.ir.fontSize === t) return;
    this.ir.wr(t);
    const e = this.ir.maxGlyphDimensions;
    this.zn.Sr(e.width, e.height), this.na.resize(this.zn.cols, this.zn.rows), this.j.Mi(), this.Io.eo(), this.oa.eo();
  }
}, Ue = (n) => class extends n {
  get frameCount() {
    return this.ha.Sn;
  }
  set frameCount(t) {
    this.ha.Sn = t;
  }
  frameRate(t) {
    return t === void 0 ? this.ha.Rn : this.ha.Tn(t, () => this.aa());
  }
  noLoop() {
    this.ha.Fn();
  }
  loop() {
    this.ha.$n(() => this.aa());
  }
  redraw(t = 1) {
    if (V.m(typeof t == "number" && t > 0 && Number.isInteger(t), "Redraw count must be a positive integer.", { method: "redraw", providedValue: t })) for (let e = 0; e < t; e++) this.aa();
  }
  isLooping() {
    return this.ha.En;
  }
}, Ie = (n) => class extends n {
  constructor(...t) {
    super(...t);
  }
  mouseClicked(t) {
    this.Io.uo(t);
  }
  mousePressed(t) {
    this.Io.fo(t);
  }
  mouseReleased(t) {
    this.Io.do(t);
  }
  mouseMoved(t) {
    this.Io.po(t);
  }
  mouseScrolled(t) {
    this.Io.vo(t);
  }
  get mouse() {
    return this.Io.mo();
  }
  cursor(t) {
    this.Io.so(t);
  }
}, De = (n) => class extends n {
  constructor(...t) {
    super(...t);
  }
  touchStarted(t) {
    this.oa.Mh(t);
  }
  touchMoved(t) {
    this.oa.po(t);
  }
  touchEnded(t) {
    this.oa.xh(t);
  }
  touchCancelled(t) {
    this.oa.Fh(t);
  }
  tap(t) {
    this.oa.$h(t);
  }
  doubleTap(t) {
    this.oa.Th(t);
  }
  longPress(t) {
    this.oa.Ph(t);
  }
  swipe(t) {
    this.oa.Eh(t);
  }
  pinch(t) {
    this.oa.Rh(t);
  }
  rotateGesture(t) {
    this.oa.Sh(t);
  }
  get touches() {
    return this.oa.Ch();
  }
}, ze = (n) => class extends n {
  constructor(...t) {
    super(...t);
  }
  keyPressed(t) {
    this.ca.fo(t);
  }
  keyReleased(t) {
    this.ca.do(t);
  }
  isKeyPressed(t) {
    return this.ca.To(t);
  }
  get lastKeyPressed() {
    return this.ca.Eo();
  }
  get lastKeyReleased() {
    return this.ca.Ro();
  }
  get pressedKeys() {
    return this.ca.So();
  }
  get modifierState() {
    return this.ca.ko();
  }
};
class Le {
  constructor(t) {
    a(this, "la");
    a(this, "ua", /* @__PURE__ */ new Map());
    a(this, "fa", []);
    a(this, "da", /* @__PURE__ */ new Map());
    a(this, "pa", /* @__PURE__ */ new Map());
    this.la = t;
  }
  async ga(t) {
    for (const e of t) {
      if (this.ua.has(e.name)) return void console.warn(`[textmode.js] Plugin "${e.name}" is already installed.`);
      const i = this.va(e.name);
      try {
        await e.install(this.la, i);
      } catch (s) {
        throw this.ma(e.name), s;
      }
      this.ua.set(e.name, e), this.fa.push(e.name);
    }
  }
  async _a(t) {
    const e = this.ua.get(t);
    if (!e) return;
    const i = this.va(t);
    e.uninstall && await e.uninstall(this.la, i), this.ua.delete(t), this.fa.splice(this.fa.indexOf(t), 1), this.ma(t);
  }
  ya() {
    this.wa(this.da);
  }
  ba() {
    this.wa(this.pa);
  }
  async Ca() {
    const t = [...this.ua.keys()];
    for (const e of t) await this._a(e);
  }
  va(t) {
    return { renderer: this.la.j, font: this.la.ir, grid: this.la.zn, canvas: this.la.Pr, drawFramebuffer: this.la.na, asciiFramebuffer: this.la.Ma, registerPreDrawHook: (e) => this.xa(this.da, t, e), registerPostDrawHook: (e) => this.xa(this.pa, t, e) };
  }
  xa(t, e, i) {
    const s = t.get(e) ?? /* @__PURE__ */ new Set();
    return s.add(i), t.set(e, s), () => {
      const r = t.get(e);
      r && (r.delete(i), r.size === 0 && t.delete(e));
    };
  }
  ma(t) {
    this.da.delete(t), this.pa.delete(t);
  }
  wa(t) {
    for (const e of this.fa) {
      const i = t.get(e);
      i && i.forEach((s) => s());
    }
  }
}
const wt = `#version 300 es
in vec2 A0;in vec2 A1;out vec2 v_uv;void main(){v_uv=A1;gl_Position=vec4(A0,0.,1.);}`;
class Dt {
  constructor() {
    a(this, "Fa", /* @__PURE__ */ new Map());
    a(this, "$a", []);
    a(this, "Ta", 0);
    a(this, "Pa", 0);
    a(this, "Ea");
  }
  get Ra() {
    return this.Ta;
  }
  get Sa() {
    if (this.Ta === 0) return 0;
    let t = 0;
    for (const e of this.$a) {
      const i = this.Fa.get(e);
      i && (t += Math.min(1, Math.max(0, i.progress)) * i.weight);
    }
    return Math.min(1, t / this.Ta);
  }
  ka(t) {
    this.Ea = t;
  }
  za(t, e = 1) {
    const i = `phase-${this.$a.length + 1}-${Date.now()}`, s = { id: i, label: t, weight: Math.max(1e-3, e), progress: 0, status: "running" };
    return this.Fa.set(i, s), this.$a.push(i), this.Ta += s.weight, i;
  }
  Ia(t, e) {
    const i = this.Fa.get(t);
    if (!i) return;
    i.progress = Math.max(0, Math.min(1, e)), i.status = i.progress >= 1 ? "complete" : "running";
    const s = this.Sa;
    Math.abs(s - this.Pa) > 1e-3 && (this.Pa = s, this.Ea && this.Ea(s));
  }
  Oa(t) {
    const e = this.Fa.get(t);
    e && (e.progress = 1, e.status = "complete", this.Ia(t, 1));
  }
  La(t) {
    const e = this.Fa.get(t);
    e && (e.status = "failed");
  }
  Da() {
    return this.$a.map((t) => {
      const e = this.Fa.get(t);
      return e ? { id: e.id, label: e.label, weight: e.weight, progress: e.progress, status: e.status } : { id: t, label: t, weight: 1, progress: 0, status: "pending" };
    });
  }
}
class zt {
  constructor(t = "active") {
    a(this, "Ba");
    a(this, "Ha", "");
    a(this, "Ga", "");
    this.Ba = t;
  }
  get Na() {
    return this.Ba;
  }
  get Xa() {
    return this.Ba !== "disabled";
  }
  get Ya() {
    return this.Ba === "active" || this.Ba === "transitioning" || this.Ba === "error";
  }
  get Ka() {
    return this.Ha;
  }
  get ja() {
    return this.Ga;
  }
  Za() {
    this.Ba !== "done" && this.Ba !== "transitioning" || (this.Ba = "active");
  }
  Wa() {
    this.Ba !== "disabled" && (this.Ba = "done");
  }
  qa() {
    this.Ba !== "disabled" && (this.Ba = "transitioning");
  }
  Va() {
    this.Ba === "transitioning" && (this.Ba = "done");
  }
  Qa(t) {
    this.Ba !== "disabled" && (this.Ba = "error", t instanceof Error ? (this.Ha = t.message, this.Ga = t.stack || "") : (this.Ha = t, this.Ga = ""));
  }
  Ja() {
    this.Ba = "disabled";
  }
}
class Lt {
  constructor(t, e) {
    a(this, "tc", 0);
    a(this, "sc", 1);
    a(this, "ec");
    a(this, "rc");
    this.ec = t, this.rc = e;
  }
  get nc() {
    return this.sc;
  }
  get oc() {
    return this.sc < 1;
  }
  Mn() {
    this.ec !== "none" && this.rc > 0 && (this.tc = performance.now());
  }
  st() {
    if (this.ec === "none" || this.rc === 0) return this.sc = 1, !1;
    const t = performance.now() - this.tc, e = Math.min(1, t / this.rc);
    return e >= 1 ? (this.sc = 0, !0) : (this.sc = 1 - e, !1);
  }
  Vs() {
    this.sc = 1, this.tc = 0;
  }
}
function gt(n, t) {
  const e = n.tone ?? "auto";
  let i = "dark";
  return e === "light" || e === "dark" ? i = e : t && (i = function(s) {
    if (!s) return 0;
    const [r, h, o] = s.map((l) => l / 255), c = (l) => l <= 0.04045 ? l / 12.92 : Math.pow((l + 0.055) / 1.055, 2.4);
    return 0.2126 * c(r) + 0.7152 * c(h) + 0.0722 * c(o);
  }(t) > 0.5 ? "light" : "dark"), { mode: i, background: t, textColor: i === "light" ? "#1A1A1A" : "#F8F8F8", subtleColor: i === "light" ? "#4A4A4A" : "#C0C0C0" };
}
function Bt(n) {
  return n.mode === "light" ? ["#E91E63", "#9C27B0", "#FF6F00"] : ["#8EF9F3", "#F15BB5", "#FF9B71"];
}
function St(n, t) {
  return n.length ? n.map((e) => t.color(e)) : [t.color("#FFFFFF")];
}
const Be = ({ textmodifier: n, grid: t, progress: e, frameCount: i, message: s, palette: r, theme: h, phases: o, transitionOpacity: c, isError: l, errorMessage: u }) => {
  const f = "|/-\\", g = Math.floor(i / 6) % 4, A = n.color(h.textColor), p = Math.floor(255 * c), d = n.color(A.r, A.g, A.b, p);
  if (n.charColor(d), n.cellColor(0, 0, 0, 0), l) {
    const v = n.color(h.mode === "light" ? "#D32F2F" : "#FF6B6B", p);
    n.charColor(v), n.push(), n.translate(0, -2, 0), n.char("X"), n.rect(1, 1), n.pop();
    const m = "SETUP ERROR", E = -Math.floor(m.length / 2);
    n.push(), n.translate(E, 0, 0);
    for (const y of m) n.char(y), n.rect(1, 1), n.translateX(1);
    if (n.pop(), u) {
      const y = n.color(h.subtleColor), T = n.color(y.r, y.g, y.b, p);
      n.charColor(T);
      const w = Math.floor(0.8 * t.cols), x = u.split(" "), N = [];
      let R = "";
      for (const C of x) (R + " " + C).length <= w ? R = R ? R + " " + C : C : (R && N.push(R), R = C);
      R && N.push(R);
      const I = N.slice(0, 3);
      N.length > 3 && (I[2] = I[2].substring(0, w - 3) + "..."), I.forEach((C, Q) => {
        const Xt = -Math.floor(C.length / 2);
        n.push(), n.translate(Xt, 3 + Q, 0);
        for (const Gt of C) n.char(Gt), n.rect(1, 1), n.translateX(1);
        n.pop();
      });
    }
    return;
  }
  if (n.push(), n.translate(0, 0, 0), n.char(f[g]), n.rect(1, 1), n.pop(), e > 0 || o.some((v) => v.status !== "pending")) {
    const v = Math.max(6, Math.floor(0.6 * t.cols)), m = -Math.floor(v / 2), E = Math.floor(v * e), y = r.length ? r : [n.color("#FFFFFF")];
    n.push(), n.translate(m, 3, 0);
    for (let T = 0; T < v; T++) {
      const w = T < E ? "*" : ".", x = y[T % y.length], N = n.color(x.r, x.g, x.b, p);
      n.charColor(N), n.char(w), n.rect(1, 1), n.translateX(1);
    }
    n.pop();
  }
  if (s) {
    const v = n.color(h.subtleColor), m = n.color(v.r, v.g, v.b, p);
    n.charColor(m);
    const E = -Math.floor(s.toUpperCase().length / 2);
    n.push(), n.translate(E, 5, 0);
    for (const y of s.toUpperCase()) n.char(y), n.rect(1, 1), n.translateX(1);
    n.pop();
  }
}, Se = { message: "loading...", tone: "auto", transition: "fade", transitionDuration: 500 };
class Oe {
  constructor(t, e, i) {
    this.hc = t, this.id = e, this.label = i;
  }
  report(t) {
    this.hc.Ia(this.id, t);
  }
  complete() {
    this.hc.Oa(this.id);
  }
  fail(t) {
    this.hc.La(this.id);
  }
  async track(t) {
    try {
      const e = typeof t == "function" ? await t() : await t;
      return this.complete(), e;
    } catch (e) {
      throw this.fail(), e;
    }
  }
}
class Ot {
  constructor(t, e, i) {
    a(this, "la");
    a(this, "l");
    a(this, "ac");
    a(this, "hc");
    a(this, "cc");
    a(this, "lc");
    a(this, "uc");
    a(this, "fc");
    a(this, "dc");
    a(this, "gc");
    a(this, "j");
    a(this, "vc", []);
    a(this, "mc");
    a(this, "_c", performance.now());
    a(this, "yc", 0);
    a(this, "wc", !1);
    a(this, "bc", !1);
    a(this, "Fc");
    this.la = t, this.l = { ...Se, ...e ?? {} }, this.ac = new zt("active"), this.hc = new Dt(), this.cc = new Lt(this.l.transition, this.l.transitionDuration), this.lc = new Mt(60), this.mc = gt(this.l, i);
    const s = Bt(this.mc);
    this.vc = St(s, this.la), this.j = this.Cc(), this.hc.ka((r) => {
      r >= 0.999 && this.Wa();
    });
  }
  async _r(t) {
    if (this.bc) return;
    const e = this.la.j, i = this.la.Pr;
    this.uc = new pt(e, 16), await this.uc._r(t);
    const s = this.uc.maxGlyphDimensions;
    this.fc = new Ct(i.canvas, s.width, s.height), this.dc = e.bi(this.fc.cols, this.fc.rows, 3), this.gc = e.bi(this.fc.width, this.fc.height, 1), this.bc = !0;
  }
  get Ya() {
    return this.ac.Ya && this.wc;
  }
  Mn() {
    this.wc || (this.wc = !0, this._c = performance.now(), this.yc = 0, this.lc.Mn(() => this.Mc()));
  }
  xn() {
    this.wc && (this.wc = !1, this.lc.xn());
  }
  Nr() {
    this.bc && (this.fc.Vs(), this.dc.resize(this.fc.cols, this.fc.rows), this.gc.resize(this.fc.width, this.fc.height));
  }
  D() {
    this.xn(), this.bc && (this.uc.D(), this.dc.D(), this.gc.D(), this.bc = !1);
  }
  get progress() {
    return this.hc.Sa;
  }
  message(t) {
    return typeof t == "string" && (this.l.message = t), this.l.message;
  }
  addPhase(t, e = 1) {
    this.ac.Za();
    const i = this.hc.za(t, e);
    return new Oe(this.hc, i, t);
  }
  Wa() {
    this.l.transition !== "none" && this.l.transitionDuration > 0 ? (this.ac.qa(), this.cc.Mn()) : (this.ac.Wa(), this.xn(), this.xc());
  }
  xc() {
    this.Fc && this.Fc();
  }
  $c(t) {
    this.Fc = t;
  }
  error(t) {
    this.ac.Qa(t);
  }
  Mc() {
    if (this.ac.Ya) {
      if (this.yc++, this.ac.Na === "transitioning" && this.cc.st())
        return this.ac.Va(), this.xc(), void this.xn();
      this.Tc();
    }
  }
  Tc() {
    if (!this.bc) return;
    const t = this.dc, e = this.uc, i = this.fc, s = this.gc, r = this.la.j, h = this.la.Pr, o = this.la.Pc, c = this.la.Ec;
    r.state.Zt(), t.begin(), this.la.clear(), this.la.push();
    try {
      const l = { textmodifier: this.la, grid: i, progress: this.progress, elapsedMs: performance.now() - this._c, frameCount: this.yc, message: this.l.message, palette: this.vc, theme: this.mc, phases: this.hc.Da(), transitionOpacity: this.cc.nc, isError: this.ac.Na === "error", errorMessage: this.ac.Ka || void 0, errorDetails: this.ac.ja || void 0 };
      this.j(l);
    } finally {
      this.la.pop();
    }
    t.end(), s.begin(), r.ai(o), o.I({ U0: e.fontFramebuffer, U1: [e.textureColumns, e.textureRows], U2: t.textures[0], U3: t.textures[1], U4: t.textures[2], U5: [i.cols, i.rows], U6: [s.width, s.height], U7: r.state.canvasBackgroundColor }), r.pi(0, 0, h.width, h.height), s.end(), r.me(...r.state.canvasBackgroundColor), r.ai(c), c.I({ U8: s.textures[0], U9: [s.width, s.height], Ua: [i.offsetX, i.offsetY], Ub: [i.width, i.height] }), r.pi(i.offsetX, i.offsetY, i.width, i.height);
  }
  Rc(t) {
    this.mc = gt(this.l, t);
  }
  Cc() {
    const t = this.l.renderer || Be;
    return (e) => {
      t(e), this.Sc(e);
    };
  }
  Sc(t) {
    const { textmodifier: e, grid: i, frameCount: s, theme: r, transitionOpacity: h } = t, o = [116, 101, 120, 116, 109, 111, 100, 101, 46, 106, 115].map((f) => String.fromCharCode(f)).join(""), c = (i.rows + 1 >> 1) - 2, l = 2 - (i.cols + 1 >> 1), u = r.mode === "light" ? [[233, 30, 99], [156, 39, 176], [255, 111, 0]] : [[142, 249, 243], [241, 91, 181], [255, 155, 113]];
    e.push(), e.translate(l, c, 0);
    for (let f = 0; f < o.length; f++) {
      const g = o[f], A = Math.floor(0.1 * s + 0.5 * f) % u.length, [p, d, v] = u[A], m = Math.floor(255 * h), E = e.color(p, d, v, m);
      e.charColor(E), e.char(g), e.point(), e.translateX(1);
    }
    e.pop();
  }
}
class Xe extends function(e, ...i) {
  return i.reduce((s, r) => r(s), e);
}(class {
}, Me, Ne, Ue, Ie, De, ze) {
  constructor(e = {}) {
    super();
    a(this, "j");
    a(this, "ir");
    a(this, "Pr");
    a(this, "zn");
    a(this, "ha");
    a(this, "Io");
    a(this, "oa");
    a(this, "ca");
    a(this, "kc");
    a(this, "na");
    a(this, "Pc");
    a(this, "Ma");
    a(this, "Ec");
    a(this, "zc");
    a(this, "Ic", !1);
    a(this, "Oc", !1);
    a(this, "Lc", !1);
    a(this, "Dc", !1);
    a(this, "Bc", () => {
    });
    a(this, "Hc", () => {
    });
    a(this, "Gc", () => {
    });
    a(this, "Nc");
    a(this, "Xc");
    a(this, "zr", !1);
    a(this, "Yc");
    this.zc = new Le(this), this.zr = e.overlay ?? !1, this.Pr = new xe(e), this.j = new oe(this.Pr.Xr()), this.ir = new pt(this.j, e.fontSize ?? 16), this.ha = new Mt(e.frameRate ?? 60), this.kc = new Ot(this, e.loadingScreen, this.Pr.Gr()), this.kc.$c(() => {
      this.ha.Sn = 0, this.Dc = !0;
    }), this.Io = new Nt(this.Pr), this.oa = new It(this.Pr, this.Io), this.ca = new Ut(), this.Pc = this.j.ci(wt, `#version 300 es
precision highp float;uniform sampler2D U0;uniform vec2 U1;uniform sampler2D U3;uniform sampler2D U4;uniform sampler2D U2;uniform vec2 U5;uniform vec2 U6;uniform vec4 U7;in vec2 v_uv;out vec4 fragColor;mat2 A(float B){float C=sin(B);float D=cos(B);return mat2(D,-C,C,D);}void main(){vec2 E=gl_FragCoord.xy/U6;vec2 F=E*U5;vec2 G=floor(F);vec2 H=(G+0.5)/U5;vec4 I=texture(U3,H);vec4 J=texture(U4,H);vec4 K=texture(U2,H);int L=int(K.b*255.+0.5);bool M=(L&1)!=0;bool N=(L&2)!=0;bool O=(L&4)!=0;int P=int(K.r*255.+0.5)+int(K.g*255.+0.5)*256;int Q=int(U1.x);int R=P/Q;int S=P-(R*Q);float T=(U1.y-1.)-float(R);vec2 U=1./U1;vec2 V=vec2(float(S),T)*U;vec2 W=V+U;float X=-K.a*360.*0.017453292;vec2 Y=fract(F)-0.5f;vec2 Z=vec2(N?-1.:1.,O?-1.:1.);Y*=Z;Y=A(X)*Y+0.5;vec2 a=V+clamp(Y,0.,1.)*U;const float b=0.0001;if(any(lessThan(a,V-b))||any(greaterThan(a,W+b))){fragColor=M?I:J;return;}vec4 c=texture(U0,a);if(M)c.rgb=mix(c.rgb,1.-c.rgb,float(M));vec4 d=mix(U7,J,J.a);fragColor=mix(d,I,c);}`), this.kc.Mn(), this.Kc(e);
  }
  async Kc(e) {
    await Promise.all([this.ir._r(e.fontSource), this.kc._r(e.fontSource)]);
    const i = this.ir.maxGlyphDimensions;
    this.zn = new Ct(this.Pr.canvas, i.width, i.height), this.Io._r(this.zn), this.oa._r(this.zn), this.na = this.j.bi(this.zn.cols, this.zn.rows, 3), this.Ma = this.j.bi(this.zn.width, this.zn.height, 1), this.zr && (this.Yc = j.pn(this.j, this.Pr.targetCanvas, this.zn.cols, this.zn.rows, (s) => this.ir.er(s))), this.Ec = this.j.ci(wt, `#version 300 es
precision highp float;uniform sampler2D U8;uniform vec2 U9;uniform vec2 Ua;uniform vec2 Ub;in vec2 v_uv;out vec4 fragColor;void main(){vec2 A=gl_FragCoord.xy-Ua;vec2 B=A*(U9/Ub);vec2 C=(floor(B)+0.5)/U9;fragColor=texture(U8,C);}`), this.jc(), this.ha.Mn(() => this.aa()), await this.zc.ga(e.plugins ?? []);
    try {
      await this.Bc(), this.kc.Wa();
    } catch (s) {
      console.error("Error during setup:", s), this.kc.error(s);
    }
  }
  jc() {
    this.Nc = () => {
      this.zr && this.resizeCanvas(this.Pr.targetCanvas.width, this.Pr.targetCanvas.height), this.Gc();
    }, window.addEventListener("resize", this.Nc), this.Io.io(), this.oa.io(), this.ca.io(), window.addEventListener("blur", () => {
      this.ca.zo();
    }), this.zr && (this.Xc = new ResizeObserver(() => {
      this.resizeCanvas(this.Pr.targetCanvas.width, this.Pr.targetCanvas.height);
    }), this.Xc.observe(this.Pr.targetCanvas));
  }
  aa() {
    if (!this.kc.Ya && this.Dc) {
      this.Oc = !0;
      try {
        this.ha.Pn(), this.ha.kn(), this.zr && bt(this.j.context, this.Yc.texture, this.Pr.targetCanvas), this.zc.ya(), this.j.state.Zt(), this.na.begin(), this.Hc(), this.na.end(), this.Ma.begin(), this.j.ai(this.Pc), this.Pc.I({ U0: this.ir.fontFramebuffer, U1: [this.ir.textureColumns, this.ir.textureRows], U2: this.na.textures[0], U3: this.na.textures[1], U4: this.na.textures[2], U5: [this.zn.cols, this.zn.rows], U6: [this.Ma.width, this.Ma.height], U7: this.j.state.canvasBackgroundColor }), this.j.pi(0, 0, this.Pr.width, this.Pr.height), this.Ma.end(), this.j.me(...this.j.state.canvasBackgroundColor), this.j.ai(this.Ec), this.Ec.I({ U8: this.Ma.textures[0], U9: [this.Ma.width, this.Ma.height], Ua: [this.zn.offsetX, this.zn.offsetY], Ub: [this.zn.width, this.zn.height] }), this.j.pi(this.zn.offsetX, this.zn.offsetY, this.zn.width, this.zn.height), this.zc.ba();
      } finally {
        this.Oc = !1, this.Ic && !this.Lc && this.Zc();
      }
    }
  }
  resizeCanvas(e, i) {
    this.Pr.Nr(e, i), this.kc.Rc(this.Pr.Gr()), this.zn.Vs(), this.kc.Nr(), this.na.resize(this.zn.cols, this.zn.rows), this.Ma.resize(this.zn.width, this.zn.height), this.j.Mi(), this.Io.eo(), this.oa.eo(), this.aa();
  }
  destroy() {
    this.Lc || this.Ic || (this.Ic = !0, this.ha.Fn(), this.Oc || this.Zc());
  }
  Zc() {
    var e, i;
    this.Ic = !1, this.kc.D(), this.zc.Ca(), window.removeEventListener("resize", this.Nc), (e = this.Xc) == null || e.disconnect(), this.Io.lo(), this.oa.lo(), this.ca.lo(), this.na.D(), this.Pc.D(), this.ir.D(), this.j.D(), this.Ma.D(), this.Ec.D(), (i = this.Yc) == null || i.D(), this.Pr.D(), this.Lc = !0;
  }
  setup(e) {
    this.Bc = e;
  }
  draw(e) {
    this.Hc = e;
  }
  windowResized(e) {
    this.Gc = e;
  }
  get grid() {
    return this.zn;
  }
  get font() {
    return this.ir;
  }
  get width() {
    return this.Pr.width;
  }
  get height() {
    return this.Pr.height;
  }
  get canvas() {
    return this.Pr.canvas;
  }
  get drawFramebuffer() {
    return this.na;
  }
  get isDisposed() {
    return this.Lc;
  }
  get overlay() {
    return this.Yc;
  }
  get loading() {
    return this.kc;
  }
}
class mt {
  constructor() {
  }
  static create(t = {}) {
    return new Xe(t);
  }
  static setErrorLevel(t) {
    V._(t);
  }
  static get version() {
    return "0.6.0-beta.2";
  }
}
const Ye = Object.freeze(Object.defineProperty({ __proto__: null, LoadingPhaseTracker: Dt, LoadingScreenManager: Ot, LoadingScreenStateMachine: zt, LoadingScreenTransition: Lt, resolveColorInputs: St, resolveDefaultPalette: Bt, resolveTheme: gt }, Symbol.toStringTag, { value: "Module" })), je = Object.freeze(Object.defineProperty({ __proto__: null, TextmodeFont: pt, TextmodeImage: j, TextmodeVideo: ht }, Symbol.toStringTag, { value: "Module" })), _e = Object.freeze(Object.defineProperty({ __proto__: null, keyboard: Fe, mouse: Pe, touch: Ce }, Symbol.toStringTag, { value: "Module" })), He = mt.create, ke = mt.setErrorLevel, Ke = mt.version;
export {
  xe as TextmodeCanvas,
  F as TextmodeColor,
  _t as TextmodeErrorLevel,
  it as TextmodeFramebuffer,
  Ct as TextmodeGrid,
  Xe as Textmodifier,
  He as create,
  _e as input,
  je as loadables,
  Ye as loading,
  ke as setErrorLevel,
  mt as textmode,
  Ke as version
};

import { useState } from "react";

const T = {
  es: {
    register: "Crear cuenta gratis",
    login: "Iniciar sesión",
    forgot: "Recuperar contraseña",
    registerSub: "1 mes gratis · Sin tarjeta de crédito",
    loginSub: "Bienvenido de vuelta a Voxa",
    forgotSub: "Te enviamos un enlace a tu correo",
    googleBtn: "Continuar con Google",
    orSeparator: "o continúa con email",
    nameLabel: "Nombre completo",
    namePlaceholder: "Tu nombre",
    emailLabel: "Correo electrónico",
    emailPlaceholder: "tu@correo.com",
    passLabel: "Contraseña",
    passPlaceholder: "Mínimo 8 caracteres",
    passConfirmLabel: "Confirmar contraseña",
    passConfirmPlaceholder: "Repite tu contraseña",
    registerBtn: "Crear cuenta gratis →",
    loginBtn: "Iniciar sesión →",
    sendBtn: "Enviar enlace →",
    terms: "Al registrarte aceptas nuestros",
    termsLink: "Términos de uso",
    and: "y",
    privacyLink: "Política de privacidad",
    haveAccount: "¿Ya tienes cuenta?",
    noAccount: "¿No tienes cuenta?",
    forgotPass: "¿Olvidaste tu contraseña?",
    backToLogin: "← Volver al inicio de sesión",
    loginLink: "Inicia sesión",
    registerLink: "Créala gratis",
    successTitle: "¡Revisa tu correo!",
    successSub: "Te enviamos un enlace para restablecer tu contraseña.",
    trialBadge: "🎉 1 mes gratis incluido",
    feat1: "Campañas en 52 segundos",
    feat2: "Voxa Score — calidad garantizada",
    feat3: "Multi-canal simultáneo",
    feat4: "Modo Político disponible",
    feat5: "Precio de lanzamiento bloqueado",
    passStrength: ["", "Débil", "Regular", "Buena", "Fuerte"],
    passStrengthLabel: "Seguridad:",
    errorEmail: "Ingresa un correo válido",
    errorPass: "Mínimo 8 caracteres",
    errorMatch: "Las contraseñas no coinciden",
    errorName: "Ingresa tu nombre",
    loading: "Procesando...",
  },
  en: {
    register: "Create free account",
    login: "Sign in",
    forgot: "Reset password",
    registerSub: "1 month free · No credit card required",
    loginSub: "Welcome back to Voxa",
    forgotSub: "We'll send a reset link to your email",
    googleBtn: "Continue with Google",
    orSeparator: "or continue with email",
    nameLabel: "Full name",
    namePlaceholder: "Your name",
    emailLabel: "Email address",
    emailPlaceholder: "you@email.com",
    passLabel: "Password",
    passPlaceholder: "At least 8 characters",
    passConfirmLabel: "Confirm password",
    passConfirmPlaceholder: "Repeat your password",
    registerBtn: "Create free account →",
    loginBtn: "Sign in →",
    sendBtn: "Send reset link →",
    terms: "By signing up you agree to our",
    termsLink: "Terms of Service",
    and: "and",
    privacyLink: "Privacy Policy",
    haveAccount: "Already have an account?",
    noAccount: "Don't have an account?",
    forgotPass: "Forgot your password?",
    backToLogin: "← Back to sign in",
    loginLink: "Sign in",
    registerLink: "Create one free",
    successTitle: "Check your email!",
    successSub: "We sent you a link to reset your password.",
    trialBadge: "🎉 1 month free included",
    feat1: "Campaigns in 52 seconds",
    feat2: "Voxa Score — guaranteed quality",
    feat3: "Simultaneous multi-channel",
    feat4: "Political mode available",
    feat5: "Launch price locked forever",
    passStrength: ["", "Weak", "Fair", "Good", "Strong"],
    passStrengthLabel: "Strength:",
    errorEmail: "Enter a valid email",
    errorPass: "At least 8 characters",
    errorMatch: "Passwords don't match",
    errorName: "Enter your name",
    loading: "Processing...",
  }
};

const STRENGTH_COLOR = ["", "#ef4444", "#f59e0b", "#3b82f6", "#16a34a"];

function getStrength(pass) {
  if (!pass) return 0;
  let s = 0;
  if (pass.length >= 8) s++;
  if (/[A-Z]/.test(pass)) s++;
  if (/[0-9]/.test(pass)) s++;
  if (/[^A-Za-z0-9]/.test(pass)) s++;
  return Math.min(s, 4);
}

function LangToggle({ lang, setLang }) {
  return (
    <div style={{ display: "flex", background: "#f3f4f6", borderRadius: 8, padding: 3, gap: 2 }}>
      {["es","en"].map(l => (
        <button key={l} onClick={() => setLang(l)}
          style={{ padding: "5px 12px", borderRadius: 6, border: "none", cursor: "pointer", fontSize: 12, fontWeight: 700, background: lang === l ? "white" : "transparent", color: lang === l ? "#26215C" : "#9ca3af", boxShadow: lang === l ? "0 1px 4px rgba(0,0,0,.08)" : "none", transition: "all .15s" }}>
          {l === "es" ? "ES" : "EN"}
        </button>
      ))}
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
      <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/>
      <path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
      <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 6.29C4.672 4.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
    </svg>
  );
}

export default function VoxaAuth() {
  const [lang, setLang] = useState("es");
  const [screen, setScreen] = useState("register");
  const [form, setForm] = useState({ name: "", email: "", pass: "", passConfirm: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const t = T[lang];
  const strength = getStrength(form.pass);

  const validate = () => {
    const e = {};
    if (screen === "register" && !form.name.trim()) e.name = t.errorName;
    if (!form.email.includes("@")) e.email = t.errorEmail;
    if (screen !== "forgot" && form.pass.length < 8) e.pass = t.errorPass;
    if (screen === "register" && form.pass !== form.passConfirm) e.passConfirm = t.errorMatch;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async () => {
    if (!validate()) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    if (screen === "forgot") setScreen("success");
  };

  const inp = (hasErr) => ({
    width: "100%", padding: "11px 14px", fontSize: 14, borderRadius: 10,
    border: `1.5px solid ${hasErr ? "#ef4444" : "#e5e7eb"}`,
    fontFamily: "inherit", color: "#111", outline: "none",
    boxSizing: "border-box", background: "white"
  });

  const switchScreen = (to) => { setScreen(to); setErrors({}); setForm({ name: "", email: "", pass: "", passConfirm: "" }); };

  const isRegister = screen === "register";
  const isLogin = screen === "login";
  const isForgot = screen === "forgot";
  const isSuccess = screen === "success";

  return (
    <div style={{ fontFamily: "'Inter',system-ui,sans-serif", minHeight: "100vh", display: "flex" }}>

      {/* LEFT — branding */}
      <div style={{ flex: 1, background: "linear-gradient(145deg,#26215C,#1a1730 50%,#1a1730)", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "40px 48px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, background: "linear-gradient(135deg,#A32D2D,#A32D2D)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "white", fontSize: 18 }}>V</div>
          <span style={{ fontWeight: 900, fontSize: 22, color: "white", letterSpacing: "-0.04em" }}>Voxa</span>
        </div>

        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(167,139,250,0.15)", border: "1px solid rgba(167,139,250,0.25)", borderRadius: 100, padding: "6px 16px", marginBottom: 28 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: "#FAEEDA" }}>{t.trialBadge}</span>
          </div>
          <h2 style={{ fontSize: "clamp(26px,3vw,42px)", fontWeight: 900, color: "white", letterSpacing: "-0.04em", lineHeight: 1.1, margin: "0 0 32px" }}>
            {lang === "es" ? "La plataforma de publicidad con IA más completa de LATAM" : "The most complete AI advertising platform in LATAM"}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[t.feat1, t.feat2, t.feat3, t.feat4, t.feat5].map((f, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(167,139,250,0.2)", border: "1px solid rgba(167,139,250,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ color: "#A32D2D", fontSize: 11, fontWeight: 800 }}>✓</span>
                </div>
                <span style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>{f}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: "20px 22px" }}>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.65, margin: "0 0 14px", fontStyle: "italic" }}>
            {lang === "es" ? '"Con Voxa generé mi primera campaña en un minuto y vendí esa misma semana."' : '"With Voxa I created my first campaign in a minute and made sales that same week."'}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 34, height: 34, borderRadius: "50%", background: "linear-gradient(135deg,#A32D2D,#A32D2D)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "white" }}>LM</div>
            <div>
              <p style={{ fontSize: 13, fontWeight: 700, color: "white", margin: 0 }}>Laura Martínez</p>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", margin: 0 }}>{lang === "es" ? "Tienda de ropa, Bogotá" : "Clothing store, Bogotá"}</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT — form */}
      <div style={{ width: "100%", maxWidth: 460, display: "flex", flexDirection: "column", justifyContent: "center", padding: "40px 44px", background: "white" }}>
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 36 }}>
          <LangToggle lang={lang} setLang={setLang} />
        </div>

        {isSuccess ? (
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 56, marginBottom: 20 }}>📬</div>
            <h2 style={{ fontSize: 24, fontWeight: 900, color: "#08080a", letterSpacing: "-0.03em", margin: "0 0 12px" }}>{t.successTitle}</h2>
            <p style={{ fontSize: 15, color: "#6b7280", margin: "0 0 32px", lineHeight: 1.6 }}>{t.successSub}</p>
            <button onClick={() => switchScreen("login")}
              style={{ padding: "13px 28px", background: "linear-gradient(135deg,#26215C,#A32D2D)", color: "white", border: "none", borderRadius: 11, fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
              {t.backToLogin}
            </button>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: 28 }}>
              <h1 style={{ fontSize: 26, fontWeight: 900, color: "#08080a", letterSpacing: "-0.03em", margin: "0 0 6px" }}>
                {isRegister ? t.register : isLogin ? t.login : t.forgot}
              </h1>
              <p style={{ fontSize: 14, color: "#6b7280", margin: 0 }}>
                {isRegister ? t.registerSub : isLogin ? t.loginSub : t.forgotSub}
              </p>
            </div>

            {!isForgot && (
              <>
                <button style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, padding: "12px", borderRadius: 11, border: "1.5px solid #e5e7eb", background: "white", fontSize: 14, fontWeight: 600, color: "#374151", cursor: "pointer", marginBottom: 18 }}>
                  <GoogleIcon />{t.googleBtn}
                </button>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
                  <div style={{ flex: 1, height: 1, background: "#e5e7eb" }} />
                  <span style={{ fontSize: 12, color: "#9ca3af", fontWeight: 500 }}>{t.orSeparator}</span>
                  <div style={{ flex: 1, height: 1, background: "#e5e7eb" }} />
                </div>
              </>
            )}

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {isRegister && (
                <div>
                  <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.nameLabel}</label>
                  <input value={form.name} onChange={e => { setForm(f => ({ ...f, name: e.target.value })); setErrors(p => ({ ...p, name: "" })); }} placeholder={t.namePlaceholder} style={inp(errors.name)} />
                  {errors.name && <p style={{ fontSize: 11, color: "#ef4444", margin: "4px 0 0" }}>{errors.name}</p>}
                </div>
              )}

              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.emailLabel}</label>
                <input type="email" value={form.email} onChange={e => { setForm(f => ({ ...f, email: e.target.value })); setErrors(p => ({ ...p, email: "" })); }} placeholder={t.emailPlaceholder} style={inp(errors.email)} />
                {errors.email && <p style={{ fontSize: 11, color: "#ef4444", margin: "4px 0 0" }}>{errors.email}</p>}
              </div>

              {!isForgot && (
                <div>
                  <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.passLabel}</label>
                  <div style={{ position: "relative" }}>
                    <input type={showPass ? "text" : "password"} value={form.pass} onChange={e => { setForm(f => ({ ...f, pass: e.target.value })); setErrors(p => ({ ...p, pass: "" })); }} placeholder={t.passPlaceholder} style={{ ...inp(errors.pass), paddingRight: 44 }} />
                    <button onClick={() => setShowPass(s => !s)} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", fontSize: 15, color: "#9ca3af" }}>
                      {showPass ? "🙈" : "👁️"}
                    </button>
                  </div>
                  {errors.pass && <p style={{ fontSize: 11, color: "#ef4444", margin: "4px 0 0" }}>{errors.pass}</p>}
                  {isRegister && form.pass && (
                    <div style={{ marginTop: 8 }}>
                      <div style={{ display: "flex", gap: 4, marginBottom: 4 }}>
                        {[1,2,3,4].map(i => (
                          <div key={i} style={{ flex: 1, height: 3, borderRadius: 2, background: i <= strength ? STRENGTH_COLOR[strength] : "#e5e7eb", transition: "background .3s" }} />
                        ))}
                      </div>
                      <p style={{ fontSize: 11, color: STRENGTH_COLOR[strength], margin: 0, fontWeight: 600 }}>{t.passStrengthLabel} {t.passStrength[strength]}</p>
                    </div>
                  )}
                </div>
              )}

              {isRegister && (
                <div>
                  <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.passConfirmLabel}</label>
                  <input type="password" value={form.passConfirm} onChange={e => { setForm(f => ({ ...f, passConfirm: e.target.value })); setErrors(p => ({ ...p, passConfirm: "" })); }} placeholder={t.passConfirmPlaceholder} style={inp(errors.passConfirm)} />
                  {errors.passConfirm && <p style={{ fontSize: 11, color: "#ef4444", margin: "4px 0 0" }}>{errors.passConfirm}</p>}
                </div>
              )}
            </div>

            {isLogin && (
              <div style={{ textAlign: "right", marginTop: 8 }}>
                <button onClick={() => switchScreen("forgot")} style={{ fontSize: 13, color: "#A32D2D", background: "none", border: "none", cursor: "pointer", fontWeight: 600 }}>{t.forgotPass}</button>
              </div>
            )}

            <button onClick={submit} disabled={loading}
              style={{ width: "100%", marginTop: 22, padding: "14px", background: loading ? "#e5e7eb" : "linear-gradient(135deg,#26215C,#A32D2D)", color: loading ? "#9ca3af" : "white", border: "none", borderRadius: 11, fontSize: 15, fontWeight: 800, cursor: loading ? "not-allowed" : "pointer", boxShadow: loading ? "none" : "0 4px 16px rgba(91,33,182,.3)" }}>
              {loading ? (
                <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                  <span style={{ width: 16, height: 16, border: "2px solid rgba(255,255,255,.4)", borderTopColor: "white", borderRadius: "50%", display: "inline-block", animation: "spin .7s linear infinite" }} />
                  {t.loading}
                </span>
              ) : isRegister ? t.registerBtn : isLogin ? t.loginBtn : t.sendBtn}
            </button>

            {isRegister && (
              <p style={{ fontSize: 12, color: "#9ca3af", textAlign: "center", marginTop: 14, lineHeight: 1.6 }}>
                {t.terms} <a href="#" style={{ color: "#A32D2D", fontWeight: 600, textDecoration: "none" }}>{t.termsLink}</a> {t.and} <a href="#" style={{ color: "#A32D2D", fontWeight: 600, textDecoration: "none" }}>{t.privacyLink}</a>
              </p>
            )}

            <div style={{ textAlign: "center", marginTop: 22 }}>
              {!isForgot ? (
                <p style={{ fontSize: 14, color: "#6b7280", margin: 0 }}>
                  {isRegister ? t.haveAccount : t.noAccount}{" "}
                  <button onClick={() => switchScreen(isRegister ? "login" : "register")} style={{ color: "#A32D2D", background: "none", border: "none", cursor: "pointer", fontWeight: 700, fontSize: 14, textDecoration: "underline" }}>
                    {isRegister ? t.loginLink : t.registerLink}
                  </button>
                </p>
              ) : (
                <button onClick={() => switchScreen("login")} style={{ fontSize: 14, color: "#A32D2D", background: "none", border: "none", cursor: "pointer", fontWeight: 600 }}>
                  {t.backToLogin}
                </button>
              )}
            </div>
          </>
        )}
      </div>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}

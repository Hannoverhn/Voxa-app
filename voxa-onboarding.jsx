import { useState } from "react";

const T = {
  es: {
    welcome: "¡Bienvenido a Voxa!",
    welcomeSub: "Vamos a configurar todo en menos de 1 minuto para que crees tu primera campaña.",
    skip: "Saltar →",
    next: "Continuar →",
    back: "← Atrás",
    finish: "🚀 Empezar a crear",
    step: "Paso",
    of: "de",
    // Step 1 - business type
    s1Title: "¿Qué tipo de negocio tienes?",
    s1Sub: "Esto nos ayuda a personalizar tus campañas desde el inicio.",
    businessTypes: [
      { id: "local", icon: "☕", label: "Negocio local", desc: "Cafetería, salón, restaurante, tienda" },
      { id: "ecommerce", icon: "🛍️", label: "Tienda online", desc: "Ecommerce, ventas por redes" },
      { id: "servicios", icon: "💼", label: "Servicios profesionales", desc: "Consultoría, freelance, agencia" },
      { id: "politico", icon: "🏛️", label: "Campaña política", desc: "Candidato, partido, consultor" },
    ],
    // Step 2 - experience
    s2Title: "¿Cuánta experiencia tienes con publicidad digital?",
    s2Sub: "Así adaptamos las explicaciones a tu nivel.",
    experience: [
      { id: "ninguna", icon: "🌱", label: "Ninguna", desc: "Nunca he publicado un anuncio" },
      { id: "poca", icon: "📈", label: "Poca", desc: "He probado pero sin mucho éxito" },
      { id: "experiencia", icon: "⚡", label: "Tengo experiencia", desc: "Sé manejar Meta Ads o Google Ads" },
      { id: "profesional", icon: "🎯", label: "Soy profesional", desc: "Trabajo en marketing digital" },
    ],
    // Step 3 - goal
    s3Title: "¿Cuál es tu meta principal ahora mismo?",
    s3Sub: "Vamos a enfocar tu primera campaña en esto.",
    goals: [
      { id: "ventas", icon: "💰", label: "Vender más" },
      { id: "clientes", icon: "👥", label: "Conseguir nuevos clientes" },
      { id: "reconocimiento", icon: "📣", label: "Que me conozcan más" },
      { id: "citas", icon: "📅", label: "Agendar citas o reservas" },
    ],
    // Step 4 - tour
    s4Title: "Esto es lo que puedes hacer en Voxa",
    s4Sub: "Un vistazo rápido antes de empezar.",
    features: [
      { icon: "⚡", title: "Generador de campañas", desc: "Describe tu negocio y obtén 3 anuncios listos en 52 segundos" },
      { icon: "🎯", title: "Voxa Score", desc: "Sabrás si tu anuncio va a funcionar antes de publicarlo" },
      { icon: "🎨", title: "Creativos visuales", desc: "Diseña imágenes profesionales sin saber de diseño" },
      { icon: "🌐", title: "Multi-canal", desc: "Publica en Meta, Google y TikTok al mismo tiempo" },
    ],
    personalizedFor: "Personalizado para ti:",
    recommendation: "Te recomendamos empezar con:",
    startCreating: "Crear mi primera campaña",
    summaryBusiness: "Negocio",
    summaryGoal: "Meta",
    summaryLevel: "Experiencia",
  },
  en: {
    welcome: "Welcome to Voxa!",
    welcomeSub: "Let's set everything up in under a minute so you can create your first campaign.",
    skip: "Skip →",
    next: "Continue →",
    back: "← Back",
    finish: "🚀 Start creating",
    step: "Step",
    of: "of",
    s1Title: "What type of business do you have?",
    s1Sub: "This helps us personalize your campaigns from the start.",
    businessTypes: [
      { id: "local", icon: "☕", label: "Local business", desc: "Coffee shop, salon, restaurant, store" },
      { id: "ecommerce", icon: "🛍️", label: "Online store", desc: "Ecommerce, social media sales" },
      { id: "servicios", icon: "💼", label: "Professional services", desc: "Consulting, freelance, agency" },
      { id: "politico", icon: "🏛️", label: "Political campaign", desc: "Candidate, party, consultant" },
    ],
    s2Title: "How much digital advertising experience do you have?",
    s2Sub: "This way we adapt explanations to your level.",
    experience: [
      { id: "ninguna", icon: "🌱", label: "None", desc: "I've never published an ad" },
      { id: "poca", icon: "📈", label: "A little", desc: "I've tried but without much success" },
      { id: "experiencia", icon: "⚡", label: "I have experience", desc: "I know how to use Meta Ads or Google Ads" },
      { id: "profesional", icon: "🎯", label: "I'm a professional", desc: "I work in digital marketing" },
    ],
    s3Title: "What's your main goal right now?",
    s3Sub: "We'll focus your first campaign on this.",
    goals: [
      { id: "ventas", icon: "💰", label: "Sell more" },
      { id: "clientes", icon: "👥", label: "Get new customers" },
      { id: "reconocimiento", icon: "📣", label: "Get more known" },
      { id: "citas", icon: "📅", label: "Book appointments" },
    ],
    s4Title: "Here's what you can do in Voxa",
    s4Sub: "A quick look before you start.",
    features: [
      { icon: "⚡", title: "Campaign generator", desc: "Describe your business and get 3 ready ads in 52 seconds" },
      { icon: "🎯", title: "Voxa Score", desc: "Know if your ad will work before you publish it" },
      { icon: "🎨", title: "Visual creatives", desc: "Design professional images without knowing design" },
      { icon: "🌐", title: "Multi-channel", desc: "Publish on Meta, Google and TikTok at the same time" },
    ],
    personalizedFor: "Personalized for you:",
    recommendation: "We recommend starting with:",
    startCreating: "Create my first campaign",
    summaryBusiness: "Business",
    summaryGoal: "Goal",
    summaryLevel: "Experience",
  }
};

function LangToggle({ lang, setLang }) {
  return (
    <div style={{ display: "flex", background: "#f3f4f6", borderRadius: 8, padding: 3, gap: 2 }}>
      {["es","en"].map(l => (
        <button key={l} onClick={() => setLang(l)}
          style={{ padding: "5px 12px", borderRadius: 6, border: "none", cursor: "pointer", fontSize: 12, fontWeight: 700, background: l === lang ? "white" : "transparent", color: l === lang ? "#26215C" : "#9ca3af", boxShadow: l === lang ? "0 1px 4px rgba(0,0,0,.08)" : "none", transition: "all .15s" }}>
          {l === "es" ? "🇪🇸 ES" : "🇺🇸 EN"}
        </button>
      ))}
    </div>
  );
}

export default function VoxaOnboarding() {
  const [lang, setLang] = useState("es");
  const [step, setStep] = useState(0); // 0=welcome, 1=business, 2=experience, 3=goal, 4=tour
  const [data, setData] = useState({ business: "", experience: "", goal: "" });
  const t = T[lang];
  const totalSteps = 4;

  const canNext = () => {
    if (step === 1) return !!data.business;
    if (step === 2) return !!data.experience;
    if (step === 3) return !!data.goal;
    return true;
  };

  const businessLabel = t.businessTypes.find(b => b.id === data.business)?.label || "";
  const goalLabel = t.goals.find(g => g.id === data.goal)?.label || "";
  const expLabel = t.experience.find(e => e.id === data.experience)?.label || "";

  const getRecommendation = () => {
    if (data.business === "politico") return lang === "es" ? "🏛️ Modo Político" : "🏛️ Political Mode";
    if (data.business === "local") return lang === "es" ? "⚡ Generador estándar + 🎨 Creativos" : "⚡ Standard generator + 🎨 Creatives";
    return lang === "es" ? "⚡ Generador de campañas" : "⚡ Campaign generator";
  };

  const cardBtn = (active) => ({
    display: "flex", alignItems: "center", gap: 14, padding: "16px 18px", borderRadius: 14,
    border: active ? "2px solid #A32D2D" : "1.5px solid #e5e7eb", background: active ? "#FFF5F0" : "white",
    cursor: "pointer", textAlign: "left", transition: "all .15s", width: "100%"
  });

  return (
    <div style={{ fontFamily: "'Inter',system-ui,sans-serif", minHeight: "100vh", background: "linear-gradient(180deg,#faf9ff,#f8f8fc)", display: "flex", flexDirection: "column" }}>

      {/* HEADER */}
      <div style={{ padding: "20px 5%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <div style={{ width: 30, height: 30, background: "linear-gradient(135deg,#26215C,#A32D2D)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "white", fontSize: 14 }}>V</div>
          <span style={{ fontWeight: 900, fontSize: 17, color: "#08080a", letterSpacing: "-0.03em" }}>Voxa</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <LangToggle lang={lang} setLang={setLang} />
          {step > 0 && step < 4 && (
            <button onClick={() => setStep(4)} style={{ fontSize: 13, color: "#9ca3af", background: "none", border: "none", cursor: "pointer", fontWeight: 600 }}>{t.skip}</button>
          )}
        </div>
      </div>

      {/* PROGRESS */}
      {step > 0 && (
        <div style={{ padding: "0 5%", marginBottom: 8 }}>
          <div style={{ maxWidth: 560, margin: "0 auto", display: "flex", gap: 5 }}>
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div key={i} style={{ height: 4, flex: 1, borderRadius: 4, background: i < step ? "linear-gradient(90deg,#26215C,#A32D2D)" : "#e5e7eb", transition: "background .3s" }} />
            ))}
          </div>
        </div>
      )}

      {/* CONTENT */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px 5% 40px" }}>
        <div style={{ maxWidth: 560, width: "100%" }}>

          {/* STEP 0 — WELCOME */}
          {step === 0 && (
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 64, marginBottom: 24 }}>🎉</div>
              <h1 style={{ fontSize: 32, fontWeight: 900, color: "#08080a", letterSpacing: "-0.04em", margin: "0 0 12px", lineHeight: 1.1 }}>{t.welcome}</h1>
              <p style={{ fontSize: 16, color: "#6b7280", margin: "0 0 36px", lineHeight: 1.6, maxWidth: 420, marginLeft: "auto", marginRight: "auto" }}>{t.welcomeSub}</p>
              <button onClick={() => setStep(1)}
                style={{ padding: "15px 36px", borderRadius: 12, border: "none", background: "linear-gradient(135deg,#26215C,#A32D2D)", color: "white", fontSize: 16, fontWeight: 800, cursor: "pointer", boxShadow: "0 4px 20px rgba(91,33,182,.3)" }}>
                {t.next}
              </button>
            </div>
          )}

          {/* STEP 1 — BUSINESS TYPE */}
          {step === 1 && (
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, color: "#A32D2D", textTransform: "uppercase", letterSpacing: "0.07em", margin: "0 0 8px", textAlign: "center" }}>{t.step} 1 {t.of} {totalSteps}</p>
              <h2 style={{ fontSize: 26, fontWeight: 900, color: "#08080a", letterSpacing: "-0.03em", margin: "0 0 8px", textAlign: "center" }}>{t.s1Title}</h2>
              <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 28px", textAlign: "center" }}>{t.s1Sub}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {t.businessTypes.map(b => (
                  <button key={b.id} onClick={() => setData(d => ({ ...d, business: b.id }))} style={cardBtn(data.business === b.id)}>
                    <span style={{ fontSize: 30, flexShrink: 0 }}>{b.icon}</span>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: 15, fontWeight: 700, color: "#08080a", margin: "0 0 2px" }}>{b.label}</p>
                      <p style={{ fontSize: 13, color: "#9ca3af", margin: 0 }}>{b.desc}</p>
                    </div>
                    {data.business === b.id && <span style={{ color: "#A32D2D", fontSize: 18, fontWeight: 800 }}>✓</span>}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2 — EXPERIENCE */}
          {step === 2 && (
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, color: "#A32D2D", textTransform: "uppercase", letterSpacing: "0.07em", margin: "0 0 8px", textAlign: "center" }}>{t.step} 2 {t.of} {totalSteps}</p>
              <h2 style={{ fontSize: 26, fontWeight: 900, color: "#08080a", letterSpacing: "-0.03em", margin: "0 0 8px", textAlign: "center" }}>{t.s2Title}</h2>
              <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 28px", textAlign: "center" }}>{t.s2Sub}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {t.experience.map(e => (
                  <button key={e.id} onClick={() => setData(d => ({ ...d, experience: e.id }))} style={cardBtn(data.experience === e.id)}>
                    <span style={{ fontSize: 26, flexShrink: 0 }}>{e.icon}</span>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: 15, fontWeight: 700, color: "#08080a", margin: "0 0 2px" }}>{e.label}</p>
                      <p style={{ fontSize: 13, color: "#9ca3af", margin: 0 }}>{e.desc}</p>
                    </div>
                    {data.experience === e.id && <span style={{ color: "#A32D2D", fontSize: 18, fontWeight: 800 }}>✓</span>}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3 — GOAL */}
          {step === 3 && (
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, color: "#A32D2D", textTransform: "uppercase", letterSpacing: "0.07em", margin: "0 0 8px", textAlign: "center" }}>{t.step} 3 {t.of} {totalSteps}</p>
              <h2 style={{ fontSize: 26, fontWeight: 900, color: "#08080a", letterSpacing: "-0.03em", margin: "0 0 8px", textAlign: "center" }}>{t.s3Title}</h2>
              <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 28px", textAlign: "center" }}>{t.s3Sub}</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {t.goals.map(g => (
                  <button key={g.id} onClick={() => setData(d => ({ ...d, goal: g.id }))}
                    style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, padding: "24px 16px", borderRadius: 14, border: data.goal === g.id ? "2px solid #A32D2D" : "1.5px solid #e5e7eb", background: data.goal === g.id ? "#FFF5F0" : "white", cursor: "pointer", transition: "all .15s", position: "relative" }}>
                    <span style={{ fontSize: 32 }}>{g.icon}</span>
                    <span style={{ fontSize: 14, fontWeight: 700, color: data.goal === g.id ? "#26215C" : "#08080a", textAlign: "center" }}>{g.label}</span>
                    {data.goal === g.id && <span style={{ position: "absolute", top: 10, right: 12, color: "#A32D2D", fontSize: 16, fontWeight: 800 }}>✓</span>}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4 — TOUR + SUMMARY */}
          {step === 4 && (
            <div>
              <h2 style={{ fontSize: 26, fontWeight: 900, color: "#08080a", letterSpacing: "-0.03em", margin: "0 0 8px", textAlign: "center" }}>{t.s4Title}</h2>
              <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 24px", textAlign: "center" }}>{t.s4Sub}</p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24 }}>
                {t.features.map((f, i) => (
                  <div key={i} style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 14, padding: "18px" }}>
                    <div style={{ width: 38, height: 38, background: "#FFF5F0", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, marginBottom: 10 }}>{f.icon}</div>
                    <p style={{ fontSize: 13, fontWeight: 700, color: "#08080a", margin: "0 0 4px" }}>{f.title}</p>
                    <p style={{ fontSize: 12, color: "#9ca3af", margin: 0, lineHeight: 1.5 }}>{f.desc}</p>
                  </div>
                ))}
              </div>

              {(data.business || data.goal) && (
                <div style={{ background: "linear-gradient(135deg,#1a1730,#1a1730)", borderRadius: 16, padding: "22px 24px", marginBottom: 20 }}>
                  <p style={{ fontSize: 11, fontWeight: 700, color: "#A32D2D", textTransform: "uppercase", letterSpacing: "0.07em", margin: "0 0 12px" }}>{t.personalizedFor}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 14 }}>
                    {businessLabel && <span style={{ fontSize: 12, fontWeight: 600, color: "white", background: "rgba(255,255,255,0.1)", padding: "5px 12px", borderRadius: 20 }}>{t.summaryBusiness}: {businessLabel}</span>}
                    {expLabel && <span style={{ fontSize: 12, fontWeight: 600, color: "white", background: "rgba(255,255,255,0.1)", padding: "5px 12px", borderRadius: 20 }}>{t.summaryLevel}: {expLabel}</span>}
                    {goalLabel && <span style={{ fontSize: 12, fontWeight: 600, color: "white", background: "rgba(255,255,255,0.1)", padding: "5px 12px", borderRadius: 20 }}>{t.summaryGoal}: {goalLabel}</span>}
                  </div>
                  <div style={{ borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: 14 }}>
                    <p style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", margin: "0 0 4px" }}>{t.recommendation}</p>
                    <p style={{ fontSize: 16, fontWeight: 800, color: "white", margin: 0 }}>{getRecommendation()}</p>
                  </div>
                </div>
              )}

              <button onClick={() => alert(lang === "es" ? "¡Listo! Redirigiendo al generador..." : "Done! Redirecting to generator...")}
                style={{ width: "100%", padding: "16px", borderRadius: 12, border: "none", background: "linear-gradient(135deg,#26215C,#A32D2D)", color: "white", fontSize: 16, fontWeight: 800, cursor: "pointer", boxShadow: "0 4px 20px rgba(91,33,182,.3)" }}>
                {t.finish}
              </button>
            </div>
          )}

          {/* NAV BUTTONS */}
          {step > 0 && step < 4 && (
            <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
              <button onClick={() => setStep(s => s - 1)} style={{ padding: "13px 22px", borderRadius: 11, border: "1.5px solid #e5e7eb", background: "white", fontSize: 14, fontWeight: 600, color: "#374151", cursor: "pointer" }}>{t.back}</button>
              <button onClick={() => setStep(s => s + 1)} disabled={!canNext()}
                style={{ flex: 1, padding: "14px", borderRadius: 11, border: "none", background: canNext() ? "linear-gradient(135deg,#26215C,#A32D2D)" : "#e5e7eb", color: canNext() ? "white" : "#9ca3af", fontSize: 15, fontWeight: 800, cursor: canNext() ? "pointer" : "not-allowed" }}>
                {t.next}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

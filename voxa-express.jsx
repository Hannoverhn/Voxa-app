import { useState } from "react";

const T = {
  es: {
    appName: "Voxa Express",
    tagline: "Tu anuncio profesional en 3 preguntas",
    step: "Pregunta",
    of: "de",
    q1: "¿Qué tienes?",
    q1Sub: "Cuéntanos de tu negocio como si le hablaras a un amigo",
    q1Placeholder: "Ej: Un salón de belleza en Tegucigalpa, hago tintes, cortes y uñas",
    q2: "¿Qué quieres?",
    q2Sub: "Elige lo que más necesitas ahora mismo",
    goals: [
      { id: "citas", icon: "📅", label: "Que me llamen para citas" },
      { id: "ventas", icon: "💰", label: "Vender más esta semana" },
      { id: "conocer", icon: "📣", label: "Que me conozcan más" },
      { id: "promo", icon: "🎁", label: "Anunciar una promoción" },
    ],
    q3: "¿Quién es tu cliente?",
    q3Sub: "No te compliques, solo descríbelo simple",
    q3Placeholder: "Ej: Mujeres de mi colonia que les gusta verse bien",
    generateBtn: "✨ Crear mi anuncio",
    generating: "Creando tu anuncio...",
    back: "← Atrás",
    next: "Siguiente →",
    resultTitle: "¡Tu anuncio está listo!",
    resultSub: "Así se vería en Facebook",
    scoreLabel: "Probabilidad de éxito",
    scoreReady: "Listo para publicar",
    versions: "3 versiones para elegir",
    budgetTitle: "¿Cuánto quieres invertir?",
    budgetSub: "Voxa te dice a cuántas personas vas a llegar",
    budgetOptions: [
      { amount: 5, reach: "400-800" },
      { amount: 10, reach: "900-1.800" },
      { amount: 20, reach: "2.000-3.500" },
      { amount: 50, reach: "5.000-9.000" },
    ],
    reachLabel: "personas cerca de ti",
    publishBtn: "📤 Publicar este anuncio",
    helpBtn: "¿Primera vez? Te ayudamos paso a paso",
    needHelp: "¿Nunca has puesto publicidad?",
    needHelpSub: "No te preocupes, te guiamos en cada clic. Son 4 pasos y toma 5 minutos.",
    helpYes: "Sí, ayúdenme",
    helpNo: "No, ya sé cómo",
    newAd: "+ Crear otro anuncio",
    copyText: "Copiar texto",
    copied: "✓ Copiado",
  },
  en: {
    appName: "Voxa Express",
    tagline: "Your professional ad in 3 questions",
    step: "Question",
    of: "of",
    q1: "What do you have?",
    q1Sub: "Tell us about your business like you would a friend",
    q1Placeholder: "E.g.: A beauty salon in Tegucigalpa, I do hair dye, cuts and nails",
    q2: "What do you want?",
    q2Sub: "Pick what you need most right now",
    goals: [
      { id: "citas", icon: "📅", label: "More appointment calls" },
      { id: "ventas", icon: "💰", label: "Sell more this week" },
      { id: "conocer", icon: "📣", label: "Get more known" },
      { id: "promo", icon: "🎁", label: "Announce a promotion" },
    ],
    q3: "Who is your customer?",
    q3Sub: "Don't overthink it, just describe them simply",
    q3Placeholder: "E.g.: Women in my neighborhood who like to look good",
    generateBtn: "✨ Create my ad",
    generating: "Creating your ad...",
    back: "← Back",
    next: "Next →",
    resultTitle: "Your ad is ready!",
    resultSub: "This is how it would look on Facebook",
    scoreLabel: "Success probability",
    scoreReady: "Ready to publish",
    versions: "3 versions to choose from",
    budgetTitle: "How much do you want to invest?",
    budgetSub: "Voxa tells you how many people you'll reach",
    budgetOptions: [
      { amount: 5, reach: "400-800" },
      { amount: 10, reach: "900-1,800" },
      { amount: 20, reach: "2,000-3,500" },
      { amount: 50, reach: "5,000-9,000" },
    ],
    reachLabel: "people near you",
    publishBtn: "📤 Publish this ad",
    helpBtn: "First time? We'll guide you step by step",
    needHelp: "Never run an ad before?",
    needHelpSub: "Don't worry, we'll guide you through every click. It's 4 steps and takes 5 minutes.",
    helpYes: "Yes, help me",
    helpNo: "No, I know how",
    newAd: "+ Create another ad",
    copyText: "Copy text",
    copied: "✓ Copied",
  }
};

const HELP_STEPS = {
  es: [
    { title: "Conecta tu Facebook", desc: "Toca 'Conectar' y entra con tu cuenta de Facebook de siempre. No necesitas crear nada nuevo." },
    { title: "Confirma tu método de pago", desc: "Agrega una tarjeta o usa PayPal. Solo se cobra cuando confirmes el monto." },
    { title: "Elige cuánto quieres gastar", desc: "Empieza con poco, como $5 o $10. Puedes subir el monto después si quieres." },
    { title: "Publica y listo", desc: "Tu anuncio empieza a mostrarse en minutos. Te avisamos cuando tengas resultados." },
  ],
  en: [
    { title: "Connect your Facebook", desc: "Tap 'Connect' and sign in with your regular Facebook account. No need to create anything new." },
    { title: "Confirm your payment method", desc: "Add a card or use PayPal. You're only charged when you confirm the amount." },
    { title: "Choose how much to spend", desc: "Start small, like $5 or $10. You can increase it later if you want." },
    { title: "Publish and you're done", desc: "Your ad starts showing in minutes. We'll let you know when you have results." },
  ]
};

function LangToggle({ lang, setLang }) {
  return (
    <div style={{ display: "flex", background: "#f3f4f6", borderRadius: 8, padding: 3, gap: 2 }}>
      {["es","en"].map(l => (
        <button key={l} onClick={() => setLang(l)}
          style={{ padding: "5px 12px", borderRadius: 6, border: "none", cursor: "pointer", fontSize: 12, fontWeight: 700, background: l === lang ? "white" : "transparent", color: l === lang ? "#26215C" : "#9ca3af", transition: "all .15s" }}>
          {l === "es" ? "🇪🇸 ES" : "🇺🇸 EN"}
        </button>
      ))}
    </div>
  );
}

function HelpModal({ lang, onClose }) {
  const steps = HELP_STEPS[lang];
  const t = T[lang];
  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.55)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 200, padding: "1rem" }}>
      <div style={{ background: "white", borderRadius: 20, padding: 28, width: "100%", maxWidth: 440, maxHeight: "90vh", overflow: "auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <p style={{ fontSize: 17, fontWeight: 800, color: "#08080a", margin: 0 }}>🤝 {lang === "es" ? "Te ayudamos paso a paso" : "We'll guide you step by step"}</p>
          <button onClick={onClose} style={{ background: "none", border: "none", fontSize: 22, cursor: "pointer", color: "#9ca3af" }}>×</button>
        </div>
        {steps.map((s, i) => (
          <div key={i} style={{ display: "flex", gap: 14, marginBottom: 18 }}>
            <div style={{ width: 28, height: 28, background: "linear-gradient(135deg,#26215C,#A32D2D)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "white", flexShrink: 0 }}>{i + 1}</div>
            <div>
              <p style={{ fontSize: 14, fontWeight: 700, color: "#08080a", margin: "0 0 4px" }}>{s.title}</p>
              <p style={{ fontSize: 13, color: "#6b7280", margin: 0, lineHeight: 1.5 }}>{s.desc}</p>
            </div>
          </div>
        ))}
        <button onClick={onClose} style={{ width: "100%", padding: 13, background: "linear-gradient(135deg,#26215C,#A32D2D)", color: "white", border: "none", borderRadius: 11, fontSize: 14, fontWeight: 700, cursor: "pointer", marginTop: 8 }}>
          {lang === "es" ? "Entendido, vamos" : "Got it, let's go"}
        </button>
      </div>
    </div>
  );
}

export default function VoxaExpress() {
  const [lang, setLang] = useState("es");
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ business: "", goal: "", audience: "" });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [budget, setBudget] = useState(5);
  const [showHelp, setShowHelp] = useState(false);
  const [askedExperience, setAskedExperience] = useState(false);
  const [copied, setCopied] = useState(false);
  const t = T[lang];

  const canNext = () => {
    if (step === 0) return form.business.trim().length > 5;
    if (step === 1) return !!form.goal;
    if (step === 2) return form.audience.trim().length > 3;
    return false;
  };

  const generate = async () => {
    setLoading(true);
    const goalLabel = t.goals.find(g => g.id === form.goal)?.label || "";
    const prompt = `Eres un experto en publicidad digital para pequeños negocios locales (salones, cafeterías, restaurantes). Habla simple, sin tecnicismos.

Negocio: ${form.business}
Objetivo: ${goalLabel}
Cliente ideal: ${form.audience}

Crea un anuncio simple y efectivo. Responde ÚNICAMENTE con este JSON sin texto adicional:
{
  "titulo": "titulo corto e impactante, maximo 8 palabras",
  "cuerpo": "texto del anuncio, 2-3 oraciones calidas y directas",
  "cta": "llamado a la accion corto, 3-5 palabras",
  "score": 84,
  "mejorHora": "dia y hora sugerida para publicar",
  "emoji": "un emoji que represente el negocio"
}`;
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model: "claude-sonnet-4-6", max_tokens: 500, messages: [{ role: "user", content: prompt }] })
      });
      const data = await res.json();
      const text = data.content?.[0]?.text || "";
      const parsed = JSON.parse(text.replace(/```json|```/g, "").trim());
      setResult(parsed);
      setStep(3);
    } catch {
      setResult({ titulo: "¿Lista para algo nuevo?", cuerpo: form.business, cta: "Contáctanos", score: 80, mejorHora: "Jueves 7pm", emoji: "✨" });
      setStep(3);
    } finally { setLoading(false); }
  };

  const handlePublishClick = () => {
    if (!askedExperience) { setAskedExperience(true); return; }
  };

  const inp = { width: "100%", padding: "14px 16px", fontSize: 15, borderRadius: 12, border: "1.5px solid #e5e7eb", fontFamily: "inherit", color: "#111", outline: "none", boxSizing: "border-box", background: "white" };
  const currentBudget = t.budgetOptions.find(b => b.amount === budget);

  return (
    <div style={{ fontFamily: "'Inter',system-ui,sans-serif", background: "#f8f8fc", minHeight: "100vh" }}>

      <div style={{ background: "white", borderBottom: "1px solid #e8e8f0", padding: "0 5%", height: 62, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <div style={{ width: 30, height: 30, background: "linear-gradient(135deg,#26215C,#A32D2D)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "white", fontSize: 14 }}>V</div>
          <span style={{ fontWeight: 900, fontSize: 17, color: "#08080a" }}>{t.appName}</span>
        </div>
        <LangToggle lang={lang} setLang={setLang} />
      </div>

      <div style={{ maxWidth: 480, margin: "0 auto", padding: "32px 5% 60px" }}>

        {step < 3 && (
          <>
            <p style={{ textAlign: "center", fontSize: 13, color: "#9ca3af", margin: "0 0 24px" }}>{t.tagline}</p>
            <div style={{ display: "flex", gap: 5, marginBottom: 28 }}>
              {[0,1,2].map(i => (
                <div key={i} style={{ height: 5, flex: 1, borderRadius: 4, background: i <= step ? "linear-gradient(90deg,#26215C,#A32D2D)" : "#e5e7eb" }} />
              ))}
            </div>
          </>
        )}

        {step === 0 && (
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🏪</div>
            <h2 style={{ fontSize: 24, fontWeight: 900, color: "#08080a", margin: "0 0 6px" }}>{t.q1}</h2>
            <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 24px" }}>{t.q1Sub}</p>
            <textarea value={form.business} onChange={e => setForm(f => ({ ...f, business: e.target.value }))} placeholder={t.q1Placeholder}
              style={{ ...inp, minHeight: 100, resize: "none", textAlign: "left" }} />
          </div>
        )}

        {step === 1 && (
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🎯</div>
            <h2 style={{ fontSize: 24, fontWeight: 900, color: "#08080a", margin: "0 0 6px" }}>{t.q2}</h2>
            <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 24px" }}>{t.q2Sub}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {t.goals.map(g => (
                <button key={g.id} onClick={() => setForm(f => ({ ...f, goal: g.id }))}
                  style={{ display: "flex", alignItems: "center", gap: 14, padding: "16px 18px", borderRadius: 14, border: form.goal === g.id ? "2px solid #A32D2D" : "1.5px solid #e5e7eb", background: form.goal === g.id ? "#FFF5F0" : "white", cursor: "pointer", textAlign: "left" }}>
                  <span style={{ fontSize: 26 }}>{g.icon}</span>
                  <span style={{ fontSize: 15, fontWeight: 700, color: "#08080a" }}>{g.label}</span>
                  {form.goal === g.id && <span style={{ marginLeft: "auto", color: "#A32D2D" }}>✓</span>}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>👥</div>
            <h2 style={{ fontSize: 24, fontWeight: 900, color: "#08080a", margin: "0 0 6px" }}>{t.q3}</h2>
            <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 24px" }}>{t.q3Sub}</p>
            <textarea value={form.audience} onChange={e => setForm(f => ({ ...f, audience: e.target.value }))} placeholder={t.q3Placeholder}
              style={{ ...inp, minHeight: 90, resize: "none", textAlign: "left" }} />
          </div>
        )}

        {step < 3 && (
          <div style={{ display: "flex", gap: 10, marginTop: 28 }}>
            {step > 0 && (
              <button onClick={() => setStep(s => s - 1)} style={{ padding: "14px 20px", borderRadius: 12, border: "1.5px solid #e5e7eb", background: "white", fontSize: 14, fontWeight: 600, color: "#374151", cursor: "pointer" }}>{t.back}</button>
            )}
            {step === 2 ? (
              <button onClick={generate} disabled={!canNext() || loading}
                style={{ flex: 1, padding: "15px", borderRadius: 12, border: "none", background: canNext() && !loading ? "linear-gradient(135deg,#26215C,#A32D2D)" : "#e5e7eb", color: canNext() && !loading ? "white" : "#9ca3af", fontSize: 16, fontWeight: 800, cursor: canNext() && !loading ? "pointer" : "not-allowed" }}>
                {loading ? t.generating : t.generateBtn}
              </button>
            ) : (
              <button onClick={() => setStep(s => s + 1)} disabled={!canNext()}
                style={{ flex: 1, padding: "15px", borderRadius: 12, border: "none", background: canNext() ? "linear-gradient(135deg,#26215C,#A32D2D)" : "#e5e7eb", color: canNext() ? "white" : "#9ca3af", fontSize: 16, fontWeight: 800, cursor: canNext() ? "pointer" : "not-allowed" }}>
                {t.next}
              </button>
            )}
          </div>
        )}

        {step === 3 && result && (
          <div>
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <div style={{ fontSize: 44, marginBottom: 10 }}>🎉</div>
              <h2 style={{ fontSize: 22, fontWeight: 900, color: "#08080a", margin: "0 0 4px" }}>{t.resultTitle}</h2>
              <p style={{ fontSize: 13, color: "#9ca3af", margin: 0 }}>{t.resultSub}</p>
            </div>

            <div style={{ background: "#1a1a2e", borderRadius: 24, padding: 8, maxWidth: 300, margin: "0 auto 20px" }}>
              <div style={{ background: "white", borderRadius: 18, overflow: "hidden" }}>
                <div style={{ background: "#1877F2", padding: "8px 10px" }}><span style={{ color: "white", fontWeight: 900, fontSize: 16 }}>f</span></div>
                <div style={{ padding: "10px 12px 6px", display: "flex", gap: 8, alignItems: "center" }}>
                  <div style={{ width: 30, height: 30, borderRadius: "50%", background: "linear-gradient(135deg,#e91e8c,#ff6b6b)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>{result.emoji}</div>
                  <div><p style={{ fontSize: 11, fontWeight: 700, margin: 0 }}>{form.business.slice(0, 24)}</p><p style={{ fontSize: 9, color: "#65676B", margin: 0 }}>Patrocinado</p></div>
                </div>
                <p style={{ fontSize: 11, padding: "0 12px 8px", margin: 0, lineHeight: 1.4 }}>{result.cuerpo}</p>
                <div style={{ aspectRatio: "1", background: "linear-gradient(145deg,#fce4ec,#f8bbd0)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6, padding: 10 }}>
                  <span style={{ fontSize: 36 }}>{result.emoji}</span>
                  <p style={{ fontSize: 13, fontWeight: 900, color: "#880e4f", textAlign: "center", margin: 0 }}>{result.titulo}</p>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 12px" }}>
                  <span style={{ fontSize: 9, color: "#65676B" }}>tunegocio.com</span>
                  <button style={{ background: "#1877F2", color: "white", fontSize: 10, fontWeight: 700, padding: "5px 10px", borderRadius: 6, border: "none" }}>{result.cta}</button>
                </div>
              </div>
            </div>

            <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 14, padding: "14px 18px", marginBottom: 16, display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ position: "relative", width: 48, height: 48, flexShrink: 0 }}>
                <svg viewBox="0 0 48 48" style={{ transform: "rotate(-90deg)" }}>
                  <circle cx="24" cy="24" r="20" fill="none" stroke="#e5e7eb" strokeWidth="4" />
                  <circle cx="24" cy="24" r="20" fill="none" stroke="#16a34a" strokeWidth="4" strokeDasharray={`${result.score * 1.26} 126`} strokeLinecap="round" />
                </svg>
                <span style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800, color: "#16a34a" }}>{result.score}</span>
              </div>
              <div>
                <p style={{ fontSize: 13, fontWeight: 700, color: "#16a34a", margin: "0 0 2px" }}>{t.scoreReady}</p>
                <p style={{ fontSize: 12, color: "#6b7280", margin: 0 }}>💡 {result.mejorHora}</p>
              </div>
            </div>

            <button onClick={() => { navigator.clipboard.writeText(`${result.titulo}\n\n${result.cuerpo}\n\n${result.cta}`); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
              style={{ width: "100%", padding: 11, borderRadius: 10, border: "1px solid #e8e8f0", background: "white", fontSize: 13, fontWeight: 700, color: copied ? "#16a34a" : "#374151", cursor: "pointer", marginBottom: 20 }}>
              {copied ? t.copied : t.copyText}
            </button>

            <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 14, padding: "18px", marginBottom: 16 }}>
              <p style={{ fontSize: 15, fontWeight: 800, color: "#08080a", margin: "0 0 4px" }}>{t.budgetTitle}</p>
              <p style={{ fontSize: 12, color: "#9ca3af", margin: "0 0 14px" }}>{t.budgetSub}</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 14 }}>
                {t.budgetOptions.map(b => (
                  <button key={b.amount} onClick={() => setBudget(b.amount)}
                    style={{ padding: "12px 8px", borderRadius: 10, border: budget === b.amount ? "2px solid #A32D2D" : "1.5px solid #e5e7eb", background: budget === b.amount ? "#FFF5F0" : "white", cursor: "pointer" }}>
                    <p style={{ fontSize: 18, fontWeight: 900, color: budget === b.amount ? "#26215C" : "#08080a", margin: "0 0 2px" }}>${b.amount}</p>
                    <p style={{ fontSize: 11, color: "#9ca3af", margin: 0 }}>~{b.reach}</p>
                  </button>
                ))}
              </div>
              <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 10, padding: "10px 14px" }}>
                <p style={{ fontSize: 13, color: "#16a34a", margin: 0, fontWeight: 600 }}>
                  ✓ {lang === "es" ? `Con $${budget} llegarás a ${currentBudget?.reach} ${t.reachLabel}` : `With $${budget} you'll reach ${currentBudget?.reach} ${t.reachLabel}`}
                </p>
              </div>
            </div>

            {!askedExperience ? (
              <button onClick={handlePublishClick}
                style={{ width: "100%", padding: 15, borderRadius: 12, border: "none", background: "linear-gradient(135deg,#26215C,#A32D2D)", color: "white", fontSize: 16, fontWeight: 800, cursor: "pointer", marginBottom: 12 }}>
                {t.publishBtn}
              </button>
            ) : (
              <div style={{ background: "#fefce8", border: "1px solid #fde68a", borderRadius: 14, padding: 18, marginBottom: 12, textAlign: "center" }}>
                <p style={{ fontSize: 15, fontWeight: 800, color: "#854d0e", margin: "0 0 6px" }}>{t.needHelp}</p>
                <p style={{ fontSize: 13, color: "#92400e", margin: "0 0 14px", lineHeight: 1.5 }}>{t.needHelpSub}</p>
                <div style={{ display: "flex", gap: 8 }}>
                  <button onClick={() => setShowHelp(true)} style={{ flex: 1, padding: 11, borderRadius: 10, border: "none", background: "linear-gradient(135deg,#26215C,#A32D2D)", color: "white", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>{t.helpYes}</button>
                  <button style={{ flex: 1, padding: 11, borderRadius: 10, border: "1px solid #e8e8f0", background: "white", color: "#374151", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>{t.helpNo}</button>
                </div>
              </div>
            )}

            <button onClick={() => { setResult(null); setStep(0); setForm({ business: "", goal: "", audience: "" }); setAskedExperience(false); }}
              style={{ width: "100%", padding: 12, borderRadius: 11, border: "1.5px solid #e8e8f0", background: "white", color: "#A32D2D", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
              {t.newAd}
            </button>
          </div>
        )}
      </div>

      {showHelp && <HelpModal lang={lang} onClose={() => setShowHelp(false)} />}
    </div>
  );
}

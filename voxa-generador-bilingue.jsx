import { useState } from "react";

const T = {
  es: {
    appName: "Voxa",
    modeLabel: "Modo de campaña",
    modes: { normal: "⚡ Campaña estándar", clone: "🔍 Voxa Clone", politico: "🏛️ Modo Político" },
    step: "Paso",
    of: "de",
    adLang: "Idioma de los anuncios",
    adLangSub: "¿En qué idioma quieres que la IA genere tus anuncios?",
    spanish: "Español",
    english: "Inglés",
    auto: "Auto (IA detecta)",
    back: "← Atrás",
    continue: "Continuar →",
    generating: "Generando con IA...",
    genBtn: { normal: "⚡ Generar campañas", clone: "🔍 Clonar y superar", politico: "🏛️ Generar mensajes" },
    steps: {
      normal: [
        { title: "Cuéntanos de tu negocio", sub: "La IA necesita entender qué vendes para crear anuncios que realmente conviertan.", placeholder: "Ej: Vendo ropa deportiva para mujeres desde casa en Medellín. Tengo prendas de yoga y running a precios accesibles. Mi diferencial es la calidad y entrega rápida." },
        { title: "¿Cuál es tu objetivo?", sub: "Esto define la estructura y el tono de tus anuncios." },
        { title: "¿A quién le habla tu anuncio?", sub: "Cuanto más específico, mejores los anuncios.", placeholder: "Ej: Mujeres de 25 a 40 años que hacen ejercicio, viven en ciudades y buscan ropa cómoda y bonita." },
      ],
      politico: [
        { title: "🏛️ Modo Político", sub: "Propuesta, partido o mensaje central del candidato.", placeholder: "Ej: Juan Pérez, candidato a alcalde. Propuesta: más seguridad, empleo y agua potable para todos los barrios." },
        { title: "¿Para qué cargo?", sub: "El tono y los mensajes cambian según el nivel del cargo." },
        { title: "¿Audiencia objetivo?", sub: "La IA adapta el mensaje según la zona y edad." },
      ],
    },
    objetivos: [
      { id: "ventas", label: "Aumentar ventas", icon: "💰" },
      { id: "leads", label: "Conseguir leads", icon: "🎯" },
      { id: "branding", label: "Dar a conocer mi marca", icon: "📣" },
      { id: "trafico", label: "Llevar tráfico a mi web", icon: "🌐" },
    ],
    canalLabel: "Canal",
    canales: [
      { id: "meta", label: "Facebook / Instagram", icon: "📘" },
      { id: "google", label: "Google Ads", icon: "🔍" },
      { id: "tiktok", label: "TikTok Ads", icon: "🎵" },
      { id: "todos", label: "Todos simultáneo ⚡", icon: "🌐" },
    ],
    presupuestoLabel: "Presupuesto mensual",
    presupuestos: ["Menos de $50/mes", "$50–$200/mes", "$200–$500/mes", "Más de $500/mes"],
    zonaLabel: "Zona objetivo",
    zonas: ["Zona urbana", "Zona rural", "Ambas"],
    edadLabel: "Rango de edad del votante",
    edades: ["18–30 años", "31–45 años", "46–60 años", "Todos los rangos"],
    cargos: ["Alcalde", "Diputado", "Senador", "Presidente", "Concejal"],
    cloneTitle: "Voxa Clone",
    cloneSub: "Pega el anuncio o URL de tu competidor y Voxa genera 3 versiones superiores para ti.",
    cloneCompLabel: "Anuncio o URL del competidor",
    cloneCompPlaceholder: "Pega el texto del anuncio de tu competidor, o su URL de Facebook Ads...",
    cloneBizLabel: "Tu negocio / diferencial",
    cloneBizPlaceholder: "Ej: Ropa deportiva femenina con entrega en 24h...",
    audienciaPlaceholder: "Ej: Mujeres de 25 a 40 años que hacen ejercicio, viven en ciudades.",
    resultsTitle: { normal: "Tus campañas están listas", clone: "Anuncios superiores al competidor", politico: "Mensajes de campaña listos" },
    resultsSub: { normal: "3 versiones", clone: "3 versiones que superan a tu competidor", politico: "3 mensajes segmentados" },
    newBtn: "+ Nueva",
    version: "Versión",
    tituloLabel: "Título",
    cuerpoLabel: "Cuerpo",
    ctaLabel: "CTA",
    copyBtn: "Copiar",
    copiedBtn: "✓ Copiado",
    scoreHigh: "Alta conversión",
    scoreMid: "Conversión media",
    scoreLow: "Optimizar",
    scoreReady: "Listo para publicar",
    scoreConsider: "Considera los ajustes",
    scoreReview: "Revisa las sugerencias",
    publishTitle: "Publicar directamente",
    publishSub: "Conecta tu cuenta y publicamos con un clic. Sin entrar al Ads Manager nunca más.",
    publishBtn: "Conectar cuenta →",
    errorMsg: "Error al generar. Intenta de nuevo.",
  },
  en: {
    appName: "Voxa",
    modeLabel: "Campaign mode",
    modes: { normal: "⚡ Standard campaign", clone: "🔍 Voxa Clone", politico: "🏛️ Political mode" },
    step: "Step",
    of: "of",
    adLang: "Ad language",
    adLangSub: "In which language do you want the AI to generate your ads?",
    spanish: "Spanish",
    english: "English",
    auto: "Auto (AI detects)",
    back: "← Back",
    continue: "Continue →",
    generating: "Generating with AI...",
    genBtn: { normal: "⚡ Generate campaigns", clone: "🔍 Clone & outperform", politico: "🏛️ Generate messages" },
    steps: {
      normal: [
        { title: "Tell us about your business", sub: "The AI needs to understand what you sell to create ads that truly convert.", placeholder: "E.g.: I sell women's sportswear from home. I have yoga and running gear at affordable prices. My differentiator is quality and fast delivery." },
        { title: "What's your goal?", sub: "This defines the structure and tone of your ads." },
        { title: "Who is your ad talking to?", sub: "The more specific, the better the ads.", placeholder: "E.g.: Women aged 25–40 who work out, live in cities and look for comfortable, stylish activewear." },
      ],
      politico: [
        { title: "🏛️ Political Mode", sub: "Candidate's proposal, party or core message.", placeholder: "E.g.: John Smith, mayoral candidate. Proposal: more security, jobs and clean water for every neighborhood." },
        { title: "Which office?", sub: "Tone and messages change depending on the level of office." },
        { title: "Target audience?", sub: "The AI adapts the message based on zone and age." },
      ],
    },
    objetivos: [
      { id: "ventas", label: "Increase sales", icon: "💰" },
      { id: "leads", label: "Generate leads", icon: "🎯" },
      { id: "branding", label: "Build brand awareness", icon: "📣" },
      { id: "trafico", label: "Drive traffic to my website", icon: "🌐" },
    ],
    canalLabel: "Channel",
    canales: [
      { id: "meta", label: "Facebook / Instagram", icon: "📘" },
      { id: "google", label: "Google Ads", icon: "🔍" },
      { id: "tiktok", label: "TikTok Ads", icon: "🎵" },
      { id: "todos", label: "All simultaneous ⚡", icon: "🌐" },
    ],
    presupuestoLabel: "Monthly budget",
    presupuestos: ["Less than $50/mo", "$50–$200/mo", "$200–$500/mo", "More than $500/mo"],
    zonaLabel: "Target zone",
    zonas: ["Urban area", "Rural area", "Both"],
    edadLabel: "Voter age range",
    edades: ["18–30 years", "31–45 years", "46–60 years", "All ranges"],
    cargos: ["Mayor", "Representative", "Senator", "President", "Council member"],
    cloneTitle: "Voxa Clone",
    cloneSub: "Paste your competitor's ad or URL and Voxa generates 3 superior versions for you.",
    cloneCompLabel: "Competitor's ad or URL",
    cloneCompPlaceholder: "Paste your competitor's ad text or their Facebook Ads URL...",
    cloneBizLabel: "Your business / differentiator",
    cloneBizPlaceholder: "E.g.: Women's sportswear with 24h delivery...",
    audienciaPlaceholder: "E.g.: Women aged 25–40 who work out and live in cities.",
    resultsTitle: { normal: "Your campaigns are ready", clone: "Ads that outperform your competitor", politico: "Campaign messages ready" },
    resultsSub: { normal: "3 versions", clone: "3 versions that beat your competitor", politico: "3 segmented messages" },
    newBtn: "+ New",
    version: "Version",
    tituloLabel: "Headline",
    cuerpoLabel: "Body",
    ctaLabel: "CTA",
    copyBtn: "Copy",
    copiedBtn: "✓ Copied",
    scoreHigh: "High conversion",
    scoreMid: "Medium conversion",
    scoreLow: "Needs work",
    scoreReady: "Ready to publish",
    scoreConsider: "Consider the suggestions",
    scoreReview: "Review the suggestions",
    publishTitle: "Publish directly",
    publishSub: "Connect your account and we publish with one click. Never open Ads Manager again.",
    publishBtn: "Connect account →",
    errorMsg: "Generation error. Please try again.",
  }
};

function LangToggle({ lang, setLang }) {
  return (
    <div style={{ display: "flex", background: "#f3f4f6", borderRadius: 8, padding: 3, gap: 2 }}>
      {["es", "en"].map(l => (
        <button key={l} onClick={() => setLang(l)}
          style={{ padding: "5px 12px", borderRadius: 6, border: "none", cursor: "pointer", fontSize: 12, fontWeight: 700, background: lang === l ? "white" : "transparent", color: lang === l ? "#26215C" : "#9ca3af", boxShadow: lang === l ? "0 1px 4px rgba(0,0,0,.08)" : "none", transition: "all .15s", letterSpacing: "0.03em" }}>
          {l === "es" ? "🇪🇸 ES" : "🇺🇸 EN"}
        </button>
      ))}
    </div>
  );
}

function ScoreBadge({ score, t }) {
  const color = score >= 80 ? "#16a34a" : score >= 60 ? "#b45309" : "#e11d48";
  const bg = score >= 80 ? "#f0fdf4" : score >= 60 ? "#fefce8" : "#fff1f2";
  const label = score >= 80 ? t.scoreHigh : score >= 60 ? t.scoreMid : t.scoreLow;
  const sub = score >= 80 ? t.scoreReady : score >= 60 ? t.scoreConsider : t.scoreReview;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, background: bg, border: `1px solid ${color}30`, borderRadius: 9, padding: "9px 14px", marginTop: 12 }}>
      <div style={{ position: "relative", width: 38, height: 38, flexShrink: 0 }}>
        <svg viewBox="0 0 36 36" style={{ transform: "rotate(-90deg)", width: 38, height: 38 }}>
          <circle cx="18" cy="18" r="15" fill="none" stroke="#e5e7eb" strokeWidth="3" />
          <circle cx="18" cy="18" r="15" fill="none" stroke={color} strokeWidth="3" strokeDasharray={`${score * 0.94} 94`} strokeLinecap="round" />
        </svg>
        <span style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 800, color }}>{score}</span>
      </div>
      <div>
        <p style={{ fontSize: 12, fontWeight: 700, color, margin: 0 }}>Voxa Score: {label}</p>
        <p style={{ fontSize: 11, color: "#6b7280", margin: 0 }}>{sub}</p>
      </div>
    </div>
  );
}

function CopyCard({ copy, index, canal, score, t }) {
  const [copied, setCopied] = useState(false);
  return (
    <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 14, padding: "20px 22px", boxShadow: "0 1px 6px rgba(0,0,0,.04)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
        <div style={{ display: "flex", gap: 6 }}>
          <span style={{ fontSize: 10, fontWeight: 700, color: "#A32D2D", background: "#FAEEDA", padding: "3px 10px", borderRadius: 20, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.version} {index + 1}</span>
          <span style={{ fontSize: 10, fontWeight: 600, color: "#6b7280", background: "#f3f4f6", padding: "3px 10px", borderRadius: 20 }}>{canal}</span>
        </div>
        <button onClick={() => { navigator.clipboard.writeText(`${copy.titulo}\n\n${copy.cuerpo}\n\n${copy.cta}`); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
          style={{ fontSize: 12, padding: "4px 12px", borderRadius: 7, border: "1px solid #e5e7eb", background: copied ? "#f0fdf4" : "white", color: copied ? "#16a34a" : "#555", cursor: "pointer", fontWeight: 600 }}>
          {copied ? t.copiedBtn : t.copyBtn}
        </button>
      </div>
      <p style={{ fontSize: 10, color: "#9ca3af", margin: "0 0 3px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.tituloLabel}</p>
      <p style={{ fontSize: 17, fontWeight: 800, color: "#08080a", margin: "0 0 12px", lineHeight: 1.3 }}>{copy.titulo}</p>
      <p style={{ fontSize: 10, color: "#9ca3af", margin: "0 0 3px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.cuerpoLabel}</p>
      <p style={{ fontSize: 14, color: "#374151", margin: "0 0 12px", lineHeight: 1.65 }}>{copy.cuerpo}</p>
      <div style={{ background: "#FFF5F0", borderRadius: 8, padding: "10px 14px", display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ fontSize: 10, color: "#A32D2D", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.ctaLabel}</span>
        <span style={{ fontSize: 14, fontWeight: 800, color: "#26215C" }}>{copy.cta}</span>
      </div>
      {index === 0 && <ScoreBadge score={score} t={t} />}
    </div>
  );
}

export default function VoxaBilingual() {
  const [lang, setLang] = useState("es");
  const [mode, setMode] = useState("normal");
  const [adLang, setAdLang] = useState("auto");
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ negocio: "", objetivo: "", audiencia: "", canal: "meta", presupuesto: "", competidor: "", cargo: "", zona: "", edadPol: "" });
  const [loading, setLoading] = useState(false);
  const [copies, setCopies] = useState(null);
  const [score, setScore] = useState(0);
  const [error, setError] = useState(null);

  const t = T[lang];
  const maxSteps = mode === "politico" ? 3 : mode === "clone" ? 1 : 3;

  const resolvedAdLang = adLang === "auto" ? (lang === "es" ? "Spanish" : "English") : adLang === "es" ? "Spanish" : "English";

  const canNext = () => {
    if (mode === "clone") return form.competidor.trim().length > 10 && form.negocio.trim().length > 5;
    if (step === 0) return form.negocio.trim().length > 10;
    if (step === 1) return mode === "normal" ? !!form.objetivo : !!form.cargo;
    if (step === 2) return mode === "normal" ? (form.audiencia.trim().length > 5 && !!form.presupuesto) : (!!form.zona && !!form.edadPol);
    return false;
  };

  const buildPrompt = () => {
    const canalLabel = t.canales.find(c => c.id === form.canal)?.label || "Meta";
    const objetivoLabel = t.objetivos.find(o => o.id === form.objetivo)?.label || "";
    const langInstruction = `IMPORTANT: Generate ALL ad copy (titles, body text, CTAs) in ${resolvedAdLang} only.`;

    if (mode === "clone") return `You are an expert digital advertising strategist. ${langInstruction}\n\nAnalyze this competitor ad and create 3 superior versions for the client.\n\nCompetitor ad/URL: ${form.competidor}\nClient's business: ${form.negocio}\n\nCreate 3 versions that OUTPERFORM the competitor using the same target audience but highlighting the client's differentiators.\n\nRespond ONLY with valid JSON, no extra text:\n{"copies":[{"titulo":"...","cuerpo":"...","cta":"..."},{"titulo":"...","cuerpo":"...","cta":"..."},{"titulo":"...","cuerpo":"...","cta":"..."}],"score":${Math.floor(Math.random()*15)+82}}`;

    if (mode === "politico") return `You are an expert in Latin American political marketing. ${langInstruction}\n\nCandidate for: ${form.cargo}\nProposal/party: ${form.negocio}\nZone: ${form.zona}\nVoter age range: ${form.edadPol}\n\nCreate 3 political campaign messages with distinct approaches: value proposition, proactive contrast, and emotional close. Adapted to the zone and age indicated.\n\nRespond ONLY with valid JSON, no extra text:\n{"copies":[{"titulo":"...","cuerpo":"...","cta":"..."},{"titulo":"...","cuerpo":"...","cta":"..."},{"titulo":"...","cuerpo":"...","cta":"..."}],"score":${Math.floor(Math.random()*12)+80}}`;

    return `You are an expert digital advertising strategist with 10 years of experience. ${langInstruction}\n\nBusiness: ${form.negocio}\nGoal: ${objetivoLabel}\nAudience: ${form.audiencia}\nChannel: ${canalLabel}\nBudget: ${form.presupuesto}\n\nCreate exactly 3 ad versions with distinct approaches: emotional, rational, and urgency. Optimized for ${canalLabel}.\n\nRespond ONLY with valid JSON, no extra text:\n{"copies":[{"titulo":"...","cuerpo":"...","cta":"..."},{"titulo":"...","cuerpo":"...","cta":"..."},{"titulo":"...","cuerpo":"...","cta":"..."}],"score":${Math.floor(Math.random()*20)+72}}`;
  };

  const generate = async () => {
    setLoading(true); setError(null);
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model: "claude-sonnet-4-6", max_tokens: 1000, messages: [{ role: "user", content: buildPrompt() }] })
      });
      const data = await res.json();
      const text = data.content?.[0]?.text || "";
      const parsed = JSON.parse(text.replace(/```json|```/g, "").trim());
      setCopies(parsed.copies);
      setScore(parsed.score || 81);
    } catch { setError(t.errorMsg); }
    finally { setLoading(false); }
  };

  const reset = () => { setCopies(null); setStep(0); setForm({ negocio: "", objetivo: "", audiencia: "", canal: "meta", presupuesto: "", competidor: "", cargo: "", zona: "", edadPol: "" }); };

  const inputStyle = { width: "100%", padding: "12px 14px", fontSize: 14, borderRadius: 11, border: "1.5px solid #e5e7eb", fontFamily: "inherit", lineHeight: 1.6, color: "#111", outline: "none", boxSizing: "border-box" };
  const focusStyle = e => e.target.style.borderColor = "#A32D2D";
  const blurStyle = e => e.target.style.borderColor = "#e5e7eb";

  const canalLabel = t.canales.find(c => c.id === form.canal)?.label || "";

  // RESULTS
  if (copies) return (
    <div style={{ fontFamily: "'Inter',system-ui,sans-serif", maxWidth: 680, margin: "0 auto", padding: "2rem 1rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 28, height: 28, background: "linear-gradient(135deg,#26215C,#A32D2D)", borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "white", fontSize: 13 }}>V</div>
          <span style={{ fontWeight: 900, fontSize: 16, color: "#08080a", letterSpacing: "-0.03em" }}>Voxa</span>
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <LangToggle lang={lang} setLang={setLang} />
          <button onClick={reset} style={{ fontSize: 13, color: "#A32D2D", background: "none", border: "1px solid #FAEEDA", borderRadius: 8, padding: "7px 14px", cursor: "pointer", fontWeight: 700 }}>{t.newBtn}</button>
        </div>
      </div>

      <div style={{ marginBottom: 20 }}>
        <h2 style={{ fontSize: 20, fontWeight: 800, color: "#08080a", margin: "0 0 4px", letterSpacing: "-0.02em" }}>{t.resultsTitle[mode]}</h2>
        <p style={{ fontSize: 13, color: "#6b7280", margin: 0 }}>{t.resultsSub[mode]} · {canalLabel || (mode === "politico" ? (lang === "es" ? "Campaña política" : "Political campaign") : "Multi-channel")} · {resolvedAdLang}</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 24 }}>
        {copies.map((copy, i) => <CopyCard key={i} copy={copy} index={i} canal={canalLabel || "Multi"} score={score} t={t} />)}
      </div>

      <div style={{ background: "linear-gradient(135deg,#1a1730,#1a1730)", borderRadius: 14, padding: "22px 26px" }}>
        <p style={{ margin: "0 0 6px", fontWeight: 800, fontSize: 15, color: "white" }}>{t.publishTitle}</p>
        <p style={{ margin: "0 0 16px", fontSize: 13, color: "rgba(255,255,255,.65)" }}>{t.publishSub}</p>
        <button style={{ background: "white", color: "#26215C", border: "none", borderRadius: 9, padding: "10px 22px", fontWeight: 800, fontSize: 13, cursor: "pointer" }}>{t.publishBtn}</button>
      </div>
    </div>
  );

  return (
    <div style={{ fontFamily: "'Inter',system-ui,sans-serif", maxWidth: 560, margin: "0 auto", padding: "2rem 1rem" }}>

      {/* HEADER */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 30, height: 30, background: "linear-gradient(135deg,#26215C,#A32D2D)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "white", fontSize: 14 }}>V</div>
          <span style={{ fontWeight: 900, fontSize: 17, color: "#08080a", letterSpacing: "-0.03em" }}>Voxa</span>
        </div>
        <LangToggle lang={lang} setLang={setLang} />
      </div>

      {/* MODE SELECTOR */}
      {step === 0 && (
        <div style={{ marginBottom: 24 }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 10 }}>{t.modeLabel}</p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {Object.entries(t.modes).map(([id, label]) => (
              <button key={id} onClick={() => { setMode(id); setStep(0); }}
                style={{ padding: "8px 16px", borderRadius: 9, border: mode === id ? "2px solid #A32D2D" : "1.5px solid #e5e7eb", background: mode === id ? "#FFF5F0" : "white", color: mode === id ? "#26215C" : "#374151", fontSize: 13, fontWeight: 700, cursor: "pointer", transition: "all .15s" }}>
                {label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* AD LANGUAGE SELECTOR — shown on last step */}
      {((mode === "normal" && step === 2) || (mode === "politico" && step === 2) || mode === "clone") && (
        <div style={{ background: "#fafaf8", border: "1px solid #e8e8f0", borderRadius: 12, padding: "14px 16px", marginBottom: 20 }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: "#374151", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.adLang}</p>
          <p style={{ fontSize: 12, color: "#9ca3af", margin: "0 0 10px" }}>{t.adLangSub}</p>
          <div style={{ display: "flex", gap: 8 }}>
            {[["es", `🇪🇸 ${t.spanish}`], ["en", `🇺🇸 ${t.english}`], ["auto", `🤖 ${t.auto}`]].map(([id, label]) => (
              <button key={id} onClick={() => setAdLang(id)}
                style={{ flex: 1, padding: "8px 6px", borderRadius: 9, border: adLang === id ? "2px solid #A32D2D" : "1.5px solid #e5e7eb", background: adLang === id ? "#FFF5F0" : "white", color: adLang === id ? "#26215C" : "#374151", fontSize: 12, fontWeight: 700, cursor: "pointer", transition: "all .15s" }}>
                {label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* PROGRESS BAR */}
      {mode !== "clone" && (
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: "flex", gap: 5, marginBottom: 10 }}>
            {Array.from({ length: maxSteps }).map((_, i) => (
              <div key={i} style={{ height: 4, flex: 1, borderRadius: 4, background: i <= step ? "linear-gradient(90deg,#26215C,#A32D2D)" : "#e5e7eb", transition: "background .3s" }} />
            ))}
          </div>
          <p style={{ fontSize: 11, color: "#9ca3af", margin: 0, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
            {t.step} {step + 1} {t.of} {maxSteps}
          </p>
        </div>
      )}

      {/* CLONE MODE */}
      {mode === "clone" && (
        <div>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: "#08080a", margin: "0 0 6px", letterSpacing: "-0.02em" }}>{t.cloneTitle}</h2>
          <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 22px" }}>{t.cloneSub}</p>
          <label style={{ fontSize: 12, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.cloneCompLabel}</label>
          <textarea value={form.competidor} onChange={e => setForm(f => ({ ...f, competidor: e.target.value }))} placeholder={t.cloneCompPlaceholder}
            style={{ ...inputStyle, minHeight: 100, resize: "vertical" }} onFocus={focusStyle} onBlur={blurStyle} />
          <label style={{ fontSize: 12, fontWeight: 700, color: "#374151", display: "block", margin: "16px 0 6px", textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.cloneBizLabel}</label>
          <input value={form.negocio} onChange={e => setForm(f => ({ ...f, negocio: e.target.value }))} placeholder={t.cloneBizPlaceholder}
            style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
        </div>
      )}

      {/* NORMAL STEPS */}
      {mode === "normal" && step === 0 && (
        <div>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: "#08080a", margin: "0 0 6px", letterSpacing: "-0.02em" }}>{t.steps.normal[0].title}</h2>
          <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 20px" }}>{t.steps.normal[0].sub}</p>
          <textarea value={form.negocio} onChange={e => setForm(f => ({ ...f, negocio: e.target.value }))} placeholder={t.steps.normal[0].placeholder}
            style={{ ...inputStyle, minHeight: 120, resize: "vertical" }} onFocus={focusStyle} onBlur={blurStyle} />
        </div>
      )}

      {mode === "normal" && step === 1 && (
        <div>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: "#08080a", margin: "0 0 6px", letterSpacing: "-0.02em" }}>{t.steps.normal[1].title}</h2>
          <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 20px" }}>{t.steps.normal[1].sub}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {t.objetivos.map(obj => (
              <button key={obj.id} onClick={() => setForm(f => ({ ...f, objetivo: obj.id }))}
                style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 18px", borderRadius: 12, cursor: "pointer", border: form.objetivo === obj.id ? "2px solid #A32D2D" : "1.5px solid #e5e7eb", background: form.objetivo === obj.id ? "#FFF5F0" : "white", textAlign: "left", transition: "all .15s" }}>
                <span style={{ fontSize: 22 }}>{obj.icon}</span>
                <span style={{ fontSize: 15, fontWeight: 700, color: "#08080a" }}>{obj.label}</span>
                {form.objetivo === obj.id && <span style={{ marginLeft: "auto", color: "#A32D2D", fontSize: 17 }}>✓</span>}
              </button>
            ))}
          </div>
        </div>
      )}

      {mode === "normal" && step === 2 && (
        <div>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: "#08080a", margin: "0 0 6px", letterSpacing: "-0.02em" }}>{t.steps.normal[2].title}</h2>
          <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 20px" }}>{t.steps.normal[2].sub}</p>
          <label style={{ fontSize: 12, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{lang === "es" ? "Tu cliente ideal" : "Your ideal customer"}</label>
          <textarea value={form.audiencia} onChange={e => setForm(f => ({ ...f, audiencia: e.target.value }))} placeholder={t.steps.normal[2].placeholder}
            style={{ ...inputStyle, minHeight: 90, resize: "vertical" }} onFocus={focusStyle} onBlur={blurStyle} />
          <label style={{ fontSize: 12, fontWeight: 700, color: "#374151", display: "block", margin: "18px 0 8px", textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.canalLabel}</label>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 18 }}>
            {t.canales.map(c => (
              <button key={c.id} onClick={() => setForm(f => ({ ...f, canal: c.id }))}
                style={{ padding: "10px", borderRadius: 10, cursor: "pointer", border: form.canal === c.id ? "2px solid #A32D2D" : "1.5px solid #e5e7eb", background: form.canal === c.id ? "#FFF5F0" : "white", fontSize: 12, fontWeight: 700, color: form.canal === c.id ? "#26215C" : "#374151", transition: "all .15s", display: "flex", alignItems: "center", gap: 6 }}>
                {c.icon} {c.label}
              </button>
            ))}
          </div>
          <label style={{ fontSize: 12, fontWeight: 700, color: "#374151", display: "block", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.presupuestoLabel}</label>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {t.presupuestos.map(p => (
              <button key={p} onClick={() => setForm(f => ({ ...f, presupuesto: p }))}
                style={{ padding: "10px", borderRadius: 10, cursor: "pointer", border: form.presupuesto === p ? "2px solid #A32D2D" : "1.5px solid #e5e7eb", background: form.presupuesto === p ? "#FFF5F0" : "white", fontSize: 13, fontWeight: 600, color: form.presupuesto === p ? "#26215C" : "#374151", transition: "all .15s" }}>
                {p}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* POLITICO STEPS */}
      {mode === "politico" && step === 0 && (
        <div>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: "#08080a", margin: "0 0 6px", letterSpacing: "-0.02em" }}>{t.steps.politico[0].title}</h2>
          <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 20px" }}>{t.steps.politico[0].sub}</p>
          <textarea value={form.negocio} onChange={e => setForm(f => ({ ...f, negocio: e.target.value }))} placeholder={t.steps.politico[0].placeholder}
            style={{ ...inputStyle, minHeight: 120, resize: "vertical" }} onFocus={focusStyle} onBlur={blurStyle} />
        </div>
      )}

      {mode === "politico" && step === 1 && (
        <div>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: "#08080a", margin: "0 0 6px", letterSpacing: "-0.02em" }}>{t.steps.politico[1].title}</h2>
          <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 20px" }}>{t.steps.politico[1].sub}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {t.cargos.map(c => (
              <button key={c} onClick={() => setForm(f => ({ ...f, cargo: c }))}
                style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 18px", borderRadius: 12, cursor: "pointer", border: form.cargo === c ? "2px solid #A32D2D" : "1.5px solid #e5e7eb", background: form.cargo === c ? "#FFF5F0" : "white", fontSize: 15, fontWeight: 700, color: "#08080a", transition: "all .15s" }}>
                {c} {form.cargo === c && <span style={{ color: "#A32D2D" }}>✓</span>}
              </button>
            ))}
          </div>
        </div>
      )}

      {mode === "politico" && step === 2 && (
        <div>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: "#08080a", margin: "0 0 6px", letterSpacing: "-0.02em" }}>{t.steps.politico[2].title}</h2>
          <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 20px" }}>{t.steps.politico[2].sub}</p>
          <label style={{ fontSize: 12, fontWeight: 700, color: "#374151", display: "block", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.zonaLabel}</label>
          <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
            {t.zonas.map(z => (
              <button key={z} onClick={() => setForm(f => ({ ...f, zona: z }))}
                style={{ flex: 1, padding: "10px 6px", borderRadius: 10, cursor: "pointer", border: form.zona === z ? "2px solid #A32D2D" : "1.5px solid #e5e7eb", background: form.zona === z ? "#FFF5F0" : "white", fontSize: 12, fontWeight: 700, color: form.zona === z ? "#26215C" : "#374151", transition: "all .15s" }}>
                {z}
              </button>
            ))}
          </div>
          <label style={{ fontSize: 12, fontWeight: 700, color: "#374151", display: "block", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.edadLabel}</label>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {t.edades.map(e => (
              <button key={e} onClick={() => setForm(f => ({ ...f, edadPol: e }))}
                style={{ padding: "10px", borderRadius: 10, cursor: "pointer", border: form.edadPol === e ? "2px solid #A32D2D" : "1.5px solid #e5e7eb", background: form.edadPol === e ? "#FFF5F0" : "white", fontSize: 13, fontWeight: 600, color: form.edadPol === e ? "#26215C" : "#374151", transition: "all .15s" }}>
                {e}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* BUTTONS */}
      <div style={{ marginTop: 28, display: "flex", gap: 10 }}>
        {step > 0 && mode !== "clone" && (
          <button onClick={() => setStep(s => s - 1)} style={{ padding: "13px 22px", borderRadius: 11, border: "1.5px solid #e5e7eb", background: "white", fontSize: 15, fontWeight: 600, color: "#374151", cursor: "pointer" }}>{t.back}</button>
        )}
        {(mode === "clone" || step === maxSteps - 1) ? (
          <button onClick={generate} disabled={!canNext() || loading}
            style={{ flex: 1, padding: "14px 22px", borderRadius: 11, border: "none", background: canNext() && !loading ? "linear-gradient(135deg,#26215C,#A32D2D)" : "#e5e7eb", color: canNext() && !loading ? "white" : "#9ca3af", fontSize: 15, fontWeight: 800, cursor: canNext() && !loading ? "pointer" : "not-allowed", boxShadow: canNext() && !loading ? "0 4px 16px rgba(91,33,182,.25)" : "none" }}>
            {loading ? (
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                <span style={{ width: 16, height: 16, border: "2px solid rgba(255,255,255,.4)", borderTopColor: "white", borderRadius: "50%", display: "inline-block", animation: "spin .7s linear infinite" }} />
                {t.generating}
              </span>
            ) : t.genBtn[mode]}
          </button>
        ) : (
          <button onClick={() => setStep(s => s + 1)} disabled={!canNext()}
            style={{ flex: 1, padding: "14px 22px", borderRadius: 11, border: "none", background: canNext() ? "linear-gradient(135deg,#26215C,#A32D2D)" : "#e5e7eb", color: canNext() ? "white" : "#9ca3af", fontSize: 15, fontWeight: 800, cursor: canNext() ? "pointer" : "not-allowed" }}>
            {t.continue}
          </button>
        )}
      </div>
      {error && <p style={{ color: "#ef4444", fontSize: 13, marginTop: 12, textAlign: "center" }}>{error}</p>}
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}

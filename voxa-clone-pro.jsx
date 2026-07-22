import { useState } from "react";

const T = {
  es: {
    title: "Voxa Clone Pro",
    sub: "Analiza hasta 3 competidores a la vez y genera anuncios que los superan",
    addCompetitor: "+ Agregar competidor",
    maxReached: "Máximo 3 competidores",
    competitor: "Competidor",
    competitorUrl: "URL o texto del anuncio",
    competitorUrlPh: "Pega la URL de su página, texto de su anuncio o describe su campaña",
    competitorName: "Nombre del competidor",
    competitorNamePh: "Ej: Salón Glamour",
    yourBusiness: "Tu negocio",
    yourBusinessTitle: "¿Qué ofreces tú?",
    yourBusinessPh: "Describe tu negocio y tus diferenciales. ¿Qué tienes tú que ellos no tienen?",
    yourAdvantage: "Tu ventaja principal",
    advantages: ["Precio más bajo", "Mejor calidad", "Entrega más rápida", "Mejor ubicación", "Más experiencia", "Mejor atención", "Más variedad", "Garantía"],
    channel: "Canal objetivo",
    channels: ["Facebook / Instagram", "Google Ads", "TikTok Ads", "Todos"],
    analyzeBtn: "🔍 Analizar y superar",
    analyzing: "Analizando competidores con IA...",
    resultsTitle: "Análisis completo",
    patternsTitle: "Patrones detectados en la competencia",
    patternsTip: "Lo que tus competidores repiten — tú harás algo diferente",
    weaknessTitle: "Puntos débiles de la competencia",
    weaknessTip: "Aquí es donde puedes atacar",
    yourAdsTitle: "Tus anuncios superiores",
    yourAdsTip: "Diseñados específicamente para superar a cada competidor",
    strategyTitle: "Estrategia recomendada",
    copyBtn: "Copiar",
    copied: "✓ Copiado",
    newAnalysis: "+ Nuevo análisis",
    vsLabel: "vs.",
    hookLabel: "Gancho principal",
    toneLabel: "Tono",
    ctaLabel: "CTA",
    yourVersion: "Tu versión superior",
    removeBtn: "✕",
    competitor1Default: "Salón Glamour",
    competitor2Default: "Beauty Center",
    competitor3Default: "Estética Moderna",
    version: "Versión",
    emotional: "Emocional",
    rational: "Racional",
    urgency: "Urgencia",
    score: "Voxa Score",
  },
  en: {
    title: "Voxa Clone Pro",
    sub: "Analyze up to 3 competitors at once and generate ads that outperform them",
    addCompetitor: "+ Add competitor",
    maxReached: "Maximum 3 competitors",
    competitor: "Competitor",
    competitorUrl: "URL or ad text",
    competitorUrlPh: "Paste their page URL, ad text or describe their campaign",
    competitorName: "Competitor name",
    competitorNamePh: "E.g.: Glamour Salon",
    yourBusiness: "Your business",
    yourBusinessTitle: "What do you offer?",
    yourBusinessPh: "Describe your business and differentiators. What do you have that they don't?",
    yourAdvantage: "Your main advantage",
    advantages: ["Lower price", "Better quality", "Faster delivery", "Better location", "More experience", "Better service", "More variety", "Guarantee"],
    channel: "Target channel",
    channels: ["Facebook / Instagram", "Google Ads", "TikTok Ads", "All channels"],
    analyzeBtn: "🔍 Analyze and outperform",
    analyzing: "Analyzing competitors with AI...",
    resultsTitle: "Complete analysis",
    patternsTitle: "Patterns detected in competition",
    patternsTip: "What your competitors repeat — you'll do something different",
    weaknessTitle: "Competition weak points",
    weaknessTip: "Here's where you can attack",
    yourAdsTitle: "Your superior ads",
    yourAdsTip: "Designed specifically to outperform each competitor",
    strategyTitle: "Recommended strategy",
    copyBtn: "Copy",
    copied: "✓ Copied",
    newAnalysis: "+ New analysis",
    vsLabel: "vs.",
    hookLabel: "Main hook",
    toneLabel: "Tone",
    ctaLabel: "CTA",
    yourVersion: "Your superior version",
    removeBtn: "✕",
    competitor1Default: "Glamour Salon",
    competitor2Default: "Beauty Center",
    competitor3Default: "Modern Aesthetics",
    version: "Version",
    emotional: "Emotional",
    rational: "Rational",
    urgency: "Urgency",
    score: "Voxa Score",
  }
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

function CopyBtn({ text, t }) {
  const [copied, setCopied] = useState(false);
  return (
    <button onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
      style={{ fontSize: 11, padding: "4px 10px", borderRadius: 6, border: "1px solid #e5e7eb", background: copied ? "#f0fdf4" : "white", color: copied ? "#16a34a" : "#6b7280", cursor: "pointer", fontWeight: 600, flexShrink: 0 }}>
      {copied ? t.copied : t.copyBtn}
    </button>
  );
}

export default function VoxaClonePro() {
  const [lang, setLang] = useState("es");
  const [competitors, setCompetitors] = useState([{ id: 1, name: "", url: "" }]);
  const [business, setBusiness] = useState("");
  const [advantage, setAdvantage] = useState("");
  const [channel, setChannel] = useState("Facebook / Instagram");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const t = T[lang];

  const addCompetitor = () => {
    if (competitors.length >= 3) return;
    setCompetitors(prev => [...prev, { id: Date.now(), name: "", url: "" }]);
  };

  const removeCompetitor = (id) => {
    if (competitors.length <= 1) return;
    setCompetitors(prev => prev.filter(c => c.id !== id));
  };

  const updateCompetitor = (id, field, value) => {
    setCompetitors(prev => prev.map(c => c.id === id ? { ...c, [field]: value } : c));
  };

  const canAnalyze = business.trim().length > 10 && competitors.some(c => c.url.trim().length > 5);

  const buildPrompt = () => {
    const compList = competitors.filter(c => c.url.trim()).map((c, i) => `Competidor ${i + 1} (${c.name || `Competidor ${i + 1}`}): ${c.url}`).join("\n");
    const langInstr = lang === "es" ? "Responde TODO en español." : "Respond ALL in English.";
    return `Eres un experto en análisis competitivo y publicidad digital con 15 años de experiencia en LATAM. ${langInstr}

MI NEGOCIO: ${business}
MI VENTAJA PRINCIPAL: ${advantage}
CANAL OBJETIVO: ${channel}

COMPETIDORES A ANALIZAR:
${compList}

Analiza la competencia y genera una estrategia completa para superarlos. Responde ÚNICAMENTE con este JSON válido sin texto adicional:

{
  "patrones": [
    "patrón repetido en la competencia 1",
    "patrón repetido 2",
    "patrón repetido 3"
  ],
  "debilidades": [
    {"competidor": "nombre", "debilidad": "punto débil específico y cómo atacarlo"},
    {"competidor": "nombre", "debilidad": "punto débil específico y cómo atacarlo"}
  ],
  "anuncios": [
    {
      "enfoque": "${lang === "es" ? "Emocional" : "Emotional"}",
      "titulo": "título del anuncio",
      "cuerpo": "cuerpo del anuncio (2-3 oraciones)",
      "cta": "llamado a la acción",
      "score": 87,
      "porque": "por qué este anuncio supera a la competencia (1 oración)"
    },
    {
      "enfoque": "${lang === "es" ? "Racional" : "Rational"}",
      "titulo": "...",
      "cuerpo": "...",
      "cta": "...",
      "score": 84,
      "porque": "..."
    },
    {
      "enfoque": "${lang === "es" ? "Urgencia" : "Urgency"}",
      "titulo": "...",
      "cuerpo": "...",
      "cta": "...",
      "score": 89,
      "porque": "..."
    }
  ],
  "estrategia": "recomendación estratégica de 2-3 oraciones sobre cómo posicionarse frente a estos competidores específicos",
  "ventajaClara": "cuál es la ventaja más explotable del negocio frente a la competencia analizada"
}`;
  };

  const analyze = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model: "claude-sonnet-4-6", max_tokens: 2000, messages: [{ role: "user", content: buildPrompt() }] })
      });
      const data = await res.json();
      const text = data.content?.[0]?.text || "";
      const parsed = JSON.parse(text.replace(/```json|```/g, "").trim());
      setResults(parsed);
    } catch { alert(lang === "es" ? "Error al analizar. Intenta de nuevo." : "Analysis error. Please try again."); }
    finally { setLoading(false); }
  };

  const inp = { width: "100%", padding: "10px 13px", fontSize: 14, borderRadius: 10, border: "1.5px solid #e5e7eb", fontFamily: "inherit", color: "#111", outline: "none", boxSizing: "border-box", background: "white" };

  // RESULTS
  if (results) return (
    <div style={{ fontFamily: "'Inter',system-ui,sans-serif", background: "#f5f3ef", minHeight: "100vh" }}>
      <div style={{ background: "#26215C", padding: "0 5%", height: 62, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <div style={{ width: 30, height: 30, background: "#A32D2D", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "white", fontSize: 14 }}>V</div>
          <span style={{ fontWeight: 900, fontSize: 17, color: "white" }}>Voxa Clone Pro</span>
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <LangToggle lang={lang} setLang={setLang} />
          <button onClick={() => setResults(null)} style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", background: "none", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 8, padding: "6px 12px", cursor: "pointer" }}>{t.newAnalysis}</button>
        </div>
      </div>

      <div style={{ maxWidth: 780, margin: "0 auto", padding: "28px 5%" }}>
        <h2 style={{ fontSize: 22, fontWeight: 900, color: "#26215C", margin: "0 0 4px" }}>{t.resultsTitle}</h2>
        <p style={{ fontSize: 13, color: "#9ca3af", margin: "0 0 28px" }}>{competitors.filter(c => c.name).map(c => c.name).join(" · ")} · {channel}</p>

        {/* VENTAJA CLARA */}
        {results.ventajaClara && (
          <div style={{ background: "linear-gradient(135deg,#26215C,#A32D2D)", borderRadius: 16, padding: "20px 24px", marginBottom: 20, display: "flex", gap: 14, alignItems: "flex-start" }}>
            <span style={{ fontSize: 28, flexShrink: 0 }}>🏆</span>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 6px" }}>{lang === "es" ? "Tu ventaja más poderosa" : "Your most powerful advantage"}</p>
              <p style={{ fontSize: 15, fontWeight: 700, color: "white", margin: 0, lineHeight: 1.6 }}>{results.ventajaClara}</p>
            </div>
          </div>
        )}

        {/* PATRONES */}
        <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 16, padding: "20px 22px", marginBottom: 16 }}>
          <p style={{ fontSize: 14, fontWeight: 800, color: "#26215C", margin: "0 0 4px" }}>🔍 {t.patternsTitle}</p>
          <p style={{ fontSize: 12, color: "#9ca3af", margin: "0 0 14px" }}>{t.patternsTip}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {(results.patrones || []).map((p, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <div style={{ width: 22, height: 22, background: "#FAEEDA", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "#A32D2D", flexShrink: 0 }}>{i + 1}</div>
                <p style={{ fontSize: 13, color: "#374151", margin: 0, lineHeight: 1.5 }}>{p}</p>
              </div>
            ))}
          </div>
        </div>

        {/* DEBILIDADES */}
        <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 16, padding: "20px 22px", marginBottom: 16 }}>
          <p style={{ fontSize: 14, fontWeight: 800, color: "#26215C", margin: "0 0 4px" }}>⚔️ {t.weaknessTitle}</p>
          <p style={{ fontSize: 12, color: "#9ca3af", margin: "0 0 14px" }}>{t.weaknessTip}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {(results.debilidades || []).map((d, i) => (
              <div key={i} style={{ background: "#fff5f5", border: "1px solid #fecaca", borderRadius: 10, padding: "12px 14px" }}>
                <p style={{ fontSize: 12, fontWeight: 700, color: "#A32D2D", margin: "0 0 4px" }}>{d.competidor}</p>
                <p style={{ fontSize: 13, color: "#374151", margin: 0, lineHeight: 1.5 }}>{d.debilidad}</p>
              </div>
            ))}
          </div>
        </div>

        {/* TUS ANUNCIOS */}
        <div style={{ marginBottom: 16 }}>
          <p style={{ fontSize: 14, fontWeight: 800, color: "#26215C", margin: "0 0 4px" }}>⚡ {t.yourAdsTitle}</p>
          <p style={{ fontSize: 12, color: "#9ca3af", margin: "0 0 14px" }}>{t.yourAdsTip}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {(results.anuncios || []).map((ad, i) => (
              <div key={i} style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 16, overflow: "hidden" }}>
                <div style={{ background: "#fafafa", padding: "12px 18px", borderBottom: "1px solid #f0f0f5", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: 14, fontWeight: 800, color: "#26215C" }}>{ad.enfoque}</span>
                    <div style={{ display: "flex", alignItems: "center", gap: 5, background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 6, padding: "3px 9px" }}>
                      <svg viewBox="0 0 30 30" width="18" height="18" style={{ transform: "rotate(-90deg)" }}>
                        <circle cx="15" cy="15" r="12" fill="none" stroke="#e5e7eb" strokeWidth="3"/>
                        <circle cx="15" cy="15" r="12" fill="none" stroke="#16a34a" strokeWidth="3" strokeDasharray={`${ad.score * 0.75} 75`} strokeLinecap="round"/>
                      </svg>
                      <span style={{ fontSize: 12, fontWeight: 700, color: "#16a34a" }}>{ad.score}</span>
                    </div>
                  </div>
                  <CopyBtn text={`${ad.titulo}\n\n${ad.cuerpo}\n\n${ad.cta}`} t={t} />
                </div>
                <div style={{ padding: "16px 18px" }}>
                  <p style={{ fontSize: 10, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 3px" }}>{lang === "es" ? "Título" : "Headline"}</p>
                  <p style={{ fontSize: 17, fontWeight: 800, color: "#26215C", margin: "0 0 12px", lineHeight: 1.3 }}>{ad.titulo}</p>
                  <p style={{ fontSize: 10, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 3px" }}>{lang === "es" ? "Cuerpo" : "Body"}</p>
                  <p style={{ fontSize: 14, color: "#374151", margin: "0 0 12px", lineHeight: 1.65 }}>{ad.cuerpo}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ background: "#FAEEDA", borderRadius: 8, padding: "8px 14px" }}>
                      <span style={{ fontSize: 11, color: "#854d0e", fontWeight: 700 }}>{ad.cta}</span>
                    </div>
                    {ad.porque && (
                      <p style={{ fontSize: 12, color: "#9ca3af", margin: "0 0 0 12px", lineHeight: 1.4, maxWidth: 200, textAlign: "right" }}>💡 {ad.porque}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ESTRATEGIA */}
        {results.estrategia && (
          <div style={{ background: "#FFF8F0", border: "1px solid #FFD4B8", borderRadius: 16, padding: "20px 22px" }}>
            <p style={{ fontSize: 14, fontWeight: 800, color: "#26215C", margin: "0 0 10px" }}>🧠 {t.strategyTitle}</p>
            <p style={{ fontSize: 14, color: "#374151", margin: 0, lineHeight: 1.7 }}>{results.estrategia}</p>
          </div>
        )}
      </div>
    </div>
  );

  // FORM
  return (
    <div style={{ fontFamily: "'Inter',system-ui,sans-serif", background: "#f5f3ef", minHeight: "100vh" }}>
      <div style={{ background: "#26215C", padding: "0 5%", height: 62, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <div style={{ width: 30, height: 30, background: "#A32D2D", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "white", fontSize: 14 }}>V</div>
          <span style={{ fontWeight: 900, fontSize: 17, color: "white" }}>Voxa</span>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>· {t.title}</span>
        </div>
        <LangToggle lang={lang} setLang={setLang} />
      </div>

      <div style={{ maxWidth: 700, margin: "0 auto", padding: "28px 5%" }}>
        <h2 style={{ fontSize: 22, fontWeight: 900, color: "#26215C", margin: "0 0 4px" }}>{t.title}</h2>
        <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 28px" }}>{t.sub}</p>

        {/* COMPETITORS */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
          {competitors.map((comp, i) => (
            <div key={comp.id} style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 14, padding: "16px 18px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 26, height: 26, background: "#26215C", borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "white" }}>{i + 1}</div>
                  <span style={{ fontSize: 14, fontWeight: 700, color: "#26215C" }}>{t.competitor} {i + 1}</span>
                </div>
                {competitors.length > 1 && (
                  <button onClick={() => removeCompetitor(comp.id)} style={{ fontSize: 12, color: "#ef4444", background: "none", border: "1px solid #fecaca", borderRadius: 6, padding: "4px 9px", cursor: "pointer", fontWeight: 700 }}>{t.removeBtn}</button>
                )}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <input value={comp.name} onChange={e => updateCompetitor(comp.id, "name", e.target.value)} placeholder={t.competitorNamePh}
                  style={{ ...inp, fontSize: 13 }} />
                <textarea value={comp.url} onChange={e => updateCompetitor(comp.id, "url", e.target.value)} placeholder={t.competitorUrlPh}
                  style={{ ...inp, minHeight: 70, resize: "none", fontSize: 13 }} />
              </div>
            </div>
          ))}

          {competitors.length < 3 && (
            <button onClick={addCompetitor}
              style={{ padding: "13px", borderRadius: 12, border: "2px dashed #FFD4B8", background: "transparent", color: "#26215C", fontSize: 14, fontWeight: 700, cursor: "pointer", transition: "all .15s" }}
              onMouseOver={e => e.currentTarget.style.background = "#FFF8F0"}
              onMouseOut={e => e.currentTarget.style.background = "transparent"}>
              {t.addCompetitor}
            </button>
          )}
        </div>

        {/* YOUR BUSINESS */}
        <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 14, padding: "18px 20px", marginBottom: 16 }}>
          <p style={{ fontSize: 14, fontWeight: 800, color: "#26215C", margin: "0 0 12px" }}>🏪 {t.yourBusinessTitle}</p>
          <textarea value={business} onChange={e => setBusiness(e.target.value)} placeholder={t.yourBusinessPh}
            style={{ ...inp, minHeight: 90, resize: "none" }} />
          <div style={{ marginTop: 14 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "#374151", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.yourAdvantage}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
              {t.advantages.map(adv => (
                <button key={adv} onClick={() => setAdvantage(adv)}
                  style={{ padding: "7px 13px", borderRadius: 20, border: advantage === adv ? "2px solid #26215C" : "1.5px solid #e5e7eb", background: advantage === adv ? "#FFF8F0" : "white", fontSize: 12, fontWeight: advantage === adv ? 700 : 400, color: advantage === adv ? "#26215C" : "#374151", cursor: "pointer", transition: "all .15s" }}>
                  {advantage === adv ? "✓ " : ""}{adv}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* CHANNEL */}
        <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 14, padding: "16px 18px", marginBottom: 20 }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: "#374151", margin: "0 0 10px", textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.channel}</p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {t.channels.map(c => (
              <button key={c} onClick={() => setChannel(c)}
                style={{ padding: "8px 14px", borderRadius: 9, border: channel === c ? "2px solid #26215C" : "1.5px solid #e5e7eb", background: channel === c ? "#FFF8F0" : "white", fontSize: 13, fontWeight: channel === c ? 700 : 400, color: channel === c ? "#26215C" : "#374151", cursor: "pointer" }}>
                {channel === c ? "✓ " : ""}{c}
              </button>
            ))}
          </div>
        </div>

        <button onClick={analyze} disabled={!canAnalyze || loading}
          style={{ width: "100%", padding: "15px", borderRadius: 12, border: "none", background: canAnalyze && !loading ? "#26215C" : "#e5e7eb", color: canAnalyze && !loading ? "white" : "#9ca3af", fontSize: 15, fontWeight: 800, cursor: canAnalyze && !loading ? "pointer" : "not-allowed", boxShadow: canAnalyze && !loading ? "0 4px 16px rgba(38,33,92,.25)" : "none" }}>
          {loading ? (
            <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
              <span style={{ width: 16, height: 16, border: "2px solid rgba(255,255,255,.4)", borderTopColor: "white", borderRadius: "50%", display: "inline-block", animation: "spin .7s linear infinite" }} />
              {t.analyzing}
            </span>
          ) : t.analyzeBtn}
        </button>
      </div>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}

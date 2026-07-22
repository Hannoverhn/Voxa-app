import { useState, useEffect } from "react";

const T = {
  es: {
    title: "Campaign Autopilot",
    badge: "🚀 Tu director de marketing personal con IA",
    sub: "Dinos qué quieres lograr. Voxa hace todo lo demás automáticamente.",
    inputLabel: "¿Qué quieres lograr esta semana?",
    inputPh: "Ej: Tengo una cafetería en Tegucigalda y quiero vender más café y pasteles este fin de semana...",
    launchBtn: "🚀 Activar Autopilot",
    launching: "Tu director de marketing está trabajando...",
    steps: [
      "Analizando tu negocio...",
      "Diseñando estrategia de campaña...",
      "Creando anuncios optimizados...",
      "Generando calendario de publicaciones...",
      "Calculando presupuesto ideal...",
      "Preparando todo para publicar...",
    ],
    readyTitle: "¡Tu campaña completa está lista!",
    readySub: "Tu director de marketing personal creó todo esto en segundos",
    strategyTitle: "Estrategia de campaña",
    adsTitle: "Anuncios creados",
    calendarTitle: "Calendario de publicaciones",
    budgetTitle: "Presupuesto recomendado",
    audienceTitle: "Audiencia objetivo",
    publishBtn: "📤 Publicar campaña completa",
    editBtn: "✏️ Revisar y editar",
    newBtn: "+ Nueva campaña",
    day: "Día",
    platform: "Plataforma",
    time: "Hora",
    format: "Formato",
    copyBtn: "Copiar",
    copied: "✓",
    adVersion: "Versión",
    score: "Voxa Score",
    days: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"],
  },
  en: {
    title: "Campaign Autopilot",
    badge: "🚀 Your personal AI marketing director",
    sub: "Tell us what you want to achieve. Voxa does everything else automatically.",
    inputLabel: "What do you want to achieve this week?",
    inputPh: "E.g.: I have a coffee shop in Tegucigalpa and want to sell more coffee and pastries this weekend...",
    launchBtn: "🚀 Activate Autopilot",
    launching: "Your marketing director is working...",
    steps: [
      "Analyzing your business...",
      "Designing campaign strategy...",
      "Creating optimized ads...",
      "Generating publishing calendar...",
      "Calculating ideal budget...",
      "Preparing everything to publish...",
    ],
    readyTitle: "Your complete campaign is ready!",
    readySub: "Your personal marketing director created all this in seconds",
    strategyTitle: "Campaign strategy",
    adsTitle: "Created ads",
    calendarTitle: "Publishing calendar",
    budgetTitle: "Recommended budget",
    audienceTitle: "Target audience",
    publishBtn: "📤 Publish complete campaign",
    editBtn: "✏️ Review and edit",
    newBtn: "+ New campaign",
    day: "Day",
    platform: "Platform",
    time: "Time",
    format: "Format",
    copyBtn: "Copy",
    copied: "✓",
    adVersion: "Version",
    score: "Voxa Score",
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  }
};

function LangToggle({ lang, setLang }) {
  return (
    <div style={{ display: "flex", background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: 3, gap: 2 }}>
      {["es","en"].map(l => (
        <button key={l} onClick={() => setLang(l)}
          style={{ padding: "4px 10px", borderRadius: 6, border: "none", cursor: "pointer", fontSize: 11, fontWeight: 700, background: l === lang ? "rgba(255,255,255,0.2)" : "transparent", color: "white", opacity: l === lang ? 1 : 0.5, transition: "all .15s" }}>
          {l === "es" ? "🇪🇸 ES" : "🇺🇸 EN"}
        </button>
      ))}
    </div>
  );
}

function LoadingStep({ steps, currentStep }) {
  return (
    <div style={{ maxWidth: 480, margin: "0 auto", padding: "60px 24px", textAlign: "center" }}>
      <div style={{ fontSize: 56, marginBottom: 24 }}>🤖</div>
      <h2 style={{ fontSize: 22, fontWeight: 900, color: "#26215C", margin: "0 0 8px" }}>
        {steps[Math.min(currentStep, steps.length - 1)]}
      </h2>
      <div style={{ display: "flex", gap: 6, justifyContent: "center", margin: "24px 0" }}>
        {steps.map((_, i) => (
          <div key={i} style={{ width: i === currentStep ? 24 : 8, height: 8, borderRadius: 4, background: i <= currentStep ? "#A32D2D" : "#e5e7eb", transition: "all .3s" }} />
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {steps.map((step, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 14px", borderRadius: 9, background: i < currentStep ? "#f0fdf4" : i === currentStep ? "#FFF8F5" : "#fafafa", border: `1px solid ${i < currentStep ? "#bbf7d0" : i === currentStep ? "#F5C6C6" : "#f3f4f6"}` }}>
            <span style={{ fontSize: 14 }}>{i < currentStep ? "✅" : i === currentStep ? "⏳" : "⬜"}</span>
            <span style={{ fontSize: 13, color: i <= currentStep ? "#374151" : "#9ca3af", fontWeight: i === currentStep ? 700 : 400 }}>{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function VoxaAutopilot() {
  const [lang, setLang] = useState("es");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [result, setResult] = useState(null);
  const [copiedIdx, setCopiedIdx] = useState(null);
  const t = T[lang];

  const canLaunch = input.trim().length > 20;

  const buildPrompt = () => `Eres el director de marketing personal de Voxa — la IA más avanzada de LATAM para emprendedores. El usuario te describe qué quiere lograr y tú creas una campaña completa lista para publicar.

OBJETIVO DEL USUARIO: ${input}

Crea una campaña de marketing completa. Responde ÚNICAMENTE con este JSON en ${lang === "es" ? "español" : "English"}:
{
  "resumenEstrategia": "descripción de la estrategia en 2-3 oraciones simples",
  "tipoNegocio": "tipo de negocio detectado",
  "objetivoDetectado": "objetivo principal detectado",
  "audiencia": {
    "descripcion": "descripción de audiencia ideal",
    "edad": "rango de edad",
    "interes": "intereses principales",
    "ubicacion": "zona geográfica recomendada"
  },
  "anuncios": [
    {
      "titulo": "titular del anuncio",
      "cuerpo": "cuerpo del anuncio (2-3 oraciones)",
      "cta": "llamado a la acción",
      "enfoque": "Emocional",
      "plataforma": "Facebook/Instagram",
      "score": 88
    },
    {
      "titulo": "titular versión 2",
      "cuerpo": "cuerpo versión 2",
      "cta": "cta versión 2",
      "enfoque": "Urgencia",
      "plataforma": "Instagram Stories",
      "score": 84
    },
    {
      "titulo": "titular versión 3",
      "cuerpo": "cuerpo versión 3",
      "cta": "cta versión 3",
      "enfoque": "Racional",
      "plataforma": "WhatsApp",
      "score": 82
    }
  ],
  "calendario": [
    {"dia": "Lunes", "hora": "7:00 PM", "plataforma": "Facebook", "formato": "Imagen + texto", "anuncio": 0},
    {"dia": "Martes", "hora": "12:00 PM", "plataforma": "Instagram Stories", "formato": "Story vertical", "anuncio": 1},
    {"dia": "Miércoles", "hora": "6:00 PM", "plataforma": "WhatsApp", "formato": "Mensaje directo", "anuncio": 2},
    {"dia": "Viernes", "hora": "5:00 PM", "plataforma": "Facebook", "formato": "Imagen + texto", "anuncio": 0},
    {"dia": "Sábado", "hora": "10:00 AM", "plataforma": "Instagram", "formato": "Feed cuadrado", "anuncio": 1}
  ],
  "presupuesto": {
    "minimo": 10,
    "recomendado": 25,
    "optimo": 50,
    "descripcion": "explicación de por qué este presupuesto para este negocio específico"
  },
  "consejo": "consejo estratégico final del director de marketing (1-2 oraciones impactantes)"
}`;

  const launch = async () => {
    setLoading(true);
    setLoadingStep(0);
    const interval = setInterval(() => {
      setLoadingStep(s => {
        if (s >= t.steps.length - 1) { clearInterval(interval); return s; }
        return s + 1;
      });
    }, 800);
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model: "claude-sonnet-4-6", max_tokens: 2000, messages: [{ role: "user", content: buildPrompt() }] })
      });
      const data = await res.json();
      const parsed = JSON.parse((data.content?.[0]?.text || "{}").replace(/```json|```/g, "").trim());
      clearInterval(interval);
      await new Promise(r => setTimeout(r, 500));
      setResult(parsed);
    } catch { clearInterval(interval); alert(lang === "es" ? "Error al generar" : "Generation error"); }
    finally { setLoading(false); }
  };

  const copy = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  const platformColors = { "Facebook": "#1877F2", "Instagram": "#E1306C", "Instagram Stories": "#E1306C", "WhatsApp": "#25D366", "TikTok": "#000000", "Google": "#4285F4" };

  return (
    <div style={{ fontFamily: "'Inter',system-ui,sans-serif", background: "#f5f3ef", minHeight: "100vh" }}>
      <div style={{ background: "linear-gradient(135deg,#26215C,#A32D2D)", padding: "0 5%", height: 62, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <div style={{ width: 30, height: 30, background: "rgba(255,255,255,0.2)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "white", fontSize: 14 }}>V</div>
          <div>
            <span style={{ fontWeight: 900, fontSize: 16, color: "white" }}>{t.title}</span>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", marginLeft: 8 }}>{t.badge}</span>
          </div>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          {result && <button onClick={() => { setResult(null); setInput(""); }} style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", background: "rgba(255,255,255,0.1)", border: "none", borderRadius: 8, padding: "6px 12px", cursor: "pointer" }}>{t.newBtn}</button>}
          <LangToggle lang={lang} setLang={setLang} />
        </div>
      </div>

      {!loading && !result && (
        <div style={{ maxWidth: 600, margin: "0 auto", padding: "60px 5% 40px" }}>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <div style={{ fontSize: 56, marginBottom: 16 }}>🚀</div>
            <h1 style={{ fontSize: 28, fontWeight: 900, color: "#26215C", letterSpacing: "-0.03em", margin: "0 0 10px" }}>{t.title}</h1>
            <p style={{ fontSize: 15, color: "#6b7280", margin: 0, lineHeight: 1.6 }}>{t.sub}</p>
          </div>
          <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 20, padding: "28px" }}>
            <label style={{ fontSize: 12, fontWeight: 700, color: "#374151", display: "block", marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.inputLabel}</label>
            <textarea value={input} onChange={e => setInput(e.target.value)} placeholder={t.inputPh}
              style={{ width: "100%", padding: "14px 16px", fontSize: 15, borderRadius: 12, border: "1.5px solid #e5e7eb", fontFamily: "inherit", color: "#111", outline: "none", resize: "none", minHeight: 120, boxSizing: "border-box", lineHeight: 1.6 }}
              onFocus={e => e.target.style.borderColor = "#26215C"}
              onBlur={e => e.target.style.borderColor = "#e5e7eb"} />
            <div style={{ display: "flex", gap: 8, marginTop: 12, flexWrap: "wrap" }}>
              {(lang === "es" ? [
                "Tengo una cafetería y quiero vender más este fin de semana",
                "Soy peluquero y necesito llenar mi agenda esta semana",
                "Tengo una tienda de ropa y quiero lanzar mi nueva colección",
                "Soy abogado y quiero conseguir nuevos clientes"
              ] : [
                "I have a coffee shop and want to sell more this weekend",
                "I'm a hairdresser and need to fill my schedule this week",
                "I have a clothing store and want to launch my new collection",
                "I'm a lawyer and want to get new clients"
              ]).map((ex, i) => (
                <button key={i} onClick={() => setInput(ex)}
                  style={{ fontSize: 12, padding: "6px 12px", borderRadius: 20, border: "1px solid #e8e8f0", background: "white", color: "#6b7280", cursor: "pointer" }}>
                  {ex.substring(0, 45)}...
                </button>
              ))}
            </div>
            <button onClick={launch} disabled={!canLaunch}
              style={{ width: "100%", padding: "16px", borderRadius: 12, border: "none", background: canLaunch ? "linear-gradient(135deg,#26215C,#A32D2D)" : "#e5e7eb", color: "white", fontSize: 16, fontWeight: 800, cursor: canLaunch ? "pointer" : "not-allowed", marginTop: 20, boxShadow: canLaunch ? "0 4px 20px rgba(38,33,92,.3)" : "none" }}>
              {t.launchBtn}
            </button>
          </div>
        </div>
      )}

      {loading && <LoadingStep steps={t.steps} currentStep={loadingStep} />}

      {result && !loading && (
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "28px 5%" }}>
          <div style={{ background: "linear-gradient(135deg,#26215C,#A32D2D)", borderRadius: 18, padding: "28px 32px", marginBottom: 24, display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ fontSize: 48 }}>✅</div>
            <div style={{ flex: 1 }}>
              <h2 style={{ fontSize: 22, fontWeight: 900, color: "white", margin: "0 0 6px" }}>{t.readyTitle}</h2>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", margin: 0 }}>{t.readySub}</p>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <button style={{ padding: "10px 18px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.3)", background: "transparent", color: "white", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>{t.editBtn}</button>
              <button style={{ padding: "10px 18px", borderRadius: 10, border: "none", background: "white", color: "#26215C", fontSize: 13, fontWeight: 800, cursor: "pointer" }}>{t.publishBtn}</button>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
            {/* STRATEGY */}
            <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 16, padding: "20px" }}>
              <p style={{ fontSize: 13, fontWeight: 800, color: "#26215C", margin: "0 0 12px" }}>🎯 {t.strategyTitle}</p>
              <p style={{ fontSize: 14, color: "#374151", margin: "0 0 12px", lineHeight: 1.7 }}>{result.resumenEstrategia}</p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {[result.tipoNegocio, result.objetivoDetectado].filter(Boolean).map((tag, i) => (
                  <span key={i} style={{ fontSize: 11, fontWeight: 600, color: "#A32D2D", background: "#FFF8F5", border: "1px solid #F5C6C6", padding: "3px 10px", borderRadius: 20 }}>{tag}</span>
                ))}
              </div>
            </div>

            {/* AUDIENCE */}
            {result.audiencia && (
              <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 16, padding: "20px" }}>
                <p style={{ fontSize: 13, fontWeight: 800, color: "#26215C", margin: "0 0 12px" }}>👥 {t.audienceTitle}</p>
                {[
                  [lang === "es" ? "Perfil" : "Profile", result.audiencia.descripcion],
                  [lang === "es" ? "Edad" : "Age", result.audiencia.edad],
                  [lang === "es" ? "Intereses" : "Interests", result.audiencia.interes],
                  [lang === "es" ? "Zona" : "Zone", result.audiencia.ubicacion],
                ].map(([l, v]) => v && (
                  <div key={l} style={{ display: "flex", gap: 10, marginBottom: 8 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: "#9ca3af", minWidth: 60 }}>{l}</span>
                    <span style={{ fontSize: 13, color: "#374151" }}>{v}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ADS */}
          <div style={{ marginBottom: 16 }}>
            <p style={{ fontSize: 13, fontWeight: 800, color: "#26215C", margin: "0 0 12px" }}>⚡ {t.adsTitle}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {(result.anuncios || []).map((ad, i) => (
                <div key={i} style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 14, overflow: "hidden" }}>
                  <div style={{ background: "#fafafa", padding: "10px 16px", borderBottom: "1px solid #f0f0f5", display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: "white", background: "#26215C", padding: "3px 9px", borderRadius: 20 }}>{t.adVersion} {i + 1}</span>
                    <span style={{ fontSize: 11, fontWeight: 600, color: "#6b7280" }}>{ad.enfoque}</span>
                    <span style={{ fontSize: 11, fontWeight: 600, color: "white", background: platformColors[ad.plataforma] || "#374151", padding: "2px 8px", borderRadius: 20 }}>{ad.plataforma}</span>
                    <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: 12, fontWeight: 700, color: "#16a34a" }}>{ad.score}/100</span>
                      <button onClick={() => copy(`${ad.titulo}\n\n${ad.cuerpo}\n\n${ad.cta}`, i)}
                        style={{ fontSize: 11, padding: "3px 9px", borderRadius: 6, border: "1px solid #e5e7eb", background: copiedIdx === i ? "#f0fdf4" : "white", color: copiedIdx === i ? "#16a34a" : "#6b7280", cursor: "pointer", fontWeight: 600 }}>
                        {copiedIdx === i ? t.copied : t.copyBtn}
                      </button>
                    </div>
                  </div>
                  <div style={{ padding: "14px 16px" }}>
                    <p style={{ fontSize: 15, fontWeight: 800, color: "#26215C", margin: "0 0 6px" }}>{ad.titulo}</p>
                    <p style={{ fontSize: 13, color: "#374151", margin: "0 0 10px", lineHeight: 1.6 }}>{ad.cuerpo}</p>
                    <span style={{ fontSize: 12, fontWeight: 700, color: "#A32D2D", background: "#FFF8F5", padding: "5px 12px", borderRadius: 8 }}>{ad.cta} →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CALENDAR */}
          {result.calendario && (
            <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 16, padding: "20px", marginBottom: 16 }}>
              <p style={{ fontSize: 13, fontWeight: 800, color: "#26215C", margin: "0 0 14px" }}>📅 {t.calendarTitle}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {result.calendario.map((cal, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 14px", background: "#fafafa", borderRadius: 10 }}>
                    <span style={{ fontSize: 12, fontWeight: 700, color: "#26215C", minWidth: 60 }}>{cal.dia}</span>
                    <span style={{ fontSize: 12, color: "#9ca3af", minWidth: 60 }}>{cal.hora}</span>
                    <span style={{ fontSize: 11, fontWeight: 600, color: "white", background: platformColors[cal.plataforma] || "#374151", padding: "2px 10px", borderRadius: 20 }}>{cal.plataforma}</span>
                    <span style={{ fontSize: 12, color: "#6b7280" }}>{cal.formato}</span>
                    <span style={{ marginLeft: "auto", fontSize: 11, color: "#A32D2D", fontWeight: 700 }}>{t.adVersion} {(cal.anuncio || 0) + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* BUDGET */}
          {result.presupuesto && (
            <div style={{ background: "linear-gradient(135deg,#26215C,#1a1730)", borderRadius: 16, padding: "22px 24px", marginBottom: 16 }}>
              <p style={{ fontSize: 13, fontWeight: 800, color: "#FAEEDA", margin: "0 0 14px" }}>💰 {t.budgetTitle}</p>
              <div style={{ display: "flex", gap: 12, marginBottom: 14, flexWrap: "wrap" }}>
                {[
                  [lang === "es" ? "Mínimo" : "Minimum", result.presupuesto.minimo, "#9ca3af"],
                  [lang === "es" ? "Recomendado" : "Recommended", result.presupuesto.recomendado, "#FAEEDA"],
                  [lang === "es" ? "Óptimo" : "Optimal", result.presupuesto.optimo, "#A32D2D"],
                ].map(([label, val, color]) => (
                  <div key={label} style={{ flex: 1, minWidth: 100, background: "rgba(255,255,255,0.07)", borderRadius: 12, padding: "14px", textAlign: "center" }}>
                    <p style={{ fontSize: 24, fontWeight: 900, color, margin: "0 0 4px" }}>${val}</p>
                    <p style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", margin: 0 }}>{label}</p>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", margin: 0, lineHeight: 1.6 }}>{result.presupuesto.descripcion}</p>
            </div>
          )}

          {result.consejo && (
            <div style={{ background: "#FFF8F5", border: "1px solid #F5C6C6", borderRadius: 14, padding: "16px 20px" }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: "#A32D2D", textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 8px" }}>💡 {lang === "es" ? "Consejo de tu director de marketing" : "Your marketing director's tip"}</p>
              <p style={{ fontSize: 14, color: "#374151", margin: 0, lineHeight: 1.7, fontStyle: "italic" }}>"{result.consejo}"</p>
            </div>
          )}
        </div>
      )}
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}

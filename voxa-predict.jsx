import { useState } from "react";

const T = {
  es: {
    title: "Voxa Predict",
    sub: "Predice el rendimiento de tu anuncio antes de gastar un peso",
    badge: "🎯 Predicción avanzada con IA",
    inputTitle: "Analizar anuncio",
    textLabel: "Texto del anuncio",
    textPh: "Pega aquí el texto completo de tu anuncio...",
    ctaLabel: "Llamado a la acción",
    ctaPh: "Ej: Escríbeme por WhatsApp",
    audienceLabel: "Público objetivo",
    audiencePh: "Ej: Mujeres 25-40 años, Tegucigalpa",
    sectorLabel: "Sector del negocio",
    sectors: ["Belleza y estética", "Restaurantes y cafés", "Retail y tiendas", "Salud y bienestar", "Servicios profesionales", "Educación", "Tecnología", "Otro"],
    locationLabel: "País/ciudad objetivo",
    locationPh: "Ej: Honduras, Tegucigalpa",
    objectiveLabel: "Objetivo de campaña",
    objectives: ["Ventas directas", "Generar leads", "Reconocimiento de marca", "Tráfico web", "Reservas y citas"],
    channelLabel: "Canal",
    channels: ["Facebook", "Instagram", "TikTok", "Google", "WhatsApp"],
    analyzeBtn: "🎯 Predecir rendimiento",
    analyzing: "Analizando con IA...",
    compareTitle: "Comparar versiones",
    addVersion: "+ Agregar versión B",
    version: "Versión",
    overallScore: "Puntuación general",
    interactionProb: "Probabilidad de interacción",
    ctrEstimate: "CTR estimado",
    conversionRate: "Tasa de conversión estimada",
    strengthsTitle: "Fortalezas",
    weaknessTitle: "Áreas de mejora",
    recommendationsTitle: "Recomendaciones",
    winnerLabel: "🏆 Versión ganadora",
    newAnalysis: "+ Nuevo análisis",
    scoreBreakdown: "Desglose del score",
    dimensions: ["Claridad del mensaje", "Fuerza del CTA", "Relevancia para audiencia", "Urgencia", "Diferenciación", "Tono emocional"],
  },
  en: {
    title: "Voxa Predict",
    sub: "Predict your ad performance before spending a penny",
    badge: "🎯 Advanced AI prediction",
    inputTitle: "Analyze ad",
    textLabel: "Ad text",
    textPh: "Paste your full ad text here...",
    ctaLabel: "Call to action",
    ctaPh: "E.g.: Message me on WhatsApp",
    audienceLabel: "Target audience",
    audiencePh: "E.g.: Women 25-40, Tegucigalpa",
    sectorLabel: "Business sector",
    sectors: ["Beauty & aesthetics", "Restaurants & cafés", "Retail & stores", "Health & wellness", "Professional services", "Education", "Technology", "Other"],
    locationLabel: "Target country/city",
    locationPh: "E.g.: Honduras, Tegucigalpa",
    objectiveLabel: "Campaign objective",
    objectives: ["Direct sales", "Generate leads", "Brand awareness", "Web traffic", "Bookings & appointments"],
    channelLabel: "Channel",
    channels: ["Facebook", "Instagram", "TikTok", "Google", "WhatsApp"],
    analyzeBtn: "🎯 Predict performance",
    analyzing: "Analyzing with AI...",
    compareTitle: "Compare versions",
    addVersion: "+ Add version B",
    version: "Version",
    overallScore: "Overall score",
    interactionProb: "Interaction probability",
    ctrEstimate: "Estimated CTR",
    conversionRate: "Estimated conversion rate",
    strengthsTitle: "Strengths",
    weaknessTitle: "Areas for improvement",
    recommendationsTitle: "Recommendations",
    winnerLabel: "🏆 Winning version",
    newAnalysis: "+ New analysis",
    scoreBreakdown: "Score breakdown",
    dimensions: ["Message clarity", "CTA strength", "Audience relevance", "Urgency", "Differentiation", "Emotional tone"],
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

function ScoreGauge({ score, size = 120 }) {
  const color = score >= 80 ? "#16a34a" : score >= 60 ? "#f59e0b" : "#ef4444";
  const r = size * 0.4;
  const circ = 2 * Math.PI * r;
  const dash = (score / 100) * circ * 0.75;
  return (
    <div style={{ position: "relative", width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ transform: "rotate(135deg)" }}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#e5e7eb" strokeWidth={size*0.08} strokeDasharray={`${circ * 0.75} ${circ}`} strokeLinecap="round" />
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={size*0.08} strokeDasharray={`${dash} ${circ}`} strokeLinecap="round" style={{ transition: "stroke-dasharray .8s ease" }} />
      </svg>
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontSize: size * 0.22, fontWeight: 900, color, lineHeight: 1 }}>{score}</span>
        <span style={{ fontSize: size * 0.1, color: "#9ca3af", fontWeight: 600 }}>/100</span>
      </div>
    </div>
  );
}

function DimensionBar({ label, score, index }) {
  const colors = ["#26215C","#A32D2D","#16a34a","#f59e0b","#0891b2","#26215C"];
  const color = colors[index % colors.length];
  return (
    <div style={{ marginBottom: 10 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
        <span style={{ fontSize: 12, color: "#6b7280" }}>{label}</span>
        <span style={{ fontSize: 12, fontWeight: 700, color }}>{score}</span>
      </div>
      <div style={{ background: "#f3f4f6", borderRadius: 4, height: 6 }}>
        <div style={{ width: `${score}%`, height: "100%", background: color, borderRadius: 4, transition: "width .6s" }} />
      </div>
    </div>
  );
}

export default function VoxaPredict() {
  const [lang, setLang] = useState("es");
  const [form, setForm] = useState({ text: "", cta: "", audience: "", sector: "", location: "", objective: "", channel: "Facebook" });
  const [versionB, setVersionB] = useState(null);
  const [showB, setShowB] = useState(false);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const t = T[lang];

  const canAnalyze = form.text.trim().length > 20 && form.sector && form.objective;

  const buildPrompt = (adData, version = "A") => `Eres un experto en predicción de rendimiento publicitario con acceso a datos de millones de campañas en LATAM. Analiza este anuncio y predice su rendimiento.

VERSIÓN ${version}:
Texto: ${adData.text}
CTA: ${adData.cta}
Audiencia: ${adData.audience}
Sector: ${adData.sector}
Ubicación: ${adData.location}
Objetivo: ${adData.objective}
Canal: ${adData.channel}

Responde ÚNICAMENTE con este JSON válido en ${lang === "es" ? "español" : "English"}:
{
  "score": 78,
  "interactionProb": "12-18%",
  "ctrEstimate": "2.4%",
  "conversionRate": "3.1%",
  "dimensions": {
    "claridad": 82,
    "cta": 75,
    "relevancia": 88,
    "urgencia": 65,
    "diferenciacion": 70,
    "tono": 80
  },
  "strengths": ["fortaleza 1", "fortaleza 2", "fortaleza 3"],
  "weaknesses": ["debilidad 1", "debilidad 2"],
  "recommendations": ["recomendacion específica 1", "recomendacion específica 2", "recomendacion específica 3"],
  "improvedVersion": "versión mejorada del anuncio con los cambios aplicados"
}`;

  const analyze = async () => {
    setLoading(true);
    try {
      const prompts = [buildPrompt(form, "A")];
      if (showB && versionB) prompts.push(buildPrompt(versionB, "B"));
      const responses = await Promise.all(prompts.map(p =>
        fetch("https://api.anthropic.com/v1/messages", {
          method: "POST", headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ model: "claude-sonnet-4-6", max_tokens: 1000, messages: [{ role: "user", content: p }] })
        }).then(r => r.json()).then(d => JSON.parse((d.content?.[0]?.text || "{}").replace(/```json|```/g, "").trim()))
      ));
      setResults(responses);
    } catch { alert(lang === "es" ? "Error al analizar" : "Analysis error"); }
    finally { setLoading(false); }
  };

  const inp = { width: "100%", padding: "11px 14px", fontSize: 14, borderRadius: 10, border: "1.5px solid #e5e7eb", fontFamily: "inherit", color: "#111", outline: "none", boxSizing: "border-box", background: "white" };

  const winner = results && results.length > 1 ? (results[0].score >= results[1].score ? "A" : "B") : null;

  return (
    <div style={{ fontFamily: "'Inter',system-ui,sans-serif", background: "#f5f3ef", minHeight: "100vh" }}>
      <div style={{ background: "#26215C", padding: "0 5%", height: 62, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <div style={{ width: 30, height: 30, background: "#A32D2D", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "white", fontSize: 14 }}>V</div>
          <div>
            <span style={{ fontWeight: 900, fontSize: 16, color: "white" }}>Voxa Predict</span>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", marginLeft: 8 }}>{t.badge}</span>
          </div>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          {results && <button onClick={() => setResults(null)} style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", background: "none", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 8, padding: "6px 12px", cursor: "pointer" }}>{t.newAnalysis}</button>}
          <LangToggle lang={lang} setLang={setLang} />
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "28px 5%" }}>
        {!results ? (
          <div style={{ display: "grid", gridTemplateColumns: showB ? "1fr 1fr" : "1fr", gap: 20 }}>
            {[{ data: form, setData: setForm, ver: "A" }, ...(showB ? [{ data: versionB || {}, setData: setVersionB, ver: "B" }] : [])].map(({ data, setData, ver }) => (
              <div key={ver} style={{ background: "white", border: ver === "B" ? "2px solid #A32D2D" : "1px solid #e8e8f0", borderRadius: 16, padding: "22px" }}>
                <p style={{ fontSize: 14, fontWeight: 800, color: "#26215C", margin: "0 0 16px" }}>
                  {ver === "B" ? "🔴 " : "🔵 "}{t.version} {ver}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <div><label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.textLabel}</label>
                    <textarea value={data.text || ""} onChange={e => setData(d => ({ ...d, text: e.target.value }))} placeholder={t.textPh} style={{ ...inp, minHeight: 100, resize: "none" }} /></div>
                  <div><label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.ctaLabel}</label>
                    <input value={data.cta || ""} onChange={e => setData(d => ({ ...d, cta: e.target.value }))} placeholder={t.ctaPh} style={inp} /></div>
                  <div><label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.audienceLabel}</label>
                    <input value={data.audience || ""} onChange={e => setData(d => ({ ...d, audience: e.target.value }))} placeholder={t.audiencePh} style={inp} /></div>
                  {ver === "A" && <>
                    <div><label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 7, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.sectorLabel}</label>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>{t.sectors.map(s => <button key={s} onClick={() => setData(d => ({ ...d, sector: s }))} style={{ padding: "6px 11px", borderRadius: 8, border: data.sector === s ? "2px solid #26215C" : "1.5px solid #e5e7eb", background: data.sector === s ? "#FFF8F5" : "white", fontSize: 12, fontWeight: data.sector === s ? 700 : 400, color: data.sector === s ? "#26215C" : "#374151", cursor: "pointer" }}>{data.sector === s ? "✓ " : ""}{s}</button>)}</div></div>
                    <div><label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 7, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.objectiveLabel}</label>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>{t.objectives.map(o => <button key={o} onClick={() => setData(d => ({ ...d, objective: o }))} style={{ padding: "8px 14px", borderRadius: 9, border: data.objective === o ? "2px solid #26215C" : "1.5px solid #e5e7eb", background: data.objective === o ? "#FFF8F5" : "white", fontSize: 13, fontWeight: data.objective === o ? 700 : 400, color: data.objective === o ? "#26215C" : "#374151", cursor: "pointer", textAlign: "left", display: "flex", justifyContent: "space-between" }}><span>{o}</span>{data.objective === o && <span>✓</span>}</button>)}</div></div>
                    <div><label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 7, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.channelLabel}</label>
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>{t.channels.map(c => <button key={c} onClick={() => setData(d => ({ ...d, channel: c }))} style={{ padding: "7px 12px", borderRadius: 8, border: data.channel === c ? "2px solid #26215C" : "1.5px solid #e5e7eb", background: data.channel === c ? "#FFF8F5" : "white", fontSize: 12, fontWeight: data.channel === c ? 700 : 400, color: data.channel === c ? "#26215C" : "#374151", cursor: "pointer" }}>{data.channel === c ? "✓ " : ""}{c}</button>)}</div></div>
                    <div><label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.locationLabel}</label>
                      <input value={data.location || ""} onChange={e => setData(d => ({ ...d, location: e.target.value }))} placeholder={t.locationPh} style={inp} /></div>
                  </>}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            {winner && (
              <div style={{ background: "linear-gradient(135deg,#26215C,#A32D2D)", borderRadius: 16, padding: "20px 24px", marginBottom: 20, display: "flex", alignItems: "center", gap: 16 }}>
                <span style={{ fontSize: 36 }}>🏆</span>
                <div>
                  <p style={{ fontSize: 16, fontWeight: 800, color: "white", margin: "0 0 4px" }}>{t.winnerLabel}: {t.version} {winner}</p>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", margin: 0 }}>
                    {lang === "es" ? `Score ${results[winner === "A" ? 0 : 1].score} vs ${results[winner === "A" ? 1 : 0].score}` : `Score ${results[winner === "A" ? 0 : 1].score} vs ${results[winner === "A" ? 1 : 0].score}`}
                  </p>
                </div>
              </div>
            )}
            <div style={{ display: "grid", gridTemplateColumns: `repeat(${results.length},1fr)`, gap: 16 }}>
              {results.map((res, idx) => (
                <div key={idx} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {results.length > 1 && <p style={{ fontSize: 14, fontWeight: 800, color: "#26215C", margin: 0 }}>{idx === 0 ? "🔵" : "🔴"} {t.version} {idx === 0 ? "A" : "B"}</p>}
                  <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 16, padding: "24px", textAlign: "center" }}>
                    <ScoreGauge score={res.score} size={140} />
                    <p style={{ fontSize: 13, fontWeight: 700, color: "#26215C", margin: "12px 0 16px" }}>{t.overallScore}</p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
                      {[[t.interactionProb, res.interactionProb], [t.ctrEstimate, res.ctrEstimate], [t.conversionRate, res.conversionRate]].map(([l, v]) => (
                        <div key={l} style={{ background: "#f8f8fc", borderRadius: 8, padding: "10px 8px" }}>
                          <p style={{ fontSize: 14, fontWeight: 800, color: "#A32D2D", margin: "0 0 2px" }}>{v}</p>
                          <p style={{ fontSize: 10, color: "#9ca3af", margin: 0, lineHeight: 1.3 }}>{l}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 14, padding: "18px" }}>
                    <p style={{ fontSize: 12, fontWeight: 700, color: "#26215C", margin: "0 0 14px", textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.scoreBreakdown}</p>
                    {t.dimensions.map((dim, i) => {
                      const vals = Object.values(res.dimensions || {});
                      return <DimensionBar key={dim} label={dim} score={vals[i] || 70} index={i} />;
                    })}
                  </div>
                  <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 14, padding: "16px 18px" }}>
                    <p style={{ fontSize: 12, fontWeight: 700, color: "#16a34a", margin: "0 0 10px" }}>✅ {t.strengthsTitle}</p>
                    {(res.strengths || []).map((s, i) => <div key={i} style={{ display: "flex", gap: 8, marginBottom: 6 }}><span style={{ color: "#16a34a" }}>✓</span><span style={{ fontSize: 13, color: "#374151" }}>{s}</span></div>)}
                  </div>
                  <div style={{ background: "#fff5f5", border: "1px solid #fecaca", borderRadius: 14, padding: "16px 18px" }}>
                    <p style={{ fontSize: 12, fontWeight: 700, color: "#A32D2D", margin: "0 0 10px" }}>⚠️ {t.weaknessTitle}</p>
                    {(res.weaknesses || []).map((w, i) => <div key={i} style={{ display: "flex", gap: 8, marginBottom: 6 }}><span style={{ color: "#A32D2D" }}>↑</span><span style={{ fontSize: 13, color: "#374151" }}>{w}</span></div>)}
                  </div>
                  <div style={{ background: "#FFF8F5", border: "1px solid #F5C6C6", borderRadius: 14, padding: "16px 18px" }}>
                    <p style={{ fontSize: 12, fontWeight: 700, color: "#26215C", margin: "0 0 10px" }}>🎯 {t.recommendationsTitle}</p>
                    {(res.recommendations || []).map((r, i) => (
                      <div key={i} style={{ display: "flex", gap: 10, marginBottom: 8 }}>
                        <div style={{ width: 20, height: 20, background: "#26215C", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: "white", flexShrink: 0 }}>{i + 1}</div>
                        <span style={{ fontSize: 13, color: "#374151", lineHeight: 1.5 }}>{r}</span>
                      </div>
                    ))}
                  </div>
                  {res.improvedVersion && (
                    <div style={{ background: "#26215C", borderRadius: 14, padding: "16px 18px" }}>
                      <p style={{ fontSize: 12, fontWeight: 700, color: "#FAEEDA", margin: "0 0 10px" }}>⚡ {lang === "es" ? "Versión mejorada sugerida" : "Suggested improved version"}</p>
                      <p style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", margin: 0, lineHeight: 1.7 }}>{res.improvedVersion}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {!results && (
          <div style={{ marginTop: 20, display: "flex", gap: 10, flexWrap: "wrap" }}>
            {!showB && <button onClick={() => { setShowB(true); setVersionB({ text: "", cta: "", audience: "" }); }} style={{ padding: "11px 20px", borderRadius: 10, border: "1.5px dashed #ddd6fe", background: "transparent", color: "#26215C", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>{t.addVersion}</button>}
            <button onClick={analyze} disabled={!canAnalyze || loading}
              style={{ flex: 1, padding: "14px", borderRadius: 12, border: "none", background: canAnalyze && !loading ? "#A32D2D" : "#e5e7eb", color: "white", fontSize: 15, fontWeight: 800, cursor: canAnalyze && !loading ? "pointer" : "not-allowed", boxShadow: canAnalyze && !loading ? "0 4px 16px rgba(163,45,45,.3)" : "none" }}>
              {loading ? (
                <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                  <span style={{ width: 16, height: 16, border: "2px solid rgba(255,255,255,.4)", borderTopColor: "white", borderRadius: "50%", display: "inline-block", animation: "spin .7s linear infinite" }} />
                  {t.analyzing}
                </span>
              ) : t.analyzeBtn}
            </button>
          </div>
        )}
      </div>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}

import { useState, useEffect } from "react";

const T = {
  es: {
    title: "A/B Testing en vivo",
    badge: "⚡ El único en LATAM — publica A y B, Voxa detiene la perdedora",
    sub: "Crea dos versiones de tu anuncio. Voxa las publica simultáneamente, mide en tiempo real y detiene automáticamente la que funciona menos.",
    newTest: "+ Nuevo test",
    tabs: ["Tests activos", "Completados", "Crear test"],
    createTitle: "Crear nuevo A/B test",
    versionA: "Versión A",
    versionB: "Versión B",
    headlineLabel: "Titular del anuncio",
    bodyLabel: "Cuerpo del anuncio",
    ctaLabel: "Llamado a la acción",
    imageLabel: "Imagen / enfoque visual",
    budgetLabel: "Presupuesto total del test",
    budgets: ["$10 ($5 por versión)", "$20 ($10 por versión)", "$40 ($20 por versión)", "$100 ($50 por versión)"],
    durationLabel: "Duración del test",
    durations: ["24 horas", "48 horas", "72 horas", "1 semana"],
    channelLabel: "Canal",
    channels: ["Facebook", "Instagram", "Ambos"],
    audienceLabel: "Audiencia objetivo",
    audiencePh: "Ej: Mujeres 25-45 años, Tegucigalpa",
    launchBtn: "🚀 Lanzar A/B test",
    launching: "Lanzando test...",
    winnerLabel: "🏆 Ganadora",
    loserLabel: "Detenida automáticamente",
    tieLabel: "Empate técnico",
    runningLabel: "⚡ En vivo",
    pauseBtn: "Pausar",
    stopBtn: "Detener test",
    applyWinnerBtn: "Aplicar ganadora →",
    metrics: ["Alcance", "Clics", "CTR", "Costo/clic", "Conversiones"],
    timeLeft: "Tiempo restante",
    confidence: "Confianza estadística",
    autoStop: "Voxa detuvo automáticamente la versión B",
    viewBtn: "Ver detalles",
    emptyTitle: "Aún no tienes tests activos",
    emptySub: "Crea tu primer A/B test y descubre qué versión de tu anuncio genera más resultados.",
    headlinePh: "Ej: ¡Oferta especial esta semana!",
    bodyPh: "Ej: No pierdas esta oportunidad...",
    ctaPh: "Ej: Escríbenos por WhatsApp",
    imagePh: "Ej: Foto del producto, diseño con texto, foto de cliente...",
    tip: "💡 Tip: Cambia solo UN elemento entre A y B para obtener resultados concluyentes.",
  },
  en: {
    title: "Live A/B Testing",
    badge: "⚡ The only one in LATAM — publish A and B, Voxa stops the loser",
    sub: "Create two versions of your ad. Voxa publishes them simultaneously, measures in real time and automatically stops the one that works less.",
    newTest: "+ New test",
    tabs: ["Active tests", "Completed", "Create test"],
    createTitle: "Create new A/B test",
    versionA: "Version A",
    versionB: "Version B",
    headlineLabel: "Ad headline",
    bodyLabel: "Ad body",
    ctaLabel: "Call to action",
    imageLabel: "Image / visual focus",
    budgetLabel: "Total test budget",
    budgets: ["$10 ($5 per version)", "$20 ($10 per version)", "$40 ($20 per version)", "$100 ($50 per version)"],
    durationLabel: "Test duration",
    durations: ["24 hours", "48 hours", "72 hours", "1 week"],
    channelLabel: "Channel",
    channels: ["Facebook", "Instagram", "Both"],
    audienceLabel: "Target audience",
    audiencePh: "E.g.: Women 25-45, Tegucigalpa",
    launchBtn: "🚀 Launch A/B test",
    launching: "Launching test...",
    winnerLabel: "🏆 Winner",
    loserLabel: "Automatically stopped",
    tieLabel: "Statistical tie",
    runningLabel: "⚡ Live",
    pauseBtn: "Pause",
    stopBtn: "Stop test",
    applyWinnerBtn: "Apply winner →",
    metrics: ["Reach", "Clicks", "CTR", "Cost/click", "Conversions"],
    timeLeft: "Time remaining",
    confidence: "Statistical confidence",
    autoStop: "Voxa automatically stopped version B",
    viewBtn: "View details",
    emptyTitle: "No active tests yet",
    emptySub: "Create your first A/B test and discover which version of your ad generates more results.",
    headlinePh: "E.g.: Special offer this week!",
    bodyPh: "E.g.: Don't miss this opportunity...",
    ctaPh: "E.g.: Message us on WhatsApp",
    imagePh: "E.g.: Product photo, design with text, customer photo...",
    tip: "💡 Tip: Change only ONE element between A and B to get conclusive results.",
  }
};

const MOCK_ACTIVE = [
  {
    id: 1, name: "Promo Navidad — Titular",
    status: "running", channel: "Facebook", timeLeft: "18h 32m", confidence: 72,
    audience: "Mujeres 25-40 años, Tegucigalpa",
    a: { headline: "🎄 ¡Navidad con descuento!", ctr: 4.8, clicks: 124, reach: 2580, cpc: 0.12, conv: 8, score: 87 },
    b: { headline: "Aprovecha nuestras ofertas navideñas", ctr: 2.9, clicks: 71, reach: 2447, cpc: 0.19, conv: 3, score: 64 },
    winner: "a", autoStopped: false,
  },
];

const MOCK_COMPLETED = [
  {
    id: 2, name: "Promoción Día de la Madre — CTA",
    status: "completed", channel: "Instagram", confidence: 95,
    audience: "Mujeres 30-55 años",
    a: { headline: "Reserva ahora →", ctr: 5.2, clicks: 312, reach: 6000, cpc: 0.09, conv: 24, score: 92 },
    b: { headline: "Ver más →", ctr: 2.1, clicks: 126, reach: 6000, cpc: 0.21, conv: 9, score: 61 },
    winner: "a", autoStopped: true,
    saving: "$18.90 ahorrados al detener la versión B",
  },
  {
    id: 3, name: "Black Friday — Imagen vs. texto",
    status: "completed", channel: "Facebook", confidence: 88,
    audience: "Adultos 25-50 años",
    a: { headline: "Foto de producto", ctr: 6.1, clicks: 488, reach: 8000, cpc: 0.07, conv: 41, score: 94 },
    b: { headline: "Diseño con texto", ctr: 3.4, clicks: 272, reach: 8000, cpc: 0.13, conv: 18, score: 72 },
    winner: "a", autoStopped: true,
    saving: "$22.40 ahorrados al detener la versión B",
  },
];

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

function MiniBar({ value, max, color }) {
  const pct = Math.round((value / max) * 100);
  return (
    <div style={{ background: "#f3f4f6", borderRadius: 3, height: 5, overflow: "hidden", marginTop: 3 }}>
      <div style={{ width: `${pct}%`, height: "100%", background: color, borderRadius: 3 }} />
    </div>
  );
}

function TestCard({ test, t, onApply }) {
  const aWins = test.a.score > test.b.score;
  const tie = Math.abs(test.a.score - test.b.score) < 5;
  const isRunning = test.status === "running";

  return (
    <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 18, overflow: "hidden", marginBottom: 16 }}>
      {/* HEADER */}
      <div style={{ background: isRunning ? "#26215C" : "#1a1730", padding: "16px 20px", display: "flex", justify:"space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
        <div>
          <p style={{ fontSize: 15, fontWeight: 800, color: "white", margin: "0 0 4px" }}>{test.name}</p>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", margin: 0 }}>{test.channel} · {test.audience}</p>
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
          {isRunning && (
            <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, fontWeight: 700, color: "#86efac", background: "rgba(21,128,61,.2)", border: "1px solid rgba(21,128,61,.3)", padding: "4px 12px", borderRadius: 20 }}>
              <span style={{ width: 6, height: 6, background: "#86efac", borderRadius: "50%", animation: "blink 1s ease-in-out infinite" }} />
              {t.runningLabel}
            </span>
          )}
          <span style={{ fontSize: 12, fontWeight: 700, color: "#FAEEDA", background: "rgba(250,238,218,.1)", padding: "4px 12px", borderRadius: 20 }}>
            {t.confidence}: {test.confidence}%
          </span>
          {isRunning && <span style={{ fontSize: 12, color: "rgba(255,255,255,.4)" }}>⏱ {test.timeLeft}</span>}
        </div>
      </div>

      {/* AUTO STOP BANNER */}
      {test.autoStopped && (
        <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderTop: "none", padding: "10px 20px", display: "flex", gap: 8, alignItems: "center" }}>
          <span style={{ fontSize: 14 }}>✅</span>
          <span style={{ fontSize: 12, color: "#16a34a", fontWeight: 600 }}>{t.autoStop} · {test.saving}</span>
        </div>
      )}

      {/* VERSIONES */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
        {[
          { key: "a", label: t.versionA, data: test.a, isWinner: !tie && aWins },
          { key: "b", label: t.versionB, data: test.b, isWinner: !tie && !aWins },
        ].map(({ key, label, data, isWinner }) => (
          <div key={key} style={{ padding: "20px", borderRight: key === "a" ? "1px solid #f0f0f5" : "none", background: isWinner ? "#FAEEDA08" : "white", position: "relative" }}>
            {isWinner && (
              <div style={{ position: "absolute", top: 12, right: 12, background: "#16a34a", color: "white", fontSize: 10, fontWeight: 700, padding: "3px 9px", borderRadius: 20 }}>
                {t.winnerLabel}
              </div>
            )}
            {!isWinner && test.status === "completed" && (
              <div style={{ position: "absolute", top: 12, right: 12, background: "#ef4444", color: "white", fontSize: 10, fontWeight: 700, padding: "3px 9px", borderRadius: 20 }}>
                {t.loserLabel}
              </div>
            )}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: key === "a" ? "#26215C" : "#A32D2D", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 900, fontSize: 13 }}>{key.toUpperCase()}</div>
              <span style={{ fontSize: 12, fontWeight: 700, color: "#374151" }}>{label}</span>
            </div>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#26215C", margin: "0 0 14px", lineHeight: 1.4 }}>"{data.headline}"</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              {[
                { l: "CTR", v: `${data.ctr}%`, max: 10, color: "#26215C" },
                { l: lang === "es" ? "Clics" : "Clicks", v: data.clicks, max: 500, color: "#A32D2D" },
                { l: lang === "es" ? "Alcance" : "Reach", v: data.reach.toLocaleString(), max: 8000, color: "#0891b2" },
                { l: "CPC", v: `$${data.cpc}`, max: 0.5, color: "#f59e0b", inverted: true },
              ].map((m, i) => (
                <div key={i}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 2 }}>
                    <span style={{ fontSize: 11, color: "#9ca3af" }}>{m.l}</span>
                    <span style={{ fontSize: 12, fontWeight: 700, color: "#374151" }}>{m.v}</span>
                  </div>
                  <MiniBar value={m.inverted ? (0.5 - parseFloat(data.cpc)) * 10 : parseFloat(m.v)} max={m.inverted ? 4 : parseFloat(m.max)} color={isWinner ? "#16a34a" : m.color} />
                </div>
              ))}
            </div>
            <div style={{ marginTop: 14, background: isWinner ? "#f0fdf4" : "#f9fafb", borderRadius: 8, padding: "8px 10px", textAlign: "center" }}>
              <span style={{ fontSize: 18, fontWeight: 900, color: isWinner ? "#16a34a" : "#9ca3af" }}>{data.score}</span>
              <span style={{ fontSize: 11, color: "#9ca3af" }}>/100</span>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div style={{ padding: "14px 20px", borderTop: "1px solid #f0f0f5", display: "flex", gap: 8, flexWrap: "wrap" }}>
        {isRunning ? (
          <>
            <button style={{ padding: "8px 16px", borderRadius: 9, border: "1px solid #e5e7eb", background: "white", color: "#374151", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>{t.pauseBtn}</button>
            <button style={{ padding: "8px 16px", borderRadius: 9, border: "none", background: "#f3f4f6", color: "#9ca3af", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>{t.stopBtn}</button>
          </>
        ) : (
          <button onClick={onApply} style={{ padding: "8px 20px", borderRadius: 9, border: "none", background: "#A32D2D", color: "white", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>{t.applyWinnerBtn}</button>
        )}
      </div>
    </div>
  );
}

export default function VoxaABTesting() {
  const [lang, setLang] = useState("es");
  const [tab, setTab] = useState(0);
  const [launching, setLaunching] = useState(false);
  const [launched, setLaunched] = useState(false);
  const [active, setActive] = useState(MOCK_ACTIVE);
  const [form, setForm] = useState({
    a: { headline: "", body: "", cta: "", image: "" },
    b: { headline: "", body: "", cta: "", image: "" },
    budget: "", duration: "", channel: "", audience: "",
  });
  const t = T[lang];
  const upd = (ver, k, v) => setForm(f => ({ ...f, [ver]: { ...f[ver], [k]: v } }));
  const updF = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const canLaunch = form.a.headline && form.b.headline && form.budget && form.duration && form.channel;

  const launch = async () => {
    setLaunching(true);
    await new Promise(r => setTimeout(r, 2000));
    setLaunching(false);
    setLaunched(true);
    const newTest = {
      id: Date.now(), name: `Test: ${form.a.headline.substring(0, 30)}... vs ${form.b.headline.substring(0, 20)}...`,
      status: "running", channel: form.channel, timeLeft: form.duration, confidence: 0,
      audience: form.audience || "Audiencia configurada",
      a: { headline: form.a.headline, ctr: 0, clicks: 0, reach: 0, cpc: 0, conv: 0, score: 0 },
      b: { headline: form.b.headline, ctr: 0, clicks: 0, reach: 0, cpc: 0, conv: 0, score: 0 },
      winner: null, autoStopped: false,
    };
    setActive(prev => [newTest, ...prev]);
    setTimeout(() => { setLaunched(false); setTab(0); setForm({ a: { headline: "", body: "", cta: "", image: "" }, b: { headline: "", body: "", cta: "", image: "" }, budget: "", duration: "", channel: "", audience: "" }); }, 2500);
  };

  const inp = { width: "100%", padding: "10px 13px", fontSize: 13, borderRadius: 9, border: "1.5px solid #e5e7eb", fontFamily: "inherit", color: "#111", outline: "none", boxSizing: "border-box", background: "white" };

  return (
    <div style={{ fontFamily: "'Inter',system-ui,sans-serif", background: "#f5f3ef", minHeight: "100vh" }}>
      <div style={{ background: "linear-gradient(135deg,#26215C,#A32D2D)", padding: "0 5%", height: 62, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <div style={{ width: 30, height: 30, background: "rgba(255,255,255,0.2)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "white", fontSize: 14 }}>V</div>
          <div>
            <span style={{ fontWeight: 900, fontSize: 16, color: "white" }}>{t.title}</span>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", marginLeft: 8, display: "none" }}>{t.badge}</span>
          </div>
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <button onClick={() => setTab(2)} style={{ fontSize: 12, fontWeight: 700, color: "white", background: "#A32D2D", border: "none", borderRadius: 8, padding: "7px 14px", cursor: "pointer" }}>{t.newTest}</button>
          <LangToggle lang={lang} setLang={setLang} />
        </div>
      </div>

      {/* BADGE */}
      <div style={{ background: "#FAEEDA", borderBottom: "1px solid #F5C6C6", padding: "10px 5%", textAlign: "center" }}>
        <span style={{ fontSize: 12, fontWeight: 700, color: "#A32D2D" }}>{t.badge}</span>
      </div>

      <div style={{ background: "white", borderBottom: "1px solid #e8e8f0", padding: "0 5%", display: "flex" }}>
        {t.tabs.map((tb, i) => (
          <button key={i} onClick={() => setTab(i)}
            style={{ padding: "13px 18px", border: "none", borderBottom: tab === i ? "2px solid #A32D2D" : "2px solid transparent", background: "transparent", fontSize: 13, fontWeight: tab === i ? 700 : 500, color: tab === i ? "#A32D2D" : "#6b7280", cursor: "pointer", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: 6 }}>
            {["⚡","✅","➕"][i]} {tb}
            {i === 0 && active.length > 0 && <span style={{ background: "#A32D2D", color: "white", fontSize: 10, fontWeight: 700, padding: "1px 6px", borderRadius: 10 }}>{active.length}</span>}
          </button>
        ))}
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "24px 5%" }}>

        {/* ACTIVOS */}
        {tab === 0 && (
          active.length === 0 ? (
            <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 16, padding: "60px 24px", textAlign: "center" }}>
              <p style={{ fontSize: 40, margin: "0 0 12px" }}>⚡</p>
              <p style={{ fontSize: 15, fontWeight: 700, color: "#26215C", margin: "0 0 6px" }}>{t.emptyTitle}</p>
              <p style={{ fontSize: 13, color: "#9ca3af", margin: "0 0 20px" }}>{t.emptySub}</p>
              <button onClick={() => setTab(2)} style={{ padding: "10px 24px", background: "#A32D2D", color: "white", border: "none", borderRadius: 10, fontSize: 13, fontWeight: 700, cursor: "pointer" }}>{t.newTest}</button>
            </div>
          ) : active.map(test => <TestCard key={test.id} test={test} t={t} lang={lang} onApply={() => {}} />)
        )}

        {/* COMPLETADOS */}
        {tab === 1 && (
          MOCK_COMPLETED.map(test => <TestCard key={test.id} test={test} t={t} lang={lang} onApply={() => {}} />)
        )}

        {/* CREAR TEST */}
        {tab === 2 && (
          <div>
            {launched ? (
              <div style={{ background: "#f0fdf4", border: "2px solid #bbf7d0", borderRadius: 16, padding: "48px", textAlign: "center" }}>
                <p style={{ fontSize: 56, margin: "0 0 14px" }}>🚀</p>
                <h3 style={{ fontSize: 20, fontWeight: 900, color: "#16a34a", margin: "0 0 8px" }}>{lang === "es" ? "¡Test lanzado! Las dos versiones están en vivo." : "Test launched! Both versions are live."}</h3>
                <p style={{ fontSize: 14, color: "#374151", margin: 0 }}>{lang === "es" ? "Voxa monitorea en tiempo real y detendrá automáticamente la versión perdedora." : "Voxa monitors in real time and will automatically stop the losing version."}</p>
              </div>
            ) : (
              <div>
                <div style={{ background: "#FFF8F5", border: "1px solid #F5C6C6", borderRadius: 12, padding: "12px 16px", marginBottom: 20, display: "flex", gap: 8, alignItems: "flex-start" }}>
                  <span style={{ fontSize: 16 }}>💡</span>
                  <p style={{ fontSize: 13, color: "#374151", margin: 0 }}>{t.tip}</p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
                  {[{ key: "a", label: t.versionA, color: "#26215C" }, { key: "b", label: t.versionB, color: "#A32D2D" }].map(({ key, label, color }) => (
                    <div key={key} style={{ background: "white", border: `2px solid ${color}20`, borderRadius: 14, padding: "18px", borderTop: `4px solid ${color}` }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                        <div style={{ width: 26, height: 26, background: color, borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 900, fontSize: 12 }}>{key.toUpperCase()}</div>
                        <span style={{ fontSize: 13, fontWeight: 700, color }}>{label}</span>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                        {[
                          [t.headlineLabel, "headline", t.headlinePh, false],
                          [t.bodyLabel, "body", t.bodyPh, true],
                          [t.ctaLabel, "cta", t.ctaPh, false],
                          [t.imageLabel, "image", t.imagePh, false],
                        ].map(([label, field, ph, multi]) => (
                          <div key={field}>
                            <label style={{ fontSize: 10, fontWeight: 700, color: "#9ca3af", display: "block", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</label>
                            {multi ? (
                              <textarea value={form[key][field]} onChange={e => upd(key, field, e.target.value)} placeholder={ph} style={{ ...inp, minHeight: 60, resize: "none" }} />
                            ) : (
                              <input value={form[key][field]} onChange={e => upd(key, field, e.target.value)} placeholder={ph} style={inp} />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 14, padding: "18px", marginBottom: 16 }}>
                  <p style={{ fontSize: 13, fontWeight: 700, color: "#26215C", margin: "0 0 14px" }}>⚙️ {lang === "es" ? "Configuración del test" : "Test configuration"}</p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    <div>
                      <label style={{ fontSize: 10, fontWeight: 700, color: "#9ca3af", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.budgetLabel}</label>
                      <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                        {t.budgets.map(b => (
                          <button key={b} onClick={() => updF("budget", b)} style={{ padding: "8px 12px", borderRadius: 8, border: form.budget === b ? "2px solid #26215C" : "1px solid #e5e7eb", background: form.budget === b ? "#f5f3ff" : "white", fontSize: 12, fontWeight: form.budget === b ? 700 : 400, color: form.budget === b ? "#26215C" : "#374151", cursor: "pointer", textAlign: "left" }}>
                            {form.budget === b ? "✓ " : ""}{b}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                      <div>
                        <label style={{ fontSize: 10, fontWeight: 700, color: "#9ca3af", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.durationLabel}</label>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                          {t.durations.map(d => (
                            <button key={d} onClick={() => updF("duration", d)} style={{ padding: "6px 11px", borderRadius: 8, border: form.duration === d ? "2px solid #26215C" : "1px solid #e5e7eb", background: form.duration === d ? "#f5f3ff" : "white", fontSize: 11, fontWeight: form.duration === d ? 700 : 400, color: form.duration === d ? "#26215C" : "#374151", cursor: "pointer" }}>
                              {d}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label style={{ fontSize: 10, fontWeight: 700, color: "#9ca3af", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.channelLabel}</label>
                        <div style={{ display: "flex", gap: 5 }}>
                          {t.channels.map(c => (
                            <button key={c} onClick={() => updF("channel", c)} style={{ padding: "6px 11px", borderRadius: 8, border: form.channel === c ? "2px solid #26215C" : "1px solid #e5e7eb", background: form.channel === c ? "#f5f3ff" : "white", fontSize: 11, fontWeight: form.channel === c ? 700 : 400, color: form.channel === c ? "#26215C" : "#374151", cursor: "pointer" }}>
                              {c}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label style={{ fontSize: 10, fontWeight: 700, color: "#9ca3af", display: "block", marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.audienceLabel}</label>
                        <input value={form.audience} onChange={e => updF("audience", e.target.value)} placeholder={t.audiencePh} style={{ ...inp, fontSize: 12 }} />
                      </div>
                    </div>
                  </div>
                </div>

                <button onClick={launch} disabled={!canLaunch || launching}
                  style={{ width: "100%", padding: "15px", borderRadius: 12, border: "none", background: canLaunch && !launching ? "linear-gradient(135deg,#26215C,#A32D2D)" : "#e5e7eb", color: "white", fontSize: 15, fontWeight: 800, cursor: canLaunch && !launching ? "pointer" : "not-allowed", boxShadow: canLaunch && !launching ? "0 4px 20px rgba(38,33,92,.3)" : "none" }}>
                  {launching ? (
                    <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                      <span style={{ width: 16, height: 16, border: "2px solid rgba(255,255,255,.4)", borderTopColor: "white", borderRadius: "50%", display: "inline-block", animation: "spin .7s linear infinite" }} />
                      {t.launching}
                    </span>
                  ) : t.launchBtn}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}@keyframes blink{0%,100%{opacity:1}50%{opacity:.3}}`}</style>
    </div>
  );
}

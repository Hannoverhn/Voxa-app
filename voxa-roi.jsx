import { useState } from "react";

const T = {
  es: {
    title: "Calculadora de ROI",
    sub: "Descubre exactamente si tu publicidad está generando dinero — o no",
    tabs: ["Este mes", "Mes anterior", "Proyección", "Análisis IA"],
    currentMonth: "Inversión de este mes",
    previousMonth: "Mes anterior (para comparar)",
    investment: "¿Cuánto invertiste en publicidad?",
    investmentPh: "Ej: 50",
    revenue: "¿Cuánto vendiste gracias a los anuncios?",
    revenuePh: "Ej: 320",
    clicks: "¿Cuántos clics tuvieron tus anuncios?",
    clicksPh: "Ej: 450",
    conversions: "¿Cuántos clientes nuevos conseguiste?",
    conversionsPh: "Ej: 12",
    productCost: "¿Cuánto te cuesta producir lo que vendes? (costo del producto/servicio)",
    productCostPh: "Ej: 80 (costo total de los 12 servicios)",
    channel: "¿En qué canal anunciaste?",
    channels: ["Facebook / Instagram", "Google Ads", "TikTok Ads", "Todos"],
    calculateBtn: "📊 Calcular mi ROI",
    calculating: "Analizando...",
    roiLabel: "ROI",
    roiSub: "Retorno sobre inversión",
    profitLabel: "Ganancia neta",
    cpaLabel: "Costo por cliente",
    cpcLabel: "Costo por clic",
    roas: "ROAS",
    roasSub: "Por cada $1 invertido, generaste",
    breakEven: "Punto de equilibrio",
    breakEvenSub: "Necesitas vender al menos",
    excellent: "🔥 Excelente",
    good: "✅ Bueno",
    average: "⚠️ Regular",
    bad: "❌ Mejorar",
    excellentDesc: "Tu publicidad está generando muy buenas ganancias. ¡Sigue así!",
    goodDesc: "Tu publicidad está funcionando bien. Hay espacio para mejorar.",
    averageDesc: "Tu publicidad está cubriendo costos pero podría rendir más.",
    badDesc: "Tu publicidad está costando más de lo que genera. Necesita ajustes.",
    vsLastMonth: "vs. mes anterior",
    projTitle: "Proyección si aumentas el presupuesto",
    projSub: "¿Cuánto podrías ganar si inviertes más?",
    projInvestment: "Presupuesto proyectado",
    projResult: "Ganancia proyectada",
    projROI: "ROI proyectado",
    aiTitle: "Análisis de tu IA personal",
    aiSub: "Basado en tus números, esto es lo que recomienda Voxa",
    analyzeBtn: "🤖 Analizar con IA",
    analyzing: "Analizando tus resultados...",
    metricsBenchmark: "Comparación con tu industria",
    yourMetric: "Tu métrica",
    industryAvg: "Promedio del sector",
    status: "Estado",
    resetBtn: "Limpiar y empezar de nuevo",
    currency: "$",
    enterData: "Ingresa tus datos para ver el análisis completo",
    tip: "💡 Consejo:",
    invested: "Invertiste",
    earned: "Ganaste",
    net: "Neto",
  },
  en: {
    title: "ROI Calculator",
    sub: "Find out exactly if your advertising is making money — or not",
    tabs: ["This month", "Last month", "Projection", "AI Analysis"],
    currentMonth: "This month's investment",
    previousMonth: "Last month (to compare)",
    investment: "How much did you invest in advertising?",
    investmentPh: "E.g.: 50",
    revenue: "How much did you sell thanks to the ads?",
    revenuePh: "E.g.: 320",
    clicks: "How many clicks did your ads get?",
    clicksPh: "E.g.: 450",
    conversions: "How many new customers did you get?",
    conversionsPh: "E.g.: 12",
    productCost: "How much does it cost you to produce what you sell?",
    productCostPh: "E.g.: 80 (total cost of 12 services)",
    channel: "Which channel did you advertise on?",
    channels: ["Facebook / Instagram", "Google Ads", "TikTok Ads", "All channels"],
    calculateBtn: "📊 Calculate my ROI",
    calculating: "Analyzing...",
    roiLabel: "ROI",
    roiSub: "Return on investment",
    profitLabel: "Net profit",
    cpaLabel: "Cost per customer",
    cpcLabel: "Cost per click",
    roas: "ROAS",
    roasSub: "For every $1 invested, you generated",
    breakEven: "Break-even point",
    breakEvenSub: "You need to sell at least",
    excellent: "🔥 Excellent",
    good: "✅ Good",
    average: "⚠️ Average",
    bad: "❌ Needs work",
    excellentDesc: "Your advertising is generating great returns. Keep it up!",
    goodDesc: "Your advertising is working well. There's room to improve.",
    averageDesc: "Your advertising is covering costs but could perform better.",
    badDesc: "Your advertising is costing more than it generates. Needs adjustments.",
    vsLastMonth: "vs. last month",
    projTitle: "Projection if you increase your budget",
    projSub: "How much could you earn if you invest more?",
    projInvestment: "Projected budget",
    projResult: "Projected profit",
    projROI: "Projected ROI",
    aiTitle: "Your personal AI analysis",
    aiSub: "Based on your numbers, here's what Voxa recommends",
    analyzeBtn: "🤖 Analyze with AI",
    analyzing: "Analyzing your results...",
    metricsBenchmark: "Comparison with your industry",
    yourMetric: "Your metric",
    industryAvg: "Industry average",
    status: "Status",
    resetBtn: "Clear and start over",
    currency: "$",
    enterData: "Enter your data to see the full analysis",
    tip: "💡 Tip:",
    invested: "Invested",
    earned: "Earned",
    net: "Net",
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

function MetricCard({ label, value, sub, color = "#26215C", bg = "#FFF8F0", big = false }) {
  return (
    <div style={{ background: bg, borderRadius: 14, padding: "18px 20px", flex: 1, minWidth: 120 }}>
      <p style={{ fontSize: 11, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 6px" }}>{label}</p>
      <p style={{ fontSize: big ? 36 : 28, fontWeight: 900, color, margin: "0 0 2px", letterSpacing: "-0.03em", lineHeight: 1 }}>{value}</p>
      {sub && <p style={{ fontSize: 12, color: "#6b7280", margin: 0 }}>{sub}</p>}
    </div>
  );
}

function MiniBar({ pct, color }) {
  return (
    <div style={{ background: "#e5e7eb", borderRadius: 4, height: 6, flex: 1 }}>
      <div style={{ width: `${Math.min(pct, 100)}%`, height: "100%", background: color, borderRadius: 4, transition: "width .5s" }} />
    </div>
  );
}

function calcROI(inv, rev, cost, clicks, convs) {
  const profit = rev - cost - inv;
  const roi = inv > 0 ? ((profit / inv) * 100) : 0;
  const roas = inv > 0 ? (rev / inv) : 0;
  const cpa = convs > 0 ? (inv / convs) : 0;
  const cpc = clicks > 0 ? (inv / clicks) : 0;
  const breakEven = inv + cost;
  return { profit, roi, roas, cpa, cpc, breakEven };
}

function getStatus(roi, t) {
  if (roi >= 200) return { label: t.excellent, color: "#16a34a", bg: "#f0fdf4", desc: t.excellentDesc };
  if (roi >= 100) return { label: t.good, color: "#0891b2", bg: "#f0f9ff", desc: t.goodDesc };
  if (roi >= 0) return { label: t.average, color: "#f59e0b", bg: "#fefce8", desc: t.averageDesc };
  return { label: t.bad, color: "#ef4444", bg: "#fff1f2", desc: t.badDesc };
}

export default function VoxaROI() {
  const [lang, setLang] = useState("es");
  const [tab, setTab] = useState(0);
  const [current, setCurrent] = useState({ inv: "", rev: "", clicks: "", convs: "", cost: "", channel: "Facebook / Instagram" });
  const [prev, setPrev] = useState({ inv: "", rev: "", clicks: "", convs: "", cost: "" });
  const [projBudget, setProjBudget] = useState(100);
  const [calculated, setCalculated] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState(null);
  const [loadingAI, setLoadingAI] = useState(false);
  const t = T[lang];

  const cur = {
    inv: parseFloat(current.inv) || 0,
    rev: parseFloat(current.rev) || 0,
    clicks: parseFloat(current.clicks) || 0,
    convs: parseFloat(current.convs) || 0,
    cost: parseFloat(current.cost) || 0,
  };
  const prv = {
    inv: parseFloat(prev.inv) || 0,
    rev: parseFloat(prev.rev) || 0,
    clicks: parseFloat(prev.clicks) || 0,
    convs: parseFloat(prev.convs) || 0,
    cost: parseFloat(prev.cost) || 0,
  };

  const curCalc = calcROI(cur.inv, cur.rev, cur.cost, cur.clicks, cur.convs);
  const prvCalc = calcROI(prv.inv, prv.rev, prv.cost, prv.clicks, prv.convs);
  const status = getStatus(curCalc.roi, t);

  // Projection: assumes same ROAS scales linearly (conservative: 80% efficiency)
  const baseROAS = curCalc.roas || 2;
  const projRevenue = projBudget * baseROAS * 0.85;
  const projCost = cur.convs > 0 ? (cur.cost / cur.rev) * projRevenue : projRevenue * 0.3;
  const projProfit = projRevenue - projCost - projBudget;
  const projROI = projBudget > 0 ? ((projProfit / projBudget) * 100) : 0;

  const pct = (val, max) => max > 0 ? Math.min((val / max) * 100, 100) : 0;

  const vsRev = prv.rev > 0 ? (((cur.rev - prv.rev) / prv.rev) * 100) : null;
  const vsROI = prv.inv > 0 ? (curCalc.roi - prvCalc.roi) : null;

  const canCalculate = cur.inv > 0 && cur.rev > 0;

  const analyzeWithAI = async () => {
    setLoadingAI(true);
    const prompt = `Eres un experto en análisis de publicidad digital para pequeños negocios latinoamericanos. Analiza estos resultados y da recomendaciones prácticas y específicas. Responde en ${lang === "es" ? "español" : "English"}.

Inversión publicitaria: $${cur.inv}
Ventas generadas: $${cur.rev}
Costo del producto/servicio: $${cur.cost}
Clics: ${cur.clicks}
Clientes nuevos: ${cur.convs}
Canal: ${current.channel}
ROI calculado: ${curCalc.roi.toFixed(1)}%
ROAS: ${curCalc.roas.toFixed(2)}x
Costo por cliente: $${curCalc.cpa.toFixed(2)}

${prv.inv > 0 ? `Mes anterior: inversión $${prv.inv}, ventas $${prv.rev}, ROI ${prvCalc.roi.toFixed(1)}%` : ""}

Responde ÚNICAMENTE con este JSON válido:
{
  "diagnostico": "diagnóstico honesto en 2-3 oraciones simples, como si hablaras con el dueño del negocio cara a cara",
  "mejora1": {"titulo": "título corto", "descripcion": "qué hacer específicamente, en términos simples"},
  "mejora2": {"titulo": "título corto", "descripcion": "qué hacer específicamente, en términos simples"},
  "mejora3": {"titulo": "título corto", "descripcion": "qué hacer específicamente, en términos simples"},
  "advertencia": "algo importante que deben saber o evitar",
  "potencial": "qué podría pasar si aplican los cambios (en términos de dinero o clientes)"
}`;

    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model: "claude-sonnet-4-6", max_tokens: 1000, messages: [{ role: "user", content: prompt }] })
      });
      const data = await res.json();
      const text = data.content?.[0]?.text || "";
      const parsed = JSON.parse(text.replace(/```json|```/g, "").trim());
      setAiAnalysis(parsed);
      setTab(3);
    } catch {
      setAiAnalysis({ diagnostico: lang === "es" ? "Error al analizar. Intenta de nuevo." : "Analysis error. Please try again.", mejora1: null, mejora2: null, mejora3: null, advertencia: "", potencial: "" });
    } finally { setLoadingAI(false); }
  };

  const inp = { padding: "11px 14px", fontSize: 14, borderRadius: 10, border: "1.5px solid #e5e7eb", fontFamily: "inherit", color: "#111", outline: "none", boxSizing: "border-box", background: "white", width: "100%" };
  const numInp = { ...inp, fontWeight: 700, fontSize: 18 };

  return (
    <div style={{ fontFamily: "'Inter',system-ui,sans-serif", background: "#f5f3ef", minHeight: "100vh" }}>

      {/* HEADER */}
      <div style={{ background: "#26215C", padding: "0 5%", height: 62, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <div style={{ width: 30, height: 30, background: "#A32D2D", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "white", fontSize: 14 }}>V</div>
          <span style={{ fontWeight: 900, fontSize: 17, color: "white", letterSpacing: "-0.03em" }}>Voxa</span>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>· {t.title}</span>
        </div>
        <LangToggle lang={lang} setLang={setLang} />
      </div>

      {/* TABS */}
      <div style={{ background: "white", borderBottom: "1px solid #e8e8f0", padding: "0 5%", display: "flex", overflowX: "auto" }}>
        {t.tabs.map((tb, i) => (
          <button key={i} onClick={() => setTab(i)}
            style={{ padding: "14px 20px", border: "none", borderBottom: tab === i ? "2px solid #A32D2D" : "2px solid transparent", background: "transparent", fontSize: 13, fontWeight: tab === i ? 700 : 500, color: tab === i ? "#A32D2D" : "#6b7280", cursor: "pointer", whiteSpace: "nowrap" }}>
            {["📊","📅","🚀","🤖"][i]} {tb}
          </button>
        ))}
      </div>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "28px 5%" }}>

        {/* TAB 0 — ESTE MES */}
        {tab === 0 && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 900, color: "#26215C", margin: "0 0 6px" }}>{t.currentMonth}</h2>
            <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 24px" }}>{t.sub}</p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.investment} *</label>
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", fontWeight: 700, color: "#9ca3af", fontSize: 16 }}>$</span>
                  <input type="number" value={current.inv} onChange={e => setCurrent(f => ({ ...f, inv: e.target.value }))} placeholder={t.investmentPh} style={{ ...numInp, paddingLeft: 28 }} />
                </div>
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.revenue} *</label>
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", fontWeight: 700, color: "#9ca3af", fontSize: 16 }}>$</span>
                  <input type="number" value={current.rev} onChange={e => setCurrent(f => ({ ...f, rev: e.target.value }))} placeholder={t.revenuePh} style={{ ...numInp, paddingLeft: 28 }} />
                </div>
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.productCost}</label>
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", fontWeight: 700, color: "#9ca3af", fontSize: 16 }}>$</span>
                  <input type="number" value={current.cost} onChange={e => setCurrent(f => ({ ...f, cost: e.target.value }))} placeholder={t.productCostPh} style={{ ...numInp, paddingLeft: 28 }} />
                </div>
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.conversions}</label>
                <input type="number" value={current.convs} onChange={e => setCurrent(f => ({ ...f, convs: e.target.value }))} placeholder={t.conversionsPh} style={numInp} />
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.clicks}</label>
                <input type="number" value={current.clicks} onChange={e => setCurrent(f => ({ ...f, clicks: e.target.value }))} placeholder={t.clicksPh} style={numInp} />
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.channel}</label>
                <select value={current.channel} onChange={e => setCurrent(f => ({ ...f, channel: e.target.value }))} style={{ ...inp, fontSize: 14 }}>
                  {t.channels.map(c => <option key={c}>{c}</option>)}
                </select>
              </div>
            </div>

            <button onClick={() => setCalculated(true)} disabled={!canCalculate}
              style={{ width: "100%", padding: "14px", borderRadius: 12, border: "none", background: canCalculate ? "#26215C" : "#e5e7eb", color: canCalculate ? "white" : "#9ca3af", fontSize: 15, fontWeight: 800, cursor: canCalculate ? "pointer" : "not-allowed", marginBottom: 24 }}>
              {t.calculateBtn}
            </button>

            {calculated && canCalculate && (
              <div>
                {/* STATUS BADGE */}
                <div style={{ background: status.bg, border: `1px solid ${status.color}30`, borderRadius: 16, padding: "18px 22px", marginBottom: 20, display: "flex", alignItems: "center", gap: 14 }}>
                  <span style={{ fontSize: 36 }}>{status.label.split(" ")[0]}</span>
                  <div>
                    <p style={{ fontSize: 18, fontWeight: 900, color: status.color, margin: "0 0 3px" }}>{status.label}</p>
                    <p style={{ fontSize: 14, color: "#374151", margin: 0 }}>{status.desc}</p>
                  </div>
                </div>

                {/* MAIN METRICS */}
                <div style={{ display: "flex", gap: 12, marginBottom: 14, flexWrap: "wrap" }}>
                  <MetricCard label={t.roiLabel} value={`${curCalc.roi.toFixed(0)}%`} sub={t.roiSub} color={status.color} bg={status.bg} big />
                  <MetricCard label={t.profitLabel} value={`$${curCalc.profit.toFixed(0)}`} sub={cur.inv > 0 ? `${t.invested}: $${cur.inv}` : ""} color={curCalc.profit >= 0 ? "#16a34a" : "#ef4444"} bg={curCalc.profit >= 0 ? "#f0fdf4" : "#fff1f2"} big />
                </div>

                <div style={{ display: "flex", gap: 12, marginBottom: 20, flexWrap: "wrap" }}>
                  <MetricCard label={t.roas} value={`${curCalc.roas.toFixed(2)}x`} sub={`${t.roasSub} $${curCalc.roas.toFixed(2)}`} color="#0891b2" bg="#f0f9ff" />
                  <MetricCard label={t.cpaLabel} value={`$${curCalc.cpa.toFixed(2)}`} sub={`${cur.convs} ${lang === "es" ? "clientes" : "customers"}`} color="#26215C" bg="#FFF8F0" />
                  <MetricCard label={t.cpcLabel} value={`$${curCalc.cpc.toFixed(3)}`} sub={`${cur.clicks} ${lang === "es" ? "clics" : "clicks"}`} color="#374151" bg="#f9fafb" />
                </div>

                {/* FLOW VISUAL */}
                <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 14, padding: "18px 20px", marginBottom: 20 }}>
                  <p style={{ fontSize: 11, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 14px" }}>
                    {lang === "es" ? "Flujo de tu dinero" : "Your money flow"}
                  </p>
                  <div style={{ display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap" }}>
                    {[
                      { label: t.invested, val: `$${cur.inv}`, color: "#ef4444", bg: "#fff1f2" },
                      { label: lang === "es" ? "→ Clics" : "→ Clicks", val: cur.clicks || "—", color: "#6b7280", bg: "#f9fafb" },
                      { label: lang === "es" ? "→ Clientes" : "→ Customers", val: cur.convs || "—", color: "#26215C", bg: "#FFF8F0" },
                      { label: t.earned, val: `$${cur.rev}`, color: "#16a34a", bg: "#f0fdf4" },
                      { label: t.net, val: `$${curCalc.profit.toFixed(0)}`, color: curCalc.profit >= 0 ? "#16a34a" : "#ef4444", bg: curCalc.profit >= 0 ? "#f0fdf4" : "#fff1f2" },
                    ].map((item, i) => (
                      <div key={i} style={{ flex: 1, minWidth: 80, background: item.bg, borderRadius: 10, padding: "10px 12px", textAlign: "center" }}>
                        <p style={{ fontSize: 11, color: "#9ca3af", margin: "0 0 3px" }}>{item.label}</p>
                        <p style={{ fontSize: 16, fontWeight: 900, color: item.color, margin: 0 }}>{item.val}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* BENCHMARK */}
                <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 14, padding: "18px 20px", marginBottom: 20 }}>
                  <p style={{ fontSize: 13, fontWeight: 800, color: "#26215C", margin: "0 0 14px" }}>{t.metricsBenchmark}</p>
                  {[
                    { label: "ROI", yours: curCalc.roi, industry: 150, unit: "%", good: v => v >= 100 },
                    { label: "ROAS", yours: curCalc.roas, industry: 3.5, unit: "x", good: v => v >= 2 },
                    { label: "CTR", yours: cur.clicks > 0 && cur.convs > 0 ? (cur.convs / cur.clicks * 100) : 0, industry: 2.5, unit: "%", good: v => v >= 2 },
                  ].map((m, i) => {
                    const good = m.good(m.yours);
                    return (
                      <div key={i} style={{ marginBottom: 14 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                          <span style={{ fontSize: 13, color: "#374151", fontWeight: 600 }}>{m.label}</span>
                          <div style={{ display: "flex", gap: 12 }}>
                            <span style={{ fontSize: 12, fontWeight: 700, color: good ? "#16a34a" : "#ef4444" }}>{lang === "es" ? "Tú: " : "You: "}{m.yours.toFixed(1)}{m.unit}</span>
                            <span style={{ fontSize: 12, color: "#9ca3af" }}>{lang === "es" ? "Sector: " : "Industry: "}{m.industry}{m.unit}</span>
                          </div>
                        </div>
                        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                          <MiniBar pct={pct(m.yours, m.industry * 1.5)} color={good ? "#16a34a" : "#ef4444"} />
                          <span style={{ fontSize: 11, flexShrink: 0, color: good ? "#16a34a" : "#ef4444", fontWeight: 700 }}>{good ? "✓" : "↑"}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <button onClick={analyzeWithAI} disabled={loadingAI}
                  style={{ width: "100%", padding: "13px", borderRadius: 11, border: "none", background: loadingAI ? "#e5e7eb" : "#26215C", color: loadingAI ? "#9ca3af" : "white", fontSize: 14, fontWeight: 800, cursor: loadingAI ? "not-allowed" : "pointer", marginBottom: 10 }}>
                  {loadingAI ? (
                    <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                      <span style={{ width: 16, height: 16, border: "2px solid rgba(255,255,255,.4)", borderTopColor: "white", borderRadius: "50%", display: "inline-block", animation: "spin .7s linear infinite" }} />
                      {t.analyzing}
                    </span>
                  ) : t.analyzeBtn}
                </button>

                <button onClick={() => { setCalculated(false); setCurrent({ inv: "", rev: "", clicks: "", convs: "", cost: "", channel: "Facebook / Instagram" }); setAiAnalysis(null); }}
                  style={{ width: "100%", padding: "11px", borderRadius: 10, border: "1px solid #e8e8f0", background: "white", color: "#6b7280", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
                  {t.resetBtn}
                </button>
              </div>
            )}
          </div>
        )}

        {/* TAB 1 — MES ANTERIOR */}
        {tab === 1 && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 900, color: "#26215C", margin: "0 0 6px" }}>{t.previousMonth}</h2>
            <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 24px" }}>{lang === "es" ? "Ingresa los datos del mes anterior para comparar tu progreso" : "Enter last month's data to compare your progress"}</p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 24 }}>
              {[
                { key: "inv", label: t.investment, ph: t.investmentPh },
                { key: "rev", label: t.revenue, ph: t.revenuePh },
                { key: "cost", label: t.productCost, ph: t.productCostPh },
                { key: "convs", label: t.conversions, ph: t.conversionsPh },
              ].map(f => (
                <div key={f.key}>
                  <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{f.label}</label>
                  <div style={{ position: "relative" }}>
                    {["inv","rev","cost"].includes(f.key) && <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", fontWeight: 700, color: "#9ca3af" }}>$</span>}
                    <input type="number" value={prev[f.key]} onChange={e => setPrev(p => ({ ...p, [f.key]: e.target.value }))} placeholder={f.ph} style={{ ...numInp, paddingLeft: ["inv","rev","cost"].includes(f.key) ? 28 : 14 }} />
                  </div>
                </div>
              ))}
            </div>

            {prv.inv > 0 && prv.rev > 0 && calculated && (
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                {[
                  { label: lang === "es" ? "ROI mes anterior" : "Last month ROI", cur: `${curCalc.roi.toFixed(0)}%`, prv: `${prvCalc.roi.toFixed(0)}%`, delta: curCalc.roi - prvCalc.roi },
                  { label: lang === "es" ? "Ventas" : "Sales", cur: `$${cur.rev}`, prv: `$${prv.rev}`, delta: cur.rev - prv.rev },
                  { label: lang === "es" ? "Ganancia neta" : "Net profit", cur: `$${curCalc.profit.toFixed(0)}`, prv: `$${prvCalc.profit.toFixed(0)}`, delta: curCalc.profit - prvCalc.profit },
                ].map((item, i) => (
                  <div key={i} style={{ flex: 1, minWidth: 160, background: "white", border: "1px solid #e8e8f0", borderRadius: 14, padding: "16px 18px" }}>
                    <p style={{ fontSize: 11, color: "#9ca3af", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 8px" }}>{item.label}</p>
                    <p style={{ fontSize: 24, fontWeight: 900, color: "#26215C", margin: "0 0 4px" }}>{item.cur}</p>
                    <p style={{ fontSize: 12, color: "#9ca3af", margin: "0 0 6px" }}>{lang === "es" ? "Anterior:" : "Previous:"} {item.prv}</p>
                    <span style={{ fontSize: 12, fontWeight: 700, color: item.delta >= 0 ? "#16a34a" : "#ef4444", background: item.delta >= 0 ? "#f0fdf4" : "#fff1f2", padding: "2px 8px", borderRadius: 20 }}>
                      {item.delta >= 0 ? "↑" : "↓"} {Math.abs(item.delta).toFixed(0)}{item.label.includes("%") ? "%" : ""}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {(!calculated || prv.inv === 0) && (
              <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 14, padding: "40px", textAlign: "center" }}>
                <p style={{ fontSize: 32, margin: "0 0 12px" }}>📅</p>
                <p style={{ fontSize: 14, color: "#9ca3af", margin: 0 }}>{lang === "es" ? "Primero calcula el mes actual en la pestaña anterior, luego llena estos datos para comparar." : "First calculate the current month in the previous tab, then fill in this data to compare."}</p>
              </div>
            )}
          </div>
        )}

        {/* TAB 2 — PROYECCIÓN */}
        {tab === 2 && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 900, color: "#26215C", margin: "0 0 6px" }}>{t.projTitle}</h2>
            <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 28px" }}>{t.projSub}</p>

            {!calculated ? (
              <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 14, padding: "40px", textAlign: "center" }}>
                <p style={{ fontSize: 32, margin: "0 0 12px" }}>🚀</p>
                <p style={{ fontSize: 14, color: "#9ca3af", margin: 0 }}>{lang === "es" ? "Primero ingresa tus datos del mes actual para generar proyecciones reales." : "First enter your current month data to generate real projections."}</p>
              </div>
            ) : (
              <>
                <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 14, padding: "20px 22px", marginBottom: 20 }}>
                  <label style={{ fontSize: 12, fontWeight: 700, color: "#374151", display: "block", marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {t.projInvestment}: <span style={{ color: "#A32D2D" }}>${projBudget}</span>
                  </label>
                  <input type="range" min={cur.inv || 10} max={(cur.inv || 50) * 10} step={5} value={projBudget} onChange={e => setProjBudget(Number(e.target.value))}
                    style={{ width: "100%", accentColor: "#A32D2D" }} />
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
                    <span style={{ fontSize: 11, color: "#9ca3af" }}>${cur.inv || 10}</span>
                    <span style={{ fontSize: 11, color: "#9ca3af" }}>${(cur.inv || 50) * 10}</span>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 12, marginBottom: 20, flexWrap: "wrap" }}>
                  <MetricCard label={t.projInvestment} value={`$${projBudget}`} color="#26215C" bg="#FFF8F0" big />
                  <MetricCard label={t.projResult} value={`$${projProfit.toFixed(0)}`} color={projProfit >= 0 ? "#16a34a" : "#ef4444"} bg={projProfit >= 0 ? "#f0fdf4" : "#fff1f2"} big />
                  <MetricCard label={t.projROI} value={`${projROI.toFixed(0)}%`} color="#0891b2" bg="#f0f9ff" big />
                </div>

                <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 14, padding: "18px 20px" }}>
                  <p style={{ fontSize: 13, fontWeight: 700, color: "#26215C", margin: "0 0 14px" }}>{lang === "es" ? "Comparación: actual vs proyectado" : "Comparison: current vs projected"}</p>
                  {[
                    { label: lang === "es" ? "Inversión" : "Investment", cur: `$${cur.inv}`, proj: `$${projBudget}`, pct: pct(cur.inv, projBudget) },
                    { label: lang === "es" ? "Ventas estimadas" : "Estimated sales", cur: `$${cur.rev}`, proj: `$${projRevenue.toFixed(0)}`, pct: pct(cur.rev, projRevenue) },
                    { label: lang === "es" ? "Ganancia neta" : "Net profit", cur: `$${curCalc.profit.toFixed(0)}`, proj: `$${projProfit.toFixed(0)}`, pct: pct(Math.max(curCalc.profit, 0), Math.max(projProfit, 1)) },
                  ].map((m, i) => (
                    <div key={i} style={{ marginBottom: 14 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                        <span style={{ fontSize: 13, color: "#374151", fontWeight: 500 }}>{m.label}</span>
                        <div style={{ display: "flex", gap: 10 }}>
                          <span style={{ fontSize: 12, color: "#9ca3af" }}>{lang === "es" ? "Actual" : "Current"}: {m.cur}</span>
                          <span style={{ fontSize: 12, fontWeight: 700, color: "#26215C" }}>{lang === "es" ? "Proyectado" : "Projected"}: {m.proj}</span>
                        </div>
                      </div>
                      <MiniBar pct={m.pct} color="#A32D2D" />
                    </div>
                  ))}
                  <p style={{ fontSize: 12, color: "#9ca3af", margin: "12px 0 0", lineHeight: 1.5 }}>
                    💡 {lang === "es" ? "Proyección basada en tu ROAS actual. Los resultados reales pueden variar según el mercado y la creatividad de los anuncios." : "Projection based on your current ROAS. Actual results may vary depending on market and ad creativity."}
                  </p>
                </div>
              </>
            )}
          </div>
        )}

        {/* TAB 3 — ANÁLISIS IA */}
        {tab === 3 && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 900, color: "#26215C", margin: "0 0 6px" }}>{t.aiTitle}</h2>
            <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 24px" }}>{t.aiSub}</p>

            {!aiAnalysis ? (
              <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 14, padding: "40px", textAlign: "center" }}>
                <p style={{ fontSize: 48, margin: "0 0 16px" }}>🤖</p>
                <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 20px" }}>{!calculated ? (lang === "es" ? "Primero ingresa y calcula tus datos del mes actual." : "First enter and calculate your current month data.") : (lang === "es" ? "Haz clic en 'Analizar con IA' desde la pestaña de este mes." : "Click 'Analyze with AI' from the current month tab.")}</p>
                {calculated && (
                  <button onClick={analyzeWithAI} disabled={loadingAI}
                    style={{ padding: "12px 24px", background: "#26215C", color: "white", border: "none", borderRadius: 10, fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
                    {loadingAI ? t.analyzing : t.analyzeBtn}
                  </button>
                )}
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ background: "#26215C", borderRadius: 16, padding: "22px 24px" }}>
                  <p style={{ fontSize: 11, fontWeight: 700, color: "#A32D2D", textTransform: "uppercase", letterSpacing: "0.07em", margin: "0 0 10px" }}>🔍 {lang === "es" ? "Diagnóstico" : "Diagnosis"}</p>
                  <p style={{ fontSize: 15, color: "white", margin: 0, lineHeight: 1.7 }}>{aiAnalysis.diagnostico}</p>
                </div>

                {[aiAnalysis.mejora1, aiAnalysis.mejora2, aiAnalysis.mejora3].filter(Boolean).map((m, i) => (
                  <div key={i} style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 14, padding: "18px 20px", display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div style={{ width: 32, height: 32, background: "#FAEEDA", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "#A32D2D", fontSize: 15, flexShrink: 0 }}>{i + 1}</div>
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 800, color: "#26215C", margin: "0 0 5px" }}>{m.titulo}</p>
                      <p style={{ fontSize: 13, color: "#374151", margin: 0, lineHeight: 1.6 }}>{m.descripcion}</p>
                    </div>
                  </div>
                ))}

                {aiAnalysis.advertencia && (
                  <div style={{ background: "#fefce8", border: "1px solid #fde68a", borderRadius: 14, padding: "16px 20px", display: "flex", gap: 12 }}>
                    <span style={{ fontSize: 20, flexShrink: 0 }}>⚠️</span>
                    <p style={{ fontSize: 13, color: "#854d0e", margin: 0, lineHeight: 1.6 }}>{aiAnalysis.advertencia}</p>
                  </div>
                )}

                {aiAnalysis.potencial && (
                  <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 14, padding: "16px 20px", display: "flex", gap: 12 }}>
                    <span style={{ fontSize: 20, flexShrink: 0 }}>🚀</span>
                    <div>
                      <p style={{ fontSize: 12, fontWeight: 700, color: "#16a34a", textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 4px" }}>{lang === "es" ? "Potencial si aplicas los cambios" : "Potential if you apply the changes"}</p>
                      <p style={{ fontSize: 13, color: "#15803d", margin: 0, lineHeight: 1.6 }}>{aiAnalysis.potencial}</p>
                    </div>
                  </div>
                )}

                <button onClick={() => { setAiAnalysis(null); analyzeWithAI(); }}
                  style={{ padding: "12px", borderRadius: 10, border: "1px solid #e8e8f0", background: "white", color: "#26215C", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
                  🔄 {lang === "es" ? "Regenerar análisis" : "Regenerate analysis"}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}

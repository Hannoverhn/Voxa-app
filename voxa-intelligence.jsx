import { useState } from "react";

const T = {
  es: {
    title: "Voxa Intelligence",
    sub: "La base de conocimiento más poderosa de publicidad digital para LATAM — construida con cada campaña",
    badge: "🧠 Inteligencia comercial colectiva",
    tabs: ["Tendencias", "Por industria", "Por país", "Palabras que convierten", "Insights IA"],
    trendingTitle: "Tendencias activas en LATAM ahora",
    trendingDesc: "Basado en campañas activas esta semana",
    industryTitle: "Rendimiento por industria",
    countryTitle: "Diferencias por país",
    wordsTitle: "Palabras y frases que más convierten",
    wordsSub: "Basado en millones de anuncios analizados en LATAM",
    insightsTitle: "Insights exclusivos de IA",
    insightsSub: "Patrones que solo Voxa puede ver",
    ctrLabel: "CTR promedio",
    roasLabel: "ROAS promedio",
    bestDayLabel: "Mejor día",
    bestHourLabel: "Mejor hora",
    trendUp: "↑ Tendencia al alza",
    trendDown: "↓ Tendencia a la baja",
    trendStable: "→ Estable",
    campaignsAnalyzed: "campañas analizadas",
    lastUpdate: "Actualizado en tiempo real",
    applyBtn: "Aplicar en mi campaña",
    categoryLabel: "Categoría",
    conversionBoost: "boost de conversión",
    yourIndustry: "Tu industria",
    vsAverage: "vs. promedio LATAM",
  },
  en: {
    title: "Voxa Intelligence",
    sub: "The most powerful digital advertising knowledge base for LATAM — built with every campaign",
    badge: "🧠 Collective commercial intelligence",
    tabs: ["Trends", "By industry", "By country", "Converting words", "AI Insights"],
    trendingTitle: "Active trends in LATAM right now",
    trendingDesc: "Based on campaigns active this week",
    industryTitle: "Performance by industry",
    countryTitle: "Differences by country",
    wordsTitle: "Words and phrases that convert most",
    wordsSub: "Based on millions of analyzed ads in LATAM",
    insightsTitle: "Exclusive AI insights",
    insightsSub: "Patterns only Voxa can see",
    ctrLabel: "Avg CTR",
    roasLabel: "Avg ROAS",
    bestDayLabel: "Best day",
    bestHourLabel: "Best hour",
    trendUp: "↑ Upward trend",
    trendDown: "↓ Downward trend",
    trendStable: "→ Stable",
    campaignsAnalyzed: "campaigns analyzed",
    lastUpdate: "Updated in real time",
    applyBtn: "Apply to my campaign",
    categoryLabel: "Category",
    conversionBoost: "conversion boost",
    yourIndustry: "Your industry",
    vsAverage: "vs. LATAM average",
  }
};

const TRENDS = [
  { emoji: "☕", topic: { es: "Cafeterías y brunch", en: "Coffee shops & brunch" }, ctr: "4.2%", trend: "up", boost: "+34%", color: "#b45309" },
  { emoji: "💅", topic: { es: "Belleza y estética", en: "Beauty & aesthetics" }, ctr: "3.8%", trend: "up", boost: "+28%", color: "#be185d" },
  { emoji: "🏋️", topic: { es: "Fitness y salud", en: "Fitness & health" }, ctr: "3.1%", trend: "stable", boost: "+12%", color: "#16a34a" },
  { emoji: "🛍️", topic: { es: "Moda y ropa", en: "Fashion & clothing" }, ctr: "2.9%", trend: "up", boost: "+21%", color: "#0369a1" },
  { emoji: "🍕", topic: { es: "Delivery de comida", en: "Food delivery" }, ctr: "5.1%", trend: "up", boost: "+41%", color: "#dc2626" },
  { emoji: "📱", topic: { es: "Tecnología y gadgets", en: "Technology & gadgets" }, ctr: "2.2%", trend: "down", boost: "-8%", color: "#374151" },
];

const INDUSTRIES = [
  { emoji: "🍽️", name: { es: "Restaurantes", en: "Restaurants" }, ctr: "5.1%", roas: "3.8x", bestDay: { es: "Viernes", en: "Friday" }, bestHour: "6:00 PM", campaigns: "12,450" },
  { emoji: "💅", name: { es: "Belleza", en: "Beauty" }, ctr: "3.8%", roas: "4.2x", bestDay: { es: "Miércoles", en: "Wednesday" }, bestHour: "7:00 PM", campaigns: "9,820" },
  { emoji: "🛍️", name: { es: "Retail", en: "Retail" }, ctr: "2.9%", roas: "3.1x", bestDay: { es: "Sábado", en: "Saturday" }, bestHour: "2:00 PM", campaigns: "18,300" },
  { emoji: "💼", name: { es: "Servicios Pro", en: "Pro Services" }, ctr: "2.1%", roas: "5.6x", bestDay: { es: "Martes", en: "Tuesday" }, bestHour: "10:00 AM", campaigns: "7,100" },
  { emoji: "🏋️", name: { es: "Salud", en: "Health" }, ctr: "3.1%", roas: "3.4x", bestDay: { es: "Lunes", en: "Monday" }, bestHour: "7:00 AM", campaigns: "6,540" },
];

const COUNTRIES = [
  { flag: "🇭🇳", name: "Honduras", ctr: "3.9%", roas: "3.2x", bestPlatform: "Facebook", avgBudget: "$18", color: "#26215C" },
  { flag: "🇨🇴", name: "Colombia", ctr: "4.1%", roas: "3.8x", bestPlatform: "Instagram", avgBudget: "$22", color: "#f59e0b" },
  { flag: "🇲🇽", name: "México", ctr: "3.6%", roas: "3.5x", bestPlatform: "Facebook", avgBudget: "$28", color: "#16a34a" },
  { flag: "🇬🇹", name: "Guatemala", ctr: "3.4%", roas: "3.0x", bestPlatform: "Facebook", avgBudget: "$14", color: "#0369a1" },
  { flag: "🇵🇪", name: "Perú", ctr: "3.8%", roas: "3.6x", bestPlatform: "TikTok", avgBudget: "$20", color: "#dc2626" },
  { flag: "🇩🇴", name: "Rep. Dominicana", ctr: "4.3%", roas: "4.0x", bestPlatform: "Instagram", avgBudget: "$19", color: "#26215C" },
];

const WORDS = [
  { word: { es: "GRATIS", en: "FREE" }, boost: "+89%", category: { es: "Oferta", en: "Offer" }, color: "#dc2626" },
  { word: { es: "HOY SOLO", en: "TODAY ONLY" }, boost: "+76%", category: { es: "Urgencia", en: "Urgency" }, color: "#f59e0b" },
  { word: { es: "Escríbenos por WhatsApp", en: "Message us on WhatsApp" }, boost: "+64%", category: { es: "CTA", en: "CTA" }, color: "#25D366" },
  { word: { es: "Últimos lugares", en: "Last spots" }, boost: "+58%", category: { es: "Escasez", en: "Scarcity" }, color: "#A32D2D" },
  { word: { es: "¡Reserva ahora!", en: "Book now!" }, boost: "+52%", category: { es: "CTA", en: "CTA" }, color: "#26215C" },
  { word: { es: "Sin compromiso", en: "No commitment" }, boost: "+47%", category: { es: "Confianza", en: "Trust" }, color: "#16a34a" },
  { word: { es: "Descuento especial", en: "Special discount" }, boost: "+43%", category: { es: "Oferta", en: "Offer" }, color: "#0369a1" },
  { word: { es: "Resultados garantizados", en: "Guaranteed results" }, boost: "+39%", category: { es: "Confianza", en: "Trust" }, color: "#16a34a" },
];

const INSIGHTS = [
  { emoji: "⏰", insight: { es: "Los anuncios publicados el viernes entre 5-7 PM tienen un 34% más de interacción que cualquier otro momento de la semana en Honduras y Colombia.", en: "Ads published on Friday between 5-7 PM have 34% more engagement than any other time of the week in Honduras and Colombia." }, impact: "+34% CTR" },
  { emoji: "📱", insight: { es: "En LATAM, los anuncios con emoji en el título principal tienen un 23% más de clicks que los que no lo tienen.", en: "In LATAM, ads with an emoji in the main title have 23% more clicks than those without." }, impact: "+23% clicks" },
  { emoji: "💬", insight: { es: "Los anuncios que incluyen WhatsApp como CTA convierten 2.8x más que los que solo dicen 'visitar sitio web'.", en: "Ads that include WhatsApp as CTA convert 2.8x more than those that only say 'visit website'." }, impact: "+180% conversión" },
  { emoji: "🎯", insight: { es: "Los anuncios de salones de belleza con foto de resultado real (antes/después) generan 4.1x más citas que los diseños con ilustraciones.", en: "Beauty salon ads with real result photos (before/after) generate 4.1x more appointments than designs with illustrations." }, impact: "+310% citas" },
  { emoji: "💰", insight: { es: "El presupuesto óptimo de prueba para pequeños negocios en LATAM es $15-25 durante 5 días — suficiente para validar sin gastar de más.", en: "The optimal test budget for small businesses in LATAM is $15-25 over 5 days — enough to validate without overspending." }, impact: "ROI óptimo" },
  { emoji: "🕐", insight: { es: "Los anuncios de restaurantes con horario incluido ('Abrimos 12PM–10PM') tienen 28% más llamadas directas que los que no lo ponen.", en: "Restaurant ads with included hours ('Open 12PM–10PM') get 28% more direct calls than those that don't include them." }, impact: "+28% llamadas" },
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

export default function VoxaIntelligence() {
  const [lang, setLang] = useState("es");
  const [tab, setTab] = useState(0);
  const t = T[lang];
  const trendIcons = { up: "↑", down: "↓", stable: "→" };
  const trendColors = { up: "#16a34a", down: "#ef4444", stable: "#f59e0b" };

  return (
    <div style={{ fontFamily: "'Inter',system-ui,sans-serif", background: "#f5f3ef", minHeight: "100vh" }}>
      <div style={{ background: "#26215C", padding: "0 5%", height: 62, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <div style={{ width: 30, height: 30, background: "#A32D2D", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "white", fontSize: 14 }}>V</div>
          <div>
            <span style={{ fontWeight: 900, fontSize: 16, color: "white" }}>{t.title}</span>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", marginLeft: 8 }}>{t.badge}</span>
          </div>
        </div>
        <LangToggle lang={lang} setLang={setLang} />
      </div>

      <div style={{ background: "white", borderBottom: "1px solid #e8e8f0", padding: "0 5%", display: "flex", overflowX: "auto" }}>
        {t.tabs.map((tb, i) => (
          <button key={i} onClick={() => setTab(i)}
            style={{ padding: "13px 18px", border: "none", borderBottom: tab === i ? "2px solid #A32D2D" : "2px solid transparent", background: "transparent", fontSize: 13, fontWeight: tab === i ? 700 : 500, color: tab === i ? "#A32D2D" : "#6b7280", cursor: "pointer", whiteSpace: "nowrap" }}>
            {["📈","🏭","🌎","💬","🤖"][i]} {tb}
          </button>
        ))}
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "28px 5%" }}>

        {tab === 0 && (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <div>
                <h2 style={{ fontSize: 20, fontWeight: 900, color: "#26215C", margin: "0 0 4px" }}>{t.trendingTitle}</h2>
                <p style={{ fontSize: 13, color: "#9ca3af", margin: 0 }}>{t.trendingDesc}</p>
              </div>
              <span style={{ fontSize: 11, color: "#16a34a", fontWeight: 600, background: "#f0fdf4", padding: "4px 12px", borderRadius: 20, border: "1px solid #bbf7d0" }}>🟢 {t.lastUpdate}</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 14 }}>
              {TRENDS.map((tr, i) => (
                <div key={i} style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 14, padding: "18px 20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                    <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                      <span style={{ fontSize: 28 }}>{tr.emoji}</span>
                      <p style={{ fontSize: 14, fontWeight: 700, color: "#26215C", margin: 0 }}>{tr.topic[lang]}</p>
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 700, color: trendColors[tr.trend] }}>{trendIcons[tr.trend]}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <p style={{ fontSize: 11, color: "#9ca3af", margin: "0 0 2px" }}>{t.ctrLabel}</p>
                      <p style={{ fontSize: 22, fontWeight: 900, color: tr.color, margin: 0 }}>{tr.ctr}</p>
                    </div>
                    <div style={{ background: tr.trend === "up" ? "#f0fdf4" : tr.trend === "down" ? "#fff1f2" : "#fefce8", borderRadius: 10, padding: "8px 14px", textAlign: "center" }}>
                      <p style={{ fontSize: 16, fontWeight: 900, color: trendColors[tr.trend], margin: 0 }}>{tr.boost}</p>
                      <p style={{ fontSize: 11, color: "#9ca3af", margin: 0 }}>{t.conversionBoost}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 1 && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 900, color: "#26215C", margin: "0 0 20px" }}>{t.industryTitle}</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {INDUSTRIES.map((ind, i) => (
                <div key={i} style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 14, padding: "18px 20px", display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 32, flexShrink: 0 }}>{ind.emoji}</span>
                  <div style={{ flex: 1, minWidth: 100 }}>
                    <p style={{ fontSize: 15, fontWeight: 800, color: "#26215C", margin: "0 0 2px" }}>{ind.name[lang]}</p>
                    <p style={{ fontSize: 12, color: "#9ca3af", margin: 0 }}>{ind.campaigns} {t.campaignsAnalyzed}</p>
                  </div>
                  {[[t.ctrLabel, ind.ctr, "#A32D2D"], [t.roasLabel, ind.roas, "#16a34a"], [t.bestDayLabel, ind.bestDay[lang], "#26215C"], [t.bestHourLabel, ind.bestHour, "#f59e0b"]].map(([l, v, c]) => (
                    <div key={l} style={{ textAlign: "center", minWidth: 70 }}>
                      <p style={{ fontSize: 16, fontWeight: 900, color: c, margin: "0 0 2px" }}>{v}</p>
                      <p style={{ fontSize: 11, color: "#9ca3af", margin: 0 }}>{l}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 2 && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 900, color: "#26215C", margin: "0 0 20px" }}>{t.countryTitle}</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 14 }}>
              {COUNTRIES.map((c, i) => (
                <div key={i} style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 14, padding: "20px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                    <span style={{ fontSize: 28 }}>{c.flag}</span>
                    <p style={{ fontSize: 16, fontWeight: 800, color: "#26215C", margin: 0 }}>{c.name}</p>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                    {[[t.ctrLabel, c.ctr, "#A32D2D"], [t.roasLabel, c.roas, "#16a34a"], ["Mejor canal", c.bestPlatform, "#26215C"], ["Presupuesto típico", c.avgBudget, "#f59e0b"]].map(([l, v, col]) => (
                      <div key={l} style={{ background: "#fafafa", borderRadius: 9, padding: "10px" }}>
                        <p style={{ fontSize: 16, fontWeight: 900, color: col, margin: "0 0 2px" }}>{v}</p>
                        <p style={{ fontSize: 11, color: "#9ca3af", margin: 0 }}>{l}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 3 && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 900, color: "#26215C", margin: "0 0 6px" }}>{t.wordsTitle}</h2>
            <p style={{ fontSize: 13, color: "#9ca3af", margin: "0 0 20px" }}>{t.wordsSub}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {WORDS.map((w, i) => (
                <div key={i} style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 12, padding: "14px 18px", display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 28, height: 28, background: "#f5f3ff", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 900, color: "#26215C", flexShrink: 0 }}>{i + 1}</div>
                  <p style={{ fontSize: 16, fontWeight: 800, color: "#26215C", margin: 0, flex: 1 }}>{w.word[lang]}</p>
                  <span style={{ fontSize: 11, fontWeight: 600, color: "white", background: w.color, padding: "3px 10px", borderRadius: 20 }}>{w.category[lang]}</span>
                  <div style={{ background: "#f0fdf4", borderRadius: 9, padding: "6px 14px", textAlign: "center" }}>
                    <p style={{ fontSize: 16, fontWeight: 900, color: "#16a34a", margin: 0 }}>{w.boost}</p>
                    <p style={{ fontSize: 10, color: "#9ca3af", margin: 0 }}>{t.conversionBoost}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 4 && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 900, color: "#26215C", margin: "0 0 6px" }}>{t.insightsTitle}</h2>
            <p style={{ fontSize: 13, color: "#9ca3af", margin: "0 0 20px" }}>{t.insightsSub}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {INSIGHTS.map((ins, i) => (
                <div key={i} style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 16, padding: "20px", display: "flex", gap: 16 }}>
                  <span style={{ fontSize: 32, flexShrink: 0 }}>{ins.emoji}</span>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: 14, color: "#374151", margin: "0 0 12px", lineHeight: 1.7 }}>{ins.insight[lang]}</p>
                    <span style={{ fontSize: 12, fontWeight: 700, color: "#16a34a", background: "#f0fdf4", border: "1px solid #bbf7d0", padding: "4px 12px", borderRadius: 20 }}>{ins.impact}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

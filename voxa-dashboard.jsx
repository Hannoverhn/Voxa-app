import { useState } from "react";

// ── TOKENS ────────────────────────────────────────────────────────────────
const C = {
  tinta:    "#26215C",
  tintaDk:  "#1a1730",
  tintaMd:  "#2e2870",
  coral:    "#A32D2D",
  coralLt:  "#c23535",
  arena:    "#FAEEDA",
  arenaMd:  "#F5C6A0",
  glow:     "rgba(163,45,45,0.18)",
  surface:  "rgba(255,255,255,0.04)",
  surface2: "rgba(255,255,255,0.07)",
  border:   "rgba(255,255,255,0.08)",
  border2:  "rgba(255,255,255,0.14)",
  text:     "#F5F3EF",
  textSub:  "rgba(255,255,255,0.55)",
  textMut:  "rgba(255,255,255,0.28)",
};

const NAV_ITEMS = [
  { icon: "⚡", label: { es: "Campañas", en: "Campaigns" }, path: "campaigns" },
  { icon: "🧠", label: { es: "Business Brain", en: "Business Brain" }, path: "brain" },
  { icon: "🎯", label: { es: "Voxa Predict", en: "Voxa Predict" }, path: "predict" },
  { icon: "🚀", label: { es: "Autopilot", en: "Autopilot" }, path: "autopilot" },
  { icon: "🤖", label: { es: "Agentes", en: "Agents" }, path: "agentes" },
  { icon: "🔍", label: { es: "Clone Pro", en: "Clone Pro" }, path: "clone" },
  { icon: "🎨", label: { es: "Creativos", en: "Creatives" }, path: "creativos" },
  { icon: "📅", label: { es: "Calendario", en: "Calendar" }, path: "calendario" },
  { icon: "📈", label: { es: "ROI", en: "ROI" }, path: "roi" },
  { icon: "🏛️", label: { es: "Modo Político", en: "Political Mode" }, path: "politico" },
  { icon: "🏢", label: { es: "Agencia", en: "Agency" }, path: "agency" },
  { icon: "🌐", label: { es: "Intelligence", en: "Intelligence" }, path: "intelligence" },
];

const CAMPAIGNS = [
  { id: 1, name: "Promo Navidad", platform: "Facebook", status: "active", score: 91, spent: 87, budget: 150, conv: 28, reach: "14.3K", color: "#1877F2" },
  { id: 2, name: "Lanzamiento invierno", platform: "Google", status: "paused", score: 84, spent: 43, budget: 200, conv: 11, reach: "8.1K", color: "#4285F4" },
  { id: 3, name: "Leads yoga", platform: "TikTok", status: "draft", score: 78, spent: 0, budget: 80, conv: 0, reach: "—", color: "#000000" },
  { id: 4, name: "Multi-canal temporada", platform: "Meta", status: "active", score: 88, spent: 201, budget: 300, conv: 54, reach: "31.6K", color: "#A32D2D" },
];

const STATS = [
  { value: "$331", label: { es: "Invertido este mes", en: "Invested this month" }, sub: "+12% vs. mes ant.", icon: "💰", color: C.arena },
  { value: "93", label: { es: "Conversiones", en: "Conversions" }, sub: "en 4 campañas", icon: "🎯", color: "#86efac" },
  { value: "54K", label: { es: "Alcance total", en: "Total reach" }, sub: "personas únicas", icon: "📣", color: "#7dd3fc" },
  { value: "88", label: { es: "Voxa Score prom.", en: "Avg Voxa Score" }, sub: "+4 pts este mes", icon: "⚡", color: C.arenaMd },
];

const STATUS_CFG = {
  active:  { es: "Activa",    en: "Active",  bg: "rgba(21,128,61,.15)",  color: "#86efac", dot: "#86efac" },
  paused:  { es: "Pausada",   en: "Paused",  bg: "rgba(245,158,11,.12)", color: "#fcd34d", dot: "#fcd34d" },
  draft:   { es: "Borrador",  en: "Draft",   bg: "rgba(99,102,241,.12)", color: "#a5b4fc", dot: "#a5b4fc" },
};

function ScorePill({ score }) {
  const color = score >= 88 ? "#86efac" : score >= 75 ? "#fcd34d" : "#fca5a5";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <div style={{ width: 32, height: 32, borderRadius: "50%", background: `${color}18`, border: `1.5px solid ${color}40`, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontSize: 11, fontWeight: 900, color }}>{score}</span>
      </div>
    </div>
  );
}

function BudgetBar({ spent, budget, color = C.coral }) {
  const pct = Math.min((spent / budget) * 100, 100);
  return (
    <div style={{ width: "100%" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
        <span style={{ fontSize: 11, color: C.textMut }}>${spent}</span>
        <span style={{ fontSize: 11, color: C.textMut }}>${budget}</span>
      </div>
      <div style={{ height: 3, background: "rgba(255,255,255,0.08)", borderRadius: 2, overflow: "hidden" }}>
        <div style={{ width: `${pct}%`, height: "100%", background: pct > 85 ? "#fcd34d" : color, borderRadius: 2, transition: "width .6s ease" }} />
      </div>
    </div>
  );
}

export default function VoxaDashboard() {
  const [lang, setLang] = useState("es");
  const [active, setActive] = useState("campaigns");
  const [selectedCampaign, setSelectedCampaign] = useState(CAMPAIGNS[0]);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const L = (obj) => typeof obj === "object" ? obj[lang] : obj;

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: C.tintaDk, fontFamily: "'Segoe UI',system-ui,sans-serif", color: C.text }}>

      {/* ── SIDEBAR ── */}
      <div style={{
        width: sidebarOpen ? 220 : 64,
        background: `linear-gradient(180deg, ${C.tinta} 0%, ${C.tintaDk} 100%)`,
        borderRight: `1px solid ${C.border}`,
        display: "flex", flexDirection: "column",
        transition: "width .25s cubic-bezier(.4,0,.2,1)",
        flexShrink: 0, position: "relative", zIndex: 10,
      }}>
        {/* LOGO */}
        <div style={{ padding: "20px 16px 16px", borderBottom: `1px solid ${C.border}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 36, height: 36, background: C.coral,
              borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center",
              fontWeight: 900, fontSize: 16, color: "white", flexShrink: 0,
              boxShadow: `0 4px 16px ${C.glow}`,
              position: "relative",
            }}>
              V
              <div style={{ position: "absolute", width: 7, height: 7, background: C.arena, borderRadius: "50%", top: -2, right: -2, animation: "pulse 2s ease-in-out infinite" }} />
            </div>
            {sidebarOpen && (
              <div>
                <p style={{ fontWeight: 900, fontSize: 17, color: "white", margin: 0, letterSpacing: "-.02em" }}>Voxa</p>
                <p style={{ fontSize: 10, color: C.textMut, margin: 0, letterSpacing: ".08em", textTransform: "uppercase" }}>Marketing IA</p>
              </div>
            )}
          </div>
        </div>

        {/* NAV */}
        <nav style={{ flex: 1, padding: "12px 8px", overflow: "auto" }}>
          {NAV_ITEMS.map(item => {
            const isActive = active === item.path;
            return (
              <button key={item.path} onClick={() => setActive(item.path)}
                style={{
                  width: "100%", display: "flex", alignItems: "center", gap: 10,
                  padding: sidebarOpen ? "9px 12px" : "9px 0",
                  justifyContent: sidebarOpen ? "flex-start" : "center",
                  borderRadius: 10, border: "none", marginBottom: 2, cursor: "pointer",
                  background: isActive ? `rgba(163,45,45,0.18)` : "transparent",
                  transition: "all .15s",
                }}
                onMouseOver={e => !isActive && (e.currentTarget.style.background = C.surface2)}
                onMouseOut={e => !isActive && (e.currentTarget.style.background = "transparent")}
              >
                <span style={{ fontSize: 16, flexShrink: 0 }}>{item.icon}</span>
                {sidebarOpen && <span style={{ fontSize: 13, fontWeight: isActive ? 700 : 400, color: isActive ? C.arena : C.textSub, whiteSpace: "nowrap" }}>{L(item.label)}</span>}
                {isActive && sidebarOpen && <div style={{ marginLeft: "auto", width: 4, height: 4, borderRadius: "50%", background: C.coral }} />}
              </button>
            );
          })}
        </nav>

        {/* PLAN */}
        {sidebarOpen && (
          <div style={{ padding: "12px", borderTop: `1px solid ${C.border}` }}>
            <div style={{ background: "rgba(163,45,45,0.12)", border: `1px solid rgba(163,45,45,0.2)`, borderRadius: 12, padding: "12px" }}>
              <p style={{ fontSize: 10, fontWeight: 700, color: C.coral, textTransform: "uppercase", letterSpacing: ".08em", margin: "0 0 4px" }}>Plan Pro</p>
              <p style={{ fontSize: 12, color: C.textSub, margin: "0 0 8px" }}>
                {lang === "es" ? "Prueba termina en" : "Trial ends in"} <span style={{ color: C.arena, fontWeight: 700 }}>18 {lang === "es" ? "días" : "days"}</span>
              </p>
              <button style={{ width: "100%", padding: "7px", background: C.coral, border: "none", borderRadius: 8, color: "white", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>
                {lang === "es" ? "Activar plan →" : "Activate plan →"}
              </button>
            </div>
          </div>
        )}

        {/* TOGGLE */}
        <button onClick={() => setSidebarOpen(!sidebarOpen)}
          style={{ position: "absolute", top: 22, right: -12, width: 24, height: 24, borderRadius: "50%", background: C.tinta, border: `1px solid ${C.border2}`, color: C.textSub, cursor: "pointer", fontSize: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {sidebarOpen ? "←" : "→"}
        </button>
      </div>

      {/* ── MAIN ── */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>

        {/* TOPBAR */}
        <div style={{ height: 60, borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 28px", background: "rgba(26,23,48,0.8)", backdropFilter: "blur(20px)", flexShrink: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ position: "relative" }}>
              <input placeholder={lang === "es" ? "Buscar campaña..." : "Search campaign..."} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 10, padding: "8px 14px 8px 34px", fontSize: 13, color: C.text, outline: "none", width: 220, fontFamily: "inherit" }} />
              <span style={{ position: "absolute", left: 11, top: "50%", transform: "translateY(-50%)", fontSize: 13, color: C.textMut }}>🔍</span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {/* LANG */}
            <div style={{ display: "flex", background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8, padding: 3, gap: 2 }}>
              {["es","en"].map(l => (
                <button key={l} onClick={() => setLang(l)}
                  style={{ padding: "4px 10px", borderRadius: 6, border: "none", cursor: "pointer", fontSize: 11, fontWeight: 700, background: l === lang ? "rgba(255,255,255,0.12)" : "transparent", color: l === lang ? "white" : C.textMut, transition: "all .15s" }}>
                  {l === "es" ? "ES" : "EN"}
                </button>
              ))}
            </div>
            {/* BELL */}
            <button style={{ width: 36, height: 36, borderRadius: 9, background: C.surface, border: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", position: "relative" }}>
              🔔
              <div style={{ position: "absolute", top: 6, right: 6, width: 7, height: 7, background: C.coral, borderRadius: "50%", border: `1.5px solid ${C.tintaDk}` }} />
            </button>
            {/* AVATAR */}
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: `linear-gradient(135deg,${C.coral},${C.tinta})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 900, color: "white", cursor: "pointer" }}>TU</div>
          </div>
        </div>

        {/* CONTENT */}
        <div style={{ flex: 1, overflow: "auto", padding: "28px" }}>

          {/* HEADER */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28, flexWrap: "wrap", gap: 14 }}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, color: C.textMut, textTransform: "uppercase", letterSpacing: ".1em", margin: "0 0 6px" }}>
                {lang === "es" ? "Buenos días" : "Good morning"} ✦
              </p>
              <h1 style={{ fontSize: 28, fontWeight: 900, color: C.text, margin: 0, letterSpacing: "-.03em", lineHeight: 1.1 }}>
                {lang === "es" ? "Tu panel de campañas" : "Your campaign panel"}
              </h1>
            </div>
            <button style={{
              display: "flex", alignItems: "center", gap: 8,
              padding: "12px 22px", background: C.coral, border: "none", borderRadius: 12,
              color: "white", fontSize: 14, fontWeight: 800, cursor: "pointer",
              boxShadow: `0 4px 20px ${C.glow}`,
              transition: "all .2s",
            }}
              onMouseOver={e => { e.currentTarget.style.background = C.coralLt; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseOut={e => { e.currentTarget.style.background = C.coral; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <span style={{ fontSize: 16 }}>⚡</span>
              {lang === "es" ? "Nueva campaña" : "New campaign"}
            </button>
          </div>

          {/* STATS */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 14, marginBottom: 28 }}>
            {STATS.map((s, i) => (
              <div key={i} style={{
                background: C.surface, border: `1px solid ${C.border}`,
                borderRadius: 16, padding: "20px 22px",
                transition: "all .2s", cursor: "default",
                position: "relative", overflow: "hidden",
              }}
                onMouseOver={e => { e.currentTarget.style.borderColor = C.border2; e.currentTarget.style.background = C.surface2; }}
                onMouseOut={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = C.surface; }}
              >
                <div style={{ position: "absolute", top: -20, right: -20, width: 80, height: 80, borderRadius: "50%", background: `${s.color}08` }} />
                <p style={{ fontSize: 22, margin: "0 0 8px" }}>{s.icon}</p>
                <p style={{ fontSize: 30, fontWeight: 900, color: s.color, margin: "0 0 4px", letterSpacing: "-.04em" }}>{s.value}</p>
                <p style={{ fontSize: 12, fontWeight: 600, color: C.text, margin: "0 0 3px" }}>{L(s.label)}</p>
                <p style={{ fontSize: 11, color: C.textMut, margin: 0 }}>{s.sub}</p>
              </div>
            ))}
          </div>

          {/* CAMPAIGNS */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 18, alignItems: "start" }}>

            {/* LIST */}
            <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 18, overflow: "hidden" }}>
              <div style={{ padding: "18px 22px", borderBottom: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <p style={{ fontSize: 14, fontWeight: 800, color: C.text, margin: 0 }}>
                  {lang === "es" ? "Campañas activas" : "Active campaigns"}
                  <span style={{ fontSize: 11, fontWeight: 400, color: C.textMut, marginLeft: 8 }}>{CAMPAIGNS.length} total</span>
                </p>
                <div style={{ display: "flex", gap: 6 }}>
                  {["Todas","Activas","Pausadas"].map((f, i) => (
                    <button key={f} style={{ padding: "5px 12px", borderRadius: 20, border: `1px solid ${i === 0 ? C.coral : C.border}`, background: i === 0 ? "rgba(163,45,45,0.15)" : "transparent", color: i === 0 ? C.arenaMd : C.textMut, fontSize: 11, fontWeight: i === 0 ? 700 : 400, cursor: "pointer" }}>{f}</button>
                  ))}
                </div>
              </div>
              <div>
                {CAMPAIGNS.map((c, i) => {
                  const st = STATUS_CFG[c.status];
                  const isSelected = selectedCampaign?.id === c.id;
                  return (
                    <div key={c.id} onClick={() => setSelectedCampaign(c)}
                      style={{
                        padding: "16px 22px",
                        borderBottom: i < CAMPAIGNS.length - 1 ? `1px solid ${C.border}` : "none",
                        cursor: "pointer", transition: "background .15s",
                        background: isSelected ? "rgba(163,45,45,0.08)" : "transparent",
                        borderLeft: isSelected ? `3px solid ${C.coral}` : "3px solid transparent",
                      }}
                      onMouseOver={e => !isSelected && (e.currentTarget.style.background = C.surface2)}
                      onMouseOut={e => !isSelected && (e.currentTarget.style.background = "transparent")}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <div style={{ width: 38, height: 38, borderRadius: 10, background: `${c.color}22`, border: `1px solid ${c.color}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0 }}>
                          {c.platform === "Facebook" ? "📘" : c.platform === "Google" ? "🔍" : c.platform === "TikTok" ? "🎵" : "📣"}
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                            <p style={{ fontSize: 14, fontWeight: 700, color: C.text, margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{c.name}</p>
                            <ScorePill score={c.score} />
                          </div>
                          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                            <span style={{ fontSize: 10, fontWeight: 600, color: st.color, background: st.bg, padding: "2px 8px", borderRadius: 20, display: "flex", alignItems: "center", gap: 4 }}>
                              <span style={{ width: 5, height: 5, borderRadius: "50%", background: st.dot, display: "inline-block" }} />
                              {st[lang]}
                            </span>
                            <span style={{ fontSize: 11, color: C.textMut }}>{c.platform}</span>
                            <span style={{ fontSize: 11, color: C.textMut }}>·</span>
                            <span style={{ fontSize: 11, color: C.textMut }}>{c.reach} {lang === "es" ? "alcance" : "reach"}</span>
                          </div>
                          <div style={{ marginTop: 8 }}>
                            <BudgetBar spent={c.spent} budget={c.budget} />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* DETAIL */}
            {selectedCampaign && (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 18, padding: "22px", overflow: "hidden", position: "relative" }}>
                  <div style={{ position: "absolute", top: -40, right: -40, width: 140, height: 140, borderRadius: "50%", background: `${C.coral}12` }} />
                  <div style={{ position: "relative", zIndex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 18 }}>
                      <div>
                        <p style={{ fontSize: 11, color: C.textMut, textTransform: "uppercase", letterSpacing: ".07em", margin: "0 0 5px" }}>{selectedCampaign.platform}</p>
                        <h3 style={{ fontSize: 18, fontWeight: 900, color: C.text, margin: 0, letterSpacing: "-.02em" }}>{selectedCampaign.name}</h3>
                      </div>
                      <div style={{ background: `rgba(163,45,45,0.15)`, border: `1px solid rgba(163,45,45,0.25)`, borderRadius: 10, padding: "8px 14px", textAlign: "center" }}>
                        <p style={{ fontSize: 22, fontWeight: 900, color: C.arenaMd, margin: 0, lineHeight: 1 }}>{selectedCampaign.score}</p>
                        <p style={{ fontSize: 9, color: C.textMut, margin: 0, textTransform: "uppercase", letterSpacing: ".06em" }}>Score</p>
                      </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 18 }}>
                      {[
                        [lang === "es" ? "Gastado" : "Spent", `$${selectedCampaign.spent}`, C.arena],
                        [lang === "es" ? "Presupuesto" : "Budget", `$${selectedCampaign.budget}`, C.textSub],
                        [lang === "es" ? "Conversiones" : "Conversions", selectedCampaign.conv, "#86efac"],
                        [lang === "es" ? "Alcance" : "Reach", selectedCampaign.reach, "#7dd3fc"],
                      ].map(([l, v, c]) => (
                        <div key={l} style={{ background: "rgba(255,255,255,0.04)", borderRadius: 10, padding: "12px" }}>
                          <p style={{ fontSize: 20, fontWeight: 900, color: c, margin: "0 0 3px", letterSpacing: "-.02em" }}>{v}</p>
                          <p style={{ fontSize: 11, color: C.textMut, margin: 0 }}>{l}</p>
                        </div>
                      ))}
                    </div>
                    <BudgetBar spent={selectedCampaign.spent} budget={selectedCampaign.budget} />
                    <p style={{ fontSize: 11, color: C.textMut, marginTop: 6, textAlign: "right" }}>
                      {Math.round((selectedCampaign.spent / selectedCampaign.budget) * 100)}% {lang === "es" ? "del presupuesto usado" : "of budget used"}
                    </p>
                  </div>
                </div>

                {/* QUICK ACTIONS */}
                <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 16, padding: "18px" }}>
                  <p style={{ fontSize: 11, fontWeight: 700, color: C.textMut, textTransform: "uppercase", letterSpacing: ".08em", margin: "0 0 12px" }}>
                    {lang === "es" ? "Acciones rápidas" : "Quick actions"}
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      { icon: "🎯", label: lang === "es" ? "Ver Voxa Predict" : "View Voxa Predict", accent: true },
                      { icon: "✏️", label: lang === "es" ? "Editar campaña" : "Edit campaign" },
                      { icon: selectedCampaign.status === "active" ? "⏸️" : "▶️", label: selectedCampaign.status === "active" ? (lang === "es" ? "Pausar" : "Pause") : (lang === "es" ? "Activar" : "Activate") },
                      { icon: "📊", label: lang === "es" ? "Ver reporte" : "View report" },
                    ].map((a, i) => (
                      <button key={i} style={{
                        display: "flex", alignItems: "center", gap: 10,
                        padding: "10px 14px", borderRadius: 10,
                        border: a.accent ? `1px solid rgba(163,45,45,0.3)` : `1px solid ${C.border}`,
                        background: a.accent ? "rgba(163,45,45,0.1)" : C.surface,
                        color: a.accent ? C.arena : C.textSub,
                        fontSize: 13, fontWeight: a.accent ? 700 : 400,
                        cursor: "pointer", textAlign: "left", width: "100%",
                        transition: "all .15s",
                      }}
                        onMouseOver={e => { e.currentTarget.style.background = C.surface2; e.currentTarget.style.color = C.text; }}
                        onMouseOut={e => { e.currentTarget.style.background = a.accent ? "rgba(163,45,45,0.1)" : C.surface; e.currentTarget.style.color = a.accent ? C.arena : C.textSub; }}
                      >
                        <span>{a.icon}</span>{a.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* VOXA TIP */}
                <div style={{ background: `linear-gradient(135deg,rgba(163,45,45,0.12),rgba(38,33,92,0.4))`, border: `1px solid rgba(163,45,45,0.2)`, borderRadius: 16, padding: "16px 18px" }}>
                  <p style={{ fontSize: 10, fontWeight: 700, color: C.coral, textTransform: "uppercase", letterSpacing: ".08em", margin: "0 0 6px" }}>💡 Voxa tip</p>
                  <p style={{ fontSize: 13, color: C.textSub, margin: 0, lineHeight: 1.6 }}>
                    {lang === "es"
                      ? "Los viernes a las 6PM generan un 34% más de clics para campañas como esta. Considera programar tu próxima publicación."
                      : "Fridays at 6PM generate 34% more clicks for campaigns like this. Consider scheduling your next post."}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.5);opacity:.5} }
        ::-webkit-scrollbar { width: 4px; height: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 2px; }
        * { box-sizing: border-box; }
      `}</style>
    </div>
  );
}


import { useState, useEffect } from "react";

// ── TEMA ──────────────────────────────────────────────────────────────────
const THEMES = {
  light: {
    bg: "#F5F3EF", surface: "#FFFFFF", surface2: "#FAFAFA",
    border: "#E8E8F0", border2: "#F0F0F5",
    text: "#1a1730", textSub: "#374151", textMuted: "#9CA3AF",
    tinta: "#26215C", coral: "#A32D2D", arena: "#FAEEDA",
    cardBg: "#FFFFFF", headerBg: "#26215C",
    inputBg: "#FFFFFF", inputBorder: "#E5E7EB",
    tagBg: "rgba(163,45,45,0.08)", tagBorder: "rgba(163,45,45,0.15)", tagColor: "#A32D2D",
    successBg: "#F0FDF4", successBorder: "#BBF7D0", successColor: "#16A34A",
    warningBg: "#FEFCE8", warningBorder: "#FDE68A", warningColor: "#854D0E",
    dangerBg: "#FFF5F5", dangerBorder: "#FECACA", dangerColor: "#DC2626",
    scoreBg: "#F5F3FF",
    shadow: "0 4px 20px rgba(38,33,92,0.08)",
    toggleIcon: "🌙",
    toggleLabel: "Modo oscuro",
  },
  dark: {
    bg: "#0D0B1A", surface: "#1A1730", surface2: "#221E3A",
    border: "#2D2850", border2: "#332E55",
    text: "#F5F3EF", textSub: "#C4BEE0", textMuted: "#6B65A0",
    tinta: "#26215C", coral: "#A32D2D", arena: "#FAEEDA",
    cardBg: "#1A1730", headerBg: "#110F20",
    inputBg: "#221E3A", inputBorder: "#2D2850",
    tagBg: "rgba(163,45,45,0.15)", tagBorder: "rgba(163,45,45,0.3)", tagColor: "#F87171",
    successBg: "rgba(21,128,61,0.1)", successBorder: "rgba(21,128,61,0.25)", successColor: "#86EFAC",
    warningBg: "rgba(133,77,14,0.1)", warningBorder: "rgba(133,77,14,0.25)", warningColor: "#FCD34D",
    dangerBg: "rgba(163,45,45,0.1)", dangerBorder: "rgba(163,45,45,0.25)", dangerColor: "#FCA5A5",
    scoreBg: "rgba(124,58,237,0.1)",
    shadow: "0 4px 28px rgba(0,0,0,0.5)",
    toggleIcon: "☀️",
    toggleLabel: "Modo claro",
  }
};

const T = {
  es: {
    title: "Voxa", sub: "La voz de tu negocio.",
    demoTitle: "Vista previa del modo oscuro",
    demoSub: "Todos los módulos de Voxa se adaptan automáticamente",
    toggleHint: "Cambia entre modo claro y oscuro",
    features: [
      { icon: "👁️", title: "Menos fatiga visual", desc: "Perfecto para usar Voxa de noche o por horas. El fondo oscuro reduce el cansancio visual hasta un 40%." },
      { icon: "⏱️", title: "+23% tiempo de sesión", desc: "Los usuarios en modo oscuro pasan más tiempo en la plataforma. Más tiempo = más campañas = más resultados." },
      { icon: "🔋", title: "Ahorra batería", desc: "En pantallas OLED (la mayoría de celulares modernos), el modo oscuro puede ahorrar hasta un 30% de batería." },
      { icon: "🎨", title: "Estéticamente superior", desc: "La paleta de Voxa — Tinta Profunda + Coral + Arena — fue diseñada para brillar tanto en modo claro como oscuro." },
    ],
    statsLabel: "Tus estadísticas",
    campaignsLabel: "Campañas", scoreLabel: "Score", reachLabel: "Alcance",
    quickActions: "Acciones rápidas",
    actions: ["⚡ Nueva campaña", "🎯 Voxa Predict", "🚀 Autopilot", "🧠 Business Brain"],
    recentLabel: "Campañas recientes",
    recent: [
      { name: "Promo diciembre", score: 91, status: "Activa", reach: "3.2K", platform: "Facebook" },
      { name: "Oferta fin de semana", score: 84, status: "Pausada", reach: "1.8K", platform: "Instagram" },
      { name: "Día de la Madre", score: 88, status: "Completada", reach: "5.1K", platform: "Meta" },
    ],
    alertTitle: "🔥 Tendencia detectada",
    alertDesc: "Las cafeterías en Honduras tienen un CTR 41% más alto esta semana. ¿Quieres crear una campaña ahora?",
    alertBtn: "Crear campaña →",
    saved: "✓ Preferencia guardada",
    autoDetect: "Detectar automáticamente según el sistema",
    lightMode: "Modo claro", darkMode: "Modo oscuro",
    preview: "Vista previa",
    applyBtn: "Aplicar modo oscuro",
    appliedBtn: "✓ Aplicado",
  },
  en: {
    title: "Voxa", sub: "The voice of your business.",
    demoTitle: "Dark mode preview",
    demoSub: "All Voxa modules adapt automatically",
    toggleHint: "Switch between light and dark mode",
    features: [
      { icon: "👁️", title: "Less eye strain", desc: "Perfect for using Voxa at night or for hours. Dark background reduces eye fatigue by up to 40%." },
      { icon: "⏱️", title: "+23% session time", desc: "Users in dark mode spend more time on the platform. More time = more campaigns = more results." },
      { icon: "🔋", title: "Saves battery", desc: "On OLED screens (most modern phones), dark mode can save up to 30% battery." },
      { icon: "🎨", title: "Aesthetically superior", desc: "Voxa's palette — Deep Ink + Coral + Sand — was designed to shine in both light and dark mode." },
    ],
    statsLabel: "Your statistics",
    campaignsLabel: "Campaigns", scoreLabel: "Score", reachLabel: "Reach",
    quickActions: "Quick actions",
    actions: ["⚡ New campaign", "🎯 Voxa Predict", "🚀 Autopilot", "🧠 Business Brain"],
    recentLabel: "Recent campaigns",
    recent: [
      { name: "December promo", score: 91, status: "Active", reach: "3.2K", platform: "Facebook" },
      { name: "Weekend offer", score: 84, status: "Paused", reach: "1.8K", platform: "Instagram" },
      { name: "Mother's Day", score: 88, status: "Completed", reach: "5.1K", platform: "Meta" },
    ],
    alertTitle: "🔥 Trend detected",
    alertDesc: "Coffee shops in Honduras have a 41% higher CTR this week. Want to create a campaign now?",
    alertBtn: "Create campaign →",
    saved: "✓ Preference saved",
    autoDetect: "Detect automatically based on system",
    lightMode: "Light mode", darkMode: "Dark mode",
    preview: "Preview",
    applyBtn: "Apply dark mode",
    appliedBtn: "✓ Applied",
  }
};

function LangToggle({ lang, setLang, th }) {
  return (
    <div style={{ display: "flex", background: th.surface2, borderRadius: 8, padding: 3, gap: 2, border: `1px solid ${th.border}` }}>
      {["es","en"].map(l => (
        <button key={l} onClick={() => setLang(l)}
          style={{ padding: "4px 10px", borderRadius: 6, border: "none", cursor: "pointer", fontSize: 11, fontWeight: 700, background: l === lang ? th.tinta : "transparent", color: l === lang ? "white" : th.textMuted, transition: "all .15s" }}>
          {l === "es" ? "🇪🇸 ES" : "🇺🇸 EN"}
        </button>
      ))}
    </div>
  );
}

// Mini dashboard preview
function DashboardPreview({ th, t }) {
  const statusColors = {
    "Activa": th.successColor, "Active": th.successColor,
    "Pausada": th.warningColor, "Paused": th.warningColor,
    "Completada": th.textMuted, "Completed": th.textMuted,
  };

  return (
    <div style={{ background: th.bg, borderRadius: 16, padding: "20px", border: `1px solid ${th.border}`, transition: "all .5s" }}>

      {/* NAV */}
      <div style={{ background: th.headerBg, borderRadius: 12, padding: "10px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 24, height: 24, background: th.coral, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "white", fontSize: 11 }}>V</div>
          <span style={{ fontWeight: 900, fontSize: 13, color: "white" }}>{t.title}</span>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          {["🔔", "⚙️"].map(ic => (
            <div key={ic} style={{ width: 26, height: 26, background: "rgba(255,255,255,0.07)", borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12 }}>{ic}</div>
          ))}
        </div>
      </div>

      {/* STATS */}
      <p style={{ fontSize: 11, fontWeight: 700, color: th.textMuted, textTransform: "uppercase", letterSpacing: "0.07em", margin: "0 0 10px" }}>{t.statsLabel}</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 16 }}>
        {[["14", t.campaignsLabel, th.tinta], ["86", t.scoreLabel, th.coral], ["24K", t.reachLabel, "#0891b2"]].map(([v, l, c]) => (
          <div key={l} style={{ background: th.surface, border: `1px solid ${th.border}`, borderRadius: 10, padding: "12px 10px", textAlign: "center" }}>
            <p style={{ fontSize: 20, fontWeight: 900, color: c, margin: "0 0 2px", letterSpacing: "-.02em" }}>{v}</p>
            <p style={{ fontSize: 10, color: th.textMuted, margin: 0 }}>{l}</p>
          </div>
        ))}
      </div>

      {/* QUICK ACTIONS */}
      <p style={{ fontSize: 11, fontWeight: 700, color: th.textMuted, textTransform: "uppercase", letterSpacing: "0.07em", margin: "0 0 8px" }}>{t.quickActions}</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 16 }}>
        {t.actions.map((a, i) => (
          <div key={i} style={{ background: i === 0 ? th.coral : th.surface, border: `1px solid ${i === 0 ? th.coral : th.border}`, borderRadius: 9, padding: "9px 12px", fontSize: 12, fontWeight: 700, color: i === 0 ? "white" : th.text, cursor: "pointer", transition: "all .2s" }}>
            {a}
          </div>
        ))}
      </div>

      {/* ALERT */}
      <div style={{ background: th.tagBg, border: `1px solid ${th.tagBorder}`, borderRadius: 10, padding: "12px 14px", marginBottom: 14 }}>
        <p style={{ fontSize: 12, fontWeight: 800, color: th.text, margin: "0 0 4px" }}>{t.alertTitle}</p>
        <p style={{ fontSize: 11, color: th.textSub, margin: "0 0 8px", lineHeight: 1.5 }}>{t.alertDesc}</p>
        <button style={{ fontSize: 11, fontWeight: 700, color: "white", background: th.coral, border: "none", borderRadius: 7, padding: "5px 12px", cursor: "pointer" }}>{t.alertBtn}</button>
      </div>

      {/* RECENT */}
      <p style={{ fontSize: 11, fontWeight: 700, color: th.textMuted, textTransform: "uppercase", letterSpacing: "0.07em", margin: "0 0 8px" }}>{t.recentLabel}</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {t.recent.map((c, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, background: th.surface, border: `1px solid ${th.border}`, borderRadius: 9, padding: "10px 12px" }}>
            <div style={{ width: 28, height: 28, background: th.surface2, borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0 }}>⚡</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: th.text, margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{c.name}</p>
              <p style={{ fontSize: 11, color: th.textMuted, margin: 0 }}>{c.platform} · {c.reach}</p>
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center", flexShrink: 0 }}>
              <span style={{ fontSize: 12, fontWeight: 900, color: th.coral }}>{c.score}</span>
              <span style={{ fontSize: 10, fontWeight: 600, color: statusColors[c.status] || th.textMuted, background: `${statusColors[c.status]}18`, padding: "2px 7px", borderRadius: 20 }}>{c.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function VoxaDarkMode() {
  const [lang, setLang] = useState("es");
  const [mode, setMode] = useState("light");
  const [applied, setApplied] = useState(false);
  const [autoDetect, setAutoDetect] = useState(false);
  const t = T[lang];
  const th = THEMES[mode];

  // Auto-detect system preference
  useEffect(() => {
    if (autoDetect) {
      const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
      setMode(prefersDark ? "dark" : "light");
    }
  }, [autoDetect]);

  const handleApply = () => {
    setMode("dark");
    setApplied(true);
    setTimeout(() => setApplied(false), 2500);
  };

  return (
    <div style={{ fontFamily: "'Inter',system-ui,sans-serif", background: th.bg, minHeight: "100vh", transition: "background .5s, color .5s" }}>

      {/* HEADER */}
      <div style={{ background: th.headerBg, padding: "0 5%", height: 62, display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: `1px solid ${th.border}`, transition: "background .5s" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <div style={{ width: 30, height: 30, background: th.coral, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "white", fontSize: 14, position: "relative" }}>
            V
            <div style={{ position: "absolute", width: 7, height: 7, background: th.arena, borderRadius: "50%", top: -2, right: -2 }} />
          </div>
          <span style={{ fontWeight: 900, fontSize: 17, color: "white" }}>{t.title}</span>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>· {mode === "dark" ? t.darkMode : t.lightMode}</span>
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          {/* TOGGLE */}
          <button onClick={() => setMode(m => m === "dark" ? "light" : "dark")}
            style={{ display: "flex", alignItems: "center", gap: 8, padding: "7px 14px", borderRadius: 10, border: `1px solid rgba(255,255,255,0.15)`, background: "rgba(255,255,255,0.07)", cursor: "pointer", color: "white", fontSize: 12, fontWeight: 700 }}>
            <span style={{ fontSize: 16 }}>{th.toggleIcon}</span>
            {th.toggleLabel}
          </button>
          <LangToggle lang={lang} setLang={setLang} th={{ ...th, surface2: "rgba(255,255,255,0.07)", border: "rgba(255,255,255,0.15)", tinta: "rgba(255,255,255,0.2)", textMuted: "rgba(255,255,255,0.4)" }} />
        </div>
      </div>

      <div style={{ maxWidth: 940, margin: "0 auto", padding: "36px 5%" }}>

        {/* HERO */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: th.tagBg, border: `1px solid ${th.tagBorder}`, borderRadius: 100, padding: "6px 16px", marginBottom: 18 }}>
            <span style={{ fontSize: 14 }}>✨</span>
            <span style={{ fontSize: 12, color: th.tagColor, fontWeight: 700 }}>{t.demoTitle}</span>
          </div>
          <h1 style={{ fontSize: "clamp(28px,5vw,44px)", fontWeight: 900, color: th.text, letterSpacing: "-.04em", lineHeight: 1.1, margin: "0 0 10px", transition: "color .5s" }}>
            {mode === "dark" ? "Voxa en modo oscuro." : "Voxa en modo claro."}
          </h1>
          <p style={{ fontSize: 15, color: th.textMuted, margin: "0 0 28px", transition: "color .5s" }}>{t.demoSub}</p>

          {/* MODO SWITCHER GRANDE */}
          <div style={{ display: "inline-flex", background: th.surface, border: `1px solid ${th.border}`, borderRadius: 14, padding: 6, gap: 4 }}>
            {[
              { id: "light", icon: "☀️", label: t.lightMode },
              { id: "dark", icon: "🌙", label: t.darkMode },
            ].map(opt => (
              <button key={opt.id} onClick={() => setMode(opt.id)}
                style={{
                  padding: "10px 24px", borderRadius: 10, border: "none",
                  background: mode === opt.id ? (opt.id === "dark" ? th.tinta : "#FFFFFF") : "transparent",
                  color: mode === opt.id ? (opt.id === "dark" ? "white" : th.tinta) : th.textMuted,
                  fontSize: 14, fontWeight: 700, cursor: "pointer",
                  boxShadow: mode === opt.id ? th.shadow : "none",
                  transition: "all .3s",
                  display: "flex", alignItems: "center", gap: 8,
                }}>
                <span style={{ fontSize: 18 }}>{opt.icon}</span>
                {opt.label}
              </button>
            ))}
          </div>

          {/* AUTO DETECT */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 16 }}>
            <button onClick={() => setAutoDetect(!autoDetect)}
              style={{ width: 40, height: 22, borderRadius: 11, background: autoDetect ? th.coral : th.border, border: "none", cursor: "pointer", position: "relative", transition: "background .2s" }}>
              <div style={{ width: 16, height: 16, borderRadius: "50%", background: "white", position: "absolute", top: 3, left: autoDetect ? 21 : 3, transition: "left .2s", boxShadow: "0 1px 4px rgba(0,0,0,.2)" }} />
            </button>
            <span style={{ fontSize: 12, color: th.textMuted }}>{t.autoDetect}</span>
          </div>
        </div>

        {/* FEATURES */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 12, marginBottom: 40 }}>
          {t.features.map((f, i) => (
            <div key={i} style={{ background: th.surface, border: `1px solid ${th.border}`, borderRadius: 14, padding: "20px 18px", transition: "all .3s" }}
              onMouseOver={e => e.currentTarget.style.borderColor = th.coral}
              onMouseOut={e => e.currentTarget.style.borderColor = th.border}>
              <span style={{ fontSize: 28, display: "block", marginBottom: 10 }}>{f.icon}</span>
              <p style={{ fontSize: 14, fontWeight: 800, color: th.text, margin: "0 0 6px", transition: "color .5s" }}>{f.title}</p>
              <p style={{ fontSize: 12, color: th.textMuted, lineHeight: 1.6, margin: 0, transition: "color .5s" }}>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* SPLIT PREVIEW */}
        <div style={{ marginBottom: 40 }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: th.textMuted, textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 16px", textAlign: "center" }}>{t.preview} — {mode === "dark" ? t.darkMode : t.lightMode}</p>
          <div style={{ display: "grid", gridTemplateColumns: mode === "dark" ? "1fr" : "1fr 1fr", gap: 16 }}>
            {mode !== "dark" && (
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, color: THEMES.dark.textMuted, margin: "0 0 8px", textAlign: "center" }}>🌙 {t.darkMode}</p>
                <DashboardPreview th={THEMES.dark} t={t} />
              </div>
            )}
            <div>
              {mode !== "dark" && <p style={{ fontSize: 11, fontWeight: 700, color: th.textMuted, margin: "0 0 8px", textAlign: "center" }}>☀️ {t.lightMode}</p>}
              <DashboardPreview th={mode === "dark" ? THEMES.dark : THEMES.light} t={t} />
            </div>
          </div>
        </div>

        {/* PALETA */}
        <div style={{ background: th.surface, border: `1px solid ${th.border}`, borderRadius: 16, padding: "24px", marginBottom: 32, transition: "all .5s" }}>
          <p style={{ fontSize: 14, fontWeight: 800, color: th.text, margin: "0 0 16px", transition: "color .5s" }}>🎨 {lang === "es" ? "Paleta oficial de Voxa en modo oscuro" : "Voxa's official dark mode palette"}</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 10 }}>
            {[
              { name: "Fondo base", hex: "#0D0B1A", usage: lang === "es" ? "Fondo principal" : "Main background" },
              { name: "Superficie", hex: "#1A1730", usage: lang === "es" ? "Cards y paneles" : "Cards and panels" },
              { name: "Superficie 2", hex: "#221E3A", usage: lang === "es" ? "Inputs y hover" : "Inputs and hover" },
              { name: "Borde", hex: "#2D2850", usage: lang === "es" ? "Divisores y bordes" : "Dividers and borders" },
              { name: "Tinta profunda", hex: "#26215C", usage: lang === "es" ? "Botones primarios" : "Primary buttons" },
              { name: "Coral de acción", hex: "#A32D2D", usage: "CTA" },
              { name: "Arena cálida", hex: "#FAEEDA", usage: lang === "es" ? "Textos destacados" : "Highlighted text" },
              { name: "Texto principal", hex: "#F5F3EF", usage: lang === "es" ? "Texto sobre oscuro" : "Text on dark" },
            ].map((color, i) => (
              <div key={i} style={{ borderRadius: 10, overflow: "hidden", border: `1px solid ${th.border}` }}>
                <div style={{ height: 44, background: color.hex }} />
                <div style={{ padding: "8px 10px", background: th.surface2 }}>
                  <p style={{ fontSize: 11, fontWeight: 700, color: th.text, margin: "0 0 1px", transition: "color .5s" }}>{color.name}</p>
                  <p style={{ fontSize: 10, color: th.textMuted, margin: "0 0 2px", fontFamily: "monospace" }}>{color.hex}</p>
                  <p style={{ fontSize: 10, color: th.textMuted, margin: 0, lineHeight: 1.3, transition: "color .5s" }}>{color.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: mode === "dark" ? "linear-gradient(135deg,#1A1730,#221E3A)" : "linear-gradient(135deg,#26215C,#1a1730)", border: `1px solid ${th.border}`, borderRadius: 20, padding: "40px", textAlign: "center" }}>
          <p style={{ fontSize: 40, margin: "0 0 14px" }}>{mode === "dark" ? "🌙" : "☀️"}</p>
          <h2 style={{ fontSize: 24, fontWeight: 900, color: "white", margin: "0 0 8px", letterSpacing: "-.03em" }}>
            {mode === "dark" ? (lang === "es" ? "Ya estás en modo oscuro." : "You're already in dark mode.") : (lang === "es" ? "Activa el modo oscuro ahora." : "Activate dark mode now.")}
          </h2>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", margin: "0 0 24px" }}>
            {lang === "es" ? "Tu preferencia se guardará automáticamente en todos tus dispositivos." : "Your preference will be saved automatically across all your devices."}
          </p>
          <button onClick={handleApply}
            style={{ padding: "14px 36px", borderRadius: 12, border: "none", background: applied ? "#16a34a" : th.coral, color: "white", fontSize: 15, fontWeight: 800, cursor: "pointer", transition: "all .3s", boxShadow: "0 4px 20px rgba(163,45,45,.35)" }}>
            {applied ? t.appliedBtn : (mode === "dark" ? (lang === "es" ? "✓ Modo oscuro activo" : "✓ Dark mode active") : t.applyBtn)}
          </button>
          {applied && (
            <p style={{ fontSize: 12, color: "#86efac", marginTop: 10, fontWeight: 600 }}>{t.saved}</p>
          )}
        </div>
      </div>
    </div>
  );
}

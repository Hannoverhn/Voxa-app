import { useState } from "react";

const T = {
  es: {
    title: "Mi progreso en Voxa",
    sub: "Mientras más completo tu perfil, mejores serán tus campañas",
    overallLabel: "Nivel de uso",
    levels: ["Principiante", "En desarrollo", "Avanzado", "Pro", "Experto Voxa"],
    sectionsTitle: "Tu recorrido por Voxa",
    streakLabel: "Días consecutivos",
    streakSub: "usando Voxa",
    campaignsLabel: "Campañas creadas",
    scoreLabel: "Voxa Score promedio",
    reachLabel: "Alcance total estimado",
    modulesTitle: "Módulos de Voxa",
    modulesUsed: "usados",
    modulesOf: "de",
    unlockedBadges: "Insignias obtenidas",
    lockedBadges: "Próximas insignias",
    nextTip: "¿Qué hacer ahora?",
    completeProfile: "Completar perfil",
    goBtn: "Ir →",
    sections: [
      {
        id: "brain", icon: "🧠", title: "Business Brain",
        desc: "Cuánto sabe Voxa sobre tu negocio",
        items: [
          { label: "Tipo de negocio", done: true },
          { label: "Descripción y productos", done: true },
          { label: "Cliente ideal", done: true },
          { label: "Tono de comunicación", done: false },
          { label: "Competidores configurados", done: false },
        ]
      },
      {
        id: "campaigns", icon: "⚡", title: "Campañas",
        desc: "Tu historial de publicidad con IA",
        items: [
          { label: "Primera campaña creada", done: true },
          { label: "5 campañas creadas", done: true },
          { label: "10 campañas creadas", done: false },
          { label: "Primer Voxa Score 80+", done: true },
          { label: "Primer Voxa Score 90+", done: false },
        ]
      },
      {
        id: "brand", icon: "🎨", title: "Identidad de marca",
        desc: "Tu presencia visual en Voxa",
        items: [
          { label: "Logo subido al Brand Kit", done: true },
          { label: "Color principal configurado", done: true },
          { label: "Primer creativo descargado", done: false },
          { label: "Multi-formato generado", done: false },
        ]
      },
      {
        id: "tools", icon: "🛠️", title: "Herramientas avanzadas",
        desc: "Funciones que maximizan tus resultados",
        items: [
          { label: "Voxa Predict usado", done: false },
          { label: "Voxa Clone Pro activado", done: false },
          { label: "Campaign Autopilot ejecutado", done: false },
          { label: "Calculadora ROI completada", done: false },
        ]
      },
    ],
    badges: [
      { emoji: "🌱", name: "Primera campaña", desc: "Creaste tu primer anuncio", earned: true, date: "Hace 3 días" },
      { emoji: "⚡", name: "5 campañas", desc: "Creaste 5 anuncios", earned: true, date: "Ayer" },
      { emoji: "🎯", name: "Score 80+", desc: "Voxa Score mayor a 80", earned: true, date: "Hace 2 días" },
      { emoji: "🧠", name: "Brain activo", desc: "Business Brain configurado", earned: true, date: "Hace 3 días" },
      { emoji: "🔥", name: "10 campañas", desc: "Crea 10 anuncios", earned: false, progress: "5/10" },
      { emoji: "🏆", name: "Score 90+", desc: "Llega a un Voxa Score de 90", earned: false, progress: "Tu mejor: 84" },
      { emoji: "👥", name: "3 referidos", desc: "Invita a 3 personas a Voxa", earned: false, progress: "1/3" },
      { emoji: "🚀", name: "Autopilot", desc: "Activa Campaign Autopilot", earned: false, progress: "Pendiente" },
    ],
    tips: [
      { icon: "🧠", title: "Completa tu Business Brain", desc: "Solo te falta el tono de comunicación y tus competidores. Hacerlo mejora tus campañas un 40%.", action: "Completar Brain →", color: "#26215C" },
      { icon: "🎯", title: "Prueba Voxa Predict", desc: "Todavía no lo has usado. Predice si tu próximo anuncio va a funcionar antes de gastar un centavo.", action: "Ir a Predict →", color: "#A32D2D" },
      { icon: "🚀", title: "Activa Campaign Autopilot", desc: "Di qué quieres lograr esta semana y Voxa crea toda la campaña por ti automáticamente.", action: "Activar Autopilot →", color: "#16a34a" },
    ],
    modules: [
      { name: "Generador", used: true }, { name: "Business Brain", used: true },
      { name: "Voxa Predict", used: false }, { name: "Clone Pro", used: false },
      { name: "Autopilot", used: false }, { name: "Creativos", used: true },
      { name: "Brand Kit", used: true }, { name: "Multi-formato", used: false },
      { name: "Asistente IA", used: true }, { name: "ROI", used: false },
      { name: "Recargas", used: false }, { name: "Calendario", used: false },
    ],
  },
  en: {
    title: "My Voxa progress",
    sub: "The more complete your profile, the better your campaigns will be",
    overallLabel: "Usage level",
    levels: ["Beginner", "Developing", "Advanced", "Pro", "Voxa Expert"],
    sectionsTitle: "Your Voxa journey",
    streakLabel: "Consecutive days",
    streakSub: "using Voxa",
    campaignsLabel: "Campaigns created",
    scoreLabel: "Average Voxa Score",
    reachLabel: "Total estimated reach",
    modulesTitle: "Voxa modules",
    modulesUsed: "used",
    modulesOf: "of",
    unlockedBadges: "Earned badges",
    lockedBadges: "Next badges",
    nextTip: "What to do next?",
    completeProfile: "Complete profile",
    goBtn: "Go →",
    sections: [
      { id: "brain", icon: "🧠", title: "Business Brain", desc: "How much Voxa knows about your business", items: [{ label: "Business type", done: true }, { label: "Description & products", done: true }, { label: "Ideal customer", done: true }, { label: "Communication tone", done: false }, { label: "Competitors configured", done: false }] },
      { id: "campaigns", icon: "⚡", title: "Campaigns", desc: "Your AI advertising history", items: [{ label: "First campaign created", done: true }, { label: "5 campaigns created", done: true }, { label: "10 campaigns created", done: false }, { label: "First Voxa Score 80+", done: true }, { label: "First Voxa Score 90+", done: false }] },
      { id: "brand", icon: "🎨", title: "Brand identity", desc: "Your visual presence in Voxa", items: [{ label: "Logo uploaded to Brand Kit", done: true }, { label: "Main color configured", done: true }, { label: "First creative downloaded", done: false }, { label: "Multi-format generated", done: false }] },
      { id: "tools", icon: "🛠️", title: "Advanced tools", desc: "Features that maximize your results", items: [{ label: "Voxa Predict used", done: false }, { label: "Voxa Clone Pro activated", done: false }, { label: "Campaign Autopilot run", done: false }, { label: "ROI Calculator completed", done: false }] },
    ],
    badges: [
      { emoji: "🌱", name: "First campaign", desc: "Created your first ad", earned: true, date: "3 days ago" },
      { emoji: "⚡", name: "5 campaigns", desc: "Created 5 ads", earned: true, date: "Yesterday" },
      { emoji: "🎯", name: "Score 80+", desc: "Voxa Score above 80", earned: true, date: "2 days ago" },
      { emoji: "🧠", name: "Brain active", desc: "Business Brain configured", earned: true, date: "3 days ago" },
      { emoji: "🔥", name: "10 campaigns", desc: "Create 10 ads", earned: false, progress: "5/10" },
      { emoji: "🏆", name: "Score 90+", desc: "Reach a Voxa Score of 90", earned: false, progress: "Your best: 84" },
      { emoji: "👥", name: "3 referrals", desc: "Invite 3 people to Voxa", earned: false, progress: "1/3" },
      { emoji: "🚀", name: "Autopilot", desc: "Activate Campaign Autopilot", earned: false, progress: "Pending" },
    ],
    tips: [
      { icon: "🧠", title: "Complete your Business Brain", desc: "You're only missing communication tone and competitors. Doing it improves your campaigns by 40%.", action: "Complete Brain →", color: "#26215C" },
      { icon: "🎯", title: "Try Voxa Predict", desc: "You haven't used it yet. Predict if your next ad will work before spending a cent.", action: "Go to Predict →", color: "#A32D2D" },
      { icon: "🚀", title: "Activate Campaign Autopilot", desc: "Tell it what you want to achieve this week and Voxa creates the whole campaign automatically.", action: "Activate Autopilot →", color: "#16a34a" },
    ],
    modules: [
      { name: "Generator", used: true }, { name: "Business Brain", used: true },
      { name: "Voxa Predict", used: false }, { name: "Clone Pro", used: false },
      { name: "Autopilot", used: false }, { name: "Creatives", used: true },
      { name: "Brand Kit", used: true }, { name: "Multi-format", used: false },
      { name: "AI Assistant", used: true }, { name: "ROI", used: false },
      { name: "Recharges", used: false }, { name: "Calendar", used: false },
    ],
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

function RadialProgress({ pct, size = 100, color = "#A32D2D" }) {
  const r = size * 0.38;
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ * 0.75;
  return (
    <div style={{ position: "relative", width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ transform: "rotate(135deg)" }}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#e5e7eb" strokeWidth={size*0.07} strokeDasharray={`${circ*0.75} ${circ}`} strokeLinecap="round"/>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={size*0.07} strokeDasharray={`${dash} ${circ}`} strokeLinecap="round" style={{ transition: "stroke-dasharray .8s ease" }}/>
      </svg>
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontSize: size * 0.22, fontWeight: 900, color, lineHeight: 1 }}>{pct}%</span>
      </div>
    </div>
  );
}

function LinearBar({ pct, color = "#A32D2D", height = 8 }) {
  return (
    <div style={{ background: "#e5e7eb", borderRadius: 4, height, overflow: "hidden" }}>
      <div style={{ width: `${pct}%`, height: "100%", background: color, borderRadius: 4, transition: "width .6s ease" }} />
    </div>
  );
}

export default function VoxaProgreso() {
  const [lang, setLang] = useState("es");
  const [activeSection, setActiveSection] = useState(null);
  const t = T[lang];

  const totalItems = t.sections.reduce((a, s) => a + s.items.length, 0);
  const doneItems = t.sections.reduce((a, s) => a + s.items.filter(i => i.done).length, 0);
  const overallPct = Math.round((doneItems / totalItems) * 100);
  const levelIdx = Math.min(Math.floor(overallPct / 20), 4);
  const modulesUsed = t.modules.filter(m => m.used).length;
  const earnedBadges = t.badges.filter(b => b.earned);
  const lockedBadges = t.badges.filter(b => !b.earned);

  const sectionPct = (s) => Math.round((s.items.filter(i => i.done).length / s.items.length) * 100);
  const sectionColors = { brain: "#26215C", campaigns: "#A32D2D", brand: "#0891b2", tools: "#16a34a" };

  return (
    <div style={{ fontFamily: "'Inter',system-ui,sans-serif", background: "#f5f3ef", minHeight: "100vh" }}>

      {/* HEADER */}
      <div style={{ background: "#26215C", padding: "0 5%", height: 62, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <div style={{ width: 30, height: 30, background: "#A32D2D", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "white", fontSize: 14 }}>V</div>
          <span style={{ fontWeight: 900, fontSize: 17, color: "white" }}>Voxa</span>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>· {t.title}</span>
        </div>
        <LangToggle lang={lang} setLang={setLang} />
      </div>

      {/* HERO PROGRESS */}
      <div style={{ background: "linear-gradient(135deg,#26215C,#1a1730)", padding: "32px 5%" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", display: "flex", gap: 28, alignItems: "center", flexWrap: "wrap" }}>
          <RadialProgress pct={overallPct} size={120} color="#A32D2D" />
          <div style={{ flex: 1, minWidth: 200 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.07em", margin: "0 0 6px" }}>{t.overallLabel}</p>
            <p style={{ fontSize: 28, fontWeight: 900, color: "white", margin: "0 0 4px", letterSpacing: "-0.03em" }}>{t.levels[levelIdx]}</p>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", margin: "0 0 14px" }}>{doneItems} de {totalItems} hitos completados</p>
            <LinearBar pct={overallPct} color="#A32D2D" height={6} />
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {[
              ["7", t.streakLabel, t.streakSub, "🔥"],
              ["5", t.campaignsLabel, "", "⚡"],
              ["84", t.scoreLabel, "", "🎯"],
              ["12.4K", t.reachLabel, "", "📣"],
            ].map(([n, l, s, icon]) => (
              <div key={l} style={{ background: "rgba(255,255,255,0.07)", borderRadius: 12, padding: "14px 16px", textAlign: "center", minWidth: 90 }}>
                <p style={{ fontSize: 9, margin: "0 0 4px" }}>{icon}</p>
                <p style={{ fontSize: 22, fontWeight: 900, color: "white", margin: "0 0 2px", letterSpacing: "-0.03em" }}>{n}</p>
                <p style={{ fontSize: 10, color: "rgba(255,255,255,0.45)", lineHeight: 1.3 }}>{l}</p>
                {s && <p style={{ fontSize: 9, color: "rgba(255,255,255,0.25)", margin: 0 }}>{s}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "24px 5%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 20, alignItems: "start" }}>

          {/* LEFT */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

            {/* SECCIONES */}
            <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 16, padding: "20px" }}>
              <p style={{ fontSize: 14, fontWeight: 800, color: "#26215C", margin: "0 0 16px" }}>{t.sectionsTitle}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {t.sections.map(sec => {
                  const pct = sectionPct(sec);
                  const color = sectionColors[sec.id] || "#A32D2D";
                  const isOpen = activeSection === sec.id;
                  return (
                    <div key={sec.id}>
                      <button onClick={() => setActiveSection(isOpen ? null : sec.id)}
                        style={{ width: "100%", display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", borderRadius: 12, border: isOpen ? `2px solid ${color}` : "1.5px solid #e5e7eb", background: isOpen ? `${color}08` : "#fafafa", cursor: "pointer", textAlign: "left", transition: "all .2s" }}>
                        <span style={{ fontSize: 22, flexShrink: 0 }}>{sec.icon}</span>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                            <p style={{ fontSize: 14, fontWeight: 700, color: "#26215C", margin: 0 }}>{sec.title}</p>
                            <span style={{ fontSize: 12, fontWeight: 700, color }}>{pct}%</span>
                          </div>
                          <LinearBar pct={pct} color={color} height={5} />
                          <p style={{ fontSize: 11, color: "#9ca3af", margin: "4px 0 0" }}>{sec.desc}</p>
                        </div>
                        <span style={{ color: "#9ca3af", fontSize: 16, transition: "transform .2s", transform: isOpen ? "rotate(180deg)" : "rotate(0)" }}>▾</span>
                      </button>
                      {isOpen && (
                        <div style={{ background: "white", border: `1px solid ${color}30`, borderTop: "none", borderRadius: "0 0 12px 12px", padding: "12px 16px" }}>
                          {sec.items.map((item, i) => (
                            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 0", borderBottom: i < sec.items.length - 1 ? "1px solid #f3f4f6" : "none" }}>
                              <div style={{ width: 22, height: 22, borderRadius: "50%", background: item.done ? color : "#f3f4f6", border: item.done ? "none" : "1.5px solid #e5e7eb", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                {item.done && <span style={{ color: "white", fontSize: 12 }}>✓</span>}
                              </div>
                              <span style={{ fontSize: 13, color: item.done ? "#374151" : "#9ca3af", fontWeight: item.done ? 600 : 400 }}>{item.label}</span>
                              {!item.done && <span style={{ marginLeft: "auto", fontSize: 11, color: color, fontWeight: 700, background: `${color}12`, padding: "2px 9px", borderRadius: 20, cursor: "pointer" }}>{lang === "es" ? "Hacerlo →" : "Do it →"}</span>}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* MÓDULOS */}
            <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 16, padding: "20px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                <p style={{ fontSize: 14, fontWeight: 800, color: "#26215C", margin: 0 }}>{t.modulesTitle}</p>
                <span style={{ fontSize: 12, fontWeight: 700, color: "#A32D2D" }}>{modulesUsed} {t.modulesOf} {t.modules.length} {t.modulesUsed}</span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {t.modules.map((m, i) => (
                  <div key={i} style={{ padding: "7px 13px", borderRadius: 20, background: m.used ? "#26215C" : "#f3f4f6", border: m.used ? "none" : "1px solid #e5e7eb", display: "flex", alignItems: "center", gap: 5 }}>
                    <span style={{ fontSize: 10 }}>{m.used ? "✓" : "○"}</span>
                    <span style={{ fontSize: 12, fontWeight: m.used ? 700 : 400, color: m.used ? "white" : "#9ca3af" }}>{m.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

            {/* PRÓXIMO PASO */}
            <div style={{ background: "linear-gradient(135deg,#26215C,#A32D2D)", borderRadius: 16, padding: "20px" }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 12px" }}>{t.nextTip}</p>
              {t.tips.map((tip, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.07)", borderRadius: 11, padding: "12px 14px", marginBottom: i < t.tips.length - 1 ? 8 : 0 }}>
                  <p style={{ fontSize: 13, fontWeight: 700, color: "white", margin: "0 0 4px" }}>{tip.icon} {tip.title}</p>
                  <p style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", margin: "0 0 8px", lineHeight: 1.5 }}>{tip.desc}</p>
                  <button style={{ fontSize: 11, fontWeight: 700, color: "white", background: "rgba(255,255,255,0.15)", border: "none", borderRadius: 8, padding: "5px 12px", cursor: "pointer" }}>{tip.action}</button>
                </div>
              ))}
            </div>

            {/* INSIGNIAS GANADAS */}
            <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 16, padding: "18px" }}>
              <p style={{ fontSize: 13, fontWeight: 800, color: "#26215C", margin: "0 0 12px" }}>🏆 {t.unlockedBadges} ({earnedBadges.length})</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                {earnedBadges.map((b, i) => (
                  <div key={i} style={{ background: "#FAEEDA", border: "1px solid #F5C6C6", borderRadius: 10, padding: "10px", textAlign: "center" }}>
                    <span style={{ fontSize: 24, display: "block", marginBottom: 4 }}>{b.emoji}</span>
                    <p style={{ fontSize: 11, fontWeight: 700, color: "#26215C", margin: "0 0 2px" }}>{b.name}</p>
                    <p style={{ fontSize: 10, color: "#9ca3af", margin: 0 }}>{b.date}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* INSIGNIAS PENDIENTES */}
            <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 16, padding: "18px" }}>
              <p style={{ fontSize: 13, fontWeight: 800, color: "#26215C", margin: "0 0 12px" }}>🔒 {t.lockedBadges}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {lockedBadges.map((b, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "center", opacity: 0.7 }}>
                    <span style={{ fontSize: 22, filter: "grayscale(1)", flexShrink: 0 }}>{b.emoji}</span>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: 12, fontWeight: 700, color: "#374151", margin: "0 0 1px" }}>{b.name}</p>
                      <p style={{ fontSize: 11, color: "#9ca3af", margin: 0 }}>{b.progress}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

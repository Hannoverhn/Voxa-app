import { useState } from "react";

const T = {
  es: {
    title: "Calendario de contenido",
    sub: "Voxa te dice exactamente qué publicar, cuándo y en qué canal",
    businessPh: "Ej: Salón de belleza en Tegucigalpa",
    goal: "Objetivo del mes",
    goals: ["Aumentar ventas", "Conseguir nuevos clientes", "Dar a conocer mi marca", "Anunciar una promoción"],
    channel: "Canales activos",
    channels: ["Facebook", "Instagram", "TikTok", "WhatsApp", "Google"],
    weeks: 4,
    generateBtn: "📅 Generar mi calendario",
    generating: "Creando tu calendario...",
    days: ["Lun","Mar","Mié","Jue","Vie","Sáb","Dom"],
    types: {
      "promo": { label: "Promoción", color: "#A32D2D", bg: "#fff5f5" },
      "educativo": { label: "Educativo", color: "#0891b2", bg: "#f0f9ff" },
      "testimonio": { label: "Testimonio", color: "#16a34a", bg: "#f0fdf4" },
      "comunidad": { label: "Comunidad", color: "#854d0e", bg: "#fefce8" },
      "producto": { label: "Producto", color: "#26215C", bg: "#FFF8F0" },
      "descanso": { label: "Descanso", color: "#9ca3af", bg: "#f9fafb" },
    },
    bestTime: "Mejor hora",
    platform: "Canal",
    copy: "Idea de contenido",
    copyBtn: "Copiar",
    copied: "✓",
    weekLabel: "Semana",
    downloadBtn: "⬇️ Exportar calendario",
    newCalendar: "+ Nuevo calendario",
    business: "Tu negocio",
    tip: "💡 Consejo del día:",
    restDay: "Día de descanso",
  },
  en: {
    title: "Content Calendar",
    sub: "Voxa tells you exactly what to post, when and on which channel",
    businessPh: "E.g.: Beauty salon in Tegucigalpa",
    goal: "Monthly goal",
    goals: ["Increase sales", "Get new customers", "Build brand awareness", "Announce a promotion"],
    channel: "Active channels",
    channels: ["Facebook", "Instagram", "TikTok", "WhatsApp", "Google"],
    weeks: 4,
    generateBtn: "📅 Generate my calendar",
    generating: "Creating your calendar...",
    days: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
    types: {
      "promo": { label: "Promotion", color: "#A32D2D", bg: "#fff5f5" },
      "educativo": { label: "Educational", color: "#0891b2", bg: "#f0f9ff" },
      "testimonio": { label: "Testimonial", color: "#16a34a", bg: "#f0fdf4" },
      "comunidad": { label: "Community", color: "#854d0e", bg: "#fefce8" },
      "producto": { label: "Product", color: "#26215C", bg: "#FFF8F0" },
      "descanso": { label: "Rest day", color: "#9ca3af", bg: "#f9fafb" },
    },
    bestTime: "Best time",
    platform: "Channel",
    copy: "Content idea",
    copyBtn: "Copy",
    copied: "✓",
    weekLabel: "Week",
    downloadBtn: "⬇️ Export calendar",
    newCalendar: "+ New calendar",
    business: "Your business",
    tip: "💡 Daily tip:",
    restDay: "Rest day",
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

export default function VoxaCalendario() {
  const [lang, setLang] = useState("es");
  const [business, setBusiness] = useState("");
  const [goal, setGoal] = useState("");
  const [channels, setChannels] = useState(["Facebook", "Instagram"]);
  const [loading, setLoading] = useState(false);
  const [calendar, setCalendar] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const t = T[lang];

  const toggleChannel = (ch) => setChannels(prev => prev.includes(ch) ? prev.filter(c => c !== ch) : [...prev, ch]);

  const canGenerate = business.trim().length > 5 && goal && channels.length > 0;

  const buildPrompt = () => `Eres un experto en estrategia de contenido para redes sociales para pequeños negocios latinoamericanos. ${lang === "es" ? "Responde en español." : "Respond in English."}

Negocio: ${business}
Objetivo del mes: ${goal}
Canales activos: ${channels.join(", ")}

Crea un calendario de contenido para 4 semanas (28 días). Para cada día de lunes a sábado sugiere contenido. Los domingos son descanso.

Los tipos de contenido deben rotar estratégicamente: promo, educativo, testimonio, comunidad, producto, descanso.

Responde ÚNICAMENTE con este JSON válido sin texto adicional:
{
  "semanas": [
    {
      "semana": 1,
      "dias": [
        {
          "dia": 1,
          "tipo": "promo",
          "canal": "Facebook",
          "hora": "7:00 PM",
          "idea": "idea concreta de contenido en 1-2 oraciones",
          "consejo": "consejo corto y específico para este post"
        }
      ]
    }
  ],
  "estrategia": "resumen de la estrategia del mes en 2 oraciones"
}`;

  const generate = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model: "claude-sonnet-4-6", max_tokens: 3000, messages: [{ role: "user", content: buildPrompt() }] })
      });
      const data = await res.json();
      const text = data.content?.[0]?.text || "";
      const parsed = JSON.parse(text.replace(/```json|```/g, "").trim());
      setCalendar(parsed);
    } catch { alert(lang === "es" ? "Error al generar. Intenta de nuevo." : "Error. Please try again."); }
    finally { setLoading(false); }
  };

  const inp = { width: "100%", padding: "11px 14px", fontSize: 14, borderRadius: 10, border: "1.5px solid #e5e7eb", fontFamily: "inherit", color: "#111", outline: "none", boxSizing: "border-box", background: "white" };

  if (calendar) return (
    <div style={{ fontFamily: "'Inter',system-ui,sans-serif", background: "#f5f3ef", minHeight: "100vh" }}>
      <div style={{ background: "#26215C", padding: "0 5%", height: 62, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <div style={{ width: 30, height: 30, background: "#A32D2D", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "white", fontSize: 14 }}>V</div>
          <span style={{ fontWeight: 900, fontSize: 17, color: "white" }}>Voxa</span>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>· {t.title}</span>
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <LangToggle lang={lang} setLang={setLang} />
          <button onClick={() => { setCalendar(null); setSelectedDay(null); }} style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", background: "none", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 8, padding: "6px 12px", cursor: "pointer" }}>{t.newCalendar}</button>
        </div>
      </div>

      {calendar.estrategia && (
        <div style={{ background: "#26215C", padding: "14px 5%", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", margin: 0, maxWidth: 900, lineHeight: 1.5 }}>🧠 {calendar.estrategia}</p>
        </div>
      )}

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "24px 5%", display: "grid", gridTemplateColumns: selectedDay ? "1fr 320px" : "1fr", gap: 20 }}>
        <div>
          {(calendar.semanas || []).map((semana) => (
            <div key={semana.semana} style={{ marginBottom: 24 }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: "#26215C", textTransform: "uppercase", letterSpacing: "0.07em", margin: "0 0 10px" }}>{t.weekLabel} {semana.semana}</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 6 }}>
                {t.days.map((dayName, di) => {
                  const dayData = semana.dias?.find(d => d.dia === (semana.semana - 1) * 7 + di + 1);
                  const isRest = di === 6 || dayData?.tipo === "descanso";
                  const typeInfo = dayData ? t.types[dayData.tipo] || t.types.producto : null;
                  const isSelected = selectedDay?.dia === dayData?.dia && selectedDay?.semana === semana.semana;
                  return (
                    <div key={di} onClick={() => dayData && !isRest && setSelectedDay({ ...dayData, semana: semana.semana })}
                      style={{ borderRadius: 10, overflow: "hidden", cursor: dayData && !isRest ? "pointer" : "default", border: isSelected ? "2px solid #A32D2D" : "1px solid #e8e8f0", transition: "all .15s", transform: isSelected ? "translateY(-2px)" : "none", boxShadow: isSelected ? "0 4px 12px rgba(163,45,45,.2)" : "none" }}>
                      <div style={{ background: isRest ? "#f9fafb" : typeInfo?.bg || "#FFF8F0", padding: "8px 6px", textAlign: "center" }}>
                        <p style={{ fontSize: 10, color: "#9ca3af", margin: "0 0 3px", fontWeight: 600 }}>{dayName}</p>
                        <p style={{ fontSize: 18, fontWeight: 900, color: isRest ? "#d1d5db" : typeInfo?.color || "#26215C", margin: "0 0 4px" }}>{(semana.semana - 1) * 7 + di + 1}</p>
                        {!isRest && typeInfo && (
                          <span style={{ fontSize: 9, fontWeight: 700, color: typeInfo.color, background: "rgba(255,255,255,0.8)", padding: "2px 5px", borderRadius: 20, display: "inline-block" }}>
                            {typeInfo.label}
                          </span>
                        )}
                        {isRest && <span style={{ fontSize: 16 }}>😴</span>}
                      </div>
                      {!isRest && dayData && (
                        <div style={{ background: "white", padding: "6px", borderTop: "1px solid #f0f0f5" }}>
                          <p style={{ fontSize: 10, color: "#6b7280", margin: 0, lineHeight: 1.4, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>
                            {dayData.idea}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* LEYENDA */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 8 }}>
            {Object.entries(t.types).map(([key, val]) => (
              <div key={key} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <div style={{ width: 10, height: 10, borderRadius: 3, background: val.color }} />
                <span style={{ fontSize: 11, color: "#6b7280" }}>{val.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* DETAIL PANEL */}
        {selectedDay && (
          <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 16, overflow: "hidden", height: "fit-content", position: "sticky", top: 20 }}>
            <div style={{ background: t.types[selectedDay.tipo]?.bg || "#FFF8F0", padding: "16px 18px", borderBottom: "1px solid #f0f0f5" }}>
              <div style={{ display: "flex", justify: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: t.types[selectedDay.tipo]?.color || "#26215C", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  {t.types[selectedDay.tipo]?.label} · {t.weekLabel} {selectedDay.semana}
                </span>
                <button onClick={() => setSelectedDay(null)} style={{ background: "none", border: "none", color: "#9ca3af", cursor: "pointer", fontSize: 18, marginLeft: "auto" }}>×</button>
              </div>
              <p style={{ fontSize: 22, fontWeight: 900, color: "#26215C", margin: "4px 0 0" }}>{lang === "es" ? "Día" : "Day"} {selectedDay.dia}</p>
            </div>
            <div style={{ padding: "16px 18px", display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ display: "flex", gap: 10 }}>
                <div style={{ flex: 1, background: "#f9fafb", borderRadius: 9, padding: "10px 12px" }}>
                  <p style={{ fontSize: 10, color: "#9ca3af", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 3px" }}>{t.platform}</p>
                  <p style={{ fontSize: 14, fontWeight: 700, color: "#26215C", margin: 0 }}>{selectedDay.canal}</p>
                </div>
                <div style={{ flex: 1, background: "#f9fafb", borderRadius: 9, padding: "10px 12px" }}>
                  <p style={{ fontSize: 10, color: "#9ca3af", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 3px" }}>{t.bestTime}</p>
                  <p style={{ fontSize: 14, fontWeight: 700, color: "#A32D2D", margin: 0 }}>{selectedDay.hora}</p>
                </div>
              </div>
              <div>
                <p style={{ fontSize: 11, color: "#9ca3af", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 6px" }}>{t.copy}</p>
                <p style={{ fontSize: 14, color: "#374151", margin: "0 0 10px", lineHeight: 1.65 }}>{selectedDay.idea}</p>
                <button onClick={() => navigator.clipboard.writeText(selectedDay.idea)}
                  style={{ fontSize: 12, padding: "6px 14px", borderRadius: 8, border: "1px solid #e5e7eb", background: "white", color: "#26215C", cursor: "pointer", fontWeight: 600 }}>
                  📋 {t.copyBtn}
                </button>
              </div>
              {selectedDay.consejo && (
                <div style={{ background: "#FAEEDA", borderRadius: 10, padding: "12px 14px" }}>
                  <p style={{ fontSize: 12, color: "#854d0e", margin: 0, lineHeight: 1.6 }}>{t.tip} {selectedDay.consejo}</p>
                </div>
              )}
              <button onClick={() => { const next = selectedDay.dia + 1; const allDays = calendar.semanas.flatMap(s => (s.dias || []).map(d => ({ ...d, semana: s.semana }))); const nextDay = allDays.find(d => d.dia === next); if (nextDay) setSelectedDay(nextDay); }}
                style={{ padding: "10px", borderRadius: 10, border: "none", background: "#26215C", color: "white", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
                {lang === "es" ? "Ver día siguiente →" : "Next day →"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );

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

      <div style={{ maxWidth: 560, margin: "0 auto", padding: "32px 5%" }}>
        <h2 style={{ fontSize: 22, fontWeight: 900, color: "#26215C", margin: "0 0 6px" }}>{t.title}</h2>
        <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 28px" }}>{t.sub}</p>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div>
            <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 7, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.business}</label>
            <input value={business} onChange={e => setBusiness(e.target.value)} placeholder={t.businessPh} style={inp} />
          </div>
          <div>
            <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 7, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.goal}</label>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {t.goals.map(g => (
                <button key={g} onClick={() => setGoal(g)}
                  style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 16px", borderRadius: 10, border: goal === g ? "2px solid #26215C" : "1.5px solid #e5e7eb", background: goal === g ? "#FFF8F0" : "white", fontSize: 14, fontWeight: goal === g ? 700 : 400, color: goal === g ? "#26215C" : "#374151", cursor: "pointer" }}>
                  {g} {goal === g && "✓"}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 7, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.channel}</label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {t.channels.map(ch => (
                <button key={ch} onClick={() => toggleChannel(ch)}
                  style={{ padding: "8px 16px", borderRadius: 20, border: channels.includes(ch) ? "2px solid #26215C" : "1.5px solid #e5e7eb", background: channels.includes(ch) ? "#FFF8F0" : "white", fontSize: 13, fontWeight: channels.includes(ch) ? 700 : 400, color: channels.includes(ch) ? "#26215C" : "#374151", cursor: "pointer" }}>
                  {channels.includes(ch) ? "✓ " : ""}{ch}
                </button>
              ))}
            </div>
          </div>
          <button onClick={generate} disabled={!canGenerate || loading}
            style={{ padding: "15px", borderRadius: 12, border: "none", background: canGenerate && !loading ? "#26215C" : "#e5e7eb", color: canGenerate && !loading ? "white" : "#9ca3af", fontSize: 15, fontWeight: 800, cursor: canGenerate && !loading ? "pointer" : "not-allowed" }}>
            {loading ? (
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                <span style={{ width: 16, height: 16, border: "2px solid rgba(255,255,255,.4)", borderTopColor: "white", borderRadius: "50%", display: "inline-block", animation: "spin .7s linear infinite" }} />
                {t.generating}
              </span>
            ) : t.generateBtn}
          </button>
        </div>
      </div>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}

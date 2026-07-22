import { useState, useEffect } from "react";

const T = {
  es: {
    title: "Notificaciones",
    sub: "Tus resultados en tiempo real",
    tabs: ["Todas", "Resultados", "Alertas", "Voxa Tips"],
    markAll: "Marcar todo como leído",
    empty: "No tienes notificaciones nuevas",
    emptySub: "Cuando tus campañas generen resultados, aparecerán aquí",
    viewCampaign: "Ver campaña",
    viewDetails: "Ver detalles",
    dismiss: "Ignorar",
    celebrate: "🎉 ¡Felicitaciones!",
    timeAgo: {
      now: "Ahora",
      min: "min",
      hour: "h",
      day: "d",
    },
    notifs: [
      {
        id: 1, type: "resultado", read: false, time: 2,
        icon: "🚀", color: "#16a34a", bg: "#f0fdf4", border: "#bbf7d0",
        title: "Tu anuncio llegó a 1,000 personas",
        body: "Tu campaña 'Promoción de verano' alcanzó su primer hito. 1,247 personas la vieron en las últimas 24 horas.",
        metric: { label: "Alcance", value: "1,247", trend: "+23% vs. ayer" },
        action: "viewCampaign"
      },
      {
        id: 2, type: "resultado", read: false, time: 15,
        icon: "💰", color: "#0891b2", bg: "#f0f9ff", border: "#bae6fd",
        title: "3 clientes nuevos desde Instagram",
        body: "Tu anuncio del martes generó 3 consultas directas. Revisa tus mensajes de Instagram para dar seguimiento.",
        metric: { label: "Clientes nuevos", value: "3", trend: "Esta semana" },
        action: "viewDetails"
      },
      {
        id: 3, type: "alerta", read: false, time: 45,
        icon: "⚠️", color: "#f59e0b", bg: "#fefce8", border: "#fde68a",
        title: "Tu presupuesto está al 80%",
        body: "Has gastado $16 de tus $20 en Voxa Pauta. ¿Quieres recargar para que tu campaña no se detenga?",
        metric: { label: "Gastado", value: "$16/$20", trend: "Quedan $4" },
        action: "viewDetails"
      },
      {
        id: 4, type: "tip", read: false, time: 120,
        icon: "🧠", color: "#26215C", bg: "#f5f3ff", border: "#ddd6fe",
        title: "💡 Voxa Tip: Los viernes a las 6PM convierten más",
        body: "Basado en tus últimas 8 campañas, tus anuncios generan 34% más clics cuando los publicas el viernes entre 5-7 PM.",
        metric: { label: "Boost estimado", value: "+34%", trend: "vs. otros días" },
        action: "dismiss"
      },
      {
        id: 5, type: "resultado", read: true, time: 1440,
        icon: "🎯", color: "#A32D2D", bg: "#fff5f5", border: "#fecaca",
        title: "Voxa Score mejoró a 91/100",
        body: "Aplicaste las recomendaciones de Voxa Predict y tu último anuncio subió de 78 a 91 puntos. ¡Excelente trabajo!",
        metric: { label: "Voxa Score", value: "91/100", trend: "+13 pts" },
        action: "viewCampaign"
      },
      {
        id: 6, type: "alerta", read: true, time: 2880,
        icon: "📅", color: "#16a34a", bg: "#f0fdf4", border: "#bbf7d0",
        title: "Día de la Madre en 18 días",
        body: "Es la fecha comercial más importante del año. Voxa ya preparó 3 campañas sugeridas para tu negocio. ¿Las ves?",
        metric: { label: "Potencial", value: "+520%", trend: "vs. semana normal" },
        action: "viewDetails"
      },
      {
        id: 7, type: "resultado", read: true, time: 4320,
        icon: "⭐", color: "#854d0e", bg: "#fefce8", border: "#fde68a",
        title: "Insignia desbloqueada: 10 campañas",
        body: "¡Creaste tu campaña número 10! Has alcanzado el nivel Pro en Voxa. Tu Business Brain ahora tiene suficientes datos para hacer predicciones más precisas.",
        metric: { label: "Total campañas", value: "10", trend: "Nivel Pro" },
        action: "viewDetails"
      },
    ]
  },
  en: {
    title: "Notifications",
    sub: "Your results in real time",
    tabs: ["All", "Results", "Alerts", "Voxa Tips"],
    markAll: "Mark all as read",
    empty: "No new notifications",
    emptySub: "When your campaigns generate results, they'll appear here",
    viewCampaign: "View campaign",
    viewDetails: "View details",
    dismiss: "Dismiss",
    celebrate: "🎉 Congratulations!",
    timeAgo: { now: "Now", min: "min", hour: "h", day: "d" },
    notifs: [
      { id: 1, type: "resultado", read: false, time: 2, icon: "🚀", color: "#16a34a", bg: "#f0fdf4", border: "#bbf7d0", title: "Your ad reached 1,000 people", body: "Your 'Summer Promotion' campaign hit its first milestone. 1,247 people saw it in the last 24 hours.", metric: { label: "Reach", value: "1,247", trend: "+23% vs. yesterday" }, action: "viewCampaign" },
      { id: 2, type: "resultado", read: false, time: 15, icon: "💰", color: "#0891b2", bg: "#f0f9ff", border: "#bae6fd", title: "3 new clients from Instagram", body: "Your Tuesday ad generated 3 direct inquiries. Check your Instagram messages to follow up.", metric: { label: "New clients", value: "3", trend: "This week" }, action: "viewDetails" },
      { id: 3, type: "alerta", read: false, time: 45, icon: "⚠️", color: "#f59e0b", bg: "#fefce8", border: "#fde68a", title: "Your budget is at 80%", body: "You've spent $16 of your $20 in Voxa Pauta. Do you want to recharge so your campaign doesn't stop?", metric: { label: "Spent", value: "$16/$20", trend: "$4 remaining" }, action: "viewDetails" },
      { id: 4, type: "tip", read: false, time: 120, icon: "🧠", color: "#26215C", bg: "#f5f3ff", border: "#ddd6fe", title: "💡 Voxa Tip: Fridays at 6PM convert more", body: "Based on your last 8 campaigns, your ads generate 34% more clicks when published Friday between 5-7 PM.", metric: { label: "Estimated boost", value: "+34%", trend: "vs. other days" }, action: "dismiss" },
      { id: 5, type: "resultado", read: true, time: 1440, icon: "🎯", color: "#A32D2D", bg: "#fff5f5", border: "#fecaca", title: "Voxa Score improved to 91/100", body: "You applied Voxa Predict's recommendations and your last ad went from 78 to 91 points. Great work!", metric: { label: "Voxa Score", value: "91/100", trend: "+13 pts" }, action: "viewCampaign" },
      { id: 6, type: "alerta", read: true, time: 2880, icon: "📅", color: "#16a34a", bg: "#f0fdf4", border: "#bbf7d0", title: "Mother's Day in 18 days", body: "It's the most important commercial date of the year. Voxa already prepared 3 suggested campaigns for your business. Want to see them?", metric: { label: "Potential", value: "+520%", trend: "vs. normal week" }, action: "viewDetails" },
      { id: 7, type: "resultado", read: true, time: 4320, icon: "⭐", color: "#854d0e", bg: "#fefce8", border: "#fde68a", title: "Badge unlocked: 10 campaigns", body: "You created your 10th campaign! You've reached Pro level in Voxa. Your Business Brain now has enough data to make more accurate predictions.", metric: { label: "Total campaigns", value: "10", trend: "Pro level" }, action: "viewDetails" },
    ]
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

function TimeAgo({ minutes, t }) {
  if (minutes < 60) return <span>{minutes} {t.timeAgo.min}</span>;
  if (minutes < 1440) return <span>{Math.floor(minutes/60)}{t.timeAgo.hour}</span>;
  return <span>{Math.floor(minutes/1440)}{t.timeAgo.day}</span>;
}

// Toast component
function Toast({ notif, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);
  return (
    <div style={{
      position: "fixed", bottom: 24, right: 24, zIndex: 999,
      background: "white", border: `1px solid ${notif.border}`,
      borderLeft: `4px solid ${notif.color}`,
      borderRadius: 14, padding: "14px 18px",
      boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
      display: "flex", gap: 12, alignItems: "flex-start",
      maxWidth: 340, animation: "slideIn .3s ease"
    }}>
      <span style={{ fontSize: 24, flexShrink: 0 }}>{notif.icon}</span>
      <div style={{ flex: 1 }}>
        <p style={{ fontSize: 13, fontWeight: 700, color: "#26215C", margin: "0 0 3px" }}>{notif.title}</p>
        <p style={{ fontSize: 12, color: "#6b7280", margin: "0 0 8px", lineHeight: 1.4 }}>{notif.body.substring(0, 80)}...</p>
        <span style={{ fontSize: 12, fontWeight: 700, color: notif.color }}>{notif.metric.value} {notif.metric.trend}</span>
      </div>
      <button onClick={onClose} style={{ background: "none", border: "none", color: "#9ca3af", cursor: "pointer", fontSize: 16, flexShrink: 0, padding: 0 }}>×</button>
    </div>
  );
}

export default function VoxaNotificaciones() {
  const [lang, setLang] = useState("es");
  const [tab, setTab] = useState(0);
  const [notifs, setNotifs] = useState(null);
  const [toast, setToast] = useState(null);
  const [showingNew, setShowingNew] = useState(false);
  const t = T[lang];

  useEffect(() => {
    setNotifs(t.notifs.map(n => ({ ...n })));
  }, [lang]);

  if (!notifs) return null;

  const unread = notifs.filter(n => !n.read).length;

  const filterMap = { 0: null, 1: "resultado", 2: "alerta", 3: "tip" };
  const filtered = filterMap[tab] ? notifs.filter(n => n.type === filterMap[tab]) : notifs;

  const markRead = (id) => setNotifs(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  const markAll = () => setNotifs(prev => prev.map(n => ({ ...n, read: true })));
  const dismiss = (id) => setNotifs(prev => prev.filter(n => n.id !== id));

  const simulateNew = () => {
    const newNotif = {
      id: Date.now(), type: "resultado", read: false, time: 0,
      icon: "🔥", color: "#A32D2D", bg: "#fff5f5", border: "#fecaca",
      title: lang === "es" ? "¡Tu anuncio está rompiendo récords!" : "Your ad is breaking records!",
      body: lang === "es" ? "Tu campaña más reciente alcanzó 500 personas en solo 2 horas. El CTR es de 6.8% — muy por encima del promedio." : "Your most recent campaign reached 500 people in just 2 hours. CTR is 6.8% — well above average.",
      metric: { label: "CTR", value: "6.8%", trend: lang === "es" ? "+223% vs. prom." : "+223% vs. avg." },
      action: "viewCampaign"
    };
    setNotifs(prev => [newNotif, ...prev]);
    setToast(newNotif);
  };

  const tabBadges = [
    notifs.filter(n => !n.read).length,
    notifs.filter(n => !n.read && n.type === "resultado").length,
    notifs.filter(n => !n.read && n.type === "alerta").length,
    notifs.filter(n => !n.read && n.type === "tip").length,
  ];

  return (
    <div style={{ fontFamily: "'Inter',system-ui,sans-serif", background: "#f5f3ef", minHeight: "100vh" }}>

      {/* HEADER */}
      <div style={{ background: "#26215C", padding: "0 5%", height: 62, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 30, height: 30, background: "#A32D2D", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "white", fontSize: 14 }}>V</div>
          <div>
            <span style={{ fontWeight: 900, fontSize: 16, color: "white" }}>{t.title}</span>
            {unread > 0 && <span style={{ marginLeft: 8, background: "#A32D2D", color: "white", fontSize: 11, fontWeight: 700, padding: "2px 7px", borderRadius: 10 }}>{unread}</span>}
          </div>
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <button onClick={simulateNew} style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", background: "rgba(255,255,255,0.08)", border: "none", borderRadius: 8, padding: "6px 12px", cursor: "pointer" }}>
            + {lang === "es" ? "Simular notif." : "Simulate notif."}
          </button>
          <LangToggle lang={lang} setLang={setLang} />
        </div>
      </div>

      {/* TABS */}
      <div style={{ background: "white", borderBottom: "1px solid #e8e8f0", padding: "0 5%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", overflowX: "auto" }}>
          {t.tabs.map((tb, i) => (
            <button key={i} onClick={() => setTab(i)}
              style={{ padding: "13px 16px", border: "none", borderBottom: tab === i ? "2px solid #A32D2D" : "2px solid transparent", background: "transparent", fontSize: 13, fontWeight: tab === i ? 700 : 500, color: tab === i ? "#A32D2D" : "#6b7280", cursor: "pointer", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: 6 }}>
              {tb}
              {tabBadges[i] > 0 && <span style={{ background: "#A32D2D", color: "white", fontSize: 10, fontWeight: 700, padding: "1px 6px", borderRadius: 10 }}>{tabBadges[i]}</span>}
            </button>
          ))}
        </div>
        {unread > 0 && (
          <button onClick={markAll} style={{ fontSize: 12, color: "#A32D2D", background: "none", border: "none", cursor: "pointer", fontWeight: 700, whiteSpace: "nowrap", padding: "0 4px" }}>
            {t.markAll}
          </button>
        )}
      </div>

      {/* LIST */}
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "20px 5%" }}>
        {filtered.length === 0 ? (
          <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 16, padding: "60px 24px", textAlign: "center" }}>
            <p style={{ fontSize: 40, margin: "0 0 12px" }}>🔔</p>
            <p style={{ fontSize: 15, fontWeight: 700, color: "#26215C", margin: "0 0 6px" }}>{t.empty}</p>
            <p style={{ fontSize: 13, color: "#9ca3af", margin: 0 }}>{t.emptySub}</p>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {filtered.map((notif) => (
              <div key={notif.id}
                onClick={() => markRead(notif.id)}
                style={{
                  background: notif.read ? "white" : "#fafbff",
                  border: `1px solid ${notif.read ? "#e8e8f0" : notif.border}`,
                  borderLeft: `4px solid ${notif.read ? "#e8e8f0" : notif.color}`,
                  borderRadius: 14, padding: "16px 18px",
                  cursor: "pointer", transition: "all .2s",
                  position: "relative"
                }}
                onMouseOver={e => e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.06)"}
                onMouseOut={e => e.currentTarget.style.boxShadow = "none"}
              >
                {!notif.read && (
                  <div style={{ position: "absolute", top: 16, right: 16, width: 8, height: 8, background: notif.color, borderRadius: "50%" }} />
                )}
                <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ width: 44, height: 44, background: notif.bg, border: `1px solid ${notif.border}`, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>
                    {notif.icon}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 5 }}>
                      <p style={{ fontSize: 14, fontWeight: notif.read ? 600 : 800, color: "#26215C", margin: 0, paddingRight: 20 }}>{notif.title}</p>
                      <span style={{ fontSize: 11, color: "#9ca3af", flexShrink: 0 }}><TimeAgo minutes={notif.time} t={t} /></span>
                    </div>
                    <p style={{ fontSize: 13, color: "#6b7280", margin: "0 0 12px", lineHeight: 1.55 }}>{notif.body}</p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div style={{ background: notif.bg, border: `1px solid ${notif.border}`, borderRadius: 8, padding: "5px 10px", display: "flex", gap: 8, alignItems: "center" }}>
                        <span style={{ fontSize: 14, fontWeight: 900, color: notif.color }}>{notif.metric.value}</span>
                        <span style={{ fontSize: 11, color: "#9ca3af" }}>{notif.metric.label} · {notif.metric.trend}</span>
                      </div>
                      <div style={{ display: "flex", gap: 6 }}>
                        {notif.action !== "dismiss" ? (
                          <button onClick={e => { e.stopPropagation(); markRead(notif.id); }}
                            style={{ fontSize: 11, padding: "5px 12px", borderRadius: 7, border: "none", background: notif.color, color: "white", cursor: "pointer", fontWeight: 700 }}>
                            {t[notif.action]}
                          </button>
                        ) : (
                          <button onClick={e => { e.stopPropagation(); dismiss(notif.id); }}
                            style={{ fontSize: 11, padding: "5px 12px", borderRadius: 7, border: "1px solid #e5e7eb", background: "white", color: "#9ca3af", cursor: "pointer", fontWeight: 600 }}>
                            {t.dismiss}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {toast && <Toast notif={toast} onClose={() => setToast(null)} />}
      <style>{`
        @keyframes slideIn { from { transform: translateX(100px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
      `}</style>
    </div>
  );
}

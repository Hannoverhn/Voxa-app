import { useState } from "react";

const T = {
  es: {
    title: "Voxa Weekly",
    sub: "Todo lo que necesitas para esta semana — en un solo lugar",
    badge: "📅 Tu centro de comando semanal",
    tabs: ["Esta semana", "Alertas", "Fechas especiales", "Resumen mensual"],
    weekTitle: "Tu plan de contenido esta semana",
    weekSub: "Basado en tu negocio y los mejores momentos para publicar",
    alertsTitle: "Alertas de oportunidades",
    alertsSub: "Voxa detectó estas oportunidades para tu negocio",
    datesTitle: "Fechas especiales próximas",
    datesSub: "Campañas automáticas para no perderte ninguna fecha clave",
    summaryTitle: "Resumen de este mes",
    summarySub: "Cómo le fue a tu negocio con Voxa este mes",
    createBtn: "⚡ Crear anuncio para esta fecha",
    autopilotBtn: "🚀 Activar Autopilot para esto",
    dismissBtn: "Ignorar",
    viewBtn: "Ver campaña",
    activateBtn: "Activar campaña",
    dayLabel: "Día",
    timeLabel: "Hora",
    platformLabel: "Canal",
    typeLabel: "Tipo",
    days: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"],
    urgency: { high: "🔴 Urgente", medium: "🟡 Esta semana", low: "🟢 Próximamente" },
    statsLabels: ["Campañas creadas", "Alcance total estimado", "Clics generados", "Tu Voxa Score promedio"],
    monthlyTip: "💡 Recomendación para el próximo mes",
    notifTitle: "Notificaciones activas",
    notifItems: ["Tu anuncio del martes llegó a 1,200 personas", "El Voxa Score de tu última campaña fue 91/100", "Tienes 3 fechas especiales esta semana"],
  },
  en: {
    title: "Voxa Weekly",
    sub: "Everything you need for this week — in one place",
    badge: "📅 Your weekly command center",
    tabs: ["This week", "Alerts", "Special dates", "Monthly summary"],
    weekTitle: "Your content plan this week",
    weekSub: "Based on your business and the best times to publish",
    alertsTitle: "Opportunity alerts",
    alertsSub: "Voxa detected these opportunities for your business",
    datesTitle: "Upcoming special dates",
    datesSub: "Automatic campaigns so you don't miss any key date",
    summaryTitle: "This month's summary",
    summarySub: "How your business did with Voxa this month",
    createBtn: "⚡ Create ad for this date",
    autopilotBtn: "🚀 Activate Autopilot for this",
    dismissBtn: "Dismiss",
    viewBtn: "View campaign",
    activateBtn: "Activate campaign",
    dayLabel: "Day",
    timeLabel: "Time",
    platformLabel: "Channel",
    typeLabel: "Type",
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    urgency: { high: "🔴 Urgent", medium: "🟡 This week", low: "🟢 Coming soon" },
    statsLabels: ["Campaigns created", "Estimated total reach", "Generated clicks", "Your avg Voxa Score"],
    monthlyTip: "💡 Recommendation for next month",
    notifTitle: "Active notifications",
    notifItems: ["Your Tuesday ad reached 1,200 people", "The Voxa Score of your last campaign was 91/100", "You have 3 special dates this week"],
  }
};

const WEEK_PLAN = [
  { day: 0, time: "7:00 PM", platform: "Facebook", type: { es: "Anuncio principal", en: "Main ad" }, content: { es: "Promoción de la semana", en: "Weekly promotion" }, score: 88, status: "ready" },
  { day: 1, time: "12:00 PM", platform: "Instagram Stories", type: { es: "Historia flash", en: "Flash story" }, content: { es: "Oferta del día", en: "Daily offer" }, score: 82, status: "pending" },
  { day: 2, time: "6:00 PM", platform: "WhatsApp", type: { es: "Mensaje directo", en: "Direct message" }, content: { es: "Recordatorio clientes", en: "Client reminder" }, score: 79, status: "pending" },
  { day: 3, time: "5:00 PM", platform: "Facebook", type: { es: "Anuncio video", en: "Video ad" }, content: { es: "Testimonio de cliente", en: "Customer testimonial" }, score: 91, status: "ready" },
  { day: 4, time: "8:00 AM", platform: "Instagram", type: { es: "Post motivacional", en: "Motivational post" }, content: { es: "Inicio de fin de semana", en: "Weekend kickoff" }, score: 85, status: "pending" },
  { day: 5, time: "10:00 AM", platform: "Facebook", type: { es: "Oferta fin de semana", en: "Weekend offer" }, content: { es: "Promo especial sábado", en: "Saturday special" }, score: 93, status: "ready" },
  { day: 6, time: "6:00 PM", platform: "Instagram", type: { es: "Resumen semanal", en: "Weekly recap" }, content: { es: "Gracias clientes", en: "Thank you clients" }, score: 76, status: "pending" },
];

const ALERTS = [
  { emoji: "🔥", title: { es: "Tu competidor publicó 3 anuncios hoy", en: "Your competitor posted 3 ads today" }, desc: { es: "Detectamos actividad alta de Salón Glamour. Este es el mejor momento para contra-atacar con una oferta.", en: "We detected high activity from Glamour Salon. Now is the best time to counter with an offer." }, urgency: "high", action: "create" },
  { emoji: "📈", title: { es: "Los viernes a las 6PM son tus mejores momentos", en: "Fridays at 6PM are your best moments" }, desc: { es: "Basado en tus últimas 12 campañas, ese horario genera 34% más clics que cualquier otro.", en: "Based on your last 12 campaigns, that time slot generates 34% more clicks than any other." }, urgency: "medium", action: "autopilot" },
  { emoji: "💰", title: { es: "Tienes saldo sin usar en Voxa Pauta", en: "You have unused balance in Voxa Pauta" }, desc: { es: "Te quedan $12 de tu última recarga. Úsalos antes del domingo para no perder la oportunidad.", en: "You have $12 left from your last recharge. Use them before Sunday so you don't miss the opportunity." }, urgency: "medium", action: "create" },
  { emoji: "⭐", title: { es: "3 clientes nuevos esta semana desde Instagram", en: "3 new clients this week from Instagram" }, desc: { es: "Tu anuncio del martes está funcionando. Considera aumentar el presupuesto para amplificar.", en: "Your Tuesday ad is working. Consider increasing the budget to amplify." }, urgency: "low", action: "view" },
];

const SPECIAL_DATES = [
  { emoji: "💝", date: { es: "14 Feb — Día de San Valentín", en: "Feb 14 — Valentine's Day" }, daysLeft: 18, desc: { es: "Campañas de amor y parejas — belleza, restaurantes y regalos explotan en ventas.", en: "Love and couple campaigns — beauty, restaurants and gifts explode in sales." }, potential: "+340%" },
  { emoji: "👩", date: { es: "8 Mar — Día de la Mujer", en: "Mar 8 — Women's Day" }, daysLeft: 32, desc: { es: "Una de las fechas más fuertes para salones de belleza y negocios dirigidos a mujeres.", en: "One of the strongest dates for beauty salons and businesses targeting women." }, potential: "+280%" },
  { emoji: "🌸", date: { es: "2do Dom de Mayo — Día de la Madre", en: "2nd Sun May — Mother's Day" }, daysLeft: 89, desc: { es: "La fecha comercial más importante de LATAM. Empieza a prepararte con 3 semanas de anticipación.", en: "The most important commercial date in LATAM. Start preparing 3 weeks in advance." }, potential: "+520%" },
  { emoji: "🎓", date: { es: "Jun/Oct — Temporada de graduaciones", en: "Jun/Oct — Graduation season" }, daysLeft: 120, desc: { es: "Salones, boutiques y restaurantes tienen su segundo pico más alto del año.", en: "Salons, boutiques and restaurants have their second highest peak of the year." }, potential: "+190%" },
];

const MONTHLY_STATS = [
  { value: "14", label: { es: "Campañas creadas", en: "Campaigns created" }, color: "#26215C", trend: "+3 vs mes ant." },
  { value: "24,800", label: { es: "Alcance estimado", en: "Estimated reach" }, color: "#A32D2D", trend: "+18% vs mes ant." },
  { value: "1,240", label: { es: "Clics generados", en: "Generated clicks" }, color: "#16a34a", trend: "+22% vs mes ant." },
  { value: "86", label: { es: "Voxa Score prom.", en: "Avg Voxa Score" }, color: "#f59e0b", trend: "+4 pts vs mes ant." },
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

export default function VoxaRetencion() {
  const [lang, setLang] = useState("es");
  const [tab, setTab] = useState(0);
  const [dismissed, setDismissed] = useState([]);
  const [activated, setActivated] = useState([]);
  const t = T[lang];
  const platformColors = { "Facebook": "#1877F2", "Instagram": "#E1306C", "Instagram Stories": "#E1306C", "WhatsApp": "#25D366", "TikTok": "#000000" };
  const urgencyColors = { high: { bg: "#fff1f2", border: "#fecaca", color: "#dc2626" }, medium: { bg: "#fefce8", border: "#fde68a", color: "#854d0e" }, low: { bg: "#f0fdf4", border: "#bbf7d0", color: "#16a34a" } };

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

      {/* NOTIF BANNER */}
      <div style={{ background: "#FAEEDA", borderBottom: "1px solid #F5C6C6", padding: "10px 5%" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", gap: 16, overflowX: "auto" }}>
          {t.notifItems.map((n, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, background: "white", border: "1px solid #F5C6C6", borderRadius: 20, padding: "6px 14px", whiteSpace: "nowrap", flexShrink: 0 }}>
              <span style={{ fontSize: 12 }}>🔔</span>
              <span style={{ fontSize: 12, color: "#374151" }}>{n}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: "white", borderBottom: "1px solid #e8e8f0", padding: "0 5%", display: "flex", overflowX: "auto" }}>
        {t.tabs.map((tb, i) => (
          <button key={i} onClick={() => setTab(i)}
            style={{ padding: "13px 18px", border: "none", borderBottom: tab === i ? "2px solid #A32D2D" : "2px solid transparent", background: "transparent", fontSize: 13, fontWeight: tab === i ? 700 : 500, color: tab === i ? "#A32D2D" : "#6b7280", cursor: "pointer", whiteSpace: "nowrap" }}>
            {["📅","🔔","🎯","📊"][i]} {tb}
          </button>
        ))}
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "24px 5%" }}>

        {/* ESTA SEMANA */}
        {tab === 0 && (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
              <div>
                <h2 style={{ fontSize: 20, fontWeight: 900, color: "#26215C", margin: "0 0 4px" }}>{t.weekTitle}</h2>
                <p style={{ fontSize: 13, color: "#9ca3af", margin: 0 }}>{t.weekSub}</p>
              </div>
              <span style={{ fontSize: 12, fontWeight: 600, color: "#16a34a", background: "#f0fdf4", border: "1px solid #bbf7d0", padding: "5px 14px", borderRadius: 20 }}>
                {WEEK_PLAN.filter(p => p.status === "ready").length}/{WEEK_PLAN.length} {lang === "es" ? "listos" : "ready"}
              </span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 8, marginBottom: 20 }}>
              {t.days.map((day, i) => {
                const plan = WEEK_PLAN.find(p => p.day === i);
                return (
                  <div key={i} style={{ background: plan?.status === "ready" ? "#26215C" : "white", border: `1px solid ${plan?.status === "ready" ? "#26215C" : "#e8e8f0"}`, borderRadius: 12, padding: "12px 8px", textAlign: "center", cursor: "pointer" }}>
                    <p style={{ fontSize: 11, fontWeight: 700, color: plan?.status === "ready" ? "rgba(255,255,255,0.6)" : "#9ca3af", margin: "0 0 6px", textTransform: "uppercase" }}>{day}</p>
                    {plan ? (
                      <>
                        <div style={{ fontSize: 16, marginBottom: 4 }}>📱</div>
                        <p style={{ fontSize: 10, color: plan.status === "ready" ? "#FAEEDA" : "#374151", margin: "0 0 4px", fontWeight: 600 }}>{plan.time}</p>
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: plan.status === "ready" ? "#A32D2D" : "#e5e7eb", margin: "0 auto" }} />
                      </>
                    ) : (
                      <div style={{ fontSize: 18, color: "#e5e7eb" }}>—</div>
                    )}
                  </div>
                );
              })}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {WEEK_PLAN.map((plan, i) => (
                <div key={i} style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 14, padding: "14px 18px", display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
                  <div style={{ width: 40, height: 40, background: plan.status === "ready" ? "#26215C" : "#f9fafb", borderRadius: 10, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <p style={{ fontSize: 11, fontWeight: 700, color: plan.status === "ready" ? "#FAEEDA" : "#9ca3af", margin: 0 }}>{t.days[plan.day]}</p>
                  </div>
                  <div style={{ flex: 1, minWidth: 100 }}>
                    <p style={{ fontSize: 14, fontWeight: 700, color: "#26215C", margin: "0 0 2px" }}>{plan.content[lang]}</p>
                    <p style={{ fontSize: 12, color: "#9ca3af", margin: 0 }}>{plan.time} · {plan.type[lang]}</p>
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 600, color: "white", background: platformColors[plan.platform] || "#374151", padding: "3px 10px", borderRadius: 20 }}>{plan.platform}</span>
                  <div style={{ display: "flex", alignItems: "center", gap: 5, background: "#f0fdf4", borderRadius: 8, padding: "4px 10px" }}>
                    <span style={{ fontSize: 12, fontWeight: 800, color: "#16a34a" }}>{plan.score}</span>
                    <span style={{ fontSize: 10, color: "#9ca3af" }}>/100</span>
                  </div>
                  <button style={{ fontSize: 11, padding: "6px 14px", borderRadius: 8, border: "none", background: plan.status === "ready" ? "#A32D2D" : "#e5e7eb", color: plan.status === "ready" ? "white" : "#9ca3af", cursor: "pointer", fontWeight: 700, flexShrink: 0 }}>
                    {plan.status === "ready" ? (lang === "es" ? "Publicar" : "Publish") : (lang === "es" ? "Crear" : "Create")}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ALERTAS */}
        {tab === 1 && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 900, color: "#26215C", margin: "0 0 6px" }}>{t.alertsTitle}</h2>
            <p style={{ fontSize: 13, color: "#9ca3af", margin: "0 0 20px" }}>{t.alertsSub}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {ALERTS.filter((_, i) => !dismissed.includes(i)).map((alert, i) => {
                const uc = urgencyColors[alert.urgency];
                return (
                  <div key={i} style={{ background: uc.bg, border: `1px solid ${uc.border}`, borderRadius: 16, padding: "18px 20px" }}>
                    <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <span style={{ fontSize: 28, flexShrink: 0 }}>{alert.emoji}</span>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                          <p style={{ fontSize: 14, fontWeight: 800, color: "#26215C", margin: 0 }}>{alert.title[lang]}</p>
                          <span style={{ fontSize: 11, fontWeight: 600, color: uc.color, background: "white", padding: "2px 9px", borderRadius: 20, border: `1px solid ${uc.border}`, flexShrink: 0, marginLeft: 10 }}>
                            {t.urgency[alert.urgency]}
                          </span>
                        </div>
                        <p style={{ fontSize: 13, color: "#374151", margin: "0 0 14px", lineHeight: 1.6 }}>{alert.desc[lang]}</p>
                        <div style={{ display: "flex", gap: 8 }}>
                          <button style={{ padding: "7px 16px", borderRadius: 9, border: "none", background: "#26215C", color: "white", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>
                            {alert.action === "create" ? t.createBtn : alert.action === "autopilot" ? t.autopilotBtn : t.viewBtn}
                          </button>
                          <button onClick={() => setDismissed(d => [...d, i])} style={{ padding: "7px 14px", borderRadius: 9, border: "1px solid #e5e7eb", background: "white", color: "#9ca3af", fontSize: 12, cursor: "pointer" }}>
                            {t.dismissBtn}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* FECHAS ESPECIALES */}
        {tab === 2 && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 900, color: "#26215C", margin: "0 0 6px" }}>{t.datesTitle}</h2>
            <p style={{ fontSize: 13, color: "#9ca3af", margin: "0 0 20px" }}>{t.datesSub}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {SPECIAL_DATES.map((date, i) => (
                <div key={i} style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 16, overflow: "hidden" }}>
                  <div style={{ background: "#26215C", padding: "14px 20px", display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ fontSize: 28 }}>{date.emoji}</span>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: 14, fontWeight: 800, color: "white", margin: "0 0 2px" }}>{date.date[lang]}</p>
                      <p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", margin: 0 }}>
                        {lang === "es" ? `Faltan ${date.daysLeft} días` : `${date.daysLeft} days left`}
                      </p>
                    </div>
                    <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 10, padding: "8px 14px", textAlign: "center" }}>
                      <p style={{ fontSize: 18, fontWeight: 900, color: "#FAEEDA", margin: 0 }}>{date.potential}</p>
                      <p style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", margin: 0 }}>{lang === "es" ? "potencial" : "potential"}</p>
                    </div>
                  </div>
                  <div style={{ padding: "14px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 14 }}>
                    <p style={{ fontSize: 13, color: "#374151", margin: 0, lineHeight: 1.6, flex: 1 }}>{date.desc[lang]}</p>
                    <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
                      <button onClick={() => setActivated(a => [...a, i])} style={{ padding: "8px 16px", borderRadius: 9, border: "none", background: activated.includes(i) ? "#16a34a" : "#A32D2D", color: "white", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>
                        {activated.includes(i) ? "✓ " + (lang === "es" ? "Activada" : "Activated") : t.activateBtn}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* RESUMEN MENSUAL */}
        {tab === 3 && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 900, color: "#26215C", margin: "0 0 6px" }}>{t.summaryTitle}</h2>
            <p style={{ fontSize: 13, color: "#9ca3af", margin: "0 0 20px" }}>{t.summarySub}</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 14, marginBottom: 20 }}>
              {MONTHLY_STATS.map((s, i) => (
                <div key={i} style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 14, padding: "20px" }}>
                  <p style={{ fontSize: 36, fontWeight: 900, color: s.color, margin: "0 0 6px", letterSpacing: "-0.03em" }}>{s.value}</p>
                  <p style={{ fontSize: 13, color: "#374151", margin: "0 0 6px", fontWeight: 600 }}>{s.label[lang]}</p>
                  <span style={{ fontSize: 11, color: "#16a34a", fontWeight: 600 }}>{s.trend}</span>
                </div>
              ))}
            </div>
            <div style={{ background: "linear-gradient(135deg,#26215C,#A32D2D)", borderRadius: 16, padding: "22px 26px" }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#FAEEDA", margin: "0 0 10px" }}>{t.monthlyTip}</p>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.85)", margin: 0, lineHeight: 1.7 }}>
                {lang === "es"
                  ? "Tus anuncios de viernes están generando 38% más resultados que el resto de la semana. El próximo mes, enfoca al menos el 40% de tu presupuesto en publicaciones de jueves y viernes por la tarde."
                  : "Your Friday ads are generating 38% better results than the rest of the week. Next month, focus at least 40% of your budget on Thursday and Friday afternoon posts."}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

import { useState } from "react";

const T = {
  es: {
    trialEnded: "Tu mes gratis terminó",
    trialSub: "Gracias por probar Voxa. Para seguir creando campañas y acceder a tus resultados, elige tu plan.",
    yourCampaigns: "Tus campañas están esperando",
    campaignsSub: "Todo tu trabajo sigue guardado. Reactiva tu plan para continuar.",
    lockedBadge: "Acceso limitado",
    seePlans: "Ver mis campañas →",
    whatYouLose: "Sin plan activo no puedes:",
    lose1: "Crear nuevas campañas",
    lose2: "Publicar en Meta, Google o TikTok",
    lose3: "Usar Voxa Score ni Voxa Clone",
    lose4: "Acceder al Modo Político",
    whatYouKeep: "Aún puedes:",
    keep1: "Ver tu dashboard y métricas",
    keep2: "Revisar campañas anteriores",
    keep3: "Copiar tus anuncios generados",
    plans: "Elige tu plan",
    plansSub: "Precio de lanzamiento — se mantiene para siempre si activas hoy.",
    mostPopular: "⚡ Más popular",
    perMonth: "/ mes",
    firstMonth: "Primer mes gratis incluido",
    activateBtn: "Activar ahora →",
    talkSales: "Hablar con ventas →",
    currentPlan: "Tu plan anterior",
    needHelp: "¿Necesitas ayuda para elegir?",
    helpSub: "Escríbenos y te ayudamos a encontrar el plan perfecto para tu negocio.",
    chatBtn: "Chatear con soporte",
    guarantee: "✓ Sin contratos · Cancela cuando quieras · Precio bloqueado para siempre",
    addon: "¿Tienes candidatos o partidos como clientes?",
    addonSub: "Agrega el Modo Político por solo $24/mes adicionales a cualquier plan.",
    addonBtn: "Ver Modo Político →",
    logout: "Cerrar sesión",
    daysAgo: "días desde que venció",
  },
  en: {
    trialEnded: "Your free month ended",
    trialSub: "Thanks for trying Voxa. To keep creating campaigns and access your results, choose your plan.",
    yourCampaigns: "Your campaigns are waiting",
    campaignsSub: "All your work is saved. Reactivate your plan to continue.",
    lockedBadge: "Limited access",
    seePlans: "See my campaigns →",
    whatYouLose: "Without an active plan you can't:",
    lose1: "Create new campaigns",
    lose2: "Publish on Meta, Google or TikTok",
    lose3: "Use Voxa Score or Voxa Clone",
    lose4: "Access Political Mode",
    whatYouKeep: "You can still:",
    keep1: "View your dashboard and metrics",
    keep2: "Review previous campaigns",
    keep3: "Copy your generated ads",
    plans: "Choose your plan",
    plansSub: "Launch price — locked forever if you activate today.",
    mostPopular: "⚡ Most popular",
    perMonth: "/ mo",
    firstMonth: "First month free included",
    activateBtn: "Activate now →",
    talkSales: "Talk to sales →",
    currentPlan: "Your previous plan",
    needHelp: "Need help choosing?",
    helpSub: "Write to us and we'll help you find the perfect plan for your business.",
    chatBtn: "Chat with support",
    guarantee: "✓ No contracts · Cancel anytime · Price locked forever",
    addon: "Do you have candidates or parties as clients?",
    addonSub: "Add Political Mode for just $24/month extra on any plan.",
    addonBtn: "View Political Mode →",
    logout: "Sign out",
    daysAgo: "days since it expired",
  }
};

const PLANS = {
  es: [
    { id: "pro", name: "Pro", price: 19, oldPrice: 39, period: "/ mes", highlight: true, features: ["Campañas ilimitadas", "Multi-canal simultáneo", "Voxa Score completo", "Voxa Clone", "Creativos con IA", "Analytics en tiempo real", "Soporte prioritario"] },
    { id: "agencias", name: "Agencias", price: 59, oldPrice: 119, period: "/ mes", highlight: false, features: ["Todo de Pro", "Hasta 30 clientes", "White-label (tu marca)", "Reportes para clientes", "API access", "Soporte dedicado"] },
  ],
  en: [
    { id: "pro", name: "Pro", price: 19, oldPrice: 39, period: "/ mo", highlight: true, features: ["Unlimited campaigns", "Simultaneous multi-channel", "Full Voxa Score", "Voxa Clone", "AI creatives", "Real-time analytics", "Priority support"] },
    { id: "agencias", name: "Agencies", price: 59, oldPrice: 119, period: "/ mo", highlight: false, features: ["Everything in Pro", "Up to 30 clients", "White-label (your brand)", "Client reports", "API access", "Dedicated support"] },
  ]
};

function LangToggle({ lang, setLang }) {
  return (
    <div style={{ display: "flex", background: "#f3f4f6", borderRadius: 8, padding: 3, gap: 2 }}>
      {["es","en"].map(l => (
        <button key={l} onClick={() => setLang(l)}
          style={{ padding: "5px 12px", borderRadius: 6, border: "none", cursor: "pointer", fontSize: 12, fontWeight: 700, background: lang === l ? "white" : "transparent", color: lang === l ? "#26215C" : "#9ca3af", boxShadow: lang === l ? "0 1px 4px rgba(0,0,0,.08)" : "none", transition: "all .15s" }}>
          {l === "es" ? "🇪🇸 ES" : "🇺🇸 EN"}
        </button>
      ))}
    </div>
  );
}

export default function VoxaBlocked() {
  const [lang, setLang] = useState("es");
  const [selected, setSelected] = useState("pro");
  const [loading, setLoading] = useState(null);
  const t = T[lang];
  const plans = PLANS[lang];

  const handleActivate = async (planId) => {
    setLoading(planId);
    await new Promise(r => setTimeout(r, 1400));
    setLoading(null);
  };

  return (
    <div style={{ fontFamily: "'Inter',system-ui,sans-serif", background: "#f8f8fc", minHeight: "100vh" }}>

      {/* TOP BAR */}
      <div style={{ background: "white", borderBottom: "1px solid #e8e8f0", padding: "0 5%", height: 62, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <div style={{ width: 30, height: 30, background: "linear-gradient(135deg,#26215C,#A32D2D)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "white", fontSize: 14 }}>V</div>
          <span style={{ fontWeight: 900, fontSize: 17, color: "#08080a", letterSpacing: "-0.03em" }}>Voxa</span>
          <div style={{ marginLeft: 8, background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 6, padding: "3px 10px", fontSize: 11, fontWeight: 700, color: "#ef4444" }}>{t.lockedBadge}</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <LangToggle lang={lang} setLang={setLang} />
          <button style={{ fontSize: 13, color: "#9ca3af", background: "none", border: "none", cursor: "pointer", fontWeight: 500 }}>{t.logout}</button>
        </div>
      </div>

      {/* ALERT BANNER */}
      <div style={{ background: "linear-gradient(135deg,#A32D2D,#26215C)", padding: "18px 5%", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 44, height: 44, background: "rgba(255,255,255,0.15)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>⏰</div>
          <div>
            <p style={{ fontSize: 16, fontWeight: 800, color: "white", margin: "0 0 3px", letterSpacing: "-0.02em" }}>{t.trialEnded}</p>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", margin: 0 }}>{t.trialSub}</p>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>3 {t.daysAgo}</span>
          <div style={{ width: 1, height: 20, background: "rgba(255,255,255,0.2)" }} />
          <button style={{ background: "white", color: "#26215C", border: "none", borderRadius: 9, padding: "9px 20px", fontWeight: 800, fontSize: 13, cursor: "pointer" }}>
            {t.seePlans}
          </button>
        </div>
      </div>

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "36px 5%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 24, alignItems: "start" }}>

          {/* LEFT — status panel */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

            {/* Campaigns locked */}
            <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 14, overflow: "hidden" }}>
              <div style={{ background: "#fafafa", padding: "16px 18px", borderBottom: "1px solid #f0f0f5" }}>
                <p style={{ fontSize: 14, fontWeight: 800, color: "#08080a", margin: "0 0 3px" }}>{t.yourCampaigns}</p>
                <p style={{ fontSize: 12, color: "#9ca3af", margin: 0 }}>{t.campaignsSub}</p>
              </div>
              {[
                { name: lang === "es" ? "Ropa deportiva — ventas" : "Sportswear — sales", canal: "Meta", convs: 28 },
                { name: lang === "es" ? "Lanzamiento invierno" : "Winter launch", canal: "Google", convs: 11 },
                { name: lang === "es" ? "Leads yoga" : "Yoga leads", canal: "TikTok", convs: 0 },
              ].map((c, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 18px", borderBottom: "1px solid #f5f5fa", opacity: 0.5, filter: "blur(0.3px)" }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: 13, fontWeight: 600, color: "#08080a", margin: "0 0 2px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{c.name}</p>
                    <span style={{ fontSize: 10, fontWeight: 700, color: "#A32D2D", background: "#FAEEDA", padding: "2px 7px", borderRadius: 4 }}>{c.canal}</span>
                  </div>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#f3f4f6", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13 }}>🔒</div>
                </div>
              ))}
            </div>

            {/* What you lose */}
            <div style={{ background: "#fff5f5", border: "1px solid #fecaca", borderRadius: 14, padding: "18px" }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: "#ef4444", margin: "0 0 12px", textTransform: "uppercase", letterSpacing: "0.06em" }}>{t.whatYouLose}</p>
              {[t.lose1, t.lose2, t.lose3, t.lose4].map((l, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 9 }}>
                  <span style={{ color: "#ef4444", fontSize: 14, flexShrink: 0 }}>✗</span>
                  <span style={{ fontSize: 13, color: "#6b7280" }}>{l}</span>
                </div>
              ))}
            </div>

            {/* What you keep */}
            <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 14, padding: "18px" }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: "#16a34a", margin: "0 0 12px", textTransform: "uppercase", letterSpacing: "0.06em" }}>{t.whatYouKeep}</p>
              {[t.keep1, t.keep2, t.keep3].map((k, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 9 }}>
                  <span style={{ color: "#16a34a", fontSize: 14, flexShrink: 0 }}>✓</span>
                  <span style={{ fontSize: 13, color: "#374151" }}>{k}</span>
                </div>
              ))}
            </div>

            {/* Need help */}
            <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 14, padding: "18px", textAlign: "center" }}>
              <p style={{ fontSize: 14, fontWeight: 700, color: "#08080a", margin: "0 0 6px" }}>{t.needHelp}</p>
              <p style={{ fontSize: 12, color: "#9ca3af", margin: "0 0 14px", lineHeight: 1.5 }}>{t.helpSub}</p>
              <button style={{ width: "100%", padding: "10px", borderRadius: 9, border: "1px solid #e8e8f0", background: "white", fontSize: 13, fontWeight: 700, color: "#374151", cursor: "pointer" }}>
                💬 {t.chatBtn}
              </button>
            </div>
          </div>

          {/* RIGHT — plans */}
          <div>
            <div style={{ marginBottom: 24 }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: "#A32D2D", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 8px" }}>
                {lang === "es" ? "Precios" : "Pricing"}
              </p>
              <h2 style={{ fontSize: 28, fontWeight: 900, color: "#08080a", letterSpacing: "-0.03em", margin: "0 0 8px" }}>{t.plans}</h2>
              <p style={{ fontSize: 14, color: "#6b7280", margin: 0 }}>{t.plansSub}</p>
            </div>

            {/* Plan cards */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
              {plans.map(plan => (
                <div key={plan.id} onClick={() => setSelected(plan.id)}
                  style={{ background: "white", border: selected === plan.id ? "2px solid #A32D2D" : "1.5px solid #e8e8f0", borderRadius: 16, padding: "24px", cursor: "pointer", position: "relative", transition: "border-color .2s, transform .15s", transform: selected === plan.id ? "translateY(-2px)" : "none", boxShadow: selected === plan.id ? "0 8px 24px rgba(91,33,182,.12)" : "none" }}>
                  {plan.highlight && (
                    <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "linear-gradient(135deg,#26215C,#A32D2D)", color: "white", fontSize: 11, fontWeight: 700, padding: "4px 14px", borderRadius: 100, whiteSpace: "nowrap" }}>{t.mostPopular}</div>
                  )}
                  <p style={{ fontSize: 11, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 12px" }}>{plan.name}</p>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 4 }}>
                    <span style={{ fontSize: 42, fontWeight: 900, color: "#08080a", letterSpacing: "-0.04em", lineHeight: 1 }}><sup style={{ fontSize: 18, verticalAlign: "top", marginTop: 8 }}>$</sup>{plan.price}</span>
                    <span style={{ fontSize: 14, color: "#9ca3af", textDecoration: "line-through" }}>${plan.oldPrice}</span>
                  </div>
                  <p style={{ fontSize: 12, color: "#9ca3af", margin: "0 0 6px" }}>{plan.period} USD</p>
                  <p style={{ fontSize: 11, color: "#16a34a", fontWeight: 700, margin: "0 0 18px" }}>✓ {t.firstMonth}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
                    {plan.features.map((f, i) => (
                      <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                        <span style={{ color: "#16a34a", fontSize: 12, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                        <span style={{ fontSize: 13, color: "#374151", lineHeight: 1.4 }}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <button onClick={(e) => { e.stopPropagation(); handleActivate(plan.id); }}
                    style={{ width: "100%", padding: "12px", borderRadius: 10, border: "none", background: plan.highlight ? "linear-gradient(135deg,#26215C,#A32D2D)" : "#FFF5F0", color: plan.highlight ? "white" : "#26215C", fontSize: 13, fontWeight: 800, cursor: "pointer", boxShadow: plan.highlight ? "0 4px 14px rgba(91,33,182,.3)" : "none", transition: "opacity .15s" }}>
                    {loading === plan.id ? (
                      <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 7 }}>
                        <span style={{ width: 14, height: 14, border: `2px solid ${plan.highlight ? "rgba(255,255,255,.4)" : "rgba(91,33,182,.3)"}`, borderTopColor: plan.highlight ? "white" : "#A32D2D", borderRadius: "50%", display: "inline-block", animation: "spin .7s linear infinite" }} />
                        {lang === "es" ? "Procesando..." : "Processing..."}
                      </span>
                    ) : plan.highlight ? t.activateBtn : t.talkSales}
                  </button>
                </div>
              ))}
            </div>

            {/* Guarantee */}
            <p style={{ fontSize: 12, color: "#9ca3af", textAlign: "center", margin: "0 0 20px", fontWeight: 500 }}>{t.guarantee}</p>

            {/* Political addon */}
            <div style={{ background: "linear-gradient(135deg,#1a1730,#26215C)", borderRadius: 14, padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
              <div>
                <p style={{ fontSize: 14, fontWeight: 800, color: "white", margin: "0 0 4px" }}>🏛️ {t.addon}</p>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", margin: 0 }}>{t.addonSub}</p>
              </div>
              <button style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", color: "white", borderRadius: 9, padding: "9px 18px", fontSize: 13, fontWeight: 700, cursor: "pointer", flexShrink: 0, whiteSpace: "nowrap" }}>
                {t.addonBtn}
              </button>
            </div>
          </div>
        </div>
      </div>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}

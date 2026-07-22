import { useState } from "react";

const T = {
  es: {
    title: "¿Quieres cancelar?",
    sub: "Antes de irte, cuéntanos por qué. Podemos ayudarte.",
    step1Title: "¿Cuál es el motivo principal?",
    reasons: [
      { id: "precio", icon: "💰", label: "El precio es muy alto para mí", offer: "descuento" },
      { id: "uso", icon: "😕", label: "No entiendo bien cómo usarlo", offer: "ayuda" },
      { id: "resultados", icon: "📊", label: "No vi los resultados que esperaba", offer: "revision" },
      { id: "tiempo", icon: "⏰", label: "No tengo tiempo para usarlo ahora", offer: "pausa" },
      { id: "funciones", icon: "🔧", label: "Le falta una función que necesito", offer: "feedback" },
      { id: "otro", icon: "💬", label: "Otro motivo", offer: "otro" },
    ],
    step2Title: "Antes de irte, mira lo que pierdes",
    step3Title: "Tenemos algo especial para ti",
    confirmTitle: "Cuenta cancelada",
    confirmSub: "Lamentamos que te vayas. Tu acceso continuará hasta el fin del período pagado.",
    keepBtn: "← Quedarme en Voxa",
    cancelBtn: "Cancelar de todas formas",
    confirmingBtn: "Procesando...",
    offers: {
      descuento: {
        icon: "🎁",
        title: "¿Precio alto? Te damos 2 meses al 50% de descuento",
        desc: "Entendemos que cada lempira cuenta. Por eso te ofrecemos los próximos 2 meses a solo $9.50/mes — sin compromisos adicionales.",
        action: "Aceptar 50% de descuento por 2 meses",
        secondary: "No, prefiero cancelar",
        color: "#16a34a",
        bg: "#f0fdf4",
        border: "#bbf7d0"
      },
      ayuda: {
        icon: "🤝",
        title: "¿Confundido? Te asignamos un mentor personal gratis",
        desc: "Un miembro de nuestro equipo te llama esta semana para configurar Voxa exactamente para tu negocio. Sin costo, sin compromisos.",
        action: "Sí, quiero mi sesión gratuita",
        secondary: "No, prefiero cancelar",
        color: "#0891b2",
        bg: "#f0f9ff",
        border: "#bae6fd"
      },
      revision: {
        icon: "📊",
        title: "¿Sin resultados? Revisamos tus campañas gratis",
        desc: "Nuestro equipo analiza tus campañas y te dice exactamente qué mejorar para ver resultados reales esta semana. Garantizado.",
        action: "Sí, revisen mis campañas",
        secondary: "No, prefiero cancelar",
        color: "#26215C",
        bg: "#f5f3ff",
        border: "#ddd6fe"
      },
      pausa: {
        icon: "⏸️",
        title: "¿Sin tiempo? Pausa tu cuenta por 1 mes sin costo",
        desc: "No canceles — pausa. Tu cuenta, campañas y Business Brain quedan guardados. Cuando regreses, todo sigue donde lo dejaste.",
        action: "Pausar mi cuenta 1 mes",
        secondary: "No, prefiero cancelar",
        color: "#f59e0b",
        bg: "#fefce8",
        border: "#fde68a"
      },
      feedback: {
        icon: "🔧",
        title: "¿Falta una función? Queremos escucharte",
        desc: "Cuéntanos qué necesitas y lo ponemos en nuestra hoja de ruta. Además, si es urgente, podemos buscar una solución alternativa dentro de Voxa.",
        action: "Compartir qué me falta",
        secondary: "No, prefiero cancelar",
        color: "#A32D2D",
        bg: "#fff5f5",
        border: "#fecaca"
      },
      otro: {
        icon: "💬",
        title: "¿Algo más? Podemos ayudarte",
        desc: "Cuéntanos tu situación y buscamos juntos la mejor solución. Nuestro equipo está disponible para ayudarte.",
        action: "Hablar con el equipo",
        secondary: "No, prefiero cancelar",
        color: "#26215C",
        bg: "#f5f3ff",
        border: "#ddd6fe"
      }
    },
    losses: [
      { icon: "🧠", label: "Business Brain", desc: "Todo lo que Voxa aprendió de tu negocio" },
      { icon: "📊", label: "Historial de campañas", desc: "Tus mejores anuncios y sus resultados" },
      { icon: "🎨", label: "Brand Kit guardado", desc: "Logo, colores y tipografía configurados" },
      { icon: "🔒", label: "Precio de lanzamiento", desc: "Pierdes el $19/mes para siempre" },
    ],
    commentPh: "Cuéntanos más (opcional)...",
    thanksTitle: "Gracias por tu tiempo",
    thanksSub: "Usaremos tu comentario para mejorar Voxa.",
  },
  en: {
    title: "Do you want to cancel?",
    sub: "Before you go, tell us why. We can help.",
    step1Title: "What's the main reason?",
    reasons: [
      { id: "precio", icon: "💰", label: "The price is too high for me", offer: "descuento" },
      { id: "uso", icon: "😕", label: "I don't understand how to use it well", offer: "ayuda" },
      { id: "resultados", icon: "📊", label: "I didn't see the results I expected", offer: "revision" },
      { id: "tiempo", icon: "⏰", label: "I don't have time to use it right now", offer: "pausa" },
      { id: "funciones", icon: "🔧", label: "It's missing a feature I need", offer: "feedback" },
      { id: "otro", icon: "💬", label: "Another reason", offer: "otro" },
    ],
    step2Title: "Before you go, see what you'll lose",
    step3Title: "We have something special for you",
    confirmTitle: "Account cancelled",
    confirmSub: "We're sorry to see you go. Your access will continue until the end of the paid period.",
    keepBtn: "← Stay with Voxa",
    cancelBtn: "Cancel anyway",
    confirmingBtn: "Processing...",
    offers: {
      descuento: { icon: "🎁", title: "Price too high? Get 2 months at 50% off", desc: "We understand every dollar counts. So we're offering the next 2 months at just $9.50/month — no additional commitments.", action: "Accept 50% off for 2 months", secondary: "No, I prefer to cancel", color: "#16a34a", bg: "#f0fdf4", border: "#bbf7d0" },
      ayuda: { icon: "🤝", title: "Confused? We'll assign you a free personal mentor", desc: "A team member will call you this week to set up Voxa specifically for your business. No cost, no commitments.", action: "Yes, I want my free session", secondary: "No, I prefer to cancel", color: "#0891b2", bg: "#f0f9ff", border: "#bae6fd" },
      revision: { icon: "📊", title: "No results? We'll review your campaigns for free", desc: "Our team analyzes your campaigns and tells you exactly what to improve to see real results this week. Guaranteed.", action: "Yes, review my campaigns", secondary: "No, I prefer to cancel", color: "#26215C", bg: "#f5f3ff", border: "#ddd6fe" },
      pausa: { icon: "⏸️", title: "No time? Pause your account for 1 month free", desc: "Don't cancel — pause. Your account, campaigns and Business Brain stay saved. When you return, everything picks up where you left off.", action: "Pause my account 1 month", secondary: "No, I prefer to cancel", color: "#f59e0b", bg: "#fefce8", border: "#fde68a" },
      feedback: { icon: "🔧", title: "Missing a feature? We want to hear from you", desc: "Tell us what you need and we'll add it to our roadmap. Plus, if it's urgent, we can look for an alternative solution within Voxa.", action: "Share what I'm missing", secondary: "No, I prefer to cancel", color: "#A32D2D", bg: "#fff5f5", border: "#fecaca" },
      otro: { icon: "💬", title: "Something else? We can help", desc: "Tell us your situation and we'll find the best solution together. Our team is available to help you.", action: "Talk to the team", secondary: "No, I prefer to cancel", color: "#26215C", bg: "#f5f3ff", border: "#ddd6fe" },
    },
    losses: [
      { icon: "🧠", label: "Business Brain", desc: "Everything Voxa learned about your business" },
      { icon: "📊", label: "Campaign history", desc: "Your best ads and their results" },
      { icon: "🎨", label: "Saved Brand Kit", desc: "Logo, colors and typography configured" },
      { icon: "🔒", label: "Launch price", desc: "You lose $19/month forever" },
    ],
    commentPh: "Tell us more (optional)...",
    thanksTitle: "Thank you for your time",
    thanksSub: "We'll use your feedback to improve Voxa.",
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

export default function VoxaCancelacion() {
  const [lang, setLang] = useState("es");
  const [step, setStep] = useState(1);
  const [reason, setReason] = useState(null);
  const [comment, setComment] = useState("");
  const [accepting, setAccepting] = useState(false);
  const [cancelling, setCancelling] = useState(false);
  const [done, setDone] = useState(false);
  const t = T[lang];

  const selectedReason = t.reasons.find(r => r.id === reason);
  const offer = selectedReason ? t.offers[selectedReason.offer] : null;

  const handleAcceptOffer = async () => {
    setAccepting(true);
    await new Promise(r => setTimeout(r, 1500));
    setDone("saved");
  };

  const handleCancel = async () => {
    setCancelling(true);
    await new Promise(r => setTimeout(r, 1800));
    setDone("cancelled");
  };

  if (done === "saved") return (
    <div style={{ fontFamily: "'Inter',system-ui,sans-serif", minHeight: "100vh", background: "#f5f3ef", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px 5%" }}>
      <div style={{ maxWidth: 480, width: "100%", textAlign: "center" }}>
        <div style={{ fontSize: 64, marginBottom: 20 }}>🎉</div>
        <h2 style={{ fontSize: 24, fontWeight: 900, color: "#26215C", margin: "0 0 10px" }}>{lang === "es" ? "¡Nos alegra que te quedes!" : "We're glad you're staying!"}</h2>
        <p style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.6, margin: "0 0 28px" }}>{lang === "es" ? "Tu oferta especial ha sido aplicada. Cualquier pregunta, estamos aquí." : "Your special offer has been applied. Any questions, we're here."}</p>
        <button onClick={() => { setDone(false); setStep(1); setReason(null); }}
          style={{ padding: "13px 28px", background: "#26215C", color: "white", border: "none", borderRadius: 11, fontSize: 14, fontWeight: 800, cursor: "pointer" }}>
          {lang === "es" ? "← Volver a Voxa" : "← Back to Voxa"}
        </button>
      </div>
    </div>
  );

  if (done === "cancelled") return (
    <div style={{ fontFamily: "'Inter',system-ui,sans-serif", minHeight: "100vh", background: "#f5f3ef", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px 5%" }}>
      <div style={{ maxWidth: 480, width: "100%", textAlign: "center" }}>
        <div style={{ fontSize: 56, marginBottom: 20 }}>👋</div>
        <h2 style={{ fontSize: 22, fontWeight: 900, color: "#26215C", margin: "0 0 8px" }}>{t.confirmTitle}</h2>
        <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.6, margin: "0 0 20px" }}>{t.confirmSub}</p>
        <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 14, padding: "18px 20px", textAlign: "left", marginBottom: 20 }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: "#26215C", margin: "0 0 4px" }}>{t.thanksTitle}</p>
          <p style={{ fontSize: 13, color: "#6b7280", margin: 0 }}>{t.thanksSub}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ fontFamily: "'Inter',system-ui,sans-serif", background: "#f5f3ef", minHeight: "100vh" }}>
      <div style={{ background: "#26215C", padding: "0 5%", height: 62, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <div style={{ width: 30, height: 30, background: "#A32D2D", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "white", fontSize: 14 }}>V</div>
          <span style={{ fontWeight: 900, fontSize: 17, color: "white" }}>Voxa</span>
        </div>
        <LangToggle lang={lang} setLang={setLang} />
      </div>

      <div style={{ maxWidth: 560, margin: "0 auto", padding: "40px 5%" }}>

        {/* STEP INDICATOR */}
        <div style={{ display: "flex", gap: 6, marginBottom: 28 }}>
          {[1,2,3].map(s => (
            <div key={s} style={{ height: 4, flex: 1, borderRadius: 4, background: s <= step ? "#A32D2D" : "#e5e7eb", transition: "background .3s" }} />
          ))}
        </div>

        {/* STEP 1 — MOTIVO */}
        {step === 1 && (
          <div>
            <div style={{ textAlign: "center", marginBottom: 28 }}>
              <div style={{ fontSize: 48, marginBottom: 12 }}>😔</div>
              <h2 style={{ fontSize: 22, fontWeight: 900, color: "#26215C", margin: "0 0 6px" }}>{t.title}</h2>
              <p style={{ fontSize: 14, color: "#6b7280", margin: 0 }}>{t.sub}</p>
            </div>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#374151", textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 12px" }}>{t.step1Title}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {t.reasons.map(r => (
                <button key={r.id} onClick={() => setReason(r.id)}
                  style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", borderRadius: 12, border: reason === r.id ? "2px solid #26215C" : "1.5px solid #e5e7eb", background: reason === r.id ? "#f5f3ff" : "white", cursor: "pointer", textAlign: "left", transition: "all .15s" }}>
                  <span style={{ fontSize: 22 }}>{r.icon}</span>
                  <span style={{ fontSize: 14, fontWeight: reason === r.id ? 700 : 400, color: reason === r.id ? "#26215C" : "#374151", flex: 1 }}>{r.label}</span>
                  {reason === r.id && <span style={{ color: "#26215C", fontWeight: 800 }}>✓</span>}
                </button>
              ))}
            </div>
            {reason && (
              <div style={{ marginTop: 16 }}>
                <textarea value={comment} onChange={e => setComment(e.target.value)} placeholder={t.commentPh}
                  style={{ width: "100%", padding: "12px 14px", fontSize: 14, borderRadius: 10, border: "1.5px solid #e5e7eb", fontFamily: "inherit", resize: "none", minHeight: 70, outline: "none", boxSizing: "border-box" }} />
              </div>
            )}
            <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
              <button onClick={() => {}} style={{ flex: 1, padding: "12px", borderRadius: 10, border: "1px solid #e8e8f0", background: "white", color: "#374151", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
                {t.keepBtn}
              </button>
              <button onClick={() => reason && setStep(2)} disabled={!reason}
                style={{ flex: 1, padding: "12px", borderRadius: 10, border: "none", background: reason ? "#A32D2D" : "#e5e7eb", color: "white", fontSize: 13, fontWeight: 700, cursor: reason ? "pointer" : "not-allowed" }}>
                {lang === "es" ? "Continuar →" : "Continue →"}
              </button>
            </div>
          </div>
        )}

        {/* STEP 2 — LO QUE PERDERÍAS */}
        {step === 2 && (
          <div>
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <div style={{ fontSize: 44, marginBottom: 10 }}>⚠️</div>
              <h2 style={{ fontSize: 20, fontWeight: 900, color: "#26215C", margin: "0 0 6px" }}>{t.step2Title}</h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
              {t.losses.map((l, i) => (
                <div key={i} style={{ display: "flex", gap: 12, alignItems: "center", background: "white", border: "1px solid #fecaca", borderRadius: 12, padding: "14px 16px" }}>
                  <span style={{ fontSize: 24 }}>{l.icon}</span>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 700, color: "#26215C", margin: "0 0 2px" }}>{l.label}</p>
                    <p style={{ fontSize: 12, color: "#9ca3af", margin: 0 }}>{l.desc}</p>
                  </div>
                  <span style={{ marginLeft: "auto", fontSize: 18, color: "#ef4444" }}>✗</span>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => setStep(1)} style={{ flex: 1, padding: "12px", borderRadius: 10, border: "1px solid #e8e8f0", background: "white", color: "#374151", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
                ← {lang === "es" ? "Atrás" : "Back"}
              </button>
              <button onClick={() => setStep(3)}
                style={{ flex: 2, padding: "12px", borderRadius: 10, border: "none", background: "#26215C", color: "white", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
                {lang === "es" ? "Ver oferta especial →" : "See special offer →"}
              </button>
            </div>
          </div>
        )}

        {/* STEP 3 — OFERTA */}
        {step === 3 && offer && (
          <div>
            <div style={{ textAlign: "center", marginBottom: 20 }}>
              <div style={{ fontSize: 48, marginBottom: 10 }}>{offer.icon}</div>
              <h2 style={{ fontSize: 20, fontWeight: 900, color: "#26215C", margin: "0 0 6px" }}>{t.step3Title}</h2>
            </div>
            <div style={{ background: offer.bg, border: `2px solid ${offer.border}`, borderRadius: 16, padding: "24px", marginBottom: 20 }}>
              <p style={{ fontSize: 17, fontWeight: 900, color: "#26215C", margin: "0 0 10px", lineHeight: 1.3 }}>{offer.title}</p>
              <p style={{ fontSize: 14, color: "#374151", margin: "0 0 20px", lineHeight: 1.65 }}>{offer.desc}</p>
              <button onClick={handleAcceptOffer} disabled={accepting}
                style={{ width: "100%", padding: "14px", borderRadius: 11, border: "none", background: offer.color, color: "white", fontSize: 14, fontWeight: 800, cursor: accepting ? "not-allowed" : "pointer" }}>
                {accepting ? (
                  <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                    <span style={{ width: 16, height: 16, border: "2px solid rgba(255,255,255,.4)", borderTopColor: "white", borderRadius: "50%", display: "inline-block", animation: "spin .7s linear infinite" }} />
                    {lang === "es" ? "Aplicando..." : "Applying..."}
                  </span>
                ) : offer.action}
              </button>
            </div>
            <button onClick={handleCancel} disabled={cancelling}
              style={{ width: "100%", padding: "12px", borderRadius: 10, border: "1px solid #e8e8f0", background: "white", color: cancelling ? "#9ca3af" : "#ef4444", fontSize: 13, fontWeight: 600, cursor: cancelling ? "not-allowed" : "pointer" }}>
              {cancelling ? t.confirmingBtn : offer.secondary}
            </button>
          </div>
        )}
      </div>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}

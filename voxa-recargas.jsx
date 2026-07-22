import { useState } from "react";

const T = {
  es: {
    title: "Voxa Pauta",
    sub: "Deposita tu presupuesto publicitario y nosotros lo manejamos todo por ti",
    howTitle: "¿Cómo funciona?",
    howSteps: [
      { icon: "💳", title: "Depositas tu saldo", desc: "Elige cuánto quieres invertir en publicidad. Puedes pagar con tarjeta, PayPal o transferencia." },
      { icon: "⚡", title: "Voxa gestiona tu pauta", desc: "Nuestro equipo crea, publica y optimiza tus anuncios en Meta, Google o TikTok por ti." },
      { icon: "📊", title: "Tú ves los resultados", desc: "Recibes un reporte semanal por WhatsApp con cuántas personas vieron tu anuncio y cuántos clientes llegaron." },
    ],
    commission: "20% de comisión de gestión · El resto va 100% a tu pauta",
    balanceTitle: "Tu saldo disponible",
    balanceDesc: "Para publicidad en Meta, Google y TikTok",
    rechargeTitle: "Recargar saldo",
    rechargeSub: "Elige el monto que quieres depositar",
    presets: [
      { amount: 10, reach: "800–1,500", label: "Para empezar", color: "#FFF8F0", border: "#FFD4B8", text: "#26215C" },
      { amount: 20, reach: "1,800–3,200", label: "Más popular", color: "#fff5f5", border: "#A32D2D", text: "#A32D2D", featured: true },
      { amount: 50, reach: "5,000–9,000", label: "Buena tracción", color: "#f0fdf4", border: "#bbf7d0", text: "#16a34a" },
      { amount: 100, reach: "10,000–18,000", label: "Escala rápida", color: "#f0f9ff", border: "#bae6fd", text: "#0369a1" },
    ],
    customAmount: "O ingresa un monto personalizado",
    customPh: "Ej: 35",
    reachLabel: "personas aproximadas que verán tu anuncio",
    breakdown: "Desglose de tu recarga",
    yourDeposit: "Tu depósito",
    managementFee: "Comisión de gestión Voxa (20%)",
    goesToAds: "Va directo a tu pauta publicitaria",
    channelTitle: "¿En qué red quieres anunciarte?",
    channels: [
      { id: "meta", label: "Facebook e Instagram", icon: "📘", desc: "Llega a mujeres y hombres en tu zona" },
      { id: "google", label: "Google Ads", icon: "🔍", desc: "Aparece cuando buscan lo que ofreces" },
      { id: "tiktok", label: "TikTok Ads", icon: "🎵", desc: "Ideal para llegar a menores de 35 años" },
      { id: "todos", label: "Distribuir en todos", icon: "🌐", desc: "Voxa decide la mejor distribución" },
    ],
    payTitle: "Método de pago",
    payMethods: [
      { id: "card", label: "Tarjeta de crédito/débito", icon: "💳" },
      { id: "paypal", label: "PayPal", icon: "🅿️" },
      { id: "transfer", label: "Transferencia bancaria", icon: "🏦" },
    ],
    payBtn: "💳 Recargar ahora",
    processing: "Procesando pago...",
    successTitle: "¡Recarga exitosa!",
    successSub: "Tu saldo está listo. Nuestro equipo empieza a trabajar en tu pauta hoy.",
    successBalance: "Nuevo saldo disponible",
    successAds: "Va a tu pauta",
    successComm: "Comisión Voxa",
    nextSteps: "¿Qué sigue?",
    nextStepsList: [
      "Nuestro equipo revisa tu negocio en las próximas 2 horas",
      "Configuramos tu campaña con los anuncios que Voxa generó",
      "Tu anuncio empieza a aparecer antes de que termine el día",
      "Recibes tu primer reporte en 48 horas por WhatsApp",
    ],
    historyTitle: "Historial de recargas",
    historyEmpty: "Aún no tienes recargas. ¡Haz tu primera recarga hoy!",
    newRecharge: "Nueva recarga",
    statusActive: "Activo",
    statusCompleted: "Completado",
    whyTitle: "¿Por qué usar Voxa Pauta?",
    whyItems: [
      { icon: "🚫", title: "Sin complicaciones", desc: "No necesitas tarjeta de crédito para Meta ni entrar al Ads Manager" },
      { icon: "👨‍💼", title: "Gestionado por expertos", desc: "Nuestro equipo optimiza tu pauta para que rinda más" },
      { icon: "📱", title: "Reportes por WhatsApp", desc: "Te avisamos los resultados directamente en tu celular" },
      { icon: "💰", title: "Empieza desde $10", desc: "No necesitas grandes presupuestos para ver resultados" },
    ],
    guarantee: "Si no estás satisfecho con los resultados de tu primera recarga, te devolvemos el saldo sin preguntas.",
    minAmount: "Mínimo $10",
    currency: "$",
    usd: "USD",
  },
  en: {
    title: "Voxa Pauta",
    sub: "Deposit your advertising budget and we'll manage everything for you",
    howTitle: "How does it work?",
    howSteps: [
      { icon: "💳", title: "You deposit your balance", desc: "Choose how much you want to invest in advertising. Pay with card, PayPal or bank transfer." },
      { icon: "⚡", title: "Voxa manages your ads", desc: "Our team creates, publishes and optimizes your ads on Meta, Google or TikTok for you." },
      { icon: "📊", title: "You see the results", desc: "You receive a weekly report on WhatsApp with how many people saw your ad and how many customers came." },
    ],
    commission: "20% management commission · The rest goes 100% to your ads",
    balanceTitle: "Your available balance",
    balanceDesc: "For advertising on Meta, Google and TikTok",
    rechargeTitle: "Add funds",
    rechargeSub: "Choose the amount you want to deposit",
    presets: [
      { amount: 10, reach: "800–1,500", label: "Getting started", color: "#FFF8F0", border: "#FFD4B8", text: "#26215C" },
      { amount: 20, reach: "1,800–3,200", label: "Most popular", color: "#fff5f5", border: "#A32D2D", text: "#A32D2D", featured: true },
      { amount: 50, reach: "5,000–9,000", label: "Good traction", color: "#f0fdf4", border: "#bbf7d0", text: "#16a34a" },
      { amount: 100, reach: "10,000–18,000", label: "Scale fast", color: "#f0f9ff", border: "#bae6fd", text: "#0369a1" },
    ],
    customAmount: "Or enter a custom amount",
    customPh: "E.g.: 35",
    reachLabel: "approximate people who will see your ad",
    breakdown: "Your recharge breakdown",
    yourDeposit: "Your deposit",
    managementFee: "Voxa management fee (20%)",
    goesToAds: "Goes directly to your ads",
    channelTitle: "Which network do you want to advertise on?",
    channels: [
      { id: "meta", label: "Facebook & Instagram", icon: "📘", desc: "Reach women and men in your area" },
      { id: "google", label: "Google Ads", icon: "🔍", desc: "Appear when they search for what you offer" },
      { id: "tiktok", label: "TikTok Ads", icon: "🎵", desc: "Ideal for reaching under 35s" },
      { id: "todos", label: "Distribute across all", icon: "🌐", desc: "Voxa decides the best distribution" },
    ],
    payTitle: "Payment method",
    payMethods: [
      { id: "card", label: "Credit/debit card", icon: "💳" },
      { id: "paypal", label: "PayPal", icon: "🅿️" },
      { id: "transfer", label: "Bank transfer", icon: "🏦" },
    ],
    payBtn: "💳 Add funds now",
    processing: "Processing payment...",
    successTitle: "Funds added successfully!",
    successSub: "Your balance is ready. Our team starts working on your ads today.",
    successBalance: "New available balance",
    successAds: "Goes to your ads",
    successComm: "Voxa commission",
    nextSteps: "What's next?",
    nextStepsList: [
      "Our team reviews your business in the next 2 hours",
      "We set up your campaign with the ads Voxa generated",
      "Your ad starts showing before the end of the day",
      "You receive your first report in 48 hours via WhatsApp",
    ],
    historyTitle: "Recharge history",
    historyEmpty: "You have no recharges yet. Make your first one today!",
    newRecharge: "New recharge",
    statusActive: "Active",
    statusCompleted: "Completed",
    whyTitle: "Why use Voxa Pauta?",
    whyItems: [
      { icon: "🚫", title: "No hassle", desc: "No need for a Meta credit card or Ads Manager" },
      { icon: "👨‍💼", title: "Managed by experts", desc: "Our team optimizes your ads for better performance" },
      { icon: "📱", title: "WhatsApp reports", desc: "We send you results directly to your phone" },
      { icon: "💰", title: "Start from $10", desc: "You don't need big budgets to see results" },
    ],
    guarantee: "If you're not satisfied with your first recharge results, we'll refund your balance no questions asked.",
    minAmount: "Minimum $10",
    currency: "$",
    usd: "USD",
  }
};

const HISTORY = [
  { date: "15 Jun 2026", amount: 20, ads: 16, comm: 4, channel: "Meta", status: "completed", reach: "2,400" },
  { date: "1 Jun 2026", amount: 10, ads: 8, comm: 2, channel: "Meta", status: "completed", reach: "1,100" },
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

export default function VoxaRecargas() {
  const [lang, setLang] = useState("es");
  const [amount, setAmount] = useState(20);
  const [customAmt, setCustomAmt] = useState("");
  const [channel, setChannel] = useState("meta");
  const [payMethod, setPayMethod] = useState("card");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [balance, setBalance] = useState(0);
  const [history, setHistory] = useState(HISTORY);
  const [view, setView] = useState("recharge"); // recharge | history | why
  const t = T[lang];

  const finalAmount = customAmt ? parseFloat(customAmt) || 0 : amount;
  const commission = finalAmount * 0.20;
  const goesToAds = finalAmount * 0.80;
  const reach = Math.round(finalAmount * 62);

  const handlePay = async () => {
    if (finalAmount < 10) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 2000));
    setLoading(false);
    setSuccess(true);
    setBalance(prev => prev + goesToAds);
    setHistory(prev => [{
      date: new Date().toLocaleDateString(lang === "es" ? "es-HN" : "en-US", { day: "numeric", month: "short", year: "numeric" }),
      amount: finalAmount, ads: goesToAds, comm: commission,
      channel: t.channels.find(c => c.id === channel)?.label || channel,
      status: "active", reach: reach.toLocaleString()
    }, ...prev]);
  };

  if (success) return (
    <div style={{ fontFamily: "'Inter',system-ui,sans-serif", background: "#f5f3ef", minHeight: "100vh" }}>
      <div style={{ background: "#26215C", padding: "0 5%", height: 62, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <div style={{ width: 30, height: 30, background: "#A32D2D", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "white", fontSize: 14 }}>V</div>
          <span style={{ fontWeight: 900, fontSize: 17, color: "white" }}>Voxa</span>
        </div>
        <LangToggle lang={lang} setLang={setLang} />
      </div>
      <div style={{ maxWidth: 540, margin: "0 auto", padding: "40px 5%" }}>
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{ fontSize: 64, marginBottom: 16 }}>🎉</div>
          <h2 style={{ fontSize: 26, fontWeight: 900, color: "#26215C", margin: "0 0 8px" }}>{t.successTitle}</h2>
          <p style={{ fontSize: 14, color: "#6b7280", margin: 0, lineHeight: 1.6 }}>{t.successSub}</p>
        </div>
        <div style={{ background: "linear-gradient(135deg,#26215C,#A32D2D)", borderRadius: 16, padding: "24px", marginBottom: 20 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
            <div>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.successBalance}</p>
              <p style={{ fontSize: 32, fontWeight: 900, color: "white", margin: 0 }}>${balance.toFixed(0)}</p>
            </div>
            <div style={{ textAlign: "right" }}>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.successAds}</p>
              <p style={{ fontSize: 24, fontWeight: 700, color: "#FAEEDA", margin: 0 }}>${goesToAds.toFixed(0)}</p>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "10px 14px", display: "flex", justifyContent: "space-between" }}>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.6)" }}>{t.successComm}</span>
            <span style={{ fontSize: 12, fontWeight: 600, color: "white" }}>-${commission.toFixed(0)}</span>
          </div>
        </div>
        <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 16, padding: "20px", marginBottom: 20 }}>
          <p style={{ fontSize: 14, fontWeight: 800, color: "#26215C", margin: "0 0 14px" }}>✅ {t.nextSteps}</p>
          {t.nextStepsList.map((step, i) => (
            <div key={i} style={{ display: "flex", gap: 12, marginBottom: 12 }}>
              <div style={{ width: 24, height: 24, background: "#FAEEDA", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "#A32D2D", flexShrink: 0 }}>{i + 1}</div>
              <p style={{ fontSize: 13, color: "#374151", margin: 0, lineHeight: 1.5 }}>{step}</p>
            </div>
          ))}
        </div>
        <button onClick={() => { setSuccess(false); setCustomAmt(""); }}
          style={{ width: "100%", padding: "13px", borderRadius: 12, border: "none", background: "#26215C", color: "white", fontSize: 14, fontWeight: 800, cursor: "pointer" }}>
          {t.newRecharge}
        </button>
      </div>
    </div>
  );

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

      {/* BALANCE HERO */}
      <div style={{ background: "linear-gradient(135deg,#26215C,#1a1730)", padding: "24px 5% 28px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 14 }}>
            <div>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: "0.07em" }}>{t.balanceTitle}</p>
              <p style={{ fontSize: 44, fontWeight: 900, color: "white", margin: "0 0 4px", letterSpacing: "-0.04em", lineHeight: 1 }}>${balance.toFixed(2)}</p>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", margin: 0 }}>{t.balanceDesc}</p>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              {["recharge","history","why"].map((v, i) => (
                <button key={v} onClick={() => setView(v)}
                  style={{ padding: "8px 14px", borderRadius: 9, border: view === v ? "none" : "1px solid rgba(255,255,255,0.15)", background: view === v ? "#A32D2D" : "transparent", color: "white", fontSize: 12, fontWeight: view === v ? 700 : 400, cursor: "pointer" }}>
                  {[lang === "es" ? "Recargar" : "Add funds", lang === "es" ? "Historial" : "History", lang === "es" ? "¿Por qué?" : "Why?"][i]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 700, margin: "0 auto", padding: "24px 5%" }}>

        {/* VIEW: RECHARGE */}
        {view === "recharge" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, alignItems: "start" }}>

            {/* LEFT */}
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>

              {/* HOW IT WORKS */}
              <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 16, padding: "18px 20px" }}>
                <p style={{ fontSize: 13, fontWeight: 800, color: "#26215C", margin: "0 0 14px" }}>✨ {t.howTitle}</p>
                {t.howSteps.map((s, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, marginBottom: i < 2 ? 14 : 0 }}>
                    <span style={{ fontSize: 22, flexShrink: 0 }}>{s.icon}</span>
                    <div>
                      <p style={{ fontSize: 13, fontWeight: 700, color: "#26215C", margin: "0 0 2px" }}>{s.title}</p>
                      <p style={{ fontSize: 12, color: "#6b7280", margin: 0, lineHeight: 1.5 }}>{s.desc}</p>
                    </div>
                  </div>
                ))}
                <div style={{ marginTop: 14, background: "#FAEEDA", borderRadius: 8, padding: "8px 12px" }}>
                  <p style={{ fontSize: 11, color: "#854d0e", margin: 0, fontWeight: 600 }}>💡 {t.commission}</p>
                </div>
              </div>

              {/* CHANNEL */}
              <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 16, padding: "18px 20px" }}>
                <p style={{ fontSize: 13, fontWeight: 800, color: "#26215C", margin: "0 0 12px" }}>{t.channelTitle}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {t.channels.map(c => (
                    <button key={c.id} onClick={() => setChannel(c.id)}
                      style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", borderRadius: 10, border: channel === c.id ? "2px solid #26215C" : "1.5px solid #e5e7eb", background: channel === c.id ? "#FFF8F0" : "white", cursor: "pointer", textAlign: "left" }}>
                      <span style={{ fontSize: 18 }}>{c.icon}</span>
                      <div style={{ flex: 1 }}>
                        <p style={{ fontSize: 13, fontWeight: 700, color: "#26215C", margin: "0 0 1px" }}>{c.label}</p>
                        <p style={{ fontSize: 11, color: "#9ca3af", margin: 0 }}>{c.desc}</p>
                      </div>
                      {channel === c.id && <span style={{ color: "#26215C", fontWeight: 800 }}>✓</span>}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

              {/* AMOUNT PRESETS */}
              <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 16, padding: "18px 20px" }}>
                <p style={{ fontSize: 13, fontWeight: 800, color: "#26215C", margin: "0 0 4px" }}>{t.rechargeTitle}</p>
                <p style={{ fontSize: 12, color: "#9ca3af", margin: "0 0 14px" }}>{t.rechargeSub}</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 14 }}>
                  {t.presets.map(p => (
                    <button key={p.amount} onClick={() => { setAmount(p.amount); setCustomAmt(""); }}
                      style={{ padding: "14px 10px", borderRadius: 12, border: `2px solid ${!customAmt && amount === p.amount ? "#26215C" : p.border}`, background: !customAmt && amount === p.amount ? "#FFF8F0" : p.color, cursor: "pointer", position: "relative" }}>
                      {p.featured && <span style={{ position: "absolute", top: -9, right: 8, background: "#A32D2D", color: "white", fontSize: 9, fontWeight: 700, padding: "2px 8px", borderRadius: 20 }}>{p.label}</span>}
                      <p style={{ fontSize: 22, fontWeight: 900, color: !customAmt && amount === p.amount ? "#26215C" : p.text, margin: "0 0 2px" }}>${p.amount}</p>
                      <p style={{ fontSize: 10, color: "#9ca3af", margin: "0 0 1px" }}>~{p.reach}</p>
                      <p style={{ fontSize: 9, color: "#9ca3af", margin: 0 }}>{lang === "es" ? "personas" : "people"}</p>
                    </button>
                  ))}
                </div>
                <p style={{ fontSize: 11, color: "#9ca3af", margin: "0 0 6px" }}>{t.customAmount}</p>
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", fontWeight: 700, color: "#9ca3af" }}>$</span>
                  <input type="number" value={customAmt} onChange={e => setCustomAmt(e.target.value)} placeholder={t.customPh} min="10"
                    style={{ width: "100%", padding: "10px 12px 10px 24px", borderRadius: 10, border: "1.5px solid #e5e7eb", fontSize: 15, fontWeight: 700, boxSizing: "border-box", outline: "none" }} />
                </div>
                {finalAmount >= 10 && (
                  <p style={{ fontSize: 11, color: "#16a34a", margin: "6px 0 0", fontWeight: 600 }}>
                    ✓ ~{(finalAmount * 62).toLocaleString()} {t.reachLabel}
                  </p>
                )}
              </div>

              {/* BREAKDOWN */}
              {finalAmount >= 10 && (
                <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 14, padding: "16px 18px" }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: "#26215C", margin: "0 0 12px", textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.breakdown}</p>
                  {[
                    { label: t.yourDeposit, val: `$${finalAmount.toFixed(0)}`, color: "#26215C", bold: true },
                    { label: t.managementFee, val: `-$${commission.toFixed(0)}`, color: "#A32D2D" },
                    { label: t.goesToAds, val: `$${goesToAds.toFixed(0)}`, color: "#16a34a", bold: true },
                  ].map((row, i) => (
                    <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: i < 2 ? "1px solid #f3f4f6" : "none" }}>
                      <span style={{ fontSize: 13, color: "#6b7280" }}>{row.label}</span>
                      <span style={{ fontSize: 13, fontWeight: row.bold ? 800 : 500, color: row.color }}>{row.val}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* PAY METHOD */}
              <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 14, padding: "16px 18px" }}>
                <p style={{ fontSize: 12, fontWeight: 700, color: "#26215C", margin: "0 0 10px", textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.payTitle}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {t.payMethods.map(m => (
                    <button key={m.id} onClick={() => setPayMethod(m.id)}
                      style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", borderRadius: 10, border: payMethod === m.id ? "2px solid #26215C" : "1.5px solid #e5e7eb", background: payMethod === m.id ? "#FFF8F0" : "white", cursor: "pointer" }}>
                      <span style={{ fontSize: 18 }}>{m.icon}</span>
                      <span style={{ fontSize: 13, fontWeight: payMethod === m.id ? 700 : 400, color: "#26215C" }}>{m.label}</span>
                      {payMethod === m.id && <span style={{ marginLeft: "auto", color: "#26215C", fontWeight: 800 }}>✓</span>}
                    </button>
                  ))}
                </div>
              </div>

              <button onClick={handlePay} disabled={finalAmount < 10 || loading}
                style={{ padding: "15px", borderRadius: 12, border: "none", background: finalAmount >= 10 && !loading ? "#A32D2D" : "#e5e7eb", color: "white", fontSize: 15, fontWeight: 800, cursor: finalAmount >= 10 && !loading ? "pointer" : "not-allowed", boxShadow: finalAmount >= 10 && !loading ? "0 4px 16px rgba(163,45,45,.3)" : "none" }}>
                {loading ? (
                  <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                    <span style={{ width: 16, height: 16, border: "2px solid rgba(255,255,255,.4)", borderTopColor: "white", borderRadius: "50%", display: "inline-block", animation: "spin .7s linear infinite" }} />
                    {t.processing}
                  </span>
                ) : finalAmount < 10 ? t.minAmount : `${t.payBtn} — $${finalAmount.toFixed(0)}`}
              </button>

              <p style={{ fontSize: 12, color: "#9ca3af", textAlign: "center", margin: 0, lineHeight: 1.5 }}>🔒 {t.guarantee}</p>
            </div>
          </div>
        )}

        {/* VIEW: HISTORY */}
        {view === "history" && (
          <div>
            <p style={{ fontSize: 16, fontWeight: 800, color: "#26215C", margin: "0 0 16px" }}>{t.historyTitle}</p>
            {history.length === 0 ? (
              <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 16, padding: "48px 24px", textAlign: "center" }}>
                <p style={{ fontSize: 36, margin: "0 0 12px" }}>💳</p>
                <p style={{ fontSize: 14, color: "#9ca3af", margin: 0 }}>{t.historyEmpty}</p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {history.map((h, i) => (
                  <div key={i} style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 14, padding: "16px 20px", display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                    <div style={{ width: 44, height: 44, background: h.status === "active" ? "#FFF8F0" : "#f0fdf4", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>
                      {h.status === "active" ? "⚡" : "✅"}
                    </div>
                    <div style={{ flex: 1, minWidth: 120 }}>
                      <p style={{ fontSize: 14, fontWeight: 700, color: "#26215C", margin: "0 0 2px" }}>${h.amount} → {h.channel}</p>
                      <p style={{ fontSize: 12, color: "#9ca3af", margin: 0 }}>{h.date} · ~{h.reach} {lang === "es" ? "personas" : "people"}</p>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <p style={{ fontSize: 14, fontWeight: 700, color: "#16a34a", margin: "0 0 2px" }}>${h.ads} {lang === "es" ? "a pauta" : "to ads"}</p>
                      <span style={{ fontSize: 11, fontWeight: 600, color: h.status === "active" ? "#26215C" : "#16a34a", background: h.status === "active" ? "#FFF8F0" : "#f0fdf4", padding: "2px 9px", borderRadius: 20 }}>
                        {h.status === "active" ? t.statusActive : t.statusCompleted}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* VIEW: WHY */}
        {view === "why" && (
          <div>
            <p style={{ fontSize: 16, fontWeight: 800, color: "#26215C", margin: "0 0 16px" }}>{t.whyTitle}</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 20 }}>
              {t.whyItems.map((w, i) => (
                <div key={i} style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 14, padding: "18px 20px" }}>
                  <span style={{ fontSize: 28, display: "block", marginBottom: 10 }}>{w.icon}</span>
                  <p style={{ fontSize: 14, fontWeight: 700, color: "#26215C", margin: "0 0 5px" }}>{w.title}</p>
                  <p style={{ fontSize: 13, color: "#6b7280", margin: 0, lineHeight: 1.5 }}>{w.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ background: "linear-gradient(135deg,#26215C,#A32D2D)", borderRadius: 16, padding: "22px 24px", textAlign: "center" }}>
              <p style={{ fontSize: 15, fontWeight: 700, color: "white", margin: "0 0 16px" }}>🛡️ {t.guarantee}</p>
              <button onClick={() => setView("recharge")} style={{ background: "white", color: "#26215C", border: "none", borderRadius: 10, padding: "11px 24px", fontSize: 14, fontWeight: 800, cursor: "pointer" }}>
                {lang === "es" ? "Hacer mi primera recarga →" : "Make my first recharge →"}
              </button>
            </div>
          </div>
        )}
      </div>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}

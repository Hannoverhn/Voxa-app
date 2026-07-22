import { useState } from "react";

const T = {
  es: {
    title: "Programa de Afiliados",
    sub: "Gana dinero recurrente recomendando Voxa. Sin límite de ingresos.",
    badge: "💰 Comisión del 30% recurrente",
    howTitle: "¿Cómo funciona?",
    steps: [
      { icon: "🔗", title: "Te registras", desc: "Creas tu cuenta de afiliado gratis. En 2 minutos tienes tu link único." },
      { icon: "📣", title: "Compartes tu link", desc: "Lo publicas en redes, grupos de WhatsApp, con clientes o en tu contenido." },
      { icon: "💰", title: "Ganas el 30%", desc: "Por cada persona que se suscribe usando tu link, recibes el 30% de su pago cada mes que siga pagando." },
      { icon: "🏦", title: "Cobras", desc: "Retiras tus ganancias cuando quieras vía PayPal, transferencia o tarjeta." },
    ],
    exampleTitle: "Ejemplo real de ganancias",
    exampleDesc: "Si traes solo 20 clientes Pro ($19/mes cada uno):",
    earning1: "Tus ingresos mensuales",
    earning2: "Tus ingresos anuales",
    earning3: "Sin hacer nada extra — solo recurrente",
    tiersTitle: "Niveles de afiliado",
    tiers: [
      { name: "Starter", icon: "🌱", min: 0, max: 9, commission: "20%", color: "#6b7280", bg: "#f9fafb" },
      { name: "Pro", icon: "⚡", min: 10, max: 49, commission: "25%", color: "#26215C", bg: "#f5f3ff" },
      { name: "Elite", icon: "🔥", min: 50, max: 199, commission: "30%", color: "#A32D2D", bg: "#fff5f5" },
      { name: "Legend", icon: "👑", min: 200, max: null, commission: "35%", color: "#854d0e", bg: "#fefce8" },
    ],
    activeClients: "clientes activos",
    commissionLabel: "comisión",
    whoTitle: "¿Para quién es este programa?",
    who: [
      { icon: "📱", label: "Creadores de contenido", desc: "Con audiencia de emprendedores" },
      { icon: "🏢", label: "Agencias de marketing", desc: "Para clientes que no pueden contratar" },
      { icon: "👨‍💼", label: "Consultores de negocios", desc: "Que asesoran pymes en LATAM" },
      { icon: "🎓", label: "Educadores y coaches", desc: "Que enseñan marketing o emprendimiento" },
      { icon: "🏛️", label: "Consultores políticos", desc: "Que trabajan con candidatos y partidos" },
      { icon: "💻", label: "Freelancers", desc: "Diseñadores, traffickers, community managers" },
    ],
    registerTitle: "Únete al programa",
    nameLabel: "Tu nombre completo",
    namePh: "Juan Pérez",
    emailLabel: "Tu correo electrónico",
    emailPh: "juan@email.com",
    audienceLabel: "¿Cómo vas a promocionar Voxa?",
    audiencePh: "Ej: Tengo un grupo de WhatsApp de 500 emprendedores y un canal de YouTube...",
    channelLabel: "Tu canal principal",
    channels: ["Redes sociales", "WhatsApp/Telegram", "YouTube/TikTok", "Email marketing", "Blog/web", "Clientes directos"],
    submitBtn: "🚀 Unirme al programa",
    submitting: "Registrando...",
    successTitle: "¡Ya eres afiliado de Voxa!",
    successSub: "Te enviamos tu link único y materiales de marketing a tu correo.",
    successLink: "Tu link de afiliado:",
    copy: "Copiar",
    copied: "✓ Copiado",
    faqTitle: "Preguntas frecuentes",
    faqs: [
      { q: "¿Cuándo y cómo me pagan?", a: "Los pagos se procesan el día 15 de cada mes. Mínimo de retiro: $20. Puedes cobrar por PayPal, transferencia bancaria o tarjeta." },
      { q: "¿Por cuánto tiempo recibo la comisión?", a: "Mientras el cliente siga pagando su suscripción en Voxa. Si alguien paga 2 años, tú recibes comisión por 2 años." },
      { q: "¿Puedo ver en tiempo real mis referidos?", a: "Sí. Desde tu panel de afiliado ves cuántas personas han visitado tu link, cuántas se registraron y cuántas están pagando." },
      { q: "¿Puedo promover el Modo Político también?", a: "Sí. Recibes el 30% recurrente también por el add-on de Modo Político ($24/mes), no solo por la suscripción base." },
    ],
    materialsTitle: "Materiales que te damos",
    materials: ["Banners para redes sociales en todos los formatos", "Textos de publicación listos para copiar y pegar", "Videos cortos de demostración del producto", "Guión para presentar Voxa en reuniones o llamadas", "Casos de éxito reales para compartir"],
  },
  en: {
    title: "Affiliate Program",
    sub: "Earn recurring income by recommending Voxa. No earnings limit.",
    badge: "💰 30% recurring commission",
    howTitle: "How does it work?",
    steps: [
      { icon: "🔗", title: "You register", desc: "Create your free affiliate account. In 2 minutes you have your unique link." },
      { icon: "📣", title: "Share your link", desc: "Post it on social media, WhatsApp groups, with clients or in your content." },
      { icon: "💰", title: "Earn 30%", desc: "For every person who subscribes using your link, you receive 30% of their payment every month they keep paying." },
      { icon: "🏦", title: "Get paid", desc: "Withdraw your earnings whenever you want via PayPal, bank transfer or card." },
    ],
    exampleTitle: "Real earnings example",
    exampleDesc: "If you bring just 20 Pro clients ($19/mo each):",
    earning1: "Your monthly earnings",
    earning2: "Your annual earnings",
    earning3: "Without doing anything extra — just recurring",
    tiersTitle: "Affiliate levels",
    tiers: [
      { name: "Starter", icon: "🌱", min: 0, max: 9, commission: "20%", color: "#6b7280", bg: "#f9fafb" },
      { name: "Pro", icon: "⚡", min: 10, max: 49, commission: "25%", color: "#26215C", bg: "#f5f3ff" },
      { name: "Elite", icon: "🔥", min: 50, max: 199, commission: "30%", color: "#A32D2D", bg: "#fff5f5" },
      { name: "Legend", icon: "👑", min: 200, max: null, commission: "35%", color: "#854d0e", bg: "#fefce8" },
    ],
    activeClients: "active clients",
    commissionLabel: "commission",
    whoTitle: "Who is this program for?",
    who: [
      { icon: "📱", label: "Content creators", desc: "With entrepreneur audiences" },
      { icon: "🏢", label: "Marketing agencies", desc: "For clients who can't hire full service" },
      { icon: "👨‍💼", label: "Business consultants", desc: "Who advise SMBs in LATAM" },
      { icon: "🎓", label: "Educators and coaches", desc: "Who teach marketing or entrepreneurship" },
      { icon: "🏛️", label: "Political consultants", desc: "Who work with candidates and parties" },
      { icon: "💻", label: "Freelancers", desc: "Designers, traffickers, community managers" },
    ],
    registerTitle: "Join the program",
    nameLabel: "Your full name",
    namePh: "John Smith",
    emailLabel: "Your email",
    emailPh: "john@email.com",
    audienceLabel: "How will you promote Voxa?",
    audiencePh: "E.g.: I have a WhatsApp group of 500 entrepreneurs and a YouTube channel...",
    channelLabel: "Your main channel",
    channels: ["Social media", "WhatsApp/Telegram", "YouTube/TikTok", "Email marketing", "Blog/website", "Direct clients"],
    submitBtn: "🚀 Join the program",
    submitting: "Registering...",
    successTitle: "You're now a Voxa affiliate!",
    successSub: "We sent your unique link and marketing materials to your email.",
    successLink: "Your affiliate link:",
    copy: "Copy",
    copied: "✓ Copied",
    faqTitle: "Frequently asked questions",
    faqs: [
      { q: "When and how do I get paid?", a: "Payments are processed on the 15th of each month. Minimum withdrawal: $20. You can get paid via PayPal, bank transfer or card." },
      { q: "How long do I receive the commission?", a: "As long as the client keeps paying their Voxa subscription. If someone pays for 2 years, you receive commission for 2 years." },
      { q: "Can I see my referrals in real time?", a: "Yes. From your affiliate panel you can see how many people visited your link, how many registered and how many are paying." },
      { q: "Can I also promote Political Mode?", a: "Yes. You receive the 30% recurring commission also for the Political Mode add-on ($24/mo), not just the base subscription." },
    ],
    materialsTitle: "Materials we give you",
    materials: ["Social media banners in all formats", "Post texts ready to copy and paste", "Short demo videos of the product", "Script to present Voxa in meetings or calls", "Real success stories to share"],
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

export default function VoxaAfiliados() {
  const [lang, setLang] = useState("es");
  const [form, setForm] = useState({ name: "", email: "", audience: "", channel: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [copied, setCopied] = useState(false);
  const t = T[lang];

  const affiliateLink = `https://voxa.ai?ref=${form.name.toLowerCase().replace(/\s/g, "") || "tulink"}`;
  const canSubmit = form.name.trim().length > 2 && form.email.includes("@") && form.audience.trim().length > 10;

  const submit = async () => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setSuccess(true);
  };

  const inp = { width: "100%", padding: "11px 14px", fontSize: 14, borderRadius: 10, border: "1.5px solid #e5e7eb", fontFamily: "inherit", color: "#111", outline: "none", boxSizing: "border-box", background: "white" };

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

      {/* HERO */}
      <div style={{ background: "linear-gradient(135deg,#26215C,#A32D2D)", padding: "52px 5%", textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 100, padding: "6px 18px", marginBottom: 20 }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: "white" }}>{t.badge}</span>
        </div>
        <h1 style={{ fontSize: "clamp(28px,5vw,52px)", fontWeight: 900, color: "white", letterSpacing: "-0.04em", margin: "0 0 14px", lineHeight: 1.1 }}>{t.title}</h1>
        <p style={{ fontSize: 17, color: "rgba(255,255,255,0.7)", margin: "0 0 32px", maxWidth: 500, marginLeft: "auto", marginRight: "auto" }}>{t.sub}</p>
        <div style={{ display: "flex", gap: 28, justifyContent: "center", flexWrap: "wrap" }}>
          {[["30%", lang === "es" ? "Comisión recurrente" : "Recurring commission"], ["∞", lang === "es" ? "Sin límite de ganancias" : "No earnings limit"], ["15", lang === "es" ? "Día de pago mensual" : "Monthly pay day"]].map(([n, l]) => (
            <div key={l} style={{ textAlign: "center" }}>
              <p style={{ fontSize: 36, fontWeight: 900, color: "#FAEEDA", margin: "0 0 4px", letterSpacing: "-0.03em" }}>{n}</p>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", margin: 0 }}>{l}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "36px 5%" }}>

        {/* HOW IT WORKS */}
        <div style={{ marginBottom: 36 }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: "#A32D2D", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 8px" }}>{t.howTitle}</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 14 }}>
            {t.steps.map((s, i) => (
              <div key={i} style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 14, padding: "20px", textAlign: "center" }}>
                <div style={{ fontSize: 32, marginBottom: 10 }}>{s.icon}</div>
                <div style={{ width: 24, height: 24, background: "#26215C", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "white", margin: "0 auto 10px" }}>{i + 1}</div>
                <p style={{ fontSize: 14, fontWeight: 700, color: "#26215C", margin: "0 0 6px" }}>{s.title}</p>
                <p style={{ fontSize: 13, color: "#6b7280", margin: 0, lineHeight: 1.5 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* EARNINGS EXAMPLE */}
        <div style={{ background: "linear-gradient(135deg,#26215C,#1a1730)", borderRadius: 16, padding: "28px 32px", marginBottom: 28, display: "flex", gap: 28, alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 200 }}>
            <p style={{ fontSize: 14, fontWeight: 700, color: "#FAEEDA", margin: "0 0 6px" }}>{t.exampleTitle}</p>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", margin: 0 }}>{t.exampleDesc}</p>
          </div>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            {[{ label: t.earning1, val: "$114", sub: "20 × $19 × 30%" }, { label: t.earning2, val: "$1,368", sub: t.earning3 }].map((e, i) => (
              <div key={i} style={{ textAlign: "center", background: "rgba(255,255,255,0.08)", borderRadius: 12, padding: "16px 20px" }}>
                <p style={{ fontSize: 32, fontWeight: 900, color: "#FAEEDA", margin: "0 0 4px", letterSpacing: "-0.03em" }}>{e.val}</p>
                <p style={{ fontSize: 12, fontWeight: 600, color: "white", margin: "0 0 2px" }}>{e.label}</p>
                <p style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", margin: 0 }}>{e.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* TIERS */}
        <div style={{ marginBottom: 28 }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: "#26215C", margin: "0 0 14px" }}>📈 {t.tiersTitle}</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 10 }}>
            {t.tiers.map((tier, i) => (
              <div key={i} style={{ background: tier.bg, border: `1.5px solid ${tier.color}30`, borderRadius: 12, padding: "16px", textAlign: "center" }}>
                <span style={{ fontSize: 24 }}>{tier.icon}</span>
                <p style={{ fontSize: 14, fontWeight: 800, color: tier.color, margin: "8px 0 4px" }}>{tier.name}</p>
                <p style={{ fontSize: 24, fontWeight: 900, color: tier.color, margin: "0 0 4px", letterSpacing: "-0.03em" }}>{tier.commission}</p>
                <p style={{ fontSize: 11, color: "#9ca3af", margin: 0 }}>{tier.min}{tier.max ? `–${tier.max}` : "+"} {t.activeClients}</p>
              </div>
            ))}
          </div>
        </div>

        {/* WHO */}
        <div style={{ marginBottom: 28 }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: "#26215C", margin: "0 0 14px" }}>🎯 {t.whoTitle}</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 10 }}>
            {t.who.map((w, i) => (
              <div key={i} style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 12, padding: "14px 16px", display: "flex", gap: 10 }}>
                <span style={{ fontSize: 22, flexShrink: 0 }}>{w.icon}</span>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 700, color: "#26215C", margin: "0 0 2px" }}>{w.label}</p>
                  <p style={{ fontSize: 12, color: "#9ca3af", margin: 0 }}>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* REGISTER / SUCCESS */}
        {!success ? (
          <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 18, padding: "28px 32px" }}>
            <p style={{ fontSize: 18, fontWeight: 900, color: "#26215C", margin: "0 0 20px" }}>🚀 {t.registerTitle}</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.nameLabel}</label>
                <input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder={t.namePh} style={inp} />
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.emailLabel}</label>
                <input type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder={t.emailPh} style={inp} />
              </div>
            </div>
            <div style={{ marginBottom: 14 }}>
              <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.channelLabel}</label>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {t.channels.map(c => (
                  <button key={c} onClick={() => setForm(f => ({ ...f, channel: c }))}
                    style={{ padding: "7px 14px", borderRadius: 20, border: form.channel === c ? "2px solid #26215C" : "1.5px solid #e5e7eb", background: form.channel === c ? "#FFF8F5" : "white", fontSize: 12, fontWeight: form.channel === c ? 700 : 400, color: form.channel === c ? "#26215C" : "#374151", cursor: "pointer" }}>
                    {form.channel === c ? "✓ " : ""}{c}
                  </button>
                ))}
              </div>
            </div>
            <div style={{ marginBottom: 20 }}>
              <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.audienceLabel}</label>
              <textarea value={form.audience} onChange={e => setForm(f => ({ ...f, audience: e.target.value }))} placeholder={t.audiencePh}
                style={{ ...inp, minHeight: 80, resize: "none" }} />
            </div>
            <button onClick={submit} disabled={!canSubmit || loading}
              style={{ width: "100%", padding: "14px", borderRadius: 12, border: "none", background: canSubmit && !loading ? "#A32D2D" : "#e5e7eb", color: "white", fontSize: 15, fontWeight: 800, cursor: canSubmit && !loading ? "pointer" : "not-allowed", boxShadow: canSubmit && !loading ? "0 4px 14px rgba(163,45,45,.3)" : "none" }}>
              {loading ? (
                <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                  <span style={{ width: 16, height: 16, border: "2px solid rgba(255,255,255,.4)", borderTopColor: "white", borderRadius: "50%", display: "inline-block", animation: "spin .7s linear infinite" }} />
                  {t.submitting}
                </span>
              ) : t.submitBtn}
            </button>
          </div>
        ) : (
          <div style={{ background: "white", border: "2px solid #A32D2D", borderRadius: 18, padding: "32px", textAlign: "center" }}>
            <div style={{ fontSize: 56, marginBottom: 16 }}>🎉</div>
            <h2 style={{ fontSize: 22, fontWeight: 900, color: "#26215C", margin: "0 0 8px" }}>{t.successTitle}</h2>
            <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 24px" }}>{t.successSub}</p>
            <div style={{ background: "#FFF8F5", border: "1px solid #F5C6C6", borderRadius: 12, padding: "14px 18px", marginBottom: 16 }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: "#9ca3af", margin: "0 0 6px", textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.successLink}</p>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <p style={{ fontSize: 14, fontWeight: 700, color: "#26215C", margin: 0, wordBreak: "break-all", flex: 1 }}>{affiliateLink}</p>
                <button onClick={() => { navigator.clipboard.writeText(affiliateLink); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
                  style={{ padding: "7px 14px", borderRadius: 8, border: "none", background: copied ? "#f0fdf4" : "#26215C", color: copied ? "#16a34a" : "white", fontSize: 12, fontWeight: 700, cursor: "pointer", flexShrink: 0 }}>
                  {copied ? t.copied : t.copy}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* MATERIALS */}
        <div style={{ background: "#FFF8F5", border: "1px solid #F5C6C6", borderRadius: 14, padding: "20px 24px", marginTop: 20 }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: "#26215C", margin: "0 0 12px" }}>🎁 {t.materialsTitle}</p>
          {t.materials.map((m, i) => (
            <div key={i} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
              <span style={{ color: "#A32D2D", fontWeight: 700 }}>✓</span>
              <span style={{ fontSize: 13, color: "#374151" }}>{m}</span>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div style={{ marginTop: 28 }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: "#26215C", margin: "0 0 14px" }}>❓ {t.faqTitle}</p>
          {t.faqs.map((faq, i) => (
            <div key={i} style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 12, padding: "16px 20px", marginBottom: 10 }}>
              <p style={{ fontSize: 14, fontWeight: 700, color: "#26215C", margin: "0 0 6px" }}>{faq.q}</p>
              <p style={{ fontSize: 13, color: "#6b7280", margin: 0, lineHeight: 1.6 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}

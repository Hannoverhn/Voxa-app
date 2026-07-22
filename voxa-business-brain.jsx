import { useState } from "react";

const T = {
  es: {
    title: "Voxa Business Brain",
    sub: "Tu negocio vive aquí. Voxa lo recuerda todo y lo usa en cada campaña automáticamente.",
    badge: "🧠 Inteligencia permanente de tu negocio",
    steps: ["Negocio", "Clientes", "Marca", "Competencia", "Objetivos"],
    saveBtn: "💾 Guardar y activar Brain",
    saving: "Activando tu Business Brain...",
    savedTitle: "¡Tu Business Brain está activo!",
    savedSub: "Voxa ahora conoce tu negocio. Cada campaña que generes usará esta información automáticamente.",
    editBtn: "Editar información",
    s1: {
      title: "¿Qué es tu negocio?",
      sub: "Cuéntanos todo. Entre más detalle, mejores campañas.",
      nameLabel: "Nombre del negocio",
      namePh: "Ej: Salón Bella",
      typeLabel: "Tipo de negocio",
      types: ["Salón de belleza", "Restaurante / cafetería", "Tienda / retail", "Servicios profesionales", "Ecommerce", "Salud / bienestar", "Educación", "Construcción / inmobiliaria", "Tecnología", "Otro"],
      locationLabel: "Ciudad y país",
      locationPh: "Ej: Tegucigalpa, Honduras",
      descLabel: "Describe tu negocio con tus propias palabras",
      descPh: "Ej: Somos un salón de belleza especializado en tintes y tratamientos capilares para mujeres. Llevamos 5 años en Tegucigalpa...",
      productsLabel: "Tus productos o servicios principales",
      productsPh: "Ej: Tintes, cortes, uñas acrílicas, tratamientos de keratina...",
      priceLabel: "Rango de precios",
      prices: ["Económico (menos de $20)", "Medio ($20–$100)", "Alto ($100–$500)", "Premium (más de $500)"],
      seasonLabel: "¿Tienes temporadas o fechas importantes?",
      seasonPh: "Ej: Diciembre y enero son nuestros meses más fuertes. Día de la Madre es clave...",
    },
    s2: {
      title: "¿Quién es tu cliente ideal?",
      sub: "Mientras más específico, mejor te ayuda la IA.",
      genderLabel: "Género predominante",
      genders: ["Mujeres", "Hombres", "Ambos por igual"],
      ageLabel: "Rango de edad",
      ages: ["18–25", "25–35", "35–50", "50+", "Todos"],
      incomeLabel: "Nivel económico",
      incomes: ["Popular / bajo", "Clase media", "Clase media-alta", "Alto / premium"],
      behaviorLabel: "¿Cómo te encuentra la gente?",
      behaviors: ["Redes sociales", "Boca a boca", "Google", "WhatsApp", "Camina por la zona", "Otro"],
      painLabel: "¿Qué problema le resuelves a tu cliente?",
      painPh: "Ej: Las mujeres que vienen quieren verse bien para el trabajo o eventos, pero no tienen tiempo para ir a salones costosos...",
    },
    s3: {
      title: "Tu identidad de marca",
      sub: "Así sabremos cómo hablar por ti.",
      toneLabel: "¿Cómo habla tu marca?",
      tones: [
        { id: "amigable", label: "Amigable y cercana", desc: "Como un amigo que te recomienda" },
        { id: "profesional", label: "Profesional y seria", desc: "Inspira confianza y expertise" },
        { id: "divertida", label: "Divertida y energética", desc: "Joven, moderna, con humor" },
        { id: "elegante", label: "Elegante y exclusiva", desc: "Premium, sofisticada" },
        { id: "inspiradora", label: "Inspiradora y motivacional", desc: "Empodera al cliente" },
      ],
      colorsLabel: "Colores principales de tu marca",
      colorPh: "Ej: Rosa y dorado",
      sloganLabel: "Slogan o frase de tu negocio (opcional)",
      sloganPh: "Ej: Donde tu belleza brilla",
      promosLabel: "Promociones que usas frecuentemente",
      promosPh: "Ej: 2x1 los martes, descuento de cumpleaños, primera cita con 20% off...",
    },
    s4: {
      title: "Tu competencia",
      sub: "Saber quién es tu competencia nos ayuda a diferenciarte.",
      comp1Label: "Competidor principal",
      comp1Ph: "Ej: Salón Glamour en el centro",
      comp2Label: "Competidor 2 (opcional)",
      comp3Label: "Competidor 3 (opcional)",
      diffLabel: "¿Por qué te eligen a ti y no a ellos?",
      diffPh: "Ej: Somos más baratos pero igual de profesionales. Tenemos estacionamiento y atendemos fines de semana...",
    },
    s5: {
      title: "Tus objetivos comerciales",
      sub: "¿Qué quieres lograr con Voxa?",
      goalLabel: "Meta principal",
      goals: ["Conseguir más clientes nuevos", "Vender más a los clientes actuales", "Abrir en una nueva ubicación", "Lanzar un nuevo producto/servicio", "Recuperar clientes que dejaron de venir", "Ganar más reconocimiento de marca"],
      budgetLabel: "¿Cuánto puedes invertir en publicidad al mes?",
      budgets: ["Menos de $20", "$20–$50", "$50–$150", "$150–$500", "Más de $500"],
      channelLabel: "¿En qué canal prefieres anunciarte?",
      channels: ["Facebook / Instagram", "Google", "TikTok", "WhatsApp", "Todos por igual"],
      extraLabel: "¿Algo más que debería saber Voxa sobre tu negocio?",
      extraPh: "Ej: Solo atendemos con cita previa. No trabajamos domingos. Tenemos descuento especial para estudiantes...",
    },
    brainActive: "Business Brain activo",
    brainInactive: "Brain no configurado",
    lastUpdated: "Última actualización",
    completeness: "Completitud del perfil",
    autoUsed: "Usado automáticamente en",
    campaigns: "campañas generadas",
    next: "Siguiente →",
    back: "← Atrás",
    skip: "Omitir por ahora",
  },
  en: {
    title: "Voxa Business Brain",
    sub: "Your business lives here. Voxa remembers everything and uses it in every campaign automatically.",
    badge: "🧠 Permanent business intelligence",
    steps: ["Business", "Customers", "Brand", "Competition", "Goals"],
    saveBtn: "💾 Save and activate Brain",
    saving: "Activating your Business Brain...",
    savedTitle: "Your Business Brain is active!",
    savedSub: "Voxa now knows your business. Every campaign you generate will automatically use this information.",
    editBtn: "Edit information",
    s1: {
      title: "What is your business?",
      sub: "Tell us everything. More detail means better campaigns.",
      nameLabel: "Business name", namePh: "E.g.: Bella Salon",
      typeLabel: "Business type",
      types: ["Beauty salon", "Restaurant / café", "Store / retail", "Professional services", "Ecommerce", "Health / wellness", "Education", "Construction / real estate", "Technology", "Other"],
      locationLabel: "City and country", locationPh: "E.g.: Tegucigalpa, Honduras",
      descLabel: "Describe your business in your own words", descPh: "E.g.: We are a beauty salon specialized in hair dye and treatments for women...",
      productsLabel: "Your main products or services", productsPh: "E.g.: Hair dye, cuts, acrylic nails, keratin treatments...",
      priceLabel: "Price range",
      prices: ["Budget (under $20)", "Mid-range ($20–$100)", "High ($100–$500)", "Premium (over $500)"],
      seasonLabel: "Do you have seasons or important dates?", seasonPh: "E.g.: December and January are our strongest months...",
    },
    s2: {
      title: "Who is your ideal customer?",
      sub: "The more specific, the better the AI helps you.",
      genderLabel: "Predominant gender",
      genders: ["Women", "Men", "Both equally"],
      ageLabel: "Age range",
      ages: ["18–25", "25–35", "35–50", "50+", "All ages"],
      incomeLabel: "Economic level",
      incomes: ["Budget / low income", "Middle class", "Upper middle class", "High / premium"],
      behaviorLabel: "How do people find you?",
      behaviors: ["Social media", "Word of mouth", "Google", "WhatsApp", "Walk by", "Other"],
      painLabel: "What problem do you solve for your customer?", painPh: "E.g.: Women who come want to look good for work or events but don't have time for expensive salons...",
    },
    s3: {
      title: "Your brand identity",
      sub: "This is how we'll know how to speak for you.",
      toneLabel: "How does your brand speak?",
      tones: [
        { id: "amigable", label: "Friendly and warm", desc: "Like a friend recommending you" },
        { id: "profesional", label: "Professional and serious", desc: "Inspires trust and expertise" },
        { id: "divertida", label: "Fun and energetic", desc: "Young, modern, with humor" },
        { id: "elegante", label: "Elegant and exclusive", desc: "Premium, sophisticated" },
        { id: "inspiradora", label: "Inspiring and motivational", desc: "Empowers the customer" },
      ],
      colorsLabel: "Your brand's main colors", colorPh: "E.g.: Pink and gold",
      sloganLabel: "Your business slogan (optional)", sloganPh: "E.g.: Where your beauty shines",
      promosLabel: "Promotions you use frequently", promosPh: "E.g.: 2-for-1 on Tuesdays, birthday discount, first visit 20% off...",
    },
    s4: {
      title: "Your competition",
      sub: "Knowing your competitors helps us differentiate you.",
      comp1Label: "Main competitor", comp1Ph: "E.g.: Glamour Salon downtown",
      comp2Label: "Competitor 2 (optional)",
      comp3Label: "Competitor 3 (optional)",
      diffLabel: "Why do people choose you over them?", diffPh: "E.g.: We're more affordable but equally professional. We have parking and work weekends...",
    },
    s5: {
      title: "Your business goals",
      sub: "What do you want to achieve with Voxa?",
      goalLabel: "Main goal",
      goals: ["Get more new customers", "Sell more to existing customers", "Open in a new location", "Launch a new product/service", "Win back lost customers", "Build more brand awareness"],
      budgetLabel: "How much can you invest in advertising per month?",
      budgets: ["Less than $20", "$20–$50", "$50–$150", "$150–$500", "More than $500"],
      channelLabel: "Which channel do you prefer to advertise on?",
      channels: ["Facebook / Instagram", "Google", "TikTok", "WhatsApp", "All equally"],
      extraLabel: "Anything else Voxa should know about your business?", extraPh: "E.g.: Appointment only. Closed Sundays. Special discount for students...",
    },
    brainActive: "Business Brain active",
    brainInactive: "Brain not configured",
    lastUpdated: "Last updated",
    completeness: "Profile completeness",
    autoUsed: "Automatically used in",
    campaigns: "campaigns generated",
    next: "Next →",
    back: "← Back",
    skip: "Skip for now",
  }
};

function LangToggle({ lang, setLang }) {
  return (
    <div style={{ display: "flex", background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: 3, gap: 2 }}>
      {["es","en"].map(l => (
        <button key={l} onClick={() => setLang(l)}
          style={{ padding: "4px 10px", borderRadius: 6, border: "none", cursor: "pointer", fontSize: 11, fontWeight: 700, background: l === lang ? "rgba(255,255,255,0.2)" : "transparent", color: l === lang ? "white" : "rgba(255,255,255,0.5)", transition: "all .15s" }}>
          {l === "es" ? "🇪🇸 ES" : "🇺🇸 EN"}
        </button>
      ))}
    </div>
  );
}

function ProgressBar({ pct }) {
  return (
    <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 4, height: 6, width: "100%", overflow: "hidden" }}>
      <div style={{ width: `${pct}%`, height: "100%", background: "#FAEEDA", borderRadius: 4, transition: "width .5s" }} />
    </div>
  );
}

export default function VoxaBusinessBrain() {
  const [lang, setLang] = useState("es");
  const [step, setStep] = useState(0);
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);
  const [campaignsUsed] = useState(0);
  const t = T[lang];

  const [brain, setBrain] = useState({
    name: "", type: "", location: "", desc: "", products: "", price: "", season: "",
    gender: "", age: "", income: "", behavior: [], pain: "",
    tone: "", colors: "", slogan: "", promos: "",
    comp1: "", comp2: "", comp3: "", diff: "",
    goal: "", budget: "", channel: "", extra: "",
  });

  const update = (field, value) => setBrain(b => ({ ...b, [field]: value }));
  const toggleBehavior = (b) => {
    const arr = brain.behavior || [];
    setBrain(prev => ({ ...prev, behavior: arr.includes(b) ? arr.filter(x => x !== b) : [...arr, b] }));
  };

  const completeness = () => {
    const fields = [brain.name, brain.type, brain.location, brain.desc, brain.products, brain.gender, brain.age, brain.tone, brain.goal, brain.budget];
    return Math.round((fields.filter(f => f && f.length > 0).length / fields.length) * 100);
  };

  const canNext = () => {
    if (step === 0) return brain.name.trim().length > 1 && brain.type && brain.location.trim().length > 2;
    if (step === 1) return brain.gender && brain.age;
    if (step === 2) return brain.tone;
    if (step === 3) return true;
    if (step === 4) return brain.goal && brain.budget;
    return false;
  };

  const handleSave = async () => {
    setSaving(true);
    await new Promise(r => setTimeout(r, 1800));
    setSaving(false);
    setSaved(true);
  };

  const inp = { width: "100%", padding: "11px 14px", fontSize: 14, borderRadius: 10, border: "1.5px solid #e5e7eb", fontFamily: "inherit", color: "#111", outline: "none", boxSizing: "border-box", background: "white" };
  const selBtn = (active) => ({ padding: "9px 14px", borderRadius: 9, border: active ? "2px solid #26215C" : "1.5px solid #e5e7eb", background: active ? "#FFF8F5" : "white", color: active ? "#26215C" : "#374151", fontSize: 13, fontWeight: active ? 700 : 400, cursor: "pointer", transition: "all .15s", textAlign: "left", display: "flex", alignItems: "center", justifyContent: "space-between" });

  const pct = completeness();
  const s1 = t.s1; const s2 = t.s2; const s3 = t.s3; const s4 = t.s4; const s5 = t.s5;

  if (saved) return (
    <div style={{ fontFamily: "'Inter',system-ui,sans-serif", background: "#f5f3ef", minHeight: "100vh" }}>
      <div style={{ background: "#26215C", padding: "0 5%", height: 62, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <div style={{ width: 30, height: 30, background: "#A32D2D", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "white", fontSize: 14 }}>V</div>
          <span style={{ fontWeight: 900, fontSize: 17, color: "white" }}>Voxa</span>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <button onClick={() => setSaved(false)} style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", background: "none", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 8, padding: "6px 12px", cursor: "pointer" }}>{t.editBtn}</button>
          <LangToggle lang={lang} setLang={setLang} />
        </div>
      </div>
      <div style={{ maxWidth: 600, margin: "0 auto", padding: "48px 5%", textAlign: "center" }}>
        <div style={{ background: "linear-gradient(135deg,#26215C,#A32D2D)", borderRadius: 20, padding: "40px 32px", marginBottom: 24 }}>
          <div style={{ fontSize: 56, marginBottom: 16 }}>🧠</div>
          <h2 style={{ fontSize: 24, fontWeight: 900, color: "white", margin: "0 0 8px" }}>{t.savedTitle}</h2>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", margin: "0 0 24px", lineHeight: 1.6 }}>{t.savedSub}</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            {[{ n: `${pct}%`, l: t.completeness }, { n: campaignsUsed.toString(), l: `${t.autoUsed} ${t.campaigns}` }, { n: "🟢", l: t.brainActive }].map((s, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.1)", borderRadius: 12, padding: "14px 20px" }}>
                <p style={{ fontSize: 24, fontWeight: 900, color: "#FAEEDA", margin: "0 0 4px" }}>{s.n}</p>
                <p style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", margin: 0 }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 16, padding: "22px 24px", textAlign: "left" }}>
          <p style={{ fontSize: 14, fontWeight: 800, color: "#26215C", margin: "0 0 12px" }}>📋 {lang === "es" ? "Resumen de tu Business Brain" : "Your Business Brain summary"}</p>
          {[
            [lang === "es" ? "Negocio" : "Business", `${brain.name} — ${brain.type} — ${brain.location}`],
            [lang === "es" ? "Cliente ideal" : "Ideal customer", `${brain.gender}, ${brain.age}`],
            [lang === "es" ? "Tono de marca" : "Brand tone", brain.tone],
            [lang === "es" ? "Meta principal" : "Main goal", brain.goal],
            [lang === "es" ? "Presupuesto" : "Budget", brain.budget],
          ].filter(([, v]) => v).map(([label, value], i) => (
            <div key={i} style={{ display: "flex", gap: 10, marginBottom: 10, paddingBottom: 10, borderBottom: i < 4 ? "1px solid #f3f4f6" : "none" }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: "#9ca3af", minWidth: 120 }}>{label}</span>
              <span style={{ fontSize: 13, color: "#374151" }}>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ fontFamily: "'Inter',system-ui,sans-serif", background: "#f5f3ef", minHeight: "100vh" }}>
      <div style={{ background: "#26215C", padding: "16px 5%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <div style={{ width: 30, height: 30, background: "#A32D2D", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "white", fontSize: 14 }}>V</div>
          <div>
            <p style={{ fontWeight: 900, fontSize: 15, color: "white", margin: 0 }}>Voxa Business Brain</p>
            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", margin: 0 }}>{t.badge}</p>
          </div>
        </div>
        <LangToggle lang={lang} setLang={setLang} />
      </div>

      <div style={{ background: "#1a1730", padding: "12px 5%" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: 4, marginBottom: 8 }}>
            {t.steps.map((s, i) => (
              <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: i < step ? "#A32D2D" : i === step ? "#FAEEDA" : "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: i === step ? "#26215C" : i < step ? "white" : "rgba(255,255,255,0.3)" }}>
                  {i < step ? "✓" : i + 1}
                </div>
                <span style={{ fontSize: 10, color: i === step ? "#FAEEDA" : "rgba(255,255,255,0.3)", fontWeight: i === step ? 700 : 400 }}>{s}</span>
              </div>
            ))}
          </div>
          <ProgressBar pct={((step) / t.steps.length) * 100} />
        </div>
      </div>

      <div style={{ maxWidth: 640, margin: "0 auto", padding: "28px 5%" }}>

        {step === 0 && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 900, color: "#26215C", margin: "0 0 6px" }}>{s1.title}</h2>
            <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 24px" }}>{s1.sub}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div><label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s1.nameLabel}</label>
                <input value={brain.name} onChange={e => update("name", e.target.value)} placeholder={s1.namePh} style={inp} /></div>
              <div><label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s1.typeLabel}</label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                  {s1.types.map(tp => <button key={tp} onClick={() => update("type", tp)} style={{ ...selBtn(brain.type === tp), padding: "7px 12px" }}>{brain.type === tp ? "✓ " : ""}{tp}</button>)}
                </div></div>
              <div><label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s1.locationLabel}</label>
                <input value={brain.location} onChange={e => update("location", e.target.value)} placeholder={s1.locationPh} style={inp} /></div>
              <div><label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s1.descLabel}</label>
                <textarea value={brain.desc} onChange={e => update("desc", e.target.value)} placeholder={s1.descPh} style={{ ...inp, minHeight: 90, resize: "none" }} /></div>
              <div><label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s1.productsLabel}</label>
                <textarea value={brain.products} onChange={e => update("products", e.target.value)} placeholder={s1.productsPh} style={{ ...inp, minHeight: 70, resize: "none" }} /></div>
              <div><label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s1.priceLabel}</label>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {s1.prices.map(p => <button key={p} onClick={() => update("price", p)} style={{ ...selBtn(brain.price === p), padding: "8px 12px" }}>{brain.price === p ? "✓ " : ""}{p}</button>)}
                </div></div>
              <div><label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s1.seasonLabel}</label>
                <textarea value={brain.season} onChange={e => update("season", e.target.value)} placeholder={s1.seasonPh} style={{ ...inp, minHeight: 70, resize: "none" }} /></div>
            </div>
          </div>
        )}

        {step === 1 && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 900, color: "#26215C", margin: "0 0 6px" }}>{s2.title}</h2>
            <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 24px" }}>{s2.sub}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div><label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s2.genderLabel}</label>
                <div style={{ display: "flex", gap: 8 }}>{s2.genders.map(g => <button key={g} onClick={() => update("gender", g)} style={{ flex: 1, ...selBtn(brain.gender === g), justifyContent: "center" }}>{brain.gender === g ? "✓ " : ""}{g}</button>)}</div></div>
              <div><label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s2.ageLabel}</label>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>{s2.ages.map(a => <button key={a} onClick={() => update("age", a)} style={{ ...selBtn(brain.age === a), padding: "8px 14px" }}>{brain.age === a ? "✓ " : ""}{a}</button>)}</div></div>
              <div><label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s2.incomeLabel}</label>
                <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>{s2.incomes.map(inc => <button key={inc} onClick={() => update("income", inc)} style={selBtn(brain.income === inc)}><span>{inc}</span>{brain.income === inc && <span>✓</span>}</button>)}</div></div>
              <div><label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s2.behaviorLabel}</label>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>{s2.behaviors.map(b => <button key={b} onClick={() => toggleBehavior(b)} style={{ ...selBtn((brain.behavior || []).includes(b)), padding: "7px 12px" }}>{(brain.behavior || []).includes(b) ? "✓ " : ""}{b}</button>)}</div></div>
              <div><label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s2.painLabel}</label>
                <textarea value={brain.pain} onChange={e => update("pain", e.target.value)} placeholder={s2.painPh} style={{ ...inp, minHeight: 80, resize: "none" }} /></div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 900, color: "#26215C", margin: "0 0 6px" }}>{s3.title}</h2>
            <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 24px" }}>{s3.sub}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div><label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s3.toneLabel}</label>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {s3.tones.map(tone => (
                    <button key={tone.id} onClick={() => update("tone", tone.label)} style={{ ...selBtn(brain.tone === tone.label), padding: "12px 16px" }}>
                      <div><p style={{ fontSize: 14, fontWeight: 700, color: brain.tone === tone.label ? "#26215C" : "#08080a", margin: "0 0 2px" }}>{tone.label}</p>
                        <p style={{ fontSize: 12, color: "#9ca3af", margin: 0 }}>{tone.desc}</p></div>
                      {brain.tone === tone.label && <span style={{ color: "#26215C" }}>✓</span>}
                    </button>
                  ))}
                </div></div>
              <div><label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s3.colorsLabel}</label>
                <input value={brain.colors} onChange={e => update("colors", e.target.value)} placeholder={s3.colorPh} style={inp} /></div>
              <div><label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s3.sloganLabel}</label>
                <input value={brain.slogan} onChange={e => update("slogan", e.target.value)} placeholder={s3.sloganPh} style={inp} /></div>
              <div><label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s3.promosLabel}</label>
                <textarea value={brain.promos} onChange={e => update("promos", e.target.value)} placeholder={s3.promosPh} style={{ ...inp, minHeight: 70, resize: "none" }} /></div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 900, color: "#26215C", margin: "0 0 6px" }}>{s4.title}</h2>
            <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 24px" }}>{s4.sub}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[[s4.comp1Label, s4.comp1Ph, "comp1"], [s4.comp2Label, "", "comp2"], [s4.comp3Label, "", "comp3"]].map(([label, ph, key]) => (
                <div key={key}><label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</label>
                  <input value={brain[key]} onChange={e => update(key, e.target.value)} placeholder={ph} style={inp} /></div>
              ))}
              <div><label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s4.diffLabel}</label>
                <textarea value={brain.diff} onChange={e => update("diff", e.target.value)} placeholder={s4.diffPh} style={{ ...inp, minHeight: 90, resize: "none" }} /></div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 900, color: "#26215C", margin: "0 0 6px" }}>{s5.title}</h2>
            <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 24px" }}>{s5.sub}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div><label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s5.goalLabel}</label>
                <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>{s5.goals.map(g => <button key={g} onClick={() => update("goal", g)} style={selBtn(brain.goal === g)}><span>{g}</span>{brain.goal === g && <span>✓</span>}</button>)}</div></div>
              <div><label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s5.budgetLabel}</label>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>{s5.budgets.map(b => <button key={b} onClick={() => update("budget", b)} style={{ ...selBtn(brain.budget === b), padding: "8px 12px" }}>{brain.budget === b ? "✓ " : ""}{b}</button>)}</div></div>
              <div><label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s5.channelLabel}</label>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>{s5.channels.map(c => <button key={c} onClick={() => update("channel", c)} style={{ ...selBtn(brain.channel === c), padding: "8px 12px" }}>{brain.channel === c ? "✓ " : ""}{c}</button>)}</div></div>
              <div><label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s5.extraLabel}</label>
                <textarea value={brain.extra} onChange={e => update("extra", e.target.value)} placeholder={s5.extraPh} style={{ ...inp, minHeight: 80, resize: "none" }} /></div>
            </div>
          </div>
        )}

        <div style={{ display: "flex", gap: 10, marginTop: 28 }}>
          {step > 0 && <button onClick={() => setStep(s => s - 1)} style={{ padding: "13px 20px", borderRadius: 11, border: "1.5px solid #e5e7eb", background: "white", fontSize: 14, fontWeight: 600, color: "#374151", cursor: "pointer" }}>{t.back}</button>}
          {step < 4 ? (
            <button onClick={() => setStep(s => s + 1)} disabled={!canNext()}
              style={{ flex: 1, padding: "14px", borderRadius: 11, border: "none", background: canNext() ? "#26215C" : "#e5e7eb", color: "white", fontSize: 15, fontWeight: 800, cursor: canNext() ? "pointer" : "not-allowed" }}>
              {t.next}
            </button>
          ) : (
            <button onClick={handleSave} disabled={!canNext() || saving}
              style={{ flex: 1, padding: "14px", borderRadius: 11, border: "none", background: canNext() && !saving ? "#A32D2D" : "#e5e7eb", color: "white", fontSize: 15, fontWeight: 800, cursor: canNext() && !saving ? "pointer" : "not-allowed", boxShadow: canNext() && !saving ? "0 4px 16px rgba(163,45,45,.3)" : "none" }}>
              {saving ? (
                <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                  <span style={{ width: 16, height: 16, border: "2px solid rgba(255,255,255,.4)", borderTopColor: "white", borderRadius: "50%", display: "inline-block", animation: "spin .7s linear infinite" }} />
                  {t.saving}
                </span>
              ) : t.saveBtn}
            </button>
          )}
        </div>
      </div>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}

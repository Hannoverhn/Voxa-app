import { useState } from "react";

const AGENTS = {
  restaurante: {
    id: "restaurante", icon: "🍽️", color: "#b45309", bg: "#fefce8", border: "#fde68a",
    es: { name: "Voxa Restaurantes", sub: "Experto en marketing gastronómico para LATAM",
      specialties: ["Menú del día y promociones", "Delivery y domicilio", "Eventos y celebraciones", "Happy hour y descuentos", "Temporadas y fechas especiales", "Fidelización de clientes"],
      prompts: { promo: "Crea una promoción irresistible para este restaurante", delivery: "Genera un anuncio de delivery urgente", evento: "Crea un anuncio para evento especial", fidelizacion: "Crea mensaje de regreso para clientes perdidos" },
      quickActions: ["🍕 Anuncio menú del día", "🛵 Promoción delivery", "🎉 Anuncio evento", "💝 Recuperar clientes"],
      contextFields: ["Tipo de cocina", "Horarios", "Zona de entrega", "Precio promedio por persona", "Especialidades de la casa"],
    },
    en: { name: "Voxa Restaurants", sub: "Gastronomic marketing expert for LATAM",
      specialties: ["Daily menu & promos", "Delivery & takeout", "Events & celebrations", "Happy hour & discounts", "Seasons & special dates", "Customer loyalty"],
      prompts: { promo: "Create an irresistible promotion for this restaurant", delivery: "Generate an urgent delivery ad", evento: "Create a special event ad", fidelizacion: "Create a return message for lost customers" },
      quickActions: ["🍕 Daily menu ad", "🛵 Delivery promo", "🎉 Event ad", "💝 Win back customers"],
      contextFields: ["Cuisine type", "Hours", "Delivery zone", "Average price per person", "House specialties"],
    }
  },
  belleza: {
    id: "belleza", icon: "💅", color: "#be185d", bg: "#fdf2f8", border: "#fbcfe8",
    es: { name: "Voxa Belleza", sub: "Experto en marketing para salones, spas y estética",
      specialties: ["Citas y reservas", "Promociones de servicios", "Fidelización de clientas", "Lanzamiento de nuevos servicios", "Temporadas altas (bodas, graduaciones)", "Referidos y recomendaciones"],
      prompts: { cita: "Crea anuncio para llenar agenda de citas", promo: "Genera promoción de servicio nuevo", fidelizacion: "Anuncio para clientas frecuentes", temporada: "Campaña para temporada alta" },
      quickActions: ["📅 Llenar agenda", "✨ Nuevo servicio", "💜 Clientas frecuentes", "👰 Temporada bodas"],
      contextFields: ["Servicios principales", "Precios", "Horarios", "Zona", "Especialidades"],
    },
    en: { name: "Voxa Beauty", sub: "Marketing expert for salons, spas & aesthetics",
      specialties: ["Appointments & bookings", "Service promotions", "Client loyalty", "New service launches", "Peak seasons (weddings, graduations)", "Referrals & recommendations"],
      prompts: { cita: "Create an ad to fill appointment slots", promo: "Generate new service promotion", fidelizacion: "Ad for frequent customers", temporada: "Campaign for peak season" },
      quickActions: ["📅 Fill schedule", "✨ New service", "💜 Loyal clients", "👰 Wedding season"],
      contextFields: ["Main services", "Prices", "Hours", "Zone", "Specialties"],
    }
  },
  retail: {
    id: "retail", icon: "🛍️", color: "#0369a1", bg: "#f0f9ff", border: "#bae6fd",
    es: { name: "Voxa Retail", sub: "Experto en marketing para tiendas y comercios",
      specialties: ["Lanzamiento de productos", "Ofertas y descuentos", "Liquidaciones y remates", "Temporadas de ventas", "Nuevas colecciones", "Programas de puntos"],
      prompts: { lanzamiento: "Crea anuncio de lanzamiento de producto", oferta: "Genera oferta irresistible por tiempo limitado", liquidacion: "Anuncio de liquidación de inventario", coleccion: "Lanza nueva colección" },
      quickActions: ["🆕 Lanzar producto", "🔥 Oferta limitada", "📦 Liquidación", "👗 Nueva colección"],
      contextFields: ["Tipo de productos", "Rango de precios", "Canal de venta", "Público objetivo", "Diferencial"],
    },
    en: { name: "Voxa Retail", sub: "Marketing expert for stores & commerce",
      specialties: ["Product launches", "Offers & discounts", "Clearance sales", "Sales seasons", "New collections", "Loyalty programs"],
      prompts: { lanzamiento: "Create product launch ad", oferta: "Generate irresistible limited-time offer", liquidacion: "Inventory clearance ad", coleccion: "Launch new collection" },
      quickActions: ["🆕 Launch product", "🔥 Limited offer", "📦 Clearance", "👗 New collection"],
      contextFields: ["Product type", "Price range", "Sales channel", "Target audience", "Differentiator"],
    }
  },
  profesional: {
    id: "profesional", icon: "💼", color: "#1e40af", bg: "#eff6ff", border: "#bfdbfe",
    es: { name: "Voxa Servicios Pro", sub: "Experto en marketing para profesionales y consultores",
      specialties: ["Captación de nuevos clientes", "Posicionamiento de expertise", "Testimonios y casos de éxito", "Servicios de consultoría", "Webinars y talleres", "Referidos profesionales"],
      prompts: { captacion: "Crea anuncio para captar nuevos clientes", expertise: "Posiciona mi expertise profesional", testimonio: "Anuncio con caso de éxito", servicio: "Lanza nuevo servicio profesional" },
      quickActions: ["🎯 Captar clientes", "🏆 Mi expertise", "⭐ Caso de éxito", "📋 Nuevo servicio"],
      contextFields: ["Profesión / especialidad", "Años de experiencia", "Tipo de cliente", "Servicios ofrecidos", "Diferencial"],
    },
    en: { name: "Voxa Professional", sub: "Marketing expert for professionals & consultants",
      specialties: ["New client acquisition", "Expertise positioning", "Testimonials & case studies", "Consulting services", "Webinars & workshops", "Professional referrals"],
      prompts: { captacion: "Create ad to acquire new clients", expertise: "Position my professional expertise", testimonio: "Ad with success case", servicio: "Launch new professional service" },
      quickActions: ["🎯 Get clients", "🏆 My expertise", "⭐ Success case", "📋 New service"],
      contextFields: ["Profession / specialty", "Years of experience", "Client type", "Services offered", "Differentiator"],
    }
  },
  politico: {
    id: "politico", icon: "🏛️", color: "#26215C", bg: "#f5f3ff", border: "#ddd6fe",
    es: { name: "Voxa Política", sub: "Comunicación política digital para LATAM — exclusivo",
      specialties: ["Comunicación territorial", "Mensajes segmentados por zona", "Calendario electoral", "Movilización ciudadana", "Debates y momentos clave", "Coaliciones y alianzas"],
      prompts: { territorial: "Mensaje para zona específica del candidato", movilizacion: "Llamado a movilización electoral", debate: "Comunicación para noche de debate", ciudadano: "Mensaje ciudadano de impacto" },
      quickActions: ["📍 Mensaje territorial", "🗳️ Movilizar votos", "🎙️ Noche de debate", "📢 Comunicado ciudadano"],
      contextFields: ["Cargo al que aspira", "Zona/circunscripción", "Propuestas clave", "Perfil del votante objetivo", "Oponente principal"],
    },
    en: { name: "Voxa Politics", sub: "Digital political communication for LATAM — exclusive",
      specialties: ["Territorial communication", "Zone-segmented messages", "Electoral calendar", "Citizen mobilization", "Debates & key moments", "Coalitions & alliances"],
      prompts: { territorial: "Message for candidate's specific zone", movilizacion: "Electoral mobilization call", debate: "Communication for debate night", ciudadano: "High-impact citizen message" },
      quickActions: ["📍 Territorial message", "🗳️ Mobilize votes", "🎙️ Debate night", "📢 Citizen statement"],
      contextFields: ["Office sought", "Zone/constituency", "Key proposals", "Target voter profile", "Main opponent"],
    }
  }
};

const T = {
  es: {
    title: "Agentes Especialistas",
    sub: "Expertos de marketing entrenados para tu industria específica",
    selectAgent: "Elige tu agente",
    contextTitle: "Cuéntale a tu agente sobre tu negocio",
    generateBtn: "⚡ Generar con mi agente",
    generating: "Tu agente está trabajando...",
    resultTitle: "Tu campaña especializada",
    quickActionsTitle: "Acciones rápidas",
    specialtiesTitle: "Especialidades",
    newCampaign: "+ Nueva campaña",
    contextPh: "Describe tu negocio para que tu agente lo conozca bien...",
    goalPh: "¿Qué quieres lograr con esta campaña?",
    goalLabel: "Objetivo específico",
    copy: "Copiar",
    copied: "✓",
  },
  en: {
    title: "Specialist Agents",
    sub: "Marketing experts trained for your specific industry",
    selectAgent: "Choose your agent",
    contextTitle: "Tell your agent about your business",
    generateBtn: "⚡ Generate with my agent",
    generating: "Your agent is working...",
    resultTitle: "Your specialized campaign",
    quickActionsTitle: "Quick actions",
    specialtiesTitle: "Specialties",
    newCampaign: "+ New campaign",
    contextPh: "Describe your business so your agent knows it well...",
    goalPh: "What do you want to achieve with this campaign?",
    goalLabel: "Specific goal",
    copy: "Copy",
    copied: "✓",
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

export default function VoxaAgentes() {
  const [lang, setLang] = useState("es");
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [context, setContext] = useState("");
  const [goal, setGoal] = useState("");
  const [quickAction, setQuickAction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(false);
  const t = T[lang];

  const agent = selectedAgent ? AGENTS[selectedAgent] : null;
  const agentData = agent ? agent[lang] : null;

  const buildPrompt = () => {
    const actionText = quickAction || goal;
    return `Eres ${agentData.name} — ${agentData.sub}. Eres un experto especializado ÚNICAMENTE en este sector.

NEGOCIO DEL CLIENTE: ${context}
OBJETIVO / ACCIÓN: ${actionText}

Como experto en ${agentData.name}, conoces perfectamente:
${agentData.specialties.map(s => `- ${s}`).join("\n")}

Genera una campaña completa ultra especializada para este sector específico. Responde ÚNICAMENTE con este JSON en ${lang === "es" ? "español" : "English"}:
{
  "titulo": "titular del anuncio especializado",
  "cuerpo": "cuerpo del anuncio con conocimiento del sector (3-4 oraciones)",
  "cta": "llamado a la acción específico del sector",
  "estrategia": "consejo estratégico del experto del sector (2-3 oraciones)",
  "tip_sector": "tip exclusivo de marketing para este sector que solo un experto sabría",
  "mejorMomento": "cuándo y cómo publicar este anuncio para este sector específico",
  "hashtags": ["hashtag1", "hashtag2", "hashtag3", "hashtag4"]
}`;
  };

  const generate = async (action = null) => {
    if (!context.trim()) return;
    if (action) setQuickAction(action);
    setLoading(true);
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model: "claude-sonnet-4-6", max_tokens: 1000, messages: [{ role: "user", content: buildPrompt() }] })
      });
      const data = await res.json();
      const parsed = JSON.parse((data.content?.[0]?.text || "{}").replace(/```json|```/g, "").trim());
      setResult(parsed);
    } catch { alert(lang === "es" ? "Error al generar" : "Generation error"); }
    finally { setLoading(false); }
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

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "28px 5%" }}>

        {/* AGENT SELECTOR */}
        {!selectedAgent && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 900, color: "#26215C", margin: "0 0 6px" }}>{t.title}</h2>
            <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 28px" }}>{t.sub}</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16 }}>
              {Object.values(AGENTS).map(ag => {
                const ad = ag[lang];
                return (
                  <button key={ag.id} onClick={() => setSelectedAgent(ag.id)}
                    style={{ background: ag.bg, border: `2px solid ${ag.border}`, borderRadius: 18, padding: "28px 24px", cursor: "pointer", textAlign: "left", transition: "transform .15s, box-shadow .15s" }}
                    onMouseOver={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = `0 8px 24px ${ag.border}`; }}
                    onMouseOut={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                    <span style={{ fontSize: 44, display: "block", marginBottom: 14 }}>{ag.icon}</span>
                    <p style={{ fontSize: 16, fontWeight: 900, color: ag.color, margin: "0 0 6px" }}>{ad.name}</p>
                    <p style={{ fontSize: 13, color: "#6b7280", margin: "0 0 16px", lineHeight: 1.5 }}>{ad.sub}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                      {ad.specialties.slice(0, 3).map((s, i) => (
                        <span key={i} style={{ fontSize: 11, background: "white", color: ag.color, padding: "3px 9px", borderRadius: 20, border: `1px solid ${ag.border}`, fontWeight: 500 }}>{s}</span>
                      ))}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* AGENT WORKSPACE */}
        {selectedAgent && agent && agentData && (
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
              <button onClick={() => { setSelectedAgent(null); setResult(null); setContext(""); setGoal(""); }} style={{ fontSize: 13, color: "#9ca3af", background: "none", border: "none", cursor: "pointer" }}>← {t.selectAgent}</button>
              <div style={{ display: "flex", alignItems: "center", gap: 10, background: agent.bg, border: `1px solid ${agent.border}`, borderRadius: 12, padding: "10px 16px" }}>
                <span style={{ fontSize: 28 }}>{agent.icon}</span>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 800, color: agent.color, margin: 0 }}>{agentData.name}</p>
                  <p style={{ fontSize: 12, color: "#9ca3af", margin: 0 }}>{agentData.sub}</p>
                </div>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 20, alignItems: "start" }}>

              {/* MAIN */}
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 14, padding: "18px 20px" }}>
                  <p style={{ fontSize: 13, fontWeight: 700, color: "#26215C", margin: "0 0 12px" }}>{t.contextTitle}</p>
                  <textarea value={context} onChange={e => setContext(e.target.value)} placeholder={t.contextPh}
                    style={{ ...inp, minHeight: 90, resize: "none" }} />
                  <div style={{ marginTop: 12 }}>
                    <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.goalLabel}</label>
                    <input value={goal} onChange={e => setGoal(e.target.value)} placeholder={t.goalPh} style={inp} />
                  </div>
                </div>

                {/* QUICK ACTIONS */}
                <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 14, padding: "16px 18px" }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: "#374151", margin: "0 0 10px", textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.quickActionsTitle}</p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                    {agentData.quickActions.map((qa, i) => (
                      <button key={i} onClick={() => { setQuickAction(qa); generate(qa); }} disabled={!context.trim() || loading}
                        style={{ padding: "11px 14px", borderRadius: 10, border: `1.5px solid ${agent.border}`, background: agent.bg, color: agent.color, fontSize: 13, fontWeight: 700, cursor: context.trim() && !loading ? "pointer" : "not-allowed", opacity: context.trim() ? 1 : 0.5, textAlign: "left" }}>
                        {qa}
                      </button>
                    ))}
                  </div>
                </div>

                <button onClick={() => generate()} disabled={!context.trim() || !goal.trim() || loading}
                  style={{ padding: "14px", borderRadius: 12, border: "none", background: context.trim() && goal.trim() && !loading ? agent.color : "#e5e7eb", color: "white", fontSize: 15, fontWeight: 800, cursor: context.trim() && goal.trim() && !loading ? "pointer" : "not-allowed" }}>
                  {loading ? (
                    <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                      <span style={{ width: 16, height: 16, border: "2px solid rgba(255,255,255,.4)", borderTopColor: "white", borderRadius: "50%", display: "inline-block", animation: "spin .7s linear infinite" }} />
                      {t.generating}
                    </span>
                  ) : t.generateBtn}
                </button>

                {result && (
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    <div style={{ background: "white", border: `2px solid ${agent.border}`, borderRadius: 16, overflow: "hidden" }}>
                      <div style={{ background: agent.color, padding: "13px 18px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontSize: 14, fontWeight: 800, color: "white" }}>{agent.icon} {t.resultTitle}</span>
                        <button onClick={() => { navigator.clipboard.writeText(`${result.titulo}\n\n${result.cuerpo}\n\n${result.cta}`); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
                          style={{ fontSize: 11, padding: "4px 10px", borderRadius: 6, border: "none", background: "rgba(255,255,255,0.2)", color: "white", cursor: "pointer", fontWeight: 700 }}>
                          {copied ? t.copied : t.copy}
                        </button>
                      </div>
                      <div style={{ padding: "18px" }}>
                        <p style={{ fontSize: 11, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 4px" }}>{lang === "es" ? "Título" : "Headline"}</p>
                        <p style={{ fontSize: 18, fontWeight: 900, color: "#26215C", margin: "0 0 14px" }}>{result.titulo}</p>
                        <p style={{ fontSize: 11, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 4px" }}>{lang === "es" ? "Cuerpo" : "Body"}</p>
                        <p style={{ fontSize: 14, color: "#374151", margin: "0 0 14px", lineHeight: 1.7 }}>{result.cuerpo}</p>
                        <div style={{ background: agent.bg, borderRadius: 9, padding: "10px 14px", marginBottom: 14 }}>
                          <span style={{ fontSize: 12, fontWeight: 700, color: "#9ca3af", marginRight: 8 }}>CTA</span>
                          <span style={{ fontSize: 14, fontWeight: 800, color: agent.color }}>{result.cta}</span>
                        </div>
                        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                          {(result.hashtags || []).map((h, i) => <span key={i} style={{ fontSize: 12, fontWeight: 600, color: agent.color, background: agent.bg, padding: "3px 10px", borderRadius: 20 }}>{h}</span>)}
                        </div>
                      </div>
                    </div>
                    {result.estrategia && (
                      <div style={{ background: "#26215C", borderRadius: 14, padding: "16px 18px" }}>
                        <p style={{ fontSize: 11, fontWeight: 700, color: "#FAEEDA", textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 8px" }}>🧠 {lang === "es" ? "Estrategia del experto" : "Expert strategy"}</p>
                        <p style={{ fontSize: 14, color: "rgba(255,255,255,0.85)", margin: 0, lineHeight: 1.7 }}>{result.estrategia}</p>
                      </div>
                    )}
                    {result.tip_sector && (
                      <div style={{ background: agent.bg, border: `1px solid ${agent.border}`, borderRadius: 14, padding: "16px 18px" }}>
                        <p style={{ fontSize: 11, fontWeight: 700, color: agent.color, textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 8px" }}>💡 {lang === "es" ? "Tip exclusivo del sector" : "Exclusive sector tip"}</p>
                        <p style={{ fontSize: 14, color: "#374151", margin: 0, lineHeight: 1.65 }}>{result.tip_sector}</p>
                      </div>
                    )}
                    {result.mejorMomento && (
                      <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 14, padding: "14px 18px" }}>
                        <p style={{ fontSize: 11, fontWeight: 700, color: "#16a34a", textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 6px" }}>⏰ {lang === "es" ? "Mejor momento para publicar" : "Best time to publish"}</p>
                        <p style={{ fontSize: 13, color: "#374151", margin: 0 }}>{result.mejorMomento}</p>
                      </div>
                    )}
                    <button onClick={() => { setResult(null); setGoal(""); setQuickAction(null); }}
                      style={{ padding: "11px", borderRadius: 10, border: "1.5px solid #e8e8f0", background: "white", color: "#374151", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
                      {t.newCampaign}
                    </button>
                  </div>
                )}
              </div>

              {/* SIDEBAR */}
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 14, padding: "16px 18px" }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: "#374151", margin: "0 0 12px", textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.specialtiesTitle}</p>
                  {agentData.specialties.map((s, i) => (
                    <div key={i} style={{ display: "flex", gap: 8, marginBottom: 8, alignItems: "flex-start" }}>
                      <span style={{ color: agent.color, fontWeight: 700, flexShrink: 0 }}>✓</span>
                      <span style={{ fontSize: 13, color: "#374151" }}>{s}</span>
                    </div>
                  ))}
                </div>
                <div style={{ background: agent.bg, border: `1px solid ${agent.border}`, borderRadius: 14, padding: "14px 16px" }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: agent.color, margin: "0 0 10px", textTransform: "uppercase", letterSpacing: "0.05em" }}>{lang === "es" ? "Datos del negocio que usa tu agente" : "Business data your agent uses"}</p>
                  {agentData.contextFields.map((f, i) => (
                    <div key={i} style={{ fontSize: 12, color: "#6b7280", marginBottom: 6, display: "flex", gap: 6 }}>
                      <span style={{ color: agent.color }}>→</span>{f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}

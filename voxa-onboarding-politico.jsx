import { useState } from "react";

const T = {
  es: {
    title: "Voxa Política",
    sub: "Configuremos tu campaña electoral en 4 pasos",
    badge: "🏛️ Onboarding político exclusivo",
    steps: ["Perfil", "Circunscripción", "Votante", "Objetivos"],
    next: "Siguiente →",
    back: "← Atrás",
    saveBtn: "🚀 Activar Voxa Política",
    saving: "Configurando tu campaña...",
    savedTitle: "¡Tu campaña electoral está configurada!",
    savedSub: "Voxa ahora conoce tu circunscripción, tu votante objetivo y tu estrategia. Cada mensaje estará optimizado para ganar.",
    editBtn: "Editar configuración",
    s1: {
      title: "¿Cuál es tu rol en la campaña?",
      sub: "Voxa adapta todas las funciones según tu perfil político.",
      roleLabel: "Rol principal",
      roles: [
        { id: "candidato", icon: "🎙️", name: "Candidato/a", desc: "Estoy participando directamente en la elección" },
        { id: "consultor", icon: "🧠", name: "Consultor político", desc: "Asesoro campañas de uno o más candidatos" },
        { id: "partido", icon: "🏢", name: "Partido político", desc: "Gestiono la comunicación del partido" },
        { id: "equipo", icon: "👥", name: "Equipo de campaña", desc: "Soy parte del equipo de comunicación" },
      ],
      officeLabel: "Cargo al que aspira (o que asesoras)",
      offices: ["Presidente/a de la República", "Diputado/a al Congreso", "Alcalde/sa Municipal", "Regidor/a", "Gobernador/a Departamental", "Otro cargo"],
      partyLabel: "Partido político",
      partyPh: "Ej: Partido Liberal de Honduras",
      nameLabel: "Nombre del candidato/a",
      namePh: "Ej: Juan Martínez",
      electionLabel: "Fecha de elección",
      electionPh: "Ej: Noviembre 2025",
    },
    s2: {
      title: "¿Cuál es tu circunscripción?",
      sub: "Voxa segmenta tus mensajes por cada zona de tu territorio.",
      countryLabel: "País",
      countries: ["Honduras", "Guatemala", "El Salvador", "Costa Rica", "Colombia", "México", "Perú", "República Dominicana", "Otro"],
      departmentLabel: "Departamento / Estado / Región",
      departmentPh: "Ej: Francisco Morazán",
      municipalityLabel: "Municipio / Ciudad",
      municipalityPh: "Ej: Tegucigalpa",
      zonesLabel: "Zonas clave en tu circunscripción",
      zonesPh: "Ej: Centro, Colonia Kennedy, La Granja, zonas rurales del norte...",
      sizeLabel: "Tamaño del electorado estimado",
      sizes: ["Menos de 5,000 votos", "5,000 – 20,000 votos", "20,000 – 100,000 votos", "Más de 100,000 votos"],
      urbanLabel: "Composición territorial",
      urbans: ["Principalmente urbana", "Mixta (urbana y rural)", "Principalmente rural"],
    },
    s3: {
      title: "¿Quién es tu votante objetivo?",
      sub: "Cuanto más preciso seas, más efectivos serán tus mensajes.",
      voteTypeLabel: "Tipo de voto que más necesitas",
      voteTypes: [
        { id: "duro", label: "Voto duro", desc: "Ya te apoyan, necesitas movilizarlos" },
        { id: "blando", label: "Voto blando", desc: "Te simpatizan pero pueden cambiar de opinión" },
        { id: "indeciso", label: "Voto indeciso", desc: "No han decidido aún — son tu mayor oportunidad" },
        { id: "todos", label: "Todos los segmentos", desc: "Estrategia amplia para toda la circunscripción" },
      ],
      ageLabel: "Rango de edad prioritario",
      ages: ["18-25 (primer voto)", "26-40 (adultos jóvenes)", "41-60 (adultos)", "60+ (adultos mayores)", "Todos los rangos"],
      genderLabel: "Enfoque de género",
      genders: ["Mujeres principalmente", "Hombres principalmente", "Equitativo"],
      painLabel: "¿Cuáles son los 3 principales problemas de tu zona?",
      painPh: "Ej: Inseguridad, desempleo juvenil, falta de agua potable en zonas rurales...",
      proposalLabel: "Tu propuesta más fuerte (la que más te diferencia)",
      proposalPh: "Ej: Plan de empleo para jóvenes con 2,000 plazas en el primer año de gobierno...",
    },
    s4: {
      title: "Tu estrategia electoral",
      sub: "Voxa adapta el tono y las tácticas según el momento de tu campaña.",
      phaseLabel: "Fase actual de la campaña",
      phases: [
        { id: "presentacion", icon: "👋", label: "Presentación", desc: "Dándome a conocer ante el electorado" },
        { id: "propuestas", icon: "📋", label: "Propuestas", desc: "Comunicando mi plataforma y proyectos" },
        { id: "debate", icon: "🎙️", label: "Debate / confrontación", desc: "Respondiendo a ataques y debatiendo" },
        { id: "recta", icon: "🏁", label: "Recta final", desc: "Últimas 2 semanas antes de la elección" },
        { id: "movilizacion", icon: "🗳️", label: "Movilización", desc: "Últimas 48h — llevar votantes a las urnas" },
      ],
      toneLabel: "Tono de comunicación",
      tones: [
        { id: "esperanza", label: "Esperanza y cambio", desc: "Positivo, inspirador, futuro" },
        { id: "firmeza", label: "Firmeza y experiencia", desc: "Serio, confiable, demostrado" },
        { id: "cercania", label: "Cercanía y pueblo", desc: "Directo, humano, de la gente" },
        { id: "contraste", label: "Contraste y crítica", desc: "Diferenciación del adversario" },
      ],
      opponentLabel: "Adversario principal",
      opponentPh: "Ej: Candidato del partido X — actualmente alcalde saliente",
      differenceLabel: "¿Por qué tú y no él/ella?",
      differencePh: "Ej: 20 años de experiencia vs. 0 proyectos completados. Tengo un plan, él tiene solo promesas...",
      budgetLabel: "Presupuesto mensual de comunicación digital",
      budgets: ["Menos de $100", "$100–$500", "$500–$2,000", "$2,000–$10,000", "Más de $10,000"],
    },
    profileReady: "Perfil político activo",
    summaryTitle: "Resumen de tu configuración",
  },
  en: {
    title: "Voxa Politics",
    sub: "Let's set up your electoral campaign in 4 steps",
    badge: "🏛️ Exclusive political onboarding",
    steps: ["Profile", "District", "Voter", "Strategy"],
    next: "Next →",
    back: "← Back",
    saveBtn: "🚀 Activate Voxa Politics",
    saving: "Setting up your campaign...",
    savedTitle: "Your electoral campaign is configured!",
    savedSub: "Voxa now knows your district, your target voter and your strategy. Every message will be optimized to win.",
    editBtn: "Edit configuration",
    s1: {
      title: "What is your role in the campaign?",
      sub: "Voxa adapts all features based on your political profile.",
      roleLabel: "Main role",
      roles: [
        { id: "candidato", icon: "🎙️", name: "Candidate", desc: "I'm directly participating in the election" },
        { id: "consultor", icon: "🧠", name: "Political consultant", desc: "I advise campaigns for one or more candidates" },
        { id: "partido", icon: "🏢", name: "Political party", desc: "I manage party communications" },
        { id: "equipo", icon: "👥", name: "Campaign team", desc: "I'm part of the communications team" },
      ],
      officeLabel: "Office sought (or advising)",
      offices: ["President / Head of State", "Member of Congress", "Mayor", "City Council Member", "State Governor", "Other office"],
      partyLabel: "Political party",
      partyPh: "E.g.: Liberal Party",
      nameLabel: "Candidate name",
      namePh: "E.g.: Juan Martinez",
      electionLabel: "Election date",
      electionPh: "E.g.: November 2025",
    },
    s2: {
      title: "What is your district?",
      sub: "Voxa segments your messages for each zone in your territory.",
      countryLabel: "Country",
      countries: ["Honduras", "Guatemala", "El Salvador", "Costa Rica", "Colombia", "Mexico", "Peru", "Dominican Republic", "Other"],
      departmentLabel: "Department / State / Region",
      departmentPh: "E.g.: Francisco Morazán",
      municipalityLabel: "Municipality / City",
      municipalityPh: "E.g.: Tegucigalpa",
      zonesLabel: "Key zones in your district",
      zonesPh: "E.g.: Downtown, Kennedy Colony, La Granja, northern rural areas...",
      sizeLabel: "Estimated electorate size",
      sizes: ["Less than 5,000 votes", "5,000 – 20,000 votes", "20,000 – 100,000 votes", "More than 100,000 votes"],
      urbanLabel: "Territorial composition",
      urbans: ["Mainly urban", "Mixed (urban and rural)", "Mainly rural"],
    },
    s3: {
      title: "Who is your target voter?",
      sub: "The more precise you are, the more effective your messages will be.",
      voteTypeLabel: "Type of vote you need most",
      voteTypes: [
        { id: "duro", label: "Hard vote", desc: "Already support you, need to mobilize them" },
        { id: "blando", label: "Soft vote", desc: "Sympathize with you but may change their mind" },
        { id: "indeciso", label: "Undecided vote", desc: "Haven't decided yet — your biggest opportunity" },
        { id: "todos", label: "All segments", desc: "Broad strategy for the entire district" },
      ],
      ageLabel: "Priority age range",
      ages: ["18-25 (first vote)", "26-40 (young adults)", "41-60 (adults)", "60+ (seniors)", "All ranges"],
      genderLabel: "Gender focus",
      genders: ["Mainly women", "Mainly men", "Equitable"],
      painLabel: "What are the 3 main problems in your area?",
      painPh: "E.g.: Insecurity, youth unemployment, lack of clean water in rural areas...",
      proposalLabel: "Your strongest proposal (what differentiates you most)",
      proposalPh: "E.g.: Youth employment plan with 2,000 positions in the first year of government...",
    },
    s4: {
      title: "Your electoral strategy",
      sub: "Voxa adapts tone and tactics based on your campaign phase.",
      phaseLabel: "Current campaign phase",
      phases: [
        { id: "presentacion", icon: "👋", label: "Introduction", desc: "Making myself known to voters" },
        { id: "propuestas", icon: "📋", label: "Proposals", desc: "Communicating my platform and projects" },
        { id: "debate", icon: "🎙️", label: "Debate / confrontation", desc: "Responding to attacks and debating" },
        { id: "recta", icon: "🏁", label: "Final stretch", desc: "Last 2 weeks before election" },
        { id: "movilizacion", icon: "🗳️", label: "Mobilization", desc: "Last 48h — get voters to the polls" },
      ],
      toneLabel: "Communication tone",
      tones: [
        { id: "esperanza", label: "Hope and change", desc: "Positive, inspiring, future-oriented" },
        { id: "firmeza", label: "Strength and experience", desc: "Serious, reliable, proven" },
        { id: "cercania", label: "Closeness and people", desc: "Direct, human, grassroots" },
        { id: "contraste", label: "Contrast and critique", desc: "Differentiation from the opponent" },
      ],
      opponentLabel: "Main opponent",
      opponentPh: "E.g.: Candidate from Party X — current incumbent mayor",
      differenceLabel: "Why you and not them?",
      differencePh: "E.g.: 20 years of experience vs. 0 completed projects. I have a plan, they only have promises...",
      budgetLabel: "Monthly digital communication budget",
      budgets: ["Less than $100", "$100–$500", "$500–$2,000", "$2,000–$10,000", "More than $10,000"],
    },
    profileReady: "Political profile active",
    summaryTitle: "Your configuration summary",
  }
};

function LangToggle({ lang, setLang }) {
  return (
    <div style={{ display: "flex", background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: 3, gap: 2 }}>
      {["es","en"].map(l => (
        <button key={l} onClick={() => setLang(l)}
          style={{ padding: "4px 10px", borderRadius: 6, border: "none", cursor: "pointer", fontSize: 11, fontWeight: 700, background: l === lang ? "rgba(255,255,255,0.2)" : "transparent", color: "white", opacity: l === lang ? 1 : 0.5, transition: "all .15s" }}>
          {l === "es" ? "🇪🇸 ES" : "🇺🇸 EN"}
        </button>
      ))}
    </div>
  );
}

function ProgressBar({ pct }) {
  return (
    <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 4, height: 5, width: "100%", overflow: "hidden" }}>
      <div style={{ width: `${pct}%`, height: "100%", background: "#FAEEDA", borderRadius: 4, transition: "width .5s" }} />
    </div>
  );
}

export default function VoxaOnboardingPolitico() {
  const [lang, setLang] = useState("es");
  const [step, setStep] = useState(0);
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);
  const t = T[lang];

  const [form, setForm] = useState({
    role: "", office: "", party: "", candidateName: "", electionDate: "",
    country: "", department: "", municipality: "", zones: "", electorateSize: "", urban: "",
    voteType: "", age: "", gender: "", pain: "", proposal: "",
    phase: "", tone: "", opponent: "", difference: "", budget: "",
  });

  const upd = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const canNext = () => {
    if (step === 0) return form.role && form.office;
    if (step === 1) return form.country && form.municipality;
    if (step === 2) return form.voteType && form.pain;
    if (step === 3) return form.phase && form.tone && form.budget;
    return false;
  };

  const handleSave = async () => {
    setSaving(true);
    await new Promise(r => setTimeout(r, 2000));
    setSaving(false);
    setSaved(true);
  };

  const inp = { width: "100%", padding: "11px 14px", fontSize: 14, borderRadius: 10, border: "1.5px solid #e5e7eb", fontFamily: "inherit", color: "#111", outline: "none", boxSizing: "border-box", background: "white" };
  const selBtn = (active, color = "#26215C") => ({
    padding: "10px 14px", borderRadius: 10,
    border: active ? `2px solid ${color}` : "1.5px solid #e5e7eb",
    background: active ? `${color}08` : "white",
    color: active ? color : "#374151",
    fontSize: 13, fontWeight: active ? 700 : 400,
    cursor: "pointer", transition: "all .15s",
    textAlign: "left", display: "flex", alignItems: "center", justifyContent: "space-between"
  });

  const s1 = t.s1; const s2 = t.s2; const s3 = t.s3; const s4 = t.s4;

  if (saved) return (
    <div style={{ fontFamily: "'Inter',system-ui,sans-serif", background: "#f5f3ef", minHeight: "100vh" }}>
      <div style={{ background: "#26215C", padding: "0 5%", height: 62, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <div style={{ width: 30, height: 30, background: "#A32D2D", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "white", fontSize: 14 }}>V</div>
          <span style={{ fontWeight: 900, fontSize: 17, color: "white" }}>Voxa Política</span>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <button onClick={() => setSaved(false)} style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", background: "none", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 8, padding: "6px 12px", cursor: "pointer" }}>{t.editBtn}</button>
          <LangToggle lang={lang} setLang={setLang} />
        </div>
      </div>
      <div style={{ maxWidth: 580, margin: "0 auto", padding: "48px 5%" }}>
        <div style={{ background: "linear-gradient(135deg,#26215C,#A32D2D)", borderRadius: 20, padding: "40px 32px", marginBottom: 20, textAlign: "center" }}>
          <div style={{ fontSize: 56, marginBottom: 16 }}>🏛️</div>
          <h2 style={{ fontSize: 22, fontWeight: 900, color: "white", margin: "0 0 8px" }}>{t.savedTitle}</h2>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", margin: "0 0 28px", lineHeight: 1.65 }}>{t.savedSub}</p>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { n: form.candidateName || "—", l: lang === "es" ? "Candidato" : "Candidate" },
              { n: form.office?.split(" ")[0] || "—", l: lang === "es" ? "Cargo" : "Office" },
              { n: form.municipality || "—", l: lang === "es" ? "Municipio" : "Municipality" },
              { n: "🟢", l: t.profileReady },
            ].map((s, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.1)", borderRadius: 12, padding: "12px 16px" }}>
                <p style={{ fontSize: 16, fontWeight: 900, color: "#FAEEDA", margin: "0 0 3px" }}>{s.n}</p>
                <p style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", margin: 0 }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 16, padding: "22px" }}>
          <p style={{ fontSize: 13, fontWeight: 800, color: "#26215C", margin: "0 0 14px" }}>📋 {t.summaryTitle}</p>
          {[
            [lang === "es" ? "Rol" : "Role", form.role],
            [lang === "es" ? "Cargo" : "Office", form.office],
            [lang === "es" ? "Candidato" : "Candidate", form.candidateName],
            [lang === "es" ? "País" : "Country", form.country],
            [lang === "es" ? "Municipio" : "Municipality", form.municipality],
            [lang === "es" ? "Voto objetivo" : "Target vote", form.voteType],
            [lang === "es" ? "Fase" : "Phase", form.phase],
            [lang === "es" ? "Tono" : "Tone", form.tone],
            [lang === "es" ? "Presupuesto" : "Budget", form.budget],
          ].filter(([, v]) => v).map(([label, value], i, arr) => (
            <div key={i} style={{ display: "flex", gap: 10, marginBottom: i < arr.length - 1 ? 10 : 0, paddingBottom: i < arr.length - 1 ? 10 : 0, borderBottom: i < arr.length - 1 ? "1px solid #f3f4f6" : "none" }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: "#9ca3af", minWidth: 100 }}>{label}</span>
              <span style={{ fontSize: 13, color: "#374151" }}>{value}</span>
            </div>
          ))}
        </div>
        <button onClick={() => {}} style={{ width: "100%", marginTop: 16, padding: "14px", borderRadius: 12, border: "none", background: "#A32D2D", color: "white", fontSize: 15, fontWeight: 800, cursor: "pointer", boxShadow: "0 4px 16px rgba(163,45,45,.3)" }}>
          🏛️ {lang === "es" ? "Ir al Modo Político →" : "Go to Political Mode →"}
        </button>
      </div>
    </div>
  );

  return (
    <div style={{ fontFamily: "'Inter',system-ui,sans-serif", background: "#f5f3ef", minHeight: "100vh" }}>
      {/* HEADER */}
      <div style={{ background: "#26215C", padding: "16px 5%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <div style={{ width: 30, height: 30, background: "#A32D2D", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "white", fontSize: 14 }}>V</div>
          <div>
            <p style={{ fontWeight: 900, fontSize: 15, color: "white", margin: 0 }}>Voxa Política</p>
            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", margin: 0 }}>{t.badge}</p>
          </div>
        </div>
        <LangToggle lang={lang} setLang={setLang} />
      </div>

      {/* STEPS */}
      <div style={{ background: "#1a1730", padding: "14px 5%" }}>
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
          <ProgressBar pct={(step / t.steps.length) * 100} />
        </div>
      </div>

      <div style={{ maxWidth: 640, margin: "0 auto", padding: "28px 5%" }}>

        {/* STEP 1 — PERFIL */}
        {step === 0 && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 900, color: "#26215C", margin: "0 0 6px" }}>{s1.title}</h2>
            <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 24px" }}>{s1.sub}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s1.roleLabel}</label>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {s1.roles.map(role => (
                    <button key={role.id} onClick={() => upd("role", role.id)} style={selBtn(form.role === role.id, "#26215C")}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <span style={{ fontSize: 22 }}>{role.icon}</span>
                        <div>
                          <p style={{ fontSize: 14, fontWeight: 700, color: form.role === role.id ? "#26215C" : "#111", margin: "0 0 2px" }}>{role.name}</p>
                          <p style={{ fontSize: 12, color: "#9ca3af", margin: 0 }}>{role.desc}</p>
                        </div>
                      </div>
                      {form.role === role.id && <span style={{ color: "#26215C" }}>✓</span>}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s1.officeLabel}</label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                  {s1.offices.map(o => (
                    <button key={o} onClick={() => upd("office", o)} style={{ padding: "7px 12px", borderRadius: 9, border: form.office === o ? "2px solid #26215C" : "1.5px solid #e5e7eb", background: form.office === o ? "#f5f3ff" : "white", fontSize: 12, fontWeight: form.office === o ? 700 : 400, color: form.office === o ? "#26215C" : "#374151", cursor: "pointer" }}>
                      {form.office === o ? "✓ " : ""}{o}
                    </button>
                  ))}
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div>
                  <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s1.nameLabel}</label>
                  <input value={form.candidateName} onChange={e => upd("candidateName", e.target.value)} placeholder={s1.namePh} style={inp} />
                </div>
                <div>
                  <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s1.electionLabel}</label>
                  <input value={form.electionDate} onChange={e => upd("electionDate", e.target.value)} placeholder={s1.electionPh} style={inp} />
                </div>
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s1.partyLabel}</label>
                <input value={form.party} onChange={e => upd("party", e.target.value)} placeholder={s1.partyPh} style={inp} />
              </div>
            </div>
          </div>
        )}

        {/* STEP 2 — CIRCUNSCRIPCIÓN */}
        {step === 1 && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 900, color: "#26215C", margin: "0 0 6px" }}>{s2.title}</h2>
            <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 24px" }}>{s2.sub}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s2.countryLabel}</label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                  {s2.countries.map(c => (
                    <button key={c} onClick={() => upd("country", c)} style={{ padding: "7px 12px", borderRadius: 9, border: form.country === c ? "2px solid #26215C" : "1.5px solid #e5e7eb", background: form.country === c ? "#f5f3ff" : "white", fontSize: 12, fontWeight: form.country === c ? 700 : 400, color: form.country === c ? "#26215C" : "#374151", cursor: "pointer" }}>
                      {form.country === c ? "✓ " : ""}{c}
                    </button>
                  ))}
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div>
                  <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s2.departmentLabel}</label>
                  <input value={form.department} onChange={e => upd("department", e.target.value)} placeholder={s2.departmentPh} style={inp} />
                </div>
                <div>
                  <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s2.municipalityLabel}</label>
                  <input value={form.municipality} onChange={e => upd("municipality", e.target.value)} placeholder={s2.municipalityPh} style={inp} />
                </div>
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s2.zonesLabel}</label>
                <textarea value={form.zones} onChange={e => upd("zones", e.target.value)} placeholder={s2.zonesPh} style={{ ...inp, minHeight: 80, resize: "none" }} />
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s2.sizeLabel}</label>
                <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                  {s2.sizes.map(s => (
                    <button key={s} onClick={() => upd("electorateSize", s)} style={selBtn(form.electorateSize === s)}>
                      <span>{s}</span>{form.electorateSize === s && <span>✓</span>}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s2.urbanLabel}</label>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {s2.urbans.map(u => (
                    <button key={u} onClick={() => upd("urban", u)} style={{ padding: "8px 14px", borderRadius: 9, border: form.urban === u ? "2px solid #26215C" : "1.5px solid #e5e7eb", background: form.urban === u ? "#f5f3ff" : "white", fontSize: 12, fontWeight: form.urban === u ? 700 : 400, color: form.urban === u ? "#26215C" : "#374151", cursor: "pointer" }}>
                      {form.urban === u ? "✓ " : ""}{u}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 3 — VOTANTE */}
        {step === 2 && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 900, color: "#26215C", margin: "0 0 6px" }}>{s3.title}</h2>
            <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 24px" }}>{s3.sub}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s3.voteTypeLabel}</label>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {s3.voteTypes.map(vt => (
                    <button key={vt.id} onClick={() => upd("voteType", vt.id)} style={selBtn(form.voteType === vt.id, "#A32D2D")}>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 700, color: form.voteType === vt.id ? "#A32D2D" : "#111", margin: "0 0 2px" }}>{vt.label}</p>
                        <p style={{ fontSize: 12, color: "#9ca3af", margin: 0 }}>{vt.desc}</p>
                      </div>
                      {form.voteType === vt.id && <span style={{ color: "#A32D2D" }}>✓</span>}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s3.ageLabel}</label>
                <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
                  {s3.ages.map(a => (
                    <button key={a} onClick={() => upd("age", a)} style={{ padding: "7px 12px", borderRadius: 9, border: form.age === a ? "2px solid #A32D2D" : "1.5px solid #e5e7eb", background: form.age === a ? "#fff5f5" : "white", fontSize: 12, fontWeight: form.age === a ? 700 : 400, color: form.age === a ? "#A32D2D" : "#374151", cursor: "pointer" }}>
                      {form.age === a ? "✓ " : ""}{a}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s3.genderLabel}</label>
                <div style={{ display: "flex", gap: 8 }}>
                  {s3.genders.map(g => (
                    <button key={g} onClick={() => upd("gender", g)} style={{ flex: 1, padding: "8px 12px", borderRadius: 9, border: form.gender === g ? "2px solid #A32D2D" : "1.5px solid #e5e7eb", background: form.gender === g ? "#fff5f5" : "white", fontSize: 12, fontWeight: form.gender === g ? 700 : 400, color: form.gender === g ? "#A32D2D" : "#374151", cursor: "pointer", textAlign: "center" }}>
                      {form.gender === g ? "✓ " : ""}{g}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s3.painLabel}</label>
                <textarea value={form.pain} onChange={e => upd("pain", e.target.value)} placeholder={s3.painPh} style={{ ...inp, minHeight: 80, resize: "none" }} />
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s3.proposalLabel}</label>
                <textarea value={form.proposal} onChange={e => upd("proposal", e.target.value)} placeholder={s3.proposalPh} style={{ ...inp, minHeight: 80, resize: "none" }} />
              </div>
            </div>
          </div>
        )}

        {/* STEP 4 — ESTRATEGIA */}
        {step === 3 && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 900, color: "#26215C", margin: "0 0 6px" }}>{s4.title}</h2>
            <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 24px" }}>{s4.sub}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s4.phaseLabel}</label>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {s4.phases.map(ph => (
                    <button key={ph.id} onClick={() => upd("phase", ph.id)} style={selBtn(form.phase === ph.id, "#26215C")}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <span style={{ fontSize: 20 }}>{ph.icon}</span>
                        <div>
                          <p style={{ fontSize: 13, fontWeight: 700, color: form.phase === ph.id ? "#26215C" : "#111", margin: "0 0 1px" }}>{ph.label}</p>
                          <p style={{ fontSize: 12, color: "#9ca3af", margin: 0 }}>{ph.desc}</p>
                        </div>
                      </div>
                      {form.phase === ph.id && <span style={{ color: "#26215C" }}>✓</span>}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s4.toneLabel}</label>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {s4.tones.map(tn => (
                    <button key={tn.id} onClick={() => upd("tone", tn.id)} style={selBtn(form.tone === tn.id, "#A32D2D")}>
                      <div>
                        <p style={{ fontSize: 13, fontWeight: 700, color: form.tone === tn.id ? "#A32D2D" : "#111", margin: "0 0 1px" }}>{tn.label}</p>
                        <p style={{ fontSize: 12, color: "#9ca3af", margin: 0 }}>{tn.desc}</p>
                      </div>
                      {form.tone === tn.id && <span style={{ color: "#A32D2D" }}>✓</span>}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s4.opponentLabel}</label>
                <input value={form.opponent} onChange={e => upd("opponent", e.target.value)} placeholder={s4.opponentPh} style={inp} />
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s4.differenceLabel}</label>
                <textarea value={form.difference} onChange={e => upd("difference", e.target.value)} placeholder={s4.differencePh} style={{ ...inp, minHeight: 80, resize: "none" }} />
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s4.budgetLabel}</label>
                <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
                  {s4.budgets.map(b => (
                    <button key={b} onClick={() => upd("budget", b)} style={{ padding: "8px 12px", borderRadius: 9, border: form.budget === b ? "2px solid #26215C" : "1.5px solid #e5e7eb", background: form.budget === b ? "#f5f3ff" : "white", fontSize: 12, fontWeight: form.budget === b ? 700 : 400, color: form.budget === b ? "#26215C" : "#374151", cursor: "pointer" }}>
                      {form.budget === b ? "✓ " : ""}{b}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* BOTONES */}
        <div style={{ display: "flex", gap: 10, marginTop: 28 }}>
          {step > 0 && (
            <button onClick={() => setStep(s => s - 1)} style={{ padding: "13px 20px", borderRadius: 11, border: "1.5px solid #e5e7eb", background: "white", fontSize: 14, fontWeight: 600, color: "#374151", cursor: "pointer" }}>
              {t.back}
            </button>
          )}
          {step < 3 ? (
            <button onClick={() => setStep(s => s + 1)} disabled={!canNext()}
              style={{ flex: 1, padding: "14px", borderRadius: 11, border: "none", background: canNext() ? "#26215C" : "#e5e7eb", color: "white", fontSize: 15, fontWeight: 800, cursor: canNext() ? "pointer" : "not-allowed" }}>
              {t.next}
            </button>
          ) : (
            <button onClick={handleSave} disabled={!canNext() || saving}
              style={{ flex: 1, padding: "14px", borderRadius: 11, border: "none", background: canNext() && !saving ? "#A32D2D" : "#e5e7eb", color: "white", fontSize: 15, fontWeight: 800, cursor: canNext() && !saving ? "pointer" : "not-allowed", boxShadow: canNext() && !saving ? "0 4px 16px rgba(163,45,45,.35)" : "none" }}>
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

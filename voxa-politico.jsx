import { useState } from "react";

const T = {
  es: {
    title: "Modo Político",
    subtitle: "La herramienta de marketing político más completa de LATAM",
    badge: "🏛️ Add-on Premium",
    tabs: ["Campaña Digital", "Email Marketing", "Estrategia Viral", "Resultados"],
    candidate: "Candidato / Partido",
    candidatePlaceholder: "Ej: Juan Pérez, candidato a alcalde por el Partido Progresista. Propuestas: seguridad, empleo y agua potable.",
    cargo: "Cargo",
    cargos: ["Alcalde", "Diputado", "Senador", "Presidente", "Concejal", "Gobernador"],
    zona: "Zona objetivo",
    zonas: ["Zona urbana", "Zona rural", "Ambas"],
    edad: "Rango de edad del votante",
    edades: ["18–25 años", "26–40 años", "41–60 años", "60+ años", "Todos"],
    tono: "Tono del mensaje",
    tonos: ["Propositivo", "Emocional", "Confrontacional", "Esperanza", "Urgencia"],
    redes: "Redes sociales",
    redesList: [
      { id: "facebook", label: "Facebook", icon: "📘", desc: "Posts + Stories + Reels" },
      { id: "instagram", label: "Instagram", icon: "📸", desc: "Feed + Stories + Reels" },
      { id: "tiktok", label: "TikTok", icon: "🎵", desc: "Videos cortos virales" },
      { id: "twitter", label: "X / Twitter", icon: "🐦", desc: "Hilos + tweets" },
      { id: "youtube", label: "YouTube", icon: "📺", desc: "Spots + Shorts" },
      { id: "whatsapp", label: "WhatsApp", icon: "💬", desc: "Mensajes + estados" },
    ],
    emailSubject: "Asunto del email",
    emailAudience: "Lista de destinatarios",
    emailAudiences: ["Simpatizantes registrados", "Votantes indecisos", "Donantes potenciales", "Voluntarios", "Prensa y medios"],
    emailTone: "Tono del email",
    emailTones: ["Urgente — necesitamos tu apoyo", "Informativo — nuestras propuestas", "Personal — carta del candidato", "Agradecimiento — gracias por creer", "Llamada a la acción — ve a votar"],
    viralTitle: "Estrategia viral",
    viralSub: "Selecciona las tácticas que quieres aplicar",
    viralTactics: [
      { id: "hashtag", icon: "#️⃣", label: "Campaña de hashtag", desc: "Crea un hashtag único y contenido para posicionarlo en tendencia" },
      { id: "challenge", icon: "🎯", label: "Reto viral (Challenge)", desc: "Un reto que los seguidores repiten y comparten masivamente" },
      { id: "meme", icon: "😂", label: "Meme político", desc: "Contenido humorístico que viraliza el mensaje sin perder credibilidad" },
      { id: "testimonio", icon: "🎤", label: "Testimonios en video", desc: "Ciudadanos reales hablando del candidato — el contenido más creíble" },
      { id: "influencer", icon: "⭐", label: "Guión para influencers", desc: "Guión listo para que creadores de contenido apoyen la campaña" },
      { id: "conteo", icon: "⏳", label: "Conteo regresivo", desc: "Serie de posts de cuenta atrás hacia el día de elecciones" },
      { id: "debate", icon: "🎙️", label: "Cobertura de debate", desc: "Contenido preparado para publicar durante y después del debate" },
      { id: "urna", icon: "🗳️", label: "Movilización al voto", desc: "Campaña masiva el día de elecciones para llevar gente a votar" },
    ],
    generateBtn: "⚡ Generar estrategia completa",
    generating: "Generando estrategia política con IA...",
    resultsTitle: "Estrategia política completa",
    networkSection: "Contenido por red social",
    emailSection: "Campaña de email marketing",
    viralSection: "Tácticas virales",
    copyBtn: "Copiar",
    copiedBtn: "✓ Copiado",
    voxaScore: "Voxa Score Político",
    viralPotential: "Potencial viral",
    reach: "Alcance estimado",
    newStrategy: "+ Nueva estrategia",
    subjectLabel: "Asunto",
    bodyLabel: "Cuerpo del email",
    ctaLabel: "CTA",
    tacticLabel: "Táctica",
    contentLabel: "Contenido generado",
    instructLabel: "Instrucciones",
    hashtagLabel: "Hashtags sugeridos",
    back: "← Atrás",
    continue: "Continuar →",
    step: "Paso",
    of: "de",
  },
  en: {
    title: "Political Mode",
    subtitle: "The most complete political marketing tool in LATAM",
    badge: "🏛️ Premium Add-on",
    tabs: ["Digital Campaign", "Email Marketing", "Viral Strategy", "Results"],
    candidate: "Candidate / Party",
    candidatePlaceholder: "E.g.: John Smith, mayoral candidate for the Progressive Party. Proposals: security, jobs, and clean water.",
    cargo: "Office",
    cargos: ["Mayor", "Representative", "Senator", "President", "Council member", "Governor"],
    zona: "Target zone",
    zonas: ["Urban area", "Rural area", "Both"],
    edad: "Voter age range",
    edades: ["18–25 years", "26–40 years", "41–60 years", "60+ years", "All"],
    tono: "Message tone",
    tonos: ["Propositive", "Emotional", "Confrontational", "Hope", "Urgency"],
    redes: "Social networks",
    redesList: [
      { id: "facebook", label: "Facebook", icon: "📘", desc: "Posts + Stories + Reels" },
      { id: "instagram", label: "Instagram", icon: "📸", desc: "Feed + Stories + Reels" },
      { id: "tiktok", label: "TikTok", icon: "🎵", desc: "Viral short videos" },
      { id: "twitter", label: "X / Twitter", icon: "🐦", desc: "Threads + tweets" },
      { id: "youtube", label: "YouTube", icon: "📺", desc: "Spots + Shorts" },
      { id: "whatsapp", label: "WhatsApp", icon: "💬", desc: "Messages + statuses" },
    ],
    emailSubject: "Email subject",
    emailAudience: "Recipient list",
    emailAudiences: ["Registered supporters", "Undecided voters", "Potential donors", "Volunteers", "Press & media"],
    emailTone: "Email tone",
    emailTones: ["Urgent — we need your support", "Informative — our proposals", "Personal — letter from the candidate", "Thank you — thanks for believing", "Call to action — go vote"],
    viralTitle: "Viral strategy",
    viralSub: "Select the tactics you want to apply",
    viralTactics: [
      { id: "hashtag", icon: "#️⃣", label: "Hashtag campaign", desc: "Create a unique hashtag and content to trend it" },
      { id: "challenge", icon: "🎯", label: "Viral challenge", desc: "A challenge followers repeat and share massively" },
      { id: "meme", icon: "😂", label: "Political meme", desc: "Humorous content that virally spreads the message without losing credibility" },
      { id: "testimonio", icon: "🎤", label: "Video testimonials", desc: "Real citizens talking about the candidate — the most credible content" },
      { id: "influencer", icon: "⭐", label: "Influencer script", desc: "Ready-made script for content creators to support the campaign" },
      { id: "conteo", icon: "⏳", label: "Countdown", desc: "Post series counting down to election day" },
      { id: "debate", icon: "🎙️", label: "Debate coverage", desc: "Content prepared to publish during and after the debate" },
      { id: "urna", icon: "🗳️", label: "Voter mobilization", desc: "Massive campaign on election day to get people to vote" },
    ],
    generateBtn: "⚡ Generate full strategy",
    generating: "Generating political strategy with AI...",
    resultsTitle: "Complete political strategy",
    networkSection: "Content per social network",
    emailSection: "Email marketing campaign",
    viralSection: "Viral tactics",
    copyBtn: "Copy",
    copiedBtn: "✓ Copied",
    voxaScore: "Political Voxa Score",
    viralPotential: "Viral potential",
    reach: "Estimated reach",
    newStrategy: "+ New strategy",
    subjectLabel: "Subject",
    bodyLabel: "Email body",
    ctaLabel: "CTA",
    tacticLabel: "Tactic",
    contentLabel: "Generated content",
    instructLabel: "Instructions",
    hashtagLabel: "Suggested hashtags",
    back: "← Back",
    continue: "Continue →",
    step: "Step",
    of: "of",
  }
};

function LangToggle({ lang, setLang }) {
  return (
    <div style={{ display: "flex", background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: 3, gap: 2 }}>
      {["es","en"].map(l => (
        <button key={l} onClick={() => setLang(l)}
          style={{ padding: "4px 10px", borderRadius: 6, border: "none", cursor: "pointer", fontSize: 11, fontWeight: 700, background: lang === l ? "rgba(255,255,255,0.2)" : "transparent", color: lang === l ? "white" : "rgba(255,255,255,0.5)", transition: "all .15s" }}>
          {l === "es" ? "🇪🇸 ES" : "🇺🇸 EN"}
        </button>
      ))}
    </div>
  );
}

function CopyButton({ text, t }) {
  const [copied, setCopied] = useState(false);
  return (
    <button onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
      style={{ fontSize: 11, padding: "4px 12px", borderRadius: 6, border: "1px solid #e5e7eb", background: copied ? "#f0fdf4" : "white", color: copied ? "#16a34a" : "#6b7280", cursor: "pointer", fontWeight: 600, flexShrink: 0 }}>
      {copied ? t.copiedBtn : t.copyBtn}
    </button>
  );
}

function ScoreCircle({ score, label, color }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ position: "relative", width: 72, height: 72, margin: "0 auto 8px" }}>
        <svg viewBox="0 0 72 72" style={{ transform: "rotate(-90deg)", width: 72, height: 72 }}>
          <circle cx="36" cy="36" r="30" fill="none" stroke="#f3f4f6" strokeWidth="6" />
          <circle cx="36" cy="36" r="30" fill="none" stroke={color} strokeWidth="6"
            strokeDasharray={`${score * 1.88} 188`} strokeLinecap="round" />
        </svg>
        <span style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 900, color }}>{score}</span>
      </div>
      <p style={{ fontSize: 12, fontWeight: 600, color: "#6b7280", margin: 0 }}>{label}</p>
    </div>
  );
}

export default function VoxaPolitico() {
  const [lang, setLang] = useState("es");
  const [step, setStep] = useState(0); // 0=form digital, 1=email, 2=viral, 3=results
  const [form, setForm] = useState({
    candidato: "", cargo: "", zona: "", edad: "", tono: "",
    redes: [], emailAudience: "", emailTone: "",
    viralTactics: []
  });
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const t = T[lang];

  const toggleRed = (id) => setForm(f => ({ ...f, redes: f.redes.includes(id) ? f.redes.filter(r => r !== id) : [...f.redes, id] }));
  const toggleTactic = (id) => setForm(f => ({ ...f, viralTactics: f.viralTactics.includes(id) ? f.viralTactics.filter(v => v !== id) : [...f.viralTactics, id] }));

  const canNext0 = form.candidato.trim().length > 10 && form.cargo && form.zona && form.edad && form.tono && form.redes.length > 0;
  const canNext1 = form.emailAudience && form.emailTone;
  const canNext2 = form.viralTactics.length > 0;

  const buildPrompt = () => {
    const redesSel = t.redesList.filter(r => form.redes.includes(r.id)).map(r => r.label).join(", ");
    const tacticsSel = t.viralTactics.map(id => t.viralTactics.find ? id : id).join(", ");
    const langInstr = lang === "es" ? "Responde TODO en español." : "Respond ALL in English.";
    return `Eres un experto en marketing político latinoamericano con 20 años de experiencia en campañas ganadoras. ${langInstr}

CANDIDATO/PARTIDO: ${form.candidato}
CARGO: ${form.cargo}
ZONA: ${form.zona}
EDAD DEL VOTANTE: ${form.edad}
TONO: ${form.tono}
REDES SELECCIONADAS: ${redesSel}
AUDIENCIA EMAIL: ${form.emailAudience}
TONO EMAIL: ${form.emailTone}
TÁCTICAS VIRALES: ${form.viralTactics.join(", ")}

Genera una estrategia política COMPLETA y DETALLADA. Responde ÚNICAMENTE con este JSON válido, sin texto adicional:

{
  "score": 88,
  "viralPotential": 92,
  "reach": "450K",
  "redes": [
    {
      "red": "Facebook",
      "icon": "📘",
      "post": "Texto del post principal para Facebook (2-3 párrafos impactantes)",
      "story": "Texto para historia/story (corto, máximo 3 líneas)",
      "hashtags": ["#hashtag1", "#hashtag2", "#hashtag3", "#hashtag4", "#hashtag5"],
      "tip": "Consejo de publicación específico para esta red"
    }
  ],
  "email": {
    "asunto": "Línea de asunto del email (que genere apertura)",
    "preheader": "Texto del preheader (complementa el asunto)",
    "cuerpo": "Cuerpo completo del email (3-4 párrafos, personal y persuasivo)",
    "cta": "Texto del botón de llamada a la acción",
    "ps": "Posdata que refuerza el mensaje (las posdatas tienen alta tasa de lectura)"
  },
  "virales": [
    {
      "tactica": "Nombre de la táctica",
      "icon": "emoji",
      "contenido": "Contenido específico y detallado para esta táctica",
      "instrucciones": "Paso a paso de cómo ejecutarla",
      "hashtags": ["#tag1", "#tag2", "#tag3"]
    }
  ],
  "recomendacion": "Recomendación estratégica general del experto (2-3 oraciones clave)"
}`;
  };

  const generate = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model: "claude-sonnet-4-6", max_tokens: 4000, messages: [{ role: "user", content: buildPrompt() }] })
      });
      const data = await res.json();
      const text = data.content?.[0]?.text || "";
      const parsed = JSON.parse(text.replace(/```json|```/g, "").trim());
      setResults(parsed);
      setStep(3);
    } catch (e) {
      alert(lang === "es" ? "Error al generar. Intenta de nuevo." : "Generation error. Please try again.");
    } finally { setLoading(false); }
  };

  const inp = { width: "100%", padding: "11px 14px", fontSize: 14, borderRadius: 10, border: "1.5px solid #e5e7eb", fontFamily: "inherit", color: "#111", outline: "none", boxSizing: "border-box", background: "white" };
  const selBtn = (active) => ({ padding: "9px 14px", borderRadius: 9, border: active ? "2px solid #A32D2D" : "1.5px solid #e5e7eb", background: active ? "#FFF5F0" : "white", color: active ? "#26215C" : "#374151", fontSize: 13, fontWeight: active ? 700 : 500, cursor: "pointer", transition: "all .15s", textAlign: "left" });

  // RESULTS
  if (step === 3 && results) return (
    <div style={{ fontFamily: "'Inter',system-ui,sans-serif", background: "#f8f8fc", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg,#1a1730,#26215C,#1a1730)", padding: "20px 5%", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 30, height: 30, background: "rgba(255,255,255,0.15)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "white", fontSize: 14 }}>V</div>
          <span style={{ fontWeight: 900, fontSize: 16, color: "white", letterSpacing: "-0.03em" }}>Voxa</span>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>· 🏛️ {t.title}</span>
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <LangToggle lang={lang} setLang={setLang} />
          <button onClick={() => { setResults(null); setStep(0); setForm({ candidato: "", cargo: "", zona: "", edad: "", tono: "", redes: [], emailAudience: "", emailTone: "", viralTactics: [] }); }}
            style={{ fontSize: 13, color: "white", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 8, padding: "7px 14px", cursor: "pointer", fontWeight: 700 }}>{t.newStrategy}</button>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "28px 5%" }}>
        <h2 style={{ fontSize: 22, fontWeight: 900, color: "#08080a", letterSpacing: "-0.03em", margin: "0 0 6px" }}>{t.resultsTitle}</h2>
        <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 24px" }}>{form.cargo} · {form.zona} · {form.edad}</p>

        {/* Scores */}
        <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 14, padding: "22px", display: "flex", gap: 32, justifyContent: "center", flexWrap: "wrap", marginBottom: 24 }}>
          <ScoreCircle score={results.score} label={t.voxaScore} color="#A32D2D" />
          <ScoreCircle score={results.viralPotential} label={t.viralPotential} color="#16a34a" />
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: 28, fontWeight: 900, color: "#f59e0b", margin: "0 0 8px", lineHeight: 1 }}>{results.reach}</p>
            <p style={{ fontSize: 12, fontWeight: 600, color: "#6b7280", margin: 0 }}>{t.reach}</p>
          </div>
        </div>

        {/* Expert recommendation */}
        {results.recomendacion && (
          <div style={{ background: "linear-gradient(135deg,#FFF5F0,#FAEEDA)", border: "1px solid #F5D5B8", borderRadius: 14, padding: "18px 22px", marginBottom: 24, display: "flex", gap: 14, alignItems: "flex-start" }}>
            <span style={{ fontSize: 22, flexShrink: 0 }}>🧠</span>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, color: "#A32D2D", textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 6px" }}>{lang === "es" ? "Recomendación del experto" : "Expert recommendation"}</p>
              <p style={{ fontSize: 14, color: "#374151", margin: 0, lineHeight: 1.65 }}>{results.recomendacion}</p>
            </div>
          </div>
        )}

        {/* REDES */}
        <div style={{ marginBottom: 28 }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: "#08080a", margin: "0 0 14px", textTransform: "uppercase", letterSpacing: "0.06em" }}>{t.networkSection}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {(results.redes || []).map((r, i) => (
              <div key={i} style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 14, overflow: "hidden" }}>
                <div style={{ background: "#fafafa", padding: "13px 18px", borderBottom: "1px solid #f0f0f5", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                    <span style={{ fontSize: 20 }}>{r.icon}</span>
                    <span style={{ fontSize: 15, fontWeight: 800, color: "#08080a" }}>{r.red}</span>
                  </div>
                  <CopyButton text={`POST:\n${r.post}\n\nSTORY:\n${r.story}\n\nHASHTAGS:\n${(r.hashtags || []).join(" ")}`} t={t} />
                </div>
                <div style={{ padding: "16px 18px", display: "flex", flexDirection: "column", gap: 14 }}>
                  <div>
                    <p style={{ fontSize: 10, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 6px" }}>POST PRINCIPAL</p>
                    <p style={{ fontSize: 14, color: "#374151", margin: 0, lineHeight: 1.7, whiteSpace: "pre-wrap" }}>{r.post}</p>
                  </div>
                  <div style={{ background: "#f8f8fc", borderRadius: 9, padding: "12px 14px" }}>
                    <p style={{ fontSize: 10, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 5px" }}>STORY / HISTORIA</p>
                    <p style={{ fontSize: 13, color: "#374151", margin: 0, lineHeight: 1.6 }}>{r.story}</p>
                  </div>
                  <div>
                    <p style={{ fontSize: 10, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 8px" }}>{t.hashtagLabel}</p>
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                      {(r.hashtags || []).map((h, j) => (
                        <span key={j} style={{ fontSize: 12, fontWeight: 600, color: "#A32D2D", background: "#FFF5F0", padding: "4px 10px", borderRadius: 20 }}>{h}</span>
                      ))}
                    </div>
                  </div>
                  {r.tip && (
                    <div style={{ background: "#fefce8", border: "1px solid #fde68a", borderRadius: 8, padding: "10px 14px", display: "flex", gap: 8, alignItems: "flex-start" }}>
                      <span style={{ fontSize: 14, flexShrink: 0 }}>💡</span>
                      <p style={{ fontSize: 12, color: "#92400e", margin: 0, lineHeight: 1.5 }}>{r.tip}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* EMAIL */}
        {results.email && (
          <div style={{ marginBottom: 28 }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#08080a", margin: "0 0 14px", textTransform: "uppercase", letterSpacing: "0.06em" }}>{t.emailSection}</p>
            <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 14, overflow: "hidden" }}>
              <div style={{ background: "#fafafa", padding: "13px 18px", borderBottom: "1px solid #f0f0f5", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                  <span style={{ fontSize: 20 }}>📧</span>
                  <span style={{ fontSize: 15, fontWeight: 800, color: "#08080a" }}>Email Marketing</span>
                </div>
                <CopyButton text={`ASUNTO: ${results.email.asunto}\n\nPREHEADER: ${results.email.preheader}\n\n${results.email.cuerpo}\n\nCTA: ${results.email.cta}\n\nPD: ${results.email.ps}`} t={t} />
              </div>
              <div style={{ padding: "18px", display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ background: "#FFF5F0", border: "1px solid #F5D5B8", borderRadius: 9, padding: "12px 16px" }}>
                  <p style={{ fontSize: 10, fontWeight: 700, color: "#A32D2D", textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 4px" }}>{t.subjectLabel}</p>
                  <p style={{ fontSize: 15, fontWeight: 800, color: "#08080a", margin: "0 0 4px" }}>{results.email.asunto}</p>
                  <p style={{ fontSize: 12, color: "#9ca3af", margin: 0 }}>{results.email.preheader}</p>
                </div>
                <div>
                  <p style={{ fontSize: 10, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 8px" }}>{t.bodyLabel}</p>
                  <div style={{ background: "#fafafa", border: "1px solid #f0f0f5", borderRadius: 9, padding: "16px", fontSize: 14, color: "#374151", lineHeight: 1.75, whiteSpace: "pre-wrap" }}>
                    {results.email.cuerpo}
                  </div>
                </div>
                <div style={{ display: "flex", gap: 12 }}>
                  <div style={{ flex: 1, background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 9, padding: "12px 16px" }}>
                    <p style={{ fontSize: 10, fontWeight: 700, color: "#16a34a", textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 4px" }}>{t.ctaLabel}</p>
                    <p style={{ fontSize: 14, fontWeight: 800, color: "#15803d", margin: 0 }}>{results.email.cta}</p>
                  </div>
                  {results.email.ps && (
                    <div style={{ flex: 1, background: "#fff7ed", border: "1px solid #fed7aa", borderRadius: 9, padding: "12px 16px" }}>
                      <p style={{ fontSize: 10, fontWeight: 700, color: "#c2410c", textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 4px" }}>P.D.</p>
                      <p style={{ fontSize: 13, color: "#9a3412", margin: 0, lineHeight: 1.5 }}>{results.email.ps}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIRALES */}
        {results.virales && results.virales.length > 0 && (
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#08080a", margin: "0 0 14px", textTransform: "uppercase", letterSpacing: "0.06em" }}>{t.viralSection}</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))", gap: 14 }}>
              {results.virales.map((v, i) => (
                <div key={i} style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 14, overflow: "hidden" }}>
                  <div style={{ background: "linear-gradient(135deg,#1a1730,#26215C)", padding: "13px 18px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                      <span style={{ fontSize: 18 }}>{v.icon}</span>
                      <span style={{ fontSize: 14, fontWeight: 800, color: "white" }}>{v.tactica}</span>
                    </div>
                    <CopyButton text={`${v.tactica}\n\nCONTENIDO:\n${v.contenido}\n\nINSTRUCCIONES:\n${v.instrucciones}\n\nHASHTAGS:\n${(v.hashtags || []).join(" ")}`} t={t} />
                  </div>
                  <div style={{ padding: "16px 18px", display: "flex", flexDirection: "column", gap: 12 }}>
                    <div>
                      <p style={{ fontSize: 10, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 6px" }}>{t.contentLabel}</p>
                      <p style={{ fontSize: 13, color: "#374151", margin: 0, lineHeight: 1.65 }}>{v.contenido}</p>
                    </div>
                    <div style={{ background: "#f8f8fc", borderRadius: 9, padding: "12px 14px" }}>
                      <p style={{ fontSize: 10, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 6px" }}>{t.instructLabel}</p>
                      <p style={{ fontSize: 13, color: "#374151", margin: 0, lineHeight: 1.65 }}>{v.instrucciones}</p>
                    </div>
                    {v.hashtags && v.hashtags.length > 0 && (
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                        {v.hashtags.map((h, j) => (
                          <span key={j} style={{ fontSize: 11, fontWeight: 600, color: "#A32D2D", background: "#FFF5F0", padding: "3px 9px", borderRadius: 20 }}>{h}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );

  // FORM
  return (
    <div style={{ fontFamily: "'Inter',system-ui,sans-serif", minHeight: "100vh", background: "#f8f8fc" }}>

      {/* HEADER */}
      <div style={{ background: "linear-gradient(135deg,#1a1730,#26215C,#1a1730)", padding: "20px 5%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 30, height: 30, background: "rgba(255,255,255,0.15)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "white", fontSize: 14 }}>V</div>
          <span style={{ fontWeight: 900, fontSize: 16, color: "white", letterSpacing: "-0.03em" }}>Voxa</span>
          <span style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 6, padding: "3px 10px", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.8)" }}>🏛️ {t.badge}</span>
        </div>
        <LangToggle lang={lang} setLang={setLang} />
      </div>

      {/* TABS */}
      <div style={{ background: "white", borderBottom: "1px solid #e8e8f0", padding: "0 5%", display: "flex", gap: 0, overflowX: "auto" }}>
        {t.tabs.map((tab, i) => (
          <button key={i} onClick={() => i < step && setStep(i)}
            style={{ padding: "14px 20px", border: "none", borderBottom: step === i ? "2px solid #A32D2D" : "2px solid transparent", background: "transparent", fontSize: 13, fontWeight: step === i ? 700 : 500, color: step === i ? "#A32D2D" : i > step ? "#d1d5db" : "#6b7280", cursor: i <= step ? "pointer" : "default", whiteSpace: "nowrap", transition: "all .15s" }}>
            {i < step ? "✓ " : ""}{tab}
          </button>
        ))}
      </div>

      <div style={{ maxWidth: 700, margin: "0 auto", padding: "32px 5%" }}>

        {/* STEP 0 — Digital campaign */}
        {step === 0 && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 900, color: "#08080a", letterSpacing: "-0.02em", margin: "0 0 6px" }}>{t.tabs[0]}</h2>
            <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 28px" }}>{t.subtitle}</p>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 7, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.candidate}</label>
                <textarea value={form.candidato} onChange={e => setForm(f => ({ ...f, candidato: e.target.value }))} placeholder={t.candidatePlaceholder}
                  style={{ ...inp, minHeight: 100, resize: "vertical" }} onFocus={e => e.target.style.borderColor = "#A32D2D"} onBlur={e => e.target.style.borderColor = "#e5e7eb"} />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <div>
                  <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 7, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.cargo}</label>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    {t.cargos.map(c => (
                      <button key={c} onClick={() => setForm(f => ({ ...f, cargo: c }))} style={selBtn(form.cargo === c)}>
                        {form.cargo === c ? "✓ " : ""}{c}
                      </button>
                    ))}
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <div>
                    <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 7, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.zona}</label>
                    {t.zonas.map(z => (
                      <button key={z} onClick={() => setForm(f => ({ ...f, zona: z }))} style={{ ...selBtn(form.zona === z), display: "block", width: "100%", marginBottom: 6 }}>
                        {form.zona === z ? "✓ " : ""}{z}
                      </button>
                    ))}
                  </div>
                  <div>
                    <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 7, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.tono}</label>
                    {t.tonos.map(tn => (
                      <button key={tn} onClick={() => setForm(f => ({ ...f, tono: tn }))} style={{ ...selBtn(form.tono === tn), display: "block", width: "100%", marginBottom: 6 }}>
                        {form.tono === tn ? "✓ " : ""}{tn}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 7, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.edad}</label>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {t.edades.map(e => (
                    <button key={e} onClick={() => setForm(f => ({ ...f, edad: e }))} style={{ ...selBtn(form.edad === e), padding: "8px 14px" }}>
                      {form.edad === e ? "✓ " : ""}{e}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 7, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.redes} <span style={{ color: "#9ca3af", fontWeight: 400, textTransform: "none" }}>({lang === "es" ? "selecciona todas las que quieres" : "select all you want"})</span></label>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  {t.redesList.map(r => (
                    <button key={r.id} onClick={() => toggleRed(r.id)}
                      style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 14px", borderRadius: 10, border: form.redes.includes(r.id) ? "2px solid #A32D2D" : "1.5px solid #e5e7eb", background: form.redes.includes(r.id) ? "#FFF5F0" : "white", cursor: "pointer", textAlign: "left", transition: "all .15s" }}>
                      <span style={{ fontSize: 22 }}>{r.icon}</span>
                      <div>
                        <p style={{ fontSize: 13, fontWeight: 700, color: form.redes.includes(r.id) ? "#26215C" : "#08080a", margin: "0 0 1px" }}>{r.label}</p>
                        <p style={{ fontSize: 11, color: "#9ca3af", margin: 0 }}>{r.desc}</p>
                      </div>
                      {form.redes.includes(r.id) && <span style={{ marginLeft: "auto", color: "#A32D2D", fontWeight: 800, fontSize: 14 }}>✓</span>}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button onClick={() => setStep(1)} disabled={!canNext0}
              style={{ width: "100%", marginTop: 28, padding: "14px", borderRadius: 11, border: "none", background: canNext0 ? "linear-gradient(135deg,#26215C,#A32D2D)" : "#e5e7eb", color: canNext0 ? "white" : "#9ca3af", fontSize: 15, fontWeight: 800, cursor: canNext0 ? "pointer" : "not-allowed", boxShadow: canNext0 ? "0 4px 16px rgba(91,33,182,.25)" : "none" }}>
              {t.continue}
            </button>
          </div>
        )}

        {/* STEP 1 — Email */}
        {step === 1 && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 900, color: "#08080a", letterSpacing: "-0.02em", margin: "0 0 6px" }}>{t.tabs[1]}</h2>
            <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 28px" }}>{lang === "es" ? "Configura la campaña de email para tus seguidores" : "Configure the email campaign for your supporters"}</p>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 7, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.emailAudience}</label>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {t.emailAudiences.map(a => (
                    <button key={a} onClick={() => setForm(f => ({ ...f, emailAudience: a }))} style={{ ...selBtn(form.emailAudience === a), display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      {a} {form.emailAudience === a && <span style={{ color: "#A32D2D" }}>✓</span>}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 7, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.emailTone}</label>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {t.emailTones.map(et => (
                    <button key={et} onClick={() => setForm(f => ({ ...f, emailTone: et }))} style={{ ...selBtn(form.emailTone === et), display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      {et} {form.emailTone === et && <span style={{ color: "#A32D2D" }}>✓</span>}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: 10, marginTop: 28 }}>
              <button onClick={() => setStep(0)} style={{ padding: "13px 22px", borderRadius: 11, border: "1.5px solid #e5e7eb", background: "white", fontSize: 14, fontWeight: 600, color: "#374151", cursor: "pointer" }}>{t.back}</button>
              <button onClick={() => setStep(2)} disabled={!canNext1}
                style={{ flex: 1, padding: "14px", borderRadius: 11, border: "none", background: canNext1 ? "linear-gradient(135deg,#26215C,#A32D2D)" : "#e5e7eb", color: canNext1 ? "white" : "#9ca3af", fontSize: 15, fontWeight: 800, cursor: canNext1 ? "pointer" : "not-allowed" }}>
                {t.continue}
              </button>
            </div>
          </div>
        )}

        {/* STEP 2 — Viral */}
        {step === 2 && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 900, color: "#08080a", letterSpacing: "-0.02em", margin: "0 0 6px" }}>{t.viralTitle}</h2>
            <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 28px" }}>{t.viralSub}</p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {t.viralTactics.map(tac => (
                <button key={tac.id} onClick={() => toggleTactic(tac.id)}
                  style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "14px 16px", borderRadius: 12, border: form.viralTactics.includes(tac.id) ? "2px solid #A32D2D" : "1.5px solid #e5e7eb", background: form.viralTactics.includes(tac.id) ? "#FFF5F0" : "white", cursor: "pointer", textAlign: "left", transition: "all .15s", position: "relative" }}>
                  <span style={{ fontSize: 22, flexShrink: 0 }}>{tac.icon}</span>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 700, color: form.viralTactics.includes(tac.id) ? "#26215C" : "#08080a", margin: "0 0 3px" }}>{tac.label}</p>
                    <p style={{ fontSize: 12, color: "#9ca3af", margin: 0, lineHeight: 1.4 }}>{tac.desc}</p>
                  </div>
                  {form.viralTactics.includes(tac.id) && (
                    <span style={{ position: "absolute", top: 10, right: 12, color: "#A32D2D", fontWeight: 800, fontSize: 14 }}>✓</span>
                  )}
                </button>
              ))}
            </div>

            <div style={{ display: "flex", gap: 10, marginTop: 28 }}>
              <button onClick={() => setStep(1)} style={{ padding: "13px 22px", borderRadius: 11, border: "1.5px solid #e5e7eb", background: "white", fontSize: 14, fontWeight: 600, color: "#374151", cursor: "pointer" }}>{t.back}</button>
              <button onClick={generate} disabled={!canNext2 || loading}
                style={{ flex: 1, padding: "14px", borderRadius: 11, border: "none", background: canNext2 && !loading ? "linear-gradient(135deg,#26215C,#A32D2D)" : "#e5e7eb", color: canNext2 && !loading ? "white" : "#9ca3af", fontSize: 15, fontWeight: 800, cursor: canNext2 && !loading ? "pointer" : "not-allowed", boxShadow: canNext2 && !loading ? "0 4px 16px rgba(91,33,182,.25)" : "none" }}>
                {loading ? (
                  <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                    <span style={{ width: 16, height: 16, border: "2px solid rgba(255,255,255,.4)", borderTopColor: "white", borderRadius: "50%", display: "inline-block", animation: "spin .7s linear infinite" }} />
                    {t.generating}
                  </span>
                ) : t.generateBtn}
              </button>
            </div>
          </div>
        )}
      </div>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}

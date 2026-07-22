import { useState } from "react";

const CODES = Array.from({ length: 100 }, (_, i) => ({
  code: `VOXA-BETA-${String(i + 1).padStart(3, "0")}`,
  num: i + 1,
  status: i < 3 ? "used" : "available",
  assignedTo: i === 0 ? "Laura Martínez" : i === 1 ? "Carlos Rodríguez" : i === 2 ? "Miguel Torres" : "",
  assignedDate: i < 3 ? "15 Jun 2026" : "",
  segment: i < 20 ? "Círculo cercano" : i < 60 ? "Grupos emprendedores" : i < 80 ? "Consultores políticos" : "Reserva estratégica",
  segmentEn: i < 20 ? "Close circle" : i < 60 ? "Entrepreneur groups" : i < 80 ? "Political consultants" : "Strategic reserve",
}));

const T = {
  es: {
    title: "Códigos Beta — Panel de control",
    sub: "Gestiona tus 100 códigos de acceso de lanzamiento",
    totalLabel: "Total códigos",
    usedLabel: "Activados",
    availableLabel: "Disponibles",
    progressLabel: "Progreso hacia 5,000 suscriptores pagos",
    codeLabel: "Código",
    assignedTo: "Asignado a",
    segment: "Segmento",
    status: "Estado",
    date: "Fecha",
    available: "Disponible",
    used: "Activado",
    copyCode: "Copiar",
    copied: "✓",
    assignBtn: "Asignar",
    searchPh: "Buscar código o nombre...",
    filterAll: "Todos",
    filterAvailable: "Disponibles",
    filterUsed: "Activados",
    segments: ["Todos los segmentos", "Círculo cercano", "Grupos emprendedores", "Consultores políticos", "Reserva estratégica"],
    trialDays: "15 días de acceso completo",
    includes: "Incluye todo: Generador, Modo Político, Creativos, Clone Pro, Express, ROI, Asistente",
    generateMessage: "Generar mensaje de WhatsApp",
    messageTemplate: (code) => `Hola! Te invito a probar Voxa — la plataforma de publicidad con IA más completa de LATAM. 🚀\n\nTe comparto tu código de acceso EXCLUSIVO:\n\n🔑 *${code}*\n\n✓ 15 días GRATIS con acceso completo\n✓ Sin tarjeta de crédito\n✓ Incluye Modo Político, Voxa Score, Clone Pro y más\n\nEntra aquí: https://voxa.ai/beta\n\n¡Solo quedan códigos limitados! 🔥`,
    exportBtn: "⬇️ Exportar lista completa",
    stats: "Estadísticas por segmento",
  },
  en: {
    title: "Beta Codes — Control Panel",
    sub: "Manage your 100 launch access codes",
    totalLabel: "Total codes",
    usedLabel: "Activated",
    availableLabel: "Available",
    progressLabel: "Progress toward 5,000 paying subscribers",
    codeLabel: "Code",
    assignedTo: "Assigned to",
    segment: "Segment",
    status: "Status",
    date: "Date",
    available: "Available",
    used: "Activated",
    copyCode: "Copy",
    copied: "✓",
    assignBtn: "Assign",
    searchPh: "Search code or name...",
    filterAll: "All",
    filterAvailable: "Available",
    filterUsed: "Activated",
    segments: ["All segments", "Close circle", "Entrepreneur groups", "Political consultants", "Strategic reserve"],
    trialDays: "15 days full access",
    includes: "Includes everything: Generator, Political Mode, Creatives, Clone Pro, Express, ROI, Assistant",
    generateMessage: "Generate WhatsApp message",
    messageTemplate: (code) => `Hi! I'd like to invite you to try Voxa — the most complete AI advertising platform in LATAM. 🚀\n\nHere's your EXCLUSIVE access code:\n\n🔑 *${code}*\n\n✓ 15 days FREE with full access\n✓ No credit card required\n✓ Includes Political Mode, Voxa Score, Clone Pro and more\n\nEnter here: https://voxa.ai/beta\n\nLimited codes available! 🔥`,
    exportBtn: "⬇️ Export full list",
    stats: "Stats by segment",
  }
};

function LangToggle({ lang, setLang }) {
  return (
    <div style={{ display: "flex", background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: 3, gap: 2 }}>
      {["es","en"].map(l => (
        <button key={l} onClick={() => setLang(l)}
          style={{ padding: "4px 10px", borderRadius: 6, border: "none", cursor: "pointer", fontSize: 11, fontWeight: 700, background: l === lang ? "rgba(255,255,255,0.2)" : "transparent", color: lang === l ? "white" : "rgba(255,255,255,0.5)", transition: "all .15s" }}>
          {l === "es" ? "🇪🇸 ES" : "🇺🇸 EN"}
        </button>
      ))}
    </div>
  );
}

export default function VoxaCodigosBeta() {
  const [lang, setLang] = useState("es");
  const [codes, setCodes] = useState(CODES);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [segFilter, setSegFilter] = useState(0);
  const [copiedCode, setCopiedCode] = useState(null);
  const [assigning, setAssigning] = useState(null);
  const [assignName, setAssignName] = useState("");
  const [showMessage, setShowMessage] = useState(null);
  const t = T[lang];

  const used = codes.filter(c => c.status === "used").length;
  const available = codes.filter(c => c.status === "available").length;

  const filtered = codes.filter(c => {
    const name = c.code + " " + c.assignedTo;
    const matchSearch = name.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "all" || c.status === filter;
    const seg = lang === "es" ? c.segment : c.segmentEn;
    const matchSeg = segFilter === 0 || seg === t.segments[segFilter];
    return matchSearch && matchFilter && matchSeg;
  });

  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const assignCode = (num) => {
    if (!assignName.trim()) return;
    setCodes(prev => prev.map(c => c.num === num ? { ...c, status: "used", assignedTo: assignName, assignedDate: new Date().toLocaleDateString(lang === "es" ? "es-HN" : "en-US", { day: "numeric", month: "short", year: "numeric" }) } : c));
    setAssigning(null);
    setAssignName("");
  };

  const exportCSV = () => {
    const rows = ["Código,Estado,Asignado a,Segmento,Fecha"];
    codes.forEach(c => rows.push(`${c.code},${c.status},${c.assignedTo},${c.segment},${c.assignedDate}`));
    const blob = new Blob([rows.join("\n")], { type: "text/csv" });
    const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "voxa-codigos-beta.csv"; a.click();
  };

  const segStats = [
    { label: lang === "es" ? "Círculo cercano" : "Close circle", total: 20, used: codes.filter(c => c.segment === "Círculo cercano" && c.status === "used").length },
    { label: lang === "es" ? "Grupos emprendedores" : "Entrepreneur groups", total: 40, used: codes.filter(c => c.segment === "Grupos emprendedores" && c.status === "used").length },
    { label: lang === "es" ? "Consultores políticos" : "Political consultants", total: 20, used: codes.filter(c => c.segment === "Consultores políticos" && c.status === "used").length },
    { label: lang === "es" ? "Reserva estratégica" : "Strategic reserve", total: 20, used: codes.filter(c => c.segment === "Reserva estratégica" && c.status === "used").length },
  ];

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

      {/* STATS HEADER */}
      <div style={{ background: "linear-gradient(135deg,#26215C,#A32D2D)", padding: "24px 5%" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: 16, marginBottom: 20, flexWrap: "wrap" }}>
            {[
              { label: t.totalLabel, val: 100, color: "white" },
              { label: t.usedLabel, val: used, color: "#FAEEDA" },
              { label: t.availableLabel, val: available, color: "#86efac" },
            ].map((s, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.1)", borderRadius: 12, padding: "16px 24px", flex: 1, minWidth: 120 }}>
                <p style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.label}</p>
                <p style={{ fontSize: 36, fontWeight: 900, color: s.color, margin: 0, letterSpacing: "-0.03em" }}>{s.val}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", margin: "0 0 6px" }}>{t.progressLabel}</p>
          <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 4, height: 8 }}>
            <div style={{ width: `${(used / 5000) * 100}%`, height: "100%", background: "#FAEEDA", borderRadius: 4, minWidth: 4 }} />
          </div>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", margin: "6px 0 0" }}>{used} / 5,000</p>
        </div>
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "24px 5%" }}>

        {/* SEGMENT STATS */}
        <div style={{ display: "flex", gap: 10, marginBottom: 20, flexWrap: "wrap" }}>
          {segStats.map((s, i) => (
            <div key={i} style={{ flex: 1, minWidth: 160, background: "white", border: "1px solid #e8e8f0", borderRadius: 12, padding: "14px 16px" }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: "#26215C", margin: "0 0 6px" }}>{s.label}</p>
              <div style={{ background: "#f3f4f6", borderRadius: 4, height: 5, marginBottom: 4 }}>
                <div style={{ width: `${(s.used / s.total) * 100}%`, height: "100%", background: "#A32D2D", borderRadius: 4, minWidth: s.used > 0 ? 4 : 0 }} />
              </div>
              <p style={{ fontSize: 11, color: "#9ca3af", margin: 0 }}>{s.used}/{s.total} {lang === "es" ? "usados" : "used"}</p>
            </div>
          ))}
        </div>

        {/* INFO BANNER */}
        <div style={{ background: "#FFF8F0", border: "1px solid #FFD4B8", borderRadius: 12, padding: "14px 18px", marginBottom: 20, display: "flex", gap: 12, alignItems: "flex-start" }}>
          <span style={{ fontSize: 20 }}>🎟️</span>
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#854d0e", margin: "0 0 3px" }}>{t.trialDays}</p>
            <p style={{ fontSize: 12, color: "#92400e", margin: 0, lineHeight: 1.5 }}>{t.includes}</p>
          </div>
        </div>

        {/* FILTERS */}
        <div style={{ display: "flex", gap: 10, marginBottom: 16, flexWrap: "wrap", alignItems: "center" }}>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder={t.searchPh}
            style={{ flex: 2, minWidth: 200, padding: "9px 14px", borderRadius: 9, border: "1px solid #e8e8f0", fontSize: 13, outline: "none", background: "white" }} />
          <div style={{ display: "flex", gap: 6 }}>
            {["all","available","used"].map((f, i) => (
              <button key={f} onClick={() => setFilter(f)}
                style={{ padding: "8px 14px", borderRadius: 8, border: "none", background: filter === f ? "#26215C" : "#f3f4f6", color: filter === f ? "white" : "#374151", fontSize: 12, fontWeight: filter === f ? 700 : 400, cursor: "pointer" }}>
                {[t.filterAll, t.filterAvailable, t.filterUsed][i]}
              </button>
            ))}
          </div>
          <button onClick={exportCSV} style={{ padding: "8px 14px", borderRadius: 8, border: "1px solid #e8e8f0", background: "white", color: "#374151", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
            {t.exportBtn}
          </button>
        </div>

        {/* CODES TABLE */}
        <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 16, overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "160px 1fr 140px 100px auto", gap: 0, background: "#fafafa", borderBottom: "1px solid #f0f0f5", padding: "10px 18px" }}>
            {[t.codeLabel, t.assignedTo, t.segment, t.status, ""].map((h, i) => (
              <p key={i} style={{ fontSize: 11, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.05em", margin: 0 }}>{h}</p>
            ))}
          </div>
          <div style={{ maxHeight: 480, overflowY: "auto" }}>
            {filtered.slice(0, 50).map(c => (
              <div key={c.num} style={{ display: "grid", gridTemplateColumns: "160px 1fr 140px 100px auto", gap: 0, padding: "11px 18px", borderBottom: "1px solid #f5f5f5", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <code style={{ fontSize: 12, fontWeight: 700, color: "#26215C", background: "#FFF8F0", padding: "3px 8px", borderRadius: 6 }}>{c.code}</code>
                </div>
                <p style={{ fontSize: 13, color: c.assignedTo ? "#374151" : "#d1d5db", margin: 0 }}>{c.assignedTo || "—"}</p>
                <p style={{ fontSize: 11, color: "#9ca3af", margin: 0 }}>{lang === "es" ? c.segment : c.segmentEn}</p>
                <span style={{ fontSize: 11, fontWeight: 700, color: c.status === "used" ? "#16a34a" : "#A32D2D", background: c.status === "used" ? "#f0fdf4" : "#fff5f5", padding: "3px 9px", borderRadius: 20, display: "inline-block" }}>
                  {c.status === "used" ? t.used : t.available}
                </span>
                <div style={{ display: "flex", gap: 6, justifyContent: "flex-end" }}>
                  <button onClick={() => copyCode(c.code)}
                    style={{ fontSize: 11, padding: "5px 10px", borderRadius: 7, border: "1px solid #e5e7eb", background: copiedCode === c.code ? "#f0fdf4" : "white", color: copiedCode === c.code ? "#16a34a" : "#6b7280", cursor: "pointer", fontWeight: 600 }}>
                    {copiedCode === c.code ? t.copied : t.copyCode}
                  </button>
                  {c.status === "available" && (
                    assigning === c.num ? (
                      <div style={{ display: "flex", gap: 4 }}>
                        <input value={assignName} onChange={e => setAssignName(e.target.value)} placeholder="Nombre..." autoFocus
                          onKeyDown={e => e.key === "Enter" && assignCode(c.num)}
                          style={{ width: 110, padding: "4px 8px", borderRadius: 6, border: "1px solid #e5e7eb", fontSize: 12, outline: "none" }} />
                        <button onClick={() => assignCode(c.num)} style={{ padding: "4px 8px", borderRadius: 6, border: "none", background: "#26215C", color: "white", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>✓</button>
                        <button onClick={() => { setAssigning(null); setAssignName(""); }} style={{ padding: "4px 8px", borderRadius: 6, border: "1px solid #e5e7eb", background: "white", color: "#9ca3af", fontSize: 11, cursor: "pointer" }}>✕</button>
                      </div>
                    ) : (
                      <button onClick={() => setAssigning(c.num)}
                        style={{ fontSize: 11, padding: "5px 10px", borderRadius: 7, border: "none", background: "#26215C", color: "white", cursor: "pointer", fontWeight: 700 }}>
                        {t.assignBtn}
                      </button>
                    )
                  )}
                  {c.status === "available" && (
                    <button onClick={() => setShowMessage(c.code)}
                      style={{ fontSize: 11, padding: "5px 10px", borderRadius: 7, border: "1px solid #FAEEDA", background: "#FFF8F0", color: "#854d0e", cursor: "pointer", fontWeight: 600 }}>
                      💬
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
          {filtered.length > 50 && (
            <div style={{ padding: "12px", textAlign: "center", borderTop: "1px solid #f0f0f5" }}>
              <p style={{ fontSize: 12, color: "#9ca3af", margin: 0 }}>Mostrando 50 de {filtered.length} — usa el buscador para filtrar</p>
            </div>
          )}
        </div>
      </div>

      {/* WHATSAPP MESSAGE MODAL */}
      {showMessage && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 200, padding: "1rem" }}>
          <div style={{ background: "white", borderRadius: 18, padding: 28, width: "100%", maxWidth: 480 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
              <p style={{ fontSize: 16, fontWeight: 800, color: "#26215C", margin: 0 }}>💬 {t.generateMessage}</p>
              <button onClick={() => setShowMessage(null)} style={{ background: "none", border: "none", fontSize: 22, cursor: "pointer", color: "#9ca3af" }}>×</button>
            </div>
            <div style={{ background: "#f0fdf4", borderRadius: 12, padding: "14px 16px", fontFamily: "monospace", fontSize: 13, color: "#374151", lineHeight: 1.6, marginBottom: 16, whiteSpace: "pre-wrap" }}>
              {t.messageTemplate(showMessage)}
            </div>
            <button onClick={() => { navigator.clipboard.writeText(t.messageTemplate(showMessage)); setShowMessage(null); }}
              style={{ width: "100%", padding: "13px", borderRadius: 11, border: "none", background: "#26215C", color: "white", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
              📋 {lang === "es" ? "Copiar y cerrar" : "Copy and close"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

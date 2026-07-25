import { useState } from "react";

const T = {
  es: {
    title: "Códigos Beta Voxa",
    sub: "500 accesos de cortesía — 30 días de acceso completo sin costo",
    badge: "🔑 Programa Beta Exclusivo",
    inputLabel: "Ingresa tu código beta",
    inputPh: "VOXA-BETA-001",
    activateBtn: "🚀 Activar acceso beta",
    activating: "Verificando código...",
    successTitle: "¡Acceso beta activado!",
    successSub: "Tienes 30 días de acceso completo a todos los módulos de Voxa — incluyendo el Modo Político.",
    invalidMsg: "Código inválido o ya utilizado. Verifica e intenta de nuevo.",
    features: [
      "✅ Campañas ilimitadas por 30 días",
      "✅ Business Brain + Autopilot + Predict",
      "✅ Modo Político exclusivo LATAM",
      "✅ Todos los agentes especialistas",
      "✅ Voxa Intelligence completo",
      "✅ Sin tarjeta de crédito requerida",
    ],
    statsTitle: "Estado de los códigos beta",
    available: "Disponibles",
    used: "Activados",
    total: "Total",
    adminTitle: "Panel de administración",
    adminSub: "Gestión de los 500 códigos beta",
    ranges: [
      { label: "Círculo cercano", range: "001-100", qty: 100, color: "#26215C" },
      { label: "Grupos emprendedores LATAM", range: "101-250", qty: 150, color: "#A32D2D" },
      { label: "Consultores políticos", range: "251-350", qty: 100, color: "#0891b2" },
      { label: "Agencias de marketing", range: "351-450", qty: 100, color: "#16a34a" },
      { label: "Reserva estratégica", range: "451-500", qty: 50, color: "#f59e0b" },
    ],
    copyBtn: "Copiar código",
    copied: "✓ Copiado",
    downloadBtn: "📥 Descargar lista completa",
    viewAdmin: "Ver panel admin",
    backToActivate: "← Activar código",
  },
  en: {
    title: "Voxa Beta Codes",
    sub: "500 courtesy accesses — 30 days of full access at no cost",
    badge: "🔑 Exclusive Beta Program",
    inputLabel: "Enter your beta code",
    inputPh: "VOXA-BETA-001",
    activateBtn: "🚀 Activate beta access",
    activating: "Verifying code...",
    successTitle: "Beta access activated!",
    successSub: "You have 30 days of full access to all Voxa modules — including Political Mode.",
    invalidMsg: "Invalid or already used code. Verify and try again.",
    features: [
      "✅ Unlimited campaigns for 30 days",
      "✅ Business Brain + Autopilot + Predict",
      "✅ Exclusive Political Mode LATAM",
      "✅ All specialist agents",
      "✅ Full Voxa Intelligence",
      "✅ No credit card required",
    ],
    statsTitle: "Beta codes status",
    available: "Available",
    used: "Activated",
    total: "Total",
    adminTitle: "Administration panel",
    adminSub: "Management of 500 beta codes",
    ranges: [
      { label: "Close circle", range: "001-100", qty: 100, color: "#26215C" },
      { label: "LATAM entrepreneur groups", range: "101-250", qty: 150, color: "#A32D2D" },
      { label: "Political consultants", range: "251-350", qty: 100, color: "#0891b2" },
      { label: "Marketing agencies", range: "351-450", qty: 100, color: "#16a34a" },
      { label: "Strategic reserve", range: "451-500", qty: 50, color: "#f59e0b" },
    ],
    copyBtn: "Copy code",
    copied: "✓ Copied",
    downloadBtn: "📥 Download full list",
    viewAdmin: "View admin panel",
    backToActivate: "← Activate code",
  }
};

// Generar 500 códigos
const CODES = Array.from({ length: 500 }, (_, i) => ({
  code: `VOXA-BETA-${String(i + 1).padStart(3, "0")}`,
  used: i < 3, // Simulamos 3 ya usados
  usedBy: i < 3 ? ["Carmen R.", "Roberto L.", "Dr. Ramírez"][i] : null,
}));

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

export default function VoxaCodigosBeta() {
  const [lang, setLang] = useState("es");
  const [code, setCode] = useState("");
  const [status, setStatus] = useState(null); // null | "success" | "error"
  const [loading, setLoading] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [copiedCode, setCopiedCode] = useState(null);
  const [searchCode, setSearchCode] = useState("");
  const t = T[lang];

  const usedCount = CODES.filter(c => c.used).length;
  const availableCount = CODES.length - usedCount;

  const activate = async () => {
    if (!code.trim()) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    const found = CODES.find(c => c.code === code.toUpperCase().trim());
    if (found && !found.used) {
      found.used = true;
      setStatus("success");
    } else {
      setStatus("error");
    }
    setLoading(false);
  };

  const copyCode = (c) => {
    navigator.clipboard.writeText(c);
    setCopiedCode(c);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const downloadCodes = () => {
    const content = CODES.map(c => `${c.code},${c.used ? "USADO" : "DISPONIBLE"}${c.usedBy ? `,${c.usedBy}` : ""}`).join("\n");
    const blob = new Blob([`CÓDIGO,ESTADO,USUARIO\n${content}`], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "voxa-beta-500-codigos.csv"; a.click();
  };

  const filtered = CODES.filter(c => searchCode ? c.code.includes(searchCode.toUpperCase()) : true);

  return (
    <div style={{ fontFamily: "'Inter',system-ui,sans-serif", background: "#0D0B1A", minHeight: "100vh", color: "white" }}>

      {/* HEADER */}
      <div style={{ background: "linear-gradient(135deg,#26215C,#1a1730)", padding: "0 5%", height: 62, display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <div style={{ width: 30, height: 30, background: "#A32D2D", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "white", fontSize: 14 }}>V</div>
          <span style={{ fontWeight: 900, fontSize: 17, color: "white" }}>Voxa</span>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginLeft: 4 }}>{t.badge}</span>
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <button onClick={() => setShowAdmin(!showAdmin)} style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, padding: "6px 12px", cursor: "pointer" }}>
            {showAdmin ? t.backToActivate : t.viewAdmin}
          </button>
          <LangToggle lang={lang} setLang={setLang} />
        </div>
      </div>

      {!showAdmin ? (
        /* ── PANTALLA DE ACTIVACIÓN ── */
        <div style={{ maxWidth: 520, margin: "0 auto", padding: "60px 5%" }}>

          {status === "success" ? (
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 64, marginBottom: 20 }}>🎉</div>
              <h2 style={{ fontSize: 26, fontWeight: 900, color: "white", margin: "0 0 10px", letterSpacing: "-.03em" }}>{t.successTitle}</h2>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", margin: "0 0 32px", lineHeight: 1.65 }}>{t.successSub}</p>
              <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: "24px", marginBottom: 28, textAlign: "left" }}>
                {t.features.map((f, i) => (
                  <p key={i} style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", margin: "0 0 10px", lineHeight: 1.5 }}>{f}</p>
                ))}
              </div>
              <button style={{ width: "100%", padding: "15px", background: "#A32D2D", border: "none", borderRadius: 12, color: "white", fontSize: 15, fontWeight: 800, cursor: "pointer", boxShadow: "0 4px 20px rgba(163,45,45,0.35)" }}>
                {lang === "es" ? "Entrar a Voxa →" : "Enter Voxa →"}
              </button>
            </div>
          ) : (
            <div>
              <div style={{ textAlign: "center", marginBottom: 40 }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(163,45,45,0.12)", border: "1px solid rgba(163,45,45,0.25)", borderRadius: 100, padding: "6px 16px", marginBottom: 20 }}>
                  <span style={{ width: 7, height: 7, background: "#A32D2D", borderRadius: "50%", animation: "pulse 1.5s ease-in-out infinite", display: "inline-block" }} />
                  <span style={{ fontSize: 12, color: "#FAEEDA", fontWeight: 600 }}>{availableCount} {lang === "es" ? "códigos disponibles" : "codes available"}</span>
                </div>
                <h1 style={{ fontSize: 32, fontWeight: 900, color: "white", margin: "0 0 10px", letterSpacing: "-.04em", lineHeight: 1.1 }}>{t.title}</h1>
                <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", margin: 0, lineHeight: 1.6 }}>{t.sub}</p>
              </div>

              <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 18, padding: "28px", marginBottom: 20 }}>
                <label style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.35)", display: "block", marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.08em" }}>{t.inputLabel}</label>
                <input
                  value={code}
                  onChange={e => { setCode(e.target.value.toUpperCase()); setStatus(null); }}
                  placeholder={t.inputPh}
                  style={{ width: "100%", padding: "14px 16px", fontSize: 18, fontWeight: 700, letterSpacing: "0.05em", borderRadius: 12, border: status === "error" ? "2px solid #ef4444" : "1.5px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.06)", color: "white", outline: "none", fontFamily: "monospace", boxSizing: "border-box", marginBottom: 14 }}
                  onKeyDown={e => e.key === "Enter" && activate()}
                />
                {status === "error" && (
                  <p style={{ fontSize: 13, color: "#fca5a5", margin: "0 0 14px", textAlign: "center" }}>❌ {t.invalidMsg}</p>
                )}
                <button onClick={activate} disabled={!code.trim() || loading}
                  style={{ width: "100%", padding: "15px", background: code.trim() && !loading ? "#A32D2D" : "rgba(255,255,255,0.08)", border: "none", borderRadius: 12, color: "white", fontSize: 15, fontWeight: 800, cursor: code.trim() && !loading ? "pointer" : "not-allowed", transition: "all .2s", boxShadow: code.trim() && !loading ? "0 4px 20px rgba(163,45,45,0.35)" : "none" }}>
                  {loading ? (
                    <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                      <span style={{ width: 16, height: 16, border: "2px solid rgba(255,255,255,.3)", borderTopColor: "white", borderRadius: "50%", display: "inline-block", animation: "spin .7s linear infinite" }} />
                      {t.activating}
                    </span>
                  ) : t.activateBtn}
                </button>
              </div>

              <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, padding: "18px 20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
                  {[[availableCount, t.available, "#86efac"], [usedCount, t.used, "#A32D2D"], [500, t.total, "rgba(255,255,255,0.4)"]].map(([n, l, c]) => (
                    <div key={l} style={{ textAlign: "center" }}>
                      <p style={{ fontSize: 28, fontWeight: 900, color: c, margin: "0 0 4px", letterSpacing: "-.03em" }}>{n}</p>
                      <p style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", margin: 0, textTransform: "uppercase", letterSpacing: ".06em" }}>{l}</p>
                    </div>
                  ))}
                </div>
                <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: 4, height: 6, overflow: "hidden" }}>
                  <div style={{ width: `${(usedCount / 500) * 100}%`, height: "100%", background: "#A32D2D", borderRadius: 4, transition: "width .6s" }} />
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* ── PANEL ADMIN ── */
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 5%" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, flexWrap: "wrap", gap: 14 }}>
            <div>
              <h2 style={{ fontSize: 22, fontWeight: 900, color: "white", margin: "0 0 4px", letterSpacing: "-.03em" }}>{t.adminTitle}</h2>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", margin: 0 }}>{t.adminSub}</p>
            </div>
            <button onClick={downloadCodes} style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 18px", background: "#A32D2D", border: "none", borderRadius: 10, color: "white", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
              {t.downloadBtn}
            </button>
          </div>

          {/* DISTRIBUCIÓN */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 12, marginBottom: 24 }}>
            {t.ranges.map((r, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, padding: "16px", borderLeft: `3px solid ${r.color}` }}>
                <p style={{ fontSize: 20, fontWeight: 900, color: r.color, margin: "0 0 4px", letterSpacing: "-.02em" }}>{r.qty}</p>
                <p style={{ fontSize: 12, fontWeight: 700, color: "white", margin: "0 0 3px" }}>{r.label}</p>
                <p style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", margin: 0, fontFamily: "monospace" }}>#{r.range}</p>
              </div>
            ))}
          </div>

          {/* BUSCADOR */}
          <div style={{ marginBottom: 16 }}>
            <input value={searchCode} onChange={e => setSearchCode(e.target.value)} placeholder="Buscar código... ej: 042"
              style={{ width: "100%", padding: "11px 14px", fontSize: 14, borderRadius: 10, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)", color: "white", outline: "none", fontFamily: "inherit", boxSizing: "border-box" }} />
          </div>

          {/* LISTA DE CÓDIGOS */}
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, overflow: "hidden" }}>
            <div style={{ maxHeight: 420, overflowY: "auto" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: 8, padding: "16px" }}>
                {filtered.slice(0, 200).map((c, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", justify: "space-between", gap: 8, padding: "8px 12px", background: c.used ? "rgba(163,45,45,0.08)" : "rgba(255,255,255,0.04)", border: `1px solid ${c.used ? "rgba(163,45,45,0.2)" : "rgba(255,255,255,0.06)"}`, borderRadius: 8 }}>
                    <span style={{ fontSize: 12, fontWeight: 700, color: c.used ? "rgba(255,255,255,0.3)" : "white", fontFamily: "monospace", flex: 1 }}>{c.code}</span>
                    {c.used ? (
                      <span style={{ fontSize: 10, color: "#fca5a5", fontWeight: 600 }}>USADO</span>
                    ) : (
                      <button onClick={() => copyCode(c.code)} style={{ fontSize: 10, color: copiedCode === c.code ? "#86efac" : "rgba(255,255,255,0.4)", background: "none", border: "none", cursor: "pointer", padding: 0, fontWeight: 600, whiteSpace: "nowrap" }}>
                        {copiedCode === c.code ? "✓" : "📋"}
                      </button>
                    )}
                  </div>
                ))}
              </div>
              {filtered.length > 200 && (
                <p style={{ textAlign: "center", padding: "12px", fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
                  Mostrando 200 de {filtered.length} — usa el buscador para encontrar un código específico
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes spin { to { transform: rotate(360deg) } }
        @keyframes pulse { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.5);opacity:.5} }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 2px; }
      `}</style>
    </div>
  );
}
